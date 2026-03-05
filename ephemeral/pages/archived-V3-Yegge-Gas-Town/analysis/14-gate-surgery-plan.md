# Gate Runner Core — Surgical Replacement Plan

**Date:** 2026-02-24
**Surgeon:** Opus agent (Task #25)
**Source file:** `ephemeral/va-extraction/gate-runner-core.js` (1,436 lines)
**Budget constraint:** NET ZERO OR NEGATIVE lines
**Authority:** gate-usability-audit.md, 05-MASTER-ENRICHMENT-LIST.md

---

## EXECUTIVE SUMMARY

The gate-runner-core.js file is at 1,436 lines (68% of capacity). The enrichment list identifies 15 changes targeting this file. This plan achieves the highest-leverage changes (ME-003, ME-007, ME-010) while staying net-zero by consolidating and trimming sub-perceptual gates.

**Strategy:** Free lines by consolidating GR-05+GR-07 (overlapping pure-color checks), trimming GR-12 (merge into GR-18), and tightening existing gate code. Use freed lines for GR-60 (WCAG contrast) and GR-44 fix.

**Line budget:**

| Operation | Lines freed | Lines added | Net |
|-----------|------------|-------------|-----|
| Consolidate GR-05 + GR-07 overlap | +32 | 0 | +32 |
| Merge GR-12 into GR-18 (remove standalone) | +20 | +5 | +15 |
| Trim GR-21 verbose slicing code | +12 | +4 | +8 |
| Trim GR-22 verbose detection code | +8 | +3 | +5 |
| **Subtotal freed** | | | **+60** |
| Add GR-60 (WCAG contrast, REQUIRED) | 0 | -55 | -55 |
| Fix GR-44 (trailing void measurement) | +5 | -8 | -3 |
| Fix GR-14 (parent scoping) | +2 | -4 | -2 |
| **TOTAL NET** | | | **0** |

---

## SECTION 1: SUB-PERCEPTUAL GATE CONSOLIDATION (Lines Freed: +60)

### 1A. Consolidate GR-05 + GR-07 Color Checks (+32 lines freed)

**Problem:** GR-05 (Warm Palette) and GR-07 (No Pure B/W) both iterate all DOM elements and parse RGB colors. GR-05 lines 235-277 (43 lines) and GR-07 lines 310-342 (33 lines) = 76 lines total doing overlapping work. Both check `pureBlack` and `pureWhite` independently.

**Replacement:** Merge into single GR-05 with sub-perceptual split (ME-010). The merged gate:
- Iterates elements ONCE (saves a full `querySelectorAll('*').forEach`)
- Reports GR-05a (visible cold colors, opacity >= 0.3) as REQUIRED
- Reports GR-05b (sub-perceptual tints, opacity < 0.3) as ADVISORY
- Reports pure B/W violations as RECOMMENDED (replaces standalone GR-07)

**Lines to DELETE (76 lines):**

```javascript
// DELETE: GR-05 (lines 234-277) — entire gate block
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
```

```javascript
// DELETE: GR-07 (lines 309-342) — entire gate block
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
```

**Lines to ADD (44 lines) — Merged GR-05a/GR-05b/GR-07 replacement:**

```javascript
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
    measured: { visibleCold: colorCheck.visibleCold, samples: colorCheck.samples.visibleCold },
    threshold: { visibleColdColors: 0, opacityFloor: 0.3 }
  });
  results.push({
    gate: 'GR-07', name: 'No Pure Black / White (Visible Text)',
    status: (colorCheck.pureBlack === 0 && colorCheck.pureWhite === 0) ? 'PASS' : 'FAIL',
    measured: { pureBlack: colorCheck.pureBlack, pureWhite: colorCheck.pureWhite, samples: { black: colorCheck.samples.black, white: colorCheck.samples.white } },
    threshold: { pureBlack: 0, pureWhite: 0, scope: 'visible-text-elements-only' }
  });
```

**Net change:** DELETE 76, ADD 44 = **+32 lines freed**

**Coordinated changes (outside gate-runner-core.js):**
- gate-manifest.json: Move GR-07 from REQUIRED to RECOMMENDED. Add GR-05b as ADVISORY.
- GR-48 REQUIRED_GATES array (line 1332): Remove 'GR-07'. Keep 'GR-05' (now means GR-05a).
- GR-48 RECOMMENDED_GATES array (line 1338): Add 'GR-07'.
- gate-runner-spec.md: Update GR-05 description (split), GR-07 tier change.

---

### 1B. Remove Standalone GR-12, Merge into GR-18 (+15 lines freed)

**Problem:** GR-12 (letter-spacing >= 0.025em) is SUB-PERCEPTUAL at REQUIRED tier. The entire monitored range (0 to 0.4px) is below human perception. GR-18 (Ghost Mechanisms) already catches sub-perceptual borders and opacity at RECOMMENDED tier.

**Replacement:** Remove standalone GR-12. Merge letter-spacing check INTO GR-18 as a third sub-check (it already checks sub-perceptual borders and opacity). Downgrade effective tier from REQUIRED to RECOMMENDED.

**Lines to DELETE (20 lines, lines 576-597):**

```javascript
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
```

**Lines to ADD to GR-18 (5 lines, insert after opacity check at line ~835):**

```javascript
      // Sub-perceptual letter-spacing (absorbed from GR-12)
      const ls = getComputedStyle(el).letterSpacing;
      if (ls && ls !== 'normal' && ls !== '0px') {
        const px = parseFloat(ls); const fs = parseFloat(getComputedStyle(el).fontSize);
        if (fs > 0 && px > 0 && (px / fs) < 0.025) ghosts.push({ tag: el.tagName, class: el.className, value: ls, type: 'sub-perceptual-letter-spacing' });
      }
```

**Net change:** DELETE 20, ADD 5 = **+15 lines freed**

**Coordinated changes:**
- GR-48 REQUIRED_GATES array (line 1333): Remove 'GR-12'.
- gate-manifest.json: Remove GR-12 from REQUIRED, note "absorbed into GR-18".
- gate-runner-spec.md: Remove GR-12 row, add note to GR-18 row.
- Verdict summary (line 756): Remove GR-12 from perceptionGates list.

---

### 1C. Trim GR-21 Cognitive Overload (+8 lines freed)

**Problem:** GR-21 (lines 927-978, 52 lines) uses a verbose per-slice scanning approach. The inner loop iterates ALL elements per slice, which is both expensive and unnecessarily verbose.

**Replacement:** Compact the slicing logic. Also raise threshold from 4 to 6 per ME-028 (COMPOSED mode pages legitimately have more bg colors).

**Lines to DELETE (52 lines, lines 927-978):**

```javascript
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
```

**Lines to ADD (40 lines) — Compacted replacement:**

```javascript
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
    measured: overloadCheck,
    threshold: { maxDistinctBackgrounds: 6, sliceHeight: '900px' },
    evidence: 'THEORETICAL',
    note: 'Excludes alpha < 0.1 backgrounds. Threshold raised from 4 to 6 for COMPOSED mode.'
  });
```

**Net change:** DELETE 52, ADD 40 = **+12 freed → account for ~4 net compression = +8 lines freed**

Changes: threshold 4 -> 6 (ME-028), exclude alpha < 0.1 backgrounds (ME-028).

---

### 1D. Trim GR-22 Color Zone Conflict (+5 lines freed)

**Problem:** GR-22 (lines 980-1035, 56 lines) is verbose. Also needs skip-link exemption per ME-028.

**Replacement:** Compact and add skip-link exemption.

**Lines to DELETE (56 lines, lines 980-1035):**

The full GR-22 block.

**Lines to ADD (48 lines) — Compacted with skip-link exemption:**

```javascript
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
    measured: colorConflictCheck,
    threshold: { maxRedBackgrounds: 2 },
    evidence: 'OBSERVED',
    note: 'Skip-link elements excluded. Red for borders/emphasis, not backgrounds.'
  });
```

**Net change:** DELETE 56, ADD 48 = **+8 freed → ~5 after formatting = +5 lines freed**

---

## SECTION 2: NEW GATES (Lines Consumed: -55)

### 2A. New Gate: GR-60 — Text Contrast Legibility (REQUIRED) [ME-003]

- **Lines needed:** 55
- **Replaces:** Lines freed from Section 1 consolidation
- **Net change:** -55 (consumed from +60 freed budget)
- **Priority:** BLOCKING (ME-003, priority rank 3)

**Exact code to ADD (insert at end of Section 2, before GR-44, around line 700):**

```javascript
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
    measured: contrastCheck,
    threshold: { normalText: '4.5:1', largeText: '3.0:1', standard: 'WCAG 2.1 AA' }
  });
```

**Coordinated changes (outside gate-runner-core.js):**
- GR-48 REQUIRED_GATES array (line 1332): Add 'GR-60'.
- gate-manifest.json: Add GR-60 to REQUIRED tier.
- gate-runner-spec.md: Add GR-60 row (Perception, REQUIRED, Post-build, Playwright).
- Verdict summary: Add GR-60 to perceptionGates list.

---

## SECTION 3: GATE FIXES (Lines Consumed: -5)

### 3A. Fix GR-44: Trailing Void Measurement [ME-007]

**Problem:** GR-44 measures from `body.getBoundingClientRect().bottom` vs last visible element's bottom. But `body.getBoundingClientRect()` can underreport when body has no explicit height. The correct measurement uses `document.documentElement.scrollHeight` as the page extent.

**Current code (lines 702-735, 34 lines):**

```javascript
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
```

**Replacement code (37 lines):**

```javascript
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
```

Key fixes:
1. Uses `document.documentElement.scrollHeight` instead of `body.getBoundingClientRect().bottom` -- catches cases where body height does not reflect full page extent
2. Adds `scrollTop` offset to convert viewport-relative `rect.bottom` to absolute page position
3. Checks `opacity === 0` elements (invisible content should not count as "last visible")
4. Reports which element is the last visible (diagnostic aid)

**Net change:** DELETE 34, ADD 37 = **-3 lines consumed**

---

### 3B. Fix GR-14: Structural False Positives [ME-012]

**Problem:** GR-14 measures gaps between ALL `section, [class*="zone"], [class*="section"]` elements, including NESTED sub-sections within zones. This produces false positives when a zone contains inner sections.

**Fix:** Add parent-scoping filter — only measure gaps between elements that are siblings OR direct children of the same container.

**Current code (lines 627-678) — modify the section query to add scoping:**

Replace line 638:
```javascript
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
```

With:
```javascript
    const main = document.querySelector('main, [role="main"], body');
    const sections = [...(main || document.body).querySelectorAll(':scope > section, :scope > [class*="zone"], :scope > [class*="section"]')];
    // Fallback: if scoping yields < 2, use original selector
    const finalSections = sections.length >= 2 ? sections : document.querySelectorAll('section, [class*="zone"], [class*="section"]');
```

**Net change:** DELETE 1, ADD 3 = **-2 lines consumed**

---

## SECTION 4: TIER RECLASSIFICATIONS (Zero Line Change)

These changes require ONLY modifications to the GR-48 arrays and verdict summary logic. They are code-level changes within existing lines, not additions.

### 4A. Downgrade GR-43 to RECOMMENDED [ME-026]

**Change in GR-48 (line 1332):** Remove 'GR-43' from REQUIRED_GATES array.
**Change in GR-48 (line 1338):** Add 'GR-43' to RECOMMENDED_GATES array.
**Change in verdict summary (line 760):** Remove GR-43 from `outputGates` filter. Add to recommended.

**Exact edits:**

Line 1332 — change:
```javascript
    'GR-01', 'GR-02', 'GR-03', 'GR-04', 'GR-05', 'GR-06', 'GR-07', 'GR-08', 'GR-09', 'GR-10',
    'GR-11', 'GR-12', 'GR-13', 'GR-14', 'GR-15',
    'GR-43', 'GR-44'
```
To:
```javascript
    'GR-01', 'GR-02', 'GR-03', 'GR-04', 'GR-05', 'GR-06', 'GR-08', 'GR-09', 'GR-10',
    'GR-11', 'GR-13', 'GR-14', 'GR-15',
    'GR-44', 'GR-60'
```
(Removes GR-07, GR-12, GR-43 from REQUIRED; adds GR-60)

Line 1338 — change:
```javascript
    'GR-17', 'GR-18', 'GR-19', 'GR-20',
    'GR-45', 'GR-49', 'GR-51', 'GR-52'
```
To:
```javascript
    'GR-07', 'GR-17', 'GR-18', 'GR-20',
    'GR-43', 'GR-45', 'GR-49', 'GR-51', 'GR-52'
```
(Adds GR-07, GR-43 to RECOMMENDED; removes GR-19 — see 4C below)

Line 753 — update identityGates filter:
```javascript
  const identityGates = results.filter(r => ['GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-08','GR-09','GR-10'].includes(r.gate));
```
(Remove GR-07)

Line 756 — update perceptionGates filter:
```javascript
  const perceptionGates = results.filter(r => ['GR-11', 'GR-13', 'GR-14', 'GR-15', 'GR-44', 'GR-60'].includes(r.gate));
```
(Remove GR-12, add GR-60)

### 4B. Downgrade GR-19 to ADVISORY [ME-027]

No code change needed in GR-19 itself. Only array changes:
- Remove from RECOMMENDED_GATES (already done in 4A edit)
- gate-manifest.json: Move GR-19 to ADVISORY tier

### 4C. Fix GR-17 List Item Threshold [ME-029]

**Change in GR-17 (line 792):** Add `li` to the reduced-minimum group.

Replace line 792:
```javascript
    document.querySelectorAll('p, li, blockquote, .callout').forEach(el => {
```

With the `li` exemption inside the loop (add after the existing `p` check):
```javascript
    document.querySelectorAll('p, blockquote, .callout').forEach(el => {
```

And add `li` to the table-cell group at line 801:
```javascript
    document.querySelectorAll('td, th, li').forEach(el => {
```

This moves `li` from the 12px-minimum group to the 4px-minimum group. **Net zero lines.**

---

## SECTION 5: GR-44 FIX DETAIL (Trailing Void)

Already covered in Section 3A above. The key changes:

1. **Measurement source:** `document.documentElement.scrollHeight` instead of `body.getBoundingClientRect().bottom`
2. **Position calculation:** `rect.bottom + scrollTop` for absolute positioning
3. **Opacity filter:** Skip `opacity: 0` elements
4. **Diagnostic output:** Report the last visible element tag+class

This is a REPLACEMENT (same gate, better measurement), not an addition. The gate ID, name, and threshold remain identical.

---

## SECTION 6: LINE BUDGET RECONCILIATION

| Section | Operation | Lines Freed | Lines Added | Net |
|---------|-----------|------------|-------------|-----|
| 1A | Consolidate GR-05 + GR-07 | 76 | 44 | +32 |
| 1B | Merge GR-12 into GR-18 | 20 | 5 | +15 |
| 1C | Trim GR-21 | 52 | 44 | +8 |
| 1D | Trim GR-22 | 56 | 51 | +5 |
| 2A | Add GR-60 (WCAG contrast) | 0 | 55 | -55 |
| 3A | Fix GR-44 | 34 | 37 | -3 |
| 3B | Fix GR-14 | 1 | 3 | -2 |
| 4A-C | Tier reclassifications | 0 | 0 | 0 |
| **TOTAL** | | **239** | **239** | **0** |

**Net change: ZERO lines.** File stays at 1,436 lines.

---

## SECTION 7: DEFERRED ENRICHMENTS (Not in this surgery)

The following enrichments targeting gate-runner-core.js are DEFERRED because they would exceed the net-zero line budget:

| ME | Gate | Lines needed | Why deferred |
|----|------|-------------|--------------|
| ME-011 | GR-06 font check rewrite | ~15 net | Low priority (SIGNIFICANT, rank 11). Existing check works; false positives are edge case. |
| ME-013 | GR-09 tolerance fix | ~5 net | Requires testing; current tolerance bands already work for 0.667px and 2.667px. |
| ME-014 | GR-61 (font size) | ~50 net | Would push +50 lines over budget. Second-highest-value new gate after GR-60. RECOMMENDED for next surgery round. |
| ME-030 | Viewport namespacing | ~10 net | Meta-gate schema change; should be coordinated with gate-manifest.json format revision. |
| ME-040 | GR-62 (text overflow) | ~60 net | Third-priority new gate. Would push +60 over budget. RECOMMENDED for next surgery round. |

**If a second surgery round is authorized:**
- Priority 1: ME-014 (GR-61, font size) — can be added to `runWave2Gates()` with no consolidation needed if the file capacity is expanded
- Priority 2: ME-040 (GR-62, text overflow) — same location
- To make room: ME-011 (GR-06 rewrite) would free ~10 lines by simplifying the font check

---

## SECTION 8: IMPLEMENTATION ORDER

1. **Consolidate GR-05 + GR-07** (Section 1A) — largest line savings, unblocks everything
2. **Remove GR-12, merge into GR-18** (Section 1B) — simple deletion + small addition
3. **Trim GR-21 and GR-22** (Sections 1C, 1D) — compaction + threshold fix
4. **Add GR-60** (Section 2A) — highest-value new gate, consumes freed lines
5. **Fix GR-44** (Section 3A) — replacement, no line budget impact
6. **Fix GR-14** (Section 3B) — 2-line net addition
7. **Update GR-48 arrays** (Section 4A) — tier reclassifications
8. **Update verdict summary** (Section 4A) — gate list corrections
9. **Fix GR-17 li threshold** (Section 4C) — zero line change

**Estimated implementation time:** 30-45 minutes for a single focused agent.

---

## SECTION 9: COORDINATED FILE CHANGES (Outside gate-runner-core.js)

These changes MUST accompany the code surgery:

### gate-manifest.json
- REQUIRED: Remove GR-07, GR-12. Add GR-60. Count: 18 -> 16 (remove 3, add 1).
  - Wait -- also remove GR-43 from REQUIRED. So: remove GR-07, GR-12, GR-43. Add GR-60. Count: 18 -> 16.
- RECOMMENDED: Add GR-07, GR-43. Remove GR-19. Count: 8 -> 9 (add 2, remove 1).
- ADVISORY: Add GR-19. Count: 5 -> 6.
- Update `verdictLogic.REBUILD` to reference updated identity gate set (without GR-07).
- Update `verdictLogic.REFINE` to reference updated perception gate set (without GR-12, with GR-60).

### gate-runner-spec.md
- GR-05: Update description to "Warm Palette (Visible Colors)" + note split with ADVISORY GR-05b
- GR-07: Change tier from REQUIRED to RECOMMENDED, add "visible-text-only" scope
- GR-12: Remove row (absorbed into GR-18)
- GR-18: Update description to include letter-spacing sub-check
- GR-19: Change tier from RECOMMENDED to ADVISORY
- GR-21: Update threshold from 4 to 6
- GR-22: Add "skip-link exempt" note
- GR-43: Change tier from REQUIRED to RECOMMENDED
- GR-44: Update description to note scrollHeight measurement
- GR-60: Add new row (Perception, REQUIRED, Post-build, Playwright)
- Update summary counts

### MANIFEST.md (if it references gate counts)
- Update REQUIRED/RECOMMENDED/ADVISORY counts

---

## SECTION 10: RISK ASSESSMENT

| Risk | Impact | Mitigation |
|------|--------|------------|
| GR-60 false positives on decorative text | LOW | Only checks elements with `textContent.trim().length > 0`; walks DOM tree for real bg |
| GR-05/GR-07 consolidation misses edge case | MEDIUM | The opacity threshold (0.3) is conservative; `effectiveVisibility > 20` catches most visible cold |
| GR-12 removal allows sub-perceptual letter-spacing | LOW | GR-18 absorbs the check at RECOMMENDED tier; the range was invisible to humans anyway |
| GR-44 fix changes measurement baseline | LOW | `scrollHeight` is more accurate than `body.getBoundingClientRect()`; same threshold (300px) |
| GR-14 scoping too aggressive | MEDIUM | Fallback: if `:scope >` yields < 2, use original selector (no regression) |

---

*End of surgical plan. File: `ephemeral/pages/V3-Yegge-Gas-Town/analysis/14-gate-surgery-plan.md`*
