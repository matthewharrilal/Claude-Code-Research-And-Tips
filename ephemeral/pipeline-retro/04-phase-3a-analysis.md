# Phase 3A Analysis: Screenshots + Programmatic Gates

**Analyst:** Phase 3A Retrospective Agent
**Date:** 2026-02-23
**Scope:** Gas Town VA Pipeline build — Phase 3A gate execution and screenshot capture

---

## 1. Executive Summary

The orchestrator ran 10 programmatic gate checks and captured 6 screenshots at 3 viewports. Of the 42 gates defined in `artifact-gate-runner.md`, only 10 were executed (23.8%). The orchestrator wrote JavaScript from memory/context rather than reading the artifact, resulting in a gate coverage gap of 32 gates. Of these 32 skipped gates, at least 12 are fully automatable post-build checks that SHOULD have run. The remaining 20 are precondition gates, experiment gates, verdict gates, advisory/mode gates, or policy gates that legitimately don't apply at the post-build JavaScript-evaluation phase.

The screenshot capture process was adequate but lacked scroll-step screenshots at each viewport — only cold-look + full-page captures were taken, not the scroll-through sequence specified by the MANIFEST.

---

## 2. Gate Coverage Map: Run vs Skipped

### Gates That Were Run (10)

| Artifact Gate | Results Label | Result | Notes |
|---------------|---------------|--------|-------|
| GR-01 (border-radius: 0) | SC-01 | PASS | Mapped correctly |
| GR-02 (box-shadow: none) | SC-02 | PASS | Mapped correctly |
| GR-03 (container 940-960px) | SC-03 | PASS | Mapped correctly. Checked `.factory-spine` containers |
| GR-04 (no gradients) | SC-06 | PASS | Mapped correctly |
| GR-05 (warm palette) | SC-04 | PASS | Partial — checked pure black/white only, not R>=G>=B |
| GR-06 (font trinity) | SC-05 | PASS | Mapped correctly |
| GR-07 (no pure B/W) | Part of SC-04 | PASS | Merged with palette check |
| GR-11 (bg delta >= 15 RGB) | PT-01 | PASS | Full measurement with RGB values per boundary |
| GR-12 (letter-spacing >= 0.025em) | PT-02 | PASS | Full measurement with pixel values |
| GR-13 (stacked gap <= 120px) | PT-03 | PASS | Measured as 0px (zones flush) |

### Gates That Were Skipped — SHOULD HAVE RUN (12 automatable post-build)

| Gate | Category | Why Automatable | Proposed JavaScript |
|------|----------|-----------------|---------------------|
| GR-08 (no decorative elements) | Identity | Check for `<hr>` with decorative classes, empty spacer divs, icon elements without functional purpose | See Section 5.1 |
| GR-09 (border weight hierarchy) | Identity | Extract all borderWidth values, verify 4/3/1px hierarchy | See Section 5.2 |
| GR-10 (cross-page DNA) | Identity | Check ~8 DNA properties (body line-height, p max-width, header dark bg, callout 4px border, h3 italic, selection red, focus-visible, skip-link) | See Section 5.3 |
| GR-14 (total stacked gap <= 150px) | Perception | At each section boundary, measure getBoundingClientRect gap between last and first child | See Section 5.4 |
| GR-15 (single margin <= 96px) | Perception | Check all computed margin/padding values | See Section 5.5 |
| GR-16 (all CSS perceptible — meta) | Perception | Aggregate of GR-11 through GR-15 | Passes iff GR-11 through GR-15 all pass |
| GR-17 (AP-01 density stacking) | Anti-pattern | min(all computed padding values) >= 12px | See Section 5.6 |
| GR-18 (AP-09 ghost mechanisms) | Anti-pattern | Cross-reference with GR-11, GR-12 — also check border-width > 0, opacity 0.01-0.1 | See Section 5.7 |
| GR-19 (AP-10 threshold gaming) | Anti-pattern | Count values within 10% above floor — flag if >50% cluster | See Section 5.8 |
| GR-20 (AP-11 structural echo) | Anti-pattern | Compare consecutive sections: bg, padding, border styles — flag 3+ identical | See Section 5.9 |
| GR-21 (AP-14 cognitive overload) | Anti-pattern | Count distinct channels per 900px viewport slice | See Section 5.10 |
| GR-22 (AP-02 color zone conflict) | Anti-pattern | Map primary red usage across zones, verify consistent semantic role | See Section 5.11 |

### Gates Legitimately Not Run at This Phase (20)

