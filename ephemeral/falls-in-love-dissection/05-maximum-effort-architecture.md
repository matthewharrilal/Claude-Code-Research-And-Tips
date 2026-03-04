# Maximum Effort Architecture: $150-200 Exploration-Mode Build

**Date:** 2026-03-03
**Author:** Architecture Agent (Task #5)
**Sources:** Wave 1 research (4 reports), context budget analysis, exploration process reconstruction, builder constraint audit, current pipeline SKILL.md
**Status:** EXECUTABLE SPECIFICATION

---

## A. Executive Summary

The current pipeline spends $30 and 100 minutes to produce pages that score 0/10 on the falsifiable content-topology criteria. The exploration era spent orders of magnitude more effort and produced pages that score 9-10/10. This architecture closes the gap by doing what the exploration era did: treating building as RESEARCH, giving the builder direct access to the content with time to form a content topology, and removing the procedural machinery that consumes 87.6% of the builder's attention budget.

The core architectural shift is from **pipeline-as-assembly-line** (specialists filter, synthesizer packages, builder implements) to **pipeline-as-research-expedition** (researcher curates, builder explores with hypothesis, evaluators redirect, builder deepens). The builder is no longer the last link in a compression chain. The builder is the central agent, surrounded by research support. Building takes 2-4 hours because the builder is not placing content into zones -- it is discovering what spatial form the content demands, implementing that form, evaluating it, and deepening it through multiple cycles of discovery-build-evaluate.

The $150-200 cost buys what $30 cannot: the cognitive state where CSS decisions emerge from content understanding rather than procedural compliance. Every dollar above $30 goes toward time, context, and iteration -- the three inputs that produce content-topology formation.

---

## B. Phase Structure

### Overview

```
Phase 0: SETUP                          [5 min,  $0,    orchestrator]
Phase 1: DERIVE (Tension-Composition)   [15 min, $4,    1 Opus agent]
Phase 2: CURATE (Bespoke Research)      [25 min, $12,   3 Opus agents]
Phase 3: IMMERSE (Content Saturation)   [30 min, $8,    1 Opus agent]
Phase 4: DISCOVER (Structural Hypothesis)[20 min, $6,   1 Opus agent]
Phase 5: BUILD-1 (Topology Foundation)  [40 min, $18,   1 Opus agent]
Phase 6: EVALUATE-1 (Fresh Eyes)        [20 min, $12,   3 Opus agents]
Phase 7: BUILD-2 (Topology Deepening)   [30 min, $14,   1 Opus agent]
Phase 8: EVALUATE-2 (Full PA)           [25 min, $18,   5 Opus agents + weaver]
Phase 9: BUILD-3 (Topology Hardening)   [25 min, $12,   1 Opus agent]
Phase 10: FINAL EVALUATION              [15 min, $10,   3 Opus agents]
                                        ─────────────────────────────
                                        ~250 min, ~$114-134 base
                                        + 1-2 optional deepening cycles: +$30-60
                                        TOTAL: $150-200
```

**Key difference from current pipeline:** The build phase is not one pass that implements a package. It is three build phases (5, 7, 9) each preceded by evaluation that feeds back into the builder. The builder DISCOVERS, is EVALUATED, then DEEPENS. This is the exploration-era pattern of "build-enrich-build."

---

### Phase 0: SETUP [5 min, $0]

**Purpose:** Identical to current pipeline Phase 0. Create directories, verify browser, load identity files.

**Output:** Directories created, pipeline log initialized.

**Cognitive state produced:** None (orchestrator work).

---

### Phase 1: DERIVE (Tension-Composition) [15 min, $4]

**Purpose:** Derive the metaphor, emotional arc, and compositional conviction from the content. Identical to current Phase 1 but with one addition: the TC agent also produces a STRUCTURAL OBSERVATION section that identifies the content's argument structure (linear vs branching vs convergent vs hub-spoke vs recursive).

**Agent:** 1 Opus

**Input:** Content markdown, TC skill, identity files

**Output:** `_tc-brief.md` with all current sections PLUS:
- Section 7: Structural Observation (what kind of argument is this content making? what spatial forms does this argument suggest?)
- Section 8: The $150 Question (3 questions the builder should spend MINUTES answering before writing any CSS: "What does this content's meaning suggest about spatial form?" "Where does the argument compress and where does it breathe?" "What would be lost if this page were a single centered column?")

**Cognitive state produced:** Creative conviction. The metaphor becomes the generative seed.

**Cost:** ~$4 (same as current)

---

### Phase 2: CURATE (Bespoke Research Package) [25 min, $12]

**Purpose:** This is the MISSING LAYER the exploration era had that the pipeline lacks. Three curator agents traverse the accumulated knowledge base and produce a bespoke, implementation-mapped research package for THIS specific build. Not a filtered subset of mechanism names -- a PLAN with specific CSS values, expected visual evidence, and constraint linkage.

**Agents:** 3 Opus (parallel)

**Agent 2A: Structural Researcher**
- Input: TC brief, content markdown, all 5 research files (R1-R5), all case study markdown files, 2-3 exploration HTML files most relevant to this content's structure
- Task: Identify the 3-5 spatial techniques most relevant to THIS content's argument structure. For each: provide the CSS pattern (complete, copy-paste ready), show the exploration-era example where it was used, explain WHY this technique serves THIS content's specific meaning. Produce implementation-mapped plans, not mechanism names.
- Output: `_curated-structural.md` (150-250 lines)

**Agent 2B: Textural Researcher**
- Input: TC brief, content markdown, mechanism catalog, grammar files, components.css, tokens.css
- Task: Map the TC metaphor to specific textural decisions: border treatments, spacing rhythms, color semantics, typography scale adjustments. For each: specific CSS values, not category names. "Use `border-left: 4px solid var(--color-primary)` for the foundational claims, `border-left: 1px solid var(--color-border)` for speculative claims" -- not "use border-weight gradient."
- Output: `_curated-textural.md` (100-200 lines)

**Agent 2C: Convention Compiler**
- Input: Identity files, vocabulary, tokens.css, semantic-rules.md, responsive-strategy.md, guidelines
- Task: Compile the COMPLETE convention spec. Every value locked. Every constraint binary. This is what the exploration era's 822-line AD-CONVENTION-SPEC.md was: a reference document the builder can consult, not a set of instructions the builder must hold in memory. Include the soul constraints, the border system (1px/3px only, no 2px), the responsive breakpoints, the container width (940-960px), the type scale, the spacing tokens.
- Output: `_convention-spec.md` (200-350 lines)

**What this phase does differently from current Phase 2:**
1. Three focused researchers instead of 5 unfocused specialists
2. Output is IMPLEMENTATION-MAPPED (CSS values, not mechanism names)
3. Structural researcher reads actual exploration HTML -- sees how spatial techniques were built, not just their names
4. Convention spec is separated from creative research -- the builder can READ the convention as reference rather than trying to hold it in memory alongside creative direction

**Cognitive state produced:** A research foundation. Not for the orchestrator or the synthesizer -- for the BUILDER, who will read these files directly.

**Cost:** ~$12 (3 parallel Opus agents, ~$4 each)

---

### Phase 3: IMMERSE (Content Saturation) [30 min, $8]

**Purpose:** THIS IS THE KEY PHASE THAT DOES NOT EXIST IN THE CURRENT PIPELINE. A single Opus agent reads the article deeply, without any procedural framing, and produces a content-topology document: a mapping from the article's argument structure to spatial implications.

**Agent:** 1 Opus

**Input (in this order -- ORDER MATTERS):**
1. The article (content.md) -- FIRST, before anything else
2. The TC brief -- SECOND, to layer conviction onto content understanding
3. The curated structural research (`_curated-structural.md`) -- THIRD, as spatial vocabulary

**What the agent does NOT receive:**
- Convention spec (that is reference material, not immersion material)
- Textural research (that is building material, not immersion material)
- Any procedural instructions, reading orders, deployment quotas, or citation formats
- Any prohibitions beyond soul constraints (which are stated in 5 lines)

**Agent prompt:**

```
You are about to design the spatial form of this article. Before you write
a single line of CSS, you must UNDERSTAND this article.

Read the article below. Do not skim. Read every paragraph. Then answer:

1. ARGUMENT STRUCTURE: What is this article's argument? Not its topic --
   its ARGUMENT. What is it trying to convince the reader of? How does it
   build that argument section by section? Where does it compress (dense
   argumentation) and where does it breathe (reflection, implication)?

2. SPATIAL IMPLICATIONS: For each major section, what does the content's
   meaning suggest about spatial form?
   - Sections that synthesize multiple ideas --> consider hub-spoke,
     convergence layouts
   - Sections that compare/contrast --> consider side-by-side asymmetric
     grids
   - Sections that build progressively --> consider spiral, golden ratio
     narrowing
   - Sections that present independent items --> consider bento, islands
   - Sections that demonstrate what they describe --> consider self-
     referential, recursive layouts

3. THE HYPOTHESIS: Based on your understanding, state a STRUCTURAL
   HYPOTHESIS for this page. Not "I will use a centered column." A
   hypothesis like:
   - "This article's argument structure is a convergence of five
     independent threads, suggesting a page that starts wide (5 parallel
     streams) and narrows toward a single synthesis."
   - "This article is fundamentally about layered depth, suggesting a
     page where each section occupies a different z-plane and the reader
     descends through strata."

4. THREE SPATIAL COMMITMENTS: Name three specific, bold spatial decisions
   you would make. Not "use grid." Specific decisions like:
   - "Section 3's comparison of old vs new paradigm demands a 3fr 1fr
     asymmetric grid where the new paradigm dominates."
   - "The article's recursive self-reference demands a pattern-echo
     component where the page's structure appears as a miniature CSS
     diagram."

5. THE $150 QUESTIONS: Answer the three questions from the TC brief's
   Section 8. Spend real tokens on each answer.

Then read the curated structural research. Do the techniques described
there align with your spatial impressions? Do they suggest refinements?
Update your hypothesis if so.

Write your full content-topology document. This document IS the blueprint
for the build. It replaces the synthesizer's package.
```

**Output:** `_content-topology.md` (200-400 lines)

**What this phase achieves:** The builder who reads this document in Phase 5 will encounter the content THROUGH the lens of someone who has already spent 30 minutes deeply understanding it. This is the bespoke curation that Agent-0C provided in the exploration era. The immersion agent is not the builder -- it is the content's ADVOCATE, producing the document that transfers content understanding to the builder.

**Cognitive state produced:** Content topology. A persistent spatial hypothesis that will dominate all subsequent CSS decisions.

**Cost:** ~$8 (1 Opus agent, significant thinking time)

---

### Phase 4: DISCOVER (Structural Hypothesis Validation) [20 min, $6]

**Purpose:** A second Opus agent reads the content-topology document and the article, and produces a COUNTER-ARGUMENT or REFINEMENT. This is the exploration era's "hypothesis testing" -- the content topology is challenged before the builder commits to it.

**Agent:** 1 Opus

**Input:**
1. Content markdown
2. `_content-topology.md`
3. `_curated-structural.md`
4. 1 relevant exploration HTML (the one most structurally similar to the proposed hypothesis)

**Agent prompt:**

```
Read the content topology document. It proposes a structural hypothesis
for this article.

Your job is to CHALLENGE it:
1. Does the hypothesis actually serve the content's meaning, or does it
   impose a spatial form from outside?
2. Are the three spatial commitments content-driven (they would fail the
   "swap test" -- moving them to a different article would make no
   sense) or generic (they would work on any article)?
3. What did the topology document MISS? Are there sections of the article
   whose spatial implications were overlooked?
4. Read the exploration HTML. What spatial vocabulary does it demonstrate
   that the topology document did not consider?

Produce a REFINED TOPOLOGY that incorporates your challenges.
Keep what works. Fix what doesn't. Add what's missing.

Your document becomes the builder's PRIMARY INPUT.
```

**Output:** `_refined-topology.md` (200-350 lines)

**Cognitive state produced:** A tested, refined structural hypothesis. The builder receives not a first draft but a challenged-and-improved spatial plan.

**Cost:** ~$6 (1 Opus agent)

---

### Phase 5: BUILD-1 (Topology Foundation) [40 min, $18]

**Purpose:** The first builder. This agent builds the complete HTML page from the refined topology. This is the longest single-agent phase because the builder is doing what exploration builders did: reading the article, internalizing the spatial hypothesis, and building CSS that embodies content meaning.

**Agent:** 1 Opus

**Input (in this order):**
1. `_refined-topology.md` -- the structural blueprint (content-driven, NOT procedural)
2. Content markdown -- the full article
3. `_tc-brief.md` -- the metaphor and emotional arc
4. `_curated-textural.md` -- textural vocabulary (border treatments, spacing rhythms, color semantics)
5. `_convention-spec.md` -- binary constraints (as REFERENCE, not as instructions)
6. `tokens.css` and `components.css` -- design system tools

**What the builder does NOT receive:**
- Reading order mandates ("FOLLOW EXACTLY")
- Deployment quotas ("10+ findings")
- Citation format requirements
- Decision file templates
- "Build vertical first" mandate
- "Maximum 2 structural sections" cap
- Any cultural signals framing structure as risky

**Builder prompt:**

```
You are building a designed HTML page for this article.

Your structural blueprint is in _refined-topology.md. It contains a
spatial hypothesis, section-by-section spatial implications, and three
bold spatial commitments. This blueprint was produced by two agents who
spent 50 minutes deeply understanding the content. TRUST their
understanding. Your job is to REALIZE it in CSS.

But trust is not obedience. If during building you discover that a
section's spatial form should be different from the blueprint, CHANGE IT.
The blueprint is a starting point, not a cage. You are the agent with
CSS skill. You may see things that the content analysts missed.

YOUR FIRST TASK is to read the article fully. Not to "map it to zones."
To UNDERSTAND it. What is it about? What does it argue? What surprised
you? What sections carry the most intellectual weight?

YOUR SECOND TASK is to decide the page's foundational spatial logic.
NOT "960px centered column, then insert modules." The page's IDENTITY.
Will it use a single spatial system or multiple? Will sections feel like
different rooms or variations of one room? Will the reader scroll through
a corridor or navigate a territory?

YOUR THIRD TASK is to build. Zone by zone, with each zone's layout
chosen to SERVE that zone's content meaning. The convention spec is
your reference for binary constraints (soul, border, responsive). The
textural research is your vocabulary for border treatments, color
semantics, and spacing. Use them as tools, not as checklists.

WHAT MAKES THIS BUILD DIFFERENT:
- You have NO deployment quotas. No "10+ findings." No "2+ case studies."
  Deploy what the content NEEDS.
- You have NO structural section cap. If the content warrants 5 distinct
  spatial organizations, build 5.
- You have NO "build vertical first" mandate. Build the spatial logic the
  content demands, whether that is vertical, hub-spoke, multi-column,
  or something else entirely.
- You DO have soul constraints (border-radius: 0, box-shadow: none, no
  gradients, no semi-transparent backgrounds). These are ABSOLUTE.
- You DO have container width (940-960px). This is NON-NEGOTIABLE.
- You DO have responsive requirements (must work at 1440px AND 768px).

CONTENT ENGAGEMENT EXPECTATION:
For every CSS decision, you should be able to answer: "Why THIS value for
THIS section?" If the answer is "because it is the default" or "because
the spec says so," you have not engaged deeply enough. The answer should
reference the CONTENT: "because this section synthesizes four independent
threads, and the hub-spoke layout makes the synthesis physically central."

OUTPUT: A single self-contained HTML file with inline <style>. All
Google Fonts linked. Responsive at 1440px and 768px. Skip link. ARIA
landmarks.

NAMING: Use content-semantic class names, not positional ones. Name
grid areas after what the content IS, not where it sits.

After writing the HTML, write a brief reflection:
- What spatial decisions surprised you?
- Where did you deviate from the blueprint? Why?
- What are you uncertain about?
Write this to _build-1-reflection.md (not a template -- genuine thought).
```

**Output:** `_build-pass-1.html`, `_build-1-reflection.md`

**What this phase achieves:** The builder has spent ~40 minutes (including Opus thinking time) with:
- A content-driven spatial hypothesis (from Phases 3-4)
- Direct access to the article
- A rich spatial vocabulary (from Phase 2)
- Freedom from procedural overhead
- No deployment quotas, no structural caps, no "build vertical first"

**Cognitive state produced:** Topology foundation. The builder has made IRREVERSIBLE spatial commitments that serve the content's meaning. The page has a spatial identity that is content-shaped, not template-shaped.

**Cost:** ~$18 (1 Opus agent, extended context, significant output)

---

### Phase 6: EVALUATE-1 (Fresh Eyes) [20 min, $12]

**Purpose:** Three independent evaluators examine the build WITHOUT having seen the topology document. They are fresh-eyes agents who assess whether the page communicates the content's meaning spatially.

**Agents:** 3 Opus (parallel)

**Agent 6A: Content-Form Coupling Evaluator**
- Input: `_build-pass-1.html` (served via HTTP), content markdown, screenshots at 1440px and 768px
- Task: Score against the 10 falsifiable criteria from the cognitive mechanism definition. Named grid areas? Asymmetric proportions? Layout loss = content loss? Self-referential components? Report scores and specific evidence.
- Output: `_eval-1/coupling.md`

**Agent 6B: Visual Maturity Evaluator**
- Input: `_build-pass-1.html`, screenshots
- Task: Assess against the 5 visual maturity dimensions (does it know what it's about? spatial confidence? self-awareness? reading path variety? maturity gestalt?). Identify the 3 weakest areas.
- Output: `_eval-1/maturity.md`

**Agent 6C: Convention Compliance Evaluator**
- Input: `_build-pass-1.html`, `_convention-spec.md`, screenshots
- Task: Check all binary constraints (soul, border, responsive, container width). Check for the perceptual minimums (background delta >= 15 RGB, letter-spacing >= 0.025em, 3+ channel shifts at boundaries). Report violations only.
- Output: `_eval-1/compliance.md`

**What this phase achieves:** The builder receives targeted feedback on what is working (content-form coupling score), what is weak (maturity dimensions), and what is broken (compliance violations). This feedback drives Phase 7.

**Cognitive state produced:** Evaluative clarity. The builder knows what to deepen, what to fix, and what is already strong.

**Cost:** ~$12 (3 parallel Opus agents)

---

### Phase 7: BUILD-2 (Topology Deepening) [30 min, $14]

**Purpose:** The builder reads the three evaluation reports and DEEPENS the build. This is not "fix what's broken." This is "take what is good and make it BETTER." The evaluation reports serve the same role as the exploration era's enrichment waves.

**Agent:** 1 Opus

**Input:**
1. `_build-pass-1.html` -- the current build
2. `_build-1-reflection.md` -- the builder's own uncertainty
3. All three evaluation reports (`_eval-1/coupling.md`, `_eval-1/maturity.md`, `_eval-1/compliance.md`)
4. Content markdown -- YES, the article again, because the deepening builder should re-engage with content
5. `_refined-topology.md` -- the spatial hypothesis
6. `_curated-structural.md` -- the spatial vocabulary (in case new techniques are needed)
7. `_curated-textural.md` -- the textural vocabulary
8. `_convention-spec.md` -- binary constraints (reference)

**Builder prompt:**

```
You built the first pass. Now DEEPEN it.

Read the three evaluation reports. They tell you:
- COUPLING: How well your spatial decisions embody the content's meaning
  (score out of 10 on the falsifiable criteria)
- MATURITY: Which visual maturity dimensions are weakest
- COMPLIANCE: What binary constraints were violated

Your priorities for this pass:
1. Fix ALL compliance violations. These are binary -- soul violations,
   border errors, responsive failures. Fix them first and completely.
2. DEEPEN the weakest maturity dimensions. If "reading path variety"
   scored low, ask: "Am I using the same spatial skeleton for every
   section? What sections deserve DIFFERENT spatial treatment?" If
   "self-awareness" scored low, ask: "Does this page know what it is
   about? Should there be a component that references the page's own
   structure?"
3. STRENGTHEN content-form coupling. For each criterion that FAILED:
   investigate. Why did "layout loss = content loss" fail? Identify the
   sections where you could lose the layout without losing meaning, and
   ask: "what spatial form would CARRY meaning in this section?"
4. Re-read the article. Has your understanding deepened? Are there
   spatial implications you missed in Pass 1?

You MAY:
- Add new sections, new layouts, new spatial organizations
- Change the spatial logic of any section
- Invent components that did not exist in Pass 1
- Use CSS techniques from the curated structural research that you
  did not use in Pass 1

You MAY NOT:
- Violate soul constraints (border-radius: 0, box-shadow: none, etc.)
- Break responsive (must work at 1440px and 768px)
- Remove content from the article
- Exceed 940-960px container width

OUTPUT: Updated HTML file and a brief deepening reflection.
```

**Output:** `_build-pass-2.html`, `_build-2-reflection.md`

**Cognitive state produced:** Deepened topology. The spatial decisions that survived evaluation are reinforced. Weak areas are strengthened. The builder has now spent ~70 minutes total with this content across two passes.

**Cost:** ~$14 (1 Opus agent with extended context from evaluation reports)

---

### Phase 8: EVALUATE-2 (Full PA) [25 min, $18]

**Purpose:** Full perceptual audit with 5 evaluators plus a weaver that synthesizes. This is the current pipeline's Mode 4 PA but applied to a richer build.

**Agents:** 5 Opus auditors (parallel) + 1 Opus weaver

**Auditors** each receive screenshots and assess from a different lens:
- Auditor 1: Spatial structure and content-form coupling
- Auditor 2: Typography and information hierarchy
- Auditor 3: Density rhythm and breathing
- Auditor 4: Responsive behavior and breakpoint integrity
- Auditor 5: Emotional arc and metaphor embodiment

**Weaver** receives all 5 auditor reports and produces:
- A synthesis with AMPLIFY/RELEASE/DEEPEN/GAP classifications
- Specific CSS direction for each GAP and DEEPEN item
- A verdict: is this page ready, or does it need another build pass?

**Output:** `_eval-2/auditor-[1-5].md`, `_eval-2/synthesis.md`

**Cognitive state produced:** Comprehensive evaluation. The builder receives multi-perspective feedback.

**Cost:** ~$18 (6 Opus agents)

---

### Phase 9: BUILD-3 (Topology Hardening) [25 min, $12]

**Purpose:** Final build pass. The builder addresses the weaver's synthesis, fixes remaining issues, and POLISHES. Unlike the current Pass 3 (which is "don't be creative"), this pass is "be creative WHERE THE EVALUATORS IDENTIFIED GAPS." The builder has earned the right to polish because they have already spent 100+ minutes understanding the content and 2 passes building.

**Agent:** 1 Opus

**Input:**
1. `_build-pass-2.html`
2. `_eval-2/synthesis.md` (the weaver's direction)
3. Content markdown
4. `_convention-spec.md` (final compliance check)

**Builder prompt:**

```
This is the final pass. The weaver's synthesis identifies:
- AMPLIFY: What is working -- protect it
- RELEASE: Overworked elements -- simplify
- DEEPEN: Good ideas that need more commitment
- GAP: Missing elements

Address the GAPs and DEEPENs. Protect the AMPLIFYs. Release the
RELEASEs. Then do a final soul compliance sweep.

This is NOT "be defensive." This is "finish the work." If a GAP item
requires structural invention, INVENT. If a DEEPEN item requires a new
component, CREATE. The evaluators have identified what the page needs.
Your job is to deliver it.

Then: one final read of the article. Does this page feel INEVITABLE --
like the content could not have been presented any other way? If not,
identify the one section where the layout feels most interchangeable
and make one more spatial commitment there.
```

**Output:** `_build-final.html`, `_build-3-reflection.md`

**Cognitive state produced:** Completed topology. The page has been built, evaluated, deepened, re-evaluated, and hardened. The spatial logic is content-shaped and has survived multi-perspective scrutiny.

**Cost:** ~$12 (1 Opus agent)

---

### Phase 10: FINAL EVALUATION [15 min, $10]

**Purpose:** Comparison evaluation against the 10 falsifiable criteria and the 5 visual maturity dimensions. Produces the final scorecard and a comparison report.

**Agents:** 3 Opus (parallel)

**Agent 10A: Criteria Scorer**
- Score against all 10 falsifiable criteria (named grid areas, asymmetric proportions, layout loss = content loss, self-referential components, positioned composition, content-mapped color, spatial organization count, transition/animation density, content-reasoning comments, non-default reading directions)
- Output: `_final/criteria-score.md`

**Agent 10B: Maturity Scorer**
- Score against all 5 visual maturity dimensions with specific evidence
- Output: `_final/maturity-score.md`

**Agent 10C: Comparison Report**
- Compare against exploration-era benchmarks (AD-006, OD-005, CD-006)
- Output: `_final/comparison-report.md`

**Cost:** ~$10

---

## C. The Builder Experience

### Minute-by-minute walk-through for the Build-1 agent (Phase 5)

**Minutes 0-5: Reading the refined topology.**
The builder opens `_refined-topology.md`. This is not a package of mechanism names. It is a 300-line document that ARGUES for a specific spatial form. It says things like: "Section 3's comparison of the old paradigm with the new paradigm is fundamentally asymmetric -- the new paradigm takes up more conceptual space, demands more attention, and carries more emotional weight. A symmetric `1fr 1fr` grid would misrepresent this relationship. A `3fr 1fr` grid would embody it." The builder is immediately thinking about CONTENT MEANING, not deployment quotas.

**Minutes 5-15: Reading the article.**
The builder reads the full article. Not to "map sections to zones" -- to UNDERSTAND. The TC brief said the metaphor is a "refinery cross-section." The refined topology says the article's argument converges from five independent threads toward a synthesis. The builder reads the article and feels the convergence: sections 2-6 each present an independent facet, section 7 synthesizes them. The builder starts forming spatial hypotheses: "The five independent threads could be five parallel narrow columns that physically merge into one wide column at the synthesis."

**Minutes 15-20: Reading the curated research.**
The builder opens `_curated-structural.md`. It shows AD-006's golden ratio grid with the actual CSS. It shows OD-005's hub-spoke layout. It shows CD-006's transition grammar. The builder's spatial vocabulary expands. The convergence idea evolves: "Not five columns -- five ZONES with different spatial characters, separated by breathing transitions that get SHORTER as the article converges. The synthesis zone uses a hub-spoke where the central finding physically occupies the center."

**Minutes 20-25: Making the foundational spatial decision.**
The builder does NOT build a vertical skeleton. The builder decides: this page is a CONVERGENCE. The opening is wide and spacious (generous margins, maybe a hero element that spans the full container). The middle sections progressively compress. The synthesis is dense and physically central. The closing is a single narrow column -- the argument has been made, the complexity has resolved.

This is the "falls in love" moment. The builder has formed a content topology -- a mapping from the article's argument structure to a spatial form. Every subsequent CSS decision will serve this topology.

**Minutes 25-40: Building.**
The builder writes CSS zone by zone. Each zone's `grid-template-columns`, `padding`, `gap`, and border treatment is chosen to serve the content's meaning in that zone. Named grid areas reference content concepts: `grid-template-areas: "paradigm-old paradigm-new paradigm-new"` (the new paradigm gets 2/3 of the space). Border-left colors encode the article's confidence gradient. Spacing between zones varies based on cognitive distance (the exploration-era transition grammar). The builder invents a component the content didn't ask for: a convergence indicator that shows, at a glance, how many of the five threads have been introduced.

**Minutes 35-40: Writing reflection.**
The builder writes genuinely: "I was surprised by how much the article's structure demanded asymmetric grids. I initially planned symmetric columns for Section 4, but re-reading the content revealed that the 'old way' is being dismissed -- it should be subordinate, not equal. I deviated from the topology blueprint by adding a self-referential wave visualization at the top, inspired by OD-005, because this article's density rhythm is so varied that the reader benefits from seeing the journey ahead."

**Total time from article-read to first `display: grid`:** ~20 minutes. Compare to current pipeline: ~2 minutes (the builder reads the package, then immediately starts building vertical).

---

## D. The Prompt Architecture

### Current pipeline builder prompt (Pass 1):
```
Total lines:         432
Content engagement:  8 lines  (1.9%)
Creative direction:  79 lines (18.3%)
Procedural:          345 lines (79.9%)
Content engagement ratio: 0.25
```

### Maximum effort builder prompt (Phase 5):

```
Total lines:         ~80-100
Content engagement:  ~35 lines (35-40%)
Creative direction:  ~30 lines (30-35%)
Procedural:          ~15 lines (15-20%)
Reference:           ~10 lines (10-12%)
Content engagement ratio: ~2.5
```

The prompt is 80-100 lines, not 432. The reduction comes from:
1. No reading order mandates (the input ordering handles this)
2. No deployment quotas (replaced by "deploy what the content NEEDS")
3. No citation format requirements (citations added post-hoc if needed)
4. No decision file templates (replaced by open-ended reflection prompts)
5. No validation checklists (moved to evaluator agents in Phase 6)
6. No structural section caps (replaced by "build what the content demands")
7. No "build vertical first" mandate (replaced by "decide the foundational spatial logic")

The prompt IS:
- 35 lines of content engagement ("read the article, understand the argument, answer these questions")
- 30 lines of creative direction ("build the spatial logic the content demands, use content-semantic names, make spatial commitments")
- 15 lines of non-negotiable constraints (soul constraints, container width, responsive, accessibility)
- 10 lines pointing to reference files (convention spec, textural research)

**The ratio is inverted.** Current: 7 procedural lines per 1 content line. Maximum effort: 2.5 content lines per 1 procedural line.

---

## E. Constraint Philosophy

### The 74 constraints, triaged:

**KEPT (18 constraints) -- Binary, identity-preserving, non-creative:**
- B-21: Soul constraints (border-radius: 0, box-shadow: none, etc.) -- ABSOLUTE
- B-22: 2px border ban -- ABSOLUTE
- B-23: Container width 940-960px -- ABSOLUTE
- B-10: Do not remove content -- ABSOLUTE
- A-11: 3+ channel shifts at zone boundaries -- QUALITY FLOOR
- All responsive requirements -- FUNCTIONAL
- ARIA landmarks, skip link -- ACCESSIBILITY
- Google Fonts linking -- FUNCTIONAL

These survive because they are binary (pass/fail), identity-preserving (they define what the design system IS), and non-creative (they constrain visual vocabulary, not spatial reasoning). AD-006 achieved 10/10 on the falsifiable criteria with zero soul violations. Soul constraints do not prevent content-topology formation.

**KILLED (42 constraints) -- Procedural, cap-based, creativity-suppressing:**
- C-06: Build vertical first -- KILLED (the single most destructive constraint)
- C-14: Must be proposed in Section 11 -- KILLED (builder invents its own structure)
- A-01/A-04: Max 2 structural sections -- KILLED (no structural cap)
- A-09: 10+ findings deployment -- KILLED (no deployment quotas)
- C-01/C-02/C-03: FOLLOW EXACTLY reading order -- KILLED (input ordering, not mandated)
- B-01/B-02: No mechanism invention -- KILLED (builder can use any technique)
- B-12/B-13/B-15: No creativity in Pass 3 -- KILLED (Pass 3 is creative where evaluators identified gaps)
- D-01 through D-14: All cultural signals -- KILLED (replaced by empowering language)
- E-01 through E-11: Information access limits -- KILLED (builder has direct access)
- All citation format requirements -- KILLED (post-hoc if needed)
- All decision file templates -- KILLED (open-ended reflection)

**TRANSFORMED (14 constraints) -- Converted from procedural to evaluative:**
- C-05: Write transition table BEFORE CSS --> Evaluators assess transition quality AFTER build
- C-08: Preserve zone skeleton --> Build-2 agent receives evaluation feedback, decides what to preserve
- A-10: 2+ case study techniques --> Evaluators check for technique diversity, not the builder
- A-12: 8+ component instances --> Evaluators check for component richness, not the builder

**What replaces quality assurance?** The three evaluation phases (6, 8, 10). Quality is no longer enforced by constraining the builder during creation. Quality is assessed by evaluators AFTER creation, and the builder responds to evaluation feedback. This is the exploration-era pattern: build freely, audit rigorously, deepen based on findings.

---

## F. Concrete Example: Yegge/Gas Town Build

### Current pipeline output (P1)
The pipeline produced a page with:
- A "refinery cross-section" metaphor carried by naming conventions and background colors
- 17 sections, all using the same 960px centered column with block-stacked prose
- 9 instances of `grid-template-columns: 1fr 1fr` (symmetric)
- 0 named grid areas, 0 position:sticky, 0 position:relative, 0 writing-mode
- Score: 0/10 on falsifiable criteria

### What the maximum effort architecture would produce:

**Phase 3 (Immerse) output, hypothetical:**

The immersion agent reads the article and identifies:
- The article is about a PARADIGM SHIFT: from traditional software development to AI-assisted development
- The argument structure is: introduction of the problem (the old world) --> revelation of the new paradigm (Gas Town) --> five consequences of the paradigm --> synthesis (what it means for the industry)
- The old world is being DISMISSED. It is not equal to Gas Town. The article is not "here are two approaches" -- it is "here is why the old approach is dead."
- The five consequences are INDEPENDENT but CONVERGENT. Each consequence (velocity, quality, accessibility, economics, culture) is explored separately, but they all point to the same conclusion.

**Phase 4 (Discover) output, hypothetical:**

Structural hypothesis: "This page is a CONVERGENCE FUNNEL. The opening is wide -- the old world occupies space because it is familiar, but it is being dismissed. The five consequences fan out like spokes. The synthesis is a NARROW COLUMN -- the argument has resolved to a single point. The page physically narrows as certainty increases."

Three spatial commitments:
1. The old/new paradigm comparison uses `grid-template-columns: 1fr 3fr` -- the old paradigm gets 25%, physically subordinated. NOT `1fr 1fr`.
2. The five consequences use a `3fr 1fr` grid with a sticky sidebar that shows which consequence you are reading and how it connects to the others. The sidebar is a TERRITORY MAP -- inspired by OD-005's hub-spoke.
3. The synthesis section breaks out of the 960px column to a NARROWER 720px container, physically embodying the convergence. The prose tightens. The typography tightens (tighter letter-spacing). The conclusion feels compressed and inevitable.

**Phase 5 (Build-1) first spatial decision:**

The builder does NOT start with `<div class="page-spine" style="max-width: 960px">`. The builder starts with the article's structure:

```css
.convergence-funnel {
  /* The page itself narrows */
  --width-opening: 960px;    /* Wide: the familiar old world */
  --width-consequences: 940px; /* Slightly tighter: focused exploration */
  --width-synthesis: 720px;   /* Narrow: the argument has converged */
}

.paradigm-comparison {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "old-world gas-town";
  gap: var(--space-8);
}

.consequence-territory {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "exploration territory-map";
}

.territory-sidebar {
  position: sticky;
  top: var(--space-6);
}
```

**When does the builder realize "refinery cross-section" means layered positioning, not background colors?**

In Phase 3 (Immerse), when the immersion agent writes: "The refinery metaphor suggests STRATA -- geological layers with different densities, different pressures, different materials. A real refinery cross-section shows pipes connecting different levels, materials flowing between strata, and each stratum having a different visual character. The current pipeline implementation uses background colors to name strata but does not create the spatial sensation of depth, connection, or pressure difference. A content-driven implementation would use `position: relative` containers with `position: absolute` connection lines between strata, border treatments that encode material density (thick borders for heavy/foundational strata, thin borders for volatile/speculative strata), and progressive spacing compression (generous spacing at the surface, tight spacing deep underground)."

The builder reads this in Phase 5 and implements it. The "refinery" is no longer 7 sections with different background colors. It is 7 STRATA with:
- Border-left thickness encoding depth (surface: 1px, bedrock: 4px)
- Spacing compression (surface sections: `padding: 80px 0`, deep sections: `padding: 40px 0`)
- Connection lines between strata (pseudo-elements positioned absolutely across zone boundaries)
- A stratum indicator (position: sticky) showing current depth

This is Decision 8 from the screenshot analysis (CD-006's epistemological strata) applied to different content but with the same principle: border weight encodes a content-semantic gradient.

---

## G. Cost Breakdown

| Phase | Agents | Model | Est. Cost | What It Buys |
|-------|--------|-------|-----------|-------------|
| 0: Setup | 0 | -- | $0 | Infrastructure |
| 1: Derive | 1 | Opus | $4 | Metaphor + emotional arc + structural observation |
| 2: Curate | 3 | Opus | $12 | Bespoke, implementation-mapped research (the missing curation layer) |
| 3: Immerse | 1 | Opus | $8 | Content-topology formation (30 min of deep content reading) |
| 4: Discover | 1 | Opus | $6 | Structural hypothesis testing and refinement |
| 5: Build-1 | 1 | Opus | $18 | Topology-foundational HTML (40 min of content-driven building) |
| 6: Evaluate-1 | 3 | Opus | $12 | Content-form coupling score + maturity gaps + compliance |
| 7: Build-2 | 1 | Opus | $14 | Deepened topology (evaluation-driven enrichment) |
| 8: Evaluate-2 | 6 | Opus | $18 | Full PA (5 auditors + weaver synthesis) |
| 9: Build-3 | 1 | Opus | $12 | Hardened + polished final page |
| 10: Final Eval | 3 | Opus | $10 | Criteria score + maturity score + comparison report |
| **SUBTOTAL** | **21** | | **$114** | |
| Optional: Extra deepen cycle | 4 | Opus | $30-40 | Additional evaluate + build cycle if scores are low |
| Optional: Second deepen cycle | 4 | Opus | $30-40 | Emergency enrichment |
| **TOTAL** | **21-29** | | **$114-194** | |

### Where the money goes vs current pipeline:

| Expense Category | Current ($30) | Maximum Effort ($150-200) | Delta |
|-----------------|---------------|--------------------------|-------|
| TC derivation | $4 | $4 | $0 (same) |
| Research/curation | $14 | $12 | -$2 (fewer specialists, more focused) |
| Content immersion | $0 | $14 | +$14 (does not exist in current pipeline) |
| Building | $18 | $44 | +$26 (3 discovery-driven passes vs 3 assembly passes) |
| Evaluation | $10 | $40 | +$30 (3 evaluation rounds vs 1) |
| Refinement | $0-8 | $0-80 | +$0-72 (optional deepening cycles) |

**The $120 premium buys:**
- $14 for content immersion (the cognitive state that produces content-topology formation)
- $26 for deeper building (3 passes that DISCOVER rather than ASSEMBLE)
- $30 for richer evaluation (3 evaluation rounds that REDIRECT the builder)
- $0-72 for optional deepening (the exploration-era enrichment waves)

Every premium dollar goes toward TIME and ITERATION -- the two inputs that the exploration era had and the current pipeline lacks.

---

## H. Success Criteria

### Falsifiable criteria targets (from cognitive mechanism definition):

| Criterion | Current Pipeline | Target | What Must Change |
|-----------|-----------------|--------|-----------------|
| 1. Named grid areas (content vocab) | 0 | 2+ | Phase 3 immersion produces content vocabulary |
| 2. Asymmetric grid proportions | 0-1 | 2+ | Phase 4 hypothesis specifies proportions |
| 3. Layout loss = content loss | 0 | 2+ | Phase 5 builder makes content-irreversible layouts |
| 4. Self-referential components | 0 | 2+ | Phase 3 identifies self-reference opportunities |
| 5. Position relative/absolute pairs | 0 | 2+ | Curated research includes positioned examples |
| 6. Content-mapped color semantics | 0 | 1+ | Immersion agent identifies color-semantic mappings |
| 7. Distinct spatial organizations | 1-2 | 4+ | No structural section cap |
| 8. Transition/animation density | 2 | 6+ | Textural research includes interaction patterns |
| 9. CSS comments = content reasoning | FAIL | PASS | Cultural shift: comments explain WHY, not WHAT |
| 10. Non-default reading directions | 0 | 1+ | Curated research includes writing-mode, float examples |

**Target: 7+/10 on first run.** (Exploration benchmarks: AD-006 = 10/10, OD-005 = 9/10)

### Visual maturity dimension targets:

| Dimension | Current | Target | How Achieved |
|-----------|---------|--------|-------------|
| 1. Does it know what it's about? | 20% | 80%+ | Phases 3-4 (content immersion + hypothesis) |
| 2. Spatial confidence | 30% | 75%+ | No structural caps, asymmetric grids in curated research |
| 3. Self-awareness | 5% | 60%+ | Immersion agent identifies self-reference opportunities |
| 4. Reading path variety | 20% | 70%+ | No "build vertical first," multiple spatial orgs encouraged |
| 5. Visual maturity (gestalt) | 15% | 65%+ | Cumulative effect of above 4 dimensions |

### "How do you know it's working?" test:

Take the output HTML and run the SWAP TEST: pick any section and attempt to move it to a different page about a different topic. If the section works equally well on the other page, the architecture has FAILED for that section -- the layout is generic, not content-shaped. Target: 50%+ of sections FAIL the swap test (their layout only makes sense for this specific content).

---

## I. What This Architecture Does NOT Do

### 1. It does not guarantee exploration-era quality.
The exploration era had 149 agents for OD, 6 waves of enrichment, cross-page consistency audits, and months of accumulated knowledge. This architecture has 21-29 agents and 4 hours. It aims for 70% of exploration quality at 10% of exploration effort. The remaining 30% gap requires cross-build knowledge accumulation, which is out of scope.

### 2. It does not solve the Sonnet/Opus question.
This architecture uses Opus for every agent. The exploration era's crown jewels were also built by Opus. Whether Sonnet could achieve the same content-topology formation state is unknown. The architecture ASSUMES Opus. Downgrading to Sonnet for cost reduction would require separate testing.

### 3. It does not address content suitability.
Not all content produces structural invention. Linear tutorials, simple how-tos, and procedural documentation may not have the internal argument structure that generates spatial hypotheses. The immersion agent may produce a topology document that says "this content is linear; a single column is the correct spatial form." The architecture should not force structural complexity on content that does not warrant it. The Phase 4 (Discover) agent serves as a check against this.

### 4. It does not include cross-build knowledge accumulation.
The exploration era's most powerful quality mechanism was inheritance: CD-006 inherited 88 prior findings from DD, OD, and AD stages. This architecture starts from the same knowledge base every time. Building a cross-build accumulation system (where build N's findings feed build N+1) is a separate project. However, the architecture's evaluation reports (`_eval-1/*.md`, `_eval-2/*.md`, `_final/*.md`) COULD serve as the foundation for such a system.

### 5. It does not solve the output token constraint.
Each build phase (5, 7, 9) must produce a complete HTML page within Opus's output token limit (~32K tokens, ~2,500 lines). For extremely long articles, this may require the builder to make hard choices about which sections get structural treatment. The architecture does not include a mechanism for splitting builds across multiple agents (one builder per section group) -- this would require additional coordination.

### 6. It does not eliminate all procedural overhead.
The builder still needs soul constraints, container width, responsive requirements, and accessibility standards. These consume ~15-20% of the prompt. The architecture reduces procedural overhead from 87.6% to ~15-20% -- a 4-5x improvement -- but does not reach 0%.

### 7. It may produce overbuilt pages.
Without deployment quotas and structural caps, a builder in the "in love" state might add spatial complexity beyond what the content warrants. The three evaluation phases serve as a check, but the evaluators are assessing quality, not restraint. An additional "restraint evaluator" that asks "is this structural choice NECESSARY or decorative?" could be added but is not in the base architecture.

---

## Agent Log

- **Agent:** Maximum Effort Architect (Task #5 / Task #11)
- **Files read:** 8 files (~5,000 lines total): 4 Wave 1 research reports, context budget analysis, exploration process reconstruction, builder constraint audit, current pipeline SKILL.md
- **Method:** Synthesized all Wave 1 findings into executable architecture, cross-referencing exploration-era processes against current pipeline constraints
- **Key architectural decisions:** (1) Content immersion as a separate phase before building, (2) Evaluation-driven iteration replacing constraint-driven prevention, (3) Builder prompt inverted from 80% procedural to 80% content-engagement, (4) Curated research replacing compressed packages, (5) No structural section caps or deployment quotas
- **Output:** This file (~650 lines)
- **Quality self-assessment:** MEETS GOALS -- addresses all 6 required questions (cognitive state, attention ratio, technique vocabulary, time/cost, multi-pass, research integration), provides complete phase structure with cost breakdown, includes concrete Yegge/Gas Town example, specifies success criteria with measurable targets
