/**
 * Main pipeline orchestrator — the top-level execution loop.
 *
 * Phase 0: TC derivation -> content analysis -> workspace setup
 * Phase A: For each subset S1-S7, for each pass P1-P8: executeSinglePass.
 *          After each subset: checkpoint + optional retrospective.
 *          After S2/S4/S6: cross-subset verification.
 * Phase B: For each PA cycle (max 3): screenshots -> gates -> 8 auditors
 *          -> integrative -> weaver -> route (SHIP/REFINE/RETHINK).
 *          Stall detection. Budget checks.
 */

import fs from 'node:fs';
import path from 'node:path';
import type { PipelineConfig } from '../types/pipeline.js';
import type { PipelineState } from '../types/state.js';
import type { PassDefinition, ClaudeResponse } from '../types/pass.js';
import { PASS_ROLES, getRotationIndex } from '../types/pass.js';
import { BudgetExceededError } from '../types/errors.js';
import {
  PASSES_PER_SUBSET,
  TOTAL_SUBSETS,
  MAX_PA_CYCLES,
  PA_THRESHOLD,
  TIER5_MINIMUM,
  RETHINK_THRESHOLD,
  BUDGET_WARNING,
  BUDGET_CAP,
} from '../config/constants.js';
import { CORPUS_SUBSETS } from '../config/corpus.js';
import { atomicWriteFile, sha256, readFileChecked, formatDuration } from '../utils.js';
import { computeRotation } from './rotation.js';
import { executeSinglePass } from './pass-executor.js';
import type { PassExecutorDeps } from './pass-executor.js';
import { routePhaseB, detectStall, checkBudget } from './phase-router.js';
import { createWorkspace, createSubsetCheckpointDir } from './workspace-setup.js';
import { shouldRunCrossSubsetVerification, buildCrossSubsetVerifierPrompt } from './cross-subset-verifier.js';
import { extractHtml as extractHtmlCanonical } from '../agents/response-handler.js';

/**
 * Full pipeline dependencies — injected to keep this module testable.
 * Extends PassExecutorDeps with Phase 0 and Phase B capabilities.
 */
export interface PipelineDeps extends PassExecutorDeps {
  /** Run TC derivation (Phase 0 step 1) */
  runTcDerivation(config: PipelineConfig): Promise<ClaudeResponse>;

  /** Run content analysis (Phase 0 step 2) */
  runContentAnalysis(config: PipelineConfig): Promise<ClaudeResponse>;

  /** Run cross-subset verifier (after S2, S4, S6) */
  runCrossSubsetVerifier(prompt: string, config: PipelineConfig): Promise<ClaudeResponse>;

  /** Run retrospective (after each subset) */
  runRetrospective(state: PipelineState, subsetId: number, config: PipelineConfig): Promise<ClaudeResponse>;

  /** Capture screenshots for PA cycle */
  captureScreenshots(artifactPath: string, outputDir: string, config: PipelineConfig): Promise<string[]>;

  /** Run programmatic gates */
  runGates(artifactPath: string, config: PipelineConfig): Promise<Record<string, boolean>>;

  /** Spawn 8 parallel PA auditors + 1 sequential integrative */
  spawnAuditors(
    screenshotPaths: string[],
    artifactPath: string,
    gateResults: Record<string, boolean>,
    config: PipelineConfig,
  ): Promise<{ reportPaths: string[]; totalCost: number; totalInputTokens: number; totalOutputTokens: number }>;

  /** Spawn weaver */
  spawnWeaver(
    auditorReportPaths: string[],
    screenshotPaths: string[],
    gateResults: Record<string, boolean>,
    state: PipelineState,
    config: PipelineConfig,
  ): Promise<{ verdict: import('../types/state.js').WeaverVerdict; cost: number; inputTokens: number; outputTokens: number }>;

  /** Spawn refine builder */
  spawnRefineBuilder(
    weaverReport: string,
    state: PipelineState,
    config: PipelineConfig,
  ): Promise<ClaudeResponse>;

  /** Load state from disk */
  loadState(config: PipelineConfig): Promise<PipelineState>;

  /** Log a message */
  log(level: 'info' | 'warn' | 'error', message: string): void;

  /** Record a decision to decisions.jsonl */
  recordDecision(outputDir: string, decision: Record<string, unknown>): void;
}

/**
 * Run the full pipeline.
 *
 * Supports:
 * - --dry-run: print execution plan without running
 * - --subset N: run only specified subset
 * - --skip-phase-a: skip to Phase B on existing artifact
 * - --resume: resume from existing state.json
 */
