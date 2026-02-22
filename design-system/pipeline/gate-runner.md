# Gate Runner -- Flagship 4/4 Programmatic Verification

## Purpose

This file defines 23 gates that verify the HTML output programmatically. Gates catch
mechanical defects (~26% of compositional quality). The remaining ~74% requires
perceptual audit (PA). Gates raise the FLOOR -- they prevent FLAT (1.5/4) pages
from consuming PA auditor time. Gates never judge composition; they filter for it.

## How to Run Gates

Execute each gate's JavaScript check against the rendered HTML in a Playwright
browser session. Gates produce structured JSON results:

```json
{
  "gate": "SC-XX",
  "status": "PASS" | "FAIL" | "ADVISORY",
  "measured": { },
  "threshold": { },
  "fix": {
    "instruction": "...",
    "css": "...",
    "alternative": "...",
    "reference": "..."
  }
}
```

Gates that FAIL produce a fix recipe with specific CSS. Gates that PASS produce
diagnostic data for PA context. ADVISORY gates never block -- they log warnings.

---

## Micro-Gate Schedule (During Build)

Run these gate subsets between build phases. Builder cannot proceed until the
micro-gate passes. Max 2 re-runs per micro-gate.

### MG-1: After HTML Skeleton Phase (~30 sec)

Gates: SC-06, SC-07, SC-08, SC-12, DG-3

Why here: If HTML structure is wrong, all CSS is wasted. Catches structural
foundation problems when fix cost is lowest.

### MG-2: After Zone Backgrounds Phase (~30 sec)

Gates: SC-04, SC-05, SC-09

Why here: Catches THE primary Flagship failure (imperceptible backgrounds)
BEFORE more build time is invested. Fix cost at this stage: ~5 min (vs ~30 min
if caught at full run).

### MG-3: After Borders Phase (~30 sec)

Gates: SC-01, SC-02, SC-15

Why here: Structural boundaries established. Container width and soul properties
must hold before element-level work.

### MG-4: After Typography Phase (~30 sec)

Gates: SC-03, SC-11

Why here: Typography arc must exist before element-level richness. Font trinity
and zone hierarchy are prerequisites for compositional work.

Total micro-gate time: ~2 minutes.

---

## Full Gate Run (After Build Complete)

Run ALL gates. ~15 seconds total in a single Playwright session.

Execution groups (gates within a group can run in parallel):

GROUP 0 -- Zone Validation (FIRST, before all others):
  SC-00

  If SC-00 FAILS: skip all per-zone gates (SC-09, SC-10, SC-11, SC-13, SC-13B,
  SC-14 sub-check 3, SC-16, SC-17). Report overall FAIL. Identity gates (GROUP 1) and
  structural gates (GROUP 2 minus SC-12) still run.

  If SC-00 passes via fallback: store the successful selector for all subsequent
  per-zone gates.

GROUP 1 -- Identity (parallel):
  SC-01, SC-02, SC-03, SC-04, SC-05

GROUP 2 -- Structure (parallel):
  SC-06, SC-07, SC-08, SC-12, DG-3

GROUP 3 -- Perception (sequential, needs zone boundaries from GROUP 2):
  SC-09, SC-10, SC-11, SC-14, SC-15

GROUP 4 -- Compositional (sequential, depends on GROUP 3):
  SC-13, SC-13B, SC-16, SC-17

GROUP 5 -- Deliverable (after GROUP 4):
  DG-1, DG-2, DG-4

Dependency chain:
  SC-00 (zone validation) -> SC-12 (zone count) -> SC-09 (bg delta) -> SC-13 (multi-coherence)
  SC-13 -> SC-13B (direction) -> SC-16 (monotonic)
  SC-13 (measured values) -> SC-17 (parametric echo vs TC brief)
  SC-13 (measured values) -> DG-2 (cross-validation)

---

## Zone Selector Validation (Pre-Gate SC-00)

ALL per-zone gates (SC-09, SC-10, SC-11, SC-13, SC-13B, SC-14 sub-check 3, SC-16, SC-17) depend
on `document.querySelectorAll('[class*="zone"], section[data-zone], .section')`. If the
builder uses different class names, ALL per-zone gates silently return meaningless data or
vacuously pass. This is the #1 single point of failure in the gate system.

SC-00 runs FIRST, before any other gate. If SC-00 fails, ALL per-zone gates are SKIPPED
and the entire gate run reports FAIL with reason "zone selectors returned < 3 elements."

### SC-00: Zone Selector Validation

Tier: Pre-gate (runs before all others)
Enforcement: Programmatic (blocking)

PASS: Primary selector returns >= 3 elements
FAIL: Primary selector returns < 3 elements (gates cannot run)
FAIL WITH FALLBACK: Primary returns < 3, but secondary selectors recover >= 3

Primary selector: `[class*="zone"], section[data-zone], .section`
Secondary selectors (tried in order if primary fails):
  1. `section` (bare section elements)
  2. `[data-section]` (data-attribute sections)
  3. All direct children of `main` or `[role="main"]` that are block-level

Programmatic check:
```js
const primary = document.querySelectorAll('[class*="zone"], section[data-zone], .section');
if (primary.length >= 3) {
  return { status: 'PASS', selector: 'primary', count: primary.length };
}

// Fallback: try secondary selectors
const fallbacks = [
  { selector: 'section', label: 'bare-section' },
  { selector: '[data-section]', label: 'data-section' },
];

for (const fb of fallbacks) {
  const els = document.querySelectorAll(fb.selector);
  if (els.length >= 3) {
    return {
      status: 'PASS',
      selector: fb.label,
      count: els.length,
      warning: `Primary selector matched ${primary.length} elements. Using fallback '${fb.selector}' (${els.length} elements). Builder should use standard zone class names.`
    };
  }
}

// Last resort: direct children of main
const main = document.querySelector('main, [role="main"]');
if (main) {
  const children = [...main.children].filter(el => {
    const display = getComputedStyle(el).display;
    return display === 'block' || display === 'flex' || display === 'grid';
  });
  if (children.length >= 3) {
    return {
      status: 'PASS',
      selector: 'main-children',
      count: children.length,
      warning: `Primary selector matched ${primary.length} elements. Using main children fallback (${children.length} elements). Builder should use standard zone class names.`
    };
  }
}

return {
  status: 'FAIL',
  reason: `Zone selectors matched ${primary.length} elements. Per-zone gates require >= 3 zones. ALL per-zone gates SKIPPED.`,
  fix: {
    instruction: 'Add zone class names or section[data-zone] attributes to your content zones.',
    html: '<section class="section zone-1">...</section>',
    reference: 'conventions-brief.md Section 5 (FRACTAL ECHO) -- zone structure'
  }
};
```

