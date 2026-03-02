# 11a: Compositional Questions Extracted from Validated Explorations

**Auditor:** question-extraction agent
**Date:** 2026-03-02
**Scope:** All 18 validated explorations (DD-001 through DD-006, OD-001 through OD-006, CD-001 through CD-006) + 6 AD explorations (AD-001 through AD-006) + research streams R1, R3, R5

---

## Summary

**Total compositional questions extracted:** 38
**Structural questions:** 29 (76%)
**Hybrid questions (structural + decorative):** 7 (18%)
**Decorative questions:** 2 (5%)

The overwhelming majority of questions driving validated explorations are about COMPOSITIONAL STRUCTURE -- spatial organization, information hierarchy, reading flow, and cognitive rhythm. This confirms the hypothesis: these explorations were driven by "what if..." questions about HOW to organize layout, not just what metaphor to apply.

---

## Master Table: Compositional Questions by Source

### Density Explorations (DD-001 through DD-006)

| Source File | Compositional Question | Visual Answer | Category |
|-------------|----------------------|---------------|----------|
| DD-001-breathing.html | "How does the PULSE pattern (alternating dense/sparse sections) perform as a documentation density strategy under locked soul tokens?" | Alternating `padding: 40px` (sparse) / `padding: 16px` (dense) sections. Background color oscillation between `--color-zone-sparse` and `--color-zone-dense`. | Structural |
| DD-002-gradient.html | "Can documentation pages use a CRESCENDO density model -- starting sparse and progressively tightening -- without sacrificing readability or soul compliance? Does gradual density increase improve onboarding and progressive learning experiences?" | Progressive padding reduction from 48px (top) to 16px (bottom). Font-size decreases, line-height compresses. Content-per-viewport increases section by section. | Structural |
| DD-003-islands.html | "Can isolated high-density clusters floating within a low-density 'sparse ocean' create effective reference documentation? Does surrounding calm space amplify the perceived density of concentrated content clusters?" | Self-contained content "islands" (SQL, NoSQL, Key-Value, Graph) with `padding: 24px`, separated by 48-64px "ocean" gaps. Archipelago 2-column grid for related mini-islands. Varying horizontal offsets (left/right/center) for visual rhythm. | Structural |
| DD-004-layers.html | "Can layered information strata provide distinct expert and novice reading paths through the same content?" | Geological layer model with progressive depth: surface layer (sparse, wide margins) through bedrock layer (dense, tight spacing). 4px/3px/2px/1px border-weight gradient encoding depth/importance. | Structural |
| DD-005-rivers.html | "Can rhythmic flow patterns -- where information narrows and widens like river channels -- optimize comparison and decision-flow content?" | Tidal density channels with width modulation: narrow sections (high-density analysis) alternating with wide sections (low-density synthesis). Dual R3 findings (Tidal + Musical) creating layered rhythmic structure. | Structural |
| DD-006-fractal.html | "Can density rhythm be self-similar across all four structural scales (page, section, component, character) -- and if so, what implementation constraints does that create for every future exploration?" | Dense/sparse rhythm replicated at 4 scales: PAGE (section alternation), SECTION (intro/detail/summary), COMPONENT (callout label sparse / body dense), CHARACTER (code comments sparse / code logic dense). This became the meta-pattern DD-F-006 constraining all subsequent work. | Structural |

### Organizational Explorations (OD-001 through OD-006)

| Source File | Compositional Question | Visual Answer | Category |
|-------------|----------------------|---------------|----------|
| OD-001-conversational.html | "What if documentation was organized as a conversation?" | Q&A dialogue pattern where question/answer alternation IS the PULSE density rhythm. Questions styled differently from answers (width variation creates TIDAL). Socratic progressive narrowing: broad Q -> narrow Q -> specific Q -> answer. | Structural |
| OD-002-narrative.html | "What if documentation was organized as a narrative arc?" | 5-act Freytag structure (setup/rising/climax/falling/resolution). Setup = sparse, rising action = medium, climax = dense, falling action = settling, resolution = exhale. The narrative arc IS the CRESCENDO density pattern. Tension meter as scroll position indicator. | Structural |
| OD-003-task-based.html | "What if documentation was organized around discrete tasks -- self-contained procedural clusters -- rather than linear narrative flow?" | Task "islands" as collapsible `<details>` elements. Dark header as archipelago map with complexity-coded tiles and dependency lines. Progressive complexity gradient (3-step beginner -> 4-step advanced). 4-level spacing hierarchy (micro 4px / step 8px / island 16-24px / sea 80px+). | Structural |
| OD-004-confidence.html | "What if documentation was organized by confidence level -- from established facts to open questions -- creating natural geological stratification where density correlates inversely with confidence?" | 4-stratum vertical structure (Established/Probable/Speculative/Open). Border-weight gradient: 4px (established) -> 3px (probable) -> 2px (speculative) -> 1px (open). Spacing compression: certain = sparse (40px), uncertain = dense (16px). Stratum boundary markers (48px + 3px rule + label). | Structural |
| OD-005-spatial.html | "What if documentation was organized spatially -- as a hub-and-spoke map where users navigate between territory zones -- rather than linearly?" | Hub overview (sparse, one viewport) with spoke detail sections (dense, scrollable). WAVE oscillation: hub(sparse) -> spoke(dense) -> hub return(sparse). CSS Grid 7-column magazine layout. Square tiles for territory navigation. Breadcrumb separators with triangle markers. | Structural |
| OD-006-creative.html | "What if the organizational pattern and the density pattern are not two layers but ONE phenomenon? What if the way you organize content IS the density -- and the emergent proof is a page that documents itself?" | 6 sections each using a different organizational mode, each generating its OWN density rhythm. Fractal annotation layer (sidebar labels identifying fractal scale). Recursive TOC with serif/sans/mono cascade. Visual index grid. Drop caps at section openings. Scroll witness progress tracking. Dual Lens toggle (Why/How). | Hybrid |

