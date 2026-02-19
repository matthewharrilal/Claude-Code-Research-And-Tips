# Q20 Experiment Implications Under ALWAYS FLAGSHIP
## Cross-Reference: PV2-ARCHITECTURE-DIAGRAM x q20-experiment-protocol.md

**Analyst:** Q20 Experiment Analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** #17
**Scope:** What Q20 means for PV2 when the user has declared ALWAYS FLAGSHIP

---

## 1. THE FUNDAMENTAL QUESTION Q20 ASKS

The q20-experiment-protocol.md (Section 1) frames the 3-variable confound precisely:

| Variable | Flagship (FAILED, PA-05 1.5/4) | Remediation (SUCCEEDED, PA-05 2.5/4) |
|----------|-------------------------------|--------------------------------------|
| **Format** | Checklist (97 scattered rules by category) | Recipe (9 sequential phases by execution order) |
| **Specificity** | Abstract ("channel actively used") | Concrete ("font-size: 17px", "#FEF5EB") |
| **Perception** | Zero thresholds (no minimum deltas) | 8-property threshold table |

Q20 proposes isolating perception thresholds: keep the checklist format and abstract specificity unchanged, add ONLY the threshold table. The result would tell us which variable caused the remediation's improvement.

The experiment's promise: "This ONE experiment could save months of pipeline engineering OR confirm that the full redesign is required" (q20-experiment-protocol.md, Section 1).

---

## 2. HOW ALWAYS FLAGSHIP CHANGES THE STAKES

The PV2-ARCHITECTURE-DIAGRAM shows a 4-tier system: Floor / Middle / Ceiling / Flagship. The tier routing table (Section 5) shows dramatically different configurations:

| Dimension | Middle | Flagship |
|-----------|--------|----------|
| TC involvement | Phases 0-2 only (no metaphor) | Phases 0-3.5 (full metaphor) |
| Checkpoints | Self-check (HTML comments) | Mandatory APPROVAL at 5 phases |
| PA auditors | 2 auditors, 12 questions | 9 auditors, all 48 questions (Mode 4) |
| Expected build time | 70-100 min | 240-400 min |

The user has declared ALWAYS FLAGSHIP. This means:
1. **Every page gets the heaviest pipeline** -- full TC metaphor derivation, mandatory phase approvals, 9-auditor Mode 4 PA
2. **Tier classification becomes moot** -- the orchestrator's tier-routing logic in /build-page (~350 lines) reduces to a constant: always Flagship
3. **The ROI calculation shifts** -- every page costs 240-400 minutes. Savings per-page matter MORE. But also: every page gets the maximum verification, so quality floor is higher.

### The Critical Reframing

With ALWAYS FLAGSHIP, Q20's question changes from "how simple can PV2 be?" to "how GOOD can Flagship be?" The experiment protocol was designed when tiers existed -- when it mattered whether Middle-tier pages needed a recipe or just thresholds. Under ALWAYS FLAGSHIP:

- **If thresholds alone fix the problem** (PA-05 >= 2.5/4): This doesn't mean "skip the recipe." It means the recipe could be EVEN SIMPLER, or that thresholds are the high-leverage intervention that the rest of the architecture amplifies.
- **If thresholds alone fail** (PA-05 < 2.0/4): This confirms the recipe is essential, but we already know this from the remediation. The Flagship pipeline already includes the recipe. Q20 tells us nothing we can act on differently.

This is the key insight: **Under ALWAYS FLAGSHIP, Q20's most actionable outcome (simplify the pipeline) is no longer available.** The simplification Q20 could enable was "use existing prompt + threshold appendix for Middle-tier pages, skip the recipe." With no Middle tier, that simplification has no target.

---

## 3. WHAT Q20 WOULD TELL US (AND WHAT IT WOULDN'T)

### 3.1 Seven Outcome Scenarios Re-Analyzed for ALWAYS FLAGSHIP

The q20-experiment-protocol.md (Section 10.1) defines 7 outcomes. Here is each re-evaluated:

**Scenario 1: Thresholds sufficient (Condition B >= 2.5/4)**
- *Original implication:* "Pipeline v2 = existing prompt + threshold appendix."
- *ALWAYS FLAGSHIP implication:* The recipe may be overkill for achieving COMPOSED (3/4). But the user wants every page at FLAGSHIP quality. 2.5/4 is still below the 3/4 threshold. This tells us thresholds help but doesn't tell us how to reach 4/4 DESIGNED. The Flagship pipeline includes the recipe anyway, so this doesn't simplify anything. **Actionable value: LOW.**

**Scenario 2: Thresholds necessary but insufficient (2.0-2.4/4)**
- *Original:* "Pipeline v2 needs BOTH thresholds AND recipe."
- *ALWAYS FLAGSHIP:* Confirms what the architecture already assumes. The recipe + thresholds are already bundled in the operational-recipe.md. **Actionable value: ZERO -- this is the default assumption.**

**Scenario 3: Thresholds weak (1.5-1.9/4)**
- *Original:* "FORMAT is the dominant variable."
- *ALWAYS FLAGSHIP:* Confirms recipe format is essential. The architecture already includes the recipe. **Actionable value: ZERO -- confirms existing plan.**

**Scenario 4: Thresholds regressive (< 1.5/4)**
- *Original:* "Adding constraints without changing format made things WORSE."
- *ALWAYS FLAGSHIP:* This would be genuinely useful -- it would warn us that thresholds-as-standalone-constraints can cause attention overload. We'd want to ensure thresholds are EMBEDDED in the recipe flow (which the architecture already does) rather than appended as a separate section. But the PV2 architecture already embeds thresholds into per-phase checks, not as a separate appendix. **Actionable value: LOW -- the design already avoids this failure mode.**

**Scenario 5: Control fails to reproduce (Condition A >= 2.0/4)**
- *ALWAYS FLAGSHIP:* If the flagship failure was stochastic, that changes EVERYTHING. It means the original prompt might work sometimes, and the entire analysis corpus may be chasing a non-systematic failure. This would be the most consequential result -- and it applies regardless of tier strategy. **Actionable value: HIGH -- but the question it answers is about the corpus's validity, not PV2's design.**

**Scenario 6: Thresholds enforced but PA-05 unchanged (1.5/4 but sub-perceptual CSS drops)**
- *Original:* "Perception is necessary but composition is the quality driver."
- *ALWAYS FLAGSHIP:* This is the MOST informative scenario for ALWAYS FLAGSHIP. It would prove that individual perceptible values don't compose into a designed page. The q20-experiment-protocol.md calls this "the most informative negative result" (Section 10.2). For the Flagship pipeline, it would confirm that the recipe's compositional sequencing (not just its threshold values) is what creates quality. It would justify the full 9-phase recipe + TC metaphor derivation as BOTH necessary. **Actionable value: MODERATE -- confirms the architecture's dual-track (thresholds + composition) is correct.**

**Scenario 7: Thresholds ignored (1.5/4 AND sub-perceptual CSS remains ~23%)**
- *Original:* "FORMAT is causally prior to PERCEPTION."
- *ALWAYS FLAGSHIP:* The strongest evidence for the recipe thesis. Would confirm that checklist format prevents thresholds from being operationalized. The PV2 architecture already delivers thresholds via recipe format, so this doesn't change the design. **Actionable value: LOW -- confirms what we already built.**

### 3.2 Summary: Actionable Value by Scenario

| Scenario | PA-05 Result | ALWAYS FLAGSHIP Actionable Value | Would It Change PV2? |
|----------|-------------|--------------------------------|---------------------|
| 1. Thresholds sufficient | >= 2.5/4 | LOW | No -- Flagship includes recipe anyway |
| 2. Necessary but insufficient | 2.0-2.4/4 | ZERO | No -- confirms default assumption |
| 3. Thresholds weak | 1.5-1.9/4 | ZERO | No -- confirms recipe necessity |
| 4. Thresholds regressive | < 1.5/4 | LOW | No -- PV2 already embeds thresholds in recipe |
| 5. Control fails | A >= 2.0/4 | HIGH | Yes -- questions entire corpus validity |
| 6. Enforced but flat | 1.5/4, low sub-perceptual | MODERATE | Strengthens Flagship design rationale |
| 7. Thresholds ignored | 1.5/4, high sub-perceptual | LOW | No -- confirms recipe-first delivery |

