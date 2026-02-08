---
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
provenance: Stage 3 (OD) organizational explorations
last_updated: 2026-02-08
---

# Organizational Patterns
## Cognitive Rhythm for Documentation

---

## PROVENANCE NOTICE

These patterns are NOT arbitrary. Each was validated through OD explorations
with visual audit and adversarial review. See `provenance/stage-3-organization-od/`
for the full chain. The meta-insight from this stage: **Organization IS Density**
(OD-F-005) -- the organizational pattern does not "create" a density pattern;
it IS the density pattern. Same phenomenon, two perspectives.

| Pattern | Exploration | Score | Density Pairing | Finding IDs |
|---------|-------------|-------|-----------------|-------------|
| CONVERSATIONAL | OD-001 | ~35/40 | PULSE + TIDAL | OD-F-001, OD-F-002, OD-F-003, OD-F-004 |
| NARRATIVE | OD-002 | ~33/40 | CRESCENDO | (no unique OD-F; validated DD-F-002) |
| TASK-BASED | OD-003 | ~33/40 | ISLANDS + BOOKENDS | (validated DD-F-003) |
| CONFIDENCE-BASED | OD-004 | INCLUDE | GEOLOGICAL + CRESCENDO | (validated DD-F-004) |
| SPATIAL | OD-005 | INCLUDE | WAVE + ISLANDS | (validated DD-F-005) |
| CREATIVE/EMERGENT | OD-006 | INCLUDE (crown jewel) | ALL PATTERNS (FRACTAL primary) | OD-F-005, OD-F-006, OD-F-007, OD-F-008 |

**To understand WHY a pattern works:** Read its provenance in OD-SYNTHESIS.md

---

## The 6 Organizational Patterns

### CONVERSATIONAL -- Q&A Dialogue Structure
```
Q (sparse) -> A (dense) -> Q (sparse) -> A (dense)
```

**Status:** VALIDATED

**When to Use:** Content that naturally takes a question-and-answer form.
Best for tutorials, FAQ-style documentation, and explanatory content where
the reader's questions drive the information flow. The Q&A format makes
PULSE density automatic -- no explicit density manipulation needed.

**Research Provenance:**
- R1-001 (Density Rhythm) -- Q&A alternation creates PULSE
- R1-003 (Viewport Principle) -- one Q&A pair per viewport
- R1-010 (Grouping Proximity) -- Q tightly grouped with A
- R1-016 (Typography-First Hierarchy) -- size > weight > color
- R3-003 (PULSE) -- high-low-high alternation
- R3-034 (TIDAL) -- width variation signals density
- EXT-CONV-001 (Socratic Progressive Narrowing) -- broadQ -> narrowQ -> specificQ -> answer
- EXT-CONV-003 (Three-Level Gestalt Spacing) -- 8px within / 32px between / 64px chapters

**Validated By:** OD-001 (~35/40, Innovation: 8, Utility: 9, Soul: 9, Execution: 9)

**Density Pairing:** PULSE (primary) + TIDAL (secondary)
- Questions = sparse (narrow width, typographic breathing room)
- Answers = dense (full width, code blocks, detailed explanation)
- Width variation (Q at 60%, A at 100%) creates TIDAL secondary rhythm

**Soul Pieces Verified:** 5/5
- Sharp Edges: border-radius: 0 in :root
- No Shadows: box-shadow: none; solid offset for depth
- Serif = Wisdom: Instrument Serif for questions, titles, essence callouts
- Callout Family DNA: 4 callouts, 2-zone (label+body), 4px left border
- Squares Signal System: 8x8px question markers, no radius

**Key Insight:** Q&A pairs are inherent PULSE generators. The question is naturally
sparse (a single line, typographically distinct). The answer is naturally dense
(paragraphs, code, examples). This alternation creates PULSE without any explicit
density annotation. Organization IS density.

---

### NARRATIVE -- Story Arc Structure
```
Act I (sparse) -> Act II (medium) -> Act III (dense) -> Resolution (sparse)
```

**Status:** VALIDATED

