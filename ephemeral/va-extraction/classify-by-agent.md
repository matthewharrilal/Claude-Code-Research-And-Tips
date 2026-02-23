# CLASSIFICATION BY TARGET AGENT ROLE

**Classifier:** classifier-by-agent (Opus)
**Date:** 2026-02-23
**Source files:** 8 extraction files (extract-d01-d03.md through extract-d21-d25.md)
**Total items classified:** 885
**Method:** Primary consumer assignment — "Which agent needs to READ this item to do its job correctly?"

---

## SUMMARY COUNTS

| Agent Role | Primary Items | Description |
|---|---|---|
| BUILDER | 287 | CSS/HTML writer (Phase 2) — receives brief, builds page |
| ORCHESTRATOR | 168 | Pipeline coordinator — routes, assigns, verdicts |
| GATE-RUNNER | 112 | Programmatic verification (Phase 3) — binary checks |
| PA-AUDITOR | 89 | Perceptual audit (Phase 3) — visual assessment |
| TC-ASSEMBLER | 78 | Brief assembly (Phase 1) — merges template + content map |
| CONTENT-ANALYST | 62 | Content extraction (Phase 0) — classifies content |
| PIPELINE-META | 89 | Pipeline process itself — experiment protocol, evidence status |

---

## BUILDER (287 items)

The builder agent writes CSS/HTML in Phase 2. Items classified here are things the builder must READ or EMBODY to produce correct output.

### From extract-d01-d03.md (Diagrams 1-3)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D1-I20 | 1 | DECISION | 10 soul constraints as WORLD-DESCRIPTION | TC-ASSEMBLER |
| D1-I21 | 1 | RECOMMENDATION | "Every surface is sharp. Corners are cut, not curved" | — |
| D1-I22 | 1 | THRESHOLD | border-radius:0, box-shadow:none, container 940-960px | GATE-RUNNER |
| D1-I23 | 1 | THRESHOLD | warm palette (R>=G>=B), font trinity, no gradients | GATE-RUNNER |
| D1-I26 | 1 | THRESHOLD | >=15 RGB bg delta | GATE-RUNNER |
| D1-I27 | 1 | THRESHOLD | >=0.025em letter-spacing | GATE-RUNNER |
| D1-I28 | 1 | THRESHOLD | <=120px stacked gap | GATE-RUNNER |
| D1-I29 | 1 | THRESHOLD | <=96px single margin | GATE-RUNNER |
| D1-I30 | 1 | DECISION | All CSS must be perceptible to human eye | — |
| D1-I32 | 1 | VALUE | Multi-Coherence (18L): 6 channels, 4 directions, boundary-by-boundary | TC-ASSEMBLER |
| D1-I33 | 1 | VALUE | Structural Metaphor (8L): derive from content, embody in CSS not labels | — |
| D1-I34 | 1 | VALUE | Density Arc (6L): OPENING->DEEPENING->RESOLVING | — |
| D1-I35 | 1 | VALUE | Content-Form Coupling (4L): per-section decisions driven by content meaning | — |
| D1-I36 | 1 | VALUE | Creative Authority + Components (8L): 80% creative / 20% constraint | — |
| D1-I37 | 1 | VALUE | CSS Value Table (6L) | — |
| D1-I38 | 1 | DECISION | Tier 4: DISPOSITION (8 instructions, ~40 lines) | TC-ASSEMBLER |
| D1-I39 | 1 | VALUE | D-01: Content-Register Reading | — |
| D1-I40 | 1 | VALUE | D-02: Room Perception at Boundaries | — |
| D1-I41 | 1 | VALUE | D-03: The Signing Frame | — |
| D1-I42 | 1 | VALUE | D-04: The Second-Half Moment | — |
| D1-I43 | 1 | VALUE | D-05: The Reader's Scroll | — |
| D1-I44 | 1 | VALUE | D-06: Negative Space as Shape (NEW) | — |
| D1-I45 | 1 | VALUE | D-07: Edge Intentionality (NEW) | — |
| D1-I46 | 1 | VALUE | D-08: The Skeleton Test (NEW) | — |
| D1-I50 | 1 | FILE_REF | Input #1: Activation brief (~100 lines) | — |
| D1-I51 | 1 | FILE_REF | Input #2: Content source material | — |
| D1-I52 | 1 | FILE_REF | Input #3: tokens.css (direct Tier 1 vocabulary) | — |
| D1-I53 | 1 | FILE_REF | Input #4: components.css (pre-built component library) | — |
| D1-I54 | 1 | FILE_REF | Input #5: CD-006 reference (optional crown jewel) | — |
| D1-I59 | 1 | PROCESS | Step 1: Write conviction statement | — |
| D1-I60 | 1 | PROCESS | Step 2: Build header + Zone 1 (OPENING) | — |
| D1-I61 | 1 | PROCESS | Step 3: SELF-EVALUATE (Playwright screenshot) | — |
| D1-I62 | 1 | DECISION | Builder SEES its own output (Tier 4 info via EXPERIENCE) | — |
| D1-I63 | 1 | PROCESS | Step 4: Adjust if needed | — |
| D1-I64 | 1 | PROCESS | Step 5: Build Zone 2-3 (DEEPENING) | — |
| D1-I65 | 1 | PROCESS | Step 6: MIDPOINT SELF-EVALUATE | — |
| D1-I66 | 1 | PROCESS | Step 7: Build Zone 4 + footer (RESOLVING) | — |
| D1-I67 | 1 | PROCESS | Step 8: FINAL SELF-EVALUATE at 1440px + 768px | — |
| D1-I68 | 1 | VALUE | Output: Complete HTML page (800-1200 CSS lines) | GATE-RUNNER |
| D2-I90 | 2 | DECISION | Recipe + disposition format (not checklist) | TC-ASSEMBLER |
| D2-I92 | 2 | DECISION | "This world IS / You ARE" voice | TC-ASSEMBLER |
| D2-I98 | 2 | DECISION | Single builder, self-evaluating | — |
| D2-I100 | 2 | DECISION | Opus builder (non-negotiable) | ORCHESTRATOR |
| D2-I102 | 2 | DECISION | Builder HAS Playwright | ORCHESTRATOR |
| D2-I108 | 2 | DECISION | Builder generates CSS values WITH perception physics | — |
| D2-I112 | 2 | DECISION | Fresh builder in COMPOSING mode | — |
| D2-I114 | 2 | DECISION | Generative/artistic language | ORCHESTRATOR |
| D2-I120 | 2 | DECISION | Builder sees frameworks only (not gates) | ORCHESTRATOR |
| D2-I124 | 2 | DECISION | Builder optimizes for quality (not gates) | — |
| D2-I126 | 2 | VALUE | PREDICTED: Vocabulary + correct MODE = COMPOSING not COMPLYING | — |
| D3-I137 | 3 | DECISION | Builder enters COMPOSING mode (not COMPLYING/PLANNING/REPAIRING) | — |
| D3-I138 | 3 | DECISION | Recipe format (not checklist) | TC-ASSEMBLER |
| D3-I139 | 3 | VALUE | 8 dispositional instructions | — |
| D3-I140 | 3 | VALUE | Creative authority (80/20) | — |
| D3-I141 | 3 | DECISION | World-description voice | TC-ASSEMBLER |
| D3-I143 | 3 | DECISION | Capability 1: Compositional Fluency — mechanisms deployed interdependently | — |
| D3-I145 | 3 | DECISION | Capability 2: Peak-Valley Rhythm — designed moments within baseline | — |
| D3-I146 | 3 | DECISION | Both capabilities EMERGENT from conditions | — |

### From extract-d04-d05.md (Diagrams 4-5)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D4-I16 | 4 | DECISION | Builder receives 4 inputs: brief, content, tokens.css, components.css | ORCHESTRATOR |
| D4-I17 | 4 | VALUE | Brief ~113 lines | — |
| D4-I18 | 4 | VALUE | tokens.css 183 lines | — |
| D4-I19 | 4 | VALUE | components.css 290 lines | — |
| D4-I20 | 4 | DECISION | tokens.css and components.css as DIRECT FILE | ORCHESTRATOR |
| D5-I33 | 5 | DECISION | 73 lines + disposition + value tables = Flagship target | — |

### From extract-d06-d08.md (Diagrams 6-8)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D6-I2 | 6 | PROCESS | Pass 1: STRUCTURAL SKELETON + PERVADING METAPHOR (20-35 min) | ORCHESTRATOR |
| D6-I3 | 6 | DECISION | Mode: GENERATIVE (composing, not complying) | — |
| D6-I5 | 6 | VALUE | Pass 1 Input: Activation brief + content + 73-line constraints | ORCHESTRATOR |
| D6-I6 | 6 | THRESHOLD | 73-line constraints cap | — |
| D6-I7 | 6 | VALUE | Pass 1 Output: Complete HTML/CSS, skeleton strong, metaphor established | — |
| D6-I14 | 6 | VALUE | Example critic output (compositional, metaphorical, section-level) | — |
| D6-I18 | 6 | PROCESS | Pass 2: ATMOSPHERIC ENRICHMENT + MECHANISM COUPLING (15-25 min) | ORCHESTRATOR |
| D6-I19 | 6 | DECISION | Mode: COMPOSITIONAL (refining relationships, not fixing) | — |
| D6-I21 | 6 | DECISION | FRESH Opus instance — defeats continuation bias | ORCHESTRATOR |
| D6-I22 | 6 | VALUE | Pass 2 Input: Pass 1 output + Critic feedback + value tables | ORCHESTRATOR |
| D6-I23 | 6 | VALUE | Pass 2 Output: Enriched page, mechanisms INTERACT not coexist | — |
| D6-I25 | 6 | PROCESS | Pass 3: TERMINAL CRAFT + DESIGNED MOMENTS (10-20 min) | ORCHESTRATOR |
| D6-I26 | 6 | DECISION | Mode: POLISHING (detail attention, not structural change) | — |
| D6-I28 | 6 | VALUE | Pass 3 Input: Pass 2 output + Critic's final impressions | ORCHESTRATOR |
| D6-I29 | 6 | VALUE | Pass 3 Output: Finished page, responsive, accessible, designed moments | — |
| D6-I38 | 7 | DECISION | Builder Cognitive Mode: ACTIVATED via D-01 through D-08 | TC-ASSEMBLER |
| D6-I48 | 7 | DECISION | Intentional Composition: ACTIVATED + EMERGENT via multi-coherence + metaphor | — |
| D6-I49 | 7 | DECISION | Peak-Valley Architecture: ACTIVATED via D-04 + density arc | — |
| D6-I59 | 7 | DECISION | Temporal Composition: ACTIVATED via density arc + D-06 neg space | — |
| D6-I62 | 7 | DECISION | Emotional Arc: EMERGENT from D-04 + D-05 + arc framing | — |
| D6-I93 | 8 | DECISION | "Right vocabulary, WRONG MODE of composition" diagnosis | ORCHESTRATOR |
| D6-I95 | 8 | RECOMMENDATION | Pipeline v3 addresses via dispositional recipe + activation arch + COMPOSING gatekeeper | ORCHESTRATOR |
| D8-I79 | 8 | THRESHOLD | Material Authenticity: fixable by prompt (star) | TC-ASSEMBLER |
| D8-I80 | 8 | THRESHOLD | Detail Density: fixable by prompt (star) | TC-ASSEMBLER |
| D8-I81 | 8 | THRESHOLD | Typographic Craft: fixable by prompt (star) | TC-ASSEMBLER |

