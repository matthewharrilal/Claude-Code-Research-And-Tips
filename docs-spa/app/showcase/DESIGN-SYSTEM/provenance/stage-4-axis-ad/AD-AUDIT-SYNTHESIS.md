# AD Audit Synthesis -- Priority-Ranked Fix Guide

**Weaver:** Audit Weaver
**Date:** 2026-02-10
**Sources:** 23 audit reports (6 spacing, 6 overflow, 6 fresh-eyes, 3 visual, 1 structural, 1 provenance)
**Total Raw Findings:** ~250+ (de-duplicated to ~47 actionable items)

---

## Total Finding Count with Severity Breakdown

| Severity | Count | Description |
|----------|-------|-------------|
| BROKEN / SOUL VIOLATION | 7 | Convention violations or soul rule breaks requiring immediate fix |
| OVERFLOW | 11 | Content escaping containers, horizontal scroll risks |
| REJECT | 1 | Fresh-eyes "would not ship" finding |
| CRAMPED | 8 | Spacing tighter than convention/OD gold standard |
| INCONSISTENT | 14 | Divergence from OD or cross-page inconsistency |
| CONCERN | 12 | Fresh-eyes composition/UX observations |
| IMBALANCED | 8 | Visual weight or whitespace distribution issues |
| NITPICK | 6 | Minor polish items |
| CLEAN | Various | Passing checks |
| **TOTAL ACTIONABLE** | **~47** | Across all 6 AD files |

---

## Priority Ranking

**Priority order:** BROKEN > OVERFLOW > REJECT > CRAMPED > INCONSISTENT > CONCERN > IMBALANCED > NITPICK > CLEAN

---

## TIER 1: BROKEN / SOUL VIOLATIONS (Must Fix)

### FIX-001: AD-002 -- Remove border-radius: 4px from .callout [SOUL VIOLATION]
- **File:** AD-002-f-pattern.html
- **Location:** Axis-layer CSS, `.callout` rule (~L367)
- **Current:** `border-radius: 4px`
- **Required:** Remove declaration (locked-layer `border-radius: 0` already enforces via `:where()`, but `.callout` specificity overrides)
- **Confirmed by:** Spacing-A, Overflow-B, Visual-1 (programmatic), Structural
- **Impact:** 6 callout elements render with rounded corners, violating Soul Piece #1

### FIX-002: AD-004 -- Remove box-shadow from pre elements [SOUL VIOLATION]
- **File:** AD-004-spiral.html
- **Location:** Locked-layer CSS, `pre` rule (~L261)
- **Current:** `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`
- **Required:** Change to `box-shadow: none` or `box-shadow: var(--box-shadow)`
- **Confirmed by:** Visual-2 (programmatic), Structural
- **Impact:** 5 `<pre>` elements have shadow at both viewports, violating Soul Piece #4

### FIX-003: AD-006 -- Remove responsive box-shadow from pre elements [SOUL VIOLATION]
- **File:** AD-006-compound.html
- **Location:** CSS responsive rule targeting `pre` (appears at 768px only)
- **Current:** `box-shadow: rgba(0,0,0,0.1) 0px 4px 12px 0px` at narrow viewports
- **Required:** Remove responsive box-shadow declaration
- **Confirmed by:** Visual-3 (programmatic)
- **Impact:** 5 `<pre>` elements have shadow at 768px only

### FIX-004: AD-001 -- Change td border-bottom from 2px to 1px [BORDER VIOLATION]
- **File:** AD-001-z-pattern.html
- **Location:** Locked-layer CSS, `td` rule (~L504)
- **Current:** `border-bottom: 2px solid var(--color-border-subtle)`
- **Required:** `border-bottom: 1px solid var(--color-border-subtle)`
- **Confirmed by:** Overflow-B, Structural
- **Impact:** Violates OD-F-AP-001 (2px border epidemic)

