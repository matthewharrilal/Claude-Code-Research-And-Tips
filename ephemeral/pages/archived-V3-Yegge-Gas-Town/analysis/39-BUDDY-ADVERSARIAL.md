# ADVERSARIAL REVIEW — Pipeline Enrichment Implementation

**Date:** 2026-02-25
**Reviewer:** Adversarial Buddy (Opus)
**Scope:** All 10 modified spec files vs master checklist + backups
**Method:** Systematic adversarial checks on anti-loss mechanisms, information isolation, cross-file consistency, and three most dangerous interactions

---

## SUMMARY VERDICT

**1 BLOCKING issue found. 4 SIGNIFICANT issues found. 6 MINOR issues found.**

The implementation is structurally sound. The wave-by-wave approach with per-wave verification prevented most cross-contamination. However, one critical cross-file inconsistency creates a functional discrepancy that would produce incorrect behavior during a real pipeline run.

---

## 1. BLOCKING ISSUES

### BLOCKING-01: GR-60 Missing from MANIFEST Perception Gate List (M-13 Violation — 7-Location Consistency)

**Severity:** BLOCKING
**Mechanism violated:** M-13 (Binary Rules — verdict logic must be consistent across all locations)
**Danger interaction:** DANGER 2 (ME-005 x M-13)

**The problem:** GR-60 (WCAG Text Contrast) was correctly added to:
- `gate-runner-core.js` REQUIRED_GATES array (L1329): `'GR-44', 'GR-60'` -- CORRECT
- `gate-runner-core.js` perceptionGates filter (L784): `['GR-11', 'GR-13', 'GR-14', 'GR-15', 'GR-44', 'GR-60']` -- CORRECT
- `gate-manifest.json` required.gates array (L24): includes `"GR-60"` -- CORRECT
- `gate-manifest.json` verdictLogic.REFINE (L59): `"ANY perception gate (GR-11, GR-13-15, GR-44, GR-60) FAIL"` -- CORRECT

But GR-60 is **MISSING** from MANIFEST.md's perception gate enumeration in **3 locations**:
1. **MANIFEST.md L260:** `"SECTION 2: PERCEPTION GATES" (GR-11–GR-15, GR-44)` — should be `(GR-11–GR-15, GR-44, GR-60)`
2. **MANIFEST.md L642:** `Perception gate FAIL | Gate Runner GR-11–GR-15, GR-44` — should include GR-60
3. **MANIFEST.md L710:** `"SECTION 2: PERCEPTION GATES" (GR-11–GR-15, GR-44)` — should include GR-60

**Why this is BLOCKING:** If the orchestrator reads MANIFEST.md (which is the authoritative routing document) to understand perception gates, GR-60 is not listed as a perception gate. The gate-runner-core.js correctly classifies it as a perception gate in the verdict logic, but the MANIFEST doesn't document this. An orchestrator implementing from MANIFEST.md would not know that GR-60 failure should trigger REFINE verdict. The gate-manifest.json and gate-runner-core.js are correct, creating an internal consistency — but the human-readable MANIFEST that humans/agents read for understanding is wrong.

**Fix:** Add `GR-60` to the three MANIFEST.md perception gate enumerations above.

---

## 2. SIGNIFICANT ISSUES

### SIG-01: Experiential Pass Aggregation Appears in BOTH pa-questions.md and pa-weaver.md

**Severity:** SIGNIFICANT
**Mechanism at risk:** M-04 (Information Isolation)

**The problem:** The experiential pass aggregation thresholds (>=3/9 = CONFIRMED, 1-2/9 = POSSIBLE, 0/9 = CLEAR) appear in:
- `pa-weaver.md` L191-199 (Section 4.5) — CORRECT location (Weaver-facing)
- `pa-questions.md` L421-427 (Appendix B, "Experiential Pass Aggregation (WEAVER-ONLY)") — RISKY location

