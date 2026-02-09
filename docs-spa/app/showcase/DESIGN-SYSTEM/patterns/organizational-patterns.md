---
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
provenance: Stage 3 (OD) organizational explorations
last_updated: 2026-02-09
---

# Organizational Patterns
## Cognitive Rhythm for Documentation

---

## PROVENANCE NOTICE

These patterns are NOT arbitrary. Each was validated through OD explorations
with visual audit, adversarial review, and 3-wave re-enrichment (42 new EXT-*
findings, 27 builder discoveries, convention unification). See
`provenance/stage-3-organization-od/` for the full chain. The meta-insight
from this stage: **Organization IS Density** (OD-F-005) -- the organizational
pattern does not "create" a density pattern; it IS the density pattern. Same
phenomenon, two perspectives.

| Pattern | Exploration | Score (v3) | Density Pairing | Finding IDs | EXT-* Applied |
|---------|-------------|------------|-----------------|-------------|---------------|
| CONVERSATIONAL | OD-001 | 37/40 | PULSE + TIDAL | OD-F-001, OD-F-002, OD-F-003, OD-F-004 | 11 EXT-CONV + 3 EXT-DENSITY |
| NARRATIVE | OD-002 | 35/40 | CRESCENDO | (validated DD-F-002) | 11 EXT-NARR |
| TASK-BASED | OD-003 | ~35/40 | ISLANDS + BOOKENDS | (validated DD-F-003) | 19 EXT-TASK |
| CONFIDENCE-BASED | OD-004 | 34/40 | GEOLOGICAL + CRESCENDO | (validated DD-F-004) | 18 EXT-CONF |
| SPATIAL | OD-005 | 35/40 | WAVE + ISLANDS | (validated DD-F-005) | 18 EXT-SPAT |
| CREATIVE/EMERGENT | OD-006 | 37/40 (crown jewel) | ALL PATTERNS (FRACTAL primary) | OD-F-005, OD-F-006, OD-F-007, OD-F-008 | 15 EXT-CREATIVE |

**Total research provenance:** 95 EXT-* resources (91 applied, 95.8% rate) + 22 of 28 R-1 findings (78.6%) across all 6 ODs.

**To understand WHY a pattern works:** Read its provenance in OD-SYNTHESIS.md

---

## The 6 Organizational Patterns

### CONVERSATIONAL -- Q&A Dialogue Structure
```
Q (sparse) -> A (dense) -> Q (sparse) -> A (dense)
```

**Status:** VALIDATED (v3, 37/40)

**When to Use:** Content that naturally takes a question-and-answer form.
Best for tutorials, FAQ-style documentation, and explanatory content where
the reader's questions drive the information flow. The Q&A format makes
PULSE density automatic -- no explicit density manipulation needed.

**Research Provenance:**
- R1-001 (Density Rhythm) -- Q&A alternation creates PULSE
- R1-003 (Viewport Principle) -- one Q&A pair per viewport
- R1-010 (Grouping Proximity) -- Q tightly grouped with A
- R1-016 (Typography-First Hierarchy) -- size > weight > color
- R1-020, R1-028 -- applied in v3 re-enrichment
- R3-003 (PULSE) -- high-low-high alternation
- R3-034 (TIDAL) -- width variation signals density
- EXT-CONV-001 (Socratic Progressive Narrowing) -- broadQ -> narrowQ -> specificQ -> answer
- EXT-CONV-003 (Three-Level Gestalt Spacing) -- 8px within / 32px between / 64px chapters
- EXT-CONV-006 through EXT-CONV-011 (v3 re-enrichment: bold minimalism, TIDAL width modulation, progressive narrowing, Gestalt micro-spacing, question margin offset, dark code blocks)

**Validated By:** OD-001 (37/40, I:9 U:9 S:10 E:9)

**Density Pairing:** PULSE (primary) + TIDAL (secondary)
- Questions = sparse (narrow width, typographic breathing room)
- Answers = dense (full width, code blocks, detailed explanation)
- Width variation (Q at 60%, A at 100%) creates TIDAL secondary rhythm

**Soul Pieces Verified:** 5/5
- Sharp Edges: border-radius: 0 in :root
- No Shadows: box-shadow: none; solid offset for depth (opacity === 1, binary gate)
- Serif = Wisdom: Instrument Serif for questions, titles, essence callouts
- Callout Family DNA: 4 callouts, 2-zone (label+body), 4px left border
- Squares Signal System: 8x8px question markers, no radius