### FIX-005: AD-003 -- Replace hardcoded h1 font-size with token [LOCKED-LAYER DEVIATION]
- **File:** AD-003-bento-grid.html
- **Location:** Locked-layer CSS, `h1` rule (~L134)
- **Current:** `font-size: 2.8rem`
- **Required:** `font-size: var(--type-page)` (which resolves to 2.625rem)
- **Confirmed by:** Structural
- **Impact:** Breaks token system; h1 size doesn't respond to token changes

### FIX-006: ALL 6 FILES -- Header padding convention violation [SYSTEMIC]
- **Files:** AD-001 through AD-006
- **Location:** Locked-layer CSS, `.header-inner` rule
- **Current:** `padding: var(--space-12) var(--space-6)` (48px 24px)
- **Required:** `padding: var(--space-16) var(--space-8)` (64px 32px)
- **Authority:** AD-CONVENTION-SPEC Section 4
- **Confirmed by:** All 6 Spacing-A auditors, Structural template comparison
- **Impact:** All headers 16px shorter vertically and 8px narrower horizontally than spec

### FIX-007: AD-003 -- Bento grid gap convention violation [CONVENTION VIOLATION]
- **File:** AD-003-bento-grid.html
- **Location:** Axis-layer CSS, `.bento-grid` rule (~L509)
- **Current:** `gap: var(--space-6)` (24px)
- **Required:** `gap: var(--space-8)` (32px)
- **Authority:** AD-CONVENTION-SPEC Section 12.4
- **Confirmed by:** Spacing-A AD-003

---

## TIER 2: OVERFLOW (Should Fix)

### FIX-008: AD-001, AD-002, AD-006 -- Wrap tables in overflow-x: auto container
- **Files:** AD-001 (5 tables), AD-002 (decision matrix), AD-006 (transition matrix)
- **Change:** Wrap `<table>` elements in `<div style="overflow-x: auto">`
- **Confirmed by:** Overflow-B on 3 files independently
- **Impact:** Tables cause page-level horizontal scroll at narrow viewports

### FIX-009: AD-001 -- Add overflow-wrap: break-word to .z-question
- **File:** AD-001-z-pattern.html
- **Location:** `.z-question` (60% width container)
- **Change:** Add `overflow-wrap: break-word` to `.z-question__text`
- **Confirmed by:** Overflow-B AD-001

### FIX-010: AD-003 -- Code blocks in 1x1 grid cells need overflow handling
- **File:** AD-003-bento-grid.html
- **Location:** `pre` elements inside `.bento-cell` (1x1)
- **Change:** Add `.bento-cell pre { min-width: 0; padding: var(--space-3) var(--space-4); }`
- **Confirmed by:** Overflow-B AD-003 (Findings 4.1, 4.2, 4.3)

### FIX-011: AD-003 -- Split layout inside 2x2 cell creates code overflow
- **File:** AD-003-bento-grid.html
- **Location:** `.split-layout` inside large bento cell
- **Change:** Add intermediate breakpoint to collapse split-layout at ~900px
- **Confirmed by:** Overflow-B AD-003 (Finding 4.3 BROKEN)

### FIX-012: AD-006 -- Triple-column layout too narrow for prose at medium viewports
- **File:** AD-006-compound.html
- **Location:** `.triple-column` grid
- **Change:** Add intermediate breakpoint (1024px) to collapse to 2-column or 1-column
- **Confirmed by:** Overflow-B AD-006 (Finding B-007)

### FIX-013: AD-006 -- Drop-cap in half-width grid cell creates narrow text channel
- **File:** AD-006-compound.html
- **Location:** `.z-top-left p.drop-cap`
- **Change:** Only apply drop-cap in full-width containers, not grid cells
- **Confirmed by:** Overflow-B AD-006 (Finding B-001)

### FIX-014: ALL 6 FILES -- Callout label font-size below minimum [SYSTEMIC]
- **Files:** AD-001 through AD-006
- **Location:** Locked-layer CSS, `.callout__label` rule
- **Current:** `font-size: 0.625rem` (10px)
- **Required:** `font-size: var(--type-meta)` (12px / 0.75rem)
- **Confirmed by:** 6+ independent auditors
- **Impact:** 10px text below accessibility minimum, below OD standard

