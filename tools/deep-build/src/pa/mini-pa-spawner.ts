/**
 * Mini-PA spawner.
 * Lightweight directional signal between refinement passes.
 * Uses 3 auditors (A, C, G) at 1 viewport (desktop) — ~$5 vs ~$25 for full PA.
 */

import fs from 'node:fs';
import path from 'node:path';
import type { AuditorId, AuditorReport, MiniPAResult, ScreenshotManifest } from '../types/pa.js';
import type { PipelineConfig } from '../types/pipeline.js';
import { spawnClaude } from '../agents/claude-cli.js';
import { AUDITOR_FOCUS, getQuestionsForAuditor } from '../config/pa-questions.js';
import { MINI_PA_AUDITORS } from '../config/constants.js';
import { ensureDir, readFileChecked } from '../utils.js';
import { ValidationError } from '../types/errors.js';

/**
 * Build the mini-PA auditor prompt (same structure as full PA, but shorter).
 */
function buildMiniAuditorPrompt(
  auditorId: AuditorId,
  screenshotPath: ScreenshotManifest,
  htmlPath: string,
  guardrailsPath: string,
): string {
  const focus = AUDITOR_FOCUS[auditorId];
  const questions = getQuestionsForAuditor(auditorId);
  const html = readFileChecked(htmlPath);
  const guardrails = readFileChecked(guardrailsPath);

  return `You are Mini-PA Auditor ${auditorId}: ${focus}.

## Context

This is a MINI perceptual audit — a quick directional check between refinement passes. Focus on the most critical issues only.

## Screenshot

Read this screenshot file using the Read tool:
- ${screenshotPath.viewport.label} (${screenshotPath.viewport.width}x${screenshotPath.viewport.height}): ${screenshotPath.path}

## Assigned Questions

Answer these questions concisely:
${questions.map((q) => `- ${q}`).join('\n')}

## Guardrails Reference

<guardrails>
${guardrails}
</guardrails>

## HTML Artifact

<html-artifact>
${html}
</html-artifact>

## Output Format

Write a concise report (~500 words). Focus on:
1. Most critical issue found
2. Whether the page is improving, stable, or regressing compared to what you'd expect
3. One sentence per assigned question

# Auditor ${auditorId}: ${focus} (Mini-PA)
`;
}

/**
 * Determine trend from mini-PA report texts.
 * Looks for sentiment keywords indicating improvement, stability, or regression.
 */
function determineTrend(reports: AuditorReport[]): 'improving' | 'stable' | 'regressing' {
  const successfulReports = reports.filter((r) => r.success);
  if (successfulReports.length === 0) return 'stable';

  const allText = successfulReports.map((r) => r.reportText.toLowerCase()).join(' ');

  const improvingSignals = ['improv', 'better', 'progress', 'resolved', 'fixed', 'enhanced'];
  const regressingSignals = ['regress', 'worse', 'degraded', 'broken', 'lost', 'missing'];

  let improvingCount = 0;
  let regressingCount = 0;

  for (const signal of improvingSignals) {
    const matches = allText.match(new RegExp(signal, 'g'));
    if (matches) improvingCount += matches.length;
  }

  for (const signal of regressingSignals) {
    const matches = allText.match(new RegExp(signal, 'g'));
    if (matches) regressingCount += matches.length;
  }

  if (improvingCount > regressingCount * 1.5) return 'improving';
  if (regressingCount > improvingCount * 1.5) return 'regressing';
  return 'stable';
}

/**
 * Spawn a mini-PA: 3 auditors, 1 viewport, quick directional signal.
 *
 * @param screenshotPaths - Screenshot manifests (only desktop used)
 * @param htmlPath - Path to the HTML artifact
 * @param guardrailsPath - Path to guardrails document
 * @param outputDir - Directory to save mini-PA reports
 * @param config - Pipeline configuration
 * @returns MiniPAResult with trend signal
 */
export async function spawnMiniPA(
  screenshotPaths: ScreenshotManifest[],
  htmlPath: string,
  guardrailsPath: string,
  outputDir: string,
  config: PipelineConfig,
): Promise<MiniPAResult> {
  const miniPaDir = path.join(outputDir, '_mini-pa');
  ensureDir(miniPaDir);

  // Use only the desktop screenshot
  const desktopScreenshot = screenshotPaths.find((s) => s.viewport.label === 'desktop');
  if (!desktopScreenshot) {
    throw new ValidationError('Mini-PA requires a desktop viewport screenshot');
  }

  console.log(`[mini-pa] Spawning ${MINI_PA_AUDITORS.length} auditors (${MINI_PA_AUDITORS.join(', ')})...`);

  const auditorIds = [...MINI_PA_AUDITORS] as AuditorId[];

  // Include screenshot directory so auditors can read screenshot files
  const screenshotDir = path.dirname(desktopScreenshot.path);
  const additionalDirs = [...new Set([outputDir, path.dirname(htmlPath), screenshotDir])];

  const results = await Promise.allSettled(
    auditorIds.map(async (auditorId): Promise<AuditorReport> => {
      const prompt = buildMiniAuditorPrompt(auditorId, desktopScreenshot, htmlPath, guardrailsPath);
      const reportPath = path.join(miniPaDir, `mini-auditor-${auditorId.toLowerCase()}.md`);

      const response = await spawnClaude({
        role: 'pa-auditor',
        prompt,
        workspaceDir: config.workspaceDir,
        additionalDirs,
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
      };
    }),
  );

  const reports: AuditorReport[] = [];
  let totalCost = 0;

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const auditorId = auditorIds[i];

    if (result.status === 'fulfilled') {
      reports.push(result.value);
      totalCost += result.value.cost;
    } else {
      const errorMsg = result.reason instanceof Error ? result.reason.message : String(result.reason);
      console.error(`[mini-pa] Auditor ${auditorId} failed: ${errorMsg}`);

      reports.push({
        auditorId,
        focusArea: AUDITOR_FOCUS[auditorId],
        reportText: '',
        questionsAnswered: [],
        reportPath: path.join(miniPaDir, `mini-auditor-${auditorId.toLowerCase()}.md`),
        success: false,
        cost: 0,
        error: errorMsg,
      });
    }
  }

  const trend = determineTrend(reports);
  console.log(`[mini-pa] Complete. Trend: ${trend}. Cost: $${totalCost.toFixed(2)}`);

  return {
    auditorIds,
    reports,
    trend,
    cost: totalCost,
  };
}
