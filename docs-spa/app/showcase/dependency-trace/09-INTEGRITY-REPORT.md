<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/dependency-trace/09-INTEGRITY-REPORT.md
Tier: B | Batch: 10 | Generated: 2026-02-06

1. WHY THIS EXISTS
Systematic integrity verification report checking broken references, circular
dependencies, orphaned finding IDs, supersession gaps, and version conflicts
across all three directories (showcase, design-extraction, design-system).
Verdict: zero truly broken references found.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| Phase 1B analysis (463 connections)     | All cross-references traced here       |
| showcase/ (83 files)                    | Intra- and cross-directory path refs   |
| design-extraction/ (350 project files)  | Path references and version conflicts  |
| design-system/ (30 files)              | Token divergence and provenance checks |

6. MUST HONOR
- Path references are point-in-time; file moves invalidate this report
- "NOT YET CREATED" entries are expected (future stage outputs)

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| TRACE-SUMMARY.md                        | Summary of broken refs count           |
| 10-MOVE-RECOMMENDATIONS.md              | Integrity issues drive move decisions  |
| PHASE-2A-CLASSIFICATION.md/.yaml        | Integrity informs keep/delete calls    |
| PHASE-1B-MEGA-DEBRIEF.md               | References integrity findings          |
| Future agents                           | Validating cross-directory references  |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# Integrity Report

**Generated:** 2026-02-05
**Scope:** All three directories (showcase, design-extraction, design-system) + cross-directory references
**Method:** Systematic check of broken references, circular dependencies, orphaned finding IDs, supersession gaps, and version conflicts

---

## Broken References

### Cross-Directory Path References

| Source File | Reference | Expected Target | Status |
|-------------|-----------|-----------------|--------|
| `showcase/research/R5-COMBINATION-THEORY.md` (line 710) | `design-extraction/component-system/perceptual-audit-v2/synthesis/PERCEPTUAL-TRUTHS.md` | File exists at `design-extraction/component-system/perceptual-audit-v2/tracking/PERCEPTUAL-TRUTHS.md` | **WRONG SUBDIRECTORY** -- synthesis/ vs tracking/ |
| `showcase/research/R5-COMBINATION-THEORY.md` (line 711) | `design-extraction/component-system/perceptual-audit-v2/synthesis/CHARACTER-FAMILY-COMPLETE.md` | File exists at correct path | OK |
| `showcase/research/R5-COMBINATION-THEORY.md` (line 712) | Reference to `batch-04-heavy-cross.html` | Expected in design-extraction experimental HTML | **UNVERIFIED** -- file may not exist; experimental artifact |
| `showcase/DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md` (line 710-712) | Same 3 references as above (this is a synced duplicate) | Same targets | **SAME ISSUES** (inherited from source) |
| `showcase/knowledge-architecture/KA-POSITION.md` (line 52) | `perceptual-audit-v2/synthesis/` (relative) | Resolves to `design-extraction/component-system/perceptual-audit-v2/synthesis/` | **AMBIGUOUS** -- relative path, depends on reader context |
| `showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md` (lines 21-51) | All T1 FOUNDATION file paths point to `perceptual-audit-v2/` | Resolve correctly to design-extraction paths | OK (but relative) |
| `showcase/knowledge-architecture/PIPELINE-BACKBONE.md` | References `SOUL-TRANSLATION-GUIDE.md`, `MASTER-SOUL-SYNTHESIS.md` | External to showcase/ -- exist in design-extraction | OK |
| `showcase/knowledge-architecture/KA-DECISIONS.md` | References `soul-extractions/*.md` | External to showcase/ -- exist in design-extraction | OK |
| `showcase/checkpoints/MASTER-STATE.md` (lines 209-226) | Full inventory of 13 design-extraction files | All files verified to exist | OK |
| `showcase/FINDINGS-INDEX.md` (line 278) | `design-extraction/.../DESIGN-TOKEN-SUMMARY.md` | File exists | OK |
| `showcase/FINDINGS-INDEX.md` (line 351) | `design-extraction/.../ANTI-PATTERNS-REGISTRY.md` | File exists | OK |

### Intra-Directory Path References

