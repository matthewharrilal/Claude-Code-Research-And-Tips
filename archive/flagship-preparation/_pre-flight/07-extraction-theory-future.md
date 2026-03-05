# Extraction: Files 19-21 (Constraint Pressure, Attention Bandwidth, Beyond Flagship)

**Extractor:** extraction-worker-7
**Date:** 2026-02-16
**Sources:**
1. `ephemeral/flagship-preparation/19-constraint-pressure-hypothesis.md` (720 lines)
2. `ephemeral/flagship-preparation/20-attention-bandwidth-theory.md` (674 lines)
3. `ephemeral/flagship-preparation/21-beyond-flagship.md` (672 lines)

---

## FILE 1: 19-constraint-pressure-hypothesis.md (720 lines)

### ACTION ITEMS

#### A19-01: Run Constraint Pressure Experiment BEFORE Flagship
- **Source:** Lines 408-420
- **Action:** Run a lightweight 2-condition experiment (Condition C vs Condition A) -- high-constraint/2-scale vs standard/2-scale. Requires only 2 builds (~2.5 hours).
- **Category:** PROCESS
- **Priority:** BLOCKING (if positive result, modifies flagship prompt fundamentally)
- **Dependencies:** None -- can run immediately with existing infrastructure
- **Cross-reference:** Section 4.4, Recommendation at line 418-420

#### A19-02: Define 10 Additional Value-Restriction Prohibitions
- **Source:** Lines 359-371
- **Action:** Create the following 10 additional prohibitions for high-constraint conditions:
  1. NO background-color changes beyond 3 zone tokens (cream, white, breathing)
  2. NO font-weight: 700 (only 400, 500, 600)
  3. NO letter-spacing > 0.15em
  4. NO margin/padding values outside the 6-anchor subset (8px, 16px, 24px, 32px, 48px, 64px)
  5. NO more than 3 border colors (primary, border, border-subtle)
  6. NO inline styles
  7. NO media queries beyond the single 768px breakpoint
  8. ALL headings must use the display font (no body-font headings)
  9. NO list-style-type values (all lists use custom markers)
  10. NO table cell padding > 24px
- **Category:** ENRICHMENT
- **Priority:** HIGH (needed for experiment A19-01 and potentially for flagship)
- **Target file:** Could be added to `design-system/compositional-core/identity/prohibitions.md` as "extended constraint set" or a separate constraint overlay
- **Dependencies:** None

#### A19-03: Add Value-Restriction Prohibitions for Flagship Prompt
- **Source:** Lines 438-448
- **Action:** Add 4 specific prohibitions to flagship execution prompt:
  1. Color prohibition: No more than 5 distinct background colors on any page
  2. Spacing prohibition: All spacing values from 6-anchor subset
  3. Typography prohibition: Maximum 4 distinct font-size values per page
  4. Border prohibition: Maximum 3 border weights per page
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Flagship master execution prompt (to be created)
- **Dependencies:** A19-01 result (if positive, confirms this is correct approach)

#### A19-04: Reduce Flagship Mechanism Target from 16-18 to 12-14
- **Source:** Lines 451-458
- **Action:** Change flagship tier mechanism target from "16-18 mechanisms" (flagship tier definition) to "12-14 mechanisms (ceiling tier)" with increased constraint pressure compensating for the mechanism count decrease.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Tier model definition (possibly `ephemeral/doc-enrichment/02-tier-methodology.md`), flagship execution prompt
- **Dependencies:** A19-01 result (if positive, confirms this is correct approach)
- **Cross-reference:** Lines 430-434 (contradiction table), line 458

#### A19-05: Implement 3-Pass Architecture as Attention Management
- **Source:** Lines 460-472
- **Action:** Structure the 3-pass architecture so each pass targets only 2 scales:
  - Pass 1 (Macro rhythm): Page + Section scales
  - Pass 2 (Mechanism deployment): Component + Detail scales
  - Pass 3 (Detail polish): Character + Navigation scales
  Each pass uses the Two-Instance pattern (fresh context = reset N).
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Flagship execution prompt pipeline section
- **Dependencies:** None (architectural decision)
- **Cross-reference:** Lines 464-472 (pass table), line 472 (reset-N insight)

#### A19-06: Add "Void Budget" and "Restraint Ratio" as Explicit Metrics
- **Source:** Line 434
- **Action:** Define and track two new explicit metrics:
  1. **Void budget:** Explicit tracking of whitespace allocation
  2. **Restraint ratio:** `(available mechanisms - deployed mechanisms) / available mechanisms`
- **Category:** PROCESS
- **Priority:** MEDIUM
- **Target file:** Flagship execution prompt (success criteria section)
- **Dependencies:** None

#### A19-07: Redefine Flagship as "Maximum Intentionality + Maximum Constraint Pressure + Adequate Spatial Coverage (3-4 scales)"
- **Source:** Lines 476-485
- **Action:** Update flagship tier definition from "maximum elaboration" to:
  - Most careful argument arc (intentionality)
  - Most deliberate cognitive choreography (intentionality)
  - Most precise self-referential relationship (intentionality)
  - NOT the most mechanisms, NOT the most scales, NOT the most CSS
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Tier model definition, flagship execution prompt
- **Dependencies:** None (philosophical reframe)

### ENRICHMENTS NEEDED

#### E19-01: Add Constraint Pressure (CP) as Formal Definition
- **Source:** Lines 668-669
- **Action:** Add formal definition: `CP = |closed CSS values| / |total CSS values|`. KortAI CP ~ 0.55-0.65.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** `design-system/compositional-core/guidelines/semantic-rules.md` or a new formal definitions section

