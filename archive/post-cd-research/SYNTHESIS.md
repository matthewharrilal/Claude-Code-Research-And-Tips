# Post-CD Pipeline Research Synthesis

**Synthesizer:** Research synthesis agent
**Date:** 2026-02-13
**Source Materials:** 4 research documents (file-map, architecture, explorations, planning)
**Total Source Lines:** ~4,200 lines analyzed

---

## EXECUTIVE SUMMARY

The Post-CD Pipeline is a **two-track execution architecture** spanning 9 phases (A-I) that operationalizes the accumulated intelligence from DD, OD, AD, and CD explorations. It transforms a complete design language into 75+ migrated documentation pages while maintaining a hard freeze line after Phase G.

**The Core Innovation:** Recognition that content requires two categorically different execution modes:
- **Track 1 (Assembly):** 40-50% of pages, deterministic pattern matching, 45-90 min/page, parallelizable
- **Track 2 (Composition):** 50-60% of pages, tension-driven metaphor generation via skill, 3-5 hours/page, sequential bottleneck

**Timeline Reality:** 150-325 hours total (was 34-70 hours before two-track discovery) — a 4-5x expansion driven entirely by Track 2 creative capacity constraints.

**Critical Path:** Track 2 is THE bottleneck. Metaphor collapse (Phase 3.3 of the tension-composition skill) is irreducibly creative and cannot be parallelized.

---

## 1. WHAT IS THE POST-CD PIPELINE?

### 1.1 The Complete 9-Phase Architecture

```
PHASE A: CD Completion (4-5h)
  └─ Validates both Track 1 (clean mappings) AND Track 2 (compositional)
  └─ 6 explorations + ACCUMULATED-IDENTITY-v3
  └─ Completeness Gate must pass

PHASE B: Content Analysis + Track Classification (4-6h) [MOVED FROM F]
  └─ 5D classification (type, density, components, flow, character)
  └─ Addition Test: "Can components fulfill needs without transformation?"
  └─ Output: Track 1 vs Track 2 assignment for ALL 75 pages

PHASE C: Component + Pattern Extraction (6-10h) [SCOPE REDUCED]
  └─ Extract Tier 1 (atoms) + Tier 2 (molecules) + Tier 2.5 (patterns)
  └─ Document Tier 3 (compositional strategies) as PROSE ONLY
  └─ Output: ~400 lines extractable CSS + ~1,340 lines guidance

PHASE D: Extraction Validation Pass (1-2h) [NEW]
  └─ Build 2 test pages: 1 Track 1 + 1 Track 2
  └─ Validate library sufficiency BEFORE playbook
  └─ Catch gaps on 2 pages, not 75 production pages

PHASE E: Migration Playbook v2 (4-5h) [EXPANDED]
  └─ Dual-track execution specs
  └─ Track 1: ~700 lines (deterministic assembly)
  └─ Track 2: ~700 lines (tension-composition invocation)

PHASE F: Pilot Migration (3-5h)
  └─ MUST include 1 Track 2 page (validates 3-5h estimate)
  └─ Real-world timing data
  └─ Gap discovery → feeds Phase G

PHASE G: Playbook Refinement (1-2h)
  └─ Incorporate pilot learnings
  └─ Final playbook = v2.1

═══════════════════════ FREEZE LINE ═══════════════════════
After this point: NO changes to design system
  - Tokens, soul, patterns, findings, convention → FROZEN
  - Tier 1+2 CSS (~400 lines) → FROZEN
  - Tier 3 strategies (prose) → FROZEN
  - Application notes, Tier 3 CSS (per-page) → GROWS

PHASE H: Migration Track 1 (Assembly) (22-60h)
  └─ 30-40 pages
  └─ Parallelizable (6 agents, 6 pages simultaneously)
  └─ Deterministic pattern application
  └─ Wall time: 4-10 hours (3-6 sessions)

PHASE I: Migration Track 2 (Composition) (105-225h)
  └─ 35-45 pages
  └─ Sequential bottleneck (max 2-3 concurrent)
  └─ Tension-composition skill invocation
  └─ Wall time: 52-112 hours (9-19 sessions)

TOTAL: 150-325 hours (18-33 sessions)
```

### 1.2 Why This Structure Exists

**The 3 Critical Gaps Discovered:**

1. **Gap 1: Content → Pattern Mapping Unknown**
   - Original plan: "Just start migrating"
   - Reality: Can't extract components without knowing what content needs
   - Solution: Phase B (Content Analysis) comes FIRST

2. **Gap 2: Extraction Scope Unclear**
   - Original assumption: Extract full "printing press" (all CSS reusable)
   - Reality: Only 60-70% extractable (Tier 1+2+2.5)
   - Solution: Phase C creates library, Phase D validates sufficiency

3. **Gap 3: Two Execution Modes Conflated**
   - Original assumption: Uniform 12-32 min per page
   - Reality: Track 1 (assembly) ≠ Track 2 (composition)
   - Solution: Phase E creates dual-track playbook

