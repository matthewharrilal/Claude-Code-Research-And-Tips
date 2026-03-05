# Pipeline v3 — Master Implementation Checklist v2

**Build:** yegge-gas-town-2026-02-25
**Based on:** v1 checklist (35 items from 10 retrospective agents) + 9 crack-analysis research reports
**Reframed by:** Opus checklist-reframer agent after reading all research
**Principle:** Every item was derived from a real failure. The signal is preserved. The implementation is reframed where research reveals root causes differ from symptoms.

---

## Research Context That Governs This Reframe

These findings from Reports 01-09 constrain every implementation decision:

1. **Compliance degrades with spec volume** (R02): ~95% at <500 lines, ~72% at ~4,650 lines. Binary rules immune; judgment rules ~0-65%.
2. **94% of specs have no enforcement** (R03): 62 enforced items out of 885 total. The remaining 823 rely on voluntary compliance.
3. **Gate count up 35%, coverage DOWN 3%** (R05): 31->42 gates, 74%->71% coverage. Fix coverage before adding gates.
4. **Middle-tier paradox** (R05): 100-line recipe produced PA-05 4/4. Current 10,061-line pipeline produces 2.0/4 initial. More spec != more quality.
5. **REFINE is the only consistently positive quality intervention** (R05): +1.0 to +1.5 PA-05. Initial build quality is flat across v3 runs.
6. **Fixes stick when structural, fail when instructional** (R05): Container width (4 enforcement layers) = 100% durable. Hover behavior (prose instruction) = 0% durable.
7. **Tracker at 375 items achieves 67% fill** (R01/R04): Adding items increases gaps. The fix is fewer items + auto-fill, not more items.
8. **The spec is eating itself** (R02/R09): Every line added to prevent a failure reduces compliance with other lines.

---

## Summary

| Category | Count | Description |
|----------|-------|-------------|
| ALIGNED (implement as-is) | 17 | Research supports original framing |
| REFRAMED (signal preserved, implementation changed) | 13 | Research reveals root cause differs from symptom |
| DEFERRED (blocked by B-01) | 4 | New gates must wait for coverage fix |
| REMOVED (absorbed or contradicted) | 4 | Research shows negative leverage or redundancy |
| NEW (uncovered root cause) | 3 | Root causes with no existing coverage |

**Original v1:** 35 items, ~450 lines net spec impact.
**This v2:** 33 items (17 aligned + 13 reframed + 3 new), **~175 lines net spec impact** (61% reduction).

---

## Phase A: Pipeline Artifact Fixes

### A-01 Add hover behavior vocabulary to brief template
- **Priority:** P0-BLOCKING
- **Status:** ALIGNED -- implement as-is
- **Signal:** Hover behavior (Step 2.7) COMPLETELY LOST in every pipeline build. 100% recurrence rate. DELIGHT 4/10.
- **Implementation:** Add Tier 3/4 section to `artifact-tc-brief-template.md` with hover vocabulary placeholders and 3 CSS snippets. ~15 lines added to template.
- **Research support:** R01 (Dim 1: template slot absence), R02 (Section 2.1), R03 (Section 2, Boundary C), R05 (R-05: 100% recurrence). All 5 reports. Proposed 8+ days ago across 4+ retrospectives, never applied.
- **File(s):** `design-system/pipeline/artifact-tc-brief-template.md`
- **Net spec impact:** +15 lines

### A-02 Add signal declaration instructions to brief template
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- implement as-is
- **Signal:** Step 3.4c (signal declarations) COMPLETELY LOST from brief. Gate runner cannot distinguish intentional hidden content from rendering bugs.
- **Implementation:** Add to Tier 2 (Perception): signal declaration instruction + SCROLL-REVEALS comment template. ~5 lines.
- **Research support:** R01 (Dim 1), R03 (Boundary C). Adversarial downgrade from P0 to P1 confirmed by R04 (dark zone root cause was DPR opacity, not missing signals).
- **File(s):** `design-system/pipeline/artifact-tc-brief-template.md`
- **Net spec impact:** +5 lines

### A-03 Add dark-zone visibility pre-check before PA deployment
- **Priority:** P1-HIGH
- **Signal:** 11 agents spawned to discover what 1 scroll-through reveals. ~$15 wasted on catastrophic defect.
- **Original implementation:** Add orchestrator instruction to scroll screenshots and HALT if >=3 consecutive viewports show <30% visible content.
- **Research finding:** R02 shows orchestrator at ~4,650 lines, ~72% compliance. Adding instructional checks achieves ~72% adherence. R04 recommends wrapper functions (code > spec). R08 notes that this adds to orchestrator burden without reducing it.
- **Reframed implementation:** KEEP the pre-check but make it a CODE function, not an orchestrator instruction. Add `checkVisibleContent(screenshotDir)` that flags consecutive low-content screenshots. Run automatically in the gate-runner Phase 3A sequence. If flagged, gate runner outputs WARNING (not HALT -- the orchestrator decides, but the detection is automated). Net: ~15 lines in gate runner code, ~3 lines in orchestrator spec (down from ~10).
- **File(s):** `design-system/pipeline/gate-runner-core.js`, `design-system/pipeline/artifact-orchestrator.md`
- **Net spec impact:** +3 lines spec (+15 lines code, not counted as spec)

### A-04 Add edge-zone minimum channel count as numbered requirement
- **Priority:** P1-HIGH
- **Signal:** Builder delivered 2 channels at edge zones vs 3-4 specified. Dramatic boundaries over-invested, gentle boundaries phoned in.
- **Original implementation:** Change multi-coherence from paragraph to numbered requirements in brief template.
- **Research finding:** R02 (Section 3.3): builders satisfice at minimums -- "3+ channels" produces exactly 3. R02 (Section 6.2): "Clarity is not the problem. Volume is the problem." R08 rates as TENSION: instruction reformat without gate = ~50-65% compliance. R07: need a GATE (GR-55) not just a numbered requirement.
- **Reframed implementation:** KEEP the brief template change (numbered requirements are marginally better than paragraphs, and the cost is ~0 net lines -- it reformats existing content). But this is NOT the fix. The fix is B-06 (GR-55 multi-coherence gate) which provides binary enforcement. A-04 without B-06 will NOT solve the problem per R02's evidence.
- **File(s):** `design-system/pipeline/artifact-tc-brief-template.md`
- **Net spec impact:** +0 lines (reformat, not addition)

