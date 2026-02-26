# Ingestion Architecture: How a New Instance Should Learn This System

**Author:** ingestion-architect
**Date:** 2026-02-15
**Purpose:** Design the PEDAGOGY -- the optimal structure, reading order, and mental model sequence for a new Claude instance to fully understand and operate within the KortAI design system.
**Sources:** All 11 research files (richness 01-05, rigidity 01-06), design-system/CLAUDE.md, compositional-core/CLAUDE.md, teammate outputs (02-worldview-and-goals.md, 03-documentation-audit.md)

---

## EXECUTIVE SUMMARY

A new instance inheriting this project faces a core pedagogical challenge: the system is deeply layered, with later concepts depending on earlier ones in non-obvious ways. The research corpus alone exceeds 25,000 words across 11 files, the design system specification exceeds 100,000 words, and the compositional-core extracts 20,000+ lines across 42 files. Without guidance, a new instance will either:

1. **Drown in detail** -- reading everything chronologically and running out of context before reaching actionable understanding
2. **Skip context** -- jumping to the operational layer and making decisions that violate principles it never learned
3. **Misunderstand priorities** -- spending time on resolved questions while ignoring the live frontier

This document designs a learning journey that prevents all three failure modes. It also thoroughly documents the vocabulary-vs-library question -- THE central unresolved conceptual tension of the tier model.

---

## PART 1: DOCUMENTATION TOPOLOGY — CONCENTRIC RINGS

### Recommended Structure: Concentric Rings, Not Linear Chapters

The documentation should be organized as concentric rings, where each ring provides a complete (if thin) picture at its level of detail. A reader who stops at any ring has a usable understanding -- they just lack depth.

```
                       ┌───────────────────────────┐
                       │   RING 0: Orientation      │  5 min, "what is this?"
                       │   (HANDOFF.md, ~100 lines) │
                       ├───────────────────────────┤
                       │  RING 1: Worldview         │  15 min, "what do we believe?"
                       │  (beliefs, goals, status)  │
                       ├───────────────────────────┤
                       │  RING 2: Architecture      │  30 min, "how does it work?"
                       │  (tier model, vocabulary)  │
                       ├───────────────────────────┤
                       │  RING 3: Operations        │  45 min, "how do I build?"
                       │  (workflows, skills, gates)│
                       ├───────────────────────────┤
                       │  RING 4: Evidence           │  60+ min, "why do we believe?"
                       │  (research, raw data)      │
                       └───────────────────────────┘
```

**Why concentric rings, not linear chapters:**

1. **Graceful degradation under context pressure.** If the instance hits context limits at Ring 2, it still has worldview + architecture. A linear document that is half-read gives no such guarantee -- you might have all of history but none of the operational protocol.

2. **Task-appropriate depth.** An auditor needs Rings 0-2. A builder needs Rings 0-3. A researcher needs all 5. Linear documents force everyone through the same material.

3. **Matches how LLMs build understanding.** We establish frames first, then fill details. Ring 0 establishes the frame ("design system for technical documentation with sharp-edge identity"). Ring 1 fills the conceptual skeleton. Ring 2 adds structure. Ring 3 adds procedure.

### Mapping Rings to Documents

| Ring | Document(s) | Lines | Purpose |
|------|-------------|-------|---------|
| 0 | HANDOFF.md | ~100 | Temporal context: where are we, what is next |
| 1 | Worldview doc (02-worldview-and-goals.md) | ~400 | Conceptual foundation: what we believe and why |
| 2 | Tier model + modifications (extracted from rigidity-research) | ~300 | Architectural framework: how the system is structured |
| 3 | compositional-core/CLAUDE.md + design-system/CLAUDE.md | ~1200 | Operational protocol: how to build, audit, verify |
| 4 | Research archives (richness-research/, rigidity-research/) | ~15000 | Raw evidence: full analysis, debates, evidence tables |

---

## PART 2: OPTIMAL READING ORDER (With Justification)

### Step 0: HANDOFF.md (Orientation -- 5 minutes)

**What it must establish:**
- What this project IS (a design system for AI-focused technical documentation)
- Where we ARE in the timeline (Phase D complete, Phase E next)
- What the LIVE FRONTIER is (the specific questions and decisions currently open)
- What to READ NEXT (explicit routing based on what the user asks)

