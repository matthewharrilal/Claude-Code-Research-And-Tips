# CSS Forensic Comparison: Pipeline vs Exploration Builds

**Date:** 2026-03-03
**Method:** Programmatic extraction from 6 HTML files (3 pipeline, 3 exploration)
**Purpose:** Identify structural CSS techniques that explorations produce but the pipeline does not

---

## Files Analyzed

| Label | File | HTML Lines | CSS Lines |
|-------|------|-----------|-----------|
| **P1** | Yegge/Gas Town v5 `output.html` | 5,857 | 1,927 |
| **P2** | Molly/Panopticon v1 `_build-final.html` | 2,545 | 1,060 |
| **P3** | Molly/Panopticon v2 `_build-final.html` | 2,487 | 1,023 |
| **E1** | OD-005 Spatial `OD-005-spatial.html` | 2,285 | 677 |
| **E2** | OD-006 Creative `OD-006-creative.html` | 2,636 | 1,073 |
| **E3** | CD-006 Pilot `CD-006-pilot-migration.html` | 2,086 | 767 |

**Note:** P1 is significantly larger than all other files (2.5x CSS). This skews some raw counts but ratio analysis normalizes it.

---

## 1. THE KEY METRIC: Structural Ratio

Lines classified as structural (layout-creating) vs textural (appearance-modifying) vs other:

| File | Structural | Textural | Other | **Structural Ratio** | **Textural Ratio** |
|------|-----------|----------|-------|---------------------|-------------------|
| P1: Yegge v5 | 429 | 759 | 231 | **0.302** | 0.535 |
| P2: Molly v1 | 243 | 400 | 134 | **0.313** | 0.515 |
| P3: Molly v2 | 229 | 413 | 113 | **0.303** | 0.547 |
| **Pipeline avg** | **300** | **524** | **159** | **0.306** | **0.532** |
| E1: OD-005 | 155 | 265 | 99 | **0.299** | 0.511 |
| E2: OD-006 | 276 | 398 | 138 | **0.340** | 0.490 |
| E3: CD-006 | 166 | 260 | 109 | **0.310** | 0.486 |
| **Exploration avg** | **199** | **308** | **115** | **0.316** | **0.496** |

**Finding: The structural RATIO is nearly identical (0.306 vs 0.316).** The gap is NOT about proportion of structural vs textural CSS. It is about WHAT the structural CSS does.

---

## 2. STRUCTURAL CSS: What Each Category Produces

### 2a. Grid Layout Usage

| Metric | P1 | P2 | P3 | P avg | E1 | E2 | E3 | E avg | Ratio |
|--------|----|----|----|----|----|----|----|----|-------|
| `display: grid` | 10 | 1 | 1 | 4.0 | 3 | 5 | 4 | 4.0 | 1.0x |
| `grid-template-columns` (total) | 24 | 3 | 3 | 10.0 | 4 | 9 | 8 | 7.0 | 0.7x |
| Unique multi-col configs | 4 | 1 | 2 | 2.3 | 3 | 4 | 4 | 3.7 | **1.6x** |
| `grid-template-areas` | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0.7 | **INF** |
| `grid-template-rows` | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0.7 | **INF** |
| `auto-fit`/`auto-fill` | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0.7 | **INF** |

**Pipeline grid-template-columns inventory (all 3 builds combined):**
- `1fr 1fr` (symmetric two-column) -- **dominant pattern**
- `repeat(3, 1fr)` (symmetric three-column)
- `repeat(4, 1fr)` (symmetric four-column)
- `repeat(2, 1fr)` (symmetric two-column, alternate syntax)
- `120px 1fr` (one asymmetric, in P1 only)

**Exploration grid-template-columns inventory (all 3 builds combined):**
- `1fr 1fr` (symmetric two-column)
- `repeat(3, 1fr)` (symmetric three-column)
- `repeat(4, 1fr)` (symmetric four-column)
- `repeat(2, 1fr)` (symmetric two-column)
- `3fr 1fr` (asymmetric content/sidebar)
- `200px 48px 1fr` (three-zone asymmetric with fixed widths)
- `1.618fr 1fr` (golden ratio proportional)
- `repeat(auto-fit, minmax(280px, 1fr))` (responsive auto-fit)
- `repeat(auto-fit, minmax(200px, 1fr))` (responsive auto-fit)

