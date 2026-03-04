# The Invention Gap: Definitive Research Synthesis

**Research effort:** 7 agents, 3,084+ lines of analysis, 2 pipeline builds dissected, 12 explorations cataloged
**Core finding:** The pipeline produces CSS volume matching explorations (~1,381 lines) but invents 0 novel structural techniques per build vs explorations inventing 5-9 each. The gap is DIMENSIONAL, not volumetric.

---

## Part 1: The Core Thesis

### The Gap in One Sentence

Pipeline builds are one long room with different wallpaper. Explorations are different rooms.

### The Evidence at a Glance

Both pipeline builds (Yegge/Gas Town and Molly/Panopticon) produce substantial CSS: zone backgrounds shift through 5-6 colors, typography compresses from 2rem to 1.375rem, padding oscillates from 80px to 32px and back, border-weight gradients encode hierarchy. The texture is real. The mechanisms are correctly deployed. The atmospheric work is genuine.

But strip the CSS. Look at the HTML skeleton. Both builds reveal the same structure:

```
section > container > section-indicator > h2 > [h3 > prose > component]* > hr
```

Repeated 8-13 times. One spatial organization (vertical single-column), one reading path (top-to-bottom), zero self-aware components, one axis change per build (a single grid moment that appears once and never recurs). The metaphor names the zones ("Overseer Floor," "Instrument Floor") but does not shape them. Every zone is a 960px container with vertically-stacked content. [Source: 02]

Explorations tell a different story. OD-005 uses hub-spoke navigation with named grid areas. OD-006 deploys `writing-mode: vertical-lr` for fractal annotation columns, CSS-only scroll witnesses via `@property`, and 3-column page layouts. AD-005 uses `clip-path: polygon()` for directional transitions. CD-005 creates Z-sweep layouts with golden ratio columns (1:1.618). Each exploration invents 5-9 structural techniques that do not exist in the mechanism catalog. [Source: 01]

### The Dimensional Gap

The gap is not that pipeline builds lack CSS sophistication. It is that they operate in fewer spatial dimensions:

| Dimension | Pipeline Builds | Explorations |
|-----------|----------------|--------------|
| Axis changes per page | 1 | 6+ |
| Distinct spatial skeletons | 2 | 5-8 |
| Self-aware components | 0 | 2-4 |
| Spatial vocabulary terms | 2 (stack, width-vary) | 6+ (stack, grid, hub-spoke, nest, face, bleed) |
| Metaphor reaching DOM structure | 1 moment | Pervasive |
| Novel CSS techniques per build | 0 | 5-9 |

[Source: 02, Table "The Gap in Numbers"]

Pipeline builds operate in the Y-axis (vertical scroll) with X-axis width modulation. Explorations operate in X, Y, and Z (grid layouts, nested structures, layered self-reference, writing-mode changes).

### Why This Matters

The pipeline was designed to apply the design system's visual language to arbitrary content. It does this well. Zone backgrounds, typography compression, metaphor-driven naming, transition corridors -- these are genuine texture achievements. But the pipeline was not designed to DERIVE spatial structure from content. It was designed to apply texture to a default structure. The default is always the same: vertical zone stacking with density variation.

The consequence: every pipeline build, regardless of content, lands on the same spatial form. Content about 8 parallel roles at 3 authority tiers gets the same vertical stack as content about a single philosophical argument. Content about parallel observation domains gets the same linear scroll as content about sequential tutorial steps. The texture varies. The structure does not.

This is not a quality problem -- it is a capability absence. The pipeline cannot produce structural invention because it has no pathway for structural questions to travel from content analysis to CSS implementation. [Source: 03, 05]

### The Question Framework IS the Bottleneck

The types of questions the pipeline asks determine what answers are possible. This is the unifying insight that connects all 7 research documents.

The pipeline asks experiential questions: "What does the reader need to FEEL?" "What does the reader need to UNDERSTAND?" These produce textural answers -- mechanisms that vary visual channels to create atmosphere.

The pipeline does NOT ask structural questions: "What spatial organization does this content's logic demand?" "Could this section use a different reading path?" These would produce spatial answers -- layouts derived from content structure.

The pipeline does NOT ask self-referential questions: "Can this page demonstrate its own thesis?" "Could a component reveal the page's organizational logic?" These would produce meta-structural answers -- self-aware components that make the page's architecture visible.

The question framework is not wrong. It is incomplete. The experiential questions it asks are valuable and produce genuine quality. But the structural and self-referential questions it does NOT ask are precisely the questions that would close the invention gap. [Source: 04]

The user's key insight sharpens this further: the types of questions asked are not just inputs to a process -- they are the DETERMINANTS of the possibility space. Asking experiential questions makes textural richness possible and structural invention impossible. Adding structural questions would not diminish textural quality -- it would expand the possibility space to include spatial invention alongside textural depth. The pipeline's question framework is simultaneously its greatest strength (for texture) and its binding constraint (for structure).

---

## Part 2: The Evidence

### 2.1 The Exploration Invention Catalog

Across 12 explorations (DD-006 through CD-006), 29 structural inventions were cataloged in 5 categories. Zero are fully present in the pipeline's mechanism catalog. 21 are completely absent. 8 are partially represented (an individual mechanism exists, but the compound deployment or content-specific application is not). [Source: 01]

#### Category 1: Spatial Organization Inventions (5 found, 0 in catalog)

These are novel arrangements of content in 2D space that change the reader's eye movement:

- **Hub-Spoke Territory Grid** (OD-005): `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` with solid-offset pseudo-elements on each tile. Tiles are clickable navigation targets, not importance-encoded cells. Creates a spatial jump reading path: reader departs sparse hub, enters dense spoke, returns to sparse hub.

- **Named Grid Areas with Sticky Sidebar** (OD-005): `grid-template-areas: "doctrine references"` with `position: sticky; top: 24px`. Creates a content+reference split within each spoke -- the reader sees context while reading primary content.

- **Z-Sweep with Golden Ratio Columns** (CD-005): `grid-template-areas: "z-term z-def"; grid-template-columns: 1fr 1.618fr`. Alternating rows reverse the grid areas, creating a diagonal Z-pattern reading path. The golden ratio proportion (1:1.618) is entirely uncataloged.

- **Spiral Layout with Named Grid Areas** (AD-006): Decreasing grid cell sizes encode narrowing focus. Content spirals from wide overview to narrow deep-dive, physically encoding the journey from surface to depth.

- **Archipelago Map with Complexity-Coded Tiles** (OD-003): Grid tiles with border-color encoding difficulty level. Functions as a navigational map header, not a content section.

**The CSS signatures of structural invention -- absent from all pipeline builds:**

```css
/* Hub-Spoke Navigation (OD-005) -- zero equivalent in pipeline */
.hub-map { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.hub-tile::after { content: ''; position: absolute; bottom: -6px; right: -6px;
  width: 100%; height: 100%; border: 3px solid var(--color-primary); z-index: -1; }

/* Z-Sweep with Golden Ratio (CD-005) -- zero equivalent in pipeline */
.z-sweep { display: grid; grid-template-areas: "z-term z-def";
  grid-template-columns: 1fr 1.618fr; }
.z-sweep--reverse { grid-template-areas: "z-def z-term";
  grid-template-columns: 1.618fr 1fr; }

/* Spiral Layout (AD-006) -- zero equivalent in pipeline */
.spiral-grid { display: grid;
  grid-template-areas: "wide wide wide" "med med narrow" "deep deep narrow"; }
```

**Pipeline producibility: 0 of 5.** Zero spatial organization instructions exist in any pipeline prompt. The "bento grid" mechanism in the catalog produces importance-encoded cells, not hub-spoke navigation or Z-sweep reading paths.

#### Category 2: Self-Aware Components (7 found, 0 fully in catalog)

These are components that reveal the page's own structure to the reader:

- **CSS-Only Scroll Witness** (OD-006): `@property --progress` + `animation-timeline: view()`. TOC markers fill as sections scroll. The page WITNESSES its own consumption -- entirely CSS-only, no JavaScript. The mechanism catalog's "Scroll Witness" entry requires JavaScript and describes a different technique.

- **Fractal Annotation Layer** (OD-006): `writing-mode: vertical-lr; text-orientation: mixed; transform: rotate(180deg)`. Sticky sidebar with vertical monospace annotations labeling the current fractal scale (PAGE / SECTION / COMPONENT / CHARACTER). The page annotates its own architecture.

- **Geological Column Minimap** (OD-004): Small horizontal bars in the dark header with height encoding confidence level (4px/3px/2px/1px). A miniature overview of the full page structure -- the header previews the page's architecture.

- **Visual Index / Pattern Echo Grid** (OD-006): Grid of small cells each containing a miniature CSS-only visual signature of the pattern it represents. The page provides an at-a-glance visual inventory of its own structural patterns.

- **Recursive TOC with Font Cascade** (OD-006): 3-level TOC where each nesting level uses a different font family (serif/sans/mono). Typography itself signals structural depth.

- **Confidence Switcher** (OD-004): Horizontal segmented control letting readers choose "Facts Only" / "Full Analysis" / "Everything." Interactive filter as a self-aware reading mode selector.

- **Chapter Progress Dots** (OD-001): Square dots (no border-radius) with active/complete/default states adjacent to chapter labels.

**The CSS signatures of self-awareness -- absent from all pipeline builds:**

```css
/* CSS-Only Scroll Witness (OD-006) -- zero equivalent in pipeline */
@property --progress { syntax: "<number>"; inherits: true; initial-value: 0; }
.toc-marker::after { transform: scaleY(var(--progress, 0)); transition: transform 200ms; }
.section-target { animation: track-progress linear both;
  animation-timeline: view(block 95% 5%); }

/* Fractal Annotation Layer (OD-006) -- zero equivalent in pipeline */
.fractal-annotations { writing-mode: vertical-lr; text-orientation: mixed;
  transform: rotate(180deg); position: sticky; height: 100vh;
  font-family: 'JetBrains Mono', monospace; font-size: 11px; }

/* 3-Column Page Architecture (OD-006) -- zero equivalent in pipeline */
.page-grid { display: grid; grid-template-columns: 200px 48px 1fr; }
```

