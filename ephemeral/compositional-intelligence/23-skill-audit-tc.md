# SKILL AUDIT: Tension-Composition (TC)

**Auditor:** TC Skill Auditor (Opus 4.6)
**Task:** #23
**Date:** 2026-02-19
**Source Files:**
- `~/.claude/skills/tension-composition/SKILL.md` (1,933 lines)
- `design-system/pipeline/PV2-PIPELINE-DIAGRAM.md` (977 lines)
- `ephemeral/pv2-cross-reference/14-MASTER-SYNTHESIS.md` (599 lines)

---

## 1. LINE-BY-LINE CLASSIFICATION

I classified every major section of the 1,933-line TC skill into six categories: OPERATIONAL, CONCEPTUAL, CONDITIONAL, REDUNDANT, PROTECTIVE, and INVOCATIONAL.

### Section-by-Section Breakdown

| Lines | Section | Classification | Lines | Justification |
|-------|---------|---------------|-------|---------------|
| 1-4 | YAML frontmatter + description | META | 4 | Skill metadata |
| 6-23 | Critical Principle (construction bias) | CONCEPTUAL | 18 | Philosophy about constructing vs discovering. Does not produce CSS or actionable output. Shapes mindset but no agent has ever been measured failing from "discovery bias." |
| 27-36 | Pipeline overview (6 Phases) | OPERATIONAL | 10 | Core routing diagram. Essential. |
| 40-65 | Phase 0A-0C: Content Assessment | OPERATIONAL | 26 | Content classification, scope, section ID. Directly actionable. |
| 68-145 | Phase 0D: Tier Classification + Routing | **CONDITIONAL** | 78 | The tier routing table (Floor/Middle/Ceiling/Flagship), pattern selection for Middle, skip logic. Under ALWAYS FLAGSHIP, ~60 lines become dead code. The pattern table (CRESCENDO/F-PATTERN/BENTO/PULSE) and Middle-tier routing are irrelevant when every page runs full pipeline. |
| 148-165 | Step 0D-CEILING: Ceiling Context Box | **CONDITIONAL** | 18 | Under ALWAYS FLAGSHIP, this is the ONLY path. Should be the DEFAULT, not a conditional box. |
| 168-188 | Step 0E: Library Access Prohibition | PROTECTIVE | 21 | Prevents pattern-matching before metaphor commitment. Critical guardrail. |
| 192-275 | Phase 1: Multi-Axis Questioning (Core Four + Extended) | **INVOCATIONAL** | 84 | This is where compositional intelligence LIVES. The axis questioning framework directly produces the tension from which everything flows. High operational value. |
| 219-258 | Structural Trigger Axes + Interaction Effects | **INVOCATIONAL** | 40 | Conditional axes (COMPARE, IDENTIFY, DISCOVER, SEE, REMEMBER) and axis pairs. Directly expands creative search space. |
| 260-275 | Phase 1 Output format | OPERATIONAL | 16 | Template for output. |
| 278-370 | Phase 2: Tension Derivation | **INVOCATIONAL** | 93 | The Addition Test, three formal criteria for genuine tension, the tension spectrum. Core creative engine. |
| 372-455 | Richness Formula + Selection Protocol | **INVOCATIONAL** | 84 | Opposition x Overlap x Width scoring. Practical selection protocol. The R5 IMPROVEMENT (richness cap) is especially valuable -- prevents high-richness-low-quality trap. |
| 425-455 | Tension Landscape + Validity Check + Exit Ramp | OPERATIONAL | 31 | Quick reference for KortAI tensions, validation checks, exit conditions. |
| 467-527 | Phase 3: Metaphor Collapse (Steps 3.1-3.4) | **INVOCATIONAL** | 61 | Structural property extraction, overlap calculation, search query generation, search heuristics. The creative core. |
| 528-574 | Domain Search Menu + Responsive Check + Incompatible Families | OPERATIONAL | 47 | Lookup tables. Useful reference but not generative. |
| 576-704 | Step 3.5: Candidate Testing (A-F composite scoring) | **INVOCATIONAL** | 129 | Tension Resolution, Isomorphism Count, Content Resonance (split), Mechanism Feasibility, Perceptual Risk, Perceptual Cost. This is the most operationally dense section of the entire skill. Every sub-step produces a measurable score. |
| 705-757 | Step 3.5G: Metaphor Scoring Rubric + Binary Rejections | **INVOCATIONAL** | 53 | 6-criterion rubric (18 points), 6 binary rejection checks. Added post-ceiling experiment. High value. |
| 759-796 | Steps 3.6, Failure Modes, Irreducible Creative Step, Cultural | OPERATIONAL | 38 | Selection documentation, failure mode handling. Reference material. |
| 799-862 | Phase 3.5: Metaphor Commitment (LOCK-IN GATE) | PROTECTIVE | 64 | Commitment verification, divergence justification. Guardrail against library contamination. |
| 866-872 | Phase 4 intro: Tier-specific deployment levels | **CONDITIONAL** | 7 | Floor/Middle/Ceiling/Flagship tier descriptions. Dead under ALWAYS FLAGSHIP. |
| 876-981 | Phase 4.0: Perceptual Guardrails | PROTECTIVE | 106 | Non-negotiable minimums: container width, CPL, compression ratio, heading spacing. Critical but purely PROTECTIVE -- says what NOT to violate, not what TO DO. |
| 982-1035 | Heading Spacing Enforcement | PROTECTIVE | 54 | Binary check with CSS examples. Guardrail. |
| 1037-1049 | Priority Order (guardrails vs metaphor) | PROTECTIVE | 13 | |
| 1051-1107 | Step 4.0: Mechanism Library Access + Per-Category Deployment | **INVOCATIONAL** | 57 | Mechanism extraction protocol, per-category minimums. Directly causes mechanism selection. |
| 1110-1175 | Step 4.1: 5-Category Taxonomy Extraction | **INVOCATIONAL** | 66 | Spatial/Temporal/Material/Behavioral/Relational property extraction from metaphor. Generative. |
| 1177-1260 | Step 4.2: Translation Grammar (Lookup Tables) | OPERATIONAL | 84 | CSS lookup tables for weight, depth, density, flow, containment, transition, hierarchy. Reference material. |
| 1262-1330 | Steps 4.2B-4.2C: Pacing Prediction + Rhythm Variation | **INVOCATIONAL** | 69 | Pacing assessment questions, rhythm variation requirement. Produces actionable deployment decisions. |
| 1331-1365 | Step 4.3: Coherence Checking (5 rules) | **INVOCATIONAL** | 35 | C-1 through C-5 coherence rules. Directly verifiable. |
| 1368-1402 | Steps 4.4-4.5: Component Inventory + Adapt-vs-Invent | OPERATIONAL | 35 | Tier 2 vs Tier 3 classification, invention constraints. |
| 1404-1414 | Step 4.6: Transition Grammar (matrix) | OPERATIONAL | 11 | Lookup table for axis transitions. |
| 1416-1462 | Step 4.7: Fractal Consistency GATE | **INVOCATIONAL** | 47 | Scale coverage table, tier-calibrated requirements. Directly produces verifiable fractal coherence. Has tier-conditional lines (Middle=2, Ceiling=4, Flagship=5). |
| 1466-1532 | Phase 4.7B: Landmark Completeness GATE | PROTECTIVE | 67 | Header/main/footer verification. Guardrail against missing landmarks. |
| 1536-1543 | Step 4.8: Section-Aware Composition | OPERATIONAL | 8 | Brief guidance for multi-section content. |
| 1547-1621 | Phase 4.9: Tokenization Self-Check | OPERATIONAL | 75 | Token compliance measurement. Self-check protocol. |
| 1624-1681 | Phase 5: Output (A + B) | OPERATIONAL | 58 | Output format specification. |
| 1684-1778 | Phase 5: Divergence Verification | PROTECTIVE | 95 | Case study comparison, divergence tables, convergence justification. Anti-gravity guardrail. |
| 1783-1788 | Stale/Artificial Tension edge cases | OPERATIONAL | 6 | |
| 1791-1809 | Test Content Recommendations | **REDUNDANT** | 19 | Specific to Boris/Gas Town/Playbook content. Stale. Not useful for future invocations. |
| 1812-1823 | Invocation section | META | 12 | |
| 1827-1916 | Appendix: Builder Instruction Warnings (R6) | PROTECTIVE | 90 | W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT. Warnings appended to builder output. |
| 1862-1903 | Builder Guardrail Appendix (Concrete Values) | **REDUNDANT** | 42 | Duplicates Phase 4.0 perceptual guardrails almost verbatim. |
| 1919-1933 | Appendix: Test Results Summary | **REDUNDANT** | 15 | Historical findings from 15-layout test. Already integrated as R1-R6 improvements. |