**Key gap: Pipeline grids are SYMMETRIC AND UNIFORM. Explorations use asymmetric ratios, golden ratio, fixed+fluid hybrids, auto-fit responsive grids, and named grid areas.**

### 2b. Positioned Composition (Layered Layout)

| Metric | P1 | P2 | P3 | P avg | E1 | E2 | E3 | E avg | Ratio |
|--------|----|----|----|----|----|----|----|----|-------|
| `position: relative` | 0 | 0 | 0 | **0.0** | 2 | 6 | 4 | **4.0** | **INF** |
| `position: absolute` | 1 | 1 | 1 | **1.0** | 2 | 7 | 2 | **3.7** | **3.7x** |
| `position: sticky` | 0 | 0 | 0 | **0.0** | 1 | 3 | 0 | **1.3** | **INF** |
| `position: fixed` | 0 | 0 | 0 | **0.0** | 1 | 0 | 0 | **0.3** | **INF** |

**Pipeline positioning:** Each file uses exactly 1 `position: absolute` -- the skip-link. Zero `position: relative`. Zero `position: sticky`. The pipeline produces ZERO positioned composition.

**Exploration positioning examples:**
- E1: sidebar panel with `position: sticky`, territory tiles with `relative`/`absolute` for solid-offset depth effect
- E2: 7 absolute elements including `::after` overlays on tiles, sticky TOC with scroll progress, code block labels positioned absolutely within relative parents
- E3: relative containers with absolute pseudo-element bullets, stratum layers with relative positioning

**Key gap: Pipeline builds exist in a flat z-plane. Explorations create LAYERED COMPOSITIONS with overlapping elements, sticky navigation, and decorative overlays.**

### 2c. Non-Vertical Reading Flow

| Metric | P1 | P2 | P3 | P avg | E1 | E2 | E3 | E avg | Ratio |
|--------|----|----|----|----|----|----|----|----|-------|
| `writing-mode` | 0 | 0 | 0 | **0.0** | 1 | 1 | 0 | **0.7** | **INF** |
| `clip-path` | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | = |
| `float` | 0 | 0 | 0 | **0.0** | 0 | 1 | 1 | **0.7** | **INF** |

**E1 uses:** `writing-mode: vertical-rl` (vertical text along spoke edges)
**E2 uses:** `writing-mode: vertical-lr` (rotated labels)

### 2d. Flex Layout

| Metric | P1 | P2 | P3 | P avg | E1 | E2 | E3 | E avg | Ratio |
|--------|----|----|----|----|----|----|----|----|-------|
| `display: flex` | 17 | 5 | 3 | 8.3 | 8 | 13 | 6 | 9.0 | 1.1x |
| `flex-direction: column` | 6 | 3 | 0 | 3.0 | 2 | 2 | 4 | 2.7 | 0.9x |
| `flex-direction: row` (explicit) | 0 | 0 | 0 | 0.0 | 0 | 0 | 0 | 0.0 | = |

Flex usage is comparable. Both use flex for inline arrangements (metadata rows, tag lists, footers). Not a significant gap.

---

## 3. TEXTURAL CSS: Dynamics and Layering

### 3a. Animation and Interaction

| Metric | P1 | P2 | P3 | P avg | E1 | E2 | E3 | E avg | Ratio |
|--------|----|----|----|----|----|----|----|----|-------|
| `transition` | 0 | 2 | 1 | **1.0** | 5 | 8 | 5 | **6.0** | **6.0x** |
| `@keyframes` | 0 | 0 | 0 | **0.0** | 1 | 2 | 0 | **1.0** | **INF** |
| `animation` | 1 | 1 | 0 | 0.7 | 4 | 5 | 1 | 3.3 | 4.7x |
| `:hover` rules | 2 | 0 | 1 | **1.0** | 5 | 3 | 2 | **3.3** | **3.3x** |
| `opacity` (partial values) | 0 | 0 | 0 | **0.0** | 0 | 2 | 0 | **0.7** | **INF** |
| `transform` | 35 | 15 | 12 | 20.7 | 20 | 27 | 11 | 19.3 | 0.9x |

