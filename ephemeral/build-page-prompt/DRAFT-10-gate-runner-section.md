# DRAFT -- Section 3: gate-runner.md

**Author:** gate-runner-drafter (Opus 4.6)
**Date:** 2026-02-19
**Task:** #10 -- Draft the gate-runner section of the master execution prompt
**Sources:**
- `02-gate-research.md` (819 lines -- complete 21-gate registry)
- `42-gate-crossref.md` (341 lines -- threshold verification, 4 corrections)
- `13-cross-validation.md` (347 lines -- 8 mismatches, 2 blocking)
- `14-failure-pattern-match.md` (239 lines -- 31 root causes mapped)
- `08-VERIFICATION-SPEC.md` (620 lines -- original verification recipe)

---

## CROSS-VALIDATION RESOLUTIONS APPLIED

Before drafting, I resolved all cross-validation mismatches that affect the gate-runner:

| Issue | Resolution | Rationale |
|-------|-----------|-----------|
| SC-10 threshold 108px unsourced | Changed to **120px** | Matches remediation audit FINAL-VERDICT.md empirical concern level ("6 of 11 gaps exceed 120px") |
| SC-14 letter-spacing 0.02em vs 0.025em vs 0.03em | **Two separate thresholds**: per-element minimum 0.025em (SC-14), between-zone delta 0.03em (perception threshold) | 0.025em = 0.4px at 16px, sourced from anti-conditions S-08. Per-element and between-zone are distinct measurements. |
| SC-04 tokens.css has cool-toned bg tokens | Added **exception** for semantic accent backgrounds in inverted contexts | `--bg-info` and `--bg-tip` are accent tints, not zone backgrounds. Gate excludes elements with `.callout-*` or `[data-accent]` parent. |
| SC-05 tokens.css has #FFFFFF | Added **exception** for `--text-inverse` contexts | Pure white is required for text on dark backgrounds. Gate excludes elements within `.dark-bg`, `[data-inverted]` containers. |
| SC-11 display-body 10px delta | **Included** (from verification spec, missing from PV2) | Flagship had ALL text at 16px. 10px display-body delta ensures visible heading hierarchy. |
| SC-09 alternative path "5 component types" | **Removed** specific number, marked calibration pending | Texture-path concept valid but "5 per zone" threshold is unsourced. |
| DG-2 discrepancy thresholds | Labeled **engineering defaults** | 5 RGB / 1px / 0.01em tolerances are reasonable but not empirically sourced. |
| `merged-components.css` filename | Changed to **`components.css`** | Actual file is `components.css` (1,195 lines). `merged-components.css` does not exist. |

---

## THE SECTION (for inclusion in master execution prompt)

```markdown
## Section 3: gate-runner.md

Write the following content to `gate-runner.md` in your working directory:

---BEGIN FILE CONTENT---

# Gate Runner -- Flagship 4/4 Programmatic Verification

## Purpose

This file defines 21 gates that verify the HTML output programmatically. Gates catch
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

GROUP 1 -- Identity (parallel):
  SC-01, SC-02, SC-03, SC-04, SC-05

GROUP 2 -- Structure (parallel):
  SC-06, SC-07, SC-08, SC-12, DG-3

GROUP 3 -- Perception (sequential, needs zone boundaries from GROUP 2):
  SC-09, SC-10, SC-11, SC-14, SC-15

GROUP 4 -- Compositional (sequential, depends on GROUP 3):
  SC-13, SC-13B, SC-16

GROUP 5 -- Deliverable (after GROUP 4):
  DG-1, DG-2, DG-4

Dependency chain:
  SC-12 (zone count) -> SC-09 (bg delta) -> SC-13 (multi-coherence)
  SC-13 -> SC-13B (direction) -> SC-16 (monotonic)
  SC-13 (measured values) -> DG-2 (cross-validation)

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

---

## Gate-to-PA Handoff

Gates FILTER; PA JUDGES. The handoff is ONE-WAY.

ALL 15 blocking gates must PASS before PA runs. Once PA begins, gates are NOT
re-run. PA findings do NOT trigger gate re-evaluation.

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

Programmatic check:
```js
// For each pair of adjacent zone elements
const zones = document.querySelectorAll('[class*="zone"], section[data-zone], .section');
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

Programmatic check:
```js
// For each pair of adjacent zone elements
const zones = document.querySelectorAll('[class*="zone"], section[data-zone], .section');
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

Programmatic check:
```js
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
  2. Typographic:  font-size delta >= 2px OR font-weight delta >= 100
  3. Spatial:      padding delta >= 24px
  4. Structural:   border configuration change (width, style, or color differs)
  5. Behavioral:   interactivity presence change (hover states or transitions present/absent)
  6. Material:     background-image or texture change

