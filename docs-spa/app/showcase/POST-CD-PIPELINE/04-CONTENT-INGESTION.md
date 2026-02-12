# 04 — Content Ingestion: New Content and the Operational Wrapper

**Document:** POST-CD-PIPELINE/04-CONTENT-INGESTION.md
**Purpose:** Explains how new content enters the design system pipeline after migration, defines the operational wrapper concept, and draws the critical distinction between migration (project) and ingestion (operation).
**Sources:** _SOURCE-BRIEF.md (Sections 4, 5, 6), 10-MIGRATION-SYNTHESIS.md (Sections 5, 6, 8), 08-cd-evolution.md (Sections 5, 8)

---

## The Foundational Insight: The Pipeline Input Is Content, Not HTML

Everything in this document follows from one principle: the design system pipeline does not restyle existing pages. It reads content -- the meaning, structure, and purpose of what is being communicated -- and expresses that meaning through the visual language.

A page entering the pipeline is not a CSS reskinning exercise. It is a translation. The agent reads what the content IS ("this is a step-by-step tutorial with a troubleshooting tail"), classifies its attention topology, selects patterns, composes components, builds, audits, and documents. The input is meaning. The output is that meaning expressed through density rhythms, organizational patterns, axis geometries, and combination grammar.

This distinction matters because it answers the most common question about post-migration life: what happens when someone writes a NEW documentation page?

The answer: almost nothing changes. The pipeline is the same. The only difference is where the content comes from.

---

## What Changes for New Content vs. Existing Content

### The Short Answer: Almost Nothing

The six-phase per-page pipeline (see `03-MIGRATION-PIPELINE.md`) applies identically to new and existing content. Every page -- whether it was written in 2024 or written yesterday -- enters at Phase 1 (Page Analysis) and exits at Phase 6 (Discovery Documentation). The pipeline does not ask when the content was written. The printing press does not ask when the manuscript was composed.

### The Only Difference: Step Zero

The distinction lives entirely in what happens BEFORE Phase 1:

**Existing content (migration):** The content already exists as HTML, markdown, or MDX in the docs-spa repository. The agent reads what is there, strips the presentational layer, and works with the underlying meaning.

**New content (ingestion):** Someone -- a human author, a CMS, an API, a content generation process -- writes the content first. It might arrive as markdown, plain text, or structured data. Then it enters the same pipeline at Phase 1.

That is the entire difference. From Phase 1 onward, the pipeline is identical. Classification does not depend on whether the content is new or old. Pattern selection does not depend on when the content was authored. The design system reads content the way a translator reads text -- the date of authorship is irrelevant to the translation.

### Why This Works

The design system is a complete visual language. It has an alphabet (density patterns from DD), words (organizational patterns from OD), writing direction as meaning (axis geometries from AD), and grammar (combination rules from CD). A complete language can express any thought in its domain without changing.

English did not need new letters when the internet was invented. It did need new words -- blog, tweet, hashtag -- but the alphabet, grammar, and syntax stayed the same. The design system works the same way. A new documentation page about a technology that did not exist when the system was built still describes one of the fundamental content types: it is a tutorial, a reference, a conceptual overview, a decision guide, a map, or a hybrid. The content is new. The attention topology it requires is not.

What the system discovers through new content is not new rules but new applications. "Here is how CRESCENDO + F-Pattern works for a WebSocket tutorial" is a new sentence in the language, not a new grammatical rule. It expands the documented recipes without touching the system itself.

---

## Migration vs. Ingestion: Two Operational Modes

The pipeline has two operational modes. They share the same six phases, the same pattern vocabulary, and the same quality gates. They differ in scale, oversight, and organizational context.

### Migration Is a Project

Migration is the one-time campaign to bring all existing documentation pages (~75+ pages) through the pipeline. It has a defined scope, a known volume, a team structure, a timeline, and a completion criteria. It is a project with a beginning and an end.

Migration looks like this:
- A lead orchestrator assigns pages to teams
- Multiple page teams work in parallel (Analyst + Builder + Auditor per page)
- A weaver synthesizes cross-page discoveries
- Heavy review at every gate -- because this is the first time the pipeline processes real content at scale
- Discoveries feed back into the playbook itself (playbook refinement)
- The whole campaign takes 15-40 hours across 3-8 sessions

### Ingestion Is an Operation

Ingestion is the ongoing process of bringing new pages into the design system after migration completes. It has no defined scope, no known volume, and no end date. It is an operation -- a repeatable process that runs whenever new content appears.

Ingestion looks like this:
- A single agent loads the operational spec
- The agent processes one page through the six-phase pipeline
- Lighter review -- because the pipeline has been validated by migration and pilot testing
- Discoveries append to application notes (they do not change the system)
- The process takes 45-90 minutes per page

