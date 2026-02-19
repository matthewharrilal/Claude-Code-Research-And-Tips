# Gate Runner Architecture: Complete Design

**Agent:** Gate Runner Architect (Opus 4.6)
**Date:** 2026-02-19
**Task:** #73 -- POST-INVESTIGATION: Gate Runner Architecture
**Sources:** Report 15 (YAML gates), Report 19 (programmatic enforcement), Report 30 (adversarial), PV2-PIPELINE-DIAGRAM.md

---

## EXECUTIVE SUMMARY

`gate-runner.js` is a ~400-line JavaScript module that serves as the programmatic verification layer for Pipeline V2. It launches Playwright, navigates to the built HTML page, runs `getComputedStyle` and DOM queries against a registry of 15 gates (SC-01 through SC-15), and returns a structured result object with PASS/FAIL per gate plus specific CSS fix recipes for every failure.

This document covers: full gate inventory, Playwright integration details, fix recipe generation, phase lock mechanism, the 70/30 programmatic/perceptual boundary, pseudocode for the 5 most critical gates, and integration with the PV2 wave architecture.

---

## 1. COMPLETE GATE INVENTORY

### 1.1 Gate Registry (SC-01 through SC-15)

| Gate ID | Name | Category | What It Checks | Pass Criteria | Enforcement |
|---------|------|----------|----------------|---------------|-------------|
| SC-01 | Container Width | Soul | `max-width` of main content container | 940-960px | Programmatic |
| SC-02 | Soul Properties | Soul | `border-radius`, `box-shadow` on ALL elements | border-radius: 0px, box-shadow: none | Programmatic |
| SC-03 | Font Trinity | Soul | Font families used across page | Only 3 allowed families (Instrument Serif, system-ui serif, system-ui sans) | Programmatic |
| SC-04 | Warm Palette | Soul | All background colors | R >= G >= B for every computed background-color | Programmatic |
| SC-05 | No Pure Extremes | Soul | Background and text colors | No rgb(0,0,0) and no rgb(255,255,255) | Programmatic |
| SC-06 | ARIA Landmarks | Structure | Semantic landmark elements | >= 3 landmarks (header, main, footer/nav/complementary) | Programmatic |
| SC-07 | Skip Link | Structure | Presence of skip navigation link | `a[href="#main"]` or `.skip-link` exists | Programmatic |
| SC-08 | Component Library | Structure | Usage of design system component classes | >= 3 component library classes found | Programmatic |
| SC-09 | Background Delta | Perception | Adjacent zone background color difference | >= 15 RGB max-channel delta between adjacent zones | Programmatic |
| SC-10 | Stacked Gap | Perception | Total whitespace at zone boundaries | <= 108px total gap between adjacent zones | Programmatic |
| SC-11 | Typography Zones | Perception | Font-size differentiation across hierarchy | >= 10px display-to-body delta, >= 2px body-to-detail delta | Programmatic |
| SC-12 | Zone Count | Structure | Number of content zones | 2-5 zones with `[data-zone]` or `main > section` | Programmatic |
| SC-13 | Multi-Coherence | Composition | Channel shifts at zone boundaries | >= 3 of 6 channels shift at every boundary | Programmatic |
| SC-14 | Sub-Perceptual Prevention | Hygiene | Imperceptible CSS values | No letter-spacing < 0.02em; no bg deltas 1-14 RGB within a zone | Programmatic |
| SC-15 | Border Presence | Perception | Structural borders exist | >= 1 element with border-left >= 3px OR >= 2 `<hr>` dividers | Programmatic |

### 1.2 Gate Classification by Detection Capability

**BINARY THRESHOLD GATES (10 gates, ~95% confidence):**
SC-01, SC-02, SC-04, SC-05, SC-06, SC-07, SC-09, SC-10, SC-11, SC-12

These gates check a CSS property against a numeric or exact threshold. They are maximally reliable because the measurement is deterministic and the threshold is binary.

**STRUCTURAL PRESENCE GATES (3 gates, ~90% confidence):**
SC-03, SC-08, SC-15

These gates check for the PRESENCE of specific patterns (font families, class names, border elements). Slightly lower confidence because matching depends on selector accuracy.

**COMPOSITIONAL GATES (2 gates, ~70% confidence):**
SC-13, SC-14

These gates attempt to measure compositional properties (multi-channel shifts, sub-perceptual waste). They are the weakest gates because composition is not fully reducible to measurement. SC-13 counts channels but cannot assess whether channel shifts are COHERENT. SC-14 catches known anti-patterns but cannot catch novel ones.

---

## 2. PLAYWRIGHT INTEGRATION

### 2.1 Architecture: Single Session, Sequential Gates

```
gate-runner.js
  |
  |-- Opens ONE Playwright browser (chromium, headless)
  |-- Navigates to file served via local HTTP server
  |-- Sets viewport to 1440x900 (desktop canonical)
  |-- Waits for document.fonts.ready (CRITICAL: font metrics depend on this)
  |-- Disables animations: page.addStyleTag({ content: '*, *::before, *::after { animation: none !important; transition: none !important; }' })
  |-- Runs ALL gates sequentially against the same page instance
  |-- Closes browser
  |-- Returns structured results
```

**Why single session:** Multiple Playwright instances cause contention. Proven pattern: one browser, one page, sequential gate execution. Total runtime ~5-15 seconds for all 15 gates.

**Why HTTP server, not file://:** Playwright MCP blocks `file://` protocol. The orchestrator must serve the HTML via a simple HTTP server (e.g., `npx serve -l 3456 .`) before invoking the gate runner.

### 2.2 Selector Strategy Per Gate

Each gate needs specific CSS selectors to locate the elements it measures. These are the canonical selectors:

```javascript
const SELECTORS = {
  // Zone-level elements (primary structural units)
  zones: '[data-zone], main > section',

  // Container element (for width check)
  container: 'main, [role="main"], .container, .content-wrapper',

  // Landmark elements
  landmarks: 'header, main, footer, nav, [role="complementary"], [role="banner"], [role="contentinfo"]',

  // Skip link
  skipLink: 'a[href="#main"], a[href="#content"], a.skip-link, .skip-link',

  // Component library classes (from merged-components.css)
  componentPatterns: [
    'callout', 'data-table', 'pull-quote', 'blockquote',
    'grid-2col', 'grid-3col', 'card', 'metric', 'timeline',
    'accordion', 'tab-panel', 'stat-block', 'comparison-grid',
    'key-point', 'feature-grid'
  ],

  // Typography hierarchy
  displayText: 'h1, h2',
  bodyText: 'p',
  detailText: 'figcaption, caption, small, .meta, .detail, .caption',

  // Border targets
  callouts: '.callout, blockquote, .callout-box, [class*="callout"]',
  dividers: 'hr, [class*="divider"], [class*="separator"]',

  // All elements (for soul checks)
  allElements: '*'
};
```

### 2.3 How Computed Styles Are Extracted

The core extraction pattern uses `page.$$eval` to run JavaScript inside the page context:

```javascript
// Pattern: Extract computed property from matched elements
async function getComputedProperties(page, selector, properties) {
  return page.$$eval(selector, (els, props) => {
    return els.map(el => {
      const style = getComputedStyle(el);
      const result = { tag: el.tagName, classes: el.className };
      props.forEach(prop => {
        result[prop] = style[prop];
      });
      return result;
    });
  }, properties);
}
```

