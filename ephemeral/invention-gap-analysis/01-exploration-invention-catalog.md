# Exploration Invention Catalog

**Purpose:** Catalog every structural/spatial invention across all explorations that doesn't exist in the current pipeline mechanism catalog (`compositional-core/grammar/mechanisms.md`).

**Method:** Each exploration's CSS `<style>` block and HTML structure analyzed against the mechanism catalog (20 cataloged mechanisms + 2 component patterns + transition grammar).

**Mechanism Catalog Baseline (what IS cataloged):**
- Spatial (4): Dense/Sparse Alternation, Spacing Compression, Width Variation, Bento Grid
- Hierarchy (2): Border-Weight Gradient, Typographic Scale Jumping
- Component (5): Color Encoding, Inline Code Styling, Task Checklist, Version Badge, Decision Matrix
- Depth/Emphasis (3): Solid Offset Depth, Zone Background Differentiation, Drop Cap
- Structure (7+): Dark Header + 3px Border, Footer Mirror, Code Block, Data Table, Section Divider, Reasoning Columns, File Tree Indentation, Scroll Witness / Sticky TOC
- Component Patterns (2): 2-Zone DNA, Stratum Boundary
- Transition Grammar: SMOOTH / BRIDGE / BREATHING

---

## Category 1: Spatial Organization Inventions

