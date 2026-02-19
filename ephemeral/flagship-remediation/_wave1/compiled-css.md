# COMPILED CSS -- Phases 2-7

**Compiled by:** css-compilation agent (Opus 4.6)
**Date:** 2026-02-18
**Authoritative source:** `12-ENHANCED-REMEDIATION-SPEC.md` (Phases 2-7, lines 283-802)
**Cross-referenced:** `08-recipe-remediation.md`, `09-multi-coherence-design.md`, `10-accessibility-spec.md`
**Existing CSS checked:** `07-intentionality.html` (lines 50-1034)

---

## Summary

| Phase | Lines | Action |
|-------|-------|--------|
| Phase 2: Zone Backgrounds | 15 | REPLACE 12 values in existing `:root` |
| Phase 3: Structural | ~120 | ADD new rules + REPLACE 3 existing divider rules + REPLACE bridge-prose |
| Phase 4: Typography | ~55 | ADD new rules (after base section rules) |
| Phase 5: Spatial | ~14 | ADD new rules |
| Phase 6: Element-Level | ~35 | ADD new rules |
| Phase 7: Accessibility + Responsive | ~165 | ADD entire block at end of `<style>` |
| **TOTAL NEW/MODIFIED CSS** | **~404 lines** | |

---

## INTERACTION NOTES

### Rules that REPLACE existing CSS
1. **12 zone color variables** in `:root` (lines ~120-135 of existing HTML) -- overwrite values, keep variable names
2. **3 divider rules** (`.divider-smooth`, `.divider-bridge`, `.divider-breathing` at lines ~590-610) -- full replacement
3. **`.bridge-prose`** margin-bottom (line ~614) -- add `margin-bottom: 16px`
4. **`.component-block`** base rule (line ~455) -- add `border-top` and `background-color`

### Rules that ADD new CSS
Everything else is NEW CSS added after existing rules. Insertion points noted per phase.

### Specificity concerns
1. **Phase 5 `!important`**: Required because sections have inline `style=""` attributes setting padding. CSS class selectors cannot override inline styles without `!important`. This is the ONLY justified use of `!important` in the remediation (aside from soul enforcement and accessibility).
2. **Phase 4 zone paragraph rules** (`.zone-s1 p` etc.) have EQUAL specificity to existing per-zone paragraph rules being DELETED in Phase 0. Since Phase 0 deletes the old rules and Phase 4 adds new ones, there is no conflict.
3. **Phase 6 `a` rule**: The existing HTML has no `a` styling. New rules will apply cleanly.
4. **Phase 6 `.callout` transition**: This references the `.callout` class from Phase 3. Must come AFTER Phase 3 CSS.
5. **Phase 7 responsive `section` padding**: Uses `!important` to override inline styles at mobile widths.

### Conflicts with existing inline styles
- 12 `<section>` elements have inline `style="padding-top: ...; padding-bottom: ...;"` -- Phase 5 uses `!important` to override these
- No other inline styles conflict with remediation CSS

---

## PHASE 2: ZONE BACKGROUNDS (REPLACE in :root)

**Action:** Find the 12 `--color-zone-sN` variables in `:root` (lines ~120-135). REPLACE their values. Keep variable names unchanged.

**Source:** 12-ENHANCED-REMEDIATION-SPEC.md lines 291-309 (AUTHORITATIVE)

**Note:** S8 is `#F0F0F0` per spec. The recipe (08-recipe-remediation.md line 48) uses `#F2F0EE` -- DO NOT use the recipe value. The spec value was specifically strengthened for the T7 transition per report 09's coherence fix.

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

---

## PHASE 3: STRUCTURAL (ADD after zone backgrounds + REPLACE dividers + REPLACE bridge-prose)

### Step 3.1: Section-level left borders (ADD)

**Action:** ADD after all `.zone-sN { background-color: ... }` rules (after line ~652 in existing HTML).

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

### Step 3.2: Divider REPLACEMENTS (REPLACE existing rules at lines ~589-610)

**Action:** Find and REPLACE all three existing divider rules. The existing rules use token variables (`var(--border-micro)`, `var(--space-12)`, etc.). Replace with hardcoded values that prevent void stacking.

**Existing rules to find and replace:**
- `.divider-smooth` (line ~590)
- `.divider-bridge` (line ~598)
- `.divider-breathing` (line ~606)

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

