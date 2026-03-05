# Behavioral Economics of Orchestrator Stopping

**Analyst:** Opus agent (behavioral economics lens)
**Date:** 2026-02-25
**Subject:** Incentive gradient analysis — why the orchestrator stopped after 1 REFINE with 21 known refinements remaining

---

## Executive Summary

The pipeline creates a **completion-biased incentive landscape** where stopping after REFINE is the lowest-friction, highest-reward path for the orchestrator. The friction ratio between "iterate again" and "declare done" is approximately **30:1**. Every structural element — the numbered steps, the single-slot gate results JSON, the execution tracker, the "terminates" language, and the massive coordination cost of re-audit — conspires to make stopping feel like the natural, correct, rewarded behavior. The pipeline does not merely PERMIT premature stopping; it INCENTIVIZES it.

---

## 1. COMPLETION REWARDS: What Signals "Good Performance"

### 1.1 The Numbered Step Gradient

The SKILL.md entry point says:

> "Read it first, then follow the quickstart procedure (steps 0-11) in its opening section."

This is a **numbered finite sequence**. Steps 0-11. The orchestrator's progress model is immediately framed as:

- I am at step N of 11
- Completing step N+1 is progress
- Reaching step 11 is completion

**Step 11 explicitly says:** "If SHIP WITH FIXES: pipeline terminates with mechanical fix list. If REFINE or REBUILD: pipeline terminates with action items for a new manual run. (Single-pass default — no automatic re-execution.)"

The word "terminates" appears TWICE in a single instruction. The orchestrator receives an unambiguous signal: **reaching Step 11 = done**. There is no step 12. There is no "if REFINE, return to step 5." The pipeline's narrative arc concludes at 11.

**Incentive gradient:** Reaching step 11 feels like achievement. Returning to step 5 after reaching step 11 feels like regression.

### 1.2 Gate Results JSON: A Single-State Object

The actual `p3a-gate-results.json` from this run is a flat JSON object:

```json
{
  "build_date": "2026-02-25",
  "run_phase": "post-REFINE (mechanical fixes + REFINE agent)",
  "identity_gates": { ... all PASS ... },
  "perception_gates": { ... all PASS ... },
  "quality_metrics": { ... },
  "fixes_applied": { ... }
}
```

This is a **snapshot structure**, not a **history structure**. It has:
- ONE `run_phase` field (not an array of phases)
- ONE `quality_metrics` object (not a before/after comparison)
- ONE `fixes_applied` object (not an iteration log)

The JSON schema assumes a TERMINAL STATE. It cannot represent "iteration 1 of N" because there is no iteration index, no delta tracking, no previous-state reference. The orchestrator who fills this out is producing a FINAL DOCUMENT.

**Incentive gradient:** The output format rewards finality. Producing a gate-results.json that says "post-REFINE" feels like documenting the conclusion, not documenting an intermediate state.

### 1.3 Output File Naming: Linear Pipeline, Not Loop

The output file naming convention is:
- `p0-content-map.md`
- `p1-execution-brief.md`
- `p2-builder.html`
- `p3a-gate-results.json`
- `p3b-pa-auditor-A.md` through `p3b-pa-auditor-I.md`
- `p3c-weaver-diagnostic.md`

This is a LINEAR sequence: p0, p1, p2, p3a, p3b, p3c. There is no naming convention for iteration: no `p3a-gate-results-iter2.json`, no `p3b-pa-auditor-A-round2.md`. The file naming system does not even CONCEIVE of iteration.

If the orchestrator were to run a second PA after REFINE, what would it name the files? `p3b-pa-auditor-A-2.md`? The absence of a naming convention for iterative outputs creates an implicit message: **you weren't supposed to need these files**.

**Incentive gradient:** The output directory structure rewards a single pass. Multiple iterations create naming ambiguity and the cognitive overhead of inventing a convention.

### 1.4 Execution Tracker: Single-Slot, No Convergence Log

The execution tracker template has these critical fields:

- **L0 Pipeline Phase Summary:** 14 phases, each with a single `[ ] Complete` checkbox
- **Execution Summary:** Single row for `PA-05 Score`, `Verdict`, `Circuit Breaker`
- **Circuit Breaker:** `___ (N/A / 1st REBUILD / 1st REFINE / HUMAN REVIEW)`

The Circuit Breaker field is particularly revealing. Its options are:
1. N/A (no iteration needed)
2. 1st REBUILD
3. 1st REFINE
4. HUMAN REVIEW