export async function runPipeline(
  config: PipelineConfig,
  deps: PipelineDeps,
): Promise<void> {
  const runStart = Date.now();

  // Dry run mode: print plan and exit
  if (config.dryRun) {
    printExecutionPlan(config);
    return;
  }

  let state: PipelineState;

  if (config.resume) {
    // Resume from existing state
    deps.log('info', 'Resuming pipeline from existing state...');
    state = await deps.loadState(config);

    // If resuming into a phase that requires Phase 0 outputs, verify they exist
    if (state.currentPhase === 'corpus-integration' || state.currentPhase === 'pa-hardening') {
      const tcBriefPath = path.join(config.outputDir, '_tc-brief.md');
      if (!fs.existsSync(tcBriefPath)) {
        deps.log('error', 'Cannot resume: _tc-brief.md not found (Phase 0 may not have completed)');
        throw new Error(
          `Resume failed: ${tcBriefPath} does not exist. ` +
          `Phase 0 may not have completed. Start a fresh run instead.`
        );
      }
    }

    deps.log('info', `Resumed at subset ${state.currentSubsetId}, pass ${state.currentPass}`);
  } else if (config.skipPhaseA) {
    // Skip Phase A: set up workspace and jump to Phase B
    deps.log('info', 'Skipping Phase A — running Phase B only on seed artifact');
    await createWorkspace(config);
    state = await deps.loadState(config);

    // Copy seed artifact to output path
    if (config.seedArtifactPath) {
      const seedHtml = readFileChecked(config.seedArtifactPath);
      atomicWriteFile(state.artifactPath, seedHtml);
      state = {
        ...state,
        currentArtifactHash: sha256(seedHtml),
        artifactSizeHistory: [seedHtml.length],
      };
      await deps.saveState(state, config);
    }

    state = { ...state, currentPhase: 'pa-hardening' };
    await deps.saveState(state, config);
  } else {
    // Fresh run: Phase 0 setup
    deps.log('info', 'Starting fresh pipeline run');
    await createWorkspace(config);
    state = await deps.loadState(config);

    // Phase 0: TC derivation + content analysis
    state = await runPhase0(state, config, deps);
  }

  // Phase A: Corpus integration
  if (state.currentPhase === 'corpus-integration' && !config.skipPhaseA) {
    state = await runPhaseA(state, config, deps);
  }

  // Phase B: PA hardening
  if (state.currentPhase === 'pa-hardening' || state.currentPhase === 'corpus-integration') {
    // Transition to PA hardening
    state = { ...state, currentPhase: 'pa-hardening' };
    await deps.saveState(state, config);
    state = await runPhaseB(state, config, deps);
  } else if (state.currentPhase !== 'completed' && state.currentPhase !== 'paused' && state.currentPhase !== 'failed') {
    deps.log('error', `Unexpected phase '${state.currentPhase}' after Phase A — cannot proceed to Phase B`);
    state = { ...state, status: 'failed', currentPhase: 'failed', phaseReason: `Unexpected phase: ${state.currentPhase}` };
    await deps.saveState(state, config);
    return;
  }

  // Pipeline complete
  const elapsed = Date.now() - runStart;
  deps.log('info', `Pipeline complete in ${formatDuration(elapsed)}. Cost: $${state.cost.totalCostUsd.toFixed(2)}`);

  state = {
    ...state,
    completedAt: new Date().toISOString(),
    status: 'completed',
    currentPhase: 'completed',
  };
  await deps.saveState(state, config);
}

/**
 * Phase 0: TC derivation + content analysis.
 * These produce _tc-brief.md and _content-map.md used by all subsequent passes.
 */
async function runPhase0(
  state: PipelineState,
  config: PipelineConfig,
  deps: PipelineDeps,
): Promise<PipelineState> {
  deps.log('info', '=== Phase 0: Pre-Pipeline Setup ===');

  // Step 0.1: TC Derivation
  deps.log('info', 'Step 0.1: Running TC derivation (conviction brief)...');
  try {
    const tcResponse = await deps.runTcDerivation(config);
    const tcBriefPath = path.join(config.outputDir, '_tc-brief.md');
    atomicWriteFile(tcBriefPath, tcResponse.result ?? '');
    state = updateCostFromResponse(state, tcResponse, 'tc-derivation');
    deps.log('info', `TC derivation complete. Cost: $${(tcResponse.total_cost_usd ?? 0).toFixed(2)}`);
  } catch (error) {
    deps.log('error', `TC derivation failed: ${error}`);
    throw error;
  }

  // Step 0.2: Content Analysis
  deps.log('info', 'Step 0.2: Running content analysis (content map)...');
  try {
    const contentResponse = await deps.runContentAnalysis(config);
    const contentMapPath = path.join(config.outputDir, '_content-map.md');
    atomicWriteFile(contentMapPath, contentResponse.result ?? '');
    state = updateCostFromResponse(state, contentResponse, 'content-analysis');
    deps.log('info', `Content analysis complete. Cost: $${(contentResponse.total_cost_usd ?? 0).toFixed(2)}`);
  } catch (error) {
    deps.log('error', `Content analysis failed: ${error}`);
    throw error;
  }

  await deps.saveState(state, config);
  return state;
}

/**
 * Phase A: Corpus integration — 7 subsets x 8 passes = 56 passes.
 */