**The Freeze Line Constraint:**

User's non-negotiable: "Once we start migrating, I don't want to update the design system."

Phases A-G systematically eliminate every class of gap that would otherwise surface during Phases H-I. The freeze is achievable BECAUSE the intermediate phases close all gaps.

---

## 2. THE TWO-TRACK REALITY

### 2.1 Track 1: Assembly (Deterministic)

**When Used:** Addition Test = YES
> "Can you fulfill the reader's need by selecting and placing existing components without transforming their meaning?"

**Content Types:**
- Tutorials (step-by-step, progressive build)
- Reference documentation (flat lookup tables)
- Q&A pages (alternating question/answer rhythm)
- Task sequences (discrete procedural steps)
- Changelogs (chronological lists)

**Execution Process (6 phases, ~85 min):**

```
Phase 1: Page Analysis (12 min)
  └─ 5D classification
     - Content type: Tutorial
     - Density profile: Progressive build
     - Component inventory: Headers, code, callouts
     - Reading flow: Top-to-bottom linear
     - Page character: Pedagogical

Phase 2: Pattern Selection (8 min)
  └─ Deterministic lookup (60% automatic via classification table)
     - Tutorial → CRESCENDO + F-Pattern + NARRATIVE
     - Cites: DD-F-002, OD-F-009, AD-F-008

Phase 3: Composition Design (18 min)
  └─ Mechanical assembly
     - Load Tier 1+2 from library
     - Apply R5 rules (velocity, temperature, weight)
     - Verify transition grammar (AD-F-025)
     - Check anti-patterns
     - Enforce 8 perceptual guardrails

Phase 4: Build (28 min)
  └─ Construct HTML
     - Tier 1+2 CSS (~400 lines loaded)
     - Soul compliance (border-radius: 0, box-shadow: none)

Phase 5: Perceptual Audit (12 min)
  └─ Invoke perceptual-auditing skill
     - PA-01 through PA-28 (Tier 1+2 questions)
     - 7-Gate Protocol
     - Cold Look verdict: Ship YES/NO/MAYBE

Phase 6: Discovery Docs (7 min)
  └─ Consumption Receipt
     - Pattern triple applied
     - R5 findings consumed
     - MIG-F findings (if any)
```

**Characteristics:**
- Narrow variance (deterministic prevents drift)
- Parallelizable (6 agents, 6 pages simultaneously)
- Consistent quality (proven patterns applied mechanically)
- 30-40 pages total (40-50% of migration volume)

---

### 2.2 Track 2: Composition (Creative)

**When Used:** Addition Test = NO
> "Components exist but don't fulfill reader need without transformation."

**Content Types:**
- Onboarding guides (warmth/safety vs sharp/austere tension)
- Conceptual overviews (layered understanding, progressive revelation)
- Philosophy pages (conviction/authority encoding)
- Evaluation guides (confidence stratification)
- Hybrid content (multiple organizational modes)

**Execution Process (6 phases, ~245 min):**

```
Phase 1: Page Analysis + Tension Pre-Screen (18 min)
  └─ Same 5D classification
  └─ Addition Test: "Can existing components fulfill need?" → NO
  └─ BECAUSE Test: "Reader needs X BECAUSE [content property]" → PASS
  └─ Richness estimate ≥ 8

Phase 2: Partial Pattern Selection (12 min)
  └─ Density + organization identified
  └─ Axis DEFERRED to Phase 3 (metaphor-dependent)
  └─ Tension Table prepared

Phase 3: TENSION-COMPOSITION SKILL INVOCATION (~150 min) ← THE BOTTLENECK
  └─ Phase 0: Content Assessment (5 min)
     - Scope + sections + route determination

  └─ Phase 1: Multi-Axis Questioning (25 min)
     - Core 4: FEEL, UNDERSTAND, DO, BECOME
     - Extended 5: NAVIGATE, TRUST, EVALUATE, ORIENT, RECONCILE
     - Conditional 5: COMPARE, IDENTIFY, DISCOVER, SEE, REMEMBER
     - Up to 14 axes total
     - Richness ratings per axis

  └─ Phase 2: Tension Derivation (30 min)
     - Side A (reader needs) vs Side B (system constraints)
     - Apply Addition Test + BECAUSE Test
     - Richness formula: Opposition × Overlap × Width
     - Select highest-richness tension (typically 15-25+)

  └─ Phase 3: Metaphor Collapse (45 min) ← IRREDUCIBLY CREATIVE
     - Constrained search heuristics
     - Generate 3-5 candidate metaphors
     - Structural isomorphism analysis (≥4 required)
     - Composite scoring (6 criteria):
       1. Resolution (how well metaphor resolves tension)
       2. Isomorphism (≥4 structural overlaps)
       3. Resonance (cultural familiarity)
       4. Feasibility (CSS implementability)
       5. Perceptual Risk (≤2 required)
       6. Perceptual Cost (guardrail proximity)
     - Select top-ranked metaphor

  └─ Phase 4: Compositional Layout (35 min)
     - Phase 4.0: GUARDRAILS ENFORCED FIRST
       - 940px min container (65% viewport)
       - 16px min label-to-heading gap
       - 32px min padding floor
       - 40% compression ratio ceiling
     - Extract 5 metaphor property categories
       - Spatial (depth, elevation, proximity)
       - Temporal (sequence, rhythm, duration)
       - Material (texture, weight, opacity)
       - Behavioral (movement, transformation, state)
       - Relational (hierarchy, connection, grouping)
     - Apply translation grammar (property → CSS)
     - Generate Tier 3 compositional CSS FRESH

  └─ Phase 5: Output (10 min)
     - Thought process document
     - HTML layout
     - Builder warnings (W-DEADZONE, W-OVERLABEL, W-MONOTONY, etc.)

Phase 4: Build (35 min)
  └─ Load Tier 1+2 from library (~400 lines)
  └─ Apply Tier 3 generated CSS (fresh per page)
  └─ Verify builder warnings

Phase 5: Perceptual Audit (18 min)
  └─ PA-01 through PA-48 (includes metaphor-awareness)
     - PA-42: Metaphor logic vs perceptual quality conflict?
     - PA-43: Same metaphor with less visual cost?
     - PA-44: Metaphor sensible without labels? (implicit > explicit)
  └─ 7-Gate Protocol
  └─ All 8 guardrails verified

Phase 6: Discovery Docs (12 min)
  └─ Enhanced Receipt + Metaphor Record
     - Tension resolved
     - Metaphor + isomorphism table
     - Mechanisms used (5-property taxonomy)
     - Perceptual risk + cost
     - Responsive story
```