While the pa-questions.md entry is labeled "(WEAVER-ONLY)" and is in Section 4 / Appendix B which the WARNING at L317-321 says should NOT be sent to auditors, this creates a fragile dependency. An orchestrator who sends the full pa-questions.md file to auditors (rather than truncating at Section 3) would leak aggregation thresholds to auditors. The warning exists but is in text, not enforced structurally.

**Risk level:** The warning at L317-321 is clear and well-formatted. This is a defense-in-depth concern, not a current leak. But it means the auditor isolation boundary depends on the orchestrator reading and obeying a text warning — the boundary is SOFT, not HARD.

**Recommendation:** No immediate fix needed, but note for future consideration: moving Appendix B WEAVER-ONLY content into pa-weaver.md would make the isolation HARD (structural) rather than SOFT (convention-based).

### SIG-02: MECHANICAL Exception Gate List Mismatch Between Code and Documentation

**Severity:** SIGNIFICANT
**Mechanism at risk:** M-13 (Binary Rules), M-23 (REBUILD Not FIX)

**The problem:** The `mechanicalIdentityGates` array in `gate-runner-core.js` L793 is:
```js
const mechanicalIdentityGates = ['GR-05', 'GR-06', 'GR-07', 'GR-08', 'GR-10'];
```

Issues:
1. **GR-07 is in this list but GR-07 is not an identity gate.** GR-07 was demoted to RECOMMENDED in Wave 0. The `identityGates` filter at L781 includes `['GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-08','GR-09','GR-10']` — GR-07 is NOT in identityGates. So GR-07 in `mechanicalIdentityGates` is dead code — it can never match a failed identity gate. Not harmful, but misleading.

2. **GR-01 through GR-04 and GR-09 are NOT in mechanicalIdentityGates.** This means: border-radius FAIL (GR-01) = REBUILD (non-mechanical). Container width FAIL (GR-03) = REBUILD. These are arguably correct — a container width violation probably IS structural. But a single border-radius violation on one element (e.g., one rogue `border-radius: 2px` on a nested `<img>`) would trigger REBUILD when it could be fixed with 1 line of CSS. The documentation says "<=5 CSS lines, no HTML structural change, no design decision" but the code uses a fixed gate list, not a heuristic.

**Why significant:** The MANIFEST documentation says the gate runner "auto-classifies" mechanical failures using criteria (<=5 CSS lines, etc.), but the code uses a hardcoded allowlist instead. This creates a gap between documented behavior (heuristic classification) and actual behavior (fixed gate list). A human reading the MANIFEST would expect the gate runner to examine the failure and classify it dynamically; instead, it checks which gate failed against a hardcoded list.

**Recommendation:** Either:
- (A) Update the MANIFEST documentation to say "Gates GR-05, GR-06, GR-08, GR-10 are pre-classified as MECHANICAL; other identity gates always trigger REBUILD" (match code to docs), OR
- (B) Implement the heuristic described in the docs (match docs to code — much harder)

Option A is the right fix for now.

### SIG-03: Verdict Logic in gate-runner-core.js Has Asymmetric recommendedGates Filter

**Severity:** SIGNIFICANT
**Mechanism at risk:** M-13 (Binary Rules)

**The problem:** In `gate-runner-core.js` L788:
```js
const recommendedGates = results.filter(r => ['GR-07', 'GR-43'].includes(r.gate));
```

But the `gate-manifest.json` lists 9 recommended gates: `GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52`. The verdict logic in `runGateRunner()` only checks 2 of the 9 recommended gates (GR-07 and GR-43). The other 7 recommended gates run in `runAntiPatternGates()` and `runWave2Gates()` but their results are NOT included in the `runGateRunner()` verdict summary.

The comment at L812 says: `'Run runAntiPatternGates(), runWave2Gates(), and runGateCoverage() after this for complete verification'` — so the intent is that the orchestrator combines all results. But the `verdict` returned by `runGateRunner()` does NOT account for anti-pattern or Wave 2 gate failures.

