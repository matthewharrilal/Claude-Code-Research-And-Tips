# 02 — The Five Missing Phases Between CD and Migration

## How Systematic Gap Analysis Revealed the Infrastructure Nobody Planned

===

## Why This Document Exists

The original pipeline reads: DD -> OD -> AD -> CD -> Migration. Five stages. Clean. Linear. And dangerously incomplete.

Between "CD is done" and "start migrating pages," there is a chasm that no existing document acknowledged until a systematic gap analysis exposed it. That analysis — conducted across eight source files totaling over 3,100 lines of research, the complete BACKBONE.md, the 265-line migration-guide.md, the CD-SYNTHESIS-BRIEFING, and the full PATTERN-INDEX — revealed five intermediate phases that are not optional refinements or nice-to-have polish. They are load-bearing infrastructure. Without them, migration degrades to a CSS reskinning exercise that uses zero percent of the organizational, spatial, and combinatorial research accumulated across four stages and 84+ findings.

This document describes each missing phase: what it produces, what it consumes, why it exists, and what happens if it is skipped. It also describes the FREEZE LINE — the non-negotiable boundary after which the design system cannot change — and explains why the intermediate phases are what make that freeze possible.

===

## How These Phases Were Discovered

The phases were not invented. They were discovered through systematic gap analysis — the same methodology that drives every stage of the design pipeline. A gap analyst read every planning document, every handoff, every research synthesis, and asked a single question: **what assumptions does "Migration" make about infrastructure that does not yet exist?**

The answer was stark. Migration assumes:

1. That validated patterns exist as implementable code, not just prose descriptions. They do not.
2. That someone has inventoried and classified every page that needs migrating. Nobody has.
3. That a comprehensive migration process exists covering all four design dimensions. It does not — the existing guide covers CSS conversion only.
4. That the end-to-end process has been tested on real content. It has not.
5. That pilot learnings have been incorporated into the process. There has been no pilot.

Each assumption mapped to a missing phase. The gap analysis also identified two optional phases (tooling and training) and confirmed that one anticipated gap (token implementation) is already mostly covered. But the five core phases are unanimously "DEFINITELY NEEDED" — they block quality migration.

The key insight: these phases are not bureaucratic overhead. They are the infrastructure that makes the user's non-negotiable requirement achievable. The user said: "Once we start migrating actual documentation pages, I don't want to have to update the design system." Without the intermediate phases, migration would inevitably discover gaps that force design system updates, violating that constraint. With them, the system is exhaustively prepared before migration begins.

===

## The Abstraction Cliff Problem

Before describing the phases themselves, it is essential to understand the problem they solve.

The KortAI design pipeline has produced an extraordinary body of design intelligence:

| Asset | Volume |
|---|---|
| Research findings | 84+ (21 COMP-F, 18 DD-F, 17 OD-F, 28 AD-F, plus 337 raw R-1 through R-5) |
| Validated patterns | 20 (6 density, 6 organizational, 6 axis, 2+ combination) |
| Soul pieces | 5 (sharp edges, serif accents, warm palette, no shadows, square signals) |
| Combination rules | 4 (velocity, temperature, weight, spacing) |
| Transition grammar | 5x5 matrix (AD-F-025) |
| Meta-discovery | 3-way equivalence: axis = organization = density = ATTENTION TOPOLOGY (AD-F-023) |
| Convention specs | ~2,000+ lines across DD/OD/AD |
| HTML explorations | 24 files (6 per stage), ~600-800KB total |

This body of knowledge exists as:

- Prose findings in markdown files (~15,000+ lines)
- HTML exploration artifacts with hand-crafted inline CSS
- Formal provenance chain documents (~50+ files)
- Convention specifications

Between this body of knowledge and "a migrated documentation page in React/Next.js," there is a **chasm**. The findings describe WHAT patterns look like and WHY they work. They do not describe HOW to implement them against real content in a real codebase.