**Pipeline producibility: 0 of 7.** No pipeline instruction creates components that show the page's own structure. Pipeline builds have zero self-aware components -- section indicators are labels ("Section 01 -- Background"), not wayfinding ("here is how the page is organized"). [Source: 02]

#### Category 3: Advanced CSS Inventions (5 found, 0 fully in catalog)

CSS techniques beyond the pipeline's vocabulary:

| Technique | Explorations Using | Pipeline Status |
|-----------|--------------------|-----------------|
| `animation-timeline: view()` | OD-001, OD-004, OD-005, OD-006, all AD, all CD | ABSENT |
| `@property` for CSS-only progress | OD-006 | ABSENT |
| `clip-path: polygon()` as direction signal | AD-005 | ABSENT |
| `writing-mode: vertical-lr` | OD-006 | ABSENT |
| Named `grid-template-areas` | OD-005, AD-006, CD-005 | ABSENT |
| Golden ratio columns (1:1.618) | CD-005 | ABSENT |
| 3-column page layout grid | OD-006 | ABSENT |

These are not exotic CSS -- they are modern CSS capabilities that the pipeline simply has no vocabulary for. `animation-timeline: view()` appears in nearly every exploration. It is absent from every pipeline prompt. [Source: 01]

#### Category 4: Content-as-Form Inventions (6 found, 0 fully in catalog)

Structural choices where CSS values directly encode content meaning:

- **Confidence Strata** (OD-004): ALL visual channels (border: 4px->1px, padding: 40px->16px, font-size, line-height, background) shift simultaneously per confidence stratum. The CSS values encode certainty level. Individual mechanisms (border-weight gradient, spacing compression) exist in the catalog, but their COMPOUND deployment as a unified confidence-encoding system does not.

- **Q&A Conversational Pairs** (OD-001): Question blocks at 60% width with left indent, answer blocks at 100% with 4px left border. Width signals "who is speaking." The Q&A organizational structure driving the width variation is entirely uncataloged.

- **Narrative Act Structure** (OD-002): 3-act CRESCENDO arc where each act has progressively increasing density. The 3-act narrative arc as a structural pattern is not in the catalog.

- **Task Islands** (OD-003): `<details>` elements styled as difficulty-coded collapsible task units. Each island is a self-contained learning unit.

- **Stratum Boundary with Evidence DNA** (OD-004): Epistemic metadata strip showing source counts, confidence basis, and crux markers per stratum. Each stratum carries its own epistemological fingerprint.

- **Bookend Front/Back Structure** (OD-003): Opening bookend with task overview, closing bookend with completion summary. Creates structural symmetry that the catalog's "Footer Mirror" does not describe.

#### Category 5: Compound Components (6 found, 0 fully in catalog)

Multi-zone components that combine layout, interactivity, and meaning:

- **Dual-Lens Why/How Toggle** (OD-006): Two-button toggle switching between conceptual view (serif italic) and implementation view (monospace code-style).

- **Semantic Bridge** (OD-006): Hover on concept text highlights corresponding code. Makes the concept-to-code mapping visible.

- **Core Abstraction Component** (CD-005): Compound container binding principle-zone (serif italic, warm, labeled "CORE PRINCIPLE") with code-zone (dark code block).

- **Pattern Visualization Diagrams** (DD-006, OD-001, OD-005): Custom CSS-only diagrams that visually explain the page's own pattern. Each exploration creates bespoke diagrams -- nested boxes for fractal scales, bar charts for Q/A rhythm, wave bars for hub/spoke oscillation.

- **Reasoning Columns** (CD-005): 3-zone compound structure (header + 2-column grid + summary) richer than the catalog description ("2-column grid with `::before` list markers"). The full compound is partially cataloged but its actual implementation extends beyond what's described.

- **Transition-as-Component** (CD-005): Transitions promoted from spacing rules to full components with headers, content, and callouts. `.transition--smooth` = 48px padding + 1px separator + centered heading. `.transition--bridge` = breathing background + 3px borders + contained callout. The transition grammar describes SMOOTH/BRIDGE/BREATHING as spacing types; CD-005 makes them designed components that reorient the reader. [Source: 01]

**Total inventory:** 29 inventions. 0 fully in catalog. 24 not producible under current pipeline instructions. The gap is not mechanism absence -- individual techniques like border-weight gradient ARE cataloged. The gap is compound deployment driven by content logic.

The per-category breakdown reveals where the gap is sharpest:

| Category | Count | Fully Absent | Partially Present |
|---|---|---|---|
| Spatial Organization | 5 | 5 (100%) | 0 |
| Self-Aware Components | 7 | 6 (86%) | 1 |
| Advanced CSS | 5 | 4 (80%) | 1 |
| Content-as-Form | 6 | 2 (33%) | 4 |
| Compound Components | 6 | 4 (67%) | 2 |

Spatial Organization is 100% absent -- zero partial presence. Content-as-Form is 67% partially present -- the individual mechanisms exist but the compound deployment is not instructed. This distinction matters: the pipeline's vocabulary gap is steepest for spatial organization and self-aware components, while its compound deployment gap is steepest for content-as-form inventions. [Source: 01]

### 2.2 Pipeline Structural Flatness

Both pipeline builds were analyzed by stripping CSS and examining only the DOM structure. A CSS audit of either build would report "8-9 distinct zone treatments with different typographic scales, spacing values, and background colors." In code, the sections look different. But strip the CSS and examine the DOM: every zone uses the same skeleton -- `section > container > section-indicator > h2 > [h3 > prose > component]* > hr`. The "9 section structures" are 1 structure worn 9 ways. CSS variety creates the illusion of structural variety. The findings converge: [Source: 02]

**Yegge / Gas Town (Tower Descent):**
- Skeleton A (Section Block) accounts for 77% of content sections (10 of 13)
- 1 axis change in the entire build (a `2fr 1fr 1fr` grid for 3 Town-Level role cards)
- Every other section reads top-to-bottom in a single column
- The tower descent metaphor is expressed through TEXTURE (zone backgrounds shift, font sizes compress, padding decreases) but not through STRUCTURE (the HTML skeleton is identical in every zone)

**Molly / Panopticon (Observatory):**
- Skeleton A (Section Block) accounts for 86% of content areas (12 of 14)
- 1 axis change (a 4-column grid for 8 instrument panels)
- The observatory metaphor implies a central viewing hub, multiple instruments, radial observation -- none of which reach the DOM structure
- Width oscillation (720px/576px pulse pairs) and zigzag indentation are present but do not change the reading path

The Molly build actually presents MORE skeleton variety than Yegge (8 distinct skeleton types vs 5), which makes the structural flatness conclusion stronger, not weaker. Molly's additional skeletons include: corridor separators (5 transitional bands with bridge text between zones), anti-pattern blocks (title/symptoms/solutions triplets), checkpoint verification boxes, constellation quotes with odd/even indent alternation creating a zigzag, waypoint/inversion moments using negative margins to bleed outside the 960px container, and pulse claim/response oscillation (720px claims vs 576px responses with 40px left indent, ~6 instances in Zone 4). Despite this richer component vocabulary, the reading path remains fundamentally vertical -- none of these patterns change the eye's direction from top-to-bottom. Even with 8 skeleton types, only 1 (the bento grid) creates a genuine axis change.

What would a structural observatory look like? A central hub the reader returns to (the tower center). Different "instruments" that reframe the same content differently. A persistent sense of orientation (always in the tower, looking outward). Non-linear navigation with a hub-spoke layout or view selector. The Molly build has none of these: despite the "panopticon" metaphor implying radial/concentric organization, the structure is vertical. The observatory has no tower center. The panopticon has no central vantage. The instruments don't offer different views of the same content. The metaphor's spatial implications are entirely unrealized in the DOM. [Source: 02]

**Molly's absent spatial relationships** further demonstrate the gap:
1. Hub-spoke layout (despite "observatory" metaphor)
2. Nested layouts (despite multiple observation layers)
3. Side-by-side comparison (comparison table uses `<table>`, not side-by-side panels)
4. Radial/concentric structure (despite "panopticon" metaphor -- the word literally means "all-seeing" from a central point)
5. Overlapping/layered content
6. Self-referential structure

**Cross-build comparison:**

| Dimension | Yegge (Tower Descent) | Molly (Observatory) |
|-----------|-----------------------|---------------------|
| Dominant skeleton | Section block (77%) | Section block (86%) |
| Grid instances | 1 (2fr/1fr/1fr) | 1 (4-column) |
| Axis changes | 1 | 1 |
| Container width | 960px (5 zones), 640px (1) | 960px (all), 720px prose |
| Self-aware components | 0 | 0 |
| Metaphor reaching DOM | 1 moment | 0 moments |

**What the pipeline builds DO achieve structurally:** Both builds have meaningful width modulation. Yegge uses 85% voice eruptions, 90%/60% quote pairs, and a 640px philosophical narrowing. Molly uses 720px/576px pulse pairs, full-bleed dark inversions, and zigzag constellation indentation. These enrich the vertical flow. The ONE grid moment in each build IS genuine structural invention -- Yegge's `2fr 1fr 1fr` role grid encodes operational hierarchy in column sizing, and Molly's 4-column instrument grid encodes simultaneous domains. The border-weight gradient (4px/3px/1px) across role tiers directly maps operational authority to visual weight. These are real design achievements within the vertical model. This is real design work. It is not nothing.