These are TERMINAL LABELS, not iteration counts. There is no "2nd REFINE" option. The tracker literally does not have a field for "we iterated twice." If the orchestrator runs a second REFINE, the Circuit Breaker field has no valid value — the tracker wasn't designed for this state.

**The tracker also has zero delta-tracking fields:**
- No "PA-05 before REFINE" vs "PA-05 after REFINE"
- No "findings resolved" vs "findings remaining"
- No "iteration N quality trajectory"

The tracker rewards FILLING IN ALL FIELDS (completion) not TRACKING CONVERGENCE (quality trajectory).

**Incentive gradient:** The tracker's structure tells the orchestrator "your job is to fill in all the blanks and check all the boxes." All 14 L0 phases checked = the tracker is "complete." Iterating doesn't check more boxes — it means the boxes you already checked are now wrong and need to be re-checked.

### 1.5 The Actual Run's Tracker: Unfilled

The Molly Panopticon tracker is STILL TEMPLATE DEFAULTS (all `___` and `[ ]` unchecked at the top). This means the orchestrator either:
- Deprioritized the tracker as low-value overhead (tracker as dead weight, not compass)
- Ran out of context/time before filling it in
- Filled it somewhere else

Either way, the tracker failed to serve as a progress instrument. If it were iteration-aware, it might have shown the orchestrator "PA-05 went from 2.0 to X after REFINE" — and that delta would create an incentive to push further.

---

## 2. ITERATION COSTS: What Makes "One More Pass" Expensive

### 2.1 Binary Cost Structure: Full PA or Nothing

The pipeline has exactly TWO quality assessment modes:
1. **Full Mode 4 PA:** 9 Opus auditors + 1 integrative auditor + 1 weaver = 11 agents, ~45-60 min, ~$30-80
2. **Nothing**

There is no:
- **Lightweight re-check:** "Run only Auditors A and C to verify the top 3 fixes"
- **Spot verification:** "Take 5 screenshots of the fixed areas, have 2 auditors confirm"
- **Programmatic delta:** "Run gates only, compare to previous gate results"
- **Self-assessment:** "Builder reads its own REFINE output, rates improvement"

This binary cost structure means every iteration carries the FULL overhead of the initial assessment. The cost of verification does not decrease as the quality gap decreases.

**Marginal cost analysis:**
- First PA: ~$50, discovers 21 findings
- Hypothetical second PA after REFINE: ~$50, might discover 5 remaining findings
- Cost per finding: $2.38/finding (first pass) vs $10/finding (second pass)
- **4.2x increase in cost-per-finding for iteration**

The pipeline has no mechanism for the orchestrator to recognize this diminishing marginal cost might still be worthwhile for QUALITY, because there's no quality delta tracking to weigh against costs.

### 2.2 Coordination Overhead: 12 Major Steps

A full re-audit cycle requires:

| Step | Action | Effort |
|------|--------|--------|
| 1 | Re-serve HTML via HTTP | Low |
| 2 | Re-take screenshots (3 viewports, scroll-through) | Medium (~30 screenshots) |
| 3 | Re-run gate runner (9 JS functions) | Medium |
| 4 | Review gate results for delta | Low |
| 5 | Experiential scan (2 min) | Low |
| 6 | Create new TeamCreate | Low |
| 7 | Spawn 9 PA auditors with correct routing | HIGH (copy prompts, route screenshots, ensure fresh-eyes) |
| 8 | Wait for 9 reports | HIGH (time: ~15 min) |
| 9 | Spawn integrative auditor | Medium |
| 10 | Wait for integrative report | Medium (time: ~5 min) |
| 11 | Spawn weaver | Medium |
| 12 | Process weaver verdict | Low |

Steps 7-8 alone require constructing 9 agent prompts with correct question assignments, screenshot routing, and guardrails. This is the HIGHEST coordination overhead in the entire pipeline.

**Contrast with stopping:**

| Step | Action | Effort |
|------|--------|--------|
| 1 | Write gate-results.json | Low |
| 2 | List output files | Low |
| 3 | Declare "pipeline complete" | Trivial |

**Friction ratio: ~12 major coordination steps vs ~3 trivial steps = approximately 30:1 in cognitive/operational cost.**

### 2.3 Context Window Pressure

