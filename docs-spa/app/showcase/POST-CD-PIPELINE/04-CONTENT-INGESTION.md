<!-- ═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/POST-CD-PIPELINE/04-CONTENT-INGESTION.md
Tier: C | Batch: 5 | Generated: 2026-02-06 | UPDATED: 2026-02-13

1. WHY THIS EXISTS
Defines how new content enters the design system pipeline after migration
completes. Explains the two-track ingestion model (Track 1 assembly vs Track 2
composition), the unified pipeline gate (Addition Test + BECAUSE test), and
operational wrapper concept for both migration and ongoing content processing.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| _SOURCE-BRIEF.md                        | Sections 4, 5, 6                      |
| 10-MIGRATION-SYNTHESIS.md               | Sections 5, 6, 8                      |
| 08-cd-evolution.md                      | Sections 5, 8                         |
| 01-skill-integration-map.md             | Phase B classification, Track 1/2 split|
| 04-impact-assessment.md                 | Timeline, Track 2 percentage estimate  |
| 06-synthesis.md                         | Two-track reality, guardrails         |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Phase E (Playbook)                      | Ingestion operational spec derivation  |
| Future content authors                  | Understanding how new pages enter      |
| Migration planning                      | Distinguishing project vs operation    |

END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════ -->

# 04 — Content Ingestion: New Content and the Two-Track Operational Model

**Document:** POST-CD-PIPELINE/04-CONTENT-INGESTION.md
**Purpose:** Explains how new content enters the design system pipeline after migration, defines the two-track ingestion model (Track 1 assembly vs Track 2 composition), and clarifies the distinction between migration (project) and ingestion (operation).
**Sources:** _SOURCE-BRIEF.md (Sections 4, 5, 6), 10-MIGRATION-SYNTHESIS.md (Sections 5, 6, 8), 08-cd-evolution.md (Sections 5, 8), pipeline evolution research (01-skill-integration-map.md, 04-impact-assessment.md, 06-synthesis.md)

---

## The Foundational Insight: The Pipeline Input Is Content, Not HTML

Everything in this document follows from one principle: the design system pipeline does not restyle existing pages. It reads content -- the meaning, structure, and purpose of what is being communicated -- and expresses that meaning through the visual language.

A page entering the pipeline is not a CSS reskinning exercise. It is a translation. The agent reads what the content IS ("this is a step-by-step tutorial with a troubleshooting tail"), classifies its attention topology, selects patterns, composes components, builds, audits, and documents. The input is meaning. The output is that meaning expressed through density rhythms, organizational patterns, axis geometries, and combination grammar.

This distinction matters because it answers the most common question about post-migration life: what happens when someone writes a NEW documentation page?

The answer: almost nothing changes. The pipeline is the same. The only difference is where the content comes from and which execution track it follows.

---

## What Changes for New Content vs. Existing Content

### The Short Answer: The Six-Phase Process Is Identical

The six-phase per-page pipeline (see `03-MIGRATION-PIPELINE.md`) applies identically to new and existing content. Every page -- whether it was written in 2024 or written yesterday -- enters at Phase 1 (Page Analysis) and exits at Phase 6 (Discovery Documentation). The pipeline does not ask when the content was written. The printing press does not ask when the manuscript was composed.

### The Real Difference: Which Track, Not Whether It Enters

The distinction lives entirely in which execution track the content follows after classification:

**Existing content (migration):** The content already exists as HTML, markdown, or MDX in the docs-spa repository. The agent reads what is there, strips the presentational layer, and works with the underlying meaning. The content goes through Phases 0-2 of the tension-composition pipeline (Content Assessment → Multi-Axis Questioning → Tension Derivation). The pipeline's gate (Addition Test + BECAUSE test + richness scoring) determines:
- **Track 1 (assembly):** No genuine tension, existing components fulfill reader needs → deterministic pattern assembly
- **Track 2 (composition):** Genuine tension identified → invoke full tension-composition skill for metaphor-driven layout generation

**New content (ingestion):** Someone -- a human author, a CMS, an API, a content generation process -- writes the content first. It might arrive as markdown, plain text, or structured data. Then it enters the SAME pipeline at Phase 1, goes through the SAME Phases 0-2 classification, and follows the SAME Track 1 or Track 2 execution path.

That is the entire difference. The pipeline gate is the same. The execution tracks are the same. The quality standards are the same. Only the source of the raw content differs.

### The Key User Insight: Let the Pipeline Decide

Rather than pre-classifying new content as "simple" or "complex" before it enters the pipeline, **every page goes through Phases 0-2 of the tension-composition pipeline**. The pipeline's own gate (Addition Test + BECAUSE test + richness scoring) makes the Track 1 vs Track 2 decision. This approach is more rigorous than manual classification and catches false negatives -- pages that SEEM simple but have latent tension that a metaphor-driven composition could resolve.

