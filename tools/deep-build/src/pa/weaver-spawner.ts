/**
 * PA weaver spawner.
 * Single claude -p call that synthesizes all auditor reports into a WeaverVerdict.
 * The weaver sees: screenshots, auditor reports, conviction brief, builder reflection,
 * gate results, and the HTML artifact.
 */

import fs from 'node:fs';
import path from 'node:path';
import type { AuditorReport, GateVerdict, ScreenshotManifest } from '../types/pa.js';
import type { WeaverVerdict } from '../types/state.js';
import type { PipelineConfig } from '../types/pipeline.js';
import { spawnClaude } from '../agents/claude-cli.js';
import { ensureDir, readFileChecked } from '../utils.js';

/**
 * Build the weaver prompt.
 */
function buildWeaverPrompt(
  auditorReports: AuditorReport[],
  gateResults: GateVerdict,
  screenshotPaths: ScreenshotManifest[],
  convictionBrief: string,
  builderReflection: string,
  htmlPath: string,
): string {
  const screenshotSection = screenshotPaths
    .map((s) => `- ${s.viewport.label} (${s.viewport.width}x${s.viewport.height}): ${s.path}`)
    .join('\n');

  const successfulReports = auditorReports.filter((r) => r.success);
  const failedReports = auditorReports.filter((r) => !r.success);

  const reportSections = successfulReports
    .map((r) => `### Auditor ${r.auditorId}: ${r.focusArea}\n\n${r.reportText}`)
    .join('\n\n---\n\n');

  const gateSection = gateResults.gates
    .map((g) => `- ${g.gateId} [${g.tier}]: ${g.passed ? 'PASS' : 'FAIL'} — ${g.description}${g.message ? ` (${g.message})` : ''}`)
    .join('\n');

  return `You are the PA Weaver — the final synthesizer of the Perceptual Audit.

## Your Task

Synthesize all auditor reports, gate results, and your own experiential reading into a single WeaverVerdict. You are the ONLY agent who sees everything: screenshots, all auditor reports, the conviction brief, the builder's reflection, and the gate results.

## IMPORTANT: Experiential Anchor

Read these screenshots FIRST. Look at them carefully before reading any reports. Your own perception matters.

${screenshotSection}

## Auditor Reports (${successfulReports.length}/${auditorReports.length} succeeded)

${failedReports.length > 0 ? `**WARNING:** ${failedReports.length} auditor(s) failed: ${failedReports.map((r) => r.auditorId).join(', ')}. Your synthesis must account for missing coverage.\n\n` : ''}
${reportSections}

## Gate Results

Required gates: ${gateResults.passedCount} passed, ${gateResults.failedCount} failed
All required gates passed: ${gateResults.allRequiredPassed ? 'YES' : 'NO'}

${gateSection}

## Conviction Brief

<conviction-brief>
${convictionBrief}
</conviction-brief>

## Builder Reflection

<builder-reflection>
${builderReflection}
</builder-reflection>

## HTML Artifact

Read the HTML file at: ${htmlPath}

## Output Requirements

After your analysis, you MUST output a JSON block with the WeaverVerdict. Wrap it in triple backticks with json language tag:

\`\`\`json
{
  "pa05Score": <number 0.0-5.0>,
  "tier5": <number 0-8>,
  "top5Fixes": [
    {
      "rank": 1,
      "category": "MECHANICAL|STRUCTURAL|COMPOSITIONAL",
      "description": "...",
      "auditorSources": ["A", "C"],
      "convergenceCount": 2
    }
  ],
  "emotionalArc": {
    "authority": <0.0-1.0>,
    "closure": <0.0-1.0>,
    "surprise": <0.0-1.0>,
    "delight": <0.0-1.0>
  },
  "soulViolations": [],
  "verdict": "SHIP|REFINE|RETHINK",
  "mode": "FLOOR|COMPOSED|DESIGNED|CEILING|FLAGSHIP",
  "narrativeSummary": "..."
}
\`\`\`

## Scoring Guidance

- **pa05Score**: Overall perceptual quality 0-5. Consider: Does this feel designed or generated? Does the composition breathe? Is there intentional rhythm?
- **tier5**: How many of the 8 Tier 5 (Flagship) questions would this page satisfy? Most pages score 0-3.
- **top5Fixes**: The 5 highest-impact improvements, ranked by convergence across auditors. Category meanings:
  - MECHANICAL: Can be fixed by CSS/HTML edit without design thinking
  - STRUCTURAL: Requires rethinking layout or component architecture
  - COMPOSITIONAL: Requires rethinking the overall design approach
- **emotionalArc**: Rate each dimension 0-1 based on your experiential reading
- **soulViolations**: List specific soul/identity violations (empty array if none)
- **verdict**: SHIP (ready), REFINE (fixable issues), RETHINK (fundamental problems)
- **mode**: Classify the artifact's achieved quality tier

## Write Your Analysis

Start with your own experiential reading of the screenshots, then synthesize the auditor reports. End with the JSON block.
`;
}

