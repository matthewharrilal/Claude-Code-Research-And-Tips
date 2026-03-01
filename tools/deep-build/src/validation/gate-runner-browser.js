// Gate Runner Core — Executable Playwright JavaScript
// Pipeline v4 Programmatic Verification
// Date: 2026-02-26
// Authority: Council Verdict (2026-02-23), Pipeline v4 (2026-02-25), D2 Crack Gates (2026-02-26)
//
// ARCHITECTURE: 4 phase functions + unified wrapper
//   runBriefVerification(briefText)         — Phase 1: Text parsing (BV-01 through BV-07)
//   runPhase3Gates(page)                    — Phase 3A: All Playwright DOM gates (GR-01 through GR-66)
//   checkBriefOutputDiff(briefText, htmlText) — Phase 3A (text-only): Brief-output diff (BV-08)
//   verifyIntentComments(htmlText)          — Phase 3A (text-only): INTENT comment count (GR-83)
//   runPostWeaverGates(reports, weaver)     — Phase 3C: Post-weaver verification (GR-64, GR-81)
//   runMetaGates(allResults)                — Meta: Coverage + integrity (GR-48, GR-49) — AUTOMATIC, no opt-out
//   runAllGates(page, briefText)            — Unified wrapper: calls all 4 phases sequentially, returns unified JSON
//
// ALSO EXPORTED (pre/post-screenshot, called by orchestrator separately):
//   captureScreenshots(page, htmlUrl, dir)  — DPR-safe screenshot capture (Section 8) — REPLACES manual scroll-and-capture
//     Three strategies with automatic fallback:
//       A: browser.newContext({ deviceScaleFactor: 1 }) — best quality, requires browser() access
//       B: CDP Emulation.setDeviceMetricsOverride — works when browser() returns null (common in Playwright MCP)
//       C: Element-level screenshots — last resort, always works regardless of DPR
//     Also: _captureViewport() (Strategy A helper), _captureElements() (element fallback helper)
//   checkDPR(page)                          — Pre-screenshot DPR validation (GR-61) — informational when using captureScreenshots
//   checkScreenshotQuality(screenshotDir)   — Post-screenshot blank/quality check (GR-62)
//   checkVisibleContent(screenshotDir)       — Post-screenshot visible content check (A-03)
//   parseIntentComments(html)               — Utility: parse INTENT comments from HTML
//
// Every gate result includes: { gateId, tier, status, details, source: 'code' }
//
// Total: 57 gates (see gate-manifest.json for canonical counts)
//   REQUIRED (22): GR-01–GR-06, GR-08–GR-11, GR-13–GR-15, GR-18, GR-44, GR-60, GR-61, GR-62, GR-63, GR-64, GR-48, GR-79
//   RECOMMENDED (15): GR-07, GR-17, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52, GR-55, GR-67, GR-78, GR-80, GR-82, GR-83, GR-84
//   ADVISORY (9): GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53, GR-66, GR-81
//   BRIEF VERIFICATION (8): BV-01–BV-08
//   In-file executable: 46 GR + 8 BV + 1 utility (A-03) = 55
// Plus Diagnostic (2): GR-33, GR-34 (report-only, no code in this file)
// Note: GR-12 absorbed into GR-18 (Wave 0). GR-61/62/63/64 added (Wave 4). GR-55/66/67 added (Pipeline v4).
// Note: BV-06 (Anti-Regression Language Scan) added (Convergence reframe). Scans spec files, not brief.
// Note: BV-08 (Brief-Output Diff) + GR-83 (INTENT Comment Count) added (D2 crack gates, 2026-02-26).
// Note: GR-18 promoted RECOMMENDED->REQUIRED (SIG-05). GR-55 promoted ADVISORY->RECOMMENDED + perceptibility thresholds (SIG-11).
// Note: GR-84 (IMPROVEMENTS Comment) added RECOMMENDED (SIG-01). GR-48 extended with BV coverage check (SIG-03).

// =============================================================================
// SECTION 1: BRIEF VERIFICATION GATES (BV-01 through BV-07) — Text Parsing
// Runs AFTER brief assembly, BEFORE builder execution
// Input: briefText (string) — the assembled activation brief
// Output: array of gate results
// =============================================================================

