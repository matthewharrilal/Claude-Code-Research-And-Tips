# Research Survey: What Was Discovered

## Overview

The project's research program consists of **337 findings** from 5 parallel research agents (R1-R5), synthesized into a unified framework, then validated through **18 HTML explorations** across 3 dimensions (Density, Organizational, Axis/Combination). The research generated **88+ additional exploration findings** (DD-F, OD-F, AD-F, CD-F) that extended and validated the original research.

The central question the research addressed: **How should a KortAI documentation showcase be designed so that layout, density, component arrangement, and visual rhythm create a "designed" rather than "default" experience -- while honoring strict soul constraints (sharp edges, flat design, no decoration)?**

---

## The 5 Research Streams

### R1: Documentation Patterns (28 findings)
**Source:** Competitive analysis of premium docs sites (Stripe, Vercel, Linear, Notion, Apple HIG, Tailwind, Storybook, etc.)

**What it discovered:**
- **Density Rhythm Principle:** Premium docs oscillate HIGH-LOW-MEDIUM in waves. Constant density = 50% reduced comprehension.
- **38% Retention Rule:** Smart whitespace improves retention by 38%. Not emptiness -- functional breathing.
- **Viewport Principle:** One major concept per viewport height (from Apple HIG).
- **Three-Column Doctrine:** Navigation | Content | Code/Context (from Stripe). Reduces context-switching by 40-60%.
- **Callout Scarcity:** Maximum 1-2 callouts per page. "If everything is highlighted, nothing is highlighted."
- **Typography-First Hierarchy:** Size > Weight > Color > Space. Typography carries 80% of hierarchy.
- **Grouping Proximity Law:** 8-16px between related items, 24-48px between unrelated.

**Role in pipeline:** PRIMARY input for Organizational Dimension (OD) explorations.

---

### R2: Creative Layouts (27 findings)
**Source:** Magazine editorial design, dashboard interfaces, design system showcases.

**What it discovered:**
- **Layout IS content, not container.** The difference between "designed" and "default" is intentional asymmetry, typographic hierarchy as structure, and deliberate grid-breaking tension.
- **Breaking the Grid:** In 2026, intentional asymmetry signals "a human designed this" in the AI template era. Break with CONTENT positioning, not DECORATION.
- **Pull Quotes as Structure:** Large typographic excerpts interrupt content flow intentionally -- not just emphasis but visual rhythm breakers.
- **White Space as Content:** Editorial design treats empty space as intentional. 92px+ hero margins.
- **Card-Based Composition:** Size and whitespace signal priority, not decoration.
- **Dense but Breathable:** Professional density signals expertise. Consistent spacing tokens + visual grouping create density without cramping.
- **Dashboard Storylines:** Dashboards as narratives, not just collections.

**Role in pipeline:** Secondary input across multiple stages. Key to editorial philosophy.

---

### R3: Density Dimensions (51 findings)
**Source:** Research expanding density beyond the single spatial dimension.

**What it discovered -- THE core conceptual breakthrough of the research:**

Density is NOT just "how many things per area." It has **6 independent dimensions:**

| Dimension | What It Measures | Key Insight |
|-----------|-----------------|-------------|
| **Temporal** | Information unfolding over scroll | PULSE, CRESCENDO, BOOKENDS, WAVE rhythm patterns |
| **Depth** | Z-axis layering (foreground/background) | "Geological model" -- Surface/Sediment/Bedrock strata |
| **Semantic** | Meaning per unit area | Jargon = efficient for experts, hostile for novices |
| **Cognitive** | Mental processing required | Cognitive density = Information + Novelty + Decision Points |
| **Interaction** | Clickable elements per viewport | Zones: exploration/action/reading |
| **Spatial** | Elements per area (the obvious one) | Components per viewport |

**Critical density patterns discovered:**
- **PULSE:** High-Low-High-Low cycles, like a heartbeat. For tutorials.
- **CRESCENDO:** Sparse-to-dense build. For onboarding.
- **BOOKENDS:** Dense start/end, sparse middle. For context-action-summary.
- **WAVE:** Irregular but rhythmic. For long-form docs.

**Novel frameworks:** Breathing (inhale/exhale), Tidal (information waves), Musical (forte/piano dynamics), Geological (strata layers), Fractal (self-similar at all scales).

**Role in pipeline:** PRIMARY input for Density Dimension (DD) explorations. ~76% of findings applied. The fractal self-similarity finding (R3-023 -> DD-F-006) became the single most cited insight in the entire system.

---

### R4: Axis Innovations (192 findings -- largest stream)
**Source:** Eye-tracking research, grid system analysis, reading pattern science.

**What it discovered:**

**Classic Reading Patterns:**
- **Z-Pattern:** Diagonal sweep across page. For hero sections with single clear messages.
- **F-Pattern:** Two horizontal scans + vertical descent. Dominant for text-heavy content. Left-aligned content scanned vertically.
- **Gutenberg Diagram:** 4 quadrants (Primary Optical, Strong Fallow, Weak Fallow, Terminal). Only applies to homogeneous content.

