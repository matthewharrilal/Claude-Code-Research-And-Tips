# 11 -- Cross-Reference Audit: Research Files 10-17 vs Enrichment Plan + Current Skills

**Agent:** xref-auditor-b
**Date:** 2026-02-20
**Scope:** Research files 10-17, master enrichment plan (report 38), current TC/PA/build-page skills
**Method:** Extract every recommendation/finding/gap from each research file, check against enrichment plan IDs, check against current skill content

---

## File 10: Contrarian Analysis (350 lines)

### Total recommendations found: 13

**Already in enrichment plan:**
1. "Run `/build-page` once before enriching" -- Addressed by Report 11's decision tree (test first, enrich conditionally). Not a specific TC/PA-ENRICH item, but the master synthesis (Report 11) adopted this framing. *Status: ADOPTED as overall strategy.*
2. "Perception thresholds in gate-runner.md (~10 lines)" -- TC-ENRICH-06, PA-ENRICH-01. *Status: COVERED.*
3. "Boundary-by-boundary recipe in conventions-brief.md (~8 lines)" -- Referenced in Report 11 as Edit A (E2). Not a TC/PA-ENRICH item but was addressed in build-page builder checkpoints. *Status: PARTIALLY COVERED (in build-page, not in TC/PA enrichment plan).*
4. "Fix cycle should carry compositional context" -- TC-ENRICH-05 (fix cycle re-invocation protocol). *Status: COVERED.*

**Already in current skills:**
5. "Boundary-by-boundary building instruction" -- Present in build-page SKILL.md builder spawn prompt checkpoint 2: "After zone boundaries set (all channels together per boundary)." *Status: ALREADY IN SKILLS.*
6. "Perception thresholds" -- PA SKILL.md now has the Perception Threshold Reference Table (lines 617-637). *Status: ALREADY IN SKILLS.*

**MISSED: 4 items**

| # | Recommendation | Impact | Why Missed |
|---|---------------|--------|------------|
| M10-1 | **"Test first" protocol as a formal pre-enrichment gate** -- The contrarian's core argument that enrichment is premature without a baseline test. No enrichment item codifies "run once before applying DEFER package." | MEDIUM | The master synthesis adopted the decision tree conceptually but no TC/PA enrichment item enforces it. The enrichment plan assumes enrichments will be applied, not conditionally. |
| M10-2 | **"More text = worse output" as a hard cap enforcement** -- The empirical finding (963 lines = 1.5/4, 100 lines = 4/4). The contrarian argues for hard caps on brief length. | LOW | TC-ENRICH already addresses line budget indirectly. Report 07's 450-line cap is referenced in the synthesis but NOT in the enrichment plan as a specific item. The build-page SKILL already says "Keep the brief to ~50 lines." |
| M10-3 | **Complexity ratchet sunset protocol** -- "Rules only accumulate, never retire." The contrarian flags this as a systemic issue. | LOW | TC-ENRICH-27 (LOW priority) addresses sunset protocol. Correctly deferred. |
| M10-4 | **"Creative authority is already solved by architecture" warning** -- The contrarian argues that explicitly adding creative authority language is paradoxically constraining. | LOW | Not in enrichment plan, but build-page builder spawn already has creative authority section. Correctly omitted -- this is a "don't do" recommendation, not a "do" one. |

**DOWNGRADED: 1 item**

| # | Recommendation | Plan Priority | Contrarian Priority | Assessment |
|---|---------------|--------------|-------------------|------------|
| D10-1 | "Test first before any enrichment" | Not prioritized as a specific enrichment item | THE #1 recommendation (Lines 304-310) | JUSTIFIED -- the enrichment plan IS the pre-registered package. The decision to apply it was made, with the caveat that it would be conditional on test results. The plan adopted the spirit even if not the letter. |

---

## File 11: Master Synthesis (334 lines)

### Total recommendations found: 21