function runBriefVerification(briefText) {
  const results = [];
  const lines = briefText.split('\n');

  // BV-01: Tier Line Budget
  const tierHeaders = {
    'T1': { pattern: /^#+\s*Tier\s*1/im, min: 12 },
    'T2': { pattern: /^#+\s*Tier\s*2/im, min: 6 },
    'T3': { pattern: /^#+\s*Tier\s*3/im, min: 40 },
    'T4': { pattern: /^#+\s*Tier\s*4/im, min: 32 },
    'ContentMap': { pattern: /^#+\s*Content\s*Map/im, min: 24 }
  };
  const tierCounts = {};
  let currentTier = null;
  let currentCount = 0;
  for (const line of lines) {
    for (const [tier, config] of Object.entries(tierHeaders)) {
      if (config.pattern.test(line)) {
        if (currentTier) tierCounts[currentTier] = currentCount;
        currentTier = tier;
        currentCount = 0;
        break;
      }
    }
    if (currentTier && line.trim()) currentCount++;
  }
  if (currentTier) tierCounts[currentTier] = currentCount;

  const budgetFailures = Object.entries(tierHeaders).filter(([tier, config]) => {
    const count = tierCounts[tier] || 0;
    return count < config.min * 0.8; // 80% of budget threshold
  }).map(([tier, config]) => ({ tier, actual: tierCounts[tier] || 0, min: config.min }));

  results.push({
    gate: 'BV-01', name: 'Tier Line Budget',
    status: budgetFailures.length === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { tierCounts, budgetFailures },
    threshold: tierHeaders,
    details: { T1Lines: tierCounts['T1'] || 0, T2Lines: tierCounts['T2'] || 0, T3Lines: tierCounts['T3'] || 0, T4Lines: tierCounts['T4'] || 0, ContentMapLines: tierCounts['ContentMap'] || 0 }
  });

  // BV-02: Background Delta Verification
  // Scope: Only check hex values within a "Zone Backgrounds" section of the brief
  // to avoid false positives from border colors, accent colors, or code examples.
  const bgSectionMatch = briefText.match(/(?:Zone\s*Backgrounds?|Background\s*(?:Colors?|Hex)|Backgrounds?\s*per\s*Zone)([\s\S]*?)(?=^#+\s|\n---|\n\*\*[A-Z]|$)/im);
  if (!bgSectionMatch) {
    results.push({
      gate: 'BV-02', name: 'Background Delta Verification',
      status: 'FAIL',
      source: 'code',
      measured: { scopedToSection: false },
      threshold: { minDelta: 15 },
      details: { sectionFound: false, hexPairsChecked: 0, failures: [] },
      note: "Brief must contain a 'Zone Backgrounds' section for hex delta verification. No such section found."
    });
  } else {
  const bgSectionText = bgSectionMatch[0];
  const hexPattern = /#([0-9a-fA-F]{6})/g;
  const hexValues = [...bgSectionText.matchAll(hexPattern)].map(m => m[1]);
  const rgbFromHex = (hex) => ({
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  });
  const bgDeltaFailures = [];
  for (let i = 0; i < hexValues.length - 1; i++) {
    const a = rgbFromHex(hexValues[i]);
    const b = rgbFromHex(hexValues[i + 1]);
    const delta = Math.max(Math.abs(a.r - b.r), Math.abs(a.g - b.g), Math.abs(a.b - b.b));
    if (delta > 0 && delta < 15) {
      bgDeltaFailures.push({ hex1: '#' + hexValues[i], hex2: '#' + hexValues[i + 1], delta });
    }
  }
  results.push({
    gate: 'BV-02', name: 'Background Delta Verification',
    status: bgDeltaFailures.length === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { totalHexPairs: hexValues.length, failures: bgDeltaFailures, scopedToSection: true },
    threshold: { minDelta: 15 },
    details: { sectionFound: true, hexPairsChecked: hexValues.length, failedPairs: bgDeltaFailures.length, hexValues: hexValues.map(h => '#' + h) },
    note: 'Scoped to Zone Backgrounds section'
  });
  } // end else (bgSectionMatch found)

  // BV-03: Recipe Format Verification
  const recipeVerbs = (briefText.match(/\b(Build|Create|Derive|Map|Read|Select|Deploy|Assess)\b/g) || []).length;
  const checklistVerbs = (briefText.match(/\b(Verify|Fail if|Must be|Ensure|Check that)\b/gi) || []).length;
  const ratio = checklistVerbs > 0 ? recipeVerbs / checklistVerbs : recipeVerbs > 0 ? Infinity : 0;
  results.push({
    gate: 'BV-03', name: 'Recipe Format Verification',
    status: ratio >= 3 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { recipeVerbs, checklistVerbs, ratio: ratio === Infinity ? 'Infinity' : ratio.toFixed(1) },
    threshold: { minRatio: '3:1' },
    details: { recipeVerbCount: recipeVerbs, checklistVerbCount: checklistVerbs, computedRatio: ratio === Infinity ? 'Infinity' : ratio.toFixed(1) }
  });

  // BV-04: Suppressor Scan
  const suppressorPatterns = [
    { name: 'S-01 sample range', pattern: /sample\s+\d+-\d+/i },
    { name: 'S-02 raw prohibition', pattern: /must\s+not|shall\s+not|never\s+use/i },
    { name: 'S-11 compliance voice', pattern: /verify\s+that|fail\s+if|must\s+be/i },
    { name: 'S-08 count-gate', pattern: />=?\s*\d+\s+channels?/i }
  ];
  const suppressorsFound = suppressorPatterns.filter(sp => sp.pattern.test(briefText));
  results.push({
    gate: 'BV-04', name: 'Suppressor Scan',
    status: suppressorsFound.length === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { suppressorsFound: suppressorsFound.map(s => s.name) },
    threshold: { maxSuppressors: 0 },
    details: { suppressorCount: suppressorsFound.length, suppressorNames: suppressorsFound.map(s => s.name) }
  });

  // BV-05: Recipe Keyword Scan
  // Checks that brief contains keywords from each recipe disposition (D-01 through D-09),
  // hover vocabulary, and compression ratio.
  // Keywords derived from artifact-builder-recipe.md Phase 4 disposition definitions.
  const dispositionKeywords = {
    'D-01': ['register', 'narrative', 'reference', 'content-register', 'code section'],
    'D-02': ['room', 'boundary', 'rgb', 'room perception', 'zone transition'],
    'D-03': ['signing', 'authority', 'restraint', 'signing frame', 'border-weight hierarchy'],
    'D-04': ['surprise', 'second-half', 'inversion', 'scale break', 'rupture'],
    'D-05': ['scroll', 'rhythm', 'journey', 'pacing', 'reader\'s scroll', 'measure length'],
    'D-06': ['whitespace', 'negative space', 'gap', 'breathing', 'space as shape'],
    'D-07': ['hover', 'edge', 'delight', 'intentionality', '::selection', 'tabular-nums'],
    'D-08': ['skeleton', 'skeleton test', 'shape', 'strip content'],
    'D-09': ['quiet zone', 'quiet', 'rest', 'plain', 'fewer mechanisms', 'breathing pause']
  };
  const missingDispositions = [];
  for (const [disp, keywords] of Object.entries(dispositionKeywords)) {
    const found = keywords.some(kw => briefText.toLowerCase().includes(kw.toLowerCase()));
    if (!found) missingDispositions.push(disp);
  }
  const hoverTerms = ['hover', 'interactive', ':hover'];
  const hasHover = hoverTerms.some(t => briefText.toLowerCase().includes(t.toLowerCase()));
  const tier3Match = briefText.match(/^#+\s*Tier\s*3/im);
  let compressionRatio = 0;
  let compressionStatus = 'PASS';
  if (tier3Match) {
    const tier3Start = briefText.indexOf(tier3Match[0]);
    const tier3Text = briefText.substring(tier3Start);
    const tier3Lines = tier3Text.split('\n').filter(l => l.trim()).length;
    // totalBriefLines: non-empty lines in the full brief (not the recipe source)
    // compressionRatio = totalBriefLines / tier3Lines — flags if Tier 3 is <2% of brief
    const totalBriefLines = lines.filter(l => l.trim()).length;
    compressionRatio = tier3Lines > 0 ? totalBriefLines / tier3Lines : 0;
    if (compressionRatio > 50) compressionStatus = 'BLOCKING';
    else if (compressionRatio > 30) compressionStatus = 'WARNING';
  }
  const bv05Pass = missingDispositions.length === 0 && compressionStatus !== 'BLOCKING';
  results.push({
    gate: 'BV-05', name: 'Recipe Keyword Scan',
    status: bv05Pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { missingDispositions, hasHover, compressionRatio: compressionRatio.toFixed(1), compressionStatus },
    threshold: { allDispositionsPresent: true, maxCompressionRatio: 50 },
    details: { dispositionsChecked: 9, dispositionsMissing: missingDispositions.length, hoverPresent: hasHover, compressionRatio: compressionRatio.toFixed(1) },
    note: !hasHover ? 'WARNING: hover vocabulary missing from brief' : undefined
  });

  return results;
}

// =============================================================================
// SECTION 1B: BV-06 ANTI-REGRESSION LANGUAGE SCAN — Pipeline Startup
// Runs BEFORE Phase 0 (at pipeline startup) against spec files, NOT the brief.
// Input: manifestText (MANIFEST.md), orchestratorText (artifact-orchestrator.md)
// Output: single gate result. FAIL = pipeline has regressed, cannot proceed.
// =============================================================================

function checkAntiRegressionLanguage(manifestText, orchestratorText) {
  const results = [];
  const forbiddenPhrases = [
    { pattern: /pipeline\s+terminates/i, fix: 'FIX-01', severity: 'P0', reason: 'Converts IMPROVE from action verb to terminal label' },
    { pattern: /single[- ]pass\s*[=(:]?\s*default|default[:\s]+single[- ]pass/i, fix: 'FIX-03/09', severity: 'P0', reason: 'Labels pipeline as non-iterative' },
    { pattern: /no\s+feedback\s+loops?/i, fix: 'FIX-04', severity: 'P1', reason: 'Contradicts IMPROVE loop' },
    { pattern: /output\s+labels?/i, fix: 'FIX-05', severity: 'P0', reason: 'Redefines IMPROVE from verb to noun' },
    { pattern: /cannot\s+fix\s+your\s+way/i, fix: 'FIX-16', severity: 'P2', reason: 'Generalizes anti-fix to anti-iteration' },
    { pattern: /not\s+part\s+of\s+a\s+build/i, fix: 'FIX-28', severity: 'P2', reason: 'Experiment framing excludes operational IMPROVE' },
    { pattern: /no\s+automatic\s+re-execution/i, fix: 'FIX-01/09', severity: 'P0', reason: 'Reinforces single-pass framing' }
  ];

  const violations = [];
  const sources = [
    { name: 'MANIFEST.md', text: manifestText },
    { name: 'artifact-orchestrator.md', text: orchestratorText }
  ];

  for (const source of sources) {
    if (!source.text) continue;
    for (const phrase of forbiddenPhrases) {
      const matches = source.text.match(new RegExp(phrase.pattern, 'gi'));
      if (matches) {
        violations.push({
          file: source.name,
          fix: phrase.fix,
          severity: phrase.severity,
          reason: phrase.reason,
          matchCount: matches.length,
          sample: matches[0].substring(0, 60)
        });
      }
    }
  }

  results.push({
    gate: 'BV-06', name: 'Anti-Regression Language Scan',
    status: violations.length === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { violationCount: violations.length, violations },
    threshold: { maxViolations: 0, forbiddenPhraseCount: forbiddenPhrases.length },
    details: {
      filesScanned: sources.filter(s => s.text).length,
      phrasesChecked: forbiddenPhrases.length,
      p0Violations: violations.filter(v => v.severity === 'P0').length,
      p1Violations: violations.filter(v => v.severity === 'P1').length,
      p2Violations: violations.filter(v => v.severity === 'P2').length
    }
  });

  return results;
}

// =============================================================================
// SECTION 2: CORE GATE RUNNER (GR-01 through GR-15, GR-43, GR-44)
// Execute via: orchestrator Playwright session against served HTML at 1440px viewport
// Prerequisites: page served via HTTP, document.fonts.ready awaited
// =============================================================================

async function runGateRunner(page) {
  const results = [];

  // Wait for fonts before any checks
  await page.evaluate(() => document.fonts.ready);

  // ========== SHARED HELPER: isRenderedElement ==========
  await page.evaluate(() => {
    window.isRenderedElement = function(el) {
      const NON_RENDERED_TAGS = ['HTML', 'HEAD', 'META', 'TITLE', 'SCRIPT', 'STYLE', 'LINK', 'BR'];
      if (NON_RENDERED_TAGS.includes(el.tagName)) return false;
      const style = getComputedStyle(el);
      if (style.display === 'none') return false;
      if (style.visibility === 'hidden') return false;
      const rect = el.getBoundingClientRect();
      if (rect.height === 0 && rect.width === 0) return false;
      return true;
    };
  });

  // ========== IDENTITY GATES (GR-01 through GR-10) ==========

  // GR-01: Border Radius Zero
  const borderRadiusViolations = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const br = getComputedStyle(el).borderRadius;
      if (br && br !== '0px') {
        violations.push({ tag: el.tagName, class: el.className, value: br });
      }
    });
    return violations;
  });
  results.push({
    gate: 'GR-01', name: 'Border Radius Zero',
    status: borderRadiusViolations.length === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { violations: borderRadiusViolations.length, samples: borderRadiusViolations.slice(0, 5) },
    threshold: { borderRadius: '0px' }
  });

  // GR-02: Box Shadow None
  const boxShadowViolations = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const bs = getComputedStyle(el).boxShadow;
      if (bs && bs !== 'none') {
        violations.push({ tag: el.tagName, class: el.className, value: bs });
      }
    });
    return violations;
  });
  results.push({
    gate: 'GR-02', name: 'Box Shadow None',
    status: boxShadowViolations.length === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { violations: boxShadowViolations.length, samples: boxShadowViolations.slice(0, 5) },
    threshold: { boxShadow: 'none' }
  });

  // GR-03: Container Width 940-960px
  const containerWidth = await page.evaluate(() => {
    const candidates = [
      ...document.querySelectorAll('[class*="spine"], [class*="container"], [class*="wrapper"], main, article'),
      ...document.querySelectorAll('[style*="max-width"]')
    ];
    const widths = candidates.map(el => ({
      tag: el.tagName, class: el.className,
      maxWidth: getComputedStyle(el).maxWidth,
      computedWidth: el.getBoundingClientRect().width
    })).filter(w => {
      const mw = parseFloat(w.maxWidth);
      return !isNaN(mw) && mw >= 800 && mw <= 1200;
    });
    return widths;
  });
  const containerPass = containerWidth.some(c => {
    const mw = parseFloat(c.maxWidth);
    return mw >= 940 && mw <= 960;
  });
  results.push({
    gate: 'GR-03', name: 'Container Width 940-960px',
    status: containerPass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { containers: containerWidth },
    threshold: { minWidth: 940, maxWidth: 960 }
  });

  // GR-04: No Gradients
  const gradientViolations = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.includes('gradient')) {
        violations.push({ tag: el.tagName, class: el.className, value: bg.substring(0, 100) });
      }
    });
    return violations;
  });
  results.push({
    gate: 'GR-04', name: 'No Gradients',
    status: gradientViolations.length === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { violations: gradientViolations.length, samples: gradientViolations.slice(0, 5) },
    threshold: { gradients: 0 }
  });

  // GR-05a/GR-05b/GR-07: Unified Color Compliance (replaces separate GR-05 + GR-07)
  const colorCheck = await page.evaluate(() => {
    const visibleCold = []; // GR-05a: REQUIRED (opacity >= 0.3)
    const subPerceptualCold = []; // GR-05b: ADVISORY (opacity < 0.3)
    const pureBlack = []; // GR-07: RECOMMENDED
    const pureWhite = []; // GR-07: RECOMMENDED
    function parseRGB(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]), a: match[4] !== undefined ? parseFloat(match[4]) : 1 };
      return null;
    }
    function isCold(rgb) { return rgb && rgb.b > rgb.r + 10 && rgb.b > rgb.g + 10; }
    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const hasText = el.textContent.trim().length > 0;
      const style = getComputedStyle(el);
      ['color', 'backgroundColor', 'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'].forEach(prop => {
        const val = style[prop];
        if (!val || val === 'transparent' || val === 'rgba(0, 0, 0, 0)') return;
        const rgb = parseRGB(val);
        if (!rgb) return;
        if (rgb.r === 0 && rgb.g === 0 && rgb.b === 0 && hasText) pureBlack.push({ tag: el.tagName, prop, class: el.className });
        if (rgb.r === 255 && rgb.g === 255 && rgb.b === 255 && hasText) pureWhite.push({ tag: el.tagName, prop, class: el.className });
        if (isCold(rgb)) {
          const effectiveVisibility = rgb.a * Math.max(Math.abs(rgb.b - rgb.r), Math.abs(rgb.b - rgb.g));
          if (effectiveVisibility > 20) visibleCold.push({ tag: el.tagName, prop, class: el.className, value: val });
          else subPerceptualCold.push({ tag: el.tagName, prop, class: el.className, value: val });
        }
      });
    });
    return { visibleCold: visibleCold.length, subPerceptualCold: subPerceptualCold.length,
             pureBlack: pureBlack.length, pureWhite: pureWhite.length,
             samples: { visibleCold: visibleCold.slice(0, 3), subPerceptual: subPerceptualCold.slice(0, 3),
                        black: pureBlack.slice(0, 3), white: pureWhite.slice(0, 3) } };
  });
  results.push({
    gate: 'GR-05', name: 'Warm Palette (Visible)',
    status: colorCheck.visibleCold === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { visibleCold: colorCheck.visibleCold, samples: colorCheck.samples.visibleCold },
    threshold: { visibleColdColors: 0, opacityFloor: 0.3 }
  });
  // GR-05b: Sub-perceptual cold colors — ADVISORY only (not in REQUIRED_GATES)
  results.push({
    gate: 'GR-05b', name: 'Warm Palette (Sub-Perceptual)',
    status: colorCheck.subPerceptualCold === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { subPerceptualCold: colorCheck.subPerceptualCold, samples: colorCheck.samples.subPerceptual },
    threshold: { subPerceptualColdColors: 0, note: 'ADVISORY — sub-perceptual tints (effectiveVisibility <= 20) do not block verdict' }
  });

  // GR-06: Font Trinity (rendered font check — ME-011 fix)
  const fontCheck = await page.evaluate(async () => {
    await document.fonts.ready;
    const allowedFamilies = ['instrument serif', 'inter', 'jetbrains mono'];
    const genericFamilies = ['system-ui', '-apple-system', 'sans-serif', 'serif', 'monospace', 'ui-sans-serif', 'ui-serif', 'ui-monospace'];
    const renderedViolations = []; // REQUIRED: font actually renders as non-trinity
    const fallbackViolations = []; // ADVISORY: declared but never rendered
    const found = new Set();

    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      if (!el.textContent.trim()) return; // Skip elements with no visible text
      const ff = getComputedStyle(el).fontFamily.toLowerCase();
      const primary = ff.split(',')[0].trim().replace(/['"]/g, '');
      if (!primary) return;
      const isGeneric = genericFamilies.includes(primary);
      const isAllowed = allowedFamilies.some(f => primary.includes(f)) || isGeneric;
      allowedFamilies.forEach(f => { if (primary.includes(f)) found.add(f); });
      if (!isAllowed) {
        // Check if the declared font actually loaded/rendered
        const isRendered = document.fonts.check(`16px "${primary}"`);
        if (isRendered) {
          renderedViolations.push({ tag: el.tagName, class: el.className, font: primary, type: 'rendered' });
        } else {
          fallbackViolations.push({ tag: el.tagName, class: el.className, font: primary, type: 'fallback-only' });
        }
      }
    });
    return { renderedViolations: renderedViolations.length, fallbackViolations: fallbackViolations.length,
             found: [...found], renderedSamples: renderedViolations.slice(0, 5), fallbackSamples: fallbackViolations.slice(0, 5) };
  });
  const allThreePresent = fontCheck.found.length === 3;
  results.push({
    gate: 'GR-06', name: 'Font Trinity (Rendered)',
    status: (fontCheck.renderedViolations === 0 && allThreePresent) ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { renderedViolations: fontCheck.renderedViolations, fallbackViolations: fontCheck.fallbackViolations,
                found: fontCheck.found, renderedSamples: fontCheck.renderedSamples, fallbackSamples: fontCheck.fallbackSamples },
    threshold: { allowedFonts: ['Instrument Serif', 'Inter', 'JetBrains Mono'], allPresent: true,
                 note: 'Only fonts verified via document.fonts.check() as rendered count as REQUIRED violations. Fallback-only = ADVISORY.' }
  });

  // GR-07: No Pure Black / White (Visible Text) — evaluation done in unified GR-05 block above
  results.push({
    gate: 'GR-07', name: 'No Pure Black / White (Visible Text)',
    status: (colorCheck.pureBlack === 0 && colorCheck.pureWhite === 0) ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { pureBlack: colorCheck.pureBlack, pureWhite: colorCheck.pureWhite, samples: { black: colorCheck.samples.black, white: colorCheck.samples.white } },
    threshold: { pureBlack: 0, pureWhite: 0, scope: 'visible-text-elements-only' }
  });

  // GR-08: No Decorative Elements
  const decorativeCheck = await page.evaluate(() => {
    const decorative = [];
    document.querySelectorAll('hr').forEach(hr => {
      const prev = hr.previousElementSibling;
      const next = hr.nextElementSibling;
      const prevIsHeading = prev && /^H[1-6]$/.test(prev.tagName);
      const nextIsHeading = next && /^H[1-6]$/.test(next.tagName);
      if (!prevIsHeading && !nextIsHeading) {
        decorative.push({ type: 'standalone-hr', tag: 'HR' });
      }
    });
    document.querySelectorAll('div').forEach(div => {
      if (div.textContent.trim() === '' && div.children.length === 0) {
        const rect = div.getBoundingClientRect();
        if (rect.height > 10) {
          decorative.push({ type: 'empty-spacer-div', height: Math.round(rect.height), class: div.className });
        }
      }
    });
    document.querySelectorAll('[aria-hidden="true"], .icon, [class*="icon"]').forEach(el => {
      if (el.textContent.trim() === '' && !el.closest('button') && !el.closest('a')) {
        decorative.push({ type: 'icon-only-decorative', tag: el.tagName, class: el.className });
      }
    });
    return { decorative: decorative.length, samples: decorative.slice(0, 5) };
  });
  results.push({
    gate: 'GR-08', name: 'No Decorative Elements',
    status: decorativeCheck.decorative === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: decorativeCheck,
    threshold: { decorativeElements: 0 },
    note: 'Heuristic detection — covers standalone hrs, empty spacer divs, icon-only decorative elements'
  });

  // Header DNA (sub-check of GR-10)
  const headerCheck = await page.evaluate(() => {
    const header = document.querySelector('header') || document.querySelector('[class*="header"]') || document.querySelector('[role="banner"]');
    if (!header) return { found: false };

    const style = getComputedStyle(header);
    const bg = style.backgroundColor;
    const bbWidth = parseFloat(style.borderBottomWidth);
    const bbColor = style.borderBottomColor;

    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    const isDark = match ? (parseInt(match[1]) + parseInt(match[2]) + parseInt(match[3])) < 200 : false;

    const isRedBorder = bbColor && bbColor.match(/rgba?\((\d+)/) && parseInt(bbColor.match(/rgba?\((\d+)/)[1]) > 200;
    const is3px = bbWidth >= 2.5 && bbWidth <= 3.5;

    return {
      found: true, isDark, bbWidth, bbColor, isRedBorder, is3px, bg,
      pass: isDark && isRedBorder && is3px
    };
  });

  // GR-09: Border Weight Hierarchy (4/3/1px)
  const borderWeights = await page.evaluate(() => {
    const weights = new Map();
    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const style = getComputedStyle(el);
      ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'].forEach(prop => {
        const w = parseFloat(style[prop]);
        if (w > 0) {
          const key = w.toFixed(1);
          if (!weights.has(key)) weights.set(key, []);
          weights.get(key).push({ tag: el.tagName, class: el.className, prop, width: w });
        }
      });
    });
    return Object.fromEntries(weights);
  });
  const weightValues = Object.keys(borderWeights).map(Number).sort((a, b) => b - a);
  const hasPrimary = weightValues.some(w => w >= 3.5 && w <= 4.5);
  const hasSecondary = weightValues.some(w => w >= 2.5 && w <= 3.5);
  const hasTertiary = weightValues.some(w => w >= 0.5 && w <= 1.5);
  const hasHierarchy = hasPrimary && (hasSecondary || hasTertiary);
  results.push({
    gate: 'GR-09', name: 'Border Weight Hierarchy',
    status: hasHierarchy ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { distinctWeights: weightValues, counts: Object.fromEntries(Object.entries(borderWeights).map(([k, v]) => [k, v.length])), hasPrimary, hasSecondary, hasTertiary },
    threshold: { expectedHierarchy: '4px / 3px / 1px', toleranceBands: '4+-0.5 / 3+-0.5 / 1+-0.5' },
    note: 'Tolerance bands account for subpixel rendering (e.g., 2.67px for 3px)'
  });

  // Typography Foundations (sub-checks folded into GR-10)
  const typographyCheck = await page.evaluate(() => {
    const body = document.body;
    const bodyLH = parseFloat(getComputedStyle(body).lineHeight) / parseFloat(getComputedStyle(body).fontSize);

    const h3s = document.querySelectorAll('h3');
    let h3Italic = true;
    h3s.forEach(h3 => {
      if (getComputedStyle(h3).fontStyle !== 'italic') h3Italic = false;
    });

    return { bodyLineHeight: bodyLH.toFixed(2), h3Italic, h3Count: h3s.length };
  });

  // GR-10: Cross-Page DNA Properties
  const dnaCheck = await page.evaluate(() => {
    const skipLink = document.querySelector('[class*="skip"], a[href="#main"], a[href="#content"]');

    const headings = [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(h => ({
      tag: h.tagName, text: h.textContent.substring(0, 50)
    }));
    let hierarchyOk = true;
    for (let i = 1; i < headings.length; i++) {
      const prev = parseInt(headings[i - 1].tag[1]);
      const curr = parseInt(headings[i].tag[1]);
      if (curr > prev + 1) hierarchyOk = false;
    }

    const callouts = document.querySelectorAll('.callout, blockquote, [class*="callout"]');
    let calloutBorderOk = true;
    callouts.forEach(c => {
      const blw = parseFloat(getComputedStyle(c).borderLeftWidth);
      if (blw < 3.5 || blw > 4.5) calloutBorderOk = false;
    });

    let selectionRedOk = false;
    try {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule.selectorText && rule.selectorText.includes('::selection')) {
              const bgProp = rule.style.backgroundColor || rule.style.background || '';
              if (bgProp.toLowerCase().includes('e83025') || bgProp.toLowerCase().includes('red') ||
                  (bgProp.match && bgProp.match(/rgba?\(232/) !== null)) {
                selectionRedOk = true;
              }
            }
          }
        } catch(e) { /* cross-origin stylesheet */ }
      }
    } catch(e) {}

    let focusVisibleOk = false;
    try {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule.selectorText && rule.selectorText.includes(':focus-visible')) {
              const outline = rule.style.outline || rule.style.outlineWidth || '';
              if (outline.includes('3px')) focusVisibleOk = true;
            }
          }
        } catch(e) {}
      }
    } catch(e) {}

    const paragraphs = document.querySelectorAll('p');
    let pMaxWidthOk = true;
    paragraphs.forEach(p => {
      const mw = getComputedStyle(p).maxWidth;
      if (mw !== 'none') {
        if (mw === '70ch') { /* ok */ }
        else {
          const px = parseFloat(mw);
          if (px > 0 && px > 1200) pMaxWidthOk = false;
        }
      }
    });

    const ariaLabels = document.querySelectorAll('[aria-label]').length;
    const landmarks = document.querySelectorAll('[role], header, main, nav, footer, section, article, aside').length;

    return {
      skipLink: !!skipLink, hierarchyOk, calloutBorderOk, selectionRedOk,
      focusVisibleOk, pMaxWidthOk, ariaLabels, landmarks,
      headingCount: headings.length, calloutCount: callouts.length
    };
  });
  const bodyLHOk = parseFloat(typographyCheck.bodyLineHeight) >= 1.6;
  const h3ItalicOk = typographyCheck.h3Italic;
  const dnaSubChecks = [dnaCheck.skipLink, dnaCheck.hierarchyOk, dnaCheck.calloutBorderOk, dnaCheck.selectionRedOk, dnaCheck.focusVisibleOk, dnaCheck.pMaxWidthOk, bodyLHOk, h3ItalicOk, headerCheck.pass];
  const dnaCriticalPass = dnaSubChecks.every(Boolean);
  results.push({
    gate: 'GR-10', name: 'Cross-Page DNA Properties',
    status: dnaCriticalPass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: {
      ...dnaCheck,
      bodyLineHeight: typographyCheck.bodyLineHeight, bodyLHOk,
      h3Italic: h3ItalicOk, h3Count: typographyCheck.h3Count,
      headerDNA: headerCheck
    },
    threshold: { skipLink: true, hierarchyOk: true, calloutBorder: '4px', selectionRed: true, focusVisible: '3px solid primary', pMaxWidth: '70ch', bodyLineHeight: '>=1.6', h3FontStyle: 'italic', headerDarkBg: true, headerRedBorder: '3px' },
    note: '::selection and :focus-visible checked via stylesheet rules (not computed style). Typography and header DNA folded in.'
  });

  // ========== PERCEPTION GATES (GR-11 through GR-15, GR-44) ==========

  // GR-11: Background Delta >= 15 RGB
  const bgDeltaCheck = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    if (sections.length < 2) return { zones: 0, pass: true, deltas: [] };

    function parseRGB(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }

    const backgrounds = [];
    sections.forEach(s => {
      const bg = getComputedStyle(s).backgroundColor;
      const rgb = parseRGB(bg);
      if (rgb) backgrounds.push({ element: s.className || s.tagName, rgb, raw: bg });
    });

    const deltas = [];
    for (let i = 0; i < backgrounds.length - 1; i++) {
      const a = backgrounds[i].rgb;
      const b = backgrounds[i + 1].rgb;
      const delta = Math.max(Math.abs(a.r - b.r), Math.abs(a.g - b.g), Math.abs(a.b - b.b));
      deltas.push({
        from: backgrounds[i].element, to: backgrounds[i + 1].element,
        delta, fromColor: backgrounds[i].raw, toColor: backgrounds[i + 1].raw,
        pass: delta >= 15
      });
    }
    return { zones: backgrounds.length, deltas, allPass: deltas.every(d => d.pass) };
  });
  results.push({
    gate: 'GR-11', name: 'Background Delta >= 15 RGB',
    status: bgDeltaCheck.allPass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: bgDeltaCheck,
    threshold: { minDelta: 15 },
    note: 'B-04: Checks ONLY adjacent zone pairs in document order (zone[i] vs zone[i+1]). Non-adjacent pairs excluded.'
  });

  // GR-12: REMOVED — letter-spacing check absorbed into GR-18 (Ghost Mechanisms) at RECOMMENDED tier

  // GR-13: Stacked Gap <= 120px (CSS property sum at section boundaries)
  const stackedGapCheck = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const gaps = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const curr = sections[i];
      const next = sections[i + 1];
      const currStyle = getComputedStyle(curr);
      const nextStyle = getComputedStyle(next);
      const cssSum = parseFloat(currStyle.paddingBottom) + parseFloat(currStyle.marginBottom) +
                     parseFloat(nextStyle.paddingTop) + parseFloat(nextStyle.marginTop);
      gaps.push({
        from: curr.className || curr.tagName,
        to: next.className || next.tagName,
        cssSum: Math.round(cssSum),
        pass: cssSum <= 120
      });
    }
    return { gaps, allPass: gaps.every(g => g.pass) };
  });
  results.push({
    gate: 'GR-13', name: 'Stacked Gap <= 120px (CSS sum)',
    status: stackedGapCheck.allPass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: stackedGapCheck,
    threshold: { maxCSSSum: 120 }
  });

  // GR-14: Total Visual Gap <= 150px (getBoundingClientRect measurement)
  const visualGapCheck = await page.evaluate(() => {
    function parseRGBLocal(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }
    function rgbDelta(a, b) {
      if (!a || !b) return 999;
      return Math.max(Math.abs(a.r - b.r), Math.abs(a.g - b.g), Math.abs(a.b - b.b));
    }

    const main = document.querySelector('main, [role="main"], body');
    const scoped = [...(main || document.body).querySelectorAll(':scope > section, :scope > [class*="zone"], :scope > [class*="section"]')];
    // Fallback: if scoping yields < 2, use original selector
    const sections = scoped.length >= 2 ? scoped : document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const gaps = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const curr = sections[i];
      const next = sections[i + 1];
      const currRect = curr.getBoundingClientRect();
      const nextRect = next.getBoundingClientRect();
      const visualGap = nextRect.top - currRect.bottom;

      let isStructuralTransition = false;
      const currBg = parseRGBLocal(getComputedStyle(curr).backgroundColor);
      const nextBg = parseRGBLocal(getComputedStyle(next).backgroundColor);
      let sibling = curr.nextElementSibling;
      while (sibling && sibling !== next) {
        const sibStyle = getComputedStyle(sibling);
        const sibPos = sibStyle.position;
        if (sibPos === 'relative' || sibPos === 'absolute') {
          const sibBg = parseRGBLocal(sibStyle.backgroundColor);
          if (sibBg && rgbDelta(sibBg, currBg) >= 15 && rgbDelta(sibBg, nextBg) >= 15) {
            isStructuralTransition = true;
            break;
          }
        }
        sibling = sibling.nextElementSibling;
      }

      gaps.push({
        from: curr.className || curr.tagName,
        to: next.className || next.tagName,
        gap: Math.round(visualGap),
        isStructuralTransition,
        pass: isStructuralTransition || visualGap <= 150
      });
    }
    return { gaps, allPass: gaps.every(g => g.pass) };
  });
  results.push({
    gate: 'GR-14', name: 'Total Visual Gap <= 150px',
    status: visualGapCheck.allPass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: visualGapCheck,
    threshold: { maxVisualGap: 150 }
  });

  // GR-15: Single Margin <= 96px (B-05: excludes auto centering margins)
  const singleMarginCheck = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      // B-05: Skip elements with auto centering margins (margin-left: auto + margin-right: auto)
      if (style.marginLeft === 'auto' && style.marginRight === 'auto') return;
      ['marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'].forEach(prop => {
        const val = parseFloat(style[prop]);
        if (val > 96) {
          violations.push({ tag: el.tagName, class: el.className, prop, value: val + 'px' });
        }
      });
    });
    return { violations: violations.length, samples: violations.slice(0, 5) };
  });
  results.push({
    gate: 'GR-15', name: 'Single Margin <= 96px',
    status: singleMarginCheck.violations === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: singleMarginCheck,
    threshold: { maxSingleValue: '96px' },
    note: 'B-05: Elements with margin-left:auto + margin-right:auto (centering) are excluded.'
  });

  // GR-60: Text Contrast Legibility (WCAG 2.1 AA)
  const contrastCheck = await page.evaluate(() => {
    function relLum(r, g, b) {
      const [rs, gs, bs] = [r, g, b].map(c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    }
    function contrast(l1, l2) { return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); }
    function parseRGB(str) {
      const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
      return m ? { r: parseInt(m[1]), g: parseInt(m[2]), b: parseInt(m[3]), a: m[4] !== undefined ? parseFloat(m[4]) : 1 } : null;
    }
    function getEffBg(el) {
      let cur = el;
      while (cur && cur !== document.documentElement) {
        const bg = getComputedStyle(cur).backgroundColor;
        if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
          const rgb = parseRGB(bg);
          if (rgb && rgb.a >= 0.1) return rgb;
        }
        cur = cur.parentElement;
      }
      return { r: 255, g: 255, b: 255, a: 1 };
    }
    const failures = [];
    let total = 0, passed = 0;
    const selectors = 'p,span,a,li,h1,h2,h3,h4,h5,h6,td,th,label,figcaption,blockquote,cite,dt,dd,summary,caption,text,tspan';
    document.querySelectorAll(selectors).forEach(el => {
      if (!window.isRenderedElement(el)) return;
      const text = el.textContent.trim();
      if (!text.length) return;
      total++;
      const style = getComputedStyle(el);
      const fg = parseRGB(style.color);
      if (!fg) return;
      const bg = getEffBg(el);
      const ratio = contrast(relLum(fg.r, fg.g, fg.b), relLum(bg.r, bg.g, bg.b));
      const fs = parseFloat(style.fontSize);
      const fw = parseInt(style.fontWeight) || 400;
      const isLarge = fs >= 18 || (fs >= 14 && fw >= 700);
      const minRatio = isLarge ? 3.0 : 4.5;
      if (ratio < minRatio) {
        failures.push({ tag: el.tagName, class: el.className.toString().substring(0, 50),
          text: text.substring(0, 40), fg: style.color, bg: `rgb(${bg.r},${bg.g},${bg.b})`,
          ratio: ratio.toFixed(2), required: minRatio, fontSize: fs + 'px', isLarge });
      } else { passed++; }
    });
    return { total, passed, failures: failures.length, samples: failures.slice(0, 10), pass: failures.length === 0 };
  });
  results.push({
    gate: 'GR-60', name: 'Text Contrast Legibility (WCAG AA)',
    status: contrastCheck.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: contrastCheck,
    threshold: { normalText: '4.5:1', largeText: '3.0:1', standard: 'WCAG 2.1 AA' }
  });

  // GR-44: Trailing Whitespace Void Detection (fixed: uses scrollHeight, not body rect)
  const trailingVoid = await page.evaluate(() => {
    const pageBottom = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const allElements = [...document.querySelectorAll('body *')];
    let lastVisibleBottom = 0;
    let lastVisibleEl = null;

    for (const el of allElements) {
      if (['SCRIPT', 'STYLE', 'META', 'LINK'].includes(el.tagName)) continue;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') continue;
      if (parseFloat(style.opacity) === 0) continue;
      const rect = el.getBoundingClientRect();
      if (rect.height === 0) continue;
      const absBottom = rect.bottom + scrollTop;
      if (absBottom > lastVisibleBottom) {
        lastVisibleBottom = absBottom;
        lastVisibleEl = { tag: el.tagName, class: el.className };
      }
    }

    const voidHeight = pageBottom - lastVisibleBottom;
    return {
      pageBottom: Math.round(pageBottom),
      lastContentBottom: Math.round(lastVisibleBottom),
      lastElement: lastVisibleEl,
      voidHeight: Math.round(voidHeight),
      pass: voidHeight <= 300
    };
  });
  results.push({
    gate: 'GR-44', name: 'Trailing Whitespace Void',
    status: trailingVoid.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: trailingVoid,
    threshold: { maxVoidHeight: '300px' }
  });

  // ========== OUTPUT VERIFICATION ==========

  // GR-43: Self-Evaluation Comment Existence
  const selfEvalCheck = await page.evaluate(() => {
    const html = document.documentElement.outerHTML;
    const hasSelfEval = html.includes('<!-- SELF-EVALUATION:') || html.includes('<!-- Self-Evaluation:');
    return { hasSelfEval };
  });
  results.push({
    gate: 'GR-43', name: 'Self-Evaluation Comment Existence',
    status: selfEvalCheck.hasSelfEval ? 'PASS' : 'FAIL',
    source: 'code',
    measured: selfEvalCheck,
    threshold: { selfEvaluationComment: true }
  });

  // GR-63: Builder Experiential Marker — evidence of legibility self-check
  // Source: artifact-builder-recipe.md Step 5.0, pa-deployment.md Section 0
  // Tier: REQUIRED — builder that skipped self-check should not proceed to expensive PA audit
  const experientialCheck = await page.evaluate(() => {
    const html = document.documentElement.outerHTML;
    const marker = html.match(/<!--\s*EXPERIENTIAL-CHECK:\s*([\s\S]*?)-->/i);
    if (!marker) return { found: false, text: '', hasLegibility: false, hasVisualClarity: false, hasStructuralRef: false, hasNegativeFinding: false, hasMinLength: false, pass: false };
    const text = marker[1].trim();
    const hasLegibility = /legib|read|text|font|arm.?s?\s*length/i.test(text);
    const hasVisualClarity = /chart|diagram|table|visual|label|annotation|component/i.test(text);
    const hasStructuralRef = /zone|section|header|footer|Z[1-9]|S[1-9]|nav|hero|sidebar/i.test(text);
    const hasNegativeFinding = /but|however|difficult|hard|squint|effort|strain|small|tight|could|improve|adjust/i.test(text);
    const hasMinLength = text.length >= 100;
    return {
      found: true,
      text: text.substring(0, 500),
      textLength: text.length,
      hasLegibility,
      hasVisualClarity,
      hasStructuralRef,
      hasNegativeFinding,
      hasMinLength,
      pass: hasLegibility && hasVisualClarity && hasStructuralRef && hasNegativeFinding && hasMinLength
    };
  });
  results.push({
    gate: 'GR-63', name: 'Builder Experiential Marker',
    status: experientialCheck.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: experientialCheck,
    threshold: { markerPresent: true, minLength: 100, legibilityMentioned: true, visualClarityMentioned: true, structuralRefRequired: true },
    note: 'Builder must include <!-- EXPERIENTIAL-CHECK: [report] --> with evidence of legibility + visual clarity assessment referencing specific page structures (>= 100 chars)'
  });

  // ========== VERDICT SUMMARY (GR-16 logic absorbed) ==========
  const identityGates = results.filter(r => ['GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-08','GR-09','GR-10'].includes(r.gate));
  const identityPass = identityGates.filter(g => g.status === 'PASS').length;
  const identityFail = identityGates.filter(g => g.status === 'FAIL').length;
  const perceptionGates = results.filter(r => ['GR-11', 'GR-13', 'GR-14', 'GR-15', 'GR-44', 'GR-60'].includes(r.gate));
  const perceptionPass = perceptionGates.filter(g => g.status === 'PASS').length;
  const perceptionFail = perceptionGates.filter(g => g.status === 'FAIL').length;
  const allPerceptionPass = perceptionGates.every(g => g.status === 'PASS');
  const recommendedGates = results.filter(r => ['GR-07', 'GR-43'].includes(r.gate));
  const recommendedFail = recommendedGates.filter(g => g.status === 'FAIL').length;

  // REQUIRED experiential gates checked in this function (GR-63)
  const experientialGR63 = results.find(r => r.gate === 'GR-63');
  const experientialFail = experientialGR63 && experientialGR63.status === 'FAIL';

  // MECHANICAL EXCEPTION: auto-classify identity failures
  // Mechanical = fix requires <=5 CSS lines, no HTML structural change, no design decision
  const mechanicalIdentityGates = ['GR-05', 'GR-06', 'GR-07', 'GR-08', 'GR-10'];
  const failedIdentity = identityGates.filter(g => g.status === 'FAIL');
  const allIdentityFailsMechanical = failedIdentity.length > 0 &&
    failedIdentity.every(g => mechanicalIdentityGates.includes(g.gate));

  let verdict = 'PROCEED_TO_PA';
  if (identityFail > 0 && !allIdentityFailsMechanical) verdict = 'RETHINK';
  else if (identityFail > 0 && allIdentityFailsMechanical) verdict = 'IMPROVE';
  else if (perceptionFail > 0 || !allPerceptionPass) verdict = 'IMPROVE';
  else if (experientialFail) verdict = 'IMPROVE'; // GR-63 REQUIRED: send back to builder
  else if (recommendedFail > 0) verdict = 'IMPROVE';

  return {
    results,
    summary: {
      identity: { pass: identityPass, fail: identityFail, total: 9, allMechanical: allIdentityFailsMechanical },
      perception: { pass: perceptionPass, fail: perceptionFail, total: 6 },
      experiential: { GR63: experientialGR63 ? experientialGR63.status : 'NOT_RUN' },
      recommended: { pass: recommendedGates.length - recommendedFail, fail: recommendedFail, total: 2 },
      allPerceptionPass,
      verdict,
      note: `GR-63 experiential: ${experientialGR63 ? experientialGR63.status : 'NOT_RUN'}. Run runAntiPatternGates(), runWave2Gates(), and runGateCoverage() after this for complete verification`
    }
  };
}