### A-05 Require component selection HTML comment before building
- **Priority:** P2-MEDIUM (downgraded from P1)
- **Signal:** Component adoption 5-6 vs 8+ target. Run C had 18 with LESS spec.
- **Original implementation:** Force builder to declare component selection in HTML comment before building. Add to recipe + brief template.
- **Research finding:** R05 (R-02): "Run C achieved 3x component adoption with LESS spec. The regression correlates with pipeline complexity, not spec absence." R02: builder at ~2,868 lines, ~80% judgment compliance. Adding a declaration step adds cognitive load. R08: declaration might be pro-forma. R07: post-build gate (counting actual classes) is more reliable than pre-build declaration.
- **Reframed implementation:** DROP the pre-build HTML comment declaration. REPLACE with a post-build binary gate GR-46 that counts component class usage in the final HTML (`.callout`, `.table-wrapper`, `.pull-quote`, etc.) and WARNs if <8 distinct component classes. This is structural enforcement, not an additional builder instruction. PAIR with A-10 (compress content map appendix) to offset any brief length increase.
- **File(s):** `design-system/pipeline/gate-runner-core.js` (new check in existing GR-46 or new GR-66)
- **Net spec impact:** +0 lines spec (+15 lines code)

### A-06 Fix Integrative Auditor timing: sequential after 9 PA reports
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- implement as-is
- **Signal:** Integrative ran parallel with PA auditors, received only screenshots. Cross-auditor synthesis role unfulfilled.
- **Implementation:** Add to orchestrator and MANIFEST: "Integrative MUST spawn AFTER all 9 PA reports saved to disk." ~8 lines modified.
- **Research support:** R01 (Dim 12), R04 (Section 2.3). One enhancement from R04: make spawn DEPEND on PA report file existence (structural gateway) rather than just instruction.
- **File(s):** `design-system/pipeline/artifact-orchestrator.md`, `design-system/pipeline/MANIFEST.md`
- **Net spec impact:** +8 lines

### A-07 Distinguish rendering vs composition failures in weaver protocol
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- implement as-is
- **Signal:** Initial PA-05 2.0/4 close to REBUILD threshold, but page was actually 3.5/4 after REFINE. Without guidance, weaver could call REBUILD on rendering-only failure.
- **Implementation:** Add calibration note to weaver spec distinguishing rendering failures (REFINE can fix) from composition failures (REBUILD needed). ~8 lines.
- **Research support:** R05 (REFINE as proven quality mechanism), R08 (ALIGNED).
- **File(s):** `design-system/pipeline/pa-weaver.md`
- **Net spec impact:** +8 lines

### A-08 Add explicit border width instruction to recipe
- **Priority:** P2-MEDIUM
- **Signal:** Non-integer borders in 4+ consecutive runs.
- **Original implementation:** Add wrong/right example to recipe and brief template. ~5 lines.
- **Research finding:** R05 (R-01): PARTIALLY a DPR measurement artifact (DPR 0.667 transforms 4px CSS to 2.67px computed), PARTIALLY a spec format problem. R08: instruction change is still a judgment rule (~0% compliance per R02). B-07 (DPR correction) addresses the root cause.
- **Reframed implementation:** KEEP the wrong/right example (cheap, harmless). But this is SECONDARY to B-07 (DPR correction before gates). After B-07 is applied, reassess whether border violations persist at DPR 1.0. If they do, add a CSS-level lint to the gate runner that scans for non-integer `border-width` values in the stylesheet.
- **File(s):** `design-system/pipeline/artifact-builder-recipe.md`, `design-system/pipeline/artifact-tc-brief-template.md`
- **Net spec impact:** +5 lines

### A-09 Codify REFINE builder isolation protocol
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- implement as-is
- **Signal:** REFINE builder success (+1.5 PA-05) depends on receiving generative language only. Isolation is currently implicit.
- **Implementation:** Add "REFINE Builder Isolation Rules" subsection to orchestrator spec. ~10 lines.
- **Research support:** R05 (REFINE as proven mechanism), R08 (ALIGNED -- codifying prevents accidental contamination).
- **File(s):** `design-system/pipeline/artifact-orchestrator.md`
- **Net spec impact:** +10 lines

### A-10 Compress Content Map appendix in brief template
- **Priority:** P2-MEDIUM
- **Status:** ALIGNED -- implement as-is
- **Signal:** Content Map appears twice in brief (~70-line appendix + Tier 3 integration). Duplicate content wastes builder attention budget.
- **Implementation:** Change appendix to compressed format (~20-30 lines). Saves ~40-50 lines.
- **Research support:** R02 (compliance degrades with volume). This REDUCES builder input -- aligned with R09's central recommendation.
- **File(s):** `design-system/pipeline/artifact-tc-brief-template.md`
- **Net spec impact:** -40 lines

### A-11 Confirm worked examples routing
- **Priority:** P3-LOW
- **Signal:** Worked examples routing was UNCERTAIN. Zero evidence either agent read them.
- **Original implementation:** Add worked-examples.md to MANIFEST input lists + tracker checkbox.
- **Research finding:** R03 (Section 7): merge worked-examples into artifact-routing.md so the Brief Assembler AUTOMATICALLY receives it. R04: tracker checkboxes achieve ~67% compliance. R08: the checkbox will not be filled.
- **Reframed implementation:** MERGE `artifact-worked-examples.md` (182 lines) into `artifact-routing.md` as an appendix. This makes routing STRUCTURAL (file is automatically part of what the assembler reads) instead of VOLUNTARY (orchestrator must remember to route it). Remove the separate file.
- **File(s):** `design-system/pipeline/artifact-routing.md`, remove `artifact-worked-examples.md`
- **Net spec impact:** -3 lines (file merge eliminates MANIFEST routing entry + tracker checkbox)

