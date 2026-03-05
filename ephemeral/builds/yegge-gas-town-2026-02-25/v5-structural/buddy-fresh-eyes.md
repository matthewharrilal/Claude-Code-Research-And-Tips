# Fresh-Eyes Review — Pipeline v3 Operational Files
## Date: 2026-02-26
## Reviewer: Opus agent with zero prior pipeline context

---

## Methodology

I read the 11 specified files with no prior knowledge of the pipeline's development history. This report documents what appears wrong, inconsistent, or confusing to a first-time reader.

---

## 1. MANIFEST.md

### BLOCKING

**F-01: Agent count contradictions (MANIFEST vs orchestrator)**
- MANIFEST.md line 5: "Maps 885 extracted items across 9 artifact files to **17 agents**"
- MANIFEST.md line 72: "**Total agents:** 17"
- MANIFEST.md line 201: "**Total: 17 agents**"
- artifact-orchestrator.md line 742 (Section 8 table): "**16 agents**"
- artifact-orchestrator.md line 155: "Total agents with observer: 17"
- The Section 8 summary table says 16 but the observer section says 17. The table appears to NOT count the observer in its per-phase breakdown (it adds up to 15 worker agents + orchestrator = 16, missing observer). Meanwhile the MANIFEST consistently says 17.
- **Fix:** Update artifact-orchestrator.md Section 8 total from "16 agents" to "17 agents" (15 workers + 1 orchestrator + 1 observer = 17), or add the observer row to the table.

**F-02: PA question count contradiction between orchestrator and other files**
- artifact-orchestrator.md line 452: "PA-9 Q49-54 (total **54** PA questions across 9 auditors)"
- MANIFEST.md line 183: "**Total: 69 questions** across 9 auditors"
- pa-deployment.md line 153: "**Total: 69 questions** across 9 auditors"
- pa-questions.md line 332: "**Total: 69 questions**"
- The orchestrator's Phase 3B section (line 449-453) uses an archaic sequential numbering ("PA-1 Q1-6, PA-2 Q7-12, ..., PA-7 Q37-42, PA-8 Q43-48, PA-9 Q49-54") that adds to 54 and does NOT match the thematic question assignments used everywhere else. This is a stale block of text that contradicts the authoritative pa-deployment.md.
- **Fix:** Replace orchestrator lines 449-453 with the thematic auditor assignment table from MANIFEST.md Section 2 Phase 3B (or a reference to pa-deployment.md Section 1.2). Delete the "PA-1 Q1-6..." sequential block entirely.

**F-03: "activation brief" terminology persists in operational files**
- gate-runner-core.js line 40: "the assembled activation brief" (comment)
- artifact-orchestrator.md line 705: "Scan activation brief for known suppressor patterns"
- gate-runner-preconditions.md line 10: "verify the activation brief"
- gate-runner-preconditions.md line 64: "Scan activation brief"
- artifact-identity-perception.md lines 402, 406, 425: "activation brief"
- artifact-routing.md lines 259, 507, 520, 625, 639: "activation brief"
- The council explicitly retired the "Activation Pipeline" name per MANIFEST.md line 57 and artifact-orchestrator.md line 60. All uses of "activation brief" in body text of operational files violate this ruling.
- **Fix:** Replace "activation brief" with "execution brief" or "the brief" in all operational files listed above. Source/extract files (extract-d01-d03.md etc.) can retain the term as historical citations.

### SIGNIFICANT

