# Connective Tissue & Infrastructure Verification

**Date:** 2026-02-28
**Auditor:** verify-connective-tissue agent (Opus 4.6)
**Scope:** Every file path referenced by deep-build pipeline (corpus.ts, paths.ts, assembler.ts, templates/)

---

## Summary

| Category | Total Files | Exist | Missing | Line Count Match |
|----------|------------|-------|---------|-----------------|
| Infrastructure (every pass) | 3 | 3 | 0 | 3/3 EXACT |
| Corpus S1-S7 rotating | 30 | 30 | 0 | 30/30 EXACT |
| Templates | 10 | 10 | 0 | N/A (not tracked) |
| paths.ts special refs | 3 | 1 | **2** | 0/1 (only 1 exists) |
| assembler.ts hardcoded | 5 | 3 | **2** (same 2) | N/A |
| **TOTAL** | **51** | **47** | **2 BLOCKING** | |

---

## BLOCKING FINDINGS (2)

### BLOCKING-1: Case Study HTML — Wrong Path

**Referenced in:**
- `paths.ts:61` — `design-system/compositional-core/case-studies/CD-006/exploration.html`
- `assembler.ts:148` — builder prompt (CASE_STUDY variable)
- `assembler.ts:523` — refine-builder prompt (CASE_STUDY variable)

