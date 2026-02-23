# 51 — Beyond-Eight Independence Analysis: Dependency Graph and Irreducible Set

**Author:** beyond-eight-integrator (Opus 4.6)
**Date:** 2026-02-22
**Task:** Determine which of the 40 beyond-eight concepts are truly independent vs manifestations of one underlying phenomenon. Find the irreducible set. Identify what's missing.

**Source:** `ephemeral/pages/_comparison-screenshots/28-beyond-eight-concepts.md` (781 lines, 40 concepts in 11 categories)

---

## 1. THE DEPENDENCY GRAPH

### Level 0: Root Phenomena (Generate Everything Below)

These are the deepest causes. Everything else is either a manifestation, a measurement, or a consequence.

```
ROOT 1: BUILDER COGNITIVE MODE (A-01)
  The builder is either COMPOSING, PLANNING, COMPLYING, or REPAIRING.
  This single state variable determines the quality ceiling.

ROOT 2: CONTENT-FORM COUPLING (B-01)
  Content is a co-author. Content structural heterogeneity (B-02)
  determines how many mechanisms CAN be meaningfully deployed.

ROOT 3: COMPRESSION PHYSICS (E-03)
  Intelligence degrades through indirection boundaries.
  quality = f(model_capability - instruction_interference)
```

### Level 1: Direct Consequences of Root Phenomena

Each of these is determined by one or more roots:

```
From ROOT 1 (Builder Cognitive Mode):
├── A-02 Builder Model Choice
│   WHY: Model choice DETERMINES available cognitive modes.
│   Opus can COMPOSE. Sonnet can COMPLY or PLAN but rarely COMPOSE.
│   A-02 is not independent -- it's a precondition for A-01.
│   DEPENDENCY: A-02 → A-01 (model enables mode)
│
├── A-03 Creative Authority Clause
│   WHY: Creative authority shifts builder from COMPLYING → COMPOSING.
│   It is not a concept -- it is a MODE TRIGGER for A-01.
│   DEPENDENCY: A-03 → A-01 (framing triggers mode)
│
├── A-04 Single Builder Ownership
│   WHY: Single ownership preserves COMPOSING mode across the build.
│   Multi-agent fragmentation forces COMPLYING mode on downstream agents.
│   DEPENDENCY: A-04 → A-01 (architecture preserves mode)
│
├── E-04 Dispositional Recipe
│   WHY: A dispositional recipe tells the builder HOW TO BE.
│   It is the ultimate mode trigger -- it creates COMPOSING mode directly.
│   DEPENDENCY: E-04 → A-01 (recipe type determines mode)
│
├── J-01 Compositional Fluency
│   WHY: Compositional fluency ONLY emerges in COMPOSING mode.
│   A builder in COMPLYING mode deploys mechanisms independently
│   (vocabulary fluency). Only COMPOSING mode produces interdependence.
│   DEPENDENCY: A-01 → J-01 (mode enables fluency)
│
├── J-02 Self-Authored Artifacts
│   WHY: Builders only create transition tables and fractal echo docs
│   when in COMPOSING mode. COMPLYING builders execute checklists.
│   DEPENDENCY: A-01 → J-02 (mode enables self-authoring)
│
├── F-01 Designed Moments
│   WHY: Designed moments are peaks within a competent baseline.
│   They emerge from COMPOSING mode -- a builder thinking "what would
│   make this section special?" COMPLYING builders produce uniform output.
│   DEPENDENCY: A-01 → F-01 (mode enables peaks)
│
├── F-02 Terminal Craft
│   WHY: Last-5% detail quality only happens when the builder CARES.
│   COMPOSING mode = caring. COMPLYING mode = checking.
│   DEPENDENCY: A-01 → F-02 (mode enables caring)
│
├── C-02 Atmospheric Conviction
│   WHY: Confident intention at every zoom requires a builder who is
│   composing with intention. COMPLYING produces correct but lifeless output.
│   DEPENDENCY: A-01 → C-02 (mode enables intention)
│
└── K-07 Fix Cycle Degradation
    WHY: The fix cycle degrades quality because it shifts the builder
    from COMPOSING mode (first pass) to REPAIRING mode (fix pass).
    This is a MODE TRANSITION problem, not an independent concept.
    DEPENDENCY: A-01 → K-07 (mode transition = degradation)


From ROOT 2 (Content-Form Coupling):
├── B-02 Content Structural Heterogeneity
│   WHY: This is a SUB-PROPERTY of B-01. Content heterogeneity is
│   one of the 7 properties that predict higher PA-05.
│   DEPENDENCY: B-02 ⊂ B-01 (subset)
│
├── C-01 Pervading Metaphor
│   WHY: The pervading metaphor emerges from content-form analysis.
│   The TC pipeline derives the metaphor FROM the content.
│   Without content-form coupling, there is no metaphor to pervade.
│   DEPENDENCY: B-01 → C-01 (content enables metaphor)
│
├── G-01 Self-Reference
│   WHY: "The page knows what it is" requires the form to respond
│   to the content's meaning. Self-reference IS content-form coupling
│   at its most extreme -- form IS content.
│   DEPENDENCY: G-01 ⊂ B-01 (extreme case)
│
├── G-02 Pedagogical Sequencing
│   WHY: A cognitive arc requires understanding the content's
│   learning progression. This is content-driven.
│   DEPENDENCY: B-01 → G-02 (content structure drives sequence)
│
└── G-04 Cognitive Transition
    WHY: "Now that we understand X, we can examine Y" is bridge
    prose that explains content relationships. Content-driven.
    DEPENDENCY: B-01 → G-04 (content relationships drive transitions)


From ROOT 3 (Compression Physics):
├── E-01 Guardrail-to-Playbook Ratio
│   WHY: The 7.9:1 ratio is a SYMPTOM of compression physics.
│   Complex concepts compress into prohibitions (guardrails) because
│   prohibitions are simpler to encode than constructive instructions.
│   DEPENDENCY: E-03 → E-01 (compression favors prohibitions)
│
├── E-02 FORMAT > VOLUME
│   WHY: CSS-as-intelligence surviving at 2x the rate of prose
│   IS compression physics. Code has 1:1 compression; prose has
│   high-loss compression. This is a measurement of E-03.
│   DEPENDENCY: E-02 ⊂ E-03 (measurement of compression)
│
├── H-02 Builder Visibility Cap
│   WHY: The 75-line cap is a consequence of compression.
│   963 lines → 75 lines = 92% compression at the final stage.
│   The cap is not designed -- it emerges from pipeline architecture.
│   DEPENDENCY: E-03 → H-02 (compression produces cap)
│
├── K-02 Interference Model
│   WHY: quality = f(capability - interference) is the MATHEMATICAL
│   FORMULATION of compression physics. E-03 is the phenomenon;
│   K-02 is the equation. They are the same thing.
│   DEPENDENCY: K-02 ≡ E-03 (equivalence)
│
├── K-03 Continuous Zoom Document
│   WHY: The brief-as-zoom-document is a SOLUTION to compression
│   physics. It minimizes compression by making one document do
│   the work of two (telescope + microscope in one zoom).
│   DEPENDENCY: E-03 → K-03 (compression problem → zoom solution)
│
└── D-01 Quality Suppressors (partial)
    WHY: Many suppressors (checklist format, prohibition overload,
    inverted routing, builder cap) are SYMPTOMS of compression.
    The suppressors are not independent -- they are downstream effects.
    DEPENDENCY: E-03 → D-01 (compression creates suppressors)
```

### Level 2: Derived Concepts (Consequences of Level 1)

