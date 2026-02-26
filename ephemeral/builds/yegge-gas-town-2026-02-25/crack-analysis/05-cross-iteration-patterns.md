# Cross-Iteration Recurrence Pattern Analysis

**Analyst:** cross-iteration-analyst (Opus 4.6)
**Date:** 2026-02-25
**Scope:** All pipeline iterations from Phase D (2026-02-15) through current run (2026-02-25)
**Method:** Track each problem across iterations, classify fix durability, assess trajectory

---

## 1. Recurrence Registry: Problems That Keep Coming Back

### R-01: Non-Integer Border Widths
**Recurrence count:** 4+ consecutive runs
**History:**
- Phase D (5 variants): non-integer borders observed
- Flagship experiment (02-17): border compliance not measured (gates passed programmatically but PA found uniform flat styling)
- Flagship remediation (02-18): border selectors BLOCKING fix needed
- Run A / V3-Yegge (02-24): 0.67/2.67px borders flagged
- Current run (02-25): 3.75/3/0.75px borders flagged (GR-08/GR-09)

**Why the fix never sticks:** The prohibition exists as prose in identity rules ("borders must be integer pixels") but builders consistently produce fractional values. Three compounding factors: (1) DPR scaling at 0.667 transforms integer CSS values into fractional computed values, confounding the gate; (2) the prohibition is phrased as a constraint ("must be integer") rather than a recipe ("use 1px, 2px, 3px, or 4px ONLY"); (3) no worked example shows the WRONG vs RIGHT pattern.

**Classification:** PARTIALLY a gate measurement artifact (DPR), PARTIALLY a spec format problem (constraint vs recipe). The GR-08 tolerance bands would actually PASS the current values (3.75 is within 3.5-4.5), but the result was incorrectly recorded -- suggesting the gate itself is not the problem, the result-recording process is.

---

### R-02: Component Adoption Regression
**Recurrence count:** 3 runs
**History:**
- Run C / gas-town-steve-yegge (02-20): 18 component types deployed
- Run B / gas-town-va-pipeline (02-23): 19-20 mechanisms (component count not separately tracked)
- Run A / V3-Yegge (02-24): exact count unclear (PA notes varied)
- Current run (02-25): 5-6 component types vs 8+ target

**Why the fix never sticks:** The brief says "Target 8+ components" -- a judgment target, not a binary gate. The builder reads it, then builds custom CSS for elements (principle cards, bento grids) that COULD have used library classes. The target competes with the builder's creative impulse to write original CSS. Run C achieved 18 types using a DIFFERENT pipeline version with LESS spec -- suggesting that more spec does not produce more component adoption.

**Classification:** STRUCTURAL -- the pipeline has no enforcement mechanism. The brief template contains the instruction; the builder ignores it. The proposed fix (A-05: force builder to declare component selection in an HTML comment before building) is the first attempt at structural prevention rather than verbal instruction.

**Key insight:** Run C achieved 3x the component adoption with LESS spec. The regression correlates with pipeline complexity, not spec absence.

---

### R-03: Gate Coverage Gaps
**Recurrence count:** 3+ runs
**History:**
- Run B (02-23): 23/31 gates executed (8 gaps)
- Run A (02-24): 23/31 gates executed (8 gaps) -- IDENTICAL gap count
- Current run (02-25): 30/42 gates executed initial, 25/42 refine (12 gaps)

**Why the fix never sticks:** GR-48 (the meta-gate that checks coverage) has NEVER been executed in ANY run. The self-verification mechanism is itself unverified. Gate results are fragmented across 4+ locations (JSON, tracker, orchestrator notes, refine notes), making aggregation structurally impossible for GR-48. Each pipeline version ADDS gates without ensuring existing ones run.

**Classification:** ARCHITECTURAL -- the gate system lacks a single source of truth. Results split across files means no single function can verify completeness. Fix B-01 (unify gate results into single JSON) addresses the root cause for the first time.

**Trajectory:** Gate count is INCREASING (31 -> 31 -> 42) while coverage percentage is FLAT (74% -> 74% -> 71%). The pipeline is accumulating gates faster than it executes them.

---

### R-04: Gate False Positives
**Recurrence count:** 2+ runs (accelerating)
**History:**
- Run A (02-24): GR-14 and GR-15 false positives noted
- Current run (02-25): GR-11 (non-adjacent pairs), GR-15 (auto centering), GR-14 (nested sections), GR-19 (boundary divs) -- FOUR gates now produce known false positives