### FIX-015: AD-006 -- Pattern echo label font-size 9px
- **File:** AD-006-compound.html
- **Location:** `.pattern-echo__label` (~L639)
- **Current:** `font-size: 9px`
- **Required:** At minimum `font-size: 0.625rem` (10px), ideally `var(--type-meta)` (12px)
- **Confirmed by:** Overflow-B AD-006 (Finding B-022)

---

## TIER 3: CRAMPED (Consider Fixing)

### FIX-016: AD-003 -- Section-to-section spacing tighter than ISLANDS pattern
- **File:** AD-003-bento-grid.html
- **Location:** `.page-container > section` margin-bottom
- **Current:** `var(--space-chapter)` (64px)
- **Suggested:** `var(--space-20)` (80px) to match OD-003 sparse-sea
- **Confirmed by:** Spacing-A AD-003 (Finding 2.1)

### FIX-017: AD-003 -- Category group spacing tighter than ISLANDS
- **File:** AD-003-bento-grid.html
- **Location:** `.category-group` margin-bottom
- **Current:** `var(--space-12)` (48px)
- **Suggested:** `var(--space-16)` or `var(--space-20)` for stronger separation
- **Confirmed by:** Spacing-A AD-003 (Finding 6.1)

### FIX-018: AD-003 -- Step list spacing too tight
- **File:** AD-003-bento-grid.html
- **Location:** `.step-list` gap
- **Current:** `var(--space-4)` (16px)
- **Suggested:** `var(--space-6)` (24px)
- **Confirmed by:** Spacing-A AD-003 (Finding 11.1)