### Classification Summary

| Category | Lines | % of Total | Description |
|----------|-------|-----------|-------------|
| **INVOCATIONAL** | ~718 | 37.1% | Directly causes compositional behavior (axis questioning, tension derivation, metaphor scoring, mechanism deployment, coherence checking) |
| **PROTECTIVE** | ~510 | 26.4% | Guardrails and prohibitions (what NOT to do) |
| **OPERATIONAL** | ~461 | 23.8% | Reference tables, output formats, lookup matrices |
| **CONDITIONAL** | ~103 | 5.3% | Tier routing logic (Floor/Middle/Ceiling/Flagship) |
| **CONCEPTUAL** | ~18 | 0.9% | Theory without actionable output |
| **REDUNDANT** | ~76 | 3.9% | Duplicated or stale content |
| **META** | ~16 | 0.8% | Frontmatter, invocation instructions |
| **TOTAL** | ~1,933 | 100% | |

---

## 2. WHAT GETS REMOVED BY ALWAYS FLAGSHIP

Under ALWAYS FLAGSHIP, all tier-conditional logic becomes dead code. Here is what can be cut:

### Direct Tier-Conditional Lines (~103 lines removable)

| Lines | Content | Action |
|-------|---------|--------|
| 68-100 | Tier classification table (Floor/Middle/Ceiling/Flagship routing) | REMOVE. Replace with: "All content runs full pipeline (Phases 0-3.5). Addition Test is the only escape valve for low-tension content." |
| 101-127 | Middle-tier pattern selection (CRESCENDO/F-PATTERN/BENTO/PULSE), Middle-tier output template, WHY Middle skips Phases 1-3 | REMOVE. Under ALWAYS FLAGSHIP, Middle routing doesn't exist. The density patterns are still useful but should be relocated as deployment OPTIONS within Phase 4, not as tier-routing shortcuts. |
| 128-145 | Ceiling/Flagship routing, degradation protocol, tier model validation language | REMOVE. The graceful degradation protocol (lines 129-133) may survive as a documentation requirement when content has low tension and fast-exits through the Addition Test. |
| 148-165 | 0D-CEILING Context Box | COLLAPSE INTO DEFAULT. These 18 lines describe what IS the default under ALWAYS FLAGSHIP. Remove the conditional framing. The 7 bullet points become universal rules. |
| 866-872 | Phase 4 tier-specific deployment levels | REMOVE. Only Flagship deployment level exists. |
| 1098-1103 | Natural landing by tier | SIMPLIFY. Only state: "Deploy mechanisms across all 5 categories. Natural landing: 12-18 mechanisms." |
| 1432-1437 | Fractal consistency tier-calibrated requirements | SIMPLIFY. "5 scales required (all scales)" is the only rule. |
| 1480-1484 | Landmark tier-calibrated requirements | SIMPLIFY. "Header + main + footer + transition grammar between ALL landmarks." |
| 1618 | "This phase is OPTIONAL but RECOMMENDED" (tokenization) | CHANGE to MANDATORY. Under ALWAYS FLAGSHIP, token compliance >= 80% should be required. |

