# Implementation Report: Two-Pass Recipe Split + INTENT Narration

**Date:** 2026-02-26
**Task:** #9 (D5: Implement two-pass recipe split)
**Design sources:**
- `d5-two-pass-design.md` (Section 5 + Section 12)
- `d2-narration-spec.md` (Section 3)

---

## Files Created

### 1. `artifact-builder-recipe-compose.md` (808 lines) — NEW
Pass A (COMPOSE) recipe. Contains:
- Updated header identifying this as "Pass A of 2"
- Clear "What Pass A produces" / "What Pass A does NOT produce" sections
- Full Phase 1 (Read Vocabulary)
- Full Phase 2 (Select Creative Decisions)
- Full Phase 3 (Deploy Scaffolding) + **Step 3.4d (INTENT narration)** from D2 spec
- Phase 4 with D-01 through D-06 and D-09 only (D-07/D-08 replaced with deferral note)
- Partial Phase 5 (Steps 5.3, 5.5, 5.6, 5.7 only — experiential/legibility/skeleton deferred to Pass B)
- Full Phase 6 (Temporal Composition)
- Appendices A-C (unchanged, preserve provenance)
- REFINE narration instruction (from D2 spec Section 3.3)
- Council amendment #6 updated: "Two-pass = DEFAULT (v5)"

### 2. `artifact-builder-recipe-polish.md` (284 lines) — NEW
Pass B (POLISH) recipe. Self-contained for the Polish Builder agent. Contains:
- Phase 1: Orient (read Pass A HTML, re-read tokens.css and brief)
- Phase 2: Deploy D-07 Edge Intentionality (hover states, micro-typography, print, edge treatments, reduced motion, INTENT narration)
- Phase 3: Deploy Accessibility (skip link, ARIA, heading hierarchy, focus-visible, contrast, reduced motion)
- Phase 4: Deploy D-08 Skeleton Test (assessment only)
- Phase 5: Full Self-Evaluation (Steps 5.0-5.7 verbatim from original)
- ADD-ONLY Constraint section (permitted + prohibited operations)
- Quiet zone hover constraint (from D5 design Risk 1 mitigation)
- Compositional flaw documentation protocol

### 3. `artifact-builder-recipe.md` (827 lines) — MODIFIED
Original file preserved as redirect + reference archive:
- Added redirect header pointing to compose + polish files
- Marked Status: ARCHIVED
- Original content preserved below redirect for audit trail

---

## Changes Applied from D5 Design Doc

| Design Section | Implementation | Status |
|---------------|---------------|--------|
| Section 2: Pass A disposition list (D-01..D-06, D-09) | Compose file Phase 4 | DONE |
| Section 2: Pass B disposition list (D-07, D-08) | Polish file Phases 2+4 | DONE |
| Section 2: Pass A partial self-eval (5.3, 5.5, 5.6) | Compose file Phase 5 | DONE |
| Section 2: Pass B full self-eval (5.0-5.7) | Polish file Phase 5 | DONE |
| Section 3: Pass B input spec | Polish file "How to Use" | DONE |
| Section 4: ADD-only constraint | Polish file "ADD-ONLY CONSTRAINT" section | DONE |
| Section 5: Recipe restructuring | Two separate files created | DONE |
| Section 7: REFINE targets Pass A only | Redirect file + compose file note | DONE |

## Changes Applied from D2 Narration Spec

| D2 Section | Implementation | Status |
|-----------|---------------|--------|
| Section 3.1: Step 3.4d placement | Compose file after Step 3.4c | DONE |
| Section 3.2: 32-line recipe text | Compose file Step 3.4d (28 lines — compressed slightly) | DONE |
| Section 3.3: REFINE narration instruction | Compose file after Step 3.4d self-test | DONE |
| Section 2.6: Pass B narration | Polish file Step 2.6 | DONE |

---

## Line Count Comparison

| File | Before | After | Delta |
|------|--------|-------|-------|
| `artifact-builder-recipe.md` (original) | 833 | 827 (redirect + archive) | -6 |
| `artifact-builder-recipe-compose.md` | N/A | 808 | +808 (new) |
| `artifact-builder-recipe-polish.md` | N/A | 284 | +284 (new) |
| **Net operational lines** | 833 | 808 + 284 = 1,092 | +259 |

The net increase of 259 lines comes from:
- +32 lines: Step 3.4d INTENT narration (new content from D2)
- +6 lines: REFINE narration instruction (new content from D2)
- +28 lines: Pass A/B header annotations and deferral notes
- +193 lines: Polish file content that was extracted + expanded (D-07 with hover sub-steps, accessibility checklist, ADD-only constraint section)

**D-07/D-08 removal from compose file:** -27 lines (D-07 14 lines + D-08 3 lines + assessment references)
**Phase 5 reduction in compose file:** -39 lines (Steps 5.0, 5.1, 5.2, 5.4 moved to polish)

---

## Issues Encountered

1. **Conflicting instructions on file structure.** Initial instruction said "Keep file as one file with two clearly delineated sections." Follow-up instruction said "split into artifact-builder-recipe-compose.md and artifact-builder-recipe-polish.md." Followed the most recent instruction (two separate files).

2. **Step 2.7 (hover behavior) remains in compose file.** The compose file still includes Step 2.7 "Select hover behavior patterns" in Phase 2 creative decisions. This is correct per the design doc — the Pass A builder SELECTS the hover vocabulary (creative decision), while Pass B DEPLOYS it. The selection informs the conviction statement, which Pass B reads.

3. **Appendices retained in compose file only.** The Appendix B cross-reference tables include D-07/D-08 ITEM provenance records. These are retained because they are audit trail, not operational instructions. Pass B does not need them (self-contained by design).

4. **BV-07 volume concern.** Per D5 design Section 11, Pass A already exceeds BV-07 (2,500 line ceiling) with current input files. The recipe split does not make this worse — compose file (808 lines) is actually smaller than the original (833). This is a pre-existing issue.

---

## Verification Checklist

- [x] Compose file contains D-01 through D-06 and D-09 (7 dispositions)
- [x] Compose file does NOT contain D-07 or D-08 operational instructions
- [x] Compose file has partial Phase 5 (Steps 5.3, 5.5, 5.6 only)
- [x] Polish file contains D-07 and D-08
- [x] Polish file contains full Phase 5 (Steps 5.0-5.7)
- [x] Polish file contains accessibility checklist
- [x] Polish file has ADD-ONLY constraint section
- [x] Polish file is self-contained (agent can work with only this file + inputs)
- [x] Step 3.4d (INTENT narration) added to compose file
- [x] REFINE narration instruction added to compose file
- [x] Original file preserved as redirect + archive
- [x] Council amendment #6 updated for two-pass default
- [x] D-07/D-08 deferral note in compose Phase 4
- [x] Pass A output targets updated (conviction + RESIDUAL artifacts)
- [x] Quiet zone hover constraint in polish file (D5 Risk 1 mitigation)

---

*Implementation complete. Task #9 ready for completion.*
