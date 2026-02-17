# 23 -- Pipeline Extraction: Complete Build Pipeline, Skill Workflows, Track 2 Execution Spec

**Extracted by:** pipeline-researcher
**Date:** 2026-02-16
**Sources:** 10 files (SKILL.md 1,582 lines, PA-SKILL.md 736 lines, 03-MIGRATION-PIPELINE.md 1,697 lines, 07-TRACK-2-SUPPLEMENT.md 1,142 lines, 05-COMPLETE-ROADMAP.md 875 lines, TENSION-PROTOCOL.md 1,940 lines, 08-STRATEGY-LIBRARY.md 1,747 lines, 04-CONTENT-INGESTION.md 562 lines, MASTER-CD-EXECUTION-PROMPT.md 930 lines, 09-EXTRACTION-VALIDATION.md 984 lines)
**Purpose:** EXHAUSTIVE extraction of the build pipeline for the master execution prompt

---

## SECTION 1: THE COMPLETE 6-PHASE TENSION-COMPOSITION PIPELINE

### Pipeline Overview

```
CONTENT --> ASSESSMENT --> MULTI-AXIS QUESTIONING --> TENSION DERIVATION --> [GATE] --> METAPHOR COLLAPSE --> COMPOSITIONAL LAYOUT --> OUTPUT
 (input)    (Phase 0)          (Phase 1)                 (Phase 2)                       (Phase 3)            (Phase 4)          (Phase 5)
```

### Phase 0: Content Assessment

**Purpose:** Classify content and route the pipeline.

**Step 0A -- Content Type Classification:**
- **Prose-dominant** (<30% code/tables/diagrams): STANDARD path, proceed to Phase 1
- **Mixed** (30-60%): HYBRID path -- run pipeline on narrative sections; apply design system defaults to code/data
- **Visual-dominant** (>60%): PRESENTATION-INTRINSIC -- skip metaphor for visual portions, apply design system styling only
- **Self-referential** (content describes the design system): ABORT -- cannot derive tension when content IS the system

**Step 0B -- Scope Assessment:**
- **MICRO** (<100 words): Skip pipeline, apply design system defaults
- **SHORT** (100-500 words): Reduced pipeline (2 needs max per axis, single metaphor)
- **STANDARD** (500-3000 words): Full pipeline
- **LONG** (3000-10000 words): Segment into sections, pipeline per section, then unifying pass
- **MASSIVE** (10000+): Multi-page architecture

**Step 0C -- Section Identification (STANDARD and LONG):**
1. Identify natural sections by heading, topic shift, or mode change
2. Classify each: NARRATIVE / REFERENCE / CODE / DATA / MIXED
3. Flag sections with incompatible structural needs

**Step 0D -- Tier Classification (CRITICAL):**

| Content Signal | Tier | Route |
|---------------|------|-------|
| <200 words, API reference, config table, changelog | **Floor** | Skip Phases 1-5. Use Track 1 (component assembly). |
| Tutorial, guide, overview, comparison, narrative (prose-dominant) | **Middle** | Skip Phases 1-3. Go to Phase 4.0 with PATTERN selection. |
| Genuine structural tension (Addition Test = NO), prose-dominant | **Ceiling** | Full pipeline (Phases 1-5). |
| Anchor content, design system showcase, philosophical deep-dive | **Flagship** | Full pipeline + multi-pass audit. |

**Middle-tier routing (SKIP Phases 1-3):**
- Select a DENSITY PATTERN instead of deriving a metaphor:

| Content Type | Pattern | Why |
|--------------|---------|-----|
| Tutorial, step-by-step guide | **CRESCENDO** | Density builds progressively |
| Reference, lookup, API docs | **F-PATTERN** | Dense left column, sparse right |
| Overview, dashboard, card gallery | **BENTO** | Grid-based modular sections |
| Narrative, story arc, case study | **PULSE** | Rhythmic dense-sparse-dense alternation |

**Patterns vs Mechanisms distinction:** Patterns (CRESCENDO/F-PATTERN/BENTO/PULSE) are page-scale spatial organization strategies (the skeleton). Mechanisms (18 CSS techniques in catalog) are the flesh deployed within that skeleton.

**Step 0E -- Library Access Prohibition (CRITICAL):**
- DO NOT read case studies, prior explorations, or pattern library during Phases 0-3
- Library access permitted: Phase 4 (mechanism catalog only), Phase 5 (case studies for divergence verification)
- Violation invalidates the entire derivation

---

### Phase 1: Multi-Axis Questioning

**Purpose:** Derive what the reader needs across multiple dimensions.

**Core Four (ALWAYS run):**

| Axis | Question | Richest When |
|------|----------|-------------|
| **FEEL** | "What does the reader need to FEEL while navigating this content?" | Narrative, emotional topics, onboarding |
| **UNDERSTAND** | "What relationships does the reader need to UNDERSTAND?" | Technical docs, architectures, causal explanations |
| **DO** | "What does the reader need to DO after reading?" | Tutorials, guides, decision frameworks |
| **BECOME** | "What does the reader need to BECOME after absorbing this?" | Learning paths, philosophy, methodology |

**Extended Core (ALWAYS consider, mark LOW YIELD when appropriate):**

| Axis | Question | Low Yield When |
|------|----------|----------------|
| **NAVIGATE** | "How does the reader need to move THROUGH this content?" | Short content, linear narratives |
| **TRUST** | "What does the reader need to believe about this content's AUTHORITY?" | Factual reference, established authority |
| **EVALUATE** | "What does the reader need to JUDGE?" | Single-path tutorials, narrative |
| **ORIENT** | "What does the reader need to know about WHERE THIS FITS?" | Standalone content |
| **RECONCILE** | "What does the reader need to RECONCILE with prior beliefs?" | Content confirming existing knowledge |

