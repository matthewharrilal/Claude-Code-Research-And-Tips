/**
 * Single-pass executor — the inner loop of corpus integration.
 *
 * Steps: assemble prompt -> set inFlightPass -> spawn claude -> parse response
 * -> validate -> extract conviction -> extract discovery -> record metrics
 * -> save state -> clear inFlightPass
 */

import fs from 'node:fs';
import path from 'node:path';
import type { PipelineConfig } from '../types/pipeline.js';
import type { PipelineState, PassRecord, ConvictionEntry } from '../types/state.js';
import type { PassDefinition, PassResult, ClaudeResponse } from '../types/pass.js';
import { BudgetExceededError } from '../types/errors.js';
import { atomicWriteFile, sha256 } from '../utils.js';
import { addConviction, extractConvictionFromResponse } from './conviction-manager.js';
import { checkBudget } from './phase-router.js';
import { createPassArchiveDir } from './workspace-setup.js';
import {
  extractHtml as extractHtmlFromResponse,
  extractDiscoveryLog,
} from '../agents/response-handler.js';

/**
 * Execute a single pass (builder or verifier) within corpus integration.
 *
 * This function depends on external modules (assembler, claude-cli, response-handler,
 * html-validator, state-manager) that are injected via the `deps` parameter to keep
 * this module testable and avoid circular dependencies.
 *
 * @param state - Current pipeline state
 * @param pass - Pass definition (subset, rotation, role)
 * @param config - Pipeline configuration
 * @param deps - Injectable dependencies (assembler, claude-cli, etc.)
 * @returns Updated state and pass result
 */