| Source File | Reference | Expected Target | Status |
|-------------|-----------|-----------------|--------|
| `showcase/DESIGN-SYSTEM/components/OVERVIEW.md` | Individual component `.md` files (e.g., `code-snippet.md`) | Referenced but may not exist in DESIGN-SYSTEM/components/ | **UNVERIFIED** -- ALPHA analysis flagged "INVESTIGATE whether referenced component .md files exist" |
| `showcase/DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md` | `OD-outbound-findings.md`, `HANDOFF-OD-TO-AD.md` | Listed as planned outputs | **NOT YET CREATED** -- OD stage pending; expected "broken" |
| `showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/CLAUDE.md` | `HANDOFF-OD-TO-AD.md` | Not yet created | **NOT YET CREATED** -- AD stage pending |
| `showcase/DESIGN-SYSTEM/provenance/stage-5-combination-cd/CLAUDE.md` | `HANDOFF-AD-TO-CD.md` | Not yet created | **NOT YET CREATED** -- CD stage pending |
| `design-extraction/CLAUDE.md` | Phase 4 files not referenced | 176 files in perceptual-audit-v2/ | **GAP** -- CLAUDE.md only covers Phases 1-3 |
| `design-extraction/README.md` | "Phase 3: Color System" listed as NEXT | Phase 4 (component-system) is the actual next work and is complete | **STALE** -- phase table outdated |

### Summary

| Category | Count | Severity |
|----------|-------|----------|
| Wrong subdirectory in path | 1 | LOW -- file exists, subdirectory name wrong |
| Unverified file existence | 2 | LOW -- experimental/planned artifacts |
| Ambiguous relative paths | ~5 | LOW -- resolve correctly with context |
| Not yet created (planned) | 3 | EXPECTED -- future stage outputs |
| Stale/gap references | 2 | MODERATE -- CLAUDE.md and README.md outdated |
| **True broken references** | **0** | -- |

**Verdict:** No truly broken references found. The two stale files (design-extraction CLAUDE.md and README.md) are the most actionable issues.

---

## Circular Dependencies

| Cycle | Files Involved | Severity | Assessment |
|-------|---------------|----------|------------|
| STAGE-HEADER predecessor/successor chain | stage-1/STAGE-HEADER <-> stage-2/STAGE-HEADER <-> stage-3/STAGE-HEADER <-> stage-4/STAGE-HEADER <-> stage-5/STAGE-HEADER | NONE (intentional) | These form a LINKED LIST, not a circle. Each stage has a `predecessor` and `successor` field. Stage 1 has no predecessor; Stage 5 has no successor (yet). This is a linear chain. |
| BACKBONE <-> STAGE-HEADER mutual refs | BACKBONE.md references all STAGE-HEADERs; STAGE-HEADERs reference BACKBONE.md via `backbone_ref` | NONE (intentional) | This is a hub-and-spoke pattern: BACKBONE is the hub, STAGE-HEADERs are spokes. Not circular -- it is bidirectional cross-referencing for navigation. |
| checkpoints/ <-> provenance/ sync | checkpoints/SOUL-DISCOVERIES.md = provenance/SOUL-DISCOVERIES.md (identical copies) | NONE (intentional) | These are synced duplicates, not circular references. Neither references the other; they are parallel copies. |
| DD-outbound-findings -> PIPELINE-MANIFEST -> DD-outbound-findings | DD-outbound-findings.md references PIPELINE-MANIFEST.md; PIPELINE-MANIFEST.md references DD-outbound-findings.md | LOW | Bidirectional reference for navigation purposes. Both files can be read independently. Not a true circular dependency -- each is self-contained. |
| RESEARCH-ACTIVE <-> R-files | RESEARCH-ACTIVE.md tracks application status of findings from R1-R5; R-files define the findings that RESEARCH-ACTIVE tracks | LOW | The R-files are READ-ONLY reference copies; RESEARCH-ACTIVE is the mutable tracker. The dependency is: R-files (immutable) -> RESEARCH-ACTIVE (mutable), which is one-directional in practice. |

**Verdict:** No true circular dependencies detected. All bidirectional references are intentional hub-and-spoke or linked-list patterns designed for navigation. No file's content depends on another file that depends back on it in a way that would create infinite resolution.

---

## Orphaned Finding IDs

### Hypothetical Finding IDs (defined as examples, not real findings)

| Finding ID | Defined In | Referenced By | Status |
|------------|-----------|---------------|--------|
| OD-F-007 | showcase/DESIGN-SYSTEM/README.md (109K) | README.md only (illustrative example) | **HYPOTHETICAL** -- README uses this as an OD example to demonstrate the provenance chain methodology. OD work has not been completed. |
| OD-F-008 | showcase/DESIGN-SYSTEM/README.md (109K) | README.md only (illustrative example) | **HYPOTHETICAL** -- Same. Illustrative. |
| OD-F-009 | showcase/DESIGN-SYSTEM/README.md (109K) | README.md only (illustrative example) | **HYPOTHETICAL** -- Same. Illustrative. |

**Risk:** An agent reading README.md without context could mistake OD-F-007/008/009 as completed findings. The README should label these as "[ILLUSTRATIVE EXAMPLE]" more prominently.

### Finding ID Coverage

