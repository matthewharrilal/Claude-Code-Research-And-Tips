# ENRICHED TC SKILL PROTOTYPE: Structural Skeleton

**Author:** TC Skill Prototyper (Opus 4.6)
**Task:** #69
**Date:** 2026-02-19
**Sources:** TC SKILL.md (1,933 lines), Report 23 (TC Skill Audit), Report 26 (Enrichment vs New), Report 41 (ALWAYS FLAGSHIP Simplification)

---

## EXECUTIVE SUMMARY

The enriched TC skill goes from 1,933 lines to **~660 lines** (-66%). Operational density rises from **37% to 68%**. Every line of tier-conditional routing is eliminated. The skill's scope is PLANNING ONLY (Phases 0-3.5 + build plan output). All Phase 4+ builder content (CSS lookup tables, perceptual guardrails, component inventory, tokenization self-check, HTML output) is relocated to where builders actually read it (operational-recipe.md, mechanism-catalog.md, perception-thresholds.md).

The skill gains three new capabilities it currently lacks: (1) structured _build-plan.md output format, (2) transition table generation protocol, and (3) channel-map deliverable specification. These replace 624 lines of builder-oriented content with 120 lines of planner-oriented output specification.

**Core thesis:** TC is a TELESCOPE (wide, compositional, content-to-plan). It is NOT a MICROSCOPE (focused, CSS-level, plan-to-HTML). The enriched skill makes this boundary explicit and enforces it structurally.

---

## TABLE OF CONTENTS

| # | Section | Purpose | Line Budget | % of Total |
|---|---------|---------|------------|-----------|
| 0 | **YAML Frontmatter + Identity** | Skill metadata, scope declaration, TC does/does not do | 25 | 3.8% |
| 1 | **Phase 0: Content Analysis** | Type classification, scope assessment, section identification | 40 | 6.1% |
| 2 | **Phase 0.5: Route Decision** | Addition Test fast-exit, full pipeline routing (ALWAYS FLAGSHIP, no tiers) | 15 | 2.3% |
| 3 | **Phase 1: Multi-Axis Questioning** | Core 4 + Extended 5 + Structural Triggers + Interaction Effects + Output | 100 | 15.2% |
| 4 | **Phase 2: Tension Derivation** | Side A/B, Addition Test, 3 genuine criteria, 3 cosmetic criteria, BECAUSE test, Richness formula, Exit ramp | 110 | 16.7% |
| 5 | **Phase 3: Metaphor Collapse** | Property extraction, overlap, search query, domain menu, candidate scoring (A-F), 6-criterion rubric, 6 binary rejections | 165 | 25.0% |
| 6 | **Phase 3.5: Commitment + Divergence** | Lock-in gate, commitment verification, divergence check (merged from Phase 5) | 45 | 6.8% |
| 7 | **Phase 4: Build Plan Output** | Structured _build-plan.md specification: zone map, mechanism deployment, transition table, channel map, builder warnings | 100 | 15.2% |
| 8 | **Appendix A: KortAI Constraints** | System constraints, personality profile, soul test (condensed reference) | 30 | 4.5% |
| 9 | **Appendix B: Builder Warnings Library** | W-DEADZONE through W-IMPLICIT (TC selects which to include in build plan) | 30 | 4.5% |
| | **TOTAL** | | **~660** | **100%** |

---

## 1. WHAT GETS REMOVED (with line counts and reasons)

### 1A. Tier-Conditional Routing -- DEAD CODE (~145 lines)

| Current Lines | Section | Reason for Removal |
|---------------|---------|-------------------|
| 68-100 | Step 0D: Tier Classification table (Floor/Middle/Ceiling/Flagship routing) | Dead under ALWAYS FLAGSHIP. ALL content runs full pipeline. |
| 101-127 | Middle-tier pattern selection (CRESCENDO/F-PATTERN/BENTO/PULSE as routing shortcuts), Middle output template, "WHY Middle skips Phases 1-3" | Dead. Patterns SURVIVE but relocate to build plan output as FLAT MODE options (when Addition Test = NO). |
| 128-145 | Graceful degradation protocol, tier model validation caveats, "validated hypothesis" disclaimers | Dead. No degradation path exists. No tier to degrade from/to. |
| 148-165 | Step 0D-CEILING Context Box (18 lines of "If routed to Ceiling tier...") | Dead AS CONDITIONAL. The 7 requirements (per-category minimums, reinforcing pairs, 4-scale fractal, container width) become UNCONDITIONAL rules absorbed into the default path. |
| 866-872 | Phase 4 tier-specific deployment levels (Floor/Middle/Ceiling/Flagship) | Dead. One deployment level: per-category across all 5 families. |
| 1098-1103 | Natural landing by tier (repeated mechanism counts) | Dead. One statement: "Natural landing: 12-18 mechanisms." |
| 1432-1437 | Fractal consistency tier-calibrated requirements | Dead. One rule: "5 scales required." |
| 1480-1484 | Landmark tier-calibrated requirements | Dead. One rule: "Header + main + footer + transition grammar." |
| 1618 | "This phase is OPTIONAL" (tokenization) | Dead. Tokenization is MANDATORY (but relocated to builder recipe). |
| scattered (~40 lines) | "for Middle-tier+", "Ceiling+ only", "Flagship only", "Middle experiment validated..." tier-conditional framing | Dead hedging. Rewritten as unconditional. Provenance preserved without tier labels. |

**Total removed: ~145 lines**

### 1B. Builder-Oriented Content -- WRONG AUDIENCE (~480 lines)