**Characteristics:**
- Higher ceiling (metaphor-driven layouts "actively teach")
- Higher variance (risk of dead zones, cramping if guardrails violated)
- Non-parallelizable (creative capacity bottleneck, max 2-3 concurrent)
- 35-45 pages total (50-60% of migration volume)

**THE CRITICAL BOTTLENECK:**

Phase 3.3 (Metaphor Collapse) is 45 minutes of irreducibly creative work. You cannot parallelize finding the right metaphor the way you can parallelize mechanical assembly.

This single 45-minute step dominates the entire migration timeline.

---

## 3. THE COMPONENT TAXONOMY

### 3.1 The 4-Tier Model

**Tier 1: Atoms (~80 lines CSS, 100% extractable)**
- Design tokens (colors, typography, spacing, geometry)
- Soul constraints (border-radius: 0, box-shadow: none)
- Coverage: Universal foundation
- Used by: Track 1 AND Track 2

**Tier 2: Molecules (~175 lines CSS, 90%+ extractable)**
- Callout family (6 variants: note, tip, gotcha, caution, essence, info)
- Code blocks (dark bg, syntax highlighting)
- Page header/footer (dark bg, 3px red border)
- Data tables (grid, mono headers, 3px/1px borders)
- Generic container (max-width, centered, responsive padding)
- Coverage: Core vocabulary (9 confirmed components, likely 12-18 total)
- Used by: Track 1 AND Track 2

**Tier 2.5: Patterns (~145 lines CSS + ~440 lines guidance, 70% extractable)**
- Bento grid (CSS + 110 lines guidance)
- Solid offset depth (CSS + 80 lines guidance)
- Scroll witness TOC (CSS + 70 lines guidance)
- Drop cap (CSS + 60 lines guidance)
- Confidence encoding (CSS + 120 lines guidance)
- Coverage: Sophisticated primitives requiring judgment
- Used by: Track 1 (with guidance) AND Track 2 (as base layer)

**Tier 3: Organisms (0% extractable, prose strategies ONLY)**
- Geological confidence stratification (~150 lines prose each)
- Narrative CRESCENDO + F-Pattern
- Hub-spoke spatial layout
- Bento task islands
- Editorial synthesis
- Compound sequential
- Coverage: Metaphor-dependent spatial arrangements
- Used by: Track 2 ONLY (generated fresh per page)

**Total extractable: ~400 lines CSS covering 60-70% of any file**

### 3.2 Why Tier 3 Cannot Be Extracted

**The Fundamental Issue:** Tier 3 is metaphor-dependent.

Example: OD-004's geological stratification only works when content has layered confidence levels. You cannot extract "the geological layout template" because it's a strategy for resolving a specific tension type, not a reusable component.

**The Language Analogy:**
- Tier 1 = Alphabet (26 letters, fixed)
- Tier 2 = Vocabulary (~50 words, slowly growing)
- Tier 2.5 = Grammar (sentence structures, reusable patterns)
- Tier 3 = Prose (infinite variety from finite vocabulary)

You can extract alphabet and vocabulary. You cannot extract prose—you must write it fresh each time using the same letters and words.

**The Rename Test (Tier 2.5 vs Tier 3 Boundary):**

Can you rename the CSS class generically without losing distinctiveness?

- `.callout-essence` → `.accent-callout` ✓ (Tier 2: border + serif works anywhere)
- `.stratum--established` → `.bordered-section` ✗ (Tier 3: 4px border only means "confidence" in geological context)