### From extract-d09-d11.md (Diagrams 9-11)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D11-I76 | 11 | AGENT_ROLE | Agent 3 (Opus): Build + self-evaluate + adjust | — |
| D11-I77 | 11 | PROCESS | Zone1->screenshot->Zone2-3->screenshot->Zone4+footer->final screenshot | — |
| D11-I78 | 11 | VALUE | Output: complete HTML (800-1200 CSS) | GATE-RUNNER |

### From extract-d12-d14.md (Diagrams 12-14)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D12-I7 | 12 | VALUE | Hex colors (#E83025) survive compression | — |
| D12-I8 | 12 | VALUE | Pixel measurements (64px) survive compression | — |
| D12-I9 | 12 | VALUE | Border weights (4/3/1px) survive compression | — |
| D12-I10 | 12 | VALUE | Font sizes (1rem, 0.875rem) survive compression | — |
| D12-I11 | 12 | VALUE | Spacing scale (4-96px) survive compression | — |
| D12-I12 | 12 | VALUE | Token names (--color-primary) survive compression | — |
| D12-I15 | 12 | DECISION | Which values should CO-OCCUR — builder must regenerate | — |
| D12-I16 | 12 | DECISION | Which values should CONTRAST — builder must regenerate | — |
| D12-I17 | 12 | DECISION | Which values should VARY TOGETHER across zones — builder regenerates | — |
| D12-I18 | 12 | DECISION | How channels interact at zone boundaries — builder regenerates | — |
| D12-I19 | 12 | DECISION | Why THIS value pairs with THAT value — builder regenerates | — |
| D12-I20 | 12 | DECISION | Combinations must be REGENERATED by the builder | — |
| D12-I23 | 12 | VALUE | New: "Room perception at boundaries" (RELATION, not threshold) | — |
| D12-I24 | 12 | DECISION | D-02 replaces threshold with perceptual instruction | — |
| D12-I25 | 12 | DECISION | Builder with Opus intelligence generates BOTH values AND relationships | — |
| D12-I27 | 12 | DECISION | Builder EXCEEDS its specification when in COMPOSING mode | — |
| D13-I29 | 13 | DECISION | Temporal Composition: static CSS creates time-based experience | — |
| D13-I30 | 13 | DECISION | Every reader experiences page TEMPORALLY (scroll) | — |
| D13-I32 | 13 | DECISION | THREE DIMENSIONS of scroll rhythm | — |
| D13-I33 | 13 | DECISION | A. SECTION HEIGHT (measure length) | — |
| D13-I34-37 | 13 | VALUE | Gas Town zone heights: Z1 ~600px, Z2 ~1800px, Z3 ~2400px, Z4 ~1200px | — |
| D13-I38-45 | 13 | VALUE | CD-006 section heights: S1-S8 (~700-1100px, regular rhythm) | — |
| D13-I46 | 13 | DECISION | Gas Town pattern: SHORT->LONG->LONGEST->MOD (crescendo+release) | — |
| D13-I47 | 13 | DECISION | CD-006 pattern: REGULAR 4/4 time | — |
| D13-I48 | 13 | DECISION | B. VISUAL DENSITY (dynamics — loud/quiet) | — |
| D13-I49-52 | 13 | VALUE | Gas Town density: Z1 SPARSE, Z2 MODERATE, Z3 DENSE, Z4 MODERATE | — |
| D13-I53-60 | 13 | VALUE | CD-006 density: S1 MED, S2-S3 HIGH, S4 V.HIGH, S5 HIGH, S6-S7 MED, S8 LOW | — |
| D13-I61 | 13 | DECISION | Gas Town density: CRESCENDO+RELEASE | — |
| D13-I62 | 13 | DECISION | CD-006 density: PLATEAU+TAPER | — |
| D13-I63 | 13 | DECISION | C. TRANSITION WEIGHT (articulation — staccato/legato) | — |
| D13-I64 | 13 | VALUE | Light (1px + 48px gap) = legato, smooth flow | — |
| D13-I65 | 13 | VALUE | Medium (3px + 80px gap) = breathing rest | — |
| D13-I66 | 13 | VALUE | Heavy (colored bg + text) = full stop | — |
| D13-I74 | 13 | DECISION | Scroll rhythm EMERGES from height x density x transitions | — |
| D14-I82 | 14 | VALUE | line-height: 1.5 [Expert] ... 1.8 [General] | — |
| D14-I83 | 14 | VALUE | font-size: 15px [Expert] ... 18px [General] | — |
| D14-I84 | 14 | VALUE | max-width: 70ch [Expert] ... 55ch [General] | — |
| D14-I86 | 14 | VALUE | 3-4 components/viewport [Expert] ... 2 [General] | — |
| D14-I87 | 14 | VALUE | Compound grids [Expert] ... Simple stacks [General] | — |
| D14-I89 | 14 | VALUE | None (show everything) [Expert] ... Collapsible sections [General] | — |
| D14-I90 | 14 | VALUE | Trust reader to scan [Expert] ... Flag key points [General] | — |
| D14-I92 | 14 | VALUE | Optional TOC [Expert] ... Mandatory TOC + map [General] | — |
| D14-I95 | 14 | VALUE | Minimal header [Expert] ... Expansive header [General] | — |
| D14-I96 | 14 | VALUE | 30-50% less header height [Expert] | — |

### From extract-d15-d17.md (Diagrams 15-17)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D17-I74 | 17 | DECISION | Per-page creative decisions: what VARIES | — |
| D17-I75 | 17 | VALUE | Zone background strategy + colors (per-page) | — |
| D17-I76 | 17 | VALUE | Type scale values + naming (per-page) | — |
| D17-I77 | 17 | VALUE | Structural metaphor vocabulary (per-page) | — |
| D17-I78 | 17 | VALUE | Callout variant semantics (per-page) | — |
| D17-I79 | 17 | VALUE | Component selection + layout (per-page) | — |
| D17-I80 | 17 | VALUE | Container width 960px vs 1100px (per-page) | GATE-RUNNER |
| D17-I81 | 17 | VALUE | Hover behavior patterns (per-page) | — |
| D17-I82 | 17 | VALUE | Transition type vocabulary (per-page) | — |
| D17-I85 | 17 | PROCESS | Builder reads tokens.css (183 lines) -> shared vocabulary | ORCHESTRATOR |
| D17-I86 | 17 | VALUE | tokens.css (183 lines) | — |
| D17-I87 | 17 | PROCESS | Builder reads components.css (290 lines) -> shared DNA | ORCHESTRATOR |
| D17-I88 | 17 | VALUE | components.css (290 lines) | — |
| D17-I89 | 17 | PROCESS | 73-line template embeds soul -> shared identity | TC-ASSEMBLER |
| D17-I90 | 17 | VALUE | 73-line template | TC-ASSEMBLER |
| D17-I91 | 17 | PROCESS | Per-page metaphor + zone strategy -> page uniqueness | — |

### From extract-d18-d20.md (Diagrams 18-20)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D18-I10 | 18 | WARNING | Builder must receive calibration: subtle (15-25 RGB) vs dramatic (40-60+ RGB) | TC-ASSEMBLER |
| D20-I50 | 20 | DECISION | Swiss Army Knife vs Orchestra distinction | — |
| D20-I51 | 20 | DECISION | APPLIED: each mechanism solves LOCAL content problem | — |
| D20-I52 | 20 | DECISION | COMPOSED: each mechanism serves GOVERNING LOGIC | — |
| D20-I54 | 20 | PROCESS | Composed mode Q: "What does the page's CONCEPT need here?" | — |
| D20-I57 | 20 | DECISION | CSS custom property naming: smoking gun for mode | GATE-RUNNER |
| D20-I58 | 20 | VALUE | APPLIED: --bg-z1, --bg-z2 (position-based) | — |
| D20-I59 | 20 | VALUE | COMPOSED: --dispatch-open, --dispatch-tactical (concept-based) | — |
| D20-I61 | 20 | DECISION | Named by CONCEPT = Composed mode indicator | GATE-RUNNER |
| D20-I63 | 20 | RECOMMENDATION | Name PREDICTS other CSS: classified = heavier borders = tighter spacing | — |
| D20-I64 | 20 | VALUE | APPLIED: callouts styled identically across all zones | GATE-RUNNER |
| D20-I65 | 20 | VALUE | COMPOSED: callouts adapt to zone context | GATE-RUNNER |
| D20-I66 | 20 | THRESHOLD | Zone-1 callout padding: 20px 24px (generous) | — |
| D20-I67 | 20 | THRESHOLD | Zone-3 callout padding: 12px 16px (compressed) | — |
| D20-I68 | 20 | THRESHOLD | Zone-3 callout border-left-width: 5px (heavier) | — |
| D20-I78 | 20 | PROCESS | Governing logic: articulable in 1 sentence | — |
| D20-I79 | 20 | DECISION | MODE SET AT BUILD START by specification format | ORCHESTRATOR |
| D20-I82 | 20 | PROCESS | Conditions for COMPOSED: D-01, D-02, recipe, 80% authority, Opus | ORCHESTRATOR |
| D20-I83 | 20 | DEPENDENCY | D-01 content-register reading prerequisite | — |
| D20-I84 | 20 | DEPENDENCY | D-02 room perception prerequisite | — |
| D20-I85 | 20 | THRESHOLD | 80% creative authority | — |