**Structural Trigger Axes (deploy conditionally):**

| Axis | Deploy When Content Contains... |
|------|-------------------------------|
| **COMPARE** | 2+ alternatives, trade-offs |
| **IDENTIFY** | Personas, reader-as-protagonist |
| **DISCOVER** | Aha-moments, progressive revelation |
| **SEE** | System architectures, spatial relationships |
| **REMEMBER** | Reference patterns, checklists |

**Opposition Predicts Richness (key principle):**
- Richest axes OPPOSE the system's personality: RECONCILE, NAVIGATE, EVALUATE, DISCOVER, FEEL
- Axes that ALIGN with system produce cosmetic tension: TRUST, DO, ORIENT
- Avoid building primary tension from aligned axes

**Axis Interaction Effects (compound tension):**
- RECONCILE + IDENTIFY = double transformation
- NAVIGATE + COMPARE = maximum structural complexity
- DISCOVER + UNDERSTAND = oppositional structural demands
- FEEL + EVALUATE = emotional engagement vs critical distance

**Phase 1 Output:** Table per axis with Needs, Structural Properties, and Richness rating (HIGH/MEDIUM/LOW)

---

### Phase 2: Tension Derivation

**Purpose:** Identify genuine tensions between reader needs (Side A) and system constraints (Side B).

**Side B: KortAI Design System Constraints (LOCKED):**

| Category | Constraint |
|----------|-----------|
| Geometry | `border-radius: 0` ALWAYS, `box-shadow: none` ALWAYS, no `drop-shadow()` |
| Palette | Primary #E83025, Background #FEF9F5, Text #1A1A1A, Border #E0D5C5 |
| Typography | Display: Instrument Serif, Body: Inter, Mono: JetBrains Mono |
| Borders | 3-4px structural, 1px separator, NEVER 2px |
| Spacing | 4/8/12/16/20/24/32/40/48/64/80px scale |
| Personality | 75% austere, 95% angular, 85% serious, 100% geometric, 70% sparse |

**Three Formal Criteria for Genuine Tension:**
1. **Semantic opposition:** Side A's need is semantically opposed to Side B's personality at the level of MEANING
2. **Vocabulary gap:** System has no direct tool for the need
3. **Structural overlap:** Despite emotional opposition, sides share structural properties (makes bridge POSSIBLE)

**Three Criteria for Cosmetic Tension (any = cosmetic):**
1. **False opposition:** Both sides want the same thing
2. **Direct tool available:** System already has a mechanism for the need
3. **Decoration substitution:** Resolves by adding label/header/color, not transforming meaning

**The Addition Test (MOST IMPORTANT diagnostic):**
> Can you fulfill the reader's need by selecting and placing existing components without transforming their meaning?
> YES = COSMETIC (assembly sufficient). NO = GENUINE (metaphor required).

**The BECAUSE Test:**
> "The reader needs X BECAUSE [specific content property]."
> If you cannot complete with a specific content property, the need is manufactured.

**Richness Formula (MULTIPLICATIVE):**
```
RICHNESS = Opposition Depth (1-3) x Structural Overlap (1-3) x Metaphor Space Width (1-3)
```
- Score range: 1-27
- Threshold for Track 2: >= 8
- Zero overlap = ZERO richness (impossible to bridge)

**Selection Protocol:**
1. Score each tension on all three dimensions
2. Multiply: Opposition x Overlap x Width
3. Select highest product
4. Tiebreaker: prefer most SURPRISING bridge
5. Second tiebreaker: UNDERSTAND > FEEL > BECOME > DO

**R5 IMPROVEMENT -- Richness Formula Cap:**
- Use richness to select TENSIONS (Phase 2): correct
- Do NOT use richness to select METAPHORS (Phase 3): richness score has ~0 correlation with visual quality

**Tension Threshold Gate (exit ramp):**
- Zero genuine tensions: Skip Phases 3-4, apply design system defaults
- All tensions cosmetic: Skip Phase 3, direct component mapping
- At least 1 genuine tension: Proceed to Phase 3

---

### Phase 3: Metaphor Collapse

**Purpose:** Find a real-world domain where shared structural properties exist naturally, resolving emotional opposition through structural isomorphism.

**Step 3.1 -- Extract Structural Properties from Side A:**
Transform emotional needs into geometric/topological abstractions.
- "Graduated trust" --> ORDERING
- "Visible progress" --> TRAVERSAL
- "Safety in uncertainty" --> CONTAINMENT

**Step 3.2 -- Extract Structural Properties from Side B:**
Transform design constraints into geometric/perceptual abstractions.
- `border-radius: 0` --> ANGULARITY
- `box-shadow: none` --> FLATNESS
- Border categories --> DISCRETE WEIGHT
- Spacing scale --> PRECISE INTERVALS

**Step 3.3 -- Find Structural Overlap:**
```
Overlap = shared properties / total unique properties
> 80%: WARNING -- low tension, consider assembly
40-70%: IDEAL ZONE -- strong metaphor potential
< 30%: WARNING -- extreme tension, expect unconventional resolution
```

**Step 3.4 -- Generate Search Query:**
> "What real-world domain naturally exhibits [OVERLAP PROPERTIES] while being [SIDE B GAP PROPERTIES] yet conveying [SIDE A GAP PROPERTIES]?"

