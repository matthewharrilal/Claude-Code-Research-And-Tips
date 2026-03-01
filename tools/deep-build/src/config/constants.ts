/**
 * Pipeline constants. Single source of truth for all configurable values.
 */

import type { ViewportConfig } from '../types/pipeline.js';

/** Model to use for all claude -p calls */
export const MODEL = 'claude-opus-4-6';

/** Maximum retries per claude -p call (4 total attempts) */
export const RETRY_LIMIT = 3;

/** Exponential backoff delays in ms */
export const RETRY_BACKOFF = [5000, 15000, 45000];

/** Budget warning threshold in USD */
export const BUDGET_WARNING = 150;

/** Budget hard cap in USD — pipeline pauses */
export const BUDGET_CAP = 250;

/** Maximum PA hardening cycles */
export const MAX_PA_CYCLES = 3;

/** PA-05 score threshold for SHIP verdict */
export const PA_THRESHOLD = 3.5;

/** PA-05 score threshold for RETHINK (below this after 2+ cycles) */
export const RETHINK_THRESHOLD = 2.0;

/** Tier 5 minimum for SHIP verdict (out of 8) */
export const TIER5_MINIMUM = 6;

/** Maximum conviction layer entries (FIFO merge when exceeded) */
export const MAX_CONVICTION_ENTRIES = 10;

/** Token trim threshold (actively trim) */
export const TOKEN_TRIM = 95_000;

/** Token hard fail threshold */
export const TOKEN_FAIL = 105_000;

/** Approximate chars per token for estimation */
export const CHARS_PER_TOKEN = 4;

/** Viewports for PA screenshots */
export const VIEWPORTS: ViewportConfig[] = [
  { width: 1440, height: 900, label: 'desktop' },
  { width: 768, height: 1024, label: 'tablet' },
  { width: 375, height: 812, label: 'mobile' },
];

/** Passes within subset: 8 passes per subset */
export const PASSES_PER_SUBSET = 8;

/** Total subsets */
export const TOTAL_SUBSETS = 7;

/** Total corpus integration passes */
export const TOTAL_CORPUS_PASSES = PASSES_PER_SUBSET * TOTAL_SUBSETS; // 56

/** Cross-subset verification runs after these subsets */
export const CROSS_SUBSET_VERIFY_AFTER = [2, 4, 6];

/** Stall detection: consecutive no-improvement cycles before force SHIP */
export const STALL_THRESHOLD = 2;

/** Mini-PA auditor IDs — A (PA-05 owner), C (spatial/void), G (metaphor) */
export const MINI_PA_AUDITORS = ['A', 'C', 'G'] as const;

/** Per-role max-turns configuration */
export const MAX_TURNS: Record<string, number> = {
  'tc-derivation': 30,
  'content-analysis': 30,
  'builder': 1,
  'verifier': 1,
  'retrospective': 10,
  'cross-subset-verifier': 10,
  'pa-auditor': 30,
  'integrative-auditor': 20,
  'weaver': 40,
  'refine-builder': 25,
};

/** Per-role allowed tools */
export const ALLOWED_TOOLS: Record<string, string> = {
  'tc-derivation': 'Read,Write,Edit',
  'content-analysis': 'Read,Write,Edit',
  'builder': '',
  'verifier': '',
  'retrospective': 'Read',
  'cross-subset-verifier': 'Read',
  'pa-auditor': 'Read,Glob,Grep',
  'integrative-auditor': 'Read,Glob,Grep',
  'weaver': 'Read,Glob',
  'refine-builder': 'Read,Write,Edit,Glob,Grep',
};

/** Roles that need --strict-mcp-config (deny Playwright) */
export const STRICT_MCP_ROLES = ['pa-auditor', 'integrative-auditor'];

/** Rotation shift lookup table per subset file count */
export const SHIFT_TABLE: Record<number, number[]> = {
  4: [0, 2, 3],
  5: [0, 2, 4],
  6: [0, 2, 4],
};
