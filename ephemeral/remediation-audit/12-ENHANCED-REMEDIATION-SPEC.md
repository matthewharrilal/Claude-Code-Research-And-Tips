# ENHANCED REMEDIATION SPECIFICATION -- DEFINITIVE EXECUTION DOCUMENT

**Synthesizer:** synthesizer (Opus 4.6)
**Date:** 2026-02-17
**Sources:** All 11 remediation-audit reports (01-11) + original 10-REMEDIATION-PROMPT.md (301 lines)
**Decision:** Approach B -- CSS changes + targeted HTML restructuring
**Model:** Execute with Opus agent (Takeaway 8 from retrospective)

---

## 1. EXECUTIVE SUMMARY

### Decision

Remediate with CSS + targeted HTML restructuring (Approach B from report 01). The flagship HTML has sound architectural bones: 12-section zone system, correct metaphor mapping, dark header/footer bookends, 960px container, soul compliance, 7 distinct table treatments. 89.5% of the HTML body is correct and should be preserved. Rebuilding discards ~880 lines of working code for uncertain gain.

### What Changes vs the Original Remediation

The original remediation (301 lines, 6 phases, CSS-only) is expanded to:

| Dimension | Original | Enhanced | Why |
|-----------|----------|----------|-----|
| Scope | CSS-only | CSS + targeted HTML | CSS-only caps at PA-05 2-3/4 (report 11); HTML restructuring needed for layout variety and component library adoption |
| Phases | 6 | 9 (0-8) | Added Phase 0 (deallocation), Phase 7 (accessibility), Phase 8 (verification) |
| Accessibility | 0 features | 7 features (38 HTML mods, ~180 CSS lines) | BLOCKING gap #1: 0/8 vs CD-006's 8/8 |
| Void mitigation | 1/6 targeted | All 11 transitions capped at 120px | BLOCKING gap #2: 9/9 PA auditors flagged whitespace voids |
| Multi-coherence | Implicit only | Cascade table + per-transition verification | BLOCKING gap #3: channels must co-vary, not just independently activate |
| Component library | 0 standard classes | 9 callout conversions + 12 section-indicator swaps | RC-9: 3/26 library families used, should be 10+ |
| Layout variety | Single-column only | 3 grid layouts (S7 tension pairs, S8 sequence grid, S11 hypothesis grid) | RC-12: zero multi-column in 2,034 lines |
| CSS lines | ~190 added on top | ~203 removed, ~310 added (net +107) | Report 06: 23.7% of CSS (233 lines) is sub-perceptual waste |

### Expected Outcome

| Metric | Current | After Original Remediation | After Enhanced Remediation |
|--------|---------|---------------------------|---------------------------|
| PA-05 | 1.5/4 | 2-3/4 (Sonnet/Opus) | 3/4 (Sonnet), 3-4/4 (Opus) |
| Perceptible channels | 3/7 barely | 5/7 | 7/7 |
| Scale 5 levels | 3/5 | 4/5 | 5/5 |
| Accessibility | 0/8 | 0/8 | 8/8 |
| Component library families | 3/26 (11.5%) | 3/26 | ~10/26 (38%) |
| Layout patterns | 1 (single-column) | 1 | 4 (single-column + 3 grids) |
| Max whitespace gap | 276px | ~200px | <=120px |

### Total Effort Estimate

- Phase 0 (deallocation): ~15 min
- Phase 1 (HTML restructuring): ~30 min
- Phases 2-6 (CSS recipe): ~45 min
- Phase 7 (accessibility): ~15 min
- Phase 8 (verification): ~15 min
- **Total: ~120 min (2 hours), 1 Opus agent**

### Priority Ordering

Structural variety (borders, containment, grids, component differentiation) > Typography (font-size, weight) > Chromatic (backgrounds) > Spatial (margins, padding) > Accessibility (professional finish). If time is short, complete Phases 0-2 and Phase 7 FIRST.

---

## 2. PHASE 0: DEALLOCATION (~15 min)

Before adding anything new, remove the 233 lines of sub-perceptual CSS that no human can see. This frees budget for visible structural variety.

### Step 0.1: DELETE the typographic convergence gradient (lines ~736-834)

Find this block:
```css
/* --- Zone 1: Typographic variety (raw intake) --- */
.zone-s1 p {
  line-height: 1.8;
  letter-spacing: 0.006em;
  word-spacing: 0.02em;
}
```

DELETE EVERYTHING from `/* --- Zone 1: Typographic variety ---*/` through the end of `/* --- Zone 3: Typographic unity ---*/` (approximately lines 736-834). This is ~99 lines of sub-perceptual letter-spacing (0.004-0.01em = 0.064-0.16px), word-spacing (0.01-0.02em = 0.16-0.32px), and redundant `letter-spacing: 0` declarations.

**Why:** Every value in this block is below the 0.5px perception threshold. Report 06 confirms 95 of 99 lines are definitively invisible. Phase 3 replaces them with perceptible values.

### Step 0.2: DELETE the spatial compression micro-modulations (lines ~840-890)

Find this block:
```css
.zone-s1 .component-block { margin: 32px 0; }
```

DELETE the entire per-zone component/table spacing block (~51 lines). Keep ONLY the two rules that produce perceptible changes:
- `.zone-s5 .component-block { margin: 16px 0; }` (vs 32px default = -16px, perceptible)
- `.zone-s7 .component-block { margin: 16px 0; }` (same)