### The Risk Scenario Without Intermediate Phases

Here is what happens if migration begins immediately after CD:

1. CD completes. The handoff says "apply patterns to real pages."
2. A migration agent reads the handoff, the 20 patterns, the combination rules, the transition grammar.
3. The agent opens a real documentation page — say, a Getting Started guide with 4 h2 headings, 6 code blocks, 3 callouts, and a file tree component.
4. The agent knows it should use CRESCENDO + NARRATIVE + F-PATTERN + combination recipe 2.
5. The agent knows `border-radius: 0` and `box-shadow: none`.
6. The agent does NOT know how to translate "F-PATTERN vertical descent" into React JSX for a page that currently has this specific constellation of content elements.
7. The agent falls back to the only concrete thing it can implement: "apply soul tokens, keep existing structure."
8. **Result:** The page "passes" the 265-line migration-guide.md checklist — correct colors, correct fonts, no rounded corners, no shadows. But it uses 0% of the organizational research (OD), 0% of the spatial research (AD), and 0% of the combination research (CD). It is a soul-compliant page with no information architecture redesign.

This is the **abstraction cliff**: the gap between design intelligence and implementation. The page looks "correct" in the narrow sense — it passes the CSS checklist — but feels wrong because the content architecture was never redesigned. The research that proved different content types demand fundamentally different reading experiences (the 3-way equivalence, the density patterns, the axis geometries) was never applied.

The five intermediate phases exist specifically to build the bridge across this cliff. They turn "read 15,000 lines of provenance documentation" into "follow this recipe and apply this template."

===

## Phase B: Component Extraction + Pattern Library

### The Printing Press

**Consumes:** 30 HTML explorations (6 DD + 6 OD + 6 AD + 6 CD), all pattern documentation, combination rules, transition grammar
**Produces:** Reusable layout primitives, pattern picker decision tree, implementation recipes, transition components
**Estimated effort:** 6-10 hours (~2 sessions)
**Dependencies:** CD complete (needs combination rules for recipe templates)

This is the most critical missing phase. The written language analogy makes the problem vivid: if DD invented the alphabet, OD discovered word formation, AD discovered that writing direction is part of meaning, and CD wrote the first sentences — then Component Extraction builds the **printing press**. It transforms handwriting into movable type.

### What Exists Today

The explorations are standalone HTML files with hand-crafted CSS. Each one is a one-off artifact — a proof that a particular pattern combination works. They use CSS classes like `.dense-section`, `.geological-layer`, `.crescendo-phase` that exist only within that single file. The docs-spa, meanwhile, uses React components like `<Callout type="info">` in a Next.js application. There is no bridge between "validated exploration patterns" and "reusable components that implement those patterns."

The DESIGN-SYSTEM/patterns/ directory contains density-patterns.md, organizational-patterns.md, and combination-rules.md. These are documentation files — they describe patterns in prose, not in implementable code. PATTERN-INDEX.md maps content types to patterns (Tutorial -> PULSE, Reference -> Islands), but it does not show HOW to implement PULSE in a React page.

### What Extraction Produces

| Deliverable | Description |
|---|---|
| Layout primitives | CSS/HTML structures encoding the 6 density patterns (CrescendoSection, PulseSection, IslandsSection, GeologicalSection, TidalSection, FractalContainer) |
| Transition components | Implementations of AD-F-025 (SmoothTransition, BridgeTransition, BreathingTransition) — the connective tissue between sections |
| Combination recipe templates | R-5's validated recipes as copyable HTML/CSS structures, confirmed by CD empirical testing |
| KortAI page template | A reusable base with soul-compliant defaults (border-radius: 0, box-shadow: none, correct fonts, warm cream background) |
| Pattern picker decision tree | Content Type -> Pattern Set -> Implementation Template — the lookup system that makes pattern selection semi-automatic |
| Per-pattern documentation | "Copy this structure" blocks for each layout, with annotations explaining which findings each structure implements |