**Why first:** Every other document assumes context that a new instance lacks. HANDOFF.md is the ONLY document written with zero assumptions.

**Dependency:** None -- this is the entry point.

---

### Step 1: Worldview Document (Conceptual Foundations -- 15 minutes)

**What it must establish BEFORE any operational reading:**

1. **The Richness-Rigidity Relationship** -- Richness comes FROM constraint, not despite it. Without this mental model, the new instance reads prohibitions.md and thinks "restrictions to work within" rather than "generative engine of the system."

2. **The Vocabulary vs. Prohibition Distinction** -- The design system has ~168 rules, but only 4-5 are limiting. Most are vocabulary (tools that enable expression). Without this model, the constraint surface feels oppressive rather than empowering.

3. **The Four-Type Constraint Taxonomy** -- Identity (always enabling), Procedural (sequences creativity), Specification (mixed), Ambient (emergent). Without this, "rigidity" is one undifferentiated concept.

4. **Content Determines Richness Level** -- Not every page needs a metaphor. The Addition Test determines Track 1 vs Track 2.

**Why second:** These mental models are the LENS through which all subsequent information is interpreted. Reading tokens.css without understanding WHY border-radius is 0 (it is generative, it produced the angular spiral in AD-004, it IS the identity) produces a fundamentally different understanding than reading it WITH that context.

**Dependency:** Step 0 (temporal orientation).

---

### Step 2: Tier Model and Status (Architectural Framework -- 15 minutes)

**What it must establish:**

1. **The Tier Model** -- Floor (5 mechanisms, 30 min) / Middle (8-10, 70-100 min) / Ceiling (12-15, 150-220 min) / Flagship (16-18, 240-400 min). Content type determines tier.

2. **Current Status** -- Phase D COMPLETE (CONDITIONAL PASS). Container width THE primary failure mode (4/5 pages violated 940px). Phase E next.

3. **The Modification Recommendations** -- ADOPT fractal gate, MODIFY mechanism mandate (per-category minimum), MODIFY coherence check (3 transitions), REJECT technique count metric.

4. **The Vocabulary-vs-Library Question** (see Part 6 below) -- THE central unresolved conceptual tension.

**Why third:** The tier model bridges philosophy (Ring 1) and operations (Ring 3). Without it, the instance does not know WHETHER to use Track 1 or Track 2.

**Dependency:** Step 1 (richness-rigidity relationship makes tier model comprehensible).

---

### Step 3: Design System Operational Layer (Building Protocol -- 15 minutes)

**What it must establish:**

1. **Always-Load Protocol** -- prohibitions.md + tokens.css. Every session.
2. **Track Classification** -- The Addition Test.
3. **Phase-Gated Access** -- Library PROHIBITED during derivation phases.
4. **Anti-Gravity Rules** -- R1, R2, R3, R5, R6.
5. **Verification Checklist** -- Soul check, perceptual audit, guardrails.

**Why fourth:** By this point, the instance understands WHY the system works (Step 1), WHAT it should aim for (Step 2), and now learns HOW to build.

**Dependency:** Steps 1-2.

---

### Step 4: Research Evidence (Deep Context -- 30+ minutes, OPTIONAL)

**When to read:** ONLY when the instance needs to understand WHY a specific recommendation exists.

**Reading order within Ring 4:**
1. `ephemeral/richness-research/05-unified-synthesis.md` -- best single richness summary
2. `ephemeral/rigidity-research/06-unified-synthesis.md` -- best single rigidity summary
3. Individual reports ONLY as needed for specific questions

**Why optional:** The syntheses in Ring 1 and Ring 2 capture 90% of actionable content.

---

## PART 3: MENTAL MODEL DEPENDENCY GRAPH

The following concepts must be established in this order. Later concepts depend on earlier ones.