**Pipeline animation:** Near zero. P1 has 1 animation (scroll reveal), 0 transitions, 0 keyframes. P2 has 2 transitions. P3 has 1 transition. No hover effects to speak of.

**Exploration animation:** E2 has 8 transitions, 2 keyframe animations, 3 hover rules. E1 has an `arrive` animation. Hover effects on territory tiles, code blocks, TOC items.

**Key gap: Pipeline pages are STATIC. Explorations use transitions, keyframe animations, and hover states to create responsive, living pages.**

Note: Pipeline `transform` count is high but these are all responsive-collapse transforms (media query overrides), NOT visual-effect transforms. Explorations use transforms for `rotate`, `scale`, and `translate` effects.

### 3b. Transform Types

| Transform Type | Pipeline | Exploration |
|---------------|----------|-------------|
| `rotate` | 0 | E2 |
| `scale` | 0 | E2 |
| `translate` | 0 | E1, E2 |
| `skew` | 0 | 0 |

Pipeline transforms are all `translateY` for scroll-reveal mechanics, not visual composition.

### 3c. Visual Depth

| Metric | P1 | P2 | P3 | P avg | E1 | E2 | E3 | E avg | Ratio |
|--------|----|----|----|----|----|----|----|----|-------|
| `box-shadow` | 1 | 2 | 2 | **1.7** | 3 | 8 | 1 | **4.0** | **2.4x** |
| `opacity` | 0 | 0 | 0 | **0.0** | 5 | 8 | 0 | **4.3** | **INF** |
| `backdrop-filter` | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | = |

---

## 4. SECTION SKELETON ANALYSIS

### 4a. Section-Level Layout (The Smoking Gun)

**Pipeline section layouts:**

| File | Sections | Distinct Layouts |
|------|----------|-----------------|
| P1: Yegge v5 | 17 | **1** (block vertical) |
| P2: Molly v1 | 7 | **1** (block vertical) |
| P3: Molly v2 | 6 | **1** (block vertical) |

**Exploration section layouts:**

| File | Sections | Distinct Layouts |
|------|----------|-----------------|
| E1: OD-005 | 8 | **1** (block vertical)* |
| E2: OD-006 | 6 | **1** (block vertical)* |
| E3: CD-006 | 19 | **1** (block vertical)* |

*At the `<section>` tag level, ALL files use block layout. The structural differentiation happens INSIDE sections, not at the section level itself. This is an important correction to the hypothesis.

### 4b. Inner-Section Layout Diversity (WHERE the real gap lives)

**Pipeline inner layouts:**

| File | Grid Rules | Flex Rules | Positioned | Skeleton Types |
|------|-----------|------------|-----------|---------------|
| P1 | 10 grids (4 unique configs) | 17 flex | 1 positioned | **8 types** |
| P2 | 1 grid (1 unique config) | 5 flex | 1 positioned | **5 types** |
| P3 | 1 grid (2 unique configs) | 3 flex | 1 positioned | **5 types** |

**Exploration inner layouts:**

| File | Grid Rules | Flex Rules | Positioned | Skeleton Types |
|------|-----------|------------|-----------|---------------|
| E1 | 3 grids (3 unique configs) | 8 flex | 6 positioned | **7 types** |
| E2 | 5 grids (4 unique configs) | 13 flex | 16 positioned | **8 types** |
| E3 | 4 grids (4 unique configs) | 6 flex | 6 positioned | **9 types** |

**Pipeline skeleton type inventory:**
- `single_column_stack` (dominant -- 12 in P1, 2 in P2, 1 in P3)
- `two_column_grid` (symmetric `1fr 1fr`)
- `three_column_grid` (`repeat(3, 1fr)`)
- `four_column_grid` (`repeat(4, 1fr)`)
- `flex_row` (inline metadata, tags, footers)
- `flex_column` (table of contents, lists)
- `asymmetric_grid` (1 instance in P1: `120px 1fr`)
- `positioned_overlay` (skip-link only)