### What Extraction Does NOT Produce

It does not produce full React components — that is the existing docs-spa component library's responsibility. It does not make new design decisions — all patterns come from validated explorations. It extracts and formalizes what already exists but currently lives only as hand-crafted HTML in standalone files.

### Why It Matters

Without extraction, each migrated page reinvents layout patterns from scratch. A migration agent reads exploration HTML source code and tries to translate it. This is error-prone (the agent may misunderstand the pattern), slow (pattern implementation from scratch for every page), and inconsistent (different agents implement the same pattern differently). With extraction, migration agents apply pre-built layout primitives. The patterns are encoded in code, not just described in prose.

The printing press metaphor is precise: you can have a beautiful handwritten manuscript, but to produce a library, you need movable type. The explorations are the manuscripts. The extracted components are the type.

### Risk If Skipped

Migration becomes a manual CSS-by-CSS translation exercise. Each migrated page reinvents the pattern implementation from scratch, with no guarantee of consistency. The 20 validated patterns exist only as HTML artifacts, not as reusable building blocks. The 84+ findings remain documentation artifacts — the "design mind" stays in the documentation, not in the code.

===

## Phase F: Content Analysis

### Reading All the Texts That Need Translation

**Consumes:** CD's pattern vocabulary, PATTERN-INDEX.md, the actual docs-spa pages
**Produces:** Complete page inventory, per-page classification, pattern assignments, complexity estimates, migration priority ranking
**Estimated effort:** 2-4 hours (~1 session)
**Dependencies:** CD complete (needs the full pattern vocabulary for assignment); can partially overlap with Phase B

This phase answers a question that no existing document has addressed: **what are we actually migrating?**

### The Current State

No systematic inventory of existing documentation pages exists. No document says "there are N pages, they are classified as types X, Y, and Z, they should use these patterns." The migration-guide.md's Step 4 says "Identify Content Type" but provides only four mappings (Tutorial -> PULSE, Getting Started -> CRESCENDO, Reference -> Islands, Long-form -> WAVE). After OD and AD established 20 patterns and the 3-way equivalence, content analysis needs to be far more granular.

### What Content Analysis Produces

For every page in docs-spa, this phase creates:

| Field | What It Captures |
|---|---|
| Content type | Primary classification (tutorial, reference, getting started, architecture overview, decision guide, etc.) |
| Secondary types | Hybrid classifications (e.g., tutorial with Q&A tail, reference with conceptual introduction) |
| Pattern triple | Organization + Density + Axis recommendation (e.g., Narrative + CRESCENDO + F-Pattern) |
| Combination recipe | Which CD-validated combination applies |
| Complexity estimate | 1 = simple token swap, 2 = moderate restructuring, 3 = major content architecture rewrite |
| Migration priority | Suggested order (easiest first? Most visible first? Most representative first?) |
| Content gaps | Pages needing new content, not just restyling |
| Escalation candidates | Content types that do not fit any validated pattern |

### The Critical Safety Function

Content analysis serves a safety function that relates directly to the user's non-negotiable. If this phase discovers a content type that no validated pattern covers, this is the **last chance** to resolve it without violating the freeze. Resolution options:

1. Map it to the closest existing pattern (most likely outcome)
2. Identify it as a creative/compound scenario covered by CD-006's compound approach
3. Flag it for content restructuring — change the content structure to fit an existing pattern, rather than changing the design system

All three options satisfy the non-negotiable because none require updating the design system.

### What the Research Revealed About Existing Pages

Initial analysis found that the 75+ docs-spa pages currently follow an identical 8-section HTML template. There are really only 3 structural types in the current implementation: overview/master pages (about 13), deep dive pages (about 59), and core synthesis pages (about 3). But this surface uniformity is misleading. Migration will differentiate them based on CONTENT TYPE — the nature of the information they communicate, the attention shape they demand — not their current template structure. A tutorial and an API reference currently share the same HTML template, but after migration, they will have fundamentally different layouts because their attention topologies are fundamentally different.