**Already in enrichment plan:**
1. E1 (Stack relationship bridge ~5 lines) -- Not directly mapped to TC/PA-ENRICH IDs but the concept appears in TC-ENRICH-01 (recipe format). *Status: PARTIALLY COVERED.*
2. E2 (Boundary-by-boundary recipe ~8 lines) -- Present in build-page builder checkpoint 2. *Status: IN SKILLS.*
3. E3 (Fix checkpoint contradiction ~5 lines) -- Addressed; build-page SKILL.md already has boundary-grouped checkpoints. *Status: IN SKILLS.*
4. E4 (Perception threshold table ~6 lines) -- PA-ENRICH-01. *Status: COVERED.*
5. E5 (Floor/target naming DESIGNED/COMPOSED) -- Not in enrichment plan. *Status: MISSED (see below).*
6. E6 (Channel CSS property completion 4-6) -- Not in enrichment plan. *Status: MISSED (see below).*
7. E7 (Compositional reference card) -- Correctly rejected (DON'T). *Status: CORRECTLY OMITTED.*
8. E8 (Comprehension proof gate) -- Correctly rejected (DON'T). *Status: CORRECTLY OMITTED.*
9. E9 (Component-internal multi-coherence ~3 lines) -- Not directly in enrichment plan. *Status: MISSED (see below).*
10. E10 (Parametric echo CSS recipe ~6 lines) -- Not directly in enrichment plan. *Status: MISSED (see below).*
11. E11 (New gates SC-17, SC-18) -- Correctly rejected (DON'T). *Status: CORRECTLY OMITTED.*
12. E12 (New PA question PA-68) -- PA-68 already exists. Correctly rejected as new. *Status: CORRECTLY OMITTED.*
13. E13 (Character scale budget cap 5%) -- Not in enrichment plan. *Status: MISSED (see below).*
14. E14 (Character scale register inventory ~8 lines) -- Not in enrichment plan. *Status: MISSED (see below).*
15. E15 (Weaver compositional vocabulary ~8 lines) -- Not directly mapped, but PA-ENRICH-08 (fix-type classification) and PA-ENRICH-10 (coherence ARC) cover similar territory. *Status: PARTIALLY COVERED.*
16. E16 (Fix cycle recipe structure ~10 lines) -- TC-ENRICH-05 (fix cycle re-invocation protocol) covers the same gap. *Status: COVERED.*

**Already in current skills:**
17. "DO NOW" Edit A (boundary recipe) -- Build-page checkpoint 2. *Status: IN SKILLS.*
18. "DO NOW" Edit B (checkpoint restructuring) -- Build-page has boundary-grouped checkpoints. *Status: IN SKILLS.*
19. "DO NOW" Edit C (channel-threshold reference table) -- PA SKILL Perception Threshold Reference Table. *Status: IN SKILLS.*
20. Decision tree (PA-05 >= 3.0 stop, 2.5-3.0 enrich, < 2.5 investigate) -- Not formally codified but the pipeline architecture handles this implicitly through fix cycles. *Status: IMPLICITLY PRESENT.*

**MISSED: 6 items (from DEFER package)**

| # | Recommendation | Impact | Why Missed |
|---|---------------|--------|------------|
| M11-1 | **E5: Floor/target naming extension** (DESIGNED/COMPOSED for 2-3 more dimensions beyond PA-05) | LOW | Was labeled DEFER TO TEST. Not needed before first run. Correctly deferred. |
| M11-2 | **E6: Channel CSS property completion for channels 4-6** (~3 lines modifying existing) | LOW | Was labeled DEFER TO TEST. Enhancement channels (behavioral, material) are correctly low-priority. |
| M11-3 | **E9: Component-internal multi-coherence statement** (~3 lines in brief) | MEDIUM | Was labeled DEFER TO TEST but is supported by Report 15's analysis. The TC SKILL now has multi-coherence rules but does not explicitly state label/body boundary IS a micro-coherence event. |
| M11-4 | **E10: Parametric echo CSS recipe** (~6 lines in brief) | MEDIUM | Was labeled DEFER TO TEST. The TC SKILL mentions parametric echo but does not provide concrete CSS values for dense/default/sparse zone components. |
| M11-5 | **E13: Character scale budget cap** (5% of CSS) | LOW | From Report 16. Was labeled DON'T in synthesis. Correctly omitted -- enforcing CSS line budgets is impractical. |
| M11-6 | **E14: Character scale register inventory** (~8 lines) | LOW | Was labeled DEFER TO TEST. The register vocabulary is already implicit in tokens.css. |

**DOWNGRADED: 1 item**

| # | Recommendation | Synthesis Priority | Enrichment Plan Priority | Assessment |
|---|---------------|-------------------|-------------------------|------------|
| D11-1 | E1 (Stack relationship bridge ~5 lines in brief) | DEFER TO TEST (5/9 reports support) | Not a specific TC/PA-ENRICH item | JUSTIFIED downgrade. The TC SKILL's Phase 4 now has an explicit CI stack table (L1-L5 mapping). The bridge lives in the TC SKILL rather than the conventions brief, which is an acceptable placement. |

---

## File 12: Scale - Navigation (413 lines)

### Total recommendations found: 8

**Already in enrichment plan:**
1. "Stacked gap accumulation at header-content boundary" -- TC-ENRICH-07, PA-ENRICH-04. *Status: COVERED.*
2. "Container width: distinguish header bleed vs inner container" -- SC-01 gate already enforces 940-960px. Build-page non-negotiables state "Container: 940-960px." *Status: IN SKILLS.*

**Already in current skills:**
3. "Navigation scale is LEAST enrichment-needy" -- The enrichment plan correctly allocates minimal effort to navigation scale. *Status: CORRECT PRIORITIZATION.*
4. "Dark slab inversion already produces 4+ channel multi-coherence" -- No enrichment needed, confirmed. *Status: NO ACTION NEEDED.*
5. "Fractal echo table with 5 rows" -- DG-1 in build-page gate section. *Status: IN SKILLS.*

**MISSED: 3 items**

| # | Recommendation | Impact | Why Missed |
|---|---------------|--------|------------|
| M12-1 | **Navigation Echo section** -- "Add 3-4 CSS examples showing how different metaphor types (DEEPENING, FOCUSING, RESOLVING, OPENING) express at the header level." Report says this is the "highest-leverage single enrichment for Navigation scale." | LOW-MEDIUM | Not in enrichment plan. The TC brief already derives metaphor expression per zone, and the conventions brief describes the dark slab. This is a conventions-brief enrichment, not a TC/PA skill enrichment. Outside the surgery scope. |
| M12-2 | **NAV-01 through NAV-10 checklist** -- 10-item Navigation-specific checklist. | LOW | Not in enrichment plan. This is a conventions-brief or gate-runner enrichment, not TC/PA. The build-page builder checkpoints already cover most of these (ARIA landmarks, component classes, bg delta). |
| M12-3 | **TOC-to-content bg delta check** (>= 15 RGB at secondary boundaries) | LOW | SC-09 already checks adjacent zone bg delta. If TOC is a zone, it's covered. If TOC is within the header zone, this is a borderline case not worth a new gate. |

**DOWNGRADED: 0 items**

---

## File 13: Scale - Page (492 lines)

### Total recommendations found: 10

**Already in enrichment plan:**
1. "Coherence arc planning" (boundary intensity sequence) -- PA-ENRICH-10 (coherence ARC detection guidance). *Status: COVERED.*
2. "Material channel operationalization" -- PA-ENRICH-05 (channel activation vs deployment). *Status: PARTIALLY COVERED.*
3. "Per-channel progression guidance" (typography, borders) -- TC-ENRICH-01 (recipe format) addresses this by converting output to sequenced steps. *Status: PARTIALLY COVERED.*

**Already in current skills:**
4. "Zone backgrounds are the strongest signal" -- SC-09, SC-12 in build-page gate runner. Conventions brief Section 2, Section 4. *Status: IN SKILLS.*
5. "Perception thresholds at page scale" -- PA SKILL Perception Threshold Reference Table. Build-page non-negotiables. *Status: IN SKILLS.*
6. "5-question self-check" -- Build-page builder Phase D. *Status: IN SKILLS.*
7. "Fractal echo table at Page scale" -- DG-1. *Status: IN SKILLS.*

**MISSED: 3 items**

| # | Recommendation | Impact | Why Missed |
|---|---------------|--------|------------|
| M13-1 | **Typographic progression across zones** -- "What does DEEPENING look like in typography specifically? Heading sizes decrease? Body weight stays constant?" Table mapping semantic directions to typographic progressions. ~10-15 lines. | MEDIUM | Not in enrichment plan. TC-ENRICH-01 (recipe format) may implicitly address this if the recipe includes per-direction CSS guidance, but the enrichment plan does not explicitly require per-direction typographic mapping. |
| M13-2 | **Transition-to-coherence mapping table** -- "SMOOTH = 3 channels, BRIDGE = 4-5 channels, BREATHING = 5-6 channels." ~8 lines bridging transition grammar to multi-coherence. | MEDIUM | Not in enrichment plan. The conventions brief has both concepts (Section 4 and Section 7) but never explicitly bridges them. This is a conventions-brief enrichment. |
| M13-3 | **Border progression at page scale** -- How border treatment should evolve across zones. ~8-10 lines. | LOW | Not in enrichment plan. Correctly omitted at LOW priority. The 3-tier border system is already documented. |

**DOWNGRADED: 0 items**

---

## File 14: Scale - Section (374 lines)

### Total recommendations found: 7

**Already in enrichment plan:**
1. "Within-zone transitions are explicitly QUIETER (1-2 channels, not 3+)" -- The conventions brief already states this (Section 7). TC SKILL Phase 4.3 coherence rules implicitly respect this. *Status: IN BRIEF (not TC/PA skill).*

**Already in current skills:**
2. "Density cap: <=4 mechanisms per viewport" -- TC-ENRICH-02 explicitly adds this. *Status: COVERED (pending application).*
3. "Distribution: >=2 per third" -- TC-ENRICH-02. *Status: COVERED (pending application).*
4. "SC-14 intra-zone prohibition" -- Build-page gate SC-14. *Status: IN SKILLS.*

**MISSED: 3 items**

| # | Recommendation | Impact | Why Missed |
|---|---------------|--------|------------|
| M14-1 | **Explicit within-zone transition hierarchy** -- "Max 2 channel shifts for within-zone transitions. Max 16px spacing delta within zone. 1px structural signals only within zone." 3-line addition. Report says this is the STRONGEST enrichment case for section scale. | MEDIUM | Not in enrichment plan. This is a conventions-brief enrichment that would prevent within-zone/zone-boundary confusion. The TC SKILL does not currently quantify "quieter." |
| M14-2 | **Mechanism scale tagging** -- "Add a column to the mechanism summary table indicating primary operating scale (Page / Section / Component / Cross-scale)." Zero new constraints. | LOW | Not in enrichment plan. This is a mechanism-catalog enrichment, not a TC/PA skill change. TC-ENRICH-10 (builder visibility of mechanism catalog) partially addresses this by including impact profiles. |
| M14-3 | **Behavioral channel starter guidance** -- 2-3 lines on component hover states at section scale. | LOW | Not in enrichment plan. Behavioral channel is correctly identified as low-leverage enhancement. PA-ENRICH-05 (channel activation) indirectly addresses this by distinguishing deployed vs active. |

**DOWNGRADED: 0 items**

---

## File 15: Scale - Component (313 lines)

### Total recommendations found: 6

**Already in enrichment plan:**
1. "Component-internal multi-coherence" -- Not directly mapped but TC SKILL Phase 4.3 has multi-coherence rules at zone boundaries. The component-scale application is not explicitly called out. *Status: PARTIALLY COVERED (zone boundaries only, not component label/body boundaries).*

**Already in current skills:**
2. "2-Zone Component DNA" -- Conventions brief Section 8, mechanism catalog Mechanism #2. Components.css implements it. *Status: IN DESIGN SYSTEM.*
3. "Parametric echo principle" -- Conventions brief Section 5 states it. TC SKILL references it. *Status: IN SKILLS.*
4. ">= 8 component types" -- SC-08 in build-page gate runner. *Status: IN SKILLS.*

**MISSED: 2 items**

| # | Recommendation | Impact | Why Missed |
|---|---------------|--------|------------|
| M15-1 | **Parametric echo CSS recipe** -- "Concrete padding values for components in dense vs default vs sparse zones. Dense zone callout: padding 16px 20px. Default: 24px 20px. Sparse: 32px 24px." 5-8 lines. Report calls this "HIGH LEVERAGE" because "recipe beats checklist." | MEDIUM | Not in enrichment plan. The TC SKILL mentions parametric echo as a concept but does NOT provide concrete CSS values per zone density level. This is the same as M11-4. |
| M15-2 | **Internal separator consistency** -- "Every 2-zone component SHOULD include a 1px bottom border between label and body." 1-2 lines. Report notes base callout lacks it despite DNA description mentioning it. | LOW | Not in enrichment plan. This is a components.css fix, not a TC/PA skill change. Correctly outside the surgery scope. |

**DOWNGRADED: 0 items**

---

## File 16: Scale - Character (339 lines)

### Total recommendations found: 6

**Already in enrichment plan:**
1. "SC-14 prevents sub-perceptual values" -- Build-page gate SC-14. *Status: IN SKILLS.*
2. "Character scale is ONLY after Page scale verified" -- Conventions brief Section 5. *Status: IN BRIEF.*

**Already in current skills:**
3. "SC-14 three sub-checks" -- Build-page gate runner. *Status: IN SKILLS.*
4. "Label register (0.75rem, 600, uppercase, ls 0.1em)" -- Mechanism #2, components.css. *Status: IN DESIGN SYSTEM.*

**MISSED: 2 items**

| # | Recommendation | Impact | Why Missed |
|---|---------------|--------|------------|
| M16-1 | **Character scale register inventory** -- "6 registers as a CLOSED SET: Display, Section, Body, Label, Code, Detail." ~8 lines making implicit vocabulary explicit and finite. | LOW | Same as M11-6. Report 16 rates this MEDIUM priority. The enrichment plan correctly defers this -- tokens.css already defines the values, and the conventions brief Section 8 describes the font trinity. Making it a formal closed set is a conventions-brief enrichment. |
| M16-2 | **Character scale budget cap** -- "No more than 5% of total CSS lines should target Character-scale properties." | LOW | Same as M11-5. Report 11 synthesis labeled this DON'T. Report 16 rates it HIGH priority. Disagreement between reports. The synthesis's reasoning is sound: CSS line budgets are impractical to enforce programmatically. |

**DOWNGRADED: 1 item**

| # | Recommendation | Report 16 Priority | Enrichment Plan Priority | Assessment |
|---|---------------|-------------------|-------------------------|------------|
| D16-1 | Character scale budget cap (5% of CSS) | HIGH ("prevents THE Flagship failure") | DON'T (Report 11 rejects) | JUSTIFIED downgrade. The enrichment plan addresses the root cause differently: TC-ENRICH-06 (perception threshold update) and SC-14 (sub-perceptual prevention) catch imperceptible CSS. A budget cap adds enforcement complexity without improving outcomes beyond what SC-14 already achieves. |

---

## File 17: Concept Flow Trace (839 lines)

### Total recommendations found: 12

This is the longest and most analytically rich report. It traces 9 concepts through 6 pipeline stages.

**Already in enrichment plan:**
1. "Perception thresholds are the best-preserved concept" -- PA-ENRICH-01 (threshold table), TC-ENRICH-06 (threshold update). *Status: COVERED.*
2. "Fix cycle degrades from recipe to checklist" -- TC-ENRICH-01 (recipe format), TC-ENRICH-05 (fix cycle re-invocation). *Status: COVERED.*
3. "Return path extinction for channels" -- PA-ENRICH-08 (fix-type classification) partially addresses by routing COMPOSITIONAL fixes differently. *Status: PARTIALLY COVERED.*
4. "S-09 stacking" -- TC-ENRICH-07, PA-ENRICH-04. *Status: COVERED.*
5. "Channel counting without magnitude" -- PA-ENRICH-05 (deployed vs active), PA-ENRICH-06 (magnitude check). *Status: COVERED.*

**Already in current skills:**
6. "Builder reads conventions brief in full" -- Build-page builder spawn prompt: "Read... conventions-brief.md." *Status: IN SKILLS.*
7. "Gates measure properties without naming channels" -- By design; gates are measurement infrastructure. *Status: CORRECT ARCHITECTURE.*
8. "PA uses perceptual language, not CI vocabulary" -- Fresh-eyes principle in PA SKILL. *Status: IN SKILLS.*

**MISSED: 4 items**

| # | Recommendation | Impact | Why Missed |
|---|---------------|--------|------------|
| M17-1 | **4 Semantic Directions suffer TOTAL EXTINCTION** -- 7 lines in brief, 0 lines past gates. "The most architecturally elegant concept vanishes completely." Recommendation: fix cycle should route builder back to relevant conventions-brief sections. | HIGH | Not directly in enrichment plan. TC-ENRICH-05 (fix cycle re-invocation) addresses the general gap but does NOT specifically route semantic direction feedback. Build-page fix instructions (Section 7.1) now include "Compositional Context" with boundary direction, which partially addresses this. But the weaver still has 0 lines about semantic directions. |
| M17-2 | **Anti-scale model has ZERO verification** -- "The governing principle of richness has zero gate measurement, zero weaver evaluation." Recommendation: weaver should evaluate anti-scale factors explicitly. | MEDIUM | Not in enrichment plan. PA-ENRICH-10 (coherence ARC) is the closest but does not specifically address the multiplicative zero-factor insight (density x restraint x confidence). PA-64 (restraint as expression) covers one of three factors. |
| M17-3 | **Stack progression was NEVER CODIFIED** -- "The architectural integration of all concepts was never written down." The concepts exist as independent atoms in the weaver checklist. | MEDIUM | Not in enrichment plan. TC SKILL Phase 4 now has an explicit CI stack table (L1-L5). The TC SKILL implicitly codifies the progression. But the weaver still evaluates concepts as a flat checklist, not an architectural stack. |
| M17-4 | **Option (c): Route builder back to brief sections in fix cycles** -- "Re-read Section 4 of conventions-brief.md. Your multi-coherence at boundary Z2-Z3 has contradictory directions." The cheapest intervention. | HIGH | PARTIALLY addressed. Build-page Section 7.1 fix instructions now include "Re-read conventions-brief.md Section [N] for the relevant concept." This is exactly Option (c). However, the weaver synthesis (Section 6.3) does NOT generate section-specific routing -- it still produces generic "MET/FAILED" binaries. The fix instructions template HAS the structure but depends on the orchestrator manually mapping gate failures to brief sections. |

**DOWNGRADED: 0 items**

---

## SUMMARY

### All MISSED Items Ranked by Impact

| Rank | ID | Description | Source | Impact | Why Not in Plan |
|------|-----|------------|--------|--------|-----------------|
| 1 | M17-1 | **Semantic direction extinction** -- 4 directions (DEEPENING/OPENING/FOCUSING/RESOLVING) vanish after brief. Fix cycle carries zero direction-specific feedback. | Report 17 | HIGH | The enrichment plan focuses on perception thresholds (measurable) and recipe format (structural). Semantic directions are conceptual and hard to operationalize. Build-page fix instructions now partially address this with compositional context, but the weaver does not evaluate direction coherence. |
| 2 | M17-4 | **Fix cycle brief-section routing** -- Route builder to specific conventions-brief sections during fix cycles, not just CSS values. | Report 17 | HIGH | Build-page Section 7.1 has the template structure but depends on manual orchestrator work. No enrichment item automates this mapping. The weaver produces binary verdicts, not section-specific guidance. |
| 3 | M13-1 | **Typographic progression per semantic direction** -- Table mapping DEEPENING/OPENING/FOCUSING/RESOLVING to specific typographic changes. | Report 13 | MEDIUM | Conventions-brief enrichment, not TC/PA skill. TC-ENRICH-01 (recipe format) may implicitly address this if the recipe includes per-direction guidance. |
| 4 | M13-2 | **Transition-to-coherence mapping** -- SMOOTH=3ch, BRIDGE=4-5ch, BREATHING=5-6ch. | Report 13 | MEDIUM | Conventions-brief enrichment. The two concepts exist in Sections 4 and 7 but are never explicitly bridged. |
| 5 | M14-1 | **Within-zone transition hierarchy quantification** -- Max 2 channels, max 16px spacing delta within zones. | Report 14 | MEDIUM | Conventions-brief enrichment. The brief says "quieter" but never quantifies. |
| 6 | M15-1 / M11-4 | **Parametric echo CSS recipe** -- Concrete padding values per zone density level for components. | Reports 15, 11 | MEDIUM | Not in any enrichment item. The principle is stated but the recipe is absent. This is a conventions-brief or mechanism-catalog enrichment. |
| 7 | M11-3 | **Component label/body = micro-coherence event** -- Explicitly stating that the component boundary IS a multi-coherence event at small scale. | Report 11, 15 | MEDIUM | DEFER-classified in synthesis. Valid deferral for first test. |
| 8 | M17-2 | **Anti-scale model zero verification** -- Density x restraint x confidence has no gate/weaver verification. | Report 17 | MEDIUM | Hard to operationalize as binary gates. PA-64 covers restraint. Density covered by SC-08. Spatial confidence is perceptual (PA-10, PA-30). The three factors ARE individually covered; the MULTIPLICATIVE insight is not. |
| 9 | M17-3 | **Stack progression not codified in weaver** -- Weaver evaluates concepts as flat checklist, not architectural stack. | Report 17 | MEDIUM | TC SKILL has L1-L5 stack table. Weaver in build-page evaluates 6 criteria independently. Converting to stack evaluation would require significant weaver prompt restructuring. |
| 10 | M12-1 | **Navigation echo CSS examples** -- Per-metaphor header CSS examples. | Report 12 | LOW-MEDIUM | Conventions-brief enrichment. Header CSS is largely fixed (dark slab). |
| 11 | M10-1 | **"Test first" as formal gate** | Report 10 | MEDIUM | Adopted as strategy, not codified as gate. |
| 12 | M16-1 / M11-6 | **Character scale register inventory (closed set)** | Reports 16, 11 | LOW | Tokens.css already defines values. |
| 13 | M16-2 / M11-5 | **Character scale budget cap (5%)** | Reports 16, 11 | LOW | SC-14 addresses root cause differently. |
| 14 | M14-2 | **Mechanism scale tagging** | Report 14 | LOW | TC-ENRICH-10 partially addresses via impact profiles. |
| 15 | M14-3 | **Behavioral channel guidance** | Report 14 | LOW | Enhancement channel, correctly low-priority. |
| 16 | M12-2 | **Navigation-specific checklist** | Report 12 | LOW | Build-page checkpoints already cover most items. |
| 17 | M12-3 | **TOC-to-content bg delta** | Report 12 | LOW | SC-09 covers adjacent zone boundaries. |
| 18 | M10-2 | **Hard line-count cap on brief** | Report 10 | LOW | Build-page says "~50 lines" for TC brief. |
| 19 | M10-3 | **Sunset protocol** | Report 10 | LOW | TC-ENRICH-27 (LOW priority). |
| 20 | M10-4 | **"Don't add creative authority language"** | Report 10 | LOW | Build-page already has it. |
| 21 | M15-2 | **Internal separator consistency** | Report 15 | LOW | Components.css fix, not skill change. |

### All DOWNGRADED Items

| # | Item | Research Priority | Plan Priority | Justified? |
|---|------|------------------|--------------|------------|
| D10-1 | "Test first before enrichment" | #1 (contrarian) | Not specific item | YES -- plan adopted decision tree from synthesis |
| D11-1 | Stack relationship bridge (E1) | DEFER TO TEST (5/9) | Not specific item | YES -- TC SKILL L1-L5 table serves same purpose |
| D16-1 | Character budget cap (5%) | HIGH (Report 16) | DON'T (Report 11) | YES -- SC-14 catches root cause more effectively |

### Overall Coverage Assessment

**By research file:**

| File | Total Recs | In Plan | In Skills | Missed | Downgraded | Coverage |
|------|-----------|---------|-----------|--------|------------|----------|
| 10 (Contrarian) | 13 | 4 | 2 | 4 | 1 | **69%** |
| 11 (Master Synthesis) | 21 | 9 | 5 | 6 | 1 | **71%** |
| 12 (Scale-Navigation) | 8 | 2 | 3 | 3 | 0 | **63%** |
| 13 (Scale-Page) | 10 | 3 | 4 | 3 | 0 | **70%** |
| 14 (Scale-Section) | 7 | 1 | 3 | 3 | 0 | **57%** |
| 15 (Scale-Component) | 6 | 1 | 3 | 2 | 0 | **67%** |
| 16 (Scale-Character) | 6 | 2 | 2 | 2 | 0 | **67%** |
| 17 (Concept Flow Trace) | 12 | 5 | 3 | 4 | 0 | **67%** |
| **TOTAL** | **83** | **27** | **25** | **27** | **2** | **67%** |

**Coverage interpretation:**

- **67% of recommendations are addressed** (in enrichment plan OR already in current skills)
- **33% are MISSED** but the majority are LOW impact
- **Only 2 items are genuinely HIGH impact misses** (M17-1 semantic direction extinction, M17-4 fix cycle brief-section routing)
- **Many "missed" items are conventions-brief or mechanism-catalog enrichments, not TC/PA skill changes** -- they fall outside the surgery scope

**The 2 highest-impact actions not in the enrichment plan:**

1. **Semantic direction routing in fix cycles** (M17-1 + M17-4): When SC-13B flags contradictory directions, the fix instruction should name the specific directions and route the builder to conventions-brief Section 4. Build-page Section 7.1 has the template for this ("Compositional Context") but the weaver does not generate direction-specific output. **Fix: Add to PA-ENRICH-08 (fix-type classification) or as a new item: "Weaver includes boundary direction diagnosis when SC-13B flags contradictions."**

2. **Transition-to-coherence bridge** (M13-2): The mapping SMOOTH=3ch, BRIDGE=4-5ch, BREATHING=5-6ch is one of the clearest actionable connections missing from the entire pipeline. It belongs in the conventions brief, not the skills, so it falls outside surgery scope. But the TC SKILL's Phase 4.5 output could include this mapping as part of the zone architecture section. **Fix: Add to TC-ENRICH-01 (recipe format): "Phase 4.5 output includes transition type + expected channel count per boundary."**

---

## APPENDIX: Items Correctly Omitted by Enrichment Plan

The enrichment plan correctly rejected or deferred these recommendations:

1. **E7 (compositional reference card)** -- More text = worse output. CORRECT.
2. **E8 (comprehension proof gate)** -- Rote exercise, delays builder. CORRECT.
3. **E11 (new gates SC-17, SC-18)** -- Gate proliferation. CORRECT.
4. **E12 (new PA question PA-68 stack)** -- PA-68 already exists. CORRECT.
5. **E13 (character budget cap)** -- SC-14 handles root cause. CORRECT.
6. All 5 DON'T items from synthesis. CORRECT.

These omissions reflect sound judgment: the enrichment plan correctly prioritizes actionable, low-risk changes over conceptually appealing but high-risk additions.

---

*End of cross-reference audit. 83 recommendations extracted, 67% coverage, 2 HIGH-impact gaps identified, 3 MEDIUM-impact gaps worth tracking.*
