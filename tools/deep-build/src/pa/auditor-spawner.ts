/**
 * PA auditor spawner.
 * Spawns 8 parallel auditors (A-H) then 1 sequential integrative auditor (I).
 * Each auditor gets screenshots + HTML + guardrails + assigned questions.
 * Each auditor gets ZERO conviction, builder context, gate results, or design docs.
 */

import fs from 'node:fs';
import path from 'node:path';
import type { AuditorId, AuditorReport, ScreenshotManifest } from '../types/pa.js';
import type { PipelineConfig } from '../types/pipeline.js';
import { spawnClaude } from '../agents/claude-cli.js';
import { AUDITOR_FOCUS, getQuestionsForAuditor } from '../config/pa-questions.js';
import { ensureDir, readFileChecked } from '../utils.js';

const PARALLEL_AUDITORS: AuditorId[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const MIN_SUCCESSFUL_AUDITORS = 5;

/**
 * Build the prompt for a single auditor (A-H).
 */
function buildAuditorPrompt(
  auditorId: AuditorId,
  screenshotPaths: ScreenshotManifest[],
  htmlPath: string,
  guardrailsPath: string,
): string {
  const focus = AUDITOR_FOCUS[auditorId];
  const questions = getQuestionsForAuditor(auditorId);
  const html = readFileChecked(htmlPath);
  const guardrails = readFileChecked(guardrailsPath);

  const screenshotSection = screenshotPaths
    .map((s) => `- ${s.viewport.label} (${s.viewport.width}x${s.viewport.height}): ${s.path}`)
    .join('\n');

  return `You are PA Auditor ${auditorId}: ${focus}.

## Your Task

Perform a perceptual audit of the HTML artifact below. You are one of 8 independent auditors. Your focus area is "${focus}".

## Screenshots

Read these screenshot files using the Read tool (they are PNG images):
${screenshotSection}

IMPORTANT: Look at the screenshots FIRST before reading HTML. Screenshots are your experiential anchor — they show what the reader actually sees.

## Assigned Questions

Answer EACH of these questions with specific evidence:
${questions.map((q) => `- ${q}`).join('\n')}

For each question:
1. State the question ID
2. Provide your assessment (with specific evidence from screenshots and HTML)
3. Rate severity if a problem is found: BLOCKING / SIGNIFICANT / MINOR / NONE

## Guardrails Reference

<guardrails>
${guardrails}
</guardrails>

## HTML Artifact

<html-artifact>
${html}
</html-artifact>

## Output Format

Write your report as markdown. Structure it as:

# Auditor ${auditorId}: ${focus}

## Summary
[2-3 sentence overview of findings]

## Question Responses
[One section per assigned question]

## Top Findings
[Ranked list of issues found, most severe first]

## Soul Violations
[List any soul/identity violations, or "None found"]
`;
}

/**
 * Build the prompt for the integrative auditor (I).
 */
function buildIntegrativePrompt(
  reports: AuditorReport[],
  screenshotPaths: ScreenshotManifest[],
  htmlPath: string,
): string {
  const reportSections = reports
    .filter((r) => r.success)
    .map((r) => `### Auditor ${r.auditorId}: ${r.focusArea}\n\n${r.reportText}`)
    .join('\n\n---\n\n');

  const screenshotSection = screenshotPaths
    .map((s) => `- ${s.viewport.label} (${s.viewport.width}x${s.viewport.height}): ${s.path}`)
    .join('\n');

  return `You are PA Auditor I: Cross-cutting Synthesis (Integrative).

## Your Task

You have received reports from ${reports.filter((r) => r.success).length} independent auditors. Your job is to:
1. Read the screenshots for your own experiential anchor
2. Identify CROSS-CUTTING patterns that span multiple auditors' domains
3. Find contradictions between auditors
4. Identify issues that fell between the cracks (no auditor's primary domain)
5. Synthesize a unified severity ranking

## Screenshots

Read these screenshot files using the Read tool:
${screenshotSection}

## Auditor Reports

${reportSections}

## HTML Artifact Path

${htmlPath}

## Output Format

# Auditor I: Cross-cutting Synthesis

## Cross-cutting Patterns
[Issues that appear across 3+ auditor domains]

## Contradictions
[Where auditors disagree, and your resolution]

## Gap Analysis
[Issues not covered by any auditor's primary focus]

## Convergence Map
[Which findings have highest auditor agreement — these are most reliable]

## Unified Severity Ranking
[Top 10 issues ranked by severity, with auditor source references]
`;
}

/**
 * Spawn all PA auditors: 8 parallel (A-H) + 1 sequential (I-integrative).
 *
 * @param screenshotPaths - Screenshot manifests from capture step
 * @param htmlPath - Path to the HTML artifact
 * @param guardrailsPath - Path to guardrails/gate reference document
 * @param outputDir - Directory to save auditor reports
 * @param config - Pipeline configuration
 * @returns Array of all auditor reports (A-I)
 */
export async function spawnAuditors(
  screenshotPaths: ScreenshotManifest[],
  htmlPath: string,
  guardrailsPath: string,
  outputDir: string,
  config: PipelineConfig,
): Promise<AuditorReport[]> {
  const paDir = path.join(outputDir, '_pa');
  ensureDir(paDir);

  // Phase 1: Spawn A-H in parallel
  console.log('[pa] Spawning 8 parallel auditors (A-H)...');

  const parallelResults = await Promise.allSettled(
    PARALLEL_AUDITORS.map(async (auditorId): Promise<AuditorReport> => {
      const prompt = buildAuditorPrompt(auditorId, screenshotPaths, htmlPath, guardrailsPath);
      const reportPath = path.join(paDir, `auditor-${auditorId.toLowerCase()}.md`);

      const response = await spawnClaude({
        role: 'pa-auditor',
        prompt,
        workspaceDir: config.workspaceDir,
        additionalDirs: [outputDir, path.dirname(htmlPath)],
      });

      const reportText = response.result;
      fs.writeFileSync(reportPath, reportText, 'utf-8');

      return {
        auditorId,
        focusArea: AUDITOR_FOCUS[auditorId],
        reportText,
        questionsAnswered: getQuestionsForAuditor(auditorId),
        reportPath,
        success: true,
        cost: response.total_cost_usd,
        inputTokens: response.usage?.input_tokens ?? 0,
        outputTokens: response.usage?.output_tokens ?? 0,
      };
    }),
  );

  // Collect results, handling partial failures
  const reports: AuditorReport[] = [];
  let failCount = 0;

  for (let i = 0; i < parallelResults.length; i++) {
    const result = parallelResults[i];
    const auditorId = PARALLEL_AUDITORS[i];

    if (result.status === 'fulfilled') {
      reports.push(result.value);
    } else {
      failCount++;
      const errorMsg = result.reason instanceof Error ? result.reason.message : String(result.reason);
      console.error(`[pa] Auditor ${auditorId} failed: ${errorMsg}`);

      reports.push({
        auditorId,
        focusArea: AUDITOR_FOCUS[auditorId],
        reportText: '',
        questionsAnswered: [],
        reportPath: path.join(paDir, `auditor-${auditorId.toLowerCase()}.md`),
        success: false,
        cost: 0,
        error: errorMsg,
      });
    }
  }

  const successCount = PARALLEL_AUDITORS.length - failCount;

  // Validate that "successful" reports have substantive content.
  // An auditor that returns empty or trivially short output is effectively a failure.
  const MIN_REPORT_LENGTH = 100;
  let substantiveCount = 0;
  for (const report of reports) {
    if (report.success && report.reportText.trim().length >= MIN_REPORT_LENGTH) {
      substantiveCount++;
    } else if (report.success && report.reportText.trim().length < MIN_REPORT_LENGTH) {
      console.error(`[pa] Auditor ${report.auditorId} returned only ${report.reportText.trim().length} chars — marking as low-quality`);
    }
  }

  console.log(`[pa] A-H complete: ${successCount}/8 succeeded, ${failCount}/8 failed, ${substantiveCount}/8 substantive`);

  if (substantiveCount === 0) {
    throw new Error('[pa] All 8 parallel auditors (A-H) failed or returned empty reports. Cannot proceed to weaver with zero substantive reports.');
  }

  if (substantiveCount < MIN_SUCCESSFUL_AUDITORS) {
    console.error(`[pa] WARNING: Only ${substantiveCount} substantive auditors (minimum ${MIN_SUCCESSFUL_AUDITORS}). Weaver will receive partial data.`);
  }

  // Phase 2: Spawn integrative auditor (I) sequentially — reads A-H reports
  console.log('[pa] Spawning integrative auditor (I)...');

  const integrativePrompt = buildIntegrativePrompt(reports, screenshotPaths, htmlPath);
  const integrativeReportPath = path.join(paDir, 'auditor-i.md');

  try {
    const intResponse = await spawnClaude({
      role: 'integrative-auditor',
      prompt: integrativePrompt,
      workspaceDir: config.workspaceDir,
      additionalDirs: [outputDir, path.dirname(htmlPath)],
    });

    const intReportText = intResponse.result;
    fs.writeFileSync(integrativeReportPath, intReportText, 'utf-8');

    reports.push({
      auditorId: 'I',
      focusArea: AUDITOR_FOCUS.I,
      reportText: intReportText,
      questionsAnswered: [],
      reportPath: integrativeReportPath,
      success: true,
      cost: intResponse.total_cost_usd,
      inputTokens: intResponse.usage?.input_tokens ?? 0,
      outputTokens: intResponse.usage?.output_tokens ?? 0,
    });
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error(`[pa] Integrative auditor (I) failed: ${errorMsg}`);

    reports.push({
      auditorId: 'I',
      focusArea: AUDITOR_FOCUS.I,
      reportText: '',
      questionsAnswered: [],
      reportPath: integrativeReportPath,
      success: false,
      cost: 0,
      error: errorMsg,
    });
  }

  return reports;
}