| Current Lines | Section | Where It Goes | Why |
|---------------|---------|---------------|-----|
| 876-1049 | Phase 4.0: Perceptual Guardrails (174 lines of min/max tables, CSS examples, heading spacing enforcement, container width priority) | `perception-thresholds.md` (new canonical file) + `operational-recipe.md` Phase 0 (preflight) | TC planner doesn't write CSS. Builder needs these values directly. TC's build plan REFERENCES thresholds ("container: 960px per perception-thresholds.md") but doesn't contain the full table. |
| 1051-1107 | Step 4.0: Mechanism Library Access + Per-Category Deployment (57 lines) | Build plan output Section 7 (as specification, not as "read the catalog now") | TC SPECIFIES per-category deployment in the build plan. The "NOW read mechanism-catalog.md" instruction is for the BUILDER, not the planner. TC outputs deployment requirements; builder executes them. |
| 1110-1175 | Step 4.1: 5-Category Taxonomy Extraction (66 lines) | **STAYS but MOVES** -- becomes the generative core of Section 7 (Build Plan Output). TC extracts metaphor properties into the 5-category taxonomy and writes them INTO the build plan. | This is the HANDOFF point -- telescope to microscope. The extraction IS TC's job; the CSS implementation is the builder's. The 5-category table becomes TC's primary OUTPUT, not a mid-pipeline step. |
| 1177-1260 | Step 4.2: Translation Grammar -- CSS Lookup Tables (84 lines of Weight/Depth/Density/Flow/Containment/Transition/Hierarchy lookup tables + 6 Exhaustive CSS Channels) | `mechanism-catalog.md` (already exists, already contains these) + `operational-recipe.md` | DUPLICATE reference material. The builder reads mechanism-catalog.md directly. TC planner does not need CSS lookup tables -- TC specifies WHAT property, not WHICH CSS property. |
| 1262-1330 | Steps 4.2B-4.2C: Pacing Prediction + Rhythm Variation (69 lines) | Pacing assessment → Section 7 Build Plan Output (condensed to ~15 lines of pacing specification). Rhythm variation → `operational-recipe.md` Phase 4 (transition implementation). | Pacing ASSESSMENT is TC's job (the planner decides pacing). Rhythm IMPLEMENTATION is the builder's job (writing varied CSS transitions). TC outputs "PACING: CRESCENDO, dramatic peak at 70%, 4 transitions (2 SMOOTH, 1 BRIDGE, 1 BREATHING)." Builder implements it. |
| 1331-1365 | Step 4.3: Coherence Checking -- Rules C-1 through C-5 (35 lines) | **REPLACED** by channel-map deliverable in Section 7. TC specifies which channels shift at each boundary. The coherence RULES (C-1 through C-5) become VERIFICATION criteria in the gate runner, not planning instructions. | Abstract coherence rules ("density direction must be consistent") become concrete channel specifications ("S1→S2: background shifts -15 RGB, border shifts +2px, typography unchanged"). |
| 1368-1402 | Steps 4.4-4.5: Component Inventory + Adapt-vs-Invent (35 lines of Tier 2 vs Tier 3 classification, invention constraints) | `operational-recipe.md` Phase 2 (component selection). | Builder decides whether to adapt or invent. TC's build plan specifies component NEEDS ("this section needs a callout component"), not component DECISIONS ("use Tier 2 vs Tier 3"). |
| 1404-1414 | Step 4.6: Transition Grammar Matrix (11 lines) | `operational-recipe.md` Phase 4 (transition implementation lookup). | Builder lookup table. TC specifies transition TYPES in the build plan; builder implements them using this matrix. |
| 1416-1462 | Step 4.7: Fractal Consistency GATE (47 lines) | Build plan output Section 7 (TC writes fractal coverage table as BUILD PLAN deliverable). Gate VERIFICATION moves to gate-runner.js. | TC produces the fractal table. The gate CHECKS it. Two different responsibilities. |
| 1466-1532 | Phase 4.7B: Landmark Completeness GATE (67 lines of header/main/footer verification, CSS evidence examples, provenance) | `operational-recipe.md` Phase 1 (HTML skeleton). Gate verification → gate-runner.js. | Builder constructs landmarks. Gate verifies them. TC's build plan says "Header: dark, 3px red border. Footer: mirrors header." (5 lines, not 67). |
| 1536-1543 | Step 4.8: Section-Aware Composition (8 lines) | TC's build plan section map handles this implicitly (each section gets a zone assignment + metaphor intensity level). | Already covered by the zone-map deliverable in Section 7. |
| 1547-1621 | Phase 4.9: Tokenization Self-Check (75 lines of formula, examples, gap analysis) | `operational-recipe.md` Phase 9 (pre-ship verification). | Builder responsibility. TC never touches tokens. |
| 1624-1681 | Phase 5: Output A+B (58 lines specifying "Generate TWO outputs: thought process + HTML") | **REPLACED** by Section 7 (Build Plan Output). Under PV2, TC outputs ONE artifact: `_build-plan.md`. The thought process is EMBEDDED in the plan (zone rationale, metaphor justification). The HTML is the BUILDER'S output. | Phase 5 contradicts PV2 architecture. TC does not produce HTML. |
| 1684-1778 | Phase 5: Divergence Verification (95 lines of case study access, divergence tables, convergence justification) | **CONDENSED and MERGED** into Section 6 (Phase 3.5 Commitment + Divergence). ~45 lines total. | Under PV2, TC exits after Phase 3.5. Divergence verification should happen AT commitment time (before the build plan is written), not after HTML generation. The full case study comparison protocol condenses to: (1) check _INDEX.md titles, (2) if convergence detected, fill 5-question justification table, (3) pass or regenerate. |
| 1791-1809 | Test Content Recommendations (19 lines about Boris/Gas Town/Playbook) | **DELETED entirely.** | Stale. Specific to 3 content pieces from Phase D testing. Not useful for future invocations. |
| 1862-1903 | Builder Guardrail Appendix (42 lines of concrete values) | `perception-thresholds.md` (canonical source). | DUPLICATE of Phase 4.0 guardrails. Both copies are removed; canonical file replaces both. |
| 1919-1933 | Appendix: Test Results Summary (15 lines) | **DELETED entirely.** | Historical. All findings already integrated as R1-R6 improvements inline. Keeping this is provenance-for-provenance's-sake. |

**Total relocated/removed: ~480 lines**

### 1C. Redundant/Stale Content -- DEAD WEIGHT (~76 lines)

| Current Lines | Section | Reason |
|---------------|---------|--------|
| 1791-1809 | Test Content Recommendations | Stale (counted above) |
| 1862-1903 | Builder Guardrail Appendix | Duplicate (counted above) |
| 1919-1933 | Test Results Summary | Historical (counted above) |
| 6-23 | Construction Bias Preamble (18 lines of philosophy) | Unverified. No agent has ever been measured failing from "discovery bias." Condensed to 3 lines in Section 0 Identity. |

**Total dead weight: ~76 lines** (some overlap with 1B above)

### Removal Summary

| Category | Lines Removed | % of Current |
|----------|--------------|-------------|
| Tier routing (dead code) | ~145 | 7.5% |
| Builder content (wrong audience) | ~480 | 24.8% |
| Redundant/stale | ~76 | 3.9% |
| Trimmed verbose sections | ~572 | 29.6% |
| **TOTAL REMOVED** | **~1,273** | **65.8%** |

---

## 2. WHAT GETS RESTRUCTURED

### 2A. Phase 0 Content Assessment (Current: ~65 lines -> Target: 40 lines)

**What stays:** Steps 0A (Content Type Classification: prose/mixed/visual/self-referential), 0B (Scope Assessment: micro/short/standard/long/massive), 0C (Section Identification).

**What changes:**
- Step 0D (Tier Routing) DELETED. Replaced by Phase 0.5 (Route Decision): 15-line binary gate. Addition Test determines "full pipeline or flat mode." No tier classification.
- Step 0D-CEILING context box ABSORBED as unconditional defaults: per-category minimums, reinforcing pairs, 5-scale fractal, container width. These appear as NON-CONDITIONAL requirements, not tier-gated.
- Step 0E (Library Access Prohibition) stays verbatim but condensed from 21 lines to ~10. The rule is simple: no library during Phases 0-3. Ten lines is generous.

**Structural change:** Phase 0 becomes a brief pre-flight (40 lines) instead of a routing table (65 lines). Content classification stays; tier classification disappears.

### 2B. Phase 1 Multi-Axis Questioning (Current: ~84 lines -> Target: 100 lines, +16)

**What stays (nearly verbatim):** Core Four axis table, Extended Five axis table, Structural Trigger axes, Axis Selection Protocol, Opposition Predicts Richness, Axis Interaction Effects, Phase 1 Output format.

**What gets ENRICHED (+16 lines):**
- **Content topology detection** (+8 lines): Before axis questioning, classify the content's topology: HIERARCHICAL (tree), LINEAR (sequence), NETWORKED (graph), CYCLICAL (loop), LAYERED (stacked). Topology influences axis selection: NETWORKED content triggers NAVIGATE and COMPARE; LAYERED content triggers FEEL and DISCOVER; CYCLICAL content triggers RECONCILE and REMEMBER. This is a NEW pre-step that helps agents pick the most productive axes faster.
- **Depth vs breadth protocol** (+5 lines): After running all applicable axes, assess yield distribution. If 3+ axes = HIGH yield, go BROAD (use all, compound tensions). If 1-2 axes = HIGH and rest = LOW, go DEEP (explore high-yield axes with follow-up sub-questions). This prevents the common failure of spreading thin across 9 medium-yield axes when 2 are genuinely rich.
- **Output quality gate** (+3 lines): "Count HIGH-yield axes. If < 2, content may be LOW-TENSION. Consider fast-exit through Addition Test." This early warning prevents agents from forcing metaphor on genuinely low-tension content.

**Why this section GROWS:** Phase 1 is THE creative engine. It is 100% INVOCATIONAL -- every line directly generates the reader-need analysis that drives everything downstream. The 3 enrichments make it more operationally effective, not longer for length's sake.

### 2C. Phase 2 Tension Derivation (Current: ~178 lines -> Target: 110 lines, -68)