### From extract-d21-d25.md (Diagrams 21-25)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D21-I1 | 21 | DECISION | 4 emotional registers: Surprise, Delight, Authority, Earned Closure | PA-AUDITOR |
| D21-I2 | 21 | DECISION | 1. SURPRISE: moment reader didn't expect | — |
| D21-I3 | 21 | RECOMMENDATION | Scale break: headline 2.5x body size | — |
| D21-I4 | 21 | RECOMMENDATION | Color inversion: dark zone mid-page | — |
| D21-I5 | 21 | RECOMMENDATION | Layout rupture: grid after 4+ single-column viewports | — |
| D21-I6 | 21 | RECOMMENDATION | Structural inversion: border-RIGHT in border-LEFT page | — |
| D21-I8 | 21 | PROCESS | D-04 + D-06 create conditions for surprise | — |
| D21-I9 | 21 | DECISION | 2. DELIGHT: small unexpected refinements | — |
| D21-I10 | 21 | RECOMMENDATION | Hover states (table row tint, link border) | — |
| D21-I11 | 21 | RECOMMENDATION | Typographic micro-refinement (tabular-nums, text-indent: -0.02em) | — |
| D21-I12 | 21 | RECOMMENDATION | Zone-specific ::selection colors | — |
| D21-I13 | 21 | RECOMMENDATION | Print-specific styling (@media print) | — |
| D21-I14 | 21 | RECOMMENDATION | First/last child edge treatments | — |
| D21-I16 | 21 | DECISION | 3. AUTHORITY: page knows what it is | — |
| D21-I17 | 21 | RECOMMENDATION | Consistent border-weight hierarchy (4px = primary) | — |
| D21-I18 | 21 | RECOMMENDATION | Restraint (knowing what NOT to use) | — |
| D21-I19 | 21 | RECOMMENDATION | Dense purposeful header (dark bg, tight spacing) | — |
| D21-I20 | 21 | RECOMMENDATION | Zero decorative elements | — |
| D21-I22 | 21 | DECISION | 4. EARNED CLOSURE: ending feels earned | — |
| D21-I23 | 21 | RECOMMENDATION | Footer echoes header (bookending) | — |
| D21-I24 | 21 | RECOMMENDATION | Density arc resolves (Z4 releases Z3 compression) | — |
| D21-I25 | 21 | RECOMMENDATION | Final drop cap or typographic moment | — |
| D21-I26 | 21 | THRESHOLD | Breathing space before footer (80-120px gap) | GATE-RUNNER |
| D21-I28 | 21 | PROCESS | Authority (constant): HIGH throughout | — |
| D21-I29 | 21 | PROCESS | Surprise (rare peak): 1-2 moments, SECOND HALF (D-04) | — |
| D21-I30 | 21 | PROCESS | Delight (steady): distributed, more in high-density zones | — |
| D21-I31 | 21 | PROCESS | Closure (earned): final 2-3 viewports only | — |
| D21-I33 | 21 | DEPENDENCY | D-03 -> AUTHORITY | — |
| D21-I34 | 21 | DEPENDENCY | D-04 -> SURPRISE | — |
| D21-I35 | 21 | DEPENDENCY | D-05 -> CLOSURE | — |
| D21-I36 | 21 | DEPENDENCY | D-07 -> DELIGHT | — |

---

## ORCHESTRATOR (168 items)

The orchestrator coordinates the pipeline: routes information, assigns agents, manages phases, issues verdicts.

### From extract-d01-d03.md (Diagrams 1-3)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D1-I1 | 1 | VALUE | Pipeline v3 = "The Activation Pipeline" | — |
| D1-I2 | 1 | DECISION | Master Equation: Quality = Agent Capability x Content Affordance x Spec Fidelity | — |
| D1-I3 | 1 | WARNING | Zero in ANY factor = zero quality | — |
| D1-I4 | 1 | PROCESS | Pipeline input: raw markdown/articles/research | CONTENT-ANALYST |
| D1-I5 | 1 | PROCESS | PHASE 0: CONTENT ANALYSIS | CONTENT-ANALYST |
| D1-I6 | 1 | AGENT_ROLE | Agent 1: Content Analyst (Opus) | — |
| D1-I13 | 1 | VALUE | Phase 0 output: CONTENT MAP (~30-50 lines) | CONTENT-ANALYST |
| D1-I14 | 1 | DECISION | Content map: what content IS, not what design SHOULD BE | CONTENT-ANALYST |
| D1-I15 | 1 | PROCESS | PHASE 1: ACTIVATION BRIEF ASSEMBLY | TC-ASSEMBLER |
| D1-I16 | 1 | AGENT_ROLE | Agent 2: Brief Assembler (Opus) | TC-ASSEMBLER |
| D1-I17 | 1 | PROCESS | MERGES 73-line template + content map -> ACTIVATION BRIEF | TC-ASSEMBLER |
| D1-I18 | 1 | VALUE | ACTIVATION BRIEF (~93-113 lines) | TC-ASSEMBLER |
| D1-I19 | 1 | DECISION | Tier 1: IDENTITY (15 lines) | TC-ASSEMBLER |
| D1-I24 | 1 | DECISION | Tier 2: PERCEPTION PHYSICS (8 lines) | TC-ASSEMBLER |
| D1-I25 | 1 | DECISION | 4 empirically validated thresholds as NATURAL LAWS | TC-ASSEMBLER |
| D1-I31 | 1 | DECISION | Tier 3: COMPOSITIONAL FRAMEWORKS (50 lines) | TC-ASSEMBLER |
| D1-I47 | 1 | VALUE | CONTENT MAP appended (from Phase 0, ~30-50 lines) | TC-ASSEMBLER |
| D1-I48 | 1 | PROCESS | PHASE 2: BUILDING (The Core Creative Act) | BUILDER |
| D1-I49 | 1 | AGENT_ROLE | Agent 3: BUILDER (Opus — NON-NEGOTIABLE) | BUILDER |
| D1-I55 | 1 | DECISION | Builder must NOT receive gate thresholds (post-build only) | BUILDER |
| D1-I56 | 1 | DECISION | Builder must NOT receive prohibition list beyond soul | BUILDER |
| D1-I57 | 1 | DECISION | Builder must NOT receive count-gates | BUILDER |
| D1-I58 | 1 | DECISION | Builder must NOT receive fix cycle instructions | BUILDER |
| D1-I69 | 1 | PROCESS | PHASE 3: PERCEPTUAL AUDIT (Verification Only) | PA-AUDITOR |
| D1-I70 | 1 | PROCESS | Lead takes ALL screenshots at 1440px, 1024px, 768px | PA-AUDITOR |
| D1-I71 | 1 | DECISION | Screenshots pre-captured to eliminate Playwright contention | PA-AUDITOR |
| D1-I72 | 1 | AGENT_ROLE | PA-1 through PA-7 (6 questions each) | PA-AUDITOR |
| D1-I73 | 1 | AGENT_ROLE | PA-8 Q43-48 | PA-AUDITOR |
| D1-I74 | 1 | AGENT_ROLE | PA-9 Q49-54 | PA-AUDITOR |
| D1-I75 | 1 | AGENT_ROLE | Agent 14: INTEGRATIVE AUDITOR (Opus, NO questions, pure gestalt) | PA-AUDITOR |
| D1-I76 | 1 | AGENT_ROLE | Agent 15: WEAVER (Opus, reads all 10 reports -> VERDICT) | PA-AUDITOR |
| D1-I77 | 1 | THRESHOLD | SHIP: PA-05 >= 3.5/4, zero soul violations | — |
| D1-I78 | 1 | PROCESS | REFINE: PA-05 2.5-3.5, DIFFERENT Opus agent, reads conviction | BUILDER |
| D1-I79 | 1 | PROCESS | REBUILD: PA-05 < 2.5, FRESH builder in COMPOSING mode | BUILDER |
| D1-I80 | 1 | DECISION | Returns to Phase 2 with PA verdict as CONTEXT (generative language) | BUILDER |
| D2-I81 | 2 | VALUE | OLD: PA-05 1.5-3.5/4 | — |
| D2-I82 | 2 | THRESHOLD | NEW target: PA-05 3.5-4.0/4 | — |
| D2-I83 | 2 | VALUE | OLD: 963 lines specification | — |
| D2-I84 | 2 | VALUE | NEW: ~113 lines activation brief | — |
| D2-I85 | 2 | VALUE | OLD: 7.9:1 guardrail-to-playbook | — |
| D2-I86 | 2 | VALUE | NEW: 0.3:1 guardrail-to-playbook | — |
| D2-I87 | 2 | VALUE | OLD: 55 prohibitions | — |
| D2-I88 | 2 | VALUE | NEW: 10 soul constraints | — |
| D2-I89 | 2 | DECISION | OLD: Checklist format | — |
| D2-I91 | 2 | DECISION | OLD: "Verify/Fail if/Must be" voice | — |
| D2-I93 | 2 | VALUE | OLD: 19-34 agents | — |
| D2-I94 | 2 | VALUE | NEW: 12-15 agents | — |
| D2-I95 | 2 | DECISION | OLD: Hierarchical (lead->sub->worker) | — |
| D2-I96 | 2 | DECISION | NEW: Flat (each agent, direct I/O) | — |
| D2-I97 | 2 | DECISION | OLD: Multi-pass build (3-5 passes) | — |
| D2-I99 | 2 | DECISION | OLD: Sonnet builders | — |
| D2-I101 | 2 | DECISION | OLD: Zero Playwright for builders | — |
| D2-I103 | 2 | VALUE | OLD: 83:1 compression through TC | — |
| D2-I104 | 2 | VALUE | NEW: 10:1 regeneration (not compress) | — |
| D2-I105 | 2 | VALUE | OLD: 99-line TC brief with hex values | — |
| D2-I106 | 2 | VALUE | NEW: ~35-line TC brief, routing only | TC-ASSEMBLER |
| D2-I107 | 2 | DECISION | OLD: TC generates CSS without perception physics | TC-ASSEMBLER |
| D2-I109 | 2 | DECISION | OLD: Fix cycles (FIX->FIX->FIX) | — |
| D2-I110 | 2 | DECISION | NEW: REBUILD with fresh builder | — |
| D2-I111 | 2 | DECISION | OLD: Same builder in REPAIR mode | — |
| D2-I113 | 2 | DECISION | OLD: Diagnostic language | — |
| D2-I115 | 2 | WARNING | OLD: S-11 + S-20 suppressors active | — |
| D2-I116 | 2 | VALUE | NEW: Zero repair-mode suppressors | — |
| D2-I117 | 2 | VALUE | OLD: 20 quality suppressors active | — |
| D2-I118 | 2 | VALUE | NEW: 0 suppressors active | — |
| D2-I119 | 2 | DECISION | OLD: Builder sees gates | — |
| D2-I121 | 2 | DECISION | NEW: Gates in orchestrator only | — |
| D2-I122 | 2 | DECISION | OLD: Gates in builder prompt | — |
| D2-I123 | 2 | DECISION | OLD: Builder optimizes for gates | — |
| D2-I125 | 2 | VALUE | OLD: "RIGHT vocabulary, WRONG mode" | — |
| D3-I127 | 3 | DECISION | INPUT PRECONDITIONS: All 3 must be TRUE | — |
| D3-I128 | 3 | THRESHOLD | PRECONDITION 1: Model = OPUS (Agent Capability) | — |
| D3-I130 | 3 | PROCESS | Precondition 1: enforced at Phase 2 model selection | — |
| D3-I131 | 3 | THRESHOLD | PRECONDITION 2: Content has heterogeneity + metaphor viability | CONTENT-ANALYST |
| D3-I133 | 3 | PROCESS | Precondition 2: assessed during Phase 0 | CONTENT-ANALYST |
| D3-I134 | 3 | THRESHOLD | PRECONDITION 3: Suppressor count = 0 | — |
| D3-I136 | 3 | PROCESS | Precondition 3: enforced by 73-line brief format | TC-ASSEMBLER |
| D3-I142 | 3 | THRESHOLD | Sub-200 line brief (mode collapse risk above 200) | TC-ASSEMBLER |
| D3-I144 | 3 | THRESHOLD | CCS ranges: Register 1 = 0.15, Register 3 = 0.80 | PA-AUDITOR |
| D3-I147 | 3 | THRESHOLD | Floor (2.5-3.0): preconditions met, gatekeeper partial | — |
| D3-I148 | 3 | THRESHOLD | Ceiling (3.0-3.5): all met, capabilities at Register 2 | — |
| D3-I149 | 3 | THRESHOLD | Flagship (3.5-4.0): all met, Register 3 + unified metaphor | — |

