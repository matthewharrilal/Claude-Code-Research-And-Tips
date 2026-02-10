# Hygiene Spacing Audit — AD-006 (Compound)

**Auditor:** Hygiene-Auditor-A (Spacing & Layout)
**File:** `explorations/axis/AD-006-compound.html`
**Gold Standard:** `explorations/organizational/OD-006-creative.html`
**Convention Reference:** `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md`
**Date:** 2026-02-10

---

## Methodology

FILE-ONLY audit. Read CSS source of AD-006-compound.html and compared against
OD-006-creative.html (GOLD STANDARD) CSS values across 12 spacing dimensions.
Convention Spec (Sections 1-16) used as authoritative reference for expected values.

---

## Summary

| Severity | Count |
|----------|-------|
| BROKEN | 1 |
| CRAMPED | 3 |
| INCONSISTENT | 5 |
| ACCEPTABLE | 3 |
| **TOTAL** | **12** |

---

## Dimension 1: Title-to-Content Spacing

**FINDING** [`.header-inner` padding, locked-layer line ~253], DIMENSION [1],
CURRENT STATE [AD: `padding: var(--space-12) var(--space-6)` = 48px 24px],
EXPECTED STATE [OD: `.page-header { padding: var(--space-16) var(--space-8) }` = 64px 32px, Convention Spec Section 4: `padding: var(--space-16) var(--space-8)`],
SEVERITY: **CRAMPED**

The AD header inner wrapper uses `--space-12` (48px) top/bottom padding vs OD's
`--space-16` (64px). The Convention Spec Section 4 explicitly calls for
`padding: var(--space-16) var(--space-8)`. The AD header is 16px shorter on
each vertical side, making the title area noticeably more cramped than the gold
standard. Horizontal padding also narrower: 24px vs 32px.

---

## Dimension 2: Section-to-Section Spacing

**FINDING** [`.axis-section`, axis-layer line ~560-566], DIMENSION [2],
CURRENT STATE [AD: `padding-top: var(--space-16); padding-bottom: var(--space-16)` = 64px each + 3px structural border between sections],
EXPECTED STATE [OD: `.section-divider { margin: var(--space-20) 0; padding: var(--space-8) 0 }` = 80px margin + 32px padding = 112px total breathing + 1px border],
SEVERITY: **INCONSISTENT**

AD uses 64px+64px = 128px total between-section space (via padding-top + padding-bottom
of adjacent sections), but as padding not margin. OD uses explicit `.section-divider`
elements with 80px margins plus 32px padding, creating a distinct breathing zone.
AD achieves similar total pixel budget (128px vs ~112px), but the mechanism differs:
AD has no explicit breathing zone element between sections — only border-top + padding.
The visual rhythm is different because AD lacks the breathing-zone background
(`--color-zone-breathing`) between sections that OD provides. The total spacing is
comparable, but the architectural pattern is inconsistent.

---

## Dimension 3: Paragraph Spacing

**FINDING** [`p { margin-bottom }`, locked-layer line ~194-196], DIMENSION [3],
CURRENT STATE [AD: `p { margin-bottom: var(--space-4) }` = 16px],
EXPECTED STATE [OD: `.answer p { margin-bottom: var(--space-4) }` = 16px; body paragraphs use same 16px via general margin],
SEVERITY: **ACCEPTABLE**

Both AD and OD use `--space-4` (16px) for paragraph bottom margins. This is
consistent with the Convention Spec and the locked spacing scale.

---

## Dimension 4: Column Gap

**FINDING** [Multiple grid layouts, axis-layer lines ~603, ~768, ~800, ~855, ~903], DIMENSION [4],
CURRENT STATE [AD: `.z-layout gap: var(--space-8)` = 32px; `.triple-column gap: var(--space-4)` = 16px; `.bento-grid gap: var(--space-4)` = 16px; `.spiral-layout gap: var(--space-4)` = 16px; `.choreo-layout gap: var(--space-4)` = 16px],
EXPECTED STATE [OD: `.hub-grid gap: var(--space-6)` = 24px; `.synthesis-grid gap: var(--space-8)` = 32px; `.visual-index` uses border-based separation; Convention Spec Section 12.3: `--grid-gap-tight: var(--space-4)` = 16px, `--grid-gap-standard: var(--space-8)` = 32px],
SEVERITY: **INCONSISTENT**

