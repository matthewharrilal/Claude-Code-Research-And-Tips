# Hygiene Audit B: Overflow & Balance — AD-003 Bento Grid

**Auditor:** Hygiene-Auditor-B
**Target:** `explorations/axis/AD-003-bento-grid.html`
**Gold Standard:** `explorations/organizational/OD-003-task-based.html`
**Date:** 2026-02-10
**Scope:** 12 dimensions of overflow and balance

---

## Executive Summary

**Total Findings: 18**
- BROKEN: 1
- OVERFLOW: 3
- IMBALANCED: 7
- ACCEPTABLE: 7

The bento grid layout has solid structural integrity at desktop widths but exhibits meaningful overflow risks in code blocks at narrow viewports and within constrained grid cells. The most critical issue is the `<pre>` code block inside a 1x1 grid cell (Dim 4) which can exceed cell boundaries. Visual weight balance is generally well-managed through the ISLANDS/BOOKENDS density pattern, though several imbalances emerge from the asymmetric grid cell distribution.

---

## Dimension 1: Text Overflow

### Finding 1.1
- **Selector:** `.bento-cell__body p` (all instances within 1x1 cells)
- **Line:** 589-594 (CSS), ~1028-1068 (HTML cells 2-3)
- **Dimension:** 1 — Text Overflow
- **Current State:** `p` elements have `max-width: 70ch` (from locked-layer line 142) and are inside `.bento-cell` with `padding: var(--space-6)` (24px). In a 1x1 cell of a 4-column grid at 860px max-width, available content width is approximately (860 - 3*24) / 4 - 2*3 - 2*24 = ~143px. The 70ch max-width (roughly 560px) is irrelevant — the cell constrains first. Text wraps naturally.
- **Expected State:** Text should wrap within cell without overflow.
- **Severity:** ACCEPTABLE — flexbox column layout and natural word-wrap handle this. No `white-space: nowrap` or `overflow: hidden` that would clip.

### Finding 1.2
- **Selector:** `.complexity-badge` (lines 554-564)
- **Line:** 562 — `white-space: nowrap`
- **Dimension:** 1 — Text Overflow
- **Current State:** Badge has `white-space: nowrap` and `flex-shrink: 0`. If badge text is long (e.g., "INTERMEDIATE"), it will NOT shrink. The header uses `display: flex; justify-content: space-between` with `gap: var(--space-4)`. At narrow cell widths (1x1 in 4-col grid), the badge + title compete for limited horizontal space.
- **Expected State:** Badge should remain visible without forcing title to collapse to near-zero width.
- **Severity:** OVERFLOW — At viewport widths just above 768px breakpoint (e.g., 800px), the 1x1 cells are very narrow (~150px content area). "INTERMEDIATE" badge is ~90px wide. Title gets squeezed to ~60px. Title text wraps but readability degrades severely.
- **OD-003 Comparison:** OD-003 places badges in a separate `.task-island__meta` row below the title (line 406), avoiding horizontal competition entirely. AD-003's side-by-side header layout is structurally riskier.

### Finding 1.3
- **Selector:** `.bento-cell__title` (lines 546-551)
- **Line:** 548 — `font-size: var(--type-subsection)` (1.375rem)
- **Dimension:** 1 — Text Overflow
- **Current State:** Title is 1.375rem (22px) Instrument Serif italic with `line-height: 1.3`. In small cells, long titles like "Configure Typography Tokens" wrap to multiple lines, consuming significant vertical space.
- **Expected State:** Titles should remain readable at all grid cell sizes.
- **Severity:** ACCEPTABLE — Word wrap handles this; just a density concern, not a technical overflow.

---

## Dimension 2: Container Boundary

### Finding 2.1
- **Selector:** `.bento-grid` within `.page-container`
- **Lines:** 248-252 (page-container), 506-510 (bento-grid)
- **Dimension:** 2 — Container Boundary
- **Current State:** `.page-container` has `max-width: 860px; margin: 0 auto; padding: 48px 24px`. `.bento-grid` has `grid-template-columns: repeat(4, 1fr); gap: 24px`. Grid stays within container boundary. Total grid width = 860px - 48px (padding) = 812px content area. 4 columns + 3 gaps = 4fr + 72px gap. Each column ~185px.
- **Expected State:** Grid respects container boundary.
- **Severity:** ACCEPTABLE — No boundary violation. Grid is fully contained.