### A-12 Decide fate of S(x) survival function
- **Priority:** P2-MEDIUM
- **Status:** ALIGNED -- implement as-is
- **Signal:** S(x) exists in routing.md but has NEVER been applied in any build. Dead spec.
- **Implementation:** Either gate it (BV-05) or remove it. Research strongly favors REMOVAL: R01 (Dim 3: voluntary non-execution), R03 (Section 8: unenforced specification). D-07 (BV-05 keyword scan) provides superior compression governance without S(x). RECOMMENDATION: Remove S(x) from artifact-routing.md (~15 lines removed). The keyword scan is the replacement.
- **File(s):** `design-system/pipeline/artifact-routing.md`
- **Net spec impact:** -15 lines

---

## Phase B: Gate Runner Improvements

### B-01 Unify gate results + enforce GR-48 as verdict precondition
- **Priority:** P0-BLOCKING
- **Signal:** GR-48 (gate coverage meta-gate) has NEVER executed in ANY run. 100% absence rate. The one gate designed to catch missing gates was itself missing. Gate results fragmented across 4+ locations.
- **Original implementation:** Unify JSON + enforce GR-48 + add coverage object.
- **Research finding:** R04 (Section 10): "The single most important change." R04's insight: GR-48 should be a VERDICT PRECONDITION, not just "the last gate to run." Same structural enforcement pattern that makes BV gates work. R04 (Section 4): better as 4 phase-specific gate functions with an accumulator, not a single wrapper. R08: B-01 as ALIGNED -- most research-supported item on the entire checklist.
- **Reframed implementation:** KEEP the unified JSON + GR-48 enforcement. ENHANCE with R04's verdict precondition pattern: **Verdict CANNOT be SHIP or REFINE unless GR-48 PASS. GR-48 FAIL = INCOMPLETE.** Add to the verdict logic (same position as BV gates blocking builder spawn). Gate execution via 4 phase functions with accumulated results array:
  - Phase 1: `bvResults = runBriefVerification(brief)`
  - Phase 3A: `grResults = runPhase3Gates(page)`
  - Phase 3C-post: `postResults = runPostWeaverGates(reports, weaver)`
  - Final: `metaResults = runMetaGates(bvResults + grResults + postResults)` -- GR-48 runs HERE, automatically
- **File(s):** `design-system/pipeline/artifact-orchestrator.md`, `design-system/pipeline/gate-runner-core.js`
- **Net spec impact:** +15 lines spec (+30 lines code)

### B-02 Add GR-60 mandatory re-run after REFINE
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- implement as-is
- **Signal:** GR-60 had 48 WCAG violations. REFINE targeted contrast. GR-60 NOT re-run to verify fix.
- **Implementation:** Add binary rule: "After REFINE, re-run ALL gates that FAILED initially, plus GR-60 regardless." ~5 lines.
- **Research support:** R01 (Dim 3: voluntary non-execution), R04 (Tier 1 item 3).
- **File(s):** `design-system/pipeline/artifact-orchestrator.md`
- **Net spec impact:** +5 lines

### B-03 Add `source` field to gate result schema
- **Priority:** P0-BLOCKING
- **Status:** ALIGNED -- implement as-is
- **Signal:** At least 3 gates have hand-constructed results inconsistent with code output. Gate integrity undermined.
- **Implementation:** Add `source: 'code' | 'manual' | 'skip'` to every gate result. Results without `source` = integrity violation. ~15 lines spec.
- **Research support:** R01 (Dim 4: execution-recording divergence), R05 (R-07: integrity violation), R08 (ALIGNED).
- **File(s):** `design-system/pipeline/gate-runner-spec.md`
- **Net spec impact:** +15 lines

### B-04 Fix GR-11 to check only adjacent zone pairs
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- implement as-is
- **Signal:** GR-11 false FAIL on non-adjacent pairs (Z2 vs Z4). 4 gates now produce known false positives.
- **Implementation:** Code fix: iterate zones in document order, compare only consecutive pairs. ~10 lines modified.
- **Research support:** R01 (Dim 11), R05 (R-04: false positives accelerating).
- **File(s):** `design-system/pipeline/gate-runner-core.js`
- **Net spec impact:** +0 lines (code fix only)

### B-05 Fix GR-15 to exclude auto centering margins
- **Priority:** P2-MEDIUM
- **Status:** ALIGNED -- implement as-is
- **Signal:** GR-15 false positive on every centered-content build. Known for 2+ runs.
- **Implementation:** Code fix: exclude `margin-left: auto && margin-right: auto`. ~5 lines.
- **File(s):** `design-system/pipeline/gate-runner-core.js`
- **Net spec impact:** +0 lines (code fix only)

### B-06 Resolve GR-50 gate ID collision + add GR-55 multi-coherence gate
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- implement as-is
- **Signal:** GR-50 = Conviction Statement in manifest, used for multi-coherence in build. No programmatic multi-coherence gate exists.
- **Implementation:** Keep GR-50 = Conviction Statement. Create GR-55 (ADVISORY) = multi-coherence channel count. Update manifest. ~40 lines new gate + 5 lines manifest.
- **Research support:** R01 (Dim 6: cross-file reference rot), R03 (Section 8: multi-coherence has zero enforcement).
- **Note:** GR-55 provides the binary enforcement that A-04 needs. These two items are paired: A-04 reformats the brief requirement, B-06 enforces it.
- **File(s):** `design-system/pipeline/gate-runner-core.js`, `design-system/pipeline/gate-manifest.json`
- **Net spec impact:** +0 lines spec (+40 lines code)

### B-07 Add DPR correction before all gate execution
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- implement as-is
- **Signal:** 5-6 gates give unreliable results at DPR 0.667. Code already exists in gate-runner-core.js.
- **Implementation:** Move `{ deviceScaleFactor: 1 }` to before any gate execution. ~5 lines in orchestrator spec. Zero code changes needed.
- **Research support:** R01 (Dim 9), R05 (R-08). Code already exists at lines 1483-1510.
- **File(s):** `design-system/pipeline/artifact-orchestrator.md`
- **Net spec impact:** +5 lines