This is the pipeline's spatial vocabulary: one column of varying width. It never becomes two persistent columns. It never creates facing content. It never nests layouts within layouts. It never establishes a non-linear reading path. The width variation is real and perceptible, but it operates within a single axis. [Source: 02]

**But the reading path is essentially identical across 95% of both pages.** The eye movement pattern for Yegge across all 6 zones:

```
Zone 1-6: ↓ section-indicator → ↓ h2 → ↓ prose → ↓ component → ↓ hr → repeat
Exception: Zone 2 has ONE ←→ grid moment (2fr/1fr/1fr for 3 cards)
```

The Molly build reading path shows the same pattern:

```
Zone 1: ↓ section-indicator → ↓ h2 → ↓ prose → [CENTERED WAYPOINT] → ↓ prose
Zone 2: ↓ section-indicator → ↓ h2 → ↓ file-tree → 4-COLUMN GRID [AXIS CHANGE 1] → ↓ prose → ↓ code blocks
Zone 3: ↓ section-indicator → ↓ h2 → ↓ table → ↓ prose
Zone 4: ↓ section-indicator → [DARK INVERSION BLEED] → PULSE claim/response oscillation → ↓ prose
Zone 5: ↓ section-indicator → ↓ code blocks → ↓ anti-patterns → ↓ checkpoints
Zone 6: ↓ constellation-quotes [zigzag] → ↓ mental-model-summary → ↓ table
```

Total axis changes: 1 (the 4-column instrument grid in Zone 2). The constellation zigzag and pulse width oscillation are embellishments to the vertical flow, not true axis changes. [Source: 02]

Compare to exploration pages which typically have 6+ axis changes (bento grids, hub-spoke jumps, side-by-side panels, Z-sweeps, nested drill-downs). Specific exploration counts confirm the gap: DD-006 uses hub grids, nested layouts, scroll witness, and tension bars (4+ structural inventions); CD-006 uses bento grid at climax, velocity interleaving, and fractal nesting (3+); CD-001 uses hub-spoke, bento grid, and dialogic facing (3+). Each exploration's structural invention count exceeds the pipeline's total across both builds combined. [Source: 02]

Both builds have rich metaphors. Neither build has the metaphor generate structure. The metaphor decorates the structure -- it names zones, shifts backgrounds, changes typographic registers. It does not determine whether the HTML is a grid, a hub-spoke, a split-screen, or a nested layout. In explorations, the metaphor GENERATES structure: DD-006's "fractal self-similarity" creates nested layouts that echo at every scale; CD-001's "velocity interleaving" creates alternating fast/slow structural rhythms. The pipeline produces metaphor-as-decoration. Explorations produce metaphor-as-architecture. [Source: 02]

---

## Part 3: The Compression Chain -- Where Structural Questions Die

### The Three Kill Points

Structural questions do not fail to survive the pipeline. They fail to be born. And if by some miracle they were born, they would be killed at three precise points. [Source: 03]

### Kill Point 1: TC Derivation Exemplars

**File:** `tc-derivation.md`, lines 73-75
**What dies:** Structural questions are never generated.

The TC prompt asks for "spatial flow" (line 34) -- the ONLY mention of spatial anything in 96 lines. But its example "good" questions steer entirely toward texture:

> "What if every visual channel compressed as you descend the tower? Typography shrinks, spacing tightens, line-height compresses, letter-spacing neutralizes."

> "What if the code blocks carried the same atmospheric signature as their surrounding zone -- not just syntax-highlighted text in a box, but code that BELONGS to its stratum?"

Both examples are texture questions: how visual channels vary across existing zones. Neither asks about spatial organization: what layout to use, whether to break the reading path, whether a hub-and-spoke grid would serve the content's parallel structure. The TC agent follows exemplars. Exemplars are 100% texture. The TC agent produces texture questions.

A structural question like "What if the 8 roles were arranged in an authority-encoded grid where Mayor spans full width and Workers share a row?" would never be generated because the exemplars do not demonstrate structural questions.

This is not merely a prompt design oversight. It is the manifestation of the theory of design embedded in the pipeline: that design means applying texture to a standard structure. The exemplars encode this theory. The TC agent inherits it. The types of questions generated are not just constrained by the exemplars -- they are constrained by the conceptual framework that produced those exemplars. This is the "external factor" the user identified: the question framework itself, as a product of how design is understood, shapes what the pipeline can discover. The exemplars are not neutral -- they are the pipeline's theory of design made concrete. [Source: 03]

### Kill Point 2: Synthesizer's 5 KB Question Families

**File:** `synthesizer-prompt.md`, lines 246-253
**What dies:** Even if a structural question survived TC, it has no home in the synthesizer.

The synthesizer assembles Section 10 (Compositional Questions) from three sources: TC brief questions (carried verbatim), KB Question Families (2-3 adapted), and cross-specialist synthesis (1). The 5 KB Question Families define the universe of compositional questions:

| Family | Focus |
|--------|-------|
| Certainty Encoding | Visual weight maps to epistemic gradient |
| Fractal Self-Similarity | Same rhythm at N scales |
| Velocity Interleaving | Heavy/light content pairs |
| Atmospheric Signature | Per-zone atmospheric feel |
| Temporal Compression | Density compresses over time |

ALL 5 are texture families. Zero ask about spatial organization. No family asks "What reading path should this page create?" or "Could this content use a non-linear layout?" or "What if different sections used fundamentally different spatial structures?"

Even if a structural question emerged from TC, the synthesizer has no KB family to categorize or reinforce it. A structural question would be an orphan -- uncategorizable, unreinforced, likely dropped during adaptation. [Source: 03]

### Kill Point 3: Builder's Invention Prohibition

**File:** `builder-pass-1-prompt.md`, lines 362-363, 383-385
**What dies:** Even if a structural question survived TC AND the synthesizer, the builder cannot act on it.

The builder prompt contains two explicit constraints:

> **Line 362-363:** "Do NOT invent mechanisms that aren't in the package -- the package was curated by specialists who read the full knowledge base. Trust its selections."

> **Lines 383-385:** "You have creative authority on HOW, not WHETHER. The research package's mechanism selections, zone architecture, and findings represent curated intelligence from 26,528 lines of accumulated knowledge. Your authority is in HOW you deploy them -- what CSS values, what visual weight, what rhythm."

The builder cannot invent. The builder cannot restructure. The builder applies mechanisms to zones. The zones come from the package (always vertical). The mechanisms come from the catalog (always texture). Creative authority is limited to CSS values within predetermined spatial structures.

The mechanism catalog functions as a CEILING on structural vocabulary, not a FLOOR. The "Do NOT invent mechanisms not in the package" constraint means the catalog's 20 mechanisms are the maximum structural vocabulary available to the builder -- not a minimum to build upon. This is appropriate for texture (the catalog represents curated knowledge), but catastrophic for spatial structure (the catalog contains zero spatial organization techniques). The catalog as ceiling is a feature for texture and a bug for structure. [Source: 07]

Line 218-219 permits "structural plumbing" (layout grid, responsive breakpoints) but explicitly prohibits mechanism invention. The truly interesting structural decisions -- what layout to use, what reading path to create, whether to break from single-column flow -- fall into neither category. They are in a dead zone between plumbing and mechanisms.

**Pass 2** doubles down: "Map findings from Section 3 to EXISTING zones. Do not create new zones." **Pass 3** locks it: "Do not restructure the zone architecture." [Source: 03]

### The Complete Chain

```
STAGE 1: Content -> TC Agent
  TC exemplars are 100% texture questions
  STRUCTURAL QUESTIONS GENERATED: ~0%

STAGE 2: TC Brief -> 5 Specialists (parallel)
  S1 (Findings Analyst): FILTER, not GENERATOR -- rates 337 existing findings, cannot create new ones
  S2 (Provenance Tracer): VALIDATOR, not inventor -- traces backward, cannot propose untested ideas
  S3 (Case Study Analyst): Reads explorations WITH 29 structural inventions, extracts CSS only, discards structural reasoning
  S4 (Creative Mapper): Closest to structural authority but framing is cartographic (what exists) not generative (what could exist)
  S5 (Protocol Analyst): Protocol-only, zero structural content
  STRUCTURAL QUESTIONS: Still ~0%

STAGE 3: Specialist Outputs -> Synthesizer
  5 KB Question Families: ALL texture families
  Section 10: 5-7 questions, ALL texture
  STRUCTURAL QUESTIONS: 0% (guaranteed)

STAGE 4: Package -> Builder (3-pass rotation)
  Pass 1: "Do NOT invent" + "HOW not WHETHER"
  Pass 2: "Do not create new zones"
  Pass 3: "Do not restructure"
  STRUCTURAL QUESTIONS: 0% (prohibited)

FINAL OUTPUT: Rich texture, zero structural invention
```

This is not a bug in any single file. It is a systemic property: the pipeline's information architecture has no pathway for structural questions to travel from content analysis to CSS implementation.

**Forensic summary statistics:** [Source: 03]

| Metric | Count |
|--------|-------|
| Total prompt files analyzed | 10 |
| Files mentioning spatial organization | 3 |
| Files encouraging structural invention | 0 |
| Files prohibiting structural invention | 3 |
| KB question families that are structural | 0 of 5 |
| Example questions that are structural | 0 of 4 |
| Points where structural questions can be BORN | 1 (TC derivation) |
| Points where structural questions are KILLED | 3 (synthesizer, builder pass 1, builder pass 3) |

**Ceiling-to-floor ratio gradient:** The pipeline's prohibition language intensifies along the data flow. TC derivation has a healthy ratio (~0 "Do NOT" instructions, ~5 "must include", 2+ creative invitations). Specialist prompts have 7 "Do NOT" instructions against 0 "Explore" or "Invent." Builder Pass 1 has 3 high-impact ceiling constraints against 2 low-impact floor permissions (the "explore" permissions apply to texture questions that are already non-structural). The pipeline becomes progressively more restrictive as information flows from conception to execution.

