# Component Library Gap Analysis — Flagship HTML vs 34-Component Library

**Auditor:** component-auditor agent
**Date:** 2026-02-17
**Source files analyzed:**
- `ephemeral/flagship-experiment/07-intentionality.html` (2,035 lines)
- `design-system/compositional-core/components/components.css` (1,196 lines, 26 families / 34 selectors)
- `design-system/compositional-core/components/component-inventory.md` (880 lines)
- `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (benchmark)

---

## Executive Summary

**Component library utilization: 3/26 families (11.5%) — CATASTROPHIC UNDERUSE**

The flagship builder created **15+ custom class patterns** from scratch while the design system provides validated equivalents for most of them. CD-006 (the 39/40 crown jewel) uses **11+ component families** from the library. The flagship uses **3**.

### Components USED from library (directly or near-match)
1. **Tables** (`table`, `th`, `td`) -- used, but with 7 custom variant classes invented
2. **Page Header** -- partially used (`.page-header` exists in library, builder's version diverges significantly with dark background)
3. **Page Footer** -- partially used (`.page-footer` exists in library, builder's version diverges with dark background)

### Components NOT used that SHOULD have been
1. **Callout family** (`.callout`, `.callout__label`, `.callout__body`) -- the FLAGSHIP component, 100% frequency across 27 files
2. **Code blocks** (`.code-snippet`, `pre`) -- dark code pattern exists
3. **Section indicator** (`.section-indicator`) -- exact match for `.section-meta`
4. **Essence pullquote** (`.essence-pullquote`) -- exact match for `.master-insight`
5. **Section zones** (`.section-zone`) -- exact match for zone containers
6. **Breathing zones** (`.breathing-zone`) -- functional match for divider system
7. **Skip link** (`.skip-link`) -- accessibility component missing entirely
8. **Focus-visible** (`*:focus-visible`) -- accessibility pattern missing entirely
9. **Selection styling** (`::selection`) -- identity pattern missing entirely
10. **File tree** -- not applicable (no file tree content)
11. **Decision matrix** -- not applicable (no decision grid content)
12. **Reasoning** -- not applicable (no reasoning display)
13. **Core abstraction** -- not applicable (no code proof pattern)
14. **Bento grid** -- not applicable (single-column layout)
15. **Stats bar** -- not applicable (no metadata display)

---

## Section-by-Section Mapping

### SECTION: Dark Header (lines 1046-1052)

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `.page-header` (custom dark bg) | `.page-header` (library: white bg, 3px bottom border) | PARTIAL MATCH. Library header is white bg + 3px red bottom border. Builder made dark header (inverted bg) which is a legitimate metaphor-driven departure for the assay bookend mechanism (#13). However, sub-elements reinvent the wheel. | N/A -- intentional | LOW |
| `.header-inner` | No direct equivalent; `.page-header` serves as container | Could be removed if `.page-header` handled max-width internally | HTML restructure | LOW |
| `.header-meta` | `.page-header__id` / `.exploration-id` | `.header-meta` --> `.page-header__id`. Both are: mono, uppercase, small, primary red, with letter-spacing. Near-identical CSS. | CSS-only class swap | MEDIUM |
| `.header-subtitle` | `.page-header__subtitle` / `.exploration-hypothesis` | `.header-subtitle` --> `.page-header__subtitle`. Both: body font, secondary color, max-width, smaller size. | CSS-only class swap | MEDIUM |

**Builder invented:** 4 custom classes (`.page-header` custom variant, `.header-inner`, `.header-meta`, `.header-subtitle`)
**Library equivalent:** `.page-header`, `.page-header__id`, `.page-header__title`, `.page-header__subtitle`

---

### SECTION: Section Meta Labels (throughout, 12 instances)

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `.section-meta` | `.section-indicator` | `.section-meta` --> `.section-indicator`. Both are: mono font, uppercase, small size, secondary color, letter-spacing. Library version adds `border-bottom: 1px solid` and `padding-bottom`. | CSS-only class swap | HIGH |

**Builder invented:** `.section-meta` (lines 1012-1019)
**Library equivalent:** `.section-indicator` (66% frequency, 18/27 files)

**Details:** The flagship's `.section-meta` uses:
- `font-family: var(--font-mono)` -- matches
- `font-size: 0.75rem` -- matches `var(--type-meta)`
- `color: #8A8580` -- DIVERGES from `var(--color-text-secondary)` (should be `#666666` or `#6B6B6B`)
- `letter-spacing: 0.08em` -- matches
- `text-transform: uppercase` -- matches

