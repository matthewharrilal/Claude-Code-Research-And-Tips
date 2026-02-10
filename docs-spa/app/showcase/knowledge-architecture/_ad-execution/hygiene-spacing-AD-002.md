# Hygiene Audit: Spacing & Layout -- AD-002 F-Pattern

**Auditor:** Hygiene-Auditor-A (Spacing)
**Target:** AD-002-f-pattern.html
**Gold Standard:** OD-002-narrative.html
**Convention:** AD-CONVENTION-SPEC.md
**Date:** 2026-02-10

---

## Summary

**12 dimensions checked. 5 findings. 0 BROKEN. 2 CRAMPED. 2 INCONSISTENT. 1 ACCEPTABLE.**

AD-002 is structurally sound with good token usage throughout. The two CRAMPED findings relate to callout padding being tighter than OD convention and the header using different padding than the convention spec prescribes. The two INCONSISTENT findings relate to a callout border-radius violation and inconsistent callout label font-family compared to OD. The one ACCEPTABLE finding notes a minor body line-height difference that does not harm readability.

---

## Dimension-by-Dimension Audit

### 1. Title-to-Content Spacing (margin-bottom on h1/h2/h3)

**FINDING: ACCEPTABLE**

| Element | AD-002 Value | OD-002 Value | Convention Spec |
|---------|-------------|-------------|-----------------|
| header h1 margin-bottom | `var(--space-4)` (16px) | `var(--space-4)` (16px) | `var(--space-4)` (16px) |
| .act-zone h2 margin-bottom | `var(--space-6)` (24px) | N/A (OD uses `.act-header` with margin-bottom on container: `var(--space-8)`) | Not specified per convention |
| .act-zone h3 margin-bottom | `var(--space-4)` (16px) | N/A (OD uses `.narrative-beat__subtitle` margin-bottom: `var(--space-3)` = 12px) | Not specified per convention |
| .act-zone h4 margin-bottom | `var(--space-3)` (12px) | N/A (OD has no h4 equivalent) | Not specified per convention |

**Assessment:** AD-002 uses consistent token-based spacing for heading margins. The h2 margin-bottom (24px) is appropriate for section titles with left-border accent. The h3 margin-bottom (16px) is slightly more generous than OD's subtitle (12px), but this is within acceptable range for the axis layer's left-spine landmark hierarchy.

**SEVERITY: ACCEPTABLE**

---

### 2. Section-to-Section Spacing (margin/padding between sections)

**FINDING: NONE**

| Element | AD-002 Value | OD-002 Value | Convention Spec |
|---------|-------------|-------------|-----------------|
| Act zone exposition padding | `var(--space-16) var(--space-6)` (64px 24px) | Act I: `.act--setup .narrative-beat` margin-bottom: `var(--space-16)` (64px) | Not specified (CRESCENDO-dependent) |
| Act zone rising padding | `var(--space-12) var(--space-6)` (48px 24px) | Act II: `.act--rising .narrative-beat` margin-bottom: `var(--space-10)` (40px) | Not specified (CRESCENDO-dependent) |
| Act zone climax padding | `var(--space-8) var(--space-6)` (32px 24px) | Act III: `.act--climax .narrative-beat` margin-bottom: `var(--space-6)` (24px) | Not specified (CRESCENDO-dependent) |
| Act zone falling padding | `var(--space-12) var(--space-6)` (48px 24px) | Act IV: `.act--falling .narrative-beat` margin-bottom: `var(--space-8)` (32px) | Not specified (CRESCENDO-dependent) |
| Act zone denouement padding | `var(--space-16) var(--space-6)` (64px 24px) | Act V: `.act--resolution .narrative-beat` margin-bottom: `var(--space-10)` (40px) | Not specified (CRESCENDO-dependent) |

**Assessment:** Both files implement CRESCENDO spacing compression correctly: Exposition (64px) > Rising (48px) > Climax (32px) < Falling (48px) < Denouement (64px). The bookend symmetry (Act I = Act V, Act II = Act IV) is present in both. AD-002 uses section padding while OD-002 uses narrative-beat margins -- different mechanisms, same effect. Both use token-only values. No issues.