---

## 4. HOW EXPLORATIONS FLOW TO THE PIPELINE

### 4.1 The Bidirectional Relationship

**Explorations → Pipeline (VOCABULARY):**
- Every DD/OD/AD/CD pattern becomes a pipeline option
- Every finding becomes a pipeline constraint
- Every crown jewel methodology becomes a skill

**Pipeline → Explorations (VALIDATION):**
- Pipeline's two-track reality validates OD-006/AD-006 compound approach
- CD-006 pilot migration tests completeness before freeze
- Migration is the ultimate validation: if 75 pages migrate successfully, the explorations worked

### 4.2 The Provenance Chain (Backward Tracing)

Every pipeline decision cites a finding:

```
Migration decision: "Apply CRESCENDO to tutorial"
  ↓ cites
AD-F-008 (Decision matrix density validates CRESCENDO peak)
  ↓ builds on
OD-F-009 (Narrative CRESCENDO)
  ↓ builds on
DD-F-002 (CRESCENDO for progressive build)
  ↓ builds on
R3-012 (Density should build progressively)
  ↓ validated by
DD-002 Gradient exploration (35/40)
```

**Every pattern traces to research. Every research finding traces to an exploration.**

### 4.3 The Skills: Distilled Exploration Intelligence

**Tension-Composition Skill (839 lines):**
- Phase 2 = DD-006/OD-006/AD-006 questioning methodology
- Phase 4 = metaphor collapse (what made Boris Geological Core work)
- Phase 5 = guardrails (what prevented visual compromise)
- **The skill IS the exploration methodology made reusable**

**Perceptual-Auditing Skill (~2,089 lines):**
- PA-01 through PA-28 = OD/AD audit questions
- PA-42 through PA-44 = metaphor-awareness (from skill enrichment)
- 8 guardrails = fixes from 30 visual issues across 15 layouts
- **The skill IS the audit process made reusable**

### 4.4 What Gets Extracted FROM Each Stage

**From DD (Density Dimension):**
- Tier 2: Dark code blocks, breathing zones
- Tier 3 strategies: CRESCENDO prose, ISLANDS spatial, Fractal self-similarity
- Key finding: DD-F-006 (5-scale fractal) applied to ALL pages

**From OD (Organization Dimension):**
- Tier 2: Dark full-bleed header (universal post-unification), zone tokens
- Tier 2.5: Confidence border-weight gradient
- Tier 3 strategies: Q&A alternation, Narrative CRESCENDO, Hub-spoke spatial
- Key finding: OD-F-005 (Organization IS Density) = classification engine

**From AD (Axis Dimension):**
- Tier 2.5: Bento grid, solid offset, scroll-witness
- Tier 3 strategies: Border-weight as flat 2D depth, Sequential compound
- Key finding: AD-F-023 (ATTENTION TOPOLOGY) = 3-way equivalence

**From CD (Combination Dimension - PENDING):**
- Combination recipes (R-5 validated)
- Component density tolerance rules
- Multi-pattern transition strategies
- CD-006 as pilot validation

**The Rule:** If it works across multiple content types, extract it (Tier 2/2.5). If it's metaphor-specific, document the strategy in prose (Tier 3).

---

## 5. THE FREEZE LINE

### 5.1 What Is Frozen

```
═══════════════════════ FREEZE LINE ═══════════════════════
After Phase G, these are LOCKED:

DESIGN SYSTEM COMPONENTS:
  - Token values (colors, spacing, typography, geometry)
  - Soul pieces (5 locked: sharp edges, serif accents, warm palette, no shadows, square signals)
  - Pattern definitions (all 20+ across DD, OD, AD, CD)
  - Finding IDs (DD-F-*, OD-F-*, AD-F-*, CD-F-*)
  - Convention specs (all sections across all stages)
  - Anti-pattern registry
  - Transition grammar (5×5 matrix, AD-F-025)

EXTRACTABLE CODE:
  - Tier 1+2+2.5 component library (~400 lines CSS)
  - Tier 3 compositional strategies (prose documentation)

TERMINAL DOCUMENTS:
  - ACCUMULATED-IDENTITY-v3 (terminal reasoning document)
  - HANDOFF-CD-TO-MIGRATION (playbook)
  - R5-COMBINATION-THEORY (39 findings)
```

### 5.2 What Is NOT Frozen

```
GROWS POST-FREEZE:

APPLICATION NOTES:
  - MIG-F findings (per-page discoveries)
  - Metaphor records (Track 2 pages)
  - Consumption receipts (which findings applied where)

TIER 3 CSS:
  - Generated fresh per Track 2 page
  - Uses frozen vocabulary (Tier 1+2)
  - Applies frozen strategies (Tier 3 prose)
  - But CSS itself is page-specific

IMPLEMENTATION DETAILS:
  - CSS class names (can refactor)
  - HTML structures (can optimize)
  - Playbook wording/examples (can clarify)
  - Verification checklists (can add, not remove)
```