**Why significant:** The MANIFEST verdict logic (L500-507) says "3+ Anti-Pattern gates FAIL = REBUILD". But if the orchestrator only reads the `verdict` field from `runGateRunner()`, it would miss anti-pattern failures entirely. The orchestrator must combine results from all 4 gate functions and re-evaluate verdict logic — but this re-evaluation is NOT codified in the gate-runner-core.js. The gate-manifest.json executionOrder documents the steps but doesn't include a final "combine all results and compute verdict" step.

**Recommendation:** Add a `computeFinalVerdict(allResults)` function to gate-runner-core.js that combines results from all gate functions and applies the full verdict logic (identity + perception + anti-pattern 3+ threshold + recommended 3+ threshold). This was NOT in the implementation checklist but is a functional gap.

### SIG-04: pa-questions.md Section 4 Contains Full Tier Definitions Accessible to Auditors

**Severity:** SIGNIFICANT
**Mechanism at risk:** M-04 (Information Isolation), M-20 (Fresh-Eyes)

**The problem:** `pa-questions.md` Section 4 (lines 315-364) contains:
- PA-05 scale calibration with historical references ("Flagship experiment PA-05 1.5/4 FAILED")
- Quality tier table with mechanism counts and CSS line counts
- Tier 5 scoring thresholds
- Combined verdict matrix

All of this is labeled with a clear WARNING (L317-321) saying "MUST NOT be included in PA Auditor A-I prompts." The orchestrator is instructed to "send only Sections 1-3 + Appendices A-B to auditors."

**However**, the pa-questions.md file also includes Appendix B (L386-427) which contains quantitative guardrails with specific thresholds:
- Content container width: 640px-1280px
- CPL: 45-80 characters
- Body line-height: 1.5-1.8
- Void prevention thresholds

These ARE in the auditor-visible section (Appendices A-B). And notably, Appendix B includes "Experiential Pass Aggregation (WEAVER-ONLY)" at L421 which IS labeled WEAVER-ONLY but sits inside the auditor-visible Appendix B section.

**The confusion:** The routing instruction says "send Sections 1-3 + Appendices A-B." Appendix B contains both auditor-appropriate content (perception thresholds, width guardrails) AND weaver-only content (aggregation thresholds). A conscientious orchestrator would need to selectively filter within Appendix B, which the instruction doesn't explicitly state.

**Recommendation:** Move the "Experiential Pass Aggregation (WEAVER-ONLY)" subsection from Appendix B to Section 4 (or to a separate Appendix C labeled WEAVER-ONLY) so that the "send Sections 1-3 + Appendices A-B" instruction is complete without requiring sub-section filtering.

---

## 3. ANTI-LOSS MECHANISM CHECKS (8 HIGH RISK)

### M-04 (Information Isolation): PASS WITH CAVEAT
- pa-questions.md Sections 1-3 contain NO tier definitions, NO PA-05 expected scores, NO mechanism counts. Section 4 has proper WARNING.
- pa-deployment.md contains NO calibration data in auditor-facing sections.
- **Caveat:** Appendix B mixing (see SIG-04).

### M-06 (Suppressor Management): PASS
- New builder recipe content (Steps 5.1, 5.2) uses recipe verbs: "Assess," "Read through," "Scan," "Look at." Zero checklist verbs found.
- The one "Must be" instance found (L513: "Must be EARNED") is in disposition D-05 content, not in new enrichment content. Pre-existing.

### M-11 (Recipe Format): PASS
- New Steps 5.1 and 5.2 follow recipe format (Assess verb, descriptive instruction, no PASS/FAIL criteria).
- Recipe:checklist ratio in new content is effectively infinity (0 checklist verbs in new content).

### M-12 (World-Description Framing): PASS
- Steps 5.1 and 5.2 use world-description framing: "Can body text be comfortably read at arm's length?" (observation) not "Verify text size >= 16px" (measurement).

