# Adversarial Review — Pipeline v4 Implementation

**Reviewer:** Opus adversarial-reviewer
**Date:** 2026-02-25
**Reports reviewed:** 7 of 8 (task1, task2, task3, task5, task6, task7, task8)
**Missing report:** task4 (gate-runner-worker) — still in progress at time of review
**Files inspected:** All modified files read directly, backup comparisons verified

---

## 1. Executive Summary

| Check | Result | Details |
|-------|--------|---------|
| 1. Self-Contradiction | **PASS with 2 SIGNIFICANT** | No fatal contradictions; 2 inter-report inconsistencies |
| 2. Defense Paradox (Crack #7) | **FAIL** | Net spec impact is NOT -333; new files add ~489 lines |
| 3. Attention Budget | **PASS with 1 SIGNIFICANT** | Most files under ceilings; routing at 1,056 concerns |
| 4. Cross-Reference Integrity | **PASS with 1 MINOR** | No dangling references found; 1 naming inconsistency |
| 5. Soft Language | **PASS** | Zero new soft language in new content |
| 6. Actually-Respected Test | **FAIL** | 3 implementations are INSTRUCTIONAL, not STRUCTURAL |
| 7. Missing Items | **PARTIAL** | Cannot fully assess without gate-runner report (task4) |
| 8. Unintended Consequences | **2 SIGNIFICANT, 2 MINOR** | Routing length, tracker baseline mismatch |

---

## 2. BLOCKING Issues

### BLOCK-01: Net Spec Impact Accounting Is Wrong — Defense Paradox Violation

The Master Checklist v2 targets **-333 lines net spec impact**. The actual numbers do not match.

**Actual file deltas (from backup or git comparison):**

| File | OLD | NEW | Delta | Reporter Claimed |
|------|-----|-----|-------|-----------------|
| artifact-tc-brief-template.md | 223 | 235 | +12 | +12 (MATCHES) |
| artifact-builder-recipe.md | 934 | 833 | **-101** | +5 (CONFLICT) |
| artifact-routing.md | 900 | 1,056 | +156 | +156 (MATCHES) |
| artifact-orchestrator.md | 1,058 | 1,159 | +101 | +29 (CONFLICT) |
| MANIFEST.md | 1,192 | 1,264 | +72 | +3 (CONFLICT) |
| pa-weaver.md | 376 | 479 | +103 | +30 (CONFLICT) |
| pa-deployment.md | 237 | 364 | +127 | +9 (CONFLICT) |
| EXECUTION-TRACKER-TEMPLATE.md | 327 | 146 | -181 | -450 (CONFLICT) |

**Explanation for discrepancies:** The backup was taken from a different baseline than the workers measured against. The workers likely measured from the HEAD commit state (post-Wave-3-cleanup), while the backup predates some Wave 3 changes. This means the workers' deltas are measuring ONLY THEIR OWN changes against the immediately-pre-v4 state, which is correct for their reports. The backup comparison measures total change since the backup was created.

**However,** the net impact accounting is still problematic because:

1. **NEW files created (not counted in the -333 target):**
   - `crack-dimensions.md`: 63 lines (spec)
   - `AUXILIARY-PROMPT.md`: 159 lines (spec)
   - `FIX-TRACKER.md`: 29 lines (spec)
   - `tracker-preflight.sh`: 139 lines (script, debatably not "spec")
   - `run-summary-schema.json`: 99 lines (schema, debatably not "spec")
   Total new files: **489 lines** (or 253 lines if only counting .md spec files)

2. **The -333 target did not account for task7's output.** Crack-dimensions.md (63 lines) and AUXILIARY-PROMPT.md (159 lines) are PIPELINE SPEC files that agents must read. They are not research artifacts. Combined 222 lines of new spec were not in the original -333 accounting.

3. **Tracker "BEFORE" is wrong.** Task 5 report claims BEFORE=596 lines. Backup shows 327 lines. The true delta from the backup is -181, not -450. If we use -181 instead of -450, the tracker saves 269 fewer lines than claimed. This shifts the net spec impact by +269 lines.

**Resolution needed:** Reconcile which baseline is canonical. If the -333 target was computed against the v1 checklist's projections (not actual file baselines), then the target itself is aspirational, not empirical. The implementation needs a verified accounting from actual file measurements before shipping.

### BLOCK-02: Three Implementations Are INSTRUCTIONAL, Not STRUCTURAL (Will Not Be Respected)

The research's central finding is: instructional implementations achieve 0-67% compliance; structural implementations achieve ~100%. Three implementations rely on voluntary orchestrator behavior:

1. **A-09 (REFINE Builder Isolation Rules):** Four prose rules in the orchestrator spec (lines 566-570). Under time pressure, the orchestrator will give the REFINE builder gate results because "it helps." No code prevents this. **Fix:** The REFINE spawn function should filter inputs — code-level enforcement that physically strips gate data from the REFINE builder's context.

2. **D-12 (Archive Run Artifacts):** Three lines of instruction at the END of the orchestrator spec (lines 701-703). This is the WORST possible position for attention (Crack #5). After a 4-hour pipeline run, the orchestrator will close the conversation without archiving. **Fix:** Make archival part of the preflight script or a post-run script that runs automatically.

3. **NEW-03 (Orchestrator Self-Assessment):** Five binary questions that the orchestrator asks itself. The orchestrator is "both player and referee" — this is asking the referee to flag their own fouls. Self-assessment by definition cannot catch the things that need catching (the orchestrator won't notice what it didn't notice). **Fix:** These 5 questions should be checked by an EXTERNAL agent or code. For example: "Were any gate results hand-constructed?" can be verified by checking `source` fields in the JSON (code), not by asking the orchestrator.

**These three items represent ~23 lines of spec that will achieve ~0-50% compliance. They should either be made structural (code/external enforcement) or honestly labeled as aspirational, not mandatory.**

---

## 3. SIGNIFICANT Issues

### SIG-01: Routing File Now 1,056 Lines — Attention Budget Concern

`artifact-routing.md` grew from 900 to 1,056 lines (+156) due to the worked examples merge (A-11). The checklist says:

> A-11: "merge worked-examples into artifact-routing.md as an appendix"

This makes routing STRUCTURAL (good — automatic inclusion). But the routing file is read by the Brief Assembler, who already receives ~4,650 lines of input. Adding 156 lines pushes the total higher.

**Counter-argument:** The appendix is at the END of the file. Position effect (Crack #5) means the Brief Assembler is LEAST likely to attend to worked examples when they need it most.

**Recommendation:** Accept the merge but add a forward-reference in the routing file's ToC: "See Appendix for concrete Gas Town worked examples before beginning Phase 0."

### SIG-02: pa-weaver.md at 479 Lines (Ceiling 480)

Task 6 reports pa-weaver.md went from 449 to 479 lines, 1 line under the 480 ceiling. This is operationally zero headroom. Any future change to the weaver protocol will breach the ceiling.

**Recommendation:** Identify ~10-15 lines in the weaver that can be compressed to create breathing room. The ROI statement (D-13 content duplicated in MANIFEST and orchestrator) is a candidate.

### SIG-03: MANIFEST Grew +72 Lines Without Documented Ceiling

The MANIFEST went from 1,192 to 1,264 lines. Task 3 reports claims the MANIFEST ceiling is 1,280 with 23 lines remaining. Task 7 added an additional section (~7 lines). But the reported ceiling was set by the checklist at 1,280 — the MANIFEST is now 1,264 with 16 lines of headroom.

The MANIFEST is read by the ORCHESTRATOR as the first thing. At 1,264 lines, it is the largest single document the orchestrator must parse. This compounds Crack #5 (position effect) and Crack #14 (complexity-induced invisibility).

### SIG-04: Duplicate A-06 Implementation

A-06 (Integrative Auditor timing) was implemented by BOTH Task 3 (orchestrator/MANIFEST) and Task 6 (pa-deployment). This was INTENTIONAL per the checklist (both files need the change), but the two implementations describe the same mechanism differently:

- Task 3 (orchestrator, line 517): "`ls p3b-pa-auditor-*.md | wc -l` returns 9 before spawning"
- Task 3 (MANIFEST, line 169): Same command, same threshold
- Task 6 (pa-deployment): "STRUCTURAL dependency — integrative MUST NOT spawn until all 9 PA auditor reports exist"

These are consistent, not contradictory. PASS — but flagged because triple implementation of one rule across 3 files increases maintenance burden (Crack #6: cross-file reference rot). If the auditor count ever changes from 9, three files must be updated.

---

## 4. MINOR Issues

### MIN-01: Tracker Baseline Mismatch

Task 5 claims "BEFORE: 596 lines." The backup shows 327 lines. The committed HEAD shows a different number. The worker may have measured from a version that existed in `design-system/pipeline/EXECUTION-TRACKER-TEMPLATE.md` (different path than the extraction directory). This is a bookkeeping issue, not a functional one — the final tracker at 146 lines is correct and achieves the reduction goal regardless of baseline.

### MIN-02: C-07 Filename Inconsistency

Task 6 standardized the integrative auditor filename to `p3b-pa-integrative.md`. But the orchestrator (Task 3, line 517) uses the glob `p3b-pa-auditor-*.md` to count PA reports. The integrative report name `p3b-pa-integrative.md` does NOT match the glob `p3b-pa-auditor-*.md`, which is correct (the glob counts the 9 primary auditors, not the integrative). This is fine — just needs to be noted for anyone who assumes `p3b-pa-*` would match everything.

### MIN-03: Task 8 (Builder Input Audit) Did Not Modify Files

Task 8 was explicitly scoped as AUDIT ONLY — no file edits. The audit identifies ~619 lines of zero-risk reductions (Tier A + B) in builder-facing files. None of these reductions were applied. This is technically correct (audit scope), but means NEW-01's -200 line target is documented but NOT implemented. The -333 net spec impact assumed NEW-01 would save -200 lines. Without those reductions, the net impact is -133, not -333.

---

## 5. Missing Checklist Items

Mapping all 33 active items (17 ALIGNED + 13 REFRAMED + 3 NEW) to implementations:

### Phase A (12 items)
| Item | Implemented? | Report |
|------|-------------|--------|
| A-01 | YES | Task 1 |
| A-02 | YES | Task 1 |
| A-03 | PARTIAL — spec in Task 3, code in Task 4 (MISSING report) | Task 3 + Task 4 |
| A-04 | YES | Task 1 |
| A-05 | Code-only (Task 4 MISSING report) | Task 4 |
| A-06 | YES (3 files) | Task 3 + Task 6 |
| A-07 | YES | Task 6 |
| A-08 | YES | Task 2 |
| A-09 | YES (but INSTRUCTIONAL — see BLOCK-02) | Task 3 |
| A-10 | YES | Task 1 |
| A-11 | YES | Task 2 |
| A-12 | YES | Task 2 |

### Phase B (10 non-deferred items)
| Item | Implemented? | Report |
|------|-------------|--------|
| B-01 | PARTIAL — spec in Task 3, code in Task 4 (MISSING report) | Task 3 + Task 4 |
| B-02 | YES | Task 3 |
| B-03 | CODE ONLY — Task 4 (MISSING report) | Task 4 |
| B-04 | CODE ONLY — Task 4 (MISSING report) | Task 4 |
| B-05 | CODE ONLY — Task 4 (MISSING report) | Task 4 |
| B-06 | CODE ONLY — Task 4 (MISSING report) | Task 4 |
| B-07 | YES | Task 3 |
| B-08 | CODE ONLY — Task 4 (MISSING report) | Task 4 |
| B-09 | YES | Task 3 |
| B-11 | CODE ONLY — Task 4 (MISSING report) | Task 4 |
| B-14 | CODE + MANIFEST — Task 4 (MISSING report) | Task 4 |

### Phase C (5 non-removed items)
| Item | Implemented? | Report |
|------|-------------|--------|
| C-01/A-06 | YES (see A-06) | Task 3 + Task 6 |
| C-02 | UNKNOWN — not mentioned in any available report | MISSING |
| C-03 | CODE ONLY — Task 4 (MISSING report) | Task 4 |
| C-04 | CODE ONLY — Task 4 (MISSING report) | Task 4 |
| C-06 | YES | Task 6 |
| C-07 | YES | Task 6 |

### Phase D (7 non-removed items)
| Item | Implemented? | Report |
|------|-------------|--------|
| D-01 | YES | Task 5 |
| D-03 | YES | Task 5 |
| D-04 | YES | Task 5 |
| D-05 | YES | Task 5 |
| D-09 | YES | Task 5 |
| D-10 | YES | Task 5 |
| D-12 | YES (but INSTRUCTIONAL — see BLOCK-02) | Task 3 |
| D-13 | YES | Task 3 |

### Phase E (3 NEW items)
| Item | Implemented? | Report |
|------|-------------|--------|
| NEW-01 | AUDIT ONLY (no reductions applied) | Task 8 |
| NEW-02 | YES | Task 5 |
| NEW-03 | YES (but self-assessment — see BLOCK-02) | Task 5 |

### Summary
- **Confirmed implemented:** 21 items
- **Partially implemented (code pending in Task 4):** 9 items (A-03 code, A-05, B-01 code, B-03, B-04, B-05, B-06, B-08, B-11, B-14, C-03, C-04)
- **Missing implementation:** C-02 (screenshot parity — downgraded to P3 but not confirmed as skipped or implemented)
- **Audit only / not applied:** NEW-01 (builder input reduction — audit done, reductions not applied)

---

## 6. Net Spec Impact Accounting

### By Reporter Claims (Self-Reported)

| Worker | Claimed Delta |
|--------|--------------|
| Task 1 (brief template) | +12 |
| Task 2 (recipe + routing) | +5 (recipe) +156 (routing) = +161 |
| Task 3 (orchestrator + MANIFEST) | +29 (orch) +3 (manifest) = +32 |
| Task 4 (gate runner) | UNKNOWN (report missing) |
| Task 5 (tracker) | -450 (tracker) + ~267 (3 new files) = -183 |
| Task 6 (PA protocol) | +30 (weaver) +9 (deployment) = +39 |
| Task 7 (crack taxonomy) | +63 (crack-dims) +159 (aux prompt) +7 (MANIFEST) = +229 |
| Task 8 (builder audit) | 0 (audit only) |
| **Self-reported total (excl Task 4)** | **+290** |

### Compared to -333 Target

The -333 target assumed:
- Spec additions: +175 lines
- Spec reductions: -508 lines (mainly D-01 -250, NEW-01 -200, A-10 -40, A-12 -15, A-11 -3)

**Actual status:**
- D-01 saved: -181 (from backup), not -250. Worker claims -450, which appears to be from a different baseline (old tracker at 596 vs backup at 327). The checklist assumed the tracker was ~596 lines and targeted ~150 = -446 savings. Actual: 327 -> 146 = -181.
- NEW-01 saved: 0 (audit only, no reductions applied). Target was -200.
- A-10, A-12, A-11: Implemented per reports. Approximate -58 combined.
- NEW FILES NOT IN TARGET: +253 spec lines (crack-dims 63 + aux-prompt 159 + fix-tracker 29 + MANIFEST adds ~2)

**Estimated actual net impact:** Very approximately +290 (from reports) minus whatever Task 4 saves/adds.

**Verdict on -333 target: NOT MET.** The two biggest reduction drivers (D-01 tracker rebuild and NEW-01 builder input reduction) did not achieve their projected savings. D-01 saved approximately -181 (not -250 or -450) because the actual baseline was smaller than assumed. NEW-01 identified reductions but did not apply them. And new files (crack-dimensions.md, AUXILIARY-PROMPT.md) add ~222 spec lines not in the original budget.

---

## 7. Crack Dimension Coverage

Based on Task 7's crack-dimensions.md and cross-referencing with implementations:

| # | Dimension | Status | Assessment |
|---|-----------|--------|------------|
| 1 | Template Slot Absence | CLOSED | A-01 + BV-05. Strong. |
| 2 | Compression Loss | PARTIALLY CLOSED | BV-05 keyword scan catches some but not all loss. |
| 3 | Voluntary Non-Execution | CLOSED | GR-48 as verdict precondition is structural. Strong. |
| 4 | Execution-Recording Divergence | CLOSED | Source field (B-03) is structural. Depends on Task 4. |
| 5 | Position Effect / Attention Decay | MITIGATED | Recipe format helps but file ceilings are not enforced by code. |
| 6 | Cross-File Reference Rot | PARTIALLY CLOSED | Aux Prompt Gate 1 helps, but the routing file now has 1,056 lines. |
| 7 | Defense Paradox | **WORSENED** | Tracker reduced (good), but 5 new files + 222 new spec lines + MANIFEST growth. Net spec is positive, not negative. The pipeline GREW. |
| 8 | Spec Ambiguity / Soft Language | CLOSED | Zero soft language in new content. Verified. |
| 9 | Environmental / Platform Variance | CLOSED | DPR correction is strong. |
| 10 | Orchestrator Opacity | PARTIALLY CLOSED | Self-assessment is self-policing. See BLOCK-02. |
| 11 | Mode / Context Sensitivity | MITIGATED | Gate detection helps. |
| 12 | Downstream Propagation | PARTIALLY CLOSED | Depends on Task 4 gates (GR-55, GR-46/66). |
| 13 | Feedback Loop Absence | MITIGATED | FIX-TRACKER is a good mechanism. |
| 14 | Complexity-Induced Invisibility | **WORSENED** | MANIFEST at 1,264 lines. Routing at 1,056. Orchestrator at 1,159. Adding files (crack-dims, aux-prompt) adds to the total agents must process. |

**CRITICAL FINDING:** Cracks #7 (Defense Paradox) and #14 (Complexity-Induced Invisibility) are WORSENED by this implementation. The pipeline added ~489 lines of new files and grew the MANIFEST by 72 lines. While the tracker shrank, the total pipeline surface area increased. The implementation is fighting cracks 1-6 and 8-9 while feeding cracks 7 and 14.

---

## 8. Overall Verdict

### **NEEDS FIXES**

The implementation is solid in most dimensions — the individual changes are well-crafted, soft language is zero, cross-references are clean, and most items are correctly implemented. However:

**Must fix before shipping:**

1. **BLOCK-01 (Net Impact):** Produce a verified line-count accounting from the actual canonical baseline (HEAD commit before implementation). The -333 target is not met. This must be acknowledged and either: (a) apply NEW-01 reductions to close the gap, or (b) revise the target with justification.

2. **BLOCK-02 (Instructional implementations):** A-09, D-12, and NEW-03 are instructional implementations that will achieve 0-50% compliance. Either: (a) make them structural (code enforcement), (b) honestly acknowledge they are aspirational, or (c) defer them (they add spec volume without delivering behavior change, feeding Crack #7).

**Should fix:**

3. **SIG-01:** Add a forward-reference in routing.md's introduction directing the Brief Assembler to the worked examples appendix before beginning Phase 0.

4. **SIG-02:** Create ~10-15 lines of headroom in pa-weaver.md by compressing any non-essential content.

5. **SIG-03:** Document MANIFEST's ceiling and enforce it in AUXILIARY-PROMPT audit gates.

6. Wait for Task 4 (gate-runner) report and verify B-01 through B-14, A-03 code, A-05 code, C-03, C-04, D-07 are all implemented correctly.

**The strongest parts of this implementation are:** the tracker rebuild (D-01), the GR-48 verdict precondition pattern (B-01 spec), the REFINE isolation protocol (A-09 content, even if instructional), the crack-dimensions.md as living reference (Task 7), and the builder input audit (Task 8 — excellent analysis even without applying reductions).

**The weakest part is:** the net spec impact. The implementation aimed to shrink the pipeline by 333 lines. It likely grew the pipeline by 100-300 lines (pending Task 4 accounting). This directly contradicts the research's central finding that specification volume is the root cause.

---

*Adversarial review complete. 7/8 reports analyzed, all modified files inspected, backup comparisons verified, soft language scanned, cross-references checked, all 33 checklist items mapped.*