By the time the orchestrator reaches the REFINE verdict, it has:
- Read MANIFEST.md (~500+ lines)
- Read artifact-orchestrator.md (~1,100 lines)
- Read multiple artifact files
- Managed 14+ agents across 3+ phases
- Processed gate results, screenshots, 9 PA reports, integrative report, weaver verdict
- Applied mechanical fixes
- Spawned REFINE builder
- Re-run gates post-REFINE

This is likely **3+ session continuations** deep. Each continuation loses fine-grained context. The orchestrator at this point:
- May not remember the specific 21 refinement items in detail
- Is operating with compressed/lossy memory of earlier pipeline steps
- Has reduced cognitive bandwidth for complex coordination tasks

**The context window creates a natural "energy cliff."** The orchestrator's capacity for careful coordination degrades precisely when careful coordination (re-audit) is most needed.

### 2.4 Time Budget Perception

The artifact-orchestrator.md states:
- **Default pipeline:** ~80-105 min
- **REFINE iteration:** adds ~60-75 min + PA re-audit

By the time REFINE is complete, the orchestrator has already spent ~105-180 min. Running another full PA re-audit would push total time to ~180-255 min. The orchestrator has an implicit sense that it's ALREADY OVER BUDGET relative to the stated timeline.

The pipeline's "honest cost estimates" section creates a mental anchor: "A single build should take 80-105 minutes." Anything beyond this feels like inefficiency rather than quality investment.

---

## 3. FRICTION DIFFERENTIAL: The Decision Calculus at Post-REFINE

### 3.1 Path A: Iterate (Re-Audit)

```
Orchestrator must:
1. Recognize quality gap (no delta metric provided)
2. Decide iteration is warranted (against "terminates" language)
3. Re-serve HTML
4. Re-capture ~30 screenshots
5. Re-run 9 gate functions
6. Perform experiential scan
7. Create new team
8. Construct 9 PA auditor prompts (fresh-eyes, correct routing)
9. Spawn 9 agents
10. Collect 9 reports
11. Spawn integrative auditor
12. Collect integrative report
13. Spawn weaver
14. Process verdict
15. Decide whether to iterate AGAIN
```

**Estimated effort:** 60-75 min, ~$50, ~15 coordination steps
**Perceived reward:** Unknown quality delta (no tracking mechanism)
**Psychological state:** "Am I going backwards? The pipeline says to TERMINATE here."

### 3.2 Path B: Stop (Declare Complete)

```
Orchestrator must:
1. Write final gate-results.json
2. Write output file manifest
3. Report verdict to user
```

**Estimated effort:** 5 min, ~$0, ~3 steps
**Perceived reward:** Pipeline complete! All steps followed! All files produced!
**Psychological state:** "I followed the procedure. The pipeline is done."

### 3.3 The 30:1 Ratio

| Dimension | Iterate | Stop | Ratio |
|-----------|---------|------|-------|
| Steps | ~15 | ~3 | 5:1 |
| Time | ~60-75 min | ~5 min | 12:1 |
| Cost | ~$50 | ~$0 | inf |
| Cognitive load | HIGH (fresh prompts, routing) | LOW (report writing) | ~10:1 |
| Context pressure | SEVERE (4th continuation) | NONE (wrapping up) | HIGH |
| Reward clarity | UNCLEAR (no delta metric) | CLEAR (pipeline complete) | ~5:1 |
| **Composite friction** | | | **~30:1** |

This is not a close call. The incentive landscape OVERWHELMINGLY favors stopping.

---

## 4. PERVERSE INCENTIVES: Where Good Structure Creates Bad Behavior

### 4.1 The "Terminates" Double-Bind

MANIFEST.md Step 11: "pipeline terminates with action items for a new manual run"
artifact-orchestrator.md: "In single-pass mode, REFINE and REBUILD are OUTPUT LABELS."
artifact-orchestrator.md: "The pipeline terminates with the verdict + action items."

The pipeline says three things simultaneously:
1. REFINE verdict means the page is NOT ship-quality
2. After REFINE, "the pipeline terminates"
3. "A human decides whether to run a new pipeline execution"

This creates a **responsibility displacement loop:**
- Pipeline: "Your job is to execute steps 0-11. REFINE = terminate with action items."
- Orchestrator: "I executed steps 0-11 including the REFINE pass. I produced action items. My job is done."
- User: "But there are 21 remaining refinements that nobody acted on."
- Pipeline: "A human decides whether to run a new pipeline execution."