### Axis Explorations (AD-001 through AD-006)

| Source File | Compositional Question | Visual Answer | Category |
|-------------|----------------------|---------------|----------|
| AD-001-z-pattern.html | "Does Z-Pattern axis geometry serve or contradict PULSE+TIDAL density? Can diagonal sweep create a temporal equivalence where one Z-cycle equals one PULSE beat?" | Diagonal reading flow through Q&A content where one Z-sweep cycle equals one PULSE beat. Temporal equivalence mechanism (AD-F-003): eye-path duration maps to density alternation. | Structural |
| AD-002-f-pattern.html | "Does F-Pattern axis geometry serve or contradict CRESCENDO density? Can the F-degradation create a proportional equivalence where scan reduction IS density compression?" | Left-anchored scanning geometry where F-degradation (full scan -> partial scan -> vertical descent) IS CRESCENDO compression. Proportional equivalence mechanism (AD-F-008): scan reduction = density compression. | Structural |
| AD-003-bento-grid.html | "Does bento grid axis geometry serve or contradict ISLANDS density? Can rigid grid structure CONTAIN islands rather than fight them? Does cell size hierarchy create a proportional equivalence mechanism?" | Fixed rectangular grid where cell SIZE creates hierarchy (2x2 = anchor, 2x1 = secondary, 1x1 = tertiary). Soul constraint (sharp edges, border-radius: 0) makes size difference MORE visible. Grid cells as self-contained content islands. | Structural |
| AD-004-spiral.html | "Can a spiral be geological? Does angular spiral geometry serve or contradict GEOLOGICAL density's horizontal stratification? Is the proportional equivalence mechanism (golden ratio nesting) a 3rd way the 3-way unification manifests?" | Angular spiral approximation (forced by border-radius: 0) creates nested rectangles with right-angle boundaries that ARE geological strata. Golden-ratio nesting provides proportional equivalence. | Hybrid |
| AD-005-choreography.html | "Does choreography (hub-spoke directional) axis geometry serve or contradict WAVE+ISLANDS density rhythm? Is direction change a 4th equivalence mechanism?" | Hub-spoke directional arrangement of reader attention through static content structure (NOT CSS animation). Direction change as a density signal: each direction shift coincides with a density phase change. | Structural |
| AD-006-compound.html | "Does the triple equivalence hold at compound scale? Is there a meta-equivalence unifying all 4 mechanisms? Is the DD-F-006 fractal 5-scale model complete?" | All axis patterns coexisting in a single page. Meta-equivalence (AD-F-023 ATTENTION TOPOLOGY) unifying temporal, spatial, proportional, and gravitational mechanisms. Fractal at 5 scales (navigation/page/section/component/character). | Structural |

### Combination Explorations (CD-001 through CD-006)

