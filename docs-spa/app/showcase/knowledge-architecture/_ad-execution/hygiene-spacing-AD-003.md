# Hygiene Audit: Spacing & Layout -- AD-003 Bento Grid

**Auditor:** Hygiene-Auditor-A (Spacing)
**Target:** `explorations/axis/AD-003-bento-grid.html`
**Gold Standard:** `explorations/organizational/OD-003-task-based.html`
**Convention:** `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md`
**Method:** FILE-ONLY source CSS comparison (no Playwright)
**Date:** 2026-02-10

---

## Summary

| Severity | Count |
|----------|-------|
| BROKEN | 2 |
| CRAMPED | 3 |
| INCONSISTENT | 4 |
| ACCEPTABLE | 3 |
| **TOTAL** | **12** |

---

## Findings by Dimension

---

### DIMENSION 1: Title-to-Content Spacing

**FINDING 1.1**
- **Selector+Line:** `header h1` (AD line 228-234) vs `.exploration-title` (OD line 213-218)
- **DIMENSION:** 1
- **CURRENT STATE (AD):** `header h1 { margin-bottom: var(--space-4); }` = 16px between title and subtitle
- **EXPECTED STATE (OD):** `.exploration-title { margin-bottom: var(--space-4); }` = 16px between title and hypothesis
- **SEVERITY:** ACCEPTABLE

Both AD and OD use `--space-4` (16px) for title-to-subtitle/content spacing. Matches convention.

---

### DIMENSION 2: Section-to-Section Spacing

**FINDING 2.1**
- **Selector+Line:** `.page-container > section` (AD line 477-479) vs sparse-sea separators (OD line 355-356)
- **DIMENSION:** 2
- **CURRENT STATE (AD):** `margin-bottom: var(--space-chapter)` = 64px between major sections
- **EXPECTED STATE (OD):** `.sparse-sea { height: var(--space-20); }` = 80px between task islands; `.sparse-sea--large { height: 96px; }` = 96px for major transitions
- **SEVERITY:** CRAMPED

AD uses 64px (`--space-chapter`) between sections. OD uses 80px+ sparse-sea separators between task islands. The OD ISLANDS pattern establishes that 80px+ is the correct inter-island distance (per OD-F-007: "48px+ between mode transitions" and EXT-TASK-015: "Level 4 80px+ sea spacing"). AD-003's 64px section gap is tighter than OD's 80px standard for ISLANDS pattern.

**FINDING 2.2**
- **Selector+Line:** `.breathing-zone` (AD line 780-783) vs `.sparse-sea` / `.sparse-sea--large` (OD line 355-356)
- **DIMENSION:** 2
- **CURRENT STATE (AD):** `.breathing-zone { height: var(--space-20); }` = 80px
- **EXPECTED STATE (OD):** `.sparse-sea { height: var(--space-20); }` = 80px; `.sparse-sea--large { height: 96px; }` = 96px
- **SEVERITY:** ACCEPTABLE

AD's breathing-zone at 80px matches OD's base sparse-sea. OD also has a `--large` variant at 96px for major transitions (e.g., between front bookend and task islands, and between last task and verification). AD lacks this larger variant, but the base 80px is correct.

---

### DIMENSION 3: Paragraph Spacing

**FINDING 3.1**
- **Selector+Line:** `p { margin-bottom: var(--space-4); }` (AD line 141-144) vs implicit body `line-height: 1.7` + description spacing (OD line 169-175)
- **DIMENSION:** 3
- **CURRENT STATE (AD):** Global `p { margin-bottom: var(--space-4); }` = 16px
- **EXPECTED STATE (OD):** OD uses `margin-bottom: var(--space-4)` on `.task-step__description` (line 493-495) = 16px; body line-height 1.7
- **SEVERITY:** ACCEPTABLE

Both use 16px paragraph spacing. However, AD body line-height is 1.6 while OD body line-height is 1.7.