**What stays:**
- Side A (reader needs from Phase 1)
- Side B (KortAI constraints -- CONDENSED, moved to Appendix A as reference)
- The Addition Test (binary gate) -- verbatim
- Three Formal Criteria for Genuine Tension -- verbatim
- Three Criteria for Cosmetic Tension -- verbatim
- The BECAUSE Test -- verbatim
- Richness Formula (Opposition x Overlap x Width) -- verbatim
- R5 IMPROVEMENT (Richness Cap) -- verbatim
- Tension Validity Check -- verbatim
- Exit Ramp (zero/cosmetic/genuine paths) -- verbatim

**What gets TRIMMED (-68 lines):**
- Side B: KortAI Design System Constraints (lines 286-335, ~50 lines of geometry/palette/typography/borders/spacing/personality/soul test) --> CONDENSED to 5-line reference: "Side B: KortAI system constraints (Appendix A). Key tensions: 75% austere, 95% angular, 100% geometric, 90% restrained." Full values in Appendix A.
- Tension Landscape Quick Reference (lines 425-441, ~17 lines) --> CONDENSED to 5 lines. The strongest/zero tension lists are useful but verbose.
- Practical Selection Protocol (lines 407-415, ~9 lines) --> CONDENSED to 4 lines. The tiebreaker hierarchy is 2 lines, not 6.

**What stays verbatim:** The Addition Test, 3 genuine criteria, 3 cosmetic criteria, BECAUSE test, Richness Formula, R5 cap, Tension Spectrum, Exit Ramp. These are the creative-analytical core. Zero trimming.

### 2D. Phase 3 Metaphor Collapse (Current: ~330 lines -> Target: 165 lines, -165)

**What stays (verbatim or near-verbatim):**
- Steps 3.1-3.4: Property extraction from Side A + Side B, Structural Overlap calculation, Search Query generation (~40 lines, condensed from ~61 by trimming examples)
- Three Search Heuristics (~10 lines, condensed from ~15)
- Domain Search Menu (condensed to single reference table, ~12 lines from ~17)
- Step 3.5 Composite Scoring: ALL six dimensions (A-F) stay:
  - A. Tension Resolution (~10 lines)
  - B. Structural Isomorphism Count (~10 lines)
  - C. Content Resonance Split (Nominal + Structural) (~12 lines)
  - D. Mechanism Feasibility (~5 lines)
  - E. Perceptual Risk Assessment (~15 lines, condensed from ~25 by removing the worked example)
  - F. Perceptual Cost Assessment (~15 lines, condensed from ~40 by removing the worked example; keeping the 5 cost questions)
- Composite Verdict (PROCEED/CONSIDER/REJECT) (~5 lines)
- Step 3.5G: 6-Criterion Rubric (18 points) (~20 lines, condensed from ~53 by tightening the scoring table)
- 6 Binary Rejection Checks (R1-R6) (~10 lines)
- Step 3.6: Select the Metaphor + Failure Modes (~15 lines, condensed from ~20)
- Irreducible Creative Step (~5 lines, condensed from ~10)

**What gets TRIMMED (-165 lines):**
- Responsive Degradation Check table (lines 545-565, ~21 lines) --> CONDENSED to 5-line rule: "Score responsive risk LOW/MODERATE/HIGH. MODERATE+ adds W-RESPONSIVE warning to build plan. Metaphors encouraging narrow containers (cylindrical, manuscript) get extra scrutiny."
- Incompatible Metaphor Families (lines 567-574, ~8 lines) --> CONDENSED to 3-line list: "INCOMPATIBLE domains (conflict with angular/flat/sharp): Organic/Biological, Liquid/Fluid, Atmospheric/Weather, Textile/Fabric, Musical (curved forms)."
- Worked examples throughout Steps 3.5E and 3.5F (Geological Core Sample example, ~30 lines) --> REMOVED. The RULES stay; the EXAMPLES move to a reference appendix or are simply cut. TC planner doesn't need worked examples of cost scoring to understand the 5 questions.
- Cultural Consideration (lines 789-795, ~7 lines) --> CONDENSED to 2 lines: "Prefer physics-grounded over culture-grounded metaphors. For global audiences, test cultural universality."
- Verbose scoring format templates (~20 lines of blank templates like "Tension 1: Resolves? YES/PARTIAL/NO") --> CONDENSED. The structure is clear from the headings; blank templates are formatting waste.
- CRITICAL PRINCIPLE block at line 702 (~10 lines restating "pipeline predicts RICHNESS not QUALITY") --> CONDENSED to 2 lines. This principle is already embodied in the Perceptual Risk and Cost assessments.
- Provenance block at line 757 (~8 lines about ceiling experiment) --> CONDENSED to 1-line reference.

**What gets ADDED (+5 lines):**
- **Structural vs Announced self-check** (+5 lines): Before committing to the metaphor, TC asks: "Remove all text labels from the imagined layout. Can you still perceive the metaphor through spatial/visual/typographic structure alone? YES = STRUCTURAL (proceed). NO = ANNOUNCED (reconsider or add W-OVERLABEL warning)." This catches the F-40 failure (announced metaphors) at source, in the PLANNER, not just in the PA auditor. Provenance: ceiling experiment metaphor ("secure facility") was ANNOUNCED but passed all other scoring criteria; this self-check would have caught it.

### 2E. Phase 3.5 Commitment + Divergence (Current: 64 + 95 = 159 lines -> Target: 45 lines, -114)

**What gets MERGED:**
Phase 3.5 (Commitment Gate, lines 799-862, 64 lines) and Phase 5 (Divergence Verification, lines 1684-1778, 95 lines) merge into a single section. Under PV2, TC exits after the build plan. There is no Phase 5 "after HTML generation." Divergence verification must happen BEFORE the build plan is written, at the moment of commitment.

**What the merged section contains (45 lines):**
1. Metaphor commitment statement (template, ~3 lines)
2. Justification: how it resolves tension, why over alternatives (~5 lines template)
3. Commitment verification: 3 binary questions (derived independently? justified without library? appears in _INDEX.md?) (~8 lines)
4. If convergence detected: divergence justification table (5 questions) (~12 lines)
5. If justification fails: regeneration constraint (~5 lines)
6. Phase 3.5 completion checklist (~4 lines)
7. Library access prohibition enforcement (~3 lines reference)
8. Structural vs Announced final check (~5 lines, if not already checked in Phase 3)

**What gets CUT from current Phase 5 divergence (-80 lines):**
- Step 5.1 (Select Similar Case Studies, ~10 lines) --> 3 lines: "Scan _INDEX.md titles. Identify 0-3 similar case studies."
- Step 5.2 (Divergence Comparison Table, ~15 lines) --> REMOVED. Under PV2, TC doesn't have access to case study implementations to compare "mechanisms used" or "section architecture." TC only checks titles and tensions, not full case studies.
- Step 5.3 (Divergence Verdict, ~10 lines) --> 3 lines: "3+ dimensions divergent = PROCEED. 3+ dimensions same = justify or regenerate."
- Step 5.4 (Convergence Justification, ~30 lines) --> 12 lines (condensed table, kept core logic)
- Step 5.5 (Extraction of Mechanisms, ~10 lines) --> REMOVED. TC doesn't extract mechanisms after HTML generation because TC doesn't generate HTML.

### 2F. Construction Bias Preamble (Current: 18 lines -> Target: 3 lines in Section 0)

**Current (18 lines):** Philosophy about constructing vs discovering, with examples of what "discovery bias" looks like, success/failure definitions.

**Target (3 lines):**
> You are CONSTRUCTING a composition, not DISCOVERING one. Multiple valid metaphors exist for the same content. Your derivation is ONE path, not THE path.

**Rationale:** No agent has ever been measured failing from "discovery bias." The 3-line version communicates the same principle. The 15-line expansion was conceptual scaffolding for the skill's human readers, not operational guidance for agent executors.

---

## 3. WHAT GETS ADDED

### 3A. Section 7: Build Plan Output (~100 lines, NEW)

This is the DEFINING new section. TC's entire output under PV2 is a structured `_build-plan.md` file. This section specifies what that file must contain.