// =============================================================================
// SECTION 3: ANTI-PATTERN GATES (GR-17 through GR-22)
// Execute after core gates pass. More heuristic — may require tolerance tuning.
// =============================================================================

async function runAntiPatternGates(page) {
  const results = [];

  // GR-17: Density Stacking (min padding >= 12px for content, >= 4px for table cells)
  const densityCheck = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('p, blockquote, .callout').forEach(el => {
      const style = getComputedStyle(el);
      ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'].forEach(prop => {
        const val = parseFloat(style[prop]);
        if (val > 0 && val < 12) {
          violations.push({ tag: el.tagName, class: el.className, prop, value: val + 'px', minExpected: '12px' });
        }
      });
    });
    document.querySelectorAll('td, th, li').forEach(el => {
      const style = getComputedStyle(el);
      ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'].forEach(prop => {
        const val = parseFloat(style[prop]);
        if (val > 0 && val < 4) {
          violations.push({ tag: el.tagName, class: el.className, prop, value: val + 'px', minExpected: '4px' });
        }
      });
    });
    return { violations: violations.length, samples: violations.slice(0, 5) };
  });
  results.push({
    gate: 'GR-17', name: 'AP-01 Density Stacking',
    status: densityCheck.violations === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: densityCheck,
    threshold: { minPadding: '12px on content elements' }
  });

  // GR-18: Ghost Mechanisms (sub-perceptual CSS values)
  const ghostCheck = await page.evaluate(() => {
    const ghosts = [];
    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'].forEach(prop => {
        const w = parseFloat(style[prop]);
        if (w > 0 && w < 0.5) {
          ghosts.push({ tag: el.tagName, class: el.className, prop, value: w + 'px', type: 'sub-perceptual-border' });
        }
      });
      const opacity = parseFloat(style.opacity);
      if (opacity > 0 && opacity < 0.1) {
        ghosts.push({ tag: el.tagName, class: el.className, value: opacity, type: 'sub-perceptual-opacity' });
      }
      // Sub-perceptual letter-spacing (absorbed from GR-12)
      const ls = getComputedStyle(el).letterSpacing;
      if (ls && ls !== 'normal' && ls !== '0px') {
        const px = parseFloat(ls); const fs = parseFloat(getComputedStyle(el).fontSize);
        if (fs > 0 && px > 0 && (px / fs) < 0.025) ghosts.push({ tag: el.tagName, class: el.className, value: ls, type: 'sub-perceptual-letter-spacing' });
      }
    });
    return { ghosts: ghosts.length, samples: ghosts.slice(0, 5) };
  });
  results.push({
    gate: 'GR-18', name: 'AP-09 Ghost Mechanisms',
    status: ghostCheck.ghosts === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: ghostCheck,
    threshold: { ghostMechanisms: 0 }
  });

  // GR-19: AP-10 Threshold Gaming (>50% of deltas cluster at floor)
  // B-11: Elements with boundary/divider/separator/zone-break classes are exempted
  const gamingCheck = await page.evaluate(() => {
    function parseRGBLocal(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }
    const boundaryPattern = /boundary|divider|separator|zone-break/i;
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const deltas = [];
    for (let i = 0; i < sections.length - 1; i++) {
      // B-11: Skip boundary/divider/separator elements
      if (boundaryPattern.test(sections[i].className) || boundaryPattern.test(sections[i + 1].className)) continue;
      const aBg = parseRGBLocal(getComputedStyle(sections[i]).backgroundColor);
      const bBg = parseRGBLocal(getComputedStyle(sections[i + 1]).backgroundColor);
      if (aBg && bBg) {
        const delta = Math.max(Math.abs(aBg.r - bBg.r), Math.abs(aBg.g - bBg.g), Math.abs(aBg.b - bBg.b));
        if (delta > 0) deltas.push(delta);
      }
    }
    const floorRange = deltas.filter(d => d >= 15 && d <= 17);
    const floorRatio = deltas.length > 0 ? floorRange.length / deltas.length : 0;

    const lsValues = [];
    document.querySelectorAll('*').forEach(el => {
      const ls = getComputedStyle(el).letterSpacing;
      if (ls && ls !== 'normal' && ls !== '0px') {
        const px = parseFloat(ls);
        const fs = parseFloat(getComputedStyle(el).fontSize);
        if (fs > 0) {
          const em = px / fs;
          if (em > 0) lsValues.push(em);
        }
      }
    });
    const lsFloorRange = lsValues.filter(v => v >= 0.025 && v <= 0.028);
    const lsFloorRatio = lsValues.length > 0 ? lsFloorRange.length / lsValues.length : 0;

    const isGaming = floorRatio > 0.50 || (floorRatio > 0.30 && lsFloorRatio > 0.50);

    return {
      bgDeltas: deltas, bgFloorCount: floorRange.length, bgFloorRatio: floorRatio.toFixed(2),
      lsValues: lsValues.length, lsFloorCount: lsFloorRange.length, lsFloorRatio: lsFloorRatio.toFixed(2),
      isGaming
    };
  });
  results.push({
    gate: 'GR-19', name: 'AP-10 Threshold Gaming',
    status: gamingCheck.isGaming ? 'FAIL' : 'PASS',
    source: 'code',
    measured: gamingCheck,
    threshold: { maxFloorRatio: 0.50, floorRange: '15-17 RGB' }
  });

  // GR-20: Structural Echo (3+ consecutive identical sections)
  const echoCheck = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"]');
    const signatures = [];
    sections.forEach(s => {
      const style = getComputedStyle(s);
      signatures.push({
        bg: style.backgroundColor,
        padding: style.padding,
        borderBottom: style.borderBottom
      });
    });
    let maxConsecutive = 1;
    let currentRun = 1;
    for (let i = 1; i < signatures.length; i++) {
      if (signatures[i].bg === signatures[i-1].bg &&
          signatures[i].padding === signatures[i-1].padding &&
          signatures[i].borderBottom === signatures[i-1].borderBottom) {
        currentRun++;
        maxConsecutive = Math.max(maxConsecutive, currentRun);
      } else {
        currentRun = 1;
      }
    }
    return { maxConsecutive, pass: maxConsecutive < 3 };
  });
  results.push({
    gate: 'GR-20', name: 'AP-11 Structural Echo',
    status: echoCheck.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: echoCheck,
    threshold: { maxConsecutiveIdentical: 2 }
  });

  // GR-21: AP-14 Cognitive Overload (Bg Proxy)
  const overloadCheck = await page.evaluate(() => {
    const docHeight = document.documentElement.scrollHeight;
    const sliceH = 900, slices = Math.ceil(docHeight / sliceH);
    let maxDistinct = 0;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    for (let i = 0; i < slices; i++) {
      const top = i * sliceH, bottom = top + sliceH;
      const bgColors = new Set();
      document.querySelectorAll('*').forEach(el => {
        if (!window.isRenderedElement(el)) return;
        const rect = el.getBoundingClientRect();
        const elTop = rect.top + scrollTop, elBot = rect.bottom + scrollTop;
        if (elBot > top && elTop < bottom) {
          const bg = getComputedStyle(el).backgroundColor;
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
            if (m && (!m[4] || parseFloat(m[4]) >= 0.1)) bgColors.add(`${m[1]},${m[2]},${m[3]}`);
          }
        }
      });
      if (bgColors.size > maxDistinct) maxDistinct = bgColors.size;
    }
    return { maxDistinctPerViewport: maxDistinct, sliceCount: slices, pass: maxDistinct <= 6 };
  });
  results.push({
    gate: 'GR-21', name: 'AP-14 Cognitive Overload (Bg Proxy)',
    status: overloadCheck.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: overloadCheck,
    threshold: { maxDistinctBackgrounds: 6, sliceHeight: '900px' },
    evidence: 'THEORETICAL',
    note: 'Excludes alpha < 0.1 backgrounds. Threshold raised from 4 to 6 for COMPOSED mode.'
  });

  // GR-22: AP-02 Color Zone Conflict (Red Role)
  const colorConflictCheck = await page.evaluate(() => {
    function isRed(str) {
      const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      return m && parseInt(m[1]) >= 220 && parseInt(m[1]) <= 245 && parseInt(m[2]) <= 60 && parseInt(m[3]) <= 50;
    }
    let borderUses = 0, bgUses = 0, textUses = 0;
    const bgElements = [];
    document.querySelectorAll('*').forEach(el => {
      if (!window.isRenderedElement(el)) return;
      if (el.classList.contains('skip-link') || el.closest('.skip-link') || el.matches('[class*="skip"]')) return;
      const style = getComputedStyle(el);
      ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'].forEach(prop => {
        if (isRed(style[prop]) && parseFloat(style[prop.replace('Color', 'Width')]) > 0) borderUses++;
      });
      if (isRed(style.backgroundColor)) { bgUses++; bgElements.push({ tag: el.tagName, class: el.className }); }
      if (isRed(style.color)) textUses++;
    });
    return { borderUses, bgUses, textUses, bgElements: bgElements.slice(0, 5), pass: bgUses <= 2 };
  });
  results.push({
    gate: 'GR-22', name: 'AP-02 Color Zone Conflict (Red Role)',
    status: colorConflictCheck.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: colorConflictCheck,
    threshold: { maxRedBackgrounds: 2 },
    evidence: 'OBSERVED',
    note: 'Skip-link elements excluded. Red for borders/emphasis, not backgrounds.'
  });

  return results;
}

