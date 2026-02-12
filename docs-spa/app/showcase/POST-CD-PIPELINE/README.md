# POST-CD-PIPELINE

## The Complete Roadmap From Combination Dimension Through Full Migration

---

## What This Directory Is

This directory contains the strategic planning documents for everything that happens after the AD (Axis Dimension) phase of the KortAI design pipeline. It captures an evolved understanding of CD (Combination Dimension), the five intermediate phases between CD and migration that nobody originally planned, the per-page migration pipeline, the operational wrapper for ongoing content ingestion, and the key insights that make the whole system coherent.

These documents were produced by a 7-agent research and writing team synthesizing insights from two prior research campaigns (9 CD research files totaling ~3,500 lines, and 10 migration research files totaling ~5,800 lines) plus a conversation session that produced critical evolutionary insights about CD's purpose, the language analogy, and the freeze guarantee architecture.

This is not a specification to be executed. It is a **roadmap to be consumed** before planning the CD phase and everything that follows. The actual execution specs (CD Convention Spec, Migration Execution Spec, Ingestion Operational Spec) will be produced by the phases this directory describes.

---

## Why This Directory Exists

The original pipeline read: DD -> OD -> AD -> CD -> Migration. Five stages. Clean. Linear. And dangerously incomplete.

Three critical gaps were discovered through systematic research:

1. **CD's purpose evolved.** AD's discovery of the 3-way equivalence (axis = organization = density = ATTENTION TOPOLOGY, AD-F-023) transformed CD from "component chemistry" into a stress test of whether the unified theory holds under combination pressure. The original 6-exploration plan needed reframing, 8 specific recommendations, and a completeness gate that no prior stage required.

2. **Five missing phases exist between CD and migration.** Gap analysis revealed that migration assumes infrastructure that does not exist: implementable components (not just prose), a content inventory, a comprehensive process spec, pilot testing, and refinement. Without these, migration degrades to CSS reskinning that uses 0% of the OD/AD/CD research.

3. **The user's non-negotiable requirement demands architectural support.** "Once we start migrating actual documentation pages, I don't want to have to update the design system." This freeze guarantee is not achievable by hoping -- it requires systematic preparation across 5 intermediate phases that make the system exhaustively complete before migration begins.

This directory documents the full picture: what CD should look like, what must happen after CD, how individual pages move through the pipeline, how new content enters the system, the complete timeline, and the deep insights that make the architecture coherent.

---

## The Big Picture: Where This Fits

The KortAI design system follows a research pipeline that discovers design knowledge through progressive exploration:

```
Stage 1: Components (COMP)     21 COMP-F findings    Soul pieces discovered
Stage 2: Density (DD)          18 DD-F findings       Visual breathing alphabet
Stage 3: Organization (OD)     17 OD-F findings       Content type vocabulary
Stage 4: Axis (AD)             28 AD-F findings       3-way equivalence proven
                                                       ↑ YOU ARE HERE
Stage 5: Combination (CD)      ~15-25 CD-F expected   Grammar stress test
                                                       ↓
Post-CD Phases B-H             Bridge research to code
                                                       ↓
═══════════ FREEZE LINE ═══════════
                                                       ↓
Migration (I+J)                75+ pages migrated      Real documentation adopted
```

Each stage inherits everything from prior stages. By CD, the accumulated context includes 84 findings, 20 validated patterns, 5 soul pieces, 337 raw research findings, and the meta-discovery that density, organization, and axis are three lenses on a single phenomenon: ATTENTION TOPOLOGY.

This directory describes Stages 5 through Migration in comprehensive detail.

---

## How To Use This Directory

### Reading Order by Purpose

**If you are planning the CD phase:**
1. `01-CD-EVOLVED-VISION.md` -- What CD has become and the 8 recommendations
2. `_SOURCE-BRIEF.md` Section 1 -- Raw conversation insights about CD evolution
3. Then read `HANDOFF-AD-TO-CD.md` in the provenance chain (the operational starting point)

