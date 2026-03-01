/**
 * Run report types for post-pipeline analysis.
 */

import type { ErrorCategory } from './errors.js';

export interface RunReport {
  meta: {
    runId: string;
    contentPath: string;
    slug: string;
    startedAt: string;
    completedAt: string;
    totalDurationMs: number;
    totalDurationHuman: string;
    totalPasses: number;
    totalCostUsd: number;
    paCycles: number;
    finalVerdict: 'SHIP' | 'REFINE' | 'RETHINK' | 'FAILED' | 'BUDGET_CAP';
  };
  costBreakdown: {
    perSubset: Record<string, number>;
    perRole: Record<string, number>;
    perPhase: { A: number; B: number };
    tokenTotals: {
      input: number;
      output: number;
      cacheRead: number;
      cacheWrite: number;
    };
  };
  artifactEvolution: {
    initialSize: number;
    finalSize: number;
    peakSize: number;
    sizeHistory: number[];
    subsetDeltas: number[];
  };
  verifierSignal: {
    observations: string[];
    sentimentArc: ('improving' | 'stable' | 'regressing')[];
    concerns: string[];
  };
  rotationAnalysis: {
    filesPerSubset: Record<string, string[]>;
    positionHistory: Record<string, ('primacy' | 'valley' | 'recency')[]>;
  };
  paResults?: {
    cycles: number;
    finalPa05: number;
    pa05Trajectory: number[];
    tier5Scores: number[];
    auditorConvergence: Record<string, number>;
    fixCategories: { mechanical: number; structural: number; compositional: number };
    finalVerdict: string;
  };
  qualityTrajectory: {
    checkpoints: Array<{
      subset: number;
      artifactSize: number;
      verifierSentiment: string;
      convictionCount: number;
      discoveryCount: number;
      pa05?: number;
    }>;
  };
  errors: {
    total: number;
    recovered: number;
    unrecovered: number;
    byCategory: Partial<Record<ErrorCategory, number>>;
  };
}
