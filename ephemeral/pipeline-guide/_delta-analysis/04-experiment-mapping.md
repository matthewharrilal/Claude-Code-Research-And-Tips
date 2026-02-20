# Delta Analysis 04: Experiment Mapping

**Task:** Map the PV2 diagram's experiment plan vs the guide's experiments.
**Sources:**
- PV2 Diagram: `design-system/pipeline/PV2-PIPELINE-DIAGRAM.md` (1,354 lines)
- Guide Section 7: `ephemeral/pipeline-guide/PIPELINE-V2-IMPLEMENTATION-GUIDE.html` (id="s7")

---

## 1. Experiments the PV2 Diagram Recommends

The PV2 diagram's experiment section spans lines 438-504, with a "NEXT STEP" section at lines 1299-1354. The diagram defines **5 experiments** in two separate locations that use DIFFERENT labels and orderings.

### From "EXPERIMENT BRANCH" (lines 392-435):

| Label | Description | What It Tests | Cost |
|-------|-------------|---------------|------|
| **EXP A** | Recipe (PV2 as designed) | 300-line template + 200-400 line TC-generated instance, 9 sequential phases | Not stated here |
| **EXP B** | Principles Brief | 100-line constraints doc, no sequence, builder composes freely within constraints | Not stated here |
| **EXP C** | Hybrid | Recipe for Phases 0-4, convention-based freedom for Phases 5-8 | Not stated here |
| **EXP D** | Fat Core (NEW) | MERGE TC planner + builder into SINGLE Opus agent, ~100-line conventions brief, 3 phase-locked gates | Not stated here |
| **EXP E** | Single Opus, No Pipeline | 1 Opus + content + soul constraints + thresholds, 42-line instruction, no TC, no recipe, no gates | ~$5, ~2 hours |

### From "PRIORITY ORDER" (lines 469-504):

The diagram then REORDERS these as "cheapest first":

| Priority | Label | Description | Cost | Decision Gate |
|----------|-------|-------------|------|---------------|
| 1 (star) | **EXP E** | Single Opus, No Pipeline, 42-line prompt | $5, ~2 hrs | PA-05 >= 3/4 --> STOP |
| 2 (star) | **EXP D** | Fat Core, single Opus plans + builds, 100-line brief | $15, ~3 hrs | PA-05(D) >= 3/4 --> Fat Core wins |
| 3 (arrow) | **EXP A** | Opus + Minimal Prompt (42 lines, no pipeline). Note: "May be merged with EXP E" | Not stated | -- |
| 4 (arrow) | **EXP B** | Opus + Full Recipe (650 lines + TC build plan) | Not stated | -- |
| 5 (arrow) | **EXP C** | Opus + Principles Brief + Gates (100 lines) | Not stated | -- |

### From "NEXT STEP" (lines 1299-1354):

The diagram's FINAL section defines **3 experiments in strict sequence** (NOT 5):

| Label | Description | Cost | Decision Gate |
|-------|-------------|------|---------------|
| **Experiment A** | The $5 Experiment. Content + conventions brief (~100 lines) + tokens + prohibitions. Single Opus, no pipeline. | ~$5-10, ~30 min build + 1 hr PA | PA-05 >= 3.0 --> STOP |
| **Experiment B** | Fat Core (if A < 3.0). Full 12-agent architecture. | ~$30-50, ~90 min build + 1.5 hr PA | PA-05 improvement >= 0.5 over A --> shell adds value |
| **Experiment C** | Recipe Comparison (only if needed). Fat Core + 650-line recipe instead of brief. | ~$30-50, ~90 min | Recipe < Brief --> ceiling CONFIRMED |

**CRITICAL OBSERVATION:** The PV2 diagram contains **three different experiment taxonomies** that use the **same labels (A-E)** with **different referents**:
1. Lines 392-435: EXP A-E defined by approach type (Recipe, Brief, Hybrid, Fat Core, Single Opus)
2. Lines 469-504: Same labels reordered by cost, with A/E potentially merged
3. Lines 1299-1354: NEW A-B-C labels that map to DIFFERENT experiments than the first taxonomy