**The threshold for Track 2:** Any content with genuine reader tension. This includes:
- Personality (the content has a voice or character)
- Pedagogical intent (the content shapes how the reader FEELS, not just what they know)
- Structural ambiguity (the content's organization is not deterministic -- a tutorial with 6 steps has deterministic structure; an onboarding guide with competing reader goals does not)
- Attention topology complexity (the reader needs to understand relationships, not just consume facts)

If the content is purely informational (API reference, changelog, specification) with no genuine tension, the Addition Test fails → Track 1. If the content has any of the above qualities, the Addition Test passes → Track 2.

### Why This Works: The Design System Is a Complete Language

The design system is a complete visual language. It has an alphabet (density patterns from DD), words (organizational patterns from OD), writing direction as meaning (axis geometries from AD), and grammar (combination rules from CD). A complete language can express any thought in its domain without changing.

English did not need new letters when the internet was invented. It did need new words -- blog, tweet, hashtag -- but the alphabet, grammar, and syntax stayed the same. The design system works the same way. A new documentation page about a technology that did not exist when the system was built still describes one of the fundamental content types: it is a tutorial, a reference, a conceptual overview, a decision guide, a map, or a hybrid. The content is new. The attention topology it requires is not.

What the system discovers through new content is not new rules but new applications. "Here is how CRESCENDO + F-Pattern works for a WebSocket tutorial" is a new sentence in the language, not a new grammatical rule. It expands the documented recipes without touching the system itself.

---

## The Two-Track Ingestion Model

The pipeline has two execution tracks. They share the same six phases, the same pattern vocabulary, the same quality gates, and the same perceptual guardrails. They differ in how Phase 3 (Composition Design) is executed.

### Track 1: Assembly (Deterministic)

**When it applies:** Content with no genuine tension. The Addition Test fails (existing components already fulfill reader needs). Typically: tutorials, task sequences, pure reference, FAQs, changelogs, API documentation.

**How it works:**
1. **Phase 1 (Page Analysis):** Standard 5-dimensional classification (content type, density, components, flow, character)
2. **Phase 2 (Pattern Selection):** Deterministic lookup (content type → pattern triple). Example: Tutorial → CRESCENDO + F-Pattern
3. **Phase 3 (Composition Design):** Mechanical component selection from Tier 2 library. Apply velocity/temperature/weight/spacing rules (R5 combination rules). Apply transition grammar (AD-F-025). Verify fractal self-similarity. Check against anti-patterns. **Enforce perceptual guardrails** (940px min container, 16px label gap, 32px padding floor, 40% compression ratio, etc.)
4. **Phase 4 (Build):** Load Tier 1+2 CSS from library (~400 lines). Construct HTML using Tier 2 components. Verify guardrails during build (not after).
5. **Phase 5 (Perceptual Audit):** Invoke perceptual-auditing skill (Standard mode, PA-01 through PA-28)
6. **Phase 6 (Discovery Documentation):** Standard Consumption Receipt + MIG-F findings

**Time per page:** 45-90 minutes
**Percentage of new content:** Estimated 40-50% (API references, changelogs, straightforward tutorials, FAQs)
**Quality ceiling:** Competent, consistent, soul-compliant -- "looks like it belongs"
**Quality floor:** Same as ceiling -- deterministic process prevents quality variance
**Bottleneck:** None -- parallelizable (6-8 agents, 6-8 pages simultaneously)

### Track 2: Composition (Creative)

**When it applies:** Content with genuine tension. The Addition Test passes (reader needs cannot be fulfilled by deterministic assembly). BECAUSE test passes (can complete "reader needs X BECAUSE [specific content property]"). Richness score ≥ 8. Typically: onboarding, conceptual overviews, evaluation guides, hybrid content, any content with pedagogical intent or personality.

**How it works:**
1. **Phase 1 (Page Analysis):** Same 5-dimensional classification, PLUS tension pre-screen (Phases 0-2 of tension-composition pipeline run during classification)
2. **Phase 2 (Pattern Selection):** Reads tension from Phase 1 classification. Refines reader needs vs system constraints. Prepares Tension Table for Phase 3.
3. **Phase 3 (Composition Design):** **Invoke tension-composition skill** with Tension Table. Skill runs:
   - **Phase 3 (Metaphor Collapse):** Generate metaphor candidates, test resolution + isomorphism + resonance + feasibility + perceptual risk + perceptual cost. Select top-ranked metaphor (composite score, must have ≥4 isomorphisms, perceptual risk ≤2).
   - **Phase 4 (Compositional Layout):** **Enforce perceptual guardrails first** (Phase 4.0 guardrails are non-negotiable). Extract metaphor physical properties (5-category taxonomy). Apply translation grammar (property → CSS mechanism). Coherence checking. Tier 2 vs Tier 3 component inventory. Generate Tier 3 compositional CSS fresh.
   - **Output:** Metaphor mechanisms table + translation grammar + guardrail compliance proof + builder warnings (W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT as applicable)
4. **Phase 4 (Build):** Load Tier 1+2 CSS from library (~400 lines). Compose Tier 3 fresh using metaphor mechanisms. Construct HTML with Tier 2 base + Tier 3 metaphor-driven composition. Apply builder warnings. Verify guardrails + soul compliance.
5. **Phase 5 (Perceptual Audit):** Invoke perceptual-auditing skill (Standard mode, PA-01 through PA-45 including metaphor-awareness questions PA-42, PA-43, PA-44)
6. **Phase 6 (Discovery Documentation):** Enhanced Consumption Receipt + Metaphor Record (tension, metaphor, isomorphism table, perceptual risk scores) + MIG-F findings + compositional strategy addition to library

**Time per page:** 3-5 hours
**Percentage of new content:** Estimated 50-60% (onboarding, conceptual, hybrid, anything with personality or pedagogical intent)
**Quality ceiling:** Metaphor-driven layouts that "actively teach the lesson" (Elevation Map), create "immersive spatial identity" (Floor Plan), or structurally express content relationships (Geological Core)
**Quality floor:** Shippable but mediocre (monotonous grids, cramped containers, dead zones) if perceptual guardrails are violated -- post-fix synthesis showed 40% pre-enrichment issues, 20% post-enrichment
**Bottleneck:** CRITICAL -- creative capacity. Maximum 2-3 Track 2 pages concurrently (each requires unique tension analysis, creative metaphor selection, perceptual discipline). **This is THE migration bottleneck.**

### The Track Split: A Critical Discovery

The original roadmap assumption was that ~80-85% of pages would be Track 1 (assembly) and ~15-20% Track 2 (composition). **The tension-composition pipeline test data inverted this split:**

- **Track 1 shrinks to ~40-50%** of pages -- only content with clean, deterministic mappings (tutorials, task sequences, pure reference)
- **Track 2 expands to ~50-60%** of pages -- any content with genuine reader tension (onboarding, conceptual, evaluation, hybrid)

**Why the inversion happened:** The Addition Test is rigorous. It asks: "Can existing components fulfill this reader's needs without fresh composition?" For purely informational content, the answer is YES. But for content with any pedagogical intent, personality, or structural ambiguity, the answer is NO. Documentation is not just information delivery -- it is teaching, persuading, orienting, and shaping reader understanding. That creates tension. Tension requires Track 2.

**Impact:** This inversion creates a **2-3x timeline expansion** (original estimate 34-68 hours → updated estimate 80-160+ hours) and shifts the migration bottleneck from component extraction to **Track 2 creative capacity per page**.

---

## Migration vs. Ingestion: Two Operational Modes

The pipeline has two operational modes. They share the same six phases, the same two-track model, the same pattern vocabulary, and the same quality gates. They differ in scale, oversight, and organizational context.

### Migration Is a Project

Migration is the one-time campaign to bring all existing documentation pages (~75+ pages) through the pipeline. It has a defined scope, a known volume, a team structure, a timeline, and a completion criteria. It is a project with a beginning and an end.

Migration looks like this:
- A lead orchestrator assigns pages to teams
- Multiple page teams work in parallel (Analyst + Builder + Auditor per page, varying by track)
- Track 1 pages: 6-8 agents simultaneously (deterministic, low contention)
- Track 2 pages: 2-3 agents simultaneously (creative, requires Opus-level model, sequential bottleneck)
- A weaver synthesizes cross-page discoveries (CRITICAL for Track 2 -- prevents metaphor fatigue, enables metaphor strategy reuse)
- Heavy review at every gate -- because this is the first time the pipeline processes real content at scale
- Discoveries feed back into the playbook itself (playbook refinement)
- The whole campaign takes 80-160+ hours across 16-27 sessions

### Ingestion Is an Operation

Ingestion is the ongoing process of bringing new pages into the design system after migration completes. It has no defined scope, no known volume, and no end date. It is an operation -- a repeatable process that runs whenever new content appears.

Ingestion looks like this:
- A single agent loads the operational spec
- The agent processes one page through the six-phase pipeline (same as migration)
- **The page goes through Phases 0-2 classification** (same Addition Test + BECAUSE test + richness scoring)
- **Track 1 ingestion:** Load component library → mechanical assembly → perceptual audit (Tier 1+2) → done. ~45-90 min.
- **Track 2 ingestion:** Load component library → invoke tension-composition skill → build with generated Tier 3 → perceptual audit (Tier 1+2+3) → done. ~3-5 hrs.
- Lighter review -- because the pipeline has been validated by migration and pilot testing
- Discoveries append to application notes (they do not change the system)
- The process time depends on track (45-90 min Track 1, 3-5 hrs Track 2)

### The Comparison

| Dimension | Migration (Project) | Ingestion (Operation) |
|-----------|--------------------|-----------------------|
| **Volume** | ~75 pages, known upfront | Unknown, one page at a time |
| **Track Split** | 40-50% Track 1, 50-60% Track 2 | Same split expected (50-60% Track 2) |
| **Oversight** | Full team, heavy review at every gate | Lightweight, single agent with spot checks |
| **Consistency** | All pages done in one campaign with shared context | Must match pages done weeks or months ago |
| **Context** | Full accumulated identity loaded across the team | Must load the same context cold from documentation |
| **Discovery** | Feeds back into the playbook (refinement loop) | Feeds into application notes only |
| **Team Structure** | Lead + Page Teams + Weaver (hierarchical) | Single agent (flat) |
| **Duration** | 80-160+ hours total (16-27 sessions) | 45-90 min (Track 1) or 3-5 hrs (Track 2) per page |
| **Completion** | Defined end state (all pages migrated) | No end state (runs as long as new content appears) |
| **Error Impact** | Caught by cross-page weaver and audit teams | Must be caught by the single agent's self-audit |
| **Bottleneck** | Track 2 creative capacity (2-3 concurrent max) | Same (single agent processing Track 2 takes 3-5 hrs) |

### Why the Distinction Matters

The distinction matters because each mode needs a different specification document. Migration needs a comprehensive execution spec with team topology, task decomposition, dependency management, and inter-agent coordination. Ingestion needs a compact operational spec that a single agent can load, understand, and execute without coordination overhead.

Building only one of these documents creates a mismatch. A 1,400-line migration spec is overkill for a single agent processing one new page. A 50-line operational spec is dangerously insufficient for coordinating a 15-agent migration team across 75 pages.

---

## The Operational Wrapper Concept

### The Pipeline Is Emergent, Not Separate

The post-CD pipeline is not a piece of software to be built. It is an emergent property of the phases that precede it. Each post-CD phase produces a piece of the pipeline:

| Phase | What It Produces | Pipeline Piece |
|-------|-----------------|----------------|
| Component Extraction (B+D) | Reusable layout primitives, pattern library | Building blocks (~400 lines Tier 1+2 CSS) |
| Content Analysis (F) | Page inventory with classifications | Classification engine (Addition Test + BECAUSE test) |
| Migration Playbook (E) | Process specification with decision trees | Process definition (Track 1 vs Track 2 flows) |
| Pilot Migration (G) | Worked examples, validated process | Reference implementations |
| Playbook Refinement (H) | Battle-tested version of the process | Final process |

When all five phases are complete, the pipeline EXISTS. There is no separate "assemble the pipeline" phase. The pipeline is the combination of extracted components + classification rules + process specification + worked examples + refined instructions. An agent loading these artifacts BECOMES the pipeline.

### Who Executes the Pipeline?

The pipeline is not software with an entry point. It is a Claude instance with the right context. An agent loads the playbook, the accumulated identity, the pattern library, the component library, the perceptual audit methodology, and the guardrail specifications -- and it becomes capable of executing the pipeline on any content.

This is the operational wrapper: not code, but context. Not a program, but a specification that tells an agent exactly what to load, what to do, and in what order.

### The ~50-100 Line Operational Spec (Ingestion)

After migration, ongoing ingestion needs a lightweight specification. Not the full 1,400-line migration execution spec -- that was for coordinating a team across 75 pages. For a single agent processing a single new page, the specification looks like this:

```
You are receiving a new documentation page. Here is what you do:

1. Load these 5 files:
   - [Accumulated Identity v3 path]
   - [Pattern Library index path]
   - [Combination Rules path]
   - [Perceptual Audit methodology path]
   - [Guardrail Specification path]

2. Read the content. Run Phases 0-2 of tension-composition pipeline:
   - Phase 0: Content Assessment (scope, sections, route)
   - Phase 1: Multi-Axis Questioning (FEEL/UNDERSTAND/DO/BECOME + conditionals)
   - Phase 2: Tension Derivation (Side A vs Side B, Addition Test, BECAUSE test, richness)
   - [GATE] Zero tension → Track 1. Genuine tension → Track 2.

3. TRACK 1 (Assembly):
   - Pattern Selection: Content type → pattern triple (deterministic)
   - Composition Design: R5 rules + transition grammar + guardrails
   - Build: Apply Tier 1+2 CSS (~400 lines)
   - Perceptual Audit: Standard mode (PA-01 through PA-28)
   - Discovery: Standard Consumption Receipt

4. TRACK 2 (Composition):
   - Pattern Selection: Read tension, prepare Tension Table
   - Composition Design: Invoke /tension-composition with Tension Table
     → Skill runs Phase 3 (Metaphor Collapse) + Phase 4 (Layout Generation)
     → Output: Metaphor mechanisms + translation grammar + guardrails proof
   - Build: Apply Tier 1+2 CSS + compose Tier 3 fresh from metaphor
   - Perceptual Audit: Standard mode + metaphor questions (PA-01 through PA-45)
   - Discovery: Enhanced Consumption Receipt + Metaphor Record

5. Both tracks: Verify guardrails:
   - 940px min container (65% viewport at 1440px)
   - 16px label-to-heading gap
   - 32px padding floor
   - 40% compression ratio (deepest ≥ 40% of shallowest)
   - 48px section breathing minimum
   - 45-80 characters per line
   - 1.5 body line-height minimum
   - Content-to-viewport ratio 65-80%

6. Run perceptual audit at 1440px AND 768px:
   - 7-gate protocol, PA questions appropriate to track
   - If any gate fails, return to Phase 4 (Build) with specific fixes
   - Do NOT re-run classification unless fundamentally wrong

7. Record discoveries:
   - Append application notes to [application notes path]
   - Write Consumption Receipt
   - Track 2: Write Metaphor Record + add compositional strategy to library

8. Output:
   - Write the migrated page to [output path]
   - Write the Consumption Receipt to [receipts path]
   - Track 2: Write Metaphor Record to [metaphor library path]
```

This is not a separate deliverable requiring a new phase. It is a natural output of the Playbook Refinement phase (Phase H). The migration execution spec is written first (comprehensive, team-oriented). The ingestion operational spec is derived from it (lightweight, single-agent). Both emerge from the same process understanding.

---

## Guardrail Enforcement Strategy: Layer 1 vs Layer 2

The perceptual guardrails discovered through skill enrichment are enforced at two layers:

### Layer 1: CSS-Bakeable Guardrails (Baked into Component Library)

These guardrails become **defaults in the Tier 1+2 component library** -- hard to violate unless actively overridden:

- **940px minimum container** (65% viewport at 1440px) → Tier 2 container CSS sets `max-width: 960px` or similar
- **32px padding floor** → Tier 2 components set `padding: var(--section-padding, 40px 32px)` with 32px minimum
- **1.5 line-height minimum** → Tier 1 tokens set `--body-line-height: 1.5` or higher
- **48px section breathing** → Tier 2 section spacing sets `margin-block-end: 64px` (safe above floor)
- **~65ch text width** → Tier 2 text containers set `max-width: 65ch` by default

**Why these are Layer 1:** They can be expressed as CSS defaults. The builder would have to actively override them to violate. The component library makes compliance the path of least resistance.

### Layer 2: Measurement-Based Guardrails (Require Perceptual Audit)

These guardrails require **active measurement and verification** via the perceptual-auditing skill:

- **40% compression ratio** → Requires measuring deepest vs shallowest section padding across entire page
- **16px label-to-heading gap** → Requires measuring specific elements (labels, headings) in final HTML
- **Depth analysis** → Requires perceptual audit's depth scoring (shallow/medium/deep section identification)

**Why these are Layer 2:** They depend on how components combine on the specific page. Cannot be baked into CSS defaults without knowing the full page composition.

### The Enforcement Flow

```
Phase 3 (Composition Design):
  → Blueprint specifies Layer 1 defaults (use Tier 2 components)
  → Blueprint notes Layer 2 measurements required (compression ratio, label gaps)

Phase 4 (Build):
  → Apply Tier 1+2 CSS (Layer 1 guardrails baked in)
  → Track 2: Compose Tier 3 fresh, but ENFORCE Layer 1 floors
  → Layer 1 violations caught here (narrow container, extreme padding reduction)

Phase 5 (Perceptual Audit):
  → Measure Layer 2 guardrails (compression ratio, label gaps, depth)
  → Verify Layer 1 compliance (sometimes metaphor overrides defaults)
  → FAIL verdict if any guardrail violated → back to Phase 4 with specific fixes
```

**The Weaver's Role (Track 2):** For ongoing ingestion of Track 2 pages, the Weaver (if present in a multi-page session) tracks metaphor usage across pages. Prevents metaphor fatigue by flagging when 5+ pages use the same metaphor family (e.g., geological, architectural, spatial). Suggests alternative metaphor families for future Track 2 pages. Enables compositional strategy reuse (e.g., "elevated progression with graduated backgrounds" used in Playbook Elevation Map can apply to other BECOME-tension content).

---

## When New Content is "Simple" vs "Complex"

The original distinction was: simple content uses Track 1 (assembly), complex content uses Track 2 (composition). **The updated model removes this pre-classification.** Instead:

**Every page goes through Phases 0-2 of the tension-composition pipeline.** The pipeline's own gate (Addition Test + BECAUSE test + richness scoring) determines Track 1 vs Track 2. This catches false negatives -- pages that SEEM simple but have latent tension.

**Examples of false negatives:**
- An API reference that SEEMS simple (pure information) but has pedagogical intent (teaching best practices, not just listing endpoints) → Addition Test fails → Track 2
- A changelog that SEEMS simple (list of changes) but has narrative structure (telling the story of the product's evolution) → Addition Test fails → Track 2
- A FAQ that SEEMS simple (Q&A pairs) but has competing reader mental models requiring reconciliation → Addition Test fails → Track 2

**The threshold for "genuine tension":** Any personality, any pedagogical intent, any desire to shape how the reader FEELS (not just what they know). If the content is purely informational (specification, data table, pure reference with no editorial voice), it is Track 1. If the content has any character, voice, teaching strategy, or emotional arc, it is Track 2.

**Does this mean Track 2 is 50-60% of new content?** Possibly. The impact assessment estimated this based on tension-test data showing 50-60% of existing documentation had genuine tension. But the ACTUAL split depends on:
- The nature of the documentation being written (highly technical reference vs user-oriented guides)
- The author's writing style (editorial voice vs neutral specification)
- The content's purpose (teaching vs informing)

An organization writing pure API references might be 80% Track 1. An organization writing onboarding guides and conceptual overviews might be 80% Track 2. The pipeline adapts to the content, not vice versa.

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
- **Perceptual guardrails** -- 8 quantitative floors (940px, 16px, 32px, 40%, etc.)

### What Grows (The Application Layer)

These elements expand with every page processed, whether during migration or ingestion:

- **Application notes** -- "CRESCENDO + F-Pattern works well for 6-step tutorials with code-heavy climax"
- **Documented recipes** -- new sentences in the language, not new grammar ("Diff Sandwich: code/reasoning/code for before/after patterns")
- **Consumption Receipts** -- per-page provenance records documenting which patterns were applied and why
- **MIG-F findings** -- discoveries about how existing patterns apply to specific content scenarios
- **Edge case documentation** -- "12-scenario troubleshooting guides outgrow PULSE; use GEOLOGICAL stratified by severity"
- **Classification refinements** -- better heuristics for which content type label fits which real-world page
- **Compositional strategy library** -- prose patterns from Track 2 pages (geological stratification, narrative crescendo, hub-spoke spatial, etc.)
- **Metaphor documentation** -- Track 2 pages produce Metaphor Records showing tension → metaphor → isomorphism mappings

### The English Analogy

English did not need new letters for the internet. The 26 letters, the grammatical rules, the syntactic structures all stayed the same. But English DID create new words -- blog, tweet, selfie, hashtag. These are not grammar changes. They are vocabulary expansions that use existing grammar.

The design system works identically. The alphabet (density patterns), grammar (combination rules), and writing direction (axis geometries) are frozen. But the documented vocabulary of applications grows. Page 1 processed through the pipeline is pure vocabulary application -- using existing patterns with no prior real-world reference. By page 50, the agent has 49 Consumption Receipts showing how those patterns were applied in practice, 20 application refinements, 3 recipe extensions, and 2 new "words" (documented component combinations that work well for specific content scenarios).

The system does not change. Its demonstrated capabilities expand forever. This is the difference between a language and a frozen specification: a language is alive precisely because its grammar is stable enough that new speakers can use it to say things the original speakers never imagined.

### Why This Matters for Ingestion

An ingestion agent processing a new page six months after migration benefits from every page that came before it. Not because the system was updated -- it was not -- but because the application notes, recipes, and Consumption Receipts provide worked examples for every content type encountered so far. The agent loading the operational spec also loads the accumulated application notes, gaining the practical wisdom of every prior page without any system change.

Page 1 of migration is the hardest. Page 75 is the easiest. Page 76 (the first ingestion) is easier still, because it inherits ALL of migration's documented applications. Page 100 is easier than page 76 for the same reason.

The compounding effect is not accidental. It is the same mechanism that made DD → OD → AD → CD work. Research begets findings. Findings beget constraints. Constraints beget explorations. Explorations beget more research. Migration and ingestion continue this chain -- not by changing the system, but by accumulating documented applications of the system.

---

## Two Outputs from the Playbook Phase

Phase E (Migration Playbook v2) produces two distinct documents:

### 1. Migration Execution Spec (~1,400 lines)

This is the comprehensive specification for the one-time migration project. Comparable in scale and purpose to the Master AD Execution Spec that governed the AD phase. It contains:

- Team structure and topology (Lead + Page Teams + Weaver)
- Task decomposition (which pages, in what order, with what dependencies)
- Per-page process specification (the six phases in full detail for BOTH tracks)
- Quality gates and verification procedures
- Inter-page coordination protocols (what happens when page 23 discovers something that affects page 7)
- Escalation procedures (what to do when content resists its assigned pattern)
- Discovery documentation format (MIG-F finding structure, Consumption Receipt template, Metaphor Record template)
- Cross-page consistency checks
- Completion criteria
- **Track 1 vs Track 2 execution paths** (deterministic assembly vs tension-composition skill invocation)
- **Guardrail enforcement strategy** (Layer 1 baked defaults vs Layer 2 measurement-based)
- **Builder warning reference** (W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT)

This document is consumed by the migration team lead. It governs a multi-session, multi-agent campaign. It is too large and too coordination-heavy for a single agent processing one page.

### 2. Ingestion Operational Spec (~50-100 lines)

This is the lightweight specification for ongoing content processing. It is a derivative of the migration execution spec, stripped down to what a single agent needs to process a single page without coordination overhead. It contains:

- What files to load (5 paths: accumulated identity, pattern library, combination rules, audit methodology, guardrails)
- The six-phase process in compressed form
- The two-track decision flow (Phases 0-2 classification → Track 1 assembly OR Track 2 composition)
- The perceptual guardrails (8 quantitative floors)
- Where to write output and discovery notes (page, receipt, metaphor record if Track 2)

This document is consumed by any future agent that needs to process new content. It is self-contained: an agent loading this spec and the referenced files has everything it needs. No team lead, no weaver, no cross-page coordination (though a weaver is valuable for Track 2 if processing multiple pages in a session).

### The Relationship Between Them

The ingestion spec is not a separate creation. It is the migration spec with the team coordination, batch management, and cross-page synthesis stripped away. The core process -- the six phases that every page goes through -- is identical in both documents. The difference is organizational, not procedural.

Think of it this way: the migration execution spec is the recipe book for a restaurant kitchen (roles, stations, timing, coordination). The ingestion operational spec is the same recipe written for a home cook (one person, one dish, same technique).

---

## Practical Implications for Post-Migration Life

### When Someone Writes a New Page

1. The new content is written (by a human, CMS, or generation process)
2. An agent loads the ingestion operational spec (~50-100 lines)
3. The agent loads the referenced files (accumulated identity, pattern library, combination rules, audit methodology, guardrails)
4. The agent loads the accumulated application notes (Consumption Receipts from all prior pages)
5. **The agent runs Phases 0-2 of tension-composition pipeline** (Content Assessment → Multi-Axis Questioning → Tension Derivation → Addition Test + BECAUSE test + richness scoring)
6. **The pipeline's gate determines Track 1 (assembly) or Track 2 (composition)**
7. The agent runs the six-phase pipeline on the new content following the appropriate track
8. The agent writes the processed page, a Consumption Receipt, and (if Track 2) a Metaphor Record
9. The Consumption Receipt and Metaphor Record join the application notes, benefiting the next page

**Total time:** 45-90 minutes (Track 1) or 3-5 hours (Track 2). Total coordination: none. Total design system changes: zero.

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

## Open Questions

These questions remain open for validation during Phase B (Content Analysis) and Phase F (Pilot Migration):

### Q1: Is Track 2 Really 50-60% of New Content?

The impact assessment estimated 50-60% based on tension-test data showing genuine tension in the majority of existing documentation. But this estimate could be:
- **Too high:** If the organization writes mostly API references and specifications (informational, no pedagogical intent)
- **Too low:** If the organization writes mostly onboarding guides and conceptual overviews (teaching-focused, high pedagogical intent)
- **About right:** If the documentation mix matches the existing corpus

**Validation approach:** Phase B (Content Analysis) will classify all 75+ existing pages using the Addition Test + BECAUSE test. The actual Track 1 vs Track 2 split will inform ingestion expectations.

### Q2: Does Even "Simple" Content Benefit from Phase 0-2 Assessment?

The cost of running Phases 0-2 for every page (including obvious Track 1 candidates like API references) is 10-15 minutes per page. The benefit is catching false negatives (pages that SEEM simple but have latent tension).

**Cost vs value:** For a pure API reference with zero editorial voice, running 14-axis multi-axis questioning is probably overkill. But for a "simple" tutorial that turns out to have BECOME tension (reader transformation), the 10-15 minute cost prevents a mediocre Track 1 assembly when a Track 2 composition would be superior.

**Refinement:** Add a fast-path heuristic in Phase B. If content type = pure reference AND Addition Test obviously passes (no reader needs beyond information access), skip full Phases 0-2 and assign Track 1 immediately. If ambiguous, run full assessment.

### Q3: How Does the Weaver Track Metaphor Diversity Across Growing Page Count?

In migration, the Weaver tracks metaphor usage across 50-60 Track 2 pages in a single campaign. In ingestion, Track 2 pages appear one at a time over months. How does the Weaver (if present) maintain metaphor diversity awareness?

**Options:**
- **Weaver reads Metaphor Records:** Every Track 2 page produces a Metaphor Record. The Weaver (in a multi-page ingestion session) reads all prior Metaphor Records to assess metaphor fatigue risk.
- **Metaphor usage log:** Maintain a running log (e.g., `METAPHOR-USAGE.md`) listing which metaphors have been used, how many times, for which content types. Weaver references this log.
- **No Weaver in ingestion:** Accept that single-page ingestion has no cross-page metaphor tracking. Metaphor fatigue is a risk in large batches (migration) but not in one-off ingestion.

### Q4: Should Ingestion Produce Different Discovery Documentation Than Migration?

Migration produces:
- Consumption Receipts (per page)
- MIG-F findings (discoveries about pattern applications)
- Metaphor Records (Track 2 pages)

Ingestion produces the same. But should ingestion findings have a different ID prefix (e.g., ING-F-001 instead of MIG-F-001) to distinguish project-phase discoveries from operational-phase discoveries?

**Implication:** If the design system is frozen, then discoveries during migration vs ingestion are both APPLICATION notes, not system changes. The prefix distinction might be unnecessary. But it could be valuable for tracking where learnings came from (early migration vs late ingestion).

### Q5: At What Page Count Does Metaphor Fatigue Become a Real Risk?

The impact assessment flagged metaphor fatigue as MODERATE-HIGH risk (30-40% probability if left unmanaged) during migration (50-60 Track 2 pages). But in ingestion, Track 2 pages appear sporadically. If only 2-3 Track 2 pages are added per month, does metaphor fatigue ever become a concern?

**Threshold question:** Is metaphor fatigue a function of:
- **Absolute page count** (50+ Track 2 pages = fatigue risk, regardless of timing)
- **Reader exposure** (if a reader consumes 10 Track 2 pages in a session, they notice repetition; if spread over months, they don't)
- **Metaphor clustering** (5 geological metaphors in a row = fatigue; 5 geological metaphors across 20 pages = acceptable)

Validation during migration will inform this.

---

## Summary

The post-CD pipeline handles new content using the SAME two-track model as existing content. The six-phase process is identical. The pattern vocabulary is identical. The quality gates are identical. The perceptual guardrails are identical. The only difference is operational context: migration is a project (one-time, team, heavy oversight), ingestion is an operation (ongoing, single agent, lighter oversight).

**The critical insight:** Every page -- new or existing -- goes through Phases 0-2 of the tension-composition pipeline. The pipeline's own gate (Addition Test + BECAUSE test + richness scoring) determines Track 1 (assembly) vs Track 2 (composition). This unified classification eliminates pre-judgment and catches false negatives (pages that SEEM simple but have latent tension requiring metaphor-driven composition).

**Track 1 (assembly):** Deterministic pattern application, mechanical component selection, perceptual guardrails baked into component library defaults. ~45-90 min per page. ~40-50% of pages.

**Track 2 (composition):** Invoke tension-composition skill for metaphor-driven layout generation, compose Tier 3 fresh, enforce perceptual guardrails explicitly, enhanced perceptual audit with metaphor-awareness questions. ~3-5 hours per page. ~50-60% of pages. **THE bottleneck.**

**Guardrail enforcement:** Layer 1 (CSS-bakeable) baked into component library as defaults. Layer 2 (measurement-based) verified by perceptual-auditing skill. Both tracks comply with the same 8 quantitative floors.

The pipeline is not software to be assembled. It is an emergent property of the post-CD phases. An agent with the right context -- the accumulated identity, the pattern library, the combination rules, the audit methodology, the guardrail specifications -- IS the pipeline. The operational wrapper is not code but specification: a 50-100 line document telling the agent what to load and what to do.

The design system is frozen. Its documented applications are not. Every page processed through the pipeline -- whether during migration or ingestion -- expands the system's demonstrated capabilities without changing its rules. A complete language does not need new grammar to express new thoughts. It needs new speakers using existing grammar in new contexts. That is exactly what content ingestion does.

For detailed per-page walkthrough of both tracks, see `03-MIGRATION-PIPELINE.md`. For the Track 2 compositional supplement (when and how to invoke the tension-composition skill), see `07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md`.