### B-08 Preserve BV gate evidence
- **Priority:** P2-MEDIUM
- **Signal:** All 4 BV gates show `___` for detail despite PASS. No measured values preserved.
- **Original implementation:** Copy BV measured values into L2 tracker table. Add orchestrator instruction.
- **Research finding:** R04 (Section 5): tracker fields have no downstream consumer. R01 (Dim 13): feed-forward pipeline, write-only data. R08: manual recording achieves ~67% fill rate.
- **Reframed implementation:** Route BV detail values to the UNIFIED GATE JSON (B-01), not to tracker markdown fields. If BV gates compute values, those values go in `bvResults[]` automatically. The tracker references the JSON file path. This is CODE-routed (100% reliable) instead of MANUAL-entered (67% reliable).
- **File(s):** `design-system/pipeline/gate-runner-core.js` (BV functions)
- **Net spec impact:** +0 lines spec (+5 lines code)

### B-09 Add post-REFINE mechanical sweep
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- implement as-is
- **Signal:** REFINE added nav rail that failed GR-52 (14 inaccessible links). Discovered only after spawning 9 PA agents.
- **Implementation:** After REFINE and before PA, run mechanical gate subset (GR-10, GR-18, GR-22, GR-51, GR-52). ~8 lines in orchestrator spec.
- **Research support:** R04 (gateway pattern), R08 (ALIGNED -- structural check blocks expensive spawns).
- **File(s):** `design-system/pipeline/artifact-orchestrator.md`
- **Net spec impact:** +8 lines

### B-10 Add within-section density gate (GR-67)
- **Priority:** DEFERRED -- blocked by B-01
- **Signal:** Dark zone "wall of text" flagged by 9/9 auditors. No programmatic detection.
- **Original implementation:** Add GR-67 checking max continuous text height.
- **Research finding:** R05: "42 gates at 71% coverage is worse than 30 gates at 95% coverage. Stop adding gates without ensuring existing gates run." R01 (Dim 7): adding gates to a declining-coverage system increases complexity-induced invisibility. R08: existing GR-13/14 may catch this when actually executed at all viewports (768px gate run was skipped).
- **Reframed implementation:** DEFER until B-01 is implemented and gate coverage reaches 90%+. THEN assess whether existing gates (GR-13/14 at all viewports) already catch within-section density. Only add GR-67 if the gap persists after coverage is fixed.
- **Net spec impact:** +0 lines (deferred)

### B-11 Add GR-19 exemption for boundary elements
- **Priority:** P3-LOW
- **Status:** ALIGNED -- implement as-is
- **Signal:** GR-19 flagged intentional boundary divs. Known false positive.
- **Implementation:** Add class-name regex check. ~2 lines code.
- **File(s):** `design-system/pipeline/gate-runner-core.js`
- **Net spec impact:** +0 lines (code fix only)

### B-12 Add hover state existence gate (GR-65)
- **Priority:** DEFERRED -- blocked by B-01
- **Signal:** Zero hover states in build.
- **Original implementation:** Add GR-65 checking `:hover` CSS rules.
- **Research finding:** R08 rates as TENSION but justified (paired with A-01 spec). R05: stop adding gates before fixing coverage. R08 anti-pattern: "Just Add a Gate."
- **Reframed implementation:** DEFER until B-01 raises gate coverage to 90%+. GR-65 is the ENFORCEMENT PAIR for A-01 (hover template slot). When added, it completes the spec+gate pattern the research endorses. But adding gate #43 to a 71% coverage system has negative leverage.
- **Net spec impact:** +0 lines (deferred)

### B-13 Add DPR-sensitive opacity advisory gate (GR-66)
- **Priority:** DEFERRED -- blocked by B-01 + B-07
- **Signal:** 12 rgba values on dark backgrounds all needed REFINE to fix.
- **Research finding:** R05: stop adding gates before fixing coverage. R08: B-07 (DPR correction) addresses root cause. A-03 and B-09 address symptom detection. B-13 may be redundant once those are applied.
- **Reframed implementation:** DEFER. Reassess after B-07 (DPR correction) is applied. At DPR 1.0, the rgba visibility problem may not exist.
- **Net spec impact:** +0 lines (deferred)

### B-14 Codify gate exception patterns in manifest
- **Priority:** P2-MEDIUM
- **Status:** ALIGNED -- implement as-is
- **Signal:** 4 gates produce known false positives requiring manual override. Each consumes orchestrator attention.
- **Implementation:** Add `exceptions` arrays to gate manifest entries. Gate runner checks exceptions before flagging. ~10 lines manifest, ~15 lines code.
- **Research support:** R08 (ALIGNED -- reduces cognitive load, structural prevention of false positives).
- **File(s):** `design-system/pipeline/gate-manifest.json`, `design-system/pipeline/gate-runner-core.js`
- **Net spec impact:** +10 lines

---

## Phase C: PA Protocol Improvements

### C-01 Fix Integrative Auditor timing
- **Priority:** P1-HIGH
- **Note:** Implementation is A-06. Listed for PA protocol completeness.

### C-02 Require REFINE-round screenshot parity
- **Priority:** P3-LOW (downgraded from P2)
- **Signal:** REFINE round dropped from 53 to 15 screenshots.
- **Original implementation:** Add orchestrator instruction for minimum screenshot set.
- **Research finding:** R08: this build SUCCEEDED despite reduced coverage. Adding instructional requirements to a ~4,650-line orchestrator spec achieves ~72% compliance. R01 (Dim 7): defense for theoretical risk when existing defenses exceed attention budget.
- **Reframed implementation:** IF implemented, make it structural: the screenshot function takes a manifest of required captures and refuses to proceed until all are taken. But given that this did NOT cause a failure and the orchestrator is already overloaded, downgrade to P3. The screenshot function improvement can be bundled with C-04.
- **File(s):** `design-system/pipeline/artifact-orchestrator.md`
- **Net spec impact:** +3 lines (down from +5)