### Tier-Conditional Language Scattered Throughout (~40 additional lines)

Phrases like "for Middle-tier+", "Ceiling/Flagship tier", "Floor (assembly)", "Middle experiment achieved..." appear throughout as qualifying language. Under ALWAYS FLAGSHIP, these become unnecessary hedging. They should be rewritten as unconditional statements.

### Total Removable: ~145 lines (7.5% of skill)

This matches the PV2 architecture diagram's estimate: "~145 lines of tier-conditional branching (35% simpler)" for the orchestrator, though the TC skill has proportionally less tier routing than the orchestrator.

### What STAYS Despite ALWAYS FLAGSHIP

- The **Addition Test** (Phase 2 gate) STAYS. Even under ALWAYS FLAGSHIP, low-tension content (API docs, changelogs) should fast-exit to FLAT mode rather than forcing metaphor derivation. ALWAYS FLAGSHIP means "maximum intensity when running," not "force metaphor on everything."
- The **density patterns** (CRESCENDO/F-PATTERN/BENTO/PULSE) STAY as deployment options within Phase 4 for FLAT-mode pages that passed the Addition Test with NO genuine tension. They lose their role as tier-routing shortcuts but retain their role as spatial organization strategies.

---

## 3. WHAT SHOULD THE TC SKILL DO?

