/**
 * Pipeline configuration and corpus types.
 */

export type PipelinePhase =
  | 'pre-pipeline'
  | 'corpus-integration'
  | 'pa-hardening'
  | 'paused'
  | 'completed'
  | 'failed';

export interface CorpusFile {
  /** Relative path from project root */
  path: string;
  /** Human-readable name for logging */
  name: string;
  /** Approximate line count (for token estimation) */
  approximateLines: number;
}

export interface CorpusSubset {
  /** Subset ID: 1-7 */
  id: number;
  /** Human-readable name (e.g., "Research Core") */
  name: string;
  /** Rotating corpus files for this subset */
  files: CorpusFile[];
  /** Infrastructure files loaded every pass (mechanism catalog, components, tokens) */
  infrastructureFiles: CorpusFile[];
}

export interface ViewportConfig {
  width: number;
  height: number;
  label: string;
}

export interface PipelineConfig {
  /** Path to content markdown file */
  contentPath: string;
  /** Slug derived from content filename */
  slug: string;
  /** Model to use (always claude-opus-4-6) */
  model: string;
  /** Run only this subset (1-7), or undefined for all */
  subsetFilter?: number;
  /** Skip Phase A entirely, run only Phase B on existing artifact */
  skipPhaseA: boolean;
  /** Dry run mode: validate config and print plan, don't execute */
  dryRun: boolean;
  /** Resume from existing state.json */
  resume: boolean;
  /** Path to project root (resolved at startup) */
  projectRoot: string;
  /** Path to design-system directory */
  designSystemDir: string;
  /** Path to output directory (ephemeral/builds/{slug}-{date}/) */
  outputDir: string;
  /** Path to isolated workspace directory */
  workspaceDir: string;
  /** Path to existing artifact for --skip-phase-a mode */
  seedArtifactPath?: string;
}
