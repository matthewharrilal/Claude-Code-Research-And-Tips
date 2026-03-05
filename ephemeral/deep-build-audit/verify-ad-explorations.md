# AD Exploration Files Verification Report

**Date:** 2026-02-28
**Task:** Locate all AD (Axis Dimension) exploration files, count lines, cross-reference with corpus.ts

---

## Summary

- **AD HTML files found (primary artifacts):** 6
- **AD-related MD files found (supporting):** 11 + axis research (R4, axis-patterns)
- **Total AD HTML lines:** 10,920
- **Total AD MD (supporting) lines:** ~8,565
- **AD files referenced in corpus.ts:** 0 (none directly)
- **Expected ~37 files / ~28,000 lines:** NOT MET — only 6 HTML files + 11 supporting MDs found

---

## Primary AD HTML Files (design-system/axis/)

These are the canonical AD exploration artifacts.

| File | Absolute Path | Lines |
|------|--------------|-------|
| AD-001-z-pattern.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/axis/AD-001-z-pattern.html` | 1,737 |
| AD-002-f-pattern.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/axis/AD-002-f-pattern.html` | 1,682 |
| AD-003-bento-grid.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/axis/AD-003-bento-grid.html` | 1,896 |
| AD-004-spiral.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/axis/AD-004-spiral.html` | 1,483 |
| AD-005-choreography.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/axis/AD-005-choreography.html` | 1,846 |
| AD-006-compound.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/axis/AD-006-compound.html` | 2,276 |
| **TOTAL** | | **10,920** |

---

## AD Supporting MD Files

### Provenance Stage 4 (design-system/specification/provenance/stage-4-axis-ad/)

| File | Absolute Path | Lines |
|------|--------------|-------|
| AD-AUDIT-SYNTHESIS.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md` | 496 |
| AD-CONVENTION-SPEC.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/provenance/stage-4-axis-ad/AD-CONVENTION-SPEC.md` | 1,093 |
| AD-outbound-findings.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/provenance/stage-4-axis-ad/AD-outbound-findings.md` | 680 |
| AD-PA-CONVENTIONS.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/provenance/stage-4-axis-ad/AD-PA-CONVENTIONS.md` | 970 |
| AD-RESEARCH-GATE.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/provenance/stage-4-axis-ad/AD-RESEARCH-GATE.md` | 510 |
| AD-SYNTHESIS.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` | 306 |
| HANDOFF-AD-TO-CD.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` | 447 |

### Archive Knowledge Architecture (archive/knowledge-architecture/)

| File | Absolute Path | Lines |
|------|--------------|-------|
| AD-CONVENTION-SPEC.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/archive/knowledge-architecture/AD-CONVENTION-SPEC.md` | 821 |
| AD-RESEARCH-GATE.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/archive/knowledge-architecture/AD-RESEARCH-GATE.md` | 96 |
| MASTER-AD-EXECUTION-SPEC.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/archive/knowledge-architecture/MASTER-AD-EXECUTION-SPEC.md` | 1,407 |

### Axis Directory (design-system/axis/)