### Finding 2.2
- **Selector:** `.bookend` (lines 733-737)
- **Lines:** 735-736 — `border: 3px solid` + `border-left: 4px solid`
- **Dimension:** 2 — Container Boundary
- **Current State:** Front bookend has both `border: 3px solid` (Cat 1) AND `border-left: 4px solid` (accent). The border-left shorthand overrides the left side of the border shorthand. Effective left border is 4px, other sides 3px. This creates a 1px asymmetry.
- **Expected State:** Consistent border behavior; the CSS shorthand override is intentional (accent signal). But the bookend sits inside `.page-container` with identical padding to the grid sections, so the visual alignment is correct.
- **Severity:** ACCEPTABLE — Intentional design pattern matching OD-003 bookend styling.

---

## Dimension 3: Horizontal Scroll

### Finding 3.1
- **Selector:** `body` / viewport
- **Lines:** 119-127 (body CSS)
- **Dimension:** 3 — Horizontal Scroll
- **Current State:** No `overflow-x: hidden` on body. The `.page-container` at `max-width: 860px` with `margin: 0 auto` centers content. No elements appear to break viewport width at desktop (1440px) or tablet (768px).
- **Expected State:** No horizontal scrollbar at any viewport width.
- **Severity:** ACCEPTABLE — No viewport-level horizontal scroll detected in the CSS. The `max-width` constraint and `margin: 0 auto` prevent it.

### Finding 3.2
- **Selector:** `.bento-grid` at responsive breakpoint
- **Lines:** 850-865 (responsive CSS)
- **Dimension:** 3 — Horizontal Scroll
- **Current State:** At `max-width: 768px`, grid collapses to `1fr` single column. Span classes reset to `span 1`. This prevents any cell from exceeding viewport width on mobile.
- **Expected State:** Single-column stack on mobile with no horizontal overflow.
- **Severity:** ACCEPTABLE — Binary responsive rule correctly implemented.

---

## Dimension 4: Code Block Overflow

### Finding 4.1
- **Selector:** `pre` inside `.bento-cell` (1x1 cells)
- **Lines:** 257-267 (pre CSS), 1237-1240 (Gap as Density cell HTML)
- **Dimension:** 4 — Code Block Overflow
- **Current State:** `pre` has `overflow-x: auto` (line 265), which provides scroll. But inside a 1x1 grid cell, the available width after cell padding (24px each side) and cell border (3px each side) is approximately 185 - 48 - 6 = 131px. The code block inside "Gap as Density" cell (line 1237) has lines like `gap: var(--space-8);  /* wide */` which at `font-size: 0.875rem` (14px) in monospace renders approximately 280px wide. The `pre` with `padding: 24px 32px` adds 64px more. Total content width ~344px inside a ~131px container.
- **Expected State:** Code should scroll horizontally within the `pre` element, not overflow the cell.
- **Severity:** OVERFLOW — The `pre` has `overflow-x: auto` but no `max-width` constraint relative to its parent. If the `.bento-cell` uses `display: flex; flex-direction: column`, the `pre` as a flex child may expand the cell width beyond its grid track, breaking the grid layout. This is the most critical overflow risk in the page.
- **OD-003 Comparison:** OD-003's code blocks are inside full-width task islands (not grid cells), so they always have ~760px+ of content width. AD-003 puts code blocks inside constrained grid cells — fundamentally different constraint.

### Finding 4.2
- **Selector:** `pre` inside `.bento-cell.bento-item--large` (2x2 cells) and `.bento-item--tall` (1x2 cells)
- **Lines:** 1017-1022 (Cell 1 code), 1196-1210 (Span Syntax cell code)
- **Dimension:** 4 — Code Block Overflow
- **Current State:** Large cells (2x2) have approximately 2*185 + 24 = 394px content width minus padding/border = ~334px. Code lines in Cell 1 (line 1021: `gap: var(--space-6); /* 24px -- the sparse ocean */`) are ~370px at 14px monospace. The `overflow-x: auto` should catch this, but barely.
- **Expected State:** Horizontal scroll activates for long code lines in large cells.
- **Severity:** OVERFLOW — Marginal but real. Code lines are very close to or exceeding available width even in 2x2 cells. The `pre` padding of `24px 32px` (line 261) is generous for constrained cells.