### 5.3 Why The Freeze Is Achievable

**The User's Non-Negotiable:**
> "Once we start migrating actual documentation pages, I don't want to have to update the design system."

**How Phases A-G Make This Possible:**

1. **Phase B (Content Analysis):** Ensures every content type maps to Track 1 or Track 2 BEFORE migration
2. **Phase C (Extraction):** Ensures Tier 1+2 vocabulary is extractable and frozen, Tier 3 strategies documented
3. **Phase D (Validation):** Ensures extracted library works against real content
4. **Phase E (Playbook):** Ensures both tracks have comprehensive execution paths with guardrails
5. **Phase F (Pilot):** Proves system is complete on real pages (MUST include Track 2 page)
6. **Phase G (Refinement):** Incorporates real-world learnings before freeze

**Each phase systematically eliminates a class of gap that would otherwise surface during migration.**

**The Outcome:**

A complete language can express any new thought in its domain without changing. The design system discovers new **applications** (new sentences), not new **rules** (new grammar).

---

## 6. KEY ARCHITECTURAL PRINCIPLES

### 6.1 The 3-Way Equivalence (Foundation)

**AD-F-023: ATTENTION TOPOLOGY**

Axis = Organization = Density = **ATTENTION TOPOLOGY**

These are not three independent variables—they are three lenses on a single phenomenon.

**Example:**
- Tutorial → attention builds progressively → CRESCENDO (density) + NARRATIVE (org) + F-Pattern (axis)
- Reference → attention jumps between clusters → ISLANDS (density) + SPATIAL (org) + Bento Grid (axis)
- Evaluation → attention drills inward → GEOLOGICAL (density) + CONFIDENCE (org) + Spiral (axis)

**Implication:** Content classification IS pattern selection for Track 1. The classification table collapses design decisions from multi-variable optimization to single-variable lookup.

### 6.2 The Addition Test (Track Assignment)

**Question:** "Can you fulfill the reader's need by selecting and placing existing design system components without transforming their meaning?"

**YES → Track 1:** Components fulfill needs directly.
- Example: Tutorial needs step structure → Task components exist → Assembly works.

**NO → Track 2:** Components exist but don't fulfill need without transformation.
- Example: Reader needs warmth/safety but system provides sharp edges/austerity → Metaphor required.

**Supplementary Tests:**
- **BECAUSE Test:** "Reader needs X BECAUSE [specific content property]" → articulates the tension
- **Richness Scoring:** Opposition × Overlap × Width ≥ 8 → quantifies tension depth

### 6.3 Perceptual Guardrails (Quality Floor)

**The Core Principle:**
> "The metaphor shapes experience; the guardrails prevent it from breaking experience."

**8 Quantitative Minimums (Enforced Track 1 AND Track 2):**

1. **940px min container** (65% of 1440px viewport)
2. **32px min horizontal padding**
3. **16px min label-to-heading gap**
4. **40% compression ratio ceiling** (deepest padding ≥ 40% of shallowest)
5. **45-80 characters per line**
6. **1.5 min body line-height**
7. **48px min section breathing zone**
8. **border-radius: 0 always** (soul compliance)

**Critical Rule:** If metaphor demands values below guardrails → modify metaphor expression, NOT the guardrails.

**Enforcement Strategy:**
- **Layer 1 (baked into library):** G1, G2, G6, G7, G8 — automatic compliance
- **Layer 2 (requires measurement):** G3, G4, G5 — skill verification required

### 6.4 Implicit > Explicit Metaphors

**Best metaphors:** Felt through structure, not announced through labels

**Examples:**
- Graduated backgrounds create depth WITHOUT "Topsoil" / "Bedrock" labels
- Border-weight gradients encode confidence WITHOUT "Established" / "Detail" text
- Padding compression signals importance WITHOUT explicit announcement

**Test:** Remove all metaphor-specific labels. Can you still sense the metaphor?
- If YES = implicit (good)
- If NO = explicit (needs rework)

**Quality Evidence:**
- Top 3 layouts from skill enrichment research: ALL had implicit metaphors
- Pipeline predicts RICHNESS not QUALITY: Richness = 27 ≠ best layout
- Perceptual risk assessment (Phase 3.5E) scores implicit metaphors LOW (≤2)

### 6.5 The Language Analogy

**DD = Alphabet** (density rhythm marks)
**OD = Vocabulary** (organizational patterns)
**AD = Writing direction IS meaning** (spatial arrangement = semantic value)
**CD = Grammar** (combination rules)
**Post-CD = Building alphabet + vocabulary into usable form** (printing press)
**Migration = Translating the library** (applying complete language to real content)

**The Outcome:** A complete language can express any new thought in its domain without changing. The design system discovers new **applications** (new sentences), not new **rules** (new grammar).

---

## 7. OPEN QUESTIONS & UNRESOLVED ISSUES

The pipeline documents explicitly track **23+ open questions** across 7 categories. Here are the CRITICAL ones:

### Q1: Track 2 Percentage — THE Critical Variable

