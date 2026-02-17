# Cross-Validation Report: Checklist Hardening Changes

**Date:** 2026-02-15
**Author:** cross-validator (checklist-hardening team)
**Task:** Task #8 -- Cross-validate all changes for consistency
**File Validated:** ephemeral/session-insights/18-middle-tier-checklist.md
**Sources Verified Against:**
- 21-pa05-operationalization.md
- 21-mechanism-hardening.md
- 21-missing-items-spec.md
- 21-section-b-reorder.md
- 21-checklist-changelog.md

---

## VALIDATION RESULTS: 8/10 PASS

---

### CHECK 1: PA-05 References (7 items) Consistently Use New 4 Sub-Criteria
**RESULT: PASS**

All 7 PA-05 references identified in 21-pa05-operationalization.md Section 2 have been correctly updated:

| Reference | Location | Expected Change | Actual State | Status |
|-----------|----------|-----------------|--------------|--------|
| C4.5 | Line 243 | 4 sub-criteria at 1440px (PA-05a/b/c/d) with YES/MARGINAL/NO composite | Correctly implemented with all 4 sub-criteria, thresholds (>=2, >=2.0x, hierarchy test, >=15%), and composite scoring | PASS |
| C4.10 | Line 248 | 4 sub-criteria at 768px with adjusted thresholds | Correctly implemented: PA-05a lowered to >=1, PA-05b lowered to >=1.5x, PA-05c same method, PA-05d carried from 1440px | PASS |
| D2.1 | Line 276 | Structured evidence format per sub-criterion | Correctly implemented with structured format: score + data for each sub-criterion | PASS |
| E2.1 | Line 305 | "C4.5 composite = YES (4/4 sub-criteria PASS)" | Correctly implemented with all 4 sub-criteria listed | PASS |
| E3.1 (scenario) | Line 319 | No change needed (references PA-05 outcome) | Correctly references "PA-05 = YES (C4.5)" | PASS |
| E3.3 (scenario) | Line 321 | MARGINAL = 2-3 of 4 sub-criteria | Correctly states "MARGINAL = 2-3 of 4 sub-criteria PASS" | PASS |
| E4.1 | Line 328 | "PA-05 composite = NO (0-1 of 4 sub-criteria)" | Correctly implemented | PASS |

**Evidence:** Consistent terminology across all 7 references. No reference uses the old "feels designed/formatted" language.

---

### CHECK 2: New Items Properly Formatted and Integrated
**RESULT: PASS**

All new items verified:

| New Item | Location | Format Correct (5-col table) | Content Matches Spec | Integrated in Correct Position | Status |
|----------|----------|------------------------------|----------------------|-------------------------------|--------|
| A1.0 | Line 23 | YES (ID/Check/Pass/Fail/Why) | YES -- matches 21-missing-items-spec.md exactly | YES -- before A1.1 | PASS |
| B2.5 | Line 128 | YES | YES -- matches spec | YES -- after B2.4 | PASS |
| C3.5 | Line 233 | YES | YES -- matches spec | YES -- after C3.4 | PASS |
| B4.4 | Line 148 | YES | YES -- matches 21-mechanism-hardening.md | YES -- after B4.3 | PASS |
| B4.5 | Line 149 | YES | YES -- matches spec | YES -- after B4.4 | PASS |
| B10.1 | Line 190 | YES | YES -- matches spec | YES -- first in new B10 section | PASS |
| B10.5 | Line 191 | YES | YES -- matches spec | YES -- after B10.1 | PASS |
| B10.7 | Line 192 | YES | YES -- matches spec | YES -- after B10.5 | PASS |
| B10.9 | Line 193 | YES | YES -- matches spec | YES -- after B10.7 | PASS |
| B10.12 | Line 194 | YES | YES -- matches spec | YES -- after B10.9 | PASS |
| B10.14 | Line 195 | YES | YES -- matches spec | YES -- after B10.12 | PASS |

