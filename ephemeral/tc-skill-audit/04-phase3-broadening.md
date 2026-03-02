# Phase 3 Broadening Analysis: Compositional Ideas Beyond Domain Metaphors

## Executive Summary

Phase 3 (Metaphor Collapse) contains **14 distinct structural elements** that channel the creative output toward a real-world domain noun. Of these, **5 are domain-specific by definition** (the search query, domain search territory, incompatible domain families, interpretive distance gate, and cultural consideration), **6 generalize with modification**, and **3 generalize as-is**. The broadening is feasible but requires replacing the domain-specific elements with new structures that preserve Phase 3's core function: transforming emotional opposition into actionable compositional direction. The central risk is that non-domain compositional ideas (dynamics, behaviors, experiences) lack the structural mapping richness that domain metaphors provide, potentially producing vague direction that doesn't translate to CSS decisions.

---

## 1. Complete Inventory of Domain-Forcing Constraints

### 1.1 Constraints That Are Domain-Specific By Definition

**C1: The Search Query (Step 3.4, line 353)**
```
"What real-world domain naturally exhibits [OVERLAP] while being [SIDE B GAP] yet conveying [SIDE A GAP]?"
```
This is the single most channeling element. It explicitly asks for a "real-world domain" and structures the answer as a noun. The example answer is "geological strata" -- a thing, not a behavior or dynamic.

**C2: Domain Search Territory (line 370-372)**
The list: Geological/Sedimentary, Architectural/Structural, Typographic/Editorial, Cartographic/Territorial, Industrial/Mechanical, Scientific/Laboratory, Legal/Contractual, Archival/Catalogic, Military/Strategic, Astronomical/Surveying. This is a menu of domains. It explicitly provides noun-categories to scan. A non-domain compositional idea ("this page accelerates") has no territory to scan against.

**C3: Incompatible Domain Families (lines 374-381)**
Organic/Biological, Liquid/Fluid, Atmospheric/Weather, Textile/Fabric, Musical. These are exclusion criteria defined as domain categories. The concept of "incompatible families" only makes sense for domain nouns. A dynamic like "compression under pressure" doesn't belong to a family that can be checked against this list.

**C4: Interpretive Distance Gate (lines 412-416)**
"A metaphor must travel CONCEPTUAL DISTANCE from the content to be a bridge, not a label." The examples are domain-to-domain distances: "secure facility" for security docs = zero (label), "geological strata" for confidence levels = moderate (bridge). Interpretive distance is measured as conceptual distance between the content's domain and the metaphor's domain. For a non-domain idea like "this page argues with itself," distance is measured differently -- it's not domain-to-domain but mode-to-mode.

**C5: Cultural Consideration (lines 444-449)**
"Prefer physics-grounded over culture-grounded (crystal formation > origami)." This evaluates domain metaphors by their cultural universality. A dynamic ("acceleration") or behavior ("compression") isn't grounded in any culture -- it's a universal concept. The guidance doesn't apply.

### 1.2 Constraints That Generalize With Modification

**C6: Structural Property Extraction -- Steps 3.1 and 3.2 (lines 324-341)**
These steps transform emotional needs (Side A) and design constraints (Side B) into geometric/topological abstractions. This is NOT domain-specific. "Warmth" becoming "containment with visible boundaries" and "`border-radius: 0`" becoming "angularity" work regardless of whether the destination is a domain, a dynamic, or an experience. **Generalizes as-is.**

**C7: Structural Overlap -- Step 3.3 (lines 343-347)**
Comparing Side A and Side B's structural property lists to find overlap. This works for any compositional target. The overlap between "ordering" (Side A) and "discrete weight" (Side B) is the same whether you're looking for a domain or a dynamic. **Generalizes as-is.**