// =============================================================================
// SECTION 4: WAVE 2 GATES (GR-45, GR-46, GR-50, GR-51, GR-52, GR-53)
// Execute after anti-pattern gates
// =============================================================================

async function runWave2Gates(page) {
  const results = [];

  // GR-45: Typography Variation
  const typoVariation = await page.evaluate(() => {
    const h2Sizes = new Map();
    const h3Sizes = new Map();
    const h2Elements = document.querySelectorAll('h2');
    const h3Elements = document.querySelectorAll('h3');

    h2Elements.forEach(el => {
      if (!window.isRenderedElement(el)) return;
      const fs = Math.round(parseFloat(getComputedStyle(el).fontSize));
      h2Sizes.set(fs, (h2Sizes.get(fs) || 0) + 1);
    });
    h3Elements.forEach(el => {
      if (!window.isRenderedElement(el)) return;
      const fs = Math.round(parseFloat(getComputedStyle(el).fontSize));
      h3Sizes.set(fs, (h3Sizes.get(fs) || 0) + 1);
    });

    function toBands(sizeMap) {
      const sorted = [...sizeMap.keys()].sort((a, b) => a - b);
      const bands = [];
      for (const size of sorted) {
        const existing = bands.find(b => Math.abs(b.center - size) <= 4);
        if (existing) {
          existing.count += sizeMap.get(size);
        } else {
          bands.push({ center: size, count: sizeMap.get(size) });
        }
      }
      return bands;
    }

    const h2Bands = toBands(h2Sizes);
    const h3Bands = toBands(h3Sizes);

    const allSizes = new Map([...h2Sizes]);
    h3Sizes.forEach((count, size) => allSizes.set(size, (allSizes.get(size) || 0) + count));
    const combinedBands = toBands(allSizes);

    const h2Count = [...h2Sizes.values()].reduce((s, c) => s + c, 0);
    const useFallback = h2Count < 3;
    const pass = useFallback ? combinedBands.length >= 2 : h2Bands.length >= 2;

    return {
      h2Count,
      h3Count: [...h3Sizes.values()].reduce((s, c) => s + c, 0),
      h2Bands: h2Bands.length,
      h2BandDetails: h2Bands,
      h3Bands: h3Bands.length,
      combinedBands: combinedBands.length,
      usedFallback: useFallback,
      pass
    };
  });
  results.push({
    gate: 'GR-45', name: 'Typography Variation',
    status: typoVariation.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: typoVariation,
    threshold: { minDistinctBands: 2, bandTolerance: '4px', mode: 'within-H2 primary, H2+H3 fallback if <3 H2s' },
    evidence: 'OBSERVED'
  });

  // GR-46: Print Stylesheet
  const printCheck = await page.evaluate(() => {
    let hasPrintRule = false;
    let printRuleCount = 0;
    try {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule instanceof CSSMediaRule && rule.conditionText && rule.conditionText.includes('print')) {
              hasPrintRule = true;
              printRuleCount++;
            }
          }
        } catch (e) { /* cross-origin stylesheet */ }
      }
    } catch (e) {}
    return { hasPrintRule, printRuleCount };
  });
  results.push({
    gate: 'GR-46', name: 'Print Stylesheet',
    status: printCheck.hasPrintRule ? 'PASS' : 'FAIL',
    source: 'code',
    measured: printCheck,
    threshold: { minPrintRules: 1 },
    evidence: 'THEORETICAL'
  });

  // GR-50: Conviction Statement Existence
  const convictionCheck = await page.evaluate(() => {
    const html = document.documentElement.outerHTML;
    const convictionMatch = html.match(/<!--\s*CONVICTION:([\s\S]*?)-->/i);
    let convictionText = '';
    if (convictionMatch) {
      convictionText = convictionMatch[1].trim();
    }
    const sentences = convictionText
      ? convictionText.split(/\.\s+|\.$/).filter(s => s.trim().length > 10).length
      : 0;

    const hasMetaphor = /metaphor/i.test(convictionText);
    const hasArc = /arc|emotional|journey/i.test(convictionText);
    const hasStrategy = /strateg|composition|approach/i.test(convictionText);

    return {
      found: !!convictionMatch,
      sentences,
      hasMetaphor,
      hasArc,
      hasStrategy,
      textPreview: convictionText.substring(0, 200),
      pass: !!convictionMatch && sentences >= 3
    };
  });
  results.push({
    gate: 'GR-50', name: 'Conviction Statement Existence',
    status: convictionCheck.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: convictionCheck,
    threshold: { minSentences: 3, requiredTopics: ['metaphor', 'arc', 'strategy'] },
    evidence: 'THEORETICAL'
  });

  // GR-51: Background Delta Distribution
  const bgDistribution = await page.evaluate(() => {
    function parseRGBLocal(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }

    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const deltas = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const aBg = parseRGBLocal(getComputedStyle(sections[i]).backgroundColor);
      const bBg = parseRGBLocal(getComputedStyle(sections[i + 1]).backgroundColor);
      if (aBg && bBg) {
        const delta = Math.max(Math.abs(aBg.r - bBg.r), Math.abs(aBg.g - bBg.g), Math.abs(aBg.b - bBg.b));
        if (delta > 0) deltas.push(delta);
      }
    }

    if (deltas.length === 0) {
      return { deltas: [], above25Count: 0, above25Ratio: 0, stddev: 0, pass: true, note: 'No zone boundaries found' };
    }

    const above25 = deltas.filter(d => d >= 25);
    const above25Ratio = above25.length / deltas.length;

    const mean = deltas.reduce((sum, d) => sum + d, 0) / deltas.length;
    const variance = deltas.reduce((sum, d) => sum + Math.pow(d - mean, 2), 0) / deltas.length;
    const stddev = Math.sqrt(variance);

    const middleStart = Math.floor(deltas.length * 0.25);
    const middleEnd = Math.ceil(deltas.length * 0.75);
    const middleDeltas = deltas.slice(middleStart, middleEnd);
    const middleHasHighDelta = middleDeltas.some(d => d >= 25);

    return {
      deltas,
      above25Count: above25.length,
      totalDeltas: deltas.length,
      above25Ratio: above25Ratio.toFixed(2),
      mean: mean.toFixed(1),
      stddev: stddev.toFixed(1),
      middleHasHighDelta,
      middleDeltaCount: middleDeltas.length,
      pass: above25Ratio >= 0.50 && stddev >= 8 && middleHasHighDelta
    };
  });
  results.push({
    gate: 'GR-51', name: 'Background Delta Distribution',
    status: bgDistribution.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: bgDistribution,
    threshold: { minAbove25Ratio: 0.50, minStddev: 8 },
    evidence: 'OBSERVED'
  });

  // GR-52: Section Height Variation
  const heightVariation = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const heights = [];
    sections.forEach(s => {
      if (!window.isRenderedElement(s)) return;
      const rect = s.getBoundingClientRect();
      if (rect.height > 0) {
        heights.push(Math.round(rect.height));
      }
    });

    if (heights.length < 3) {
      return { heights, bands: heights.length, pass: heights.length >= 3, note: 'Fewer than 3 sections found' };
    }

    const sorted = [...heights].sort((a, b) => a - b);
    const bands = [];
    for (const h of sorted) {
      const existingBand = bands.find(b => Math.abs(b.center - h) <= 50);
      if (existingBand) {
        existingBand.members.push(h);
        existingBand.center = existingBand.members.reduce((s, v) => s + v, 0) / existingBand.members.length;
      } else {
        bands.push({ center: h, members: [h] });
      }
    }

    return {
      heights,
      sectionCount: heights.length,
      bands: bands.length,
      bandDetails: bands.map(b => ({ center: Math.round(b.center), count: b.members.length })),
      pass: bands.length >= 3
    };
  });
  results.push({
    gate: 'GR-52', name: 'Section Height Variation',
    status: heightVariation.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: heightVariation,
    threshold: { minDistinctBands: 3, bandTolerance: '50px' },
    evidence: 'OBSERVED'
  });

  // GR-53: Density Arc Direction
  const densityArc = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const densities = [];

    sections.forEach((s, index) => {
      if (!window.isRenderedElement(s)) return;
      const rect = s.getBoundingClientRect();
      if (rect.height <= 0) return;
      const childCount = s.querySelectorAll('*').length;
      const density = childCount / rect.height;
      densities.push({
        index,
        className: s.className || s.tagName,
        height: Math.round(rect.height),
        childCount,
        density: density.toFixed(4)
      });
    });

    if (densities.length < 3) {
      return { densities, densestIndex: -1, pass: true, note: 'Fewer than 3 sections — arc check not applicable' };
    }

    let maxDensity = 0;
    let densestIndex = 0;
    densities.forEach((d, i) => {
      const val = parseFloat(d.density);
      if (val > maxDensity) {
        maxDensity = val;
        densestIndex = i;
      }
    });

    const isFirstOrLast = densestIndex === 0 || densestIndex === densities.length - 1;

    return {
      sectionCount: densities.length,
      densestIndex,
      densestSection: densities[densestIndex],
      isFirstOrLast,
      pass: !isFirstOrLast
    };
  });
  results.push({
    gate: 'GR-53', name: 'Density Arc Direction',
    status: densityArc.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: densityArc,
    threshold: { densestNotFirstOrLast: true },
    evidence: 'THEORETICAL',
    note: 'ADVISORY only — crescendo/decrescendo patterns are valid exceptions'
  });

  // GR-55: Multi-Coherence Channel Count (B-06) — PROMOTED to RECOMMENDED (SIG-11)
  // Perceptibility thresholds added: sub-perceptual differences don't count as channels.
  // Channels: background (>=15 RGB), font-family (any), font-size (>=2px),
  //           letter-spacing (>=0.5px), border (structural), padding (>=8px)
  const multiCoherence = await page.evaluate(() => {
    function parseRGBLocal(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const boundaries = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const aStyle = getComputedStyle(sections[i]);
      const bStyle = getComputedStyle(sections[i + 1]);
      let channels = 0;
      const channelDetails = {};

      // Background: use GR-11's 15 RGB threshold
      const aBg = parseRGBLocal(aStyle.backgroundColor);
      const bBg = parseRGBLocal(bStyle.backgroundColor);
      if (aBg && bBg) {
        const delta = Math.max(Math.abs(aBg.r-bBg.r), Math.abs(aBg.g-bBg.g), Math.abs(aBg.b-bBg.b));
        if (delta >= 15) { channels++; channelDetails.background = delta; }
      }

      // Font-family: any difference counts (always perceptible)
      if (aStyle.fontFamily !== bStyle.fontFamily) {
        channels++; channelDetails.fontFamily = true;
      }

      // Font-size: >= 2px difference
      const aFs = parseFloat(aStyle.fontSize);
      const bFs = parseFloat(bStyle.fontSize);
      if (Math.abs(aFs - bFs) >= 2) {
        channels++; channelDetails.fontSize = Math.abs(aFs - bFs).toFixed(1) + 'px';
      }

      // Letter-spacing: >= 0.5px difference
      const aLs = aStyle.letterSpacing === 'normal' ? 0 : parseFloat(aStyle.letterSpacing);
      const bLs = bStyle.letterSpacing === 'normal' ? 0 : parseFloat(bStyle.letterSpacing);
      if (Math.abs(aLs - bLs) >= 0.5) {
        channels++; channelDetails.letterSpacing = Math.abs(aLs - bLs).toFixed(1) + 'px';
      }

      // Border: structural difference (presence/absence or weight change >= 1px)
      const aBorderW = parseFloat(aStyle.borderBottomWidth);
      const bBorderW = parseFloat(bStyle.borderTopWidth);
      if ((aBorderW > 0) !== (bBorderW > 0) || Math.abs(aBorderW - bBorderW) >= 1) {
        channels++; channelDetails.border = { a: aBorderW, b: bBorderW };
      }

      // Padding: >= 8px total difference
      const aPad = parseFloat(aStyle.paddingBottom) + parseFloat(aStyle.paddingTop);
      const bPad = parseFloat(bStyle.paddingBottom) + parseFloat(bStyle.paddingTop);
      if (Math.abs(aPad - bPad) >= 8) {
        channels++; channelDetails.padding = Math.abs(aPad - bPad).toFixed(0) + 'px';
      }

      boundaries.push({
        from: sections[i].className || sections[i].tagName,
        to: sections[i + 1].className || sections[i + 1].tagName,
        channels, channelDetails,
        pass: channels >= 3
      });
    }
    return {
      boundaries,
      allPass: boundaries.every(b => b.pass),
      minChannels: boundaries.length > 0 ? Math.min(...boundaries.map(b => b.channels)) : 0,
      weakBoundaries: boundaries.filter(b => !b.pass).length
    };
  });
  results.push({
    gate: 'GR-55', name: 'Multi-Coherence Channel Count',
    status: multiCoherence.allPass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: multiCoherence,
    threshold: {
      minChannelsPerBoundary: 3,
      perceptibilityThresholds: {
        background: '>= 15 RGB delta',
        fontFamily: 'any difference',
        fontSize: '>= 2px',
        letterSpacing: '>= 0.5px',
        border: 'structural change (presence/absence or >= 1px weight)',
        padding: '>= 8px total'
      }
    },
    evidence: 'OBSERVED'
  });

  // GR-66: Component Class Count (A-05)
  // Count distinct component CSS classes in HTML. Warn if < 8 distinct types.
  const componentCount = await page.evaluate(() => {
    const componentPatterns = [
      '.callout', '.table-wrapper', '.pull-quote', '.blockquote-highlight',
      '.data-table', '.key-value', '.timeline', '.comparison-grid',
      '.stat-block', '.aside', '.epigraph', '.code-block',
      '.footnote', '.citation', '.definition', '.highlight-box'
    ];
    const found = [];
    for (const pat of componentPatterns) {
      if (document.querySelector(pat)) found.push(pat);
    }
    return { found, count: found.length, pass: found.length >= 8 };
  });
  results.push({
    gate: 'GR-66', name: 'Component Class Count',
    status: componentCount.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: componentCount,
    threshold: { minDistinctComponents: 8 },
    evidence: 'OBSERVED',
    note: 'ADVISORY: Checks for variety of component types in HTML.'
  });

  // GR-67: Footer Text Size (C-03)
  // All text in footer or last zone must have font-size >= 11px.
  const footerTextSize = await page.evaluate(() => {
    const footer = document.querySelector('footer') || document.querySelector('[class*="footer"]');
    const zones = document.querySelectorAll('section, [class*="zone"]');
    const target = footer || (zones.length > 0 ? zones[zones.length - 1] : null);
    if (!target) return { found: false, pass: true, violations: [] };
    const violations = [];
    target.querySelectorAll('*').forEach(el => {
      if (!el.textContent.trim()) return;
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs > 0 && fs < 11) {
        violations.push({ tag: el.tagName, class: el.className, fontSize: fs + 'px' });
      }
    });
    return { found: true, violations: violations.length, samples: violations.slice(0, 5), pass: violations.length === 0 };
  });
  results.push({
    gate: 'GR-67', name: 'Footer Text Size',
    status: footerTextSize.pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: footerTextSize,
    threshold: { minFontSize: '11px', scope: 'footer or last zone' },
    evidence: 'OBSERVED',
    note: 'RECOMMENDED: Checks font-size >= 11px for all text in footer/last zone.'
  });

  return results;
}

