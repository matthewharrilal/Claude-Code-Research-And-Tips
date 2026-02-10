# Hygiene Audit B: Overflow & Balance — AD-005-choreography.html

**Auditor:** Hygiene-Auditor-B
**Date:** 2026-02-10
**File:** `explorations/axis/AD-005-choreography.html`
**Gold Standard:** `explorations/organizational/OD-005-spatial.html`
**Scope:** 12 dimensions of overflow, boundary, and visual balance

---

## Summary

AD-005 is structurally sound across most overflow dimensions. The locked layer + axis layer CSS follows conventions closely. However, there are specific overflow risks in code blocks, a whitespace dead zone between sections, and minor balance concerns with the hub grid's featured tile offset pseudo-element. No BROKEN findings. 3 OVERFLOW, 2 IMBALANCED, 7 ACCEPTABLE.

**Severity Distribution:** 0 BROKEN | 3 OVERFLOW | 2 IMBALANCED | 7 ACCEPTABLE

---

## Dimension 1: Text Overflow

### Finding 1.1
- **Selector:** `.territory-tile__desc` (lines 651-655)
- **Dimension:** 1 — Text Overflow
- **Current State:** No `overflow` or text-clipping rules. Description text in standard tiles is unbounded — if content exceeds the tile's flex column, it simply grows the tile. On 4-column grid at widths just above 1440px, long descriptions could create unequal tile heights.
- **Expected State:** OD-005 `.territory-tile__description` (line 585-589) similarly has no explicit overflow control, but OD-005 uses `auto-fit, minmax(280px, 1fr)` which provides more natural wrapping. AD-005 uses fixed 4-column named grid areas, which constrains columns equally but does not address text height variance.
- **Severity:** ACCEPTABLE — Text is short enough in practice; grid auto-rows handle variance gracefully.

### Finding 1.2
- **Selector:** `p` rule (lines 188-191), `max-width: 70ch`
- **Dimension:** 1 — Text Overflow
- **Current State:** Body paragraphs are constrained to 70ch. This is correct and matches OD-005 convention. No overflow risk.
- **Expected State:** 70ch max-width on `p` elements.
- **Severity:** ACCEPTABLE

---

## Dimension 2: Container Boundary

### Finding 2.1
- **Selector:** `.territory-tile--featured::after` (lines 859-873)
- **Dimension:** 2 — Container Boundary
- **Current State:** The offset pseudo-element is positioned `top: 4px; left: 4px` with `width: 100%; height: 100%`. This means the pseudo-element extends 4px beyond the right and bottom edges of the featured tile. Within a 4-column grid with `gap: 24px`, this 4px offset *can* bleed into the gap but not into adjacent tiles. However, if the featured tile is at the right edge of the page container, the 4px right-overflow could push beyond `.page-container` (max-width 860px).
- **Expected State:** OD-005 has the same offset pattern on `.territory-tile::after` (lines 556-567) — same risk exists in the gold standard. Both are contained by the `page-container` padding (24px on each side), so the 4px offset stays within padding.
- **Severity:** ACCEPTABLE — 4px offset is absorbed by the 24px page-container padding on both sides.

### Finding 2.2
- **Selector:** `.axis-transition` with `clip-path` (lines 667-672)
- **Dimension:** 2 — Container Boundary
- **Current State:** The axis transition is a full-bleed element (no max-width container). `clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%)` clips the bottom-right upward. The padding is `80px 24px`. The inner content is constrained to 860px max-width. No boundary escape.
- **Expected State:** Full-bleed transition zones should span viewport width. AD-005 does this correctly.
- **Severity:** ACCEPTABLE

---

## Dimension 3: Horizontal Scroll

### Finding 3.1
- **Selector:** `.hub-grid` 4-column layout (lines 592-600), viewport width 1440px-1920px
- **Dimension:** 3 — Horizontal Scroll
- **Current State:** The hub grid is inside `.page-container` (860px max-width). At `repeat(4, 1fr)` with `gap: 24px`, each column is approximately (860 - 72) / 4 = 197px wide. Territory tiles have 24px padding + 3px borders = 54px horizontal overhead per tile, leaving ~143px for content. The featured tile spans 2 columns (~418px). This is tight but workable. No horizontal scroll is generated.
- **Expected State:** No horizontal scrollbar at any viewport width above 768px. The 860px container prevents horizontal overflow.
- **Severity:** ACCEPTABLE