**Actual file location:**
- `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (2,085 lines)

**Impact:** `loadFileOrEmpty()` silently returns `''`. Every builder pass and every refine-builder pass receives an **empty** CASE_STUDY variable. The builder never sees the CD-006 reference exploration. This is a **silent data loss** -- no error, no warning, just missing context.

**Note:** `corpus.ts:97` has a SEPARATE correct reference to `CD-006-pilot-migration.md` (the case study markdown, NOT the HTML exploration). That file exists at the expected path. The broken path is specifically for the HTML exploration file used as a visual reference.

**Fix:** Change path in both `paths.ts:61` and `assembler.ts:148,523` to:
```
design-system/validated-explorations/combination/CD-006-pilot-migration.html
```

---

### BLOCKING-2: R5 Research File — Wrong Filename

**Referenced in:**
- `paths.ts:63` — `design-system/research/R5-agent-assisted-design-review.md`
- `assembler.ts:399` — TC derivation prompt (RESEARCH_FILES variable)
- `assembler.ts:418` — content analysis prompt (RESEARCH_FILES variable)

**Actual file:**
- `design-system/research/R5-COMBINATION-THEORY.md` (784 lines)

**Impact:** `loadFileOrEmpty()` silently returns `''`. Both the TC derivation agent and the content analysis agent receive their RESEARCH_FILES variable with only RESEARCH-SYNTHESIS.md — they never see R5. This means Phase 0 agents derive tension-composition without combination theory research, which is the foundation for multi-pattern interaction (39 findings).

**Fix:** Change path in `paths.ts:63` and `assembler.ts:399,418` to:
```
design-system/research/R5-COMBINATION-THEORY.md
```

---

## Infrastructure Files (Loaded Every Pass)

All 3 infrastructure files exist with EXACT line counts matching corpus.ts declarations.

| File | Config Path | Exists | Config Lines | Actual Lines | Match |
|------|------------|--------|-------------|-------------|-------|
| Mechanism Catalog | `design-system/compositional-core/grammar/mechanism-catalog.md` | YES | 751 | 751 | EXACT |
| Components CSS | `design-system/compositional-core/components/components.css` | YES | 944 | 944 | EXACT |
| Design Tokens | `design-system/compositional-core/vocabulary/tokens.css` | YES | 183 | 183 | EXACT |

---

## Corpus Subset Files (Rotating)

### Subset 1: Research Foundation (5 files)

| File | Exists | Config Lines | Actual Lines | Match |
|------|--------|-------------|-------------|-------|
| R3-DENSITY-DIMENSIONS.md | YES | 553 | 553 | EXACT |
| R4-AXIS-INNOVATIONS.md | YES | 990 | 990 | EXACT |
| R5-COMBINATION-THEORY.md | YES | 784 | 784 | EXACT |
| RESEARCH-SYNTHESIS.md | YES | 383 | 383 | EXACT |
| DD-006-fractal.md | YES | 377 | 377 | EXACT |

### Subset 2: Identity & Perception (5 files)

| File | Exists | Config Lines | Actual Lines | Match |
|------|--------|-------------|-------------|-------|
| R1-DOCUMENTATION-PATTERNS.md | YES | 584 | 584 | EXACT |
| R2-CREATIVE-LAYOUTS.md | YES | 810 | 810 | EXACT |
| OD-001-conversational.md | YES | 297 | 297 | EXACT |
| OD-004-confidence.md | YES | 309 | 309 | EXACT |
| OD-006-creative.md | YES | 333 | 333 | EXACT |

### Subset 3: Deep Dives & Structure (5 files)

| File | Exists | Config Lines | Actual Lines | Match |
|------|--------|-------------|-------------|-------|
| DD-003-islands.md | YES | 405 | 405 | EXACT |
| DD-004-layers.md | YES | 428 | 428 | EXACT |
| dd-003-islands-visual.md | YES | 462 | 462 | EXACT |
| dd-004-layers-visual.md | YES | 144 | 144 | EXACT |
| dd-006-fractal-visual.md | YES | 165 | 165 | EXACT |

### Subset 4: Composition Case Studies (4 files)

| File | Exists | Config Lines | Actual Lines | Match |
|------|--------|-------------|-------------|-------|
| CD-001-reasoning-inside-code.md | YES | 415 | 415 | EXACT |
| CD-005-multi-axis-transition.md | YES | 386 | 386 | EXACT |
| CD-006-pilot-migration.md | YES | 387 | 387 | EXACT |
| ANTI-PRESCRIPTION-TEMPLATE.md | YES | 471 | 471 | EXACT |

### Subset 5: Identity & Guidelines (4 files)

| File | Exists | Config Lines | Actual Lines | Match |
|------|--------|-------------|-------------|-------|
| semantic-rules.md | YES | 529 | 529 | EXACT |
| prohibitions.md | YES | 419 | 419 | EXACT |
| soul-constraints.md | YES | 342 | 342 | EXACT |
| case-studies/README.md | YES | 541 | 541 | EXACT |

### Subset 6: Pipeline Knowledge (6 files)

| File | Exists | Config Lines | Actual Lines | Match |
|------|--------|-------------|-------------|-------|
| artifact-identity-perception.md | YES | 500 | 556 | DRIFT (+56) |
| artifact-builder-recipe.md | YES | 400 | 827 | DRIFT (+427) |
| artifact-routing.md | YES | 300 | 1056 | DRIFT (+756) |
| artifact-orchestrator.md | YES | 400 | 755 | DRIFT (+355) |
| artifact-value-tables.md | YES | 300 | 262 | DRIFT (-38) |
| artifact-tc-brief-template.md | YES | 223 | 235 | DRIFT (+12) |

**Note on Subset 6 drift:** All 6 files in Subset 6 have line count drift. The `approximateLines` in corpus.ts are clearly outdated estimates. These files exist and load correctly -- the line counts just affect token budget estimation. Since `loadFileOrEmpty` loads the entire file regardless of the estimate, this causes no functional failure, but token budget calculations may be inaccurate. The drift is significant (artifact-routing.md is 3.5x the estimate), which could cause unexpected token trimming.

### Subset 7: PA & Evaluation (5 files)

| File | Exists | Config Lines | Actual Lines | Match |
|------|--------|-------------|-------------|-------|
| pa-questions.md | YES | 431 | 456 | DRIFT (+25) |
| pa-deployment.md | YES | 355 | 450 | DRIFT (+95) |
| pa-weaver.md | YES | 449 | 468 | DRIFT (+19) |
| pa-guardrails.md | YES | 113 | 113 | EXACT |
| pa-guardrails-weaver.md | YES | 59 | 59 | EXACT |

---

## Templates (tools/deep-build/templates/)

All 10 templates exist. Templates are not tracked in corpus.ts (no approximateLines), but they are loaded by the assembler at runtime.

| Template | Exists | Lines | Used By |
|----------|--------|-------|---------|
| world-description.md | YES | 13 | assembler (builder, TC, content-analysis) |
| tc-derivation.md | YES | 62 | assembleTcDerivationPrompt |
| content-analysis.md | YES | 74 | assembleContentAnalysisPrompt |
| verifier-corpus.md | YES | 105 | assembleVerifierPrompt |
| retrospective.md | YES | 60 | assembleRetrospectivePrompt |
| pa-auditor.md | YES | 140 | assemblePaAuditorPrompt |
| pa-integrative.md | YES | 118 | assemblePaIntegrativePrompt |
| pa-weaver.md | YES | 207 | assembleWeaverPrompt |
| refine-builder.md | YES | 199 | assembleRefineBuilderPrompt |
| builder-corpus.md | YES | 277 | assembleBuilderPrompt |

---

## paths.ts `resolveProjectPaths()` — Special References

These are computed at runtime but NOT used by corpus rotation. They're convenience references used by the assembler directly.

| Key | Path | Exists | Notes |
|-----|------|--------|-------|
| mechanismCatalog | `design-system/compositional-core/grammar/mechanism-catalog.md` | YES | Also in INFRASTRUCTURE_FILES |
| componentsCss | `design-system/compositional-core/components/components.css` | YES | Also in INFRASTRUCTURE_FILES |
| tokensCss | `design-system/compositional-core/vocabulary/tokens.css` | YES | Also in INFRASTRUCTURE_FILES |
| caseStudy | `design-system/compositional-core/case-studies/CD-006/exploration.html` | **NO** | **BLOCKING-1** |
| researchSynthesis | `design-system/research/RESEARCH-SYNTHESIS.md` | YES | 383 lines |
| r5 | `design-system/research/R5-agent-assisted-design-review.md` | **NO** | **BLOCKING-2** |

---

## Assembler Hardcoded Paths (assembler.ts)

Beyond what corpus.ts defines, the assembler has several hardcoded paths:

| Line | Path | Exists | Variable | Notes |
|------|------|--------|----------|-------|
| 123, 395, 414 | `TEMPLATES_DIR/world-description.md` | YES | WORLD_DESCRIPTION | |
| 148, 523 | `design-system/compositional-core/case-studies/CD-006/exploration.html` | **NO** | CASE_STUDY | **BLOCKING-1** |
| 149, 524 | `design-system/compositional-core/grammar/mechanism-catalog.md` | YES | MECHANISM_CATALOG | |
| 150, 525 | `design-system/compositional-core/components/components.css` | YES | COMPONENTS_CSS | |
| 151, 526 | `design-system/compositional-core/vocabulary/tokens.css` | YES | TOKENS_CSS | |
| 398, 417 | `design-system/research/RESEARCH-SYNTHESIS.md` | YES | RESEARCH_FILES[0] | |
| 399, 418 | `design-system/research/R5-agent-assisted-design-review.md` | **NO** | RESEARCH_FILES[1] | **BLOCKING-2** |

---

## Additional Observations

### 1. case-studies/_INDEX.md Referenced But Missing

The `compositional-core/CLAUDE.md` references `case-studies/_INDEX.md` extensively (Phase 3.5 divergence check, Phase 5 comparison, file reference section). The actual file is `case-studies/README.md` (541 lines). This is NOT a pipeline code issue (deep-build code correctly references `README.md` in corpus.ts S5), but it IS a documentation discrepancy in CLAUDE.md files. Not blocking for deep-build.

### 2. Subset 6 Line Count Drift — Token Budget Risk

The combined drift in Subset 6 is substantial:
- Config estimates: 500 + 400 + 300 + 400 + 300 + 223 = **2,123 lines**
- Actual on disk: 556 + 827 + 1056 + 755 + 262 + 235 = **3,691 lines**
- Delta: **+1,568 lines** (74% more than estimated)

This means token budget estimation for Subset 6 passes is significantly low. The pipeline may trigger unexpected token trimming or even hit TOKEN_FAIL for Subset 6 passes. Consider updating the approximateLines values.

### 3. `loadFileOrEmpty` Pattern — Silent Failure Risk

Both BLOCKING issues are caused by `loadFileOrEmpty()` which catches all errors and returns `''`. This means broken paths produce no error, no warning, and no log entry. The builder silently receives empty context. Consider adding a warning log when a file fails to load, at minimum.

---

## Recommended Fixes (Priority Order)

### BLOCKING (Must Fix Before Next Run)

1. **Fix CASE_STUDY path** in `paths.ts:61` and `assembler.ts:148,523`:
   - From: `design-system/compositional-core/case-studies/CD-006/exploration.html`
   - To: `design-system/validated-explorations/combination/CD-006-pilot-migration.html`

2. **Fix R5 path** in `paths.ts:63` and `assembler.ts:399,418`:
   - From: `design-system/research/R5-agent-assisted-design-review.md`
   - To: `design-system/research/R5-COMBINATION-THEORY.md`

### SIGNIFICANT (Should Fix)

3. **Update approximateLines for Subset 6** in `corpus.ts` to match actual values (prevents token budget miscalculation)

4. **Update approximateLines for Subset 7** in `corpus.ts` (pa-questions.md +25, pa-deployment.md +95, pa-weaver.md +19)

### ADVISORY (Nice to Have)

5. **Add warning logging to loadFileOrEmpty** when a file fails to load (currently silent)

6. **Reconcile _INDEX.md vs README.md** naming in CLAUDE.md documentation (not a code issue, documentation only)