### From extract-d04-d05.md (Diagrams 4-5)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D4-I1 | 4 | DECISION | INFORMATION FLOW: Dual-Channel + Direct Files | — |
| D4-I2 | 4 | DECISION | 5 information pathways: 2 channels + 2 direct files + 1 feedback loop | — |
| D4-I3 | 4 | FILE_REF | RESEARCH ARCHIVE: 337 findings, ~45,000 lines (NOT passed to builder) | — |
| D4-I4 | 4 | FILE_REF | DESIGN SYSTEM: 6-layer, ~3,500 lines (feeds template, not builder) | — |
| D4-I5 | 4 | FILE_REF | CONTENT SOURCE: variable-length markdown | CONTENT-ANALYST |
| D4-I6 | 4 | DECISION | 73-LINE TEMPLATE: created ONCE, NOT per-build | TC-ASSEMBLER |
| D4-I7 | 4 | VALUE | Template compression: infinity:1 (already done) | — |
| D4-I8 | 4 | DECISION | CHANNEL 1: UNIVERSAL (lossless, 1:1) | TC-ASSEMBLER |
| D4-I9 | 4 | DECISION | CHANNEL 2: CONTENT (regenerated ~10:1) | CONTENT-ANALYST |
| D4-I10 | 4 | AGENT_ROLE | BRIEF ASSEMBLER (Agent 2) | TC-ASSEMBLER |
| D4-I11 | 4 | PROCESS | Template (73L) + Content Map (~35L) -> ACTIVATION BRIEF (~113L) | TC-ASSEMBLER |
| D4-I12 | 4 | VALUE | ACTIVATION BRIEF ~113 lines target | TC-ASSEMBLER |
| D4-I13 | 4 | VALUE | Content Map ~35 lines from Phase 0 | CONTENT-ANALYST |
| D4-I14 | 4 | PROCESS | 1:1 brief -> builder (no further compression) | — |
| D4-I15 | 4 | AGENT_ROLE | BUILDER (Agent 3) | BUILDER |
| D4-I21 | 4 | WARNING | Builder DOES NOT RECEIVE: research, gates, fix instructions, prohibitions, count-gates, metadata | BUILDER |
| D4-I22-27 | 4 | WARNING | 6 specific exclusions from builder input | BUILDER |
| D4-I28 | 4 | DECISION | Compression: OLD 50:1 cascading vs NEW near-zero cascading | — |
| D4-I29 | 4 | VALUE | OLD: 45,000->6,300->578->99 = 50:1, 99.6% loss | — |
| D4-I30 | 4 | VALUE | NEW: 45,000->73 (once) + content (regen) = near-zero loss | — |

### From extract-d06-d08.md (Diagrams 6-8)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D6-I1 | 6 | DECISION | Middle=1 pass, Ceiling=2, Flagship=3 | — |
| D6-I4 | 6 | AGENT_ROLE | Pass 1: Opus instance A | BUILDER |
| D6-I8 | 6 | AGENT_ROLE | COMPOSITIONAL CRITIC (Opus, separate agent) | — |
| D6-I9 | 6 | DECISION | Critic views SCREENSHOTS only (not CSS) | — |
| D6-I10 | 6 | DECISION | Critic Three Laws: never name CSS, never reference threshold, suggest QUALITY not ACTION | — |
| D6-I11-13 | 6 | DECISION | Critic Three Laws (individually) | — |
| D6-I15 | 6 | WARNING | NOT: "SC-09 FAILED: stacked gap 210px exceeds 120px" | — |
| D6-I16 | 6 | VALUE | Critic output: ~25 lines artistic feedback + conviction artifact | — |
| D6-I17 | 6 | THRESHOLD | Critic handoff: ~25 lines | — |
| D6-I20 | 6 | AGENT_ROLE | Pass 2: Opus instance B (FRESH) | BUILDER |
| D6-I24 | 6 | PROCESS | Compositional Critic second review: final impressions only | — |
| D6-I27 | 6 | AGENT_ROLE | Pass 3: Opus instance C (or Sonnet for cost) | BUILDER |
| D6-I30 | 6 | PROCESS | Standard Mode 4 PA Audit after all passes | PA-AUDITOR |
| D6-I31-33 | 6 | THRESHOLD | Expected PA-05 per pass: P1 ~2.5-3.5, +P2 ~3.0-3.8, +P3 ~3.2-4.0 | — |
| D6-I34 | 6 | WARNING | Pass 4 adds <0.1 with S-20 risk — do NOT attempt | — |
| D6-I35 | 6 | THRESHOLD | Max expected gain from Pass 4: <0.1 | — |
| D6-I36 | 7 | DECISION | 13 IRREDUCIBLE CONCEPTS: pipeline must address all | — |
| D6-I37 | 7 | VALUE | 7 EXISTING from 40-concept collapse | — |
| D6-I44 | 7 | DECISION | Compression Physics: SPECIFIED via 73-line cap + dual-channel | TC-ASSEMBLER |
| D6-I46 | 7 | THRESHOLD | 73-line brief cap | TC-ASSEMBLER |
| D6-I47 | 7 | DECISION | Dual-channel architecture | TC-ASSEMBLER |
| D6-I51 | 7 | DECISION | Specification Interference: suppressor removal + 113-line cap + gates hidden | — |
| D6-I52 | 7 | THRESHOLD | <=113 line cap for builder | — |
| D6-I53 | 7 | VALUE | All 20 suppressors must be removed | — |
| D6-I54 | 7 | DECISION | Gates hidden from builder | — |
| D6-I55 | 7 | THRESHOLD | Avoids all 20 suppressors | — |
| D6-I56 | 7 | DECISION | Scale-Channel Independence: 6-channel + value tables | TC-ASSEMBLER |
| D6-I58 | 7 | VALUE | 6 MISSING newly identified concepts | — |
| D6-I64 | 7 | DECISION | Compositional Anti-Patterns: 6 binary gates in gate runner | GATE-RUNNER |
| D6-I65 | 7 | THRESHOLD | Exactly 6 anti-pattern gates, each binary | GATE-RUNNER |
| D6-I66 | 7 | DECISION | Cross-Page Coherence: shared tokens.css + components.css + soul | — |
| D6-I68 | 7 | DECISION | Revision Quality: REBUILD not FIX + zone-aware editing | — |
| D6-I69 | 7 | DECISION | REBUILD not FIX | — |
| D6-I70 | 7 | DECISION | Zone-aware editing protocol | — |
| D6-I71-73 | 7 | VALUE | SPECIFIED 6/13, ACTIVATED 5/13, EMERGENT 2/13 | — |
| D6-I74 | 7 | RECOMMENDATION | Specify -> Activate -> Create CONDITIONS (routing principle) | — |