async function runPhaseA(
  state: PipelineState,
  config: PipelineConfig,
  deps: PipelineDeps,
): Promise<PipelineState> {
  deps.log('info', '=== Phase A: Corpus Integration ===');

  const startSubset = config.subsetFilter ?? state.currentSubsetId;
  const endSubset = config.subsetFilter ?? TOTAL_SUBSETS;

  for (let subsetId = startSubset; subsetId <= endSubset; subsetId++) {
    const subset = CORPUS_SUBSETS.find(s => s.id === subsetId);
    if (!subset) {
      deps.log('warn', `Subset ${subsetId} not found in corpus definitions, skipping`);
      continue;
    }

    deps.log('info', `--- Subset ${subsetId}/${TOTAL_SUBSETS}: ${subset.name} (${subset.files.length} files) ---`);

    state = { ...state, currentSubsetId: subsetId };

    // Determine starting pass within subset (for resume support)
    const startPass = state.currentSubsetId === subsetId && state.currentPass > 1
      ? state.currentPass
      : 1;

    for (let passWithin = startPass; passWithin <= PASSES_PER_SUBSET; passWithin++) {
      const globalPassNumber = (subsetId - 1) * PASSES_PER_SUBSET + passWithin;
      const rotationIndex = getRotationIndex(passWithin);
      const role = PASS_ROLES[passWithin] ?? 'builder';

      const passDef: PassDefinition = {
        passNumber: globalPassNumber,
        subsetId,
        passWithinSubset: passWithin,
        role,
        rotationIndex,
        isVerifier: role === 'verifier',
      };

      const rotation = computeRotation(subset.files, rotationIndex);
      deps.log(
        'info',
        `Pass ${globalPassNumber} (S${subsetId}P${passWithin}) [${role}] ${rotation.description}`,
      );

      // Execute the pass
      try {
        const { state: newState, result } = await executeSinglePass(
          state,
          passDef,
          config,
          deps,
        );
        state = newState;

        if (result.success) {
          deps.log('info', `Pass ${globalPassNumber} complete. Cost: $${result.cost.toFixed(2)}`);
        } else {
          deps.log('warn', `Pass ${globalPassNumber} failed: ${result.error}`);
        }
      } catch (error) {
        if (error instanceof BudgetExceededError) {
          deps.log('error', `Budget exceeded at pass ${globalPassNumber}: ${error.message}`);
          state = {
            ...state,
            status: 'paused',
            currentPhase: 'paused',
            phaseReason: error.message,
          };
          await deps.saveState(state, config);
          throw error;
        }
        deps.log('error', `Pass ${globalPassNumber} threw: ${error}`);
        throw error;
      }

      // Budget warning check
      const budget = checkBudget(state.cost);
      if (budget.warning && !state.cost.warningThresholdHit) {
        deps.log('warn', `Budget warning: $${state.cost.totalCostUsd.toFixed(2)} of $${state.cost.budgetWarningThresholdUsd} threshold`);
      }
    }

    // Subset complete: checkpoint
    deps.log('info', `Subset ${subsetId} complete. Creating checkpoint...`);
    const checkpointDir = createSubsetCheckpointDir(config.outputDir, subsetId);

    // Copy artifact and state to checkpoint
    if (fs.existsSync(state.artifactPath)) {
      fs.copyFileSync(state.artifactPath, path.join(checkpointDir, 'artifact.html'));
    }
    const stateSnapshot = JSON.stringify(state, null, 2);
    atomicWriteFile(path.join(checkpointDir, 'state.json'), stateSnapshot);

    state = {
      ...state,
      checkpoints: [...state.checkpoints, checkpointDir],
      currentPass: 1, // Reset for next subset
    };
    await deps.saveState(state, config);

    // Retrospective (between subsets)
    deps.log('info', `Running retrospective for subset ${subsetId}...`);
    try {
      const retroResponse = await deps.runRetrospective(state, subsetId, config);
      const retroPath = path.join(checkpointDir, 'retrospective.md');
      atomicWriteFile(retroPath, retroResponse.result ?? '');
      state = updateCostFromResponse(state, retroResponse, 'retrospective');
    } catch (error) {
      if (error instanceof BudgetExceededError) throw error;
      deps.log('warn', `Retrospective for subset ${subsetId} failed (non-fatal): ${error}`);
    }

    // Cross-subset verification (after S2, S4, S6)
    if (shouldRunCrossSubsetVerification(subsetId)) {
      deps.log('info', `Running cross-subset verification after subset ${subsetId}...`);
      try {
        const verifierPrompt = buildCrossSubsetVerifierPrompt(state, state.checkpoints);
        const verifierResponse = await deps.runCrossSubsetVerifier(verifierPrompt, config);
        const verifierPath = path.join(checkpointDir, 'cross-subset-verification.md');
        atomicWriteFile(verifierPath, verifierResponse.result ?? '');
        state = updateCostFromResponse(state, verifierResponse, 'cross-subset-verifier');

        deps.recordDecision(config.outputDir, {
          type: 'cross-subset-verification',
          subsetId,
          timestamp: new Date().toISOString(),
          result: verifierResponse.result?.includes('CRITICAL') ? 'CRITICAL' : 'OK',
        });
      } catch (error) {
        if (error instanceof BudgetExceededError) throw error;
        deps.log('warn', `Cross-subset verification failed (non-fatal): ${error}`);
      }
    }
  }

  deps.log('info', `=== Phase A complete. ${state.totalCorpusPasses} passes, $${state.cost.totalCostUsd.toFixed(2)} total ===`);
  return state;
}

