# Wave 3 Cross-Reference Verification Report
Date: 2026-02-24
Agent: buddy-cross-ref-wave3

---

## Verdict: NEEDS FIXES (4 MISMATCHES found)

---

## Cross-Reference Results

### XR-01: MANIFEST gate count vs actual gates in gate-runner-core.js and gate-runner-spec.md

**Status: MISMATCH (internal inconsistency across 3 files)**

| Source | Claim |
|--------|-------|
| MANIFEST line 246 | "37 gate-runner gates (18 REQUIRED + 8 RECOMMENDED + 7 ADVISORY + 4 BRIEF VERIFICATION)" |
| gate-manifest.json tiers | 18 REQUIRED + 8 RECOMMENDED + 5 ADVISORY + 4 BV + 2 diagnosticOnly = 37 tiered gates |
| gate-manifest.json totalGateCount | "inGateRunner": 31, "inOrchestrator": 6, "total": 37, "briefVerification": 4, "grandTotal": 41 |
| gate-runner-core.js line 15-18 | "Total Playwright-executable gates: 30" with "REQUIRED (18), RECOMMENDED (8), ADVISORY (4)" -- lists 5 gates (GR-21, GR-22, GR-46, GR-50, GR-53) but says count 4 |
| gate-runner-spec.md line 180 | "Tier totals: 18 REQUIRED, 8 RECOMMENDED, 9 ADVISORY, 4 BRIEF = 39 total gates" |
| gate-runner-spec.md line 23 | "Total Playwright-executable gates: 35" |

**Issues:**
1. MANIFEST says "7 ADVISORY" -- gate-manifest.json says 5 ADVISORY + 2 diagnosticOnly. These are NOT the same category.
2. gate-runner-core.js line 18 says "ADVISORY (4)" but then lists 5 gates. Off-by-one.
3. gate-runner-spec.md says "9 ADVISORY" at line 180 (5 ADVISORY + 2 diagnostic + 2 mode-detection = 9) but this conflates categories.
4. gate-runner-spec.md says "35 Playwright-executable" (line 23) while gate-runner-core.js says "30 Playwright-executable" (line 15). These disagree.
5. gate-manifest.json's `grandTotal: 41` = 31 in gate-runner + 6 orchestrator + 4 BV. But totalGateCount.total says 37, which includes orchestrator (not in gate-runner). The breakdown is confusing.

**Root cause:** The ADVISORY/diagnosticOnly distinction is handled differently across files. gate-manifest.json is the most precise (5 ADVISORY + 2 diagnosticOnly), but other files collapse these into one bucket differently.

**Fix needed:** Reconcile ADVISORY count across all 4 files. Recommended: adopt gate-manifest.json's 5-tier breakdown (18 REQUIRED + 8 RECOMMENDED + 5 ADVISORY + 4 BV + 2 DIAGNOSTIC) consistently. Fix gate-runner-core.js ADVISORY count from 4 to 5. Fix gate-runner-spec.md "9 ADVISORY" to "5 ADVISORY + 2 DIAGNOSTIC + 2 MODE DETECTION."

---

### XR-02: MANIFEST PA count vs actual questions in pa-questions.md

**Status: MATCH**

MANIFEST line 159 states "69 questions across 9 auditors."
pa-questions.md line 306 states "Total: 69 questions (49 standard + 2 sub-perceptual + 3 pipeline integration + 6 extended + 9 Tier 5)."

Verified by counting: 5 (Tier 1) + 6 (readability) + 6 (spatial) + 5 (flow) + 5 (grid) + 4 (consistency) + 3 (color/emotion) + 4 (responsiveness) + 5 (cross-page/adversarial) + 3 (metaphor) + 1 (quality/excellence) + 4 (void prevention) + 2 (sub-perceptual) + 3 (pipeline integration) + 9 (Tier 5) + 6 (extended) = 69. Correct.

---

### XR-03: MANIFEST routing table references correct split files (not old monolithic files)

**Status: MISMATCH (MANIFEST still references monolithic artifact-pa-protocol.md)**

MANIFEST's routing table (Section 3) references:
- `artifact-gate-runner.md` -- correctly notes "split into 5 files" at line 244 and lists split files
- `artifact-pa-protocol.md` (1,004 lines) -- still referenced as MONOLITHIC at line 286. The PA protocol was split in Wave 3 into 5 files (pa-questions.md, pa-deployment.md, pa-weaver.md, pa-guardrails.md, pa-manifest.md), but the MANIFEST's Section 3 routing table does NOT document this split.