### From extract-d09-d11.md (Diagrams 9-11)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D11-I62 | 11 | PROCESS | A SINGLE BUILD: timeline and agent activity | — |
| D11-I63 | 11 | VALUE | Full build: 0 to ~105 minutes | — |
| D11-I64-68 | 11 | PROCESS | Phase 0: Content Analysis (~15 min), Agent 1 | CONTENT-ANALYST |
| D11-I69-73 | 11 | PROCESS | Phase 1: Brief Assembly (~15 min), Agent 2 | TC-ASSEMBLER |
| D11-I74-79 | 11 | PROCESS | Phase 2: Building (~45 min), Agent 3 | BUILDER |
| D11-I80-82 | 11 | PROCESS | Phase 3: Screenshot Capture, Lead, 1440+1024+768 | PA-AUDITOR |
| D11-I83-86 | 11 | PROCESS | Phase 3: PA Audit (parallel), PA-1 through PA-9 (9 Opus) + Integrative | PA-AUDITOR |
| D11-I87-89 | 11 | PROCESS | Phase 3: Weaver (Agent 15, Opus), produces VERDICT | PA-AUDITOR |
| D11-I90 | 11 | VALUE | TOTAL: ~80-105 min, 15 agents, ~113 lines spec | — |
| D11-I91 | 11 | VALUE | OLD comparison: 240-400 min, 19-34 agents, 963 lines | — |

### From extract-d12-d14.md (Diagrams 12-14)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D12-I1 | 12 | DECISION | Pipeline boundary concept from A5 | — |
| D12-I2 | 12 | DECISION | Value Propagation vs Relationship Propagation | BUILDER |
| D12-I4 | 12 | VALUE | 45,000 lines -> 73-line brief -> CSS output (616:1) | — |
| D12-I5 | 12 | THRESHOLD | VALUES 80-95% prescribed | — |
| D12-I6 | 12 | THRESHOLD | RELATIONSHIPS 0% prescribed | — |
| D12-I13 | 12 | THRESHOLD | 55.2:1 CSS-to-prose compression ratio | — |
| D12-I14 | 12 | DECISION | Individual values survive | — |
| D12-I21 | 12 | RECOMMENDATION | Don't compress relationships. ACTIVATE them. | BUILDER |
| D12-I26 | 12 | THRESHOLD | Builder-originated material ~20% of CSS, gap count 20-24 | — |
| D13-I67 | 13 | THRESHOLD | CD-006 uses 3 distinct transition types (benchmark) | GATE-RUNNER |
| D13-I68 | 13 | WARNING | Gas Town uses 1 transition = TEMPORAL MONOTONY | GATE-RUNNER |
| D13-I75 | 13 | DECISION | Pipeline v3 creates CONDITIONS, not specifications | — |
| D14-I76 | 14 | DECISION | Reader Model: 5-AXIS INPUT SPACE from B2 | CONTENT-ANALYST |
| D14-I77 | 14 | DECISION | 5 axes map directly to CSS parameter adjustments | CONTENT-ANALYST |
| D14-I78 | 14 | WARNING | "The single most consequential ABSENT dimension" | CONTENT-ANALYST |
| D14-I81 | 14 | DECISION | AXIS 1: Info Density | CONTENT-ANALYST |
| D14-I85 | 14 | DECISION | AXIS 2: Visual Complexity | CONTENT-ANALYST |
| D14-I88 | 14 | DECISION | AXIS 3: Progressive Disclosure | CONTENT-ANALYST |
| D14-I91 | 14 | DECISION | AXIS 4: Navigation Complexity | CONTENT-ANALYST |
| D14-I94 | 14 | DECISION | AXIS 5: Entry Velocity | CONTENT-ANALYST |
| D14-I97-99 | 14 | WARNING | Gas Town: content says Expert, CSS says General = MISMATCH | CONTENT-ANALYST |
| D14-I100 | 14 | PROCESS | v3 fix: Phase 0 Content Analyst outputs reader profile (~15L) | CONTENT-ANALYST |
| D14-I101 | 14 | PROCESS | Brief Assembler merges reader profile into Tier 3 | TC-ASSEMBLER |

### From extract-d15-d17.md (Diagrams 15-17)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D16-I29 | 16 | DECISION | Edits are LOCAL, Composition is GLOBAL — 0.3-0.5 gap | BUILDER |
| D16-I30 | 16 | DECISION | GENERATIVE (build) vs CORRECTIVE (fix) mode shift | BUILDER |
| D16-I37 | 16 | DECISION | GAP: 3.2->4.0 = revision quality deficit, cannot FIX to DESIGNED | — |
| D16-I43 | 16 | THRESHOLD | VERDICT: REBUILD (PA-05 < 2.5) | — |
| D16-I44 | 16 | AGENT_ROLE | Fresh Opus builder in COMPOSING mode | BUILDER |
| D16-I45 | 16 | PROCESS | Reads previous conviction artifact (not fix list) | BUILDER |
| D16-I46 | 16 | DECISION | Generative language, not diagnostic | BUILDER |
| D16-I47 | 16 | THRESHOLD | VERDICT: REFINE (PA-05 2.5-3.5) | — |
| D16-I48 | 16 | AGENT_ROLE | DIFFERENT Opus agent (defeats continuation bias) | BUILDER |
| D16-I49 | 16 | PROCESS | Reads conviction + PA artistic impressions | BUILDER |
| D16-I50 | 16 | DECISION | Never sees gate scores or threshold numbers | BUILDER |
| D16-I51 | 16 | DECISION | Cannot fix your way to Flagship — compose your way there | — |
| D17-I53 | 17 | VALUE | ~30 CSS properties identical between pages = family DNA | — |
| D17-I72 | 17 | DECISION | Family DNA persists WITHOUT cross-page spec | — |
| D17-I83 | 17 | DECISION | SIBLINGS, NOT STRANGERS verdict | — |
| D17-I84 | 17 | VALUE | tokens.css + soul = ~80% cross-page coherence automatically | — |
| D17-I92 | 17 | DECISION | No additional cross-page gate needed — DNA is INHERENT | GATE-RUNNER |

### From extract-d18-d20.md (Diagrams 18-20)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D18-I2 | 18 | DECISION | Pipeline predicts its own failure modes (Reports 43+44) | — |
| D18-I3 | 18 | DECISION | WHAT SURVIVES: things that become MORE CONCRETE at each level | — |
| D18-I4 | 18 | DECISION | WHAT DIES: things that exist only as RELATIONSHIPS | — |
| D18-I11 | 18 | DECISION | Reports 42 vs 44: different scope (10:1 vs 83:1) | — |
| D18-I15 | 18 | DECISION | Most loss happened BEFORE assembly — pre-assembly is bottleneck | TC-ASSEMBLER |
| D18-I17 | 18 | DECISION | 73-line template encoded ONCE from full research | TC-ASSEMBLER |
| D19-I21 | 19 | DECISION | CCS != PA-05 — independent metrics | PA-AUDITOR |
| D19-I36 | 19 | DECISION | PA-05 is PRIMARY success metric | PA-AUDITOR |
| D19-I37 | 19 | DECISION | CCS is DIAGNOSTIC metric | PA-AUDITOR |
| D19-I38 | 19 | THRESHOLD | Flagship: PA-05>=3.5 AND CCS>=0.55 AND unified metaphor | — |
| D19-I39 | 19 | DECISION | Middle can hit PA-05 4/4 at CCS 0.15 via vocabulary alone | — |
| D19-I40 | 19 | DECISION | Flagship requires BOTH high PA-05 AND high CCS | — |
| D19-I41 | 19 | THRESHOLD | Vocabulary alone maxes at Ceiling | — |
| D19-I42 | 19 | THRESHOLD | Beyond Ceiling requires CCS >= 0.55 | — |
| D20-I73 | 20 | DECISION | Applied vs Composed: REAL, operationally definable via 5 properties | GATE-RUNNER |
| D20-I80 | 20 | WARNING | Checklist -> APPLIED mode (inevitable) | — |
| D20-I81 | 20 | RECOMMENDATION | Recipe + disposition -> COMPOSED mode (possible, not guaranteed) | — |

---

## GATE-RUNNER (112 items)

The gate-runner performs programmatic verification in Phase 3: binary checks on CSS output.

### From extract-d01-d03.md (Diagrams 1-3)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D3-I129 | 3 | VALUE | Agent Capability factor | ORCHESTRATOR |
| D3-I132 | 3 | VALUE | Content Affordance factor | ORCHESTRATOR |
| D3-I135 | 3 | VALUE | Specification Fidelity factor | ORCHESTRATOR |

### From extract-d04-d05.md (Diagrams 4-5)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D5-I31 | 5 | DECISION | Quality modeled as function of suppressor count | ORCHESTRATOR |
| D5-I32 | 5 | THRESHOLD | PA-05 4.0 = Flagship target | ORCHESTRATOR |
| D5-I34-38 | 5 | VALUE | 5 empirical data points: 1.5, 2.0, 2.5, 3.0, 3.5 | ORCHESTRATOR |
| D5-I39 | 5 | THRESHOLD | Suppressor axis: 20 to 0 | ORCHESTRATOR |
| D5-I40-42 | 5 | PROCESS | 3 inflection points: recipe (+0.5-1.0), perception (+0.5), arch (+0.3-0.5) | ORCHESTRATOR |
| D5-I43-44 | 5 | RECOMMENDATION | Priority suppressor removals: S-01, then S-08/S-03/S-09/S-13 | ORCHESTRATOR |
| D5-I45 | 5 | VALUE | Total gain: +1.3 to +2.0 PA-05 | ORCHESTRATOR |
| D5-I46 | 5 | DECISION | Gas Town: Opus builder, 610 lines, confounded variables | ORCHESTRATOR |
| D5-I47 | 5 | DECISION | More lines WITH suppressors HURTS vs fewer WITHOUT | ORCHESTRATOR |

