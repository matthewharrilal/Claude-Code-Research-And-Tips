/**
 * PA routing logic.
 * Determines next action based on WeaverVerdict: SHIP, REFINE, or RETHINK.
 * Also detects stall conditions to prevent infinite loops.
 */

import type { WeaverVerdict, PACycleRecord } from '../types/state.js';
import { PA_THRESHOLD, TIER5_MINIMUM, RETHINK_THRESHOLD, STALL_THRESHOLD } from '../config/constants.js';

/**
 * Route based on weaver verdict and pipeline state.
 *
 * SHIP: pa05Score >= PA_THRESHOLD AND tier5 >= TIER5_MINIMUM AND zero soul violations
 * REFINE: pa05Score >= RETHINK_THRESHOLD (but doesn't meet SHIP criteria)
 * RETHINK: pa05Score < RETHINK_THRESHOLD after 2+ completed cycles
 */
export function routePA(
  verdict: WeaverVerdict,
  state: { completedPACycles: number },
): 'SHIP' | 'REFINE' | 'RETHINK' {
  // SHIP: all quality thresholds met
  if (
    verdict.pa05Score >= PA_THRESHOLD &&
    verdict.tier5 >= TIER5_MINIMUM &&
    verdict.soulViolations.length === 0
  ) {
    return 'SHIP';
  }

  // RETHINK: score too low after enough attempts
  if (verdict.pa05Score < RETHINK_THRESHOLD && state.completedPACycles >= 2) {
    return 'RETHINK';
  }

  // REFINE: default — fixable issues remain
  return 'REFINE';
}

/**
 * Detect stall: N consecutive PA cycles with no PA-05 improvement.
 * If stalled, the orchestrator should force SHIP to prevent infinite loops.
 *
 * @param paCycleRecords - History of completed PA cycles
 * @returns true if stalled (should force SHIP)
 */
export function detectStall(paCycleRecords: PACycleRecord[]): boolean {
  if (paCycleRecords.length < STALL_THRESHOLD) {
    return false;
  }

  // Check the last STALL_THRESHOLD cycles for improvement
  const recent = paCycleRecords.slice(-STALL_THRESHOLD);
  for (let i = 1; i < recent.length; i++) {
    if (recent[i].weaverVerdict.pa05Score > recent[i - 1].weaverVerdict.pa05Score) {
      return false; // Found improvement, not stalled
    }
  }

  return true; // No improvement across consecutive cycles
}