**Why the fix never sticks:** No false-positive fix has been applied between runs. The fixes are PROPOSED in each retrospective but never implemented before the next run. Each run adds new false positives (GR-11 all-pairs bug is new this run) while carrying forward old ones.

**Classification:** DEBT ACCUMULATION -- fixes are documented but not applied between runs. The proposed exception patterns in gate manifest (B-14) would address this systematically, but it requires implementation time between runs that has not been allocated.

**Trajectory:** False positives are GROWING. 2 in Run A, 4 in current run. Each false positive consumes orchestrator attention budget and erodes gate credibility.

---

### R-05: Information Loss at Brief Assembly
**Recurrence count:** 2+ runs (specific items recur)
**History:**
- Flagship experiment (02-17): 91.2% compression loss from research to prompt, 75-line builder visibility cap, hover behavior absent
- Current run (02-25): Hover Step 2.7 COMPLETELY LOST, signal declarations Step 3.4c COMPLETELY LOST, value table spacing progressions PROBABLY LOST
- Across ALL runs: the brief template has never included hover behavior placeholders

**Why the fix never sticks:** The brief template (artifact-tc-brief-template.md) has no SLOT for hover behavior or signal declarations. The Brief Assembler can only propagate what the template prompts for. Fix A-01 (add hover vocabulary section) has been proposed but never applied. This is the same root cause as the Flagship failure -- the template gap was identified in the Flagship retrospective (02-17) and persists 8 days later through 4 additional runs.

**Classification:** TEMPLATE GAP -- a structural omission in the brief template that no amount of recipe improvement can overcome. The information exists upstream (recipe Step 2.7) but has no downstream slot.

**Key stat:** Hover behavior has been COMPLETELY ABSENT from every pipeline build. Run C, Run B, Run A, Current -- zero hover vocabulary in any brief. This is a 100% recurrence rate.

---

### R-06: Tracker L2/L3 Incompleteness
**Recurrence count:** 2 runs (but only 2 runs have used the hierarchical tracker)
**History:**
- Run A (02-24): flat tracker, basic completeness
- Current run (02-25): hierarchical tracker, L0 claims 100% while L2 shows ~40% for Phases 0-2, L3 agent details ALL blank for builder (most important agent)

**Why the fix never sticks:** The tracker is designed for VERIFICATION but the orchestrator treats it as a REPORTING tool. Filling L2 checkboxes and L3 agent details requires the orchestrator to pause mid-pipeline execution -- competing with forward momentum. The proposed fix (D-01: derive L0 from L2) would prevent the "two-story" problem but does not solve the underlying tension between execution speed and documentation completeness.

**Classification:** INCENTIVE MISALIGNMENT -- the orchestrator optimizes for pipeline completion, not tracker accuracy. Structural prevention (auto-derivation) is the only viable fix.

---

### R-07: Hand-Constructed Gate Results
**Recurrence count:** First identified this run, but evidence suggests it occurred in previous runs
**History:**
- Current run (02-25): at least 3 gates (GR-05, GR-08, GR-15) have JSON results inconsistent with what the code would produce. GR-50 used for multi-coherence despite being coded as Conviction Statement.
- Run A (02-24): possible but not investigated at this granularity

**Why this matters:** If gate results can be editorially constructed by the orchestrator, the entire programmatic verification system is undermined. A gate result with `status: PASS` could be the orchestrator's opinion, not code output. Fix B-03 (add `source: 'code' | 'manual' | 'skip'` field) addresses this for the first time.

**Classification:** INTEGRITY -- the most fundamental trust assumption of the gate system (results are programmatic) is violated.

---

### R-08: DPR-Related Measurement Issues
**Recurrence count:** 2 runs
**History:**
- Run A (02-24): DPR 0.75 caused screenshot corruption, 8 corrected screenshots needed
- Current run (02-25): DPR 0.667, workaround applied early (960x600 physical = 1440x900 CSS), screenshots clean but 5-6 gates produce potentially unreliable results

**Why the fix only partially sticks:** The DPR WORKAROUND for screenshots was applied (learned from Run A) and WORKED. But the DPR correction was NOT applied before gate execution. The workaround addressed the most visible symptom (blank screenshots) but not the systemic cause (all spatial measurements are DPR-affected).

**Classification:** PARTIAL FIX -- symptom addressed, root cause persists. The gate runner already has `checkDPR()` code (lines 1483-1510) but the orchestrator does not invoke it before gate execution.

