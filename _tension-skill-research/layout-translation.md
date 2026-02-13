# Layout Translation Analysis

**Analyst:** layout-translator
**Scope:** Phase 4 of the tension-composition pipeline -- how metaphors become concrete CSS/HTML compositional layouts
**Sources examined:** SKILL.md, DD-004-layers.html (geological), OD-005-spatial.html (hub-spoke), CD-001-reasoning-inside-code.html (crescendo + F-pattern + bento), CD-006-pilot-migration.html (crown jewel -- all 5 axes, all 11 components)

---

## 1. Property Extraction Taxonomy

When a metaphor collapses in Phase 3, we need to extract its PHYSICAL properties -- the literal characteristics of the real-world thing the metaphor references. The completeness of this extraction determines the richness of the translation.

### 1.1 Five Categories of Metaphor Properties

**A. Spatial Properties** -- Where things are, how they relate in space

| Property | CSS Mechanism | Evidence from Explorations |
|----------|--------------|---------------------------|
| Horizontal layers | `display: flex; flex-direction: column` + distinct background zones | DD-004: 5 geological strata stacked vertically with `.layer-atmosphere`, `.layer-surface`, `.layer-topsoil`, `.layer-subsoil`, `.layer-bedrock` |
| Vertical columns | `display: grid; grid-template-columns` | CD-006: Z-hero uses `grid-template-columns: 1.618fr 1fr` (golden ratio); Bento uses `repeat(4, 1fr)` |
| Radial / hub-spoke | Central hub element + surrounding spoke containers | OD-005: Territory grid hub + expandable spoke sections |
| Nested containment | Bordered parent with padded children | CD-001: `.core-abstraction` wraps essence zone + code proof zone, border separating the two |
| Adjacency | Gap values in grid/flex layouts | CD-006: `--space-within: 8px` for siblings, `--space-between: 32px` for groups, `--space-chapter: 64px` for sections |

**B. Temporal Properties** -- Sequence, rhythm, progression

| Property | CSS Mechanism | Evidence |
|----------|--------------|----------|
| Sequence / ordering | DOM order + vertical flow | CD-001: CRESCENDO -- sections ordered Opening (sparse) -> Rising -> Building -> Peak (dense) -> Resolution (sparse) |
| Simultaneity / parallel | Multi-column grid | CD-006: Bento grid section 3 shows 4 token categories simultaneously |
| Progression / gradient | Progressive spacing compression + darkening backgrounds | DD-004: atmosphere (80px padding) -> surface (40px) -> topsoil (24px) -> subsoil (20px) -> bedrock (code, tightest) |
| Oscillation / cycles | Alternating zone backgrounds | OD-005: WAVE pattern -- hub(sparse) -> spoke(dense) -> hub(sparse return) via `--color-zone-sparse` / `--color-zone-dense` alternation |
| Climax / crescendo | Sections with decreasing padding, increasing component density | CD-001: `section-zone--peak` has `padding-top: var(--space-6)` vs opening's `var(--space-16)` |

**C. Material Properties** -- Texture, weight, substance

| Property | CSS Mechanism | Evidence |
|----------|--------------|----------|
| Density / compression | `padding`, `line-height`, `font-size`, `gap` | DD-004: Atmosphere line-height 1.8, Surface 1.2, Bedrock 1.5 (code); font-size decreases 36px -> 22px -> 14px -> 12px |
| Weight / heaviness | `border-width`, `font-weight`, background opacity | DD-004: `.stacked-layer--surface` has `border-left: 3px solid --color-primary` (heavy); atmosphere has `2px solid --color-border-subtle` (light) |
| Transparency / opacity | Background color saturation/value shifts | DD-004: Five layer colors from `#FEF9F5` (nearly transparent atmosphere) to `#1A1A1A` (solid bedrock) |
| Texture | Font family shifts (serif vs sans vs mono) | All explorations: Instrument Serif = authority/wisdom, Inter = clarity/reading, JetBrains Mono = precision/code |

**D. Behavioral Properties** -- Movement, transformation, growth