**When to Use:** Content that benefits from progressive complexity buildup.
Best for onboarding flows, getting-started guides, and technical tutorials
where concepts build on each other. The narrative arc creates CRESCENDO
density automatically -- exposition is sparse, climax is dense.

**Research Provenance:**
- R1-001 (Density Rhythm) -- setup=sparse, conflict=medium, resolution=dense
- R1-003 (Viewport Principle) -- one narrative beat per viewport
- R1-016 (Typography-First Hierarchy) -- headings mirror arc (large setup -> dense resolution)
- R1-017 (Monospace Differentiation) -- code appears at conflict/resolution, not setup
- R1-018 (Pull Quotes) -- essence pullquote as act break
- R3-004 (CRESCENDO) -- progressive density increase validated
- R5-S1 (Setup-Payoff) -- narrative setup pays off in code
- DD-F-002 (CRESCENDO) -- sparse-to-dense progressive build from DD-002

**Validated By:** OD-002 (~33/40)

**Density Pairing:** CRESCENDO (primary)
- Act I (Exposition): sparse -- introduces concepts simply
- Act II (Rising Action): moderate -- increasing code and complexity
- Act III (Climax): dense -- full architectural solutions, complex code
- Resolution: sparse exhale -- summary, what was learned

**Soul Pieces Verified:** 5/5
- Sharp Edges: border-radius: 0 in :root
- No Shadows: box-shadow: none in :root
- Serif = Wisdom: Instrument Serif for act titles, narrative transitions, essence
- Callout Family DNA: 2-zone callouts, 4px left border, color-only differentiation
- Squares Signal System: square act markers, no radius

**Key Insight:** Narrative arc NATURALLY creates CRESCENDO density. Story progression
from simple exposition to complex climax mirrors sparse-to-dense. The tension meter
provides wayfinding without consuming content space. Code absence in early acts creates
anticipation that pays off when code appears at the climax.

---

### TASK-BASED -- Discrete Procedural Clusters
```
Overview (dense) -> [Island 1] (dense) -> sea (sparse) -> [Island 2] (dense) -> sea (sparse) -> Verification (dense)
```

**Status:** VALIDATED

**When to Use:** Procedural documentation where each task is self-contained.
Best for setup guides, deployment procedures, CI/CD pipelines, and any content
organized around discrete "do this, then this" steps. Each task island is
independently valuable. The BOOKENDS secondary pattern provides orientation
(dense front) and verification (dense back).

**Research Provenance:**
- R1-001 (Density Rhythm) -- dense clusters in sparse sea
- R1-003 (Viewport Principle) -- one task island per viewport scroll
- R1-016 (Typography-First Hierarchy) -- size > weight > color
- R1-019 (Tech Spec Aesthetic) -- sharp edges, monospace accents
- R3-047 (Density Contrast) -- surrounding calm amplifies island density
- DD-F-003 (ISLANDS) -- isolated clusters in sparse ocean from DD-003
- DD-F-006 (FRACTAL) -- self-similarity at 4 scales
- EXT-TASK-001 (Task-Oriented Design) -- each task = discrete island with 4px red left border
- EXT-TASK-002 (Progressive Disclosure) -- solid=complete, outline=current, gray=future
- EXT-TASK-006 (Multi-Step Forms) -- completed steps collapse, current expanded
- EXT-TASK-011 (Verification Checkpoints) -- "You should see" prefix in green callout
- EXT-TASK-012 (Error Recovery Islands) -- "If This Fails" in coral callout

**Validated By:** OD-003 (~33/40)

**Density Pairing:** ISLANDS (primary) + BOOKENDS (secondary)
- Task overview (front BOOKEND): dense orientation map
- Task islands: dense self-contained procedural clusters
- Sea between islands: sparse navigation space (>=80px gap)
- Verification (back BOOKEND): dense summary and checkpoint

**Soul Pieces Verified:** 5/5
- Sharp Edges: border-radius: 0 in :root
- No Shadows: box-shadow: none; solid offset for depth
- Serif = Wisdom: Instrument Serif for titles, task headers, essence callouts
- Callout Family DNA: 5 callouts, 2-zone (label+body), 4px left border, 5 color variants
- Squares Signal System: square step markers, task numbers, checklist boxes, progress squares