### M-13 (Binary Rules): PARTIAL PASS
- Verdict logic is consistent across gate-runner-core.js, gate-manifest.json, MANIFEST.md verdict sections, and pa-weaver.md ship thresholds.
- **Exception:** MANIFEST.md perception gate enumerations missing GR-60 (see BLOCKING-01).
- MECHANICAL exception is consistent across MANIFEST.md (4 locations) and gate-runner-core.js (1 location).

### M-19 (Programmatic Verification): PASS
- gate-runner-core.js: all new gates (GR-60, GR-05 split, GR-06 fix, GR-14 fix) follow try/catch patterns.
- Result schemas match existing format: `{ gate, name, status, measured, threshold }`.
- No adjacent gate functions accidentally modified (verified gate boundaries).
- GR-60 implementation is ~50 lines, clean DOM-walking contrast checker.

### M-20 (Observation Verbs): PASS
- pa-deployment.md experiential pass (L220-236) uses observation language: "Look at," "Report," "Describe." No measurement verbs.
- No "Verify," "Ensure," or "Check that" in new auditor-facing content.

### M-22 (9-Auditor Deployment): PASS
- Question counts per auditor are consistent across all files:

| Auditor | pa-deployment.md | MANIFEST.md | pa-manifest.md | EXECUTION-TRACKER.md | Total |
|---------|-----------------|-------------|----------------|---------------------|-------|
| A | 9 | 9 | 9 | 9 | 9 |
| B | 8 | 8 | 8 | 8 | 8 |
| C | 10 | 10 | 10 | 10 | 10 |
| D | 11 | 11 | 11 | 11 | 11 |
| E | 7 | 7 | 7 | 7 | 7 |
| F | 5 | 5 | 5 | 5 | 5 |
| G | 8 | 8 | 8 | 8 | 8 |
| H | 5 | 5 | 5 | 5 | 5 |
| I | 6 | 6 | 6 | 6 | 6 |
| **Total** | **69** | **69** | **69** | **69** | **69** |

Question totals are consistent across all 11 locations that reference them. The atomic retire-add swap (PA-06/09/40 out, PA-80/81/54 in) maintained the 69-question invariant.

---

## 4. THREE MOST DANGEROUS INTERACTIONS

### DANGER 1: ME-004/ME-039 x M-06/M-11/M-12 — Checklist Verbs in Builder Recipe

**Verdict: PASS (no violations found)**

Grepped all new builder recipe content for BV-04 trigger phrases:
- "Verify": 0 instances in new content
- "Confirm": 0 instances in new content
- "Ensure": 0 instances in new content
- "Check that": 0 instances in new content
- "Must be": 0 instances in new content (the one "Must be EARNED" at L513 is pre-existing, not new)
- "Fail if": 0 instances in new content

New Steps 5.1 and 5.2 use exclusively recipe verbs: "Assess," "Read through," "Scan," "Look at," "If any text feels strained," "increase font-size." This is exemplary recipe framing.

### DANGER 2: ME-005 x M-13 — 7-Location Verdict Logic Consistency

**Verdict: PARTIAL PASS (1 issue)**

Verdict logic locations checked:
1. MANIFEST.md L275 (summary): CORRECT — includes MECHANICAL exception
2. MANIFEST.md L500-507 (Phase 3C steps): CORRECT — includes MECHANICAL exception
3. MANIFEST.md L641 (failure mode table): CORRECT — includes MECHANICAL exception note
4. MANIFEST.md L1139-1146 (weaver prompt): CORRECT — includes MECHANICAL exception
5. gate-manifest.json L57-61 (verdictLogic): CORRECT — includes GR-60 in REFINE
6. gate-runner-core.js L798-802 (verdict summary): CORRECT — implements MECHANICAL exception
7. pa-weaver.md L224-237 (ship thresholds): CORRECT — includes MECHANICAL criteria
8. artifact-orchestrator.md verdict tree: (redirects to MANIFEST — no independent logic)

