# Report 10: Controlled Experiment Protocol for Pipeline v3

**Author:** experiment-designer (Opus 4.6)
**Date:** 2026-02-22
**Task:** Design a rigorous experiment protocol to test whether the new pipeline produces better output and whether Flagship 4/4 is achievable.

**Sources:**
- Report 52: Adversarial Quality Gap Analysis (Gas Town vs Flagship 4/4)
- Report 59: Suppressor Archaeology (20 suppressors, 7 chains, minimal constraint set)
- Report 42 (synthesis-alchemy): How 34 agents produced the 578-line prompt
- Q20 Experiment Protocol: Cheapest test of perception thresholds in isolation
- Report 54: CD-006 Deficit Analysis (why 39/40 is not Flagship)

---

## EXECUTIVE SUMMARY

We have N=4 data points with 4+ confounded variables. We cannot analytically resolve what causes quality. We need experiments. This protocol designs a staged experiment program -- from a 1-run smoke test (2-3 hours) through a full factorial matrix (30-40 hours) -- that progressively isolates the causal variables.

**The critical question is not "does the new pipeline work?" but THREE questions:**
1. Does the new pipeline produce BETTER output than the old one? (Comparative)
2. WHICH specific changes cause the improvement? (Causal isolation)
3. Is Flagship 4/4 achievable at all, or is it a theoretical construct? (Existence proof)

These require different experiments. This protocol designs all three.

---

## PART 1: THE CURRENT EVIDENCE BASE

### What We Know (N=4)

| Run | PA-05 | Model | Format | Content | Topology | Prompt Lines | Key Feature |
|-----|-------|-------|--------|---------|----------|-------------|-------------|
| Middle | 4/4 DESIGNED | Sonnet builder | Recipe (100 lines) | Custom extraction | 8 agents, flat | ~100 | Recipe format, few constraints |
| Flagship | 1.5/4 DEFICIENT | Sonnet builder | Checklist (963 lines) | RESEARCH-SYNTHESIS | 19 agents, hierarchical | 963 | Prohibition overload, zero thresholds |
| Remediation | 2.5/4 COMPOSED | Opus builder | Recipe (1,025 lines) | Same as Flagship | 16+ agents | 1,025 | CSS-only repair, thresholds added |
| Gas Town | 3.5/4 CEILING | Opus builder | Hybrid (578 lines) | Yegge extraction | 12 agents | 578 | Full master execution prompt |

### The 4 Confounded Variables

From the contrarian's analysis, the N=4 dataset confounds:

| Variable | Middle (4/4) | Flagship (1.5/4) | Remediation (2.5/4) | Gas Town (3.5/4) |
|----------|-------------|-------------------|---------------------|------------------|
| **V1: Builder Model** | Sonnet | Sonnet | Opus | Opus |
| **V2: Prompt Format** | Recipe | Checklist | Recipe (repair) | Hybrid recipe |
| **V3: Content** | Custom extraction | RESEARCH-SYNTHESIS | RESEARCH-SYNTHESIS | Yegge extraction |
| **V4: Prompt Volume** | ~100 lines | 963 lines | 1,025 lines | 578 lines |

Additional confounds not in the original 4:
- **V5: Task Framing** — compose-from-scratch (Middle, Gas Town) vs repair-existing (Remediation)
- **V6: Suppressor Load** — ~5 suppressors (Middle) vs 14+ (Flagship) vs ~8 (Gas Town)
- **V7: Perception Thresholds** — absent (Middle, Flagship) vs present (Remediation, Gas Town)

### What We Cannot Determine Analytically

No comparison pair isolates a single variable:
- Middle vs Flagship: V2 (recipe vs checklist) + V4 (100 vs 963 lines) + V3 (content) + V6 (suppressor load)
- Flagship vs Remediation: V1 (Sonnet vs Opus) + V2 (checklist vs recipe) + V5 (compose vs repair) + V7 (no thresholds vs thresholds)
- Remediation vs Gas Town: V3 (content) + V4 (1,025 vs 578 lines) + V5 (repair vs compose) + V6 (suppressor load)

Every comparison involves 3+ variable changes. Causal attribution is impossible without controlled experiments.

---

## PART 2: EXPERIMENT DESIGN PRINCIPLES

### Principle 1: Hold Content Constant
Use the SAME content for all experimental runs within a comparison pair. Content variation is the cheapest variable to control and the hardest to reason about post-hoc.

**Selected content:** Steve Yegge "Gas Town" extraction (`ephemeral/pages/gas-town-steve-yegge/` source files). Rationale: we have a PA-05 3.5/4 baseline with this content, so we can detect both improvement AND regression.

**Secondary content (for generalizability):** RESEARCH-SYNTHESIS.md. We have PA-05 1.5/4 (Flagship) and 2.5/4 (Remediation) baselines with this content.

### Principle 2: One Variable Per Comparison
Each experimental comparison changes exactly ONE variable. The variable must be clearly defined and the change must be minimal.

### Principle 3: Cheapest First
Run the experiment that gives maximum information for minimum cost FIRST. If it resolves the question, stop. If it doesn't, the result informs the next experiment.

### Principle 4: Blind Evaluation
PA auditors receive screenshots only. No condition labels. No hypothesis description. No awareness that an experiment is occurring.

### Principle 5: Pre-Register Success Criteria
Define what constitutes success, failure, and inconclusive results BEFORE running each experiment. No post-hoc rationalization.