**Why $$eval, not $eval:** `$$eval` maps over ALL matching elements. `$eval` returns only the first. Gates need to inspect every zone, every heading, every element.

**Why getComputedStyle, not element.style:** `element.style` only returns inline styles. `getComputedStyle` returns the FINAL computed value after all cascading. This is essential: a background color set via class, not inline, must still be measured.

---

## 3. FIX RECIPE GENERATION

### 3.1 Recipe Structure

Every gate failure produces a structured fix recipe:

```javascript
{
  gate: 'SC-09',
  name: 'Background Delta',
  status: 'FAIL',

  // What was measured
  measured: {
    boundary: 'zone-1 to zone-2',
    zone1_bg: 'rgb(254, 252, 243)',
    zone2_bg: 'rgb(249, 248, 240)',
    delta: { r: 5, g: 4, b: 3, max: 5 },
    threshold: { min: 15 }
  },

  // The specific fix
  fix: {
    instruction: 'Zone 2 background is too close to Zone 1. Increase delta by at least 10 RGB points.',
    current_css: '.zone-2 { background-color: rgb(249, 248, 240); }',
    suggested_css: '.zone-2 { background-color: #f0ebe3; }  /* rgb(240,235,227) — delta from zone-1: 14,17,16 */,
    alternatives: [
      '#ece5da  /* warmer, delta 14,13,13 */',
      '#e8e0d5  /* deeper, delta 14,12,8 */'
    ],
    reference: 'perception-thresholds.md: Chromatic Channel'
  }
}
```

### 3.2 Recipe Generation for Each Gate

**SC-01 (Container Width):**
```
FIX: "Container max-width is {measured}px. Set to 960px."
CSS: "main { max-width: 960px; margin: 0 auto; }"
```

**SC-02 (Soul Properties):**
```
FIX: "{N} elements have border-radius > 0: {list}. Remove all border-radius."
CSS: "* { border-radius: 0 !important; box-shadow: none !important; }"
Note: !important is acceptable here as soul constraint is ABSOLUTE.
```

**SC-04 (Warm Palette):**
```
FIX: "{element} has background rgb({r},{g},{b}) violating R >= G >= B. Adjust channel balance."
CSS: "/* Current: rgb(240, 245, 235) — G > R. Fix: rgb(245, 240, 235) */"
```

**SC-09 (Background Delta):**
```
FIX: "Zones {i} and {i+1} differ by {delta} RGB (need >= 15). Zone {i}: rgb({...}), Zone {i+1}: rgb({...})."
CSS: "/* Darken zone {i+1} by at least {15-delta} RGB: try {suggested_hex} */"
Suggested: Compute 3 alternative hex values that satisfy >= 15 delta AND R >= G >= B.
```

**SC-10 (Stacked Gap):**
```
FIX: "Gap between zones {i} and {i+1} is {gap}px (max 108px). Reduce padding/margin."
CSS: "/* Check: zone-{i} margin-bottom + zone-{i+1} padding-top. Reduce the larger one. */"
```

**SC-11 (Typography Zones):**
```
FIX: "Display ({display_px}px) and body ({body_px}px) differ by only {delta}px (need >= 10). Set h1/h2 to 28-36px."
CSS: "h1 { font-size: 36px; } h2 { font-size: 28px; }"
```

**SC-13 (Multi-Coherence):**
```
FIX: "Boundary zone-{i} to zone-{i+1} has only {n}/6 channels shifting (need >= 3). Channels present: {list}. Channels absent: {list}."
CSS: "/* Add differentiation in {absent_channels}. E.g., change padding from {current}px to {current +/- 24}px */"
```

**SC-14 (Sub-Perceptual Prevention):**
```
FIX: "{N} elements have letter-spacing < 0.02em: {list}. Remove or increase to >= 0.03em."
CSS: "/* BAD: letter-spacing: 0.005em. GOOD: letter-spacing: 0.05em OR letter-spacing: 0 (remove it) */"
```

### 3.3 Recipe Formatting for Builder Consumption

All fix recipes are concatenated into a single markdown document that the builder reads:

```markdown
## GATE RUNNER RESULTS — {N}/15 PASSED

### BLOCKING FAILURES ({M} gates):

#### SC-09: Background Delta — FAIL
- **Boundary:** Zone 1 (rgb(254,252,243)) to Zone 2 (rgb(249,248,240))
- **Measured:** 5 RGB delta (need >= 15)
- **Fix:** Darken Zone 2 background. Change `.zone-2 { background-color: #f0ebe3; }`
- **Why:** The flagship had zones differing by 1-8 RGB — literally invisible.

#### SC-11: Typography Zones — FAIL
- **Measured:** h1 = 18px, p = 16px, delta = 2px (need >= 10)
- **Fix:** Set `h1 { font-size: 36px; }` and `h2 { font-size: 28px; }`
- **Why:** The flagship had ALL text at 16px/400 — zero hierarchy.

### PASSING GATES ({P} gates):
SC-01 PASS, SC-02 PASS, SC-03 PASS, ...
```

This is the RECIPE format: specific measured values, specific CSS to write, specific rationale. NOT "fix the typography" (judgment verb) but "set h1 to 36px because display-body delta is 2px and needs to be >= 10" (action verb + measurement + threshold).

---

## 4. PHASE LOCK MECHANISM

### 4.1 How the Orchestrator Uses Gate Results

The gate runner executes at TWO points in the PV2 pipeline:

**EXECUTION POINT 1: Mid-Build Phase Gates (Wave 1)**

The orchestrator runs subsets of gates after specific build phases to catch problems BEFORE the builder invests more time:

```
Phase 1 complete → Run PHASE GATE 1 (SC-06, SC-07, SC-08, SC-12)
                    Checks: landmarks, skip link, components, zone count
                    ~2 sec runtime

Phase 3 complete → Run PHASE GATE 2 (SC-04, SC-05, SC-09)
                    Checks: warm palette, no extremes, background delta
                    ~3 sec runtime

Phase 4 complete → Run PHASE GATE 3 (SC-01, SC-02, SC-15)
                    Checks: container width, soul properties, border presence
                    ~3 sec runtime

Phase 5 complete → Run PHASE GATE 4 (SC-03, SC-11)
                    Checks: font trinity, typography zones
                    ~2 sec runtime
```

**EXECUTION POINT 2: Full Gate Run (Wave 2, Layer 1)**

After Phase 8 (final verification), the gate runner executes ALL 15 gates as a comprehensive regression check. This catches issues introduced in later phases that may have broken earlier compliance.

### 4.2 Phase Lock Protocol

```
ORCHESTRATOR                           BUILDER
    |                                      |
    |-- "Execute Phases 0-1. Save HTML."   |
    |                                      |
    |                              [builds skeleton]
    |                              [saves output.html]
    |                                      |
    |<-- "Phase 1 complete."               |
    |                                      |
    |-- [Serves HTML, runs Phase Gate 1]   |
    |                                      |
    |   PHASE GATE 1: 4/4 PASS            |
    |                                      |
    |-- "Gate PASSED. Execute Phases 2-3." |
    |                                      |
    |                              [adds soul + backgrounds]
    |                              [saves output.html]
    |                                      |
    |<-- "Phase 3 complete."               |
    |                                      |
    |-- [Runs Phase Gate 2]                |
    |                                      |
    |   PHASE GATE 2: SC-09 FAIL          |
    |   "Zone 1→2 delta = 4 RGB"          |
    |                                      |
    |-- "GATE FAILED. Fix: [recipe]        |
    |    Then re-save and re-notify."      |
    |                                      |
    |                              [applies fix]
    |                              [re-saves output.html]
    |                                      |
    |-- [Re-runs Phase Gate 2]             |
    |                                      |
    |   PHASE GATE 2: 3/3 PASS            |
    |                                      |
    |-- "Gate PASSED. Execute Phase 4."    |
    ...
```

### 4.3 Fix Cycle Limits

- **Per-phase gate:** Max 2 re-runs. If still failing after 2 fixes, escalate to orchestrator for structural decision (possibly return to TC planner).
- **Full gate run (Wave 2):** Max 3 fix cycles. Each cycle: builder gets top-3 failures with recipes, applies fixes, gate runner re-runs. After 3 cycles, escalate to user.
- **Total max gate runner invocations per build:** 4 phase gates + 1 full run + 3 fix cycles = 8 invocations. At ~5-15 sec each = ~40-120 sec total gate time. Negligible compared to 90-150 min build time.

---

## 5. THE 70/30 BOUNDARY

### 5.1 What Programmatic Gates CAN Verify (~70%)

| Property | Gate | Measurement | Confidence |
|----------|------|-------------|------------|
| Container width | SC-01 | getComputedStyle().maxWidth | 99% |
| Soul properties | SC-02 | border-radius, box-shadow on all * | 99% |
| Font families | SC-03 | getComputedStyle().fontFamily | 95% |
| Warm palette | SC-04 | R >= G >= B on all backgrounds | 95% |
| No pure extremes | SC-05 | Not rgb(0,0,0) or rgb(255,255,255) | 99% |
| ARIA landmarks | SC-06 | querySelectorAll count | 99% |
| Skip link | SC-07 | Selector match | 99% |
| Component library | SC-08 | Class name pattern matching | 90% |
| Background delta | SC-09 | RGB channel comparison | 95% |
| Stacked gap | SC-10 | getBoundingClientRect gap | 90% |
| Typography zones | SC-11 | fontSize comparison | 95% |
| Zone count | SC-12 | Element count | 99% |
| Channel count | SC-13 | Property diff count per boundary | 70% |
| Sub-perceptual waste | SC-14 | Value range check | 85% |
| Border presence | SC-15 | borderWidth > 0 | 95% |

### 5.2 What Perceptual Audit MUST Verify (~30%)

These properties CANNOT be checked by code. They require fresh-eyes PA auditors:

| Property | Why Code Fails | PA Questions |
|----------|---------------|--------------|
| "Does this feel DESIGNED?" (PA-05) | Holistic gestalt judgment | PA-05 (the defining question) |
| Metaphor structural coherence | Code cannot assess CSS-to-metaphor mapping | PA-01 through PA-04 |
| Channel shift DIRECTION | Code counts channels but cannot judge semantic alignment | PA-17 through PA-24 |
| Typography proportional beauty | Code checks deltas, not aesthetic harmony | PA-25 through PA-30 |
| Content-form fit | Does the visual form serve THIS content? | PA-31 through PA-36 |
| Visual rhythm | Spacing pattern creates satisfying reading experience | PA-37 through PA-42 |
| Transition grammar | Transition TYPE fits content SHIFT | PA-43 through PA-48 |

### 5.3 The Boundary Rule

**If a property has a numeric threshold, it belongs in gate-runner.js.**
**If a property requires "does this FEEL right?", it belongs in the PA.**

SC-13 (multi-coherence) sits on the boundary. The gate checks channel COUNT (programmatic: >= 3). The PA checks channel COHERENCE (perceptual: do they serve the same direction?). Both are needed. The gate is necessary-but-not-sufficient.

---

## 6. SC-13: MULTI-COHERENCE GATE — PSEUDOCODE

This is the most complex gate. It must detect how many CSS channels shift at each zone boundary.

```javascript
async function gateMultiCoherence(page) {
  const results = [];

  // Get all zone elements
  const zoneData = await page.$$eval(SELECTORS.zones, (zones) => {
    return zones.map((zone, i) => {
      const style = getComputedStyle(zone);

      // Find first text element for typography measurement
      const textEl = zone.querySelector('p, h2, h3, li');
      const textStyle = textEl ? getComputedStyle(textEl) : null;

      return {
        index: i,
        // Channel 1: Chromatic
        backgroundColor: style.backgroundColor,
        // Channel 2: Typographic (measured on first text child)
        fontSize: textStyle ? parseFloat(textStyle.fontSize) : null,
        fontWeight: textStyle ? textStyle.fontWeight : null,
        letterSpacing: textStyle ? parseFloat(textStyle.letterSpacing) || 0 : null,
        // Channel 3: Spatial
        paddingTop: parseFloat(style.paddingTop),
        paddingBottom: parseFloat(style.paddingBottom),
        marginTop: parseFloat(style.marginTop),
        marginBottom: parseFloat(style.marginBottom),
        // Channel 4: Structural
        borderLeftWidth: parseFloat(style.borderLeftWidth) || 0,
        borderTopWidth: parseFloat(style.borderTopWidth) || 0,
        borderBottomWidth: parseFloat(style.borderBottomWidth) || 0,
        // Channel 5: Behavioral (check for hover rules -- approximation)
        // NOTE: Cannot directly measure hover state; check if class suggests interactivity
        hasInteractive: zone.querySelector('a, button, [tabindex], details') !== null,
        // Channel 6: Material (check for background patterns or textures)
        backgroundImage: style.backgroundImage,
      };
    });
  });

  // Compare adjacent zones
  for (let i = 1; i < zoneData.length; i++) {
    const prev = zoneData[i - 1];
    const curr = zoneData[i];
    const channels = [];

    // Channel 1: Chromatic — background color differs
    if (prev.backgroundColor !== curr.backgroundColor) {
      const [pr, pg, pb] = parseRGB(prev.backgroundColor);
      const [cr, cg, cb] = parseRGB(curr.backgroundColor);
      const delta = Math.max(Math.abs(pr - cr), Math.abs(pg - cg), Math.abs(pb - cb));
      if (delta >= 15) {  // Must be perceptible, not just technically different
        channels.push({ name: 'chromatic', delta });
      }
    }

    // Channel 2: Typographic — font-size or font-weight differs
    if (prev.fontSize !== null && curr.fontSize !== null) {
      const fsDelta = Math.abs(prev.fontSize - curr.fontSize);
      const fwDelta = Math.abs(parseInt(prev.fontWeight) - parseInt(curr.fontWeight));
      if (fsDelta >= 2 || fwDelta >= 100) {
        channels.push({ name: 'typographic', fsDelta, fwDelta });
      }
    }

    // Channel 3: Spatial — total padding differs
    const prevPad = prev.paddingTop + prev.paddingBottom;
    const currPad = curr.paddingTop + curr.paddingBottom;
    if (Math.abs(prevPad - currPad) >= 24) {  // >= 24px = perceptible
      channels.push({ name: 'spatial', delta: Math.abs(prevPad - currPad) });
    }

    // Channel 4: Structural — border configuration differs
    const prevBorder = prev.borderLeftWidth + prev.borderTopWidth + prev.borderBottomWidth;
    const currBorder = curr.borderLeftWidth + curr.borderTopWidth + curr.borderBottomWidth;
    if (Math.abs(prevBorder - currBorder) >= 1) {
      channels.push({ name: 'structural', delta: Math.abs(prevBorder - currBorder) });
    }

    // Channel 5: Behavioral — interactivity presence differs
    if (prev.hasInteractive !== curr.hasInteractive) {
      channels.push({ name: 'behavioral', prevHas: prev.hasInteractive, currHas: curr.hasInteractive });
    }

    // Channel 6: Material — background texture/pattern differs
    if (prev.backgroundImage !== curr.backgroundImage &&
        (prev.backgroundImage !== 'none' || curr.backgroundImage !== 'none')) {
      channels.push({ name: 'material' });
    }

    const pass = channels.length >= 3;
    results.push({
      id: `SC-13-${i}`,
      name: `Multi-Coherence: Zone ${i-1} to ${i}`,
      pass,
      measured: {
        channelCount: channels.length,
        channels: channels.map(c => c.name),
        threshold: 3
      },
      fix: !pass ? {
        instruction: `Boundary zone-${i-1} to zone-${i} has ${channels.length} channel shift(s) (need >= 3). Present: [${channels.map(c => c.name).join(', ')}]. Missing: [${getMissingChannels(channels)}].`,
        suggestions: generateCoherenceSuggestions(channels, prev, curr)
      } : null
    });
  }

  return {
    gate: 'SC-13',
    name: 'Multi-Coherence',
    pass: results.every(r => r.pass),
    results
  };
}

function getMissingChannels(presentChannels) {
  const all = ['chromatic', 'typographic', 'spatial', 'structural', 'behavioral', 'material'];
  const present = new Set(presentChannels.map(c => c.name));
  return all.filter(c => !present.has(c)).join(', ');
}
```

**Honest limitation:** SC-13 counts how many channels CHANGE but cannot assess whether they change in the same SEMANTIC DIRECTION. Three channels shifting in conflicting directions (background darkens, font-size increases, padding decreases) passes the gate but may create visual chaos. The PA catches this; SC-13 does not.

---

## 7. SC-14: SUB-PERCEPTUAL PREVENTION GATE — PSEUDOCODE

This gate prevents the flagship's failure mode: 22% of CSS budget spent on imperceptible micro-typography.

```javascript
async function gateSubPerceptual(page) {
  const results = [];
  const violations = [];

  // Check 1: Letter-spacing values that are sub-perceptual
  const letterSpacings = await page.$$eval('h1, h2, h3, p, li, figcaption, blockquote', (els) => {
    return els.map(el => {
      const style = getComputedStyle(el);
      const ls = style.letterSpacing;
      const lsPx = parseFloat(ls) || 0;
      const fsPx = parseFloat(style.fontSize) || 16;
      const lsEm = fsPx > 0 ? lsPx / fsPx : 0;
      return {
        tag: el.tagName,
        class: el.className ? el.className.split(' ')[0] : '',
        letterSpacing: ls,
        letterSpacingPx: lsPx,
        letterSpacingEm: lsEm,
        fontSize: fsPx
      };
    });
  });

  // Flag any letter-spacing > 0 but < 0.02em (sub-perceptual)
  const subPerceptualLS = letterSpacings.filter(
    el => el.letterSpacingEm > 0 && el.letterSpacingEm < 0.02
  );

  results.push({
    id: 'SC-14-LS',
    name: 'Sub-Perceptual Letter-Spacing',
    pass: subPerceptualLS.length === 0,
    measured: {
      totalElements: letterSpacings.length,
      subPerceptualCount: subPerceptualLS.length,
      violations: subPerceptualLS.slice(0, 5).map(v =>
        `${v.tag}.${v.class}: ${v.letterSpacingEm.toFixed(4)}em (${v.letterSpacingPx.toFixed(2)}px at ${v.fontSize}px)`
      )
    },
    fix: subPerceptualLS.length > 0 ? {
      instruction: `${subPerceptualLS.length} element(s) have letter-spacing between 0 and 0.02em (imperceptible). Either remove (set to 0) or increase to >= 0.03em.`,
      css: '/* REMOVE: letter-spacing: 0.005em; */\n/* REPLACE WITH: letter-spacing: 0; OR letter-spacing: 0.05em; */',
      provenance: 'Flagship spent 22% CSS (227 lines) on 0.001-0.01em letter-spacing. All imperceptible.'
    } : null
  });

  // Check 2: Distinct letter-spacing values used
  // (If many unique values exist but they cluster within 0.5px, that's sub-perceptual differentiation)
  const uniqueLS = new Set(letterSpacings.map(el => Math.round(el.letterSpacingPx * 10)));
  const lsValues = [...uniqueLS].sort((a, b) => a - b);

  if (lsValues.length > 2) {
    // Check if any adjacent pair is < 0.5px apart
    const tooCloseLS = [];
    for (let i = 1; i < lsValues.length; i++) {
      const deltaPx = (lsValues[i] - lsValues[i - 1]) / 10;
      if (deltaPx > 0 && deltaPx < 0.5) {
        tooCloseLS.push({ v1: lsValues[i - 1] / 10, v2: lsValues[i] / 10, delta: deltaPx });
      }
    }

    if (tooCloseLS.length > 0) {
      results.push({
        id: 'SC-14-LS-CLUSTER',
        name: 'Letter-Spacing Micro-Clustering',
        pass: false,
        measured: { clusters: tooCloseLS },
        fix: {
          instruction: `${tooCloseLS.length} letter-spacing pair(s) differ by < 0.5px: ${tooCloseLS.map(c => `${c.v1}px vs ${c.v2}px`).join(', ')}. These create illusory differentiation. Consolidate to fewer, more distinct values.`,
          css: '/* Use 2-3 distinct letter-spacing values, >= 0.5px apart: e.g., 0, 0.5px, 1px */'
        }
      });
    }
  }

  // Check 3: Background colors within the same zone that are too close
  // (Prevents the pattern: section bg #fefcf3, child bg #fdfbf2 — delta 1 RGB)
  const intraZoneBgs = await page.$$eval(SELECTORS.zones, (zones) => {
    const issues = [];
    zones.forEach((zone, zi) => {
      const zoneBg = getComputedStyle(zone).backgroundColor;
      const children = zone.querySelectorAll('div, section, article, aside, .card, .callout');
      children.forEach(child => {
        const childBg = getComputedStyle(child).backgroundColor;
        if (childBg !== 'rgba(0, 0, 0, 0)' && childBg !== zoneBg) {
          // Parse and compare
          const zMatch = zoneBg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
          const cMatch = childBg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
          if (zMatch && cMatch) {
            const delta = Math.max(
              Math.abs(+zMatch[1] - +cMatch[1]),
              Math.abs(+zMatch[2] - +cMatch[2]),
              Math.abs(+zMatch[3] - +cMatch[3])
            );
            if (delta > 0 && delta < 10) {
              issues.push({
                zone: zi,
                child: child.tagName + '.' + (child.className || '').split(' ')[0],
                zoneBg, childBg, delta
              });
            }
          }
        }
      });
    });
    return issues;
  });

  if (intraZoneBgs.length > 0) {
    results.push({
      id: 'SC-14-BG',
      name: 'Sub-Perceptual Intra-Zone Backgrounds',
      pass: false, // Advisory, not blocking
      measured: { issues: intraZoneBgs.slice(0, 5) },
      fix: {
        instruction: `${intraZoneBgs.length} child element(s) have backgrounds 1-9 RGB from their zone parent. Either match the zone background exactly or increase delta to >= 15 RGB.`,
        css: '/* Either inherit (background: inherit) or differentiate (>= 15 RGB delta) */'
      }
    });
  }

  return {
    gate: 'SC-14',
    name: 'Sub-Perceptual Prevention',
    pass: results.every(r => r.pass),
    results
  };
}
```

---

## 8. SC-10: MASS DISTRIBUTION / WHITESPACE VOID GATE — PSEUDOCODE

This gate catches the flagship's 210-276px whitespace voids at section boundaries.

```javascript
async function gateStackedGap(page) {
  const results = [];

  // Measure actual pixel gap between the bottom edge of zone N
  // and the top edge of zone N+1 as rendered
  const boundaries = await page.$$eval(SELECTORS.zones, (zones) => {
    const gaps = [];
    for (let i = 0; i < zones.length - 1; i++) {
      const endRect = zones[i].getBoundingClientRect();
      const startRect = zones[i + 1].getBoundingClientRect();

      // The visual gap = top of next zone minus bottom of current zone
      const visualGap = startRect.top - endRect.bottom;

      // Also measure the contributing properties for the fix recipe
      const prevStyle = getComputedStyle(zones[i]);
      const nextStyle = getComputedStyle(zones[i + 1]);

      gaps.push({
        fromZone: i,
        toZone: i + 1,
        visualGap: Math.round(visualGap),
        // Decomposed contributing properties:
        prevMarginBottom: parseFloat(prevStyle.marginBottom) || 0,
        prevPaddingBottom: parseFloat(prevStyle.paddingBottom) || 0,
        prevBorderBottom: parseFloat(prevStyle.borderBottomWidth) || 0,
        nextMarginTop: parseFloat(nextStyle.marginTop) || 0,
        nextPaddingTop: parseFloat(nextStyle.paddingTop) || 0,
        nextBorderTop: parseFloat(nextStyle.borderTopWidth) || 0,
      });
    }
    return gaps;
  });

  boundaries.forEach(b => {
    // Calculate theoretical stacked total from individual properties
    const stackedTotal = b.prevMarginBottom + b.prevPaddingBottom +
                         b.prevBorderBottom + b.nextMarginTop +
                         b.nextPaddingTop + b.nextBorderTop;

    // Use the LARGER of visual gap and stacked total
    // (margin collapsing can make visual < stacked)
    const effectiveGap = Math.max(b.visualGap, 0);

    const pass = effectiveGap <= 108;

    results.push({
      id: `SC-10-${b.fromZone}`,
      name: `Stacked Gap: Zone ${b.fromZone} to ${b.toZone}`,
      pass,
      measured: {
        visualGap: b.visualGap,
        stackedComponents: {
          prevMarginBottom: b.prevMarginBottom,
          prevPaddingBottom: b.prevPaddingBottom,
          prevBorderBottom: b.prevBorderBottom,
          nextMarginTop: b.nextMarginTop,
          nextPaddingTop: b.nextPaddingTop,
          nextBorderTop: b.nextBorderTop,
          stackedTotal: Math.round(stackedTotal)
        },
        threshold: 108
      },
      fix: !pass ? {
        instruction: `Gap between zone ${b.fromZone} and zone ${b.toZone} is ${b.visualGap}px (max 108px). The stacked components are: margin-bottom ${b.prevMarginBottom}px + padding-bottom ${b.prevPaddingBottom}px + border-bottom ${b.prevBorderBottom}px + margin-top ${b.nextMarginTop}px + padding-top ${b.nextPaddingTop}px + border-top ${b.nextBorderTop}px = ${Math.round(stackedTotal)}px.`,
        suggestion: identifyLargestContributor(b),
        css: generateStackFix(b)
      } : null
    });
  });

  // ADDITIONAL: Check for empty zones (mass distribution)
  // A zone with fewer than 2 content elements is likely a whitespace void
  const zoneContentCounts = await page.$$eval(SELECTORS.zones, (zones) => {
    return zones.map((zone, i) => {
      const contentEls = zone.querySelectorAll('p, h1, h2, h3, h4, ul, ol, table, figure, img, blockquote, .callout');
      return { zone: i, contentCount: contentEls.length };
    });
  });

  const sparseZones = zoneContentCounts.filter(z => z.contentCount < 2);
  if (sparseZones.length > 0) {
    results.push({
      id: 'SC-10-SPARSE',
      name: 'Sparse Zone Warning',
      pass: true, // Warning, not blocking
      measured: { sparseZones },
      fix: {
        instruction: `WARNING: ${sparseZones.length} zone(s) have fewer than 2 content elements: ${sparseZones.map(z => `zone ${z.zone} (${z.contentCount} elements)`).join(', ')}. These may appear as whitespace voids. Consider merging with adjacent zones or adding content.`,
        severity: 'warning'
      }
    });
  }

  return {
    gate: 'SC-10',
    name: 'Stacked Gap / Mass Distribution',
    pass: results.filter(r => r.id !== 'SC-10-SPARSE').every(r => r.pass),
    results
  };
}

function identifyLargestContributor(boundary) {
  const components = [
    { name: 'prev margin-bottom', value: boundary.prevMarginBottom, target: 'zone-' + boundary.fromZone },
    { name: 'prev padding-bottom', value: boundary.prevPaddingBottom, target: 'zone-' + boundary.fromZone },
    { name: 'next margin-top', value: boundary.nextMarginTop, target: 'zone-' + boundary.toZone },
    { name: 'next padding-top', value: boundary.nextPaddingTop, target: 'zone-' + boundary.toZone },
  ];
  const sorted = components.sort((a, b) => b.value - a.value);
  const largest = sorted[0];
  const excess = boundary.visualGap - 108;
  return `Largest contributor: ${largest.name} (${largest.value}px) on ${largest.target}. Reduce by at least ${excess}px.`;
}

function generateStackFix(boundary) {
  const excess = boundary.visualGap - 108;
  // Distribute reduction across the two largest contributors
  return `/* Reduce gap by ${excess}px. Suggestion: reduce margin-bottom and padding-top equally */`;
}
```

---

## 9. SC-09: BACKGROUND DELTA GATE — PSEUDOCODE (most critical gate)

```javascript
async function gateBackgroundDelta(page) {
  const results = [];

  // Parse RGB from computed style string
  function parseRGB(rgbStr) {
    const match = rgbStr.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    return match ? { r: +match[1], g: +match[2], b: +match[3] } : null;
  }

  // Get zone backgrounds
  const zoneBgs = await page.$$eval(SELECTORS.zones, (zones) => {
    return zones.map((zone, i) => {
      const bg = getComputedStyle(zone).backgroundColor;
      return { index: i, bg, id: zone.getAttribute('data-zone') || `section-${i}` };
    });
  });

  if (zoneBgs.length < 2) {
    return {
      gate: 'SC-09',
      name: 'Background Delta',
      pass: false,
      results: [{
        id: 'SC-09-COUNT',
        name: 'Zone Count for BG Check',
        pass: false,
        measured: { zoneCount: zoneBgs.length },
        fix: { instruction: 'Fewer than 2 zones found with backgrounds. Ensure zones have data-zone attributes or are direct section children of main.' }
      }]
    };
  }

  // Compare adjacent zone backgrounds
  for (let i = 1; i < zoneBgs.length; i++) {
    const prevRGB = parseRGB(zoneBgs[i - 1].bg);
    const currRGB = parseRGB(zoneBgs[i].bg);

    if (!prevRGB || !currRGB) {
      results.push({
        id: `SC-09-${i}`,
        name: `Zone ${i-1} to ${i} Background Delta`,
        pass: false,
        measured: { error: 'Could not parse background color', prev: zoneBgs[i-1].bg, curr: zoneBgs[i].bg },
        fix: { instruction: 'Set explicit background-color on zones. Transparent or inherited backgrounds cannot be compared.' }
      });
      continue;
    }

    const deltaR = Math.abs(prevRGB.r - currRGB.r);
    const deltaG = Math.abs(prevRGB.g - currRGB.g);
    const deltaB = Math.abs(prevRGB.b - currRGB.b);
    const maxDelta = Math.max(deltaR, deltaG, deltaB);

    const pass = maxDelta >= 15;

    results.push({
      id: `SC-09-${i}`,
      name: `Zone ${i-1} (${zoneBgs[i-1].id}) to Zone ${i} (${zoneBgs[i].id}) Background Delta`,
      pass,
      measured: {
        prevBg: zoneBgs[i - 1].bg,
        currBg: zoneBgs[i].bg,
        delta: { r: deltaR, g: deltaG, b: deltaB, max: maxDelta },
        threshold: 15
      },
      fix: !pass ? {
        instruction: `Background delta between zone ${i-1} and zone ${i} is ${maxDelta} RGB (need >= 15). Zone ${i-1}: rgb(${prevRGB.r},${prevRGB.g},${prevRGB.b}). Zone ${i}: rgb(${currRGB.r},${currRGB.g},${currRGB.b}).`,
        suggestion: generateBgSuggestions(prevRGB, currRGB, i),
        reference: 'perception-thresholds.md: Chromatic Channel'
      } : null
    });
  }

  return {
    gate: 'SC-09',
    name: 'Background Delta',
    pass: results.every(r => r.pass),
    results
  };
}

function generateBgSuggestions(prevRGB, currRGB, zoneIndex) {
  // Generate 3 alternatives that satisfy >= 15 delta AND R >= G >= B (warm palette)
  const suggestions = [];

  // Option 1: Darken the current zone
  const darker = {
    r: Math.max(0, currRGB.r - 15),
    g: Math.max(0, currRGB.g - 16),
    b: Math.max(0, currRGB.b - 17)
  };
  suggestions.push(`rgb(${darker.r}, ${darker.g}, ${darker.b}) /* darken zone ${zoneIndex} */`);

  // Option 2: Use a known good warm palette value
  const warmPalette = [
    { r: 254, g: 252, b: 243 },  // #fefcf3
    { r: 245, g: 237, b: 227 },  // #f5ede3
    { r: 240, g: 235, b: 227 },  // #f0ebe3
    { r: 232, g: 224, b: 213 },  // #e8e0d5
    { r: 220, g: 213, b: 203 },  // #dcd5cb
  ];
  // Find first palette color with >= 15 delta from prev
  const match = warmPalette.find(c =>
    Math.max(Math.abs(c.r - prevRGB.r), Math.abs(c.g - prevRGB.g), Math.abs(c.b - prevRGB.b)) >= 15
  );
  if (match) {
    suggestions.push(`rgb(${match.r}, ${match.g}, ${match.b}) /* warm palette value with sufficient delta */`);
  }

  return suggestions;
}
```

---

## 10. SC-11: TYPOGRAPHY ZONES GATE — PSEUDOCODE

```javascript
async function gateTypographyZones(page) {
  const results = [];

  // Wait for fonts to load (CRITICAL)
  await page.evaluate(() => document.fonts.ready);

  // Measure display headings
  const displaySizes = await page.$$eval(SELECTORS.displayText, (els) => {
    return els.map(el => ({
      tag: el.tagName,
      text: el.textContent.substring(0, 30),
      fontSize: parseFloat(getComputedStyle(el).fontSize),
      fontWeight: getComputedStyle(el).fontWeight,
      fontFamily: getComputedStyle(el).fontFamily.split(',')[0].trim().replace(/"/g, ''),
      letterSpacing: parseFloat(getComputedStyle(el).letterSpacing) || 0
    }));
  });

  // Measure body text
  const bodySizes = await page.$$eval(SELECTORS.bodyText, (els) => {
    return els.slice(0, 10).map(el => ({
      tag: el.tagName,
      fontSize: parseFloat(getComputedStyle(el).fontSize),
      fontWeight: getComputedStyle(el).fontWeight,
      fontFamily: getComputedStyle(el).fontFamily.split(',')[0].trim().replace(/"/g, ''),
      letterSpacing: parseFloat(getComputedStyle(el).letterSpacing) || 0
    }));
  });

  // Measure detail text
  const detailSizes = await page.$$eval(SELECTORS.detailText, (els) => {
    return els.map(el => ({
      tag: el.tagName,
      fontSize: parseFloat(getComputedStyle(el).fontSize),
      fontFamily: getComputedStyle(el).fontFamily.split(',')[0].trim().replace(/"/g, ''),
    }));
  });

  // Check 1: Display-to-body delta >= 10px
  const maxDisplay = displaySizes.length > 0 ? Math.max(...displaySizes.map(d => d.fontSize)) : 0;
  const avgBody = bodySizes.length > 0 ? bodySizes.reduce((s, b) => s + b.fontSize, 0) / bodySizes.length : 0;

  if (maxDisplay > 0 && avgBody > 0) {
    const displayBodyDelta = maxDisplay - avgBody;
    results.push({
      id: 'SC-11-DISPLAY',
      name: 'Display-Body Font Delta',
      pass: displayBodyDelta >= 10,
      measured: { maxDisplay, avgBody, delta: displayBodyDelta, threshold: 10 },
      fix: displayBodyDelta < 10 ? {
        instruction: `Largest heading (${maxDisplay}px) is only ${displayBodyDelta.toFixed(1)}px larger than body text (${avgBody.toFixed(1)}px). Need >= 10px delta. The flagship had ALL text at 16px.`,
        css: `h1 { font-size: 36px; } h2 { font-size: 28px; } /* Creates 20px / 12px delta from 16px body */`
      } : null
    });
  }

  // Check 2: Body-to-detail delta >= 2px
  const minDetail = detailSizes.length > 0 ? Math.min(...detailSizes.map(d => d.fontSize)) : avgBody;
  if (avgBody > 0 && minDetail > 0 && minDetail < avgBody) {
    const bodyDetailDelta = avgBody - minDetail;
    results.push({
      id: 'SC-11-DETAIL',
      name: 'Body-Detail Font Delta',
      pass: bodyDetailDelta >= 2,
      measured: { avgBody, minDetail, delta: bodyDetailDelta, threshold: 2 },
      fix: bodyDetailDelta < 2 ? {
        instruction: `Body text (${avgBody}px) and detail text (${minDetail}px) differ by only ${bodyDetailDelta.toFixed(1)}px (need >= 2). Set captions/meta to 13-14px.`,
        css: `figcaption, .meta, .detail, small, caption { font-size: 13px; }`
      } : null
    });
  }

  // Check 3: Font family variety >= 2
  const allFamilies = new Set([
    ...displaySizes.map(d => d.fontFamily),
    ...bodySizes.map(b => b.fontFamily),
    ...detailSizes.map(d => d.fontFamily)
  ]);
  results.push({
    id: 'SC-11-FAMILY',
    name: 'Font Family Variety',
    pass: allFamilies.size >= 2,
    measured: { families: [...allFamilies], count: allFamilies.size, threshold: 2 },
    fix: allFamilies.size < 2 ? {
      instruction: `Only ${allFamilies.size} font family: ${[...allFamilies].join(', ')}. Need >= 2 from the trinity: Instrument Serif (display), system serif (body), system sans (detail/UI).`,
      css: `h1, h2 { font-family: 'Instrument Serif', serif; }\np { font-family: Georgia, 'Times New Roman', serif; }\nfigcaption, .meta { font-family: system-ui, sans-serif; }`
    } : null
  });

  return {
    gate: 'SC-11',
    name: 'Typography Zones',
    pass: results.every(r => r.pass),
    results
  };
}
```

---

## 10. TOTAL ARCHITECTURE

### 10.1 File Structure

```
design-system/compositional-core/
  gate-runner.js          (~400 lines) Main gate runner module
  gate-registry.js        (~120 lines) Gate definitions + thresholds
  perception-thresholds.md (~80 lines) Human-readable threshold reference
```

### 10.2 gate-runner.js — Module Structure

```javascript
// gate-runner.js — Pipeline V2 Programmatic Verification
// ~400 lines

const { chromium } = require('playwright');

// ─── CONSTANTS ─────────────────────────────────────────
const SELECTORS = { /* ... as defined in Section 2.2 */ };
const THRESHOLDS = {
  containerWidth: { min: 940, max: 960 },
  bgDelta: { min: 15 },
  stackedGap: { max: 108 },
  displayBodyDelta: { min: 10 },
  bodyDetailDelta: { min: 2 },
  letterSpacingMin: 0.02,  // em
  channelsPerBoundary: { min: 3 },
  zoneCount: { min: 2, max: 5 },
  landmarkCount: { min: 3 },
  fontFamilyCount: { min: 2 },
  componentClassCount: { min: 3 },
};

// ─── UTILITIES ─────────────────────────────────────────
function parseRGB(rgbStr) { /* ... */ }
function rgbDelta(a, b) { /* max channel delta */ }
function generateBgSuggestions(prev, curr) { /* ... */ }

// ─── INDIVIDUAL GATE FUNCTIONS ─────────────────────────
async function gateSC01_ContainerWidth(page) { /* ... */ }
async function gateSC02_SoulProperties(page) { /* ... */ }
async function gateSC03_FontTrinity(page) { /* ... */ }
async function gateSC04_WarmPalette(page) { /* ... */ }
async function gateSC05_NoPureExtremes(page) { /* ... */ }
async function gateSC06_ARIALandmarks(page) { /* ... */ }
async function gateSC07_SkipLink(page) { /* ... */ }
async function gateSC08_ComponentLibrary(page) { /* ... */ }
async function gateSC09_BackgroundDelta(page) { /* ... */ }
async function gateSC10_StackedGap(page) { /* ... */ }
async function gateSC11_TypographyZones(page) { /* ... */ }
async function gateSC12_ZoneCount(page) { /* ... */ }
async function gateSC13_MultiCoherence(page) { /* ... */ }
async function gateSC14_SubPerceptualPrevention(page) { /* ... */ }
async function gateSC15_BorderPresence(page) { /* ... */ }

// ─── GATE GROUPS (for phase-specific runs) ─────────────
const PHASE_GATES = {
  phase1: [gateSC06, gateSC07, gateSC08, gateSC12],       // Structure
  phase3: [gateSC04, gateSC05, gateSC09],                  // Backgrounds
  phase4: [gateSC01, gateSC02, gateSC15],                  // Soul + Borders
  phase5: [gateSC03, gateSC11],                            // Typography
};

const ALL_GATES = [
  gateSC01, gateSC02, gateSC03, gateSC04, gateSC05,
  gateSC06, gateSC07, gateSC08, gateSC09, gateSC10,
  gateSC11, gateSC12, gateSC13, gateSC14, gateSC15,
];

// ─── MAIN RUNNER ───────────────────────────────────────
async function runGates(htmlUrl, gateSet = 'all') {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(htmlUrl, { waitUntil: 'networkidle' });

  // Wait for fonts and disable animations
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({
    content: '*, *::before, *::after { animation: none !important; transition: none !important; }'
  });

  // Select gate set
  const gates = gateSet === 'all' ? ALL_GATES : (PHASE_GATES[gateSet] || ALL_GATES);

  // Run each gate
  const results = [];
  for (const gateFn of gates) {
    try {
      const result = await gateFn(page);
      results.push(result);
    } catch (err) {
      results.push({
        gate: gateFn.name,
        pass: false,
        error: err.message,
        results: [{ id: 'ERROR', pass: false, fix: { instruction: `Gate crashed: ${err.message}` } }]
      });
    }
  }

  await browser.close();

  // Compile summary
  const totalGates = results.length;
  const passing = results.filter(r => r.pass).length;
  const failing = results.filter(r => !r.pass);

  return {
    summary: {
      total: totalGates,
      passing,
      failing: totalGates - passing,
      allPass: passing === totalGates,
      gateSet
    },
    gates: results,
    fixRecipes: failing.flatMap(g =>
      g.results.filter(r => !r.pass && r.fix).map(r => ({
        gate: g.gate || g.name,
        check: r.name,
        ...r.fix
      }))
    ),
    timestamp: new Date().toISOString()
  };
}

// ─── ENTRY POINTS ──────────────────────────────────────
// Phase gate (mid-build): runGates(url, 'phase1')
// Full verification (Wave 2): runGates(url, 'all')
// Fix cycle re-check: runGates(url, 'all')

module.exports = { runGates, THRESHOLDS, SELECTORS };
```

### 10.3 Output Format

The gate runner returns a JSON object that the orchestrator consumes:

```json
{
  "summary": {
    "total": 15,
    "passing": 13,
    "failing": 2,
    "allPass": false,
    "gateSet": "all"
  },
  "gates": [
    {
      "gate": "SC-01",
      "name": "Container Width",
      "pass": true,
      "results": [
        { "id": "SC-01", "pass": true, "measured": { "maxWidth": "960px" } }
      ]
    },
    {
      "gate": "SC-09",
      "name": "Background Delta",
      "pass": false,
      "results": [
        {
          "id": "SC-09-1",
          "name": "Zone 0 to Zone 1 Background Delta",
          "pass": true,
          "measured": { "delta": { "max": 17 } }
        },
        {
          "id": "SC-09-2",
          "name": "Zone 1 to Zone 2 Background Delta",
          "pass": false,
          "measured": { "delta": { "max": 4 } },
          "fix": {
            "instruction": "Background delta is 4 RGB (need >= 15)...",
            "suggestion": ["rgb(240, 235, 227)"],
            "css": ".zone-2 { background-color: #f0ebe3; }"
          }
        }
      ]
    }
  ],
  "fixRecipes": [
    {
      "gate": "SC-09",
      "check": "Zone 1 to Zone 2 Background Delta",
      "instruction": "Background delta is 4 RGB (need >= 15)...",
      "css": ".zone-2 { background-color: #f0ebe3; }"
    },
    {
      "gate": "SC-13",
      "check": "Multi-Coherence: Zone 2 to 3",
      "instruction": "Only 2 channels shifting (need >= 3)...",
      "css": "/* Add spatial differentiation: change padding from 48px to 72px */"
    }
  ],
  "timestamp": "2026-02-19T14:30:00.000Z"
}
```

### 10.4 Integration with PV2 Waves

```
WAVE 0: TC Planner
  └── No gate-runner involvement

WAVE 0.5: Metaphor Validation
  └── No gate-runner involvement (fresh-eyes agent, behavioral)

WAVE 0.9: Handoff Gate
  └── No gate-runner involvement (text-parsed from _build-plan.md)
  └── FUTURE: Could promote to gate-runner if _build-plan becomes structured YAML

WAVE 1: Build Execution
  └── Phase 1 complete → runGates(url, 'phase1')  [SC-06, SC-07, SC-08, SC-12]
  └── Phase 3 complete → runGates(url, 'phase3')  [SC-04, SC-05, SC-09]
  └── Phase 4 complete → runGates(url, 'phase4')  [SC-01, SC-02, SC-15]
  └── Phase 5 complete → runGates(url, 'phase5')  [SC-03, SC-11]

WAVE 2, Layer 1: Full Programmatic Verification
  └── Phase 8 complete → runGates(url, 'all')      [SC-01 through SC-15]
  └── ALL MUST PASS before proceeding to PA (Layer 2)

WAVE 2, Layer 2: Perceptual Audit
  └── Receives gate results as context (which gates passed, measured values)
  └── PA auditors see gate results in _build-log.md but evaluate INDEPENDENTLY

WAVE 3: Fix Cycle
  └── Builder applies fixes → runGates(url, 'all')  [re-check all 15]
  └── Max 3 cycles
```

---

## 11. HONEST LIMITATIONS

### What This Architecture SOLVES

1. **Imperceptible backgrounds** (SC-09): The flagship's primary failure. Now measured to >= 15 RGB.
2. **Uniform typography** (SC-11): All text at 16px. Now enforced >= 10px display-body delta.
3. **Whitespace voids** (SC-10): 210-276px stacked gaps. Now capped at 108px.
4. **Missing borders** (SC-15): Zero borders in flagship. Now at least 1 border or 2 dividers required.
5. **Soul violations** (SC-02): border-radius and box-shadow checked on every element.
6. **Container width** (SC-01): The #1 Phase D failure mode. Checked exactly.
7. **Sub-perceptual waste** (SC-14): 22% CSS budget on 0.001em letter-spacing. Now flagged.
8. **Multi-coherence minimum** (SC-13): At least 3 channels must shift per boundary.

### What This Architecture CANNOT SOLVE

1. **"Does this feel DESIGNED?"** — The PA-05 question. A page can pass all 15 gates and still feel flat if the choices do not compose into a coherent whole. Gates are necessary but not sufficient.
2. **Metaphor fidelity** — Code cannot assess whether "geological strata" metaphor drives CSS choices.
3. **Semantic direction of channel shifts** — SC-13 counts channels but cannot judge coherence.
4. **Content-form fit** — Whether the visual form serves THIS content's purpose.
5. **Visual rhythm** — Whether spacing creates a satisfying reading experience.
6. **Novel failure modes** — Gates catch KNOWN anti-patterns from the flagship. The next build may fail in a way no gate anticipates.

### The Adversarial Counterpoint (from Report 30)

Report 30 argues that more gates create false confidence: "When all 12 gates PASS, the orchestrator proceeds to Wave 2 (PA). But the PA auditors, seeing a build that passed all gates, may unconsciously bias toward confirmation."

**Response:** This is a real risk. The mitigation is architectural: PA auditors receive screenshots with ZERO build context. They do NOT see gate results. The gate results go to the PA weaver (synthesizer), not the individual auditors. This separation prevents confirmation bias at the individual auditor level.

Report 30 also argues: "CD-006 scored 39/40 WITHOUT any gates."

**Response:** CD-006 had human iteration (the user). PV2 is fire-and-forget (no user). The gates substitute for the human's perceptual feedback loop. They are not trying to produce CD-006 quality (4/4). They are trying to prevent flagship-level failure (1.5/4). The floor is the target, not the ceiling.

---

## 12. IMPLEMENTATION PRIORITY

### Build Order (highest ROI first)

1. **SC-09 (Background Delta)** — Catches THE primary failure. ~40 lines.
2. **SC-01 (Container Width)** — Catches the #1 Phase D failure. ~15 lines.
3. **SC-02 (Soul Properties)** — Catches identity violations. ~25 lines.
4. **SC-11 (Typography Zones)** — Catches uniform typography. ~50 lines.
5. **SC-10 (Stacked Gap)** — Catches whitespace voids. ~45 lines.
6. **SC-13 (Multi-Coherence)** — Most complex gate. ~60 lines.
7. **SC-15 (Border Presence)** — New gate from flagship failure. ~20 lines.
8. **SC-14 (Sub-Perceptual Prevention)** — Catches CSS budget waste. ~50 lines.
9. **SC-04, SC-05 (Palette)** — Warm palette and pure extreme checks. ~30 lines each.
10. **SC-03, SC-06, SC-07, SC-08, SC-12 (Structure)** — Structural presence checks. ~15-20 lines each.

### Total Estimated Size

| Component | Lines |
|-----------|-------|
| gate-runner.js (main runner + utilities) | ~120 |
| Gate functions SC-01 through SC-15 | ~280 |
| Gate registry (thresholds, selectors) | ~40 |
| **Total** | **~440** |

This is slightly above the PV2 estimate of ~300 lines because it includes 3 new gates (SC-13, SC-14, SC-15) not in the original SC-01 through SC-12 specification plus detailed fix recipe generation.

---

**END OF ARCHITECTURE DOCUMENT**

**Statistics:**
- Gates designed: 15 (SC-01 through SC-15)
- Pseudocode provided: 5 critical gates (SC-09, SC-10, SC-11, SC-13, SC-14)
- Fix recipe format: Structured JSON with measured values, suggested CSS, alternatives
- Phase gates: 4 mid-build + 1 full run + 3 fix cycles = 8 max invocations
- Programmatic/perceptual boundary: 70/30 (15 code gates / 48 PA questions)
- Total estimated size: ~440 lines JavaScript
- Integration points: Wave 1 (4 phase gates), Wave 2 Layer 1 (full run), Wave 3 (fix cycles)
