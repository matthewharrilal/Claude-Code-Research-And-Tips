# Hygiene Audit B: Overflow & Balance -- AD-004 Spiral

**Auditor:** Hygiene-Auditor-B
**Target:** AD-004-spiral.html
**Gold Standard:** OD-004-confidence.html
**Date:** 2026-02-10
**Dimensions:** 12 (Overflow & Balance)

---

## Summary

AD-004 is structurally sound with no BROKEN findings. The primary concern is the two-column golden-ratio grid in the Established stratum, which creates potential overflow at narrow viewports within the 768-860px range. OD-004 avoids this entirely by using single-column strata with border-left encoding. AD-004's spiral concept introduces asymmetric left-padding that accumulates across strata, creating a progressive indent that could crowd content on the right side at narrower widths.

**Totals:** 0 BROKEN, 2 OVERFLOW, 4 IMBALANCED, 6 ACCEPTABLE

---

## Dimension 1: Text Overflow

### FINDING B-004-01
- **Selector:** `.stratum--open p` (lines 585-587 CSS, line 1229 HTML)
- **Dimension:** 1 (Text Overflow)
- **Current State:** Open stratum has `padding: var(--space-12) var(--space-6) var(--space-12) var(--space-16)` -- that is 48px top/bottom, 24px right, 64px left. Combined with `max-width: 70ch` on `p` elements (line 142) and the page-container's 860px max-width, the effective content width is 860 - 24 - 64 = 772px. The `70ch` constraint on `p` (~560px at 1rem) fits comfortably.
- **Expected State:** Text should never overflow its container. OD-004's open stratum uses `padding: var(--stratum-open-padding) 0` with `padding-left: var(--space-6)` (24px), giving more horizontal room.
- **Severity:** ACCEPTABLE
- **Notes:** The 70ch max-width on `p` prevents horizontal text overflow even with aggressive left-padding. The constraint holds at all viewport widths.

### FINDING B-004-02
- **Selector:** `.open-questions li::before` (lines 788-798 CSS)
- **Dimension:** 1 (Text Overflow)
- **Current State:** The `?` pseudo-element has `width: var(--space-8)` (32px) and `display: inline-block` with `vertical-align: middle`. Long list item text wraps normally, but the `?` marker is inline-block which means the first line of text starts 32px + 8px (margin-right) = 40px indented, while subsequent wrapped lines start at 0px indent. This creates a hanging-indent effect.
- **Expected State:** Wrapped lines should align with the first line of text, not with the `?` marker. OD-004 uses `list-style-type: square` (native CSS, line 1116) which handles wrapping correctly via native list mechanics.
- **Severity:** IMBALANCED
- **Notes:** Not a true overflow -- the text wraps correctly. But the visual alignment on wrapped lines is inconsistent with OD-004's cleaner native list approach. The `?` pseudo-element trick creates a first-line indent that does not carry through on wrapped lines.

---

## Dimension 2: Container Boundary

### FINDING B-004-03
- **Selector:** `.stratum--established .stratum__content-grid` (lines 659-662 CSS, line 909 HTML)
- **Dimension:** 2 (Container Boundary)
- **Current State:** Two-column grid: `grid-template-columns: 1fr 0.618fr`. Within the Established stratum's padding (24px left, 32px right), the available width for the grid is approximately 860 - 24 - 32 = 804px. The `1fr` column gets ~497px and the `0.618fr` column gets ~307px. The sidebar's metadata-panel has `padding: var(--space-6)` (24px) and 3px border, consuming 54px, leaving ~253px for content. The metadata key-value pairs use `justify-content: space-between`, which works at 253px but gets tight.
- **Expected State:** OD-004 does not use a two-column grid within strata at all -- it relies on full-width content blocks with border-left as the primary differentiator. The golden-ratio grid is an AD-004-specific axis feature. At the 768px breakpoint it collapses to single-column (line 802), which is correct.
- **Severity:** ACCEPTABLE
- **Notes:** The responsive breakpoint at 768px handles the collapse correctly. Between 768-860px the two-column layout is tight but functional.