### From extract-d06-d08.md (Diagrams 6-8)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D8-I75 | 8 | VALUE | Gas Town 10-dimension gap: fix-type classifications | ORCHESTRATOR |
| D8-I76 | 8 | THRESHOLD | Pervading Metaphor: 2.5/5 (needs architecture) | ORCHESTRATOR |
| D8-I77 | 8 | THRESHOLD | Multi-coherence: 1.5/5 (needs architecture) | ORCHESTRATOR |
| D8-I78 | 8 | THRESHOLD | Compositional Intelligence: 2.0/5 (needs architecture) | ORCHESTRATOR |
| D8-I82 | 8 | THRESHOLD | Scale Hierarchy: 3.0/5 (CSS fix) | BUILDER |
| D8-I83 | 8 | THRESHOLD | Channel Shifts: 3.0/5 (CSS fix) | BUILDER |
| D8-I84 | 8 | THRESHOLD | Emotional Arc: 3.5/5 (CSS fix) | BUILDER |
| D8-I85 | 8 | THRESHOLD | Spatial Confidence: 3.5/5 (CSS fix) | BUILDER |
| D8-I86-91 | 8 | RECOMMENDATION | 3 fix tiers: CSS-only (2.5->3.2), prompt (3.2->3.5), architecture (3.5->4.0+) | ORCHESTRATOR |

### From extract-d15-d17.md (Diagrams 15-17)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D15-I1 | 15 | FILE_REF | 14 anti-patterns from B4 | — |
| D15-I2 | 15 | VALUE | Mechanism catalog covers 3/153 pairs = 2% | ORCHESTRATOR |
| D15-I3 | 15 | DECISION | DENSITY FAILURES category | — |
| D15-I4 | 15 | THRESHOLD | AP-01 DENSITY STACKING: min(all padding) >= 12px | — |
| D15-I5 | 15 | RECOMMENDATION | AP-02 COLOR ZONE CONFLICT: hierarchy agreement check | PA-AUDITOR |
| D15-I6 | 15 | DECISION | RHYTHM FAILURES category | — |
| D15-I7 | 15 | RECOMMENDATION | AP-03 TRANSITION MONOTONY: no identical consecutive dividers | BUILDER |
| D15-I8 | 15 | RECOMMENDATION | AP-04 SCALE COLLISION: no two mechanisms same typo range | PA-AUDITOR |
| D15-I9 | 15 | RECOMMENDATION | AP-05 SPACING FLAT-LINE: progressive arc, not uniform | — |
| D15-I10 | 15 | DECISION | COHERENCE FAILURES category | — |
| D15-I14 | 15 | DECISION | PERCEPTION FAILURES category | — |
| D15-I15 | 15 | RECOMMENDATION | AP-09 GHOST MECHANISMS: values above perception thresholds | — |
| D15-I16 | 15 | WARNING | AP-10 THRESHOLD GAMING: exact floor values = warning | — |
| D15-I17 | 15 | THRESHOLD | Gaming floors: 16 RGB delta, 0.026em spacing | — |
| D15-I18 | 15 | RECOMMENDATION | AP-11 STRUCTURAL ECHO: no pattern repeats 3+ times | — |
| D15-I21 | 15 | THRESHOLD | AP-14 COGNITIVE OVERLOAD: >4 simultaneous channels/viewport | — |
| D15-I22 | 15 | VALUE | 6 anti-patterns PROGRAMMATICALLY DETECTABLE | — |
| D15-I25 | 15 | PROCESS | Phase 3 gate runner adds 6 new binary gates for AP-01,09,10,11,14 | — |
| D16-I31 | 16 | THRESHOLD | CCS > 0.35 = interdependent (generative mode) | PA-AUDITOR |
| D16-I33-35 | 16 | VALUE | Flagship experiment evidence: 1.5->2.5->~3.0-3.2 (revision ceiling) | ORCHESTRATOR |
| D16-I36 | 16 | THRESHOLD | Flagship target: PA-05 3.5-4.0/4 (unreachable via revision) | ORCHESTRATOR |
| D17-I54 | 17 | DECISION | Shared DNA: identical across Gas Town + CD-006 | — |
| D17-I55-70 | 17 | VALUE | 16 shared DNA properties (colors, fonts, borders, etc.) | BUILDER |
| D17-I71 | 17 | VALUE | ~30 IDENTICAL PROPERTIES = FAMILY DNA | — |

### From extract-d18-d20.md (Diagrams 18-20)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D18-I5 | 18 | PROCESS | S(x) = 1/(1+C(x)): C(x)=0 survives, C(x)>0 dies | ORCHESTRATOR |
| D18-I7 | 18 | THRESHOLD | Survival function S(x) | ORCHESTRATOR |
| D18-I8 | 18 | WARNING | Calibrationally flat = Flagship failure mode | ORCHESTRATOR |
| D18-I9 | 18 | THRESHOLD | 15 RGB EVERYWHERE = gate fail (need RANGE/VARIANCE) | — |
| D19-I22 | 19 | DECISION | PA-05 measures PERCEIVED design quality | PA-AUDITOR |
| D19-I23 | 19 | THRESHOLD | "Does it look DESIGNED?" | PA-AUDITOR |
| D19-I27 | 19 | THRESHOLD | PA-05: 1-4 scale (FLAT/ASSEMBLED/COMPOSED/DESIGNED) | PA-AUDITOR |
| D19-I28 | 19 | DECISION | CCS measures MECHANISM INTERDEPENDENCE | — |
| D19-I29 | 19 | DECISION | Do mechanisms INTERACT or just COEXIST? | — |
| D19-I30 | 19 | PROCESS | CCS measured by removal test | — |
| D19-I31 | 19 | THRESHOLD | CCS: 0.00-1.00 scale | — |
| D19-I32-35 | 19 | VALUE | 4 experiment data points: Middle, Gas Town, CD-006, Flagship | ORCHESTRATOR |
| D19-I43 | 19 | THRESHOLD | Register 1 (CCS 0.15-0.35): LOCAL coupling | — |
| D19-I44 | 19 | THRESHOLD | Register 2 (CCS 0.35-0.55): STRUCTURAL coupling | — |
| D19-I45 | 19 | THRESHOLD | Register 3 (CCS 0.55-0.80): ATMOSPHERIC coupling | — |
| D20-I55-56 | 20 | VALUE | Removal test: A unchanged = Applied; A shifts = Composed | PA-AUDITOR |
| D20-I60 | 20 | DECISION | Position-based naming = Applied mode indicator | — |
| D20-I62 | 20 | WARNING | Position names provide no design guidance | — |
| D20-I69-72 | 20 | VALUE | Gas Town removal tests: bento grid (CCS 0.25-0.35), bg removal (independent) | — |
| D20-I74-77 | 20 | PROCESS | 5 mode determinants: naming, zone-modulation, layout driver, removal CCS, governing logic | — |

### From extract-d21-d25.md (Diagrams 21-25)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D22-I39 | 22 | VALUE | 347 claims, 83.3% consistent, 14 contradictions (4.0%) | ORCHESTRATOR |
| D22-I40 | 22 | THRESHOLD | Background delta >= 15 RGB (SOLID, 12 reports) | — |
| D22-I41 | 22 | THRESHOLD | Stacked gap <= 120px (SOLID, 8 reports) | — |
| D22-I42 | 22 | THRESHOLD | Per-property gap <= 96px (SOLID, 6 reports) | — |
| D22-I43 | 22 | THRESHOLD | Letter-spacing >= 0.025em (SOLID, 7 reports) | — |
| D22-I44 | 22 | THRESHOLD | Container width 940-960px (SOLID, 5 reports) | — |
| D22-I45 | 22 | THRESHOLD | Border weights 4/3/1px (SOLID, 8 reports) | — |
| D22-I46 | 22 | DECISION | SAFE TO BUILD ON: all core thresholds universally agreed | — |
| D22-I47 | 22 | THRESHOLD | Bg delta: 15 = FLOOR, 25-50 = COMPOSITIONAL | BUILDER |
| D22-I48 | 22 | THRESHOLD | Letter-spacing: 0.025em = FLOOR, 0.03-0.05em = COMPOSITIONAL | BUILDER |
| D22-I49 | 22 | THRESHOLD | Stacked gap: 120px = CEILING, 60-90px = COMPOSITIONAL | BUILDER |
| D22-I50 | 22 | THRESHOLD | Mechanisms: 8 = FLOOR, 14-16 = COMPOSITIONAL | BUILDER |
| D22-I51 | 22 | THRESHOLD | CSS lines: 350 = FLOOR, 800-1200 = TARGET | BUILDER |
| D22-I52 | 22 | THRESHOLD | CCS: 0.15 = FLOOR, 0.55+ = FLAGSHIP TARGET | PA-AUDITOR |

---

## PA-AUDITOR (89 items)

The PA auditor performs perceptual assessment in Phase 3: visual quality scoring, gestalt evaluation.