| Gate Range | Category | Why Not Applicable |
|------------|----------|--------------------|
| GR-23 through GR-28 (6) | Precondition | Run BEFORE build (Phase 0-1), not post-build. These check builder model, content heterogeneity, suppressor count, brief size, builder gate-freeness, recipe format. |
| GR-29 through GR-32 (4) | Verdict | Run AFTER PA audit (Phase 3C), not during gate runner. These map PA-05 score to SHIP/REFINE/REBUILD. |
| GR-33 through GR-35 (3) | Mode (Advisory) | ADVISORY gates that report mode indicators. GR-33 (CSS naming) and GR-34 (component modulation) could technically run post-build, but are diagnostic-only. GR-35 (layout driver) is not automatable. |
| GR-36 through GR-39 (4) | Experiment | Meta-gates for experiment protocol (stage 0-4). Not applicable to individual builds. |
| GR-40 through GR-42 (3) | Policy | Pipeline architecture verification (single-pass default, rebuild-not-fix, gates hidden). These are meta-process checks, not HTML verification. |

**Reclassification note:** GR-33 and GR-34 (mode advisory) COULD run post-build and would provide useful diagnostic data for PA auditors. I classify them as "legitimate skip for now, recommended for future inclusion."

---

## 3. Gap Between Artifact and Execution

### 3.1 Root Cause: Written From Memory, Not From Artifact

The MANIFEST states (Section 4, Phase 3A):

> Gate Runner is NOT a separate LLM agent. It is Playwright JavaScript code executed directly by the orchestrator.

And:

> Run 42 programmatic gate checks (artifact-gate-runner.md)

The orchestrator was supposed to READ `artifact-gate-runner.md` and translate its 42 gate specifications into executable JavaScript. Instead, the orchestrator wrote JavaScript from its own contextual understanding of what gates should exist. This resulted in:

1. **Only identity and perception gates covered** — the two most obvious categories
2. **Anti-pattern gates entirely absent** — all 6 skipped (GR-17 through GR-22)
3. **Naming mismatch** — results used SC-01/SC-02/PT-01 naming while artifact uses GR-01/GR-02/GR-11 naming
4. **Check depth varied** — some checks were thorough (bg delta with actual RGB values), others partial (warm palette only checked pure B/W, not R>=G>=B)

### 3.2 The Two Gate Runner Documents

A critical complication: there are TWO gate runner documents in the project:

1. **`ephemeral/va-extraction/artifact-gate-runner.md`** (763 lines, 42 gates) — the VA extraction artifact used by the Pipeline v3 MANIFEST. This is the AUTHORITATIVE source for the current pipeline.

2. **`design-system/pipeline/gate-runner.md`** (1,340 lines, 23 gates) — an older, more detailed gate runner from the `/build-page` pipeline (pre-VA-extraction). Uses SC-00 through SC-17 + DG-1 through DG-4 naming. Has full JavaScript implementations for most gates.

The older document (23 gates with JS) and the newer document (42 gates, mostly prose descriptions) are NOT aligned:

| Property | Old (pipeline/gate-runner.md) | New (artifact-gate-runner.md) |
|----------|-------------------------------|-------------------------------|
| Gate count | 23 + 2 behavioral = 25 | 42 (39 binary + 3 advisory) |
| JS code | Complete for 19 gates | Prose descriptions, no JS |
| Naming | SC-00 through SC-17, DG-1 through DG-4 | GR-01 through GR-42 |
| Micro-gates | Yes (MG-1 through MG-4, during build) | No (post-build only) |
| Multi-coherence | SC-13 (6-channel measurement with JS) | Not present as explicit gate |
| Zone validation | SC-00 (fallback chain with JS) | Not present |
| Parametric echo | SC-17 (TC brief cross-validation) | Not present |
| Precondition gates | No | GR-23 through GR-28 (6 gates) |
| Experiment gates | No | GR-36 through GR-39 (4 gates) |
| Verdict gates | No | GR-29 through GR-32 (4 gates) |

**Critical finding:** The older document has BETTER executable JavaScript and more sophisticated compositional gates (SC-13 multi-coherence, SC-13B direction coherence, SC-17 parametric echo, SC-00 zone validation). The newer document has better organizational taxonomy but lacks executable code. A fresh orchestrator instance would benefit from BOTH documents — the old one for JS implementations, the new one for the complete gate inventory.

### 3.3 What the Orchestrator Actually Got Right

Despite the coverage gap, the orchestrator:
- Correctly identified the `.factory-spine` container class (not assumed `main` or `.page-container`)
- Measured actual RGB deltas per boundary pair (not just checked existence)
- Recorded all 6 zone background colors with hex conversions
- Checked content mechanisms (tables, code blocks, ASCII diagrams, etc.)
- Verified accessibility (ARIA labels, landmarks, skip link, heading hierarchy)

The content mechanisms and accessibility checks are NOT in either gate runner document but are useful diagnostic data for PA context. This is a case of the orchestrator adding VALUE beyond the specification.

---

## 4. Screenshot Capture Analysis

### 4.1 What Was Captured

6 files across 3 viewports:
- `1440-cold-look.png` (86KB) + `1440-full-page.png` (1.2MB)
- `1024-cold-look.png` (61KB) + `1024-full-page.png` (1.1MB)
- `768-cold-look.png` (103KB) + `768-full-page.png` (1.1MB)

### 4.2 Compliance with MANIFEST