**Three Search Heuristics:**
1. **Constraint scan:** Start with HARDEST constraint (for KortAI: ANGULARITY eliminates organic, liquid, atmospheric, textile, botanical)
2. **Content resonance:** What is the content LITERALLY about?
3. **Emotional valence:** Side A's emotion eliminates domains with wrong valence

**Domain Search Menu (for angular/flat/sharp systems):**

| Domain | Compatible Properties | Best When Content Is About |
|--------|----------------------|---------------------------|
| Geological/Sedimentary | Angular, layered, ordered, compressed | Stability, confidence, progression |
| Architectural/Structural | Angular, precise, load-bearing, zoned | Systems, frameworks, dependencies |
| Typographic/Editorial | Angular (grid), precise, hierarchical | Information hierarchy, editorial judgment |
| Cartographic/Territorial | Angular (grid), flat (2D), bounded | Navigation, exploration, scope |
| Industrial/Mechanical | Angular, precise, toleranced | Tools, processes, APIs |
| Scientific/Laboratory | Precise, institutional, measured | Testing, validation, research |
| Legal/Contractual | Formal, precise, authoritative | Policies, requirements |
| Archival/Catalogic | Ordered, classified, indexed | Collections, taxonomies |
| Military/Strategic | Precise, hierarchical, decisive | Decision trees, priorities |
| Astronomical/Surveying | Precise, mapped, measured | Scale, overview, positioning |

**Incompatible Metaphor Families (for KortAI):**
- Organic/Biological (requires curves)
- Liquid/Fluid (requires flowing shapes)
- Atmospheric/Weather (requires opacity, blur, softness)
- Textile/Fabric (requires texture, draping)
- Musical (requires curves)

**Step 3.5 -- Test Candidates (6-dimension Composite Scoring):**

**A. Tension Resolution:** Test against EVERY tension. Score: X/N (YES=1, PARTIAL=0.5, NO=0)

**B. Structural Isomorphism Count:**
- 6+ = Structurally isomorphic (proceed confidently)
- 4-5 = Structurally strong
- 2-3 = Structurally thin
- 0-1 = Decorative only (REJECT)

**C. Content Resonance (Split: Nominal + Structural):**
- C1 Nominal: Does content use metaphor's vocabulary? (HIGH/MEDIUM/LOW)
- C2 Structural: Does metaphor's structure mirror content's structure? (HIGH/MEDIUM/LOW)
- **Weight structural resonance 2x higher than nominal**

**D. Mechanism Feasibility:** Can EVERY property be expressed via 6 legal CSS channels? If any requires soul violation = FAIL

**E. Perceptual Risk Assessment (R1 IMPROVEMENT -- CRITICAL):**

| Risk Question | LOW Risk | HIGH Risk |
|---|---|---|
| Transition model | Changing state (deeper stratum) | Empty space (breathing zones, page turns) |
| Expression mode | Structural gradients | Textual labels |
| Element variety | Varied sizes/shapes | Uniform grids |
| Responsive story | Natural degradation | Forced |

Score: 0-4. Rating: 0-1=LOW, 1.5-2=MODERATE, 2.5-3=HIGH, 3.5-4=EXTREME
**CRITICAL RULE:** Resolution 7/7 + HIGH risk ranks BELOW Resolution 5/7 + LOW risk

**F. Perceptual Cost Assessment (Guardrail Violation Prediction):**

| Cost Question | +1 Cost If YES |
|---|---|
| Compression below floors (padding <32px, ratio >2.5:1)? | +1 |
| Container width below 940px? | +1 |
| Uniform element grids (4+ identical, no hierarchy)? | +1 |
| Transitions as empty space? | +1 |
| Explicit labels over structure? | +1 |

Score: 0-5+. Rating: 0=LOW, 1-2=MODERATE, 3+=HIGH

**Composite Verdict:**
- **PROCEED**: Resolution >= N-1, Isomorphism >= 4, Structural Resonance >= MEDIUM, Feasibility = 100%, Perceptual Risk <= 2
- **CONSIDER**: Resolution >= N-2, Isomorphism >= 3, Feasibility >= 80%, Perceptual Risk <= 3
- **REJECT**: Any other OR Perceptual Risk = 4

**Responsive Degradation Check (added before finalizing):**
> "Does this metaphor have a natural responsive story at 768px?"

**Metaphor Failure Modes:**
- **Monopoly** (1 candidate): Relax constraints, search again
- **Inflation** (8+): Re-examine with Addition Test, apply isomorphism filter
- **Forcing** (none fully resolves): Accept partial resolution
- **Redundancy** (tie): Tiebreakers: content resonance > emotional valence > mechanism richness
- **Decay** (weakens during Phase 4): Return to Phase 3, select next-best

---

### Phase 3.5: Metaphor Commitment (LOCK-IN GATE)

**Step 3.5A:** State committed metaphor IN WRITING
**Step 3.5B:** Document WHY (how it resolves tension, why vs alternatives)
**Step 3.5C:** Commitment Verification:
1. Did I derive independently? YES/NO
2. Can I justify without library examples? YES/NO
3. Does it appear in case studies index? -> If YES, proceed to divergence justification

**Step 3.5D: Divergence Justification (if convergence detected):**
All answers must favor independent convergence. If justification fails: regenerate with constraint banning that metaphor.

**Phase 3.5 complete when:** Metaphor committed, justification documented, divergence verified

---

### Phase 4: Compositional Layout Generation

**Phase 4.0: Perceptual Guardrails (NON-NEGOTIABLE -- ENFORCE FIRST)**

