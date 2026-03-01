/**
 * Pipeline resume: 6-step integrity verification and resume point calculation.
 */

import fs from 'node:fs';
import path from 'node:path';
import type { PipelineState } from '../types/state.js';
import type { PipelineConfig } from '../types/pipeline.js';
import { sha256, readFileChecked, computeConfigHash } from '../utils.js';
import { StateCorruptionError, ConfigMismatchError } from '../types/errors.js';
import { loadState } from './state-manager.js';
import { listCheckpoints } from './checkpoint.js';
import { PASSES_PER_SUBSET } from '../config/constants.js';

export interface ResumePoint {
  phase: 'corpus-integration' | 'pa-hardening';
  subsetId: number;
  passWithinSubset: number;
  globalPassNumber: number;
  paCycle?: number;
}

export interface ResumeResult {
  resumePoint: ResumePoint;
  state: PipelineState;
}

/**
 * 6-step resume algorithm.
 *
 * 1. Read state.json — if missing: FATAL
 * 2. Check schemaVersion === 3 — if mismatch: FATAL
 * 3. Check configHash matches current config — if changed: FATAL
 * 4. Verify currentArtifactHash matches SHA-256 of file on disk
 *    - If MISMATCH: check backup, restore if valid, else FATAL
 * 5. Check inFlightPass: if present, resume from that pass (re-run it)
 * 6. If no inFlightPass: resume from totalCorpusPasses + 1
 */
export function resumePipeline(statePath: string, config: PipelineConfig): ResumeResult {
  // Step 1: Read state.json
  if (!fs.existsSync(statePath)) {
    throw new StateCorruptionError(
      `State file not found at ${statePath}. Cannot resume without state. ` +
      `Start a new run or check the output directory.`
    );
  }

  // Step 2: Load and validate schema version (loadState checks version === 3)
  const state = loadState(statePath);

  // Step 3: Verify config hash matches
  const currentConfigHash = computeConfigHash(config as unknown as Record<string, unknown>);
  if (state.configHash !== currentConfigHash) {
    throw new ConfigMismatchError(
      `Config has changed since last run. ` +
      `State configHash: ${state.configHash.slice(0, 12)}..., ` +
      `current configHash: ${currentConfigHash.slice(0, 12)}... ` +
      `Use --force-restart to start fresh, or revert config changes.`
    );
  }

  // Step 4: Verify artifact integrity
  verifyArtifactIntegrity(state, config.outputDir);

  // Step 5: Check for in-flight pass
  if (state.inFlightPass) {
    const inflight = state.inFlightPass;
    const resumePoint = computeResumePoint(inflight.passNumber, state);
    return { resumePoint, state };
  }

  // Step 6: No in-flight pass — determine resume point from completed state
  return resumeFromCompletedState(state);
}

/**
 * Verify the artifact on disk matches the hash recorded in state.
 * If mismatch, attempt recovery from the last pass backup.
 */
function verifyArtifactIntegrity(state: PipelineState, outputDir: string): void {
  // If no hash recorded yet (fresh run with zero passes), skip verification
  if (!state.currentArtifactHash || state.currentArtifactHash === '') {
    return;
  }

  const artifactExists = fs.existsSync(state.artifactPath);

  if (artifactExists) {
    const artifactContent = fs.readFileSync(state.artifactPath, 'utf-8');
    const diskHash = sha256(artifactContent);

    if (diskHash === state.currentArtifactHash) {
      return; // Artifact intact
    }

    // Hash mismatch — try backup recovery
    attemptBackupRecovery(state, outputDir);
    return;
  }

  // Artifact file missing — try backup recovery
  attemptBackupRecovery(state, outputDir);
}

/**
 * Attempt to restore artifact from the last pass backup.
 * Falls back to the last known good checkpoint if backup is also invalid.
 */
function attemptBackupRecovery(state: PipelineState, outputDir: string): void {
  // Find the last completed pass
  const lastPass = state.passes.length > 0
    ? state.passes[state.passes.length - 1]
    : undefined;

  if (lastPass) {
    const backupPath = path.join(
      outputDir,
      '_passes',
      `pass-${String(lastPass.passNumber).padStart(3, '0')}`,
      'artifact-backup.html',
    );

    if (fs.existsSync(backupPath)) {
      const backupContent = fs.readFileSync(backupPath, 'utf-8');
      const backupHash = sha256(backupContent);

      if (backupHash === lastPass.artifactHash) {
        // Backup is valid — restore it
        fs.writeFileSync(state.artifactPath, backupContent, 'utf-8');
        return;
      }
    }
  }

  // Backup also corrupt or missing — report last known good checkpoint
  const checkpoints = listCheckpoints(outputDir);
  const lastCheckpoint = checkpoints.length > 0
    ? checkpoints[checkpoints.length - 1]
    : 'none';

  throw new StateCorruptionError(
    `Artifact integrity check failed. The artifact on disk does not match the recorded hash, ` +
    `and no valid backup was found. ` +
    `Last known good checkpoint: ${lastCheckpoint}. ` +
    `Manual recovery required: restore artifact from a checkpoint or start fresh.`
  );
}

/**
 * Compute a ResumePoint from a global pass number.
 */
function computeResumePoint(globalPassNumber: number, state: PipelineState): ResumePoint {
  if (state.currentPhase === 'pa-hardening') {
    return {
      phase: 'pa-hardening',
      subsetId: state.currentSubsetId,
      passWithinSubset: 0,
      globalPassNumber,
      paCycle: state.completedPACycles + 1,
    };
  }

  const subsetId = Math.ceil(globalPassNumber / PASSES_PER_SUBSET);
  const passWithinSubset = ((globalPassNumber - 1) % PASSES_PER_SUBSET) + 1;

  return {
    phase: 'corpus-integration',
    subsetId,
    passWithinSubset,
    globalPassNumber,
  };
}

/**
 * Determine resume point when no pass is in-flight.
 */
function resumeFromCompletedState(state: PipelineState): ResumeResult {
  if (state.status === 'completed') {
    throw new StateCorruptionError(
      `Pipeline already completed (runId: ${state.runId}). Nothing to resume. ` +
      `Start a new run with different content.`
    );
  }

  if (state.status === 'failed') {
    throw new StateCorruptionError(
      `Pipeline previously failed (runId: ${state.runId}). ` +
      `Phase: ${state.currentPhase}, pass: ${state.totalCorpusPasses}. ` +
      `Reason: ${state.phaseReason ?? 'unknown'}. ` +
      `Use --force-restart to start fresh, or fix the issue and retry.`
    );
  }

  // Running or paused — resume from next pass
  const nextPassNumber = state.totalCorpusPasses + 1;
  const resumePoint = computeResumePoint(nextPassNumber, state);

  return { resumePoint, state };
}