### The Comparison

| Dimension | Migration (Project) | Ingestion (Operation) |
|-----------|--------------------|-----------------------|
| **Volume** | ~75 pages, known upfront | Unknown, one page at a time |
| **Oversight** | Full team, heavy review at every gate | Lightweight, single agent with spot checks |
| **Consistency** | All pages done in one campaign with shared context | Must match pages done weeks or months ago |
| **Context** | Full accumulated identity loaded across the team | Must load the same context cold from documentation |
| **Discovery** | Feeds back into the playbook (refinement loop) | Feeds into application notes only |
| **Team Structure** | Lead + Page Teams + Weaver (hierarchical) | Single agent (flat) |
| **Duration** | 15-40 hours total (3-8 sessions) | 45-90 minutes per page |
| **Completion** | Defined end state (all pages migrated) | No end state (runs as long as new content appears) |
| **Error Impact** | Caught by cross-page weaver and audit teams | Must be caught by the single agent's self-audit |

### Why the Distinction Matters

The distinction matters because each mode needs a different specification document. Migration needs a comprehensive execution spec with team topology, task decomposition, dependency management, and inter-agent coordination. Ingestion needs a compact operational spec that a single agent can load, understand, and execute without coordination overhead.

Building only one of these documents creates a mismatch. A 1,400-line migration spec is overkill for a single agent processing one new page. A 50-line operational spec is dangerously insufficient for coordinating a 15-agent migration team across 75 pages.

---

## The Operational Wrapper Concept

### The Pipeline Is Emergent, Not Separate

The post-CD pipeline is not a piece of software to be built. It is an emergent property of the phases that precede it. Each post-CD phase produces a piece of the pipeline:

| Phase | What It Produces | Pipeline Piece |
|-------|-----------------|----------------|
| Component Extraction (B+D) | Reusable layout primitives, pattern library | Building blocks |
| Content Analysis (F) | Page inventory with classifications | Classification engine |
| Migration Playbook (E) | Process specification with decision trees | Process definition |
| Pilot Migration (G) | Worked examples, validated process | Reference implementations |
| Playbook Refinement (H) | Battle-tested version of the process | Final process |

When all five phases are complete, the pipeline EXISTS. There is no separate "assemble the pipeline" phase. The pipeline is the combination of extracted components + classification rules + process specification + worked examples + refined instructions. An agent loading these artifacts BECOMES the pipeline.

### Who Executes the Pipeline?

The pipeline is not software with an entry point. It is a Claude instance with the right context. An agent loads the playbook, the accumulated identity, the pattern library, the component library, and the perceptual audit methodology -- and it becomes capable of executing the pipeline on any content.

This is the operational wrapper: not code, but context. Not a program, but a specification that tells an agent exactly what to load, what to do, and in what order.

### The ~50-100 Line Operational Spec

After migration, ongoing ingestion needs a lightweight specification. Not the full 1,400-line migration execution spec -- that was for coordinating a team across 75 pages. For a single agent processing a single new page, the specification looks like this:

```
You are receiving a new documentation page. Here is what you do:

1. Load these 4 files:
   - [Accumulated Identity v3 path]
   - [Pattern Library index path]
   - [Combination Rules path]
   - [Perceptual Audit methodology path]

2. Read the content. Classify it:
   - What is this page's job? (tutorial, reference, conceptual, etc.)
   - What content components does it contain? (code blocks, callouts, tables, etc.)
   - What attention topology does it need?

3. Select patterns using the lookup table:
   - Content type -> Organization + Density + Axis triple
   - For hybrid pages: classify per-section, apply transition grammar

4. Compose using these components:
   - Apply the 4 combination rules (velocity, temperature, weight, spacing)
   - Check against the 7 anti-patterns
   - [Component library path]

5. Build using conventions:
   - [Convention spec path]
   - Soul compliance: border-radius: 0, box-shadow: none, correct fonts

6. Run perceptual audit:
   - 7-gate protocol, 28 questions
   - Check at 1440px AND 768px
   - If any gate fails, return to step 4

7. Record discoveries:
   - Append application notes to [application notes path]
   - Write Consumption Receipt

8. Output:
   - Write the migrated page to [output path]
   - Write the Consumption Receipt to [receipts path]
```

This is not a separate deliverable requiring a new phase. It is a natural output of the Playbook Refinement phase (Phase H). The migration execution spec is written first (comprehensive, team-oriented). The ingestion operational spec is derived from it (lightweight, single-agent). Both emerge from the same process understanding.

---

## Two Outputs from the Playbook Phase

Phase E (Migration Playbook v2) produces two distinct documents:

### 1. Migration Execution Spec (~1,400 lines)