**Could the pipeline produce these specific structural inventions?** A test of three specific techniques against the chain:

1. **Hub grid (OD-005):** TC could observe "parallel territories." Specialists cannot propose grids (no instruction). Synthesizer has no structural question family for "parallel items → grid." Builder explicitly prohibited from inventing mechanisms. Pipeline answer: **NO.**
2. **Clip-path transitions (AD-005):** TC could notice "directional change." Specialists cannot propose CSS techniques outside findings. `clip-path: polygon()` is not in the mechanism catalog. Builder cannot invent. Pipeline answer: **NO.**
3. **Vertical text annotation (OD-006):** TC has no exemplar for spatial axis questions. `writing-mode: vertical-lr` is not a mechanism. No specialist, no question family, no builder permission. Pipeline answer: **NO.**

### The TC Brief Almost Gets There

This is the cruelest detail. The TC briefs for both builds contain explicit structural intelligence:

**Yegge TC brief:** "8 roles = 8 identical cards -- the builder must RESIST this."

**Molly TC brief:** "Eight domains exist simultaneously. The architecture IS the parallelism. But the page scrolls linearly. How does simultaneity live in sequence?" And: "The builder should explore whether these can live in a grid -- 2x4, or perhaps 4+4 with work domains on one row and life domains on another."

The TC agent IS capable of structural observation. It just has no DESIGNATED OUTPUT SECTION for it. Structural intelligence appears as creative waypoints -- optional invitations that the synthesizer is free to compress or ignore. And it does. By the time the builder receives the package, "explore whether these can live in a grid" has become "Zone 2: dense, instruments, 40-48px padding." [Source: 05]

---

## Part 4: The Question Taxonomy -- What's Missing

### The 7-Category Framework

Every compositional question falls into one of 7 categories. The pipeline has strong coverage of 4 categories and zero coverage of 3. The missing categories are precisely those that would produce structural invention. [Source: 04]

#### Categories with STRONG Pipeline Coverage

**Category 1: Identity/Compliance** -- "Does this violate soul principles?"
Binary constraint checking. Pass/fail. Multiple enforcement points. This is the pipeline's most robust category.

**Category 2: Mechanism Selection** -- "Which mechanisms from the known vocabulary should be deployed?"
Selection from a finite set. The 20-mechanism catalog with grammar rules and sequencing constraints. Produces textural richness, multi-channel encoding. Does NOT produce novel spatial arrangements.

**Category 4: Experimental/Generative** -- "What if [unexpected correlation] exists between X and Y?"
Hypothesis generation. TC's multi-axis questioning framework (FEEL/UNDERSTAND/DO/BECOME) generates rich experimental hypotheses. This IS the pipeline's crown jewel. It produces coordinated multi-channel effects and novel density correlations.

**Category 5: Opposition/Adversarial** -- "What if this section contradicted the previous one?"
Tension testing. TC Phase 2's tension derivation is fundamentally an opposition engine. It creates compositional energy that prevents monotony.

#### Categories with ZERO Pipeline Coverage

**Category 3: Multi-Axis Structural** -- "What spatial organization matches this content's internal logic?"

This is the central absence. Category 3 questions are INVENTIVE -- no finite menu exists. The answer is generated from content analysis. Examples from explorations:

- OD-004: "Organize by confidence level" --> geological stratification with inversely correlated density
- OD-005: "Organize spatially as hub-and-spoke" --> map topology with central hub + spoke navigation
- AD-005: "What if direction change IS density change?" --> kinetic choreography
- CD-005: "3 axis patterns coexist sequentially" --> Z-Pattern -> SMOOTH -> F-Pattern -> BRIDGE -> Bento

What makes Category 3 distinct:
1. No catalog to select from -- each exploration INVENTED its spatial form
2. Content-dependent -- topology emerges from the content's nature, not from tool availability
3. Generates the SKELETON -- mechanisms are flesh on bones; Category 3 generates the bones
4. Operates at macro scale -- page architecture, not component styling

Category 3 has two sub-types:
- **3a: Content-Derived Structure** -- the content's internal logic determines spatial form (the strongest sub-type)
- **3b: Experience-Derived Structure** -- the desired reading experience determines spatial form

**Category 6: Meta/Self-Referential** -- "Can the page document/demonstrate/show its own structure?"

Recursive. The page becomes ABOUT itself. Content and form become the same thing:

- OD-006: "A page that documents itself" -- uses each of 5 prior organizational patterns in sequence
- DD-006: "Fractal self-similarity visualized by a page that IS fractal"
- AD-006: "Is there a meta-equivalence unifying all 4 mechanisms?" -- the page about compound axis IS a compound axis

Category 6 produces the deepest possible content-form coupling. When a page IS its own argument, every structural choice becomes semantically load-bearing.

**Category 7 (Content Logic)** -- After analysis, this collapses into Category 3a for 4 reasons: (1) same gap location -- both absent from the same pipeline stages; (2) same output type -- both produce page-level structural decisions; (3) content logic IS the primary driver of Category 3 -- when explorations invented novel structures, they almost always did so by analyzing what the content IS (OD-004: confidence levels → strata; OD-005: hub-spoke relationships → hub-spoke navigation; OD-006: 5 org patterns → 5 org patterns in sequence; CD-005: 3 axis patterns → 3 axis patterns sequentially); (4) but Category 3 also includes non-content-driven structural questions -- "How should the reader's eyes move?" (reading path design), "Can different sections use different spatial topologies?" (structural variety), "What if the page changed axis mid-scroll?" (structural surprise).

Category 3a (content-derived) is the strongest sub-type because it produces the tightest content-form coupling. Category 3b (experience-derived) also matters -- some structural decisions serve the reading experience even when the content doesn't demand a specific topology. [Source: 04]

### The Question Framework Shapes the Possibility Space

This is the user's key insight, and it is the thesis that unifies the entire analysis.

The pipeline asks experiential questions (FEEL/UNDERSTAND/DO/BECOME). Experiential questions produce experiential needs. Experiential needs resolve to texture mechanisms:
- FEEL --> color, typography weight, spacing rhythm = **texture**
- UNDERSTAND --> hierarchy, causality, comparison = **can be structural, but TC resolves it via mechanisms, not topology**
- DO --> task progression, decision points = **components**
- BECOME --> progressive revelation = **density pattern**

The missing axis would be **STRUCTURE**: "What does this content look like if you drew its argument as a spatial diagram?" This question would produce:
- "The content has 5 parallel arguments" --> grid topology
- "The content builds through 3 stages" --> crescendo with physically growing sections
- "The content is a dialogue" --> side-by-side or alternating topology
- "The content has a central thesis with 6 branches" --> hub-and-spoke
- "The content has 3 phases using different modes" --> sequential multi-axis

None of these outputs are generated by FEEL/UNDERSTAND/DO/BECOME. They are generated by analyzing the content's LOGICAL STRUCTURE and translating it to spatial form. The question framework determines the answer space. Expanding the framework -- adding structural and self-referential question families alongside the existing experiential families -- would expand the possibility space without diminishing what the pipeline already does well.

But the user's insight goes further: the question framework is not merely an input to the pipeline. It is an external factor that shapes what the pipeline CAN discover. The types of questions derive from how we understand the relationship between content and form. If we understand design as "apply texture to a default structure," we ask texture questions. If we understand design as "derive structure from content logic, then apply texture," we ask structural questions first and texture questions second. The pipeline's theory of design -- texture applied to a standard spatial structure -- is encoded in its question framework. Changing the framework requires changing the theory.

### Pipeline Stage Mapping

| Category | TC (Phase 1-3) | TC (Phase 4) | Builder | PA |
|----------|----------------|--------------|---------|-----|
| 1. Identity/Compliance | Side B constraints | -- | Soul enforcement | Violation detection |
| 2. Mechanism Selection | -- | Mechanism extraction | Instantiation | -- |
| 3. Multi-Axis Structural | **ABSENT** | **ABSENT** | **ABSENT** | **ABSENT** |
| 4. Experimental/Generative | Core engine | -- | -- | -- |
| 5. Opposition/Adversarial | Tension derivation | -- | -- | Experiential eval |
| 6. Meta/Self-Referential | **ABSENT** | **ABSENT** | **ABSENT** | **ABSENT** |

[Source: 04]

---

## Part 5: Content-Form Derivation -- The Missing Causal Chain

### How Explorations Derive Structure from Content

In every exploration analyzed, a consistent pattern emerges: the content's SUBJECT becomes its FORM. [Source: 05]

**OD-004 (Confidence-Based Structure):** Content about API best practices organized by confidence level. The content has a natural EPISTEMIC GRADIENT -- some things are established, others speculative, others open. The designer recognized this and encoded it spatially: 4 geological strata where density correlates INVERSELY with confidence. Certain things breathe (sparse), uncertain things compress (dense -- because uncertainty demands more evidence, caveats, hedging). Derivation type: DIRECT. The organizational principle is isomorphic to the content's structure.

**OD-005 (Hub-Spoke Spatial):** Content about React component architecture across 6 territory zones. The content describes 6 independent but related architectural territories -- inherently a hub-and-spoke topology. The designer built a sparse hub map showing all 6 territories simultaneously, with dense spoke sections for each. WAVE density oscillation (Hub sparse -> Spoke dense -> Hub sparse) is the natural rhythm of hub-spoke navigation.

**OD-006 (Emergent Synthesis):** Content about the design system documenting ITSELF using 5 prior organizational patterns in sequence. Each section's organizational mode IS its density pattern. The page proves its own thesis: organization and density are the same phenomenon. Zero explicit density manipulation was needed -- the content's structure produced the density.