/**
 * Extract WeaverVerdict JSON from the weaver's response text.
 * Looks for a ```json block containing the verdict structure.
 */
function parseWeaverVerdict(responseText: string): WeaverVerdict {
  // Match ```json ... ``` blocks
  const jsonBlockRegex = /```json\s*\n([\s\S]*?)\n\s*```/g;
  let match;
  const candidates: string[] = [];

  while ((match = jsonBlockRegex.exec(responseText)) !== null) {
    candidates.push(match[1]);
  }

  if (candidates.length === 0) {
    throw new Error('Weaver response does not contain a ```json block with WeaverVerdict');
  }

  const required = ['pa05Score', 'tier5', 'top5Fixes', 'emotionalArc', 'soulViolations', 'verdict', 'mode', 'narrativeSummary'];

  // Search candidates from last to first — prefer the final one, but validate
  // it actually contains WeaverVerdict fields (skip non-verdict JSON blocks).
  for (let i = candidates.length - 1; i >= 0; i--) {
    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(candidates[i]);
    } catch {
      continue; // Malformed JSON, try next candidate
    }

    // Check if this looks like a WeaverVerdict (has at least 'verdict' and 'pa05Score')
    if ('verdict' in parsed && 'pa05Score' in parsed) {
      // Validate all required fields
      const missing = required.filter(f => !(f in parsed));
      if (missing.length > 0) {
        throw new Error(`WeaverVerdict missing required field(s): ${missing.join(', ')}`);
      }
      return parsed as unknown as WeaverVerdict;
    }
  }

  // Fallback: no candidate had verdict+pa05Score — try the last block anyway
  // and give a clear error about what's missing
  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(candidates[candidates.length - 1]);
  } catch (err) {
    throw new Error(`Failed to parse WeaverVerdict JSON from ${candidates.length} candidate(s): ${err instanceof Error ? err.message : String(err)}`);
  }

  const missing = required.filter(f => !(f in parsed));
  if (missing.length > 0) {
    throw new Error(`WeaverVerdict missing required field(s): ${missing.join(', ')}. Found keys: ${Object.keys(parsed).join(', ')}`);
  }

  return parsed as unknown as WeaverVerdict;
}

/**
 * Spawn the PA weaver and return a WeaverVerdict.
 *
 * @param auditorReports - All auditor reports (A-I)
 * @param gateResults - Programmatic gate verdict
 * @param screenshotPaths - Screenshot manifests
 * @param convictionBrief - The conviction layer brief text
 * @param builderReflection - The builder's self-reflection text
 * @param htmlPath - Path to the HTML artifact
 * @param outputDir - Directory to save weaver output
 * @param config - Pipeline configuration
 * @returns WeaverVerdict with routing decision
 */
export interface WeaverResult {
  verdict: WeaverVerdict;
  cost: number;
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
}

export async function spawnWeaver(
  auditorReports: AuditorReport[],
  gateResults: GateVerdict,
  screenshotPaths: ScreenshotManifest[],
  convictionBrief: string,
  builderReflection: string,
  htmlPath: string,
  outputDir: string,
  config: PipelineConfig,
): Promise<WeaverResult> {
  const paDir = path.join(outputDir, '_pa');
  ensureDir(paDir);

  const prompt = buildWeaverPrompt(
    auditorReports,
    gateResults,
    screenshotPaths,
    convictionBrief,
    builderReflection,
    htmlPath,
  );

  console.log('[pa] Spawning weaver (max-turns 40)...');

  const response = await spawnClaude({
    role: 'weaver',
    prompt,
    workspaceDir: config.workspaceDir,
    additionalDirs: [outputDir, path.dirname(htmlPath)],
  });

  const reportText = response.result;
  const weaverReportPath = path.join(paDir, 'weaver-synthesis.md');
  fs.writeFileSync(weaverReportPath, reportText, 'utf-8');

  console.log('[pa] Weaver report saved. Parsing verdict...');

  const verdict = parseWeaverVerdict(reportText);

  // Log verdict summary
  console.log(
    `[pa] Weaver verdict: ${verdict.verdict} | PA-05: ${verdict.pa05Score} | ` +
    `Tier5: ${verdict.tier5}/8 | Mode: ${verdict.mode} | ` +
    `Soul violations: ${verdict.soulViolations.length}`,
  );

  return {
    verdict,
    cost: response.total_cost_usd,
    inputTokens: response.usage.input_tokens,
    outputTokens: response.usage.output_tokens,
    cacheReadTokens: response.usage.cache_read_tokens ?? 0,
    cacheWriteTokens: response.usage.cache_write_tokens ?? 0,
  };
}
