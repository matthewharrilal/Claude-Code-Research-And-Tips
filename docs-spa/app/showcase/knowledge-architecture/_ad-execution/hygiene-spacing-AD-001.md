# Hygiene Spacing Audit — AD-001 Z-Pattern

**Auditor:** Hygiene-Auditor-A (Spacing & Layout)
**Target:** `explorations/axis/AD-001-z-pattern.html`
**Gold Standard:** `explorations/organizational/OD-001-conversational.html`
**Convention Ref:** `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md`
**Date:** 2026-02-10

---

## Summary

**12 dimensions checked. 7 findings. 0 BROKEN. 2 CRAMPED. 3 INCONSISTENT. 2 ACCEPTABLE.**

AD-001 is generally well-spaced and uses the locked spacing token scale correctly.
The two CRAMPED findings relate to the header padding discrepancy vs OD gold standard
and the callout internal padding being slightly tighter than OD. The INCONSISTENT
findings are minor deviations from OD convention that do not break readability but
should be normalized for cross-exploration consistency.

---

## Dimension-by-Dimension Audit

### 1. Title-to-Content Spacing (margin-bottom on h1/h2/h3)

FINDING: `header h1` (locked-layer, ~line 369)
DIMENSION: 1
CURRENT STATE: `margin-bottom: var(--space-4)` (16px)
EXPECTED STATE: OD-001 `.exploration-title` uses `margin-bottom: var(--space-4)` (16px)
SEVERITY: ACCEPTABLE

Both AD-001 `header h1` and OD-001 `.exploration-title` use `margin-bottom: var(--space-4)` (16px). Consistent.

FINDING: `.section-title` (axis-layer, ~line 791-796)
DIMENSION: 1
CURRENT STATE: `margin-bottom: var(--space-6)` (24px), `padding-bottom: var(--space-3)` (12px), plus `border-bottom: 3px solid`
EXPECTED STATE: OD-001 `.conversation-chapter__title` uses `padding-bottom: var(--space-3)` (12px), `border-bottom: 3px solid var(--color-primary)`; chapter label uses `margin-bottom: var(--space-1)` (4px)
SEVERITY: ACCEPTABLE

Section titles are comparable. AD-001's `.section-title` combines the border and margin into one element (24px margin-bottom below the border), while OD-001 separates the chapter label and title. The spacing rhythm is equivalent.

No issues on Dimension 1.

---

### 2. Section-to-Section Spacing (margin/padding between sections)

FINDING: `.z-cycle` (axis-layer, ~line 641)
DIMENSION: 2
CURRENT STATE: `margin-bottom: var(--space-between)` (32px)
EXPECTED STATE: OD-001 `.qa-pair` uses `margin-bottom: var(--space-between)` (32px)
SEVERITY: ACCEPTABLE

Z-cycles and QA-pairs use identical spacing: `--space-between` (32px). Correct per Gestalt semantic alias convention (AD-CONVENTION-SPEC Section 6).

FINDING: `.chapter-divider` (axis-layer, ~lines 735-741)
DIMENSION: 2
CURRENT STATE: `margin: var(--space-chapter) 0` (64px top and bottom), `height: var(--space-12)` (48px), `padding: 0`
EXPECTED STATE: OD-001 `.conversation-chapter` uses `margin-top: var(--space-chapter)` (64px), `margin-bottom: var(--space-between)` (32px), `padding: var(--space-6) 0` (24px top/bottom)
SEVERITY: INCONSISTENT

AD-001 chapter divider uses symmetric 64px margins (top AND bottom), while OD-001 uses asymmetric: 64px top / 32px bottom. AD-001's total breathing space around a chapter break is 64+48+64 = 176px. OD-001's is 64+24+24+32 = 144px. AD-001 is ~22% more spacious between chapters. Not broken, but creates slightly different page rhythm. The OD approach (asymmetric: large top, smaller bottom) creates a stronger "pull-forward" into the next section.

---

### 3. Paragraph Spacing (margin-bottom on p)

FINDING: `p` (locked-layer, ~line 280)
DIMENSION: 3
CURRENT STATE: `margin-bottom: var(--space-4)` (16px), `max-width: 70ch`
EXPECTED STATE: OD-001 `.answer__lead` uses `margin-bottom: var(--space-4)` (16px), `max-width: 65ch`; `.answer__detail p` uses `margin-bottom: var(--space-3)` (12px), `max-width: 65ch`
SEVERITY: INCONSISTENT