```
From J-01 (Compositional Fluency):
├── F-03 Horizontal Rhythm
│   WHY: Width variation requires compositional awareness -- knowing
│   that the page needs visual variety. Vocabulary fluency produces
│   uniform single-column. Compositional fluency produces grids.
│   DEPENDENCY: J-01 → F-03 (fluency enables rhythm)
│
├── I-01 Richness Formula
│   WHY: richness = variety x intentionality x perceptibility is a
│   MEASUREMENT of compositional fluency. It measures the output
│   quality of a builder in COMPOSING mode deploying the 8 core CI
│   concepts with interdependence.
│   DEPENDENCY: I-01 measures (A-01 + J-01) (measurement)
│
├── I-02 Component Variety
│   WHY: 11 component types vs 1 is a CONCRETE INDICATOR of
│   compositional fluency. A fluent builder invents components
│   for the content. A compliant builder reuses one template.
│   DEPENDENCY: J-01 → I-02 (fluency enables variety)
│
└── I-03 Layout Diversity
    WHY: 4 grid patterns vs 0 is another concrete indicator.
    Same dependency as I-02.
    DEPENDENCY: J-01 → I-03 (fluency enables layout variety)


From C-01 (Pervading Metaphor):
├── G-03 Bookending
│   WHY: Opening/closing echo is a TECHNIQUE for metaphor coherence.
│   The footer echoes the header because both serve the metaphor.
│   Without a pervading metaphor, bookending is arbitrary symmetry.
│   DEPENDENCY: C-01 → G-03 (metaphor motivates bookending)
│
├── G-05 Deliberate Absence
│   WHY: Silence zones are meaningful only when they contrast with
│   active zones. The metaphor determines WHERE silence belongs.
│   Without metaphor, silence is just void.
│   DEPENDENCY: C-01 → G-05 (metaphor defines where silence belongs)
│
└── F-04 Grand Spatial Pause
    WHY: Same as G-05 but at larger scale. A grand pause communicates
    "this page can afford silence" -- but only if the surrounding
    sections have established a metaphor that justifies the pause.
    DEPENDENCY: C-01 → F-04 (metaphor justifies pause)


From D-01 (Quality Suppressors):
├── D-02 4 Suppression Chains
│   WHY: Chains are META-PATTERNS in how suppressors interact.
│   They are not independent -- they are combinatorial effects of D-01.
│   DEPENDENCY: D-02 ⊂ D-01 (combinations of suppressors)
│
├── H-03 Playbook Phase
│   WHY: The missing playbook phase is the SOLUTION to suppressor #1
│   (checklist format) and suppressor #2 (prohibition overload).
│   It is a fix for D-01, not an independent concept.
│   DEPENDENCY: D-01 → H-03 (suppressor → fix)
│
└── H-04 Builder Simulation
    WHY: Builder simulation is the SOLUTION to suppressor #3
    (inverted quality routing) and #4 (sub-perceptual emphasis).
    Testing on a cold agent catches what routing misses.
    DEPENDENCY: D-01 → H-04 (suppressor → fix)
```

### Level 3: Infrastructure Concepts (Pipeline-Specific)

```
H-01 Inter-Agent Communication
  DEPENDENCY: Partially independent. Communication enables A-01
  (forces articulation → shifts toward COMPOSING) but also serves
  quality independently (catches errors regardless of mode).
  STATUS: PARTIALLY INDEPENDENT

H-05 Gate Architecture
  DEPENDENCY: Partially from E-03 (programmatic gates are a compression
  product -- they measure what can be measured, not what matters).
  Also partially independent (perceptual vs structural is its own axis).
  STATUS: PARTIALLY INDEPENDENT

G-06 Meta-Annotation
  DEPENDENCY: Independent -- ARIA labels and section-meta serve
  accessibility and inspection, not composition. They are orthogonal
  to all three roots.
  STATUS: INDEPENDENT

K-04 ALWAYS FLAGSHIP
  DEPENDENCY: A SIMPLIFICATION of the pipeline that removes tier
  routing. This is a process decision, not a quality concept.
  STATUS: PROCESS DECISION (not a concept)

K-05 Beauty Definition
  DEPENDENCY: This is the OUTCOME that all concepts serve.
  "Confident intention at every scale" = A-01 (COMPOSING) +
  B-01 (content-form coupling) + J-01 (compositional fluency).
  Beauty is not a concept -- it is the TARGET.
  STATUS: OUTCOME (not a concept)

K-06 Stack Progression
  DEPENDENCY: A META-OBSERVATION about the 8 core CI concepts.
  Not about the beyond-8 at all. It says the 8 are a dependency
  chain. This is documentation of structure, not a concept.
  STATUS: META-OBSERVATION (not a concept)
```