The MANIFEST specifies (Section 4, Phase 3A):

> For each of 3 viewport widths (1440px, 1024px, 768px):
> a. Take cold-look screenshot at viewport top (no scrolling).
> b. Take scroll-through screenshots at 80% viewport-height steps covering entire page.
> All screenshots saved to local files following naming convention: screenshots/{width}/cold-look.png, screenshots/{width}/scroll-01.png, etc.

**Deviations:**
1. **No scroll-step screenshots** — only cold-look + full-page (full-page is a single stitched image, not incremental scroll captures). This means PA auditors saw a compressed full-page image rather than viewport-sized scroll slices.
2. **Flat directory** — screenshots saved as `{width}-cold-look.png` and `{width}-full-page.png` in a single `_screenshots/` directory, not in `screenshots/{width}/` subdirectories.
3. **Full-page instead of scroll-through** — Playwright's `fullPage: true` screenshot captures the entire scrollable area in one image. This is MORE data than scroll-steps but in a different format. For very long pages, this can create extremely tall images that are hard for PA auditors to analyze at readable resolution.

### 4.3 Impact Assessment

| Deviation | Severity | Impact |
|-----------|----------|--------|
| No scroll-steps | MODERATE | PA auditors see the whole page but cannot isolate viewport-sized chunks. For a 6-zone page this is acceptable; for a 20+ zone page it would be problematic. |
| Flat directory | LOW | Naming convention is clear enough (`1440-cold-look.png`). No functional impact. |
| Full-page vs scroll | LOW-MODERATE | Full-page captures are actually BETTER for this page length. Scroll-steps would add ~18 more images (3 viewports x ~6 scroll positions) with minimal additional insight for a page this size. |

### 4.4 Recommended Improvements

1. **Add scroll-step screenshots for pages > 5 viewports tall.** For shorter pages, full-page capture is sufficient. For longer pages (e.g., 10+ viewport heights), scroll-step screenshots at 80% viewport height provide more readable analysis chunks.

2. **Add a 375px mobile viewport.** The current 3 viewports (1440/1024/768) cover desktop and tablet. Many users view on mobile. PA-21 through PA-23 cover responsiveness but only at 768px minimum.

3. **Capture fonts.ready state.** The MANIFEST mentions `document.fonts.ready` as critical. Screenshots should be taken AFTER fonts load to prevent FOUT from affecting PA judgment.

4. **Capture disabled-animation state.** The MANIFEST specifies `animation: none !important; opacity: 1 !important`. This should be verified as applied before screenshots.

5. **Subdirectory organization.** Use `_screenshots/1440/`, `_screenshots/1024/`, `_screenshots/768/` for cleaner organization as page count grows.

---

## 5. Proposed JavaScript for Missing Gates

All code below is designed for execution via Playwright's `page.evaluate()` in a browser session against the served HTML.

### 5.1 GR-08: No Decorative Elements

```js
// GR-08: No Decorative Elements
(() => {
  const violations = [];

  // Check for decorative <hr> elements
  const hrs = document.querySelectorAll('hr');
  hrs.forEach(hr => {
    const role = hr.getAttribute('role');
    const ariaHidden = hr.getAttribute('aria-hidden');
    // hr with no semantic role or aria-hidden is potentially decorative
    if (role !== 'separator' && !ariaHidden) {
      violations.push({ element: 'hr', reason: 'No role="separator" attribute' });
    }
  });

  // Check for empty spacer divs
  const allDivs = document.querySelectorAll('div');
  allDivs.forEach(div => {
    if (div.children.length === 0 && div.textContent.trim() === '') {
      const s = getComputedStyle(div);
      const h = parseFloat(s.height);
      if (h > 0 && h < 200) {
        violations.push({
          element: 'empty-div',
          height: h,
          reason: 'Empty div used as spacer'
        });
      }
    }
  });

  // Check for icon elements without functional purpose
  const icons = document.querySelectorAll('i, .icon, [class*="icon"], svg[aria-hidden="true"]');
  icons.forEach(icon => {
    const ariaLabel = icon.getAttribute('aria-label');
    const role = icon.getAttribute('role');
    const parentButton = icon.closest('button, a, [role="button"]');
    if (!ariaLabel && !role && !parentButton) {
      violations.push({
        element: icon.tagName,
        className: icon.className,
        reason: 'Icon without aria-label, role, or functional parent'
      });
    }
  });

  return {
    gate: 'GR-08',
    status: violations.length === 0 ? 'PASS' : 'FAIL',
    violations: violations,
    measured: { violationCount: violations.length }
  };
})();
```

### 5.2 GR-09: Border Weight Hierarchy

