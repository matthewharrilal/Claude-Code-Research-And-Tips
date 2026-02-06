# 11-DEPRECATION-ASSESSMENT.md
## Deprecated, Superseded, and Stale File Assessment

**Generated:** 2026-02-05
**Scope:** 463 project files across showcase (83), design-extraction (350), design-system (30)

This document classifies files that are deprecated, superseded, or stale. Files are grouped by confidence level.

---

## HIGH CONFIDENCE DEPRECATED

These files are explicitly superseded by newer versions with documented replacement paths.

| File | Size | Deprecation Evidence | Replacement | Status |
|------|------|---------------------|-------------|--------|
| `design-extraction/archive/tokens/effects.css` | 10,449 | Defines `--radius-sm: 2px` through `--radius-full: 9999px` and shadow variables; T1 synthesis BANS all `border-radius > 0` and all `box-shadow`. README.md: "Superseded by typography-system." | `design-extraction/.../synthesis/DESIGN-TOKEN-SUMMARY.md` (T1) for token values; `PRODUCTION-RULES.md` (T1) for enforcement rules | **SUPERSEDED -- DANGEROUS VALUES** |
| `design-extraction/archive/tokens/typography.css` | 11,090 | Defines `--font-display: 'Bebas Neue'`; final system uses `'Instrument Serif'`. Completely wrong typeface. | `design-extraction/typography-system/typography.css` (T1) | **SUPERSEDED -- WRONG VALUES** |
| `design-extraction/archive/tokens/colors.css` | 8,674 | Pre-Instrument-Serif color palette; may contain values not validated by perceptual audit | `design-extraction/.../synthesis/DESIGN-TOKEN-SUMMARY.md` (T1) | **SUPERSEDED** |
| `design-extraction/archive/tokens/spacing.css` | 7,549 | Pre-audit spacing values; not validated by perceptual deepening protocol | `design-extraction/.../tracking/SPACING-TOKENS.md` (T1 tracking) | **SUPERSEDED** |
| `design-extraction/archive/tokens/index.css` | 8,465 | Aggregator for superseded token files | N/A (all constituent files superseded) | **SUPERSEDED** |
| `design-extraction/archive/tokens/test.html` | 16,511 | Test page for superseded token system | N/A | **SUPERSEDED** |
| `design-extraction/component-system/ANTI-PATTERNS.md` | 55,870 | Original anti-pattern documentation (56KB). V8 markers present. Explicitly superseded by the T1 consolidated version. | `design-extraction/.../synthesis/ANTI-PATTERNS-REGISTRY.md` (T1, 19,493 bytes) | **SUPERSEDED** |

**Total HIGH CONFIDENCE DEPRECATED: 7 files (~118KB)**

---

## MEDIUM CONFIDENCE DEPRECATED

These files are in `archive/` directories or have clear successor content, but lack explicit "SUPERSEDED BY" markers in their own content.