// =============================================================================
// SECTION 5: META-GATES (GR-48, GR-49)
// =============================================================================

// GR-48: Gate Coverage Completeness — runs LAST after all other gates
function runGateCoverage(allResults) {
  const REQUIRED_GATES = [
    'GR-01', 'GR-02', 'GR-03', 'GR-04', 'GR-05', 'GR-06', 'GR-08', 'GR-09', 'GR-10',
    'GR-11', 'GR-13', 'GR-14', 'GR-15',
    'GR-18',  // PROMOTED from RECOMMENDED (SIG-05: ghost mechanisms = #1 proven failure mode)
    'GR-44', 'GR-60',
    'GR-61', 'GR-62',
    'GR-63', 'GR-64',
    'GR-79'
  ]; // 21 REQUIRED gates (not counting GR-48 itself). GR-18 promoted (ghost mechanisms). GR-63 promoted (experiential marker). GR-64 promoted (usability priority). GR-79 (IMPROVE completion) added convergence reframe.

  const RECOMMENDED_GATES = [
    'GR-07', 'GR-17', 'GR-20',
    'GR-43', 'GR-45', 'GR-49', 'GR-51', 'GR-52',
    'GR-55',  // PROMOTED from ADVISORY (SIG-11: multi-coherence with perceptibility thresholds)
    'GR-67',
    'GR-78', 'GR-80', 'GR-82', 'GR-83',
    'GR-84'   // NEW (SIG-01: IMPROVEMENTS comment verification)
  ]; // 15 RECOMMENDED gates (see gate-manifest.json). GR-18 promoted to REQUIRED. GR-55 promoted from ADVISORY. GR-84 (IMPROVEMENTS comment) added.

  const collectedGateIds = new Set(allResults.map(r => r.gate));

  const missingRequired = REQUIRED_GATES.filter(id => !collectedGateIds.has(id));
  const presentRecommended = RECOMMENDED_GATES.filter(id => collectedGateIds.has(id));
  const missingRecommended = RECOMMENDED_GATES.filter(id => !collectedGateIds.has(id));

  const requiredComplete = missingRequired.length === 0;
  const recommendedSufficient = presentRecommended.length >= 5;

  // SIG-03: BV coverage extension — verify all BV gates were executed
  const BV_GATES = ['BV-01', 'BV-02', 'BV-03', 'BV-04', 'BV-05', 'BV-06', 'BV-07', 'BV-08'];
  const missingBV = BV_GATES.filter(id => !collectedGateIds.has(id));
  const bvComplete = missingBV.length === 0;

  const pass = requiredComplete && recommendedSufficient && bvComplete;

  return {
    gate: 'GR-48', name: 'Gate Coverage Completeness',
    status: pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: {
      totalCollected: collectedGateIds.size,
      requiredPresent: REQUIRED_GATES.length - missingRequired.length,
      requiredTotal: REQUIRED_GATES.length,
      missingRequired,
      recommendedPresent: presentRecommended.length,
      recommendedTotal: RECOMMENDED_GATES.length,
      missingRecommended,
      bvPresent: BV_GATES.length - missingBV.length,
      bvTotal: BV_GATES.length,
      missingBV
    },
    threshold: {
      requiredCoverage: '21/21 (100%)',
      recommendedCoverage: '>=5/15',
      bvCoverage: '8/8 (100%)'
    },
    evidence: 'OBSERVED',
    note: missingRequired.length > 0
      ? 'INCOMPLETE — missing REQUIRED gates: ' + missingRequired.join(', ')
      : missingBV.length > 0
        ? 'INCOMPLETE — missing BV gates: ' + missingBV.join(', ')
        : 'All REQUIRED and BV gates present'
  };
}

// GR-49: Gate Result File Integrity — non-Playwright process check
function checkGateResultIntegrity(resultFiles, resultData) {
  const issues = [];

  if (resultFiles.length === 0) {
    issues.push('No gate result file found');
  } else if (resultFiles.length > 1) {
    issues.push('Multiple gate result files found: ' + resultFiles.join(', '));
  }

  if (resultData) {
    const gateIds = resultData.map(r => r.gate);
    const seen = new Set();
    const duplicates = [];
    for (const id of gateIds) {
      if (seen.has(id)) duplicates.push(id);
      seen.add(id);
    }
    if (duplicates.length > 0) {
      issues.push('Duplicate gate IDs: ' + duplicates.join(', '));
    }

    const invalidIds = gateIds.filter(id => !/^(GR-\d{2}[a-z]?|BV-\d{2})$/.test(id));
    if (invalidIds.length > 0) {
      issues.push('Invalid gate ID format: ' + invalidIds.join(', '));
    }

    const missingFields = resultData.filter(r => !r.gate || !r.name || !r.status || !r.measured || !r.threshold);
    if (missingFields.length > 0) {
      issues.push('Results missing required fields: ' + missingFields.map(r => r.gate || 'unknown').join(', '));
    }
  }

  return {
    gate: 'GR-49', name: 'Gate Result File Integrity',
    status: issues.length === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { fileCount: resultFiles.length, issues },
    threshold: { files: 1, duplicates: 0, invalidFormats: 0 },
    evidence: 'OBSERVED'
  };
}

// =============================================================================
// SECTION 6: EXPERIENTIAL ENFORCEMENT GATES (GR-61, GR-62, GR-64)
// GR-61 and GR-62 run in orchestrator BEFORE/AFTER screenshot capture
// GR-64 runs in orchestrator AFTER weaver report
// GR-63 is in Section 2 (runGateRunner) — DOM check alongside GR-43
// =============================================================================

// GR-61: DPR Validation — runs BEFORE screenshot capture
// Source: pa-deployment.md Section 2.3a
// Tier: REQUIRED — wrong DPR invalidates all screenshots and PA verdicts
async function checkDPR(page) {
  const dpr = await page.evaluate(() => window.devicePixelRatio);
  if (dpr === 1) {
    return {
      gate: 'GR-61', name: 'DPR Validation',
      status: 'PASS',
      source: 'code',
      measured: { devicePixelRatio: dpr, correctionAttempted: false },
      threshold: { devicePixelRatio: 1 }
    };
  }
  // DPR > 1 (e.g., Retina display). Playwright viewport is already in CSS pixels,
  // so do NOT divide viewport dimensions by DPR (that would shrink the layout).
  // Instead, set deviceScaleFactor: 1 on the browser context. If that is not possible
  // at this point (context already created), document the DPR and advise the orchestrator
  // to recreate the browser context with { deviceScaleFactor: 1 }.
  // Attempt: Playwright allows setting deviceScaleFactor via context, not page.
  // We cannot change it here — flag it for the orchestrator.
  const viewport = page.viewportSize();
  return {
    gate: 'GR-61', name: 'DPR Validation',
    status: 'FAIL',
    source: 'code',
    measured: { devicePixelRatio: dpr, correctionAttempted: false,
      viewport: `${viewport.width}x${viewport.height}`,
      note: 'Playwright viewport is in CSS pixels — do NOT divide by DPR.' },
    threshold: { devicePixelRatio: 1 },
    note: 'BLOCKING — DPR is ' + dpr + '. Recreate browser context with { deviceScaleFactor: 1 } before screenshot capture. Do NOT resize viewport by DPR (viewport is already CSS pixels).'
  };
}

// GR-62: Screenshot Quality — runs AFTER screenshot capture, BEFORE PA deployment
// Source: pa-deployment.md Section 2.3a
// Tier: REQUIRED — blank screenshots invalidate PA auditor assessments
// Input: screenshotDir (path to screenshots/ directory with 1440/, 1024/, 768/ subdirs)
// Note: Uses Node.js fs/path — run in orchestrator context, not page.evaluate
function checkScreenshotQuality(screenshotDir) {
  const fs = require('fs');
  const path = require('path');
  const viewports = ['1440', '1024', '768'];
  const results = { viewports: {}, allPass: true };
  const BLANK_THRESHOLD_BYTES = 5000; // Blank PNGs compress to < 5KB

  for (const vp of viewports) {
    const vpDir = path.join(screenshotDir, vp);
    if (!fs.existsSync(vpDir)) {
      results.viewports[vp] = { exists: false, pass: false, reason: 'Directory not found' };
      results.allPass = false;
      continue;
    }
    const files = fs.readdirSync(vpDir).filter(f => f.endsWith('.png')).sort();
    if (files.length < 3) {
      results.viewports[vp] = { exists: true, fileCount: files.length, pass: false,
        reason: files.length === 0 ? 'No screenshots found' : 'Fewer than 3 screenshots (minimum required)' };
      results.allPass = false;
      continue;
    }
    const blankFlags = files.map(f => {
      const stat = fs.statSync(path.join(vpDir, f));
      return { file: f, size: stat.size, isBlank: stat.size < BLANK_THRESHOLD_BYTES };
    });
    const blankCount = blankFlags.filter(b => b.isBlank).length;
    const blankRatio = blankCount / files.length;
    let maxConsecutiveBlanks = 0, currentRun = 0;
    for (const bf of blankFlags) {
      if (bf.isBlank) { currentRun++; maxConsecutiveBlanks = Math.max(maxConsecutiveBlanks, currentRun); }
      else { currentRun = 0; }
    }
    const consecutivePass = maxConsecutiveBlanks <= 2;
    const ratioPass = blankRatio <= 0.20;
    results.viewports[vp] = {
      exists: true, fileCount: files.length, blankCount,
      blankRatio: blankRatio.toFixed(2), maxConsecutiveBlanks,
      consecutivePass, ratioPass, pass: consecutivePass && ratioPass,
      blankFiles: blankFlags.filter(b => b.isBlank).map(b => b.file)
    };
    if (!results.viewports[vp].pass) results.allPass = false;
  }

  return {
    gate: 'GR-62', name: 'Screenshot Quality',
    status: results.allPass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: results,
    threshold: { maxConsecutiveBlanks: 2, maxBlankRatio: 0.20, blankSizeThreshold: '5KB' },
    note: results.allPass ? 'All viewports pass' : 'BLOCKING — re-capture screenshots before deploying auditors.'
  };
}

