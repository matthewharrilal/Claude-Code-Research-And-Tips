# Wave 2 Cross-Reference Verification Report

**Date:** 2026-02-24
**Scope:** Verify all cross-references between 8 pipeline artifact files after Wave 2 edits.
**Method:** Full-text read of all 8 files + targeted grep for known risk areas.

---

## Overall Verdict: NEEDS FIXES

**8 discrepancies found: 6 SIGNIFICANT, 2 MINOR.**

The GR-43/GR-51 renumbering was handled CORRECTLY in the gate-runner file. However, MANIFEST.md was NOT updated to reflect Wave 2 gate count changes. Multiple stale references to "35 gates" and "66 questions" remain in MANIFEST.md.

---

## 1. Gate ID Consistency

### 1.1 Gate IDs in artifact-gate-runner.md

**Complete gate inventory from gate-runner summary table (lines 530-574):**

| Category | Gate IDs | Count |
|----------|----------|-------|
| Brief Verification | BV-01, BV-02, BV-03, BV-04 | 4 |
| Identity | GR-01 through GR-10 | 10 |
| Perception | GR-11 through GR-15, GR-44 | 6 |
| Anti-pattern | GR-17 through GR-22, GR-45, GR-51 | 8 |
| Output | GR-43, GR-50 | 2 |
| Precondition | GR-23 through GR-28 | 6 |
| Mode | GR-33, GR-34 | 2 |
| Meta | GR-48, GR-49 | 2 |
| Measurement | GR-52, GR-53 | 2 |
| Accessibility | GR-46 | 1 |
| **TOTAL** | | **43** |

**Gaps in numbering (by design):** GR-16 (absorbed), GR-29-32 (moved to orchestrator), GR-35 (moved to PA), GR-36-39 (moved to experiment protocol), GR-40-42 (moved to orchestrator), GR-47 (skipped, covered by BV-01).

### 1.2 GR-43 Renumbering Check

**CRITICAL CHECK:** Was GR-43 "Background Delta Distribution" correctly renumbered to GR-51?

- **artifact-gate-runner.md line 498-505:** GR-51 is correctly defined as "Background Delta Distribution [RECOMMENDED]" with note: "renumbered from GR-43 to GR-51 to avoid collision with existing GR-43 Self-Evaluation"
- **artifact-gate-runner.md line 342-348:** GR-43 is correctly defined as "Self-Evaluation Comment Existence"
- **artifact-gate-runner.md summary table line 566:** GR-43 = "Self-evaluation comment" (REQUIRED)
- **artifact-gate-runner.md summary table line 572:** GR-51 = "Bg delta distribution" (RECOMMENDED)
- **artifact-gate-runner.md Appendix D line 834:** Explicit note: "GR-47 intentionally skipped... GR-51 renumbered from source GR-43 to avoid collision with existing Self-Evaluation gate."

**Verdict: PASS.** GR-43/GR-51 renumbering is CORRECT and CONSISTENT within artifact-gate-runner.md. No residual "GR-43 = background delta" references found anywhere.

### 1.3 MANIFEST Gate References

**FAIL - 6 stale references to "35 gates" in MANIFEST.md:**

| MANIFEST Line | Text | Expected | Actual | Severity |
|---------------|------|----------|--------|----------|
| 141 | "Run 35 programmatic gate checks" | 43 | 35 | SIGNIFICANT |
| 141 | "Structured JSON results (35 gates: PASS/FAIL)" | 43 | 35 | SIGNIFICANT |
| 244 | "L6 GATES (35 gates + 34 VALUES items rerouted)" | 43 gates | 35 gates | SIGNIFICANT |
| 245 | "35 gates (17 REQUIRED + 8 RECOMMENDED + 6 ADVISORY + 4 BRIEF VERIFICATION)" | 43 gates (18 REQUIRED + 12 RECOMMENDED + 9 ADVISORY + 4 BV) | 35 gates (17 REQUIRED + 8 RECOMMENDED + 6 ADVISORY + 4 BV) | SIGNIFICANT |
| 441 | "see artifact-gate-runner.md for the 35-gate inventory" | 43-gate | 35-gate | SIGNIFICANT |
| 472 | "Gate runner results (35 gates: PASS/FAIL)" | 43 | 35 | SIGNIFICANT |
| 752 | "35 gates (17 REQUIRED + 8 RECOMMENDED + 6 ADVISORY + 4 BV + 1 output)" | 43 gates (18 REQUIRED + 12 RECOMMENDED + 9 ADVISORY + 4 BV) | 35 | SIGNIFICANT |
| 789 | "All 35 gates in artifact-gate-runner.md" | 43 | 35 | SIGNIFICANT |
| 823 | "artifact-gate-runner.md (35 gates, executed as Playwright JavaScript)" | 43 | 35 | SIGNIFICANT |

