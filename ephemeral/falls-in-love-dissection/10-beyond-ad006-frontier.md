# Beyond AD-006: The Frontier Map

**Date:** 2026-03-03
**Analyst:** Frontier Researcher (Task #4)
**Method:** CSS forensic analysis of known ceiling (AD-006, OD-005, OD-006, CD-006) + cross-domain spatial research + advanced CSS capability audit
**Evidence base:** 4 exploration HTML files (deep CSS reading), `_css-forensic-comparison.md`, `04-visual-maturity-gap-analysis.md`, web research on 11+ CSS capabilities, cross-domain spatial design literature

---

## PART 1: THE ABSENCE CATALOG

### What CSS capabilities did NONE of the explorations use?

The explorations represent the known ceiling. AD-006 uses golden ratio grids, named grid areas, sticky navigation, writing-mode annotations, positioned composition, and CSS-only pattern diagrams. OD-005 uses hub-spoke navigation with sticky sidebars. OD-006 uses fractal annotations with vertical text. CD-006 synthesizes all patterns.

But there are entire categories of modern CSS that remain untouched. Here they are, ranked by potential for genuine content-form coupling (not decoration).

---

### 1. CSS Container Queries (`@container`)

**What it does:** Components that respond to their OWN container's size, not the viewport. A callout inside a narrow sidebar renders differently than the same callout in a wide main column -- automatically.

**Browser support:** 95%+ global (Chrome 105+, Firefox 110+, Safari 16+). Production-ready.

**Content-form coupling potential: HIGH**

The explorations use media queries for responsive collapse (`@media (max-width: 768px)`), which means ALL components collapse at the same viewport width regardless of their spatial context. Container queries would allow a component to know WHERE it is on the page. A callout in OD-005's narrow `1fr` sidebar could render as a compact inline annotation, while the same callout in the `3fr` content column renders as a full block with expanded body text. The component becomes spatially self-aware.

**Specific example:**

Consider a page about the evolution of an idea. The early sections (where the idea is small and uncertain) use narrow containers. The same `<div class="concept-card">` renders as a tight label in the narrow container but expands into a full exposition in a wide container. The SAME component grows as the idea grows -- the container width IS the idea's maturity.

```css
.concept-zone {
  container-type: inline-size;
  container-name: concept;
}

.concept-card {
  padding: var(--space-4);
  border-left: 4px solid var(--accent-blue);
}

/* Narrow container: compact, seed-form */
@container concept (max-width: 300px) {
  .concept-card {
    font-size: var(--type-meta);
    padding: var(--space-2);
    border-left-width: 2px;
  }
  .concept-card .body { display: none; }
  .concept-card .title { font-family: var(--font-mono); }
}

/* Wide container: full exposition */
@container concept (min-width: 600px) {
  .concept-card {
    font-size: var(--type-body);
    padding: var(--space-8);
    border-left-width: 4px;
  }
  .concept-card .body { display: block; line-height: 1.7; }
  .concept-card .title { font-family: var(--font-display); font-style: italic; }
}
```

**Why the explorations didn't use it:** Container queries require thinking about components as spatially-aware entities rather than static blocks. The exploration workflow builds components as fixed-structure elements (a callout IS a label + body with a 4px left border). Container queries require a different mental model: the component's structure is fluid, determined by its spatial context. This is a conceptual gap, not a knowledge gap.

---

### 2. CSS Scroll-Driven Animations (`animation-timeline: scroll()`)

**What it does:** CSS animations tied to scroll position rather than time. An element can animate from 0% to 100% as the user scrolls from the top to the bottom of a section -- pure CSS, no JavaScript.

**Browser support:** Chrome (full), Firefox (flag), Safari (not yet). Progressive enhancement viable -- falls back to static state.

**Content-form coupling potential: VERY HIGH**

This is the single highest-potential technique for content-form coupling that the explorations missed entirely. AD-006 uses a JavaScript scroll witness (a 3px progress bar). With scroll-driven animations, the ENTIRE PAGE could respond to scroll position in content-meaningful ways.

**Specific examples:**

A page about convergence. As you scroll through the "divergent ideas" section, the left margin of the page gradually narrows from 200px to 0px. The content physically converges. The spatial form IS the argument.

A page about geological layers. As you scroll deeper, the background subtly shifts from light (surface) to dark (depth). Border widths thicken. Typography tightens. The page becomes denser as you go deeper -- without any JavaScript.

A page about a debate between two positions. The left-column and right-column widths oscillate as you scroll: when the left argument is strong, its column is wider; when the right argument responds, the right column expands. The spatial balance TRACKS the argumentative balance.

```css
/* Convergence funnel: margins narrow as you scroll through the section */
.convergence-section {
  animation: converge linear;
  animation-timeline: view();
  animation-range: entry 0% exit 100%;
}

@keyframes converge {
  0% { padding-left: 200px; padding-right: 200px; }
  100% { padding-left: var(--space-8); padding-right: var(--space-8); }
}

/* Geological deepening: border thickens as you scroll down */
.stratum {
  animation: deepen linear;
  animation-timeline: scroll();
}

@keyframes deepen {
  0% { border-left-width: 1px; letter-spacing: 0.01em; }
  100% { border-left-width: 8px; letter-spacing: -0.01em; }
}

/* Argument balance: column widths shift with scroll position */
.debate-grid {
  display: grid;
  animation: rebalance linear;
  animation-timeline: view();
  animation-range: contain 0% contain 100%;
}

@keyframes rebalance {
  0% { grid-template-columns: 2fr 1fr; }
  50% { grid-template-columns: 1fr 1fr; }
  100% { grid-template-columns: 1fr 2fr; }
}
```

**Why the explorations didn't use it:** Two reasons. First, browser support is not universal (no Safari). Second, and more importantly: the explorations were built as STATIC documents. Every section has a fixed layout. The idea that layout should CHANGE as you scroll -- that the spatial form is temporal, not just spatial -- is a paradigm shift that the exploration workflow never explored. The explorations answer "what layout does this section have?" but never "how does this section's layout EVOLVE as the reader moves through it?"

---

### 3. CSS Subgrid (`grid-template-rows: subgrid`)

**What it does:** Nested grid items inherit their parent's grid tracks. Inner elements align with the parent's grid lines even though they're in nested containers.

**Browser support:** 97% global. Production-ready since 2024.

**Content-form coupling potential: MEDIUM-HIGH**

The explorations use nested grids, but each grid defines its own independent tracks. Subgrid would allow HIERARCHICAL alignment: a hub-spoke layout where the spoke content elements align with the hub's grid lines, creating visual connections that cross container boundaries.

**Specific example:**

A page about a system with interconnected parts. The page grid defines 12 columns. Each section (a "subsystem") uses `subgrid` to align its internal elements with the page grid. When two subsystems share a column boundary, their content visually connects -- a border in one section continues into the next. The GRID is the system's interconnection.

```css
.page-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-2);
}

.subsystem-section {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
}

.subsystem-section .sidebar {
  grid-column: 1 / 4;        /* Aligns with page column 1-3 */
}

.subsystem-section .main-content {
  grid-column: 4 / 10;       /* Aligns with page column 4-9 */
}

.subsystem-section .annotations {
  grid-column: 10 / -1;      /* Aligns with page column 10-12 */
}
```

**Why the explorations didn't use it:** The explorations use `max-width` containers (1100px, 960px) with internal grids. The idea of a PAGE-LEVEL grid that persists across sections -- where sections inherit rather than define their own grids -- would require rethinking the entire page architecture. Each exploration section is a self-contained world. Subgrid enables sections that are part of a unified spatial system.

---

### 4. CSS Anchor Positioning (`anchor()`)

**What it does:** Elements positioned relative to other elements anywhere in the DOM, not just their parent. An annotation can be anchored to the word it annotates regardless of scroll position or layout changes.

**Browser support:** Chrome 125+, Safari 26+. Firefox behind flag. Approaching production-ready.

**Content-form coupling potential: HIGH**

OD-006 uses `position: sticky` for fractal annotations that persist in the sidebar as you scroll. Anchor positioning would enable SPECIFIC annotations that point to SPECIFIC content elements. A margin note about a particular code example anchors to that code block and follows it. A critique of a specific claim anchors to the sentence containing that claim.

**Specific example:**

A page about a code review. The main column contains the code. The margin contains reviewer comments. Each comment is anchored to the specific line of code it discusses. As the page reflows (viewport changes, content collapses), the annotations stay connected to their anchors. The spatial relationship between critique and code is MAINTAINED regardless of layout.

```css
.code-line-47 {
  anchor-name: --line-47;
}

.review-comment-for-47 {
  position: fixed;
  position-anchor: --line-47;
  top: anchor(--line-47 top);
  left: anchor(--line-47 right);
  margin-left: var(--space-4);
  max-width: 250px;
}
```

**Why the explorations didn't use it:** Anchor positioning was Chrome-only until very recently. But the deeper reason: the explorations don't have cross-element spatial relationships. Every element is positioned within its section. The idea that Element A in Section 2 could be spatially connected to Element B in Section 5 -- that spatial relationships can cross section boundaries -- is foreign to the exploration architecture.

---

### 5. `clip-path` Compositions

**What it does:** Non-rectangular element shapes. Sections can be diagonal, curved, or arbitrarily shaped. Text wraps around non-rectangular boundaries via `shape-outside`.

**Browser support:** Excellent (95%+). Production-ready.

**Content-form coupling potential: MEDIUM-HIGH**

All exploration sections are rectangular. Every section is a full-width band. The page is a stack of rectangular bands. `clip-path` would allow sections with non-rectangular boundaries -- diagonal transitions between sections, curved zone boundaries, sections that physically narrow or widen.

**Specific example:**

A page about a funnel process (wide input, narrow output). Each section uses `clip-path: polygon()` to create a trapezoidal shape that's slightly narrower than the previous section. The page physically narrows as you scroll. The spatial form IS the funnel.

```css
.funnel-stage-1 {
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
  padding: var(--space-12) 10%;
  background: var(--color-zone-sparse);
}

.funnel-stage-2 {
  clip-path: polygon(5% 0, 95% 0, 88% 100%, 12% 100%);
  padding: var(--space-12) 15%;
  background: var(--color-zone-dense);
  margin-top: -2px; /* seamless connection */
}

.funnel-stage-3 {
  clip-path: polygon(12% 0, 88% 0, 80% 100%, 20% 100%);
  padding: var(--space-12) 22%;
  background: var(--color-zone-breathing);
  margin-top: -2px;
}
```

**Why the explorations didn't use it:** The design system identity is "anti-physical" -- sharp edges, no rounded corners, flat surfaces. `clip-path` with curves might feel like it violates the angular identity. But `clip-path` with straight diagonal lines is perfectly angular -- it is AGGRESSIVE geometry, more angular than rectangles. The real reason is simpler: the exploration builders never thought about non-rectangular sections because the paradigm is "section = full-width rectangle."

---

### 6. `color-mix()` for Semantic Color Systems

**What it does:** Programmatic color relationships. Colors derived mathematically from a base color. `color-mix(in oklch, var(--color-primary) 30%, white)` creates a tint that's 30% primary.

**Browser support:** Excellent (95%+). Production-ready.

**Content-form coupling potential: MEDIUM**

The explorations use a fixed color palette (5 accent colors: blue, green, coral, amber, purple). `color-mix()` would enable colors that are DERIVED from content state. A section's confidence level determines its color intensity: 100% confidence = full primary color, 50% = half-mixed with background, 10% = barely tinted.

```css
/* Confidence maps to color intensity */
.claim[data-confidence="high"]    { border-left-color: var(--color-primary); }
.claim[data-confidence="medium"]  { border-left-color: color-mix(in oklch, var(--color-primary) 50%, var(--color-background)); }
.claim[data-confidence="low"]     { border-left-color: color-mix(in oklch, var(--color-primary) 20%, var(--color-background)); }
.claim[data-confidence="speculative"] { border-left-color: color-mix(in oklch, var(--color-primary) 5%, var(--color-background)); }
```

**Why the explorations didn't use it:** The design system's color palette is LOCKED. Five fixed accent colors. The idea that color is a CONTINUOUS variable (not discrete categories) was never explored because the identity spec defines discrete color tokens.

---

### 7. `@layer` for CSS Architecture

**What it does:** Cascade layers that organize CSS into named priority groups. The CSS itself can be architecturally meaningful.

**Browser support:** 95%+ global. Production-ready.

**Content-form coupling potential: LOW (for content coupling) / HIGH (for CSS architecture)**

This is less about content-form coupling and more about structural clarity. The explorations mix locked tokens, base styles, section layouts, component styles, and responsive overrides in a single flat stylesheet. `@layer` would make the CSS architecture VISIBLE:

```css
@layer tokens, base, structure, texture, sections, components, responsive;

@layer tokens { :root { /* all variables */ } }
@layer base { body { /* base typography */ } }
@layer structure { .page-grid { /* page-level layout */ } }
@layer texture { .zone-sparse { /* backgrounds, borders */ } }
@layer sections { .z-layout { /* section-specific grids */ } }
@layer components { .callout { /* component styles */ } }
@layer responsive { @media (max-width: 768px) { /* collapses */ } }
```

**Why the explorations didn't use it:** The explorations already use a two-layer system (locked-layer and axis-layer in AD-006). `@layer` would formalize this, but the explorations were built before cascade layers were universally supported.

---

### 8. Advanced `writing-mode` + `text-orientation`

**What it does:** Vertical text, sideways text, upward-reading text. Already used sparingly (OD-006 has `writing-mode: vertical-lr` annotations). But the explorations barely scratch the surface.

**Browser support:** Excellent. Production-ready.

**Content-form coupling potential: HIGH (if used structurally, not decoratively)**

OD-006 uses vertical text for annotation labels in a narrow sidebar. But `writing-mode` could serve STRUCTURAL purposes:

- A section about looking backward: text reads right-to-left (`direction: rtl`), forcing the reader to physically reverse their reading direction. The spatial form IS the retrospection.
- A section about depth: text reads bottom-to-top (`writing-mode: vertical-rl; transform: rotate(180deg)`), forcing the reader's eye downward into the page.
- Marginal commentary: vertical text runs alongside the main column as a persistent annotation stream, like a running commentary that accompanies the argument.

```css
/* Retrospection section: reversed reading direction */
.retrospection {
  direction: rtl;
  text-align: right;
  unicode-bidi: bidi-override;
}

/* Depth section: reading downward */
.descent-annotation {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  position: sticky;
  top: var(--space-12);
  height: 80vh;
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  border-left: 1px solid var(--color-border-subtle);
  padding-left: var(--space-2);
}
```

**Why the explorations only barely used it:** OD-006's vertical text is a labeling mechanism (it labels fractal scales). Using writing-mode to ENCODE content meaning (reading direction = conceptual direction) requires deeper engagement with the content. The builder would need to ask: "What does the direction of reading MEAN for this content?" That question goes beyond technique.

---

### 9. `shape-outside` + `float` for Flowing Text

**What it does:** Text that wraps around non-rectangular shapes. Content flows around a central element following a custom path.

**Browser support:** Good (90%+). Production-ready.

**Content-form coupling potential: MEDIUM**

A page about a central concept with orbiting examples. The central concept is a `float: left` element with `shape-outside: circle(50%)`. The surrounding text literally flows AROUND it, creating a visual vortex where the text orbits the core idea.

```css
.central-concept {
  float: left;
  shape-outside: circle(50% at 50% 50%);
  width: 300px;
  height: 300px;
  margin: var(--space-4);
  border: 3px solid var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-zone-dense);
}
```

**Why the explorations didn't use it:** The explorations use grid exclusively for layout. Float is "old CSS" in the mental model. But `shape-outside` is not about float-based layout -- it's about text-flow shaping, which is a fundamentally different spatial capability that grid cannot replicate.

---

### 10. `aspect-ratio` for Semantic Proportions

**What it does:** Elements with enforced width-to-height ratios. A section can be "cinematic" (21:9), "portrait" (3:4), or "square" (1:1).

**Browser support:** 95%+. Production-ready.

**Content-form coupling potential: MEDIUM**

A page about different modes of thinking. The analytical section uses `aspect-ratio: 21/9` (wide, cinematic -- panoramic overview). The intimate/personal section uses `aspect-ratio: 3/4` (portrait -- close, focused). The balanced section uses `aspect-ratio: 1/1` (square -- equilibrium). The proportions encode the character of the content.

```css
.panoramic-overview {
  aspect-ratio: 21 / 9;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: var(--color-zone-sparse);
  border: 3px solid var(--color-border);
}

.intimate-reflection {
  aspect-ratio: 3 / 4;
  max-width: 480px;
  margin: 0 auto;
  padding: var(--space-8);
  background: var(--color-zone-dense);
}

.equilibrium {
  aspect-ratio: 1 / 1;
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  place-items: center;
}
```

**Why the explorations didn't use it:** Exploration sections are height-agnostic -- they grow to fit their content. The idea of constraining a section's height (via aspect-ratio) and letting content overflow or be truncated is counter to the document model. But a section with a fixed aspect ratio creates SPATIAL PRESSURE -- the content must be curated to fit the proportional frame, which is itself a design decision.

---

### 11. View Transitions API

**What it does:** Animated transitions between page states. Sections that morph when navigated to, content that crossfades between views.

**Browser support:** Chrome 111+. Limited cross-browser.

**Content-form coupling potential: MEDIUM (requires JavaScript trigger, CSS defines the animation)**

OD-005 has a hub-spoke navigation structure. With view transitions, clicking a spoke tile could trigger a smooth spatial transition: the tile expands to fill the viewport as the hub recedes. The NAVIGATION is spatial, not just the layout.

**Why the explorations didn't use it:** Requires JavaScript to trigger (not pure CSS). Limited browser support. But the deeper issue: the explorations are scroll-through documents, not interactive applications. Spatial transitions belong to a paradigm where the reader NAVIGATES rather than scrolls.

---

## PART 2: CROSS-DOMAIN SPATIAL IDEAS

### Architecture: Compression-Expansion Sequences

Buildings create emotional narratives through spatial compression and expansion. A narrow corridor (compression) opens into a grand hall (expansion). The emotional impact of the hall is AMPLIFIED by the preceding corridor. Frank Lloyd Wright's Fallingwater uses this relentlessly -- low ceilings in entry areas expand into cantilevered living spaces with panoramic views.

**Translation to CSS:**

A page about a breakthrough discovery. Sections before the discovery use narrow `max-width: 480px` containers with tight `line-height: 1.4`. The discovery section explodes to `max-width: 1100px` with `line-height: 1.9`. The spatial expansion IS the breakthrough. Then subsequent sections gradually compress again as implications are processed.

```css
.pre-discovery {
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.4;
  padding: var(--space-4);
  border-left: 1px solid var(--color-border-subtle);
}

.the-discovery {
  max-width: 1100px;
  margin: 0 auto;
  line-height: 1.9;
  padding: var(--space-16) var(--space-8);
  border-left: 4px solid var(--color-primary);
  font-size: 1.1em;
}

.post-discovery {
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: var(--space-6);
}
```

The explorations use a FIXED container width (1100px in AD-006, 960px in pipeline builds). Varying the container width section-by-section is the most immediately achievable beyond-ceiling technique. No new CSS features required -- just the IDEA that container width is a narrative variable.

---

### Architecture: Threshold Moments

Buildings use thresholds -- door frames, archways, material changes, level changes -- to signal "you are crossing from one space into another." The threshold prepares the visitor emotionally for what comes next.

**Translation to CSS:**

Section transitions that are MORE than a `border-top: 3px solid`. A threshold zone between sections: a narrow band (40-64px tall) with distinctive visual treatment (different background, centered mono text announcing the next section, perhaps a `clip-path` diagonal).

```css
.threshold {
  height: var(--space-16);
  background: var(--color-text);
  color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
  margin: var(--space-12) 0;
}
```

The explorations use `border-top: 3px solid` between sections. That is a line. A threshold is a SPACE -- a brief spatial experience that prepares the reader for a mode change.

---

### Cartography: Legend Sidebars and Topographic Depth

Maps have legends (explaining symbols), scale bars (establishing measurement), orientation markers (compass roses), and topographic contours (encoding elevation via line density).

**Translation to CSS:**

A persistent "legend" sidebar (using `position: sticky`) that explains the visual conventions of the current section. As the reader scrolls through a complex argument, the legend updates to show the current "terrain type" -- what the colors, borders, and spatial patterns mean in this specific section.

A "topographic" page where scroll depth = complexity. The deeper you scroll, the more dense the border patterns become (1px -> 3px -> 4px), the tighter the spacing gets (`--space-8` -> `--space-4` -> `--space-2`), the more compressed the typography (`line-height: 1.7` -> `1.5` -> `1.3`). The page has ALTITUDE. Surface = accessible overview. Depth = dense technical detail.

```css
.legend-sidebar {
  position: sticky;
  top: var(--space-8);
  width: 200px;
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  border-left: 1px solid var(--color-border-subtle);
  padding-left: var(--space-4);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
}

.legend-swatch {
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-border);
}
```

OD-005 has something like this (territory map as hub). But no exploration uses a persistent LEGEND that explains itself. Self-documenting spatial conventions are a cartographic technique that web design has barely adopted.

---

### Print / Editorial: The Double Spread and Margin Commentary

Magazine double-page spreads treat two pages as ONE visual field. Pull quotes break column boundaries. Margin annotations run alongside body text. Running headers persist across pages. Illustrations bleed off the edge.

**Translation to CSS:**

A page with a persistent margin commentary column. Not OD-006's annotation labels (which are scale indicators). A genuine running commentary: the main column presents the argument, the margin column presents the author's self-critique, historical context, or alternative perspectives. Two parallel text streams that you read simultaneously.

```css
.double-spread {
  display: grid;
  grid-template-columns: 3fr 48px 1fr;
  gap: 0;
  max-width: 1100px;
  margin: 0 auto;
}

.main-argument {
  grid-column: 1;
  padding-right: var(--space-6);
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
}

.margin-gutter {
  grid-column: 2;
  border-left: 1px solid var(--color-border-subtle);
}

.margin-commentary {
  grid-column: 3;
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  line-height: 1.5;
  position: sticky;
  top: var(--space-8);
  max-height: 80vh;
  overflow-y: auto;
}

/* Pull quote that breaks into the margin */
.pull-quote {
  grid-column: 1 / 3;
  font-family: var(--font-display);
  font-size: var(--type-section);
  font-style: italic;
  color: var(--color-primary);
  padding: var(--space-8) 0;
  border-top: 3px solid var(--color-primary);
  border-bottom: 3px solid var(--color-primary);
  margin: var(--space-8) 0;
}
```

The explorations use full-width sections with no persistent margin commentary. OD-006's annotations are labels, not commentary. The editorial tradition of parallel text streams (main text + margin notes) is an unexplored content-form technique.

---

### Game UI: HUD and Minimap

Games provide persistent spatial awareness: a minimap shows where you are in the world, a HUD shows your current state, quest trackers show progress. The player always knows WHERE they are and HOW FAR they've come.

**Translation to CSS:**

A "minimap" component that shows a structural overview of the entire page. As you scroll, your current position is highlighted in the minimap. Not a table of contents (text-based). A VISUAL minimap -- a CSS-only schematic that shows the spatial structure of the page at thumbnail scale.

```css
.minimap {
  position: fixed;
  right: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 100;
}

.minimap-section {
  width: 100%;
  background: var(--color-border-subtle);
  border: 1px solid var(--color-border);
  transition: background var(--transition-standard);
}

/* Heights proportional to actual section lengths */
.minimap-section[data-section="intro"] { height: 12px; }
.minimap-section[data-section="analysis"] { height: 32px; }
.minimap-section[data-section="synthesis"] { height: 24px; }

.minimap-section.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
}
```

AD-006's scroll witness bar (3px fixed at top) provides ONE dimension of spatial awareness (how far through the page). A minimap provides TWO dimensions: how far through, AND what the spatial structure looks like ahead and behind.

---

### Musical Score: Time-as-Position

Musical scores map time to horizontal position. Instruments stack vertically. Dynamics, tempo changes, and structural markers are annotated inline. You can see the ENTIRE temporal structure at once.

**Translation to CSS:**

A page about a temporal process (evolution, debate, historical sequence). A persistent horizontal timeline at the top of the page (using `position: sticky`). As you scroll, events on the timeline light up. But the timeline also shows the DENSITY of events: periods of rapid change have clustered marks, periods of stability have sparse marks. The timeline is a spatial encoding of temporal density.

```css
.score-timeline {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 32px;
  background: var(--color-text);
  display: flex;
  align-items: stretch;
}

.score-beat {
  flex-grow: 1;
  border-right: 1px solid var(--color-border);
  position: relative;
}

/* Dense event periods get more visual weight */
.score-beat.dense::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: var(--color-primary);
}

.score-beat.sparse::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 2px;
  height: 4px;
  background: var(--color-text-secondary);
}

.score-beat.current {
  background: color-mix(in srgb, var(--color-primary) 20%, transparent);
}
```

---

## PART 3: THE BEYOND-AD006 PAGE

### Content-Topology: "The Schism"

**The content:** An article about a scientific community that splits into two incompatible schools of thought, gradually diverges for years, then unexpectedly reconverges when a new discovery bridges them. The structure is: unity -> tension -> split -> parallel evolution -> bridge -> synthesis.

This content demands a spatial form that NO instruction could fully specify. The page must physically SPLIT at a certain point, run as TWO PARALLEL COLUMNS for several sections, then MERGE back into one. The spatial form IS the schism.

### Structural Inventions

**Invention 1: The Splitting Grid**

At the point of the schism, the single-column layout physically divides into two columns using animated grid transitions (scroll-driven).

```css
.pre-schism {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 720px;
  margin: 0 auto;
}

.schism-moment {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 960px;
  margin: 0 auto;
  animation: split linear;
  animation-timeline: view();
  animation-range: entry 25% entry 75%;
}

@keyframes split {
  0% { grid-template-columns: 1fr; gap: 0; }
  100% { grid-template-columns: 1fr var(--space-12) 1fr; gap: var(--space-2); }
}

.parallel-evolution {
  display: grid;
  grid-template-columns: 1fr var(--space-12) 1fr;
  max-width: 960px;
  margin: 0 auto;
}

.school-a { grid-column: 1; border-left: 4px solid var(--accent-blue); }
.school-b { grid-column: 3; border-left: 4px solid var(--accent-coral); }
.the-gap { grid-column: 2; border-left: 1px solid var(--color-border-subtle); }
```

The gap between the columns is a VISIBLE ELEMENT -- a thin vertical line that represents the intellectual distance between the schools. As you scroll through the parallel sections, the gap could narrow (scroll-driven animation) as the schools unknowingly converge.

**Invention 2: Cross-Column Echoes**

During the parallel evolution, certain ideas in School A echo ideas in School B. These are represented as thin horizontal lines that cross the gap -- `position: absolute` elements that span from one column to the other, connecting related paragraphs.

```css
.echo-bridge {
  position: absolute;
  height: 1px;
  background: color-mix(in oklch, var(--color-primary) 30%, transparent);
  left: 0;
  right: 0;
  z-index: 1;
}

/* As the schism progresses, echoes become more frequent and more vivid */
.late-parallel .echo-bridge {
  height: 2px;
  background: color-mix(in oklch, var(--color-primary) 60%, transparent);
}
```

**Invention 3: The Reconvergence Funnel**

When the bridge discovery happens, the two columns merge back together. This is the inverse of the split -- the gap closes, the two columns collapse into one. The content width narrows from 960px to 720px. But now the merged content carries BOTH colors: sentences from School A are tinted blue, sentences from School B are tinted coral, and the new synthesis sentences are in full primary red.

```css
.reconvergence {
  display: grid;
  grid-template-columns: 1fr var(--space-2) 1fr;
  max-width: 960px;
  margin: 0 auto;
  animation: merge linear;
  animation-timeline: view();
  animation-range: entry 0% exit 50%;
}

@keyframes merge {
  0% { grid-template-columns: 1fr var(--space-12) 1fr; gap: var(--space-2); }
  100% { grid-template-columns: 1fr 0px 1fr; gap: 0; }
}

.synthesis-section {
  max-width: 720px;
  margin: 0 auto;
}

.synthesis-section .from-school-a {
  border-left: 2px solid var(--accent-blue);
  padding-left: var(--space-3);
}

.synthesis-section .from-school-b {
  border-left: 2px solid var(--accent-coral);
  padding-left: var(--space-3);
}

.synthesis-section .new-insight {
  border-left: 4px solid var(--color-primary);
  padding-left: var(--space-4);
  font-weight: 500;
}
```

**Invention 4: The Persistent Faultline**

Throughout the entire page, a vertical "faultline" indicator persists at the top of the viewport (like AD-006's axis indicator, but spatial). During the pre-schism sections, it shows a single unbroken line. During the split, it divides into two diverging lines. During reconvergence, the lines merge. This is the page's self-referential structural indicator.

```css
.faultline {
  position: sticky;
  top: 0;
  height: 4px;
  z-index: 100;
  display: flex;
  justify-content: center;
  background: var(--color-background);
}

.faultline-unity {
  width: 2px;
  background: var(--color-primary);
}

.faultline-split {
  display: flex;
  gap: var(--space-8);
}

.faultline-split .line-a {
  width: 2px;
  background: var(--accent-blue);
}

.faultline-split .line-b {
  width: 2px;
  background: var(--accent-coral);
}
```

**Invention 5: Container-Aware Components**

The same callout component appears in both School A and School B columns. Using container queries, the callout adapts to its column: in the narrow column, it renders as a compact aside. If the schools shared a callout topic, the callout could detect its container and render differently -- the SAME information viewed through two different intellectual lenses.

### Visual Maturity Markers

What makes this page "beyond AD-006":

1. **Variable container width as narrative device.** AD-006 uses fixed 1100px. This page varies from 720px (unity) to 960px (split) to 720px (synthesis). The width IS the story.

2. **Scroll-driven layout transitions.** AD-006's layout is static per section. This page's layout CHANGES as you scroll -- the split animates, the gap narrows, the columns merge.

3. **Cross-section spatial relationships.** AD-006's sections are self-contained. This page has elements (echo bridges, faultline indicator) that cross section boundaries.

4. **Color as provenance marker.** AD-006 uses color for accent categories (blue=note, green=tip). This page uses color to track the ORIGIN of ideas through the synthesis -- a semantic use of color that encodes intellectual provenance.

5. **Temporal spatial form.** AD-006's spatial form is spatial (each section has a different grid). This page's spatial form is TEMPORAL -- the layout evolves as the narrative evolves. The same viewport position looks different depending on where you are in the story.

### The Reader Experience

Scrolling through "The Schism" would feel like this:

- **Unity phase (0-15%):** A calm, centered, single-column read. Generous line-height. One voice. One color. One thought stream. The faultline indicator at the top is a single quiet line.

- **Tension phase (15-25%):** The container subtly widens. The line-height subtly tightens. Callouts begin appearing with blue or coral borders -- two perspectives emerging within one column. The faultline indicator begins to shimmer.

- **The Split (25-30%):** As you scroll, the column physically divides. A gap appears and widens. The faultline indicator splits into two diverging lines. This is the moment of spatial drama -- the page breaks apart. The reader FEELS the schism because the spatial form breaks.

- **Parallel Evolution (30-70%):** Two columns, two colors, two intellectual streams. The reader can read either column, skip between them, or read them in parallel. Thin echo bridges occasionally connect related ideas across the gap. The gap narrows as the sections progress -- almost imperceptibly, the schools are converging without knowing it.

- **The Bridge (70-75%):** A discovery section that spans BOTH columns (grid-column: 1 / -1). Full-width. Primary red. The faultline lines merge. The reader gasps.

- **Synthesis (75-100%):** Back to single column, but now carrying the provenance colors. Blue-bordered insights from School A. Coral-bordered insights from School B. Red-bordered new synthesis. The reader can see WHERE each idea came from. The spatial form IS the intellectual genealogy.

### Why This Couldn't Be Produced by Instruction

No prompt could specify "split the page into two columns at exactly the right narrative moment, run parallel streams for exactly the right duration, then merge them when the argument reconverges." The TIMING of the split depends on understanding WHERE in the argument the schism occurs. The WIDTH of the gap depends on understanding HOW DIFFERENT the two schools are. The PLACEMENT of echo bridges depends on understanding WHICH ideas are related across the divide. The NARROWING of the gap depends on understanding the pace of reconvergence.

A prompt could say "use two columns for the middle section." But it could not specify that the columns should ANIMATE into existence, that the gap should narrow as convergence approaches, that echo bridges should connect specific related ideas, or that the synthesis section should carry provenance colors. These decisions require the builder to understand the content's argumentative structure at a level that no brief could convey.

---

## PART 4: THE FRONTIER MAP

### Known Territory (What AD-006 and explorations achieved)

- Named grid areas with semantic zones
- Golden ratio grids (`1.618fr`)
- Asymmetric grid ratios (`3fr 1fr`, `200px 48px 1fr`)
- `position: sticky` for persistent context elements (sidebar, indicator bar)
- `position: absolute` for solid-offset depth effects and compositional overlays
- `writing-mode: vertical-lr` for annotation labels
- CSS-only pattern diagrams (pattern-echo grid)
- Self-referential components (fractal annotations, scroll witness)
- Section-by-section layout variety (Z, F, Bento, Spiral, Choreography)
- Hub-spoke navigation architecture
- Drop caps, transitions, hover effects, keyframe animations

**The ceiling's character:** Static spatial forms that are content-driven. Each section has ONE fixed layout that embodies its content's meaning. The page is a STACK of spatially distinct rooms. Rooms are self-contained. No room references another room's space.

---

### Near Frontier (Achievable with current CSS + deeper engagement)

These require NO new CSS features. They require deeper content engagement and broader spatial thinking.

| Technique | CSS Required | Why It's Beyond Ceiling | Content-Form Potential |
|-----------|-------------|------------------------|----------------------|
| **Variable container width** | `max-width` per section | Explorations use fixed width. Width as narrative variable. | HIGH -- narrow=compression, wide=expansion |
| **Compression-expansion sequences** | `max-width`, `line-height`, `padding` variation | Explorations use uniform density per section. Varying density as pacing tool. | HIGH -- architectural spatial narrative |
| **Persistent margin commentary** | `grid-template-columns: 3fr 48px 1fr`, `position: sticky` | Explorations have annotations but not parallel text streams. | HIGH -- editorial double-spread technique |
| **Threshold zones** | Custom divider components | Explorations use `border-top: 3px solid`. Thresholds are SPACES, not lines. | MEDIUM -- architectural mode transitions |
| **Pull quotes that break columns** | `grid-column: span 2` | Explorations keep content within grid cells. Column-breaking creates drama. | MEDIUM -- editorial tension |
| **Section-specific typography** | Different `font-size`, `line-height`, `letter-spacing` per section | Explorations use uniform typography. Typography as mood. | MEDIUM -- cinematic pacing |
| **Semantic density gradients** | Progressive `padding`, `border-width`, `line-height` changes | Explorations use discrete density zones. Continuous gradients encode depth. | HIGH -- cartographic altitude |

---

### Far Frontier (Requires advanced CSS techniques + deep engagement)

These require modern CSS features (well-supported) combined with deep content understanding.

| Technique | CSS Feature | Why It's Beyond Ceiling | Content-Form Potential |
|-----------|------------|------------------------|----------------------|
| **Container-aware components** | `@container` queries | Components respond to WHERE they are, not just WHAT they are. | HIGH -- spatially self-aware elements |
| **Scroll-driven layout transitions** | `animation-timeline: scroll()` | Layouts that CHANGE as you scroll. Temporal spatial form. | VERY HIGH -- the page evolves with reading |
| **Subgrid hierarchical alignment** | `grid-template-rows: subgrid` | Cross-section visual connections via shared grid lines. | MEDIUM-HIGH -- unified page grid |
| **Non-rectangular sections** | `clip-path: polygon()` | Diagonal boundaries, funneling shapes. Sections that aren't bands. | HIGH -- spatial metaphor (funnels, convergence) |
| **Continuous color semantics** | `color-mix()` | Colors as continuous variables (confidence level -> color intensity). | MEDIUM -- replaces discrete color categories |
| **Provenance-tracking color** | Inherited CSS variables per content-origin | Colors that track WHERE an idea came from through synthesis. | HIGH -- intellectual genealogy |
| **Cross-section spatial connectors** | `position: absolute` spanning sections | Elements that connect content across section boundaries. | HIGH -- pages as SYSTEMS, not stacks |
| **Aspect-ratio semantic sections** | `aspect-ratio` | Sections with proportional meaning (cinematic, portrait, square). | MEDIUM -- spatial character types |
| **Text-flow shaping** | `shape-outside`, `float` | Text that wraps around non-rectangular central elements. | MEDIUM -- content orbiting a core idea |

---

### Far-Far Frontier (Requires cutting-edge CSS + paradigm shift)

These require features with limited browser support AND a fundamental rethinking of what a "page" is.

| Technique | CSS Feature | Paradigm Shift Required | Content-Form Potential |
|-----------|------------|------------------------|----------------------|
| **Anchor-connected annotations** | CSS Anchor Positioning | Annotations that follow their targets. Cross-DOM spatial bonds. | HIGH -- but browser support limited |
| **View-transition navigation** | View Transitions API | Pages as NAVIGABLE SPACES, not scrollable documents. | HIGH -- but requires JS trigger |
| **Dynamic grid rebalancing** | Scroll-driven `grid-template-columns` animation | Columns that change proportion as argument balance shifts. | VERY HIGH -- spatial form tracks argumentative structure |
| **Self-splitting layouts** | Scroll-driven grid + `clip-path` + `animation-timeline` | Pages that physically divide and merge with the narrative. | VERY HIGH -- THE schism page |

---

### Theoretical Frontier (Requires capabilities that don't exist yet)

| Capability | What's Missing | Why It Would Matter |
|-----------|---------------|-------------------|
| **Content-aware layout** | CSS cannot read its own text content to determine layout. | A section about "compression" could automatically use tighter layout. Layout determined by semantic analysis of content. |
| **Reader-state-responsive layout** | CSS cannot know how long the reader has been reading or how fast they scroll. | Sections that expand if the reader is engaged (slow scroll) or compress if they're skimming (fast scroll). Adaptive density based on reading behavior. |
| **Cross-page spatial memory** | CSS has no persistent state across pages. | A series of pages that form a spatial sequence -- entering page 3 from page 2 versus entering from page 4 produces different spatial arrangements. Navigation history as spatial state. |
| **Bidirectional scroll layouts** | Scroll is unidirectional (vertical or horizontal). | A page where scrolling RIGHT explores one dimension and scrolling DOWN explores another. 2D navigation of 2D content spaces. |
| **Computed spatial relationships** | CSS `calc()` can't reference other elements' dimensions dynamically. | A sidebar whose width is always `0.382 * main-column-width` (golden ratio subordinate), computed live. True proportional interdependence. |
| **Semantic type-setting** | CSS cannot distinguish sentence types (claim, evidence, question) for automatic styling. | Automatic differentiation: claims get serif, evidence gets mono, questions get italic. Typography as semantic parser. |

---

## SUMMARY: THE FIVE PARADIGM SHIFTS

The frontier is not about CSS features. It is about five paradigm shifts in how we think about the relationship between content and spatial form:

### 1. FROM STATIC TO TEMPORAL

**Current ceiling:** Each section has ONE fixed layout.
**Beyond:** Layouts that EVOLVE as the reader scrolls. The spatial form is temporal, not just spatial. Scroll-driven animations are the enabling technology.

### 2. FROM SELF-CONTAINED TO INTERCONNECTED

**Current ceiling:** Sections are independent. No section references another's space.
**Beyond:** Elements that cross section boundaries. Echo bridges, shared grid lines, provenance colors that track ideas through synthesis. The page is a SYSTEM, not a stack.

### 3. FROM FIXED TO VARIABLE CONTAINERS

**Current ceiling:** One container width (1100px, 960px) for the whole page.
**Beyond:** Container width as narrative variable. Narrow for compression, wide for expansion, split for divergence, merged for synthesis. The width IS the story.

### 4. FROM COMPONENT TO CONTEXT-AWARE

**Current ceiling:** Components render the same way everywhere.
**Beyond:** Components that adapt to their spatial context (container queries). The same callout renders differently in a narrow sidebar versus a wide main column. The component knows WHERE it is.

### 5. FROM RECTANGULAR TO SHAPED

**Current ceiling:** All sections are full-width rectangular bands.
**Beyond:** Non-rectangular sections (clip-path), text-flow shaping (shape-outside), aspect-ratio constraints. Spatial GEOMETRY as meaning carrier.

The first paradigm shift (static to temporal) is the highest-leverage single change. A page that responds to scroll position with content-meaningful layout changes -- narrowing, splitting, merging, rebalancing -- is qualitatively different from a page that is fixed. It transforms reading from traversing a document into experiencing a spatial narrative.

The second shift (self-contained to interconnected) is the deepest conceptual change. It requires the builder to see the page as a WHOLE SYSTEM where every section's spatial choices affect every other section. This is the shift from "how should I lay out this section?" to "how does this section's layout serve the page's total spatial argument?"

Both shifts require deep content engagement to execute meaningfully. Neither can be specified by instruction. They emerge when the builder understands the content deeply enough to see its spatial implications across the entire page, not just within individual sections.
