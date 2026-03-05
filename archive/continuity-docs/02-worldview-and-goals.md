# Operating Worldview and Goals

**Purpose:** Give any new instance immediate understanding of what we believe, what we are trying to do, what problems we face, and why it matters.

**Date:** 2026-02-15
**Phase:** Post-Phase D, pre-Phase E. Research complete, action pending.

---

## PART 1: WORLDVIEW (What We Believe)

### 1.1 The Core Belief: Richness Comes FROM Constraint, Not Despite It

The single most important finding across all research is this: **the showcase pages (DD-006, OD-004, CD-006) were MORE rigid than the pipeline, not less -- and their richness emerged FROM that rigidity.**

This is counter-intuitive. The naive assumption is that creative output requires creative freedom -- that removing constraints enables richer work. The evidence says the opposite. CD-006 (the richest page, scoring 39/40) operated under 78 simultaneous constraints. Variant B (the pipeline's best output) operated under roughly 20. More constraints produced more richness because the constraints were overwhelmingly VOCABULARY (new expressive tools) rather than PROHIBITIONS (things you cannot do). At the CD stage, vocabulary-type rigidity outnumbered constraint-type rigidity 62 to 16 -- a 4:1 ratio.

The foundational principle: **"Richness is not the opposite of rigidity. Richness is the fluency that comes from having many rigid words to compose with."**

### 1.2 The Operational Definition of Richness

> **Richness** is the degree to which a page's CSS structure, spatial topology, and rhythmic variation work in multi-channel coordination to reinforce a content-derived metaphor, creating an experience where spatial organization MEANS something rather than merely CONTAINING something.

Richness is measurable across 5 CSS dimensions:

| Dimension | Low (Variant B) | High (Showcase) |
|-----------|-----------------|-----------------|
| D1. Layout Complexity | Block stacking only | Grid + flex + named areas + multi-pattern |
| D2. Visual Depth | Flat stacking | Pseudo-elements, clip-path, offsets, composites |
| D3. Token Semantic Density | Raw values | Tokens -> aliases -> zones -> composites |
| D4. Responsive Sophistication | 0-1 breakpoint | 3-5 breakpoints, pattern-aware |
| D5. Metaphor-to-CSS Encoding | Labels only | Value generation, technique generation, full unification |

Plus 2 unmeasured dimensions: D6 (text-level rhythm) and D7 (reader agency/navigation).

Peak richness occurs not at maximum technique count but at **maximum content-mechanism fit** -- the interaction between content structure, mechanism deployment, and metaphor coherence.

### 1.3 The Vocabulary vs. Prohibition Distinction

This is the operational heart of the design system's philosophy:

- **Prohibitions** say "don't do X" -- border-radius must be 0, no box-shadow, no gradients, no pure black/white. There are 22 of these (8 absolute, 12 conditional, 2 meta). They define identity through REFUSAL.
- **Vocabulary** says "here are 18 ways to create meaning WITHIN those constraints" -- border-weight gradient encoding, 2-zone component DNA, solid offset depth, spacing compression, zone background differentiation, and 13 more mechanisms. They define capability through TOOLS.

The design system has far more vocabulary than prohibitions. The constraint surface is roughly 168 items, but only 4-5 are genuinely limiting. The rest are enabling (creating possibilities) or protective (preventing known failure modes). The system is already well-designed. The problems are microscopic, not systemic.

### 1.4 The Four-Type Constraint Taxonomy

All constraints in the system fall into four types with distinct effects:

| Type | Name | Effect | Example | Verdict |
|------|------|--------|---------|---------|
| 1 | Identity Rigidity | ALWAYS enabling | border-radius: 0, font trinity, warm palette | KEEP ALL |
| 2 | Procedural Rigidity | Sequences creativity | Phase-gated library access, sequential phases | KEEP ALL |
| 3 | Specification Rigidity | Mixed -- some protect, some limit | 940px container (protective), "sample 2-4" (limiting) | EVALUATE EACH |
| 4 | Ambient Rigidity | Emergent overload from volume | ~168 constraints simultaneously active | MANAGE |

The "rigidity-richness paradox" dissolved entirely once this taxonomy was applied. There is no paradox -- identity and procedural rigidity are GENERATIVE. The only legitimately limiting rigidity is a small number of specification caps (primarily "sample 2-4 mechanisms") and the emergent ambient overload from constraint volume.

### 1.5 The Accumulation Principle

Showcase richness was not designed in a single pass. It ACCUMULATED through 4-6 pipeline stages (DD -> OD -> AD -> CD), each adding 13-16 new techniques driven by specific research findings. The skill compresses this accumulated knowledge into "sample 2-4 mechanisms" -- a 50:1 information loss. The pipeline's richness gap is primarily an ITERATION gap, not a FREEDOM gap.

### 1.6 Content Determines Richness Level

Not all content supports or benefits from maximum richness. API references, changelogs, and configuration tables serve readers who want information, not atmosphere. Forcing metaphor onto them creates artifice, not richness. Content with genuine structural tension (opposing reader needs, competing organizational modes) naturally generates rich compositions. Content without tension should receive excellent assembly, not forced creativity.

---

## PART 2: THE TIER MODEL (Concrete Specifications)

> **Note:** These tier specifications are from the rigidity synthesis (the LATER investigation).
> They supersede the richness synthesis's earlier tier boundaries (which used 3-5 for Middle).

The research converged on a 4-tier system that maps content needs to richness levels. These are grounded in actual code analysis of Variant B (694 lines), OD-004 (1,978 lines), and CD-006 (2,085 lines).

### Tier 1: Floor (All Pages, 100%)

**What it is:** Token-compliant assembly with basic components. No metaphor, no grid/flex, no pseudo-elements. Block-level stacking with correct design tokens.

| Property | Value |
|----------|-------|
| Mechanisms | 5 of 18 (2-zone DNA, confidence encoding, border-left signal, type scale, code blocks) |
| CSS lines | ~150-250 |
| Build time | 30-45 min |
| Reproducibility | 95%+ (almost entirely mechanical) |
| Quality band | 14-17/20 |

### Tier 2: Middle (40-50% of Pages) -- RECOMMENDED UNIVERSAL FLOOR

**What it is:** Floor + grid/flex layouts + pseudo-elements + zone backgrounds + rhythmic variation + dark header + accessibility. NO metaphor. Spatial variety and density rhythm through pattern-based decisions (CRESCENDO, F-PATTERN, BENTO, PULSE).

| Property | Value |
|----------|-------|
| Mechanisms | 8-10 of 18 (Floor + spacing compression, dense/sparse, zone backgrounds, dark header, data tables) |
| CSS lines | ~350-500 |
| Build time | 70-100 min |
| Reproducibility | 80-90% (constrained decisions) |
| Quality band | 16-18/20 |
| Richness vs Floor | 3-4x (HIGHEST marginal ROI) |

**Why Middle is the universal floor:** The Floor-to-Middle transition has the highest return on investment in the entire system. For roughly 45 extra minutes, you get spatial variety, density rhythm, visual identity, and accessibility. This is the threshold where content goes from "formatted" to "designed" -- where "reader's eyes no longer drift off."

### Tier 3: Ceiling (20-30% of Pages)

**What it is:** Full tension-composition pipeline with metaphor-driven CSS generation. The metaphor GENERATES token values, not just names. Transition grammar (3 types), solid offset depth, scroll-driven animation, multi-variant callout system, metaphor-specific component invention.

| Property | Value |
|----------|-------|
| Mechanisms | 12-15 of 18 (Middle + border-weight gradient, solid offset, width variation, progressive disclosure, footer mirror) |
| CSS lines | ~700-1,000 |
| Build time | 150-220 min (with audit/fix) |
| Reproducibility | 50-70% (irreducible creative step) |
| Quality band | 17-19/20 |
| Richness vs Floor | 5-6x |

**Content qualifier:** Passes the Addition Test (genuine structural tension exists, standard components cannot fulfill the need WITHOUT transforming their meaning).

### Tier 4: Flagship (5-10% of Pages)

**What it is:** Maximum mechanism deployment, multi-pattern composition (3-5 axis patterns per page), composite components (3-zone: label + content + proof), editorial flourishes (drop caps, density-annotated TOC), 5-scale fractal compliance, print styles. Multi-pass audit/fix cycles mandatory.

| Property | Value |
|----------|-------|
| Mechanisms | 16-18 of 18 (nearly all) |
| CSS lines | ~1,000-1,500 |
| Build time | 240-400 min (3-5 hours with audit) |
| Reproducibility | 30-50% (maximum creative divergence) |
| Quality band | 18-20/20 |
| Richness vs Floor | 7-8x |

**Content qualifier:** Anchor content, design system demonstrations, deep multi-axis compound tension. Crown jewels where quality outweighs speed.

### The Inflection Point

```
RICHNESS
    |
8x  |                                    *  Flagship
    |
6x  |                        *  Ceiling
    |
4x  |            *  Middle  <-- INFLECTION POINT
    |
1x  | * Floor
    |_________________________________
       95%   80%   50%   30%
              REPRODUCIBILITY
```

The curve has a clear inflection at Middle tier -- the largest richness gain with the smallest reproducibility cost. Above Middle, each unit of richness costs exponentially more reproducibility.

---

## PART 3: GOALS (What We Are Trying to Accomplish)

### Goal 1: Build Pages at Different Richness Tiers to Prove the Model Works

The tier model is theoretical. It has never been tested with actual page builds at each level. The most important thing we can do next is BUILD, not analyze. One experiment resolves more open questions than another four research reports.

### Goal 2: Determine Which Tier Should Be the Universal Floor

The research unanimously recommends Middle as the universal floor. But nobody has built an EXCEPTIONAL Middle-tier page -- one with full CRESCENDO density, zone backgrounds, grid layouts, dark header, accessibility, and NO metaphor. If it achieves the "place" feeling, the entire Ceiling tier ambition shifts. If it does not, that data confirms metaphor penetration is necessary. This is "the most important untested hypothesis" (richness synthesis).

### Goal 3: Make Richness Reproducible Without Creating Limiting Rigidity

The pipeline must transmit "vocabulary" (enabling patterns), not just "prohibitions." It must raise the richness floor without creating a creativity ceiling. The specific challenge: how to modify the skill so that agents naturally deploy 8-10 mechanisms instead of 2-4, WITHOUT creating a "checklist factory" where the number dominates all other considerations.

### Goal 4: Prepare for Content Ingestion at Scale

75+ pages need to be built. The system must produce consistent quality across many agent runs, across different content types, with graceful degradation when judgment calls go wrong (tier down from Ceiling to Middle, not crash to invalid output).

---

## PART 4: PROBLEMS (What We Are Solving)

### Problem 1: The Richness Gap Between Showcase and Pipeline

Variant B (best pipeline output) deployed 7/18 mechanisms at 694 CSS lines. Showcase pages deploy 12-18 mechanisms at 1,000-2,000+ CSS lines. The gap is measurable across all 5 richness dimensions. The unified synthesis attributes it to:

- ~25% ambition ceiling ("sample 2-4 mechanisms" instruction caps technique density)
- ~25% compression loss (337 research findings compressed to skill instructions)
- ~35% iteration depth (single-pass vs 4-6 audit passes)
- ~15% accumulated understanding (irreducible -- multi-stage context that a single pass cannot replicate)

The addressable portion (~85%) can be closed through pipeline modifications. The irreducible ~15% may not produce VISIBLE output differences.

### Problem 2: Transmitting Vocabulary Through the Pipeline

The pipeline preserves CONSTRAINT rigidity (prohibitions are enforced -- 100% compliance in Phase D) but compresses out VOCABULARY rigidity (18 mechanisms reduced to "sample 2-4"). The skill says "sample 2-4 mechanisms." It does NOT say "deploy the MAXIMUM mechanisms that coherently reinforce your metaphor." This single instruction is the most damaging limitation, identified by all 5 rigidity research agents independently.

### Problem 3: Whether the 4 Proposed Modifications Create Unacceptable Rigidity

Four modifications were proposed to close the gap. The modification analyst evaluated each:

| Modification | Verdict | Reasoning |
|-------------|---------|-----------|
| Mod 1: Raise mechanism mandate from "2-4" to "minimum 8" | **MODIFY** | Raw number is arbitrary, encourages padding. Replace with per-category minimum (1+ per property category) + justification |
| Mod 2: Make fractal consistency a GATE | **ADOPT** | Lowest rigidity cost, highest richness gain. Gate pattern proven at Phase 3.5. Scope-calibrate for short content |
| Mod 3: Require multi-channel coherence table | **MODIFY** | Full table is overkill, creates uniformity pressure. Replace with 3 critical transitions + inline CSS annotations |
| Mod 4: Add technique count as X/18 metric | **REJECT** | Goodhart's Law trap. Converts quality to quantity. Replace with narrative + quality markers |

The critical insight: **Modifications 2+3 together are safe (enabling + enabling). Modifications 1+4 together are dangerous (creates a "metric-driven assembly line").**

### Problem 4: Container Width as the Primary Failure Mode

In Phase D, 3 of 5 pages violated the 940px container sweet spot -- either too wide (Track 1 at 1052px) or too narrow (Variants C and D at ~650-750px). Metaphor-driven narrow containers are the #1 perceptual failure. This needs NON-NEGOTIABLE enforcement: "No metaphor may override 940-960px. Express narrowing through INTERNAL spacing, not external width reduction."

### Problem 5: The "Sample 2-4 Mechanisms" Bottleneck

This instruction exists in two inconsistent forms in the skill ("3-5" in one place, "2-4" in another), suggesting it was never precisely calibrated. It simultaneously:
- Sets a CEILING on technique density (agents stop after hitting the number)
- Prevents engagement with the full catalog (agents read 2-4 entries, not 18)
- Creates a 50:1 compression from the accumulated knowledge that produced the showcase pages

---

## PART 5: ACTIONABLES (What to Do Next)

### Immediate (Before Next Build)

**1. Edit tension-composition SKILL.md:** Replace "sample 2-4 mechanisms" with per-category minimum + justification requirement.
- New instruction: "For each of the 5 property categories (Spatial, Temporal, Material, Behavioral, Relational), identify AT LEAST ONE mechanism. For each mechanism deployed, document WHY. For at least 3 mechanisms NOT deployed, document WHY NOT."
- Natural landing zone: 5-10 mechanisms without arbitrary count mandate

**2. Edit tension-composition SKILL.md:** Add tier-based pipeline selection at top.
- Middle tier: SKIP Phases 1-3, go directly to Phase 4.0 with content-type pattern
- This enables the Middle-tier shortcut without running the full metaphor pipeline

**3. Edit tension-composition SKILL.md:** Promote fractal consistency from CHECK to GATE.
- Require scale coverage table with CSS evidence
- Scope-calibrate: Floor exempt, Middle 2 scales, Ceiling 4 scales, Flagship 5 scales

**4. Add NON-NEGOTIABLE container width rule to Phase 4.0 guardrails:**
- "Container width 940-960px is NON-NEGOTIABLE. Express narrowing through INTERNAL spacing, not external width reduction."

### Short-Term (Next 1-2 Builds)

**5. Build one exceptional Middle-tier page.** This is THE single most important next step that all research agents agreed on. Full CRESCENDO density, zone backgrounds, grid layouts, dark header, no metaphor. Evaluate against Variant B and showcase pages. This single experiment resolves more questions than any amount of further analysis.

**6. Build the same content at 3 tiers** (Middle, Ceiling, Flagship). Evaluate quality differences. Produces the first data point on the diminishing returns curve.

**7. Add Mode 2 perceptual audit** as mandatory for all Ceiling pages. 14 questions at 2 viewports, ~5 extra minutes per page.

### Medium-Term (After 10+ Builds)

**8. Track quality metrics** across sequential pipeline runs to model fluency development.

**9. Implement sunset protocol:** Every specification constraint gets a "last caught real issue" timestamp. Constraints that have not caught issues in 10 consecutive runs are candidates for retirement.

**10. Strengthen Phase 3.5 gate** to check domain FAMILY, not just exact match.

---

## PART 6: WHY THIS MATTERS

### Before the Design System

Content was unengaging. "Eyes would naturally drift off." Pages were formatted text -- information containers with no spatial meaning, no visual rhythm, no sense of place. Every page looked like every other page. Reading was an obligation, not an experience.

### What Richness Creates

Richness makes content engaging, memorable, and spatially navigable. It creates the experience where **spatial organization MEANS something** rather than merely containing something. A rich page is a "place" -- you feel oriented, you feel the rhythm of information density, you understand hierarchy through visual weight, you sense transitions between ideas through spatial transitions.

The showcase pages proved this is possible. OD-004 (geological strata) made API best practices feel like excavating layers of accumulated wisdom. CD-006 (pilot migration) made a complex technical process feel like navigating a designed space. The metaphor was not decoration -- it was the organizing principle that made complex content comprehensible.

### The Dual Stakes

This matters on two levels:

**Reader experience:** Every page that falls below the engagement threshold is a page where the content fails its audience. The design system exists to ensure that good writing gets good presentation -- that content worth reading gets spatial treatment worth experiencing.

**Proof of capacity:** The design system must demonstrate that it can produce pages that feel like PLACES, not formatted blog posts. If the pipeline can only produce Variant B-level output (competent, compliant, but unremarkable), the entire investment in vocabulary, grammar, mechanisms, and case studies was infrastructure for capability that is never deployed. The tier model exists to deploy that capability at the right level for each piece of content.

### The Ecosystem Vision

The most novel reframe from the research: "Stop trying to reproduce ecosystem-level richness in individual pages. Instead, design the pipeline so that each page CONTRIBUTES to an ecosystem of richness." 75+ pages with unique metaphors, bound by soul constraints (identity rigidity), could create a collection where browsing is discovery -- where the coherence comes from shared identity (same fonts, same palette, same sharp edges) and the variety comes from unique metaphor expression (different spatial topologies, different rhythmic patterns, different atmospheric qualities).

This is untested. It requires the collection to exist first. But it is the vision that motivates building at scale.

---

## PART 7: KEY PRINCIPLES (Established Through Research)

### P1: Vocabulary Outpaces Constraint 4:1

At the CD stage, vocabulary-type rigidity outnumbered constraint-type rigidity 62 to 16. The system becomes progressively MORE expressive despite becoming more rigid. This directly refutes the intuition that "more rules = less creativity."

### P2: Binary Rules Achieve 100% Agent Compliance

Binary rules ("MUST" / "MUST NOT" / "invalidates") achieve 100% compliance. Judgment rules ("consider" / "strive for" / "aim to") achieve approximately 0%. This is the most important architectural principle for agent-facing instructions. Every constraint must be binary or it will be ignored.

### P3: Structure Enables, Counting Limits

Constraints that prescribe WHAT (mechanism count, technique inventory) create limiting rigidity. Constraints that prescribe HOW TO THINK (fractal coherence, multi-channel awareness, deployment justification) create enabling structure. The fractal gate tells you "whatever you build should work at multiple scales" -- it does not tell you what to build.

### P4: Graceful Degradation Over Catastrophic Failure

When judgment fails, the system should degrade to a lower tier (Ceiling -> Middle, Middle -> Floor), not crash to invalid output. Exit ramps at every tier: if metaphor forcing is detected (Isomorphism < 4), downgrade to Middle. If pattern mismatch at Middle, downgrade to Floor. If Floor component gap, flag for library expansion.

### P5: The Complexity Ratchet Needs a Sunset Protocol

Rules only accumulate, never retire. Every constraint that improves output in the short term creates evidence for keeping it long term, even as accumulated burden begins to suppress creativity. Any new constraint should include: "Re-evaluate after 10 pipeline runs. If not triggered in 3 consecutive runs, consider removing."

### P6: The "Checklist Factory" Anti-Pattern

The worst outcome is not too few constraints or too many constraints -- it is constraints that convert creative decisions into compliance exercises. When builders optimize for hitting numbers rather than serving content, the infrastructure meant to enable richness becomes the infrastructure that constrains it. Every modification must be evaluated: does it tell the builder what to DO, or does it shape how the builder THINKS?

### P7: Peak Richness Is Content-Mechanism Fit, Not Maximum Technique Count

The diminishing returns curve is real but unmeasured. Somewhere between 6 techniques (Variant B) and 22 techniques (CD-006) lies a peak beyond which additional techniques add noise. A page with 6 perfectly-deployed mechanisms that reinforce a coherent metaphor could be richer than a page with 10 mechanisms where 3 feel forced. We do not yet know where this peak is.

---

## PART 8: OPEN QUESTIONS (What We Do Not Yet Know)

### Q1: Where Is the Diminishing Returns Peak?

No agent measured where technique count transitions from "adding richness" to "adding noise." Building the same content at 5, 8, 12, and 18 mechanism counts with blind evaluation would resolve this. This is the single most important empirical question.

### Q2: What Does Exceptional Middle Tier Feel Like?

Nobody has built an exceptional Middle-tier page. If it achieves the "place" feeling, the Ceiling tier ambition shifts significantly. If it does not, metaphor penetration is confirmed as necessary for place-making. This is the most important untested hypothesis.

### Q3: How Fast Does Builder Fluency Develop?

The richness gap may be self-healing as builders develop fluency. Page 50 may rival showcase quality because the builder has achieved the same constraint-internalization. Nobody has modeled how quickly this happens.

### Q4: Does Collection-Level Richness Emerge?

75+ pages with unique metaphors -- is the browsing experience coherent or chaotic? The soul constraints should create coherence, but this is untested at scale.

### Q5: Has Anyone Asked the Reader?

All analysis is from the BUILDER'S perspective. Zero consumer-side validation. We do not know if readers notice border-weight encoding, perceive multi-channel coherence, or feel the difference between 8 and 15 mechanisms. The entire richness framework is built on producer-side metrics.

---

## PART 9: THE DESIGN SYSTEM ARCHITECTURE (Quick Reference)

### What Exists

The design system lives at `design-system/` and contains two parallel systems:

- **compositional-core/** (43 files, 880KB) -- Minimal vocabulary for BUILDING. 6-layer ontology: identity -> vocabulary -> grammar -> components -> case-studies -> guidelines. Phase-gated access. This is the operational layer.
- **specification/** (57 files) -- Complete documentation for UNDERSTANDING. Research provenance, philosophical anchors, token rationale.

### The Always-Load Protocol

Every agent, every task, must read 2 files first:
1. `compositional-core/identity/prohibitions.md` (353 lines) -- 22 prohibitions, 8 absolute
2. `compositional-core/vocabulary/tokens.css` (174 lines) -- 65 tokens in :root block

Total mandatory overhead: 527 lines. Phase D proved that skipping this produces immediate failure (Track 1 builder had 5 critical violations from not loading prohibitions).

### The Two Tracks

- **Track 1 (Assembly):** Components map directly to content. No metaphor needed. 45-90 min. Use compositional-core vocabulary + grammar + components.
- **Track 2 (Composition):** Prose-dominant content with implicit tension. Full tension-composition pipeline. 3-5 hours. Independent metaphor derivation required.

### The Skills

Two external skills drive the pipeline:
- **tension-composition** (`~/.claude/skills/tension-composition/SKILL.md`, 1,402 lines) -- 7-phase pipeline from content assessment through metaphor collapse to compositional layout
- **perceptual-auditing** (`~/.claude/skills/perceptual-auditing/SKILL.md`, 736 lines) -- 48 PA questions, 4 modes, guardrail verification

### Anti-Gravity (Pattern-Matching Prevention)

5 essential mechanisms prevent agents from copying existing work:
- R1: Phase-gated library access (case studies PROHIBITED until Phase 5)
- R2: Mechanism/metaphor separation (tools vs decisions in different files)
- R3: Anti-prescription framing ("not a template" warnings, narrative format)
- R5: Binary sequential phase rules (MUST complete in order)
- R6: Divergence mandate (convergence with library requires justification or regeneration)

---

**END WORLDVIEW AND GOALS**

*This document synthesizes findings from: richness-research/05-unified-synthesis.md (richness definition, 5 convergences, 5 tensions, 5 blind spots), rigidity-research/06-unified-synthesis.md (4-type taxonomy, vocabulary-as-engine, modification recommendations), rigidity-research/03-tier-specifications.md (4-tier model with concrete CSS profiles), rigidity-research/04-reproducibility-analysis.md (per-tier codification, failure modes, 8 skill modifications), rigidity-research/02-modification-analysis.md (4 modifications evaluated, interaction effects, Rigidity Test), design-system/CLAUDE.md (system architecture, routing, file paths), and design-system/compositional-core/CLAUDE.md (phase-gated protocol, anti-gravity rules).*
