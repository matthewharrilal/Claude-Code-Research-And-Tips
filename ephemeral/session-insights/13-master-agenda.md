# Master Execution Agenda: Complete Ordered Work Plan

**Date:** 2026-02-15
**Author:** roadmap-builder (skill-enrichment-prep team)
**Purpose:** Comprehensive, dependency-aware, ordered execution plan of ALL remaining work
**User Decision:** Skill enrichment FIRST, Middle-tier experiment SECOND, then evaluate

---

## EXECUTIVE SUMMARY

**Current State:** Phase D COMPLETE (CONDITIONAL PASS, Variant B best: 18/19 compliance, 4/5 novelty). Richness + rigidity research COMPLETE (11 agents, 11 reports, tier model established, modification recommendations ready). Phase E NOT YET STARTED.

**Total Work Items:** 58 items organized into 8 phases
**Critical Path:** Pre-requisites (6 items) → Wave 1 skill mods (7 items) → Middle build → Wave 2 mods → evaluation
**Estimated Timeline:** 15-25 hours total across all phases

**Key Dependencies:**
- **BLOCKING:** 3 staleness fixes + 2 prerequisite tasks MUST complete before skill modifications
- **SEQUENTIAL:** Wave 1 → Middle build → Wave 2 → Ceiling build → Wave 3
- **PARALLEL:** Documentation enrichment can run alongside experiments

---

## TABLE OF CONTENTS