**Build Plan Deliverables (each with format template):**

| Deliverable | Lines | What TC Specifies | What Builder Reads |
|-------------|-------|-------------------|-------------------|
| **Zone Map** | ~15 | Zone count (2-5), zone names, zone backgrounds (hex), zone content assignments. For each pair of adjacent zones: RGB delta (must be >= 15). | Builder sets section backgrounds from this map. |
| **Mechanism Deployment** | ~20 | Per-category (S/T/M/B/R) mechanism selection with justification. 3+ rejected mechanisms with rationale. Reinforcing pairs identified. | Builder reads catalog entry for each selected mechanism, implements per recipe. |
| **Transition Table** | ~20 | For each section boundary: transition type (SMOOTH/BRIDGE/BREATHING), which channels shift and by how much, minimum 3 unique transition types total. Template: `S1->S2: type=BRIDGE, bg_delta=+15 RGB, border=1px->3px, typography=body->display, spacing=48px->64px` | Builder implements transitions using recipe Phase 4 instructions. THE key new artifact. |
| **Channel Map** | ~15 | For each section boundary: 6 CSS channels listed, which ones shift (YES/NO), delta value for each shift. Must have >= 3 channels shifting at every boundary. | Builder verifies channel coherence during implementation. Gate runner verifies programmatically. |
| **Isomorphism Table** | ~8 | (If metaphor exists) Each metaphor physical property -> content parallel -> CSS channel. | Builder uses this as the compositional intent guide. |
| **Pacing Assessment** | ~7 | Section count, pacing model (CRESCENDO/PULSE/F-PATTERN/BENTO), dramatic peak location (% of page), breathing model (CHANGING STATE, not EMPTY SPACE). | Builder structures section sequence accordingly. |
| **Fractal Coherence Table** | ~8 | 5-scale table (Navigation/Page/Section/Component/Character): pattern expression + planned CSS. | Builder implements coherence at each scale. Gate runner verifies. |
| **Builder Warnings** | ~5 | Selected warnings from Appendix B (W-DEADZONE through W-IMPLICIT) based on metaphor risk profile. | Builder reads warnings before starting. |
| **Flat Mode Spec** | ~2 | (If Addition Test = NO): density pattern selection, zone count, per-category minimums. No isomorphism table, no metaphor, no channel map. | Builder follows recipe without metaphor layer. |

**Why this section matters:** Currently TC produces "Output A" (thought process document) and "Output B" (HTML layout). Under PV2, TC produces ONE artifact: `_build-plan.md`. This section transforms TC from a "thinking skill" into a "planning skill" -- the output is an actionable specification, not a philosophical exploration. The transition table and channel map are the two artifacts that CURRENTLY DO NOT EXIST anywhere in the system and were identified as the key missing handoff elements (Reports 26 and 68).

### 3B. Content Topology Detection (added to Phase 1, +8 lines)

```
CONTENT TOPOLOGY CLASSIFICATION (before axis questioning):
- HIERARCHICAL (tree): nested levels, parent-child → triggers UNDERSTAND, NAVIGATE
- LINEAR (sequence): step-by-step, before-after → triggers DO, ORIENT
- NETWORKED (graph): interconnected, hub-spoke → triggers NAVIGATE, COMPARE, SEE
- CYCLICAL (loop): recurring, iterative → triggers RECONCILE, REMEMBER
- LAYERED (stacked): levels, depth, strata → triggers FEEL, DISCOVER

Select the PRIMARY topology. If mixed, note the secondary.
Topology influences which axes will be HIGH YIELD.
```

### 3C. Depth vs Breadth Protocol (added to Phase 1, +5 lines)

```
YIELD DISTRIBUTION ASSESSMENT (after all axes scored):
- 3+ axes HIGH yield: Go BROAD — compound tensions across multiple axes
- 1-2 axes HIGH, rest LOW: Go DEEP — explore high-yield axes with sub-questions
- 0 axes HIGH: Content is LOW-TENSION — Addition Test will likely route to flat mode

If going DEEP: for each HIGH axis, ask 2-3 follow-up questions:
  "What SPECIFICALLY about [content property] creates this need?"
  "Would a reader with different expertise level feel this need differently?"
```

### 3D. Structural vs Announced Self-Check (added to Phase 3, +5 lines)

```
STRUCTURAL SURVIVAL PRE-CHECK (before committing metaphor):
Imagine the finished layout. Now REMOVE all text labels.
Can you still perceive the metaphor through spatial/visual/typographic structure?
- YES = STRUCTURAL metaphor (proceed)
- NO = ANNOUNCED metaphor (reconsider; if proceeding, add W-OVERLABEL warning)
Interpretive Distance score MUST be >= 2 AND Structural Survival score MUST be >= 2.
```

---

## 4. SCOPE BOUNDARY: TC Does PLANNING (Telescope), NOT BUILDING (Microscope)

### Where Exactly Is the Line?

| TC DOES (Telescope) | TC DOES NOT (Microscope) |
|---------------------|--------------------------|
| Classify content type and topology | Write any CSS |
| Identify reader needs across 4-14 axes | Select specific components |
| Derive genuine tension from need/system opposition | Determine Tier 2 vs Tier 3 component classification |
| Score and select metaphor through 6+6 criteria | Write HTML structure |
| Extract metaphor properties into 5-category taxonomy | Implement mechanisms in CSS |
| Specify zone count, zone backgrounds (hex values) | Calculate CPL or token compliance |
| Specify which mechanisms to deploy (by catalog number) | Generate responsive breakpoint CSS |
| Specify transition types between sections | Verify heading spacing ratios in code |
| Specify channel shifts at each boundary (delta values) | Run perceptual guardrail checks against CSS |
| Specify fractal coherence plan (5-scale table) | Access or read mechanism-catalog.md implementation details |
| Select builder warnings from risk assessment | Verify landmarks exist in HTML |
| Output structured _build-plan.md | Output HTML file |

### The Handoff Point

TC's output is `_build-plan.md`. The builder reads `_build-plan.md` + `operational-recipe.md` + `mechanism-catalog.md` + `perception-thresholds.md` + `tokens.css`.

TC writes: "Zone 2 background: #F0EBE3. Zone 3 background: #E5DDD3. Delta: 15 RGB (PASS)."
Builder implements: `.zone-dense { background: var(--color-zone-dense); }` with the correct hex value from the plan.

TC writes: "Transition S2->S3: BRIDGE, bg +15 RGB, border 1px->3px, typography body->display."
Builder implements: The recipe Phase 4 instructions for BRIDGE transitions, using the specific deltas from the plan.

**The intelligence crosses the boundary through STRUCTURED ARTIFACTS, not through summarization.** TC's compositional analysis is embodied in specific hex values, mechanism numbers, transition types, and channel deltas. The builder doesn't need to understand WHY the metaphor works -- the builder reads the plan and executes the recipe.

---

## 5. ALWAYS FLAGSHIP IMPACT: Before/After

### Before (Current Skill)

```
Step 0D: Tier Classification and Pipeline Routing

BEFORE entering Phase 1, classify the target tier for this content.

| Content Signal | Tier | Route |
|...Floor: Skip Phases 1-5. Use Track 1...
|...Middle: Skip Phases 1-3. Go to Phase 4.0 with PATTERN selection...
|...Ceiling: Full pipeline (Phases 1-7)...
|...Flagship: Full pipeline + multi-pass audit...

CRITICAL CAVEAT — Mechanism Count as Proxy, Not Target:
The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier...
[14 lines of caveat]

Provenance: These counts were BACKWARD-ENGINEERED...
[14 lines of provenance]

For Middle-tier pages (SKIP Phases 1-3):
You do NOT derive a metaphor. Instead, select a DENSITY PATTERN.
Patterns vs Mechanisms (important distinction):...
[27 lines of Middle-tier routing]

Middle-tier output:
TIER: Middle
PATTERN: [selected pattern]
SKIP: Phases 1-3
[8 lines of Middle output template]

WHY Middle skips Phases 1-3:...
[5 lines of explanation]

Ceiling/Flagship tier: Proceed to Phase 1 (full pipeline).
Graceful degradation protocol:...
[5 lines of degradation]

[TOTAL: ~78 lines]
```