This is the comprehensive specification for the one-time migration project. Comparable in scale and purpose to the Master AD Execution Spec that governed the AD phase. It contains:

- Team structure and topology (Lead + Page Teams + Weaver)
- Task decomposition (which pages, in what order, with what dependencies)
- Per-page process specification (the six phases in full detail)
- Quality gates and verification procedures
- Inter-page coordination protocols (what happens when page 23 discovers something that affects page 7)
- Escalation procedures (what to do when content resists its assigned pattern)
- Discovery documentation format (MIG-F finding structure, Consumption Receipt template)
- Cross-page consistency checks
- Completion criteria

This document is consumed by the migration team lead. It governs a multi-session, multi-agent campaign. It is too large and too coordination-heavy for a single agent processing one page.

### 2. Ingestion Operational Spec (~50-100 lines)

This is the lightweight specification for ongoing content processing. It is a derivative of the migration execution spec, stripped down to what a single agent needs to process a single page without coordination overhead. It contains:

- What files to load (4-5 paths)
- The six-phase process in compressed form
- The pattern lookup table (content type -> pattern triple)
- The quality checklist (abbreviated from the full audit protocol)
- Where to write output and discovery notes

This document is consumed by any future agent that needs to process new content. It is self-contained: an agent loading this spec and the referenced files has everything it needs. No team lead, no weaver, no cross-page coordination.

### The Relationship Between Them

The ingestion spec is not a separate creation. It is the migration spec with the team coordination, batch management, and cross-page synthesis stripped away. The core process -- the six phases that every page goes through -- is identical in both documents. The difference is organizational, not procedural.

Think of it this way: the migration execution spec is the recipe book for a restaurant kitchen (roles, stations, timing, coordination). The ingestion operational spec is the same recipe written for a home cook (one person, one dish, same technique).

---

## What Grows vs. What Stays Frozen

The design system freeze after Phase H is absolute for the system itself. But the system's DOCUMENTED APPLICATIONS grow indefinitely. Understanding this distinction is essential for understanding how ingestion works over time.

### What Stays Frozen (The System)

These elements are locked after Phase H and do not change during migration or ingestion:

- **Token values** -- colors, spacing, typography, border-radius, box-shadow
- **Soul pieces** -- 5 pieces (sharp edges, archivist serif, warm palette, no shadows, square signals), bounded
- **Pattern definitions** -- all 20 across density, organization, axis, and combination dimensions
- **Finding IDs and their meanings** -- DD-F, OD-F, AD-F, CD-F findings
- **Convention spec** -- all sections, finalized
- **Anti-pattern registry** -- what to avoid
- **Transition grammar** -- the matrix for pattern-to-pattern transitions
- **Accumulated Identity v3** -- the terminal identity document

### What Grows (The Application Layer)

These elements expand with every page processed, whether during migration or ingestion:

- **Application notes** -- "CRESCENDO + F-Pattern works well for 6-step tutorials with code-heavy climax"
- **Documented recipes** -- new sentences in the language, not new grammar ("Diff Sandwich: code/reasoning/code for before/after patterns")
- **Consumption Receipts** -- per-page provenance records documenting which patterns were applied and why
- **MIG-F findings** -- discoveries about how existing patterns apply to specific content scenarios
- **Edge case documentation** -- "12-scenario troubleshooting guides outgrow PULSE; use GEOLOGICAL stratified by severity"
- **Classification refinements** -- better heuristics for which content type label fits which real-world page

### The English Analogy

English did not need new letters for the internet. The 26 letters, the grammatical rules, the syntactic structures all stayed the same. But English DID create new words -- blog, tweet, selfie, hashtag. These are not grammar changes. They are vocabulary expansions that use existing grammar.

The design system works identically. The alphabet (density patterns), grammar (combination rules), and writing direction (axis geometries) are frozen. But the documented vocabulary of applications grows. Page 1 processed through the pipeline is pure vocabulary application -- using existing patterns with no prior real-world reference. By page 50, the agent has 49 Consumption Receipts showing how those patterns were applied in practice, 20 application refinements, 3 recipe extensions, and 2 new "words" (documented component combinations that work well for specific content scenarios).

The system does not change. Its demonstrated capabilities expand forever. This is the difference between a language and a frozen specification: a language is alive precisely because its grammar is stable enough that new speakers can use it to say things the original speakers never imagined.

### Why This Matters for Ingestion

An ingestion agent processing a new page six months after migration benefits from every page that came before it. Not because the system was updated -- it was not -- but because the application notes, recipes, and Consumption Receipts provide worked examples for every content type encountered so far. The agent loading the operational spec also loads the accumulated application notes, gaining the practical wisdom of every prior page without any system change.