**Note on tier breakdowns:** MANIFEST says "17 REQUIRED + 8 RECOMMENDED + 6 ADVISORY + 4 BV" (= 35). Gate-runner says "18 REQUIRED + 12 RECOMMENDED + 9 ADVISORY + 4 BV" (= 43). The MANIFEST was NOT updated for Wave 2 gate additions.

Detailed tier reconciliation against gate-runner summary table:

| Tier | MANIFEST says | Gate-runner says | Discrepancy |
|------|-------------|-----------------|-------------|
| REQUIRED | 17 | 18 (GR-01-10, GR-11-15, GR-43, GR-44, GR-48) | MANIFEST missing GR-48 |
| RECOMMENDED | 8 | 12 (GR-17-20, GR-25-28, GR-45, GR-49, GR-51, GR-52) | MANIFEST missing GR-45, GR-49, GR-51, GR-52 |
| ADVISORY | 6 | 9 (GR-21-24, GR-33-34, GR-46, GR-50, GR-53) | MANIFEST missing GR-46, GR-50, GR-53 |
| BV | 4 | 4 (BV-01-04) | Match |
| **Total** | **35** | **43** | **-8** |

### 1.4 Orchestrator Gate References

The orchestrator file (artifact-orchestrator.md) references gates primarily via item citations and verdict logic, not by gate counts. No stale "35 gates" references found in orchestrator. The verdict logic (Section 7) references gate categories (Identity, Perception, Anti-pattern) which remain structurally correct.

**Verdict: PASS** for orchestrator gate references.

---

## 2. Gate Count Consistency

### 2.1 Gate-Runner Internal Consistency

Gate-runner states at line 33: **"Total: 43 gates"** with the formula "(42 - 13 + 6 + 8 = 43)".

Verification:
- Gate Categorization table (lines 26-31): 18 REQUIRED + 12 RECOMMENDED + 9 ADVISORY + 4 BV = **43**
- Summary table (lines 530-574): I count 43 distinct gate entries. **MATCHES.**
- Line 576: "Total gates: 43 (was 35 after Wave 1, +8 new gates in Wave 2)"
- Tier breakdown (lines 577-586): 4 + 10 + 6 + 8 + 2 + 6 + 2 + 2 + 2 + 1 = **43**

**Verdict: PASS.** Gate-runner is internally consistent at 43 gates.

### 2.2 MANIFEST Gate Count

**FAIL.** MANIFEST references "35 gates" in 9 locations (see Section 1.3 above). Must be updated to 43.

### 2.3 GR-48 Internal Consistency

GR-48 (Gate Coverage Completeness) at gate-runner line 474 says: "All 17 REQUIRED gate IDs have a result AND at least 4 of 8 RECOMMENDED gates have a result."

But the gate categorization table says 18 REQUIRED gates. GR-48 itself IS one of the 18 REQUIRED gates, so when it runs LAST and checks "all REQUIRED gates produced results," it should check 17 other REQUIRED gates (not including itself).

At gate-runner line 569, the summary table shows GR-48 checking "All 17 REQUIRED + 4/8 RECOMMENDED."

At gate-runner line 2219 (in executable code): `]; // 17 REQUIRED gates (not counting GR-48 itself)`

**Verdict: PASS.** The "17 REQUIRED" in GR-48's check method is CORRECT because GR-48 excludes itself. The TOTAL REQUIRED count is 18 (including GR-48). This is consistent. The "4 of 8 RECOMMENDED" is slightly stale (now 12 RECOMMENDED, not 8), but since GR-48 says "at least 4" this is a minimum threshold that still works. MINOR issue -- the "8" should be "12" for accuracy.

---

## 3. PA Question Count Consistency

### 3.1 PA-Protocol Internal Count

- Part 3 header (line 173): "FULL PA QUESTION INVENTORY (69 Questions)"
- Part 3 breakdown (line 334): "Total: 69 questions (49 standard + 2 sub-perceptual + 3 pipeline integration + 6 extended + 9 Tier 5)"
- Section 4.2 (line 398): "Total: 69 questions across 9 auditors"
- Section 4.4 (line 442): "ALL 69 questions across ALL 9 auditors"
- Section 4.6 (line 455): "69 YES entries across 9 manifests"
- Section 4.6 (line 479): "69 answered questions"

