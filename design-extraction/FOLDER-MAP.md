<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: design-extraction/FOLDER-MAP.md
Tier: B | Batch: 5 | Date: 2026-02-06
═══════════════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
Navigation map for the design-extraction/ directory created during Phase 2A.
Provides a pipeline reading order (soul foundation -> tokens -> constraints ->
research -> DD explorations -> patterns -> knowledge architecture), quick
reference table, folder status grid, and full directory tree.

2. THE QUESTION THIS ANSWERS
"Where do I find what I need in design-extraction/, and in what order should
I read it?" — The definitive navigation reference for this directory.

3. STATUS
ACTIVE

5. BUILT ON
- PHASE-2A-CLASSIFICATION.md (classification work that identified file statuses)
- Directory structure analysis (folder status, file counts, supersession chains)

6. MUST HONOR
- T1 files listed as LOCKED must not be modified without Phase approval
- archive/ marked as DANGEROUS must retain that warning
- card-system/ marked as SUPERSEDED must not be recommended for use

8. CONSUMED BY
- Navigation reference for all agents entering design-extraction/
- Context recovery section used during session restarts

10. DIAGNOSTIC QUESTIONS
Q1: Does the "Folder Status" table accurately reflect the current state of
    each directory (especially component-system/ transitional status)?
Q2: Does the "Current Phase" in the context recovery section match the actual
    current phase of work?
Q3: Are any folders listed in the directory tree that have been deleted or
    moved since Phase 2A classification?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
 -->

# FOLDER-MAP.md — Design Extraction Navigation

> **Quick Start:** If you're new here, read `component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md` first.

## The Pipeline (Read in This Order)

### 1. SOUL FOUNDATION
```
perceptual-audit-v2/foundation/KORTAI-ESSENCE-FOUNDATION.md
perceptual-audit-v2/foundation/SOUL-TRANSLATION-GUIDE.md
perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md
```
Understanding the 5 soul pieces that define KORTAI's character.

### 2. LOCKED TOKEN VALUES
```
perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md
perceptual-audit-v2/synthesis/CHARACTER-FAMILY-COMPLETE.md
```
The complete :root block and 11 named component characters.

### 3. CONSTRAINTS & ANTI-PATTERNS
```
perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md
perceptual-audit-v2/synthesis/PRODUCTION-RULES.md
```
What NOT to do, and mandatory implementation rules.

### 4. RESEARCH BACKING
```
../docs-spa/app/showcase/research/R3-DENSITY-DIMENSIONS.md
../docs-spa/app/showcase/research/RESEARCH-SYNTHESIS.md
```
51 research findings that back the soul decisions.

### 5. DD EXPLORATIONS
```
../docs-spa/app/showcase/explorations/density/DD-006-fractal.html
```
Visual explorations that validate the soul in practice. DD-006 is the most-referenced artifact (20+ inbound refs).

### 6. PATTERNS
```
../docs-spa/app/showcase/DESIGN-SYSTEM/patterns/density-patterns.md
```
6 validated patterns extracted from DD explorations.

### 7. KNOWLEDGE ARCHITECTURE
```
../docs-spa/app/showcase/knowledge-architecture/PIPELINE-BACKBONE.md
```
Understanding the entire Research → T1 → DD → OD → AD → CD pipeline.

---

## Quick Reference

| I Want To... | Go To |
|--------------|-------|
| Understand the soul | `component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md` |
| Get CSS tokens | `component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md` |
| See component specs | `component-system/perceptual-audit-v2/synthesis/CHARACTER-FAMILY-COMPLETE.md` |
| Know what NOT to do | `component-system/perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md` |
| See implementation rules | `component-system/perceptual-audit-v2/synthesis/PRODUCTION-RULES.md` |
| Understand why Instrument Serif | `font-research/FINAL-DECISION.md` |
| See a working example | `../docs-spa/app/showcase/explorations/density/DD-006-fractal.html` |
| Get production CSS | `component-system/css/variables.css` |
| Understand the pipeline | `../docs-spa/app/showcase/knowledge-architecture/PIPELINE-BACKBONE.md` |
| Find superseded values | `archive/` (read-only, dangerous) |