| Guardrail | Value | Override |
|-----------|-------|---------|
| Container width at 1440px | **940-960px** | **NEVER** |
| Min horizontal padding | **32px per side** | NEVER |
| Min label-to-heading gap | **16px** | NEVER |
| Min body line-height | **1.5** | NEVER |
| Min section breathing zone | **48px** | NEVER |
| Compression ratio ceiling | **Deepest >= 40% of shallowest** | NEVER |
| Characters per line | **45-80** | NEVER |
| Content-to-viewport ratio | **65-80%** | NEVER |

**CONTAINER WIDTH = #1 Phase D failure mode (4/5 validation pages violated it)**

**Priority Order When Metaphor Conflicts:**
1. Readability floors (NEVER compromise)
2. Breathing zones (NEVER compromise)
3. Content width (NEVER compromise)
4. Metaphor fidelity (ADJUST to meet floors)
5. Aesthetic preference (LAST priority)

**Step 4.0 -- Mechanism Library Access (NOW PERMITTED):**
- Read mechanism catalog (18 mechanisms)
- Extract TECHNIQUES, not implementations

**Per-category mechanism deployment (MANDATORY for Middle-tier+):**

| Category | Mechanisms Available | Minimum |
|----------|---------------------|---------|
| **Spatial** | #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid | 1+ |
| **Hierarchy** | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale | 1+ |
| **Component** | #2 2-Zone DNA, #9 Confidence Color, #10 Border-Left Signal, #17 Code Block | 1+ |
| **Depth/Emphasis** | #3 Solid Offset, #7 Zone Backgrounds, #16 Drop Cap | 1+ |
| **Structure/Nav** | #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table | 1+ |

**Justification requirement (MANDATORY):**
- For EACH mechanism deployed: one sentence on WHY it serves THIS content
- For AT LEAST 3 rejected mechanisms: one sentence on WHY they don't fit

**Natural landing by tier:**
- Floor: 5 mechanisms
- Middle: 5-10 across all 5 categories
- Ceiling: 8-12 + 2+ combinations
- Flagship: 12-15 + 3+ combinations

**Step 4.1 -- Extract Metaphor Physical Properties (5-Category Taxonomy):**

| Category | Question | Examples |
|----------|----------|---------|
| **A. Spatial** | What is the physical arrangement? | Horizontal layers, vertical columns, nested containment |
| **B. Temporal** | What is the time dimension? | Sequence, progression, oscillation, climax |
| **C. Material** | What is the substance like? | Density, weight, transparency, texture |
| **D. Behavioral** | What does it DO? | Descent, expansion, oscillation, flow direction |
| **E. Relational** | How do parts relate? | Containment, hierarchy, flow, isolation, bridging |

**If ANY category produces zero properties, the metaphor may be insufficiently rich.**

**Step 4.2 -- Translation Grammar (Property -> CSS):**

| Property | CSS Expression |
|----------|---------------|
| **Heavy** | `border: 3px solid` or `border-left: 4px solid` |
| **Light** | `border-bottom: 1px solid` |
| **Surface** | `background: #FEF9F5` |
| **Middle** | `background: #FFFFFF` or `#FAF5ED` |
| **Deep** | `background: #1A1A1A` + inverted text |
| **Sparse** | `padding: 64px` or `80px` |
| **Medium** | `padding: 24px` or `32px` |
| **Dense** | `padding: 12px` or `16px` |
| **Sequential** | DOM order + flex column |
| **Parallel** | `display: grid; grid-template-columns` |
| **Bounded** | `border: 3px solid` |
| **Accented** | `border-left: 4px solid` |
| **Smooth transition** | `margin: 48px 0; border-top: 1px solid` |
| **Bridge transition** | `margin: 64px 0; background: breathing zone + text` |
| **Breathing transition** | `margin: 80px 0; border-top: 3px solid` |

**The 6 Exhaustive CSS Channels:**
1. Background color (from locked zone palette)
2. Border (3 categories only)
3. Typography (3 fonts, 6 sizes)
4. Spacing (mathematical scale 4-80px)
5. Layout (flexbox, grid, or none)
6. Color accent (primary red + 5 accent colors for callout borders)

**Step 4.2B -- Pacing Prediction Heuristic (R3 IMPROVEMENT):**
1. Section count: 3-6=GOOD, 7-10=RISK, 11+=HIGH RISK
2. Breathing zone model: CHANGING STATE (good) vs EMPTY SPACE (bad)
3. Element uniformity: VARIED (good) vs UNIFORM (bad)
4. Dramatic moment: Place at 60-80% of page height
5. Transition model: Background shifts (good) vs Labeled connectors (bad)

**Step 4.3 -- Coherence Checking (5 rules):**
- **C-1:** Density direction consistent across ALL channels
- **C-2:** Transition strength matches axis distance (Smooth/Bridge/Breathing)
- **C-3:** Typography role matches content authority
- **C-4:** Border category matches containment intent
- **C-5:** Accent color matches semantic role

**Step 4.4 -- Component Inventory (Tier 2 vs Tier 3):**
- Tier 2 (Portability+Isolation+Substitution all YES): Consumed from library
- Tier 3 (removing metaphor context makes it meaningless): Generated fresh

**Step 4.5 -- Adapt-vs-Invent Decision:**
1. Can existing Tier 2 be ADAPTED? -> DO NOT invent
2. Can property be expressed through LAYOUT alone? -> DO NOT invent
3. Is property actually NECESSARY? -> If not, let metaphor be implicit
4. ALL THREE "no" -> invent new Tier 3 component

**Step 4.6 -- Transition Grammar (5x5 matrix):**