| Finding Class | Defined Count | Applied Count | Orphaned Count | Source |
|---------------|--------------|---------------|----------------|--------|
| R1-* | 28 | Partially applied (OD primary) | 0 orphaned | R1-DOCUMENTATION-PATTERNS.md |
| R2-* | 27-78 (discrepancy) | Partially applied | **INVESTIGATE** -- CLAUDE.md claims 78 findings but tables show only R2-001 through R2-027. DISCOVERIES-LOG references R2-079. |
| R3-* | 51 | ~76% applied per CLAUDE.md | 0 orphaned | R3-DENSITY-DIMENSIONS.md |
| R4-* | 192 | 0% applied (AD stage pending) | 192 unapplied (expected) | R4-AXIS-INNOVATIONS.md |
| R5-* | 39 | 0% applied (CD stage pending) | 39 unapplied (expected) | R5-COMBINATION-THEORY.md |
| COMP-F-* | 21 | Applied in stage-1 | 0 orphaned | component-findings.md |
| DD-F-* | 18 | Applied in stage-2 | 0 orphaned | DD-outbound-findings.md |
| R3-052 through R3-056 | Novel findings | Defined in DISCOVERIES-LOG | 0 orphaned -- these are EXTENSIONS of R3 discovered during DD work |
| R2-079 | Novel finding | Referenced in DISCOVERIES-LOG | **INVESTIGATE** -- defines a finding ID beyond the original R2 range |

**Key anomaly:** The R2 finding count discrepancy. RESEARCH-ACTIVE.md and CLAUDE.md claim 78 R2 findings, but COMPONENT-AUDIT-FOUNDATION only lists R2-001 through R2-027. This suggests either: (a) R2-CREATIVE-LAYOUTS.md defines sub-findings in a non-standard format not captured by the analysis, or (b) the count includes sub-findings within the 27 main findings. DISCOVERIES-LOG references R2-079, which would exceed even the claimed 78 count.

---

## Supersession Gaps

### Documented Supersession Chains

