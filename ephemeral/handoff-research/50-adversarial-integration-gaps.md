# Adversarial Integration Gap Analysis
## What the Master Execution Prompt FAILED to Integrate

**Analyst:** adversarial-integration (Opus)
**Date:** 2026-02-22
**Method:** Line-by-line cross-reference of master execution prompt (578 lines) against 7 primary source files + R1-R5 research synthesis
**Verdict:** The prompt is STRUCTURALLY SOUND but suffers from ~35 integration gaps across 4 categories, several of which are HIGH-RISK for builder output quality.

---

## Methodology

For each knowledge unit in the source material, I asked:
1. Is it IN the master prompt? (present / absent / transformed)
2. If absent: deliberately excluded or accidentally lost?
3. If transformed: did transformation preserve or destroy meaning?
4. If contradicted: what does the prompt say vs what the source says?

Source files examined:
- MASTER-EXECUTION-PROMPT.md (578 lines) -- the subject
- RESEARCH-SYNTHESIS.md (384 lines) -- cross-research insights
- mechanism-catalog.md (1,219 lines) -- 18 mechanisms with impact profiles
- prohibitions.md (419 lines) -- soul constraints
- semantic-rules.md (530 lines) -- semantic gap rules
- conventions-brief.md (610 lines) -- the brief the builder reads
- gate-runner.md (1,340 lines) -- 23 programmatic gates
- flagship-pa-questions.md (159 lines) -- 9 Tier 5 questions
- R1-R5 research files (headers read, synthesis cross-referenced)

---

## CATEGORY A: Knowledge Present in Sources but ABSENT from Prompt

These items exist in the source material and are relevant to pipeline quality but do not appear anywhere in the master execution prompt or the files it produces.

### A-1: Component Character Model (R5 + RESEARCH-SYNTHESIS)
**Source:** RESEARCH-SYNTHESIS.md lines 178-196 -- 11-component velocity/temperature/weight matrix
**What it says:** Every component has a personality: Code Snippet is SLOW/Neutral/Heavy, Tip Callout is FAST/Warm/Light, Essence Callout is SLOW/Warm-Reverent/Medium, etc.
**Where it should appear:** Conventions brief Section 8 (CSS Vocabulary) or as builder context
**Status:** COMPLETELY ABSENT from prompt, conventions brief, and all pipeline files
**Risk:** HIGH. Without velocity/temperature/weight awareness, builders will stack same-character components (SLOW+SLOW, HEAVY+HEAVY) creating monotonous sequences. Prohibition #18 says "NEVER stack same-density" but the conventions brief provides no model for HOW to vary density at the component level. The research provided an actionable model; the prompt lost it.
**Likely cause:** Compression. The 337 findings were reduced to mechanism-level vocabulary, and the character model -- which is a COMBINATION rule, not a mechanism -- fell through the gap between grammar/ and case-studies/.

### A-2: Component Sequencing Recommendations (RESEARCH-SYNTHESIS)
**Source:** RESEARCH-SYNTHESIS.md lines 272-308 -- four named sequences (Opening, Teaching, Decision, Closing) with specific component orderings
**What it says:** Opening = Hero -> Overview Callout -> Navigation/Map. Teaching = Essence -> Core Abstraction -> Code Snippet -> Tip. Decision = Decision Matrix -> Reasoning -> Gotcha. Closing = Challenge -> Task -> Essence.
**Where it should appear:** Conventions brief or builder spawn prompt as recommended patterns
**Status:** COMPLETELY ABSENT
**Risk:** MEDIUM. Builders have mechanism vocabulary but no guidance on HOW to sequence components within a section. Without sequence recommendations, component ordering becomes arbitrary. The research identified proven ordering patterns.
**Likely cause:** Deliberately excluded as "prescriptive" -- but the brief claims to be 55% conventions / 25% recipe / 20% checklist, and sequence recommendations are pure recipe.

### A-3: Six-Dimensional Density Model (R3 + RESEARCH-SYNTHESIS)
**Source:** RESEARCH-SYNTHESIS.md lines 140-160, R3 (51 findings) -- six density dimensions: Spatial, Temporal, Depth, Semantic, Cognitive, Interaction
**What it says:** Each section should have a density "signature" across all 6 dimensions. Dense/sparse is not one axis -- it's six independent axes that can be composed.
**Where it should appear:** Conventions brief Section 3 (Richness) or Section 10 (Compositional Memory)
**Status:** ABSENT. The conventions brief mentions "density" 14 times but treats it as a SINGLE dimension (spatial density). The Anti-Scale Model (richness = density x restraint x confidence) treats density as monolithic. The 6-dimensional model from R3 that CREATED the density research is entirely missing.
**Risk:** MEDIUM. Builders will treat density as purely spatial (components-per-viewport) rather than composing across temporal, semantic, and cognitive dimensions. This limits richness to visible-element density rather than the multi-dimensional density the research proved effective.
**Likely cause:** Over-compression. 51 R3 findings compressed into "density" as a single factor in the anti-scale equation.