/**
 * Phase B: PA hardening — up to MAX_PA_CYCLES cycles.
 */
async function runPhaseB(
  state: PipelineState,
  config: PipelineConfig,
  deps: PipelineDeps,
): Promise<PipelineState> {
  deps.log('info', '=== Phase B: PA Hardening ===');

  for (let cycle = state.completedPACycles + 1; cycle <= MAX_PA_CYCLES; cycle++) {
    deps.log('info', `--- PA Cycle ${cycle}/${MAX_PA_CYCLES} ---`);
    const cycleStart = new Date().toISOString();

    // Step 1: Capture screenshots
    deps.log('info', 'Capturing screenshots...');
    let screenshotPaths: string[];
    try {
      screenshotPaths = await deps.captureScreenshots(
        state.artifactPath,
        path.join(config.outputDir, '_screenshots', `cycle-${cycle}`),
        config,
      );
    } catch (error) {
      deps.log('error', `Screenshot capture failed: ${error}`);
      throw error;
    }

    // Step 2: Run programmatic gates
    deps.log('info', 'Running programmatic gates...');
    let gateResults: Record<string, boolean>;
    try {
      gateResults = await deps.runGates(state.artifactPath, config);
    } catch (error) {
      if (error instanceof BudgetExceededError) throw error;
      deps.log('warn', `Gate runner failed (non-fatal): ${error}`);
      gateResults = {};
    }

    // Step 3: Spawn 8 parallel auditors + 1 sequential integrative
    deps.log('info', 'Spawning PA auditors (8 parallel + 1 integrative)...');
    let auditorResult: { reportPaths: string[]; totalCost: number; totalInputTokens: number; totalOutputTokens: number };
    try {
      auditorResult = await deps.spawnAuditors(
        screenshotPaths,
        state.artifactPath,
        gateResults,
        config,
      );
    } catch (error) {
      deps.log('error', `Auditor spawning failed: ${error}`);
      throw error;
    }

    // Track auditor costs in state
    state = {
      ...state,
      cost: {
        ...state.cost,
        totalCostUsd: state.cost.totalCostUsd + auditorResult.totalCost,
        totalInputTokens: state.cost.totalInputTokens + auditorResult.totalInputTokens,
        totalOutputTokens: state.cost.totalOutputTokens + auditorResult.totalOutputTokens,
        perRole: {
          ...state.cost.perRole,
          'pa-auditor': (state.cost.perRole['pa-auditor'] ?? 0) + auditorResult.totalCost,
        },
      },
    };
    deps.log('info', `Auditor cost: $${auditorResult.totalCost.toFixed(2)}`);

    // Step 4: Spawn weaver
    deps.log('info', 'Spawning weaver...');
    let weaverResult: { verdict: import('../types/state.js').WeaverVerdict; cost: number; inputTokens: number; outputTokens: number };
    try {
      weaverResult = await deps.spawnWeaver(
        auditorResult.reportPaths,
        screenshotPaths,
        gateResults,
        state,
        config,
      );
    } catch (error) {
      deps.log('error', `Weaver failed: ${error}`);
      throw error;
    }

    // Step 5: Track weaver cost and use verdict
    const weaverVerdict = weaverResult.verdict;
    state = {
      ...state,
      cost: {
        ...state.cost,
        totalCostUsd: state.cost.totalCostUsd + weaverResult.cost,
        totalInputTokens: state.cost.totalInputTokens + weaverResult.inputTokens,
        totalOutputTokens: state.cost.totalOutputTokens + weaverResult.outputTokens,
        perRole: {
          ...state.cost.perRole,
          'weaver': (state.cost.perRole['weaver'] ?? 0) + weaverResult.cost,
        },
      },
    };
    deps.log('info', `Weaver cost: $${weaverResult.cost.toFixed(2)}`);

    // Step 6: Route decision
    const routingDecision = routePhaseB(weaverVerdict, state);

    // Record PA cycle with actual aggregated costs
    const cycleCost = auditorResult.totalCost + weaverResult.cost;
    const cycleRecord = {
      cycleNumber: cycle,
      startedAt: cycleStart,
      completedAt: new Date().toISOString(),
      screenshotPaths,
      gateResults,
      auditorReportPaths: auditorResult.reportPaths,
      weaverVerdict,
      routingDecision,
      cost: cycleCost,
    };

    state = {
      ...state,
      completedPACycles: cycle,
      lastPAScore: weaverVerdict.pa05Score,
      paCycleRecords: [...state.paCycleRecords, cycleRecord],
    };
    await deps.saveState(state, config);

    deps.log('info', `PA Cycle ${cycle}: PA-05=${weaverVerdict.pa05Score}, Tier5=${weaverVerdict.tier5}, Verdict=${routingDecision}`);

    deps.recordDecision(config.outputDir, {
      type: 'pa-routing',
      cycle,
      pa05Score: weaverVerdict.pa05Score,
      tier5: weaverVerdict.tier5,
      soulViolations: weaverVerdict.soulViolations,
      routingDecision,
      timestamp: new Date().toISOString(),
    });

    // Stall detection
    if (detectStall(state.paCycleRecords)) {
      deps.log('warn', 'Stall detected: 2 consecutive cycles with no PA improvement. Force SHIP.');
      deps.recordDecision(config.outputDir, {
        type: 'stall-detection',
        cycle,
        action: 'force-ship',
        timestamp: new Date().toISOString(),
      });
      state = { ...state, status: 'completed', currentPhase: 'completed', phaseReason: 'Stall: forced SHIP' };
      await deps.saveState(state, config);
      return state;
    }

    // Route action
    if (routingDecision === 'SHIP') {
      deps.log('info', 'SHIP verdict — pipeline complete.');
      state = { ...state, status: 'completed', currentPhase: 'completed', phaseReason: 'SHIP' };
      await deps.saveState(state, config);
      return state;
    }

    if (routingDecision === 'RETHINK') {
      deps.log('warn', 'RETHINK verdict — flagging for human review.');
      state = { ...state, status: 'paused', currentPhase: 'paused', phaseReason: 'RETHINK: human review needed' };
      await deps.saveState(state, config);
      return state;
    }

    // REFINE: spawn refine builder
    if (routingDecision === 'REFINE' && cycle < MAX_PA_CYCLES) {
      deps.log('info', 'REFINE verdict — spawning refine builder...');
      try {
        // Read weaver synthesis report from disk (saved by weaver-spawner)
        const weaverReportPath = path.join(config.outputDir, '_pa', 'weaver-synthesis.md');
        let weaverReportText: string;
        try {
          weaverReportText = readFileChecked(weaverReportPath);
        } catch {
          deps.log('warn', 'Weaver report not found on disk, using narrative summary from verdict');
          weaverReportText = weaverVerdict.narrativeSummary;
        }
        const refineResponse = await deps.spawnRefineBuilder(
          weaverReportText,
          state,
          config,
        );
        state = updateCostFromResponse(state, refineResponse, 'refine-builder');

        // Extract refined HTML from response text.
        // The refine builder has Read/Write/Edit tools, so it may have written
        // the artifact directly to disk. Check both response and disk.
        const refinedHtml = extractRefinedHtml(refineResponse.result ?? '');
        if (refinedHtml) {
          atomicWriteFile(state.artifactPath, refinedHtml);
          state = {
            ...state,
            currentArtifactHash: sha256(refinedHtml),
            artifactSizeHistory: [...state.artifactSizeHistory, refinedHtml.length],
          };
        } else if (fs.existsSync(state.artifactPath)) {
          // Refine builder may have written directly to disk via Edit/Write tools.
          // Update hash from whatever is on disk now.
          const diskArtifact = fs.readFileSync(state.artifactPath, 'utf-8');
          const diskHash = sha256(diskArtifact);
          if (diskHash !== state.currentArtifactHash) {
            deps.log('info', 'Refine builder wrote artifact to disk directly (no HTML in response)');
            state = {
              ...state,
              currentArtifactHash: diskHash,
              artifactSizeHistory: [...state.artifactSizeHistory, diskArtifact.length],
            };
          }
        }
        await deps.saveState(state, config);
        deps.log('info', `Refinement complete. Cost: $${(refineResponse.total_cost_usd ?? 0).toFixed(2)}`);
      } catch (error) {
        if (error instanceof BudgetExceededError) throw error;
        deps.log('error', `Refine builder failed: ${error}`);
        // Continue to next PA cycle even if refinement fails
      }
    }

    // Budget check
    const budget = checkBudget(state.cost);
    if (budget.exceeded) {
      deps.log('error', `Budget exceeded: $${state.cost.totalCostUsd.toFixed(2)}`);
      state = {
        ...state,
        status: 'paused',
        currentPhase: 'paused',
        phaseReason: `Budget exceeded: $${state.cost.totalCostUsd.toFixed(2)}`,
      };
      await deps.saveState(state, config);
      throw new BudgetExceededError(state.cost.totalCostUsd, state.cost.budgetHardCapUsd);
    }
  }

  // All PA cycles exhausted
  deps.log('info', `All ${MAX_PA_CYCLES} PA cycles exhausted. Final PA-05: ${state.lastPAScore}`);
  return state;
}