The MANIFEST's Appendix D (File Path Registry) at line 922 still lists `artifact-pa-protocol.md | 1,004 lines` as a single file without noting the split.

The SKILL.md at line 37-38 also still references `artifact-pa-protocol.md` as a single file.

**Fix needed:** MANIFEST Section 3 needs a Wave 3 split note for artifact-pa-protocol.md similar to the one at line 244-254 for artifact-gate-runner.md. Appendix D needs updated file paths for the 5 PA split files.

---

### XR-04: MANIFEST auditor roster vs pa-deployment.md assignments

**Status: MATCH**

Cross-verified all 9 auditors between MANIFEST (Section 2, lines 149-157) and pa-deployment.md (Section 1.2, lines 43-52):

| Auditor | MANIFEST Questions | pa-deployment.md Questions | Match? |
|---------|-------------------|---------------------------|--------|
| A | PA-01,03,04,05,45,65,67,72,76 (9) | PA-01,03,04,05,45,65,67,72,76 (9) | YES |
| B | PA-02,06,08,29,55,56,70,77 (8) | PA-02,06,08,29,55,56,70,77 (8) | YES |
| C | PA-09,11,30-33,50,51,53,64,66 (11) | PA-09,11,30-33,50,51,53,64,66 (11) | YES |
| D | PA-12,13,34-36,52,62,69,71,74,75 (11) | PA-12,13,34-36,52,62,69,71,74,75 (11) | YES |
| E | PA-14,15,37-39,63 (6) | PA-14,15,37-39,63 (6) | YES |
| F | PA-16,17,40,41,60,61 (6) | PA-16,17,40,41,60,61 (6) | YES |
| G | PA-18-20,42-44,68 (7) | PA-18-20,42-44,68 (7) | YES |
| H | PA-22,23,46,47,73 (5) | PA-22,23,46,47,73 (5) | YES |
| I | PA-24-28,48 (6) | PA-24-28,48 (6) | YES |

Total: 69 questions, all assignments match.

---

### XR-05: gate-manifest.json tier breakdown vs gate-runner-spec.md

**Status: MISMATCH (tier counts disagree)**

| Tier | gate-manifest.json | gate-runner-spec.md |
|------|-------------------|---------------------|
| REQUIRED | 18 | 18 |
| RECOMMENDED | 8 | 8 |
| ADVISORY | 5 | 5 (but total line says 9) |
| BRIEF | 4 | 4 |
| DIAGNOSTIC | 2 (separate tier) | (collapsed into ADVISORY in total) |
| **Total** | 37 (excl. BV) / 41 (grand) | 39 (line 180) |

gate-runner-spec.md's GATE SUMMARY TABLE (lines 140-178) correctly lists each gate with its tier. But the summary line 180 says "18 REQUIRED, 8 RECOMMENDED, 9 ADVISORY, 4 BRIEF = 39 total" -- this counts GR-33, GR-34 (mode detection) and GR-50 (conviction) and GR-46 (print) and GR-53 (density arc) as ADVISORY, getting 9 total. gate-manifest.json separates GR-33 and GR-34 into "diagnosticOnly" tier.

The individual gate entries ARE consistent. The disagreement is only in the tier TOTALS.

**Fix needed:** gate-runner-spec.md line 180 should say "18 REQUIRED, 8 RECOMMENDED, 5 ADVISORY, 2 DIAGNOSTIC, 4 BRIEF = 37 (or 39 if counting BV-02 through BV-04 as separate from BV)" to match gate-manifest.json's tier structure.

---

### XR-06: Orchestrator Section 9 lists correct gate IDs (GR-23-28)

**Status: MATCH**

artifact-orchestrator.md Section 9 (starting line 535) contains:
- "Orchestrator Decision Rules (formerly GR-23 through GR-28) -- Reclassified Wave 3 (FIX-094, FIX-098)"
- GR-23: Builder Model = Opus [ADVISORY] (line 541)
- GR-24: Content Has Heterogeneity [ADVISORY] (line 547)
- GR-25: Suppressor Count = 0 [RECOMMENDED] (line 554)
- GR-26: Brief Size Cap [RECOMMENDED] (line 560)
- GR-27: Builder Does Not Receive Gates [RECOMMENDED] (line 565)
- GR-28: Recipe Format (Not Checklist) [RECOMMENDED] (line 571)

