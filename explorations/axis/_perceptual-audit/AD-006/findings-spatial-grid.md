# PA Findings: Spatial + Grid -- Auditor C
## AD-006: Compound Axis (The Convergence)

**Auditor:** C (Spatial + Grid)
**Questions:** PA-09, PA-10, PA-11, PA-14, PA-15, PA-17
**Viewports tested:** 1440x900, 768x1024, 1024x768
**Date:** 2026-02-10

---

## Cold Look Summary

| Viewport | Ship Verdict | Key Concern |
|----------|-------------|-------------|
| 1440 | YES WITH RESERVATIONS | Section-internal dead zones, top-heavy composition |
| 768 | NO | Bento text collapses to single-character vertical columns; massive dead zones |
| 1024 | YES WITH RESERVATIONS | Same void problem as 1440, spiral section especially |

---

## PA-09: Dead Space -- Is there dead space that serves no purpose?

### Severity: CRITICAL (at 768px), HIGH (at 1440px and 1024px)

**What I saw:**

At 1440px, the page is approximately 14,737 units tall across 7 sections. Measured section heights from the DOM:

- Section 1 (Z-Pattern): height 1559
- Section 2 (F-Pattern): height 2400
- Section 3 (Bento Grid): height 2149
- Section 4 (Spiral): height 1786
- Section 5 (Choreography): height 1625
- Section 6 (Decision Matrix): height 1863
- Section 7 (Fractal Meta): height 2984

While the section sizes are reasonable in proportion, the VISUAL experience tells a different story. During my scroll-through at 1440px, I encountered multiple scroll positions where the ENTIRE viewport was blank warm cream -- no text, no borders, no visual anchors whatsoever. Specifically:

- **Scroll position ~1600** (between Section 1 end and Section 2 start): Full viewport of nothingness. A breathing zone that is a full screen of emptiness.
- **Scroll position ~4400-4800**: Full viewport of nothingness within the Bento section's vertical extent. The bento grid content clusters at the top of its section, leaving the rest empty.
- **Scroll position ~5100**: Another full blank viewport within multi-column section territory.

The inter-section breathing gaps are conceptually justified by the transition grammar (the page explicitly calls for "breathing" between Spiral transitions). But the execution creates scroll positions where a reader sees NOTHING -- and a reader encountering a full blank screen will assume the page is broken, not that they are in a purposeful breathing zone.

At 768px, the problem intensifies severely. Multi-column layouts that spread content horizontally at desktop must redistribute vertically, but the vertical spacing that was proportional at wide widths becomes disproportionate at narrow widths. The page grows substantially with the added height being mostly empty cream.

At 1024px, the pattern mirrors 1440 but is somewhat compressed. Section 04 (Spiral) still shows its header and intro paragraph followed by a large void before the stratum cards appear.

**Intentional vs. accidental:** The breathing zones BETWEEN sections are intentional design. But the dead space WITHIN sections is a side effect of multi-column layouts where shorter columns leave unfilled vertical space. The compound nature of the page amplifies this -- each section's layout creates its own variety of void.

**Verdict:** A reader scrolling through this page will encounter multiple full-viewport blanks that feel like the page is broken or incomplete. This is a genuine usability problem that undermines the page's ambitious layout strategy.

---

## PA-10: Squint Test -- Does the layout still look balanced if you squint?

### Severity: MEDIUM (at 1440px), HIGH (at 768px), MEDIUM (at 1024px)

**What I saw:**

At 1440px, squinting reveals a clear pattern: a dense dark band at top (the hero), then alternating clusters of content and cream voids. The page is strongly **top-heavy** -- Sections 01-03 are visually richer (text blocks, pattern echo grid, triple-column cards, data tables, bento cards) while Sections 04-07 feel sparser and more scattered.

The left-right balance at 1440px is generally good. Most content sits within a centered column roughly 60% of viewport width, creating consistent side margins. The Bento grid section is the widest, breaking the uniformity slightly but purposefully.

The Z-Pattern in Section 01 shows a specific imbalance: the body text and pattern echo grid cluster in the upper two-thirds, while the Essence callout (left) and "What This Page Demonstrates" panel (right) create a diagonal that leaves the center of the section hollow. This diagonal is INTENTIONAL Z-sweep, but it reads as weight pulling left and air leaking right.

At 768px, squinting reveals a page that looks like a few dark ink islands floating in an ocean of cream. The content-to-void ratio is catastrophically low in the lower half. The first third looks populated; the rest looks abandoned.

At 1024px, the balance is similar to 1440 but with slightly less horizontal breathing on the sides.

**Verdict:** The macro composition at desktop is acceptable but top-heavy. At tablet width it fails -- the page looks like it was abandoned halfway through construction.

---

## PA-11: Margin Psychology -- Are the margins generous or anxious?

### Severity: LOW (at 1440px), MEDIUM (at 768px), LOW (at 1024px)

**What I saw:**