---

## 2. Fixes That Stuck

### S-01: Container Width 940-960px
**Fix applied:** After Phase D (4/5 pages violated it)
**Durability:** 3 consecutive runs with correct container width
**Why it stuck:** Container width became a binary gate (GR-03) AND a D-09 disposition AND a brief template requirement AND an identity rule. FOUR layers of enforcement. The fix was applied at every level -- spec, gate, brief, identity. This is the model for durable fixes.

### S-02: Recipe Format (vs Checklist)
**Fix applied:** After Flagship dissection (02-17) identified 7.9:1 guardrail-to-playbook ratio
**Durability:** Current run's brief has 1:15 ratio (inverted from flagship failure)
**Why it stuck:** The brief template was restructured to enforce recipe format. BV-03 gate checks verb ratio (>=3:1 recipe verbs). The fix was ARCHITECTURAL (template structure) + ENFORCED (binary gate).

### S-03: Compression Architecture (Two-Stage)
**Fix applied:** Pipeline v3 design
**Durability:** All v3 runs show healthy 18.9:1 compression + brief expansion
**Why it stuck:** The two-stage architecture (compress source to content map, then EXPAND into brief with compositional layers) is a STRUCTURAL property of the pipeline, not a rule agents must follow. The content analyst and brief assembler work in sequence by design. No agent can bypass the architecture.

### S-04: DPR Screenshot Workaround
**Fix applied:** After Run A (02-24) screenshot corruption
**Durability:** 1 run (current)
**Why it stuck (so far):** The pain was catastrophic (Run A needed 3 sessions, ~6h total). The fix was concrete and mechanical (set viewport to 960x600). Easy to remember, easy to apply, zero judgment required.

### S-05: Mode 4 PA Protocol (9 Auditors)
**Fix applied:** After ceiling experiment standalone PA showed Mode 4 catches what 2-PA misses
**Durability:** 3 runs with full 9-auditor deployment
**Why it stuck:** It is the DEFAULT behavior specified in pa-deployment.md. The orchestrator follows the spec without needing to make a judgment call. Any deviation from 9 auditors requires active decision to REDUCE, which the spec discourages.

### Pattern: What Makes Fixes Durable

| Durability Factor | Fixes That Stuck | Fixes That Recur |
|---|---|---|
| Binary gate enforcement | Container width, recipe format | Border widths (gate exists but DPR confounds it) |
| Architectural prevention | Compression, PA deployment | Gate coverage (architecture PREVENTS aggregation) |
| Template structure | Recipe format in brief | Hover behavior (NO template slot) |
| Multi-layer redundancy | Container width (4 layers) | Component adoption (1 layer: prose target) |
| Concrete mechanical steps | DPR workaround | Tracker L2 fill (requires sustained attention) |

**The pattern is unambiguous: fixes stick when they are STRUCTURAL (architecture, template, binary gate) and fail when they are INSTRUCTIONAL (prose target, judgment rule, verbal constraint).**

---

## 3. Quality Trajectory Assessment

### PA-05 Scores Over Time (Chronological)

| Run | Date | Pipeline | PA-05 (Initial) | PA-05 (Final) | Tier 5 |
|-----|------|----------|-----------------|---------------|--------|
| Middle-tier experiment | 02-16 | Pre-v3 (flat, 100-line recipe) | N/A | 4/4 DESIGNED | N/A |
| Flagship experiment | 02-17 | 530-line master prompt | N/A | 1.5/4 | N/A |
| Flagship remediation | 02-18 | CSS-only remediation | N/A | 2.5/4 | N/A |
| Run C (v2-era) | 02-20 | Pipeline v2 | N/A | 3.5/4 | 6.5/9 |
| Run B (v3-pre) | 02-23 | Pipeline v3 pre-wave3 | N/A | 3/4 | N/A |
| Run A (v3-wave3) | 02-24 | Pipeline v3 wave 3 | ~2.0/4 | 3/4 | 9/9 |
| Current run | 02-25 | Pipeline v3 + hierarchical tracker | 2.0/4 | 3.5/4 | 9/9 |

**Observations:**

1. **The Middle-tier experiment (4/4) remains the highest PA-05 score ever achieved.** It used a 100-line recipe, 8 agents, and ~35 min. Every subsequent run with MORE spec has scored LOWER.

2. **The Flagship experiment (1.5/4) is the lowest score.** It used the most spec (530 lines, ~248 constraint lines).