**DD-006 (Fractal Self-Similarity):** Content about fractal density. The page demonstrates self-similarity at 4 scales: page (alternating dense/sparse major sections), section (intro-detail-reflection), component (callout label-body), character (code comments-logic). The form IS the argument.

**AD-006 (Compound Axis Patterns):** Content about whether all axis patterns can coexist. Musical structure: verse-chorus-bridge-verse. Each section demonstrates a different axis pattern. Compound-is-sequential (AD-F-024): patterns coexist by being sequential, not simultaneous.

### The Derivation Pattern

1. The content's SUBJECT contains structural implications
2. The designer RECOGNIZED the implications and encoded them spatially
3. The resulting form IS the content's argument -- the medium becomes the message
4. Structural variety emerged NATURALLY -- no two explorations share the same spatial structure because no two content subjects share the same organizational logic

### The Causal Reversal in the Pipeline

**Exploration order:** Content analysis --> Structural question --> Spatial topology --> Metaphor as implementation tool

**Pipeline order:** Content analysis --> Experiential needs --> Tension --> Metaphor --> Structure follows from metaphor

In explorations, the hypothesis question PRECEDED the metaphor. OD-004 asked "what if organized by confidence?" FIRST, and the geological metaphor was the IMPLEMENTATION of that structural insight. In the pipeline, the metaphor comes from TC's tension derivation, and structural decisions follow from the metaphor. The causal order is reversed. [Source: 04, 05]

This reversal means structural decisions are constrained by whatever metaphor was selected, rather than the metaphor being constrained by what the content's structure demands. The pipeline produces metaphor-driven texture. Explorations produce content-driven structure with metaphor-inflected atmosphere.

### Equal Partners, with Emphasis on Content Logic

The user's answer to the probing question about metaphor vs content logic is precise: they should be EQUAL PARTNERS, with emphasis on content logic and spatial structures. Not metaphor-first (current pipeline), not content-logic-first (pure Category 3). Both contribute. But when they conflict -- when the metaphor suggests a certain atmosphere and the content logic suggests a certain topology -- content logic and spatial structure get priority.

This means the derivation chain should be:

1. **OBSERVE content structure** -- what is the content's inherent organizational logic? (parallel, hierarchical, dialogic, progressive, recursive)
2. **DERIVE spatial topology** from content logic -- what layout does this structure imply? (grid, hub-spoke, strata, side-by-side, fractal)
3. **DERIVE metaphor** from emotional/experiential analysis -- what atmosphere serves the reader?
4. **INFLECT topology with metaphor** -- a "tower" hierarchy is different from a "geological" hierarchy (same spatial structure, different atmosphere)

Currently the pipeline does steps 3 and 4 but skips steps 1 and 2 entirely.

Importantly, metaphor is not demoted to mere decoration in this model. Metaphor can SUGGEST structural forms: "tower" suggests vertical compression, "observatory" suggests radial observation, "archipelago" suggests island clusters. The difference is that in the corrected model, metaphor-suggested structures are validated against content logic rather than assumed as default. A "tower" metaphor for content with 8 parallel roles should trigger the question: "Does this content actually descend hierarchically, or are these parallel entities that happen to be described using a vertical metaphor?" Content logic and metaphor are equal partners, but content logic arbitrates when they conflict. [Source: 05]

### Why Explorations Self-Instruct

There is a deeper reason explorations achieved structural invention: their content was ABOUT spatial concepts. DD-006 about fractal self-similarity naturally produced fractal layout. OD-004 about confidence gradients naturally produced strata. When the content's subject matter IS spatial logic, the builder derives spatial structure automatically because the content self-instructs about form.

When content is about non-spatial subjects (auth middleware, Gas Town roles, cooking recipes), no self-instruction occurs. The builder has no automatic mechanism to derive spatial structure from content about non-spatial subjects. The builder falls back to the default: F-pattern with zones, mechanisms as atmospheric texture.

This is why the pipeline needs EXPLICIT structural derivation: to do for all content what design-system content does for itself. The TC Structural Observation replaces the content's self-instruction with explicit instruction. Content-form derivation is currently a TACIT CAPABILITY of Opus-level agents working in exploration mode. Making it explicit -- extractable, teachable, packageable -- is the prerequisite for the pipeline to produce structurally diverse output. [Source: 05, 06]

### What the Pipeline Actually Produced vs What Content Logic Implies

**Yegge / Gas Town -- Structural Implications the Pipeline Missed:**

The content has 8 parallel roles organized in a 3-tier command hierarchy (Town/Rig/Worker). Content logic implies:

1. **Authority-encoded grid:** 8 roles at 3 tiers --> a grid where Mayor (Town-level) occupies 2x spatial footprint. Pipeline produced one `2fr 1fr 1fr` grid for 3 cards -- the principle doesn't propagate.

2. **Physical narrowing:** "Programmer" --> "factory manager" implies spatial compression. Wide breathing space for the individual human gives way to compressed tiled machinery for the collective. Pipeline uses vertical stacking for everything.

3. **Persistent sidebar for cross-cutting systems:** Beads memory and mail system cut across ALL roles -- could be a persistent visual element accompanying role sections. Instead, Beads gets its own sequential zone.

4. **Hub-spoke for role taxonomy:** 8 roles are parallel independent entities (same structural logic as OD-005). Reader could navigate a hub map and drill into each. Instead: linear scroll through all 8.

**Molly / Panopticon -- Structural Implications the Pipeline Missed:**

The TC brief EXPLICITLY proposes a grid: "The builder should explore whether these can live in a grid -- 2x4, or perhaps 4+4 with work domains on one row and life domains on another." By the time the builder receives the package, this has become "Zone 2: dense, instruments, 40-48px padding."

1. **8-domain grid:** TC's Creative Waypoint 2 explicitly proposes it. The build does not use it.
2. **Side-by-side observation/journal:** Two modes (data collection / reflection) could be spatially juxtaposed. Instead: sequential vertical zones.
3. **Correlation chamber:** 8 instruments converging on a synthesis node. Could be a visual convergence point where streams overlay. Instead: another sequential zone.
4. **Spatial inversion:** Panopticon-to-observatory inversion could manifest as a literal spatial reversal. Instead: expressed through prose and zone naming.

In both cases, the TC brief was acutely aware of the structural challenge. The structural intelligence died in the synthesizer because there was no designated section for spatial topology. [Source: 05]

---

## Part 6: Beyond Explorations -- Structural Invention for Any Content

### The Universal Structural Questions

The explorations were about design system concepts, so meta-documentation was a natural fit. But structural invention is not limited to meta-documentation. Every piece of content has inherent organizational logic. Four universal questions expose it: [Source: 06]

**Q1: What are the content's natural groupings?**

| Relationship | Spatial Implication |
|---|---|
| Parallel items (peers) | Grid or bento |
| Hierarchy (parent-child) | Nested containers, indentation |
| Progression (ordered sequence) | Linear flow with crescendo |
| Dialogue (call and response) | Q&A pulse, width-alternating |
| Taxonomy (category > members) | Hub-spoke or strata |
| Opposition (tension between poles) | Side-by-side, facing layouts |
| Accumulation (additive collection) | Uniform grid or list |

These relationships are INHERENT in content, not imposed by design. The question is whether spatial structure MATCHES content logic or IGNORES it.

**Q2: What spatial relationships exist between ideas?**

Comparison (A vs B) --> side-by-side columns. Dependency (A requires B) --> nesting, containment. Radiation (center to periphery) --> hub-spoke. Stratification (layers) --> vertical stacking with zone differentiation. Interleaving (A,B,A,B) --> alternating rhythm.

**Q3: What is the content's natural reading rhythm?**

Dense reference demands compressed spacing, bento islands, progressive disclosure. Narrative flow demands generous spacing, linear progression, breathing zones. Tutorial steps demand stepped islands with checkpoints. Mixed register demands velocity modulation.

**Q4: Where does the reader need orientation?**

Entry --> map/overview establishing the whole. Transition --> wayfinding signals at domain shifts. Depth --> progressive disclosure. Return --> synthesis mirroring the opening. Decision --> matrix at the point of choice.

### Content Archetypes and Natural Structures

Content falls into recognizable archetypes, each with natural spatial structures that emerge from organizational logic: [Source: 06]

**Tutorial/How-To:** Sequential task completion. Natural structures: task islands (self-contained steps), stepped progression (visual markers encoding sequence), checkpoint zones (breathing verification moments), forking paths (side-by-side for branching).

**Reference/Catalog:** Parallel access to independent items. Natural structures: hub-spoke (overview + drill-down), bento grid (card size encodes importance), progressive disclosure (summary visible, detail on demand).

**Argument/Persuasion:** Narrative arc with building tension. Natural structures: act structure (spatial acts with climax), objection/response pairs (spatial dialogues), evidence cascades (blocks building toward conclusion), crescendo (density increases toward climax).

**Comparison/Decision:** Evaluate multiple options against shared criteria. Natural structures: side-by-side columns (parallel viewing), comparison grid, decision tree (branching path), highlighted winner (spatial prominence for recommendation).

**Exploration/Deep-Dive:** Spiral from overview to detail to synthesis to deeper detail. Natural structures: spiral (width encodes abstraction level), zoom levels (establishing/medium/close-up/pull-back), layer reveal.

**Taxonomy/Classification:** Category structure. Natural structures: strata, hub-spoke, nested indentation, matrix.

**Timeline/Narrative:** Events ordered by time with causal connections. Natural structures: timeline (chronological axis with variable event weight), parallel timelines (side-by-side for simultaneous threads), "you are here" positioning.

**Dialogue/Q&A:** Alternating voices. Natural structures: Q&A pulse (alternating widths), voice differentiation (font/weight/color per speaker), thread branching.

**Decision/Branching:** "When to use X vs Y." Natural structures: branching paths, decision matrix, conditional visibility. Distinct from Comparison in that it implies a CHOICE, not just evaluation.