**C8: Three Search Heuristics (lines 360-368)**
- Constraint scan: "Start with the HARDEST constraint." This works for any compositional search -- eliminate candidates that can't satisfy the tightest constraint. **Generalizes.**
- Content resonance: "Ask what the content is LITERALLY about." This currently seeds domain search (content about geology -> geological metaphor). For non-domain ideas, it would seed differently: content about arguing -> "this page argues." **Partially generalizes** -- the mechanism works but the output type changes.
- Emotional valence: "Side A's emotion eliminates domains with wrong valence." Valence filtering works for any compositional idea. An idea with wrong emotional register should be rejected. **Generalizes.**

**C9: Candidate Evaluation -- Step 3.5 (lines 383-399)**
Four evaluation criteria:
- "Does it resolve the tensions?" -- **Generalizes.** Any compositional idea must resolve tensions.
- "How many independent structural mappings?" -- **Partially generalizes.** Domains naturally produce many mappings (geological strata: layers->zones, pressure->density, fossils->embedded elements, erosion->transitions). Non-domain ideas may produce fewer. "This page accelerates" maps to: spacing compression, typography tightening, increasing density. That's 3 mappings, not 6+. The threshold (6+ = deep, 2-3 = thin) may need adjustment.
- "Does the content resonate?" -- **Generalizes.** Both nominal and structural resonance apply to any compositional idea.
- "Can every property be expressed in CSS?" -- **Generalizes.** This is a mechanism-level check that applies to anything.

**C10: Execution Risk Questions (lines 395-399)**
- "Does this metaphor conceptualize transitions as CHANGING STATE or EMPTY SPACE?" -- **Generalizes** to any compositional idea.
- "Does this metaphor rely on STRUCTURAL GRADIENTS or TEXTUAL LABELS to communicate?" -- **Generalizes.**
- "Does this metaphor produce VARIED element sizes or UNIFORM grids?" -- **Generalizes.**
- "Does this metaphor have a natural responsive story at 768px?" -- **Generalizes.**

**C11: 6 Binary Rejection Checks (lines 401-410)**
- R1: "Does the metaphor use the content's own domain vocabulary?" -- **Needs reframing.** For domain metaphors, this checks domain-to-domain distance. For non-domain ideas, the equivalent is: "Is the compositional idea merely a description of what the content already does?" ("This page about acceleration accelerates" = zero distance.)
- R2: "Does the metaphor require visible text labels to communicate?" -- **Generalizes.** Any compositional idea that needs labels is announced, not structural.
- R3: "Does the metaphor's physical shape force container width below 940px?" -- **Generalizes.**
- R4: "Does the metaphor conceptualize ALL transitions as empty space?" -- **Generalizes.**
- R5: "Does the metaphor produce 6+ identical repeated elements?" -- **Generalizes.**
- R6: "Does the metaphor require soul violations?" -- **Generalizes.**

**C12: Isomorphism Table Requirement (line 424)**
"The full isomorphism table (metaphor property -> content property -> CSS mechanism)." This is the most structurally demanding element. Domain metaphors excel here because they have rich physical properties (geology: strata, pressure, erosion, fossils, faults, temperature gradients) that each map to content properties AND CSS mechanisms. A non-domain idea like "this page breathes" has fewer inherent properties: inhale/exhale -> expansion/contraction. The table would be sparser. **Needs structural replacement or relaxed thresholds.**

### 1.3 Constraints That Generalize As-Is

**C13: The Metaphor Commitment Gate -- Phase 3.5 (lines 453-503)**
Steps 3.5A through 3.5E are about locking in a compositional decision, verifying independent derivation, and checking creative excitement. None of these require the committed idea to be a domain. "Your metaphor: this page compresses under argument" works in every field of the gate. **Generalizes as-is.**

**C14: Metaphor Failure Modes (lines 426-432)**
Monopoly, Inflation, Forcing, Redundancy, Decay -- these diagnostic patterns apply to any creative search, not just domain search. If you only find one dynamic, constraints may be too tight. If you find 8+ dynamics, tension may be cosmetic. **Generalizes as-is.**

---

## 2. What Phase 3 Looks Like Broadened

### 2.1 The Core Reframing

Current Phase 3 asks: "What real-world domain is the bridge?"
Broadened Phase 3 asks: **"What compositional idea is the bridge?"**