3. **The current run matches Run C (3.5/4) but with 42 gates vs 25, 18 artifacts vs ~10, and ~450 more lines of spec.** The output quality is the same; the infrastructure is 2-3x larger.

4. **REFINE is the only consistently positive quality intervention.** Run A: +~1.0. Current: +1.5. The initial build quality has NOT improved across v3 runs (consistently 2.0-2.5/4). What improves is the REFINE cycle's effectiveness.

### Gate Coverage Over Time

| Run | Gates in Manifest | Gates Executed | Coverage % |
|-----|-------------------|---------------|------------|
| Run B | 31 | 23 | 74% |
| Run A | 31 | 23 | 74% |
| Current | 42 | 30 | 71% |

**Gate count +35%, coverage -3%.** The pipeline is adding gates faster than it executes them. GR-48 (the meta-gate) has a 100% absence rate across all runs.

### Information Loss Over Time

| Run | Documented Complete Losses | Key Losses |
|-----|---------------------------|------------|
| Flagship | 3+ (compression, routing, builder visibility) | Entire compositional intelligence layer |
| Current | 2 COMPLETE + 2 PROBABLE | Hover behavior, signal declarations, value table progressions |

Losses are FEWER and LESS catastrophic. The flagship lost the entire compositional layer (91.2% compression). The current run lost specific recipe steps. This is genuine improvement -- the two-stage compression architecture works. But hover behavior has been lost in EVERY run, showing that some losses are permanent until the template is fixed.

### Spec Accumulation vs Quality Improvement

| Metric | Middle (02-16) | Flagship (02-17) | Current (02-25) |
|--------|---------------|-------------------|-----------------|
| Master prompt lines | ~100 | ~530 | ~542 + 18 artifacts |
| Gate count | 0 | 6 | 42 |
| PA-05 result | 4/4 | 1.5/4 | 3.5/4 |
| Total pipeline artifacts | ~3 files | ~15 files | ~18 files |
| Agents per run | 8 | 19 | 30 |
| Run time | ~35 min | ~4h | ~3h 20m |

**The pipeline has 5x the spec, 7x the gates, 4x the agents, and 6x the runtime of the Middle-tier experiment -- and produces a LOWER PA-05 score.**

---

## 4. The Middle-Tier Paradox

The Middle-tier experiment succeeded with:
- A 100-line recipe (not a 542-line prompt)
- 0 gates (not 42)
- 8 agents (not 30)
- ~35 min (not ~3h 20m)
- FLAT file-bus topology
- Zero inter-agent messaging
- PA-05 4/4, 3/3 STRONGLY NOVEL

What the Middle-tier had that later runs lack:

1. **A RECIPE, not a specification.** "Read/Select/Deploy/Assess" verbs. Sequenced steps. Specific CSS values. The builder knew WHAT to do and in WHAT ORDER. Later runs gave builders specifications (what must be true) rather than recipes (what to do in sequence).

2. **Content-mechanism fit.** The Middle-tier content was well-suited to the 12 mechanisms deployed. No one FORCED the builder to use mechanisms that didn't fit. Later runs specify per-category minimums that can conflict with content.

3. **Attention budget alignment.** 100 lines fit entirely in the builder's working memory. The builder could hold the ENTIRE spec while writing CSS. Current runs give builders ~3,100 lines of input -- far beyond any agent's working memory capacity.

4. **No gate-gaming.** With 0 gates, the builder optimized for the PAGE, not for PASSING GATES. Current builders may allocate CSS budget toward gate compliance (integer borders, specific margin values) rather than perceptual quality.

5. **Fresh context.** The Middle builder had NO knowledge of previous failures, retrospectives, or pipeline complexity. It approached the task as "build a beautiful page from this recipe." Current builders inherit the weight of the entire pipeline's history through the spec.

**The uncomfortable conclusion:** The pipeline's quality ceiling may be INVERSELY correlated with its spec complexity. More spec produces more compliance but less creativity. The Middle-tier experiment is not an outlier -- it is evidence that the fundamental approach (specify more -> get better) may be wrong.

---

## 5. Are We Solving the Right Problems?

### Problems We Are Solving

1. **Compression architecture** -- SOLVED. Two-stage compress-then-expand prevents catastrophic loss. Durable.
2. **Container width** -- SOLVED. Multi-layer enforcement works. Durable.
3. **Recipe vs Checklist format** -- SOLVED. Template structure + BV gate. Durable.
4. **Screenshot corruption** -- SOLVED. DPR workaround. Mechanical. Durable.
5. **PA protocol** -- SOLVED. 9-auditor deployment is default behavior. Durable.

