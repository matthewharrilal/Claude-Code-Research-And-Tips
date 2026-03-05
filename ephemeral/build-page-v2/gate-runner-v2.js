// Gate Runner v2 — Single Atomic Function for /build-page v2
// Date: 2026-02-28
// Authority: 30-IMPLEMENTATION-PLAN-v2.md, 02-gate-audit.md, 21-ceremony-vs-necessity.md
//
// ARCHITECTURE: ONE function, ONE browser_evaluate call, ONE JSON result.
// No selective execution. All gates run. Never throws.
//
// GATE INVENTORY (25 gates):
//   REQUIRED (14): GR-03, GR-05, GR-06, GR-08, GR-09, GR-10,
//                  GR-11, GR-13, GR-14, GR-15, GR-18, GR-44,
//                  GR-60, GR-67
//   RECOMMENDED (1): GR-45
//   META (1): GR-48 (coverage — self-referential, excluded from own array)
//   ADVISORY (9): GR-01, GR-02, GR-04, GR-07, GR-20, GR-51, GR-55, GR-61, GR-66
//   TOTAL: 25 checks (16 essential + 9 advisory)
//
// STRIPPED (6 ceremony gates):
//   BV-08 (brief-output diff — evaluates creative content)
//   GR-43 (builder narration — process ceremony)
//   GR-63 (experiential marker — cannot cause the behavior it claims to verify)
//   GR-64 (Weaver keyword check — evaluates creative output)
//   GR-83, GR-84 (meta-meta gates — process ceremony)
//
// BV gates (BV-01..04) are TEXT-ONLY, checked by the orchestrator separately.
// GR-62 (screenshot quality) is a NODE gate, checked by orchestrator separately.
// They are NOT in this browser_evaluate function.
//
// USAGE:
//   const json = await page.evaluate(gateRunnerV2);
//   // or: browser_evaluate({ function: gateRunnerV2.toString() })
//   // Returns: JSON string with { gates, metadata, summary, errors }