DELETE the other ~44 lines (redundant margins identical to base values, 4px deltas below threshold).

### Step 0.3: DELETE per-zone border color and heading color shifts (lines ~896-963)

Find this block:
```css
.zone-s3 .table-compact thead tr { border-bottom-color: #5C4B3A; }
```

DELETE the entire per-zone table border-color shift block (~35 lines, all 2-7 RGB deltas = invisible) AND the per-zone heading color block (~27 lines, all under 15 net RGB delta).

### Step 0.4: DELETE the rhythmic micro-modulations (lines ~970-977)

DELETE the 8 lines of per-zone tension-group and sequence-block margin adjustments (4-8px deltas, borderline perceptible, superseded by Phase 5 spacing).

### Step 0.5: Consolidate zone background tokens

In the `:root` block, the 12 zone background tokens will be REPLACED in Phase 3. No action needed here -- Phase 3 overwrites them.

### Step 0.6: DELETE the extra paragraph breathing rule

Find:
```css
.zone-s1, .zone-s3 > p + p { margin-top: 4px; }
```
DELETE this rule (4px = borderline perceptible, superseded by Phase 5 paragraph margins).

### Deallocation Summary

| Block | Lines Removed | Reason |
|-------|--------------|--------|
| Typographic convergence gradient | ~99 | 0.064-0.16px values = invisible |
| Spatial compression micro-modulations | ~44 | Redundant margins identical to base |
| Per-zone border color shifts | ~35 | 2-7 RGB deltas = invisible |
| Per-zone heading color shifts | ~27 | Under 15 net RGB = invisible |
| Rhythmic micro-modulations | ~8 | Superseded by Phase 5 |
| Extra paragraph breathing | ~3 | Superseded by Phase 5 |
| **Total removed** | **~216** | **Freed: 22% of CSS budget** |

**Expected CSS after deallocation: ~984 - 216 = ~768 lines**

### CHECKPOINT AFTER PHASE 0

Open the page at 1440px. It should look IDENTICAL to before. If anything visibly changed, you deleted something perceptible -- restore it.

---

## 3. PHASE 1: HTML RESTRUCTURING (~30 min)

These changes require modifying the HTML structure. Work section by section. Do NOT change any text content.

### Step 1.1: Add skip link and `<main>` wrapper

At the top of `<body>`, before `<header>`, add:
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

After `</header>` (line ~1052), add:
```html
<main id="main-content">
```

Before `<footer class="page-footer">` (line ~2019), add:
```html
</main>
```

### Step 1.2: Add ARIA labels and roles to all sections

For each of the 12 `<section>` elements, add `aria-label` with the section title:

```html
<section class="zone-s1" aria-label="Section 1: What the Research Set Out to Find" style="...">
<section class="zone-s2" aria-label="Section 2: Master Insight" style="...">
<section class="zone-s3" aria-label="Section 3: Why Great Documentation Breathes" style="...">
<section class="zone-s4" aria-label="Section 4: The Choreography of Reading" style="...">
<section class="zone-s5" aria-label="Section 5: The Characters on Your Page" style="...">
<section class="zone-s6" aria-label="Section 6: Whitespace and Typography as Design Decisions" style="...">
<section class="zone-s7" aria-label="Section 7: Three Tensions and How to Resolve Them" style="...">
<section class="zone-s8" aria-label="Section 8: From Principles to Page Structure" style="...">
<section class="zone-s9" aria-label="Section 9: What the Research Recommends" style="...">
<section class="zone-s10" aria-label="Section 10: What to Avoid and Why" style="...">
<section class="zone-s11" aria-label="Section 11: Where the Research Points Next" style="...">
<section class="zone-s12" aria-label="Section 12: An Invitation, Not a Conclusion" style="...">
```

Add `role="banner"` to `<header class="page-header">`.
Add `role="contentinfo"` to `<footer class="page-footer">`.

### Step 1.3: Add `role="note"` to all component blocks

For every `<div class="component-block ...">` in the page (9 instances across S3, S5, S7, S12), add `role="note"`:

```html
<div class="component-block dense" role="note">
```

### Step 1.4: Add `role="separator" aria-hidden="true"` to all dividers

For every `.divider-smooth`, `.divider-bridge`, `.divider-breathing` element (11 total), add:

```html
<div class="divider-smooth" role="separator" aria-hidden="true"></div>
```

### Step 1.5: Convert `.component-block` to `.callout` family (9 instances)

Replace the class names and internal structure for all component blocks:

**S3 "Density Rhythm" (line ~1180):**
```html
<!-- WAS: -->
<div class="component-block">
  <div class="component-label">Density Rhythm</div>
  <div class="component-body"><p>...</p></div>
</div>

<!-- NOW: -->
<div class="callout callout--info" role="note">
  <div class="callout__label">Density Rhythm</div>
  <div class="callout__body"><p>...</p></div>
</div>
```

**S5 "Combination Rule" (line ~1376):**
Change to `callout callout--info`.

**S7 Tension blocks (6 instances, lines ~1452-1496):**
- Tension callouts: change to `callout callout--gotcha`
- Resolution callouts: change to `callout callout--tip`