| Source File | Compositional Question | Visual Answer | Category |
|-------------|----------------------|---------------|----------|
| CD-001-reasoning-inside-code.html | "Can a page with 3 heavy component types (Code, Reasoning, Core Abstraction) honor the velocity rule by interleaving FAST callouts, while the CRESCENDO density builds from sparse to dense, and F-Pattern transitions to Bento Grid at the peak via a BRIDGE element?" | F-Pattern vertical descent spine with Bento Grid containers at CRESCENDO peak. BRIDGE transition (prose paragraph) connecting two axis patterns. FAST callouts (velocity < 3s) interleaved between SLOW heavy components (velocity > 10s). | Structural |
| CD-002-task-containing-decision.html | "Can a Decision Matrix embed within a task-based workflow as a natural PULSE sparse phase, using BREATHING transition to bridge Z-Pattern task clusters to Spiral confidence strata?" | Decision Matrix as a PULSE "pause" (sparse phase = space for thought) within dense task flow. BREATHING transition (48px+ gap) bridging Z-Pattern (task sections) to Spiral (confidence strata). Z-to-Spiral transition grammar validated. | Structural |
| CD-003-file-tree-with-callouts.html | "Can File Tree and Callout components share left-anchored DNA without creating visual monotony? Does ISLANDS density survive when both bento grid cells AND hub-spoke choreography sections contain advisory callouts? Does the SMOOTH transition preserve reading flow across two axis patterns?" | File Tree and Callouts sharing 4px left-border DNA (H3 family cohesion) without monotony through semantic color differentiation. ISLANDS density in bento cells. SMOOTH transition (same spatial mechanism) from bento to choreography. | Hybrid |
| CD-004-essence-as-background.html | "Can Essence callouts pervade a page like a background hum through regular distribution, italic serif typography, and width variation alone -- without any physical depth technique violating the ANTI-PHYSICAL identity?" | Essence callouts distributed at regular intervals (frequency creates ambient presence). Italic serif typography + TIDAL width variation (narrow Essence callouts vs wide code blocks) = "background voice" without opacity, z-index, blur, or gradients. | Hybrid |
| CD-005-multi-axis-transition.html | "Can 3 axis patterns coexist sequentially on a single page with proper transition grammar (AD-F-025), where each section commits to ONE pattern (AD-F-024), WAVE density oscillates between MEDIUM/HIGH/MEDIUM-HIGH, and transitions use SMOOTH and BRIDGE types?" | Z-Pattern (overview, diagonal sweeps) -> SMOOTH transition -> F-Pattern (deep content, left-spine progressive disclosure) -> BRIDGE transition -> Bento Grid (reference, grid cells as islands). WAVE density oscillating across all three axis patterns. | Structural |
| CD-006-pilot-migration.html | "Can a page about building pages with this system demonstrate that the system works? Is the 5-stage pipeline sufficient for real documentation migration?" | ALL 11 components, ALL 5 axis patterns, ALL transition grammar types (2 Smooth, 3 Bridge, 2 Breathing). Fractal density at 5 scales. The page IS the proof -- real content ("Building Your First KortAI Documentation Page") built with the system being documented. Meta-referential: documentation about documentation. | Structural |

### Research Streams (Originating Questions)