### C-03 Add minimum footer text size to gate runner
- **Priority:** P2-MEDIUM
- **Status:** ALIGNED -- implement as-is
- **Signal:** Footer text size flagged by 2/10 auditors. Mechanical check (font-size >= 11px) belongs in code.
- **Implementation:** Add RECOMMENDED gate checking font-size >= 11px for all text. ~10 lines code.
- **File(s):** `design-system/pipeline/gate-runner-recommended.js`
- **Net spec impact:** +0 lines (code only)

### C-04 Codify element-level screenshot strategy + eliminate DPR waste
- **Priority:** P2-MEDIUM
- **Signal:** 20 useless 768px screenshots at 2.4KB each. Ad-hoc improvement to element-level shots worked.
- **Original implementation:** Add ~15 lines to orchestrator spec describing screenshot strategy.
- **Research finding:** R08: the ad-hoc improvement worked because the orchestrator had freedom to adapt. Codifying adds spec volume. R08 anti-pattern: making every successful adaptation permanent instruction.
- **Reframed implementation:** Add the <5KB check as CODE in the screenshot function: `if (pngSize < 5000) switchToElementCapture()`. This makes it AUTOMATIC, not instructional. The orchestrator doesn't need to remember -- the code enforces it. ~3 lines spec referencing the code behavior, ~10 lines code.
- **File(s):** `design-system/pipeline/gate-runner-core.js`, `design-system/pipeline/artifact-orchestrator.md`
- **Net spec impact:** +3 lines (down from +15)

### C-05 Tiered PA deployment for catastrophic defects
- **Priority:** REMOVED
- **Signal:** All 9 auditors converged on same finding. 6 seemingly "wasted."
- **Research finding:** R05 (S-05): Mode 4 PA (9 auditors) is the pipeline's most reliable subsystem. R08: reducing to 3 auditors risks missing secondary issues. R08 anti-pattern: half-measures get worst of both worlds. A-03 (pre-check) is the right fix for obvious defects. If pre-check triggers, skip PA entirely and go to REFINE. If not, run full 9 auditors.
- **Removal rationale:** A-03 addresses the cost concern. The 9-auditor protocol should not be weakened -- its strength is breadth.
- **Net spec impact:** -0 lines (never added)

### C-06 Add Tier 5 scoring to initial round even when defective
- **Priority:** P3-LOW
- **Status:** ALIGNED -- implement as-is
- **Signal:** Initial round did not score Tier 5. Metaphor persistence could have been answered from element screenshots.
- **Implementation:** Add ~5 lines to weaver spec. Extracts more signal from already-running process. Zero additional cognitive load on orchestrator.
- **File(s):** `design-system/pipeline/pa-weaver.md`
- **Net spec impact:** +5 lines

### C-07 Standardize integrative auditor file naming
- **Priority:** P3-LOW
- **Status:** ALIGNED -- implement as-is
- **Signal:** Build used `p3b-integrative.md` instead of expected `p3b-pa-integrative.md`.
- **Implementation:** ~2 lines modified in deployment spec.
- **File(s):** `design-system/pipeline/pa-deployment.md`
- **Net spec impact:** +2 lines

---

## Phase D: Instrumentation & Tracking

### D-01 Simplify tracker + derive L0 from L2
- **Priority:** P1-HIGH
- **Signal:** L0 claimed 100% while L2 showed ~40% for Phases 0-2. 3/6 agent tables blank. Builder had zero metadata.
- **Original implementation:** Derive L0 from L2, add enforcement to fill L3 at spawn.
- **Research finding:** R08 rates CONTRADICTED. R04 (Section 5, Option C): "Reduce tracker to 50 critical fields." Deriving L0 from L2 makes L0 HONEST but doesn't make L2 ACHIEVABLE -- 298 items at any fill rate exceeds orchestrator attention budget. R04's actual recommendation is reduce FIRST, then derive. R01 (Dim 7): 375 items at 67% = 98 missed. More items = more gaps.
- **Reframed implementation:** FIRST reduce tracker from ~298 trackable items to ~50 critical fields. Auto-fill ~30 of those from code (file existence, line counts, timestamps via `date -u`, gate results from JSON). Leave ~20 manual fields that are genuinely judgment-based. THEN derive L0 from L2 within this reduced set. The tracker becomes: ~30 auto-filled fields (100% reliable) + ~20 manual fields (target 90%+) = 50 total. This is Report 04's Option C + Option A.
- **File(s):** `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md` (major rewrite)
- **Net spec impact:** -250 lines (tracker shrinks from ~596 to ~150 lines)

### D-02 Record BV gate detail values
- **Priority:** REMOVED (absorbed by B-01 + B-08)
- **Signal:** BV gate values all `___` despite PASS.
- **Removal rationale:** B-08 (reframed) routes BV values to unified gate JSON automatically. D-02's manual tracker recording is redundant and achieves only ~67% compliance. The signal is preserved; the mechanism is automated via B-01/B-08.
- **Net spec impact:** -0 lines

### D-03 Add respawn tracking
- **Priority:** P2-MEDIUM
- **Signal:** 2/9 auditors needed respawns with zero documentation. 22% respawn rate unexplained.
- **Original implementation:** Add respawn count/reason columns to PA deployment table + tracker.
- **Research finding:** R01 (Dim 7): tracker already has 375 items at 67% fill. R04: time pressure asymmetry.
- **Reframed implementation:** Add `totalRespawns` and `respawnReasons[]` to D-10's run-summary.json schema (auto-generated). Add 1 column to the REDUCED tracker's agent table: "Respawns: ___". ONE field, not three separate tracking surfaces. Total manual addition: 1 field per auditor in the reduced tracker.
- **File(s):** `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md` (1 column in existing table)
- **Net spec impact:** +2 lines

### D-04 Create tracker-preflight.sh automation script
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- implement as-is
- **Signal:** Pre-flight had 0/22 fill rate despite all files accessible.
- **Implementation:** Script checks file existence, records line counts, outputs markdown snippet. Preflight-only scope (2-3h realistic per adversarial correction).
- **Research support:** R02 (code > spec), R04 (Tier 2 item 4).
- **File(s):** New: `design-system/pipeline/tracker-preflight.sh`
- **Net spec impact:** +0 lines spec (+60 lines script)