```js
// GR-09: Border Weight Hierarchy
(() => {
  const allElements = document.querySelectorAll('*');
  const borderWidths = new Map(); // width -> count
  const borderDetails = [];

  allElements.forEach(el => {
    const s = getComputedStyle(el);
    ['borderLeftWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth'].forEach(prop => {
      const w = parseFloat(s[prop]);
      if (w > 0) {
        const rounded = Math.round(w * 100) / 100;
        borderWidths.set(rounded, (borderWidths.get(rounded) || 0) + 1);
        if (borderDetails.length < 20) { // sample first 20
          borderDetails.push({
            element: el.tagName + (el.className ? '.' + el.className.split(' ')[0] : ''),
            property: prop,
            width: rounded
          });
        }
      }
    });
  });

  const sortedWidths = [...borderWidths.keys()].sort((a, b) => b - a);
  const distinctWeights = sortedWidths.length;

  // Check hierarchy pattern: should have at least 3 distinct weights
  // with a primary (4px), secondary (2-3px), and tertiary (0.5-1px)
  const hasPrimary = sortedWidths.some(w => w >= 3.5 && w <= 4.5);
  const hasSecondary = sortedWidths.some(w => w >= 2 && w <= 3.5);
  const hasTertiary = sortedWidths.some(w => w >= 0.5 && w <= 1.5);

  return {
    gate: 'GR-09',
    status: (distinctWeights >= 3 && hasPrimary && hasTertiary) ? 'PASS' : 'FAIL',
    measured: {
      distinctWeights: distinctWeights,
      weights: Object.fromEntries(borderWidths),
      hasPrimary, hasSecondary, hasTertiary,
      sample: borderDetails
    },
    threshold: { minDistinct: 3, expectedPattern: '4px/2-3px/0.5-1px' }
  };
})();
```

### 5.3 GR-10: Cross-Page DNA Properties

```js
// GR-10: Cross-Page DNA Properties
(async () => {
  await document.fonts.ready;
  const results = [];

  // body line-height should be ~1.7
  const bodyLH = parseFloat(getComputedStyle(document.body).lineHeight);
  const bodyFS = parseFloat(getComputedStyle(document.body).fontSize);
  const lhRatio = bodyLH / bodyFS;
  results.push({
    check: 'body-line-height',
    expected: '~1.7',
    actual: lhRatio.toFixed(2),
    pass: lhRatio >= 1.5 && lhRatio <= 1.9
  });

  // p max-width should be ~70ch
  const firstP = document.querySelector('p');
  if (firstP) {
    const pMaxW = getComputedStyle(firstP).maxWidth;
    results.push({
      check: 'p-max-width',
      expected: '70ch',
      actual: pMaxW,
      pass: pMaxW === '70ch' || pMaxW.includes('70')
    });
  }

  // header: dark bg + red bottom border
  const header = document.querySelector('header, [role="banner"]');
  if (header) {
    const hs = getComputedStyle(header);
    const parseRGB = str => {
      const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      return m ? [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])] : [255, 255, 255];
    };
    const [hr, hg, hb] = parseRGB(hs.backgroundColor);
    const isDark = (hr + hg + hb) / 3 < 128;
    const borderColor = hs.borderBottomColor;
    const [br, bg, bb] = parseRGB(borderColor);
    const isReddish = br > 150 && bg < 100 && bb < 100;
    results.push({
      check: 'header-dark-bg',
      expected: 'dark background',
      actual: `rgb(${hr},${hg},${hb})`,
      pass: isDark
    });
    results.push({
      check: 'header-red-border',
      expected: 'red bottom border',
      actual: borderColor,
      pass: isReddish
    });
  }

  // h3 should be italic
  const h3 = document.querySelector('h3');
  if (h3) {
    const h3Style = getComputedStyle(h3).fontStyle;
    results.push({
      check: 'h3-italic',
      expected: 'italic',
      actual: h3Style,
      pass: h3Style === 'italic'
    });
  }

  // skip-link present
  const skipLinks = document.querySelectorAll('a[href^="#"]');
  const hasSkip = [...skipLinks].some(a => /skip/i.test(a.textContent));
  results.push({
    check: 'skip-link',
    expected: 'present',
    actual: hasSkip ? 'present' : 'absent',
    pass: hasSkip
  });

  const failures = results.filter(r => !r.pass);
  return {
    gate: 'GR-10',
    status: failures.length === 0 ? 'PASS' : 'FAIL',
    measured: results,
    failures: failures
  };
})();
```

### 5.4 GR-14: Total Stacked Gap <= 150px

```js
// GR-14: Total Stacked Gap <= 150px (S-09 adjusted)
(() => {
  const sections = document.querySelectorAll('section, [class*="zone"], [data-zone]');
  if (sections.length < 2) return { gate: 'GR-14', status: 'PASS', reason: '<2 sections' };

  const gaps = [];
  for (let i = 0; i < sections.length - 1; i++) {
    const rect1 = sections[i].getBoundingClientRect();
    const rect2 = sections[i + 1].getBoundingClientRect();
    const gap = rect2.top - rect1.bottom;
    gaps.push({
      boundary: `Section ${i + 1} -> ${i + 2}`,
      gap: Math.round(gap),
      pass: gap <= 150
    });
  }

  const failures = gaps.filter(g => !g.pass);
  return {
    gate: 'GR-14',
    status: failures.length === 0 ? 'PASS' : 'FAIL',
    measured: gaps,
    failures: failures,
    threshold: { maxGap: 150 }
  };
})();
```