export async function executeSinglePass(
  state: PipelineState,
  pass: PassDefinition,
  config: PipelineConfig,
  deps: PassExecutorDeps,
): Promise<{ state: PipelineState; result: PassResult }> {
  const startedAt = new Date().toISOString();

  // Budget check before spawning
  const budgetStatus = checkBudget(state.cost);
  if (budgetStatus.exceeded) {
    throw new BudgetExceededError(
      state.cost.totalCostUsd,
      state.cost.budgetHardCapUsd,
    );
  }

  // 1. Set inFlightPass
  state = {
    ...state,
    inFlightPass: {
      passNumber: pass.passNumber,
      startedAt,
      role: pass.role,
    },
  };
  await deps.saveState(state, config);

  // 2. Read current artifact (empty string for first pass S1P1)
  let currentArtifact = '';
  if (pass.passNumber > 1 && fs.existsSync(state.artifactPath)) {
    currentArtifact = fs.readFileSync(state.artifactPath, 'utf-8');
  }
  const sizeBefore = currentArtifact.length;

  // 3. Assemble prompt
  const assembledPrompt = await deps.assemblePrompt(state, pass, config, currentArtifact);

  // 4. Spawn claude -p
  let rawResponse: ClaudeResponse;
  try {
    rawResponse = await deps.spawnClaude(assembledPrompt, pass.role, config);
  } catch (error) {
    const passResult: PassResult = {
      success: false,
      rawResponse: createErrorResponse(error),
      cost: 0,
      inputTokens: 0,
      outputTokens: 0,
      cacheReadTokens: 0,
      cacheWriteTokens: 0,
      error: error instanceof Error ? error.message : String(error),
    };

    state = recordPassFailure(state, pass, passResult, startedAt);
    state = { ...state, inFlightPass: undefined };
    await deps.saveState(state, config);

    return { state, result: passResult };
  }

  // 5. Parse response
  const resultText = rawResponse.result ?? '';
  const cost = rawResponse.total_cost_usd ?? 0;
  const inputTokens = rawResponse.usage?.input_tokens ?? 0;
  const outputTokens = rawResponse.usage?.output_tokens ?? 0;
  const cacheReadTokens = rawResponse.usage?.cache_read_tokens ?? 0;
  const cacheWriteTokens = rawResponse.usage?.cache_write_tokens ?? 0;

  // 6. Extract HTML (builder passes only)
  let html: string | undefined;
  let convictionEntries: ConvictionEntry[] = [];
  let discoveryEntries: string[] = [];
  let verifierObservations: string | undefined;

  if (pass.role === 'builder') {
    try {
      const extraction = extractHtmlFromResponse(resultText);
      html = extraction.html;
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      console.error(`[pass-executor] HTML extraction failed for pass ${pass.passNumber}: ${msg}`);
      html = undefined;
    }
    if (!html) {
      const passResult: PassResult = {
        success: false,
        rawResponse,
        cost,
        inputTokens,
        outputTokens,
        cacheReadTokens,
        cacheWriteTokens,
        error: 'Failed to extract HTML from builder response',
      };
      state = recordPassFailure(state, pass, passResult, startedAt);
      state = { ...state, inFlightPass: undefined };
      await deps.saveState(state, config);
      return { state, result: passResult };
    }

    // 7. Validate HTML
    const validationResult = deps.validateHtml(html);
    if (!validationResult.valid) {
      const passResult: PassResult = {
        success: false,
        html,
        rawResponse,
        cost,
        inputTokens,
        outputTokens,
        cacheReadTokens,
        cacheWriteTokens,
        error: `HTML validation failed: ${validationResult.errors.join(', ')}`,
      };
      state = recordPassFailure(state, pass, passResult, startedAt);
      state = { ...state, inFlightPass: undefined };
      await deps.saveState(state, config);
      return { state, result: passResult };
    }

    // 8. Write artifact to disk
    atomicWriteFile(state.artifactPath, html);

    // 9. Extract conviction
    convictionEntries = extractConvictionFromResponse(resultText, pass.passNumber, pass.subsetId);

    // 10. Extract discovery log (using canonical response-handler)
    discoveryEntries = extractDiscoveryLog(resultText);
  } else if (pass.role === 'verifier') {
    // Verifiers produce observations, not HTML
    verifierObservations = resultText;
  }

  // 11. Build pass result
  const artifactHash = html ? sha256(html) : state.currentArtifactHash;
  const sizeAfter = html ? html.length : sizeBefore;

  const passResult: PassResult = {
    success: true,
    html,
    convictionAddition: convictionEntries.length > 0
      ? Object.fromEntries(convictionEntries.map(e => [e.dimension, e.content]))
      : undefined,
    discoveryEntries: discoveryEntries.length > 0 ? discoveryEntries : undefined,
    verifierObservations,
    rawResponse,
    cost,
    inputTokens,
    outputTokens,
    cacheReadTokens,
    cacheWriteTokens,
  };

  // 12. Update state with pass record
  const completedAt = new Date().toISOString();
  const passRecord: PassRecord = {
    passNumber: pass.passNumber,
    subsetId: pass.subsetId,
    passWithinSubset: pass.passWithinSubset,
    role: pass.role,
    rotationIndex: pass.rotationIndex,
    startedAt,
    completedAt,
    inputTokens,
    outputTokens,
    cacheReadTokens,
    cacheWriteTokens,
    cost,
    artifactSizeBefore: sizeBefore,
    artifactSizeAfter: sizeAfter,
    artifactHash,
    retryCount: 0,
    hasConvictionAddition: convictionEntries.length > 0,
    hasDiscoveryAddition: discoveryEntries.length > 0,
    corpusFilesLoaded: [], // Filled by assembler
    referenceFilesLoaded: [], // Filled by assembler
    success: true,
  };

  state = {
    ...state,
    passes: [...state.passes, passRecord],
    currentArtifactHash: artifactHash,
    artifactSizeHistory: [...state.artifactSizeHistory, sizeAfter],
    totalCorpusPasses: state.totalCorpusPasses + 1,
    lastCompletedCorpusPass: pass.passNumber,
    currentPass: pass.passWithinSubset + 1,
  };

  // 13. Add conviction entries
  for (const entry of convictionEntries) {
    state = addConviction(state, entry);
  }

  // 14. Add discovery entries
  if (discoveryEntries.length > 0) {
    state = {
      ...state,
      discoveryLog: [...state.discoveryLog, ...discoveryEntries],
      discoveryEntryCount: state.discoveryEntryCount + discoveryEntries.length,
    };
  }

  // 15. Add verifier observations (rolling window of last 3)
  if (verifierObservations) {
    const observations = [...state.verifierObservations, verifierObservations];
    state = {
      ...state,
      verifierObservations: observations.slice(-3),
    };
  }

  // 16. Update cost tracker
  state = updateCostTracker(state, pass, cost, inputTokens, outputTokens, cacheReadTokens, cacheWriteTokens);

  // 17. Clear inFlightPass
  state = { ...state, inFlightPass: undefined };

  // 18. Save state + pass archive
  await deps.saveState(state, config);
  archivePass(config.outputDir, pass.passNumber, assembledPrompt, rawResponse, html);

  return { state, result: passResult };
}

// HTML extraction and discovery log extraction are now handled by
// response-handler.ts (canonical implementation). No duplicates here.

/**
 * Record a failed pass in the state.
 */