---

## 2. THE COLLAPSE: 11 Categories → 5 Phenomena

### Which categories collapse?

| Original Category | Collapses Into | Reasoning |
|---|---|---|
| **A: Builder Disposition** (4 concepts) | ROOT 1: Builder Cognitive Mode | A-02, A-03, A-04 are all PRECONDITIONS or TRIGGERS for A-01 |
| **B: Content-Form** (2 concepts) | ROOT 2: Content-Form Coupling | B-02 is a subset of B-01 |
| **C: Atmosphere** (2 concepts) | Split: C-01 → ROOT 2 (content-driven); C-02 → ROOT 1 (mode-driven) | Metaphor is content-driven; conviction is mode-driven |
| **D: Suppressors** (2 concepts) | Partially ROOT 3 (compression creates suppressors) + ROOT 1 (suppressors create COMPLYING mode) | D-02 is subset of D-01. D-01 is BRIDGE between roots. |
| **E: Instruction** (4 concepts) | ROOT 3: Compression Physics | E-01, E-02, E-04 are all manifestations of compression. K-02 is equivalent to E-03. |
| **F: Experiential** (4 concepts) | Split: F-01, F-02 → ROOT 1 (mode-driven); F-03 → J-01 (fluency-driven); F-04 → C-01 (metaphor-driven) | Experiential qualities have different causes |
| **G: Intentionality** (6 concepts) | Split: G-01, G-02, G-04 → ROOT 2 (content-driven); G-03, G-05 → C-01 (metaphor-driven); G-06 → independent | Intentionality dimensions have mixed causes |
| **H: Process** (5 concepts) | Split: H-02 → ROOT 3; H-03, H-04 → D-01 fixes; H-01, H-05 → partially independent | Process concepts are mostly derived |
| **I: Measurement** (3 concepts) | Measurements of (A-01 + J-01) | I-01/I-02/I-03 measure compositional fluency output |
| **J: Fluency** (2 concepts) | J-01 derives from ROOT 1; J-02 derives from J-01 | Compositional fluency requires COMPOSING mode |
| **K: Meta** (7 concepts) | Split: K-01 frames ROOT 1; K-02 ≡ E-03 (ROOT 3); K-03 fixes ROOT 3; K-04 is process; K-05 is outcome; K-06 is meta-obs; K-07 derives from ROOT 1 | Meta category is a grab-bag |

### The 5 Phenomena

After collapsing dependencies, the 40 concepts reduce to **5 irreducible phenomena**:

```
PHENOMENON 1: BUILDER COGNITIVE MODE
  (ROOT 1)
  What it is: The state variable (COMPOSING/PLANNING/COMPLYING/REPAIRING)
  that determines quality ceiling regardless of specification quality.

  Concepts it generates:
    A-01 (the mode itself), A-02 (model enables mode), A-03 (framing triggers
    mode), A-04 (architecture preserves mode), E-04 (recipe type determines
    mode), J-01 (mode enables fluency), J-02 (mode enables self-authoring),
    F-01 (mode enables peaks), F-02 (mode enables craft), C-02 (mode enables
    conviction), K-07 (mode transition = degradation)

  Count: 11 concepts are manifestations of Phenomenon 1

  The one sentence: "The builder's cognitive state determines quality
  ceiling more than any specification content."


PHENOMENON 2: CONTENT-FORM COUPLING
  (ROOT 2)
  What it is: Content is a co-author of the design. Content properties
  (heterogeneity, mode variety, code blocks, Q&A patterns) determine
  how many mechanisms can be meaningfully deployed and what metaphor
  can pervade the form.

  Concepts it generates:
    B-01 (coupling itself), B-02 (heterogeneity subset), C-01 (metaphor
    from content), G-01 (self-reference = extreme coupling), G-02
    (pedagogical sequence from content), G-04 (cognitive transitions from
    content relationships), G-03 (bookending from metaphor), G-05
    (deliberate absence from metaphor), F-04 (grand pause from metaphor)

  Count: 9 concepts are manifestations of Phenomenon 2

  The one sentence: "Content determines what mechanisms can meaningfully
  deploy and what metaphor can pervade the form."


PHENOMENON 3: COMPRESSION PHYSICS
  (ROOT 3)
  What it is: Intelligence degrades through indirection boundaries.
  Past a threshold, more instruction reduces quality by consuming
  working memory and triggering compliance mode. The interference
  model: quality = f(model_capability - instruction_interference).

  Concepts it generates:
    E-03 (compression cascade), K-02 (interference model = same thing),
    E-01 (guardrail-to-playbook ratio as compression symptom), E-02
    (format > volume as compression property), H-02 (builder cap from
    compression), K-03 (continuous zoom as compression solution)

  Count: 6 concepts are manifestations of Phenomenon 3

  The one sentence: "Intelligence degrades through indirection; past
  a threshold, more instruction reduces quality."


PHENOMENON 4: QUALITY SUPPRESSORS
  (BRIDGE between Roots 1 and 3)
  What it is: Specific pipeline configurations that prevent quality.
  Suppressors are not root causes -- they are the INTERFACE between
  compression physics (which creates them) and builder cognitive mode
  (which they damage). Removing suppressors has higher ROI than
  adding concepts.

  Concepts it generates:
    D-01 (14 suppressors), D-02 (4 chains as combinations), H-03
    (playbook phase as fix), H-04 (builder simulation as fix)

  Count: 4 concepts are manifestations of Phenomenon 4

  The one sentence: "Removing barriers to quality has higher ROI
  than adding specifications for quality."

  NOTE: Phenomenon 4 is arguably NOT independent -- it is the
  mechanism by which Phenomenon 3 damages Phenomenon 1. But it
  has its own operational identity (you can enumerate and remove
  suppressors without understanding compression physics or cognitive
  modes). So it survives as a separate phenomenon with an asterisk.


PHENOMENON 5: INDEPENDENT RESIDUALS
  What it is: Concepts that do not derive from any of the above.

  Concepts:
    H-01 (inter-agent communication -- partially independent)
    H-05 (gate architecture -- partially independent)
    G-06 (meta-annotation -- fully independent)

  Count: 3 concepts are residual

  The one sentence: "Communication, gate design, and annotation
  are process infrastructure orthogonal to quality phenomena."
```

### The Accounting

| Phenomenon | Concepts Generated | Count |
|---|---|---|
| 1: Builder Cognitive Mode | A-01, A-02, A-03, A-04, E-04, J-01, J-02, F-01, F-02, C-02, K-07 | 11 |
| 2: Content-Form Coupling | B-01, B-02, C-01, G-01, G-02, G-03, G-04, G-05, F-04 | 9 |
| 3: Compression Physics | E-03, K-02, E-01, E-02, H-02, K-03 | 6 |
| 4: Quality Suppressors | D-01, D-02, H-03, H-04 | 4 |
| 5: Independent Residuals | H-01, H-05, G-06 | 3 |
| Not concepts (outcomes/meta) | K-05 (beauty = outcome), K-04 (process decision), K-06 (meta-obs), I-01/I-02/I-03 (measurements), F-03 (derived from J-01) | 7 |
| **Total** | | **40** |