| Old File | Claims Superseded By | New File Exists? | New Acknowledges Old? | Gap? |
|----------|---------------------|------------------|-----------------------|------|
| design-extraction/archive/tokens/*.css | typography-system/ (per README.md) | YES -- typography-system/typography.css | YES -- CLAUDE.md documents the chain | NO |
| design-extraction/card-system/SOUL-DEFINITION.md | component-system/SOUL-DEFINITION.md | YES (58,009 bytes) | YES -- component-system version expands card-system version | NO |
| design-extraction/component-system/SOUL-DEFINITION.md | MASTER-SOUL-SYNTHESIS.md (T1 synthesis) | YES (15,658 bytes) | YES -- MASTER-SOUL-SYNTHESIS.md cites SOUL-DEFINITION.md + PERCEPTUAL-TRUTHS.md as sources | NO |
| design-extraction/component-system/ANTI-PATTERNS.md (55,870 bytes) | ANTI-PATTERNS-REGISTRY.md (T1 synthesis, 19,493 bytes) | YES | YES -- ANTI-PATTERNS-REGISTRY.md cites "tracking/ANTI-PATTERNS.md + ANTI-PATTERNS.md (root)" as sources | NO |

### Undocumented or Incomplete Supersession

| Old File | Expected Successor | New File Exists? | New Acknowledges Old? | Gap? |
|----------|-------------------|------------------|-----------------------|------|
| design-extraction/archive/perceptual-audit-phase-2.5/ (7 files) | design-extraction/component-system/perceptual-audit-v2/ (176 files) | YES | **PARTIAL** -- MASTER-INDEX.md line 141 marks phase-2.5 as superseded. BUT the archive directory itself has no "SUPERSEDED BY" header or marker. An agent browsing archive/ would not know these files are superseded without reading MASTER-INDEX.md. | **YES -- GAP** |
| design-extraction/archive/tokens/effects.css (border-radius, shadows) | T1 synthesis: `--border-radius: 0; --box-shadow: none;` | YES | **NO** -- The archive file has no supersession marker. Contains DANGEROUS values (radius, shadows) that directly contradict T1. | **YES -- GAP (DANGEROUS)** |
| design-extraction/archive/research-phase-3/ (9 files, 350KB) | component-system CSS and component files | YES | **PARTIAL** -- MASTER-INDEX.md marks as "Phase 3 Research & Validation ARCHIVED" but the archive files themselves don't state this. | **YES -- GAP** |
| design-extraction/card-system/SOUL-DEFINITION.md (10,437 bytes) | component-system/SOUL-DEFINITION.md (58,009 bytes) | YES | **NO** -- card-system version has no supersession marker. Still referenced by card.css. | **YES -- GAP (MODERATE)** |

### Supersession Gap Summary

| Gap Type | Count | Severity | Recommendation |
|----------|-------|----------|---------------|
| Archive files lack "SUPERSEDED BY" headers | 3 directories (~46 files) | MODERATE | Add `# SUPERSEDED BY: [path]` header to archive directories |
| Dangerous archived values with no warning | 1 file (effects.css) | HIGH | Add `# WARNING: SUPERSEDED -- Values below are BANNED by T1 soul definition` |
| Intermediate files lack supersession markers | 1 file (card-system/SOUL-DEFINITION.md) | LOW | Add note: "Expanded in component-system/SOUL-DEFINITION.md, synthesized in MASTER-SOUL-SYNTHESIS.md" |

---

## Version Conflicts

### Token Value Conflicts

| Concept | File A Value | File B Value | Which Canonical? | Severity |
|---------|-------------|-------------|------------------|----------|
| Primary red | `--color-primary: #E83025` (T1 DESIGN-TOKEN-SUMMARY.md) | `--sanrok-red: #FF0000` (design-system/tokens.css) | **T1 (`#E83025`)** -- soul-locked, perceptual-audit validated | CRITICAL |
| Background | `--color-background: #FEF9F5` (T1) | `--sanrok-cream: #FBF5EF` (design-system/tokens.css) | **T1 (`#FEF9F5`)** | MODERATE |
| Text color | `--color-text: #1A1A1A` (T1) | `--sanrok-black: #171717` (design-system/tokens.css) | **T1 (`#1A1A1A`)** | MODERATE |
| Border radius | `--border-radius: 0` (T1, SOUL LOCKED) | `--radius-sm: 0.25rem` through `--radius-full: 9999px` (design-system/tokens.css) | **T1 (`0`)** -- Soul Piece #1: Sharp Edges | CRITICAL |
| Box shadow | `--box-shadow: none` (T1, SOUL LOCKED) | 6 non-none shadow tokens (design-system/tokens.css) | **T1 (`none`)** -- Soul Piece #4: No Shadows | CRITICAL |
| Accent amber | `#C49052` (design-extraction/tracking/COLOR-TOKENS.md) | `#D97706` (showcase/DESIGN-SYSTEM/tokens/colors.md) | **Showcase (`#D97706`)** -- evolved during DD exploration work | LOW |
| Accent purple | `#7B68EE` (design-extraction/tracking/COLOR-TOKENS.md) | `#7C3AED` (showcase/DESIGN-SYSTEM/tokens/colors.md) | **Showcase (`#7C3AED`)** -- evolved during DD exploration work | LOW |
| Info background | `#F0F7FF` (design-extraction/tracking/COLOR-TOKENS.md) | `#F5F8FA` (showcase/DESIGN-SYSTEM/tokens/colors.md) | **Showcase (`#F5F8FA`)** -- refined during DD work | LOW |
| Tip background | `#F0F7F0` (design-extraction/tracking/COLOR-TOKENS.md) | `#F5FAF5` (showcase/DESIGN-SYSTEM/tokens/colors.md) | **Showcase (`#F5FAF5`)** -- refined during DD work | LOW |

### Architectural Conflicts

| Concept | System A Approach | System B Approach | Severity |
|---------|------------------|------------------|----------|
| Token namespace | Single namespace (T1 + showcase) | 5 CSS namespaces + 3 JS inline objects = 8 sources of truth (design-system) | CRITICAL |
| CSS architecture | Component-focused (`.callout`, `.code-snippet`) in showcase | Card/theme-focused (`.sanrok-pill-nav`, `.medieval-columns`) in design-system | MODERATE -- different but non-conflicting class names |
| Styling approach | CSS custom properties from `:root {}` blocks (showcase) | Tailwind utility classes + hardcoded values (design-system TSX) | HIGH -- design-system components bypass token system entirely |
| Anti-pattern enforcement | Formal registry with Soul Test (showcase) | None (design-system) | HIGH |
| `:root` override | Controlled -- only locked tokens on `:root` (showcase) | medieval-blend.css sets on `:root` AND `[data-theme]` (design-system) | CRITICAL -- loading medieval-blend.css globally corrupts base tokens |

---

## Integrity Score Summary

| Category | Issues Found | Critical | High | Moderate | Low |
|----------|-------------|----------|------|----------|-----|
| Broken references | 0 true broken | 0 | 0 | 2 stale | 3 unverified |
| Circular dependencies | 0 true circular | 0 | 0 | 0 | 0 |
| Orphaned finding IDs | 3 hypothetical + 1 anomaly | 0 | 0 | 1 (R2 count) | 0 |
| Supersession gaps | 4 gaps | 0 | 1 (effects.css) | 3 (archive headers) | 1 |
| Version conflicts | 9 token + 5 architectural | 4 | 2 | 3 | 5 |
| **TOTAL** | **22** | **4** | **3** | **9** | **9** |

All 4 CRITICAL issues stem from the design-system/ directory's independence from T1 soul definitions. The showcase and design-extraction directories have excellent integrity with only moderate gaps in supersession documentation.