| From \ To | Z-Pattern | F-Pattern | Bento | Spiral | Choreography |
|-----------|-----------|-----------|-------|--------|-------------|
| Z-Pattern | Smooth | Smooth | Bridge | Breathing | Bridge |
| F-Pattern | Smooth | Smooth | Bridge | Breathing | Bridge |
| Bento | Bridge | Bridge | Smooth | Breathing | Bridge |
| Spiral | Breathing | Breathing | Breathing | Breathing | Breathing |
| Choreography | Bridge | Bridge | Smooth | Breathing | Smooth |

**Step 4.7 -- Fractal Consistency GATE (MANDATORY):**

| Scale | Pattern Expression Required |
|-------|---------------------------|
| Navigation | How TOC/header reflects pattern |
| Page | How section sequence reflects pattern |
| Section | How components within section reflect pattern |
| Component | How content within component reflects pattern |
| Character | How inline/text-level reflects pattern |

**Tier-calibrated requirements:**
- Floor: EXEMPT
- Middle: 2 scales minimum (Page + Component)
- Ceiling: 4 scales minimum
- Flagship: 5 scales required

---

### Phase 5: Output

**Output A: Thought Process Document** -- showing every step explicitly (10 items)
**Output B: HTML Compositional Layout** -- complete, self-contained HTML file using ONLY KortAI CSS

---

### Phase 5 (Divergence): Divergence Verification

After Phase 4, NOW access case studies:
1. Scan case study index (titles + tension summaries only)
2. Select 2-3 most similar
3. Complete divergence comparison table (5 dimensions)
4. Verdict: DIFFERENT on 3+ = strong divergence, SAME on 3+ = convergence (justification required)
5. Extract novel mechanisms for future library addition

---

## SECTION 2: M1 MODIFICATIONS (Per-Category Minimums)

**ORIGINAL specification:** "Sample 2-4 mechanisms" = single most limiting spec, identified by ALL 11 research agents

**MODIFICATION:** Replace "sample 2-4" with per-category minimums:

| Category | Mechanisms | Minimum |
|----------|-----------|---------|
| **Spatial** | Dense/Sparse, Width Variation, Bento Grid | 1+ |
| **Hierarchy** | Border-Weight, Spacing Compression, Typography Scale | 1+ |
| **Component** | 2-Zone DNA, Confidence Color, Border-Left Signal, Code Block | 1+ |
| **Depth/Emphasis** | Solid Offset, Zone Backgrounds, Drop Cap | 1+ |
| **Structure/Nav** | Scroll Witness, Progressive Disclosure, Dark Header, Footer Mirror, Data Table | 1+ |

**Why this works:** Forces BREADTH (at least one per category) rather than DEPTH (many from one category). Count emerges naturally from breadth.

---

## SECTION 3: C3/C4/C5 ENRICHMENTS

**C3 -- Coherence Check Modification:**
- Add 3-transition minimum (currently no minimum)
- Each page must have at least 3 explicit transitions between sections
- Transitions must be TYPED (SMOOTH/BRIDGE/BREATHING per grammar)

**C4 -- Fractal Gate (Phase 3.5F):**
- Per-category mechanism minimum instead of total count
- Ensures vocabulary breadth across all 5 categories
- Prevents concentration in one category while neglecting others

**C5 -- Tier-Based Pipeline Routing:**
- Floor: Skip entire pipeline, component assembly only
- Middle: Skip Phases 1-3, go directly to pattern selection + Phase 4
- Ceiling: Full pipeline
- Flagship: Full pipeline + multi-pass audit

---

## SECTION 4: PERCEPTUAL AUDITING PROTOCOL (48 QUESTIONS)

### The One Rule
> "React to what you see before you check what you know."

### The Sovereignty Principle
> "Audit the EXECUTION of research-backed decisions, never the decisions themselves."

### Tier 1: The Mandatory Five (Every Audit, Every Mode)

| ID | Question |
|----|----------|
| PA-01 | What's the first thing that bothers you? |
| PA-02 | Is any text uncomfortable to read? Point to the worst spot. |
| PA-03 | Does this feel like one designer made it, or three? |
| PA-04 | Where does your eye go first? Is that where it SHOULD go? |
| PA-05 | Would you put your name on this? What would you fix first? |

### Tier 2: Standard Fifteen

**Readability:** PA-06 (word stacking), PA-07 (paragraph tracking), PA-08 (squinting), PA-29 (header typographic voice collision)

**Spatial Balance:** PA-09 (dead space), PA-10 (squint test balance), PA-11 (margin psychology), PA-30 (desktop utilization), PA-31 (surrounding space quality), PA-32 (visual weight distribution), PA-33 (negative space quality)

**Visual Flow:** PA-12 (section-to-section flow), PA-13 (visual ending), PA-34 (transition quality), PA-35 (scroll momentum), PA-36 (dramatic visual moment)

**Grid/Layout:** PA-14 (column breathing), PA-15 (alignment scatter), PA-37 (element density in containers), PA-38 (internal container hierarchy), PA-39 (header-to-content proportion)

**Consistency:** PA-16 (identical element pairs), PA-17 (visual rhythm), PA-40 (spacing consistency), PA-41 (repetition monotony)

**Color/Emotion:** PA-18 (gray family consistency), PA-19 (visual intruders), PA-20 (personality match)

### Metaphor-Awareness Questions (PA-42 through PA-44)

| ID | Question |
|----|----------|
| PA-42 | Is there any section where you understand WHY it looks this way (metaphor) but it still looks WRONG? |
| PA-43 | Could the same metaphor be communicated with less visual cost? |
| PA-44 | If you removed all labels, could you still sense the metaphor from structure alone? |