```
Level 0 (Ground Truth — facts about the design system):
  ├── Soul Constraints (border-radius: 0, box-shadow: none, warm palette)
  ├── Typography Trinity (Instrument Serif / Inter / JetBrains Mono)
  └── Token Architecture (:root block, 65 tokens, 21 immutable)
        │
Level 1 (Identity — what defines KortAI):
  ├── 22 Prohibitions define identity through REFUSAL (8 absolute, 12 conditional, 2 meta)
  ├── Vocabulary vs Prohibition distinction (168 rules, only 4-5 genuinely limiting)
  └── Identity Rigidity is ENABLING, not limiting (angular spiral exists BECAUSE of sharp edges)
        │
Level 2 (Mechanism — how richness is created):
  ├── 18 Mechanisms (border-weight gradient, 2-zone DNA, solid offset, spacing compression...)
  ├── Mechanisms are METAPHOR-AGNOSTIC (pass Name Test + Transfer Test)
  ├── 5 Richness Dimensions (layout complexity, visual depth, token density, responsive, metaphor encoding)
  └── Content-Mechanism FIT matters more than technique count
        │
Level 3 (Composition — how pages are built):
  ├── Tension-Composition Pipeline (content → assessment → tension → metaphor → layout)
  ├── The Addition Test (genuine tension → Track 2; no tension → Track 1)
  ├── Anti-Gravity System (R1, R2, R3, R5, R6 prevent pattern-matching)
  ├── Fractal Self-Similarity (same rhythm at Page/Section/Component/Character scales)
  └── The Tier Model (Floor/Middle/Ceiling/Flagship with concrete specs)
        │
Level 4 (Meta — why the system works the way it does):
  ├── Four-Type Constraint Taxonomy (Identity/Procedural/Specification/Ambient)
  ├── Richness = Fluency with Many Rigid Words (archaeologist's core finding)
  ├── Showcase Pages Were MORE Rigid Than Pipeline (~78 vs ~20 constraints)
  ├── "Sample 2-4 Mechanisms" = single most limiting specification
  ├── The Vocabulary-vs-Library Question (see Part 6 — THE central unresolved tension)
  └── Iterative Discovery is the missing ingredient (not freedom from constraint)
```

**Critical insight for documentation structure:** Levels 0-2 are FACTS. Level 3 is PROCESS. Level 4 is META-UNDERSTANDING. A builder needs Levels 0-3. A researcher or planner needs all 5. The HANDOFF.md should state which level each agent role needs.

**Anti-pattern to prevent:** Reading Level 4 before Level 2 produces confusion. A new instance reading "richness is fluency with rigid words" without first knowing what the 18 mechanisms ARE has no concrete referent for "rigid words." The dependency graph must be respected.

---

## PART 4: LAYERING STRATEGY (SUMMARY → DETAIL → RAW)

Every concept should be accessible at three compression levels:

### Layer A: Summary (in HANDOFF.md)

One paragraph per concept. Enough for correct decisions in 80% of situations.

Example for the tier model:
> "Content is built at 4 richness tiers: Floor (token assembly, 5 mechanisms, 30 min), Middle (pattern-based rhythm, 8-10 mechanisms, 70-100 min), Ceiling (metaphor-driven composition, 12-15 mechanisms, 150-220 min), or Flagship (multi-pass showcase, 16-18 mechanisms, 240-400 min). Content type determines tier via the Addition Test."

### Layer B: Detail (in dedicated operational docs or existing CLAUDE.md files)

Full specifications, decision trees, concrete CSS profiles, failure modes. The tier-specifications report (rigidity-research/03) is Layer B content for the tier model.

### Layer C: Raw (in research files)

Analysis, evidence tables, agent debates, alternative framings, blind spots. The richness-research/ and rigidity-research/ directories are Layer C.

### Cross-Referencing Protocol

Every Layer A statement should point to Layer B: `(Detail: rigidity-research/03-tier-specifications.md, Section "TIER 2: MIDDLE")`

Every Layer B section should point to Layer C: `(Evidence: richness-research/01-richness-anatomy.md, Section 2)`

This creates drill-down paths without requiring the reader to load all layers.

---

## PART 5: CROSS-REFERENCE MAP

### Which Documents Reference Which Core Concepts