### FINDING B-004-04
- **Selector:** `.comparison-grid` (lines 742-747 CSS, line 1164 HTML)
- **Dimension:** 2 (Container Boundary)
- **Current State:** Two-column grid with `grid-template-columns: 1fr 1fr` and `gap: var(--space-8)` (32px). Each panel has `padding: var(--space-6)` (24px) and `border: 3px solid`. Within the Speculative stratum (padding-left: 48px, padding-right: 24px), the available width for the grid is approximately 860 - 48 - 24 = 788px. Each panel gets (788 - 32) / 2 = 378px minus 54px for padding+border = 324px for content. Code blocks inside these panels (`pre` elements) have `overflow-x: auto` (line 266).
- **Expected State:** OD-004's comparison grid (lines 914-917) also uses `1fr 1fr` but with only `gap: 3px`, giving each column significantly more width. The tighter gap in OD-004 is a Cat 1 structural gap, while AD-004 uses a `var(--space-8)` (32px) gap which is generous.
- **Severity:** OVERFLOW
- **Notes:** The `pre` elements inside comparison panels will trigger horizontal scrollbars on code lines longer than ~40 characters. The `overflow-x: auto` saves from visual breakage, but the scrollbar appearing within an already-small panel is a poor UX signal. OD-004 avoids this by using a tighter grid gap.

---

## Dimension 3: Horizontal Scroll

### FINDING B-004-05
- **Selector:** `body` (page level)
- **Dimension:** 3 (Horizontal Scroll)
- **Current State:** No horizontal scrollbar at the page level. The `page-container` has `max-width: 860px` and `margin: 0 auto`. Header is full-bleed with `.header-inner` constrained to 860px. All strata are within `.page-container`. No element exceeds the viewport width.
- **Expected State:** No horizontal scroll at page level. OD-004 matches this pattern.
- **Severity:** ACCEPTABLE
- **Notes:** Both files correctly prevent page-level horizontal scroll through max-width containment.

---

## Dimension 4: Code Block Overflow

### FINDING B-004-06
- **Selector:** `pre` (lines 257-268 CSS, multiple HTML locations)
- **Dimension:** 4 (Code Block Overflow)
- **Current State:** Code blocks use `overflow-x: auto` (line 266), `font-size: var(--type-code)` (0.875rem / 14px), `padding: var(--space-6) var(--space-8)` (24px 32px). The longest code block (lines 936-955, the CSS spiral strata example) contains lines approximately 60 characters long. Within the Established stratum's main column (~497px available), after padding (32px * 2 = 64px), the usable code width is ~433px. At 14px mono, each character is approximately 8.4px, meaning ~51 characters fit per line. Lines at 60 characters will trigger a horizontal scrollbar.
- **Expected State:** OD-004's code blocks (lines 978-988) use identical padding and font-size but are placed in full-width strata (no two-column grid), giving them the full ~804px container width minus 64px padding = ~740px, fitting ~88 characters. Code blocks in the main column of AD-004's Established stratum will scroll horizontally.
- **Severity:** OVERFLOW
- **Notes:** This is the most significant overflow finding. The two code blocks inside `.stratum--established .stratum__main` (lines 936-955 and 957-965) have lines that exceed the available width of the golden-ratio main column. The scrollbar works (no visual breakage) but reduces usability compared to OD-004's full-width code blocks.

---

## Dimension 5: Visual Weight Balance