**Re-Enrichment Discoveries:**
- Zone token naming (--color-zone-sparse/dense/breathing) proves OD-F-005 at token level
- Semi-transparent offsets fixed (opacity must be === 1, binary rule)
- Convention type scale inherited FROM OD-001 (the formalization source)

**Key Insight:** Q&A pairs are inherent PULSE generators. The question is naturally
sparse (a single line, typographically distinct). The answer is naturally dense
(paragraphs, code, examples). This alternation creates PULSE without any explicit
density annotation. Organization IS density.

---

### NARRATIVE -- Story Arc Structure
```
Act I (sparse) -> Act II (medium) -> Act III (dense) -> Resolution (sparse)
```

**Status:** VALIDATED (v3, 35/40)

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
- EXT-NARR-001 through EXT-NARR-011 (v3 re-enrichment: Freytag 5-beat, inciting incident, code progressive disclosure, visual pacing, typographic hierarchy, pull quotes at act breaks, tension meter scrollytelling, four editorial pillars, progressive disclosure labels, decision matrix at climax, micro/macro pacing)

**Validated By:** OD-002 (35/40, I:8 U:8 S:10 E:9)

**Density Pairing:** CRESCENDO (primary)
- Act I (Exposition): sparse -- introduces concepts simply
- Act II (Rising Action): moderate -- increasing code and complexity
- Act III (Climax): dense -- full architectural solutions, complex code
- Falling Action: moderate -- implications, trade-offs
- Resolution: sparse exhale -- summary, what was learned

**Soul Pieces Verified:** 5/5
- Sharp Edges: border-radius: 0 in :root
- No Shadows: box-shadow: none in :root
- Serif = Wisdom: Instrument Serif for act titles, narrative transitions, essence
- Callout Family DNA: 2-zone callouts, 4px left border, color-only differentiation
- Squares Signal System: square act markers, no radius

**Re-Enrichment Discoveries:**
- Freytag 5-beat expansion validated (3 acts -> 5 beats: exposition, rising action, climax, falling action, resolution)
- Progressive disclosure labels make hermeneutic code VISIBLE to readers
- Research Debt RD-1 RESOLVED (OD-002 now has 11 EXT-NARR resources)

**Key Insight:** Narrative arc NATURALLY creates CRESCENDO density. Story progression
from simple exposition to complex climax mirrors sparse-to-dense. The tension meter
provides wayfinding without consuming content space. CRESCENDO needs a formal exhale
(falling action) -- without it, dense climaxes exit abruptly.

---

### TASK-BASED -- Discrete Procedural Clusters
```
Overview (dense) -> [Island 1] (dense) -> sea (sparse) -> [Island 2] (dense) -> sea (sparse) -> Verification (dense)
```

**Status:** VALIDATED (v3, ~35/40)

**When to Use:** Procedural documentation where each task is self-contained.
Best for setup guides, deployment procedures, CI/CD pipelines, and any content
organized around discrete "do this, then this" steps. Each task island is
independently valuable. The BOOKENDS secondary pattern provides orientation
(dense front) and verification (dense back). ISLANDS operates in two modes:
static (spatial arrangement) and interactive (wayfinding via collapse/expand).

**Research Provenance:**
- R1-001 (Density Rhythm) -- dense clusters in sparse sea
- R1-003 (Viewport Principle) -- one task island per viewport scroll
- R1-016 (Typography-First Hierarchy) -- size > weight > color
- R1-019 (Tech Spec Aesthetic) -- sharp edges, monospace accents
- R3-047 (Density Contrast) -- surrounding calm amplifies island density
- DD-F-003 (ISLANDS) -- isolated clusters in sparse ocean from DD-003
- DD-F-006 (FRACTAL) -- self-similarity at 4 scales
- EXT-TASK-001 through EXT-TASK-012 (original build: task-oriented design, progressive disclosure, multi-step forms, verification checkpoints, error recovery islands)
- EXT-TASK-013 through EXT-TASK-019 (v3 re-enrichment: keyboard navigation, collapsible islands, task-map visualization, hierarchical task breakdown, step indicator enhancement, completion summary, error state patterns)