### Risk If Skipped

Migration starts without knowing what it is migrating. Teams pick pages randomly, discover mid-migration that some pages need content restructuring (not just style changes), and the effort balloons unpredictably. Worse, content types that do not fit any validated pattern are discovered during migration — when the design system is frozen and cannot be updated.

===

## Phase E: Migration Playbook v2

### The Translation Guide

**Consumes:** Pattern library (Phase B), content analysis (Phase F), all prior findings and convention specs
**Produces:** Two outputs — a Migration Execution Spec and an Ingestion Operational Spec
**Estimated effort:** 3-4 hours (~1 session)
**Dependencies:** Phase B (pattern library provides the implementation recipes) + Phase F (content analysis provides the page inventory)

The existing migration-guide.md is 265 lines covering CSS reset, callout conversion, code block conversion, a 4-type density pattern selection, a verification checklist, and common pitfalls. It was written BEFORE OD, AD, and CD existed. After the 3-way unification discovery (axis = organization = density = ATTENTION TOPOLOGY, AD-F-023), migration is not a CSS conversion. It is a **content architecture redesign** informed by 84+ research findings across four design dimensions.

The playbook replaces the 265-line guide with a comprehensive migration manual.

### Two Outputs

The playbook phase produces two distinct documents:

**1. Migration Execution Spec** (~1,400 lines, comparable to the Master AD Execution Spec)

This is the comprehensive specification for the one-time migration project. It contains:

- Complete 6-phase per-page migration process (Analysis -> Pattern Selection -> Composition Design -> Build -> Perceptual Audit -> Discovery Documentation)
- Decision tree with worked examples for every content type identified in Phase F
- Team structure for parallel migration (Lead + Page Teams + Weaver)
- Quality gates at each phase transition
- Escalation protocol for edge cases
- Post-migration verification checklist covering all four dimensions
- Migration provenance template (the Consumption Receipt format)
- Task decomposition, assignment strategy, and session planning

**2. Ingestion Operational Spec** (~50-100 lines)

This is the lightweight, single-agent specification for processing new documentation pages on an ongoing basis after migration is complete. It is a derivative of the execution spec, stripped to what one agent needs:

```
"You are receiving a new documentation page. Here is what you do:
1. Load these 4 files [paths]
2. Classify this content [rules]
3. Select patterns [lookup table]
4. Compose using these components [library path]
5. Build [conventions ref]
6. Run perceptual audit [skill invocation]
7. Record discoveries [append to file]
8. Output [write here]"
```

The distinction matters: Migration is a PROJECT (one-time, team, heavy oversight). Ingestion is an OPERATION (ongoing, single agent, lightweight). Same pipeline, different execution model. The playbook phase produces both because the operational spec is a natural derivative of the project spec — if you can describe the full project, you can trivially compress it for ongoing single-agent use.

### Why the Existing Guide Is 10% of What Is Needed

The existing guide covers Step 1 of what is actually a 5+ step process. Consider what it says about density patterns: 8 lines, 4 mappings. After AD-F-023 (ATTENTION TOPOLOGY), applying density patterns means simultaneously applying density + organization + axis + combination. This is a fundamentally different task from what those 8 lines describe.

The HANDOFF-AD-TO-CD.md (Section 10.7) explicitly recommends that HANDOFF-CD-TO-MIGRATION include a "PATTERN SELECTION GUIDE for Migration ('given content type X, use combination Y')." The playbook is where this recommendation materializes as a full process specification.

### The Escalation Protocol

The most critical section of the playbook is the escalation protocol — the procedure for what to do when content does not perfectly fit any validated pattern. This is the safety valve that prevents migration from forcing design system updates. The protocol offers four resolution paths, in order of preference:

1. **Content restructuring** — Change the content to fit the pattern. The content structure is not sacred; the pattern is.
2. **Pattern composition** — Combine two patterns using validated combination rules. Most real pages are hybrids, and CD's combination grammar covers this.
3. **Creative interpretation** — Use Level 3 reasoning from the accumulated identity to derive a new application of existing patterns. The accumulated identity teaches HOW TO THINK, not just WHAT TO DO.
4. **Documented exception** — Acknowledge the gap, document why no existing pattern fits, apply the closest match. Accept documented imperfection rather than updating the system.

Option 4 is the pressure release valve. It prevents the non-negotiable from becoming a trap by accepting that some pages may have imperfect pattern coverage — documented imperfection is better than a system update.

### Risk If Skipped

Migration engineers follow the existing 265-line guide, produce soul-compliant CSS, but miss the entire organizational/spatial/combination dimension. Pages look "correct" (sharp edges, no shadows, right colors) but feel wrong because information architecture was never redesigned. This is the abstraction cliff in action — soul-compliant aesthetics with zero research application.

===

## Phase G: Pilot Migration

### Translating a Few Paragraphs to Test

**Consumes:** Playbook (Phase E), content analysis (Phase F), pattern library (Phase B)
**Produces:** 2-3 fully migrated pages, process validation, timing data, discovered edge cases
**Estimated effort:** 3-5 hours (~1 session)
**Dependencies:** Phase E (playbook must exist to follow) + Phase F (content analysis identifies which pages to pilot)

Every prior stage of the pipeline discovered surprises that invalidated assumptions:

- DD discovered the traffic-light anti-pattern
- OD found the 2px border epidemic (108 CSS declarations, 1000+ instances)
- AD found font-loading false positives that made audit findings incorrect
- The comprehensive audit discovered rgba opacity violations across the codebase

Migration will have its own class of surprises. The pilot ensures those surprises are found on 2-3 pages rather than 75.

### Why Specifically 2-3 Pages

One page is too few — you cannot distinguish page-specific issues from systemic ones. Five or more pages starts to feel like "just do the migration" without the benefit of a controlled test. Two to three pages covering different content types provides enough signal to validate the process while remaining small enough to iterate quickly.

The ideal pilot set spans the content type spectrum:

| Pilot Page | Content Type | Pattern Expected | Why This One |
|---|---|---|---|
| Page 1 | Tutorial / Narrative | CRESCENDO + F-Pattern | Most common type; tests the primary pipeline path |
| Page 2 | Reference / Task-Based | ISLANDS + Bento Grid | Tests the alternative topology; fundamentally different layout |
| Page 3 | Hybrid / Creative | Compound patterns | Tests transition grammar and combination rules under real conditions |

### What the Pilot Validates

The pilot answers questions that theory cannot:

- **Does the playbook actually work end-to-end?** Can an agent follow the 6-phase per-page process from analysis to documentation without getting stuck?
- **How long does a single page migration take?** Estimates based on exploration-building times may not hold for real content.
- **Does the printing press produce legible pages?** Do the extracted components compose correctly against real content?
- **What breaks that the theory did not predict?** Real pages have legacy CSS, varying content structures, non-ideal component constellations that explorations never tested.
- **Which findings are easy to apply versus which require interpretation?** Some of the 84+ findings may be trivial to implement; others may require judgment calls that the playbook does not yet cover.

### The Final Quality Gate

The pilot serves as the **final quality gate** before committing to full migration. If the pilot reveals that the design system has a genuine gap:

- This is the last moment to decide whether to resolve it within the existing system (preferred) or make a minimal, targeted design system update (acceptable — the user said "once we start migrating," not "once we start piloting").
- If the pilot is clean — all 2-3 pages migrate without requiring design system changes — the team can proceed to full migration with confidence that the non-negotiable holds.

### Risk If Skipped

The first full migration attempt becomes the de facto pilot, but under production pressure and expectations. Mistakes get baked into the process rather than learned from. Timing estimates are guesses rather than measurements. The playbook's untested assumptions persist across all 75 pages.