**Grid Innovations:**
- **Bento Grid:** Modular grid with varied cell sizes (from Apple WWDC). Large cells = importance.
- **Masonry Grid:** Pinterest-style variable height columns.
- **Broken/Asymmetric Grid:** Intentional rule-breaking for creative sections.

**Movement Choreography:**
- **Golden Ratio/Fibonacci Spiral:** 1.618 ratio for proportions, type scale, sidebar/content splits.
- **Hub and Spoke:** Central concept with radiating details.
- **Diagonal Movement:** Clip-path diagonals encoding both direction AND density simultaneously.

**Key meta-insight:** "The best layouts don't fight reading gravity -- they harness it. Classic patterns provide the physics; modern innovations add controlled variations."

**Implementation patterns:** Orchestrated Axis (Z-hero + Bento features + F-details), Rhythm-Based (verse/chorus/bridge), Cinematic (wide-close-wide).

**Role in pipeline:** PRIMARY input for Axis Dimension (AD) explorations. Largest body of unapplied research initially; later validated through AD-001 through AD-006.

---

### R5: Combination Theory (39 findings)
**Source:** Internal design extraction (PERCEPTUAL-TRUTHS.md, CHARACTER-FAMILY-COMPLETE.md) + external combination theory.

**What it discovered -- components are NOT interchangeable puzzle pieces:**

**Component Properties Model:**
Every component has 3 properties that affect combination chemistry:
- **Velocity** (reading speed): SLOW (Code, Reasoning, Core Abstraction), MEDIUM (File Tree, Decision Matrix), FAST (all Callouts, Task)
- **Temperature** (emotional tone): Warm (Tip, Challenge, Essence), Neutral (Info, File Tree, Code), Cold (Gotcha, Task)
- **Weight** (visual mass): Heavy (Code, File Tree, Decision Matrix, Core Abstraction, Reasoning), Medium (Gotcha, Essence, Challenge, Task), Light (Info, Tip)

**Combination Rules:**
- Never stack same-velocity components consecutively.
- Smooth temperature transitions (warm->cold is jarring; use neutral as buffer).
- Intersperse heavy elements with light ones.
- Maximum 2 callouts consecutively (callout cacophony = alarm fatigue).

**Harmony vs Tension:**
- **Harmony:** Components that combine seamlessly (same family DNA, complementary roles).
- **Productive Tension:** Cognitive pause without dissonance (Gotcha before Code = "Don't do this").
- **Jarring Collision:** Same-type stacking, rapid temperature oscillation.

**Recommended Sequences:**
- Opening: Hero -> Overview Callout -> Navigation/Map
- Teaching: Essence -> Core Abstraction -> Code -> Tip
- Decision: Decision Matrix -> Reasoning -> Gotcha
- Closing: Challenge -> Task -> Essence (takeaway)

**Role in pipeline:** PRIMARY input for Combination Dimension (CD) explorations.

---

## The Synthesis: 5 Unified Design Principles

The RESEARCH-SYNTHESIS.md unified all 337 findings into 5 principles:

1. **Density as Rhythm (R1 + R3):** Every section has a density "signature" across all 6 dimensions. Vary intentionally; constant density = monotonous.

2. **Layout as Choreography (R2 + R4):** Match axis pattern to section purpose. Z for heroes, F for text-heavy, Bento for catalogs. Axis transitions are dance moves, not random.

3. **Components as Characters (R5 + Soul):** Each component has velocity, temperature, weight. Combination is choreography, not collision.

4. **Whitespace as Design Element (R1 + R2):** 24px between related, 48px between sections, 92px+ hero margins. Smart whitespace = 38% retention improvement.

5. **Editorial Confidence Through Typography (R1 + R2 + Soul):** Typography creates hierarchy. Sharp edges = confidence. Size > Weight > Color > Space.

### Conflicts Resolved:
- **Grid Breaking vs Sharp Edges:** Break with CONTENT positioning, not DECORATION.
- **Progressive Disclosure vs Flat Design:** Expandable sections and scroll-based reveals, not hover or shadow-based.
- **Density Maximization vs Breathing Room:** Vary by section PURPOSE (reference = dense, learning = sparse).

---

## Exploration Findings: Research Validated in Practice

The 337 research findings were tested through 18 HTML explorations across 3 dimensions:

### Density Explorations (DD-001 through DD-006)
6 explorations testing R3 density patterns. Average score: 34.5/40. 100% soul compliance.

**Crown jewel: DD-006 Fractal (36/40)**
- Discovered **DD-F-006: Fractal Self-Similarity** -- the same dense/sparse rhythm should appear at page, section, component, AND character levels. This became the most-referenced finding in the entire system (108+ inbound references).
- The fractal principle flows forward through all subsequent work.

### Organizational Explorations (OD-001 through OD-006)
6 explorations testing content organization patterns. v3 re-enriched. Scores 34-37/40.

**Crown jewel: OD-006 Creative (37/40, 726 citations)**
- Discovered **OD-F-005: "Organization IS Density"** -- organizational pattern and density pattern are the same phenomenon viewed from two perspectives. The most-cited finding across 174 files.
- Cycling through 5 organizational modes produces density variation with zero density manipulation.

