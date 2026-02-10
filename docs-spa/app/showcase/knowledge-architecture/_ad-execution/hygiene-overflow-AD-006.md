# Hygiene Audit B — Overflow & Balance: AD-006 Compound

**Auditor:** Hygiene-Auditor-B
**File:** `explorations/axis/AD-006-compound.html`
**Gold Standard:** `explorations/organizational/OD-006-creative.html`
**Date:** 2026-02-10
**Scope:** 12 dimensions of overflow, boundary, and visual balance

---

## Summary

**Total findings: 19**
- BROKEN: 2
- OVERFLOW: 5
- IMBALANCED: 7
- ACCEPTABLE: 5

---

## Dimension 1: Text Overflow

### Finding B-001
- **Selector:** `.z-top-left p.drop-cap` (line ~1194-1205)
- **Dimension:** 1 — Text Overflow
- **Current State:** Drop cap `::first-letter` at `3.5em` float-left within a grid cell that has `padding: var(--space-8)` (32px). The `.z-top-left` grid cell has implicit width of `1fr` (half container). On narrow viewports approaching 768px (but above the breakpoint), the drop-cap float combined with the paragraph text creates a very narrow text channel (~20ch effective width), causing awkward text wrapping.
- **Expected State:** OD-006 drop caps (`section-opening::first-letter` at `4.2em`) live inside full-width containers (860px max), giving 60ch+ effective width after float. AD-006 should ensure drop caps only appear in full-width content areas, not half-width grid cells.
- **Severity:** OVERFLOW

### Finding B-002
- **Selector:** `.discovery-item p` (lines ~2105-2141)
- **Dimension:** 1 — Text Overflow
- **Current State:** Discovery log items contain long, unbroken finding descriptions (e.g., AD-F-028 at ~180 characters) inside a container with `padding: var(--space-6)` (24px). No `max-width` set on the `<p>` elements inside discovery items. The global `p { max-width: 70ch }` applies, but within the `.discovery-log` bordered container (860px - 2*24px padding - 2*3px border = ~806px effective), 70ch fits but leaves minimal right margin.
- **Expected State:** Text should have comfortable reading measure. The content fits technically but the discovery log container is a dense block with no visual breathing room on the right edge.
- **Severity:** ACCEPTABLE

### Finding B-003
- **Selector:** `pre code` in Section 6 (lines ~1905-1941)
- **Dimension:** 1 — Text Overflow
- **Current State:** Code block has `overflow-x: auto` on the `pre` element (line 317), which correctly enables horizontal scrolling. Lines in the code example are moderate length (~50ch). No text overflow issue.
- **Expected State:** Matches OD-006 pattern where code blocks also use `overflow-x: auto`.
- **Severity:** ACCEPTABLE

---

## Dimension 2: Container Boundary

### Finding B-004
- **Selector:** `.bento-item--featured::after` (lines ~813-823)
- **Dimension:** 2 — Container Boundary
- **Current State:** The solid offset pseudo-element uses `right: calc(var(--offset-x) * -1)` and `bottom: calc(var(--offset-y) * -1)`, which extends 4px beyond the element boundary in both directions. Inside the bento grid (which has `gap: var(--space-4)` = 16px), this 4px protrusion into the gap is fine. However, the featured item spans 2 columns and 2 rows. The pseudo-element's `z-index: -1` places it behind but it bleeds 4px rightward toward `bento-a`/`bento-b` and 4px downward toward `bento-c`/`bento-d`, reducing the visual gap from 16px to 12px on those edges only.
- **Expected State:** OD-006 `.solid-offset::after` uses `width: 100%; height: 100%` instead of right/bottom negative calc, which also extends beyond the parent but is architecturally identical. The 4px bleed into the 16px gap is the intended neobrutalist effect. Consistent with gold standard.
- **Severity:** ACCEPTABLE

### Finding B-005
- **Selector:** `.choreo-hub::after` (lines ~916-926)
- **Dimension:** 2 — Container Boundary
- **Current State:** Same solid-offset pattern as B-004. The hub pseudo-element extends 4px beyond boundaries. In the choreography grid (`grid-template-columns: 1fr 1.618fr 1fr`, `gap: var(--space-4)` = 16px), the hub's offset bleeds toward all 4 spokes. This is architecturally correct for the neobrutalist language.
- **Expected State:** Consistent with OD-006 solid offset usage.
- **Severity:** ACCEPTABLE

