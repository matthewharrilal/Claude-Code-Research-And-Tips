<!--
===============================================================================
INLINE THREADING HEADER
File: docs-spa/app/showcase/POST-CD-PIPELINE/CLAUDE.md
Tier: B | Generated: 2026-02-11

1. WHY THIS EXISTS
Agent navigation file for the POST-CD-PIPELINE directory. Auto-read by Claude
Code on directory entry. Provides reading order, file inventory, and connection
map for the strategic planning documents covering CD through full migration.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| _SOURCE-BRIEF.md                        | Master source material reference       |
| 9 CD research files                     | CD scoping research (~3,500 lines)     |
| 10 migration research files             | Migration research (~5,800 lines)      |
| HANDOFF-AD-TO-CD.md                     | AD terminal outputs feeding CD         |
| R5-COMBINATION-THEORY.md               | CD's primary research source (39 findings) |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Claude Code agent                       | Auto-read on POST-CD-PIPELINE/ entry   |
| CD execution planning                   | Strategic input for CD spec            |
| Migration planning                      | Strategic input for post-CD phases     |

===============================================================================
END INLINE THREADING HEADER
===============================================================================
-->

# CLAUDE.md -- POST-CD-PIPELINE Directory

===============================================================================
## 1. IDENTITY
===============================================================================

**Name:** Post-CD Pipeline
**Status:** ACTIVE -- strategic planning documents, not yet executed
**Anatomical Role:** The roadmap -- strategic plans for CD execution, post-CD
intermediate phases, per-page migration pipeline, and ongoing content ingestion.

This directory does NOT contain execution specs. It contains the strategic
input from which execution specs will be derived. The actual CD execution plan,
migration execution spec, and ingestion operational spec are future deliverables
of the phases described here.

===============================================================================
## 2. HOW TO READ
===============================================================================

**Entry Point:** `README.md` -- comprehensive overview with reading guides

**By Purpose:**

| I want to... | Read |
|--------------|------|
| Plan CD execution | `01-CD-EVOLVED-VISION.md` then `HANDOFF-AD-TO-CD.md` |
| Understand post-CD phases | `02-POST-CD-PHASES.md` then `05-COMPLETE-ROADMAP.md` |
| Understand page migration pipeline | `03-MIGRATION-PIPELINE.md` |
| Understand new content ingestion | `04-CONTENT-INGESTION.md` |
| Get the full timeline | `05-COMPLETE-ROADMAP.md` |
| Understand the deep conceptual framework | `06-KEY-INSIGHTS.md` |
| See all raw source material references | `_SOURCE-BRIEF.md` |
| Get the full picture (first read) | `README.md` then `01` through `06` in order |

===============================================================================
## 3. WHAT'S HERE
===============================================================================

| File | Lines | Purpose |
|------|-------|---------|
| `README.md` | ~550 | Comprehensive overview, reading guide, connection map, story |
| `CLAUDE.md` | ~130 | This file -- agent navigation |
| `01-CD-EVOLVED-VISION.md` | ~1,000 | CD evolved purpose, 8 recommendations, completeness gate |
| `02-POST-CD-PHASES.md` | ~520 | 5 missing phases, abstraction cliff, freeze line |
| `03-MIGRATION-PIPELINE.md` | ~660 | 6-phase per-page pipeline with concrete walkthrough |
| `04-CONTENT-INGESTION.md` | ~310 | Migration vs. ingestion, operational wrapper |
| `05-COMPLETE-ROADMAP.md` | ~480 | Full timeline, phase breakdown, risk factors |
| `06-KEY-INSIGHTS.md` | ~245 | Language analogy, sameness impossibility, attention topology |
| `_SOURCE-BRIEF.md` | ~380 | Raw source material reference for writing agents |

===============================================================================
## 4. HOW THIS CONNECTS
===============================================================================

### Inbound (What Feeds Here)
- `../DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` -- operational starting point for CD
- `../knowledge-architecture/_cd-research/` -- 9 CD research files (~3,500 lines)
- `../knowledge-architecture/_migration-research/` -- 10 migration research files (~5,800 lines)
- `../DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md` -- CD's primary research source
- `../DESIGN-SYSTEM/provenance/stage-5-combination-cd/STAGE-HEADER.md` -- CD stage placeholder

### Outbound (What Consumes This)
- Future CD Execution Spec -- derived from `01-CD-EVOLVED-VISION.md`
- Future Migration Execution Spec -- derived from `02` and `03`
- Future Ingestion Operational Spec -- derived from `04`
- `../DESIGN-SYSTEM/provenance/stage-5-combination-cd/` -- CD stage directory

### Siblings
- `../DESIGN-SYSTEM/` -- the design system (tokens, patterns, provenance)
- `../knowledge-architecture/` -- working research artifacts
- `../explorations/` -- validated HTML exploration artifacts

===============================================================================
## 5. MINDSET
===============================================================================

This directory represents the moment where the design system looks forward from
research completion toward real-world application. Four stages of exploration
(DD, OD, AD, and soon CD) invented a visual language. This directory plans how
that language becomes a printing press, how every text in the library gets
translated, and how new texts enter the same pipeline indefinitely.

The core insight: the pipeline is not software to be built. It is an agent with
the right context. Load the accumulated identity, the pattern library, the
combination rules, and the audit methodology -- and any agent BECOMES the
pipeline. This directory documents what that context is and how to assemble it.

===============================================================================
