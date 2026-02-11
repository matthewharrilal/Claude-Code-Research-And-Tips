<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/explorations/CLAUDE.md
Tier: C | Batch: 5 | Date: 2026-02-06
═══════════════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
Navigation file for agents entering the explorations/ directory. Provides
directory layout (density/, organizational/, axis/, combination/), status of
each sub-directory, and artifact-to-provenance mapping.

3. STATUS
ACTIVE

5. BUILT ON
- Directory structure knowledge (density/, organizational/, axis/, combination/)

8. CONSUMED BY
- HANDOFF-DD-TO-OD.md (cited)
- All agents entering explorations/ (mandatory navigation)

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
 -->

# CLAUDE.md — Explorations Directory

═══════════════════════════════════════════════════════════════════════════════
## 1. IDENTITY
═══════════════════════════════════════════════════════════════════════════════

**Name:** Explorations Directory
**Anatomical Role:** The artifacts — validated HTML files from each exploration stage.

These are the PROOFS. The provenance lives in `DESIGN-SYSTEM/provenance/`.
These files are the ARTIFACTS that validate the patterns.

═══════════════════════════════════════════════════════════════════════════════
## 2. HOW TO READ
═══════════════════════════════════════════════════════════════════════════════

| Directory | Status | Explorations |
|-----------|--------|--------------|
| `density/` | ✅ COMPLETE | DD-001 through DD-006 (6 files) |
| `organizational/` | ✅ COMPLETE | OD-001 through OD-006 (6 files) |
| `axis/` | ✅ COMPLETE | AD-001 through AD-006 (6 files) |
| `combination/` | ⏳ PENDING | CD-001 through CD-006 (future) |

═══════════════════════════════════════════════════════════════════════════════
## 3. WHAT'S HERE
═══════════════════════════════════════════════════════════════════════════════

| Folder | Status | Files |
|--------|--------|-------|
| `density/` | ✅ | DD-001-006.html (all 6 complete, all INCLUDE) |
| `organizational/` | ✅ | OD-001-006.html (all 6 complete, all INCLUDE) |
| `axis/` | ✅ | AD-001-006.html (all 6 complete, all INCLUDE) |
| `combination/` | ⏳ | Empty (CD work pending) |

═══════════════════════════════════════════════════════════════════════════════
## 4. HOW THIS CONNECTS
═══════════════════════════════════════════════════════════════════════════════

**Artifacts are here. Provenance is in DESIGN-SYSTEM/provenance/.**

| Exploration | Artifact | Provenance |
|-------------|----------|------------|
| DD-001-006 | `density/DD-*.html` | `../DESIGN-SYSTEM/provenance/stage-2-density-dd/` |
| OD-001-006 | `organizational/OD-*.html` | `../DESIGN-SYSTEM/provenance/stage-3-organization-od/` |
| AD-001-006 | `axis/AD-*.html` | `../DESIGN-SYSTEM/provenance/stage-4-axis-ad/` |
| CD-001-006 | `combination/CD-*.html` | `../DESIGN-SYSTEM/provenance/stage-5-combination-cd/` |

**Screenshots:** `../screenshots/explorations/`

═══════════════════════════════════════════════════════════════════════════════
## 5. MINDSET
═══════════════════════════════════════════════════════════════════════════════

**These files use inline KortAI styles.**

Every DD exploration has:
- Complete locked tokens in `:root`
- Full component implementations
- Realistic documentation content (not lorem ipsum)

To view: Open in browser. The files are self-contained HTML.

The scores and decisions live in provenance. The artifacts live here.

═══════════════════════════════════════════════════════════════════════════════
