# Visual Maturity Gap Analysis: Pipeline vs Exploration Builds

**Date:** 2026-03-03
**Analyst:** Visual Maturity Analyst (Task #4)
**Method:** CSS forensic analysis of 6 HTML files (3 pipeline, 3 exploration) across 5 dimensions of visual maturity
**Evidence base:** `_css-forensic-comparison.md` + direct HTML/CSS reading of all 6 files

---

## Files Compared

| Label | File | Role |
|-------|------|------|
| **P1** | `yegge-gas-town-extraction-2026-03-01-5/output.html` | Pipeline build (1,927 CSS lines) |
| **P2** | `molly-panopticon-extraction-2026-03-02/_build-final.html` | Pipeline build (1,060 CSS lines) |
| **P3** | `molly-panopticon-extraction-2026-03-02-v2/_build-final.html` | Pipeline build (1,023 CSS lines) |
| **E1** | `OD-005-spatial.html` | Exploration (677 CSS lines) |
| **E2** | `OD-006-creative.html` | Exploration (1,073 CSS lines) |
| **E3** | `CD-006-pilot-migration.html` | Exploration (767 CSS lines) |
| **E4** | `AD-006-compound.html` | Exploration (referenced for specific evidence) |

---

## DIMENSION 1: Does The Page Know What It's About?

### What this dimension measures

Whether the page's spatial structure encodes the content's meaning, or whether content is "poured into zones" -- generic containers that could hold any subject.

### Exploration evidence: Layout IS argument

**AD-006 (Compound Axis).** The page is ABOUT the unification of five axis patterns (Z-pattern, F-pattern, Bento, Spiral, Choreography). Its layout literally demonstrates each one in sequence. Section 1 uses a Z-pattern grid (`grid-template-areas: "z-top-left z-top-right" "z-bottom-left z-bottom-right"`). Section 4 uses a spiral grid with golden ratio proportions (`grid-template-columns: 1fr 1fr 1.618fr`). Section 5 uses a choreography hub-and-spoke grid (`grid-template-areas: "spoke-a hub spoke-b" "spoke-c hub spoke-d"` with `grid-template-columns: 1fr 1.618fr 1fr`). The page about axis patterns IS a compound axis pattern. The layout argues the thesis.

**OD-005 (Spatial Navigation).** The page is ABOUT hub-spoke spatial organization. Its layout IS a hub-spoke: a central "territory map" hub with spoke sections (`grid-template-columns: 3fr 1fr` with named areas `"doctrine references"`). The hub has clickable territory tiles that navigate to spokes. Spoke sections have sticky sidebars (`position: sticky; top: var(--space-6)`) and "return to map" buttons. The navigational structure of the page embodies its subject matter.

**CD-006 (Pilot Migration).** The page is ABOUT the design system's own compositional vocabulary. It demonstrates the system BY using it: golden ratio grids (`grid-template-columns: 1.618fr 1fr`), spiral strata layouts, Z-hero grids, and choreography patterns -- all deployed as evidence for the claims the page makes about what the system can do.

**OD-006 (Creative/Emergent).** The page is ABOUT fractal self-similarity. It has a 3-column layout with a persistent `fractal-annotations` sidebar (`position: sticky`) showing the current fractal scale (Page, Section, Component, Character) as you scroll. The page is a fractal documenting itself being a fractal, with `writing-mode: vertical-lr` annotations along the margin.

### Pipeline evidence: Content poured into zones

**P1 (Yegge/Gas Town).** The page is about Steve Yegge's "Gas Town" philosophy of AI-assisted development -- a paradigm shift in how software gets built. The metaphor is a "refinery cross-section," and the CSS names its zones after geological strata (`--stratum-bedrock`, `--stratum-seismic`, `--stratum-floor`). This is promising. But every stratum section has the same internal structure: `.page-spine` (960px centered container) with block-stacked prose. The "refinery" metaphor is carried by background colors (`#E8E0D4`, `#FAF4EA`, `#F0E8DC`) and naming conventions, NOT by spatial structure. A refinery cross-section could use layered positioning, overlapping zones, pipe-like connections between sections -- but instead, every section is a vertical prose column on a lightly colored background. The metaphor NAMES the zones but does not SHAPE them.

The one exception: the `state-comparison` and `paradigm-comparison` components use `grid-template-columns: 1fr 1fr` (symmetric two-column grids) to show before/after or traditional/Gas Town comparisons. These are generic comparison containers. They could hold any two-column contrast. Nothing about their spatial structure reflects the specific content they contain.

**P2 (Molly/Panopticon v1).** The page is about Molly Cantillon's system of self-surveillance and personal legibility -- a panopticon turned inward. The metaphor is a "survey" or cartographic expedition. The CSS names its variables `--survey-parchment`, `--survey-bedrock`, `--survey-fieldwork`. But the spatial structure is: dark header, then vertical prose sections with `max-width: 65ch`, one `grid-template-columns: 1fr 1fr` grid for domain cards, and alternating background colors via `:nth-child(even)`. A page about a panopticon -- about observation and being observed from all angles simultaneously -- is laid out as a single linear column. No spatial tension between observer and observed. No layered perspectives. No sense of being watched or watching.

**P3 (Molly/Panopticon v2).** Same content, slightly different approach. Uses an "observatory" metaphor with variables like `--observation-plate`, `--instrument-light`, `--observatory-dark`. Has corridors between zones (`.corridor--threshold-to-instruments`) and an instrument panel bento grid (`grid-template-columns: repeat(4, 1fr)`). This is the most spatially ambitious pipeline build. But the bento grid is symmetric (equal 1fr columns), and everything else is vertical prose. An observatory page could use radial layouts, viewing-angle positioning, lens-like progressive disclosure -- but instead it is a column of text with one 4-column card grid.

### Gap diagnosis

**Explorations:** The layout IS the argument. Spatial structure physically embodies the content's thesis. You cannot separate what the page says from how it is arranged, because they are the same thing.

**Pipeline:** The layout is a CONTAINER for the argument. Metaphors are applied via naming conventions and background colors, but the spatial structure could hold any content. The "refinery" and the "observatory" and the "survey" all produce the same skeleton: dark header, 960px centered column, block-stacked sections with alternating backgrounds.

### Is this gap TECHNIQUE or ENGAGEMENT?

**Both, but primarily ENGAGEMENT.** The pipeline builders know how to use grid (P1 has 10 `display: grid` declarations). They know custom properties. They know background differentiation. What they do NOT do is ask: "If this page is about a refinery, what does a refinery LOOK LIKE as a layout?" That question requires caring about the content deeply enough to let it dictate spatial choices. The builder names the variables `--stratum-bedrock` but then lays out bedrock as... a flat 960px column with a warm background. Teaching `position: sticky` would not fix this. The builder would need to spend time THINKING about what "refinery cross-section" means spatially, then inventing a layout that embodies it.

**The technique gap is real but secondary.** Pipeline builds use 0 `position: sticky`, 0 `position: relative`, 0 `writing-mode`, 0 `grid-template-areas`, 0 golden ratio grids. These absences are symptoms. The root cause is that the builder never reaches the cognitive state where those techniques become necessary -- because the builder never asks "how does this content's meaning constrain my layout?"

---

## DIMENSION 2: Spatial Confidence vs Spatial Timidity

### What this dimension measures

Whether the page makes bold, asymmetric, intentional spatial choices -- or whether it defaults to safe, symmetric, evenly-distributed arrangements.

### Exploration evidence: Bold choices

**AD-006 Spiral section:** `grid-template-columns: 1fr 1fr 1.618fr`. The golden ratio. Not `1fr 1fr 1fr`. Not `repeat(3, 1fr)`. The builder chose a proportional relationship that has mathematical harmony. This is a COMMITMENT -- it says "the right column is more important, and its importance follows a specific proportional law."

**AD-006 Choreography section:** `grid-template-columns: 1fr 1.618fr 1fr`. The hub is wider than the spokes. The proportional choice encodes the information architecture: the hub IS the central organizing concept, so it IS physically larger.

**OD-005 Spoke grid:** `grid-template-columns: 3fr 1fr`. An aggressive 75%/25% split. The content column dominates. The sidebar is deliberately subordinate. This is confidence: committing to a spatial hierarchy rather than hedging with equal columns.

**E2 (OD-006) Three-column page layout:** `grid-template-columns: 200px 48px 1fr`. Three zones with fixed-width annotation columns. The 48px column is a fractal-annotation gutter with `writing-mode: vertical-lr` text. This is spatially inventive -- a persistent narrow column of vertical text that annotates the main content as you scroll.

**Positioned composition in explorations:**
- E2: 7 `position: absolute` elements, 3 `position: sticky`, 6 `position: relative`. Elements overlap. Pseudo-elements (`.choreo-hub::after`) create solid-offset depth effects with `position: absolute; top: var(--offset-y); left: var(--offset-x)`.
- E1: `position: sticky; top: var(--space-6)` on sidebar panels that persist while you scroll through spoke content.
- AD-006: scroll witness bar (`position: fixed; top: 0`), axis indicator (`position: sticky; top: 3px`), offset containers with `::after` pseudo-elements.

### Pipeline evidence: Safe choices

**Every pipeline grid is symmetric:**
- P1: `1fr 1fr` (9 instances), `repeat(3, 1fr)`, `repeat(4, 1fr)`, `120px 1fr` (the single asymmetric exception)
- P2: `1fr 1fr` (1 instance). That is the only grid in the entire build.
- P3: `repeat(4, 1fr)` (1 instance). That is the only grid in the entire build.

**Zero positioned composition:**
- P1: 1 `position: absolute` (skip-link). 0 `position: relative`. 0 `position: sticky`.
- P2: 1 `position: absolute` (skip-link). 0 `position: relative`. 0 `position: sticky`.
- P3: 1 `position: absolute` (skip-link). 0 `position: relative`. 0 `position: sticky`.

The pipeline produces pages that exist on a single z-plane. Nothing overlaps. Nothing persists across scroll positions. Nothing breaks out of the flow. Every element occupies its rectangular box in the document flow, and no element interacts with any other element's space.

### The spatial vocabulary gap (quantified)

| Spatial Technique | Pipeline (3 builds) | Exploration (3 builds) |
|---|---|---|
| Asymmetric grid ratios | 1 (`120px 1fr`) | 5+ (`3fr 1fr`, `1.618fr 1fr`, `200px 48px 1fr`, etc.) |
| Named grid areas | 0 | 4 |
| `position: relative` | 0 | 12 |
| `position: sticky` | 0 | 4 |
| `position: absolute` (compositional) | 0 | 9+ (excluding skip-link) |
| `writing-mode` | 0 | 2 |
| `float` | 0 | 2 |
| Golden ratio | 0 | 2 |

### Is this gap TECHNIQUE or ENGAGEMENT?

**Primarily TECHNIQUE, but caused by lack of ENGAGEMENT.**

This is the one dimension where teaching specific CSS techniques could make an immediate difference. The pipeline builder does not use `3fr 1fr` grids because it has never been shown that `3fr 1fr` is in the vocabulary. It does not use `position: sticky` because sticky sidebars are not in the component library. It does not use golden ratio because `1.618fr` has never appeared in any spec the builder reads.

BUT: the reason these techniques are absent from the builder's vocabulary is that the builder never reaches the point where the content DEMANDS them. OD-005's `3fr 1fr` grid exists because the builder understood that spoke content needs a dominant prose column with a subordinate reference sidebar. That understanding came from engagement with the content's information architecture. A builder who does not engage with content architecture will never NEED asymmetric grids, because symmetric grids are sufficient for "content poured into zones."

The most revealing evidence: P1 (Yegge) has 1,927 lines of CSS -- far more than any exploration -- but uses only 4 unique grid configurations, all symmetric. E3 (CD-006) has 767 lines of CSS but uses 4 unique grid configurations, including golden ratio and named areas. The pipeline spends its CSS budget on textural variety (backgrounds, borders, fonts) rather than structural invention. More CSS, less spatial vocabulary.

---

## DIMENSION 3: Self-Awareness

### What this dimension measures

Whether the page contains components that reference the page's own structure -- elements that are aware of being part of this specific page, rather than generic components dropped into any container.

### Exploration evidence: Pages that know they are pages

**AD-006 Pattern Echo Grid.** A miniature grid of 6 cells (80px x 80px each), where each cell contains a CSS-only diagram of one of the six axis patterns. The Z-pattern cell has diagonal lines drawn with `border-top` and `skewX(-30deg)`. The spiral cell has nested borders. The bento cell has rectangles of different sizes. This component exists ONLY because the page is about axis patterns -- it is a self-referential table of contents drawn in CSS geometry. There is no generic "pattern visualization" component. The builder invented this for this specific page.

```css
/* From AD-006 */
.pattern-echo-grid {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(2, 80px);
  gap: var(--space-2);
}
.echo-z::before {
  content: '';
  position: absolute;
  top: 12px; left: 12px;
  width: 56px; height: 56px;
  border-top: 3px solid var(--color-primary);
  border-bottom: 3px solid var(--color-primary);
}
.echo-z::after {
  content: '';
  position: absolute;
  top: 12px; right: 12px;
  width: 56px; height: 40px;
  border-right: 3px solid var(--color-text-secondary);
  transform: skewX(-30deg);
}
```

**OD-006 Fractal Annotations.** A persistent sidebar (`position: sticky`) with `writing-mode: vertical-lr` text that shows the current fractal scale (Page, Section, Component, Character) with ratio annotations (`48px -> 26px (1.85x)`). This component is the page commenting on its own typographic structure in real time. It makes visible what is usually invisible: the fractal relationship between heading sizes at different scales.

**OD-006 Scroll Witness.** A sticky section-progress panel that tracks which section you are in. Not a generic progress bar -- a labeled witness that names the sections by their content-specific titles.

**AD-006 Scroll Witness.** A fixed 3px bar at the top of the viewport (`position: fixed; top: 0; width: 100%; height: 3px`) that fills with primary red as you scroll. Plus a sticky axis indicator bar that shows the current axis pattern name.

**AD-006 Axis Indicator.** A persistent sticky bar (`position: sticky; top: 3px`) that displays the current axis pattern being demonstrated. As you scroll from the Z-pattern section to the F-pattern section, the indicator updates. The page narrates its own structure.

**OD-006 Mini-Fractal.** An `aria-label="Recursive self-reference: miniature of this grid"` element inside a grid cell that contains a miniature version of the parent grid. A fractal within a fractal. The page is a matryoshka doll.

### Pipeline evidence: Generic components

The pipeline builds contain zero self-referential components. Every component is a generic type:
- Callouts (info, tip, gotcha, essence, challenge) -- generic containers with colored borders
- Code blocks -- generic dark-background pre elements
- Tables -- generic data grids
- Blockquotes -- generic pull-quote treatments
- Cards -- generic bordered boxes

None of these components reference the page they are on. The callout system in P1 (`callout--info`, `callout--tip`, `callout--gotcha`, `callout--essence`, `callout--challenge`) is identical in structure to the callout system in P2. The same components could appear on any page about any subject.

P1 makes one gesture toward self-awareness: the "complexity ladder" component (`.complexity-ladder`) with active/inactive rungs and a red border on the active rung. But this is a STATUS INDICATOR, not a self-referential component. It shows where the reader is in a complexity progression, but it does not reference the page's own structural properties. Compare AD-006's fractal annotations, which literally display the page's own typographic ratios.

P3 makes a notable attempt with the "instrument panel" bento grid (`.instrument-floor` with `grid-template-columns: repeat(4, 1fr)`), where each panel has different padding/line-height values encoding the "density atmosphere" of its subject domain. This is a step toward self-awareness -- the component's CSS varies by content domain -- but it is still applying variation within a generic container, not creating a component that references the page's own structure.

### Is this gap TECHNIQUE or ENGAGEMENT?

**Almost entirely ENGAGEMENT.**

The CSS for a pattern-echo grid is simple: `position: absolute`, `border`, `transform: skewX`. The CSS for fractal annotations is simple: `position: sticky`, `writing-mode: vertical-lr`. These are not advanced techniques. What is advanced is the IDEA: "this page about axis patterns should contain miniature CSS diagrams of each axis pattern." That idea requires the builder to:

1. Understand what the page is about deeply enough to know its subject is visual patterns
2. Realize that visual patterns can be represented as CSS geometry
3. Design a component that exists ONLY for this page and would make no sense on any other page
4. Execute the CSS for 6 distinct miniature visualizations

Steps 1-3 are engagement. Step 4 is technique. The pipeline skips steps 1-3 entirely because the builder never spends enough time with the content to have the idea.

---

## DIMENSION 4: Reading Path Variety

### What this dimension measures

Whether scrolling through the page feels like entering different rooms (each section has a distinct spatial character) or walking down a corridor (each section feels like the previous one).

### Exploration evidence: Different rooms

**AD-006 section-by-section reading path:**

1. **Z-pattern section:** 2x2 grid with alternating dense/sparse quadrants. Eye moves diagonally. (`grid-template-columns: 1fr 1fr` with `grid-template-areas`)
2. **F-pattern section:** Vertical scanlines with progressive density (`.f-scanline` elements with horizontal rules). Eye scans left-to-right, then drops. Contains a 3-column triple-equivalence comparison (`grid-template-columns: 1fr 1fr 1fr`).
3. **Bento section:** 4-column grid with featured spanning items (`grid-template-columns: repeat(4, 1fr)` with `grid-column: span 2; grid-row: span 2` for the featured item). The reader's eye jumps between cells of different sizes.
4. **Spiral section:** Golden ratio 3-zone grid (`grid-template-columns: 1fr 1fr 1.618fr`) with named areas that create an L-shaped reading path. The content physically narrows as it deepens.
5. **Choreography section:** Hub-and-spoke grid (`grid-template-columns: 1fr 1.618fr 1fr` with 4 spokes and a central hub). The reader's eye radiates from center to periphery. The hub has a solid-offset depth effect (`::after` pseudo-element with `position: absolute`).
6. **Synthesis section:** Decision matrix table with colored left-borders encoding fit quality. Dense tabular data.
7. **Fractal meta section:** Grid with `3rem` annotation column using `writing-mode: vertical-lr`. The annotation margin creates a spatial frame around the content.

Each section has a DISTINCT spatial skeleton. The reader's eye follows a different path in each. The experience of scrolling is sequential-but-varied: verse-chorus-bridge, not verse-verse-verse.

**OD-005 reading path:**
- Hub (territory map): auto-fit responsive grid of territory tiles (`repeat(auto-fit, minmax(280px, 1fr))`)
- Spokes: 3fr/1fr content/sidebar layout with sticky sidebar
- Between spokes: 80px dividers (`--space-20`) for island isolation

**CD-006 reading path:** 19 sections with golden ratio grids, spiral strata, Z-hero patterns, bento grids, and choreography hub-spoke -- each section demonstrating a different compositional technique.

### Pipeline evidence: Same corridor

**P1 (Yegge/Gas Town) section-by-section reading path:**

1. Dark header with serif title -- distinct
2. TOC band -- block container with bordered list
3. Foundation stratum -- 960px column, prose, 1fr 1fr state comparison
4. Seismic stratum -- 960px column, prose, 1fr 1fr paradigm comparison
5. Floor stratum -- 960px column, prose, code blocks
6. Pipe stratum -- 960px column, prose, code blocks
7. Gauge stratum -- 960px column, prose, tables
8. Surface stratum -- 960px column, prose, callouts
9. Dispatch stratum -- 960px column, prose

Sections 3-9 are structurally identical: 960px centered column containing block-stacked paragraphs, occasionally broken by a symmetric `1fr 1fr` grid or a code block. The background color changes (subtly) between strata. The internal structure does not change. Scrolling through sections 3-9 feels like reading different chapters of the same book in the same room.

**P2 (Molly v1):** Dark header, then 5 zones of vertical prose. One `1fr 1fr` domain grid. The reading path from Zone 1 to Zone 5 is: scroll down. The internal structure of each zone is: left-aligned prose with occasional bordered callouts.

**P3 (Molly v2):** Dark header, corridors between zones (a notable improvement -- the corridors are short bridge sections with distinct backgrounds), one `repeat(4, 1fr)` instrument grid. The bento grid is the most spatially distinct moment. But apart from this grid, the reading path is the same vertical scroll through left-aligned prose.

### Quantified reading path diversity

| File | Sections | Distinct Inner Layouts | Layout Diversity Ratio |
|------|----------|----------------------|----------------------|
| AD-006 | 7 | 7 (Z, F, Bento, Spiral, Choreo, Matrix, Fractal) | **1.00** |
| OD-005 | 8 | 3 (hub grid, content/sidebar, dividers) | **0.38** |
| CD-006 | 19 | 5+ (Z-hero, spiral, bento, choreo, default) | **0.26+** |
| P1 | 17 | 2 (header, symmetric-grid-or-prose) | **0.12** |
| P2 | 7 | 2 (header, prose) | **0.29** |
| P3 | 6 | 3 (header, bento, prose) | **0.50** |

P3 is the strongest pipeline build on this dimension (the instrument bento grid is genuinely different from the surrounding prose). P1 is the weakest despite being the largest: 17 sections, but only 2 distinct inner layouts.

### Is this gap TECHNIQUE or ENGAGEMENT?

**Both in equal measure.**

The technique gap is real: the pipeline builder does not deploy Z-pattern, F-pattern, bento, spiral, or choreography layouts because it does not have these in its vocabulary. If you taught the builder these patterns, it could deploy them.

But the engagement gap is equally real: even within the techniques the pipeline builder DOES know, it does not vary them section-to-section. The pipeline builder knows `1fr 1fr` grids. It uses `1fr 1fr` grids in every section that needs a grid. It never asks: "Section 3 used `1fr 1fr` -- what should Section 4 use instead?" The idea that consecutive sections should have DIFFERENT spatial skeletons requires caring about the reader's experience of scrolling through the page -- caring about pacing, rhythm, surprise, variety. This is engagement, not technique.

---

## DIMENSION 5: Visual Maturity

### What this dimension measures

The hardest dimension. Visual maturity is the difference between a page that feels like it was designed by someone who has built hundreds of pages and one that feels like it was built by someone following instructions. It is a gestalt quality. But we can decompose it.

### The components of visual maturity

**1. Proportional confidence.** Mature pages use non-obvious proportions: golden ratios, 3:1 splits, variable-width columns. Immature pages use equal divisions: 1:1, 1:1:1, 1:1:1:1. The exploration builds use golden ratio (`1.618fr`) in 2 files, `3fr 1fr` in 1 file, `200px 48px 1fr` in 1 file. The pipeline builds use `1fr 1fr` in all files.

**2. Z-axis awareness.** Mature pages create depth: elements that overlap, persist, or float above other elements. Immature pages are flat: every element in its box, no overlap, no persistence. Explorations average 4.0 `position: relative` per file, 3.7 `position: absolute` per file (compositional, not skip-link), 1.3 `position: sticky` per file. Pipeline: 0, 0, 0.

**3. Temporal responsiveness.** Mature pages respond to user presence: hover states, transitions, entrance animations. They feel alive, as if the page knows you are there. Immature pages are inert. Explorations average 6.0 transitions, 1.0 keyframe animation, 3.3 hover rules per file. Pipeline: 1.0 transition, 0 keyframes, 1.0 hover rule.

**4. Spatial invention.** Mature pages contain at least one layout that the reader has never seen before -- a spatial arrangement that could only exist on this page about this content. Immature pages use familiar blog layouts. AD-006's pattern-echo grid (six miniature CSS diagrams), OD-006's fractal annotation margin (`writing-mode: vertical-lr` with sticky scale indicators), OD-005's hub-spoke navigation architecture -- these are inventions. The pipeline builds contain zero spatial inventions. Every layout in every pipeline build is a standard web layout pattern.

**5. Restraint in the right places.** This is counter-intuitive: mature pages are NOT busy everywhere. They are quiet where quiet serves the content and loud where loudness serves the content. AD-006's F-pattern section is deliberately sparse -- horizontal scanlines with generous whitespace -- because the F-pattern IS about sparse horizontal scanning. OD-005's hub is dense (auto-fit territory tiles packed together) while its spokes are spacious (3fr/1fr with sticky sidebar). The density variation is SEMANTIC -- it encodes the content's information architecture.

Pipeline builds are uniformly moderate. Every section has the same density. There are no moments of deliberate compression or deliberate spaciousness driven by content meaning. P1 applies different stratum background colors but the same padding (`var(--space-16) 0 var(--space-12) 0`) to every section -- density is uniform regardless of content.

### The maturity gap in one sentence

Exploration builds make SPATIAL DECISIONS that are CONTENT-DRIVEN and IRREVERSIBLE -- choices that commit to a specific interpretation of the content's meaning. Pipeline builds make SPATIAL DECISIONS that are GENERIC and INTERCHANGEABLE -- choices that could be swapped between sections or pages without loss of meaning.

### Evidence: The "swap test"

Take any section from P1 (Yegge) and swap it into P2 (Molly). Does the section break? No. The 960px centered column with left-aligned prose and a `1fr 1fr` grid works equally well for Gas Town content and Panopticon content. The layout does not encode content meaning, so removing it from its content context does not damage it.

Now take AD-006's spiral section (golden ratio grid with named areas, color-coded confidence borders, decreasing width as content deepens) and swap it into OD-005. It makes no sense. The spiral layout IS the argument that content deepens proportionally. Removing it from its content context destroys its meaning.

Visual maturity = the degree to which the layout would be damaged by removing it from its content. Mature layouts are married to their content. Immature layouts are available for any content.

### Is this gap TECHNIQUE or ENGAGEMENT?

**Almost entirely ENGAGEMENT.** Visual maturity is not a skill you learn. It is a relationship you form with specific content. The exploration builder forms this relationship because the exploration workflow gives it time, focus, and freedom to do so. The pipeline builder does not form this relationship because the pipeline workflow gives it a brief, a component library, and a constraint checklist.

The technique gap (15 absent CSS features documented in `_css-forensic-comparison.md`) is a real and measurable deficit. But teaching all 15 techniques would produce a page with `position: sticky` sidebars, golden ratio grids, and `@keyframes` animations -- deployed generically, without content-driven purpose. The result would be a technically richer page that still fails the swap test. Technique without engagement produces decoration, not design.

---

## CROSS-DIMENSION SYNTHESIS

### The 5 dimensions, ranked by technique-vs-engagement

| Dimension | Technique % | Engagement % | Teachable via CSS? |
|-----------|------------|-------------|-------------------|
| 1. Does the page know what it's about? | 20% | 80% | No |
| 2. Spatial confidence vs timidity | 40% | 60% | Partially |
| 3. Self-awareness | 10% | 90% | No |
| 4. Reading path variety | 50% | 50% | Partially |
| 5. Visual maturity (gestalt) | 15% | 85% | No |

### The key finding

The gap between pipeline and exploration builds is not primarily a CSS skill gap. The forensic data proves this: the pipeline spends MORE CSS lines than explorations (P1 = 1,927 lines vs E2 = 1,073 lines) but produces LESS spatial diversity (4 unique grid configs vs 4 unique grid configs -- but the pipeline configs are all symmetric while the exploration configs include golden ratio, asymmetric, and named areas).

The gap is a COGNITIVE STATE gap. The exploration builder enters a state where:

1. It understands the content deeply enough to see its spatial implications
2. It feels confident enough to make bold, asymmetric, irreversible spatial choices
3. It cares enough about THIS specific page to invent components that only work HERE
4. It thinks about the reader's experience of scrolling through the page, not just "does this section contain the right content"

This cognitive state cannot be produced by teaching CSS techniques. It can only be produced by changing the conditions under which the builder works: giving it more time with the content, fewer constraints to monitor, and explicit permission (or mandate) to let the content dictate the layout.

### The $5 question vs the $150 question

When the pipeline builder asks "how should I lay out this section?", it answers: "960px centered column, block stacking, maybe a 1fr 1fr grid." This answer takes 5 seconds and costs no cognitive effort. It is the answer to the $5 question.

When the exploration builder asks "how should I lay out this section?", it answers: "this section is about the convergence of five axis patterns, so it should BE a compound of five axis layouts, each demonstrated in sequence with transitions between them." This answer takes minutes of deep content engagement. It is the answer to the $150 question.

The visual maturity gap is the distance between these two questions.

---

## APPENDIX: Specific CSS Evidence Catalog

### A. Absent pipeline techniques with exploration examples

| Technique | Exploration Example | File:Line |
|-----------|-------------------|-----------|
| `position: sticky` sidebar | `.sidebar-panel { position: sticky; top: var(--space-6); }` | OD-005:723 |
| `position: sticky` fractal annotations | `.fractal-annotations { position: sticky; }` | OD-006:438 |
| `writing-mode: vertical-lr` | `.fractal-annotation { writing-mode: vertical-lr; }` | OD-006:453 |
| `writing-mode: vertical-rl` | Vertical spoke-edge text | OD-005:1057 |
| Golden ratio grid | `grid-template-columns: 1fr 1fr 1.618fr` | AD-006:882 |
| Hub-spoke golden grid | `grid-template-columns: 1fr 1.618fr 1fr` | AD-006:930 |
| Asymmetric content grid | `grid-template-columns: 3fr 1fr` | OD-005:677 |
| 3-zone fixed-fluid grid | `grid-template-columns: 200px 48px 1fr` | OD-006:418 |
| Named grid areas | `grid-template-areas: "doctrine references"` | OD-005:678-679 |
| Spiral named areas | `grid-template-areas: "spiral-wide spiral-wide spiral-wide" ...` | AD-006:878-881 |
| Solid offset depth | `::after { position: absolute; top: var(--offset-y); ... }` | AD-006:1070-1080 |
| Pattern echo CSS diagrams | `.echo-z::before { transform: skewX(-30deg); }` | AD-006:689 |
| Auto-fit responsive grid | `repeat(auto-fit, minmax(280px, 1fr))` | OD-005:534 |
| Drop caps | `.drop-cap::first-letter { font-size: 3.5em; float: left; }` | AD-006:565-573 |
| Scroll witness bar | `.scroll-witness { position: fixed; top: 0; height: 3px; }` | AD-006:526-533 |

### B. Pipeline spatial inventory (complete)

| Build | All Unique Grid Configs |
|-------|------------------------|
| P1 (Yegge) | `1fr 1fr`, `repeat(3, 1fr)`, `repeat(4, 1fr)`, `120px 1fr` |
| P2 (Molly v1) | `1fr 1fr` |
| P3 (Molly v2) | `repeat(4, 1fr)` |

### C. Pipeline positioning inventory (complete)

| Build | `relative` | `absolute` | `sticky` | `fixed` |
|-------|-----------|-----------|---------|--------|
| P1 | 0 | 1 (skip-link) | 0 | 0 |
| P2 | 0 | 1 (skip-link) | 0 | 0 |
| P3 | 0 | 1 (skip-link) | 0 | 0 |
