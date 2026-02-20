# GATE-RUNNER SECTION — Master Prompt Draft

**Author:** gate-researcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** #10 -- Draft the gate-runner section of the master execution prompt
**Sources:** 02-gate-research.md (819 lines), 42-gate-crossref.md (282 lines, 4 corrections applied)
**Format:** RECIPE (sequenced steps, specific values, action verbs) -- NOT checklist

---

## How This Section Fits in the Master Prompt

This is the VERIFICATION section. It runs AFTER the builder produces HTML+CSS. It is invoked by the orchestrator. The builder does NOT read this section -- the orchestrator uses it to run programmatic checks and feed structured fix recipes back to the builder.

**Who reads this:** The orchestrator agent (or the gate-runner function if implemented as code).
**Who does NOT read this:** The builder agent. The builder receives only structured fix recipes when gates fail.

---

## BEGIN GATE-RUNNER SECTION

### GATE ARCHITECTURE

21 gates. 3 enforcement tiers. Run in 2 phases:
1. **Micro-gates** during build (4 checkpoints, ~2 min total)
2. **Full gate run** after build complete (~15 sec)

Gates raise the FLOOR (prevent FLAT 1.5/4). They do NOT raise the CEILING. PA raises the ceiling.

**Gate-to-PA handoff:** ONE-WAY. Gates filter FIRST. If all 17 blocking gates pass, PA runs. Gates never re-run during PA. Gate diagnostic output is provided to PA auditors as context.

---

### MICRO-GATES (Run During Build)

Each micro-gate runs between build phases. Builder cannot proceed until gate passes. Max 2 re-runs per micro-gate.

#### MG-1: After HTML Skeleton Complete

**Run these 5 gates:**

```javascript
// SC-06: ARIA Landmarks >= 5
const landmarks = document.querySelectorAll(
  'header, nav, main, aside, footer, [role="banner"], [role="navigation"], [role="main"], [role="complementary"], [role="contentinfo"]'
);
if (landmarks.length < 5) FAIL("SC-06", { found: landmarks.length, required: 5 });

// SC-07: Skip Link Present
const skipLink = document.querySelector('a[href^="#"]');
const hasSkipLink = skipLink && /skip/i.test(skipLink.textContent) &&
  Array.from(document.body.children).indexOf(skipLink.closest('*')) < 5;
if (!hasSkipLink) FAIL("SC-07", { found: "none", required: "skip link in first 5 body children" });

// SC-08: Component Library Adoption >= 8 types
const classNames = [...document.querySelectorAll('[class]')].map(el => el.className);
const componentPrefixes = ['callout', 'grid', 'card', 'table', 'code-block', 'bento',
  'pullquote', 'sequence', 'decision', 'file-tree', 'reasoning', 'task-component',
  'section-indicator', 'divider', 'hypothesis'];
const usedFamilies = new Set();
classNames.forEach(cn => {
  componentPrefixes.forEach(prefix => { if (cn.includes(prefix)) usedFamilies.add(prefix); });
});
if (usedFamilies.size < 8) FAIL("SC-08", { found: usedFamilies.size, required: 8, families: [...usedFamilies] });

// SC-12: Zone Count 3-5
const zones = document.querySelectorAll('[class*="zone"], section[data-zone]');
const bgColors = new Set();
document.querySelectorAll('section').forEach(s => {
  bgColors.add(getComputedStyle(s).backgroundColor);
});
const zoneCount = Math.max(zones.length, bgColors.size);
if (zoneCount < 3 || zoneCount > 5) FAIL("SC-12", { found: zoneCount, required: "3-5" });

// DG-3: Landmark Completeness (header + main + footer)
const hasHeader = !!document.querySelector('header, [role="banner"]');
const hasMain = !!document.querySelector('main, [role="main"]');
const hasFooter = !!document.querySelector('footer, [role="contentinfo"]');
if (!hasHeader || !hasMain || !hasFooter) FAIL("DG-3", {
  header: hasHeader, main: hasMain, footer: hasFooter
});
```

#### MG-2: After Zone Backgrounds Applied

**Run these 3 gates:**