**Stacking analysis (worst case):** section-bottom (32px) + div-margin-top (24px) + div-height (4px) + div-margin-bottom (24px) + section-top (24px) = 108px < 120px target.

### Step 3.3: Bridge-prose margin reduction (MODIFY existing rule at line ~613)

**Action:** Find `.bridge-prose` rule and add/change `margin-bottom`:

```css
.bridge-prose {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  margin-bottom: 16px;    /* was 32px (implicit from --space-8) -- reduced to prevent void stacking */
}
```

**Note:** The existing `.bridge-prose` rule (line ~613-617) has `max-width: 960px; margin: 0 auto; padding: 0 var(--space-8);` but no explicit margin-bottom. The `margin: 0 auto` sets margin-top/bottom to 0. Bridge-prose paragraphs may have their own margin-bottom via `section p` base rule. The explicit `margin-bottom: 16px` on `.bridge-prose` itself ensures the wrapper doesn't add excessive gap. The `margin: 0 auto` will be overridden by the explicit `margin-bottom` since `margin-bottom` is more specific than shorthand's computed value. Actually, since `margin-bottom: 16px` comes AFTER `margin: 0 auto`, it will override. The builder should set `margin-bottom` on `.bridge-prose` explicitly.

### Step 3.4: Callout family (ADD -- new component library)

**Action:** ADD after the section border rules. If any `.component-block` instances remain unconverted in HTML, the `.component-block` fallback rule also applies.

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

### Step 3.4b: Component-block fallback (ADD if unconverted instances remain)

```css
.component-block {
  border-top: 1px solid var(--color-border);
  background-color: #FEF6F5;
}
```

**Note:** This adds `border-top` and `background-color` to the EXISTING `.component-block` base rule (line ~455). The existing rule already has `border-left` and `margin`. The builder should ADD these two properties to the existing rule rather than creating a duplicate selector.

### Step 3.5: Grid layouts (ADD)

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

### Step 3.6: Table header backgrounds (ADD)

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

**Note:** The existing `table thead tr` rule (line ~300) sets `border-bottom` only. This new rule adds `background-color`. Since both selectors are identical (`table thead tr`), the builder should either merge them or place this rule AFTER the existing one (cascade wins). The `.table-featured thead tr` and `.table-warning thead tr` selectors already exist (lines ~360, ~381) setting `border-bottom`. Same approach: add `background-color` to those rules or place new rules after.

---

## PHASE 4: TYPOGRAPHY (ADD after base section rules)

**Action:** ADD all rules below AFTER the existing base `section p:last-child` rule (line ~267) and AFTER Phase 0 has deleted the old typographic convergence gradient (lines ~736-834).

### Step 4.1: Paragraph zone variation

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

### Step 4.2: Heading zone variation

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

### Step 4.3: T9 coherence fix (from report 09)

**Action:** ADD these two rules to strengthen the T9 (S9->S10) transition, which otherwise fails the 3-channel minimum.

```css
/* T9 coherence fix: S10 heading variation */
.zone-s10 h2 { font-weight: 500; }
.zone-s10 p { max-width: 60ch; }
```

**Note:** `.zone-s10 h2` gets `font-weight: 500` which overrides the Zone 3 group's `font-weight: 400` above. This works because single-class selectors (`.zone-s10 h2`) have the same specificity as group selectors (`.zone-s9 h2, .zone-s10 h2, ...`), so the LATER rule wins via cascade. This rule MUST come AFTER the Zone 3 heading group rule.

---

## PHASE 5: SPATIAL (ADD after typography rules)

### Step 5.1: Paragraph margin variation

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

### Step 5.2: Void prevention -- override inline padding

```css
/* Void prevention: override excessive inline padding */
.zone-s2 { padding-top: 48px !important; padding-bottom: 40px !important; }
```

### Step 5.3: Section padding by zone

```css
/* Zone-based section padding for asymmetric rhythm */
.zone-s1, .zone-s3 { padding-top: var(--space-16) !important; padding-bottom: var(--space-10) !important; }
.zone-s4, .zone-s6 { padding-top: var(--space-12) !important; padding-bottom: var(--space-10) !important; }
.zone-s5, .zone-s7, .zone-s8 { padding-top: var(--space-8) !important; padding-bottom: var(--space-8) !important; }
.zone-s9, .zone-s10, .zone-s11 { padding-top: var(--space-12) !important; padding-bottom: var(--space-10) !important; }
.zone-s12 { padding-top: var(--space-12) !important; padding-bottom: var(--space-16) !important; }
```