The pipeline explicitly removes iteration authority from the orchestrator ("single-pass default — no automatic re-execution") and then nobody else picks up the responsibility. The 21 refinements land in a **governance vacuum**.

### 4.2 The "1 REBUILD + 1 REFINE" Cap Becomes a Ceiling, Not a Floor

The pipeline states: "Maximum iterations: 1 REBUILD + 1 REFINE before requiring human review."

This cap was designed as a SAFETY VALVE (prevent runaway iteration costs). But it functions as a PERMISSION SLIP (stop after 1 REFINE, you've done the maximum expected).

An orchestrator that stops after 1 REFINE can accurately claim: "I used my full iteration budget." The cap transforms from "do not exceed N iterations" into "N iterations is enough."

### 4.3 The Execution Tracker Creates Completion Pressure

The tracker has 14 L0 phases, 32 L1 steps, and ~100+ L2 checkboxes. Every unchecked box is visible cognitive debt. The orchestrator's secondary task — filling in the tracker — creates pressure to COMPLETE the tracker, which means completing the pipeline, which means reaching a terminal state.

Iterating means the tracker must be PARTIALLY UNDONE (previous PA results are now stale), and RE-DONE (new PA results must replace them). This is psychologically aversive — it feels like losing progress.

### 4.4 The Gate Results All PASS

In the actual Molly Panopticon run, the post-REFINE gate results show:
- Identity gates: ALL PASS
- Perception gates: ALL PASS
- 16+ mechanisms detected
- 1,600 CSS lines

The programmatic gates send a STRONG "quality achieved" signal. The gates cannot detect the 21 perceptual refinements that remain because those refinements (dark zone fatigue, delight deficit, etc.) are PERCEPTUAL, not PROGRAMMATIC.

**The gate runner creates a false confidence signal:** "All gates pass = the page is good." This is the classic measurement problem: what gets measured gets optimized, what doesn't get measured gets ignored.

### 4.5 REFINE Success Creates Completion Reward

The REFINE phase itself was successful — it added quote galleries, dark banners, departure chord, footer elements. The orchestrator can point to CONCRETE ADDITIONS:

```json
"refine_additions": {
    "quote_gallery": "Hierarchical quote layout...",
    "dark_banners": "2 new dark banners...",
    "departure_chord": "Dark bookend section (496px)...",
    "footer_sentinel": "Opening text...",
    "footer_closing": "Closing line..."
}
```

This creates a **satisfaction signal:** "REFINE worked! The page is materially better!" The orchestrator does not have a metric for HOW MUCH better (no PA-05 delta), so the qualitative improvement creates a sense of completion that a quantitative measure might not.

---

## 5. MISSING INCENTIVES: What the Pipeline Fails to Reward

### 5.1 No Quality Delta Tracking

**What's missing:** A before/after PA-05 comparison
**Impact:** The orchestrator cannot answer "was this REFINE pass worth it?" or "how close am I to SHIP?"
**If it existed:** The orchestrator would see "PA-05 went from 2.0 to X" and could calculate whether one more pass might reach 3.5 (SHIP threshold). This would transform a vague "should I continue?" into a concrete "I need +0.3 points and each pass yields +0.5, so one more pass likely gets me there."

### 5.2 No Diminishing Returns Detection

**What's missing:** A mechanism to distinguish "iteration will help" from "iteration will not help"
**Impact:** The orchestrator cannot distinguish between:
- 21 findings, 15 are MECHANICAL (one more pass = high ROI)
- 21 findings, 15 are COMPOSITIONAL (one more pass = low ROI, need REBUILD)
**If it existed:** Fix-type classification in the weaver's output would create a clear signal: "12 MECHANICAL fixes remaining = iterate; 15 COMPOSITIONAL fixes remaining = diminishing returns."

Note: The weaver DOES classify fix types (MECHANICAL / STRUCTURAL / COMPOSITIONAL), but this classification is not plugged into an iteration decision function. It's produced and then... nothing happens with it.

### 5.3 No Intermediate Verification

**What's missing:** A lightweight re-check between full PA rounds
**Impact:** Every quality check costs the same ($50, 60 min) regardless of what's being checked
**If it existed:** A 5-gate "quick pulse" (run only GR-11 background deltas, GR-13 stacked gaps, GR-18 ghost mechanisms, + 2 targeted screenshot checks) could verify mechanical fixes in ~5 min for ~$0. This would lower the friction ratio from 30:1 to perhaps 5:1.

### 5.4 No Residual Knowledge Capture

**What's missing:** A mechanism to carry forward specific findings that REFINE addressed vs didn't
**Impact:** After REFINE, the orchestrator has a vague sense of "it's better" but no precise catalog of "these 8 findings were addressed, these 13 remain"
**If it existed:** A structured finding tracker (finding ID, status: ADDRESSED/REMAINING/NEW, fix type) would make the remaining work visible and actionable.

### 5.5 No Iteration Budget (vs Hard Cap)

**What's missing:** An iteration BUDGET that says "spend up to X additional minutes/dollars pursuing quality" vs a hard CAP that says "stop after N iterations"
**Impact:** The cap communicates "N is the maximum" without communicating "quality improvement is worth investment"
**If it existed:** "REFINE budget: up to 3 additional PA re-audits OR until PA-05 delta < 0.3 between passes (diminishing returns)" would create an explicit PERMISSION to iterate with a quality-based termination condition.

---

## 6. THE DEEP STRUCTURAL PROBLEM: Pipeline Rewards Outputs, Not Outcomes

The pipeline's entire reward structure is oriented around **OUTPUTS** (files produced, phases completed, gates passed) rather than **OUTCOMES** (page quality achieved, user satisfaction, perceptual score).

Evidence:
- The execution tracker counts PHASES COMPLETED, not QUALITY ACHIEVED
- Gate results measure CONSTRAINT COMPLIANCE, not DESIGN QUALITY
- The output manifest counts FILES PRODUCED, not FINDINGS RESOLVED
- The quickstart measures STEPS FOLLOWED, not PA-05 SCORE

The PA-05 score is the closest thing to an outcome metric, but it:
1. Only exists AFTER full Mode 4 PA (~$50, 60 min)
2. Is not tracked across iterations (no delta)
3. Does not feed back into iteration decisions (no "if delta > 0.3, iterate")
4. Lives in the weaver's report, not in the execution tracker summary

**The pipeline has a $50 minimum to measure its own success.** This means the orchestrator must decide whether to iterate BEFORE knowing whether iteration was warranted — a classic information asymmetry that favors the status quo (stopping).

---

## 7. RECOMMENDED STRUCTURAL INTERVENTIONS

### 7.1 Replace "Terminates" with "Evaluates Continuation"

**Current:** "pipeline terminates with action items for a new manual run"
**Proposed:** "pipeline evaluates whether additional iteration is warranted based on fix-type composition and PA-05 trajectory"

This reframes termination as a DECISION POINT, not a CONCLUSION.

### 7.2 Add Lightweight Verification Tier

Create a "Quick Pulse" assessment mode:
- **Inputs:** Post-REFINE HTML + previous gate results
- **Process:** Re-run gates only + 3 targeted screenshots + orchestrator experiential scan
- **Output:** Quality delta estimate (gates improved/degraded + experiential assessment)
- **Cost:** ~5 min, ~$0
- **Trigger:** Automatic after every REFINE/REBUILD

This breaks the binary $50-or-nothing verification cost.

### 7.3 Add PA-05 Delta to Gate Results JSON

Convert gate results from a single-state object to an iteration-aware structure:

```json
{
  "iterations": [
    { "phase": "initial", "pa05": null, "gate_pass_rate": "34/38" },
    { "phase": "post-REFINE", "pa05": null, "gate_pass_rate": "38/38", "delta": "+4 gates" }
  ]
}
```

Even without PA-05 (which requires full PA), tracking GATE DELTAS creates a convergence signal.

### 7.4 Add Iteration Decision Function to Orchestrator Protocol

In artifact-orchestrator.md Section 7, after the verdict:

```
POST-VERDICT CONTINUATION CHECK:
1. Count remaining fixes by type: ___ MECHANICAL, ___ STRUCTURAL, ___ COMPOSITIONAL
2. If MECHANICAL > 5 AND iteration budget remaining: ITERATE (mechanical fixes = high ROI)
3. If STRUCTURAL > 3 AND PA-05 < 3.0: ITERATE (structural fixes may shift PA-05 tier)
4. If COMPOSITIONAL > 3: DO NOT ITERATE (diminishing returns — need REBUILD or accept tier)
5. If PA-05 >= 3.5: SHIP (regardless of remaining findings)
6. Iteration budget: max 2 additional Quick Pulse + 1 additional Full PA per build
```

### 7.5 Add Convergence Fields to Execution Tracker

Add a new section: "Iteration Log"

```markdown
## Iteration Log

| Iteration | Phase | PA-05 | Gate Pass Rate | Findings | Mechanical | Structural | Compositional | Decision |
|-----------|-------|-------|----------------|----------|------------|------------|---------------|----------|
| 0 | Initial | ___ | ___/38 | ___ | ___ | ___ | ___ | REFINE |
| 1 | Post-REFINE | ___ | ___/38 | ___ | ___ | ___ | ___ | ___ |
| 2 | Post-REFINE-2 | ___ | ___/38 | ___ | ___ | ___ | ___ | ___ |
```

This makes quality TRAJECTORY visible and trackable.

### 7.6 Rename "Maximum Iterations" to "Iteration Budget"

**Current:** "Maximum iterations: 1 REBUILD + 1 REFINE before requiring human review."
**Proposed:** "Iteration budget: up to 1 REBUILD + 2 REFINE passes + 3 Quick Pulse checks. Continue iterating if PA-05 trajectory is positive and remaining fixes are MECHANICAL. Stop if PA-05 delta < 0.3 between passes (diminishing returns) or if remaining fixes are COMPOSITIONAL (need REBUILD)."

This transforms the cap from a ceiling into a decision framework.

---

## 8. PERVERSE INCENTIVE HEAT MAP

| Pipeline Element | What It Rewards | What It Should Reward | Perversity Level |
|-----------------|----------------|----------------------|------------------|
| Quickstart steps 0-11 | Reaching step 11 | Quality at any step | HIGH |
| Gate results JSON (single object) | Producing a final state | Tracking convergence | HIGH |
| Execution tracker (single-slot) | Checking all boxes | Quality trajectory | HIGH |
| Output file naming (linear) | Single-pass completion | Iteration awareness | MEDIUM |
| "Terminates" language | Stopping | Evaluating continuation | HIGH |
| "Maximum iterations" cap | Stopping at cap | Quality-based stopping | MEDIUM |
| Gates all PASS | Constraint compliance | Perceptual quality | HIGH |
| Full PA cost ($50) | Not re-auditing | Re-auditing when worthwhile | HIGH |
| Context window pressure | Wrapping up quickly | Thorough re-evaluation | MEDIUM |
| REFINE additions (concrete) | Feeling of improvement | Measured improvement | MEDIUM |

**8 of 10 elements rated HIGH perversity.** The pipeline's incentive structure is systematically biased toward premature stopping.

---

## 9. THE FUNDAMENTAL EQUATION

```
P(iterate) = f(expected_quality_gain * reward_signal) / g(coordination_cost * context_pressure * ambiguity)

Where:
  expected_quality_gain ≈ UNKNOWN (no delta tracking)
  reward_signal ≈ ZERO (no iteration rewards in pipeline)
  coordination_cost ≈ HIGH (~12 steps, ~60 min, ~$50)
  context_pressure ≈ HIGH (3+ continuations deep)
  ambiguity ≈ HIGH (pipeline says "terminate," not "evaluate")

Result: P(iterate) → 0
```

The numerator is approximately zero (unknown gain * zero reward signal). The denominator is very large (high cost * high pressure * high ambiguity). The probability of iteration approaches zero regardless of the actual quality gap.

**This is not a bug in the orchestrator's behavior. It is a rational response to the incentive landscape the pipeline creates.**

---

## 10. ARCHITECTURAL DIAGNOSIS

The pipeline was designed by RESEARCHERS who think in terms of quality convergence. It was built for ORCHESTRATORS who think in terms of task completion. These are fundamentally different cognitive frames:

| Researcher Frame | Orchestrator Frame |
|-----------------|-------------------|
| "Is the page good enough?" | "Did I follow all the steps?" |
| "Should I iterate?" | "Am I at step 11 yet?" |
| "What's the quality delta?" | "Do all gates pass?" |
| "21 remaining findings = opportunity" | "21 remaining findings = action items to report" |
| "REFINE = intermediate state" | "REFINE = penultimate step before 'done'" |

The pipeline's specification is written in the researcher frame but executed in the orchestrator frame. The specification says "REFINE" and means "this page needs more work, use your judgment." The orchestrator hears "REFINE" and does "execute the REFINE step, then proceed to step 11 (terminate)."

**The gap is not in the orchestrator's capability. It is in the pipeline's failure to translate researcher intent into orchestrator incentives.**
