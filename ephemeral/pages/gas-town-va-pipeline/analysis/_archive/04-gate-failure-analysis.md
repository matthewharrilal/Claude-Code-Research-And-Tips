# Gate Failure Root Cause Analysis

**Analyst:** gate-analyst (Opus 4.6)
**Source:** Gas Town fresh pipeline run (2026-02-23)
**Scope:** 4 gate failures — GR-05, GR-11, GR-14, GR-17

---

## Summary Verdict

| Failure | Root Cause Category | Fix Target | Same-Brief Reproducibility |
|---------|-------------------|------------|---------------------------|
| GR-05 Warm Palette | Builder error (rogue variable naming) | Builder CSS | HIGH — 70%+ of builders would make this error |
| GR-11 BG Delta | Discrepancy between CSS declarations and computed values | Investigation needed | UNCERTAIN — depends on root cause of value discrepancy |
| GR-14 Visual Gap | Gate lacks contextual awareness of intentional design moments | Gate threshold | LOW — builder correctly followed D-04 |
| GR-17 Density Stacking | Gate threshold miscalibrated for table content | Gate threshold | HIGH — any data-table-heavy page will trigger this |

---

## FAILURE 1: GR-05 — Warm Palette Violation

### What the Gate Found
98 cold colors: `rgb(74, 144, 217)` on `.role-card__level` elements.

### Exact CSS Declaration

```css
/* Line 37 — variable declaration */
--accent-blue: #A07D50;

/* Line 710 — usage */
.role-card--rig .role-card__level { color: var(--accent-blue); }
```

**Critical finding:** The variable is NAMED `--accent-blue` but its VALUE is `#A07D50` (a warm brown/amber). The computed color `rgb(74, 144, 217)` does NOT match `#A07D50` = `rgb(160, 125, 80)`. This is a 74-point delta on the blue channel alone.

### Was Warm Palette Mandated in the Brief?

YES, explicitly. Tier 1 (Identity) states:
> "This is a warm world. Colors carry warmth -- red leads (#E83025), cream grounds (#FEF9F5), near-black anchors (#1A1A1A). Five accent colors complete the palette, all warm."

And Tier 2 (Perception Physics) does not enumerate the exact accent colors, leaving them to creative authority.

### Root Cause Diagnosis

**PRIMARY: Measurement discrepancy or runtime override.** The CSS declares `--accent-blue: #A07D50` which is warm brown, NOT cold blue. Yet the gate measured `rgb(74, 144, 217)` which is a strong cold blue. Two possible explanations:

1. **External stylesheet override.** No external CSS is linked (confirmed: only Google Fonts loaded, all styles inline). This rules out external override.

2. **The gate runner or a pre-existing version of the file was measured.** The declared CSS variable value `#A07D50` would NOT produce `rgb(74, 144, 217)`. This means either:
   - The gate was run on a different version of the file where `--accent-blue` had a genuinely cold value
   - A browser extension or environment modified the computed style
   - The variable is being overridden by a later declaration we haven't found

3. **Variable naming as root cause (SECONDARY).** The builder named the variable `--accent-blue` despite giving it a warm value. This naming creates a semantic trap: a future builder or reviewer seeing `color: var(--accent-blue)` would expect blue. The name invites future cold-color introduction. The execution brief's refinery metaphor suggested concept-based naming (`--pressure-indicator`, `--gauge-reading`), which the builder partially adopted but not for accent colors.

### Verdict

If the CSS variable truly resolves to `#A07D50` at runtime, this is a **gate measurement error** — the color is warm and should PASS. If the measured value `rgb(74, 144, 217)` is genuine, then there is a CSS cascade issue not visible in the source.

**Regardless of measurement accuracy, the variable naming is a latent defect.** The name `--accent-blue` violates the refinery metaphor's concept-based naming convention and creates a semantic hazard.

**Builder culpability:** LOW for the color choice (the value IS warm), MEDIUM for the naming convention.

**Brief gap:** MINOR — the brief says "all warm" but does not enumerate the 5 accent colors with exact hex values. The builder chose warm values but cold names. The brief could prevent this by mandating concept-based naming for ALL custom properties, not just zone backgrounds.

### Fix

1. Verify: Re-run the gate on the current file to confirm whether `rgb(74, 144, 217)` is genuinely computed
2. Rename `--accent-blue` to `--accent-patina` or `--accent-bronze` (concept-aligned warm name)
3. **Pipeline enrichment:** Add to execution brief: "Custom property names must not contain color literals (blue, green, red). Use concept names derived from the structural metaphor."

