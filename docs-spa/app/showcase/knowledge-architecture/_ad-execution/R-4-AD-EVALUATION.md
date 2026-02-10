# R-4 AD EVALUATION
## Identity-Constraint Classification of All R-4 Axis Innovation Findings

**Generated:** 2026-02-09
**Evaluator:** R-4 Evaluator Agent
**Source:** R4-AXIS-INNOVATIONS.md (192 assigned finding slots, 25 appendix summary findings, ~150 discrete sub-findings)
**Identity Source:** ACCUMULATED-IDENTITY-v1.1.md (577 lines)
**Soul Filter:** SOUL-DISCOVERIES.md (5 soul pieces)

---

## SUMMARY COUNTS

| Classification | Count | Percentage |
|----------------|-------|------------|
| SOUL PASS | 98 | 51.0% |
| CONDITIONAL PASS | 52 | 27.1% |
| CHALLENGE (CLASS C) | 18 | 9.4% |
| CONDITIONAL FAIL | 12 | 6.3% |
| SOUL FAIL | 12 | 6.3% |
| **TOTAL** | **192** | **100%** |

**Usable findings (SOUL PASS + CONDITIONAL PASS):** 150 (78.1%)
**Requires careful handling (CHALLENGE):** 18 (9.4%)
**Reject/Reference only (CONDITIONAL FAIL + SOUL FAIL):** 24 (12.5%)

---

## IDENTITY-CONSTRAINT MAP (Extracted from v1.1 + 5 Soul Pieces)

### The 10 Binary Gates

| Gate # | Gate | Source | Test |
|--------|------|--------|------|
| G1 | border-radius === 0 | Soul Piece #1, #5 | Any rounded corner = FAIL |
| G2 | box-shadow === none | Soul Piece #4 | Any shadow = FAIL |
| G3 | filter: drop-shadow() not permitted | v1.1 Section 3 | Any drop-shadow = FAIL |
| G4 | opacity === 1.0 on all visual elements | v1.1 ANTI-PHYSICAL | Any rgba alpha < 1.0 on visual = FAIL |
| G5 | transform: translateY() on hover not permitted | v1.1 ANTI-PHYSICAL | Animated z-movement = FAIL |
| G6 | No parallax / z-space simulation | v1.1 ANTI-PHYSICAL | Implies spatial z-depth = FAIL |
| G7 | No gradients suggesting material/light | v1.1 ANTI-PHYSICAL | Material interaction implied = FAIL |
| G8 | No rounded shapes suggesting physical objects | v1.1 ANTI-PHYSICAL | Physical object shape = FAIL |
| G9 | No traffic-light color semantics | DD-F-015, v1.1 | Red/amber/green as signal devices = FAIL |
| G10 | No 2px decorative borders | OD-F-AP-001, v1.1 Section 3 | 2px is structurally ambiguous = FAIL |

### Key Identity Statements (Positive -- What to SEEK)

| ID | Statement | Source |
|----|-----------|--------|
| IS-1 | "Flat 2D axis signals" -- hierarchy through SIZE, COLOR, POSITION | Soul Piece #4 |
| IS-2 | "Typographic weight for hierarchy" -- typography carries hierarchy | v1.1 Core Philosophy |
| IS-3 | "Grid/layout without shadows or rounded corners" -- flat honest layout | Soul Pieces #1, #4 |
| IS-4 | "Multi-scale self-similar patterns" -- DD-F-006 fractal at 5 scales | v1.1 Section 2 |
| IS-5 | "Anti-physical spatial experiences" -- 2D encoding of spatial metaphors | v1.1 ANTI-PHYSICAL |
| IS-6 | "Organization IS Density" -- OD-F-005, choosing organization = choosing density | v1.1 Section 2 |
| IS-7 | "The Unhurried Editor" -- editorial calm, confident restraint | v1.1 Master Soul Statement |
| IS-8 | "Content defines its own space" -- not containers define content | v1.1 Core Philosophy Contrast |
| IS-9 | "Border-weight gradient for semantic encoding" -- 4px/3px/2px/1px | v1.1 Border System |
| IS-10 | "Zone token naming with density functions" -- sparse/dense/breathing | v1.1 Wave 1 Discoveries |

### AD Exploration Targets (from task brief)

| AD | Pattern | Paired OD | Primary Density |
|----|---------|-----------|-----------------|
| AD-001 | Z-Pattern | OD-001 Conversational | PULSE + TIDAL |
| AD-002 | F-Pattern | OD-002 Narrative | CRESCENDO |
| AD-003 | Bento Grid | OD-003 Task-Based | ISLANDS + BOOKENDS |
| AD-004 | Spiral | OD-004 Confidence | GEOLOGICAL + CRESCENDO |
| AD-005 | Choreography | OD-005 Spatial | WAVE + ISLANDS |
| AD-006 | Compound | OD-006 Creative | ALL (FRACTAL primary) |

---

## CLASSIFICATION BY CATEGORY

═══════════════════════════════════════════════════════════════════════════════
## A. SOUL PASS (98 findings)
═══════════════════════════════════════════════════════════════════════════════

These findings align with all 5 soul pieces and the ANTI-PHYSICAL identity. They can be applied freely in AD explorations.

### A1. Classic Reading Patterns -- Structural Principles (R4-001 through R4-018)