**Exploration skeleton type inventory (ADDITIONAL to pipeline):**
- `auto_fit_grid` (responsive `minmax`)
- `named_areas` (`grid-template-areas` with semantic zones)
- `golden_ratio` (`1.618fr 1fr`)
- `float_layout` (text wrapping)
- `positioned_overlay` (decorative `::after`, depth effects, sticky TOC)
- `asymmetric_grid` (multiple: `3fr 1fr`, `200px 48px 1fr`)
- `sticky` navigation and persistent elements

---

## 5. SEMANTIC HTML GAPS

| Element | Pipeline (3 files) | Exploration (3 files) | Gap |
|---------|-------------------|----------------------|-----|
| `<aside>` | 0 | 7 | **ABSENT** |
| `<nav>` | 2 | 9 | **WEAK (4.5x)** |
| `<blockquote>` | 45 | 0 | Pipeline dominant |
| `<details>` | 4 | 2 | Comparable |
| `<section>` | 30 | 33 | Comparable |

Pipeline uses `<blockquote>` heavily (pull quotes in essay content) but never uses `<aside>` for secondary content panels. Explorations use `<aside>` for sidebar reference panels and supplementary information.

---

## 6. CSS FEATURE USAGE (The Absent Vocabulary)

### Techniques ABSENT from all 3 pipeline builds, PRESENT in explorations:

| Technique | Pipeline Count | Exploration Count | Significance |
|-----------|---------------|-------------------|-------------|
| `position: relative` | 0 | 12 | **CRITICAL** -- enables layered composition |
| `position: sticky` | 0 | 4 | **HIGH** -- persistent navigation/context |
| `opacity` (as texture) | 0 | 13 | **HIGH** -- transparency layering |
| `@keyframes` | 0 | 3 | **MEDIUM** -- entrance/attention animations |
| `grid-template-areas` | 0 | 2 | **MEDIUM** -- semantic named layouts |
| `grid-template-rows` | 0 | 2 | **LOW** -- explicit row sizing |
| `auto-fit`/`auto-fill` | 0 | 2 | **MEDIUM** -- responsive intrinsic grids |
| `writing-mode` | 0 | 2 | **MEDIUM** -- vertical text composition |
| `float` | 0 | 2 | **LOW** -- text wrapping around elements |
| `min()`/`max()`/`clamp()` | 0 | 2 | **MEDIUM** -- fluid responsive values |
| `golden ratio (1.618)` | 0 | 1 | **MEDIUM** -- proportional harmony |
| `overflow: hidden` (for clip) | 0 | 6 | **HIGH** -- containing positioned elements |
| `display: inline-flex` | 0 | 1 | **LOW** -- inline flex composition |
| `aspect-ratio` | 0 | 1 | **LOW** -- constrained proportions |
| `position: fixed` | 0 | 1 | **LOW** -- viewport-locked elements |

### Techniques WEAK in pipeline (present but at <50% of exploration rate):

| Technique | Pipeline Count | Exploration Count | Ratio |
|-----------|---------------|-------------------|-------|
| `transition` | 3 | 18 | **6.0x** |
| `position: absolute` | 3 | 11 | **3.7x** |
| `:hover` rules | 3 | 10 | **3.3x** |
| `box-shadow` | 5 | 12 | **2.4x** |

---

## 7. SUMMARY AVERAGES

| Metric | Pipeline Avg | Exploration Avg | Ratio |
|--------|-------------|----------------|-------|
| `display: grid` | 4.0 | 4.0 | **1.0x** |
| `display: flex` | 8.3 | 9.0 | 1.1x |
| Unique grid configs | 2.3 | 3.7 | **1.6x** |
| `position: relative` | 0.0 | 4.0 | **INF** |
| `position: absolute` | 1.0 | 3.7 | **3.7x** |
| `position: sticky` | 0.0 | 1.3 | **INF** |
| `opacity` uses | 0.0 | 4.3 | **INF** |
| `transition` | 1.0 | 6.0 | **6.0x** |
| `@keyframes` | 0.0 | 1.0 | **INF** |
| `:hover` rules | 1.0 | 3.3 | **3.3x** |
| `::before`/`::after` | 4.7 | 5.0 | 1.1x |
| `writing-mode` | 0.0 | 0.7 | **INF** |
| `grid-template-areas` | 0.0 | 0.7 | **INF** |