**Estimates:**
- Phase architect: 15-20% (10-15 pages)
- Impact assessor: 50-60% (35-45 pages)

**Timeline Impact:**
- 20% = ~150h total
- 60% = ~280h total (2x difference)

**Resolution:** Phase B (Content Analysis) settles this definitively

### Q2: Can Agents Invoke Skills Mid-Pipeline?

**If YES:** Phase 3 becomes simple skill invocation gate
**If NO:** Phase 3 must INLINE entire skill protocol (~800 lines)

**Resolution needed before:** Phase E (Playbook finalization)

### Q3: Should ALL Pages Go Through Tension-Composition Phases 0-2?

**Current plan:** Phase B pre-screens, Phase 3 invokes for Track 2 only

**Alternative:** Every page enters skill, gate decides track

**Trade-off:**
- Pro: Single unified process, catches false negatives
- Con: 75 pages × 35 min = 43 hours overhead for Track 1 pages

### Q4: Component Count — Really 9 or 12-18+?

**Current:** 9 was analytical estimate from 12-15 representative files
**Not yet done:** Exhaustive programmatic scan across all 30+ HTML files
**Action required:** Phase C should BEGIN with comprehensive inventory

### Q5: Does Richer Tier 2.5 Library Reduce Track 2 Percentage?

**Current:** 5 Tier 2.5 patterns documented
**Hypothesis:** Expanding to 10-12 patterns could push borderline pages from Track 2 to Track 1
**Implication:** Every pattern promoted from Tier 3 to Tier 2.5 reduces Track 2 queue (the bottleneck)

### Q6: Track 2 Model Tier — Sonnet or Opus?

**Impact assessor suggests:** Opus 4.6 required for creative metaphor collapse
**Cost implications:** 35-45 pages × Opus tier = substantial API cost
**Test during:** Phase F (Pilot Migration)

### Q7: Where Does the "Abstraction Cliff" Fall?

**Issue:** Bento grid = Tier 2.5 (70% extractable) or Tier 3 (metaphor-dependent)?
**Test:** Rename Test—if you can rename CSS class generically without losing distinctiveness, it's Tier 2
**Resolution:** Phase C (Extraction) will draw line empirically

---

## 8. TIMELINE & BOTTLENECK ANALYSIS

### 8.1 Complete Timeline Breakdown

**Pre-Freeze (Phases A-G): 23-35 hours**

| Phase | Hours | Parallelizable? | Bottleneck |
|-------|-------|----------------|-----------|
| A: CD | 4-5 | Partially (wave-based) | Convention spec, R5 evaluation |
| B: Content Analysis | 4-6 | YES (per-page) | Tension pre-screening (1 analyst) |
| C: Extraction | 6-10 | Partially (per-tier) | Tier 3 strategy documentation |
| D: Validation | 1-2 | NO (sequential) | Track 2 test page |
| E: Playbook | 4-5 | NO | Track 2 execution path spec |
| F: Pilot | 3-5 | NO | Track 2 pilot page |
| G: Refinement | 1-2 | NO | NONE |

**Post-Freeze (Phases H-I): 127-285 hours**

**Track 1 (Assembly):**
- Volume: 30-40 pages
- Time per page: 45-90 minutes
- Total time: 22-60 hours
- Parallelizable: YES (6 agents simultaneously)
- Wall time: 4-10 hours (3-6 sessions)
- Bottleneck: NONE

**Track 2 (Composition):**
- Volume: 35-45 pages
- Time per page: 3-5 hours
- Total time: 105-225 hours
- Parallelizable: NO (max 2-3 concurrent)
- Wall time: 52-112 hours (9-19 sessions)
- Bottleneck: **CRITICAL — metaphor collapse is irreducibly creative**

### 8.2 The Critical Path

```
Track 1 (parallelizable)     Track 2 (sequential bottleneck)
       ↓                              ↓
   22-60 hours                   105-225 hours
       ↓                              ↓
   Can run concurrently          Cannot accelerate
       ↓                              ↓
Not on critical path          ON CRITICAL PATH
```

**Critical Insight:** Track 2 creative capacity dominates the total migration timeline. You cannot speed up creative tension resolution by adding agents the way you can with mechanical assembly.

### 8.3 Timeline Scenarios

| Scenario | Track 2 % | Total Hours | Sessions | Calendar Time |
|----------|-----------|-------------|----------|---------------|
| Optimistic | 20% | ~150 | 16 | 4-5 weeks |
| Realistic | 50% | ~220 | 22 | 5-7 weeks |
| Pessimistic | 60% | ~280 | 27 | 7-9 weeks |

**THE Critical Variable:** Track 2 percentage (20% vs 60% = 2x timeline)

---

## 9. FILE INVENTORY & READING GUIDE

### 9.1 Main Pipeline Directory (`design-system/pipeline/`)

**17 files, ~14,920 lines, ~648KB**