The only CSS difference is the library adds a subtle bottom border (which the flagship omits). This is a straightforward class swap with 12 instances across the page.

---

### SECTION: Component Blocks / Callouts (S3, S5, S7, S12)

This is the **MOST SIGNIFICANT GAP**. The callout family is the design system's signature component (100% frequency, 27/27 files), and the flagship reinvents it entirely.

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `.component-block` | `.callout` | `.component-block` --> `.callout`. Both share 2-zone DNA: 4px left border + label zone + body zone. | HTML restructure (mild) | HIGH |
| `.component-block .component-label` | `.callout__label` | `.component-label` --> `.callout__label`. Both: uppercase, small, mono/body font, colored. | CSS-only class swap | HIGH |
| `.component-block .component-body` | `.callout__body` / `.callout__content` | `.component-body` --> `.callout__body`. Both: body text, 1.7 line-height. | CSS-only class swap | HIGH |
| `.component-block.dense` | No direct variant; density should be via `.section-zone` context | Remove `.dense` modifier; use contextual CSS (`.section-zone--peak .callout`) | CSS restructure | MEDIUM |
| `.component-block.sparse` | No direct variant; density via `.section-zone` context | Remove `.sparse` modifier; use contextual CSS (`.section-zone--opening .callout`) | CSS restructure | MEDIUM |
| `.component-block.neutral` | `.callout--info` | `.component-block.neutral` --> `.callout.callout--info` | CSS-only class swap | HIGH |
| `.component-block.warm` | `.callout--tip` or `.callout--caution` | `.component-block.warm` --> `.callout.callout--tip` (green) or `.callout--caution` (amber) | CSS-only class swap | HIGH |
| `.component-block.resolution` | `.callout--tip` | `.component-block.resolution` --> `.callout.callout--tip` (green = resolution/success) | CSS-only class swap | HIGH |

**Builder invented:** 8 custom classes (`.component-block`, `.component-label`, `.component-body`, `.dense`, `.sparse`, `.neutral`, `.warm`, `.resolution`)
**Library equivalent:** `.callout`, `.callout__label`, `.callout__body`/`.callout__content`, `.callout--info`, `.callout--tip`, `.callout--gotcha`, `.callout--essence`, `.callout--challenge`

**Count of instances in flagship:**
- Section 3: 1 callout ("Density Rhythm")
- Section 5: 1 callout ("Combination Rule")
- Section 7: 6 callouts (3 tension + 3 resolution = 6 total)
- Section 12: 1 callout ("The Discovery")
- **Total: 9 callout instances** using custom `.component-block` instead of library `.callout`

**HTML change needed:**
```html
<!-- CURRENT (custom) -->
<div class="component-block">
  <div class="component-label">Density Rhythm</div>
  <div class="component-body"><p>...</p></div>
</div>

<!-- SHOULD BE (library) -->
<div class="callout callout--info" role="note">
  <div class="callout__label">Density Rhythm</div>
  <div class="callout__body"><p>...</p></div>
</div>
```

**CSS impact:** ~75 lines of custom `.component-block` CSS (lines 455-520) could be replaced by the library's `.callout` system (~100 lines in components.css), plus metaphor-specific overrides would be minimal (~15 lines for zone-responsive density modulation).

---

### SECTION: Pullquote / Master Insight (S2)

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `.pullquote-wrapper` | No wrapper needed; `.essence-pullquote` handles its own sizing | Remove wrapper div | HTML restructure | MEDIUM |
| `blockquote.master-insight` | `.essence-pullquote` | `blockquote.master-insight` --> `.essence-pullquote`. Both: 4px left border, serif italic, large type, sparse bg. | HTML + CSS restructure | HIGH |