1. [Phase 0: Pre-Requisites (BLOCKING)](#phase-0-pre-requisites-blocking)
2. [Phase 1: Wave 1 Skill Modifications](#phase-1-wave-1-skill-modifications)
3. [Phase 2: Middle-Tier Experiment](#phase-2-middle-tier-experiment)
4. [Phase 3: Documentation Enrichment - Priority 1](#phase-3-documentation-enrichment---priority-1)
5. [Phase 4: Wave 2 Skill Modifications](#phase-4-wave-2-skill-modifications)
6. [Phase 5: Ceiling-Tier Experiment](#phase-5-ceiling-tier-experiment)
7. [Phase 6: Documentation Enrichment - Priority 2](#phase-6-documentation-enrichment---priority-2)
8. [Phase 7: Wave 3 Skill Modifications](#phase-7-wave-3-skill-modifications)
9. [Phase 8: Long-Term / Deferred](#phase-8-long-term--deferred)

---

## PHASE 0: PRE-REQUISITES (BLOCKING)

**Purpose:** Resolve Type 5 blockers, fix staleness, prepare infrastructure
**Must Complete Before:** Any skill modifications
**Estimated Time:** 2-3 hours
**Scope:** SMALL (surgical fixes)

---

### 0.1 STALENESS FIXES (3 items — BLOCKING)

**Source:** 09-adversarial-doc-review.md (Top 3 blocking issues)
**Dependencies:** None
**Can Run In Parallel:** Yes

#### 0.1.1 Fix design-system/CLAUDE.md Phase D Status

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/CLAUDE.md`
- [ ] **Location:** Line 9
- [ ] **Current:** "Phase D (NEXT -- not yet started)"
- [ ] **Replace With:** "Phase D (COMPLETE -- CONDITIONAL PASS, 2026-02-15, Variant B best: 18/19 compliance, 4/5 novelty)"
- [ ] **Scope:** 1 line change
- [ ] **Success:** New agents see Phase D is complete

#### 0.1.2 Fix pipeline/05-COMPLETE-ROADMAP.md Phase D Status

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/05-COMPLETE-ROADMAP.md`
- [ ] **Location:** Lines 40-59
- [ ] **Current:** Shows Phase D as future work
- [ ] **Replace With:** Phase D section showing COMPLETE status with verdict, date, 5 variants tested, Variant B selected
- [ ] **Add:** Phase E section showing NOT YET STARTED with tier model approach
- [ ] **Scope:** ~30 line modification
- [ ] **Success:** Roadmap reflects current state

#### 0.1.3 Reduce MEMORY.md to Under 200 Lines

- [ ] **File:** `/Users/spacewizardmoneygang/.claude/projects/-Users-spacewizardmoneygang-Desktop-Claude-Research-And-Tips/memory/MEMORY.md`
- [ ] **Current:** 389 lines (auto-truncated at 200, losing Phase E status and modification recs)
- [ ] **Action:** Compress phase history, move detailed records to `memory/phase-history.md` (overflow file)
- [ ] **Target:** <190 lines (buffer for future updates)
- [ ] **Priority Sections to Keep:**
  - User preferences
  - Current state (Phase D complete, Phase E pending)
  - Richness + rigidity findings (tier model, modification recs)
  - Strategic discoveries (binary rules, meta-to-output ratio)
  - Key file paths
- [ ] **Sections to Compress/Move:**
  - Phase history (compress to 1-2 lines each, full details in overflow)
  - Agent team management (move details to overflow, keep principles)
- [ ] **Scope:** ~60% compression
- [ ] **Success:** MEMORY.md loads completely, critical info present

---

### 0.2 TYPE 5 BLOCKER RESOLUTION (2 items — BLOCKING)

**Source:** 02-rigidity-deep-dive.md, 08-skill-enrichment-plan.md
**Dependencies:** None
**Can Run In Parallel:** Yes

#### 0.2.1 Add Category Labels to Mechanism Catalog

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`
- [ ] **Problem:** Per-category minimum (M1) requires mechanisms to be labeled by category (Spatial, Temporal, Material, Behavioral, Relational)
- [ ] **Current:** 18 mechanisms listed without explicit category tags
- [ ] **Action:** Add category label to each mechanism heading
- [ ] **Format Example:**
  ```markdown
  ### 1. Border-Weight Gradient [MATERIAL + RELATIONAL]
  ### 4. Spacing Compression [SPATIAL + RELATIONAL]
  ### 7. Zone Background Differentiation [SPATIAL + MATERIAL]
  ```
- [ ] **Multi-Category Note:** Some mechanisms serve multiple categories — that's fine, tag all applicable
- [ ] **Scope:** 18 mechanism headings + summary table at top
- [ ] **Success:** Builder can scan catalog and identify 1+ mechanism per category

#### 0.2.2 Create Category Selection Flow

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`
- [ ] **Location:** After line 49 (mechanism extraction method)
- [ ] **Action:** Add "Per-Category Selection Protocol" section
- [ ] **Content:**
  - 5-category table with category definitions
  - Selection flow: "For each category, ask: Does my content NEED this type of mechanism?"
  - Examples of category-to-content mapping
- [ ] **Draft:** Use 08-skill-enrichment-plan.md M1 section as template
- [ ] **Scope:** ~40 lines
- [ ] **Success:** Builder understands how to select across categories

---

### 0.3 INFRASTRUCTURE (1 item)

#### 0.3.1 Create Tier Quick-Start Template

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/middle-tier-template.md`
- [ ] **Purpose:** Self-contained builder guide for Middle-tier pages
- [ ] **Source:** 12-middle-tier-quickstart.md (already drafted)
- [ ] **Action:** Review and finalize as canonical Middle-tier reference
- [ ] **Scope:** Template already exists, just validate completeness
- [ ] **Success:** Builder can follow template with zero external context

---

## PHASE 1: WAVE 1 SKILL MODIFICATIONS

**Purpose:** Apply highest-leverage, lowest-risk modifications to tension-composition skill
**Dependencies:** Phase 0 complete
**Estimated Time:** 4-6 hours
**Scope:** MEDIUM (4 skill modifications + verification)

**Rationale:** Wave 1 changes are ENABLING (fractal gate, per-category minimum) and DEFENSIVE (container width, domain family check). They prepare the skill for Middle-tier experiment without adding judgment-based constraints.

---

### 1.1 SKILL MODIFICATIONS (4 items — SEQUENTIAL)

**Source:** 08-skill-enrichment-plan.md
**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Must Execute In Order:** M2 → M3 → M5 → M1 (dependencies)

#### 1.1.1 M2: Promote Fractal Consistency to GATE

- [ ] **File:** `~/.claude/skills/tension-composition/SKILL.md`
- [ ] **Location:** Lines 1071-1080 (current Step 4.7 check)
- [ ] **Type:** MODIFY (10-line check → 60-line gate)
- [ ] **Action:** Replace checklist with mandatory table deliverable
- [ ] **Content:**
  - Scale coverage table (Navigation/Page/Section/Component/Character)
  - Tier-calibrated requirements (Floor exempt, Middle 2 scales, Ceiling 4, Flagship 5)
  - Passing/failing criteria
  - Lock-in confirmation
- [ ] **Full Text:** See 08-skill-enrichment-plan.md lines 103-172
- [ ] **Risk:** LOW (enabling constraint, content-agnostic)
- [ ] **Success:** Gate enforces fractal self-similarity without prescribing pattern

#### 1.1.2 M3: Add Container Width NON-NEGOTIABLE

- [ ] **File:** `~/.claude/skills/tension-composition/SKILL.md`
- [ ] **Location:** Phase 4.0 guardrails section (lines 716-756)
- [ ] **Type:** NEW (binary rule)
- [ ] **Action:** Insert container width table + CRITICAL PRINCIPLE section
- [ ] **Content:**
  - Guardrail table: 940-960px container width, NEVER override
  - Correct/wrong example (internal padding vs external width reduction)
  - Priority order: container width > metaphor fidelity > aesthetics
- [ ] **Full Text:** See 08-skill-enrichment-plan.md lines 174-226
- [ ] **Risk:** NONE (binary rule preventing known failure)
- [ ] **Success:** 100% compliance on container width in all future builds

#### 1.1.3 M5: Add Tier-Based Pipeline Selection

- [ ] **File:** `~/.claude/skills/tension-composition/SKILL.md`
- [ ] **Location:** Phase 0 (Content Assessment), after Step 0C
- [ ] **Type:** NEW (routing logic)
- [ ] **Action:** Insert Step 0D (tier classification + pipeline routing)
- [ ] **Content:**
  - Content classification questions (word count, structural tension, audience)
  - Addition Test formal definition
  - Tier routing table (Floor/Middle/Ceiling/Flagship)
  - Pipeline branch instructions (Floor: assembly only, Middle: skip Phases 1-3, Ceiling: full pipeline, Flagship: full + audit)
- [ ] **Full Text:** See 08-skill-enrichment-plan.md lines 288-299 (first 100 lines shown)
- [ ] **Dependencies:** M2, M3 complete (references fractal gate + container width)
- [ ] **Risk:** LOW-MODERATE (new routing, may need iteration)
- [ ] **Success:** Builder knows which pipeline to follow based on content

#### 1.1.4 M1: Replace "Sample 2-4" with Per-Category Minimum

- [ ] **File:** `~/.claude/skills/tension-composition/SKILL.md`
- [ ] **Location:** Lines 783-787 (Phase 4 mechanism selection)
- [ ] **Type:** MODIFY (2 lines → 20 lines)
- [ ] **Action:** Replace "sample 2-4 mechanisms" with per-category protocol
- [ ] **Content:**
  - Read full catalog (18 mechanisms)
  - Per-category deployment table (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+)
  - Justification requirement (EACH deployed: why fits, 3+ rejected: why don't fit)
  - Natural landing (5-10 Middle, 8-12 Ceiling, 12-15 Flagship)
- [ ] **Full Text:** See 08-skill-enrichment-plan.md lines 62-101
- [ ] **Dependencies:** 0.2.1 complete (category labels exist), M2-M3-M5 complete (tier context needed)
- [ ] **Risk:** LOW (enabling, not limiting)
- [ ] **Success:** Builder deploys across all 5 categories without hitting raw count target

---

### 1.2 VERIFICATION (3 items)

#### 1.2.1 Syntax Check

- [ ] **Action:** Read modified SKILL.md in full
- [ ] **Check:** No broken markdown, section references intact, phase numbers sequential
- [ ] **Scope:** 10 min review
- [ ] **Success:** File parses correctly

#### 1.2.2 Cross-Reference Check

- [ ] **Action:** Verify all internal references still valid
- [ ] **Check:** Phase 3.5 references mechanism catalog, Phase 4.7 references tier model, Phase 0D references guardrails
- [ ] **Scope:** 15 min
- [ ] **Success:** No broken cross-references

#### 1.2.3 Diff Documentation

- [ ] **Action:** Create `ephemeral/skill-modifications/wave-1-diff.md`
- [ ] **Content:** Document all 4 changes with before/after, rationale, line numbers
- [ ] **Purpose:** Audit trail for future review
- [ ] **Scope:** 30 min
- [ ] **Success:** Changes are traceable

---

## PHASE 2: MIDDLE-TIER EXPERIMENT

**Purpose:** Build the MOST IMPORTANT experiment — validate tier model, test mechanism deployment, measure richness gain
**Dependencies:** Phase 1 complete
**Estimated Time:** 2-3 hours (build + audit + documentation)
**Scope:** MEDIUM (1 HTML page + perceptual audit + analysis)

**Critical Hypothesis:** Does an exceptional Middle-tier page achieve the "place" feeling without metaphor derivation?

---

### 2.1 CONTENT SELECTION

#### 2.1.1 Choose Experimental Content

- [ ] **Criteria:**
  - 800-1,200 words (substantive enough to need structure)
  - Tutorial or guide format (narrative flow, sequential steps)
  - Contains code examples (tests mechanism #17)
  - Contains callouts/tips (tests mechanism #2)
  - NOT the same content as Variant B (we need fresh test)
- [ ] **Candidate Sources:**
  - Real KortAI tutorial (if one exists)
  - Synthetic tutorial content generated for this test
  - Repurposed technical guide from external source
- [ ] **Success:** Content selected, ready to design

---

### 2.2 BUILD

#### 2.2.1 Build Middle-Tier Page

- [ ] **Builder Agent:** Use modified skill (Wave 1 changes applied)
- [ ] **Tier Target:** Middle (8-10 mechanisms, no metaphor)
- [ ] **Pipeline:** Skip Phases 1-3 per M5 routing, go directly to Phase 4 with CRESCENDO pattern
- [ ] **Always-Load:** prohibitions.md + tokens.css (527 lines mandatory)
- [ ] **Container Width:** 940-960px (M3 enforced)
- [ ] **Mechanism Selection:** Use M1 protocol (1+ per category, justify each)
- [ ] **Expected Duration:** 70-100 min
- [ ] **Output File:** `ephemeral/phase-e-middle-experiment/middle-tier-v1.html`
- [ ] **Success:** Page built, renders correctly at 1440px and 768px

---

### 2.3 MEASUREMENT

#### 2.3.1 Programmatic Checks

- [ ] **Run Auditor Against:**
  - Soul compliance (border-radius: 0, box-shadow: none, palette correctness)
  - Guardrails (container width >= 940px, padding >= 32px, CPL 45-80)
  - Token compliance (% of CSS values from tokens.css)
- [ ] **Tool:** Playwright MCP or custom audit script
- [ ] **Output:** `ephemeral/phase-e-middle-experiment/programmatic-audit.md`
- [ ] **Success:** Compliance score documented

#### 2.3.2 Mechanism Count Analysis

- [ ] **Count:**
  - How many mechanisms deployed (target: 8-10)
  - Category coverage (MUST be all 5 categories per M1)
  - Which mechanisms used
- [ ] **Compare Against:** Variant B (7 mechanisms, 2 categories)
- [ ] **Output:** `ephemeral/phase-e-middle-experiment/mechanism-analysis.md`
- [ ] **Success:** Mechanism breadth documented

#### 2.3.3 Perceptual Audit (Mode 2)

- [ ] **Tool:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- [ ] **Mode:** Mode 2 (PA-01 through PA-05 at 2 viewports)
- [ ] **Viewports:** 1440px and 768px
- [ ] **Questions:**
  - PA-01: Container-content ratio (is 940-960px harmonious?)
  - PA-02: Density rhythm (does padding variation create intentional pacing?)
  - PA-03: Zone differentiation (do section backgrounds create visual sections?)
  - PA-04: Spatial variety (do grid/flex layouts break block stacking?)
  - PA-05: Engagement threshold (does this feel designed or formatted?)
- [ ] **Output:** `ephemeral/phase-e-middle-experiment/perceptual-audit.md`
- [ ] **Success:** All 5 questions answered at both viewports

#### 2.3.4 Structural Metrics

- [ ] **Measure:**
  - CSS line count (target: 350-500)
  - Custom properties count
  - Grid/flex layout count (target: 2-3)
  - Pseudo-element count (target: 1-3)
  - Responsive breakpoint count (target: 2-3)
- [ ] **Output:** `ephemeral/phase-e-middle-experiment/structural-metrics.md`
- [ ] **Success:** Metrics confirm Middle-tier profile

---

### 2.4 EVALUATION

#### 2.4.1 Compare Against Variant B

- [ ] **Side-by-Side Comparison:**
  - Variant B: 7 mechanisms, 2 categories, 5/44 technique families
  - Middle v1: [actual] mechanisms, [actual] categories, [actual] technique families
- [ ] **Perceptual Comparison:**
  - Which feels MORE designed?
  - Which has MORE spatial variety?
  - Which achieves engagement threshold?
- [ ] **Output:** `ephemeral/phase-e-middle-experiment/variant-b-comparison.md`
- [ ] **Success:** Richness gain quantified

#### 2.4.2 Answer THE Question

- [ ] **The Question:** Does Middle achieve the "place" feeling without metaphor?
- [ ] **Evidence:**
  - Engagement threshold question (PA-05): YES / PARTIAL / NO
  - Comparison test: better than Variant B? YES / MARGINAL / NO
  - Spatial atmosphere: "want to spend time here"? YES / SOMEWHAT / NO
- [ ] **Verdict:**
  - **SUCCESS:** Middle is sufficient for 40-50% of pages, Ceiling scope narrows
  - **PARTIAL:** Middle is "designed" but lacks atmosphere, some content needs Ceiling
  - **FAILURE:** Middle feels formatted not designed, metaphor required for engagement
- [ ] **Output:** `ephemeral/phase-e-middle-experiment/VERDICT.md`
- [ ] **Success:** Central hypothesis tested, verdict documented

---

## PHASE 3: DOCUMENTATION ENRICHMENT - PRIORITY 1

**Purpose:** Apply HIGH-priority documentation improvements (insight integration, provenance clarity)
**Dependencies:** None (can run in parallel with Phase 2)
**Estimated Time:** 3-4 hours
**Scope:** LARGE (8 documentation additions)

**Source:** 06-enrichment-actions.md Phase 1+2 HIGH-priority items

---

### 3.1 VOCABULARY-VS-LIBRARY ENRICHMENT (2 items)

#### 3.1.1 Add Extraction Provenance to Mechanism Catalog

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`
- [ ] **Location:** After line 49 (end of "Extraction Method" section)
- [ ] **Type:** NEW SECTION
- [ ] **Content:** "Provenance and Family Resemblance" (~90 lines)
  - Where mechanisms come from (extracted from showcase pages)
  - Family resemblance is expected (structural similarity = identity, not convergence)
  - Distinction: family resemblance (good) vs template convergence (bad)
  - Validation test (same mechanism, different values/metaphor = vocabulary usage)
- [ ] **Full Text:** See 06-enrichment-actions.md lines 43-91
- [ ] **Priority:** HIGH
- [ ] **Success:** Builders understand mechanisms carry showcase DNA by design

#### 3.1.2 Add "Why Both Layers Exist" to Case Studies README

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/README.md`
- [ ] **Location:** After line 309 (end of "Why This Layer Exists")
- [ ] **Type:** NEW SECTION
- [ ] **Content:** "Why BOTH Grammar and Case Studies?" (~120 lines)
  - Two-layer architecture (grammar = tools, case studies = usage examples)
  - What happens with only grammar (no usage context)
  - What happens with only case studies (template copying)
  - How layers work together (intended workflow)
  - Abstraction relationship (showcase → case study → catalog → builder)
- [ ] **Full Text:** See 06-enrichment-actions.md lines 93-200+
- [ ] **Priority:** HIGH
- [ ] **Success:** Builders understand why both layers are necessary

---

### 3.2 TIER DISTINCTION ENRICHMENT (2 items)

#### 3.2.1 Add Individual→Combination→Multi Framing to ENTRY-POINT

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/03-ENTRY-POINT.md`
- [ ] **Location:** After tier model table (line 41)
- [ ] **Type:** NEW SUBSECTION
- [ ] **Content:** "How Tiers Differ Beyond Count" (~60 lines)
  - Middle: individual mechanism deployment (each serves different aspect)
  - Ceiling: mechanism combination (multiple mechanisms encode SAME semantic)
  - Flagship: multi-pattern composition (CRESCENDO + BENTO with typed transitions)
  - Concrete examples from 04-tier-architecture.md
- [ ] **Source:** 04-tier-architecture.md Part 1
- [ ] **Priority:** HIGH
- [ ] **Success:** Tier distinction is structural, not just numerical

#### 3.2.2 Add Mechanism Combination Guidance to Mechanism Catalog

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`
- [ ] **Location:** New section after category labels (depends on 0.2.1)
- [ ] **Type:** NEW SECTION
- [ ] **Content:** "Mechanism Combination Patterns" (~80 lines)
  - What is a combination (multiple mechanisms encode same semantic dimension)
  - OD-004 example (border-weight + spacing + zone backgrounds all encode confidence)
  - When to combine vs when to deploy individually
  - Natural combination clusters (which mechanisms reinforce well)
- [ ] **Source:** 04-tier-architecture.md section 1.2, 05-extraction-chain.md section 2
- [ ] **Priority:** HIGH
- [ ] **Success:** Builders understand combination-level deployment

---

### 3.3 FRESH-EYES CONFUSION RESOLUTION (4 items)

**Source:** 10-fresh-eyes-review.md
**Priority:** HIGH (builder onboarding clarity)

#### 3.3.1 Add Acronym Legend to ENTRY-POINT

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/03-ENTRY-POINT.md`
- [ ] **Location:** After "WHERE WE ARE" section (line 10)
- [ ] **Type:** NEW BOX
- [ ] **Content:** Quick-reference acronym table
  - DD/OD/AD/CD = Density/Offset/Alignment/Combination Dimensions
  - PA = Perceptual Audit
  - CPL = Characters Per Line
  - CRESCENDO/F-PATTERN/BENTO/PULSE = density rhythm patterns
- [ ] **Scope:** ~15 lines
- [ ] **Success:** No unexplained acronyms in entry point

#### 3.3.2 Define Core Terms Before First Use

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/03-ENTRY-POINT.md`
- [ ] **Action:** Add inline definitions for:
  - Phase D (first mention line 9): "(pipeline configuration validation, 5 variants tested)"
  - Variant B (first mention line 13): "(weak permission configuration from Phase D)"
  - Addition Test (first mention line 25): "(can existing components fulfill this content? YES=Track 1, NO=Track 2)"
- [ ] **Scope:** 3 inline definitions
- [ ] **Success:** No undefined terms on first encounter

#### 3.3.3 Expand Always-Load Protocol in ENTRY-POINT

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/03-ENTRY-POINT.md`
- [ ] **Location:** Section 2 "What NOT to Do" item 2 (line 106)
- [ ] **Current:** "Do NOT skip the always-load protocol. EVERY agent MUST read prohibitions.md + tokens.css"
- [ ] **Expand To:**
  ```markdown
  **Do NOT skip the always-load protocol (527 lines mandatory overhead):**
  1. Read `prohibitions.md` (353 lines) — 22 prohibitions, focus on 8 ABSOLUTE (border-radius: 0, box-shadow: none, etc.)
  2. Read `tokens.css` (174 lines) — 65 tokens in :root block (colors, spacing, typography)
  3. This MUST happen BEFORE any design work. Track 1's instant fail in Phase D was caused by skipping this.
  ```
- [ ] **Scope:** 5 lines → 8 lines with specifics
- [ ] **Success:** Protocol is concrete, not abstract

#### 3.3.4 Add Name Test + Transfer Test Definitions to ENTRY-POINT

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/03-ENTRY-POINT.md`
- [ ] **Location:** Section 1 "Key Context" item 2 (line 21, after first mention)
- [ ] **Action:** Add inline definition box
- [ ] **Content:**
  ```markdown
  **Name Test:** Remove the metaphor name. Does the description still make sense?
  - "Border-weight encodes hierarchy" — YES, transferable mechanism
  - "4px bedrock border" — NO, metaphor-specific implementation

  **Transfer Test:** Does the technique produce DIFFERENT CSS values with a different metaphor?
  - Spacing compression + geological metaphor = 80px topsoil / 16px bedrock
  - Spacing compression + lab metaphor = 64px safety / 24px data
  - SAME mechanism, DIFFERENT values = vocabulary, not template
  ```
- [ ] **Scope:** ~12 lines
- [ ] **Success:** Tests are concrete, immediately usable

---

## PHASE 4: WAVE 2 SKILL MODIFICATIONS

**Purpose:** Apply modifications informed by Middle-tier experiment results
**Dependencies:** Phase 2 complete (Middle experiment evaluated)
**Estimated Time:** 2-3 hours
**Scope:** MEDIUM (2 skill mods + 1 PA mod)

**Rationale:** Wave 2 changes depend on experiment feedback. M6 (semantic value justification) and M7 (combination guidance) should only be applied AFTER seeing how builders deploy mechanisms in practice.

---

### 4.1 EVALUATE MIDDLE EXPERIMENT FIRST

#### 4.1.1 Review Middle Experiment Verdict

- [ ] **Action:** Read `ephemeral/phase-e-middle-experiment/VERDICT.md`
- [ ] **Questions:**
  - Did M1 (per-category minimum) work as intended? (builder deployed across all 5 categories?)
  - Did M2 (fractal gate) produce multi-scale coherence?
  - Did M3 (container width) achieve 100% compliance?
  - Did M5 (tier routing) correctly route to Middle pipeline?
  - What GAPS appeared that Wave 2 should address?
- [ ] **Output:** Decision on whether to apply M6, M7 as-is or modify
- [ ] **Success:** Informed decision, not blind application

---

### 4.2 SKILL MODIFICATIONS (2 items)

#### 4.2.1 M6: Add Semantic Value Justification

- [ ] **File:** `~/.claude/skills/tension-composition/SKILL.md`
- [ ] **Location:** Phase 4 (Mechanism Extraction), after mechanism selection
- [ ] **Type:** NEW STEP
- [ ] **Condition:** Apply ONLY IF Middle experiment showed arbitrary value selection
- [ ] **Content:** Add Step 4.X "Semantic Value Justification"
  - For each custom CSS value (padding, border-width, spacing), document WHY that value
  - Not "because it looks good" but "because this value ENCODES [semantic dimension]"
  - Example: 48px padding (not 40px, not 56px) because 48px = 3× base unit = semantic "chapter boundary"
- [ ] **Source:** 08-skill-enrichment-plan.md M6 section
- [ ] **Scope:** ~40 lines
- [ ] **Risk:** MODERATE (could become busywork if not properly scoped)
- [ ] **Success:** Values have semantic rationale, not aesthetic guessing

#### 4.2.2 M7: Add Mechanism Combination Guidance

- [ ] **File:** `~/.claude/skills/tension-composition/SKILL.md`
- [ ] **Location:** Phase 4, after M1 mechanism selection
- [ ] **Type:** NEW STEP
- [ ] **Condition:** Apply ONLY IF Middle experiment showed mechanisms deployed individually without reinforcement
- [ ] **Content:** Add Step 4.Y "Mechanism Combination Check"
  - Ask: "Do any of my mechanisms encode the SAME semantic dimension?"
  - If YES: Consider combining them (border-weight + spacing + background all encode confidence)
  - If NO: Individual deployment is fine (each serves different aspect)
  - Provide natural combination clusters from research
- [ ] **Source:** 04-tier-architecture.md section 1.2, 08-skill-enrichment-plan.md M7
- [ ] **Scope:** ~50 lines
- [ ] **Risk:** MODERATE (could prescribe combinations, reducing creativity)
- [ ] **Success:** Builders understand combination-level deployment option

---

### 4.3 PA SKILL MODIFICATION (1 item)

#### 4.3.1 M9: Add Semantic Value Audit Question

- [ ] **File:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- [ ] **Location:** Mode 2 questions (Tier 2)
- [ ] **Type:** NEW QUESTION
- [ ] **Content:** Add PA-06 (Semantic Values)
  - "For 3 custom CSS values (padding, border-width, spacing), can the builder explain WHY that specific value?"
  - Passing: Value has semantic rationale (48px = 3× base = chapter boundary)
  - Failing: Value is arbitrary (48px because it looked better than 40px)
- [ ] **Source:** 08-skill-enrichment-plan.md M9 section
- [ ] **Scope:** ~20 lines
- [ ] **Success:** PA enforces semantic value discipline

---

## PHASE 5: CEILING-TIER EXPERIMENT

**Purpose:** Validate metaphor-to-CSS gap, test full pipeline with Wave 1+2 modifications
**Dependencies:** Phase 4 complete
**Estimated Time:** 4-6 hours (build + audit + comparison)
**Scope:** LARGE (full pipeline, metaphor derivation, audit/fix cycle)

**Critical Hypothesis:** Does metaphor add enough value to justify doubling the build time vs Middle?

---

### 5.1 BUILD

#### 5.1.1 Build Ceiling-Tier Page (SAME Content as Middle)

- [ ] **Content:** Use the SAME content as Phase 2 Middle experiment
- [ ] **Tier Target:** Ceiling (12-15 mechanisms, full metaphor derivation)
- [ ] **Pipeline:** Full Phases 1-5 per M5 routing
- [ ] **Always-Load:** prohibitions.md + tokens.css
- [ ] **Modifications Active:** M1-M7 (all Wave 1+2 changes)
- [ ] **Expected Duration:** 150-220 min
- [ ] **Output File:** `ephemeral/phase-e-ceiling-experiment/ceiling-tier-v1.html`
- [ ] **Success:** Page built with genuine metaphor, renders correctly

---

### 5.2 MEASUREMENT

#### 5.2.1 Programmatic + Structural Checks

- [ ] **Same as Phase 2.3.1 + 2.3.4**
- [ ] **Output:** `ephemeral/phase-e-ceiling-experiment/programmatic-audit.md`

#### 5.2.2 Mechanism Analysis

- [ ] **Count:** How many mechanisms (target: 12-15), category coverage
- [ ] **Compare Against:** Middle experiment (8-10 mechanisms)
- [ ] **Output:** `ephemeral/phase-e-ceiling-experiment/mechanism-analysis.md`

#### 5.2.3 Metaphor Quality Check

- [ ] **Evaluate:**
  - Metaphor genuineness (forced or natural?)
  - Isomorphism score (how many structural mappings? target: 4+)
  - Divergence check (does it pass Phase 3.5 with M4 strengthening?)
  - Multi-channel coherence (do 3+ mechanisms encode same semantic together?)
- [ ] **Output:** `ephemeral/phase-e-ceiling-experiment/metaphor-evaluation.md`

#### 5.2.4 Perceptual Audit (Mode 3)

- [ ] **Tool:** PA skill Mode 3
- [ ] **Questions:** All 48 PA questions at 2 viewports
- [ ] **Output:** `ephemeral/phase-e-ceiling-experiment/perceptual-audit.md`

---

### 5.3 COMPARISON

#### 5.3.1 Side-by-Side: Middle vs Ceiling (Same Content)

- [ ] **Comparison Dimensions:**
  - Visual richness (which feels more designed?)
  - Spatial atmosphere (which has "place" quality?)
  - Mechanism density (12-15 vs 8-10 — is difference visible?)
  - Build time (150-220 min vs 70-100 min — is 2x cost justified?)
  - Metaphor contribution (does metaphor ADD value or just cost?)
- [ ] **Output:** `ephemeral/phase-e-ceiling-experiment/middle-vs-ceiling.md`
- [ ] **Success:** Diminishing returns curve data point captured

#### 5.3.2 Answer THE Question

- [ ] **The Question:** Is the Middle-to-Ceiling jump worth the cost?
- [ ] **Evidence:**
  - Perceptual difference: DRAMATIC / MODERATE / MARGINAL / NONE
  - Build time actual: [X] minutes (was it within 150-220 estimate?)
  - Metaphor quality: GENUINE / ACCEPTABLE / FORCED
- [ ] **Verdict:**
  - **WORTH IT:** Ceiling produces distinct atmosphere, metaphor adds clear value
  - **CONTEXT-DEPENDENT:** Some content warrants Ceiling, some doesn't
  - **NOT WORTH IT:** Middle is sufficient for most content, reserve Ceiling for rare cases
- [ ] **Output:** `ephemeral/phase-e-ceiling-experiment/VERDICT.md`

---

## PHASE 6: DOCUMENTATION ENRICHMENT - PRIORITY 2

**Purpose:** Apply MEDIUM-priority documentation improvements
**Dependencies:** Phase 2 complete (Middle experiment informs some items)
**Estimated Time:** 2-3 hours
**Scope:** MEDIUM (4 documentation additions)

**Source:** 06-enrichment-actions.md Phase 3 MEDIUM-priority items

---

### 6.1 CASE STUDY ENRICHMENT (2 items)

#### 6.1.1 Add Mechanism Deployment Notes to Case Studies

- [ ] **Files:** All 9 case study markdown files in `design-system/compositional-core/case-studies/`
- [ ] **Action:** Add "Mechanisms Deployed" section to each case study
- [ ] **Content:**
  - List of mechanisms used with line number references to HTML
  - Individual vs combination deployment notes
  - Which mechanisms were CONSIDERED but REJECTED and why
- [ ] **Priority:** MEDIUM
- [ ] **Scope:** ~30 lines per case study × 9 = ~270 lines total
- [ ] **Success:** Case studies document mechanism selection rationale

#### 6.1.2 Add Process Timeline to Case Studies

- [ ] **Files:** Selected case studies (DD-006, OD-004, CD-006)
- [ ] **Action:** Add "Build Process" section
- [ ] **Content:**
  - Phase 1-5 duration breakdown
  - How many audit/fix cycles
  - What changed between iterations
  - Total build time
- [ ] **Priority:** MEDIUM
- [ ] **Scope:** ~40 lines per case study × 3 = ~120 lines
- [ ] **Success:** Case studies show process, not just final state

---

### 6.2 TIER MODEL ENRICHMENT (2 items)

#### 6.2.1 Add Tier Build Examples to Tier Methodology

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/02-tier-methodology.md`
- [ ] **Location:** After Section 3 (tier pipelines)
- [ ] **Action:** Add Section 3.5 "Concrete Build Walkthroughs"
- [ ] **Content:**
  - Middle example: Tutorial content, CRESCENDO pattern, 8 mechanisms deployed (list them), 85 min build
  - Ceiling example: [IF Phase 5 complete, use actual Ceiling experiment data]
  - Comparison table
- [ ] **Priority:** MEDIUM
- [ ] **Dependencies:** Phase 2 complete (Middle data), ideally Phase 5 (Ceiling data)
- [ ] **Scope:** ~100 lines
- [ ] **Success:** Concrete examples exist, not just theory

#### 6.2.2 Add Tier Decision Tree to ENTRY-POINT

- [ ] **File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/03-ENTRY-POINT.md`
- [ ] **Location:** After tier model table
- [ ] **Action:** Add visual decision tree (ASCII or markdown table)
- [ ] **Content:**
  - START: What is your content? → Word count → Content type → Audience → Structural tension
  - END: Floor / Middle / Ceiling / Flagship
  - Each decision node has concrete test (Addition Test for Track classification, word count thresholds, etc.)
- [ ] **Priority:** MEDIUM
- [ ] **Scope:** ~40 lines
- [ ] **Success:** Builder can self-classify content to tier

---

## PHASE 7: WAVE 3 SKILL MODIFICATIONS

**Purpose:** Apply long-term, refinement-stage modifications
**Dependencies:** Phase 5 complete (Ceiling experiment evaluated), 10+ builds completed
**Estimated Time:** 2-3 hours
**Scope:** SMALL (3 modifications based on multi-build patterns)

**Rationale:** Wave 3 modifications address patterns that only emerge at scale (10+ builds, not visible in 1-2 experiments).

---

### 7.1 WHEN TO EXECUTE WAVE 3

- [ ] **Trigger Condition:** At least 10 pages built across Middle/Ceiling tiers
- [ ] **Data Needed:**
  - Common failure modes (what keeps breaking?)
  - Mechanism usage patterns (which mechanisms get overused/underused?)
  - Perceptual audit results (which PA questions fail most?)
  - Build time variance (is 70-100 min Middle estimate accurate?)

---

### 7.2 MODIFICATIONS (3 items — TENTATIVE)

**Note:** These are PROPOSED based on research. Actual Wave 3 mods depend on 10+ build data.

#### 7.2.1 M10: Add Grammar-vs-Derivative Audit Mode to PA Skill

- [ ] **File:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- [ ] **Type:** NEW MODE (Mode 5: Convergence Check)
- [ ] **Trigger:** Ceiling+ pages, optional for Middle
- [ ] **Content:** 8-10 questions checking for structural convergence
  - "Does this page have the SAME spatial topology as a showcase page?"
  - "Does this page deploy the SAME mechanism combinations as a case study?"
  - "Does this page have a DIFFERENT metaphor but the SAME section count as a library page?"
- [ ] **Source:** 08-skill-enrichment-plan.md M10, 05-extraction-chain.md
- [ ] **Condition:** Apply ONLY IF convergence becomes visible problem at scale
- [ ] **Scope:** ~60 lines
- [ ] **Success:** Convergence detectable before publication

#### 7.2.2 M11: Add Per-Tier Audit Scope to PA Skill

- [ ] **File:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- [ ] **Type:** MODIFY (all modes)
- [ ] **Content:** Tier-based question subsets
  - Floor: PA-01, PA-02 only (token compliance + container width)
  - Middle: PA-01 through PA-05 (add rhythm, zones, spatial variety)
  - Ceiling: PA-01 through PA-14 (add metaphor coherence, isomorphism)
  - Flagship: All 48 questions
- [ ] **Rationale:** Prevent Floor pages from being audited against Flagship standards
- [ ] **Scope:** ~30 lines (mode headers + tier routing)
- [ ] **Success:** Audit scope matches tier ambition

#### 7.2.3 M8: Add Individual→Combination→Multi Framing to Skill

- [ ] **File:** `~/.claude/skills/tension-composition/SKILL.md`
- [ ] **Type:** FRAMING (all phases)
- [ ] **Action:** Add architectural principle boxes throughout
- [ ] **Content:** At key decision points, remind builder of tier distinctions:
  - Phase 4 (mechanism selection): "Middle = individual, Ceiling = combination, Flagship = multi-pattern"
  - Phase 4.7 (fractal gate): "Your pattern should appear at [tier-appropriate] scales"
  - Phase 5 (verification): "Audit scope matches tier: Middle = 5 questions, Ceiling = 14, Flagship = 48"
- [ ] **Source:** 04-tier-architecture.md, 08-skill-enrichment-plan.md M8
- [ ] **Scope:** 5-8 reminder boxes (~10 lines each) = ~60 lines total
- [ ] **Success:** Tier architecture is implicit context throughout skill

---

## PHASE 8: LONG-TERM / DEFERRED

**Purpose:** Work items that are valuable but not blocking, or require 20+ builds of data
**Dependencies:** Phase 7 complete, or 6+ months of production use
**Estimated Time:** Variable
**Scope:** LARGE (research, validation, iteration)

---

### 8.1 FLAGSHIP EXPERIMENT

- [ ] **Purpose:** Test the diminishing returns peak (is 16+ mechanisms worth 4+ hours?)
- [ ] **Dependencies:** Middle + Ceiling experiments complete, same content built at 3 tiers
- [ ] **Scope:** LARGE (4-6 hour build + multi-pass audit)
- [ ] **Priority:** LOW (Flagship is 5-10% of pages, can defer until core tiers validated)

---

### 8.2 READER VALIDATION STUDY

- [ ] **Purpose:** Actual user testing (do readers COMPREHEND better with richer pages?)
- [ ] **Dependencies:** 10+ pages at each tier
- [ ] **Scope:** LARGE (recruit readers, A/B testing, comprehension metrics)
- [ ] **Priority:** LOW (producer-side validation is sufficient for MVP)

---

### 8.3 BUILDER FLUENCY TRAJECTORY

- [ ] **Purpose:** Does page 15 perform better than page 1? (fluency development over time)
- [ ] **Dependencies:** 20+ sequential builds by same builder
- [ ] **Scope:** LARGE (longitudinal study, controlled comparison)
- [ ] **Priority:** LOW (interesting for research, not critical for production)

---

### 8.4 MAINTENANCE COST ANALYSIS

- [ ] **Purpose:** How expensive is content update on Ceiling vs Middle pages?
- [ ] **Dependencies:** 3+ existing pages, attempted modifications to content
- [ ] **Scope:** MEDIUM (real editing tasks, time tracking)
- [ ] **Priority:** MEDIUM (important for production, but need existing pages first)

---

### 8.5 AMBIENT RIGIDITY EXPERIMENT

- [ ] **Purpose:** Is ~168 constraints degrading creative output?
- [ ] **Dependencies:** Controlled comparison with tiered constraint presentation
- [ ] **Scope:** LARGE (A/B testing different constraint loads)
- [ ] **Priority:** LOW (research question, not production blocker)

---

### 8.6 DOCUMENTATION ENRICHMENT - PRIORITY 3+4

**Source:** 06-enrichment-actions.md Phase 3+4 MEDIUM and LOW items

- [ ] **Remaining Items:** ~8 documentation additions (glossary, expanded examples, historical notes)
- [ ] **Priority:** LOW (nice-to-have, not critical)
- [ ] **Scope:** 3-4 hours total
- [ ] **Defer Until:** Core experiments complete, production use begins

---

## EXECUTION PRIORITIES

### CRITICAL PATH (Must Execute In Order)

```
Phase 0 (Pre-requisites)
  ↓
Phase 1 (Wave 1 Skill Mods)
  ↓
Phase 2 (Middle Experiment) ← THE MOST IMPORTANT TEST
  ↓
Phase 4 (Wave 2 Skill Mods — informed by Middle results)
  ↓
Phase 5 (Ceiling Experiment — validate metaphor value)
```

### PARALLEL PATHS (Can Run Alongside Experiments)

```
Phase 3 (Doc Enrichment P1) — can run during Phase 2
Phase 6 (Doc Enrichment P2) — can run during Phase 5
```

### DEFER UNTIL VALIDATED

```
Phase 7 (Wave 3 Mods) — requires 10+ builds
Phase 8 (Long-Term) — requires 6+ months or 20+ builds
```

---

## SUCCESS CRITERIA

### Phase 0 Success
- [ ] All 3 staleness fixes applied
- [ ] MEMORY.md under 200 lines, loads completely
- [ ] Category labels exist in mechanism catalog
- [ ] Container width in ALL navigation files

### Phase 1 Success
- [ ] M1, M2, M3, M5 applied to tension-composition skill
- [ ] Skill parses correctly, no broken references
- [ ] Wave 1 diff documented

### Phase 2 Success (THE KEY MILESTONE)
- [ ] Middle-tier page built in 70-100 min
- [ ] 8-10 mechanisms deployed across all 5 categories
- [ ] Container width 940-960px (100% compliance)
- [ ] Perceptual audit shows engagement threshold reached (or doesn't — either answer is valuable)
- [ ] VERDICT documented: Does Middle achieve "place" quality? YES/PARTIAL/NO

### Phase 3 Success
- [ ] 8 HIGH-priority documentation additions applied
- [ ] Vocabulary-vs-library distinction clear
- [ ] Tier architecture (individual/combination/multi) documented
- [ ] Fresh-eyes confusions resolved

### Phase 4 Success
- [ ] M6, M7 applied (if Middle experiment supports them)
- [ ] PA skill has semantic value question

### Phase 5 Success
- [ ] Ceiling-tier page built with genuine metaphor
- [ ] Middle vs Ceiling comparison documented
- [ ] VERDICT: Is 2x build time justified by richness gain?

### Phase 6 Success
- [ ] Case studies enriched with mechanism deployment notes
- [ ] Tier decision tree exists in ENTRY-POINT

### Phase 7 Success
- [ ] Wave 3 mods applied after 10+ builds
- [ ] Convergence check mode exists if needed
- [ ] Tier-based audit scope enforced

---

## RISK ASSESSMENT

### HIGH-RISK ITEMS (Could Block Progress)

1. **Phase 2 Middle Experiment Fails** — If Middle doesn't achieve engagement threshold, entire tier model needs revision
   - Mitigation: Prepared to pivot to "all pages need metaphor" if necessary
   - Fallback: Degrade tier model (Floor/Ceiling only, drop Middle)

2. **M1 Per-Category Minimum Creates Checklist Factory** — If builders pad mechanism lists to hit 5 categories
   - Mitigation: Justification requirement (must explain why each fits)
   - Fallback: Revert to "sample 5-8 mechanisms" with breadth encouragement

3. **Container Width Constraint Too Rigid** — If 940-960px breaks on some content types
   - Mitigation: Document exceptions (full-bleed sections, data tables)
   - Fallback: Soften to "940px minimum, 1200px maximum"

### MEDIUM-RISK ITEMS

4. **M6 Semantic Value Justification Becomes Busywork** — If builders write justifications that don't actually improve output
   - Mitigation: Apply ONLY to custom values, not token lookups
   - Fallback: Make it optional Mode 4 audit question, not mandatory skill step

5. **Wave 2 Modifications Applied Before Experiment Validates Them** — If we implement M6-M7 blindly
   - Mitigation: Phase 4.1.1 explicit review gate BEFORE applying Wave 2
   - Fallback: Defer Wave 2 until 3+ Middle builds, not just 1

### LOW-RISK ITEMS

6. **Documentation Enrichment Takes Longer Than Estimated** — If 8 HIGH items take 6 hours instead of 3-4
   - Impact: Low (doesn't block experiments)
   - Mitigation: Prioritize provenance + tier architecture items, defer others

---

## TIMELINE ESTIMATES

### Optimistic (Parallel Execution, No Failures)
- Phase 0: 2 hours
- Phase 1: 4 hours
- Phase 2: 2.5 hours
- Phase 3: 3 hours (parallel with Phase 2)
- Phase 4: 2 hours
- Phase 5: 5 hours
- Phase 6: 2 hours (parallel with Phase 5)
- **TOTAL: ~15 hours to complete Middle + Ceiling validation**

### Realistic (Some Serial, 1-2 Iterations)
- Phase 0: 3 hours (staleness fixes + verification)
- Phase 1: 5 hours (skill mods + testing)
- Phase 2: 3 hours (Middle build + audit + analysis)
- Phase 3: 4 hours (doc enrichment)
- Phase 4: 2 hours (evaluate + apply Wave 2)
- Phase 5: 6 hours (Ceiling build + full audit + comparison)
- Phase 6: 3 hours (doc enrichment)
- **TOTAL: ~20 hours to complete Middle + Ceiling validation**

### Pessimistic (Serial Execution, Failures Require Iteration)
- Phase 0: 4 hours (compression harder than expected)
- Phase 1: 6 hours (skill mods need debugging)
- Phase 2: 4 hours (Middle build needs 2 attempts)
- Phase 3: 5 hours (doc enrichment scope creep)
- Phase 4: 3 hours (Wave 2 modifications need revision)
- Phase 5: 8 hours (Ceiling metaphor forced, needs regeneration)
- Phase 6: 3 hours
- **TOTAL: ~25 hours to complete Middle + Ceiling validation**

---

## FINAL NOTES

**This agenda represents ALL known remaining work** synthesized from:
- 06-enrichment-actions.md (16 documentation actions)
- 08-skill-enrichment-plan.md (11 skill modifications)
- 09-adversarial-doc-review.md (3 blocking staleness fixes)
- 10-fresh-eyes-review.md (builder confusion items)
- 12-middle-tier-quickstart.md (Middle-tier build guide)
- 02-tier-methodology.md (tier experiment structure)
- 04-tier-architecture.md (tier distinction framework)
- 05-extraction-chain.md (vocabulary-vs-library analysis)

**The user's explicit decision:** Skill enrichment FIRST, Middle-tier experiment SECOND, evaluate results, THEN decide on Phase E continuation.

**The most important item:** Phase 2 (Middle-tier experiment). This single build answers more questions than all other work items combined.

**How to use this agenda:**
1. Execute Phase 0 completely (blocking pre-requisites)
2. Execute Phase 1 completely (Wave 1 skill mods)
3. Execute Phase 2 (Middle experiment) — CHECKPOINT: evaluate results before proceeding
4. If Middle succeeds: continue to Phase 4-6
5. If Middle fails: pivot strategy, revise tier model
6. Defer Phase 7-8 until 10+ builds or 6+ months

**Confidence level:** HIGH. This agenda is comprehensive, dependency-aware, and grounded in 11 research reports + 10 session insights + 47 Phase D validation files.