AD-001 uses a blanket `p { margin-bottom: 16px; max-width: 70ch }` for ALL paragraphs. OD-001 differentiates: lead paragraphs get 16px, detail paragraphs get 12px. AD-001's uniform spacing is simpler but loses the density differentiation that OD-001 achieves (lead = more breathing, details = tighter). The `max-width: 70ch` vs OD's `65ch` is a minor deviation; 70ch is the general convention, while OD-001 chose a slightly tighter reading line for its detail paragraphs.

---

### 4. Column Gap (grid-gap/gap in multi-column layouts)

FINDING: `.z-hero` (axis-layer, ~line 591)
DIMENSION: 4
CURRENT STATE: `gap: var(--space-8)` (32px)
EXPECTED STATE: AD-CONVENTION-SPEC Section 12.3 defines `--grid-gap-standard: var(--space-8)` (32px) for "between axis zones"
SEVERITY: ACCEPTABLE

Grid gap uses the correct standard token. Proportional to the 2-column golden ratio layout (1.618fr 1fr).

FINDING: `.micro-z` (axis-layer, ~line 698)
DIMENSION: 4
CURRENT STATE: `gap: var(--space-4)` (16px)
EXPECTED STATE: AD-CONVENTION-SPEC Section 12.3 defines `--grid-gap-tight: var(--space-4)` (16px) for "within axis zone"
SEVERITY: ACCEPTABLE

Micro-Z internal gap is appropriately tighter than the hero grid gap. Correct per convention.

No issues on Dimension 4.

---

### 5. Container Padding (callout/pre/sidebar internal padding)

FINDING: `.callout` (locked-layer, ~line 437)
DIMENSION: 5
CURRENT STATE: `padding: var(--space-6) var(--space-5)` (24px top/bottom, 20px left/right)
EXPECTED STATE: OD-001 `.callout` uses `padding: var(--space-4) var(--space-5)` (16px top/bottom, 20px left/right)
SEVERITY: CRAMPED (OD is tighter) / INCONSISTENT

AD-001 callouts have MORE vertical padding (24px) than OD-001 (16px). This is actually a REVERSAL of the typical problem -- AD-001 is more generous. However, the inconsistency means callout visual weight differs between AD and OD pages. OD-001's tighter padding makes callouts feel more integrated with body text; AD-001's looser padding makes callouts feel more like standalone cards.

FINDING: `pre` (locked-layer, ~line 398)
DIMENSION: 5
CURRENT STATE: `padding: var(--space-6) var(--space-8)` (24px 32px)
EXPECTED STATE: OD-001 `.code-block` uses `padding: var(--space-6) var(--space-8)` (24px 32px)
SEVERITY: ACCEPTABLE

Code block padding is identical between AD-001 and OD-001. Matches convention spec Section 3.

FINDING: `.z-question` (axis-layer, ~line 649)
DIMENSION: 5
CURRENT STATE: `padding: var(--space-6) var(--space-8)` (24px 32px)
EXPECTED STATE: OD-001 `.question` uses `padding: var(--space-4) var(--space-4) var(--space-4) var(--q-indent)` (16px 16px 16px 32px)
SEVERITY: INCONSISTENT

AD-001 z-question has significantly more padding than OD-001's question. AD-001: 24px top/bottom, 32px left/right. OD-001: 16px top/bottom/right, 32px left (for marker indent). The extra 8px vertical and 16px right padding in AD-001 makes questions feel more contained/card-like. OD-001's tighter padding keeps questions feeling more like inline conversational elements. This is a legitimate axis-pattern design choice (Z-Pattern quadrants need more internal breathing room than conversational inline questions), but the difference should be documented as intentional.

---

### 6. Margin Consistency (same element types, same spacing)

FINDING: Callout margin inconsistency
DIMENSION: 6
CURRENT STATE: AD-001 `.callout { margin-bottom: var(--space-8) }` (32px); OD-001 `.callout { margin: var(--space-6) 0 }` (24px top and bottom)
EXPECTED STATE: Same margin pattern across explorations for the same component family
SEVERITY: INCONSISTENT