### 5.5 GR-15: Single Margin <= 96px

```js
// GR-15: Single Margin <= 96px
(() => {
  const violations = [];
  const allElements = document.querySelectorAll('*');

  allElements.forEach(el => {
    const s = getComputedStyle(el);
    const props = ['marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'];
    props.forEach(prop => {
      const val = parseFloat(s[prop]);
      if (val > 96) {
        violations.push({
          element: el.tagName + (el.className ? '.' + el.className.split(' ')[0] : ''),
          property: prop,
          value: Math.round(val)
        });
      }
    });
  });

  return {
    gate: 'GR-15',
    status: violations.length === 0 ? 'PASS' : 'FAIL',
    measured: { violationCount: violations.length },
    violations: violations.slice(0, 10), // cap at 10 for readability
    threshold: { maxSingle: 96 }
  };
})();
```

### 5.6 GR-17: AP-01 Density Stacking

```js
// GR-17: AP-01 Density Stacking (min padding >= 12px)
(() => {
  const contentElements = document.querySelectorAll(
    'p, h1, h2, h3, h4, h5, h6, li, td, th, blockquote, pre, code, figcaption, dt, dd'
  );
  let minPadding = Infinity;
  let minElement = null;

  contentElements.forEach(el => {
    const s = getComputedStyle(el);
    ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'].forEach(prop => {
      const val = parseFloat(s[prop]);
      if (val < minPadding && val >= 0) {
        minPadding = val;
        minElement = el.tagName + (el.className ? '.' + el.className.split(' ')[0] : '');
      }
    });
  });

  return {
    gate: 'GR-17',
    status: minPadding >= 12 ? 'PASS' : 'FAIL',
    measured: {
      minPadding: Math.round(minPadding * 10) / 10,
      minElement: minElement
    },
    threshold: { minPadding: 12 }
  };
})();
```

### 5.7 GR-18: AP-09 Ghost Mechanisms

```js
// GR-18: AP-09 Ghost Mechanisms (sub-perceptual values)
(() => {
  const ghosts = [];

  // Check letter-spacing in sub-perceptual range
  document.querySelectorAll('*').forEach(el => {
    const s = getComputedStyle(el);
    const ls = s.letterSpacing;
    if (ls !== 'normal' && ls !== '0px') {
      const pxVal = parseFloat(ls);
      const fontSize = parseFloat(s.fontSize);
      const emVal = pxVal / fontSize;
      if (emVal > 0 && emVal < 0.025) {
        ghosts.push({
          type: 'letter-spacing',
          element: el.tagName,
          value: ls,
          emValue: emVal.toFixed(4)
        });
      }
    }

    // Check near-zero opacity
    const opacity = parseFloat(s.opacity);
    if (opacity > 0 && opacity < 0.1) {
      ghosts.push({
        type: 'near-zero-opacity',
        element: el.tagName,
        value: opacity
      });
    }

    // Check border-width in sub-perceptual range (0 < width < 0.5)
    ['borderLeftWidth', 'borderTopWidth'].forEach(prop => {
      const bw = parseFloat(s[prop]);
      if (bw > 0 && bw < 0.5) {
        ghosts.push({
          type: 'sub-perceptual-border',
          element: el.tagName,
          property: prop,
          value: bw
        });
      }
    });
  });

  return {
    gate: 'GR-18',
    status: ghosts.length === 0 ? 'PASS' : 'FAIL',
    measured: { ghostCount: ghosts.length },
    violations: ghosts.slice(0, 10)
  };
})();
```

### 5.8 GR-19: AP-10 Threshold Gaming