PASS (Flagship):
  - Every boundary has >= 3 channels shifting
  - Average across all boundaries >= 4.0

FAIL: Any boundary with < 3 channels shifting, OR Flagship average < 4.0

Programmatic check:
```js
const zones = [...document.querySelectorAll('[class*="zone"], section[data-zone], .section')];
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
  if (Math.abs(fs1 - fs2) >= 2 || Math.abs(fw1 - fw2) >= 100) shifts++;

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
  if (emVal > 0 && emVal < 0.025) return FAIL; // sub-perceptual
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

### SC-13B: Channel Shift Direction Coherence (ADVISORY)

Tier: A (composition-critical)
Enforcement: ADVISORY (does not block -- logs WARNING)

Check: Whether channels at a boundary shift in the same semantic direction.

Direction classification:
  darker bg / heavier font / tighter spacing = INTENSIFYING (+)
  lighter bg / lighter font / looser spacing = RELAXING (-)

ADVISORY threshold: >= 50% of boundaries have >= 3 channels in SAME direction

Programmatic check: After SC-13 passes, classify each channel's shift as +/- per
boundary. Count agreements. Report percentages. ~30 lines additional JS.

Confidence: ~50% (direction heuristic is imprecise). Output is diagnostic data for PA.

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
Timing: Runs BEFORE build begins (validates the builder's plan YAML)

Check: Builder's `_build-plan.yaml` satisfies 5 sub-checks:
  1. zone_count: 2-5 (Flagship: 3-5)
  2. bg_deltas: ALL >= 15 RGB
  3. mechanisms: >= 1 in each of 5 categories (Spatial, Temporal, Material, Behavioral, Relational)
  4. transitions: >= 3 distinct types
  5. grid_layouts: >= 2 distinct patterns

PASS: All 5 sub-checks pass
FAIL: Any sub-check fails

Programmatic check: Parse YAML. Validate each field programmatically.

This is the HIGHEST-LEVERAGE single gate: machine-parses YAML instead of
text-matching prose. In Fat Core architecture (single agent plans + builds),
DG-4 validates the agent's self-generated plan before build proceeds.

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
| 16 | SC-13B | Direction Coherence | T1 | A | >= 50% boundaries coherent | ADVISORY |
| 17 | SC-16 | Monotonic Progress | T1 | A | >= 1 monotonic property | ADVISORY |
| 18 | DG-1 | Fractal Echo Table | T2 | A | 5 rows, evidence, direction | YES |
| 19 | DG-2 | Cascade Value Table | T2 | A | All boundaries, cross-val | YES |
| 20 | DG-3 | Landmark Complete | T1 | B | header + main + footer | YES |
| 21 | DG-4 | Handoff Validation | T1 | A | 5 sub-checks on build-plan YAML | YES |

Totals: 17 blocking + 2 advisory + 2 behavioral = 21 gates
Tier 1 (programmatic): 15 | Tier 2 (deliverable): 4 | Tier 3 (behavioral): 2
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

---END FILE CONTENT---
```

---

## NOTES FOR THE PROMPT ASSEMBLER

1. **This is the ACTUAL FILE CONTENT** that the fresh instance should write to `gate-runner.md`. The section above includes the exact content between `---BEGIN FILE CONTENT---` and `---END FILE CONTENT---`.

2. **All cross-validation corrections applied:**
   - SC-10: 108px -> 120px (empirically sourced from remediation audit)
   - SC-14: 0.02em -> 0.025em (anti-conditions S-08 median value)
   - SC-04/SC-05: Inverted-context and semantic-accent exceptions added
   - DG-2: Discrepancy thresholds labeled as engineering defaults
   - SC-11: Display-body >= 10px included (from verification spec)
   - All references use `components.css` not `merged-components.css`

3. **Gates catch ~26% of compositional quality.** The remaining ~74% requires PA. This is not a gate design failure -- it is fundamental. Gates measure properties; composition lives in relationships.

4. **The behavioral gates (BG-1, BG-2) operate on different timelines:**
   - BG-2 runs at Wave 0.5 BEFORE the build starts (fresh-eyes metaphor check)
   - BG-1 is verified from the build log AFTER the build completes
   - Neither runs during the micro-gate or full-gate sequences

5. **DG-4 (Handoff Validation) is a PRE-BUILD gate.** It validates the builder's plan YAML before any CSS is written. All other gates run DURING or AFTER the build.

6. **The JS code is pseudocode for structure.** The actual implementation will need proper error handling, null checks, and Playwright `page.evaluate()` wrapping. The logic and thresholds are exact; the boilerplate is illustrative.

---

**END OF DRAFT**
