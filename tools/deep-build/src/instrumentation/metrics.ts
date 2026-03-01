/**
 * Per-pass metrics recording.
 * Hot path — called after every pass completes.
 */

import type { PassResult } from '../types/pass.js';
import type { PipelineState } from '../types/state.js';
import type { Logger } from '../logging/logger.js';

/**
 * Record structured metrics for a completed pass.
 * Extracts cost, tokens, artifact size changes, and conviction/discovery additions,
 * then appends to passes.jsonl via the logger.
 */
export function recordPassMetrics(
  passResult: PassResult,
  state: PipelineState,
  logger: Logger,
): void {
  const currentPass = state.passes[state.passes.length - 1];
  if (!currentPass) return;

  // Log the pass record (already assembled by the orchestrator)
  logger.pass(currentPass);

  // Log quality signals if present
  if (passResult.verifierObservations) {
    logger.quality({
      type: 'verifier-observation',
      passNumber: currentPass.passNumber,
      subsetId: currentPass.subsetId,
      observation: passResult.verifierObservations,
    });
  }

  if (passResult.convictionAddition) {
    const dimensions = Object.entries(passResult.convictionAddition)
      .filter(([, v]) => v)
      .map(([k]) => k);
    logger.quality({
      type: 'conviction-addition',
      passNumber: currentPass.passNumber,
      subsetId: currentPass.subsetId,
      dimensions,
    });
  }

  if (passResult.discoveryEntries && passResult.discoveryEntries.length > 0) {
    logger.quality({
      type: 'discovery-entries',
      passNumber: currentPass.passNumber,
      subsetId: currentPass.subsetId,
      count: passResult.discoveryEntries.length,
    });
  }

  // Status line
  const sizeDelta = currentPass.artifactSizeAfter - currentPass.artifactSizeBefore;
  const sign = sizeDelta >= 0 ? '+' : '';
  logger.status(
    `P${currentPass.passNumber}/56 S${currentPass.subsetId} ${currentPass.role} — $${state.cost.totalCostUsd.toFixed(2)} — ${sign}${sizeDelta}b`,
  );
}
