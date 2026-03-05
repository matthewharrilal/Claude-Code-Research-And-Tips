# Phase 4 Propagation Depth Analysis

How deeply does the domain-metaphor assumption penetrate Phase 4 (Compositional Architecture), and what happens when composition is non-linear?

---

## 1. Element-by-Element Mapping: Where Domain Metaphor Is Assumed

### 1A. 5-Category Property Extraction (Step 4.1, lines 562-571)

**Spatial / Temporal / Material / Behavioral / Relational**

The instruction reads: "For YOUR COMMITTED METAPHOR, systematically extract properties across ALL five categories."

**Verdict: DUAL-NATURED**

The 5 categories themselves are UNIVERSAL perceptual dimensions -- they describe how humans perceive ANY composition, not just metaphor-derived ones. Spatial arrangement, temporal rhythm, material texture, behavioral dynamics, relational structure -- these are properties of the FINISHED PAGE, regardless of how the builder arrived at them.

But the instruction frames them as properties to EXTRACT FROM A METAPHOR. This is the critical conflation. The categories are universal; the EXTRACTION PROCEDURE is metaphor-specific. If the compositional idea isn't a domain metaphor (e.g., "I want this page to feel like a slow exhale that tightens unexpectedly"), there's nothing to "extract from" -- the idea IS the spatial/temporal/material feeling directly.

- **PROCESS THINKING:** The 5 categories are a powerful vocabulary for describing compositional intent. Any composition should be expressible across all 5 dimensions.
- **DOMAIN-DECOMPOSITION:** The instruction to "extract" properties from a committed metaphor. The test "if ANY category produces zero properties, your metaphor may be insufficiently rich" only applies to metaphors being decomposed.
- **What's lost:** A non-linear compositional idea might have STRONG spatial and temporal properties but no "material" properties at all -- not because it's insufficiently rich but because the composition operates in different dimensions than the taxonomy expects.

### 1B. 4 Density Patterns (Step 4.1, lines 574-583)

**CRESCENDO / F-PATTERN / BENTO / PULSE**

The table says: "The metaphor determines WHICH pattern."

**Verdict: MOSTLY DOMAIN-DECOMPOSITION, partially process**

The density patterns themselves are real spatial-organization archetypes. Pages DO have density flows, and having vocabulary for them is valuable. But the selection mechanism -- "the metaphor determines WHICH pattern" -- assumes a one-to-one mapping from domain metaphor to spatial organization.

For non-linear composition, density might not follow ANY single pattern. A composition where typographic decisions feed back into spatial arrangements might create a density flow that emerges during building rather than being selected upfront. The density pattern might be a HYBRID -- crescendo in one channel while pulsing in another.

- **PROCESS THINKING:** Having vocabulary for density flow is valuable. Understanding that pages have spatial rhythms that can be characterized.
- **DOMAIN-DECOMPOSITION:** The assumption that one metaphor maps to one pattern. The "Best When Metaphor Implies" column explicitly routes from metaphor characteristics to pattern selection.
- **COMPLIANCE DOCUMENTATION:** The table format itself exists for auditability -- "I chose CRESCENDO because the metaphor implies progressive deepening."

### 1C. Coherence Checks (Step 4.3, lines 601-616)

"All channels must reinforce the same metaphor direction at each boundary."

**Verdict: CONTAINS PROCESS THINKING but wraps it in unidirectional assumption**

The core insight -- that multiple CSS channels should shift SIMULTANEOUSLY at zone boundaries to create composed rather than formatted transitions -- is genuinely powerful and universally applicable. The transition table (Boundary x Channel x Direction) is an excellent compositional tool.

But the direction vocabulary is revealing: DEEPENING / OPENING / RESOLVING. These are LINEAR directions. They assume composition moves from one state to another along a single axis. The instruction "density direction must be consistent across ALL channels" assumes all channels move in the same direction at each boundary.

Non-linear composition might have channels that DIVERGE at a boundary -- backgrounds darkening while typography lightens, creating a tension WITHIN the transition itself. This isn't incoherence; it's compositional complexity. Jazz musicians call it "contrary motion." The current coherence model would flag this as a failure.

- **PROCESS THINKING:** Multi-channel simultaneous shifts at boundaries. The transition table as a planning tool. The principle that "composed" means channels coordinate rather than change independently.
- **DOMAIN-DECOMPOSITION:** The assumption that all channels must reinforce "the same metaphor direction." The direction vocabulary (DEEPENING/OPENING/RESOLVING) implies linear narrative arc.
- **What's lost:** Contrary motion, tension within transitions, channels that intentionally diverge to create perceptual complexity.

### 1D. Fractal Consistency (Step 4.5, lines 627-641)

"The SAME design pattern visible at ALL 5 zoom levels."