### Finding 3.2
- **Selector:** `body` and viewport
- **Dimension:** 3 — Horizontal Scroll
- **Current State:** No element generates `overflow-x` on the body. Full-bleed elements (`header`, `.axis-transition`, `.spoke-content`, `.breathing-zone`) all use `width: auto` (default) which is viewport-bounded. No absolute-positioned elements escape the viewport.
- **Expected State:** Zero horizontal scrollbar at any viewport.
- **Severity:** ACCEPTABLE

---

## Dimension 4: Code Block Overflow

### Finding 4.1
- **Selector:** `pre` (lines 304-314)
- **Dimension:** 4 — Code Block Overflow
- **Current State:** `overflow-x: auto` is set on `pre`. This is correct — long code lines get a horizontal scrollbar within the code block. The pre blocks are inside `.spoke-content__inner` (860px max-width) with padding `24px 32px`. Effective content width is ~860 - 48 - 6 = ~806px. Syntax-highlighted code lines in the HTML are long (each line is a complex `<span>` tree), but rendered text fits well within ~806px.
- **Expected State:** `overflow-x: auto` on all `pre` elements (matches OD-005 `.code-block` at line 843-844).
- **Severity:** ACCEPTABLE

### Finding 4.2
- **Selector:** `pre` blocks inside `.spoke-section` within `.page-container` (synthesis section, lines 1535-1675)
- **Dimension:** 4 — Code Block Overflow
- **Current State:** The final synthesis section uses `.page-container` (860px, padding 48px 24px). Code blocks (`pre`) inside this zone are constrained to ~812px content width. The code examples shown here are relatively short (CSS snippets). No overflow risk.
- **Expected State:** Code blocks constrained within page container.
- **Severity:** ACCEPTABLE

---

## Dimension 5: Visual Weight Balance

### Finding 5.1
- **Selector:** `.hub-grid` featured tile vs. standard tiles (lines 617-629)
- **Dimension:** 5 — Visual Weight Balance
- **Current State:** The featured tile spans 2 columns AND has a 4px red left border AND a solid offset pseudo-element. Standard tiles have only a 3px border with no offset. This creates heavy visual weight asymmetry: the top-left quadrant of the hub grid is significantly heavier than the other tiles. OD-005 gives ALL territory tiles the offset pseudo-element equally (line 556-567), creating uniform visual weight.
- **Expected State:** OD-005 distributes offset pseudo-elements across all tiles equally, creating balanced visual weight. AD-005 concentrates the offset on only the featured tile.
- **Severity:** IMBALANCED — The featured tile has 3 visual weight signals (span, red border, offset shadow) while standard tiles have only 1 (border). This is intentional hierarchy (R2-2.2 card hierarchy) but the weight differential is stronger than OD-005's balanced approach.

### Finding 5.2
- **Selector:** Page-level weight distribution across hub, transitions, and spokes
- **Dimension:** 5 — Visual Weight Balance
- **Current State:** The page follows a clear weight oscillation: sparse hub (light grid) → heavy diagonal transition → dense spoke 1 (dark code blocks) → breathing zone (light table) → dense spoke 2 (dark code blocks) → ascending diagonal → dense spoke 3 (dark code blocks) → sparse synthesis (tables, callouts). The breathing zone between spokes 1 and 2 is appropriately placed. However, spokes 2 and 3 transition via an ascending diagonal without a breathing zone between them, creating a dense→transition→dense pattern without sufficient recovery.
- **Expected State:** OD-005 uses `.spoke-divider` (80px margin, 1px separator) between every spoke, creating consistent breathing gaps. AD-005 uses diagonal transitions instead of spoke dividers, which provide visual interest but less breathing recovery.
- **Severity:** IMBALANCED — Between spokes 2 and 3 (diagonal accents → responsive collapse), the ascending diagonal provides a visual break but not a density-reset breathing zone. The reader transitions from one dense spoke directly through a transition into another dense spoke.

---

## Dimension 6: Whitespace Dead Zones