**Builder invented:** 2 custom classes (`.pullquote-wrapper`, `.master-insight`)
**Library equivalent:** `.essence-pullquote` (83% frequency within CD, purple accent)

**Details:** The library `.essence-pullquote` uses:
- `border-left: 4px solid var(--accent-purple)` -- builder uses `var(--color-primary)` (red). This is a legitimate metaphor divergence.
- `font-family: var(--font-display)` + `font-style: italic` -- matches
- `font-size: var(--type-section, 26px)` -- builder uses `var(--type-h2)` (28px). Close match.
- `max-width: 55ch` -- builder uses 80% wrapper. Different approach, same intent.

The builder also adds `outline: 2px solid + outline-offset: 6px` (Mechanism #3 Solid Offset) which the library `.essence-pullquote` does not have. This is a valid mechanism addition that would need to be layered ON TOP of the library component.

**HTML change needed:**
```html
<!-- CURRENT -->
<div class="pullquote-wrapper">
  <blockquote class="master-insight"><p>...</p></blockquote>
</div>

<!-- SHOULD BE -->
<div class="essence-pullquote" style="max-width: 80%; margin: 0 auto;">
  <p>...</p>
</div>
```

---

### SECTION: Code / Sequence Blocks (S8, 4 instances)

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `.sequence-block` | `pre` / `.code-snippet` | `.sequence-block` --> `.code-snippet` or custom dark block inheriting from `pre`. Both: dark bg (#1A1A1A), light text, mono font. | HTML restructure | HIGH |
| `.sequence-block .seq-label` | `.code-snippet__header` / `.code-snippet__filename` | `.seq-label` --> `.code-snippet__header` content. Both: mono, uppercase, small, primary red. | HTML restructure | MEDIUM |
| `.sequence-block ul` | No direct equivalent (library uses `<pre>` for code content, not `<ul>`) | Keep `<ul>` structure but wrap in `.code-snippet` container | HTML restructure | MEDIUM |

**Builder invented:** 3 custom classes (`.sequence-block`, `.seq-label`, list styling within)
**Library equivalent:** `.code-snippet`, `.code-snippet__header`, `.code-snippet__content`

**Details:** The flagship's "sequence blocks" are dark containers with lists, not actual code. They serve a similar visual purpose to code blocks (dark bg, mono font, structural content). The library's `.code-snippet` component provides the dark background, mono font, and header structure. The builder would need to adapt the library component to hold `<ul>` content instead of `<pre>` content.

---

### SECTION: Section Dividers (6 instances)

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `.divider-smooth` | `.breathing-zone--tight` / `.stratum-boundary` | Partial match. Library's `.breathing-zone` has 3px top+bottom borders + padding, which is heavier than the flagship's 1px line. Library's `.stratum-boundary` (3px height bar) is closer but TT-ONLY (low confidence). | N/A -- custom is appropriate | LOW |
| `.divider-bridge` | `.breathing-zone` | Partial match. Different structural approach (flagship: thin line + bridge prose; library: padded container with borders). | N/A -- custom is appropriate | LOW |
| `.divider-breathing` | `.breathing-zone--release` | Partial match. Similar intent (major zone break) but different implementation. | N/A -- custom is appropriate | LOW |
| `.bridge-prose` | No equivalent | Unique to flagship metaphor (cognitive transition prose). No library component for this. | N/A | LOW |

**Verdict:** The divider system is one area where the flagship's custom approach is **MORE APPROPRIATE** than the library. The builder created a 3-tier divider system (smooth/bridge/breathing) that maps to the assay metaphor's zone transitions. The library's `.breathing-zone` serves a different structural purpose (full padded sections, not thin dividers). This is legitimate creative composition.

---

### SECTION: Zone Backgrounds (12 sections, lines 641-652)

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `.zone-s1` through `.zone-s12` | `.section-zone--opening`, `.section-zone--rising`, `.section-zone--building`, `.section-zone--peak`, `.section-zone--resolution` | The 12 per-section zone classes should map to 5 section-zone density levels. E.g., `.zone-s1` = `.section-zone--opening`, `.zone-s5` = `.section-zone--peak`, `.zone-s12` = `.section-zone--resolution`. | CSS restructure | MEDIUM |

**Builder invented:** 12 custom zone classes (`.zone-s1` through `.zone-s12`) with 12 unique background colors
**Library equivalent:** `.section-zone` with 5 density modifiers

**Details:** The builder created a unique background tint for EACH of 12 sections (12 zone tokens in `:root`). The library provides 5 density progression zones. The builder's approach is more granular (metaphor-driven chromatic channel) but could be implemented as customization ON TOP of the library's section-zone containers rather than as 12 entirely custom classes.

**However:** The builder's per-section zones also carry ~200 lines of zone-specific typography modulation (lines 738-963: letter-spacing, line-height, word-spacing per zone), spacing modulation (lines 840-890), border color shifts (lines 894-930), heading color shifts (lines 935-963). These are metaphor-specific modulations that go far beyond what the library's `.section-zone` provides. The library zones handle **container structure**; the builder's zones handle **6-channel metaphor expression**.

**Verdict:** Using `.section-zone` as the container base and layering zone-specific metaphor overrides on top would be appropriate. The 12 custom zone classes are partially justified (they carry genuine metaphor content), but the container structure should come from the library.

---

### SECTION: Tables (7 tables across S3, S4, S5, S8, S9, S10, S11)

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `table`, `th`, `td` (base) | `table`, `th`, `td` (library) | MATCH -- both use border-collapse, uppercase mono headers, 1px row borders. | None needed | LOW |
| `.table-compact` | No variant in library | Custom variant -- lighter treatment. Library has no table variants. | Keep custom | LOW |
| `.table-dense` | No variant in library | Custom variant -- tighter padding (10px 14px vs 12px 16px). Library has no density variants. | Keep custom | LOW |
| `.table-featured` | No variant in library | Custom variant -- 4px red left border. Library has no featured variant. | Keep custom | MEDIUM |
| `.table-moderate` | No variant in library | Custom variant -- 3px tan left border. | Keep custom | LOW |
| `.table-warning` | No variant in library | Custom variant -- 3px coral left border + header. | Keep custom | LOW |
| `.table-light` | No variant in library | Custom variant -- 1px all-around border, tiny headers. | Keep custom | LOW |
| `.table-findings` | No variant in library | Custom variant -- 3px top border. | Keep custom | LOW |
| `.table-wrapper` | Library uses `display: block; overflow-x: auto` on `table` | `.table-wrapper` provides a cleaner approach (wrapper div with `overflow-x: auto`). Library inlines overflow on `table` element. Builder's approach is slightly better. | Keep custom | LOW |
| `.findings-num` | No equivalent | Mono, small, red number styling. Table-specific content styling. | Keep custom | LOW |

**Verdict:** The base table component is used (partial match). The 7 table variant classes are legitimate customizations -- the library provides NO table variants. These are valid additions. The builder correctly uses the base table structure from the design system DNA (border-collapse, uppercase mono headers, 3px header border, 1px row borders).

---

### SECTION: Footer (lines 2019-2032)

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `.page-footer` (custom dark bg) | `.page-footer` (library: white bg, 3px top red border) | PARTIAL MATCH. Like header, builder made dark footer (bookend). Library footer is white with 3px top border. | N/A -- intentional | LOW |
| `.footer-inner` | No direct equivalent | Container max-width wrapper. | Keep custom | LOW |
| `.footer-label` | `.page-footer__label` | `.footer-label` --> `.page-footer__label`. Both: uppercase, letter-spacing, bold/600. | CSS-only class swap | MEDIUM |
| `.footer-closing` | No equivalent | Serif italic closing statement. Unique to flagship. | Keep custom | LOW |
| `.footer-meta` | `.page-footer__section` | Partial match. Both: meta size, secondary color. | CSS-only class swap | LOW |
| `.footer-provenance` | No equivalent | Detailed build provenance stamp. Unique to flagship. | Keep custom | LOW |

---

### SECTION: Typography Modulation (lines 738-963)

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `.closing-essence` | `.callout--essence .callout__body` | The "closing essence" styling (serif italic, 1.125rem) matches the essence callout body treatment. | CSS restructure | LOW |
| `.drop-cap` | `.answer__lead--dropcap` (library Q&A component) | `::first-letter` styling exists in library's Q&A pair. Both: serif display, 3.5em, float left. | N/A (different context) | LOW |

---

### SECTION: Tension Groups (S7)

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `.tension-group` | No equivalent | Width-varied container (90% + 5% left margin). Unique to flagship's tension/resolution pattern. | Keep custom | LOW |

---

### SECTION: Width Variation Helpers

| Custom Class | Standard Component | Exact Change | Change Type | Impact |
|---|---|---|---|---|
| `.narrow-table-wrapper` | No equivalent | 85% centered wrapper. Mechanism #6 implementation. | Keep custom | LOW |
| `.visually-prominent` | No equivalent | Accent border-left on specific paragraphs. | Keep custom | LOW |
| `.hypothesis-group-2`, `.hypothesis-group-3` | No equivalent | Progressive disclosure spacing. Mechanism #12 implementation. | Keep custom | LOW |

---

### SECTION: Missing Library Components (NOT in flagship at all)

These library components are **absent entirely** from the flagship:

| Library Component | Why Missing | Should It Be Added? | Impact |
|---|---|---|---|
| `.skip-link` | Accessibility omission | **YES** -- 100% frequency across all files, accessibility requirement | HIGH |
| `*:focus-visible` | Accessibility omission | **YES** -- 100% frequency across all files, keyboard navigation | HIGH |
| `::selection` | Identity omission | **YES** -- 81% frequency, identity signature (red selection) | MEDIUM |
| `.density-meter` | Not applicable to content | No | N/A |
| `.version-badge` | Not applicable | No | N/A |
| `.bento-grid` | Not applicable (single-column layout) | No | N/A |
| `.reasoning` | Not applicable (no reasoning content) | No | N/A |
| `.core-abstraction` | Not applicable (no code proof content) | No | N/A |
| `.file-tree` | Not applicable (no directory content) | No | N/A |
| `.decision-matrix` | Not applicable (no decision grid) | No | N/A |
| `.stats-bar` | Not applicable (no metadata bar) | No | N/A |
| `.breadcrumb` | Not applicable (standalone page) | No | N/A |
| `.Q&A pair` | Not applicable | No | N/A |

---

## CD-006 Benchmark Comparison

CD-006 (39/40 score) uses these library components:

| Component | CD-006 Usage Count | Flagship Usage Count |
|---|---|---|
| `.callout` family (all variants) | 16 instances (essence, info, tip, gotcha, challenge) | 0 (9 reinvented as `.component-block`) |
| `.code-snippet` | 2+ instances | 0 (4 reinvented as `.sequence-block`) |
| `.file-tree` | 2 instances | 0 (N/A -- no file tree content) |
| `.decision-matrix` | 1 instance | 0 (N/A) |
| `.reasoning` | 2 instances | 0 (N/A) |
| `.core-abstraction` | 2 instances | 0 (N/A) |
| `.bento-grid` | 2 grids | 0 (N/A -- single-column) |
| `.version-badge` | 1 instance | 0 |
| `.skip-link` | 1 instance | 0 (MISSING) |
| `.section-indicator` | Multiple | 0 (12 reinvented as `.section-meta`) |
| `.callout--essence` | 3 instances | 0 (1 reinvented as `.master-insight`) |
| **Total families used** | **11+** | **3 (partial)** |

**The gap is stark.** CD-006 uses 11+ component families; the flagship uses 3 (partially). CD-006 scored 39/40; the flagship received "DO NOT SHIP."

---

## Quantified Summary

### Custom Classes Created (from scratch)
| Category | Classes | Count |
|---|---|---|
| Callout system | `.component-block`, `.component-label`, `.component-body`, `.dense`, `.sparse`, `.neutral`, `.warm`, `.resolution` | 8 |
| Pullquote | `.pullquote-wrapper`, `.master-insight` | 2 |
| Code blocks | `.sequence-block`, `.seq-label` | 2 |
| Section meta | `.section-meta` | 1 |
| Zone system | `.zone-s1` through `.zone-s12` | 12 |
| Dividers | `.divider-smooth`, `.divider-bridge`, `.divider-breathing`, `.bridge-prose` | 4 |
| Tables | `.table-compact`, `.table-dense`, `.table-featured`, `.table-moderate`, `.table-warning`, `.table-light`, `.table-findings`, `.table-wrapper`, `.findings-num`, `.narrow-table-wrapper` | 10 |
| Header/Footer | `.header-inner`, `.header-meta`, `.header-subtitle`, `.footer-inner`, `.footer-label`, `.footer-closing`, `.footer-meta`, `.footer-provenance` | 8 |
| Typography | `.closing-essence`, `.drop-cap` | 2 |
| Layout | `.tension-group`, `.visually-prominent`, `.hypothesis-group-2`, `.hypothesis-group-3` | 4 |
| Container | `.page-container` | 1 |
| **TOTAL** | | **54 custom classes** |

### Library Replacements Available
| Custom Class(es) | Library Replacement | Instances | Change Difficulty |
|---|---|---|---|
| `.component-block` + variants (8 classes) | `.callout` family (6 variants) | 9 instances | HTML restructure (moderate) |
| `.section-meta` | `.section-indicator` | 12 instances | CSS-only class swap (easy) |
| `.pullquote-wrapper` + `.master-insight` | `.essence-pullquote` | 1 instance | HTML restructure (moderate) |
| `.sequence-block` + `.seq-label` | `.code-snippet` family | 4 instances | HTML restructure (moderate) |
| `.header-meta` | `.page-header__id` | 1 instance | CSS-only class swap (easy) |
| `.header-subtitle` | `.page-header__subtitle` | 1 instance | CSS-only class swap (easy) |
| `.footer-label` | `.page-footer__label` | 1 instance | CSS-only class swap (easy) |
| **TOTAL replaceable** | | **29 instances** | |

### Custom Classes That Are Justified (no library equivalent)
| Category | Classes | Justification |
|---|---|---|
| Divider system | `.divider-smooth`, `.divider-bridge`, `.divider-breathing`, `.bridge-prose` | No library equivalent; 3-tier system maps to metaphor |
| Table variants | 7 variant classes + `.table-wrapper` | Library has no table variants; these are valid mechanism implementations |
| Zone modulation | `.zone-s1` through `.zone-s12` + associated typography/spacing overrides | Metaphor-driven 6-channel modulation; could use `.section-zone` as BASE but overrides are justified |
| Layout helpers | `.tension-group`, `.narrow-table-wrapper`, `.visually-prominent`, hypothesis groups | Mechanism implementations with no library equivalent |
| Footer unique | `.footer-closing`, `.footer-provenance` | Unique content types |
| Container | `.page-container` | Standard max-width container (library uses different approach) |

### Missing Accessibility/Identity Components
| Component | Priority | Lines to Add |
|---|---|---|
| `.skip-link` | **CRITICAL** | ~12 lines HTML + CSS (from library) |
| `*:focus-visible` | **CRITICAL** | ~3 lines CSS (from library) |
| `::selection` | **HIGH** | ~3 lines CSS (from library) |

---

## Priority-Ranked Remediation Actions

### CRITICAL (Must Fix)
1. **Add `.skip-link`** -- accessibility requirement, 100% frequency, ~15 lines total
2. **Add `*:focus-visible`** -- accessibility requirement, 100% frequency, ~3 lines CSS
3. **Add `::selection`** -- identity signature, 81% frequency, ~3 lines CSS

### HIGH (Strong Improvement)
4. **Replace `.component-block` --> `.callout`** -- 9 instances, THE flagship component, eliminates ~75 lines custom CSS, adds design system identity. Change type: HTML + CSS restructure.
5. **Replace `.section-meta` --> `.section-indicator`** -- 12 instances, trivial class swap, adds subtle bottom border for visual consistency. Change type: CSS-only.
6. **Replace `.master-insight` --> `.essence-pullquote`** -- 1 instance, the singular focal point benefits from library purple accent vocabulary. Change type: HTML restructure.

### MEDIUM (Noticeable Improvement)
7. **Replace `.sequence-block` --> `.code-snippet`** -- 4 instances, aligns dark code blocks with library DNA. Change type: HTML restructure.
8. **Replace `.header-meta`/`.header-subtitle` --> `.page-header__id`/`.page-header__subtitle`** -- 2 instances, naming alignment. Change type: CSS class swap.
9. **Use `.section-zone` as base container** for zone sections instead of raw `<section>` tags. Layer metaphor overrides on top. Change type: HTML + CSS restructure.

### LOW (Minor / Keep Custom)
10. Table variants -- keep all 7 custom variants (no library equivalents)
11. Divider system -- keep (no library equivalent, metaphor-appropriate)
12. Zone typography/spacing modulation -- keep (metaphor-specific, no library equivalent)
13. Layout helpers -- keep (mechanism implementations)
14. Footer custom elements -- keep (unique content)

---

## Impact Estimate

**If all HIGH + CRITICAL fixes applied:**
- Library utilization: 3/26 --> ~10/26 families (38%)
- Custom CSS eliminated: ~90 lines (replaced by library)
- Custom CSS remaining: ~850 lines (justified mechanism/metaphor implementations)
- Accessibility components added: 3 (skip-link, focus-visible, selection)
- HTML elements changed: ~32 instances
- Identity alignment: SIGNIFICANT improvement -- callout DNA, section indicators, and essence pullquote would all match the design system's validated patterns

**If all MEDIUM fixes also applied:**
- Library utilization: ~12/26 families (46%)
- Custom CSS eliminated: ~120 lines total
- Still below CD-006's 11+ families, but competitive given the flagship's prose-dominant content (fewer opportunities for file-tree, decision-matrix, bento-grid, reasoning, etc.)

---

## Root Cause Analysis

**Why did the builder reinvent 15+ components?**

1. **The execution prompt did not mandate library consultation.** The flagship prompt focused on mechanisms, metaphor channels, and intentionality dimensions. It did not explicitly require `components.css` consultation or library class usage.

2. **The builder prioritized metaphor vocabulary.** Every custom class name maps to the builder's internal metaphor language (`.component-block` = generic mechanism term, `.zone-s1` = per-section zone). Library class names (`.callout`, `.section-indicator`) are design system vocabulary that the builder did not adopt.

3. **Zero inter-agent messaging.** No agent asked "have you checked the component library?" The planner couldn't flag the gap because it never saw the builder's CSS choices in progress.

4. **The 2-zone DNA IS preserved.** Despite using custom names, the builder's `.component-block` correctly implements the 2-zone DNA pattern (4px left border + label + body). The structural knowledge transferred; the CLASS NAMES did not. This suggests the builder understood the design system's principles but did not use its vocabulary.

5. **The page header reference file in CLAUDE.md says `merged-components.css`** but the actual file is `components.css`. This path mismatch may have prevented the builder from finding the component library at all.

---

## Conclusion

The flagship HTML demonstrates strong MECHANISM understanding (14 mechanisms correctly deployed, 6 metaphor channels, proper 2-zone DNA) but CATASTROPHIC VOCABULARY failure (3/26 component families used). The builder reinvented the design system's most fundamental component (the callout) under a different name, while producing structurally identical output.

The remediation path is clear: replace custom class names with library equivalents where they exist (primarily callouts, section indicators, and the pullquote), add missing accessibility components, and accept justified custom classes (dividers, table variants, zone modulations) as legitimate metaphor-driven extensions.

**Estimated effort for CRITICAL + HIGH fixes: ~45 minutes**
**Estimated effort for all fixes: ~90 minutes**

---

**END COMPONENT LIBRARY GAP ANALYSIS**
