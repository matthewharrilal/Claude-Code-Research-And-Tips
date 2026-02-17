# TC DEEP INVOCATION — Maximum Tension-Composition Skill Language

> Task #20 deliverable. Every technique from the 1,932-line TC skill mapped to exact invocation text for the enriched master execution prompt.

---

## 1. TC SKILL PHASE MAP — Every Phase with Invocation Text

### Phase 0: Content Assessment (Lines 40-167)

**Purpose:** Classify content type, scope, sections, tier, and enforce library prohibition before any creative work begins.

**Which agent invokes:** Content Architect (Opus) — must complete Phase 0 BEFORE any other agent begins work.

**Sub-steps:**
- 0A: Content Type Classification (prose-dominant / mixed / visual-dominant / self-referential)
- 0B: Scope Assessment (MICRO / SHORT / STANDARD / LONG / MASSIVE)
- 0C: Section Identification (NARRATIVE / REFERENCE / CODE / DATA / MIXED per section)
- 0D: Tier Classification (Floor / Middle / Ceiling / Flagship) with pipeline routing
- 0D-CEILING: Context box for ceiling-tier routing
- 0E: Library Access Prohibition (CRITICAL — no library access during Phases 0-3)

**Exact invocation text for Content Architect:**

```
PHASE 0 — CONTENT ASSESSMENT (Content Architect, MANDATORY first step)

Classify this content before any agent begins creative work:

0A. Content Type: prose-dominant (<30% code/tables) | mixed (30-60%) | visual-dominant (>60%) | self-referential (content IS the design system)
    - Self-referential = ABORT pipeline. Apply defaults directly.
    - Visual-dominant = PRESENTATION-INTRINSIC. Skip metaphor for visual portions.

0B. Scope: MICRO (<100 words, skip pipeline) | SHORT (100-500, reduced) | STANDARD (500-3000, full) | LONG (3000-10000, segment first) | MASSIVE (10000+, per-page)

0C. Sections: For STANDARD+, identify each section as NARRATIVE / REFERENCE / CODE / DATA / MIXED. Flag incompatible structural needs.

0D. Tier: Apply the Addition Test — "Can you fulfill reader needs by selecting and placing existing components WITHOUT transforming their meaning?"
    - YES = Floor or Middle (assembly/individual deployment)
    - NO = Ceiling or Flagship (metaphor-driven combination/composition)

    For FLAGSHIP: Full pipeline + multi-pass audit. Phases 1-7.
    For CEILING: Full pipeline. Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+). 2+ reinforcing pairs. 4-scale fractal. 940-960px container NON-NEGOTIABLE.
    For MIDDLE: Skip Phases 1-3. Select DENSITY PATTERN (CRESCENDO / F-PATTERN / BENTO / PULSE). Deploy 8-10 mechanisms individually.
    For FLOOR: Skip Phases 1-5. Track 1 component assembly.

0E. Library Prohibition: You MUST NOT read case-studies, library, or prior explorations during Phases 0-3. Library patterns are VALIDATION tools, not GENERATION tools. Violation invalidates derivation.

WRITE Phase 0 output to shared coordination file before proceeding.
```

---

### Phase 1: Multi-Axis Questioning (Lines 192-276)

**Purpose:** Read content deeply; ask questions across multiple axes to derive what the reader NEEDS.

**Which agent invokes:** Metaphor Agent (Opus) — the creative lead.

**Sub-components:**
- Core Four Axes (ALWAYS run): FEEL, UNDERSTAND, DO, BECOME
- Extended Five (ALWAYS consider, mark LOW YIELD if appropriate): NAVIGATE, TRUST, EVALUATE, ORIENT, RECONCILE
- Structural Trigger Axes (deploy 0-5 conditionally): COMPARE, IDENTIFY, DISCOVER, SEE, REMEMBER
- Axis Interaction Effects: compound pairs that create richer tension
- Opposition Predicts Richness principle

**Exact invocation text for Metaphor Agent:**

```
PHASE 1 — MULTI-AXIS QUESTIONING (Metaphor Agent)

You are CONSTRUCTING a composition, not DISCOVERING one. Your lens shapes what you see.

Read the content deeply. For THIS content, ask questions across these axes:

CORE FOUR (always run, all four):
- FEEL: "What does the reader need to FEEL while navigating this content?" → emotional/sensory needs
- UNDERSTAND: "What does the reader need to UNDERSTAND about the relationships?" → cognitive/structural needs
- DO: "What does the reader need to DO with this content after reading?" → action/decision needs
- BECOME: "What does the reader need to BECOME after absorbing this?" → transformation needs

EXTENDED FIVE (always ask, mark LOW YIELD when unproductive):
- NAVIGATE: "How does the reader need to move THROUGH this content?"
- TRUST: "What does the reader need to believe about this content's AUTHORITY?"
- EVALUATE: "What does the reader need to JUDGE about quality, validity, or fit?"
- ORIENT: "What does the reader need to know about WHERE THIS FITS before engaging?"
- RECONCILE: "What does the reader need to RECONCILE between this and what they already believe?"

STRUCTURAL TRIGGERS (deploy only when content signals relevance):
- COMPARE: 2+ alternatives, A-vs-B → side-by-side, parallel columns
- IDENTIFY: personas, reader-as-protagonist → voice selection, perspective anchoring
- DISCOVER: aha-moments, progressive revelation → delayed payoff, collapsible reveals
- SEE: system architectures, spatial relationships → diagrams, visual metaphors
- REMEMBER: reference patterns, checklists → summary anchors, mnemonic structures

OPPOSITION PREDICTS RICHNESS: Axes whose demands OPPOSE the system produce the richest tension.
- RICHEST: RECONCILE (challenge vs assert), NAVIGATE (choice vs hierarchy), EVALUATE (equanimity vs opinion), DISCOVER (withholding vs directness), FEEL (warmth vs edges)
- COSMETIC: TRUST (both want authority), DO (both want action), ORIENT (both want positioning)
- Do NOT build primary tension from aligned axes.

AXIS PAIRS that compound into richer tension:
- RECONCILE + IDENTIFY = double transformation
- NAVIGATE + COMPARE = maximum structural complexity
- DISCOVER + UNDERSTAND = oppositional structural demands
- FEEL + EVALUATE = emotional engagement vs critical distance

OUTPUT: Table per axis with Needs, Structural Properties, Richness (HIGH/MEDIUM/LOW). 4-14 entries.
```

---

### Phase 2: Tension Derivation (Lines 278-464)

**Purpose:** Each axis's needs (Side A) creates tension against design system constraints (Side B). Identify GENUINE tensions.

**Which agent invokes:** Metaphor Agent (Opus) — continues from Phase 1.

**Sub-components:**
- Side A: Reader Needs (from Phase 1)
- Side B: KortAI Design System Constraints (locked personality profile, geometry, palette, typography, borders, spacing)
- Addition Test (genuine vs cosmetic)
- Three Formal Criteria for Genuine Tension
- Three Criteria for Cosmetic Tension
- Tension Spectrum
- Richness Formula (Opposition x Overlap x Width — MULTIPLICATIVE)
- Richness Formula Cap (R5 improvement — richness selects tensions, NOT metaphors)
- Tension Landscape quick reference
- Tension Validity Check
- Tension Threshold Gate (exit ramp)

**Exact invocation text for Metaphor Agent:**

```
PHASE 2 — TENSION DERIVATION (Metaphor Agent)

For EACH high-yield axis from Phase 1:

1. List Side A demands (what the content wants — emotional/structural)
2. List Side B constraints (what the system gives — KortAI personality: 75% austere, 95% angular, 85% serious, 100% geometric, 70% sparse, 80% rigid, 80% formal, 90% restrained)
3. Identify GENUINE opposition — where Side A wants something Side B resists
4. Apply the ADDITION TEST: "Can you fulfill the need by selecting existing components WITHOUT transforming meaning?"
   - YES = COSMETIC (no tension, assembly sufficient)
   - NO = GENUINE (tension exists, metaphor required)
5. Apply the BECAUSE TEST: "The reader needs X BECAUSE [specific content property]."
   - If you cannot complete with a specific content property, the need is MANUFACTURED.

GENUINE TENSION requires ALL THREE:
  (a) Semantic opposition (emotional meaning level, not implementation)
  (b) Vocabulary gap (no direct tool for the need)
  (c) Structural overlap despite emotional opposition (makes bridge POSSIBLE)

RICHNESS FORMULA: Opposition Depth (1-3) x Structural Overlap (1-3) x Metaphor Space Width (1-3)
  - MULTIPLICATIVE: zero in any dimension = zero richness
  - Use to SELECT tensions (Phase 2) — do NOT use to select metaphors (Phase 3)
  - Richness cap: high richness does NOT predict high quality. Perceptual risk gates override richness.

TENSION THRESHOLD GATE:
  - 0 genuine tensions → zero-tension path, skip Phases 3-4, apply defaults
  - All cosmetic → cosmetic path, skip Phase 3, direct component mapping
  - 1+ genuine → proceed to Phase 3

OUTPUT: Tension table with Side A, Side B, opposition type, Addition Test result, BECAUSE test, richness score.
```

---

### Phase 3: Metaphor Collapse (Lines 467-797)

