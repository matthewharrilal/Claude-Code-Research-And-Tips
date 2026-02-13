# Multi-Axis Questioning: Deep Research on Reader Need Dimensions

**Researcher:** Axis Researcher (Tension-Pipeline Team)
**Date:** 2026-02-12
**Purpose:** Discover, evaluate, and classify question axes beyond the core four (FEEL/UNDERSTAND/DO/BECOME) for the tension-composition pipeline.

---

## Table of Contents

1. [Framework Survey](#1-framework-survey)
2. [Discovered Axes — Full Inventory](#2-discovered-axes--full-inventory)
3. [Redundancy Analysis](#3-redundancy-analysis)
4. [The Minimal Non-Redundant Set](#4-the-minimal-non-redundant-set)
5. [Real Content Testing](#5-real-content-testing)
6. [Axis-Tension Interaction Map](#6-axis-tension-interaction-map)
7. [Recommendations for the Pipeline](#7-recommendations-for-the-pipeline)

---

## 1. Framework Survey

### 1.1 Cognitive Science Frameworks

**Bloom's Taxonomy (Revised, Anderson & Krathwohl 2001)**
Six cognitive levels: Remember, Understand, Apply, Analyze, Evaluate, Create

Mapping to core axes:
- Remember/Understand → partially captured by UNDERSTAND
- Apply → partially captured by DO
- Analyze/Evaluate → NOT captured by core four (gap: critical judgment)
- Create → partially captured by BECOME (transformation into creator)

**Gap identified:** The EVALUATE level — "Can the reader make informed judgments about quality, validity, or fit?" — is distinct from both understanding (cognitive mapping) and doing (action). It requires holding criteria and applying them, which is a different structural demand than either comprehension or execution.

**Dual Coding Theory (Paivio 1986)**
Information encoded both verbally and visually. Implies a reader need: "What does the reader need to SEE (mentally or literally) to grasp this content?" — a spatial/visual axis that is NOT the same as FEEL (emotional) or UNDERSTAND (relational/logical).

**Cognitive Load Theory (Sweller 1988)**
Three types: intrinsic (inherent complexity), extraneous (bad design), germane (schema construction). Implies: "How does the reader need the DIFFICULTY to be distributed?" — a pacing/scaffolding axis.

### 1.2 UX Research Frameworks

**Jobs-to-be-Done (Christensen)**
People "hire" content to do a job. The job frame produces: "What job is the reader hiring this content to perform?" This reframes DO but adds temporal context — the job exists BEFORE and AFTER reading, which DO (action after reading) doesn't capture.

**Kano Model**
Three need types: Must-be (expected), Performance (linear satisfaction), Delight (unexpected). Implies: "What would SURPRISE the reader about this content?" — a delight/surprise axis. However, this is closer to a QUALITY dimension of FEEL than a separate axis.

**Emotional Design (Norman)**
Three levels: visceral (immediate), behavioral (use), reflective (meaning). Maps cleanly to:
- Visceral → FEEL
- Behavioral → DO
- Reflective → BECOME

This CONFIRMS the core four rather than expanding them.

### 1.3 Pedagogical Frameworks

**Zone of Proximal Development (Vygotsky)**
Learning happens in the gap between what a reader can do alone and what they can do with support. Implies: "What does the reader ALREADY KNOW that this content builds on?" — a prerequisite/scaffolding axis. Structural implication: the page must BRIDGE from known to unknown.

**Constructivism (Piaget, Dewey)**
Knowledge is built, not received. Implies: "What does the reader need to BUILD (mentally construct) while reading?" This is subtly different from UNDERSTAND — construction requires active assembly, not just comprehension. But it overlaps heavily with BECOME (transformation through construction).

**Scaffolding (Bruner)**
Temporary support structures removed as competence grows. Implies a structural property (progressive disclosure, training wheels) rather than a separate axis. This is HOW to serve other axes, not WHAT to serve.

### 1.4 Rhetoric Frameworks

**Ethos/Pathos/Logos (Aristotle)**
- Logos → UNDERSTAND
- Pathos → FEEL
- Ethos → NEW: "What does the reader need to BELIEVE about this content's authority/credibility?"

**Kairos (Rhetoric)**
"The right time." Implies: "When in the reader's journey is this content NEEDED?" This is contextual rather than content-intrinsic — it affects HOW the content should be presented (urgency, relevance framing) but doesn't produce a separate structural demand from the content itself.

### 1.5 Narrative Theory

**Identification (Burke)**
Reader needs to see themselves in the content. Implies: "Who does the reader need to IDENTIFY WITH in this content?" This is distinct from FEEL (emotion) and BECOME (transformation) — it's about recognition and mirroring. Structural implication: perspective anchoring, voice selection, example selection.

**Anagnorisis (Aristotle)**
The moment of recognition/revelation. Implies: "What does the reader need to DISCOVER (not be told)?" Structural implication: progressive revelation, delayed payoff, aha-moment architecture. This is a FEEL sub-type (the feeling of discovery) combined with an UNDERSTAND structural pattern (revelation ordering).

**Catharsis**
Emotional release through vicarious experience. Overlaps heavily with FEEL. Not a separate axis.

### 1.6 Information Architecture

**Wayfinding (Lynch, Morville)**
"How does the reader need to ORIENT within this content?" This is the NAVIGATE axis already listed in the skill file. It's about topology — spatial relationships, position awareness, movement options.

**Sensemaking (Weick, Dervin)**
"How does the reader need to RECONCILE this content with what they already believe?" This is different from UNDERSTAND (which is about the content's internal relationships) — sensemaking is about the content's relationship to the reader's EXISTING mental model. It produces tension when content contradicts expectations.

### 1.7 Design Thinking

**Empathy (d.school)**
Understanding user context. This is a method, not a reader need axis.

**Define/Ideate**
These are process stages, not reader need dimensions.

---

## 2. Discovered Axes — Full Inventory

Below is every axis discovered through the framework survey, including the four already in the skill file as candidates (NAVIGATE, COMPARE, TRUST, CONNECT). Each is evaluated for independence from the core four.

### 2.1 Core Four (Already Defined)

| # | Axis | Question | Produces | Status |
|---|------|----------|----------|--------|
| C1 | **FEEL** | "What does the reader need to FEEL while navigating this content?" | Emotional/sensory needs | CORE |
| C2 | **UNDERSTAND** | "What does the reader need to UNDERSTAND about the relationships in this content?" | Cognitive/structural needs | CORE |
| C3 | **DO** | "What does the reader need to DO with this content after reading?" | Action/decision needs | CORE |
| C4 | **BECOME** | "What does the reader need to BECOME after absorbing this content?" | Transformation needs | CORE |

### 2.2 Candidate Additional Axes (Already in Skill File)

| # | Axis | Question | Produces | Independence Assessment |
|---|------|----------|----------|------------------------|
| A1 | **NAVIGATE** | "How does the reader need to move THROUGH this content?" | Topological/movement needs | **INDEPENDENT** — distinct from UNDERSTAND (which is about relationships between ideas, not about the reader's path through them). A page can have clear relationships but terrible navigation, and vice versa. |
| A2 | **COMPARE** | "What does the reader need to hold in parallel?" | Parallel-holding needs | **SEMI-INDEPENDENT** — overlaps with UNDERSTAND (comparison is a form of understanding relationships). But the STRUCTURAL demand is unique: comparison requires simultaneity (side-by-side), while understanding allows sequence. Valuable as a sub-axis that triggers specific layout demands. |
| A3 | **TRUST** | "What does the reader need to believe about this content's authority?" | Authority/credibility needs | **INDEPENDENT** — maps to Aristotle's ethos. Completely distinct from FEEL (trust is not an emotion, it's an epistemic stance), UNDERSTAND (you can understand untrustworthy content perfectly), and DO/BECOME (action and transformation don't require trust in the content's authority). |
| A4 | **CONNECT** | "What relationships between parts does the reader need to perceive?" | Linkage/association needs | **REDUNDANT with UNDERSTAND** — "relationships between parts" IS what UNDERSTAND produces. The question template is nearly identical. Recommend MERGING into UNDERSTAND or reframing as a specific sub-type. |

### 2.3 Newly Discovered Axes

| # | Axis | Question | Produces | Source Framework | Independence |
|---|------|----------|----------|-----------------|-------------|
| N1 | **EVALUATE** | "What does the reader need to JUDGE about the quality, validity, or fit of what's presented?" | Critical judgment needs: criteria, standards, comparative assessment | Bloom's Taxonomy (Evaluate level) | **INDEPENDENT** — distinct from UNDERSTAND (comprehension without judgment) and DO (judgment without action). The reader needs to form an OPINION, not just comprehend or execute. Structural demand: criteria visibility, evidence weighting, confidence signaling. |
| N2 | **ORIENT** | "What does the reader need to know about WHERE THIS FITS before engaging with the content?" | Context/position needs: prerequisites, scope, relationship to other knowledge | ZPD (Vygotsky), Sensemaking (Weick) | **INDEPENDENT** — distinct from UNDERSTAND (which is about internal relationships) and NAVIGATE (which is about movement within). ORIENT is about the content's position in the LARGER knowledge landscape. Structural demand: "You Are Here" framing, prerequisite signaling, scope declaration. |
| N3 | **IDENTIFY** | "Who does the reader need to SEE THEMSELVES AS while engaging with this content?" | Recognition/mirroring needs: role assumption, perspective taking, self-location within the content | Narrative identification (Burke) | **SEMI-INDEPENDENT** — overlaps with FEEL (identification can produce emotion) and BECOME (identification is part of transformation). But the structural demand is unique: it requires voice, perspective, and example selection that mirrors the reader. It's the difference between "this content makes me feel warm" (FEEL) and "this content is about someone like me" (IDENTIFY). |
| N4 | **PACE** | "How does the reader need the DENSITY and DIFFICULTY to change as they move through this content?" | Rhythm/cadence needs: acceleration, deceleration, rest points, intensity curves | Cognitive Load Theory, Scaffolding | **SEMI-INDEPENDENT** — overlaps with NAVIGATE (pacing affects navigation) and FEEL (rhythm affects emotion). But PACE specifically addresses the TEMPORAL experience: where should content compress? Where should it breathe? This is distinct from both the emotional register (FEEL) and the topological structure (NAVIGATE). Structural demand: density gradients, breathing room, progressive complexity. |
| N5 | **RECONCILE** | "What does the reader need to RECONCILE between this content and what they already believe?" | Cognitive dissonance needs: contradiction handling, paradigm bridging, belief updating | Sensemaking (Weick, Dervin) | **INDEPENDENT** — distinct from UNDERSTAND (which maps internal content relationships) and ORIENT (which establishes external position). RECONCILE specifically addresses the FRICTION between the content and the reader's existing mental model. When content says "everything you thought was wrong," RECONCILE becomes the dominant axis. Structural demand: explicit contrast with prior belief, graduated persuasion, evidence stacking. **Cross-ref from tension-analyst:** Scores 27/27 MAXIMUM on richness formula (Opposition Depth x Structural Overlap Density x Metaphor Space Width). The precise structural opposition is NOT challenge-vs-assert (too coarse) but **verdict-pressure vs open-holding**: the KortAI system always drives toward summary/recommendation rows (Decision Matrix, Reasoning Box); RECONCILE demands holding positions open WITHOUT resolving. The system has parallel-containment tools but lacks open-ended-holding tools. This is where the genuine opposition lives. |
| N6 | **DISCOVER** | "What does the reader need to FIGURE OUT rather than be told?" | Revelation/eureka needs: delayed payoff, progressive disclosure, aha-moment architecture | Anagnorisis, Constructivism | **SEMI-INDEPENDENT** — overlaps with FEEL (discovery produces delight) and UNDERSTAND (the discovered thing IS understanding). But the structural demand is unique: DISCOVER requires WITHHOLDING information strategically, which opposes the structural demands of UNDERSTAND (which wants clarity and directness). This tension between axes is itself a source of compositional richness. |
| N7 | **REMEMBER** | "What does the reader need to RETAIN and RECALL after leaving this content?" | Memorability needs: anchoring, chunking, mnemonic structure | Bloom's (Remember), Dual Coding | **SEMI-INDEPENDENT** — overlaps with UNDERSTAND (memorable things are well-understood) and DO (you remember what you need to do). But the structural demand is distinct: REMEMBER requires repetition patterns, summary anchors, visual mnemonics, and structural regularity that aids recall. Content designed for understanding looks different from content designed for memorability. |
| N8 | **SEE** | "What does the reader need to VISUALIZE or SPATIALLY PERCEIVE about this content?" | Spatial/visual needs: mental model construction, spatial relationships, visual thinking | Dual Coding (Paivio) | **SEMI-INDEPENDENT** — overlaps with UNDERSTAND (visualization serves comprehension). But some content demands spatial thinking that goes beyond logical understanding — architecture diagrams, system topologies, state machines. The structural demand is for visual/spatial representation that text alone cannot serve. When this axis is high-yield, it demands diagrams, spatial layouts, or visual metaphors. |

---

## 3. Redundancy Analysis

### 3.1 Full Redundancy Matrix

Comparing every axis against every other for overlap:

```
          FEEL  UNDR  DO    BECM  NAVG  COMP  TRST  CONN  EVAL  ORNT  IDNT  PACE  RECN  DISC  REMB  SEE
FEEL       --   Low   Low   Med   Low   Low   Low   Low   Low   Low   Med   Med   Low   Med   Low   Low
UNDR      Low    --   Low   Low   Low   Med   Low   HIGH  Med   Med   Low   Low   Med   Med   Med   Med
DO        Low   Low    --   Med   Low   Low   Low   Low   Med   Low   Low   Low   Low   Low   Med   Low
BECM      Med   Low   Med    --   Low   Low   Low   Low   Low   Low   Med   Low   Med   Low   Low   Low
NAVG      Low   Low   Low   Low    --   Low   Low   Low   Low   Med   Low   Med   Low   Low   Low   Low
COMP      Low   Med   Low   Low   Low    --   Low   Med   Med   Low   Low   Low   Med   Low   Low   Med
TRST      Low   Low   Low   Low   Low   Low    --   Low   Med   Low   Low   Low   Med   Low   Low   Low
CONN      Low   HIGH  Low   Low   Low   Med   Low    --   Low   Low   Low   Low   Low   Low   Low   Low
EVAL      Low   Med   Med   Low   Low   Med   Med   Low    --   Low   Low   Low   Med   Low   Low   Low
ORNT      Low   Med   Low   Low   Med   Low   Low   Low   Low    --   Low   Low   Med   Low   Low   Low
IDNT      Med   Low   Low   Med   Low   Low   Low   Low   Low   Low    --   Low   Low   Low   Low   Low
PACE      Med   Low   Low   Low   Med   Low   Low   Low   Low   Low   Low    --   Low   Med   Low   Low
RECN      Low   Med   Low   Med   Low   Med   Med   Low   Med   Med   Low   Low    --   Med   Low   Low
DISC      Med   Med   Low   Low   Low   Low   Low   Low   Low   Low   Low   Med   Med    --   Low   Low
REMB      Low   Med   Med   Low   Low   Low   Low   Low   Low   Low   Low   Low   Low   Low    --   Low
SEE       Low   Med   Low   Low   Low   Med   Low   Low   Low   Low   Low   Low   Low   Low   Low    --
```

### 3.2 Key Redundancy Findings

1. **CONNECT is redundant with UNDERSTAND** (HIGH overlap). Both ask about relationships between parts. CONNECT should be absorbed into UNDERSTAND or eliminated.

2. **COMPARE is a sub-axis of UNDERSTAND** (Med overlap). It triggers a SPECIFIC structural pattern (side-by-side, parallel holding) that UNDERSTAND doesn't necessarily demand. Keep as a "structural trigger" rather than a full axis.

3. **IDENTIFY overlaps with both FEEL and BECOME** (Med overlap each). It's the bridge between emotional response and transformation. Could be absorbed, but its structural demand (perspective/voice selection) is unique enough to warrant independent status for content that features personas, case studies, or narrative.

4. **DISCOVER overlaps with both FEEL and UNDERSTAND** (Med each). The structural demand (strategic withholding) is genuinely oppositional to UNDERSTAND's demand (clarity), making this axis valuable precisely BECAUSE it creates intra-axis tension.

5. **PACE overlaps with FEEL and NAVIGATE** (Med each). It's a meta-axis — it modulates HOW other axes are delivered rather than producing its own needs. Recommend treating it as a structural modifier rather than a primary axis.

### 3.3 Axis Classification

**Tier 1: Primary Axes (independently produce structural demands)**
- FEEL, UNDERSTAND, DO, BECOME (core four)
- NAVIGATE (topological, distinct from relational)
- TRUST (epistemic, completely independent)
- EVALUATE (judgment, fills Bloom's gap)
- ORIENT (contextual positioning, distinct from internal comprehension)
- RECONCILE (cognitive dissonance, distinct from comprehension)

**Tier 2: Structural Trigger Axes (produce specific layout demands when high-yield)**
- COMPARE (triggers parallel/side-by-side structures)
- IDENTIFY (triggers perspective/voice selection)
- DISCOVER (triggers progressive revelation architecture)
- SEE (triggers spatial/visual representation)
- REMEMBER (triggers mnemonic/anchoring patterns)

**Tier 3: Meta-Axes (modulate other axes, not independently productive)**
- PACE (modulates delivery rhythm — structural modifier, not standalone)

**Tier 4: Redundant (absorbed into other axes)**
- CONNECT (absorbed into UNDERSTAND)

---

## 4. The Minimal Non-Redundant Set

### 4.1 Recommended Axis Configuration

**Always Run (Core Four — unchanged):**

| Axis | Question | When Richest |
|------|----------|-------------|
| **FEEL** | "What does the reader need to FEEL while navigating this content?" | Narrative content, emotional topics, onboarding, first-contact pages |
| **UNDERSTAND** | "What does the reader need to UNDERSTAND about the relationships in this content?" | Technical docs, architectures, system descriptions, causal explanations |
| **DO** | "What does the reader need to DO with this content after reading?" | Tutorials, guides, decision frameworks, reference material |
| **BECOME** | "What does the reader need to BECOME after absorbing this content?" | Learning paths, philosophy, methodology, identity-forming content |

**Always Consider (Extended Core — run these for every content piece, but expect LOW YIELD more often):**

| Axis | Question | When Richest | When Low Yield |
|------|----------|-------------|----------------|
| **NAVIGATE** | "How does the reader need to move THROUGH this content?" | Long-form content, multi-section docs, content with complex topology, reference material that's consulted non-linearly | Short content, single-concept pages, linear narratives |
| **TRUST** | "What does the reader need to believe about this content's AUTHORITY?" | Opinion pieces, recommendations, claims without proof, content from unfamiliar sources, content that asks the reader to change behavior | Purely factual reference, internal team docs, content where authority is established by context |
| **EVALUATE** | "What does the reader need to JUDGE about the quality, validity, or fit of what's presented?" | Comparison content, reviews, "which should I choose" content, content presenting competing approaches, content with varying confidence levels | Single-path tutorials, factual reference, narrative content |
| **ORIENT** | "What does the reader need to know about WHERE THIS FITS before engaging?" | Content that's part of a series, content requiring prerequisites, content that changes meaning based on reader's entry point | Standalone content, self-contained explanations, content with no assumed knowledge |
| **RECONCILE** | "What does the reader need to RECONCILE between this content and what they already believe?" | Paradigm-shifting content, content that contradicts common practice, myth-busting, content that reframes familiar concepts | Content that confirms existing knowledge, introductory material, content for beginners with no prior beliefs to contradict |

**Conditionally Deploy (Structural Triggers — only run when content signals their relevance):**

| Axis | Question | Deploy When | Structural Pattern Triggered |
|------|----------|-------------|------------------------------|
| **COMPARE** | "What does the reader need to hold in PARALLEL?" | Content features 2+ alternatives, trade-offs, A-vs-B decisions | Side-by-side layout, comparison tables, parallel columns |
| **IDENTIFY** | "Who does the reader need to SEE THEMSELVES AS?" | Content features personas, case studies, narrative voices, reader-as-protagonist | Voice selection, example mirroring, perspective anchoring |
| **DISCOVER** | "What does the reader need to FIGURE OUT rather than be told?" | Content has aha-moments, progressive revelation potential, mystery/investigation structure | Delayed payoff, collapsible reveals, question-then-answer ordering |
| **SEE** | "What does the reader need to VISUALIZE or SPATIALLY PERCEIVE?" | System architectures, state machines, spatial relationships, data with shape | Diagrams, spatial layouts, visual metaphors, dimensional representation |
| **REMEMBER** | "What does the reader need to RETAIN and RECALL?" | Reference material, checklists, patterns to internalize, content used repeatedly | Summary anchors, mnemonic structures, regular rhythm, visual chunking |

### 4.2 Why This Configuration?

**Total axis count: 4 core + 5 extended + 5 conditional = 14 potential axes, 9 always-run**

The pipeline should NOT run all 14 for every content piece. The protocol:

1. Run core four (always)
2. Run extended five (always, but mark LOW YIELD when appropriate)
3. Scan content for conditional triggers, deploy 0-5 structural triggers as relevant
4. The Phase 1 output table will have 4-14 entries depending on content richness

---

## 5. Real Content Testing

### 5.1 Test: Boris Cherny Extraction (Technical Practitioner Profile)

**Content type:** Technical practitioner mental model, workflow documentation, design philosophy

**Core Four:**

| Axis | Yield | Needs | Structural Properties |
|------|-------|-------|----------------------|
| FEEL | MEDIUM | Professional respect, curiosity about creator's mind, trust in "vanilla" simplicity, progressive revelation of depth | Layering (simple surface → deep detail), authority signaling, gradual escalation |
| UNDERSTAND | HIGH | How 13-point system interconnects, why parallel > sequential, how compounding works mathematically, causal chain (simplicity → capability → velocity) | Causal chains, system diagrams, interconnection mapping, progression |
| DO | HIGH | Implement parallel sessions, set up CLAUDE.md, configure hooks, adopt Plan Mode workflow, install code-simplifier | Actionability ladder (quick wins → deep investment), checklist structure, copy-paste code blocks |
| BECOME | HIGH | A Boris-like practitioner: someone who thinks about agents as team members, schedules capacity not tasks, builds compounding systems | Identity transformation, mental model shift narrative, before/after framing |

**Extended Core:**

| Axis | Yield | Needs | Structural Properties |
|------|-------|-------|----------------------|
| NAVIGATE | MEDIUM | 15-section document needs non-linear access; reader might want "just hooks" or "just the philosophy" | Table of contents, section independence, cross-references |
| TRUST | HIGH | "Is this just one person's opinion?" → Boris is the CREATOR, so authority is inherent but must be signaled. Claims like "100% AI code" need evidence anchoring | Creator credential placement, quote attribution, evidence proximity |
| EVALUATE | MEDIUM | "Does Boris's approach fit MY situation?" — solo dev vs team, budget constraints, project scale | Comparison sections (Boris vs Yegge), "when NOT to use" sections, context-dependent recommendations |
| ORIENT | LOW | Content is self-contained; reader doesn't need prerequisites | Minimal — "You Are Here" context sufficient |
| RECONCILE | HIGH | Boris says "vanilla" setup is best → contradicts most practitioners who over-customize. "Slower model is faster" contradicts intuition. "100% AI code" contradicts skeptics. | Explicit paradox framing, evidence stacking against intuition, graduated persuasion |

**Structural Triggers:**

| Axis | Triggered? | Why |
|------|-----------|-----|
| COMPARE | YES | Boris vs Yegge comparison is major section; Opus vs Sonnet comparison is key insight |
| IDENTIFY | YES | Reader needs to identify as "practitioner who can adopt this" — Boris's "surprisingly vanilla" is identification anchor |
| DISCOVER | LOW | Content is mostly direct instruction, not revelation |
| SEE | MEDIUM | The stack visualization (Part X) is spatial; workflow diagrams need visual representation |
| REMEMBER | HIGH | 8 core principles, 13-point system, anti-patterns — designed for retention |

**Richest tension source:** RECONCILE axis produces the most genuine tension. Boris's "counterintuitive" principles (slower is faster, vanilla is better, 100% AI code works) create real opposition against the reader's existing beliefs AND against the design system's authoritative voice. The design system's sharp, decisive aesthetic must present PARADOXES warmly — that's genuine tension.

### 5.2 Test: Ralph Complete Extraction (Orchestration Pattern Documentation)

**Content type:** Technical pattern documentation with multiple variants, community voices, implementation guides

**Core Four:**

| Axis | Yield | Needs | Structural Properties |
|------|-------|-------|----------------------|
| FEEL | MEDIUM | Confidence that the pattern works, excitement about "ship while you sleep," safety about autonomous operation | Trust building, success story anchoring, risk mitigation framing |
| UNDERSTAND | HIGH | How the core loop works, why fresh context beats long sessions, how external state architecture enables statelessness, relationships between variants | Flow diagrams, state architecture diagrams, variant taxonomy, causal explanation |
| DO | VERY HIGH | Set up ralph.sh, create prd.json, write progress.txt, configure stop conditions, set up error handling, run first iteration | Step-by-step implementation, exact file formats, copy-paste scripts, pre-flight checklists |
| BECOME | MEDIUM | Shift from "coder" to "product manager who directs agents," from "one session" thinker to "many iterations" thinker | Mental model sections, role transformation narrative, analogy-based reframing |

**Extended Core:**

| Axis | Yield | Needs | Structural Properties |
|------|-------|-------|----------------------|
| NAVIGATE | VERY HIGH | 10 sections with 7+ variants — reader needs to find THEIR variant quickly, jump to exact file formats, skip what's not relevant | Heavy TOC, variant taxonomy, section independence, "which variant is right for me?" decision tree |
| TRUST | MEDIUM | Community validation (multiple practitioners confirm), official Anthropic plugin, real case studies with numbers | Attribution, evidence density, community quote stacking |
| EVALUATE | HIGH | "Which variant should I use?" — Basic vs Compounding vs Marathon vs Parallel. Each has trade-offs. | Variant comparison table, use-case matching, explicit trade-off analysis |
| ORIENT | MEDIUM | Reader needs to know: "Is this the right pattern for my problem?" — position within orchestration landscape | Problem-solution framing, prerequisites, scope declaration |
| RECONCILE | MEDIUM | "Running code autonomously overnight sounds dangerous" — must reconcile risk tolerance with potential | Safety-first framing, failure mode documentation, guardrail emphasis |

**Structural Triggers:**

| Axis | Triggered? | Why |
|------|-----------|-----|
| COMPARE | YES — DOMINANT | 7+ variants requiring comparison is THE central structural challenge |
| IDENTIFY | MEDIUM | Reader needs to identify which practitioner archetype they are (AFK vs HOTL, solo vs team) |
| DISCOVER | LOW | Content is instructional, not revelatory |
| SEE | HIGH | Core loop diagram, state architecture diagram, parallel execution topology — all spatial |
| REMEMBER | HIGH | File formats, script templates, failure modes — heavy reference/recall demand |

**Richest tension source:** NAVIGATE + COMPARE together produce the richest tension. The content WANTS to present 7+ variants (breadth, comparison, parallel holding) but the design system DEMANDS decisive hierarchy (sharp edges, clear ordering, authority). The tension: "How do you present CHOICE with a system that communicates DECISIVENESS?" This is genuinely hard — comparison implies equivalence; the design system implies ranking.

### 5.3 Test: Dan Shipper Extraction (Business Methodology + Technical Practice)

**Content type:** Business case study, methodology documentation, organizational transformation narrative

**Core Four:**

| Axis | Yield | Needs | Structural Properties |
|------|-------|-------|----------------------|
| FEEL | HIGH | Awe at "100% AI code," excitement about 15-person output from 2 engineers, urgency about falling behind | Escalation, evidence impact, transformation narrative momentum |
| UNDERSTAND | HIGH | How compound engineering loop works, why knowledge compounds, how multi-agent review functions, the meta-prompting chain | Loop diagrams, compounding math, system architecture, causal chains |
| DO | HIGH | Set up multi-agent review, implement compound loop, create meta-prompts, configure worktrees | Implementation steps, plugin installation, configuration examples |
| BECOME | VERY HIGH | Engineering manager instead of coder — fundamental identity shift. This is THE core message. | Before/after framing, identity contrast, role redefinition narrative, paradigm shift |

**Extended Core:**

| Axis | Yield | Needs | Structural Properties |
|------|-------|-------|----------------------|
| NAVIGATE | LOW | Content is relatively linear — methodology → setup → results | Minimal — standard section ordering sufficient |
| TRUST | VERY HIGH | "100% AI code" is an extraordinary claim requiring extraordinary evidence. "15-person output" needs proof. Business results need validation. | Evidence density, specific numbers, named individuals, production validation signals |
| EVALUATE | MEDIUM | "Does this apply to MY company?" — Scale, budget, team constraints | Context-dependent qualification, when-not-to-use sections |
| ORIENT | MEDIUM | Reader needs to know: "Is this about a specific tool or a methodology?" — compound engineering is tool-agnostic in principle | Methodology vs tool distinction, scope declaration |
| RECONCILE | VERY HIGH | "100% AI code" contradicts almost everyone's experience. "Think like a manager, not a coder" contradicts developer identity. This is MAXIMALLY paradigm-shifting. | Heavy persuasion architecture, graduated evidence, identity-safe messaging (you're not losing skills, you're gaining leverage) |

**Structural Triggers:**

| Axis | Triggered? | Why |
|------|-----------|-----|
| COMPARE | MEDIUM | Traditional vs compound engineering comparison |
| IDENTIFY | VERY HIGH | Reader must identify as "potential engineering manager" — the identity shift IS the content |
| DISCOVER | MEDIUM | The compounding math is a revelation moment |
| SEE | MEDIUM | Loop diagrams, parallel instance visualization |
| REMEMBER | LOW | Methodology is more about understanding than recall |

**Richest tension source:** RECONCILE + IDENTIFY together. The content demands the reader ABANDON their identity as coder and ADOPT a new identity as manager — while simultaneously making extraordinary claims (100% AI code) that the reader may not believe. The design system's authoritative voice HELPS with TRUST but HINDERS with RECONCILE (authority can feel dismissive of reader's existing beliefs). The tension: "How do you present paradigm-shattering content through a system that already speaks with authority?" Too much authority = reader defensiveness. Too little = claims don't land.

---

## 6. Axis-Tension Interaction Map

### 6.1 Which Axes Produce the Richest Tension?

Based on testing against three real content pieces, here's how each axis interacts with the design system constraints:

| Axis | Tension Against Design System | Richness |
|------|------------------------------|----------|
| **FEEL** | Warmth/invitation vs sharp edges/authority — CLASSIC tension, well-understood | HIGH |
| **UNDERSTAND** | Clarity/relationships vs flat geometry/no shadows — MODERATE tension, many resolution paths exist | MEDIUM |
| **DO** | Action urgency vs contemplative pace — LOW tension, design system handles action well | LOW |
| **BECOME** | Transformation narrative vs static geometry — MODERATE, sharp edges resist "journey" metaphors | MEDIUM |
| **NAVIGATE** | Freedom of movement vs decisive hierarchy — HIGH tension, navigation implies choice, system implies ranking | HIGH |
| **TRUST** | TWO MODES: (a) authority-trust — LOW tension, system already speaks with authority; (b) confidence-gradient-trust — HIGH tension, system's binary vocabulary must express varying confidence levels across sections. Per tension-analyst: mixed-confidence content creates genuine tension because the system lacks gradient tools. | VARIABLE: LOW when authority-mode, HIGH when gradient-mode |
| **EVALUATE** | Judgment/comparison vs decisive aesthetic — HIGH tension, evaluation requires equanimity, system is opinionated | HIGH |
| **ORIENT** | Context/positioning vs directness — LOW tension, easily resolved | LOW |
| **RECONCILE** | Verdict-pressure vs open-holding — VERY HIGH tension. System drives toward summary/recommendation rows; RECONCILE demands holding positions open without resolving. Scores 27/27 MAXIMUM on tension-analyst's richness formula. Most productive axis for metaphor generation. | VERY HIGH |
| **COMPARE** | Parallel equivalence vs hierarchical ranking — HIGH tension, hard to resolve | HIGH |
| **IDENTIFY** | Mirror/recognition vs impersonal authority — MEDIUM tension, can be resolved through voice | MEDIUM |
| **DISCOVER** | Withholding vs clarity — HIGH tension, genuinely oppositional structural demands | HIGH |
| **SEE** | Spatial richness vs flat/angular constraint — MEDIUM tension, resolved through the system's own spatial vocabulary | MEDIUM |
| **REMEMBER** | Pattern repetition vs progressive engagement — MEDIUM tension, repetition can feel monotonous | MEDIUM |

### 6.2 Axes Ranked by Tension-Production Potential

1. **RECONCILE** — 27/27 MAXIMUM on richness formula. Precise mechanism: verdict-pressure vs open-holding. System drives toward summary/recommendation rows; RECONCILE demands holding positions open without resolving. (Refined via tension-analyst cross-reference.)
2. **NAVIGATE** — complex topology vs decisive hierarchy is structurally hard to resolve
3. **EVALUATE** — judgment requires holding options equal; system resists equanimity
4. **FEEL** — the classic warmth-vs-edges tension; always productive
5. **COMPARE** — parallel holding vs ranking; similar to EVALUATE tension
6. **DISCOVER** — strategic withholding opposes the system's directness
7. **BECOME** — transformation narrative vs static geometry; moderately productive
8. **IDENTIFY** — mirroring vs impersonal authority; resolvable but genuine
9. **SEE** — spatial demands vs flat constraint; resolvable within the system
10. **UNDERSTAND** — clarity vs flatness; many resolution paths reduce tension richness
11. **REMEMBER** — repetition demands vs engagement; moderate
12. **ORIENT** — context vs directness; easily resolved
13. **TRUST** — VARIABLE: authority-mode is aligned with the system (low tension), but confidence-gradient-mode (mixed confidence levels across content) produces HIGH tension because the system's binary vocabulary must express gradients it lacks tools for. (Refinement from tension-analyst cross-reference.)
14. **DO** — action maps well to the system's decisive personality; low tension

### 6.3 Insight for Tension Analyst

The axes that produce the RICHEST tension are those where the content's demand is OPPOSITIONAL to the system's personality:
- **RECONCILE** opposes the system's authority (challenging vs asserting)
- **NAVIGATE** opposes the system's hierarchy (choice vs ranking)
- **EVALUATE** opposes the system's decisiveness (equanimity vs opinion)
- **DISCOVER** opposes the system's clarity (withholding vs directness)

The axes that produce the LEAST tension are those where the content's demand is ALIGNED with the system's personality:
- **TRUST** aligns with authority (both want credibility)
- **DO** aligns with decisiveness (both want action)
- **ORIENT** aligns with clarity (both want positioning)

**The general principle:** An axis produces rich tension when its structural demand is OPPOSITIONAL to the design system's personality. Axes whose demands are ALIGNED with the system produce cosmetic tension at best.

---

## 7. Recommendations for the Pipeline

### 7.1 Update to the Skill File: Phase 1 Multi-Axis Questioning

**Replace the "Beyond the Core Four" section with:**

```
### Extended Core Axes (Always Consider)

After running the core four, always consider these five. Mark LOW YIELD if
they don't produce genuine needs — but always ASK the question.

| Axis | Question | Richest When |
|------|----------|-------------|
| NAVIGATE | "How does the reader need to move THROUGH this content?" | Long-form, multi-section, non-linear reference |
| TRUST | "What does the reader need to believe about this content's AUTHORITY?" | Extraordinary claims, unfamiliar sources, behavior-change content |
| EVALUATE | "What does the reader need to JUDGE about what's presented?" | Comparisons, competing approaches, varying confidence |
| ORIENT | "What does the reader need to know about WHERE THIS FITS?" | Series content, prerequisite-dependent, context-sensitive |
| RECONCILE | "What does the reader need to RECONCILE with what they already believe?" | Paradigm-shifting, myth-busting, counterintuitive content |

### Structural Trigger Axes (Deploy Conditionally)

Scan the content for these signals. If present, deploy the axis.

| Axis | Deploy When Content Contains... | Structural Pattern Triggered |
|------|--------------------------------|------------------------------|
| COMPARE | 2+ alternatives, trade-offs, A-vs-B | Side-by-side, parallel columns, comparison tables |
| IDENTIFY | Personas, case studies, reader-as-protagonist | Voice selection, example mirroring, perspective anchoring |
| DISCOVER | Aha-moments, progressive revelation, investigation | Delayed payoff, collapsible reveals, question-before-answer |
| SEE | Architectures, state machines, spatial relationships | Diagrams, spatial layout, dimensional representation |
| REMEMBER | Reference patterns, checklists, reuse-oriented content | Summary anchors, mnemonics, visual chunking, rhythm |
```

### 7.2 Critical Note: CONNECT Should Be Removed

The CONNECT axis ("What relationships between parts does the reader need to perceive?") is REDUNDANT with UNDERSTAND ("What does the reader need to UNDERSTAND about the relationships in this content?"). They ask the same question with different words. Removing CONNECT eliminates confusion without losing any analytical power.

### 7.3 Key Principle for the Synthesizer

**The richest tension comes from axes whose demands OPPOSE the design system's personality.** When selecting the primary tension for Phase 2, prioritize axes that are OPPOSITIONAL to the system:

- RECONCILE (challenge vs assert) — richest
- NAVIGATE (choice vs hierarchy)
- EVALUATE (equanimity vs opinion)
- DISCOVER (withholding vs directness)
- FEEL (warmth vs edges) — classic, always available

Avoid building tension primarily from axes that ALIGN with the system (TRUST, DO, ORIENT) — these produce cosmetic tension that resolves too easily and doesn't demand metaphorical bridging.

### 7.4 Axis Interaction Effects

Some axis PAIRS produce richer tension than either axis alone:

- **RECONCILE + IDENTIFY**: "Change what you believe AND who you are" — double transformation demand vs system's static authority
- **NAVIGATE + COMPARE**: "Move freely AND hold things in parallel" — maximum structural complexity vs system's decisive hierarchy
- **DISCOVER + UNDERSTAND**: "Figure it out AND comprehend it" — oppositional structural demands (withhold vs reveal) create intra-content tension BEFORE the design system is even involved
- **FEEL + EVALUATE**: "Feel warmth AND judge critically" — emotional engagement vs critical distance

These pairs should be noted when both axes are high-yield — they create COMPOUND tension that opens wider metaphor spaces.

---

## Appendix: Axis Quick-Reference Card

```
CORE FOUR (always run):
  FEEL       → emotions/sensory needs     → layering, warmth gradients
  UNDERSTAND → cognitive/structural needs  → causality, hierarchy, mapping
  DO         → action/decision needs       → checklists, steps, decisions
  BECOME     → transformation needs        → before/after, identity shift

EXTENDED CORE (always consider):
  NAVIGATE   → movement/topology needs     → TOC, cross-refs, decision trees
  TRUST      → authority/credibility needs  → evidence, attribution, credentials
  EVALUATE   → judgment/criteria needs      → comparison, weighting, confidence
  ORIENT     → context/position needs       → "you are here," prerequisites, scope
  RECONCILE  → dissonance/bridging needs    → paradox framing, evidence stacking

STRUCTURAL TRIGGERS (deploy conditionally):
  COMPARE    → parallel-holding needs       → side-by-side, tables, columns
  IDENTIFY   → recognition/mirroring needs  → voice, perspective, examples
  DISCOVER   → revelation/eureka needs      → delayed payoff, progressive reveal
  SEE        → spatial/visual needs         → diagrams, spatial layout, shapes
  REMEMBER   → retention/recall needs       → anchors, mnemonics, chunking

REMOVED:
  CONNECT    → absorbed into UNDERSTAND (redundant)
  PACE       → demoted to structural modifier (modulates other axes, not independent)
```