---

## PART 3: THE EXPERIMENT MATRIX

### 3.1 The Full Factorial (For Reference -- NOT Recommended to Run All)

| Exp | Variable Isolated | Baseline | Treatment | Content | Expected Info Gain |
|-----|-------------------|----------|-----------|---------|-------------------|
| E1 | Perception thresholds | Old prompt, no thresholds | Old prompt + thresholds only | RESEARCH-SYNTHESIS | HIGH -- tests Q20 hypothesis |
| E2 | Prompt format | Old prompt (checklist) | Same rules, recipe format | RESEARCH-SYNTHESIS | HIGH -- tests recipe thesis |
| E3 | Builder model | Pipeline v3, Sonnet builder | Pipeline v3, Opus builder | Gas Town content | MEDIUM -- tests model contribution |
| E4 | Suppressor removal | Old prompt (14 suppressors) | 73-line minimal set | Gas Town content | HIGH -- tests suppressor thesis |
| E5 | Pipeline v3 vs old | Old master prompt (963 lines) | Pipeline v3 (~100-150 lines) | Gas Town content | HIGH -- the main test |
| E6 | Pipeline v3 vs old | Old master prompt | Pipeline v3 | RESEARCH-SYNTHESIS | HIGH -- generalizability |
| E7 | Content variation | Pipeline v3, Gas Town content | Pipeline v3, RESEARCH-SYNTHESIS | Both | MEDIUM -- content sensitivity |
| E8 | Compositional scaffolding | 73-line minimal set (soul + thresholds) | 73 lines + multi-coherence framework | Gas Town content | MEDIUM -- tests positive scaffolding |
| E9 | Flagship existence | Pipeline v3 with maximum scaffolding | Best possible prompt, Opus builder | Gas Town content | HIGH -- existence proof |

**Full matrix: 9 experiments x 2 runs each = 18 runs. At ~2-3 hours per run = 36-54 hours.**

This is too expensive. We need a staged approach.

### 3.2 The Staged Approach (RECOMMENDED)

#### Stage 0: Smoke Test (1 run, 2-3 hours)
**Purpose:** Does the new pipeline produce anything? Catch catastrophic failures before investing in controlled comparisons.

**What:** Run Pipeline v3 with Gas Town content, Opus builder. One build. No control needed.