**F-04: Builder input line count inconsistency (~3,600 vs ~4,250)**
- artifact-orchestrator.md line 110: "Total builder input: **~4,250 lines** (not '73 lines')"
- artifact-orchestrator.md line 120: "CF-01: '73-line constraint layer within **~4,250** total builder input'"
- artifact-builder-recipe-compose.md line 34: "~**3,600** total builder input lines"
- artifact-routing.md lines 462, 642, 644: "~**3,600**"
- MANIFEST.md line 369: "Total builder input is **~3,600** lines"
- The orchestrator was updated to ~4,250 (likely accounting for the new Pass A/B recipe split adding lines) while other files retain the older ~3,600 figure. An outside reader cannot tell which is correct.
- **Fix:** Reconcile to one figure across all files. If ~4,250 is the current correct total (which is the orchestrator's breakdown sum), update the recipe and routing files. If ~3,600 was correct, revert the orchestrator.

**F-05: BV gate count inconsistencies across files**
- EXECUTION-TRACKER-TEMPLATE.md line 32: "BV gates: ___/**8** PASS"
- d10-observer-protocol.md line 97 (OBS-15): "BV-01 through BV-**05** all ran"
- d10-observer-protocol.md line 309: "Look for 'BV gates: X/**7** PASS'"
- MANIFEST.md line 28, 436: "BV-01 through BV-**05**"
- gate-runner-spec.md line 32: "`runBriefVerification(briefText)` — Phase 1 (BV-01 through BV-**05**)"
- gate-runner-core.js line 38: "SECTION 1: BRIEF VERIFICATION GATES (BV-01 through BV-**07**)"
- gate-manifest.json: 8 BV gates (BV-01 through BV-08)
- There are at least THREE different counts for BV gates: 5 (Quickstart/MANIFEST brief verification loop), 7 (gate-runner-core.js comment), and 8 (gate-manifest.json/tracker). The observer prompt says to look for "X/7 PASS" but the tracker field is "/8 PASS".
- The issue is that BV-01 through BV-05 run in the brief verification LOOP, BV-06 runs at pipeline startup, BV-07 runs before builder spawn, and BV-08 runs post-build. So they are spread across different execution phases. But the tracker field "BV gates: ___/8 PASS" implies all 8 should be counted together.
- **Fix:** Align the tracker to either count only the loop gates (___/5) or all gates (___/8). Update observer OBS-15 to match the tracker's denominator. Fix the observer prompt template (line 309) where it says "X/7 PASS" — this should be either /5 or /8.

**F-06: MANIFEST references "artifact-builder-recipe.md" (singular) but actual files are split**
- MANIFEST.md Section 3 (line 247): "### artifact-builder-recipe.md (~828 lines)"
- MANIFEST.md lines 425-426 reference: "artifact-builder-recipe.md 'PHASE 1' through 'PHASE 6'"
- MANIFEST.md Appendix D (line 1023): Shows "artifact-builder-recipe.md" as a redirect
- The actual operational files are `artifact-builder-recipe-compose.md` (~833 lines) and `artifact-builder-recipe-enrich.md` (~300 lines).
- The body text in Section 3 and Phase 1 references the pre-split singular file name. While Appendix D does list the split files, a first-time reader following the Phase-by-Phase instructions in Section 4 would look for a file that is now a redirect.
- **Fix:** Update Section 3 header and Phase 1 references to mention both split files, or at minimum note the redirect. The Phase 1 "Brief Assembler" input references should specify which split file provides which phases.

**F-07: IMPROVE targeting lists R-A and R-C but references "R-B" in tracker**
- artifact-orchestrator.md line 510-529: IMPROVE targeting defines R-A (Pass B only) and R-C (Pass A + new Pass B). There is no R-B defined.
- EXECUTION-TRACKER-TEMPLATE.md line 136: "| 2 (IMPROVE) | **R-A/R-C** | ___ |"
- This is internally consistent. However, the naming scheme (R-A, skipping R-B, jumping to R-C) is confusing. A newcomer would wonder: "What happened to R-B?" There is no explanation for the gap in the naming sequence.
- **Fix:** Either add a note explaining why R-B is absent (e.g., "R-B was removed — mechanical fixes are now handled by POLISH, not IMPROVE"), or rename R-A/R-C to something more intuitive like IMPROVE-B (Pass B only) and IMPROVE-FULL (both passes).

**F-08: Observer OBS-08 checks "Pass 1 HTML" but pipeline uses "Cycle 0"/"Pass A"/"Pass B"**
- d10-observer-protocol.md line 76 (OBS-08): "Grep **Pass 1** HTML for `<!-- RESIDUAL:`"
- The pipeline's operational terminology uses "Pass A" and "Pass B" for the two builder passes, and "Cycle 0", "Cycle 1", "Cycle 2" for iteration rounds. "Pass 1" is ambiguous — it could mean "Pass A" or "first cycle" or the observer's own "Pass 1" verification.
- Also at line 377: "Grep **Cycle 0** HTML" — this uses the correct terminology.
- **Fix:** Change OBS-08 "Pass 1 HTML" to "Cycle 0 HTML" or "Pass B HTML" to match the pipeline's operational vocabulary.

**F-09: Mini-PA question count discrepancy**
- pa-deployment.md line 402: "**Total: 16 questions across 3 auditors.**"
- pa-deployment.md line 398-401: When you count the listed questions for Auditors A (6) + C (5) + G (5) = 16. But the MANIFEST.md Quickstart (line 203) says "15 questions" for Mini-PA.
- **Fix:** Reconcile: verify the actual Mini-PA question count and update whichever file is wrong.

### ADVISORY

**F-10: Orchestrator Section 4 numbering uses "Phase 1.5" for Mode Selection**
- artifact-orchestrator.md line 243: "## SECTION 4 (Phase 1.5): MODE SELECTION"
- MANIFEST.md Phase-by-Phase (line 406): "### Phase 0.5: Mode Selection"
- One file calls it Phase 1.5, the other Phase 0.5. Both make sense (it happens between Phase 0 and Phase 1, or between Phase 1 and Phase 2), but they disagree.
- **Fix:** Pick one numbering and use it consistently.

**F-11: Recipe file claims "~200 lines" for Pass B but title area says "~300 lines"**
- artifact-builder-recipe-enrich.md line 18: "This recipe (**~200 lines**)"
- MANIFEST.md Appendix D line 1025: "**~300 lines**"
- Minor discrepancy. One is self-assessed, the other is a file listing.
- **Fix:** Update the self-assessment to match actual line count.

**F-12: "council-verdict.md" referenced but not in the reviewed file set**
- Multiple files reference "council-verdict.md" as an authority. This file is not listed among the 11 key operational files. A newcomer following the Quickstart (MANIFEST.md line 14-44) would not know to read it.
- The Quickstart says it's "Optional" (line 18) but also says it governs conflict resolution. The operational authority chain is unclear from a fresh perspective.
- **Fix:** No code change needed, but the Quickstart should note which files are AUTHORITATIVE vs historical context.

**F-13: "Value tables" referenced repeatedly but file name/path never specified**
- MANIFEST.md line 462 references "Value tables (~262 lines — CSS vocabulary for the 6-channel framework)" as builder input.
- Neither the Quickstart prerequisites (line 14-20) nor Appendix D clearly names the value tables file.
- A newcomer building for the first time would not know which file to provide.
- **Fix:** Add the value tables file path to the Quickstart prerequisites list and Appendix D.

**F-14: Observer agent count claim in d10-observer-protocol.md Section 5.3**
- d10-observer-protocol.md line 495: "Pipeline agents: **15** (current) -> **16** (with observer)."
- MANIFEST.md line 201: "**Total: 17 agents**" (already includes observer).
- The observer protocol document claims the pre-observer count is 15, which matches earlier pipeline versions but not the current MANIFEST (which already counts 17 including observer).
- **Fix:** Update Section 5.3 to reflect current agent count: "Pipeline agents: 16 (current without observer) -> 17 (with observer)."

---

## 2. artifact-orchestrator.md

### BLOCKING

(F-02 and F-03 above apply here)

### SIGNIFICANT

**F-15: Section numbering inconsistency**
- Section 0: "MASTER EQUATION AND PRECONDITIONS" — OK
- Section 1: "TOPOLOGY AND ARCHITECTURE" — OK
- Section 2: "Phase 0: CONTENT ANALYSIS" — Phase 0 = Section 2
- Section 3: "Phase 1: BRIEF ASSEMBLY" — Phase 1 = Section 3
- Section 4: "Phase 1.5: MODE SELECTION" — Phase 1.5 = Section 4
- Section 5: "Phase 2: TWO-PASS BUILDING" — Phase 2 = Section 5
- Section 6: "Phase 3: PERCEPTUAL AUDIT" — Phase 3 = Section 6
- Section 7: "Phase 4: VERDICT AND DECISION TREE" — Phase 4 = Section 7
- Section 8: "TOTAL BUILD SUMMARY" — OK
- The Phase numbers and Section numbers diverge: Phase 0 is Section 2, Phase 1 is Section 3, etc. This dual-numbering is confusing. A newcomer told to "see Phase 2" would look at Section 5, and vice versa.
- **Fix:** Either use Section numbers OR Phase numbers, not both. Suggest dropping "SECTION N" headers entirely and using "Phase N" headers throughout.

**F-16: "EXPERIMENTAL" tag on all dispositions is unclear in practice**
- artifact-orchestrator.md references "D-01 through D-09 are ALL EXPERIMENTAL" but the builder recipe (artifact-builder-recipe-compose.md) uses them as primary instructions. If everything the builder does is "experimental," the label conveys no useful information to an operator.
- **Fix:** Either define what "EXPERIMENTAL" means operationally (e.g., "do not gate-check these") or remove the tag from operational files. Keep it in the provenance/council files only.

### ADVISORY

**F-17: Repetitive restatement of the same principles**
- The orchestrator repeats "IMPROVE is the pipeline's highest-value phase: +1.0 to +1.5 PA-05 per pass" at least 3 times (lines 44, 93, 265). "Opus for builders is non-negotiable" appears at least 3 times. While redundancy aids compliance, it makes the document harder to navigate for a first-time reader because it is unclear which instance is authoritative.
- **Fix:** State each principle once in its primary section, then reference it elsewhere: "See Section 1 for model requirements."

---

## 3. gate-manifest.json

### SIGNIFICANT

**F-18: Tier count arithmetic appears inconsistent**
- Required: 22 gates listed
- Recommended: 15 gates listed
- Advisory: 9 gates listed
- Diagnostic: 2 gates
- BV: 8 gates
- Utility: 1 gate
- Sum: 22 + 15 + 9 + 2 + 8 + 1 = **57** (matches `totalGateCount.total`)
- BUT `totalGateCount.inGateRunner` = 46, `inOrchestrator` = 8, `removed` = 14. Sum: 46 + 8 + 14 = 68, not 57.
- The `removed` field seems to double-count gates that were moved (GR-23-28, GR-29-32, GR-35-42 etc.) which are no longer active.
- **Fix:** Either remove the `removed` field from `totalGateCount` (it creates confusion by mixing active and historical counts) or add a note that "total" counts only active gates while "removed" is historical.

**F-19: "iteration" tier lists gates in two places**
- gate-manifest.json lines 91-96: `"iteration"` tier lists `"gates": ["GR-78", "GR-79", "GR-80"]` AND `"procedural": ["GR-65", "GR-70", "GR-75"]`.
- GR-78/79/80 also appear in the recommended/required tiers. This creates apparent double-counting.
- The note explains the distinction (procedural vs code-enforced), but the JSON structure makes it look like a separate tier that adds 6 more gates.
- **Fix:** Move the iteration tier to a separate section (e.g., `"iterationContext"`) to avoid visual confusion with the counting tiers.

### ADVISORY

**F-20: `gateExecutionManifestTemplate.coverageStatus.requiredPresent` says "19/19"**
- gate-manifest.json line 325: `"requiredPresent": "19/19"`
- But the required tier has 22 gates.
- The 19 likely refers to GR-48's internal coverage array (21 gates - GR-48 itself = 20, minus GR-61/62 which are pre-screenshot), but the template value should be a placeholder, not a stale number.
- **Fix:** Change to "NN/22" or remove the example value.

---

## 4. gate-runner-spec.md

### SIGNIFICANT

**F-21: GR-51 name mismatch**
- gate-runner-spec.md line 153: GR-51 = "**Bg Delta Distribution**"
- MANIFEST.md Phase 2A-gate (line 137): GR-51 = "heading hierarchy"
- gate-manifest.json note (line 351): "GR-51 renumbered from source GR-43 to avoid collision"
- One file says GR-51 checks background delta distribution, the other says heading hierarchy. These are completely different checks.
- **Fix:** Determine which gate is GR-51 and update the inconsistent file. Based on the code header, GR-51 appears to be Bg Delta Distribution (a renamed Wave 2 gate), while the heading hierarchy check is likely a different gate number.

### ADVISORY

**F-22: Gate summary table BV tier labels are inconsistent**
- In the gate summary table, BV gates are labeled "REQUIRED" for tier (lines 236-239: BV-01 through BV-04).
- But BV-05 is "REQUIRED" (line 281), BV-06 through BV-08 are "BV" (lines 283-290).
- The `gate-manifest.json` groups ALL BVs under `briefVerification` tier, not "REQUIRED."
- **Fix:** Use consistent tier labeling. Either all BVs are "BV" tier or split them explicitly.

---

## 5. pa-weaver.md

### SIGNIFICANT

**F-23: Section 0 numbering confusion**
- pa-weaver.md Section 0: "WEAVER EXPERIENTIAL ANCHOR" (numbered 0 for positional enforcement)
- pa-deployment.md Section 0: "EXPERIENTIAL PASS PROTOCOL" (also numbered 0 for positional enforcement)
- Both explain that they are "Section 0" because they must be FIRST. But they are different things: one is the Weaver's experiential anchor, the other is the auditor's experiential pass. This is fine in isolation, but if someone reads both files, two different Section 0s exist.
- **Fix:** Rename the weaver's to "Section W-0" or "WEAVER PRELIMINARY" to distinguish from the auditor's Section 0.

### ADVISORY

**F-24: Weaver "manifest verification" as "FIRST ACTION" conflicts with Section 0**
- pa-weaver.md line 70: Section 0.5 says "proceed to the existing workflow below: 1. **Manifest Verification** (the current 'FIRST ACTION' — now SECOND)"
- pa-weaver.md line 86: Section 1 says "**Manifest Verification** — FIRST ACTION: verify all 9 auditor completion manifests total 69 answered questions."
- The text in Section 1 still says "FIRST ACTION" but the experiential anchor (Section 0) explicitly says this is now the SECOND action. The Section 1 text was not updated.
- **Fix:** Change Section 1 line 86 from "FIRST ACTION" to "SECOND ACTION (after experiential anchor)."

---

## 6. pa-deployment.md

### ADVISORY

**F-25: Double horizontal rule (line 377-378)**
- Two consecutive `---` separators between Sections 5 and 6. Minor formatting issue.
- **Fix:** Remove one.

**F-26: Mini-PA Auditor A question includes PA-02**
- pa-deployment.md Section 6.2 (line 398): Auditor A for Mini-PA includes "PA-01, **PA-02**, PA-03, PA-05, PA-45, PA-65"
- But the standard Mode 4 Auditor A (line 143) does NOT include PA-02 — it belongs to Auditor B (Readability + Typography).
- This means Mini-PA specifically moves PA-02 from B to A. This is intentional per Section 6.5 ("readability catch-all PA-02 is covered by Auditor A"), but it is confusing because the question reassignment is silent — a reader comparing Mode 4 and Mode 2.5 assignments would think it is a typo.
- **Fix:** Add a note at line 398: "(PA-02 reassigned from Auditor B for Mini-PA coverage)."

---

## 7. EXECUTION-TRACKER-TEMPLATE.md

### SIGNIFICANT

(F-05 BV denominator issue applies here — line 32 says /8)

**F-27: Tracker field count says 82 (line 199) but Phase 3B alone says 22 fields (line 196)**
- Phase 3B has: 9 auditor rows x 3 columns (Spawned, Report Filed, Respawns) = 27 + 4 more fields (integrative, convergence, finding) = 31.
- The listed "22" for Phase 3B seems to be a miscount.
- **Fix:** Recount Phase 3B fields and update the derived completion table. Also verify the total of 82.

### ADVISORY

**F-28: Tracker references "P3A+-5" field for experiential scan exception**
- artifact-orchestrator.md line 428: "Document this exception in the execution tracker (P3A+-5)"
- EXECUTION-TRACKER-TEMPLATE.md has no field labeled "P3A+-5". It has "Experiential scan: ___" (line 79).
- **Fix:** Either add the P3A+-5 field to the tracker or update the orchestrator reference to point to the correct field name.

---

## 8. artifact-builder-recipe-compose.md

### ADVISORY

**F-29: components.css line count inconsistency**
- artifact-builder-recipe-compose.md line 71: "Read components.css (**~944 lines**)"
- artifact-routing.md line 642: "components.css **290 lines**"
- artifact-orchestrator.md line 115: "components.css: **~944 lines** (direct file)"
- The 290 vs 944 discrepancy is large. Either the file changed or the routing file is stale.
- **Fix:** Verify the actual file size and align all references.

---

## 9. artifact-builder-recipe-enrich.md

### ADVISORY

**F-30: No issues beyond F-11 (line count discrepancy)**
- Clean file. Well-structured. Clear Phase 1-2-3 progression. The only concern is whether it is included in the Quickstart prerequisites (it is not listed, though it is in Appendix D).

---

## 10. d10-observer-protocol.md

### SIGNIFICANT

(F-08 and F-14 above apply here)

**F-31: Observer prompt template line counts contradict earlier sections**
- d10-observer-protocol.md Section 3.3 (line 137): "Pass 0" through "Pass 4" schedule defines 5 passes.
- The copy-paste observer prompt (Section 4, line 261ff) lists the same 5 passes with detailed check instructions.
- But within the prompt, Pass 1 OBS-15 (line 308-309) says to look for "BV gates: X/**7** PASS" while the tracker has /8. This means the observer prompt would ALWAYS flag the tracker's /8 value as non-matching, producing false positives.
- **Fix:** Align the observer prompt's expected pattern to match the tracker denominator.

**F-32: Observer prompt references OBS-26 in Pass 4 but it already ran in Pass 2**
- Pass 2 (line 319-334): lists "OBS-24 through OBS-27" (which includes OBS-26).
- Pass 4 (line 355): lists OBS-26 again.
- Running OBS-26 in both Pass 2 and Pass 4 is not necessarily wrong (gate results exist at both points), but it could be confusing. The observer would check it twice with potentially different results (if gates were re-run).
- **Fix:** Note that Pass 4 re-checks OBS-26 for meta-gate coverage, or remove the duplicate.

---

## 11. Cross-File Terminology and Concept Consistency

### BLOCKING

**F-33: Three vocabulary systems for iteration terminology**
Across the files, three different terminologies coexist:

| Concept | MANIFEST / orchestrator | Observer protocol | Legacy extraction files |
|---------|------------------------|-------------------|------------------------|
| First build | Cycle 0 | Pass 1 (ambiguous) | Pass 0 |
| Second build | Cycle 1 | IMPROVE | Pass 1 |
| Build passes | Pass A / Pass B | — | Pass 1 / Pass 2 / Pass 3 |
| Observer checks | — | Pass 0-4, Pass R | — |

"Pass" is overloaded: it means (a) observer verification pass, (b) builder execution pass (A/B), and (c) historical 3-pass architecture. "Cycle" is cleaner but not used everywhere.

**Fix:** Standardize: Use "Cycle" for iteration rounds (Cycle 0, Cycle 1, Cycle 2). Use "Pass A" and "Pass B" for builder execution within a cycle. Use "Observer Check N" or "Verification Pass N" for observer activities. Never use bare "Pass 1" for any concept.

---

## Summary

| Severity | Count | Most Critical |
|----------|-------|---------------|
| BLOCKING | 4 | F-01 (agent count), F-02 (PA question count), F-03 (activation terminology), F-33 (terminology overload) |
| SIGNIFICANT | 13 | F-04 (builder input lines), F-05 (BV denominator), F-06 (recipe file split), F-07 (R-B gap), F-08 (Pass 1 HTML), F-09 (Mini-PA count), F-15 (section numbering), F-16 (EXPERIMENTAL label), F-18 (gate arithmetic), F-19 (iteration tier), F-21 (GR-51 name), F-27 (tracker count), F-31 (observer BV pattern) |
| ADVISORY | 12 | F-10, F-11, F-12, F-13, F-14, F-17, F-20, F-22, F-23, F-24, F-25, F-26 |
| **TOTAL** | **29** | |

### Priority Fix Order

1. **F-02** — Fix the stale "54 questions" block in artifact-orchestrator.md (trivial, high confusion risk)
2. **F-03** — Grep-and-replace "activation brief" in operational files (5-6 files, mechanical)
3. **F-01** — Align agent count in orchestrator Section 8 table (trivial)
4. **F-05/F-31** — Align BV gate denominators across tracker + observer + spec (4-5 files)
5. **F-33** — Adopt consistent "Cycle"/"Pass A"/"Pass B" terminology (requires systematic pass)
6. **F-04** — Reconcile ~3,600 vs ~4,250 builder input (requires calculation)
7. **F-21** — Fix GR-51 name mismatch (requires checking actual gate function)