### Current Scope (Too Wide)

The TC skill currently tries to be THREE things simultaneously:

1. **Content Analyst** (Phases 0-1): Reads content, classifies it, identifies axes, derives reader needs
2. **Compositional Planner** (Phases 2-3.5): Derives tensions, selects metaphors, scores candidates, commits
3. **Build Specifier** (Phases 4-5): Deploys mechanisms, writes CSS lookup tables, checks coherence, produces guardrails, generates HTML output

Under PV2, role #3 is THE BUILDER'S JOB, not the TC planner's. The PV2 architecture explicitly separates:
- TC (Wave 0): Phases 0-3.5 -- content analysis to build plan
- Builder (Wave 1): 9-phase recipe execution -- CSS/HTML production

Yet the TC skill contains ~461 lines of OPERATIONAL content (CSS lookup tables, translation grammar, component inventory, output templates) that the planner doesn't need and the builder already gets from the operational recipe.

### Ideal Scope Under PV2

The TC skill should be a **Content Analysis + Compositional Planning** skill that outputs a `_build-plan.md`. It should NOT contain:
- CSS lookup tables (builder gets these from mechanism-catalog.md)
- Perceptual guardrails with CSS examples (builder gets these from operational-recipe.md)
- HTML output templates (builder produces HTML, not TC)
- Builder warnings (these belong in the build plan OUTPUT, not in the TC skill INSTRUCTIONS)

### Recommended Scope (3 clear functions)

1. **Content Analysis** (Phase 0): Type classification, scope assessment, section identification
2. **Tension Derivation** (Phases 1-2): Multi-axis questioning, tension identification, Addition Test
3. **Compositional Architecture** (Phase 3-3.5): Metaphor collapse, candidate scoring, commitment, build plan generation

Phase 4+ should be REMOVED from TC and relocated to:
- `operational-recipe.md` (builder execution recipe)
- `mechanism-catalog.md` (mechanism reference)
- `perception-thresholds.md` (guardrail values)

---

## 4. OPERATIONAL VALUE HEAT MAP

### HIGHEST VALUE (Keep, Protect, Enrich)

| Section | Lines | Why It's Valuable |
|---------|-------|-------------------|
| Phase 1: Multi-Axis Questioning (Core + Extended + Triggers) | 192-258 (~84 lines) | **THE creative engine.** No other document in the system generates the reader-need analysis that drives everything downstream. This is irreplaceable. |
| Phase 2: Tension Derivation + Addition Test | 278-455 (~178 lines) | **THE quality gate.** The Addition Test prevents forced metaphors. The richness formula prevents high-richness-low-quality traps. The BECAUSE test prevents manufactured needs. |
| Phase 3: Metaphor Collapse (Steps 3.1-3.6) | 467-796 (~330 lines) | **THE compositional core.** Structural property extraction, overlap calculation, search heuristics, candidate scoring (A-F + 6-criterion rubric + 6 binary rejections). This is where compositional intelligence IS. |
| Phase 3.5: Metaphor Commitment Gate | 799-862 (~64 lines) | **THE anti-gravity mechanism.** Prevents library contamination. Without this, every metaphor gravitates toward existing patterns. |
| Step 4.1: 5-Category Taxonomy Extraction | 1110-1175 (~66 lines) | **THE translation bridge.** Converts metaphor into deployable mechanism categories. This is the handoff from telescope to microscope. |