```javascript
// SC-04: Warm Palette (R >= G >= B for all backgrounds)
// EXCEPTION: Elements inside --bg-dark parents (inverted context) are excluded.
// EXCEPTION: Semantic accent backgrounds (--bg-info, --bg-tip) used on callout components are excluded.
document.querySelectorAll('*').forEach(el => {
  const bg = getComputedStyle(el).backgroundColor;
  if (bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') return;
  // Skip inverted contexts
  if (el.closest('[class*="dark"], [class*="inverted"], [class*="code-block"]')) return;
  // Skip semantic accent callouts
  if (el.closest('.callout--info, .callout--tip, [class*="callout"]')) return;
  const [r, g, b] = bg.match(/\d+/g).map(Number);
  if (r < g || g < b) FAIL("SC-04", { element: el.tagName + '.' + el.className, rgb: [r, g, b] });
});

// SC-05: No Pure Extremes (no #000000 or #FFFFFF)
// EXCEPTION: --text-inverse on dark backgrounds. EXCEPTION: --bg-dark itself.
document.querySelectorAll('*').forEach(el => {
  const styles = getComputedStyle(el);
  ['color', 'backgroundColor'].forEach(prop => {
    const val = styles[prop];
    if (!val || val === 'transparent' || val === 'rgba(0, 0, 0, 0)') return;
    const [r, g, b] = val.match(/\d+/g).map(Number);
    // Skip inverted contexts for white text
    if (prop === 'color' && r === 255 && g === 255 && b === 255 &&
        el.closest('[class*="dark"], [class*="inverted"], [class*="code-block"]')) return;
    if ((r === 0 && g === 0 && b === 0) || (r === 255 && g === 255 && b === 255)) {
      FAIL("SC-05", { element: el.tagName, property: prop, value: val });
    }
  });
});

// SC-09: Background Delta >= 15 RGB at every zone boundary
const zoneElements = [...document.querySelectorAll('[class*="zone"], section[data-zone]')];
for (let i = 0; i < zoneElements.length - 1; i++) {
  const bg1 = getComputedStyle(zoneElements[i]).backgroundColor;
  const bg2 = getComputedStyle(zoneElements[i + 1]).backgroundColor;
  const [r1, g1, b1] = bg1.match(/\d+/g).map(Number);
  const [r2, g2, b2] = bg2.match(/\d+/g).map(Number);
  const maxDelta = Math.max(Math.abs(r1 - r2), Math.abs(g1 - g2), Math.abs(b1 - b2));
  if (maxDelta < 15) {
    FAIL("SC-09", {
      boundary: `zone ${i + 1} -> zone ${i + 2}`,
      bg1: bg1, bg2: bg2, delta: maxDelta, required: 15,
      fix: {
        instruction: `Increase background contrast at zone ${i + 2}`,
        css: `/* Adjust zone ${i + 2} background to increase delta to >= 15 RGB */`,
        reference: "tokens.css zone colors"
      }
    });
  }
}
```

#### MG-3: After Borders Applied

**Run these 3 gates:**

```javascript
// SC-01: Container Width 940-960px
const container = document.querySelector('.page-container, main, [role="main"]');
const maxWidth = getComputedStyle(container).maxWidth;
const width = getComputedStyle(container).width;
const effectiveWidth = maxWidth !== 'none' ? parseInt(maxWidth) : parseInt(width);
if (effectiveWidth < 940 || effectiveWidth > 960) {
  FAIL("SC-01", { found: effectiveWidth, required: "940-960px" });
}

// SC-02: Soul Properties (radius: 0, shadow: none)
document.querySelectorAll('*').forEach(el => {
  const styles = getComputedStyle(el);
  if (styles.borderRadius !== '0px') {
    FAIL("SC-02", { element: el.tagName + '.' + el.className, borderRadius: styles.borderRadius });
  }
  if (styles.boxShadow !== 'none') {
    FAIL("SC-02", { element: el.tagName + '.' + el.className, boxShadow: styles.boxShadow });
  }
});

// SC-15: Border Presence >= 3 distinct configurations
const borderConfigs = new Set();
document.querySelectorAll('*').forEach(el => {
  const styles = getComputedStyle(el);
  ['Left', 'Right', 'Top', 'Bottom'].forEach(side => {
    const w = styles[`border${side}Width`];
    if (w && w !== '0px') {
      const config = `${w}-${styles[`border${side}Style`]}-${styles[`border${side}Color`]}`;
      borderConfigs.add(config);
    }
  });
});
if (borderConfigs.size < 3) {
  FAIL("SC-15", { found: borderConfigs.size, required: 3, configs: [...borderConfigs] });
}
```