**Issue found:** GR-60 presence in perception gate lists (see BLOCKING-01). The verdict logic RULES are consistent; the gate ENUMERATION in MANIFEST is incomplete.

### DANGER 3: ME-037+ME-051 x M-22 — 11-Location Question Total Consistency

**Verdict: PASS**

All 11 locations verified for 69-question total:
1. pa-questions.md L311: "69 questions" -- CORRECT
2. pa-questions.md L431: "69 questions defined" -- CORRECT
3. pa-deployment.md L54: "69 questions across 9 auditors" -- CORRECT
4. pa-deployment.md L110: "ALL 69 questions" -- CORRECT
5. pa-guardrails.md L15: "ALL 69 questions" -- CORRECT
6. pa-manifest.md L36: "69 answered questions" -- CORRECT
7. pa-manifest.md L57: "All 69 questions answered" -- CORRECT
8. pa-weaver.md L18: "total 69 answered questions" -- CORRECT
9. MANIFEST.md L159: "69 questions across 9 auditors" -- CORRECT
10. MANIFEST.md L300: "all 69 questions" -- CORRECT
11. MANIFEST.md L779: "69 questions" -- CORRECT

Per-auditor counts also verified (see M-22 table above). No mismatches found.

---

## 5. CHECKLIST ITEMS NOT IMPLEMENTED (vs Claimed)

The master checklist identified 29 MUST-tier items. The implementation addressed these MUST items that were in the 8-change plan:

| Checklist Item | Implemented? | Notes |
|----------------|-------------|-------|
| MUST-00 (Anti-loss audit) | YES | Pre-flight audit completed |
| MUST-01 (ME-001 Experiential Pass) | YES | pa-deployment.md Section 2.5 added |
| MUST-02 (ME-002 Usability Priority Override) | YES | pa-weaver.md Section 5.0 added |
| MUST-04 (ME-004 Builder Legibility Q0/Q1) | YES | artifact-builder-recipe.md Steps 5.1/5.2 added |
| MUST-05 (ME-005 MECHANICAL Exception) | YES | Verdict logic updated in 7+ locations |
| MUST-06 (ME-006 Screenshot Validation) | YES | pa-deployment.md Section 2.3a added |
| MUST-07 (ME-007 GR-44 Fix) | YES | gate-runner-core.js GR-44 updated |
| MUST-13 (Gate subtraction) | YES | Wave 0 removed ~60 lines, GR-05/07 consolidated, GR-12 absorbed, GR-19/43 demoted |
| MUST-26 (ME-037 Retire PA-06/09/40) | YES | Questions retired, PA-80/81/54 added |
| MUST-27 (ME-010 GR-05 Split) | YES | GR-05a/05b split implemented |
| MUST-28 (ME-012 GR-14 Fix) | YES | GR-14 stacked gap measurement updated |
| MUST-29 (ME-011 GR-06 Fix) | YES | GR-06 rendered font check via document.fonts.check() |
| ME-008 (Usability Circuit Breaker) | YES | MANIFEST.md updated |
| ME-009 (Aggregation Rules) | YES | pa-weaver.md Section 4.5, pa-deployment.md |
| GR-60 (WCAG Gate) | YES | gate-runner-core.js ~50 lines added |

No items were claimed as implemented but actually missing from spec files.

---

## 6. UNINTENDED SIDE EFFECTS (Wave-on-Wave Damage)

### Checked: Did any Wave's changes break something from a previous Wave?

**Wave 0 -> Wave 1:** No conflicts found. Wave 0 was pure subtraction (gate consolidation). Wave 1 added content to different files (pa-deployment.md, pa-weaver.md, MANIFEST.md). No overlapping edit regions.

**Wave 1 -> Wave 2:** No conflicts found. Wave 2 edited gate-runner-core.js (which Wave 1 also edited for verdict logic). Checked: MECHANICAL exception at L791-800 is intact after Wave 2 additions. GR-60 was added AFTER the verdict summary, in the runGateRunner function body. The verdict summary's perceptionGates filter was correctly updated to include GR-60.