const gateRunnerV2 = async () => {
  const gates = {};
  const errors = [];

  // ─── METADATA (execution proof) ─────────────────────────────────────
  const metadata = {
    timestamp: new Date().toISOString(),
    url: window.location.href,
    viewport: { width: window.innerWidth, height: window.innerHeight },
    dpr: window.devicePixelRatio,
    userAgent: navigator.userAgent,
    scrollHeight: document.documentElement.scrollHeight
  };

  // ─── SHARED HELPERS ─────────────────────────────────────────────────
  function parseRGB(str) {
    const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
    return m ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] !== undefined ? +m[4] : 1 } : null;
  }

  function isRendered(el) {
    const skip = ['HTML','HEAD','META','TITLE','SCRIPT','STYLE','LINK','BR'];
    if (skip.includes(el.tagName)) return false;
    const s = getComputedStyle(el);
    if (s.display === 'none' || s.visibility === 'hidden') return false;
    const r = el.getBoundingClientRect();
    return r.height > 0 || r.width > 0;
  }

  function relLum(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c /= 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  function contrastRatio(l1, l2) {
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
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

  function getSections() {
    return document.querySelectorAll('section, [class*="zone"], [class*="section"]');
  }

  // Wait for fonts before any checks
  try { await document.fonts.ready; } catch(e) { /* continue */ }

  // ═══════════════════════════════════════════════════════════════════════
  // CATEGORY A: PHYSICS (2 gates)
  // ═══════════════════════════════════════════════════════════════════════

  // GR-60: WCAG Contrast — REQUIRED
  try {
    const failures = [];
    let total = 0, passed = 0;
    const sel = 'p,span,a,li,h1,h2,h3,h4,h5,h6,td,th,label,figcaption,blockquote,cite,dt,dd,summary,caption';
    document.querySelectorAll(sel).forEach(el => {
      if (!isRendered(el)) return;
      const text = el.textContent.trim();
      if (!text.length) return;
      total++;
      const s = getComputedStyle(el);
      const fg = parseRGB(s.color);
      if (!fg) return;
      const bg = getEffBg(el);
      const ratio = contrastRatio(relLum(fg.r, fg.g, fg.b), relLum(bg.r, bg.g, bg.b));
      const fs = parseFloat(s.fontSize);
      const fw = parseInt(s.fontWeight) || 400;
      const isLarge = fs >= 18 || (fs >= 14 && fw >= 700);
      const minRatio = isLarge ? 3.0 : 4.5;
      if (ratio < minRatio) {
        failures.push({
          tag: el.tagName, class: el.className.toString().substring(0, 50),
          text: text.substring(0, 40), ratio: +ratio.toFixed(2), required: minRatio
        });
      } else { passed++; }
    });
    gates['GR-60'] = {
      id: 'GR-60', category: 'Physics', tier: 'REQUIRED',
      pass: failures.length === 0,
      value: { total, passed, failCount: failures.length },
      threshold: { normalText: '4.5:1', largeText: '3.0:1' },
      detail: failures.length === 0 ? 'All text passes WCAG AA' : `${failures.length} elements fail contrast`,
      samples: failures.slice(0, 5)
    };
  } catch(e) { errors.push({ gate: 'GR-60', error: e.message }); }

  // GR-67: Footer Text Size — REQUIRED
  try {
    const footer = document.querySelector('footer') || document.querySelector('[class*="footer"]');
    const zones = document.querySelectorAll('section, [class*="zone"]');
    const target = footer || (zones.length > 0 ? zones[zones.length - 1] : null);
    const violations = [];
    if (target) {
      target.querySelectorAll('*').forEach(el => {
        if (!el.textContent.trim()) return;
        const fs = parseFloat(getComputedStyle(el).fontSize);
        if (fs > 0 && fs < 11) {
          violations.push({ tag: el.tagName, fontSize: fs + 'px' });
        }
      });
    }
    gates['GR-67'] = {
      id: 'GR-67', category: 'Physics', tier: 'REQUIRED',
      pass: violations.length === 0,
      value: { footerFound: !!target, violationCount: violations.length },
      threshold: { minFontSize: '11px' },
      detail: violations.length === 0 ? 'Footer text >= 11px' : `${violations.length} elements below 11px`,
      samples: violations.slice(0, 3)
    };
  } catch(e) { errors.push({ gate: 'GR-67', error: e.message }); }

  // ═══════════════════════════════════════════════════════════════════════
  // CATEGORY B: IDENTITY (6 gates)
  // ═══════════════════════════════════════════════════════════════════════

  // GR-03: Container Width 940-960px — REQUIRED
  try {
    const candidates = [
      ...document.querySelectorAll('[class*="spine"], [class*="container"], [class*="wrapper"], main, article'),
      ...document.querySelectorAll('[style*="max-width"]')
    ];
    const widths = candidates.map(el => ({
      tag: el.tagName, class: el.className.toString().substring(0, 40),
      maxWidth: getComputedStyle(el).maxWidth
    })).filter(w => {
      const mw = parseFloat(w.maxWidth);
      return !isNaN(mw) && mw >= 800 && mw <= 1200;
    });
    const pass = widths.some(c => {
      const mw = parseFloat(c.maxWidth);
      return mw >= 940 && mw <= 960;
    });
    gates['GR-03'] = {
      id: 'GR-03', category: 'Identity', tier: 'REQUIRED',
      pass,
      value: { containers: widths },
      threshold: { min: 940, max: 960 },
      detail: pass ? 'Container within 940-960px' : 'No container in 940-960px range'
    };
  } catch(e) { errors.push({ gate: 'GR-03', error: e.message }); }

  // GR-05: Warm Palette (R >= G >= B) — REQUIRED
  // Checks TWO conditions on BACKGROUND colors only:
  //   1. No cold colors (B >> R or B >> G) on any rendered element
  //   2. R >= G >= B warm order on background colors (with 5-point tolerance)
  // Text colors, border colors, and code/pre elements are exempt from warm-order check.
  // Also collects data for advisory GR-07 (pure B/W)
  let colorData = { visibleCold: 0, pureBlack: 0, pureWhite: 0 };
  try {
    const visibleCold = [];
    const warmOrderViolations = [];
    const pureBlack = [];
    const pureWhite = [];
    function isCold(rgb) { return rgb && rgb.b > rgb.r + 10 && rgb.b > rgb.g + 10; }
    document.querySelectorAll('*').forEach(el => {
      if (!isRendered(el)) return;
      const hasText = el.textContent.trim().length > 0;
      const s = getComputedStyle(el);
      // Skip code/pre elements entirely
      if (el.tagName === 'CODE' || el.tagName === 'PRE' || el.closest('code') || el.closest('pre')) return;

      // Check ALL color properties for cold colors
      ['color','backgroundColor','borderTopColor','borderRightColor','borderBottomColor','borderLeftColor'].forEach(prop => {
        const val = s[prop];
        if (!val || val === 'transparent' || val === 'rgba(0, 0, 0, 0)') return;
        const rgb = parseRGB(val);
        if (!rgb) return;
        if (rgb.r === 0 && rgb.g === 0 && rgb.b === 0 && hasText) pureBlack.push({ tag: el.tagName, prop });
        if (rgb.r === 255 && rgb.g === 255 && rgb.b === 255 && hasText) pureWhite.push({ tag: el.tagName, prop });
        if (isCold(rgb)) {
          const vis = rgb.a * Math.max(Math.abs(rgb.b - rgb.r), Math.abs(rgb.b - rgb.g));
          if (vis > 20) visibleCold.push({ tag: el.tagName, prop, value: val });
        }
      });

      // Check ONLY backgroundColor for R >= G >= B warm order (5-point tolerance)
      const bgVal = s.backgroundColor;
      if (bgVal && bgVal !== 'transparent' && bgVal !== 'rgba(0, 0, 0, 0)') {
        const bgRgb = parseRGB(bgVal);
        if (bgRgb && (bgRgb.r < bgRgb.g - 5 || bgRgb.g < bgRgb.b - 5)) {
          // Skip near-neutral colors (all channels within 10 of each other — effectively gray)
          const spread = Math.max(bgRgb.r, bgRgb.g, bgRgb.b) - Math.min(bgRgb.r, bgRgb.g, bgRgb.b);
          if (spread > 10) {
            warmOrderViolations.push({ tag: el.tagName, value: bgVal, r: bgRgb.r, g: bgRgb.g, b: bgRgb.b });
          }
        }
      }
    });
    colorData = { visibleCold: visibleCold.length, pureBlack: pureBlack.length, pureWhite: pureWhite.length,
                  coldSamples: visibleCold.slice(0, 3), blackSamples: pureBlack.slice(0, 3), whiteSamples: pureWhite.slice(0, 3) };
    const totalViolations = visibleCold.length + warmOrderViolations.length;
    gates['GR-05'] = {
      id: 'GR-05', category: 'Identity', tier: 'REQUIRED',
      pass: totalViolations === 0,
      value: { visibleColdCount: visibleCold.length, warmOrderViolations: warmOrderViolations.length },
      threshold: { visibleColdColors: 0, warmOrderViolations: 0 },
      detail: totalViolations === 0 ? 'Warm palette maintained (R>=G>=B on all backgrounds)'
        : visibleCold.length > 0 && warmOrderViolations.length > 0
          ? `${visibleCold.length} cold colors + ${warmOrderViolations.length} warm-order violations`
          : visibleCold.length > 0 ? `${visibleCold.length} cold colors found`
          : `${warmOrderViolations.length} backgrounds violate R>=G>=B`,
      samples: [...visibleCold.slice(0, 3), ...warmOrderViolations.slice(0, 3)]
    };
  } catch(e) { errors.push({ gate: 'GR-05', error: e.message }); }

  // GR-06: Font Trinity — REQUIRED
  try {
    const allowedFamilies = ['instrument serif', 'inter', 'jetbrains mono'];
    const genericFamilies = ['system-ui', '-apple-system', 'sans-serif', 'serif', 'monospace', 'ui-sans-serif', 'ui-serif', 'ui-monospace'];
    const renderedViolations = [];
    const found = new Set();
    document.querySelectorAll('*').forEach(el => {
      if (!isRendered(el) || !el.textContent.trim()) return;
      const ff = getComputedStyle(el).fontFamily.toLowerCase();
      const primary = ff.split(',')[0].trim().replace(/['"]/g, '');
      if (!primary) return;
      const isGeneric = genericFamilies.includes(primary);
      const isAllowed = allowedFamilies.some(f => primary.includes(f)) || isGeneric;
      allowedFamilies.forEach(f => { if (primary.includes(f)) found.add(f); });
      if (!isAllowed) {
        const isRenderedFont = document.fonts.check(`16px "${primary}"`);
        if (isRenderedFont) renderedViolations.push({ tag: el.tagName, font: primary });
      }
    });
    const allPresent = found.size === 3;
    gates['GR-06'] = {
      id: 'GR-06', category: 'Identity', tier: 'REQUIRED',
      pass: renderedViolations.length === 0 && allPresent,
      value: { fontsFound: [...found], violationCount: renderedViolations.length, allPresent },
      threshold: { required: ['Inter', 'Instrument Serif', 'JetBrains Mono'] },
      detail: allPresent && renderedViolations.length === 0
        ? 'Font trinity present, no violations'
        : `Found: ${[...found].join(', ')}. Violations: ${renderedViolations.length}`,
      samples: renderedViolations.slice(0, 3)
    };
  } catch(e) { errors.push({ gate: 'GR-06', error: e.message }); }

  // GR-08: No Decorative Elements — REQUIRED
  try {
    const decorative = [];
    document.querySelectorAll('hr').forEach(hr => {
      const prev = hr.previousElementSibling;
      const next = hr.nextElementSibling;
      if (!(prev && /^H[1-6]$/.test(prev.tagName)) && !(next && /^H[1-6]$/.test(next.tagName))) {
        decorative.push({ type: 'standalone-hr' });
      }
    });
    document.querySelectorAll('div').forEach(div => {
      if (div.textContent.trim() === '' && div.children.length === 0) {
        const rect = div.getBoundingClientRect();
        if (rect.height > 10) decorative.push({ type: 'empty-spacer', height: Math.round(rect.height) });
      }
    });
    document.querySelectorAll('[aria-hidden="true"], .icon, [class*="icon"]').forEach(el => {
      if (el.textContent.trim() === '' && !el.closest('button') && !el.closest('a')) {
        decorative.push({ type: 'decorative-icon', tag: el.tagName });
      }
    });
    gates['GR-08'] = {
      id: 'GR-08', category: 'Identity', tier: 'REQUIRED',
      pass: decorative.length === 0,
      value: { decorativeCount: decorative.length },
      threshold: { decorativeElements: 0 },
      detail: decorative.length === 0 ? 'No decorative elements' : `${decorative.length} decorative elements found`,
      samples: decorative.slice(0, 5)
    };
  } catch(e) { errors.push({ gate: 'GR-08', error: e.message }); }

  // GR-09: Border Weight Hierarchy — REQUIRED
  try {
    const weights = new Map();
    document.querySelectorAll('*').forEach(el => {
      if (!isRendered(el)) return;
      const s = getComputedStyle(el);
      ['borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth'].forEach(prop => {
        const w = parseFloat(s[prop]);
        if (w > 0) {
          const key = w.toFixed(1);
          weights.set(key, (weights.get(key) || 0) + 1);
        }
      });
    });
    const vals = [...weights.keys()].map(Number).sort((a, b) => b - a);
    const hasPrimary = vals.some(w => w >= 3.5 && w <= 4.5);
    const hasSecondary = vals.some(w => w >= 2.5 && w <= 3.5);
    const hasTertiary = vals.some(w => w >= 0.5 && w <= 1.5);
    const pass = hasPrimary && (hasSecondary || hasTertiary);
    gates['GR-09'] = {
      id: 'GR-09', category: 'Identity', tier: 'REQUIRED',
      pass,
      value: { distinctWeights: vals, hasPrimary, hasSecondary, hasTertiary },
      threshold: { hierarchy: '4px / 3px / 1px', tolerance: '+-0.5' },
      detail: pass ? 'Border hierarchy present' : `Missing: ${!hasPrimary ? '4px' : ''}${!hasSecondary && !hasTertiary ? ' secondary/tertiary' : ''}`
    };
  } catch(e) { errors.push({ gate: 'GR-09', error: e.message }); }

  // GR-10: Cross-Page DNA — REQUIRED
  try {
    // Sub-checks
    const skipLink = !!document.querySelector('[class*="skip"], a[href="#main"], a[href="#content"]');

    const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => h.tagName);
    let hierarchyOk = true;
    for (let i = 1; i < headings.length; i++) {
      if (parseInt(headings[i][1]) > parseInt(headings[i-1][1]) + 1) { hierarchyOk = false; break; }
    }

    const callouts = document.querySelectorAll('.callout, blockquote, [class*="callout"]');
    let calloutBorderOk = true;
    callouts.forEach(c => {
      const blw = parseFloat(getComputedStyle(c).borderLeftWidth);
      if (blw < 3.5 || blw > 4.5) calloutBorderOk = false;
    });

    let selectionRedOk = false;
    let focusVisibleOk = false;
    try {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule.selectorText) {
              if (rule.selectorText.includes('::selection')) {
                const bg = rule.style.backgroundColor || rule.style.background || '';
                if (/e83025|red|rgba?\(232/i.test(bg)) selectionRedOk = true;
              }
              if (rule.selectorText.includes(':focus-visible')) {
                const outline = rule.style.outline || rule.style.outlineWidth || '';
                if (outline.includes('3px')) focusVisibleOk = true;
              }
            }
          }
        } catch(e) { /* cross-origin */ }
      }
    } catch(e) { /* stylesheet access */ }

    let pMaxWidthOk = true;
    document.querySelectorAll('p').forEach(p => {
      const mw = getComputedStyle(p).maxWidth;
      if (mw !== 'none') {
        const px = parseFloat(mw);
        if (px > 0 && px > 1200) pMaxWidthOk = false;
      }
    });

    const bodyLH = parseFloat(getComputedStyle(document.body).lineHeight) / parseFloat(getComputedStyle(document.body).fontSize);
    const bodyLHOk = bodyLH >= 1.6;

    const h3s = document.querySelectorAll('h3');
    let h3ItalicOk = true;
    h3s.forEach(h3 => { if (getComputedStyle(h3).fontStyle !== 'italic') h3ItalicOk = false; });

    // Header DNA
    const header = document.querySelector('header') || document.querySelector('[class*="header"]') || document.querySelector('[role="banner"]');
    let headerDNA = false;
    if (header) {
      const hs = getComputedStyle(header);
      const bg = hs.backgroundColor;
      const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      const isDark = m ? (+m[1] + +m[2] + +m[3]) < 200 : false;
      const bbColor = hs.borderBottomColor;
      const isRedBorder = bbColor && bbColor.match(/rgba?\((\d+)/) && +bbColor.match(/rgba?\((\d+)/)[1] > 200;
      const bbWidth = parseFloat(hs.borderBottomWidth);
      const is3px = bbWidth >= 2.5 && bbWidth <= 3.5;
      headerDNA = isDark && !!isRedBorder && is3px;
    }

    // Section-presence check: pages must have >= 3 section-level elements
    // Without this, div-only pages bypass all perception gates (GR-11, GR-13, GR-14)
    const sectionCount = getSections().length;
    const hasSections = sectionCount >= 3;

    const checks = { skipLink, hierarchyOk, calloutBorderOk, selectionRedOk, focusVisibleOk, pMaxWidthOk, bodyLHOk, h3ItalicOk, headerDNA, hasSections };
    const allPass = Object.values(checks).every(Boolean);
    const failing = Object.entries(checks).filter(([,v]) => !v).map(([k]) => k);

    gates['GR-10'] = {
      id: 'GR-10', category: 'Identity', tier: 'REQUIRED',
      pass: allPass,
      value: checks,
      threshold: { allSubChecksTrue: true, minSections: 3 },
      detail: allPass ? 'All DNA properties present'
        : !hasSections ? `Only ${sectionCount} section-level elements found. Use <section> tags or zone/section class names for zone differentiation. Failing: ${failing.join(', ')}`
        : `Failing: ${failing.join(', ')}`
    };
  } catch(e) { errors.push({ gate: 'GR-10', error: e.message }); }

  // ═══════════════════════════════════════════════════════════════════════
  // CATEGORY C: PERCEPTION (6 gates)
  // ═══════════════════════════════════════════════════════════════════════

  // GR-11: Background Delta >= 15 RGB — REQUIRED
  try {
    const sections = getSections();
    const backgrounds = [];
    sections.forEach(s => {
      const bg = getComputedStyle(s).backgroundColor;
      const rgb = parseRGB(bg);
      if (rgb) backgrounds.push({ el: s.className || s.tagName, rgb, raw: bg });
    });
    const deltas = [];
    for (let i = 0; i < backgrounds.length - 1; i++) {
      const a = backgrounds[i].rgb, b = backgrounds[i+1].rgb;
      const delta = Math.max(Math.abs(a.r-b.r), Math.abs(a.g-b.g), Math.abs(a.b-b.b));
      deltas.push({ from: backgrounds[i].el, to: backgrounds[i+1].el, delta, pass: delta >= 15 });
    }
    const allPass = deltas.length === 0 || deltas.every(d => d.pass);
    gates['GR-11'] = {
      id: 'GR-11', category: 'Perception', tier: 'REQUIRED',
      pass: allPass,
      value: { zones: backgrounds.length, deltas },
      threshold: { minDelta: 15 },
      detail: allPass ? `All ${deltas.length} zone boundaries >= 15 RGB` : `${deltas.filter(d => !d.pass).length} boundaries below 15 RGB`
    };
  } catch(e) { errors.push({ gate: 'GR-11', error: e.message }); }

  // GR-13: Stacked Gap <= 120px (CSS sum) — REQUIRED
  try {
    const sections = getSections();
    const gaps = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const cs = getComputedStyle(sections[i]);
      const ns = getComputedStyle(sections[i+1]);
      const cssSum = parseFloat(cs.paddingBottom) + parseFloat(cs.marginBottom) +
                     parseFloat(ns.paddingTop) + parseFloat(ns.marginTop);
      gaps.push({ from: sections[i].className || sections[i].tagName,
                  to: sections[i+1].className || sections[i+1].tagName,
                  cssSum: Math.round(cssSum), pass: cssSum <= 120 });
    }
    const allPass = gaps.every(g => g.pass);
    gates['GR-13'] = {
      id: 'GR-13', category: 'Perception', tier: 'REQUIRED',
      pass: allPass,
      value: { gaps },
      threshold: { maxCSSSum: 120 },
      detail: allPass ? 'All stacked gaps <= 120px' : `${gaps.filter(g => !g.pass).length} gaps exceed 120px`
    };
  } catch(e) { errors.push({ gate: 'GR-13', error: e.message }); }

  // GR-14: Visual Gap <= 150px (getBoundingClientRect) — REQUIRED
  try {
    const main = document.querySelector('main, [role="main"], body');
    const scoped = [...(main || document.body).querySelectorAll(':scope > section, :scope > [class*="zone"], :scope > [class*="section"]')];
    const sections = scoped.length >= 2 ? scoped : [...getSections()];
    const gaps = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const cr = sections[i].getBoundingClientRect();
      const nr = sections[i+1].getBoundingClientRect();
      const gap = nr.top - cr.bottom;
      // Structural transition exemption
      let isStructural = false;
      const currBg = parseRGB(getComputedStyle(sections[i]).backgroundColor);
      const nextBg = parseRGB(getComputedStyle(sections[i+1]).backgroundColor);
      let sib = sections[i].nextElementSibling;
      while (sib && sib !== sections[i+1]) {
        const sibS = getComputedStyle(sib);
        if (sibS.position === 'relative' || sibS.position === 'absolute') {
          const sibBg = parseRGB(sibS.backgroundColor);
          if (sibBg && currBg && nextBg) {
            const d1 = Math.max(Math.abs(sibBg.r-currBg.r), Math.abs(sibBg.g-currBg.g), Math.abs(sibBg.b-currBg.b));
            const d2 = Math.max(Math.abs(sibBg.r-nextBg.r), Math.abs(sibBg.g-nextBg.g), Math.abs(sibBg.b-nextBg.b));
            if (d1 >= 15 && d2 >= 15) { isStructural = true; break; }
          }
        }
        sib = sib.nextElementSibling;
      }
      gaps.push({ from: sections[i].className || sections[i].tagName,
                  to: sections[i+1].className || sections[i+1].tagName,
                  gap: Math.round(gap), isStructural, pass: isStructural || gap <= 150 });
    }
    const allPass = gaps.every(g => g.pass);
    gates['GR-14'] = {
      id: 'GR-14', category: 'Perception', tier: 'REQUIRED',
      pass: allPass,
      value: { gaps },
      threshold: { maxVisualGap: 150 },
      detail: allPass ? 'All visual gaps <= 150px' : `${gaps.filter(g => !g.pass).length} gaps exceed 150px`
    };
  } catch(e) { errors.push({ gate: 'GR-14', error: e.message }); }

  // GR-15: Single Margin/Padding <= 96px — REQUIRED
  try {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      const s = getComputedStyle(el);
      // Exclude auto-centering margins (B-05)
      if (s.marginLeft === 'auto' && s.marginRight === 'auto') return;
      ['marginTop','marginBottom','paddingTop','paddingBottom'].forEach(prop => {
        const val = parseFloat(s[prop]);
        if (val > 96) violations.push({ tag: el.tagName, class: (el.className||'').toString().substring(0, 30), prop, value: Math.round(val) });
      });
    });
    gates['GR-15'] = {
      id: 'GR-15', category: 'Perception', tier: 'REQUIRED',
      pass: violations.length === 0,
      value: { violationCount: violations.length },
      threshold: { maxSingleValue: 96 },
      detail: violations.length === 0 ? 'No margin/padding > 96px' : `${violations.length} values exceed 96px`,
      samples: violations.slice(0, 5)
    };
  } catch(e) { errors.push({ gate: 'GR-15', error: e.message }); }

  // GR-18: Ghost Mechanisms — REQUIRED
  try {
    const ghosts = [];
    document.querySelectorAll('*').forEach(el => {
      const s = getComputedStyle(el);
      // Sub-perceptual borders
      ['borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth'].forEach(prop => {
        const w = parseFloat(s[prop]);
        if (w > 0 && w < 0.5) ghosts.push({ tag: el.tagName, type: 'border', value: w + 'px' });
      });
      // Sub-perceptual opacity
      const op = parseFloat(s.opacity);
      if (op > 0 && op < 0.1) ghosts.push({ tag: el.tagName, type: 'opacity', value: op });
      // Sub-perceptual letter-spacing (absorbed from GR-12)
      const ls = s.letterSpacing;
      if (ls && ls !== 'normal' && ls !== '0px') {
        const px = parseFloat(ls);
        const fs = parseFloat(s.fontSize);
        if (fs > 0 && px > 0 && (px / fs) < 0.025) {
          ghosts.push({ tag: el.tagName, type: 'letter-spacing', value: ls });
        }
      }
    });
    gates['GR-18'] = {
      id: 'GR-18', category: 'Perception', tier: 'REQUIRED',
      pass: ghosts.length === 0,
      value: { ghostCount: ghosts.length },
      threshold: { ghostMechanisms: 0 },
      detail: ghosts.length === 0 ? 'No ghost mechanisms' : `${ghosts.length} sub-perceptual values found`,
      samples: ghosts.slice(0, 5)
    };
  } catch(e) { errors.push({ gate: 'GR-18', error: e.message }); }

  // GR-44: Trailing Void — REQUIRED
  try {
    const pageBottom = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    let lastVisibleBottom = 0;
    let lastEl = null;
    [...document.querySelectorAll('body *')].forEach(el => {
      if (['SCRIPT','STYLE','META','LINK'].includes(el.tagName)) return;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden' || parseFloat(s.opacity) === 0) return;
      const rect = el.getBoundingClientRect();
      if (rect.height === 0) return;
      const absBottom = rect.bottom + scrollTop;
      if (absBottom > lastVisibleBottom) { lastVisibleBottom = absBottom; lastEl = el.tagName; }
    });
    const voidH = Math.round(pageBottom - lastVisibleBottom);
    gates['GR-44'] = {
      id: 'GR-44', category: 'Perception', tier: 'REQUIRED',
      pass: voidH <= 300,
      value: { pageHeight: Math.round(pageBottom), lastContentBottom: Math.round(lastVisibleBottom), voidHeight: voidH, lastElement: lastEl },
      threshold: { maxVoid: 300 },
      detail: voidH <= 300 ? `Trailing void ${voidH}px (OK)` : `Trailing void ${voidH}px exceeds 300px`
    };
  } catch(e) { errors.push({ gate: 'GR-44', error: e.message }); }

  // ═══════════════════════════════════════════════════════════════════════
  // CATEGORY D: ANTI-PATTERN (1 gate)
  // ═══════════════════════════════════════════════════════════════════════

  // GR-45: Typography Variation — RECOMMENDED
  try {
    const h2Sizes = new Map();
    const h3Sizes = new Map();
    document.querySelectorAll('h2').forEach(el => {
      if (!isRendered(el)) return;
      const fs = Math.round(parseFloat(getComputedStyle(el).fontSize));
      h2Sizes.set(fs, (h2Sizes.get(fs) || 0) + 1);
    });
    document.querySelectorAll('h3').forEach(el => {
      if (!isRendered(el)) return;
      const fs = Math.round(parseFloat(getComputedStyle(el).fontSize));
      h3Sizes.set(fs, (h3Sizes.get(fs) || 0) + 1);
    });
    function toBands(sizeMap) {
      const sorted = [...sizeMap.keys()].sort((a, b) => a - b);
      const bands = [];
      for (const size of sorted) {
        const existing = bands.find(b => Math.abs(b.center - size) <= 4);
        if (existing) existing.count += sizeMap.get(size);
        else bands.push({ center: size, count: sizeMap.get(size) });
      }
      return bands;
    }
    const h2Bands = toBands(h2Sizes);
    const h2Count = [...h2Sizes.values()].reduce((s, c) => s + c, 0);
    const useFallback = h2Count < 3;
    let pass;
    if (useFallback) {
      const all = new Map([...h2Sizes]);
      h3Sizes.forEach((c, s) => all.set(s, (all.get(s) || 0) + c));
      pass = toBands(all).length >= 2;
    } else {
      pass = h2Bands.length >= 2;
    }
    gates['GR-45'] = {
      id: 'GR-45', category: 'Anti-Pattern', tier: 'RECOMMENDED',
      pass,
      value: { h2Count, h2Bands: h2Bands.length, usedFallback: useFallback },
      threshold: { minBands: 2, bandTolerance: '4px' },
      detail: pass ? `${h2Bands.length} H2 size bands found` : 'Typography monotony: < 2 size bands'
    };
  } catch(e) { errors.push({ gate: 'GR-45', error: e.message }); }

  // GR-66: Transform/Transition Prohibition — ADVISORY
  // Conventions prohibit transform and transition (except opacity fades).
  // This gate scans stylesheets for prohibited properties.
  try {
    const violations = [];
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (!rule.style) continue;
          // Check transform
          if (rule.style.transform && rule.style.transform !== 'none') {
            violations.push({ selector: rule.selectorText, property: 'transform', value: rule.style.transform });
          }
          // Check transition (allow opacity-only transitions)
          if (rule.style.transition && rule.style.transition !== 'none' && rule.style.transition !== '') {
            const val = rule.style.transition.toLowerCase();
            // Allow if transition is ONLY on opacity
            if (!val.includes('opacity') || val.includes('all') || val.includes('background') || val.includes('color') || val.includes('transform')) {
              violations.push({ selector: rule.selectorText, property: 'transition', value: rule.style.transition });
            }
          }
        }
      } catch(e) { /* cross-origin stylesheet */ }
    }
    gates['GR-66'] = {
      id: 'GR-66', category: 'Identity', tier: 'ADVISORY',
      pass: violations.length === 0,
      value: { violationCount: violations.length },
      threshold: { maxViolations: 0 },
      detail: violations.length === 0 ? 'No prohibited transform/transition' : `${violations.length} transform/transition violations`,
      samples: violations.slice(0, 5)
    };
  } catch(e) { errors.push({ gate: 'GR-66', error: e.message }); }

  // ═══════════════════════════════════════════════════════════════════════
  // CATEGORY E: EXPERIENTIAL (1 browser gate — GR-61)
  // GR-62 is a Node.js gate (filesystem), checked by orchestrator separately
  // ═══════════════════════════════════════════════════════════════════════

  // GR-61: DPR Validation — ADVISORY (moved from REQUIRED: DPR=2 on Retina always failed)
  try {
    const dpr = window.devicePixelRatio;
    gates['GR-61'] = {
      id: 'GR-61', category: 'Experiential', tier: 'ADVISORY',
      pass: dpr <= 2,
      value: { devicePixelRatio: dpr },
      threshold: { maxDevicePixelRatio: 2 },
      detail: dpr <= 2 ? `DPR = ${dpr} (acceptable)` : `DPR = ${dpr} — screenshots may be scaled`
    };
  } catch(e) { errors.push({ gate: 'GR-61', error: e.message }); }

  // ═══════════════════════════════════════════════════════════════════════
  // ADVISORY GATES (7 — reported, never block)
  // ═══════════════════════════════════════════════════════════════════════

  // GR-01: Border Radius Zero — ADVISORY
  try {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      if (!isRendered(el)) return;
      const br = getComputedStyle(el).borderRadius;
      if (br && br !== '0px') violations.push({ tag: el.tagName, value: br });
    });
    gates['GR-01'] = {
      id: 'GR-01', category: 'Identity', tier: 'ADVISORY',
      pass: violations.length === 0,
      value: { violationCount: violations.length },
      threshold: { borderRadius: '0px' },
      detail: violations.length === 0 ? 'No border-radius' : `${violations.length} elements with border-radius`,
      samples: violations.slice(0, 3)
    };
  } catch(e) { errors.push({ gate: 'GR-01', error: e.message }); }

  // GR-02: Box Shadow None — ADVISORY
  try {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      if (!isRendered(el)) return;
      const bs = getComputedStyle(el).boxShadow;
      if (bs && bs !== 'none') violations.push({ tag: el.tagName, value: bs.substring(0, 60) });
    });
    gates['GR-02'] = {
      id: 'GR-02', category: 'Identity', tier: 'ADVISORY',
      pass: violations.length === 0,
      value: { violationCount: violations.length },
      threshold: { boxShadow: 'none' },
      detail: violations.length === 0 ? 'No box-shadow' : `${violations.length} elements with box-shadow`,
      samples: violations.slice(0, 3)
    };
  } catch(e) { errors.push({ gate: 'GR-02', error: e.message }); }

  // GR-04: No Gradients — ADVISORY
  try {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      if (!isRendered(el)) return;
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.includes('gradient')) {
        violations.push({ tag: el.tagName, value: bg.substring(0, 80) });
      }
    });
    gates['GR-04'] = {
      id: 'GR-04', category: 'Identity', tier: 'ADVISORY',
      pass: violations.length === 0,
      value: { violationCount: violations.length },
      threshold: { gradients: 0 },
      detail: violations.length === 0 ? 'No gradients' : `${violations.length} gradient backgrounds`,
      samples: violations.slice(0, 3)
    };
  } catch(e) { errors.push({ gate: 'GR-04', error: e.message }); }

  // GR-07: No Pure B/W — ADVISORY (data already collected in GR-05 block)
  try {
    gates['GR-07'] = {
      id: 'GR-07', category: 'Identity', tier: 'ADVISORY',
      pass: colorData.pureBlack === 0 && colorData.pureWhite === 0,
      value: { pureBlack: colorData.pureBlack, pureWhite: colorData.pureWhite },
      threshold: { pureBlack: 0, pureWhite: 0 },
      detail: (colorData.pureBlack === 0 && colorData.pureWhite === 0)
        ? 'No pure black/white'
        : `${colorData.pureBlack} pure black, ${colorData.pureWhite} pure white`
    };
  } catch(e) { errors.push({ gate: 'GR-07', error: e.message }); }

  // GR-20: Structural Echo — ADVISORY
  try {
    const sections = getSections();
    const sigs = [];
    sections.forEach(s => {
      const st = getComputedStyle(s);
      sigs.push({ bg: st.backgroundColor, padding: st.padding, borderBottom: st.borderBottom });
    });
    let maxRun = 1, cur = 1;
    for (let i = 1; i < sigs.length; i++) {
      if (sigs[i].bg === sigs[i-1].bg && sigs[i].padding === sigs[i-1].padding && sigs[i].borderBottom === sigs[i-1].borderBottom) {
        cur++; maxRun = Math.max(maxRun, cur);
      } else { cur = 1; }
    }
    gates['GR-20'] = {
      id: 'GR-20', category: 'Anti-Pattern', tier: 'ADVISORY',
      pass: maxRun < 3,
      value: { maxConsecutive: maxRun },
      threshold: { maxConsecutiveIdentical: 2 },
      detail: maxRun < 3 ? 'No structural echo' : `${maxRun} consecutive identical sections`
    };
  } catch(e) { errors.push({ gate: 'GR-20', error: e.message }); }

  // GR-51: Background Delta Distribution — ADVISORY
  try {
    const sections = getSections();
    const deltas = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const a = parseRGB(getComputedStyle(sections[i]).backgroundColor);
      const b = parseRGB(getComputedStyle(sections[i+1]).backgroundColor);
      if (a && b) {
        const d = Math.max(Math.abs(a.r-b.r), Math.abs(a.g-b.g), Math.abs(a.b-b.b));
        if (d > 0) deltas.push(d);
      }
    }
    let pass = true;
    let above25Ratio = 0;
    let stddev = 0;
    if (deltas.length > 0) {
      const above25 = deltas.filter(d => d >= 25);
      above25Ratio = above25.length / deltas.length;
      const mean = deltas.reduce((s, d) => s + d, 0) / deltas.length;
      stddev = Math.sqrt(deltas.reduce((s, d) => s + Math.pow(d - mean, 2), 0) / deltas.length);
      pass = above25Ratio >= 0.50 && stddev >= 8;
    }
    gates['GR-51'] = {
      id: 'GR-51', category: 'Perception', tier: 'ADVISORY',
      pass,
      value: { deltaCount: deltas.length, above25Ratio: +above25Ratio.toFixed(2), stddev: +stddev.toFixed(1) },
      threshold: { minAbove25Ratio: 0.50, minStddev: 8 },
      detail: pass ? 'Background delta distribution is varied' : 'Backgrounds too uniform or clustered'
    };
  } catch(e) { errors.push({ gate: 'GR-51', error: e.message }); }

  // GR-55: Multi-Coherence Channel Count — ADVISORY
  try {
    const sections = getSections();
    const boundaries = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const aS = getComputedStyle(sections[i]);
      const bS = getComputedStyle(sections[i+1]);
      let channels = 0;
      const details = {};
      // Background
      const aBg = parseRGB(aS.backgroundColor);
      const bBg = parseRGB(bS.backgroundColor);
      if (aBg && bBg) {
        const d = Math.max(Math.abs(aBg.r-bBg.r), Math.abs(aBg.g-bBg.g), Math.abs(aBg.b-bBg.b));
        if (d >= 15) { channels++; details.background = d; }
      }
      // Font-family
      if (aS.fontFamily !== bS.fontFamily) { channels++; details.fontFamily = true; }
      // Font-size (>= 2px)
      const aFs = parseFloat(aS.fontSize), bFs = parseFloat(bS.fontSize);
      if (Math.abs(aFs - bFs) >= 2) { channels++; details.fontSize = Math.abs(aFs - bFs).toFixed(1); }
      // Letter-spacing (>= 0.5px)
      const aLs = aS.letterSpacing === 'normal' ? 0 : parseFloat(aS.letterSpacing);
      const bLs = bS.letterSpacing === 'normal' ? 0 : parseFloat(bS.letterSpacing);
      if (Math.abs(aLs - bLs) >= 0.5) { channels++; details.letterSpacing = Math.abs(aLs - bLs).toFixed(1); }
      // Border (structural)
      const aBW = parseFloat(aS.borderBottomWidth), bBW = parseFloat(bS.borderTopWidth);
      if ((aBW > 0) !== (bBW > 0) || Math.abs(aBW - bBW) >= 1) { channels++; details.border = true; }
      // Padding (>= 8px)
      const aPad = parseFloat(aS.paddingBottom) + parseFloat(aS.paddingTop);
      const bPad = parseFloat(bS.paddingBottom) + parseFloat(bS.paddingTop);
      if (Math.abs(aPad - bPad) >= 8) { channels++; details.padding = Math.abs(aPad - bPad).toFixed(0); }

      boundaries.push({
        from: sections[i].className || sections[i].tagName,
        to: sections[i+1].className || sections[i+1].tagName,
        channels, details, pass: channels >= 3
      });
    }
    const allPass = boundaries.every(b => b.pass);
    gates['GR-55'] = {
      id: 'GR-55', category: 'Perception', tier: 'ADVISORY',
      pass: allPass,
      value: { boundaryCount: boundaries.length, weakBoundaries: boundaries.filter(b => !b.pass).length,
               minChannels: boundaries.length > 0 ? Math.min(...boundaries.map(b => b.channels)) : 0 },
      threshold: { minChannelsPerBoundary: 3 },
      detail: allPass ? 'All boundaries have >= 3 channels' : `${boundaries.filter(b => !b.pass).length} weak boundaries`,
      boundaries: boundaries.map(b => ({ from: b.from, to: b.to, channels: b.channels, pass: b.pass }))
    };
  } catch(e) { errors.push({ gate: 'GR-55', error: e.message }); }

  // ═══════════════════════════════════════════════════════════════════════
  // CATEGORY F: META (1 gate — GR-48)
  // ═══════════════════════════════════════════════════════════════════════

  // GR-48: Gate Coverage — REQUIRED
  // Self-referential: excluded from its own coverage array.
  // Checks that all 14 other REQUIRED gates produced results.
  try {
    const REQUIRED = [
      'GR-03','GR-05','GR-06','GR-08','GR-09','GR-10',
      'GR-11','GR-13','GR-14','GR-15','GR-18','GR-44',
      'GR-60','GR-67'
    ];
    // GR-45 is RECOMMENDED, not in required list. GR-61 moved to ADVISORY.
    const missing = REQUIRED.filter(id => !(id in gates));
    gates['GR-48'] = {
      id: 'GR-48', category: 'Meta', tier: 'REQUIRED',
      pass: missing.length === 0,
      value: { requiredPresent: REQUIRED.length - missing.length, requiredTotal: REQUIRED.length,
               totalGatesRun: Object.keys(gates).length, missing },
      threshold: { coverage: '14/14 REQUIRED gates' },
      detail: missing.length === 0 ? 'All 14 REQUIRED gates produced results' : `Missing: ${missing.join(', ')}`
    };
  } catch(e) { errors.push({ gate: 'GR-48', error: e.message }); }

  // ═══════════════════════════════════════════════════════════════════════
  // SUMMARY (computed inside JS)
  // ═══════════════════════════════════════════════════════════════════════

  const essentialIds = [
    'GR-03','GR-05','GR-06','GR-08','GR-09','GR-10',
    'GR-11','GR-13','GR-14','GR-15','GR-18','GR-44',
    'GR-48','GR-60','GR-67',
    'GR-45' // RECOMMENDED but part of essential routing
  ];
  const advisoryIds = ['GR-01','GR-02','GR-04','GR-07','GR-20','GR-51','GR-55','GR-61','GR-66'];

  let essential_pass = 0, essential_fail = 0;
  let advisory_pass = 0, advisory_fail = 0;

  for (const [id, g] of Object.entries(gates)) {
    if (essentialIds.includes(id)) {
      if (g.pass) essential_pass++; else essential_fail++;
    } else if (advisoryIds.includes(id)) {
      if (g.pass) advisory_pass++; else advisory_fail++;
    }
  }

  const summary = {
    essential_pass,
    essential_fail,
    advisory_pass,
    advisory_fail,
    gates_failed: essential_fail > 0,
    total_gates: Object.keys(gates).length,
    essential_total: essentialIds.length,
    advisory_total: advisoryIds.length
  };

  return JSON.stringify({ gates, metadata, summary, errors }, null, 2);
};

