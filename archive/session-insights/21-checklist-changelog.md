# Checklist Hardening Changelog

**Date:** 2026-02-15
**Author:** checklist-writer (checklist-hardening team)
**File Modified:** ephemeral/session-insights/18-middle-tier-checklist.md
**Sources Applied:** 21-pa05-operationalization.md, 21-mechanism-hardening.md, 21-missing-items-spec.md, 21-section-b-reorder.md

---

## Summary of Changes

| Category | Count | Detail |
|----------|-------|--------|
| New items added | 9 | A1.0, B2.5, B4.4, B4.5, C3.5, B10.1, B10.5, B10.7, B10.9, B10.12, B10.14 (9 new items; B4.4 and B4.5 from mechanism hardening spec, rest from missing-items spec) |
| Items modified | 7 | B4.1 (floor raised), C4.5, C4.10, D2.1, E2.1, E4.1 (PA-05 operationalized), E2.4/E2.6/E2.7 (deduplicated) |
| Sections reordered | 1 | Section B (9 subsections reordered by build workflow) |
| Sections restructured | 2 | E3 reclassified from criteria to scenarios; new B10 section created |
| Coverage tables added | 1 | H6 (hardening specs coverage) |
| Critical items expanded | +3 | Critical-7 -> Critical-10 |
| Total item count | 129 -> 138 | +9 new items |

---

## Detailed Change Log

### 1. NEW ITEMS ADDED (9 items)

#### From 21-missing-items-spec.md (3 CRITICAL + 6 Tier-1):

| ID | Section | Description | Spec Source |
|----|---------|-------------|-------------|
| **A1.0** | A1 (M1 Timing) | M1 current status verified -- builder must quote actual SKILL.md text to confirm per-category minimum is applied | 21-missing-items-spec.md, CRITICAL |
| **B2.5** | B2 (Container Width) | Container width priority order documented -- explicit statement that 940-960px is highest priority, escape hatch is internal padding | 21-missing-items-spec.md, CRITICAL |
| **C3.5** | C3 (Programmatic Audit) | Audit protocol compliance -- animations disabled, fonts.ready, computed styles, alignment checks | 21-missing-items-spec.md, CRITICAL |
| **B10.1** | B10 (NEW section) | Semantic HTML landmarks -- at least 3 semantic elements present | 21-missing-items-spec.md, Tier-1 |
| **B10.5** | B10 | Zone backgrounds follow density pattern direction | 21-missing-items-spec.md, Tier-1 |
| **B10.7** | B10 | Code blocks use mechanism #17 styling (if deployed) | 21-missing-items-spec.md, Tier-1 |
| **B10.9** | B10 | WCAG AA contrast ratio >= 4.5:1 | 21-missing-items-spec.md, Tier-1 |
| **B10.12** | B10 | Border weights follow 3-category system (no 2px) | 21-missing-items-spec.md, Tier-1 |
| **B10.14** | B10 | Single self-contained HTML file | 21-missing-items-spec.md, Tier-1 |

#### From 21-mechanism-hardening.md (2 items):

| ID | Section | Description | Spec Source |
|----|---------|-------------|-------------|
| **B4.4** | B4 (Mechanism Count) | Mechanism interaction documented -- 2+ reinforcing pairs encoding shared content dimensions | 21-mechanism-hardening.md, NEW-1 |
| **B4.5** | B4 (Mechanism Count) | Mechanism perceptibility verified -- 10% OR 8px threshold | 21-mechanism-hardening.md, NEW-2 |

---

### 2. ITEMS MODIFIED (7 items)

#### B4.1: Mechanism Floor Raised (from 21-mechanism-hardening.md)

- **Old:** "Total mechanism count is 5-12"
- **New:** "Total mechanism count is 7-12"
- **Rationale:** Floor raised from 5 to 7 to ensure Middle > Floor (5 is Floor-tier profile). 7 = minimum Floor (5) + 2 additional, creates friction against minimal compliance without mandating natural landing (8-10).

