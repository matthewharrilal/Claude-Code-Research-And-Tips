// Gate Runner Core — Executable Playwright JavaScript
// Pipeline v3 Programmatic Verification
// Extracted from artifact-gate-runner-MONOLITHIC.md
// Date: 2026-02-24
// Authority: Council Verdict (2026-02-23)
//
// EXECUTION ORDER:
// 1. runBriefVerification(briefText)     — Text parsing, Phase 1 (BV-01 through BV-04)
// 2. runGateRunner(page)                 — Playwright DOM, Phase 3A (GR-01 through GR-15, GR-43, GR-44)
// 3. runAntiPatternGates(page)           — Playwright heuristic, Phase 3A (GR-17 through GR-22)
// 4. runWave2Gates(page)                 — Playwright new checks, Phase 3A (GR-45, GR-46, GR-50, GR-51, GR-52, GR-53)
// 5. runGateCoverage(allResults)          — Meta-gate (GR-48)
// 6. checkGateResultIntegrity(files,data) — Process check (GR-49)
//
// Total Playwright-executable gates: 31
//   REQUIRED (18): GR-01 through GR-15, GR-43, GR-44, GR-48
//   RECOMMENDED (8): GR-17, GR-18, GR-19, GR-20, GR-45, GR-49, GR-51, GR-52
//   ADVISORY (5): GR-21, GR-22, GR-46, GR-50, GR-53
// Plus Brief Verification (4): BV-01 through BV-04
// Plus Diagnostic (2): GR-33, GR-34 (report-only, no code in this file)