| Concept | Primary Source | Also In | Tension/Contradiction |
|---------|---------------|---------|----------------------|
| Soul constraints (3 absolutes) | `compositional-core/identity/prohibitions.md` | Every CLAUDE.md, worldview doc | NONE (unanimous) |
| 4-tier model | `rigidity-research/03-tier-specifications.md` | worldview doc, rigidity synthesis | Metacognitive (richness-04) proposes 3 tiers; tier architect settled on 4 |
| Richness definition (5 dimensions) | `richness-research/05-unified-synthesis.md` Sec 3 | richness-anatomy (01), worldview | Metacognitive (richness-04) challenges technique count as quality proxy |
| Vocabulary vs prohibition | `rigidity-research/01-rigidity-archaeology.md` Sec 3 | metacognitive-rigidity (05), worldview | NONE (unanimous, strongly supported) |
| Modification recommendations (4) | `rigidity-research/02-modification-analysis.md` | rigidity synthesis (06), worldview | NONE (unanimous on verdicts) |
| Anti-gravity system (R1-R6) | `compositional-core/CLAUDE.md` lines 224-279 | rigidity-archaeology, reproducibility | Implications (richness-03) questions scaling to 75+ pages |
| Pipeline richness gap | `richness-research/02-identity-investigation.md` | richness-anatomy (01), synthesis (05) | Metacognitive (richness-04) challenges whether gap is a PROBLEM |
| Iteration as richness driver | All richness reports | All rigidity reports | Metacognitive (richness-04) questions whether showcase iteration suits production |
| Content determines tier | ALL 11 reports | worldview doc | NONE (unanimous) |
| Ambient rigidity risk | `rigidity-research/05-metacognitive-rigidity.md` Part 2 | modification-analysis (02) | Not empirically validated (theoretical) |
| Vocabulary-vs-library question | This document (Part 6), richness synthesis Sec 4 | identity-investigation (02), rigidity-archaeology (01) | Partially resolved (see Part 6) |

### Essential Cross-References for HANDOFF.md

The HANDOFF.md must explicitly connect:

1. **Tier Model → Addition Test** -- "Use the Addition Test to classify content. YES = Track 1 (Floor or Middle). NO = Track 2 (Ceiling or Flagship)."
2. **Modifications → Skill Files** -- "4 modifications target specific lines in tension-composition/SKILL.md (line 787 for mechanism mandate)."
3. **Phase D → Container Width** -- "Container width (940px) is THE primary failure mode. 3/5 Phase D pages violated this."
4. **Anti-Gravity → Scale Question** -- "R6 (divergence mandate) prevents metaphor convergence but may need to evolve at 75+ page scale."
5. **Worldview → Tier Model** -- "Higher tiers have MORE constraints AND higher richness because most new constraints are vocabulary additions."

---

## PART 6: THE VOCABULARY VS. LIBRARY QUESTION

### The Question, Stated Precisely

The 18 mechanisms in the mechanism catalog (dark header, gestalt semantic spacing, solid offset depth, border-weight encoding, 2-zone component DNA, etc.) were DISCOVERED through specific metaphors in showcase pages:

- "Dark header as geological survey map" emerged from OD-004's geological metaphor
- "Solid offset depth" emerged as a soul-compliant alternative to box-shadow (OD-001, EXT-CREATIVE-001)
- "Border-weight gradient encoding" was first deployed as confidence-encoding in OD-004 (from EXT-CONF-013)
- "Spacing compression" was first deployed as density-inverse-of-confidence in OD-004

But the mechanism catalog extracted these as **metaphor-AGNOSTIC techniques**. They passed the Name Test (the mechanism has a name that does not reference its origin metaphor) and the Transfer Test (the mechanism can be applied to a completely different metaphor domain). Border-weight gradient encoding works for geological strata, botanical growth stages, narrative confidence, or any other hierarchy.

**The user's question:** When building new content with NEW metaphors derived through the tension-composition pipeline, is using these mechanisms:

**(a) "Library reuse"** -- which the anti-gravity mechanisms (R1, R5, R6) try to PREVENT to avoid convergence and pattern-matching?

**(b) "Vocabulary fluency"** -- which ENABLES richness because more vocabulary = more expressive capacity? (Like a musician who knows more chords can play richer music.)

**(c) Or is this apples-to-oranges** -- are mechanisms and metaphors operating at DIFFERENT levels where there IS no conflict?

### Evidence For Position (a): Library Reuse