A "compositional idea" is any concept that:
1. Resolves the emotional opposition between content needs and system constraints
2. Produces structural mappings to CSS mechanisms
3. Sustains coherence across the full page (not just one section)

Compositional ideas come in multiple types:

| Type | Example | CSS Translation Path |
|------|---------|---------------------|
| **Domain** (current) | "Geological strata" | Physical properties -> CSS channels |
| **Dynamic** | "This page accelerates" | Kinetic qualities -> spacing/density gradients |
| **Behavioral** | "This page compresses under pressure" | Process states -> zone characteristics |
| **Relational** | "A dialogue between two voices" | Interaction patterns -> layout alternation |
| **Experiential** | "This page earns trust through restraint" | Experiential arc -> progressive disclosure |
| **Emergent** | Something without a name | The structural properties themselves compose into a unique idea |

### 2.2 Replacing the Search Query (C1)

The current query format: `"What real-world domain naturally exhibits [X] while being [Y] yet conveying [Z]?"`

**Broadened query format:**
```
"What compositional idea resolves the opposition between [SIDE A GAP] and [SIDE B GAP]
by working through [OVERLAP PROPERTIES]?"
```

This removes the "real-world domain" channeling while preserving the constraint structure. The answer could be a domain, a dynamic, a behavior, or something unnameable.

**Alternative: Multiple query formats by type:**
```
DOMAIN:    "What real-world domain naturally exhibits [X] while being [Y] yet conveying [Z]?"
DYNAMIC:   "What movement or process resolves [X] through [Y] while creating [Z]?"
BEHAVIOR:  "What compositional behavior bridges [SIDE A] and [SIDE B] using [OVERLAP]?"
RELATION:  "What relationship between page elements embodies [OPPOSITION] through [OVERLAP]?"
EMERGENT:  "The structural overlap is [X, Y, Z]. What compositional form emerges from these properties together?"
```

The risk with multiple formats is that it becomes a menu (pick a type), when the current single format forces a focused search. The single broadened format is probably better, with the multiple formats offered as heuristics if the single format doesn't yield results.

### 2.3 Replacing Domain Search Territory (C2)

The current territory is a list of domains to scan. The broadened equivalent is a **compositional idea space** organized by structural type:

**Compositional Idea Territory:**
- **Spatial dynamics:** compression, expansion, stratification, aggregation, dispersal, folding, nesting
- **Temporal dynamics:** acceleration, deceleration, rhythm, oscillation, accumulation, erosion, crystallization
- **Material qualities:** density, porosity, transparency, weight, elasticity, brittleness, temperature
- **Behavioral patterns:** containment-and-release, progressive revelation, argument, dialogue, cultivation, excavation
- **Relational structures:** hierarchy, network, flow, opposition, synthesis, call-and-response
- **Experiential arcs:** trust-building, immersion, transformation, confrontation, resolution, meditation

This is NOT a lookup table. Like the current domain territory, it's a search menu to ensure viable ideas aren't overlooked. Each category can produce either domain metaphors ("geological strata" from spatial dynamics) or non-domain ideas ("this page compresses" from spatial dynamics).

### 2.4 Replacing Incompatible Domain Families (C3)

Currently framed as domain families that conflict with angular/flat/sharp constraints. The broadened equivalent is **incompatible compositional qualities:**

For a system with angular/flat/sharp constraints, incompatible compositional qualities include:
- **Flowing/liquid dynamics:** require curves, gradients, smooth transitions
- **Organic growth patterns:** require irregular forms, non-geometric boundaries
- **Atmospheric/ambient qualities:** require blur, opacity, soft transitions
- **Textile/woven textures:** require complex visual textures, draping

This is the same information expressed as qualities rather than domain families. An idea like "this page flows like water" would be caught by "flowing/liquid dynamics" the same way the "Liquid/Fluid" domain family currently catches "tidal pool."

### 2.5 Replacing the Interpretive Distance Gate (C4)