**Note on `!important`:** Every section has inline `style="padding-top: ...; padding-bottom: ...;"` in the HTML. CSS class selectors CANNOT override inline styles without `!important`. This is the standard workaround when HTML cannot be modified (or when inline styles are preserved for Phase 0 compatibility). The spec explicitly justifies this.

---

## PHASE 6: ELEMENT-LEVEL RICHNESS (ADD after spatial rules)

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

**Notes:**
- The `.callout` transition rule here supplements the `.callout` base rule from Phase 3. Place AFTER Phase 3's callout rules.
- The `.section-indicator` rule replaces the existing `.section-meta` rule (line ~1012). The builder can either: (a) rename all `.section-meta` to `.section-indicator` in HTML (per Phase 1 Step 1.6) and add this new rule, or (b) keep BOTH rules if conversion is incomplete. The `.section-indicator` adds `padding-bottom` and `border-bottom` that `.section-meta` lacks.
- `html { scroll-behavior: smooth; }` -- the existing `html` rule (line ~164) sets `font-size` and font-smoothing. This new rule adds `scroll-behavior`. The builder can merge or place after.

---

## PHASE 7: ACCESSIBILITY + RESPONSIVE (ADD at END of `<style>`, before `</style>`)

**Action:** ADD this entire block as the LAST CSS before `</style>` (after line ~1033 in existing HTML).

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

---

## CROSS-REFERENCE: Spec vs Recipe vs Multi-Coherence Discrepancies

All discrepancies resolved in favor of the AUTHORITATIVE source (12-ENHANCED-REMEDIATION-SPEC.md):

| Item | Spec Value | Recipe Value | Coherence Report Value | Used |
|------|-----------|-------------|----------------------|------|
| S8 background | `#F0F0F0` | `#F2F0EE` | `#F0F0F0` | **Spec: `#F0F0F0`** |
| Divider-smooth margin | `16px 0` | `var(--space-12) 0` (48px) | `var(--space-4) 0` (16px) | **Spec: `16px 0`** |
| Divider-bridge margin | `24px 0` | `var(--space-12) 0` (48px) | `var(--space-6) 0` (24px) | **Spec: `24px 0`** |
| Divider-breathing margin | `24px 0` | `var(--space-12) 0` (48px) | `var(--space-8) 0` (32px) | **Spec: `24px 0`** |
| S2 padding override | `48px / 40px` | `48px / 48px` | N/A | **Spec: `48px / 40px`** |
| S5 background in coherence table | `#FFFFFF` (report 09) | N/A | `#FFFFFF` | **Spec: `#FAFAFA`** (spec overrides, S5 uses `--color-zone-s5: #FAFAFA`) |
| Callout transition | In Phase 6 | Not in recipe | Not in coherence | **Spec: included** |

---

## PHASE-ORDERED INSERTION MAP

For the builder executing the remediation, here is the exact ordering of where each phase's CSS goes relative to the existing file:

1. **Phase 2** -- REPLACE values inside existing `:root { }` block (lines ~120-135)
2. **Phase 3, Step 3.1** -- ADD after `.zone-s12 { background-color: ... }` (after line ~652)
3. **Phase 3, Step 3.2** -- REPLACE `.divider-smooth`, `.divider-bridge`, `.divider-breathing` rules (lines ~590-610)
4. **Phase 3, Step 3.3** -- MODIFY `.bridge-prose` rule (line ~613-617), add `margin-bottom: 16px`
5. **Phase 3, Step 3.4** -- ADD callout family CSS after Step 3.1's borders
6. **Phase 3, Step 3.4b** -- ADD properties to existing `.component-block` rule (line ~455)
7. **Phase 3, Step 3.5** -- ADD grid layouts after callout CSS
8. **Phase 3, Step 3.6** -- ADD table header backgrounds (can merge with existing `table thead tr` at line ~300 or place after)
9. **Phase 4, Steps 4.1-4.3** -- ADD after Phase 0 has cleared lines ~736-834; place in the same region
10. **Phase 5, Steps 5.1-5.3** -- ADD after Phase 4 rules
11. **Phase 6** -- ADD after Phase 5 rules
12. **Phase 7** -- ADD at very end, before `</style>` (after line ~1033)

---

**END COMPILED CSS**