### From extract-d06-d08.md (Diagrams 6-8)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D6-I40 | 7 | FILE_REF | D-01 through D-08 dispositional recipes | TC-ASSEMBLER |
| D6-I41 | 7 | DECISION | Content-Form Coupling: SPECIFIED + ACTIVATED via TC + D-01 | TC-ASSEMBLER |
| D6-I43 | 7 | FILE_REF | TC brief routing + D-01 content-register reading | TC-ASSEMBLER |
| D6-I50 | 7 | FILE_REF | D-04 second-half moment + density arc | BUILDER |
| D6-I57 | 7 | FILE_REF | 6-channel framework + value tables | TC-ASSEMBLER |
| D6-I60 | 7 | FILE_REF | D-06 neg space | BUILDER |
| D6-I61 | 7 | DECISION | Reader Model: SPECIFIED via reader persona in Phase 0 | CONTENT-ANALYST |
| D6-I63 | 7 | WARNING | Emotional Arc: builder produces, cannot be specified | BUILDER |
| D6-I67 | 7 | FILE_REF | shared tokens.css + components.css | BUILDER |

### From extract-d09-d11.md (Diagrams 9-11)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D10-I36 | 10 | DECISION | Quality tiers are DISCRETE REGISTERS | ORCHESTRATOR |
| D10-I37 | 10 | PROCESS | 5 measurement dimensions: PA-05, CCS, mechanisms, CSS, build time | GATE-RUNNER |
| D10-I38-44 | 10 | DECISION+THRESHOLD | FLAGSHIP: PA-05>=3.5, CCS 0.55-0.80, Register 3, 16-18 mechs, 1000-1500 CSS | GATE-RUNNER |
| D10-I42 | 10 | WARNING | FLAGSHIP: NEVER ACHIEVED | ORCHESTRATOR |
| D10-I43 | 10 | THRESHOLD | Unified pervading metaphor throughout | BUILDER |
| D10-I44 | 10 | THRESHOLD | Content-form INDISTINGUISHABLE | BUILDER |
| D10-I45-50 | 10 | DECISION+THRESHOLD | CEILING: PA-05 3.0-3.5, CCS 0.35-0.55, Register 2, 12-15 mechs | GATE-RUNNER |
| D10-I51-56 | 10 | DECISION+THRESHOLD | MIDDLE: PA-05 2.5-3.0, CCS 0.15-0.35, Register 1, 8-10 mechs | GATE-RUNNER |
| D10-I57-61 | 10 | DECISION+THRESHOLD | FLOOR: PA-05 <2.5, CCS <0.15, Register 0, 5 mechs | GATE-RUNNER |

### From extract-d13-d14.md

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D13-I69 | 13 | PROCESS | Phase 0: Content Analyst maps density arc | CONTENT-ANALYST |
| D13-I70 | 13 | PROCESS | Phase 1: Activation brief includes density arc | TC-ASSEMBLER |
| D13-I71 | 13 | PROCESS | Phase 2: D-05 activates temporal awareness | BUILDER |
| D13-I72 | 13 | PROCESS | D-06 prevents uniform gaps | BUILDER |
| D13-I73 | 13 | PROCESS | Phase 3: PA auditor checks transition variety + rhythm | — |

### From extract-d15-d17.md (Diagrams 15-17)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D15-I11 | 15 | RECOMMENDATION | AP-06 CHANNEL ISOLATION: channels must shift at same boundaries | GATE-RUNNER |
| D15-I12 | 15 | RECOMMENDATION | AP-07 METAPHOR BLEED: vocabulary contained within zones | — |
| D15-I13 | 15 | RECOMMENDATION | AP-08 COMPONENT ORPHAN: component styling matches zone | — |
| D15-I19 | 15 | RECOMMENDATION | AP-12 RESTRAINT EROSION: deliberate absences preserved | — |
| D15-I20 | 15 | RECOMMENDATION | AP-13 BOOKEND ASYMMETRY: header/footer echo maintained | — |
| D15-I23 | 15 | VALUE | 4 anti-patterns require PERCEPTUAL AUDIT | — |
| D15-I24 | 15 | VALUE | 4 anti-patterns caught by COMPOSITIONAL CRITIC only | ORCHESTRATOR |
| D15-I26 | 15 | PROCESS | Phase 3 PA adds anti-pattern-aware questions | — |
| D15-I27 | 15 | PROCESS | Phase 2 Compositional Critic catches AP-06,07,12,13 | ORCHESTRATOR |
| D16-I32 | 16 | WARNING | CCS unchanged/drops during corrective mode | GATE-RUNNER |
| D16-I38-42 | 16 | WARNING | 5 revision fragility rules: channels decouple, arcs flatten, bookends break, coupling breaks, restraint degrades | BUILDER |

### From extract-d18-d20.md (Diagrams 18-20)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D18-I6 | 18 | VALUE | Judgment calibration: 15 RGB=subtle, 50 RGB=dramatic (relational knowledge) | BUILDER |
| D19-I24-26 | 19 | VALUE | PA-05 evaluates: vocabulary, restraint, atmosphere, content-form resonance, gestalt | — |
| D19-I46 | 19 | WARNING | Register 3 NEVER ACHIEVED, requires 3-pass + metaphor | ORCHESTRATOR |
| D19-I47 | 19 | RECOMMENDATION | Register 1 achievable with recipe format | ORCHESTRATOR |
| D19-I48 | 19 | RECOMMENDATION | Register 2 requires multi-coherence awareness | BUILDER |

### From extract-d21-d25.md (Diagrams 21-25)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D21-I7 | 21 | WARNING | Gas Town: ZERO surprise moments | — |
| D21-I15 | 21 | WARNING | Gas Town delight score: 2/10 | — |
| D21-I21 | 21 | WARNING | Gas Town authority: 7/10 | — |
| D21-I27 | 21 | WARNING | Gas Town closure: 5/10 | — |
| D21-I32 | 21 | DECISION | Emotional arc is EMERGENT, not gate-checked | ORCHESTRATOR |
| D21-I37 | 21 | PROCESS | PA auditor can assess emotional arc AFTER build | — |
| D21-I38 | 21 | AGENT_ROLE | Compositional Critic is primary emotional arc check | ORCHESTRATOR |

---

## TC-ASSEMBLER (78 items)

The TC assembler merges the 73-line template with the content map to produce the activation brief in Phase 1.

### From extract-d04-d05.md (Diagrams 4-5)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D4-I6 | 4 | DECISION | 73-LINE TEMPLATE: created ONCE, NOT per-build | ORCHESTRATOR |
| D4-I8 | 4 | DECISION | CHANNEL 1: UNIVERSAL (lossless, 1:1) | ORCHESTRATOR |
| D4-I11 | 4 | PROCESS | Template (73L) + Content Map (~35L) -> Brief (~113L) | ORCHESTRATOR |

### From extract-d06-d08.md (Diagrams 6-8)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D6-I39 | 7 | VALUE | 11 concepts collapsed into Builder Cognitive Mode | BUILDER |
| D6-I42 | 7 | VALUE | 9 concepts collapsed into Content-Form Coupling | BUILDER |
| D6-I45 | 7 | VALUE | 6 concepts collapsed into Compression Physics | ORCHESTRATOR |

### From extract-d18-d20.md (Diagrams 18-20)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D18-I12 | 18 | VALUE | Assembly 10:1 = reasonable; total 83:1 = destructive | ORCHESTRATOR |
| D18-I13 | 18 | THRESHOLD | Assembly-to-prompt: 10:1 acceptable | ORCHESTRATOR |
| D18-I14 | 18 | THRESHOLD | Total-research-to-prompt: 83:1 destructive | ORCHESTRATOR |
| D18-I16 | 18 | VALUE | 5 categories of dead knowledge never reached assembly | ORCHESTRATOR |
| D18-I18 | 18 | VALUE | 73-line template encoded ONCE from full research | ORCHESTRATOR |
| D18-I19 | 18 | RECOMMENDATION | No cascading compression; template IS the distillate | ORCHESTRATOR |

### From extract-d14

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D14-I102 | 14 | AGENT_ROLE | Phase 0 outputs reader profile; Assembler merges into Tier 3 | CONTENT-ANALYST |

---

## CONTENT-ANALYST (62 items)

The content analyst classifies content in Phase 0: content type, heterogeneity, metaphor viability, reader model, density arc.

### From extract-d01-d03.md (Diagrams 1-3)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D1-I7 | 1 | PROCESS | Classify content type (prose/mixed/visual) | — |
| D1-I8 | 1 | PROCESS | Map structural heterogeneity | — |
| D1-I9 | 1 | PROCESS | Assess metaphor viability | — |
| D1-I10 | 1 | PROCESS | Per-section character (NARRATIVE/REF/CODE) | — |
| D1-I11 | 1 | PROCESS | Estimate density arc | — |
| D1-I12 | 1 | PROCESS | Reader model classification | — |

### From extract-d09-d11.md (Diagrams 9-11)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D11-I65-66 | 11 | AGENT_ROLE | Phase 0: Agent 1 (Opus) reads, classifies, maps, assesses metaphor | ORCHESTRATOR |
| D11-I67 | 11 | VALUE | Output: content map (~35 lines) | TC-ASSEMBLER |

### From extract-d12-d14.md

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D12-I3 | 12 | FILE_REF | A5 Provenance + Gaps Cluster Audit | ORCHESTRATOR |
| D12-I22 | 12 | VALUE | Old: "Use >=15 RGB delta" (VALUE rule) | ORCHESTRATOR |
| D13-I28 | 13 | DECISION | Temporal Composition from B1 | — |
| D13-I31 | 13 | FILE_REF | B1 investigation is provenance source | — |
| D14-I79 | 14 | FILE_REF | B2 Reader Model investigation | — |
| D14-I80 | 14 | DECISION | Expert->General reader spectrum | — |
| D14-I93 | 14 | VALUE | Expert scrolls linearly vs reader needs wayfinding | — |

---

## PIPELINE-META (89 items)

Items about the pipeline process itself: experiment protocol, evidence status, proven/theorized/fantasy, adversarial review, actionability matrix.