**Key Insight:** Discrete procedural clusters are inherently dense ISLANDS in a sparse sea.
Each task island contains prerequisites, steps, code, and a checkpoint -- a complete unit.
The sparse sea between islands provides cognitive recovery. BOOKENDS framing (dense overview
at front, dense verification at back) provides orientation and closure.

---

### CONFIDENCE-BASED -- Certainty Stratification
```
ESTABLISHED (sparse) -> PROBABLE (moderate) -> SPECULATIVE (dense) -> OPEN (densest)
```

**Status:** VALIDATED

**When to Use:** Content where certainty varies across sections. Best for API
stability guides, technology evaluation documents, architectural decision records,
and any documentation mixing established facts with emerging practices and open
questions. Density correlates inversely with confidence -- established knowledge
compresses, speculative knowledge expands with caveats.

**Research Provenance:**
- R1-001 (Density Rhythm) -- certain=sparse, uncertain=dense (the defining rhythm)
- R1-003 (Viewport Principle) -- each stratum transition at viewport boundary
- R1-004 (Three-Column Doctrine) -- certain/uncertain side-by-side comparison
- R1-006 (Horizontal Comparison Break) -- established vs speculative approaches
- DD-F-002 (CRESCENDO) -- progressive density increase as confidence decreases
- DD-F-004 (GEOLOGICAL) -- layered depth model with stratum boundaries from DD-004
- DD-F-010 (Org serves density) -- confidence organization serves GEOLOGICAL layers
- EXT-CONF-003 (Agentic Categorical Labels) -- words not percentages: Established/Probable/Speculative/Open
- EXT-CONF-005 (Appleton Epistemic Disclosure) -- "You Are Reading" orientation markers per stratum
- EXT-CONF-010 (NNG Information Scent) -- strong scent at every stratum boundary
- EXT-CONF-011 (EA Forum Epistemic) -- evidence DNA per stratum; crux transparency

**Validated By:** OD-004 (INCLUDE)

**Density Pairing:** GEOLOGICAL (primary) + CRESCENDO (secondary)
- Established stratum: sparse -- terse assertions, high typographic weight (700)
- Probable stratum: moderate -- some caveats, medium weight (400)
- Speculative stratum: dense -- hedged language, light weight (300), more evidence
- Open Questions stratum: densest -- multiple perspectives, extensive caveats

**Soul Pieces Verified:** 5/5
- Sharp Edges: border-radius: 0 in :root
- No Shadows: box-shadow: none; solid offset for depth
- Serif = Wisdom: Instrument Serif for titles, stratum headers, essence callouts
- Callout Family DNA: 6 callouts, 2-zone (label+body), 4px left border, 5 color variants
- Squares Signal System: square progress markers, inventory markers, square checks

**Key Insight:** Confidence-level organization creates GEOLOGICAL density where border
thickness (4px/2px/1px) and typographic weight (700/400/300) encode certainty without
color. Established knowledge compresses into bedrock (sparse, terse, confident).
Speculative knowledge expands into topsoil (dense, hedged, exploratory). The inverse
density-confidence relationship serves reader comprehension: what's certain is quick
to scan, what's uncertain demands careful reading.

---

### SPATIAL -- Hub-and-Spoke Map
```
Hub (sparse) -> Spoke 1 (dense) -> Hub (sparse) -> Spoke 2 (dense) -> Hub (sparse)
```

**Status:** VALIDATED

**When to Use:** Content organized as territories or zones that users navigate
between. Best for component architecture overviews, system maps, feature
catalogs, and any documentation with a central overview and explorable subtopics.
The hub-spoke structure creates WAVE oscillation automatically -- sparse hub
overviews alternate with dense spoke content.

