# Open Crack Coverage Analysis — Convergence Fixes vs Remaining Vulnerabilities

**Author:** Opus open-crack-analyst agent
**Date:** 2026-02-25
**Scope:** Do the 28 convergence fixes (iteration-focused) accidentally help or hurt the 10 open crack dimensions?
**Sources:** 08-MASTER-FIX-CHECKLIST.md (28 fixes), crack-dimensions.md (14 dims), 01-crack-taxonomy.md (detailed), 06-ROOT-CAUSE-SYNTHESIS.md (root causes)

---

## Executive Summary

The 28 convergence fixes are designed for ONE problem: making iteration a first-class citizen. They were NOT designed to address the 10 remaining open cracks. Nevertheless:

- **3 cracks receive meaningful indirect help** (Crack #2, #8, #13)
- **2 cracks are actively WORSENED** (Crack #5, #14)
- **5 cracks are essentially untouched** (Crack #6, #9, #10, #11, #12)
- **Net impact on the overall crack surface: slightly negative.** The convergence fixes add ~200 net lines across 8 files, increasing both attention load (Crack #5) and system complexity (Crack #14), while only 3 of the 10 open cracks receive any benefit.

The uncomfortable conclusion: the convergence autopsy solved the iteration problem but did NOT address the structural enforcement gap that the root cause synthesis identified as THE root cause ("the pipeline specifies 885 items but enforces 62"). Iteration without enforcement means iterating toward the same voluntary-compliance ceiling.

---

## Part 1: "Barely Touched" Cracks

### Crack #5: Attention Decay (Position Effect)

**Current status after v4:** MITIGATED. Recipe format + file ceilings (<800 builder, <1200 orchestrator).

**Convergence fixes that HELP:**
- **FIX-08** (BEFORE/DURING/AFTER restructuring): The AFTER section uses ALL-CAPS formatting and ">>>" triple-arrow emphasis to fight positional decay of the most critical instruction ("return to Phase 3"). This is an attention-design technique, not a systemic fix, but it directly addresses the Step 5 salience failure. **Marginal help.**
- **FIX-15** (Move REFINE to execution sections): Repositions the REFINE protocol from Section 7 (classification) to Section 6.5 (execution flow). This fights attention decay by placing the iteration instruction IN the reading path rather than after it. **Moderate help for the REFINE protocol specifically.**

**Convergence fixes that HURT:**
- **ALL 28 FIXES collectively**: The checklist adds ~200 net lines across 8 files. The builder brief is not directly affected (the fixes target orchestrator/manifest/tracker), BUT the orchestrator's input grows. The orchestrator already holds ~4,650 lines at ~72% compliance. Adding ~150 lines to orchestrator-facing files (FIX-08 +24 lines, FIX-09 +6, FIX-11 +8, FIX-12 +12, FIX-13 +18, FIX-14 +14, FIX-15 +5, FIX-16 +2) pushes the orchestrator to ~4,800 lines. At 72% compliance, the new content is processed at ~72% -- meaning 28% of the NEW iteration instructions will themselves be dropped by attention decay. The pipeline is adding iteration spec into a system whose core failure mode is "more spec = more drops."
- **FIX-06** (REFINE builder prompt template, +25 lines to MANIFEST): Adds to the longest file the orchestrator reads. The template itself is well-designed, but its POSITION at the end of Appendix E means it faces the strongest attention decay.
- **FIX-17** (Iteration Log, +18 lines to tracker): Adds tracking infrastructure to a tracker that already achieves only 67% fill rate. The Iteration Log is ~18 new fields. At 67% fill rate: ~6 unfilled. Those 6 unfilled fields are the iteration intelligence (PA-05 deltas, convergence trajectory) that FIX-13's decision function depends on.

**Net impact on Crack #5: SLIGHTLY WORSE.** FIX-15 helps for REFINE specifically, but the aggregate +200 lines worsens the root mechanism. The file ceilings from v4 are not updated to account for the new content.

**What would need to be DIFFERENT:** Every convergence fix that ADDS lines should REMOVE equal or greater lines elsewhere. The checklist violates the root cause synthesis's own finding ("every additional spec line has NEGATIVE marginal value past a threshold the pipeline crossed somewhere between 100 and 530 lines"). Specifically: FIX-08 adds 30 lines but could replace 6 + remove 20 lines of redundant stop-signal language; FIX-17 adds 18 tracker fields but could delete 18 of the existing low-value tracker fields.

**NEW fix needed:** **Attention-budget accounting rule.** Before implementing ANY convergence fix, compute: (a) lines added to orchestrator-facing files, (b) lines removed from orchestrator-facing files. If net positive, identify removable content of equal size. Apply a hard cap: orchestrator input must not exceed 4,500 lines after convergence implementation. This forces trade-offs instead of accumulation.

---

### Crack #6: Cross-File Reference Rot

**Current status after v4:** PARTIALLY CLOSED. Auxiliary Prompt Gate 1 (reference integrity scan).

**Convergence fixes that HELP:**
- **FIX-07** (iteration file naming convention): Establishes a predictable naming pattern (`*-refine.md`, `*-refine-2.md`). This PREVENTS one specific type of reference rot: iteration artifacts with ad-hoc names that other specs can't anticipate. **Marginal help** -- prevents NEW rot but doesn't address EXISTING rot.
- **FIX-19** (post-REFINE completion gate): References specific file patterns (`*-refine.md`). This creates a new cross-file reference -- but because FIX-07 defines the naming convention first, the reference is born aligned. **Neutral to marginal help.**

**Convergence fixes that HURT:**
- **FIX-15** (move REFINE protocol): Creates a new Section 6.5 in the orchestrator. Every existing reference to "REFINE protocol (Section 7)" is now stale. The manifest, SKILL.md, PA weaver, and orchestrator itself all reference "Section 7" for the REFINE protocol. FIX-15 does NOT include a cross-reference update plan. **DIRECTLY WORSENS Crack #6** by introducing the exact mechanism (file restructuring without reference updates) that the crack describes.
- **FIX-24, FIX-25, FIX-26** (new gates GR-70, GR-75, GR-78): Add 3 new gate IDs to the system. The gate-manifest.json, gate-runner-spec.md, and orchestrator all need to reference these consistently. The GR-50 collision (taxonomy entry) happened exactly this way -- new gates added without a registry check. The convergence checklist specifies the gate numbers but does NOT verify they don't collide with existing assignments.

**Net impact on Crack #6: SLIGHTLY WORSE.** The fixes create new cross-file references (Section 6.5, three new gate IDs, iteration file naming) without a systematic reference integrity check. FIX-15 in particular introduces the canonical reference rot pattern.

**What would need to be DIFFERENT:** Every convergence fix that creates a new section, gate ID, or file naming convention should include a "Reference Impact" field listing every file that references the changed entity. FIX-15 should explicitly list: "Update references in: MANIFEST.md Step 11, SKILL.md, pa-weaver.md, experiment-protocol.md." FIX-24/25/26 should verify gate ID uniqueness against the full gate-manifest.json before assignment.

**NEW fix needed:** **Reference impact checklist embedded in the implementation order.** After each Wave (A, B, C, D), run the Auxiliary Prompt Gate 1 (reference integrity scan) to catch cross-file reference breakage introduced by the wave itself. This costs ~5 minutes per wave and catches rot AT INTRODUCTION rather than at next-build discovery.

---

### Crack #10: Orchestrator Opacity

**Current status after v4:** PARTIALLY CLOSED. 5 binary self-assessment questions (NEW-03).

**Convergence fixes that HELP:**
- **FIX-14** (RESIDUAL artifact): Requires the builder to document trade-offs and decisions. This creates a tiny window into ONE agent's decision-making. But the builder is NOT the orchestrator. **No help for Crack #10 specifically.**
- **FIX-17** (Iteration Log with "Orchestrator Observations" section): The free-text notes field ("things that seemed off") is the ONLY convergence fix that directly addresses orchestrator opacity. If the orchestrator actually fills this in, it creates a minimal decision log. **Marginal help** -- but the tracker already achieves only 67% fill rate, and free-text fields are the LEAST likely to be filled (they require judgment, not checkbox-ticking).
- **FIX-22** (Finding Status Map): Forces the Weaver to assess what changed between passes. This is an indirect audit of orchestrator decisions (did the orchestrator correctly route fixes? did the REFINE builder receive the right inputs?). **Marginal indirect help.**

**Convergence fixes that HURT:**
- **FIX-13** (iteration decision function): Gives the orchestrator a NEW high-stakes decision point (continue REFINE or halt?) with no external verification. The orchestrator can now decide "diminishing returns, delta < 0.3" and stop -- but who verifies the delta was computed correctly? This ADDS to orchestrator power without adding accountability. **Slight worsening** -- one more opaque orchestrator decision.
- **FIX-08** (BEFORE/DURING/AFTER): The "BEFORE REFINE" section says "Re-read this section now. Do not execute from memory." This is an instruction that the orchestrator self-enforces. If the orchestrator doesn't re-read, nobody knows. **Neutral** -- it's the right instruction but relies on the opacity it's trying to penetrate.

**Net impact on Crack #10: NEUTRAL to SLIGHTLY WORSE.** FIX-17's observation field is a tiny positive. FIX-13's new decision authority is a tiny negative. The core problem (orchestrator is player + referee with no external audit) is completely unaddressed. None of the 28 fixes create an orchestrator accountability mechanism.

**What would need to be DIFFERENT:** FIX-13 should require the orchestrator to RECORD its delta computation in the Iteration Log in a structured format (`PA-05(N-1)=___, PA-05(N)=___, delta=___, decision=___`) rather than computing silently. FIX-19 (post-REFINE completion gate) is a structural check, but it checks for FILE EXISTENCE, not for orchestrator DECISION QUALITY. The check should also verify: "If verdict was REFINE and no `-refine` files exist, WHY? Orchestrator must record: 'Skipped REFINE because: ___'."

**NEW fix needed:** **Orchestrator decision journal.** A structured 5-field log entry after every major orchestrator decision:

| Decision | Options Considered | Choice Made | Evidence Used | What Could Prove This Wrong |
|----------|-------------------|-------------|---------------|---------------------------|

This is NOT a tracker (checkbox). It's a journal (structured free-text). It makes the orchestrator's reasoning auditable by the user and by future retrospectives. The 5 binary self-assessment questions from v4 (NEW-03) are a start, but they assess compliance, not reasoning quality.

---

### Crack #11: Mode Sensitivity

**Current status after v4:** MITIGATED. GR-33/34 mode detection (promoted to REQUIRED after B-01).

**Convergence fixes that HELP:**
- **FIX-28** (reclassify REFINE as validated, not experimental): This is a mode sensitivity fix -- it distinguishes "standard REFINE iteration" from "3-pass Compositional Critic." The current conflation treats two different modes (validated vs experimental) as one category. **Small help** for THIS specific mode confusion.

**Convergence fixes that HURT:**
- **None directly.** The convergence fixes are mode-agnostic (they apply to all content types and execution modes). However, this is itself a problem: the iteration budget (FIX-02: "up to 1 REBUILD + 2 REFINE") does not adjust for mode. An APPLIED-mode page (simpler, token-based) might need 0 REFINE passes. A COMPOSED-mode page (complex, metaphor-driven) might need 3. A single budget for all modes is mode-insensitive by design.

**Net impact on Crack #11: NEUTRAL.** The convergence fixes do not interact with mode sensitivity in any meaningful way. GR-33/34 remain the primary defense, and ADVISORY gates remain unexecuted.

**What would need to be DIFFERENT:** FIX-02 (iteration budget) should include mode-sensitive budgets: "APPLIED: 0-1 REFINE. COMPOSED: 1-2 REFINE. Budget scales with compositional complexity." FIX-13 (iteration decision function) should use mode-specific convergence criteria: an APPLIED page converges at PA-05 3.0; a COMPOSED page should not stop below 3.5.

**NEW fix needed:** **Mode-specific iteration thresholds.** The iteration budget and convergence criteria should be parameterized by mode (APPLIED vs COMPOSED). This requires GR-33/34 to actually execute (promoted to REQUIRED in v4's B-01), and the iteration decision function to consume their output. Without this, the pipeline treats a 50-line token-only page and a 2,000-line metaphor-driven composition as identical for iteration purposes.

---

### Crack #13: Feedback Loop Absence

**Current status after v4:** MITIGATED. REFINE cycle + cross-run FIX-TRACKER (NEW-02).

**Convergence fixes that HELP:**
- **FIX-01, FIX-02, FIX-05, FIX-08, FIX-13** (the entire iteration activation cluster): These ARE the feedback loop. The convergence autopsy's primary contribution is transforming the pipeline from feed-forward to iterative. REFINE-as-action-trigger (FIX-05) + iteration budget (FIX-02) + decision function (FIX-13) + BEFORE/DURING/AFTER protocol (FIX-08) = a structured feedback loop that did not previously exist in operational terms. **MAJOR help -- this is the single biggest crack-closure from the convergence autopsy.**
- **FIX-22** (Finding Status Map): Creates cross-cycle finding lifecycle tracking. Previous findings are assessed as FIXED/IMPROVED/UNCHANGED/REGRESSED. This is the most structurally complete feedback mechanism in the convergence checklist. **Significant help.**
- **FIX-12** (Known REFINE Outcomes evidence table): Creates cross-run learning -- each run's REFINE results are recorded and available to future orchestrators. This is a primitive form of pipeline learning. **Moderate help.**
- **FIX-14** (RESIDUAL artifact): Captures builder knowledge that would otherwise die with the agent and routes it to the next builder. This is intra-run feedback (builder-to-builder). **Moderate help.**
- **FIX-24** (GR-70 PA-05 Non-Regression): Provides a binary signal that the feedback loop is working (quality improved) or broken (quality regressed). **Moderate help.**
- **FIX-27** (Weaver iteration routing): Routes the Finding Status Map to the Weaver while preserving PA auditor isolation. This allows cross-cycle assessment without contaminating fresh-eyes auditing. **Moderate help.**

**Convergence fixes that HURT:**
- **None directly.** The convergence fixes are THE solution to Crack #13. However, there's a scope limitation: the feedback loop covers PA-05 (perceptual quality) but NOT the root-cause diagnosis chain (WHY something failed). The taxonomy entry for Crack #13 specifically calls out: "PA auditors discover DELIGHT 4/10 (no hover states). This traces to the Brief Assembler dropping Step 2.7. But the PA finding is expressed in perceptual language, not traced to 'brief template lacks hover vocabulary slot.'" The convergence fixes iterate on PERCEPTUAL feedback but do not add ROOT-CAUSE feedback.

**Net impact on Crack #13: SIGNIFICANTLY IMPROVED.** This is the crack most directly addressed by the convergence autopsy. The feed-forward system gains a structured feedback loop with cross-cycle tracking, quality regression detection, and knowledge preservation. The remaining gap is root-cause diagnosis: the loop tells you WHAT to fix but not WHERE in the pipeline the cause lives.

**What would need to be DIFFERENT:** FIX-22 (Finding Status Map) should include a "Suspected Upstream Cause" column:

| Pass N-1 Finding | Expected Status | Actual Status | Suspected Cause |
|-----------------|----------------|---------------|-----------------|
| No hover states | FIXED | UNCHANGED | Brief template lacks hover slot |

This transforms the feedback from "what changed" to "what caused what didn't change." The orchestrator can then address the upstream cause, not just the downstream symptom.

**NEW fix needed:** **Root-cause tracing protocol for persistent findings.** When a finding appears in 2+ consecutive passes despite REFINE, the Weaver flags it as PERSISTENT and the orchestrator traces it to the upstream pipeline stage that produced the deficiency. This requires the orchestrator to read the finding, identify the relevant pipeline artifact (brief? recipe? value table?), and record where the information was lost. This closes the "perceptual feedback without root-cause diagnosis" gap.

---

### Crack #14: Complexity Invisibility

**Current status after v4:** MITIGATED. Tracker reduction + GR-48 automatic + file ceilings.

**Convergence fixes that HELP:**
- **FIX-25** (GR-75 Iteration Counter): A simple gate that enforces the iteration budget. Its VALUE for Crack #14 is that it is LOW-COMPLEXITY -- a 5-line check that can't become invisible because its failure HALTS the pipeline. **Marginal help** (one well-designed gate in a sea of complexity).
- **FIX-24** (GR-70 PA-05 Non-Regression): Same pattern -- simple, binary, pipeline-halting on failure. The simplicity itself fights invisibility. **Marginal help.**

**Convergence fixes that HURT:**
- **ALL 28 FIXES collectively**: The net effect of 28 fixes is +~200 lines of spec, +3 new gates (GR-70, GR-75, GR-78), +1 new tracker section (Iteration Log), +1 new weaver output (Finding Status Map), +1 new file naming convention, +1 new prompt template, +1 new decision function. Total new ITEMS to track: ~15-20. At the current scale (885 items, 42 gates, 375 tracker fields), this pushes to ~905 items, 45 gates, ~393 tracker fields. Each new item is a new thing that can become invisible in the mass.
- **FIX-22** (Finding Status Map): Adds a new output that the Weaver must produce AND the orchestrator must consume AND the PA deployment must route correctly. Three new responsibilities for three different agents. If any of the three fails, the map doesn't reach its destination -- and failure is INVISIBLE because the map didn't exist before.
- **FIX-17** (Iteration Log, 11 columns): Adds 11 new columns to a tracker that already has too many. The Root Cause Synthesis (Fix 8) specifically recommended reducing the tracker to ~50 fields. Adding 11 new fields before reducing moves in the opposite direction.

**Net impact on Crack #14: WORSE.** The convergence fixes increase system complexity by ~15-20 trackable items without any corresponding reduction. The 2 simple gates (GR-70, GR-75) are well-designed for visibility, but the remaining 26 fixes add complexity that feeds the exact mechanism Crack #14 describes: "too many items to audit, gaps become invisible."

**What would need to be DIFFERENT:** The convergence checklist should include a "Complexity Impact Statement" for each fix: "This fix adds N trackable items. To maintain net-zero complexity, the following N items are REMOVED: [list]." Without this, the convergence fixes replicate the pattern they diagnose (adding tracking for the sake of tracking, feeding the defense paradox).

**NEW fix needed:** **Complexity ledger.** A living document that tracks: total items across all pipeline artifacts, total gates, total tracker fields, total cross-file references. Every pipeline modification must update the ledger. If total items exceed a threshold (e.g., 900), the modification must be paired with a removal of equal scope. This is the only structural defense against unbounded complexity growth.

---

## Part 2: "Better But Not Solved" Cracks

### Crack #2: Compression Loss at Junctions

**Current status after v4:** PARTIALLY CLOSED. BV-05 compression ratio + keyword scan (brief-level only).

**Convergence fixes that HELP:**
- **FIX-14** (RESIDUAL artifact): The builder's "What I would change next" captures compression losses that the builder NOTICED but couldn't address -- e.g., "The brief didn't include hover vocabulary, I would add interactive states." If the RESIDUAL mentions missing content, it's an indirect signal that compression lost something. **Marginal indirect help.**
- **FIX-22** (Finding Status Map): If compression loss causes a perceptual deficiency (e.g., no hover states = low DELIGHT), the Finding Status Map will track whether REFINE addressed it. This doesn't fix the compression, but it makes the SYMPTOM visible across cycles. **Marginal indirect help.**
- The entire iteration loop (FIX-01/02/05/08/13): If compression loss causes PA-05 < SHIP, the REFINE cycle gives a second chance to address the symptom. The REFINE builder receives the artistic impression, which may describe the missing quality. But the REFINE builder still works from the SAME brief that had the compression loss -- it doesn't get the original uncompressed content. **Limited structural help.**

**Convergence fixes that HURT:**
- **FIX-06** (REFINE builder prompt template): Explicitly says "You do NOT receive: gate scores, threshold numbers, diagnostic language." This INFORMATION ISOLATION is correct for compositional quality but means the REFINE builder cannot be told "the brief was missing hover vocabulary." The isolation that protects compositional mode also prevents root-cause information from reaching the builder. **Slight worsening** of the ability to address compression-loss effects during REFINE.

**Net impact on Crack #2: MARGINALLY POSITIVE.** The iteration loop gives a second chance to address symptoms of compression loss, and the Finding Status Map tracks whether the symptoms persist. But the ROOT MECHANISM (information lost during compression) is untouched. The REFINE builder works from the same brief, so it faces the same information deficit. The convergence fixes address the pipeline's inability to ITERATE, not its inability to PRESERVE information through junctions.

**What would need to be DIFFERENT:** The REFINE protocol should include an optional "Content Recovery" step: if the Weaver identifies missing content categories (e.g., "no hover states"), the orchestrator checks the original recipe for the missing content and adds a FOCUSED supplement to the REFINE builder's input. This breaks information isolation ONLY for diagnosed deficiencies and only with recipe-sourced content (not gate data).

**NEW fix needed:** **REFINE content supplement protocol.** When the Weaver identifies missing content categories:
1. Orchestrator traces to recipe step (e.g., Step 2.7 hover vocabulary)
2. Extracts the RECIPE content (not gate data, not thresholds)
3. Provides to REFINE builder as "Content the previous builder missed: [recipe excerpt]"
4. This is a targeted information recovery, not a violation of compositional isolation

---

### Crack #8: Soft Language

**Current status after v4:** CLOSED (v4). Auxiliary Prompt Audit D (soft language scan); BV-03 verb ratio.

**Wait -- crack-dimensions.md says CLOSED (v4), but the team lead listed this as "better but not solved."** Reading the taxonomy more carefully: BV-03 checks the BRIEF for soft language, but the broader pipeline still uses soft language extensively ("target 8+", "STRONG recommendation", "EXPERIMENTAL"). The defense is brief-level only, not pipeline-wide.

**Convergence fixes that HELP:**
- **FIX-05** (rewrite "OUTPUT LABELS" to "ACTION TRIGGERS"): Directly converts soft language (labels = passive) to hard language (triggers = active) for REFINE/REBUILD. **Helps for this specific phrase.**
- **FIX-09** (remove "Single-pass = DEFAULT"): Removes language that implicitly permits non-iteration. The word "default" is soft -- it implies alternatives exist but aren't recommended. Replacing with "ITERATIVE-TO-CONVERGENCE" is harder language. **Helps for this specific phrase.**
- **FIX-01** (rewrite "pipeline terminates"): "Terminates" is absolute language that creates soft permission to stop. Replacing with "pipeline is NOT complete until verdict is SHIP or SHIP WITH FIXES" is binary. **Helps for this specific phrase.**
- **FIX-28** (reclassify REFINE as validated): "EXPERIMENTAL" is soft language that permits non-execution. Reclassifying to "validated operational procedure" is harder. **Helps for this specific phrase.**

**Convergence fixes that HURT:**
- **FIX-02** (iteration budget): Replaces "Maximum iterations: 1 REBUILD + 1 REFINE" with "Iteration budget: up to 1 REBUILD + 2 REFINE passes." The phrase "up to" is itself soft language -- it permits 0. **Slight softening** in the new text.
- **FIX-10** (reframe cost as investment): "Each REFINE cycle adds ~45-60 min and historically improves PA-05 by +0.5 to +1.5 points." The range "+0.5 to +1.5" is factual but reads as "maybe it works, maybe not." **Slight softening** of the evidence claim.

**Net impact on Crack #8: MODERATELY POSITIVE.** The convergence fixes convert several key pieces of soft language (OUTPUT LABELS, terminates, SINGLE-PASS, EXPERIMENTAL) to hard language. But they also introduce new soft phrases ("up to", improvement "ranges"). The fix is at the level of individual phrases, not a systematic soft-language audit across all convergence additions.

**What would need to be DIFFERENT:** Every convergence fix should be run through the BV-03 soft-language checker before implementation. If the NEW text contains "target," "aim for," "up to," "recommended," "consider," "should," or "may," it should be rewritten to binary language. Specifically: FIX-02 should say "Budget: 1 REBUILD + 2 REFINE passes" (not "up to").

**NEW fix needed:** **Pipeline-wide soft language audit.** Extend BV-03's verb ratio check beyond the brief to ALL agent-facing specs (orchestrator, MANIFEST, tracker, PA protocol). Every "target X" becomes "minimum X." Every "recommended" becomes "REQUIRED" or is deleted. Every "consider" becomes "execute." This is a one-time sweep that prevents the language from silently permitting non-compliance across the full pipeline surface area.

---

### Crack #9: Platform Variance

**Current status after v4:** CLOSED (v4). GR-61 + DPR correction before gates (B-07).

**Wait -- crack-dimensions.md says CLOSED (v4), but the team lead listed this as "better but not solved."** Reading the taxonomy: GR-61 DETECTS non-1.0 DPR, and B-07 mandates correction before gates. But the correction depends on the orchestrator applying `{ deviceScaleFactor: 1 }` -- which is a voluntary step. Detection is closed; correction is not enforced.

**Convergence fixes that HELP:**
- **FIX-11** (post-REFINE gate warning): Includes the phrase "GATES PASSED -- but gates verify IDENTITY and PERCEPTION PHYSICS only." This indirectly acknowledges that gate results may be unreliable (e.g., due to DPR), but does not specifically mention DPR. **Negligible help.**
- The iteration loop generally: If DPR causes false gate results that lead to a bad initial build, REFINE provides a second chance for the PA auditors (human-equivalent perception) to catch the problem that gates missed. But PA auditors also view screenshots that may be DPR-affected. **Negligible indirect help.**

**Convergence fixes that HURT:**
- **None directly.** The convergence fixes do not interact with DPR, viewport sizing, or platform environment.

**Net impact on Crack #9: NO CHANGE.** The convergence fixes are entirely orthogonal to platform variance. DPR correction, viewport configuration, and font rendering consistency are not addressed at all.

**What would need to be DIFFERENT:** FIX-24 (GR-70 PA-05 Non-Regression) should be sensitive to platform variance: if PA-05 regresses and gate results show DPR != 1.0, the regression may be a measurement artifact rather than a quality regression. GR-70 should cross-reference GR-61 DPR status before HALTing.

**NEW fix needed:** **DPR enforcement gate (pre-gate-runner).** Instead of relying on the orchestrator to apply DPR correction, the gate-runner-core.js should SELF-CORRECT: the first gate function checks and sets DPR to 1.0 before any other gate runs. This is a ~5-line code change that converts voluntary correction to structural enforcement. The code already exists (lines 1483-1510 of gate-runner-core.js) -- it just needs to run automatically, not be invoked voluntarily.

---

### Crack #12: Downstream Propagation Failure

**Current status after v4:** PARTIALLY CLOSED. GR-55 multi-coherence + GR-46/66 component count (post-build detection only).

**Convergence fixes that HELP:**
- The iteration loop (FIX-01/02/05/08/13): If downstream propagation failure causes PA-05 < SHIP (e.g., builder used 5 components instead of 8), the REFINE cycle gives a second chance. The REFINE builder receives artistic impression that may describe the missing richness ("too few visual breaks," "repetitive layouts"). **Moderate help -- iteration gives a second shot at the propagation target.**
- **FIX-20** (revision enhancement opportunities): Frames REFINE as compositional discovery rather than defect fixing. If the builder under-executed at edge boundaries, a fresh REFINE builder might invest differently. "A fresh builder finds relationships the first couldn't see." **Marginal help for the attention-priority-mismatch sub-mechanism.**
- **FIX-22** (Finding Status Map): Tracks whether propagation failures are addressed across cycles. If "weak edge transitions" appears in Pass 1 and persists in Pass 2, it's flagged as UNCHANGED -- making persistent propagation failure visible. **Moderate help for visibility.**

**Convergence fixes that HURT:**
- **FIX-06** (REFINE builder isolation): "You do NOT receive: gate scores, threshold numbers, diagnostic language." The REFINE builder cannot be told "component count is 5, target is 8." The isolation prevents direct communication of the propagation failure's measurement. **Slight worsening** -- the REFINE builder must infer the deficiency from artistic language.

**Net impact on Crack #12: MARGINALLY POSITIVE.** The iteration loop provides a second chance, and the Finding Status Map makes persistent failures visible. But the ROOT MECHANISM (soft requirements + attention priority mismatch) is untouched. "Target 8+" remains soft language. Edge boundaries remain less dramatic than center boundaries. The REFINE builder still faces the same brief with the same soft targets. Improvement is through COMPOSITIONAL rediscovery, not through structural enforcement of propagation.

**What would need to be DIFFERENT:** FIX-13 (iteration decision function) should include a PROPAGATION CHECK before each REFINE: "Count component types in HTML. If < 8, append to REFINE builder input: 'Current component count: N. The brief specifies minimum 8. Consider: [list of unused component types from library].'" This is targeted propagation recovery -- providing the SPECIFIC missing information, not gate data.

**NEW fix needed:** **Mid-pipeline propagation verification gate.** Run a lightweight check BETWEEN brief assembly and builder execution that verifies: (a) component count target is a number, not "target" language, (b) per-boundary channel minimums are numbers, not ranges, (c) every recipe step mentioned in the brief has an actionable instruction. This catches propagation failure BEFORE the builder starts, rather than detecting it post-build through PA.

---

## Part 3: Coverage Map

| Crack # | Dimension | Status After v4 | Convergence Fixes That Help | Convergence Fixes That Hurt | Net Impact | What's Still Missing |
|---------|-----------|-----------------|---------------------------|---------------------------|------------|---------------------|
| **5** | Attention Decay | MITIGATED | FIX-08 (emphasis formatting), FIX-15 (positional move) | ALL 28 collectively (+200 lines), FIX-06 (+25 to MANIFEST), FIX-17 (+18 tracker fields) | **SLIGHTLY WORSE** | Attention-budget accounting rule; line-add/line-remove parity; orchestrator input cap of 4,500 lines |
| **6** | Cross-File Reference Rot | PARTIALLY CLOSED | FIX-07 (naming convention prevents future rot), FIX-19 (born-aligned references) | FIX-15 (creates stale Section 7 refs), FIX-24/25/26 (3 new gate IDs without collision check) | **SLIGHTLY WORSE** | Reference Impact field per fix; post-wave Aux Prompt Gate 1 scan; gate ID collision check before assignment |
| **10** | Orchestrator Opacity | PARTIALLY CLOSED | FIX-17 (Orchestrator Observations field), FIX-22 (indirect audit via Finding Status Map) | FIX-13 (new opaque decision point), FIX-08 (self-enforcing re-read instruction) | **NEUTRAL** | Structured orchestrator decision journal; "Why did you skip REFINE?" forced recording; external audit mechanism |
| **11** | Mode Sensitivity | MITIGATED | FIX-28 (distinguishes REFINE from 3-pass experimental) | None directly; FIX-02 uses single budget for all modes | **NEUTRAL** | Mode-specific iteration budgets; mode-specific convergence criteria; GR-33/34 output consumed by decision function |
| **13** | Feedback Loop Absence | MITIGATED | FIX-01/02/05/08/13 (iteration = feedback loop), FIX-22 (Finding Status Map), FIX-12 (cross-run evidence), FIX-14 (RESIDUAL), FIX-24 (regression gate), FIX-27 (Weaver routing) | FIX-06 isolation prevents root-cause info reaching REFINE builder | **SIGNIFICANTLY IMPROVED** | Root-cause tracing protocol for persistent findings; Weaver "Suspected Upstream Cause" column |
| **14** | Complexity Invisibility | MITIGATED | FIX-24/25 (simple binary gates, hard to become invisible) | ALL 28 collectively (+15-20 new trackable items), FIX-22 (3-agent routing chain), FIX-17 (+11 tracker columns) | **WORSE** | Complexity ledger; net-zero complexity rule; Complexity Impact Statement per fix |
| **2** | Compression Loss | PARTIALLY CLOSED | FIX-14 (builder notices gaps), FIX-22 (symptom tracking), iteration loop (second chance) | FIX-06 (isolation prevents root-cause info in REFINE) | **MARGINALLY POSITIVE** | REFINE content supplement protocol; Weaver-diagnosed content recovery step |
| **8** | Soft Language | CLOSED (v4) brief-only | FIX-05 (ACTION TRIGGERS), FIX-09 (removes DEFAULT), FIX-01 (removes terminates), FIX-28 (removes EXPERIMENTAL) | FIX-02 ("up to"), FIX-10 (improvement "ranges") | **MODERATELY POSITIVE** | Pipeline-wide soft language audit; BV-03 extended to all agent-facing specs; convergence text run through soft-language checker |
| **9** | Platform Variance | CLOSED (v4) detection-only | None meaningful | None | **NO CHANGE** | DPR self-correction in gate-runner-core.js; GR-70 cross-references GR-61 DPR status |
| **12** | Downstream Propagation | PARTIALLY CLOSED | Iteration loop (second chance), FIX-20 (compositional rediscovery), FIX-22 (persistent failure visibility) | FIX-06 (isolation prevents measurement info) | **MARGINALLY POSITIVE** | Mid-pipeline propagation verification gate; REFINE propagation check; soft-to-hard target conversion |

---

## Part 4: Cross-Cutting Findings

### Finding 1: The convergence autopsy treats iteration as the solution, not enforcement

The root cause synthesis identifies THE root cause as "the pipeline specifies 885 items but enforces 62." The convergence autopsy's solution is "iterate until quality is good enough." But iteration without enforcement means repeating the same voluntary-compliance cycle. If the builder drops hover vocabulary in Pass 1 because the brief template lacks a slot, the REFINE builder working from the same brief will ALSO lack hover vocabulary. The iteration loop addresses COMPOSITIONAL quality (artistic arc, emotional resonance) but not SPECIFICATION COMPLIANCE (did every recipe step reach the final HTML?).

**Implication:** The convergence fixes will help PA-05 scores (compositional quality improves through REFINE) but will NOT help specification fidelity (the same recipe steps will be lost in every pass).

### Finding 2: 28 fixes is itself a Crack #14 event

The convergence checklist proposes 28 changes across 8 files. Implementing all 28 requires reading and modifying 8 files simultaneously, maintaining cross-references between fixes (FIX-13 depends on FIX-02 which depends on nothing; FIX-06 depends on FIX-14 which depends on nothing; etc.). The dependency graph has 7 independent roots and 4 chain dependencies. This is a complexity event that the pipeline's own analysis would flag: "42 gates at 71% coverage is worse than 30 gates at 95% coverage." By analogy: 28 fixes at 70% implementation fidelity is worse than 12 fixes at 95%.

**Implication:** The implementation waves (A, B, C, D) mitigate this, but each wave should verify the PREVIOUS wave's fidelity before proceeding. Wave B assumes Wave A is correct. If Wave A's FIX-09 missed one of 3 "Single-pass = DEFAULT" locations, Wave B's FIX-08 builds on a foundation that still has stop-signal language.

### Finding 3: REFINE information isolation is a double-edged sword for crack closure

FIX-06 establishes that the REFINE builder receives artistic impression, conviction artifact, and RESIDUAL -- but NOT gate scores, thresholds, or diagnostic language. This isolation is correct for compositional quality. But it also means:
- Crack #2 (compression loss): REFINE builder can't be told WHAT content was lost
- Crack #12 (propagation failure): REFINE builder can't be told WHICH targets were missed
- Crack #8 (soft language): REFINE builder works from the same soft-language brief

The REFINE builder is compositionally free but informationally starved. This tension is inherent -- breaking isolation would corrupt compositional mode. The resolution must come through UPSTREAM fixes (fix the brief, fix the template, fix the recipe) rather than DOWNSTREAM iteration.

### Finding 4: Three cracks have no convergence fix AND no v4 fix

- **Crack #10** (Orchestrator Opacity): 5 binary self-assessment questions (v4) + Orchestrator Observations field (convergence) = two weak defenses for the pipeline's largest blind spot.
- **Crack #11** (Mode Sensitivity): GR-33/34 promoted to REQUIRED (v4) but still unexecuted in practice. No convergence fix addresses mode sensitivity.
- **Crack #9** (Platform Variance): Detection but not correction. No convergence fix addresses DPR enforcement.

These three cracks persist across both v4 and convergence because they require ARCHITECTURAL changes (external orchestrator audit, mode-aware thresholds, self-correcting gate runner) rather than the LANGUAGE and STRUCTURAL changes that dominate both fix sets.

---

## Part 5: Recommendations

### Recommendation 1: Pair every convergence fix with a complexity offset

For each fix that adds N lines or N items, identify N lines or items to remove. The current convergence checklist is net-additive (~200 lines). A complexity-neutral version would add ~200 lines of iteration infrastructure and remove ~200 lines of:
- Redundant stop-signal language (being replaced, not just overridden)
- Low-value tracker fields (replaced by Iteration Log)
- Unused spec content (S(x) function never applied -- delete it instead of adding more spec alongside it)

### Recommendation 2: Run Auxiliary Prompt Gate 1 after each implementation wave

The convergence fixes create new cross-file references (Section 6.5, gate IDs GR-70/75/78, iteration file naming, Finding Status Map routing). Running the reference integrity scan after Waves A, B, C, D catches rot at introduction rather than at next-build discovery.

### Recommendation 3: Add a "Crack Impact Statement" to the convergence checklist

For each fix, assess: "Does this help, hurt, or not affect each of the 10 open cracks?" This would have caught FIX-15's reference rot risk, the collective attention decay impact, and the complexity growth problem BEFORE implementation.

### Recommendation 4: Address the 3 architecturally orphaned cracks separately

Cracks #9, #10, and #11 need dedicated fixes that are OUTSIDE the convergence autopsy's scope:
- **Crack #9:** Self-correcting DPR in gate-runner-core.js (~5 lines of code)
- **Crack #10:** Structured orchestrator decision journal (~15 lines of template)
- **Crack #11:** Mode-specific iteration parameters consumed by FIX-13 (~10 lines of conditional logic)

These 3 fixes (~30 lines total) would close or substantially improve the 3 most neglected cracks.

---

*Analysis complete. 10 open cracks assessed, 28 convergence fixes mapped, 10 new recommendations produced. The convergence autopsy is an excellent solution to the iteration problem that does not accidentally solve -- and slightly worsens -- the enforcement and complexity problems.*
