/**
 * PA question assignments per auditor.
 * Source: pa-questions.md (69 questions, PA-01 through PA-77 with gaps)
 * and pa-deployment.md (9-auditor assignments).
 */

import type { AuditorId } from '../types/pa.js';

export interface PAQuestionDef {
  id: string;
  text: string;
  auditor: AuditorId;
  focusArea: string;
}

/**
 * Auditor focus areas.
 * Source: pa-deployment.md Section 1.2
 */
export const AUDITOR_FOCUS: Record<AuditorId, string> = {
  A: 'Impression + Emotion',
  B: 'Readability + Typography',
  C: 'Spatial + Proportion',
  D: 'Flow + Pacing',
  E: 'Grid + Layout',
  F: 'Consistency + Rhythm',
  G: 'Metaphor + Ideology',
  H: 'Responsiveness',
  I: 'Cross-Page + Adversarial',
};

/**
 * PA question assignments per auditor.
 * Source: pa-deployment.md Section 1.2 (domain-based assignments).
 * 69 questions across 9 auditors (49 standard + 2 sub-perceptual + 3 pipeline
 * integration + 6 extended + 9 Tier 5).
 * The Integrative Auditor (spawned separately per Section 1.5) has NO assigned
 * questions -- it is a 10th agent distinct from auditor I.
 */
export const PA_QUESTION_ASSIGNMENTS: Record<AuditorId, string[]> = {
  A: ['PA-01', 'PA-03', 'PA-04', 'PA-05', 'PA-45', 'PA-65', 'PA-67', 'PA-72', 'PA-76'],
  B: ['PA-02', 'PA-08', 'PA-29', 'PA-55', 'PA-56', 'PA-70', 'PA-77', 'PA-81'],
  C: ['PA-11', 'PA-30', 'PA-31', 'PA-32', 'PA-33', 'PA-50', 'PA-51', 'PA-53', 'PA-64', 'PA-66'],
  D: ['PA-12', 'PA-13', 'PA-34', 'PA-35', 'PA-36', 'PA-52', 'PA-62', 'PA-69', 'PA-71', 'PA-74', 'PA-75'],
  E: ['PA-14', 'PA-15', 'PA-37', 'PA-38', 'PA-39', 'PA-63', 'PA-80'],
  F: ['PA-16', 'PA-17', 'PA-41', 'PA-60', 'PA-61'],
  G: ['PA-18', 'PA-19', 'PA-20', 'PA-42', 'PA-43', 'PA-44', 'PA-54', 'PA-68'],
  H: ['PA-22', 'PA-23', 'PA-46', 'PA-47', 'PA-73'],
  I: ['PA-24', 'PA-25', 'PA-26', 'PA-27', 'PA-28', 'PA-48'],
};

/**
 * Get question IDs for a specific auditor.
 */
export function getQuestionsForAuditor(auditorId: AuditorId): string[] {
  return PA_QUESTION_ASSIGNMENTS[auditorId] ?? [];
}