/**
 * Update cost tracker from a claude -p response.
 */
function updateCostFromResponse(
  state: PipelineState,
  response: ClaudeResponse,
  role: string,
): PipelineState {
  const cost = response.total_cost_usd ?? 0;
  const perRole = { ...state.cost.perRole };
  perRole[role] = (perRole[role] ?? 0) + cost;

  const totalCostUsd = state.cost.totalCostUsd + cost;

  return {
    ...state,
    cost: {
      ...state.cost,
      totalInputTokens: state.cost.totalInputTokens + (response.usage?.input_tokens ?? 0),
      totalOutputTokens: state.cost.totalOutputTokens + (response.usage?.output_tokens ?? 0),
      totalCacheReadTokens: state.cost.totalCacheReadTokens + (response.usage?.cache_read_tokens ?? 0),
      totalCacheWriteTokens: state.cost.totalCacheWriteTokens + (response.usage?.cache_write_tokens ?? 0),
      totalCostUsd,
      perRole,
      warningThresholdHit: totalCostUsd >= state.cost.budgetWarningThresholdUsd,
      hardCapHit: totalCostUsd >= state.cost.budgetHardCapUsd,
    },
  };
}

// NOTE: Weaver verdict parsing is handled by weaver-spawner.ts:parseWeaverVerdict.
// The spawnWeaver dep returns a pre-parsed WeaverVerdict — no parsing needed here.