**Verdict: PASS.** PA-protocol is internally consistent at 69 questions.

### 3.2 MANIFEST PA Question Count

**FAIL.** MANIFEST references "66 questions" in 3 locations:

| MANIFEST Line | Text | Expected | Actual | Severity |
|---------------|------|----------|--------|----------|
| 158 | "Total: 66 questions across 9 auditors." | 69 | 66 | SIGNIFICANT |
| 753 | "COVERED -- 66 questions across 9 auditors" | 69 | 66 | SIGNIFICANT |
| 790 | "All 66 PA questions in artifact-pa-protocol.md" | 69 | 66 | SIGNIFICANT |

These were NOT updated when Wave 2 added 6 new questions (PA-72 through PA-77) and removed 3 (PA-07, PA-10, PA-21). Net change: +3, from 66 to 69.

---

## 4. Auditor Assignment Consistency

### 4.1 PA-Protocol Auditor Assignments (line 386-396)

| Auditor | Questions (per pa-protocol) | Count |
|---------|---------------------------|-------|
| A | PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67, PA-72, PA-76 | 9 |
| B | PA-02, PA-06, PA-08, PA-29, PA-55, PA-56, PA-70, PA-77 | 8 |
| C | PA-09, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-53, PA-64, PA-66 | 11 |
| D | PA-12, PA-13, PA-34, PA-35, PA-36, PA-52, PA-69, PA-71, PA-62, PA-74, PA-75 | 11 |
| E | PA-14, PA-15, PA-37, PA-38, PA-39, PA-63 | 6 |
| F | PA-16, PA-17, PA-40, PA-41, PA-60, PA-61 | 6 |
| G | PA-18, PA-19, PA-20, PA-42, PA-43, PA-44, PA-68 | 7 |
| H | PA-22, PA-23, PA-46, PA-47, PA-73 | 5 |
| I | PA-24, PA-25, PA-26, PA-27, PA-28, PA-48 | 6 |
| **TOTAL** | | **69** |

Expected per task: A=9, B=8, C=11, D=11, E=6, F=6, G=7, H=5, I=6 = **69**. **MATCHES.**

### 4.2 MANIFEST Auditor Assignments (lines 148-156)

| Auditor | MANIFEST lists | Count | PA-Protocol lists | Count | Match? |
|---------|---------------|-------|-------------------|-------|--------|
| A | PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67 | 7 | + PA-72, PA-76 | 9 | **NO** (missing PA-72, PA-76) |
| B | PA-02, PA-06, PA-07, PA-08, PA-29, PA-56 | 6 | PA-02, PA-06, PA-08, PA-29, PA-55, PA-56, PA-70, PA-77 | 8 | **NO** (has removed PA-07, missing PA-55, PA-70, PA-77) |
| C | PA-09, PA-10, PA-11, PA-30-33, PA-50-53, PA-55, PA-64, PA-66 | 14 | PA-09, PA-11, PA-30-33, PA-50-51, PA-53, PA-64, PA-66 | 11 | **NO** (has removed PA-10, PA-52 moved to D, PA-55 moved to B) |
| D | PA-12, PA-13, PA-34-36, PA-69, PA-70, PA-71, PA-62 | 9 | + PA-52, PA-74, PA-75 | 11 | **NO** (missing PA-52, PA-74, PA-75; PA-70 moved to B) |
| E | PA-14, PA-15, PA-37-39, PA-63 | 6 | same | 6 | YES |
| F | PA-16, PA-17, PA-40, PA-41, PA-60, PA-61 | 6 | same | 6 | YES |
| G | PA-18-20, PA-42-44, PA-68 | 7 | same | 7 | YES |
| H | PA-21-23, PA-46, PA-47 | 5 | PA-22, PA-23, PA-46, PA-47, PA-73 | 5 | **NO** (has removed PA-21, missing PA-73) |
| I | PA-24-28, PA-48 | 6 | same | 6 | YES |

**FAIL.** MANIFEST auditor assignments do NOT reflect Wave 2 changes:
1. **Removed questions still listed:** PA-07 (Auditor B), PA-10 (Auditor C), PA-21 (Auditor H)
2. **New questions not listed:** PA-72 and PA-76 (Auditor A), PA-77 (Auditor B), PA-73 (Auditor H), PA-74 and PA-75 (Auditor D)
3. **Redistributed questions not reflected:** PA-52 (C->D), PA-55 (C->B), PA-70 (D->B)
4. **Auditor counts wrong:** A says 7 (should be 9), B says 6 (should be 8), C says 14 (should be 11), D says 9 (should be 11), H says 5 (correct count but wrong questions)