**Verdict: STRONGLY DOMAIN-DECOMPOSITION**

Fractal self-similarity is explicitly a metaphor-replication strategy: take the metaphor's core pattern and repeat it at Navigation / Page / Section / Component / Character scales. The instruction "How does the header/nav echo the principle?" assumes there IS a single principle that can be echoed.

For non-linear composition, self-similarity might not be the right structural relationship between scales. The relationship between macro and micro might be DEVELOPMENTAL (each scale adds something the previous couldn't express), CONTRAPUNTAL (scales deliberately differ to create depth), or EMERGENT (the relationship between scales is itself the composition).

The instruction "Build scales in order: Navigation -> Page -> Section -> Component -> Character" is explicitly top-down. The user's description of composition -- where choices at one scale ripple laterally and create repercussions at other scales -- is the opposite of this sequential, top-down deployment.

- **PROCESS THINKING:** Awareness that composition operates at multiple zoom levels. The principle that coarser scales should be established before finer ones (macro before micro). "3 strong beats 5 weak."
- **DOMAIN-DECOMPOSITION:** Self-similarity as the ONLY relationship between scales. Top-down sequential deployment. The assumption that one principle echoes uniformly at all levels.
- **What's lost:** Cross-scale tension, developmental relationships between scales, the possibility that a choice at component scale CHANGES what makes sense at page scale (bottom-up influence).

### 1E. Transition Table (Step 4.3, line 611-615)

```
| Boundary | Background | Typography | Spacing | Structural | Direction |
```

**Verdict: PROCESS THINKING trapped in linear format**

The transition table is one of Phase 4's best ideas -- it forces the builder to think about ALL channels at EACH boundary simultaneously, rather than implementing one channel at a time across the whole page. This is genuinely valuable compositional practice.

But the format assumes: (a) boundaries are discrete points between zones, (b) each boundary has a single "Direction," and (c) channels all move in that direction. Non-linear composition might have boundaries that are GRADIENTS (not discrete), directions that are AMBIGUOUS (intentionally), or channels that create TENSION with each other at the boundary.

- **PROCESS THINKING:** Simultaneous multi-channel planning. Explicit boundary awareness. The table as a pre-CSS planning artifact.
- **DOMAIN-DECOMPOSITION:** Single-direction assumption. Discrete boundary assumption. All-channels-aligned assumption.

### 1F. Concept-Based CSS Naming (Step 4.6, lines 643-650)

"Name your CSS custom properties by CONCEPT, not by position."

**Verdict: ALMOST ENTIRELY DOMAIN-DECOMPOSITION**

The examples are telling: `--dispatch-open`, `--dispatch-tactical`, `--stratum-surface`, `--stratum-bedrock`. These are METAPHOR VOCABULARY encoded into CSS variable names. The instruction claims this is "the strongest single indicator of whether the builder is composing or applying."

For non-linear composition, what would concept-based naming look like if the concept isn't a domain? If the compositional idea is "slow exhale that tightens," the CSS variables might be `--exhale-release`, `--exhale-constrict` -- which IS conceptual. So the principle (name by intent, not position) is universal, but the assumption that the intent comes from a domain metaphor is baked in.

- **PROCESS THINKING:** Name variables by intent rather than position. CSS naming as a composition-quality signal.
- **DOMAIN-DECOMPOSITION:** The specific expectation of domain vocabulary in CSS names. Using naming as proof of metaphor fidelity.
- **COMPLIANCE DOCUMENTATION:** "CSS custom property naming is the strongest single indicator" -- this is an AUDIT signal, not a building insight.

---

## 2. The Core Structural Assumption

Phase 4's architecture can be summarized as:

```
METAPHOR (singular, locked)
  -> DECOMPOSE into 5 property categories
  -> SELECT density pattern
  -> MAP properties to 6 CSS channels
  -> BUILD top-down (Navigation -> Character)
  -> VERIFY coherence (all channels same direction)
  -> NAME CSS by metaphor vocabulary
```

This is **analytical decomposition** -- take a whole (the metaphor), break it into parts (properties), and implement each part through a fixed vocabulary (channels). The flow is ONE-DIRECTIONAL: metaphor -> properties -> CSS. There is no feedback loop where CSS decisions inform the metaphor, where building reveals new properties, or where a choice at one boundary changes what should happen at another.

The user's description of non-linear composition is fundamentally different:

```
COMPOSITIONAL IDEA (possibly plural, possibly emerging)
  -> BEGIN building (any scale)
  -> DISCOVER that a choice at one point suggests something at another
  -> FOLLOW the repercussion laterally
  -> FIND that the lateral move enriches something vertically
  -> RETURN to find the original choice has new meaning
  -> The composition is a NETWORK, not a tree
```

These are incompatible architectures. The first is a compiler (source -> AST -> bytecode). The second is a conversation (move -> response -> reinterpretation -> deeper move).

---

## 3. What Phase 4 Would Look Like for Non-Linear Composition

### 3A. The Problem with "Restructuring" Phase 4

You can't restructure Phase 4 for non-linear composition by rearranging its steps. The linearity isn't in the SEQUENCE of steps -- it's in the EPISTEMOLOGY. Phase 4 assumes the builder KNOWS the composition before building it, and building is IMPLEMENTATION of that knowledge. Non-linear composition assumes the builder DISCOVERS the composition through building, and the compositional idea emerges from the interaction between decisions.

### 3B. What a Non-Linear Phase 4 Might Look Like

Instead of a procedure, it would be a set of **compositional principles** (always true), **generative questions** (asked while building), and **assessment criteria** (evaluated after building).

**Compositional Principles (always true):**

1. **Multi-channel awareness.** At any point where you make a CSS decision, consider what that decision implies for the other 5 channels. (This is the universal kernel of the transition table.)

2. **Scale awareness.** Periodically zoom out and zoom in. Does the macro structure still hold? Does the micro texture still serve? (This is the universal kernel of fractal consistency, minus the self-similarity assumption.)

3. **Density variation.** The page must not have uniform density. There must be at least 3 perceptibly different density levels. (This is the universal kernel of density patterns, minus the single-pattern assumption.)

4. **Restraint.** Not every mechanism needs to be deployed. Events are powerful because they're rare. (This survives completely from Phase 4.)

5. **Perceptibility.** Every CSS rule must create a change visible at 100% zoom. (This survives completely.)

6. **Adapt before inventing.** Use existing components before creating new ones. (This survives completely from Step 4.4.)

**Generative Questions (asked during building):**

- What does this choice SUGGEST about adjacent elements? Follow the suggestion.
- If I zoom out, does what I just built change the overall rhythm? Is that change good?
- What would CONTRAST with what I just built? Would that contrast create productive tension or incoherence?
- Am I building the same shape repeatedly? Is that repetition intentional or habitual?
- What does this section want to FEEL like to scroll through? Not what does it look like -- what's the kinesthetic experience?
- If I remove this element, what disappears? If nothing disappears, it's waste.
- Am I composing or decorating? (Composing = the structure changes meaning. Decorating = the structure stays the same, just prettier.)

**Assessment Criteria (evaluated after building):**

- Do at least 3 channels shift simultaneously at each major boundary?
- Are there at least 3 different density levels perceptible on the page?
- Is composition visible at 3+ zoom levels?
- Does the page pass the RICHNESS equation (density x restraint x confidence)?
- Can you describe the composition's organizing idea in one sentence? (It doesn't have to be a metaphor. "Compression followed by sudden release" is a compositional idea. "Geological strata" is a metaphor. Both are valid.)