/**
 * Extract refined HTML from refine builder response.
 * Uses canonical extractHtml from response-handler.ts.
 * The refine builder uses Read/Write/Edit tools, so the artifact
 * may already be written to disk — returns null if no HTML in result.
 */
function extractRefinedHtml(resultText: string): string | null {
  try {
    const result = extractHtmlCanonical(resultText);
    return result.html;
  } catch (error) {
    // Refine builder uses Write/Edit tools — HTML may already be on disk
    const msg = error instanceof Error ? error.message : String(error);
    console.error(`[pipeline] extractRefinedHtml: no HTML in response text (non-fatal, may be on disk): ${msg}`);
    return null;
  }
}

/**
 * Print the execution plan for --dry-run mode.
 */
function printExecutionPlan(config: PipelineConfig): void {
  console.log('=== Deep Build Pipeline — Dry Run ===\n');
  console.log(`Content: ${config.contentPath}`);
  console.log(`Slug: ${config.slug}`);
  console.log(`Output: ${config.outputDir}`);
  console.log(`Model: ${config.model}`);
  console.log('');

  if (config.skipPhaseA) {
    console.log('Mode: Phase B only (--skip-phase-a)');
    console.log(`Seed artifact: ${config.seedArtifactPath ?? '(none)'}`);
    console.log('');
  }

  if (config.subsetFilter) {
    console.log(`Subset filter: ${config.subsetFilter} only`);
    console.log('');
  }

  // Phase 0
  console.log('--- Phase 0: Pre-Pipeline ---');
  console.log('  1. TC Derivation (conviction brief)');
  console.log('  2. Content Analysis (content map)');
  console.log('  3. Workspace Setup');
  console.log('');

  // Phase A
  if (!config.skipPhaseA) {
    console.log('--- Phase A: Corpus Integration ---');
    const startSubset = config.subsetFilter ?? 1;
    const endSubset = config.subsetFilter ?? TOTAL_SUBSETS;

    let globalPass = 0;
    for (let s = startSubset; s <= endSubset; s++) {
      const subset = CORPUS_SUBSETS.find(sub => sub.id === s);
      console.log(`  Subset ${s}: ${subset?.name ?? 'unknown'} (${subset?.files.length ?? 0} files)`);

      for (let p = 1; p <= PASSES_PER_SUBSET; p++) {
        globalPass++;
        const role = PASS_ROLES[p] ?? 'builder';
        const rotIdx = getRotationIndex(p);
        const rotLabel = ['A', 'B', 'C'][rotIdx];

        if (subset) {
          const rotation = computeRotation(subset.files, rotIdx);
          console.log(`    P${p} [${role}] Rot ${rotLabel} shift=${rotation.shift}`);
        }
      }

      if (shouldRunCrossSubsetVerification(s)) {
        console.log(`    >> Cross-subset verification after S${s}`);
      }
      console.log(`    >> Checkpoint + retrospective`);
    }

    const totalPasses = (endSubset - startSubset + 1) * PASSES_PER_SUBSET;
    console.log(`\n  Total Phase A passes: ${totalPasses}`);
    console.log('');
  }

  // Phase B
  console.log('--- Phase B: PA Hardening ---');
  console.log(`  Max cycles: ${MAX_PA_CYCLES}`);
  console.log('  Per cycle: screenshots + gates + 8 auditors + integrative + weaver');
  console.log(`  SHIP threshold: PA-05 >= ${PA_THRESHOLD}, Tier5 >= ${TIER5_MINIMUM}`);
  console.log(`  RETHINK threshold: PA-05 < ${RETHINK_THRESHOLD} after 2+ cycles`);
  console.log('');

  // Budget
  console.log('--- Budget ---');
  console.log(`  Warning: $${BUDGET_WARNING}`);
  console.log(`  Hard cap: $${BUDGET_CAP}`);
  console.log('');
}