| Finding ID | Short Description | Rationale | Target AD(s) |
|------------|-------------------|-----------|---------------|
| R4-001 | Z-pattern diagonal sweep: eye enters top-left, sweeps to top-right, diagonal to bottom-left, sweep to bottom-right | Pure reading-gravity observation. No CSS requirements that violate soul. Flat 2D scanning path. | AD-001 |
| R4-002 | Z-pattern CTA placement at terminal position (bottom-right) | Positional strategy. Uses placement, not decoration. Aligns with IS-1 (hierarchy through POSITION). | AD-001 |
| R4-003 | Z-pattern works best with minimal content and clear visual hierarchy | Content density principle. Supports IS-7 (Unhurried Editor -- restrained content). | AD-001 |
| R4-004 | Z-pattern logo/headline at top-left entry point | Positional hierarchy using the eye's natural entry. Pure 2D axis signal (IS-1). | AD-001 |
| R4-005 | Z-pattern diagonal creates implicit connection between quadrants | Compositional flow principle. 2D axis behavior -- no depth required. | AD-001, AD-006 |
| R4-006 | F-pattern: horizontal top scan, shorter second scan, vertical left descent | Reading physics for text-heavy content. Pure 2D scanning. Directly applicable to documentation. | AD-002 |
| R4-007 | F-pattern: top content gets most attention, right side often ignored | Attention distribution map. Flat information architecture (IS-1, IS-3). | AD-002 |
| R4-008 | F-pattern: left-aligned content is scanned vertically | Axis behavior for typography-driven hierarchy (IS-2). | AD-002 |
| R4-009 | F-pattern optimization: bold headings on left side, bullet points for scanability | Typography-based hierarchy (IS-2). Uses weight, not decoration. | AD-002 |
| R4-010 | F-pattern: front-load important information in first sentences | Content strategy principle. No visual requirements. | AD-002, AD-006 |
| R4-011 | F-pattern: key information in first two paragraphs | Content density placement. Aligns with CRESCENDO (sparse-to-dense). | AD-002 |
| R4-012 | Gutenberg diagram: four-quadrant model (Primary Optical, Strong Fallow, Weak Fallow, Terminal) | Compositional framework. Pure 2D spatial analysis. No soul implications. | AD-001, AD-006 |
| R4-013 | Reading gravity creates diagonal path through homogeneous content | Physics of reading. 2D axis principle. Foundational for axis explorations. | ALL |
| R4-014 | Gutenberg diagram ONLY applies to homogeneous content -- designed elements override it | Critical limitation. Hierarchy through SIZE/COLOR/POSITION overrides natural gravity (IS-1). | ALL |
| R4-015 | Gutenberg: CTAs belong at terminal area (bottom-right) | Positional strategy, no decoration needed. | AD-001 |
| R4-016 | Gutenberg: avoid burying important content in weak fallow area (bottom-left) | Spatial awareness principle. 2D layout optimization. | AD-001, AD-006 |
| R4-017 | Axes of orientation: each horizontal sweep starts further right and closer to bottom | Reading flow mechanics. Pure 2D behavior. | AD-001, AD-002 |
| R4-018 | Reading patterns are language-direction dependent (LTR assumed) | Foundational constraint. No soul implications. | ALL |

### A2. Grid Structural Principles (R4-019 through R4-035)

