/**
 * Prompt assembly — loads templates, resolves variables, estimates tokens, trims if needed.
 */

import fs from 'node:fs';
import path from 'node:path';
import type { PromptTemplate, PromptVariableName, AssembledPrompt } from '../types/prompts.js';
import type { PipelineState, ConvictionEntry } from '../types/state.js';
import type { PassDefinition } from '../types/pass.js';
import type { PipelineConfig } from '../types/pipeline.js';
import { TEMPLATES_DIR } from '../config/paths.js';
import { CORPUS_SUBSETS } from '../config/corpus.js';
import { TOKEN_TRIM, TOKEN_FAIL, MAX_CONVICTION_ENTRIES } from '../config/constants.js';
import { estimateTokens, readFileChecked } from '../utils.js';
import { FileNotFoundError, ValidationError } from '../types/errors.js';
import { computeRotation } from '../orchestrator/rotation.js';

// ---------------------------------------------------------------------------
// Template loading
// ---------------------------------------------------------------------------

/**
 * Load a single template file from the templates directory.
 */
export function loadTemplate(templateName: string): PromptTemplate {
  const filePath = path.join(TEMPLATES_DIR, templateName);
  if (!fs.existsSync(filePath)) {
    throw new FileNotFoundError(filePath);
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  return { name: templateName, content, filePath };
}

/**
 * Load all .md templates from the templates directory.
 */
export function loadAllTemplates(): Map<string, PromptTemplate> {
  const map = new Map<string, PromptTemplate>();
  if (!fs.existsSync(TEMPLATES_DIR)) return map;
  for (const entry of fs.readdirSync(TEMPLATES_DIR)) {
    if (entry.endsWith('.md')) {
      map.set(entry, loadTemplate(entry));
    }
  }
  return map;
}

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

export function formatConvictionLayer(entries: ConvictionEntry[]): string {
  if (entries.length === 0) return '(No conviction entries yet.)';
  const grouped = new Map<string, ConvictionEntry[]>();
  for (const e of entries) {
    const existing = grouped.get(e.dimension) ?? [];
    existing.push(e);
    grouped.set(e.dimension, existing);
  }
  const lines: string[] = ['## Creative Conviction Layer'];
  for (const dim of ['built', 'trying', 'rejected', 'surprised', 'wanted', 'unresolved'] as const) {
    const items = grouped.get(dim);
    if (!items) continue;
    lines.push(`\n### ${dim.charAt(0).toUpperCase() + dim.slice(1)}`);
    for (const item of items) {
      lines.push(`- [S${item.subsetId} P${item.passNumber}] ${item.content}`);
    }
  }
  return lines.join('\n');
}

export function formatDiscoveryLog(entries: string[]): string {
  if (entries.length === 0) return '(No discovery entries yet.)';
  return '## Discovery Log\n\n' + entries.map((e, i) => `${i + 1}. ${e}`).join('\n');
}

export function formatPassContext(pass: PassDefinition): string {
  const rotationLabel = ['A', 'B', 'C'][pass.rotationIndex] ?? `R${pass.rotationIndex}`;
  return `Rotation ${rotationLabel}, pass ${pass.passWithinSubset} of 8, subset ${pass.subsetId} of 7 (global pass ${pass.passNumber})`;
}

export function formatSubsetSummaries(checkpoints: string[], projectRoot: string): string {
  if (checkpoints.length === 0) return '';
  const lines: string[] = ['## Previous Subset Summaries'];
  for (const cpDir of checkpoints) {
    const retroPath = path.join(cpDir, 'retrospective.md');
    const absRetro = path.isAbsolute(retroPath) ? retroPath : path.join(projectRoot, retroPath);
    if (fs.existsSync(absRetro)) {
      lines.push('\n---');
      lines.push(fs.readFileSync(absRetro, 'utf-8'));
    }
  }
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Variable resolution
// ---------------------------------------------------------------------------

function resolveAbsPath(relPath: string, projectRoot: string): string {
  return path.isAbsolute(relPath) ? relPath : path.join(projectRoot, relPath);
}

function loadFileOrEmpty(filePath: string): string {
  try {
    return readFileChecked(filePath);
  } catch {
    process.stderr.write(`[assembler] WARN: failed to load file (returning empty): ${filePath}\n`);
    return '';
  }
}

/**
 * Build variables map for a builder prompt.
 */
function resolveBuilderVariables(
  pass: PassDefinition,
  state: PipelineState,
  config: PipelineConfig,
): Map<PromptVariableName, string> {
  const vars = new Map<PromptVariableName, string>();
  const pr = config.projectRoot;

  // Static files
  vars.set('WORLD_DESCRIPTION', loadFileOrEmpty(path.join(TEMPLATES_DIR, 'world-description.md')));
  vars.set('CONVICTION_BRIEF', loadFileOrEmpty(path.join(config.outputDir, '_tc-brief.md')));
  vars.set('CONTENT_MARKDOWN', loadFileOrEmpty(resolveAbsPath(config.contentPath, pr)));
  vars.set('CONTENT_MAP', loadFileOrEmpty(path.join(config.outputDir, '_content-map.md')));

  // Corpus rotation
  const subset = CORPUS_SUBSETS.find(s => s.id === pass.subsetId);
  if (subset) {
    const rotation = computeRotation(subset.files, pass.rotationIndex);
    vars.set('FILE_ORDER_DESCRIPTION', rotation.description);

    const corpusParts: string[] = [];
    for (const relPath of rotation.rotatedFiles) {
      const absPath = resolveAbsPath(relPath, pr);
      const content = loadFileOrEmpty(absPath);
      const fileName = path.basename(relPath);
      corpusParts.push(`<!-- === ${fileName} === -->\n${content}`);
    }
    vars.set('CORPUS_FILES_CONCATENATED', corpusParts.join('\n\n'));
  } else {
    vars.set('FILE_ORDER_DESCRIPTION', `Unknown subset ${pass.subsetId}`);
    vars.set('CORPUS_FILES_CONCATENATED', '');
  }

  // Infrastructure files (always loaded)
  vars.set('CASE_STUDY', loadFileOrEmpty(path.join(pr, 'design-system/validated-explorations/combination/CD-006-pilot-migration.html')));
  vars.set('MECHANISM_CATALOG', loadFileOrEmpty(path.join(pr, 'design-system/compositional-core/grammar/mechanism-catalog.md')));
  vars.set('COMPONENTS_CSS', loadFileOrEmpty(path.join(pr, 'design-system/compositional-core/components/components.css')));
  vars.set('TOKENS_CSS', loadFileOrEmpty(path.join(pr, 'design-system/compositional-core/vocabulary/tokens.css')));

  // State-derived
  vars.set('CONVICTION_LAYER', formatConvictionLayer(state.convictionLayer));
  vars.set('DISCOVERY_LOG', formatDiscoveryLog(state.discoveryLog));
  vars.set('PASS_CONTEXT', formatPassContext(pass));
  vars.set('PREVIOUS_SUBSET_SUMMARIES', formatSubsetSummaries(state.checkpoints, pr));

  // Verifier observations: only on passes 3 and 6 (post-verifier builder passes)
  if (pass.passWithinSubset === 3 || pass.passWithinSubset === 6) {
    const obs = state.verifierObservations;
    vars.set('VERIFIER_OBSERVATIONS_SECTION',
      obs.length > 0
        ? '## Verifier Observations\n\n' + obs[obs.length - 1]
        : '',
    );
  } else {
    vars.set('VERIFIER_OBSERVATIONS_SECTION', '');
  }

  // Current artifact
  const artifactContent = loadFileOrEmpty(state.artifactPath);
  vars.set('CURRENT_ARTIFACT', artifactContent);

  return vars;
}

// ---------------------------------------------------------------------------
// Template substitution & token management
// ---------------------------------------------------------------------------

function substituteTemplate(
  template: PromptTemplate,
  vars: Map<PromptVariableName, string>,
): { text: string; resolved: PromptVariableName[]; unresolved: string[] } {
  const resolved: PromptVariableName[] = [];
  const unresolved: string[] = [];
  let text = template.content;

  // Find all {VARIABLE} placeholders
  const placeholderPattern = /\{([A-Z_]+)\}/g;
  const seen = new Set<string>();
  let match: RegExpExecArray | null;
  while ((match = placeholderPattern.exec(template.content)) !== null) {
    seen.add(match[1]);
  }

  // Resolve variables in dependency order: first collect all variable names,
  // then substitute in a single pass to prevent content-injected variables
  // from being expanded. We escape {VARIABLE} patterns in variable VALUES
  // before substitution to prevent cross-variable injection (V-05 defense).
  for (const name of seen) {
    const value = vars.get(name as PromptVariableName);
    if (value !== undefined) {
      // Escape any {UPPER_CASE} patterns in the value to prevent
      // content markdown from injecting template variables
      const safeValue = value.replace(/\{([A-Z_]{2,})\}/g, '⟨$1⟩');
      text = text.replaceAll(`{${name}}`, safeValue);
      resolved.push(name as PromptVariableName);
    } else {
      unresolved.push(name);
    }
  }

  return { text, resolved, unresolved };
}

interface TrimResult {
  text: string;
  wasTrimmed: boolean;
  trimDetails?: string;
}

/**
 * Trim prompt text to fit within token limits.
 * Strategy: first trim conviction layer (oldest entries), then trim valley-position corpus files.
 */
function trimIfNeeded(
  text: string,
  state: PipelineState | null,
  pass: PassDefinition | null,
  config: PipelineConfig | null,
): TrimResult {
  let tokens = estimateTokens(text);
  if (tokens <= TOKEN_TRIM) {
    return { text, wasTrimmed: false };
  }

  const trimLog: string[] = [];
  let result = text;

  // Phase 1: Trim conviction layer (remove oldest entries)
  if (state && state.convictionLayer.length > 2) {
    const half = Math.ceil(state.convictionLayer.length / 2);
    const trimmedEntries = state.convictionLayer.slice(half);
    const oldConviction = formatConvictionLayer(state.convictionLayer);
    const newConviction = formatConvictionLayer(trimmedEntries);
    // Use indexOf + slice to avoid .replace() interpreting $-patterns in conviction content
    const convictionIdx = result.indexOf(oldConviction);
    if (convictionIdx !== -1) {
      result = result.slice(0, convictionIdx) + newConviction + result.slice(convictionIdx + oldConviction.length);
    }
    tokens = estimateTokens(result);
    trimLog.push(`Trimmed conviction layer: ${state.convictionLayer.length} → ${trimmedEntries.length} entries`);
    if (tokens <= TOKEN_TRIM) {
      return { text: result, wasTrimmed: true, trimDetails: trimLog.join('; ') };
    }
  }

  // Phase 2: Trim valley-position corpus files (positions 2-3 in rotation order)
  if (pass && config) {
    const subset = CORPUS_SUBSETS.find(s => s.id === pass.subsetId);
    if (subset) {
      const rotation = computeRotation(subset.files, pass.rotationIndex);
      const fileCount = rotation.rotatedFiles.length;
      const minFiles = 2;
      let removed = 0;

      // Remove from valley positions (middle of the array)
      if (fileCount > minFiles) {
        const valleyIndices = [];
        // Positions 2 and 3 are valley positions (0-indexed: indices 1 and 2)
        for (let i = Math.min(2, fileCount - 1); i >= 1 && fileCount - removed > minFiles; i--) {
          valleyIndices.push(i);
        }

        for (const idx of valleyIndices) {
          const fileName = path.basename(rotation.rotatedFiles[idx]);
          const marker = `<!-- === ${fileName} === -->`;
          const markerIdx = result.indexOf(marker);
          if (markerIdx === -1) continue;

          // Find the next file marker or end of corpus section
          const nextMarkerPattern = '<!-- ===';
          const nextIdx = result.indexOf(nextMarkerPattern, markerIdx + marker.length);
          if (nextIdx !== -1) {
            result = result.slice(0, markerIdx) + `<!-- ${fileName} trimmed for token budget -->\n` + result.slice(nextIdx);
          } else {
            result = result.slice(0, markerIdx) + `<!-- ${fileName} trimmed for token budget -->\n`;
          }

          removed++;
          trimLog.push(`Trimmed valley-position corpus file: ${fileName}`);
          tokens = estimateTokens(result);
          if (tokens <= TOKEN_TRIM) {
            return { text: result, wasTrimmed: true, trimDetails: trimLog.join('; ') };
          }

          // Fail check: if we've removed 50%+ of corpus files and still over TOKEN_FAIL
          if (removed >= Math.ceil(fileCount * 0.5) && tokens > TOKEN_FAIL) {
            throw new ValidationError(
              `Token limit exceeded after trimming ${removed}/${fileCount} corpus files. ` +
              `Estimated: ${tokens} tokens, limit: ${TOKEN_FAIL}. ` +
              `Trim log: ${trimLog.join('; ')}`,
            );
          }
        }
      }
    }
  }

  return { text: result, wasTrimmed: trimLog.length > 0, trimDetails: trimLog.join('; ') || undefined };
}

function buildAssembledPrompt(
  template: PromptTemplate,
  vars: Map<PromptVariableName, string>,
  state: PipelineState | null,
  pass: PassDefinition | null,
  config: PipelineConfig | null,
): AssembledPrompt {
  const { text, resolved, unresolved } = substituteTemplate(template, vars);
  const { text: trimmedText, wasTrimmed, trimDetails } = trimIfNeeded(text, state, pass, config);
  return {
    text: trimmedText,
    estimatedTokens: estimateTokens(trimmedText),
    resolvedVariables: resolved,
    unresolvedVariables: unresolved,
    wasTrimmed,
    trimDetails,
  };
}

// ---------------------------------------------------------------------------
// Public assembly functions
// ---------------------------------------------------------------------------

export function assembleBuilderPrompt(
  pass: PassDefinition,
  state: PipelineState,
  config: PipelineConfig,
): AssembledPrompt {
  const template = loadTemplate('builder-corpus.md');
  const vars = resolveBuilderVariables(pass, state, config);
  return buildAssembledPrompt(template, vars, state, pass, config);
}

export function assembleVerifierPrompt(
  pass: PassDefinition,
  state: PipelineState,
  config: PipelineConfig,
  artifactDiff: string,
): AssembledPrompt {
  const template = loadTemplate('verifier-corpus.md');
  const vars = resolveBuilderVariables(pass, state, config);
  vars.set('ARTIFACT_DIFF', artifactDiff);
  return buildAssembledPrompt(template, vars, state, pass, config);
}

export function assembleRetrospectivePrompt(
  state: PipelineState,
  config: PipelineConfig,
): AssembledPrompt {
  const template = loadTemplate('retrospective.md');
  const vars = new Map<PromptVariableName, string>();

  vars.set('VERIFIER_OBSERVATIONS',
    state.verifierObservations.length > 0
      ? state.verifierObservations.join('\n\n---\n\n')
      : '(No verifier observations for this subset.)',
  );

  // Artifact evolution: size history summary
  const history = state.artifactSizeHistory;
  const evolution = history.length > 0
    ? `Size history (bytes): ${history.join(' → ')}\nGrowth: ${history[0]} → ${history[history.length - 1]} (${history.length} passes)`
    : '(No artifact history yet.)';
  vars.set('ARTIFACT_EVOLUTION', evolution);

  vars.set('CONVICTION_LAYER', formatConvictionLayer(state.convictionLayer));

  const subset = CORPUS_SUBSETS.find(s => s.id === state.currentSubsetId);
  const subsetFiles = subset
    ? subset.files.map(f => f.name).join(', ')
    : 'unknown';
  vars.set('SUBSET_CONTEXT', `Subset ${state.currentSubsetId} of 7 (${subset?.name ?? 'unknown'}), files: ${subsetFiles}`);

  return buildAssembledPrompt(template, vars, null, null, null);
}

export function assembleTcDerivationPrompt(
  config: PipelineConfig,
): AssembledPrompt {
  const template = loadTemplate('tc-derivation.md');
  const vars = new Map<PromptVariableName, string>();
  const pr = config.projectRoot;

  vars.set('CONTENT_MARKDOWN', loadFileOrEmpty(resolveAbsPath(config.contentPath, pr)));
  vars.set('WORLD_DESCRIPTION', loadFileOrEmpty(path.join(TEMPLATES_DIR, 'world-description.md')));

  const researchFiles = [
    path.join(pr, 'design-system/research/RESEARCH-SYNTHESIS.md'),
    path.join(pr, 'design-system/research/R5-COMBINATION-THEORY.md'),
  ];
  vars.set('RESEARCH_FILES', researchFiles.map(f => loadFileOrEmpty(f)).filter(Boolean).join('\n\n---\n\n'));

  return buildAssembledPrompt(template, vars, null, null, null);
}

export function assembleContentAnalysisPrompt(
  config: PipelineConfig,
): AssembledPrompt {
  const template = loadTemplate('content-analysis.md');
  const vars = new Map<PromptVariableName, string>();
  const pr = config.projectRoot;

  vars.set('CONTENT_MARKDOWN', loadFileOrEmpty(resolveAbsPath(config.contentPath, pr)));
  vars.set('WORLD_DESCRIPTION', loadFileOrEmpty(path.join(TEMPLATES_DIR, 'world-description.md')));

  const researchFiles = [
    path.join(pr, 'design-system/research/RESEARCH-SYNTHESIS.md'),
    path.join(pr, 'design-system/research/R5-COMBINATION-THEORY.md'),
  ];
  vars.set('RESEARCH_FILES', researchFiles.map(f => loadFileOrEmpty(f)).filter(Boolean).join('\n\n---\n\n'));

  return buildAssembledPrompt(template, vars, null, null, null);
}

export function assemblePaAuditorPrompt(
  auditorId: string,
  assignedQuestions: string[],
  screenshotPaths: string[],
  htmlPath: string,
  guardrailsPath: string,
): AssembledPrompt {
  const template = loadTemplate('pa-auditor.md');
  const vars = new Map<PromptVariableName, string>();

  vars.set('AUDITOR_ID', auditorId);
  vars.set('ASSIGNED_QUESTIONS', assignedQuestions.join('\n'));
  vars.set('SCREENSHOT_PATHS', screenshotPaths.map(p => `- ${p}`).join('\n'));
  vars.set('CURRENT_ARTIFACT', loadFileOrEmpty(htmlPath));
  vars.set('PA_GUARDRAILS', loadFileOrEmpty(guardrailsPath));

  // Experiential protocol: Section 0 instructions (inline in template, not a variable we load)
  // The template itself contains the experiential protocol text.
  // We only set it if the template uses it as a variable.
  vars.set('EXPERIENTIAL_PROTOCOL',
    'Look at the screenshots FIRST. Form your own impressions before reading any questions or guidelines. ' +
    'Write 3-5 sentences capturing your raw experiential response. Only then proceed to the assigned questions.',
  );

  return buildAssembledPrompt(template, vars, null, null, null);
}

export function assemblePaIntegrativePrompt(
  auditorReportPaths: string[],
  screenshotPaths: string[],
  htmlPath: string,
  guardrailsPath: string,
): AssembledPrompt {
  const template = loadTemplate('pa-integrative.md');
  const vars = new Map<PromptVariableName, string>();

  // Concatenate all auditor reports
  const reports = auditorReportPaths.map(p => {
    const content = loadFileOrEmpty(p);
    const name = path.basename(p, '.md');
    return `<!-- === Auditor Report: ${name} === -->\n${content}`;
  }).join('\n\n---\n\n');

  vars.set('AUDITOR_REPORTS', reports);
  vars.set('SCREENSHOT_PATHS', screenshotPaths.map(p => `- ${p}`).join('\n'));
  vars.set('CURRENT_ARTIFACT', loadFileOrEmpty(htmlPath));
  vars.set('PA_GUARDRAILS', loadFileOrEmpty(guardrailsPath));

  return buildAssembledPrompt(template, vars, null, null, null);
}

export function assembleWeaverPrompt(
  auditorReportPaths: string[],
  screenshotPaths: string[],
  convictionBrief: string,
  builderReflection: string,
  gateResults: string,
  researchFiles: string,
  htmlPath: string,
  weaverGuardrailsPath: string,
): AssembledPrompt {
  const template = loadTemplate('pa-weaver.md');
  const vars = new Map<PromptVariableName, string>();

  const reports = auditorReportPaths.map(p => {
    const content = loadFileOrEmpty(p);
    const name = path.basename(p, '.md');
    return `<!-- === Auditor Report: ${name} === -->\n${content}`;
  }).join('\n\n---\n\n');

  vars.set('AUDITOR_REPORTS', reports);
  vars.set('SCREENSHOT_PATHS', screenshotPaths.map(p => `- ${p}`).join('\n'));
  vars.set('CONVICTION_BRIEF', convictionBrief);
  vars.set('BUILDER_REFLECTION', builderReflection);
  vars.set('GATE_RESULTS', gateResults);
  vars.set('RESEARCH_FILES', researchFiles);
  vars.set('CURRENT_ARTIFACT', loadFileOrEmpty(htmlPath));
  vars.set('PA_GUARDRAILS_WEAVER', loadFileOrEmpty(weaverGuardrailsPath));

  return buildAssembledPrompt(template, vars, null, null, null);
}

export function assembleRefineBuilderPrompt(
  weaverSynthesis: string,
  builderReflection: string,
  state: PipelineState,
  config: PipelineConfig,
  userDirection?: string,
): AssembledPrompt {
  const template = loadTemplate('refine-builder.md');
  const vars = new Map<PromptVariableName, string>();
  const pr = config.projectRoot;

  vars.set('CURRENT_ARTIFACT', loadFileOrEmpty(state.artifactPath));
  vars.set('WEAVER_SYNTHESIS', weaverSynthesis);
  vars.set('BUILDER_REFLECTION', builderReflection);
  vars.set('CONVICTION_BRIEF', loadFileOrEmpty(path.join(config.outputDir, '_tc-brief.md')));
  vars.set('CONTENT_MARKDOWN', loadFileOrEmpty(resolveAbsPath(config.contentPath, pr)));
  vars.set('CASE_STUDY', loadFileOrEmpty(path.join(pr, 'design-system/validated-explorations/combination/CD-006-pilot-migration.html')));
  vars.set('MECHANISM_CATALOG', loadFileOrEmpty(path.join(pr, 'design-system/compositional-core/grammar/mechanism-catalog.md')));
  vars.set('COMPONENTS_CSS', loadFileOrEmpty(path.join(pr, 'design-system/compositional-core/components/components.css')));
  vars.set('TOKENS_CSS', loadFileOrEmpty(path.join(pr, 'design-system/compositional-core/vocabulary/tokens.css')));
  vars.set('USER_DIRECTION', userDirection ?? '');
  vars.set('RESPONSE_FORMAT_INSTRUCTIONS',
    'Output your complete HTML between <!-- HTML_START --> and <!-- HTML_END --> markers. ' +
    'Then write your reflection between <!-- CONVICTION_ADDITION_START --> and <!-- CONVICTION_ADDITION_END --> markers ' +
    '(with BUILT/TRYING/REJECTED/SURPRISED/WANTED/UNRESOLVED dimensions). ' +
    'Then write discoveries between <!-- DISCOVERY_LOG_START --> and <!-- DISCOVERY_LOG_END --> markers.',
  );

  return buildAssembledPrompt(template, vars, null, null, null);
}