function recordPassFailure(
  state: PipelineState,
  pass: PassDefinition,
  result: PassResult,
  startedAt: string,
): PipelineState {
  const passRecord: PassRecord = {
    passNumber: pass.passNumber,
    subsetId: pass.subsetId,
    passWithinSubset: pass.passWithinSubset,
    role: pass.role,
    rotationIndex: pass.rotationIndex,
    startedAt,
    completedAt: new Date().toISOString(),
    inputTokens: result.inputTokens,
    outputTokens: result.outputTokens,
    cacheReadTokens: result.cacheReadTokens,
    cacheWriteTokens: result.cacheWriteTokens,
    cost: result.cost,
    artifactSizeBefore: 0,
    artifactSizeAfter: 0,
    artifactHash: state.currentArtifactHash,
    retryCount: 0,
    hasConvictionAddition: false,
    hasDiscoveryAddition: false,
    corpusFilesLoaded: [],
    referenceFilesLoaded: [],
    success: false,
    error: result.error,
  };

  return {
    ...state,
    passes: [...state.passes, passRecord],
    errorHistory: [
      ...state.errorHistory,
      {
        category: 'invalid-response',
        message: result.error ?? 'Unknown error',
        passNumber: pass.passNumber,
        subsetId: pass.subsetId,
        role: pass.role,
        timestamp: new Date().toISOString(),
        recovered: false,
      },
    ],
  };
}

/**
 * Update cost tracker with pass results.
 */
function updateCostTracker(
  state: PipelineState,
  pass: PassDefinition,
  cost: number,
  inputTokens: number,
  outputTokens: number,
  cacheReadTokens: number,
  cacheWriteTokens: number,
): PipelineState {
  const perSubset = { ...state.cost.perSubset };
  perSubset[pass.subsetId] = (perSubset[pass.subsetId] ?? 0) + cost;

  const perRole = { ...state.cost.perRole };
  perRole[pass.role] = (perRole[pass.role] ?? 0) + cost;

  const totalCostUsd = state.cost.totalCostUsd + cost;

  return {
    ...state,
    cost: {
      ...state.cost,
      totalInputTokens: state.cost.totalInputTokens + inputTokens,
      totalOutputTokens: state.cost.totalOutputTokens + outputTokens,
      totalCacheReadTokens: state.cost.totalCacheReadTokens + cacheReadTokens,
      totalCacheWriteTokens: state.cost.totalCacheWriteTokens + cacheWriteTokens,
      totalCostUsd,
      perSubset,
      perRole,
      warningThresholdHit: totalCostUsd >= state.cost.budgetWarningThresholdUsd,
      hardCapHit: totalCostUsd >= state.cost.budgetHardCapUsd,
    },
  };
}

/**
 * Archive pass artifacts (prompt, response, artifact backup).
 */
function archivePass(
  outputDir: string,
  passNumber: number,
  prompt: string,
  response: ClaudeResponse,
  artifact?: string,
): void {
  const passDir = createPassArchiveDir(outputDir, passNumber);

  try {
    atomicWriteFile(path.join(passDir, 'prompt.md'), prompt);
    atomicWriteFile(path.join(passDir, 'response.json'), JSON.stringify(response, null, 2));
    if (artifact) {
      atomicWriteFile(path.join(passDir, 'artifact-backup.html'), artifact);
    }
  } catch (error) {
    // Archive failures are non-fatal — log but don't throw
    const msg = error instanceof Error ? error.message : String(error);
    console.error(`[pass-executor] Archive write failed for pass ${passNumber} (non-fatal): ${msg}`);
  }
}

/**
 * Create a synthetic error response for spawn failures.
 */
function createErrorResponse(error: unknown): ClaudeResponse {
  return {
    type: 'result',
    subtype: 'error_max_turns',
    is_error: true,
    result: error instanceof Error ? error.message : String(error),
    session_id: '',
    total_cost_usd: 0,
    usage: { input_tokens: 0, output_tokens: 0 },
  };
}

/**
 * Dependencies injected into pass executor.
 * Keeps the module testable and avoids circular imports with
 * assembler, claude-cli, response-handler, html-validator, state-manager.
 */
export interface PassExecutorDeps {
  /** Assemble the prompt for this pass */
  assemblePrompt(
    state: PipelineState,
    pass: PassDefinition,
    config: PipelineConfig,
    currentArtifact: string,
  ): Promise<string>;

  /** Spawn claude -p and return parsed response */
  spawnClaude(
    prompt: string,
    role: string,
    config: PipelineConfig,
  ): Promise<ClaudeResponse>;

  /** Validate extracted HTML */
  validateHtml(html: string): { valid: boolean; errors: string[] };

  /** Save state atomically */
  saveState(state: PipelineState, config: PipelineConfig): Promise<void>;
}