Page 1 of migration is the hardest. Page 75 is the easiest. Page 76 (the first ingestion) is easier still, because it inherits ALL of migration's documented applications. Page 100 is easier than page 76 for the same reason.

The compounding effect is not accidental. It is the same mechanism that made DD -> OD -> AD -> CD work. Research begets findings. Findings beget constraints. Constraints beget explorations. Explorations beget more research. Migration and ingestion continue this chain -- not by changing the system, but by accumulating documented applications of the system.

---

## Why a Complete Language Can Express Any New Thought

A natural language achieves universality not through infinite rules but through finite rules that combine infinitely. English has 26 letters, roughly 8 parts of speech, and a handful of syntactic structures. From these finite elements, it can express any thought -- including thoughts about technologies, concepts, and experiences that did not exist when the language was formalized.

The design system achieves the same universality through the same mechanism:

- **7 density patterns** (DD) -- the finite rhythm alphabet
- **6 organizational patterns** (OD) -- the finite word types
- **6 axis patterns + compound** (AD) -- the finite spatial geometries
- **4 combination rules + transition grammar** (CD) -- the finite grammar

These finite elements combine to produce an effectively infinite space of page designs. A new documentation page about quantum computing, container orchestration, or any technology that did not exist during the exploration phases still describes a content type (tutorial, reference, conceptual, decision guide, map, or hybrid). That content type maps to a pattern triple (organization + density + axis). That pattern triple produces a specific visual expression through the combination grammar.

The system does not need to anticipate every possible content topic. It needs to anticipate every possible content STRUCTURE -- and the exploration phases have done exactly that. The six content types cover the space of "how humans organize technical knowledge." A page that does not fit any of the six types is either genuinely novel (in which case it is a Level 3 engagement -- the agent uses accumulated identity reasoning to make a new decision consistent with prior ones) or it is a hybrid (in which case the transition grammar handles the per-section pattern shifts).

This is why the freeze guarantee works. The system is not frozen prematurely. It is frozen at the point of linguistic completeness -- when the alphabet, words, grammar, and writing direction are all established. Freezing a language at completeness is not a limitation. It is what makes the language usable.

---

## Practical Implications for Post-Migration Life

### When Someone Writes a New Page

1. The new content is written (by a human, CMS, or generation process)
2. An agent loads the ingestion operational spec (~50-100 lines)
3. The agent loads the referenced files (accumulated identity, pattern library, combination rules, audit methodology)
4. The agent loads the accumulated application notes (Consumption Receipts from all prior pages)
5. The agent runs the six-phase pipeline on the new content
6. The agent writes the processed page and a Consumption Receipt
7. The Consumption Receipt joins the application notes, benefiting the next page

Total time: 45-90 minutes. Total coordination: none. Total design system changes: zero.

### When the System Encounters Content It Has Not Seen Before

The accumulated identity (v3) provides reasoning, not just rules. When rules do not cover a case, the reasoning still does. An agent encountering a genuinely novel content structure uses Level 3 engagement: it reads the accumulated identity, understands HOW the system thinks (not just WHAT it prescribes), and makes a new decision consistent with prior decisions.

The decision is documented as an application note. If similar content appears again, the application note serves as precedent. Over time, the application notes build a common law of design decisions -- each one grounded in the system's reasoning, each one extending the documented applications without touching the system itself.

### When a Gap Is Discovered

If ingestion reveals a genuine gap -- a content type that no combination of existing patterns handles, a component that the system has no specification for -- the protocol is:

1. Document the gap as an application note
2. Apply a best-effort solution using existing patterns and accumulated identity reasoning
3. Note the gap for potential future system revision (post-freeze consideration)
4. Do NOT block the page on a system update

This escape valve honors the freeze guarantee while acknowledging that no system, however complete, can anticipate every edge case. The system is complete enough that gaps will be rare. When they occur, the documentation ensures they are visible and trackable.

---

## Summary

The post-CD pipeline handles new content the same way it handles existing content. The six-phase process is identical. The pattern vocabulary is identical. The quality gates are identical. The only difference is operational context: migration is a project (one-time, team, heavy oversight), ingestion is an operation (ongoing, single agent, lighter oversight).

The pipeline is not software to be assembled. It is an emergent property of the post-CD phases. An agent with the right context -- the accumulated identity, the pattern library, the combination rules, the audit methodology -- IS the pipeline. The operational wrapper is not code but specification: a 50-100 line document telling the agent what to load and what to do.

The design system is frozen. Its documented applications are not. Every page processed through the pipeline -- whether during migration or ingestion -- expands the system's demonstrated capabilities without changing its rules. A complete language does not need new grammar to express new thoughts. It needs new speakers using existing grammar in new contexts. That is exactly what content ingestion does.