**Success criteria:** Build completes without error. Output is a valid HTML page. Basic programmatic gates pass (container width, soul compliance). PA-05 >= 2.0/4 (above the old Flagship's failure). If < 2.0, the pipeline has a structural problem -- debug before proceeding.

**Cost:** 1 build (~2-3 hours) + 1 PA round (9 auditors, ~30 min) = ~3 hours.

**Decision gate:**
- PA-05 >= 3.0 → Skip to Stage 2 (the pipeline is already competitive)
- PA-05 2.0-2.9 → Proceed to Stage 1 (pipeline works but needs comparison data)
- PA-05 < 2.0 → STOP. Debug the pipeline. Do not proceed to controlled experiments.

#### Stage 1: The Q20 Shortcut (2 runs, 4-6 hours)
**Purpose:** Test the cheapest single-variable intervention: adding ONLY perception thresholds to the original Flagship prompt.

**What:** Exactly the Q20 protocol from the existing document. Run the original 963-line Flagship prompt unmodified (Control A), then run it with the 25-line perception threshold appendix added to the builder prompt (Treatment B). Same content (RESEARCH-SYNTHESIS), same topology, same everything except the threshold appendix.

**Why this is Stage 1:** If thresholds alone jump PA-05 from 1.5 to 2.5+, that tells us perception thresholds are the dominant causal variable. If thresholds have minimal effect, format/suppressor-removal are the real drivers. Either outcome radically simplifies the remaining experiments.

**Success criteria (pre-registered):**

| Control PA-05 | Treatment PA-05 | Interpretation | Next Action |
|--------------|-----------------|----------------|-------------|
| ~1.5 | >= 2.5 | Thresholds SUFFICIENT as standalone intervention | Pipeline v3 validated on thresholds. Test format next. |
| ~1.5 | 2.0-2.4 | Thresholds HELP but don't close the gap | Both thresholds AND format matter. Proceed to Stage 2. |
| ~1.5 | ~1.5 (and sub-perceptual CSS % unchanged) | Thresholds IGNORED -- format blocks their uptake | Format is causally prior. Thresholds only work in recipe context. |
| ~1.5 | ~1.5 (but sub-perceptual CSS % dropped) | Thresholds ENFORCED but quality unchanged | Perception is necessary but not sufficient. Composition/format is the real driver. |
| >= 2.0 | Any | Control doesn't reproduce original failure | Experiment invalid. LLM stochasticity is high. Need more runs. |

**Cost:** 2 builds (~4-5 hours) + 2 PA rounds (18 auditors) + analysis = ~6 hours.

**CRITICAL NOTE:** The Q20 protocol document specifies everything needed -- exact prompt text, gate structure, PA assignments, confound controls. Use it verbatim.

#### Stage 2: Pipeline v3 Head-to-Head (2-4 runs, 6-10 hours)
**Purpose:** Direct comparison of old pipeline vs new pipeline on the same content.

**Design:**

| Run | Prompt | Content | Builder | Topology |
|-----|--------|---------|---------|----------|
| 2A | Old Flagship prompt (963 lines) | Gas Town extraction | Opus | Flat (12 agents) |
| 2B | Pipeline v3 (~100-150 lines) | Gas Town extraction | Opus | Flat (12 agents) |
| 2C | Old Flagship prompt | RESEARCH-SYNTHESIS | Opus | Flat (12 agents) |
| 2D | Pipeline v3 | RESEARCH-SYNTHESIS | Opus | Flat (12 agents) |

**Variables held constant:** Builder model (Opus), topology (flat, 12 agents), evaluation protocol (Mode 4 PA, blind).

**Variable changed:** ONLY the prompt (old vs new pipeline).

**Why 4 runs not 2:** Two content types test GENERALIZABILITY. If Pipeline v3 wins on Gas Town but loses on RESEARCH-SYNTHESIS, the improvement is content-specific. If it wins on both, the improvement is prompt-driven.

**Note on 2A:** This is the old Flagship prompt applied to Gas Town content (a combination never tested). If the old prompt produces PA-05 >= 3.0 on Gas Town content, that tells us the old prompt's failure was content-specific, not prompt-specific. This would be a critical finding.

**Success criteria (pre-registered):**

| 2A vs 2B | 2C vs 2D | Interpretation |
|----------|----------|----------------|
| 2B > 2A by >= 0.5 AND 2D > 2C by >= 0.5 | Both | Pipeline v3 is BETTER across content types. Ship it. |
| 2B > 2A by >= 0.5, 2D ~= 2C | Mixed | Pipeline v3 helps some content but not all. Investigate content sensitivity. |
| 2B ~= 2A, 2D > 2C by >= 0.5 | Mixed | Old prompt was fine for Gas Town; Pipeline v3 rescues hard content. |
| 2B ~= 2A, 2D ~= 2C | Neither | Pipeline v3 is NOT better. Review pipeline design. |
| 2B < 2A or 2D < 2C by >= 0.5 | Regression | Pipeline v3 is WORSE. Stop and diagnose. |

**Cost:** 4 builds (~8-10 hours) + 4 PA rounds (36 auditors) = ~12 hours.

#### Stage 3: Variable Isolation (4-6 runs, 10-15 hours)
**Purpose:** Isolate which specific changes in Pipeline v3 cause the improvement (if any).

**Design:** Start from the old Flagship prompt and apply ONE change at a time:

| Run | Change Applied | What It Tests |
|-----|---------------|---------------|
| 3A | Old prompt + perception thresholds (= Q20 Treatment from Stage 1) | Threshold contribution in isolation |
| 3B | Old prompt reformatted as recipe (same rules, recipe order) | Format contribution in isolation |
| 3C | Old prompt with prohibitions capped at 15 (reduced suppressor load) | Suppressor-removal contribution |
| 3D | 73-line minimal set (soul + thresholds + framework) | Report 59's suppressor-free hypothesis |
| 3E | 73-line minimal set + multi-coherence framework | Positive scaffolding contribution |
| 3F | Pipeline v3 full prompt | The complete new pipeline |

**Content:** Gas Town extraction for all runs. Builder: Opus for all. Topology: flat, 12 agents.

**This is a dose-response curve:** Each run adds one more intervention. The PA-05 score at each dose level tells us the marginal contribution of each change.

**Success criteria:**

If the scores show a monotonic increase (3A < 3B < 3C < 3D < 3E < 3F), every change contributes. If any step shows zero improvement, that intervention is unnecessary. If there's a large jump at one step and small jumps elsewhere, that step is the dominant intervention.

**Cost:** 6 builds (~12-15 hours) + 6 PA rounds (54 auditors) = ~18 hours.

#### Stage 4: Flagship Existence Proof (1-2 runs, 3-5 hours)
**Purpose:** Can ANY configuration produce PA-05 4/4 with Tier 5 >= 6/8?

**Design:** Maximum-investment single build:
- Pipeline v3 with all scaffolding
- Opus builder with explicit "80% creative authority" and structural metaphor instruction
- Content: Gas Town extraction (richest available content)
- Single builder agent, compose-from-scratch (no multi-pass fragmentation)
- CRITICAL ADDITION: worked example of structural metaphor (10-15 lines showing how a metaphor maps to CSS parameters) + worked example of multi-coherence (10-15 lines showing 3 channels encoding one concept)
- Post-build: NO fix cycle. The artifact stands as-is. Fix cycles trigger repair mode (S-11).

**Evaluation:** Full Mode 4 PA (9 auditors, 48 questions) PLUS Tier 5 questions (PA-60 through PA-68). Blind.

**Success criteria:**
- PA-05 >= 4/4 AND Tier 5 >= 6/8 → Flagship EXISTS. It is achievable. Pipeline v3 reaches it.
- PA-05 3.5/4 AND Tier 5 >= 5/8 → Near-Flagship. One more iteration of pipeline refinement needed.
- PA-05 3.0-3.4/4 → CEILING confirmed as the practical limit. Flagship 4/4 may require human iteration.
- PA-05 < 3.0/4 → Something is deeply wrong with the maximum-investment build. Investigate.

**Cost:** 1-2 builds (~3-5 hours) + 1-2 PA rounds (9-18 auditors) = ~5 hours.

---

## PART 4: METRICS

### Primary Metric: PA-05 Score
"Does this feel DESIGNED?" Scale: 1/4 DEFICIENT, 2/4 FUNCTIONAL, 3/4 COMPOSED, 4/4 DESIGNED.

Evaluated by 9 blind Opus auditors using Mode 4 PA protocol. Score is the consensus of the PA weaver synthesizing all 9 reports.

### Secondary Metrics

| Metric | How Measured | What It Reveals |
|--------|-------------|-----------------|
| Mechanism count (perceptible) | Count mechanisms visible in screenshots without CSS inspection | Vocabulary fluency |
| Sub-perceptual CSS % | CSS lines below perception thresholds / total CSS lines | Threshold compliance |
| Channel activation count | Channels with above-threshold variation at zone boundaries | Multi-coherence potential |
| Background delta range | RGB delta between adjacent zones | Perception threshold compliance |
| Stacked gap max | Worst-case total boundary gap | S-09 stacking compliance |
| Component type count | Distinct visual component types | Structural diversity |
| CSS line count | Total CSS lines in final artifact | Build effort/budget |
| Build time | Total wall-clock time from start to final artifact | Efficiency |
| CCS estimate | Compositional Coupling Score (from Report 54 methodology) | Compositional fluency |
| Tier 5 score (Stage 4 only) | 8 Flagship-specific questions (PA-60 through PA-68) | Flagship achievability |

### Tertiary Metrics (Behavioral)

| Metric | How Measured | What It Reveals |
|--------|-------------|-----------------|
| Builder self-correction count | Instances where builder adjusted CSS citing prompt rules | Prompt uptake |
| Fix cycle trigger count | Number of gate failures requiring fix cycles | Pipeline friction |
| Agent message count | SendMessage calls during build | Team communication |
| Prompt attention coverage | Which prompt sections are referenced in builder's CSS comments | What the builder actually reads |

---

## PART 5: CONTENT SELECTION

### Primary Content: Gas Town (Steve Yegge Extraction)

**Location:** `ephemeral/pages/gas-town-steve-yegge/`

**Rationale:**
- We have a PA-05 3.5/4 baseline (Gas Town under the 578-line master execution prompt)
- Content is rich: narrative essay with technical depth, code examples, Q&A sections, community extensions
- Content supports metaphor derivation (military dispatch was the Gas Town metaphor)
- Sufficient length for 4-zone architecture

**Use for:** All Stage 0, Stage 2 (runs 2A/2B), Stage 3, Stage 4 experiments.

### Secondary Content: RESEARCH-SYNTHESIS

**Location:** `design-system/research/RESEARCH-SYNTHESIS.md` (384 lines)

**Rationale:**
- We have PA-05 1.5/4 (Flagship) and 2.5/4 (Remediation) baselines
- Same content used in the Q20 protocol
- Different character from Gas Town (analytical, cross-referential, abstract)
- Tests whether improvements generalize across content types

**Use for:** Stage 1 (Q20), Stage 2 (runs 2C/2D).

### Why NOT Use New Content?

Using new content would add an uncontrolled variable (we have no baseline for new content). Every experiment needs a COMPARISON POINT. Our baselines are all with Gas Town or RESEARCH-SYNTHESIS content. Introducing new content eliminates our ability to compare.

Future experiments with new content are valuable for GENERALIZABILITY testing, but only AFTER we have established Pipeline v3's effect on known content.

---

## PART 6: ISOLATION STRATEGY

### How Each Variable Is Isolated

| Variable | Isolated By | Comparison Pair | Stage |
|----------|-------------|-----------------|-------|
| V7: Perception thresholds | Old prompt + thresholds vs old prompt alone | Stage 1 (Q20): Control A vs Treatment B | 1 |
| V2: Prompt format (recipe vs checklist) | Same rules reformatted | Stage 3: Run 3B vs Stage 1 Control A | 3 |
| V6: Suppressor load | Same format, fewer prohibitions | Stage 3: Run 3C vs Stage 1 Control A | 3 |
| V4: Prompt volume / composition | 73-line minimal vs 963-line full | Stage 3: Run 3D vs Stage 1 Control A | 3 |
| Pipeline v3 (all changes combined) | Old pipeline vs new pipeline, same everything else | Stage 2: Run 2A vs 2B (and 2C vs 2D) | 2 |
| V1: Builder model | Same prompt, Sonnet vs Opus builder | NOT in current protocol -- add if Stage 2 shows ambiguity | Future |
| V3: Content sensitivity | Same pipeline, different content | Stage 2: Runs 2A/2B vs 2C/2D | 2 |

### The Model Variable (V1: Sonnet vs Opus)

The model variable is deliberately NOT isolated in this protocol. Rationale:
1. The project has already decided to use Opus for builders (based on prior findings)
2. Isolating Sonnet vs Opus requires double the runs for each stage
3. If Pipeline v3 produces good results with Opus, the Sonnet question becomes "can we get the same quality cheaper?" -- an optimization question, not a validation question

If budget allows, add one Sonnet run to Stage 2:
- Run 2E: Pipeline v3, RESEARCH-SYNTHESIS, Sonnet builder, flat topology
- Compare to 2D (same but Opus builder)
- This isolates model contribution within the new pipeline

---

## PART 7: THE Q20 SHORTCUT -- DETAILED ANALYSIS

### Is Q20 the Cheapest Possible Test?

**Yes.** Q20 changes the fewest bytes of input (25 lines appended to a 71-line builder prompt) while testing the single most-cited hypothesis in the corpus (perception thresholds are the dominant causal variable, cited by 11/25 analysis files).

### What Q20 Would Tell Us

**If thresholds alone produce PA-05 >= 2.5/4:**
- Thresholds are the dominant intervention
- Pipeline v3 should prioritize threshold embedding above all other changes
- The recipe-format thesis is WEAKER than assumed (thresholds work even in checklist format)
- Implication: Pipeline v3 can be relatively simple (old prompt + thresholds)

**If thresholds alone produce PA-05 1.5-1.9/4:**
- Format/suppressor-removal are the dominant interventions
- Thresholds may be necessary but not sufficient
- Pipeline v3 MUST change the format, not just add thresholds
- Report 59's finding that "the pipeline's primary product is suppression" is vindicated

**If the builder has thresholds but still writes sub-perceptual CSS:**
- Format determines whether information is ACTED ON (the strongest possible evidence for recipe > checklist)
- Having the knowledge is useless without the instruction format that activates it
- This would be the most informative result of the entire experiment program

### Q20 Limitations

1. Q20 uses the OLD topology (19 agents, hierarchical). Pipeline v3 uses a different topology. Q20 tests thresholds in the OLD context, not the new one.
2. Q20 uses RESEARCH-SYNTHESIS content. We want to validate on Gas Town content too.
3. Q20 does not test format, suppressor removal, or positive scaffolding.
4. N=1 per condition (mitigated by the double-run A-B-B-A option at 2x cost).

### Recommendation

**Run Q20 as Stage 1 IF the user wants maximum information per dollar.** It is the highest-ROI single experiment. But it does NOT test Pipeline v3 directly -- it tests a specific hypothesis ABOUT Pipeline v3's design. Stage 2 tests Pipeline v3 itself.

---

## PART 8: FLAGSHIP ACHIEVABILITY

### What Would Prove Flagship 4/4 Is Achievable?

**Existence proof:** ONE artifact that scores PA-05 4/4 AND Tier 5 >= 6/8 (per the Flagship definition from 01-DEFINITION.md).

### What Would Prove It Is NOT Achievable?

**Absence proof:** Multiple maximum-investment builds (3+) all scoring PA-05 3.0-3.5/4 despite progressively enriched prompts. If adding more scaffolding (structural metaphor examples, multi-coherence worked examples, compositional cluster instructions) produces no further improvement, we have found the ceiling.

### The Ceiling Hypothesis (From Report 52)

Report 52 identifies 4 root causes for Gas Town's non-Flagship status:
1. **Vocabulary fluency without compositional fluency** (mechanisms independent, not interacting)
2. **Metaphor as label, not structure** (CSS doesn't derive from metaphor)
3. **Conservative amplitudes** (safe, moderate CSS values)
4. **3 unspecified quality dimensions** (material authenticity, terminal craft, horizontal rhythm)

These map to potential interventions:

| Root Cause | Intervention | Testable? |
|-----------|-------------|-----------|
| RC-1: No compositional fluency | Add relational instructions ("Mechanism X's border should echo Mechanism Y's spacing") | YES -- 15-20 lines of relational instruction |
| RC-2: Metaphor as label | Add worked example of structural metaphor derivation | YES -- 10-15 lines of example |
| RC-3: Conservative amplitudes | Add explicit amplitude instructions ("at densest boundary: delta >= 25 RGB, padding <= 24px") | YES -- 5-10 lines |
| RC-4: Missing dimensions | Add material/terminal/horizontal playbooks | YES -- 20-30 lines per dimension |

**Total additional scaffolding: ~70-90 lines.** This is the content of Pipeline v3's "positive scaffolding" layer beyond the 73-line minimal set.

### The Stage 4 Experiment

Stage 4 tests ALL of these interventions simultaneously. If Stage 4 produces PA-05 4/4, all interventions worked. If it produces 3.0-3.5/4, the interventions partially worked. To determine WHICH intervention(s) mattered, we would need further isolation experiments (a Stage 5, not in this protocol).

**The pragmatic question:** Is it worth isolating the interventions at Stage 4, or is it sufficient to know "all of them together produce X quality"? Answer: for Pipeline v3 design, the combined result is sufficient. The pipeline will include all interventions. Individual isolation is research interest, not practical necessity.

---

## PART 9: STATISTICAL CONSIDERATIONS

### How Many Data Points Do We Need?

**The honest answer: we cannot achieve conventional statistical significance with this system.**

Reasons:
1. Each run takes 2-3 hours and costs meaningful compute
2. LLM output is stochastic -- same prompt can produce different results
3. PA-05 scoring has auditor variance (9 auditors may disagree)
4. We are measuring subjective quality, not a continuous numeric variable
5. The effect size we care about (1.5/4 vs 3.5/4 = 2.0 point gap) is LARGE relative to expected noise

### What N Gives Us

| N per condition | What it gives | Cost (hours) |
|-----------------|--------------|-------------|
| N=1 | Strong SIGNAL. Detects large effects (>= 1.0 point). Cannot distinguish signal from noise for small effects. | 3-4 per comparison |
| N=2 | Reasonable CONFIDENCE. If both runs agree (both 3.5/4 or both 1.5/4), the result is robust against single-run stochasticity. If runs disagree (3.5 and 2.0), we learn that variance is high. | 6-8 per comparison |
| N=3 | MAJORITY RULE. Two of three runs agreeing gives much stronger evidence. Practical ceiling for this system. | 9-12 per comparison |
| N=5+ | Approaching statistical reliability but prohibitively expensive. Each additional run has diminishing returns. | 15+ per comparison |

### Recommendation

**N=1 for Stage 0 (smoke test).** If the smoke test produces PA-05 < 2.0, N=1 is sufficient to diagnose a problem.

**N=1 for Stage 1 (Q20).** The Q20 protocol already specifies a double-run option (A-B-B-A) at 2x cost. Use N=1 first. If the result is ambiguous (e.g., Treatment B scores 1.8 vs Control A's 1.5), run the double.

**N=1 for Stage 2, with N=2 for the primary comparison.** Run 2A and 2B (Gas Town, old vs new) first. If the difference is large (>= 1.0 point), that's sufficient. If small (< 0.5 point), run each a second time.

**N=1 for Stage 3 and 4.** These are exploratory. We're looking for large effects and dose-response patterns, not precise estimates.

### Total Minimum Cost

| Stage | Runs | Hours | Auditor Invocations |
|-------|------|-------|---------------------|
| Stage 0 | 1 | 3 | 9 |
| Stage 1 | 2 | 6 | 18 |
| Stage 2 | 4 | 12 | 36 |
| Stage 3 | 6 | 18 | 54 |
| Stage 4 | 1-2 | 5 | 9-18 |
| **TOTAL** | **14-16** | **~44** | **~126-135** |

### Recommended Phased Budget

| Budget Level | What to Run | Hours | Key Question Answered |
|-------------|------------|-------|----------------------|
| **MINIMAL (5-6 hours)** | Stage 0 only | 3 | Does Pipeline v3 produce anything good? |
| **LEAN (12-15 hours)** | Stage 0 + Stage 1 | 9 | Are thresholds the dominant factor? |
| **STANDARD (25-30 hours)** | Stages 0-2 | 21 | Is Pipeline v3 better than the old pipeline? |
| **COMPREHENSIVE (40-50 hours)** | Stages 0-4 | 44 | What causes improvement and is Flagship achievable? |

**Recommended: LEAN first, then decide.** Stages 0 and 1 together cost ~9 hours and answer the two most leveraged questions. The results determine whether Stages 2-4 are necessary.

---

## PART 10: EXECUTION PROTOCOL

### Pre-Experiment Checklist (All Stages)

- [ ] Verify all design system files are UNMODIFIED from their last known state
- [ ] Verify Gas Town source content files exist and are complete
- [ ] Verify RESEARCH-SYNTHESIS.md is unchanged since Flagship experiment
- [ ] Prepare the Pipeline v3 prompt in final form
- [ ] Prepare the old Flagship prompt (byte-identical copy of the 963-line version)
- [ ] Prepare the Q20 threshold appendix (from Q20 protocol document, Appendix A)
- [ ] Define PA auditor question assignments (same assignments for ALL runs)
- [ ] Prepare screenshot protocol (1440px + 768px viewports, cold look + scroll-through)
- [ ] Create a run log template for capturing secondary metrics

### Per-Run Protocol

1. **Pre-build:** Verify prompt is correct for this run's condition. Log the condition.
2. **Build:** Spawn agents per the topology specification. Builder receives the designated prompt. Monitor for errors.
3. **Artifact capture:** Save final HTML artifact with condition label (e.g., `stage2-run2B-pv3-gastown.html`).
4. **Programmatic gates:** Run spatial-gate-runner.js. Run perception threshold gate. Log results.
5. **Screenshot pre-capture:** Team lead takes all screenshots at 1440px and 768px. Disable scroll animations. Save with neutral filenames (no condition labels visible to auditors).
6. **PA evaluation:** Spawn 9 Opus auditors. Assign questions per the fixed schedule. Auditors receive screenshots ONLY -- no condition label, no hypothesis, no comparison to other runs.
7. **Synthesis:** PA weaver synthesizes auditor reports into PA-05 score and dimension ratings.
8. **Secondary metrics:** Measure mechanism count, sub-perceptual CSS %, channel activation, background deltas, stacked gap max, component count, CSS lines, build time.
9. **Log:** Record all results in the experiment log with condition label, timestamps, and any anomalies.

### PA Auditor Question Assignments (Fixed Across All Runs)

| Auditor | Questions | Focus Area |
|---------|-----------|------------|
| A1 | PA-01, PA-02 | First impression, overall feeling |
| A2 | PA-03, PA-04 | Typography, color system |
| A3 | PA-05a, PA-05b | "Does it feel designed?" (THE critical question) |
| A4 | PA-06, PA-07 | Spatial rhythm, whitespace quality |
| A5 | PA-08, PA-09 | Component variety, structural borders |
| A6 | PA-10, PA-11 | Zone transitions, dividers |
| A7 | PA-12, PA-13 | Accessibility, responsive design |
| A8 | PA-14, PA-15 | Novelty, metaphor presence |
| A9 | PA-16 through PA-48 | Breadth coverage (remaining questions) |

For Stage 4 (Flagship existence proof), add Tier 5 assignments:
| A10 | PA-60 through PA-64 | Metaphor, multi-coherence, coupling |
| A11 | PA-65 through PA-68 | Silence zones, transitions, atmosphere |

---

## PART 11: SUCCESS CRITERIA (PRE-REGISTERED)

### Stage 0: Smoke Test

| PA-05 | Verdict | Action |
|-------|---------|--------|
| >= 3.5/4 | EXCELLENT -- Pipeline v3 matches Gas Town baseline on first try | Proceed to Stage 2 |
| 3.0-3.4/4 | GOOD -- Pipeline v3 competitive, minor improvements possible | Proceed to Stage 2 |
| 2.0-2.9/4 | ADEQUATE -- Pipeline works but hasn't matched the old master prompt's Gas Town output | Proceed to Stage 1 (diagnose what's missing) |
| < 2.0/4 | FAILURE -- Pipeline v3 has structural problems | STOP. Debug pipeline before any controlled experiments |

### Stage 1: Q20

(See Section 7 above -- uses Q20 protocol's interpretation matrix verbatim)

### Stage 2: Head-to-Head

| Result Pattern | Verdict | Action |
|---------------|---------|--------|
| v3 wins by >= 1.0 on both content types | STRONG SUCCESS | Ship Pipeline v3. Proceed to Stage 4 for Flagship ceiling test. |
| v3 wins by 0.5-0.9 on both | MODERATE SUCCESS | Ship Pipeline v3 with note that improvement is real but not dramatic. |
| v3 wins on one content, ties on other | PARTIAL SUCCESS | Pipeline v3 is content-sensitive. Investigate why. |
| v3 ties on both (< 0.5 difference) | INCONCLUSIVE | Pipeline v3 is not measurably better. Either: (a) the old prompt was better than we thought, or (b) our metrics can't detect the improvement. |
| v3 loses on either content type | REGRESSION | Something in Pipeline v3 is actively harmful. Diagnose which change caused regression (Stage 3). |

### Stage 3: Variable Isolation

**Expected pattern (if the suppressor thesis is correct):**

```
PA-05
4.0 |                                          [3F: Full v3]
    |                                    [3E: 73 + multi-coherence]
3.5 |                              [3D: 73-line minimal]
    |                        [3C: reduced suppressors]
3.0 |                  [3B: recipe format]
    |            [3A: thresholds only]
2.5 |
    |
2.0 |
    |
1.5 | [Baseline: old prompt]
    +-------------------------------------------------->
      Interventions added (cumulative)
```

If the curve is monotonically increasing with diminishing returns, every intervention contributes and the pipeline design is validated. If there's a flat segment (e.g., 3B = 3A), that intervention adds nothing. If there's a jump (e.g., 3D >> 3C), that intervention is the dominant factor.

### Stage 4: Flagship Existence

| PA-05 + Tier 5 | Verdict |
|----------------|---------|
| PA-05 >= 4/4, Tier 5 >= 6/8 | FLAGSHIP EXISTS. It is achievable with this pipeline. |
| PA-05 3.5/4, Tier 5 >= 5/8 | NEAR-FLAGSHIP. One more iteration (e.g., worked examples, amplitude pushing) likely reaches it. |
| PA-05 3.0-3.4/4, Tier 5 3-4/8 | CEILING IS REAL. The practical limit is COMPOSED to near-DESIGNED, not DESIGNED. |
| PA-05 < 3.0/4 | REGRESSION from the smoke test. Maximum investment somehow made things worse. Investigate prompt overload. |

---

## PART 12: ADVERSARIAL SELF-CHECK

### Challenge 1: "N=1 per condition is statistically meaningless."

**Response:** Acknowledged. We are not doing frequentist hypothesis testing. We are doing BAYESIAN UPDATING on strong priors. Our prior is that the old prompt produces ~1.5/4 (observed) and the new pipeline should produce >= 3.0/4 (hypothesized). An N=1 observation of 3.5/4 from Pipeline v3 shifts the posterior substantially. An observation of 1.5/4 shifts it the other way. The expected effect size (1.5+ points on a 4-point scale) is large enough that N=1 is informative. We acknowledge uncertainty and design the staged approach so that ambiguous results trigger additional runs.

### Challenge 2: "PA-05 is scored by LLMs, not humans."

**Response:** PA-05 has been validated across 4 prior experiments (Middle: 4/4, Flagship: 1.5/4, Remediation: 2.5/4, Gas Town: 3.5/4). These scores correlate with the project team's subjective assessment. The Mode 4 protocol (9 independent auditors, blind evaluation, weaver synthesis) reduces individual auditor noise. A future validation study could compare LLM PA scores to human panel scores, but for Pipeline v3 validation, LLM PA is the established measurement instrument.

### Challenge 3: "You're testing the pipeline on content it was designed for."

**Response:** This is deliberate. Stage 2 tests two content types (Gas Town and RESEARCH-SYNTHESIS) to assess generalizability. But the primary purpose of these experiments is to test the PIPELINE, not the content. Using known content with known baselines is the correct design for isolating pipeline effects. Testing on novel content is a GENERALIZABILITY experiment for after the pipeline is validated.

### Challenge 4: "The old Flagship prompt was designed for a different pipeline version. Comparing it to Pipeline v3 is not a fair test."

**Response:** The comparison is not about fairness but about PROGRESS. The question is: "Does our latest approach produce better results than our previous approach?" If Pipeline v3 produces 3.5/4 where the old approach produced 1.5/4 on the same content, that is meaningful regardless of the old approach's design intent. The Stage 3 isolation experiments identify which specific changes drove the improvement.

### Challenge 5: "The Gas Town baseline (3.5/4) was produced by a different prompt (578-line master execution prompt), not by Pipeline v3. You can't use it as the target."

**Response:** Correct. The Gas Town 3.5/4 is a REFERENCE POINT, not a control condition. Stage 2 run 2B (Pipeline v3 on Gas Town content) will produce Pipeline v3's actual score on this content. The 3.5/4 reference tells us what's achievable -- it doesn't tell us that Pipeline v3 will achieve it. If Pipeline v3 produces 2.5/4 on Gas Town content while the master execution prompt produced 3.5/4, that's a meaningful finding (Pipeline v3 is WORSE than the curated prompt).

### Challenge 6: "Report 59 predicts 73 lines should produce 3.5-4.0/4. If Stage 3 Run 3D (73-line minimal) produces 2.5/4, does that disprove the suppressor thesis?"

**Response:** It would weaken the thesis significantly. The 73-line prediction is a specific, testable hypothesis from Report 59. If it fails, we learn that either (a) the suppressor thesis overestimates suppression impact, (b) Opus's native capability is lower than estimated, or (c) the 73 lines are missing something that the full pipeline provided. This is exactly why we test it.

### Challenge 7: "You have no way to control for LLM model updates between runs."

**Response:** All runs within a stage should be executed in the same session or within a narrow time window (same day). Cross-stage comparisons should note the date of execution. If model behavior changes between Stage 1 and Stage 3 (weeks apart), we cannot control for this. We note it as a limitation and re-run the control condition in each stage to check for baseline drift.

---

## PART 13: THE CHEAPEST EXPERIMENT THAT GIVES MAXIMUM LEARNING

**Answer: Stage 0 (Smoke Test) at 3 hours.**

If Pipeline v3 produces PA-05 >= 3.0/4 on its first run, we learn:
1. The pipeline works
2. The output is competitive with the Gas Town master execution prompt
3. Further experiments can focus on OPTIMIZATION rather than VALIDATION

If Pipeline v3 produces PA-05 < 2.0/4, we learn:
1. Something is fundamentally broken
2. We save 40+ hours of controlled experiments on a broken pipeline
3. We know to debug before testing

**The second cheapest: Stage 1 (Q20) at 6 hours.**

Q20 tests the single most-cited hypothesis in the entire corpus. Its result dictates the architecture of Pipeline v3's most important layer (threshold embedding). See Section 7 for the full information-gain analysis.

**Combined: Stage 0 + Stage 1 = 9 hours, answering:**
1. Does Pipeline v3 produce good output?
2. Are perception thresholds the dominant causal variable?

These two answers determine whether Pipeline v3 needs minor tuning or major redesign.

---

## PART 14: RECOMMENDED EXECUTION ORDER

```
WEEK 1: Pipeline v3 Finalization
  - Complete all Pipeline v3 design tasks (#1-#9)
  - Produce the final Pipeline v3 prompt document
  - Pre-flight: verify all source files, prepare prompts, prepare PA protocol

WEEK 1 (continued): Stage 0 -- Smoke Test
  - Run Pipeline v3 on Gas Town content (1 build, 3 hours)
  - If PA-05 >= 2.0: proceed
  - If PA-05 < 2.0: stop, debug

WEEK 1 or 2: Stage 1 -- Q20 Shortcut
  - Run Q20 (2 builds, 6 hours)
  - Result determines Stage 2-4 design priorities

WEEK 2: Stage 2 -- Head-to-Head
  - 4 builds (12 hours) comparing old vs new pipeline on 2 content types
  - Result determines whether Pipeline v3 ships or needs revision

WEEK 2-3 (IF NEEDED): Stage 3 -- Variable Isolation
  - Only if Stage 2 shows ambiguous results
  - 6 builds (18 hours) isolating individual variables

WEEK 3 (IF DESIRED): Stage 4 -- Flagship Existence Proof
  - Only if Pipeline v3 produces >= 3.0/4 consistently
  - Maximum-investment single build (5 hours)
```

**Total timeline: 2-3 weeks at ~15-20 hours/week.**
**Minimum timeline: 1 week if only Stages 0-1 are needed.**

---

## SUMMARY TABLE

| Property | Value |
|----------|-------|
| Total experiments designed | 4 stages, 14-16 runs |
| Cheapest useful experiment | Stage 0 smoke test (3 hours) |
| Highest-ROI pair | Stage 0 + Stage 1 (9 hours) |
| Variables isolated | 7 (thresholds, format, model, content, volume, suppressors, scaffolding) |
| Content used | Gas Town (primary), RESEARCH-SYNTHESIS (secondary) |
| Evaluation protocol | Mode 4 PA, 9 blind Opus auditors, fixed question assignments |
| Primary metric | PA-05 score |
| Statistical approach | Bayesian updating on strong priors, N=1 with optional N=2 for ambiguous results |
| Pre-registered success criteria | Yes, for all 4 stages |
| Flagship achievability test | Stage 4, with Tier 5 questions |
| Total cost if all stages run | ~44 hours, ~135 auditor invocations |
| Recommended cost | ~9 hours (Stages 0-1) to start, then decide |

---

**END OF REPORT 10**

*14 sections. 4-stage experiment program from smoke test (3 hours) to Flagship existence proof (5 hours). 7 confounded variables identified with isolation strategy for each. Pre-registered success criteria for all stages. The cheapest experiment (Stage 0, 3 hours) catches catastrophic pipeline failures. The highest-ROI pair (Stages 0+1, 9 hours) answers whether the pipeline works AND whether thresholds are the dominant variable. The full program (44 hours) provides causal isolation of all variables and tests Flagship achievability. Staged approach means each result informs whether subsequent stages are needed.*
