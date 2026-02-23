# Buddy Review: Extraction of Diagrams 18, 19, 20

**Reviewer:** buddy-d18-d20
**Source:** `VISUAL-ARCHITECTURE.md` lines 1333-1564
**Extraction:** `extract-d18-d20.md` (86 items)
**Date:** 2026-02-23

---

## VERIFICATION SUMMARY
- Total items in extraction: 86
- Items verified correct: 86
- Issues found: 1 (minor, in summary statistics only -- not in extraction items themselves)

---

## VERIFICATION METHOD

Line-by-line comparison of VA source (lines 1333-1564) against all 86 extraction items. Every actionable line in the VA was checked for presence, correct typing, accurate quoting, and appropriate actionable implication.

---

## DIAGRAM 18: KNOWLEDGE SURVIVAL PREDICTION (lines 1333-1393)

19 items (Items 1-19). **PERFECT.** Every actionable line extracted.

Verification trace:
- Line 1333 title + A4 provenance (line 1339) → Item 1 (FILE_REF) CORRECT
- Lines 1337-1338 headline + theory → Item 2 (DECISION) CORRECT
- Lines 1342-1344 survives/dies split → Items 3, 4 (DECISION) CORRECT
- Lines 1346-1357 concrete example + survival function → Items 5 (PROCESS), 6 (VALUE), 7 (THRESHOLD) CORRECT
- Lines 1365-1373 calibrationally flat prediction → Items 8 (WARNING), 9 (THRESHOLD), 10 (WARNING) CORRECT
- Lines 1378-1379 Report 42 vs 44 tension → Item 11 (DECISION) CORRECT
- Lines 1381-1383 scope distinction + ratios → Items 12 (VALUE), 13 (THRESHOLD), 14 (THRESHOLD) CORRECT
- Lines 1385-1387 pre-assembly bottleneck → Items 15 (DECISION), 16 (VALUE) CORRECT
- Lines 1389-1391 73-line template fix → Items 17 (DECISION), 18 (VALUE), 19 (RECOMMENDATION) CORRECT
- Section header "KEY TENSION (from A4):" (line 1376) is a structural header; all content beneath it fully extracted.

## DIAGRAM 19: CCS vs PA-05 (lines 1397-1475)

29 items (Items 20-48). **PERFECT.** Every actionable line extracted.

Verification trace:
- Line 1397 title + A6 provenance (line 1403) → Item 20 (FILE_REF) CORRECT
- Lines 1401-1402 CCS ≠ PA-05 definition → Item 21 (DECISION) CORRECT
- Lines 1406-1412 PA-05 properties (5 bullet points + scale) → Items 22-27 CORRECT (each bullet individually extracted)
- Lines 1415-1420 CCS properties (3 bullet points + scale) → Items 28-31 CORRECT
- Lines 1426-1443 four experiment data points → Items 32-35 CORRECT (Middle, Gas Town, CD-006, Flagship each individually extracted with correct PA-05 and CCS values)
- Lines 1449-1458 pipeline implications → Items 36-42 CORRECT (primary/diagnostic distinction, Flagship path, vocabulary ceiling, CCS threshold)
- Lines 1463-1473 three registers → Items 43-46 CORRECT (Register 1/2/3 with CCS ranges, tier mapping, and achievement status)
- Lines 1465, 1469 format requirements → Items 47-48 (RECOMMENDATION) CORRECT
- Section headers ("THE PROOF THEY'RE DIFFERENT", "IMPLICATION FOR PIPELINE v3", "3 REGISTERS OF COMPOSITIONAL FLUENCY") are structural; all content beneath fully extracted.

## DIAGRAM 20: APPLIED vs COMPOSED MODE (lines 1479-1564)

38 items (Items 49-86). **PERFECT.** Every actionable line extracted.

Verification trace:
- Line 1479 title + B8 provenance (line 1485) → Item 49 (FILE_REF) CORRECT
- Lines 1483-1484 mode distinction + quote → Item 50 (DECISION) CORRECT
- Lines 1488-1496 Applied vs Composed definitions + questions → Items 51-54 CORRECT
- Lines 1498-1499 removal test signatures → Items 55-56 (VALUE) CORRECT
- Line 1502 smoking gun header → Item 57 (DECISION) CORRECT
- Lines 1507-1515 CSS custom property examples + naming implications → Items 58-63 CORRECT
- Lines 1520-1526 component test examples → Items 64-68 CORRECT (Applied uniform + Composed zone-modulated with specific CSS values)
- Lines 1529-1542 removal test cases → Items 69-72 CORRECT (bento grid removal + background removal)
- Lines 1547-1554 B8 verdict + 5 measurable properties → Items 73-78 CORRECT (each property individually extracted)
- Lines 1556-1562 mode set at build start + Pipeline v3 conditions → Items 79-86 CORRECT (checklist vs recipe, all 5 prerequisites individually extracted)
- Rhetorical question header "IS THE DISTINCTION REAL OR JUST 'LESS SKILLED vs MORE SKILLED'?" (line 1545) is framing; the answer (B8's verdict) is extracted as Item 73.

---

## ISSUES

### SUMMARY_STATS_ERROR — Type count inconsistencies in extraction summary section

- **VA source line:** N/A (this is in the extraction's own summary statistics, lines 642-650)
- **Extraction item:** Summary section, not an extracted item
- **Problem:** The THRESHOLD type count says "18 items" but lists 20 item numbers (7, 8, 9, 13, 14, 23, 27, 31, 38, 41, 42, 43, 44, 45, 66, 67, 68, 71, 77, 85). Additionally, Item 8 is typed as WARNING in the extraction body but is listed under THRESHOLD in the summary. Similarly, the DECISION, VALUE, and other type counts list more item numbers than claimed. These are metadata bookkeeping errors in the summary statistics only.
- **Impact:** NEGLIGIBLE. The 86 extraction items themselves are all correctly typed. Only the summary tallies are inconsistent.
- **Fix:** Recount the type occurrences from the extraction body. Remove Item 8 from the THRESHOLD list. Correct all counts to match actual listed items.

---

## VERDICT: PERFECT EXTRACTION (with negligible summary statistics error)

All 86 items correctly extracted. Zero MISSED, zero SUMMARIZED, zero COMBINED, zero MISTYPED, zero MISQUOTED issues in the extraction items themselves. Every actionable line in the VA source for Diagrams 18, 19, and 20 has a corresponding extraction item with accurate exact text and appropriate type classification.

The extraction demonstrates particularly strong granularity:
- Survival function extracted as both the formula AND its two branches (Items 5, 6, 7)
- Four experiment data points individually extracted with all metrics (Items 32-35)
- Five mode determinants individually extracted (Items 74-78)
- Five Composed-mode prerequisites individually extracted (Items 82-86)
- Zone-specific CSS examples individually extracted with exact values (Items 66-68)
