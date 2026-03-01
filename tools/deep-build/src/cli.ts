/**
 * CLI entry point for deep-build pipeline.
 *
 * Usage:
 *   deep-build --content path/to/content.md [options]
 *
 * Options:
 *   --content <path>   Path to content markdown file (required unless --resume)
 *   --dry-run          Validate config, print execution plan, exit
 *   --resume <path>    Resume from existing state.json
 *   --subset <N>       Run only subset N (1-7)
 *   --skip-phase-a     Skip corpus integration, run PA on existing artifact
 *   --help             Print usage and exit
 */

import fs from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { slugify, safeJsonParse } from './utils.js';
import { TOTAL_SUBSETS, PASSES_PER_SUBSET, TOTAL_CORPUS_PASSES, MAX_PA_CYCLES, MODEL } from './config/constants.js';
import type { PipelineConfig } from './types/pipeline.js';

const USAGE = `
deep-build — multi-pass HTML page builder

Usage:
  deep-build --content <path>     Build a page from content markdown
  deep-build --resume <path>      Resume from a saved state.json
  deep-build --help               Show this help

Options:
  --content <path>    Path to content markdown file (REQUIRED unless --resume)
  --dry-run           Validate config, print execution plan, exit 0
  --resume <path>     Resume pipeline from existing state.json path
  --subset <N>        Only run subset N (1-7)
  --skip-phase-a      Skip Phase A (corpus integration), jump to Phase B (PA)
  --help              Print this help text and exit

Exit codes:
  0  Success (or dry-run)
  1  Error
  2  Budget exceeded
`.trim();

function printUsage(): void {
  console.log(USAGE);
}