This is a **naming collision**. In the first taxonomy, "EXP A" = Recipe. In the final taxonomy, "Experiment A" = $5 test with conventions brief (which was "EXP E" in the first taxonomy). The diagram never reconciles these.

---

## 2. Experiments the Guide Recommends

The guide (Section 7, lines 1455-1585) defines **5 experiments** with explicit cross-references to the PV2 diagram labels:

| Guide Label | Description | PV2 Diagram Cross-Ref | Cost | What It Tests |
|-------------|-------------|----------------------|------|---------------|
| **Exp A** | The Naked Test. 1 Opus + 42-line minimal prompt, NO pipeline | = Diagram "EXP A" | ~$5, ~1 hr | Absolute floor baseline |
| **Exp B** | The $5 Conventions Test. 1 Opus + conventions brief + tokens + prohibitions. No pipeline. | = Diagram "EXP E" | ~$5-10, ~2 hrs | Does pipeline help at all? |
| **Exp C** | Fat Core Full Test. 12 agents: orchestrator + core + 3 gates + 9 PA + weaver | = Diagram "EXP D" | ~$30-50, ~4 hrs | Does verification shell add value? |
| **Exp D** | Full Recipe Test. Same as C but 650-line recipe instead of 100-line brief | = Diagram "EXP B" | ~$30-50, ~4 hrs | Recipe ceiling hypothesis |
| **Exp E** | Head-to-Head. Conventions brief vs recipe, same content, blind comparison | = Diagram "EXP C" | ~$40-80, ~6 hrs | Pure A/B test, removes confounds |

**Total estimated cost:** ~$110-195, ~2 days

---

## 3. Side-by-Side Mapping Table

| PV2 Diagram (Priority Order, lines 469-504) | PV2 Diagram (Final Section, lines 1299-1354) | Guide (Section 7) | Same experiment? |
|---|---|---|---|
| **EXP E**: Single Opus, 42-line, no pipeline ($5) | **Experiment A**: $5 Experiment, conventions brief + tokens ($5-10) | **Exp A**: Naked Test (42-line) AND **Exp B**: $5 Conventions Test (brief + tokens) | PARTIALLY. Guide SPLITS PV2's EXP E into two experiments: one truly naked (Exp A = 42 lines only) and one with conventions brief (Exp B = brief + tokens). PV2's final Experiment A conflates these. |
| **EXP D**: Fat Core, single Opus plans + builds ($15) | **Experiment B**: Fat Core, 12-agent ($30-50) | **Exp C**: Fat Core Full Test ($30-50) | YES, same experiment. Guide provides more specific agent count (12). |
| **EXP A**: Recipe (300-line template + TC instance) | **Experiment C**: Recipe Comparison ($30-50) | **Exp D**: Full Recipe Test ($30-50) | YES, same experiment. Tests recipe format vs brief. |
| **EXP B**: Principles Brief + Gates (100 lines) | No equivalent in final section | **Exp E**: Head-to-Head ($40-80) | DIFFERENT. PV2's EXP B is "brief + gates only." Guide's Exp E is a "direct A/B comparison of brief vs recipe." |
| **EXP C**: Hybrid (recipe structure + convention freedom) | No equivalent in final section | No direct equivalent | MISSING. Guide drops the Hybrid experiment entirely. |

### Key Differences:

1. **Guide ADDS Experiment A (Naked Test)** -- a 42-line truly minimal prompt with NO conventions brief. This is a genuine addition. The PV2 diagram's EXP E and "NEXT STEP Experiment A" both include the conventions brief. The guide separates "truly naked" from "conventions brief only."

