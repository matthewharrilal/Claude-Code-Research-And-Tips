/**
 * Checkpoint management: snapshot artifact + state at subset boundaries.
 */

import fs from 'node:fs';
import path from 'node:path';
import type { PipelineState } from '../types/state.js';
import { ensureDir, sha256, readFileChecked, safeJsonParse } from '../utils.js';
import { saveState } from './state-manager.js';

/**
 * Create a checkpoint: copy current artifact + state + verifier observations + metrics
 * to _checkpoints/S{N}/.
 *
 * Returns the path to the checkpoint directory.
 */
export function createCheckpoint(
  state: PipelineState,
  outputDir: string,
  subsetId: number,
): string {
  const checkpointDir = path.join(outputDir, '_checkpoints', `S${subsetId}`);
  ensureDir(checkpointDir);

  // Copy current artifact
  const artifactContent = readFileChecked(state.artifactPath);
  const artifactHash = sha256(artifactContent);
  fs.writeFileSync(
    path.join(checkpointDir, 'artifact.html'),
    artifactContent,
    'utf-8',
  );

  // Write artifact hash for integrity verification
  fs.writeFileSync(
    path.join(checkpointDir, 'artifact-hash.txt'),
    artifactHash,
    'utf-8',
  );

  // Snapshot state at this checkpoint
  const checkpointState: PipelineState = {
    ...state,
    currentArtifactHash: artifactHash,
  };
  saveState(checkpointState, path.join(checkpointDir, 'state.json'));

  // Save latest verifier observations
  if (state.verifierObservations.length > 0) {
    fs.writeFileSync(
      path.join(checkpointDir, 'verifier-observations.json'),
      JSON.stringify(state.verifierObservations, null, 2),
      'utf-8',
    );
  }

  // Save cost metrics snapshot
  fs.writeFileSync(
    path.join(checkpointDir, 'cost-snapshot.json'),
    JSON.stringify(state.cost, null, 2),
    'utf-8',
  );

  return checkpointDir;
}

/**
 * List all checkpoint directories, sorted by subset ID.
 */
export function listCheckpoints(outputDir: string): string[] {
  const checkpointsDir = path.join(outputDir, '_checkpoints');
  if (!fs.existsSync(checkpointsDir)) {
    return [];
  }

  const entries = fs.readdirSync(checkpointsDir, { withFileTypes: true });
  return entries
    .filter(e => e.isDirectory() && /^S\d+$/.test(e.name))
    .map(e => path.join(checkpointsDir, e.name))
    .sort((a, b) => {
      const numA = parseInt(path.basename(a).slice(1), 10);
      const numB = parseInt(path.basename(b).slice(1), 10);
      return numA - numB;
    });
}

/**
 * Load the state snapshot from a checkpoint directory.
 */
export function loadCheckpointState(checkpointDir: string): PipelineState {
  const statePath = path.join(checkpointDir, 'state.json');
  const raw = readFileChecked(statePath);
  return safeJsonParse<PipelineState>(raw, `loadCheckpointState(${checkpointDir})`);
}