| File | Size | Deprecation Evidence | Replacement | Status |
|------|------|---------------------|-------------|--------|
| `design-extraction/component-system/archive/perceptual-audit-phase-2.5/SOUL-DISCOVERIES.md` | 11,223 | Defined 7 soul pieces; perceptual-audit-v2 refined to 5 soul pieces. MASTER-INDEX.md line 141 marks directory as archived. | `design-extraction/.../synthesis/MASTER-SOUL-SYNTHESIS.md` (T1, 5 soul pieces) | **SUPERSEDED** (7 -> 5 soul piece evolution) |
| `design-extraction/component-system/archive/perceptual-audit-phase-2.5/PHASE-1-SYNTHESIS.md` | 5,535 | Initial soul piece candidates; superseded by full audit | `design-extraction/.../synthesis/` (6 T1 files) | **SUPERSEDED** |
| `design-extraction/component-system/archive/perceptual-audit-phase-2.5/AUDIT-SUMMARY.md` | 5,326 | Phase 2.5 audit results; superseded by v2 audit | `design-extraction/.../synthesis/CONSISTENCY-VERIFICATION.md` (T1) | **SUPERSEDED** |
| `design-extraction/component-system/archive/perceptual-audit-phase-2.5/GAP-ANALYSIS.md` | 10,438 | Gap analysis from Phase 2.5; gaps addressed in v2 | perceptual-audit-v2 re-audit files | **SUPERSEDED** |
| `design-extraction/component-system/archive/perceptual-audit-phase-2.5/IMPLEMENTATION-SPEC.md` | 7,696 | Implementation spec from Phase 2.5 | `PRODUCTION-RULES.md` (T1) | **SUPERSEDED** |
| `design-extraction/component-system/archive/perceptual-audit-phase-2.5/INSIGHT-JOURNAL.md` | 7,930 | Working journal from Phase 2.5 | Insights absorbed into T1 synthesis | **SUPERSEDED** |
| `design-extraction/component-system/archive/perceptual-audit-phase-2.5/BLINDSPOT-TRACKER.md` | 6,366 | Blindspot tracking from Phase 2.5 | Addressed in v2 audit components/ sub-agent analyses | **SUPERSEDED** |
| `design-extraction/component-system/archive/perceptual-audit-phase-2.5/CURRENT-SYSTEM-BASELINE.md` | 9,899 | Baseline from Phase 2.5 | Updated baseline in v2 tracking files | **SUPERSEDED** |
| `design-extraction/component-system/archive/research-phase-3/4A-ascii-dither-techniques.md` | 66,903 | Phase 3 research, explicitly archived per MASTER-INDEX.md | component-system/css/ascii-dither.css (implementation) | **ARCHIVED** (research consumed) |
| `design-extraction/component-system/archive/research-phase-3/4B-code-block-anatomy.md` | 50,704 | Phase 3 research, explicitly archived | component-system/css/code-block.css (implementation) | **ARCHIVED** (research consumed) |
| `design-extraction/component-system/archive/research-phase-3/4C-callout-taxonomy.md` | 67,053 | Phase 3 research, explicitly archived | component-system/css/callouts.css (implementation) | **ARCHIVED** (research consumed) |
| `design-extraction/component-system/archive/research-phase-3/4D-editorial-documentation.md` | 24,591 | Phase 3 research, explicitly archived | Component implementations | **ARCHIVED** (research consumed) |
| `design-extraction/component-system/archive/research-phase-3/4E-brutalist-ui-patterns.md` | 24,970 | Phase 3 research, explicitly archived | Soul principles absorbed into T1 | **ARCHIVED** (research consumed) |
| `design-extraction/component-system/archive/research-phase-3/4F-file-tree-designs.md` | 20,586 | Phase 3 research, explicitly archived | component-system/css/file-tree.css | **ARCHIVED** (research consumed) |
| `design-extraction/component-system/archive/research-phase-3/4G-progression-indicators.md` | 25,794 | Phase 3 research, explicitly archived | component-system/css/progression.css | **ARCHIVED** (research consumed) |
| `design-extraction/component-system/archive/research-phase-3/4H-decision-matrix-design.md` | 37,095 | Phase 3 research, explicitly archived | component-system/css/decision-matrix.css | **ARCHIVED** (research consumed) |
| `design-extraction/component-system/archive/research-phase-3/4I-core-abstraction-design.md` | 33,792 | Phase 3 research, explicitly archived | component-system/css/core-abstraction.css | **ARCHIVED** (research consumed) |
| `design-extraction/component-system/archive/validation-sprint/` (18 files) | ~200KB total | Validation experiments (EXPERIMENT-1 through EXPERIMENT-6, decision logs, specs); results consumed by SOUL-DEFINITION.md | component-system/SOUL-DEFINITION.md | **ARCHIVED** (results consumed) |
| `design-extraction/card-system/SOUL-DEFINITION.md` | 10,437 | Original 10 soul principles (card-scope). Expanded into component-system/SOUL-DEFINITION.md (58KB), which was then synthesized into MASTER-SOUL-SYNTHESIS.md (T1). | `MASTER-SOUL-SYNTHESIS.md` (T1) via `component-system/SOUL-DEFINITION.md` | **SUPERSEDED** (10 principles -> 6 universal rules) |

**Total MEDIUM CONFIDENCE DEPRECATED: ~27 files (~700KB)**