### 3C. What Gets Lost, What Gets Gained

**Lost:**
- The transition table as a pre-build planning artifact (becomes a post-build assessment tool instead)
- Density pattern selection (replaced by density variation as an outcome, not a plan)
- Concept-based CSS naming as a composition signal (replaced by: can you describe your intent for each section?)
- The security of knowing the composition before building it

**Gained:**
- Space for compositions that EMERGE through building rather than being decomposed from above
- Lateral influence -- a choice in section 3 can change what happens in section 1
- Contrary motion -- channels that intentionally diverge at a boundary
- Multi-directional enrichment -- the interweaving the user describes
- Compositions that couldn't have been PLANNED because they only become visible through the act of building

---

## 4. Universally Valuable Process Thinking in Phase 4

These elements are valuable regardless of whether the compositional input is a domain metaphor, an aesthetic intention, an emergent discovery, or any other form:

### 4A. "Build boundary-by-boundary, not channel-by-channel" (line 531)

This is Phase 4's single most important instruction. It prevents the builder from thinking in isolated CSS properties (all backgrounds, then all borders) and forces simultaneous multi-channel consideration at each transition point.

**Universal because:** Whether the composition came from a metaphor, an intuition, or an emergent discovery, the CSS must be implemented as coordinated multi-channel shifts at boundaries, not as isolated property sweeps.

### 4B. Pacing Assessment (Step 4.2, lines 585-600)

The pacing questions -- How many sections? Where is the dramatic peak? Are transitions structural or labeled? -- apply to any composition. The rhythm variation requirement (3 different transition types: SMOOTH/BRIDGE/BREATHING) is about scroll experience, not about metaphor.

**Universal because:** Every page has pacing. Every page has a scroll rhythm. These questions help regardless of what generated the composition.

### 4C. The RICHNESS Equation (lines 521-529)

`RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE`

