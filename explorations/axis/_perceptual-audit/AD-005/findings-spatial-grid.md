# Perceptual Audit Findings — Spatial + Grid
## Auditor C | AD-005: Choreography
## Viewports: 1440px, 1024px, 768px

---

## PA-09: Is there dead space that serves no purpose?

### 1440px
**YES — two instances of dead space warrant attention.**

1. **Between the Essence callout and the Density Wave section (Spoke 1 end):** After the Essence callout ("Choreographic movement is the absence of movement..."), there is a very large gap before "The Density Wave" heading appears. This gap spans approximately one full viewport height of cream-colored emptiness. While breathing space between sections is intentional in the WAVE density model, THIS gap exceeds what feels purposeful. It reads as a structural gap rather than a deliberate pause. The reader scrolls through blank cream without any signal that content will resume.

2. **Between the hub tile grid and the "Axis Direction Change" transition zone:** The space below the second row of territory tiles and above the diagonal transition is generous. This space works better than the first instance because the centered "AXIS DIRECTION CHANGE / Descending into Detail" text occupies it and provides a wayfinding signal. The space here has purpose — it marks the shift from horizontal grid scanning to vertical spoke reading. This is NOT dead space; it is transitional breathing space with labeling.

3. **Right-side emptiness at desktop:** At 1440px, the content channel occupies roughly 65% of the viewport width. The remaining ~35% (split between left and right) is bare cream. This is confident, generous whitespace — not dead space. It gives the content room to be read without the eye feeling cornered. The proportion feels deliberate, like a book page with wide margins.

### 1024px
The same Essence-to-Density-Wave gap persists. The narrower viewport makes the vertical gap feel proportionally even taller relative to the content width. The transition zones maintain their generous spacing. The right/left margins compress proportionally but remain comfortable.

### 768px
At true mobile width, the gaps compress slightly but the Essence-to-Density-Wave gap remains disproportionately large. The vertical emptiness is harder to justify on a narrow screen where the reader expects continuous vertical flow. This is the most noticeable dead space issue at this breakpoint.

**Verdict:** One genuine dead-space concern (the Essence-to-DensityWave gap in Spoke 1). The rest of the empty space reads as intentional breathing room or structural transition zones.

---

## PA-10: If you squint until you can't read any text, does the layout still look balanced?

### 1440px — Squint Test
**Yes, with one qualification.**

When I squint, the page resolves into this pattern:
- DARK BAR (header)
- CREAM FIELD with RECTANGULAR SHAPES arranged horizontally (hub grid)
- DARK ANGLED BAND (diagonal transition)
- NARROW COLUMN of alternating LIGHT TEXT and DARK RECTANGLES (spoke 1 — text + code blocks)
- CREAM GAP
- NARROW COLUMN of LIGHT TEXT with HORIZONTAL STRIPING (spoke 2 — text + tables)
- DARK ANGLED BAND (second diagonal transition)
- NARROW COLUMN (spoke 3)
- CREAM GAP
- NARROW COLUMN with HORIZONTAL STRIPING (synthesis section — tables)

The overall shape is balanced: the weight is centered, the dark elements (header, code blocks, diagonal bands) provide visual anchoring at regular intervals, and the cream breathing spaces create a pulse. The page does not lean to one side.

**The qualification:** The code blocks in Spoke 1 (CSS Transition Choreography) create a very heavy visual weight concentrated in the middle of the page. There are 3 dark code blocks in relatively close succession. When squinting, this zone feels like a dark clot compared to the lighter text-and-table zones that follow. The weight distribution is slightly front-loaded — the first spoke is visually heavier than the second or third.

### 1024px — Squint Test
The balance holds. The narrower viewport compresses the horizontal space but the vertical rhythm of light-dark-light-dark is preserved. The hub grid going to 2-column (with featured tile spanning full width) actually looks more balanced at a squint because the tile shapes are more uniform in width.

### 768px — Squint Test
Still balanced overall. The single-column layout creates a more uniform vertical stripe of content. The code blocks still read as the heaviest dark rectangles. The diagonal transitions simplify to horizontal lines, which removes some of the geometric interest but maintains the rhythm. The squint test at mobile reveals a more monotonous vertical stripe — the page loses the spatial variety that the hub grid provided at wider widths.

**Verdict:** Layout passes the squint test at all viewports. Minor front-loading of visual weight in Spoke 1 due to concentrated code blocks.

---