// =============================================================================
// SECTION 1: BRIEF VERIFICATION GATES (BV-01 through BV-04) — Text Parsing
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
    measured: { tierCounts, budgetFailures },
    threshold: tierHeaders
  });

  // BV-02: Background Delta Verification
  const hexPattern = /#([0-9a-fA-F]{6})/g;
  const hexValues = [...briefText.matchAll(hexPattern)].map(m => m[1]);
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
    measured: { totalHexPairs: hexValues.length, failures: bgDeltaFailures },
    threshold: { minDelta: 15 }
  });

  // BV-03: Recipe Format Verification
  const recipeVerbs = (briefText.match(/\b(Build|Create|Derive|Map|Read|Select|Deploy|Assess)\b/g) || []).length;
  const checklistVerbs = (briefText.match(/\b(Verify|Fail if|Must be|Ensure|Check that)\b/gi) || []).length;
  const ratio = checklistVerbs > 0 ? recipeVerbs / checklistVerbs : recipeVerbs > 0 ? Infinity : 0;
  results.push({
    gate: 'BV-03', name: 'Recipe Format Verification',
    status: ratio >= 3 ? 'PASS' : 'FAIL',
    measured: { recipeVerbs, checklistVerbs, ratio: ratio === Infinity ? 'Infinity' : ratio.toFixed(1) },
    threshold: { minRatio: '3:1' }
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
    measured: { suppressorsFound: suppressorsFound.map(s => s.name) },
    threshold: { maxSuppressors: 0 }
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
    measured: { violations: gradientViolations.length, samples: gradientViolations.slice(0, 5) },
    threshold: { gradients: 0 }
  });

  // GR-05: Warm Palette Compliance
  const paletteCheck = await page.evaluate(() => {
    const pureBlack = [];
    const pureWhite = [];
    const coldColors = [];

    function parseRGB(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }

    function isCold(rgb) {
      return rgb && rgb.b > rgb.r + 10 && rgb.b > rgb.g + 10;
    }

    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const style = getComputedStyle(el);
      ['color', 'backgroundColor', 'borderColor'].forEach(prop => {
        const val = style[prop];
        if (!val || val === 'transparent' || val === 'rgba(0, 0, 0, 0)') return;
        const rgb = parseRGB(val);
        if (!rgb) return;
        if (rgb.r === 0 && rgb.g === 0 && rgb.b === 0) {
          pureBlack.push({ tag: el.tagName, prop, class: el.className });
        }
        if (rgb.r === 255 && rgb.g === 255 && rgb.b === 255) {
          pureWhite.push({ tag: el.tagName, prop, class: el.className });
        }
        if (isCold(rgb)) {
          coldColors.push({ tag: el.tagName, prop, class: el.className, value: val });
        }
      });
    });
    return { pureBlack: pureBlack.length, pureWhite: pureWhite.length, coldColors: coldColors.length,
             samples: { black: pureBlack.slice(0, 3), white: pureWhite.slice(0, 3), cold: coldColors.slice(0, 3) } };
  });
  results.push({
    gate: 'GR-05', name: 'Warm Palette Compliance',
    status: (paletteCheck.pureBlack === 0 && paletteCheck.pureWhite === 0 && paletteCheck.coldColors === 0) ? 'PASS' : 'FAIL',
    measured: paletteCheck,
    threshold: { pureBlack: 0, pureWhite: 0, coldColors: 0 }
  });

  // GR-06: Font Trinity
  const fontCheck = await page.evaluate(async () => {
    await document.fonts.ready;
    const allowedFamilies = ['instrument serif', 'inter', 'jetbrains mono'];
    const violations = [];
    const found = new Set();

    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const ff = getComputedStyle(el).fontFamily.toLowerCase();
      const primary = ff.split(',')[0].trim().replace(/['"]/g, '');
      if (primary) {
        const isAllowed = allowedFamilies.some(f => primary.includes(f)) ||
          ['system-ui', '-apple-system', 'sans-serif', 'serif', 'monospace', 'ui-sans-serif', 'ui-serif', 'ui-monospace'].includes(primary);
        if (!isAllowed) {
          violations.push({ tag: el.tagName, class: el.className, font: primary });
        }
        allowedFamilies.forEach(f => { if (primary.includes(f)) found.add(f); });
      }
    });
    return { violations: violations.length, found: [...found], samples: violations.slice(0, 5) };
  });
  const allThreePresent = fontCheck.found.length === 3;
  results.push({
    gate: 'GR-06', name: 'Font Trinity',
    status: (fontCheck.violations === 0 && allThreePresent) ? 'PASS' : 'FAIL',
    measured: fontCheck,
    threshold: { allowedFonts: ['Instrument Serif', 'Inter', 'JetBrains Mono'], allPresent: true }
  });

  // GR-07: No Pure Black / Pure White
  const pureBWCheck = await page.evaluate(() => {
    const pureBlack = [];
    const pureWhite = [];
    function parseRGBLocal(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }
    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const style = getComputedStyle(el);
      ['color', 'backgroundColor', 'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'].forEach(prop => {
        const val = style[prop];
        if (!val || val === 'transparent' || val === 'rgba(0, 0, 0, 0)') return;
        const rgb = parseRGBLocal(val);
        if (!rgb) return;
        if (rgb.r === 0 && rgb.g === 0 && rgb.b === 0) {
          pureBlack.push({ tag: el.tagName, class: el.className, prop });
        }
        if (rgb.r === 255 && rgb.g === 255 && rgb.b === 255) {
          pureWhite.push({ tag: el.tagName, class: el.className, prop });
        }
      });
    });
    return { pureBlack: pureBlack.length, pureWhite: pureWhite.length,
             samples: { black: pureBlack.slice(0, 5), white: pureWhite.slice(0, 5) } };
  });
  results.push({
    gate: 'GR-07', name: 'No Pure Black / Pure White',
    status: (pureBWCheck.pureBlack === 0 && pureBWCheck.pureWhite === 0) ? 'PASS' : 'FAIL',
    measured: pureBWCheck,
    threshold: { pureBlack: 0, pureWhite: 0 }
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
    measured: bgDeltaCheck,
    threshold: { minDelta: 15 }
  });

  // GR-12: Letter Spacing >= 0.025em
  const letterSpacingCheck = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      const ls = getComputedStyle(el).letterSpacing;
      if (ls && ls !== 'normal' && ls !== '0px') {
        const px = parseFloat(ls);
        const fs = parseFloat(getComputedStyle(el).fontSize);
        const em = px / fs;
        if (em > 0 && em < 0.025) {
          violations.push({ tag: el.tagName, class: el.className, letterSpacing: ls, fontSize: fs + 'px', em: em.toFixed(4) });
        }
      }
    });
    return { violations: violations.length, samples: violations.slice(0, 5) };
  });
  results.push({
    gate: 'GR-12', name: 'Letter Spacing >= 0.025em',
    status: letterSpacingCheck.violations === 0 ? 'PASS' : 'FAIL',
    measured: letterSpacingCheck,
    threshold: { minLetterSpacing: '0.025em' }
  });

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

    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
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
    measured: visualGapCheck,
    threshold: { maxVisualGap: 150 }
  });

  // GR-15: Single Margin <= 96px
  const singleMarginCheck = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
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
    measured: singleMarginCheck,
    threshold: { maxSingleValue: '96px' }
  });

  // GR-44: Trailing Whitespace Void Detection
  const trailingVoid = await page.evaluate(() => {
    const body = document.body;
    const bodyRect = body.getBoundingClientRect();
    const bodyBottom = bodyRect.bottom;

    const allElements = [...document.querySelectorAll('body *')];
    let lastVisibleBottom = 0;

    for (const el of allElements) {
      if (['SCRIPT', 'STYLE', 'META', 'LINK'].includes(el.tagName)) continue;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') continue;
      const rect = el.getBoundingClientRect();
      if (rect.height === 0) continue;
      if (rect.bottom > lastVisibleBottom) {
        lastVisibleBottom = rect.bottom;
      }
    }

    const voidHeight = bodyBottom - lastVisibleBottom;
    return {
      bodyBottom: Math.round(bodyBottom),
      lastContentBottom: Math.round(lastVisibleBottom),
      voidHeight: Math.round(voidHeight),
      pass: voidHeight <= 300
    };
  });
  results.push({
    gate: 'GR-44', name: 'Trailing Whitespace Void',
    status: trailingVoid.pass ? 'PASS' : 'FAIL',
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
    measured: selfEvalCheck,
    threshold: { selfEvaluationComment: true }
  });

  // ========== VERDICT SUMMARY (GR-16 logic absorbed) ==========
  const identityGates = results.filter(r => ['GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-07','GR-08','GR-09','GR-10'].includes(r.gate));
  const identityPass = identityGates.filter(g => g.status === 'PASS').length;
  const identityFail = identityGates.filter(g => g.status === 'FAIL').length;
  const perceptionGates = results.filter(r => ['GR-11', 'GR-12', 'GR-13', 'GR-14', 'GR-15', 'GR-44'].includes(r.gate));
  const perceptionPass = perceptionGates.filter(g => g.status === 'PASS').length;
  const perceptionFail = perceptionGates.filter(g => g.status === 'FAIL').length;
  const allPerceptionPass = perceptionGates.every(g => g.status === 'PASS');
  const outputGates = results.filter(r => ['GR-43'].includes(r.gate));
  const outputFail = outputGates.filter(g => g.status === 'FAIL').length;

  let verdict = 'PROCEED_TO_PA';
  if (identityFail > 0) verdict = 'REBUILD';
  else if (perceptionFail > 0 || !allPerceptionPass) verdict = 'REFINE';
  else if (outputFail > 0) verdict = 'REFINE';

  return {
    results,
    summary: {
      identity: { pass: identityPass, fail: identityFail, total: 10 },
      perception: { pass: perceptionPass, fail: perceptionFail, total: 6 },
      output: { pass: outputGates.length - outputFail, fail: outputFail, total: 1 },
      allPerceptionPass,
      verdict,
      note: 'Run runAntiPatternGates(), runWave2Gates(), and runGateCoverage() after this for complete verification'
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
    document.querySelectorAll('p, li, blockquote, .callout').forEach(el => {
      const style = getComputedStyle(el);
      ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'].forEach(prop => {
        const val = parseFloat(style[prop]);
        if (val > 0 && val < 12) {
          violations.push({ tag: el.tagName, class: el.className, prop, value: val + 'px', minExpected: '12px' });
        }
      });
    });
    document.querySelectorAll('td, th').forEach(el => {
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
    });
    return { ghosts: ghosts.length, samples: ghosts.slice(0, 5) };
  });
  results.push({
    gate: 'GR-18', name: 'AP-09 Ghost Mechanisms',
    status: ghostCheck.ghosts === 0 ? 'PASS' : 'FAIL',
    measured: ghostCheck,
    threshold: { ghostMechanisms: 0 }
  });

  // GR-19: AP-10 Threshold Gaming (>50% of deltas cluster at floor)
  const gamingCheck = await page.evaluate(() => {
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
    measured: echoCheck,
    threshold: { maxConsecutiveIdentical: 2 }
  });

  // GR-21: AP-14 Cognitive Overload (Bg Proxy)
  const overloadCheck = await page.evaluate(() => {
    function parseRGBLocal(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return `${match[1]},${match[2]},${match[3]}`;
      return null;
    }
    const docHeight = document.documentElement.scrollHeight;
    const sliceHeight = 900;
    const sliceCount = Math.ceil(docHeight / sliceHeight);
    const sliceResults = [];
    let maxDistinct = 0;

    for (let i = 0; i < sliceCount; i++) {
      const sliceTop = i * sliceHeight;
      const sliceBottom = sliceTop + sliceHeight;
      const bgColors = new Set();

      document.querySelectorAll('*').forEach(el => {
        if (!window.isRenderedElement(el)) return;
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const elTop = rect.top + scrollTop;
        const elBottom = rect.bottom + scrollTop;
        if (elBottom > sliceTop && elTop < sliceBottom) {
          const bg = getComputedStyle(el).backgroundColor;
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const rgb = parseRGBLocal(bg);
            if (rgb) bgColors.add(rgb);
          }
        }
      });

      const distinct = bgColors.size;
      if (distinct > maxDistinct) maxDistinct = distinct;
      sliceResults.push({ slice: i, top: sliceTop, bottom: sliceBottom, distinctBgs: distinct });
    }

    return {
      slices: sliceResults,
      maxDistinctPerViewport: maxDistinct,
      pass: maxDistinct <= 4
    };
  });
  results.push({
    gate: 'GR-21', name: 'AP-14 Cognitive Overload (Bg Proxy)',
    status: overloadCheck.pass ? 'PASS' : 'FAIL',
    measured: { maxDistinctPerViewport: overloadCheck.maxDistinctPerViewport, sliceCount: overloadCheck.slices.length },
    threshold: { maxDistinctBackgrounds: 4, sliceHeight: '900px' },
    evidence: 'THEORETICAL',
    note: 'Simplified proxy — counts distinct bg colors per 900px slice, not full visual channel analysis'
  });

  // GR-22: AP-02 Color Zone Conflict (Red Role)
  const colorConflictCheck = await page.evaluate(() => {
    function isRedColor(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!match) return false;
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      return r >= 220 && r <= 245 && g <= 60 && b <= 50;
    }

    let borderUses = 0;
    let bgUses = 0;
    let textUses = 0;
    const bgElements = [];

    document.querySelectorAll('*').forEach(el => {
      if (!window.isRenderedElement(el)) return;
      const style = getComputedStyle(el);

      ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'].forEach(prop => {
        const val = style[prop];
        if (val && isRedColor(val)) {
          const w = parseFloat(style[prop.replace('Color', 'Width')]);
          if (w > 0) borderUses++;
        }
      });

      const bg = style.backgroundColor;
      if (bg && isRedColor(bg)) {
        bgUses++;
        bgElements.push({ tag: el.tagName, class: el.className });
      }

      const color = style.color;
      if (color && isRedColor(color)) {
        textUses++;
      }
    });

    return {
      borderUses,
      bgUses,
      textUses,
      bgElements: bgElements.slice(0, 5),
      pass: bgUses <= 2
    };
  });
  results.push({
    gate: 'GR-22', name: 'AP-02 Color Zone Conflict (Red Role)',
    status: colorConflictCheck.pass ? 'PASS' : 'FAIL',
    measured: colorConflictCheck,
    threshold: { maxRedBackgrounds: 2 },
    evidence: 'OBSERVED',
    note: 'Simplified proxy — checks primary red is used for borders/emphasis, not backgrounds (>2 bg uses = conflict)'
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
    measured: densityArc,
    threshold: { densestNotFirstOrLast: true },
    evidence: 'THEORETICAL',
    note: 'ADVISORY only — crescendo/decrescendo patterns are valid exceptions'
  });

  return results;
}