function resolveProjectRoot(): string {
  // Walk up from this file to find the project root (has design-system/)
  let dir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
  for (let i = 0; i < 10; i++) {
    if (fs.existsSync(path.join(dir, 'design-system'))) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  // Fallback: assume two levels up from tools/deep-build
  return path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..', '..');
}

function buildConfig(args: {
  content?: string;
  resume?: string;
  dryRun: boolean;
  subset?: number;
  skipPhaseA: boolean;
}): PipelineConfig {
  const projectRoot = resolveProjectRoot();
  const designSystemDir = path.join(projectRoot, 'design-system');

  if (!fs.existsSync(designSystemDir)) {
    throw new Error(`design-system/ not found at ${designSystemDir}. Is project root correct?`);
  }

  let contentPath: string;
  let slug: string;

  if (args.resume) {
    // Load state to recover content path
    const stateRaw = fs.readFileSync(args.resume, 'utf-8');
    const state = safeJsonParse<Record<string, unknown>>(stateRaw, `--resume state(${args.resume})`);
    contentPath = state.contentPath as string;
    slug = state.slug as string;
  } else if (args.content) {
    contentPath = path.resolve(args.content);
    if (!fs.existsSync(contentPath)) {
      throw new Error(`Content file not found: ${contentPath}`);
    }
    // Validate content file is text and has reasonable size
    const contentStat = fs.statSync(contentPath);
    if (contentStat.size === 0) {
      throw new Error('Content file is empty (0 bytes)');
    }
    if (contentStat.size > 5_000_000) {
      throw new Error(`Content file too large (${(contentStat.size / 1024 / 1024).toFixed(1)}MB). Maximum: 5MB.`);
    }
    const contentSample = fs.readFileSync(contentPath, { encoding: 'utf-8' }).slice(0, 1000);
    if (contentSample.includes('\x00')) {
      throw new Error('Content file appears to be binary (contains null bytes). Only markdown/text files are supported.');
    }
    slug = slugify(path.basename(contentPath));
  } else {
    throw new Error('Either --content or --resume is required');
  }

  const dateStr = new Date().toISOString().slice(0, 10);
  const outputDir = path.join(projectRoot, 'ephemeral', 'builds', `${slug}-${dateStr}`);
  const workspaceDir = path.join(outputDir, 'workspace');

  return {
    contentPath,
    slug,
    model: MODEL,
    subsetFilter: args.subset,
    skipPhaseA: args.skipPhaseA,
    dryRun: args.dryRun,
    resume: !!args.resume,
    projectRoot,
    designSystemDir,
    outputDir,
    workspaceDir,
    seedArtifactPath: args.skipPhaseA ? path.join(outputDir, 'artifact.html') : undefined,
  };
}

function printDryRun(config: PipelineConfig): void {
  console.log('=== DRY RUN ===\n');
  console.log(`Content:        ${config.contentPath}`);
  console.log(`Slug:           ${config.slug}`);
  console.log(`Model:          ${config.model}`);
  console.log(`Project root:   ${config.projectRoot}`);
  console.log(`Output dir:     ${config.outputDir}`);
  console.log(`Design system:  ${config.designSystemDir}`);
  console.log(`Skip Phase A:   ${config.skipPhaseA}`);
  console.log(`Subset filter:  ${config.subsetFilter ?? 'all (1-7)'}`);
  console.log();

  const subsets = config.subsetFilter
    ? [config.subsetFilter]
    : Array.from({ length: TOTAL_SUBSETS }, (_, i) => i + 1);
  const totalPasses = subsets.length * PASSES_PER_SUBSET;

  console.log('--- Execution Plan ---');
  console.log(`Phase A: ${totalPasses} corpus passes (${subsets.length} subsets x ${PASSES_PER_SUBSET} passes)`);
  console.log(`Phase B: up to ${MAX_PA_CYCLES} PA cycles`);
  console.log();

  for (const s of subsets) {
    console.log(`  Subset ${s}: ${PASSES_PER_SUBSET} passes (B V B B V B B V)`);
  }

  console.log();
  console.log(`Total passes:   ${totalPasses} corpus + PA`);
  console.log(`Max PA cycles:  ${MAX_PA_CYCLES}`);
  console.log();

  // Estimate content tokens
  if (fs.existsSync(config.contentPath)) {
    const content = fs.readFileSync(config.contentPath, 'utf-8');
    const estimatedTokens = Math.ceil(content.length / 4);
    console.log(`Content tokens: ~${estimatedTokens.toLocaleString()} (estimated)`);
  }

  console.log('\n=== END DRY RUN ===');
}

async function main(): Promise<void> {
  let parsed;
  try {
    parsed = parseArgs({
      options: {
        content: { type: 'string' },
        'dry-run': { type: 'boolean', default: false },
        resume: { type: 'string' },
        subset: { type: 'string' },
        'skip-phase-a': { type: 'boolean', default: false },
        help: { type: 'boolean', default: false },
      },
      strict: true,
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error(`Argument error: ${msg}`);
    printUsage();
    process.exit(1);
  }

  if (parsed.values.help) {
    printUsage();
    process.exit(0);
  }

  // Validate subset
  let subset: number | undefined;
  if (parsed.values.subset) {
    subset = parseInt(parsed.values.subset, 10);
    if (isNaN(subset) || subset < 1 || subset > TOTAL_SUBSETS) {
      console.error(`Invalid subset: ${parsed.values.subset}. Must be 1-${TOTAL_SUBSETS}.`);
      process.exit(1);
    }
  }

  try {
    const config = buildConfig({
      content: parsed.values.content,
      resume: parsed.values.resume,
      dryRun: parsed.values['dry-run']!,
      subset,
      skipPhaseA: parsed.values['skip-phase-a']!,
    });

    if (config.dryRun) {
      printDryRun(config);
      process.exit(0);
    }

    // Dynamic import to avoid loading heavy dependencies in --help/--dry-run
    const { runPipeline, createDefaultDeps } = await import('./orchestrator/pipeline.js');
    const deps = await createDefaultDeps(config);
    await runPipeline(config, deps);

    process.exit(0);
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);

    // Use proper error class checking instead of fragile string matching
    const { BudgetExceededError } = await import('./types/errors.js');
    if (error instanceof BudgetExceededError) {
      console.error(`\nBudget exceeded: ${msg}`);
      process.exit(2);
    }

    console.error(`\nFatal error: ${msg}`);
    if (error instanceof Error && error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

main();