If SC-00 passes via fallback, the successful selector is stored and used by ALL subsequent
per-zone gates (replacing the hardcoded primary selector). This prevents selector
fragmentation where SC-00 uses one selector and SC-09 uses another.

Required zone markup patterns (also documented in conventions-brief.md):
  - `<section class="section zone-N">` (preferred)
  - `<section data-zone="N">` (alternative)
  - `<section class="zone-intro">` / `<section class="zone-analysis">` etc. (named zones)
  All gates depend on zone selectors. Non-standard markup = gate failure.

Provenance: B7 (execution report). Every composition-critical gate depends on zone
selectors. If builder uses `<div class="content-area">` instead of zone classes, ALL gates
silently pass or return meaningless data. This is the #1 single point of failure.

---

## Gate Failure Protocol

### During Build (Micro-Gate Failures)

1. Gate runner outputs structured JSON fix recipe (measured values, specific CSS, alternatives)
2. Builder applies fix
3. Gate re-runs (max 2 re-runs per micro-gate)
4. If still failing after 2 re-runs: STOP BUILD, escalate

### After Build (Full Run Failures)

1. ALL gates run. ALL failures collected into _gate-results.json
2. Builder receives structured fix recipes for ALL failures simultaneously
3. Builder applies fixes (Tier A gates first, then Tier B)
4. Full gate re-run
5. Max 3 fix cycles on full run
6. After 3 failed full-run cycles: ESCALATE to user

### Fix Recipe Compositional Context

Gate fix recipes output specific CSS changes (symptom-level). To prevent recipe-to-
checklist degradation during fix cycles, each fix recipe includes a conventions-brief
section reference that orients the builder in the compositional world-model:

| Gate Category | Conventions-Brief Section Reference |
|--------------|-------------------------------------|
| SC-09 (bg delta), SC-14 sub-check 3 (intra-zone bg) | Section 2: PERCEPTION -- "invisible CSS is wasted CSS" |
| SC-10 (stacked gap) | Section 2: PERCEPTION -- stacked gap <= 120px |
| SC-11 (typography zones) | Section 5: FRACTAL ECHO -- scale hierarchy |
| SC-13 (multi-coherence), SC-13B (direction) | Section 4: MULTI-COHERENCE -- ">= 3 channels in same semantic direction" |
| SC-14 sub-checks 1-2 (letter-spacing) | Section 2: PERCEPTION -- letter-spacing floor |
| SC-15 (border presence) | Section 4: MULTI-COHERENCE -- Structural channel |
| SC-01 (container) | Section 1: IDENTITY -- container 940-960px |
| SC-02, SC-03, SC-04, SC-05 (soul) | Section 1: IDENTITY + Section 12: RESTRAINT LIST |
| SC-06, SC-07, SC-08, DG-3 (structure) | Section 5: FRACTAL ECHO -- component vocabulary |
| SC-17 (parametric echo) | Section 4: MULTI-COHERENCE -- boundary CSS table verification |