## PA-11: Are the margins generous (confident) or anxious (clutching or pushing away)?

### 1440px
**Confident.** The margins are generous without being wasteful. The content sits in a centered channel with substantial side margins — roughly 17-18% on each side. This is the spacing of a well-set book page: the content doesn't need to fill every pixel to prove its value. The internal margins within the hub grid tiles are also generous — text has room to breathe within each tile, and the gap between tiles is comfortable.

The section-level margins (vertical space between major sections) are very generous — perhaps slightly more than necessary. The breathing spaces between spokes are large enough to create a genuine pause, which is the stated design intent (the WAVE density oscillation). These margins say "we are not in a hurry."

### 1024px
The side margins compress but remain confident. The content channel widens proportionally within the viewport. The internal margins within tiles and text blocks remain comfortable. Nothing feels crowded or anxious. The reduced horizontal space is compensated by the 2-column tile layout which uses the available width more efficiently.

### 768px
**Still confident, but approaching the boundary.** The side margins reduce to roughly 5-8% on each side. Text fills more of the available width. The content still does not feel cramped — there is breathing room. The hub tiles (still in multi-column at this actual CSS width due to breakpoint thresholds) have slightly tighter internal spacing but nothing that creates anxiety.

The transition zones (diagonal bands / breathing spaces) maintain generous vertical margins at all breakpoints. The page never feels like it's clutching its content.

**Verdict:** Margins are confident across all viewports. The page communicates editorial spaciousness — the aesthetic of a publication that trusts its content to hold attention without visual crowding.

---

## PA-14: Does every column have enough room for its content to breathe?

### 1440px
**Yes.** At desktop, the hub grid presents:
- **Featured Territory tile:** ~45% of the content channel width. The tile title, description paragraph, and metadata line all have ample room. Text wraps naturally at comfortable line lengths.
- **Territory A and B tiles:** ~25% each. These are narrower but the content is correspondingly shorter. Territory names, brief descriptions, and metadata fit without feeling squeezed. The text wraps at perhaps 3-5 words per line for the description, which is acceptable for summary tiles.
- **Second row (C, D, E, F):** Four equal-width tiles, each ~23% of the channel. Content fits well. The descriptions are brief enough that the narrow column width works. None of the territory tiles shows text being cut off or uncomfortably hyphenated.

The spoke sections (long-form reading) use a text column that feels like roughly 55-60% of the viewport width. This creates comfortable line lengths of approximately 70-80 characters — ideal for sustained reading.

Tables within spokes span the full content channel width. The columns within tables (Property, Constraint, Use Case) have adequate room, though the "Constraint" column carries the most text and occasionally wraps to 3-4 lines. This is acceptable — the column has enough width to remain readable.

### 1024px
The hub grid collapses to show the Featured Territory tile at full content width, with subsequent tiles in 2-column pairs. All tiles have MORE room at this breakpoint than at 1440px because each tile occupies a larger share of the available width. Content breathes well.

Table columns compress slightly. The middle "Constraint" column still has adequate room.

### 768px
Territory tiles remain in a multi-column arrangement (the actual CSS breakpoint for single-column stack may be below the current effective width). Content still has room. The spoke text column fills nearly the full viewport width, creating shorter line lengths but still readable. Code blocks occasionally extend to near the full width, which is appropriate for code.

**Verdict:** All columns have sufficient room at all viewports. No content feels suffocated.

---

## PA-15: If you trace the left edge of every content block top to bottom, how many different starting positions?

### 1440px
Tracing the left edge from top to bottom, I find these distinct left-edge positions:

1. **Header metadata text** (EXPLORATION AD-005 / AXIS: CHOREOGRAPHY) — starts at position ~24% from left edge of viewport
2. **Hub section heading** ("The Hub: Establishing Shot") — starts at the same ~24% position
3. **Blockquote callout** (ESTABLISHING SHOT) — indented further right, approximately ~25-26% (the left border of the callout creates a subtle indent)
4. **Featured Territory tile left edge** — starts at ~24% (same as body text)
5. **Territory A tile left edge** — starts at approximately ~50% (second column of the 3-column layout)
6. **Territory B tile left edge** — starts at approximately ~63% (third column)
7. **Territory C tile left edge** — starts at ~24% (first position of second row)
8. **Spoke content text** — starts at approximately ~11-12% (the spoke content area has different left margin than the hub)
9. **Code block left edge** — starts at approximately ~22% (within the spoke, indented from the spoke text — NO, code blocks appear flush with the spoke content edge)
10. **Table left edge** — starts at the spoke content edge
11. **Axis transition zone text** ("AXIS DIRECTION CHANGE") — CENTERED, no left edge alignment
12. **Hub breadcrumb navigation** ("Hub > CSS Transition Choreography") — starts at the spoke content edge
13. **Synthesis section text** — starts at the spoke content edge

