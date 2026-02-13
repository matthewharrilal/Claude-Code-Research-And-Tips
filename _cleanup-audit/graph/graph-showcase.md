# GRAPH SCAN: docs-spa/app/showcase/
**Agent:** graph-scanner-showcase
**Date:** 2026-02-13
**Files Scanned:** ~1,170 total (319 knowledge-architecture .md, 100 explorations .md, 24 .html explorations, 58 DESIGN-SYSTEM .md, 20 checkpoints, 36 POST-CD-PIPELINE, 20 dependency-trace, 7 research, others in underscore dirs)
**Method:** Strategic sampling — read all .md headers in key zones, sample .html files, map provenance chains

---

## EXECUTIVE SUMMARY

The showcase/ tree is a **highly structured knowledge graph** with clear hub documents, strong provenance threading, and well-documented underscore archives. The system has **3 synthesis layers** (T1 foundation → stage explorations → execution specs) with formal handoff documents connecting each phase.

**Key Discovery:** The underscore directories are NOT junk — they are **absorbed working artifacts** with synthesis documents that consumed their content. Every major phase (OD audit, comprehensive audit, CD research, migration research, workflow metacognition, AD execution, provenance remediation) has a pattern:
1. Underscore directory with 5-30 agent output files
2. 1-3 synthesis documents at parent level that absorbed the findings
3. Threading headers linking the synthesis to the archive

**Orphan Risk: LOW.** Most files are either referenced in synthesis documents or exist as archival evidence of multi-agent team processes.

**Hub Documents:** 12 load-bearing files with 8+ inbound references each.

---

## 1. TIER 1: HUB DOCUMENTS (Load-Bearing, Many Inbound Refs)

These are the most-referenced files across the showcase/ tree:

| File | Tier | Role | Est. Inbound Refs | Notes |
|------|------|------|-------------------|-------|
| `research/RESEARCH-SYNTHESIS.md` | A | Cross-research synthesis (337 findings) | 30+ | THE synthesis of R1-R5, mandatory pre-read |
| `research/R3-DENSITY-DIMENSIONS.md` | B | DD research source (51 findings) | 25+ | Fed DD-F-006 (fractal), ~76% applied |
| `research/R1-DOCUMENTATION-PATTERNS.md` | B | OD research source (28 findings) | 20+ | THE BIG ONE for OD |
| `research/R4-AXIS-INNOVATIONS.md` | B | AD research source (192 findings) | 15+ | Largest research file by count |
| `research/R5-COMBINATION-THEORY.md` | B | CD research source (39 findings) | 12+ | Primary CD input |
| `knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md` | -- | 17-agent audit synthesis (89 findings) | 18+ | Soul: 0/3,479 violations |
| `knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md` | A | Authority declarations (4-tier hierarchy) | 15+ | Tiebreaker for conflicts |
| `knowledge-architecture/WORKFLOW-METACOGNITION-ANALYSIS.md` | -- | 9-agent workflow analysis (4,200+ lines) | 10+ | Meta-to-output ratio 2.6:1 |
| `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` | -- | Complete inherited mind (AD synthesis) | 12+ | SUPERSEDES v1 and v1.1 |
| `FINDINGS-INDEX.md` | A | Master index of all findings | 10+ | R-X, DD-F, OD-F, AD-F, CD-F catalog |
| `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md` | A | Pipeline master narrative | 15+ | Research → T1 → DD → OD → AD → CD |
| `POST-CD-PIPELINE/README.md` | -- | Post-CD strategic planning overview | 8+ | Track 1 + Track 2 migration |

**Pattern:** Hub documents are either:
- Research synthesis files (R1-R5, RESEARCH-SYNTHESIS)
- Multi-agent audit results (OD-GRANULAR-AUDIT, COMPREHENSIVE-AUDIT)
- Authority/registry documents (SOURCE-OF-TRUTH-REGISTRY, FINDINGS-INDEX, PIPELINE-MANIFEST)
- Phase handoff documents (ACCUMULATED-IDENTITY-v2, README.md)

---

## 2. TIER 2: SYNTHESIS DOCUMENTS (Absorbed Underscore Archives)

These files absorbed content from underscore directories. They are NOT orphans — they are the **consolidated output** of multi-agent teams:

| Synthesis File | Absorbed From | Archive Size | Status |
|----------------|---------------|--------------|--------|
| `knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md` | `_od-audit-scratchpad/` (22 files) | 7,867 lines | 17-agent audit |
| `knowledge-architecture/_comprehensive-audit/MASTER-AUDIT-REPORT.md` | 4 captain reports + 16 worker files | 58 findings | 4-pillar audit |
| `knowledge-architecture/_comprehensive-audit/WEAVER-SYNTHESIS.md` | Same | 15 cross-refs | Cross-pillar |
| `knowledge-architecture/WORKFLOW-METACOGNITION-ANALYSIS.md` | `_workflow-metacognition/` (9 files) | 4,240 lines | 9-agent analysis |
| `POST-CD-PIPELINE/README.md` | `_cd-research/` (9 files) + `_migration-research/` (10 files) + `_pipeline-evolution-research/` (5 files) + `_component-taxonomy-research/` (2 files) | ~13,200 lines | 26-file synthesis |
| `knowledge-architecture/_ad-skeleton-analysis/master-synthesis/master-synthesis.md` | `gap-analysis/` + `skeleton-dimensions/` subdirs | -- | AD deep gap analysis |
| `knowledge-architecture/_provenance-gap-analysis/REMEDIATION-PLAN.md` | 5 analysis files | -- | Provenance remediation |

**Pattern:** Large underscore directories (>10 files) have synthesis documents. Small ones (<5 files) may be archives without synthesis.

---

## 3. UNDERSCORE DIRECTORY INVENTORY

All underscore directories in showcase/, classified by absorption status:

### 3.1 knowledge-architecture/ Underscore Dirs

| Directory | Files | Purpose | Absorbed By | Verdict |
|-----------|-------|---------|-------------|---------|
| `_od-audit-scratchpad/` | 29 .md | 17-agent OD audit outputs | OD-GRANULAR-AUDIT-RESULTS.md | KEEP ARCHIVE |
| `_comprehensive-audit/` | ~40 files (visual/, structural/, provenance/, triage/, fixes/, fresh-eyes/, screenshots/) | 4-pillar comprehensive audit | MASTER-AUDIT-REPORT.md + WEAVER-SYNTHESIS.md | KEEP ARCHIVE |
| `_workflow-metacognition/` | 9 .md | 9-agent workflow analysis | WORKFLOW-METACOGNITION-ANALYSIS.md | KEEP ARCHIVE |
| `_ad-execution/` | ~15 .md | AD builders + convention audit | Unknown — needs check | VERIFY |
| `_ad-skeleton-analysis/` | 3 subdirs (gap-analysis/, skeleton-dimensions/, master-synthesis/) | AD deep gap analysis | master-synthesis.md (internal) | KEEP ARCHIVE |
| `_cd-research/` | 9 .md | CD scoping research | POST-CD-PIPELINE/README.md | KEEP ARCHIVE |
| `_migration-research/` | 10 .md | Migration research | POST-CD-PIPELINE/README.md | KEEP ARCHIVE |
| `_execution-journal/` | Unknown count | Execution tracking | Unknown | VERIFY |
| `_od-reenrichment/` | Unknown count | OD re-enrichment artifacts | Unknown | VERIFY |
| `_provenance-deep-dive/` | 9 .md | Provenance analysis | Unknown | VERIFY |
| `_provenance-gap-analysis/` | ~5 .md | Provenance remediation | REMEDIATION-PLAN.md | KEEP ARCHIVE |
| `_remediation/` | Unknown count | Remediation artifacts | Unknown | VERIFY |

**Total:** 12 underscore directories in knowledge-architecture/

### 3.2 explorations/ Underscore Dirs

| Directory | Files | Purpose | Absorbed By | Verdict |
|-----------|-------|---------|-------------|---------|
| `explorations/density/_perceptual-audit/` | Unknown | DD perceptual audit outputs | checkpoints/RETROACTIVE-AUDIT-DD-001-006.md | KEEP ARCHIVE |
| `explorations/organizational/_perceptual-audit/` | Unknown | OD perceptual audit outputs | Unknown | VERIFY |
| `explorations/axis/_perceptual-research/` | Unknown | Axis perceptual research | Unknown | VERIFY |
| `explorations/axis/_perceptual-research/_plan-audit/` | Unknown | Plan audit artifacts | Unknown | VERIFY |

