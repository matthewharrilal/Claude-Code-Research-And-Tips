# Move Recommendations

**Generated:** 2026-02-05
**Scope:** All three directories (showcase, design-extraction, design-system)
**Principle:** Minimize moves. These directories are well-organized. Most recommendations are hygiene fixes, not structural reorganizations.

---

## HIGH CONFIDENCE MOVES

These are non-controversial changes that reduce noise and prevent agent confusion.

### 1. Add to .gitignore (design-extraction)

| Current Location | Action | Reason | Dependencies Broken |
|-----------------|--------|--------|---------------------|
| `design-extraction/archive/variations/tests/node_modules/` (23 files) | Add `**/node_modules/` to `.gitignore` | Package manager artifacts, 5.4 MB bloat across 4 installations | None -- no project file references these |
| `design-extraction/card-system/tests/node_modules/` (23 files) | Same | Same | None |
| `design-extraction/component-system/tests/node_modules/` (137 files) | Same | Same | None |
| `design-extraction/typography-system/node_modules/` (23 files) | Same | Same | None |
| `design-extraction/archive/variations/tests/playwright-report/` | Add `**/playwright-report/` to `.gitignore` | Generated test output, 1.83 MB across 3 installations | None |
| `design-extraction/component-system/tests/playwright-report/` | Same | Same | None |
| `design-extraction/typography-system/playwright-report/` | Same | Same | None |

**Total impact:** Removes 205 junk files (~7.23 MB) from tracking. File count drops from 555 to 350 actual project files.

**Implementation:**
```
# Add to design-extraction/.gitignore (create if not exists):
**/node_modules/
**/playwright-report/
```

### 2. Add SUPERSEDED Header to Archive (design-extraction)

| File/Directory | Action | Reason | Dependencies Broken |
|---------------|--------|--------|---------------------|
| `design-extraction/component-system/archive/perceptual-audit-phase-2.5/` | Add `# SUPERSEDED BY: ../perceptual-audit-v2/` header to directory README or SOUL-DISCOVERIES.md | Agents browsing archive/ cannot tell these files are superseded without reading MASTER-INDEX.md elsewhere | None -- adds information, does not move files |
| `design-extraction/archive/tokens/effects.css` | Add CSS comment at line 1: `/* WARNING: SUPERSEDED -- Values below are BANNED by T1 soul definition. border-radius MUST be 0, box-shadow MUST be none. See perceptual-audit-v2/synthesis/PRODUCTION-RULES.md */` | This file contains `--radius-sm: 2px` through `--radius-full: 9999px` and shadow tokens. An agent reading this without context would produce anti-pattern CSS. | None -- adds warning, does not move file |
| `design-extraction/component-system/archive/research-phase-3/` | Add `# ARCHIVED: Phase 3 Research -- superseded by component-system/css/ and components/ implementations` header | Similar discoverability issue as phase-2.5 | None |

**Severity justification:** The effects.css issue is HIGH because its values are the exact OPPOSITE of the soul definition. An unwitting agent using these tokens would violate every soul principle simultaneously.

---

## MEDIUM CONFIDENCE MOVES

These improve navigation and completeness but are not strictly necessary.

### 3. Update design-extraction/CLAUDE.md for Phase 4 Coverage

| File | Action | Reason | Dependencies Broken |
|------|--------|--------|---------------------|
| `design-extraction/CLAUDE.md` | Add Phase 4 section covering `component-system/perceptual-audit-v2/` (176 files, 6 T1 synthesis files) | CLAUDE.md only covers Phases 1-3. Agents entering via CLAUDE.md miss the most authoritative content -- the 6 T1 foundation files. This is the BETA analysis's Anomaly #2. | None -- adds information |