// =============================================================================
// SECTION 5: META-GATES (GR-48, GR-49)
// =============================================================================

// GR-48: Gate Coverage Completeness — runs LAST after all other gates
function runGateCoverage(allResults) {
  const REQUIRED_GATES = [
    'GR-01', 'GR-02', 'GR-03', 'GR-04', 'GR-05', 'GR-06', 'GR-07', 'GR-08', 'GR-09', 'GR-10',
    'GR-11', 'GR-12', 'GR-13', 'GR-14', 'GR-15',
    'GR-43', 'GR-44'
  ]; // 17 REQUIRED gates (not counting GR-48 itself)

  const RECOMMENDED_GATES = [
    'GR-17', 'GR-18', 'GR-19', 'GR-20',
    'GR-45', 'GR-49', 'GR-51', 'GR-52'
  ]; // 8 RECOMMENDED gates (GR-25-28 reclassified to orchestrator in Wave 3)

  const collectedGateIds = new Set(allResults.map(r => r.gate));

  const missingRequired = REQUIRED_GATES.filter(id => !collectedGateIds.has(id));
  const presentRecommended = RECOMMENDED_GATES.filter(id => collectedGateIds.has(id));
  const missingRecommended = RECOMMENDED_GATES.filter(id => !collectedGateIds.has(id));

  const requiredComplete = missingRequired.length === 0;
  const recommendedSufficient = presentRecommended.length >= 4;

  const pass = requiredComplete && recommendedSufficient;

  return {
    gate: 'GR-48', name: 'Gate Coverage Completeness',
    status: pass ? 'PASS' : 'FAIL',
    measured: {
      totalCollected: collectedGateIds.size,
      requiredPresent: REQUIRED_GATES.length - missingRequired.length,
      requiredTotal: REQUIRED_GATES.length,
      missingRequired,
      recommendedPresent: presentRecommended.length,
      recommendedTotal: RECOMMENDED_GATES.length,
      missingRecommended
    },
    threshold: {
      requiredCoverage: '17/17 (100%)',
      recommendedCoverage: '>=4/8'
    },
    evidence: 'OBSERVED',
    note: missingRequired.length > 0
      ? 'INCOMPLETE — missing REQUIRED gates: ' + missingRequired.join(', ')
      : 'All REQUIRED gates present'
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

    const invalidIds = gateIds.filter(id => !/^(GR-\d{2}|BV-\d{2})$/.test(id));
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
    measured: { fileCount: resultFiles.length, issues },
    threshold: { files: 1, duplicates: 0, invalidFormats: 0 },
    evidence: 'OBSERVED'
  };
}