### FINDING B-004-07
- **Selector:** `.stratum--established` vs `.stratum--open` (lines 555-587 CSS)
- **Dimension:** 5 (Visual Weight Balance)
- **Current State:** The Established stratum has the heaviest visual weight: 4px red border-left, white background (#FFFFFF), two-column grid with sidebar metadata panel (3px border), code blocks, and an essence callout. The Open stratum has the lightest: 1px subtle border-left, warm background (#FEF9F5), sparse content, and generous padding. The progression Established(heavy) -> Probable(moderate) -> Speculative(light-moderate) -> Open(light) creates a clear top-heavy page.
- **Expected State:** This top-heaviness is INTENTIONAL per the spiral/geological concept. OD-004 has the same intentional weight gradient (Established = sparse/confident but visually weighty borders, Open = dense but visually light borders). AD-004's implementation adds the sidebar metadata panel to the Established stratum, increasing the weight differential compared to OD-004.
- **Severity:** ACCEPTABLE
- **Notes:** The weight imbalance is by design (EXT-AXIS-SP-002: border-weight gradient IS the geological encoding). The sidebar in Established adds more weight differential than OD-004, but this serves the spiral axis concept of a "dense core."

---

## Dimension 6: Whitespace Dead Zones

### FINDING B-004-08
- **Selector:** `.stratum--open` (line 585 CSS, line 1216 HTML)
- **Dimension:** 6 (Whitespace Dead Zones)
- **Current State:** Open stratum has `padding: var(--space-12) var(--space-6) var(--space-12) var(--space-16)` -- 48px top, 24px right, 48px bottom, 64px left. Combined with the page-container's 24px side padding, the total left margin from viewport edge is approximately: (viewport - 860) / 2 + 24 + 64 = significant. At 1440px viewport: 290 + 24 + 64 = 378px of empty space on the left. The content starts very far right.
- **Expected State:** OD-004's open stratum uses `padding: var(--stratum-open-padding) 0` then `padding-left: var(--space-6)` (24px), creating a total left offset of 290 + 24 + 24 = 338px at 1440px -- 40px less indent than AD-004. AD-004's progressive left-padding (32px Established -> 40px Probable -> 48px Speculative -> 64px Open) is the spiral concept, but the Open stratum's 64px left pad creates a noticeable dead zone.
- **Severity:** IMBALANCED
- **Notes:** The progressive padding IS the spiral axis concept (content spiraling outward). However, the 64px left pad on the Open stratum pushes content significantly rightward, creating a visual dead zone on the left that has no content or visual element to occupy it. OD-004 keeps consistent padding across all strata, avoiding this.

---

## Dimension 7: Crowding Hotspots

### FINDING B-004-09
- **Selector:** `.stratum--established .stratum__sidebar` (line 969 HTML)
- **Dimension:** 7 (Crowding Hotspots)
- **Current State:** The sidebar contains: metadata-panel (with title, 5 key-value pairs, 3px border, 24px padding) + essence callout (with inline `style="margin-top: var(--space-6)"`). The sidebar column is 0.618fr of the grid (~307px). The metadata-panel alone has 24px * 2 padding + 3px * 2 border = 54px consumed by chrome, leaving ~253px for content. The essence callout below it has 4px border-left + 20px padding, plus the serif italic body text. These two elements stacked vertically in a narrow column create a crowded feel.
- **Expected State:** OD-004 does not have a sidebar within strata. Its Established stratum places content in a single column with a max-width of 720px (line 664), giving each element the full available width. The sidebar is an AD-004-specific axis feature that introduces crowding not present in the gold standard.
- **Severity:** IMBALANCED
- **Notes:** The golden-ratio sidebar concept is sound in theory but the 0.618fr column is narrow enough that two stacked components (metadata-panel + essence callout) feel dense relative to the main column's spacious single-column flow.

---

## Dimension 8: Z-index / Overlap

### FINDING B-004-10
- **Selector:** all positioned elements
- **Dimension:** 8 (Z-index / Overlap)
- **Current State:** AD-004 has minimal z-index usage: `.skip-link` has `z-index: 1000` (line 180). No other positioned elements create stacking contexts. No overlapping elements. No absolute/fixed positioning beyond the skip-link.
- **Expected State:** OD-004 has one additional stacking context: `.geological-survey::after` with `z-index: -1` (line 456) for the solid offset shadow. AD-004 does not use solid offsets at all, resulting in even simpler z-index management.
- **Severity:** ACCEPTABLE
- **Notes:** No overlap issues. AD-004 is cleaner than OD-004 in this dimension.

---

## Dimension 9: Image / Diagram Spacing

### FINDING B-004-11
- **Selector:** `.spiral-map` (lines 500-506 CSS, line 878 HTML)
- **Dimension:** 9 (Image / Diagram Spacing)
- **Current State:** The spiral-map nav element in the header uses `grid-template-columns: 1fr 1fr 1fr 1fr`, `gap: var(--space-1)` (4px), `max-width: 320px`, and `margin-top: var(--space-6)` (24px). Each stratum indicator is ~77px wide with 12px horizontal padding. The labels ("Bedrock", "Subsoil", "Topsoil", "Atmos") fit at var(--type-meta) (0.75rem / 12px).
- **Expected State:** OD-004's geological-column (line 378) uses `display: flex`, `gap: var(--space-4)` (16px), and no max-width constraint, allowing the indicators to spread across the header's full width. AD-004's 320px max-width constraint is tighter but all labels fit within their cells.
- **Severity:** ACCEPTABLE
- **Notes:** The spiral-map at 320px is compact but readable. OD-004's flex layout is more spacious. At 768px the spiral-map collapses to `1fr 1fr` (line 813-815), which gives each cell ~158px -- adequate.

---

## Dimension 10: Border Consistency

### FINDING B-004-12
- **Selector:** `.confidence-badge--established` vs `.confidence-badge--probable` vs `.confidence-badge--speculative` vs `.confidence-badge--open` (lines 633-648 CSS)
- **Dimension:** 10 (Border Consistency)
- **Current State:** Confidence badges use a mixed border system: Established = 3px (Cat 1), Probable = 3px (Cat 1), Speculative = 1px (Cat 3), Open = 1px (Cat 3). This creates a 2-tier system (3px/1px) rather than the 4-tier gradient used for strata borders (4px/3px/3px/1px).
- **Expected State:** OD-004 does not have confidence badges as standalone bordered elements. Its border-weight gradient is expressed exclusively through stratum left-borders (4px/3px/2px/1px per EXT-CONF-013). AD-004's badge borders encode a simplified 2-tier system that does not match the 4-tier stratum border-weight gradient described in its own spec comments.
- **Severity:** IMBALANCED
- **Notes:** The badge border weights (3px/3px/1px/1px) collapse the 4-tier geological signal into 2 tiers. This is not a soul violation (all widths are either Cat 1 structural or Cat 3 micro), but it is an inconsistency with the stratum-level border-weight encoding that uses 4 distinct widths. A 4-tier badge system (4px/3px/3px/1px matching stratum borders) would be more consistent.

---

## Dimension 11: Font Rendering

### FINDING B-004-13
- **Selector:** `body` (line 119 CSS)
- **Dimension:** 11 (Font Rendering)
- **Current State:** AD-004 uses `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` (lines 125-126). Font trio is correct: Instrument Serif (display), Inter (body), JetBrains Mono (code). Font sizes follow the 5-level cascade. The `line-height: 1.6` on body is standard.
- **Expected State:** OD-004 uses `line-height: 1.7` (line 269) vs AD-004's `line-height: 1.6` (line 122). OD-004 does not declare `-webkit-font-smoothing` or `-moz-osx-font-smoothing` at all. AD-004 is actually MORE explicit about font rendering. The 0.1 line-height difference is minor but AD-004's body text will be slightly tighter.
- **Severity:** ACCEPTABLE
- **Notes:** Both files use the same font trio. AD-004's explicit antialiasing declarations are a positive. The line-height difference (1.6 vs 1.7) is minor and within acceptable range.

---

## Dimension 12: Interactive Element Spacing

### FINDING B-004-14
- **Selector:** `.spiral-map__stratum` (lines 508-515 CSS, line 878 HTML)
- **Dimension:** 12 (Interactive Element Spacing)
- **Current State:** The spiral-map is a `<nav>` element containing 4 divs. These are not interactive (no links, no buttons), so touch target concerns do not apply. The divs have `padding: var(--space-2) var(--space-3)` (8px 12px) and are separated by a 4px grid gap.
- **Expected State:** OD-004's geological-column is also non-interactive (no links/buttons), just visual indicators. Neither file has significant interactive elements beyond the skip-link. AD-004 has no confidence switcher tabs (unlike OD-004's 3-button tablist, lines 559-585). OD-004's tab buttons have `padding: var(--space-3) var(--space-4)` (12px 16px), meeting the 44px minimum touch target when combined with surrounding gap.
- **Severity:** ACCEPTABLE
- **Notes:** AD-004 has fewer interactive elements than OD-004 (no confidence switcher, no troubleshoot details, no tablist). The skip-link is the only interactive element and follows standard accessibility patterns.