**Purpose:** Find a real-world domain where the shared structural properties between reader needs and system constraints exist naturally. This is THE creative step.

**Which agent invokes:** Metaphor Agent (Opus) — the irreducible creative moment.

**Sub-components:**
- 3.1: Extract structural properties from Side A (transform emotional needs into geometric/topological abstractions)
- 3.2: Extract structural properties from Side B (transform design constraints into geometric/perceptual abstractions)
- 3.3: Find structural overlap (40-70% = ideal zone)
- 3.4: Generate search query ("What real-world domain naturally exhibits [OVERLAP] while being [SIDE B GAP] yet conveying [SIDE A GAP]?")
- Three search heuristics: constraint scan, content resonance, emotional valence
- Domain Search Menu (10 categories for angular/flat/sharp systems)
- Responsive Degradation Check
- Incompatible metaphor families (organic, liquid, atmospheric, textile, musical)
- 3.5: Test candidates — Composite Scoring (A: Tension Resolution, B: Structural Isomorphism Count, C: Content Resonance split into Nominal + Structural, D: Mechanism Feasibility, E: Perceptual Risk Assessment, F: Perceptual Cost Assessment)
- 3.5G: 6-Criterion Metaphor Quality Rubric (18 points, threshold >= 12/18, Interpretive Distance MUST >= 2)
- 6 Binary Rejection Checks (any YES = immediate rejection)
- 3.6: Select metaphor with documentation
- Failure modes (monopoly, inflation, forcing, redundancy, decay)
- Cultural consideration

**Exact invocation text for Metaphor Agent:**

```
PHASE 3 — METAPHOR COLLAPSE (Metaphor Agent, THE creative moment)

The metaphor is the BRIDGE. The tension is emotional; the bridge is structural.

3.1. Extract structural properties from reader needs. Transform emotional needs into geometric abstractions:
     warmth → containment with visible boundaries
     graduated trust → ordering with rank
     safety → bounded zones
     progress → traversal through stages

3.2. Extract structural properties from system constraints. Transform design constraints into geometric abstractions:
     border-radius: 0 → ANGULARITY
     box-shadow: none → FLATNESS
     border categories → DISCRETE WEIGHT
     spacing scale → PRECISE INTERVALS
     limited palette → NARROW TEMPERATURE RANGE

3.3. Find structural overlap between Side A and Side B lists.
     Overlap 40-70% = IDEAL ZONE for metaphor search.
     >80% = low tension (consider assembly). <30% = extreme (expect unconventional resolution).

3.4. Generate constrained search query:
     "What real-world domain naturally exhibits [OVERLAP PROPERTIES] while being [SIDE B GAP PROPERTIES] yet conveying [SIDE A GAP PROPERTIES]?"

THREE SEARCH HEURISTICS:
  (a) Constraint scan: Start with HARDEST constraint (ANGULARITY eliminates organic, liquid, atmospheric, textile, botanical)
  (b) Content resonance: What is the content LITERALLY about? Content often contains the metaphor's seed.
  (c) Emotional valence: Side A's emotion eliminates wrong-valence domains.

DOMAIN SEARCH MENU (scan all 10): Geological/Sedimentary, Architectural/Structural, Typographic/Editorial, Cartographic/Territorial, Industrial/Mechanical, Scientific/Laboratory, Legal/Contractual, Archival/Catalogic, Military/Strategic, Astronomical/Surveying.

INCOMPATIBLE FAMILIES (ban): Organic/Biological, Liquid/Fluid, Atmospheric/Weather, Textile/Fabric, Musical (curves violate angular).

3.5. COMPOSITE SCORING for each candidate:
  A. Tension Resolution: test against EVERY Phase 2 tension (YES=1 / PARTIAL=0.5 / NO=0)
  B. Structural Isomorphism Count: independent property mappings (6+ = isomorphic, 4-5 = strong, 2-3 = thin, 0-1 = REJECT)
  C. Content Resonance — TWO dimensions:
     C1. Nominal (vocabulary overlap): HIGH/MEDIUM/LOW
     C2. Structural (internal structure mirrors content): HIGH/MEDIUM/LOW — weight 2x higher than C1
  D. Mechanism Feasibility: every property expressible via 6 legal CSS channels? If any requires soul violation = FAIL
  E. Perceptual Risk Assessment (4 questions, score 0-4):
     - Transition model: changing state (LOW) vs empty space (HIGH)?
     - Expression mode: structural gradients (LOW) vs textual labels (HIGH)?
     - Element variety: varied sizes (LOW) vs uniform grids (HIGH)?
     - Responsive story: natural degradation (LOW) vs forced (HIGH)?
     Score 0-1 = LOW RISK, 1.5-2 = MODERATE, 2.5-3 = HIGH, 3.5-4 = EXTREME (consider rejection)
  F. Perceptual Cost Assessment (5 questions, +1 per YES):
     - Compression below floors? Container below 940px? Uniform grids 4+? Transitions as empty space? Labels over structure?

3.5G. METAPHOR QUALITY RUBRIC (MANDATORY for Ceiling+, 18 points, threshold >= 12):
  1. Interpretive Distance (0-3): MUST score >= 2 regardless of total. Zero-distance = label, not bridge.
  2. Content-Shape Fit (0-3)
  3. Structural Survival (0-3): Remove all labels — does metaphor survive in visual structure alone?
  4. Perceptual Risk (0-3)
  5. Mechanism Diversity (0-3): how many of 6 CSS channels?
  6. Restraint Compatibility (0-3): mechanisms per viewport (2-3 = natural = 3 points)

6 BINARY REJECTION CHECKS (any YES = REJECT immediately, before scoring):
  R1. Uses content's own domain vocabulary? (zero interpretive distance)
  R2. Requires visible text labels to communicate? (announced, not structural)
  R3. Physical shape forces container below 940px? (#1 Phase D failure)
  R4. ALL transitions conceptualized as empty space? (dead zone epidemic)
  R5. Produces 6+ identical repeated elements? (grid monotony)
  R6. Requires soul violations to express? (soul is non-negotiable)

COMPOSITE VERDICT: PROCEED (Resolution >= N-1, Isomorphism >= 4, Structural Resonance >= MEDIUM, Feasibility 100%, Risk <= 2) | CONSIDER | REJECT

CRITICAL: Pipeline predicts RICHNESS, not QUALITY. Never skip perceptual gates because richness looks good.

3.6. SELECT winner. Document: why it won, what it DOESN'T resolve (honest gaps), full isomorphism table.
```

---

### Phase 3.5: Metaphor Commitment — LOCK-IN GATE (Lines 799-862)

**Purpose:** Commit to metaphor IN WRITING before library access. Prevent pattern-matching.

**Which agent invokes:** Metaphor Agent (Opus) — commitment before proceeding.

**Exact invocation text:**

```
PHASE 3.5 — METAPHOR COMMITMENT (LOCK-IN GATE)

BEFORE Phase 4, complete this gate:

3.5A. STATE your committed metaphor: ________________
      Write it down. This is LOCKED IN. You DO NOT change it after consulting the library.

3.5B. DOCUMENT why: How does it resolve the tension? Why this vs alternatives?

3.5C. VERIFY commitment:
  1. Did I derive this independently? (If NO → RESTART Phase 1)
  2. Can I justify without referencing library examples? (If NO → regenerate with explicit ban)
  3. Does this appear in case-studies/_INDEX.md titles? (If YES → divergence justification 3.5D)

3.5D. DIVERGENCE JUSTIFICATION (if convergence detected):
  - Completed Phases 1-2 WITHOUT library? YES/NO
  - Content analysis independently led here? YES/NO
  - Can trace derivation path? YES/NO
  - Content tension identical to case study's? YES/NO
  - Different structural isomorphisms? YES/NO
  All must favor independent convergence. Failure = regenerate with ban.

LOCKED IN. Proceed to Phase 4.
```

---

### Phase 4: Compositional Layout Generation (Lines 866-1620)

**Purpose:** Translate metaphor into concrete CSS/HTML mechanisms using the design system's vocabulary.

**Which agent invokes:** Primary: Mechanism Builder (Sonnet) and Metaphor Builder (Opus). Planner (Opus) coordinates.

