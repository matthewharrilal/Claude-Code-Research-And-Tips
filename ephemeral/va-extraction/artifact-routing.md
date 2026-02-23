# Artifact: Content-Form Routing + TC Brief Template (Layer 8)
Date: 2026-02-23
Status: AUTHORITATIVE (conforms to council-verdict.md rulings)
Layer: 8 — ROUTING
Items covered: 63 from layer classifier + all ROUTING-tagged items from unified registry (125 total)
Council-added items: 3 (content-volume-to-zone-count map, content-form fit gate, content-type propagation)

---

## Table of Contents

1. [Phase 0: Content Analysis Protocol](#phase-0-content-analysis-protocol)
2. [Content Type Classification](#content-type-classification)
3. [Structural Heterogeneity Mapping](#structural-heterogeneity-mapping)
4. [Reader Model — 5-Axis Input Space](#reader-model-5-axis-input-space)
5. [Temporal Composition — Scroll Rhythm](#temporal-composition-scroll-rhythm)
6. [Metaphor Viability Assessment](#metaphor-viability-assessment)
7. [Content-Form Routing](#content-form-routing)
8. [Compression Physics](#compression-physics)
9. [Phase 1: TC Brief Assembly Process](#phase-1-tc-brief-assembly-process)
10. [Brief Template Structure](#brief-template-structure)
11. [Content-Volume-to-Zone-Count Map (Council-Added)](#content-volume-to-zone-count-map)
12. [Content-Form Fit Gate (Council-Added)](#content-form-fit-gate)
13. [Survival Function](#survival-function)
14. [Information Flow Architecture](#information-flow-architecture)
15. [Content-Type Propagation to Builder (Council-Added)](#content-type-propagation-to-builder)
16. [Complete Item Registry](#complete-item-registry)

---

## Phase 0: Content Analysis Protocol

**Purpose:** Analyze raw content source material to produce a CONTENT MAP — a description of what the content IS, not what the design SHOULD BE.

> ITEM 5 (D01-D03, L24): PHASE 0: CONTENT ANALYSIS
> ITEM 14 (D01-D03, L36): "What the content IS, not what the design SHOULD BE"

**Agent:** Content Analyst (Opus)
> ITEM 6 (D01-D03, L26) [classified ORCHESTRATION, secondary L8]: Agent 1: Content Analyst (Opus)

**Input:** Raw markdown / article / research content
> ITEM 4 (D01-D03, L18-19): CONTENT SOURCE (Input) Raw markdown / article / research
> ITEM 5 (D04-D05, L372-374): CONTENT SOURCE (markdown) varies

**Content Analyst performs 6 operations:**

### 1. Classify content type (prose/mixed/visual)
> ITEM 7 (D01-D03, L28): Classify content type (prose/mixed/visual)

Three content type categories:
- **PROSE**: Primarily text-based, long-form articles, essays, research synthesis
- **MIXED**: Combination of text, code, tables, lists, diagrams
- **VISUAL**: Image-heavy, data visualization, gallery-style content

### 2. Map structural heterogeneity
> ITEM 8 (D01-D03, L29): Map structural heterogeneity

Structural heterogeneity = the degree of variation in content element types across sections. High heterogeneity (narrative + code + tables + images) affords richer design; low heterogeneity (uniform prose) constrains it.

### 3. Assess metaphor viability
> ITEM 9 (D01-D03, L30): Assess metaphor viability

Determine whether the content has a natural metaphorical frame that can be embodied in CSS structure. This is a prerequisite for COMPOSED mode (per council verdict: content must have heterogeneity + metaphor viability as Precondition 2).

> ITEM 131 (D01-D03, L288-289) [classified GATES]: PRECONDITION 2: Content has heterogeneity + metaphor viability
> ITEM 132 (D01-D03, L293-294) [classified ORCHESTRATION]: Precondition 2 maps to Content Affordance factor
> ITEM 133 (D01-D03, L296-300) [classified ORCHESTRATION]: Pipeline: Phase 0 content analysis (assess content)

### 4. Per-section character classification
> ITEM 10 (D01-D03, L31): Per-section character (NARRATIVE/REF/CODE)

Each section classified as one of:
- **NARRATIVE**: Flowing prose, argumentation, story
- **REF**: Reference material, lists, tables, specifications
- **CODE**: Code blocks, technical examples, command sequences

### 5. Estimate density arc
> ITEM 11 (D01-D03, L32): Estimate density arc
> Secondary: L4 DISPOSITION — feeds into D-05 Reader's Scroll and density arc recipe

The density arc maps how information density changes across the content:
- OPENING (sparse, orienting)
- DEEPENING (increasing density, core material)
- RESOLVING (releasing density, synthesis)

> ITEM 34 (D01-D03, L70-71): Density Arc (6 lines) OPENING->DEEPENING->RESOLVING
> D12-D14 ITEM 69 (L1063): Phase 0: Content Analyst maps section-by-section density arc

### 6. Reader model classification
> ITEM 12 (D01-D03, L33): Reader model classification

See [Reader Model — 5-Axis Input Space](#reader-model-5-axis-input-space) for the full 5-axis framework.

> D12-D14 ITEM 100 (L1118): Phase 0 Content Analyst outputs reader profile (~15 lines)

**Output:** CONTENT MAP (~30-50 lines)
> ITEM 13 (D01-D03, L35): Output: CONTENT MAP (~30-50 lines)
> D04-D05 ITEM 13 (L399-400): Content Map (~35 lines) from Phase 0

---

## Content Type Classification

Content type determines the routing through the pipeline. Three primary types with design implications:

### Prose
- Long-form text, primarily narrative
- Lower structural heterogeneity
- Density arc driven by argument structure
- Design affordance: typographic hierarchy, spacing rhythm, pull quotes

### Mixed
- Combination of prose, code, tables, images
- Higher structural heterogeneity
- Density arc driven by content type shifts
- Design affordance: component variety, zone differentiation, visual density contrast

### Visual
- Image/diagram-dominant content
- Variable structural heterogeneity
- Density arc driven by media pacing
- Design affordance: gallery layouts, full-width media, minimal text treatment

---

## Structural Heterogeneity Mapping

> ITEM 8 (D01-D03, L29): Map structural heterogeneity

Structural heterogeneity is a key input to content-form routing. It maps directly to Content Affordance in the master equation:

> ITEM 2 (D01-D03, L13) [classified ORCHESTRATION]: Master Equation: Quality = Agent Capability x Content Affordance x Spec Fidelity

High heterogeneity = rich content affordance = more design possibilities
Low heterogeneity = limited content affordance = constrained design space

**Per-section mapping:**
For each section, classify the content element types present:
- Text paragraphs
- Code blocks
- Tables / data
- Lists (ordered/unordered)
- Images / diagrams
- Pull quotes / callouts
- Metadata / headers

Sections with 3+ element types = HIGH heterogeneity
Sections with 1-2 element types = LOW heterogeneity
Overall page heterogeneity = weighted by section length

---

## Reader Model -- 5-Axis Input Space

> D12-D14 ITEM 76 (L1077): READER MODEL -- 5-AXIS INPUT SPACE (from B2)
> D12-D14 ITEM 77 (L1081): 5 axes map directly to CSS parameter adjustments
> D12-D14 ITEM 78 (L1082): "The single most consequential ABSENT dimension in the pipeline"

The reader model was absent from v1/v2 pipeline entirely. v3 adds it as a Phase 0 output.

> D12-D14 ITEM 99 (L1115-1116): Pipeline had NO mechanism to translate audience signal to CSS
> D12-D14 ITEM 97 (L1111): Gas Town: 'Stage 7+' (EXPERT reader) content signal
> D12-D14 ITEM 98 (L1112): Gas Town CSS: general-reader treatment despite expert content

**Audience spectrum:**
> D12-D14 ITEM 80 (L1086-1087): Expert (Yegge followers) <-> General (Google search) spectrum

### Axis 1: Info Density
> D12-D14 ITEM 81 (L1088-1091): AXIS 1 Info Density

CSS parameter adjustments along Expert <-> General spectrum:
- line-height: 1.5 Expert ... 1.8 General (D12-D14 ITEM 83, L1089)
- font-size: 15px Expert ... 18px General (D12-D14 ITEM 84, L1090)

### Axis 2: Visual Complexity
> D12-D14 ITEM 85 (L1093-1095): AXIS 2 Visual Complexity

- 3-4 components/viewport Expert ... 2 General (D12-D14 ITEM 86, L1094)
- Compound grids Expert ... Simple stacks General (D12-D14 ITEM 87, L1095)

### Axis 3: Progressive Disclosure
> D12-D14 ITEM 88 (L1097-1099): AXIS 3 Progressive Disclosure

- None (show everything) Expert ... Collapsible sections General (D12-D14 ITEM 89, L1098)
- Trust reader to scan Expert ... Flag key points General (D12-D14 ITEM 90, L1099)

### Axis 4: Navigation Complexity
> D12-D14 ITEM 91 (L1101-1103): AXIS 4 Navigation Complexity

- Optional TOC Expert ... Mandatory TOC + map General (D12-D14 ITEM 92, L1102)
- Expert scrolls linearly ... Reader needs wayfinding (D12-D14 ITEM 93, L1103)

### Axis 5: Entry Velocity
> D12-D14 ITEM 94 (L1105-1107): AXIS 5 Entry Velocity

- Minimal header Expert ... Expansive header General (D12-D14 ITEM 95, L1106)
- 30-50% less header height Expert ... Full orientation General (D12-D14 ITEM 96, L1107)

**Phase 0 output:** Reader profile (~15 lines) specifying position on each axis
> D12-D14 ITEM 100 (L1118): Phase 0 Content Analyst outputs reader profile (~15 lines)

**Phase 1 integration:** Brief Assembler merges reader profile into Tier 3 of the activation brief
> D12-D14 ITEM 101 (L1119): Brief Assembler merges reader profile into Tier 3
> D12-D14 ITEM 102 (L1118-1119): Two agents: Content Analyst (reader profile) + Brief Assembler (merge)

---

## Temporal Composition -- Scroll Rhythm

> D12-D14 ITEM 28 (L1014): TEMPORAL COMPOSITION -- SCROLL RHYTHM IN CSS (from B1)
> D12-D14 ITEM 29 (L1018): How static CSS creates time-based experience
> D12-D14 ITEM 30 (L1019): Every reader experiences page TEMPORALLY -- they scroll

### Three Dimensions of Scroll Rhythm

> D12-D14 ITEM 32 (L1023): THREE DIMENSIONS OF SCROLL RHYTHM

#### A. Section Height ("measure length")
> D12-D14 ITEM 33 (L1025): A. SECTION HEIGHT ('measure length')

Reference patterns from existing pages:

**Gas Town zone heights:**
- Z1: ~600px (D12-D14 ITEM 34, L1028)
- Z2: ~1800px (D12-D14 ITEM 35, L1029)
- Z3: ~2400px (D12-D14 ITEM 36, L1030)
- Z4: ~1200px (D12-D14 ITEM 37, L1031)
- Pattern: SHORT->LONG->LONGEST->MOD (crescendo) (D12-D14 ITEM 46, L1033)

**CD-006 section heights:**
- S1: ~900px (D12-D14 ITEM 38, L1028)
- S2: ~1000px (D12-D14 ITEM 39, L1029)
- S3: ~1000px (D12-D14 ITEM 40, L1030)
- S4: ~1100px (D12-D14 ITEM 41, L1031)
- S5: ~1000px (D12-D14 ITEM 42, L1032)
- S6: ~900px (D12-D14 ITEM 43, L1034)
- S7: ~900px (D12-D14 ITEM 44, L1034)
- S8: ~700px (D12-D14 ITEM 45, L1035)
- Pattern: REGULAR 4/4 time (uniform) (D12-D14 ITEM 47, L1036)

#### B. Visual Density ("dynamics" -- loud/quiet)
> D12-D14 ITEM 48 (L1038): B. VISUAL DENSITY ('dynamics' -- loud/quiet)

**Gas Town density arc:**
- Z1: SPARSE (D12-D14 ITEM 49, L1041)
- Z2: MODERATE (D12-D14 ITEM 50, L1042)
- Z3: DENSE (D12-D14 ITEM 51, L1043)
- Z4: MODERATE (D12-D14 ITEM 52, L1044)
- Pattern: CRESCENDO+RELEASE (D12-D14 ITEM 61, L1046)

**CD-006 density arc:**
- S1: MEDIUM (D12-D14 ITEM 53, L1041)
- S2: HIGH (D12-D14 ITEM 54, L1042)
- S3: HIGH (D12-D14 ITEM 55, L1043)
- S4: V.HIGH (D12-D14 ITEM 56, L1044)
- S5: HIGH (D12-D14 ITEM 57, L1045)
- S6: MEDIUM (D12-D14 ITEM 58, L1046)
- S7: MEDIUM (D12-D14 ITEM 59, L1047)
- S8: LOW (D12-D14 ITEM 60, L1048)
- Pattern: PLATEAU+TAPER (D12-D14 ITEM 62, L1049)

#### C. Transition Weight ("articulation" -- staccato/legato)
> D12-D14 ITEM 63 (L1051): C. TRANSITION WEIGHT ('articulation' -- staccato/legato)

Reference transition types:
- Light transition: 1px + 48px gap = legato (D12-D14 ITEM 64, L1053)
- Medium transition: 3px + 80px gap = breathing rest (D12-D14 ITEM 65, L1054)
- Heavy transition: colored bg + text = full stop (D12-D14 ITEM 66, L1055)

> D12-D14 ITEM 67 (L1057): CD-006 uses 3 distinct transition types
> D12-D14 ITEM 68 (L1058): Gas Town uses 1 (uniform dividers) <- TEMPORAL MONOTONY

**KEY:** Content Analyst maps all three dimensions as part of the content map. The builder receives this as temporal vocabulary, not as specification.

---

## Metaphor Viability Assessment

> ITEM 9 (D01-D03, L30): Assess metaphor viability
> ITEM 33 (D01-D03, L68-69): Structural Metaphor (8 lines) derive from content, embody in CSS

Metaphor viability assessment determines whether the content naturally supports a governing metaphor that can be embodied in CSS structure. This is a critical routing decision:

- **High viability**: Content has a strong natural metaphor (e.g., a "dispatch" article -> military/journalism metaphor). Routes toward COMPOSED mode.
- **Low viability**: Content is purely informational without metaphorical affordance. Routes toward APPLIED mode.

The content analyst identifies metaphor SEEDS in the content map -- these are not CSS instructions but descriptions of the content's natural character.

> ITEM 47 (D01-D03, L90-92): CONTENT MAP appended to brief: per-section analysis, metaphor seeds

---

## Content-Form Routing

Content-form routing is the core decision that determines which mode the builder operates in. The orchestrator selects the mode; the builder receives ONE mode's recipe, never a choice between two.

> Council verdict (Pattern 3, sub-ruling): "Builder receives ONE mode's recipe, not a choice between two. Orchestrator selects mode based on content-form routing."

### Mode Determination

> D06-D08 ITEM 41 (L579-581): Content-Form Coupling: SPECIFIED+ACTIVATED via TC + D-01
> D06-D08 ITEM 42 (L579): Content-Form Coupling (9 concepts collapsed)
> D06-D08 ITEM 43 (L580): TC brief routing + D-01 content-register reading

**APPLIED mode** (content has limited design affordance):
- Low structural heterogeneity
- Low metaphor viability
- CSS Custom Properties named by POSITION (e.g., --bg-z1, --bg-z2)
- Callouts styled identically across all zones
- Checklist format triggers APPLIED mode inevitably

> D18-D20 ITEM 58 (L1507-1509) [classified SCAFFOLDING]: APPLIED: --bg-z1, --bg-z2 named by POSITION
> D18-D20 ITEM 64 (L1520-1521) [classified SCAFFOLDING]: APPLIED: Callouts styled identically across all zones
> D18-D20 ITEM 80 (L1557) [classified DISPOSITION]: Checklist -> APPLIED mode (inevitable)

**COMPOSED mode** (content has rich design affordance):
- High structural heterogeneity
- High metaphor viability
- CSS Custom Properties named by CONCEPT (e.g., --dispatch-open, --dispatch-tactical)
- Callouts adapt to zone context (padding/border varies)
- Recipe + disposition format enables COMPOSED mode (possible, not guaranteed)

> D18-D20 ITEM 59 (L1507-1509) [classified SCAFFOLDING]: COMPOSED: --dispatch-open, --dispatch-tactical named by CONCEPT
> D18-D20 ITEM 65 (L1523-1526) [classified SCAFFOLDING]: COMPOSED: Callouts adapt to zone context (padding/border varies)
> D18-D20 ITEM 81 (L1558) [classified DISPOSITION]: Recipe + disposition -> COMPOSED mode (possible, not guaranteed)
> D18-D20 ITEM 79 (L1556-1558) [classified DISPOSITION]: MODE IS SET AT BUILD START by spec format

**Mode conditions (per council verdict):**
> D18-D20 ITEM 82 (L1560-1562) [classified DISPOSITION]: Pipeline v3 creates conditions via D-01 + D-02 + Recipe + 80% + Opus

COMPOSED mode requires ALL of:
- D-01 content-register reading (D18-D20 ITEM 83, L1561)
- D-02 room perception (D18-D20 ITEM 84, L1561)
- Recipe format (not checklist)
- 80% creative authority (D18-D20 ITEM 85, L1562)
- Opus builder (STRONG RECOMMENDATION per council)

### What Survives vs What Dies in Compression

> D12-D14 ITEM 1 (L963): THE PIPELINE'S PRECISE BOUNDARY (from A5)
> D12-D14 ITEM 2 (L967-968): Value Propagation vs Relationship Propagation
> D12-D14 ITEM 4 (L974): 45,000 lines -> 73-line brief -> CSS output
> D12-D14 ITEM 5 (L978): VALUES (80-95% prescribed) survive
> D12-D14 ITEM 6 (L978): RELATIONSHIPS (0% prescribed) die

**What survives compression:**
> D12-D14 ITEM 14 (L989): Individual values survive
> D18-D20 ITEM 3 (L1342-1344): WHAT SURVIVES: things that become MORE CONCRETE at each level

**What dies in compression (5 types of relationship loss):**
> D12-D14 ITEM 15 (L980-981): Which values should CO-OCCUR (relationship lost)
> D12-D14 ITEM 16 (L981): Which values should CONTRAST (relationship lost)
> D12-D14 ITEM 17 (L982-983): Which values should VARY TOGETHER across zones (lost)
> D12-D14 ITEM 18 (L984-985): How channels interact at zone boundaries (lost)
> D12-D14 ITEM 19 (L986-987): Why THIS value pairs with THAT value in THIS context (lost)

> D12-D14 ITEM 20 (L989-991): Combinations do NOT survive compression. Must be REGENERATED
> D18-D20 ITEM 4 (L1342-1344): WHAT DIES: things that exist only as RELATIONSHIPS among values

**The solution:** Don't compress relationships. Provide PURPOSE + VOCABULARY and let the builder regenerate relationships natively.

> D12-D14 ITEM 21 (L996): Don't compress relationships. ACTIVATE them.
> **Council verdict (Contradiction A):** "Activation" framing RETIRED. Replaced with: "PURPOSE + VOCABULARY: dispositional instructions provide compositional intent; value tables provide CSS vocabulary."

> D12-D14 ITEM 22 (L998): Old: 'Use >=15 RGB delta' (VALUE rule)
> D12-D14 ITEM 23 (L999-1000): New: 'Room perception at boundaries' (RELATION)
> D12-D14 ITEM 24 (L1002) [classified DISPOSITION]: Disposition D-02 replaces threshold with perceptual instruction

> D12-D14 ITEM 25 (L1003-1004): Builder with Opus generates BOTH values AND relationships natively
> D12-D14 ITEM 26 (L1007-1008): Builder-originated material ~20% of CSS compensates gaps
> D12-D14 ITEM 27 (L1009): Builder EXCEEDS specification when in COMPOSING mode

### Builder Input Routing

> D04-D05 ITEM 16 (L410-417): Builder receives 4 inputs: brief, content, tokens.css, components.css

The builder receives EXACTLY 4 inputs:
1. Activation brief (~113 lines) — contains 73-line constraint layer + content map
2. Content source material (raw markdown)
3. tokens.css (183 lines) — direct vocabulary (D04-D05 ITEM 18, L413)
4. components.css (290 lines) — component library (D04-D05 ITEM 19, L413)

> D04-D05 ITEM 17 (L413): ~113 lines (brief size target)

**Builder generates CSS values WITH perception physics (new v3):**
> ITEM 108 (D01-D03, L250-251): Builder generates CSS values WITH perception physics (new)

**Old pipeline (v2): TC generates CSS values WITHOUT perception physics:**
> ITEM 107 (D01-D03, L250-251): TC generates CSS values WITHOUT perception physics (old)

---

## Compression Physics

> D06-D08 ITEM 44 (L583-585): Compression Physics: SPECIFIED via 73-line + dual-channel
> D06-D08 ITEM 45 (L583): Compression Physics (6 concepts collapsed)
> D06-D08 ITEM 47 (L584): dual-channel architecture

### Compression Ratios: Old vs New

> D04-D05 ITEM 28 (L424-432): COMPRESSION RATIOS: Old 50:1 cascading, New near-zero
> D04-D05 ITEM 29 (L426-427): OLD: 45,000->6,300->578->99->builder = 50:1, 99.6% loss
> D04-D05 ITEM 30 (L429-431): NEW: 45,000->73 (once) + content (regen) = near-zero loss

**Council verdict (CF-01):** The 73-line constraint cap is retained as architectural target. Documentation must state: "73-line constraint layer within ~3,600 total builder input (including reference files shared with v2)." Framing is FORMAT improvement and STRUCTURE improvement, not volume reduction.

### Assembly-to-Prompt Ratio

> D12-D14 ITEM 13 (L987-988): 55.2:1 compression: 2,374 CSS lines -> 43 prose
> D18-D20 ITEM 12 (L1381-1383): 42: assembly->prompt 10:1, 44: total research->prompt 83:1
> D18-D20 ITEM 13 (L1382): 10:1 assembly-to-prompt ratio acceptable
> D18-D20 ITEM 14 (L1383): 83:1 total-research-to-prompt ratio = brutal

> D18-D20 ITEM 11 (L1378-1379): Both correct at different scope: 42 measures assembly, 44 total
> D18-D20 ITEM 15 (L1385-1387): Most loss happened BEFORE assembly (5 categories of dead knowledge)
> D18-D20 ITEM 16 (L1385): 5 categories of dead knowledge never reached assembly

### Template Encoding

> D18-D20 ITEM 17 (L1389-1391): 73-line template encoded ONCE from full research. No cascading
> D18-D20 ITEM 18 (L1389): 73-line template encoded ONCE
> D18-D20 ITEM 19 (L1390-1391): No cascading compression. Template IS the research distillate

### Old vs New TC Brief

> ITEM 105 (D01-D03, L249): 99-line TC brief with hex values (old)
> ITEM 106 (D01-D03, L249): ~35-line TC brief: routing only (new)

The old TC brief generated 99 lines of CSS values. The new TC brief does routing only (~35 lines). CSS value generation moves to the builder who has perception physics.

---

## Phase 1: TC Brief Assembly Process

> ITEM 15 (D01-D03, L41): PHASE 1: ACTIVATION BRIEF ASSEMBLY
> ITEM 16 (D01-D03, L44) [classified ORCHESTRATION]: Agent 2: Brief Assembler (Opus)

**Agent:** Brief Assembler (Opus)

**Process:**
> ITEM 17 (D01-D03, L46): MERGES 73-line template + content map -> ACTIVATION BRIEF
> D04-D05 ITEM 11 (L397-400): Template (73 lines) + Content Map (~35 lines) -> ACTIVATION BRIEF

**Template properties:**
> D04-D05 ITEM 6 (L381-385): 73-LINE TEMPLATE (pre-compressed) created ONCE, NOT per-build
> D04-D05 ITEM 7 (L384): Compression: infinity:1 (already done)

The 73-line template is a STATIC artifact — pre-compressed from the full research archive. It is NOT regenerated per build. The only per-build work is:
1. Content Map generation (Phase 0)
2. Merging template + content map into activation brief (Phase 1)

**Output:** ACTIVATION BRIEF (~93-113 lines)
> ITEM 18 (D01-D03, L49): ACTIVATION BRIEF (~93-113 lines)
> D04-D05 ITEM 12 (L398): ACTIVATION BRIEF (~113 lines) target size

**Delivery to builder:**
> D04-D05 ITEM 14 (L403): 1:1 (brief -> builder) no further compression

---

## Brief Template Structure

The activation brief has 4 tiers within the 73-line constraint layer, plus the appended content map:

### Tier 1: IDENTITY (15 lines)
> ITEM 19 (D01-D03, L51): Tier 1: IDENTITY (15 lines)
> ITEM 20 (D01-D03, L52) [classified IDENTITY]: 10 soul constraints as WORLD-DESCRIPTION
> ITEM 21 (D01-D03, L53) [classified IDENTITY]: "Every surface is sharp. Corners are cut, not curved"
> ITEM 22 (D01-D03, L54) [classified IDENTITY]: border-radius:0, box-shadow:none, container 940-960px
> ITEM 23 (D01-D03, L55) [classified IDENTITY]: warm palette (R>=G>=B), font trinity, no gradients

### Tier 2: PERCEPTION PHYSICS (8 lines)
> ITEM 24 (D01-D03, L58) [classified PERCEPTION]: Tier 2: PERCEPTION PHYSICS (8 lines)
> ITEM 25 (D01-D03, L59) [classified PERCEPTION]: 4 empirically validated thresholds as NATURAL LAWS

**Council verdict:** Perception thresholds DUAL-ROUTE to builder (as calibration) AND gate-runner (as binary check). Builder format: "Backgrounds must differ by at least 15 RGB points to be perceptible."

### Tier 3: COMPOSITIONAL FRAMEWORKS (50 lines)
> ITEM 31 (D01-D03, L65): Tier 3: COMPOSITIONAL FRAMEWORKS (50 lines)

Contains 5 sub-sections:
1. **Multi-Coherence** (18 lines): 6 channels, 4 directions, boundary-by-boundary
   > ITEM 32 (D01-D03, L66-67): Multi-Coherence (18 lines) 6 channels, 4 directions, boundary-by-bound
2. **Structural Metaphor** (8 lines): derive from content, embody in CSS
   > ITEM 33 (D01-D03, L68-69): Structural Metaphor (8 lines) derive from content, embody in CSS
3. **Density Arc** (6 lines): OPENING->DEEPENING->RESOLVING
   > ITEM 34 (D01-D03, L70-71): Density Arc (6 lines) OPENING->DEEPENING->RESOLVING
4. **Content-Form Coupling** (4 lines): per-section decisions
   > ITEM 35 (D01-D03, L72-73): Content-Form Coupling (4 lines) per-section decisions
5. **Creative Authority + Components** (8 lines): 80%/20%
   > ITEM 36 (D01-D03, L74-75): Creative Authority + Components (8 lines) 80%/20%

Plus:
6. **CSS Value Table** (6 lines)
   > ITEM 37 (D01-D03, L76): CSS Value Table (6 lines)

**Reader profile integration:**
> D12-D14 ITEM 101 (L1119): Brief Assembler merges reader profile into Tier 3

### Tier 4: DISPOSITION (~40 lines, 8 instructions)
> ITEM 38 (D01-D03, L79) [classified DISPOSITION]: Tier 4: DISPOSITION (8 instructions, ~40 lines)

D-01 through D-08 are included per the DISPOSITION artifact. They are referenced here as part of the brief structure but specified in the builder recipe artifact.

### Content Map Appendix (~30-50 lines)
> ITEM 47 (D01-D03, L90-92): CONTENT MAP appended to brief: per-section analysis, metaphor seeds

The content map from Phase 0 is APPENDED to the brief (not merged into it). It contains:
- Per-section analysis (type, density, character)
- Metaphor seeds (from metaphor viability assessment)
- Reader profile (~15 lines)
- Density arc estimate

---

## Content-Volume-to-Zone-Count Map

**STATUS: COUNCIL-ADDED ITEM (actionability item #3, 6 lines)**
> Council verdict Part 5: "Content-volume-to-zone-count map (actionability item #3, 6 lines) -- ROOT CAUSE prevention"
> D21-D25 ITEM 061 (L1773): Content-volume -> zone-count map (ROOT CAUSE, 6 lines) (#3)

This map prevents the root cause failure of mismatched content volume to zone allocation. The content analyst produces a zone-count recommendation based on content volume:

**Map specification (6 lines):**

| Content Volume | Recommended Zones | Rationale |
|---|---|---|
| < 2,000 words | 2-3 zones | Avoid whitespace voids from over-zoning sparse content |
| 2,000-5,000 words | 3-4 zones | Standard allocation, matches OPENING-DEEPENING-RESOLVING |
| 5,000-10,000 words | 4-5 zones | Dense content needs more breathing boundaries |
| 10,000-20,000 words | 5-7 zones | Long-form needs clear wayfinding segments |
| > 20,000 words | 7-10 zones | Consider multi-page split first |

**Enforcement:** The brief assembler uses this map when structuring the content map. Zone count in the brief must fall within the recommended range for the content volume.

**Council note:** This runs during assembly (Phase 0-1), not during gate verification.

---

## Content-Form Fit Gate

**STATUS: COUNCIL-ADDED ITEM (actionability item #4, 5 lines)**
> Council verdict Part 5: "Content-form fit gate (actionability item #4, 5 lines) -- ROOT CAUSE prevention"
> D21-D25 ITEM 062 (L1774): Content-form fit gate (ROOT CAUSE, 5 lines) (#4)

This gate prevents routing content into a mode that cannot serve it. It runs during assembly (Phase 1) as a pre-build check:

**Gate specification (5 lines):**

1. IF content heterogeneity = LOW AND metaphor viability = LOW THEN mode = APPLIED (mandatory)
2. IF content heterogeneity = HIGH AND metaphor viability = HIGH THEN mode = COMPOSED (recommended)
3. IF content heterogeneity = HIGH AND metaphor viability = LOW THEN mode = APPLIED with enhanced component variety
4. IF content heterogeneity = LOW AND metaphor viability = HIGH THEN mode = COMPOSED with typographic focus
5. FAIL if mode = COMPOSED but content has < 3 distinct section types (insufficient structural variation for composed mode)

**Enforcement:** Brief assembler runs this gate before finalizing mode selection. If FAIL, mode downgrades to APPLIED.

---

## Survival Function

**STATUS: RECLASSIFIED PER COUNCIL VERDICT**
> Council verdict (Pattern 4): Layer ROUTING -> GATES. Agent GATE-RUNNER -> ORCHESTRATOR.
> "The survival function S(x) = 1/(1+C(x)) describes a zero-tolerance policy: any constraint with a violation count C(x) > 0 gets removed from the constraint set. This is a CURATION function that runs during prompt assembly (Phase 0-1), not a runtime gate check (Phase 3)."

> D18-D20 ITEM 5 (L1346-1357): S(x) = 1/(1+C(x)): C(x)=0 survives, C(x)>0 dies
> D18-D20 ITEM 7 (L1356-1357): Survival function S(x) with both branches

**Function definition:**
```
S(x) = 1 / (1 + C(x))

Where:
  x = a constraint candidate for inclusion in the 73-line template
  C(x) = number of times constraint x has caused a quality suppression in builds
  S(x) = 1 when C(x) = 0 (constraint survives into template)
  S(x) -> 0 when C(x) > 0 (constraint removed from template)
```

**When it runs:** During prompt assembly (Phase 0-1), NOT during verification (Phase 3).
**Who runs it:** ORCHESTRATOR (not gate-runner).
**What it filters:** The constraint set that becomes the 73-line template.
**Output:** The gate-runner receives the FILTERED result (constraints that survived).

> D18-D20 ITEM 2 (L1337-1338): Pipeline PREDICTS ITS OWN FAILURE MODES (Reports 43+44)

---

## Information Flow Architecture

> D04-D05 ITEM 1 (L362): INFORMATION FLOW (Dual-Channel + Direct Files)
> D04-D05 ITEM 2 (L368): Two channels + two direct-file routes + one feedback loop

### Channel 1: UNIVERSAL (lossless, 1:1)
> D04-D05 ITEM 8 (L388-391): CHANNEL 1 UNIVERSAL (lossless, 1:1)

The 73-line template passes through 1:1 to the activation brief. No further compression.

### Channel 2: CONTENT (regenerated ~10:1)
> D04-D05 ITEM 9 (L388-391): CHANNEL 2 CONTENT (regenerated ~10:1)

Content source material is analyzed (Phase 0) and regenerated as a content map (~35 lines from possibly much longer source). This is REGENERATION, not compression -- the content analyst produces new analysis, not a summary.

### Direct File Routes
> D04-D05 ITEM 20 (L415-416) [classified SCAFFOLDING]: tokens.css and components.css as DIRECT FILE routes

tokens.css (183 lines) and components.css (290 lines) go directly to the builder without any compression or modification.

### Builder Input Assembly

The activation brief (~113 lines) is delivered 1:1 to the builder alongside the raw content and direct file routes:
> D04-D05 ITEM 14 (L403): 1:1 (brief -> builder) no further compression

Total builder input is ~3,600 lines (73-line constraint layer + ~40-line content map + content source + tokens.css 183 lines + components.css 290 lines + optional CD-006 reference).

> Council verdict (CF-01): "73-line constraint layer within ~3,600 total builder input (including reference files shared with v2)"

---

## Content-Type Propagation to Builder

**STATUS: COUNCIL-ADDED ITEM (actionability item #17)**
> D21-D25 ITEM 076 (L1792): Add content-type propagation to builder (#17)

The content type classification from Phase 0 (prose/mixed/visual) must propagate through the brief to the builder. Currently this is implicit in the content map; this item makes it EXPLICIT:

- Content map header line must state: "Content type: [PROSE|MIXED|VISUAL]"
- Mode selection (APPLIED/COMPOSED) must be stated explicitly in the brief
- Builder sees the content type + mode as a single routing decision, not as separate classifications

---

## Complete Item Registry

All Layer 8 ROUTING items organized by source and sub-topic.

### Phase 0: Content Analysis (D01-D03)

| # | Item ID | VA Line | Agent | Type | Text |
|---|---------|---------|-------|------|------|
| 1 | ITEM 4 | L18-19 | ORCHESTRATOR | PROCESS | CONTENT SOURCE (Input) Raw markdown / article / research |
| 2 | ITEM 5 | L24 | ORCHESTRATOR | PROCESS | PHASE 0: CONTENT ANALYSIS |
| 3 | ITEM 7 | L28 | CONTENT-ANALYST | PROCESS | Classify content type (prose/mixed/visual) |
| 4 | ITEM 8 | L29 | CONTENT-ANALYST | PROCESS | Map structural heterogeneity |
| 5 | ITEM 9 | L30 | CONTENT-ANALYST | PROCESS | Assess metaphor viability |
| 6 | ITEM 10 | L31 | CONTENT-ANALYST | PROCESS | Per-section character (NARRATIVE/REF/CODE) |
| 7 | ITEM 11 | L32 | CONTENT-ANALYST | PROCESS | Estimate density arc |
| 8 | ITEM 12 | L33 | CONTENT-ANALYST | PROCESS | Reader model classification |
| 9 | ITEM 13 | L35 | ORCHESTRATOR | VALUE | Output: CONTENT MAP (~30-50 lines) |
| 10 | ITEM 14 | L36 | ORCHESTRATOR | DECISION | "What the content IS, not what the design SHOULD BE" |

### Phase 1: Brief Assembly (D01-D03)

| # | Item ID | VA Line | Agent | Type | Text |
|---|---------|---------|-------|------|------|
| 11 | ITEM 15 | L41 | ORCHESTRATOR | PROCESS | PHASE 1: ACTIVATION BRIEF ASSEMBLY |
| 12 | ITEM 17 | L46 | ORCHESTRATOR | PROCESS | MERGES 73-line template + content map -> ACTIVATION BRIEF |
| 13 | ITEM 18 | L49 | ORCHESTRATOR | VALUE | ACTIVATION BRIEF (~93-113 lines) |
| 14 | ITEM 19 | L51 | ORCHESTRATOR | DECISION | Tier 1: IDENTITY (15 lines) |

### Brief Tier 3: Compositional Frameworks (D01-D03)

| # | Item ID | VA Line | Agent | Type | Text |
|---|---------|---------|-------|------|------|
| 15 | ITEM 31 | L65 | ORCHESTRATOR | DECISION | Tier 3: COMPOSITIONAL FRAMEWORKS (50 lines) |
| 16 | ITEM 32 | L66-67 | BUILDER | VALUE | Multi-Coherence (18 lines) 6 channels, 4 directions, boundary-by-bound |
| 17 | ITEM 33 | L68-69 | BUILDER | VALUE | Structural Metaphor (8 lines) derive from content, embody in CSS |
| 18 | ITEM 34 | L70-71 | BUILDER | VALUE | Density Arc (6 lines) OPENING->DEEPENING->RESOLVING |
| 19 | ITEM 35 | L72-73 | BUILDER | VALUE | Content-Form Coupling (4 lines) per-section decisions |
| 20 | ITEM 36 | L74-75 | BUILDER | VALUE | Creative Authority + Components (8 lines) 80%/20% |
| 21 | ITEM 37 | L76 | BUILDER | VALUE | CSS Value Table (6 lines) |
| 22 | ITEM 47 | L90-92 | ORCHESTRATOR | VALUE | CONTENT MAP appended to brief: per-section analysis, metaphor seeds |

### Old vs New Pipeline Comparison (D01-D03)

| # | Item ID | VA Line | Agent | Type | Text |
|---|---------|---------|-------|------|------|
| 23 | ITEM 105 | L249 | ORCHESTRATOR | VALUE | 99-line TC brief with hex values (old) |
| 24 | ITEM 106 | L249 | ORCHESTRATOR | VALUE | ~35-line TC brief: routing only (new) |
| 25 | ITEM 107 | L250-251 | ORCHESTRATOR | DECISION | TC generates CSS values WITHOUT perception physics (old) |
| 26 | ITEM 108 | L250-251 | BUILDER | DECISION | Builder generates CSS values WITH perception physics (new) |

### Information Flow Architecture (D04-D05)

| # | Item ID | VA Line | Agent | Type | Text |
|---|---------|---------|-------|------|------|
| 27 | D04-05 ITEM 1 | L362 | ORCHESTRATOR | DECISION | INFORMATION FLOW (Dual-Channel + Direct Files) |
| 28 | D04-05 ITEM 2 | L368 | ORCHESTRATOR | DECISION | Two channels + two direct-file routes + one feedback loop |
| 29 | D04-05 ITEM 5 | L372-374 | ORCHESTRATOR | FILE_REF | CONTENT SOURCE (markdown) varies |
| 30 | D04-05 ITEM 6 | L381-385 | TC-ASSEMBLER | DECISION | 73-LINE TEMPLATE (pre-compressed) created ONCE, NOT per-build |
| 31 | D04-05 ITEM 7 | L384 | ORCHESTRATOR | VALUE | Compression: infinity:1 (already done) |
| 32 | D04-05 ITEM 8 | L388-391 | TC-ASSEMBLER | DECISION | CHANNEL 1 UNIVERSAL (lossless, 1:1) |
| 33 | D04-05 ITEM 9 | L388-391 | ORCHESTRATOR | DECISION | CHANNEL 2 CONTENT (regenerated ~10:1) |
| 34 | D04-05 ITEM 11 | L397-400 | TC-ASSEMBLER | PROCESS | Template (73 lines) + Content Map (~35 lines) -> ACTIVATION BRIEF |
| 35 | D04-05 ITEM 12 | L398 | ORCHESTRATOR | VALUE | ACTIVATION BRIEF (~113 lines) target size |
| 36 | D04-05 ITEM 13 | L399-400 | ORCHESTRATOR | VALUE | Content Map (~35 lines) from Phase 0 |
| 37 | D04-05 ITEM 14 | L403 | ORCHESTRATOR | PROCESS | 1:1 (brief -> builder) no further compression |
| 38 | D04-05 ITEM 16 | L410-417 | BUILDER | DECISION | Builder receives 4 inputs: brief, content, tokens.css, components.css |
| 39 | D04-05 ITEM 17 | L413 | BUILDER | VALUE | ~113 lines (brief size target) |
| 40 | D04-05 ITEM 28 | L424-432 | ORCHESTRATOR | DECISION | COMPRESSION RATIOS: Old 50:1 cascading, New near-zero |
| 41 | D04-05 ITEM 29 | L426-427 | ORCHESTRATOR | VALUE | OLD: 45,000->6,300->578->99->builder = 50:1, 99.6% loss |
| 42 | D04-05 ITEM 30 | L429-431 | ORCHESTRATOR | VALUE | NEW: 45,000->73 (once) + content (regen) = near-zero loss |

### Irreducible Concepts: Content-Form + Compression (D06-D08)

| # | Item ID | VA Line | Agent | Type | Text |
|---|---------|---------|-------|------|------|
| 43 | D06-08 ITEM 41 | L579-581 | PA-AUDITOR | DECISION | Content-Form Coupling: SPECIFIED+ACTIVATED via TC + D-01 |
| 44 | D06-08 ITEM 42 | L579 | TC-ASSEMBLER | VALUE | Content-Form Coupling (9 concepts collapsed) |
| 45 | D06-08 ITEM 43 | L580 | PA-AUDITOR | FILE_REF | TC brief routing + D-01 content-register reading |
| 46 | D06-08 ITEM 44 | L583-585 | ORCHESTRATOR | DECISION | Compression Physics: SPECIFIED via 73-line + dual-channel |
| 47 | D06-08 ITEM 45 | L583 | TC-ASSEMBLER | VALUE | Compression Physics (6 concepts collapsed) |
| 48 | D06-08 ITEM 47 | L584 | ORCHESTRATOR | DECISION | dual-channel architecture |
| 49 | D06-08 ITEM 61 | L607-608 | PA-AUDITOR | DECISION | Reader Model: SPECIFIED via reader persona in content analysis |

### Compression Boundary Analysis (D12-D14)

| # | Item ID | VA Line | Agent | Type | Text |
|---|---------|---------|-------|------|------|
| 50 | D12-14 ITEM 1 | L963 | ORCHESTRATOR | DECISION | THE PIPELINE'S PRECISE BOUNDARY (from A5) |
| 51 | D12-14 ITEM 2 | L967-968 | ORCHESTRATOR | DECISION | Value Propagation vs Relationship Propagation |
| 52 | D12-14 ITEM 4 | L974 | ORCHESTRATOR | VALUE | 45,000 lines -> 73-line brief -> CSS output |
| 53 | D12-14 ITEM 5 | L978 | ORCHESTRATOR | THRESHOLD | VALUES (80-95% prescribed) survive |
| 54 | D12-14 ITEM 6 | L978 | ORCHESTRATOR | THRESHOLD | RELATIONSHIPS (0% prescribed) die |
| 55 | D12-14 ITEM 13 | L987-988 | ORCHESTRATOR | THRESHOLD | 55.2:1 compression: 2,374 CSS lines -> 43 prose |
| 56 | D12-14 ITEM 14 | L989 | ORCHESTRATOR | DECISION | Individual values survive |
| 57 | D12-14 ITEM 15 | L980-981 | BUILDER | DECISION | Which values should CO-OCCUR (relationship lost) |
| 58 | D12-14 ITEM 16 | L981 | BUILDER | DECISION | Which values should CONTRAST (relationship lost) |
| 59 | D12-14 ITEM 17 | L982-983 | BUILDER | DECISION | Which values should VARY TOGETHER across zones (lost) |
| 60 | D12-14 ITEM 18 | L984-985 | BUILDER | DECISION | How channels interact at zone boundaries (lost) |
| 61 | D12-14 ITEM 19 | L986-987 | BUILDER | DECISION | Why THIS value pairs with THAT value in THIS context (lost) |
| 62 | D12-14 ITEM 20 | L989-991 | BUILDER | DECISION | Combinations do NOT survive compression. Must be REGENERATED |
| 63 | D12-14 ITEM 21 | L996 | ORCHESTRATOR | RECOMMENDATION | Don't compress relationships. ACTIVATE them. |
| 64 | D12-14 ITEM 22 | L998 | CONTENT-ANALYST | VALUE | Old: 'Use >=15 RGB delta' (VALUE rule) |
| 65 | D12-14 ITEM 23 | L999-1000 | BUILDER | VALUE | New: 'Room perception at boundaries' (RELATION) |
| 66 | D12-14 ITEM 25 | L1003-1004 | BUILDER | DECISION | Builder with Opus generates BOTH values AND relationships natively |
| 67 | D12-14 ITEM 26 | L1007-1008 | ORCHESTRATOR | THRESHOLD | Builder-originated material ~20% of CSS compensates gaps |
| 68 | D12-14 ITEM 27 | L1009 | BUILDER | DECISION | Builder EXCEEDS specification when in COMPOSING mode |

### Temporal Composition -- Scroll Rhythm (D12-D14)

| # | Item ID | VA Line | Agent | Type | Text |
|---|---------|---------|-------|------|------|
| 69 | D12-14 ITEM 28 | L1014 | CONTENT-ANALYST | DECISION | TEMPORAL COMPOSITION -- SCROLL RHYTHM IN CSS (from B1) |
| 70 | D12-14 ITEM 29 | L1018 | BUILDER | DECISION | How static CSS creates time-based experience |
| 71 | D12-14 ITEM 30 | L1019 | BUILDER | DECISION | Every reader experiences page TEMPORALLY -- they scroll |
| 72 | D12-14 ITEM 32 | L1023 | BUILDER | DECISION | THREE DIMENSIONS OF SCROLL RHYTHM |
| 73 | D12-14 ITEM 33 | L1025 | BUILDER | DECISION | A. SECTION HEIGHT ('measure length') |
| 74 | D12-14 ITEM 46 | L1033 | BUILDER | DECISION | Pattern: SHORT->LONG->LONGEST->MOD (Gas Town crescendo) |
| 75 | D12-14 ITEM 47 | L1036 | BUILDER | DECISION | Pattern: REGULAR 4/4 time (CD-006 uniform) |
| 76 | D12-14 ITEM 48 | L1038 | BUILDER | DECISION | B. VISUAL DENSITY ('dynamics' -- loud/quiet) |
| 77 | D12-14 ITEM 49 | L1041 | BUILDER | VALUE | Gas Town Z1: SPARSE |
| 78 | D12-14 ITEM 50 | L1042 | BUILDER | VALUE | Gas Town Z2: MODERATE |
| 79 | D12-14 ITEM 51 | L1043 | BUILDER | VALUE | Gas Town Z3: DENSE |
| 80 | D12-14 ITEM 52 | L1044 | BUILDER | VALUE | Gas Town Z4: MODERATE |
| 81 | D12-14 ITEM 53 | L1041 | BUILDER | VALUE | CD-006 S1: MEDIUM |
| 82 | D12-14 ITEM 54 | L1042 | BUILDER | VALUE | CD-006 S2: HIGH |
| 83 | D12-14 ITEM 55 | L1043 | BUILDER | VALUE | CD-006 S3: HIGH |
| 84 | D12-14 ITEM 56 | L1044 | BUILDER | VALUE | CD-006 S4: V.HIGH |
| 85 | D12-14 ITEM 57 | L1045 | BUILDER | VALUE | CD-006 S5: HIGH |
| 86 | D12-14 ITEM 58 | L1046 | BUILDER | VALUE | CD-006 S6: MEDIUM |
| 87 | D12-14 ITEM 59 | L1047 | BUILDER | VALUE | CD-006 S7: MEDIUM |
| 88 | D12-14 ITEM 60 | L1048 | BUILDER | VALUE | CD-006 S8: LOW |
| 89 | D12-14 ITEM 61 | L1046 | BUILDER | DECISION | CRESCENDO+RELEASE (Gas Town density pattern) |
| 90 | D12-14 ITEM 62 | L1049 | BUILDER | DECISION | PLATEAU+TAPER (CD-006 density pattern) |
| 91 | D12-14 ITEM 63 | L1051 | BUILDER | DECISION | C. TRANSITION WEIGHT ('articulation' -- staccato/legato) |

### Reader Model -- 5-Axis Input Space (D12-D14)

| # | Item ID | VA Line | Agent | Type | Text |
|---|---------|---------|-------|------|------|
| 92 | D12-14 ITEM 76 | L1077 | ORCHESTRATOR | DECISION | READER MODEL -- 5-AXIS INPUT SPACE (from B2) |
| 93 | D12-14 ITEM 77 | L1081 | ORCHESTRATOR | DECISION | 5 axes map directly to CSS parameter adjustments |
| 94 | D12-14 ITEM 78 | L1082 | ORCHESTRATOR | WARNING | 'The single most consequential ABSENT dimension in the pipeline' |
| 95 | D12-14 ITEM 80 | L1086-1087 | CONTENT-ANALYST | DECISION | Expert (Yegge followers) <-> General (Google search) spectrum |
| 96 | D12-14 ITEM 81 | L1088-1091 | ORCHESTRATOR | DECISION | AXIS 1 Info Density |
| 97 | D12-14 ITEM 85 | L1093-1095 | ORCHESTRATOR | DECISION | AXIS 2 Visual Complexity |
| 98 | D12-14 ITEM 88 | L1097-1099 | ORCHESTRATOR | DECISION | AXIS 3 Progressive Disclosure |
| 99 | D12-14 ITEM 89 | L1098 | BUILDER | VALUE | None (show everything) Expert ... Collapsible sections General |
| 100 | D12-14 ITEM 90 | L1099 | BUILDER | VALUE | Trust reader to scan Expert ... Flag key points General |
| 101 | D12-14 ITEM 91 | L1101-1103 | ORCHESTRATOR | DECISION | AXIS 4 Navigation Complexity |
| 102 | D12-14 ITEM 94 | L1105-1107 | ORCHESTRATOR | DECISION | AXIS 5 Entry Velocity |
| 103 | D12-14 ITEM 97 | L1111 | ORCHESTRATOR | WARNING | Gas Town: 'Stage 7+' (EXPERT reader) content signal |
| 104 | D12-14 ITEM 98 | L1112 | ORCHESTRATOR | WARNING | Gas Town CSS: general-reader treatment despite expert content |
| 105 | D12-14 ITEM 99 | L1115-1116 | ORCHESTRATOR | WARNING | Pipeline had NO mechanism to translate audience signal to CSS |
| 106 | D12-14 ITEM 100 | L1118 | ORCHESTRATOR | PROCESS | Phase 0 Content Analyst outputs reader profile (~15 lines) |
| 107 | D12-14 ITEM 101 | L1119 | ORCHESTRATOR | PROCESS | Brief Assembler merges reader profile into Tier 3 |
| 108 | D12-14 ITEM 102 | L1118-1119 | TC-ASSEMBLER | AGENT_ROLE | Two agents: Content Analyst (reader profile) + Brief Assembler (merge) |

### Survival Function + Compression Analysis (D18-D20)

| # | Item ID | VA Line | Agent | Type | Text | Council Note |
|---|---------|---------|-------|------|------|-------------|
| 109 | D18-20 ITEM 2 | L1337-1338 | ORCHESTRATOR | DECISION | Pipeline PREDICTS ITS OWN FAILURE MODES (Reports 43+44) | |
| 110 | D18-20 ITEM 3 | L1342-1344 | ORCHESTRATOR | DECISION | WHAT SURVIVES: things that become MORE CONCRETE at each level | |
| 111 | D18-20 ITEM 4 | L1342-1344 | ORCHESTRATOR | DECISION | WHAT DIES: things that exist only as RELATIONSHIPS among values | |
| 112 | D18-20 ITEM 5 | L1346-1357 | ORCHESTRATOR | PROCESS | S(x) = 1/(1+C(x)): C(x)=0 survives, C(x)>0 dies | **RECLASSIFIED: ROUTING->GATES layer, GATE-RUNNER->ORCHESTRATOR agent per council Pattern 4** |
| 113 | D18-20 ITEM 7 | L1356-1357 | ORCHESTRATOR | THRESHOLD | Survival function S(x) with both branches | **RECLASSIFIED: same as above** |
| 114 | D18-20 ITEM 11 | L1378-1379 | ORCHESTRATOR | DECISION | Both correct at different scope: 42 measures assembly, 44 total | |
| 115 | D18-20 ITEM 12 | L1381-1383 | TC-ASSEMBLER | VALUE | 42: assembly->prompt 10:1, 44: total research->prompt 83:1 | |
| 116 | D18-20 ITEM 13 | L1382 | TC-ASSEMBLER | THRESHOLD | 10:1 assembly-to-prompt ratio acceptable | |
| 117 | D18-20 ITEM 14 | L1383 | TC-ASSEMBLER | THRESHOLD | 83:1 total-research-to-prompt ratio = brutal | |
| 118 | D18-20 ITEM 15 | L1385-1387 | ORCHESTRATOR | DECISION | Most loss happened BEFORE assembly (5 categories of dead knowledge) | |
| 119 | D18-20 ITEM 16 | L1385 | TC-ASSEMBLER | VALUE | 5 categories of dead knowledge never reached assembly | |
| 120 | D18-20 ITEM 17 | L1389-1391 | ORCHESTRATOR | DECISION | 73-line template encoded ONCE from full research. No cascading | |
| 121 | D18-20 ITEM 18 | L1389 | TC-ASSEMBLER | VALUE | 73-line template encoded ONCE | |
| 122 | D18-20 ITEM 19 | L1390-1391 | TC-ASSEMBLER | RECOMMENDATION | No cascading compression. Template IS the research distillate | |

### Council-Added Items (D21-D25 + Council Verdict)

| # | Item ID | VA Line | Agent | Type | Text | Council Note |
|---|---------|---------|-------|------|------|-------------|
| 123 | D21-25 ITEM 061 | L1773 | PIPELINE-META | RECOMMENDATION | Content-volume -> zone-count map (ROOT CAUSE, 6 lines) (#3) | **COUNCIL-ADDED: actionability item #3** |
| 124 | D21-25 ITEM 062 | L1774 | PIPELINE-META | RECOMMENDATION | Content-form fit gate (ROOT CAUSE, 5 lines) (#4) | **COUNCIL-ADDED: actionability item #4, secondary L6 GATES** |
| 125 | D21-25 ITEM 076 | L1792 | PIPELINE-META | RECOMMENDATION | Add content-type propagation to builder (#17) | **COUNCIL-ADDED: actionability item #17** |

---

## Council Verdict Compliance Notes

### Reclassifications Applied

1. **Survival function (D18-20 ITEMs 5, 7):** Layer ROUTING -> GATES. Agent GATE-RUNNER -> ORCHESTRATOR. Runs during assembly, not verification.

2. **"Activation" framing:** RETIRED per Contradiction A. Replaced throughout with "PURPOSE + VOCABULARY."

3. **CF-01 (73-line accounting):** All references to 73-line brief include honest accounting parenthetical: "73-line constraint layer within ~3,600 total builder input."

4. **CF-02 (Compositional Critic):** Not referenced in this artifact (belongs to ORCHESTRATION layer).

5. **CF-03 (Suppressor removal):** Survival function S(x) runs during assembly to filter suppressors. Phased removal protocol respected.

6. **CF-04 (N=4 problem):** Evidence taxonomy noted where relevant. Reader model = THEORETICAL (N=0 with v3 spec). Content-form routing = OBSERVED (N=2, Middle = APPLIED 4/4, Gas Town = partial mismatch).

7. **Pattern 1 (GATES->BUILDER):** Perception thresholds DUAL-ROUTE to builder (calibration format) + gate-runner (binary format) per actionability win.

8. **Pattern 3 (ORCH->BUILDER, mode sub-ruling):** Builder receives ONE mode's recipe. Orchestrator selects mode. Builder never sees "Applied vs Composed" as a choice.

9. **Pattern 4 (ROUTING->GATE-RUNNER):** Both items reclassified per above.

---

*Total items: 125 (63 from layer classifier + 62 additional from unified registry cross-matches) + 3 council-added items = 128 total tracked. All Layer 8 items accounted for. Zero compression.*
