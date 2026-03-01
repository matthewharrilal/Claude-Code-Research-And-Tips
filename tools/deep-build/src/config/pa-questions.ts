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
 */
export const AUDITOR_FOCUS: Record<AuditorId, string> = {
  A: 'Soul & Identity',
  B: 'Perception & Spatial',
  C: 'Coherence & Integration',
  D: 'Metaphor & Meaning',
  E: 'Content Fidelity',
  F: 'Responsive & Breakpoints',
  G: 'Typography & Readability',
  H: 'Spatial Composition',
  I: 'Cross-cutting Synthesis (Integrative)',
};

/**
 * PA question assignments per auditor.
 * Integrative auditor (I) receives no pre-assigned questions.
 */
export const PA_QUESTION_ASSIGNMENTS: Record<Exclude<AuditorId, 'I'>, string[]> = {
  A: ['PA-01', 'PA-02', 'PA-03', 'PA-04', 'PA-05', 'PA-06', 'PA-07'],
  B: ['PA-08', 'PA-09', 'PA-10', 'PA-11', 'PA-12', 'PA-13', 'PA-14', 'PA-15', 'PA-16'],
  C: ['PA-17', 'PA-18', 'PA-19', 'PA-20', 'PA-21', 'PA-22', 'PA-23'],
  D: ['PA-24', 'PA-25', 'PA-26', 'PA-27', 'PA-28', 'PA-29'],
  E: ['PA-30', 'PA-31', 'PA-32', 'PA-33', 'PA-34', 'PA-35', 'PA-36'],
  F: ['PA-37', 'PA-38', 'PA-39', 'PA-40', 'PA-41', 'PA-42'],
  G: ['PA-43', 'PA-44', 'PA-45', 'PA-46', 'PA-47', 'PA-48', 'PA-49'],
  H: ['PA-50', 'PA-51', 'PA-52', 'PA-53', 'PA-54', 'PA-55'],
};

/**
 * Get question IDs for a specific auditor.
 */
export function getQuestionsForAuditor(auditorId: AuditorId): string[] {
  if (auditorId === 'I') return []; // Integrative reads A-H reports
  return PA_QUESTION_ASSIGNMENTS[auditorId] ?? [];
}