### Content Archetype Quick Reference

This table could be directly inserted into a TC or synthesizer prompt as a lookup reference for content archetype identification: [Source: 06]

| Archetype | Signal Words | Natural Layout | Key Spatial Question |
|-----------|-------------|----------------|---------------------|
| Tutorial | "Step 1...", "Install...", "How to..." | Task islands, stepped progression | What is the dependency chain? |
| Reference | "API", "Endpoint", "Parameters" | Hub-spoke, bento grid, index | What is the access pattern? |
| Argument | "Because...", "Therefore...", "Consider..." | Act structure, crescendo | Where is the climax? |
| Comparison | "vs", "Unlike", "Compared to" | Side-by-side columns, grid | Can items be viewed simultaneously? |
| Exploration | "Deep dive", "Under the hood" | Spiral, zoom levels | What are the abstraction layers? |
| Taxonomy | "Types of...", "Categories" | Strata, hub-spoke, nested | How deep is the hierarchy? |
| Timeline | "History", "Evolution", "Waves" | Chronological axis, act structure | Where is "now"? |
| Dialogue | "Q&A", "Interview", quotes | Alternating blocks, voice differentiation | How many voices? |
| Decision | "When to use", "Which one" | Branching paths, matrix | What are the decision criteria? |

### Applied to Yegge Gas Town

The Gas Town content is a HYBRID combining at least 5 archetypes: [Source: 06]

| Section | Primary Archetype | Natural Layout |
|---------|-------------------|----------------|
| 8 Roles Architecture (~25%) | Taxonomy/Classification | BENTO GRID with tiered sizing |
| Implementation Guide (~15%) | Tutorial/How-To | TASK ISLANDS with checkpoints |
| Core Principles + 6 Waves (~10%) | Argument/Persuasion | CRESCENDO with climax |
| Decision Matrix (~10%) | Comparison/Decision | SIDE-BY-SIDE columns |
| Quotes (~5%) | Dialogue | VOICE DIFFERENTIATION, thematic clustering |

A single spatial pattern (F-pattern with uniform zones) cannot serve 5 archetypes simultaneously. The page that serves ALL these archetypes would have spatial structure that CHANGES as the archetype changes. This is what structural invention means for non-design-system content: not applying one layout uniformly, but deriving the appropriate spatial logic for each section based on what the content IS.

The pipeline's approach -- vertical zones with density variation -- serves the Argument sections adequately (crescendo IS about density progression). But it fundamentally underserves the Taxonomy section (8 parallel roles flattened to a sequential list), the Tutorial section (steps without spatial encoding), the Comparison section (sequential tables instead of simultaneous viewing), and the Dialogue section (flat list instead of thematic clusters).

### What Natural Derivation Would Look Like for Yegge Gas Town

If the pipeline had the three-level structural system (TC observes, Synthesizer questions, Builder invents), here is what each stage would produce for the 8-Roles section:

**TC Structural Observation (Level 1 -- OBSERVE):**
> **Content archetype:** TAXONOMY (8 items, 3 tiers, hierarchical)
> **Inherent spatial logic:** 8 parallel roles at 3 authority levels (Town: Mayor/Deacon/Dogs, Rig: Refinery/Polecat, Worker: Witness/Crew, Meta: Overseer). Not a flat list -- an operational hierarchy where authority level determines scope and visibility. Cross-cutting systems (Beads, mail) span all tiers.

**Synthesizer Structural Question (Level 2 -- QUESTION):**
> How should 8 parallel items at 3 authority levels be arranged so the reader sees the hierarchy from LAYOUT alone, before reading any text? Can the spatial distribution encode that Mayor coordinates while Crew executes?

**Synthesizer Spatial Blueprint (Level 2 -- BLUEPRINT):**
```css
/* Authority-encoded grid: card size = authority */
.role-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.role-card--town { grid-column: 1 / -1; border-left: 4px solid var(--color-primary); }
.role-card--rig { border-left: 3px solid var(--color-border); }
.role-card--worker { border-left: 1px solid var(--color-border-subtle); }
/* Mayor spans full width = authority */
/* Rig roles share a row = peer coordination */
/* Workers share a row = equal operational scope */
```

**Builder Invention (Level 3 -- INVENT):**
The builder receives the question and blueprint, then invents the specific implementation -- potentially adopting the grid blueprint, modifying it to add progressive disclosure via `<details>` within cards, or proposing an alternative spatial form if the content suggests one during building.

This three-level derivation would produce a page where the 8-role section has a fundamentally different spatial structure than the philosophical argument section, which has a different structure than the tutorial section. The texture still varies (PULSE, CRESCENDO, zone backgrounds). But now the STRUCTURE also varies, derived from what each section's content IS.

**Specific missed opportunities in the Gas Town build:** [Source: 06]

1. **Implementation Guide laid out as uniform blocks** instead of task islands with step numbering, spatial checkpoints, and visual connectors between dependent steps. The pipeline demoted two checkpoint callouts to inline `<strong>` text (density management overriding content structure).

2. **Three comparison tables presented sequentially** instead of a single grid enabling parallel evaluation of all 4 orchestrators.

3. **15 quotes as a flat list** despite having thematic groupings ("On the Core Philosophy," "On Expectations," "On Prerequisites") that could form a bento grid with cluster-sized cards.

4. **6 Waves table with no "you are here" highlighting** -- Wave 6 (the CURRENT wave) gets identical treatment to Wave 1. The TC brief explicitly identified this as Creative Waypoint 3.