**Total highest-value: ~722 lines (37.4% of skill)**

### MODERATE VALUE (Keep but Could Be Trimmed)

| Section | Lines | Notes |
|---------|-------|-------|
| Phase 0A-0C: Content Assessment | 40-65 (~26 lines) | Useful but straightforward classification. |
| Steps 4.2B-4.2C: Pacing + Rhythm | 1262-1330 (~69 lines) | Valuable but could be condensed. Pacing assessment questions are good; the examples are verbose. |
| Step 4.3: Coherence Checking | 1331-1365 (~35 lines) | 5 rules, all verifiable. Worth keeping. |
| Step 4.7: Fractal Gate | 1416-1462 (~47 lines) | Useful gate. Tier-conditional lines removable. |
| Phase 5: Divergence Verification | 1684-1778 (~95 lines) | Anti-gravity mechanism. Important but could be condensed. |

**Total moderate-value: ~272 lines (14.1%)**

### LOW VALUE (Relocate, Condense, or Remove)

| Section | Lines | Why It's Low Value |
|---------|-------|--------------------|
| Step 4.2: Translation Grammar (CSS Lookup Tables) | 1177-1260 (~84 lines) | The builder gets this from mechanism-catalog.md. Duplicated reference material in the wrong document. |
| Phase 4.0: Perceptual Guardrails | 876-1049 (~174 lines) | The builder gets this from operational-recipe.md and perception-thresholds.md. In TC, this is a PROTECTIVE section that the planner reads but the builder re-reads from better sources. |
| Phase 4.7B: Landmark Gate | 1466-1532 (~67 lines) | Useful but purely PROTECTIVE. The operational recipe Phase 1 (HTML skeleton) handles this more concretely. |
| Phase 4.9: Tokenization Self-Check | 1547-1621 (~75 lines) | Builder responsibility, not planner responsibility. Belongs in operational recipe. |
| Phase 5: Output A+B Templates | 1624-1681 (~58 lines) | Under PV2, TC produces _build-plan.md (specific format), not "two outputs." Output format needs rewriting. |
| Builder Warnings Appendix | 1827-1916 (~90 lines) | These are appended to the build plan output. Useful content but belongs in the OUTPUT TEMPLATE, not as a skill appendix. |
| Builder Guardrail Appendix | 1862-1903 (~42 lines) | Duplicate of Phase 4.0 guardrails. |
| Test Content Recommendations | 1791-1809 (~19 lines) | Stale. Specific to Boris/Gas Town/Playbook. |
| Test Results Summary | 1919-1933 (~15 lines) | Historical. Findings already integrated as R1-R6. |

**Total low-value: ~624 lines (32.3%)**

### DEAD WEIGHT (Remove Under ALWAYS FLAGSHIP)

| Section | Lines | Why It's Dead |
|---------|-------|---------------|
| Phase 0D: Tier Routing | 68-145 (~78 lines) | Dead code under ALWAYS FLAGSHIP |
| 0D-CEILING Context Box (as conditional) | 148-165 (~18 lines) | Should be unconditional default |
| Phase 4 tier intro | 866-872 (~7 lines) | Dead |
| Tier-conditional language | scattered (~40 lines) | Dead hedging |

**Total dead weight: ~143 lines (7.4%)**

---

## 5. ENRICHMENT RECOMMENDATIONS

### The Core Question: What Would a 500-Line TC Skill That's 100% Operational Look Like?

Not "add more lines" but "restructure existing lines for operational value."

### Architecture of a Restructured TC Skill