| Property | CSS Mechanism | Evidence |
|----------|--------------|----------|
| Descent / drilling | Vertical stacking with increasing visual weight downward | DD-004: Reader drills through geological strata -- layer indicators show current depth with filled bars |
| Expansion / contraction | Responsive breakpoints, collapsing grids | CD-001: `@media (max-width: 768px)` collapses bento-grid to `grid-template-columns: 1fr` |
| Oscillation / breathing | Breathing zone components between sections | CD-001: `.breathing-zone` between CRESCENDO sections, with variants `--tight` and `--release` |
| Arrival / reveal | Scroll-driven animations | OD-005: `.reveal` class with `animation-timeline: view()` for content entering viewport |
| Flow direction | Reading direction (LTR) + scan patterns | CD-006: F-pattern left-spine headings with `border-left: 4px solid --color-primary; padding-left: 16px` |

**E. Relational Properties** -- How parts connect to each other

| Property | CSS Mechanism | Evidence |
|----------|--------------|----------|
| Containment | Border around parent element | CD-001: `.reasoning` and `.core-abstraction` use `border: 3px solid` to visually contain their children |
| Hierarchy | Typography scale + border weight | CD-006: 5-level type scale (page: 3rem -> section: 1.625rem -> subsection: 1.375rem -> body: 1rem -> code: 0.875rem) |
| Flow / connection | Transition components between zones | CD-006: Three transition types -- smooth (48px + 1px), bridge (64px + breathing zone), breathing (80px + 3px) |
| Isolation | Gap between siblings + no shared borders | OD-005: Each spoke is a self-contained ISLAND with `--space-chapter: 64px` separating it from neighbors |
| Bridging | Transition elements that connect two domains | CD-001: `.essence-pullquote` acts as BRIDGE between F-Pattern and Bento Grid sections |

### 1.2 Completeness Checklist

For any metaphor, ask these 5 questions to ensure complete extraction:

1. **Spatial:** What is the physical arrangement? (stacked, gridded, radial, contained, adjacent)
2. **Temporal:** What is the time dimension? (sequential, simultaneous, progressive, cyclical, climactic)
3. **Material:** What is the substance like? (dense/sparse, heavy/light, opaque/transparent, textured)
4. **Behavioral:** What does it DO? (descend, expand, oscillate, flow, arrive)
5. **Relational:** How do parts relate? (contained, hierarchical, flowing, isolated, bridged)

If ANY category produces zero properties, the metaphor may be insufficiently rich for compositional layout. This is a signal to return to Phase 3 and consider richer candidates.

---

## 2. Translation Grammar: The Lookup Table

This is the core mechanical step: converting metaphor properties to CSS. Each row maps a metaphor concept to the specific design system vocabulary that expresses it.

### 2.1 Primary Translation Table