2. **Guide DROPS the Hybrid experiment (PV2's EXP C)** -- The Hybrid approach (recipe for foundation + convention for composition) is completely absent from the guide. This was one of the PV2 diagram's 5 approaches.

3. **Guide ADDS Head-to-Head (Exp E)** -- a direct blind comparison that doesn't exist in the PV2 diagram's experiment plan.

4. **Guide uses different labels** -- All 5 experiments are relabeled A-E in a new order. The guide explicitly provides cross-reference parentheticals "(= Diagram 'EXP X')" to bridge the naming gap.

5. **Guide says "run them ALL"** -- PV2 diagram says "PRIORITY ORDER (cheapest first, each informs the next)" with conditional stops. The guide says "ALL 5 EXPERIMENTS -- RUN THEM ALL, CHEAPEST FIRST" with decision gates AFTER all results are in.

6. **Cost difference**: Guide estimates total ~$110-195. PV2 diagram doesn't provide a total but individual costs would be lower (EXP E $5 + EXP D $15 = $20 before any further experiments needed).

---

## 4. Does the PV2 Diagram Say "Build First, Then Test" or "Test First, Then Build"?

**The PV2 diagram says "test first, then build."** Evidence:

**Line 37 (status box):**
> `Status:   EXPERIMENT FIRST — 5 experiments before codifying (was 3)`

**Lines 392-393 (experiment branch):**
> `EXPERIMENT BRANCH — 5 APPROACHES PENDING TESTS`
> `(User chose "experiment first" — run before codifying)`

**Lines 1242-1258 (codification guidance):**
> `WHAT TO CODIFY IMMEDIATELY (before experiments):`
> `1. conventions-brief.md (~100 lines)`
> `2. experiment-protocol.md (~80 lines)`
>
> `WHAT TO DEFER (until experiments prove value):`
> `- Pipeline v2 orchestrator code`
> `- TC skill narrowing`
> `- Gate runner updates (SC-13 to SC-15)`
> `- Operational recipe (INDEFINITELY unless experiments prove brief insufficient)`
> `- Transition table format (let Core agent create organically)`

**Lines 1345-1351 (decision tree):**
> `A >= 3.0 → STOP. conventions brief = the pipeline.`
> `A < 3.0, B >= 3.0 → Fat Core is the architecture.`
> `Then: Codify the winning approach.`
> `Then: Expand to 5 content types. Track PA-05 per type.`

So the PV2 diagram's position is: write the conventions brief + experiment protocol FIRST, run experiments, THEN codify whatever wins. The full pipeline infrastructure (orchestrator, gate runner, TC narrowing) is explicitly deferred until experiments justify it.

---

## 5. PV2 Diagram's Stated Status

**Line 4:**
> `**Status:** INCREMENTALLY UPDATED as investigation reports arrive.`

**Line 37 (inside the header box):**
> `Status:   EXPERIMENT FIRST — 5 experiments before codifying (was 3)`

**Line 7:**
> `**Directives:** ALWAYS FLAGSHIP | ALWAYS REMEDIATION-STYLE | FIRE AND FORGET`

**Lines 1-6 (header):**
> `# Pipeline V2 — Complete Architecture Diagram (LIVE INCREMENTAL UPDATE)`
> `**Reference Document** — This is the canonical ASCII visualization of Pipeline V2.`
> `**Last Updated:** 2026-02-19 (incorporating 50+ reports + MASTER SYNTHESIS verdict)`

**Lines 1242-1258 (codification section):**
The diagram explicitly separates "WHAT TO CODIFY IMMEDIATELY" (2 small files) from "WHAT TO DEFER" (5 major items), indicating it sees itself as a **reference architecture** that is NOT yet ready for full implementation.

**Lines 1145-1146 (comparison table):**
> `│ N (evidence)    │ 1 (Flagship)   │ 2 (Middle, Rem)│ 0 (UNTESTED)   │ 0 (UNTESTED)   │`

Both "Updated PV2" and "Fat Core" are marked as **N=0 (UNTESTED)**.

**Summary of status:** The PV2 diagram considers itself a REFERENCE DOCUMENT undergoing INCREMENTAL UPDATES. Its status is explicitly "EXPERIMENT FIRST." It acknowledges the two main architectures it describes (Updated PV2 linear pipeline and Fat Core) are both UNTESTED (N=0). It is NOT presenting itself as implementation-ready -- it is presenting itself as the architecture to be VALIDATED by experiments.

---

## 6. Does the PV2 Diagram AGREE with the Guide's Approach?

**YES, with qualifications.** Both documents share the same fundamental position:

### Agreement:

1. **Experiment before codifying.** PV2 says "EXPERIMENT FIRST" (line 37). Guide says "These experiments are not optional. They are Step 1" (line 1458).

2. **Cheapest experiments first.** PV2 says "PRIORITY ORDER (cheapest first, each informs the next)" (line 471). Guide says "ALL 5 EXPERIMENTS -- RUN THEM ALL, CHEAPEST FIRST" (line 1466).

3. **Conventions brief before infrastructure.** PV2's "WHAT TO CODIFY IMMEDIATELY" lists conventions-brief.md and experiment-protocol.md -- exactly the guide's Steps 1-2 (foundation edits + conventions brief).

4. **Defer infrastructure until proven necessary.** PV2 says "WHAT TO DEFER (until experiments prove value): Pipeline v2 orchestrator code, TC skill narrowing, Gate runner updates" (lines 1253-1258). Guide's Steps 4-6 are explicitly conditional on Experiment B failing.

5. **PA-05 >= 3.0 as the threshold.** Both use the same success criterion.

### Qualifications:

1. **The PV2 diagram's "NEXT STEP" section (lines 1299-1354) defines only 3 experiments, not 5.** The guide expands to 5 by splitting the baseline test and adding a head-to-head. The PV2 diagram would likely agree with this expansion since its earlier section (lines 469-504) ALSO lists 5 experiments.

2. **The PV2 diagram's internal inconsistency makes agreement ambiguous.** The "EXPERIMENT BRANCH" section (5 approaches A-E), the "PRIORITY ORDER" section (5 experiments E-D-A-B-C), and the "NEXT STEP" section (3 experiments A-B-C) use the same letters for different things. The guide's approach of providing explicit cross-references (e.g., "= Diagram 'EXP E'") and using a single consistent taxonomy is a RESOLUTION of this inconsistency, not a contradiction of it.

3. **The guide adds Experiment B (the $5 Conventions Test) as a DECISION GATE before building infrastructure.** The PV2 diagram's final section places this as "Experiment A" -- first in sequence. So both agree on running this before building infrastructure, but the guide makes the decision gate more explicit by embedding it in the implementation order (Step 3, with "skip to Step 7" fast path).

4. **The guide drops the Hybrid experiment.** The PV2 diagram includes EXP C (Hybrid: recipe for structure + convention for composition). The guide doesn't include this. This is a DEVIATION -- the PV2 diagram recommends testing the Hybrid approach, but the guide silently omits it. This may be justified by the guide's addition of the Head-to-Head experiment (which partially tests the same question), but the omission is not explained.

### Net Assessment:

The guide is a **faithful operationalization** of the PV2 diagram's experiment-first philosophy. It resolves the diagram's naming collisions, adds useful experiments (naked baseline, head-to-head), and makes decision gates explicit in the implementation sequence. The one notable deviation -- dropping the Hybrid experiment -- is a judgment call rather than a contradiction.

The PV2 diagram would recognize the guide's approach as implementing its own stated directive: "EXPERIMENT FIRST -- 5 experiments before codifying."

---

## Summary Table

| Question | Answer |
|----------|--------|
| PV2 experiments recommended | 5 approaches (A-E) in experiment branch, 5 in priority order, 3 in final section -- internally inconsistent labels |
| Guide experiments recommended | 5 experiments (A-E) with consistent labels and explicit PV2 cross-references |
| Same experiments? | 4 of 5 are the same (relabeled). Guide adds Naked Test (Exp A) and Head-to-Head (Exp E), drops Hybrid (PV2 EXP C). |
| PV2 build or test first? | TEST FIRST. "EXPERIMENT FIRST -- 5 experiments before codifying" (line 37) |
| PV2 stated status? | "INCREMENTALLY UPDATED" reference document. "EXPERIMENT FIRST." Both main architectures are N=0 UNTESTED. |
| PV2 agrees with guide's approach? | YES. Same philosophy (test first, cheapest first, defer infrastructure). Guide resolves PV2's naming inconsistencies and operationalizes its experiment plan. |
