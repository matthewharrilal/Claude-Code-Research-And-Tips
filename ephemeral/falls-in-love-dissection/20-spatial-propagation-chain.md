# Spatial Propagation Chain: How One Non-Vertical Section Forces the Next

**Date:** 2026-03-03
**Analyst:** Propagation Mapper (Task #2)
**Sources:** AD-006 CSS (~1,200 lines, 7 sections), OD-005 CSS (~1,000 lines, hub + 6 spokes), Report 09 (Component 11: compositional coherence), Report 15 (texture-structure unification)
**Purpose:** Trace the section-by-section spatial sequence of AD-006 and OD-005 to determine whether spatial variety propagates as a CHAIN REACTION, or whether each section requires an independent decision

---

## PART 1: SECTION-BY-SECTION SPATIAL ANATOMY

### AD-006: Compound Axis Exploration (7 Sections)

**Section 1: Z-Pattern -- Establishing Shot**
- Layout type: CSS Grid, 2x2 named areas (`z-top-left`, `z-top-right`, `z-bottom-left`, `z-bottom-right`)
- Grid: `grid-template-columns: 1fr 1fr`
- Density: PULSE (alternating sparse/dense quadrants -- top-left/bottom-right are dense with border + background, top-right/bottom-left are sparse)
- Zone: `zone-sparse` background
- Contains: prose (drop-cap), pattern-echo-grid (6x miniature CSS drawings), callout, structured list
- Spatial signature: DIAGONAL -- the eye sweeps top-left to top-right, drops to bottom-left, crosses to bottom-right. The dense quadrants (top-left, bottom-right) create an X-shaped weight distribution.

**Section 2: F-Pattern -- Deep Scanning**
- Layout type: Flexbox vertical stack (`flex-direction: column`)
- Grid within: 3-column equal grid (`triple-column`, `1fr 1fr 1fr`) for comparison
- Density: CRESCENDO (sparse overview at top, builds to dense tables at bottom)
- Zone: `zone-dense` background
- Contains: prose (drop-cap), triple-column comparison boxes with accent borders, table, callouts
- Spatial signature: VERTICAL with HORIZONTAL INTERLUDE -- primarily top-to-bottom reading, but the triple-column comparison creates a horizontal scanning moment mid-section

**Section 3: Bento Grid -- Pattern Reference**
- Layout type: CSS Grid, 4-column with named areas, featured item spanning 2x2
- Grid: `grid-template-columns: repeat(4, 1fr)` with areas `"bento-featured bento-featured bento-a bento-b" / "bento-featured bento-featured bento-c bento-d"`
- Density: ISLANDS (featured pattern as archipelago anchor, smaller items as satellites)
- Zone: `zone-sparse` background, items on `zone-dense`
- Contains: featured item with solid-offset depth (red border + pseudo-element shadow), 4 smaller grid items
- Spatial signature: CENTRIFUGAL -- the featured 2x2 item acts as a visual anchor, smaller items radiate around it

**Section 4: Spiral -- Deep Dive**
- Layout type: CSS Grid, 3-column with golden ratio (`1fr 1fr 1.618fr`), named areas
- Grid areas: `"spiral-wide spiral-wide spiral-wide" / "spiral-medium spiral-medium spiral-narrow" / "spiral-deep spiral-deep spiral-narrow"`
- Density: GEOLOGICAL (layered strata, decreasing width = increasing depth)
- Zone: Mixed -- `zone-sparse`, `zone-dense`, `zone-breathing` on different cells
- Contains: confidence-encoded border-left colors (blue/green/amber/purple), stratum labels
- Spatial signature: CONTRACTING -- wide at top (full 3-col span), narrowing to split zones below. Reader is pulled inward and downward. Golden ratio creates visual tension.

**Section 5: Choreography -- Hub-and-Spoke**
- Layout type: CSS Grid, 3-column with golden ratio hub (`1fr 1.618fr 1fr`), named areas
- Grid areas: `"spoke-a hub spoke-b" / "spoke-c hub spoke-d"`
- Density: WAVE (flowing from sparse spokes to dense hub)
- Zone: Hub on `zone-dense` with red border + solid-offset depth, spokes on `zone-sparse`
- Contains: hub with primary border emphasis, 4 spoke cells with spoke labels, connective callouts
- Spatial signature: CENTRIPETAL -- everything points inward to the hub. The spokes are satellites gravitationally bound to the center. Reader's eye is pulled to the wide center column.

**Section 6: Synthesis -- Decision Matrix**
- Layout type: Primarily table-based (decision matrix, transition matrix) with discovery log sidebar
- Density: BOOKENDS (dense matrices framed by sparse context prose)
- Zone: `zone-dense` background
- Contains: tables with semantic color-coding (best-fit/acceptable/avoid), discovery log with red border
- Spatial signature: TABULAR -- horizontal scanning across matrix columns, vertical scanning down rows. The discovery log is a sidebar-like component breaking the horizontal plane.

**Section 7: Fractal Meta -- Self-Documentation**
- Layout type: CSS Grid, 2-column annotation gutter (`3rem 1fr`)
- Grid areas: `"annotation content"`
- Density: FRACTAL (DD-F-006 at all 5 scales demonstrated)
- Zone: Mixed backgrounds
- Contains: vertical text annotations (writing-mode: vertical-lr), collapsible details, solid-offset containers
- Spatial signature: MARGINAL -- the 3rem left gutter with vertical text creates a print-like marginalia system. Content flows right of the annotation rail. The vertical text breaks the horizontal text assumption.

### OD-005: Spatial Hub-Spoke (Hub + 6 Spokes)

**Header + Wave Visualization**
- Layout type: Full-bleed dark header (vertical), then wave bar chart (flexbox horizontal)
- Spatial signature: INTRODUCTION -- vertical header establishes context, horizontal wave diagram previews the density oscillation pattern

**Hub: Territory Map**
- Layout type: CSS Grid, responsive auto-fit (`repeat(auto-fit, minmax(280px, 1fr))`)
- Contains: 6 territory tiles with solid-offset depth (::after pseudo-element), square markers, badges
- Spatial signature: GRID MAP -- an even distribution of navigational tiles. The solid-offset creates z-depth. The auto-fit makes this responsive without breakpoints.

**Spoke 1-6 (State, Patterns, Data, Performance, Testing, Accessibility)**
- Layout type: CSS Grid, 2-column content+sidebar (`3fr 1fr`)
- Grid areas: `"doctrine references"`
- Contains: breadcrumb nav, heading with red border-bottom, intro paragraph, spoke-sections (vertical), sidebar-panel (sticky, border-left), code blocks, callouts, flowcharts, decision tables, return-link
- Density: WAVE per spoke (sparse intro -> dense content -> sparse exit with return-link)
- Spatial signature: MAGAZINE -- content dominates left (75%), references persist right (25%, sticky). Reading flows top-to-bottom in the left column while the sidebar accompanies.

**Spoke Dividers**
- 1px border with 80px margin on each side (160px total gap)
- Function: ISLAND isolation -- massive breathing space between spokes

---

## PART 2: TRANSITION-BY-TRANSITION PRESSURE ANALYSIS

### AD-006: The Chain Reaction

**Transition 1: Z-Pattern (2x2 grid) -> F-Pattern (vertical stack)**
- Spatial pressure: The Z-pattern's diagonal, quadrant-based layout creates an expectation of SPATIAL BREADTH. Following it with another grid would feel repetitive. The F-pattern's vertical stack provides CONTRAST -- after reading in quadrants, the reader needs to read linearly for relief.
- Background shift: `zone-sparse` -> `zone-dense` (cream -> white). The background change provides a SURFACE-LEVEL signal that something has changed.
- Border transition: 3px solid `--color-border` between sections (Cat 1 structural). This explicit boundary says "new spatial territory."
- Pressure type: DEFLATION PRESSURE. The Z-pattern's 4-quadrant complexity creates upward pressure. The builder responds with deliberate simplification -- but not TO vertical. The F-pattern has horizontal interludes (the triple-column comparison). It is SIMPLER but not FLAT.
- CSS mechanism: The `zone-sparse`/`zone-dense` alternation and the 3px section border together provide the transition signal. The background color change is the primary cohesion device.

**Transition 2: F-Pattern (vertical+horizontal) -> Bento Grid (4-col asymmetric)**
- Spatial pressure: The F-pattern's crescendo has built density to its peak (dense tables at the bottom). The reader needs a spatial RELEASE. But following a dense vertical section with another dense vertical section would be crushing.
- The builder responds with the bento grid -- spatially complex but VISUALLY LIGHT. The bento's white cells with generous 32px gaps provide breathing room despite the complex grid topology. This is the key insight: spatial complexity and visual density are INDEPENDENT axes. You can have complex layout with sparse density.
- Pressure type: EXPLOSION PRESSURE. After vertical compression (F-pattern crescendo peak), the layout EXPANDS into 4 columns with a 2x2 featured item. Like a compressed spring releasing.
- CSS mechanism: The gap value `var(--space-8)` (32px) is consistent across all grid sections. This is a critical cohesion device -- the grid gap is the "breathing rhythm" that unifies different spatial forms.

**Transition 3: Bento Grid (4-col) -> Spiral (3-col golden ratio)**
- Spatial pressure: The bento's equal-width columns establish a DEMOCRATIC spatial vocabulary (every cell gets equal share). The spiral BREAKS this democracy with golden ratio columns (`1fr 1fr 1.618fr`). The transition from equality to hierarchy is the key pressure.
- The builder introduces ASYMMETRIC proportions for the first time. This is a commitment -- once proportional asymmetry appears, the page has a new tool in its vocabulary.
- Background shift: `zone-sparse` -> mixed zones (sparse/dense/breathing all in one grid). First time the zone system is used WITHIN a single section's grid, not just between sections.
- Pressure type: DIFFERENTIATION PRESSURE. The bento was democratic; the spiral says "some things matter more." The golden ratio is the mathematical encoding of "this column is more important."
- CSS mechanism: Border-left colors change for the first time from structural neutral (`--color-border`) to semantic accent (`--accent-blue`, `--accent-green`, `--accent-amber`, `--accent-purple`). Four colors encoding epistemological status. The color system ESCALATES.

**Transition 4: Spiral (3-col, contracting) -> Choreography (3-col, centripetal)**
- Spatial pressure: The spiral pulled the reader INWARD and DOWNWARD through contracting zones. The choreography responds with a CENTRIPETAL layout -- but where the spiral contracted from wide-to-narrow, the choreography CENTERS on the hub. Same inward pull, different geometry.
- This transition is the most subtle. Both are 3-column grids with golden ratio. But the spiral's golden column is on the RIGHT (the narrow deep zone), while the choreography's golden column is in the CENTER (the hub). The weight shifts from periphery to center.
- Pressure type: CONVERGENCE PRESSURE. The spiral's contracting depth finds its natural conclusion in a hub that EVERYTHING points toward.
- CSS mechanism: Both use `1.618fr`, but in different positions. The solid-offset depth treatment reappears on the hub (previously seen on bento featured item). This creates a CALLBACK -- the reader unconsciously recognizes the depth treatment as "this is the most important element." Shared CSS vocabulary (`::after` pseudo-element with `var(--offset-x/y)`) creates cohesion between Sections 3 and 5.

**Transition 5: Choreography (centripetal grid) -> Synthesis (tabular)**
- Spatial pressure: After the choreography's gravitational hub, the reader has arrived at the ARGUMENTATIVE CENTER. Now the content needs to DELIVER -- to present the data that proves the argument. Tables are the natural form for evidence.
- The transition from grid-based spatial layout to tabular data display is a deliberate GEAR SHIFT from "spatial exploration" to "analytical evidence."
- Pressure type: CRYSTALLIZATION PRESSURE. The spatial forms have accumulated 5 distinct patterns. Now the page needs to SUMMARIZE -- to tabulate what was spatially demonstrated. The table IS the spatial form of summary.
- CSS mechanism: The discovery log component (red border, red title) uses the same color intensity as the bento featured item and choreography hub. Red = maximum importance. This creates a 3-point emphasis chain: featured pattern (Section 3) -> synthesis hub (Section 5) -> discovery findings (Section 6). The color system provides temporal coherence.

**Transition 6: Synthesis (tabular) -> Fractal Meta (marginal annotation)**
- Spatial pressure: After dense tabular data, the page needs a REFLECTIVE space. The fractal meta section doesn't just present new content -- it ANNOTATES THE PAGE ITSELF.
- The vertical text annotation gutter (writing-mode: vertical-lr) is the most spatially inventive element on the page. It appears last because it is the MOST UNUSUAL spatial form -- the page saves its most surprising layout for the end.
- Pressure type: TRANSCENDENCE PRESSURE. The page has demonstrated 5 patterns (Z, F, Bento, Spiral, Choreography) and summarized them (Synthesis). The 7th section must go META -- it cannot be another pattern, it must be the pattern ABOUT patterns.
- CSS mechanism: The 3rem annotation gutter with vertical text exists nowhere else on the page. Its uniqueness is the point. The collapsible `<details>` elements (progressive disclosure) add a temporal dimension -- the reader can expand/collapse, creating reader-driven spatial variation.

### OD-005: The Hub-Spoke Non-Propagation

**Transition: Hub (grid map) -> Spoke 1 (content+sidebar)**
- Spatial pressure: The hub's grid map (auto-fit tiles with depth offsets) establishes a NAVIGATIONAL vocabulary. The spoke SHIFTS to a reading vocabulary -- magazine-style content+sidebar.
- 80px spoke-divider creates massive isolation. This is ISLAND architecture, not chain propagation.
- Pressure type: MODE SWITCH, not spatial pressure. The hub and spokes are different MODES of interaction (navigate vs. read).

**Transition: Spoke N -> Spoke N+1**
- Every spoke uses the SAME spatial form: 3fr + 1fr content+sidebar grid. Breadcrumb, heading, intro, content, callouts, return-link.
- The consistency is INTENTIONAL -- this is a documentation page, not an artistic exploration. The reader should be able to predict the layout of each spoke.
- Pressure type: NONE. Each spoke is a self-contained ISLAND. There is no spatial pressure between spokes because the 80px divider + consistent layout template eliminates it.

---

## PART 3: THE SPATIAL PRESSURE MODEL

### Finding 1: Spatial Variety Propagates as a CHAIN REACTION in AD-006, but NOT in OD-005

AD-006 demonstrates genuine spatial chain reaction. Each section's spatial form creates pressure that constrains the NEXT section's viable spatial forms. The Z-pattern's quadrant layout makes another quadrant layout feel repetitive, pushing toward the F-pattern's linear alternative. The F-pattern's density buildup creates explosion pressure toward the bento's spatial breadth. And so on.

OD-005 demonstrates MODAL propagation -- the hub establishes one spatial vocabulary, the spokes establish another, and each spoke repeats the same form. The propagation happens at the MACRO level (hub mode -> spoke mode), not at the micro level (spoke-to-spoke).

**The key difference: AD-006 was built to DEMONSTRATE spatial variety. OD-005 was built to DELIVER content through spatial navigation.** The propagation pattern follows the INTENT, not the CSS.

### Finding 2: The Spatial Pressure Taxonomy (6 Types)

From the transition analysis, six distinct types of spatial pressure emerge:

| Pressure Type | Direction | What Triggers It | Effect on Next Section |
|---------------|-----------|-----------------|----------------------|
| **Deflation** | Simplify | Complex layout just completed | Next section must be spatially simpler, but not flat |
| **Explosion** | Expand | Vertical compression reached peak density | Next section must expand horizontally or add columns |
| **Differentiation** | Commit | Democratic/equal layout completed | Next section must introduce hierarchy or asymmetry |
| **Convergence** | Focus | Peripheral-weighted layout completed | Next section must center or converge toward a focal point |
| **Crystallization** | Summarize | Multiple spatial forms accumulated | Next section must tabulate, compare, or organize the prior patterns |
| **Transcendence** | Reflect | Summary/synthesis completed | Next section must go meta -- annotate the page itself |

These pressures form a NARRATIVE ARC: explore (deflation/explosion) -> commit (differentiation/convergence) -> resolve (crystallization/transcendence). This maps directly to a rhetorical arc: introduce -> argue -> prove -> reflect.

### Finding 3: The Rhythm is Complexity-Contrast, NOT Complex-Simple Alternation

The initial hypothesis -- "complex section followed by simple section, like breathing" -- is WRONG for AD-006.

The actual rhythm in AD-006 is:
1. Z-Pattern: MODERATE complexity (2x2 grid)
2. F-Pattern: LOW complexity (vertical stack) with horizontal interlude
3. Bento Grid: HIGH complexity (4-col asymmetric with depth)
4. Spiral: HIGH complexity (3-col golden ratio with 4 zone types)
5. Choreography: HIGH complexity (3-col centripetal with depth)
6. Synthesis: MODERATE complexity (tabular)
7. Fractal Meta: HIGH complexity (annotation gutter + vertical text)

Pattern: `moderate -> low -> high -> high -> high -> moderate -> high`

This is NOT alternation. After the initial deflation (Section 1 -> 2), complexity RATCHETS UP and mostly stays high. The "breathing" happens through BACKGROUND ALTERNATION (sparse/dense zone tokens) and BORDER SEPARATION (3px structural dividers), not through spatial simplification.

**Key insight: breathing room comes from SURFACE TEXTURE (backgrounds, borders, spacing), not from spatial simplification.** A complex grid with generous gaps and a warm cream background feels spacious. A simple vertical stack with dense text feels cramped. Spatial complexity and perceptual density are independent variables.

### Finding 4: The Spatial Energy Budget is Real but Soft

There IS a budget -- AD-006 uses 7 distinct spatial forms, and each is used ONCE. No spatial form repeats. This creates a constraint: each section must introduce a NEW form, which prevents the page from feeling chaotic (no collisions between similar forms) while preventing it from feeling flat (no repetition).

But the budget is SOFT -- it is not a number. The page could likely sustain 8-9 spatial forms if each served distinct content. The budget is exhausted when the reader can no longer track "which section used which layout," which happens when spatial forms are too similar (two different grids with similar proportions) or too numerous (cognitive load).

The limiting factor is DISCRIMINABILITY, not count. AD-006's 7 forms are each maximally discriminable: quadrant (Z), vertical (F), multi-column democratic (Bento), asymmetric contracting (Spiral), centripetal hub (Choreography), tabular (Synthesis), marginal annotation (Fractal Meta). No two forms could be confused for each other.

### Finding 5: Cohesion Mechanisms -- What Makes Transitions Feel Unified

Six CSS mechanisms create cohesion across AD-006's diverse spatial forms:

**1. Shared gap value: `var(--space-8)` (32px)**
Every grid section uses the same gap. Z-pattern, bento, spiral, choreography -- all 32px gaps. This is the single most important cohesion mechanism. Different grid topologies with the same breathing rhythm feel like the same design language.

**2. Zone background system: 3 tokens**
`--color-zone-sparse` (#FEF9F5), `--color-zone-dense` (#FFFFFF), `--color-zone-breathing` (#FAF5ED). These 3 backgrounds rotate across sections and within sections. The limited palette ensures every zone feels like part of the same thermal system.

**3. Border weight hierarchy: 3px / 1px**
Cat 1 structural borders (3px) at section boundaries and major grid cells. Cat 2 separator borders (1px) within sections. This two-weight system is used identically in every section, creating rhythmic consistency.

**4. Section meta header pattern**
Every section opens with `.section-meta` (monospace, uppercase, letterspaced label) + `h2` heading + descriptive paragraph. This repeated entry pattern provides predictable orientation before each spatial surprise.

**5. Solid-offset depth treatment (recurring callback)**
The `::after` pseudo-element with `var(--offset-x/y)` and `z-index: -1` appears on bento-featured (Section 3), choreo-hub (Section 5), and offset-container (Section 7). Each appearance marks the section's MOST IMPORTANT element. The reader learns to associate this depth treatment with "center of gravity."

**6. Accent color escalation**
Sections 1-3 use minimal color (structural borders only). Section 4 introduces 4 semantic accent colors. Section 5 returns to red-only emphasis. Section 6 uses semantic color-coding in tables. The accent system ACCUMULATES -- colors are added, never removed.

---

## PART 4: THE PROPAGATION MECHANISM -- WHY THIS MATTERS FOR THE VERTICAL FLATNESS PROBLEM

### The Core Finding

Spatial variety does NOT require independent invention for each section. Once the builder makes the FIRST spatial break (a non-vertical layout), three forces propagate variety forward:

**Force 1: Anti-Repetition Reflex.** After building a 2x2 grid, building another 2x2 grid feels wrong. The builder's aesthetic judgment rejects repetition before it is consciously considered. This reflex pushes each section toward a DIFFERENT spatial form, creating variety as a byproduct of avoiding sameness.

**Force 2: Background Alternation System.** Once zone backgrounds exist (sparse/dense/breathing), they create VISUAL EVIDENCE that sections are distinct. A section on `zone-sparse` (#FEF9F5) followed by a section on `zone-dense` (#FFFFFF) LOOKS different even before spatial form differs. This surface-level signal primes the reader for spatial change.

**Force 3: Coherence Vocabulary Accumulation.** Each spatial decision adds to the page's design vocabulary. Once `1.618fr` (golden ratio) appears in Section 4, it can be REUSED in Section 5 in a different configuration. Once solid-offset depth appears in Section 3, it can RECUR in Section 5. The builder draws from an expanding vocabulary, not from scratch each time.

### Why Pipeline Builders Stay Vertical

Pipeline builders make ZERO first breaks because:

1. **No anti-repetition reflex** -- they build ONE section at a time without seeing prior sections. There is no "I already used that" pressure.
2. **No background alternation** -- pipeline builds default to a single background throughout. No zone tokens, no surface-level variety.
3. **No vocabulary accumulation** -- pipeline builders receive a fixed vocabulary (components.css) rather than building one through decisions. They SELECT from a vocabulary rather than INVENTING one.

The chain reaction requires a SINGLE builder with CONTINUOUS CONTEXT who can see everything built so far. Pipeline architecture fragments this into independent agents with no shared visual memory.

### The Minimum Viable Chain Reaction

From the AD-006 analysis, the minimum conditions for spatial propagation are:

1. **The first break must happen.** A non-vertical layout in the FIRST content section. Without the initial break, there is nothing to propagate.
2. **Background zone tokens must exist.** At least 2-3 distinct background colors that rotate between sections.
3. **A consistent gap value** across all grids (32px in AD-006). This is the "breathing rhythm" that unifies diverse forms.
4. **Section boundaries must be explicit** (3px borders, background changes). The reader needs clear signals that spatial form is about to change.
5. **The builder must see prior sections** while building current ones. Without visual context, anti-repetition reflex cannot activate.

If these 5 conditions are met, spatial variety is CHEAPER to produce than spatial flatness. The anti-repetition reflex makes each section naturally different. The builder merely needs permission and vocabulary to express that difference.

---

## PART 5: THE OD-005 COUNTEREXAMPLE -- WHEN NON-PROPAGATION IS CORRECT

OD-005 is NOT a failure of spatial propagation. Its hub-spoke architecture is a DELIBERATE design decision: the hub establishes navigation, the spokes deliver content, and spatial CONSISTENCY within spokes is the correct choice for a reference documentation page.

The 3fr+1fr magazine layout repeated across all 6 spokes is the OD-005 equivalent of a typographic grid in a newspaper. Variety would HURT usability -- the reader should be able to predict where to find the code block, the sidebar, the return link.

This reveals that the spatial propagation model has a DOMAIN constraint: propagation is correct for ARGUMENTATIVE or EXPLORATORY content (AD-006 is about demonstrating that axis patterns exist). Non-propagation is correct for REFERENCE or NAVIGATIONAL content (OD-005 is about delivering React documentation).

**The pipeline's vertical flatness problem is therefore not that propagation is absent, but that propagation is absent FOR CONTENT THAT DEMANDS IT.** When the pipeline builds an analytical page about Steve Yegge's arguments, spatial variety should propagate. When it builds a reference API page, spatial consistency should dominate.

---

## SYNTHESIS: 5 Takeaways for the Pipeline

1. **Spatial variety is a chain reaction, not a per-section invention.** Once the first break happens, anti-repetition reflex and vocabulary accumulation make subsequent breaks CHEAPER, not harder.

2. **Cohesion comes from 6 shared mechanisms** (gap value, zone backgrounds, border hierarchy, section headers, depth treatment, accent escalation), NOT from spatial uniformity. Diverse spatial forms with shared mechanisms feel cohesive. Uniform spatial form without shared mechanisms feels flat.

3. **The rhythm is complexity-CONTRAST, not complexity-alternation.** Complexity ratchets up and stays high. "Breathing" comes from background texture and gap spacing, not from spatial simplification.

4. **6 spatial pressure types** (deflation, explosion, differentiation, convergence, crystallization, transcendence) create a natural narrative arc that maps to rhetorical structure. Builders who feel these pressures produce varied layouts without explicit instruction.

5. **Pipeline builders cannot feel spatial pressure** because they cannot see prior sections. The fix is not "add more spatial forms to the vocabulary" -- it is "give the builder continuous visual context of everything built so far." Spatial pressure is the emergent mechanism. Single-builder-continuous-context is the enabling architecture.