| File | Absolute Path | Lines |
|------|--------------|-------|
| CLAUDE.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/axis/CLAUDE.md` | 82 |

### Research / Specification Files (axis-related but not prefixed AD)

| File | Absolute Path | Lines | Notes |
|------|--------------|-------|-------|
| R4-AXIS-INNOVATIONS.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R4-AXIS-INNOVATIONS.md` | 990 | Referenced in corpus.ts (S1) |
| axis-patterns.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/patterns/axis-patterns.md` | 667 | Not in corpus.ts |

---

## Cross-Reference: corpus.ts vs Disk

### Files in corpus.ts referencing AD content

corpus.ts does **NOT** directly reference any AD HTML files (AD-001 through AD-006). It references R4-AXIS-INNOVATIONS.md (Subset S1) which is the axis research document, but none of the actual AD exploration HTML files appear in corpus.ts.

```
// S1 Research Foundation - axis-adjacent reference:
design-system/research/R4-AXIS-INNOVATIONS.md   ← EXISTS (990 lines) ✓
```

### Corpus.ts files that DO NOT exist on disk

None of the corpus.ts files are AD files, but checking all corpus.ts paths against disk:

| corpus.ts Path | Exists? |
|---------------|---------|
| `design-system/compositional-core/grammar/mechanism-catalog.md` | needs verification |
| `design-system/compositional-core/components/components.css` | needs verification |
| `design-system/compositional-core/vocabulary/tokens.css` | needs verification |
| `design-system/research/R3-DENSITY-DIMENSIONS.md` | needs verification |
| `design-system/research/R4-AXIS-INNOVATIONS.md` | EXISTS ✓ |
| `design-system/research/R5-COMBINATION-THEORY.md` | needs verification |
| `design-system/research/RESEARCH-SYNTHESIS.md` | needs verification |
| `design-system/compositional-core/case-studies/DD-006-fractal.md` | needs verification |
| `ephemeral/va-extraction/artifact-identity-perception.md` | needs verification |
| `ephemeral/va-extraction/artifact-builder-recipe.md` | needs verification |
| `ephemeral/va-extraction/artifact-routing.md` | needs verification |
| `ephemeral/va-extraction/artifact-orchestrator.md` | needs verification |
| `ephemeral/va-extraction/artifact-value-tables.md` | needs verification |
| `ephemeral/va-extraction/artifact-tc-brief-template.md` | needs verification |
| `ephemeral/va-extraction/pa-questions.md` | needs verification |
| `ephemeral/va-extraction/pa-deployment.md` | needs verification |
| `ephemeral/va-extraction/pa-weaver.md` | needs verification |
| `ephemeral/va-extraction/pa-guardrails.md` | needs verification |
| `ephemeral/va-extraction/pa-guardrails-weaver.md` | needs verification |

*Note: Full path verification for all corpus.ts files is out of scope for this AD-specific task. See `corpus-path-validation.md` for complete corpus validation.*

---

## Archive Perceptual Audit Files (NOT primary artifacts)

The `archive/explorations/axis/_perceptual-audit/` directory contains extensive MD audit files for AD-001 through AD-006 (6 per file = ~36 audit reports) plus synthesis/provenance sub-directories. These are perceptual audit outputs, not the exploration HTML files themselves.

| Directory | Contents |
|-----------|----------|
| `archive/explorations/axis/_perceptual-audit/AD-001/` | 6 MD audit files |
| `archive/explorations/axis/_perceptual-audit/AD-002/` | 6 MD audit files |
| `archive/explorations/axis/_perceptual-audit/AD-003/` | 6 MD audit files |
| `archive/explorations/axis/_perceptual-audit/AD-004/` | 6 MD audit files |
| `archive/explorations/axis/_perceptual-audit/AD-005/` | 11 MD audit files (larger audit) |
| `archive/explorations/axis/_perceptual-audit/AD-006/` | 11 MD audit files (larger audit) |
| `archive/explorations/axis/_perceptual-audit/_provenance-assessment/` | 8 MD files |
| `archive/explorations/axis/_perceptual-audit/_remediation-scope/` | 6 MD files |
| `archive/explorations/axis/_perceptual-audit/_remediation-work/` | 4 MD files |
| `archive/explorations/axis/_perceptual-audit/_skill-evolution/` | 5 MD files |
| Loose files (FIX-VERIFICATION-REPORT.md, lock-sheet.md, preflight-report.md) | 3 MD files |

**Estimated total PA audit MD files: ~72**. These likely account for the "~37 files / ~28,000 lines" expectation if the team-lead was counting these support files. However, the primary AD HTML exploration artifacts are exactly 6 files (10,920 lines).

---

## Findings

### 1. Only 6 AD HTML files exist (not 37)

The canonical AD exploration files are 6 HTML documents in `design-system/axis/`. There are no additional AD-numbered HTML files anywhere in the project.

### 2. The "~37 files" expectation likely includes PA audit MDs

The archive/explorations/axis/_perceptual-audit/ directory contains ~72 MD files that document the perceptual auditing of AD-001 through AD-006. If the expectation was "~37 files," it may have been counting:
- 6 HTML files
- 11 supporting MD files in provenance/specification
- Some subset of the ~72 PA audit files

### 3. corpus.ts does NOT reference any AD HTML files

None of AD-001 through AD-006 HTML files are loaded into any corpus subset. The axis dimension is represented only by R4-AXIS-INNOVATIONS.md (the research document), not the actual exploration artifacts.

### 4. No AD files referenced in corpus.ts are missing from disk

R4-AXIS-INNOVATIONS.md (the only axis file in corpus.ts) exists at the expected path with 990 lines.

---

## Recommendation

If the deep-build pipeline should use the AD HTML files as corpus material, they are not currently wired into any corpus subset. The 6 files (10,920 lines total) are available at:

```
design-system/axis/AD-001-z-pattern.html       (1,737 lines)
design-system/axis/AD-002-f-pattern.html       (1,682 lines)
design-system/axis/AD-003-bento-grid.html      (1,896 lines)
design-system/axis/AD-004-spiral.html          (1,483 lines)
design-system/axis/AD-005-choreography.html    (1,846 lines)
design-system/axis/AD-006-compound.html        (2,276 lines)
```