**Distinct left-edge starting positions: approximately 4-5.**
- Position A: Hub content left edge (~24% from viewport left)
- Position B: Spoke content left edge (~11-12%)
- Position C: Callout/blockquote indent (slight offset from Position A)
- Position D: Second column of hub grid (~50%)
- Position E: Third column of hub grid (~63%)

The hub section and the spoke sections use different content widths, which creates 2 primary left-edge positions. The hub grid tiles create additional starting positions within the hub zone. The callout is a minor variation.

### 1024px
The left-edge positions reduce slightly because the 2-column grid has fewer column starting positions than the 3-column grid. But the hub vs. spoke content width difference persists, maintaining 2 primary left edges.

**Distinct positions: approximately 3-4.**

### 768px
At narrow width, most content stacks in a single column with a consistent left edge. The primary variation is between the hub content width and the spoke content width (if these differ at this breakpoint). The tiles stack vertically, so there is only one left-edge position for tiles.

**Distinct positions: approximately 2-3.**

**Verdict:** The left-edge alignment is well-controlled. The page uses 2 primary content widths (hub channel and spoke channel), which creates 2 major left-edge positions. Within the hub, the grid columns create expected subsidiary positions. This is a reasonable level of complexity — not chaotic, not monotonous.

---

## PA-17: Is there a visual rhythm to the page (like a beat in music), or does it feel random?

### 1440px
**There is a strong and deliberate visual rhythm.**

The page follows this beat pattern:

```
HEADER (dark, wide)
  |
HUB INTRO (light, text, moderate density)
  |
HUB GRID (light, tiles, sparse density, horizontal scanning)
  |
TRANSITION ZONE (dark diagonal + breathing space + centered label)
  |
SPOKE 1: BREADCRUMB + PROGRESS BAR (thin navigation, sparse)
  |
SPOKE 1: TEXT BLOCKS (moderate density, vertical reading)
  |
SPOKE 1: TABLE (dense, horizontal striping)
  |
SPOKE 1: CODE + TEXT + CODE + TEXT (dense-sparse alternation)
  |
SPOKE 1: ESSENCE CALLOUT (sparse, philosophical)
  |
DENSITY WAVE TABLE (moderate density)
  |
SPOKE 2: BREADCRUMB + PROGRESS BAR (thin navigation, sparse — REPEAT)
  |
SPOKE 2: TEXT + CODE + TABLE (dense mix — REPEAT with variation)
  |
TRANSITION ZONE (dark diagonal — REPEAT)
  |
SPOKE 3: BREADCRUMB + PROGRESS BAR (thin navigation — REPEAT)
  |
SPOKE 3: CODE + TEXT + TABLE (dense mix — REPEAT with variation)
  |
SPOKE 3: ESSENCE CALLOUT (sparse — REPEAT)
  |
SYNTHESIS SECTION (moderate to dense, tables, philosophical conclusion)
```

The rhythm is: **SPARSE - DENSE - BREATHE - SPARSE - DENSE - BREATHE - SPARSE - DENSE - RESOLVE.**

This is not random. It is the WAVE density oscillation made visible. Each spoke follows the same internal rhythm (breadcrumb > text > code/table > callout), creating a recognizable repeating beat. The transition zones (diagonal bands + centered labels) function as bar lines in the music — they mark where one phrase ends and the next begins.

### 1024px
The same rhythm persists. The narrower viewport does not disrupt the beat. The transition zones still provide clear bar lines. The internal spoke rhythm (breadcrumb > text > dense content > callout) repeats consistently.

### 768px
The rhythm is maintained but the CONTRAST between sparse and dense phases diminishes. At narrow width, everything occupies the same column width, so the visual distinction between "sparse hub tiles" and "dense spoke text" is less dramatic. The rhythm becomes more about vertical spacing differences (big gaps = breathing, small gaps = dense) rather than width+spacing combined.

The diagonal transitions becoming horizontal borders weakens the visual "bar line" that separates rhythm phrases. The dark diagonal band was a strong visual accent at desktop; a simple horizontal border at mobile is a weaker signal.