```js
// GR-19: AP-10 Threshold Gaming (floor-hugging detection)
(() => {
  const parseRGB = str => {
    const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    return m ? [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])] : null;
  };

  // Check bg deltas — count how many are at 15-17 RGB (floor-hugging)
  const sections = document.querySelectorAll('section, [class*="zone"], [data-zone]');
  const bgDeltas = [];
  for (let i = 0; i < sections.length - 1; i++) {
    const bg1 = parseRGB(getComputedStyle(sections[i]).backgroundColor);
    const bg2 = parseRGB(getComputedStyle(sections[i + 1]).backgroundColor);
    if (bg1 && bg2) {
      const delta = Math.max(
        Math.abs(bg1[0] - bg2[0]),
        Math.abs(bg1[1] - bg2[1]),
        Math.abs(bg1[2] - bg2[2])
      );
      bgDeltas.push(delta);
    }
  }

  const floorHugging = bgDeltas.filter(d => d >= 15 && d <= 17).length;
  const bgGaming = bgDeltas.length > 0 && (floorHugging / bgDeltas.length) > 0.5;

  // Check letter-spacing values — count clustering at floor
  const lsValues = [];
  document.querySelectorAll('*').forEach(el => {
    const ls = getComputedStyle(el).letterSpacing;
    if (ls !== 'normal' && ls !== '0px') {
      const pxVal = parseFloat(ls);
      const fontSize = parseFloat(getComputedStyle(el).fontSize);
      const emVal = pxVal / fontSize;
      if (emVal > 0) lsValues.push(emVal);
    }
  });
  const lsFloor = lsValues.filter(v => v >= 0.025 && v <= 0.028).length;
  const lsGaming = lsValues.length > 0 && (lsFloor / lsValues.length) > 0.5;

  return {
    gate: 'GR-19',
    status: (bgGaming || lsGaming) ? 'ADVISORY' : 'PASS',
    measured: {
      bgDeltas: bgDeltas,
      bgFloorHugging: floorHugging,
      bgTotal: bgDeltas.length,
      lsFloorHugging: lsFloor,
      lsTotal: lsValues.length
    },
    note: 'ADVISORY gate — flags risk but does not block'
  };
})();
```

### 5.9 GR-20: AP-11 Structural Echo

```js
// GR-20: AP-11 Structural Echo (repetitive patterns)
(() => {
  const sections = document.querySelectorAll('section, [class*="zone"], [data-zone]');
  if (sections.length < 3) return { gate: 'GR-20', status: 'PASS', reason: '<3 sections' };

  const fingerprints = [];
  sections.forEach(sec => {
    const s = getComputedStyle(sec);
    fingerprints.push([
      s.backgroundColor,
      Math.round(parseFloat(s.paddingTop)),
      Math.round(parseFloat(s.paddingBottom)),
      s.borderLeftWidth + '-' + s.borderLeftStyle,
      s.borderBottomWidth + '-' + s.borderBottomStyle
    ].join('|'));
  });

  // Check for 3+ consecutive identical fingerprints
  let maxConsecutive = 1;
  let current = 1;
  for (let i = 1; i < fingerprints.length; i++) {
    if (fingerprints[i] === fingerprints[i - 1]) {
      current++;
      maxConsecutive = Math.max(maxConsecutive, current);
    } else {
      current = 1;
    }
  }

  return {
    gate: 'GR-20',
    status: maxConsecutive >= 3 ? 'FAIL' : 'PASS',
    measured: {
      sectionCount: sections.length,
      maxConsecutiveIdentical: maxConsecutive,
      fingerprints: fingerprints
    },
    threshold: { maxConsecutive: 2 }
  };
})();
```

### 5.10 GR-21: AP-14 Cognitive Overload

```js
// GR-21: AP-14 Cognitive Overload (max 4 channels per viewport)
(() => {
  const viewportHeight = 900; // typical viewport
  const pageHeight = document.documentElement.scrollHeight;
  const slices = Math.ceil(pageHeight / viewportHeight);
  const results = [];

  for (let i = 0; i < slices; i++) {
    const top = i * viewportHeight;
    const bottom = top + viewportHeight;

    // Find all elements in this viewport slice
    const allEls = document.querySelectorAll('*');
    const inSlice = [...allEls].filter(el => {
      const rect = el.getBoundingClientRect();
      const absTop = rect.top + window.scrollY;
      const absBottom = rect.bottom + window.scrollY;
      return absBottom > top && absTop < bottom;
    });

    // Count distinct channels
    const bgColors = new Set();
    const fontSizes = new Set();
    const borderPatterns = new Set();
    const spacingValues = new Set();

    inSlice.forEach(el => {
      const s = getComputedStyle(el);
      if (s.backgroundColor !== 'rgba(0, 0, 0, 0)') bgColors.add(s.backgroundColor);
      fontSizes.add(Math.round(parseFloat(s.fontSize)));
      const bw = parseFloat(s.borderLeftWidth);
      if (bw > 0) borderPatterns.add(s.borderLeftWidth + '-' + s.borderLeftStyle);
    });

    const channels = [
      bgColors.size > 1 ? 1 : 0,       // background variation
      fontSizes.size > 3 ? 1 : 0,       // typography variation
      borderPatterns.size > 1 ? 1 : 0,  // structural variation
      1 // spacing always present
    ].reduce((a, b) => a + b, 0);

    results.push({
      slice: i + 1,
      topPx: top,
      channels: channels,
      bgVariants: bgColors.size,
      fontVariants: fontSizes.size,
      borderVariants: borderPatterns.size
    });
  }

  const maxChannels = Math.max(...results.map(r => r.channels));

  return {
    gate: 'GR-21',
    status: maxChannels <= 4 ? 'PASS' : 'FAIL',
    measured: results,
    maxChannels: maxChannels,
    threshold: { maxPerViewport: 4 },
    note: 'THEORETICAL gate — imprecise channel counting'
  };
})();
```

### 5.11 GR-22: AP-02 Color Zone Conflict

