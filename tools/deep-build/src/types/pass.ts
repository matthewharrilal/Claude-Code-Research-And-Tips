/**
 * Pass definition and execution types.
 */

import type { AgentRole } from './state.js';

export interface PassDefinition {
  /** Global pass number (1-56 for corpus, higher for PA) */
  passNumber: number;
  /** Subset ID (1-7) */
  subsetId: number;
  /** Pass within subset (1-8) */
  passWithinSubset: number;
  /** Role: builder or verifier */
  role: AgentRole;
  /** Rotation index (0=A, 1=B, 2=C) */
  rotationIndex: number;
  /** Whether this is a verifier pass (passes 2, 5, 8) */
  isVerifier: boolean;
}

export interface RotationSchedule {
  /** Which rotation (A=0, B=1, C=2) */
  rotationIndex: number;
  /** The shift amount applied to file array */
  shift: number;
  /** Files in their rotated order */
  rotatedFiles: string[];
  /** Human-readable description */
  description: string;
}

export interface PassResult {
  /** Whether the pass succeeded */
  success: boolean;
  /** The HTML artifact (if builder pass) */
  html?: string;
  /** Conviction addition extracted from response */
  convictionAddition?: ConvictionAdditionRaw;
  /** Discovery log entries extracted from response */
  discoveryEntries?: string[];
  /** Verifier observations (if verifier pass) */
  verifierObservations?: string;
  /** Raw response JSON from claude -p */
  rawResponse: ClaudeResponse;
  /** Cost in USD */
  cost: number;
  /** Input tokens */
  inputTokens: number;
  /** Output tokens */
  outputTokens: number;
  /** Cache read tokens */
  cacheReadTokens: number;
  /** Cache write tokens */
  cacheWriteTokens: number;
  /** Error message if failed */
  error?: string;
}

export interface ConvictionAdditionRaw {
  built?: string;
  trying?: string;
  rejected?: string;
  surprised?: string;
  wanted?: string;
  unresolved?: string;
}

export interface ClaudeResponse {
  type: 'result';
  subtype: 'success' | 'error_max_turns' | string;
  is_error: boolean;
  result: string;
  session_id: string;
  total_cost_usd: number;
  usage: {
    input_tokens: number;
    output_tokens: number;
    cache_read_tokens?: number;
    cache_write_tokens?: number;
  };
}

/**
 * Pass role schedule: which passes are builders vs verifiers.
 * P1=builder, P2=verifier, P3=builder, P4=builder, P5=verifier,
 * P6=builder, P7=builder, P8=verifier
 */
export const PASS_ROLES: Record<number, 'builder' | 'verifier'> = {
  1: 'builder',
  2: 'verifier',
  3: 'builder',
  4: 'builder',
  5: 'verifier',
  6: 'builder',
  7: 'builder',
  8: 'verifier',
};

/**
 * Rotation assignment: which rotation index for each pass within subset.
 * Passes 1-3 = Rotation A (index 0)
 * Passes 4-6 = Rotation B (index 1)
 * Passes 7-8 = Rotation C (index 2)
 */
export function getRotationIndex(passWithinSubset: number): number {
  if (passWithinSubset <= 3) return 0;
  if (passWithinSubset <= 6) return 1;
  return 2;
}
