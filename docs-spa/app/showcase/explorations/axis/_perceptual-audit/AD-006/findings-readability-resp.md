# AD-006 Perceptual Audit: Readability + Responsiveness
## Auditor B Findings (Lead Recovery — Agent completed 1440px scroll + bento investigation, Lead completed analysis + remaining viewports)

---

### Cold Look Summary (LOCKED)

**COLD LOOK (1440px):**
Gut reaction: Dark, commanding header with warm cream body — scholarly and intentional, like a research monograph opening.
Worst thing: The subtitle paragraph in the header feels washed-out and ghostly against the dark background — uncomfortable to read.
Best thing: The six-cell pattern echo grid — immediately communicates the page's purpose through elegant visual shorthand.
Ship verdict: YES WITH RESERVATIONS

**COLD LOOK (768px):**
Gut reaction: The header remains confident but the content below feels squeezed and uncertain — like a wide page reluctantly crammed into a narrow frame rather than designed for it.
Worst thing: When scrolling into the bento grid section, text collapses to one character per line in a crushed card — completely unreadable.
Best thing: The single-column text reflow in the opening sections works well and feels natural.
Ship verdict: NO

**COLD LOOK (1024px):**
Gut reaction: Comfortable middle ground — the layout breathes without feeling sparse. Tables and multi-column areas are well-proportioned.
Worst thing: The header subtitle text contrast issue persists across all viewports.
Best thing: The bento grid cards have enough room to display content comfortably.
Ship verdict: YES WITH RESERVATIONS

---

### PA-02: Is any text uncomfortable to read? Point to the worst spot.

