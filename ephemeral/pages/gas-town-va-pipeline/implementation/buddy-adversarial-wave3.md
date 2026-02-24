# Wave 3 Adversarial Review
**Date:** 2026-02-24
**Agent:** buddy-adversarial
**Scope:** All 6 editor/architect task outputs from Wave 3
**Verdict:** CONDITIONAL PASS (3 CRITICAL, 5 SIGNIFICANT, 6 MINOR)

---

## CRITICAL FINDINGS

### CRIT-01: GR-48 Coverage Gate Still References Reclassified Gates (gate-runner-core.js:1336-1340)

**Severity:** CRITICAL
**Type:** Executable code bug
**File:** `gate-runner-core.js`, function `runGateCoverage()`, lines 1336-1340

The `RECOMMENDED_GATES` array in GR-48 still includes `GR-25`, `GR-26`, `GR-27`, `GR-28`:

```javascript
const RECOMMENDED_GATES = [
    'GR-17', 'GR-18', 'GR-19', 'GR-20',
    'GR-25', 'GR-26', 'GR-27', 'GR-28',  // <-- RECLASSIFIED TO ORCHESTRATOR
    'GR-45', 'GR-49', 'GR-51', 'GR-52'
]; // 12 RECOMMENDED gates
```

These 4 gates were reclassified to the orchestrator (FIX-094) and will NEVER appear in gate runner results. The coverage gate expects 12 recommended gates but only 8 can ever be present. The threshold is `>= 4/12` so passing is still possible, but:
1. The coverage report will ALWAYS list GR-25-28 as "missing recommended" -- false noise
2. Comment says "12 RECOMMENDED gates" but only 8 are collectable -- misleading
3. If the threshold were tightened even slightly (e.g., >= 50% = 6/12), the gate would be mathematically impossible to pass

**Fix:** Remove GR-25-28 from the RECOMMENDED_GATES array. Update count to 8. Threshold becomes `>= 4/8`.

---

### CRIT-02: MANIFEST References to Pre-Split PA File (MANIFEST.md, ~15 locations)

**Severity:** CRITICAL
**Type:** Cross-file reference breakage
**File:** `MANIFEST.md`

The PA protocol was split into 5 files (FIX-091), but the MANIFEST still references `artifact-pa-protocol.md` as the authoritative source throughout. Key broken references:

| Location | Reference | Problem |
|----------|-----------|---------|
| L99 | `L7 PA ... artifact-pa-protocol.md` | Layer table still points to monolithic |
| L159 | "assignments from artifact-pa-protocol.md Part 4" | Should be pa-deployment.md |
| L286 | "artifact-pa-protocol.md (1,004 lines)" | Section header still describes monolithic |
| L489 | "Calibration references from artifact-pa-protocol.md 4.5 Weaver" | Should be pa-weaver.md |
| L661 | "artifact-pa-protocol.md PART 5" | Should be pa-deployment.md |
| L707-721 | Auditor/Weaver file references | All still point to pa-protocol sections |
| L768 | Coverage verification | Still says "artifact-pa-protocol.md" |
| L805 | Verification checklist | Still says "artifact-pa-protocol.md" |
| L838 | Agent input summary | Still says "PA auditors receive ... assigned question subset" without file source |
| L922 | File registry | Only lists "artifact-pa-protocol.md (1,004 lines)" |

**Impact:** An agent following the MANIFEST will not know the 5 split files exist. It will try to load `artifact-pa-protocol.md` and get the MONOLITHIC (preserved) version -- which defeats the information isolation purpose of the split. The MANIFEST is the primary routing document; if it doesn't route to the split files, the split is decorative, not functional.