// GR-64: Usability Priority Verification — runs AFTER weaver report
// Source: pa-weaver.md Section 4.5 (Priority Override Rule), artifact-orchestrator.md (circuit breaker)
// Tier: REQUIRED — verifies weaver followed priority override when auditors flagged usability issues
// Decision rule: If GR-64 FAIL and weaver verdict is RELEASE or POLISH, downgrade to IMPROVE.
// Input: auditorReports (array of 9 report strings), weaverReport (string)
function checkUsabilityPriority(auditorReports, weaverReport) {
  const USABILITY_PATTERNS = [
    /cannot\s+read/i, /illegib/i, /unreadab/i, /cannot\s+use/i,
    /inaccessib/i, /too\s+small\s+to\s+read/i, /impossible\s+to\s+read/i
  ];

  const auditorFlags = auditorReports.map((report, index) => {
    const matches = USABILITY_PATTERNS.filter(p => p.test(report));
    return { auditorIndex: index, flagged: matches.length > 0, matchCount: matches.length };
  });
  const flaggedCount = auditorFlags.filter(a => a.flagged).length;
  const TRIGGER_THRESHOLD = 3; // 3+ auditors = confirmed illegibility

  // Auto-pass if fewer than 3 auditors flagged usability issues
  if (flaggedCount < TRIGGER_THRESHOLD) {
    return {
      gate: 'GR-64', name: 'Usability Priority Verification',
      status: 'PASS',
      source: 'code',
      measured: { auditorsFlagged: flaggedCount, threshold: TRIGGER_THRESHOLD, triggerCondition: false,
        reason: 'Fewer than 3 auditors flagged usability issues — no priority override required' },
      threshold: { minAuditorFlags: TRIGGER_THRESHOLD }
    };
  }

  // 3+ flagged — verify weaver's Fix #1 addresses usability
  const USABILITY_FIX_TERMS = [
    /readab/i, /legib/i, /font.?size/i, /contrast/i,
    /text\s+size/i, /line.?height/i, /usab/i, /accessib/i
  ];
  const fixOneMatch = weaverReport.match(/(?:Fix\s*#?\s*1[.:]\s*|(?:^|\n)\s*1[.)]\s*)(.*?)(?=(?:Fix\s*#?\s*2|(?:^|\n)\s*2[.)]|\n\n|$))/is);
  const fixOneText = fixOneMatch ? fixOneMatch[1].trim() : '';
  const usabilityInFixOne = fixOneText.length > 0 && USABILITY_FIX_TERMS.some(p => p.test(fixOneText));

  return {
    gate: 'GR-64', name: 'Usability Priority Verification',
    status: usabilityInFixOne ? 'PASS' : 'FAIL',
    source: 'code',
    measured: {
      auditorsFlagged: flaggedCount,
      flaggedAuditors: auditorFlags.filter(a => a.flagged).map(a => a.auditorIndex),
      threshold: TRIGGER_THRESHOLD, triggerCondition: true,
      fixOneFound: fixOneText.length > 0, fixOneText: fixOneText.substring(0, 200), usabilityInFixOne
    },
    threshold: { minAuditorFlags: TRIGGER_THRESHOLD },
    note: usabilityInFixOne
      ? 'Priority Override Rule satisfied — Fix #1 addresses usability'
      : 'BLOCKING: 3+ auditors flagged usability but Fix #1 does not address it. If weaver verdict is RELEASE or POLISH, downgrade to IMPROVE. See pa-weaver.md Section 4.5.'
  };
}

// =============================================================================
// SECTION 6B: ITERATION GATES (GR-81, GR-82) + BUILDER INPUT CEILING (BV-07)
// =============================================================================

// GR-81: Prediction Suppression — ADVISORY
// Source: pa-weaver.md Section 5.6, ITEM-13
// Checks weaver report for predictive PA-05 language ("should bring PA-05 to", "expect PA-05", etc.)
// ADVISORY: flags but does not block
function checkPredictionSuppression(weaverReport) {
  const PREDICTION_PATTERNS = [
    /should\s+(?:bring|raise|improve|increase)\s+PA-?05/i,
    /expect\s+PA-?05\s+(?:to\s+)?(?:reach|be|improve)/i,
    /PA-?05\s+(?:should|will|would)\s+(?:reach|be|improve|increase)/i,
    /predict(?:ed|ing)?\s+PA-?05/i,
    /estimated?\s+PA-?05\s+after/i,
    /projected?\s+PA-?05/i
  ];
  const matches = PREDICTION_PATTERNS.filter(p => p.test(weaverReport));
  return {
    gate: 'GR-81', name: 'Prediction Suppression',
    status: matches.length === 0 ? 'PASS' : 'WARNING',
    source: 'code',
    measured: { predictiveStatements: matches.length, patterns: matches.map(p => p.source) },
    threshold: { maxPredictions: 0 },
    evidence: 'OBSERVED',
    note: matches.length > 0
      ? 'ADVISORY: Weaver report contains predictive PA-05 language. Report what IS, not what MIGHT BE.'
      : 'No predictive PA-05 language detected.'
  };
}

// GR-82: Finding Status Map Verification — RECOMMENDED (cycle >= 2 only)
// Source: pa-weaver.md Section 5.5, ITEM-13
// Checks that weaver report includes a Finding Status Map table for iteration cycles
function checkFindingStatusMap(weaverReport, iterationCycle) {
  // Only applies for cycle >= 2
  if (iterationCycle < 2) {
    return {
      gate: 'GR-82', name: 'Finding Status Map',
      status: 'PASS',
      source: 'code',
      measured: { cycle: iterationCycle, applicable: false },
      threshold: { requiredCycle: 2 },
      note: 'Not applicable — cycle 1 (initial pass).'
    };
  }
  const hasTable = /Finding\s*Status\s*Map/i.test(weaverReport) ||
    /\|\s*(?:Pass|Finding).*\|\s*(?:Status|FIXED|IMPROVED|UNCHANGED|REGRESSION)/i.test(weaverReport);
  const hasStatusKeywords = /FIXED|IMPROVED|UNCHANGED|REGRESSION/i.test(weaverReport);
  const hasRegression = /REGRESSION/i.test(weaverReport);

  return {
    gate: 'GR-82', name: 'Finding Status Map',
    status: (hasTable && hasStatusKeywords) ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { cycle: iterationCycle, hasTable, hasStatusKeywords, hasRegression },
    threshold: { requiredCycle: 2, requiresTable: true, requiresStatusKeywords: true },
    evidence: 'OBSERVED',
    note: !(hasTable && hasStatusKeywords)
      ? 'FAIL: Weaver report for cycle ' + iterationCycle + ' must include Finding Status Map table with FIXED/IMPROVED/UNCHANGED/REGRESSION status per finding.'
      : hasRegression
        ? 'WARNING: REGRESSION detected — flag as BLOCKING and consider HALT.'
        : 'Finding Status Map present with status tracking.'
  };
}

// BV-07: Builder Input Volume Ceiling
// Source: ITEM-14, Principle #10 (builder input volume inversely correlated with quality)
// Counts total lines of builder-facing input files. Ceiling: 2,500 lines.
// Input: builderInputFiles — array of { name: string, lineCount: number }
function checkBuilderInputVolume(builderInputFiles) {
  const totalLines = builderInputFiles.reduce((sum, f) => sum + f.lineCount, 0);
  const ceiling = 2500;
  return {
    gate: 'BV-07', name: 'Builder Input Volume Ceiling',
    status: totalLines <= ceiling ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { totalLines, files: builderInputFiles, ceiling },
    threshold: { maxLines: ceiling },
    evidence: 'OBSERVED',
    note: totalLines > ceiling
      ? 'FAIL: Builder-facing input is ' + totalLines + ' lines (ceiling: ' + ceiling + '). Compress or remove content before spawning builder.'
      : 'Builder input volume within ceiling: ' + totalLines + '/' + ceiling + ' lines.'
  };
}

// =============================================================================
// SECTION 6B2: BRIEF-OUTPUT DIFF + NARRATION GATES (BV-08, GR-83)
// BV-08: Compares brief spec against HTML/CSS output to surface dropped items
// GR-83: Verifies INTENT comment count and coverage in builder output
// Input: BV-08 takes (briefText, htmlText), GR-83 takes (htmlText)
// =============================================================================

// INTENT Comment Parser — shared utility for BV-08 and GR-83
function parseIntentComments(html) {
  const intentPattern = /<!--\s*INTENT\s+\[([^\]]+)\]\s+([^|]+)\|([^|]+)\|([^|]+)\|([^>]+)-->/g;
  const notImplPattern = /<!--\s*INTENT\s+\[NOT-IMPL\]\s+([^|]+)\|([^|]+)\|([^|]+)\|([^>]+)-->/g;

  const intents = [];
  let match;

  while ((match = intentPattern.exec(html)) !== null) {
    intents.push({
      disposition: match[1].trim(),
      location: match[2].trim(),
      decision: match[3].trim(),
      briefRef: match[4].trim(),
      tradeOff: match[5].trim(),
      type: 'implemented'
    });
  }

  while ((match = notImplPattern.exec(html)) !== null) {
    intents.push({
      disposition: 'NOT-IMPL',
      what: match[1].trim(),
      briefRef: match[2].trim(),
      reason: match[3].trim(),
      reconsiderCondition: match[4].trim(),
      type: 'deliberate-omission'
    });
  }

  return intents;
}

// GR-83: INTENT Comment Count Verification — RECOMMENDED
// Source: D2 narration protocol (d2-narration-spec.md Section 4.2)
// Checks builder HTML for INTENT comments: count, disposition coverage, metaphor, omissions
// Tier: RECOMMENDED — under-narration degrades brief-diff gate accuracy but doesn't block
function verifyIntentComments(htmlText) {
  const intents = parseIntentComments(htmlText);
  const count = intents.length;

  let status = 'PASS';
  let message = '';

  if (count < 10) {
    status = 'FAIL';
    message = 'Only ' + count + ' INTENT comments (minimum 15). Major decisions are unrecorded — brief-diff gate cannot distinguish deliberate from accidental omission.';
  } else if (count < 15) {
    status = 'WARNING';
    message = count + ' INTENT comments (target 17-22). Some decisions may be unrecorded.';
  } else if (count > 30) {
    status = 'WARNING';
    message = count + ' INTENT comments (target 17-22). Over-narration may have consumed creative attention.';
  } else {
    message = count + ' INTENT comments (target 17-22).';
  }

  // Check for required categories
  const hasMetaphor = intents.some(i => i.disposition === 'METAPHOR');
  const hasNotImpl = intents.some(i => i.type === 'deliberate-omission');
  const dispositions = new Set(intents.filter(i => i.disposition.match(/^D-0[1-9]$/)).map(i => i.disposition));

  const dispositionsMissing = ['D-01','D-02','D-03','D-04','D-05','D-06','D-07','D-08','D-09']
    .filter(d => !dispositions.has(d));

  // Fail if zero D-XX dispositions narrated (builder skipped the protocol entirely)
  if (dispositions.size === 0 && count > 0) {
    status = 'FAIL';
    message = 'Zero disposition INTENT comments. Builder did not narrate any D-01 through D-09 decisions.';
  }

  return {
    gate: 'GR-83', name: 'INTENT Comment Count',
    status: status,
    source: 'code',
    measured: {
      intentCount: count,
      hasMetaphor,
      hasNotImpl,
      dispositionsCovered: [...dispositions].sort(),
      dispositionsMissing,
      deliberateOmissions: intents.filter(i => i.type === 'deliberate-omission').length
    },
    threshold: {
      minCount: 15,
      targetRange: '17-22',
      maxCount: 30,
      requiresDispositions: true
    },
    evidence: 'OBSERVED',
    note: message
  };
}

// BV-08: Brief-Output Diff — RECOMMENDED
// Source: D2 crack dimension (d2-brief-diff-gate.md)
// Compares brief spec against HTML/CSS output across 6 dimensions.
// Input: briefText (string), htmlText (string)
// Output: single gate result with droppedItems array for IMPROVE builder
function checkBriefOutputDiff(briefText, htmlText) {
  const dimensions = {};
  const briefLower = briefText.toLowerCase();
  const htmlLower = htmlText.toLowerCase();

  // --- Helper: extract CSS from HTML (inline <style> blocks) ---
  const styleBlocks = htmlText.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
  const cssText = styleBlocks.map(b => b.replace(/<\/?style[^>]*>/gi, '')).join('\n');
  const cssLower = cssText.toLowerCase();

  // --- Helper: parse INTENT [NOT-IMPL] for deliberate omission exclusion ---
  const intents = parseIntentComments(htmlText);
  const deliberateOmissions = intents
    .filter(i => i.type === 'deliberate-omission')
    .map(i => (i.what || '').toLowerCase());

  // =========================================================================
  // DIMENSION 1: Zone Count
  // =========================================================================
  const briefZoneRefs = new Set();
  const zoneAssignmentPattern = /\bZ(\d+)\b/g;
  let zm;
  while ((zm = zoneAssignmentPattern.exec(briefText)) !== null) {
    briefZoneRefs.add(parseInt(zm[1]));
  }
  const briefZoneCount = briefZoneRefs.size;

  const htmlZoneClasses = new Set();
  const htmlZonePatterns = [
    /class="[^"]*zone-([a-z][a-z0-9-]*)/gi,
    /class="[^"]*z(\d+)-section/gi
  ];
  for (const pat of htmlZonePatterns) {
    let m;
    while ((m = pat.exec(htmlText)) !== null) {
      htmlZoneClasses.add(m[1]);
    }
  }
  const htmlZoneCount = htmlZoneClasses.size;
  const zoneDelta = Math.abs(briefZoneCount - htmlZoneCount);

  dimensions.zones = {
    briefExpected: briefZoneCount,
    htmlFound: htmlZoneCount,
    delta: zoneDelta,
    pass: zoneDelta <= 1
  };

  // =========================================================================
  // DIMENSION 2: Zone Backgrounds (hex matching)
  // =========================================================================
  const bgSectionMatch = briefText.match(
    /(?:Zone\s*Background|Background\s*Assignment|Zone\s*assignments)([\s\S]*?)(?=^#+\s*(?:Multi|Transition|Structural|Density|Content-Form|Creative|CSS Value)|---)/im
  );
  const bgSection = bgSectionMatch ? bgSectionMatch[0] : '';
  const briefBgHexes = new Set();
  const bgHexPattern = /#([0-9a-fA-F]{6})\b/g;
  let hm;
  while ((hm = bgHexPattern.exec(bgSection)) !== null) {
    briefBgHexes.add('#' + hm[1].toUpperCase());
  }

  const cssHexes = new Set();
  const cssHexPattern = /#([0-9a-fA-F]{6})\b/g;
  let ch;
  while ((ch = cssHexPattern.exec(cssText)) !== null) {
    cssHexes.add('#' + ch[1].toUpperCase());
  }

  const bgFound = [];
  const bgMissing = [];
  for (const hex of briefBgHexes) {
    if (cssHexes.has(hex)) {
      bgFound.push(hex);
    } else {
      bgMissing.push(hex);
    }
  }
  const bgCoverage = briefBgHexes.size > 0 ? bgFound.length / briefBgHexes.size : 1;

  dimensions.backgrounds = {
    briefExpected: [...briefBgHexes],
    found: bgFound,
    missing: bgMissing,
    coverage: parseFloat((bgCoverage * 100).toFixed(1)),
    pass: bgCoverage >= 0.8
  };

  // =========================================================================
  // DIMENSION 3: Typography Specs
  // =========================================================================
  const briefTypoSpecs = [];
  const tier3Start = briefText.search(/^#+\s*Tier\s*3/im);
  const typoSection = tier3Start >= 0 ? briefText.substring(tier3Start) : briefText;

  // Font sizes
  const fontSizePattern = /\b(\d+(?:\.\d+)?)\s*px\b/g;
  let fszMatch;
  while ((fszMatch = fontSizePattern.exec(typoSection)) !== null) {
    const val = parseFloat(fszMatch[1]);
    if (val >= 10 && val <= 96) {
      briefTypoSpecs.push({ type: 'font-size', value: val, unit: 'px' });
    }
  }
  // Line heights
  const lineHeightPattern = /line-height[:\s]+(\d+\.\d+)/gi;
  let lhMatch;
  while ((lhMatch = lineHeightPattern.exec(typoSection)) !== null) {
    briefTypoSpecs.push({ type: 'line-height', value: parseFloat(lhMatch[1]), unit: '' });
  }
  // Letter spacing
  const lsPattern = /letter-spacing[:\s]+(\d+\.\d+)\s*em/gi;
  let lsMatch;
  while ((lsMatch = lsPattern.exec(typoSection)) !== null) {
    briefTypoSpecs.push({ type: 'letter-spacing', value: parseFloat(lsMatch[1]), unit: 'em' });
  }

  // Deduplicate
  const uniqueTypoSpecs = [];
  const seenTypo = new Set();
  for (const spec of briefTypoSpecs) {
    const key = spec.type + ':' + spec.value;
    if (!seenTypo.has(key)) {
      seenTypo.add(key);
      uniqueTypoSpecs.push(spec);
    }
  }

  // Check CSS for each spec (with tolerance)
  const typoFound = [];
  const typoMissing = [];
  for (const spec of uniqueTypoSpecs) {
    let found = false;
    if (spec.type === 'font-size') {
      const variants = [spec.value - 1, spec.value, spec.value + 1];
      for (const v of variants) {
        if (cssText.includes(v + 'px')) { found = true; break; }
      }
      // rem equivalents (base 16px)
      const remVariants = [
        parseFloat((spec.value / 16).toFixed(4)) + 'rem',
        parseFloat((spec.value / 16).toFixed(3)) + 'rem',
        parseFloat((spec.value / 16).toFixed(2)) + 'rem',
        parseFloat((spec.value / 16).toFixed(1)) + 'rem'
      ];
      for (const rv of remVariants) {
        if (cssText.includes(rv)) { found = true; break; }
      }
    } else if (spec.type === 'line-height') {
      const variants = [
        (spec.value - 0.1).toFixed(1),
        spec.value.toFixed(1),
        (spec.value + 0.1).toFixed(1)
      ];
      for (const v of variants) {
        if (cssText.includes('line-height: ' + v) || cssText.includes('line-height:' + v)) {
          found = true; break;
        }
      }
    } else if (spec.type === 'letter-spacing') {
      const variants = [
        (spec.value - 0.005).toFixed(3),
        spec.value.toFixed(3),
        spec.value.toFixed(2),
        (spec.value + 0.005).toFixed(3)
      ];
      for (const v of variants) {
        if (cssText.includes(parseFloat(v) + 'em')) { found = true; break; }
      }
    }
    if (found) {
      typoFound.push(spec);
    } else {
      typoMissing.push(spec);
    }
  }
  const typoCoverage = uniqueTypoSpecs.length > 0 ? typoFound.length / uniqueTypoSpecs.length : 1;

  dimensions.typography = {
    briefExpected: uniqueTypoSpecs.length,
    found: typoFound.length,
    missing: typoMissing,
    coverage: parseFloat((typoCoverage * 100).toFixed(1)),
    pass: typoCoverage >= 0.8
  };

  // =========================================================================
  // DIMENSION 4: Component Types
  // =========================================================================
  const componentSynonyms = {
    'callout':       ['.callout', 'class="callout', 'class="aside', '.aside'],
    'pull-quote':    ['.pull-quote', '.pullquote', 'blockquote class=', '.blockquote-highlight', '.epigraph'],
    'table':         ['<table', '.data-table', '.table-wrapper', '.key-value'],
    'code-block':    ['<pre', '<code', '.code-block', '.code-wrapper'],
    'accordion':     ['<details', '<summary', '.accordion', '.expandable'],
    'grid':          ['.grid', '.bento', '.comparison-grid', 'display: grid', 'display:grid'],
    'timeline':      ['.timeline', '.step-list', '.numbered-flow'],
    'card':          ['.card', '.stat-block'],
    'footnote':      ['.footnote', '.citation', '.source-link'],
    'highlight':     ['.highlight-box', '.highlight', '.inversion'],
    'nav':           ['.section-nav', 'nav class=', '.back-to-top'],
    'definition':    ['.definition', '<dl', '<dt'],
    'checklist':     ['.checklist', 'type="checkbox'],
    'multi-column':  ['column-count', 'columns:', '.multi-col', 'grid-template-columns']
  };

  const briefComponents = new Set();
  for (const [compName] of Object.entries(componentSynonyms)) {
    const briefPatterns = [compName, compName.replace('-', ' '), compName.replace('-', ''), compName + 's'];
    for (const bp of briefPatterns) {
      if (briefLower.includes(bp.toLowerCase())) {
        briefComponents.add(compName);
        break;
      }
    }
  }

  const compFound = [];
  const compMissing = [];
  for (const comp of briefComponents) {
    const synonyms = componentSynonyms[comp] || [];
    let found = false;
    for (const syn of synonyms) {
      if (htmlLower.includes(syn.toLowerCase())) { found = true; break; }
    }
    if (found) { compFound.push(comp); } else { compMissing.push(comp); }
  }
  const compCoverage = briefComponents.size > 0 ? compFound.length / briefComponents.size : 1;

  dimensions.components = {
    briefExpected: [...briefComponents],
    found: compFound,
    missing: compMissing,
    coverage: parseFloat((compCoverage * 100).toFixed(1)),
    pass: compCoverage >= 0.8
  };

  // =========================================================================
  // DIMENSION 5: Metaphor Naming (CSS custom properties)
  // =========================================================================
  const briefCustomProps = new Set();
  const customPropPattern = /--([a-z][a-z0-9-]+)/g;
  const metaphorSectionMatch = briefText.match(
    /(?:Structural\s*Metaphor|CSS\s*custom\s*properties)([\s\S]*?)(?=^#+\s|---)/im
  );
  const metaphorSection = metaphorSectionMatch ? metaphorSectionMatch[0] : '';
  let cpMatch;
  while ((cpMatch = customPropPattern.exec(metaphorSection)) !== null) {
    const name = cpMatch[1];
    if (!name.startsWith('space-') && !name.startsWith('border-') &&
        !name.startsWith('font-') && !name.startsWith('color-')) {
      briefCustomProps.add('--' + name);
    }
  }

  const cssCustomProps = new Set();
  const cssPropPattern = /--([a-z][a-z0-9-]+)/g;
  let cssCpMatch;
  while ((cssCpMatch = cssPropPattern.exec(cssText)) !== null) {
    cssCustomProps.add('--' + cssCpMatch[1]);
  }

  const metaFound = [];
  const metaMissing = [];
  for (const prop of briefCustomProps) {
    if (cssCustomProps.has(prop)) { metaFound.push(prop); } else { metaMissing.push(prop); }
  }
  const metaCoverage = briefCustomProps.size > 0 ? metaFound.length / briefCustomProps.size : 1;

  dimensions.metaphorNaming = {
    briefExpected: [...briefCustomProps],
    found: metaFound,
    missing: metaMissing,
    coverage: parseFloat((metaCoverage * 100).toFixed(1)),
    pass: metaCoverage >= 0.8
  };

  // =========================================================================
  // DIMENSION 6: Disposition CSS Techniques
  // =========================================================================
  const briefDispositionCSS = [];
  const dispSectionPattern = /###\s*D-0(\d)[:\s][\s\S]*?(?=###\s*D-0\d|###\s*Hover|---|\n##\s|$)/gi;
  let dispMatch;
  while ((dispMatch = dispSectionPattern.exec(briefText)) !== null) {
    const dispId = 'D-0' + dispMatch[1];
    const dispText = dispMatch[0];
    const cssPatterns = [
      /`([a-z-]+:\s*[^`]+)`/gi,
      /([a-z-]+):\s*(var\(--[^)]+\))/gi,
      /translateY\([^)]+\)/gi,
      /font-size:\s*\d+px/gi,
      /line-height:\s*[\d.]+/gi,
      /border[a-z-]*:\s*\d+px/gi,
      /transition:\s*[^;]+/gi
    ];
    for (const pat of cssPatterns) {
      let cssMatch;
      while ((cssMatch = pat.exec(dispText)) !== null) {
        const value = cssMatch[0].replace(/`/g, '').trim();
        if (value.length > 3 && value.length < 120) {
          briefDispositionCSS.push({ disposition: dispId, css: value });
        }
      }
    }
  }

  // Hover section
  const hoverSection = briefText.match(/###?\s*Hover\s*Behavior[\s\S]*?(?=###\s*D-|---|\n##\s|$)/i);
  if (hoverSection) {
    const hoverCSS = hoverSection[0].match(/`([a-z-]+:\s*[^`]+)`/gi) || [];
    for (const hc of hoverCSS) {
      const value = hc.replace(/`/g, '').trim();
      if (value.length > 3 && value.length < 120) {
        briefDispositionCSS.push({ disposition: 'D-07-hover', css: value });
      }
    }
  }

  // Check CSS for disposition patterns
  const dispFound = [];
  const dispMissing = [];
  for (const item of briefDispositionCSS) {
    const propMatch = item.css.match(/^([a-z-]+)\s*:/i);
    if (propMatch) {
      const propName = propMatch[1].toLowerCase();
      if (cssLower.includes(propName + ':') || cssLower.includes(propName + ' :')) {
        dispFound.push(item);
      } else {
        dispMissing.push(item);
      }
    } else {
      const searchTerm = item.css.toLowerCase().split('(')[0].trim();
      if (cssLower.includes(searchTerm)) {
        dispFound.push(item);
      } else {
        dispMissing.push(item);
      }
    }
  }
  const dispCoverage = briefDispositionCSS.length > 0 ? dispFound.length / briefDispositionCSS.length : 1;

  dimensions.dispositionCSS = {
    briefExpected: briefDispositionCSS.length,
    found: dispFound.length,
    missing: dispMissing.slice(0, 10),
    coverage: parseFloat((dispCoverage * 100).toFixed(1)),
    pass: dispCoverage >= 0.8
  };

  // =========================================================================
  // AGGREGATE
  // =========================================================================
  const allDimensions = [
    dimensions.zones, dimensions.backgrounds, dimensions.typography,
    dimensions.components, dimensions.metaphorNaming, dimensions.dispositionCSS
  ];
  const passingDimensions = allDimensions.filter(d => d.pass).length;
  const totalDimensions = allDimensions.length;
  const overallPass = passingDimensions === totalDimensions;

  const coverageValues = [
    dimensions.backgrounds.coverage, dimensions.typography.coverage,
    dimensions.components.coverage, dimensions.metaphorNaming.coverage,
    dimensions.dispositionCSS.coverage
  ];
  const avgCoverage = coverageValues.reduce((a, b) => a + b, 0) / coverageValues.length;

  // Build dropped items list (actionable output for IMPROVE)
  const droppedItems = [];
  if (!dimensions.zones.pass) {
    droppedItems.push('ZONES: Brief specified ' + dimensions.zones.briefExpected + ' zones, HTML has ' + dimensions.zones.htmlFound);
  }
  for (const hex of dimensions.backgrounds.missing) {
    // Skip if covered by INTENT [NOT-IMPL]
    if (deliberateOmissions.some(o => o.includes(hex.toLowerCase()))) continue;
    droppedItems.push('BACKGROUND: ' + hex + ' specified in brief but not found in CSS');
  }
  for (const spec of dimensions.typography.missing) {
    droppedItems.push('TYPOGRAPHY: ' + spec.type + ' ' + spec.value + spec.unit + ' specified but not found in CSS');
  }
  for (const comp of dimensions.components.missing) {
    if (deliberateOmissions.some(o => o.includes(comp))) continue;
    droppedItems.push('COMPONENT: "' + comp + '" mentioned in brief but no matching element in HTML');
  }
  for (const prop of dimensions.metaphorNaming.missing) {
    droppedItems.push('METAPHOR: custom property ' + prop + ' specified but not in CSS');
  }
  for (const item of dimensions.dispositionCSS.missing.slice(0, 5)) {
    droppedItems.push('DISPOSITION: ' + item.disposition + ' technique "' + item.css + '" not found in CSS');
  }

  return {
    gate: 'BV-08', name: 'Brief-Output Diff',
    status: overallPass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: {
      dimensions,
      passingDimensions,
      totalDimensions,
      averageCoverage: parseFloat(avgCoverage.toFixed(1))
    },
    threshold: {
      minCoveragePerDimension: '80%',
      zoneTolerance: '+-1',
      fontSizeTolerance: '+-1px',
      lineHeightTolerance: '+-0.1',
      letterSpacingTolerance: '+-0.005em'
    },
    details: {
      droppedItems,
      droppedCount: droppedItems.length,
      dimensionSummary: {
        zones: dimensions.zones.htmlFound + '/' + dimensions.zones.briefExpected + ' zones (' + (dimensions.zones.pass ? 'PASS' : 'FAIL') + ')',
        backgrounds: dimensions.backgrounds.coverage + '% coverage (' + (dimensions.backgrounds.pass ? 'PASS' : 'FAIL') + ')',
        typography: dimensions.typography.coverage + '% coverage (' + (dimensions.typography.pass ? 'PASS' : 'FAIL') + ')',
        components: dimensions.components.coverage + '% coverage (' + (dimensions.components.pass ? 'PASS' : 'FAIL') + ')',
        metaphorNaming: dimensions.metaphorNaming.coverage + '% coverage (' + (dimensions.metaphorNaming.pass ? 'PASS' : 'FAIL') + ')',
        dispositionCSS: dimensions.dispositionCSS.coverage + '% coverage (' + (dimensions.dispositionCSS.pass ? 'PASS' : 'FAIL') + ')'
      }
    },
    evidence: 'OBSERVED',
    note: 'RECOMMENDED: Compares brief spec against HTML/CSS output to surface dropped items. 80% threshold per dimension. droppedItems array is the actionable output for IMPROVE builders.'
  };
}