### FIX-019: AD-004 -- Stratum transition zones too tight
- **File:** AD-004-spiral.html
- **Location:** `.stratum-transition` height
- **Current:** 48px total
- **Suggested:** Add padding for ~96px total (matching OD-004)
- **Confirmed by:** Spacing-A AD-004 (Findings #3, #9)

### FIX-020: AD-006 -- Grid gaps too tight for major axis zones
- **File:** AD-006-compound.html
- **Location:** `.bento-grid`, `.spiral-layout`, `.choreo-layout` gaps
- **Current:** `var(--space-4)` (16px)
- **Required:** `var(--space-8)` (32px) per Convention Spec Section 12.3
- **Confirmed by:** Spacing-A AD-006 (Dimension 4)

---

## TIER 4: INCONSISTENT (Normalize When Possible)

### FIX-021: AD-002 -- Callout label font-family
- **Current:** `var(--font-body)` (Inter)
- **Expected:** `var(--font-mono)` (JetBrains Mono) per OD gold standard
- **Confirmed by:** Spacing-A AD-002 (Finding F4)

### FIX-022: AD-006 -- spiral-medium border-left width
- **Current:** `3px solid var(--accent-green)` (~L868)
- **Expected:** `4px solid` per `--border-left-width` convention
- **Confirmed by:** Overflow-B AD-006 (Finding B-019 BROKEN)

### FIX-023: AD-002 -- Tension meter inversion (Act IV > Act III)
- **Current:** Act IV (Falling) shows 5/5 segments, Act III (Climax) shows 4/5
- **Expected:** Act III should be maximum (CRESCENDO peak)
- **Confirmed by:** Overflow-B AD-002 (Finding B-013 BROKEN)

### FIX-024: AD-001 -- Chapter divider asymmetric margins
- **Current:** `margin: var(--space-chapter) 0` (symmetric 64px/64px)
- **Suggested:** `margin-top: var(--space-chapter); margin-bottom: var(--space-between)` (64px/32px, OD pull-forward rhythm)
- **Confirmed by:** Spacing-A AD-001 (Finding F1)

### FIX-025: AD-001 -- Callout margin asymmetry
- **Current:** `margin-bottom: var(--space-8)` only (no top margin)
- **Suggested:** `margin: var(--space-6) 0` (symmetric, matching OD)
- **Confirmed by:** Spacing-A AD-001 (Finding F5)

### FIX-026: ALL 6 -- Body line-height 1.6 vs OD 1.7
- **Current:** `body { line-height: 1.6 }`
- **Suggested:** `line-height: 1.7` to match OD gold standard
- **Confirmed by:** 5 Spacing-A auditors
- **Note:** Convention spec is silent; this is a stylistic alignment decision

### FIX-027: AD-001 -- .callout--amber class undefined in CSS
- **Location:** HTML line ~1619 uses `class="callout callout--amber"`
- **Fix:** Change to `callout--caution` (which maps to `--accent-amber`)
- **Confirmed by:** Overflow-B AD-001

---

## TIER 5: STRUCTURAL / METADATA

### FIX-028: AD-001, AD-003, AD-005, AD-006 -- Add RAR sections
- **Files:** 4 of 6 files missing RESEARCH APPLICATION RECORD
- **Confirmed by:** Structural CHECK 3

### FIX-029: AD-CONVENTION-SPEC.md -- Promote Sections 12-16 from DRAFT to FROZEN
- **Confirmed by:** Provenance PA-11

### FIX-030: STAGE-HEADER.md -- Update status from PENDING to COMPLETE
- **Confirmed by:** Provenance PA-09 note

### FIX-031: AD-outbound-findings.md -- Fix YAML total_findings from 29 to 28
- **Confirmed by:** Provenance PA-05 note

### FIX-032: PIPELINE-MANIFEST.md -- Update Stage 4 from "TBD" to reflect 28 findings
- **Confirmed by:** Provenance cross-check notes

---

## Per-File Fix Lists

### AD-001-z-pattern.html
| Priority | Fix | Change |
|----------|-----|--------|
| BROKEN | FIX-004 | `td border-bottom: 2px` -> `1px` in locked-layer |
| BROKEN | FIX-006 | `.header-inner` padding 48/24 -> 64/32 |
| OVERFLOW | FIX-008 | Wrap 5 tables in `overflow-x: auto` container |
| OVERFLOW | FIX-009 | Add `overflow-wrap: break-word` to `.z-question__text` |
| OVERFLOW | FIX-014 | `.callout__label` font-size 10px -> 12px |
| INCONSISTENT | FIX-024 | Chapter divider asymmetric margins |
| INCONSISTENT | FIX-025 | Callout margin symmetry |
| INCONSISTENT | FIX-027 | `.callout--amber` -> `.callout--caution` |
| METADATA | FIX-028 | Add RAR section |

### AD-002-f-pattern.html
| Priority | Fix | Change |
|----------|-----|--------|
| SOUL | FIX-001 | Remove `border-radius: 4px` from `.callout` |
| BROKEN | FIX-006 | `.header-inner` padding 48/24 -> 64/32 |
| OVERFLOW | FIX-008 | Wrap decision matrix table in `overflow-x: auto` |
| OVERFLOW | FIX-014 | `.callout__label` font-size 10px -> 12px |
| INCONSISTENT | FIX-021 | `.callout__label` font-family body -> mono |
| INCONSISTENT | FIX-023 | Fix tension meter (Act IV should be < Act III) |

### AD-003-bento-grid.html
| Priority | Fix | Change |
|----------|-----|--------|
| BROKEN | FIX-005 | `h1 font-size: 2.8rem` -> `var(--type-page)` |
| BROKEN | FIX-006 | `.header-inner` padding 48/24 -> 64/32 |
| BROKEN | FIX-007 | `.bento-grid gap: var(--space-6)` -> `var(--space-8)` |
| OVERFLOW | FIX-010 | `pre` in 1x1 cells: reduce padding, add min-width: 0 |
| OVERFLOW | FIX-011 | Split layout inside 2x2 cell: add intermediate breakpoint |
| OVERFLOW | FIX-014 | `.callout__label` font-size 10px -> 12px |
| CRAMPED | FIX-016 | Section margins 64px -> 80px |
| CRAMPED | FIX-017 | Category group margins 48px -> 64px+ |
| CRAMPED | FIX-018 | Step list gap 16px -> 24px |
| METADATA | FIX-028 | Add RAR section |

### AD-004-spiral.html
| Priority | Fix | Change |
|----------|-----|--------|
| SOUL | FIX-002 | Remove `box-shadow` from `pre` in locked-layer |
| BROKEN | FIX-006 | `.header-inner` padding 48/24 -> 64/32 |
| OVERFLOW | FIX-014 | `.callout__label` font-size 10px -> 12px |
| CRAMPED | FIX-019 | Stratum transition zones: add padding for ~96px |

### AD-005-choreography.html
| Priority | Fix | Change |
|----------|-----|--------|
| BROKEN | FIX-006 | `.header-inner` padding 48/24 -> 64/32 |
| OVERFLOW | FIX-014 | `.callout__label` font-size 10px -> 12px |
| METADATA | FIX-028 | Add RAR section |

### AD-006-compound.html
| Priority | Fix | Change |
|----------|-----|--------|
| SOUL | FIX-003 | Remove responsive `box-shadow` from `pre` at 768px |
| BROKEN | FIX-006 | `.header-inner` padding 48/24 -> 64/32 |
| BROKEN | FIX-022 | `.spiral-medium` border-left 3px -> 4px |
| OVERFLOW | FIX-008 | Wrap transition matrix table in `overflow-x: auto` |
| OVERFLOW | FIX-012 | `.triple-column`: add intermediate breakpoint |
| OVERFLOW | FIX-013 | Drop-cap: only in full-width containers |
| OVERFLOW | FIX-014 | `.callout__label` font-size 10px -> 12px |
| OVERFLOW | FIX-015 | `.pattern-echo__label` 9px -> 12px |
| CRAMPED | FIX-020 | Grid gaps 16px -> 32px for major zone grids |
| METADATA | FIX-028 | Add RAR section |

---

## Cross-Page Patterns (Issues in Multiple Pages)

### Pattern 1: Template-Level Bugs (ALL 6 FILES)
These originated in the AD-SOUL-TEMPLATE.html and propagated to all builders:
1. **Header padding 48/24 instead of 64/32** -- Convention Spec Section 4 violation
2. **Callout label font-size 10px instead of 12px** -- Below `--type-meta` token minimum
3. **Body line-height 1.6 instead of 1.7** -- OD gold standard divergence
4. **Callout bottom-only margin** -- OD uses symmetric top+bottom

### Pattern 2: Dark Code Block Contrast
All 6 fresh-eyes auditors independently flagged dark code blocks as creating harsh contrast "holes" against the warm cream background. This is not a soul violation (convention Section 3 prescribes dark code blocks), but all 6 auditors identified it as the most disruptive visual element on every page.

### Pattern 3: Missing Navigation Aids
Fresh-eyes auditors flagged the lack of TOC, scroll progress indicators, and back-to-top affordances on pages ranging from 8,000px to 14,500px tall. This is a design-level concern, not a CSS fix.

### Pattern 4: Overflow at Medium Viewports (769-900px)
Multiple files have multi-column grids that are active between 769px and ~900px where they become too narrow for their content, but the 768px collapse breakpoint hasn't triggered yet. AD-003 (bento grid) and AD-006 (triple-column, bento, spiral, choreography) are most affected.

---

## Dual Nuclear Answers

### Nuclear Question 1: Worst Hygiene Issue Across All 6 AD Files

**The header padding template bug.** All 6 AD files use `padding: var(--space-12) var(--space-6)` (48px 24px) on `.header-inner` when Convention Spec Section 4 explicitly mandates `padding: var(--space-16) var(--space-8)` (64px 32px). This is:
- A direct convention violation (not subjective)
- Present in ALL 6 files (systemic, not one-off)
- Confirmed by ALL 6 spacing auditors independently
- A locked-layer template inheritance (single root cause)
- The largest single-dimension pixel deficit (16px vertical + 8px horizontal per side)

Close runner-up: The callout label 10px font-size (also all 6 files, also template-level).

### Nuclear Question 2: Worst Inconsistency Across All 6 AD Files

**The soul violation distribution is inconsistent.** AD-001, AD-003, and AD-005 are soul-clean (0 violations), while AD-002 has border-radius: 4px, AD-004 has box-shadow on pre, and AD-006 has responsive-only box-shadow on pre. A reader moving between explorations encounters different soul compliance levels. The soul should be universally enforced -- having some files clean and some violated undermines the "locked layer" concept. The root causes are different (AD-002 = axis-layer override; AD-004 = locked-layer modification; AD-006 = responsive rule), suggesting each builder introduced violations independently through different mechanisms.

---

## Ship Verdicts

Per-page ship verdicts from the Perceptual Audit (PA), including initial assessment and final status after fix execution.

| Page | Initial Verdict | Final Verdict | Key Fixes Applied |
|------|----------------|---------------|-------------------|
| AD-001 | SHIP (minor issues) | SHIP | Container width 860->1100px, footer added, dead zones reduced |
| AD-002 | DO-NOT-SHIP | SHIP | Container width 860->1100px, dead zones eliminated, footer added, responsive collapse |
| AD-003 | SHIP (minor issues) | SHIP | Container width 860->1100px, footer added, grid collapse at 769px |
| AD-004 | SHIP (minor issues) | SHIP | Container width 860->1100px, dead zones reduced, footer added |
| AD-005 | DO-NOT-SHIP | SHIP | Container width 860->1100px, dead zones halved, interstitials added, closing footer |
| AD-006 | DO-NOT-SHIP | SHIP | Container width 860->1100px, scroll-reveal defense, bento 960px collapse, footer bookend |

**DO-NOT-SHIP Resolutions:**
- **AD-002:** Initially flagged for empty Acts IV-V creating a ~3,700px blank void. Resolved by dead space elimination and visual ending addition.
- **AD-005:** Initially flagged for massive dead zones (~2 viewport heights) and missing transition markers. Resolved by halving dead zones, adding 3 compact interstitials, and closing footer.
- **AD-006:** Initially flagged for scroll-reveal hiding 40-60% of content and bento grid destruction at 768-960px. Resolved by defensive CSS (`opacity: 1 !important; transform: none !important; visibility: visible !important`) and early 960px grid collapse.

**Source:** DM-042 (dark-matter-paths.md), GAP-010 (provenance-gap-inventory.md). Fix commits: 4a4fa08 through a231977.

---

## Perceptual Audit Fix Reports

Cross-reference to all 6 per-page fix reports documenting actual CSS changes applied during the PA fix execution pass:

| Page | Fix Report Path | Key Changes |
|------|----------------|-------------|
| AD-001 | `explorations/axis/_perceptual-audit/AD-001/fix-report.md` | Width 860->1100px, dead space tightened, footer added |
| AD-002 | `explorations/axis/_perceptual-audit/AD-002/fix-report.md` | Width 860->1100px, dead zones eliminated, dark footer matching header |
| AD-003 | `explorations/axis/_perceptual-audit/AD-003/fix-report.md` | Width 860->1100px, code wrap in bento cells, footer horizontal rule |
| AD-004 | `explorations/axis/_perceptual-audit/AD-004/fix-report.md` | Width 860->1100px, dead zones reduced, centered footer label |
| AD-005 | `explorations/axis/_perceptual-audit/AD-005/fix-report.md` | Width 860->1100px, dead zones halved, 3 interstitials, italic serif footer |
| AD-006 | `explorations/axis/_perceptual-audit/AD-006/fix-report.md` | Width 860->1100px, scroll-reveal defense, 960px bento collapse, dark bookend footer |

**Note:** These reports document the ACTUAL changes made, complementing the RECOMMENDED changes listed in Tiers 1-5 above. Not all Tier 3-5 recommendations were implemented; fix execution prioritized Tier 1 (BROKEN/SOUL) and critical Tier 2 (OVERFLOW) items plus the systemic width/footer/dead-space issues.

**Source:** GAP-010B (provenance-gap-inventory.md).

---

## Decision Classification Framework

Methodology extracted from the PA lock sheet (81 decisions classified across 3 tiers). This framework defines how audit findings are categorized by modifiability.

### Tier Definitions

| Tier | Name | Count | Modification Rule |
|------|------|-------|-------------------|
| **ALWAYS-LOCKED** | Binary rule, 0 tolerance | 12 | Cannot be modified under any circumstances. Soul violations, font trio, palette boundaries. |
| **LOCKED** | Strong evidence, re-validation required | 34 | Modification requires re-validation by independent audit. Responsive breakpoints, spacing tokens, component conventions. |
| **CHALLENGEABLE** | Established convention, adaptable with rationale | 19 | May be overridden with documented rationale and perceptual evidence. Grid proportions, breathing zone percentages, section ordering. |

### Decision Tree

```
Is this a Soul Piece (border-radius, box-shadow, drop-shadow, font trio, palette)?
  YES → ALWAYS-LOCKED (0 tolerance, binary check)
  NO  → Was it established by the AD-CONVENTION-SPEC with "FROZEN" status?
          YES → LOCKED (re-validation required to change)
          NO  → Was it established by multi-auditor concordance (2+ independent confirmations)?
                  YES → LOCKED (empirical evidence weight)
                  NO  → CHALLENGEABLE (single-source or judgment-based)
```

### Examples

- **ALWAYS-LOCKED:** `border-radius: 0` on all elements, `box-shadow: none`, font trio (Instrument Serif / Inter / JetBrains Mono), 1100px container width (post-PA update)
- **LOCKED:** 768px responsive collapse for 2-3 column grids, `--type-meta` as minimum font size, header padding `var(--space-16) var(--space-8)`, 3px Cat 1 structural borders
- **CHALLENGEABLE:** Breathing zone percentage (15-25%), section-to-section spacing multiples, grid gap sizes for non-structural layouts, code block contrast level

**Source:** DM-008 (dark-matter-paths.md), `explorations/axis/_perceptual-audit/lock-sheet.md` (150 lines, 81 decisions).

---

## Systemic vs Sovereign Classification

Classification of PA findings by recurrence pattern. SYSTEMIC findings affect all 6 pages and indicate template-level or convention-level gaps. SOVEREIGN findings are page-specific and reflect individual axis pattern characteristics.

### Systemic Findings (All 6 Pages)

| Finding | Description | Root Cause |
|---------|-------------|------------|
| Container width | 860px too narrow, widened to 1100px | Template default in AD-SOUL-TEMPLATE |
| Dead space | Multi-viewport blank zones exceeding 300px | Generous spacing tokens without ceiling |
| Missing footer | Pages "just stop" without visual ending | No footer convention in template |
| Soul compliance | 0 violations across ~3,479 elements | Locked-layer enforcement working correctly |
| Callout label font-size | 10px below accessibility minimum | Template-level `.callout__label` rule |
| Header padding | 48px/24px instead of 64px/32px per spec | Template deviation from Convention Spec S4 |
| Body line-height | 1.6 instead of OD gold standard 1.7 | Template stylistic choice |
| Dark code block contrast | Harsh transition from warm cream to #1A1A1A | LOCKED convention (accepted trade-off) |

### Sovereign Findings (Page-Specific)

| Finding | Page | Description |
|---------|------|-------------|
| Bento grid collapse timing | AD-003, AD-006 | 4+-column grids need 960px collapse, not 768px |
| Spiral metaphor non-achievement | AD-004 | "Four stacked horizontal layers, not a spiral" — naming/framing tension |
| Choreography scroll-reveal | AD-005, AD-006 | JS-dependent content visibility; progressive enhancement violated |
| Q&A PULSE rhythm | AD-001 | Unique narrow-question/wide-answer visual beat |
| Tension meter confusion | AD-002 | Five-segment bar misread as "broken loading indicator" |
| Internal quality dialect | AD-003, AD-004 | Top third polished, lower sections wireframe-quality |

**Source:** GAP-018 (provenance-gap-inventory.md), DM-012 (dark-matter-paths.md), all 6 AUDIT-REPORT.md sovereignty sections.

---

## Audit Methodology

AD explorations were audited using the Perceptual Audit Skill (v2, later redesigned to v3 based on AD execution lessons). The methodology uses a 3-layer architecture:

- **Layer 1 — Binary Gates:** 7 mandatory pass/fail gates (Playwright alive, screenshots exist, cold look locked, perceptual language clean, systemic synthesis complete, fix trigger activated, independent verification)
- **Layer 2 — Structured Judgment:** 28 perceptual questions (PA-01 through PA-28) across 3 tiers, plus 23 anti-patterns (AP-01 through AP-23) as failure mode detection
- **Layer 3 — Free Perception:** Unstructured cold-look assessment before any research exposure (Temporal Firewall: perception before analysis)

Additional methodology elements: dual severity track (Rule + Perception), sovereignty classification (ALWAYS-LOCKED / LOCKED / CHALLENGEABLE), multi-agent architecture (2-3 independent auditors per page), and Playwright MCP for browser automation with programmatic DOM verification.

The skill was redesigned after AD execution into a formal 3-layer architecture based on failure analysis of 7 human interventions. Full analysis: `explorations/axis/_perceptual-audit/_skill-evolution/SYNTHESIS.md`

**Source:** Skill Analyst recommendation (skill-provenance-integration.md), GAP-025 methodology context.

---

## Perceptual Positive Findings

Confirmed strengths that CD MUST NOT break. These were independently validated by multiple perceptual auditors across all 6 pages and represent the design system's strongest assets.

- **Soul compliance:** 0 violations across ~3,479 elements, confirmed by dual method — programmatic 13,000-element sweep (comprehensive audit) AND independent perceptual auditors across all 6 pages (PA audit). This is the strongest soul validation in the pipeline's history.
- **5x5 transition grammar:** Validated across all 5 axis types. Each axis-density pairing produces a distinct but coherent transition mechanism. The grammar is complete and bounded (AD-F-024).
- **ATTENTION TOPOLOGY meta-equivalence:** The 3-way unification (axis = organization = density) was confirmed by independent auditors as VISIBLE, not just structural. Auditor D (AD-005): "one of the strongest visual rhythms I have seen." Auditor A (AD-006): "scholarly, deliberate, warm" at 1440px and 1024px (AD-F-023).
- **Border-weight geological encoding:** AD-004's graduated border widths (4px/3px/1px, skipping 2px) produce measurable perceptual depth. Both auditors called it the page's "crown jewel" and "genuine design innovation" (AD-F-014).
- **Typography velocity:** Serif questions / sans-serif answers create the PULSE rhythm (Q=inhale/sparse, A=exhale/dense). Independently confirmed as "one of the strongest aspects of the design" (AD-001).
- **Page personality:** "Scholarly, Deliberate, Warm" confirmed at 1440px across all 6 pages. Degradation to "Cramped" at 768px drove responsive convention fixes.
- **Convention-first methodology:** Pre-build 822-line convention spec prevented quality dialect divergence. All 6 builders produced pages with recognizable sibling resemblance despite different axis patterns.

**Source:** GAP-025 (provenance-gap-inventory.md), DM-009/DM-014 (dark-matter-paths.md), all 6 AUDIT-REPORT.md positive findings sections.

---

*AD Audit Synthesis complete. 2026-02-10. Enriched 2026-02-11 with ship verdicts, fix report cross-references, decision classification framework, systemic/sovereign classification, audit methodology, and perceptual positive findings.*