**FINDING 3.2**
- **Selector+Line:** `body { line-height: 1.6; }` (AD line 122) vs `body { line-height: 1.7; }` (OD line 173)
- **DIMENSION:** 3
- **CURRENT STATE (AD):** `line-height: 1.6`
- **EXPECTED STATE (OD):** `line-height: 1.7`
- **SEVERITY:** INCONSISTENT

AD uses 1.6 body line-height; OD uses 1.7. The AD-CONVENTION-SPEC does not explicitly mandate a specific body line-height, but OD-003 as the gold standard uses 1.7. This creates a slightly tighter vertical rhythm in AD-003.

---

### DIMENSION 4: Column Gap

**FINDING 4.1**
- **Selector+Line:** `.bento-grid { gap: var(--space-6); }` (AD line 506-510) vs AD-CONVENTION-SPEC Section 12.4 (convention line 494-498)
- **DIMENSION:** 4
- **CURRENT STATE (AD):** `gap: var(--space-6)` = 24px
- **EXPECTED STATE (Convention):** Section 12.4 shows `.bento-grid { gap: var(--space-8); }` = 32px; Section 12.3 defines `--grid-gap-standard: var(--space-8)` = 32px
- **SEVERITY:** BROKEN

**CRITICAL.** AD-CONVENTION-SPEC Section 12.4 explicitly defines the bento grid gap as `var(--space-8)` (32px). AD-003 uses `var(--space-6)` (24px). This is a direct convention violation. The convention's Section 12.3 also defines `--grid-gap-standard: var(--space-8)` (32px) as the standard gap for "between axis zones." The 24px gap fights the ISLANDS pattern -- OD-003 uses 80px between islands; AD-003's tighter 24px between grid cells weakens the "sparse ocean between dense islands" metaphor.

---

### DIMENSION 5: Container Padding

**FINDING 5.1**
- **Selector+Line:** `.page-container { padding: var(--space-12) var(--space-6); }` (AD line 248-252) vs `.page-container { padding: 0 var(--space-6); padding-bottom: var(--space-20); }` (OD line 284-289)
- **DIMENSION:** 5
- **CURRENT STATE (AD):** `padding: var(--space-12) var(--space-6)` = 48px top/bottom, 24px left/right
- **EXPECTED STATE (OD):** `padding: 0 var(--space-6); padding-bottom: var(--space-20)` = 0 top, 24px left/right, 80px bottom
- **SEVERITY:** INCONSISTENT

AD adds 48px top padding to the page container. OD uses 0 top padding (the first child -- bookend-front -- controls its own top margin with `margin-top: var(--space-12)` = 48px). The visual result is similar but the mechanism differs. OD's approach gives finer control per-element. AD's uniform 48px top padding is acceptable but less precise. The bottom padding diverges significantly: AD has 48px, OD has 80px.

---

### DIMENSION 6: Margin Consistency

**FINDING 6.1**
- **Selector+Line:** `.category-group { margin-bottom: var(--space-12); }` (AD line 709-711) vs `.sparse-sea { height: var(--space-20); }` (OD line 355)
- **DIMENSION:** 6
- **CURRENT STATE (AD):** 48px between category groups within a section
- **EXPECTED STATE (OD):** 80px between task islands (sparse-sea separators)
- **SEVERITY:** CRAMPED

AD uses 48px between category groups. OD uses 80px sparse-sea between task islands. Since AD-003's category groups serve the same structural role as OD-003's task island separators (grouping content clusters in the ISLANDS pattern), the 48px is notably tighter than OD's 80px standard. This undermines the ISLANDS density rhythm.

---

### DIMENSION 7: Vertical Rhythm

**FINDING 7.1**
- **Selector+Line:** `.section-heading { margin-bottom: var(--space-8); }` (AD line 486-492) vs `.bookend-front__title { margin-bottom: var(--space-6); }` (OD line 309-314)
- **DIMENSION:** 7
- **CURRENT STATE (AD):** Section headings use `margin-bottom: var(--space-8)` = 32px
- **EXPECTED STATE (OD):** OD section-equivalent titles use `margin-bottom: var(--space-6)` = 24px (bookend front title); task island summaries use `padding: var(--space-6) var(--space-8)` = 24px/32px
- **SEVERITY:** INCONSISTENT