### D-05 Timing tracking
- **Priority:** P2-MEDIUM
- **Signal:** Timestamps reconstructed from memory, off by ~80 minutes.
- **Original implementation:** Append-only timing table with 12+ event types, ~20 lines added to tracker.
- **Research finding:** R08 rates CONTRADICTED. R04: timing data has zero immediate utility (no pipeline decision depends on it). R01 (Dim 7): defense paradox. R02: orchestrator already fails to fill existing fields. R04 (Section 6): timestamps should be CODE-GENERATED, not manually entered.
- **Reframed implementation:** DROP the 20-line timing ledger from the tracker. INSTEAD: (1) Add 3 auto-derived timestamp fields to the REDUCED tracker: PIPELINE_START, PIPELINE_END, TOTAL_DURATION. These come from `date -u` captured by the preflight script (D-04) at start and a finalization step at end. (2) Add per-phase timestamps to run-summary.json (D-10) auto-derived from file creation times. Total manual timing effort: ZERO.
- **File(s):** `design-system/pipeline/tracker-preflight.sh` (add timestamp capture)
- **Net spec impact:** +0 lines spec (auto-generated)

### D-06 Compression metrics
- **Priority:** P2-MEDIUM
- **Signal:** Compression >50:1 was Flagship root cause. Current run's 18.9:1 only discoverable by manual counting.
- **Original implementation:** Add compression metrics section to tracker (~10 lines).
- **Research finding:** R08 rates TENSION. D-06 adds compression tracking at Phase 0-1 (the LOWEST fill rate phases per R04). R08: auto-compute in BV-05 (D-07) instead.
- **Reframed implementation:** DROP the manual tracker table. INSTEAD: Add compression ratio calculation to D-07's BV-05 keyword scan. BV-05 already reads the brief and can count lines. Add: `compressionRatio = recipeLines / briefTier3Lines`. If >30:1 = WARNING, >50:1 = BLOCKING. Output to unified gate JSON (B-01). Zero manual tracking.
- **File(s):** `design-system/pipeline/gate-runner-core.js` (add to BV-05)
- **Net spec impact:** +0 lines spec (+5 lines code)