```js
// GR-22: AP-02 Color Zone Conflict (consistent semantic roles)
(() => {
  const parseRGB = str => {
    const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    return m ? [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])] : null;
  };

  const primaryRed = { r: 232, g: 48, b: 37 }; // #E83025
  const tolerance = 30;

  const isPrimary = (r, g, b) =>
    Math.abs(r - primaryRed.r) < tolerance &&
    Math.abs(g - primaryRed.g) < tolerance &&
    Math.abs(b - primaryRed.b) < tolerance;

  const sections = document.querySelectorAll('section, [class*="zone"], [data-zone]');
  const usageByZone = [];

  sections.forEach((sec, idx) => {
    const usage = { zone: idx + 1, asBackground: false, asBorder: false, asText: false };
    const allEls = sec.querySelectorAll('*');

    allEls.forEach(el => {
      const s = getComputedStyle(el);
      const bg = parseRGB(s.backgroundColor);
      if (bg && isPrimary(...bg)) usage.asBackground = true;
      const color = parseRGB(s.color);
      if (color && isPrimary(...color)) usage.asText = true;
      const border = parseRGB(s.borderLeftColor);
      if (border && isPrimary(...border)) usage.asBorder = true;
    });

    usageByZone.push(usage);
  });

  // Check consistency: primary red should serve same semantic role across zones
  const roles = usageByZone.filter(u => u.asBackground || u.asBorder || u.asText);
  const bgCount = roles.filter(r => r.asBackground).length;
  const borderCount = roles.filter(r => r.asBorder).length;
  const textCount = roles.filter(r => r.asText).length;

  // Conflict: red used as background in some zones AND as text/accent in others
  const hasConflict = bgCount > 0 && (borderCount > 0 || textCount > 0) &&
    bgCount !== roles.length; // not ALL zones using it as bg

  return {
    gate: 'GR-22',
    status: hasConflict ? 'FAIL' : 'PASS',
    measured: {
      usageByZone: usageByZone,
      asBackground: bgCount,
      asBorder: borderCount,
      asText: textCount
    }
  };
})();
```

---

## 6. MANUAL Gate Assessment

Four gates were marked MANUAL in the results:

| Gate | Current Status | Can Be Automated? | Recommendation |
|------|---------------|-------------------|----------------|
| SC-07 (zero decorative elements) | MANUAL | PARTIALLY — GR-08 JS above catches empty divs and unlabeled icons. True decorative assessment requires visual judgment. | Run GR-08 programmatically as FILTER, then flag remaining for PA visual check. |
| SC-09 (header DNA) | MANUAL | YES — GR-10 DNA check above includes header dark bg + red border verification. | Convert to programmatic. |
| SC-10 (typography foundations) | MANUAL | MOSTLY — GR-10 checks line-height, max-width, h3 italic. Full typography zone hierarchy needs SC-11 from old gate-runner. | Convert to programmatic for measurable properties. |
| PT-04 (single margin <= 96px) | MANUAL | YES — GR-15 JS above checks all computed margin/padding values. | Convert to programmatic. |

**Summary:** 3 of 4 MANUAL gates CAN be fully automated. SC-07 (decorative elements) can be partially automated with programmatic pre-screening.

---

## 7. Gates Missing From BOTH Artifacts

Based on the PA auditor findings from previous pipeline runs and the analysis above, these gates should exist but are absent from both the old and new gate runner documents:

### 7.1 Zone Selector Validation (Alignment Gap)

The old document has SC-00 (zone selector validation with fallback chain). The new artifact-gate-runner.md does NOT have an equivalent. This is the "single point of failure" — if the builder uses non-standard class names (e.g., `.factory-spine` instead of `.zone-N`), all per-zone gates silently return meaningless data.

**Recommendation:** Port SC-00 from `design-system/pipeline/gate-runner.md` into `artifact-gate-runner.md` as GR-00 (pre-gate).

### 7.2 Multi-Coherence Gate

The old document has SC-13 (6-channel measurement at zone boundaries). The new artifact-gate-runner.md does NOT have an explicit multi-coherence gate. This is arguably the MOST IMPORTANT compositional gate — it measures whether the page has diverse visual shifts at zone boundaries.

**Recommendation:** Port SC-13 and SC-13B from old document into new artifact as GR-43 and GR-44.

### 7.3 Typography Zone Hierarchy

The old document has SC-11 (typography hierarchy with Flagship elevation: display-body delta >= 10px, 3+ distinct clusters). The new artifact-gate-runner.md does not have an equivalent beyond the general "Font Trinity" check.

**Recommendation:** Port SC-11 as GR-45.

### 7.4 Zone Count Gate

The old document has SC-12 (3-5 zones for Flagship). Missing from new artifact.

**Recommendation:** Port SC-12 as GR-46.

### 7.5 Component Library Adoption

The old document has SC-08 (>= 8 component types for Flagship). Missing from new artifact.

**Recommendation:** Port SC-08 as GR-47.

