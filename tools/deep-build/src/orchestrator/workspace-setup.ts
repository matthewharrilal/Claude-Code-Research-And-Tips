/**
 * Workspace setup for isolated pipeline execution.
 *
 * Creates an isolated workspace directory with:
 * - .git/HEAD (blocks upward CLAUDE.md traversal)
 * - .claude/settings.json (empty, prevents user settings injection)
 * - Output directory structure for build artifacts
 * - Frozen content copy
 * - Initial state.json
 */

import fs from 'node:fs';
import path from 'node:path';
import type { PipelineConfig } from '../types/pipeline.js';
import { createInitialState } from '../types/state.js';
import { ensureDir, atomicWriteFile, sha256, uuid, readFileChecked, computeConfigHash } from '../utils.js';
import { getAllCorpusFilePaths } from '../config/corpus.js';
import { FileNotFoundError } from '../types/errors.js';

/**
 * Output directory subdirectories created during workspace setup.
 */
const OUTPUT_SUBDIRS = [
  '_orchestrator',
  '_checkpoints',
  '_passes',
  '_screenshots',
  '_pa',
];

/**
 * Create the isolated workspace and output directory structure.
 *
 * Steps:
 * 1. Create workspace directory with .git/HEAD (blocks CLAUDE.md traversal)
 * 2. Create .claude/settings.json with {}
 * 3. Create output directory structure
 * 4. Freeze content copy to _content.md
 * 5. Validate all corpus paths exist on filesystem
 * 6. Initialize state.json with v3 defaults
 */
export async function createWorkspace(config: PipelineConfig): Promise<void> {
  // 1. Create isolated workspace with .git/HEAD
  ensureDir(config.workspaceDir);
  const gitDir = path.join(config.workspaceDir, '.git');
  ensureDir(gitDir);
  fs.writeFileSync(path.join(gitDir, 'HEAD'), 'ref: refs/heads/main\n', 'utf-8');

  // 2. Create .claude/settings.json (empty object — blocks user settings injection)
  const claudeDir = path.join(config.workspaceDir, '.claude');
  ensureDir(claudeDir);
  fs.writeFileSync(path.join(claudeDir, 'settings.json'), '{}', 'utf-8');

  // 3. Create output directory structure
  ensureDir(config.outputDir);
  for (const subdir of OUTPUT_SUBDIRS) {
    ensureDir(path.join(config.outputDir, subdir));
  }

  // 4. Freeze content copy to _content.md
  const contentSource = readFileChecked(config.contentPath);
  const contentDest = path.join(config.outputDir, '_content.md');
  fs.writeFileSync(contentDest, contentSource, 'utf-8');

  // 5. Validate all corpus paths exist on filesystem
  validateCorpusPaths(config.projectRoot);

  // 6. Initialize state.json with v3 defaults
  const artifactPath = path.join(config.outputDir, 'output.html');
  const configHash = computeConfigHash({
    contentPath: config.contentPath,
    slug: config.slug,
    model: config.model,
    projectRoot: config.projectRoot,
  });

  const initialState = createInitialState({
    runId: uuid(),
    configHash,
    contentPath: config.contentPath,
    slug: config.slug,
    artifactPath,
  });

  const statePath = path.join(config.outputDir, '_orchestrator', 'state.json');
  atomicWriteFile(statePath, JSON.stringify(initialState, null, 2));
}

/**
 * Validate that all corpus file paths exist on the filesystem.
 * Throws FileNotFoundError for the first missing file.
 */
function validateCorpusPaths(projectRoot: string): void {
  const allPaths = getAllCorpusFilePaths();
  for (const relativePath of allPaths) {
    const absolutePath = path.join(projectRoot, relativePath);
    if (!fs.existsSync(absolutePath)) {
      throw new FileNotFoundError(absolutePath);
    }
  }
}

/**
 * Create checkpoint directory for a completed subset.
 * Copies artifact + state + verifier observations to _checkpoints/SN/.
 */
export function createSubsetCheckpointDir(
  outputDir: string,
  subsetId: number,
): string {
  const checkpointDir = path.join(outputDir, '_checkpoints', `S${subsetId}`);
  ensureDir(checkpointDir);
  return checkpointDir;
}

/**
 * Create pass archive directory for a completed pass.
 * Returns path to _passes/pass-NNN/.
 */
export function createPassArchiveDir(
  outputDir: string,
  passNumber: number,
): string {
  const padded = String(passNumber).padStart(3, '0');
  const passDir = path.join(outputDir, '_passes', `pass-${padded}`);
  ensureDir(passDir);
  return passDir;
}