---

## 8. DIAGNOSIS

### What the pipeline DOES produce:
1. **Symmetric grids** (`1fr 1fr`, `repeat(3, 1fr)`, `repeat(4, 1fr)`) for card layouts
2. **Flex rows** for inline metadata, tags, navigation
3. **Flex columns** for stacked lists (TOC, etc.)
4. **Single-column block stacking** as the dominant section pattern
5. **Extensive textural CSS** -- backgrounds, borders, font sizes, letter-spacing, margins, padding
6. **CSS custom properties** (variables) used heavily for theming
7. **Responsive collapse** via media queries (grids collapse to 1fr at mobile breakpoints)

### What the pipeline DOES NOT produce:

**CATEGORY 1: Positioned Composition (The biggest gap)**
- `position: relative` / `position: absolute` pairs for layered depth
- `position: sticky` for persistent context elements
- `overflow: hidden` to contain positioned children
- `opacity` as a compositional tool (semi-transparent overlays)
- `z-index` layering for visual depth

The pipeline builds are **flat**. Every element sits in its natural document flow. There is no z-axis composition. No element overlaps another. No element persists across scroll positions. This is the single most impactful structural absence.

**CATEGORY 2: Grid Composition Vocabulary (Monotone layout)**
- Asymmetric grid ratios (`3fr 1fr`, `200px 48px 1fr`)
- Golden ratio grids (`1.618fr 1fr`)
- Auto-fit responsive grids (`repeat(auto-fit, minmax(280px, 1fr))`)
- Named grid areas (`grid-template-areas: "doctrine references"`)
- Explicit row definitions (`grid-template-rows`)

Pipeline grids are all symmetric equal-width columns. Every grid looks like every other grid. The exploration grids create distinct spatial relationships -- wide content areas with narrow sidebars, three-zone layouts with fixed markers, proportionally harmonious splits.

**CATEGORY 3: Dynamic Response (Dead pages)**
- `transition` for smooth state changes (6x gap)
- `@keyframes` for entrance animations
- `:hover` effects for interactive feedback (3.3x gap)
- Visual transforms (`rotate`, `scale`, `translate` for effect, not responsive collapse)

Pipeline pages are static HTML documents. They do not respond to user interaction. Nothing moves, nothing transitions, nothing changes on hover. The explorations feel alive.

**CATEGORY 4: Spatial Invention (Missing techniques)**
- `writing-mode` for vertical text
- `float` for text-wrapping composition
- `min()`/`max()`/`clamp()` for fluid values
- `aspect-ratio` for proportional constraints

These are the techniques that create truly novel spatial compositions that readers have never seen before.

### The Root Cause Pattern:

The pipeline produces pages that are **structurally homogeneous**: every section is a block-stacking container with internal grids that are symmetric and identical in character. The CSS budget is overwhelmingly spent on TEXTURE (colors, fonts, spacing, borders) rather than on SPATIAL INVENTION (novel layouts, layered composition, persistent elements, responsive intrinsic sizing).

This is not a ratio problem (both pipeline and exploration are ~30% structural). It is a **vocabulary problem**: the pipeline's structural CSS uses 3-4 grid patterns and 1 positioning pattern, while explorations use 8-9 grid patterns and 4-5 positioning patterns. Same quantity of structural CSS, radically different diversity.

### The 15 Absent Techniques (Ranked by Impact):

1. `position: relative` + `position: absolute` composition (layered depth)
2. `position: sticky` (persistent context)
3. `opacity` as compositional texture
4. `transition` on state changes
5. `:hover` interactive effects
6. `auto-fit`/`auto-fill` grids (intrinsic responsive)
7. Asymmetric grid ratios (spatial hierarchy)
8. `@keyframes` animations (entrance, attention)
9. `grid-template-areas` (semantic layout zones)
10. `overflow: hidden` (containment for positioned children)
11. `writing-mode` (vertical text composition)
12. `min()`/`max()`/`clamp()` (fluid values)
13. `box-shadow` depth (at sufficient density)
14. Golden ratio proportions
15. `float` for text-wrapping composition

If the pipeline were taught these 15 techniques, the structural vocabulary gap would close.