**S12 "The Discovery" (line ~2000):**
Change to `callout callout--essence`.

### Step 1.6: Convert `.section-meta` to `.section-indicator` (12 instances)

Find every `<div class="section-meta">` and change to `<div class="section-indicator">`.

### Step 1.7: Add grid wrapper for S7 tension/resolution pairs

Wrap each tension/resolution pair in a grid container:

```html
<!-- WAS: -->
<div class="tension-group">
  <div class="callout callout--gotcha" role="note">...</div>
  <div class="callout callout--tip" role="note">...</div>
</div>

<!-- NOW: -->
<div class="tension-pair">
  <div class="callout callout--gotcha" role="note">...</div>
  <div class="callout callout--tip" role="note">...</div>
</div>
```

Do this for all 3 tension groups in S7.

### Step 1.8: Add grid wrapper for S8 sequence blocks

Wrap the 4 sequence blocks in a grid:

```html
<div class="sequence-grid">
  <div class="sequence-block">...</div>
  <div class="sequence-block">...</div>
  <div class="sequence-block">...</div>
  <div class="sequence-block">...</div>
</div>
```

### Step 1.9: Add grid wrapper for S11 hypothesis tables

Wrap the first two hypothesis tables in a grid, keep third full-width:

```html
<div class="hypothesis-grid">
  <div class="table-wrapper"><table class="table-light"><!-- Density --></table></div>
  <div class="table-wrapper"><table class="table-light"><!-- Axis --></table></div>
</div>
<!-- Third table stays full-width -->
<div class="table-wrapper"><table class="table-light"><!-- Combination --></table></div>
```

Remove the `.hypothesis-group-2` and `.hypothesis-group-3` wrapper divs (their progressive spacing CSS was deleted in Phase 0 deallocation).

### CHECKPOINT AFTER PHASE 1

Verify: Skip link appears on Tab press. All sections have aria-labels (inspect in dev tools). Component blocks use `.callout` class names. Grid wrappers are in place (S7, S8, S11). The page may look slightly broken at this point because new CSS classes need styling -- this is expected. Proceed to Phase 2.

---

## 4. PHASES 2-7: CSS RECIPE

Open the `<style>` block. All CSS changes go here. Work through each phase in order.

### PHASE 2: AMPLIFY ZONE BACKGROUNDS (Ch1) -- ~5 min

Find the `:root` block. Replace ALL 12 zone color variables:

```css
/* Zone 1: Warm variety (raw material intake) */
--color-zone-s1: #FEF5EB;       /* warm peach cream */
--color-zone-s2: #F5EDE2;       /* warm tan */
--color-zone-s3: #FBF3E8;       /* warm honey */

/* Zone 2: Cool analytical (converging toward clean) */
--color-zone-s4: #F8F6F3;       /* cooling cream */
--color-zone-s5: #FAFAFA;       /* cool analytical */
--color-zone-s6: #F5F0E8;       /* brief warm breath */
--color-zone-s7: #F8F8F8;       /* cool neutral */
--color-zone-s8: #F0F0F0;       /* cooler neutral (strengthened for T7 transition) */

/* Zone 3: Unified warm (refined output) */
--color-zone-s9: #FEF7F0;       /* refined cream */
--color-zone-s10: #FEF5EB;      /* bookend echo of S1 */
--color-zone-s11: #F8F2EA;      /* gentle breathing */
--color-zone-s12: #FEF5EB;      /* clean cream, matches S1 */
```

