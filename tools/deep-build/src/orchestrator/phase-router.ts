/**
 * Phase B routing logic — deterministic, no LLM involvement.
 *
 * Routes weaver verdicts to SHIP/REFINE/RETHINK decisions.
 * Handles stall detection and budget enforcement.
 */

import type { WeaverVerdict, PACycleRecord, CostTracker, PipelineState } from '../types/state.js';
import {
  PA_THRESHOLD,
  RETHINK_THRESHOLD,
  TIER5_MINIMUM,
  STALL_THRESHOLD,
} from '../config/constants.js';

/**
 * Route Phase B based on weaver verdict and pipeline state.
 *
 * SHIP: pa05 >= PA_THRESHOLD AND tier5 >= TIER5_MINIMUM AND zero soul violations
 * REFINE: pa05 >= RETHINK_THRESHOLD (but didn't meet SHIP criteria)
 * RETHINK: pa05 < RETHINK_THRESHOLD after 2+ cycles
 *
 * @returns 'SHIP' | 'REFINE' | 'RETHINK'
 */
export function routePhaseB(
  weaverVerdict: WeaverVerdict,
  state: PipelineState,
): 'SHIP' | 'REFINE' | 'RETHINK' {
  const { pa05Score, tier5, soulViolations } = weaverVerdict;

  // SHIP: all three criteria met
  if (
    pa05Score >= PA_THRESHOLD &&
    tier5 >= TIER5_MINIMUM &&
    soulViolations.length === 0
  ) {
    return 'SHIP';
  }

  // RETHINK: below rethink threshold after 2+ completed cycles
  if (pa05Score < RETHINK_THRESHOLD && state.completedPACycles >= 2) {
    return 'RETHINK';
  }

  // REFINE: above rethink threshold but didn't meet SHIP criteria
  if (pa05Score >= RETHINK_THRESHOLD) {
    return 'REFINE';
  }

  // Below rethink threshold but fewer than 2 cycles — still REFINE (give it a chance)
  return 'REFINE';
}

/**
 * Detect stall: STALL_THRESHOLD consecutive PA cycles with no improvement
 * over the score recorded just before the stall window began.
 *
 * This avoids false positives from score regression after improvement.
 * Example: scores [2.0, 3.0, 3.5, 3.2] with threshold 2:
 *   - Old logic: checks [3.5, 3.2], 3.2 < 3.5 = stall (WRONG — overall improving)
 *   - New logic: compares 3.5 and 3.2 against baseline 3.0, both > 3.0 = not stalled
 *
 * @returns true if stalled (should force SHIP)
 */
export function detectStall(paCycleRecords: PACycleRecord[]): boolean {
  if (paCycleRecords.length < STALL_THRESHOLD + 1) {
    // Need at least STALL_THRESHOLD + 1 records: 1 baseline + STALL_THRESHOLD window
    return false;
  }

  // Baseline = the score just before the stall window
  const baseline = paCycleRecords[paCycleRecords.length - STALL_THRESHOLD - 1].weaverVerdict.pa05Score;
  const recent = paCycleRecords.slice(-STALL_THRESHOLD);

  // Stalled if NO cycle in the window improved over the baseline
  for (const record of recent) {
    if (record.weaverVerdict.pa05Score > baseline) {
      return false; // Found improvement over baseline, not stalled
    }
  }

  return true;
}

/**
 * Check budget status against warning and hard cap thresholds.
 *
 * @returns warning (should log), exceeded (should pause pipeline)
 */
export function checkBudget(cost: CostTracker): {
  warning: boolean;
  exceeded: boolean;
} {
  return {
    warning: cost.totalCostUsd >= cost.budgetWarningThresholdUsd,
    exceeded: cost.totalCostUsd >= cost.budgetHardCapUsd,
  };
}