**Suggested addition (append to existing CLAUDE.md):**
```markdown
## Phase 4: Perceptual Audit v2 (2026-02-04, COMPLETE)

**Location:** `component-system/perceptual-audit-v2/`
**Files:** 176 (largest subdirectory)

### T1 Foundation Files (start here)
All in `component-system/perceptual-audit-v2/synthesis/`:
- MASTER-SOUL-SYNTHESIS.md -- Master soul definition ("The Unhurried Editor")
- DESIGN-TOKEN-SUMMARY.md -- Complete locked CSS variables
- CHARACTER-FAMILY-COMPLETE.md -- All 11 named characters
- PRODUCTION-RULES.md -- 6 Universal Rules with enforcement
- ANTI-PATTERNS-REGISTRY.md -- Banned properties and "The Soul Test"
- CONSISTENCY-VERIFICATION.md -- 10-point universal checklist

### Key Paths
- synthesis/ -- 6 T1 foundation files (START HERE)
- tracking/ -- 7 T1 supporting data files
- foundation/ -- 2 philosophical foundation files
- components/ -- 102 per-component analysis files
- re-audit/ -- 11 structural re-audit files
- soul-extractions/ -- 11 compact summaries
```

### 4. Update design-extraction/README.md Phase Table

| File | Action | Reason | Dependencies Broken |
|------|--------|--------|---------------------|
| `design-extraction/README.md` | Update phase table: change "Phase 3: Color System" NEXT status to reflect that Phase 4 (Component System) is COMPLETE | README predates component-system work. External readers see a stale progress table. | None |

### 5. Add CLAUDE.md to design-system/

| File | Action | Reason | Dependencies Broken |
|------|--------|--------|---------------------|
| `design-system/CLAUDE.md` (NEW FILE) | Create navigation file documenting: (a) directory structure, (b) relationship to design-extraction (independent, earlier effort), (c) known soul compliance gaps, (d) token divergences from T1 | GAMMA analysis Critical Gap #1: "No CLAUDE.md -- no local instructions for agents working in this directory." Without navigation, agents may use design-system tokens believing they are soul-compliant. | None -- new file |

**Suggested content outline:**
```markdown
# design-system/ CLAUDE.md

## Status: INDEPENDENT SYSTEM (Not Soul-Aligned)

This directory is an independent design system extraction predating the
perceptual-audit-v2 soul definition work. Token values here DIFFER from
the T1 foundation.

## Critical Divergences
- --sanrok-red: #FF0000 here vs --color-primary: #E83025 in T1
- border-radius tokens are NON-ZERO here; T1 locks border-radius: 0
- box-shadow tokens exist here; T1 locks box-shadow: none

## If you need soul-compliant tokens
Use: design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md

## Directory Structure
[... list files ...]
```

---

## LOW CONFIDENCE / NO MOVES RECOMMENDED

### Directories That Should NOT Be Moved

| Directory | Current Organization | Assessment |
|-----------|---------------------|------------|
| `showcase/` (83 files) | 8 groups: explorations, research, checkpoints, knowledge-architecture, DESIGN-SYSTEM, FINDINGS-INDEX, CLAUDE.md | **EXCELLENT** -- 0 orphans, 15 intentional duplicates documented, clear CLAUDE.md at every level |
| `showcase/DESIGN-SYSTEM/` (42 files) | provenance chain with stage-1 through stage-5, patterns, tokens, anti-patterns, components, guides | **EXCELLENT** -- YAML-like metadata, comprehensive provenance tracking |
| `design-extraction/component-system/perceptual-audit-v2/` (176 files) | synthesis (6 T1), tracking (7), foundation (2), components (102), re-audit (11), soul-extractions (11), process (8), pages (6), coexistence (9), delta-pairs (7) | **EXCELLENT** -- deep research provenance, clear hierarchy |
| `design-extraction/font-research/` (20 files) | specimens/, comparisons/, top-level research + FINAL-DECISION | **GOOD** -- complete, self-contained research |
| `design-extraction/card-system/` (35 files) | research/, css/, experiments/, root files | **GOOD** -- well-organized phase |

### Files That Should NOT Be Merged

| Files | Reason to Keep Separate |
|-------|------------------------|
| checkpoints/RESEARCH-ACTIVE.md + provenance/RESEARCH-ACTIVE.md | Documented operational/archival sync protocol |
| All 15 intentional duplicates in showcase/ | Each pair serves different role (operational vs archival) |
| design-extraction SOUL-DEFINITION.md (58K) + MASTER-SOUL-SYNTHESIS.md (16K) | Different granularity -- SOUL-DEFINITION is exhaustive, MASTER-SOUL-SYNTHESIS is authoritative distillation |
| design-extraction ANTI-PATTERNS.md (56K) + ANTI-PATTERNS-REGISTRY.md (19K) | Same pattern -- exhaustive vs authoritative |