### After (Enriched Skill)

```
Phase 0.5: Route Decision

ALL content runs the full pipeline (Phases 0-3.5) under ALWAYS FLAGSHIP.

The Addition Test (Phase 2) is the ONLY exit valve:
- Addition Test = GENUINE TENSION: Full metaphor derivation (Phases 1-3.5)
- Addition Test = NO TENSION: Fast-exit to FLAT MODE (zones + recipe, no metaphor)

Requirements (unconditional):
- Per-category mechanism minimums: S:1+, T:1+, M:1+, B:1+, R:1+
- Reinforcing pairs: >= 2 mechanism pairs encoding same semantic
- Fractal coherence: 5 scales (Navigation/Page/Section/Component/Character)
- Container width: 940-960px (NON-NEGOTIABLE)
- Transition variety: >= 3 unique types

[TOTAL: ~15 lines]
```

**Reduction: 78 lines -> 15 lines (-81%). Zero judgment calls. Zero tier classification. Binary routing only (genuine tension or not).**

### Cascading Effect Through the Skill

Every subsequent section that said "for Middle-tier+" or "Ceiling+ only" or "Flagship:" now reads as an unconditional instruction:

| Before | After |
|--------|-------|
| "Per-category deployment (MANDATORY for Middle-tier+)" | "Per-category deployment (MANDATORY)" |
| "5-scale fractal coherence for Flagship" | "5-scale fractal coherence" |
| "Header + main + footer for Middle-tier+" | "Header + main + footer" |
| "Token compliance >= 80% (Ceiling should target)" | "Token compliance >= 80%" |
| "This phase is OPTIONAL but RECOMMENDED" | (Phase relocated to builder recipe; MANDATORY) |
| "Metaphor Scoring Rubric (MANDATORY for Ceiling+ Tier)" | "Metaphor Scoring Rubric (MANDATORY)" |
| "PA-05c sub-dimensions (Ceiling+ only)" | "PA-05c sub-dimensions" (in PA skill, not TC) |

---

## 6. OPERATIONAL DENSITY: Current 37% -> Target 68%

### How Each Section Contributes

| Section | Lines | Category | % Invocational | Justification |
|---------|-------|----------|---------------|---------------|
| 0. Identity + Scope | 25 | META + OPERATIONAL | 60% (15/25) | 10 lines META (YAML, description), 15 lines OPERATIONAL (scope boundary table, construction principle) |
| 1. Phase 0: Content Analysis | 40 | OPERATIONAL | 85% (34/40) | Classification tables are directly actionable. ~6 lines of framing. |
| 0.5. Route Decision | 15 | OPERATIONAL | 100% (15/15) | Every line is a binary routing instruction or unconditional requirement. |
| 2. Phase 1: Multi-Axis Questioning | 100 | **INVOCATIONAL** | 90% (90/100) | Axis tables + topology detection + interaction effects = pure creative generation. ~10 lines of framing/headers. |
| 3. Phase 2: Tension Derivation | 110 | **INVOCATIONAL** | 80% (88/110) | Addition Test, 3+3 criteria, BECAUSE test, Richness Formula = pure analytical generation. ~22 lines of Side B reference (condensed) + framing. |
| 4. Phase 3: Metaphor Collapse | 165 | **INVOCATIONAL** | 75% (124/165) | Scoring dimensions, rubric, binary rejections, search heuristics = pure creative evaluation. ~41 lines of reference tables (domain menu, incompatible families) + framing. |
| 5. Phase 3.5: Commitment + Divergence | 45 | PROTECTIVE + INVOCATIONAL | 65% (29/45) | Commitment verification is protective but directly actionable. Divergence justification is a creative-analytical exercise. ~16 lines of template formatting. |
| 6. Phase 4: Build Plan Output | 100 | **INVOCATIONAL** | 70% (70/100) | Zone map, mechanism deployment, transition table, channel map = TC's defining output. ~30 lines of format templates. |
| 7. Appendix A: KortAI Constraints | 30 | REFERENCE | 0% | Pure reference material. Not invocational, but necessary for Side B tension derivation. |
| 8. Appendix B: Builder Warnings | 30 | PROTECTIVE | 30% (9/30) | Warning text is protective. Selection protocol (which warnings to include) is operational. |
| **TOTAL** | **~660** | | **68% (449/660)** | |

### Comparison

| Metric | Current (1,933 lines) | Enriched (660 lines) | Change |
|--------|----------------------|---------------------|--------|
| Total lines | 1,933 | 660 | -66% |
| INVOCATIONAL lines | ~718 (37.1%) | ~449 (68%) | +31 pp |
| PROTECTIVE lines | ~510 (26.4%) | ~55 (8.3%) | -18 pp |
| OPERATIONAL/REFERENCE lines | ~461 (23.8%) | ~120 (18.2%) | -6 pp |
| CONDITIONAL lines | ~103 (5.3%) | 0 (0%) | -5 pp |
| REDUNDANT lines | ~76 (3.9%) | 0 (0%) | -4 pp |
| META lines | ~16 (0.8%) | ~36 (5.5%) | +5 pp (build plan templates count as META) |
| Guardrail:Playbook ratio | ~1.4:1 | ~0.12:1 | Inverted |

### What "68% Invocational" Means Concretely

Every line in the skill either:
1. **GENERATES** creative analysis (axis questioning, topology classification, tension derivation)
2. **EVALUATES** compositional candidates (scoring dimensions, rubric, binary rejections, perceptual risk)
3. **SPECIFIES** build plan deliverables (zone map, mechanism deployment, transition table, channel map)
4. **GATES** quality at binary checkpoints (Addition Test, Richness >= 8, Interpretive Distance >= 2, Structural Survival >= 2)

Zero lines:
- Tell the planner about CSS values they don't write
- Route between tiers that don't exist
- Duplicate reference material available in other files
- Provide historical provenance without operational value
- Explain theory without producing action

---

## 7. SECTION-BY-SECTION DETAILED SKELETON

### Section 0: YAML Frontmatter + Identity (25 lines)

```
Lines 1-4: YAML frontmatter (name, description, trigger phrases)

Lines 5-7: Construction principle (3 lines, condensed from 18)
  "You are CONSTRUCTING, not DISCOVERING. Multiple valid metaphors exist.
   Your derivation is one path, not the path."

Lines 8-15: SCOPE DECLARATION (what TC does / does not do)
  TC DOES: Content analysis (Phase 0) -> Tension derivation (Phase 1-2) ->
           Metaphor collapse (Phase 3) -> Build plan output (Phase 4)
  TC DOES NOT: Write CSS, write HTML, select components, verify guardrails,
               run tokenization checks, produce the final page.
  TC OUTPUT: _build-plan.md (structured artifact for builder)

Lines 16-20: PIPELINE OVERVIEW (condensed from current 10 lines)
  CONTENT -> ASSESSMENT -> QUESTIONING -> TENSION -> [GATE] -> METAPHOR -> BUILD PLAN
  (input)    (Phase 0)     (Phase 1)     (Phase 2)            (Phase 3)    (Phase 4)

Lines 21-25: UNCONDITIONAL REQUIREMENTS (absorbed from Ceiling context box)
  - Per-category minimums: S:1+, T:1+, M:1+, B:1+, R:1+
  - Reinforcing pairs: >= 2
  - 5-scale fractal coherence
  - Container width: 940-960px
  - >= 3 transition types
```

### Section 1: Phase 0 — Content Analysis (40 lines)