---

## Folder Status

| Folder | Status | Notes |
|--------|--------|-------|
| `component-system/perceptual-audit-v2/synthesis/` | **ACTIVE (T1)** | Authoritative source of truth |
| `component-system/perceptual-audit-v2/` | ACTIVE | T1 synthesis hub |
| `component-system/` | TRANSITIONAL | Bridge folder, some files superseded |
| `typography-system/` | ACTIVE | T1 typography implementation |
| `font-research/` | ARCHIVE (complete) | Instrument Serif decision locked |
| `archive/` | ARCHIVE (dangerous) | Contains wrong token values |
| `card-system/` | SUPERSEDED | Historical only, do not use |

---

## Directory Structure

```
design-extraction/
├── FOLDER-MAP.md              ← You are here
├── CLAUDE.md                  ← Process documentation
├── README.md
│
├── component-system/          TRANSITIONAL
│   ├── CLAUDE.md
│   ├── perceptual-audit-v2/   ACTIVE (T1 AUTHORITY)
│   │   ├── CLAUDE.md
│   │   ├── synthesis/         T1 FILES (6 documents)
│   │   ├── foundation/        Soul essence + translation guide
│   │   ├── tracking/          Token registries
│   │   ├── components/        11 component audits
│   │   └── ...
│   ├── SOUL-DEFINITION.md     ACTIVE (locked)
│   ├── ANTI-PATTERNS.md       SUPERSEDED
│   ├── css/                   ACTIVE (9 CSS files)
│   ├── archive/               SUPERSEDED
│   └── ...
│
├── typography-system/         ACTIVE
│   ├── CLAUDE.md
│   ├── typography.css         T1 LOCKED (imports 3 modules)
│   ├── type-scale.css
│   ├── stroke-treatments.css
│   ├── typography-components.css
│   └── ...
│
├── font-research/             COMPLETE
│   ├── CLAUDE.md
│   ├── FINAL-DECISION.md      KEY FILE
│   ├── comparisons/           5 font comparisons
│   ├── specimens/             7 font specimens
│   └── ...
│
├── archive/                   DANGEROUS
│   ├── CLAUDE.md
│   ├── tokens/                WRONG VALUES
│   └── ...
│
└── card-system/               SUPERSEDED
    ├── CLAUDE.md
    ├── SOUL-DEFINITION.md     Has SUPERSEDED header
    ├── research/              3A-3D research files
    └── ...
```

---

## Critical Reminders

1. **T1 files are LOCKED** — Do not modify without Phase approval
2. **border-radius MUST be 0** — Soul Piece 2
3. **box-shadow MUST be none** — Soul Piece 2
4. **Instrument Serif is the display font** — Soul Piece 5
5. **archive/ contains WRONG values** — Never copy from there
6. **card-system/ is SUPERSEDED** — Historical record only

---

## For Context Recovery

### Current Phase: 2B Pre-Execution (Inline Threading Sections)

**What's complete:**
- Phase 1B: Mega Debrief (463 files traced)
- Phase 2A Part 1: Classification (131 DELETE, 64 SUPERSEDED, 714 KEEP)
- Phase 2A Part 2: Deletions + headers (132 deleted, 46 headers added)
- Phase 2A Part 3: COMPLETE (7 CLAUDE.md + 1 FOLDER-MAP.md created)
- Phase 2B Discovery: COMPLETE (8-section investigation, 3 sample sections)

**What's next:**
- Phase 2B Execution: Inline threading sections for 253 KEEP+FULL files (13 batches)

**Key reference:** `../docs-spa/app/showcase/knowledge-architecture/PIPELINE-BACKBONE.md`