### Problems We Keep Proposing Fixes For But Never Applying

1. **Hover behavior template slot** -- proposed in Flagship retrospective (02-17), Flagship dissection (02-17), MEMORY.md, and now current retrospective. 8 days, 4 runs, 0 applications.
2. **Gate false-positive fixes** -- proposed in Run A, proposed again in current run. 0 applications.
3. **GR-48 enforcement** -- proposed in every run since gates existed. 0 applications.
4. **Border width recipe format** -- proposed in multiple retrospectives. 0 applications.
5. **Tracker L2 enforcement** -- proposed in current run. First run with hierarchical tracker, so expected.

### Problems We May Be Creating

1. **Gate accumulation without execution.** 42 gates at 71% coverage means 12 gates exist that do nothing except increase the manifest's apparent rigor. These gates create a false sense of verification.

2. **Spec complexity as quality drag.** The builder's attention budget is finite. Each additional line of spec competes for cognitive bandwidth. The 3,100-line builder input may be past the point of diminishing returns.

3. **Retrospective infrastructure.** Each run produces 10+ retrospective files, 35+ checklist items, and ~15,000+ lines of analysis. The current run's retrospective is 10 files. The Flagship retrospective was 9 files. The pipeline analysis corpus is 41 files (~1.7MB). At the current rate, retrospective output is growing faster than pipeline improvement.

4. **False precision.** The pipeline now measures PA-05 to 0.5 precision, Tier 5 to 1/9 precision, emotional registers to 1/10 precision, and compression ratios to 0.1. This precision suggests a level of measurement reliability that does not exist -- PA-05 scores vary by auditor, emotional registers are subjective, and compression ratios depend on what you count.

### The Meta-to-Output Ratio Check

From MEMORY.md: "if meta-output exceeds 20:1, pipeline is feeding on itself."