**Sub-components:**
- 4.0: Perceptual Guardrails (non-negotiable minimums — container, CPL, spacing, compression, headings)
- 4.0 Container Width Guardrails (940-960px NON-NEGOTIABLE, #1 Phase D failure)
- 4.0 Heading Spacing Enforcement (space-above/space-below >= 1.5)
- Step 4.0 Mechanism Library Access (NOW permitted — 18 mechanisms, per-category deployment)
- 4.1: Extract Metaphor Physical Properties (5-category taxonomy: Spatial, Temporal, Material, Behavioral, Relational)
- 4.2: Translation Grammar (lookup table for weight, depth, density, flow, containment, transition, hierarchy, combined patterns)
- 4.2 The 6 Exhaustive CSS Channels
- 4.2B: Pacing Prediction Heuristic (section count, breathing model, element uniformity, dramatic moment, transition model)
- 4.2C: Rhythm Variation Requirement (3+ different transition types — SMOOTH/BRIDGE/BREATHING)
- 4.3: Coherence Checking (5 rules: density direction, transition strength, typography role, border category, accent color)
- 4.4: Component Inventory (Tier 2 extractable vs Tier 3 compositional)
- 4.5: Adapt-vs-Invent Decision
- 4.6: Transition Grammar (axis-to-axis lookup table)
- 4.7: Fractal Consistency GATE (Middle: 2 scales, Ceiling: 4, Flagship: 5)
- 4.7B: Landmark Completeness GATE (header + main + footer, Middle+ ALL required)
- 4.8: Section-Aware Composition
- 4.9: Tokenization Self-Check (>= 80% var() usage)

**Exact invocation text for Builder agents (split into 3 blocks):**

```
PHASE 4 — COMPOSITIONAL LAYOUT (Builder agents)

=== 4.0: PERCEPTUAL GUARDRAILS (NON-NEGOTIABLE) ===

Container: 940-960px at 1440px viewport. NEVER below 940px. No metaphor overrides this.
  - Express narrowing through INTERNAL padding, not external width reduction.
  - Example: .container { max-width: 960px; padding: 0 120px; } = narrow effect at legal width.

CPL: 45-80 characters per line. Formula: CPL = content-width / font-size / 0.6
  - Verify BEFORE writing final HTML.

Heading spacing: space-above / space-below >= 1.5 for EVERY h2, h3, h4.
  - Check COMPUTED styles (margin collapse may create different effective spacing).

Content-to-viewport: >= 65% (940px at 1440px). <= 80% (1150px).
Compression ratio: deepest padding >= 40% of shallowest (topsoil 80px → bedrock min 32px).
Section breathing zones: min 48px between major sections.
Body line-height: min 1.5 (WCAG 2.1 floor).

Priority when metaphor conflicts: (1) readability floors NEVER → (2) breathing zones NEVER → (3) content width NEVER → (4) metaphor fidelity ADJUST → (5) aesthetic LAST.

=== 4.0: MECHANISM CATALOG ACCESS (NOW PERMITTED) ===

Read the FULL mechanism catalog (18 mechanisms, all lines). DO NOT sample randomly.
Extract TECHNIQUE, not implementation. Adapt to YOUR metaphor context.

Per-category deployment (MANDATORY for Middle+):
  Spatial (1+): #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid
  Hierarchy (1+): #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale
  Component (1+): #2 2-Zone DNA, #9 Confidence Color, #10 Border-Left Signal, #17 Code Block
  Depth/Emphasis (1+): #3 Solid Offset, #7 Zone Backgrounds, #16 Drop Cap
  Structure/Nav (1+): #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table

For EACH deployed mechanism: one sentence WHY it serves THIS content at THIS location.
For AT LEAST 3 rejected mechanisms: one sentence WHY they don't fit.

Natural landing zones: Floor ~5, Middle 8-12, Ceiling 12-15, Flagship 16-18.
These are BYPRODUCTS of breadth, not targets.

=== 4.1-4.2: PROPERTY EXTRACTION + TRANSLATION ===

Extract metaphor properties across ALL FIVE categories:
  A. Spatial: physical arrangement (layers, columns, hub-spoke, nesting, adjacency)
  B. Temporal: sequence, rhythm, progression, oscillation, climax
  C. Material: density, weight, transparency, texture
  D. Behavioral: descent, expansion, oscillation, flow direction
  E. Relational: containment, hierarchy, flow, isolation, bridging

If ANY category produces zero properties, the metaphor may be insufficiently rich.

Translate via 6 EXHAUSTIVE CSS channels (ONLY these):
  1. Background color (zone palette)
  2. Border (3 categories: 3-4px structural, 1px separator, 1px micro — NEVER 2px)
  3. Typography (3 fonts, 6 sizes)
  4. Spacing (mathematical scale 4-80px)
  5. Layout (flexbox, grid, or none)
  6. Color accent (primary red for structural, 5 accent colors for callout borders ONLY)

=== 4.2B-C: PACING + RHYTHM ===

Pacing prediction (assess before generating HTML):
  - Section count: 3-6 GOOD, 7-10 RISK, 11+ HIGH RISK
  - Breathing model: CHANGING STATE (good) vs EMPTY SPACE (bad — max 48px gaps)
  - Element uniformity: VARIED (good) vs UNIFORM (needs deliberate variation)
  - Dramatic moment: place at 60-80% page height
  - Transition model: background shifts/density changes (good) vs labeled connectors (bad)

Rhythm variation (BINARY RULE): Deploy AT LEAST 3 different transition types:
  - SMOOTH (48px + 1px border): same-axis continuation
  - BRIDGE (64px + breathing zone + text): cross-axis shift
  - BREATHING (80px + 3px border): major axis shift
  If count < 3 unique types, you have NOT met the minimum.

=== 4.3: COHERENCE CHECKING (5 rules) ===

C-1: Density direction consistent across ALL channels (if descent = denser: backgrounds darken, borders thicken, typography compresses, spacing decreases, layout tightens)
C-2: Transition strength matches axis distance (same-axis = SMOOTH, adjacent = BRIDGE, distant = BREATHING)
C-3: Typography role matches content authority (display serif = highest, body sans = standard, mono = precision)
C-4: Border category matches containment intent (3-4px structural, 1px separator, NEVER 2px)
C-5: Accent color matches semantic role (red = structural emphasis, blue = info, green = tips, coral = gotchas, amber = caution, purple = essence)

=== 4.7: FRACTAL CONSISTENCY GATE (MANDATORY) ===

Same design pattern at multiple scales (MANDATORY deliverable — scale coverage table):
  Middle: 2 scales (Page + Component)
  Ceiling: 4 scales (Navigation + Page + Section + Component)
  Flagship: 5 scales (all + Character)

Pattern must be STRUCTURAL (density/hierarchy), not decorative (color theme).
Same direction at every scale. CSS evidence for each.

=== 4.7B: LANDMARK COMPLETENESS GATE (MANDATORY) ===

Middle+: Header + Main Content + Footer ALL required.
  - Footer MUST mirror header OR provide equivalent visual weight.
  - Footer MUST NOT be empty.
  - Page without footer = "just stops" = WOULD-NOT-SHIP.

Verify: <header>, <main> with N <section> children, <footer>.

=== 4.9: TOKENIZATION SELF-CHECK ===

Token compliance target: >= 80%
Formula: var() count / (var() count + raw hex/px values) >= 0.80
Read tokens.css FIRST. For every color, spacing, typography value: use token if one exists.
```

---

### Phase 5: Divergence Verification + Output (Lines 1624-1778)

**Purpose:** Verify metaphor novelty against library. Generate two outputs: thought process + HTML layout.

**Which agent invokes:** Content Architect (Opus) for divergence check. Builder agents for output.

**Exact invocation text:**

```
PHASE 5 — DIVERGENCE VERIFICATION + OUTPUT

=== DIVERGENCE (NOW access case studies) ===

5.1. Scan case-studies/_INDEX.md (titles + tension summaries only).
5.2. Read 2-3 MOST SIMILAR case studies. Compare on 5 dimensions:
     Metaphor domain | Structural isomorphisms | Section architecture | Vocabulary | Mechanisms used
5.3. Verdict: DIFFERENT on 3+ dimensions = STRONG DIVERGENCE (proceed).
     SAME/SIMILAR on 3+ = CONVERGENCE DETECTED (justify in 5.4).
5.4. Convergence justification: independent derivation, independent content analysis, traceable path, identical tension, different isomorphisms. ALL must pass.
5.5. Extract novel mechanisms discovered (not in library).

=== OUTPUT ===

Output A (Thought Process): All steps documented — assessment, axes, tensions, candidates, scores, winner, translation, coherence, fractal, landmarks.
Output B (HTML Layout): Complete self-contained HTML with inline <style>. Uses ONLY KortAI CSS. Passes Soul Test (5 questions). Contains actual content.
```

---

## 2. AXIS INVOCATION TABLE

| Axis | Category | Question Prompt | What It Produces | When Richest | When Low Yield | Invocation Priority |
|------|----------|----------------|-----------------|-------------|---------------|-------------------|
| **FEEL** | Core (always) | "What does the reader need to FEEL while navigating this content?" | Emotional/sensory needs: warmth, safety, tension, curiosity, momentum | Narrative, emotional, onboarding, first-contact | Technical reference, data sheets | ALWAYS RUN |
| **UNDERSTAND** | Core (always) | "What does the reader need to UNDERSTAND about the relationships?" | Cognitive/structural needs: causality, hierarchy, comparison, progression | Technical docs, architectures, system descriptions | Simple lists, single-concept | ALWAYS RUN |
| **DO** | Core (always) | "What does the reader need to DO with this content after reading?" | Action/decision needs: choose, evaluate, implement, prioritize | Tutorials, guides, decision frameworks | Philosophical, narrative | ALWAYS RUN |
| **BECOME** | Core (always) | "What does the reader need to BECOME after absorbing this?" | Transformation needs: practitioner, evaluator, designer, critic | Learning paths, philosophy, methodology | Reference material, changelogs | ALWAYS RUN |
| **NAVIGATE** | Extended (always ask) | "How does the reader need to move THROUGH this content?" | Movement topology: linear, branching, hub-spoke, nonlinear | Long-form, multi-section, non-linear reference | Short, single-concept, linear | ALWAYS ASK (mark LOW YIELD if empty) |
| **TRUST** | Extended (always ask) | "What does the reader need to believe about this content's AUTHORITY?" | Authority calibration: confidence, evidence quality, source credibility | Extraordinary claims, unfamiliar sources, behavior-change | Purely factual, internal team docs | ALWAYS ASK |
| **EVALUATE** | Extended (always ask) | "What does the reader need to JUDGE about quality, validity, or fit?" | Judgment needs: comparison, quality assessment, suitability | Competing approaches, varying confidence, "which should I choose" | Single-path tutorials, factual reference | ALWAYS ASK |
| **ORIENT** | Extended (always ask) | "What does the reader need to know about WHERE THIS FITS before engaging?" | Positioning: prerequisites, context, series placement | Series content, prerequisite-dependent, entry-point-sensitive | Standalone, self-contained | ALWAYS ASK |
| **RECONCILE** | Extended (always ask) | "What does the reader need to RECONCILE between this and what they already believe?" | Belief revision: paradigm shifts, myth-busting, counterintuitive | Paradigm-shifting, contradicts common practice | Confirming existing knowledge, introductory | ALWAYS ASK — RICHEST axis against KortAI |
| **COMPARE** | Trigger (conditional) | Deploy when 2+ alternatives, trade-offs, A-vs-B decisions | Side-by-side layout, comparison tables, parallel columns | Multiple options content | Single-option content | ONLY when content has alternatives |
| **IDENTIFY** | Trigger (conditional) | Deploy when personas, case studies, reader-as-protagonist | Voice selection, example mirroring, perspective anchoring | Case studies, narrative voices | Abstract, impersonal content | ONLY when personas present |
| **DISCOVER** | Trigger (conditional) | Deploy when aha-moments, progressive revelation, investigation | Delayed payoff, collapsible reveals, question-before-answer | Mystery structure, surprising findings | Flat informational content | ONLY when revelation potential |
| **SEE** | Trigger (conditional) | Deploy when system architectures, spatial relationships, data shapes | Diagrams, spatial layout, visual metaphors | System descriptions, data with shape | Text-only content | ONLY when visual relationships |
| **REMEMBER** | Trigger (conditional) | Deploy when reference patterns, checklists, content to internalize | Summary anchors, mnemonic structures, visual chunking | Reference material, checklists | One-time-read content | ONLY when retention matters |

**Axis interaction pairs that compound into richer tension (invoke when BOTH are HIGH yield):**
- RECONCILE + IDENTIFY → double transformation (change belief AND identity)
- NAVIGATE + COMPARE → maximum structural complexity (move freely AND hold parallel)
- DISCOVER + UNDERSTAND → oppositional structural demands (withhold vs reveal)
- FEEL + EVALUATE → emotional engagement vs critical distance

---

## 3. TECHNIQUE CATALOG — Every Technique with Layer + Invocation Text

### 3A. Core Pipeline Techniques

| # | Technique | Description | Prompt Layer | Exact Invocation Text |
|---|-----------|-------------|-------------|----------------------|
| T1 | Content Type Classification | Routes content to correct pipeline path based on prose/code/visual ratio | Execution Spec (Phase 0) | "Classify content: prose-dominant (<30% code) = STANDARD. Mixed (30-60%) = HYBRID. Visual-dominant (>60%) = PRESENTATION-INTRINSIC. Self-referential = ABORT." |
| T2 | Scope Assessment | Word-count-based pipeline routing | Execution Spec (Phase 0) | "Assess scope: MICRO (<100w, skip pipeline) / SHORT (100-500w, reduced) / STANDARD (500-3000w, full) / LONG (3000-10000w, segment) / MASSIVE (10000+, per-page)." |
| T3 | Section Identification | Classifies each content section for treatment routing | Execution Spec (Phase 0) | "Identify each section: NARRATIVE (full metaphor treatment) / REFERENCE (standard components) / CODE (preserve, style only) / DATA (standard table/list) / MIXED." |
| T4 | Tier Classification | Routes to Floor/Middle/Ceiling/Flagship based on Addition Test | Execution Spec (Phase 0) | "Apply Addition Test: Can you fulfill reader needs with existing components WITHOUT transforming meaning? YES = assembly tier. NO = metaphor tier." |
| T5 | Library Prohibition | Prevents pattern-matching by blocking library access in creative phases | Execution Spec (Phase 0) | "MUST NOT read case-studies, library, or prior explorations during Phases 0-3. Violation invalidates the entire derivation." |
| T6 | Multi-Axis Questioning | Core creative technique for deriving reader needs | Conviction (creative process) | "For THIS content, ask questions across 4 core + 5 extended + 0-5 trigger axes. Opposition predicts richness — axes that OPPOSE the system produce richest tension." |
| T7 | Addition Test | Binary diagnostic for genuine vs cosmetic tension | Execution Spec (Phase 2) | "Can you fulfill the need by selecting existing components WITHOUT transforming meaning? YES = cosmetic. NO = genuine." |
| T8 | BECAUSE Test | Validates tension is content-driven, not manufactured | Execution Spec (Phase 2) | "'The reader needs X BECAUSE [specific content property].' Cannot complete = manufactured need. Do NOT proceed." |
| T9 | Richness Formula | Multiplicative scoring: Opposition x Overlap x Width | Execution Spec (Phase 2) | "Score each tension: Opposition Depth (1-3) x Structural Overlap (1-3) x Metaphor Space Width (1-3). Multiplicative: zero in any = zero. Use for tension selection, NOT metaphor selection." |
| T10 | Structural Property Extraction | Transform emotions into geometric abstractions | Conviction (creative bridge) | "Transform emotional needs into geometric/topological abstractions. Warmth is NOT structural. Containment with visible boundaries IS." |
| T11 | Constrained Search Query | The irreducible creative step | Conviction (creative core) | "'What real-world domain naturally exhibits [OVERLAP] while being [SIDE B GAP] yet conveying [SIDE A GAP]?' This query IS the creative step." |
| T12 | Three Search Heuristics | Constraint scan, content resonance, emotional valence | Conviction (creative guide) | "Filter candidates: (a) hardest constraint first (angularity eliminates organic/liquid/atmospheric), (b) what is content LITERALLY about? (c) Side A emotion eliminates wrong-valence domains." |
| T13 | Domain Search Menu | 10-category menu for angular/flat/sharp systems | Reference Library | "Scan all 10 compatible domain categories: Geological, Architectural, Typographic, Cartographic, Industrial, Scientific, Legal, Archival, Military, Astronomical." |
| T14 | Incompatible Families Ban | Explicit exclusion of soul-violating metaphor domains | Execution Spec (Phase 3) | "BAN: Organic/Biological, Liquid/Fluid, Atmospheric/Weather, Textile/Fabric, Musical. All require curves/softness that violate angular/flat constraints." |
| T15 | Composite Scoring (6-dimension) | Full metaphor evaluation: Resolution + Isomorphism + Resonance + Feasibility + Risk + Cost | Execution Spec (Phase 3) | "Score each candidate on: (A) Tension Resolution, (B) Structural Isomorphism (6+ = proceed), (C) Content Resonance split nominal/structural (weight structural 2x), (D) Mechanism Feasibility (100% required), (E) Perceptual Risk (0-4, <=2 to proceed), (F) Perceptual Cost (0-5)." |
| T16 | Perceptual Risk Assessment | 4-question risk evaluation for execution-layer problems | Execution Spec (Phase 3) | "Assess: transition model (state change vs empty space), expression mode (structural vs labels), element variety (varied vs uniform), responsive story (natural vs forced). Score 0-4. >=2.5 = rank below lower-risk candidates." |
| T17 | Perceptual Cost Assessment | 5-question guardrail violation prediction | Execution Spec (Phase 3) | "Assess: compression below floors? Container below 940px? Uniform grids 4+? Transitions as empty space? Labels over structure? Each YES = +1. Score 3+ = consider alternative metaphor." |
| T18 | 6-Criterion Quality Rubric | 18-point rubric with mandatory Interpretive Distance >= 2 | Execution Spec (Phase 3, Ceiling+) | "Score 6 criteria (0-3 each): Interpretive Distance, Content-Shape Fit, Structural Survival, Perceptual Risk, Mechanism Diversity, Restraint Compatibility. Total >= 12/18. Interpretive Distance MUST >= 2 (zero-distance = label, not bridge)." |
| T19 | 6 Binary Rejection Checks | Pass/fail pre-screening before scoring | Execution Spec (Phase 3) | "Before scoring, apply 6 rejection checks. ANY YES = immediate REJECT: (R1) content's own domain vocabulary? (R2) requires visible labels? (R3) forces container <940px? (R4) ALL transitions as empty space? (R5) 6+ identical elements? (R6) requires soul violations?" |
| T20 | Metaphor Commitment Gate | Lock-in before library access | Execution Spec (Phase 3.5) | "State committed metaphor IN WRITING. This is LOCKED IN. You DO NOT change after library consultation. Verify: independent derivation, no library reference needed, divergence check." |

### 3B. Compositional Generation Techniques

| # | Technique | Description | Prompt Layer | Exact Invocation Text |
|---|-----------|-------------|-------------|----------------------|
| T21 | Perceptual Guardrails | Non-negotiable minimums for container, CPL, spacing | Execution Spec (Phase 4) | "Container 940-960px, CPL 45-80, line-height min 1.5, section breathing min 48px, compression ratio deepest >= 40% of shallowest. NEVER compromise for metaphor." |
| T22 | Container Width Priority | #1 Phase D failure mode prevention | Execution Spec (Phase 4, HIGHEST PRIORITY) | "Container 940-960px is NON-NEGOTIABLE. Express narrowing through INTERNAL padding, not width reduction. .container { max-width: 960px; padding: 0 120px; } = narrow visual at legal width." |
| T23 | CPL Calculation Formula | Self-verification before file write | Execution Spec (Phase 4) | "CPL = content-width / font-size / 0.6. Verify: 45-80. Example: 960px - 140px padding = 820px at 18px = 820/18/0.6 = 75.9 CPL (PASS)." |
| T24 | Heading Spacing Enforcement | Binary check for heading association | Execution Spec (Phase 4) | "For EVERY heading: space-above / space-below >= 1.5. Check COMPUTED styles. Margin collapse may create different effective spacing than declared CSS." |
| T25 | 5-Category Property Extraction | Systematic metaphor property mapping | Execution Spec (Phase 4.1) | "Extract properties across ALL FIVE: Spatial (arrangement), Temporal (rhythm), Material (density/weight), Behavioral (movement), Relational (connections). Zero properties in ANY category = metaphor may be insufficient." |
| T26 | Translation Grammar | Property-to-CSS lookup table | Reference Library | "Translate via lookup: Weight (heavy=3px, light=1px, emphasis=display italic). Depth (surface=#FEF9F5, middle=#FFFFFF, deep=#1A1A1A). Density (sparse=64-80px, medium=24-32px, dense=12-16px). Flow (sequential=flex column, parallel=grid, oscillating=alternating zones). Containment (bounded=3px, accented=4px left, open=spacing only). Transition (smooth=48px+1px, bridge=64px+zone+text, breathing=80px+3px). Hierarchy (primary=2.5-3rem display, secondary=1.625rem, tertiary=1.375rem italic, meta=0.75rem mono uppercase)." |
| T27 | 6 Exhaustive CSS Channels | Complete channel enumeration | Execution Spec (Phase 4.2) | "Express metaphor through ONLY these 6: (1) Background color, (2) Border (3 categories, never 2px), (3) Typography (3 fonts, 6 sizes), (4) Spacing (4-80px scale), (5) Layout (flex/grid/none), (6) Color accent (red structural, 5 accent for callouts)." |
| T28 | Pacing Prediction Heuristic | Pre-generation risk assessment | Execution Spec (Phase 4.2B) | "Before HTML: assess section count (3-6 good, 11+ high risk), breathing model (CHANGING STATE not empty space), element uniformity (varied not uniform), dramatic moment (place at 60-80% height), transition model (background shifts not labeled connectors)." |
| T29 | Rhythm Variation Requirement | 3+ transition types minimum | Execution Spec (Phase 4.2C) | "BINARY RULE: Deploy AT LEAST 3 different transition types (SMOOTH/BRIDGE/BREATHING). Uniform spacing = metronomic. Count < 3 = FAIL." |
| T30 | 5-Rule Coherence Check | Cross-channel consistency verification | Execution Spec (Phase 4.3) | "Verify: (C-1) density direction consistent across all channels, (C-2) transition strength matches axis distance, (C-3) typography role matches authority, (C-4) border category matches containment, (C-5) accent color matches semantic role." |
| T31 | Tier 2/3 Component Boundary | Portability, isolation, substitution tests | Execution Spec (Phase 4.4) | "Component is Tier 2 (extractable) if portable, isolatable, substitutable. Component is Tier 3 (compositional) if removing metaphor makes it meaningless." |
| T32 | Adapt-vs-Invent Decision | 3-question gate before new components | Execution Spec (Phase 4.5) | "Before inventing: (1) Can existing Tier 2 be ADAPTED? (2) Can property be expressed through LAYOUT alone? (3) Is property NECESSARY for metaphor? All NO = invent. Otherwise, don't." |
| T33 | Transition Grammar Table | Axis-to-axis transition lookup | Reference Library | "Lookup: Z→F=Smooth, Z→Bento=Bridge, Z→Spiral=Breathing, Bento→Spiral=Breathing, etc. Determines transition type between layout patterns." |
| T34 | Fractal Consistency Gate | Multi-scale pattern verification | Execution Spec (Phase 4.7) | "Deliver scale coverage table: Middle = 2 scales (Page + Component), Ceiling = 4 (Nav+Page+Section+Component), Flagship = 5 (all + Character). Same pattern direction at each scale. CSS evidence required." |
| T35 | Landmark Completeness Gate | Header + main + footer verification | Execution Spec (Phase 4.7B) | "Middle+: Header + Main + Footer ALL required. Footer MUST mirror header or provide equivalent visual weight. MUST NOT be empty. Page without footer = WOULD-NOT-SHIP." |
| T36 | Section-Aware Composition | Multi-section content handling | Execution Spec (Phase 4.8) | "Primary metaphor = through-line (palette, spacing, typography). Sections vary density, border weight, background. CODE = preserve structure. DATA = standard tables. NARRATIVE = full treatment." |
| T37 | Tokenization Self-Check | CSS token compliance verification | Execution Spec (Phase 4.9) | "Token compliance >= 80%. Formula: var() count / (var() + raw hex/px). Read tokens.css FIRST. For every value: use token if one exists. Middle baseline was 66.5% (insufficient)." |

### 3C. Verification + Output Techniques

| # | Technique | Description | Prompt Layer | Exact Invocation Text |
|---|-----------|-------------|-------------|----------------------|
| T38 | Divergence Verification | Post-build library comparison | Execution Spec (Phase 5) | "Read 2-3 most similar case studies. Compare on 5 dimensions. DIFFERENT on 3+ = novel. SAME on 3+ = convergence (justify or regenerate)." |
| T39 | Soul Test | 5-question perceptual validation | Execution Spec (Phase 5, Output B) | "Does this look like a magazine? (PASS). Does this look like Bootstrap? (FAIL). Could Bootstrap blue work? (FAIL). Does every choice serve hierarchy/readability? (PASS). Any unearned decoration? (FAIL)." |
| T40 | Dual Output | Thought process + HTML layout | Execution Spec (Phase 5) | "Output A: full thought process (all phases documented). Output B: complete self-contained HTML with inline <style>, ONLY KortAI CSS, passes Soul Test." |

### 3D. Builder Warning Techniques (Appendix R6)

| # | Warning | Trigger Condition | Exact Invocation Text |
|---|---------|------------------|----------------------|
| W1 | W-DEADZONE | Transition model = EMPTY SPACE | "Enforce MAXIMUM breathing zone 48px. Section transitions = CHANGING STATE (background shift, border change, density gradient), NOT EMPTY SPACE. 'Page turns' / 'walking between buildings' = 1px border + background shift, NOT vertical space." |
| W2 | W-OVERLABEL | Expression mode = TEXTUAL LABELS | "Use STRUCTURAL GRADIENTS (graduated backgrounds, compression changes, font weight shifts), NOT TEXT LABELS. Reader should FEEL metaphor without READING about it. Metaphor vocabulary in visible labels = announcing, not embodying." |
| W3 | W-MONOTONY | Element variety = UNIFORM | "Vary element sizes by CONTENT IMPORTANCE. 6+ same-shaped elements → break into groups (3+3 with separator) or alternate full-width/inset. Can elements merge, split, or change orientation?" |
| W4 | W-RESPONSIVE | Responsive risk = MODERATE+ | "MUST test at 768px before done. Specific risk: [metaphor weakness]. Mitigation: [CSS approach]." |
| W5 | W-STATS | Metadata strip present | "Stats bars = weakest element. At 768px, 4-6 values ALWAYS cramp. Limit to 3 at narrow (CSS hide least essential) or stack vertically. Never let metadata compete with title." |
| W6 | W-IMPLICIT | Always (every metaphor) | "Best layouts make reader FEEL metaphor without NAMING it. Graduated background IS elevation. Deepening color IS geological stratum. Show, don't tell. Test: remove all metaphor labels — does layout still communicate? YES = good. NO = rework." |

---

## 4. ENRICHMENT-SPECIFIC INVOCATIONS

### 4A. Void Prevention Gate (from Ceiling Experiment Failure)

**Provenance:** Ceiling experiment produced 70-80% whitespace void. 9/9 Mode 4 PA auditors flagged it. The dominant failure was "catastrophic whitespace void" — blank cream space where content should exist.

**Invocation text for Execution Spec (Phase 4.0, add to guardrails):**

```
VOID PREVENTION (from ceiling failure — 70-80% of page was blank cream):

Content-to-void ratio: >= 60:40 at EVERY viewport height.
  - Measure: at any scroll position, >= 60% of visible area contains meaningful content.
  - Void = background color with no text, components, or visual elements.
  - Exceptions: intentional breathing zones (max 48px).

Max void threshold per viewport: NO single viewport frame (any 900px tall slice of the page) may be >40% void.

Empty element prohibition: No <section>, <div>, or <article> may render with ONLY background color and no content.

Content distribution: Content must span at least 4 of 5 vertical quintiles of the page.
  - Quintile = 20% of total page height.
  - If any quintile is >80% void, redistribute content or add meaningful visual elements.

BINARY CHECK before file write: Scroll through entire page. If you encounter any 900px tall slice that is >40% blank background, you FAIL.
```

### 4B. Spatial Safeguards (from Container Width Violations)

**Provenance:** 4/5 Phase D validation pages violated container width. THE #1 failure mode across all experiments.

**Invocation text for Execution Spec (Phase 4.0, reinforce container):**

```
SPATIAL SAFEGUARDS (container width is THE #1 failure mode):

Container width at 1440px: EXACTLY 940-960px. Binary pass/fail.
  - The builder MUST include this CSS: .container { max-width: 960px; margin: 0 auto; }
  - ESCAPE HATCH for narrow metaphors: .container { max-width: 960px; padding: 0 120px; }
    This creates 720px content width inside legal 960px container.

Content-to-viewport ratio: 65-67% at 1440px.
  - 940px / 1440px = 65.3% (MINIMUM)
  - 960px / 1440px = 66.7% (MAXIMUM)

Header proportion: Header MUST NOT exceed 33% of first viewport height (at 1440px viewport, header <= ~300px).

BUILDER SELF-CHECK (binary, do before writing file):
  1. Open browser at 1440px width
  2. Inspect .container computed max-width
  3. Is it 940-960px? YES = PASS. NO = FIX IMMEDIATELY.
```

### 4C. Enhanced Mechanism Deployment Guidance (from Enrichment Execution)

**Provenance:** Mechanism catalog enriched with 18/18 impact profiles, application modes, and zone mappings. Per-category deployment validated by Middle experiment (12 mechanisms, PA-05 4/4 DESIGNED).

**Invocation text for Execution Spec (Phase 4.0):**

```
MECHANISM DEPLOYMENT (enriched catalog with full impact profiles):

Read the FULL mechanism catalog. Each mechanism now includes:
  - Impact Profile: what perceptual effect it creates
  - Application Modes: how to apply at different tiers
  - Zone Mappings: which page zones it serves best

Per-category deployment (MANDATORY):
  Spatial: min 1 from {Dense/Sparse, Width Variation, Bento Grid}
  Hierarchy: min 1 from {Border-Weight, Spacing Compression, Typography Scale}
  Component: min 1 from {2-Zone DNA, Confidence Color, Border-Left Signal, Code Block}
  Depth/Emphasis: min 1 from {Solid Offset, Zone Backgrounds, Drop Cap}
  Structure/Nav: min 1 from {Scroll Witness, Progressive Disclosure, Dark Header, Footer Mirror, Data Table}

Ceiling+: 2+ REINFORCING PAIRS required (different mechanisms encoding SAME semantic dimension through different CSS channels).
  Example: border-weight (#1) + zone backgrounds (#7) BOTH encode depth = reinforcing pair.

Flagship: 3+ REINFORCING CLUSTERS (3+ mechanisms encoding same semantic).
```

### 4D. Slicing Strategy Protocol (from Enrichment Execution — New Document)

**Provenance:** New protocol document created during enrichment execution. Defines how to slice large prompt content for agents without information loss.

**Invocation text for Coordination Spec:**

```
PROMPT SLICING STRATEGY:

Each agent receives ONLY the prompt lines relevant to their role.
  - Conviction Layer: ALL agents read (shared inspiration)
  - Execution Spec: Builder agents read spatial + soul + compositional. Auditors read all.
  - Coordination Spec: Team lead reads all. Workers read only their section.
  - Reference Library: Per-agent routing (mechanism catalog → builders, case studies → auditors)

CRITICAL: Do NOT give builders the FULL execution spec. Builders attend to ~55 lines max at ~37 attention units. Beyond this, compliance drops.
```

### 4E. Isolation Matrix Protocol (from Enrichment Execution — New Document)

**Provenance:** New protocol document. Defines how to isolate skill invocations so they don't interfere with each other.

**Invocation text for Coordination Spec:**

```
SKILL ISOLATION MATRIX:

TC skill and PA skill invoke at DIFFERENT phases:
  - TC invocation: Phases 0-5 (content → layout generation)
  - PA invocation: Phase 6+ (post-build audit)
  - NEVER invoke TC and PA simultaneously on the same artifact.
  - TC produces the page. PA evaluates the page. Sequential, not parallel.

Cross-skill data flow:
  - TC → PA: The HTML file + thought process document
  - PA → TC: Only if PA verdict is REVISE — then TC re-enters at Phase 4 with PA findings
```

---

## 5. METAPHOR COLLAPSE PROTOCOL — Full Invocation Language

The metaphor collapse (Phase 3) is THE most creative moment in the pipeline. Here is the complete invocation that preserves creative freedom while preventing ceiling's failure:

```
=== METAPHOR COLLAPSE PROTOCOL (Metaphor Agent, Opus) ===

You are about to perform the IRREDUCIBLE CREATIVE STEP.

The pipeline proceduralizes everything EXCEPT the moment of recognition — perceiving that a specific domain IS the bridge between reader needs and system constraints. This moment cannot be scripted. It can be CONSTRAINED to prevent bad outcomes.

STEP 1: TRANSFORM emotions into geometry
  Reader needs (Side A) → geometric abstractions
  System constraints (Side B) → geometric abstractions
  Find the OVERLAP between these two lists.

STEP 2: GENERATE the constrained search query
  "What real-world domain naturally exhibits [OVERLAP] while being [SIDE B GAPS] yet conveying [SIDE A GAPS]?"
  This single sentence is the most important sentence in the entire pipeline.

STEP 3: APPLY three filters
  (a) CONSTRAINT SCAN: Start with angularity. Eliminates organic, liquid, atmospheric, textile, botanical.
  (b) CONTENT RESONANCE: What is the content LITERALLY about? The seed is often in the content.
  (c) EMOTIONAL VALENCE: Side A's emotion eliminates wrong-valence domains.
  The domain that survives ALL THREE = your metaphor.

STEP 4: SCORE candidates on 6 dimensions (A-F) + Quality Rubric (6 criteria, 18 points)
  - Interpretive Distance MUST >= 2. Zero-distance metaphors are labels, not bridges.
  - Structural Survival: Remove all labels. Does metaphor survive? If not, it's announced, not structural.
  - CRITICAL: This is where the ceiling experiment failed. "Secure facility" for security docs scored 12/12 on old rubric but had zero interpretive distance. The enriched rubric catches this.

STEP 5: APPLY 6 binary rejection checks BEFORE scoring
  Uses content's own vocabulary? REJECT.
  Requires visible labels? REJECT.
  Forces container <940px? REJECT.
  ALL transitions as empty space? REJECT.
  6+ identical elements? REJECT.
  Requires soul violations? REJECT.

STEP 6: COMMIT in writing. LOCK IN. No changes after library access.

CONNECTING TO CONVICTION LAYER:
  The conviction layer should inspire the Metaphor Agent with these truths:
  - Multiple valid metaphors exist for the SAME content (construction, not discovery)
  - The metaphor you choose is a CREATIVE ACT, not an inevitable conclusion
  - Beauty = confident intention at every scale of attention
  - The difference between Flagship and Ceiling is RESTRAINT, not complexity
  - CD-006 (39/40) used iteration + messaging. Ceiling (DO NOT SHIP) used single-pass.

PREVENTING CEILING'S FAILURE:
  The ceiling experiment chose "secure facility" for security documentation = zero interpretive distance.
  40% of its metaphor survived without labels = "announced, not structural."

  To prevent this:
  - Interpretive Distance >= 2 (MANDATORY gate)
  - Structural Survival test: if removing labels kills the metaphor, it's not structural
  - IMPLICIT > EXPLICIT: graduated backgrounds, spatial hierarchy, compression changes
  - The best metaphors are FELT, not LABELED
```

---

## 6. CONVICTION LAYER TEXT — Lines for Layer 1 that Invoke TC Creativity

These lines belong in the Conviction layer (~70 lines total, these are TC's contribution):

```
=== TC-SPECIFIC CONVICTION LINES ===

You are CONSTRUCTING a composition, not DISCOVERING one.
Your lens shapes what you see. The categories you bring determine what patterns emerge.
Multiple valid metaphors exist for the SAME content.
The metaphor you select is CHOSEN, not found.
Success = conscious construction. Failure = unconscious pattern-matching.

The tension is emotional; the bridge is structural.
The opposition between sides is at the level of feeling.
The bridge works at the level of form, structure, and pattern.
A structural bridge does not average between warm and austere —
it creates a form where the SAME structure is simultaneously warm in one reading and austere in another.

The pipeline cannot provide the metaphor. It CAN constrain the search space
so the metaphor, when found, feels inevitable.

Richness = semantic density x restraint x spatial confidence.
The pipeline predicts RICHNESS, not QUALITY.
High richness with high perceptual risk = DO NOT SHIP.
Low richness with low perceptual risk = may ship beautifully.

The irreducible creative step: perceiving that a specific domain IS the bridge.
This is cultivated by expanding domain familiarity and practicing the query format.

The best layouts make the reader FEEL the metaphor without ever NAMING it.
The worst moments were EXPLICIT metaphor announcements.
The graduated background IS the elevation.
The deepening color IS the geological stratum.
Show, don't tell.

Constraint pressure is the engine of quality, not its enemy.
The metaphor shapes internal experience; guardrails preserve external readability.
```

---

## 7. EXECUTION SPEC TEXT — Binary Rules Derived from TC Skill

Every rule below is BINARY (pass/fail, no judgment). These go in Layer 2:

```
=== TC-DERIVED BINARY RULES (Layer 2) ===

SPATIAL:
- Container max-width: 940-960px. Below = FAIL. Above = FAIL.
- CPL: 45-80. Formula: content-width / font-size / 0.6. Outside range = FAIL.
- Content-to-void ratio: >= 60:40 at every viewport frame. Below = FAIL.
- Header proportion: <= 33% of first viewport. Above = FAIL.
- Content distribution: content spans >= 4 of 5 vertical quintiles. Below = FAIL.
- Compression ratio: deepest padding >= 40% of shallowest. Below = FAIL.
- Horizontal padding: >= 32px per side at any depth. Below = FAIL.
- Section breathing zone: >= 48px between major sections. Below = FAIL.
- Max void per viewport frame: <= 40% in any 900px slice. Above = FAIL.

SOUL:
- border-radius: 0 everywhere. Any radius = FAIL.
- box-shadow: none everywhere. Any shadow = FAIL.
- filter: drop-shadow() nowhere. Any drop-shadow = FAIL.
- Soul Test 5 questions: all must pass.
- Border widths: 1px or 3px or 4px only. 2px anywhere = FAIL.
- Color: only locked palette values. Off-palette = FAIL.
- Fonts: only 3 families (Instrument Serif, Inter, JetBrains Mono). Others = FAIL.

COMPOSITIONAL:
- Per-category mechanism deployment: >= 1 from each of 5 categories. Missing any = FAIL.
- Transition variety: >= 3 different types (SMOOTH/BRIDGE/BREATHING). Below = FAIL.
- Heading spacing ratio: space-above / space-below >= 1.5 for every h2/h3/h4. Below = FAIL.
- Body line-height: >= 1.5. Below = FAIL.
- Landmark completeness (Middle+): Header + Main + Footer all present. Missing any = FAIL.
- Footer: not empty. Empty footer = FAIL.
- Token compliance: >= 80% var() usage. Below = WARN (not hard fail but flagged).

PROCESS:
- Library prohibition: no case-study/library access during Phases 0-3. Access = INVALIDATE.
- Metaphor commitment: locked in writing before library access. Missing = FAIL.
- Fractal consistency: Middle 2 scales, Ceiling 4, Flagship 5. Below = FAIL.
- Builder self-check: container width + CPL + content-to-void verified before file write.

CEILING+ ADDITIONAL:
- Interpretive Distance: >= 2 on rubric. Below = REJECT metaphor.
- Metaphor Quality Rubric total: >= 12/18. Below = REJECT.
- 6 Binary Rejection Checks: any YES = REJECT.
- Reinforcing pairs: >= 2 mechanism pairs encoding same semantic. Below = FAIL.
- Scale coverage: >= 4 scales for Ceiling, >= 5 for Flagship. Below = FAIL.
```

---

## 8. COORDINATION SPEC TEXT — Agent-to-Phase Mapping

```
=== TC PHASE-TO-AGENT COORDINATION ===

PHASE 0 (Content Assessment):
  WHO: Content Architect (Opus)
  WHEN: First step, before any other agent begins
  INPUT: Raw content
  OUTPUT: Classification document (type, scope, sections, tier, routing)
  WRITES TO: Shared coordination file
  MUST COMPLETE BEFORE: Any creative work begins

PHASE 1 (Multi-Axis Questioning):
  WHO: Metaphor Agent (Opus)
  WHEN: After Phase 0 complete
  INPUT: Content + Phase 0 classification
  OUTPUT: Axis-needs table (4-14 entries with richness ratings)
  READS: TC SKILL.md Phase 1 section (lines 192-276)
  WRITES TO: Thought process document

PHASE 2 (Tension Derivation):
  WHO: Metaphor Agent (Opus) — continues from Phase 1
  WHEN: Immediately after Phase 1
  INPUT: Axis-needs table + KortAI personality profile
  OUTPUT: Tension table with scores, Addition Test results, richness formula
  READS: TC SKILL.md Phase 2 section (lines 278-464)
  WRITES TO: Thought process document
  GATE: Tension Threshold — 0 genuine = skip to defaults; all cosmetic = skip Phase 3

PHASE 3 (Metaphor Collapse):
  WHO: Metaphor Agent (Opus)
  WHEN: After Phase 2, only if >= 1 genuine tension
  INPUT: Tension table + structural property lists
  OUTPUT: Committed metaphor with isomorphism table + composite scores
  READS: TC SKILL.md Phase 3 section (lines 467-797)
  GATE: Metaphor Commitment (3.5) — lock in before library access

PHASE 3.5 (Metaphor Commitment):
  WHO: Metaphor Agent (Opus)
  WHEN: End of Phase 3
  INPUT: Selected metaphor candidate
  OUTPUT: Written commitment + verification answers
  GATE: Must pass commitment verification before proceeding

PHASE 4 (Compositional Layout):
  WHO: Planner (Opus) coordinates; Mechanism Builder (Sonnet) + Metaphor Builder (Opus) execute
  WHEN: After metaphor committed (or after pattern selected for Middle)
  INPUT: Committed metaphor + mechanism catalog
  OUTPUT: HTML layout with CSS
  READS: mechanism-catalog.md (NOW permitted), tokens.css, merged-components.css
  SUB-GATES:
    4.7 Fractal Consistency (before Phase 5)
    4.7B Landmark Completeness (before Phase 4.8)
    4.9 Tokenization Self-Check (before Phase 5)
  COMMUNICATION: Builder agents MUST message team lead if unclear on any guardrail.

PHASE 5 (Output + Divergence):
  WHO: Content Architect (Opus) for divergence; Builder for final output
  WHEN: After Phase 4 complete
  INPUT: HTML layout + thought process
  OUTPUT: Final HTML file + divergence verification
  READS: case-studies/_INDEX.md (NOW permitted, titles only), 2-3 similar case studies
  GATE: Divergence verdict (novel or justified convergence)

TEAM LEAD RESPONSIBILITIES:
  - Ensure Phase 0 completes before Phase 1 starts
  - Pass metaphor commitment to builders (they do NOT derive their own)
  - Enforce library prohibition (Phases 0-3)
  - Monitor builder messages (builders MUST message if confused)
  - Verify gates at 3.5, 4.7, 4.7B before allowing progression
  - Trigger PA skill invocation AFTER Phase 5 output
```

---

## 9. REFERENCE ROUTING — How Agents Should Consult the TC Skill File

```
=== TC SKILL FILE REFERENCE ROUTING ===

FILE: ~/.claude/skills/tension-composition/SKILL.md (1,932 lines)

METAPHOR AGENT reads:
  - Lines 1-25: Critical principle (construction, not discovery)
  - Lines 27-167: Phase 0 (for understanding tier classification, though Content Architect executes)
  - Lines 192-276: Phase 1 (multi-axis questioning — the agent's primary workspace)
  - Lines 278-464: Phase 2 (tension derivation)
  - Lines 467-862: Phase 3 + 3.5 (metaphor collapse + commitment)
  - Lines 1812-1932: Test results summary (to learn from prior failures)
  TOTAL: ~900 lines. This agent needs the MOST context.

CONTENT ARCHITECT reads:
  - Lines 40-167: Phase 0 (content assessment — the agent's primary workspace)
  - Lines 1684-1778: Phase 5 (divergence verification)
  TOTAL: ~220 lines.

PLANNER reads:
  - Lines 27-36: Pipeline overview (6 phases)
  - Lines 866-1107: Phase 4.0 + mechanism deployment (to plan builder assignments)
  - Lines 1462-1533: Phase 4.7B landmarks (to verify builder output)
  TOTAL: ~310 lines.

MECHANISM BUILDER reads:
  - Lines 866-980: Phase 4.0 guardrails (spatial, CPL, container — NON-NEGOTIABLE)
  - Lines 1051-1107: Mechanism catalog access + per-category deployment
  - Lines 1110-1260: Phase 4.1-4.2 (property extraction + translation grammar)
  - Lines 1262-1330: Phase 4.2B-C (pacing + rhythm)
  - Lines 1331-1403: Phase 4.3-4.5 (coherence + components + adapt-vs-invent)
  - Lines 1547-1620: Phase 4.9 (tokenization self-check)
  - Lines 1827-1917: Appendix R6 builder warnings
  TOTAL: ~550 lines. Heavy CSS focus.

METAPHOR BUILDER reads:
  - Lines 866-980: Phase 4.0 guardrails
  - Lines 1110-1260: Phase 4.1-4.2 (property extraction + translation)
  - Lines 1416-1532: Phase 4.7 + 4.7B (fractal + landmarks)
  TOTAL: ~340 lines. Metaphor-to-CSS translation focus.

EMBEDDED AUDITOR reads:
  - Lines 866-980: Phase 4.0 guardrails (to verify builder compliance)
  - Lines 1262-1330: Pacing + rhythm (to audit visual quality)
  - Lines 1827-1917: Builder warnings (to check warning compliance)
  TOTAL: ~200 lines.

PA AUDITORS DO NOT READ TC SKILL. They read the PA skill instead.
TC and PA are ISOLATED — sequential, not parallel.

CROWN JEWEL ANALYST reads:
  - Lines 1791-1810: Test content recommendations (to understand crown jewel provenance)
  - Lines 1919-1932: Test results summary
  TOTAL: ~50 lines. Light reference only.
```

---

## 10. COMPLETE TECHNIQUE INDEX (Alphabetical)

For quick lookup, every technique identified in the 1,932-line skill:

| ID | Name | Line Range | Phase | Layer |
|----|------|-----------|-------|-------|
| T1 | Content Type Classification | 44-49 | 0A | Execution |
| T2 | Scope Assessment | 51-57 | 0B | Execution |
| T3 | Section Identification | 59-64 | 0C | Execution |
| T4 | Tier Classification + Routing | 69-144 | 0D | Execution |
| T5 | Library Access Prohibition | 168-188 | 0E | Execution |
| T6 | Multi-Axis Questioning (14 axes) | 192-276 | 1 | Conviction |
| T7 | Addition Test | 336-343 | 2 | Execution |
| T8 | BECAUSE Test | 382 | 2 | Execution |
| T9 | Richness Formula | 386-406 | 2 | Execution |
| T10 | Structural Property Extraction (Side A) | 473-482 | 3.1 | Conviction |
| T11 | Constrained Search Query | 507-516 | 3.4 | Conviction |
| T12 | Three Search Heuristics | 519-526 | 3.4 | Conviction |
| T13 | Domain Search Menu (10 categories) | 528-543 | 3.4 | Reference |
| T14 | Incompatible Families Ban | 567-574 | 3.4 | Execution |
| T15 | Composite Scoring (6 dimensions) | 576-702 | 3.5 | Execution |
| T16 | Perceptual Risk Assessment | 626-647 | 3.5E | Execution |
| T17 | Perceptual Cost Assessment | 650-696 | 3.5F | Execution |
| T18 | 6-Criterion Quality Rubric | 705-757 | 3.5G | Execution |
| T19 | 6 Binary Rejection Checks | 744-757 | 3.5G | Execution |
| T20 | Metaphor Commitment Gate | 799-862 | 3.5 | Execution |
| T21 | Perceptual Guardrails | 876-980 | 4.0 | Execution |
| T22 | Container Width Priority | 944-980 | 4.0 | Execution |
| T23 | CPL Calculation Formula | 907-942 | 4.0 | Execution |
| T24 | Heading Spacing Enforcement | 984-1034 | 4.0 | Execution |
| T25 | 5-Category Property Extraction | 1110-1175 | 4.1 | Execution |
| T26 | Translation Grammar (lookup) | 1177-1248 | 4.2 | Reference |
| T27 | 6 Exhaustive CSS Channels | 1249-1260 | 4.2 | Execution |
| T28 | Pacing Prediction Heuristic | 1262-1301 | 4.2B | Execution |
| T29 | Rhythm Variation Requirement | 1303-1330 | 4.2C | Execution |
| T30 | 5-Rule Coherence Check | 1331-1366 | 4.3 | Execution |
| T31 | Tier 2/3 Component Boundary | 1368-1387 | 4.4 | Execution |
| T32 | Adapt-vs-Invent Decision | 1388-1403 | 4.5 | Execution |
| T33 | Transition Grammar Table | 1404-1414 | 4.6 | Reference |
| T34 | Fractal Consistency Gate | 1416-1461 | 4.7 | Execution |
| T35 | Landmark Completeness Gate | 1466-1533 | 4.7B | Execution |
| T36 | Section-Aware Composition | 1536-1543 | 4.8 | Execution |
| T37 | Tokenization Self-Check | 1547-1620 | 4.9 | Execution |
| T38 | Divergence Verification | 1684-1778 | 5 | Execution |
| T39 | Soul Test (5 questions) | 329-335 | 5/Output | Execution |
| T40 | Dual Output (A + B) | 1624-1650 | 5 | Execution |
| W1 | W-DEADZONE Warning | 1844-1846 | Builder Appendix | Execution |
| W2 | W-OVERLABEL Warning | 1847-1849 | Builder Appendix | Execution |
| W3 | W-MONOTONY Warning | 1850-1852 | Builder Appendix | Execution |
| W4 | W-RESPONSIVE Warning | 1853-1855 | Builder Appendix | Execution |
| W5 | W-STATS Warning | 1856-1858 | Builder Appendix | Execution |
| W6 | W-IMPLICIT Warning | 1859-1861 | Builder Appendix | Execution |

**Total: 40 techniques + 6 warnings = 46 invocable items from the TC skill.**

---

## 11. CROSS-REFERENCE: TC Skill Coverage in Current Prompt

Based on the prompt structure outline (00-PROMPT-STRUCTURE-OUTLINE.md), here is what is ALREADY covered vs MISSING:

### COVERED (in current prompt):
- Container width 940-960px (2A SPATIAL)
- CPL 45-80 (2A SPATIAL)
- Content-to-void >= 60:40 (2A SPATIAL)
- Per-category minimums (2C COMPOSITIONAL)
- 3-transition minimum (2C COMPOSITIONAL)
- Soul compliance 8/8 (2B SOUL)
- Library prohibition (2D PROCESS)
- Two-instance pattern (2D PROCESS)
- Fractal consistency gate reference (implicit in "designed moment per quartile")
- Landmark completeness (implicit in "header+footer" in 2E)

### MISSING OR UNDERSPECIFIED:
1. **Multi-axis questioning protocol** — not referenced in execution spec. The Metaphor Agent needs the axis table.
2. **Addition Test + BECAUSE Test** — not explicitly named. Critical diagnostic tools.
3. **Richness Formula** — not referenced. Tension selection mechanism.
4. **Richness Formula Cap** — not referenced. Prevents richness from overriding perceptual risk.
5. **Metaphor Commitment Gate (Phase 3.5)** — not referenced. Critical lock-in protocol.
6. **6-Criterion Quality Rubric** — not referenced. THE gate that would have caught ceiling's failure.
7. **6 Binary Rejection Checks** — not referenced. Pre-screening before scoring.
8. **Perceptual Risk Assessment** — not referenced. Execution-layer risk predictor.
9. **Perceptual Cost Assessment** — not referenced. Guardrail violation predictor.
10. **Pacing Prediction Heuristic** — not referenced. Pre-build risk assessment.
11. **5-Rule Coherence Check** — not referenced. Cross-channel consistency.
12. **Adapt-vs-Invent Decision** — not referenced. Component creation gate.
13. **Transition Grammar Table** — not referenced. Axis-to-axis lookup.
14. **Tokenization Self-Check** — not referenced. CSS quality gate.
15. **Divergence Verification** — not referenced. Post-build novelty check.
16. **Builder Warnings (W1-W6)** — not referenced. Execution-layer failure prevention.
17. **Domain Search Menu** — not referenced. Creative search support.
18. **Incompatible Families Ban** — not referenced. Soul-violation prevention in metaphor selection.
19. **Construction-not-Discovery principle** — not in conviction layer. THE foundational creative principle.
20. **Implicit > Explicit metaphors** — not in conviction layer. THE lesson from all test data.
21. **Agent-to-TC-phase routing** — not in coordination spec. Which agent reads which TC lines.
22. **Responsive Degradation Check** — not referenced. 768px testing requirement.
23. **Heading Spacing Enforcement** — not explicitly formulated as space-above/below >= 1.5 ratio.
24. **Compression Ratio** — not explicitly as "deepest >= 40% of shallowest."

### PRIORITY RANKING of missing items:

**BLOCKING (must add):**
1. 6-Criterion Quality Rubric + 6 Binary Rejection Checks (would have prevented ceiling failure)
2. Construction-not-Discovery principle (foundational for creative quality)
3. Implicit > Explicit directive (THE lesson from 15 test layouts)
4. Metaphor Commitment Gate (prevents pattern-matching)
5. Agent-to-TC-phase routing (without this, agents don't know what TC content to read)

**HIGH (should add):**
6. Multi-axis questioning protocol (Metaphor Agent's workspace)
7. Perceptual Risk + Cost Assessments (execution quality predictors)
8. Builder Warnings W1-W6 (execution failure prevention)
9. Pacing Prediction Heuristic (dead zone prevention)
10. Coherence Check 5 rules (cross-channel consistency)

**MEDIUM (add if space permits):**
11. Richness Formula + Cap
12. Addition Test + BECAUSE Test (explicit naming)
13. Tokenization Self-Check
14. Divergence Verification
15. Domain Search Menu

---

*End of TC Deep Invocation Report. 46 techniques cataloged. 24 gaps identified. 5 BLOCKING, 5 HIGH, 5 MEDIUM.*
