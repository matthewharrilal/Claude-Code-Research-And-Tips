/**
 * Post-run report generation.
 * Aggregates all pipeline metrics into a structured RunReport.
 */

import fs from 'node:fs';
import path from 'node:path';
import type { PipelineState } from '../types/state.js';
import type { RunReport } from '../types/report.js';
import type { ErrorCategory } from '../types/errors.js';
import { formatDuration } from '../utils.js';

/**
 * Generate a comprehensive post-run report from final pipeline state.
 */
export function generateReport(state: PipelineState): RunReport {
  const startMs = new Date(state.startedAt).getTime();
  const endMs = state.completedAt ? new Date(state.completedAt).getTime() : Date.now();
  const durationMs = endMs - startMs;

  // Determine final verdict
  let finalVerdict: RunReport['meta']['finalVerdict'];
  if (state.cost.hardCapHit) {
    finalVerdict = 'BUDGET_CAP';
  } else if (state.status === 'failed') {
    finalVerdict = 'FAILED';
  } else if (state.paCycleRecords.length > 0) {
    const lastCycle = state.paCycleRecords[state.paCycleRecords.length - 1];
    finalVerdict = lastCycle.routingDecision;
  } else {
    finalVerdict = 'FAILED';
  }

  // Cost breakdown per phase: A = corpus-integration passes, B = PA passes
  const corpusCost = state.passes
    .filter(p => p.passNumber <= state.totalCorpusPasses)
    .reduce((sum, p) => sum + p.cost, 0);
  const paCost = state.paCycleRecords.reduce((sum, c) => sum + c.cost, 0);

  // Per-role cost
  const perRole: Record<string, number> = {};
  for (const p of state.passes) {
    perRole[p.role] = (perRole[p.role] ?? 0) + p.cost;
  }

  // Per-subset cost
  const perSubset: Record<string, number> = {};
  for (const p of state.passes) {
    const key = String(p.subsetId);
    perSubset[key] = (perSubset[key] ?? 0) + p.cost;
  }

  // Artifact evolution
  const sizes = state.artifactSizeHistory;
  const initialSize = sizes.length > 0 ? sizes[0] : 0;
  const finalSize = sizes.length > 0 ? sizes[sizes.length - 1] : 0;
  const peakSize = sizes.length > 0 ? Math.max(...sizes) : 0;

  // Subset deltas: size change per subset boundary
  const subsetDeltas: number[] = [];
  for (let s = 1; s <= 7; s++) {
    const subsetPasses = state.passes.filter(p => p.subsetId === s);
    if (subsetPasses.length > 0) {
      const first = subsetPasses[0];
      const last = subsetPasses[subsetPasses.length - 1];
      subsetDeltas.push(last.artifactSizeAfter - first.artifactSizeBefore);
    }
  }

  // Verifier signal
  const verifierPasses = state.passes.filter(p => p.role === 'verifier');
  const sentimentArc: ('improving' | 'stable' | 'regressing')[] = [];
  for (let i = 0; i < verifierPasses.length; i++) {
    const p = verifierPasses[i];
    if (i === 0) {
      sentimentArc.push('stable');
    } else {
      const prev = verifierPasses[i - 1];
      const delta = p.artifactSizeAfter - prev.artifactSizeAfter;
      if (delta > 100) sentimentArc.push('improving');
      else if (delta < -100) sentimentArc.push('regressing');
      else sentimentArc.push('stable');
    }
  }

  // PA results
  let paResults: RunReport['paResults'];
  if (state.paCycleRecords.length > 0) {
    const pa05Trajectory = state.paCycleRecords.map(c => c.weaverVerdict.pa05Score);
    const tier5Scores = state.paCycleRecords.map(c => c.weaverVerdict.tier5);
    const lastCycle = state.paCycleRecords[state.paCycleRecords.length - 1];

    // Count fix categories from last weaver verdict
    const fixCategories = { mechanical: 0, structural: 0, compositional: 0 };
    for (const fix of lastCycle.weaverVerdict.top5Fixes) {
      const cat = fix.category.toLowerCase() as keyof typeof fixCategories;
      if (cat in fixCategories) fixCategories[cat]++;
    }

    // Auditor convergence: how many auditors flagged the same issues
    const auditorConvergence: Record<string, number> = {};
    for (const fix of lastCycle.weaverVerdict.top5Fixes) {
      auditorConvergence[fix.description] = fix.convergenceCount;
    }

    paResults = {
      cycles: state.paCycleRecords.length,
      finalPa05: pa05Trajectory[pa05Trajectory.length - 1],
      pa05Trajectory,
      tier5Scores,
      auditorConvergence,
      fixCategories,
      finalVerdict: lastCycle.weaverVerdict.verdict,
    };
  }

  // Quality trajectory checkpoints
  const checkpoints: RunReport['qualityTrajectory']['checkpoints'] = [];
  for (let s = 1; s <= 7; s++) {
    const subsetPasses = state.passes.filter(p => p.subsetId === s);
    if (subsetPasses.length === 0) continue;
    const lastPass = subsetPasses[subsetPasses.length - 1];
    const convictionCount = state.convictionLayer.filter(c => c.subsetId === s).length;
    const discoveryCount = state.discoveryLog.length; // cumulative

    checkpoints.push({
      subset: s,
      artifactSize: lastPass.artifactSizeAfter,
      verifierSentiment: sentimentArc[Math.min(s - 1, sentimentArc.length - 1)] ?? 'stable',
      convictionCount,
      discoveryCount,
      pa05: paResults?.pa05Trajectory[0], // pre-PA snapshot if available
    });
  }

  // Error summary
  const errorsByCategory: Partial<Record<ErrorCategory, number>> = {};
  for (const e of state.errorHistory) {
    errorsByCategory[e.category] = (errorsByCategory[e.category] ?? 0) + 1;
  }

  return {
    meta: {
      runId: state.runId,
      contentPath: state.contentPath,
      slug: state.slug,
      startedAt: state.startedAt,
      completedAt: state.completedAt ?? new Date().toISOString(),
      totalDurationMs: durationMs,
      totalDurationHuman: formatDuration(durationMs),
      totalPasses: state.passes.length,
      totalCostUsd: state.cost.totalCostUsd,
      paCycles: state.paCycleRecords.length,
      finalVerdict,
    },
    costBreakdown: {
      perSubset,
      perRole,
      perPhase: { A: corpusCost, B: paCost },
      tokenTotals: {
        input: state.cost.totalInputTokens,
        output: state.cost.totalOutputTokens,
        cacheRead: state.cost.totalCacheReadTokens,
        cacheWrite: state.cost.totalCacheWriteTokens,
      },
    },
    artifactEvolution: {
      initialSize,
      finalSize,
      peakSize,
      sizeHistory: sizes,
      subsetDeltas,
    },
    verifierSignal: {
      observations: state.verifierObservations,
      sentimentArc,
      concerns: state.verifierObservations.filter(o =>
        /concern|issue|problem|regression|missing|broken/i.test(o),
      ),
    },
    rotationAnalysis: {
      filesPerSubset: {},  // Populated by orchestrator with corpus data
      positionHistory: {}, // Populated by orchestrator with rotation data
    },
    paResults,
    qualityTrajectory: { checkpoints },
    errors: {
      total: state.errorHistory.length,
      recovered: state.errorHistory.filter(e => e.recovered).length,
      unrecovered: state.errorHistory.filter(e => !e.recovered).length,
      byCategory: errorsByCategory,
    },
  };
}

/**
 * Write the run report to the output directory.
 */
export function writeReport(report: RunReport, outputDir: string): string {
  const reportPath = path.join(outputDir, 'run-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  return reportPath;
}