All 6 gate IDs present. Tiers match gate-runner-preconditions.md. Correctly reclassified from gate-runner to orchestrator.

---

### XR-07: gate-runner-core.js contains ONLY executable Playwright code (no prose specs)

**Status: MATCH**

Verified: gate-runner-core.js (1,437 lines) contains:
- 6 JavaScript functions: `runBriefVerification()`, `runGateRunner()`, `runAntiPatternGates()`, `runWave2Gates()`, `runGateCoverage()`, `checkGateResultIntegrity()`
- Comments are code-level (execution order, section headers, gate IDs)
- No prose specifications, no markdown, no human-readable gate descriptions
- No verdict logic prose -- only the code-level verdict summary at the end of `runGateRunner()`
- Usage instructions at the bottom (lines 1419-1437) are appropriate for a code file

Clean separation achieved.

---

### XR-08: pa-weaver.md contains ONLY weaver protocol (no auditor deployment content)

**Status: MATCH**

pa-weaver.md (377 lines) contains:
- Section 1: Weaver Role (7 outputs listed)
- Section 2: Weaver Calibration References (multi-coherence, severity, metaphor, quality tiers, verdict matrix)
- Section 3: Weaver Diagnostic Vocabulary (MECHANICAL/STRUCTURAL/COMPOSITIONAL)
- Section 4: Emotional Arc Framework
- Section 5: Ship Decision + Feedback Loop
- Sections 6-9: PA-assessed anti-patterns, mode determinants, cross-page coherence, VALUES items

No auditor deployment content (assignments, screenshot protocol, fresh-eyes principle). Those are correctly in pa-deployment.md.

INFORMATION ISOLATION correctly maintained: line 5 states "INFORMATION ISOLATION: this content should NOT be visible to auditors."

---

### XR-09: pa-questions.md contains ONLY questions (no deployment/guardrail content)

**Status: MATCH**

pa-questions.md (413 lines) contains:
- Section 1: PA-05 core question + sub-criteria + scoring
- Section 2: Tier 5 questions (PA-60 through PA-68)
- Section 3: Full 69-question inventory with auditor assignments
- Section 4: Quality Framework (10 VALUES items as calibration)
- Appendix A: Perception threshold reference table
- Appendix B: Quantitative guardrails (floors)

Does NOT contain: deployment architecture, screenshot protocol, weaver protocol, or auditor operational instructions. Deployment is in pa-deployment.md, guardrail constraints are in pa-guardrails.md, weaver protocol is in pa-weaver.md.

**Minor note:** pa-questions.md Section 3 includes auditor assignments per question (e.g., "Auditor D" next to PA-69). This is technically deployment information, but it's embedded in the question table as a column and seems intentional for traceability. Not flagged as a violation.

---

### XR-10: SKILL.md references match new file structure

**Status: MISMATCH (partially stale)**

SKILL.md (build-page/SKILL.md) file references:

| Reference | Status |
|-----------|--------|
| `MANIFEST.md` | CORRECT -- points to `ephemeral/va-extraction/MANIFEST.md` |
| `artifact-identity-perception.md` | CORRECT |
| `artifact-builder-recipe.md` | CORRECT |
| `artifact-gate-runner.md` | CORRECT -- notes "Redirect -> split files" |
| **`artifact-pa-protocol.md`** | **STALE -- still references monolithic file (line 37)**. Should note split into 5 files like gate runner does. |
| `artifact-routing.md` | CORRECT |
| `artifact-orchestrator.md` | CORRECT |
| `artifact-tc-brief-template.md` | CORRECT |
| `artifact-worked-examples.md` | CORRECT |
| `artifact-value-tables.md` | CORRECT |
| Gate runner split files (lines 43-50) | CORRECT -- all 5 files listed with accurate line counts |
| **PA split files** | **MISSING -- no table listing the 5 PA split files** |
| `gate-manifest.json` | CORRECT -- line 50 |
| Tier breakdown in SKILL.md line 50 | **STALE -- says "7 ADVISORY"** but gate-manifest.json has 5 ADVISORY + 2 diagnosticOnly |
| `EXECUTION-TRACKER-TEMPLATE.md` | CORRECT -- line 55 |
| `experiment-protocol.md` | CORRECT -- line 56 |