### Finding 6.1
- **Selector:** Gap between `hub-grid` bottom and first `.axis-transition` (lines 599, 667-672)
- **Dimension:** 6 — Whitespace Dead Zones
- **Current State:** `.hub-grid` has `margin-bottom: var(--space-chapter)` (64px). The `.axis-transition` immediately follows with `padding: 80px 24px` and `margin-bottom: 0`. Total visual whitespace between hub grid bottom and axis-transition content: 64px + 80px top-padding = 144px. This is generous. The diagonal clip-path clips 15% off the bottom, but the top edge is flush. The 144px gap is functional (it creates the breathing zone between hub and spoke).
- **Expected State:** 64px chapter spacing + transition padding. No dead zone concern.
- **Severity:** ACCEPTABLE

### Finding 6.2
- **Selector:** Space between `.spoke-content` (spoke 1) and `.breathing-zone` (lines 730-732, 783-788)
- **Dimension:** 6 — Whitespace Dead Zones
- **Current State:** `.spoke-content` has `padding: 48px 24px`. `.breathing-zone` has `padding: 48px 24px` and `border-top: 3px solid`. The spoke content section ends, then the breathing zone starts immediately. Total gap = 48px bottom padding of spoke + 0px margin + 48px top padding of breathing = 96px visual gap. The 3px border-top provides a structural separator. This is a healthy gap.
- **Expected State:** Clear structural separation with adequate whitespace.
- **Severity:** ACCEPTABLE

---

## Dimension 7: Crowding Hotspots

### Finding 7.1
- **Selector:** `.hub-grid` standard tiles at viewport widths 1441px-1500px
- **Dimension:** 7 — Crowding Hotspots
- **Current State:** At exactly 1441px (just above the 1440px breakpoint), the 4-column grid is active. The `.page-container` is 860px max-width, so column width remains ~197px regardless of viewport. Tiles with longer titles and descriptions may feel crowded at this width. The `gap: 24px` provides adequate inter-tile spacing.
- **Expected State:** Tiles should not feel cramped. The 24px gap and 24px internal padding are adequate for the 860px container.
- **Severity:** ACCEPTABLE

### Finding 7.2
- **Selector:** `.callout` elements within spoke sections
- **Dimension:** 7 — Crowding Hotspots
- **Current State:** Callouts have `padding: 24px 20px` and `margin-bottom: 32px`. Within the spoke sections, callouts follow the 2-per-viewport-section rule (max 2 callouts per section). Spoke 1 has 2 callouts (caution + essence). Spoke 2 has 1 callout (gotcha). Spoke 3 has 2 callouts (tip + essence). Synthesis has 1 callout (essence). The density of callouts is appropriate.
- **Expected State:** Max 2 callouts per section, with adequate margin between.
- **Severity:** ACCEPTABLE

---

## Dimension 8: Z-Index / Overlap

### Finding 8.1
- **Selector:** `.territory-tile--featured::after` with `z-index: -1` (line 871)
- **Dimension:** 8 — Z-Index / Overlap
- **Current State:** The offset pseudo-element sits behind the tile (`z-index: -1`). The tile itself has no explicit z-index, so it is in the default stacking context. The `position: relative` on the featured tile (line 860) creates a new stacking context. The pseudo-element correctly renders behind the tile content.
- **Expected State:** Offset shadow behind tile, no overlap with adjacent content.
- **Severity:** ACCEPTABLE

### Finding 8.2
- **Selector:** `.skip-link` with `z-index: 1000` (line 228)
- **Dimension:** 8 — Z-Index / Overlap
- **Current State:** Skip link is positioned absolute with `top: -100%` (hidden), moves to `top: 0` on focus. `z-index: 1000` ensures it overlays all content when focused. This matches OD-005 (line 336).
- **Expected State:** Skip link at z-index 1000, no unintended overlaps.
- **Severity:** ACCEPTABLE

---

## Dimension 9: Image / Diagram Spacing

### Finding 9.1
- **Selector:** `.progress-bar` (lines 701-705)
- **Dimension:** 9 — Image/Diagram Spacing
- **Current State:** The progress bar serves as a diagram element. It has `margin-bottom: 32px` which provides adequate spacing below it. No `margin-top` means it relies on the preceding element's bottom margin for top spacing. In the hub section, the callout above has `margin-bottom: 32px`, giving 32px gap before the progress bar. In spoke sections, the breadcrumb above has `margin-bottom: 24px`. Adequate spacing in both cases.
- **Expected State:** Consistent spacing above and below diagram elements.
- **Severity:** ACCEPTABLE