### Finding B-006
- **Selector:** `.pattern-echo::before, .pattern-echo::after` (lines ~648-741)
- **Dimension:** 2 — Container Boundary
- **Current State:** Pattern echo miniature visualizations use absolute positioning with hardcoded pixel values (e.g., `top: 12px; left: 12px; width: 56px; height: 56px` for `.echo-z::before`). The container is `80px x 80px`. Some pseudo-elements use `position: absolute` with coordinates that could clip at the container edge. The parent `.pattern-echo` has `overflow: hidden` (line 636), so any bleed is clipped. This is correct containment.
- **Expected State:** The `overflow: hidden` on `.pattern-echo` prevents any visual bleed. Properly contained.
- **Severity:** ACCEPTABLE

---

## Dimension 3: Horizontal Scroll

### Finding B-007
- **Selector:** `.triple-column` (lines ~764-788)
- **Dimension:** 3 — Horizontal Scroll
- **Current State:** Three-column grid (`1fr 1fr 1fr`) with `gap: var(--space-4)` (16px) inside `.page-container` (860px max). Each cell gets `padding: var(--space-6)` (24px) and `border: 3px solid`. Effective cell width: (860 - 2*16) / 3 = ~276px per cell, minus 2*24px padding and 2*3px border = ~222px content width. At body `font-size: 1rem` (16px), this gives ~14ch effective width per cell. Content is short prose paragraphs but the narrow measure creates text that wraps aggressively (2-3 words per line).
- **Expected State:** OD-006 does not have an equivalent 3-column prose layout. At desktop width this is tight but functional. However, there is no `@media` breakpoint between 768px (full collapse) and desktop that handles medium widths (769-1024px) where the triple column becomes ~180px per cell. This creates near-illegible columns.
- **Severity:** OVERFLOW

### Finding B-008
- **Selector:** `.bento-grid` (lines ~794-827)
- **Dimension:** 3 — Horizontal Scroll
- **Current State:** Four-column grid (`repeat(4, 1fr)`) with `gap: var(--space-4)` (16px). At 860px container: (860 - 3*16) / 4 = ~203px per cell. The smaller cells (bento-a through bento-d) each get `padding: var(--space-6)` (24px) and `border: 3px`, leaving ~149px content width. This is adequate for the short card-style content. However, at medium viewport widths (769-860px), cells shrink further. No intermediate breakpoint exists between the 768px full collapse and desktop.
- **Expected State:** OD-006 does not use a 4-column bento grid. The grid collapses directly to `1fr` at 768px. Between 769-860px, the 4-column bento becomes cramped.
- **Severity:** IMBALANCED

### Finding B-009
- **Selector:** `.transition-matrix table` (lines ~1551-1604)
- **Dimension:** 3 — Horizontal Scroll
- **Current State:** 6-column table (From\To + 5 patterns). Table has `width: 100%` (line 398). At 860px: ~143px per column. Cell content is short ("Smooth", "Bridge", "Breathing") so no horizontal overflow occurs. At 768px mobile breakpoint, the table does NOT collapse — there is no responsive handling for tables in the mobile breakpoint (lines 1086-1124). A 6-column table at 768px or below gets ~128px per column which is still adequate for single-word content.
- **Expected State:** OD-006's tables also lack explicit mobile handling. However, the transition matrix is wider (6 cols) than any OD-006 table. On viewports below ~500px (phone), the table will require horizontal scrolling, but the `pre` has `overflow-x: auto` — tables do NOT. Tables lack `overflow-x: auto` wrapper.
- **Severity:** OVERFLOW

---

## Dimension 4: Code Block Overflow

### Finding B-010
- **Selector:** `pre` (lines ~309-319)
- **Dimension:** 4 — Code Block Overflow
- **Current State:** `pre` has `overflow-x: auto` (line 317). The code block in Section 6 (lines 1905-1941) contains syntax-highlighted CSS with lines ~55ch max. At `font-size: 0.875rem` (14px), JetBrains Mono at that size gives ~7.7px per character, so 55ch = ~424px. Well within the ~800px effective width.
- **Expected State:** Matches OD-006 code handling. No overflow issue.
- **Severity:** ACCEPTABLE

---

## Dimension 5: Visual Weight Balance