1. **Variant B (Phase D) achieved 4/5 novelty AND 18/19 compliance precisely because it did NOT heavily use showcase vocabulary.** It invented its own component types (instrument cards, cost meters, error cards). Its richness was LOW partly because of this independence.

2. **Variant D (Phase D) was an intentional library copy (0/5 novelty).** It deployed showcase vocabulary extensively and achieved high compliance but was declared FAIL because it demonstrated zero creative contribution.

3. **R6 (divergence mandate) treats ANY library match as suspicious.** "If your metaphor matches a library pattern, you MUST provide strong independent convergence justification OR regenerate." This frames library overlap as a problem to justify.

4. **Case studies carry the warning "THIS IS NOT A TEMPLATE."** Reading them as a vocabulary source could violate the spirit of anti-prescription framing (R3).

### Evidence For Position (b): Vocabulary Fluency

1. **The richness-anatomy report found Variant B uses 5/44 catalogued techniques (11.4%). CD-006 uses 44/44 (100%).** The showcase pages achieved richness precisely BY using the full accumulated vocabulary. The gap between Variant B and CD-006 is almost entirely a vocabulary gap.

2. **The identity-investigation attributed ~25% of the richness gap to the "sample 2-4 mechanisms" instruction** -- which actively DISCOURAGES vocabulary saturation.

3. **The rigidity-archaeology showed vocabulary rigidity OUTPACED constraint rigidity 4:1 by the CD stage.** The system became more expressive BECAUSE builders had more vocabulary words. More mechanisms deployed = richer pages. This is not coincidence -- it is the design intent.

4. **The Jazz Real Book analogy in compositional-core/CLAUDE.md explicitly frames the mechanism catalog as vocabulary:** "Charlie Parker learned 200+ standards, transcribed 100+ solos. He did NOT play those standards verbatim. He EXTRACTED harmonic patterns, melodic shapes, rhythmic devices. He APPLIED them to NEW material with HIS voice."

5. **The mechanism catalog classifies 13/18 mechanisms as "VERY HIGH metaphor independence"** -- meaning they work across ALL metaphors, which is exactly what vocabulary does.

### Evidence For Position (c): Different Levels, No Conflict

1. **The anti-gravity mechanisms (R1, R5, R6) target METAPHOR-level convergence**, not mechanism-level usage. R6 asks "Is your metaphor domain the same as a library entry?" It does NOT ask "Are you using border-weight gradient encoding?"

2. **R2 (Mechanism/Metaphor Separation) explicitly creates a structural distinction:** "Mechanisms go in grammar/. Metaphors go in case-studies/. DO NOT mix them in the same file." The architecture ITSELF separates the levels.

3. **The modification-analysis provides the clearest statement:** "Every mechanism in the catalog is METAPHOR-NEUTRAL by definition (that is the Name Test). Border-weight gradient encoding works for confidence strata, geological depth, structural hierarchy, or anything else. The mechanism does not care about the metaphor."

4. **Phase 4 of the tension-composition pipeline explicitly tells the builder to READ the mechanism catalog AFTER metaphor commitment.** The mechanism extraction happens at a phase where the metaphor is already locked in. The procedure treats mechanisms as tools to apply TO a metaphor, not as library patterns being reused.

### The Resolution

**The answer is (c) -- mechanisms and metaphors operate at different levels -- with a crucial nuance.**

Using border-weight gradient encoding in a new botanical metaphor is NOT library reuse. It is vocabulary fluency. The same way a musician uses a minor seventh chord in a new composition without "reusing" the jazz standard where they first learned it. The mechanism catalog IS the vocabulary. The anti-gravity system protects metaphor-level divergence, not mechanism-level usage.

**The crucial nuance: residual metaphor associations.** Some mechanisms have residual associations from their discovery context that can create unconscious convergence:

- "Solid offset depth" was discovered through neobrutalist aesthetic (EXT-CREATIVE-001). Using it on every page could make all pages feel neobrutalist regardless of metaphor.
- "Dark header" evolved at OD-004 with geological survey map proportions. The pattern is generic, but the PROPORTION (how much header vs how much content) carries residual geological flavor.
- "Scroll-driven animation" was tested at OD-004 with geological reveal semantics. The animation timing carries metaphor residue.

