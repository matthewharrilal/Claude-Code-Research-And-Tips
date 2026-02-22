# Cross-Reference Validation Results

**Validator:** Final Validation Agent (Opus 4.6)
**Date:** 2026-02-20
**Files Validated:** 7 pipeline files
**Checks Performed:** 10 specified + 5 additional

---

## CHECK 1: PA Question Count (Should Be 65 Everywhere)

### References Found

| File | Location | Text | Decomposition |
|------|----------|------|---------------|
| PA SKILL.md | Line 8 | "65 PA questions" | N/A (header) |
| PA SKILL.md | Line 357 | "Total question count: 65" | "54 standard + 2 sub-perceptual + 9 Tier 5" |
| PA SKILL.md | Line 644 | "all 65 questions" | N/A |
| build-page SKILL.md | Line 337 | "65 questions x 9 auditors" | N/A |
| build-page SKILL.md | Line 415 | "All 65" | N/A |
| flagship-pa-questions.md | Line 5 | "65 total" | "56 standard + 9 Tier 5" (different decomposition) |
| flagship-pa-questions.md | Line 158 | "56 standard + 9 Tier 5 = 65" | (different decomposition) |
| design-system/CLAUDE.md | Line 338 | "Full 65 questions" | "54 standard + 2 sub-perceptual + 9 Tier 5" |
| design-system/CLAUDE.md | Line 357 | "Full 65-question audit" | "54 standard + 2 sub-perceptual (PA-55, PA-56) + 9 Tier 5" |

### Actual Count Verification

Tabular PA questions in PA SKILL.md: 56 (verified by grep count of `| **PA-\d+**` rows)
Prose-defined Tier 5 questions (PA-60 through PA-68): 9 (verified by grep count)
**Grand total: 56 + 9 = 65** -- CORRECT

### Decomposition Inconsistency

Two decompositions exist for the 56 non-Tier-5 questions:
- **PA SKILL.md + CLAUDE.md:** "54 standard + 2 sub-perceptual" = 56
- **flagship-pa-questions.md:** "56 standard" (lumps sub-perceptual into standard)

Both arrive at 65 total. The difference is whether PA-55 and PA-56 are called "standard" or "sub-perceptual." The PA skill explicitly categorizes them as "Sub-Perceptual CSS Detection" (a separate subsection). The flagship-pa-questions.md does not distinguish them.

### Verdict: **PASS (with ADVISORY)**

Total count (65) is consistent across ALL files. Decomposition inconsistency (54+2+9 vs 56+9) is cosmetic -- both sum to 65.

**ADVISORY:** flagship-pa-questions.md line 5 says "56 standard" while PA SKILL.md and CLAUDE.md say "54 standard + 2 sub-perceptual." Consider standardizing to "54 standard + 2 sub-perceptual + 9 Tier 5 = 65" for consistency.

---

## CHECK 2: Font-Weight Threshold (Should Be >= 200 Everywhere)

### References Found

| File | Location | Value | Type |
|------|----------|-------|------|
| PA SKILL.md | Line 629 | ">= 200 units" | Perception threshold table |
| TC SKILL.md | Line 874 | ">=200 delta" | Perception threshold table |
| TC SKILL.md | Line 1383 | "font-weight delta >=200" | Quick reference |
| gate-runner.md | Line 481 | "font-weight delta >= 200" | SC-13 description |
| **gate-runner.md** | **Line 516** | **`Math.abs(fw1 - fw2) >= 100`** | **SC-13 JavaScript CODE** |
| build-page SKILL.md | N/A | Not explicitly stated | N/A |
| conventions-brief.md | N/A | No font-weight threshold row | Perception table incomplete |

### Verdict: **FAIL -- BLOCKING**

**The SC-13 JavaScript code on gate-runner.md line 516 uses `>= 100` but EVERY other reference says `>= 200`.**

The description of SC-13 (line 481) says `font-weight delta >= 200`. The code (line 516) says `>= 100`. This means the gate is MORE PERMISSIVE than intended -- it will count a 400->500 weight change as a typographic channel shift even though PA and TC declare this sub-perceptual.

**Required fix:** Change gate-runner.md line 516 from:
```js
if (Math.abs(fs1 - fs2) >= 2 || Math.abs(fw1 - fw2) >= 100) shifts++;
```
to:
```js
if (Math.abs(fs1 - fs2) >= 2 || Math.abs(fw1 - fw2) >= 200) shifts++;
```