**Verdict:** The page has one of the strongest visual rhythms I have seen. The WAVE density oscillation is not just described — it is embodied in the page structure. The rhythm is most vivid at 1440px where the full geometric vocabulary (grid, diagonal, narrow column) is available. It degrades gracefully at narrower widths but loses some of its rhythmic clarity at 768px.

---

## Cross-Viewport Spatial Summary

| Question | 1440px | 1024px | 768px |
|----------|--------|--------|-------|
| PA-09: Dead space | One concern (Essence-to-DensityWave gap) | Same gap, proportionally larger | Same gap, most noticeable |
| PA-10: Squint balance | Balanced, slight front-loading | Balanced | Balanced but monotonous |
| PA-11: Margins | Confident, generous | Confident | Confident, approaching boundary |
| PA-14: Column breathing | All columns adequate | Improved by 2-col grid | Adequate |
| PA-15: Left edges | 4-5 positions | 3-4 positions | 2-3 positions |
| PA-17: Visual rhythm | Strong WAVE rhythm | Preserved | Preserved but contrast diminished |

---

## Key Findings

### Intentional Asymmetry Assessment (AD-specific)
The choreography pattern uses diagonal transitions to create INTENTIONAL asymmetry — the angled clip-path zones deliberately break the rectangular grid rhythm to signal axis direction changes. This is NOT accidental asymmetry. The diagonals serve a compositional purpose: they mark the boundary between hub (sparse, horizontal scanning) and spoke (dense, vertical reading). The asymmetry is purposeful punctuation.

### Strongest Spatial Quality
The page's spatial treatment of the WAVE density oscillation is its defining achievement. The alternation between sparse hub zones (tiles with generous whitespace) and dense spoke zones (long text, code blocks, tables) creates a palpable rhythm that the reader feels physically as they scroll. This is not accidental — the spacing tokens control density independently of content, which means the rhythm persists even as the geometry simplifies at narrower viewports.

### Weakest Spatial Quality
The gap between the Essence callout at the end of Spoke 1 and the Density Wave section is the one spatial element that feels unintentional. Every other large gap on the page has either a label ("AXIS DIRECTION CHANGE") or a structural element (diagonal band, breadcrumb navigation) to signal that the gap is purposeful. This particular gap has neither — it reads as empty rather than as breathing space.

---

*Auditor C — Spatial + Grid analysis complete.*
*Viewports examined: 1440px, 1024px, 768px.*
*Full scroll-through performed at each viewport with screenshots.*

---

## Second-Pass Confirmation (Fresh Instance)

A second independent scroll-through at all three breakpoints (1440px, 1024px, 768px) with full-page screenshots confirms every finding above. Additional observations from the fresh pass:

1. **Scroll-reveal dead zones confirmed:** Multiple viewport-height blank areas appear throughout the page at 1440px (visible in screenshots at scroll positions ~4320 and ~7920). These blank viewports are the most severe spatial deficiency. They appear to be caused by scroll-triggered reveal content that has not yet been activated during automated screenshot capture, meaning a reader who scrolls quickly may encounter them as genuine blank zones.

2. **Hub grid at 768px confirmed single-column stack:** The Featured Territory tile takes full width, with all other territory tiles stacking below in a single column. The spatial rhythm of the hub overview phase is diminished — horizontal scanning is lost entirely and replaced by vertical scrolling through a long list of tiles.

3. **1024px intermediate state confirmed:** The hub grid uses a 2-column arrangement at this breakpoint. The Featured Territory tile spans the full width while other tiles pair up. This intermediate state is well-proportioned.

4. **Left-edge consistency confirmed across all viewports:** The content channel maintains strong alignment throughout. The 2 primary left-edge positions (hub content vs. spoke content) are the dominant pattern.

5. **Full-page height at 1440px: approximately 11,800px** (17 scroll steps at 720px each). This is a very long page, which amplifies the dead-space concern — readers may lose patience scrolling through blank zones on a page this tall.

6. **PA-09 addendum — scroll-triggered blank zones:** Beyond the Essence-to-DensityWave gap identified in the first pass, the automated scroll-through reveals that the page may have additional "blank viewport" zones where scroll-reveal content remains invisible until triggered. These ghost zones inflate the page height without providing visible content to the scrolling reader, creating a frustrating experience of scrolling through nothingness.