### 7.6 CSS Line Count / Mechanism Count (Quality Floor)

The MANIFEST references "Quality Floor (verified by gates): >=14 mechanisms, >=800 CSS lines, >=3 channel shifts." Neither gate runner document has a programmatic gate for this. CSS line count is trivially measurable from the `<style>` block. Mechanism count requires content classification.

**Recommendation:** Add GR-48 (CSS line count >= 800) and GR-49 (content mechanism count >= 14).

```js
// GR-48: CSS Line Count Quality Floor
(() => {
  const styles = document.querySelectorAll('style');
  let totalLines = 0;
  styles.forEach(s => {
    totalLines += s.textContent.split('\n').length;
  });
  return {
    gate: 'GR-48',
    status: totalLines >= 800 ? 'PASS' : 'FAIL',
    measured: { cssLines: totalLines },
    threshold: { min: 800 }
  };
})();
```

---

## 8. Enrichment Recommendations (Ranked)

### Priority 1: CRITICAL (Do Before Next Pipeline Run)

1. **Codify executable JavaScript into artifact-gate-runner.md.** The artifact has 42 gate descriptions but zero executable JS. Add a `### JavaScript Implementation` section under each gate with copy-paste-ready Playwright code. Use the old `design-system/pipeline/gate-runner.md` as the JS source for existing gates, and the proposed code from Section 5 above for new gates. This eliminates the "written from memory" problem entirely.

2. **Add GR-00: Zone Selector Validation.** Port SC-00 from old gate runner. This is the single point of failure — without it, per-zone gates silently return meaningless data when the builder uses non-standard class names.

3. **Add multi-coherence gate (GR-43/44).** Port SC-13 (channel shift count) and SC-13B (direction coherence) from old gate runner. Multi-coherence is the core compositional measure.

### Priority 2: HIGH (Do Before Flagship Attempt)

4. **Add typography hierarchy gate (GR-45).** Port SC-11 with Flagship elevation. The uniform-typography failure (all 16px/400) was THE dominant Flagship failure mode.

5. **Add zone count gate (GR-46).** Port SC-12. Prevent <3 zone builds from reaching PA.

6. **Add component adoption gate (GR-47).** Port SC-08. Flagship needs component vocabulary diversity.

7. **Convert 3 of 4 MANUAL gates to programmatic.** SC-09 (header DNA), SC-10 (typography foundations), PT-04 (single margin) are all fully automatable.

### Priority 3: MODERATE (Improve Over Time)

8. **Add CSS line count gate (GR-48).** Trivial to implement, catches "thin" builds early.

9. **Add 375px mobile viewport to screenshot capture.** Current 3 viewports miss mobile.

10. **Standardize gate naming.** The old document uses SC/DG prefixes, the new uses GR prefixes, and the actual execution used SC/PT prefixes. Pick ONE naming convention.

11. **Add structured JSON output spec.** The artifact defines a JSON format but the actual execution produced markdown tables. Define whether gates output JSON (machine-parseable) or markdown (human-readable) or both.

12. **Create a consolidated gate runner JavaScript file.** Instead of JS scattered across a 763-line markdown document, create a single `gate-runner.js` file that can be executed via `page.evaluate(gateRunnerCode)`. This file becomes the EXECUTABLE artifact — the markdown remains the SPECIFICATION artifact.

### Priority 4: LOW (Future Enhancement)

13. **Add GR-33/34 (mode advisory) to standard runs.** CSS naming mode and component modulation are cheap to check and provide useful PA context.

14. **Add scroll-step screenshots for long pages.** Full-page captures work for <10 viewport heights; add scroll-steps beyond that.

15. **Reconcile the two gate runner documents.** The old `design-system/pipeline/gate-runner.md` and new `artifact-gate-runner.md` should be merged into a single authoritative document. The old one has better JS, the new one has better taxonomy. Combine both strengths.

---

## 9. Summary Statistics

| Metric | Value |
|--------|-------|
| Gates in artifact | 42 |
| Gates actually run | 10 (23.8%) |
| Automatable gates skipped | 12 |
| Legitimately N/A at this phase | 20 |
| MANUAL gates that should be programmatic | 3 of 4 |
| Gates missing from BOTH artifacts | 6-7 (multi-coherence, zone validation, typography hierarchy, zone count, component adoption, CSS line count, mechanism count) |
| Screenshots captured | 6 (3 viewports x 2 types) |
| Screenshots per MANIFEST spec | 6 minimum + scroll-steps (~18-24 total) |
| Root cause of coverage gap | Orchestrator wrote JS from memory instead of reading artifact |

**Bottom line:** The gate runner artifact needs executable JavaScript codified into it. The orchestrator correctly identified the most important checks (identity + perception thresholds) but missed the entire anti-pattern detection layer and several compositional gates that exist in the older gate runner document but were never ported to the new artifact. The 10 gates that DID run all passed, which is good — but 12 additional automatable checks were left on the table.