---

## 5. Recipe Step Numbering

### 5.1 Builder-Recipe Step Verification

- Step 1.1: Read tokens.css -- **EXISTS** (line 23)
- Step 1.1b: Mechanism Catalog Quick-Reference -- **EXISTS** (line 40)
- Step 1.2: Read components.css -- **EXISTS** (line 55)
- Step 1.3: Read the 73-line template -- **EXISTS** (line 69)
- Step 1.4: Assess vocabulary -- **EXISTS** (line 75)
- Step 2.1 through 2.9: Creative decisions -- **ALL EXIST** (lines 102-236)
- Step 2.4: Select callout variant semantics -- **EXISTS** (line 160)
  - Forward reference to Step 3.4b: **EXISTS** (line 175)
- Step 3.1 through 3.5: Scaffolding deployment -- **ALL EXIST** (lines 250-371)
- Step 3.4b: Adapt components to zone character -- **EXISTS** (line 337)
  - Back reference to Step 2.4: **EXISTS** (line 341)
- No gaps, no duplicates in numbering.

**Verdict: PASS.** Step numbering is sequential and complete. Step 3.4b exists between 3.4 and 3.5. Forward/backward references between Step 2.4 and Step 3.4b are present and correct.

### 5.2 MANIFEST References to Recipe Steps

MANIFEST Section 3 (lines 218-241) references "PHASE 1" through "PHASE 6" and mechanism minimums within the recipe. These are high-level references that remain valid after Wave 2.

**Verdict: PASS.**

---

## 6. Section Number Consistency

### 6.1 PA-Protocol Part Numbers

- Part 1: PA-05 -- The Core Question (line 19) -- **EXISTS**
- Part 2: Tier 5 -- Flagship Detection (line 98) -- **EXISTS**
- Part 3: Full PA Question Inventory (line 173) -- **EXISTS**
- Part 3.5: Quality Framework (line 338) -- **EXISTS**
- Part 4: 9-Auditor Deployment Architecture (line 364) -- **EXISTS**
  - 4.1: Architecture Overview (line 366)
  - 4.2: Auditor Assignments (line 379)
  - 4.3: PA-05 Distributed Cross-Validation Protocol (line 403) -- **NEW in Wave 2, EXISTS**
  - 4.4: Agent Requirements (line 426) -- was 4.3, renumbered
  - 4.5: Integrative Auditor (line 457) -- was 4.4, renumbered
  - 4.6: Weaver (line 471) -- was 4.5, renumbered
  - 4.7: Weaver Diagnostic Vocabulary (line 520) -- **NEW in Wave 2, EXISTS**
- Part 5: Screenshot Pre-Capture Pattern (line 539) -- **EXISTS**
- Part 6: Emotional Arc Assessment (line 595) -- **EXISTS**
- Part 7: 12 VALUES Items Rerouted (line 682) -- **EXISTS**
- Part 8: PA-Assessed Anti-Patterns (line 747) -- **EXISTS**
- Part 9: Cross-Page Coherence (line 787) -- **EXISTS**
- Part 10: Ship Decision and Feedback Loop (line 805) -- **EXISTS**
- Part 11: Mode Determinants (line 846) -- **EXISTS**
- Part 12: Complete Layer 7 Item Registry (line 871) -- **EXISTS**

**Internal cross-references:**
- Part 4.3 references Part 1.2 (PA-05 sub-criteria) -- VALID
- Part 4.6 references Part 4.3 (cross-validation) -- VALID
- Part 4.7 references itself as new diagnostic vocabulary -- VALID
- Part 7 header warns "WEAVER USE ONLY" (FIX-084) -- present

**Verdict: PASS.** PA-protocol section numbers are consistent and internal cross-references are valid.

### 6.2 MANIFEST Section References to PA-Protocol

MANIFEST line 280-285 references PA-protocol sections:
- "PART 1: PA-05 -- THE CORE QUESTION" -- **VALID** (pa-protocol line 19)
- "4.2 Auditor Assignments (PART 4)" -- **VALID** (pa-protocol line 379)
- "PART 5: SCREENSHOT PRE-CAPTURE PATTERN" -- **VALID** (pa-protocol line 539)
- "PART 6: EMOTIONAL ARC ASSESSMENT" -- **VALID** (pa-protocol line 595)
- "4.4 Integrative Auditor (PART 4)" -- **STALE** -- was 4.4 before Wave 2, now renumbered to 4.5 (pa-protocol line 457)
- "4.5 Weaver (PART 4)" -- **STALE** -- was 4.5 before Wave 2, now renumbered to 4.6 (pa-protocol line 471)