#### MG-4: After Typography Applied

**Run these 2 gates:**

```javascript
// SC-03: Font Trinity (wait for fonts first)
await document.fonts.ready;
const allowedFonts = ['Instrument Serif', 'Inter', 'JetBrains Mono'];
document.querySelectorAll('h1, h2, h3, h4, p, span, a, li, td, th, code, pre, blockquote, small, label').forEach(el => {
  const family = getComputedStyle(el).fontFamily;
  const isAllowed = allowedFonts.some(f => family.startsWith(`"${f}"`) || family.startsWith(f));
  if (!isAllowed) {
    FAIL("SC-03", { element: el.tagName, fontFamily: family });
  }
});

// SC-11: Typography Zone Hierarchy
const fontSizes = {};
document.querySelectorAll('h1, h2, h3, p, small').forEach(el => {
  const zone = el.closest('[class*="zone"], section[data-zone]');
  const zoneId = zone ? zone.className : 'global';
  if (!fontSizes[zoneId]) fontSizes[zoneId] = [];
  fontSizes[zoneId].push({
    tag: el.tagName,
    size: parseFloat(getComputedStyle(el).fontSize)
  });
});
// Compute display-body delta and count distinct typography zones
const zoneSizes = Object.entries(fontSizes).map(([zone, sizes]) => {
  const heading = Math.max(...sizes.filter(s => /^H/.test(s.tag)).map(s => s.size));
  const body = sizes.filter(s => s.tag === 'P').map(s => s.size)[0] || 16;
  return { zone, heading, body, delta: heading - body };
});
const displayBodyDelta = Math.max(...zoneSizes.map(z => z.delta));
const distinctTypoZones = new Set(zoneSizes.map(z => Math.round(z.body))).size;
if (displayBodyDelta < 10) {
  FAIL("SC-11", { displayBodyDelta, required: ">= 10px" });
}
if (distinctTypoZones < 3) {
  FAIL("SC-11", { distinctTypoZones, required: ">= 3 distinct body font-size zones" });
}
```

---

### FULL GATE RUN (After Build Complete)

Run ALL gates. ~15 seconds total. Single Playwright session.

**Execution order:**

```
GROUP 1 (parallel): SC-01, SC-02, SC-03, SC-04, SC-05  -- Identity
GROUP 2 (parallel): SC-06, SC-07, SC-08, SC-12, DG-3   -- Structure
GROUP 3 (sequential, needs zone IDs from Group 2):
  SC-09 -> SC-10 -> SC-11 -> SC-14 -> SC-15            -- Perception
GROUP 4 (sequential, needs Group 3):
  SC-13 -> SC-13B -> SC-16                              -- Compositional
GROUP 5 (after Group 4):
  DG-1, DG-2                                            -- Deliverable validation
```

**Additional gates in full run (not in micro-gates):**

