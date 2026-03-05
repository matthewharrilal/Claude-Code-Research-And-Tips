# Research-Checklist Contradiction Analysis

**Author:** Opus contradiction-finder agent
**Date:** 2026-02-25
**Method:** Every checklist item (A-01 through D-13) rated against findings from all 5 research reports. Rating = how the research supports or undermines the item AS WRITTEN.

---

## The Core Tension Restated

The checklist was written by 10 retrospective agents analyzing symptoms. The research reveals root causes. The danger: fixing symptoms with MORE SPECIFICATION when the research says SPECIFICATION VOLUME IS THE ROOT CAUSE.

Key research findings that create tension:
1. **Report 02 (LLM Limits):** Compliance degrades predictably with input volume. ~95% at <500 lines, ~72% at ~4,650 lines. Binary rules immune; judgment rules ~0%. The spec is eating itself.
2. **Report 05 (Cross-Iteration):** Middle-tier experiment scored PA-05 4/4 with 100 lines of spec. Current pipeline has 5x the spec, 7x the gates, 4x the agents -- and scores LOWER. More spec = less quality at the builder level.
3. **Report 03 (Architecture):** 94% of specifications have no enforcement mechanism. More specification without enforcement = more things to not follow.
4. **Report 04 (Execution):** Fixes stick when STRUCTURAL, fail when INSTRUCTIONAL. BV gates work (structural gateway). GR-48 fails (voluntary epilogue).
5. **Report 01 (Taxonomy):** Defense Paradox (Dimension 7) -- adding tracking creates new things that can be missed. 35 checklist items = ~450 lines added to pipeline artifacts. At 67% fill rate, this creates MORE gaps, not fewer.

---

## Phase A: Pipeline Artifact Fixes

### A-01: Add hover behavior vocabulary to brief template
**Rating: ALIGNED**

Research unanimously supports this. Report 01 (Dimension 1: Template Slot Absence) identifies the missing template slot as the root cause of hover loss. Report 05 confirms hover behavior has been absent from EVERY pipeline build -- 100% recurrence rate. This is a STRUCTURAL fix (adding a template slot) not an instructional fix (telling agents to remember hover). Report 03 specifically recommends "Add brief template slots for Step 2.7 and Step 3.4c" as HIGH PRIORITY item #1.

The research says: do this immediately. It has been proposed for 8+ days across 4 retrospectives and never applied.

---

### A-02: Add signal declaration instructions to brief template
**Rating: ALIGNED**

Same logic as A-01. Template slot absence (Report 01, Dimension 1). Structural fix. The adversarial downgrade from P0 to P1 is itself research-aligned -- signal declarations are not the dark zone's root cause (DPR opacity was). But the signal slot is still a real structural gap.

---

### A-03: Add dark-zone visibility pre-check before PA deployment
**Rating: TENSION**

**The original signal:** 11 agents were spawned to discover what 1 scroll-through would reveal. Expensive.

**What the research says:** Report 04 (Section 7) establishes that the orchestrator is already at ~4,650 lines of cognitive load and achieves ~72% compliance. Adding a new pre-check procedure is an INSTRUCTIONAL addition to the orchestrator's spec -- it depends on the orchestrator remembering to do it.