**Total:** 4 underscore directories in explorations/

### 3.3 POST-CD-PIPELINE/ Underscore Dirs

| Directory | Files | Purpose | Absorbed By | Verdict |
|-----------|-------|---------|-------------|---------|
| `POST-CD-PIPELINE/_tension-analysis/` | ~5 .md + screenshots/ | Tension-composition pipeline test | POST-CD-PIPELINE/README.md | KEEP ARCHIVE |
| `POST-CD-PIPELINE/_pipeline-evolution-research/` | 5 .md | Pipeline evolution synthesis | POST-CD-PIPELINE/README.md | KEEP ARCHIVE |
| `POST-CD-PIPELINE/_component-taxonomy-research/` | 2 .md | Component extraction research | POST-CD-PIPELINE/README.md | KEEP ARCHIVE |

**Total:** 3 underscore directories in POST-CD-PIPELINE/

**GRAND TOTAL:** 19 underscore directories across showcase/

---

## 4. PROVENANCE CHAINS

The showcase/ tree has **formal provenance threading** via 3 systems:

### 4.1 Inline Threading Headers (Phase 2B)

- **Coverage:** ~490 files across showcase/ + DESIGN-SYSTEM/
- **Format:** `<!-- INLINE THREADING HEADER — Phase 2B | Tier: X | Batch: Y | BUILT ON | CONSUMED BY -->`
- **Tiers:** A (synthesis), B (working), C (navigation/operational)
- **Status:** COMPLETE (Phase 2B committed: f13a5c3, 9daa70c, 1886040, 281755a, 72db76d)

### 4.2 Light Sections (Phase 2D)

- **Coverage:** 244 files (HTML, CSS, config files without formal headers)
- **Format:** `/* SUPERSEDED BY [...] */` or `<!-- SUPERSEDED BY [...] -->`
- **Status:** COMPLETE (Phase 2D committed: e489549)

### 4.3 Stage Provenance Directories