#### E19-02: Add Semantic Density (SD) as Formal Definition
- **Source:** Lines 670-671
- **Action:** Add formal definition: `SD = |meaningful declarations| / |total declarations|`. KortAI SD ~ 0.80-0.90.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Same as E19-01

#### E19-03: Add Restraint Ratio (RR) as Formal Definition
- **Source:** Lines 672-673
- **Action:** Add formal definition: `RR = (|available mechanisms| - |deployed|) / |available|`. Middle RR = 0.33, Ceiling RR = 0.22.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Same as E19-01

#### E19-04: Add Intentionality Index (II) as Formal Definition
- **Source:** Lines 676-677
- **Action:** Add formal definition: `II = count of unmodeled richness dimensions present (self-reference, pedagogical sequencing, cognitive mode transitions, structural bookending, meta-annotation, provenance threading)`. Range [0,6]. CD-006 II = 6. Middle II ~ 1-2.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Same as E19-01

#### E19-05: Add Unified Richness Model
- **Source:** Lines 611-627
- **Action:** Add the unified model formula to design system:
  ```
  Perceived Richness = Semantic_Density * Spatial_Confidence * Restraint_Signal * Intentionality
  ```
  Where constraint pressure affects 3 of 4 factors but NOT intentionality.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** `design-system/compositional-core/guidelines/semantic-rules.md` or flagship reference docs

#### E19-06: Document the Three Laws of Constraint Pressure
- **Source:** Lines 588-604
- **Action:** Document as reference:
  1. Richness proportional to semantic density per decision, not decision count
  2. Constraint pressure has optimal range (~45-70%), not optimal point
  3. Constraint pressure and scale depth are partially substitutable
- **Category:** ENRICHMENT
- **Priority:** LOW
- **Target file:** Reference documentation

#### E19-07: Add Prohibition Group Analysis to Prohibitions Documentation
- **Source:** Lines 680-691 (Appendix B)
- **Action:** Document that the anti-physical group (shadows, transparency, gradients) accounts for ~47% of all constraint pressure. If choosing ONE prohibition group, the anti-physical group creates the most pressure per prohibition.
- **Category:** ENRICHMENT
- **Priority:** LOW
- **Target file:** `design-system/compositional-core/identity/prohibitions.md`

### PREREQUISITES