```
RESTRUCTURED TC SKILL (~650-700 lines, down from 1,933)

  SECTION 1: IDENTITY + SCOPE (20 lines)
    - What TC does (content -> build plan)
    - What TC does NOT do (CSS, HTML, building)
    - Under ALWAYS FLAGSHIP: always runs Phases 0-3.5
    - Addition Test is the only escape valve

  SECTION 2: PHASE 0 — CONTENT ANALYSIS (40 lines)
    - Type classification (prose/mixed/visual/self-referential)
    - Scope assessment (word count categories)
    - Section identification
    - [REMOVED: Tier routing entirely]
    - [KEPT: Content assessment is content-dependent, not tier-dependent]

  SECTION 3: PHASE 1 — MULTI-AXIS QUESTIONING (100 lines)
    - Core four axes (FEEL/UNDERSTAND/DO/BECOME)
    - Extended five (NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE)
    - Structural triggers (COMPARE/IDENTIFY/DISCOVER/SEE/REMEMBER)
    - Axis interaction effects (compound tension)
    - Opposition predicts richness principle
    - Output template
    [THIS SECTION STAYS ALMOST UNCHANGED — it's the creative engine]

  SECTION 4: PHASE 2 — TENSION DERIVATION (120 lines)
    - Side A (reader needs) vs Side B (system constraints)
    - KortAI personality profile (kept for tension derivation)
    - The Addition Test (binary gate)
    - Three criteria for genuine tension
    - Three criteria for cosmetic tension
    - The BECAUSE test
    - Richness formula (Opposition x Overlap x Width)
    - Richness cap (R5 improvement)
    - Tension validity check
    - Exit ramp (zero-tension, cosmetic, genuine paths)
    [TRIMMED: Remove verbose examples, keep scoring protocol]

  SECTION 5: PHASE 3 — METAPHOR COLLAPSE (180 lines)
    - Steps 3.1-3.4: Property extraction + overlap + search query
    - Domain search menu (condensed to single table)
    - Steps 3.5A-G: Composite scoring (all 6 dimensions)
    - 6-criterion rubric (18 points)
    - 6 binary rejection checks
    - Perceptual Risk + Perceptual Cost assessments
    - Selection + failure modes
    [TRIMMED: Remove responsive check tables (builder's job), remove lengthy examples]

  SECTION 6: PHASE 3.5 — COMMITMENT GATE (50 lines)
    - Metaphor commitment template
    - Divergence verification (condensed from Phase 5)
    - Library access prohibition enforcement
    - Convergence justification protocol
    [MERGED: Phase 5 divergence verification collapses into 3.5 since
     under PV2, TC doesn't access the library in Phase 4+]

  SECTION 7: BUILD PLAN OUTPUT (80 lines)
    - Required deliverables in _build-plan.md:
      * Zone count (2-5)
      * Section inventory (sections -> zones)
      * Mechanism deployment (per-category: S/T/M/B/R each 1+)
      * Background colors with >= 15 RGB delta
      * Isomorphism table (if metaphor exists)
      * 5-category property extraction (Spatial/Temporal/Material/Behavioral/Relational)
      * Transition plan (>= 3 types: SMOOTH/BRIDGE/BREATHING)
      * Pacing assessment (section count, breathing model, dramatic moment)
      * Fractal coherence table (5 scales)
      * Builder warnings (from W-DEADZONE through W-IMPLICIT, selected per metaphor risk)
      * Coherence directions (C-1 through C-5 encoded as deployment instructions)
    - FLAT MODE output (if Addition Test = NO)
      * Density pattern selection (CRESCENDO/F-PATTERN/BENTO/PULSE)
      * Zone count and backgrounds
      * Per-category mechanism minimums
      * No isomorphism table, no metaphor
    [NEW: Combines Phase 4 mechanism extraction + coherence + pacing + fractal into
     a single BUILD PLAN specification. TC doesn't execute these — it SPECIFIES them
     for the builder.]

  APPENDIX: KORTAI CONSTRAINTS (30 lines)
    - System constraints (geometry, palette, typography, borders, spacing)
    - Personality profile (warm/austere scale)
    - Soul test (5 questions)
    [CONDENSED from current ~100 lines of Side B description]
```

### What This Restructuring Achieves

| Metric | Current | Restructured | Change |
|--------|---------|-------------|--------|
| Total lines | 1,933 | ~650-700 | -64% |
| INVOCATIONAL % | 37.1% | ~65% | +28pp |
| PROTECTIVE % | 26.4% | ~5% | -21pp |
| OPERATIONAL (reference) % | 23.8% | ~18% | -6pp |
| CONDITIONAL % | 5.3% | 0% | -5pp |
| REDUNDANT % | 3.9% | 0% | -4pp |
| Guardrail:Playbook ratio | ~1.4:1 | ~0.2:1 | Inverted |