```javascript
// SC-10: Stacked Gap <= 120px at every zone boundary
const zoneEls = [...document.querySelectorAll('[class*="zone"], section[data-zone]')];
for (let i = 0; i < zoneEls.length - 1; i++) {
  const lastChild = zoneEls[i].lastElementChild;
  const firstChild = zoneEls[i + 1].firstElementChild;
  if (lastChild && firstChild) {
    const gap = firstChild.getBoundingClientRect().top - lastChild.getBoundingClientRect().bottom;
    if (gap > 120) {
      FAIL("SC-10", {
        boundary: `zone ${i + 1} -> zone ${i + 2}`,
        gap: Math.round(gap), required: "<= 120px",
        fix: {
          instruction: `Reduce gap at zone ${i + 2} boundary by ${Math.round(gap - 120)}px`,
          css: `/* Reduce padding or margin at zone ${i + 2} top */`,
          reference: "tokens.css --space-max-zone: 96px"
        }
      });
    }
  }
}

// SC-14: Sub-Perceptual Prevention
// (a) No letter-spacing between 0 and 0.025em
// (b) No adjacent letter-spacing values < 0.5px apart
// (c) No intra-zone bg deltas between 1-14 RGB
const letterSpacings = [];
document.querySelectorAll('p, h1, h2, h3, h4, span, a, li').forEach(el => {
  const ls = getComputedStyle(el).letterSpacing;
  if (ls !== 'normal') {
    const pxVal = parseFloat(ls);
    const fontSize = parseFloat(getComputedStyle(el).fontSize);
    const emVal = pxVal / fontSize;
    if (emVal > 0 && emVal < 0.025) {
      FAIL("SC-14", { element: el.tagName, letterSpacing: ls, emValue: emVal.toFixed(4), threshold: "0.025em" });
    }
    letterSpacings.push(pxVal);
  }
});
// Check clustering
letterSpacings.sort((a, b) => a - b);
for (let i = 0; i < letterSpacings.length - 1; i++) {
  if (Math.abs(letterSpacings[i + 1] - letterSpacings[i]) < 0.5 && letterSpacings[i] !== 0) {
    FAIL("SC-14", { clustering: true, values: [letterSpacings[i], letterSpacings[i + 1]], minDelta: "0.5px" });
  }
}

// SC-13: Multi-Coherence (Channel Shift Count)
// At every zone boundary, count how many of 6 channels visibly shift
const channelResults = [];
for (let i = 0; i < zoneEls.length - 1; i++) {
  let channels = 0;
  const s1 = getComputedStyle(zoneEls[i]);
  const s2 = getComputedStyle(zoneEls[i + 1]);

  // (1) Chromatic: bg delta >= 15 RGB
  const [r1, g1, b1] = s1.backgroundColor.match(/\d+/g).map(Number);
  const [r2, g2, b2] = s2.backgroundColor.match(/\d+/g).map(Number);
  if (Math.max(Math.abs(r1-r2), Math.abs(g1-g2), Math.abs(b1-b2)) >= 15) channels++;

  // (2) Typographic: font-size delta >= 2px OR font-weight delta >= 100
  const fs1 = parseFloat(s1.fontSize), fs2 = parseFloat(s2.fontSize);
  const fw1 = parseInt(s1.fontWeight), fw2 = parseInt(s2.fontWeight);
  if (Math.abs(fs1-fs2) >= 2 || Math.abs(fw1-fw2) >= 100) channels++;

  // (3) Spatial: padding delta >= 24px
  const pad1 = parseFloat(s1.paddingTop) + parseFloat(s1.paddingBottom);
  const pad2 = parseFloat(s2.paddingTop) + parseFloat(s2.paddingBottom);
  if (Math.abs(pad1-pad2) >= 24) channels++;

  // (4) Structural: border configuration change
  const bdr1 = `${s1.borderLeftWidth}-${s1.borderLeftStyle}-${s1.borderLeftColor}`;
  const bdr2 = `${s2.borderLeftWidth}-${s2.borderLeftStyle}-${s2.borderLeftColor}`;
  if (bdr1 !== bdr2) channels++;

  // (5) Behavioral: interactivity presence change (check for hover/transition CSS)
  const hasTransition1 = s1.transition !== 'all 0s ease 0s' && s1.transition !== 'none';
  const hasTransition2 = s2.transition !== 'all 0s ease 0s' && s2.transition !== 'none';
  if (hasTransition1 !== hasTransition2) channels++;

  // (6) Material: background-image/texture change
  if (s1.backgroundImage !== s2.backgroundImage) channels++;

  channelResults.push({ boundary: `${i+1}->${i+2}`, channels });
  if (channels < 3) {
    FAIL("SC-13", { boundary: `zone ${i+1} -> zone ${i+2}`, channels, required: 3 });
  }
}
const avgChannels = channelResults.reduce((sum, r) => sum + r.channels, 0) / channelResults.length;
if (avgChannels < 4) {
  FAIL("SC-13", { average: avgChannels.toFixed(1), required: ">= 4.0 average" });
}

// SC-13B: Direction Coherence (ADVISORY -- does not block)
// Classify each channel shift as intensifying (+) or relaxing (-)
// Log percentage of boundaries with >= 3 same-direction shifts
// Output: diagnostic for PA auditors

// SC-16: Monotonic Property Progression (ADVISORY -- does not block)
// Check if any property (bg lightness, font-size, padding, border-weight)
// progresses monotonically across 3+ consecutive zones
// Output: diagnostic for PA auditors
```