---

## REORGANIZATION PATTERNS

Patterns observed that could improve future work, without requiring file moves.

| Pattern | Files Affected | Proposed Action | Rationale |
|---------|---------------|-----------------|-----------|
| Archive supersession visibility | design-extraction/component-system/archive/perceptual-audit-phase-2.5/ (~7 files) | Add "SUPERSEDED BY v2" header to the directory's primary file | Agents entering archive/ cannot discover supersession status without reading an external file (MASTER-INDEX.md) |
| CLAUDE.md Phase coverage gap | design-extraction/CLAUDE.md (1 file) | Add Phase 4 section (see Recommendation #3 above) | The most authoritative 176 files are not navigable from the entry point |
| design-system navigation absence | design-system/ (30 files) | Create CLAUDE.md (see Recommendation #5 above) | Zero agent guidance in a directory with known soul compliance issues |
| Info callout structural inconsistency | design-extraction/.../components/info-callout/ | Move zone analysis files into sub-agent-analyses/ to match the structure of the other 6 fully-analyzed components | BETA Anomaly #7: info-callout has zone analysis files at root instead of in sub-agent-analyses/ like other components |
| R2 finding count discrepancy | research/R2-CREATIVE-LAYOUTS.md + COMPONENT-AUDIT-FOUNDATION.md + DISCOVERIES-LOG.md | Investigate: CLAUDE.md claims 78 findings but tables show 27. DISCOVERIES-LOG references R2-079 (beyond 78). Document the actual count. | ALPHA Key Observation #5 and Integrity Report anomaly |
| README.md hypothetical OD examples | showcase/DESIGN-SYSTEM/README.md (109K) | Add prominent "[ILLUSTRATIVE EXAMPLE -- NOT COMPLETED WORK]" labels to OD-F-007, OD-F-008, OD-F-009 sections | Agents could mistake hypothetical findings for real ones |
| medieval-blend.css :root override | design-system/src/styles/themes/medieval-blend.css | Remove `:root` selector, keep only `[data-theme="medieval-blend"]` | Loading this file globally corrupts base tokens. GAMMA flagged as dangerous. |

---

## Priority Matrix

| Priority | Recommendation | Effort | Impact |
|----------|---------------|--------|--------|
| P0 | .gitignore for node_modules + playwright-report | 2 min | Removes 205 junk files, 7.23 MB |
| P0 | SUPERSEDED warning on archive/tokens/effects.css | 2 min | Prevents dangerous anti-pattern CSS generation |
| P1 | Add Phase 4 section to design-extraction/CLAUDE.md | 15 min | Makes T1 foundation discoverable from entry point |
| P1 | Create design-system/CLAUDE.md | 15 min | Prevents soul-violating work from design-system tokens |
| P1 | Add SUPERSEDED headers to archive directories | 10 min | Improves archive discoverability |
| P2 | Update design-extraction/README.md phase table | 5 min | Accuracy for external readers |
| P2 | Investigate R2 finding count discrepancy | 30 min | Resolves known anomaly |
| P2 | Label README.md OD examples as illustrative | 5 min | Prevents finding ID confusion |
| P3 | Fix info-callout structural inconsistency | 10 min | Consistency with other components |
| P3 | Fix medieval-blend.css :root override | 5 min | Prevents global token corruption |

---

## Non-Recommendations (Explicitly Rejected)

| Rejected Action | Why Rejected |
|----------------|--------------|
| Merge design-system/ into showcase/ | Different systems with different purposes. design-system is a production component library; showcase is a research-driven design system. Merging would conflate two different extraction approaches. |
| Delete design-extraction archive/ | Historical provenance is valuable. The archive documents the journey from Bebas Neue to Instrument Serif, from 10 soul principles to 6 universal rules. |
| Flatten showcase/DESIGN-SYSTEM/provenance/ hierarchy | The 5-stage provenance chain (stage-1 through stage-5) is the core architectural innovation of the showcase. Flattening it would destroy the pipeline narrative. |
| Move T1 synthesis files from design-extraction to showcase | The T1 files belong where they were created. Showcase already documents the dependency via 13+ edges. Moving them would break the provenance chain principle. |
| Consolidate the 15 intentional duplicates in showcase | The operational/archival sync protocol is well-documented and serves pipeline integrity. |