| Finding ID | Short Description | Rationale | Target AD(s) |
|------------|-------------------|-----------|---------------|
| R4-019 | Bento grid: modular grid with varied cell sizes signals importance | Size = hierarchy. Flat 2D grid. Aligns with IS-1 (SIZE for hierarchy). | AD-003 |
| R4-020 | Bento: large feature cells = big deal, small cells = secondary | Visual weight through area, not decoration. Pure flat hierarchy. | AD-003 |
| R4-021 | Bento: asymmetric but balanced compositions | Compositional principle. No soul implications. Works with sharp edges. | AD-003 |
| R4-022 | Bento: clean lines, structured elegance, uniformity keeps it digestible | "Clean lines" = sharp edges (Soul Piece #1). Directly aligned. | AD-003 |
| R4-023 | Bento CSS: display:grid, grid-template-columns, gap, span syntax | Pure CSS grid implementation. No border-radius, no box-shadow. Soul-compatible. | AD-003 |
| R4-024 | Bento: mind the whitespace (don't feel crammed) | Aligns with Rule 6 (whitespace as design element) and IS-7 (Unhurried Editor). | AD-003 |
| R4-025 | Bento: prioritize readability over aesthetics | IS-7 alignment. Editorial restraint over decoration. | AD-003 |
| R4-026 | Bento: use varied sizes to create visual hierarchy | IS-1 (hierarchy through SIZE). No decoration needed. | AD-003, AD-006 |
| R4-027 | Masonry grid: one axis strict, other axis fills gaps organically | Structural pattern. CSS grid-based. No soul violations. | AD-003 |
| R4-028 | Masonry: items have varying heights, creating space-efficient layouts | Organic density distribution. Aligns with IS-8 (content defines its own space). | AD-003, AD-006 |
| R4-029 | CSS masonry via grid-template-rows: masonry (CSS Grid Level 3) | Technical implementation. Soul-compatible CSS. | AD-003 |
| R4-030 | Masonry: eliminates awkward gaps between uneven content | Layout efficiency principle. No soul implications. | AD-003 |
| R4-031 | Masonry useful for code snippet showcases with varying content lengths | Direct documentation application. Code blocks handle density (DD-F-013). | AD-003, AD-006 |
| R4-032 | Broken grid: non-linear positioning of elements | Compositional strategy. Can be implemented flat (IS-3). | AD-006 |
| R4-033 | Broken grid: strategic white space as design element | Rule 6 alignment (whitespace as design element). | AD-006 |
| R4-034 | Broken grid: forces active engagement (users explore curiously) | Behavioral principle. Aligns with IS-7 (trust in reader's intelligence). | AD-006 |
| R4-035 | Broken grid: not suitable for all audiences, some prefer symmetry | Risk assessment. Useful constraint for AD-006 scope. | AD-006 |

### A3. Movement and Rhythm Principles (R4-036 through R4-058)

| Finding ID | Short Description | Rationale | Target AD(s) |
|------------|-------------------|-----------|---------------|
| R4-036 | Five types of visual rhythm: regular, alternating, progressive, flowing, random | Foundational rhythm taxonomy. Maps directly to DD density patterns (PULSE=alternating, CRESCENDO=progressive). | ALL |
| R4-037 | Regular rhythm: same spacing, same elements (heartbeat) | Maps to DD-F-001 PULSE. Soul-compatible spacing pattern. | AD-001, AD-005 |
| R4-038 | Alternating rhythm: set pattern repeats with variation (ABAB) | Maps to PULSE dense/sparse alternation. Pure 2D. | AD-001, AD-005 |
| R4-039 | Progressive rhythm: elements change progressively (crescendo/diminuendo) | Maps directly to DD-F-002 CRESCENDO. Already validated. | AD-002, AD-004 |
| R4-040 | Flowing rhythm: follows bends and curves | Abstract principle. When implemented as border-weight gradients (2D), soul-compatible. | AD-004 |
| R4-041 | Random rhythm: no discernible pattern (intentional chaos) | Anti-pattern for KortAI. Contradicts fractal self-similarity (DD-F-006). Note only. | -- |
| R4-042 | Breaking established rhythm creates focal points | Rhythm disruption technique. Uses position/weight, not decoration. IS-1 compatible. | ALL |
| R4-043 | Musical analogy: verse=regular content, chorus=hero, bridge=transition | Structural mapping. Pure organizational principle. Maps to OD patterns. | AD-005, AD-006 |
| R4-044 | Musical rest = whitespace/breathing room | Rule 6 (whitespace as design element). Already core identity. | ALL |
| R4-045 | Accent = breaking pattern for emphasis | Typography/color emphasis, not decoration. IS-2 compatible. | ALL |
| R4-046 | Repeated spacing creates rhythm (gap-8, gap-8, gap-8) | Spacing tokens already locked. Soul-compatible implementation. | ALL |
| R4-047 | Alternating colors or sizes create rhythm | Color from locked palette + size hierarchy. Soul-compatible. | ALL |
| R4-048 | Progressive scaling via type scale creates rhythm | Type scale already tokenized (v1.1). Directly applicable. | ALL |
| R4-049 | Consistent alignment patterns create rhythm | Alignment is 2D axis behavior. Core to flat design. | ALL |
| R4-050 | Cinematic establishing shot = context/overview | Wide-close-wide pattern. Pure content structure, no visual requirements. | AD-005, AD-006 |
| R4-051 | Cinematic close-up = detail focus, creates intimacy | Zoom into code blocks / specific parameters. No soul implications. | AD-005, AD-006 |
| R4-052 | Shot progression: wide (context) -> close (detail) -> wide (synthesis) | Maps to CRESCENDO (sparse -> dense -> sparse exhale). Already validated pattern. | AD-002, AD-005 |
| R4-053 | Montage (quick cuts) creates energy -- use for feature lists | Structural pacing. Implemented via component rhythm, not animation. | AD-005, AD-006 |
| R4-054 | Slow panning creates contemplation -- use for concept explanations | Content pacing principle. Aligns with IS-7 (Unhurried Editor). | AD-002, AD-005 |
| R4-055 | Establishing shots orient before diving into details | Section structure principle. Maps to CRESCENDO sparse opening. | ALL |
| R4-056 | Horizontal scroll is high interaction cost, always secondary to vertical | Axis constraint principle. Pure 2D navigation. | AD-005 |
| R4-057 | Bidirectional scrolling: vertical primary, horizontal secondary | Axis hierarchy. No soul implications. | AD-005 |
| R4-058 | Contain horizontal scroll to sections, never replace vertical page scroll | Scope constraint. Structural principle. | AD-005 |

### A4. Non-Linear and Disclosure Principles (R4-059 through R4-079)

| Finding ID | Short Description | Rationale | Target AD(s) |
|------------|-------------------|-----------|---------------|
| R4-059 | Golden ratio (1.618) creates naturally balanced proportions | Mathematical proportion. No soul implications. Applicable to layout ratios. | AD-004 |
| R4-060 | Golden ratio two-column: main content (1fr) + sidebar (0.618fr) | Layout proportion. Flat grid, no decoration. | AD-004, AD-006 |
| R4-061 | Fibonacci type scale: 16, 26, 42, 68px hierarchy | Type scale principle. Can coexist with locked type tokens (compare values). | AD-004 |
| R4-062 | Golden ratio: place most important info at spiral focal point | Positional hierarchy (IS-1). No decoration needed. | AD-004 |
| R4-063 | Golden ratio component proportions via flex: 1.618 / flex: 1 | CSS implementation. Soul-compatible. | AD-004 |
| R4-064 | Hub-and-spoke: central hub enables exploration of spokes | Navigation architecture. Maps to OD-005 hub-spoke. Already validated. | AD-003, AD-005 |
| R4-065 | Hub-and-spoke: return to hub required for section changes | Navigation constraint. Structural, no visual requirements. | AD-003 |
| R4-066 | Hub-and-spoke: centralized control, consistent UX | Aligns with IS-7 (editorial calm, consistent). | AD-003 |
| R4-067 | Hub-and-spoke: easily scalable (add spokes as needed) | Architectural principle. Good for documentation structure. | AD-003 |
| R4-068 | Hub-and-spoke: good for task-based documentation (hub=home, spokes=guides) | Direct documentation application. Maps to OD-003 Task-Based. | AD-003 |
| R4-069 | Progressive disclosure: reduce cognitive load by revealing gradually | Core documentation principle. Already validated in OD-003 (collapsible islands). | AD-003, ALL |
| R4-070 | Progressive disclosure: accordions, tabs, dropdowns, scroll-based, modals | Implementation taxonomy. Most are soul-compatible (flat containers). | AD-003 |
| R4-071 | Progressive disclosure: start simple, let users drill down | Aligns with IS-7 (trust reader's intelligence). CRESCENDO pattern. | ALL |
| R4-072 | Progressive disclosure: balance between usability (simple) and discoverability (complex) | Design tension principle. No soul implications. | ALL |
| R4-073 | Progressive disclosure: surface (overview) -> expanded (sub-topics) -> detail (full content) | Three-level depth model. Maps to GEOLOGICAL strata. | AD-004 |
| R4-074 | Progressive disclosure: keep essential info visible | Content strategy. Aligns with F-pattern (top content = most attention). | AD-002 |
| R4-075 | Progressive disclosure: use clear affordances for "more" content | Interaction design. Can use flat indicators (borders, typography weight). | ALL |
| R4-076 | Progressive disclosure: maintain context when expanding/collapsing | UX principle. No soul implications. | ALL |
| R4-077 | Decision matrix: pattern selection by content type, complexity, and avoidance criteria | Meta-framework. Structural guidance for all AD explorations. | ALL |
| R4-078 | Concrete recommendations: landing = Z+bento+disclosure, tutorial = F+cinematic+rhythm | Combination guidance. Direct input for AD-006 compound exploration. | AD-006 |
| R4-079 | API reference = F+hub-spoke+tabs+masonry | Combination for reference documentation. Soul-compatible patterns. | AD-006 |

### A5. Implementation Patterns -- Structural (R4-080 through R4-098)

| Finding ID | Short Description | Rationale | Target AD(s) |
|------------|-------------------|-----------|---------------|
| R4-080 | Orchestrated Axis Flow: Z-hero -> bento-features -> F-details+disclosure | Multi-pattern composition. All sub-patterns are soul-compatible. | AD-006 |
| R4-081 | Rhythm-Based Section Flow: verse-chorus-bridge-verse structure | Musical structure for page rhythm. Maps to PULSE alternation. | AD-005, AD-006 |
| R4-082 | Cinematic Documentation Journey: establishing -> medium -> close-up -> wide | Content zoom progression. Maps to CRESCENDO + exhale. | AD-005, AD-006 |
| R4-083 | Hero section can use Z-pattern with diagonal sweep | Compositional flow. The diagonal is conceptual (reading gravity), not CSS diagonal. | AD-001 |
| R4-084 | Features section can use bento grid with span syntax | CSS Grid implementation. Sharp edges, no shadows. Soul-aligned. | AD-003 |
| R4-085 | Details section can combine F-pattern with progressive disclosure | Text scanning + depth-on-demand. Both soul-compatible. | AD-002 |
| R4-086 | Tab navigation for concept switching within F-pattern | Flat tabs (no rounded corners, no shadows). Soul-compatible. | AD-002, AD-003 |
| R4-087 | Regular rhythm for body content (consistent spacing, repeating patterns) | Spacing token application. Already locked. | ALL |
| R4-088 | Alternating rhythm for step-by-step instructions | Maps to PULSE. Procedural content structure. | AD-001, AD-003 |
| R4-089 | Break rhythm for important callouts or warnings | Callout family (4px left border, 2-zone). Already soul-validated. | ALL |
| R4-090 | Verse-chorus-bridge maps to regular-hero-transition sections | Structural pattern. No visual requirements beyond typography hierarchy. | AD-005 |
| R4-091 | Cinematic establishing shot for "here's what we're building today" | Context-setting technique. Content strategy, no soul implications. | AD-005 |
| R4-092 | Cinematic medium shot for "here's how we'll build it" | Approach section. Maps to CRESCENDO rising action. | AD-005 |
| R4-093 | Cinematic close-up for "here's exactly how this works" | Detail section. Code blocks, parameters. Dense zone. | AD-005 |
| R4-094 | Cinematic wide shot for "here's what we accomplished" | Summary/synthesis. Maps to CRESCENDO exhale (Freytag falling action). | AD-005 |
| R4-095 | Layer patterns by section type for maximum effectiveness | Compound pattern principle. Direct input for AD-006. | AD-006 |
| R4-096 | Getting started: Z-hero + progressive disclosure + cinematic progression | Combination recipe. All sub-patterns soul-compatible. | AD-006 |
| R4-097 | Feature showcase: bento + rhythm breaking for key features | Bento + emphasis. Flat grid + typographic emphasis. | AD-003, AD-006 |
| R4-098 | Pattern decision matrix with complexity ratings (Low/Medium/High) | Meta-guidance. Useful for AD exploration scoping. | ALL |

═══════════════════════════════════════════════════════════════════════════════
## B. CONDITIONAL PASS (52 findings)
═══════════════════════════════════════════════════════════════════════════════

These findings mostly align but need specific adaptation to satisfy soul constraints.

### B1. Grid Patterns Requiring Flat Adaptation (R4-099 through R4-118)

| Finding ID | Short Description | Classification | Adaptation Required | Target AD(s) |
|------------|-------------------|----------------|---------------------|---------------|
| R4-099 | Bento animated grids (react to scroll, reorganize) | CONDITIONAL PASS | Animation must not imply z-movement. Use opacity:1 transitions only. Reorder via grid property changes, not transforms. Reduced-motion prophylactic required. | AD-003 |
| R4-100 | Bento AI-generated layouts (automatic content adaptation) | CONDITIONAL PASS | Implementation must output soul-compliant CSS (border-radius:0, box-shadow:none). AI generation is process, not visual. | AD-003 |
| R4-101 | Bento personalized grids (user-arrangeable blocks) | CONDITIONAL PASS | Drag handles must be flat (no shadow affordance). Grid rearrangement must not use 3D transforms. | AD-003 |
| R4-102 | Masonry: auto-flow ordering (masonry-auto-flow: next) | CONDITIONAL PASS | Implementation is pure CSS. Ensure no gap-filling uses shadow or rounded elements. | AD-003 |
| R4-103 | Masonry: align-tracks / justify-tracks alignment | CONDITIONAL PASS | Pure CSS alignment. Ensure aligned items maintain sharp edges. | AD-003 |
| R4-104 | Broken grid: collapsing gutters to create visual density | CONDITIONAL PASS | Collapsing gutters is flat 2D. Ensure overlapping elements don't use opacity < 1.0 to show through. | AD-006 |
| R4-105 | Broken grid: creative typography (varying styles/sizes/alignments) | CONDITIONAL PASS | Typography variation must use locked font families only (Instrument Serif, Inter, JetBrains Mono). Size variation via type scale tokens. | AD-006 |
| R4-106 | Broken grid communicates innovation and forward-thinking | CONDITIONAL PASS | The "innovation" must come from composition, not decoration. No shadows, rounded corners, or gradients to signal "modern." | AD-006 |
| R4-107 | Broken grid: requires rigorous responsive testing | CONDITIONAL PASS | Testing constraint applies. Ensure sharp edges hold at all breakpoints. | AD-006 |
| R4-108 | Broken grid: for hero sections, feature highlights, creative showcases | CONDITIONAL PASS | Hero usage acceptable if flat. No parallax, no z-depth, no animated entry. | AD-006 |
| R4-109 | Masonry for image galleries (Pinterest-style) | CONDITIONAL PASS | Images must not have rounded corners or shadow frames. Sharp-edge containers. | AD-003, AD-006 |
| R4-110 | Masonry for card-based content with varying heights | CONDITIONAL PASS | Cards must be flat (no box-shadow, border-radius:0). Use border or background-color differentiation. | AD-003 |
| R4-111 | Masonry for portfolio showcases | CONDITIONAL PASS | Portfolio items: flat containers, typographic hierarchy. No hover shadows. | AD-006 |
| R4-112 | Broken grid: not recommended for reference documentation | CONDITIONAL PASS | Important scope constraint. Limit to creative/hero contexts only. | AD-006 |
| R4-113 | Grid innovations: CSS clip-path for non-rectangular sections | CONDITIONAL PASS | clip-path is 2D geometry. Acceptable if the clipped shape doesn't simulate physical objects or rounded forms. Diagonal clips = OK. Circular clips = potential G8 violation. | AD-005, AD-006 |
| R4-114 | Visual rhythm: flowing rhythm follows bends and curves like sand dunes | CONDITIONAL PASS | "Curves" must be implemented as 2D line paths (SVG paths, clip-paths), NOT as rounded containers (border-radius). The curve is a graphic element, not a container shape. | AD-004, AD-005 |
| R4-115 | Broken grid: overlapping layers (elements that intersect and overlap) | CONDITIONAL PASS | Overlap must be via CSS positioning (z-index flat stacking), NOT via opacity < 1.0 transparency or box-shadow depth cues. Fully opaque elements only. | AD-006 |
| R4-116 | Scroll-based progressive disclosure (more content revealed on scroll) | CONDITIONAL PASS | Must not use scroll-jacking or parallax. Content reveals via natural scroll + intersection observer. No animated transforms. Reduced-motion prophylactic. | AD-003, AD-005 |
| R4-117 | Modals/popovers for detail-on-demand | CONDITIONAL PASS | Modals must have sharp corners (border-radius:0), no box-shadow, no backdrop blur. Use solid border + solid background. | ALL |
| R4-118 | Triggered horizontal: trigger horizontal animation with vertical scroll | CONDITIONAL PASS | Must not create parallax effect. Content slides horizontally (2D plane movement), no z-axis implication. Reduced-motion prophylactic required. | AD-005 |

### B2. Movement and Choreography Requiring Adaptation (R4-119 through R4-138)

| Finding ID | Short Description | Classification | Adaptation Required | Target AD(s) |
|------------|-------------------|----------------|---------------------|---------------|
| R4-119 | Axis transition: visual indicators (arrows, scroll bars) for direction change | CONDITIONAL PASS | Indicators must be flat graphics (solid arrows, flat bars). No 3D arrow affordances or shadowed indicators. | AD-005 |
| R4-120 | Axis transition: clear section boundaries | CONDITIONAL PASS | Boundaries via borders (Cat 1: 3px+ structural) or background color zones. Not via shadows or gradients. | AD-005 |
| R4-121 | Axis transition: brightly colored cues for scrollable containers | CONDITIONAL PASS | Colors from locked palette only (#E83025 primary, callout accents). No arbitrary bright colors. | AD-005 |
| R4-122 | Axis transition: progress indicators | CONDITIONAL PASS | Flat progress bars (no rounded ends, no shadow). Square indicators with solid fill. | AD-005 |
| R4-123 | Rhythm: alternating colors create rhythm | CONDITIONAL PASS | Colors must alternate within locked palette (cream/white zones, not arbitrary colors). Zone tokens (sparse/dense). | ALL |
| R4-124 | Cinematic: jump cuts create urgency for time-sensitive content | CONDITIONAL PASS | "Jump cuts" = abrupt section transitions. Implement via spacing changes and typography weight shifts, not animated transitions. | AD-005 |
| R4-125 | Cinematic: slow panning for contemplation | CONDITIONAL PASS | "Slow panning" = generous whitespace and long-form text. Not actual CSS animation/scrolling. Aligns with IS-7 if implemented via spacing. | AD-005 |
| R4-126 | Feature showcase: diagonal elements for visual interest | CONDITIONAL PASS | Diagonals via clip-path (2D geometry). Not via CSS transforms that imply rotation/perspective. Flat diagonal = graphic element, not 3D rotation. | AD-005, AD-006 |
| R4-127 | Diagonal section dividers break monotony of rectangular stacking | CONDITIONAL PASS | clip-path: polygon() for diagonal cuts. The edge is a 2D line, not a 3D surface. No shadow along the diagonal. | AD-005 |
| R4-128 | Diagonal: CSS clip-path approach for angled sections | CONDITIONAL PASS | Direct CSS implementation. clip-path is flat 2D masking. Soul-compatible if shapes don't simulate physical objects. | AD-005 |
| R4-129 | Diagonal: transform rotate approach for dividers | CONDITIONAL PASS | Static rotation of a flat element is 2D graphic design (like a rule drawn at an angle). Not animated. No perspective property. | AD-005 |
| R4-130 | Diagonal: SVG triangle approach for backgrounds | CONDITIONAL PASS | SVG is 2D vector. Soul-compatible. Ensure SVG has no rounded paths (use sharp angles), no filter effects. | AD-005 |
| R4-131 | Diagonal lines create dynamism and movement | CONDITIONAL PASS | The "movement" is visual rhythm, not CSS animation. Static diagonals = flat graphic design (like a printed magazine layout). Acceptable. | AD-005 |
| R4-132 | Diagonal: header slants create depth and visual interest | CONDITIONAL PASS | "Depth" here is compositional (visual perspective via geometry), not CSS depth (box-shadow). Implement as clip-path. The header is still flat. | AD-001, AD-005 |
| R4-133 | Diagonal: background elements create energy without dominating content | CONDITIONAL PASS | Background diagonals via clip-path or SVG. Solid colors from locked palette. No gradient diagonals. | AD-005 |
| R4-134 | Diagonal: use sparingly for accents, not structure | CONDITIONAL PASS | Scope constraint. Diagonals supplement the flat grid system, they don't replace it. | AD-005 |
| R4-135 | Golden ratio: responsive design limits full ratio support | CONDITIONAL PASS | Apply golden ratio to individual component proportions, not full page. Responsive breakpoints may override. | AD-004 |
| R4-136 | Hub-and-spoke: frequent returns disrupt interaction flow | CONDITIONAL PASS | Mitigate via breadcrumb navigation (flat, typographic) or persistent sidebar. | AD-003 |
| R4-137 | Hub-and-spoke: navigation complexity increases with spokes | CONDITIONAL PASS | Manage via progressive disclosure (collapsible spoke lists) or visual grouping (bento). | AD-003 |
| R4-138 | Hub-and-spoke: not ideal for comparing content across sections | CONDITIONAL PASS | Mitigate via side-by-side comparison modes (flat grid layout) within hub. | AD-003, AD-006 |

### B3. Synthesis and Combination Requiring Adaptation (R4-139 through R4-150)

| Finding ID | Short Description | Classification | Adaptation Required | Target AD(s) |
|------------|-------------------|----------------|---------------------|---------------|
| R4-139 | Pattern combination: Z-hero + F-content maximizes effectiveness | CONDITIONAL PASS | Both patterns are soul-compatible individually. Combination must not introduce transitional decorations (divider shadows, gradient fades). Use border-based transitions. | AD-006 |
| R4-140 | Feature showcase: golden ratio for proportions | CONDITIONAL PASS | Apply ratio to flex values. Containers must remain sharp-edged and shadowless. | AD-006 |
| R4-141 | Feature showcase: breaking rhythm for key features | CONDITIONAL PASS | Rhythm break via typography weight/size or border-color accent (#E83025). Not via shadow, scale transform, or glow. | AD-006 |
| R4-142 | Getting started: visual rhythm alternating for step types | CONDITIONAL PASS | Alternation via zone backgrounds (sparse/dense tokens) and border-left accents. Within locked palette. | AD-006 |
| R4-143 | Landing/overview: bento grid for feature capabilities | CONDITIONAL PASS | Bento cells with sharp edges, no shadows. Varied sizes = hierarchy. | AD-003, AD-006 |
| R4-144 | Tutorial/guide: F-pattern for main content | CONDITIONAL PASS | Standard F-pattern is soul-compatible. Ensure left-side headings use locked typography. | AD-002, AD-006 |
| R4-145 | API reference: hub-and-spoke for endpoint navigation | CONDITIONAL PASS | Navigation via flat menu/sidebar. No hover-lift on nav items. | AD-006 |
| R4-146 | API reference: tabs for language switching | CONDITIONAL PASS | Flat tabs: border-bottom active indicator, no rounded tab shapes, no shadow. | AD-006 |
| R4-147 | API reference: masonry for example code blocks | CONDITIONAL PASS | Code block containers: flat, sharp edges, JetBrains Mono. No rounded code containers. | AD-006 |
| R4-148 | Hub-and-spoke: iPhone home screen is default pattern | CONDITIONAL PASS | Conceptual reference. Implementation must be flat grid, not iOS-styled rounded app icons. | AD-003 |
| R4-149 | Progressive disclosure: Amazon product pages as model | CONDITIONAL PASS | Structural model (layered detail). Visual implementation must follow soul (no Amazon-style card shadows or rounded buttons). | ALL |
| R4-150 | Decision matrix: complexity ratings guide exploration scoping | CONDITIONAL PASS | Meta-guidance. Low-complexity patterns (Z, F, golden ratio) are easier to soul-comply. High-complexity (broken grid) needs more adaptation. | ALL |

═══════════════════════════════════════════════════════════════════════════════
## C. CHALLENGE -- CLASS C (18 findings)
═══════════════════════════════════════════════════════════════════════════════

These findings contradict specific identity statements. Each documents which statement and which decision tree branch applies.

| Finding ID | Short Description | Classification | Which Identity Statement Contradicted | Decision Tree Branch | Target AD(s) |
|------------|-------------------|----------------|--------------------------------------|---------------------|---------------|
| R4-151 | Broken grid: overlapping elements creating visual depth layers | CHALLENGE (C) | IS-5 (anti-physical). Overlapping implies z-stacking. | If overlap is purely positional (CSS position: absolute, fully opaque elements) = CONDITIONAL PASS. If overlap uses opacity < 1.0 to show through = SOUL FAIL. | AD-006 |
| R4-152 | Diagonal: header "moves away from viewer, creating depth" | CHALLENGE (C) | IS-5 (anti-physical). "Depth" contradicts flat identity. | If depth is visual perspective (geometric illusion via diagonal line) = CONDITIONAL PASS. If depth requires CSS perspective property or transform: translateZ = SOUL FAIL. | AD-005 |
| R4-153 | Cinematic: "close-ups create connection/intimacy" via visual zoom | CHALLENGE (C) | IS-5 (anti-physical). Zoom implies camera (3D spatial concept). | If "zoom" is typographic scale change (larger font, more detail) = SOUL PASS. If zoom is CSS transform: scale() animation = SOUL FAIL. | AD-005 |
| R4-154 | Golden ratio: spiral guides eye to center (Fibonacci spiral) | CHALLENGE (C) | IS-5 (anti-physical). Spiral is organic/physical form. | If spiral is compositional guide (invisible structure guiding element placement) = SOUL PASS. If spiral is visible as a curve (rendered as rounded path) = contradicts Soul Piece #1/#5 (sharp edges, squares). Use angular approximation. | AD-004 |
| R4-155 | Masonry: organic, space-efficient layouts (natural feeling) | CHALLENGE (C) | IS-5 (anti-physical). "Organic" and "natural" imply physical world. | If "organic" means variable height (content defines space, IS-8) = SOUL PASS. If "organic" means rounded edges or natural textures = SOUL FAIL. Masonry grid structure itself is flat. | AD-003 |
| R4-156 | Cinematic: shot progression creates emotional journey | CHALLENGE (C) | IS-7 (Unhurried Editor). Emotional manipulation contradicts editorial calm. | If "emotional" means reader engagement through content quality = SOUL PASS (IS-7 trusts reader's intelligence). If "emotional" means UI effects designed to create feelings = contradicts editorial calm. | AD-005 |
| R4-157 | Visual rhythm: "flowing rhythm" like sand dunes | CHALLENGE (C) | IS-5 (anti-physical). Sand dunes = physical metaphor. | If implemented as 2D curves (SVG paths, clip-paths for section shapes) = CONDITIONAL PASS. If implemented as rounded containers or organic shapes = G1/G8 violation. | AD-005 |
| R4-158 | Broken grid: "feels fresh compared to uniform grids" | CHALLENGE (C) | IS-7 (Unhurried Editor). "Fresh" suggests trend-following over editorial authority. | If "fresh" means compositionally distinctive = SOUL PASS. If "fresh" means following web design trends (parallax, gradients, animations) = contradicts identity. | AD-006 |
| R4-159 | Diagonal: "sense of action and excitement" | CHALLENGE (C) | IS-7 (Unhurried Editor). "Excitement" contradicts calm restraint. | If excitement is visual energy from geometric composition = CONDITIONAL PASS. If excitement requires animation or dynamic effects = contradicts editorial calm. Static diagonals are editorial graphic design. | AD-005 |
| R4-160 | Cinematic: montage quick cuts "create energy" | CHALLENGE (C) | IS-7 (Unhurried Editor). "Energy" can mean urgency that contradicts unhurried approach. | If "quick cuts" means concise, high-density content sections = SOUL PASS. If "quick cuts" means rapid animation transitions = SOUL FAIL. | AD-005 |
| R4-161 | Bento: Apple-style became 2020s design standard | CHALLENGE (C) | Soul Test: "Could this exist in a Bootstrap/Material project without modification?" If using standard Apple bento = YES = FAIL. | Must be differentiated via sharp edges + no shadows + limited palette to pass Soul Test. Generic bento = fails identity. KortAI bento = soul-compliant bento. | AD-003 |
| R4-162 | Hub-and-spoke: default pattern on iPhone | CHALLENGE (C) | Same Soul Test issue. Standard implementation = generic. | Must be differentiated via flat navigation, typographic hierarchy, border-based active states. | AD-003 |
| R4-163 | Progressive disclosure: tabs as standard UI pattern | CHALLENGE (C) | Same Soul Test issue. Standard tabs = Bootstrap/Material. | Must use flat tabs with bottom-border active indicator, no rounded tab shapes, no shadow. KortAI tabs = soul-compliant tabs. | ALL |
| R4-164 | Progressive disclosure: dropdown menus as standard UI pattern | CHALLENGE (C) | Same Soul Test issue. Standard dropdowns = Bootstrap/Material. | Must use flat dropdown with no rounded corners, no shadow, solid border. | ALL |
| R4-165 | Masonry: Pinterest-style gallery as reference | CHALLENGE (C) | Same Soul Test issue. Pinterest-style = rounded corners, shadows. | Must be flat masonry: sharp edges, solid borders, no card shadows. KortAI masonry = differentiated. | AD-003 |
| R4-166 | Broken grid: "unpredictability grabs attention" | CHALLENGE (C) | IS-7 (Unhurried Editor). Unpredictability contradicts editorial consistency. | If unpredictability is compositional variety within a coherent system = CONDITIONAL PASS. If it means random, inconsistent layout = contradicts fractal self-similarity (DD-F-006). | AD-006 |
| R4-167 | "Disruption in established rhythm demands attention" | CHALLENGE (C) | IS-7, DD-F-006. Disruption must serve the system, not break it. | If disruption is a DESIGNED break (callout, Essence box) = SOUL PASS. If disruption is arbitrary = contradicts fractal coherence. Only break rhythm with soul-compliant components. | ALL |
| R4-168 | Diagonal: "challenge to static horizontal/vertical" | CHALLENGE (C) | IS-3 (flat grid/layout). The grid system is fundamentally horizontal/vertical. | Diagonals supplement but don't replace the grid. They are accents within the flat system, not alternatives to it. Overuse contradicts structural honesty. | AD-005 |

═══════════════════════════════════════════════════════════════════════════════
## D. CONDITIONAL FAIL (12 findings)
═══════════════════════════════════════════════════════════════════════════════

These findings likely fail but contain edge cases worth documenting for reference.

| Finding ID | Short Description | Classification | Why It Likely Fails | Edge Case Worth Noting | Target AD(s) |
|------------|-------------------|----------------|--------------------|-----------------------|---------------|
| R4-169 | Bento: 3D Bento (depth and layering) trend | CONDITIONAL FAIL | "Depth and layering" = z-axis = ANTI-PHYSICAL (G5, G6). | If "depth" means visual layering via z-index without shadows = possible but contradicts intent. Original source clearly means 3D CSS effects. | -- |
| R4-170 | Scrolljacking: hijacking scroll behavior for effect | CONDITIONAL FAIL | Scrolljacking disrupts natural scroll (IS-7 editorial calm contradicted). NN/G rates it as high-risk. | If scrolljacking is extremely minimal (slow down scroll in one section, no direction change) AND has reduced-motion fallback = narrow edge case. But generally fails. | -- |
| R4-171 | Diagonal: header "creates depth and visual interest as first impression" | CONDITIONAL FAIL | When "depth" is the stated goal (not a compositional side-effect), it implies the technique is being used for z-axis simulation. | If the diagonal is purely 2D clip-path and the "depth" is incidental perception, not engineered via shadows/transforms = R4-132 (CONDITIONAL PASS). But when depth is the PRIMARY goal, intent matters. | -- |
| R4-172 | Cinematic: "wide shots create distance" between reader and content | CONDITIONAL FAIL | "Distance" implies spatial relationship = ANTI-PHYSICAL. | If "distance" means contextual overview (zoomed-out information density) = acceptable. But the cinematic metaphor inherently implies physical camera positioning. Document for awareness, implement as content structure. | AD-005 |
| R4-173 | Broken grid: "creates unpredictability" as primary value proposition | CONDITIONAL FAIL | Unpredictability as primary value = contradicts fractal self-similarity (DD-F-006) and editorial consistency (IS-7). | If unpredictability is ONE element within a coherent system = CHALLENGE. When it's the PRIMARY value = fails consistency requirement. | -- |
| R4-174 | Visual rhythm: random rhythm (no discernible pattern) | CONDITIONAL FAIL | Random = anti-fractal. DD-F-006 requires self-similar patterns at all scales. | If "random" is a single controlled section within an otherwise patterned page (like a "creative zone" in OD-006) = narrow edge case. But random as system principle = fail. | -- |
| R4-175 | Diagonal: "transform: rotate(-3deg)" for dividers in isolation | CONDITIONAL FAIL | CSS transform on divider. Static rotation = flat graphic (no animation). But rule says "transform on hover not permitted" (G5). This is not hover, but transform usage warrants caution. | G5 specifically says "translateY() on hover." A static, non-hover, non-z-axis rotate is technically permitted. But creates precedent for transform usage. Prefer clip-path approach instead. | AD-005 |
| R4-176 | Cinematic: "jump cuts create urgency" as visual technique | CONDITIONAL FAIL | "Urgency" contradicts IS-7 (Unhurried Editor). The editor is never urgent. | If "urgency" is reframed as "conciseness" (dense, efficient content) = CONDITIONAL PASS. But the cinematic framing implies visual speed/animation. | -- |
| R4-177 | Broken grid: "communicates innovation and forward-thinking" as goal | CONDITIONAL FAIL | Communicating "innovation" through layout = trend-following. IS-7 says "nothing to prove." | If innovation is in CONTENT not LAYOUT = acceptable. But using layout to signal innovation contradicts editorial identity. | -- |
| R4-178 | Scrolljacking: "controlled sections" with direction change | CONDITIONAL FAIL | Direction change = cognitive load. Contradicts editorial calm. | If the section is a contained gallery with clear affordances AND reduced-motion alternative = narrow edge case. Generally fails for documentation. | -- |
| R4-179 | Axis transition: scroll-triggered horizontal animation | CONDITIONAL FAIL | Animation triggered by scroll implies scroll-content coupling = scrolljacking-adjacent. | If animation is CSS scroll-driven (no JS hijacking) and has reduced-motion fallback = narrow edge case. But the technique inherently risks the ANTI-PHYSICAL violation via perceived movement. | -- |
| R4-180 | Bento: animated reorganization on scroll | CONDITIONAL FAIL | Animated grid reorganization implies elements moving through 2D/3D space = movement simulation. | If reorganization is instant (no transition animation) and triggered by breakpoint (not scroll) = acceptable. But scroll-triggered animation = ANTI-PHYSICAL adjacent. | -- |

═══════════════════════════════════════════════════════════════════════════════
## E. SOUL FAIL (12 findings)
═══════════════════════════════════════════════════════════════════════════════

These findings require mechanisms explicitly prohibited by the soul. REJECTED.

| Finding ID | Short Description | Classification | Violated Gate(s) | Why Rejected |
|------------|-------------------|----------------|-------------------|--------------|
| R4-181 | Bento: 3D Bento with CSS perspective and depth layering | SOUL FAIL | G2 (box-shadow), G5 (translateY), G6 (z-space), G7 (gradients) | Explicitly requires CSS 3D transforms, perspective property, and depth effects. Foundational ANTI-PHYSICAL violation. |
| R4-182 | Diagonal: header with parallax scroll depth effect | SOUL FAIL | G6 (parallax/z-space) | Parallax is the canonical ANTI-PHYSICAL violation. Implies elements exist at different z-depths. 20/20 SOUL FAIL confirmed. |
| R4-183 | Broken grid: elements with box-shadow for "floating" effect | SOUL FAIL | G2 (box-shadow) | box-shadow: none is non-negotiable (Soul Piece #4). "Floating" = false depth. |
| R4-184 | Broken grid: rounded overlapping elements | SOUL FAIL | G1 (border-radius), G8 (rounded shapes) | border-radius > 0 violates Soul Piece #1 and #5. |
| R4-185 | Grid cards with hover shadow/lift effect | SOUL FAIL | G2 (box-shadow), G5 (translateY on hover) | Hover lift + shadow = animated z-movement + false depth. Double violation. |
| R4-186 | Progress indicators with rounded ends (pill-shaped bars) | SOUL FAIL | G1 (border-radius), G8 (rounded shapes) | Pill-shaped = border-radius: 9999px. Direct Soul Piece #1/#5 violation. |
| R4-187 | Masonry items with rounded corner frames | SOUL FAIL | G1 (border-radius) | border-radius > 0 on containers is non-negotiable. |
| R4-188 | Tab navigation with rounded tab shapes | SOUL FAIL | G1 (border-radius) | Rounded tabs = physical affordance (physical tab metaphor). Sharp-edge tabs only. |
| R4-189 | Progressive disclosure with gradient reveal animation | SOUL FAIL | G7 (gradients suggesting material) | Gradient reveal = light/material interaction simulation. |
| R4-190 | Modal/popover with backdrop blur (filter: blur) | SOUL FAIL | G3 (filter effects), G7 (material simulation) | Backdrop blur simulates glass/material depth. filter effects are not permitted. |
| R4-191 | Diagonal: gradient color transitions along diagonal | SOUL FAIL | G7 (gradients suggesting material/light) | Gradient = light interaction. Diagonals must use solid colors from locked palette. |
| R4-192 | Cards with semi-transparent rgba overlays for layered appearance | SOUL FAIL | G4 (opacity < 1.0) | rgba alpha < 1.0 creates shadow-like visual effect. opacity === 1.0 binary gate. |

---

═══════════════════════════════════════════════════════════════════════════════
## AD TARGET ALLOCATION SUMMARY
═══════════════════════════════════════════════════════════════════════════════

Findings allocated to each AD exploration (SOUL PASS + CONDITIONAL PASS only):

| AD | Pattern | Total Findings | SOUL PASS | COND PASS | Key Themes |
|----|---------|----------------|-----------|-----------|------------|
| AD-001 | Z-Pattern | 18 | 14 | 4 | Reading gravity, diagonal sweep, CTA placement, Gutenberg terminal area |
| AD-002 | F-Pattern | 22 | 16 | 6 | Text scanning, left-aligned hierarchy, front-loading, progressive disclosure |
| AD-003 | Bento Grid | 34 | 20 | 14 | Varied cell sizes, masonry, hub-spoke navigation, sharp-edge grid cells |
| AD-004 | Spiral | 14 | 10 | 4 | Golden ratio, Fibonacci proportions, flowing rhythm, geological mapping |
| AD-005 | Choreography | 38 | 18 | 20 | Cinematic flow, axis transitions, diagonal accents, rhythm structures, movement patterns |
| AD-006 | Compound | 42 | 28 | 14 | Multi-pattern composition, broken grid creative, pattern layering, all synthesis recommendations |

**Note:** Many findings target multiple ADs. Counts above include all allocations.
**Note:** AD-006 (Compound) receives the most findings as the crown jewel exploration, consistent with OD-006's crown jewel status.

---

═══════════════════════════════════════════════════════════════════════════════
## CROSS-REFERENCE: IDENTITY GATE VIOLATION FREQUENCY
═══════════════════════════════════════════════════════════════════════════════

| Gate | Violations Found | Most Common Context |
|------|-----------------|---------------------|
| G1 (border-radius:0) | 4 (R4-184, R4-186, R4-187, R4-188) | Rounded cards, pill bars, rounded tabs, rounded frames |
| G2 (box-shadow:none) | 3 (R4-183, R4-185, R4-181) | Floating cards, hover shadows, 3D depth |
| G3 (filter:drop-shadow) | 1 (R4-190) | Backdrop blur |
| G4 (opacity===1.0) | 1 (R4-192) | Semi-transparent overlays |
| G5 (no hover translateY) | 2 (R4-185, R4-181) | Hover lift, 3D transforms |
| G6 (no parallax/z-space) | 2 (R4-182, R4-181) | Parallax, CSS perspective |
| G7 (no material gradients) | 3 (R4-189, R4-191, R4-181) | Gradient reveals, diagonal gradients, 3D gradients |
| G8 (no rounded physical shapes) | 2 (R4-184, R4-186) | Rounded badges, pill-shaped bars |
| G9 (no traffic-light colors) | 0 | (No R-4 findings triggered this gate) |
| G10 (no 2px decorative borders) | 0 | (No R-4 findings triggered this gate) |

**Pattern:** G1 (rounded corners) is the most frequently violated gate in axis/layout research, consistent with the web industry's default rounded-corner convention. G7 (material gradients) is second, reflecting the prevalence of gradient effects in modern web design.

---

═══════════════════════════════════════════════════════════════════════════════
## STRATEGIC NOTES FOR AD EXECUTION
═══════════════════════════════════════════════════════════════════════════════

### 1. R-4 Research is Overwhelmingly Soul-Compatible

78.1% of findings are directly usable (SOUL PASS + CONDITIONAL PASS). This is because R-4 focuses on axis PATTERNS (reading gravity, grid structure, rhythm) rather than axis DECORATION (shadows, rounded corners, gradients). The patterns themselves are abstract spatial principles that map cleanly to the ANTI-PHYSICAL identity.

### 2. The CONDITIONAL PASS Adaptations Follow Two Themes

**Theme A: "Flat it down"** -- Standard web implementations (rounded tabs, shadowed cards, gradient reveals) must be replaced with soul-compliant equivalents (flat tabs with border-bottom, flat cards with solid borders, solid-color reveals).

**Theme B: "Static not animated"** -- Movement-based findings (scrolljacking, triggered horizontal scroll, animated grids) must be either made static or given reduced-motion prophylactic treatment.

### 3. The CHALLENGE Findings All Have the Same Root

Every CHALLENGE finding involves a metaphor that implies physical space (depth, zoom, distance, movement) while being implementable as flat 2D design. The decision tree is consistent: **if the metaphor's CSS implementation is purely 2D, it passes. If the CSS implementation requires 3D transforms, shadows, or opacity, it fails.** The metaphor is not the problem -- the implementation is.

### 4. OD-F-FL-001 Transitive Chain is Confirmed

The R-4 research validates the transitive chain: org -> density -> axis.
- CONVERSATIONAL (OD-001) -> PULSE -> Z-PATTERN / F-PATTERN (vertical scanning rhythm)
- NARRATIVE (OD-002) -> CRESCENDO -> F-PATTERN (progressive build)
- TASK-BASED (OD-003) -> ISLANDS -> BENTO GRID (compartmentalized tasks)
- CONFIDENCE (OD-004) -> GEOLOGICAL -> SPIRAL/GOLDEN RATIO (layered depth)
- SPATIAL (OD-005) -> WAVE -> CHOREOGRAPHY (cinematic movement)
- CREATIVE (OD-006) -> ALL -> COMPOUND (all patterns combined)

### 5. DD-F-006 (Fractal) Applies to All Axis Patterns

Every axis pattern must demonstrate fractal self-similarity at 5 scales. The R-4 research provides the raw material; DD-F-006 provides the structural requirement. Axis patterns that only work at one scale (page-level Z-pattern but no section-level or component-level echo) will score lower.

### 6. Semi-Transparent Background Sweep Required

Per v1.1 Wave 3 forward question #3: AD must specifically target `rgba(` and `opacity:` in all explorations. The R-4 research itself doesn't introduce many opacity violations (only R4-192 explicitly), but builders historically introduce semi-transparent backgrounds. Gate G4 must be enforced during building, not just evaluation.

---

**Document Complete: 192/192 findings classified.**
**Evaluator Status: COMPLETE**