All 11 new items (9 from missing-items + 2 from mechanism-hardening) are present, properly formatted, and in the correct positions.

---

### CHECK 3: Section B Reorder Internally Consistent
**RESULT: PASS**

Expected order per 21-section-b-reorder.md: B8 first, then B1, B9, B2, B3-B7, B10.

| Position | Expected Subsection | Actual Subsection (by line number) | Header Text | Reorder Note | Status |
|----------|--------------------|------------------------------------|-------------|--------------|--------|
| 1 | B8 | B8 (line 79) | "B8. Token Compliance (STEP 1: READ FIRST -- BEFORE ANY DESIGN)" | YES (line 81-82) | PASS |
| 2 | B1 | B1 (line 89) | "B1. Pipeline Routing (STEP 2: CLASSIFY TIER AND PATTERN)" | YES (line 91-92) | PASS |
| 3 | B9 | B9 (line 101) | "B9. Guardrail Compliance (STEP 3: KNOW PADDING FLOORS)" | YES (line 103-104) | PASS |
| 4 | B2 | B2 (line 117) | "B2. Container Width (STEP 4: SET CONTAINER WITH GUARDRAILS IN MIND) (NON-NEGOTIABLE)" | YES (line 119-120) | PASS |
| 5 | B3 | B3 (line 130) | "B3. Mechanism Deployment Breadth (STEP 5: DEPLOY ACROSS CATEGORIES)" | No explicit reorder note (correct per spec -- relative position unchanged) | PASS |
| 6 | B4 | B4 (line 141) | "B4. Mechanism Deployment Count (STEP 6: VERIFY COUNT)" | No reorder note (correct) | PASS |
| 7 | B5 | B5 (line 151) | "B5. Mechanism Justification (STEP 7: DOCUMENT MECHANISM-CONTENT FIT)" | No reorder note (correct) | PASS |
| 8 | B6 | B6 (line 159) | "B6. Fractal Coherence (STEP 8: VERIFY 2-SCALE PATTERN COHERENCE) (2 Scales for Middle)" | No reorder note (correct) | PASS |
| 9 | B7 | B7 (line 171) | "B7. Soul Compliance (STEP 9: FINAL VERIFICATION)" | YES (line 173-174) | PASS |
| 10 | B10 | B10 (line 186) | "B10. Additional Build Quality Checks (STEP 10)" | New section (correct) | PASS |

Section B header (line 72-77) correctly includes reorder note, build sequence summary: "Read constraints (B8) -> Classify tier (B1) -> Know guardrails (B9) -> Set container (B2) -> Deploy mechanisms (B3-B6) -> Verify soul (B7) -> Additional quality (B10)".

All item IDs are preserved (no renumbering). Cross-references remain valid.

---

### CHECK 4: E-Section References Point to Correct B/C Items
**RESULT: PASS**

| E Item | Expected Reference | Actual Reference (from checklist) | Status |
|--------|-------------------|-----------------------------------|--------|
| E2.4 | -> See B3.6 | "**-> See B3.6**" (line 308) | PASS |
| E2.6 | -> See B2.1 | "**-> See B2.1**" (line 310) | PASS |
| E2.7 | -> See C3.1 | "**-> See C3.1**" (line 311) | PASS |

All three deduplicated items correctly reference their source checks. The "Why This Matters" column is preserved for each.

Additional E-section reference checks:
- E4.4 references "B2.1 FAIL" (line 331) -- correct
- E4.5 references "B3.6 FAIL" (line 332) -- correct
- E3 scenarios reference C4.5, C4.10, D2.2, D2.3, D3.x -- all correct

---

### CHECK 5: Item Count in Header Matches Actual Count
**RESULT: FAIL**

**Summary statistics state (line 472):** "138 check items + 4 E3 scenarios + 6 coverage tables"