#### C4.5: PA-05 at 1440px Operationalized (from 21-pa05-operationalization.md)

- **Old:** Subjective "YES: page feels 'designed' / NO: page feels 'formatted'"
- **New:** 4 sub-criteria evaluation:
  - PA-05a: Non-default layout element count >= 2
  - PA-05b: Padding range ratio >= 2.0x
  - PA-05c: Visual hierarchy identification test (3-second blurred screenshot)
  - PA-05d: Non-framework CSS ratio >= 15%
  - Result: 4/4 = YES | 2-3/4 = MARGINAL | 0-1/4 = NO

#### C4.10: PA-05 at 768px Operationalized (from 21-pa05-operationalization.md)

- **Old:** Same subjective question at 768px
- **New:** Same 4 sub-criteria with adjusted thresholds:
  - PA-05a at 768px: >= 1 (lowered from 2)
  - PA-05b at 768px: >= 1.5x (lowered from 2.0x)
  - PA-05c at 768px: same method, different screenshot
  - PA-05d: same as 1440px (CSS doesn't change)

#### D2.1: PA-05 Evidence Format Updated (from 21-pa05-operationalization.md)

- **Old:** "Clear YES or NO at 1440px with 1-2 sentence evidence"
- **New:** Structured format requiring each sub-criterion's score and supporting data

#### E2.1: SUCCESS Criterion Updated (from 21-pa05-operationalization.md)

- **Old:** "PA-05 must = YES" (subjective)
- **New:** "C4.5 composite = YES (4/4 sub-criteria PASS at 1440px)" -- same gate logic, now binary

#### E4.1: FAILURE Criterion Updated (from 21-pa05-operationalization.md)

- **Old:** "PA-05 = NO" (subjective)
- **New:** "PA-05 composite = NO (0-1 of 4 sub-criteria PASS at 1440px)"

#### E2.4, E2.6, E2.7: Deduplicated to References (from 21-section-b-reorder.md)

- **E2.4:** Pass condition changed from "All 5 categories represented" to "-> See B3.6"
- **E2.6:** Pass condition changed from "NON-NEGOTIABLE compliance" to "-> See B2.1"
- **E2.7:** Pass condition changed from "Zero soul violations" to "-> See C3.1"
- "Why This Matters" column unchanged for all three

---

### 3. SECTION B REORDERED (from 21-section-b-reorder.md)

**Previous order:** B1 -> B2 -> B3 -> B4 -> B5 -> B6 -> B7 -> B8 -> B9

**New order (by build workflow):**

| Step | Subsection | Rationale |
|------|-----------|-----------|
| 1 | B8. Token Compliance | READ FIRST -- constraints before design |
| 2 | B1. Pipeline Routing | Classify tier and pattern |
| 3 | B9. Guardrail Compliance | Know padding floors before container |
| 4 | B2. Container Width | Set container with guardrails in mind |
| 5 | B3. Mechanism Breadth | Deploy across categories |
| 6 | B4. Mechanism Count | Verify count landed naturally |
| 7 | B5. Mechanism Justification | Document mechanism-content fit |
| 8 | B6. Fractal Coherence | Verify 2-scale pattern coherence |
| 9 | B7. Soul Compliance | FINAL verification |
| 10 | B10. Additional Quality | New section with 6 items |

**Reorder notes added** to subsection headers for: B8 (moved from 8 to 1), B1 (moved from 1 to 2), B9 (moved from 9 to 3), B2 (moved from 2 to 4), B7 (moved from 7 to 9).

**Section header updated** to include build sequence summary.

**Item IDs preserved** -- no renumbering. Cross-references remain valid.

---

### 4. SECTION E RESTRUCTURED (from 21-section-b-reorder.md)

#### E3 Reclassified as Scenarios

- **Old header:** "E3. PARTIAL Criteria (at least 1 true, none of E4)"
- **New header:** "E3. PARTIAL Verdict Scenarios"
- **Old table format:** | ID | Check | Interpretation | (with E3.1-E3.4 IDs)
- **New table format:** | Scenario | Pattern | Interpretation | (no IDs, labeled as scenarios)
- **E3.3 updated:** Now includes MARGINAL definition: "2-3 of 4 sub-criteria PASS"
- **Explanatory paragraph added** above table

---

### 5. SECTION H UPDATED

#### H1-H5: Cross-references updated

- H1: B1-B9 -> B1-B10; C3.1-C3.4 -> C3.1-C3.5; PA-05 operationalization noted
- H2: A1.1-A1.5 -> A1.0-A1.5; B2.1-B2.4 -> B2.1-B2.5; E3.1-E3.4 -> E3 scenarios
- H3: A1.1-A1.5 -> A1.0-A1.5; B2.1-B2.4 -> B2.1-B2.5; C3.5 added for UI Audit Protocol
- H4: A1.1-A1.5 -> A1.0-A1.5 for C2 and C6
- H5: B10.12 and B10.14 entries added

#### H6: NEW coverage table added

- Maps all 4 hardening specs to their checklist coverage

---

### 6. SUMMARY STATISTICS UPDATED

- Item counts updated per section (A: 22->23, B: 35->46, C: 21->22, E: 16->12 checks + 4 scenarios)
- Notes column added to table
- Total updated: 129 -> 138 check items + 4 E3 scenarios + 6 coverage tables
- Critical items expanded from 7 to 10 with step position notes

---

### 7. CRITICAL ITEMS EXPANDED (Critical-7 -> Critical-10)

**Added to critical list:**
- **B2.5** -- Container width priority order (from 21-missing-items-spec.md)
- **B4.4** -- Mechanism interaction documented (from 21-mechanism-hardening.md, recommended as Critical-8)
- **A1.0** -- M1 current status verified (from 21-missing-items-spec.md)

**Step position notes added** to all critical items reflecting new Section B order.

---

### 8. OTHER CHANGES

- **Header:** Added "Last Modified" line with hardening pass description
- **Builder documentation requirement** added after C4 section: PRIMARY ZONE and SECONDARY ZONE declaration required for PA-05c evaluation
- **Sources list** at end of document expanded to include all 4 hardening spec files

---

## Verification Checklist

- [x] A1.0 inserted before A1.1
- [x] B2.5 inserted after B2.4
- [x] B4.1 floor raised from 5 to 7
- [x] B4.4 (interaction check) added after B4.3
- [x] B4.5 (perceptibility floor) added after B4.4
- [x] B10 section created with 6 items (B10.1, B10.5, B10.7, B10.9, B10.12, B10.14)
- [x] C3.5 inserted after C3.4
- [x] C4.5 PA-05 operationalized with 4 sub-criteria
- [x] C4.10 PA-05 operationalized with adjusted 768px thresholds
- [x] D2.1 evidence format updated to structured PA-05 sub-criteria
- [x] E2.1 updated to reference 4/4 sub-criteria composite
- [x] E2.4 pass condition changed to "-> See B3.6"
- [x] E2.6 pass condition changed to "-> See B2.1"
- [x] E2.7 pass condition changed to "-> See C3.1"
- [x] E3 reclassified as scenarios (header, table format, no IDs)
- [x] E3.3 updated with MARGINAL = 2-3/4 definition
- [x] E4.1 updated to reference 0-1/4 sub-criteria composite
- [x] Section B reordered: B8->B1->B9->B2->B3->B4->B5->B6->B7->B10
- [x] Reorder notes added to B8, B1, B9, B2, B7 headers
- [x] Section B header updated with build sequence summary
- [x] H1-H5 cross-references updated
- [x] H6 new coverage table added
- [x] Summary statistics updated (item counts, notes, total)
- [x] Critical items expanded to 10 with step positions
- [x] Sources list expanded

---

**END CHANGELOG**