### Quality/Excellence

| ID | Question |
|----|----------|
| PA-45 | Is there a single moment you'd show someone as an example of good design? |

### Tier 3: Deep Dive (Standalone Only)

**Responsiveness:** PA-21 (designed for width), PA-22 (user served or punished), PA-23 (200px narrower), PA-46 (responsive reorganization sense), PA-47 (visual novelty decay)

**Cross-Page:** PA-24 (page belongs with siblings), PA-25 (identify design system without header)

**Architectural:** PA-26 (convention causing problems), PA-27 (design from scratch differently)

**Adversarial:** PA-28 (make terrible while passing rules), PA-48 (comparative quality rank)

### 4 Audit Modes

| Mode | Duration | Team | Questions |
|------|----------|------|-----------|
| Embedded | 90 seconds | None | PA-01 to PA-05 |
| Quick | 3 minutes | None | PA-01 to PA-05 at 2 viewports |
| Standard | 30 minutes | 4 agents | PA-01 to PA-45, 2 viewports |
| Standalone | 60 minutes | 7 agents | All 48, 3 viewports |

### Quantitative Guardrails (Hard Floors)

| Metric | Minimum | Optimal | Maximum |
|--------|---------|---------|---------|
| Content container width (1440px) | 640px | 700-960px | 1280px |
| Characters per line | 45 | 60-66 | 80 |
| Body line-height | 1.5 | 1.5-1.6 | 1.8 |
| Label-to-heading gap | 8px | 12-16px | 24px |
| Section vertical spacing | 48px | 60-80px | 160px |
| Horizontal padding desktop | 32px | 40-64px | 80px |
| Compression ratio | 40% | 50-60% | 100% |

### Visual Auditing Protocol

**Cold Look:** CLEAR -> LOOK (5 sec) -> REACT (gut/worst/best/ship) -> LOCK (final)
**Scroll-Through:** Viewport-sized screenshots at 80% scroll steps (NOT fullPage:true)
**Zone Sweep:** 5 passes (Readability, Spatial Balance, Hierarchy+Flow, Consistency, Ship Test)

---

## SECTION 5: TRACK 1 vs TRACK 2 ARCHITECTURE

### Track 1: Assembly (45-90 minutes per page)

```
Phase 1: PAGE ANALYSIS (12 min) -- 5-dimensional classification, Addition Test = YES
Phase 2: PATTERN SELECTION (8 min) -- Deterministic lookup (60%) + judgment (40%)
Phase 3: COMPOSITION DESIGN (18 min) -- R5 combination rules, transition grammar, guardrails
Phase 4: BUILD (28 min) -- Load Tier 1+2 CSS, assemble components
Phase 5: PERCEPTUAL AUDIT (12 min) -- PA-01 through PA-28
Phase 6: DISCOVERY DOCS (7 min) -- Consumption Receipt
```

**Characteristics:**
- 60% deterministic, 40% judgment
- Components CONSUMED from library, not invented
- Soul compliance automatic (tokens bake it in)
- Parallelizable (6 agents simultaneously)

### Track 2: Composition (3-5 hours per page)

```
Phase 1: PAGE ANALYSIS + TENSION PRE-SCREEN (18 min)
Phase 2: PARTIAL PATTERN SELECTION (12 min) -- axis DEFERRED
Phase 3: TENSION-COMPOSITION PIPELINE (150 min) -- THE BOTTLENECK
  Phase 0: Content assessment (5 min)
  Phase 1: Multi-axis questioning (25 min)
  Phase 2: Tension derivation (30 min)
  Phase 3: Metaphor collapse (45 min) -- constrained search + composite scoring
  Phase 4: Compositional layout (35 min) -- guardrails first, then property extraction
  Phase 5: Output (10 min)
Phase 4: BUILD (35 min) -- Tier 1+2 library + Tier 3 fresh
Phase 5: PERCEPTUAL AUDIT (18 min) -- PA-01 through PA-48 including metaphor questions
Phase 6: DISCOVERY DOCS (12 min) -- Enhanced Receipt + Metaphor Record
```

**Characteristics:**
- 20% deterministic, 80% creative
- Components CONSUMED (Tier 2) + INVENTED (Tier 3)
- Soul compliance manual verification required for Tier 3
- NOT parallelizable (max 2-3 concurrent)

### The Addition Test (Track Classification Gate)

> Can you fulfill the reader's need by selecting and placing existing design system components without transforming their meaning?
> YES = Track 1. NO = Track 2.

### Content-to-Track Mapping

| Content Type | Track | Organization | Density | Axis |
|---|---|---|---|---|
| "How do I do X?" (steps) | 1 | Task-Based | ISLANDS + BOOKENDS | Bento Grid |
| "How does X work?" (progressive) | 1 | Narrative | CRESCENDO | F-Pattern |
| "What is X?" (Q&A) | 1 | Conversational | PULSE + TIDAL | Z-Pattern |
| "Should I use X?" (evaluation) | 2 candidate | Confidence-Based | GEOLOGICAL | Spiral |
| "What's available?" (map) | 1-2 | Spatial | WAVE + ISLANDS | Choreography |
| Multiple of above | 2 candidate | Creative | ALL (FRACTAL) | Compound |
| Philosophy + Technique | 2 likely | Conceptual | GEOLOGICAL | Variable |

---

## SECTION 6: CONTENT INGESTION REQUIREMENTS

### Migration vs Ingestion