// GR-84: IMPROVEMENTS Comment Verification — RECOMMENDED (SIG-01)
// Source: recipe-traceability Finding 1
// Phase: Post-build text-only (step 1.95)
// Input: htmlText (string)
// Checks for <!-- IMPROVEMENTS: ... --> comment with >= 5 items, >= 1 HIGH, >= 2 distinct tags
function checkImprovementsComment(htmlText) {
  const match = htmlText.match(/<!--\s*IMPROVEMENTS:\s*([\s\S]*?)-->/i);
  if (!match) {
    return {
      gate: 'GR-84', name: 'IMPROVEMENTS Comment',
      status: 'FAIL', source: 'code',
      measured: { found: false, itemCount: 0, highCount: 0 },
      threshold: { minItems: 5, comment: 'required' }
    };
  }
  const text = match[1].trim();
  const lines = text.split('\n').filter(l => l.trim().length > 0);
  // Count items (lines starting with number, dash, or bracket)
  const items = lines.filter(l => /^\s*(\d+[\.\)]|\-|\[)/.test(l));
  const highCount = items.filter(l => /\bHIGH\b/i.test(l)).length;
  const medCount = items.filter(l => /\bMED(IUM)?\b/i.test(l)).length;
  const lowCount = items.filter(l => /\bLOW\b/i.test(l)).length;
  const hasMinItems = items.length >= 5;
  const hasAtLeastOneHigh = highCount >= 1;
  // Recipe requires: minimum 5 items, at least 1 HIGH, at least 2 different tags
  const tags = new Set();
  items.forEach(l => {
    const tagMatch = l.match(/\[(D-\d+|STRUCTURAL|MECHANICAL|ACCESSIBILITY|COMPOSITIONAL)\]/i);
    if (tagMatch) tags.add(tagMatch[1].toUpperCase());
  });
  const pass = hasMinItems && hasAtLeastOneHigh && tags.size >= 2;
  return {
    gate: 'GR-84', name: 'IMPROVEMENTS Comment',
    status: pass ? 'PASS' : 'FAIL', source: 'code',
    measured: {
      found: true, itemCount: items.length,
      highCount, medCount, lowCount,
      distinctTags: tags.size, tagList: [...tags]
    },
    threshold: { minItems: 5, minHighCount: 1, minDistinctTags: 2 }
  };
}

// =============================================================================
// SECTION 6C: ITERATION INFRASTRUCTURE GATES (GR-78, GR-79, GR-80)
// GR-78: Builder Residual Artifact — validates RESIDUAL HTML comment
// GR-79: IMPROVE File Naming/Completion — verifies all iteration artifacts exist
// GR-80: Iteration Log Auto-Fill — populates tracker iteration log table
// =============================================================================

// GR-78: Builder Residual Artifact — RECOMMENDED
// Source: ITEM-05 (RESIDUAL definition) + ITEM-08 (gate enforcement)
// Checks HTML for <!-- RESIDUAL: ... --> comment with >= 50 chars and >= 3 of 4 section keywords
function checkResidualArtifact(htmlText) {
  const residualMatch = htmlText.match(/<!--\s*RESIDUAL:([\s\S]*?)-->/);
  if (!residualMatch) {
    return {
      gate: 'GR-78', name: 'Builder Residual Artifact',
      tier: 'RECOMMENDED',
      status: 'FAIL',
      source: 'code',
      measured: { found: false, length: 0, sectionCount: 0 },
      threshold: { minLength: 50, minSections: 3 },
      evidence: 'OBSERVED',
      note: 'FAIL: No <!-- RESIDUAL: ... --> comment found in HTML.'
    };
  }

  const content = residualMatch[1].trim();
  const sectionPatterns = [
    /preserv|kept/i,
    /chang|modifi/i,
    /next|would|future/i,
    /trade|sacrific|compromis/i
  ];
  const sectionsFound = sectionPatterns.filter(p => p.test(content));

  const pass = content.length >= 50 && sectionsFound.length >= 3;
  return {
    gate: 'GR-78', name: 'Builder Residual Artifact',
    tier: 'RECOMMENDED',
    status: pass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { found: true, length: content.length, sectionCount: sectionsFound.length, sectionsMatched: sectionPatterns.map((p, i) => ({ pattern: ['preserved/kept', 'changed/modified', 'next/would/future', 'trade/sacrifice/compromise'][i], found: p.test(content) })) },
    threshold: { minLength: 50, minSections: 3 },
    evidence: 'OBSERVED',
    note: pass
      ? 'RESIDUAL artifact present (' + content.length + ' chars, ' + sectionsFound.length + '/4 sections).'
      : 'FAIL: RESIDUAL artifact ' + (content.length < 50 ? 'too short (' + content.length + ' chars, need >= 50)' : '') + (sectionsFound.length < 3 ? (content.length < 50 ? ' and ' : '') + 'too few sections (' + sectionsFound.length + '/4, need >= 3)' : '') + '.'
  };
}