---

## 3. ARE A-01, E-04, AND K-01 ALL ONE THING?

The task description specifically asks whether A-01 (builder mode), E-04 (dispositional recipe), and K-01 (emergent vs producible) are aspects of ONE thing.

**Analysis:**

**A-01 (Builder Cognitive Mode):** The state variable. COMPOSING/COMPLYING/etc.

**E-04 (Dispositional Recipe):** A technique for INDUCING A-01 = COMPOSING. "Build as if every section is a room you want to spend time in." This is a MODE TRIGGER -- it causes A-01 to enter a specific state.

**K-01 (Emergent vs Producible):** The philosophical question of whether 4/4 is something you SPECIFY into existence or something that EMERGES from the right conditions.

**Are they one thing?** YES AND NO.

They are all manifestations of a single deeper question: **"Is quality a property of the AGENT or of the SPECIFICATION?"**

- A-01 says: quality depends on the agent's cognitive state
- E-04 says: the specification's job is to set the agent's state, not prescribe the output
- K-01 says: maybe quality can't be prescribed at all, only enabled

This deeper question could be called **THE AGENCY QUESTION**: where does design quality come from -- the instructions, or the builder? All three concepts answer "the builder" in different registers:
- A-01: empirical register (we observe 4 modes with different ceilings)
- E-04: practical register (we should instruct HOW TO BE, not WHAT TO DO)
- K-01: philosophical register (quality may be emergent, not producible)

**Verdict:** A-01, E-04, and K-01 are three facets of one phenomenon (Phenomenon 1). E-04 is the PRESCRIPTION for achieving A-01 = COMPOSING. K-01 is the PHILOSOPHICAL FRAMING of why A-01 matters more than specification content. They are not independent.

---

## 4. THE DEEP STRUCTURE BENEATH THE 40 CONCEPTS

### The Three Axes

The 5 phenomena can be further reduced to THREE fundamental axes:

```
AXIS 1: AGENT CAPABILITY
  "What can the builder do?"

  Phenomenon 1 (Builder Mode) + Phenomenon 4 (Suppressors) +
  Phenomenon 5 (Process Infrastructure)

  This axis concerns the AGENT: its model, its mode, what
  suppresses it, what enables it. It is INTERNAL to the
  builder's process.


AXIS 2: CONTENT AFFORDANCE
  "What does the content allow?"

  Phenomenon 2 (Content-Form Coupling)

  This axis concerns the INPUT: what the content enables,
  what metaphor it supports, how heterogeneous it is.
  It is EXTERNAL to the builder -- given, not chosen.


AXIS 3: SPECIFICATION PHYSICS
  "How much of the research survives to reach the builder?"

  Phenomenon 3 (Compression Physics)

  This axis concerns the MEDIUM: how intelligence degrades
  through indirection, how format affects survival, how
  volume affects interference. It is the CHANNEL between
  research and execution.
```

### The Quality Equation (Revised)

Report 28's quality equation was:
```
Quality = (Builder Skill × Content-Form Coupling × Compositional Metaphor) / Sum of Active Suppressors
```

The deep structure analysis revises this to:
```
Quality = Agent Capability × Content Affordance × Specification Fidelity
```

Where:
- **Agent Capability** = f(model_choice, cognitive_mode, suppressor_count)
  - Model choice: Opus >> Sonnet for COMPOSING
  - Cognitive mode: COMPOSING >> PLANNING >> COMPLYING >> REPAIRING
  - Suppressors: each active suppressor divides capability

- **Content Affordance** = f(structural_heterogeneity, mode_variety, metaphor_viability)
  - Heterogeneity: code + tables + prose + Q&A >> prose only
  - Mode variety: 4+ content modes >> 1 mode
  - Metaphor viability: content naturally suggests structural metaphor >> content is formless