**Per-section stated counts (lines 464-471):**
| Section | Stated Count | Actual Count (row-by-row) | Delta |
|---------|-------------|---------------------------|-------|
| A | 23 | 26 (A1:6 + A2:10 + A3:3 + A4:4 + A5:3) | +3 |
| B | 46 | 53 (B8:2 + B1:4 + B9:8 + B2:5 + B3:6 + B4:5 + B5:3 + B6:7 + B7:7 + B10:6) | +7 |
| C | 22 | 22* (C1 counted as 1 compound + C2:5 + C3:5 + C4:10 = 21+1(C3.5)) OR 27 (if C1's 7 metrics each counted) | 0 or +5 |
| D | 12 | 12 (D1:5 + D2:4 + D3:3) | 0 |
| E | 12 | 15 (E1:3 + E2:7 + E4:5) | +3 |
| F | 15 | 15 (F1:5 + F2:5 + F3:5) | 0 |
| G | 8 | 8 | 0 |
| **Stated Total** | **138** | -- | -- |

**Analysis of discrepancies:**

1. **Section A (stated 23, actual 26):** The A1 conditional items (A1.3, A1.4, A1.5) appear to be counted as a single conditional item in the original methodology, since only 1 of the 3 applies per experiment. With this interpretation: A1 = 3 required (A1.0, A1.1, A1.2) + 1 conditional = 4. A = 4+10+3+4+3 = 24. Still not 23. The discrepancy of at least 1 item persists.

2. **Section B (stated 46, actual 53):** This is the largest discrepancy. The original checklist (before hardening) stated B=35 items. The reorder spec counted 44 items. The changelog added +9 new items. 44+9=53, not 46. The stated 46 appears to be calculated from original 35+11 changes, but the original 35 was itself an undercount (actual was 44).

3. **Section E (stated 12, actual 15):** E1(3) + E2(7) + E4(5) = 15. Even after E3 reclassification as scenarios (removing 4 items from count), the remaining E items total 15, not 12. The original E section had E1(3) + E2(7) + E3(4) + E4(5) = 19 items. Removing E3 as scenarios = 15. The stated 12 implies additional items were not counted -- perhaps E2.4, E2.6, E2.7 were also excluded as "references not checks." If so: 15-3=12. This interpretation is plausible but not documented.

**Corrected count (best interpretation):**

If we accept: (a) A1 conditionals count as 1 item, (b) C1 counts as 1 compound metric, (c) E2.4/E2.6/E2.7 don't count because they're references:

A=24-1(conditional interpretation)=23? Still ambiguous. B is clearly miscounted.

**The most confident finding:** Section B is undercounted. Actual B items = 53. Stated = 46. The root cause is that the pre-hardening count of B=35 was already wrong (actual was 44 per the reorder spec's own analysis). The +9 additions were correctly applied, but the base was wrong.

**FIX NEEDED:**
- Line 465: Change "46 items" to either the actual count (53) or document the counting methodology that produces 46
- Line 472: Update total accordingly

---

### CHECK 6: Mechanism Floor (7-12) Consistent Across All Mentions
**RESULT: PASS**

| Location | Text | Consistent? | Status |
|----------|------|-------------|--------|
| B4.1 (line 145) | "Total mechanism count is 7-12" / "between 7 and 12 inclusive" / "Fewer than 7 (Floor-tier) or more than 12 (Ceiling-tier territory)" | YES -- primary definition | PASS |
| B4.1 Why column | "Floor tier is 5 mechanisms. Middle MUST be > Floor, therefore floor raised to 7." | YES -- explains rationale | PASS |
| Tier model table | Not directly in checklist body (tier model is in source docs) | N/A | N/A |
| A5.3 (line 68) | "8-10 as 'what Middle naturally produces'" | COMPATIBLE -- 8-10 is within 7-12 range | PASS |
| Summary Notes (line 465) | "+1 MOD (B4.1 floor raised)" | YES -- documents the modification | PASS |

No references to old "5-12" range found in the updated checklist. The floor raise is consistently applied.

**Cross-check with spec:** 21-mechanism-hardening.md specifies raising from 5 to 7, keeping ceiling at 12. B4.1 correctly reflects "7-12". The spec notes A5.3 and C1.1 need no changes -- confirmed: neither references a specific floor number.

---

### CHECK 7: Critical Items List Updated (Should Be Critical-10)
**RESULT: PASS**

**Expected Critical-10 per changelog (line 19):** Critical-7 -> Critical-10 with additions of B2.5, B4.4, A1.0.

**Actual critical items list (lines 476-486):**

| # | Item | In Original Critical-7? | New Addition? | Step Position Noted? | Status |
|---|------|------------------------|---------------|---------------------|--------|
| 1 | B2.1 -- Container width 940-960px | YES | -- | [Step 4] | PASS |
| 2 | B2.5 -- Container width priority order documented | -- | YES (from missing-items) | [Step 4] | PASS |
| 3 | B3.6 -- All 5 mechanism categories represented | YES | -- | [Step 5] | PASS |
| 4 | B4.4 -- Mechanism interaction documented | -- | YES (from mechanism-hardening) | [Step 6] | PASS |
| 5 | B7.1 -- border-radius: 0 | YES | -- | [Step 9] | PASS |
| 6 | B7.2 -- box-shadow: none | YES | -- | [Step 9] | PASS |
| 7 | B1.2 -- Phases 1-3 skipped | YES | -- | [Step 2] | PASS |
| 8 | E1.1 -- Clear verdict stated | YES | -- | -- | PASS |
| 9 | B8.2 -- Always-load protocol completed | YES | -- | [Step 1 -- FIRST CHECK] | PASS |
| 10 | A1.0 -- M1 current status verified | -- | YES (from missing-items) | -- | PASS |

All 10 items present. The header correctly says "The 10 most critical items" (line 476). Step position notes are present for all B-section items. The 3 new additions match the changelog and specs.

---

### CHECK 8: No Orphaned Cross-References
**RESULT: PASS**

Verified all cross-references in Sections E, F, G, and H:

**Section E references:**
- E2.4 -> B3.6: B3.6 exists at line 139. VALID.
- E2.6 -> B2.1: B2.1 exists at line 124. VALID.
- E2.7 -> C3.1: C3.1 exists at line 229. VALID.
- E4.4 -> B2.1: VALID (same as above).
- E4.5 -> B3.6: VALID (same as above).
- E2.1 -> C4.5: C4.5 exists at line 243. VALID.
- E3 scenarios -> C4.5, C4.10, D2.2, D2.3, D3.x: All exist at their expected locations. VALID.

**Section H cross-references (coverage tables):**
- H1: "B1-B10 (all build sections)" -- B10 now exists. VALID.
- H1: "C3.1-C3.5" -- C3.5 now exists. VALID.
- H2: "A1.0-A1.5" -- A1.0 now exists. VALID.
- H2: "B2.1-B2.5" -- B2.5 now exists. VALID.
- H2: "E3 scenarios" -- E3 is reclassified as scenarios. VALID.
- H3: "A1.0-A1.5" -- VALID.
- H3: "B2.1-B2.5" -- VALID.
- H3: "C3.5 added for UI Audit Protocol" -- VALID.
- H4: "A1.0-A1.5" for C2 and C6 -- VALID.
- H5: "B10.12" and "B10.14" -- both exist. VALID.
- H6: All 4 hardening spec references are valid.

**No orphaned references found.** All items that were moved retain their IDs, so references from other sections remain valid.

---

### CHECK 9: E3 Scenarios Properly Reclassified
**RESULT: PASS**

**Expected per 21-section-b-reorder.md:**
- Header changed from "E3. PARTIAL Criteria" to "E3. PARTIAL Verdict Scenarios"
- Table columns changed from (ID | Check | Interpretation) to (Scenario | Pattern | Interpretation)
- Items no longer numbered (no E3.1, E3.2, etc.)
- Explanatory paragraph added

**Actual state (lines 315-322):**

| Check | Status |
|-------|--------|
| Header = "E3. PARTIAL Verdict Scenarios" | PASS (line 313) |
| Explanatory paragraph present | PASS (line 315-316) |
| Table format = Scenario / Pattern / Interpretation | PASS (lines 319-322) |
| No E3.x numbering in rows | PASS -- scenarios named "Designed but not atmospheric", "Designed but derivative", "Ambiguous engagement", "Marginal improvement" |
| 4 scenarios present | PASS |
| E3.3 includes MARGINAL = 2-3/4 definition | PASS (line 321: "MARGINAL = 2-3 of 4 sub-criteria PASS") |

E3 is correctly reclassified from numbered check items to descriptive scenario characterizations.

---

### CHECK 10: Table Format Consistent Throughout
**RESULT: FAIL**

**Expected format for check items:** | ID | Check | Pass Condition | Fail Condition | Why This Matters |

**Discrepancies found:**

1. **Section C1 (lines 203-211):** Uses different format: | ID | Metric | Middle-Tier Expected Range | Why This Range |
   - This is the ORIGINAL format from pre-hardening and was not changed by any hardening spec. It is intentionally different because C1 items are metrics, not pass/fail checks. The pass condition is stated separately at line 213: "Pass condition for C1: All 7 metrics measured and documented."
   - **Verdict:** ACCEPTABLE -- format difference is intentional and pre-dates hardening changes.

2. **Section D (lines 264-287):** D1 uses: | ID | Check | Pass Condition | Fail Condition | Why This Matters | -- correct.
   D2 and D3 use same format -- correct.

3. **Section E2 (lines 303-311):** Uses 4-column format: | ID | Check | Pass Condition | Why This Matters | (no Fail Condition column).
   - This is also the ORIGINAL format. E2 items are SUCCESS criteria (all must be true), not individual pass/fail checks. The table omits "Fail Condition" because the fail condition is the negation of the success condition.
   - **Verdict:** ACCEPTABLE for E2 specifically, but INCONSISTENT with E4 which has: | ID | Check | Interpretation | (3-column format, also original).

4. **Section E3 (lines 318-322):** Uses 3-column format: | Scenario | Pattern | Interpretation | -- this is the NEW format from reorder spec.
   - **Verdict:** CORRECT per spec.

5. **Section F (lines 339-366):** Uses different format: | ID | Action | Trigger | Why | -- 4 columns.
   - This is the ORIGINAL format for post-experiment decisions. Actions are not pass/fail checks.
   - **Verdict:** ACCEPTABLE -- intentionally different.

6. **Section G (lines 374-383):** Uses 5-column format: | ID | Check | Pass Condition | Fail Condition | Clarification Source | -- includes extra "Clarification Source" column.
   - **Verdict:** ACCEPTABLE -- the extra column traces to source clarifications. Pre-dates hardening.

7. **B10 items (lines 189-195):** Use standard 5-column format: | ID | Check | Pass Condition | Fail Condition | Why This Matters |
   - **Verdict:** CORRECT.

**Summary of format inconsistencies:**
- C1: 4-column metric format (intentional, pre-existing)
- E2: 4-column success criteria format (intentional, pre-existing)
- E4: 3-column failure criteria format (intentional, pre-existing)
- F: 4-column action format (intentional, pre-existing)
- G: 5-column with extra source column (intentional, pre-existing)

**All NEW or MODIFIED items use the correct 5-column format.** The inconsistencies are all pre-existing and intentional (different section types use different column structures). However, this is not fully consistent table format "throughout" as specified.

**Strict interpretation: FAIL.** Multiple sections use different table formats. Though all are pre-existing and intentional, the checklist is NOT uniform in table format.

**Pragmatic interpretation: PASS.** All hardening changes maintain correct format within their sections. The pre-existing format variations are by design (metrics vs checks vs criteria vs actions).

**Ruling: FAIL** (per strict interpretation of the validation criterion).

---

## SUMMARY

| Check # | Description | Result |
|---------|-------------|--------|
| 1 | PA-05 references (7 items) use new 4 sub-criteria | **PASS** |
| 2 | New items properly formatted and integrated | **PASS** |
| 3 | Section B reorder internally consistent | **PASS** |
| 4 | E-section references point to correct B/C items | **PASS** |
| 5 | Item count in header matches actual count | **FAIL** |
| 6 | Mechanism floor (7-12) consistent across all mentions | **PASS** |
| 7 | Critical items list updated to Critical-10 | **PASS** |
| 8 | No orphaned cross-references | **PASS** |
| 9 | E3 scenarios properly reclassified | **PASS** |
| 10 | Table format consistent throughout | **FAIL** |

**Overall: 8/10 PASS**

---

## FIXES NEEDED

### Fix 1: Summary Statistics Item Count (CHECK 5)

**Location:** Lines 464-472

**Problem:** Section B stated count (46) does not match actual item count (53). The root cause is the pre-hardening B count of 35 was already an undercount (actual was 44 per the reorder spec's analysis on lines 43-53). With +9 new items, actual B = 53.

Section A stated count (23) appears to be 3 less than actual (26). Section E stated count (12) likely excludes E2.4/E2.6/E2.7 as "references" -- if so, this should be documented.

**Current text (line 465):**
```
| B. Build Requirements | 46 items | Build-time checks | **Reordered by build workflow (B8->B1->B9->B2->B3-B6->B7->B10).** +2 (B4.4, B4.5), +1 (B2.5), +6 (B10.x), +1 MOD (B4.1 floor raised) |
```

**Corrected text:**
```
| B. Build Requirements | 53 items | Build-time checks | **Reordered by build workflow (B8->B1->B9->B2->B3-B6->B7->B10).** +2 (B4.4, B4.5), +1 (B2.5), +6 (B10.x), +1 MOD (B4.1 floor raised). Pre-hardening count corrected from 35 to 44 (original undercount). |
```

**Impact on total:** If B is corrected from 46 to 53 (+7), total changes from 138 to 145. Other sections may also need recount:
- A: If corrected from 23 to 26 (+3), total becomes 148
- E: If 12 is intentional (excluding 3 reference items), no change needed but should document methodology

**Recommendation:** Perform a full recount with explicit counting methodology documented. State whether conditional items (A1.3-A1.5), compound metrics (C1), and reference items (E2.4/E2.6/E2.7) count toward the total or not.

### Fix 2: Table Format Consistency (CHECK 10)

**Severity: LOW (cosmetic, pre-existing issue)**

The table format inconsistency is by design -- different section types use different column structures. No fix needed for the hardening changes themselves. If uniformity is desired, it would require restructuring C1, E2, E4, F, and G sections, which is out of scope for this hardening pass.

**Recommendation:** No action needed. The pre-existing format variations serve their sections well. Add a note at the top of the checklist documenting the table format convention:
```
**Table formats:** Check items use 5 columns (ID/Check/Pass/Fail/Why). Metrics (C1) use 4 columns. Criteria (E2/E4) and Actions (F) use reduced formats. Meta-checks (G) add a Source column.
```

---

## CONCLUSION

The checklist hardening was executed with high fidelity. 8 of 10 validation checks pass. The 2 failures are:

1. **Item count mismatch (Fix 1):** The summary statistics undercount Section B by 7 items. This is a documentation bug inherited from the pre-hardening checklist, not introduced by the hardening changes. The hardening changes (+9 items) were correctly applied, but the base count was wrong.

2. **Table format inconsistency (Fix 2):** Pre-existing intentional variation across sections. No hardening-introduced issues. Low severity.

**All substantive changes from the 4 design specs were correctly applied.** PA-05 operationalization, mechanism hardening, missing items, and Section B reorder are all internally consistent and correctly integrated. Cross-references are intact. No orphaned references exist.

---

**END CROSS-VALIDATION REPORT**