#### 1440px
YES — two spots are uncomfortable:
1. **The header subtitle text** (the paragraph starting "What if axis geometry...") is ghostly and washed-out against the dark background. You have to concentrate to read it — the words don't pop off the background, they dissolve into it.
2. **Callout labels** (the tiny uppercase text like "FEATURED PATTERN," "ESSENCE," "DISCOVERY") are at the very edge of comfortable reading. They communicate their purpose through visual pattern (you know it's a label) but the actual words are effortful to read.

#### 768px
YES — catastrophically:
1. **Bento grid Section 03**: Text in the "Compound Axis" featured card stacks one character per line — "T h e m e t a - p a t t e r n . C o m b i" reading vertically. This is not "uncomfortable" — it is completely unreadable. A person would see a column of individual letters and have no idea what they say.
2. Same header subtitle issue as 1440px.

#### 1024px
The header subtitle remains uncomfortable. The callout labels remain at the edge. Nothing new breaks at this viewport — content is readable throughout.

---

### PA-06: Are any words stacking vertically, one per line, in any column?

#### 1440px
NO — at 1440px, all columns have adequate width. The bento grid cards, the three-column spoke layout, and the spiral strata all contain readable text with words flowing horizontally. No vertical stacking observed.

#### 768px
**YES — CATASTROPHIC.** In Section 03 (Bento Grid Reference), the featured "Compound Axis" card collapses to a strip so narrow that every character occupies its own line. The text "The meta-pattern. Combines Z, F, Bento, Spiral, and Choreography..." renders as a vertical column of individual letters. This continues for the entire card's content, consuming multiple scroll positions (screenshots 768-scroll-05 through 768-scroll-06 show the worst of it). The card's red accent border remains visible on the left edge, but the card itself is crushed to the width of a single character plus its border.

This is THE canonical bento-grid failure mode described in the audit specification.

#### 1024px
NO — at 1024px, the bento grid cards retain adequate width. Text flows normally in all columns.

**Severity: WOULD-NOT-SHIP** (768px)

---

### PA-07: Can you read the longest paragraph without your eye losing its place between lines?

#### 1440px
YES — the body text has comfortable leading (space between lines). The longest paragraphs in Section 01 (Z-Pattern Overview) and Section 04 (Spiral Deep Dive) are readable without losing your place. Lines are not too long for the column width.

#### 768px
In sections that reflow to single column: YES, paragraphs are readable. In the bento grid section: N/A — text is destroyed, not readable at all.

#### 1024px
YES — paragraphs are comfortable. The text column width at 1024px feels ideal for sustained reading — not too wide (which causes eye-tracking loss) and not too narrow.

---

### PA-08: Is there any text you have to lean in or squint to read?

#### 1440px
YES — callout labels require slight extra effort. The tiny uppercase text ("FEATURED PATTERN," "SCANNING," "STRUCTURAL," "PROPORTIONAL," "CONTEXT," "DISCOVERY," "ESSENCE," "CAUTION," "GOTCHA," "TIP") is legible but sits at the minimum comfortable size. On a monitor at arm's length, you'd need to focus deliberately to read these labels.

The header subtitle ("What if axis geometry...") also requires extra effort due to low contrast against the dark background.

#### 768px
Same callout labels, same header subtitle. Plus: the bento grid area is beyond squinting — it's illegible.

#### 1024px
Same callout labels and header subtitle. Nothing additionally problematic.

**Severity: COULD-BE-BETTER** (callout labels), **LOOKS-WRONG** (header subtitle contrast)

---

### PA-21: At this viewport, does everything look designed for this width, or squeezed from a wider design?

#### 1440px
DESIGNED for this width. The generous margins, the multi-column layouts with breathing room, the bento grid with varied card sizes — all feel native to a wide viewport. This is clearly the "primary" design width.

#### 768px
**SQUEEZED.** The bento grid section is proof — it was designed for a wide viewport and collapses catastrophically at 768px. The grid didn't collapse to a single column (which would look intentional); instead it tried to maintain multi-column structure in insufficient space, crushing cells. Other sections (the single-column text, the header) reflow adequately, but the grid and any multi-column layouts feel like a wide design being forced through a narrow pipe.

#### 1024px
MOSTLY DESIGNED for this width. Tables and text columns feel proportional. The bento grid is slightly tighter than at 1440px but functional. Minor moments where content feels compressed but nothing broken.

**Severity: WOULD-NOT-SHIP** (768px — squeezed, not designed)

---

### PA-22: Would a user who ONLY has this screen size feel served or punished?

#### 1440px
SERVED. The page is generous with space and clearly designed for this experience. A desktop user would feel the page respects their screen real estate without wasting it.

#### 768px
**PUNISHED.** A user on an iPad in portrait mode would encounter: (1) a functional header and opening section, (2) a catastrophically broken bento grid where the featured card is destroyed, (3) massive empty cream areas where the grid fails, (4) invisible Sections 6-7. They would feel the page was never tested at this width. This is not "mobile-as-degradation" — this is "mobile-as-abandoned."

#### 1024px
SERVED. A user on a laptop or iPad in landscape would have a comfortable reading experience.

**Severity: WOULD-NOT-SHIP** (768px)

---

### PA-23: What breaks if you resize 200 narrower? Is the page one viewport change away from failing?

#### 1440px (→1240px)
The page would likely hold. At 1440px there's generous room — 200 narrower would tighten the bento grid and multi-column layouts but they'd likely survive.

#### 1024px (→824px)
HIGH RISK. The bento grid is already snug at 1024px. Losing 200 would push it toward the crushing observed at 768px. The page is likely one breakpoint away from the same catastrophic failure. The transition from "functional" at 1024px to "destroyed" at 768px suggests there is no intermediate responsive behavior — it's a cliff, not a slope.

#### 768px (→568px)
Already broken. Going narrower would make an already-crushed layout even worse.

**Severity: LOOKS-WRONG** (fragile breakpoint between 1024px and 768px)

---

### Invisible Sections Cross-Reference

Sections 6 (Decision Matrix) and 7 (Fractal Meta) are invisible at all viewports due to scroll-triggered animations not firing with programmatic scroll. This affects ALL readability questions — these sections cannot be evaluated perceptually because they don't visually exist for a scrolling user. The Decision Matrix content (the narrative climax of the compound page) and the Development Kitchen collapsibles are present in the DOM but render as blank cream.

**Severity: WOULD-NOT-SHIP** (all viewports)

---

### Severity Summary

| Finding | Severity | Viewport |
|---------|----------|----------|
| Bento grid text stacking one character per line | WOULD-NOT-SHIP | 768px |
| Sections 6-7 invisible (scroll animation failure) | WOULD-NOT-SHIP | All |
| 768px layout feels squeezed, not designed | WOULD-NOT-SHIP | 768px |
| 768px user feels punished, not served | WOULD-NOT-SHIP | 768px |
| Header subtitle washed-out against dark background | LOOKS-WRONG | All |
| Fragile breakpoint between 1024px and 768px (cliff, not slope) | LOOKS-WRONG | 1024→768 |
| Callout labels at edge of comfortable reading | COULD-BE-BETTER | All |

### Evidence References
- Bento crushing (768px): `screenshots/AD-006-768-scroll-b05.png`, `b06.png`, `b07.png`, `b10.png`
- Invisible sections (1440px): `screenshots/AD-006-1440-scroll-b13.png` through `b20.png` (9 consecutive blank screens)
- Header contrast: `screenshots/AD-006-1440-coldlook-b.png`, `AD-006-768-coldlook-b.png`, `AD-006-1024-coldlook-b.png`
- 1440px full scroll: `screenshots/AD-006-1440-scroll-b01.png` through `b20.png` (20 screenshots)
- 768px full scroll: `screenshots/AD-006-768-scroll-b01.png` through `b26.png` (26 screenshots)
- 1024px full scroll: `screenshots/AD-006-1024-scroll-b01.png` through `b23.png` (23 screenshots)
- Bento cards functional at 1024px: `screenshots/AD-006-1024-scroll-b07.png`
- Three-column comparison readable: `screenshots/AD-006-1440-scroll-b03.png`

### Programmatic Verification (Auditor B — Recovery Agent Supplementary)

The following programmatic measurements were taken to verify and quantify the perceptual findings above.

#### Root Cause: Grid Collapse Failure

The CSS at the 768px breakpoint sets `grid-template-areas: none` on all 5 grid layouts but does NOT override the children's explicit `grid-area` declarations (e.g., `.z-top-left { grid-area: z-top-left; }`). When areas are `none`, named area references become invalid, causing the browser to auto-place all children into the same grid cell.

**Programmatic proof (767px CSS width):** All 4 z-layout children render at identical coordinates: top=652, left=88, width=656, height=474. They overlap completely. The bento-grid shows degenerate columns: `10.2px, 10.2px, 0px, 687.8px`.

**Fix required:** Add `grid-area: auto` to all grid children at each breakpoint, OR use single-column named areas instead of `none`.

#### Typography Measurements (1440px CSS)

| Property | Measured Value | Expected |
|----------|---------------|----------|
| Body font-size | 16px | 16px -- PASS |
| Body line-height | 27.2px (1.7 ratio) | 1.7 -- PASS |
| H1 (crown jewel) | 48px (3rem) | 3rem -- PASS |
| H2 | 26px (1.625rem) | 1.625rem -- PASS |
| H3 | 22px (1.375rem) | 1.375rem -- PASS |
| Callout labels | 12px | 12px (--type-meta) -- PASS |
| Code blocks | 14px, line-height 1.5 | 0.875rem -- PASS |
| Inline code | 14.4px (0.9em) | 0.9em -- PASS |
| Paragraph max-width | 707px (70ch) | 70ch -- PASS |

#### Narrow Container Widths (1440px CSS)

| Container | Width | Chars/line est. | Verdict |
|-----------|-------|-----------------|---------|
| z-layout quadrants | 390px | ~48 chars | Adequate |
| triple-column cells | 260px | ~26 chars | Below 45ch minimum |
| bento-item (small) | 179px | ~16-18 chars | Word stacking |
| bento-item (featured) | 390px | ~48 chars | Adequate |
| choreo-spoke | 207px | ~20 chars | Word stacking |
| spiral-narrow | 335px | ~40 chars | Below optimal |
| spiral-wide | 390px+ | ~48 chars | Adequate |

#### Page Heights by Viewport

| Viewport (CSS pixels) | Height | Notes |
|----------------------|--------|-------|
| 1440px (innerWidth 1138) | 14,736px | Within 10-14K target |
| 853px (768 device px) | 22,006px | 50% taller -- broken layout stacking inflates height |

#### DPR Note
DPR measured at 0.9. Playwright `setViewportSize` sets device pixels, not CSS pixels. At DPR 0.9: 768 device px = 853 CSS px. To achieve 768 CSS px, device width must be ~691px. All breakpoint assertions in this file account for this scaling.

---

### Dimension Pass Notes (1440px — Auditor B)

**Pass 1 READABILITY:** Header subtitle ghostly; body text comfortable except Section 2 wide paragraphs; tables clean and well-spaced; callout labels small but color-coded; bento cards cramped but readable; code block well-formatted.

**Pass 2 SPATIAL BALANCE (squint):** Strong vertical rhythm: dark header band, cream content, colored section dividers, alternating tinted sections. Weight clusters around tables and bento grid. Transition zone between bento and spiral breathes well. Choreography hub-spoke has nice weight distribution.

**Pass 3 HIERARCHY & FLOW:** Clear section numbering with decorative serif headings creates a strong content ladder. Progression from overview to analysis to catalog to deep-dive to synthesis is legible. Callout hierarchy communicated through color.

**Pass 4 CONSISTENCY:** Section headers consistent (meta label, serif heading, body paragraph). Callout format consistent (colored left border, uppercase label, body text). Table column headers consistent (uppercase, small). Red section divider lines consistent between major sections.

**Pass 5 SHIP TEST:** At 1440px: Proud next to Stripe for Sections 1-5. Embarrassed by dead zone Sections 6-7. At 768px: Embarrassed -- bento failure would never pass design review. At 1024px: Proud with reservations, competent but bento living dangerously.