**FAIL.** Two section number references in MANIFEST are stale:

| MANIFEST Line | Reference | Expected | Actual | Severity |
|---------------|-----------|----------|--------|----------|
| 284 | "4.4 Integrative Auditor" | 4.5 | 4.4 | MINOR |
| 285 | "4.5 Weaver" | 4.6 | 4.5 | MINOR |

---

## 7. Removed Content References

### 7.1 PA-07, PA-10, PA-21 References

**These questions were REMOVED in Wave 2.** Checking all files for residual references:

| File | Reference | Context | Severity |
|------|-----------|---------|----------|
| MANIFEST.md line 149 | PA-07 in Auditor B assignment | Removed question still in roster | SIGNIFICANT |
| MANIFEST.md line 150 | PA-10 in Auditor C assignment | Removed question still in roster | SIGNIFICANT |
| MANIFEST.md line 155 | PA-21 in Auditor H assignment (PA-21-23 range notation) | Removed question still in roster | SIGNIFICANT |

**In pa-protocol itself:** PA-07, PA-10, PA-21 do NOT appear in the question inventory (Part 3) or the auditor assignment table (Section 4.2). They were correctly removed from pa-protocol.

**In artifact-gate-runner.md:** No references to PA-07, PA-10, or PA-21. Clean.

**In artifact-orchestrator.md:** No references to specific PA question IDs. Clean.

**Verdict: FAIL in MANIFEST only.** The removed questions are still listed in MANIFEST's Agent Roster (Section 2).

### 7.2 Stale Gate Count References

Already documented in Section 1.3 above. Nine references to "35 gates" in MANIFEST that should say "43 gates."

### 7.3 Stale Question Count References

Already documented in Section 3.2 above. Three references to "66 questions" in MANIFEST that should say "69 questions."

---

## 8. Term Consistency

### 8.1 "Execution Brief" vs "Activation Brief"

**MANIFEST:** Uses "Execution Brief" consistently in body text (post-Wave 1 fix). Glossary (line 845) correctly documents: "Previously called 'Activation Brief' -- name retained in some artifacts as legacy."

**artifact-gate-runner.md:** Uses "activation brief" in 3 locations:
- Line 82: "verify the activation brief before it reaches the builder"
- Line 377: "Scan activation brief for known suppressor patterns"
- Line 386: "Count lines in activation brief"
- Line 868: "the assembled activation brief" (code comment)

**artifact-routing.md:** Uses "activation brief" in 4 locations:
- Line 259, 507, 520, 654, 668

**artifact-orchestrator.md:** Uses "brief" without "activation" prefix in body text. Source item citations reference "activation brief" from original extraction documents, which is acceptable.

**Verdict: MINOR inconsistency.** The gate-runner and routing files still use "activation brief" rather than "Execution Brief." The MANIFEST glossary acknowledges this is legacy naming. Not blocking but noted.

### 8.2 Tier Capitalization

"REQUIRED" / "RECOMMENDED" / "ADVISORY" capitalization is consistent across gate-runner and MANIFEST. Both use ALL CAPS for tier names.

**Verdict: PASS.**

### 8.3 Brief Verification Gate Naming

BV-01 through BV-04 naming is consistent between MANIFEST (lines 28-31, 247-250) and gate-runner (lines 80-117).

**Verdict: PASS.**

### 8.4 PA-05 Cross-Validation Terminology

MANIFEST line 284 references "4.4 Integrative Auditor" (should be 4.5 post-Wave 2) but the concept of PA-05 cross-validation is not directly referenced in MANIFEST. The pa-protocol introduces it in Section 4.3 (new in Wave 2).