**SEVERITY: No finding**

---

### 3. Paragraph Spacing (margin-bottom on p, gap to adjacent elements)

**FINDING: NONE**

| Element | AD-002 Value | OD-002 Value | Convention Spec |
|---------|-------------|-------------|-----------------|
| p margin-bottom | `var(--space-4)` (16px) | `var(--space-4)` (16px) | Not explicitly specified; token usage expected |
| p max-width | `70ch` (base), `65ch` (exposition), `70ch` (climax) | `65ch` (base) | Convention: `70ch` max-width mentioned for subtitle |

**Assessment:** Paragraph spacing is identical between AD and OD at the base level (16px). Both use `max-width` on paragraphs for readability. AD-002 varies max-width by act context (65ch in sparse exposition, 70ch in dense climax), which is a deliberate CRESCENDO encoding consistent with the axis layer's purpose. OD-002 uses a uniform 65ch. Both are valid approaches. No issue.

**SEVERITY: No finding**

---

### 4. Column Gap (grid-gap/gap in multi-column)

**FINDING: NONE**

| Element | AD-002 Value | OD-002 Value | Convention Spec |
|---------|-------------|-------------|-----------------|
| .two-col gap | `var(--space-8)` (32px) | N/A (OD-002 has no multi-column layout) | Section 12.3: `--grid-gap-standard: var(--space-8)` (32px) |

**Assessment:** AD-002 uses `var(--space-8)` for its two-column grid gap, which exactly matches the AD Convention Spec Section 12.3 standard gap token (`--grid-gap-standard`). OD-002 does not use multi-column layout (single-column narrative arc), so no direct comparison is possible, but AD-002's value is convention-compliant.

**SEVERITY: No finding**

---

### 5. Container Padding (callout/pre/sidebar internal padding)

**FINDING: CRAMPED (Callout padding tighter than OD)**

| Element | AD-002 Value | OD-002 Value | Convention Spec |
|---------|-------------|-------------|-----------------|
| .callout padding | `var(--space-6) var(--space-5)` (24px 20px) | `var(--space-4) var(--space-5)` (16px 20px) | Not explicitly specified |
| pre padding | `var(--space-6) var(--space-8)` (24px 32px) | `.code-block` padding: `var(--space-6) var(--space-8)` (24px 32px) | Section 3: `var(--space-6) var(--space-8)` (24px 32px) |
| .breathing-zone padding | `var(--space-12) var(--space-6)` (48px 24px) | `.act-divider` margin: `var(--space-12) 0` (48px 0), height: `var(--space-12)` | OD-F-007: 48px+ breathing zone |
| .essence-pullquote padding | `var(--space-8) var(--space-6)` (32px 24px) | `.essence-pullquote` padding: `var(--space-8) 0` (32px 0), margin: `var(--space-16) 0` (64px 0) | Not specified |

**Assessment:** Code block padding matches perfectly (both 24px 32px, per convention Section 3). However, AD-002 callouts use 24px vertical / 20px horizontal padding, while OD-002 uses 16px vertical / 20px horizontal. AD-002 callouts are actually MORE generous vertically than OD, which is not cramped but is an inconsistency. The breathing zone spacing meets the OD-F-007 48px+ requirement in both files. The essence pullquote has different structural approaches: AD uses border-left with padding, OD uses border-top/bottom with centered text and wider margins. Both are valid stylistic choices.