### 1.1 — Hub-Spoke Territory Grid (OD-005)
- **CSS Technique:** `display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` with solid-offset `::after` pseudo-elements on each tile. Tiles are links (`<a>`) with `border: 3px solid`, hover via `border-color` + `background-color` transition (no transform).
- **In Mechanism Catalog?** NO. Bento Grid (#15) is cataloged but describes variable-span cells encoding importance. Hub-spoke is different: equal-weight territory tiles as navigation targets, not importance-encoded cells.
- **What question generated it?** "What if documentation was organized spatially — as a hub-and-spoke map where users navigate between territory zones — rather than linearly?" (OD-005 hypothesis)
- **Spatial organization:** Creates a reading path change from linear scroll to spatial jump: reader departs from sparse hub map into dense spoke content, then returns to sparse hub. WAVE oscillation.
- **Pipeline builder producible?** NO. Current pipeline has no instruction to create navigational tile grids where tiles are clickable spatial targets. The "bento grid" instruction produces importance-encoded cells, not hub-spoke navigation.

### 1.2 — Spoke Content Grid with Named Areas (OD-005)
- **CSS Technique:** `display: grid; grid-template-columns: 3fr 1fr; grid-template-areas: "doctrine references"`. Content area + sticky sidebar with `position: sticky; top: 24px`.
- **In Mechanism Catalog?** NO. Named grid areas are not mentioned in the catalog. The sticky sidebar is related to Scroll Witness (#8) but structurally different — it's a reference panel, not a progress tracker.
- **What question generated it?** Content within each spoke needed a magazine-layout (EXT-SPAT-003: 7-column magazine grid), with doctrine/reference zones.
- **Spatial organization:** Creates a content+reference split within each spoke, allowing readers to see context while reading primary content.
- **Pipeline builder producible?** NO. No instruction generates named grid areas or content+sidebar layouts.

### 1.3 — Z-Sweep with Golden Ratio Columns (CD-005)
- **CSS Technique:** `display: grid; grid-template-areas: "z-term z-def"; grid-template-columns: 1fr 1.618fr`. Alternating rows reverse the grid areas: `.z-sweep--reverse { grid-template-areas: "z-def z-term"; grid-template-columns: 1.618fr 1fr; }`.
- **In Mechanism Catalog?** NO. Z-pattern is referenced in research (AD-F-001) but not in the mechanism catalog. The golden ratio column proportion (1:1.618) is entirely uncataloged.
- **What question generated it?** "Can Z-pattern diagonal sweeps create overview rhythm?" — AD-F-001 Z-sweep PULSE equivalence. The content logic is term/definition pairs where the diagonal eye movement mirrors conceptual pairing.
- **Spatial organization:** Creates diagonal reading path: left-narrow to right-wide, then right-wide to left-narrow, alternating. Reader's eye traces a Z across the page.
- **Pipeline builder producible?** NO. Zero Z-pattern instructions exist in the pipeline.

### 1.4 — Spiral Layout with Named Grid Areas (AD-006)
- **CSS Technique:** `display: grid; grid-template-areas: "spiral-wide spiral-wide spiral-wide" / "spiral-medium spiral-medium spiral-narrow" / "spiral-deep spiral-deep spiral-narrow"`. Decreasing cell sizes encode narrowing focus.
- **In Mechanism Catalog?** NO. Spiral is not in the catalog. Named grid areas for semantic zones are uncataloged.
- **What question generated it?** Golden-ratio nesting spirals inward toward core insight — content narrows from broad overview to deep detail.
- **Spatial organization:** Content spirals from wide overview cells to narrow deep-dive cells, physically encoding the journey from surface to depth.
- **Pipeline builder producible?** NO. No spiral layout instruction exists.

### 1.5 — Archipelago Map with Complexity-Coded Tiles (OD-003)
- **CSS Technique:** Grid of `.archipelago-tile` elements with `border-color` encoding difficulty level: `--beginner: accent-green`, `--intermediate: color-primary`, `--advanced: accent-purple`. Header-embedded visual overview.
- **In Mechanism Catalog?** PARTIALLY. Color Encoding (#9) is cataloged, but its use as a NAVIGATIONAL MAP (not just callout accent) is not. The map-as-header pattern is uncataloged.
- **What question generated it?** Task-based documentation needs an overview map showing task clusters, difficulty, and dependencies before the reader commits.
- **Spatial organization:** Map → territory pattern (like OD-005 hub-spoke but for task difficulty rather than topic zones).
- **Pipeline builder producible?** NO. Pipeline has no "task archipelago map" or difficulty-coded navigation grid instruction.

---

## Category 2: Self-Aware Components

### 2.1 — Scroll Witness with @property Progress Tracking (OD-006)
- **CSS Technique:** `@property --progress { syntax: "<number>"; inherits: true; initial-value: 0; }` + `@keyframes track-progress { from { --progress: 0; } to { --progress: 1; } }` + `animation: track-progress linear both; animation-timeline: view(block 95% 5%)`. TOC markers use `transform: scaleY(var(--progress, 0))` to fill as sections scroll.
- **In Mechanism Catalog?** PARTIALLY. Scroll Witness (#8) is cataloged as "Position-sticky navigation that tracks scroll position. Requires JavaScript." OD-006 implements it CSS-ONLY via `@property` and `animation-timeline: view()` — a fundamentally different technique that is NOT in the catalog.
- **What question generated it?** EXT-CREATIVE-003 (THE SCROLL WITNESS): Can CSS-only progress indicators track section reading progress? The page WITNESSES its own consumption.
- **What spatial organization it creates:** Self-referential — the page reflects the reader's position back to them. Navigation becomes real-time feedback.
- **Pipeline builder producible?** NO. `@property` and `animation-timeline` are not mentioned in any pipeline instructions. Builders would use JS or omit entirely.

### 2.2 — Fractal Annotation Layer with writing-mode (OD-006)
- **CSS Technique:** `writing-mode: vertical-lr; text-orientation: mixed; transform: rotate(180deg)`. Sticky sidebar (`position: sticky; height: 100vh`) with vertical monospace annotations labeling the current fractal scale (PAGE / SECTION / COMPONENT / CHARACTER).
- **In Mechanism Catalog?** NO. `writing-mode` is entirely absent from the catalog. Vertical text as architectural marginalia is uncataloged.
- **What question generated it?** EXT-CREATIVE-010 (FRACTAL ANNOTATION LAYER): "Can FRACTAL be made visible?" — making the page's self-similar structure visually explicit through editorial marginalia.
- **What spatial organization it creates:** Self-referential — the page annotates its own architecture. Reader can see WHICH fractal scale they're currently in.
- **Pipeline builder producible?** NO. `writing-mode` is not in any pipeline instruction. Vertical text is entirely outside the pipeline vocabulary.

### 2.3 — Geological Column Minimap (OD-004)
- **CSS Technique:** Small horizontal bars in the dark header with height encoding confidence level: `height: 4px` (Established), `height: 3px` (Probable), `height: 2px` (Speculative), `height: 1px` (Open). Each bar colored to match its stratum's accent color. Miniature overview of the full page structure.
- **In Mechanism Catalog?** NO. The border-weight gradient (#1) is cataloged, but its use as a MINIMAP (overview representation in the header) is not. This is a self-aware component that summarizes the page's own structure.
- **What question generated it?** EXT-CONF-015 (Dark Header as Geological Survey Map): The header should contain a miniature version of the page's confidence stratification.
- **What spatial organization it creates:** Self-referential — header previews the full page architecture. Reader knows what strata await.
- **Pipeline builder producible?** NO. No pipeline instruction creates minimap components in headers.

### 2.4 — Visual Index / Pattern Echo Grid (OD-006, AD-006)
- **CSS Technique:** Grid of small cells (`.pattern-echo`) each containing a miniature CSS-only visual signature of the pattern it represents. e.g., `.echo-spiral::before` creates a spiral-like nested border pattern. Used in OD-006 as "specimen-sheet grid overview" (EXT-CREATIVE-009 THE VISUAL INDEX).
- **In Mechanism Catalog?** NO. Self-referential visual indexes are entirely uncataloged.
- **What question generated it?** EXT-CREATIVE-009 (THE VISUAL INDEX) + EXT-CREATIVE-013 (PATTERN ECHO): Can the page show miniature visual signatures of each section's pattern, like a specimen sheet?
- **What spatial organization it creates:** Self-referential — the page provides an at-a-glance visual inventory of its own structural patterns.
- **Pipeline builder producible?** NO. CSS-only miniature visual signatures require invention per page. No instruction for this exists.

### 2.5 — Recursive Table of Contents with Serif/Sans/Mono Cascade (OD-006)
- **CSS Technique:** 3-level TOC where each nesting level uses a different font: Level 1 = serif (Instrument Serif), Level 2 = sans (Inter), Level 3 = mono (JetBrains Mono). Typography itself signals depth. (EXT-CREATIVE-012)
- **In Mechanism Catalog?** NO. TOC as a component is not in the catalog, and the font-cascade-as-hierarchy technique is entirely novel.
- **What question generated it?** EXT-CREATIVE-012 (RECURSIVE TABLE OF CONTENTS): Can a TOC be fractal — its own 3-level structure mirroring the page's nested structure, with typography encoding depth?
- **Pipeline builder producible?** NO. No instruction pairs font families with TOC nesting levels.

### 2.6 — Confidence Switcher (OD-004)
- **CSS Technique:** Horizontal segmented control (`.confidence-switcher`) with options like "Facts Only" / "Full Analysis" / "Everything". Active state via `border-bottom: 3px solid var(--color-primary)`. Visual filter control (no JS filtering in v1, visual indicator only).
- **In Mechanism Catalog?** NO. Interactive filter controls are not in the catalog.
- **What question generated it?** EXT-CONF-012 (Stripe Docs): Confidence-level switcher lets readers choose how deep they want to go.
- **Pipeline builder producible?** NO. No instruction generates filter/switcher controls.

### 2.7 — Chapter Progress Dots (OD-001)
- **CSS Technique:** Row of 8px square dots (`.progress-dot`) with states: `--active` (primary color), `--complete` (text color), default (border color). Adjacent to chapter labels. Soul Piece 5: square dots, no border-radius.
- **In Mechanism Catalog?** NO. Progress indicators as discrete square dots are not in the catalog. Related to Stratum Boundary but more specific.
- **Pipeline builder producible?** UNLIKELY. While simple CSS, no instruction generates per-chapter progress indicators.

---

## Category 3: Advanced CSS Inventions

### 3.1 — CSS Scroll-Driven Animations (animation-timeline: view()) (OD-001, OD-004, OD-005, OD-006, all AD, all CD)
- **CSS Technique:** `animation-timeline: view(); animation-range: entry 10% entry 40%` on `.reveal` elements. Staggered variants via different `animation-range` values (`.reveal-delay-1`, `.reveal-delay-2`). With `@supports not (animation-timeline: view())` fallback and `@media (prefers-reduced-motion: reduce)` safety.
- **In Mechanism Catalog?** NO. `animation-timeline` is not mentioned. The catalog describes no scroll-driven effects.
- **What question generated it?** EXT-CREATIVE-004 (THE ARRIVING WISDOM): Elements should fade+translate into viewport as the reader scrolls, creating a sense of content "arriving" rather than being static.
- **Pipeline builder producible?** NO. `animation-timeline` is not in any pipeline vocabulary.

### 3.2 — @property for CSS-Only Progress (OD-006)
- **CSS Technique:** `@property --progress` with `syntax: "<number>"` enables CSS-only interpolation of custom properties, used to drive scroll-witness progress bars without JavaScript.
- **In Mechanism Catalog?** NO. `@property` is entirely absent from the catalog.
- **What question generated it?** CSS-only scroll witness needs to interpolate a custom property value based on scroll position.
- **Pipeline builder producible?** NO. `@property` is not in any pipeline instruction.

### 3.3 — Diagonal clip-path as Direction Signal (AD-005)
- **CSS Technique:** `clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%)` for descending diagonals, `clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%)` for ascending. Used as TRANSITION elements between content sections, signaling direction change and serving as density transition markers simultaneously.
- **In Mechanism Catalog?** NO. `clip-path` is entirely absent from the catalog. Diagonal visual elements are uncataloged.
- **What question generated it?** R4-113 (clip-path), R4-128 (clip-path approach), EXT-AXIS-CH-002 (Diagonal clip-path): Can diagonal elements signal both direction change AND density transition simultaneously? This is the "dual-signal" property — one CSS technique encoding two meanings.
- **Pipeline builder producible?** NO. `clip-path` is not in any pipeline vocabulary.

### 3.4 — Collapsing Sticky Section Headers (OD-006)
- **CSS Technique:** `position: sticky; top: 0; z-index: 50` on `.section-header` with `border-bottom: 3px solid transparent` transitioning to `border-bottom-color: var(--color-primary)` when scrolled (`.scrolled` class via JS).
- **In Mechanism Catalog?** PARTIALLY. Scroll Witness (#8) mentions `position: sticky` but for TOC, not for content section headers that persist as organizational context while scrolling.
- **What question generated it?** EXT-CREATIVE-008 (THE COLLAPSING HEADER): Sticky headers carry the organizational mode indicator so the reader always knows what section type they're in.
- **Pipeline builder producible?** NO. No instruction generates sticky section headers with scroll-state changes.

### 3.5 — Three-Column Page Layout with Scroll Witness + Fractal Annotations (OD-006)
- **CSS Technique:** `display: grid; grid-template-columns: 200px 48px 1fr` creating a 3-column layout: fractal annotations | scroll witness | main content. With responsive collapse at 1024px.
- **In Mechanism Catalog?** NO. Full-page grid layouts with persistent sidebars are uncataloged. The catalog describes individual mechanisms, not page-level layout architectures.
- **What question generated it?** OD-006 needed both scroll witness AND fractal annotations visible simultaneously alongside content.
- **Pipeline builder producible?** NO. No instruction generates multi-column page layouts with persistent sidebar elements.

---

## Category 4: Content-as-Form Inventions

### 4.1 — Confidence Strata with Inverse Density-Confidence Correlation (OD-004)
- **CSS Technique:** Four `.stratum` variants with decreasing border-left width (4px → 3px → 2px → 1px), decreasing padding, decreasing font-size, decreasing line-height, and shifting background colors. `--stratum-established-padding: 40px` down to `--stratum-open-padding: 16px`. The CSS VALUES themselves encode the content's certainty level.
- **In Mechanism Catalog?** PARTIALLY. Border-Weight Gradient (#1) and Spacing Compression (#4) are both cataloged individually, but their COMPOUND deployment as a unified confidence-encoding system — where ALL channels (border, spacing, typography, background) shift simultaneously per stratum — is not.
- **What question generated it?** "Can documentation be organized by confidence level — from established facts to open questions — creating natural geological stratification where density correlates inversely with confidence?" (OD-004 hypothesis). R1-001: certain=sparse, uncertain=dense.
- **Pipeline builder producible?** PARTIALLY. Individual mechanisms could be applied, but the compound multi-channel confidence encoding would require specific instruction.

### 4.2 — Q&A Conversational Pairs with TIDAL Width Variation (OD-001)
- **CSS Technique:** `.question { max-width: 60%; margin-left: 5%; }` vs `.answer { width: 100%; border-left: 4px solid }`. Question is narrow+indented, answer is full-width+bordered. TIDAL density: narrow = sparse, wide = dense. Background differentiation: `--color-zone-sparse` for questions, `--color-zone-dense` for answers.
- **In Mechanism Catalog?** PARTIALLY. Width Variation (#6) is cataloged, but its specific deployment as Q/A conversational pairs where width signals "who is speaking" is not. The Q&A organizational structure is entirely uncataloged.
- **What question generated it?** "What if documentation was organized as a conversation?" (OD-001 hypothesis). Width encodes the speaker (narrow question = human asking, wide answer = system responding).
- **Pipeline builder producible?** PARTIALLY. Width Variation is cataloged but the conversational Q/A structure driving it is not instructed.

### 4.3 — Narrative Act Structure (OD-002)
- **CSS Technique:** 3-act CRESCENDO arc where each act has progressively increasing density: Act 1 = sparse overview, Act 2 = moderate detail, Act 3 = dense revelation. Bridge sections between acts use BREATHING transitions.
- **In Mechanism Catalog?** PARTIALLY. Dense/Sparse Alternation (#5) and transition grammar (SMOOTH/BRIDGE/BREATHING) are cataloged, but the 3-act narrative arc as a structural pattern is not.
- **What question generated it?** "What if documentation followed a story arc — setup, confrontation, resolution — with density increasing to match narrative tension?"
- **Pipeline builder producible?** UNLIKELY. Tension-composition derives metaphors, but the specific 3-act arc with CRESCENDO density is not an available structural template.

### 4.4 — Task Islands as Collapsible Details (OD-003)
- **CSS Technique:** `<details>` elements styled as `.task-island` with `border-left: 4px solid` and difficulty-coded colors. Collapsible content with custom summary markers. Islands are discrete, self-contained task units with progressive complexity coding.
- **In Mechanism Catalog?** PARTIALLY. Task Checklist is cataloged as a component, but task islands as collapsible, difficulty-coded, self-contained units are not.
- **What question generated it?** "What if documentation was organized as discrete task islands — each self-contained, each a complete learning unit that can be tackled independently?"
- **Pipeline builder producible?** UNLIKELY. No instruction generates collapsible task islands with difficulty coding.

### 4.5 — Stratum Boundary with Evidence DNA (OD-004)
- **CSS Technique:** 3-component boundary: 48px whitespace + 3px horizontal rule + mono label. Plus `.evidence-dna` metadata strip showing source counts, confidence basis, and crux markers per stratum. Each stratum carries its own epistemological fingerprint.
- **In Mechanism Catalog?** PARTIALLY. Stratum Boundary is listed as a "Component Pattern" but the Evidence DNA (epistemic metadata strip) is not cataloged.
- **What question generated it?** EXT-CONF-011 (EA Forum Epistemic): Each stratum should carry its evidence DNA — source count, confidence basis, key crux — so readers can assess reliability at a glance.
- **Pipeline builder producible?** NO. Evidence DNA requires content-specific epistemological analysis that no pipeline instruction generates.

### 4.6 — Bookend Front/Back Structure (OD-003)
- **CSS Technique:** Opening "bookend front" (`.bookend-front`) with task overview, prerequisite check, and meta information. Closing "bookend back" with decompression and completion summary. Creates structural symmetry.
- **In Mechanism Catalog?** NO. Footer Mirror (#14) is the closest but describes visual mirroring, not a structural bookend with opening/closing content.
- **Pipeline builder producible?** UNLIKELY. No instruction generates bookend structures.

---

## Category 5: Compound Components

### 5.1 — Dual-Lens Why/How Toggle (OD-006)
- **CSS Technique:** Two-button toggle (`.dual-lens__toggle`) with `.dual-lens__btn.active` state. Two views: `.view-why` (serif, italic, conceptual) and `.view-how` (monospace, code-style, implementation). Toggle switches between fonts, colors, and content. Requires JS for state management.
- **In Mechanism Catalog?** NO. Interactive toggles that switch between conceptual and implementation views are entirely uncataloged.
- **What question generated it?** EXT-CREATIVE-007 (THE DUAL LENS): "Can the same content be viewed through two lenses — WHY (conceptual, serif) and HOW (implementation, mono) — with a toggle switch?"
- **Pipeline builder producible?** NO. No instruction generates dual-lens toggles or conceptual/implementation view switching.

### 5.2 — Semantic Bridge (OD-006)
- **CSS Technique:** Hover on concept text → highlight corresponding code (EXT-CREATIVE-006). Requires JS to link conceptual elements to code elements. Creates a visible bridge between prose and implementation.
- **In Mechanism Catalog?** NO. Cross-element hover relationships are not in the catalog.
- **What question generated it?** EXT-CREATIVE-006 (THE SEMANTIC BRIDGE): Can hovering over a concept in prose highlight the corresponding code? Makes the concept→code mapping visible.
- **Pipeline builder producible?** NO. Requires JS interactivity and cross-element linking. No pipeline instruction.

### 5.3 — Core Abstraction Component (CD-005)
- **CSS Technique:** Compound component with two zones: `.core-abstraction__principle` (serif italic, warm sparse zone, labeled "CORE PRINCIPLE") + `.core-abstraction__code` (dark code block, implementation). Principle and code are structurally bound in one bordered container. Velocity: SLOW. Temperature: WARM.
- **In Mechanism Catalog?** NO. The 2-zone DNA pattern is cataloged, but this specific variant (principle-zone + code-zone in a single compound unit) is not.
- **What question generated it?** F-pattern progressive disclosure needs anchor components that combine abstract principle with concrete implementation.
- **Pipeline builder producible?** UNLIKELY. While 2-zone DNA is known, this specific compound combining serif conceptual text with dark code block is not instructed.

### 5.4 — Reasoning Columns Component (CD-005)
- **CSS Technique:** 3-zone compound: `.reasoning__header` (label + title) + `.reasoning__columns` (2-column grid, pros/cons or options) + `.reasoning__summary` (breathing zone, conclusion). Listed in catalog as "Reasoning Columns" but the full 3-zone compound structure is richer than what's described.
- **In Mechanism Catalog?** PARTIALLY. Reasoning Columns are listed but described only as "2-column grid with `::before` list markers for deliberation display." The actual implementation is a 3-zone compound (header + columns + summary).
- **Pipeline builder producible?** PARTIALLY. The catalog mentions it but the 3-zone compound is not described.

### 5.5 — Transition-as-Component: SMOOTH and BRIDGE (CD-005)
- **CSS Technique:** Transitions between axis patterns are not just spacing — they're styled components. `.transition--smooth` = 48px padding + 1px separator + centered heading. `.transition--bridge` = breathing background + 3px borders + contained callout. The transition itself is a designed component with content.
- **In Mechanism Catalog?** PARTIALLY. Transition Grammar describes SMOOTH/BRIDGE/BREATHING as spacing rules with signals, but CD-005's implementation makes transitions into full COMPONENTS with headers, content, and callouts.
- **What question generated it?** AD-F-025 transition grammar: Z to F = SMOOTH, F to Bento = BRIDGE. But at CD scale, transitions need to be more than spacing — they need to reorient the reader.
- **Pipeline builder producible?** UNLIKELY. Pipeline describes transitions as spacing types, not as designed components.

### 5.6 — Pattern Visualization Diagrams (DD-006, OD-001, OD-005)
- **CSS Technique:** Custom CSS diagrams that visually explain the page's own pattern. DD-006: nested boxes showing fractal scales. OD-001: bar chart showing Q(sparse)/A(dense) rhythm. OD-005: wave bars showing hub(low)/spoke(high) oscillation. Each uses CSS grid/flex, colored bars, and mono labels.
- **In Mechanism Catalog?** NO. Self-explaining pattern visualizations are entirely uncataloged. These are bespoke CSS-only diagrams created per-exploration.
- **What question generated it?** DD-005 lesson: "Visualization at top explains the concept." Every exploration begins with a visual explanation of its own structural logic.
- **Pipeline builder producible?** NO. These are content-specific inventions. Each page needs its own custom diagram.

---

## Summary Statistics

| Category | Count | In Catalog | NOT in Catalog | Partially |
|----------|-------|-----------|----------------|-----------|
| Spatial Organization | 5 | 0 | 5 | 0 |
| Self-Aware Components | 7 | 0 | 6 | 1 |
| Advanced CSS | 5 | 0 | 4 | 1 |
| Content-as-Form | 6 | 0 | 2 | 4 |
| Compound Components | 6 | 0 | 4 | 2 |
| **TOTAL** | **29** | **0** | **21** | **8** |

**Zero inventions are fully in the catalog.** 21 are completely absent. 8 are partially represented (an individual mechanism is cataloged, but the compound deployment or content-specific application is not).

---

## Key CSS Techniques NOT in Pipeline Vocabulary

| Technique | Used In | Catalog Status |
|-----------|---------|---------------|
| `animation-timeline: view()` | OD-001, OD-004, OD-005, OD-006, AD-*, CD-* | ABSENT |
| `@property` | OD-006 | ABSENT |
| `clip-path: polygon()` | AD-005 | ABSENT |
| `writing-mode: vertical-lr` | OD-006 | ABSENT |
| `grid-template-areas` (named) | OD-005, AD-006, CD-005 | ABSENT |
| `position: sticky` (section headers) | OD-006 | Partially (TOC only) |
| Golden ratio columns (1:1.618) | CD-005 | ABSENT |
| Collapsible `<details>` as structural pattern | OD-001, OD-003 | ABSENT from mechanism catalog |
| 3-column page layout grid | OD-006 | ABSENT |

---

## Producibility Assessment

Of 29 inventions cataloged:
- **0** are fully producible under current pipeline instructions
- **5** are partially producible (individual mechanisms exist but compound deployment is not instructed)
- **24** are NOT producible — the pipeline has no vocabulary for them

The gap is not mechanism absence (individual techniques like border-weight gradient ARE cataloged). The gap is:

1. **Spatial organization inventions** (hub grids, spoke drilldowns, Z-sweeps, spiral layouts) — zero vocabulary
2. **Self-aware components** (scroll witnesses, fractal annotations, minimaps, visual indexes) — zero vocabulary
3. **Advanced CSS** (animation-timeline, @property, clip-path, writing-mode) — zero vocabulary
4. **Content-as-form** (confidence strata, Q&A pairs, narrative acts, task islands) — partial vocabulary for individual channels but no compound deployment instructions
5. **Compound components** (dual-lens toggles, semantic bridges, transition-as-component) — zero vocabulary

The mechanism catalog teaches 20 INDIVIDUAL tools. The explorations deploy them as COMPOUND SYSTEMS where 4-6 channels shift simultaneously at each boundary, driven by CONTENT LOGIC (what question generated this structure?). The gap is the compound deployment + content-logic derivation layer.