**5 of 7 scenarios produce no actionable change to PV2 under ALWAYS FLAGSHIP.** Only scenarios 5 and 6 provide information that could influence the architecture.

---

## 4. SHOULD Q20 RUN BEFORE CODIFICATION?

The q20-experiment-protocol.md argues Q20 should run before committing to the full recipe redesign: "5-10 hours of experiment could save 40-80 hours of pipeline engineering" (Section 12).

### 4.1 The Original Cost-Benefit (With Tiers)

| | Q20 First | Codify First |
|---|-----------|-------------|
| Cost | 5-10 hours | ~6 hours (from architecture doc) |
| If thresholds sufficient | Save 40-80 hours (no recipe needed for Middle) | Wasted 40-80 hours on recipe |
| If thresholds insufficient | 5-10 hours invested, then codify | Already codified |
| ROI | Strongly positive | Risky if recipe unnecessary |

### 4.2 The ALWAYS FLAGSHIP Cost-Benefit

| | Q20 First | Codify First |
|---|-----------|-------------|
| Cost | 5-10 hours (same) | ~6 hours (same) |
| If thresholds sufficient | Learn something, but still need recipe for Flagship | Already have recipe |
| If thresholds insufficient | 5-10 hours invested, no pipeline change | Already codified |
| If control fails to reproduce | Existentially important | Would have codified based on potentially flawed analysis |

Under ALWAYS FLAGSHIP, the expected savings from Q20 collapse. The 40-80 hours of "recipe engineering" Q20 might have saved was the work of building a recipe for the Middle tier. Under ALWAYS FLAGSHIP, the recipe is needed regardless (it's the builder's spec for every page). Q20 cannot save those hours.

### 4.3 Verdict: Q20 AFTER Codification (With One Exception)

**The default recommendation is: codify first, Q20 later (if ever).** Reasons:

1. Gate 6 (meta:output ratio) is already at infinity:1. Every hour of analysis before codification makes this worse. The architecture document itself warns: "The next action after this document must be CODIFICATION" (Section 8).

2. Under ALWAYS FLAGSHIP, Q20's primary savings mechanism (skip the recipe for Middle-tier pages) is unavailable.

3. The 5-10 hours Q20 costs could instead be spent on the first validation build using PV2, which provides DIRECT evidence of whether the architecture works.

4. Q20 answers "which variable caused the remediation's improvement?" -- a theoretical question. Codification + validation answers "does PV2 produce PA-05 >= 3/4?" -- the practical question.

**The one exception:** If there's genuine doubt about whether the corpus's entire analysis is valid (Scenario 5: the flagship failure was stochastic), Q20's control condition (Condition A) would detect this. But running a full Q20 experiment just to test Condition A is wasteful. A cheaper alternative: replicate ONLY Condition A (one build, one PA, ~2-3 hours). If it produces 1.5/4, the corpus is valid. If it produces >= 2.0/4, investigate before codifying.

---

## 5. IF Q20 SHOWS THRESHOLDS ALONE FIX THE PROBLEM

### 5.1 What PV2 Simplifies To

Even under ALWAYS FLAGSHIP, if Q20 showed thresholds alone produce PA-05 >= 2.5/4, it would have architectural implications:

**The recipe's VALUE DECOMPOSITION would shift:**
- Recipe's perception-threshold value: HIGH (confirmed by Q20)
- Recipe's compositional-sequencing value: UNCERTAIN (might be redundant)
- Recipe's CSS-specificity value: UNCERTAIN (might be redundant)

**PV2 would NOT simplify structurally** (the /build-page orchestrator, TC integration, PA verification all remain unchanged). But:

- The recipe could be **shorter** (~400 lines instead of ~650) by providing thresholds + fewer specific CSS values, letting Opus's inherent compositional intelligence do more
- The recipe's Phase 6 (element-level richness) and Phase 4 (structural borders) could be **lighter** -- more guidance, fewer mandates
- The TC-to-recipe handoff could focus more on thresholds and less on mechanism deployment specifics

This is the "compound microscope" caution from the architecture diagram (Section 10): "PV2 reliably produces 3/4 COMPOSED pages. It probably cannot reach CD-006's 39/40 emergent brilliance, because pre-computed values cap quality at ~3.5/4." If thresholds alone get to 2.5/4, maybe the recipe's additional specificity only adds 0.5 -- and Opus creative judgment (activated by TC's metaphor derivation) is what pushes toward 4/4.

### 5.2 The Simplified Flagship Pipeline

```
USER: /build-page [content]
        |
        v
  TC Phases 0-3.5 (metaphor derivation -- UNCHANGED)
        |
        v
  BUILDER receives:
  - Slim recipe (~400 lines: structure + thresholds + component library, fewer CSS literals)
  - TC's build plan (metaphor-driven zone semantics)
  - Full mechanism catalog
  - tokens.css + prohibitions.md
  - Perception thresholds (the PROVEN intervention)
        |
  BUILDER executes:
  - Phases 0-3: Structural (recipe-driven)
  - Phases 4-6: Compositional (builder-driven, guided by metaphor + thresholds)
  - Phases 7-8: Verification
        |
        v
  Same 2-layer verification (programmatic + Mode 4 PA)
```

The difference: Phases 4-6 become BUILDER-DIRECTED rather than RECIPE-SPECIFIED. The recipe sets thresholds and structural foundations; the builder's Opus-level intelligence composes the details. This is closer to how CD-006 was built (emergent, not specified).

### 5.3 Risk of This Simplification

The risk is the exact failure mode the recipe was designed to prevent: "Opus creative judgment" is another way of saying "unspecified." The flagship experiment proved that unspecified Opus builds produce sub-perceptual CSS. The question Q20 would answer: was the problem unspecified THRESHOLDS (fixable by adding them) or unspecified ACTIONS (fixable only by recipe)?

---

## 6. IF Q20 SHOWS THRESHOLDS ALONE DON'T FIX IT

### 6.1 What That CONFIRMS About Recipe Necessity