// ═══════════════════════════════════════════════════════════════════════════
// EXPORTED UTILITIES (called by orchestrator OUTSIDE browser_evaluate)
// ═══════════════════════════════════════════════════════════════════════════

// BV Gates: Text-only, run by orchestrator via Read + string operations
// The orchestrator checks these BEFORE the browser gate runner.
//
// BV-01: Brief has >= 5 sections (## headers)
// BV-02: Each section has >= 3 non-empty lines
// BV-03: Brief total > 100 bytes
// BV-04: Brief contains at least 4 of: WORLD, CALIBRATION, OPPOSITION, ARC, MAP
//
// Implementation (for orchestrator to execute as text scan):
function checkBriefVerification(briefText) {
  const results = {};

  // BV-01: Section count
  const headers = briefText.match(/^##?\s+.+/gm) || [];
  results['BV-01'] = {
    id: 'BV-01', category: 'BV', tier: 'REQUIRED',
    pass: headers.length >= 5,
    value: { sectionCount: headers.length },
    threshold: { minSections: 5 },
    detail: headers.length >= 5 ? `${headers.length} sections found` : `Only ${headers.length} sections (need 5)`
  };

  // BV-02: Each section >= 3 non-empty lines
  const sections = briefText.split(/^##?\s+.+/gm).filter(s => s.trim());
  const thinSections = sections.filter(s => s.split('\n').filter(l => l.trim()).length < 3);
  results['BV-02'] = {
    id: 'BV-02', category: 'BV', tier: 'REQUIRED',
    pass: thinSections.length === 0,
    value: { totalSections: sections.length, thinSections: thinSections.length },
    threshold: { minLinesPerSection: 3 },
    detail: thinSections.length === 0 ? 'All sections have >= 3 lines' : `${thinSections.length} sections below 3 lines`
  };

  // BV-03: Total > 100 bytes
  const bytes = new Blob([briefText]).size;
  results['BV-03'] = {
    id: 'BV-03', category: 'BV', tier: 'REQUIRED',
    pass: bytes > 100,
    value: { bytes },
    threshold: { minBytes: 100 },
    detail: bytes > 100 ? `Brief is ${bytes} bytes` : `Brief too short (${bytes} bytes)`
  };

  // BV-04: Contains key section names
  const keywords = ['WORLD', 'CALIBRATION', 'OPPOSITION', 'ARC', 'MAP'];
  const found = keywords.filter(k => briefText.toUpperCase().includes(k));
  results['BV-04'] = {
    id: 'BV-04', category: 'BV', tier: 'REQUIRED',
    pass: found.length >= 4,
    value: { found, missing: keywords.filter(k => !found.includes(k)) },
    threshold: { minKeywords: 4, from: keywords },
    detail: found.length >= 4 ? `${found.length}/5 key sections present` : `Only ${found.length}/5 key sections`
  };

  return results;
}

// GR-62: Screenshot Quality — Node.js gate
// Run by orchestrator after screenshot capture.
// Input: array of { path, sizeBytes } objects per viewport
function checkScreenshotQuality(screenshots1440, screenshots768) {
  const BLANK_THRESHOLD = 5000;
  const results = {};

  function checkViewport(name, files) {
    if (!files || files.length < 3) {
      return { pass: false, reason: files ? `Only ${files.length} screenshots (need 3)` : 'No screenshots', fileCount: files ? files.length : 0 };
    }
    const blanks = files.map(f => f.sizeBytes < BLANK_THRESHOLD);
    const blankCount = blanks.filter(Boolean).length;
    const blankRatio = blankCount / files.length;
    let maxConsec = 0, cur = 0;
    for (const b of blanks) { if (b) { cur++; maxConsec = Math.max(maxConsec, cur); } else cur = 0; }
    return {
      pass: maxConsec <= 2 && blankRatio <= 0.20,
      fileCount: files.length, blankCount, blankRatio: +blankRatio.toFixed(2), maxConsecutiveBlanks: maxConsec
    };
  }

  const v1440 = checkViewport('1440', screenshots1440);
  const v768 = checkViewport('768', screenshots768);

  results['GR-62'] = {
    id: 'GR-62', category: 'Experiential', tier: 'REQUIRED',
    pass: v1440.pass && v768.pass,
    value: { '1440': v1440, '768': v768 },
    threshold: { minScreenshots: 3, maxConsecutiveBlanks: 2, maxBlankRatio: 0.20 },
    detail: (v1440.pass && v768.pass) ? 'Screenshot quality OK' : 'Screenshot quality issues detected'
  };

  return results;
}

// ═══════════════════════════════════════════════════════════════════════════
// MODULE EXPORT
// For orchestrator usage:
//   1. browser_evaluate(gateRunnerV2)  — returns JSON string
//   2. checkBriefVerification(text)    — returns BV gate results object
//   3. checkScreenshotQuality(...)     — returns GR-62 result object
// ═══════════════════════════════════════════════════════════════════════════