| Dimension | Migration (Project) | Ingestion (Operation) |
|-----------|--------------------|-----------------------|
| Volume | ~75 pages, known | Unknown, one at a time |
| Oversight | Full team, heavy review | Single agent, spot checks |
| Duration | 80-160+ hours total | 45-90 min (T1) or 3-5 hrs (T2) per page |

### The Pipeline Is Emergent, Not Separate

The pipeline is NOT software to build. It is an agent with the right context:
- Accumulated identity
- Pattern library
- Combination rules
- Audit methodology
- Guardrail specifications

An agent loading these artifacts BECOMES the pipeline.

### What Stays Frozen vs What Grows

**FROZEN:** Token values, soul pieces, pattern definitions, finding IDs, convention spec, anti-pattern registry, transition grammar, accumulated identity v3, Tier 1+2 CSS, guardrails, pipeline phases, builder warnings

**GROWS:** Application notes, documented recipes, Consumption Receipts, MIG-F findings, edge case documentation, classification refinements, compositional strategy library, Metaphor Records

---

## SECTION 7: COMPOSITIONAL STRATEGIES AVAILABLE

### 3-Tier Component Model

| Tier | Type | Lines | Extractability |
|------|------|-------|---------------|
| 1: Atoms | Design tokens | ~80 | 100% |
| 2: Molecules | Styled elements | ~175 | 90%+ |
| 2.5: Patterns | Layout systems | ~145 CSS + 440 guidance | 70% |
| 3: Organisms | Metaphor-driven arrangements | Prose only | 0% as CSS |

### Tier 2 Universal Components (9 types, ~175 lines)

1. **Callout family** (~50 lines): note, tip, gotcha, caution, essence variants. 2-zone (label + body), 4px left border, accent colors
2. **Code block** (~40 lines): Dark bg, mono font, syntax highlighting, 3px structural border
3. **Page header** (~30 lines): Dark bg, 3px red border-bottom, metadata, skip link
4. **Data table** (~20 lines): Grid layout, mono headers, 3px/1px borders
5. **Page footer** (~20 lines): Mirrors header (dark bg, 3px red border-top)
6. **Generic container** (~15 lines): max-width 1100px, centered, responsive padding
7. **Inline code** (~10 lines): Subtle bg, 1px border, mono font
8. **Focus-visible** (~5 lines): 3px solid primary, WCAG compliant
9. **Selection styling** (~5 lines): Primary bg, branded

### CSS Custom Properties Bridge Tiers

```
Tier 3 (pipeline-generated) --> sets custom properties -->
Tier 2 (library, frozen) --> uses tokens -->
Tier 1 (tokens, frozen)
```

Example: `.stratum--compressed .callout { --callout-padding: 16px 24px; }`

---

## SECTION 8: FORMAT ANALYSIS OF MASTER-CD-EXECUTION-PROMPT.md

### Structure (13 Sections, 930 lines)

| Section | Purpose | Lines (~) |
|---------|---------|-----------|
| 0: Preamble | What this is, pipeline position, what changed | 100 |
| 1: Mandatory Reads | 10 Phase-0 files with exact paths, line counts | 60 |
| 2: What CD Inherits | 84 findings, 5 soul pieces, 20 patterns, matrices | 170 |
| 3: What CD Must Produce | 9 documents, finding outputs, artifacts | 30 |
| 4: The 6 Explorations | Per-exploration specs with DD+OD+AD, R-5 tests, challenges | 100 |
| 5: Team Topology | Phases, ~18-22 agents, per-file ownership, mandatory prompt blocks | 60 |
| 6: Binary Rules | 61 total: 10 soul, 7 convention, 13 combination, 7 PA, 17 completeness, 7 provenance | 30 |
| 7: Perceptual Audit Integration | Lock sheet, Cold Look, scroll-through, 28 PA questions | 30 |
| 8: Convention Spec Requirements | Sections 1-16 inherited + 17-20 new, lifecycle | 15 |
| 9: Completeness Gate | Component/Research/Equivalence/Migration/Identity checks | 35 |
| 10: Provenance Requirements | 9 create, 8+ update, finding format, HANDOFF sections | 20 |
| 11: Identity v3 Requirements | Terminal, delta per wave, surprises/questions | 15 |
| 12: Execution Checklist | 138 items across PRE-CD through PHASE 4 | 150 |
| 13: Plan Verification Audit | 224 items for post-plan audit | 200 |

### Key Format Qualities to Match or Exceed

1. **Self-contained:** "A Claude instance reading ONLY this document should be able to..."
2. **Binary rules dominant:** 61 PASS/FAIL rules with zero judgment words
3. **Concrete paths:** Every file reference has exact path from project root
4. **Exhaustive checklists:** 138 execution items + 224 verification items = 362 total
5. **Per-phase structure:** Each phase has its own section with inputs, outputs, team, and gates
6. **Mandatory prompt blocks:** 4 blocks that MUST be in every agent's prompt
7. **Failure conditions explicit:** "FAIL: Any unchecked = NOT complete. 'Ran out of time' NOT valid."
8. **Governing principle stated first:** "Binary rules achieve 100% compliance. Judgment rules achieve ~0%."
9. **Tables for structured data:** Component properties, findings, patterns, matrices
10. **Team topology with per-file ownership:** Each builder owns one file with non-overlapping finding IDs

### FORMAT REQUIREMENTS for Our Execution Prompt

Our Middle-tier execution prompt should:
- Match the ~930-line depth (ours may be shorter since Middle-tier is simpler than CD)
- Match the self-containment principle
- Match the binary rules structure (PASS/FAIL, zero judgment)
- Match the exact-path file references
- Match the exhaustive checklist approach
- Match the per-phase structure with inputs/outputs/gates
- Include mandatory prompt blocks for builder agents
- State governing principle and failure conditions explicitly
- Use tables for all structured data
- Define per-file ownership if multi-agent