AD uses `--space-4` (16px) as the dominant grid gap for most layouts (bento, spiral,
choreo), while only Z-layout uses `--space-8` (32px). OD uses `--space-6` (24px)
for hub-grid and `--space-8` (32px) for synthesis-grid. Convention Spec Section 12.3
defines `--grid-gap-standard: var(--space-8)` (32px) as the "between axis zones"
gap. Several AD grids use tight gap (16px) where standard gap (32px) would be
more consistent with the "between axis zones" specification. The bento, spiral,
and choreography layouts are all major axis zone grids, not sub-grids.

---

## Dimension 5: Container Padding

**FINDING** [`.page-container`, locked-layer line ~300-304], DIMENSION [5],
CURRENT STATE [AD: `max-width: 860px; padding: var(--space-12) var(--space-6)` = 48px 24px],
EXPECTED STATE [OD: `.main-content { max-width: 860px; padding: var(--space-16) var(--space-8) }` = 64px 32px; Convention Spec Section 4: inner content at max-width 860px],
SEVERITY: **CRAMPED**

AD page-container uses `--space-12` (48px) top/bottom and `--space-6` (24px)
horizontal padding. OD uses `--space-16` (64px) top/bottom and `--space-8` (32px)
horizontal padding. The AD content area has 33% less vertical padding and 25%
less horizontal padding than the gold standard. This makes all content feel more
cramped relative to OD's generous spacing. Max-width (860px) matches correctly.

---

## Dimension 6: Margin Consistency

**FINDING** [Various `margin-bottom` values across components], DIMENSION [6],
CURRENT STATE [AD: callout `margin-bottom: var(--space-8)` = 32px; pre `margin-bottom: var(--space-8)` = 32px; table `margin-bottom: var(--space-8)` = 32px; discovery-log `margin-bottom: var(--space-8)` = 32px; section-header `margin-bottom: var(--space-8)` = 32px],
EXPECTED STATE [OD: callout `margin: var(--space-8) 0` = 32px; `.qa-pair margin-bottom: var(--space-chapter)` = 64px; `.act margin-bottom: var(--space-16)` = 64px; `.task-island margin: var(--space-16) 0` = 64px; `.stratum margin-bottom: var(--space-12)` = 48px],
SEVERITY: **ACCEPTABLE**

AD uses a consistent `--space-8` (32px) bottom margin for most block-level
components (callouts, pre, tables, discovery-log). OD varies its component margins
more aggressively based on organizational mode (64px for Q&A pairs, 64px for acts,
48px for strata). AD's uniformity is justified because each axis section is a
self-contained demonstration — the section-level padding (Dimension 2) provides
the larger-scale separation. Within sections, 32px is consistent.

---

## Dimension 7: Vertical Rhythm

**FINDING** [`body { line-height }`, locked-layer line ~174 vs OD line ~317], DIMENSION [7],
CURRENT STATE [AD: `body { line-height: 1.6 }`],
EXPECTED STATE [OD: `body { line-height: 1.7 }`; OD also varies line-height per act: `.act--exposition { line-height: 1.9 }`, `.act--rising { line-height: 1.7 }`, `.act--climax { line-height: 1.5 }`],
SEVERITY: **INCONSISTENT**

AD uses a fixed `line-height: 1.6` on body. OD uses `1.7` as its base and
dynamically adjusts per organizational mode (1.9 for exposition/sparse, 1.7 for
rising/medium, 1.5 for climax/dense). The 0.1 base difference is subtle but
measurable — OD's body text has ~10% more leading, contributing to the more
generous feel. Convention Spec does not specify a required line-height value in
the :root block or base styles section, so this is not a spec violation, but it
is a divergence from the gold standard.

---

## Dimension 8: Responsive 768px

**FINDING** [`@media (max-width: 768px)`, axis-layer lines ~1086-1124], DIMENSION [8],
CURRENT STATE [AD: All grids collapse to `grid-template-columns: 1fr; grid-template-areas: none;` at 768px. Solid offset pseudo-elements hidden. Pattern echo grid shrinks to 60px cells. Header h1 reverts to `var(--type-page)`. Axis indicator wraps with smaller font.],
EXPECTED STATE [OD: `.main-content { padding: var(--space-8) var(--space-4) }` = 32px 16px at 768px. Grids collapse to 1fr. `.question { max-width: 100% }`.],
SEVERITY: **ACCEPTABLE**