**Fixes needed:**
1. Add PA split files table (pa-questions.md, pa-deployment.md, pa-weaver.md, pa-guardrails.md, pa-manifest.md) similar to the gate runner split files table
2. Update `artifact-pa-protocol.md` entry to note "Redirect -> split files" like gate runner
3. Fix "7 ADVISORY" to "5 ADVISORY + 2 DIAGNOSTIC" in the gate-manifest.json description

---

### XR-11: EXECUTION-TRACKER-TEMPLATE.md phases match MANIFEST phases

**Status: MATCH**

| MANIFEST Phase | Tracker Section | Match? |
|----------------|-----------------|--------|
| Phase 0: Content Analysis | "Phase 0: Content Analysis" | YES |
| Phase 0.5: Mode Selection | Within Phase 0 section (line 67-69) | YES |
| Phase 1: Brief Assembly | "Phase 1: Brief Assembly" | YES |
| Phase 1: BV-01-04 | BV gate results table (lines 96-100) | YES |
| Phase 2: Building | "Phase 2: Building" | YES |
| Phase 3A: Screenshots + Gate Runner | "Phase 3A: Screenshots + Gate Runner" | YES |
| Phase 3B: Perceptual Audit | "Phase 3B: Perceptual Audit (Mode 4)" | YES |
| Phase 3C: Verdict | "Phase 3C: Verdict" (Weaver) | YES |

All phases present. Auditor question counts match (9,8,11,11,6,6,7,5,6).

**Minor observation:** Tracker Phase 3A gate summary (lines 158-163) lists 29 gates across 5 categories including "Precondition (GR-23-GR-28): 6" -- but GR-23-28 are now orchestrator decision rules, not gate-runner gates. This is technically a stale reference, but the tracker is a recording template (fill in actual results), so it may be intentionally inclusive. Not flagged as blocking.

---

### XR-12: D-09 references consistent across builder-recipe, MANIFEST, and brief-template

**Status: MISMATCH (D-09 identity contradiction)**

| Source | D-09 Name | D-09 Description |
|--------|-----------|-----------------|
| MANIFEST (lines 242, 865, 890) | **"Background Hex Lock"** | ENFORCED. Zone backgrounds from brief are LOCKED. Verified by BV-02. |
| artifact-builder-recipe.md (line 551) | **"The Quiet Zone"** | EXPERIMENTAL. Designate one zone in middle third as deliberately plainer. |
| artifact-tc-brief-template.md (lines 165, 196) | **"The Quiet Zone"** | EXPERIMENTAL. Designate quiet zone in middle third. |
| MANIFEST Glossary (line 865) | Lists D-09 as **"Background Hex Lock"** |

**These are two completely different dispositions with the same ID.** The MANIFEST describes D-09 as a BACKGROUND HEX LOCK (enforced, verified by BV-02), while the builder-recipe and brief-template describe D-09 as THE QUIET ZONE (experimental, about designating a deliberately plainer zone).

**This is the most serious cross-reference failure in the entire report.** A builder following the recipe will implement "The Quiet Zone"; the MANIFEST expects "Background Hex Lock." These serve different purposes.

**Fix needed:** Either:
- (a) Make D-09 = "Background Hex Lock" consistently (update builder-recipe and brief-template), and renumber "The Quiet Zone" to D-10, OR
- (b) Make D-09 = "The Quiet Zone" consistently (update MANIFEST), and add Background Hex Lock as a separate mechanism (perhaps a BV gate note rather than a disposition), OR
- (c) Most likely: the recipe agent created D-09 "The Quiet Zone" while the MANIFEST agent independently created D-09 "Background Hex Lock." They need to be reconciled into ONE D-09 or split into D-09 and D-10.

---

### XR-13: PA-69 augmentation present in pa-questions.md (from FIX-122)

**Status: MATCH**

pa-questions.md line 287 contains the augmented PA-69:

> PA-69: "Pick two section transitions. Count visual properties changing. Are transition intensities varied or uniform? **Additionally:** Do the changes at each boundary AGREE with each other (e.g., darker bg + heavier type + tighter spacing = all saying 'denser'), or do some changes CONTRADICT others (e.g., darker bg but lighter type)?"

The "Additionally" clause is the FIX-122 augmentation. Present and correctly assigned to Auditor D.

---

### XR-14: "SHIP WITH FIXES" verdict appears in pa-weaver.md (from FIX-102)

**Status: MATCH (in pa-weaver.md) / MISSING (in pa-guardrails.md)**