AD section headings have 32px bottom margin. OD bookend-front titles have 24px. The section heading also has `padding-bottom: var(--space-3)` (12px) creating a total of 44px visual gap (12px padding + 32px margin). This is more generous than OD's 24px. Not broken, but creates a different rhythm.

---

### DIMENSION 8: Responsive 768px

**FINDING 8.1**
- **Selector+Line:** `@media (max-width: 768px)` (AD line 850-865) vs `@media (max-width: 640px)` (OD line 234-236, 328)
- **DIMENSION:** 8
- **CURRENT STATE (AD):** Grid collapses at 768px (correct per AD-CONVENTION-SPEC Section 12.5). `.bento-grid { grid-template-columns: 1fr; }` and all span items reset to `span 1`.
- **EXPECTED STATE (Convention):** Section 12.5: "At viewport widths below 768px, ALL multi-column grids collapse to single column." Binary rule.
- **SEVERITY:** ACCEPTABLE (partial)

AD correctly collapses at 768px per convention. However, OD-003 uses 640px for its archipelago map and task overview grids. AD-003 follows the convention spec's 768px rule (correct for AD), but does NOT include a separate smaller breakpoint for any internal sub-grids like `split-layout`. The split-layout inside bento cells (AD line 862-864) does collapse at 768px, which is correct.

**Note:** AD-003 does not have the OD-003 scroll-reveal `.reveal` class behavior, so no responsive animation concern exists.

---

### DIMENSION 9: Header Meta Spacing

**FINDING 9.1**
- **Selector+Line:** `.header-inner { padding: var(--space-12) var(--space-6); }` (AD line 198-202) vs `.exploration-header { padding: var(--space-16) var(--space-8); }` (OD line 195-199)
- **DIMENSION:** 9
- **CURRENT STATE (AD):** Header inner padding = 48px top/bottom, 24px left/right
- **EXPECTED STATE (OD):** Header padding = 64px top/bottom, 32px left/right
- **EXPECTED STATE (Convention):** Section 4 explicitly states `padding: var(--space-16) var(--space-8)` = 64px top/bottom, 32px left/right
- **SEVERITY:** BROKEN

**CRITICAL.** AD-CONVENTION-SPEC Section 4 explicitly defines header padding as `var(--space-16) var(--space-8)` (64px 32px). AD-003 uses `var(--space-12) var(--space-6)` (48px 24px). This is a direct convention violation. The header is 16px shorter vertically and 8px narrower horizontally than the spec requires. This makes the header feel cramped compared to OD-003's more generous 64px/32px.

**FINDING 9.2**
- **Selector+Line:** `.meta-line { margin-bottom: var(--space-2); }` (AD line 204-215) vs `.exploration-id { margin-bottom: var(--space-2); }` (OD line 204-211)
- **DIMENSION:** 9
- **CURRENT STATE (AD):** Meta line margin-bottom = 8px
- **EXPECTED STATE (OD):** Exploration ID margin-bottom = 8px
- **SEVERITY:** ACCEPTABLE (partial match)

The meta-line-to-title spacing is identical (8px). However, OD-003 additionally includes an archipelago map with `margin-top: var(--space-8)` (32px) and an exploration-meta block with `margin-top: var(--space-6)` (24px) -- richer header content structure. AD-003's simpler meta-line/title/subtitle header lacks these additional spacing rhythms but is not technically wrong for a simpler header.

---

### DIMENSION 10: Table Cell Padding