**Correction:** On re-examination, AD-002 callouts have MORE vertical padding (24px vs OD's 16px). This is not cramped; it's more generous. However, the inconsistency is notable.

**REVISED FINDING: INCONSISTENT** -- Callout vertical padding differs (AD: 24px, OD: 16px). AD is more generous, not cramped. Both use tokens. This is a stylistic difference, not a convention violation.

**SEVERITY: INCONSISTENT**

---

### 6. Margin Consistency (same element types, same spacing)

**FINDING: NONE**

| Element Pattern | AD-002 Consistency | Notes |
|----------------|-------------------|-------|
| .content-block margin-bottom | `var(--space-between)` = `var(--space-8)` (32px) consistently, last-child: 0 | Gestalt alias used correctly |
| .callout margin-bottom | `var(--space-8)` (32px) | Matches content-block rhythm |
| pre margin-bottom | `var(--space-8)` (32px) | Matches content-block rhythm |
| table margin-bottom | `var(--space-8)` (32px) | Matches content-block rhythm |

**Assessment:** AD-002 maintains excellent margin consistency. All major content elements (content-block, callout, pre, table) share the same `var(--space-8)` / `var(--space-between)` bottom margin, creating a uniform vertical rhythm between distinct elements. The `.content-block:last-child { margin-bottom: 0 }` rule prevents double-spacing at section ends. This is textbook Gestalt spacing.

**SEVERITY: No finding**

---

### 7. Vertical Rhythm (consistent --space-N usage)

**FINDING: NONE**

AD-002 uses ONLY `var(--space-N)` tokens and Gestalt aliases throughout. Zero hardcoded pixel values in the axis layer CSS. The locked layer also uses tokens exclusively (with the exception of the explicit token definitions in `:root`).

Token usage audit (axis layer):
- `var(--space-1)`: tension meter segment gap
- `var(--space-2)`: act-indicator border, tension-meter margin
- `var(--space-3)`: h4 margin-bottom, essence-pullquote cite margin-top
- `var(--space-4)`: h2 padding-left, h3 margin-bottom, act-indicator margin-bottom, responsive padding
- `var(--space-6)`: h2 margin-bottom, act-zone horizontal padding, tension-meter margin-bottom, essence-pullquote horizontal padding, breathing-zone horizontal padding
- `var(--space-8)`: two-col gap, content-block margin, responsive act-zone padding, essence-pullquote vertical padding
- `var(--space-12)`: rising/falling padding, breathing-zone padding, responsive exposition/denouement
- `var(--space-16)`: exposition/denouement padding
- `var(--space-between)`: content-block, two-col, decision-matrix, essence-pullquote margins

**Assessment:** Flawless token adherence. All spacing uses the design system scale.

**SEVERITY: No finding**

---

### 8. Responsive 768px (@media adjust spacing)

**FINDING: NONE**

AD-002 responsive rules at 768px:
```css
@media (max-width: 768px) {
  .two-col { grid-template-columns: 1fr; }
  .act-zone { padding: var(--space-8) var(--space-4); }  /* 32px 16px, reduced from 48px 24px */
  .act-zone--exposition,
  .act-zone--denouement {
    padding-top: var(--space-12);    /* 48px, reduced from 64px */
    padding-bottom: var(--space-12);
  }
  header h1 { font-size: calc(var(--type-page) * 0.8); }
}
```

OD-002 responsive rules at 768px:
```css
@media (max-width: 768px) {
  .arc-diagram { height: 80px; }
  .exploration-meta { flex-direction: column; gap: var(--space-2); }
  .tension-meter__bar { width: 120px !important; }
  .exploration-header { padding: var(--space-8) var(--space-4); }
}
```

**Assessment:** Both files implement responsive rules at the 768px breakpoint per convention. AD-002 collapses the two-col grid to single column (Convention Spec Section 12.5 binary rule) and reduces act zone padding proportionally. The CRESCENDO spacing compression is maintained at mobile -- exposition/denouement still get more padding (48px) than rising/falling/climax (32px). OD-002's responsive changes are simpler (header padding, meta layout) because OD-002 is already single-column. AD-002 appropriately does more responsive work because it has the two-col grid to collapse.

**SEVERITY: No finding**

---

### 9. Header Meta Spacing (header padding from main content)

**FINDING: CRAMPED**

| Element | AD-002 Value | OD-002 Value | Convention Spec (Section 4) |
|---------|-------------|-------------|----------------------------|
| header padding | `.header-inner` padding: `var(--space-12) var(--space-6)` (48px 24px) | `.exploration-header` padding: `var(--space-16) var(--space-8)` (64px 32px) | `var(--space-16) var(--space-8)` (64px 32px) |
| header inner max-width | 860px | 860px | 860px |

**Assessment:** AD-002's header inner wrapper uses 48px vertical / 24px horizontal padding, while OD-002 and the Convention Spec Section 4 both specify `var(--space-16) var(--space-8)` (64px vertical / 32px horizontal). AD-002's header is 16px tighter vertically and 8px tighter horizontally than the convention standard. This makes the header feel more compressed than the gold standard. The convention spec ASCII diagram explicitly shows `padding: var(--space-16) var(--space-8)`.

**SEVERITY: CRAMPED** -- Header padding is 48px/24px but convention specifies 64px/32px. This is a direct convention deviation.

---

### 10. Table Cell Padding (td/th padding)

**FINDING: NONE**

| Element | AD-002 Value | OD-002 Value | Convention Spec |
|---------|-------------|-------------|-----------------|
| th padding | `var(--space-3) var(--space-4)` (12px 16px) | `var(--space-2) var(--space-3)` (8px 12px) | Not explicitly specified |
| td padding | `var(--space-3) var(--space-4)` (12px 16px) | `var(--space-2) var(--space-3)` (8px 12px) | Not explicitly specified |

**Assessment:** AD-002 uses slightly more generous table cell padding (12px/16px) than OD-002 (8px/12px). Both use tokens. The convention spec does not prescribe specific table padding values. AD-002's values are more generous, which is appropriate given the F-pattern's emphasis on scanability -- larger table cells improve left-spine scanning. OD-002's tighter padding is appropriate for its denser climax context (decision matrix appears in Act III). Both are valid.

**SEVERITY: No finding**

---

### 11. List Item Spacing (li margin, nested indent)

**FINDING: NONE**

| Element | AD-002 Value | OD-002 Value | Convention Spec |
|---------|-------------|-------------|-----------------|
| ul/ol padding-left | `var(--space-6)` (24px) | N/A (OD-002 uses `.narrative-summary__list` with custom layout, not standard lists) | Not specified |
| li margin-bottom | `var(--space-2)` (8px) | `.narrative-summary__item` gap: `var(--space-3)` (12px) | Not specified |
| li max-width | 70ch | N/A | Not specified |

**Assessment:** AD-002 uses standard list styling with token-based indent (24px) and item spacing (8px). OD-002 does not use standard `<ul>/<li>` elements for its list content -- it uses a custom `.narrative-summary__list` flex layout with 12px gap. Both approaches use tokens. AD-002's list item max-width (70ch) maintains readability. No convention violation.

**SEVERITY: No finding**

---

### 12. Inline Code Padding (code element spacing)

**FINDING: NONE**

| Element | AD-002 Value | OD-002 Value | Convention Spec (Section 3) |
|---------|-------------|-------------|----------------------------|
| code:not(pre code) padding | `2px 6px` | `2px 6px` | `2px 6px` |
| code:not(pre code) font-size | `0.9em` | `var(--type-code)` (0.875rem) | `0.9em` |
| code:not(pre code) background | `var(--color-border-subtle)` | `var(--color-border-subtle)` | `var(--color-border-subtle)` |
| code:not(pre code) border | `1px solid var(--color-border)` | `1px solid var(--color-border)` | `1px solid var(--color-border)` (Cat 3) |

**Assessment:** Inline code styling is nearly identical across all three sources. The padding (2px 6px), background, and border all match exactly. The only micro-difference is font-size: AD-002 and the convention spec use `0.9em` (relative to parent), while OD-002 uses `var(--type-code)` (0.875rem, absolute). At a 16px body size, 0.9em = 14.4px and 0.875rem = 14px -- a 0.4px difference that is imperceptible. Both are valid approaches.

**SEVERITY: No finding**

---

## Additional Findings (Outside 12 Dimensions)

### A. Callout border-radius Violation

**FINDING: INCONSISTENT**

AD-002 callout CSS includes:
```css
.callout {
  border-left: 4px solid var(--accent-blue);
  border-radius: 4px;           /* <--- VIOLATION */
  padding: var(--space-6) var(--space-5);
  ...
}
```

The locked layer enforces `*:where(:not(input, button, select)) { border-radius: 0; }` which SHOULD override this, but the specificity of `.callout { border-radius: 4px; }` is HIGHER than `*:where(...)`. The `:where()` pseudo-class has zero specificity, meaning the `.callout` rule wins.

OD-002 callouts have NO `border-radius` declaration -- they rely on the global `border-radius: 0` default.

Convention Spec Section 1: "border-radius: 0 everywhere (no rounded corners on any element)".

**SEVERITY: INCONSISTENT** -- This is technically a Soul violation (Soul Piece #1). The `border-radius: 4px` on `.callout` overrides the zero-specificity `:where()` enforcement. In practice, the `--border-radius: 0` custom property in `:root` is not applied here because the callout uses a hardcoded `4px` value.

### B. Callout Label font-family Difference

**FINDING: INCONSISTENT**

| Element | AD-002 Value | OD-002 Value |
|---------|-------------|-------------|
| .callout__label font-family | `var(--font-body)` (Inter) | `var(--font-mono)` (JetBrains Mono) |

AD-002 uses Inter for callout labels. OD-002 uses JetBrains Mono. The convention spec does not explicitly prescribe callout label font-family, but the OD gold standard consistently uses mono for all label/meta text. This is a stylistic inconsistency between AD and OD callout implementations.

**SEVERITY: INCONSISTENT**

### C. Body line-height Difference

**FINDING: ACCEPTABLE**

| Element | AD-002 Value | OD-002 Value |
|---------|-------------|-------------|
| body line-height | 1.6 | 1.7 |

AD-002 uses 1.6 body line-height, OD-002 uses 1.7. The convention spec does not prescribe a specific body line-height. Both are within the acceptable range (1.5-1.8) for body text. The slightly tighter AD line-height is consistent with the F-pattern's emphasis on vertical scanning efficiency.

**SEVERITY: ACCEPTABLE**

---

## Findings Summary Table

| # | Dimension | Finding | Severity | AD-002 Value | Expected Value |
|---|-----------|---------|----------|-------------|----------------|
| F1 | 9. Header meta spacing | Header padding smaller than convention | CRAMPED | 48px/24px | 64px/32px (convention Section 4) |
| F2 | 5. Container padding | Callout vertical padding differs from OD | INCONSISTENT | 24px vertical | 16px (OD) -- AD is MORE generous, not less |
| F3 | Extra-A | Callout border-radius: 4px (Soul violation) | INCONSISTENT | border-radius: 4px | 0 (Soul Piece #1, Convention Section 1) |
| F4 | Extra-B | Callout label uses Inter, not JetBrains Mono | INCONSISTENT | var(--font-body) | var(--font-mono) (OD gold standard) |
| F5 | Extra-C | Body line-height 1.6 vs OD 1.7 | ACCEPTABLE | 1.6 | 1.7 (OD gold standard) |

---

## Severity Distribution

| Severity | Count |
|----------|-------|
| BROKEN | 0 |
| CRAMPED | 1 |
| INCONSISTENT | 3 |
| ACCEPTABLE | 1 |
| **TOTAL FINDINGS** | **5** |

---

## Recommended Fixes

### Priority 1: F3 -- Callout border-radius (INCONSISTENT / Soul Violation)
Remove `border-radius: 4px` from `.callout` in the axis layer. The global reset already enforces `border-radius: 0` but the `:where()` specificity is too low. Either remove the declaration or change it to `border-radius: var(--border-radius)` which resolves to `0`.

### Priority 2: F1 -- Header padding (CRAMPED)
Change `.header-inner` padding from `var(--space-12) var(--space-6)` to `var(--space-16) var(--space-8)` to match Convention Spec Section 4.

### Priority 3: F4 -- Callout label font-family (INCONSISTENT)
Change `.callout__label` font-family from `var(--font-body)` to `var(--font-mono)` to match OD gold standard.

### No fix needed: F2, F5
F2 is a stylistic difference (AD is more generous, not cramped). F5 is within acceptable range and arguably intentional for F-pattern scanning.

---

**END OF SPACING AUDIT -- AD-002**