- **Specification Fidelity** = f(format, volume, suppressor_avoidance)
  - Format: CSS > recipe > prose > checklist
  - Volume: inverted U -- too little = no calibration, too much = interference
  - Suppressor avoidance: brief designed to avoid all 14 suppressors

**Zero in any factor = zero quality** (just as Report 28's richness formula states). An Opus builder in COMPOSING mode with zero-suppressor brief but formless prose content will produce a competent but undistinguished page. Rich content with a checklist specification fed to Sonnet will produce flat compliance. And so on.

---

## 5. WHAT'S MISSING: Concepts Not Yet Named

### Missing Concept M-01: TEMPORAL COMPOSITION

The 40 concepts are all SPATIAL -- they concern what the page looks like at any moment. But pages are experienced TEMPORALLY (scrolling). No concept addresses:
- Scroll rhythm (acceleration/deceleration of visual density across scroll)
- Anticipation (visual hints of upcoming content changes)
- Memory (later elements echoing earlier elements across substantial scroll distance)
- Scroll pacing (how many viewport-heights between major visual events)

The conventions brief's "coherence arc" (Opening -> Building -> Climax -> Resolution) is temporal, but it is framed as a zone property, not a scroll property. A 4-zone page with zones at 25%/25%/25%/25% and one with zones at 10%/40%/40%/10% have the same zone architecture but fundamentally different temporal experiences.

**Why this matters:** Gas Town's Z3 (dense) is the longest zone by content volume. If Z3 is 50% of scroll height, the "climax" lasts too long and becomes monotonous. Temporal composition would address this.

### Missing Concept M-02: READER MODEL

No concept addresses WHO the reader is or what they already know. The page treats the reader as generic. But:
- A reader who knows Steve Yegge arrives differently than one who doesn't
- A reader coming from a Google search arrives differently than one from a curated link
- A reader on mobile has different spatial expectations than desktop
- A reader's scroll speed affects which visual details register

The "first 5 seconds" sequence in the beauty definition (K-05) touches this, but no concept addresses how the design should ADAPT to different reader entry points.

### Missing Concept M-03: EMOTIONAL ARC (distinct from density arc)

The density arc (sparse -> dense -> sparse) and the coherence arc (Opening -> Climax -> Resolution) are STRUCTURAL. But the EMOTIONAL arc -- how the reader FEELS as they scroll -- is not addressed. Emotions are not density:
- Surprise requires unexpected visual events (not predictable zone shifts)
- Delight requires craft exceeding expectations (not meeting them)
- Authority requires consistency before variation (not variation throughout)
- Closure requires the ending to feel EARNED (not just symmetric)

Gas Town's military metaphor carries an implicit emotional arc (dispatch urgency -> intelligence density -> deployment resolution), but this is accidental -- the TC pipeline derived it from content, not from emotional design.

### Missing Concept M-04: ANTI-PATTERN KNOWLEDGE

Report 28 has 14 quality suppressors (things to AVOID in the pipeline). But the builder has no concept of PAGE-LEVEL anti-patterns:
- The "beautiful book cover attached to blank pages" pattern (all interest in first 30%)
- The "wall of cards" pattern (same component type repeated 10+ times)
- The "footnote cemetery" pattern (bottom third becomes a dump of small text)
- The "header hero, body zero" pattern (elaborate header, bland content zones)
- The "grid desert" pattern (single-column throughout when content demands variety)

Prohibitions.md addresses CSS anti-patterns (no 2px borders, no rounded corners) but not COMPOSITIONAL anti-patterns (how mechanisms combine badly).

### Missing Concept M-05: CROSS-PAGE COHERENCE

All 40 concepts address a SINGLE page. But KortAI builds multiple pages. No concept addresses:
- How pages relate to each other visually (family resemblance)
- Whether a reader who has seen 3 KortAI pages should detect consistent personality
- How much variation across pages is desirable (same soul, different expression)
- Whether the metaphor should be unique per page or have shared vocabulary

The soul constraints (border-radius: 0, warm palette, typography trinity) provide cross-page identity at the VOCABULARY level. But cross-page identity at the COMPOSITION level (how mechanisms are typically deployed, what density arc is standard) is unaddressed.

### Missing Concept M-06: REVISION QUALITY

All concepts concern the FIRST BUILD. But real pages get revised. No concept addresses:
- How to add content to an existing zone without breaking multi-coherence
- How to change the metaphor without rebuilding from scratch
- How to maintain compositional fluency across revisions by different builders
- Whether a page that was DESIGNED in its first build degrades to ASSEMBLED through edits

This connects to K-07 (fix cycle degradation) but extends beyond it -- K-07 is about within-session degradation. M-06 is about cross-session degradation over the page's lifetime.

---

## 6. SUMMARY: THE IRREDUCIBLE SET

### From 40 → 5 → 3

**40 concepts** in 11 categories collapse to **5 phenomena**, which further reduce to **3 fundamental axes**:

| Axis | Phenomenon | Core Question | Actionable Form |
|------|-----------|---------------|-----------------|
| **Agent Capability** | Builder Mode + Suppressors | "Is the builder composing or complying?" | Use Opus. Provide recipe not checklist. Remove suppressors. Single builder. Creative authority clause. |
| **Content Affordance** | Content-Form Coupling | "Does the content enable rich form?" | Select heterogeneous content. Derive metaphor from content. Map mechanisms to content structure. |
| **Specification Physics** | Compression | "How much intelligence survives to the builder?" | CSS > prose. < 200 lines. Conventions brief as translation layer. World-description framing. Closed vocabularies. |

### The 7 Truly Independent Concepts

If forced to name the smallest set of concepts that captures everything:

1. **Builder Cognitive Mode (A-01)** -- THE quality ceiling determinant
2. **Content-Form Coupling (B-01)** -- content as co-author
3. **Compression Physics (E-03)** -- intelligence degradation through indirection
4. **Quality Suppressors (D-01)** -- enumerable barriers to quality
5. **Inter-Agent Communication (H-01)** -- forced articulation (partially independent)
6. **Gate Architecture (H-05)** -- programmatic vs perceptual (partially independent)
7. **Meta-Annotation (G-06)** -- transparency and accessibility (fully independent)

Everything else is a manifestation, measurement, consequence, or solution derived from these 7.

### The 6 Missing Concepts

8. **Temporal Composition (M-01)** -- scroll rhythm and pacing
9. **Reader Model (M-02)** -- who is the reader and how do they arrive
10. **Emotional Arc (M-03)** -- how the reader FEELS across the scroll
11. **Compositional Anti-Patterns (M-04)** -- how mechanisms combine badly
12. **Cross-Page Coherence (M-05)** -- family resemblance across multiple pages
13. **Revision Quality (M-06)** -- maintaining composition across edits

### Total Irreducible Set: 13 Concepts (7 existing + 6 missing)

The 40 beyond-eight concepts are 7 independent concepts wearing 40 costumes. The 6 missing concepts address dimensions that none of the 40 touch. The complete beyond-eight framework should contain 13 independent concepts, not 40 dependent ones.

---

*40 concepts → 5 phenomena → 3 axes → 7 truly independent concepts + 6 missing ones = 13 irreducible concepts. The dominant finding: A-01 (builder cognitive mode) generates 11 of 40 concepts -- it is the single most consequential variable. B-01 (content-form coupling) generates 9 of 40. E-03 (compression physics) generates 6. Together these 3 root phenomena account for 26 of 40 concepts (65%). The remaining 14 are bridges, measurements, fixes, process decisions, and 3 genuinely independent residuals. The 6 missing concepts (temporal, reader, emotional, anti-pattern, cross-page, revision) address dimensions the current framework entirely overlooks.*