===

## Phase H: Playbook Refinement

### Battle-Testing the Process

**Consumes:** Pilot migration results (Phase G), playbook v2 (Phase E)
**Produces:** Playbook v2.1 with pilot learnings, updated time estimates, refined escalation protocol
**Estimated effort:** 1-2 hours
**Dependencies:** Phase G (pilot results must exist to incorporate)

This is the lightest phase, but it closes a critical feedback loop. Every discovery from the pilot migration feeds back into the playbook before that playbook is used at scale. Without this phase, the same mistakes discovered during the pilot repeat across all 75 pages.

### What Gets Refined

| Refinement Area | What Changes |
|---|---|
| Time estimates | Replace theoretical estimates with actual measurements from pilot pages |
| Edge case coverage | Add procedures for specific situations the pilot encountered |
| Escalation protocol | Refine based on whether the pilot actually triggered escalation, and whether the resolution paths worked |
| Verification checklist | Add any audit items the pilot revealed as missing |
| Pattern library feedback | Note any extracted components that needed adjustment during pilot (adjustments to implementation, not to the design system itself) |
| Worked examples | Replace hypothetical examples in the playbook with real examples from the pilot |

### Why It Is a Separate Phase

The refinement could theoretically be folded into the pilot phase itself. It exists as a separate phase for a structural reason: it marks the **transition boundary**. Before Phase H, the design system (including the playbook and pattern library) can still evolve. After Phase H, everything freezes. Giving refinement its own phase ensures the pilot learnings are fully processed before the freeze takes effect.

===

## The Freeze Line

### Where the Design System Stops Changing

```
Phase A:  CD (Combination Dimension)
Phase B:  Component Extraction + Pattern Library
Phase F:  Content Analysis
Phase E:  Migration Playbook v2
Phase G:  Pilot Migration
Phase H:  Playbook Refinement

═══════════════════════ FREEZE LINE ═══════════════════════
   After this point, the design system is FROZEN.
   No new tokens. No new patterns. No soul changes.
   Everything below uses ONLY what exists above.
═══════════════════════════════════════════════════════════

Phase I+J: Full Migration + Verification
```

The freeze line is not a suggestion. It is the user's non-negotiable requirement: "Once we start migrating actual documentation pages, I don't want to have to update the design system or anything like it. I want all this work, all these layerings, all these weeks of work to be what it is."

### What Is Frozen

After Phase H, the following cannot change:

- Token values (colors, spacing, typography, geometry)
- Soul pieces (5, bounded: sharp edges, serif accents, warm palette, no shadows, square signals)
- Pattern definitions (all 20+ across density, organizational, axis, combination)
- Finding IDs and their meanings (all DD-F, OD-F, AD-F, CD-F entries)
- Convention specs (all sections across all stages)
- Anti-pattern registry
- Transition grammar (5x5 matrix, AD-F-025)
- Fractal scale model (5 scales, bounded)
- ACCUMULATED-IDENTITY-v3 (the terminal identity document)

### What Is NOT Frozen

The following can evolve during migration:

- Implementation details (CSS class names, HTML structures, component internals)
- Playbook wording and examples (refinements to HOW instructions are expressed)
- Content analysis assignments (a page can be re-classified if initial classification was wrong)
- Migration priority order
- Verification checklists (items can be added, not removed)
- Provenance documentation format
- Application notes and MIG-F findings (documenting how existing patterns apply to real content)

The distinction is precise: **WHAT the system says** is frozen. **HOW we implement and document what the system says** can evolve.

### Why the Intermediate Phases Make the Freeze Possible

Without the five phases, migration would inevitably encounter situations where the design system has gaps. The only options would be to update the system (violating the freeze) or produce shallow output (wasting the research). The intermediate phases prevent this by:

1. **Component Extraction** ensures patterns are implementable, not just documented
2. **Content Analysis** ensures every content type maps to a validated pattern before migration begins
3. **Migration Playbook** ensures the process is comprehensive, with an escalation protocol for edge cases
4. **Pilot Migration** proves the system is complete on real content
5. **Playbook Refinement** incorporates real-world learnings before the freeze

Each phase systematically eliminates a class of gap that would otherwise surface during migration. By the time the freeze line is crossed, the system has been tested, translated into code, mapped to all content, validated on real pages, and refined from pilot learnings. The freeze is achievable because the preparation is exhaustive.

===

## Phase I+J: Full Migration + Verification

### Translating the Library

**Consumes:** Refined playbook (Phase H), pattern library (Phase B), content analysis (Phase F)
**Produces:** All 75+ pages migrated, per-page provenance, soul compliance verification, MIG-F findings
**Estimated effort:** 15-40 hours (~3-8 sessions)
**Dependencies:** Phase H (refined playbook)

Full migration is the destination, not a single phase. Every page goes through the 6-phase per-page pipeline documented in `03-MIGRATION-PIPELINE.md`. Verification is integrated into each page's migration cycle (Phase E of the per-page process: Perceptual Audit), not a separate post-migration sweep.

### Team Structure at Scale

| Page Count | Topology |
|---|---|
| 1-3 pages | Single agent, all 6 phases sequentially |
| 4-10 pages | Lead + 2-3 Page Teams (Analyst + Builder + Auditor each) + Weaver |
| 11-30 pages | Lead + Captains (groups of 3-4 Page Teams) + Weaver |
| 30+ pages | Hierarchical: Lead -> Captains -> Page Teams -> Weaver cascade |

The Weaver role — validated across six prior agent teams — synthesizes cross-page MIG-F findings. Page 47 benefits from pages 1-46 because the Weaver surfaces emerging patterns, and page teams can reference prior Consumption Receipts.

### The Compounding Effect

Migration is not 75 independent page conversions. It is a compounding process:

- **Page 1:** Pure vocabulary application. No prior migration data.
- **Page 5:** Vocabulary + 3 refinements from pages 1-4.
- **Page 15:** Vocabulary + 8 refinements + 1 extension (e.g., a new combination recipe discovered on page 12).
- **Page 50:** Vocabulary + 20 refinements + 3 extensions + 2 new recipes.

The design system's effective vocabulary GROWS with every page — not because the system is updated (the freeze holds), but because each Consumption Receipt documents how existing patterns apply to real content, building a reference library for subsequent pages. This is the same compounding mechanism that made DD -> OD -> AD work: research begets findings, findings beget constraints, constraints beget creative solutions.

### What Full Migration Produces

| Deliverable | Description |
|---|---|
| 75+ migrated pages | Each implementing its assigned pattern triple from content analysis |
| Per-page Consumption Receipts | Provenance documentation citing which findings were applied |
| MIG-F findings | Per-page discoveries (new applications of existing patterns) |
| Soul compliance verification | 0 violations across all pages (binary: pass/fail) |
| Pattern fidelity verification | Each page implements its assigned pattern correctly |
| Fractal self-similarity confirmation | 5-scale verification per page |
| Updated RESEARCH-ACTIVE.md | Pattern usage counts showing which findings were most/least applied |
| Migration completion certificate | Formal statement of completion |

===

## Complete Phase Sequence with Dependencies