**FINDING 10.1**
- **Selector+Line:** `th { padding: var(--space-3) var(--space-4); }` (AD line 351-361) and `td { padding: var(--space-3) var(--space-4); }` (AD line 363-369) vs `.pattern-summary th, .pattern-summary td { padding: var(--space-2) var(--space-3); }` (OD line 659-662)
- **DIMENSION:** 10
- **CURRENT STATE (AD):** `th/td { padding: var(--space-3) var(--space-4); }` = 12px top/bottom, 16px left/right
- **EXPECTED STATE (OD):** Pattern summary uses `padding: var(--space-2) var(--space-3)` = 8px/12px. But OD's bookend-meta items use different padding. OD's main tables (in task steps) don't exist as standard HTML tables.
- **SEVERITY:** INCONSISTENT

AD uses 12px/16px table cell padding. OD's pattern-summary table uses 8px/12px (tighter, which fits its smaller 13px font-size context). The AD tables appear in the front bookend and RAR block at full body size, so the larger 12px/16px padding is proportionally reasonable. However, the convention spec Section 3 defines code block padding as `var(--space-6) var(--space-8)` (24px/32px) and doesn't explicitly define table cell padding, leaving this to interpretation. The mismatch with OD is a deliberate density difference (AD tables are in larger font-size context).

---

### DIMENSION 11: List Item Spacing

**FINDING 11.1**
- **Selector+Line:** `.step-list { gap: var(--space-4); }` (AD line 650-656) vs `.task-step { margin-bottom: var(--space-8); }` (OD line 472-475)
- **DIMENSION:** 11
- **CURRENT STATE (AD):** Step list items have `gap: var(--space-4)` = 16px between steps
- **EXPECTED STATE (OD):** Task steps have `margin-bottom: var(--space-8)` = 32px between steps
- **SEVERITY:** CRAMPED

AD step-list items are spaced at 16px. OD task steps are spaced at 32px. OD's steps include a vertical connector line (`::after` pseudo-element), step markers, titles, descriptions, and code blocks -- the 32px gap provides breathing room for this dense content. AD's step items are simpler (just a counter + text), but 16px is still notably tighter. OD also uses `.task-step__content { padding-top: 4px; }` for fine alignment. The doubled spacing in OD creates a more scannable list.

**FINDING 11.2**
- **Selector+Line:** `.verify-list { gap: var(--space-3); }` (AD line 755-759) vs `.verification-list li { padding: var(--space-3) 0; }` (OD line 587-592)
- **DIMENSION:** 11
- **CURRENT STATE (AD):** Verify list gap = 12px
- **EXPECTED STATE (OD):** Verification list item padding = 12px top/bottom + 1px border-bottom
- **SEVERITY:** ACCEPTABLE (partial match)

Both use approximately 12px between verification items. OD adds a 1px border-bottom separator (Cat 2) between items, giving slightly more visual separation. AD uses pure gap without separators. Functionally equivalent.

---

### DIMENSION 12: Inline Code Padding

**FINDING 12.1**
- **Selector+Line:** `code:not(pre code) { padding: 2px 6px; }` (AD line 286-292) vs `p code, li code { padding: 1px 5px; }` (OD line 628-632)
- **DIMENSION:** 12
- **CURRENT STATE (AD):** `padding: 2px 6px`
- **EXPECTED STATE (OD):** `padding: 1px 5px`
- **EXPECTED STATE (Convention):** Section 3 inline code: `padding: 2px 6px`
- **SEVERITY:** ACCEPTABLE (convention match)

AD uses 2px 6px padding which matches the AD-CONVENTION-SPEC Section 3 exactly. OD uses 1px 5px which is slightly tighter. AD correctly follows the convention here; OD's value predates the convention spec standardization.

---

## Critical Findings (Require Fix)

### FIX 1: Bento Grid Gap (BROKEN -- Convention Violation)
- **Location:** `.bento-grid { gap: var(--space-6); }` (axis-layer, line 509)
- **Required Change:** `gap: var(--space-6)` --> `gap: var(--space-8)` (24px --> 32px)
- **Authority:** AD-CONVENTION-SPEC Section 12.4 explicitly defines `.bento-grid { gap: var(--space-8); }`
- **Impact:** Restores correct ISLANDS ocean spacing between grid cells