**If you need to understand the post-CD phases:**
1. `02-POST-CD-PHASES.md` -- The 5 missing phases, the abstraction cliff, the freeze line
2. `05-COMPLETE-ROADMAP.md` -- Full timeline with effort estimates and dependencies

**If you need to understand how pages get migrated:**
1. `03-MIGRATION-PIPELINE.md` -- The 6-phase per-page process with a concrete walkthrough
2. `04-CONTENT-INGESTION.md` -- How new content enters the same pipeline

**If you want the deep conceptual framework:**
1. `06-KEY-INSIGHTS.md` -- The written language analogy, why sameness is impossible, attention topology, emergence points

**If you want everything (recommended for first read):**
1. This README (orientation)
2. `01` through `06` in order
3. `_SOURCE-BRIEF.md` for raw source references

### Quick Reference

| Concept | Where to Find It |
|---------|-------------------|
| What CD is now | `01-CD-EVOLVED-VISION.md` Section 3 |
| The 8 CD recommendations | `01-CD-EVOLVED-VISION.md` Section 4 |
| The 6 CD explorations (reframed) | `01-CD-EVOLVED-VISION.md` Section 7 |
| CD Completeness Gate | `01-CD-EVOLVED-VISION.md` Section 11 |
| The abstraction cliff problem | `02-POST-CD-PHASES.md` "The Abstraction Cliff Problem" |
| Phase B: Component Extraction | `02-POST-CD-PHASES.md` "Phase B" |
| Phase F: Content Analysis | `02-POST-CD-PHASES.md` "Phase F" |
| Phase E: Migration Playbook | `02-POST-CD-PHASES.md` "Phase E" |
| Phase G: Pilot Migration | `02-POST-CD-PHASES.md` "Phase G" |
| Phase H: Playbook Refinement | `02-POST-CD-PHASES.md` "Phase H" |
| The freeze line definition | `02-POST-CD-PHASES.md` "The Freeze Line" |
| Per-page 6-phase pipeline | `03-MIGRATION-PIPELINE.md` full document |
| Content classification table | `03-MIGRATION-PIPELINE.md` "The Content Classification Table" |
| Concrete walkthrough (auth page) | `03-MIGRATION-PIPELINE.md` "The Full Walkthrough" |
| 7-gate perceptual audit | `03-MIGRATION-PIPELINE.md` "Phase 5: Perceptual Audit" |
| Migration vs. ingestion comparison | `04-CONTENT-INGESTION.md` "Two Operational Modes" |
| The operational wrapper concept | `04-CONTENT-INGESTION.md` "The Operational Wrapper Concept" |
| What is frozen vs. what grows | `04-CONTENT-INGESTION.md` "What Grows vs. What Stays Frozen" |
| Master roadmap table | `05-COMPLETE-ROADMAP.md` "The Master Roadmap Table" |
| Session breakdown | `05-COMPLETE-ROADMAP.md` "Realistic Session Breakdown" |
| Risk factors | `05-COMPLETE-ROADMAP.md` "Risk Factors and Dependencies" |
| Written language analogy (full) | `06-KEY-INSIGHTS.md` "The Written Language Analogy" |
| Why sameness is impossible | `06-KEY-INSIGHTS.md` "Why Sameness Is Architecturally Impossible" |
| Attention topology concept | `06-KEY-INSIGHTS.md` "The Attention Topology Concept" |
| Where emergence continues | `06-KEY-INSIGHTS.md` "Where Emergence Continues" |

---

## Key Concepts Summary

### The 3-Way Equivalence (AD-F-023)

The most important discovery in the pipeline: axis = organization = density = ATTENTION TOPOLOGY. These are not three independent variables -- they are three lenses on a single phenomenon. When you choose an F-Pattern axis, you simultaneously choose CRESCENDO density and NARRATIVE organization. One decision, three automatic outcomes. This collapses the design decision space from a multi-variable optimization to a single-variable classification.

### The Written Language Analogy