**Why this happened:** The manifest-meta-editor (task #6) updated gate-runner references but did NOT update PA protocol references. The PA architect (task #5) created the split files but could not edit the MANIFEST (strict file ownership). The MANIFEST change log (wave3-manifest-meta-changes.md) shows NO FIX number for PA split routing.

**Fix:** MANIFEST needs a PA-split equivalent of FIX-099 (routing table update). All ~15 references to `artifact-pa-protocol.md` must be updated with the appropriate split file name. The file registry (Appendix D) must add all 5 new PA files.

---

### CRIT-03: Execution Tracker Contains Pre-Split References and Stale Gate Counts

**Severity:** CRITICAL
**Type:** Stale specification
**File:** `EXECUTION-TRACKER-TEMPLATE.md`

The execution tracker was created by a separate agent (task #1) and contains multiple anachronisms:

**3a. Gate count table (lines 156-163):**
```
| Precondition (GR-23-GR-28) | 6 | ___ | ___ | ___ |
| **Total** | **29** | ___ | ___ | ___ |
```
GR-23-28 were reclassified to orchestrator. The execution tracker still lists them as gate runner gates with a total of 29. The actual gate runner total is 33 Playwright + 4 BV = 37 (per gate-architect's count) or 31 Playwright + 4 BV = 35 (per provenance file count). In any case, 29 is wrong and "Precondition (GR-23-GR-28)" should not be in the gate runner table.

**3b. Pre-flight checklist (lines 31-32):**
```
- [ ] artifact-gate-runner.md accessible (~1,780 lines)
- [ ] artifact-pa-protocol.md accessible (1,004 lines)
```
These reference the monolithic files with outdated line counts. Should reference the split files (gate-runner-core.js 1,436 lines + 4 companion files; 5 PA split files).

**3c. Weaver routing (line 226):**
```
- [ ] Weaver received calibration references from artifact-pa-protocol.md
```
Should reference `pa-weaver.md`.

**3d. Integrative Auditor PA-05 scoring (lines 202-205):**
```
- [ ] Integrative Auditor received all 9 PA reports
- [ ] Integrative Auditor received all screenshots
- [ ] PA-05 score produced: ___/4
```
The Integrative Auditor does NOT score PA-05 (FIX-083 explicitly corrected this). The Weaver scores PA-05. These fields imply the Integrative Auditor produces the PA-05 score.

**3e. D-01-D-08 reference (line 89):**
```
- [ ] Brief Assembler received disposition D-01 through D-08
```
Should be D-01 through D-09.

**Impact:** The execution tracker is the operational accountability document. If an orchestrator follows it literally, it will check for the wrong files, count the wrong gates, and misattribute PA-05 scoring to the wrong agent.

---

## SIGNIFICANT FINDINGS

### SIG-01: D-09 Quiet Zone Gameability — Anti-Pattern Is Necessary But Insufficient

**Severity:** SIGNIFICANT
**Type:** Specification gameability
**File:** `artifact-builder-recipe.md`, D-09 section (lines 551-569)

The D-09 anti-pattern reads: "empty zone with uniform cream. The quiet zone must still have CONTENT and STRUCTURE." This is a good start but has a gameability loophole:

A builder could create a "quiet zone" with minimal content (one short paragraph), a barely-different background (15 RGB delta, exactly at the floor), and call it a "breathing pause" -- reproducing the #1 failure mode from the Flagship experiment (whitespace voids) while technically satisfying D-09.

**Specific gap:** D-09 says "2-3 mechanisms (vs 4-5)" but does not define a minimum content density or maximum height-to-content ratio. A builder could create a 600px tall zone with a single 3-line paragraph and 2 mechanisms and claim compliance.

**Mitigating factor:** D-09 is tagged [EXPERIMENTAL] and is not gate-checked. PA auditors (PA-50, PA-51, PA-09) would catch whitespace voids. But the builder-facing specification itself allows the loophole.

**Recommendation:** Add a quantitative guardrail: "The quiet zone should occupy no more than 15-20% of total page scroll height. Content must fill at least 40% of the zone's vertical space." Or: "Quiet zone height should not exceed the average height of adjacent zones."

---

### SIG-02: gate-runner-core.js ADVISORY Count Discrepancy

**Severity:** SIGNIFICANT
**Type:** Count inconsistency across files
**Files:** `gate-runner-core.js` header (line 18), `gate-runner-spec.md` (line 23), `gate-manifest.json` (line 39)

| Source | ADVISORY Count | Gates Listed |
|--------|---------------|--------------|
| gate-runner-core.js header comment (line 18) | 4 | "GR-21, GR-22, GR-46, GR-50, GR-53" (actually 5 IDs) |
| gate-runner-spec.md (line 23) | 9 | "GR-21, GR-22, GR-46, GR-50, GR-53" (5 here) + GR-33, GR-34 as separate "Diagnostic" |
| gate-manifest.json | 5 (advisory) + 2 (diagnostic) | Matches spec |
| gate-architect change log (line 126) | 7 | GR-21, GR-22, GR-33, GR-34, GR-46, GR-50, GR-53 |

The core.js header says "ADVISORY (4)" but lists 5 gate IDs. The spec says 9 ADVISORY total but the summary table says "18 REQUIRED, 8 RECOMMENDED, 9 ADVISORY, 4 BRIEF = 39 total" -- which produces 39, not 37.

**Root cause:** GR-33 and GR-34 are in the spec but have no code in gate-runner-core.js. They're listed in gate-manifest.json as "diagnosticOnly" (separate from advisory). The spec counts them as ADVISORY, inflating the total.

**Impact:** An implementer cannot determine the correct total gate count from any single file. Totals reported: 30 (core.js header), 35 (core.js header sum), 37 (gate-architect log), 39 (spec summary).

**Fix:** Reconcile all files to a single authoritative count. GR-33 and GR-34 either (a) get executable code in core.js and count toward the total, or (b) are explicitly listed as "specification only, no code" and excluded from the executable count.

---

### SIG-03: Assess Disposition Deployment Still Says D-01 through D-08

**Severity:** SIGNIFICANT
**Type:** Incomplete D-09 integration
**File:** `artifact-builder-recipe.md`, line 573

After the D-09 section, the "Assess Disposition Deployment" paragraph reads:
> "After applying D-01 through D-08, the page's emotional arc should have shape"

This was NOT updated to D-01 through D-09. A builder following the recipe sequentially would see D-09, then immediately see "After applying D-01 through D-08" -- implying D-09 is not part of the assessment. This contradicts the intent of FIX-095.

**Fix:** Change "D-01 through D-08" to "D-01 through D-09" in the Assess section.

---

### SIG-04: PA Split Information Isolation Not Enforced in pa-deployment.md

**Severity:** SIGNIFICANT
**Type:** Information isolation violation
**File:** `pa-deployment.md`

The PA split design (documented in wave3-pa-architecture-changes.md) states auditors should NOT receive `pa-deployment.md`. However, `pa-deployment.md` contains the Fresh-Eyes Principle (Section 3) and Evidence Format Requirement (Section 1.4), which auditors DO need.

These items are ALSO in `pa-guardrails.md` (Sections 1, 2, 11), which auditors DO receive. So there's no functional information leak. BUT: `pa-deployment.md` also contains:

- Section 1.2: Full auditor assignment table (auditors could see each other's assignments)
- Section 1.3: Cross-validation protocol (auditors would know who cross-validates whom)
- Section 1.5: Integrative Auditor details
- Section 2.1: Screenshot protocol details

If an orchestrator accidentally routes `pa-deployment.md` to auditors (because the MANIFEST still says `artifact-pa-protocol.md`), information isolation is broken. Auditors would see tier targets, cross-validation assignments, and the full deployment architecture.

**Mitigating factor:** This is a routing risk, not a structural violation. The split files themselves are correctly scoped. But the MANIFEST routing gap (CRIT-02) makes accidental exposure likely.

---

### SIG-05: Experiment Protocol Skips Stage 3

**Severity:** SIGNIFICANT
**Type:** Specification gap
**File:** `experiment-protocol.md`

The experiment protocol defines:
- Stage 0: Smoke Test (GR-36)
- Stage 1: Q20 Experiment (GR-37)
- Stage 2: Head-to-Head (GR-38)
- Stage 4: Flagship (GR-39)

Stage 3 is missing. The notes say "Stage numbers are NOT sequential requirements" but this is confusing -- is Stage 3 intentionally omitted, or was it forgotten? An orchestrator might wonder if there's a missing stage between Head-to-Head and Flagship.

**Fix:** Either add Stage 3, or explicitly note "Stage 3 is RESERVED for future use" or renumber to 0-1-2-3.

---

## MINOR FINDINGS

### MIN-01: BV-02 Checks ALL Consecutive Hex Pairs, Not Just Zone Backgrounds

**Severity:** MINOR
**Type:** Over-broad detection
**File:** `gate-runner-core.js`, lines 69-90

BV-02 extracts ALL hex values from the brief text (including accent colors, border colors, etc.) and checks consecutive pairs. The scope note in `gate-runner-preconditions.md` acknowledges this: "This gate checks ALL consecutive hex pairs in the brief text, not just zone backgrounds." But this means a brief with adjacent hex values for, say, a border color (#5C4B3A) and an accent color (#2A7D7D) that happen to be within 15 RGB delta on some channel would false-positive. In practice, the design system's palette is divergent enough that this is unlikely, but it's worth noting.

---

### MIN-02: gate-runner-provenance.md Active Gate Count Inconsistency

**Severity:** MINOR
**Type:** Count discrepancy
**File:** `gate-runner-provenance.md`, line 128

States "Active Playwright gates: 31 (BV-01-04, GR-01-15, GR-17-22, GR-33-34, GR-43-53 minus GR-47)"

Counting: BV-01-04 (4) + GR-01-15 (15) + GR-17-22 (6) + GR-33-34 (2) + GR-43-53 (11) - GR-47 (1) = 37. But it says 31. GR-33 and GR-34 have no code in core.js. If we subtract those (2) we get 35. Still not 31.

---

### MIN-03: gate-manifest.json totalGateCount Internally Inconsistent

**Severity:** MINOR
**Type:** Count discrepancy
**File:** `gate-manifest.json`, lines 140-147

```json
"totalGateCount": {
    "inGateRunner": 31,
    "inOrchestrator": 6,
    "removed": 13,
    "total": 37,
    "briefVerification": 4,
    "grandTotal": 41
}
```

`inGateRunner (31) + inOrchestrator (6) = 37 = total`. But `total (37) + briefVerification (4) = 41 = grandTotal`. This implies BV gates are NOT in the gate runner -- but they ARE (BV-01-04 run via `runBriefVerification()` in gate-runner-core.js). The `inGateRunner: 31` appears to exclude BV gates, but the gate-manifest's own tiers section counts them separately: 18 REQUIRED + 8 RECOMMENDED + 5 ADVISORY + 4 BV + 2 Diagnostic = 37. So `inGateRunner` should be 33 (Playwright) or 37 (total scope), not 31.

---

### MIN-04: PHASE 4 Header in Recipe Still Says D-01 through D-08

**Severity:** MINOR
**Type:** Incomplete D-09 integration
**File:** `artifact-builder-recipe.md`, line 376

`## PHASE 4: DEPLOY DISPOSITIONAL INSTRUCTIONS (D-01 through D-08)`

D-09 exists below this header but the header title was not updated. Should be "D-01 through D-09".

---

### MIN-05: Execution Tracker Wave 2 Gates Missing

**Severity:** MINOR
**Type:** Incomplete coverage
**File:** `EXECUTION-TRACKER-TEMPLATE.md`

The gate results summary table (lines 156-163) has no row for Wave 2 gates (GR-45, GR-46, GR-50-53) or Meta gates (GR-48, GR-49). Only Identity, Perception, Anti-Pattern, Precondition, and Output categories are listed.

---

### MIN-06: pa-questions.md Says 69 Questions But Inventory Has Gaps

**Severity:** MINOR
**Type:** Specification clarity
**File:** `pa-questions.md`, line 306

States "Total: 69 questions" but the numbering has gaps (PA-07, PA-10, PA-21, PA-49, PA-54, PA-57-59 are absent). While the total is correct, an implementer counting from PA-01 to PA-77 would need to know which IDs are intentionally absent. Consider adding a note: "PA IDs are not sequential. The following IDs are intentionally unused: PA-07, PA-10, PA-21, PA-49, PA-54, PA-57, PA-58, PA-59."

---

## GAMEABILITY ANALYSIS

### D-09 Quiet Zone as Whitespace Void (Focus Area #4)

**Risk:** MEDIUM. The anti-pattern is defined but lacks quantitative guardrails. A compliant builder could create a large, sparse zone. **Mitigation:** PA-50 and PA-51 catch voids regardless of intent labeling. **Residual risk:** Builder claims "this is D-09" as justification during fix cycle.

### Execution Tracker "Pass" with Unfilled Sections (Focus Area #6)

**Risk:** LOW. The tracker has `[ ]` checkboxes and `___` placeholder fields. FIX-111 added Post-Run Verification that counts unmarked checkboxes. However, the completeness check itself uses `[ ]` checkboxes -- so an agent could skip the verification too. **Mitigation:** The orchestrator can grep for `___` and `[ ]` remaining after pipeline end. The automation hints section provides these patterns.

### Mode Confusion Between COMPOSED/APPLIED (Focus Area #5)

**Risk:** LOW. FIX-092 added a MODE-CONDITIONAL INPUT block to the builder prompt in MANIFEST Appendix E. CD-006 reference is COMPOSED-ONLY. Zone backgrounds are LOCKED. The conditional is clearly structured. **Residual risk:** Brief Assembler could generate COMPOSED-mode content for an APPLIED-mode build if Content Analyst misclassifies heterogeneity.

---

## VERDICT: CONDITIONAL PASS

**Rationale:** 3 CRITICAL findings prevent immediate use of Wave 3 artifacts in production. All are fixable without architectural changes:

1. **CRIT-01** (GR-48 stale references): 1-line code fix
2. **CRIT-02** (MANIFEST PA routing): ~15 text edits, mechanical
3. **CRIT-03** (Execution tracker anachronisms): ~8 field updates

The 5 SIGNIFICANT findings are real but non-blocking:
- SIG-01 (D-09 gameability): PA auditors catch the failure mode
- SIG-02 (advisory counts): Affects documentation clarity, not execution
- SIG-03 (D-08 reference): Builder can still follow D-09, it's just the assessment blurb
- SIG-04 (isolation risk): Risk only materializes if CRIT-02 is left unfixed
- SIG-05 (Stage 3): Cosmetic numbering issue

**Condition for PASS:** Fix the 3 CRITICAL issues. SIGNIFICANT and MINOR can be addressed in a follow-up sweep.

---

## CROSS-REFERENCE TO FOCUS AREAS

| Focus Area | Findings | Severity |
|-----------|----------|----------|
| 1. Gate splitting: info loss, reference breakage | CRIT-01, SIG-02, MIN-02, MIN-03 | CRITICAL + SIGNIFICANT + MINOR |
| 2. Orchestrator decision rules: Playwright wrongly placed | None found -- GR-23-28 correctly reclassified as text checks in orchestrator Section 7 | CLEAN |
| 3. PA splitting: isolation violations | SIG-04, CRIT-02 (enables the violation) | SIGNIFICANT |
| 4. D-09 quiet zone gameability | SIG-01 | SIGNIFICANT |
| 5. Mode conditionals: COMPOSED/APPLIED confusion | Clean (FIX-092 adequately addresses) | CLEAN |
| 6. Execution tracker: can it "pass" with unfilled sections | CRIT-03 (stale data), MIN-05 (missing rows) | CRITICAL + MINOR |
| 7. Cross-file references | CRIT-02 (PA files), SIG-03 (D-09 in recipe), MIN-04 (Phase 4 header) | CRITICAL + SIGNIFICANT + MINOR |

---

*End of adversarial review. 3 CRITICAL + 5 SIGNIFICANT + 6 MINOR findings. Verdict: CONDITIONAL PASS.*