AD-001 uses `margin-bottom: 32px` (no top margin) on callouts. OD-001 uses `margin: 24px 0` (symmetric 24px top and bottom). This means:
- In AD-001, if two elements stack above a callout, the callout has 0px extra separation from the element above it (relies only on the previous element's bottom margin).
- In OD-001, the callout pushes 24px from both sides.
The asymmetric AD-001 approach can cause callouts to feel "stuck" to preceding content when that content has small bottom margin.

---

### 7. Vertical Rhythm (consistent --space-N usage)

AD-001 uses the spacing token scale consistently throughout. All spacing values reference `var(--space-N)` or the Gestalt aliases (`--space-within`, `--space-between`, `--space-chapter`). No hardcoded pixel values in the axis-layer CSS. The locked-layer uses hardcoded pixels only in the skip-link (8px 16px) which is acceptable for accessibility utility styles.

The vertical rhythm follows the expected pattern:
- Within elements: `--space-1` to `--space-3` (4-12px)
- Between related elements: `--space-4` to `--space-6` (16-24px)
- Between distinct elements: `--space-8` (32px) via `--space-between`
- Between chapters: `--space-16` (64px) via `--space-chapter`

No issues on Dimension 7.

---

### 8. Responsive 768px (do @media queries adjust spacing?)

FINDING: Responsive spacing adjustments
DIMENSION: 8
CURRENT STATE: AD-001's `@media (max-width: 768px)` block (axis-layer, ~lines 813-845) addresses grid collapse (single column, question width to 100%) but does NOT adjust spacing tokens. No padding/margin changes at mobile.
EXPECTED STATE: Professional standard would adjust `--space-chapter` and container padding for mobile. OD-001 has no explicit spacing adjustments at 768px either (both rely on the same token values at all breakpoints).
SEVERITY: ACCEPTABLE

Both AD-001 and OD-001 take the same approach: spacing tokens remain constant across breakpoints. Only layout geometry changes (grid collapse to single column, width adjustments). This is consistent between the two files. The 860px max-width container with 24px side padding works adequately at 768px (768 - 48 = 720px content width). No cramping at mobile.

---

### 9. Header Meta Spacing (header padding from main content)

FINDING: `header` / `.header-inner` (locked-layer, ~lines 329-339)
DIMENSION: 9
CURRENT STATE: AD-001 header has `padding: var(--space-12) var(--space-6)` (48px 24px) on `.header-inner`. No explicit `margin-bottom` on `<header>`.
EXPECTED STATE: OD-001 `.exploration-header` has `padding: var(--space-16) var(--space-8)` (64px 32px) and `margin-bottom: var(--space-chapter)` (64px).
SEVERITY: CRAMPED

This is the most significant spacing discrepancy:
- **AD-001 header vertical padding:** 48px top, 48px bottom = 96px total internal
- **OD-001 header vertical padding:** 64px top, 64px bottom = 128px total internal
- **AD-001 header-to-content gap:** No explicit margin-bottom on `<header>`. Relies on `.page-container` padding-top of 48px.
- **OD-001 header-to-content gap:** `margin-bottom: var(--space-chapter)` = 64px

Total header breathing room:
- AD-001: 48px (header bottom padding) + 48px (page-container top padding) = 96px header-to-first-content
- OD-001: 64px (header bottom padding) + 64px (header margin-bottom) = 128px header-to-first-content

AD-001's header region is 32px tighter overall. The header also uses `--space-6` (24px) side padding vs OD-001's `--space-8` (32px). However, both use `max-width: 860px` inner wrappers.

Per AD-CONVENTION-SPEC Section 4, the header should use `padding: var(--space-16) var(--space-8)` (64px 32px). AD-001 uses `padding: var(--space-12) var(--space-6)` (48px 24px). **This is a spec deviation.**

---

### 10. Table Cell Padding (td/th padding)

FINDING: `th` and `td` (locked-layer, ~lines 495-506)
DIMENSION: 10
CURRENT STATE: `th { padding: var(--space-3) var(--space-4) }` (12px 16px); `td { padding: var(--space-3) var(--space-4) }` (12px 16px)
EXPECTED STATE: OD-001 `.decision-matrix th { padding: var(--space-2) var(--space-3) }` (8px 12px); `.decision-matrix td { padding: var(--space-2) var(--space-3) }` (8px 12px)
SEVERITY: ACCEPTABLE

AD-001 table cells are more spacious (12px/16px) than OD-001's decision matrix cells (8px/12px). This is actually a better default -- OD-001's matrix is deliberately compact for inline decision tables, while AD-001's tables are standalone elements with full breathing room. The AD-001 approach matches professional table standards.

---

### 11. List Item Spacing (li margin, nested indent)

FINDING: No explicit `li` or `ul`/`ol` styles in AD-001
DIMENSION: 11
CURRENT STATE: AD-001 has one inline-styled `<ul>` (line ~1409) with `list-style: none; padding-left: 0` and `<li>` with `padding: var(--space-3) 0; border-bottom: 1px solid`. No global list styles.
EXPECTED STATE: OD-001 also handles lists inline rather than with global styles. No convention spec requirement for list styling.
SEVERITY: ACCEPTABLE

Both AD-001 and OD-001 use inline list styling rather than global CSS rules. The one list in AD-001 uses appropriate `--space-3` (12px) vertical padding per item with Cat 2 separator borders. This is adequate for the single list usage.

---

### 12. Inline Code Padding (code element spacing)

FINDING: `code:not(pre code)` (locked-layer, ~lines 423-429)
DIMENSION: 12
CURRENT STATE: `padding: 2px 6px; border: 1px solid var(--color-border); background: var(--color-border-subtle); font-size: 0.9em`
EXPECTED STATE: AD-CONVENTION-SPEC Section 3 defines `padding: 2px 6px; border: 1px solid var(--color-border)` (Cat 3 micro). OD-001 `code { font-size: var(--type-code) }` but no specific inline code padding rule in global CSS (handled by individual component styles).
SEVERITY: ACCEPTABLE

Inline code padding matches the convention spec exactly. The `2px 6px` padding is standard for Cat 3 micro-element borders. No issue.

---

## Findings Summary

| # | Dimension | Selector | Severity | Detail |
|---|-----------|----------|----------|--------|
| F1 | 2 | `.chapter-divider` | INCONSISTENT | Symmetric 64px/64px margins vs OD's asymmetric 64px/32px |
| F2 | 3 | `p` | INCONSISTENT | Uniform 16px/70ch vs OD's differentiated 16px lead / 12px detail / 65ch |
| F3 | 5 | `.callout` | INCONSISTENT | 24px/20px padding vs OD's 16px/20px |
| F4 | 5 | `.z-question` | INCONSISTENT | 24px/32px padding vs OD's 16px/16px/16px/32px (axis design choice) |
| F5 | 6 | `.callout` | INCONSISTENT | margin-bottom: 32px only vs OD's symmetric margin: 24px 0 |
| F6 | 9 | `header` / `.header-inner` | CRAMPED | 48px/24px padding vs convention spec's 64px/32px **SPEC DEVIATION** |
| F7 | 9 | `header` to content gap | CRAMPED | 96px total vs OD's 128px total (32px tighter) |

---

## Critical Actions

### MUST FIX (Spec Deviations)
1. **F6/F7: Header padding** -- `.header-inner` should use `padding: var(--space-16) var(--space-8)` (64px 32px) per AD-CONVENTION-SPEC Section 4. Currently uses `var(--space-12) var(--space-6)` (48px 24px). Additionally, `<header>` needs `margin-bottom: var(--space-chapter)` (64px) for proper header-to-content separation.

### SHOULD NORMALIZE (Cross-Exploration Consistency)
2. **F1: Chapter divider asymmetry** -- Consider `margin-top: var(--space-chapter); margin-bottom: var(--space-between)` to match OD's pull-forward rhythm.
3. **F5: Callout margin** -- Add `margin-top` to callouts or switch to `margin: var(--space-6) 0` for symmetric spacing.

### DOCUMENT AS INTENTIONAL (Axis-Pattern Divergences)
4. **F3/F4: Z-question and callout padding** -- If the extra internal padding in Z-Pattern elements is intentional (quadrant breathing room), document this in the axis-layer comments as "AD-specific: Z-quadrant internal padding exceeds OD baseline for visual containment."
5. **F2: Paragraph max-width** -- The 70ch blanket width is the convention default. OD-001's 65ch is a pattern-specific tightening. AD-001 is correct per convention.

---

## Token Scale Compliance

All spacing values in AD-001 reference `var(--space-N)` tokens or Gestalt aliases. Zero hardcoded pixel values in the axis-layer CSS (excluding skip-link utility). The spacing scale matches AD-CONVENTION-SPEC Section 6 exactly.

**Spacing tokens used in AD-001:**
- `--space-1` (4px): version-badge padding, CTA padding-bottom
- `--space-2` (8px): meta-line margin-bottom, question label margin-bottom, answer label margin-bottom (via `--space-within`)
- `--space-3` (12px): section-title padding-bottom, table cell padding, running-header padding
- `--space-4` (16px): h1 margin-bottom, paragraph margin-bottom, question-to-answer gap, micro-z gap, CTA margin-top/padding
- `--space-5` (20px): callout right padding
- `--space-6` (24px): header-inner side padding, page-container side padding, callout top/bottom padding, micro-z margins, z-question padding, z-answer label margin-bottom (via `--space-4`), section-title margin-bottom
- `--space-8` (32px): z-hero gap, z-question side padding, z-answer padding, code block right padding, running-header margin-bottom, pre margin-bottom, table margin-bottom (via `--space-between`)
- `--space-12` (48px): header-inner top/bottom padding, page-container top/bottom padding, chapter-divider height
- `--space-16` (64px): chapter-divider margin (via `--space-chapter`)

**Audit complete.**