**The real risk is not USING mechanisms (vocabulary), but using them with the SAME PROPORTIONS, RELATIONSHIPS, and SEQUENCING as showcase pages (copying implementation patterns).** The anti-gravity system should protect against implementation-level convergence, not mechanism-level usage.

### Why This Connects to Phase D Evidence

Phase D Variant B is the key data point. It achieved:
- 4/5 novelty (genuinely novel lab metaphor)
- 18/19 programmatic compliance
- BUT only 5/44 techniques (11.4% -- pre-DD structural richness)

Variant B's low richness was NOT caused by too much vocabulary (library reuse). It was caused by TOO LITTLE vocabulary (the "sample 2-4 mechanisms" instruction actively discourages deploying more). The builder invented novel component vocabulary (instrument cards, cost meters) but did not deploy the SYSTEM vocabulary (grid layouts, pseudo-elements, zone backgrounds, solid offset depth, transition grammar).

This means the richness gap is a VOCABULARY FLUENCY gap, not a LIBRARY INDEPENDENCE gap. The fix is more vocabulary deployment, not less library contact.

### Tier-Level Implications

| Tier | Mechanism Usage | Anti-Gravity Concern | Guidance |
|------|----------------|---------------------|----------|
| Floor | 5 basic mechanisms | NONE -- no metaphor, no convergence risk | Use standard components from library directly |
| Middle | 8-10 mechanisms, pattern-based | LOW -- mechanisms used generically, no metaphor to converge | Use mechanisms from catalog without restriction |
| Ceiling | 12-15 mechanisms, metaphor-driven | MODERATE -- ensure mechanisms are adapted to YOUR metaphor's proportions, not copied from showcase proportions | Deploy mechanisms freely but verify that your CSS VALUES are derived from your metaphor, not borrowed from case studies |
| Flagship | 16-18 mechanisms, deep deployment | ELEVATED -- at maximum deployment, risk of inadvertently recreating showcase page structures rises | Multi-pass audit should include a "convergence check": do your section proportions, animation timings, and zone progressions resemble any specific case study? |

### Implications for Pipeline Modifications

1. **Per-category minimum (Modification 1 replacement):** Correct approach. Encouraging builders to cover all 5 property categories ensures mechanism BREADTH without encouraging implementation copying.

2. **Fractal gate (Modification 2):** No change needed. Fractal consistency at YOUR metaphor's scale is vocabulary fluency, not library reuse.

3. **Coherence check (Modification 3):** Add convergence note: "At 3 critical transitions, verify channel shifts reflect YOUR metaphor's logic, not showcase page patterns."

4. **Technique narrative (Modification 4 replacement):** Add: "For each mechanism deployed, explain how it expresses YOUR metaphor -- not how the showcase page used it."

### What This Means for a New Builder Instance

A new builder instance will read the mechanism catalog and case studies. Without the vocabulary-vs-library distinction explicitly stated, it may either:

- **(Trap A) Avoid mechanisms to "be novel"** -- producing thin output like pre-enrichment Variant B (5/44 techniques). This is the UNDER-USE trap.
- **(Trap B) Copy showcase patterns wholesale** -- producing convergent output like Variant D (0/5 novelty). This is the OVER-COPY trap.

**The correct orientation:** "The mechanism catalog is your vocabulary. Use it fluently. The case studies show how OTHERS used that vocabulary. Study them for technique, not for copying. Your metaphor should be YOURS; your mechanisms should be the SYSTEM'S."

This is the Jazz Real Book analogy made maximally concrete: "Learn the vocabulary (mechanisms). Study the solos (case studies). Play YOUR music (your metaphor applied through the vocabulary)."

---

## PART 7: RECOMMENDATIONS FOR HANDOFF.md ORGANIZATION

### Section 1: Who Am I Talking To? (1 paragraph)
Establish the reader as a new Claude instance inheriting this project. State project name, purpose, current date/phase.