---

## Findings Summary

| # | Selector | Dim | Severity | Description |
|---|----------|-----|----------|-------------|
| B-004-01 | `.stratum--open p` | 1 | ACCEPTABLE | Text contained within 70ch constraint despite 64px left-pad |
| B-004-02 | `.open-questions li::before` | 1 | IMBALANCED | Pseudo-element `?` creates inconsistent hanging indent on wrap |
| B-004-03 | `.stratum--established .stratum__content-grid` | 2 | ACCEPTABLE | Golden-ratio grid tight at 768-860px but collapses correctly |
| B-004-04 | `.comparison-grid` in Speculative | 2 | OVERFLOW | Code blocks within comparison panels trigger scrollbar at ~40ch |
| B-004-05 | `body` | 3 | ACCEPTABLE | No page-level horizontal scroll |
| B-004-06 | `pre` in Established main column | 4 | OVERFLOW | Code lines >51ch scroll in golden-ratio main column (~433px) |
| B-004-07 | Strata weight progression | 5 | ACCEPTABLE | Top-heavy by design (geological spiral concept) |
| B-004-08 | `.stratum--open` | 6 | IMBALANCED | 64px left-pad creates visible dead zone, 40px more than OD-004 |
| B-004-09 | `.stratum__sidebar` | 7 | IMBALANCED | Metadata-panel + essence callout crowded in 307px column |
| B-004-10 | All positioned elements | 8 | ACCEPTABLE | No overlap; simpler stacking than OD-004 |
| B-004-11 | `.spiral-map` | 9 | ACCEPTABLE | Compact but readable at 320px max-width |
| B-004-12 | `.confidence-badge--*` | 10 | IMBALANCED | 2-tier badge borders (3px/1px) inconsistent with 4-tier stratum borders |
| B-004-13 | `body` | 11 | ACCEPTABLE | Correct font trio; explicit antialiasing; minor line-height diff |
| B-004-14 | `.spiral-map__stratum` | 12 | ACCEPTABLE | Minimal interactive elements; skip-link correct |