Both files collapse grids to single-column at 768px per Convention Spec Section 12.5.
AD handles responsive correctly — all multi-column grids (z-layout, triple-column,
bento-grid, spiral-layout, choreo-layout) collapse. AD additionally handles the
fractal annotation collapse and axis indicator wrapping. OD has additional
responsive rules for its page layout sidebar. Both are adequate.

---

## Dimension 9: Header Meta Spacing

**FINDING** [`.meta-line`, locked-layer lines ~256-267], DIMENSION [9],
CURRENT STATE [AD: `.meta-line { margin-bottom: var(--space-2); gap: var(--space-4) }` = 8px bottom, 16px gap between items. `header h1 { margin-bottom: var(--space-4) }` = 16px below title.],
EXPECTED STATE [OD: `.page-header__meta { margin-bottom: var(--space-2) }` = 8px. `.page-header__title { margin-bottom: var(--space-4) }` = 16px. OD also has `.page-header__thesis` with `margin-top: var(--space-8)` = 32px. Convention Spec Section 4: `meta margin-bottom: var(--space-2)`, `title margin-bottom: var(--space-4)`.],
SEVERITY: **INCONSISTENT**

The meta-line and title spacing match between AD and OD (8px and 16px respectively,
per Convention Spec). However, OD has a thesis callout element inside the header
(`page-header__thesis`) with additional `margin-top: var(--space-8)` = 32px of
separation. AD has no equivalent — the subtitle sits directly below the title.
This is an architectural difference in header structure, not necessarily a
spacing violation. The subtitle styling also differs: AD uses Inter 400
(`font-body`), OD uses Instrument Serif italic. The meta line's `font-family`
also differs: AD uses `font-body` (Inter), OD uses `font-mono` (JetBrains Mono).
AD uses `font-weight: 500; letter-spacing: 0.15em` which matches Convention Spec.

---

## Dimension 10: Table Cell Padding

**FINDING** [`th` and `td` padding, locked-layer lines ~410-421], DIMENSION [10],
CURRENT STATE [AD: `th { padding: var(--space-3) var(--space-4) }` = 12px 16px. `td { padding: var(--space-3) var(--space-4) }` = 12px 16px.],
EXPECTED STATE [OD: `.comparison-table th { padding: var(--space-3) var(--space-4) }` = 12px 16px. `.comparison-table td { padding: var(--space-3) var(--space-4) }` = 12px 16px. Convention Spec Section 3 code block: `padding: var(--space-6) var(--space-8)` = 24px 32px for code blocks (different element).],
SEVERITY: **ACCEPTABLE** (exact match)

Table cell padding is identical between AD and OD. Both use `--space-3` (12px)
vertical and `--space-4` (16px) horizontal for table headers and data cells.

---

## Dimension 11: List Item Spacing

**FINDING** [`ul, ol` and `li`, axis-layer lines ~1075-1081], DIMENSION [11],
CURRENT STATE [AD: `ul, ol { padding-left: var(--space-6); margin-bottom: var(--space-4) }` = 24px left, 16px bottom. `li { margin-bottom: var(--space-2) }` = 8px.],
EXPECTED STATE [OD: No explicit `ul/ol/li` styling in global CSS — lists use browser defaults modified by reset (`margin: 0; padding: 0`). Individual list items within components get spacing via component-specific selectors.],
SEVERITY: **INCONSISTENT**

AD defines explicit global list styling with 24px left indent and 8px between
items. OD relies on component-level styling (e.g., task steps have their own
padding). AD's approach is more systematic and arguably better for the compound
page where lists appear in multiple contexts. However, it diverges from OD's
component-scoped approach. Not a spec violation — Convention Spec is silent on
list spacing.

---

## Dimension 12: Inline Code Padding