```
Phase B: Component Extraction + Pattern Library  ──────────────────┐
   Consumes: 30 explorations, pattern docs, combination rules      │
   Produces: Layout primitives, pattern picker, recipes             │
   Effort: 6-10 hours                                              │
   Depends on: CD complete                                         │
                                                                   │
Phase F: Content Analysis  ───────────────────────────────────┐    │
   Consumes: CD pattern vocabulary, docs-spa pages            │    │
   Produces: Page inventory, classifications, assignments      │    │
   Effort: 2-4 hours                                          │    │
   Depends on: CD complete                                    │    │
   Can overlap with: Phase B (partial)                        │    │
                                                              │    │
Phase E: Migration Playbook v2  ──────────────────────────┐   │    │
   Consumes: Pattern library (B), content analysis (F)    │   │    │
   Produces: Execution spec + operational spec            │   │    │
   Effort: 3-4 hours                                      │   │    │
   Depends on: Phase B + Phase F                          │   │    │
                                                          v   v    v
Phase G: Pilot Migration  ────────────────────────────────────────────┐
   Consumes: Playbook (E), content analysis (F), pattern library (B) │
   Produces: 2-3 migrated pages, process validation, timing data     │
   Effort: 3-5 hours                                                 │
   Depends on: Phase E + Phase F                                     │
                                                                     │
Phase H: Playbook Refinement  ───────────────────────────────────────┘
   Consumes: Pilot results (G)
   Produces: Playbook v2.1, updated estimates, refined protocols
   Effort: 1-2 hours
   Depends on: Phase G

═══════════════════════ FREEZE LINE ═══════════════════════

Phase I+J: Full Migration + Verification
   Consumes: Everything above
   Produces: 75+ migrated pages with full provenance
   Effort: 15-40 hours
   Depends on: Phase H
```

### Critical Path

The critical path is strictly sequential:

```
CD -> Component Extraction -> Playbook v2 -> Pilot -> Refinement -> Full Migration
```

Content Analysis can partially overlap with Component Extraction — classification can start while the library is being built, because classification needs CD's pattern vocabulary (which exists) but does not need the implementation templates (which extraction produces). Full pattern assignment, however, requires the library.

### Time Budget Summary

| Phase | Hours (Estimated) | Sessions | Cumulative |
|---|---|---|---|
| B: Component Extraction + Pattern Library | 6-10 | 2 | 6-10 |
| F: Content Analysis | 2-4 | 1 (partial overlap with B) | 8-12 |
| E: Migration Playbook v2 | 3-4 | 1 | 11-16 |
| G: Pilot Migration | 3-5 | 1 | 14-21 |
| H: Playbook Refinement | 1-2 | (included in G session) | 15-23 |
| **Subtotal (pre-freeze)** | **15-25** | **~4-5** | |
| FREEZE LINE | | | |
| I+J: Full Migration + Verification | 15-40 | 3-8 | 30-63 |
| **Total (post-CD)** | **30-65** | **7-13** | |

These estimates will be refined by the pilot migration (Phase G), which provides the first real timing data.

===

## The Honest Bottom Line

Between CD completion and full migration, there are 15-25 hours of preparation work across 5 phases. This is not bureaucratic overhead. It is not process for the sake of process. It is the **infrastructure that makes the non-negotiable achievable**.

The metaphor is clear: you cannot translate a library from one language to another by handing translators a grammar textbook and a dictionary and saying "begin." You need a printing press (component extraction), a catalogue of every book in the library (content analysis), a translation guide with worked examples (the playbook), a test translation of a few chapters (the pilot), and a refined guide incorporating what the test translation revealed (playbook refinement). Only then can you translate at scale with confidence that you will not need to revise the grammar mid-project.

That is what these five phases build. Skip them, and migration degrades to CSS reskinning — soul-compliant aesthetics applied over untouched information architecture, using zero percent of the design research accumulated across four stages, 84+ findings, and thousands of hours of agent work. Build them, and migration becomes what it was always meant to be: the moment when the KortAI design mind expresses itself through every page of real documentation, producing 75 siblings who share DNA but have distinct faces.

===

*Sources: _SOURCE-BRIEF.md (Section 2), 07-gap-analysis.md (284 lines), 09-complete-roadmap.md (568 lines), 10-MIGRATION-SYNTHESIS.md (780 lines). All phase definitions, time estimates, and dependency chains derived from systematic gap analysis across these source documents.*