```
Lines 26-35: Step 0A Content Type Classification (10 lines)
  - Prose-dominant (<30% code/tables) -> STANDARD path
  - Mixed (30-60%) -> HYBRID path (narrative sections get pipeline, code/data get defaults)
  - Visual-dominant (>60%) -> PRESENTATION-INTRINSIC (skip metaphor for visual portions)
  - Self-referential (content IS the design system) -> ABORT

Lines 36-43: Step 0B Scope Assessment (8 lines)
  - MICRO (<100 words): Skip pipeline, apply defaults
  - SHORT (100-500): Reduced pipeline, 2 needs max per axis
  - STANDARD (500-3000): Full pipeline as specified
  - LONG (3000-10000): Segment first, pipeline per section, unifying pass
  - MASSIVE (10000+): Multi-page architecture

Lines 44-53: Step 0C Section Identification (10 lines)
  - Identify natural sections by heading/topic/mode change
  - Classify each: NARRATIVE / REFERENCE / CODE / DATA / MIXED
  - Flag structurally incompatible sections (need section-level variation)

Lines 54-65: Step 0E Library Access Prohibition (12 lines)
  - DO NOT read case studies, explorations, or pattern library during Phases 0-3
  - Library access permitted: Phase 3.5 (titles only in _INDEX.md for convergence check)
  - Violation invalidates the derivation
```

### Section 2: Phase 0.5 — Route Decision (15 lines)

```
Lines 66-80: Route Decision
  ALL content runs full pipeline under ALWAYS FLAGSHIP.
  Addition Test (Phase 2) is the ONLY exit:
    GENUINE TENSION -> full metaphor derivation (Phases 1-3.5 -> build plan)
    NO TENSION -> FLAT MODE (zones + recipe, no metaphor)

  FLAT MODE output:
    - Density pattern: CRESCENDO / F-PATTERN / BENTO / PULSE
    - Zone count and backgrounds
    - Per-category mechanism minimums
    - No isomorphism table, no metaphor, no channel map
```

### Section 3: Phase 1 — Multi-Axis Questioning (100 lines)

```
Lines 81-84: Content Topology Classification (+8 lines, NEW)
  HIERARCHICAL/LINEAR/NETWORKED/CYCLICAL/LAYERED
  Topology -> axis yield prediction

Lines 85-92: Core Four Axes (8 lines, table)
  FEEL / UNDERSTAND / DO / BECOME
  Question + produces + richest when

Lines 93-104: Extended Five Axes (12 lines, table)
  NAVIGATE / TRUST / EVALUATE / ORIENT / RECONCILE
  Question + richest when + low yield when

Lines 105-116: Structural Trigger Axes (12 lines, table)
  COMPARE / IDENTIFY / DISCOVER / SEE / REMEMBER
  Deploy when content contains... + structural pattern triggered

Lines 117-122: Axis Selection Protocol (6 lines)
  1. Run core four (always)
  2. Run extended five (always, mark LOW YIELD)
  3. Scan for structural triggers (0-5)
  4. Phase 1 output table has 4-14 entries

Lines 123-132: Opposition Predicts Richness (10 lines)
  RECONCILE > NAVIGATE > EVALUATE > DISCOVER > FEEL (highest tension against KortAI)
  Aligned axes (TRUST, DO, ORIENT) produce cosmetic tension -- avoid as primary

Lines 133-140: Axis Interaction Effects (8 lines)
  4 compound pairs + "note these when both HIGH yield"

Lines 141-148: Depth vs Breadth Protocol (+5 lines, NEW)
  3+ HIGH -> go BROAD
  1-2 HIGH -> go DEEP (sub-questions)
  0 HIGH -> LOW-TENSION warning

Lines 149-155: Output Quality Gate (+3 lines, NEW)
  Count HIGH-yield axes. If < 2 -> Addition Test will likely fast-exit.

Lines 156-168: Phase 1 Output Template (13 lines)
  AXIS: [name]
  Needs: [list]
  Structural Properties: [list]
  Richness: HIGH / MEDIUM / LOW
  Topology: [from classification]

Lines 169-180: Extended output for HIGH-yield axes (12 lines)
  Follow-up sub-questions when going DEEP
```

### Section 4: Phase 2 — Tension Derivation (110 lines)

```
Lines 181-186: Side A (reader needs from Phase 1) — framing (6 lines)

Lines 187-192: Side B reference (6 lines, condensed from 50)
  "KortAI system: 75% austere, 95% angular, 100% geometric, 90% restrained.
   Full constraints in Appendix A. Key geometry: border-radius: 0, box-shadow: none.
   Only accent: #E83025 (Sanrok red). Three fonts: Instrument Serif, Inter, JetBrains Mono.
   Three border categories: 3-4px structural, 1px data, 1px micro. NEVER 2px."

Lines 193-200: The Addition Test (8 lines, verbatim)
  Binary gate: can reader needs be met by assembly? YES = cosmetic, NO = genuine

Lines 201-210: Three Genuine Criteria (10 lines)
  1. Semantic opposition (meaning-level, not implementation-level)
  2. Vocabulary gap (no direct tool)
  3. Structural overlap despite emotional opposition

Lines 211-218: Three Cosmetic Criteria (8 lines)
  1. False opposition
  2. Direct tool available
  3. Decoration substitution

Lines 219-224: The BECAUSE Test (6 lines)
  "The reader needs X BECAUSE [specific content property]."
  Can't complete the sentence? Need is manufactured. Do not proceed.

Lines 225-228: Tension Spectrum (4 lines, condensed from 10)
  NO TENSION -> COSMETIC -> WEAK GENUINE -> STRONG GENUINE -> IMPOSSIBLE

Lines 229-244: Deriving Tension Protocol (16 lines)
  For each HIGH-yield axis:
    1. List Side A demands
    2. List Side B constraints
    3. Identify genuine opposition
    4. Apply Addition Test
    5. Apply BECAUSE test

Lines 245-260: Richness Formula (16 lines)
  Opposition Depth (1-3) x Structural Overlap (1-3) x Metaphor Space Width (1-3)
  MULTIPLICATIVE: zero overlap = zero richness
  R5 CAP: richness selects tensions, NOT metaphors. Perceptual risk overrides richness.

Lines 261-268: Practical Selection Protocol (8 lines, condensed from 9)
  Score, multiply, select highest, tiebreaker: surprise > UNDERSTAND > FEEL > BECOME > DO

Lines 269-275: Tension Landscape Quick Reference (7 lines, condensed from 17)
  STRONGEST: warmth/austerity, reconciliation/verdict, playfulness/formality
  ZERO: hierarchy, clarity, step-by-step, choosing (system already IS these)

Lines 276-282: Tension Validity Check (7 lines)
  1. Genuine? 2. Rich >= 8? 3. Bridgeable (overlap >= 2)? 4. Novel? 5. Content-driven?

Lines 283-290: Exit Ramp (8 lines)
  0 genuine tensions -> skip to FLAT MODE build plan
  All cosmetic -> skip to FLAT MODE build plan
  >= 1 genuine -> proceed to Phase 3
```

### Section 5: Phase 3 — Metaphor Collapse (165 lines)