Currently measures domain-to-domain conceptual distance. Broadened version measures **idea-to-content distance:**

> A compositional idea must travel conceptual distance from the content to be a bridge, not a description.

Zero-distance examples by type:
- **Domain:** "Secure facility" for security docs (label, not bridge)
- **Dynamic:** "This page about acceleration accelerates" (description, not bridge)
- **Behavioral:** "This page about compression compresses" (tautology)
- **Relational:** "This page about dialogue is a dialogue" (reflection, not bridge)

Moderate-distance examples:
- **Domain:** "Geological strata" for confidence levels (bridge)
- **Dynamic:** "This page about persuasion compresses under its own argument" (bridge -- the dynamic comes from the content's structure but isn't the content's subject)
- **Relational:** "This page about technical architecture is a dialogue between precision and warmth" (bridge -- the relationship isn't in the content but is constructed by the reader-content-system interaction)

The gate works the same way: if the compositional idea is a direct description of the content, reject it.

### 2.6 How Candidate Evaluation Changes (C9, C12)

**The Isomorphism Table Problem**

Domain metaphors naturally produce rich isomorphism tables because physical domains have many independent properties (geological: strata, pressure, erosion, fossils, fault lines, temperature, mineral composition, crystallization). Each maps to both content properties and CSS mechanisms.

Non-domain ideas produce sparser mappings:

| Compositional Idea | Natural Properties | Expected Mapping Count |
|----|----|----|
| "Geological strata" | strata, pressure, erosion, fossils, faults, temperature, minerals, crystallization | 6-10 |
| "This page accelerates" | initial velocity, acceleration rate, terminal velocity, momentum | 3-5 |
| "A dialogue between two voices" | voice A, voice B, turn-taking, interruption, agreement, silence | 4-6 |
| "Compression under argument" | initial volume, compression force, density increase, residual elasticity, breaking point | 4-6 |

Non-domain ideas typically produce 3-6 mappings vs. domains' 6-10. The current threshold (6+ = deep, 2-3 = thin, 0-1 = decorative) needs recalibration:

**Broadened thresholds:**
- 5+ independent structural mappings = structurally deep
- 3-4 = moderate (viable if mappings are high-quality)
- 0-2 = thin -- reject or combine with another idea

Alternatively, the isomorphism table could be replaced by a **compositional affordance check**: for each of the 6 CSS channels, does the compositional idea suggest a SPECIFIC decision? If it suggests decisions in 4+ channels, it's actionable.

### 2.7 The Commitment Gate (Phase 3.5)

Phase 3.5 generalizes almost entirely. The only domain-specific element is Step 3.5C:

> "Does this metaphor appear in `/case-studies/_INDEX.md`?"

For non-domain ideas, this check needs broadening: "Is this compositional idea structurally similar to a case study's approach?" This is a harder check since case studies are organized by domain metaphor, not by compositional type. In the long term, case studies should be indexed by both domain AND compositional type.

---

## 3. Risks of Broadening

### 3.1 Vagueness Risk (HIGH)

Domain metaphors are naturally concrete. "Geological strata" gives you strata (layered zones), pressure (compression gradients), fossils (embedded elements), erosion (transition patterns), temperature (color temperature shifts). Each property suggests specific CSS decisions.

Non-domain ideas can be dangerously vague. "This page breathes" -- what does that mean in CSS? Generous spacing? Alternating density? Slow animation (which would violate the design system)? The word "breathes" is evocative but structurally underdetermined.

**Mitigation:** The structural property extraction steps (3.1, 3.2) and the isomorphism requirement serve as vagueness gates. If a compositional idea can't produce at least 3 independent structural mappings to CSS channels, it's too vague to use. The broadened Phase 3 should make this gate explicit and early: after generating a compositional idea, IMMEDIATELY attempt the structural mapping. If it doesn't produce concrete CSS decisions, reject it.

### 3.2 Structural Depth Loss (MEDIUM-HIGH)

Domain metaphors force structural thinking because domains have PHYSICS. Geological strata have real physical properties that constrain each other (deeper strata are denser, under more pressure, have different temperature). These physics become CSS physics (deeper zones are denser, have tighter spacing, have darker backgrounds). The physical constraints of the domain do compositional work for free.

Non-domain ideas lack this free physics. "This page accelerates" doesn't constrain what the acceleration looks like. The designer must invent the physics, which requires more creative effort and produces less internally consistent results.

**Mitigation:** Require non-domain ideas to articulate their own physics explicitly. "This page accelerates" must become "This page accelerates: spacing compresses from 64px to 24px, typography weight increases from 400 to 500, backgrounds darken from #fefaf5 to #f5f0e8, information density doubles per zone." The physics must be stated, not implied.

### 3.3 Loss of Surprise (MEDIUM)

The interpretive distance gate works well for domain metaphors because domain-to-domain jumps produce genuine surprise ("geological strata" for a confidence tutorial is surprising and productive). Non-domain ideas risk being less surprising because they're more abstract. "This page deepens" is structurally correct but creatively flat compared to "this page is an archaeological dig."

**Mitigation:** The interpretive distance gate should be strengthened, not weakened, for non-domain ideas. Non-domain ideas must be evaluated for their GENERATIVITY: does this idea suggest CSS decisions you wouldn't have made otherwise? "This page argues with itself" suggests alternating layout structures, point-counterpoint typographic treatment, moments of visual agreement and disagreement. That's generative. "This page deepens" just suggests gradual darkening. That's obvious and should be rejected as insufficiently generative.

### 3.4 Default to Vague When Domain Would Work Better (MEDIUM)

If both paths are available, agents may default to the easier path. "This page deepens" is easier to generate than "geological strata" and requires less domain knowledge. But it produces less compositional direction. There's a risk that broadening the option space leads agents to take the path of least resistance.

**Mitigation:** Score compositional ideas by structural mapping richness regardless of type. If a domain metaphor produces 8 mappings and a dynamic produces 3, the domain metaphor wins on merit, not on category privilege. The evaluation criteria should be type-blind but quality-discriminating.

### 3.5 Pipeline Downstream Assumptions (LOW-MEDIUM)

Phase 4 assumes a metaphor with rich physical properties. Step 4.1 extracts properties across 5 categories (Spatial, Temporal, Material, Behavioral, Relational). The density patterns (CRESCENDO, F-PATTERN, BENTO, PULSE) are described in metaphor terms ("geological, archaeological" for CRESCENDO). The Conviction Brief format (Phase 4.5) describes a "world" the builder inhabits -- a world is easier to build from a domain than from a dynamic.

This is analyzed in Task #5 (Phase 4 propagation), but the key implication for Phase 3 broadening is: whatever replaces the domain metaphor must produce outputs that Phase 4 can consume. Phase 4 needs:
1. Physical properties across 5 categories (spatial, temporal, material, behavioral, relational)
2. A density pattern selection
3. A "world" description for the Conviction Brief
4. CSS channel mappings

If a non-domain idea can produce all four, it's Phase-4-compatible. If it can't, it needs Phase 4 modifications (which are out of scope for this analysis but relevant for Task #5).

---

## 4. Alternative Frameworks from Design Theory

### 4.1 Christopher Alexander's Pattern Language (Architecture)

Alexander's patterns are NOT domains. They're spatial-experiential qualities: "Light on Two Sides of Every Room," "Intimacy Gradient," "Sequence of Sitting Spaces." Each pattern describes a RELATIONSHIP between people and space, not a domain metaphor. This is directly relevant: a compositional idea could be an Alexander-style pattern. "Intimacy gradient" as a compositional idea produces: progressive containment, narrowing whitespace, increasing typographic density, warmer background tones. That's 4+ CSS channel decisions from a non-domain idea.

**Relevance to Phase 3:** Alexander's patterns suggest a search territory organized by experiential qualities (intimacy, threshold, sequence, nesting, opening) rather than domains. This is exactly the kind of broadening that preserves structural depth.

### 4.2 Laban Movement Analysis (Dance/Movement)

Laban's framework describes movement through four factors: Space (direct vs. indirect), Weight (strong vs. light), Time (sudden vs. sustained), Flow (bound vs. free). These factors combine into 8 "effort actions" (e.g., pressing = direct + strong + sustained, flicking = indirect + light + sudden). A compositional idea could be a Laban effort quality: "This page presses" (direct, strong, sustained) vs. "This page flicks" (indirect, light, sudden). Each effort quality suggests different CSS decisions.

**Relevance to Phase 3:** Laban's effort factors could serve as a structural property taxonomy for non-domain ideas, similar to how the 5-category taxonomy (spatial, temporal, material, behavioral, relational) works for domain properties. Weight -> CSS weight (typography, borders). Time -> CSS rhythm (spacing, density). Space -> CSS directness (layout, hierarchy). Flow -> CSS constraint (containment, overflow).

### 4.3 Musical Composition Theory

Musical composition uses concepts like: counterpoint (independent voices moving simultaneously), tension and resolution (dissonance -> consonance), theme and variation, call and response, crescendo/diminuendo, rubato (flexible tempo). These are compositional dynamics, not domains. "This page uses counterpoint" suggests parallel visual tracks with independent but harmonizing content streams. "This page builds to a crescendo" suggests progressive density increase.

**Relevance to Phase 3:** Musical concepts are already partially present in TC (the "PULSE" density pattern, the concept of "rhythm" in pacing assessment). Broadening Phase 3 would make these musical dynamics first-class compositional ideas rather than secondary vocabulary for domain metaphors.

### 4.4 Gestalt Principles (Psychology/Design)

Gestalt principles (proximity, similarity, closure, continuity, figure-ground, common fate) describe how humans perceive organization. These are structural principles that directly map to CSS. "This page uses figure-ground reversal at the climax" is a compositional idea that produces: inverted background colors, reversed typography emphasis, structural border changes. Gestalt principles are already implicit in good composition; making them explicit as compositional ideas is a broadening that preserves structural mapping.

### 4.5 Rhetoric (Communication Theory)

Classical rhetoric structures: chiasmus (A-B-B-A), antithesis (opposition of ideas), climax (ascending importance), anaphora (repeated beginnings), epistrophe (repeated endings). These map to page structure directly. A chiastic page structure (introduction mirrors conclusion, second section mirrors penultimate) is a compositional idea that produces symmetrical zone architecture, mirrored backgrounds, inverted density patterns.

**Relevance to Phase 3:** Rhetorical structures are compositional ideas that emerge from the content's argumentative structure rather than from external domains. They're especially relevant for prose-dominant content -- the content's own rhetoric suggests the page's compositional rhetoric.

---

## 5. Synthesis: A Broadened Phase 3 Specification

### 5.1 What Changes

| Element | Current | Broadened | Risk Level |
|---------|---------|-----------|------------|
| Search query | "What real-world domain..." | "What compositional idea resolves the opposition..." | LOW -- preserves constraint structure |
| Domain search territory | 10 domain categories | Compositional idea space (6 categories: spatial, temporal, material, behavioral, relational, experiential) | MEDIUM -- broader but potentially vaguer |
| Incompatible domain families | 5 domain families | Incompatible compositional qualities | LOW -- same information, different framing |
| Interpretive distance gate | Domain-to-domain distance | Idea-to-content distance | LOW -- same principle |
| Isomorphism table | metaphor property -> content -> CSS | compositional property -> content -> CSS | MEDIUM -- non-domains may produce sparser tables |
| Isomorphism threshold | 6+ deep, 2-3 thin | 5+ deep, 3-4 moderate, 0-2 thin | MEDIUM -- recalibrated for non-domain ideas |
| Cultural consideration | Physics-grounded > culture-grounded | Removed or replaced with universality heuristic | LOW |

### 5.2 What Stays

- Structural property extraction (Steps 3.1, 3.2) -- unchanged
- Structural overlap (Step 3.3) -- unchanged
- Search heuristics -- generalized language but same logic
- Candidate evaluation criteria -- generalized but same structure
- Execution risk questions -- unchanged
- Binary rejection checks -- R1 reframed, R2-R6 unchanged
- Metaphor Commitment Gate (3.5) -- minor reframing
- Failure modes -- unchanged
- Creative check (3.5E) -- unchanged

### 5.3 What's Added

**A. Compositional Actionability Gate (new, placed after idea generation)**
Before committing, test: "For each of the 6 CSS channels (background, border, typography, spacing, layout, accent), does this compositional idea suggest a SPECIFIC decision?" If it suggests decisions in 4+ channels, it's actionable. If fewer than 4, the idea is too vague -- either make it more concrete or search for a domain metaphor that carries the same compositional intent.

**B. Physics Articulation Requirement (new, for non-domain ideas)**
Domain metaphors come with free physics (strata obey gravity, pressure increases with depth). Non-domain ideas must articulate their own physics: "What are the rules of this compositional world? How do the idea's properties constrain each other?" If the physics can't be articulated in 3-5 sentences, the idea is too abstract.

**C. Generativity Test (new, strengthens interpretive distance)**
"Does this compositional idea suggest CSS decisions I wouldn't have made otherwise?" If the idea produces only obvious decisions (darken backgrounds, tighten spacing), it's insufficiently generative. The idea should produce at least one SURPRISING CSS decision -- something the designer wouldn't have chosen without the idea's guidance.

### 5.4 Recommendation

**Broaden Phase 3 but add compensating structure.** The broadening removes artificial channeling toward domain nouns, which is good -- the pipeline should be able to produce "this page argues with itself" when that's the best compositional idea for the content. But the broadening must add:

1. **The Actionability Gate** -- catches vague ideas before they contaminate Phase 4
2. **The Physics Articulation** -- forces non-domain ideas to earn the structural depth that domains get for free
3. **The Generativity Test** -- ensures broadening doesn't produce obvious, flat compositional direction

Without these three additions, broadening Phase 3 risks producing the worst of both worlds: the creative freedom to generate vague ideas without the structural discipline to make them actionable.

The broadened Phase 3 should be **type-blind in evaluation, type-aware in generation.** The search can explore domains, dynamics, behaviors, relationships, experiences, and unnamed forms. But the evaluation criteria (structural mapping richness, actionability, generativity, interpretive distance) should apply identically regardless of idea type. A domain that produces 3 thin mappings should lose to a dynamic that produces 5 rich ones. The current implicit advantage of domains (they produce richer mappings because they have physical properties) should be made explicit as an evaluation criterion, not as a category preference.

---

## 6. Open Questions for Synthesis

1. **Does Phase 4 need parallel modification?** Phase 4's 5-category property extraction (Step 4.1) and density patterns are domain-metaphor-shaped. If Phase 3 is broadened, Phase 4's property extraction needs to accommodate non-domain ideas. This is Task #5's territory.

2. **Should the Conviction Brief change?** The "WORLD-DESCRIPTION" section (Phase 4.5, Section 1) currently describes a world the builder inhabits. For non-domain ideas, the "world" framing may not fit. "This page argues with itself" doesn't describe a world -- it describes a behavior. Should the section be reframed as "COMPOSITIONAL IDENTITY" to accommodate both?

3. **What happens to case study organization?** Case studies are currently indexed by domain metaphor. If non-domain ideas become first-class, the case study index needs a secondary classification by compositional type (domain, dynamic, behavioral, relational, experiential).

4. **Is this change worth the risk?** The strongest argument FOR broadening: some content produces genuine tensions that don't naturally collapse into domain metaphors. The current Phase 3 forces those tensions through domain search, which may produce a metaphor that's structurally adequate but compositionally inauthentic. The strongest argument AGAINST: domain metaphors are a proven mechanism that produces rich structural mappings. Every alternative framework (Alexander, Laban, musical, Gestalt, rhetorical) has less empirical evidence within this pipeline's history. The safe path is broadening with strong compensating structure (the three new gates).
