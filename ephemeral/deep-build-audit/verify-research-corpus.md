# Research Corpus Verification: R1–R5

**Date:** 2026-02-28
**Task:** Verify all R1–R5 research files exist, report line counts, cross-reference against corpus.ts

---

## Summary

All 5 R1–R5 files referenced in `corpus.ts` **EXIST** at the expected paths.

The team-lead claim of "~8,400 lines total across 5 files" is **NOT ACCURATE**.
Actual total is **3,721 lines** across R1–R5. With RESEARCH-SYNTHESIS included: **4,104 lines**.

The 337 findings count comes from CLAUDE.md documentation (not line counts):
R1=28 + R2=27 + R3=51 + R4=192 + R5=39 = 337 findings.

---

## R1–R5 Files Referenced in corpus.ts

All paths are relative to project root (`/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/`).

| File | corpus.ts Path | Actual Lines | corpus.ts `approximateLines` | Delta | In corpus.ts? |
|------|---------------|-------------|------------------------------|-------|---------------|
| R1 | `design-system/research/R1-DOCUMENTATION-PATTERNS.md` | 584 | 584 | 0 | YES (Subset 2) |
| R2 | `design-system/research/R2-CREATIVE-LAYOUTS.md` | 810 | 810 | 0 | YES (Subset 2) |
| R3 | `design-system/research/R3-DENSITY-DIMENSIONS.md` | 553 | 553 | 0 | YES (Subset 1) |
| R4 | `design-system/research/R4-AXIS-INNOVATIONS.md` | 990 | 990 | 0 | YES (Subset 1) |
| R5 | `design-system/research/R5-COMBINATION-THEORY.md` | 784 | 784 | 0 | YES (Subset 1) |
| RESEARCH-SYNTHESIS | `design-system/research/RESEARCH-SYNTHESIS.md` | 383 | 383 | 0 | YES (Subset 1) |

**Total R1–R5 actual lines:** 3,721
**Total including RESEARCH-SYNTHESIS:** 4,104
**corpus.ts `approximateLines` accuracy:** 100% (all values exact matches)

---

## Absolute Paths (Primary Corpus Copies)

```
/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R1-DOCUMENTATION-PATTERNS.md   (584 lines)
/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R2-CREATIVE-LAYOUTS.md          (810 lines)
/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R3-DENSITY-DIMENSIONS.md        (553 lines)
/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R4-AXIS-INNOVATIONS.md          (990 lines)
/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R5-COMBINATION-THEORY.md        (784 lines)
/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/RESEARCH-SYNTHESIS.md           (383 lines)
```

---

## Provenance Copies (NOT Referenced in corpus.ts)

Duplicate copies exist in `design-system/specification/provenance/original-research/` for chain integration purposes. These are NOT loaded by the pipeline — they are reference-only provenance archives.

| File | Lines | Same as Primary? |
|------|-------|-----------------|
| `specification/provenance/original-research/R1-DOCUMENTATION-PATTERNS.md` | 555 | NO (primary: 584, delta: -29) |
| `specification/provenance/original-research/R2-CREATIVE-LAYOUTS.md` | 782 | NO (primary: 810, delta: -28) |
| `specification/provenance/original-research/R3-DENSITY-DIMENSIONS.md` | 519 | NO (primary: 553, delta: -34) |
| `specification/provenance/original-research/R4-AXIS-INNOVATIONS.md` | 976 | NO (primary: 990, delta: -14) |
| `specification/provenance/original-research/R5-COMBINATION-THEORY.md` | 765 | NO (primary: 784, delta: -19) |

**Finding:** All 5 provenance copies are SHORTER than the primary copies (14–34 lines each). The primary `design-system/research/` files appear to have been enriched/extended after the provenance copies were made. corpus.ts correctly references the primary (longer) copies. No action needed.

---

## corpus.ts Cross-Reference: Files That DON'T Exist

corpus.ts was checked for all referenced paths. The R1–R5 files all exist. However, other corpus subsets reference files that may not exist (out of scope for this task, but noted for completeness):

- **Subset 6 (Pipeline Knowledge):** References `ephemeral/va-extraction/artifact-*.md` (6 files) — not checked in this audit
- **Subset 7 (PA & Evaluation):** References `ephemeral/va-extraction/pa-*.md` (5 files) — not checked in this audit

The full corpus path validation (all 27 unique corpus files + 3 infrastructure files) is covered in `corpus-path-validation.md` in this directory.

---

## Corpus Subset Placement

R1–R5 files are distributed across 2 of the 7 corpus subsets:

**Subset 1 — Research Foundation:**
- R3-DENSITY-DIMENSIONS.md
- R4-AXIS-INNOVATIONS.md
- R5-COMBINATION-THEORY.md
- RESEARCH-SYNTHESIS.md

**Subset 2 — Identity & Perception:**
- R1-DOCUMENTATION-PATTERNS.md
- R2-CREATIVE-LAYOUTS.md

Note: R1 and R2 are in Subset 2 (not Subset 1) alongside OD case studies. This is intentional — R1 covers documentation patterns (OD source) and R2 covers creative layouts (multi-stage). R3/R4/R5 are in Subset 1 as the "Research Foundation" alongside DD-006.

---

## Discrepancy: Team-Lead Claim vs Reality

**Claimed:** "~8,400 lines total across 5 files with 337 findings"
**Actual:** 3,721 lines across 5 files; 337 findings is the finding COUNT (from CLAUDE.md documentation)

The 337 findings breakdown:
- R1: 28 findings
- R2: 27 findings
- R3: 51 findings
- R4: 192 findings
- R5: 39 findings
- **Total: 337 findings**

The "8,400 lines" figure does not match any count measurable from these files. Possible explanations:
1. The claim included other files (case studies, RESEARCH-SYNTHESIS, AD/DD explorations)
2. An earlier version of the files was significantly longer
3. The claim was approximate/incorrect

**Recommendation:** Use the verified actual line counts above. corpus.ts `approximateLines` values are accurate (match actual counts exactly).

---

## Verdict

- **All 5 R1–R5 files referenced in corpus.ts EXIST:** YES
- **All `approximateLines` values accurate:** YES (100% exact match)
- **Any R1–R5 references in corpus.ts pointing to missing files:** NO
- **Provenance copies exist but differ from primary:** YES (14–34 lines shorter each, not a problem)
- **Total line count matches "~8,400" claim:** NO (actual: 3,721)