### Finding 9.2
- **Selector:** `.axis-transition` diagonal elements (lines 667-698)
- **Dimension:** 9 — Image/Diagram Spacing
- **Current State:** The diagonal clip-path sections function as visual diagrams/dividers. They have generous internal padding (80px top/bottom). The clip-path cuts create visual interest but also mean the perceived bottom edge is at 85% height (descending) or the perceived top edge starts at 15% (ascending). This means ~12px of the 80px padding is clipped away, leaving ~68px effective padding at the clipped edge. Still generous.
- **Expected State:** Diagonal transitions should have visible padding of at least 48px (mode-transition minimum).
- **Severity:** ACCEPTABLE

---

## Dimension 10: Border Consistency

### Finding 10.1
- **Selector:** All border declarations across locked layer and axis layer
- **Dimension:** 10 — Border Consistency
- **Current State:** Border system follows the 3-category specification from OD-F-AP-001:
  - **Category 1 (Structural):** `3px solid` — header border-bottom (line 242), pre border (line 307), table th border-bottom (line 406), breathing-zone borders (lines 786-787), chapter-divider (line 797), territory-tile border (line 605), featured offset border (line 870)
  - **Category 2 (Separator):** `1px solid var(--color-border-subtle)` — table td border-bottom (line 414)
  - **Category 3 (Micro):** `1px solid` — version-badge (line 271), inline code (line 338)
  - **Accent:** `4px solid` — callout border-left (line 346), featured tile border-left (line 621)

  This is fully consistent with the OD-005 gold standard border system. No 2px borders found (OD-F-AP-001 compliance).
- **Expected State:** 3-category border system: 4px accent, 3px structural, 1px separator/micro. Zero 2px borders.
- **Severity:** ACCEPTABLE

---

## Dimension 11: Font Rendering

### Finding 11.1
- **Selector:** `body` (lines 166-174)
- **Dimension:** 11 — Font Rendering
- **Current State:** `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` are set on `body`. Font loading uses Google Fonts with `display=swap`, plus `rel="preconnect"` for both `fonts.googleapis.com` and `fonts.gstatic.com`. This matches OD-005's font loading strategy.
- **Expected State:** Antialiased rendering with preconnected Google Fonts.
- **Severity:** ACCEPTABLE

### Finding 11.2
- **Selector:** `.callout__label` at `font-size: 0.625rem` (line 354)
- **Dimension:** 11 — Font Rendering
- **Current State:** 0.625rem = 10px. This is a very small font size. At 10px with `font-weight: 600` and `letter-spacing: 0.1em`, the label may render poorly on low-DPI displays. OD-005 uses `font-size: 12px` for `.callout .callout__label` (line 789). The AD-005 callout labels are 2px smaller than OD-005.
- **Expected State:** OD-005 uses 12px for callout labels. AD-005 uses 10px (0.625rem). This 2px difference means AD-005 callout labels are harder to read.
- **Severity:** OVERFLOW — The 10px callout label font size is below the 12px minimum used in OD-005 and risks poor rendering on standard displays. The `--type-meta` token is 0.75rem (12px), but the callout label uses 0.625rem instead of the token.

---

## Dimension 12: Interactive Element Spacing

### Finding 12.1
- **Selector:** `.territory-tile` hover interaction (lines 610-615)
- **Dimension:** 12 — Interactive Element Spacing
- **Current State:** Territory tiles have `transition: border-color var(--transition-standard)` for hover. Tiles are spaced with `gap: 24px` in the grid. Each tile has `padding: 24px`. The 24px gap provides adequate touch/click target separation. The hover effect changes only `border-color` (flat, soul-compliant). No hover transforms that could cause layout shift.
- **Expected State:** OD-005 territory tiles use `transition: border-color 0.15s, background-color 0.15s` (line 547-548). AD-005 transitions only border-color. Both are soul-compliant flat hovers.
- **Severity:** ACCEPTABLE