| Metaphor Property | CSS Channel | System-Legal Expression | Constraints |
|-------------------|-------------|------------------------|-------------|
| **Weight: Heavy** | border-width | `border: 3px solid` or `border-left: 4px solid` | Never 2px. Cat 1: structural (3px, 4px). |
| **Weight: Light** | border-width | `border-bottom: 1px solid` | Cat 2: data separators. Cat 3: micro-elements. |
| **Weight: Emphasis** | font-weight + font-family | `font-family: var(--font-display); font-style: italic` | Instrument Serif = Essence/Core ONLY. |
| **Depth: Surface** | background-color | `background: var(--color-zone-sparse)` (#FEF9F5) | Warmest, lightest. |
| **Depth: Middle** | background-color | `background: var(--color-zone-dense)` (#FFFFFF) or `var(--color-zone-breathing)` (#FAF5ED) | Neutral zone. |
| **Depth: Deep** | background-color | `background: var(--color-text)` (#1A1A1A) + inverted text | Bedrock / code / header. |
| **Density: Sparse** | padding + gap | `padding: var(--space-16)` (64px) or `var(--space-20)` (80px) | Opening/closing sections. |
| **Density: Medium** | padding + gap | `padding: var(--space-8)` (32px) or `var(--space-6)` (24px) | Body content. |
| **Density: Dense** | padding + gap | `padding: var(--space-4)` (16px) or `var(--space-3)` (12px) | Code blocks, detail grids. |
| **Density: Maximum** | line-height + font-size + padding | `line-height: 1.5; font-size: var(--type-code); padding: var(--space-4)` | Bedrock / reference. |
| **Flow: Sequential** | DOM order + flex-direction column | Elements stacked vertically in reading order | Default. F-Pattern spine. |
| **Flow: Parallel** | CSS Grid columns | `display: grid; grid-template-columns: 1fr 1fr` or `repeat(N, 1fr)` | Bento, Z-pattern. |
| **Flow: Oscillating** | Alternating backgrounds + padding | Zone-sparse -> zone-dense -> zone-sparse + breathing zones between | WAVE / PULSE pattern. |
| **Containment: Bounded** | border | `border: 3px solid var(--color-border)` | Full perimeter = contained entity. |
| **Containment: Accented** | border-left | `border-left: var(--border-left-width) solid [accent-color]` | Callouts, pullquotes, emphasis. |
| **Containment: Open** | no border, spacing only | `margin-bottom: var(--space-between)` | Prose paragraphs. |
| **Transition: Smooth** | gap + subtle rule | `margin: var(--space-12) 0; border-top: 1px solid` | Same-axis continuation. |
| **Transition: Bridge** | gap + breathing zone + text | `margin: var(--space-16) 0; background: var(--color-zone-breathing); padding: var(--space-8)` | Cross-axis with explanatory text. |
| **Transition: Breathing** | large gap + structural rule | `margin: var(--space-20) 0; border-top: 3px solid var(--color-border)` | Major axis shift (especially involving Spiral). |
| **Hierarchy: Primary** | font-family + size | `font-family: var(--font-display); font-size: var(--type-page)` (2.5-3rem) | Page titles, hero statements. |
| **Hierarchy: Secondary** | font-family + size | `font-family: var(--font-display); font-size: var(--type-section)` (1.625rem) | Section headings. |
| **Hierarchy: Tertiary** | font-family + size + style | `font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic` | Subsection headings. |
| **Hierarchy: Meta** | font-family + size + transform | `font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.1em` | Labels, section indicators, breadcrumbs. |
| **Authority: High** | Serif + large size + primary border | Display font at page size + 4px primary border | Core Abstractions, Hero statements. |
| **Authority: Medium** | Sans-serif + medium size + standard border | Body font at body size + 3px structural border | Explanatory content. |
| **Authority: Low** | Mono + small size + subtle styling | Mono font at code/meta size + 1px borders | Labels, annotations, file paths. |

### 2.2 Combined Property Mappings

Some metaphor properties combine to produce specific CSS patterns:

| Combined Property | CSS Pattern | Example |
|-------------------|-------------|---------|
| Heavy + Sequential + Contained | Bordered section with vertical flow | `.reasoning` in CD-001: `border: 3px solid; padding: var(--space-8)` with stacked children |
| Sparse + Parallel + Hierarchical | Wide grid with size-differentiated cells | Bento Grid in CD-006: `grid-template-columns: repeat(4, 1fr)` with `--wide` spanning 2 columns |
| Dense + Sequential + Contained | Dark code block | `background: var(--color-text); font-family: var(--font-mono); font-size: var(--type-code)` |
| Oscillating + Bounded + Bridged | Hub-spoke with breathing zones | OD-005: Hub (sparse, bordered) -> Spoke (dense, contained) -> Hub return, separated by breathing transitions |
| Progressive + Sequential + Accented | F-pattern descent with left-spine headings | CD-001/CD-006: `border-left: 4px solid var(--color-primary); padding-left: var(--space-4)` on each h2 |

### 2.3 The Exhaustive Channel List

Every metaphor property must be expressed through exactly these channels (and ONLY these):

1. **Background color** -- from the locked zone palette (sparse, dense, breathing, or text/dark)
2. **Border** -- 3 categories only (3-4px structural, 1px separator, 1px micro)
3. **Typography** -- 3 fonts (display/body/mono), 6 sizes (page/section/subsection/body/code/meta)
4. **Spacing** -- mathematical scale (4-80px), 3 semantic aliases (within/between/chapter)
5. **Layout** -- flexbox (sequential), grid (parallel), or none (inline/block flow)
6. **Color accent** -- primary red for structural emphasis, 5 accent colors for callout borders ONLY

Anything not expressible through these 6 channels is OUTSIDE the design system's vocabulary and cannot be used. This constraint is what makes the translation deterministic rather than creative.

---

## 3. Coherence Checking Methodology

### 3.1 The Coherence Matrix

All channels must reinforce the same metaphor direction. The matrix checks each channel pair:

```
             Background  Border   Typography  Spacing  Layout  Accent
Background       --       [1]       [2]        [3]     [4]     [5]
Border          [1]        --       [6]        [7]     [8]     [9]
Typography      [2]       [6]        --       [10]    [11]    [12]
Spacing         [3]       [7]       [10]        --    [13]    [14]
Layout          [4]       [8]       [11]       [13]     --    [15]
Accent          [5]       [9]       [12]       [14]    [15]     --
```

For each pair [N], ask: "Do these two channels reinforce the same metaphor direction?"

### 3.2 Coherence Rules (from exploration evidence)

**Rule C-1: Density direction must be consistent across ALL channels.**
If the metaphor implies "descent" (deeper = denser):
- Background MUST darken or warm progressively
- Border weight MUST increase or shift from subtle to structural
- Typography MUST compress (smaller sizes, tighter line-height)
- Spacing MUST decrease
- Layout MUST shift from wide/open to tight/contained

Evidence: DD-004 geological layers demonstrate perfect coherence:
- Atmosphere: `#FEF9F5` bg, 2px subtle border, 15px italic display, 80px padding
- Bedrock: `#1A1A1A` bg, 4px primary border, 12px mono, 16px padding

**Rule C-2: Transition strength must match axis distance.**
- Same-axis continuation: SMOOTH (48px + 1px border)
- Adjacent-axis shift: BRIDGE (64px + breathing zone + explanatory text)
- Distant-axis shift (especially involving Spiral): BREATHING (80px + 3px border)

Evidence: CD-006 uses all three transitions -- Spiral to Z-Pattern gets BREATHING, Z-Pattern to Bento gets BRIDGE, Bento to F-Pattern gets BRIDGE.

**Rule C-3: Typography role must match content authority.**
- Display serif = highest authority (Essence, Core Abstraction principles)
- Body sans-serif = standard authority (explanatory prose)
- Mono = precision/reference (code, labels, meta indicators)
- If a section uses serif for a label, it VIOLATES authority hierarchy

Evidence: All explorations enforce this. CD-006 `.section-meta` uses mono for section indicators, display serif for h2 titles, body sans for prose.

**Rule C-4: Border category must match containment intent.**
- 3-4px = "this is a structural boundary" (sections, contained components)
- 1px = "this is a data separator" (table rows, detail key-value pairs)
- 1px micro = "this is a micro-element boundary" (inline code, badges)
- NEVER 2px (the "2px border epidemic" -- the #1 systemic audit finding)

Evidence: CD-001 uses `border: 3px solid var(--color-border)` for reasoning containers, `border-bottom: 1px solid var(--color-border-subtle)` for detail rows.

**Rule C-5: Accent color must match semantic role.**
- `--color-primary` (#E83025) = structural emphasis, page-level accents
- `--accent-blue` = informational callouts
- `--accent-green` = tips, positive actions
- `--accent-coral` = gotchas, warnings
- `--accent-amber` = challenges, caution
- `--accent-purple` = essence, core abstractions

Evidence: Universal across all explorations. No exploration uses accent colors outside their callout roles.

### 3.3 Automated Coherence Check Procedure

For each section of the generated layout:

1. **Identify the metaphor direction** for this section (e.g., "descending density")
2. **For each of the 6 channels**, record what value it takes
3. **Check pairwise**: Does channel A agree with channel B about the direction?
4. **Mark contradictions**: Any pair that disagrees

Example coherence check for a "geological descent":

```
Section: Topsoil (3rd layer of 5)
Background: #F7F4F0 (warm light) -- MID ✓
Border: 4px solid var(--color-border) -- MID-HEAVY ✓
Typography: 22px display italic -- MID ✓
Spacing: 24px padding -- MID ✓
Layout: flex column (sequential) -- CONSISTENT ✓
Accent: --color-border (neutral) -- CONSISTENT ✓
COHERENCE: PASS (all channels at MID position)
```

Contradiction example:
```
Section: Dense detail area
Background: #FEF9F5 (sparse zone) -- SPARSE ✗
Border: 3px structural -- DENSE ✓
Typography: 14px sans -- DENSE ✓
Spacing: 16px padding -- DENSE ✓
CONTRADICTION: Background says "sparse" but all other channels say "dense"
FIX: Change background to var(--color-zone-dense) or var(--color-border-subtle)
```

---

## 4. The Tier 2 / Tier 3 Boundary

### 4.1 The Formal Test

**Tier 2 (Extractable):** A component that carries its own meaning independent of any metaphor. It works in isolation, can be placed on any page, and its semantic content is self-evident.

**Tier 3 (Compositional):** A component whose meaning depends on the metaphor context. Remove it from the metaphor, and it either loses meaning or means something different.

**The Exact Criterion:** "Does this component carry its own semantic weight, or does it BORROW semantic weight from the surrounding compositional structure?"

### 4.2 Decision Procedure

Ask three questions:

1. **Portability test:** Can this component appear on a page with a DIFFERENT metaphor and still make sense?
   - YES = Tier 2 candidate
   - NO = Tier 3

2. **Isolation test:** If you show ONLY this component to a reader (no surrounding context), does the reader understand its purpose?
   - YES = Tier 2
   - NO = Tier 3

3. **Substitution test:** Can this component be replaced by a different component serving the same function?
   - YES = Tier 2 (the function is generic)
   - NO = Tier 3 (the function is metaphor-specific)

### 4.3 Classification of Observed Components

**Tier 2 -- Extractable (self-contained meaning):**

| Component | Why Tier 2 | Evidence |
|-----------|-----------|----------|
| **Info Callout** | "Here is contextual information" is universally meaningful | Used identically across DD-004, OD-005, CD-001, CD-006 |
| **Tip Callout** | "Here is a practical suggestion" works anywhere | Same structure, same accent color, any page |
| **Gotcha Callout** | "Beware of this trap" is self-explanatory | Same across all explorations |
| **Essence Callout** | "This is a core truth" -- Instrument Serif signals authority inherently | Portable, though the specific truth it contains may be metaphor-dependent |
| **Code Snippet** | "Here is executable code" is universally understood | Dark background, mono font, syntax highlighting -- same everywhere |
| **File Tree** | "Here is a directory structure" is self-evident | Works in any documentation context |
| **Decision Matrix** | "Here are options to compare" is inherently meaningful | Table with evaluation criteria -- context-independent |
| **Task Component** | "Here are steps to complete" is universally understood | Checklist format works anywhere |

**Tier 3 -- Compositional (metaphor-dependent meaning):**

| Component | Why Tier 3 | Evidence |
|-----------|-----------|----------|
| **Layer Indicator** (DD-004) | The 5 filled/unfilled bars only mean "geological depth" inside the strata metaphor | Without the layers context, a set of 5 bars is meaningless |
| **Depth Transition** (DD-004) | "Pattern Reflection" separator only makes sense between geological layers | A fading line with a label has no inherent meaning |
| **Stacked Layers Visualization** (DD-004) | The 5 colored bands explicitly visualize the geological metaphor | Remove the metaphor, and they are just colored rectangles |
| **WAVE Visualization** (OD-005) | The bar chart showing density oscillation IS the hub-spoke metaphor | Without the spatial metaphor, the chart loses its meaning |
| **Density Meter** (CD-001) | The 5-segment meter shows CRESCENDO position within the page | Outside a crescendo structure, "Density: 3/5" means nothing |
| **Breathing Zone** (CD-001) | "Breathing" only makes metaphorical sense between CRESCENDO sections | Without the crescendo, it is just a colored gap |
| **Spiral Strata** (CD-006) | Bedrock/Subsoil/Atmosphere labels are the geological metaphor's vocabulary | They borrow meaning from "confidence level as geological depth" |
| **Transition Types** (CD-006) | Smooth/Bridge/Breathing are metaphor-grammar components | They define how metaphors connect to other metaphors -- meaningless in isolation |

### 4.4 The Boundary Cases

Some components sit at the boundary:

| Component | Tier 2 or 3? | Reasoning |
|-----------|-------------|-----------|
| **Core Abstraction** | 2.5 -- leans Tier 2 | The structure (Essence zone + Code proof zone) is portable, but the PAIRING of philosophical statement with code proof borrows from the "reasoning about code" compositional intent. In practice: extractable with reduced power. |
| **Reasoning** | 2.5 -- leans Tier 2 | Two-column comparison + recommendation is a generic pattern, but the framing as "deliberation" carries narrative intent. Extractable if renamed to "Comparison." |
| **Essence Pullquote** | 2.5 -- leans Tier 2 | A pullquote works anywhere, but when used as a BRIDGE transition between axis patterns, its function is compositional (it bridges two worlds). In isolation: Tier 2. As bridge: Tier 3. |

### 4.5 The Tier Boundary Rule

**A component is Tier 3 if and only if removing the metaphor context causes at least ONE of these:**
1. Its label/name becomes meaningless ("Bedrock" without geology)
2. Its visual structure becomes arbitrary (5 bars without depth metaphor)
3. Its position becomes non-deterministic (could go anywhere, losing its meaning)

---

## 5. When Metaphors Demand NEW Components

### 5.1 The Invention Signal

A new component is needed when ALL of these are true:

1. The metaphor has a physical property that demands visual expression
2. No existing Tier 2 or Tier 3 component can serve that property
3. The property cannot be expressed through layout/spacing/typography alone (it needs a discrete visual element)

### 5.2 Observed Inventions

| Invention | Metaphor Property | Why No Existing Component Worked | How It Uses System-Legal CSS |
|-----------|-------------------|----------------------------------|------------------------------|
| **Layer Indicator** (DD-004) | Geological depth position | No existing component shows "where you are in a stack" | 5 divs, 6px x 12px each, background toggles between `--color-border` and `--color-primary`. All system-legal. |
| **Depth Transition** (DD-004) | Transition between geological strata | Existing callouts are content-bearing; this is pure wayfinding | Flexbox centering, 1px gradient line, mono label. System palette only. |
| **Density Meter** (CD-001) | CRESCENDO position within page flow | No existing component shows "progression through a density arc" | 5 flex-1 segments, `border: 1px solid --color-border`, filled segments use `--color-primary`. |
| **Breathing Zone** (CD-001) | CRESCENDO respiration between density phases | Callouts carry content; this is pure compositional rhythm | Background zone with 3px structural borders top/bottom, variants for tight/release. |
| **Wave Visualization** (OD-005) | Hub-spoke density oscillation pattern | No existing component visualizes an oscillation pattern | Bar chart using flex-end alignment, system palette colors, mono labels. |
| **Spiral Strata** (CD-006) | Confidence level as geological depth | Existing list/callout structures don't encode confidence hierarchy | Flex column with border-weight gradient (4px established, 3px probable, 1px speculative). |
| **Transition Grammar** (CD-006) | Connections between axis pattern domains | No existing component bridges one axis to another | Three CSS classes: smooth (gap + 1px), bridge (gap + zone + text), breathing (gap + 3px) |

### 5.3 Invention Constraints

Every invented component MUST satisfy:

1. **System-legal CSS only:**
   - `border-radius: 0` (enforced globally via `*:where(:not(input, button, select))`)
   - `box-shadow: none`
   - No `filter: drop-shadow()`
   - Colors from locked palette only
   - Typography from 3-font system only
   - Spacing from mathematical scale only

2. **Metaphor-demanded function:**
   - The component must serve a property that the metaphor DEMANDS
   - If you can remove the component and the metaphor still communicates, it is decorative and should not exist
   - Document: "This component exists because the metaphor property [X] has no existing visual expression"

3. **Coherence with all other channels:**
   - The invention must pass the coherence matrix (Section 3.3)
   - Its visual weight must match the metaphor position it occupies
   - Its typography, spacing, and color must be consistent with the metaphor direction

4. **Minimal complexity:**
   - Use the simplest HTML/CSS that achieves the function
   - Prefer existing elements (div, span) over semantic elements unless semantically appropriate
   - No JavaScript unless the metaphor genuinely requires interaction (rare)

### 5.4 The Adapt-vs-Invent Decision

Before inventing, check:

1. **Can an existing Tier 2 component be ADAPTED?**
   - Add a CSS modifier class (e.g., `.callout--essence` adapts the base callout)
   - Change its accent color
   - Adjust its spacing/typography to match the metaphor context
   - If adaptation works, DO NOT invent

2. **Can the property be expressed through LAYOUT alone?**
   - Grid placement, gap values, background zones
   - Many metaphor properties need no discrete component -- they are expressed through the spatial relationships between existing components
   - If layout alone communicates the property, DO NOT invent a component

3. **Is the property actually NECESSARY?**
   - Does the reader need to perceive this property for the metaphor to work?
   - If the metaphor communicates without this property being explicitly visualized, DO NOT invent
   - Preference: let the metaphor be implicit rather than over-specify

Only if all three answers are "no" should you invent a new Tier 3 component.

---

## 6. Cross-Cutting Discoveries

### 6.1 The Gradient Principle

The most powerful translation pattern observed across all explorations: **metaphors that have a natural gradient (light-to-dark, sparse-to-dense, shallow-to-deep) produce the most coherent layouts** because ALL 6 CSS channels can independently encode the same gradient direction.

DD-004 (geological) is the purest example: background darkens, borders thicken, fonts shrink, spacing compresses, all moving in the same direction. When one channel contradicts, readers perceive "wrongness" even if they can't articulate why.

### 6.2 The Component Density Limit

Observed empirically: sections with more than 3 heavy components (code blocks, reasoning, core abstractions) require velocity interleaving -- lightweight callouts ("FAST" components per R5-T2) between heavy ones. CD-001 demonstrates this: after every code block or reasoning component, a callout or prose paragraph provides cognitive relief.

This is not a layout rule but a COHERENCE rule: if the metaphor implies "crescendo to peak density," you cannot have 5 consecutive heavy components -- the density plateau violates the crescendo shape.

### 6.3 The Axis Transition Grammar

CD-006 reveals that axis transitions are themselves compositional components. The three types (Smooth, Bridge, Breathing) form a grammar:

- **Smooth** = "same axis continues" or "closely related axis begins"
- **Bridge** = "a new axis begins, and the reader needs orientation text"
- **Breathing** = "a radically different axis begins (especially Spiral), requiring perceptual reset"

This grammar is deterministic given the axis pair. It could be encoded as a lookup:

| From \ To | Z-Pattern | F-Pattern | Bento | Spiral | Choreography |
|-----------|-----------|-----------|-------|--------|-------------|
| **Z-Pattern** | Smooth | Smooth | Bridge | Breathing | Bridge |
| **F-Pattern** | Smooth | Smooth | Bridge | Breathing | Bridge |
| **Bento** | Bridge | Bridge | Smooth | Breathing | Bridge |
| **Spiral** | Breathing | Breathing | Breathing | Breathing | Breathing |
| **Choreography** | Bridge | Bridge | Bridge | Breathing | Smooth |

Spiral ALWAYS requires Breathing transitions because its angular layout is perceptually most different from the linear/grid patterns.

### 6.4 The Fractal Consistency Requirement

DD-F-006 (fractal self-similarity) demands that the metaphor's density pattern appears at multiple scales:
- **Navigation scale** (TOC)
- **Page scale** (section sequence)
- **Section scale** (component sequence within section)
- **Component scale** (content within component)
- **Character scale** (code comments vs code logic)

CD-006 demonstrates all 5 scales. This means the translation must apply the SAME metaphor direction consistently at every zoom level. A crescendo page must have a crescendo TOC, crescendo sections, crescendo components, and even crescendo character-level density.

---

## 7. Enrichment Recommendations for SKILL.md

### Section 4.1 (List Metaphor Physical Properties)
Add the 5-category taxonomy (Spatial, Temporal, Material, Behavioral, Relational) as a systematic extraction framework. Include the completeness checklist.

### Section 4.2 (Express Each Property in System Vocabulary)
Replace with the Translation Grammar Lookup Table (Section 2.1 above). This makes the translation mechanical rather than creative.

### Section 4.3 (Check Internal Coherence)
Expand with the Coherence Matrix methodology (Section 3) and the 5 coherence rules. Add the automated check procedure.

### Section 4.4 (Identify Components to Invent)
Add the Tier 2/Tier 3 formal test (Section 4), the 3-question decision procedure, the adapt-vs-invent decision tree (Section 5.4), and the invention constraints (Section 5.3).

### New Section 4.5 (Transition Grammar)
Add the axis transition lookup table (Section 6.3) so transitions between metaphor domains are deterministic.

### New Section 4.6 (Fractal Consistency Check)
Add the 5-scale fractal consistency requirement (Section 6.4) as a final verification pass.