### D-07 Add recipe keyword scan as BV-05
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- implement as-is
- **Signal:** Hover behavior (Step 2.7) and signal declarations (Step 3.4c) lost from brief with no detection.
- **Implementation:** BV-05 as a JS function in gate-runner-core.js that scans brief for keywords from each recipe step and each disposition. Missing disposition = BLOCKING. Missing recipe step = WARNING. This is CODE enforcement of a previously INSTRUCTIONAL requirement.
- **Research support:** R02 (Section 7.2), R03 (HIGH PRIORITY #2). Strongest recommendation pattern: judgment task -> binary check.
- **File(s):** `design-system/pipeline/gate-runner-core.js`
- **Net spec impact:** +0 lines spec (+20 lines code)

### D-08 REFINE-cycle tracking
- **Priority:** REMOVED
- **Signal:** REFINE produced +1.5 PA-05 but has least tracking infrastructure.
- **Original implementation:** Add 40 lines of L2 checklists mirroring Phase 3A/3B/3C for REFINE.
- **Research finding:** R08 rates CONTRADICTED. R05: "pipeline is optimizing the wrong stage" -- enriching initial spec (diminishing returns) instead of REFINE (increasing returns). But D-08 adds TRACKING to REFINE, not improvement. R01 (Dim 7): if REFINE tracking has ~67% fill rate, it adds 40 items of which ~13 unfilled. R05's actual recommendation: invest in REFINE CAPABILITY, not tracking.
- **Removal rationale:** REFINE delta metrics (lines before/after, CSS delta, PA-05 delta) are captured automatically in D-10's run-summary.json. The 35 lines of L2 checklists for REFINE add manual overhead to the pipeline's MOST EFFECTIVE subsystem. Per R09: "making the working thing more complex until it breaks."
- **Net spec impact:** -0 lines (never added)

### D-09 Gate failure triage field
- **Priority:** P3-LOW
- **Signal:** 7 gate failures triaged in unstructured notes.
- **Original implementation:** Add "Triage" column to gate results table (INTENTIONAL / FALSE-POS / GENUINE).
- **Research finding:** R08 rates mild TENSION. D-09 REPLACES free-text with structured fields (not a net add). But triage values are JUDGMENT calls (~0-65% compliance per R02). R08: auto-classify false positives using B-14 exception patterns instead.
- **Reframed implementation:** KEEP the structured triage column but PAIR with B-14 (gate exceptions). Gates with known false-positive patterns auto-tag `FALSE-POS: [pattern]`. Only genuinely novel failures require manual triage. Net manual triage decisions: ~3 per run instead of ~7.
- **File(s):** `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md`
- **Net spec impact:** +3 lines

### D-10 Create standardized run-summary.json format
- **Priority:** P2-MEDIUM
- **Status:** ALIGNED -- implement as-is
- **Signal:** Cross-run comparison requires reading two full trackers.
- **Implementation:** JSON schema auto-generated at PIPELINE_END from already-collected data. Includes: build metadata, PA-05 initial/final, tier 5, gates pass/fail, compression ratios, REFINE deltas, respawn data, timing data. ~30 lines schema, ~10 lines generation instructions.
- **Research support:** R04 (Section 6: structured state machine), R08 (ALIGNED: CODE-GENERATED, low cognitive load).
- **File(s):** New: `design-system/pipeline/run-summary-schema.json`
- **Net spec impact:** +10 lines (generation instruction in orchestrator)

### D-11 Automated alert protocol
- **Priority:** REMOVED (absorbed by B-01 + D-07)
- **Signal:** GR-48 skipped silently. Hover behaviors lost silently.
- **Original implementation:** Add ~20 lines of alert conditions to orchestrator spec (9 alert types).
- **Research finding:** R08 rates CONTRADICTED. R02: orchestrator at ~4,650 lines, ~72% compliance. D-11 adds 9 manual check conditions. R02: "The spec is eating itself." The specific alerts overlap with: brief <100 lines (BV gate), compression >50:1 (D-07), recipe:checklist ratio (BV-03), disposition missing (D-07), required gate skipped (GR-48/B-01). If B-01 and D-07 are implemented, D-11 is redundant.
- **Removal rationale:** Alerts should come FROM CODE (BV-05 catches content loss, GR-48 catches gate coverage, compression from auto-computation), not from manual orchestrator checks. B-01 and D-07 provide the alerting that D-11 was trying to create, through code enforcement rather than voluntary checks.
- **Net spec impact:** -0 lines (never added)

### D-12 Archive run artifacts to permanent storage
- **Priority:** P3-LOW
- **Status:** ALIGNED -- implement as-is
- **Signal:** Previous runs only recoverable via `git show HEAD:path`.
- **Implementation:** Add archival step at pipeline end. ~5 lines.
- **File(s):** `design-system/pipeline/artifact-orchestrator.md`
- **Net spec impact:** +5 lines

### D-13 Document REFINE as highest-ROI phase in MANIFEST
- **Priority:** P2-MEDIUM
- **Status:** ALIGNED -- implement as-is
- **Signal:** REFINE framed as failure ("REFINE verdict") rather than as the pipeline's most effective quality mechanism.
- **Implementation:** Add note documenting REFINE's ROI (+1.5 PA-05 per cycle). ~5 lines.
- **Research support:** R05 (Section 6: REFINE is the proven quality mechanism). R09 (Section 4: invest in REFINE).
- **File(s):** `design-system/pipeline/MANIFEST.md`
- **Net spec impact:** +5 lines

---

## Phase E: Process & Architecture

The adversarial reviewer identified 3 blind spots. The research elevates 2 of them and adds 1 new root cause.

### NEW-01 Audit and reduce builder input volume
- **Priority:** P1-HIGH
- **Signal:** Middle-tier (100 lines) -> PA-05 4/4. Flagship (530 lines) -> 1.5/4. Current (~2,868 lines) -> 2.0/4 initial. More spec correlates with LOWER initial quality.
- **Research finding:** R02 (Section 4): compliance degrades predictably with input volume. R05 (Section 4): the Middle-tier paradox. R09 (Section 2): "the pipeline needs agents to KNOW things without TELLING them." No existing checklist item addresses this.
- **Implementation:** Before adding ANY new builder-facing spec line, audit total builder input. Current: ~2,868 lines. Target: <1,500 lines (R02's empirical curve shows 85%+ compliance at <2,000 lines). Strategy: (1) A-10 saves ~40 lines. (2) A-11 removes a separate file. (3) A-12 removes S(x) saving ~15 lines. (4) Evaluate whether value table detail can be compressed (262 lines of pre-computed tables that may not be actionable at the brief level). (5) Each new builder-facing line must be paired with a removal.
- **File(s):** Multiple -- this is a meta-constraint on all other items.
- **Net spec impact:** Target -200 lines from builder-facing input

### NEW-02 Persistent cross-run fix tracker
- **Priority:** P1-HIGH
- **Signal:** Hover behavior proposed in 4+ retrospectives over 8+ days, never applied. GR-48 enforcement proposed in every run, never applied. The pipeline generates more analysis than implementation.
- **Research finding:** R05 (Section 5): "Stop writing retrospective items that never get implemented." R09 (E-03): "The pipeline has a PROPOSAL mechanism but no APPLICATION mechanism." R06 (Part 4): "Root Causes With NO Corresponding Checklist Item: the retrospective-to-implementation gap."
- **Implementation:** Create a persistent file `design-system/pipeline/FIX-TRACKER.md` that is checked at the START of every run (part of preflight). Format: `| Fix | Proposed Date | Status | Applied Date |`. Before any new retrospective analysis, the orchestrator must verify: have the top 5 proposed fixes from the PREVIOUS run been applied? If not, apply them before analyzing new findings.
- **File(s):** New: `design-system/pipeline/FIX-TRACKER.md`
- **Net spec impact:** +15 lines

### NEW-03 Orchestrator accountability mechanism
- **Priority:** P2-MEDIUM
- **Signal:** Orchestrator hand-constructed 3+ gate results, estimated timestamps, left 33% of tracker unfilled, ran Integrative in parallel. No retrospective scrutinized the orchestrator itself.
- **Research finding:** R01 (Dim 10: orchestrator opacity), R04 (Section 7), R09 (E-05: orchestrator opacity as hidden multiplier). "The orchestrator is both player and referee."
- **Implementation:** Add a post-run orchestrator self-assessment section (5 binary questions) to the REDUCED tracker:
  1. Did all REQUIRED gates execute? (check GR-48 result)
  2. Were any gate results hand-constructed? (check `source` field counts)
  3. Were all agent spawn timestamps recorded at spawn time? (check L3)
  4. Did the Integrative run after all 9 PA reports? (check file timestamps)
  5. Is the total tracker fill rate >80%? (count filled vs total)
  These are BINARY and SELF-VERIFIABLE. The orchestrator answers yes/no. A "no" to any question does not block the verdict but IS recorded for cross-run trending.
- **File(s):** `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md`
- **Net spec impact:** +10 lines

---

## Implementation Priority Order (Research-Informed)

Based on the leverage analysis from R06 (root cause synthesis) and R09 (meta-patterns):

### Wave 1: Close the 8-Day-Old Gaps (Implement BEFORE next run)
**These have been proposed repeatedly and never applied. ~40 lines, ~1 hour.**

1. **A-01** (+15 lines) -- Hover template slot. 100% recurrence, 20 lines closes it.
2. **A-02** (+5 lines) -- Signal declaration template slot. Same mechanism.
3. **B-07** (+5 lines) -- DPR correction before gates. Code already exists.
4. **A-12** (-15 lines) -- Remove S(x) dead spec.

### Wave 2: Gate Integrity (Makes the gate system trustworthy)
**~70 lines. Without this, no new gate has value.**

5. **B-01** (+15 lines spec, +30 code) -- Unified JSON + GR-48 as verdict precondition.
6. **B-03** (+15 lines) -- `source` field on gate results.
7. **D-07** (+0 spec, +20 code) -- BV-05 keyword scan. Catches future template losses.
8. **B-04** (+0) -- GR-11 adjacent-only fix.
9. **B-05** (+0) -- GR-15 auto-margin fix.

### Wave 3: Tracker Rebuild (Makes tracking achievable)
**Net -250 lines. Reduces 298 items to ~50.**

10. **D-01** (-250 lines) -- Reduce tracker + auto-fill + derive L0.
11. **D-04** (+0 spec, +60 script) -- Preflight automation script.
12. **NEW-02** (+15 lines) -- Persistent cross-run fix tracker.

### Wave 4: Pipeline Quality (Improves the build itself)
**~50 lines.**

13. **A-06/C-01** (+8 lines) -- Integrative timing fix.
14. **A-07** (+8 lines) -- Rendering vs composition in weaver.
15. **A-09** (+10 lines) -- REFINE builder isolation.
16. **B-02** (+5 lines) -- Post-REFINE gate re-run.
17. **B-09** (+8 lines) -- Post-REFINE mechanical sweep.
18. **B-06** (+0 spec, +40 code) -- GR-55 multi-coherence gate.
19. **D-13** (+5 lines) -- REFINE as highest-ROI phase in MANIFEST.

### Wave 5: Refinement
**Everything else by priority.**

20-33. A-04, A-05, A-08, A-10, A-11, B-08, B-11, B-14, C-02, C-03, C-04, C-06, C-07, D-03, D-05, D-06, D-09, D-10, D-12, NEW-01, NEW-03.

### Deferred Until B-01 Achieves 90%+ Coverage
B-10 (GR-67), B-12 (GR-65), B-13 (GR-66).

---

## Net Spec Impact Accounting

| Item | Spec Lines | Code Lines | Notes |
|------|-----------|------------|-------|
| A-01 | +15 | | Template slot |
| A-02 | +5 | | Template slot |
| A-03 | +3 | +15 | Reframed: code function, not instruction |
| A-04 | +0 | | Reformat only |
| A-05 | +0 | +15 | Reframed: gate, not declaration |
| A-06 | +8 | | |
| A-07 | +8 | | |
| A-08 | +5 | | Secondary to B-07 |
| A-09 | +10 | | |
| A-10 | **-40** | | Content map compression |
| A-11 | **-3** | | File merge |
| A-12 | **-15** | | S(x) removal |
| B-01 | +15 | +30 | Verdict precondition pattern |
| B-02 | +5 | | |
| B-03 | +15 | | |
| B-04 | +0 | ~10 | Code fix |
| B-05 | +0 | ~5 | Code fix |
| B-06 | +0 | +40 | New gate |
| B-07 | +5 | | |
| B-08 | +0 | +5 | Reframed: JSON, not tracker |
| B-09 | +8 | | |
| B-10 | +0 | | Deferred |
| B-11 | +0 | ~2 | Code fix |
| B-12 | +0 | | Deferred |
| B-13 | +0 | | Deferred |
| B-14 | +10 | +15 | |
| C-02 | +3 | | Downgraded |
| C-03 | +0 | +10 | Code gate |
| C-04 | +3 | +10 | Reframed: code, not instruction |
| C-05 | **removed** | | |
| C-06 | +5 | | |
| C-07 | +2 | | |
| D-01 | **-250** | | Tracker rebuild |
| D-02 | **removed** | | Absorbed by B-01/B-08 |
| D-03 | +2 | | Reframed: 1 field, not 3 surfaces |
| D-04 | +0 | +60 | Script |
| D-05 | +0 | | Reframed: auto-generated |
| D-06 | +0 | +5 | Reframed: BV-05 computation |
| D-07 | +0 | +20 | Code gate |
| D-08 | **removed** | | |
| D-09 | +3 | | Paired with B-14 |
| D-10 | +10 | +30 | JSON schema |
| D-11 | **removed** | | Absorbed by B-01/D-07 |
| D-12 | +5 | | |
| D-13 | +5 | | |
| NEW-01 | **-200** | | Builder input reduction target |
| NEW-02 | +15 | | Fix tracker |
| NEW-03 | +10 | | 5 binary questions |

### Totals

| Category | Lines |
|----------|-------|
| **Spec additions** | +175 |
| **Spec reductions** | -508 |
| **Net spec impact** | **-333 lines** |
| Code additions (not spec) | ~337 lines |

**v1 was +450 lines net spec. v2 is -333 lines net spec.** The research's central finding -- that specification volume is the root cause -- is honored. The pipeline SHRINKS by 333 lines while closing more cracks, because enforcement moves from spec to code.

---

## Key Differences from v1

1. **Tracker rebuild saves 250 lines.** D-01 reframed from "derive L0 from L2" to "reduce to 50 fields + auto-fill 30."
2. **Builder input reduction target saves 200+ lines.** NEW-01 is a meta-constraint: no new builder-facing spec without corresponding removal.
3. **4 items removed.** C-05 (tiered PA), D-02 (BV values in tracker), D-08 (REFINE tracking), D-11 (alert protocol) -- all absorbed by code enforcement or contradicted by research.
4. **4 new gates deferred until B-01 achieves 90% coverage.** B-10, B-12, B-13, and the implicit GR-66 from A-05.
5. **8 items reframed from INSTRUCTION to CODE.** A-03, A-05, B-08, C-04, D-05, D-06, B-09 follow the research pattern: code enforcement > spec instruction.
6. **3 new items added for uncovered root causes.** NEW-01 (builder input audit), NEW-02 (cross-run fix tracker), NEW-03 (orchestrator accountability).
7. **Wave 1 is explicitly "implement the 8-day-old gaps."** R05's finding that fixes are proposed repeatedly and never applied is itself addressed by making Wave 1 the FIRST priority before any new analysis.

---

*Reframed checklist complete. 33 active items. Net spec impact: -333 lines. Research-to-implementation ratio for this checklist: ~50,000 lines of analysis -> 33 implementable items -> ~175 lines of spec additions -> ~337 lines of code. The pipeline shrinks.*