```
Lines 291-295: The metaphor is the BRIDGE (5 lines, framing)
  "The tension is emotional; the bridge is structural."

Lines 296-305: Steps 3.1-3.2 Property Extraction (10 lines)
  Extract structural properties from Side A (emotional -> geometric)
  Extract structural properties from Side B (constraints -> perceptual)

Lines 306-315: Step 3.3 Structural Overlap (10 lines)
  Compare lists, calculate overlap %. >80% = low tension. 40-70% = ideal. <30% = extreme.

Lines 316-327: Step 3.4 Search Query Generation (12 lines)
  Query format: "What domain naturally exhibits [OVERLAP] while being [SIDE B GAP] yet conveying [SIDE A GAP]?"
  Three search heuristics: constraint scan, content resonance, emotional valence.

Lines 328-342: Domain Search Menu (15 lines, table condensed from 17)
  Geological / Architectural / Typographic / Cartographic / Industrial / Scientific / Legal / Archival / Military / Astronomical
  + Compatible properties + best when content is about

Lines 343-348: Incompatible Families (6 lines, condensed from 8)
  Organic, Liquid, Atmospheric, Textile, Musical — conflict with angular/flat/sharp

Lines 349-360: Step 3.5A Tension Resolution Scoring (12 lines)
  Test each candidate against every tension. Score X/N.

Lines 361-372: Step 3.5B Structural Isomorphism (12 lines)
  Table: metaphor property -> content property -> CSS channel
  6+ = isomorphic, 4-5 = strong, 2-3 = thin, 0-1 = decorative (REJECT)

Lines 373-386: Step 3.5C Content Resonance Split (14 lines)
  C1. Nominal resonance (vocabulary overlap)
  C2. Structural resonance (relationship mapping) -- weighted 2x
  Structural > nominal in composite scoring

Lines 387-393: Step 3.5D Mechanism Feasibility (7 lines)
  Every property expressible through 6 legal CSS channels?
  If any requires soul violation -> FAIL

Lines 394-410: Step 3.5E Perceptual Risk (17 lines, condensed from 25)
  4 questions: transition model, expression mode, element variety, responsive story
  Score 0-4. 0-1 LOW, 1.5-2 MODERATE (warnings), 2.5-3 HIGH (rank below), 3.5-4 EXTREME (reject)

Lines 411-425: Step 3.5F Perceptual Cost (15 lines, condensed from 40)
  5 cost questions: compression below floors, container < 940, uniform grids, transitions as empty space, explicit labels
  Score 0-5. 0 LOW, 1-2 MODERATE (warnings), 3+ HIGH (reconsider)

Lines 426-432: Composite Verdict (7 lines)
  PROCEED: Resolution >= N-1, Isomorphism >= 4, Structural Resonance >= MEDIUM, Feasibility 100%, Risk <= 2
  CONSIDER: Resolution >= N-2, Isomorphism >= 3, Risk <= 3
  REJECT: anything else, OR Risk = 4

Lines 433-456: Step 3.5G Metaphor Quality Rubric (24 lines, condensed from 53)
  6 criteria x 4 levels (0-3): Interpretive Distance, Content-Shape Fit, Structural Survival, Perceptual Risk, Mechanism Diversity, Restraint Compatibility
  Total /18. Threshold >= 12. CRITICAL: Interpretive Distance MUST >= 2.

Lines 457-470: 6 Binary Rejection Checks (14 lines)
  R1: Content's own vocabulary? R2: Requires text labels? R3: Forces < 940px?
  R4: ALL transitions as empty space? R5: 6+ identical elements? R6: Soul violations?
  Any YES = REJECT without scoring.

Lines 471-478: Structural vs Announced Self-Check (8 lines, NEW)
  Remove all labels mentally. Perceive metaphor through structure alone?
  YES = STRUCTURAL (proceed). NO = ANNOUNCED (reconsider or W-OVERLABEL).

Lines 479-488: Step 3.6 Metaphor Selection + Failure Modes (10 lines)
  Document: winner, why, gaps, isomorphism table
  Failure: Monopoly (relax), Inflation (re-test), Forcing (partial ok), Redundancy (tiebreak), Decay (re-select)

Lines 489-495: Irreducible Creative Step (7 lines, condensed from 10)
  Pipeline proceduralizes everything EXCEPT recognition in Step 3.4.
  Cultivate: domain familiarity, query format practice, successful resolution study.

Lines 496-500: Cultural Consideration (5 lines, condensed from 7)
  Prefer physics-grounded over culture-grounded. Test cultural universality.
```

### Section 6: Phase 3.5 — Commitment + Divergence (45 lines)

```
Lines 501-505: Commitment Statement Template (5 lines)
  "Your metaphor: ___. Write it down. LOCKED IN."
  How it resolves tension (specific):
  Why this vs alternatives (specific):

Lines 506-515: Commitment Verification (10 lines)
  1. Derived independently? YES/NO (NO -> restart)
  2. Justified without library? YES/NO (NO -> regenerate)
  3. Appears in _INDEX.md titles? YES/NO (YES -> divergence justification)

Lines 516-530: Divergence Justification Table (15 lines)
  If convergence detected, answer 5 questions:
    Completed Phases 1-2 without reading library?
    Content analysis independently led to domain?
    Can trace derivation path?
    Content tension identical to case study's?
    Different structural isomorphisms?
  All must favor independent convergence. If fail -> regenerate with ban constraint.

Lines 531-540: Completion Checklist + Proceed (10 lines)
  - Metaphor committed in writing
  - Justification documented
  - Divergence verified (or convergence justified)
  - Structural survival self-check passed (>= 2/3)
  - Interpretive distance >= 2/3
  YOU ARE NOW LOCKED IN. Proceed to Phase 4 (Build Plan Output).

Lines 541-545: Library Access Note (5 lines)
  Under PV2, TC does NOT access full case studies at any point.
  Title-only check in _INDEX.md for convergence detection.
  Full case study access is the BUILDER'S responsibility during implementation.
```

### Section 7: Phase 4 — Build Plan Output (100 lines)