---

### GATE FAILURE PROTOCOL

When ANY gate fails:

**Step 1:** Output structured fix recipe:
```json
{
  "gate": "SC-09",
  "status": "FAIL",
  "measured": { "zone1_bg": "#FAF5ED", "zone2_bg": "#F9F3EA", "delta_rgb": 8 },
  "threshold": { "min_delta": 15 },
  "fix": {
    "instruction": "Darken zone 2 background to increase delta",
    "css": ".zone-2 { background: #F0EBE3; }",
    "new_delta": 19,
    "alternative": ".zone-2 { background: #EDE5D9; } /* delta=24 */",
    "reference": "tokens.css zone colors"
  }
}
```

**Step 2:** Send ALL fix recipes to builder simultaneously (not one at a time).

**Step 3:** Builder applies fixes. Priority order: Tier A (composition-critical) FIRST, then Tier B (identity).

**Step 4:** Re-run failed gates. Max 2 re-runs for micro-gates, max 3 for full run.

**Step 5:** If still failing after max re-runs: STOP. Do NOT loop. Escalate to user.

---

### GATE DIAGNOSTIC OUTPUT FOR PA

After all gates pass, produce this summary for PA auditors:

```markdown
## Gate Diagnostic Summary

### Blocking Gates: ALL PASS (17/17)
- SC-01: Container 960px
- SC-09: Background deltas [list per boundary]
- SC-13: Channel shifts [list per boundary with count]
[... all gates ...]

### Advisory Diagnostics
- SC-13B: Direction coherence [% boundaries coherent, which contradict]
- SC-16: Monotonic progression [which properties, across which zones]

### Areas for PA Focus
[List any gate that passed narrowly or produced interesting diagnostic data]
```

PA auditors receive this as WHERE-TO-LOOK orientation. They determine whether narrow passes are bugs or features.

---

### DELIVERABLE GATES (Tier 2)

These validate YAML files the builder produces alongside the HTML:

```yaml
# DG-1: fractal_table.yaml
# Must have 5 rows (Navigation, Page, Section, Component, Character)
# Each row: css_evidence (non-empty), pattern_direction (non-empty)
# All pattern_direction values consistent OR variation documented

# DG-2: cascade_table.yaml
# Must have entry for every zone boundary
# Cross-validate claimed values against SC-13 measured values
# Discrepancy tolerances: < 5 RGB, < 1px font-size, < 0.01em letter-spacing
# NOTE: Discrepancy thresholds are engineering defaults, calibrate after first experiment

# DG-4: _build-plan.yaml (PRE-BUILD gate, runs before builder starts)
# Validates: zone_count (2-5), bg_deltas (all >= 15), mechanisms (>= 1 per 5 categories),
# transitions (>= 3 types), grid_layouts (>= 2)
```

### BEHAVIORAL GATES (Tier 3)

```
BG-1: Metaphor Independence
  Verified via build log: metaphor derivation timestamps BEFORE library consultation
  Check: build log Phase 1-3 entries exist BEFORE any Phase 5 library reference

BG-2: Metaphor Structural (not Announced)
  Verified at Wave 0.5 by fresh-eyes Opus agent (separate from builder)
  Binary judgment: STRUCTURAL (suggests specific CSS) or ANNOUNCED (label-only)
  FAIL = ANNOUNCED. Builder must revise metaphor before proceeding.
```