### Finding 4.3
- **Selector:** `pre code` inside `.split-layout__side` in advanced section
- **Lines:** 691-695 (split-layout), 1370-1380 (responsive code split)
- **Dimension:** 4 — Code Block Overflow
- **Current State:** The split layout inside a 2x2 large cell divides available width in half again: `grid-template-columns: 1fr 1fr`. The code block in the right split gets approximately 334/2 - 24 = ~143px of content width. The `@media (max-width: 768px)` code inside is 250px+ wide.
- **Expected State:** Code block should scroll horizontally.
- **Severity:** BROKEN — This is a definite overflow. A split layout inside a 2x2 cell at widths near but above 768px creates an extremely narrow container for a code block. The code will either overflow its parent or create an awkward tiny scroll area. At responsive breakpoint (768px), the split-layout collapses to `1fr` (line 862-864), but between 769px and ~900px, both the bento grid AND the split layout are active, creating very tight code containers.
- **OD-003 Comparison:** OD-003 never nests a split layout inside a grid cell. All code blocks have full island width.

---

## Dimension 5: Visual Weight Balance

### Finding 5.1
- **Selector:** Section 2 "Getting Started" bento grid (lines 973-1135)
- **Dimension:** 5 — Visual Weight Balance
- **Current State:** Grid contains: 1 large cell (2x2), 2 standard cells (1x1), 1 wide cell (2x1). The large cell dominates the left side with 4x the visual mass. The two 1x1 cells on the right are light. The wide cell spans the bottom-right 2 columns. Left-heavy layout.
- **Expected State:** Visual weight should feel balanced even if asymmetric (per R4-021: asymmetric but balanced).
- **Severity:** IMBALANCED — The 2x2 cell creates a strong left-anchored weight. The right side's two 1x1 cells are too light to counterbalance. The wide cell at bottom helps but doesn't fully resolve the vertical asymmetry (2 rows on left vs 1 row of 1x1s + 1 row of wide on right).

### Finding 5.2
- **Selector:** Section 3 "Intermediate" bento grid (lines 1176-1316)
- **Dimension:** 5 — Visual Weight Balance
- **Current State:** Grid contains: 1 tall cell (1x2) in position 1, 2 standard cells (1x1), 1 wide cell (2x1). The tall cell anchors the left column. The two 1x1 cells sit in the middle columns. The wide cell spans bottom-right. More balanced than Section 2 — the tall cell is narrower than a large cell so the left-heavy effect is reduced.
- **Expected State:** Balanced weight distribution.
- **Severity:** ACCEPTABLE — Good balance. The tall-left + two-standard-middle + wide-bottom creates a satisfying visual triangle.

### Finding 5.3
- **Selector:** Section 4 "Advanced" bento grid (lines 1343-1463)
- **Dimension:** 5 — Visual Weight Balance
- **Current State:** Grid contains: 1 large cell (2x2), 2 standard cells (1x1), 1 wide cell (2x1). Same structure as Section 2. Left-heavy again.
- **Expected State:** Varied grid layouts between sections to avoid structural monotony.
- **Severity:** IMBALANCED — Sections 2 and 4 use identical grid cell distributions (1 large + 2 standard + 1 wide). This creates structural monotony between the beginner and advanced sections. OD-003 avoided this by using 4 different island templates (Standard, Dense-inline, Showcase, Split).

---

## Dimension 6: Whitespace Dead Zones