Current run:
- Pipeline output: 1 HTML file (~2,931 lines), 1 execution tracker (~638 lines) = ~3,569 lines
- Retrospective output: 10 analysis files + master checklist + 8 flagship analysis files = ~18 files, estimated ~8,000-12,000 lines
- Crack analysis output: 6+ files (this team's work)
- Total meta: ~15,000-20,000 lines

**Meta-to-output ratio: approximately 4:1 to 6:1.** Below the 20:1 alarm threshold, but climbing. The Flagship experiment hit 660:1 (pathological). The pipeline has improved, but the trend is toward more meta per run, not less.

---

## 6. Honest Assessment

### What Is Genuinely Improving

1. **Compression architecture prevents catastrophic loss.** The Flagship's 91.2% compression loss cannot recur in the current architecture. This is the pipeline's most important structural achievement.

2. **REFINE is a proven quality mechanism.** The two-instance pattern (fresh builder + artistic impression) consistently produces the largest single-cycle quality improvements. This is durable and reliable.

3. **PA protocol is mature.** 9 auditors, fresh-eyes, experiential passes, cross-validation -- the evaluation subsystem is the pipeline's strongest component.

4. **Container width and recipe format are permanently fixed.** Multi-layer enforcement works when applied.

### What Is Not Improving

1. **Initial build quality is flat.** PA-05 initial scores: ~2.0 (Run A), 2.0 (current). The pipeline adds spec and the initial build quality does not improve. ALL improvement comes from REFINE.

2. **Gate coverage is declining as a percentage.** More gates, same coverage, no GR-48.

3. **Information losses recur.** Hover behavior has been absent from EVERY run. The fix is known. It has not been applied.

4. **Component adoption is regressing.** 18 types (Run C) -> 5-6 types (current). More spec, fewer components.

### The Central Tension

The pipeline faces a fundamental tension: **MORE SPECIFICATION does not produce MORE QUALITY at the builder level.** The evidence:

- Middle-tier (100 lines spec) -> PA-05 4/4
- Flagship (530 lines spec) -> PA-05 1.5/4
- Current (542+ lines spec, 18 artifacts) -> PA-05 2.0/4 initial, 3.5/4 after REFINE

The REFINE cycle succeeds precisely because it gives the builder LESS: existing HTML + 33 lines artistic impression + 6 generative instructions. The initial build fails (relatively) because it gives the builder TOO MUCH: 3,100 lines of input that exceed working memory.

**The pipeline is optimizing the wrong stage.** It keeps enriching the initial specification (which has diminishing returns) instead of enriching the REFINE protocol (which has increasing returns). The highest-leverage change would be:

1. SIMPLIFY the initial build spec (closer to Middle-tier's 100 lines)
2. ACCEPT a 2.0-2.5 initial PA-05
3. INVEST in a more sophisticated REFINE protocol (perhaps multi-cycle: structural REFINE + micro-refinement REFINE)
4. Let the REFINE cycle's proven effectiveness do the quality lifting

### The Question No One Is Asking

Every retrospective asks "what went wrong and how do we prevent it?" The question that would change trajectory is: **"What went right in the Middle-tier experiment and how do we reproduce it at higher tiers?"**

The Middle-tier experiment's 4/4 score with minimal spec suggests the builder's NATIVE capability is higher than the pipeline assumes. The pipeline may be suppressing builder quality through over-specification rather than enabling it through infrastructure.

This does not mean "delete all spec." Container width enforcement works. Recipe format works. Two-stage compression works. But it means the incremental value of each additional spec line is NEGATIVE past a threshold that the pipeline crossed somewhere between 100 lines (Middle) and 530 lines (Flagship).

---

## 7. Recurrence Summary Table

| Problem | Runs Affected | Fix Status | Root Cause | Durability Prediction |
|---------|-------------|------------|------------|----------------------|
| Non-integer borders | 4+ | Proposed (recipe format + DPR correction) | DPR + prose constraint | MEDIUM -- DPR fix is mechanical, recipe format helps |
| Component adoption regression | 3 | Proposed (declaration + gate) | Prose target vs creative impulse | LOW -- gate helps but doesn't solve builder attention |
| Gate coverage gaps | 3+ | Proposed (unified JSON + GR-48) | Fragmented results storage | HIGH -- architectural fix addresses root cause |
| Gate false positives | 2+ (accelerating) | Proposed (exceptions in manifest) | No implementation between runs | MEDIUM -- fix is clear but requires implementation time |
| Hover behavior absence | ALL runs | Proposed 8+ days ago, never applied | Brief template has no slot | HIGH if applied -- template structural fix |
| Tracker L2/L3 gaps | 2 | Proposed (derive L0 from L2) | Incentive misalignment | MEDIUM -- structural but still requires orchestrator effort |
| Hand-constructed gate results | 1+ (first discovered) | Proposed (source field) | No provenance tracking | HIGH if applied -- binary enforcement |
| DPR measurement issues | 2 | Partial (screenshots fixed, gates not) | DPR correction not applied before gates | HIGH -- mechanical fix, code already exists |

---

## 8. Recommendations

### Stop Doing
1. **Stop adding gates without ensuring existing gates run.** 42 gates at 71% coverage is worse than 30 gates at 95% coverage. Fix coverage before adding GR-65/66/67/68.
2. **Stop writing retrospective items that never get implemented.** Hover behavior has been proposed in 4+ retrospectives. Either implement it or acknowledge it is not a priority.
3. **Stop measuring false precision.** PA-05 3.5 vs 3.0 is within noise. Focus on the categorical question (CEILING vs FLAGSHIP) not the decimal.

### Start Doing
1. **Implement the top 3 fixes BEFORE the next run.** Hover template slot (A-01), unified gate JSON (B-01), GR-48 enforcement. 30 minutes of implementation, not 30 more lines of analysis.
2. **Run an experiment: Middle-tier-style 100-line recipe on Flagship-tier content.** This would test whether the Middle-tier's success was content-dependent or spec-dependent. Cheapest test: 4-10 hours, resolves the central question.
3. **Invest in REFINE protocol rather than initial spec.** Multi-cycle REFINE, pre-vision artistic impression, two-pass initial build -- these all leverage the PROVEN quality mechanism.
4. **Track fixes between runs with a persistent checklist.** Not a retrospective -- a pre-flight checklist of "proposed fixes from previous runs that have been APPLIED vs NOT APPLIED." Make the implementation gap visible.

### Highest-Leverage Single Change

**Apply the 3 fixes that have been proposed for 8+ days and never implemented: hover template slot, unified gate JSON, GR-48 enforcement.** These would address R-05 (hover behavior, 100% recurrence), R-03 (gate coverage), and R-07 (result integrity). Estimated effort: ~50 lines across 3 files, ~1 hour. The pipeline has spent orders of magnitude more time ANALYZING these gaps than it would take to FIX them.

---

*Analysis complete. 2026-02-25.*