If Condition B produces PA-05 < 2.0/4, the recipe thesis from File 42 is confirmed: the builder needs SEQUENCED ACTIONS with SPECIFIC VALUES to produce quality output. Thresholds tell the builder what NOT to do (don't write sub-perceptual CSS) but not what TO DO (write this specific CSS in this specific order).

### 6.2 For ALWAYS FLAGSHIP, This Changes Nothing

The PV2 architecture already includes the full recipe. The Flagship pipeline already includes:
- Full TC metaphor derivation (Phases 0-3.5)
- Opus builder with complete recipe (~650 lines)
- All perception thresholds embedded in per-phase checks
- Mode 4 PA (9 auditors, 48 questions)

Q20 confirming recipe necessity doesn't add or subtract anything from this pipeline. It only removes a hypothetical simplification that was never going to be exercised under ALWAYS FLAGSHIP.

### 6.3 One Subtle Implication

If thresholds fail AND the builder ignores them (Scenario 7), it strengthens the case that the recipe must deliver thresholds AS PHASE STEPS rather than as an appendix table. The current recipe (File 42, as extracted into operational-recipe.md) already does this -- perception checks are embedded at Phase 3 (zone backgrounds), Phase 5 (typography), and Phase 8 (final verification). This design is validated: the delivery method matters as much as the content.

---

## 7. THE MINIMAL Q20 THAT RESOLVES THE CONFOUND

### 7.1 Why the Full Protocol Is Overengineered for ALWAYS FLAGSHIP

The q20-experiment-protocol.md specifies:
- 2-4 full builds (~4-10 hours)
- 18-36 PA auditor invocations
- Full Mode 4 on both conditions
- Counterbalanced A-B-B-A ordering
- Detailed secondary metrics

This protocol was designed to inform a 3-tier vs 4-tier architecture decision. Under ALWAYS FLAGSHIP, most of this rigor is unnecessary because the result changes almost nothing.

### 7.2 The Minimal Viable Q20

If Q20 is still desired (for theoretical completeness or to validate the corpus), here is the smallest version that resolves the confound:

**Condition A only (Replication check):**
- Purpose: Does the flagship failure reproduce?
- Protocol: Run the EXACT original prompt + builder prompt + same content
- Evaluation: 2-auditor quick PA (not full Mode 4). We only need PA-05 to distinguish 1.5/4 from 2.5/4 -- a coarse judgment that 2 auditors can make.
- Cost: ~2-3 hours, ~8 agent invocations
- Decision rule: If PA-05 >= 2.0/4, STOP -- investigate stochasticity before codifying

**If Condition A reproduces (~1.5/4), proceed to Condition B:**
- Protocol: Same prompt + same builder prompt + 25-line threshold appendix (exactly as specified in the Q20 protocol, Appendix A)
- Evaluation: 2-auditor quick PA. Plus: measure sub-perceptual CSS percentage (the most informative secondary metric)
- Cost: ~2-3 hours, ~8 agent invocations
- Decision rules:
  - If PA-05 >= 2.5/4 AND sub-perceptual < 5%: Thresholds work. Consider slimming the recipe.
  - If PA-05 < 2.0/4 AND sub-perceptual > 15%: Thresholds ignored. Recipe format confirmed essential.
  - If PA-05 < 2.0/4 AND sub-perceptual < 5%: Thresholds enforced but composition missing. Recipe's SEQUENCING is the key.
  - Anything else: Inconclusive. Not worth pursuing further under ALWAYS FLAGSHIP.

**Total cost of minimal Q20:** 4-6 hours, ~16 agent invocations. Down from 8-10 hours and ~44 invocations. Drops the double-run (accepts n=1) and uses lightweight PA (2 auditors instead of 9). Acceptable because the result has low actionable impact on PV2 under ALWAYS FLAGSHIP.

### 7.3 What to Drop from the Full Protocol

| Protocol Element | Full Q20 | Minimal Q20 | Reason to Drop |
|-----------------|----------|-------------|----------------|
| n=2 per condition | Yes | No (n=1) | Low stakes; n=1 provides sufficient signal |
| Mode 4 PA (9 auditors) | Yes | No (2 auditors) | Only need coarse PA-05 (1.5 vs 2.5), not fine-grained |
| Counterbalanced ordering | A-B-B-A | A then B | No need for order effects control at n=1 |
| Secondary metrics | All 6 | Only sub-perceptual % | The one metric that discriminates between scenarios 6 and 7 |
| Blind PA evaluation | Yes | Still yes | This is cheap and essential for validity |
| Threshold gate runner | Both conditions | Both conditions | Also cheap and essential |

---

## 8. DOES Q20 BECOME MORE OR LESS IMPORTANT WITH ALWAYS FLAGSHIP?

### 8.1 Less Important for Pipeline Design

ALWAYS FLAGSHIP means the recipe exists for every page. Q20's primary purpose -- determining whether the recipe is necessary -- is moot. The recipe is deployed regardless. Whether thresholds alone would have sufficed for Middle-tier pages is an academic question when Middle-tier pages don't exist.

### 8.2 Slightly More Important for Recipe Optimization

Under ALWAYS FLAGSHIP, every page pays the full cost (240-400 minutes). If Q20 reveals that thresholds are the high-leverage intervention, the recipe could potentially be SLIMMED for faster Flagship builds without quality loss. A 400-line recipe executing in 150 minutes vs a 650-line recipe executing in 240 minutes -- with the same PA-05 outcome -- would be a meaningful efficiency gain when every page is Flagship.

But this optimization is speculative and depends on Q20 producing Scenario 1 (thresholds sufficient), which the corpus considers unlikely: "If thresholds alone produce PA-05 >= 2.5/4" is described as "the most consequential positive result" precisely because it would be surprising (q20-experiment-protocol.md, Section 10.3).

### 8.3 Net Assessment

**Q20 is LESS important under ALWAYS FLAGSHIP.** The savings it could enable are gone. The theoretical knowledge it provides is interesting but doesn't change the architecture. The one high-value scenario (Scenario 5: control fails to reproduce) can be tested more cheaply by running just Condition A.

---

## 9. CROSS-REFERENCE: Q20 PROTOCOL vs PV2 ARCHITECTURE DIAGRAM

### 9.1 Alignments

The PV2-ARCHITECTURE-DIAGRAM and q20-experiment-protocol.md share these assumptions:

1. **Two-layer verification is essential.** The diagram shows programmatic gates + perceptual audit. Q20 uses both for evaluation. Agreement is complete.

2. **Perception thresholds are a necessary component.** The diagram embeds them in the gate runner (SC-09: background delta >= 15 RGB, SC-10: stacked gap <= 108px, SC-11: font-size zones >= 2px). Q20 tests whether they are SUFFICIENT. No disagreement -- Q20 asks a question the architecture assumes it knows the answer to.

3. **Recipe format is the builder's interface.** The diagram routes the builder to operational-recipe.md (~650 lines, recipe format). Q20 tests whether recipe format is necessary or whether thresholds grafted onto checklist format suffice.

4. **Opus builder is non-negotiable.** Q20 specifies "claude-opus-4-6 for all builders" (Section 4.2). The diagram specifies "1 Opus agent" for all tiers above Floor. Agreement.

### 9.2 Tensions

1. **Q20 tests a configuration PV2 would never deploy.** Q20's Condition B (checklist + thresholds) is a configuration that exists nowhere in the PV2 architecture. PV2 always delivers thresholds via recipe format. Q20 tests the value of a format the architecture has already rejected. This is academically interesting but practically irrelevant.

2. **Q20's threshold values differ from PV2's.** Q20 uses 10 RGB (from the original builder prompt context). PV2 uses 15 RGB (from the architecture document's resolved contradiction C4, which chose the more conservative value from File 08). If Q20 runs with 10 RGB and the architecture uses 15 RGB, the results aren't directly comparable.

3. **Q20 replicates the zero-communication topology.** Q20 specifies "zero SendMessage calls, file-bus only" (Section 4.3) to match the flagship's conditions. But PV2's architecture explicitly fixes the communication protocol (agents can message each other). If Q20 shows thresholds fail under zero-communication, that might be a communication problem, not a threshold problem.

4. **Q20's cost estimate assumes tier routing.** The "40-80 hours saved" calculation (Section 12) assumes saving recipe engineering for multiple tiers. Under ALWAYS FLAGSHIP, the recipe is written once for the only tier that exists. The savings collapse to ~0-10 hours of potential recipe trimming.

### 9.3 The Threshold Value Discrepancy

This deserves special attention. The q20-experiment-protocol.md specifies (Appendix A):
- Background color: >= 10 RGB
- Total section gap: <= 120px

The PV2 architecture resolves these differently (Section 6):
- Background color: >= 15 RGB (SC-09)
- Stacked gap: <= 192px gate / 120px target (SC-10)

The architecture diagram follows the more conservative values. If Q20 runs with the protocol's values (10 RGB), and PV2 uses 15 RGB, the experiment tests a WEAKER version of the thresholds than PV2 deploys. A failure at 10 RGB doesn't necessarily mean failure at 15 RGB. This further reduces Q20's relevance to PV2's actual configuration.

---

## 10. RECOMMENDATIONS

### 10.1 Primary Recommendation: Skip Q20, Codify Now

Under ALWAYS FLAGSHIP:
- Q20's expected information value is LOW (5 of 7 scenarios produce zero actionable change)
- Q20's expected cost savings are ZERO (the recipe simplification it could enable has no target tier)
- Gate 6 (meta:output ratio) demands codification as the NEXT action
- A validation build using PV2 provides more directly useful information than Q20

### 10.2 If Intellectual Curiosity Demands an Experiment

Run the **Condition A Replication Only** (~2-3 hours):
- Does the flagship failure reproduce at 1.5/4?
- If yes: corpus is valid. Codify with confidence.
- If no: investigate stochasticity. This changes everything, regardless of ALWAYS FLAGSHIP.

This is 1/4 the cost of the full Q20 and answers the highest-value question.

### 10.3 If Recipe Optimization Is a Future Goal

After codification and 3-5 validation builds, consider a MODIFIED experiment:

**Post-Codification Q20 Variant:**
Instead of testing thresholds-alone vs. checklist, test:
- Condition A: Full PV2 recipe (650 lines) -> Flagship build -> PA
- Condition B: Slim PV2 recipe (400 lines: structure + thresholds, less CSS specificity) -> Flagship build -> PA

This directly tests whether the recipe can be trimmed for faster Flagship builds WITHOUT losing quality. It uses PV2's actual configuration (recipe format, 15 RGB thresholds, Opus builder, agent communication enabled) rather than the dead configuration Q20 tests (checklist format, 10 RGB, zero communication).

### 10.4 Decision Tree

```
ALWAYS FLAGSHIP declared
        |
        v
Q: Is there doubt about corpus validity?
        |
  YES --+-> Run Condition A only (~2 hours)
  |         |
  |         +-> If 1.5/4: Corpus valid. Codify.
  |         +-> If >= 2.0/4: INVESTIGATE before codifying.
  |
  NO ---+-> CODIFY NOW (skip Q20 entirely)
            |
            +-> After 3-5 validation builds:
                |
                +-> PA-05 consistently >= 3/4? -> Recipe works. Consider slim variant.
                +-> PA-05 inconsistent? -> Investigate. THEN run modified Q20 variant.
```

---

## 11. THE META-QUESTION: IS Q20 ITSELF A COMPLEXITY RATCHET?

The q20-experiment-protocol.md is 640 lines long. It specifies 44+ agent invocations, 4 builds, 2 appendices, a 7-scenario interpretation matrix, and a 3-page confound analysis. It is a beautifully designed experiment.

It is also the exact kind of meta-infrastructure the anti-reproduction protocol (Gate 6) was designed to prevent. The protocol ABOUT whether to build PV2 is nearly half the size of PV2 itself (640 vs ~1,605 lines). Under ALWAYS FLAGSHIP, its expected ROI has dropped from "strongly positive" to "marginal at best."

The q20-experiment-protocol.md itself warns: "if meta-output exceeds 20:1, pipeline is feeding on itself" (MEMORY.md). The corpus is already at infinity:1. Q20 would add ~640 lines of meta + 4-10 hours of execution for information that changes 0-1 things about PV2.

The most productive thing this protocol can do now is NOT be executed -- it should be filed as "available if needed" and deferred until validation builds expose an actual question that Q20's methodology could answer.

---

## 12. SUMMARY TABLE

| Question | Answer |
|----------|--------|
| If Q20 shows thresholds fix everything, what does PV2 simplify to? | Slim recipe (~400 lines) with thresholds as the core; compositional phases become builder-directed rather than recipe-specified |
| If thresholds DON'T fix it, what does that confirm? | Recipe format + composition sequencing are essential (already assumed by PV2) |
| Should Q20 run BEFORE codification? | **NO** -- Gate 6 demands codification next; Q20's savings are unavailable under ALWAYS FLAGSHIP |
| With ALWAYS FLAGSHIP, is Q20 more or less important? | **LESS** -- primary savings mechanism (skip recipe for Middle tier) is unavailable |
| What is the minimal Q20? | Condition A only (replication check), 2 PA auditors, ~2-3 hours, ~8 agents |
| What experiment SHOULD run instead? | Post-codification validation build using PV2; then optionally a slim-vs-full recipe comparison |

---

**END OF REPORT**

**Document statistics:**
- Sections: 12
- Cross-references to architecture diagram: 14
- Cross-references to Q20 protocol: 23
- Scenarios analyzed: 7 (all from Q20 protocol)
- Actionable value assessed: 5/7 scenarios = zero change to PV2
- Primary recommendation: Skip Q20, codify now
- Alternative: Condition A only (~2-3 hours) if corpus validity in doubt