**Verdict: PASS** (no cross-reference needed for the new cross-validation protocol since MANIFEST doesn't reference it).

---

## Summary of All Discrepancies

### SIGNIFICANT (6 issues, all in MANIFEST.md)

| # | File | Issue | Fix Required |
|---|------|-------|-------------|
| 1 | MANIFEST.md (9 locations) | "35 gates" should be "43 gates" | Update all 9 references: lines 141 (x2), 244, 245, 441, 472, 752, 789, 823 |
| 2 | MANIFEST.md line 245 | Tier breakdown "17 REQUIRED + 8 RECOMMENDED + 6 ADVISORY + 4 BV" | Update to "18 REQUIRED + 12 RECOMMENDED + 9 ADVISORY + 4 BV" |
| 3 | MANIFEST.md (3 locations) | "66 questions" should be "69 questions" | Update lines 158, 753, 790 |
| 4 | MANIFEST.md lines 148-156 | Auditor roster has removed PA-07, PA-10, PA-21 | Remove PA-07 from B, PA-10 from C, PA-21 from H |
| 5 | MANIFEST.md lines 148-156 | Auditor roster missing new PA-72-77 | Add PA-72, PA-76 to A; PA-77 to B; PA-73 to H; PA-74, PA-75 to D |
| 6 | MANIFEST.md lines 148-156 | Auditor roster missing redistributions | Move PA-52 C->D, PA-55 C->B, PA-70 D->B; update counts |

### MINOR (2 issues)

| # | File | Issue | Fix Required |
|---|------|-------|-------------|
| 7 | MANIFEST.md line 284 | "4.4 Integrative Auditor" should be "4.5" | Update section reference |
| 8 | MANIFEST.md line 285 | "4.5 Weaver" should be "4.6" | Update section reference |

### Noted but Acceptable

| # | File | Issue | Status |
|---|------|-------|--------|
| N1 | artifact-gate-runner.md, artifact-routing.md | "Activation brief" terminology persists | Acknowledged as legacy in MANIFEST glossary |
| N2 | GR-48 description | "4 of 8 RECOMMENDED" (now 12 RECOMMENDED) | Threshold still works, minor inaccuracy |

---

## Files Requiring Changes

Only **MANIFEST.md** needs changes. All other artifact files are internally consistent and cross-reference correctly with each other.

### Recommended Fix Order

1. **Gate counts:** Find-replace "35 gates" -> "43 gates" in all 9 MANIFEST locations
2. **Tier breakdown:** Update the tier count formulas (17+8+6+4 -> 18+12+9+4) in lines 245 and 752
3. **PA question count:** Find-replace "66 questions" -> "69 questions" in 3 locations
4. **Auditor roster:** Rewrite lines 148-156 to match pa-protocol Section 4.2:
   - A: PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67, PA-72, PA-76 (9 questions)
   - B: PA-02, PA-06, PA-08, PA-29, PA-55, PA-56, PA-70, PA-77 (8 questions)
   - C: PA-09, PA-11, PA-30-33, PA-50, PA-51, PA-53, PA-64, PA-66 (11 questions)
   - D: PA-12, PA-13, PA-34-36, PA-52, PA-69, PA-71, PA-62, PA-74, PA-75 (11 questions)
   - E: PA-14, PA-15, PA-37-39, PA-63 (6 questions)
   - F: PA-16, PA-17, PA-40, PA-41, PA-60, PA-61 (6 questions)
   - G: PA-18-20, PA-42-44, PA-68 (7 questions)
   - H: PA-22, PA-23, PA-46, PA-47, PA-73 (5 questions)
   - I: PA-24-28, PA-48 (6 questions)
5. **Section references:** Update "4.4 Integrative Auditor" -> "4.5" and "4.5 Weaver" -> "4.6"

---

## Cross-File Consistency Matrix

| Checked Pair | Status |
|-------------|--------|
| gate-runner <-> MANIFEST | **FAIL** (gate counts, tier breakdowns) |
| pa-protocol <-> MANIFEST | **FAIL** (question counts, auditor assignments, section numbers) |
| orchestrator <-> MANIFEST | PASS |
| builder-recipe <-> MANIFEST | PASS |
| routing <-> MANIFEST | PASS |
| tc-brief-template <-> MANIFEST | PASS |
| value-tables <-> MANIFEST | PASS |
| gate-runner <-> pa-protocol | PASS (no direct cross-references) |
| gate-runner <-> orchestrator | PASS |
| pa-protocol <-> orchestrator | PASS |
| builder-recipe <-> routing | PASS |
| builder-recipe <-> tc-brief-template | PASS |

**Root cause:** All 8 discrepancies are in MANIFEST.md, which was NOT updated as part of Wave 2. Wave 2 edited gate-runner, pa-protocol, orchestrator, builder-recipe, and routing -- but not MANIFEST. The MANIFEST still reflects Wave 1 state (35 gates, 66 questions, pre-redistribution auditor assignments).