This is multiplicative and metaphor-agnostic. Zero in any factor = zero richness. DENSITY (every rule perceptible), RESTRAINT (not everything deployed), CONFIDENCE (variety in grids, borders, sizes) -- these evaluate the RESULT, not the process that produced it.

**Universal because:** It measures the composition's perceptual quality, not its derivation path.

### 4D. "Adapt Before Inventing" (Step 4.4, lines 617-625)

The three-question filter (Can existing component be adapted? Can layout alone express it? Is it necessary?) applies regardless of compositional source.

**Universal because:** Component economy is about craft, not about metaphor.

### 4E. The 6 CSS Channels as Vocabulary (lines 533-544)

Background, border, typography, spacing, layout, color accent. "Anything not expressible through these 6 channels is OUTSIDE the vocabulary."

**Universal because:** These are the actual tools available to any builder, regardless of compositional intent. The constraint is the medium, not the method.

### 4F. Mechanism Library Access (Step 4.0, lines 546-560)

Reading the mechanism catalog and deploying across all 5 categories. The instruction to document WHY each mechanism serves THIS content at THIS location, and to document 3 rejected mechanisms.

**Partially universal.** The multi-category deployment is good (ensures compositional breadth). The documentation requirement is compliance overhead but does force intentionality. The catalog access timing (only in Phase 4) is pipeline-specific.

---

## 5. Summary: Propagation Depth

The domain-metaphor assumption propagates to **every step of Phase 4** except the RICHNESS equation and the "adapt before inventing" filter. In detail:

| Phase 4 Element | Process | Decomposition | Compliance | Notes |
|----------------|---------|---------------|------------|-------|
| RICHNESS equation | HIGH | none | none | Evaluates result, agnostic to derivation |
| Build boundary-by-boundary | HIGH | none | none | Universal compositional practice |
| 6 CSS channels | HIGH | LOW | none | Channels are universal; routing from metaphor is not |
| Pacing assessment | HIGH | LOW | none | Scroll rhythm questions are universal |
| Adapt before inventing | HIGH | none | none | Component economy is universal |
| 5-category extraction | MEDIUM | HIGH | MEDIUM | Categories are universal, extraction procedure is not |
| Density patterns | LOW | HIGH | MEDIUM | Patterns exist; single-pattern selection is decomposition |
| Coherence checks | MEDIUM | HIGH | LOW | Multi-channel coordination is universal; unidirectional assumption is not |
| Transition table | MEDIUM | HIGH | LOW | Great tool, trapped in linear format |
| Fractal consistency | LOW | HIGH | LOW | Multi-scale awareness is universal; self-similarity is decomposition |
| Concept-based CSS naming | LOW | HIGH | MEDIUM | Intent-based naming is universal; domain-vocabulary is decomposition |
| Mechanism library access | MEDIUM | LOW | HIGH | Catalog is universal; timing/documentation is pipeline |

**Overall:** Phase 4 is approximately 60% domain-decomposition, 30% universally valuable process thinking, and 10% compliance documentation. The process thinking is genuinely excellent but is EMBEDDED IN and SURROUNDED BY decomposition assumptions, making it difficult for a builder to extract the universal principles without absorbing the linear, top-down, single-metaphor model.

---

## 6. The Deeper Question: Can Phase 4 Support Both?

Phase 4 cannot support non-linear composition as currently written. The issue is structural, not cosmetic:

1. **Phase 4 is a PROCEDURE.** Non-linear composition requires PRINCIPLES + QUESTIONS, not steps.
2. **Phase 4 assumes the composition is KNOWN before building.** Non-linear composition assumes it EMERGES through building.
3. **Phase 4 is ONE-DIRECTIONAL (metaphor -> CSS).** Non-linear composition is MULTI-DIRECTIONAL (any choice can influence any other).
4. **Phase 4 evaluates coherence as ALIGNMENT.** Non-linear composition includes INTENTIONAL DIVERGENCE (contrary motion, cross-scale tension).

A Phase 4 that supports both would need to:
- Separate the universally-valuable PRINCIPLES from the metaphor-specific PROCEDURE
- Offer the procedure as ONE VALID PATH for builders who have a domain metaphor
- Offer the principles + generative questions as an ALTERNATIVE PATH for builders composing non-linearly
- Redefine coherence to include intentional divergence (with the constraint that divergence must be PERCEPTIBLE and PURPOSEFUL, not accidental)
- Move the transition table from a PRE-BUILD plan to a tool usable at any point (pre-build OR mid-build OR post-build assessment)

The universal layer would be thin -- perhaps 40 lines of principles and questions. The metaphor-decomposition path would be the current Phase 4, edited for clarity. The non-linear path would be new material. Both paths converge on the same ASSESSMENT CRITERIA (RICHNESS equation, multi-channel shifts, density variation, multi-scale presence).