**Research Provenance:**
- R1-001 (Density Rhythm) -- hub=sparse overview, spoke=dense detail
- R1-003 (Viewport Principle) -- hub is one viewport, each spoke is scrollable
- R1-016 (Typography-First Hierarchy) -- size > weight > color
- R1-018 (Pull Quotes) -- essence pullquote at spoke transitions
- R1-019 (Tech Spec Aesthetic) -- sharp edges, mono accents
- R3-006 (WAVE) -- hub(sparse) -> spoke(dense) -> hub(sparse return) oscillation
- R3-047 (ISLANDS/Density Contrast) -- each spoke is a self-contained content island
- DD-F-006 (FRACTAL) -- self-similar at 4 scales
- EXT-SPAT-001 (Hub-and-Spoke ISLANDS) -- square tiles in CSS Grid
- EXT-SPAT-002 (Breadcrumbs as WAVE Trigger) -- triangle separators
- EXT-SPAT-005 (Cartographic Hierarchy) -- figure-ground, type hierarchy
- EXT-SPAT-009 (Alternation for Rhythm) -- content block -> gap -> content block
- EXT-SPAT-012 (ECS Modular Entities) -- each spoke = modular entity

**Validated By:** OD-005 (INCLUDE)

**Density Pairing:** WAVE (primary) + ISLANDS (secondary)
- Hub: sparse overview with territory card grid (3x2)
- Spoke: dense detail with full code examples, callouts, checkpoints
- Return-to-hub: sparse transition with "Return to Map" navigation
- Each spoke is a self-contained ISLAND

**Soul Pieces Verified:** 5/5
- Sharp Edges: border-radius: 0 in :root
- No Shadows: box-shadow: none; solid offset for depth
- Serif = Wisdom: Instrument Serif for titles, territory names, breadcrumbs
- Callout Family DNA: 5 callout types, 2-zone (label+body), 4px left border, 5 color variants
- Squares Signal System: square territory markers, no radius

**Key Insight:** Hub-and-spoke spatial organization NATURALLY creates WAVE density.
Users depart from a sparse hub map into dense spoke content, then return to the
sparse hub. The oscillation between overview and detail is the WAVE. Each spoke is
simultaneously a WAVE trough (dense) and an ISLAND (self-contained). The "Return to
Map" navigation creates explicit breathing points between dense zones.

---

### CREATIVE/EMERGENT -- Synthesis Meta-Pattern
```
[Mode 1 = Density 1] -> [Mode 2 = Density 2] -> [Mode 3 = Density 3] -> ...
```

**Status:** VALIDATED (Crown Jewel)

**When to Use:** Content that naturally shifts between organizational modes within
a single document. Best for design system documentation, architectural overviews,
retrospectives, and any meta-documentation that discusses multiple approaches. The
emergent pattern uses ALL prior organizational patterns in sequence, proving that
each generates its own density automatically.

**Research Provenance:**
- R1-001 through R1-011 + R1-013, R1-015 through R1-019, R1-022, R1-025, R1-026 (20 of 28 R-1 findings)
- R3-036 / DD-F-006 (FRACTAL) -- self-similar at ALL 4 scales (most fractal of all ODs)
- OD-F-001 through OD-F-004 (all prior OD findings synthesized)
- EXT-CREATIVE-001 (THE SOLID OFFSET) -- neobrutalist depth via pseudo-elements
- EXT-CREATIVE-002 (THE TYPOGRAPHIC HIERARCHY CASCADE) -- 5-level 1.5x system
- EXT-CREATIVE-003 (THE SCROLL WITNESS) -- CSS-only section progress tracking
- EXT-CREATIVE-004 (THE ARRIVING WISDOM) -- scroll-triggered staggered reveal
- EXT-CREATIVE-005 (THE EDITORIAL DROP) -- serif drop caps at section openings
- EXT-CREATIVE-006 (THE SEMANTIC BRIDGE) -- hover concept -> highlight code
- EXT-CREATIVE-007 (THE DUAL LENS) -- Why/How toggle between serif/monospace
- EXT-CREATIVE-008 (THE COLLAPSING HEADER) -- sticky headers that shrink on scroll
- EXT-CREATIVE-009 (THE VISUAL INDEX) -- specimen-sheet grid overview

**Validated By:** OD-006 (INCLUDE -- crown jewel, targeting >=36/40)