- `DESIGN-SYSTEM/provenance/original-research/` — R1-R5 copies
- `DESIGN-SYSTEM/provenance/stage-1-components/` — COMP-* provenance
- `DESIGN-SYSTEM/provenance/stage-2-density-dd/` — DD-* provenance
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/` — OD-* provenance
- `DESIGN-SYSTEM/provenance/stage-4-axis-ad/` — AD-* provenance
- `DESIGN-SYSTEM/provenance/stage-5-combination-cd/` — CD-* provenance (placeholder)

**Handoff Documents:**
- `stage-4-axis-ad/HANDOFF-AD-TO-CD.md` — AD terminal outputs feeding CD
- `stage-3-organization-od/HANDOFF-OD-TO-AD.md` — OD terminal outputs feeding AD (MISSING — mentioned in MEMORY.md but file not found)

---

## 5. EXPLORATION LAYERS

### 5.1 Density Explorations (DD)

- **Location:** `explorations/density/`
- **Files:** DD-001 through DD-006 (6 .html + 1 CLAUDE.md)
- **Archive:** `_perceptual-audit/` subdirectory
- **Synthesis:** `checkpoints/RETROACTIVE-AUDIT-DD-001-006.md` (Tier A)
- **Research Source:** R3-DENSITY-DIMENSIONS.md (51 findings)
- **Key Finding:** DD-F-006 (fractal) from R3-023, most-referenced artifact
- **Status:** COMPLETE, ~76% of R3 findings applied

### 5.2 Organizational Explorations (OD)

- **Location:** `explorations/organizational/`
- **Files:** OD-001 through OD-006 (6 .html + 1 .md + 1 CLAUDE.md)
- **Archive:** `_perceptual-audit/` subdirectory
- **Synthesis:** `knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md`
- **Research Source:** R1-DOCUMENTATION-PATTERNS.md (28 findings)
- **Key Finding:** 89 total findings, 0 soul violations across 3,479 elements
- **Audit:** 17-agent adversarial audit (visual + programmatic)
- **Status:** COMPLETE, fixes applied (commit f5357a7)

### 5.3 Axis Explorations (AD)

- **Location:** `explorations/axis/`
- **Files:** Only CLAUDE.md visible at maxdepth 1 (AD-* files likely in subdirs)
- **Archive:** `_perceptual-research/` + `_perceptual-research/_plan-audit/`
- **Synthesis:** `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md`
- **Research Source:** R4-AXIS-INNOVATIONS.md (192 findings)
- **Key Output:** 28 AD-F findings, AD-CONVENTION-SPEC.md
- **Status:** COMPLETE (per MEMORY.md)

### 5.4 Combination Explorations (CD)

- **Location:** `explorations/combination/`
- **Files:** CD-001 through CD-006 (6 .html + metadata + lock-sheet + convention docs)
- **Archive:** `research-packages/` subdirectory (6 research packages)
- **Synthesis:** `POST-CD-PIPELINE/README.md` + 12 other POST-CD files
- **Research Source:** R5-COMBINATION-THEORY.md (39 findings)
- **Key Output:** 25 CD-F findings, convention spec, CD audit (9-agent team)
- **Status:** COMPLETE (commits 95b3cdb + 42fd987)

**Pattern:** Each exploration phase has:
1. 6 HTML files (001-006)
2. CLAUDE.md navigation file
3. Underscore archive with working artifacts
4. Synthesis document(s) at parent level
5. Research source (R1-R5)
6. Formal audit with agent team

---

## 6. CHECKPOINTS DIRECTORY

**Purpose:** Tracking files for research application, component registry, section progress, audit logs

| File | Purpose | Inbound Refs |
|------|---------|--------------|
| `MASTER-STATE.md` | Current pipeline position | 10+ |
| `RESEARCH-ACTIVE.md` | Research application tracking (337 findings) | 15+ |
| `DISCOVERIES-LOG.md` | Learnings from explorations | 12+ |
| `RETROACTIVE-AUDIT-DD-001-006.md` | DD perceptual audit synthesis (Tier A) | 8+ |
| `COMPONENT-AUDIT-COMP-001-011.md` | Component audit (11 components) | 5+ |
| `COMPONENTS-REGISTRY.md` | Component definitions catalog | 8+ |
| `SECTIONS-PROGRESS.md` | Section build progress (Phase 3) | 3+ |
| Others | Various audit/tracking files | <5 each |

**Total:** 20 files

---

## 7. DEPENDENCY-TRACE DIRECTORY

**Purpose:** Phase 2A classification + threading data from dependency analysis

| File | Purpose |
|------|---------|
| `01-reachability-report.md` | T1 reachability analysis (76% connected) |
| `02-threading-data/*.md` | Batch threading data (design-system, showcase) |
| `03-relationship-map.md` | Cross-file relationship mapping |
| `06-threading-summary.md` | Threading summary |
| `07-QUESTIONS-FOR-HUMAN.md` | Open questions from analysis |
| `09-INTEGRITY-REPORT.md` | Integrity verification |
| `10-MOVE-RECOMMENDATIONS.md` | File move recommendations |
| `11-DEPRECATION-ASSESSMENT.md` | Deprecation candidates |
| `DD-TYPOGRAPHY-VISUAL-AUDIT.md` | DD typography audit |
| `CLAUDE.md` | Navigation file |

**Total:** ~20 files (10 top-level + subdirs)

**Key Insight:** This directory contains the EVIDENCE for the Phase 1B Mega Debrief (463 files, 76% T1 reachable).

---

## 8. POST-CD-PIPELINE DIRECTORY

**Purpose:** Strategic planning for CD execution + post-CD migration phases + Track 2 compositional pipeline

**Key Files:**
- `README.md` (~550 lines) — Comprehensive overview
- `01-CD-EVOLVED-VISION.md` (~1,000 lines) — CD purpose, 8 recommendations, completeness gate
- `02-POST-CD-PHASES.md` (~520 lines) — 5 missing phases, abstraction cliff
- `03-MIGRATION-PIPELINE.md` (~660 lines) — 6-phase per-page pipeline
- `04-CONTENT-INGESTION.md` (~310 lines) — Migration vs. ingestion
- `05-COMPLETE-ROADMAP.md` (~480 lines) — Full timeline
- `06-KEY-INSIGHTS.md` (~245 lines) — Language analogy, sameness impossibility
- `07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md` (~1,142 lines) — Tension-composition skill integration
- `08-COMPOSITIONAL-STRATEGY-LIBRARY.md` (~1,747 lines) — Component inventory, Tier 2.5 catalog
- `09-EXTRACTION-VALIDATION-PROTOCOL.md` (~984 lines) — Phase D validation
- `OPEN-QUESTIONS.md` (~1,184 lines) — 23 open questions across 7 categories
- `_SOURCE-BRIEF.md` (~380 lines) — Raw source material reference

**Total:** ~9,200 lines across 13+ files

**Absorbed Archives:**
- `_cd-research/` (9 files, ~3,500 lines)
- `_migration-research/` (10 files, ~5,800 lines)
- `_pipeline-evolution-research/` (5 files, ~2,800 lines)
- `_component-taxonomy-research/` (2 files, ~1,100 lines)
- `_tension-analysis/` (~5 files + screenshots)

**Key Insight:** This is the STRATEGIC LAYER — not execution specs yet, but the thinking that will inform them.

---

## 9. DESIGN-SYSTEM DIRECTORY

**Structure:**
- `tokens/` — Locked CSS values (typography, colors, spacing, soul)
- `patterns/` — Validated density patterns
- `anti-patterns/` — Registry of what to avoid
- `provenance/` — 6 stage directories + master docs (PIPELINE-MANIFEST, EXT-RESEARCH-REGISTRY, etc.)

**Total Files:** 58 .md files

**Key Documents:**
- `provenance/PIPELINE-MANIFEST.md` — Master pipeline narrative (hub document)
- `provenance/EXT-RESEARCH-REGISTRY.md` — 94 unique EXT-* findings catalog
- `provenance/RESEARCH-ACTIVE.md` — Research application tracking
- `provenance/SOUL-DISCOVERIES.md` — Soul evolution record

**Status:** This is the PUBLIC-FACING design system. Everything in showcase/research/ and showcase/explorations/ feeds this.

---

## 10. ORPHAN CANDIDATES (Need Verification)

Based on the scan, these files/directories are LEAST likely to have clear inbound references:

### 10.1 Underscore Dirs Needing Verification

1. `knowledge-architecture/_ad-execution/` — 15 files, unclear if absorbed
2. `knowledge-architecture/_execution-journal/` — Unknown count, purpose unclear
3. `knowledge-architecture/_od-reenrichment/` — Unknown count, possibly superseded
4. `knowledge-architecture/_remediation/` — Unknown count, possibly absorbed
5. `explorations/organizational/_perceptual-audit/` — Unknown synthesis
6. `explorations/axis/_perceptual-research/` — Unknown synthesis
7. `explorations/axis/_perceptual-research/_plan-audit/` — Unknown synthesis

### 10.2 Top-Level Files Needing Verification

1. `checkpoints/OD-CHECKPOINT.md` — NO inline threading header (only one without)
2. Files in knowledge-architecture/ without clear consumers (need full CONSUMED BY scan)

### 10.3 Provenance Gaps

1. `HANDOFF-OD-TO-AD.md` — Mentioned in MEMORY.md ("read HANDOFF-OD-TO-AD.md first") but NOT FOUND in scan
2. Some stage handoff documents may be missing

**Note:** Most of these will likely have references — they just need deeper scanning to confirm.

---

## 11. CROSS-REFERENCE PATTERNS

### 11.1 Research → Exploration → Synthesis Flow

```
R1-R5 (337 findings)
  ↓
DD-001-006 (R3 → DD)
OD-001-006 (R1 → OD)
AD-001-006 (R4 → AD, inferred from pattern)
CD-001-006 (R5 → CD)
  ↓
Multi-agent audits (DD retroactive, OD granular, CD audit, comprehensive)
  ↓
ACCUMULATED-IDENTITY-v2.md (synthesis of all)
  ↓
POST-CD-PIPELINE/ (strategic planning)
  ↓
Future migration execution
```

### 11.2 Provenance Threading Flow

```
Phase 2A: Classification (dependency-trace/)
  ↓
Phase 2B: Inline threading headers (490 files)
  ↓
Phase 2C: (Not mentioned — possibly skipped)
  ↓
Phase 2D: Light sections (244 files)
  ↓
Phase 2E+: (Unknown — possibly future)
```

### 11.3 Agent Team Artifact Flow

```
Agent team spawned (6-17 agents)
  ↓
Each agent writes output file to _underscore/
  ↓
Synthesis agent reads all outputs
  ↓
Synthesis document written at parent level
  ↓
_underscore/ becomes ARCHIVE
```

**Pattern:** 13+ agent teams followed this pattern (OD audit, comprehensive audit, workflow metacognition, CD research, migration research, AD execution, etc.)

---

## 12. KEY METRICS

| Metric | Value |
|--------|-------|
| Total files in showcase/ | ~1,170 |
| Markdown files | ~500 |
| HTML exploration files | 24 (6 DD + 6 OD + 6 CD + likely 6 AD) |
| Underscore directories | 19 |
| Hub documents (8+ inbound refs) | 12 |
| Synthesis documents | ~20 |
| Provenance-threaded files | ~734 (490 inline + 244 light sections) |
| Research findings total | 337 (28+27+51+192+39) |
| Multi-agent team archives | 13+ |
| Soul violations found | 0 (across ~13,000 element checks) |

---

## 13. RECOMMENDATIONS

### 13.1 KEEP (High Value, Clear Purpose)

1. **All hub documents** — Load-bearing, 8+ inbound refs each
2. **All synthesis documents** — These absorbed underscore archives
3. **All research files** (R1-R5, RESEARCH-SYNTHESIS) — Foundation of entire system
4. **All exploration HTML files** (DD, OD, AD, CD) — Validated artifacts
5. **All underscore directories with synthesis docs** — Archival evidence
6. **All CLAUDE.md files** — Navigation layer
7. **All checkpoints/** — Tracking files actively referenced
8. **All dependency-trace/** — Evidence for Phase 1B analysis
9. **All POST-CD-PIPELINE/** — Strategic planning layer
10. **All DESIGN-SYSTEM/provenance/** — Formal provenance chain

### 13.2 VERIFY (Need Deeper Scan)

1. `knowledge-architecture/_ad-execution/` — Check for synthesis doc
2. `knowledge-architecture/_execution-journal/` — Check references
3. `knowledge-architecture/_od-reenrichment/` — Possibly superseded
4. `knowledge-architecture/_remediation/` — Check absorption status
5. `explorations/axis/_perceptual-research/` — Check synthesis
6. `checkpoints/OD-CHECKPOINT.md` — Only file without threading header

### 13.3 MISSING (Expected But Not Found)

1. `HANDOFF-OD-TO-AD.md` — Mentioned in MEMORY.md, expected in knowledge-architecture/ or DESIGN-SYSTEM/provenance/stage-3-organization-od/

---

## 14. CONCLUSION

The showcase/ tree is **NOT a junk pile**. It is a **formal knowledge architecture** with:

1. **Clear hub documents** that serve as load-bearing synthesis
2. **Formal provenance threading** across 734 files
3. **Absorbed underscore archives** with synthesis documents consuming their content
4. **Multi-layer structure** (T1 foundation → explorations → synthesis → strategic planning)
5. **Audit trails** for 13+ multi-agent teams
6. **Zero soul violations** across ~13,000 element checks

**Orphan risk: LOW.** Most files are either:
- Referenced in synthesis documents
- Part of provenance chain (490 inline + 244 light sections)
- Archival evidence of multi-agent processes
- Navigation/operational files (CLAUDE.md)

**Next Steps:**
1. Verify the 7 underscore directories flagged above
2. Locate missing HANDOFF-OD-TO-AD.md
3. Confirm OD-CHECKPOINT.md status (only file without threading header)
4. Cross-reference with design-extraction/ graph to find cross-tree dependencies

**Storage Efficiency:**
- ~1,170 files, but most are small .md files
- ~24 HTML files are the largest individual artifacts
- Screenshots in audit directories add bulk but serve as evidence
- Total showcase/ size likely <100MB (need du -sh to confirm)

**VERDICT: The showcase/ tree is a well-organized knowledge graph. Cleanup should be MINIMAL — verification of 7 underscore dirs, not mass deletion.**