### A-4: Conflict Resolutions from RESEARCH-SYNTHESIS (lines 219-253)
**Source:** Three named conflicts with explicit resolutions:
1. Grid Breaking vs Sharp Edges: "Break grid with CONTENT positioning, not DECORATION"
2. Progressive Disclosure vs Flat Design: "Use scroll-based reveals, click-to-expand, NOT hover-to-reveal"
3. Density Maximization vs Breathing Room: "Vary density by SECTION PURPOSE"
**Where it should appear:** Conventions brief (possibly Section 12 Restraint List or Section 9 Creative Authority)
**Status:** Conflict 1 is PARTIALLY present in prohibitions.md #12 (no decorative grid breaking). Conflict 2 is ABSENT -- the brief mentions progressive disclosure (#12 mechanism) but does not explain the flat-design constraint on HOW to implement it. Conflict 3 is PARTIALLY present via density arc guidance but not framed as a RESOLVED CONFLICT.
**Risk:** LOW-MEDIUM. Builders may implement progressive disclosure with hover reveals (violating flat design). The prohibition exists (#14, no hover lift) but the connection to disclosure patterns is missing.

### A-5: "One Concept Per Viewport" Rule (R1 + RESEARCH-SYNTHESIS)
**Source:** RESEARCH-SYNTHESIS.md line 318 (Top 10 Finding #1), R1 density research
**What it says:** One major concept per viewport. This was the #1 actionable finding across all 337.
**Where it should appear:** Conventions brief Section 3 (Richness) or Section 5 (Fractal Echo)
**Status:** ABSENT as an explicit rule. The brief mentions "At least 2 distinct component types per viewport-height screenful" (brief line 104) which is DIFFERENT -- it controls component variety, not concept density. You can have 2 component types serving 3 concepts, violating the research finding.
**Risk:** LOW. The mechanism catalog's distribution requirements partially address this. But the foundational "1 concept per viewport" insight that was FINDING #1 is lost.

### A-6: Callout Scarcity Rule (R1 + RESEARCH-SYNTHESIS)
**Source:** RESEARCH-SYNTHESIS.md line 324 (Top 10 Finding #7): "Callout scarcity (1-2 per page)"
**What it says:** Callouts have maximum impact at 1-2 per page. 3+ consecutive creates "alarm fatigue."
**Where it should appear:** Conventions brief Section 8 (CSS Vocabulary) or Quality Floor
**Status:** ABSENT. The anti-patterns list mentions "callout cacophony" (RESEARCH-SYNTHESIS line 333) but the conventions brief has NO callout frequency guidance. Drop caps get a frequency limit ("at most 2 sections" -- brief line 352) but callouts do not.
**Risk:** MEDIUM. Builders deploying 6+ callouts across a page (common with the 5-type system) will dilute their impact without any frequency guidance.
**Likely cause:** The callout system documentation in the brief focuses on TYPE differentiation (5 types, colors, accents) but not FREQUENCY.

### A-7: "Setup -> Payoff -> Resolution" Sequencing (R3 + R5)
**Source:** RESEARCH-SYNTHESIS.md line 325 (Top 10 Finding #8)
**What it says:** Teaching sections should follow Setup -> Payoff -> Resolution structure.
**Where it should appear:** Conventions brief Section 7 (Transition Grammar) or Process section
**Status:** ABSENT. The transition grammar describes SMOOTH/BRIDGE/BREATHING but these are boundary treatments, not within-section narrative structure. The research identified a CONTENT structure (setup/payoff/resolution) that maps to density arcs.
**Risk:** LOW. The density arc guidance (Opening -> Building -> Climax -> Resolution) partially captures this at page level. But section-level narrative structure is unaddressed.

### A-8: Semantic Value Framework 3-Question Test (semantic-rules.md)
**Source:** semantic-rules.md lines 436-525 -- "For EVERY varying CSS value: Q1 WHAT varies, Q2 WHY, Q3 WHY THESE SPECIFIC VALUES"
**What it says:** A 3-question test for every varying CSS value, with tier-specific justification depth and before/after examples showing ARBITRARY vs SEMANTIC values.
**Where it should appear:** Conventions brief (as builder self-check) or SKILL.md (as builder requirement)
**Status:** ABSENT from prompt. The conventions brief mentions semantic reasoning in several places but does not provide the 3-question test as a concrete tool. The before/after examples (semantic-rules.md lines 477-516) showing ARBITRARY vs SEMANTIC padding and border-weight are exactly the kind of recipe content that would prevent flat output.
**Risk:** HIGH. This is the single most actionable tool for preventing arbitrary CSS values. The research identified it, documented it with examples, and it was not integrated.
**Likely cause:** The semantic-rules.md file is in Layer 6 (guidelines) which is CONDITIONAL-LOAD -- auditors and planners get it, but builders likely never see it.

### A-9: Content Density Floor Rules (semantic-rules.md Gap 6)
**Source:** semantic-rules.md lines 252-318 -- zone count ceiling by content volume, minimum content per zone, maximum consecutive empty viewport height
**What it says:** Maximum zones by content volume: <1500 words = 2 zones, 1500-3000 = 3 zones, 3000-5000 = 4 zones, 5000+ = 5 zones. Minimum 3 paragraphs OR 2 components per dedicated zone. This was a ROOT CAUSE of the ceiling experiment's 70-80% void.
**Where it should appear:** Conventions brief Section 5 (Fractal Echo) or Quality Floor
**Status:** PARTIALLY PRESENT. The conventions brief mentions "3-5 zones" (line 363, 382) but does NOT tie zone count to content volume. The gate-runner SC-12 enforces 3-5 zones but without content-volume mapping. A builder could create 5 zones for 1,200 words of content, recreating the ceiling experiment's void catastrophe.
**Risk:** HIGH. This was the ROOT CAUSE of a documented failure. The research identified precise word-count-to-zone-count mappings, and they are not in the pipeline.

### A-10: Content-Form Fit Gate (semantic-rules.md Gap 7)
**Source:** semantic-rules.md lines 322-397 -- "Does this section have enough content to fill this form at minimum density?" gate, with per-form minimums (bento grid = 4+ items, progressive disclosure = 3+ phases, etc.)
**What it says:** Before assigning ANY zone, pattern, or mechanism to a section, verify the section has enough content. This is a GATE, not a guideline.
**Where it should appear:** DG-4 (Handoff Validation) or as builder self-check
**Status:** ABSENT. DG-4 checks zone_count, bg_deltas, mechanisms, transitions, grid_layouts -- but NOT content-form fit. A builder could assign bento grid to 2 items or progressive disclosure to 1 phase with no gate failure.
**Risk:** HIGH. Another root cause of the ceiling experiment's failure. Over-formed content produces voids. No gate prevents it.

### A-11: Prohibitions #19-#22 Not Routed to Builder
**Source:** prohibitions.md lines 293-405 -- Meta-prohibitions #19-#20 (no justification without research, no patterns without tension) and spatial/layout prohibitions #21-#22 (no contentless viewport, no front-loaded visual interest)
**What it says:** Prohibition #21 is the contentless viewport prohibition (a binary test: 0 consecutive positions below 30% = pass). Prohibition #22 is the front-loading prohibition (at least 1 designed moment below 50% scroll depth).
**Where it should appear:** Builder spawn prompt or conventions brief
**Status:** #21 is INDIRECTLY present via SC-10 (stacked gap <= 120px) but the full viewport-height content coverage test is NOT in any gate. SC-10 checks gap BETWEEN zones, not content WITHIN zones. #22 is present in the conventions brief's "Five Questions" section (line 414: "does at least one designed moment appear below the midpoint?") but as a self-assessment question, not a binary gate.
**Risk:** MEDIUM. The Five Questions approach relies on builder honesty. The gate runner has no programmatic enforcement of #21 (content coverage) or #22 (designed moment distribution). Both were critical ceiling-experiment failure modes.

---

## CATEGORY B: Knowledge DISTORTED in Translation

These items exist in both source and prompt but the transformation changed or weakened the meaning.

### B-1: Mechanism Categories Renamed Without Mapping
**Source:** mechanism-catalog.md lines 56-62 defines 5 categories: Spatial (S), Hierarchy (H), Component (C), Depth/Emphasis (D), Structure/Navigation (N)
**Prompt:** Master prompt line 133 refers to "(Spatial, Hierarchy, Component, Depth/Emphasis, Navigation/Structure)"
**Conventions brief:** Line 67 says "all 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Navigation/Structure)"
**Distortion:** "Structure/Navigation" in the brief vs "Navigation/Structure" in the prompt vs the catalog's actual category heading "Structure/Navigation" (N). Minor, but the ordering swap could confuse a builder looking up mechanisms by category.
**Risk:** LOW. Name inconsistency, not semantic distortion.

### B-2: Transition Grammar Renamed from 3 Types to 3 Types
**Source:** mechanism-catalog.md lines 944-1026 defines transitions as: Type 1 HARD CUT, Type 2 SPACING SHIFT, Type 3 CHECKPOINT
**Conventions brief:** Lines 281-306 defines transitions as: SMOOTH, BRIDGE, BREATHING
**Distortion:** DIFFERENT NAMES for overlapping but non-identical concepts. HARD CUT ~ BREATHING (dramatic breaks), SPACING SHIFT ~ SMOOTH (subtle), CHECKPOINT ~ BRIDGE (labeled). But the mapping is not 1:1:
- HARD CUT (catalog) = "3px border, background change, no extra spacing" -- closest to BRIDGE in the brief
- CHECKPOINT (catalog) = "1px top/bottom borders, mono label, background change" -- a SPECIFIC component, not a general transition type
- SPACING SHIFT (catalog) = "spacing only, no border, no bg change" -- closest to SMOOTH

The builder reads the conventions brief (SMOOTH/BRIDGE/BREATHING). The mechanism catalog uses HARD CUT/SPACING SHIFT/CHECKPOINT. If the builder encounters both, the naming mismatch creates confusion.
**Risk:** MEDIUM. The conventions brief is the builder's PRIMARY document. The mechanism catalog is reference. If both are read, the incompatible transition vocabularies create cognitive friction. The prompt does not acknowledge or reconcile this renaming.

### B-3: "80% Creative Authority" Weakened by Constraint Count
**Source:** MEMORY.md finding: "Guardrail factory vs playbook factory. 7.9:1 guardrail-to-playbook ratio." The prompt was DESIGNED to fix this.
**Prompt:** Line 143 says to add "Approximately 80% of all decisions...are yours to make" to Section 9.
**Conventions brief:** Section 9 (lines 356-370) has the 80% statement. But the brief as a whole is ~610 lines with substantial constraint content. Counting distinct prescriptive statements (must, must not, at least, no more than, never, always) vs descriptive/recipe statements gives roughly:
- Prescriptive: ~85 instances of constraint language
- Descriptive/Recipe: ~45 instances of "you may" / "you are free" / specific CSS recipes
**Distortion:** The 80% creative authority STATEMENT exists but the 80% creative authority EXPERIENCE may not. A builder who reads 610 lines and encounters 85 constraints vs 45 freedoms may not FEEL 80% creative authority regardless of the explicit claim.
**Risk:** MEDIUM. The statement exists per the prompt's requirement. But the prompt's own Checkpoint 2 (line 182) says "Constraint language < 20% of total words." The conventions brief as delivered has NOT been measured against this threshold. If it exceeds 20%, the prompt's own verification checkpoint was not enforced.

### B-4: Zone Background Color Values Not Concrete Enough
**Source:** mechanism-catalog.md lines 360-401 provides 4 specific zone colors with semantic mappings: Sparse (#FEF9F5), Dense (#FFFFFF), Breathing (#FAF5ED), Bedrock (#1A1A1A)
**Conventions brief:** Section 4 (lines 172-179) provides a concrete 4-zone example with specific colors (#FEF9F5, #F0EBE3, #FFFFFF, #FEF9F5) and RGB delta calculations.
**Distortion:** The catalog's semantic zone names (Sparse/Dense/Breathing/Bedrock) and the brief's zone example use DIFFERENT colors for equivalent concepts. Catalog: Dense = #FFFFFF. Brief example Zone 3 = #FFFFFF (matching). But Catalog: Breathing = #FAF5ED. Brief example Zone 2 = #F0EBE3 (DIFFERENT -- 16 RGB delta between these two "warm mid-tone" values). A builder reading both documents gets conflicting concrete values for what should be the same concept.
**Risk:** LOW. Both values are within palette range and would pass gates. But the inconsistency undermines the brief's authority as the "single source."

### B-5: Mechanism Catalog Selection Logic Lost
**Source:** mechanism-catalog.md lines 64-90 provides an ESSENTIAL distinction: Middle uses content-structure mapping (direct: "This has code blocks -> I need mechanism #17") while Ceiling/Flagship uses metaphor-driven multi-channel coherence ("Geological strata -> spacing compression + border-weight + zone backgrounds all encode depth together").
**Conventions brief:** This selection logic distinction is ABSENT. The brief describes mechanisms as "the musician's scales" (line 311) and provides usage guidance, but the crucial insight that Flagship-level mechanism selection is METAPHOR-DRIVEN (not content-driven) is not stated explicitly.
**Prompt:** The prompt's Section 5 says "Conventions brief path is design-system/pipeline/conventions-brief.md" and "Builder reads 6 files IN THIS ORDER" with conventions brief FIRST. But the crucial SELECTION LOGIC that differentiates Flagship from Middle mechanism deployment is not in the builder's reading list.
**Risk:** HIGH. This is arguably the most important paragraph in the entire mechanism catalog -- it explains WHY the same 18 mechanisms produce different quality levels. A builder who deploys mechanisms via content-structure mapping (Middle logic) will produce Middle-quality output even with 14+ mechanisms and all gates passing. The gates count mechanisms but cannot detect SELECTION LOGIC.

### B-6: Restraint Ratio Documentation Requirement Lost
**Source:** mechanism-catalog.md lines 1056-1067 -- "Document which mechanisms you CONSIDERED AND REJECTED for each section, and why." Target: Flagship documents 5+ rejected mechanisms with reasoning.
**Conventions brief:** Line 369 says "Document at least 3 deliberately absent mechanisms and your reasoning in the build log."
**Distortion:** Catalog requires per-SECTION rejection documentation showing evaluation of EACH mechanism's fit. Brief requires only 3 absent mechanisms total for the whole page. The granularity dropped from per-section-per-mechanism to per-page-total. This is a significant weakening -- 3 total rejections for an 18-mechanism catalog means 15 were deployed or ignored without documented reasoning. The catalog's requirement (5+ per-section rejections) would produce 20-30 documented evaluations, demonstrating deep compositional thought.
**Risk:** MEDIUM. The brief's "3 absent mechanisms" is easy to satisfy mechanically. The catalog's per-section requirement was designed to force genuine compositional evaluation.

### B-7: Mechanism Density Cap Per Viewport Lost
**Source:** mechanism-catalog.md lines 1037-1053 -- "No single viewport-height section may contain MORE THAN 4 distinct mechanisms operating simultaneously." Distribution requirement: every third of the page contains at least 2 distinct mechanisms.
**Conventions brief:** ABSENT as an explicit cap. The brief mentions "At least 2 distinct component types per viewport-height screenful" (line 104) but this is a FLOOR (minimum), not a CAP (maximum). The mechanism catalog identifies 4 as the CEILING per viewport (above 4, mechanisms compete for attention and none register). The ceiling experiment's failure was 14 mechanisms in the first 20% (avg ~7 per viewport).
**Risk:** HIGH. Without a per-viewport mechanism cap, builders can concentrate mechanisms at the top of the page (the exact failure mode of the ceiling experiment). The floor (2 types per viewport) does not prevent saturation.

---

## CATEGORY C: Knowledge CONTRADICTED Between Prompt and Sources

### C-1: Gate Count Inconsistency
**Source:** Master prompt line 206 says "21 gates total." Master prompt line 478 says "All 17 blocking gates PASS."
**Gate-runner.md:** The COMPLETE GATE SUMMARY TABLE (lines 1297-1323) lists 25 total entries: 1 pre-gate (SC-00) + 19 programmatic (SC-01 through SC-17) + 2 deliverable (DG-1 through DG-4, but DG-3 is actually listed separately making it 3 DGs) + 1 advisory + 2 behavioral.
**The count is 23 in the gate-runner summary table (lines 1323-1324), not 21 as stated in the prompt.** The prompt claims 21 gates (line 206) but the gate-runner has 23 rows in its summary table. Additionally, line 478 says "17 blocking gates" but the summary shows 21 blocking + 1 advisory + 2 behavioral = 24 total with 21 blocking.
**Risk:** LOW. The actual gate runner file is correct. The prompt's count is misleading but builders don't read the prompt -- they read the gate runner. However, the cross-reference verifier (Wave 2 agent #8) was supposed to catch this.

### C-2: PA Question Count Inconsistency
**Source:** Master prompt line 253 says "56 total questions (48 + 8)" and line 8 says "9-auditor Mode 4 perceptual audit with 8 Tier 5 questions"
**Flagship-pa-questions.md:** Line 5 says "9 questions" (PA-60 through PA-68). Line 158 says "56 standard + 9 Tier 5 = 65 questions across 9 auditors."
**Conventions brief:** Line 386 says "56 questions including 8 Tier 5" -- this is WRONG. Tier 5 has 9 questions.
**Distortion:** The original prompt spec (lines 240-253) says 8 Tier 5 questions (PA-60 through PA-67). But the PA questions file as written has 9 questions (PA-60 through PA-68, with PA-68 being Metaphor Spatial Coverage added by the writer). The prompt was written before PA-68 existed.
**Risk:** LOW for output quality (the 9th question only helps). MEDIUM for orchestrator confusion: the orchestrator reads the prompt's "8 Tier 5" instruction, but the file has 9. The scoring rubric in the prompt (line 253) says "COMPOSED / APPROACHING / STRUCTURED / VOCABULARY ONLY" based on 7-8 / 5-6 / 3-4 / 0-2 -- these thresholds should be recalibrated for 9 questions.

### C-3: Success Bar Inconsistency
**Source:** Master prompt line 341 says "PA-05 >= 3.5 AND Tier 5 >= 6/8"
**Flagship-pa-questions.md line 139:** "8-9 / 9 | COMPOSED"
**Compositional-core/CLAUDE.md:** "PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations"
**Design-system/CLAUDE.md:** "PA-05 >= 3.5 AND Tier 5 >= 7/9 AND zero soul violations"
**Conventions brief line 386:** "PA-05 >= 3.5... Tier 5 >= 7/9"
**Contradiction:** The success bar for Tier 5 varies across files: 6/8 (master prompt, compositional-core CLAUDE.md), 7/9 (design-system CLAUDE.md, conventions brief). Since Tier 5 now has 9 questions, all "X/8" references are stale.
**Risk:** MEDIUM. The orchestrator reads the prompt's 6/8. The conventions brief says 7/9. If the builder or orchestrator uses the prompt's threshold, a page scoring 7/9 passes the brief but might be evaluated against 6/8 by the orchestrator. Inconsistency creates calibration confusion.

---

## CATEGORY D: Dimensions of Quality with NO REPRESENTATION at All

These are quality dimensions that exist in the research/source material but have ZERO representation in the master prompt, conventions brief, gate runner, or PA questions.

### D-1: Cognitive Load Management
**Source:** R3 (51 findings, "Cognitive" is one of 6 density dimensions). RESEARCH-SYNTHESIS Principle 1 explicitly lists "Cognitive: Mental processing required" as a density dimension.
**Representation:** ZERO. No gate, no PA question, no conventions brief guidance addresses cognitive load. A page could pass all gates with every viewport demanding maximum cognitive processing (dense code + decision matrix + reasoning component) with no rest points. The density arc guidance (Opening -> Building -> Climax -> Resolution) addresses SPATIAL density but not COGNITIVE density.
**Impact:** Pages that are spatially well-composed but cognitively exhausting. The research identified this as a distinct dimension for a reason.

### D-2: Temporal Density (Scroll Pacing)
**Source:** R3 51 findings, temporal density = "how information unfolds over time and scroll progression"
**Representation:** ZERO as a named concept. The conventions brief's density guidance is entirely spatial. Scroll velocity -- how much information the reader receives per scroll unit -- is never mentioned. The research identified scroll-to-information ratios as a key design variable.
**Impact:** Builds where scroll pacing is uniform from top to bottom. The spatial arc may vary, but the AMOUNT OF INFORMATION per scroll unit stays constant.

### D-3: Interaction Density
**Source:** R3 dimension 5: "Interactive elements per viewport." RESEARCH-SYNTHESIS includes "Interaction" as one of 6 density dimensions.
**Representation:** Channel 5 (Behavioral) in the gate runner measures binary presence/absence of transitions and hover states. But this is TRANSITION PRESENCE, not interaction density. The research measured interactive ELEMENTS per viewport as a design variable. The gate runner's own note (lines 551-568) acknowledges: "Behavioral (Ch5): 1 line definition. Zero CSS examples. Zero thresholds beyond binary."
**Impact:** No guidance on when/where to place interactive elements, how many per viewport, or how interaction density should vary across zones.

### D-4: Reading Pattern Awareness (Z/F/Bento Selection)
**Source:** RESEARCH-SYNTHESIS Principle 2 (lines 161-177): Z-pattern for hero sections, F-pattern for text-heavy, Bento grid for catalogs, Bookends for context -> action -> summary, PULSE for tutorials. These were mapped to specific section TYPES.
**Representation:** The conventions brief mentions "Five proven grid patterns" (lines 343-349) including golden ratio, 4-column bento, 3-column spokes, 2-column equal, single-column. But the brief does NOT provide the research's SELECTION CRITERIA (which pattern for which content type). The brief says "Select topologies because of your content and metaphor" (line 350) without providing the mapping table.
**Impact:** Builders choose grid patterns without research-backed selection criteria. The research identified specific pattern-to-content-type mappings that are lost.

### D-5: Component Family Kinship / Chemistry Rules
**Source:** R5 (39 findings) Principle H1 through H5: family cohesion, harmonic pairs, temperature flow, velocity matching. "Never stack same-temperature or same-velocity consecutively without buffer" (RESEARCH-SYNTHESIS line 196).
**Representation:** Prohibition #18 says "NEVER stack same-density" but this is spatial density, not velocity/temperature. The conventions brief has NO component chemistry guidance. The brief discusses components as individual patterns (2-zone DNA, callout system, code blocks) but never addresses HOW THEY INTERACT WITH EACH OTHER.
**Impact:** Builders treat components as independent elements rather than characters in a composition. The research's insight that "Components are characters in a narrative, not items in a list" (RESEARCH-SYNTHESIS line 134) is present in the synthesis but absent from operational guidance.

### D-6: Anti-Pattern Registry
**Source:** RESEARCH-SYNTHESIS Top 5 Anti-Patterns (lines 329-337): callout cacophony, code wall, hover reveals for important content, same density throughout, decorative grid breaking.
**Representation:** PARTIALLY present via prohibitions and restraint list. But the prompt does not route the anti-pattern REGISTRY (specification/anti-patterns/registry.md) to any builder or gate. Anti-patterns are individually captured in prohibitions.md but the organized registry -- which provides CONTEXT for why each anti-pattern fails -- is not in the builder's reading list.
**Impact:** Builders encounter individual prohibitions ("NEVER do X") without the organized anti-pattern context ("X fails because Y, and the alternative is Z"). The registry provides alternatives; the prohibitions provide only refusals.

### D-7: Essence Callout Typography Exception
**Source:** prohibitions.md line 114, semantic-rules.md lines 245-249: Essence callout is the ONLY callout using serif font + italic styling. Reserved for wisdom/core principles.
**Representation:** Conventions brief line 337 mentions "Essence = purple (#7C3AED)" but does NOT mention the serif/italic exception. The brief describes the Component 2-Zone DNA (line 313) as: "label zone: font-weight 600 (or monospace)... body zone: body font, 1rem, normal case." This DNA description does NOT carve out the Essence exception. A builder following the 2-Zone DNA recipe would give Essence a sans-serif body, violating the Essence identity.
**Risk:** MEDIUM. The Essence callout's serif italic body is a documented semantic distinction that produces the "reverent, archival quality" -- but it's not in the builder's vocabulary document.

---

## INTEGRATION GAP SEVERITY SUMMARY

| Category | Count | HIGH Risk | MEDIUM Risk | LOW Risk |
|----------|-------|-----------|-------------|----------|
| A: Absent | 11 | 4 (A-1, A-8, A-9, A-10) | 4 (A-3, A-6, A-11, A-2) | 3 (A-4, A-5, A-7) |
| B: Distorted | 7 | 2 (B-5, B-7) | 3 (B-2, B-3, B-6) | 2 (B-1, B-4) |
| C: Contradicted | 3 | 0 | 2 (C-2, C-3) | 1 (C-1) |
| D: Unrepresented | 7 | 0 | 3 (D-4, D-5, D-7) | 0 |
| **Total** | **28** | **6** | **12** | **6** |

*4 items in Category D (D-1, D-2, D-3, D-6) are informational gaps without direct risk ratings because they represent absent DIMENSIONS rather than absent RULES.*

---

## THE 6 HIGHEST-RISK GAPS (Fix Priority Order)

### 1. A-8: Semantic Value Framework 3-Question Test
**What's missing:** The concrete 3-question tool (WHAT varies? WHY? WHY THESE VALUES?) with before/after examples
**Why critical:** This is the single most actionable tool for preventing arbitrary CSS. Without it, builders satisfy gates mechanically (48px padding because >= 24px threshold) rather than semantically (48px because CRESCENDO peak = 50% compression from intro).
**Fix:** Add the 3-question test and 2 before/after examples to conventions brief Section 3 or as a builder self-check card.

### 2. A-9: Content Density Floor Rules (Zone Count by Content Volume)
**What's missing:** Word-count-to-zone-count mapping that prevents the ceiling experiment's catastrophic void
**Why critical:** ROOT CAUSE of documented failure. SC-12 enforces 3-5 zones but a builder can create 5 zones for 800 words. The mapping (<1500 words = 2 zones, etc.) was documented in semantic-rules.md but never reached the builder.
**Fix:** Add content-volume-to-zone-count table to DG-4 sub-checks or conventions brief Quality Floor section.

### 3. A-10: Content-Form Fit Gate
**What's missing:** Pre-build gate checking if sections have enough content for their assigned form treatment
**Why critical:** ROOT CAUSE of documented failure. Bento grid on 2 items, progressive disclosure on 1 phase -- these produce over-formed void zones. No gate catches them.
**Fix:** Add content-form fit sub-check to DG-4 (minimum: bento >= 4 items, progressive disclosure >= 3 phases, dedicated zone >= 3 paragraphs).

### 4. B-5: Mechanism Selection Logic (Metaphor-Driven vs Content-Driven)
**What's missing:** The crucial insight that Flagship mechanism selection is METAPHOR-DRIVEN (multiple mechanisms encoding the SAME semantic dimension) vs Middle's CONTENT-DRIVEN (each mechanism serving a DIFFERENT content need)
**Why critical:** This is the DEFINITION of what separates Flagship from Middle. All gates pass identically for both selection logics. Only the builder's cognitive model determines which logic is used.
**Fix:** Add a 3-paragraph "Selection Logic" subsection to conventions brief Section 8 or as a pre-build orientation. Include the concrete example from mechanism-catalog.md lines 67-84.

### 5. A-1: Component Character Model
**What's missing:** The 11-component velocity/temperature/weight matrix from RESEARCH-SYNTHESIS
**Why critical:** Without it, the prohibition against same-density stacking (#18) has no operational model. Builders cannot avoid stacking same-velocity components if they don't know component velocities.
**Fix:** Add a compact 11-row component character table to conventions brief Section 8.

### 6. B-7: Mechanism Density Cap Per Viewport
**What's missing:** The cap of 4 mechanisms per viewport and the distribution requirement (every third has >= 2)
**Why critical:** The ceiling experiment's exact failure mode was mechanism concentration (14 in first 20%). The floor (2 types per viewport) exists but the cap (4 max) does not.
**Fix:** Add the cap to conventions brief Section 3 (Richness) or Quality Floor. Add a distribution check to the gate runner.

---

## SYSTEMIC PATTERN: WHY THESE GAPS EXIST

Three root causes produce most integration gaps:

### 1. Layer-Routing Blindness
Semantic-rules.md (Layer 6) is CONDITIONAL-LOAD for builders -- they may never read it. But it contains ROOT-CAUSE prevention knowledge (content density floors, content-form fit, 3-question test) that is critical for builder quality. The 6-layer ontology's phase-gating protects against pattern-matching (anti-gravity R1) but also prevents life-saving knowledge from reaching the builder.

**Structural fix:** The conventions brief should be the SINGLE POINT where all builder-critical knowledge concentrates, regardless of which ontology layer originated it.

### 2. Compression Loss (337 -> 18 -> ~10)
337 research findings compressed to 18 mechanisms compressed to "deploy 14+ mechanisms across 5 categories." Each compression step loses COMBINATION knowledge (how things interact), SELECTION knowledge (which to choose and why), and FREQUENCY knowledge (how much/often). Individual mechanisms survive compression; their RELATIONSHIPS do not.

**Structural fix:** Add 1-2 "Combination Rules" and "Selection Logic" paragraphs to the conventions brief alongside the mechanism vocabulary.

### 3. Presence != Absorption
The prompt is meticulous about ensuring knowledge is PRESENT in the output files (Checkpoints 2-8 verify presence). But presence does not equal absorption. The conventions brief has 610 lines. A builder processing 610 lines absorbs ~200 lines effectively (the 75-line builder visibility cap research finding). The critical knowledge may be present at line 450 but never absorbed.

**Structural fix:** Prioritize the 6 highest-risk items above for early placement in the brief (within the first 200 lines of the builder's reading experience).

---

## CONCLUSION

The master execution prompt is a remarkable compression artifact -- 578 lines orchestrating 10 output files, 59 edits, 23 gates, 65 PA questions, and 2 validation builds. It correctly prioritizes the 3 non-negotiables (container, warm palette, perceptible CSS) that were the documented failure modes.

However, it lost critical ROOT-CAUSE knowledge at 3 points:
1. Content-volume-to-zone-count mapping (prevents void catastrophe)
2. Content-form fit verification (prevents over-formed zones)
3. Mechanism SELECTION LOGIC vs mechanism COUNT (prevents Middle-quality-at-Flagship-gate-compliance)

These 3 gaps represent the difference between a page that PASSES GATES and a page that IS COMPOSED. The gates are necessary but not sufficient. The missing knowledge is what transforms compliance into composition.

**Recommendation:** Before the next /build-page execution, apply the 6 highest-risk fixes listed above. Estimated effort: ~50 lines of additions to conventions-brief.md, ~20 lines to gate-runner.md (DG-4 sub-checks), and cross-reference cleanup of PA question counts.

---

**END ADVERSARIAL INTEGRATION GAP ANALYSIS**