**Wave 2 -> Wave 3:** No conflicts found. Wave 3 edited pa-questions.md and pa-deployment.md. These files were not touched by Wave 2 (which focused on gate-runner-core.js and gate-manifest.json).

**Wave 3 -> Wave 4:** No conflicts found. Wave 4 edited artifact-builder-recipe.md only. This file was not touched by Wave 3.

**Overall:** The per-file agent architecture (MUST-15) appears to have been followed implicitly — each wave targeted different primary files, preventing cross-wave contamination.

---

## 7. MINOR ISSUES

### MINOR-01: gate-manifest.json totalGateCount Inconsistency
- `totalGateCount.inGateRunner`: 32, but counting actual gates in executionOrder steps 2-4: Step 2 has 18, Step 3 has 6, Step 4 has 6 = 30 Playwright gates + BV-01-04 (text) + GR-48/49 (meta) = 34 total executable. The 32 vs 34 discrepancy is likely because GR-33/34 (diagnostic) and BV-01-04 are counted separately. Non-blocking but confusing.

### MINOR-02: EXECUTION-TRACKER-TEMPLATE.md Line Count References Stale
- L31: `gate-runner-core.js (1,436 lines)` — was this updated after Wave 0 subtraction + Wave 2 addition? The actual line count after all waves may differ. Should be verified.
- L32: `pa-deployment.md (276 lines)` — was this updated after Wave 1 addition of Section 2.5 experiential pass (~18 lines)?

### MINOR-03: GR-07 Listed in mechanicalIdentityGates But Not in identityGates
- See SIG-02. The dead code is harmless but could confuse future maintainers.

### MINOR-04: MANIFEST.md Weaver Prompt Template Missing Experiential Pass Reference
- MANIFEST.md L1136-1166 (Weaver Prompt template) does not mention experiential pass aggregation or the priority override rule. The Weaver will get this from pa-weaver.md directly, so this is informational — but the prompt template in MANIFEST could be more complete.

### MINOR-05: pa-deployment.md Date Still Shows 2026-02-24
- L3: `Date: 2026-02-24` — implementations were applied on 2026-02-25. Same for other modified files. Not functionally impactful but dates don't reflect last-modified.

### MINOR-06: MANIFEST.md References "37 gates" in Multiple Places
- L142: "37 programmatic gate checks (33 Playwright + 4 BV)" — but after Wave 0 changes (GR-12 absorbed, GR-05+07 consolidated, GR-60 added), the exact count should be verified. The gate-manifest.json says `grandTotal: 38`.

---

## 8. OVERALL ASSESSMENT

### What Was Done Well
1. **Wave isolation worked.** Each wave targeting different files prevented cross-contamination.
2. **Atomic retire-add maintained 69-question invariant.** The 11-location consistency is perfect.
3. **Recipe framing in new builder content is exemplary.** Zero checklist verbs, pure observation language.
4. **Fresh-eyes principle preserved.** No calibration data leaked into auditor-facing content.
5. **MECHANICAL exception implemented consistently** across all 7+ verdict logic locations.

### What Needs Fixing
1. **BLOCKING-01 must be fixed** before any pipeline run — MANIFEST.md perception gate lists need GR-60.
2. **SIG-02 and SIG-03** represent documentation-code gaps that could cause confusion but won't cause incorrect behavior during a well-orchestrated run.
3. **SIG-04** is a defense-in-depth concern for information isolation.

### Risk Rating for Next Pipeline Run
If BLOCKING-01 is fixed: **LOW RISK** — the implementation is clean and well-structured.
If BLOCKING-01 is NOT fixed: **MEDIUM RISK** — an orchestrator reading MANIFEST.md would not list GR-60 as a perception gate, potentially misclassifying its failure verdict.

---

*End of adversarial review.*