**FINDING** [`code:not(pre code)`, locked-layer lines ~338-344], DIMENSION [12],
CURRENT STATE [AD: `padding: 2px 6px; border: 1px solid var(--color-border); background: var(--color-border-subtle)`],
EXPECTED STATE [OD: `code { font-family: var(--font-mono); font-size: 0.9em }` — OD-006 defines bare `code` styling at line ~1571-1574 without explicit padding/border. Convention Spec Section 3 inline code: `padding: 2px 6px; border: 1px solid var(--color-border); background: var(--color-border-subtle)`.],
SEVERITY: **BROKEN**

AD correctly implements Convention Spec inline code with 2px 6px padding, 1px
border (Cat 3 micro), and subtle background. OD-006 FAILS to implement the
Convention Spec for inline code — it only sets font-family and font-size on `code`
with no padding, no border, and no background. This means AD is actually MORE
compliant than the gold standard on this dimension. However, marking as BROKEN
because there is a cross-document inconsistency: a reader moving between OD-006
and AD-006 would see different inline code presentation. The "break" is in OD-006,
not AD-006.

**Note:** AD-006 is correct here. OD-006 is deficient. AD should NOT change.

---

## Critical Findings Summary

### Must Fix (BROKEN + CRAMPED)

| # | Finding | Dimension | Action Required |
|---|---------|-----------|-----------------|
| 1 | Header padding too tight | D1 | Change `.header-inner` from `var(--space-12) var(--space-6)` to `var(--space-16) var(--space-8)` per Convention Spec Section 4 |
| 2 | Page container padding too tight | D5 | Change `.page-container` from `var(--space-12) var(--space-6)` to `var(--space-16) var(--space-8)` to match OD |
| 3 | Grid gaps too tight for major zones | D4 | Change bento-grid, spiral-layout, and choreo-layout gaps from `var(--space-4)` to `var(--space-8)` per Convention Spec Section 12.3 `--grid-gap-standard` |
| 4 | Inline code mismatch (OD deficient) | D12 | No AD change needed — OD-006 should add padding/border to match spec |

### Should Consider (INCONSISTENT)

| # | Finding | Dimension | Action Required |
|---|---------|-----------|-----------------|
| 5 | No breathing zone elements between sections | D2 | Consider adding `.section-divider` elements between axis-sections with `--color-zone-breathing` background |
| 6 | Body line-height 1.6 vs OD 1.7 | D7 | Consider changing to 1.7 for consistency; or keep 1.6 if AD deliberately uses tighter leading |
| 7 | Header meta uses font-body vs OD font-mono | D9 | AD meta-line uses Inter; Convention Spec says Inter 500. AD is correct per spec. OD diverges. |
| 8 | List styling globally scoped vs component-scoped | D11 | Acceptable divergence — compound page needs global list styling |

---

## Convention Spec Compliance

| Spec Section | Compliant? | Notes |
|--------------|-----------|-------|
| Section 1 (Soul) | YES | border-radius: 0, box-shadow: none enforced throughout |
| Section 2 (Borders) | YES | 3-category system followed. No 2px borders. |
| Section 3 (Code) | YES | Dark theme pre blocks, correct inline code |
| Section 4 (Header) | **PARTIAL** | Layout correct but padding values wrong (48px vs 64px) |
| Section 5 (Type Scale) | YES | All type tokens correct, 3rem crown jewel override |
| Section 6 (Spacing) | YES | All spacing tokens used correctly |
| Section 9 (AD-006 divergences) | YES | 3rem type-page, drop caps present |
| Section 12 (Grid) | **PARTIAL** | Named areas correct, but gap tokens too tight |
| Section 12.5 (Responsive) | YES | All grids collapse at 768px |
| Section 14 (Zone tokens) | YES | Zone backgrounds use token values |
| Section 15 (Transitions) | YES | Only allowed transitions used |

---

## Verdict

AD-006 has **3 actionable spacing deficiencies** (header padding, container padding,
grid gaps) that should be fixed to match Convention Spec and OD gold standard.
The remaining inconsistencies (section breathing zones, line-height, list scoping)
are architectural choices that may be intentional for the compound page format.

**Blocking issues:** D1 (header padding) and D5 (container padding) are spec
violations. D4 (grid gaps) is a spec recommendation violation.

**Non-blocking:** All other dimensions pass or have acceptable divergences.