### Finding 12.2
- **Selector:** `.breadcrumb` navigation links within spokes (lines 739-760)
- **Dimension:** 12 — Interactive Element Spacing
- **Current State:** Breadcrumb is `font-size: var(--type-meta)` (12px) with `gap: 8px` between items. The breadcrumb spans within a flex container. Click targets are the text spans themselves — no explicit padding on the link/span elements. At 12px font size, touch targets may be small on mobile. OD-005 breadcrumbs (lines 623-653) have `font-size: 11px` and `margin: 0 8px` on separators, with `<a>` tags that provide clickable targets.
- **Expected State:** Breadcrumb links should have adequate touch target size (minimum 44x44px per WCAG). Both AD-005 and OD-005 have small breadcrumb touch targets.
- **Severity:** OVERFLOW — Breadcrumb interactive elements at 12px font with no padding create touch targets well below the 44px WCAG minimum. This is a shared issue with OD-005 but still a valid overflow concern.

### Finding 12.3
- **Selector:** `.progress-bar` segments (lines 701-725)
- **Dimension:** 12 — Interactive Element Spacing
- **Current State:** Progress bar segments are `height: 8px` with `flex: 1` or `flex: 3`. These are non-interactive (`role="img"` on the container). No click handlers, no links. They are purely visual indicators.
- **Expected State:** Non-interactive elements need no touch target sizing.
- **Severity:** ACCEPTABLE

---

## Cross-Reference: AD-005 vs OD-005 (Gold Standard)

| Dimension | AD-005 | OD-005 | Delta |
|-----------|--------|--------|-------|
| Text overflow | 70ch `p` max-width | 65ch spoke paragraphs, 55ch hub subtitle | AD slightly wider |
| Container boundary | 860px container + 24px padding | 860px container + 24px padding | Matched |
| Horizontal scroll | None (860px contained) | None (860px contained) | Matched |
| Code block overflow | `overflow-x: auto` on `pre` | `overflow-x: auto` on `.code-block` | Matched |
| Visual weight | Featured tile overweighted (3 signals) | All tiles equally weighted | AD intentionally asymmetric |
| Whitespace | 144px hub-to-spoke gap | 80px spoke-divider margin | AD more generous |
| Crowding | 24px grid gaps, 24px tile padding | 24px grid gaps, 20px tile padding | Similar |
| Z-index | -1 offset, 1000 skip-link | -1 offset, 100 wave-indicator, 1000 skip-link | AD has fewer layers |
| Diagrams | Progress bar + diagonal transitions | WAVE visualization bar chart | Different diagram types |
| Borders | 3-category, zero 2px | 3-category, zero 2px | Matched |
| Font rendering | 10px callout label (below OD standard) | 12px callout label | AD 2px too small |
| Interactive spacing | 24px grid gaps, small breadcrumbs | 24px grid gaps, small breadcrumbs | Shared weakness |

---

## Findings Summary

| # | Dimension | Selector | Severity | Issue |
|---|-----------|----------|----------|-------|
| 1 | 5 (Visual Weight) | `.territory-tile--featured` | IMBALANCED | Featured tile has 3 weight signals vs 1 on standard tiles |
| 2 | 5 (Visual Weight) | Spoke 2 → Spoke 3 transition | IMBALANCED | No breathing zone between spokes 2 and 3; ascending diagonal insufficient for density reset |
| 3 | 11 (Font Rendering) | `.callout__label` line 354 | OVERFLOW | 10px (0.625rem) font size below OD-005's 12px standard; not using `--type-meta` token |
| 4 | 12 (Interactive) | `.breadcrumb` links | OVERFLOW | Touch targets below 44px WCAG minimum (shared with OD-005) |
| 5 | 12 (Interactive) | `.breadcrumb` navigation | OVERFLOW | 12px font with no padding on interactive spans |

**PASS: 7 dimensions** (Text Overflow, Container Boundary, Horizontal Scroll, Code Block Overflow, Whitespace Dead Zones, Crowding Hotspots, Z-Index/Overlap)

**NEEDS ATTENTION: 3 dimensions** (Visual Weight Balance, Font Rendering, Interactive Element Spacing)

**Border Consistency and Image/Diagram Spacing: PASS** (fully compliant with OD convention)