**Validated By:** OD-003 (~35/40, v3)

**Density Pairing:** ISLANDS (primary) + BOOKENDS (secondary)
- Task overview (front BOOKEND): dense orientation map
- Task islands: dense self-contained procedural clusters
- Sea between islands: sparse navigation space (>=80px gap)
- Verification (back BOOKEND): dense summary and checkpoint

**ISLANDS Dual Mode (Re-Enrichment Discovery):**
- **Static mode:** Spatial arrangement -- reader scrolls through islands sequentially
- **Interactive mode:** Wayfinding system via `<details>` collapse/expand. When collapsed, 6 island headers form a visual table of contents. Each expansion is a deliberate "visit." The READER controls density distribution.

**Compound Density:** OD-003 achieves ISLANDS + CRESCENDO simultaneously at different scales. Island SEQUENCE is CRESCENDO (beginner -> advanced). Island ARRANGEMENT is ISLANDS. Two patterns at different fractal scales.

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

**Status:** VALIDATED (v3, 34/40)

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
- EXT-CONF-001 through EXT-CONF-012 (original build: categorical labels, epistemic disclosure, information scent, evidence DNA)
- EXT-CONF-013 through EXT-CONF-018 (v3 re-enrichment: border-weight gradient, stratum transitions, survey visualization, dark header anchoring, zone-color integration, type-meta tokenization)

**Validated By:** OD-004 (34/40, I:8 U:9 S:9 E:8)

**Density Pairing:** GEOLOGICAL (primary) + CRESCENDO (secondary)
- Established stratum: sparse -- terse assertions, high typographic weight (700), 4px left border
- Probable stratum: moderate -- some caveats, medium weight (400), 3px left border
- Speculative stratum: dense -- hedged language, light weight (300), 2px left border
- Open Questions stratum: densest -- multiple perspectives, extensive caveats, 1px left border

**Border-Weight Gradient (Re-Enrichment Discovery):**
The 4px/3px/2px/1px left-border gradient encoding Established/Probable/Speculative/Open
makes OD-004's geological metaphor VISIBLE at page scale. A squint test at 50% zoom
shows the 4-layer gradient clearly. This is GEOLOGICAL encoding through flat 2D signals
(border width), not physical depth (shadows/transforms). The geological metaphor is
achieved WITHOUT being PHYSICAL -- answering the Wave 2 forward question definitively.

**The 3-category border system and semantic encoding coexist on ORTHOGONAL axes:**
stratum LEFT borders (4px/3px/2px/1px) are semantic confidence signals on the Y-axis.
Content-block TOP borders are data separators (always 1px per Cat 2) on the X-axis.

**Soul Pieces Verified:** 5/5
- Sharp Edges: border-radius: 0 in :root
- No Shadows: box-shadow: none; solid offset for depth
- Serif = Wisdom: Instrument Serif for titles, stratum headers, essence callouts
- Callout Family DNA: 6 callouts, 2-zone (label+body), 4px left border, 5 color variants
- Squares Signal System: square progress markers, inventory markers, square checks

**Key Insight:** Confidence-level organization creates GEOLOGICAL density where border
thickness and typographic weight encode certainty without color. The inverse
density-confidence relationship serves reader comprehension: what's certain is quick
to scan, what's uncertain demands careful reading.

---

### SPATIAL -- Hub-and-Spoke Map
```
Hub (sparse) -> Spoke 1 (dense) -> Hub (sparse) -> Spoke 2 (dense) -> Hub (sparse)
```

**Status:** VALIDATED (v3, 35/40)

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
- EXT-SPAT-001 through EXT-SPAT-012 (original build: hub-and-spoke ISLANDS, breadcrumb WAVE triggers, cartographic hierarchy, alternation for rhythm, modular entities)
- EXT-SPAT-013 through EXT-SPAT-018 (v3 re-enrichment: flat hover replacement, keyboard spatial navigation, WAVE self-documentation sidebar, density cascade, territory completion markers, reduced-motion prophylactic)

**Validated By:** OD-005 (35/40, I:8 U:9 S:9 E:9)

**Density Pairing:** WAVE (primary) + ISLANDS (secondary)
- Hub: sparse overview with territory card grid (3x2)
- Spoke: dense detail with full code examples, callouts, checkpoints
- Return-to-hub: sparse transition with "Return to Map" navigation
- Each spoke is a self-contained ISLAND

