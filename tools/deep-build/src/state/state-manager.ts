/**
 * State persistence and mutation for the pipeline.
 * All mutations return new state objects (immutable pattern).
 */

import type { PipelineState } from '../types/state.js';
import { atomicWriteFile, readFileChecked, safeJsonParse } from '../utils.js';
import { StateCorruptionError } from '../types/errors.js';

/**
 * Atomically write state to disk (.tmp → rename).
 */
export function saveState(state: PipelineState, statePath: string): void {
  const json = JSON.stringify(state, null, 2);
  atomicWriteFile(statePath, json);
}

/**
 * Load state from disk, validate schema version.
 */
export function loadState(statePath: string): PipelineState {
  const raw = readFileChecked(statePath);
  const state = safeJsonParse<PipelineState>(raw, `loadState(${statePath})`);

  if (state.schemaVersion !== 3) {
    throw new StateCorruptionError(
      `Schema version mismatch: expected 3, got ${state.schemaVersion}. ` +
      `State file may be from an older pipeline version.`
    );
  }

  const { valid, errors } = validateState(state);
  if (!valid) {
    throw new StateCorruptionError(
      `State validation failed:\n  - ${errors.join('\n  - ')}`
    );
  }

  return state;
}

/**
 * Validate required fields, types, and schema invariants.
 */
export function validateState(state: PipelineState): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (state.schemaVersion !== 3) {
    errors.push(`schemaVersion must be 3, got ${state.schemaVersion}`);
  }
  if (typeof state.runId !== 'string' || state.runId.length === 0) {
    errors.push('runId must be a non-empty string');
  }
  if (typeof state.configHash !== 'string' || state.configHash.length === 0) {
    errors.push('configHash must be a non-empty string');
  }
  if (typeof state.contentPath !== 'string' || state.contentPath.length === 0) {
    errors.push('contentPath must be a non-empty string');
  }
  if (typeof state.slug !== 'string' || state.slug.length === 0) {
    errors.push('slug must be a non-empty string');
  }
  if (typeof state.startedAt !== 'string') {
    errors.push('startedAt must be a string');
  }

  const validPhases = ['corpus-integration', 'pa-hardening', 'paused', 'completed', 'failed'];
  if (!validPhases.includes(state.currentPhase)) {
    errors.push(`currentPhase must be one of [${validPhases.join(', ')}], got '${state.currentPhase}'`);
  }

  const validStatuses = ['running', 'paused', 'completed', 'failed'];
  if (!validStatuses.includes(state.status)) {
    errors.push(`status must be one of [${validStatuses.join(', ')}], got '${state.status}'`);
  }

  if (typeof state.currentSubsetId !== 'number' || state.currentSubsetId < 1) {
    errors.push('currentSubsetId must be a positive number');
  }
  if (typeof state.totalCorpusPasses !== 'number' || state.totalCorpusPasses < 0) {
    errors.push('totalCorpusPasses must be a non-negative number');
  }
  if (typeof state.artifactPath !== 'string') {
    errors.push('artifactPath must be a string');
  }
  if (!Array.isArray(state.passes)) {
    errors.push('passes must be an array');
  }
  if (!Array.isArray(state.convictionLayer)) {
    errors.push('convictionLayer must be an array');
  }
  if (!Array.isArray(state.checkpoints)) {
    errors.push('checkpoints must be an array');
  }
  if (state.cost === undefined || state.cost === null) {
    errors.push('cost tracker must be present');
  }

  return { valid: errors.length === 0, errors };
}

// NOTE: inFlightPass is set/cleared inline in pass-executor.ts.
// Phase transitions are handled inline in pipeline.ts.
