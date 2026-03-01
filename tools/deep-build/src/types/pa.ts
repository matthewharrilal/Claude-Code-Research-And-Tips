/**
 * PA (Perceptual Audit) subsystem types.
 */

import type { ViewportConfig } from './pipeline.js';

export type AuditorId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';

export interface ScreenshotManifest {
  /** Viewport configuration used */
  viewport: ViewportConfig;
  /** Absolute path to the saved screenshot */
  path: string;
  /** Timestamp of capture */
  capturedAt: string;
  /** Whether the screenshot is full-page */
  fullPage: boolean;
}

export interface GateResult {
  /** Gate ID (e.g., 'GR-01') */
  gateId: string;
  /** Whether the gate passed */
  passed: boolean;
  /** Human-readable description */
  description: string;
  /** Detailed result message */
  message?: string;
  /** Tier: REQUIRED, RECOMMENDED, ADVISORY, DIAGNOSTIC, BRIEF */
  tier: 'REQUIRED' | 'RECOMMENDED' | 'ADVISORY' | 'DIAGNOSTIC' | 'BRIEF';
}

export interface GateVerdict {
  /** All gate results */
  gates: GateResult[];
  /** Count of passed gates */
  passedCount: number;
  /** Count of failed gates */
  failedCount: number;
  /** Count of REQUIRED gates that failed */
  requiredFailures: number;
  /** Whether all REQUIRED gates passed */
  allRequiredPassed: boolean;
  /** Timestamp */
  evaluatedAt: string;
}

export interface AuditorReport {
  /** Auditor ID (A-I) */
  auditorId: AuditorId;
  /** Focus area (e.g., 'Soul & Identity') */
  focusArea: string;
  /** The full report text */
  reportText: string;
  /** Questions that were answered */
  questionsAnswered: string[];
  /** Path to saved report file */
  reportPath: string;
  /** Whether the auditor completed successfully */
  success: boolean;
  /** Cost in USD */
  cost: number;
  /** Input tokens used */
  inputTokens?: number;
  /** Output tokens used */
  outputTokens?: number;
  /** Error if failed */
  error?: string;
}

export interface MiniPAResult {
  /** Which auditors were used (subset of A-H) */
  auditorIds: AuditorId[];
  /** Reports from mini-PA auditors */
  reports: AuditorReport[];
  /** Quick directional signal */
  trend: 'improving' | 'stable' | 'regressing';
  /** Cost in USD */
  cost: number;
}