### FIX 2: Header Padding (BROKEN -- Convention Violation)
- **Location:** `.header-inner { padding: var(--space-12) var(--space-6); }` (locked-layer, line 201)
- **Required Change:** `padding: var(--space-12) var(--space-6)` --> `padding: var(--space-16) var(--space-8)` (48px 24px --> 64px 32px)
- **Authority:** AD-CONVENTION-SPEC Section 4 explicitly defines `padding: var(--space-16) var(--space-8)`
- **Impact:** Restores correct header vertical presence and horizontal breathing

---

## Recommended Fixes (Non-Critical)

### REC 1: Body Line-Height Alignment
- **Location:** `body { line-height: 1.6; }` (locked-layer, line 122)
- **Recommended:** Consider `line-height: 1.7` to match OD-003 gold standard
- **Severity:** INCONSISTENT -- not a convention violation, but creates rhythm mismatch

### REC 2: Section-to-Section Spacing
- **Location:** `.page-container > section { margin-bottom: var(--space-chapter); }` (axis-layer, line 477-479)
- **Recommended:** Consider `margin-bottom: var(--space-20)` (80px) to match OD-003's sparse-sea ISLANDS rhythm
- **Severity:** CRAMPED -- weakens ISLANDS density pattern at 64px vs 80px

### REC 3: Category Group Spacing
- **Location:** `.category-group { margin-bottom: var(--space-12); }` (axis-layer, line 709-711)
- **Recommended:** Consider `margin-bottom: var(--space-16)` or `var(--space-20)` for stronger ISLANDS separation
- **Severity:** CRAMPED -- 48px between groups vs OD's 80px between islands

### REC 4: Step List Spacing
- **Location:** `.step-list { gap: var(--space-4); }` (axis-layer, line 655)
- **Recommended:** Consider `gap: var(--space-6)` (24px) for better scanability within step sequences
- **Severity:** CRAMPED -- 16px is tight for multi-line step items

---

## Dimension Scorecard

| # | Dimension | Severity | Convention Compliant? |
|---|-----------|----------|----------------------|
| 1 | Title-to-content spacing | ACCEPTABLE | YES |
| 2 | Section-to-section spacing | CRAMPED | YES (convention silent on section margins) |
| 3 | Paragraph spacing | INCONSISTENT | PARTIAL (line-height 1.6 vs 1.7) |
| 4 | Column gap | BROKEN | **NO** -- convention says --space-8, AD uses --space-6 |
| 5 | Container padding | INCONSISTENT | YES (different approach, same visual result top) |
| 6 | Margin consistency | CRAMPED | YES (convention silent on category group margins) |
| 7 | Vertical rhythm | INCONSISTENT | YES (more generous than OD, not wrong) |
| 8 | Responsive 768px | ACCEPTABLE | YES |
| 9 | Header meta spacing | BROKEN | **NO** -- convention says --space-16/--space-8, AD uses --space-12/--space-6 |
| 10 | Table cell padding | INCONSISTENT | YES (convention silent on table cells) |
| 11 | List item spacing | CRAMPED | YES (convention silent on step list gaps) |
| 12 | Inline code padding | ACCEPTABLE | YES (matches convention Section 3) |

---

## Overall Assessment

AD-003 has **2 BROKEN convention violations** that require immediate fix:
1. Bento grid gap (24px vs required 32px)
2. Header padding (48px/24px vs required 64px/32px)

Beyond these, AD-003 exhibits a systemic **CRAMPED** pattern -- spacing values are consistently 1 tier below OD-003's gold standard. This is not individually broken (the convention is silent on many of these values) but collectively creates a denser, tighter page than OD-003's ISLANDS pattern demands. The ISLANDS density pattern requires generous spacing between dense zones; AD-003's compressed spacing partially undermines this.

**Bottom line:** Fix the 2 BROKEN items. Consider the 4 RECOMMENDED items as a batch to restore ISLANDS-appropriate breathing room.