The pipeline stages map precisely to the invention of written language:
- **DD = inventing the alphabet** (density rhythm marks as atomic units)
- **OD = discovering word formation** (content types as recognizable structural words)
- **AD = discovering that writing direction IS part of meaning** (spatial arrangement is not separate from content)
- **CD = writing the first sentences** (testing whether patterns combine grammatically)
- **Post-CD = building a printing press** (handwriting to movable type)
- **Migration = translating the library** (applying the complete language to real content)

### The Abstraction Cliff

The gap between 15,000 lines of research prose and a migrated React page. Without the intermediate phases, migration agents fall back to "apply soul tokens, keep existing structure" -- producing soul-compliant CSS over untouched information architecture. The abstraction cliff is the reason the 5 intermediate phases exist.

### The Freeze Guarantee

The user's non-negotiable: once migration starts, the design system does not change. This works because: (1) the intermediate phases systematically close every gap between research and implementation, and (2) the accumulated identity teaches HOW TO THINK, not just WHAT TO DO, so agents can handle novel situations without system updates.

### The Operational Wrapper

The migration pipeline is not software to be built. It is an emergent property of the post-CD phases. An agent loading the right context (accumulated identity, pattern library, combination rules, audit methodology) BECOMES the pipeline. The operational wrapper is a ~50-100 line spec that tells a single agent what to load and what to do for ongoing content ingestion.

### The Completeness Gate

A new concept for CD with no precedent in prior stages. CD cannot declare done until: every component used in at least one exploration, every R-5 finding evaluated, density tolerance table complete, transition grammar validated at combination scale, and CD-006 pilot succeeded. This prevents the syndrome where a stage declares completion while leaving critical validation undone.

---

## File Inventory

| File | Lines | Purpose |
|------|-------|---------|
| `README.md` | ~550 | This file -- comprehensive overview, reading guide, connection map |
| `CLAUDE.md` | ~130 | Agent navigation file (auto-read on directory entry) |
| `01-CD-EVOLVED-VISION.md` | ~1,000 | What CD has become with all accumulated learnings: evolved framing, 8 recommendations, reframed explorations, completeness gate, team topology |
| `02-POST-CD-PHASES.md` | ~520 | The 5 missing phases (B, F, E, G, H), the abstraction cliff, the freeze line, phase dependencies and time budgets |
| `03-MIGRATION-PIPELINE.md` | ~660 | The 6-phase per-page pipeline with concrete walkthrough ("Setting Up Authentication"), deterministic vs. judgment decisions, compounding effect |
| `04-CONTENT-INGESTION.md` | ~310 | New content handling, migration vs. ingestion distinction, operational wrapper concept, what grows vs. what freezes |
| `05-COMPLETE-ROADMAP.md` | ~480 | Full timeline CD through migration, master roadmap table, phase-by-phase breakdown, freeze line, risk factors, success criteria |
| `06-KEY-INSIGHTS.md` | ~245 | Deep insights: written language analogy, why sameness is architecturally impossible, attention topology concept, where emergence continues |
| `_SOURCE-BRIEF.md` | ~380 | Raw source material reference -- all conversation insights organized by section, used by writing agents |

**Total: ~4,275 lines across 9 files**

---

## Connection Map

### Inbound Dependencies (What Feeds Into This Directory)

| Source | Relationship |
|--------|-------------|
| `../DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` | The handoff that starts CD -- 5 open questions, pattern selection guide seed, AD's terminal outputs |
| `../knowledge-architecture/_cd-research/` (9 files, ~3,500 lines) | CD scoping research: cross-stage evolution, accumulated intelligence, gap analysis, CD synthesis briefing |
| `../knowledge-architecture/_migration-research/` (10 files, ~5,800 lines) | Migration research: pipeline architecture, content ingestion, operational wrapper, complete roadmap, migration synthesis |
| `../DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md` | 39 findings on combination behavior -- CD's primary research source (~75-80% unapplied) |
| `../DESIGN-SYSTEM/provenance/stage-5-combination-cd/STAGE-HEADER.md` | CD stage placeholder with original 6-exploration plan |
| `../DESIGN-SYSTEM/patterns/combination-rules.md` | Existing combination rules (177 lines, covers ~4 of 39 R-5 findings) |
| `../DESIGN-SYSTEM/BACKBONE.md` | Master narrative of the entire design system |
| `../knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` | The accumulated identity that CD consumes and produces v3 from |