**Dark Header 3-Phase Density Cascade (Re-Enrichment Discovery):**
Dark header -> light hub -> dense spokes creates a three-phase density cascade
(landmark -> breathing -> content) that amplifies the WAVE pattern more dramatically
than on conversational or narrative ODs. The hub-spoke pattern amplifies the
convention spec's dark header into a Kevin Lynch wayfinding anchor.

**WAVE Self-Documentation (Re-Enrichment Discovery):**
OD-005's fixed sidebar wave indicator (EXT-SPAT-018) transforms the page from
"demonstrates WAVE density" to "SHOWS its own density in real time." First OD where
the hypothesis is empirically visible to the reader.

**Soul Pieces Verified:** 5/5
- Sharp Edges: border-radius: 0 in :root
- No Shadows: box-shadow: none; solid offset for depth
- Serif = Wisdom: Instrument Serif for titles, territory names, breadcrumbs
- Callout Family DNA: 5 callout types, 2-zone (label+body), 4px left border, 5 color variants
- Squares Signal System: square territory markers, no radius

**Key Insight:** Hub-and-spoke spatial organization NATURALLY creates WAVE density.
Users depart from a sparse hub map into dense spoke content, then return to the
sparse hub. The oscillation between overview and detail is the WAVE. Each spoke is
simultaneously a WAVE trough (dense) and an ISLAND (self-contained).

---

### CREATIVE/EMERGENT -- Synthesis Meta-Pattern
```
[Mode 1 = Density 1] -> [Mode 2 = Density 2] -> [Mode 3 = Density 3] -> ...
```

**Status:** VALIDATED (Crown Jewel, v3, 37/40)

**When to Use:** Content that naturally shifts between organizational modes within
a single document. Best for design system documentation, architectural overviews,
retrospectives, and any meta-documentation that discusses multiple approaches. The
emergent pattern uses ALL prior organizational patterns in sequence, proving that
each generates its own density automatically.

**Research Provenance:**
- R1-001 through R1-011 + R1-013, R1-015 through R1-019, R1-020, R1-022, R1-025, R1-026, R1-028 (22 of 28 R-1 findings)
- R3-036 / DD-F-006 (FRACTAL) -- self-similar at ALL 5 scales (navigation, page, section, component, character)
- OD-F-001 through OD-F-004 (all prior OD findings synthesized)
- EXT-CREATIVE-001 through EXT-CREATIVE-009 (original build: solid offset, typographic hierarchy cascade, scroll witness, arriving wisdom, editorial drop, semantic bridge, dual lens, collapsing header, visual index)
- EXT-CREATIVE-010 through EXT-CREATIVE-015 (v3 re-enrichment: fractal annotation layer, density self-documentation, fractal TOC, pattern echo grid, flat hover replacement, reduced-motion integration)

**Validated By:** OD-006 (37/40, I:9 U:10 S:9 E:9)

**Density Pairing:** EMERGENT -- all 6 DD density patterns synthesized through FRACTAL (primary)
- Section 1 (Conversational mode): PULSE density emerged
- Section 2 (Narrative mode): CRESCENDO density emerged
- Section 3 (Task-Based mode): ISLANDS density emerged
- Section 4 (Confidence-Based mode): GEOLOGICAL density emerged
- Section 5 (Spatial mode): WAVE density emerged
- Section 6 (Synthesis): All density patterns in FRACTAL meta-structure

**5th Fractal Scale Discovery (Re-Enrichment):**
DD-F-006 specified 4 fractal scales (page, section, component, character). OD-006's
re-enrichment revealed a 5th: NAVIGATION. The combination of fractal annotation layer
(EXT-CREATIVE-010) + pattern echo grid (EXT-CREATIVE-013) + fractal TOC (EXT-CREATIVE-012)
creates an emergent navigation scale where the document reflects itself at 5 levels.
The 5th scale emerges from the COMBINATION of enrichment techniques, not from any single one.
This validates OD-F-008 (Creative Techniques Compound) at meta-level.

