/**
 * Corpus file rotation — pure function, no I/O.
 * Implements the carousel rotation using SHIFT_TABLE lookup from constants.
 *
 * Rotation ensures every corpus file gets turns at primacy (start),
 * valley (middle), and recency (end) positions across passes,
 * counteracting transformer attention bias.
 */

import type { CorpusFile } from '../types/pipeline.js';
import type { RotationSchedule } from '../types/pass.js';
import { SHIFT_TABLE } from '../config/constants.js';

const ROTATION_LABELS = ['A', 'B', 'C'] as const;

/**
 * Compute the rotated file order for a given rotation index.
 *
 * @param files - The corpus files for the current subset (4-6 files)
 * @param rotationIndex - 0 (A), 1 (B), or 2 (C)
 * @returns RotationSchedule with rotated file paths and metadata
 */
export function computeRotation(
  files: CorpusFile[],
  rotationIndex: number,
): RotationSchedule {
  const fileCount = files.length;

  // Clamp rotation index to valid range (0-2)
  const clampedIndex = Math.max(0, Math.min(2, rotationIndex));

  // Look up shifts for this file count, default to 5-file shifts
  const shifts = SHIFT_TABLE[fileCount] ?? SHIFT_TABLE[5];

  // Get the shift for this rotation, clamping to available shifts
  const shiftIndex = Math.min(clampedIndex, shifts.length - 1);
  const shift = shifts[shiftIndex];

  // Clamp shift to file count to prevent out-of-bounds
  const clampedShift = shift % fileCount;

  // Rotate: move first `shift` files to the end
  const rotatedFiles = [
    ...files.slice(clampedShift).map(f => f.path),
    ...files.slice(0, clampedShift).map(f => f.path),
  ];

  const label = ROTATION_LABELS[clampedIndex] ?? `R${clampedIndex}`;

  return {
    rotationIndex: clampedIndex,
    shift: clampedShift,
    rotatedFiles,
    description: `Rotation ${label} (shift ${clampedShift}): ${rotatedFiles.map(p => p.split('/').pop()).join(', ')}`,
  };
}