### What Gets REMOVED (relocated, not lost)

| Removed Content | Where It Goes | Why |
|----------------|---------------|-----|
| CSS lookup tables (Step 4.2) | mechanism-catalog.md (already exists) | Builder reads this directly |
| Perceptual guardrails (Phase 4.0) | perception-thresholds.md (new PV2 file) + operational-recipe.md | Builder reads these directly |
| Builder warnings (Appendix) | _build-plan.md output (TC writes them INTO the plan) | TC selects which warnings to include based on metaphor risk assessment |
| Tokenization self-check (Phase 4.9) | operational-recipe.md Phase 8 | Builder responsibility |
| Landmark gate (Phase 4.7B) | operational-recipe.md Phase 1 | Builder responsibility |
| Output format (Phase 5 A+B) | Replaced by _build-plan.md specification | TC outputs a build plan, not HTML |
| Test content recommendations | DELETED (stale) | |
| Test results summary | DELETED (historical) | |
| Tier routing (Phase 0D) | DELETED (dead under ALWAYS FLAGSHIP) | |

### What Gets ENRICHED (the "do what it's supposed to do well" answer)

1. **Phase 1 (Multi-Axis Questioning)** should gain:
   - A "depth vs breadth" protocol: when to go deep on 4 axes vs broad on 9+
   - Content-topology detection: "This content is hierarchical/linear/networked/cyclical" -- the topology should influence axis selection
   - Output quality metric: "How many HIGH-yield axes did you produce? If < 3, content may be low-tension"

2. **Phase 3 (Metaphor Collapse)** should gain:
   - A STRUCTURAL vs ANNOUNCED pre-test that TC applies to its own metaphor BEFORE committing (Wave 0.5 catches this, but TC should also self-check)
   - Isomorphism-to-CSS mapping: for each isomorphism, TC should specify WHICH CSS channel it maps to (background, border, typography, spacing, layout, accent). This is currently done by the builder, but TC has more context.

3. **Build Plan Output** should gain:
   - Explicit background hex values per zone (not "use warm palette")
   - Explicit typography arc values (not "use 3 zones")
   - Explicit mechanism-to-zone mapping (not "deploy per-category")
   - These make the build plan a RECIPE INPUT, not an ABSTRACT INTENT

---

## 6. THE USER'S QUESTION: "DOES ALWAYS FLAGSHIP REMOVE NOISE?"

**YES.** ALWAYS FLAGSHIP removes ~145 lines of tier-conditional noise (7.5% of skill). But the BIGGER noise reduction comes from clarifying TC's SCOPE:

### The Real Noise Is Scope Confusion

The TC skill is noisy not because of tier routing but because it tries to serve TWO audiences:
1. The **TC PLANNER** (content analysis + compositional planning) -- Phases 0-3.5
2. The **BUILDER** (mechanism deployment + CSS execution) -- Phases 4-5

Under PV2, these are DIFFERENT AGENTS reading DIFFERENT documents. The TC planner reads TC SKILL.md. The builder reads operational-recipe.md + mechanism-catalog.md + 4 other files. TC SKILL.md currently contains ~624 lines of builder-oriented content (32.3%) that the planner doesn't need and the builder won't see.

### Answer to "Maybe the answer isn't adding more content but enriching to do what they're supposed to do well"

**Exactly right.** The TC skill's problem is not insufficient content -- it's MISALLOCATED content.

- 37.1% does what TC is supposed to do (creative analysis, tension derivation, metaphor scoring)
- 26.4% tells the planner what NOT to do (guardrails that the builder enforces anyway)
- 23.8% provides reference material the builder gets from other sources
- 5.3% routes between tiers that don't exist under ALWAYS FLAGSHIP

The enrichment path is:
1. **REMOVE** the 32.3% that belongs elsewhere (~624 lines)
2. **REMOVE** the 7.5% that's dead under ALWAYS FLAGSHIP (~145 lines)
3. **ENRICH** the 37.1% that IS TC's job (~718 lines -> ~450 lines of denser invocational content)
4. **ADD** a structured build plan output specification (~80 lines)
5. **Result:** ~650-700 lines that are ~65% INVOCATIONAL