#### P19-01: Constraint Pressure Experiment Result Required Before Flagship Prompt Finalization
- **Source:** Lines 408-420
- **Action:** The constraint pressure experiment result determines whether flagship prompt includes additional prohibitions. If Condition C > Condition A, modify flagship prompt to include 10 additional constraints.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING (per author's recommendation)
- **Dependencies:** A19-01 and A19-02

### BINARY CHECKS

#### B19-01: Channel Loading Stability Check
- **Source:** Lines 228-229
- **Action:** Verify channel distribution in flagship output matches the stable equilibrium: Spacing ~23%, Typography ~19%, Background/Color ~16%, Layout ~15%, Border ~14%, Sizing ~8%.
- **Category:** GATE
- **Priority:** MEDIUM

#### B19-02: Constraint Pressure Not Exceeding 70%
- **Source:** Lines 547-548
- **Action:** Verify flagship constraint pressure stays within optimal range (55-70%). Above 70% risks crossing the inflection point into paralysis.
- **Category:** GATE
- **Priority:** HIGH

#### B19-03: Minimum 5 Surviving Channels
- **Source:** Lines 543-546
- **Action:** Documentation content requires ~5 channels minimum. Current KortAI has ~6. Adding more absolute prohibitions (closing entire channels) is dangerous -- use value restrictions instead.
- **Category:** GATE
- **Priority:** HIGH

### FILE MODIFICATIONS

#### F19-01: Update Tier Model Mechanism Targets
- **Source:** Lines 451-458
- **Target file:** `ephemeral/doc-enrichment/02-tier-methodology.md`
- **Change:** Modify Flagship mechanism target from 16-18 to 12-14 (conditional on A19-01 result)

#### F19-02: Add Extended Constraint Set to Prohibitions
- **Source:** Lines 359-371
- **Target file:** `design-system/compositional-core/identity/prohibitions.md`
- **Change:** Add "Extended Constraint Set" section with 10 value-restriction prohibitions

#### F19-03: Add Formal Definitions Section
- **Source:** Lines 666-677
- **Target file:** `design-system/compositional-core/guidelines/semantic-rules.md`
- **Change:** Add formal definitions for CP, SD, RR, SC, II

### CROSS-REFERENCES

- CR19-01: References `prohibitions.md` (22 prohibitions) at line 39
- CR19-02: References `DD-006-fractal.html` (1,120 lines) at lines 6, 96-112, 697-707
- CR19-03: References `CD-006-pilot-migration.html` (2,086 lines) at lines 6, 217-227, 703-709
- CR19-04: References Middle experiment PA-05 result at lines 239, 593
- CR19-05: References Ceiling experiment PA-05 result at lines 240, 593
- CR19-06: References `06-adversarial-anti-scale.md` at line 6
- CR19-07: References `04-showcase-archaeology.md` at line 6
- CR19-08: References `03-diminishing-returns.md` at line 6
- CR19-09: Cross-references "context wall at ~800 CSS lines" from diminishing returns at line 272
- CR19-10: Cross-references "professionally stiff" finding from MEMORY.md at line 627

### TESTABLE PREDICTIONS (from the document)

- TP19-01: Condition C (high-constraint/2-scale) will outperform Condition A (standard/2-scale) on PA-05 (line 396)
- TP19-02: Condition D (high-constraint/5-scale) will outperform Condition B (standard/5-scale) if bandwidth corollary holds (line 401)
- TP19-03: Additional constraints will REDUCE build time (fewer decisions) and INCREASE semantic density (line 449)
- TP19-04: A page with 10 mechanisms at 65% CP will feel richer than one with 18 mechanisms at 55% CP (lines 453-457)

---

## FILE 2: 20-attention-bandwidth-theory.md (674 lines)

### ACTION ITEMS

#### A20-01: Create the 80-Line Flagship Builder Prompt
- **Source:** Lines 376-436
- **Action:** Create a builder prompt of ~80 lines (~37 attention units) with these sections:
  1. SOUL (7 binary checks, 7 lines)
  2. CONTAINER (CPL formula, 4 lines)
  3. SPATIAL ANCHORS (3 binary void/content/header rules, 5 lines)
  4. METAPHOR (1-paragraph summary, 10 lines)
  5. MECHANISMS (from build plan as table, 15 lines)
  6. TRANSITIONS (3+ types with examples, 5 lines)
  7. COMMUNICATION (2 directives, 4 lines)
  8. SELF-CHECK (8 binary items, 12 lines)
  9. PURPOSE-BUILT COMPONENTS (3 lines)
  10. DESIGNED MOMENTS (3-5 locations from plan, 10 lines)
- **Category:** PROCESS
- **Priority:** BLOCKING (this IS the flagship builder prompt design)
- **Target file:** Flagship master execution prompt (builder section)
- **Dependencies:** None (can be drafted now)

#### A20-02: Add 3 Binary Spatial Anchor Rules
- **Source:** Lines 223-226, 388-393
- **Action:** Add these 3 binary spatial rules to builder prompt:
  1. No contiguous void > 1.5 viewports (2,160px at 1440px)
  2. Content present in >= 70% of scroll depth
  3. Header < 25% of first viewport
- **Category:** ENRICHMENT
- **Priority:** BLOCKING (THE critical addition that prevents the Ceiling experiment's catastrophic failure)
- **Target file:** Builder prompt Section 5 (SPATIAL ANCHORS), also as gate check
- **Dependencies:** None

#### A20-03: Move Preparation Outputs to Correct Recipients
- **Source:** Lines 348-371
- **Action:** Route preparation outputs by recipient budget:
  - Rules --> Builder prompt (SHORT, 80 lines)
  - Gates --> Team-lead reference (MEDIUM, 200 lines)
  - Vocabulary --> Planner reference (planner has surplus)
  - Checklists --> Auditor prompts (LONG, unlimited)
  DO NOT send all preparation output to the builder.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Flagship prompt architecture (multi-file slicing)
- **Dependencies:** None (architectural decision)
- **Cross-reference:** Lines 362-371 (routing table)

#### A20-04: Create Phase-Specific Prompts (Only Relevant Rules Per Pass)
- **Source:** Lines 284-293
- **Action:** Create 3 separate pass prompts, each containing ONLY relevant rules:
  - Pass 1: Soul 7/7, container, CPL, spatial anchors, landmarks, 8-10 mechanisms, 1-para metaphor (~35 attention units)
  - Pass 2: Reinforcing pairs, 4-scale table, transitions, designed moments, mechanism additions, restraint protocol (~40 attention units)
  - Pass 3: Intentionality checklist (bookending, self-reference, cognitive transitions, meta-annotation), content additions (~20 attention units)
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** 3 separate prompt files for each pass
- **Dependencies:** A20-01 (base builder prompt design)

#### A20-05: Run Attention Audit Before Sending ANY Builder Prompt
- **Source:** Lines 296-317
- **Action:** Implement the attention audit template before sending builder prompts:
  ```
  Step 1: Count binary rules:        ___ x 0.75 = ___ units
  Step 2: Count judgment rules:       ___ x 4.0  = ___ units
  Step 3: Count mechanisms to deploy: ___ x 3.5  = ___ units
  Step 4: Count scales to maintain:   ___ x 6.0  = ___ units
  Step 5: Content understanding:      ~10 units (constant)
  Step 6: Communication overhead:     ___ checkpoints x 2.0 = ___ units
  TOTAL DEMAND: ___
  BUDGET: ~100 units
  SURPLUS: 100 - TOTAL = ___
  THRESHOLD: Surplus must be >= 30 units.
  ```
- **Category:** TOOL
- **Priority:** HIGH
- **Target file:** Team-lead reference / process protocol
- **Dependencies:** None

#### A20-06: Implement Rule Triage Order When Budget Exceeded
- **Source:** Lines 319-328
- **Action:** When attention audit shows prompt exceeds budget, triage in this order:
  1. CUT retrospective/diagnostic rules first
  2. CUT redundant restatements
  3. CONVERT judgment rules to binary rules
  4. DEFER enrichment items to reference docs
  5. COMPRESS procedural rules into phase diagram
  6. LAST: reduce mechanism count or scale depth
  NEVER cut identity rules. NEVER cut spatial anchor rules. NEVER cut container width.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Team-lead reference / process protocol
- **Dependencies:** A20-05

#### A20-07: Create Unlimited Auditor Prompts
- **Source:** Lines 439-457
- **Action:** Create auditor prompts with NO line limit, containing:
  - All 48 PA questions
  - PA-05 sub-criteria with measurable thresholds
  - Comparative framework (vs Middle, vs Ceiling)
  - Detailed success criteria with margin reporting
  - Anti-pattern list for detection
  - Full mechanism catalog (for PLANNED vs DEPLOYED analysis)
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Auditor prompt files (PA-1, PA-2, prog auditor)
- **Dependencies:** None

#### A20-08: Replace Explanations with Exemplars in Builder Prompts
- **Source:** Lines 183-191
- **Action:** Replace all explanations in builder prompt with concrete examples. The 1,004-line prompt contained both explanations AND examples -- the attention-preserving version should contain ONLY examples, with explanations moved to reference documents.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Builder prompt
- **Dependencies:** A20-01

#### A20-09: Frame All Constraints as Negative Rules (Boundary Checks)
- **Source:** Lines 193-201
- **Action:** Frame all constraints as "do not exceed X" or "must be within Y-Z" rather than "use good judgment about X." Negative rules cost ~1 attention unit vs positive rules at ~2-4 units.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Builder prompt
- **Dependencies:** A20-01

#### A20-10: Implement Handoff Format as Artifacts, Not Instructions
- **Source:** Lines 481-495
- **Action:** Structure the multi-pass handoff as:
  - Pass 1 builder produces: `flagship-page-v1.html` (artifact)
  - Spatial auditor checks: v1 against 7 binary spatial criteria (gate)
  - Pass 2 builder receives: v1 + elaboration plan (artifact + short prompt)
  - Composition auditor checks: v2 against composition criteria (gate)
  - Pass 3 builder receives: v2 + intentionality checklist (artifact + short prompt)
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Flagship pipeline architecture
- **Dependencies:** A20-04

#### A20-11: Ensure Builder Reports Page Height + Content Ratio After Build
- **Source:** Line 412
- **Action:** Add communication requirement: "After build: SendMessage to team-lead with page height + content ratio."
- **Category:** PROCESS
- **Priority:** MEDIUM
- **Target file:** Builder prompt (communication section)
- **Dependencies:** A20-01

### ENRICHMENTS NEEDED

#### E20-01: Add Attention Cost Per Rule Type Table to Process Documentation
- **Source:** Lines 59-70
- **Action:** Document the attention cost model:
  | Rule Type | Attention Cost |
  |-----------|---------------|
  | Binary identity rule | ~0.5 units |
  | Binary specification | ~1 unit |
  | Formula-based check | ~2 units |
  | Judgment rule | ~4 units |
  | Metaphor-derived rule | ~6 units |
  | Interaction rule | ~6-8 units |
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Process documentation / team-lead reference

#### E20-02: Add Compliance Hierarchy to Process Documentation
- **Source:** Lines 44-53
- **Action:** Document the attention priority hierarchy:
  1. Binary identity rules (~100% compliance)
  2. Explicit structural mandates (~80-90%)
  3. Quantitative thresholds (~60-70%)
  4. Judgment-based qualities (~0-10%)
  5. Emergent properties (~0%)
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Process documentation

#### E20-03: Document Reference Document Routing
- **Source:** Lines 242-251
- **Action:** Create reference document routing table:
  | Document | Who Reads It | When |
  |----------|-------------|------|
  | Mechanism Catalog | Planner (NOT builder) | Phase 4 |
  | Metaphor Derivation | Metaphor agent only | Phases 1-3 |
  | PA Protocol | Auditors only | Phase 6 |
  | Anti-Pattern List | Team-lead reference | Coordination |
  | Success Criteria Detail | Verdict synthesizer | Phase 8 |
  | Token Reference | Builder appendix | Build (on-demand) |
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Flagship pipeline documentation

### PREREQUISITES

#### P20-01: Builder Prompt Must Not Exceed 100 Lines
- **Source:** Lines 615-636
- **Action:** 100 lines (with efficient binary rules) = ~40-50 attention units = PA-05 4/4 territory. At 200 lines, surplus drops to 10-20 units. At 500+ lines, spatial composition is shed entirely.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING
- **Dependencies:** None

#### P20-02: Attention Surplus Must Be >= 30 Units for Builder
- **Source:** Lines 315-317
- **Action:** The minimum surplus for competent spatial composition is ~30 units. Derived from Middle experiment (PA-05 4/4 with ~45-50 surplus) vs Ceiling experiment (PA-05 1.5/4 with ~0 surplus).
- **Category:** PREREQUISITE
- **Priority:** BLOCKING
- **Dependencies:** A20-05 (attention audit)

#### P20-03: Preparation Outputs Must Be Routed to Correct Recipients
- **Source:** Lines 348-371
- **Action:** Rules go to builder (short). Gates go to team-lead. Vocabulary to planner. Checklists to auditor. ALL preparation output must NOT go to builder.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING

### BINARY CHECKS

#### B20-01: Builder Prompt Line Count <= 100
- **Source:** Lines 615-636
- **Category:** GATE
- **Priority:** BLOCKING

#### B20-02: Builder Prompt Attention Demand <= 50 Units
- **Source:** Lines 296-317
- **Category:** GATE
- **Priority:** BLOCKING

#### B20-03: Attention Surplus >= 30 Units
- **Source:** Line 317
- **Category:** GATE
- **Priority:** BLOCKING

#### B20-04: Pass 1 Prompt Contains Spatial Anchor Rules
- **Source:** Lines 388-393, 550-551
- **Category:** GATE
- **Priority:** BLOCKING (NEVER CUT)

#### B20-05: Builder Prompt Contains No PA Questions
- **Source:** Lines 251, 368
- **Category:** GATE
- **Priority:** HIGH

#### B20-06: Builder Prompt Contains No Anti-Patterns
- **Source:** Lines 369, 248
- **Category:** GATE
- **Priority:** HIGH

#### B20-07: Builder Prompt Contains No Success Criteria Detail
- **Source:** Lines 370, 248
- **Category:** GATE
- **Priority:** HIGH

#### B20-08: Each Pass Agent Sees <= 40 Rules
- **Source:** Line 293
- **Category:** GATE
- **Priority:** HIGH

#### B20-09: Judgment Rules Count in Builder Prompt <= 5
- **Source:** Lines 59-71 (judgment rules at ~4 units each; 5 x 4 = 20 units leaving room for binary rules)
- **Category:** GATE
- **Priority:** HIGH

### FILE MODIFICATIONS

#### F20-01: Create 80-Line Builder Prompt Template
- **Target file:** New file in flagship execution prompt set
- **Change:** Create the template per lines 376-436

#### F20-02: Create Pass-Specific Builder Prompts (3 files)
- **Target file:** 3 new prompt files
- **Change:** Pass 1 (~35 units), Pass 2 (~40 units), Pass 3 (~20 units) per lines 284-293

#### F20-03: Create Attention Audit Template
- **Target file:** Team-lead reference document
- **Change:** Add template per lines 296-317

#### F20-04: Create Auditor Prompt (Unlimited)
- **Target file:** Auditor prompt file
- **Change:** All 48 PA questions + sub-criteria + comparative framework + success criteria + anti-patterns + mechanism catalog per lines 469-477

#### F20-05: Create Reference Document Routing Specification
- **Target file:** Pipeline documentation
- **Change:** Define which documents are read by which roles per lines 242-251

### CROSS-REFERENCES

- CR20-01: References `ephemeral/ceiling-experiment/_flagship-prep/04-metacognitive-analysis.md` at line 7
- CR20-02: References `ephemeral/ceiling-experiment/_flagship-prep/01-process-retrospective.md` at line 8
- CR20-03: References `ephemeral/ceiling-experiment/_flagship-prep/05-flagship-architecture.md` at lines 9, 258
- CR20-04: References `ephemeral/ceiling-prompt-assembly/CEILING-MASTER-EXECUTION-PROMPT.md` (1,004 lines) at line 9
- CR20-05: References `ephemeral/ceiling-prompt-assembly/META-CONSTRAINT-BALANCE.md` at line 10
- CR20-06: Cross-references "binary vs judgment compliance gap" from metacognitive analysis at line 180
- CR20-07: Cross-references Middle experiment (~45 items, PA-05 4/4) at lines 591-592
- CR20-08: Cross-references Ceiling experiment (~170 items, PA-05 1.5/4) at lines 591-593
- CR20-09: Cross-references CD-006 (39/40, with messaging) at lines 592-593
- CR20-10: Cross-references Phase D (Floor, low items, varies) at line 590
- CR20-11: Cross-references "the preparation paradox" from metacognitive analysis Section C at line 341

### TESTABLE PREDICTIONS (from the document)

- TP20-01: Pass 1 builder at ~75 lines binary rules --> PA-05c PROPORTIONATE will PASS (80% confidence, line 650)
- TP20-02: Pass 1 builder exceeding ~150 lines --> PA-05c will FAIL regardless of content (85% confidence, line 651)
- TP20-03: >= 5 substantive inter-agent messages --> quality exceeds Ceiling by >= 1 PA-05 point (65% confidence, line 652)
- TP20-04: 3-pass model --> dominant failure will NOT be spatial proportion (70% confidence, line 653)
- TP20-05: All 3 passes with attention-preserving prompts --> at least one auditor says "intentional" or "designed" unprompted (60% confidence, line 654)

### KEY NUMBERS (for validation)

- Ceiling prompt: 1,004 lines, ~170 items, ~128 attention units demanded, ~100 budget = -28 deficit (lines 84-102)
- Mechanisms consumed ~53 units (~42% of budget) in Ceiling (line 129)
- Scales consumed ~36 units in Ceiling with cross-verification (line 153)
- Ideal builder prompt: ~37 units demand, ~63 surplus (line 234)
- Total flagship pipeline: ~295 units demand across 9 agents, ~830 budget, ~535 surplus (lines 519-524)
- Attention-preserving prompt = 3.5x increase in available attention for emergent quality (line 238)

---

## FILE 3: 21-beyond-flagship.md (672 lines)

### ACTION ITEMS

#### A21-01: Add Semantic Resonance Check to Programmatic Audit
- **Source:** Lines 457-458, 522-523
- **Action:** Add binary check: "At each major section boundary, do 3+ CSS properties change simultaneously?" Measure how many CSS channels change at each section boundary. Correlate with PA-05 scores.
- **Category:** ENRICHMENT
- **Priority:** HIGH (ranked #1 on frontier priority matrix, 9/10 priority score)
- **Target file:** Programmatic audit checklist
- **Dependencies:** None
- **Cross-reference:** Appendix A, line 622

#### A21-02: Add Intentionality Checklist for Pass 3
- **Source:** Lines 459-460, 524-526
- **Action:** Formalize 5 intentionality sub-dimensions from showcase archaeology as binary checks:
  1. Structural bookending (opening echoes closing)
  2. Self-reference (at least 1 element)
  3. Meta-annotation
  4. Pedagogical sequencing
  5. Cognitive mode transitions
  Build 3-5 pages with explicit intentionality protocols. Measure PA-05 impact.
- **Category:** ENRICHMENT
- **Priority:** HIGH (ranked #2, 8/10 priority score)
- **Target file:** Pass 3 builder prompt (intentionality section)
- **Dependencies:** None
- **Cross-reference:** Appendix A, line 623

#### A21-03: Add Materiality Range Check to Build Plan
- **Source:** Lines 459
- **Action:** Add quick-check: "Do element types span at least 6 points on the 1-10 materiality scale?"
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Build plan template / planner reference
- **Dependencies:** Define the 1-10 materiality scale

#### A21-04: Implement 4th Pass (Perceptual Polish) for Premium Flagship
- **Source:** Lines 82-86, 116-117
- **Action:** After Pass 3 and Ship-Ready gate, add Pass 4 that addresses every finding from dual PA. Not "fix bugs" but "elevate every borderline score." Estimated +3-5% quality in 20-30 minutes.
- **Category:** PROCESS
- **Priority:** MEDIUM (ranked #3, 7/10 priority score -- but for NEXT experiment after flagship)
- **Target file:** Flagship pipeline architecture (optional 4th pass)
- **Dependencies:** Flagship experiment completion first
- **Cross-reference:** Appendix A, line 624

#### A21-05: Define KortAI Temporal Identity
- **Source:** Lines 222-237
- **Action:** Define temporal identity constraints:
  | Property | Value |
  |----------|-------|
  | Easing family | `ease-out` and `linear` only |
  | Duration range | 100-500ms |
  | Overshoot | NEVER (no elastic, no spring, no bounce) |
  | Delay | Minimal (0-50ms stagger) |
  | Opacity transitions | 0.8 to 1.0 (not 0 to 1) |
  | Transform | `translateY` only (4-12px) |
  | Scroll behavior | Natural (no scrolljacking) |
- **Category:** ENRICHMENT
- **Priority:** MEDIUM (ranked #6 on priority matrix, 5/10)
- **Target file:** New file: temporal identity definition (within design system vocabulary)
- **Dependencies:** None (can be defined now, applied later)
- **Cross-reference:** Lines 531-532 (medium-term research item #4)

#### A21-06: Define Temporal Extensions for 5 Existing Mechanisms
- **Source:** Lines 243-250
- **Action:** Document temporal extensions for:
  1. #1 Border-weight gradient: border-left animates from 0px to final value on scroll-enter
  2. #5 Dense/Sparse alternation: sparse reveals faster (200ms), dense slower (400ms)
  3. #7 Zone backgrounds: background color transitions at 300ms on viewport enter
  4. #13 Dark header: border-bottom transitions from transparent on first scroll event
  5. #2 2-zone DNA: label zone appears first (100ms), body zone follows (200ms delay)
- **Category:** ENRICHMENT
- **Priority:** LOW (for future use, not flagship)
- **Target file:** `design-system/compositional-core/grammar/mechanism-catalog.md` (temporal extension section)
- **Dependencies:** A21-05 (temporal identity must be defined first)

#### A21-07: Design Video-Based Temporal Audit Methodology
- **Source:** Lines 253-265
- **Action:** Propose temporal audit:
  1. Team-lead records 30-second screen recording of scroll at natural speed (Playwright can do this)
  2. Temporal auditors receive video, not screenshots
  3. New PA questions: T-01 through T-04 (system consistency, timing confidence, reading order, attention-drawing)
- **Category:** TOOL
- **Priority:** LOW (not for flagship, for post-flagship)
- **Target file:** Perceptual auditing SKILL.md (temporal section)
- **Dependencies:** A21-05, A21-06

#### A21-08: Define Interactive Vocabulary Extension for Mechanisms
- **Source:** Lines 280-314
- **Action:** Define hover/expand/collapse/tab states for mechanisms using the SAME vocabulary:
  - Mechanism #1 + hover: border-left 1px (dormant) -> 3px (hover) -> 4px (active)
  - Mechanism #2 + accordion: Zone 2 starts at max-height: 0, reveals on expand
- **Category:** ENRICHMENT
- **Priority:** LOW (ranked #4 at 6/10, but for post-flagship)
- **Target file:** `design-system/compositional-core/grammar/mechanism-catalog.md`
- **Dependencies:** None conceptually, but implementation is post-flagship

#### A21-09: Create Letter-Spacing Token Set
- **Source:** Lines 62-63
- **Action:** Define finite set of letter-spacing tokens (tight/normal/expanded) with semantic mappings. Agents cannot kern, but they can apply tracking semantics.
- **Category:** ENRICHMENT
- **Priority:** LOW
- **Target file:** `design-system/compositional-core/vocabulary/tokens.css`
- **Dependencies:** None

#### A21-10: Create Background Texture Library (3-5 SVG Patterns)
- **Source:** Lines 64, 541-542
- **Action:** Create 3-5 SVG background textures with usage rules (grain, linen, paper, concrete, metal). Agents can apply textures even if they cannot design them.
- **Category:** ENRICHMENT
- **Priority:** LOW (ranked #5 at 5/10, for post-flagship)
- **Target file:** New file in design system vocabulary
- **Dependencies:** None

#### A21-11: Create Easing Curve + Duration Token Set
- **Source:** Lines 63-64, 222-237
- **Action:** Define 3-5 easing curves and 4-5 duration tokens in the design system for temporal vocabulary.
- **Category:** ENRICHMENT
- **Priority:** LOW (for post-flagship)
- **Target file:** `design-system/compositional-core/vocabulary/tokens.css`
- **Dependencies:** A21-05

#### A21-12: Collect Flagship Data for Beyond-Flagship Research
- **Source:** Lines 496-515
- **Action:** During flagship experiment, collect:
  - **Iteration data:** Per-pass timing, per-pass PA-05 quality delta, fix-cycle patterns
  - **Multi-page data:** All intermediate artifacts (metaphor, plan, restraint map, atmospheric parameters)
  - **Temporal data:** Have agent PROPOSE temporal annotations (which sections fade in, easing curves)
  - **Meta-design data:** Log every agent decision with rationale
- **Category:** PROCESS
- **Priority:** MEDIUM
- **Target file:** Flagship pipeline (data collection requirements)
- **Dependencies:** Flagship experiment architecture

#### A21-13: Add Interactive Complexity Budget to Design System
- **Source:** Lines 330-338
- **Action:** Document interaction level taxonomy:
  - Level 0 (current): No interaction, 0 CSS lines
  - Level 1 (hover): 30-50 CSS lines, LOW risk
  - Level 2 (expand/collapse): 50-80 CSS lines, MODERATE risk
  - Level 3 (tabs): 80-120 CSS lines + JS, MODERATE-HIGH risk
  - Level 4 (full): 150+ CSS lines + JS, HIGH risk
  Recommend Level 1-2 for Flagship, Level 3 selectively.
- **Category:** ENRICHMENT
- **Priority:** LOW
- **Target file:** Design system guidelines

### ENRICHMENTS NEEDED

#### E21-01: Add 9-Dimension Richness Vector Model
- **Source:** Lines 429-440
- **Action:** Define the richness vector:
  ```
  RICHNESS VECTOR = [
    Spatial coherence:    0-5
    Temporal metabolism:  0-4
    Semantic resonance:   1-5
    Narrative arc:        0-1
    Materiality gradient: 1-10
    Cognitive scaffolding:0-5
    Systemic gravity:     0-N
    Emotional topology:   1-6
    Intentionality:       0-5
  ]
  ```
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Design system guidelines / richness framework documentation

#### E21-02: Add Dimensional Tier Model
- **Source:** Lines 467-481
- **Action:** Redefine tiers by number of active dimensions (not by "more of same dimension"):
  - Floor: Spatial only
  - Middle: Spatial + Resonance CHECK
  - Ceiling: Spatial + Resonance + Materiality + Partial Narrative
  - Flagship: + Intentionality CHECK + Partial Emotion
  - Beyond: + Temporal + Gravity + Partial Cognition
- **Category:** ENRICHMENT
- **Priority:** LOW (theoretical framework, not immediately actionable)
- **Target file:** Tier model documentation

#### E21-03: Add Unified Richness Formula
- **Source:** Lines 570-577
- **Action:** Document: `Richness = f(dimensional breadth x scale depth x restraint ratio x spatial confidence)`
  - Explains all experimental data (Middle, Ceiling, Crown Jewels)
  - Predicts beyond-flagship richness = increasing dimensional breadth (not scale depth)
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Design system guidelines

#### E21-04: Document Multi-Page Pipeline Architecture
- **Source:** Lines 180-203
- **Action:** Document Phase 0 (Site Composition Plan) through Phase 3 (Cross-Page Audit) architecture for future multi-page work.
- **Category:** ENRICHMENT
- **Priority:** LOW (post-flagship)
- **Target file:** Pipeline documentation

#### E21-05: Document Autonomous Pipeline Classification
- **Source:** Lines 345-397
- **Action:** Document what CAN be automated now (tier classification, Middle production, programmatic audit, basic iteration, ship decision) vs what requires human judgment (metaphor quality, perceptual threshold, restraint judgment, cross-page coherence).
- **Category:** ENRICHMENT
- **Priority:** LOW (post-flagship)
- **Target file:** Pipeline documentation

### PREREQUISITES

#### P21-01: Flagship Must Collect Data for Beyond-Flagship Research
- **Source:** Lines 496-515
- **Action:** Flagship experiment MUST save: per-pass timing, quality deltas, intermediate artifacts, atmospheric parameters, agent decision logs, temporal annotations.
- **Category:** PREREQUISITE
- **Priority:** MEDIUM (for future work, not for flagship itself)

#### P21-02: Temporal Identity Must Be Defined Before Any Temporal Work
- **Source:** Lines 219-237
- **Action:** Before adding motion/animation to any page, the temporal identity constraints must be formally defined.
- **Category:** PREREQUISITE
- **Priority:** MEDIUM (for future work)

### BINARY CHECKS

#### B21-01: Semantic Resonance Check
- **Source:** Lines 457-458
- **Action:** At each major section boundary, do 3+ CSS properties change simultaneously? (binary yes/no)
- **Category:** GATE
- **Priority:** HIGH (immediately adoptable)

#### B21-02: Materiality Range Check
- **Source:** Lines 459
- **Action:** Do element types span at least 6 points on the 1-10 materiality scale? (binary yes/no)
- **Category:** GATE
- **Priority:** MEDIUM

#### B21-03: Intentionality Checks (3 sub-checks)
- **Source:** Lines 460
- **Action:** Does page contain: (a) structural bookending? (b) self-reference? (c) meta-annotation? Each binary.
- **Category:** GATE
- **Priority:** HIGH (for Pass 3)

#### B21-04: 4-Pass Maximum for Standard Flagship
- **Source:** Lines 116-126
- **Action:** 3 passes for standard flagship. 4 passes for premium. 5-6 only with specific justification.
- **Category:** GATE
- **Priority:** MEDIUM

#### B21-05: Interaction Level <= 2 for Flagship Pages
- **Source:** Lines 338
- **Action:** Level 1-2 (hover + accordion) for Flagship. Level 3 selectively. Level 4 is beyond document paradigm.
- **Category:** GATE
- **Priority:** LOW (for future work)

### FILE MODIFICATIONS

#### F21-01: Add Semantic Resonance to Programmatic Audit
- **Target file:** Programmatic audit checklist
- **Change:** Add "3+ CSS channels change at each major section boundary" check

#### F21-02: Add Intentionality Sub-Dimensions to Pass 3 Builder Prompt
- **Target file:** Pass 3 prompt
- **Change:** Add 5 binary intentionality checks (bookending, self-reference, meta-annotation, pedagogical sequencing, cognitive mode transitions)

#### F21-03: Add Temporal Identity to Design System Vocabulary
- **Target file:** `design-system/compositional-core/vocabulary/tokens.css` or new temporal identity file
- **Change:** Define easing, duration, transform, opacity constraints for motion

#### F21-04: Add Temporal Extensions to Mechanism Catalog
- **Target file:** `design-system/compositional-core/grammar/mechanism-catalog.md`
- **Change:** Add temporal extension for each spatial mechanism

#### F21-05: Add Letter-Spacing Tokens to Vocabulary
- **Target file:** `design-system/compositional-core/vocabulary/tokens.css`
- **Change:** Add tight/normal/expanded letter-spacing tokens with semantic mappings

#### F21-06: Add Richness Vector Model to Guidelines
- **Target file:** `design-system/compositional-core/guidelines/semantic-rules.md`
- **Change:** Add 9-dimension richness vector definition

### CROSS-REFERENCES

- CR21-01: References `01-beyond-five-scales.md` (405 lines) at line 7
- CR21-02: References `02-alternative-mental-models.md` (409 lines) at line 8
- CR21-03: References `05-cross-domain-theory.md` (466 lines) at line 9
- CR21-04: References `05-flagship-architecture.md` (624 lines) at line 10
- CR21-05: References `TIER-COMPARISON-MATRIX.md` (1,047 lines) at line 11
- CR21-06: References `03-diminishing-returns.md` at line 12
- CR21-07: References `06-adversarial-anti-scale.md` at line 13
- CR21-08: References `04-showcase-archaeology.md` (267 lines) at line 14
- CR21-09: Cross-references Middle experiment (2 scales, PA-05 4/4) at lines 419, 579
- CR21-10: Cross-references Ceiling experiment (4 scales, PA-05 1.5/4) at lines 419, 580
- CR21-11: Cross-references Crown Jewels (DD-006 36/40, CD-006 39/40) at line 581
- CR21-12: Cross-references "beyond-five-scales" findings (5 = mathematical ceiling) at line 421
- CR21-13: Cross-references "7 richness dimensions" from alternative mental models at lines 423, 562
- CR21-14: Cross-references showcase archaeology "5 intentionality sub-dimensions" at lines 460, 525
- CR21-15: Cross-references 3-pass flagship architecture from 05-flagship-architecture.md at lines 72-78

### RESEARCH AGENDA (from Beyond-Flagship)

#### Near-Term (0-3 months, current architecture):
1. Semantic resonance formalization (line 522)
2. Intentionality checklist validation (line 524)
3. 4-pass iteration experiment (line 527)

#### Medium-Term (3-12 months, infrastructure changes):
4. Temporal identity definition (line 531)
5. Multi-page pilot (3 pages: 1 Flagship + 2 Middle) (line 533)
6. Autonomous Middle pipeline (10 real content pages) (line 535)

#### Long-Term (12+ months, capability advances):
7. Cognitive scaffolding formalization (line 539)
8. Material texture library (5-8 SVG patterns) (line 541)
9. Interactive vocabulary extension (line 543)

### 10-YEAR VISION (for reference, not actionable)
- Year 1: Flagship + intentionality + multi-page pilot + temporal identity (line 649)
- Year 2: Multi-page systems + temporal layer + interactive elements (line 651)
- Year 3: Autonomous Middle pipeline at 50+ pages (line 653)
- Year 5: Full design system site (20-50 pages, 4 tiers, cross-page narrative) (line 655)
- Year 7: Content-change-responsive rebuilds (line 657)
- Year 10: System designs design systems (line 659)

---

## SUMMARY STATISTICS

### Total Extracted Items by Category

| Category | File 19 | File 20 | File 21 | Total |
|----------|---------|---------|---------|-------|
| ACTION ITEMS | 7 | 11 | 13 | **31** |
| ENRICHMENTS | 7 | 3 | 5 | **15** |
| PREREQUISITES | 1 | 3 | 2 | **6** |
| BINARY CHECKS | 3 | 9 | 5 | **17** |
| FILE MODIFICATIONS | 3 | 5 | 6 | **14** |
| CROSS-REFERENCES | 10 | 11 | 15 | **36** |
| TESTABLE PREDICTIONS | 4 | 5 | 0 | **9** |
| **TOTAL** | **35** | **47** | **46** | **128** |

### BLOCKING Items (Must Resolve Before Flagship)

1. **A19-01:** Run constraint pressure experiment (2 builds, ~2.5 hrs) -- determines flagship prompt approach
2. **A20-01:** Create 80-line builder prompt template
3. **A20-02:** Add 3 binary spatial anchor rules to builder prompt
4. **A20-03:** Route preparation outputs to correct recipients (not all to builder)
5. **A20-04:** Create phase-specific prompts (per-pass rule allocation)
6. **P19-01:** Constraint pressure experiment result required before flagship prompt finalization
7. **P20-01:** Builder prompt must not exceed 100 lines
8. **P20-02:** Attention surplus must be >= 30 units for builder
9. **P20-03:** Preparation outputs must be routed to correct recipients

### HIGH Priority Items

1. **A19-02:** Define 10 additional value-restriction prohibitions
2. **A19-03:** Add 4 value-restriction prohibitions to flagship prompt
3. **A19-04:** Reduce flagship mechanism target from 16-18 to 12-14
4. **A19-05:** Implement 3-pass as attention management (2 scales per pass)
5. **A19-07:** Redefine flagship as max intentionality + max constraint pressure + 3-4 scales
6. **A20-05:** Implement attention audit template before sending builder prompts
7. **A20-06:** Implement rule triage order when budget exceeded
8. **A20-07:** Create unlimited auditor prompts
9. **A20-08:** Replace explanations with exemplars in builder prompt
10. **A20-09:** Frame all constraints as negative rules (boundary checks)
11. **A20-10:** Implement handoff format as artifacts, not instructions
12. **A21-01:** Add semantic resonance check to programmatic audit
13. **A21-02:** Add intentionality checklist for Pass 3
14. **E20-03:** Document reference document routing
15. **B19-02:** Constraint pressure not exceeding 70%
16. **B19-03:** Minimum 5 surviving channels

### Items Achievable in NEXT Experiment (Zero Infrastructure Changes)
1. Semantic resonance checks (A21-01)
2. Intentionality protocol (A21-02)
3. 4th polish pass (A21-04)
4. 80-line builder prompt (A20-01)
5. Spatial anchor rules (A20-02)
6. Phase-specific prompts (A20-04)
7. Attention audit (A20-05)