Fix recipe format extension (add to each gate's fix recipe):
```json
{
  "fix": {
    "instruction": "...",
    "css": "...",
    "alternative": "...",
    "reference": "...",
    "brief_section": "Re-read conventions-brief.md Section N (SECTION_NAME) before applying this fix."
  }
}
```

This ensures the builder re-enters the compositional world-model during fix cycles
rather than operating in pure mechanical compliance mode. The reference is a POINTER
(3 words), not a new document -- zero cognitive load increase.

Provenance: Report 17 (concept-flow-trace) found that 8 of 9 compositional concepts
suffer TOTAL EXTINCTION in the fix cycle return path. Only perception thresholds survive
because they map to CSS values. Adding a brief_section reference is the cheapest way to
route the builder back to compositional context during fixes.

---

## Gate-to-PA Handoff

Gates FILTER; PA JUDGES. The handoff is ONE-WAY.

ALL 22 blocking gates (SC-00 pre-gate + 19 programmatic blocking + 2 deliverable blocking)
must PASS before PA runs. Once PA begins, gates are NOT re-run. PA findings do NOT trigger
gate re-evaluation.

Gate diagnostic output (channel shift counts, direction analysis, monotonic
progression data) is included as PA CONTEXT -- orientation for auditors about
where to look, not conclusions about what they should find.

After a fix cycle, the FULL gate suite re-runs (builder CSS changes may
introduce new gate failures). This is a new handoff sequence, not a gate-PA
dialogue.

---

## TIER A: COMPOSITION-CRITICAL GATES (12)

These determine whether PA is worth running. If any Tier A blocking gate fails,
the page has mechanical compositional problems that PA cannot evaluate past.

---

### SC-01: Container Width

Tier: A (composition-critical)
Enforcement: Programmatic (blocking)
Flagship elevation: None (940-960px is universal)

PASS: 940px <= max-width <= 960px
FAIL: max-width outside 940-960px range

Programmatic check:
```js
const container = document.querySelector('.page-container, main, [role="main"]');
const computed = getComputedStyle(container);
const maxW = parseFloat(computed.maxWidth);
const w = parseFloat(computed.width);
const effectiveWidth = isNaN(maxW) ? w : maxW;
return effectiveWidth >= 940 && effectiveWidth <= 960;
```

Fix recipe format:
  instruction: "Set container max-width to 960px"
  css: ".page-container { max-width: 960px; margin: 0 auto; }"

Provenance: #1 Phase D failure mode (4/5 pages violated). Identity constraint.

---

### SC-09: Background Delta at Zone Boundaries

Tier: A (composition-critical)
Enforcement: Programmatic (blocking)
Flagship elevation: None (>= 15 RGB IS the Flagship fix)

PASS: max-channel RGB delta >= 15 at EVERY adjacent zone boundary
FAIL: Any zone boundary with max-channel delta < 15 RGB
FAIL: zones.length < 3 (zone selectors matched zero or too few elements -- silent pass prevention)

Programmatic check:
```js
// ZONE COUNT ASSERTION: must have >= 3 zones before running per-zone checks
const zones = document.querySelectorAll('[class*="zone"], section[data-zone], .section');
if (zones.length < 3) return { status: 'FAIL', reason: 'zones.length < 3 -- per-zone gates cannot run on empty result set' };

// For each pair of adjacent zone elements
for (let i = 0; i < zones.length - 1; i++) {
  const bg1 = getComputedStyle(zones[i]).backgroundColor;
  const bg2 = getComputedStyle(zones[i + 1]).backgroundColor;
  const [r1, g1, b1] = parseRGB(bg1);
  const [r2, g2, b2] = parseRGB(bg2);
  const maxDelta = Math.max(Math.abs(r1 - r2), Math.abs(g1 - g2), Math.abs(b1 - b2));
  if (maxDelta < 15) return FAIL;
}
```

Fix recipe format:
  instruction: "Change .zone-N background from #XXXXXX to #YYYYYY (delta increases from D1 to D2 RGB)"
  css: ".zone-N { background: #F0EBE3; }"
  alternative: ".zone-N { background: #EDE5D9; } /* delta=24 */"
  reference: "tokens.css background tokens"

Provenance: THE primary Flagship failure. Backgrounds differed by 1-8 RGB (imperceptible).

---

### SC-10: Stacked Gap Between Sections

Tier: A (composition-critical)
Enforcement: Programmatic (blocking)
Flagship elevation: None (<= 120px IS the Flagship fix)

PASS: Total stacked gap <= 120px at EVERY zone boundary
FAIL: Any zone boundary with total gap > 120px
FAIL: zones.length < 3 (zone selectors matched zero or too few elements -- silent pass prevention)

Programmatic check:
```js
// ZONE COUNT ASSERTION: must have >= 3 zones before running per-zone checks
const zones = document.querySelectorAll('[class*="zone"], section[data-zone], .section');
if (zones.length < 3) return { status: 'FAIL', reason: 'zones.length < 3 -- per-zone gates cannot run on empty result set' };

// For each pair of adjacent zone elements
for (let i = 0; i < zones.length - 1; i++) {
  const lastChild = zones[i].lastElementChild;
  const firstChild = zones[i + 1].firstElementChild;
  if (!lastChild || !firstChild) continue;
  const rect1 = lastChild.getBoundingClientRect();
  const rect2 = firstChild.getBoundingClientRect();
  const gap = rect2.top - rect1.bottom;
  if (gap > 120) return FAIL;
}
```

Fix recipe format:
  instruction: "Reduce gap between zone N and zone N+1 from Xpx to <= 120px"
  css: ".zone-N { margin-bottom: 0; padding-bottom: 48px; } .zone-N+1 { margin-top: 0; padding-top: 48px; }"
  reference: "tokens.css --space-max-zone: 96px"

Provenance: Flagship had 210-276px whitespace voids. S-09 stacking loophole:
individual values pass per-property checks but STACKED values create catastrophic voids.

---

### SC-11: Typography Zone Hierarchy

Tier: A (composition-critical)
Enforcement: Programmatic (blocking)
Flagship elevation: YES
  Standard: display-body delta >= 2px, body-detail delta >= 2px
  Flagship: display-body delta >= 10px, body-detail delta >= 2px, 3+ distinct typography zones

PASS (Flagship):
  - Largest heading font-size minus body font-size >= 10px
  - Body font-size minus smallest detail font-size >= 2px
  - 3 or more distinct font-size clusters detected (values within 1px = same cluster)

FAIL: display-body delta < 10px, OR fewer than 3 distinct clusters, OR all text same size/weight
FAIL: zones.length < 3 (zone selectors matched zero or too few elements -- silent pass prevention)

Programmatic check:
```js
// ZONE COUNT ASSERTION: must have >= 3 zones before running per-zone checks
const zones = document.querySelectorAll('[class*="zone"], section[data-zone], .section');
if (zones.length < 3) return { status: 'FAIL', reason: 'zones.length < 3 -- per-zone gates cannot run on empty result set' };

await document.fonts.ready;
const headings = document.querySelectorAll('h1, h2, h3');
const body = document.querySelectorAll('p, li, td');
const detail = document.querySelectorAll('small, .caption, .footnote, figcaption');

const headingSizes = [...headings].map(el => parseFloat(getComputedStyle(el).fontSize));
const bodySizes = [...body].map(el => parseFloat(getComputedStyle(el).fontSize));
const detailSizes = [...detail].map(el => parseFloat(getComputedStyle(el).fontSize));

const maxHeading = Math.max(...headingSizes);
const avgBody = median(bodySizes);
const minDetail = detail.length > 0 ? Math.min(...detailSizes) : avgBody;

const displayBodyDelta = maxHeading - avgBody; // must be >= 10
const bodyDetailDelta = avgBody - minDetail;     // must be >= 2

// Count distinct clusters (within 1px = same)
const allSizes = [...headingSizes, ...bodySizes, ...detailSizes].sort((a, b) => a - b);
let clusters = 1;
for (let i = 1; i < allSizes.length; i++) {
  if (allSizes[i] - allSizes[i - 1] > 1) clusters++;
}
// clusters must be >= 3
```

Provenance: Flagship had ALL text at 16px/400 -- zero hierarchy.

---

### SC-12: Zone Count

Tier: A (composition-critical)
Enforcement: Programmatic (blocking)
Flagship elevation: YES
  Standard: 2-5 zones
  Flagship: 3-5 zones

PASS (Flagship): 3 <= zone count <= 5
FAIL: < 3 zones OR > 5 zones

Programmatic check:
```js
const zones = document.querySelectorAll('[class*="zone"], section[data-zone], .section');
// Also count by distinct background colors as fallback
const bgColors = new Set();
document.querySelectorAll('section, [class*="zone"]').forEach(el => {
  bgColors.add(getComputedStyle(el).backgroundColor);
});
const zoneCount = Math.max(zones.length, bgColors.size);
return zoneCount >= 3 && zoneCount <= 5;
```

Provenance: Fewer than 3 zones = insufficient space for multi-coherence.
5 scales is the mathematical ceiling (Alexander/Salingaros).

---

### SC-13: Multi-Coherence (Channel Shift Count)

Tier: A (composition-critical)
Enforcement: Programmatic (blocking)
Flagship elevation: YES
  Standard: >= 3 of 6 channels shift at every zone boundary
  Flagship: >= 3 at every boundary AND average >= 4 across ALL boundaries

6 channels measured at each zone boundary:
  1. Chromatic:    background-color max-channel RGB delta >= 15
  2. Typographic:  font-size delta >= 2px OR font-weight delta >= 200
  3. Spatial:      padding delta >= 24px
  4. Structural:   border configuration change (width, style, or color differs)
  5. Behavioral:   interactivity presence change (hover states or transitions present/absent)
  6. Material:     background-image or texture change

PASS (Flagship):
  - Every boundary has >= 3 channels shifting
  - Average across all boundaries >= 4.0

FAIL: Any boundary with < 3 channels shifting, OR Flagship average < 4.0
FAIL: zones.length < 3 (zone selectors matched zero or too few elements -- silent pass prevention)

Programmatic check:
```js
// ZONE COUNT ASSERTION: must have >= 3 zones before running per-zone checks
const zones = [...document.querySelectorAll('[class*="zone"], section[data-zone], .section')];
if (zones.length < 3) return { status: 'FAIL', reason: 'zones.length < 3 -- per-zone gates cannot run on empty result set' };

const results = [];
for (let i = 0; i < zones.length - 1; i++) {
  const last = zones[i].lastElementChild || zones[i];
  const first = zones[i + 1].firstElementChild || zones[i + 1];
  const s1 = getComputedStyle(last);
  const s2 = getComputedStyle(first);
  let shifts = 0;

  // Ch1: Chromatic
  const [r1,g1,b1] = parseRGB(s1.backgroundColor);
  const [r2,g2,b2] = parseRGB(s2.backgroundColor);
  if (Math.max(Math.abs(r1-r2), Math.abs(g1-g2), Math.abs(b1-b2)) >= 15) shifts++;

  // Ch2: Typographic
  const fs1 = parseFloat(s1.fontSize), fs2 = parseFloat(s2.fontSize);
  const fw1 = parseInt(s1.fontWeight), fw2 = parseInt(s2.fontWeight);
  if (Math.abs(fs1 - fs2) >= 2 || Math.abs(fw1 - fw2) >= 200) shifts++;

  // Ch3: Spatial
  const pad1 = parseFloat(s1.paddingTop) + parseFloat(s1.paddingBottom);
  const pad2 = parseFloat(s2.paddingTop) + parseFloat(s2.paddingBottom);
  if (Math.abs(pad1 - pad2) >= 24) shifts++;

  // Ch4: Structural
  const bw1 = s1.borderLeftWidth, bw2 = s2.borderLeftWidth;
  const bs1 = s1.borderLeftStyle, bs2 = s2.borderLeftStyle;
  const bc1 = s1.borderLeftColor, bc2 = s2.borderLeftColor;
  if (bw1 !== bw2 || bs1 !== bs2 || bc1 !== bc2) shifts++;

  // Ch5: Behavioral (check for transition or hover-capable classes)
  const hasTransition1 = s1.transition !== 'all 0s ease 0s' && s1.transition !== 'none';
  const hasTransition2 = s2.transition !== 'all 0s ease 0s' && s2.transition !== 'none';
  if (hasTransition1 !== hasTransition2) shifts++;

  // Ch6: Material
  const img1 = s1.backgroundImage, img2 = s2.backgroundImage;
  if (img1 !== img2) shifts++;

  results.push({ boundary: `${i+1}-${i+2}`, shifts });
}

const allPass = results.every(r => r.shifts >= 3);
const avg = results.reduce((sum, r) => sum + r.shifts, 0) / results.length;
return allPass && avg >= 4.0;
```

Known limitation: Counts channels but CANNOT judge if shifts serve the SAME
semantic direction. 3 contradicting shifts pass this gate. PA-61 catches direction.

CHANNEL NOTE -- Channels 5 (Behavioral) and 6 (Material):
  Channels 5-6 are enhancement channels with minimal practical guidance:
  - Behavioral (Ch5): 1 line definition ("interactivity presence change"). Zero CSS
    examples. Zero thresholds beyond binary presence/absence. Hover state vocabulary
    absent from conventions brief.
  - Material (Ch6): "surface treatment" undefined. backgroundImage rarely differs
    when soul forbids gradients. Component density partially addressed by SC-08.

  Impact on multi-coherence denominator: SC-13 counts all 6 channels, but a page
  achieving 3/4 PRIMARY channels (Chromatic, Typographic, Spatial, Structural) is
  compositionally stronger than 3/6 with 2 enhancement channels and 1 primary.

  Status: DEFERRED. Options for future calibration:
  (a) Provide CSS guidance for channels 5-6 in conventions-brief.md
  (b) Reduce multi-coherence denominator from 6 to 4 primary channels
  (c) Keep denominator at 6 but add ADVISORY note when >= 3 shifts come from
      enhancement-only channels
  Current recommendation: (c) -- most honest, lowest risk.

Provenance: Flagship had 0-2 channel shifts at boundaries. CD-006 had 4+ channels
shifting at every boundary.

---

### SC-14: Sub-Perceptual Prevention

Tier: A (composition-critical)
Enforcement: Programmatic (blocking)
Flagship elevation: None (this gate was DESIGNED for Flagship)

Three sub-checks:
  1. No letter-spacing value between 0 and 0.025em (exclusive)
  2. No letter-spacing micro-clustering: adjacent sorted values < 0.5px apart
  3. No intra-zone background deltas between 1-14 RGB

PASS: All three sub-checks pass
FAIL: ANY letter-spacing in (0, 0.025em) range, OR micro-clustering, OR intra-zone bg 1-14 RGB

Programmatic check:
```js
// Sub-check 1: letter-spacing floor
const allElements = document.querySelectorAll('*');
for (const el of allElements) {
  const ls = getComputedStyle(el).letterSpacing;
  if (ls === 'normal' || ls === '0px') continue;
  const pxVal = parseFloat(ls);
  const fontSize = parseFloat(getComputedStyle(el).fontSize);
  const emVal = pxVal / fontSize;
  if (emVal > 0 && emVal < 0.025) return FAIL; // sub-perceptual (floor: 0.025em)
}

// Sub-check 2: letter-spacing micro-clustering
const lsValues = [...allElements]
  .map(el => parseFloat(getComputedStyle(el).letterSpacing))
  .filter(v => !isNaN(v) && v !== 0)
  .sort((a, b) => a - b);
for (let i = 1; i < lsValues.length; i++) {
  if (lsValues[i] - lsValues[i - 1] < 0.5 && lsValues[i] - lsValues[i - 1] > 0) return FAIL;
}

// Sub-check 3: intra-zone bg deltas
const zones = document.querySelectorAll('[class*="zone"], section[data-zone], .section');
for (const zone of zones) {
  const children = zone.querySelectorAll('*');
  const bgs = [...children].map(el => parseRGB(getComputedStyle(el).backgroundColor));
  for (let i = 0; i < bgs.length; i++) {
    for (let j = i + 1; j < bgs.length; j++) {
      const delta = Math.max(
        Math.abs(bgs[i][0] - bgs[j][0]),
        Math.abs(bgs[i][1] - bgs[j][1]),
        Math.abs(bgs[i][2] - bgs[j][2])
      );
      if (delta >= 1 && delta <= 14) return FAIL;
    }
  }
}
```

Provenance: Flagship spent 22% of CSS budget (227 lines) on letter-spacing 0.001-0.01em --
ALL imperceptible. Prevents CSS budget misallocation toward invisible micro-typography.

---

### SC-15: Border/Structural Presence

Tier: A (composition-critical)
Enforcement: Programmatic (blocking)
Flagship elevation: YES
  Standard: >= 1 border-left >= 3px OR >= 2 <hr> dividers
  Flagship: >= 3 DISTINCT border configurations (different width/style/color combinations)

PASS (Flagship): 3 or more distinct border configuration strings found
FAIL: Fewer than 3 distinct border configurations

Programmatic check:
```js
const allElements = document.querySelectorAll('*');
const borderConfigs = new Set();
for (const el of allElements) {
  const s = getComputedStyle(el);
  const lw = parseFloat(s.borderLeftWidth);
  if (lw > 0) {
    borderConfigs.add(`${s.borderLeftWidth}-${s.borderLeftStyle}-${s.borderLeftColor}`);
  }
  const tw = parseFloat(s.borderTopWidth);
  if (tw > 0) {
    borderConfigs.add(`top:${s.borderTopWidth}-${s.borderTopStyle}-${s.borderTopColor}`);
  }
  const bw = parseFloat(s.borderBottomWidth);
  if (bw > 0) {
    borderConfigs.add(`bottom:${s.borderBottomWidth}-${s.borderBottomStyle}-${s.borderBottomColor}`);
  }
}
// Also count <hr> elements
const hrCount = document.querySelectorAll('hr').length;
return borderConfigs.size >= 3;
```

Provenance: Flagship had ZERO borders, ZERO dividers. CD-006 had 23 border contexts.
3 distinct configs is a conservative Flagship minimum.

---

### SC-13B: Channel Shift Direction Coherence (BLOCKING)

Tier: A (composition-critical)
Enforcement: Programmatic (blocking)

Check: Whether channels at a boundary shift in the same semantic direction.

Direction classification:
  darker bg / heavier font / tighter spacing = INTENSIFYING (+)
  lighter bg / lighter font / looser spacing = RELAXING (-)

PASS: >= 50% of boundaries have >= 3 channels in SAME direction
FAIL: < 50% of boundaries have >= 3 channels in SAME direction

Programmatic check: After SC-13 passes, classify each channel's shift as +/- per
boundary. Count agreements. Report percentages. ~30 lines additional JS.

Rationale for BLOCKING promotion: Chain 1 (R3-023 fractal self-similarity) has
only 1.5 effective redundancy. SC-13 counts channel shifts but CANNOT judge if
they serve the same semantic direction. Contradictory shifts (bg darkens but
spacing loosens = incoherent) pass SC-13 but produce compositionally flat output.
Promoting SC-13B to BLOCKING closes the highest-risk qualitative gap that
previously depended entirely on PA-61. Combined with SC-13 (channel count) and
SC-13B (direction coherence), multi-coherence now has 2 programmatic checks
instead of 1.

Confidence: ~50% (direction heuristic is imprecise). If SC-13B produces false
positives in the first 2 builds, demote back to ADVISORY and recalibrate.

Provenance: Report 06 (causal-chain) Chain 1: fractal self-similarity at 1.5
redundancy -- recommended BLOCKING promotion. Report 08 (critical-path): SC-13B
advisory status identified as single-redundancy risk.

---

### SC-16: Monotonic Property Progression (ADVISORY)

Tier: A (composition-critical)
Enforcement: ADVISORY (does not block -- logs diagnostic)

Check: Whether at least 1 CSS property progresses monotonically across 3+ consecutive zones.

Properties measured: background lightness, font-size, padding, border-weight

ADVISORY threshold: >= 1 property forms monotonic sequence across 3+ zones

Programmatic check:
```js
// For each tracked property across zones (sorted by DOM order):
// Check if values are monotonically increasing or decreasing
const zones = [...document.querySelectorAll('[class*="zone"], section[data-zone], .section')];
const properties = ['backgroundColor', 'fontSize', 'paddingTop'];
for (const prop of properties) {
  const values = zones.map(z => {
    const s = getComputedStyle(z);
    if (prop === 'backgroundColor') return rgbLightness(parseRGB(s[prop]));
    return parseFloat(s[prop]);
  });
  if (isMonotonic(values) && values.length >= 3) return ADVISORY_PASS;
}
return ADVISORY_WARNING; // "No monotonic progression detected"
```

Confidence: ~80%. Catches progressions, but not all compositions are monotonic --
tension-release patterns would not be caught and that is fine.

---

### SC-17: Parametric Echo (TC Brief Boundary Validation)

Tier: A (composition-critical)
Enforcement: Programmatic (blocking)

Check: Whether CSS channel shifts at zone boundaries match the TC brief's
boundary-keyed CSS table. If the TC brief specifies "Z1->Z2: bg +20 RGB" and
the actual computed delta is < 15 RGB, SC-17 fails. This gate verifies that the
builder EXECUTED the TC agent's compositional plan, not just that minimums were met.

Depends on: SC-13 (measured channel shift data), the BOUNDARY CSS TABLE in
Section 6 of the TC brief.

PASS: Every boundary's measured channel deltas match or exceed the TC brief's
planned deltas (with tolerance: background +/- 5 RGB, font-size +/- 1px,
padding +/- 8px, border-width +/- 1px)
FAIL: Any boundary where a planned channel delta exceeds the tolerance range
FAIL: TC brief has no boundary CSS table (builder cannot be validated against plan)
FAIL: zones.length < 3 (zone selectors matched zero or too few elements)

Programmatic check:
```js
// SC-17: Parametric Echo -- TC Brief Boundary Validation
// Requires: TC brief boundary CSS table parsed into structured data
// The orchestrator parses the TC brief's Section 6 BOUNDARY CSS TABLE
// and passes it as `tcBoundaries` to this gate.

const zones = [...document.querySelectorAll('[class*="zone"], section[data-zone], .section')];
if (zones.length < 3) return {
  status: 'FAIL',
  reason: 'zones.length < 3 -- per-zone gates cannot run on empty result set'
};

if (!tcBoundaries || tcBoundaries.length === 0) return {
  status: 'FAIL',
  reason: 'TC brief has no boundary CSS table. Cannot validate parametric echo.',
  fix: {
    instruction: 'TC agent must produce a BOUNDARY CSS TABLE in Section 6 of the TC brief.',
    reference: 'tension-composition SKILL.md Section 6 output format'
  }
};

const tolerances = {
  chromatic: 5,   // RGB points
  fontSize: 1,    // px
  padding: 8,     // px
  borderWidth: 1  // px
};

const failures = [];

for (let i = 0; i < Math.min(zones.length - 1, tcBoundaries.length); i++) {
  const planned = tcBoundaries[i];
  const zoneA = zones[i];
  const zoneB = zones[i + 1];
  const sA = getComputedStyle(zoneA);
  const sB = getComputedStyle(zoneB);

  // Check chromatic delta
  if (planned.chromatic) {
    const [rA, gA, bA] = parseRGB(sA.backgroundColor);
    const [rB, gB, bB] = parseRGB(sB.backgroundColor);
    const actualDelta = Math.max(Math.abs(rA - rB), Math.abs(gA - gB), Math.abs(bA - bB));
    const plannedDelta = planned.chromatic.delta;
    if (actualDelta < plannedDelta - tolerances.chromatic) {
      failures.push({
        boundary: `Z${i+1}->Z${i+2}`,
        channel: 'chromatic',
        planned: plannedDelta,
        actual: actualDelta,
        tolerance: tolerances.chromatic
      });
    }
  }

  // Check typographic delta (font-size)
  if (planned.typographic) {
    const fsA = parseFloat(sA.fontSize);
    const fsB = parseFloat(sB.fontSize);
    const actualDelta = Math.abs(fsA - fsB);
    const plannedDelta = planned.typographic.sizeDelta;
    if (plannedDelta && actualDelta < plannedDelta - tolerances.fontSize) {
      failures.push({
        boundary: `Z${i+1}->Z${i+2}`,
        channel: 'typographic',
        planned: plannedDelta,
        actual: actualDelta,
        tolerance: tolerances.fontSize
      });
    }
  }

  // Check spatial delta (padding)
  if (planned.spatial) {
    const padA = parseFloat(sA.paddingTop) + parseFloat(sA.paddingBottom);
    const padB = parseFloat(sB.paddingTop) + parseFloat(sB.paddingBottom);
    const actualDelta = Math.abs(padA - padB);
    const plannedDelta = planned.spatial.delta;
    if (plannedDelta && actualDelta < plannedDelta - tolerances.padding) {
      failures.push({
        boundary: `Z${i+1}->Z${i+2}`,
        channel: 'spatial',
        planned: plannedDelta,
        actual: actualDelta,
        tolerance: tolerances.padding
      });
    }
  }

  // Check structural delta (border-width)
  if (planned.structural) {
    const bwA = parseFloat(sA.borderLeftWidth);
    const bwB = parseFloat(sB.borderLeftWidth);
    const actualDelta = Math.abs(bwA - bwB);
    const plannedDelta = planned.structural.delta;
    if (plannedDelta && actualDelta < plannedDelta - tolerances.borderWidth) {
      failures.push({
        boundary: `Z${i+1}->Z${i+2}`,
        channel: 'structural',
        planned: plannedDelta,
        actual: actualDelta,
        tolerance: tolerances.borderWidth
      });
    }
  }
}

if (failures.length > 0) {
  return {
    status: 'FAIL',
    failures: failures,
    fix: {
      instruction: 'Adjust CSS at failing boundaries to match TC brief plan.',
      brief_section: 'Re-read the BOUNDARY CSS TABLE in your TC brief before applying fixes.',
      reference: 'conventions-brief.md Section 4 (MULTI-COHERENCE)'
    }
  };
}

return {
  status: 'PASS',
  measured: { boundariesChecked: Math.min(zones.length - 1, tcBoundaries.length) }
};
```

Tolerance thresholds (5 RGB / 1px / 8px / 1px) are engineering defaults calibrated
from DG-2's cross-validation tolerances. Treat the first experiment as calibration
data -- if SC-17 produces false positives on well-composed pages, widen tolerances.

Fix recipe format:
  instruction: "At boundary Z[N]->Z[N+1], [channel] delta is [actual] but TC brief planned [planned]. Adjust CSS to match plan."
  css: "[specific CSS adjustment based on the TC brief's planned values]"
  reference: "TC brief Section 6 BOUNDARY CSS TABLE"
  brief_section: "Re-read conventions-brief.md Section 4 (MULTI-COHERENCE) before applying this fix."

Provenance: Report 08 (critical-path) improvement #4: parametric echo gate.
Report 06 (causal-chain) Finding 1: the quantitative-qualitative cliff -- SC-17
bridges this by validating planned QUALITY against measured QUANTITY. The TC brief
encodes compositional intent; SC-17 verifies the builder honored that intent.

---

### DG-1: Fractal Echo Table (Tier 2 Deliverable Gate)

Tier: A (composition-critical)
Enforcement: Deliverable validation (blocking)

Check: Builder's `fractal_table.yaml` deliverable has 5-scale coverage with CSS evidence.

PASS:
  - 5 rows present (Navigation, Page, Section, Component, Character)
  - CSS evidence field non-empty at each scale
  - Pattern direction documented at each scale
  - Pattern direction CONSISTENT across all 5 rows (or variation explicitly documented)

FAIL: < 5 rows, OR any empty CSS evidence field, OR missing pattern direction,
OR inconsistent direction without documentation

Programmatic check: Parse YAML. Validate structure programmatically.

Provenance: 5 scales is the mathematical ceiling (Alexander/Salingaros formula).
L2 scale coverage was completely absent from all prior gates.

---

### DG-2: Cascade Value Table (Tier 2 Deliverable Gate)

Tier: A (composition-critical)
Enforcement: Deliverable validation (blocking)

Check: Builder's `cascade_table.yaml` has computed CSS at every zone boundary,
cross-validated against SC-13's measured values.

PASS:
  - Computed CSS present at every boundary
  - Cross-validation: builder-claimed values match SC-13 measured values within tolerance
    - Background: discrepancy < 5 RGB (engineering default, calibrate after first experiment)
    - Font-size: discrepancy < 1px (engineering default)
    - Letter-spacing: discrepancy < 0.01em (engineering default)

FAIL: Missing boundary data, OR discrepancy exceeds tolerance thresholds

NOTE: Cross-validation tolerance thresholds (5 RGB / 1px / 0.01em) are engineering
defaults, not empirically sourced. Treat first experiment as calibration data.

Programmatic check: Parse YAML. Compare claimed vs SC-13 measured values.

Provenance: "YAML-as-Prompt is theater. YAML-as-Schema is real." (Report 28)

---

## TIER B: IDENTITY ENFORCEMENT GATES (7)

Must pass with zero exceptions. These enforce the design system's SOUL.
They tell us nothing about compositional quality.

---

### SC-02: Soul Properties (Radius + Shadow)

Tier: B (identity)
Enforcement: Programmatic (blocking)
Flagship elevation: None (identity is universal)

PASS: border-radius: 0px AND box-shadow: none AND filter: none (no drop-shadow) on EVERY element
FAIL: ANY element with border-radius > 0 OR box-shadow != none OR filter contains drop-shadow

Programmatic check:
```js
const allElements = document.querySelectorAll('*');
for (const el of allElements) {
  const s = getComputedStyle(el);
  if (s.borderRadius !== '0px') return FAIL;
  if (s.boxShadow !== 'none') return FAIL;
  if (s.filter.includes('drop-shadow')) return FAIL;
}
```

Soul constraints: Prohibitions #1 (border-radius: 0 ALWAYS), #2 (box-shadow: none ALWAYS),
#3 (no drop-shadow filter). ABSOLUTE -- zero exceptions.

---

### SC-03: Font Trinity

Tier: B (identity)
Enforcement: Programmatic (blocking)
Flagship elevation: None (identity is universal)

PASS: Every computed fontFamily resolves to Instrument Serif, Inter, or JetBrains Mono
FAIL: Any element using a font family not in the trinity

CRITICAL: Must wait for `document.fonts.ready` BEFORE checking.

Programmatic check:
```js
await document.fonts.ready;
const allowed = ['Instrument Serif', 'Inter', 'JetBrains Mono'];
const allElements = document.querySelectorAll('*');
for (const el of allElements) {
  const ff = getComputedStyle(el).fontFamily;
  const primary = ff.split(',')[0].trim().replace(/['"]/g, '');
  if (!allowed.includes(primary)) {
    // Check if it's a known fallback (Georgia, system-ui, SF Mono)
    // that resolves to the trinity after font loading
    // Only FAIL if the primary font is not in the trinity
    return FAIL;
  }
}
```

Soul constraint: Prohibition #7 (NEVER use Instrument Serif for body text -- display only).
The gate checks font USAGE (which families appear); PA checks font ROLE (serif for display only).

---

### SC-04: Warm Palette

Tier: B (identity)
Enforcement: Programmatic (blocking)
Flagship elevation: None (identity is universal)

PASS: For every element with a non-transparent background: R >= G >= B
FAIL: Any background where R < G OR G < B (cool-toned)

Exception: Elements within `.callout-info`, `.callout-tip`, `[data-accent]`, or
`[data-inverted]` containers are EXCLUDED from this check. These semantic accent
contexts may use accent tints (e.g., --bg-info: #F5F8FA) that are intentionally
cool-tinted for information hierarchy.

Programmatic check:
```js
const allElements = document.querySelectorAll('*');
const exemptSelectors = '.callout-info, .callout-tip, [data-accent], [data-inverted]';
for (const el of allElements) {
  if (el.closest(exemptSelectors)) continue; // exempt semantic accents
  const bg = getComputedStyle(el).backgroundColor;
  if (bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') continue;
  const [r, g, b] = parseRGB(bg);
  if (r < g || g < b) return FAIL;
}
```

Soul constraint: Prohibition #16 (NEVER use cool-toned grays).

---

### SC-05: No Pure Extremes

Tier: B (identity)
Enforcement: Programmatic (blocking)
Flagship elevation: None (identity is universal)

PASS: Zero elements with computed color or background-color of exactly #000000 or #FFFFFF
FAIL: Any element with pure black or pure white

Exception: Elements within `[data-inverted]` or `.dark-bg` containers may use
#FFFFFF for text (--text-inverse requires white on dark backgrounds). These
elements are excluded from the background check but NOT from the text-color check
of pure black.

Programmatic check:
```js
const allElements = document.querySelectorAll('*');
for (const el of allElements) {
  const s = getComputedStyle(el);
  const bg = s.backgroundColor;
  const color = s.color;

  // Check background (with inverted-context exception)
  if (!el.closest('[data-inverted], .dark-bg')) {
    if (bg === 'rgb(0, 0, 0)' || bg === 'rgb(255, 255, 255)') return FAIL;
  }

  // Check text color (no exception for pure black)
  if (color === 'rgb(0, 0, 0)') return FAIL;

  // Check text color pure white (only fail if NOT in inverted context)
  if (color === 'rgb(255, 255, 255)' && !el.closest('[data-inverted], .dark-bg')) return FAIL;
}
```

Soul constraint: Prohibition #6 (NEVER use pure black #000 or pure white #FFF).

---

### SC-06: ARIA Landmarks

Tier: B (identity)
Enforcement: Programmatic (blocking)
Flagship elevation: YES
  Standard: >= 3 landmarks
  Flagship: >= 5 landmarks

PASS (Flagship): 5 or more ARIA landmark elements found
FAIL: < 5 landmarks

Programmatic check:
```js
const landmarks = document.querySelectorAll(
  'header, nav, main, aside, footer, ' +
  '[role="banner"], [role="navigation"], [role="main"], ' +
  '[role="complementary"], [role="contentinfo"]'
);
return landmarks.length >= 5;
```

---

### SC-07: Skip Link

Tier: B (identity)
Enforcement: Programmatic (blocking)
Flagship elevation: None (accessibility is universal)

PASS: At least one `<a>` with href starting with `#` that contains text matching /skip/i
AND appears within first 5 DOM children of body
FAIL: No skip link found

Programmatic check:
```js
const bodyChildren = [...document.body.children].slice(0, 5);
for (const child of bodyChildren) {
  const links = child.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    if (/skip/i.test(link.textContent)) return PASS;
  }
  // Also check if child itself is the skip link
  if (child.tagName === 'A' && child.href && /skip/i.test(child.textContent)) return PASS;
}
return FAIL;
```

---

### SC-08: Component Library Adoption

Tier: B (identity)
Enforcement: Programmatic (blocking)
Flagship elevation: YES
  Standard: >= 3 component class families
  Flagship: >= 8 component types

PASS (Flagship): 8 or more distinct component type families found
FAIL: < 8 distinct component types

Programmatic check:
```js
const knownPrefixes = [
  'callout', 'grid', 'card', 'table', 'code-block', 'bento',
  'quote', 'metric', 'timeline', 'accordion', 'tab', 'nav',
  'footer', 'header', 'figure', 'badge', 'tag', 'divider',
  'list', 'media', 'hero', 'breadcrumb', 'pagination', 'modal'
];
const allClasses = new Set();
document.querySelectorAll('*').forEach(el => {
  el.classList.forEach(cls => {
    const prefix = knownPrefixes.find(p => cls.startsWith(p));
    if (prefix) allClasses.add(prefix);
  });
});
// Also count semantic HTML element types as component families
const semanticElements = new Set();
document.querySelectorAll('table, figure, blockquote, details, nav, aside, dl')
  .forEach(el => semanticElements.add(el.tagName.toLowerCase()));
const totalTypes = allClasses.size + semanticElements.size;
return totalTypes >= 8;
```

Provenance: CD-006 had 11 component types. Flagship had 3. 8 is between failure (3)
and success (11).

---

## TIER C: BEHAVIORAL GATES (2)

Honor system with audit trail. Cannot be promoted to Tier 1/2 because they
require semantic judgment.

---

### BG-1: Metaphor Independence

Tier: C (behavioral)
Enforcement: Agent attestation (non-blocking -- verified via build log)

Check: Did the builder derive the metaphor BEFORE consulting the component library?

Verification: Build log must show:
  1. Content analysis (reading the content)
  2. Tension derivation (identifying the central tension)
  3. Metaphor collapse (naming the metaphor)
  4. THEN library consultation (if any)

FAIL: Build log shows library consultation BEFORE metaphor commitment.

Why unpromovable: "Did the agent derive independently?" is fundamentally subjective.
No programmatic check can determine whether prose in a build log represents genuine
derivation or post-hoc rationalization.

---

### BG-2: Metaphor Structural

Tier: C (behavioral)
Enforcement: Fresh-eyes Opus check (before build begins)

Check: Is the metaphor STRUCTURAL (suggests specific CSS properties) or ANNOUNCED
(label-only, decoration not structure)?

Verification: Fresh-eyes Opus agent reads the build plan (without reading the build log).
Binary judgment: STRUCTURAL or ANNOUNCED.

STRUCTURAL example: "geological strata" suggests layered backgrounds darkening with depth,
heavy borders at major boundaries, compressed spacing in dense strata.

ANNOUNCED example: "journey of discovery" -- pretty words, no CSS implications.

FAIL: Fresh-eyes agent rates metaphor as ANNOUNCED.

Provenance: Ceiling experiment: 40% of metaphor was only visible with labels = ANNOUNCED.

---

## ADDITIONAL STRUCTURAL GATES

---

### DG-3: Landmark Completeness

Tier: B (identity)
Enforcement: Programmatic (blocking)
Flagship elevation: None

PASS: At least 1 `<header>` (or [role="banner"]), 1 `<main>` (or [role="main"]),
and 1 `<footer>` (or [role="contentinfo"]) present
FAIL: Any of the 3 missing

Programmatic check:
```js
const hasHeader = !!document.querySelector('header, [role="banner"]');
const hasMain = !!document.querySelector('main, [role="main"]');
const hasFooter = !!document.querySelector('footer, [role="contentinfo"]');
return hasHeader && hasMain && hasFooter;
```

---

### DG-4: Handoff Validation (Pre-Build Gate)

Tier: A (composition-critical)
Enforcement: Programmatic (blocking)
Timing: Runs BEFORE build begins (validates the builder's build log plan sections)

Check: Builder's `_build-log.md` plan sections (conviction statement, transition table,
fractal echo table) satisfy 5 sub-checks:
  1. zone_count: 3-5 (Flagship requirement)
  2. bg_deltas: ALL planned values >= 15 RGB
  3. mechanisms: >= 14 total AND >= 1 in each of 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Navigation/Structure)
  4. transitions: >= 3 distinct types
  5. grid_layouts: >= 2 distinct patterns

PASS: All 5 sub-checks pass
FAIL: Any sub-check fails

Programmatic check: Parse the structured plan sections in `_build-log.md`.
Validate each field programmatically.

This is the HIGHEST-LEVERAGE single gate: machine-parses structured plan data
instead of text-matching prose. In Fat Core architecture (single agent plans +
builds), DG-4 validates the agent's self-generated plan before build proceeds.

---

## FLAGSHIP THRESHOLD ELEVATION SUMMARY

6 gates have elevated thresholds for Flagship tier:

| Gate | Standard | Flagship | Rationale |
|------|----------|----------|-----------|
| SC-06 | >= 3 landmarks | >= 5 landmarks | Flagship pages are longer, need more structure |
| SC-08 | >= 3 component types | >= 8 component types | Flagship requires component vocabulary |
| SC-11 | >= 2px delta | >= 10px display-body + 3+ zones | Flagship typography arc needs visible differentiation |
| SC-12 | 2-5 zones | 3-5 zones | 2 zones insufficient for multi-coherence |
| SC-13 | >= 3 channels | >= 3 every boundary, avg >= 4 | Flagship requires richer multi-coherence |
| SC-15 | >= 1 border | >= 3 distinct configs | Flagship structural vocabulary needs variety |

CALIBRATION NOTE: These Flagship thresholds are THEORETICAL -- derived from failure
analysis, not from observed Flagship output. The first successful Flagship experiment
should be treated as calibration data. Thresholds may need adjustment.

---

## COMPLETE GATE SUMMARY TABLE

| # | Gate | Name | Tier | Triage | Flagship Threshold | Blocks? |
|---|------|------|------|--------|-------------------|---------|
| 0 | SC-00 | Zone Selector Validation | Pre | -- | >= 3 zones via primary or fallback selector | YES (blocks per-zone gates) |
| 1 | SC-01 | Container Width | T1 | A | 940-960px | YES |
| 2 | SC-02 | Soul Properties | T1 | B | radius:0, shadow:none, no drop-shadow | YES |
| 3 | SC-03 | Font Trinity | T1 | B | 3 allowed fonts only | YES |
| 4 | SC-04 | Warm Palette | T1 | B | R >= G >= B (with accent exceptions) | YES |
| 5 | SC-05 | No Pure Extremes | T1 | B | No #000 or #FFF (with inverse exceptions) | YES |
| 6 | SC-06 | ARIA Landmarks | T1 | B | >= 5 | YES |
| 7 | SC-07 | Skip Link | T1 | B | Present | YES |
| 8 | SC-08 | Component Library | T1 | B | >= 8 types | YES |
| 9 | SC-09 | Background Delta | T1 | A | >= 15 RGB at every boundary | YES |
| 10 | SC-10 | Stacked Gap | T1 | A | <= 120px total | YES |
| 11 | SC-11 | Typography Zones | T1 | A | >= 10px display-body, 3+ zones | YES |
| 12 | SC-12 | Zone Count | T1 | A | 3-5 | YES |
| 13 | SC-13 | Multi-Coherence | T1 | A | >= 3/boundary, avg >= 4 | YES |
| 14 | SC-14 | Sub-Perceptual | T1 | A | No ls < 0.025em, no bg 1-14 RGB | YES |
| 15 | SC-15 | Border Presence | T1 | A | >= 3 distinct configs | YES |
| 16 | SC-13B | Direction Coherence | T1 | A | >= 50% boundaries coherent | YES |
| 17 | SC-16 | Monotonic Progress | T1 | A | >= 1 monotonic property | ADVISORY |
| 18 | SC-17 | Parametric Echo | T1 | A | Channel deltas match TC brief plan | YES |
| 19 | DG-1 | Fractal Echo Table | T2 | A | 5 rows, evidence, direction | YES |
| 20 | DG-2 | Cascade Value Table | T2 | A | All boundaries, cross-val | YES |
| 21 | DG-3 | Landmark Complete | T1 | B | header + main + footer | YES |
| 22 | DG-4 | Handoff Validation | T1 | A | 5 sub-checks on build log | YES |

Totals: 1 pre-gate + 21 blocking + 1 advisory + 2 behavioral = 25 gates (23 in table above + 2 behavioral below)
Tier Pre (validation): 1 | Tier 1 (programmatic): 19 | Tier 2 (deliverable): 2 | Tier 3 (behavioral): 2
Flagship elevations: 6 gates

---

## parseRGB HELPER

All gates that check colors need this helper:

```js
function parseRGB(colorStr) {
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return [0, 0, 0];
  return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
}
```