// GR-79: IMPROVE File Naming/Completion — REQUIRED
// Source: ITEM-06 (naming convention + completion enforcement)
// For cycle >= 2, checks that all expected iteration artifacts exist with correct suffix
// Input: outputDir (path to build output), iterationCycle (number)
function checkImproveCompletion(outputDir, iterationCycle) {
  // Not applicable for cycle 1 (initial pass)
  if (iterationCycle < 2) {
    return {
      gate: 'GR-79', name: 'IMPROVE File Completion',
      tier: 'REQUIRED',
      status: 'PASS',
      source: 'code',
      measured: { cycle: iterationCycle, applicable: false },
      threshold: { requiredCycle: 2 },
      evidence: 'OBSERVED',
      note: 'Not applicable — cycle 1 (initial pass).'
    };
  }

  const fs = require('fs');
  const path = require('path');

  // Determine suffix: cycle 2 = -improve, cycle 3 = -improve-2
  const suffix = iterationCycle === 2 ? '-improve' : '-improve-' + (iterationCycle - 1);

  // Expected iteration artifacts
  const expectedFiles = [
    ...['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].map(l => 'p3b-pa-auditor-' + l + suffix + '.md'),
    'p3b-integrative' + suffix + '.md',
    'p3c-weaver-diagnostic' + suffix + '.md',
    'p3c-weaver-artistic' + suffix + '.md',
    'p3a-gate-results' + suffix + '.json'
  ];

  const missing = expectedFiles.filter(f => !fs.existsSync(path.join(outputDir, f)));

  return {
    gate: 'GR-79', name: 'IMPROVE File Completion',
    tier: 'REQUIRED',
    status: missing.length === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { cycle: iterationCycle, suffix, expectedCount: expectedFiles.length, missingCount: missing.length, missingFiles: missing },
    threshold: { requiredCycle: 2, allFilesPresent: true },
    evidence: 'OBSERVED',
    note: missing.length === 0
      ? 'All ' + expectedFiles.length + ' iteration artifacts present for cycle ' + iterationCycle + '.'
      : 'FAIL: ' + missing.length + '/' + expectedFiles.length + ' iteration artifacts missing for cycle ' + iterationCycle + ': ' + missing.join(', ')
  };
}

// GR-80: Iteration Log Auto-Fill — RECOMMENDED
// Source: ITEM-10 (auto-fill eliminates blank-tracker problem)
// After each cycle's gate run, fills the tracker's Iteration Log table row
// Input: trackerText (string), iterationCycle (number), pa05Score, tier5Score, gatePassPercent, fixCount, verdict, decision
// Returns: { ...gateResult, updatedTrackerText }
// Note: This is a WRITE gate — it returns modified tracker text for the orchestrator to save.
function checkIterationLogAutoFill(trackerText, iterationCycle, pa05Score, tier5Score, gatePassPercent, fixCount, verdict, decision) {
  if (!trackerText) {
    return {
      gate: 'GR-80', name: 'Iteration Log Auto-Fill',
      tier: 'RECOMMENDED',
      status: 'FAIL',
      source: 'code',
      measured: { cycle: iterationCycle, trackerProvided: false },
      threshold: {},
      evidence: 'OBSERVED',
      note: 'FAIL: No tracker text provided.',
      updatedTrackerText: null
    };
  }

  // Find the Iteration Log table header
  const tableHeaderPattern = /\|\s*Cycle\s*\|\s*PA-05\s*\|/;
  if (!tableHeaderPattern.test(trackerText)) {
    return {
      gate: 'GR-80', name: 'Iteration Log Auto-Fill',
      tier: 'RECOMMENDED',
      status: 'FAIL',
      source: 'code',
      measured: { cycle: iterationCycle, tableFound: false },
      threshold: {},
      evidence: 'OBSERVED',
      note: 'FAIL: No Iteration Log table found in tracker (expected | Cycle | PA-05 | header).',
      updatedTrackerText: trackerText
    };
  }

  // Find the row for the current cycle and fill in placeholder values
  // Table rows look like: | 1 | ___ | ___ | ___ | ___ | ___ | ___ |
  const cycleRowPattern = new RegExp('\\|\\s*' + iterationCycle + '\\s*\\|[^\\n]*');
  const cycleRowMatch = trackerText.match(cycleRowPattern);

  if (!cycleRowMatch) {
    return {
      gate: 'GR-80', name: 'Iteration Log Auto-Fill',
      tier: 'RECOMMENDED',
      status: 'PASS',
      source: 'code',
      measured: { cycle: iterationCycle, rowFound: false, action: 'no-row-to-fill' },
      threshold: {},
      evidence: 'OBSERVED',
      note: 'No row for cycle ' + iterationCycle + ' found in Iteration Log. Table may need row added.',
      updatedTrackerText: trackerText
    };
  }

  // Build replacement row with actual values
  const newRow = '| ' + iterationCycle + ' | ' + pa05Score + ' | ' + tier5Score + ' | ' + gatePassPercent + ' | ' + fixCount + ' | ' + verdict + ' | ' + decision + ' |';
  const updatedText = trackerText.replace(cycleRowPattern, newRow);

  return {
    gate: 'GR-80', name: 'Iteration Log Auto-Fill',
    tier: 'RECOMMENDED',
    status: 'PASS',
    source: 'code',
    measured: { cycle: iterationCycle, rowFound: true, filled: { pa05Score, tier5Score, gatePassPercent, fixCount, verdict, decision } },
    threshold: {},
    evidence: 'OBSERVED',
    note: 'Iteration Log row ' + iterationCycle + ' auto-filled: PA-05=' + pa05Score + ', Verdict=' + verdict + ', Decision=' + decision + '.',
    updatedTrackerText: updatedText
  };
}

// =============================================================================
// SECTION 7: ADDITIONAL UTILITY GATES (A-03 visible content, C-04 fallback)
// =============================================================================

// A-03: checkVisibleContent(screenshotDir)
// Reads screenshot files from a directory. For each, checks file size.
// If < 5KB, flags as "low content." If >= 3 consecutive screenshots < 5KB: WARNING.
function checkVisibleContent(screenshotDir) {
  const fs = require('fs');
  const path = require('path');
  const viewports = ['1440', '1024', '768'];
  const warnings = [];
  for (const vp of viewports) {
    const vpDir = path.join(screenshotDir, vp);
    if (!fs.existsSync(vpDir)) continue;
    const files = fs.readdirSync(vpDir).filter(f => f.endsWith('.png')).sort();
    let consecutiveLow = 0;
    const lowFiles = [];
    for (const f of files) {
      const size = fs.statSync(path.join(vpDir, f)).size;
      if (size < 5000) {
        consecutiveLow++;
        lowFiles.push({ file: f, size, viewport: vp });
        if (consecutiveLow >= 3) {
          warnings.push({ viewport: vp, consecutiveLowContent: consecutiveLow, files: lowFiles.slice(-3).map(l => l.file) });
        }
      } else {
        consecutiveLow = 0;
      }
    }
  }
  return {
    gate: 'A-03', name: 'Visible Content Check',
    status: warnings.length === 0 ? 'PASS' : 'WARNING',
    source: 'code',
    measured: { warnings },
    threshold: { maxConsecutiveLowContent: 2, lowContentThreshold: '5KB' },
    note: warnings.length > 0 ? 'WARNING: Consecutive low-content screenshots detected — possible blank page regions.' : 'All screenshot regions have visible content.'
  };
}

// C-04: elementLevelScreenshotFallback(page, screenshotDir, viewport)
// DEPRECATED: This standalone fallback is superseded by _captureElements() which is
// integrated directly into captureScreenshots() Strategy B/C (Section 8).
// Kept for backward compatibility — new code should use captureScreenshots() instead.
async function elementLevelScreenshotFallback(page, screenshotDir, viewport) {
  const fs = require('fs');
  const path = require('path');
  const vpDir = path.join(screenshotDir, viewport);
  if (!fs.existsSync(vpDir)) return { triggered: false, reason: 'Directory not found' };
  const files = fs.readdirSync(vpDir).filter(f => f.endsWith('.png'));
  const blankFiles = files.filter(f => fs.statSync(path.join(vpDir, f)).size < 5000);
  if (blankFiles.length === 0) return { triggered: false, reason: 'No blank screenshots detected' };
  // Fallback: capture element-level screenshots of all sections
  const sections = await page.$$('section, [class*="zone"], [class*="section"]');
  const captured = [];
  for (let i = 0; i < sections.length; i++) {
    const filePath = path.join(vpDir, `element-${i}.png`);
    await sections[i].screenshot({ path: filePath });
    captured.push(filePath);
  }
  return { triggered: true, blankFiles, elementScreenshots: captured.length };
}

// =============================================================================
// SECTION 8: UNIFIED WRAPPER — runAllGates (B-01)
// Calls all 4 phase functions sequentially. Returns unified JSON.
// GR-48 runs AUTOMATICALLY inside runMetaGates. No opt-out.
// =============================================================================

// Phase function wrappers (B-01 architecture)
async function runPhase3Gates(page) {
  const coreResult = await runGateRunner(page);
  const apResults = await runAntiPatternGates(page);
  const wave2Results = await runWave2Gates(page);
  return [...coreResult.results, ...apResults, ...wave2Results];
}

function runPostWeaverGates(auditorReports, weaverReport) {
  return [
    checkUsabilityPriority(auditorReports, weaverReport),
    checkPredictionSuppression(weaverReport)
  ];
}

function runMetaGates(allResults) {
  const coverageResult = runGateCoverage(allResults);
  const integrityResult = checkGateResultIntegrity([], allResults);
  return [coverageResult, integrityResult];
}

async function runAllGates(page, briefText) {
  const allResults = [];

  // Phase 1: Brief verification
  const bvResults = runBriefVerification(briefText);
  allResults.push(...bvResults);

  // Phase 3A: All Playwright DOM gates
  const phase3Results = await runPhase3Gates(page);
  allResults.push(...phase3Results);

  // Meta gates: GR-48 + GR-49 run AUTOMATICALLY — no opt-out
  const metaResults = runMetaGates(allResults);
  allResults.push(...metaResults);

  return {
    results: allResults,
    timestamp: new Date().toISOString(),
    gateCount: allResults.length,
    passed: allResults.filter(r => r.status === 'PASS').length,
    failed: allResults.filter(r => r.status === 'FAIL').length
  };
}

// =============================================================================
// SECTION 8: DPR-SAFE SCREENSHOT CAPTURE (3-strategy fallback)
// =============================================================================
//
// Root cause: On Retina Mac, Playwright MCP reports DPR 0.667 (not 1 or 2).
// At fractional DPR, light text on dark backgrounds becomes invisible — sub-pixel
// rendering makes the anti-aliased text disappear. Element-level screenshots work
// fine but viewport scroll screenshots render dark zones as solid black.
//
// Three strategies with automatic fallback:
//   A: browser.newContext({ deviceScaleFactor: 1 }) — best quality, new context per viewport
//   B: CDP Emulation.setDeviceMetricsOverride — overrides DPR on existing page context.
//      Works when browser() returns null (common in Playwright MCP environments).
//      Includes inline blank-detection: if first scroll PNG < 5KB, falls back to element capture.
//   C: Element-level screenshots + fullPage capture — always works regardless of DPR.
//      No viewport scroll-throughs, but captures every section/zone element individually.
//
// Usage: Call via browser_run_code MCP tool, passing the function body.
// The orchestrator MUST call this INSTEAD OF manual scroll-and-capture.
// See MANIFEST.md Phase 3A and artifact-orchestrator.md Section 6.

// captureScreenshots(page, htmlUrl, outputDir)
// Creates DPR-1 captures at all 3 viewports: cold-look + full-page + scroll-through.
// Returns { screenshotCount, viewports, dpr, method, errors }.
//
// TWO STRATEGIES (automatic fallback):
//   Strategy A: browser.newContext({ deviceScaleFactor: 1 }) — ideal, creates sibling context
//   Strategy B: CDP Emulation.setDeviceMetricsOverride — works when browser() returns null
//              (common in Playwright MCP where browser instance is not exposed)
//   Strategy C: Element-level fallback — if viewport screenshots still produce blanks
//
// The orchestrator calls this via browser_run_code. It replaces ALL manual screenshot capture.
async function captureScreenshots(page, htmlUrl, outputDir) {
  const fs = require('fs');
  const path = require('path');

  const viewports = [
    { name: '1440', width: 1440, height: 900 },
    { name: '1024', width: 1024, height: 768 },
    { name: '768',  width: 768,  height: 1024 }
  ];
  for (const vp of viewports) {
    const dir = path.join(outputDir, vp.name);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  const cssOverride = `
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
      opacity: 1 !important;
      visibility: visible !important;
      transform: none !important;
    }
  `;

  let totalScreenshots = 0;
  const errors = [];
  let method = 'unknown';

  // --- Detect available strategy ---
  const browser = page.context().browser();

  if (browser) {
    // STRATEGY A: New browser context with forced DPR=1 (best quality)
    method = 'newContext-DPR1';
    for (const vp of viewports) {
      const ctx = await browser.newContext({
        deviceScaleFactor: 1,
        viewport: { width: vp.width, height: vp.height }
      });
      try {
        const count = await _captureViewport(ctx, htmlUrl, outputDir, vp, cssOverride);
        totalScreenshots += count;
      } catch (err) {
        errors.push({ viewport: vp.name, error: err.message, strategy: 'A' });
      } finally {
        await ctx.close();
      }
    }
  } else {
    // STRATEGY B: CDP DeviceMetricsOverride on existing page context
    // Works within Playwright MCP where browser() returns null
    method = 'CDP-DeviceMetricsOverride';
    let client;
    try {
      client = await page.context().newCDPSession(page);
    } catch (cdpErr) {
      // CDP not available — fall through to Strategy C
      method = 'element-fallback';
      client = null;
    }

    if (client) {
      for (const vp of viewports) {
        try {
          // Override device metrics to force DPR=1 at target viewport
          await client.send('Emulation.setDeviceMetricsOverride', {
            width: vp.width,
            height: vp.height,
            deviceScaleFactor: 1,
            mobile: false
          });

          // Inject CSS overrides
          await page.addStyleTag({ content: cssOverride });
          await page.evaluate(() => document.fonts.ready);
          await page.waitForTimeout(500);

          // Cold-look
          const coldPath = path.join(outputDir, vp.name, 'cold-look.png');
          await page.screenshot({ path: coldPath });
          totalScreenshots++;

          // Full-page
          const fullPath = path.join(outputDir, vp.name, 'full-page.png');
          await page.screenshot({ path: fullPath, fullPage: true });
          totalScreenshots++;

          // Scroll-through at 80% viewport-height steps
          const pageHeight = await page.evaluate(() => document.body.scrollHeight);
          const step = Math.floor(vp.height * 0.8);
          let scrollIndex = 0;
          for (let y = 0; y < pageHeight; y += step) {
            await page.evaluate(scrollY => window.scrollTo(0, scrollY), y);
            await page.waitForTimeout(200);
            const scrollPath = path.join(outputDir, vp.name,
              `scroll-${String(scrollIndex).padStart(2, '0')}.png`);
            await page.screenshot({ path: scrollPath });
            totalScreenshots++;
            scrollIndex++;
          }

          // Validate: check if first scroll screenshot is blank (< 5KB)
          const firstScroll = path.join(outputDir, vp.name, 'scroll-00.png');
          if (fs.existsSync(firstScroll) && fs.statSync(firstScroll).size < 5000) {
            // Strategy B produced blanks at this viewport — fall back to element capture
            errors.push({ viewport: vp.name, warning: 'CDP override produced blank screenshots, attempting element fallback' });
            const elementCount = await _captureElements(page, outputDir, vp);
            totalScreenshots += elementCount;
          }
        } catch (err) {
          errors.push({ viewport: vp.name, error: err.message, strategy: 'B' });
        }
      }

      // Reset device metrics to original state
      try {
        await client.send('Emulation.clearDeviceMetricsOverride');
      } catch (e) { /* non-fatal */ }
      try {
        await client.detach();
      } catch (e) { /* non-fatal */ }
    } else {
      // STRATEGY C: Element-level screenshots only (always works, no viewport scrolls)
      for (const vp of viewports) {
        try {
          // Resize viewport to trigger responsive breakpoints
          await page.setViewportSize({ width: vp.width, height: vp.height });
          await page.addStyleTag({ content: cssOverride });
          await page.evaluate(() => document.fonts.ready);
          await page.waitForTimeout(500);

          // Full-page screenshot (works even at fractional DPR)
          const fullPath = path.join(outputDir, vp.name, 'full-page.png');
          await page.screenshot({ path: fullPath, fullPage: true });
          totalScreenshots++;

          // Element-level screenshots of each major section
          const elementCount = await _captureElements(page, outputDir, vp);
          totalScreenshots += elementCount;
        } catch (err) {
          errors.push({ viewport: vp.name, error: err.message, strategy: 'C' });
        }
      }
    }
  }

  return {
    gate: 'SCREENSHOT-CAPTURE',
    status: errors.length === 0 ? 'PASS' : (totalScreenshots > 0 ? 'PARTIAL' : 'FAIL'),
    screenshotCount: totalScreenshots,
    viewports: viewports.map(v => v.name),
    dpr: 1,
    method,
    outputDir,
    errors: errors.length > 0 ? errors : undefined,
    note: `Screenshots captured via ${method} (bypasses Retina MCP DPR limitation)`
  };
}

// _captureViewport — shared capture logic for Strategy A (new context)
async function _captureViewport(ctx, htmlUrl, outputDir, vp, cssOverride) {
  const fs = require('fs');
  const path = require('path');
  let count = 0;

  const capturePage = await ctx.newPage();
  await capturePage.goto(htmlUrl, { waitUntil: 'networkidle' });
  await capturePage.addStyleTag({ content: cssOverride });
  await capturePage.evaluate(() => document.fonts.ready);
  await capturePage.waitForTimeout(500);

  // Cold-look
  await capturePage.screenshot({ path: path.join(outputDir, vp.name, 'cold-look.png') });
  count++;

  // Full-page
  await capturePage.screenshot({ path: path.join(outputDir, vp.name, 'full-page.png'), fullPage: true });
  count++;

  // Scroll-through
  const pageHeight = await capturePage.evaluate(() => document.body.scrollHeight);
  const step = Math.floor(vp.height * 0.8);
  let scrollIndex = 0;
  for (let y = 0; y < pageHeight; y += step) {
    await capturePage.evaluate(scrollY => window.scrollTo(0, scrollY), y);
    await capturePage.waitForTimeout(200);
    await capturePage.screenshot({
      path: path.join(outputDir, vp.name, `scroll-${String(scrollIndex).padStart(2, '0')}.png`)
    });
    count++;
    scrollIndex++;
  }

  await capturePage.close();
  return count;
}

// _captureElements — element-level fallback (always works regardless of DPR)
async function _captureElements(page, outputDir, vp) {
  const fs = require('fs');
  const path = require('path');
  let count = 0;

  // Find all major page sections using common selectors
  const sections = await page.$$('section, [class*="zone"], [class*="section"], header, footer, main > div');
  for (let i = 0; i < sections.length; i++) {
    try {
      const filePath = path.join(outputDir, vp.name, `element-${String(i).padStart(2, '0')}.png`);
      await sections[i].screenshot({ path: filePath });
      const size = fs.statSync(filePath).size;
      if (size > 500) { // Skip truly empty elements
        count++;
      } else {
        fs.unlinkSync(filePath);
      }
    } catch (e) {
      // Element may be hidden or zero-size — skip silently
    }
  }
  return count;
}

// =============================================================================
// USAGE INSTRUCTIONS (for orchestrator)
// =============================================================================
//
// OPTION A: Unified (recommended)
//   const allGateResults = await runAllGates(page, briefText);
//   // Then separately: captureScreenshots, checkScreenshotQuality, checkVisibleContent, runPostWeaverGates
//
// OPTION B: Phased (for orchestrator control)
//   const bvResults = runBriefVerification(briefText);       // Phase 1
//   const phase3Results = await runPhase3Gates(page);         // Phase 3A (all DOM gates)
//   // ... DPR-safe screenshot capture (REPLACES manual scroll-and-capture) ...
//   const ssResult = await captureScreenshots(page, htmlUrl, screenshotDir);
//   //   ssResult.method will be 'newContext-DPR1', 'CDP-DeviceMetricsOverride', or 'element-fallback'
//   //   ssResult.errors will list any per-viewport failures (partial capture is still usable)
//   const ssqResult = checkScreenshotQuality(screenshotDir);  // Post-screenshot validation
//   const vcResult = checkVisibleContent(screenshotDir);       // Visible content check
//   // ... PA audit + weaver ...
//   const postWeaverResults = runPostWeaverGates(auditorReports, weaverReport);  // Post-weaver
//   const allResults = [...bvResults, ...phase3Results, ssqResult, ...postWeaverResults];
//   const metaResults = runMetaGates(allResults);              // GR-48 + GR-49 (automatic)
//   allResults.push(...metaResults);