**17 OD-F findings** including fractal nesting, Q&A as natural PULSE generator, mode-transition breathing, and each org pattern's natural density identity (Conversational=PULSE, Narrative=CRESCENDO, Task-Based=ISLANDS, Confidence=GEOLOGICAL, Spatial=WAVE).

### Axis Explorations (AD-001 through AD-006)
6 explorations testing R4 axis patterns. All INCLUDE status.

**Crown jewel: AD-006 Compound + AD-F-023: Attention Topology**
- The META-EQUIVALENCE finding: all 4 mechanisms (axis, density, organization, attention) converge. Axis IS topology, density IS traversal, organization IS semantics. They are all the same structure described from different perspectives.
- DD-F-006 fractal confirmed at 5 scales: navigation, page, section, component, character. No 6th scale exists.

**28 AD-F findings** including Z-PULSE equivalence, kinetic equivalence (axis direction change = density state change), transition grammar (4 Smooth + 10 Bridge + 6 Breathing transitions), and the 5-scale fractal model.

### Combination Explorations (CD-001 through CD-006)
6 explorations testing R5 combination theory. CD-006 scored 39/40.

**Crown jewel: CD-006 Pilot Migration (39/40, later reclassified as CEILING tier)**
- Demonstrated full component combination at high fidelity. 10-11/14 Flagship dimensions achieved (~72%).
- 41 mechanisms, 5/5 scales. Originally called "Flagship" but later reclassified as CEILING (no pervading metaphor, local multi-coherence only).
- 25 CD-F findings generated.

---

## The Master Insight (What It All Means)

> "The best documentation showcases treat layout as content, not container. Components are characters in a narrative, not items in a list. Density has rhythm. Axes have choreography. Combinations have chemistry."

The research program discovered that what separates a "designed" page from a "default" page is not individual techniques but their **compositional interaction**:

1. **Everything is connected:** Axis, density, organization, and attention topology are NOT independent dimensions -- they are different names for the same underlying structure (AD-F-023).

2. **Composition is fractal:** The same patterns appear at every scale, from character spacing to page architecture (DD-F-006).

3. **Components have personality:** Velocity, temperature, weight govern combination chemistry. Sequence matters. Context matters.

4. **Rhythm trumps decoration:** Density oscillation (PULSE, CRESCENDO, WAVE) creates the feeling of "designed" without any decoration.

5. **Constraints enable creativity:** The KortAI soul constraints (sharp edges, flat design, no shadows) force compositional solutions that would otherwise be avoided, producing a more distinctive result.

---

## Relationship Between Research and Building

The research-to-building pipeline is a progressive distillation:

```
337 Research Findings (R1-R5, ~164KB of prose)
    |
    v
5 Unified Design Principles (RESEARCH-SYNTHESIS.md)
    |
    v
18 HTML Explorations (DD/OD/AD/CD, validating in practice)
    |
    v
88+ Exploration Findings (DD-F, OD-F, AD-F, CD-F)
    |
    v
6-Layer Compositional Core (40 operational items)
    |
    v
2 Skills (Tension-Composition + Perceptual Auditing)
    |
    v
/build-page Pipeline (single execution entry point)
```

A critical discovery during the project: this distillation process has a **50:1 compression ratio**, with **99.8% information loss**. The research contains 337 rich findings about WHY and HOW -- but the building pipeline compressed them into terse rules like "sample 2-4 mechanisms." This compression was identified as the #1 root cause of quality degradation in flagship builds.

The research files are FROZEN and LOCKED. They serve as the permanent evidence base. The compositional-core/ extracts operational vocabulary FROM the research. The skills translate that vocabulary into executable building procedures. Research is NEVER read during building (too much context) -- only during planning and auditing.

---

## Key Numbers

| Metric | Value |
|--------|-------|
| Total research findings | 337 |
| R1 (Documentation Patterns) | 28 findings |
| R2 (Creative Layouts) | 27 findings |
| R3 (Density Dimensions) | 51 findings |
| R4 (Axis Innovations) | 192 findings |
| R5 (Combination Theory) | 39 findings |
| Total research file size | ~163KB (27K + 37K + 24K + 44K + 31K) |
| HTML explorations | 18 (6 DD + 6 OD + 6 AD implied, 6 CD) |
| Exploration findings generated | 88+ (18 DD-F + 17 OD-F + 28 AD-F + 25 CD-F) |
| Exploration score range | 30.5/40 to 39/40 |
| Soul violations across all explorations | 0 |
| Unified principles | 5 |
| Novel frameworks created | 6+ (density manifold, velocity model, temperature model, weight model, kinship model, editorial spread) |
| Most-cited finding | OD-F-005 "Organization IS Density" (726 citations across 174 files) |
| Most-referenced artifact | DD-F-006 fractal self-similarity (108+ inbound references) |
| Crown jewel meta-finding | AD-F-023 Attention Topology (all dimensions are ONE structure) |