### Section 2: The 30-Second Summary (5 sentences)
- Design system for AI-focused technical documentation
- Sharp-edge, warm-palette, editorial identity (border-radius: 0, box-shadow: none, #FEF9F5)
- 4 richness tiers (Floor through Flagship) depending on structural tension
- Validated through 30 showcase explorations + 1 pipeline validation (Phase D)
- Inheriting at boundary between validation and production migration

### Section 3: What We Believe (Half Page)
Worldview principles compressed: richness from constraint, vocabulary vs prohibition, 4-type constraint taxonomy, content determines richness level.

### Section 4: Where We Are (Half Page)
Phase D COMPLETE (CONDITIONAL PASS). 3 critical gaps. Richness/rigidity research COMPLETE. Phase E NEXT.

### Section 5: The Open Questions (Half Page)
Live frontier:
1. Where is the diminishing returns peak for technique count?
2. What does an exceptional Middle-tier page feel like? (MOST IMPORTANT untested hypothesis)
3. Does collection-level richness emerge at 75+ pages?
4. How fast does builder fluency develop?
5. The vocabulary-vs-library nuance at Flagship tier

### Section 6: What To Read Next (Decision Tree)
Explicit routing:
- "Build a page" → compositional-core/CLAUDE.md
- "Plan migration" → worldview doc → tier model → pipeline/03-MIGRATION-PIPELINE.md
- "Research patterns" → worldview doc → research/RESEARCH-SYNTHESIS.md
- "Understand philosophy" → specification/README.md → worldview doc
- "Audit existing work" → prohibitions.md → tokens.css → validation/

### Section 7: What NOT To Do (Anti-Patterns)
1. Do NOT treat Phase D as "not started" (it is COMPLETE -- CLAUDE.md files are stale)
2. Do NOT read the full research corpus before building (worldview doc distills 90%)
3. Do NOT treat mechanisms as library patterns to avoid (they are vocabulary to use fluently)
4. Do NOT skip the always-load protocol (Phase D Track 1 builder skipped it: 5 critical violations)
5. Do NOT force metaphors onto content without tension (Addition Test exists for a reason)

---

## PART 8: ONE-DOCUMENT VS MANY-DOCUMENTS DECISION

### Recommendation: Hybrid Approach

**HANDOFF.md: One document, ~100 lines, Rings 0-1 compressed.**
Entry point. Covers orientation, worldview summary, tier model summary, status, open questions, routing. A new instance reads ONLY this before starting work.

**Existing CLAUDE.md files: Updated, not replaced.**
design-system/CLAUDE.md and compositional-core/CLAUDE.md are auto-loaded by directory structure. Update them with Phase D results and tier model references. Do not rewrite.

**Research archives: Preserved as Ring 4 evidence.**
richness-research/ and rigidity-research/ remain as-is for deep-dive reference. They are NOT part of the standard ingestion path.

**Why hybrid:**
- A single massive document exceeds what an LLM absorbs productively in one read
- The existing CLAUDE.md files are auto-loaded by directory structure -- replacing them breaks navigation architecture
- Research files contain debates, contradictions, and nuance that are VALUABLE for deep reasoning but HARMFUL for quick orientation (they create uncertainty where the synthesis has reached conclusions)

---

## PART 9: TOPIC vs CHRONOLOGY vs PRIORITY

### Recommendation: PRIORITY-FIRST, then TOPIC

**Chronology is the worst choice.** It forces reading 15+ phases of history to understand the current state. Nobody needs Phase 2B light section header details to build a Phase E playbook.

**Pure topic is second-worst.** Topics overlap so heavily that topical organization creates constant cross-references. "Richness" depends on "tier model" depends on "rigidity research" depends on "Phase D results" depends on "pipeline architecture."

**Priority-first is correct:** Most important information first, organized by topic within each priority level:
1. Critical state (where we are, what is next)
2. Critical decisions (tier model, modifications, Phase D gaps)
3. Operational framework (how to build, audit, plan)
4. Historical context (how we got here, why decisions were made)
5. Raw research (full findings, evidence, analysis)

Each ring in the concentric model corresponds to a priority level. Ring 0 = priority 1. Ring 1 = priorities 2-3. Ring 2-3 = priorities 3-4. Ring 4 = priority 5.

---

## PART 10: READINESS ASSESSMENT — "Am I Ready To Build?"

A new instance is ready to start building when it can answer these 7 questions:

1. **What are the 3 soul constraints?**
   Expected: border-radius: 0, box-shadow: none, no drop-shadow/gradient

2. **What determines Track 1 vs Track 2?**
   Expected: The Addition Test ("Can existing components fulfill this WITHOUT transforming their meaning?")

3. **What is the FIRST thing loaded for any task?**
   Expected: prohibitions.md + tokens.css (always-load protocol)

4. **Why are case studies PROHIBITED during Phases 0-3?**
   Expected: Prevents pattern-matching / continuation bias (R1: phase-gated library access)

5. **What are the 4 tiers and when is each used?**
   Expected: Floor (API refs, 30 min) / Middle (tutorials, 70-100 min) / Ceiling (essays with tension, 150-220 min) / Flagship (crown jewels, 240-400 min)

6. **What is the single most common failure mode?**
   Expected: Container width violation -- 4/5 Phase D pages violated the 940px minimum

7. **Are mechanisms "library reuse" or "vocabulary"?**
   Expected: Vocabulary -- metaphor-agnostic tools to use fluently. The anti-gravity system protects metaphor divergence, not mechanism usage.

If the instance answers all 7 correctly after reading HANDOFF.md + worldview doc, it is ready to proceed to Ring 2-3 (architecture and operations).

---

## PART 11: GRANULARITY CALIBRATION

### Too Sparse (Lost Context):
"Phase D is done. Do Phase E." -- No gaps, no caveats, no concrete guidance.

### Too Dense (Overwhelmed):
"Phase D tested 5 variants: Track 1 scored 11/19 with pure white header and CPL 112-132, Variant A used skill-only protocol with architectural blueprint metaphor scoring 3/5 novelty and 20/20 PA but failing on CPL at ~96 characters..." -- Signal drowns in detail.

### Right Granularity (Headline + Context + Action):
"Phase D: CONDITIONAL PASS. Container width was THE primary failure mode (4/5 pages violated 940px). Prose-only content limited component testing to 22-44%. Phase E must: (1) fix container width guidance, (2) run Phase D-V2 with mixed content, (3) strengthen CLAUDE.md always-load enforcement."

**Pattern:** WHAT happened (1 sentence) + WHY it matters (1 sentence) + WHAT to do (specific actions). This is Layer A granularity. Layer B expands each bullet to a paragraph. Layer C provides full evidence.

---

## SUMMARY OF RECOMMENDATIONS

### Documentation Structure

```
HANDOFF.md                    Ring 0+1 (~100 lines, THE entry point)
  ├── Who/what/where/when
  ├── Worldview principles (compressed to 10 lines)
  ├── Tier model (compressed to table)
  ├── Current status + open questions
  ├── Vocabulary-vs-library answer (3 sentences)
  ├── Routing tree (what to read next)
  └── Anti-patterns for new instances

design-system/CLAUDE.md       Ring 2 (EXISTING — update phase status only)
  ├── Updated: "Phase D COMPLETE, CONDITIONAL PASS"
  ├── Updated: timeline shows Phase D done
  └── Added: tier model reference

compositional-core/CLAUDE.md  Ring 3 (EXISTING — add Phase D reference)
  ├── Phase-gated protocol (unchanged)
  ├── Anti-gravity rules (unchanged)
  └── Added: Phase D results summary + modification pointers

Research archives              Ring 4 (EXISTING — preserved as-is)
  ├── ephemeral/richness-research/01-05
  └── ephemeral/rigidity-research/01-06
```

### Key Principles

1. **Concentric rings, not linear chapters** -- every ring provides a complete picture at its depth
2. **Mental models before details** -- worldview FIRST (richness from constraint, vocabulary vs prohibition), then operational protocol
3. **HANDOFF.md is the ONE new document** -- everything else is updated or referenced, not rewritten
4. **The vocabulary-vs-library question must be answered explicitly** -- it is the conceptual trap that will most confuse a new builder instance (Trap A: under-use, Trap B: over-copy)
5. **Readiness is testable** -- 7 questions verify understanding before building begins
6. **Priority-first organization** -- most important information first, history last
7. **Every cross-reference includes WHAT to look for** -- not just "see file X" but "see file X, Section Y (specific topic)"

---

**END INGESTION ARCHITECTURE**
