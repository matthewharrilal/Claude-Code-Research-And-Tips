/**
 * Cross-subset verification — checks that early-subset patterns
 * remain visible as later subsets are integrated.
 *
 * Runs after subsets 2, 4, 6 (CROSS_SUBSET_VERIFY_AFTER).
 * Returns a prompt for claude -p to evaluate pattern persistence.
 */

import type { PipelineState } from '../types/state.js';
import { CROSS_SUBSET_VERIFY_AFTER } from '../config/constants.js';

/**
 * Determine if cross-subset verification should run after this subset.
 */
export function shouldRunCrossSubsetVerification(subsetId: number): boolean {
  return CROSS_SUBSET_VERIFY_AFTER.includes(subsetId);
}

/**
 * Build a prompt for the cross-subset verifier agent.
 *
 * The verifier receives:
 * - Checkpoint summaries from all completed subsets
 * - The current artifact (via {CURRENT_ARTIFACT} in template)
 * - Instructions to check if early-subset patterns are still present
 *
 * @param state - Current pipeline state
 * @param checkpoints - Paths to checkpoint directories for completed subsets
 * @returns Assembled prompt text for claude -p
 */
export function buildCrossSubsetVerifierPrompt(
  state: PipelineState,
  checkpoints: string[],
): string {
  const completedSubsets = state.currentSubsetId;
  const checkpointList = checkpoints
    .map((cp, i) => `- Subset ${i + 1}: ${cp}`)
    .join('\n');

  const verifierObsSummary = state.verifierObservations.length > 0
    ? state.verifierObservations.join('\n\n---\n\n')
    : '(No verifier observations yet.)';

  return `You are a cross-subset integration verifier for a multi-pass design page build.

## Context

${completedSubsets} corpus subsets have been integrated into the artifact so far.
Each subset introduced specific design knowledge from different research domains.

## Checkpoint Paths (read these files for per-subset state)

${checkpointList}

## Verifier Observations Across All Subsets

${verifierObsSummary}

## Your Task

Examine the current artifact (provided separately as the HTML file in the workspace).
Check whether patterns and integration from EARLIER subsets are still visible and active:

1. **Pattern Persistence**: Are design patterns introduced by subsets 1 through ${Math.max(1, completedSubsets - 2)} still present? Or have they been overwritten by later subset integration?

2. **Integration Depth**: For each completed subset, rate whether its contribution appears:
   - DEEPLY INTEGRATED (patterns shape the overall design)
   - SURFACE LEVEL (patterns present but not influential)
   - ABSENT (patterns from this subset are no longer detectable)

3. **Regression Detection**: Has any later subset REMOVED or CONTRADICTED patterns from earlier subsets? If so, describe specifically what was lost.

4. **Recommendation**: Should the pipeline:
   - CONTINUE (all early patterns intact)
   - WARN (some minor pattern erosion, monitor closely)
   - CRITICAL (3+ patterns lost, recommend checkpoint restoration)

## Response Format

Provide your assessment in this structure:

SUBSET_REVIEW:
[For each subset 1..${completedSubsets}: one line with subset number, status (INTEGRATED/SURFACE/ABSENT), and key pattern identified]

REGRESSIONS:
[List any specific regressions, or "None detected"]

OVERALL_VERDICT: CONTINUE | WARN | CRITICAL
EXPLANATION: [2-3 sentences]
`;
}