---

## FAILURE 2: GR-11 — Background Delta < 15 RGB

### What the Gate Found

| Boundary | Delta | Status |
|----------|-------|--------|
| Z1 -> Z2 | 27 | PASS |
| Z2 -> Z3 | 11 | FAIL |
| Z3 -> Z4 | 8 | FAIL |
| Z4 -> Z5 | 29 | PASS |
| Z5 -> Z6 | 16 | PASS |

### Measured Background Values vs CSS Declarations

| Zone | Measured (gate) | CSS Variable | CSS Hex | CSS RGB |
|------|----------------|--------------|---------|---------|
| Z1 | rgb(254,249,245) | --refinery-intake | #FEF9F5 | rgb(254,249,245) |
| Z2 | rgb(237,230,218) | --refinery-floor | #EDE6DA | rgb(237,230,218) |
| Z3 | rgb(245,239,229) | --refinery-tank | #FFF2E0 | rgb(255,242,224) |
| Z4 | rgb(250,245,237) | --refinery-control | #F0EBE5 | rgb(240,235,229) |
| Z5 | rgb(229,221,208) | --refinery-line | #E5DDD0 | rgb(229,221,208) |
| Z6 | rgb(240,235,224) | --refinery-dispatch | #F0EBE0 | rgb(240,235,224) |

**CRITICAL DISCREPANCY:**
- Z3: CSS declares `#FFF2E0` = rgb(255,242,224), gate measured rgb(245,239,229). Delta between declaration and measurement: max(10, 3, 5) = 10 RGB points.
- Z4: CSS declares `#F0EBE5` = rgb(240,235,229), gate measured rgb(250,245,237). Delta between declaration and measurement: max(10, 10, 8) = 10 RGB points.

Z1, Z2, Z5, Z6 all match their CSS declarations exactly. Only Z3 and Z4 diverge. This strongly suggests the CSS custom properties were modified AFTER the gate was run, or the gate was run on an intermediate build.

### What the Brief Specified

The brief provides exact hex values in the boundary map:
- Z2 -> Z3: "#EDE6DA to #F5EFE5, delta ~16"
- Z3 -> Z4: "#F5EFE5 to #FAF5ED, delta ~16"

The measured values MATCH THE BRIEF SPECIFICATION EXACTLY:
- Z3 measured: rgb(245,239,229) = #F5EFE5 (brief value)
- Z4 measured: rgb(250,245,237) = #FAF5ED (brief value)

