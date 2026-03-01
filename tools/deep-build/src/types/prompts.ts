/**
 * Prompt template and assembly types.
 */

export interface PromptTemplate {
  /** Template name (e.g., 'builder-corpus') */
  name: string;
  /** Raw template content with {VARIABLE} placeholders */
  content: string;
  /** Path to the template file */
  filePath: string;
}

export type PromptVariableName =
  | 'WORLD_DESCRIPTION'
  | 'CONVICTION_BRIEF'
  | 'CONTENT_MARKDOWN'
  | 'CONTENT_MAP'
  | 'FILE_ORDER_DESCRIPTION'
  | 'CORPUS_FILES_CONCATENATED'
  | 'CASE_STUDY'
  | 'MECHANISM_CATALOG'
  | 'COMPONENTS_CSS'
  | 'TOKENS_CSS'
  | 'CONVICTION_LAYER'
  | 'DISCOVERY_LOG'
  | 'VERIFIER_OBSERVATIONS_SECTION'
  | 'PASS_CONTEXT'
  | 'PREVIOUS_SUBSET_SUMMARIES'
  | 'CURRENT_ARTIFACT'
  | 'ARTIFACT_DIFF'
  | 'AUDITOR_ID'
  | 'ASSIGNED_QUESTIONS'
  | 'SCREENSHOT_PATHS'
  | 'PA_GUARDRAILS'
  | 'EXPERIENTIAL_PROTOCOL'
  | 'AUDITOR_REPORTS'
  | 'BUILDER_REFLECTION'
  | 'GATE_RESULTS'
  | 'RESEARCH_FILES'
  | 'PA_GUARDRAILS_WEAVER'
  | 'WEAVER_SYNTHESIS'
  | 'USER_DIRECTION'
  | 'RESPONSE_FORMAT_INSTRUCTIONS'
  | 'VERIFIER_OBSERVATIONS'
  | 'ARTIFACT_EVOLUTION'
  | 'SUBSET_CONTEXT';

export interface PromptVariable {
  name: PromptVariableName;
  value: string;
  /** Approximate token count (~4 chars/token) */
  estimatedTokens: number;
}

export interface AssembledPrompt {
  /** The fully resolved prompt text */
  text: string;
  /** Estimated total tokens */
  estimatedTokens: number;
  /** Variables that were resolved */
  resolvedVariables: PromptVariableName[];
  /** Variables in the template that had no resolver (should be empty) */
  unresolvedVariables: string[];
  /** Whether trimming was applied due to token limit */
  wasTrimmed: boolean;
  /** What was trimmed, if anything */
  trimDetails?: string;
}
