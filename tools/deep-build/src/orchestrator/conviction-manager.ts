/**
 * Conviction layer management — FIFO merge, deterministic, no LLM involvement.
 *
 * The conviction layer is the "creative tissue" between passes:
 * 6 dimensions (BUILT/TRYING/REJECTED/SURPRISED/WANTED/UNRESOLVED)
 * that carry creative intent across independent Claude instances.
 *
 * Capped at MAX_CONVICTION_ENTRIES (10). When exceeded, drop oldest first.
 */

import type { PipelineState, ConvictionEntry } from '../types/state.js';
import { MAX_CONVICTION_ENTRIES } from '../config/constants.js';

const CONVICTION_DIMENSIONS = [
  'built',
  'trying',
  'rejected',
  'surprised',
  'wanted',
  'unresolved',
] as const;

const CONVICTION_START_MARKER = '<!-- CONVICTION_ADDITION_START -->';
const CONVICTION_END_MARKER = '<!-- CONVICTION_ADDITION_END -->';

/**
 * Add a new conviction entry to the pipeline state.
 * Returns a NEW state object (immutable pattern).
 * When cap exceeded: drop entries with lowest passNumber (oldest first).
 */
export function addConviction(
  state: PipelineState,
  newEntry: Omit<ConvictionEntry, 'addedAt'>,
): PipelineState {
  const entry: ConvictionEntry = {
    ...newEntry,
    addedAt: new Date().toISOString(),
  };

  let layer = [...state.convictionLayer, entry];

  // FIFO: if over cap, drop oldest (lowest passNumber first, then earliest addedAt)
  if (layer.length > MAX_CONVICTION_ENTRIES) {
    layer.sort((a, b) => {
      if (a.passNumber !== b.passNumber) return a.passNumber - b.passNumber;
      return a.addedAt.localeCompare(b.addedAt);
    });
    layer = layer.slice(layer.length - MAX_CONVICTION_ENTRIES);
  }

  return {
    ...state,
    convictionLayer: layer,
    convictionEntryCount: state.convictionEntryCount + 1,
  };
}

/**
 * Extract conviction entries from a builder's raw response text.
 * Looks for markers: <!-- CONVICTION_ADDITION_START --> ... <!-- CONVICTION_ADDITION_END -->
 * Parses 6 dimensions: BUILT/TRYING/REJECTED/SURPRISED/WANTED/UNRESOLVED
 *
 * @returns Array of ConvictionEntry (one per dimension found)
 */
export function extractConvictionFromResponse(
  resultText: string,
  passNumber: number,
  subsetId: number,
): ConvictionEntry[] {
  const startIdx = resultText.indexOf(CONVICTION_START_MARKER);
  const endIdx = resultText.indexOf(CONVICTION_END_MARKER);

  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    return [];
  }

  const block = resultText.slice(
    startIdx + CONVICTION_START_MARKER.length,
    endIdx,
  ).trim();

  const entries: ConvictionEntry[] = [];
  const now = new Date().toISOString();

  for (const dim of CONVICTION_DIMENSIONS) {
    const label = dim.toUpperCase();
    // Match "BUILT: content" pattern, capturing until next dimension label or end
    const pattern = new RegExp(
      `^${label}:\\s*(.+?)(?=^(?:BUILT|TRYING|REJECTED|SURPRISED|WANTED|UNRESOLVED):|$)`,
      'ms',
    );
    const match = block.match(pattern);
    if (match && match[1]?.trim()) {
      entries.push({
        passNumber,
        subsetId,
        dimension: dim,
        content: match[1].trim(),
        addedAt: now,
      });
    }
  }

  return entries;
}

// formatConvictionLayer is in prompts/assembler.ts (canonical implementation).
// No duplicate here — assembler.ts groups by dimension with markdown headers.