At 1440px, the margins feel **confident but occasionally overgenerous**. The side margins (roughly 20% on each side) are generous without being wasteful. The content sits in a comfortable channel. The vertical spacing between subsections within a section is spacious -- headings have room to breathe, callouts have clear separation from body text, tables float with surrounding whitespace.

However, the generosity tips into **excess** in the transitions between sections. The breathing zones are approximately a quarter to a third of a viewport height. This is more generous than confident -- it verges on uncertain, as if the page is afraid to bring the next section too close.

Within Section 01, the Essence callout on the left and the "What This Page Demonstrates" panel on the right are separated by comfortable space. This feels intentional and balanced -- like furniture placed with confidence in a large room.

At 768px, the side margins shrink appropriately but the vertical generosity becomes pathological. What felt spacious at desktop becomes empty at tablet. The margins are no longer confident -- they are absent, replaced by voids that feel like the page lost track of where its content went.

At 1024px, the margins are similar to desktop -- confident side margins, slightly too generous vertical transitions.

**Verdict:** The horizontal margins are confident across all viewports. The vertical spacing between sections is generous at desktop (bordering on overgenerous) but becomes problematic at narrower widths where the same vertical space dominates the reading experience.

---

## PA-14: Column Breathing Room -- Does every column have enough room?

### Severity: CRITICAL (at 768px), LOW (at 1440px), LOW (at 1024px)

**What I saw:**

At 1440px, most columns breathe well:
- **Section 01 Z-Pattern:** The two-column layout (text left, pattern echo grid right) gives each column ample room. The text column is wide enough for comfortable reading; the six-cell icon grid sits comfortably in the right column.
- **Section 02 F-Pattern:** Single-column scanlines at full width. The triple-column comparison (Organization / Density / Axis) gives each card adequate room, though lines within each card are somewhat short.
- **Section 03 Bento:** The featured card (spanning roughly half the grid) breathes well with about 338 units of content width. The smaller cards (Z-Pattern, F-Pattern, etc.) are tighter at roughly 127 units of content width -- readable but snug.
- **Section 04 Spiral:** The strata columns have comfortable breathing. Content within each stratum panel is well-spaced.
- **Section 05 Choreography:** The spoke elements have adequate room, though the three-across layout creates narrow columns. The short content within each spoke works at this width.
- **Section 06 Decision Matrix:** The six-column table is comfortable at 1440. Each cell has room to display its content ("Best fit", "Acceptable", "Avoid") without wrapping.

At 768px, **CATASTROPHIC** column failure occurs. I observed text in the Bento Grid section displaying as single characters stacked vertically -- one letter per line. The words "Bento" and "Spiral" were broken into vertical stacks ("B", "e", "n", "t", "o"). This means the column has been compressed to approximately one character width. The multi-column grid does not adapt its column count for the narrower viewport. Content that was readable at 1440 becomes physically impossible to read at 768.

At 1024px, columns generally breathe well. The Bento grid may be slightly tight but remains readable.

**Verdict:** Desktop column breathing is good to excellent across all sections. Tablet width has a critical column breakage in the Bento section that renders content entirely unreadable. This is the single most severe visual finding.

---

## PA-15: Left-Edge Alignment -- How many different starting positions?

### Severity: MEDIUM (all viewports)

**What I saw:**

At 1440px, I traced the left edge of every content block from top to bottom and found these distinct starting positions:

1. **Hero text** starts at approximately one-quarter from the left edge
2. **Section labels and headings** (SECTION 01, etc.) align with hero text -- same left rail
3. **Body paragraphs** align with section labels -- same left rail
4. **Callout content** (Essence, Discovery, Context boxes) is indented slightly further right from the callout's left border accent
5. **Table content** aligns with body text left edge
6. **Bento card content** follows a different grid -- cards have their own internal left edges that shift per card position
7. **Spiral stratum content** has strata-specific left edges (Stratum 1 leftmost, Stratum 4 rightmost) -- this is INTENTIONAL graduated nesting
8. **Choreography spoke content** follows the three-column grid, with each spoke having its own left edge

**Count: approximately 5-6 distinct left-edge positions** (excluding intentionally varied Spiral nesting and Bento card internal alignment).

The primary content left-edge (headings, body text, tables, section labels) is VERY consistent -- this is the dominant alignment rail and it holds firm throughout the page. The callout indent introduces a secondary rail. Multi-column layouts introduce tertiary positions.

The Spiral section's graduated nesting is **INTENTIONAL** asymmetry -- each stratum indents further right, visually communicating depth and confidence level. This should NOT be counted as alignment scatter.

Similarly, the Choreography spoke layout has THREE columns that are intentionally offset. This is structural, not scattered.

**Verdict:** The core alignment is clean with 2-3 dominant rails (main content, callout indent, and grid column positions). The apparent "scatter" from 5-6 positions is largely caused by intentional pattern variation across sections. This is acceptable for a compound page that explicitly changes layout per section. However, a reader tracking the left edge through fast scrolling would notice the shifts, which could feel disorienting.

---

