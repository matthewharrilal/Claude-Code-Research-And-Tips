# External Sources & Inspirations: 7 KortAI Exploration Pages

**Date:** 2026-03-02
**Agent:** Research Archaeologist
**Method:** Traced external references by reading R1-R5 research files, EXT-RESEARCH-REGISTRY.md, HTML exploration headers (inline threading + research application records), and pipeline build TC briefs.

---

## Methodology

For each of the 7 pages, I traced external sources through three layers:
1. **R1-R5 research streams** -- the 337 original findings that cite external URLs
2. **EXT-* research registry** -- the 127 bespoke external findings commissioned during OD and AD build phases
3. **HTML file headers** -- inline threading headers documenting every applied research finding and its provenance

Source confidence levels:
- **HIGH** -- explicitly cited in source file with URL or named reference
- **MEDIUM** -- strongly implied by technique match and research stream attribution
- **LOW** -- inferred from similarity to known external patterns

---

## Page 1: OD-004 -- Confidence-Based Organization (Geological Strata Density)

**Score: 34/40 | File: `design-system/validated-explorations/organizational/OD-004-confidence.html`**

### External Sources Identified

| Source | What It Contributed | Confidence |
|--------|-------------------|------------|
| **Nielsen Norman Group (NNG) -- Progressive Disclosure** | Max 4 strata principle; strong information scent at boundaries; two-level disclosure limit | HIGH (EXT-CONF-001, URL: nngroup.com/articles/progressive-disclosure/) |
| **AI UX Design Guide -- Confidence Visualization** | Inverse density-confidence relationship (high confidence = sparse, low confidence = dense); redundant coding principle | HIGH (EXT-CONF-002, URL: aiuxdesign.guide/patterns/confidence-visualization) |
| **Agentic Design AI -- Categorical Labels** | Words not percentages for confidence (Established/Probable/Speculative/Open); avoiding false precision | HIGH (EXT-CONF-003, URL: agentic-design.ai/patterns/ui-ux-patterns/confidence-visualization-patterns) |
| **Gwern.net (Gwern Branwen)** | 8-level per-section confidence vocabulary; per-section epistemic tags setting reader expectations | HIGH (EXT-CONF-004, URL: gwern.net/about) |
| **Maggie Appleton -- Digital Garden Patterns** | "You Are Reading" epistemic disclosure markers; orientation markers per stratum | HIGH (EXT-CONF-005, reference to Appleton's digital garden conventions) |
| **Diataxis Documentation Framework** | Confidence maps to documentation type (tutorial=high, reference=medium, explanation=varied) | HIGH (EXT-CONF-006, URL: diataxis.fr/) |
| **Software Architecture -- Layered Architecture Principle** | Layer isolation, bounded interpretation zones; each stratum independently valuable | MEDIUM (EXT-CONF-007, applied from software architecture patterns) |
| **GitBook -- Adaptive Progressive Revelation** | Progressive stratum revelation, URL-addressable strata, deep linking to confidence levels | MEDIUM (EXT-CONF-008) |
| **NNG -- Information Scent** | Strong scent at every stratum boundary; progress indicators showing which stratum user occupies | HIGH (EXT-CONF-010, URL: nngroup.com/articles/information-scent/) |
| **EA Forum / LessWrong -- Epistemic Status Markers** | Evidence DNA per stratum; crux transparency; making uncertainty visible and navigable | HIGH (EXT-CONF-011, EA Forum epistemic norms) |
| **Stripe Documentation** | Confidence-level switcher control; UI toggle between certainty levels | HIGH (EXT-CONF-012, URL: docs.stripe.com/) |
| **Node.js API Documentation + NNG Neobrutalism** | Border-weight confidence encoding (4px/3px/2px/1px gradient); structural weight correlating with certainty | HIGH (EXT-CONF-013, URLs: nodejs.org/api/documentation.html + nngroup.com/articles/neobrutalism/) |
| **Smashing Magazine -- Sticky Menus UX** | 3-component stratum transition spacing: 48px whitespace + 3px rule + label | HIGH (EXT-CONF-014, URL: smashingmagazine.com/2023/05/sticky-menus-ux-guidelines/) |
| **Fiveable -- Editorial Design** | Stratum-internal micro-pacing: sparse intro / dense body / sparse bridge per geological layer | HIGH (EXT-CONF-018, URL: fiveable.me/editorial-design/) |
| **Stripe Documentation (R1)** | Density rhythm principle (HIGH-LOW-HIGH cycles) applied as certain=sparse, uncertain=dense | HIGH (R1-001, URL: docs.stripe.com/) |
| **Apple Human Interface Guidelines** | Viewport principle: each stratum transition at viewport boundary | HIGH (R1-003, URL: developer.apple.com/design/human-interface-guidelines/) |
| **DD-004 (GEOLOGICAL) + DD-002 (CRESCENDO) + DD-006 (FRACTAL)** | Internal validated explorations providing density pairing | HIGH (internal, not external) |

### Research Stream
**Primary:** R1 (Documentation Patterns) -- 6 R1 findings applied (R1-001, R1-003, R1-004, R1-006, R1-016, R1-019)
**Secondary:** EXT-CONF series (18 bespoke external findings) -- this is the most externally-researched OD exploration
**Tertiary:** DD findings (DD-F-002, DD-F-004, DD-F-006, DD-F-010)

### Influence Types
- **Structural:** NNG progressive disclosure (4-stratum limit), layered architecture (bounded zones)
- **Perceptual:** Border-weight gradient (4px/3px/2px/1px), spacing system (48px transition markers), inverse density-confidence rhythm
- **Conceptual:** Gwern/Appleton/EA Forum epistemic status conventions -- the CORE organizing principle (confidence stratification) comes from epistemic transparency practices in rationalist/digital garden communities
- **Methodological:** Diataxis framework (documentation type taxonomy), NNG information scent (boundary marker design)

### Source Confidence Distribution
HIGH: 14 | MEDIUM: 2 | LOW: 0

---

## Page 2: OD-006 -- Crown Jewel (Multi-Section Emergent Synthesis)

**Score: 37/40 | File: `design-system/validated-explorations/organizational/OD-006-creative.html`**

### External Sources Identified

| Source | What It Contributed | Confidence |
|--------|-------------------|------------|
| **Neobrutalism Design Principles** | THE SOLID OFFSET -- neobrutalist depth via pseudo-elements replacing box-shadow with flat graphic technique | HIGH (EXT-CREATIVE-001, Resource 4) |
| **Stripe/Linear Typography** | THE TYPOGRAPHIC HIERARCHY CASCADE -- 5-level 1.5x ratio type system | HIGH (EXT-CREATIVE-002, Resources 1-2: Stripe docs + Linear UI) |
| **MDN + Frontend Masters -- CSS Scroll-Driven Animations** | THE SCROLL WITNESS -- CSS-only section progress tracking using `view()` timeline and `@property` | HIGH (EXT-CREATIVE-003, Resource 3) |
| **CSS Scroll-Driven Animations (same resource)** | THE ARRIVING WISDOM -- scroll-triggered staggered reveal with `prefers-reduced-motion` respect | HIGH (EXT-CREATIVE-004, Resource 3) |
| **CSS Magazine Layouts** | THE EDITORIAL DROP -- serif drop caps at section openings, `::first-letter` editorial technique | HIGH (EXT-CREATIVE-005, Resource 6) |
| **Stripe API Documentation** | THE SEMANTIC BRIDGE -- hover-to-illuminate pattern linking concept terms to related code | HIGH (EXT-CREATIVE-006, Resource 1: Stripe API docs hover interaction) |
| **Design System Documentation Sites** | THE DUAL LENS -- Why/How toggle between serif explanation and monospace implementation views | HIGH (EXT-CREATIVE-007, Resource 7) |
| **Apple Human Interface Guidelines Documentation** | THE COLLAPSING HEADER -- sticky headers that shrink on scroll; THE VISUAL INDEX -- specimen-sheet grid overview | HIGH (EXT-CREATIVE-008/009, Resource 10: Apple HIG) |
| **Wikiversity -- Self-Referential Loops + Fractal.build** | THE FRACTAL ANNOTATION LAYER -- persistent sidebar annotations labeling fractal scale | HIGH (EXT-CREATIVE-010) |
| **Fiveable Editorial Design + yesimadesigner.com** | THE CULMINATION SPREAD -- amplified page title, retrospective visual integration, per-section grid variation | HIGH (EXT-CREATIVE-011) |
| **Fractal.build + CSS Typographic Scale** | THE RECURSIVE TABLE OF CONTENTS -- 3-level fractal TOC with serif/sans/mono cascade | HIGH (EXT-CREATIVE-012) |
| **DesignRush + UXPin + Component Gallery** | THE PATTERN ECHO -- CSS-only miniature visual signatures; Hofstadterian strange loop in visual index | HIGH (EXT-CREATIVE-013) |
| **neobrutalism.dev** | THE TERRITORIAL BORDER-COLOR HOVER -- flat 2D hover replacing transform translate spirit violation | HIGH (EXT-CREATIVE-014) |
| **30secondsofcode.org** | THE SCALE ECHO TYPOGRAPHY -- type scale ratio annotations in fractal layer | HIGH (EXT-CREATIVE-015) |
| **Smashing Magazine -- Compositional Flow and Rhythm** | Rhythm through repetition: visual rhythm via repeating Q&A elements | HIGH (EXT-CONV-007, URL: smashingmagazine.com/2015/04/design-principles-compositional-flow-and-rhythm/) |
| **It's Nice That -- Forward Thinking Graphic Trends 2026** | Bold Minimalism 2026 -- validates KortAI soul: sharp edges, flat design, typography-dominant | HIGH (EXT-CONV-011, URL: itsnicethat.com/features/forward-thinking-graphic-trends-2026/) |
| **ALL 28 R1 findings** | Every R1 finding applied (R1-001 through R1-028 except R1-012/R1-014) | HIGH |
| **Douglas Hofstadter (conceptual)** | Hofstadterian strange loop -- self-referential recursive structure in visual index grid | MEDIUM (referenced conceptually in EXT-CREATIVE-013) |

### Research Stream
**Primary:** EXT-CREATIVE series (15 findings) -- dedicated creative research feed
**Secondary:** R1 (all 28 documentation pattern findings applied)
**Tertiary:** ALL DD-F findings, ALL OD-F-001 through OD-F-004 findings

### Influence Types
- **Structural:** CSS Grid magazine layouts, Apple HIG documentation structure, collapsible headers
- **Perceptual:** Neobrutalism (solid offset depth), scroll-driven animations (MDN), typographic hierarchy (Stripe/Linear)
- **Conceptual:** Hofstadterian self-reference (strange loop), fractal self-similarity (Wikiversity/Fractal.build), editorial spread tradition (Fiveable)
- **Methodological:** Stripe API docs (hover-to-illuminate interaction pattern), design system documentation sites (dual-lens Why/How pattern)

### Source Confidence Distribution
HIGH: 17 | MEDIUM: 1 | LOW: 0

---

## Page 3: AD-002 -- F-Pattern Axis (5-Act Narrative Structure)

**Score: ~71KB | File: `design-system/axis/AD-002-f-pattern.html`**

### External Sources Identified

| Source | What It Contributed | Confidence |
|--------|-------------------|------------|
| **Freytag's Dramatic Structure (Gustav Freytag)** | F-pattern's three horizontal scans mapped to Freytag's 5-act structure: exposition, rising action, climax, falling action, resolution. THE central conceptual framework. | HIGH (EXT-AXIS-F-001, referenced as "F-pattern reading physics + Freytag dramatic structure") |
| **Interaction Design Foundation -- Freytag in UX** | Formal validation that Freytag's pyramid maps to density: exposition=LOW, rising=MEDIUM, climax=HIGH, falling=MEDIUM-LOW, resolution=LOW | HIGH (EXT-NARR-001, URL: interaction-design.org/literature/article/how-to-create-engaging-ux-case-studies-with-freytag-s-5-part-dramatic-structure) |
| **Magazine Editorial Design -- Spread-Level Pacing** | Each Freytag act treated as a "spread" with sparse-intro, dense-body, sparse-bridge internal structure | HIGH (EXT-AXIS-F-002, editorial design tradition) |
| **Typography Hierarchy Research + NNG F-Pattern Scanning** | Left-spine landmark hierarchy: multi-signal differentiation (Instrument Serif + 4px red border for H2, Inter italic for H3, Inter uppercase for H4) | HIGH (EXT-AXIS-F-003) |
| **Freytag Dramatic Structure + Reading Behavior Research** | CRESCENDO exhale: F-pattern REVERSES after climax (reader reads more horizontally in Act IV as density decreases) | HIGH (EXT-AXIS-F-004) |
| **Content Strategy + Progressive Disclosure Research** | Code block placement strategy following attention degradation: zero code in Act I, full blocks at Act III climax | HIGH (EXT-AXIS-F-005) |
| **R4 F-Pattern Research (24 findings applied)** | R4-006 through R4-098: F-pattern scanning physics, left-anchored scanning geometry, text-heavy optimization | HIGH |
| **R2 Creative Layouts (10 findings applied)** | R2-2.1 (F/Z-pattern info hierarchy), R2-5.4 (dramatic typography), R2-6.3 (scrollytelling), R2-1.2 (pull quotes), R2-1.5 (white space as content), R2-5.1 (typography as primary design element) | HIGH |
| **OD-002 Narrative (paired OD exploration)** | Freytag 5-beat arc, CRESCENDO density pattern | HIGH (internal) |
| **Optimal Workshop -- UX as Narrative Arc** | Users who skip exposition lack context; unresolved climaxes frustrate | HIGH (EXT-NARR-002, URL: optimalworkshop.com/blog/from-exposition-to-resolution/) |
| **Barthes -- Hermeneutic Code** | Strategic information withholding creates narrative momentum | HIGH (EXT-NARR-003, Barthes' literary theory applied to UX) |
| **Fiveable -- Visual Pacing Through Editorial Spread** | Visual pacing = rhythm via alternating dense/sparse, whitespace as punctuation | HIGH (EXT-NARR-004, URL: fiveable.me) |
| **Smashing Magazine -- Typographic Hierarchies** | Type size directly communicates density: 40px to 16px cascade across 5 acts | HIGH (EXT-NARR-005, URL: smashingmagazine.com/2022/10/typographic-hierarchies/) |
| **Asana -- Decision Matrix** | Decision matrix at narrative climax: visual scoring + weighted totals at Act III | HIGH (EXT-NARR-010, URL: asana.com/resources/decision-matrix-examples) |

### Research Stream
**Primary:** R4 (Axis Innovations) -- 24 R4 findings applied
**Secondary:** EXT-AXIS-F (5 bespoke findings) + EXT-NARR (11 narrative pacing findings from OD-002)
**Tertiary:** R2 (Creative Layouts) -- 10 findings applied

### Influence Types
- **Structural:** F-pattern reading physics (eye-tracking research), Freytag's 5-act dramatic arc (literary theory applied to layout)
- **Perceptual:** Typography-based landmark hierarchy, whitespace as pacing mechanism (editorial spread tradition)
- **Conceptual:** Freytag's Pyramid IS the organizing principle -- dramatic structure mapped to density compression
- **Methodological:** NNG F-pattern scanning research, progressive disclosure applied to code block placement

### Source Confidence Distribution
HIGH: 14 | MEDIUM: 0 | LOW: 0

---

## Page 4: AD-005 -- Choreography Axis (Hub-Spoke with Territory Grid)

**Score: ~77KB | File: `design-system/axis/AD-005-choreography.html`**

### External Sources Identified

| Source | What It Contributed | Confidence |
|--------|-------------------|------------|
| **Cinematic Language (Shot Progression)** | Establishing shot -> medium shot -> close-up -> wide shot as axis choreography model: hub overview = horizontal scanning, spoke detail = deep vertical, spoke summary = return to horizontal | HIGH (EXT-AXIS-CH-001, "Cinematic language adapted to content structure") |
| **Editorial/Magazine Layout -- Diagonal Rules** | Diagonal clip-path as axis direction signal: `clip-path: polygon()` diagonals mark direction changes, like diagonal rules in printed magazines | HIGH (EXT-AXIS-CH-002, editorial/magazine layout tradition) |
| **WAVE Density Pattern Research** | Hub-spoke navigation creates natural WAVE: Hub = sparse, Spoke = dense, Return-to-hub = sparse | HIGH (EXT-AXIS-CH-003) |
| **Progress Indicator UX + Soul Piece 5** | Flat progress indicator with rectangular segments showing axis position, square markers | HIGH (EXT-AXIS-CH-004) |
| **Responsive Design Principles** | Axis collapse strategy: full choreography at 1440px+ down to all-vertical at mobile | HIGH (EXT-AXIS-CH-005) |
| **Kevin Lynch -- "The Image of the City" (1960)** | Hub-and-spoke ISLANDS pattern; cartographic hierarchy (five urban elements adapted); figure-ground separation | HIGH (EXT-SPAT-001 + EXT-SPAT-005, Kevin Lynch explicitly cited) |
| **NNG -- Breadcrumb Research** | Breadcrumbs as WAVE trigger: triangle separators, monospace font for path | MEDIUM (EXT-SPAT-002) |
| **CSS Grid Named Areas Specification** | Named grid areas for semantic zone naming (doctrine, examples, references) | HIGH (EXT-SPAT-004) |
| **W3C CSS Spatial Navigation** | CSS Spatial Navigation for hub-spoke keyboard traversal: arrow-key focus movement | HIGH (EXT-SPAT-014, URL: w3.org/TR/css-nav-1/) |
| **Gestalt Psychology -- Pure Distance Law** | Three-level Gestalt spacing: 8px within / 32px between / 64px hub-spoke transition | HIGH (EXT-SPAT-015, cross-pollinated from EXT-CONV-003) |
| **Web Animation Trends Research** | Functional animation as wayfinding: scroll-driven density indicator with rectangular markers | HIGH (EXT-SPAT-018, URL: webpeak.org/blog/css-js-animation-trends/) |
| **Astro/Fresh -- Islands Architecture Pattern** | 95% static HTML, 5% interactive; content-first philosophy | MEDIUM (EXT-SPAT-010, Islands architecture pattern) |
| **Entity-Component-System (ECS) Architecture** | Each spoke as modular entity; independently composable | MEDIUM (EXT-SPAT-012) |
| **R4 Axis Innovations (38 findings)** | R4 choreography-related findings on movement patterns, reading gravity, non-linear layouts | HIGH |
| **R2 Creative Layouts (12 findings)** | Layout innovations for hub-spoke grid presentation | HIGH |
| **OD-005 Spatial (paired OD)** | WAVE+ISLANDS density pairing, hub-spoke organizational structure | HIGH (internal) |

### Research Stream
**Primary:** R4 (Axis Innovations) -- 38 R4 findings applied
**Secondary:** EXT-AXIS-CH (5 bespoke findings) + EXT-SPAT (16 spatial research findings from OD-005)
**Tertiary:** R2 (Creative Layouts) -- 12 findings applied

### Influence Types
- **Structural:** Kevin Lynch urban theory (hub-spoke, wayfinding, landmarks), CSS Grid named areas, W3C spatial navigation
- **Perceptual:** Cinematic shot progression (camera movement as reading movement), diagonal clip-path (magazine editorial), Gestalt proximity law (3-level spacing)
- **Conceptual:** Choreography as READER attention movement through static structure (key insight: content doesn't move, reader does -- AD-F-020 choreography paradox resolution)
- **Methodological:** Islands architecture (Astro), ECS modularity, responsive axis collapse

### Source Confidence Distribution
HIGH: 12 | MEDIUM: 3 | LOW: 0

---

## Page 5: AD-006 -- Compound Axis (7 Sections, Each Different Pattern)

**Score: ~94KB | File: `design-system/axis/AD-006-compound.html`**

### External Sources Identified

| Source | What It Contributed | Confidence |
|--------|-------------------|------------|
| **DD-F-006 FRACTAL Meta-Pattern + OD-F-MP-001** | Compound as meta-pattern demonstration: triple equivalence (axis = organization = density = ONE phenomenon) | HIGH (EXT-AXIS-X-001, internal research synthesis) |
| **Information Architecture + Pattern Compatibility Theory** | 5x5 transition grammar: smooth/bridge/breathing transition types between axis patterns | HIGH (EXT-AXIS-X-002) |
| **Hofstadter -- "Godel, Escher, Bach" (Self-Reference)** | Recursive pattern echo grid with Hofstadterian strange loop: 6th cell = compound grid of itself | HIGH (EXT-AXIS-X-003, explicit Hofstadter reference) |
| **OD-005 WAVE Indicator adapted** | Compound density self-documentation: persistent annotation showing current axis/density/organization | HIGH (EXT-AXIS-X-004) |
| **EXT-CREATIVE-010 Fractal Annotation** | Extended fractal annotation layer for both scale AND axis pattern simultaneously | HIGH (EXT-AXIS-X-005) |
| **EXT-CREATIVE-011 Culmination Spread** | Amplified type scale + retrospective thumbnails of AD-001 through AD-005 | HIGH (EXT-AXIS-X-006) |
| **OD-F-013 Decision Matrices** | 5x5 decision matrix as compound climax: content types vs axis patterns | HIGH (EXT-AXIS-X-007) |
| **OD-006 Crown Jewel Methodology** | Page designed to GENERATE findings: "Discovery Log" sidebar documenting emergent findings | HIGH (EXT-AXIS-X-008) |
| **Musical/Compositional Structure** | Compound page as verse-chorus-bridge-verse: one pattern per section sequentially, not simultaneously | MEDIUM (referenced in header: "Musical structure") |
| **R4 Axis Innovations (42 findings)** | Largest R4 consumption: all axis pattern types synthesized | HIGH |
| **R2 Creative Layouts (12 findings)** | Magazine/editorial layout techniques for multi-section composition | HIGH |
| **ALL prior AD explorations (AD-001 through AD-005)** | Each section demonstrates one prior AD pattern's axis geometry | HIGH (internal) |
| **ALL OD-F findings + DD-F findings** | Triple equivalence validation: every prior finding tested at compound scale | HIGH (internal) |

### Research Stream
**Primary:** R4 (Axis Innovations) -- 42 R4 findings applied (most of any AD)
**Secondary:** EXT-AXIS-X (8 bespoke findings -- most of any AD domain)
**Tertiary:** R2 (12 findings) + cross-pollination from EXT-CREATIVE series

### Influence Types
- **Structural:** Information architecture (transition grammar), decision matrix design, compound-as-sequential constraint
- **Perceptual:** Amplified typography scale, pattern echo visualizations (flat CSS graphics)
- **Conceptual:** Hofstadterian self-reference and strange loops, AD-F-023 ATTENTION TOPOLOGY (meta-equivalence unifying all 4 mechanisms: temporal, spatial, proportional, gravitational)
- **Methodological:** Finding-generation methodology (page designed to produce discoveries), musical compositional structure

### Source Confidence Distribution
HIGH: 12 | MEDIUM: 1 | LOW: 0

---

## Page 6: Pipeline Build -- Molly Cantillon's Personal Panopticon (CI/CD Pipeline Page)

**Score: Pipeline v6 build (2026-03-02) | File: `ephemeral/builds/molly-panopticon-extraction-2026-03-02/_build-final.html`**

### External Sources Identified

| Source | What It Contributed | Confidence |
|--------|-------------------|------------|
| **Geological Cartography / Survey Mapping** | THE organizing metaphor: page as survey map with cartouche (title block), grid overlay (8-domain taxonomy), marginal annotations (critique), terra incognita (open questions), legend (key quotes) | HIGH (TC brief: "Cartography is not a decoration on this content -- it is the content's own logic rendered as spatial form") |
| **KortAI Design System -- Compositional Core** | identity.md (soul constraints), vocabulary.md (design decisions), tokens.css (65 CSS tokens), components.css (component implementations) | HIGH (mandatory always-load files) |
| **Kevin Lynch -- "The Image of the City"** | Cartographic hierarchy: figure-ground separation applied to documentation zones | MEDIUM (inherited through compositional-core case studies referencing OD-005/EXT-SPAT-005) |
| **Foucault -- Panopticon (conceptual)** | The content's own concept of surveillance-as-liberation informs the spatial composition: watchtower vs reading room tension | MEDIUM (TC brief opposition map: "surveillance-as-liberation vs editorial warmth") |
| **Magazine Editorial Design -- Cartouche Tradition** | Opening section treated as decorated title block of survey map; generous whitespace establishing cartographer's voice | MEDIUM (TC brief: "cartouche -- the decorated title block of a survey map") |
| **DD-006 Fractal Self-Similarity (DD-F-006)** | Mandatory fractal compliance at 4 scales carried through pipeline | HIGH (inherited constraint from all DD/OD/AD stages) |
| **OD-F-005 (Organization IS Density)** | Zone token naming convention; background arc driven by organizational mode | HIGH (inherited from OD stage) |
| **Tension-Composition Skill (TC Pipeline)** | World-description, calibration, opposition map, compositional arc methodology | HIGH (TC brief produced by /compose pipeline) |
| **9 Case Studies (anti-prescription format)** | DD-003 Islands, DD-004 Layers, DD-006 Fractal, OD-001 Conversational, OD-004 Confidence, OD-006 Creative, CD-001 Reasoning, CD-005 Multi-Axis, CD-006 Pilot | HIGH (compositional-core case studies read by specialist agents) |

### Research Stream
**Primary:** Compositional Core (distilled from all R1-R5 + DD/OD/AD/CD findings)
**Secondary:** TC pipeline derivation (original metaphor generation)
**Note:** Pipeline builds do NOT directly cite R1-R5 -- they consume the DISTILLED compositional core. External influence is mediated through the extraction pipeline.

### Influence Types
- **Structural:** Cartographic zone structure (survey grid, marginal annotations, legend, terra incognita)
- **Perceptual:** Background arc (parchment -> drafting table -> fieldwork -> night camp), border-weight hierarchy (4px/3px/1px)
- **Conceptual:** Geological cartography as organizing metaphor (original to this TC derivation, but informed by OD-004's geological strata and OD-005's Kevin Lynch cartography)
- **Methodological:** TC pipeline's 5-section conviction brief methodology (World-Description, Calibration, Opposition Map, Compositional Arc, Creative Conditions)

### Source Confidence Distribution
HIGH: 6 | MEDIUM: 3 | LOW: 0

---

## Page 7: Pipeline Build -- Steve Yegge's Gas Town / Authentication Middleware

**Score: Pipeline v6 build (2026-03-02) | File: `ephemeral/builds/yegge-gas-town-extraction-2026-03-02/_build-final.html`**

### External Sources Identified

| Source | What It Contributed | Confidence |
|--------|-------------------|------------|
| **Industrial Architecture / Control Tower Operations** | THE organizing metaphor: page as multi-story operations center with strategic coordination at top, task decomposition in middle, execution on factory floor, quality gates at thresholds | HIGH (TC brief: "industrial control tower -- a multi-story operations center") |
| **Mad Max: Fury Road -- "Gas Town"** | Content's own cultural reference (Yegge's naming convention) informing the "post-apocalyptic resourcefulness" vs editorial precision opposition | MEDIUM (TC brief: "punk action film" metaphor carried from content) |
| **KortAI Design System -- Compositional Core** | identity.md, vocabulary.md, tokens.css, components.css (mandatory always-load) | HIGH |
| **DD-006 Fractal Self-Similarity (DD-F-006)** | Mandatory fractal at 4 scales | HIGH (inherited constraint) |
| **OD-F-005 (Organization IS Density)** | Zone token naming; background arc encoding density shifts | HIGH (inherited) |
| **Tension-Composition Skill (TC Pipeline)** | World-description, calibration, opposition map, compositional arc methodology generating the control tower metaphor | HIGH |
| **Stripe Documentation (R1-001)** | Density rhythm principle carried through compositional core | HIGH (mediated through extraction) |
| **9 Case Studies** | Same case study set as Molly build | HIGH |
| **Typography as Architecture (R1/R2 lineage)** | Yegge's voice rendered through Instrument Serif italic blockquotes -- literary framing of vernacular speech; 5-register typography encoding 5 "voices" in 3 typefaces | MEDIUM (inherited from R1/R2 editorial techniques) |

### Research Stream
**Primary:** Compositional Core (distilled findings)
**Secondary:** TC pipeline derivation (original metaphor generation)
**Note:** Same mediation pattern as Molly build. The control tower metaphor is original to this TC derivation, not directly from any R1-R5 source.

### Influence Types
- **Structural:** Industrial hierarchy (floor-plate metaphor for role tiers), 3-tier border system (4px town-level / 3px rig-level / 1px worker-level)
- **Perceptual:** Background arc (overseer warmth -> operational white -> workshop earthiness -> bedrock dark -> warmth return), spatial compression (64-80px opening -> 32-40px technical depth -> 48-64px resolution)
- **Conceptual:** Industrial control tower as metaphor for AI agent orchestration hierarchy (original to TC derivation)
- **Methodological:** TC pipeline conviction brief methodology

### Source Confidence Distribution
HIGH: 6 | MEDIUM: 2 | LOW: 0

---

## Cross-Cutting Analysis

### Most-Cited External Sources Across All 7 Pages

| External Source | Pages Citing It | Primary Contribution |
|-----------------|-----------------|---------------------|
| **Stripe Documentation** | OD-004, OD-006, AD-002, Molly, Yegge (5) | Density rhythm, hover-to-illuminate, code presentation, confidence switcher |
| **NNG (Nielsen Norman Group)** | OD-004 (3 findings), OD-006 (inherited), AD-002 (inherited), AD-005 (inherited) (4+) | Progressive disclosure, information scent, F-pattern scanning, neobrutalism |
| **Apple Human Interface Guidelines** | OD-004, OD-006, AD-002 (via R1-003), AD-005 (3+) | Viewport principle, collapsible headers, visual index |
| **Fiveable -- Editorial Design** | OD-004, OD-006, AD-002 (3) | Editorial spread pacing, micro/macro pacing, visual narratives |
| **Smashing Magazine** | OD-004, OD-006, AD-002 (3) | Sticky menus UX, compositional rhythm, typographic hierarchies |
| **Freytag's Dramatic Structure** | AD-002 (PRIMARY), OD-006 (inherited) (2) | 5-act narrative arc mapped to density compression |
| **Kevin Lynch -- "The Image of the City"** | AD-005 (PRIMARY), Molly (inherited) (2) | Hub-spoke urban theory, wayfinding, cartographic hierarchy |
| **Douglas Hofstadter (self-reference)** | AD-006, OD-006 (2) | Strange loops, recursive self-reference in visual grids |
| **Gwern.net** | OD-004 (1) | Per-section epistemic confidence vocabulary |
| **EA Forum / LessWrong** | OD-004 (1) | Epistemic status markers, crux transparency |
| **Maggie Appleton** | OD-004 (1) | Digital garden epistemic disclosure patterns |
| **Diataxis Framework** | OD-004 (1) | Documentation type taxonomy mapped to confidence |
| **Gestalt Psychology** | OD-006, AD-005 (2) | Pure distance law, 3-level spacing hierarchy |
| **Neobrutalism Design** | OD-006, AD-005 (2) | Solid offset depth, border-color hover |
| **MDN Web Docs** | OD-006 (CSS animations), R1 (Grid layouts) (2) | CSS scroll-driven animations, CSS Grid |

### Research Stream Contribution by Page

| Page | R1 | R2 | R3 | R4 | R5 | EXT-* | Primary Stream |
|------|----|----|----|----|----|----|----------------|
| OD-004 | 6 findings | -- | via DD | -- | -- | 18 (EXT-CONF) | R1 + EXT-CONF |
| OD-006 | 28 findings (ALL) | -- | via DD | -- | -- | 15 (EXT-CREATIVE) | R1 + EXT-CREATIVE |
| AD-002 | via OD-002 | 10 findings | via DD | 24 findings | -- | 5 (EXT-AXIS-F) + 11 (EXT-NARR) | R4 + EXT-AXIS-F |
| AD-005 | via OD-005 | 12 findings | via DD | 38 findings | -- | 5 (EXT-AXIS-CH) + 16 (EXT-SPAT) | R4 + EXT-AXIS-CH |
| AD-006 | via OD-006 | 12 findings | via DD | 42 findings | -- | 8 (EXT-AXIS-X) | R4 + EXT-AXIS-X |
| Molly | mediated | mediated | mediated | mediated | mediated | 0 direct | Compositional Core |
| Yegge | mediated | mediated | mediated | mediated | mediated | 0 direct | Compositional Core |

### Influence Type Distribution

| Influence Type | Explanation | Strongest Examples |
|----------------|-------------|-------------------|
| **Structural** | Layout geometry, grid systems, navigation architecture | Kevin Lynch hub-spoke (AD-005), F-pattern scanning (AD-002), 4-stratum limit (OD-004) |
| **Perceptual** | Spacing, typography, border-weight, background-color decisions | Border-weight gradient (OD-004), editorial spread pacing (AD-002), cinematic shot progression (AD-005) |
| **Conceptual** | The organizing metaphor or principle | Freytag's Dramatic Arc (AD-002), Epistemic status (OD-004), Hofstadterian self-reference (AD-006), Cartographic survey (Molly), Industrial control tower (Yegge) |
| **Methodological** | How to study/build documentation design | NNG progressive disclosure, Diataxis taxonomy, TC pipeline conviction brief methodology |

### Key Finding: The Mediation Pattern

The 5 exploration pages (OD-004, OD-006, AD-002, AD-005, AD-006) have **direct, explicit citations** to external sources -- typically 15-40 external references each, with URLs documented in the EXT-RESEARCH-REGISTRY.

The 2 pipeline build pages (Molly, Yegge) have **mediated citations** -- external influence reaches them through the distilled compositional core (identity.md, vocabulary.md, tokens.css, components.css, case studies). The pipeline builds do NOT directly reference R1-R5 or EXT-* findings. Instead, the TC pipeline generates ORIGINAL metaphors (cartographic survey, industrial control tower) that are compositionally novel while being constrained by the inherited design vocabulary.

This represents a deliberate architectural choice: explorations accumulate external knowledge, the compositional core distills it, and pipeline builds consume the distillation while adding their own creative layer.

---

## Appendix: Files Examined

### Research Files Read
- `/design-system/research/RESEARCH-SYNTHESIS.md` (full)
- `/design-system/research/R1-DOCUMENTATION-PATTERNS.md` (full)
- `/design-system/research/R2-CREATIVE-LAYOUTS.md` (full)
- `/design-system/research/R3-DENSITY-DIMENSIONS.md` (first 150 lines)
- `/design-system/research/R4-AXIS-INNOVATIONS.md` (first 200 lines)
- `/design-system/research/R5-COMBINATION-THEORY.md` (first 150 lines)

### Exploration HTML Files Read (headers/RAR sections)
- `/design-system/validated-explorations/organizational/OD-004-confidence.html` (first 150 lines)
- `/design-system/validated-explorations/organizational/OD-006-creative.html` (first 120 lines)
- `/design-system/axis/AD-002-f-pattern.html` (first 120 lines)
- `/design-system/axis/AD-005-choreography.html` (first 120 lines)
- `/design-system/axis/AD-006-compound.html` (first 120 lines)

### Registry/Index Files Read
- `/design-system/specification/provenance/EXT-RESEARCH-REGISTRY.md` (full -- 486 lines)
- `/design-system/validated-explorations/FINDINGS-INDEX.md` (first 100 lines)

### Pipeline Build Files Read
- `/ephemeral/builds/molly-panopticon-extraction-2026-03-02/_tc-brief.md` (first 100 lines)
- `/ephemeral/builds/yegge-gas-town-extraction-2026-03-02/_tc-brief.md` (first 60 lines)

### Files NOT Found
- No separate AD exploration HTML source files were in `validated-explorations/axis/` -- they are in `design-system/axis/` (found via Glob)
- No AD-specific FINDINGS-INDEX equivalent -- AD findings documented in `AD-outbound-findings.md`