**The tension:** A-03 proposes solving an orchestrator attention problem (didn't notice the dark zone was invisible) by giving the orchestrator MORE instructions (add a scroll-through check). Report 02 says this approach has a predictable outcome: the instruction will be followed ~72% of the time.

**Research-informed alternative:** Make the pre-check a GATE (run after screenshots, before PA deployment). Report 04's "Tier 1: Do These First" explicitly recommends wrapper functions. A `checkVisibleContent(screenshotDir)` function that flags when >3 consecutive screenshots have <30% content would be structural, not instructional. Or: since Report 05 shows REFINE consistently rescues initial builds (+1.0 to +1.5 PA-05), ACCEPT that initial PA will sometimes find catastrophic defects and don't try to prevent it -- the cost of 9 auditors finding one issue is acceptable if REFINE fixes it reliably.

---

### A-04: Add edge-zone minimum channel count as numbered requirement
**Rating: TENSION**

**The original signal:** Builder delivered 2 channels at edge zones vs 3-4 specified. Edge zones got less attention.

**What the research says:** Report 02 (Section 3.3, Satisficing Gradient) shows this is a JUDGMENT rule problem. "3+ channels per boundary" achieved ~50% compliance. Converting it to a numbered list makes it clearer, but clarity is not the problem -- Report 02 Section 6.2 states explicitly: "Clarity is not the problem. Volume is the problem." The builder's attention tracked SALIENCE, not position (Section 4.2). The dramatic Z2->Z3 boundary got 7 channels because it was emphasized; edge boundaries were table rows.

**The tension:** A-04 proposes fixing a judgment compliance failure by reformatting the judgment rule (paragraph -> numbered list). Report 02 predicts this will have marginal impact: the builder satisfices at "good enough" regardless of format. The real fix is either (a) a binary gate that checks per-boundary channel counts post-hoc (Report 02 Section 7.4: "Convert Judgment Rules to Binary Where Possible"), or (b) accepting that edge boundaries will be under-invested and designing the builder recipe to front-load edge boundaries (fresh attention) before dramatic boundaries.

**Research-informed alternative:** Add GR-55 (multi-coherence channel count gate, already proposed in B-06) and make edge-boundary compliance a BINARY CHECK, not a formatted instruction. The instruction change in A-04 should still happen (it's cheap), but without GR-55, the research predicts it will be ~50-65% effective.

---

### A-05: Require component selection HTML comment before building
**Rating: TENSION**

**The original signal:** Builder used 5-6 components vs 8+ target. Run C had 18 components with LESS spec.

**What the research says:** Report 05 (R-02) identifies the critical insight: "Run C achieved 3x the component adoption with LESS spec. The regression correlates with pipeline complexity, not spec absence." The builder doesn't use components because it has too MANY instructions competing for attention, not because it lacks this particular instruction.

**The tension:** A-05 adds a new builder instruction (declare components before building) to solve a problem CAUSED by too many builder instructions. Report 02 shows the builder already has ~2,868 lines of input at ~80% judgment compliance. Adding a declaration step adds cognitive load. The HTML comment approach IS more structural than a prose target, but Report 05's data suggests the REAL fix is reducing builder input volume so the component target gets more attention share.

**Research-informed alternative:** (1) Add a binary gate GR-66 that counts component classes in the final HTML -- this is structural enforcement, not instruction. (2) Consider whether the builder input volume (currently ~2,868 lines) should be REDUCED to bring judgment compliance from ~80% back toward the Middle-tier's ~85-95%. The component regression may be a SYMPTOM of builder overload, not a cause.

---

### A-06: Fix Integrative Auditor timing to sequential after PAs
**Rating: ALIGNED**

Report 01 (Dimension 12: Downstream Propagation Failure) and Report 04 (Section 2.3) both identify this as a scheduling error that structurally prevented the Integrative's designed role. The fix is genuinely structural -- it changes WHEN something runs, not what instructions the agent reads. Report 04 notes this is an orchestrator protocol error, and the fix should be in the deployment spec.

One concern from the research: Report 02 notes the orchestrator is at ~4,650 lines and ~72% compliance. Adding timing instructions is instructional. Making the Integrative spawn DEPEND on PA report file existence (structural) would be more durable per Report 04's gateway pattern (Section 3).

---

### A-07: Distinguish rendering vs composition failures in weaver protocol
**Rating: ALIGNED**

Research supports this. Report 05 (Section 3) confirms REFINE is the most consistently positive quality intervention (+1.0 to +1.5 PA-05). The distinction between rendering failure (REFINE can fix) and composition failure (REBUILD needed) is important for preventing false REBUILD calls. This adds ~8 lines to a document the weaver already reads (~449 lines), keeping the weaver well within the <800 line effective compliance zone.

---

### A-08: Add explicit border width instruction to recipe
**Rating: TENSION**

**The original signal:** Non-integer borders in 4+ consecutive runs.

**What the research says:** Report 05 (R-01) classifies this as "PARTIALLY a gate measurement artifact (DPR), PARTIALLY a spec format problem." The current prohibition is prose ("borders must be integer pixels"). A-08 proposes adding a wrong/right example. Report 02 (Section 3.1) shows binary rules achieve 100% and judgment rules achieve ~0%. A wrong/right example is still a judgment rule -- the builder must REMEMBER to check it.

**The tension:** A-08 treats this as an instruction problem. Report 05 identifies the primary cause as DPR scaling (DPR 0.667 transforms 4px CSS into 2.67px computed). The instruction change may help at the margin, but B-07 (DPR correction before gates) addresses the ROOT cause. Without B-07, A-08 solves the spec format while the measurement artifact persists.

**Research-informed alternative:** Prioritize B-07 (DPR correction). Then assess whether border width violations persist at DPR 1.0. If they do, convert the prohibition into a gate (scan CSS for non-integer border values). A-08's wrong/right example is cheap and harmless but should not be treated as the fix.

---

### A-09: Codify REFINE builder isolation protocol
**Rating: ALIGNED**

Report 05 (Section 6) identifies REFINE as the proven quality mechanism. Report 04 shows the isolation is currently implicit. Codifying it prevents future orchestrators from accidentally contaminating the REFINE builder with gate data. At ~10 lines added to orchestrator spec, this is low-cost and genuinely protective.

---

### A-10: Compress Content Map appendix in brief template
**Rating: ALIGNED**

This actually REDUCES builder input volume, which is aligned with Report 02's central finding (compliance degrades with volume). Saving ~40-50 lines from the brief frees attention budget for higher-value content.

---

### A-11: Confirm worked examples routing in MANIFEST
**Rating: TENSION**

**The original signal:** Worked examples routing was UNCERTAIN.

**What the research says:** Report 03 (Section 5) identifies 4 files with UNCERTAIN routing status. Report 02 shows the orchestrator is already at ~4,650 lines. Adding a tracker checkbox is a VOLUNTARY action with no enforcement -- Report 04 (Section 2.2) documents that ALL tracker additions without enforcement achieve 0-67% completion. Report 01 (Dimension 7: Defense Paradox) warns that "Adding the 11 instrumentation proposals would increase tracked items to ~420+. If the fill rate stays at 67%, 140 items would be missed."

**The tension:** A-11 proposes fixing uncertainty with a tracking checkbox. The research predicts the checkbox will not be filled.

**Research-informed alternative:** Either (a) merge worked-examples.md into artifact-routing.md so the Brief Assembler AUTOMATICALLY receives it (Report 03, Section 7 recommendation), or (b) add worked examples to the Brief Assembler's explicit file list in the MANIFEST routing table (structural routing, not voluntary tracking).

---

### A-12: Decide fate of S(x) survival function
**Rating: ALIGNED**

Report 01 (Dimension 3: Voluntary Non-Execution) identifies S(x) as spec that has NEVER been applied in any build. Report 03 (Section 8) explicitly lists it as an unenforced specification. The checklist's framing ("either gate it or remove it") matches the research's prescription: every specification needs enforcement, or it should be deleted.

---

## Phase B: Gate Runner Improvements

### B-01: Unify gate results into single JSON + enforce GR-48
**Rating: ALIGNED**

This is the most research-supported item on the entire checklist. Report 01 (Dimension 3) identifies GR-48 as the pipeline's most dangerous recursive failure. Report 04 (Section 3) explains WHY GR-48 fails (no downstream consumer, input fragmentation). Report 04 (Section 10) names this the single most important change. Report 05 (R-03) shows 100% absence rate for GR-48 across all runs.

The proposed implementation (unify results + make GR-48 a verdict precondition) matches Report 04's gateway pattern exactly: make something the pipeline DEPENDS on, not an optional epilogue.

---

### B-02: Add GR-60 mandatory re-run after REFINE
**Rating: ALIGNED**

Report 01 (Dimension 3) identifies GR-60 non-re-run as voluntary non-execution. Report 04 (Tier 1, item 3) explicitly proposes "Post-REFINE Failed-Gate Re-Run Rule" as a binary rule. This is structural enforcement of a verification step.

---

### B-03: Add `source` field to gate result schema
**Rating: ALIGNED**

Report 01 (Dimension 4: Execution-Recording Divergence) documents at least 3 hand-constructed gate results. Report 05 (R-07) classifies this as an INTEGRITY violation -- "the most fundamental trust assumption of the gate system." A binary schema field (`source: 'code' | 'manual' | 'skip'`) is exactly the kind of binary enforcement the research recommends.

---

### B-04: Fix GR-11 to check only adjacent zone pairs
**Rating: ALIGNED**

Report 05 (R-04) documents gate false positives accumulating (2 in Run A, 4 in current run). Report 01 (Dimension 11: Mode/Context Sensitivity) identifies GR-11's all-pairs bug. This is a code fix, not a spec addition -- it REDUCES false positives and SAVES orchestrator attention. Perfectly aligned.

---

### B-05: Fix GR-15 to exclude auto centering margins
**Rating: ALIGNED**

Same logic as B-04. Code fix that reduces false positives. Frees orchestrator attention budget.

---

### B-06: Resolve GR-50 gate ID collision
**Rating: ALIGNED**

Report 01 (Dimension 6: Cross-File Reference Rot) identifies the GR-50 collision. Adding GR-55 for multi-coherence fills a genuine enforcement gap (Report 03, Section 8: no programmatic multi-coherence gate exists). Creating a new gate for a previously unenforced specification is aligned with the research's core message.

---

### B-07: Add DPR correction before all gate execution
**Rating: ALIGNED**

Report 01 (Dimension 9: Environmental Variance) and Report 05 (R-08) both identify DPR as a root cause of measurement issues. The fix is mechanical (set `deviceScaleFactor: 1`), code already exists (gate-runner-core.js lines 1483-1510), and implementation is zero-judgment. This is exactly the kind of structural, code-enforced fix the research endorses.

---

### B-08: Preserve BV gate evidence
**Rating: TENSION**

**The original signal:** BV gate measured values are all `___` despite PASS.

**What the research says:** Report 04 (Section 5) documents that tracker fields have no downstream consumer. Report 01 (Dimension 13: Feedback Loop Absence) notes the pipeline is predominantly feed-forward. BV evidence values are write-only data that nobody reads during the pipeline.

**The tension:** B-08 adds instrumentation that the research predicts will achieve ~67% fill rate (Report 01, Dimension 7). The values would be useful for cross-run trending but the research shows WITHIN-RUN tracking of detail values rarely happens.

**Research-informed alternative:** Auto-generate BV values into the unified gate JSON (B-01). If the BV gate runner already computes the values, writing them to JSON is CODE (100% reliable). Writing them to the tracker is MANUAL (67% reliable). Route BV detail to JSON, not to tracker fields.

---

### B-09: Add post-REFINE mechanical sweep gate
**Rating: ALIGNED**

This is a STRUCTURAL check (run code before spawning expensive agents). It follows the Report 04 gateway pattern -- gate results BLOCK subsequent spawning. The REFINE regression pattern (generative improvements introducing mechanical issues) is confirmed by this build. A 30-second gate check preventing $15 in agent costs is high ROI.

---

### B-10: Add within-section density gate (GR-67)
**Rating: TENSION**

**The original signal:** Dark zone "wall of text" flagged by 9/9 auditors.

**What the research says:** Report 05 (Section 3, Quality Trajectory) shows the current run matches Run C at PA-05 3.5/4 but with 42 gates vs 25. Gate count is increasing while coverage percentage is declining (74% -> 74% -> 71%). Report 05 explicitly recommends: "Stop adding gates without ensuring existing gates run."

**The tension:** B-10 proposes adding GR-67 (gate #43) to a system that already executes only 71% of its 42 gates. Report 01 (Dimension 7: Defense Paradox) warns that adding gates creates new things that can be missed, contributing to complexity-induced invisibility (Dimension 14). Report 05 says: "42 gates at 71% coverage is worse than 30 gates at 95% coverage."

**Research-informed alternative:** Fix gate coverage FIRST (B-01 unified runner), THEN assess whether the existing 42 gates catch the within-section density problem when actually executed. GR-13/14 may already catch this when run at all viewports (the 768px gate run was skipped). New gates should only be added after coverage of existing gates reaches 95%+.

---

### B-11: Add GR-19 exemption for boundary elements
**Rating: ALIGNED**

2-line code fix that reduces false positives. Same logic as B-04/B-05.

---

### B-12: Add hover state existence gate (GR-65)
**Rating: TENSION**

**The original signal:** Zero hover states in the build.

**What the research says:** Same concern as B-10. Gate count is increasing faster than coverage. Report 05: "Stop adding gates without ensuring existing gates run."

**However:** B-12 has a SPECIFIC justification that B-10 lacks: it enforces A-01 (hover template slot). Report 03's core principle is "every specification needs a gate, or it will be violated." A-01 adds a specification (hover vocabulary in brief); B-12 adds its enforcement. This is the paired spec+gate pattern the research recommends.

**Verdict: TENSION but justified** -- the gate is paired with a specific spec, which the research endorses. But it should only be added AFTER B-01 ensures existing gates actually run. Adding gate #43 to a 71% coverage system is less valuable than fixing the coverage system.

---

### B-13: Add DPR-sensitive opacity advisory gate (GR-66)
**Rating: TENSION**

Same structural concern as B-10 and B-12: adding gates to a system with declining coverage percentage. This is an ADVISORY gate, which Report 01 (Dimension 8) notes creates permission to skip ("ADVISORY implicitly signals optional"). Report 05's trajectory data shows advisory gates are the first to be skipped.

**Research-informed alternative:** Since B-07 (DPR correction) addresses the root cause (DPR != 1.0), and A-03/B-09 address the symptom detection (pre-PA check, post-REFINE sweep), B-13 may be redundant once those are applied.

---

### B-14: Codify gate exception patterns in manifest
**Rating: ALIGNED**

This REDUCES false positives (freeing orchestrator attention), uses the manifest (which is already read), and is structural (code checks exceptions before flagging). Perfectly aligned with the research's emphasis on reducing cognitive load and eliminating noise.

---

## Phase C: PA Protocol Improvements

### C-01: Fix Integrative Auditor timing
**Rating: ALIGNED**
(See A-06 above -- same item, cross-referenced.)

---

### C-02: Require REFINE-round screenshot parity
**Rating: TENSION**

**The original signal:** REFINE round dropped from 53 to 15 screenshots.

**What the research says:** Report 02 shows orchestrator compliance degrades with cognitive load. Adding a screenshot parity requirement is an INSTRUCTIONAL addition to a ~4,650-line orchestrator spec. Report 05 notes the current build succeeded despite reduced coverage.

**The tension:** C-02 adds a requirement based on a problem that DIDN'T cause a failure in this build. Report 01 (Dimension 7: Defense Paradox) warns against adding defenses for theoretical risks when the current defense set already exceeds attention budget. The "borderline REFINE pages would suffer" is speculative.

**Research-informed alternative:** If screenshot parity matters, make it structural: the screenshot function should take a manifest of required screenshots and refuse to proceed until all are captured. Instructing the orchestrator to "MUST include at minimum" is a judgment rule per Report 02's taxonomy.

---

### C-03: Add minimum footer text size gate
**Rating: ALIGNED**

Binary gate checking a mechanical property (font-size >= 11px). Removes a judgment call from auditors and puts it in code. This is exactly what the research recommends: move everything code-enforceable into code.

---

### C-04: Codify element-level screenshot strategy
**Rating: TENSION**

**The original signal:** 20 useless 768px screenshots, ad-hoc improvement to element-level shots.

**What the research says:** The ad-hoc improvement WORKED (auditors got better evidence). But codifying it adds ~15 lines to the orchestrator spec, which is already at ~4,650 lines.

**The tension:** C-04 converts a successful ad-hoc improvement into a permanent instruction. Report 02's data suggests successful ad-hoc decisions happen BECAUSE the orchestrator has freedom to adapt, not despite it. Codifying every successful adaptation increases spec volume without necessarily improving outcomes.

**Research-informed alternative:** Add the <5KB check as CODE in the screenshot function (if PNG < 5KB, switch to element-level capture). This makes it automatic, not instructional. The orchestrator doesn't need to remember the rule -- the code enforces it.

---

### C-05: Consider tiered PA deployment for catastrophic defects
**Rating: TENSION**

**The original signal:** All 9 auditors converged on the same finding. 6 were "wasted."

**What the research says:** Report 05 (Section 6, "Are We Solving the Right Problems?") identifies this as a problem we MAY BE CREATING: "False precision. The pipeline now measures PA-05 to 0.5 precision... This precision suggests a level of measurement reliability that does not exist." The 9-auditor convergence is actually EVIDENCE THAT THE SYSTEM WORKS -- broad consensus on the real issue.

**The tension:** Tiered deployment adds orchestrator decision complexity (should I deploy 3 or 9?). Report 02 shows the orchestrator already makes ~28% non-compliant decisions. Adding a conditional deployment decision introduces a new failure mode (deploying 3 when 9 were needed, missing a non-obvious defect). Report 05 notes Mode 4 PA is the pipeline's most reliable subsystem with the most files -- its strength is breadth, and reducing breadth to save cost undermines the proven mechanism.

**Research-informed alternative:** Keep full 9-auditor deployment (it's proven). Invest in A-03 (pre-check) to catch OBVIOUS catastrophic defects BEFORE PA. Don't optimize the PA system that works; optimize the builder system that produces defects.

---

### C-06: Add Tier 5 scoring to initial round
**Rating: ALIGNED**

This extracts more signal from an already-running process. No additional cognitive load on the orchestrator. Auditors are already deployed and already looking at the page. Asking them to answer 3 more questions from existing screenshots is marginal cost.

---

### C-07: Standardize integrative auditor file naming
**Rating: ALIGNED**

Trivial fix (2 lines), addresses real cross-reference rot (Report 01, Dimension 6). Zero tension.

---

## Phase D: Instrumentation & Tracking

### D-01: Fix tracker two-story problem (derive L0 from L2)
**Rating: CONTRADICTED**

**The original signal:** L0 claimed 100% while L2 showed ~40%.

**What the research says:** Report 04 (Section 5) identifies the ROOT CAUSE: "Nobody reads L2 during the pipeline. The only consumer is the post-run verification, which itself was not completed." Report 01 (Dimension 13: Feedback Loop Absence) notes the pipeline has no structured mechanism to USE tracker data. Report 04 (Section 5.1) identifies that L0 wins under time pressure because it's 1 second vs 2-5 minutes per phase.

**The contradiction:** D-01 proposes making L0 derived from L2, which means L0 CANNOT be checked until L2 is complete. The research predicts L2 will STILL not be filled (same attention budget, same incentive misalignment). The result: L0 goes from "falsely complete" to "perpetually incomplete" -- the tracker SHOWS that nothing was verified, but nothing changes about WHETHER things are verified.

Report 04's actual recommendation (Section 5, Option C) is "Reduce tracker to 50 critical fields." D-01 as written does not reduce the tracker. It makes L0 honest but doesn't make L2 achievable. The 298-item tracker at any fill rate is beyond the orchestrator's attention budget.

**What the research actually recommends:** (1) Reduce the tracker to ~50 fields (Report 04, Option C). (2) Auto-fill 60% of those from code (Report 04, Option A). (3) Make the remaining ~20 manual fields phase-gates (structural, not voluntary). D-01 addresses SYMPTOM (L0/L2 divergence) without addressing CAUSE (tracker is too large to fill). Implementing D-01 without simultaneously reducing the tracker per Report 04 would make the tracker report WORSE numbers without improving the ACTUAL tracking.

---

### D-02: Record BV gate detail values in tracker
**Rating: TENSION**

Same issue as B-08. Adding manual recording instructions to a tracker that achieves 67% fill rate. Report 04 recommends auto-generating values to JSON, not manual recording to markdown.

---

### D-03: Add respawn tracking fields to PA deployment
**Rating: TENSION**

**The original signal:** 2/9 auditors needed respawns with zero documentation.

**What the research says:** Report 01 (Dimension 7: Defense Paradox) warns that the tracker already has 375 items at 67% fill rate. Adding respawn fields increases the denominator. Report 04 (Section 5.1) identifies "time pressure asymmetry" -- L0 takes 1 second, L2 takes 2-5 minutes.

**The tension:** Respawn tracking is genuinely useful diagnostic data (22% respawn rate should be understood). But the DELIVERY MECHANISM (manual tracker fields) is predicted by the research to achieve ~67% compliance. If 2/9 respawns go untracked AND the respawn tracking fields go unfilled, the system now has TWO tracking failures instead of one.

**Research-informed alternative:** Add respawn count to the automated run-summary.json (D-10). A `totalRespawns` counter maintained by the orchestrator during agent management is lower-friction than retrospective tracker field filling.

---

### D-04: Create tracker-preflight.sh automation script
**Rating: ALIGNED**

This is CODE enforcement. It auto-populates 22 fields that are currently manual (0% fill rate). Report 02 explicitly recommends moving everything code-enforceable into code. Report 04 (Tier 2, item 4) recommends exactly this. The adversarial correction (2-3h realistic scope, not 8-12h) is appropriate.

---

### D-05: Add timing ledger to execution tracker
**Rating: CONTRADICTED**

**The original signal:** Timing was reconstructed from memory, off by ~80 minutes.

**What the research says:** Report 04 (Section 5.1) identifies that tracker fill rate is determined by immediate utility. Timing data has zero immediate utility -- no pipeline decision depends on how long Phase 1 took. Report 01 (Dimension 7) warns about the defense paradox of adding more tracking. Report 02 shows the orchestrator at ~72% compliance with current cognitive load.

**The contradiction:** D-05 proposes an append-only timing table with 12+ event types. The orchestrator must write a table row at EVERY phase boundary, agent spawn, and gate start/end. This is approximately 20-30 table rows during a 93-minute pipeline. Report 04's data shows the orchestrator already fails to fill EXISTING tracker fields for Phases 0-2.

The timing ledger is diagnostic data for retrospective analysis -- exactly the category Report 04 identifies as "write-only data that nobody reads." The orchestrator's timestamps were wrong because timing is low-priority under cognitive load. Adding more timing fields does not change the priority.

**What the research actually recommends:** Report 04, Section 6: "A `pipeline-controller.sh` script that records `date -u` at each phase boundary AUTOMATICALLY." Timing should be CODE-GENERATED (automatic timestamps from a script), not MANUALLY ENTERED (orchestrator writes ISO timestamps to a markdown table). If there is no pipeline-controller script, timing data should come from file creation timestamps (`stat -f '%Sm' filename`), not from orchestrator memory.

---

### D-06: Add compression metrics section to tracker
**Rating: TENSION**

**The original signal:** Compression >50:1 was the Flagship's root cause. This run's 18.9:1 was only discoverable by manual counting.

**What the research says:** Compression metrics ARE valuable for cross-run trending. But the delivery mechanism (manual tracker table) competes for the same attention budget as everything else in D-phase. Report 04 (Section 5) shows early-phase tracker sections (Phase 0-1) achieve 0% fill rate.

**The tension:** D-06 adds compression tracking at Phase 0-1 (the lowest fill rate phases). The research predicts it will not be filled.

**Research-informed alternative:** Auto-compute compression ratios in BV-05 (D-07). `brief_lines / recipe_lines` and `content_map_lines / source_lines` are CODE-COMPUTABLE from file sizes. Add to BV output JSON, not to a manual tracker section. If BV-05 flags >30:1 compression, that's a BLOCKING alert -- no manual tracking needed.

---

### D-07: Add recipe keyword scan as BV-05
**Rating: ALIGNED**

This is the research's strongest recommendation pattern: convert a judgment task (assembler must remember to include all recipe steps) into a binary check (code scans the brief for keywords). Report 02 (Section 7.2) proposes essentially the same gate. Report 03 (Section 9, HIGH PRIORITY #2) recommends BV-05 specifically. This is CODE enforcement of a previously INSTRUCTIONAL requirement.

---

### D-08: Add REFINE-cycle L2 tracking and delta metrics
**Rating: CONTRADICTED**

**The original signal:** REFINE produced the pipeline's most important improvement (+1.5 PA-05) but has the least tracking infrastructure.

**What the research says:** Report 05 (Section 4, "The Middle-Tier Paradox") identifies that the pipeline is "optimizing the wrong stage" -- it enriches initial specification (diminishing returns) instead of enriching REFINE (increasing returns). But D-08 proposes adding TRACKING to REFINE, not improving REFINE itself.

**The contradiction:** D-08 adds ~40 lines of tracking infrastructure to the pipeline's most effective subsystem. Report 05 explicitly warns: "Retrospective infrastructure... is growing faster than pipeline improvement." Report 01 (Dimension 7) models the outcome: if REFINE tracking has the same ~67% fill rate as the rest of the tracker, it adds 40 items of which ~13 will be unfilled -- creating 13 new gaps to diagnose in the next retrospective.

Report 05's actual recommendation for REFINE is: "INVEST in a more sophisticated REFINE protocol (perhaps multi-cycle: structural REFINE + micro-refinement REFINE)." The investment should be in REFINE CAPABILITY, not REFINE TRACKING.

**What the research actually recommends:** (1) Delta metrics (lines before/after, CSS delta, PA-05 delta) should be auto-computed in run-summary.json. (2) L2 tracking for REFINE adds cognitive load without improving REFINE quality. (3) The 5 lines of delta metrics ARE useful and can be auto-generated. The 35 lines of L2 checklists mirroring Phase 3A/3B/3C are manual overhead.

---

### D-09: Add gate failure triage field to tracker
**Rating: TENSION**

**The original signal:** 7 gate failures triaged in unstructured notes.

**What the research says:** Structured triage IS better than unstructured notes. But Report 04 (Section 5) shows tracker field fill rate is ~67%. Report 01 (Dimension 7) warns about adding trackable items.

**The tension is mild:** D-09 REPLACES existing free-text notes with structured fields -- it doesn't ADD net tracking burden, it restructures existing burden. This is better than most D-phase items. However, the triage values (INTENTIONAL / FALSE-POS / GENUINE) are JUDGMENT calls, and Report 02 shows judgment compliance is ~0-65%.

**Research-informed alternative:** Auto-classify false positives using the exception patterns from B-14. If GR-15 fires on `margin: 0 auto`, the code can auto-tag it `FALSE-POS: margin-auto-centering`. Only genuinely novel failures need manual triage.

---

### D-10: Create standardized run-summary.json format
**Rating: ALIGNED**

This is CODE-GENERATED output from data the pipeline already produces. Report 04 (Section 6) proposes essentially this: structured state that persists across phases. A JSON schema enables `jq` queries, removing the need for manual cross-run comparison. The orchestrator generates it once at pipeline end from already-collected data. Low cognitive load, high utility.

---

### D-11: Add automated alert protocol to orchestrator
**Rating: CONTRADICTED**

**The original signal:** GR-48 was skipped silently. Hover behavior lost silently.

**What the research says:** Report 02 (Section 5.1) shows the orchestrator at ~4,650 lines of cognitive load. D-11 proposes adding ~20 lines of alert protocol -- 9 alert conditions, each requiring the orchestrator to CHECK something after each phase. Report 04 (Section 7) shows the orchestrator already fails to execute 28% of its mandates.

**The contradiction:** D-11 proposes solving orchestrator attention failures by giving the orchestrator MORE things to check. This is the exact pattern Report 02 warns against: "The spec is eating itself. Every line added to prevent a previous failure reduces the probability that other lines will be followed."

The specific alerts in D-11 overlap with other items: brief <100 lines (BV gate), compression >50:1 (D-06/D-07), recipe:checklist <3:1 (BV-03), disposition missing (D-07), required gate skipped (GR-48/B-01). If B-01 and D-07 are implemented, most of D-11's alerts become redundant -- the gates ALREADY flag these conditions.

**What the research actually recommends:** Don't add an alert PROTOCOL to the spec. Make the alerts STRUCTURAL: BV-05 catches brief content loss (D-07), GR-48 catches gate coverage (B-01), compression ratios come from auto-computation. The orchestrator should receive alerts FROM CODE, not be instructed to CHECK for alert conditions manually.

---

### D-12: Archive run artifacts to permanent storage
**Rating: ALIGNED**

Low-cost (5 lines), solves a real problem (previous runs only recoverable via git), no cognitive load increase during the pipeline (runs post-pipeline). No tension with the research.

---

### D-13: Document REFINE as highest-ROI phase in MANIFEST
**Rating: ALIGNED**

Report 05 (Section 6) strongly endorses framing REFINE positively. The MANIFEST is already read by the orchestrator, so this adds ~5 lines to existing material. Changes framing, not procedure. Low cost, potentially high impact on orchestrator decision-making.

---

## Summary

### Tally

| Rating | Count | Items |
|--------|-------|-------|
| **ALIGNED** | 20 | A-01, A-02, A-06, A-07, A-09, A-10, A-12, B-01, B-02, B-03, B-04, B-05, B-06, B-07, B-09, B-11, B-14, C-01, C-03, C-06, C-07, D-04, D-07, D-10, D-12, D-13 |
| **TENSION** | 11 | A-03, A-04, A-05, A-08, A-11, B-08, B-10, B-12, B-13, C-02, C-04, C-05, D-02, D-03, D-06, D-09 |
| **CONTRADICTED** | 4 | D-01, D-05, D-08, D-11 |

*(Note: some items appear in multiple phases; counted once at their primary location.)*

Corrected count:
- **ALIGNED:** 20 items
- **TENSION:** 11 items
- **CONTRADICTED:** 4 items

### Pattern by Phase

| Phase | ALIGNED | TENSION | CONTRADICTED | Notes |
|-------|---------|---------|-------------|-------|
| **A: Pipeline Artifacts** | 7 | 5 | 0 | Template/structural fixes aligned; instruction-based fixes in tension |
| **B: Gate Runner** | 9 | 4 | 0 | Code fixes strongly aligned; new gate additions in tension |
| **C: PA Protocol** | 3 | 3 | 0 | PA system works; proposals to complicate it create tension |
| **D: Instrumentation** | 3 | 3 | 4 | MOST CONTRADICTED PHASE. Manual tracking additions directly opposed by research findings. |

**Phase D is where the checklist and research diverge most sharply.** The checklist's instinct is "track more to know more." The research says "the tracking system is already beyond the orchestrator's attention budget; adding more tracking makes the problem worse."

### Biggest Risk If We Implement the Checklist Without Reframing

**The pipeline gains ~450 lines of additional specification while the research says specification volume is the root cause of quality stagnation.** Specifically:

1. **D-01 + D-05 + D-08** together add ~90 lines of manual tracking requirements to a tracker that already exceeds the orchestrator's attention budget. The research predicts these will achieve ~67% fill rate, creating ~30 new unfilled items for the next retrospective to diagnose.

2. **D-11** adds 9 alert conditions the orchestrator must check manually, when the research shows the orchestrator already fails 28% of manual checks. The alerts are redundant with B-01 and D-07 if those are implemented as code.

3. **B-10 + B-12 + B-13** add 3 new gates to a system with declining percentage coverage (74% -> 74% -> 71%). The research says "Stop adding gates without ensuring existing gates run."

4. **A-03 + A-04 + A-05 + C-02 + C-04 + C-05** add instructional requirements to the orchestrator and builder specs, competing for the same attention budget that is already over-allocated. The research says these will achieve 50-80% compliance at best.

**The net effect: the pipeline gets more comprehensive on paper while agent compliance continues to degrade.** The 3.5/4 PA-05 score stays flat (or drops) because the real bottleneck -- builder input volume and orchestrator cognitive load -- is INCREASED by the implementation.

### The Research-Informed Implementation Strategy

Implement the 20 ALIGNED items as-is. For the 11 TENSION items, convert each from INSTRUCTIONAL to STRUCTURAL where possible (code enforcement > spec instruction). For the 4 CONTRADICTED items, either (a) replace with auto-generated alternatives or (b) defer until the tracker is simplified per Report 04's recommendation.

The three most important reframings:
1. **Replace D-01's L0-from-L2 with "reduce tracker to 50 fields + auto-fill 30."** Fix the tracker SIZE, not just its honesty.
2. **Replace D-05/D-08/D-11 with auto-generated metrics.** Timing, compression, REFINE deltas, and alert conditions should come from CODE, not from orchestrator manual entry.
3. **Gate B-10/B-12/B-13: defer until B-01 raises coverage to 95%+.** Fix the gate EXECUTION system before adding gates to it.

---

*Contradiction analysis complete. 35 items rated, 20 aligned, 11 tension, 4 contradicted. Phase D is the primary conflict zone.*