**Tier 1: Core Planning (9 files, ~6,245 lines)**
- 01-CD-EVOLVED-VISION.md (1,002 lines) — What CD is, 8 recommendations, completeness gate
- 02-POST-CD-PHASES.md (802 lines) — 5 missing phases, two-track reality, freeze line
- 03-MIGRATION-PIPELINE.md (1,684 lines) — Per-page process, Track 1+2 walkthroughs
- 04-CONTENT-INGESTION.md (562 lines) — Migration vs ingestion, operational wrapper
- 05-COMPLETE-ROADMAP.md (834 lines) — Timeline, costs, team topology, risk factors
- 06-KEY-INSIGHTS.md (245 lines) — Language analogy, sameness impossibility, attention topology
- 07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md (1,142 lines) — Track 2 skill invocation, quality lessons
- 08-COMPOSITIONAL-STRATEGY-LIBRARY.md (1,747 lines) — 4-tier model, component inventory, Tier 3 recipes
- 09-EXTRACTION-VALIDATION-PROTOCOL.md (984 lines) — Phase D validation, test pages, gap documentation

**Tier 2: Supplementary (4 files, ~3,830 lines)**
- README.md (447 lines) — Overview, reading guide, connection map
- CLAUDE.md (167 lines) — Agent navigation file
- OPEN-QUESTIONS.md (1,184 lines) — 23 open questions across 7 categories
- TENSION-PROTOCOL.md (1,940 lines) — Older reference (superseded by skill)

**Tier 3: Research Artifacts (3 files, ~1,829 lines)**
- component-evolution-synthesis.md (571 lines)
- source-component-comparison.md (350 lines)
- tension-deep-dive.md (350 lines)

**Tier 4: Execution (1 file, 930 lines)**
- MASTER-CD-EXECUTION-PROMPT.md (930 lines) — CD phase execution spec

### 9.2 Archive (`archive/pipeline-archive/`)

**4 files, ~1,500 lines**
- _SOURCE-BRIEF.md (~380 lines) — Raw conversation insights
- _CD-EXEC-CONTEXT.md (~200 lines) — Historical context
- _CD-EXEC-VERIFICATION.md (~450 lines) — Historical verification
- _VERIFICATION-REPORT.md (~470 lines) — Pipeline verification

### 9.3 External Skills

**Tension-Composition Skill:**
- Location: `~/.claude/skills/tension-composition/SKILL.md`
- Size: 839 lines, 42KB
- Purpose: THE Track 2 driver — full tension-composition pipeline

**Perceptual-Auditing Skill:**
- Location: `~/.claude/skills/perceptual-auditing/SKILL.md`
- Size: ~2,089 lines
- Purpose: Phase 5 quality gate for both tracks

### 9.4 Reading Guides

**For Understanding Architecture:**
1. Read 02 (POST-CD-PHASES) — complete sequence
2. Read 03 (MIGRATION-PIPELINE) — per-page process
3. Read 05 (COMPLETE-ROADMAP) — timeline and dependencies

**For Understanding Two-Track Reality:**
1. Read 07 (TRACK-2-COMPOSITIONAL-SUPPLEMENT) — full Track 2 spec
2. Read 08 (COMPOSITIONAL-STRATEGY-LIBRARY) — component model
3. Read tension-composition skill — Track 2 driver

**For Understanding Quality & Validation:**
1. Read 09 (EXTRACTION-VALIDATION-PROTOCOL) — Phase D
2. Read 01 (CD-EVOLVED-VISION) — Completeness Gate
3. Read perceptual-auditing skill — quality gate

**For Understanding Risk Surface:**
1. Read OPEN-QUESTIONS.md — 23 questions, 3 CRITICAL
2. Read 05 (COMPLETE-ROADMAP) — risk register
3. Focus on OQ-08 (Track split %), OQ-14 (skill invocation), OQ-17 (model tier)

---

## 10. CRITICAL SUCCESS FACTORS

### 10.1 What Must Go Right

**Phase B Must Accurately Classify:**
- If Track 2 estimate is wrong (20% vs 60%), timeline expands 2x
- Tension pre-screening must be rigorous (Addition Test + BECAUSE Test + Richness)
- False negatives acceptable (Track 1 pages can be reclassified), false positives costly

**Phase D Must Catch All Gaps:**
- Better to discover insufficiency on 2 test pages than 75 production pages
- Test 2 MUST be true Track 2 (invoke full skill, not abbreviated)
- Gap remediation MUST happen before Phase E (playbook)

**Phase F Pilot Must Include Track 2:**
- Validates 3-5h estimate (if it takes 7h, timeline doubles)
- Proves skill invocation works in practice (not just theory)
- Provides real-world timing data for Track 2 pages

**Track 2 Metaphor Quality Must Be High:**
- Pipeline predicts RICHNESS not QUALITY
- Perceptual risk assessment (≤2) is MANDATORY
- Implicit metaphors outperform explicit (structural > textual)

**Guardrails Must Be Enforced:**
- Phase 4.0 (before output, not after)
- Baked into library where possible (Layer 1)
- Measured via skill where required (Layer 2)

### 10.2 What Could Go Wrong