### Finding 6.1
- **Selector:** `.breathing-zone` (lines 780-783)
- **Lines:** 1143, 1323 (HTML instances)
- **Dimension:** 6 — Whitespace Dead Zones
- **Current State:** Two 80px breathing zones separate the three grid sections. The breathing zone has `background: var(--color-zone-breathing)` (#FAF5ED), which is slightly different from the page background (#FEF9F5). This subtle color difference creates a visible band.
- **Expected State:** Breathing zone should provide clear separation without feeling like a dead zone.
- **Severity:** IMBALANCED — The 80px height with a different background color creates a visible "bar" rather than natural breathing space. OD-003 uses `sparse-sea` (80px) and `sparse-sea--large` (96px) with no background (inheriting page background), creating a more natural void. The AD-003 breathing zone's colored background makes it feel like a component rather than absence of content.

### Finding 6.2
- **Selector:** Space below RAR block (end of page)
- **Lines:** 1535-1703 (RAR block section), 1750 (end of page-container)
- **Dimension:** 6 — Whitespace Dead Zones
- **Current State:** The RAR block is the last content element. `.page-container` has `padding: 48px 24px` (top and bottom). After the RAR block, there's 48px of padding before the page ends. The RAR block itself has `margin-top: var(--space-chapter)` (64px) separating it from the back bookend.
- **Expected State:** Adequate bottom padding without excessive void.
- **Severity:** ACCEPTABLE — 48px bottom padding is standard. OD-003 has `padding-bottom: var(--space-20)` (80px) which is more generous. AD-003's 48px is tighter but not a dead zone.

---

## Dimension 7: Crowding Hotspots

### Finding 7.1
- **Selector:** `.bento-cell__header` in 1x1 cells
- **Lines:** 539-544 (header CSS), 1029-1032 (Cell 2 header HTML)
- **Dimension:** 7 — Crowding Hotspots
- **Current State:** The cell header uses `display: flex; justify-content: space-between; align-items: flex-start; gap: 16px`. In a 1x1 cell (~185px wide - 48px padding - 6px border = ~131px content), the title + badge must share this space. Title "Set Cell Borders" is ~100px wide at 1.375rem Instrument Serif. Badge "BEGINNER" is ~70px. Total ~170px in ~131px space.
- **Expected State:** Header elements should not feel cramped.
- **Severity:** IMBALANCED — The title wraps to a second line, but the flex layout with `gap: 16px` means there's always 16px between title and badge, forcing the title into a narrow column. This is crowded in 1x1 cells.
- **OD-003 Comparison:** OD-003 places the badge BELOW the title in a meta row (line 406), completely avoiding horizontal crowding.

### Finding 7.2
- **Selector:** `.bento-cell` internal stacking (1x1 cells with code blocks)
- **Lines:** 529-536 (cell CSS), 1224-1242 ("Gap as Density" cell)
- **Dimension:** 7 — Crowding Hotspots
- **Current State:** The "Gap as Density" 1x1 cell contains: header (title + badge), duration badge, body paragraph, and a `<pre>` code block. All in ~131px content width with 16px internal gap between each element. The code block has its own padding (24px 32px), adding to the density.
- **Expected State:** Content should feel "dense but breathable" (R2-2.3).
- **Severity:** IMBALANCED — This cell is the most crowded on the page. A code block in a 1x1 cell is extremely dense. The code block's own padding (24px top/bottom, 32px left/right) is designed for full-width blocks, not constrained grid cells. The effective code viewing area after all padding is roughly 131 - 64 = 67px wide, which can display approximately 4-5 monospace characters before scroll.

---

## Dimension 8: Z-index / Overlap

### Finding 8.1
- **Selector:** `.skip-link` (lines 173-187)
- **Line:** 180 — `z-index: 1000`
- **Dimension:** 8 — Z-index / Overlap
- **Current State:** Skip link uses `z-index: 1000` and is `position: absolute; top: -100%` (hidden off-screen). On focus, `top: 0` brings it into view. No other elements use z-index.
- **Expected State:** Skip link should appear above all content when focused.
- **Severity:** ACCEPTABLE — Only one z-index in the entire page. No stacking context conflicts.

### Finding 8.2
- **Selector:** `.bento-details summary::before` (triangle indicator, line 629-635)
- **Dimension:** 8 — Z-index / Overlap
- **Current State:** The triangle rotates on `[open]` state via CSS transform. No z-index is set. The triangle is inline content, not positioned. No overlap risk.
- **Expected State:** No z-index needed for inline content.
- **Severity:** ACCEPTABLE — Clean implementation with no stacking issues.

---

## Dimension 9: Image / Diagram Spacing

### Finding 9.1
- **Selector:** N/A — No images or diagrams present
- **Dimension:** 9 — Image / Diagram Spacing
- **Current State:** AD-003 contains zero `<img>`, `<svg>`, `<figure>`, or `<picture>` elements. All content is text, code blocks, and tables.
- **Expected State:** Images/diagrams would need proper spacing if present.
- **Severity:** ACCEPTABLE — Not applicable. OD-003 also has no images (relies on structural HTML components for visual variety).

---

## Dimension 10: Border Consistency

### Finding 10.1
- **Selector:** All border declarations in axis-layer CSS
- **Lines:** 491, 531, 561, 622, 726, 735, 789-806, 826
- **Dimension:** 10 — Border Consistency
- **Current State:** Border inventory:
  - Cat 1 (3px solid): `.section-heading` (491), `.bento-cell` (531), `.bookend` (735), `.rar-block` (826) = 4 instances
  - Cat 2 (1px solid subtle): `.bento-details summary` (622), `.category-label` (726) = 2 instances
  - Cat 3 (1px solid accent): `.complexity-badge` (561) = 1 instance
  - Accent (4px solid): `.cell-callout` (789), `.bookend--front` (740), `.bookend--back` (744) = 3 instances
  - Zero 2px borders.
- **Expected State:** 3-category border system with zero 2px (OD-F-AP-001).
- **Severity:** ACCEPTABLE — Clean 3-category system. No 2px violations. Consistent with OD-003 which also uses the same 3-cat system.

### Finding 10.2
- **Selector:** `.bookend` border stacking (lines 733-745)
- **Lines:** 735 (3px all sides) + 740/744 (4px left accent)
- **Dimension:** 10 — Border Consistency
- **Current State:** `.bookend` sets `border: 3px solid` on all four sides. Then `.bookend--front` adds `border-left: 4px solid var(--color-primary)`, and `.bookend--back` adds `border-left: 4px solid var(--accent-green)`. The left border is overridden from 3px to 4px. This creates a 1px width difference between left (4px accent) and other sides (3px structural).
- **Expected State:** Intentional accent differentiation (4px accent vs 3px structural is a recognized pattern from OD convention).
- **Severity:** ACCEPTABLE — This matches OD-003's bookend pattern where the left accent border (4px) is intentionally thicker than structural borders (3px).

---

## Dimension 11: Font Rendering

### Finding 11.1
- **Selector:** `.bento-cell__title` (lines 546-551) vs `.callout--essence .callout__body` (lines 337-340)
- **Dimension:** 11 — Font Rendering
- **Current State:** Both use `font-family: var(--font-display)` (Instrument Serif) with `font-style: italic`. Cell titles use `font-size: var(--type-subsection)` (1.375rem) and essence callout body uses inherited `var(--type-body)` (1rem). Both render italic serif at different sizes.
- **Expected State:** Italic serif should be reserved for specific roles (h3 = subsection titles, essence = archivist voice).
- **Severity:** ACCEPTABLE — Both uses are semantically correct. Cell titles are h3-equivalent (italic per anti-patterns/registry.md), essence is Soul Piece #2.

### Finding 11.2
- **Selector:** `.cell-callout__label` and `.callout__label`
- **Lines:** 306-312 (callout label), 808-815 (cell-callout label)
- **Dimension:** 11 — Font Rendering
- **Current State:** Both label types use `font-size: 0.625rem` (10px). At this size, the `letter-spacing: 0.1em` and `text-transform: uppercase` are correct for small caps effect. However, 10px text on retina displays renders clearly, but on non-retina displays may be below the legibility threshold.
- **Expected State:** Label text should be legible on all displays.
- **Severity:** IMBALANCED — 10px (0.625rem) is the smallest text on the page and below the accessibility recommended minimum of 12px for body text. The `--type-meta` token is 0.75rem (12px), but callout labels use a hardcoded 0.625rem instead. OD-003 uses `var(--type-meta)` (12px) for its callout labels (line 444), making them more legible.

---

## Dimension 12: Interactive Element Spacing

### Finding 12.1
- **Selector:** `.bento-details summary` (lines 615-623)
- **Dimension:** 12 — Interactive Element Spacing
- **Current State:** Summary elements have `padding: var(--space-2) 0` (8px vertical, 0 horizontal). The click target height is approximately 8px + line-height (1.0 * 16px) + 8px = 32px. This meets the 44px WCAG minimum only if the font's line-height contribution is sufficient. At `font-size: var(--type-body)` (16px) with default line-height, actual target is ~32-36px.
- **Expected State:** Interactive elements should have at least 44x44px touch targets.
- **Severity:** IMBALANCED — Touch target is approximately 32-36px tall, below the 44px WCAG recommendation. OD-003's task island summaries have `padding: 24px 32px` (line 378), creating much larger ~72px touch targets.

### Finding 12.2
- **Selector:** Multiple `.bento-details` in same cell (e.g., lines 1042-1051 inside Cell 2 with the border rules detail)
- **Dimension:** 12 — Interactive Element Spacing
- **Current State:** Some cells contain exactly one `<details>` element. The summary sits at the bottom of the cell content, separated by `gap: var(--space-4)` (16px) from the element above. There's no risk of adjacent interactive elements being too close.
- **Expected State:** Interactive elements should have adequate spacing between them.
- **Severity:** ACCEPTABLE — Each cell contains at most one `<details>` element. No adjacency conflict.

---

## Summary by Severity

| Severity | Count | Finding IDs |
|----------|-------|-------------|
| BROKEN | 1 | 4.3 |
| OVERFLOW | 3 | 1.2, 4.1, 4.2 |
| IMBALANCED | 7 | 5.1, 5.3, 6.1, 7.1, 7.2, 11.2, 12.1 |
| ACCEPTABLE | 7 | 1.1, 1.3, 2.1, 2.2, 3.1, 3.2, 6.2, 8.1, 8.2, 9.1, 10.1, 10.2, 11.1, 12.2 |

## Top 5 Priority Fixes

1. **[BROKEN] 4.3 — Split layout inside 2x2 cell code overflow:** The `split-layout` inside a large bento cell at viewports 769-900px creates code containers too narrow to be usable. Either remove the split layout from inside grid cells, or add a breakpoint that collapses the split layout at the same point the grid layout narrows.

2. **[OVERFLOW] 4.1 — Code blocks in 1x1 cells:** `pre` elements with their locked-layer padding (24px 32px) inside 1x1 grid cells create ~67px effective code viewing areas. Consider reducing `pre` padding inside `.bento-cell` or using `min-width: 0` on flex children to ensure proper shrinking.

3. **[OVERFLOW] 1.2 — Badge/title horizontal competition:** The `flex` header with `white-space: nowrap` badge competing with the title in narrow 1x1 cells. Consider stacking badge below title (as OD-003 does) or making badge `flex-shrink: 1` with `overflow: hidden; text-overflow: ellipsis`.

4. **[IMBALANCED] 5.1 + 5.3 — Identical grid layouts in Sections 2 and 4:** Both beginner and advanced sections use the same 1-large + 2-standard + 1-wide pattern. Consider varying the advanced section (e.g., 2 wide + 2 standard, or 1 tall + 1 wide + 2 standard) to break structural monotony.

5. **[IMBALANCED] 7.2 — Code block padding in constrained cells:** The locked-layer `pre` padding of `24px 32px` is designed for full-width contexts. Inside grid cells, consider an axis-layer override to reduce padding (e.g., `.bento-cell pre { padding: var(--space-3) var(--space-4); }`) to reclaim content width.

---

## OD-003 Comparison Notes

| Aspect | OD-003 (Gold Standard) | AD-003 (Under Audit) |
|--------|----------------------|---------------------|
| Code block context | Full-width task islands (~760px) | Grid cells (131-334px) |
| Badge placement | Below title in meta row | Beside title in flex header |
| Section variety | 4 distinct island templates | 2 of 3 sections use identical layout |
| Breathing zones | Transparent (inherit page bg) | Colored (#FAF5ED band) |
| Touch targets | ~72px (generous padding) | ~32-36px (tight padding) |
| Callout label size | 12px (--type-meta token) | 10px (hardcoded 0.625rem) |
| Internal layout | No nested grids in islands | Split layout inside grid cells |

The fundamental architectural difference: OD-003 uses full-width sequential islands where content has ample horizontal room. AD-003 uses a constrained grid where content must fit within fractional columns. This structural choice amplifies overflow risks in every dimension involving horizontal space (text, code, interactive elements).
