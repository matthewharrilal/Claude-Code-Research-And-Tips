# TC Skill Full Coverage Matrix

**Validator:** TC Coverage Agent (Opus 4.6, Task #3)
**Date:** 2026-02-17
**Skill file:** `~/.claude/skills/tension-composition/SKILL.md` (1,932 lines)
**Cross-referenced against:**
- `10-ENRICHED-MASTER-EXECUTION-PROMPT.md` (enriched prompt, 530 lines)
- `AUXILIARY-EXECUTION-WRAPPER.md` (wrapper, 398 lines)
- `11-tc-deep-invocation.md` (depth resource, 1,102 lines)

---

## METHODOLOGY

Every section of the 1,932-line TC skill was cataloged by line range and concept. Each concept was checked for invocation in three documents:
- **PROMPT** = enriched master execution prompt (10-ENRICHED-MASTER-EXECUTION-PROMPT.md)
- **WRAPPER** = auxiliary execution wrapper (AUXILIARY-EXECUTION-WRAPPER.md)
- **DEPTH** = TC deep invocation resource (11-tc-deep-invocation.md)

Coverage grades:
- **FULL** = concept explicitly invoked with actionable language
- **PARTIAL** = concept referenced but not with complete operational detail
- **IMPLICIT** = concept's principle is present but the specific technique/name is absent
- **NONE** = no agent will encounter this concept through any document

---

## 1. CRITICAL PRINCIPLE (Lines 1-25)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent Encounter | Risk if Unreachable |
|-----------|---------|--------|---------|-------|----------------|-------------------|
| 1-3 | Skill metadata (name, description, trigger phrases) | NONE | NONE | NONE | N/A -- operational metadata, not content | ZERO -- metadata for CLI routing only |
| 6-23 | Construction-not-Discovery principle | PARTIAL (A1 thesis, D conviction closing reference "confident intention") | PARTIAL (reminder #2 "mission is beauty") | FULL (Section 6, lines 752-785: 16 lines of conviction text) | Metaphor Agent via depth resource | LOW -- depth resource carries full text, prompt's A1 thesis is weaker but present |
| 8-16 | "Multiple valid metaphors exist" / creative act / chosen not found | NONE in prompt body | NONE | FULL (Section 6, lines 756-758) | Metaphor Agent via depth | MEDIUM -- this is a mindset-setting principle; without it, agents default to "finding THE answer" |
| 18-22 | Discovery bias examples ("the content IS geological" = wrong) | NONE | NONE | FULL (Section 5, lines 734-742) | Metaphor Agent via depth | LOW -- covered by depth resource |

**Verdict: Lines 1-25 = COVERED via depth resource. Prompt has weaker version in A1/D.**

---

## 2. PIPELINE OVERVIEW (Lines 27-38)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent Encounter | Risk |
|-----------|---------|--------|---------|-------|----------------|------|
| 27-36 | Pipeline diagram (6 phases: Content -> Assessment -> Questioning -> Tension -> Gate -> Metaphor -> Layout -> Output) | FULL (B8 TC Pipeline Routing maps all 6 phases to agents) | FULL (Phase 2 Pass 0-4 maps pipeline to execution) | FULL (Section 1 maps all phases) | Team-lead + all agents via prompt B8 | ZERO |

---

## 3. PHASE 0: CONTENT ASSESSMENT (Lines 40-167)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 40-49 | Step 0A: Content Type Classification (prose/mixed/visual/self-referential) | PARTIAL (B8 routes Phase 0 to Content Architect but doesn't list types) | FULL (Phase 2 Pass 0 agent spec: "Executes TC Phase 0, classifies content type, scope, sections, tier") | FULL (Section 1 Phase 0 + technique T1) | Content Architect via wrapper + depth | LOW |
| 44-49 | Self-referential abort, visual-dominant skip, hybrid path | NONE | NONE | FULL (T1 invocation text: exact routing per type) | Content Architect via depth | MEDIUM -- if Content Architect doesn't read depth resource, could misroute self-referential content |
| 51-57 | Step 0B: Scope Assessment (MICRO/SHORT/STANDARD/LONG/MASSIVE) | NONE in prompt | PARTIAL (wrapper references word count in extraction) | FULL (T2) | Content Architect via depth | LOW |
| 59-64 | Step 0C: Section Identification (NARRATIVE/REFERENCE/CODE/DATA/MIXED) | NONE | PARTIAL (wrapper extraction: "word count per section, content type mix") | FULL (T3) | Content Architect via depth | LOW |
| 69-144 | Step 0D: Tier Classification + Pipeline Routing (Floor/Middle/Ceiling/Flagship) | PARTIAL (B8 mentions tier routing implicitly; Appendix has tier-relevant parameters) | FULL (wrapper Pass 0 agent reads TC SKILL for tier classification) | FULL (T4 + full tier table + Addition Test + pattern selection) | Content Architect | LOW |
| 69-97 | Tier table with mechanism counts, build times, CSS lines | PARTIAL (Appendix mentions mechanism target 12-14 and hard cap 16) | NONE | FULL (Section 1 Phase 0 includes full tier table) | Content Architect via depth | LOW -- for Flagship the tier is predetermined |
| 81-97 | "Mechanism Count as Proxy, Not Target" principle + provenance from backward-engineering | IMPLICIT (C-02 says "target 12-14" and "hard cap 16" but doesn't explain proxy-not-target) | NONE | FULL (Section 1 Phase 0 invocation includes this caveat) | Content Architect, Planner via depth | LOW -- for Flagship, proxy-not-target is important but present in depth |
| 99 | Middle experiment validation evidence (12 mechanisms, S:1 H:3 C:4 D:2 N:3, PA-05 4/4) | FULL (A4: "Middle result... professionally stiff"; A3: empirical warning) | PARTIAL (reminder #4 cites Middle 2 scales = PA-05 4/4) | FULL (Section 1 Phase 0) | All agents | ZERO |
| 101-126 | Middle-tier pattern selection (skip Phases 1-3, CRESCENDO/F-PATTERN/BENTO/PULSE) | NONE in prompt (Flagship doesn't need Middle path) | NONE | FULL (Section 1 Phase 0) | N/A for Flagship | ZERO -- Flagship uses full pipeline, not Middle shortcut |
| 127-144 | Graceful degradation protocol, tier distinction (deployment levels), validated hypothesis caveat | PARTIAL (C4 has "Staged Downgrade at 240 min") | FULL (Phase 5 failure recovery: staged downgrade) | FULL | Team-lead | LOW |
| 148-165 | Step 0D-CEILING: Ceiling Tier Context Box (metaphor mandatory, per-category minimums, reinforcing pairs, 4-scale fractal, 940-960px, build time) | FULL (B1 S-01, B3 C-01, C-08, B5 SC-01-07, B6 MG-01-05 all encode these) | PARTIAL (wrapper Pass 0 instructions) | FULL | All build agents | ZERO -- prompt encodes every constraint from this box |
| 168-188 | Step 0E: Library Access Prohibition | FULL (P-02 in prompt: "Phase 0E library prohibition: no mechanism catalog access before metaphor lock-in") | FULL (wrapper Phase 1B extraction: "NOT optional background") | FULL (T5) | Content Architect, Metaphor Agent | ZERO |

**Verdict: Phase 0 = WELL COVERED. All critical concepts reachable. Middle-tier paths not relevant for Flagship.**

---

## 4. PHASE 1: MULTI-AXIS QUESTIONING (Lines 192-276)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 192-204 | Core Four Axes: FEEL/UNDERSTAND/DO/BECOME with question prompts | PARTIAL (B8 mentions "14-axis questioning" and "FEEL/UNDERSTAND/DO/BECOME + discovered axes") | FULL (wrapper Pass 0 metaphor-agent: "Run ALL 4 core axes") | FULL (Section 2 Axis Invocation Table, 15 axes) | Metaphor Agent | LOW -- prompt B8 names the axes; depth has full questions |
| 205-216 | Extended Five: NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE with richness/low-yield guidance | NONE in prompt body | FULL (wrapper Pass 0: "evaluate all 5 extended axes") | FULL (Section 2 table) | Metaphor Agent via wrapper + depth | LOW |
| 217-236 | Structural Trigger Axes: COMPARE/IDENTIFY/DISCOVER/SEE/REMEMBER with deployment signals | NONE in prompt body | FULL (wrapper: "check 5 trigger axes") | FULL (Section 2 table, rows 11-15) | Metaphor Agent via wrapper + depth | LOW |
| 238-248 | Opposition Predicts Richness principle (RECONCILE richest, TRUST/DO/ORIENT cosmetic) | NONE in prompt | NONE | FULL (Section 2 + Section 1 Phase 1 invocation) | Metaphor Agent via depth | MEDIUM -- this is a HIGH-VALUE creative heuristic; without it, agent may build primary tension from aligned (cosmetic) axes |
| 250-258 | Axis Interaction Effects (4 compound pairs: RECONCILE+IDENTIFY, etc.) | NONE | NONE | FULL (Section 2, line 487-491) | Metaphor Agent via depth | MEDIUM -- compound pairs open wider metaphor spaces; without them, agent explores single-axis tensions only |
| 260-275 | Phase 1 Output format (table per axis: Needs, Structural Properties, Richness) | NONE in prompt | PARTIAL (wrapper: produces axis questioning output) | FULL (Section 1 Phase 1 invocation: "OUTPUT: Table per axis") | Metaphor Agent via depth | LOW |

**Verdict: Phase 1 = COVERED via depth resource + wrapper. Prompt is weak here (only B8 line). Opposition Predicts Richness and Axis Interaction Effects are ONLY in depth resource -- if Metaphor Agent doesn't read 11-tc-deep-invocation.md, these creative heuristics are lost.**

---

## 5. PHASE 2: TENSION DERIVATION (Lines 278-464)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 278-284 | Phase 2 intro: Side A (reader needs) vs Side B (system constraints) | FULL (A2 Tensions table gives IS/IS NOT) | PARTIAL (wrapper) | FULL (Section 1 Phase 2) | Metaphor Agent | ZERO |
| 286-327 | Side B: KortAI Design System Constraints (geometry, palette, typography, borders, spacing, personality profile) | FULL (B2 Soul: U-01 to U-10; tokens referenced in E section) | FULL (wrapper Phase 1A reads prohibitions + tokens) | FULL (Section 1 Phase 2 invocation: full personality spectrum) | All agents | ZERO |
| 329-335 | Soul Test (5 questions: magazine? Bootstrap? Blue swap? Hierarchy? Unearned decoration?) | IMPLICIT (B2 U-01-U-10 encode the constraints; soul test not named) | NONE | FULL (T39) | Builder agents via depth | LOW -- soul prohibitions are fully encoded; the "Soul Test" framing adds perceptual validation but constraints are binary |
| 336-343 | The Addition Test (genuine vs cosmetic tension) | PARTIAL (B8: "Addition Test + BECAUSE Test" named for Metaphor Agent) | FULL (wrapper Pass 0: "apply Addition Test") | FULL (T7) | Metaphor Agent | LOW |
| 344-360 | Three Formal Criteria for Genuine Tension (semantic opposition, vocabulary gap, structural overlap) | NONE | NONE | FULL (Section 1 Phase 2 invocation) | Metaphor Agent via depth | MEDIUM -- without these 3 criteria, agent may accept false tensions |
| 361-370 | Three Criteria for Cosmetic Tension + Tension Spectrum | NONE | NONE | FULL (Section 1 Phase 2) | Metaphor Agent via depth | LOW -- cosmetic detection flows from Addition Test |
| 372-383 | Deriving Tension protocol (5 steps per axis) + BECAUSE Test | PARTIAL (B8 names "BECAUSE Test") | FULL (wrapper Pass 0: "BECAUSE Test") | FULL (T8) | Metaphor Agent | LOW |
| 386-424 | Richness Formula (Opposition x Overlap x Width, multiplicative) + R5 Cap | PARTIAL (prompt doesn't name formula but A3 anti-scale model captures the principle) | NONE | FULL (T9, Section 1 Phase 2 invocation) | Metaphor Agent via depth | MEDIUM -- without explicit formula, agent uses intuition for tension selection; cap prevents richness-over-risk |
| 425-456 | Tension Landscape quick reference + Tension Validity Check (5 checks) | NONE | NONE | FULL (Section 1 Phase 2) | Metaphor Agent via depth | LOW -- quick reference is convenience, not critical |
| 457-464 | Tension Threshold Gate (exit ramp: 0 genuine = skip; all cosmetic = skip Phase 3; 1+ genuine = proceed) | NONE in prompt | NONE | FULL (Section 1 Phase 2 invocation) | Metaphor Agent via depth | LOW -- for Flagship, genuine tension is virtually guaranteed |

**Verdict: Phase 2 = WELL COVERED via depth resource. Richness Formula and 3 Formal Criteria for Genuine Tension only accessible via depth. Risk is MEDIUM if Metaphor Agent skips depth resource.**

---

## 6. PHASE 3: METAPHOR COLLAPSE (Lines 467-797)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 467-475 | Phase 3 intro: metaphor as bridge, emotional tension / structural bridge | FULL (A1: "metaphor is the load-bearing structure") | PARTIAL | FULL (Section 1 Phase 3 + Section 5 Protocol + Section 6 conviction) | Metaphor Agent | ZERO |
| 473-482 | Step 3.1: Extract structural properties from Side A (emotions -> geometry) | NONE in prompt | NONE | FULL (T10, Section 1 Phase 3 invocation: 4 examples) | Metaphor Agent via depth | MEDIUM -- this is the critical translation step; without it, agent may skip geometric abstraction |
| 483-505 | Step 3.2-3.3: Extract properties from Side B + find structural overlap (40-70% ideal zone) | NONE | NONE | FULL (Section 1 Phase 3 invocation: overlap % guidance) | Metaphor Agent via depth | MEDIUM |
| 507-516 | Step 3.4: Generate constrained search query ("What domain exhibits [OVERLAP] while being [GAP B] yet conveying [GAP A]?") | NONE | NONE | FULL (T11, Section 5 Protocol step 2) | Metaphor Agent via depth | HIGH -- THIS IS THE IRREDUCIBLE CREATIVE STEP. If agent doesn't read depth resource, they may free-associate instead of using constrained query |
| 518-526 | Three Search Heuristics (constraint scan, content resonance, emotional valence) | NONE | NONE | FULL (T12, Section 1 Phase 3 + Section 5 steps 3a-3c) | Metaphor Agent via depth | MEDIUM |
| 528-543 | Domain Search Menu (10 categories: Geological, Architectural, Typographic, etc.) | NONE | NONE | FULL (T13, Section 1 Phase 3 invocation) | Metaphor Agent via depth | MEDIUM -- without menu, viable domains may be overlooked |
| 545-565 | Responsive Degradation Check (table: metaphor type vs 768px risk vs 1440px utilization risk) | NONE | NONE | PARTIAL (Section 1 Phase 3 mentions responsive but doesn't reproduce the full table) | Metaphor Agent partially via depth | LOW -- prompt W4 warning covers responsive; full table is detail |
| 567-574 | Incompatible Metaphor Families (Organic, Liquid, Atmospheric, Textile, Musical -- ban for angular systems) | NONE in prompt | NONE | FULL (T14, Section 1 Phase 3 invocation: "BAN: Organic/Biological, Liquid/Fluid...") | Metaphor Agent via depth | MEDIUM -- without this, agent may waste time on incompatible domains or select one that violates soul |
| 576-702 | Step 3.5: Composite Scoring (A: Resolution, B: Isomorphism, C: Resonance split, D: Feasibility, E: Perceptual Risk, F: Perceptual Cost) | PARTIAL (B6 MG-01 references "6-criterion rubric" but NOT the composite scoring A-F) | PARTIAL (wrapper Pass 0: "Score on 6-criterion rubric") | FULL (T15, T16, T17, Section 1 Phase 3 invocation: full scoring protocol) | Metaphor Agent via depth | MEDIUM -- prompt's MG-01 references rubric but doesn't give scoring details; depth is essential |
| 606-620 | Content Resonance split (C1 Nominal vs C2 Structural, weight structural 2x) | NONE | NONE | FULL (T15 invocation: "C. Content Resonance split nominal/structural (weight structural 2x)") | Metaphor Agent via depth | MEDIUM |
| 626-647 | Perceptual Risk Assessment (4 questions, 0-4 score) | NONE in prompt body | NONE | FULL (T16) | Metaphor Agent via depth | HIGH -- perceptual risk is THE gate that would have caught ceiling failure; without it, high-richness-low-quality metaphors slip through |
| 650-702 | Perceptual Cost Assessment (5 guardrail-violation questions, +1 per YES) | NONE | NONE | FULL (T17) | Metaphor Agent via depth | MEDIUM |
| 705-757 | Step 3.5G: 6-Criterion Quality Rubric (18 points, >= 12/18, Interpretive Distance MUST >= 2) | FULL (B6 MG-01: ">= 12/18 on 6-criterion rubric"; MG-02: "Interpretive Distance >= 2"; MG-03: "6 rejection checks") | FULL (wrapper Pass 0: "6-criterion rubric, MG-01 >= 12/18, run 6 rejection checks") | FULL (T18, T19, Section 5 Protocol steps 4-5) | Metaphor Agent | ZERO |
| 744-757 | 6 Binary Rejection Checks (R1-R6: domain vocabulary, visible labels, container <940, empty space transitions, 6+ identical elements, soul violations) | FULL (B6 MG-03: "6 rejection checks passed (R1-R6..." with descriptions) | FULL (wrapper Pass 0: "Run 6 rejection checks (MG-03)") | FULL (T19, Section 5 step 5) | Metaphor Agent | ZERO |
| 759-777 | Step 3.6: Select metaphor + Failure Modes (Monopoly, Inflation, Forcing, Redundancy, Decay) | NONE in prompt | NONE | PARTIAL (Section 1 Phase 3 invocation: "3.6 SELECT winner. Document: why, gaps, isomorphism table" but failure modes not reproduced) | Metaphor Agent partially via depth | LOW -- failure modes are edge cases; selection protocol is present |
| 779-795 | The Irreducible Creative Step + Cultural Consideration | NONE in prompt | NONE | FULL (Section 5 Protocol: "STEP 1-6" + Section 6 conviction lines) | Metaphor Agent via depth | LOW |

**Verdict: Phase 3 = COVERED via depth resource for the Metaphor Agent. The constrained search query (T11) and Perceptual Risk Assessment (T16) are ONLY reachable through depth -- these are HIGH-risk items. The 6-Criterion Rubric and 6 Rejection Checks are fully in the prompt (ZERO risk).**

---

## 7. PHASE 3.5: METAPHOR COMMITMENT (Lines 799-862)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 799-808 | Step 3.5A: State committed metaphor in writing, LOCKED IN | PARTIAL (B6 MG-04: "structural test" implies commitment but doesn't name gate) | FULL (wrapper Pass 0: metaphor agent "produces 02-metaphor-derivation.md with... rubric scores") | FULL (T20, Section 1 Phase 3.5 invocation) | Metaphor Agent | LOW -- the commitment behavior is encoded in wrapper's artifact requirement |
| 809-832 | Steps 3.5B-C: Document WHY + Commitment Verification (3 questions) | NONE | NONE | FULL (T20 invocation: "Verify: independent derivation, no library reference needed, divergence check") | Metaphor Agent via depth | MEDIUM -- without verification questions, agent might commit without checking independence |
| 833-862 | Step 3.5D: Divergence Justification (if convergence detected, 5-question table) | NONE | NONE | FULL (Section 1 Phase 3.5 invocation: full justification table) | Metaphor Agent via depth | LOW -- divergence is Phase 5's job; 3.5D is early warning |

**Verdict: Phase 3.5 = COVERED via depth. Commitment is implicit in wrapper's artifact chain.**

---

## 8. PHASE 4: COMPOSITIONAL LAYOUT GENERATION (Lines 866-1620)

### 8A. Phase 4.0: Perceptual Guardrails (Lines 876-980)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 876-906 | Content proportion guardrails (65% min, 80% max, 32px padding, 220px min column, 45-80 CPL) | FULL (B1: S-01 container 940-1100px, S-07 CPL 45-80, S-02 content-to-void >= 60:40) | FULL (wrapper: builder self-check S-01, S-07, S-02) | FULL (T21, T22, T23) | Builder agents | ZERO |
| 890-906 | Typographic spacing guardrails (heading ratio >= 1.5, 16px gaps, line-height 1.5, 48px breathing) | FULL (B1: S-08 heading spacing >= 1.5:1; section breathing implied by S-09) | FULL (wrapper B10 self-check: "S-08: Heading spacing >= 1.5:1") | FULL (T24) | Builder agents | ZERO |
| 900-906 | Compression and density guardrails (deepest >= 40% of shallowest, CPL 45-80) | PARTIAL (prompt doesn't explicitly state "deepest >= 40% of shallowest" compression ratio) | NONE | FULL (T21: "compression ratio deepest >= 40% of shallowest") | Builder agents via depth | LOW -- specific ratio only in depth but prompt's S-09/S-11 max-spacing rules achieve similar effect |
| 907-942 | CPL Calculation Formula + concrete examples + self-check protocol | FULL (B1 S-07: formula given; B10 self-check includes CPL) | FULL | FULL (T23) | Builder agents | ZERO |
| 944-980 | Container Width Guardrails (940-960px NON-NEGOTIABLE, escape hatch, #1 failure mode) | FULL (B1 S-01, Appendix: 940-1100px; A3 empirical warning) | FULL (wrapper spatial safeguards) | FULL (T22, Section 4B) | Builder agents | ZERO |
| 982-1034 | Heading Spacing Enforcement with examples + margin collapse warning | FULL (B1 S-08) | FULL (B10 self-check) | FULL (T24) | Builder agents | ZERO |
| 1035-1049 | Priority order when metaphor conflicts (readability > breathing > content width > metaphor > aesthetic) | PARTIAL (prompt D: "rules are guardrails, not destination" but no explicit priority order) | NONE | FULL (Section 3 technique invocation for T21) | Builder agents via depth | LOW |

### 8B. Phase 4.0: Mechanism Library Access (Lines 1051-1107)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 1051-1076 | Library access NOW permitted, extraction protocol (technique not implementation) | FULL (P-02 distinguishes phases; E section routes mechanism catalog to Planner) | FULL (wrapper Phase 1A reads mechanism catalog) | FULL | Planner, Builder | ZERO |
| 1078-1106 | Per-category mechanism deployment table (5 categories, 18 mechanisms, minimums, exception clause) | FULL (B3 C-01: "Per-category minimums: Spatial:1+ Hierarchical:1+ Chromatic:1+ Density:1+ Navigational:1+") | FULL (wrapper Pass 2: same minimums) | FULL (Section 4C enhanced deployment) | Mechanism Builder | ZERO |
| 1094-1104 | Justification requirement (1 sentence per deployed, 3 sentences for rejected) | PARTIAL (C-12 documents rejection log >= 21 but doesn't specify per-mechanism justification) | FULL (wrapper Pass 2: "Documents rejection log >= 21") | FULL | Mechanism Builder | LOW |
| 1098-1104 | Natural landing by tier (Floor ~5, Middle 8-12, Ceiling 12-15, Flagship 16-18) | FULL (B3 C-02: "Mechanism target: 12-14. Hard cap: 16.") | FULL | FULL | Mechanism Builder | ZERO |

### 8C. Phase 4.1-4.2: Property Extraction + Translation Grammar (Lines 1110-1260)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 1110-1175 | Step 4.1: 5-Category Property Extraction (Spatial/Temporal/Material/Behavioral/Relational with CSS mappings) | NONE in prompt | NONE | FULL (T25, Section 3 technique invocation) | Metaphor Builder via depth | MEDIUM -- without 5-category extraction, agent may map metaphor to CSS ad hoc instead of systematically |
| 1177-1248 | Step 4.2: Translation Grammar (Weight/Depth/Density/Flow/Containment/Transition/Hierarchy/Combined lookup tables) | NONE in prompt | NONE | FULL (T26) | Mechanism Builder, Metaphor Builder via depth | MEDIUM -- translation grammar is the CSS implementation reference; builders need it |
| 1249-1260 | The 6 Exhaustive CSS Channels (background, border, typography, spacing, layout, accent) | FULL (B5 SC-02: ">= 5 of 7 channels" -- prompt uses 7 channels not 6) | NONE | FULL (T27: "ONLY these 6") | Builder agents | LOW -- note DISCREPANCY: skill says 6 channels, prompt says 7 (adds "rhythmic" and "intentional"). Depth resource aligns with skill's 6. |

**DISCREPANCY FLAGGED:** TC skill (line 1249) defines 6 CSS channels. Prompt B5 SC-02 defines 7 channels ("chromatic, typographic, spatial, structural, density, rhythmic, intentional"). The extra channels ("rhythmic", "intentional") are meta-level, not CSS channels. Agents may be confused about whether 6 or 7 channels exist. The skill's 6 are the CSS-implementable ones; the prompt's 7 include non-CSS semantic channels.

### 8D. Phase 4.2B-4.2C: Pacing + Rhythm (Lines 1262-1330)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 1262-1301 | Step 4.2B: Pacing Prediction Heuristic (5 assessment questions: section count, breathing model, uniformity, dramatic moment, transition model) | PARTIAL (B3 C-18: "Density arc: peak density section MUST NOT be first" captures dramatic moment; C-09 designed moments per quartile) | NONE | FULL (T28) | Mechanism Builder via depth | LOW -- individual pacing rules are in prompt; the unified heuristic is in depth |
| 1303-1330 | Step 4.2C: Rhythm Variation Requirement (3+ transition types: SMOOTH/BRIDGE/BREATHING, concrete examples) | FULL (B3 C-05: ">= 3 transition types used"; C-06: "No two adjacent identical") | FULL (wrapper B10 self-check: "C-05+C-06") | FULL (T29) | Builder agents | ZERO |

### 8E. Phase 4.3-4.5: Coherence, Components, Adapt-vs-Invent (Lines 1331-1403)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 1331-1366 | Step 4.3: 5-Rule Coherence Check (density direction, transition strength, typography role, border category, accent color) | PARTIAL (B3 C-08 reinforcing pairs; B4 MC-01 CCS >= 0.30; but 5-rule check not named) | NONE | FULL (T30) | Mechanism Builder via depth | MEDIUM -- coherence checking prevents channel contradictions; without it, builders may deploy mechanisms that work against each other |
| 1368-1403 | Steps 4.4-4.5: Component Inventory (Tier 2 vs 3) + Adapt-vs-Invent Decision (3-question gate) | PARTIAL (B3 C-10: ">= 2 purpose-built components" implies invention) | NONE | FULL (T31, T32) | Builder agents via depth | LOW -- C-10 guides the output; the decision process is in depth |

### 8F. Phase 4.6-4.7B: Transition Grammar, Fractal Gate, Landmarks (Lines 1404-1533)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 1404-1414 | Step 4.6: Transition Grammar Table (axis-to-axis lookup: Z/F/Bento/Spiral/Choreography) | NONE in prompt | NONE | FULL (T33) | Builder agents via depth | LOW -- specific lookup is a convenience; C-05/C-06 capture the essential rule |
| 1416-1461 | Step 4.7: Fractal Consistency GATE (scale coverage table, tier-calibrated requirements, sunset clause) | PARTIAL (B5 SC-01: "Maximum 5 scales. Preferred 2-3"; SC-07: "Scale Coherence Index") | NONE | FULL (T34) | Metaphor Builder via depth | LOW -- prompt captures scale constraints; depth has the detailed gate protocol |
| 1466-1533 | Phase 4.7B: Landmark Completeness GATE (header + main + footer, tier requirements, CSS evidence, failure provenance) | FULL (B1 S-03, S-04, S-05, S-06: header proportion, footer must exist, all sections present) | FULL (wrapper Gate 2: "Header + Footer + all sections present") | FULL (T35) | Builder agents | ZERO |

### 8G. Phase 4.8-4.9: Section Composition + Tokenization (Lines 1536-1620)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 1536-1543 | Step 4.8: Section-Aware Composition (primary metaphor through-line, CODE/DATA/NARRATIVE treatment) | NONE in prompt | NONE | FULL (T36) | Builder agents via depth | LOW -- for Flagship with RESEARCH-SYNTHESIS.md content, most sections are narrative |
| 1547-1620 | Phase 4.9: Tokenization Self-Check (>= 80% var(), formula, concrete examples, Middle baseline 66.5%) | FULL (Appendix: "Token compliance >= 80% var() usage"; B10 self-check: "Token compliance >= 80%") | FULL (wrapper B10 self-check) | FULL (T37) | Builder agents | ZERO |

**Verdict: Phase 4 = WELL COVERED overall. 5-Category Property Extraction (T25), Translation Grammar (T26), and 5-Rule Coherence Check (T30) are ONLY in depth resource. These are MEDIUM risk -- they provide systematic method that ad-hoc implementation may miss.**

---

## 9. PHASE 5: OUTPUT + DIVERGENCE VERIFICATION (Lines 1624-1778)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 1624-1650 | Output A (Thought Process) + Output B (HTML Layout) | PARTIAL (artifact chain in wrapper defines output files but not the dual-output format) | FULL (wrapper artifact chain: 02-metaphor-derivation through 08-intentionality-complete) | FULL (T40) | All agents | LOW -- wrapper artifact chain is stronger than dual-output format |
| 1653-1681 | Edge Cases & Failure Modes (structureless, visual, flat, zero-tension, max-tension, scale, multi-metaphor, tied, determinism) | NONE | NONE | NONE -- depth resource ends before reproducing edge cases | N/A | LOW -- edge cases are handled by Phase 0 routing which IS covered |
| 1684-1778 | Phase 5: Divergence Verification (access case studies, 5-step process, comparison table, convergence justification) | NONE in prompt | NONE explicitly (wrapper doesn't mention divergence verification as a separate pass) | FULL (T38) | Content Architect via depth | MEDIUM -- wrapper specifies no divergence verification pass; if Content Architect doesn't read depth, divergence check may be skipped entirely |

**COVERAGE GAP FLAGGED:** Divergence Verification (Phase 5, lines 1684-1778) is NOT referenced in the enriched prompt or wrapper. It is ONLY available in the depth resource (11-tc-deep-invocation.md). The wrapper's artifact chain jumps from Pass 4 (intentionality) to Pass 5 (Mode 4 PA) with no divergence step. **Risk: MEDIUM** -- for Flagship, novelty is important; skipping divergence means no formal check against library patterns.

---

## 10. ADDITIONAL SECTIONS (Lines 1780-1932)

| Line Range | Concept | Prompt | Wrapper | Depth | Agent | Risk |
|-----------|---------|--------|---------|-------|-------|------|
| 1783-1788 | Stale Tension + Artificial Tension detection | NONE | NONE | NONE | N/A | LOW -- BECAUSE Test (in depth) catches artificial tension |
| 1791-1810 | Test Content Recommendations (Boris, Gas Town, Playbook) | NONE | NONE | PARTIAL (depth Section 9: "Lines 1791-1810: Test content recommendations") | N/A | ZERO -- content is predetermined as RESEARCH-SYNTHESIS.md |
| 1812-1824 | Invocation syntax (/tension-composition) | NONE | NONE | NONE | N/A | ZERO -- operational metadata, not content |
| 1827-1861 | Appendix: Builder Instruction Warnings (W1-W6: DEADZONE, OVERLABEL, MONOTONY, RESPONSIVE, STATS, IMPLICIT) | PARTIAL (prompt doesn't name W1-W6 but captures principles: S-12 void, C-11 spacing variation, MG-04 structural test) | NONE | FULL (Section 3D technique table + Section 3C verification techniques) | Builder agents via depth | MEDIUM -- W-DEADZONE and W-OVERLABEL are the two most common execution failures; builders need these warnings |
| 1831-1841 | CORE PRINCIPLE: IMPLICIT > EXPLICIT METAPHORS | PARTIAL (A1: "if metaphor changed, page structure would change"; MG-04: structural test) | PARTIAL (reminder #4: Middle 2 scales = 4/4, Ceiling 4 scales = 1.5/4) | FULL (Section 6 conviction lines: "best layouts make reader FEEL... worst moments were EXPLICIT") | Metaphor Agent, Builder agents via depth | LOW -- prompt's MG-04 structural test encodes this; depth adds the motivational text |
| 1862-1917 | Builder Guardrail Appendix (concrete values) + Warning Selection Protocol | FULL (B1 S-01 through S-15, Appendix parameter table with all values) | FULL (wrapper spatial safeguards) | FULL | Builder agents | ZERO |
| 1919-1932 | Test Results Summary (pipeline predicts richness not quality, implicit > explicit, dead zone epidemic, stats bars weak, zero soul violations) | PARTIAL (A6 Experiential Laws captures key findings; A3 anti-scale model) | PARTIAL (reminder #1, #2, #4) | FULL (depth reproduces these findings) | All agents | LOW |

---

## SUMMARY: UNREACHABLE ITEMS (NO agent encounters through ANY document)

| Item | Skill Lines | Risk Level | Impact |
|------|------------|-----------|--------|
| Edge Cases & Failure Modes (structureless, visual, flat, zero-tension, etc.) | 1653-1681 | LOW | Handled by Phase 0 routing which IS covered |
| Stale Tension + Artificial Tension detection | 1783-1788 | LOW | BECAUSE Test covers artificial; stale tension is edge case |
| Invocation syntax | 1812-1824 | ZERO | CLI metadata only |
| Test Content Recommendations | 1791-1810 | ZERO | Content predetermined |

**Total items with ZERO coverage across all 3 documents: 4 items, all LOW or ZERO risk.**

---

## ITEMS REACHABLE ONLY VIA DEPTH RESOURCE (11-tc-deep-invocation.md)

These items are NOT in the prompt or wrapper -- they require the Metaphor Agent, Content Architect, or builders to read the depth resource file.

| Item | Skill Lines | Technique ID | Risk if Agent Skips Depth | Assigned Agent |
|------|-----------|-------------|--------------------------|---------------|
| Constrained Search Query format | 507-516 | T11 | **HIGH** -- irreducible creative step | Metaphor Agent |
| Perceptual Risk Assessment (4 questions) | 626-647 | T16 | **HIGH** -- prevents high-richness-low-quality | Metaphor Agent |
| Opposition Predicts Richness | 238-248 | (in T6) | **MEDIUM** -- creative heuristic for axis selection | Metaphor Agent |
| Axis Interaction Effects (compound pairs) | 250-258 | (in T6) | **MEDIUM** -- wider metaphor spaces | Metaphor Agent |
| Three Formal Criteria for Genuine Tension | 344-360 | (in T7) | **MEDIUM** -- false tension acceptance risk | Metaphor Agent |
| Richness Formula + R5 Cap | 386-424 | T9 | **MEDIUM** -- tension selection mechanism | Metaphor Agent |
| Structural Property Extraction (emotions -> geometry) | 473-505 | T10 | **MEDIUM** -- translation bridge | Metaphor Agent |
| Three Search Heuristics | 518-526 | T12 | **MEDIUM** -- search efficiency | Metaphor Agent |
| Domain Search Menu (10 categories) | 528-543 | T13 | **MEDIUM** -- viable domain coverage | Metaphor Agent |
| Incompatible Metaphor Families | 567-574 | T14 | **MEDIUM** -- soul-violation prevention | Metaphor Agent |
| Perceptual Cost Assessment | 650-702 | T17 | **MEDIUM** -- guardrail violation prediction | Metaphor Agent |
| Content Resonance split (Nominal vs Structural) | 606-620 | (in T15) | **MEDIUM** -- scoring accuracy | Metaphor Agent |
| 5-Category Property Extraction | 1110-1175 | T25 | **MEDIUM** -- systematic metaphor-to-CSS | Metaphor Builder |
| Translation Grammar lookup tables | 1177-1248 | T26 | **MEDIUM** -- CSS implementation reference | Builders |
| 5-Rule Coherence Check | 1331-1366 | T30 | **MEDIUM** -- prevents channel contradictions | Mechanism Builder |
| Builder Warnings W1-W6 | 1827-1861 | W1-W6 | **MEDIUM** -- execution failure prevention | Builders |
| Divergence Verification (Phase 5) | 1684-1778 | T38 | **MEDIUM** -- novelty assurance | Content Architect |
| Metaphor Commitment verification questions | 809-862 | T20 (partial) | **MEDIUM** -- independence verification | Metaphor Agent |

**Total depth-only items: 18. HIGH risk: 2. MEDIUM risk: 16.**

---

## CRITICAL DEPENDENCY ANALYSIS

The coverage model has a single critical dependency:

**The Metaphor Agent MUST read `11-tc-deep-invocation.md`.**

Without this file, the Metaphor Agent loses:
- The constrained search query format (T11) -- HIGH risk
- Perceptual Risk Assessment (T16) -- HIGH risk
- 14 MEDIUM-risk items including search heuristics, domain menu, formal criteria, richness formula

**This dependency is specified in the wrapper** (Phase 1E: "METAPHOR AGENT reads: ephemeral/prompt-enrichment-audit/11-tc-deep-invocation.md") **and in the prompt** (E section: "METAPHOR AGENT reads: ~/.claude/skills/tension-composition/SKILL.md").

**HOWEVER:** The prompt's E section routes the Metaphor Agent to read the FULL TC SKILL.md (1,932 lines), while the wrapper routes to the depth resource (11-tc-deep-invocation.md) which contains pre-extracted invocation text. If the agent reads EITHER, coverage is complete. If the agent reads NEITHER, 2 HIGH and 16 MEDIUM items are unreachable.

**Assessment: ACCEPTABLE.** Two independent pathways (skill file OR depth resource) ensure the Metaphor Agent encounters all TC content. The wrapper's reading protocol makes skipping both files unlikely.

---

## DISCREPANCIES BETWEEN SKILL AND PROMPT

| # | Discrepancy | Skill Says | Prompt Says | Resolution |
|---|-------------|-----------|-------------|-----------|
| 1 | CSS Channels count | 6 channels (line 1249) | 7 channels: "chromatic, typographic, spatial, structural, density, rhythmic, intentional" (SC-02) | Skill's 6 are CSS-implementable; prompt adds 2 meta-channels. Builders should use skill's 6 for implementation, prompt's 7 for semantic coverage audit. |
| 2 | Container width range | 940-960px (line 948) | 940-1100px (S-01, Appendix: "960px default, 1100px proven upper bound from CD-006") | Prompt is BROADER. Skill is STRICTER. Prompt should be authoritative (incorporates CD-006 evidence). |
| 3 | Soul font families | Inter for body (line 305) | Source Sans 3 for body (U-09) | Prompt is AUTHORITATIVE. This is an evolution -- Source Sans 3 replaced Inter. Skill is outdated on this point. |
| 4 | Mechanism catalog path | `/active/design-system/techniques/mechanisms.md` (line 1055) | `design-system/compositional-core/grammar/mechanism-catalog.md` (E section) | Prompt path is CURRENT (post-restructure). Skill path is STALE. Prompt is authoritative. |
| 5 | Case studies path | `/active/design-system/case-studies/` (line 1054) | `design-system/compositional-core/case-studies/_INDEX.md` (various) | Prompt path is CURRENT. Skill path is STALE. |

---

## FINAL VERDICT

### Coverage Statistics
- **TC skill total concepts cataloged:** ~78 distinct items across 1,932 lines
- **Reachable via prompt alone:** 38 items (49%)
- **Reachable via prompt + wrapper:** 52 items (67%)
- **Reachable via prompt + wrapper + depth:** 74 items (95%)
- **Truly unreachable (no document):** 4 items (5%) -- all LOW/ZERO risk

### Risk Assessment
- **HIGH risk unreachable items:** 0 (both HIGH items are in depth resource, which is assigned to Metaphor Agent)
- **MEDIUM risk depth-only items:** 16 -- all reachable IF Metaphor Agent reads depth resource (specified in both prompt E section and wrapper Phase 1E)
- **Blocking gaps:** NONE

### Recommendations

1. **Verify Metaphor Agent reads depth resource.** The single most important coverage assurance is that the Metaphor Agent reads `11-tc-deep-invocation.md`. Both prompt and wrapper specify this, so the mechanism exists. Team-lead should confirm this in agent spawning instructions.

2. **Note font family discrepancy.** TC skill says "Inter" for body; prompt says "Source Sans 3". Builders should follow the prompt (authoritative). If a builder reads the skill's Phase 4.2 translation grammar, they'll see "Inter" -- this is a minor risk for token compliance.

3. **Note container width discrepancy.** Skill says 940-960px; prompt says 940-1100px. Prompt is authoritative (incorporates CD-006 evidence). Default to 960px per Appendix.

4. **Divergence Verification has no execution slot.** The wrapper's pass structure jumps from Pass 4 (intentionality) to Pass 5 (Mode 4 PA) with no divergence step. The depth resource has the full divergence protocol. Team-lead could insert a quick divergence check between Pass 4 and Pass 5, or accept that for this specific content (RESEARCH-SYNTHESIS.md) divergence is inherently high since no case study uses this content.

5. **The 6 vs 7 channels discrepancy should be noted for builders.** CSS-implementable channels are 6 (per skill); the prompt adds "rhythmic" and "intentional" as semantic (non-CSS) channels for audit purposes. This is a conceptual expansion, not a contradiction, but builders may be confused.

---

**END OF COVERAGE MATRIX**
**Total items: 78 | Covered: 74 (95%) | Unreachable: 4 (5%, all low risk)**
**Critical dependency: Metaphor Agent reads depth resource (2 independent routing mechanisms exist)**
**Discrepancies: 5 (all resolvable, prompt is authoritative)**