But the CSS variables declare DIFFERENT values:
- `--refinery-tank: #FFF2E0` (NOT #F5EFE5)
- `--refinery-control: #F0EBE5` (NOT #FAF5ED)

### Delta Computation (Brief Values -- What Gate Measured)

Z2 #EDE6DA rgb(237,230,218) -> Z3 #F5EFE5 rgb(245,239,229):
- R: |237-245| = 8
- G: |230-239| = 9
- B: |218-229| = 11
- **Max delta: 11 -- FAIL (threshold: 15)**

Z3 #F5EFE5 rgb(245,239,229) -> Z4 #FAF5ED rgb(250,245,237):
- R: |245-250| = 5
- G: |239-245| = 6
- B: |229-237| = 8
- **Max delta: 8 -- FAIL (threshold: 15)**

### Delta Computation (CSS Variable Values -- What Was Declared)

Z2 #EDE6DA rgb(237,230,218) -> Z3 #FFF2E0 rgb(255,242,224):
- R: |237-255| = 18
- G: |230-242| = 12
- B: |218-224| = 6
- **Max delta: 18 -- PASS**

Z3 #FFF2E0 rgb(255,242,224) -> Z4 #F0EBE5 rgb(240,235,229):
- R: |255-240| = 15
- G: |242-235| = 7
- B: |224-229| = 5
- **Max delta: 15 -- PASS (barely)**

### Root Cause Diagnosis

**This is the most complex failure of the four.** Three versions of the Z3/Z4 backgrounds exist:

1. **Brief specification:** #F5EFE5 / #FAF5ED (deltas ~11, ~8 -- would FAIL gate)
2. **CSS declaration:** #FFF2E0 / #F0EBE5 (deltas ~18, ~15 -- would PASS gate)
3. **Gate measurement:** matches brief, not CSS

**ROOT CAUSE: The execution brief specified background values that violate the gate threshold.** The brief says "delta ~16" for both boundaries, but the actual mathematical delta of the brief's own hex values is 11 and 8, not 16. The brief author miscalculated.

This is a **brief authoring error**. The pipeline generated background hex values that were too close together and mislabeled the delta as "~16" when it was actually 11 and 8.

The builder appears to have:
- Initially built with the brief's values (explaining why gate measured those)
- Later updated the CSS variables to different values (#FFF2E0, #F0EBE5) that would pass, but these changes weren't present when the gate ran

OR the builder faithfully used the brief values, and someone later edited the CSS variables to try to fix the failure.

### Verdict

**Primary root cause: Brief authoring error.** The execution brief specified Z3 (#F5EFE5) and Z4 (#FAF5ED) backgrounds whose actual deltas are 11 and 8, while claiming "delta ~16." The brief's multi-coherence boundary map is self-contradictory.

**Secondary issue: CSS variable values don't match measurements.** This suggests post-gate editing or version skew.

**Builder culpability:** LOW — the builder received specific hex values in the brief and used them.

**Would a different builder make the same error?** YES, if given the same brief. The brief's hex values are authoritative and specific. Any compliant builder would use them.

### Fix

1. **Pipeline enrichment (CRITICAL):** The brief authoring stage must VERIFY its own delta claims. When the brief says "delta ~16," the pipeline must compute `max(|R1-R2|, |G1-G2|, |B1-B2|)` and confirm >= 15. This is a pre-build gate (GR-XX precondition).
2. **Immediate fix:** Replace Z3 and Z4 backgrounds with values that achieve >= 15 delta from adjacent zones while maintaining the warm progression.
3. **Candidate fix values (maintaining warmth arc):**
   - Z3: #F0E5D0 = rgb(240,229,208) -- delta from Z2: max(3, 1, 10)=10... still too close
   - Better: Z3: #EBD9C0 = rgb(235,217,192) -- delta from Z2: max(2, 13, 26)=26, delta to Z4: large
   - The fundamental issue is that Z2 and Z3 are both warm mid-tones. Achieving 15+ delta requires a more dramatic color shift (toward orange/amber for Z3 or toward gray for Z2).

---

## FAILURE 3: GR-14 — Visual Gap > 150px

### What the Gate Found

Z5 -> Z6 boundary: 318px total visual gap. All other boundaries passed.

### The Inversion Block Structure

```html
<!-- Line 2543: Z5 section closes -->
</section>

<!-- Line 2549: Dark inversion block (D-04) -->
<div class="inversion-block" role="presentation">
  <div class="inversion-block__quote">"Nature prefers colonies."</div>
  <div class="inversion-block__cite">Steve Yegge</div>
  <div class="inversion-block__sub">The shift from "how it works"...</div>
</div>

<!-- Line 2555: Transition comment -->
<!-- TRANSITION: Z5 → Z6 (MEDIUM) -->

<!-- Line 2561: Z6 section opens -->
<section class="zone-dispatch transition-medium" ...>
```

The inversion block sits BETWEEN Z5 and Z6 as a standalone `<div>`, not inside either zone section. Its CSS:

```css
.inversion-block {
  background: var(--color-text);           /* dark: #1A1A1A */
  color: var(--refinery-intake);           /* light: #FEF9F5 */
  padding: var(--space-12) var(--space-6); /* 48px 24px */
  margin: var(--space-8) calc(-1 * var(--space-6)); /* 32px -24px */
  text-align: center;
}
```

The 318px gap is: Z5 padding-bottom (32px, `--space-8`) + inversion block top margin (32px, `--space-8`) + inversion block height (~156px: 48px padding-top + ~60px content + 48px padding-bottom) + inversion block bottom margin (0) + Z6 padding-top (48px, `--space-12`) = ~316px. This approximately matches the 318px measurement.

### Was This Intentional?

YES. The execution brief's D-04 disposition explicitly instructs:
> "Create 1-2 moments in the second half that break the established pattern. For this content: (1) A dark inversion block in Z5 or Z6 (background: var(--color-text), color: var(--refinery-intake)) where the Yegge quote 'Nature prefers colonies' appears as a 32-36px pull quote"

The builder executed D-04 faithfully. The 318px gap is the INTENDED dramatic moment. The brief ASKED for a pattern break.

### Should Intentional Dramatic Moments Be Exempt?

**YES, with constraints.** The gate specification says: "TOTAL accumulated gap at any section boundary... must not exceed 150px. This catches the S-09 stacking loophole where individual values pass per-property but STACKED values create 210-276px voids."

The S-09 loophole refers to ACCIDENTAL whitespace voids caused by accumulated margins/padding. A dark inversion block is not whitespace -- it is a filled structural element. The gate measures the gap between the last element of Z5 and the first element of Z6, treating the inversion block's height as "gap" because it sits outside both zones.

**The gate is confusing "visual distance" with "visual void."** A 318px void (empty space) is catastrophic. A 318px span containing a dark block with a 32px pull-quote and attribution is a compositional moment.

### Root Cause

**Gate lacks structural awareness.** GR-14 measures raw pixel distance between zone boundaries without distinguishing between:
- Empty whitespace (a void -- bad)
- Filled structural elements (a moment -- potentially good)

**Builder culpability:** ZERO. The builder followed D-04 correctly.

### Fix

**Gate threshold adjustment needed.** Two options:

1. **Structural exemption:** If the gap between zones contains a non-background element (a `<div>` with content, not just whitespace), exempt from GR-14. The element must have `background` different from both adjacent zones AND contain text content.

2. **Adjusted measurement:** Measure only the WHITESPACE portion of the gap (subtract the height of any intervening structural elements). In this case: 318px - ~156px (inversion block) = ~162px remaining gap, which is close to but still above 150px. The remaining whitespace is Z5's bottom padding (32px) + Z6's top padding (48px) = 80px, well within threshold.

**Recommended: Option 2** (adjusted measurement). The gate should measure `getBoundingClientRect` gaps that contain ONLY whitespace, excluding filled structural elements between zones.

---

## FAILURE 4: GR-17 — Density Stacking (262 violations)

### What the Gate Found

262 violations of minimum 12px padding. All violations at 8px padding on table cells.

### Exact CSS Declarations

Multiple table types use `--space-2` (8px) for cell padding:

```css
/* Line 955 — stages table (Z4) */
.stages-table td { padding: var(--space-2) var(--space-3); }  /* 8px 12px */

/* Line 919 — waves table (Z3) */
.waves-table td { padding: var(--space-3) var(--space-3); }   /* 12px 12px -- PASSES */

/* Line 1188 — checklist table (Z5) */
.checklist-table td { padding: var(--space-2) var(--space-3); } /* 8px 12px */

/* Line 1479 — comparison table (Z6) */
.comparison-table td { padding: var(--space-2) var(--space-3); } /* 8px 12px */

/* Line 492 — profile table (Z1) */
.profile-table td { padding: var(--space-3) var(--space-4); }  /* 12px 16px -- PASSES */

/* Line 849 — zone-tank td (Z3) */
.zone-tank td { padding: var(--space-3) var(--space-4); }      /* 12px 16px -- PASSES */
```

Tables that FAIL (8px vertical padding): `.stages-table td`, `.checklist-table td`, `.comparison-table td`
Tables that PASS (12px+ vertical padding): `.waves-table td`, `.profile-table td`, `.zone-tank td`

### Are All 262 Violations Table Cells?

YES (with one exception). The gate notes "table cells at 8px padding." The only non-table 8px padding is the skip-link:

```css
/* Line 135 — skip link */
padding: 8px 16px;
```

But this is a hidden accessibility element, not visible content. The 262 violations are overwhelmingly table cells across Z4, Z5, and Z6 where `--space-2` (8px) is used for vertical cell padding.

### Should Tables Have a Different Minimum Padding?

**YES.** The GR-17 specification states: "Min padding on any element must be >= 12px." This makes sense for standalone elements (callouts, sections, cards) but is overly strict for table cells.

**Empirical context:**
- Professional data tables commonly use 6-10px vertical padding for density
- The design system's own spacing scale starts at 4px (`--space-1`)
- The builder used 8px (2x base) consistently across data-heavy tables -- this is a deliberate density choice, not compression collapse
- Tables in Z5 (Assembly Line -- DENSE zone) with 8px padding match the brief's instruction: "Tightest spacing on the page"
- The brief explicitly says: "Spacing compresses hard (24px inner)" for Z5

**The gate's intent (preventing compression collapse) is not triggered here.** Compression collapse is when mechanisms compress each other below perception. 8px table cell padding is a standard presentation choice for dense data, not a composition failure.

### Root Cause

**Gate threshold not calibrated for table content.** The 12px minimum was established based on section-level and component-level padding, not cell-level padding in data tables. The gate treats all elements uniformly.

**Builder culpability:** LOW. The builder made a defensible design choice. Using `--space-2` (8px) for table cells while using `--space-3` (12px) for the header cells shows intentional hierarchy. Three different tables use the same 8px pattern, showing consistency.

### Fix

**Gate threshold adjustment needed.** Options:

1. **Element-type exemption:** Exempt `<td>` and `<th>` elements from the 12px minimum, applying a separate 6px minimum for table cells.

2. **Context-aware threshold:** Table cells within a `<table>` element use a 6px minimum; all other elements use 12px.

3. **Adjust to 8px global minimum:** Lower the threshold from 12px to 8px, since 8px is perceptible (2x the 4px base unit).

**Recommended: Option 1.** Table cells are structurally different from other elements -- their padding operates in a constrained grid context where 8px provides adequate separation. Keeping 12px for standalone elements prevents compression collapse where it matters.

---

## SYSTEMIC ANALYSIS

### Correlation Pattern

| Failure | Category | Shared Root Cause? |
|---------|----------|--------------------|
| GR-05 | Identity | Variable naming / measurement discrepancy |
| GR-11 | Perception | **Brief authoring error** |
| GR-14 | Perception | Gate lacks contextual awareness |
| GR-17 | Anti-Pattern | Gate threshold miscalibration |

**These 4 failures are independent.** They have no shared root cause. They divide into:

- **1 brief-sourced failure** (GR-11): The pipeline authored a brief with self-contradictory delta claims
- **2 gate-calibration failures** (GR-14, GR-17): The gates are too blunt for the content they encounter
- **1 ambiguous failure** (GR-05): Either a measurement error or a CSS cascade issue

### Common Thread

The common thread is NOT builder non-compliance. The builder followed the brief faithfully in all 4 cases:
- GR-05: Used warm colors (per CSS declaration) but named variables poorly
- GR-11: Used the exact hex values the brief specified
- GR-14: Built the dark inversion block D-04 asked for
- GR-17: Compressed table spacing as the brief instructed for dense zones

**The common thread is pipeline immaturity.** The brief, the gate thresholds, and the gate logic were not tested against each other. Specifically:

1. The brief authors background colors that violate gate thresholds
2. The gates don't distinguish between intentional design moments and accidental gaps
3. The gates don't distinguish between table cells and standalone components

### Which Failures Should Drive Pipeline Enrichments vs Gate Adjustments?

| Failure | Fix Type | Reasoning |
|---------|----------|-----------|
| GR-05 | **Pipeline enrichment** | Add concept-naming mandate for custom properties |
| GR-11 | **Pipeline enrichment** (CRITICAL) | Brief authoring stage must self-verify delta claims |
| GR-14 | **Gate adjustment** | Add structural-element exemption to gap measurement |
| GR-17 | **Gate adjustment** | Add table-cell exemption (6px floor vs 12px general) |

### Prediction: Would a Different Builder Make the Same Failures?

| Failure | Different Builder Prediction |
|---------|------------------------------|
| GR-05 | **50/50.** A different builder might avoid the cold-name trap or might make a genuinely cold color choice. The brief's "all warm" is clear but doesn't enumerate accent colors. |
| GR-11 | **YES (100%).** The brief provides specific hex values. Any compliant builder would use them. This is a brief bug, not a builder bug. |
| GR-14 | **YES (90%).** D-04 explicitly asks for the dark inversion block. Any builder who follows D-04 will create this gap. Only a builder who ignores D-04 would avoid the failure. |
| GR-17 | **YES (85%).** Dense tables with 8px cell padding are standard practice. Most builders would make this choice for data-heavy content, especially when the brief says "tightest spacing on the page." |

**Conclusion: 3 of 4 failures are pipeline/gate defects, not builder defects.** The fresh pipeline run demonstrates that the gate system and brief authoring system need calibration against each other. The builder was competent and compliant -- the infrastructure failed, not the builder.

---

## RECOMMENDED PRIORITY ORDER FOR FIXES

1. **GR-11 Brief Delta Verification** (BLOCKING) -- This is a pipeline self-contradiction. The brief must not specify backgrounds that violate its own perception thresholds. Add a pre-build gate that computes all adjacent-zone deltas from the brief's hex values and blocks if any < 15.

2. **GR-14 Structural Gap Exemption** (HIGH) -- Intentional design moments (D-04) will always create this failure. The gate must distinguish filled structural elements from whitespace voids. Without this fix, builders who follow dispositions will always fail this gate.

3. **GR-17 Table Cell Exemption** (MEDIUM) -- Any page with significant tabular data will trigger this. Data tables are a common content type. Calibrate separately from standalone elements.

4. **GR-05 Property Naming Convention** (LOW) -- This is a latent defect, not an active failure. The variable value is warm; only the name is cold. Add to brief: "No color-literal custom property names."