// =============================================================================
// USAGE INSTRUCTIONS (for orchestrator)
// =============================================================================
//
// 1. Serve HTML via HTTP:    npx serve -p 3000 ./output-directory
// 2. Open Playwright:        const page = await browser.newPage();
//                            await page.setViewportSize({ width: 1440, height: 900 });
//                            await page.goto('http://localhost:3000/output.html');
// 3. Core gates:             const coreResults = await runGateRunner(page);
// 4. Anti-pattern gates:     const apResults = await runAntiPatternGates(page);
// 5. Wave 2 gates:           const wave2Results = await runWave2Gates(page);
// 6. Responsive (768px):     await page.setViewportSize({ width: 768, height: 1024 });
//                            const responsiveResults = await runGateRunner(page);
// 7. Collect all results:    const allResults = [...coreResults.results, ...apResults, ...wave2Results, ...responsiveResults.results];
// 8. GR-48 (coverage):       const coverageResult = runGateCoverage(allResults);
//                            allResults.push(coverageResult);
// 9. Write + GR-49:          fs.writeFileSync('gate-results.json', JSON.stringify(allResults, null, 2));
//                            const integrityResult = checkGateResultIntegrity(['gate-results.json'], allResults);
// 10. Final verdict:         See coreResults.summary.verdict + anti-pattern fail count + coverage status