5. **ASCII diagrams as uniform code blocks** -- the role hierarchy diagram (the page's thesis in spatial form) gets no more spatial prominence than a 4-line shell command.

### Applied to Molly Panopticon -- the 8-domain section

**TC Structural Observation (Level 1 -- OBSERVE):**
> **Content archetype:** REFERENCE/CATALOG (8 parallel domains, each independent, all observed from a central vantage)
> **Inherent spatial logic:** 8 simultaneous observation domains -- inherently parallel, not sequential. The reader should see all 8 at once before diving into any one.

**Synthesizer Structural Question (Level 2 -- QUESTION):**
> Can the 8 domains be presented so the reader sees them simultaneously -- as an observatory instrument panel -- rather than scrolling through them sequentially? Can the reader choose which domain to examine first?

**Builder Invention (Level 3 -- INVENT):**
The builder receives the question and might implement a persistent 2x4 grid with progressive disclosure: each domain card shows a summary visible at all times, with `<details>` for drill-down. The grid persists as a navigational hub. Work domains on one row, life domains on another, encoding the work/life categorization spatially. The TC brief explicitly proposed this grid -- "perhaps 4+4 with work domains on one row and life domains on another" -- but it died in the synthesizer.

### Applied to the Implementation Guide (Tutorial archetype)

**TC Structural Observation (Level 1 -- OBSERVE):**
> **Content archetype:** TUTORIAL (sequential steps with dependencies)
> **Inherent spatial logic:** 5 dependent steps (Install, Add Rig, Start Roles, Setup tmux, Daily Workflow). Each step requires completion of the previous. Checkpoints exist between step clusters.

**Synthesizer Structural Question (Level 2 -- QUESTION):**
> Can the 5 tutorial steps be made visually self-contained so the reader can focus on one task at a time? Can checkpoint moments be spatially distinct from task steps?

**Synthesizer Spatial Blueprint (Level 2 -- BLUEPRINT):**
```css
/* Task islands with step indicators */
.task-island { border: 1px solid var(--color-border); border-radius: 8px;
  padding: 24px; margin: 24px 0; position: relative; }
.task-island::before { content: 'Step ' attr(data-step);
  position: absolute; top: -12px; left: 16px;
  background: var(--color-bg); padding: 0 8px; font-weight: 500; }
.checkpoint { background: var(--color-success-bg); padding: 16px;
  border-left: 3px solid var(--color-success); margin: 32px 0; }
```

**Builder Invention (Level 3 -- INVENT):**
The builder receives the question and blueprint. May adopt task islands directly, or invent an alternative that serves the tutorial archetype -- perhaps a scrollable step indicator in the margin, or a progress bar that fills as sections pass. The builder also decides whether checkpoint callouts deserve spatial prominence (full-width breathing moments) or inline treatment based on content weight.

These three examples (Taxonomy, Reference/Catalog, Tutorial) demonstrate that the three-level model is general: the structural question changes based on the content's nature, but the OBSERVE → QUESTION → INVENT flow is constant. [Source: 06]

### Archetype Transitions as Spatial Events

When content shifts archetypes -- from Taxonomy (8 Roles) to Exploration (Beads Memory) -- the spatial transition is itself a design event. The reader should feel the shift in the page's spatial logic, not just see a new heading:

- The grid layout of the Taxonomy section doesn't just stop; it resolves into a transition element
- The Exploration section's spiral logic introduces itself through a different spatial register (narrower container, different density, background shift)
- The transition between archetype-appropriate layouts is itself a structural invention -- not just a zone boundary but a LOGIC boundary

This is the tier above mechanism deployment. Background shifts, border changes, and typography changes serve archetype transitions, but the DECISION of what archetype-appropriate layout to use for each section is the structural invention itself. [Source: 06]

---

## Part 7: Pipeline Implications -- What Must Change

### The v1.1 vs v2.0 Distinction

The pipeline improvement path has two distinct layers: [Source: 07]

**v1.1 (Texture Depth):** Richer multi-channel coordination within existing spatial structures. Moving from 3-4 channel coordination to 5-7 channels per compositional idea. A painter using 7 pigments per brushstroke instead of 3. Same canvas shape.

**v2.0 (Structural Invention):** Content-derived spatial organization. Novel reading paths, self-aware components, section-specific layouts. A painter who can choose the canvas shape -- sometimes rectangular, sometimes circular, sometimes with windows cut through to another painting beneath.

These are compatible and complementary:
- v1.1 without v2.0: Rich texture, standard layout. Professionally designed but structurally conventional.
- v2.0 without v1.1: Novel spatial structures with flat texture. Interesting shapes, uniform surfaces.
- v1.1 + v2.0: Novel spatial structures with rich multi-channel texture within each. The target.

### Stage-by-Stage Changes

**Stage 1: TC Derivation** [Source: 07]

Add a 7th mandatory section: **Structural Observation**

The TC agent already has partial capability -- briefs contain structural observations as creative waypoints. Making it mandatory with a specific format (content logic --> structural implication --> spatial proposition) would ensure structural intelligence survives compression.

Current TC output (metaphor only):
> "This content lives in a world of industrial control towers..."

Required addition (structural observation):
> **STRUCTURAL OBSERVATION:** This content has 8 parallel roles organized in a 3-tier command hierarchy. Cross-cutting systems span all tiers.
> **STRUCTURAL IMPLICATION:** Parallel entities at varying authority --> spatial form should encode authority through SIZE and parallelism through SIMULTANEITY.
> **SPATIAL PROPOSITION:** The 8-role section should be an authority-encoded grid, not a vertical list.

**Stage 2: Specialists** [Source: 07]

- **S1 (Findings Mapper):** Add "Spatial Implication" field to HIGH findings
- **S3 (Case Study Analyst):** Add "Structural Logic Extraction" -- WHY did this exploration use a grid here? (Currently extracts CSS patterns but not structural reasoning)

S3 is the most significant specialist gap. The Case Study Analyst reads validated explorations -- the same explorations that contain 29 structural inventions. But S3 extracts "process" and "adapted CSS," not "structural reasoning." The question "WHY did this exploration use a grid here?" is never asked. S3 literally encounters structural invention on every read and systematically discards the structural logic, retaining only the CSS. Adding "Structural Logic Extraction" -- documenting WHY an exploration used a particular spatial form -- would feed content-derived structural reasoning into the synthesizer. [Source: 07]

- S2, S4, S5: Minimal changes (S2: validate spatial implications alongside findings; S4: add spatial anti-patterns like "avoid grids for hierarchical content"; S5: note non-linear reading paths in consumption protocol)

**Stage 3: Synthesizer** [Source: 07]

Three changes, two of them high-impact:

1. **Add Category 3 structural question families to Section 10:**

| Family | Template | Implied Structure |
|--------|----------|-------------------|
| Parallel Revelation | "What if all [N parallel items] were visible simultaneously?" | Grid, constellation |
| Reading Path Choice | "What if the reader could choose which branch to explore first?" | Tab interface, hub-spoke |
| Structural Self-Awareness | "What if the page SHOWED its own organizational logic?" | Meta-layer, minimap |
| Content-Form Mirroring | "What if each section's layout EMBODIED its content?" | Per-section layout variation |
| Temporal Architecture | "What if sections of different TYPES had distinct geometry?" | Content-type-specific layouts |

2. **Add Section 11: Structural Propositions (in Pass 1 package, not Pass 3):**

Spatial blueprints with CSS sketches, responsive adaptation notes, and risk assessments. Framed as INVITATIONS, not requirements: "These are proposals for how the content's inherent organization could drive layout decisions. They are NOT requirements -- they are INVITATIONS to invent."

3. **Modify Section 4 to support non-linear zone architecture:**

The ASCII density diagram currently assumes vertical stacking. It should support alternative spatial models -- grids, splits, hub-spoke -- using a richer diagrammatic format.

**Stage 4: Builder Pass 1** [Source: 07]

Two high-impact changes:

1. **Revise the invention prohibition:**

Current: "Do NOT invent mechanisms that aren't in the package."

Revised: Grant explicit permission for STRUCTURAL invention (grids, split layouts, non-linear reading paths, self-aware components) when derived from content's organizational logic, documented in decisions file, and working at all 3 breakpoints. Maintain the prohibition on texture invention (new color palettes, new type scales) -- the package's mechanism selections should still be trusted for texture.

2. **Add self-aware component guidance:**

Optional but explicitly permitted. Test: "If you removed this component, would the page be less understandable? If yes, it serves the content."

3. **Expand build process for non-standard layouts:**

The current "build zone-by-zone" process implicitly assumes vertical stacking. When structural propositions introduce non-standard layouts, the builder needs an alternative process:

- **Standard Path (vertical zones only):** Build zone-by-zone. At each boundary, set ALL channels simultaneously.
- **Structural Path (grid, split, or non-linear sections):** 1) Build the standard vertical skeleton first (zones above and below the structural section), 2) Build the structural section as a self-contained module, 3) Verify integration with surrounding zones, 4) Verify responsive degradation (grid to stack at narrow viewports), 5) Document the structural choice in decisions file.

Without this procedural guidance, builders granted invention permission will have no procedure for HOW to build non-standard layouts alongside standard zones. [Source: 07]

**Stage 5: Builder Pass 2** [Source: 07]

Add "Structural Opportunity Assessment" -- permission to notice that a vertical stack of 8 items would read better as a 2x4 grid, and to make that specific change with documentation.

The current binary enrichment/preservation framework needs a third category:

- **Enrichment** (SAFE -- main task): CSS density within existing zones
- **Preservation** (REQUIRED): Zone skeleton, properties, content, responsive structure
- **Structural Evolution** (DOCUMENTED -- optional): Changing a section's spatial organization based on content logic. Document WHAT, WHY, and responsive degradation. Maximum 1 structural evolution per pass.

This bounded permission (maximum 1 per pass, fully documented) prevents Pass 2 from becoming a redesign while allowing the builder to act on structural opportunities discovered during enrichment. [Source: 07]

**Stage 6: Builder Pass 3** [Source: 07]