## PA-17: Visual Rhythm -- Is there a beat, or does it feel random?

### Severity: MEDIUM (at 1440px), HIGH (at 768px), MEDIUM (at 1024px)

**What I saw:**

At 1440px, the page has a rhythm but it is COMPLEX rather than regular:

**The macro rhythm (section-to-section):** Each section follows a three-part micro-rhythm: sparse section label + heading (the "downbeat"), dense body content (the "sustained note"), sparse closing callout (the "rest"). This pattern repeats seven times and creates a recognizable heartbeat once you settle into it.

**The section-transition rhythm:** The breathing zones between sections create regular pauses. These pauses are approximately consistent in size, giving the inter-section transitions a steady pulse.

**Where rhythm breaks:**
- **Section 03 (Bento)** introduces a fundamentally different density pattern -- instead of the flowing sparse-dense-sparse of other sections, it presents a mosaic of cards. The transition FROM the F-Pattern section TO the Bento grid is jarring because the spatial logic completely changes.
- **Section 04 (Spiral)** shifts to nested strata with graduated borders. This is the most distinctive rhythm change -- the content narrows and deepens simultaneously.
- **Section 06 (Decision Matrix)** is dominated by a large table that creates a BLOCK of uniform density. This feels like a rhythmic "wall" compared to the breathing sections around it.

**The compound complexity issue:** Because each section uses a different axis pattern, the visual rhythm is inherently varied. A Z-Pattern section flows differently from an F-Pattern section, which flows differently from a Bento grid. For a reader who understands the compound concept, this variation IS the rhythm. For a casual reader, it may feel like seven different pages stitched together.

At 768px, the rhythm is destroyed by the dead-space problem. The regular sparse-dense-sparse within sections still exists, but the voids between and within sections stretch the silences until the reader loses the beat entirely. Content -- silence -- silence -- silence -- content.

At 1024px, the rhythm is similar to 1440 but somewhat less pronounced because the multi-column sections are slightly compressed.

**Verdict:** The page has an intentional compound rhythm that works at desktop for an informed reader. The section-internal three-part pattern (label, body, callout) is consistent and provides a reliable heartbeat. But the rhythm is vulnerable to the dead-space problem at narrower viewports, and the transitions between fundamentally different layout patterns are jarring even at desktop.

---

## Summary of Findings

| ID | Question | 1440 | 768 | 1024 | Severity |
|----|----------|------|-----|------|----------|
| PA-09 | Dead space | Viewport-sized voids within sections | Vast deserts of blank cream | Same as 1440, spiral worst | CRITICAL (768), HIGH (1440/1024) |
| PA-10 | Squint balance | Top-heavy, acceptable | Fails -- islands in ocean | Top-heavy, acceptable | MEDIUM (1440/1024), HIGH (768) |
| PA-11 | Margin psychology | Confident horizontal, overgenerous vertical | Horizontal OK, vertical pathological | Similar to 1440 | LOW (1440/1024), MEDIUM (768) |
| PA-14 | Column breathing | Good to excellent | CATASTROPHIC -- single-char columns in Bento | Adequate | CRITICAL (768), LOW (1440/1024) |
| PA-15 | Left-edge alignment | 5-6 positions (2-3 intentional rails) | Similar but compressed | Similar to 1440 | MEDIUM (all) |
| PA-17 | Visual rhythm | Complex compound beat, jarring transitions | Rhythm destroyed by voids | Similar to 1440 | MEDIUM (1440/1024), HIGH (768) |

## Top 3 Issues (Prioritized)

1. **CRITICAL -- Bento column collapse at 768px (PA-14):** Text in the Bento Grid section collapses to one-character-per-line vertical text at tablet width. Content is physically unreadable. The multi-column grid does not adapt to narrower viewports. This alone makes the page un-shippable at 768px.

2. **CRITICAL/HIGH -- Internal section dead zones (PA-09):** Multiple scroll positions produce entirely blank viewports. Multi-column layouts create enormous empty areas where shorter columns leave unused vertical space. At 768px this creates a page with vastly more empty space than content, making the reading experience feel broken.

3. **MEDIUM -- Section transition jarring (PA-17):** The compound pattern means each section uses a fundamentally different layout geometry. While this is the page's core concept, the transitions between incompatible patterns (particularly into and out of Bento, and into Spiral from anything) are visually jarring and break reading momentum.

## What to Protect

- The section label system (SECTION 01 -- Z-PATTERN OVERVIEW, etc.) provides excellent persistent wayfinding
- The three-part internal rhythm (label, body, callout) is consistent and reliable across all seven sections
- The hero-to-content transition is clean and authoritative
- The F-Pattern section layout is the strongest section -- clean, readable, well-proportioned at all widths
- The Essence callout positioning in Section 01 creates a beautiful diagonal reading path
- The axis indicator bar at top provides persistent context without intruding
- The data tables (Equivalence Mechanisms, Proof Across Four Explorations, Decision Matrix) are well-structured and readable at desktop