---

## CHECK 3: TC Brief (Should Reference 8 Sections and 80-120 Lines)

### References Found

| File | Location | Text |
|------|----------|------|
| build-page SKILL.md | Line 63 | "Keep the brief to 80-120 lines" |
| build-page SKILL.md | Line 67 | "contains all 8 sections" |
| build-page SKILL.md | Lines 54-62 | Lists all 8 sections by name |
| TC SKILL.md | Line 1497 | "these 8 sections" |
| TC SKILL.md | Lines 1499-1579 | Defines all 8 sections |
| TC SKILL.md | Line 1579 | "length 80-120 lines" |

### Section Names Cross-Check

| # | build-page SKILL.md | TC SKILL.md |
|---|---------------------|-------------|
| 1 | STRUCTURAL METAPHOR | STRUCTURAL METAPHOR |
| 2 | ZONE ARCHITECTURE | ZONE ARCHITECTURE |
| 3 | CONTENT TENSIONS | CONTENT TENSIONS |
| 4 | SELECTED MECHANISMS | SELECTED MECHANISMS |
| 5 | METAPHOR-IMPLIED CSS DIRECTIONS | METAPHOR-IMPLIED CSS DIRECTIONS |
| 6 | BUILD RECIPE | BUILD RECIPE (THE BUILDER'S PRIMARY REFERENCE) |
| 7 | DETECTION EXPECTATIONS | DETECTION EXPECTATIONS (OPTIONAL -- for weaver/diagnostic use only) |
| 8 | BUILDER ANCHORS | BUILDER ANCHORS |

### Verdict: **PASS**

All 8 sections match between build-page and TC skill. Length target (80-120 lines) consistent in both files.

---

## CHECK 4: PA-55 and PA-56 in Build-Page Auditor Table

### Build-Page SKILL.md Auditor Assignment Table (Lines 289-299)

| Auditor | Questions (from build-page) | Contains PA-55? | Contains PA-56? |
|---------|---------------------------|-----------------|-----------------|
| A | PA-01, 03, 04, 05, 18, 19, 20, 45, **65**, **67** | No | No |
| B | PA-02, 06, 07, 08, 29, **56**, 70 | No | **YES** |
| C | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53, **55**, **64**, **66** | **YES** | No |

### Cross-Check with PA SKILL.md Line 357

PA SKILL.md: "Assign PA-55 to Auditor C (Spatial+Proportion), PA-56 to Auditor B (Readability+Typography)."

### Cross-Check with flagship-pa-questions.md Auditor Table (Lines 148-156)

| Auditor | Standard Qs | Tier 5 | Total |
|---------|------------|--------|-------|
| C | PA-09,10,11,30,31,32,33,50,51,52,53,**55** | PA-64, PA-66 | 14 |
| B | PA-02,06,07,08,29,**56**,70 | (none) | 7 |

### Verdict: **PASS**

PA-55 correctly assigned to Auditor C in all 3 files. PA-56 correctly assigned to Auditor B in all 3 files.

---

## CHECK 5: Perception Thresholds (Consistent Across Files)

### Threshold Table Cross-Check

| Property | PA SKILL | TC SKILL | conventions-brief | gate-runner (desc) | gate-runner (code) | build-page |
|----------|----------|----------|-------------------|--------------------|--------------------|----|
| Background | >= 15 RGB | >= 15 RGB | >= 15 RGB | >= 15 RGB | >= 15 (SC-09) | >= 15 RGB |
| Font-size | >= 2px | >= 2px | >= 2px | >= 2px | >= 2 (SC-13) | >= 2px |
| Letter-spacing | >= 0.03em | >= 0.03em | >= 0.03em, floor 0.025em | 0.025em floor (SC-14) | 0.025em floor (SC-14) | below 0.025em |
| Line-height | >= 0.15 | >= 0.15 | Not listed | Not a gate | N/A | Not listed |
| Padding | >= 24px | >= 24px | >= 24px | >= 24px (SC-13) | >= 24 (SC-13) | Not listed |
| Border | >= 1px | >= 1px | width change (1/3/4px) | border change (SC-13) | change check (SC-13) | Not listed |
| Font-weight | >= 200 | >= 200 | Not listed | >= 200 (desc) | **>= 100 (code)** | Not listed |
| Stacked gap | <= 120px | <= 120px | Not listed | <= 120px (SC-10) | 120 (SC-10) | <= 120px |

### Verdict: **PASS (with 1 BLOCKING issue from Check 2)**

All documented thresholds are consistent EXCEPT the gate-runner SC-13 code font-weight check (>= 100 vs >= 200). Already flagged in Check 2.

The conventions-brief perception table has fewer rows (5 vs PA's 8), omitting line-height, font-weight, and stacked gap. This is acceptable -- the conventions brief is a builder reference with a focused table, while PA and TC have comprehensive tables. No conflict, just differing scope.

---

## CHECK 6: Fix Cycle Types (TYPE A/B/C Consistent Across TC, PA, and Build-Page)

### Terminology Mapping

| TC SKILL.md | PA SKILL.md | Description | Consistent? |
|-------------|-------------|-------------|-------------|
| TYPE A -- Mechanical fix | MECHANICAL | CSS value wrong, builder fixes directly | YES |
| TYPE B -- Structural fix | STRUCTURAL | Zone/boundary issue, re-read TC brief Sections 2+4 | YES |
| TYPE C -- Compositional fix | COMPOSITIONAL | Metaphor doesn't work, TC re-invocation | YES |

### Cross-References

- PA SKILL.md line 676 references "TYPE C fix cycle" for COMPOSITIONAL -- correctly cross-references TC naming
- TC SKILL.md line 777 references "TYPE C fix cycle" for metaphor lock escalation
- build-page SKILL.md line 421 references "TC Re-Invocation" for metaphor failure -- semantically matches TYPE C but does not use "TYPE C" label explicitly

### Verdict: **PASS**

The two naming schemes (TYPE A/B/C in TC, MECHANICAL/STRUCTURAL/COMPOSITIONAL in PA) are consistent in their definitions and cross-referenced correctly. Build-page describes the TYPE C scenario without using the label explicitly, which is acceptable since it defines the behavior clearly.

---

## CHECK 7: S-09 Stacking (<= 120px Total Gap at Boundaries)

### References Found

| File | Location | Threshold | Name Used |
|------|----------|-----------|-----------|
| PA SKILL.md | Line 388 | <= 120px | "S-09 Stacking Check" |
| PA SKILL.md | Line 391 | <= 96px (individual) / stacked voids | "S-09" (historical) |
| TC SKILL.md | Line 876 | <= 120px total | "Stacked gap" |
| TC SKILL.md | Line 878 | <= 120px | "S-09 STACKING CHECK" |
| TC SKILL.md | Line 1386 | <= 120px | "Stacked gap" |
| gate-runner.md | Line 360 | <= 120px | "SC-10: Stacked Gap" |
| build-page SKILL.md | Line 179 | <= 120px | "SC-10" |
| build-page SKILL.md | Line 483 | above 120px | "stacked gaps" |
| conventions-brief.md | Line 61 | above 120px | "Stacked gaps" |

### Naming Inconsistency

The PA and TC skills use the historical name "S-09" while gate-runner and build-page use the programmatic gate name "SC-10." Both refer to the same threshold (<= 120px total at section boundaries).

### Verdict: **PASS (with ADVISORY)**

The threshold value (<= 120px) is consistent across ALL 7 files. The naming difference (S-09 vs SC-10) reflects the dual nature: S-09 is the design system specification rule, SC-10 is the programmatic gate that enforces it. Not a conflict, but could cause confusion.

**ADVISORY:** Consider adding a note to PA SKILL.md and TC SKILL.md: "S-09 is enforced programmatically as gate SC-10 in gate-runner.md."

---

## CHECK 8: Channel Activation vs Deployment Distinction in PA

### PA SKILL.md Coverage

Lines 840-857: "Channel Activation vs Deployment (CRITICAL DISTINCTION)" section present with:
- Clear definition: DEPLOYED = CSS exists; ACTIVE = exceeds perception thresholds
- Instruction: "Count only ACTIVE channels when evaluating multi-coherence"
- Calibration table (ACTIVE shifts) provided
- Provenance note referencing flagship failure

### Cross-File Support

- gate-runner.md SC-14: Enforces sub-perceptual prevention programmatically (catches DEPLOYED-but-not-ACTIVE values)
- gate-runner.md SC-13: Measures channel shifts with specific thresholds (background >= 15 RGB, font-size >= 2px, etc.)
- conventions-brief.md Section 2: "CSS below these thresholds is invisible. Invisible CSS is wasted CSS."
- conventions-brief.md Section 4: Perception thresholds table for channels

### Verdict: **PASS**

The activation vs deployment distinction is clearly defined in PA SKILL.md and supported by programmatic enforcement in gate-runner.md (SC-14). The conventions brief reinforces the concept without using the exact terminology (uses "invisible" vs "visible" framing instead).

---

## CHECK 9: Token Compliance Section in conventions-brief.md

### Location

conventions-brief.md line 547: `## Token Compliance` section (lines 547-563)

### Content Verification

Contains:
- Required token usage categories (Colors, Spacing, Typography, Borders)
- Self-check instructions
- Target: >= 80% of applicable CSS values use tokens
- Reference to SC-14 for measurement

### Verdict: **PASS**

Token compliance section is present and complete in conventions-brief.md.

**NOTE:** The claim "Gate SC-14 measures this" (line 562) is inaccurate -- SC-14 measures sub-perceptual prevention, not token compliance. Token compliance is not measured by any gate. This is an internal conventions-brief issue, not a cross-file consistency issue.

---

## CHECK 10: No Orphaned "63 Question" References

### Search Results

Searched all files in:
- `~/.claude/skills/` (all 3 skill files)
- `design-system/pipeline/` (all pipeline files)
- `design-system/CLAUDE.md`

Pattern: any use of "63" as a question COUNT (not as "PA-63" question number)

### Verdict: **PASS**

Zero instances found. All references use 65 as the question count. PA-63 exists only as a question number (Fractal Zoom Coherence, Auditor E).

---

## ADDITIONAL CHECKS

### CHECK 11: Auditor Question Assignments Match Across Files

Compared build-page SKILL.md table (lines 289-299) vs flagship-pa-questions.md table (lines 148-156):

| Auditor | build-page count | flagship-pa count | Match? |
|---------|-----------------|-------------------|--------|
| A | 10 | 10 | YES |
| B | 7 | 7 | YES |
| C | 14 | 14 | YES |
| D | 7 | 7 | YES |
| E | 6 | 6 | YES |
| F | 7 | 7 | YES |
| G | 5 | 5 | YES |
| H | 5 | 5 | YES |
| I | 4 | 4 | YES |
| **Total** | **65** | **65** | **YES** |

**Verdict: PASS**

### CHECK 12: Gate-Runner Line Count Reference

build-page SKILL.md line 165: "gate-runner.md (1,159 lines, 22 gates)"
Actual: `wc -l gate-runner.md` = 1159 lines

**Verdict: PASS**

### CHECK 13: TC Skill Line Count Reference

design-system/CLAUDE.md line 647: "~1,612 lines"
Actual: `wc -l tension-composition/SKILL.md` = 1612 lines

**Verdict: PASS**

### CHECK 14: Gate Count Consistency

| File | Gate Count | Source |
|------|-----------|--------|
| build-page SKILL.md | "22 gates" | Line 165 |
| gate-runner.md | "22 gates" | Line 1143 |
| design-system/CLAUDE.md | "22-gate" | Lines 332, 403 |

**Verdict: PASS**

### CHECK 15: Internal Gate-Runner Blocking Count

gate-runner.md line 1143: "1 pre-gate + 17 blocking + 2 advisory + 2 behavioral = 22 gates"
gate-runner.md line 269: "ALL 18 blocking gates (SC-00 pre-gate + 15 programmatic blocking + 2 deliverable blocking)"

The "17 blocking" count appears to classify DG-1 and DG-2 as non-blocking despite them being listed as "YES" (blocking) in the per-gate summary table. Similarly, "2 deliverable blocking" in line 269 should be 4 (DG-1, DG-2, DG-3, DG-4).

**Verdict: ADVISORY (internal gate-runner inconsistency, not cross-file)**

The per-gate table shows DG-1 and DG-2 as blocking ("YES") but the summary counts exclude them from the blocking total. This is an internal inconsistency. Total of 22 is still correct.

---

## SUMMARY

| Check | Status | Severity |
|-------|--------|----------|
| 1. PA question count (65) | **PASS** | Advisory: decomposition differs (54+2+9 vs 56+9) |
| 2. Font-weight threshold (>= 200) | **FAIL** | **BLOCKING**: gate-runner.md code uses >= 100 |
| 3. TC brief (8 sections, 80-120 lines) | **PASS** | Clean |
| 4. PA-55/PA-56 in auditor table | **PASS** | Clean |
| 5. Perception thresholds | **PASS** | Conventions brief has fewer rows (subset, not conflict) |
| 6. Fix cycle types (A/B/C) | **PASS** | Two naming schemes, correctly cross-referenced |
| 7. S-09 stacking (<= 120px) | **PASS** | Advisory: S-09 vs SC-10 naming difference |
| 8. Channel activation vs deployment | **PASS** | Clean |
| 9. Token compliance in conventions-brief | **PASS** | Note: SC-14 measurement claim inaccurate |
| 10. No orphaned "63 question" refs | **PASS** | Clean |
| 11. Auditor assignments match | **PASS** | Clean |
| 12. Gate-runner line count | **PASS** | Exact match (1,159) |
| 13. TC skill line count | **PASS** | Exact match (1,612) |
| 14. Gate count (22) | **PASS** | Consistent across 3 files |
| 15. Internal gate-runner blocking count | ADVISORY | DG-1/DG-2 classified inconsistently |

---

## BLOCKING ISSUES (Must Fix)

### BLOCKING-1: Gate-Runner SC-13 Font-Weight Code Threshold

**File:** `design-system/pipeline/gate-runner.md`
**Line:** 516
**Issue:** JavaScript code checks `Math.abs(fw1 - fw2) >= 100` but ALL other documentation (PA line 629, TC line 874, gate-runner description line 481) specifies `>= 200`.
**Impact:** Gate is MORE PERMISSIVE than intended. A 400->500 font-weight change would count as a typographic channel shift even though it is below the perception threshold.
**Fix:** Change `>= 100` to `>= 200` on line 516.

---

## ADVISORY ISSUES (Non-Blocking, Consider Fixing)

### ADVISORY-1: PA Question Decomposition

**Files:** flagship-pa-questions.md (lines 5, 158) vs PA SKILL.md (line 357) and CLAUDE.md (lines 338, 357)
**Issue:** flagship-pa-questions.md says "56 standard + 9 Tier 5" while PA SKILL.md and CLAUDE.md say "54 standard + 2 sub-perceptual + 9 Tier 5." Both total 65.
**Recommendation:** Update flagship-pa-questions.md lines 5 and 158 to use the more granular "54 standard + 2 sub-perceptual + 9 Tier 5 = 65" decomposition for consistency.

### ADVISORY-2: S-09 vs SC-10 Naming

**Files:** PA SKILL.md (line 383, 391), TC SKILL.md (line 878, 884) use "S-09"; gate-runner.md and build-page SKILL.md use "SC-10"
**Issue:** Different names for the same stacked gap check. S-09 is the specification rule; SC-10 is the programmatic gate.
**Recommendation:** Add a parenthetical "(enforced as gate SC-10)" after "S-09" in PA and TC skills, or vice versa.

### ADVISORY-3: Token Compliance SC-14 Reference

**File:** conventions-brief.md line 562
**Issue:** Claims "Gate SC-14 measures this" for token compliance, but SC-14 actually measures sub-perceptual prevention. No gate measures token compliance.
**Recommendation:** Remove or correct the SC-14 reference. Token compliance is a self-check, not a gated measurement.

### ADVISORY-4: Gate-Runner Internal Blocking Count

**File:** gate-runner.md lines 269, 1143
**Issue:** DG-1 and DG-2 are listed as "YES" (blocking) in the per-gate table but excluded from the "17 blocking" summary count (should be 19 blocking, or DG-1/DG-2 should be marked non-blocking in the table).
**Recommendation:** Either update the summary to "19 blocking" or change DG-1/DG-2 to ADVISORY in the per-gate table if they are not intended to block.

---

## OVERALL VERDICT

**1 BLOCKING issue found. 4 ADVISORY issues noted.**

The blocking issue (font-weight threshold `>= 100` in SC-13 code vs `>= 200` in all documentation) is a mechanical fix: one number change on one line. All other cross-references are consistent or have only cosmetic/naming differences that do not affect runtime behavior.