**Density Pairing:** EMERGENT -- all 6 DD density patterns synthesized through FRACTAL (primary)
- Section 1 (Conversational mode): PULSE density emerged
- Section 2 (Narrative mode): CRESCENDO density emerged
- Section 3 (Task-Based mode): ISLANDS density emerged
- Section 4 (Confidence-Based mode): GEOLOGICAL density emerged
- Section 5 (Spatial mode): WAVE density emerged
- Section 6 (Synthesis): All density patterns in FRACTAL meta-structure

**Soul Pieces Verified:** 5/5
- Sharp Edges: border-radius: 0 in :root
- No Shadows: box-shadow: none; solid offset for depth
- Serif = Wisdom: Instrument Serif for titles, questions, essence, drop caps
- Callout Family DNA: 5 callout types, 2-zone (label+body), 4px left border, 5 color variants
- Squares Signal System: square progress markers, section indicators, step numbers

**Key Insight:** Organization IS Density (OD-F-005). The organizational pattern does
not "create" density -- it IS density. Same phenomenon observed from two perspectives.
A page that uses all five prior OD patterns proves this: each section's density shifts
automatically when its organizational mode shifts, with zero explicit density manipulation.
This is the signature discovery of the OD stage and the single most important insight
for all subsequent AD/CD work.

---

## Pattern Selection Guide

| Content Type | Pattern | Density Generated | Rationale |
|--------------|---------|-------------------|-----------|
| Tutorial / FAQ / Explainer | CONVERSATIONAL | PULSE | Q&A naturally creates inhale/exhale rhythm |
| Onboarding / Getting Started | NARRATIVE | CRESCENDO | Story arc builds from simple to complex |
| Setup / Deployment / Procedures | TASK-BASED | ISLANDS + BOOKENDS | Discrete tasks = dense clusters in sparse sea |
| API Stability / Eval / ADR | CONFIDENCE-BASED | GEOLOGICAL | Certainty strata create natural layering |
| Architecture Overview / Feature Catalog | SPATIAL | WAVE + ISLANDS | Hub-spoke creates overview/detail oscillation |
| Design System Docs / Meta-Documentation | CREATIVE/EMERGENT | EMERGENT (FRACTAL) | Multi-mode content generates multi-density |

---

## Key Rules

### 1. Organization Determines Density (OD-F-005)

Do not annotate density separately from organization. Choose the organizational
pattern; the density follows automatically.

### 2. DD-F-006 Fractal at 4 Scales

Every organizational pattern MUST demonstrate self-similarity at page, section,
component, and character scales. This is inherited from DD and is non-negotiable.

### 3. Mode-Transition Breathing (OD-F-007)

When switching organizational modes within a document (as in the CREATIVE/EMERGENT
pattern), insert breathing zones between modes to prevent cognitive whiplash.

### 4. Bespoke Research Elevates Quality

Patterns validated with bespoke external research (EXT-*) consistently scored
higher than those using only pre-existing R-1 findings. Commission targeted
research per-pattern when building explorations.

### 5. Max 2 Callouts Per Viewport

Inherited from DD. More than 2 callouts per viewport section causes alarm fatigue.
This applies regardless of organizational pattern.

---

## Cross-Reference: Organizational to Density

| Organizational Pattern | Primary Density | Secondary Density | DD Exploration |
|----------------------|-----------------|-------------------|----------------|
| CONVERSATIONAL | PULSE | TIDAL | DD-001 (PULSE), DD-005 (TIDAL) |
| NARRATIVE | CRESCENDO | -- | DD-002 (CRESCENDO) |
| TASK-BASED | ISLANDS | BOOKENDS | DD-003 (ISLANDS) |
| CONFIDENCE-BASED | GEOLOGICAL | CRESCENDO | DD-004 (GEOLOGICAL), DD-002 (CRESCENDO) |
| SPATIAL | WAVE | ISLANDS | DD-001 (WAVE ref), DD-003 (ISLANDS) |
| CREATIVE/EMERGENT | EMERGENT (all) | FRACTAL | DD-006 (FRACTAL) |

---

*Generated: 2026-02-08 by chain-b agent (provenance-fix team)*
*Provenance: Stage 3 OD validated patterns -- the cognitive rhythm vocabulary for KortAI documentation*