---

### THRESHOLD REFERENCE TABLE

All thresholds in one place. Builder does NOT read this. Orchestrator/gate-runner references it.

| Gate | What | Pass | Fail | Flagship Elevation |
|------|------|------|------|--------------------|
| SC-01 | Container width | 940-960px | Outside range | -- |
| SC-02 | Soul properties | radius:0, shadow:none | Any deviation | -- |
| SC-03 | Font trinity | 3 allowed fonts only | Unapproved font | -- |
| SC-04 | Warm palette | R>=G>=B (excl. inverted/accent) | Cool-toned bg | -- |
| SC-05 | No extremes | No #000/#FFF (excl. inverted) | Pure black/white | -- |
| SC-06 | ARIA landmarks | >= 5 | < 5 | 3 -> 5 |
| SC-07 | Skip link | Present | Absent | -- |
| SC-08 | Components | >= 8 types | < 8 | 3 -> 8 |
| SC-09 | Background delta | >= 15 RGB max-channel | < 15 at any boundary | -- |
| SC-10 | Stacked gap | <= 120px total | > 120px at any boundary | -- |
| SC-11 | Typography zones | display-body >= 10px, 3+ zones | < 10px or < 3 zones | 2px -> 10px, 3 zones |
| SC-12 | Zone count | 3-5 | < 3 or > 5 | 2-5 -> 3-5 |
| SC-13 | Multi-coherence | >= 3/boundary, avg >= 4 | < 3 or avg < 4 | avg >= 4 added |
| SC-14 | Sub-perceptual | No ls < 0.025em, no bg 1-14 | Any sub-perceptual value | -- |
| SC-15 | Border presence | >= 3 distinct configs | < 3 | 1 -> 3 |
| SC-13B | Direction coherence | >= 50% coherent (ADVISORY) | Logged, no block | -- |
| SC-16 | Monotonic progress | >= 1 property (ADVISORY) | Logged, no block | -- |
| DG-1 | Fractal echo table | 5 rows, evidence, direction | Missing/incomplete | -- |
| DG-2 | Cascade value table | All boundaries, cross-val | Missing/discrepant | -- |
| DG-3 | Landmarks complete | header + main + footer | Any missing | -- |
| DG-4 | Handoff validation | 5 YAML sub-checks pass | Any sub-check fails | -- |

---

### KEY NUMBERS

- **21 total gates** (15 Tier 1 + 4 Tier 2 + 2 Tier 3)
- **17 blocking** + 2 advisory + 2 behavioral
- **6 Flagship-elevated thresholds** (SC-06, SC-08, SC-11, SC-12, SC-13, SC-15)
- **4 micro-gate checkpoints** during build (~2 min total)
- **1 full gate run** after build (~15 sec)
- **Max 2 re-runs** per micro-gate, **max 3 fix cycles** on full run
- **Gates catch ~26%** of compositional quality; PA catches ~74%
- **Gate-to-PA handoff:** ONE-WAY (gates filter, PA judges)
- **Every failure** produces structured JSON fix recipe with specific CSS

## END GATE-RUNNER SECTION

---

## NOTES FOR ASSEMBLER

1. This section is ~350 lines. It contains executable JS and structured data. The assembler should preserve the code blocks exactly.
2. The FAIL() function is a placeholder -- the actual implementation depends on whether gates run as Playwright evaluate() calls or as a standalone script. Both work.
3. The threshold corrections from 42-gate-crossref.md are applied: SC-10 uses 120px (not 108px), SC-14 uses 0.025em (not 0.02em), SC-04/SC-05 have inverted-context exceptions.
4. The tokens.css contradiction (cool-toned `--bg-info`/`--bg-tip` tokens) is handled via callout-component exception in SC-04. This is a design system issue, not a gate issue.
5. SC-09 alternative path ("texture path" with 5+ component types per zone) was REMOVED from the gate spec because the threshold is unsourced. The primary path (>= 15 RGB) is the only enforced criterion.
6. DG-2 discrepancy thresholds are labeled as "engineering defaults, calibrate after first experiment."