Note: All `archive/` files are retained as historical provenance. "SUPERSEDED" means the content has been absorbed into newer files; "ARCHIVED" means the research was consumed during implementation.

---

## STALE BUT NOT DEPRECATED

These files contain correct information but are outdated in specific sections. They remain useful and should be updated rather than deprecated.

| File | Size | Stale Evidence | What Needs Updating | Priority |
|------|------|---------------|--------------------|---------|
| `design-extraction/CLAUDE.md` | 12,027 | Covers Phases 1-3 only; Phase 4 (perceptual-audit-v2, 176 files, 6 T1 synthesis docs) not referenced. Last updated 2026-02-03. | Add Phase 4 section with paths to T1 synthesis files, tracking directory, MASTER-INDEX.md | **HIGH** -- agents miss the most authoritative content |
| `design-extraction/README.md` | 4,885 | Phase progress table lists "Phase 3: Color System" as NEXT. Actual Phase 4 (component-system) is COMPLETE. | Update phase table: Phase 1-3 COMPLETE, Phase 4 COMPLETE | **MEDIUM** -- external readers get wrong status |
| `docs-spa/app/showcase/DESIGN-SYSTEM/README.md` | 109,544 | Contains hypothetical OD examples (OD-F-007/008/009) that are illustrative, not completed work. OD Stage 3 has NOT started. | Add HYPOTHETICAL/ILLUSTRATIVE disclaimer on OD examples section | **LOW** -- mostly self-evident from context, but could confuse automated consumers |

**Total STALE BUT NOT DEPRECATED: 3 files**

---

## JUNK (Should Be Untracked)

These files are generated artifacts that should not be in version control.

| Category | File Count | Total Size | Location | Action |
|----------|-----------|-----------|----------|--------|
| node_modules | 201 | ~5.4MB | 4 directories under design-extraction/ | Add to .gitignore, `git rm -r --cached` |
| playwright-report | 4 | ~1.83MB | 3 directories under design-extraction/ | Add to .gitignore, `git rm -r --cached` |
| **TOTAL** | **205** | **~7.2MB** | | **Requires human confirmation (Q-003)** |

---

## Summary

| Category | File Count | Estimated Size | Action |
|----------|-----------|---------------|--------|
| HIGH CONFIDENCE DEPRECATED | 7 | ~118KB | Keep in archive; add DANGEROUS/SUPERSEDED headers |
| MEDIUM CONFIDENCE DEPRECATED | ~27 | ~700KB | Keep in archive; add supersession markers pointing to replacements |
| STALE BUT NOT DEPRECATED | 3 | ~127KB | Update stale sections (CLAUDE.md highest priority) |
| JUNK (untracked) | 205 | ~7.2MB | Gitignore and untrack (pending human confirmation) |
| **TOTAL FLAGGED** | **~242** | **~8.1MB** | |

### Supersession Chains (for reference)

**Typography Token Chain:**
```
archive/tokens/typography.css (--font-display: 'Bebas Neue')
  SUPERSEDED BY -> typography-system/typography.css (--font-display: 'Instrument Serif')
    CONSOLIDATED INTO -> DESIGN-TOKEN-SUMMARY.md (T1, locked values)
```

**Soul Definition Chain:**
```
card-system/SOUL-DEFINITION.md (10 soul principles, 10KB)
  EXPANDED INTO -> component-system/SOUL-DEFINITION.md (6 universal rules + component rules, 58KB)
    SYNTHESIZED INTO -> MASTER-SOUL-SYNTHESIS.md (T1, complete soul definition, 16KB)
```

**Anti-Pattern Chain:**
```
card-system/research/3B-anti-patterns.md (17KB, research)
  EXPANDED INTO -> component-system/ANTI-PATTERNS.md (56KB, comprehensive)
    CONSOLIDATED INTO -> ANTI-PATTERNS-REGISTRY.md (T1, 19KB, authoritative)
```

**Perceptual Audit Chain:**
```
archive/perceptual-audit-phase-2.5/SOUL-DISCOVERIES.md (7 soul pieces, 11KB)
  SUPERSEDED BY -> perceptual-audit-v2/ (full 11-component audit, 176 files)
    SYNTHESIZED INTO -> 6 T1 Foundation files in synthesis/
```