### Outbound Dependencies (What Consumes This Directory)

| Consumer | How Used |
|----------|----------|
| `../DESIGN-SYSTEM/provenance/stage-5-combination-cd/` | CD stage directory -- consumes evolved vision and recommendations for CD execution planning |
| Future CD Execution Spec | The actual execution spec for CD will be derived from `01-CD-EVOLVED-VISION.md` and `_SOURCE-BRIEF.md` |
| Future Migration Execution Spec | The actual migration spec (Phase E) will be derived from `02-POST-CD-PHASES.md` and `03-MIGRATION-PIPELINE.md` |
| Future Ingestion Operational Spec | The lightweight operational spec will be derived from `04-CONTENT-INGESTION.md` |

### Sibling Directories

| Directory | Relationship |
|-----------|-------------|
| `../DESIGN-SYSTEM/` | The design system itself -- tokens, patterns, provenance, components, anti-patterns |
| `../DESIGN-SYSTEM/provenance/` | The formal provenance chain -- finding traces, stage documents, pipeline manifest |
| `../knowledge-architecture/` | Working research artifacts and analysis documents |
| `../explorations/` | The validated HTML exploration artifacts (DD, OD, AD, future CD) |

---

## The Story: How This Knowledge Was Developed

### The Research Phase

This directory's content emerged from two systematic research campaigns conducted in February 2026:

**CD Research Campaign** (9 files, ~3,500 lines): Eight research agents explored CD's scope, cross-stage evolution patterns, accumulated identity mechanics, combination theory application, and gap analysis. A ninth agent synthesized everything into the 645-line CD-SYNTHESIS-BRIEFING -- the comprehensive answer to "what is CD now that we know what AD discovered?"

**Migration Research Campaign** (10 files, ~5,800 lines): Nine research agents explored migration pipeline architecture, content ingestion patterns, operational wrapper concepts, post-CD phase sequencing, gap analysis, and complete roadmap planning. A tenth agent synthesized everything into the 780-line MIGRATION-SYNTHESIS -- the comprehensive answer to "what happens between CD and real documentation pages?"

### The Conversation Session

Between the two research campaigns, a conversation session produced critical evolutionary insights that neither research campaign anticipated:

- **CD's purpose reframing**: CD is not discovering a new dimension. It is a stress test of the 3-way equivalence (AD-F-023) under combination pressure.
- **The written language analogy**: DD = alphabet, OD = words, AD = writing direction as meaning, CD = grammar. This analogy illuminated the ideological depth of each stage.
- **The abstraction cliff**: The gap between research prose and implementable code was named and diagnosed.
- **The freeze guarantee architecture**: The user's non-negotiable requirement was analyzed structurally, revealing why the 5 intermediate phases are load-bearing infrastructure.
- **The operational wrapper**: The pipeline is not software to be assembled. It is an agent with the right context.
- **CD-006 as pilot migration**: The crown jewel exploration should use real content, not synthetic content, as the insurance policy that proves system completeness.
- **The completeness gate**: CD needs a formal gate with no precedent in prior stages.

### The Documentation Team

Seven agents produced this directory's documents in parallel, each reading the full source material and writing their assigned document:

| Agent | Document | Focus |
|-------|----------|-------|
| cd-vision-writer | `01-CD-EVOLVED-VISION.md` | CD's evolved purpose, 8 recommendations, completeness gate |
| phases-writer | `02-POST-CD-PHASES.md` | The 5 missing phases, abstraction cliff, freeze line |
| pipeline-writer | `03-MIGRATION-PIPELINE.md` | Per-page 6-phase pipeline, concrete walkthrough |
| ingestion-writer | `04-CONTENT-INGESTION.md` | Content ingestion, operational wrapper, migration vs. ingestion |
| roadmap-writer | `05-COMPLETE-ROADMAP.md` | Complete timeline, phase breakdown, risk factors |
| insights-writer | `06-KEY-INSIGHTS.md` | Language analogy, sameness impossibility, attention topology |
| readme-writer | `README.md` + `CLAUDE.md` | This file and agent navigation |

---

## What Comes Next

### Immediate Next Step: CD Execution

CD (Combination Dimension) is the immediate focus. Before CD can begin, a CD execution plan must be produced -- comparable to the Master AD Execution Spec (1,407 lines) that governed AD. This directory provides the strategic input for that plan:

- `01-CD-EVOLVED-VISION.md` defines what CD should produce and how it should be structured
- The 8 recommendations in Section 4 are specific, actionable changes to the original CD plan
- The completeness gate in Section 11 defines what "done" means for CD
- Section 12 provides team topology and scale estimates (~18-20 agents, ~4-5 hours)

The operational starting point for CD is `HANDOFF-AD-TO-CD.md` in the provenance chain, which contains AD's terminal outputs and 5 open questions that CD must answer.

### After CD: The Post-CD Phases

After CD completes, the 5 intermediate phases described in `02-POST-CD-PHASES.md` build the bridge from research to implementation:

1. **Component Extraction (Phase B)**: Build the printing press -- 6-10 hours
2. **Content Analysis (Phase F)**: Read all the texts -- 2-4 hours
3. **Migration Playbook (Phase E)**: Write the translation guide -- 3-4 hours
4. **Pilot Migration (Phase G)**: Translate a few paragraphs -- 3-5 hours
5. **Playbook Refinement (Phase H)**: Battle-test the process -- 1-2 hours

After Phase H, the freeze line activates. The design system locks permanently.

### After the Freeze: Full Migration

Full migration (Phase I+J) processes all 75+ documentation pages through the 6-phase per-page pipeline. Each page gets classified, patterned, composed, built, audited, and documented. The system's demonstrated capabilities expand with every page while its rules stay fixed.

### Ongoing: Content Ingestion

After migration, new pages enter the same pipeline through the Ingestion Operational Spec -- a ~50-100 line document that tells a single agent what to load and what to do. Same 6 phases, lighter oversight, no coordination overhead. The printing press does not ask when the manuscript was composed.

---

## The Design System Pipeline Summary

```
DD (alphabet)     ->  OD (words)        ->  AD (geometry)      ->  CD (grammar)
18 DD-F findings      17 OD-F findings      28 AD-F findings      ~15-25 CD-F
6 density patterns    6 org patterns        6 axis patterns       Combination rules
                                            AD-F-023: TOPOLOGY    Completeness gate
                                                                        |
                                                                        v
                                                               Post-CD Phases B-H
                                                               (printing press,
                                                                inventory, playbook,
                                                                pilot, refinement)
                                                                        |
                                                                        v
                                                             ══ FREEZE LINE ══
                                                                        |
                                                                        v
                                                               Migration (I+J)
                                                               75+ pages through
                                                               6-phase pipeline
                                                                        |
                                                                        v
                                                               Ongoing Ingestion
                                                               Same pipeline,
                                                               single agent
```

The system does not change after the freeze. Its demonstrated capabilities expand forever through documented application. A complete language does not need new grammar to express new thoughts. It needs speakers who understand its grammar deeply enough to compose new sentences fluently.

---

*Directory produced: 2026-02-11*
*Team: 7 agents (cd-vision-writer, phases-writer, pipeline-writer, ingestion-writer, roadmap-writer, insights-writer, readme-writer)*
*Sources: 9 CD research files (~3,500 lines), 10 migration research files (~5,800 lines), conversation session insights, HANDOFF-AD-TO-CD.md, R5-COMBINATION-THEORY.md, stage-5 STAGE-HEADER.md*