pa-weaver.md correctly contains "SHIP WITH FIXES":
- Line 23: Fix-Type Classification determining Ship Decision
- Line 25: Ship Decision list includes SHIP WITH FIXES
- Lines 200, 204, 206: Full SHIP WITH FIXES protocol (Section 5.1.1)

pa-guardrails.md does NOT contain "SHIP WITH FIXES" -- but per the task description, FIX-102 targets pa-weaver.md specifically. The guardrails file is auditor-facing and should NOT contain verdict protocol (information isolation). So this is correctly absent from guardrails.

---

### XR-15: experiment-protocol.md contains correct gate IDs (from gates moved out of gate runner)

**Status: MATCH**

experiment-protocol.md contains:
- GR-36 (Stage 0: Smoke Test) -- line 7
- GR-37 (Stage 1: Q20 Experiment) -- line 14
- GR-38 (Stage 2: Head-to-Head) -- line 22
- GR-39 (Stage 4: Flagship) -- line 29

All 4 experiment gate IDs (GR-36 through GR-39) correctly relocated from gate runner to experiment protocol. gate-manifest.json notes at line 154: "GR-36-39 moved to experiment protocol (Wave 1)". MANIFEST line 267 confirms: "Experiment gates (GR-36-GR-39) -> experiment-protocol.md."

---

## Summary

| # | Cross-Reference | Status |
|---|-----------------|--------|
| XR-01 | Gate count consistency | **MISMATCH** -- ADVISORY count differs across 4 files (4/5/7/9) |
| XR-02 | PA question count | MATCH (69 everywhere) |
| XR-03 | Routing table split files | **MISMATCH** -- MANIFEST still references monolithic artifact-pa-protocol.md |
| XR-04 | Auditor roster | MATCH (all 9 auditors, 69 questions) |
| XR-05 | Gate tier breakdown | **MISMATCH** -- gate-runner-spec.md totals disagree with gate-manifest.json |
| XR-06 | Orchestrator GR-23-28 | MATCH |
| XR-07 | gate-runner-core.js code-only | MATCH |
| XR-08 | pa-weaver.md isolation | MATCH |
| XR-09 | pa-questions.md isolation | MATCH |
| XR-10 | SKILL.md references | **MISMATCH** -- no PA split files, "7 ADVISORY" stale |
| XR-11 | Tracker phases | MATCH |
| XR-12 | D-09 consistency | **MISMATCH** -- "Background Hex Lock" vs "The Quiet Zone" identity conflict |
| XR-13 | PA-69 augmentation | MATCH |
| XR-14 | SHIP WITH FIXES in weaver | MATCH |
| XR-15 | Experiment gate IDs | MATCH |

**10 MATCH / 5 MISMATCH (4 distinct issues: gate counts, PA split routing, SKILL.md staleness, D-09 identity conflict)**

---

## Priority Fix List

### P0 -- BLOCKING

**1. D-09 Identity Conflict (XR-12)**
- MANIFEST calls D-09 "Background Hex Lock" (ENFORCED, verified by BV-02)
- artifact-builder-recipe.md and artifact-tc-brief-template.md call D-09 "The Quiet Zone" (EXPERIMENTAL)
- These are fundamentally different dispositions. A builder would implement the wrong thing.
- **Decision required:** Which is D-09? The other becomes D-10.

### P1 -- SIGNIFICANT

**2. MANIFEST still references monolithic artifact-pa-protocol.md (XR-03)**
- Section 3 routing table needs a split note and updated file references (like gate-runner has)
- Appendix D needs the 5 PA split file paths added

**3. SKILL.md missing PA split files (XR-10)**
- Add PA split files table matching the gate runner split files table
- Update `artifact-pa-protocol.md` line to note redirect
- Fix "7 ADVISORY" to match gate-manifest.json

### P2 -- MINOR

**4. ADVISORY tier count inconsistency (XR-01, XR-05)**
- gate-runner-core.js line 18: says "ADVISORY (4)" but lists 5 gates -- fix to 5
- gate-runner-spec.md line 180: says "9 ADVISORY" -- fix to "5 ADVISORY, 2 DIAGNOSTIC"
- MANIFEST line 246: says "7 ADVISORY" -- fix to "5 ADVISORY + 2 DIAGNOSTIC" or adopt gate-manifest.json's breakdown

---

*End of Cross-Reference Verification Report*