**Zone Token Bookend Validation (Re-Enrichment):**
Zone tokens (--color-zone-sparse/dense/breathing) are validated as bookend pair: OD-001
(first OD) and OD-006 (crown jewel OD) both carry zone tokens. The token name itself
encodes both spatial architecture ("zone") and density dimension ("sparse/dense/breathing").
QUADRUPLE validation: tokens, layout, content, AND annotations all prove OD-F-005.

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

### 2. DD-F-006 Fractal at 5 Scales

Every organizational pattern MUST demonstrate self-similarity at navigation (where
applicable), page, section, component, and character scales. OD-006 proved the 5th
scale (navigation) is achievable through enrichment technique combination.

### 3. Mode-Transition Breathing (OD-F-007)

When switching organizational modes within a document (as in the CREATIVE/EMERGENT
pattern), insert breathing zones between modes to prevent cognitive whiplash.

### 4. Bespoke Research Elevates Quality

Patterns validated with bespoke external research (EXT-*) consistently scored
higher than those using only pre-existing R-1 findings. All 6 ODs now have
bespoke research (42 new EXT-* added during re-enrichment).

### 5. Max 2 Callouts Per Viewport

Inherited from DD. More than 2 callouts per viewport section causes alarm fatigue.
This applies regardless of organizational pattern.

### 6. ANTI-PHYSICAL Identity (20/20 SOUL FAILs)

The soul rejects any technique that makes flat screens simulate three-dimensional
physical space: depth illusions, animated z-movement, rounded shapes suggesting
physical objects, gradients suggesting light/material, parallax implying z-space.
This is diagnostic, not prescriptive -- use it to predict which techniques will fail.

### 7. Dark Header as Universal Amplifier

The dark full-bleed header (#1A1A1A) creates a stronger LANDMARK effect regardless
of organizational pattern. Validated across all 6 ODs in all 3 re-enrichment waves.

---

## Cross-Reference: Organizational to Density

| Organizational Pattern | Primary Density | Secondary Density | DD Exploration | EXT-* Count |
|----------------------|-----------------|-------------------|----------------|-------------|
| CONVERSATIONAL | PULSE | TIDAL | DD-001 (PULSE), DD-005 (TIDAL) | 14 (11 CONV + 3 DENSITY) |
| NARRATIVE | CRESCENDO | -- | DD-002 (CRESCENDO) | 11 (NARR) |
| TASK-BASED | ISLANDS | BOOKENDS | DD-003 (ISLANDS) | 19 (TASK) |
| CONFIDENCE-BASED | GEOLOGICAL | CRESCENDO | DD-004 (GEOLOGICAL), DD-002 (CRESCENDO) | 18 (CONF) |
| SPATIAL | WAVE | ISLANDS | DD-001 (WAVE ref), DD-003 (ISLANDS) | 18 (SPAT) |
| CREATIVE/EMERGENT | EMERGENT (all) | FRACTAL | DD-006 (FRACTAL) | 15 (CREATIVE) |

---

## COMPACTION-SAFE SUMMARY

- **File:** organizational-patterns.md
- **Purpose:** 6 validated organizational patterns for KortAI documentation -- cognitive rhythm vocabulary
- **Scores (v3):** CONVERSATIONAL 37, NARRATIVE 35, TASK-BASED ~35, CONFIDENCE-BASED 34, SPATIAL 35, CREATIVE/EMERGENT 37 (crown jewel)
- **Research:** 95 EXT-* total (91 applied, 95.8%), 22/28 R-1 (78.6%). All 6 ODs have bespoke research.
- **Meta-insight:** Organization IS Density (OD-F-005) -- choosing org pattern automatically determines density
- **Key re-enrichment discoveries:** ISLANDS dual mode, compound density, 5th fractal scale, border-weight gradient, ANTI-PHYSICAL identity (20/20), dark header universal amplifier, zone token bookend validation
- **Convention:** Unified via OD-CONVENTION-SPEC.md (dark code blocks, dark header, zone tokens, type scale, border system)
- **Soul:** 0 violations across all 6 ODs. 5 visual soul pieces remain complete. No cognitive soul piece discovered.
- **Status:** COMPLETE (post-re-enrichment v3)

---

*Updated: 2026-02-09 by synthesizer agent (od-reenrich-resume team)*
*Original: 2026-02-08 by chain-b agent (provenance-fix team)*
*Provenance: Stage 3 OD validated patterns -- the cognitive rhythm vocabulary for KortAI documentation*