Remains defensive. Add structural invention verification (works at all 3 breakpoints, degrades gracefully, doesn't break accessibility).

**Stage 7: PA Evaluation** [Source: 07]

Add 2-3 structural questions to the PA battery:
- E-21: "Does every section have the same layout, or do some have different geometry?"
- E-22: "Is there a section that SHOWS what it's about, not just tells?"
- E-23: "If you imagine the page as a map, would it be a single road or would it have intersections and plazas?"

**Why current PA questions miss structural flatness:** E-07 asks what changes between adjacent sections, but a diligent auditor may notice only texture changes (background, typography) without noticing that every section is a vertically stacked column. E-12 asks about shapes/colors/space, but if every section has the same rectangular shape, the auditor may not flag this because colors and spacing DO vary. No current question specifically surfaces "all sections have the same reading path."

**Weaver structural variety metrics:**

- Distinct layout types used: [count] (vertical, grid, split, progressive-disclosure)
- Sections with non-standard layout: [count] / [total sections]
- Content-form coupling instances: [count] (sections where layout embodies content logic)
- Self-aware components: [count]

**Target:** 1+ non-standard layout section = structural variety present. 0 non-standard sections = structural uniformity (texture may be rich but spatial organization is standard). [Source: 07]

**Cognitive load mitigation for Section 10:** Adding Category 3 structural families to Section 10 grows it from 5-7 questions to 7-10. To prevent cognitive overload, questions should be explicitly categorized: "TEXTURE questions (explore 2-3)" and "STRUCTURAL questions (explore 0-1)." This signals to the builder that structural questions are higher risk, higher reward -- optional but powerful. [Source: 07]

### The Three Prescription Levels at Three Stages

The user's answer to the probing question about prescriptiveness gives the exact implementation model. The pipeline needs three levels of structural guidance at three stages:

**Level 1 -- TC Stage: OBSERVE content structure**

Structural observations, not prescriptions. The TC agent examines the content and produces observations about its inherent organizational logic:
- "This content has 8 parallel roles at 3 authority tiers"
- "This section is a tutorial with 5 dependent steps"
- "This section compares 4 options against shared criteria"

These are factual statements about what the content IS. They do not prescribe a layout. They provide the raw material for structural derivation.

**Level 2 -- Synthesizer Stage: Derive QUESTIONS from observations**

The synthesizer takes TC's structural observations and the specialists' spatial implications and derives QUESTIONS -- not answers. The questions are structural in nature:

- "How should 8 parallel items at 3 authority levels be arranged so the reader sees the hierarchy from layout alone?"
- "Can the 5 tutorial steps be made visually self-contained so the reader can focus on one at a time?"
- "Can the 4 orchestrators be compared simultaneously instead of sequentially?"

These questions have implied spatial answers, but they do not prescribe a specific CSS implementation. They define what the spatial structure needs to ACHIEVE.

**Level 3 -- Builder Stage: Answer questions by inventing structure + reference blueprints**

The builder receives the questions AND highly specific spatial blueprints as reference material (CSS sketches, grid specifications, responsive notes). The builder then INVENTS structure to answer the questions, using the blueprints as a starting point that can be adopted, modified, or replaced based on the content's specific needs.

This three-level model preserves creative authority for the builder while ensuring structural intelligence flows from content analysis to CSS implementation. The TC observes. The synthesizer questions. The builder invents.

### Incremental Implementation Path

The v2.0 changes can be introduced in stages, each adding capability without breaking existing behavior: [Source: 07]

1. Add Structural Observation to TC (no other pipeline changes needed)
2. Add spatial implications to specialists (small additive fields)
3. Add Section 11 to synthesizer + Category 3 question families to Section 10
4. Grant builder invention permission + self-aware component guidance
5. Add PA structural questions
6. Add weaver structural metrics

A v2.0-enabled pipeline will still produce standard vertical layouts if the content doesn't suggest structural alternatives -- the invention is content-derived, not mandatory.

### Orchestrator Integration

The orchestrator (SKILL.md) wires the stage changes together: [Source: 07]

1. **Phase 1 validation:** Check that TC brief contains a Structural Observation section (or note its absence without blocking)
2. **Phase 2 wiring:** Synthesizer assembles Section 11 (Structural Propositions) from TC's Structural Observation + specialist spatial implications. Section 11 goes into `_package-pass-1.md`
3. **Phase 3 builder rotation:** Pass 1 reads Section 11 alongside other sections. Pass 2 checks for structural opportunities. Pass 3 verifies structural inventions survive.
4. **Phase 4 evaluation:** PA question distribution includes E-21/E-22/E-23. Weaver compliance includes structural variety metrics.
5. **Phase 5 comparison report:** New section measuring structural variety in the final build.

### Implementation Risk Assessment

Of 13 files requiring v2.0 modifications: [Source: 07]

| Risk | Count | Files |
|------|-------|-------|
| HIGH | 2 | synthesizer-prompt.md, builder-pass-1-prompt.md |
| MEDIUM | 3 | specialist-3-prompt.md, builder-pass-2-prompt.md, weaver-prompt.md |
| LOW | 8 | tc-derivation.md, specialist-1/2/4/5-prompt.md, builder-pass-3-prompt.md, pa-auditor-prompt.md, SKILL.md |

The two HIGH-risk changes are the architectural core: the synthesizer must produce structural propositions, and the builder must receive permission and guidance to act on them. Everything else is plumbing that carries structural intelligence between these two critical nodes. Most changes are safe, additive modifications to existing prompt sections.

---

## Part 8: The Unified Model -- Questions Shape the Possibility Space

### The Deterministic Relationship Between Questions and Answers

The user's insight -- that external factors, the types of questions being asked, shape what's possible -- is the thesis that unifies all 7 research documents into a single coherent finding.

The pipeline's question framework is not a neutral input to a neutral process. It is a DETERMINANT of the possibility space. The relationship between question type and answer type is not fuzzy -- it is nearly deterministic:

**Experiential questions --> Textural answers**

"What does the reader need to FEEL?" produces answers about color, typography weight, spacing rhythm, atmospheric signatures. These are the pipeline's strength. TC's multi-axis questioning framework is a powerful Category 4 engine that generates rich experimental hypotheses. The pipeline's textural output is genuinely sophisticated -- 5-6 zone backgrounds, typography compression from 2rem to 1.375rem, border-weight gradients encoding hierarchy, PULSE and CRESCENDO density patterns.

**Structural questions --> Spatial answers**

"What spatial organization does this content's logic demand?" produces answers about grids, hub-spoke layouts, split-screens, non-linear reading paths. These answers do not exist in the pipeline because the questions do not exist in the pipeline. Adding Category 3 question families to the synthesizer, structural observations to TC, and invention permission to the builder would enable spatial answers without diminishing textural quality.

**Self-referential questions --> Meta-structural answers**

"Can this page demonstrate its own thesis?" produces answers about self-aware components -- minimaps, visual indexes, scroll witnesses, components whose layout literally embodies their topic. These are the exploration crown jewels (OD-006, DD-006). They produce the deepest content-form coupling. They require Category 6 questions that the pipeline does not ask.

**Content-logic questions --> Form-follows-content answers**

"What does this content look like if you drew its argument as a spatial diagram?" produces answers where spatial structure mirrors argumentative structure. 5 parallel arguments become a 5-cell grid. A 3-tier hierarchy becomes nested containers with decreasing spatial footprint. A dialogue becomes side-by-side columns. The content's logic becomes the page's geometry.

### The Pipeline's Theory of Design IS Its Constraint

The pipeline embodies a specific theory: **design is texture applied to a standard spatial structure.** This theory is not stated explicitly in any prompt file, but it is encoded in every prompt file:

- TC's exemplar questions ask about texture, not structure
- The synthesizer's 5 KB families are all texture families
- The zone architecture is always a vertical density progression
- The builder has "creative authority on HOW, not WHETHER"
- The PA questions ask about experiential quality, not spatial variety

Changing the pipeline requires changing the theory. The new theory would be: **design is the discovery of the spatial structure that the content implies, followed by texture applied to that discovered structure.** Some content IS a vertical stack. But some content is a grid, a tree, a dialogue, a cycle, a fractal. Discovering which -- and having the permission, vocabulary, and technical guidance to build it -- is what structural invention enables.

### Metaphor and Content Logic as Equal Partners

The user's answer establishes the relationship: metaphor and content logic should be equal partners, with emphasis on content logic and spatial structures. This means:

- Content logic OBSERVES the content's organizational structure (8 parallel roles, 3-tier hierarchy, tutorial sequence, comparison matrix)
- Spatial structure DERIVES from content logic (grid for parallel items, stepped islands for tutorials, side-by-side for comparisons)
- Metaphor INFLECTS the spatial structure with atmosphere (a "tower" grid feels different from a "constellation" grid -- same topology, different emotional register)
- When metaphor and content logic conflict, content logic and spatial structure take priority

The current pipeline has metaphor driving structure and content logic absent. The corrected pipeline would have content logic driving structure and metaphor providing atmosphere. Both are needed. Neither alone is sufficient. But the causal arrow must flow from content to structure to metaphor, not from metaphor to structure.

### What This Model Means for the Pipeline

The pipeline needs to ask the right types of questions at the right stages. The question taxonomy maps directly to pipeline stages:

| Question Type | Pipeline Stage | Current Status | What It Would Produce |
|---------------|---------------|----------------|----------------------|
| Experiential (Cat. 4, 5) | TC Phase 1-3 | **STRONG** | Textural richness, tension, atmosphere |
| Identity (Cat. 1) | TC, Builder, PA | **STRONG** | Compliance, guardrails |
| Mechanism (Cat. 2) | TC Phase 4, Builder | **STRONG** | Correct tool deployment |
| Structural (Cat. 3a) | TC (new), Synthesizer (new) | **ABSENT** | Content-derived spatial topology |
| Experience-structural (Cat. 3b) | TC (new), Synthesizer (new) | **ABSENT** | Reading path variety |
| Self-referential (Cat. 6) | Builder (new guidance) | **ABSENT** | Self-aware components |

The pipeline is not broken. It is incomplete. It asks 4 of 7 question types and produces excellent answers for those 4 types. Adding the 3 missing types would not replace or diminish the existing 4 -- it would expand the possibility space from texture-only to texture-plus-structure.

---

## Summary: The Complete Category Coverage Map

| Category | Name | Pipeline Status | What It Generates | What's Needed |
|----------|------|-----------------|-------------------|---------------|
| 1 | Identity/Compliance | **STRONG** | Guardrails, soul enforcement | Nothing -- already robust |
| 2 | Mechanism Selection | **STRONG** | Texture richness, multi-channel encoding | Nothing -- 20-mechanism catalog works |
| 3a | Content-Derived Structure | **ABSENT** | Novel page topology from content logic | TC Structural Observation, Synthesizer Section 11, Builder invention permission |
| 3b | Experience-Derived Structure | **ABSENT** | Reading path variety | Category 3 question families in Section 10 |
| 4 | Experimental/Generative | **STRONG** | Multi-channel coordination, hypotheses | Nothing -- TC's crown jewel |
| 5 | Opposition/Adversarial | **MODERATE** | Compositional energy, tension | Nothing major |
| 6 | Meta/Self-Referential | **ABSENT** | Self-aware components, self-demonstrating artifacts | Builder self-aware component guidance, PA structural questions |

### The Invention Gap Is a Question Gap

The pipeline's structural flatness is not caused by:
- Lack of CSS skill (builders produce ~1,381 lines of sophisticated CSS)
- Lack of mechanism vocabulary (20 mechanisms with grammar rules)
- Lack of creative freedom (compositional questions invite exploration)
- Lack of content analysis (TC briefs demonstrate deep content understanding)

The structural flatness is caused by:
- The types of questions asked (experiential, not structural)
- The types of questions that can survive compression (texture families, not spatial topologies)
- The explicit prohibition on invention ("Do NOT invent mechanisms not in the package")
- The absence of a pathway for content logic to reach CSS as spatial structure

Fix the questions, and the answers follow. The pipeline's builders are capable -- they produce excellent texture and correctly deploy mechanisms. Give them structural questions derived from content logic, spatial blueprints as reference, and permission to invent, and they will produce structural invention. The gap is not in execution. It is in what is asked.

### The Three Deliverables

From the user's answers to the probing questions, the pipeline needs three new deliverables at three stages:

1. **TC delivers: Structural Observations** -- factual statements about the content's organizational logic, independent of metaphor. Observations, not prescriptions. Equal partner with metaphor, with emphasis on content logic.

2. **Synthesizer delivers: Structural Questions + Spatial Blueprints** -- questions derived from TC's observations that define what the spatial structure needs to achieve, plus highly specific CSS blueprints as reference. Questions AND observations AND blueprints -- all three levels.

3. **Builder receives: Questions to answer + Blueprints to reference + Permission to invent** -- the builder invents structure to answer the questions, using blueprints as starting points. Creative authority expands from "HOW to deploy texture" to "HOW to deploy texture AND WHAT spatial structure to create."

The pipeline's question framework IS the bottleneck. Not the builders. Not the mechanisms. Not the metaphors. The questions.

---

*Definitive synthesis by the synthesis-writer agent.*
*Sources: 01-exploration-invention-catalog.md (264 lines), 02-pipeline-structural-flatness.md (488 lines), 03-compression-chain-forensics.md (457 lines), 04-question-taxonomy.md (319 lines), 05-content-form-derivation.md (481 lines), 06-structural-invention-universals.md (480 lines), 07-pipeline-implications.md (595 lines).*
*Total source material: 3,084 lines across 7 documents.*
*User's probing question answers incorporated throughout: root cause is multi-faceted (A+B+C + question framework as external factor), metaphor and content logic as equal partners with emphasis on content logic, three prescription levels at three pipeline stages.*