/**
 * Create default dependency injection container with real implementations.
 * Wires up assembler, claude-cli, response-handler, state-manager, etc.
 */
export async function createDefaultDeps(config: PipelineConfig): Promise<PipelineDeps> {
  // Dynamic imports to keep cli.ts lightweight
  const { spawnClaude } = await import('../agents/claude-cli.js');
  const { validateHtml } = await import('../validation/html-validator.js');
  const { saveState: saveStateFn, loadState: loadStateFn } = await import('../state/state-manager.js');
  const { appendJsonl } = await import('../utils.js');

  return {
    // PassExecutorDeps
    async assemblePrompt(state, pass, cfg, currentArtifact) {
      const { assembleBuilderPrompt, assembleVerifierPrompt } = await import('../prompts/assembler.js');
      const { diffArtifact } = await import('../validation/diff-checker.js');
      if (pass.role === 'verifier') {
        // Load previous artifact from the prior pass's archive for real diff
        let prevArtifact = '';
        if (pass.passNumber > 1) {
          const prevPassDir = path.join(cfg.outputDir, '_passes', `pass-${String(pass.passNumber - 1).padStart(3, '0')}`);
          const prevBackup = path.join(prevPassDir, 'artifact-backup.html');
          prevArtifact = readFileChecked(prevBackup) ?? '';
        }
        const diff = diffArtifact(prevArtifact, currentArtifact);
        const assembled = assembleVerifierPrompt(pass, state, cfg, diff.summary);
        return assembled.text;
      }
      const assembled = assembleBuilderPrompt(pass, state, cfg);
      return assembled.text;
    },

    async spawnClaude(prompt, role, cfg) {
      return spawnClaude({
        role,
        prompt,
        workspaceDir: cfg.workspaceDir,
      });
    },

    validateHtml(html) {
      return validateHtml(html);
    },

    async saveState(state, cfg) {
      const statePath = path.join(cfg.outputDir, '_orchestrator', 'state.json');
      saveStateFn(state, statePath);
    },

    async runTcDerivation(cfg) {
      const { assembleTcDerivationPrompt } = await import('../prompts/assembler.js');
      const assembled = assembleTcDerivationPrompt(cfg);
      return spawnClaude({
        role: 'tc-derivation',
        prompt: assembled.text,
        workspaceDir: cfg.workspaceDir,
        additionalDirs: [cfg.designSystemDir],
      });
    },

    async runContentAnalysis(cfg) {
      const { assembleContentAnalysisPrompt } = await import('../prompts/assembler.js');
      const assembled = assembleContentAnalysisPrompt(cfg);
      return spawnClaude({
        role: 'content-analysis',
        prompt: assembled.text,
        workspaceDir: cfg.workspaceDir,
      });
    },

    async runCrossSubsetVerifier(prompt, cfg) {
      return spawnClaude({
        role: 'cross-subset-verifier',
        prompt,
        workspaceDir: cfg.workspaceDir,
        additionalDirs: [cfg.outputDir],
      });
    },

    async runRetrospective(state, subsetId, cfg) {
      const { assembleRetrospectivePrompt } = await import('../prompts/assembler.js');
      const assembled = assembleRetrospectivePrompt(state, cfg);
      return spawnClaude({
        role: 'retrospective',
        prompt: assembled.text,
        workspaceDir: cfg.workspaceDir,
        additionalDirs: [cfg.outputDir],
      });
    },

    async captureScreenshots(artifactPath, outputDir, cfg) {
      const { startArtifactServer } = await import('../pa/http-server.js');
      const { captureScreenshots: capture } = await import('../pa/screenshot-capture.js');
      const server = await startArtifactServer(artifactPath);
      try {
        const manifests = await capture(server.url, outputDir);
        return manifests.map(m => m.path);
      } finally {
        server.kill();
      }
    },

    async runGates(artifactPath, cfg) {
      const { runGates: runGatesFn } = await import('../validation/gate-runner.js');
      const { startArtifactServer } = await import('../pa/http-server.js');
      const server = await startArtifactServer(artifactPath);
      try {
        const verdict = await runGatesFn(artifactPath, server.url);
        const results: Record<string, boolean> = {};
        for (const gate of verdict.gates) {
          results[gate.gateId] = gate.passed;
        }
        return results;
      } finally {
        server.kill();
      }
    },

    async spawnAuditors(screenshotPaths, artifactPath, gateResults, cfg) {
      const { spawnAuditors: spawnAuditorsFn } = await import('../pa/auditor-spawner.js');
      const { VIEWPORTS } = await import('../config/constants.js');
      const guardrailsPath = path.join(cfg.projectRoot, 'ephemeral', 'va-extraction', 'pa-guardrails.md');
      if (!fs.existsSync(guardrailsPath)) {
        throw new Error(
          `PA guardrails file not found: ${guardrailsPath}\n` +
          `This file must exist before running PA auditors. ` +
          `Run VA extraction first, or create it manually at the expected path.`,
        );
      }
      const reports = await spawnAuditorsFn(
        screenshotPaths.map((p, i) => ({
          viewport: VIEWPORTS[i] ?? { width: 1440, height: 900, label: `viewport-${i}` },
          path: p,
          capturedAt: new Date().toISOString(),
          fullPage: true,
        })),
        artifactPath,
        guardrailsPath,
        path.join(cfg.outputDir, '_pa'),
        cfg,
      );
      // Aggregate costs from all auditors
      const totalCost = reports.reduce((sum, r) => sum + r.cost, 0);
      const totalInputTokens = reports.reduce((sum, r) => sum + (r.inputTokens ?? 0), 0);
      const totalOutputTokens = reports.reduce((sum, r) => sum + (r.outputTokens ?? 0), 0);
      return {
        reportPaths: reports.map(r => r.reportPath),
        totalCost,
        totalInputTokens,
        totalOutputTokens,
      };
    },

    async spawnWeaver(auditorReportPaths, screenshotPaths, gateResults, state, cfg) {
      const { spawnWeaver: spawnWeaverFn } = await import('../pa/weaver-spawner.js');
      const { VIEWPORTS } = await import('../config/constants.js');
      const tcBrief = readFileChecked(path.join(cfg.outputDir, '_tc-brief.md'));
      const lastConviction = state.convictionLayer.length > 0
        ? state.convictionLayer.map(e => `${e.dimension}: ${e.content}`).join('\n')
        : '';
      const gateVerdict = {
        gates: Object.entries(gateResults).map(([id, passed]) => ({
          gateId: id,
          passed,
          description: id,
          tier: 'REQUIRED' as const,
        })),
        passedCount: Object.values(gateResults).filter(Boolean).length,
        failedCount: Object.values(gateResults).filter(v => !v).length,
        requiredFailures: 0,
        allRequiredPassed: true,
        evaluatedAt: new Date().toISOString(),
      };
      // Reconstruct AuditorReport objects with correct IDs from filenames.
      // Domain auditors: auditor-{id}.md (e.g., auditor-a.md, auditor-i.md)
      // Integrative auditor: pa-integrative.md (distinct from domain auditor I)
      const { AUDITOR_FOCUS } = await import('../config/pa-questions.js');
      const auditorReports = auditorReportPaths.map(p => {
        const basename = path.basename(p, '.md');
        let auditorId: import('../types/pa.js').AuditorId;
        let focusArea: string;
        if (basename === 'pa-integrative') {
          // Integrative auditor has no assigned questions, gestalt only
          auditorId = 'I' as import('../types/pa.js').AuditorId;
          focusArea = 'Integrative (gestalt, no assigned questions)';
        } else {
          const idChar = basename.replace('auditor-', '').toUpperCase();
          auditorId = (idChar || 'A') as import('../types/pa.js').AuditorId;
          focusArea = AUDITOR_FOCUS[auditorId] ?? '';
        }
        let reportText = '';
        try { reportText = fs.readFileSync(p, 'utf-8'); } catch { console.error(`[pipeline] Auditor report file unreadable (auditor may have failed): ${p}`); }
        return {
          auditorId,
          focusArea,
          reportText,
          questionsAnswered: [] as string[],
          reportPath: p,
          success: reportText.length > 0,
          cost: 0,
        };
      });

      const weaverResult = await spawnWeaverFn(
        auditorReports,
        gateVerdict,
        screenshotPaths.map((p, i) => ({
          viewport: VIEWPORTS[i] ?? { width: 1440, height: 900, label: `viewport-${i}` },
          path: p,
          capturedAt: new Date().toISOString(),
          fullPage: true,
        })),
        tcBrief,
        lastConviction,
        state.artifactPath,
        path.join(cfg.outputDir, '_pa'),
        cfg,
      );
      return {
        verdict: weaverResult.verdict,
        cost: weaverResult.cost,
        inputTokens: weaverResult.inputTokens,
        outputTokens: weaverResult.outputTokens,
      };
    },

    async spawnRefineBuilder(weaverReport, state, cfg) {
      const { assembleRefineBuilderPrompt } = await import('../prompts/assembler.js');
      const assembled = assembleRefineBuilderPrompt(weaverReport, '', state, cfg);
      return spawnClaude({
        role: 'refine-builder',
        prompt: assembled.text,
        workspaceDir: cfg.workspaceDir,
        additionalDirs: [cfg.designSystemDir, cfg.outputDir],
      });
    },

    async loadState(cfg) {
      const statePath = path.join(cfg.outputDir, '_orchestrator', 'state.json');
      return loadStateFn(statePath);
    },

    log(level, message) {
      const prefix = level === 'error' ? '  ERROR' : level === 'warn' ? '  WARN' : '  INFO';
      console.log(`${prefix}: ${message}`);
    },

    recordDecision(outputDir, decision) {
      const decisionPath = path.join(outputDir, '_orchestrator', 'decisions.jsonl');
      appendJsonl(decisionPath, { ...decision, timestamp: new Date().toISOString() });
    },
  };
}