**Risk 1: Track 2 Takes Longer Than Estimated**
- Severity: HIGH
- Probability: 50%
- Mitigation: Phase F pilot provides real data, adjust timeline accordingly

**Risk 2: Pipeline Produces Mediocre Metaphors**
- Severity: MEDIUM
- Probability: 40%
- Mitigation: Perceptual risk assessment + guardrails + implicit metaphor preference

**Risk 3: Track 2 Is 60% Not 20%**
- Severity: HIGH
- Probability: 40%
- Mitigation: Phase B settles this early, communicate timeline expansion to user

**Risk 4: Component Library Insufficient**
- Severity: MEDIUM
- Probability: 30%
- Mitigation: Phase D catches this with 2 test pages, remediate before playbook

**Risk 5: Agents Cannot Invoke Skills Mid-Pipeline**
- Severity: HIGH
- Probability: 20%
- Mitigation: Test during Phase F, inline skill protocol if needed

---

## 11. RECOMMENDATIONS

### 11.1 Immediate Actions (Before CD Execution)

1. **Resolve Open Question #1** — Run Phase B Content Analysis on sample pages (10-15 pages) to estimate actual Track 1/2 split
   - If Track 2 = 50-60%, communicate timeline expansion to user
   - If Track 2 = 15-20%, proceed with optimistic timeline

2. **Confirm Skill Invocation Mechanics** — Test whether agents can invoke `/tension-composition` mid-pipeline
   - If YES: Phase E playbook uses skill invocation syntax
   - If NO: Phase E must inline full protocol (~800 lines)

3. **Comprehensive Component Inventory** — Before Phase C, scan all 30+ HTML files programmatically
   - Count actual Tier 2 components (currently 9 estimated, likely 12-18)
   - Identify Tier 2.5 candidates (borderline reusable patterns)

### 11.2 Strategic Considerations

**Consider Expanding Tier 2.5 Library:**
- Every pattern promoted from Tier 3 to Tier 2.5 reduces Track 2 queue
- Target: 10-12 Tier 2.5 patterns (currently 5)
- Could shift borderline pages from Track 2 to Track 1 (reduces bottleneck)

**Consider Abbreviated Track 1.5:**
- Some pages have LIGHT tension (richness 6-10) that doesn't justify 4-hour Track 2
- Options: Force Track 1, Force Track 2, or create Track 1.5 (abbreviated skill invocation)
- Validate during Phase F (pilot one borderline page)

**Consider Model Tier Strategy:**
- Track 1: Sonnet 4.5 sufficient (mechanical)
- Track 2: Opus 4.6 likely required (creative metaphor collapse)
- Cost impact: $420-1,125 difference for 35-45 pages
- Test during Phase F with both models

### 11.3 Next Steps

**For CD Phase:**
1. Read 01-CD-EVOLVED-VISION.md (8 recommendations)
2. Focus on R-5 consumption (~75-80% currently unapplied)
3. Plan CD-006 as pilot migration (real content, validates both tracks)

**For Pipeline Preparation:**
1. Start with Phase B sample (10-15 pages, estimate Track split)
2. Resolve skill invocation mechanics (critical for Phase E)
3. Inventory components comprehensively (critical for Phase C)

**For Team Planning:**
1. Communicate timeline reality (150-325h, not 34-70h)
2. Identify Track 2 bottleneck implications (sequential, not parallel)
3. Plan for 18-33 sessions across 5-9 weeks

---

## 12. CONCLUSION

The Post-CD Pipeline is a sophisticated **two-track execution architecture** that operationalizes 4+ stages of design system research into a 75-page migration while maintaining a hard freeze line. It is NOT a separate invention—it is the **operational expression of accumulated exploration intelligence**.

**The Core Innovation:** Recognition that content requires two categorically different processes:
- **Track 1** uses the design system as a **printing press** (deterministic assembly, 45-90 min/page)
- **Track 2** uses the design system as an **alphabet and vocabulary** (tension-driven composition, 3-5 hrs/page)

**The Bottleneck:** Track 2 creative capacity. Metaphor collapse (45 minutes per page) is irreducibly creative and cannot be parallelized.

**The Timeline:** 150-325 hours total (4-5x original estimate), driven by Track 2 percentage (THE critical variable).

**The Freeze Guarantee:** Phases A-G systematically eliminate every gap that would require design system updates during migration. The freeze is achievable BECAUSE intermediate phases close all gaps.

**The Outcome:** 75 documentation pages, each expressing its unique attention topology through the same frozen vocabulary. Different content types produce different visual outputs because **sameness is architecturally impossible**—the 3-way equivalence ensures different content structures map to different pattern combinations.

**What Grows:** Not the system (frozen), but documented applications. Each page adds MIG-F findings, metaphor records, and application notes. The language is complete. Its demonstrated capabilities expand forever.

---

**Research synthesis complete.**
**4 source documents analyzed (~4,200 lines)**
**Output: ~1,450 lines comprehensive synthesis**
**Date: 2026-02-13**
