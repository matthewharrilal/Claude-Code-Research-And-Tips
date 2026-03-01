/**
 * Cost tracking and budget enforcement.
 * Tracks per-pass, per-subset, per-role, and total costs.
 */

import type { PipelineState, CostTracker } from '../types/state.js';
import type { PassResult } from '../types/pass.js';

/**
 * Update the cost tracker in state with a new pass result.
 * Returns the updated CostTracker (also mutates state.cost in place).
 */
export function updateCost(
  state: PipelineState,
  passResult: PassResult,
  role: string,
  subsetId?: number,
): CostTracker {
  const cost = state.cost;

  // Accumulate token counts
  cost.totalInputTokens += passResult.inputTokens;
  cost.totalOutputTokens += passResult.outputTokens;
  cost.totalCacheReadTokens += passResult.cacheReadTokens;
  cost.totalCacheWriteTokens += passResult.cacheWriteTokens;
  cost.totalCostUsd += passResult.cost;

  // Per-subset tracking
  if (subsetId !== undefined) {
    cost.perSubset[subsetId] = (cost.perSubset[subsetId] ?? 0) + passResult.cost;
  }

  // Per-role tracking
  cost.perRole[role] = (cost.perRole[role] ?? 0) + passResult.cost;

  // Check budget thresholds
  if (!cost.warningThresholdHit && cost.totalCostUsd >= cost.budgetWarningThresholdUsd) {
    cost.warningThresholdHit = true;
  }
  if (!cost.hardCapHit && cost.totalCostUsd >= cost.budgetHardCapUsd) {
    cost.hardCapHit = true;
  }

  return cost;
}

export interface BudgetStatus {
  warning: boolean;
  exceeded: boolean;
  message?: string;
}

/**
 * Check current budget status against warning and hard cap thresholds.
 */
export function checkBudget(cost: CostTracker): BudgetStatus {
  if (cost.hardCapHit) {
    return {
      warning: true,
      exceeded: true,
      message: `Budget hard cap exceeded: $${cost.totalCostUsd.toFixed(2)} >= $${cost.budgetHardCapUsd} cap. Pipeline must pause.`,
    };
  }

  if (cost.warningThresholdHit) {
    const remaining = cost.budgetHardCapUsd - cost.totalCostUsd;
    return {
      warning: true,
      exceeded: false,
      message: `Budget warning: $${cost.totalCostUsd.toFixed(2)} spent, $${remaining.toFixed(2)} remaining before $${cost.budgetHardCapUsd} cap.`,
    };
  }

  return { warning: false, exceeded: false };
}