| Source File | Compositional Question | Visual Answer | Category |
|-------------|----------------------|---------------|----------|
| R1-DOCUMENTATION-PATTERNS.md | "What documentation design patterns do premium sites use for density rhythm, whitespace, typography hierarchy, and component presentation -- and how should KortAI's showcase adapt them?" | 28 findings extracted from Stripe, Vercel, Linear, Notion, Mintlify, Radix, Apple HIG, Tailwind. Key structural answers: R1-001 (density rhythm oscillation), R1-002 (38% whitespace retention), R1-003 (one concept per viewport), R1-004 (three-column doctrine), R1-016 (typography-first hierarchy: size > weight > color). | Structural |
| R3-DENSITY-DIMENSIONS.md | "What dimensions of density exist beyond spatial arrangement, and how can each be independently manipulated to create rhythm, pacing, and cognitive comfort?" | 6-dimensional density model: temporal (scroll velocity), depth (layered disclosure), semantic (meaning compression), cognitive (processing load), interaction (engagement points), spatial (element proximity). 51 findings. Key: R3-023 -> DD-F-006 fractal chain. | Structural |
| R5-COMBINATION-THEORY.md | "How should KortAI's 11 documentation components combine -- what creates harmony, what creates productive tension, what sequencing and grouping rules should govern component choreography?" | 39 findings covering: harmony rules (family cohesion H1-H3), tension rules (velocity T1-T3, temperature flow), sequence rules (setup-payoff S1-S5), grouping rules (proximity G1-G3), nesting rules (stack don't nest N1-N4), anti-patterns (callout cacophony A1, code wall A2). | Hybrid |

### Mechanism Catalog (Implicit Structural Questions)

| Source File | Compositional Question | Visual Answer | Category |
|-------------|----------------------|---------------|----------|
| grammar/mechanisms.md | "How does border thickness encode hierarchy?" | Border-Weight Gradient: 4px/3px/1px encoding hierarchy in PROGRESSIVE (gradient across levels) or DISCRETE (categorical) mode. Origin: OD-004. | Hybrid |
| grammar/mechanisms.md | "How does the same density rhythm appear at every structural scale?" | Dense/Sparse Alternation (Mechanism #5): INHALE/EXHALE rhythm through padding changes. Used 18/18 explorations. Universal. | Structural |
| grammar/mechanisms.md | "How do you create depth perception without shadows in an anti-physical design system?" | Solid Offset Depth (Mechanism #3): `::after` pseudo-element at 4px offset. The ONLY permitted depth technique. Replaces box-shadow. Origin: OD-001. | Decorative |
| grammar/mechanisms.md | "How do you signal transitions between content zones without heavy visual interruption?" | 3-type Transition Grammar: SMOOTH (padding shift only), BRIDGE (3px border + optional background), BREATHING (full background shift + rule). Selection rule: same domain = SMOOTH, different domain = BRIDGE, different phase = BREATHING. | Structural |

---

## Analysis: Structural vs Decorative Distribution

### The compositional questions are overwhelmingly STRUCTURAL

The explorations were driven by questions about:

1. **Information architecture** -- how to organize content spatially (confidence strata, task clusters, hub-spoke, narrative arc)
2. **Reading flow** -- how the eye moves through the page (Z-pattern, F-pattern, spiral, choreography)
3. **Density rhythm** -- how information intensity varies across the page (PULSE, CRESCENDO, TIDAL, GEOLOGICAL, ISLANDS, FRACTAL)
4. **Transition grammar** -- how sections connect to each other (SMOOTH, BRIDGE, BREATHING)
5. **Scale self-similarity** -- how the same rhythm appears at page/section/component/character levels (DD-F-006 fractal)
6. **Equivalence mechanisms** -- how organization, density, and axis patterns unify (temporal, proportional, spatial, gravitational)

### Decorative concerns are SECONDARY and CONSTRAINED

Only 2 questions are primarily decorative:
- Solid Offset Depth (Mechanism #3) -- how to create depth perception without shadows
- (None of the exploration-level questions are purely decorative)

The 7 hybrid questions involve both structural AND treatment concerns:
- OD-006 (self-referential structure + creative techniques like drop caps, dual lens)
- AD-004 (can angular geometry serve geological metaphor + golden ratio as visual pattern)
- CD-003 (left-anchored DNA sharing + visual monotony avoidance)
- CD-004 (ambient presence through frequency + italic serif typography treatment)
- R5 (component combination rules + harmony/tension visual treatment)
- Border-weight gradient (hierarchy encoding + specific thickness values)

### Key Finding: The Questions ARE the Layout Decisions

The most important insight: the compositional questions don't just INSPIRE layouts -- they DICTATE them. Each question constrains the solution space:

- "What if organized by confidence level?" -> MUST have discrete strata, MUST have boundary markers, MUST encode certainty visually
- "What if organized as a conversation?" -> MUST alternate Q/A, MUST create PULSE rhythm, MUST differentiate speaker roles
- "Can 3 axis patterns coexist?" -> MUST have transition grammar, MUST commit to one pattern per section, MUST oscillate density

The question IS the structural specification. The metaphor IS the layout algorithm.

---

## Propagation Assessment: Did These Questions Reach the Pipeline?

### What the case studies preserve

The case studies in `compositional-core/case-studies/` DO preserve:
- The tension derivation process (Phase 1-2-3 walkthrough)
- Which metaphor candidates were considered and rejected
- Which mechanisms were applied and WHY
- The divergence verification framework

### What the case studies DO NOT preserve

The case studies DO NOT preserve:
- The original "what if..." compositional question as a first-class artifact
- The STRUCTURAL SPECIFICATION implied by the question (what the question constrains)
- The relationship between the question and the visual answer (question -> CSS technique mapping)

### What the mechanism catalog preserves

The mechanism catalog in `grammar/mechanisms.md` preserves:
- The reusable CSS techniques (border-weight gradient, spacing compression, etc.)
- Usage frequency across explorations
- Origin exploration

### What the mechanism catalog DOES NOT preserve

The mechanism catalog DOES NOT preserve:
- WHY each mechanism was invented (which compositional question demanded it)
- The question-to-mechanism chain (OD-004's confidence question -> border-weight gradient)
- The structural constraints the originating question imposed

### Gap: The Compositional Question Layer Is Missing

Between the metaphor (in case studies) and the mechanisms (in grammar/), there is a MISSING LAYER: the compositional question. This layer would connect:

```
Content tensions -> COMPOSITIONAL QUESTION -> Structural constraints -> Mechanism selection -> CSS implementation
```

Currently the pipeline has:
```
Content tensions -> Metaphor -> Mechanism selection -> CSS implementation
```

The compositional question (the structural "what if...") is collapsed into the metaphor step, losing its independent specification power.