The skill gets SHORTER but MORE POWERFUL. Every line either generates creative analysis, derives tension, scores metaphors, or specifies build plan outputs. Zero lines tell the planner about CSS values they don't write. Zero lines route between tiers that don't exist.

---

## 7. CRITICAL FINDINGS

### Finding 1: The TC Skill Has a 1.4:1 Guardrail-to-Playbook Ratio

The master prompt's 7.9:1 ratio was identified as pathological. TC's ratio is better but still protective-heavy. Under restructuring, this drops to ~0.2:1 -- the planner needs almost no guardrails because guardrails are the BUILDER'S constraint, not the planner's.

### Finding 2: Phase 4 Is the Builder's Job, Not TC's

The entire Phase 4 section (lines 866-1462, ~597 lines, 30.9% of skill) is about mechanism deployment, CSS translation, coherence checking, and fractal verification. Under PV2, this is the builder's 9-phase recipe execution. TC's role is to SPECIFY WHAT to deploy (in the build plan), not HOW to deploy (in CSS). The skill confuses specification with execution.

### Finding 3: Two Output Sections That Contradict PV2

- **Phase 5 Output A+B** (lines 1624-1681) specifies "Generate TWO outputs: A thought process document and an HTML compositional layout." Under PV2, TC generates ONE output: `_build-plan.md`. The HTML is the builder's output.
- **Phase 5 Divergence Verification** (lines 1684-1778) instructs TC to "NOW ACCESS CASE STUDIES" after Phase 4 completion. Under PV2, TC exits after Phase 3.5. Divergence verification should be condensed into the commitment gate.

### Finding 4: The Density Patterns Are Mislocated

The CRESCENDO/F-PATTERN/BENTO/PULSE patterns (lines 101-126) are currently positioned as Middle-tier routing shortcuts. Under ALWAYS FLAGSHIP, they should be relocated as FLAT MODE deployment options -- used only when the Addition Test determines no genuine tension exists. Their value is not as tier alternatives but as spatial organization strategies for non-metaphor pages.

### Finding 5: Construction Bias Preamble Is Unverified

The 18-line "CRITICAL PRINCIPLE" opening (lines 6-23) about construction vs discovery bias has never been measured as preventing a specific failure. No agent has been observed failing from "discovery bias." This section reads as philosophical framing, not operational guidance. It could be condensed to 3 lines: "You are constructing, not discovering. Multiple valid metaphors exist for the same content. Your derivation is one path, not the path."

---

## 8. RECOMMENDATIONS SUMMARY

| Priority | Action | Lines Affected | Impact |
|----------|--------|---------------|--------|
| **P0** | Remove all tier-conditional routing (ALWAYS FLAGSHIP) | -145 lines | Eliminates dead code |
| **P0** | Relocate Phase 4 CSS content to operational-recipe.md / mechanism-catalog.md | -597 lines | Eliminates scope confusion |
| **P1** | Rewrite Phase 5 output to _build-plan.md specification | Rewrite ~58 lines | Aligns TC with PV2 architecture |
| **P1** | Merge Phase 5 divergence into Phase 3.5 commitment gate | -95 lines, +20 lines | Simplifies flow |
| **P1** | Remove duplicate builder guardrails appendix | -42 lines | Eliminates redundancy |
| **P1** | Remove stale test content/results | -34 lines | Eliminates dead content |
| **P2** | Enrich Phase 1 with content-topology detection | +15 lines | Strengthens creative engine |
| **P2** | Enrich Phase 3 with structural-vs-announced self-check | +10 lines | Prevents F-40 at source |
| **P2** | Enrich build plan output with explicit CSS values | +30 lines | Makes build plan a recipe input |
| **P2** | Condense construction bias preamble | -15 lines | Removes unverified philosophy |

**Net result:** 1,933 lines -> ~650-700 lines (-64%). INVOCATIONAL content rises from 37% to ~65%.

The TC skill becomes what it's supposed to be: a compositional intelligence engine that reads content, derives tension, selects metaphors, and outputs a structured build plan. Everything else lives where the BUILDER can see it.

---

*END REPORT*