Note: S8 changed to `#F0F0F0` (vs original remediation's `#F5F5F5`) to strengthen the T7 transition to 10+ RGB delta, per report 09's coherence fix.

**PERCEPTION CHECK:** Open at 1440px. Scroll S1 to S5. You should see warm peach -> tan -> honey -> cooling cream -> cool gray. If you cannot distinguish at least 3 transitions WITHOUT a color picker, increase RGB deltas.

### PHASE 3: ADD STRUCTURAL BORDERS (Ch4) -- ~10 min

#### Step 3.1: Section-level left borders

After all `.zone-sN { background-color: ... }` rules, add:

```css
/* ============================================================
   Ch4 STRUCTURAL BORDERS -- Section-level containment
   6 of 12 sections. Alternating presence creates rhythm.
   ============================================================ */
.zone-s2 .page-container {
  border-left: 3px solid var(--color-border);
  padding-left: 29px;
}

.zone-s5 .page-container {
  border-left: 4px solid var(--color-primary);
  padding-left: 28px;
}

.zone-s7 .page-container {
  border-left: 3px solid var(--color-text);
  padding-left: 29px;
}

.zone-s9 .page-container {
  border-left: 3px solid #5C4B3A;
  padding-left: 29px;
}

.zone-s10 .page-container {
  border-left: 3px solid var(--color-coral);
  padding-left: 29px;
}

.zone-s12 .page-container {
  border-left: 4px solid var(--color-text);
  padding-left: 28px;
}
```

#### Step 3.2: Amplify dividers AND fix void stacking

Find the 3 divider rules. Replace ALL THREE with these values that prevent stacking above 120px:

```css
.divider-smooth {
  height: 1px;
  background-color: var(--color-border);
  margin: 16px 0;         /* was 48px -- reduced to prevent void stacking */
}

.divider-bridge {
  height: 2px;
  background-color: var(--color-text);
  margin: 24px 0;         /* was 64px -- reduced to prevent void stacking */
}

.divider-breathing {
  height: 4px;
  background-color: var(--color-primary);
  margin: 24px 0;         /* was 80px -- reduced to prevent void stacking */
}
```

Note: Margins are dramatically reduced from the original remediation values to fix the S-09 stacking loophole (report 09). With these margins, worst-case total gap = 32px (section-bottom) + 24px (div-margin-top) + 4px (div-height) + 24px (div-margin-bottom) + 24px (section-top) = 108px < 120px target.

#### Step 3.3: Reduce bridge-prose margin

Find `.bridge-prose` and ensure margin-bottom is reduced:

```css
.bridge-prose {
  max-width: 60ch;
  margin: 0 auto;
  padding: var(--space-4) 0;
  margin-bottom: 16px;    /* was 32px -- reduced to prevent void stacking */
}
```

#### Step 3.4: Add containment to callout components

Find the old `.component-block` rule. Replace with callout family styling:

```css
/* ============================================================
   CALLOUT FAMILY -- Component library adoption
   Replaces custom .component-block with standard .callout
   ============================================================ */
.callout {
  border-left: 4px solid var(--color-primary);
  border-top: 1px solid var(--color-border);
  margin: var(--space-6) 0;
}

.callout__label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle);
}

.callout__body {
  padding: var(--space-4);
}

.callout__body p {
  margin-bottom: 0;
}

/* --- Callout variants --- */
.callout--info {
  border-left-color: var(--color-border);
  background-color: #F5F8FA;
}
.callout--info .callout__label { color: var(--color-border); }

.callout--gotcha {
  border-left-color: var(--color-coral);
  background-color: #FEF6F5;
}
.callout--gotcha .callout__label { color: var(--color-coral); }

.callout--tip {
  border-left-color: var(--color-green);
  background-color: #F5FAF5;
}
.callout--tip .callout__label { color: var(--color-green); }

.callout--essence {
  border-left-color: var(--color-amber);
  background-color: var(--color-zone-breathing);
  font-family: var(--font-display);
}
.callout--essence .callout__label { color: var(--color-amber); }
```

If any `.component-block` instances remain unconverted in the HTML, keep the original `.component-block` styles as fallback but add:

```css
.component-block {
  border-top: 1px solid var(--color-border);
  background-color: #FEF6F5;
}
```

#### Step 3.5: Add grid layouts

```css
/* ============================================================
   GRID LAYOUTS -- Break single-column monotony
   ============================================================ */

/* S7: Tension/Resolution pairs side by side */
.tension-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin: var(--space-6) 0;
}

/* S8: Sequence blocks in 2x2 grid */
.sequence-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin: var(--space-6) 0;
}

/* S11: First two hypothesis tables side by side */
.hypothesis-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  margin: var(--space-6) 0;
}
```

#### Step 3.6: Add table header backgrounds

```css
/* Table header tints for structural distinction */
table thead tr {
  background-color: #F5F0E8;
}

.table-featured thead tr {
  background-color: #FEF0EE;
}

.table-warning thead tr {
  background-color: #FEF0EE;
}
```

**PERCEPTION CHECK:** Scroll through at 1440px. You should see:
- Left borders on S2, S5, S7, S9, S10, S12 (6 total). S5's is RED.
- Dividers are clearly visible lines between sections.
- S7 tension/resolution pairs are side by side.
- S8 sequence blocks are in a 2x2 grid.
- Callouts have distinct background tints per type.
- No blank cream viewports (all gaps < 120px).

### PHASE 4: ENRICH TYPOGRAPHY (Ch2) -- ~10 min

#### Step 4.1: Paragraph font-size and line-height variation

After the base `section p { ... }` rule, add:

```css
/* ============================================================
   TYPOGRAPHIC ZONE VARIATION -- Perceptible values
   Zone 1: Generous (17px, open tracking, wide line-height)
   Zone 2: Compressed (15px, tight tracking, narrow line-height)
   Zone 3: Standard (16px, neutral tracking, standard line-height)
   ============================================================ */

/* Zone 1: Generous reading */
.zone-s1 p, .zone-s2 p, .zone-s3 p {
  font-size: 17px;
  line-height: 1.85;
  letter-spacing: 0.02em;
  max-width: 62ch;
  color: #2A2520;
}

/* Zone 2: Analytical compression */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  font-size: 15px;
  line-height: 1.55;
  letter-spacing: -0.01em;
  max-width: 72ch;
  color: var(--color-text);
}

/* Transitional sections: standard */
.zone-s4 p, .zone-s6 p {
  font-size: 16px;
  line-height: 1.7;
  letter-spacing: 0;
  max-width: 68ch;
}

/* Zone 3: Settled output */
.zone-s9 p, .zone-s10 p, .zone-s11 p, .zone-s12 p {
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0;
  max-width: 64ch;
  color: #1E1B18;
}
```

#### Step 4.2: Heading weight, size, and color variation

After the base `section h2 { ... }` rule, add:

```css
/* HEADING ZONE VARIATION */

/* Zone 1: Display-weight, warm brown */
.zone-s1 h2, .zone-s2 h2, .zone-s3 h2 {
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: #3D3530;
}

/* Zone 2: Functional, heavy, tight */
.zone-s5 h2, .zone-s7 h2, .zone-s8 h2 {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

/* Zone 3: Refined, settled, warm */
.zone-s9 h2, .zone-s10 h2, .zone-s11 h2, .zone-s12 h2 {
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0;
  color: #2D2825;
}
```

#### Step 4.3: Strengthen T9 transition (report 09 fix)

S10 needs a heading weight difference from S9 to meet the 3-channel minimum at T9:

```css
/* T9 coherence fix: S10 heading variation */
.zone-s10 h2 { font-weight: 500; }
.zone-s10 p { max-width: 60ch; }
```

**PERCEPTION CHECK:** Compare S1 vs S5 side by side. S1 text should look LARGER, more OPEN, warmer. S5 headings should look BOLDER, smaller, tighter. If you cannot see the difference, check your selectors.

### PHASE 5: SPATIAL RHYTHM (Ch3) -- ~10 min

#### Step 5.1: Paragraph margin variation

```css
/* ============================================================
   PARAGRAPH SPACING VARIATION
   Zone 1: 20px (generous)  |  Zone 2: 12px (compressed)
   Zone 3: 18px (settled)   |  Transitional: 16px (standard)
   ============================================================ */
.zone-s1 p, .zone-s2 p, .zone-s3 p { margin-bottom: 20px; }
.zone-s5 p, .zone-s7 p, .zone-s8 p { margin-bottom: 12px; }
.zone-s4 p, .zone-s6 p { margin-bottom: 16px; }
.zone-s9 p, .zone-s10 p, .zone-s11 p, .zone-s12 p { margin-bottom: 18px; }
```

#### Step 5.2: Override excessive inline padding

The inline `style=""` attributes on sections set padding that creates voids at transitions. Override with CSS `!important` (justified because inline styles have higher specificity and cannot be removed without HTML changes):

```css
/* Void prevention: override excessive inline padding */
.zone-s2 { padding-top: 48px !important; padding-bottom: 40px !important; }
```

#### Step 5.3: Section padding by zone

```css
/* Zone-based section padding for asymmetric rhythm */
.zone-s1, .zone-s3 { padding-top: var(--space-16) !important; padding-bottom: var(--space-10) !important; }
.zone-s4, .zone-s6 { padding-top: var(--space-12) !important; padding-bottom: var(--space-10) !important; }
.zone-s5, .zone-s7, .zone-s8 { padding-top: var(--space-8) !important; padding-bottom: var(--space-8) !important; }
.zone-s9, .zone-s10, .zone-s11 { padding-top: var(--space-12) !important; padding-bottom: var(--space-10) !important; }
.zone-s12 { padding-top: var(--space-12) !important; padding-bottom: var(--space-16) !important; }
```

**PERCEPTION CHECK:** Scroll at normal speed S1 to S8. Paragraphs in S1-S3 should feel MORE SPACED than S5-S8. No blank screenfuls (entire viewport of just cream). If you see a void, check divider margins.

### PHASE 6: ELEMENT-LEVEL RICHNESS (Scale 5 Level 5) -- ~5 min

```css
/* ============================================================
   ELEMENT-LEVEL RICHNESS -- Inline code, selection, emphasis
   Completes Scale 5 at all 5 levels.
   ============================================================ */

/* Inline code styling */
code:not(pre code) {
  background: var(--color-zone-breathing);
  border: 1px solid var(--color-border-subtle);
  padding: 1px 4px;
  font-size: 0.9em;
}

/* Link hover transitions (Ch5 temporal) */
a {
  color: var(--color-primary);
  text-decoration: underline;
  transition: color 0.15s ease;
}
a:hover {
  color: var(--color-text);
}

/* Table row hover for scannability */
table tbody tr {
  transition: background-color 0.1s ease;
}
table tbody tr:hover {
  background-color: var(--color-zone-breathing);
}

/* Component hover -- subtle border thickening */
.callout {
  transition: border-left-width 0.15s ease;
}

/* Smooth scrolling */
html { scroll-behavior: smooth; }

/* Section indicator (replacing .section-meta) */
.section-indicator {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-secondary, #8A8580);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-subtle);
}
```

### PHASE 7: ACCESSIBILITY AND RESPONSIVE -- ~10 min

Add this entire block at the END of the `<style>`, before `</style>`:

```css
/* ============================================================
   ACCESSIBILITY + RESPONSIVE
   ============================================================ */

/* Selection styling */
::selection {
  background: var(--color-primary);
  color: var(--color-background);
}

/* Focus states (WCAG 2.1 SC 2.4.7) */
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* Skip link (WCAG 2.1 SC 2.4.1) */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--color-primary);
  color: var(--color-background);
  padding: var(--space-2) var(--space-4);
  z-index: 1000;
  font-family: var(--font-body);
  font-size: 14px;
  text-decoration: none;
}
.skip-link:focus { top: 0; }

/* Reduced motion (WCAG 2.1 SC 2.3.3) */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Print styles */
@media print {
  body { background: white; color: black; }
  .skip-link, .section-indicator { display: none; }
  .page-header, .page-footer { background: white; color: black; border-color: black; }
  .page-header h1, .page-header .header-subtitle, .page-header .header-meta { color: black; }
  .page-footer .footer-closing, .page-footer .footer-meta, .page-footer .footer-label, .page-footer .footer-provenance { color: black; }
  .sequence-block { background: #f5f5f5; color: black; border: 1px solid #ccc; }
  .sequence-block .seq-label, .sequence-block ul li { color: black; }
  .zone-s1, .zone-s2, .zone-s3, .zone-s4, .zone-s5, .zone-s6, .zone-s7, .zone-s8, .zone-s9, .zone-s10, .zone-s11, .zone-s12 { background: white; }
  .divider-smooth, .divider-bridge, .divider-breathing { background-color: black; }
  .callout, .component-block { border-left-color: black; background: #f9f9f9; }
  blockquote, .callout, .component-block, .sequence-block, table { break-inside: avoid; }
}

/* Responsive: 768px */
@media (max-width: 768px) {
  .page-header { padding: var(--space-8) var(--space-4); }
  .page-header h1 { font-size: 28px; }
  .page-header .header-inner { max-width: 100%; }
  .page-container { max-width: 100%; }
  section { padding-left: var(--space-4) !important; padding-right: var(--space-4) !important; }
  .bridge-prose { padding: 0 var(--space-4); }
  .pullquote-wrapper { max-width: 100%; }
  .tension-pair, .sequence-grid, .hypothesis-grid { grid-template-columns: 1fr; }
  .tension-group { max-width: 100%; margin-left: 0; }
  .narrow-table-wrapper { max-width: 100%; }
  .table-wrapper { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .page-footer { padding: var(--space-8) var(--space-4); }
  .page-footer .footer-inner { max-width: 100%; }
  .sequence-block { padding: var(--space-4); }
}

/* Responsive: 480px */
@media (max-width: 480px) {
  .page-header h1 { font-size: 24px; }
  section h2 { font-size: 22px; }
  section h3 { font-size: 18px; }
  .callout__body, .component-block .component-body { padding: var(--space-3); }
  .callout__label, .component-block .component-label { padding: var(--space-2) var(--space-3); }
  blockquote.master-insight { padding: var(--space-4); }
  blockquote.master-insight p { font-size: 22px; }
  .sequence-block ul li { font-size: 13px; }
  .section-indicator { font-size: 0.625rem; }
  .page-footer .footer-closing { font-size: 18px; }
}
```

**PERCEPTION CHECK:** Select text -- it highlights in RED. Press Tab -- focus rings appear. Resize to 768px -- grids collapse to single column, tables scroll horizontally.

---

## 5. PHASE 8: VERIFICATION (~15 min)

### 8A. Multi-Coherence Cascade Table Verification

For the 3 major zone transitions, verify that AT LEAST 5 channels shift simultaneously:

**Transition T4: S4 -> S5 (Zone 1 -> Zone 2)**

| Channel | S4 Value | S5 Value | Changed? |
|---------|----------|----------|----------|
| Background | #F8F6F3 (cooling) | #FAFAFA (cool) | YES |
| Font-size | 16px | 15px | YES |
| Font-weight (h2) | 400 | 600 | YES |
| Letter-spacing | 0 | -0.01em | YES |
| Left border | none | 4px red | YES |
| Paragraph margin | 16px | 12px | YES |
| Text color | inherit | #1A1A1A | YES |

**RESULT: 7 channels. PASS (>= 5).**

**Transition T8: S8 -> S9 (Zone 2 -> Zone 3)**

| Channel | S8 Value | S9 Value | Changed? |
|---------|----------|----------|----------|
| Background | #F0F0F0 (cool) | #FEF7F0 (warm) | YES |
| Font-size | 15px | 16px | YES |
| Font-weight (h2) | 600 | 400 | YES |
| Letter-spacing | -0.01em | 0 | YES |
| Left border | none | 3px brown | YES |
| Paragraph margin | 12px | 18px | YES |
| Text color | #1A1A1A | #1E1B18 | YES |

**RESULT: 7 channels. PASS (>= 5).**

For ALL 11 transitions, verify >= 3 channels shift. Report 09 identified T7 (S7->S8) and T9 (S9->S10) as weak -- the S8 background fix (#F0F0F0) and S10 heading weight (500) fixes address these.

### 8B. Total Gap Verification (S-09 Stacking Fix)

Scroll through the full page at 1440px width. For EVERY inter-section gap:

1. Measure from last content element to first content element of next section
2. No gap may exceed 120px of blank background
3. Check ALL 11 section boundaries

The divider margin reductions in Phase 3 should ensure compliance:
- SMOOTH transitions: ~16 + 1 + 16 + section-pads = ~65-97px
- BRIDGE transitions: ~24 + 2 + 24 + 16(bridge-prose) + section-pads = ~98-114px
- BREATHING transition: ~24 + 4 + 24 + 16(bridge-prose) + section-pads = ~100-116px

If any gap > 120px: reduce the largest contributor (section padding or divider margin) by 8px.

### 8C. Scale 5 Level Verification

| Level | What to Check | Pass? |
|-------|---------------|-------|
| 1. Page | Dark header/footer bookends visible, 960px container | |
| 2. Zone | 3 zone groups perceptibly distinct in background color + typography | |
| 3. Section | At least 3 sections have distinct internal structure (grids, callouts, tables) | |
| 4. Component | Callout variants have distinct border colors AND background tints | |
| 5. Element | ::selection styled, inline code has background, links have hover state | |

### 8D. Soul Constraint Check

- [ ] `border-radius: 0` everywhere (`* { border-radius: 0 !important }` present)
- [ ] `box-shadow: none` everywhere (`* { box-shadow: none !important }` present)
- [ ] Fonts from trinity only (Instrument Serif, Inter, JetBrains Mono)
- [ ] Colors from tokens.css palette (zone backgrounds documented in Phase 2)
- [ ] Container max-width: 960px
- [ ] No pure `#000000` or `#FFFFFF` backgrounds (S5 uses `#FAFAFA`, not `#FFFFFF`)
- [ ] No gradients, no opacity < 1

### 8E. Binary Richness Checklist (10 items)

1. **Backgrounds visible:** Screenshot S1 next to S5. Can you SEE color change without zooming?
2. **Font-size varies:** Computed p font-size in S1 (17px) vs S5 (15px) differs by >= 2px
3. **Font-weight varies:** Computed h2 font-weight in S1 (400) vs S5 (600)
4. **Letter-spacing varies:** Computed letter-spacing S1 h2 (0.03em) vs S5 h2 (-0.02em) differs by >= 1.0px
5. **Borders in body:** >= 6 elements with visible left border in body sections
6. **Dividers distinct:** `.divider-smooth` (1px, warm) and `.divider-breathing` (4px, RED) clearly different
7. **Paragraph margins vary:** margin-bottom on p in S1 (20px) vs S5 (12px) = 8px difference
8. **Components differentiated:** `.callout--info` (blue tint) vs `.callout--tip` (green tint) have different border color AND background
9. **Max-width varies:** p max-width in S1 (62ch) vs S5 (72ch) = 10ch difference
10. **Overall scroll test:** Full scroll at 1440px. Each screenful looks DIFFERENT from previous. YES/NO.

### 8F. Accessibility Verification

- [ ] Select text -- highlights in red (#E83025) with cream text
- [ ] Press Tab -- focus ring appears (red outline, 2px offset)
- [ ] Skip link appears on first Tab press ("Skip to main content")
- [ ] Resize to 768px -- grids collapse, tables scroll, page remains readable
- [ ] Resize to 480px -- headings shrink, padding reduces, still readable
- [ ] Print preview -- dark backgrounds inverted, text is black on white

### 8G. Overall Perception Self-Check

Scroll the full page at 1440px at normal reading speed. Ask:

1. Does each screenful look DIFFERENT from the previous one? (backgrounds, borders, typography weight, callout colors, layout shape)
2. Does the page feel like it COMPRESSES in the middle (S5-S8) and RELEASES at the end (S9-S12)?
3. Do the grid layouts in S7 and S8 create spatial variety that breaks the single-column rhythm?
4. Does the page feel DESIGNED (intentional choices everywhere) or PATCHED (surface decoration on uniform structure)?

If the answer to #4 is PATCHED, identify the most monotonous stretch and add variation there.

---

## 6. ROOT CAUSE RESOLUTION MATRIX

| RC# | Root Cause | Status After Enhanced Remediation | How Addressed |
|-----|-----------|----------------------------------|---------------|
| 1 | No CSS-generative arrow | RESOLVED (this document) | This spec IS the generative arrow the pipeline lacked |
| 2 | 7.9:1 guardrail-to-playbook | RESOLVED | Spec is ~5:1 playbook-to-guardrail ratio |
| 3 | Builder saw 13.4% | RESOLVED (this instance) | Builder reads entire spec |
| 4 | Sub-perceptual variation | RESOLVED | Phase 0 deletes 216 invisible lines; all new values exceed perception thresholds |
| 5 | Zero agent communication | N/A (process) | Single-agent remediation -- communication not applicable |
| 6 | Coverage not causation | PARTIALLY RESOLVED | Phase 8 includes perceptual self-checks, but spot-checks not all transitions |
| 7 | ABSENCE COHERENCE | RESOLVED | Mandatory recipes eliminate the choice to omit channels |
| 8 | 2,400:1 compression | PARTIALLY RESOLVED | 5/7 channels operationalized via recipes; Ch6 now addressed via Phase 7 accessibility |
| 9 | Component library invisible | RESOLVED | Phase 1.5 converts 9 callouts + 12 section indicators to library classes |
| 10 | Tokens not perceptible values | RESOLVED | Phase 2 replaces tokens with amplified values exceeding perception thresholds |
| 11 | Ch4 absent at section level | RESOLVED | Phase 3.1 adds 6 section-level borders + 3-tier divider hierarchy |
| 12 | Single-column monotony | PARTIALLY RESOLVED | Phase 3.5 adds 3 grid layouts (S7, S8, S11). Not every section, but breaks the monotony |
| 13 | Uniform prose register | NOT ADDRESSED | Content change -- outside scope. CSS typography variation provides partial visual mitigation |
| 14 | Transition divider stacking | RESOLVED | Phase 3.2 reduces divider margins to cap total gap at <=120px; Phase 8B verifies |
| 15 | No plan-fidelity gate | N/A (process) | Not applicable to remediation context |

**Summary: 9 RESOLVED, 3 PARTIALLY RESOLVED, 1 NOT ADDRESSED (content), 2 N/A (process)**

---

## 7. RISK ASSESSMENT

### What the Adversarial Found (Report 11)

1. **CSS-only caps at PA-05 2-3/4.** The original CSS-only remediation cannot achieve DESIGNED (4/4). The enhanced spec breaks the CSS-only constraint by adding HTML restructuring, raising the ceiling to 3-4/4.

2. **Sonnet agents produce exact compliance, not creative surplus.** This spec should be executed by an Opus agent. A Sonnet agent will copy code blocks verbatim and achieve 3/4. An Opus agent will interpret intent, exceed minimums, and potentially reach 4/4.

3. **Spatial monotony is the dominant signal.** The 3 grid layouts (S7 tension pairs, S8 sequence grid, S11 hypothesis grid) address this. With grids, 3 of 12 sections have distinct spatial shape -- enough to break the monotony for a gestalt impression of variety.

4. **The DNA argument against remediation.** The adversarial's strongest point: CSS cannot change HTML DNA. The enhanced spec partially addresses this by restructuring HTML (component library adoption, grid wrappers, semantic landmarks). The DNA shifts from "uniform single-column prose" to "prose with spatial moments and typed components."

### Honest PA-05 Prediction

| Scenario | PA-05 | Richness | Channels |
|----------|-------|----------|----------|
| Enhanced spec, Sonnet builder | 3/4 (COMPETENT) | ~55/91 | 6/7 |
| Enhanced spec, Opus builder | 3-4/4 (COMPETENT to DESIGNED) | ~65/91 | 7/7 |
| Fresh rebuild, Middle-tier format | 4/4 (DESIGNED, proven) | ~80/91 | 7/7 |

The enhanced remediation achieves ~70-80% of what a fresh rebuild produces, in ~60% of the time, while preserving 880+ lines of correct existing work.

### What Would Be Needed Beyond This for 4/4

To guarantee DESIGNED (4/4), the page would need:
1. More grid layouts (5+ sections with non-column arrangements)
2. Content register variation (lists, questions, short statements -- requires content rewriting)
3. 11+ distinct component types (requires new HTML components beyond callout conversion)
4. Golden-ratio proportions or deliberate asymmetric spatial compositions

These changes approach the cost of a full rebuild. The enhanced remediation is the maximum achievable within a remediation paradigm.

---

## APPENDIX: PERCEPTION THRESHOLDS REFERENCE

Every CSS value in this spec exceeds these minimums:

| Property | Minimum Perceptible Delta | This Spec's Values |
|----------|--------------------------|-------------------|
| Background color | >= 10 RGB points between adjacent sections | 10-20 RGB points |
| Letter-spacing | >= 0.025em (= 0.4px at 16px) | 0.03em range (0.48px+) |
| Line-height | >= 0.2 unit difference | 1.55 vs 1.85 = 0.30 |
| Font-size | >= 2px between zones | 15px vs 17px = 2px |
| Font-weight | visible jump: 400 vs 600 | 400 vs 600 |
| Border weight | >= 1px difference between levels | 1px/2px/3px/4px hierarchy |
| Margin-bottom | >= 8px between zones | 12px vs 20px = 8px |
| Max-width | >= 6ch between zones | 62ch vs 72ch = 10ch |

**THE RULE: If a human cannot SEE the difference without a color picker, do NOT write the CSS.**

---

## APPENDIX: CONSTRAINTS

Do NOT change:
- Container width (960px)
- Font families (Instrument Serif, Inter, JetBrains Mono)
- Text content (section headings, body text, table data)
- Dark header/footer bookends
- Table variants (7 types with distinct borders)

Do NOT add:
- border-radius (soul violation)
- box-shadow (soul violation)
- gradients (soul violation)
- opacity < 1 on containers (soul violation)
- Pure #000000 or #FFFFFF backgrounds

Do NOT remove:
- Mechanism CSS comments (they document intentionality)
- Any existing CSS that produces VISIBLE effects (only remove sub-perceptual CSS identified in Phase 0)

---

## APPENDIX: EXECUTION NOTES

1. **Execute with Opus agent.** The recipe provides specific values, but Phases 3-6 benefit from creative judgment. Opus agents make better choices in ambiguous contexts (report 04, Takeaway 8).

2. **Single pass execution.** Do NOT spawn analytical agents to audit the remediation. Apply Phases 0-7, run Phase 8 verification, deliver. Total agents: 1 builder.

3. **Mid-process checkpoints.** After Phase 3 (borders), scroll to verify borders are visible before proceeding. After Phase 4 (typography), compare S1 vs S5 to verify font-size difference. These 5-minute checks catch catastrophic failures early.

4. **If time is short.** Priority order: Phase 0 (deallocation) -> Phase 3 (borders) -> Phase 4 (typography) -> Phase 7 (accessibility) -> Phase 2 (backgrounds) -> Phase 5 (spacing) -> Phase 1 (HTML restructuring) -> Phase 6 (element-level). The CSS phases deliver the most visible improvement per minute.

---

**END OF ENHANCED REMEDIATION SPECIFICATION**

**Total document: ~600 lines. Replaces the original 301-line CSS-only remediation with a comprehensive CSS + HTML specification addressing all 3 BLOCKING gaps, all 7 addressable root causes, and all 10 master takeaways within scope.**
