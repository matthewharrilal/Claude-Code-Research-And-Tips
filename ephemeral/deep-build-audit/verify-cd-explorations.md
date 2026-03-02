# CD Exploration Files Verification
**Date:** 2026-02-28
**Task:** Verify all CD (Combination Dimension) exploration files against corpus.ts

---

## Summary

- **CD HTML files on disk:** 6 (all in `design-system/validated-explorations/combination/`)
- **CD MD case study files on disk:** 3 (all in `design-system/compositional-core/case-studies/`)
- **CD-related support files:** 4 (evaluation, content-selection, audit-synthesis, build-state)
- **CD files in corpus.ts:** 3 (all MD case studies -- CD-001, CD-005, CD-006)
- **CD HTML files in corpus.ts:** 0 (none of the .html files are referenced)
- **corpus.ts CD references pointing to missing files:** 0 (all 3 CD references resolve correctly)
- **Total CD-named files found:** 13 (6 HTML + 3 MD case studies + 4 support MD)

> Note: The expected "~24 files / ~15,600 lines" does NOT match. Only 6 HTML files exist on disk (10,704 lines total). There are no additional CD-002, CD-003, CD-004 case study MD files -- only HTML versions. The corpus uses extracted/distilled MD case studies, not the raw HTML.

---

## CD HTML Files (Exploration Originals)

These are the canonical HTML exploration artifacts in `design-system/validated-explorations/combination/`.
**None are referenced in corpus.ts.** Corpus uses MD case study extractions instead.

| File | Lines | In corpus.ts |
|------|-------|-------------|
| `design-system/validated-explorations/combination/CD-001-reasoning-inside-code.html` | 1,654 | NO |
| `design-system/validated-explorations/combination/CD-002-task-containing-decision.html` | 1,567 | NO |
| `design-system/validated-explorations/combination/CD-003-file-tree-with-callouts.html` | 1,770 | NO |
| `design-system/validated-explorations/combination/CD-004-essence-as-background.html` | 1,625 | NO |
| `design-system/validated-explorations/combination/CD-005-multi-axis-transition.html` | 2,003 | NO |
| `design-system/validated-explorations/combination/CD-006-pilot-migration.html` | 2,085 | NO |
| **Total HTML** | **10,704** | |

---

## CD Case Study Files (Distilled MD -- Referenced in corpus.ts)

These are in `design-system/compositional-core/case-studies/` and ARE referenced by corpus.ts (Subset S4).

| File | Lines | In corpus.ts | corpus.ts approximateLines | Delta |
|------|-------|-------------|--------------------------|-------|
| `design-system/compositional-core/case-studies/CD-001-reasoning-inside-code.md` | 415 | YES (S4) | 415 | 0 |
| `design-system/compositional-core/case-studies/CD-005-multi-axis-transition.md` | 386 | YES (S4) | 386 | 0 |
| `design-system/compositional-core/case-studies/CD-006-pilot-migration.md` | 387 | YES (S4) | 387 | 0 |
| **Total MD case studies** | **1,188** | | | |

Note: CD-002, CD-003, CD-004 do NOT have MD case study versions. Only HTML originals exist.

---

## CD Support Files (Not in corpus.ts)

These are auxiliary files in `design-system/validated-explorations/combination/` -- build logs, evaluation reports, etc.

| File | Lines | In corpus.ts |
|------|-------|-------------|
| `design-system/validated-explorations/combination/CD-005-EVALUATION.md` | 310 | NO |
| `design-system/validated-explorations/combination/CD-006-CONTENT-SELECTION.md` | 422 | NO |
| `design-system/validated-explorations/combination/CD-AUDIT-SYNTHESIS.md` | 456 | NO |
| `design-system/validated-explorations/combination/CD-BUILD-STATE.md` | 179 | NO |
| **Total support MD** | **1,367** | | |

---

## Other CD-Named Files Found (Not exploration artifacts)

These files contain "CD" in the name but are not exploration files -- they are archive/pipeline/design-system docs.

| File | Lines | In corpus.ts |
|------|-------|-------------|
| `archive/cd-audit-reports/perceptual-audit/CD-AUDIT-SYNTHESIS.md` | (archive copy) | NO |
| `archive/knowledge-architecture/09-CD-SYNTHESIS-BRIEFING.md` | (archive) | NO |
| `archive/pipeline-archive/_CD-EXEC-CONTEXT.md` | (archive) | NO |
| `archive/pipeline-archive/_CD-EXEC-VERIFICATION.md` | (archive) | NO |
| `design-system/pipeline/01-CD-EVOLVED-VISION.md` | (pipeline doc) | NO |
| `design-system/pipeline/MASTER-CD-EXECUTION-PROMPT.md` | (pipeline doc) | NO |
| `design-system/specification/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` | (provenance) | NO |
| `design-system/specification/provenance/stage-5-combination-cd/CD-CONVENTION-SPEC.md` | (provenance) | NO |
| `ephemeral/flagship-44-recipe/03-CD006-FORENSICS.md` | (ephemeral) | NO |
| `ephemeral/builds/yegge-gas-town-2026-02-25/implementation/aux-audits-ABCD.md` | (ephemeral) | NO |

---

## corpus.ts CD References -- Existence Check

| corpus.ts path | Exists on disk | Lines |
|---------------|---------------|-------|
| `design-system/compositional-core/case-studies/CD-001-reasoning-inside-code.md` | YES | 415 |
| `design-system/compositional-core/case-studies/CD-005-multi-axis-transition.md` | YES | 386 |
| `design-system/compositional-core/case-studies/CD-006-pilot-migration.md` | YES | 387 |

**Result: 0 broken references. All 3 CD files referenced in corpus.ts exist on disk.**

---

## corpus.ts Files That Don't Exist -- Full Check

All 37 paths referenced in corpus.ts were verified. **All 37 exist on disk. Zero missing files.**

---

## Findings

1. **CD HTML files are NOT in corpus.ts.** corpus.ts uses distilled MD case studies, not raw HTMLs. This is intentional -- the MD case studies are the extracted learning distillation for the pipeline.

2. **Only 3 of 6 CDs have MD case studies (CD-001, CD-005, CD-006).** CD-002, CD-003, CD-004 exist only as HTML. If these are valuable, they would need MD case study extractions created before they could be added to corpus.ts.

3. **The "~24 files / ~15,600 lines" expectation does not match reality.** Only 6 HTML + 3 MD = 9 actual CD exploration artifacts exist. Total lines: 10,704 (HTML) + 1,188 (MD) = 11,892. The discrepancy suggests the count expectation may have included support/archive/pipeline files or was based on a different inventory.

4. **corpus.ts approximateLines are exactly correct** for all 3 CD case studies (delta = 0 across all three). The corpus metadata is up to date.

5. **No phantom references.** Every path in corpus.ts resolves to a real file on disk.