---

## Cross-Reference to OD-004 Gold Standard

| Dimension | AD-004 | OD-004 | Delta |
|-----------|--------|--------|-------|
| Two-column grid | Golden-ratio grid in Established | No multi-column within strata | AD-004 adds complexity + overflow risk |
| Left-padding progression | 32/40/48/64px across 4 strata | Consistent 24px across all strata | AD-004's spiral indent creates dead zone |
| Code block width | ~433px in main column (Established) | ~740px (full width) | AD-004 code blocks 41% narrower |
| Comparison grid gap | 32px (var(--space-8)) | 3px (Cat 1 structural) | AD-004 wastes 29px per grid instance |
| Interactive elements | Skip-link only | Skip-link + 3 tabs + details | AD-004 is simpler |
| Confidence badges | Standalone bordered elements (2-tier) | No standalone badges (border on strata only) | AD-004 adds a component not in OD-004 |
| Solid offset depth | Not used | Used on geological-survey | AD-004 is flatter |
| Scroll animations | Not used | Used (.reveal class) | AD-004 is static |

---

## Verdict

AD-004 has no BROKEN findings. The two OVERFLOW findings (code blocks in golden-ratio columns and comparison grid panels) are functional due to `overflow-x: auto` but represent UX degradation compared to OD-004's full-width approach. The four IMBALANCED findings are consequences of the spiral axis concept (progressive indent, sidebar crowding, badge border inconsistency, hanging indent on open questions list). None of these are soul violations or structural failures -- they are trade-offs inherent to the spiral layout that the gold standard avoids by using a simpler single-column architecture.