---

## SECTION 9: BUILDER WARNINGS (R6 IMPROVEMENT)

### Core Principle: IMPLICIT > EXPLICIT METAPHORS

**Test:** Remove all metaphor-specific labels. Does the layout still communicate the metaphor through structure alone? YES = implicit (good). NO = explicit (needs rework).

### Warning Categories

| Warning | Condition | Mitigation |
|---------|-----------|-----------|
| **W-DEADZONE** | Transition model = empty space | Max breathing zone 48px. Transitions = CHANGING STATE not EMPTY SPACE |
| **W-OVERLABEL** | Expression mode = textual labels | Use STRUCTURAL GRADIENTS, not TEXT LABELS |
| **W-MONOTONY** | Element variety = uniform | Vary sizes by content importance. Break groups of 6+ identical elements |
| **W-RESPONSIVE** | Responsive story = moderate+ risk | Test 768px before done. Specify mitigation strategy |
| **W-STATS** | Metadata strip present | Limit to 3 items at 768px. Never compete with title |
| **W-IMPLICIT** | ALWAYS appended | Reader should FEEL metaphor without READING about it |

### Builder Guardrail Appendix (Concrete Values)

```
CONTAINER PROPORTION:
- Container max-width at 1440px: min 940px, max 1150px
- Horizontal padding: min 32px at any depth level
- Compression ratio: deepest >= 40% of shallowest

TYPOGRAPHIC SPACING:
- Label-to-heading gap: min 16px
- Heading-to-body gap: min 16px
- Body line-height: min 1.5
- Characters per line: 45-80

SECTION SPACING:
- Section breathing zone: min 48px
- Component-to-component: min 24px
- Inter-region spacing: min 64px
```

---

## SECTION 10: CRITICAL PIPELINE PRINCIPLE

### The Tension Protocol Discovery

From the 1,940-line TENSION-PROTOCOL.md, the foundational insight:

> **The question created the composition. The composition created the components. Not the other way around.**

**Causal chain for creative composition:**
```
Question --> Need --> Composition --> Components
```

**Causal chain for mechanical assembly:**
```
Components --> Assembly --> Page
```

The first chain produces pages that are hard to forget. The second produces correct pages.

**Intersection vs Tension:**
- **Intersection** (what was assumed wrong): Reader needs X, system provides X. Use X. Result: mechanical assembly.
- **Tension** (what was discovered): Reader needs X, system provides NOT-X. Gap must be bridged. Result: creative composition.

> **"Don't look for the intersection. Look for the friction."**

**For Middle-tier pages:** This principle still applies but at a lower intensity. Middle-tier does NOT derive metaphors but DOES select density patterns with content-awareness. The question "what density pattern serves THIS content best?" is content-facing, not system-facing.

---

## SECTION 11: COMPLETE ROADMAP POSITION

### Where Middle-tier Fits

```
Phase A: CD ................................ COMPLETE
Phase B: Content Analysis ................. NOT STARTED
Phase C: Component Extraction ............. COMPLETE (42 files, 6-layer ontology)
Phase D: Extraction Validation ............ COMPLETE (CONDITIONAL PASS)
Phase D+: Richness + Rigidity Research .... COMPLETE (tier model)
Phase D++: Skill Enrichment ............... IN PROGRESS
Phase D+++: Middle-tier Experiment ........ PLANNED  <-- WE ARE BUILDING THIS
Phase E: Migration Playbook v2 ............ NOT STARTED
Phase F: Pilot Migration .................. NOT STARTED
Phase G: Playbook Refinement .............. NOT STARTED
=== FREEZE LINE ===
Phase H: Track 1 Migration ................ NOT STARTED
Phase I: Track 2 Migration ................ NOT STARTED
```

### The Middle-Tier Experiment Purpose

This is THE most important untested hypothesis:
- Can pattern-based deployment (8-10 mechanisms, no metaphor) reach the engagement threshold?
- Does individual mechanism selection across all 5 categories produce sufficient richness?
- The tier model was validated through research but UNTESTED in practice

### 4 Combination Rules (from R5)

| Rule | Name | Principle |
|------|------|-----------|
| 1 | Velocity Sequencing | Never stack same-velocity components |
| 2 | Temperature Flow | Gradual flow only. NEVER Warm->Cold directly |
| 3 | Weight Balance | For every heavy, include 1-2 light before next heavy |
| 4 | Semantic Proximity | Tight 8-16px, Moderate 24-32px, Loose 48-64px, Recovery 64-80px |

### Component Properties Table

| Component | Velocity | Temperature | Weight |
|-----------|----------|-------------|--------|
| Code Snippet | SLOW | Neutral | Heavy |
| Info Callout | FAST | Neutral | Light |
| Tip Callout | FAST | Warm | Light |
| Gotcha Callout | FAST | Cold | Medium |
| Essence Callout | SLOW | Warm | Medium |
| File Tree | MEDIUM | Neutral | Heavy |
| Decision Matrix | MEDIUM | Neutral | Heavy |
| Task Component | FAST | Utilitarian | Medium |
| Reasoning | SLOW | Deliberate | Heavy |

---

*End of pipeline extraction. This document covers the complete 6-phase tension-composition pipeline with every step, M1 modifications, C3/C4/C5 enrichments, the full 48-question PA audit protocol, Track 1 vs Track 2 architecture, content ingestion model, compositional strategies, format analysis of the CD execution prompt, builder warnings, and the critical Tension Protocol principle.*
