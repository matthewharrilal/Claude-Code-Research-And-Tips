<!--
===============================================================================
INLINE THREADING HEADER
File: docs-spa/app/showcase/POST-CD-PIPELINE/CLAUDE.md
Tier: B | Generated: 2026-02-11 | Updated: 2026-02-13
Status: ACTIVE

1. WHY THIS EXISTS
Agent navigation file for the POST-CD-PIPELINE directory. Auto-read by Claude
Code on directory entry. Provides reading order, file inventory, and connection
map for the strategic planning documents covering CD through full migration,
including tension-composition skill integration and component extraction.

3. STATUS
ACTIVE — Expanded with Track 2 compositional supplements, strategy library,
extraction validation, and open questions tracking (13+ files, ~9,200 lines).
Phase D COMPLETE (2026-02-15, CONDITIONAL PASS). Richness + rigidity research
COMPLETE (11 agents, tier model established).

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| _SOURCE-BRIEF.md                        | Master source material reference       |
| 9 CD research files                     | CD scoping research (~3,500 lines)     |
| 10 migration research files             | Migration research (~5,800 lines)      |
| HANDOFF-AD-TO-CD.md                     | AD terminal outputs feeding CD         |
| R5-COMBINATION-THEORY.md               | CD's primary research source (39 findings) |
| _pipeline-evolution-research/          | Pipeline evolution synthesis (5 files) |
| _component-taxonomy-research/          | Component extraction research (2 files)|
| ~/.claude/skills/tension-composition/  | Track 2 skill implementation          |
| ~/.claude/skills/perceptual-auditing/  | Quality assurance skill               |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Claude Code agent                       | Auto-read on POST-CD-PIPELINE/ entry   |
| CD execution planning                   | Strategic input for CD spec            |
| Migration planning                      | Strategic input for post-CD phases     |
| Track 2 compositional builders          | Skill invocation and component catalog |

===============================================================================
END INLINE THREADING HEADER
===============================================================================
-->

# CLAUDE.md -- POST-CD-PIPELINE Directory

===============================================================================
## 1. IDENTITY
===============================================================================

**Name:** Post-CD Pipeline
**Status:** ACTIVE -- strategic planning documents + Track 2 skill integration
**Anatomical Role:** The roadmap -- strategic plans for CD execution, post-CD
intermediate phases, per-page migration pipeline (Track 1 AND Track 2), and
ongoing content ingestion.

This directory contains strategic planning AND execution specifications. The
original 6 planning docs describe the overall vision. The new Track 2 supplement,
strategy library, and extraction validation protocol specify HOW the tension-
composition skill becomes the Track 2 migration pipeline.

**Core Insight:** For Track 2 pages, the pipeline is not software to be built.
It is the tension-composition skill with the right context. Load the skill, the
component library, the perceptual guardrails — and any agent BECOMES the Track 2
pipeline. This directory documents what that context is and how to assemble it.

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
| Understand Track 2 composition | `07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md` then `03-MIGRATION-PIPELINE.md` |
| See extracted components/strategies | `08-COMPOSITIONAL-STRATEGY-LIBRARY.md` |
| Plan extraction validation | `09-EXTRACTION-VALIDATION-PROTOCOL.md` |
| See all open questions | `OPEN-QUESTIONS.md` |
| See all raw source material references | `_SOURCE-BRIEF.md` |
| Get the full picture (first read) | `README.md` then `01` through `09` in order |

===============================================================================
## 3. WHAT'S HERE
===============================================================================

| File | Lines | Purpose |
|------|-------|---------|
| `README.md` | ~550 | Comprehensive overview, reading guide, connection map, story |
| `CLAUDE.md` | ~170 | This file -- agent navigation |
| `01-CD-EVOLVED-VISION.md` | ~1,000 | CD evolved purpose, 8 recommendations, completeness gate |
| `02-POST-CD-PHASES.md` | ~520 | 5 missing phases, abstraction cliff, freeze line |
| `03-MIGRATION-PIPELINE.md` | ~660 | 6-phase per-page pipeline with concrete walkthrough |
| `04-CONTENT-INGESTION.md` | ~310 | Migration vs. ingestion, operational wrapper |
| `05-COMPLETE-ROADMAP.md` | ~480 | Full timeline, phase breakdown, risk factors |
| `06-KEY-INSIGHTS.md` | ~245 | Language analogy, sameness impossibility, attention topology |
| `07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md` | ~1,142 | Track 2 skill invocation, Phase 3 pipeline, quality lessons |
| `08-COMPOSITIONAL-STRATEGY-LIBRARY.md` | ~1,747 | 3-tier model, component inventory, Tier 2.5 catalog, Tier 3 recipes |
| `09-EXTRACTION-VALIDATION-PROTOCOL.md` | ~984 | Phase D test procedures (✅ COMPLETE 2026-02-15, CONDITIONAL PASS) |
| `OPEN-QUESTIONS.md` | ~1,184 | Central tracking of 23 open questions across 7 categories |
| `_SOURCE-BRIEF.md` | ~380 | Raw source material reference for writing agents |

**Total:** ~9,200 lines across 13+ files

===============================================================================
## 4. HOW THIS CONNECTS
===============================================================================

### Inbound (What Feeds Here)
- `../DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` -- operational starting point for CD
- `../knowledge-architecture/_cd-research/` -- 9 CD research files (~3,500 lines)
- `../knowledge-architecture/_migration-research/` -- 10 migration research files (~5,800 lines)
- `../knowledge-architecture/_pipeline-evolution-research/` -- 5 pipeline evolution files (~2,800 lines)
- `../knowledge-architecture/_component-taxonomy-research/` -- 2 component forensics files (~1,100 lines)
- `../DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md` -- CD's primary research source
- `../DESIGN-SYSTEM/provenance/stage-5-combination-cd/STAGE-HEADER.md` -- CD stage placeholder
- `~/.claude/skills/tension-composition/SKILL.md` -- Track 2 compositional skill (839 lines)
- `~/.claude/skills/perceptual-auditing/SKILL.md` -- Quality verification skill

### Outbound (What Consumes This)
- Future CD Execution Spec -- derived from `01-CD-EVOLVED-VISION.md`
- Future Migration Execution Spec -- derived from `02`, `03`, `07`, `08`, `09`
- Future Ingestion Operational Spec -- derived from `04`
- Track 2 Migration Builders -- invoke `07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md` + skill
- Phase C Extraction Teams -- use `08-COMPOSITIONAL-STRATEGY-LIBRARY.md` as extraction spec
- Phase D Validation Teams -- execute `09-EXTRACTION-VALIDATION-PROTOCOL.md`
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

**The core insight evolved:** The pipeline is not ONE thing. It's two tracks:

- **Track 1 (Token + Pattern):** Pages with explicit vocabulary (tables, stats,
  diagrams) get token application + pattern selection. This is software-like:
  read content, match patterns, compose from library.

- **Track 2 (Metaphor + Composition):** Pages with implicit tension (narratives,
  prose-heavy content) invoke the tension-composition skill. The skill IS the
  pipeline. Load the accumulated identity, the guardrail library, the perceptual
  cost model — and the agent BECOMES the compositional builder.

**The metaphor shapes experience; the guardrails prevent it from breaking experience.**

This directory documents BOTH tracks: what gets extracted (Phase C), what gets
validated (Phase D), and how Track 2 builders invoke the skill with the right
context (Phase 3 Track 2 execution).

===============================================================================