### From extract-d09-d11.md (Diagrams 9-11)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D9-I1 | 9 | DECISION | EXPERIMENT PROTOCOL DECISION TREE | — |
| D9-I2 | 9 | PROCESS | 4 stages, progressive | — |
| D9-I3 | 9 | PROCESS | STAGE 0: SMOKE TEST (3h, 1 run) | — |
| D9-I4 | 9 | DECISION | Stage 0: Pipeline v3 on Gas Town content | — |
| D9-I5 | 9 | DECISION | Stage 0: Opus, 73-line, single pass | — |
| D9-I6 | 9 | THRESHOLD | Stage 0 gate: PA-05 >= 2.0 | — |
| D9-I7 | 9 | PROCESS | Pass -> continue to Stage 1 | — |
| D9-I8 | 9 | WARNING | Fail -> STOP & DEBUG (brief broken) | — |
| D9-I9 | 9 | PROCESS | STAGE 1: Q20 SHORTCUT (6h, 2 runs) | — |
| D9-I10 | 9 | DECISION | Stage 1: OLD prompt + ONLY 25-line threshold appendix | — |
| D9-I11 | 9 | DECISION | Tests: are thresholds the dominant cause? | — |
| D9-I12 | 9 | THRESHOLD | Stage 1 gate: delta PA-05 >= +0.5 | — |
| D9-I13-14 | 9 | RECOMMENDATION | Yes: thresholds high-leverage. No: still continue | — |
| D9-I15 | 9 | PROCESS | STAGE 2: HEAD-TO-HEAD (12h, 4 runs) | — |
| D9-I16 | 9 | DECISION | Old vs v3 on TWO content types | — |
| D9-I17 | 9 | DECISION | Gas Town + RESEARCH-SYNTHESIS | — |
| D9-I18 | 9 | DECISION | Opus both. Blind PA evaluation | — |
| D9-I19 | 9 | THRESHOLD | v3 > old on BOTH content types | — |
| D9-I20-22 | 9 | RECOMMENDATION+WARNING | Outcomes: validated / content-dependent / rethink | — |
| D9-I23 | 9 | PROCESS | STAGE 3: VARIABLE ISOLATION (18h, 6 runs) | — |
| D9-I24 | 9 | PROCESS | 7-point dose-response curve | — |
| D9-I25 | 9 | DECISION | Identifies WHICH changes cause improvement | — |
| D9-I26 | 9 | PROCESS | STAGE 4: FLAGSHIP EXISTENCE PROOF (5h, 1-2 runs) | — |
| D9-I27 | 9 | DECISION | Maximum investment: 3-pass + disposition + examples + critic | — |
| D9-I28 | 9 | DECISION | PA + Tier 5 questions | — |
| D9-I29 | 9 | DECISION | Tests: Is 4/4 achievable? | — |
| D9-I30 | 9 | THRESHOLD | PA-05>=3.5 AND Tier 5>=6/8 | — |
| D9-I31-32 | 9 | RECOMMENDATION+WARNING | Pass: Flagship achievable. Fail: accept Ceiling as max | — |
| D9-I33 | 9 | VALUE | TOTAL: 44 hours, 14 runs | — |
| D9-I34 | 9 | VALUE | CHEAPEST: Stage 0+1 = 9 hours | — |
| D9-I35 | 9 | VALUE | HIGHEST ROI: Stage 0+1+2 = 21 hours | — |

### From extract-d09-d11.md (Diagram 11 status)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D11-I92-123 | 11 | FILE_REF | 28 files status: 11 design reports, 7 audits, 8 investigations, synthesis | — |
| D11-I124 | 11 | VALUE | TOTAL: 28 files, ~11,000+ lines | — |
| D11-I125 | 11 | VALUE | TOTAL: 38+ agents | — |

### From extract-d21-d25.md (Diagrams 22-25)

| Item | Diagram | Type | Summary | Secondary |
|---|---|---|---|---|
| D22-I53 | 22 | WARNING | Cluster 1: CCS values (5 contradictions, resolved) | ORCHESTRATOR |
| D22-I54 | 22 | VALUE | Gas Town CCS ~0.35 best estimate | GATE-RUNNER |
| D22-I55 | 22 | WARNING | Cluster 2: Line counts (5 contradictions, versioning) | ORCHESTRATOR |
| D22-I56 | 22 | WARNING | Cluster 3: Compression ratios (4 contradictions, specify denominator) | ORCHESTRATOR |
| D23-I57 | 23 | VALUE | 47 recommendations -> 25 after dedup -> 4 tiers (70% SUBTRACTION) | — |
| D23-I58 | 23 | DECISION | TIER 1: IMMEDIATELY ACTIONABLE (9 items, 2-4h) | ORCHESTRATOR |
| D23-I59-67 | 23 | RECOMMENDATION | Items #1-#9: recipe, thresholds, zone-count, content-fit, mech cap, 3-Q test, PA fix, char table, sel logic | ORCHESTRATOR |
| D23-I68 | 23 | DECISION | TIER 2: ACTIONABLE WITH DESIGN (8 items, 4-8h) | ORCHESTRATOR |
| D23-I69-76 | 23 | RECOMMENDATION | Items #10-#17: brief reorder, D-01..D-05, revision cycle, value tables, gestalt auditor, emotion, callout, content-type | ORCHESTRATOR |
| D23-I77 | 23 | DECISION | TIER 3: REQUIRES EXPERIMENTATION (5 items, 8-20h each) | — |
| D23-I78-82 | 23 | RECOMMENDATION | Items #18-#22: 73-line, Opus-as-builder, disposition-only, revision cycle, Q20 | — |
| D23-I83 | 23 | DECISION | TIER 4: THEORETICAL (3 items, weeks+) | — |
| D23-I84-86 | 23 | RECOMMENDATION | Items #23-#25: live pipeline, atmospheric coupling, Flagship 4/4 | — |
| D23-I87 | 23 | DECISION | C1: Suppressor REMOVAL > capability ADDITION (60-70% gap) | ORCHESTRATOR |
| D23-I88 | 23 | DECISION | C2: Recipe format = #1 LEVER | ORCHESTRATOR |
| D23-I89 | 23 | VALUE | C3: Positive scaffolding = ~70 lines total | TC-ASSEMBLER |
| D23-I90 | 23 | DECISION | C4: Iteration = ARCHITECTURAL FRONTIER | ORCHESTRATOR |
| D23-I91 | 23 | PROCESS | 5-phase implementation sequence | ORCHESTRATOR |
| D23-I92 | 23 | RECOMMENDATION | Remove 900 lines. Keep 73. Test. Then invest. | ORCHESTRATOR |
| D23-I93-101 | 23 | PROCESS | Priority grid: all quadrant assignments | ORCHESTRATOR |
| D24-I102 | 24 | DECISION | ADVERSARIAL VERDICT: PROCEED WITH CAUTION | — |
| D24-I103 | 24 | WARNING | CF-01: LINE COUNT SHELL GAME (~3,600 lines not 73) | ORCHESTRATOR |
| D24-I104-112 | 24 | VALUE | Builder input stack breakdown: 9 components totaling ~3,600 lines | ORCHESTRATOR |
| D24-I113 | 24 | WARNING | v3 input LARGER than v2 (~3,600 vs ~2,800) | ORCHESTRATOR |
| D24-I114 | 24 | RECOMMENDATION | Honest accounting: "better organized" not "less input" | ORCHESTRATOR |
| D24-I115 | 24 | WARNING | CF-02: COMPOSITIONAL CRITIC = PURE FANTASY (zero evidence) | ORCHESTRATOR |
| D24-I116 | 24 | WARNING | CF-03: SUPPRESSOR REMOVAL NOT MONOTONICALLY POSITIVE | ORCHESTRATOR |
| D24-I117 | 24 | WARNING | CF-04: N=4 PROBLEM (7 confounded, 0 isolated) | — |
| D24-I118 | 24 | VALUE | COMPLEXITY AUDIT: all metrics increase in v3 | ORCHESTRATOR |
| D24-I119 | 24 | DECISION | VERDICT: NOT SIMPLER. DIFFERENTLY COMPLEX. | — |
| D24-I120 | 24 | WARNING | 3 untested components: Critic, conviction, disposition | — |
| D24-I121-126 | 24 | THRESHOLD | 6 failure predictions: P=0.40 container, P=0.35 whitespace, P=0.30 conviction, P=0.25 critic, P=0.20 micro-typo, P=0.15 router | ORCHESTRATOR |
| D24-I127-133 | 24 | RECOMMENDATION | REC-01 through REC-07 | ORCHESTRATOR |
| D24-I134 | 24 | DECISION | Direction CORRECT; implementation has gaps | — |
| D24-I135-144 | 24 | WARNING | 10 untested assumptions (9/10 at N=0) | — |
| D24-I145 | 24 | VALUE | 9/10 untested — every prediction is HYPOTHESIS | — |
| D24-I146-153 | 24 | WARNING | 8 inter-report contradictions (4 HIGH, 3 MED, 1 LOW) | ORCHESTRATOR |
| D25-I154 | 25 | VALUE | 28 reports, ~11,000 lines, 38+ agents | — |
| D25-I155-163 | 25 | DECISION | 9 PROVEN items (recipe, thresholds, container, suppressor, etc.) | ORCHESTRATOR |
| D25-I164-172 | 25 | RECOMMENDATION | 9 THEORIZED items (73-line, Opus>Sonnet, disposition, etc.) | — |
| D25-I173-179 | 25 | WARNING | 7 FANTASY items (Critic, conviction, 3-pass, activation, 80%, Register 3, Flagship 4/4) | — |
| D25-I180 | 25 | DECISION | Direction right (activation > transmission) | — |
| D25-I181 | 25 | WARNING | Complexity understated (~3,600 not 73) | — |
| D25-I182 | 25 | WARNING | Predictions untested (9/10 at N=0) | — |
| D25-I183 | 25 | PROCESS | NEXT: Q20 (4h) -> #20 disposition-only (2-4h) -> then commit | ORCHESTRATOR |