```
Lines 546-555: Build Plan Purpose + Format (10 lines)
  TC's SOLE output is _build-plan.md.
  This structured artifact is read by the builder + recipe + gate runner.
  Intelligence crosses the boundary through SPECIFIC VALUES, not summaries.
  The plan contains 8 deliverables (9 if metaphor exists).

Lines 556-572: Deliverable 1 — Zone Map (17 lines)
  ZONE MAP:
  | Zone | Name | Background Hex | Content Assigned | Purpose |
  |------|------|---------------|-----------------|---------|
  | Z1   | ___  | #______       | [sections]      | [sparse/dense/breathing/dark] |
  | Z2   | ___  | #______       | [sections]      | [sparse/dense/breathing/dark] |
  ...
  ADJACENT ZONE DELTAS:
  Z1->Z2: ___ RGB (must be >= 15)
  Z2->Z3: ___ RGB (must be >= 15)
  Zone count: 2-5 (MANDATORY)

Lines 573-594: Deliverable 2 — Mechanism Deployment (22 lines)
  PER-CATEGORY DEPLOYMENT:
  | Category | Mechanism # | Mechanism Name | Justification (1 sentence) |
  |----------|------------|---------------|---------------------------|
  | Spatial      | #__ | _________ | Because this content... |
  | Hierarchy    | #__ | _________ | Because this content... |
  | Component    | #__ | _________ | Because this content... |
  | Depth        | #__ | _________ | Because this content... |
  | Structure    | #__ | _________ | Because this content... |

  REINFORCING PAIRS (>= 2):
  Pair 1: Mechanism #__ + #__ both encode [semantic dimension] through [CSS channel 1] and [CSS channel 2]
  Pair 2: Mechanism #__ + #__ both encode [semantic dimension] through [CSS channel 1] and [CSS channel 2]

  REJECTED MECHANISMS (>= 3):
  | # | Name | Rejection Reason |

  Total mechanisms deployed: __ (natural landing: 12-18)

Lines 595-616: Deliverable 3 — Transition Table (22 lines, KEY NEW ARTIFACT)
  TRANSITION TABLE:
  | Boundary | Type | Background Delta | Border Change | Typography Change | Spacing Change | Layout Change | Accent Change |
  |----------|------|-----------------|---------------|-------------------|---------------|--------------|--------------|
  | S1->S2   | SMOOTH/BRIDGE/BREATHING | +/- __ RGB | __px -> __px | body->display / unchanged | __px -> __px | unchanged / grid->flex | unchanged / accent shift |
  | S2->S3   | ...  | ...             | ...           | ...               | ...           | ...          | ...          |
  ...

  TRANSITION TYPE COUNT: __ (must be >= 3 unique types)
  CHANNELS SHIFTING PER BOUNDARY: __ (must be >= 3 at each)

  The transition table is the MOST OPERATIONALLY IMPORTANT deliverable.
  It transforms abstract coherence rules into concrete, verifiable specifications.
  The builder reads this table and implements each row as CSS.
  The gate runner verifies each row programmatically.

Lines 617-632: Deliverable 4 — Channel Map (16 lines)
  CHANNEL MAP (per boundary verification):
  | Boundary | Background | Border | Typography | Spacing | Layout | Accent | Channels Shifting |
  |----------|-----------|--------|-----------|---------|--------|--------|------------------|
  | S1->S2   | YES/NO (+delta) | YES/NO (+delta) | YES/NO (what) | YES/NO (+delta) | YES/NO (what) | YES/NO (what) | __/6 (>= 3) |
  ...

  MINIMUM 3 channels shifting at every boundary.
  If < 3 at any boundary: add a visible shift to at least one more channel.

  This replaces abstract coherence rules C-1 through C-5 with CONCRETE VERIFICATION.

Lines 633-642: Deliverable 5 — Isomorphism Table (10 lines, if metaphor)
  ISOMORPHISM TABLE (metaphor pages only):
  | Metaphor Property | Content Parallel | CSS Channel | Concrete Expression |
  |-------------------|-----------------|-------------|-------------------|
  | [physical trait]  | [content aspect] | background/border/typography/spacing/layout/accent | [specific planned CSS] |
  ...
  ISOMORPHISM COUNT: __ (>= 4 for PROCEED, >= 6 for STRONG)

Lines 643-650: Deliverable 6 — Pacing Assessment (8 lines)
  PACING:
  Section count: __
  Pacing model: CRESCENDO / PULSE / F-PATTERN / BENTO
  Dramatic peak: __% of page height (target: 60-80%)
  Breathing model: CHANGING STATE (required) / EMPTY SPACE (forbidden)
  Element uniformity: VARIED (required for 7+ sections) / UNIFORM (acceptable for 3-6)

Lines 651-660: Deliverable 7 — Fractal Coherence Table (10 lines)
  FRACTAL COHERENCE (5 scales):
  | Scale | Pattern Expression | Planned CSS |
  |-------|-------------------|-------------|
  | Navigation | [how TOC/header reflects] | [planned CSS] |
  | Page | [how section sequence reflects] | [planned CSS] |
  | Section | [how components within reflect] | [planned CSS] |
  | Component | [how content within reflects] | [planned CSS] |
  | Character | [how inline/text-level reflects] | [planned CSS] |
  SAME direction at all scales: YES (required)

Lines 661-668: Deliverable 8 — Builder Warnings (8 lines)
  BUILDER WARNINGS (selected from Appendix B based on metaphor risk):
  [ ] W-DEADZONE: [include if Perceptual Risk transition model = EMPTY SPACE]
  [ ] W-OVERLABEL: [include if Structural Survival < 2 or expression mode = TEXTUAL]
  [ ] W-MONOTONY: [include if Element Uniformity = UNIFORM or 6+ repeated elements]
  [ ] W-RESPONSIVE: [include if Responsive Risk = MODERATE+]
  [ ] W-STATS: [include if metadata strip present]
  [X] W-IMPLICIT: [ALWAYS include]

Lines 669-675: Flat Mode Build Plan (7 lines)
  FLAT MODE (if Addition Test = NO TENSION):
  Omit: Isomorphism table, channel map, metaphor-specific warnings
  Include: Zone map, mechanism deployment, transition table, pacing, fractal table
  Density pattern: CRESCENDO / F-PATTERN / BENTO / PULSE (select based on content type)
  Justification: [why no metaphor -- content had zero genuine tension at Addition Test]
```

### Section 8: Appendix A — KortAI Constraints (30 lines)

```
Lines 676-705: Condensed system constraints reference
  Geometry: border-radius: 0, box-shadow: none, filter: never
  Palette: 6 core colors (hex values)
  Typography: 3 font stacks (display/body/mono)
  Borders: 3 categories (3-4px structural, 1px data, 1px micro, NEVER 2px)
  Spacing: mathematical scale (4-80px)
  Personality profile: 8-axis warm/austere scale (percentages)
  Soul test: 5 questions (magazine/bootstrap/accent-swap/hierarchy/decoration)
  Container: 940-960px (NON-NEGOTIABLE)
```

### Section 9: Appendix B — Builder Warnings Library (30 lines)

```
Lines 706-735: 6 warnings (condensed from 90 lines to 30)
  W-DEADZONE (5 lines): Max 48px breathing. Transitions = CHANGING STATE not EMPTY SPACE.
  W-OVERLABEL (5 lines): Structural gradients, not text labels. Reader FEELS, not READS.
  W-MONOTONY (5 lines): Vary element sizes by importance. Break 6+ sequences. Alternate widths.
  W-RESPONSIVE (5 lines): Test at 768px. [Metaphor-specific responsive risk].
  W-STATS (5 lines): Limit metadata strips to 3 items at narrow. Stack vertically.
  W-IMPLICIT (5 lines): Best layouts make reader FEEL metaphor. Remove all labels; structure alone communicates.
```

---

## 8. CRITICAL DESIGN DECISIONS

### Decision 1: Phase 4 is BUILD PLAN OUTPUT, not Compositional Layout Generation

Current Phase 4 (866-1543, ~678 lines) is the biggest section of the skill and is almost entirely builder-oriented. Under PV2, Phase 4 is the PLANNER'S OUTPUT PHASE, not the builder's execution phase. The planner writes specifications; the builder writes CSS.

The 5-Category Taxonomy Extraction (Step 4.1) STAYS because the extraction IS the planner's work -- converting metaphor into deployable categories. But everything after (translation grammar, coherence checking, component inventory, transition grammar lookup, fractal gate, landmark gate, tokenization) is builder execution and gate verification.

### Decision 2: Divergence Verification Merges Into Commitment

Current architecture has divergence at Phase 5 (after HTML output). PV2 architecture has TC exiting after build plan. Divergence MUST happen at commitment time (Phase 3.5) because there is no Phase 5 for TC.

### Decision 3: Transition Table Is the Key New Deliverable

The transition table (Deliverable 3) specifies WHICH channels shift and BY HOW MUCH at each section boundary. This artifact currently exists NOWHERE in the system. It was identified as the single most operationally important invention in Report 68. It transforms ">=3 channels must shift" (abstract rule) into a row-by-row verification table (concrete specification).

### Decision 4: Density Patterns Survive as Flat Mode Options

CRESCENDO/F-PATTERN/BENTO/PULSE lose their role as Middle-tier routing shortcuts but survive as Flat Mode deployment options. When the Addition Test determines no genuine tension exists, the planner selects a density pattern instead of deriving a metaphor. This is an ESCAPE VALVE, not a tier.

### Decision 5: Appendices Are Reference, Not Instruction

KortAI constraints (Appendix A) and Builder Warnings (Appendix B) are REFERENCE material that the planner consults during derivation. They are not instructions to follow sequentially. Placing them in appendices signals this clearly.

---

## 9. VALIDATION CHECKLIST

Before the enriched TC skill is written, verify:

- [ ] All 4 core phases present (0, 1, 2, 3) with full invocational content
- [ ] Phase 3.5 includes both commitment AND divergence
- [ ] Phase 4 is BUILD PLAN OUTPUT only (no CSS, no HTML, no builder execution)
- [ ] Zero tier-conditional language anywhere
- [ ] Addition Test is the only routing gate
- [ ] Transition table deliverable fully specified with template
- [ ] Channel map deliverable fully specified with template
- [ ] Zone map deliverable includes hex values and RGB deltas
- [ ] Mechanism deployment table includes per-category, reinforcing pairs, and rejections
- [ ] Fractal coherence table covers all 5 scales
- [ ] Flat Mode spec included for zero-tension fast-exit
- [ ] Builder warnings include selection protocol (which to include based on risk)
- [ ] KortAI constraints condensed to 30-line appendix
- [ ] All operational density metrics met (68%+ invocational)
- [ ] Line budget within 660 +/- 30 lines
- [ ] No duplicate content with mechanism-catalog.md, perception-thresholds.md, or operational-recipe.md

---

*END OF PROTOTYPE*