### Finding B-011
- **Selector:** Section 1 `.z-layout` (lines ~597-604, ~1192-1262)
- **Dimension:** 5 — Visual Weight Balance
- **Current State:** The Z-layout is a 2x2 grid. Top-left and bottom-right have `background: var(--color-zone-dense)` (#FFFFFF) plus `border: 3px solid`. Top-right and bottom-left have no background/border treatment. This creates a diagonal visual weight pattern (heavy TL + heavy BR, light TR + light BL). The top-right contains the pattern-echo-grid (6 small 80px boxes) while the bottom-left contains an essence callout. The top-right has less visual mass than the bottom-left.
- **Expected State:** Z-pattern visual weight should follow the diagonal: TL (heavy) -> TR (scanned) -> BL (transition) -> BR (CTA/conclusion). The current weighting (TL=heavy text+border, TR=light grid, BL=callout, BR=heavy text+border) creates a balanced diagonal but the off-diagonal (TR/BL) is unbalanced — the callout is visually heavier than the small pattern grid.
- **Severity:** IMBALANCED

### Finding B-012
- **Selector:** Section 4 `.spiral-layout` (lines ~848-881, ~1637-1696)
- **Dimension:** 5 — Visual Weight Balance
- **Current State:** The spiral grid has `grid-template-columns: 1fr 1fr 1.618fr`. The narrow column (1.618fr) is actually the WIDEST, which is correct for golden ratio but counterintuitive in naming. `spiral-narrow` has `grid-area: spiral-narrow` spanning 2 rows of the right column. `spiral-wide` spans 3 columns of the top row. The visual weight concentrates in the wide top band and the narrow right column, with the medium and deep sections in the bottom-left 2x2 quadrant.
- **Expected State:** OD-006 uses a simpler linear stratum layout for confidence-based content. The spiral grid creates an intentional proportional imbalance (golden ratio), but the border-left colors (blue=4px, green=3px, amber=4px, purple=4px) are inconsistent — the medium stratum uses 3px while all others use 4px. This breaks the confidence-border mapping where wider = more confident.
- **Severity:** IMBALANCED

---

## Dimension 6: Whitespace Dead Zones

### Finding B-013
- **Selector:** Between Section 1 and Section 2 (lines ~1264-1271)
- **Dimension:** 6 — Whitespace Dead Zones
- **Current State:** `.axis-section` has `padding-top: var(--space-16)` (64px) and `padding-bottom: var(--space-16)` (64px). Adjacent sections also have `border-top: 3px solid var(--color-border)`. Total vertical gap between last content in S1 and first content in S2: 64px (S1 bottom padding) + 3px (border) + 64px (S2 top padding) = 131px of whitespace. This is excessive compared to inter-section spacing in the page.
- **Expected State:** OD-006 uses `--space-chapter` (64px) between major sections via `.doc-section` margins, creating ~64-80px gaps. AD-006's 131px gap is approximately double.
- **Severity:** IMBALANCED

### Finding B-014
- **Selector:** `.z-top-right` containing `.pattern-echo-grid` (lines ~1208-1230)
- **Dimension:** 6 — Whitespace Dead Zones
- **Current State:** The z-top-right grid cell has `padding: var(--space-8)` (32px) but no background or border. The pattern-echo-grid inside is `repeat(3, 80px) x repeat(2, 80px)` = 248px wide x 168px tall (including 8px gaps). The grid cell itself could be ~398px wide at desktop. This leaves ~118px of empty space to the right of the echo grid within the cell. The grid is not centered — it left-aligns by default.
- **Expected State:** The echo grid should either fill its container or be explicitly centered. The dead space to the right creates an asymmetric void that makes the Z-pattern diagonal feel weighted to the left.
- **Severity:** IMBALANCED

---

## Dimension 7: Crowding Hotspots

### Finding B-015
- **Selector:** `.bento-grid` smaller cells (lines ~1491-1529)
- **Dimension:** 7 — Crowding Hotspots
- **Current State:** Bento cells `bento-a` through `bento-d` each contain: `.bento-item__meta` (12px uppercase), `.bento-item__title` (1.375rem italic), one paragraph, and a bold density line. With `padding: var(--space-6)` (24px) and `border: 3px`, the effective content width is ~149px (see B-008). At this width, the title wraps to 2-3 lines, and the density label wraps. The cells feel cramped with 4 text elements stacked in a narrow column.
- **Expected State:** OD-006 avoids multi-element stacking in narrow containers. The bento small cells pack too much content for their width. Either reduce content per cell or increase cell padding.
- **Severity:** OVERFLOW

### Finding B-016
- **Selector:** `.choreo-spoke` containers (lines ~927-935, ~1732-1810)
- **Dimension:** 7 — Crowding Hotspots
- **Current State:** Choreography spokes have `padding: var(--space-6)` (24px) and `border: 3px solid`. In the grid (`1fr 1.618fr 1fr`), spoke width at 860px is: (860 - 2*16) / (1+1.618+1) * 1 = ~229px. Minus padding and border: ~175px content width. Each spoke contains a `.spoke-label`, a paragraph, and an evidence line — three text elements. At 175px width, paragraphs wrap aggressively. The content is readable but tight.
- **Expected State:** OD-006's hub-spoke (Section 5) uses a `territory-grid` with larger cells. AD-006 spokes are narrower due to the golden-ratio hub allocation.
- **Severity:** IMBALANCED

---

## Dimension 8: Z-index / Overlap

### Finding B-017
- **Selector:** `.scroll-witness` (z-index: 999, line 516) + `.axis-indicator` (z-index: 998, line 529) + header
- **Dimension:** 8 — Z-index / Overlap
- **Current State:** The scroll witness is a 3px fixed bar at top (z-index 999). The axis indicator is sticky at `top: 3px` (z-index 998), positioned exactly below the scroll witness. The header is below both. This stacking is correct — scroll witness on top, axis indicator below it, content below both. No overlap conflicts.
- **Expected State:** OD-006 uses a different architecture (sticky sidebar scroll witness, not fixed top bar). AD-006's fixed-top + sticky-below pattern is clean. However, the axis indicator has `border-bottom: 1px solid var(--color-border)` which at z-index 998 could overlap section content during scroll. Since `position: sticky` with `top: 3px` keeps it pinned, this is intentional and non-conflicting.
- **Severity:** ACCEPTABLE (note: different architecture from OD-006 but internally consistent)

---

## Dimension 9: Image / Diagram Spacing

### Finding B-018
- **Selector:** `.pattern-echo-grid` (lines ~622-741)
- **Dimension:** 9 — Image / Diagram Spacing
- **Current State:** The pattern echo grid is the only visual diagram in AD-006. It has `gap: var(--space-2)` (8px) between cells and sits inside `.z-top-right` with `padding: var(--space-8)` (32px). Spacing between the grid and surrounding text is governed by the grid cell padding. There is no explicit `margin-bottom` on the grid itself, so any text below it within the same cell would butt directly against the grid.
- **Expected State:** OD-006's `.visual-index-cell` elements have explicit spacing. The pattern echo grid should have `margin-bottom: var(--space-4)` or similar if content follows it within the same container. Currently, it's the only content in its cell, so no collision occurs.
- **Severity:** ACCEPTABLE (no actual collision — the grid is sole content in its cell)

---

## Dimension 10: Border Consistency

### Finding B-019
- **Selector:** Multiple — cross-section border audit
- **Dimension:** 10 — Border Consistency
- **Current State:** AD-006 uses a 3-category border system per convention:
  - **Cat 1 (structural, 3px):** Section separators (line 565), header bottom (line 247), grid cell borders (lines 614, 773, 804, 909, 929, 981, 1056), table header bottom (line 411), triple-column heading bottom (line 787), discovery log (line 981), open details summary (line 1068)
  - **Cat 2 (separator, 1px):** Table row bottom (line 419), axis indicator bottom (line 539), f-scanline bottom (line 753), spoke label bottom (line 946), details summary bottom (line 1065), fractal annotation marker border (line 1031), discovery item bottom (line 999)
  - **Cat 3 (micro, 1px):** Inline code border (line 343), version badge border (line 276), pattern echo border (line 629)

  **Issue:** `.spiral-medium` has `border-left: 3px solid var(--accent-green)` (line 868) while `.spiral-wide` has `border-left: 4px solid var(--accent-blue)` (line 862), `.spiral-narrow` has `border-left: 4px solid var(--accent-amber)` (line 874), and `.spiral-deep` has `border-left: 4px solid var(--accent-purple)` (line 880). The 3px on spiral-medium breaks the system — all confidence-indicating left borders should be 4px per `--border-left-width`.
- **Expected State:** OD-006 confidence strata use border-left with thickness mapping to certainty (4px=established, 3px=emerging, 1px=exploratory). However, AD-006's convention spec standardizes on `--border-left-width: 4px` for ALL left borders. The 3px on spiral-medium is a convention violation, not an OD-006 match.
- **Severity:** BROKEN

### Finding B-020
- **Selector:** `.axis-indicator` border-bottom (line 539)
- **Dimension:** 10 — Border Consistency
- **Current State:** `border-bottom: 1px solid var(--color-border)` — this is Cat 2 (separator). Correct for a persistent navigation element that separates itself from content.
- **Expected State:** Consistent with convention system.
- **Severity:** ACCEPTABLE (included for completeness)

---

## Dimension 11: Font Rendering

### Finding B-021
- **Selector:** `.callout__label` (line 359)
- **Dimension:** 11 — Font Rendering
- **Current State:** Callout labels use `font-size: 0.625rem` (10px). On standard displays, 10px Inter is at the legibility threshold. Anti-aliasing at this size can produce blurry text on non-retina displays. OD-006 uses `font-size: 12px` for callout labels (line 750) with `font-family: var(--font-mono)`.
- **Expected State:** OD-006 uses 12px mono for callout labels. AD-006 uses 10px sans (Inter) — this is both smaller and a different font family. The 10px size risks illegibility and the font-family mismatch (body font for a label that OD-006 renders in mono) is a divergence from gold standard.
- **Severity:** BROKEN

### Finding B-022
- **Selector:** `.pattern-echo__label` (lines ~637-646)
- **Dimension:** 11 — Font Rendering
- **Current State:** `font-size: 9px` (line 639). This is below minimum readable size on most displays. While positioned with `position: absolute; bottom: 4px; left: 4px` inside 80px cells, 9px JetBrains Mono is extremely small. On mobile at 60px cells (line 1103), it becomes essentially invisible.
- **Expected State:** No equivalent in OD-006. The smallest text in OD-006 is `--type-meta` (12px). 9px is 25% below the minimum and should be at least `--type-meta` (12px) or use the `0.625rem` (10px) floor.
- **Severity:** OVERFLOW

---

## Dimension 12: Interactive Element Spacing

### Finding B-023
- **Selector:** `details summary` (lines ~1059-1069)
- **Dimension:** 12 — Interactive Element Spacing
- **Current State:** Details/summary elements have `padding: var(--space-4) var(--space-6)` (16px 24px) on the summary. Three consecutive `<details>` elements (lines 2048-2097) each have `margin-bottom: var(--space-4)` (16px). Total touch/click target height is comfortable. Spacing between consecutive interactive elements is 16px, which meets the 8px minimum for touch targets.
- **Expected State:** OD-006 uses `<details>` elements with similar spacing. AD-006's implementation is consistent.
- **Severity:** ACCEPTABLE

---

## Cross-Dimensional Observations

### Observation X-001: Missing Intermediate Breakpoint
AD-006 has complex multi-column grid layouts (triple-column, bento-grid, spiral-layout, choreo-layout) that collapse directly from desktop to single-column at 768px. There is no intermediate breakpoint (e.g., 1024px → 2-column). OD-006 uses a 3-column page layout that collapses at 1024px to single-column, providing a mid-tier. AD-006's lack of this intermediate step creates a harsh transition where layouts go from 3-4 columns to 1 column with no middle ground.

### Observation X-002: Section Padding Accumulation
Each `.axis-section` adds 128px of total vertical padding (64px top + 64px bottom) plus a 3px border. With 7 sections, this adds approximately 924px of pure whitespace + 21px of borders = ~945px of non-content vertical space. At a typical content height of ~4000px, this means ~19% of the page height is inter-section whitespace. OD-006 achieves ~12% inter-section whitespace ratio.

### Observation X-003: Code Block Architecture Divergence
AD-006 uses a dark code block (`pre { background: var(--color-text) }`, line 310) while OD-006 uses light code blocks (`.code-block { background: var(--color-border-subtle) }`, line 855). This is a deliberate architectural choice per "OD convention Section 3" but represents a visual dialect difference between the gold standard and AD-006.

---

## Severity Summary

| Severity | Count | Finding IDs |
|----------|-------|-------------|
| BROKEN | 2 | B-019 (spiral-medium 3px border), B-021 (callout label 10px + wrong font) |
| OVERFLOW | 5 | B-001 (drop-cap in half-width), B-007 (triple-column narrow), B-009 (table no scroll wrapper), B-015 (bento cell crowding), B-022 (9px label) |
| IMBALANCED | 7 | B-008 (bento no mid-breakpoint), B-011 (Z-layout diagonal weight), B-012 (spiral border inconsistency), B-013 (131px inter-section gap), B-014 (echo grid dead space), B-016 (spoke crowding) |
| ACCEPTABLE | 5 | B-002 (discovery text), B-003 (code overflow), B-004 (featured offset), B-005 (hub offset), B-006 (echo containment) |

---

## Priority Fixes

1. **B-019 (BROKEN):** Change `.spiral-medium` border-left from `3px` to `4px` to match `--border-left-width` convention
2. **B-021 (BROKEN):** Change `.callout__label` from `font-size: 0.625rem` to `font-size: var(--type-meta)` (12px) and from `font-family: var(--font-body)` to `font-family: var(--font-mono)` to match OD-006 gold standard
3. **B-009 (OVERFLOW):** Wrap tables in a `div` with `overflow-x: auto` for mobile viewport safety
4. **B-022 (OVERFLOW):** Increase `.pattern-echo__label` from `9px` to at least `10px` (0.625rem)
5. **B-001 (OVERFLOW):** Remove drop-cap from half-width grid cells, or only apply in full-width contexts
