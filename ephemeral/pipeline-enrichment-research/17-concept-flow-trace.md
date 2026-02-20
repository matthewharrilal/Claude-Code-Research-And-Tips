# Concept Flow Trace: Compression Through the Pipeline

**Agent:** concept-flow-tracer
**Date:** 2026-02-20
**Method:** Exhaustive line-by-line trace of 9 compositional intelligence concepts (8 requested + 1 bonus: Semantic Directions) through 6 pipeline files (~2,947 lines total)

---

## Pipeline Architecture (Stage Map)

```
ENTRY                    ORCHESTRATOR              BUILDER                 GATES                    PA                      WEAVER              FIX CYCLE
conventions-brief.md --> SKILL.md spawn prompt --> (what builder sees) --> gate-runner.md --------> flagship-pa-questions --> synthesis --------> returns to builder
403 lines                408 lines                 ~240 lines visible      992 lines                144 lines               (in SKILL.md)       (in SKILL.md)
                         (75 lines builder         to builder agent        21 gates                 8 Tier 5 questions      PA-05 + Tier 5      fix instructions
                          spawn prompt)                                                             + 48 standard           score               + gate failures
```

**Critical insight:** The builder spawn prompt (SKILL.md lines 45-83) is only ~39 lines of instruction. It says "Read conventions-brief.md" -- meaning the builder sees the FULL 403-line conventions brief. But what the orchestrator ADDS to that reading is only 39 lines of framing. The builder's world-model is almost entirely the conventions brief itself.

---

## CONCEPT 1: 6 Channels (Chromatic, Typographic, Spatial, Structural, Behavioral, Material)

### Stage-by-Stage Trace

**ENTRY (conventions-brief.md): 27 lines**
- Section 4 "MULTI-COHERENCE" (lines 92-123): Full definition of all 6 channels
  - Lines 96-101: Each channel named + CSS property mapped (6 lines, one per channel)
  - Lines 103: Primary 4 identified (Chromatic, Typographic, Spatial, Structural)
  - Lines 105-116: Semantic direction + multi-coherence example (12 lines)
  - Lines 118: Layout diversity shortcut (free channel shifts from topology change)
  - Lines 120-122: Global coherence requirement for Flagship
  - TOTAL: 27 lines of channel-specific content

**ORCHESTRATOR (SKILL.md spawn prompt): 3 lines**
- Line 49: "conventions-brief.md -- YOUR PRIMARY GUIDANCE" (implicit: channels are IN the brief)
- Line 64: "After borders: >= 1 structural border-left (3px+)? >= 2 distinct border weights?" (Structural channel checkpoint)
- Line 65: "After typography: heading-to-meta ratio >= 3:1? Adjacent zone font-size delta >= 2px?" (Typographic channel checkpoint)
- Channels are NOT named in the spawn prompt. The word "channel" does not appear.
- TOTAL: 3 lines touching channel concepts (without naming them)

**BUILDER (what's visible): 27 lines (from brief) + 3 lines (from spawn)**
- Builder reads conventions-brief in full, so sees all 27 lines
- Spawn prompt adds 3 checkpoint lines
- TOTAL VISIBLE: 30 lines

**GATES (gate-runner.md): 68 lines**
- SC-13 (lines 326-406): Multi-Coherence gate -- measures ALL 6 channels at every boundary
  - Lines 334-341: All 6 channels listed with measurement method (8 lines)
  - Lines 350-398: Full JavaScript implementation measuring each channel (48 lines)
  - Lines 400-402: Known limitation -- counts but cannot judge semantic direction
  - TOTAL: 80 lines, but ONLY measures binary shift (yes/no), NOT direction alignment

- SC-13B (lines 508-525): Direction Coherence (ADVISORY only)
  - Lines 516-519: Classifies each shift as INTENSIFYING (+) or RELAXING (-)
  - Line 524: "Confidence: ~50%"
  - TOTAL: 18 lines, but ADVISORY (does not block)

- SC-14 (lines 409-464): Sub-Perceptual Prevention
  - Touches Typographic (letter-spacing) and Chromatic (background) channels specifically
  - TOTAL: 56 lines, but focused on perception thresholds, not channel architecture

- SC-09 (lines 172-206): Background Delta -- Chromatic channel specifically
  - TOTAL: 35 lines

- SC-11 (lines 247-294): Typography Zones -- Typographic channel specifically
  - TOTAL: 48 lines

- SC-15 (lines 468-505): Border Presence -- Structural channel specifically
  - TOTAL: 38 lines

- TOTAL GATE LINES TOUCHING CHANNELS: ~275 lines across 6 gates
- BUT: Each gate measures ONE channel in isolation. Only SC-13 looks at channels TOGETHER.

**PA (flagship-pa-questions.md): 18 lines**
- PA-61 (lines 23-33): "Do different visual properties...seem to have their own independent rhythms?" -- measures channel independence
- PA-62 (lines 37-47): "Count how many visual properties change simultaneously" -- measures multi-coherence
- PA-65 (lines 79-89): "If this page were music, would it be...an ensemble with different parts?" -- measures multi-voice composition
- TOTAL: ~33 lines across 3 questions
- BUT: Questions use perceptual language ("visual properties"), never "channels"

**WEAVER (SKILL.md lines 253-295):**
- Line 284: "Multi-coherence perceptible: [MET/FAILED]" -- single binary criterion
- TOTAL: 1 line for channels

**FIX CYCLE (SKILL.md lines 299-346):**
- Lines 310-311: "PA Top-5 Issues" routed to builder -- channel info arrives as auditor quotes
- No structured channel-level fix routing
- TOTAL: 0 lines explicitly about channels

### Compression Loss Table

| Stage | Lines In | Lines Out | Ratio | What Survived | What Was Lost |
|-------|----------|-----------|-------|---------------|---------------|
| Entry (brief) | 27 | 27 | 1:1 | Full 6-channel model, primary/enhancement distinction, semantic directions, example, layout shortcut | -- (origin) |
| Orchestrator spawn | 27 | 3 | 9:1 | 2 checkpoint references (borders, typography) | Channel NAMES, channel model as concept, semantic direction definitions, primary vs enhancement distinction |
| Builder visible | 27+3=30 | 30 | 1:1 | Everything (builder reads brief) | -- (brief is the transfer medium) |
| Gates | 30 | 275 | 0.11:1 (EXPANSION) | Each channel measured individually + SC-13 measures together | Semantic DIRECTION coherence (only ADVISORY), channel ARCHITECTURE (primary vs enhancement), the CONCEPT that channels should align |
| PA | 275 | 33 | 8.3:1 | Perceptual impression of channel independence + multi-voice | Individual channel measurements, per-boundary data, specific CSS values |
| Weaver | 33 | 1 | 33:1 | Binary: "multi-coherence perceptible?" | ALL detail -- which channels, how many, where, direction |
| Fix cycle | 1 | 0 | infinity | NOTHING | Even the binary survives only as auditor quote, not structured channel data |

### Total Pipeline Compression: 27 lines in --> 0 lines of structured channel feedback to builder in fix cycle = TOTAL LOSS at return path

### Critical Finding
The 6-channel model is **richly defined at entry** (27 lines), **fully visible to the builder** (via the brief), **expanded in gates** (275 lines of measurement), then **catastrophically compressed** through PA (33 lines of perceptual impression) --> weaver (1 binary line) --> fix cycle (0 structured lines). The RETURN PATH to the builder contains zero channel-specific information. A builder who fails on channels gets auditor quotes about "visual properties" but never "strengthen the Structural channel at boundary Z2-Z3."

---

## CONCEPT 2: 5 Scales (Navigation, Page, Section, Component, Character)

### Stage-by-Stage Trace

**ENTRY (conventions-brief.md): 22 lines**
- Section 5 "FRACTAL ECHO" (lines 126-150):
  - Lines 130-138: Scale table with 5 rows (Navigation ~1440px, Page ~960px, Section ~200-400px, Component ~40-100px, Character ~12-20px) with min thresholds + verification checkboxes
  - Lines 140-141: Dependency rule (Character without Page = orphaned variation)
  - Lines 142-143: Priority rule (Navigation + Page + Component mandatory strong)
  - Lines 144: Parametric echo (component padding varies by zone density)
  - Lines 146-148: Fractal Echo Table requirement
  - TOTAL: 22 lines

**ORCHESTRATOR (SKILL.md spawn prompt): 0 lines**
- The word "scale" does not appear in the builder spawn prompt
- "fractal" does not appear
- "Navigation" / "Page" / "Section" / "Component" / "Character" as scale names do not appear
- TOTAL: 0 lines

**BUILDER (what's visible): 22 lines (from brief) + 0 (from spawn)**
- Builder reads conventions-brief in full, so sees all 22 lines
- Spawn prompt adds NOTHING about scales
- TOTAL VISIBLE: 22 lines

**GATES (gate-runner.md): 19 lines**
- DG-1 (lines 561-581): Fractal Echo Table validation
  - Line 568-571: Checks for 5 rows (one per scale), CSS evidence, pattern direction
  - TOTAL: 19 lines
  - BUT: Validates the DELIVERABLE (does the table exist with 5 rows?), NOT the implementation (do 5 scales actually manifest in the CSS?)

- SC-12 (lines 299-322): Zone Count (3-5 zones)
  - Measures zones, which maps to Page scale
  - TOTAL: 24 lines, but measures zone COUNT, not scale expression

- No gate measures Navigation, Section, Component, or Character scales directly
- TOTAL: 43 lines touching scales, but only 1 of 5 scales (Page via zones) is measured programmatically

**PA (flagship-pa-questions.md): 10 lines**
- PA-63 (lines 51-60): "Zoom into one component...Does its internal design echo the page's overall design language at a smaller scale?" -- measures fractal self-similarity
  - TOTAL: 10 lines
  - Measures Component-to-Page scale echo only. Does not check Navigation, Section, or Character.

**WEAVER (SKILL.md lines 253-295):**
- Line 285: "Scale coverage (3+ scales): [MET/FAILED]" -- single binary criterion
- Line 364: "Scale coverage verified (DG-1 valid + PA-63 agreement)" -- success bar
- TOTAL: 2 lines

**FIX CYCLE (SKILL.md lines 299-346):**
- Lines 316-318: Tier 5 gap routing ("PA-63: NO -- [auditor reason]")
- TOTAL: 3 lines of template, but no scale-specific fix instruction

### Compression Loss Table

| Stage | Lines In | Lines Out | Ratio | What Survived | What Was Lost |
|-------|----------|-----------|-------|---------------|---------------|
| Entry (brief) | 22 | 22 | 1:1 | Full 5-scale model, dependency rule, priority rule, parametric echo, table requirement | -- (origin) |
| Orchestrator spawn | 22 | 0 | infinity | NOTHING | ALL scale content -- names, table, dependencies, priorities, parametric echo |
| Builder visible | 22 | 22 | 1:1 | Everything (builder reads brief) | -- (brief is the transfer medium) |
| Gates | 22 | 43 | 0.51:1 (EXPANSION) | DG-1 validates table structure (5 rows), SC-12 measures zone count | Actual CSS manifestation at 5 scales; 4 of 5 scales have ZERO programmatic measurement |
| PA | 43 | 10 | 4.3:1 | Component-Page echo (PA-63) | Navigation, Section, Character scales; dependency checking; priority ordering |
| Weaver | 10 | 2 | 5:1 | Binary: "3+ scales?" | Which scales, how expressed, dependency compliance |
| Fix cycle | 2 | 3 | 0.67:1 (slight expansion as template) | "PA-63: NO" quote | Scale-specific guidance |

### Total Pipeline Compression: 22 lines in --> 3 lines of template fix routing = 7.3:1

### Critical Finding
The 5-scale model has a **hidden gate gap**: only 1 of 5 scales (Page, via SC-12 zone count) gets programmatic measurement. DG-1 validates that the builder WROTE a fractal echo table with 5 rows, but does not verify the CSS actually manifests 5 scales. PA-63 checks Component-to-Page echo but ignores Navigation, Section, and Character. A page could pass all gates with strong Page-scale expression and zero Navigation/Character expression.

---

## CONCEPT 3: Multi-Coherence (>=3 channels in same semantic direction)

### Stage-by-Stage Trace

**ENTRY (conventions-brief.md): 32 lines**
- Section 4 "MULTI-COHERENCE" (lines 92-123): Full definition
  - Lines 92-93: Core rule ("at least 3 of 6 CSS channels shift simultaneously")
  - Lines 96-101: 6 channels listed
  - Lines 105-116: Semantic direction requirement + DEEPENING/OPENING/FOCUSING/RESOLVING definitions + worked example
  - Lines 118-119: Layout diversity shortcut
  - Lines 120-122: Global coherence (sustained at EVERY boundary, not bookend-only)
  - Lines 122: Naming convention (CSS comment with direction)
- Section 9B "QUALITY FLOOR" (lines 230-239):
  - Line 234: ">= 3 channel shifts at every zone boundary, average >= 4"
- Section 11 "FIVE QUESTIONS" (lines 258-271):
  - Lines 267-268: "The Boundary" question (count channels, check same direction)
- TOTAL: ~32 lines across 3 sections

**ORCHESTRATOR (SKILL.md spawn prompt): 0 lines**
- "multi-coherence" does not appear in spawn prompt
- "channel" does not appear
- "coherence" does not appear
- TOTAL: 0 lines

**ORCHESTRATOR (SKILL.md gate table): 2 lines**
- Line 134: SC-13 row in gate summary: ">= 3 of 6 channels shift at every zone boundary, avg >= 4"
- Line 134 continued: Measurement method reference
- TOTAL: 2 lines (but this is in the orchestrator's gate section, not visible to builder)

**BUILDER (what's visible): 32 lines (from brief) + 0 (from spawn)**
- Builder reads conventions-brief in full
- TOTAL VISIBLE: 32 lines

**GATES (gate-runner.md): 80 lines**
- SC-13 (lines 326-406): Full multi-coherence measurement
  - Measures 6 channels at every boundary
  - Threshold: >= 3 per boundary, avg >= 4
  - TOTAL: 80 lines
  - LIMITATION: Counts shifts but CANNOT verify same semantic direction (line 400-402)

- SC-13B (lines 508-525): Direction coherence
  - Classifies shifts as INTENSIFYING vs RELAXING
  - ADVISORY only -- does not block
  - Confidence: ~50%
  - TOTAL: 18 lines

- TOTAL: 98 lines in gates

**PA (flagship-pa-questions.md): 33 lines**
- PA-61 (lines 23-33): Channel independence (multi-voice)
- PA-62 (lines 37-47): Transition variation (dramatic vs quiet)
- PA-65 (lines 79-89): Music analogy (single instrument / choir / ensemble)
- TOTAL: 33 lines across 3 questions
- NOTE: PA questions detect COMPOSITIONAL QUALITY of multi-coherence, not mechanical presence

**WEAVER (SKILL.md):**
- Line 284: "Multi-coherence perceptible: [MET/FAILED]"
- Line 363: "Multi-coherence verified (SC-13 PASS + PA-61 agreement)"
- TOTAL: 2 lines

**FIX CYCLE (SKILL.md):**
- Fix instruction template includes gate failures (SC-13 FAIL would route specific CSS)
- PA issues arrive as auditor quotes about "properties shifting"
- TOTAL: 0 lines specific to multi-coherence concept (generic templates)

### Compression Loss Table

| Stage | Lines In | Lines Out | Ratio | What Survived | What Was Lost |
|-------|----------|-----------|-------|---------------|---------------|
| Entry (brief) | 32 | 32 | 1:1 | Full concept: definition, 6 channels, semantic direction, 4 direction types, example, layout shortcut, global coherence, naming convention | -- (origin) |
| Orchestrator spawn | 32 | 0 | infinity | NOTHING | Entire multi-coherence concept absent from spawn prompt |
| Builder visible | 32 | 32 | 1:1 | Everything via brief | -- |
| Gates | 32 | 98 | 0.33:1 (3x EXPANSION) | Mechanical channel counting, per-boundary measurement | Semantic direction (ADVISORY only at 50% confidence), coherence as experience, layout shortcut |
| PA | 98 | 33 | 3:1 | Perceptual impression of compositional depth | Quantitative data, per-boundary counts, gate diagnostics |
| Weaver | 33 | 2 | 16.5:1 | Binary: "perceptible?" + "SC-13 + PA-61 agree?" | All specifics |
| Fix cycle | 2 | 0 specific | infinity | Nothing concept-specific | Everything |

### Total Pipeline Compression: 32 lines --> 0 concept-specific fix routing = TOTAL LOSS at return

### Critical Finding
Multi-coherence has a **semantic direction gap**: the concept REQUIRES channels to shift "in the same semantic direction" (DEEPENING/OPENING/FOCUSING/RESOLVING), but the only gate that checks direction (SC-13B) is ADVISORY with 50% confidence. The blocking gate SC-13 counts channels but accepts contradictory shifts. This means a page where background darkens (DEEPENING) while spacing increases (OPENING) at the same boundary PASSES SC-13. The semantic core of multi-coherence -- directionality -- survives only in the conventions brief and PA auditor judgment.

---

## CONCEPT 4: 4 Semantic Directions (DEEPENING, OPENING, FOCUSING, RESOLVING)

### Stage-by-Stage Trace

**ENTRY (conventions-brief.md): 7 lines**
- Lines 107-112: Explicit definitions
  ```
  DEEPENING  = darker bg + tighter spacing + heavier borders + denser typography
  OPENING    = warmer bg + generous spacing + thinner borders + more air
  FOCUSING   = narrower content + larger type + bolder accents + fewer elements
  RESOLVING  = settled tones + standard spacing + lighter borders + clean typography
  ```
- Line 114: Contradiction detection rule
- Line 122: Naming convention ("CSS comment with direction")
- TOTAL: 7 lines (remarkably compact)

**ORCHESTRATOR (SKILL.md spawn prompt): 0 lines**
- "DEEPENING" / "OPENING" / "FOCUSING" / "RESOLVING" do not appear
- "direction" does not appear in compositional sense
- TOTAL: 0 lines

**BUILDER (what's visible): 7 lines (from brief)**
- TOTAL VISIBLE: 7 lines

**GATES (gate-runner.md): 9 lines**
- SC-13B (lines 516-519): Direction heuristic
  - Classifies as INTENSIFYING (+) or RELAXING (-) -- a BINARY simplification of 4 directions
  - "Confidence: ~50%"
  - ADVISORY only
  - TOTAL: 9 lines
  - CRITICAL: 4 semantic directions COLLAPSED to 2 binary categories. DEEPENING and FOCUSING both map to INTENSIFYING(+). OPENING and RESOLVING both map to RELAXING(-). 50% of the directional model is lost in this binary compression.

**PA (flagship-pa-questions.md): 0 lines**
- No PA question mentions semantic direction names
- PA-62 asks about "dramatic vs quiet" transitions -- related but not the same concept
- TOTAL: 0 lines explicitly about the 4 directions

**WEAVER (SKILL.md): 0 lines**
- No mention of semantic directions in weaver instructions
- TOTAL: 0 lines

**FIX CYCLE (SKILL.md): 0 lines**
- No direction-specific fix routing
- TOTAL: 0 lines

### Compression Loss Table

| Stage | Lines In | Lines Out | Ratio | What Survived | What Was Lost |
|-------|----------|-----------|-------|---------------|---------------|
| Entry (brief) | 7 | 7 | 1:1 | Full 4-direction model with CSS mappings, contradiction rule, naming convention | -- (origin) |
| Orchestrator spawn | 7 | 0 | infinity | NOTHING | All 4 directions |
| Builder visible | 7 | 7 | 1:1 | Everything via brief | -- |
| Gates | 7 | 9 | 0.78:1 (slight expansion) | Binary INTENSIFYING/RELAXING heuristic (ADVISORY, 50% confidence) | 4 directions collapsed to 2; FOCUSING vs DEEPENING distinction lost; OPENING vs RESOLVING distinction lost; contradiction detection rule lost |
| PA | 9 | 0 | infinity | NOTHING | Binary heuristic result not visible to PA |
| Weaver | 0 | 0 | -- | -- | -- |
| Fix cycle | 0 | 0 | -- | -- | -- |

### Total Pipeline Compression: 7 lines --> 0 lines past gates = TOTAL EXTINCTION

### Critical Finding
The 4 semantic directions suffer the **worst compression of any concept in the pipeline**. They are beautifully defined in 7 lines in the conventions brief, visible to the builder, then TOTALLY ABSENT from every downstream stage. The gate's binary heuristic (INTENSIFYING/RELAXING) is an ADVISORY that collapses 4 directions to 2 at 50% confidence. No PA question asks about directions. The weaver never evaluates them. Fix cycles never mention them. This is the concept with the highest entry quality and highest total extinction.

**Survival mechanism:** The 4 directions survive ONLY inside the builder's reading of the conventions brief. If the builder internalizes them during Phase A (content reading), they influence CSS. If the builder skims or forgets them by Section 9 of a long build, they are gone -- and nothing downstream catches the loss.

---

## CONCEPT 5: Anti-Scale Model (density x restraint x spatial confidence)

### Stage-by-Stage Trace

**ENTRY (conventions-brief.md): 16 lines**
- Section 3 "RICHNESS" (lines 73-88):
  - Line 75: The formula: "Richness = semantic density x restraint x spatial confidence"
  - Line 77: Zero-in-any-factor rule
  - Lines 79-81: Density defined (perceptible CSS, 2+ components per viewport)
  - Lines 82-83: Self-test (imagine commenting out)
  - Lines 85-86: Restraint defined (3+ absent mechanisms, no component >35%, drop cap <=2)
  - Lines 87-88: Spatial confidence defined (2+ layout topologies, 3-tier border, 5+ font-sizes)
- TOTAL: 16 lines

**ORCHESTRATOR (SKILL.md spawn prompt): 0 lines**
- "density" does not appear
- "restraint" does not appear
- "spatial confidence" does not appear
- "richness" does not appear
- "anti-scale" does not appear
- TOTAL: 0 lines

**BUILDER (what's visible): 16 lines (from brief)**
- TOTAL VISIBLE: 16 lines

**GATES (gate-runner.md): 0 direct lines**
- No gate measures "density" as a concept
- SC-14 (sub-perceptual) partially enforces density (invisible CSS = wasted density)
- SC-08 (component library >= 8 types) partially enforces spatial confidence
- SC-15 (border presence >= 3 configs) partially enforces spatial confidence
- SC-11 (typography zones >= 3) partially enforces spatial confidence
- BUT: No gate directly measures the anti-scale formula or any of its 3 factors
- No gate measures restraint (3+ absent mechanisms is a build-log attestation, not a gate)
- TOTAL: 0 lines measuring the anti-scale model directly; ~120 lines measuring DOWNSTREAM EFFECTS

**PA (flagship-pa-questions.md): 10 lines**
- PA-64 (lines 65-76): "Is there a section that is DELIBERATELY plain?" -- measures restraint
  - TOTAL: 10 lines
  - Only one of the three factors (restraint) gets a PA question

**WEAVER (SKILL.md): 0 lines**
- No mention of anti-scale model, density, restraint, or spatial confidence
- TOTAL: 0 lines

**FIX CYCLE (SKILL.md): 0 lines**
- TOTAL: 0 lines

### Compression Loss Table

| Stage | Lines In | Lines Out | Ratio | What Survived | What Was Lost |
|-------|----------|-----------|-------|---------------|---------------|
| Entry (brief) | 16 | 16 | 1:1 | Full anti-scale model: formula, 3 factors, zero-factor rule, self-test, operational definitions | -- (origin) |
| Orchestrator spawn | 16 | 0 | infinity | NOTHING | Entire model |
| Builder visible | 16 | 16 | 1:1 | Everything via brief | -- |
| Gates | 16 | 0 direct | infinity | Downstream effects (component count, border count, typography zones) but NOT the model | The formula itself, the zero-factor rule, restraint measurement, density self-test |
| PA | 0 | 10 | N/A (new content) | Restraint detection (PA-64) | Density and spatial confidence as concepts |
| Weaver | 10 | 0 | infinity | NOTHING | Restraint finding from PA-64 |
| Fix cycle | 0 | 0 | -- | -- | -- |

### Total Pipeline Compression: 16 lines --> 0 lines in weaver/fix = TOTAL EXTINCTION

### Critical Finding
The anti-scale model is a **governing principle** in the conventions brief -- it is the DEFINITION of richness. Yet it has ZERO representation in gates, ZERO in the weaver, and ZERO in fix cycles. One of its three factors (restraint) gets a PA question (PA-64), but the PA finding is never synthesized back into the model. The builder cannot receive fix feedback that says "your density is high but restraint is zero, so richness = 0." The multiplicative zero-factor insight -- the most powerful architectural idea in the model -- never reaches any verification stage.

---

## CONCEPT 6: Fractal Self-Similarity (same pattern direction at all 5 zoom levels)

### Stage-by-Stage Trace

**ENTRY (conventions-brief.md): 22 lines**
- Same as Concept 2 (5 Scales) -- fractal self-similarity IS the 5-scale concept applied with consistent pattern direction
- Key additional content:
  - Line 128: "echoes its organizing principle at multiple architectural scales"
  - Line 148: "Pattern direction is consistent across all rows"
  - Line 144: Parametric echo (degree varies by zone)
- TOTAL: 22 lines (shared with scales)

**ORCHESTRATOR (SKILL.md): 2 lines**
- Line 157: DG-1 in gate table: "Fractal echo table exists with 5 rows, CSS evidence non-empty, pattern direction consistent"
- Line 61: "_build-log.md -- transition table (BEFORE build), fractal echo table (BEFORE build)"
- TOTAL: 2 lines

**BUILDER (what's visible): 22+2 = 24 lines**

**GATES (gate-runner.md): 19 lines**
- DG-1 (lines 561-581): Validates the DELIVERABLE -- table structure, 5 rows, CSS evidence, pattern direction consistency
- BUT: Does not verify that CSS ACTUALLY echoes at 5 scales
- TOTAL: 19 lines

**PA (flagship-pa-questions.md): 10 lines**
- PA-63 (lines 51-60): Component-Page echo check
- TOTAL: 10 lines
- Only checks 2 of 5 scales for echo

**WEAVER (SKILL.md): 2 lines**
- Line 285: "Scale coverage (3+ scales): [MET/FAILED]"
- Line 364: "Scale coverage verified (DG-1 valid + PA-63 agreement)"
- TOTAL: 2 lines

**FIX CYCLE (SKILL.md): 3 lines**
- Tier 5 gap template for PA-63
- TOTAL: 3 lines

### Compression Loss Table

| Stage | Lines In | Lines Out | Ratio | What Survived | What Was Lost |
|-------|----------|-----------|-------|---------------|---------------|
| Entry (brief) | 22 | 22 | 1:1 | Full model: organizing principle echo, 5 scales, dependencies, priorities, parametric echo, table requirement | -- |
| Orchestrator spawn | 22 | 2 | 11:1 | DG-1 reference, build-log table requirement | Scale names, dependencies, priorities, parametric echo |
| Builder visible | 24 | 24 | 1:1 | Everything via brief + spawn | -- |
| Gates | 24 | 19 | 1.3:1 | Table structure validation (5 rows, evidence, direction) | Actual CSS verification at 5 scales; parametric echo; dependency checking |
| PA | 19 | 10 | 1.9:1 | Component-Page echo (2 scales) | Navigation, Section, Character echo; parametric echo |
| Weaver | 10 | 2 | 5:1 | Binary "3+ scales?" | Which scales, how expressed |
| Fix cycle | 2 | 3 | 0.67:1 | PA-63 gap template | Scale-specific fix guidance |

### Total Pipeline Compression: 22 lines --> 3 lines in fix cycle = 7.3:1

### Critical Finding
Fractal self-similarity has a **deliverable-reality gap**: DG-1 validates that the builder WROTE a fractal echo table, but no gate verifies the CSS IMPLEMENTS what the table claims. A builder could write "Navigation: header padding 48px" in the table and ship a page with header padding 24px -- DG-1 would still PASS because it checks the table, not the CSS. The cross-validation gap between DG-1 (plan) and actual CSS is the primary vulnerability.

---

## CONCEPT 7: Perception Thresholds as Floors (>=15 RGB, >=2px font-size, >=0.025em letter-spacing, <=120px stacked gap)

### Stage-by-Stage Trace

**SOURCE (Research / MEMORY.md / Scale Research): Rich**
- Originated from Flagship failure analysis: backgrounds differing by 1-8 RGB, 107 lines of letter-spacing 0.001-0.01em, 238 CSS lines imperceptible
- Codified as minimum perceptual deltas: backgrounds >=15 RGB, font-size >=2px, letter-spacing >=0.025em (or 0), padding >=24px between zones, stacked gap <=120px
- Key insight: "Programmatic verification =/= perceptual verification" -- these thresholds bridge the gap

**ENTRY (conventions-brief.md): 19 lines**
- Section 2 "PERCEPTION (The Physics of Visibility)" (lines 51-69):
  - Lines 53-54: Flagship failure evidence (1-8 RGB backgrounds, 107 lines letter-spacing 0.001-0.01em)
  - Lines 56-57: Background delta >= 15 RGB rule with calculation method
  - Lines 59: Typography delta: >=2px font-size, >=0.03em letter-spacing (or 0)
  - Lines 61: Stacked gap <= 120px rule with accumulation warning
  - Lines 63-64: Multi-coherence >= 3 channels as perception threshold
  - Lines 65-66: Structure thresholds: 3+ border configs, 8+ component families
  - Lines 67-68: Mechanism breadth: 4 of 5 categories
  - Line 69: "These are not rules to comply with. They are the physics of human perception."
  - TOTAL: 19 lines
- Section 9B "QUALITY FLOOR" (lines 228-240): Threshold values restated as numeric minimums
  - TOTAL: 12 additional lines

**ORCHESTRATOR (SKILL.md spawn prompt): 6 lines**
- Lines 63-65: 4 self-check bullet points reference thresholds:
  - "All adjacent zone bg deltas >= 15 RGB?"
  - ">= 1 structural border-left (3px+)? >= 2 distinct border weights?"
  - "heading-to-meta ratio >= 3:1? Adjacent zone font-size delta >= 2px?"
- Line 134 (gate table): SC-09 row references ">= 15 RGB between adjacent zones"
- TOTAL: 6 lines (the spawn prompt is the ONE PLACE where thresholds survive beyond the brief)

**BUILDER (what's visible): 31 lines (19+12 from brief) + 6 (from spawn)**
- TOTAL VISIBLE: 37 lines -- the BEST concept visibility of any in this trace

**GATES (gate-runner.md): ~250 lines**
- SC-09 (lines 172-206): Background delta >= 15 RGB at EVERY boundary (35 lines)
- SC-10 (lines 209-244): Stacked gap <= 120px (36 lines)
- SC-11 (lines 247-294): Typography zones >= 3, display-body >= 10px (48 lines)
- SC-14 (lines 409-464): Sub-perceptual prevention: no letter-spacing 0-0.025em, no micro-clustering, no intra-zone bg 1-14 RGB (56 lines)
- SC-15 (lines 468-505): Border presence >= 3 configs (38 lines)
- SC-13 (lines 326-406): Multi-coherence >= 3 channels -- thresholds embedded in measurement (80 lines)
- TOTAL: ~293 lines across 6 gates
- Perception thresholds have the MOST gate coverage of any concept -- they ARE the gate system's backbone

**PA (flagship-pa-questions.md): 0 direct lines**
- No PA question explicitly asks about perception thresholds
- PA IMPLICITLY enforces thresholds: if backgrounds differ by <15 RGB, auditors see "same color" and rate zones as absent
- The thresholds were DESIGNED from PA failure data -- they encode what auditors perceive
- TOTAL: 0 explicit lines, but thresholds are the bridge between gates and PA

**WEAVER (SKILL.md): 2 lines**
- Line 281: "Zero void patterns (>120px empty): [MET/FAILED]" -- stacked gap threshold
- Implicit in PA-05 score: if thresholds fail, auditors see flat page, PA-05 drops
- TOTAL: 2 lines

**FIX CYCLE (SKILL.md): STRUCTURED (unique among concepts)**
- Gate failures route as JSON with measured_value vs threshold + CSS fix recipe
- Example: SC-09 FAIL produces "Change .zone-N background from #XXXXXX to #YYYYYY (delta increases from D1 to D2 RGB)"
- This is the ONLY concept where the fix cycle contains structured, concept-specific guidance
- TOTAL: Gate JSON templates (~5 lines per failing gate)

### Compression Loss Table

| Stage | Lines In | Lines Out | Ratio | What Survived | What Was Lost |
|-------|----------|-----------|-------|---------------|---------------|
| Entry (brief) | 31 | 31 | 1:1 | Full threshold model: >=15 RGB, >=2px font, >=0.025em ls, <=120px gap, >=3 channels, plus quality floor restating values | -- (origin) |
| Orchestrator spawn | 31 | 6 | 5.2:1 | Self-check thresholds (bg delta, border, typography), gate table reference | Sub-perceptual letter-spacing rule, stacked gap accumulation warning, "physics not rules" framing |
| Builder visible | 37 | 37 | 1:1 | Everything via brief + spawn | -- |
| Gates | 37 | 293 | 0.13:1 (8x EXPANSION) | All threshold values measured programmatically with specific CSS fix recipes | "Physics" framing, compositional reasoning behind thresholds |
| PA | 293 | 0 explicit | infinity | Implicit (auditors see/don't see threshold effects) | Explicit threshold awareness -- auditors use perception, not numbers |
| Weaver | 0 | 2 | N/A | Void pattern check | Bg delta check, typography check, letter-spacing check (all implicit in PA-05) |
| Fix cycle | 2 | STRUCTURED | GAIN | Gate JSON with measured values, thresholds, and CSS fix recipes | Nothing lost -- thresholds are the best-preserved concept |

### Total Pipeline Compression: 31 lines --> STRUCTURED fix routing = LOWEST LOSS of any concept

### Critical Finding
Perception thresholds are the **pipeline's best-preserved concept** -- the only one where the fix cycle return path carries structured, concept-specific information. This is because thresholds map directly to MEASURABLE CSS VALUES: background RGB delta, font-size in pixels, letter-spacing in em, gap in pixels. The gate system can measure, compare to threshold, and produce a CSS fix recipe. Thresholds are the concept where "binary rules achieve 100% compliance" actually works, because the rule IS the measurement.

**The lesson for other concepts:** The 4 semantic directions, anti-scale model, and fractal self-similarity suffer from compression because they cannot be reduced to a single CSS property comparison. Enriching these concepts would require REPRESENTATIONAL INNOVATION -- finding a way to express architectural concepts as measurable properties, not just measurable CSS values.

---

## CONCEPT 8: Recipe vs Checklist (sequential action verbs vs constraint verification verbs)

### Stage-by-Stage Trace

**SOURCE (Research / Retrospective Reports): Rich**
- Originated from Middle vs Flagship builder comparison (Retro-Analysis Team finding)
- Middle builder got 100-line RECIPE (sequenced steps, "Read/Select/Deploy/Assess" verbs, specific CSS values)
- Flagship builder got 71-line CHECKLIST (constraint lists, "Verify/Fail if/Must be" verbs, threshold values)
- Result: Recipe = DESIGNED (PA-05 4/4); Checklist = FLAT (PA-05 1.5/4)
- Key insight: "Recipe vs checklist = success vs failure"

**ENTRY (conventions-brief.md): MIXED (mostly recipe, some checklist)**
- The conventions brief is DELIBERATELY structured as a world-description, not a checklist:
  - Line 3: "You are both the telescope...and the microscope"
  - Line 7: "Read this brief once, fully. Then build."
  - Lines 380-398: Section 12 "PROCESS (The Flow)" -- 4 phases: Understand, Plan, Build, Verify
  - Lines 354-377: "CONVICTION CARD" -- sequential commitment structure
  - Lines 257-271: "FIVE QUESTIONS" -- self-assessment as reflective practice, not pass/fail
- Recipe elements: Sections 1-9 describe the WORLD (materials, physics, instruments)
- Checklist elements: Section 9B "QUALITY FLOOR" (lines 228-240) -- numeric minimums as floor
- TOTAL: ~18 lines of explicit process sequencing + ~150 lines of world-description (recipe framing)

**ORCHESTRATOR (SKILL.md spawn prompt): 12 lines of recipe**
- Lines 59-66: Sequential self-check (Phase A/B/C/D) -- recipe-structured:
  ```
  Phase A: Read content. Identify zones, tensions, metaphor.
  Phase B: Plan. Write conviction statement, transition table, and fractal echo table in build log BEFORE any CSS.
  Phase C: Build. HTML + CSS. Self-check at 4 checkpoints...
  Phase D: Self-verify. Complete cascade value table.
  ```
- Lines 68-70: Creative authority framing (what you CAN do, not just what you CANNOT)
- Lines 70-71: Content-form coupling (respond to content, not apply uniformly)
- TOTAL: 12 lines -- the spawn prompt IS recipe-structured (a direct response to the "recipe vs checklist" finding)

**BUILDER (what's visible): 12 (spawn) + ~168 (brief) = ~180 lines**
- The builder receives a RECIPE (conventions brief world-description + spawn prompt Phase A-D sequence)
- TOTAL VISIBLE: ~180 lines of recipe-structured guidance

**GATES (gate-runner.md): CHECKLIST (by design)**
- ALL 21 gates are binary: PASS/FAIL based on measured value vs threshold
- Gate structure IS a checklist: "Is border-radius 0? YES/NO"
- Lines 1-8: Purpose statement acknowledges this: "Gates catch mechanical defects (~26%)"
- The gate runner does NOT attempt recipe structure -- it is measurement infrastructure
- TOTAL: 992 lines, all checklist-structured (appropriate for verification)
- NOTE: This is NOT a compression loss -- gates SHOULD be checklists. The issue is when the builder's GUIDANCE is checklist-structured.

**PA (flagship-pa-questions.md): RECIPE-STRUCTURED**
- PA questions ask the auditor to PERFORM actions, not verify states:
  - PA-60: "Can you identify at least 3 distinct 'design moments'? Point to each."
  - PA-63: "Zoom into one component...Does its internal design echo..."
  - PA-64: "Can you tell the difference between 'designed quiet' and 'forgot to design this part'?"
- These use PERCEPTUAL VERBS (identify, zoom, tell the difference) not VERIFICATION VERBS (verify, confirm, check)
- TOTAL: 144 lines, recipe-structured for auditors (appropriate)

**WEAVER (SKILL.md): CHECKLIST**
- Lines 277-285: "COMPOSITIONAL CRITERIA" -- 6 binary items: "[MET/FAILED]"
- Lines 286-291: Verdict matrix: PA-05 >= 3.5 AND Tier 5 >= 6/8 AND criteria MET
- The weaver receives PA PERCEPTIONS but converts them to BINARY VERDICTS
- TOTAL: ~40 lines, checklist-structured

**FIX CYCLE (SKILL.md): MIXED**
- Lines 306-322: Fix instruction template has both:
  - "Gate Failures (structured, with specific CSS)" -- checklist
  - "PA Top-5 Issues (directional, not prescriptive)" -- recipe-adjacent
  - "DO NOT TOUCH (protected elements)" -- checklist
- Lines 326-327: "Builder reads them, applies fixes" -- sequential but not recipe-granular
- TOTAL: ~20 lines, mixed recipe/checklist

### Compression Loss Table

| Stage | Lines In | Lines Out | Ratio | What Survived | What Was Lost |
|-------|----------|-----------|-------|---------------|---------------|
| Entry (brief) | ~168 | ~168 | 1:1 | World-description framing, process sequence, self-assessment questions, conviction card, creative authority, content-form coupling | -- (origin, deliberately recipe-structured) |
| Orchestrator spawn | ~168 | 12 | 14:1 | Phase A-D sequence, creative authority, content-form coupling, 4 self-checkpoints | World-description richness, conviction card content, five questions, restraint philosophy |
| Builder visible | 180 | 180 | 1:1 | Everything via brief + spawn | -- |
| Gates | 180 | 992 (checklist) | STRUCTURE CHANGE | Mechanical measurement (appropriate) | Recipe structure APPROPRIATELY absent -- gates are verification, not guidance |
| PA | 992 | 144 (recipe) | STRUCTURE CHANGE | Perceptual recipe for auditors (appropriate) | Gate data not visible to PA (appropriate) |
| Weaver | 144 | 40 (checklist) | 3.6:1 | Binary verdicts, per-question matrix | Perceptual richness, auditor reasoning, recipe context |
| Fix cycle | 40 | 20 (mixed) | 2:1 | Gate JSON (checklist) + PA quotes (partial recipe) + protected elements | Full recipe context for what the builder should DO differently |

### Total Pipeline Compression: ~168 lines of recipe --> 20 lines of mixed fix instructions = 8.4:1

### Critical Finding
The "recipe vs checklist" concept is **meta-structural** -- it is not a compositional concept like channels or scales, but a FRAMING PRINCIPLE that governs how all other concepts are presented. The conventions brief is DELIBERATELY recipe-structured (a direct lesson from the Middle experiment's success). The spawn prompt PRESERVES the recipe structure (Phase A-D sequence). But the RETURN PATH degrades from recipe to checklist:

1. **Gates**: Binary PASS/FAIL -- appropriate for verification but strips recipe framing
2. **Weaver**: Binary MET/FAILED -- collapses auditor perceptions to checklist
3. **Fix cycle**: Gate JSON + PA quotes -- structured SYMPTOMS, not sequenced ACTIONS

**The compression pattern**: Recipe --> measurement --> checklist --> symptoms. The builder receives a recipe for the FIRST pass, but a CHECKLIST for fix cycles. This is the single most actionable finding: fix cycle instructions should be recipe-structured ("At boundary Z2-Z3, FIRST verify your background delta is >=15 RGB, THEN check if your typographic shift encodes the SAME semantic direction, THEN...") rather than checklist-structured ("SC-09 FAIL: measured 8 RGB, threshold 15 RGB, fix: change background to #F0EBE3").

---

## CONCEPT 9: Stack Progression (scales --> channels --> multi-coherence --> anti-scale as ARCHITECTURE)

### Stage-by-Stage Trace

This concept represents the INTEGRATION of concepts 1-8 into a coherent architectural progression. Let me trace whether the pipeline treats these as an integrated stack or as independent atoms.

**ENTRY (conventions-brief.md): IMPLICIT integration**
- The conventions brief presents the concepts in this order:
  1. Identity (Section 1, lines 11-48) -- constraints
  2. Perception (Section 2, lines 51-69) -- physics
  3. Richness = anti-scale (Section 3, lines 73-88) -- governing model
  4. Multi-coherence (Section 4, lines 92-123) -- binding rule
  5. Fractal echo / scales (Section 5, lines 126-150) -- pattern at every scale
  6. Unified metaphor (Section 6, lines 152-163) -- top-level organizer
  7. Transition grammar (Section 7, lines 166-178) -- boundary types
  8. CSS vocabulary (Section 8, lines 183-208) -- instruments

- The progression IS the structure of the brief: richness GOVERNS, multi-coherence BINDS, fractal echo DISTRIBUTES, metaphor UNIFIES
- But this progression is NEVER STATED EXPLICITLY. The reader must infer the architecture from section ordering.
- TOTAL: 0 lines explicitly describing the stack; ~150 lines implicitly encoding it via document structure

**ORCHESTRATOR (SKILL.md spawn prompt): 0 lines**
- No reference to stack progression
- Builder is told to "Read [the brief]" -- the stack arrives implicitly via document order
- TOTAL: 0 lines

**BUILDER (what's visible): 0 explicit lines; ~150 implicit via brief structure**

**GATES (gate-runner.md): 3 lines of dependency**
- Lines 94-97: Dependency chain documented:
  ```
  SC-12 (zone count) -> SC-09 (bg delta) -> SC-13 (multi-coherence)
  SC-13 -> SC-13B (direction) -> SC-16 (monotonic)
  ```
- This encodes a PARTIAL progression: zones --> backgrounds --> multi-coherence --> direction --> monotonic
- BUT: Scales are not in this chain. Anti-scale model is not in this chain. Metaphor is not in this chain.
- TOTAL: 3 lines of partial gate dependency

**PA (flagship-pa-questions.md): 0 lines**
- Questions are INDEPENDENT atoms. No question asks about the RELATIONSHIP between concepts.
- PA-61 (channels), PA-62 (transitions), PA-63 (scales), PA-64 (restraint), PA-65 (multi-voice) are each self-contained.
- TOTAL: 0 lines about stack architecture

**WEAVER (SKILL.md lines 277-285): 6 lines**
- The "COMPOSITIONAL CRITERIA" section lists 6 criteria as a CHECKLIST:
  - Zero soul violations
  - Zero void patterns
  - Metaphor STRUCTURAL
  - Rhythm not metronomic
  - Multi-coherence perceptible
  - Scale coverage (3+ scales)
- This is a FLAT list, not a stack. The criteria are AND-joined but not architecturally ordered.
- TOTAL: 6 lines, but as checklist not progression

**FIX CYCLE (SKILL.md): 0 lines about integration**

### Compression Loss Table

| Stage | Lines In | Lines Out | Ratio | What Survived | What Was Lost |
|-------|----------|-----------|-------|---------------|---------------|
| Entry (brief) | 0 explicit / ~150 implicit | 0/150 | -- | Document structure implies progression | Explicit articulation never existed |
| Orchestrator spawn | 0/150 | 0 | -- | "Read the brief" transfers implicit structure | -- |
| Builder visible | 0/150 | 0/150 | -- | Brief structure | -- |
| Gates | 0/150 | 3 | -- | Partial dependency chain (zones->bg->multi-coherence) | Scale, anti-scale, metaphor dependencies; the concept that these form an ARCHITECTURE |
| PA | 3 | 0 | infinity | NOTHING | Gate dependency chain not visible to PA |
| Weaver | 0 | 6 | N/A (new) | Flat checklist of criteria | Architectural progression between criteria |
| Fix cycle | 6 | 0 | infinity | NOTHING | Checklist decomposed to individual fix items |

### Total Pipeline Compression: NEVER EXPLICIT --> never recoverable = N/A (was never codified)

### Critical Finding
The stack progression was **NEVER EXPLICITLY CODIFIED** anywhere in the pipeline. It exists only as an implicit consequence of the conventions brief's section ordering. The gate dependency chain (SC-12 --> SC-09 --> SC-13) captures a partial mechanical ordering but not the conceptual architecture. The weaver's 6-item checklist decomposes integrated concepts into independent atoms. No stage in the pipeline evaluates whether scales, channels, multi-coherence, and anti-scale work TOGETHER as a unified compositional architecture.

This is arguably not a compression loss -- it's a **codification absence**. The concept lives in the research (e.g., scale-research.md, pipeline-analysis reports) but was never injected into the pipeline's operational layer.

---

## SYNTHESIS: WORST TO BEST COMPRESSION

### Summary Table (All 9 Concepts)

| Concept | Source Lines | Brief Lines | Gate Coverage | PA Coverage | Lost Info | Loss Matters? |
|---------|------------|------------|--------------|------------|-----------|--------------|
| 6 Channels | ~50 (R3+catalog) | 27 | 275 lines / 6 gates | 33 lines / 3 Qs | Semantic direction, return path | YES -- builder gets symptom fixes, not channel-level guidance |
| 5 Scales | ~40 (catalog+research) | 22 | 43 lines / 2 gates | 10 lines / 1 Q | 4 of 5 scales unmeasured | YES -- only Page scale verified programmatically |
| Multi-Coherence | ~30 (research) | 32 | 98 lines / 2 gates | 33 lines / 3 Qs | Semantic direction (ADVISORY), return path | YES -- the concept's core (directionality) is unenforceable |
| Anti-Scale Model | ~20 (research) | 16 | 0 direct | 10 lines / 1 Q | Entire model | YES -- the governing principle has zero verification |
| Fractal Self-Similarity | ~40 (catalog+research) | 22 | 19 lines / 1 gate | 10 lines / 1 Q | Deliverable-reality gap | YES -- table existence checked, CSS implementation not |
| Perception Thresholds | ~25 (failure analysis) | 31 | 293 lines / 6 gates | 0 explicit | "Physics" framing | NO -- thresholds map to measurable CSS, return path structured |
| Recipe vs Checklist | ~30 (retrospective) | 168 (meta) | 992 (structure change) | 144 (recipe) | Fix cycle degrades recipe to checklist | YES -- builder gets recipe initially, checklist on fixes |
| Stack Progression | ~50 (research) | 0 explicit | 3 lines (dependency) | 0 | Never codified | MAYBE -- implicit ordering may suffice for Opus builders |
| 4 Semantic Directions | ~10 (brief original) | 7 | 9 lines (ADVISORY) | 0 | Total extinction | YES -- the most architecturally elegant concept vanishes completely |

### Worst to Best Compression Ranking

| Rank | Concept | Entry Lines | Fix Cycle Lines | Total Compression | Verdict |
|------|---------|-------------|-----------------|-------------------|---------|
| 1 | **4 Semantic Directions** | 7 | 0 | TOTAL EXTINCTION | Beautifully defined, then absent from every downstream stage. The ADVISORY gate collapses 4 directions to 2 binary categories at 50% confidence. |
| 2 | **Anti-Scale Model** | 16 | 0 | TOTAL EXTINCTION | The governing principle of richness has zero gate measurement, zero weaver evaluation. One factor (restraint) gets a PA question. The multiplicative zero-factor insight is never verified. |
| 3 | **Stack Progression** | 0 explicit | 0 | NEVER CODIFIED | The architectural integration of all concepts was never written down. It exists only as implicit document ordering. |
| 4 | **6 Channels** | 27 | 0 structured | RETURN PATH EXTINCTION | Richly defined at entry, massively expanded in gates (275 lines), but the return path to the builder in fix cycles has zero channel-specific content. |
| 5 | **Multi-Coherence** | 32 | 0 specific | RETURN PATH EXTINCTION | Same pattern as channels: rich entry, rich gates, collapsed to binary in weaver, zero concept-specific fix routing. Plus: semantic direction (the concept's core) is only ADVISORY. |
| 6 | **Recipe vs Checklist** | 168 (meta) | 20 (mixed) | 8.4:1 (structure degradation) | Recipe framing preserved for initial build but degrades to checklist in fix cycles. The builder's second pass is qualitatively different from the first. |
| 7 | **5 Scales** | 22 | 3 (template) | 7.3:1 | 4 of 5 scales have zero programmatic measurement. DG-1 checks the deliverable table, not the CSS implementation. |
| 8 | **Fractal Self-Similarity** | 22 | 3 (template) | 7.3:1 | Same as scales but with additional deliverable-reality gap (table vs CSS). |
| 9 | **Perception Thresholds** | 31 | STRUCTURED | LOWEST LOSS | The only concept where gates produce specific CSS fix recipes. Thresholds map directly to measurable CSS values. |

### Best Compression (most information preserved)

Only ONE concept (perception thresholds) survives well through the full pipeline. This is because thresholds reduce to single CSS property comparisons -- they ARE the measurement. Every other concept requires architectural reasoning that the mechanical pipeline stages cannot represent.

### Where Is the Biggest Information Loss?

**Three critical bottlenecks:**

1. **Orchestrator spawn prompt (39 lines):** The spawn prompt transmits ZERO of the 9 concepts by name (except perception thresholds via self-check bullets). It says "Read conventions-brief.md" and adds 4 self-check bullet points. This is not a compression bottleneck for the BUILDER (who reads the brief), but it means the ORCHESTRATOR has no concept awareness. The orchestrator cannot compose concept-aware fix instructions because it never represented the concepts.

2. **Weaver synthesis (lines 253-295):** The weaver collapses ALL concepts to a 6-item binary checklist. Multi-coherence becomes "perceptible: MET/FAILED." Scales become "3+ scales: MET/FAILED." Channels become implicit in multi-coherence. Directions, anti-scale model, recipe framing, and stack progression have ZERO representation. This is where compositional intelligence dies -- the weaver cannot synthesize what it was never asked to evaluate.

3. **Fix cycle return path (lines 299-346):** Fix instructions contain gate failures (structured JSON with CSS) and PA top-5 issues (auditor quotes). Only perception thresholds get concept-specific routing (because they map to CSS values). All other concepts arrive as symptoms. A builder receiving fix instructions knows "SC-13 FAILED: only 2 channels shifted at boundary Z2-Z3" but NOT "your multi-coherence lacks directional alignment -- the Chromatic channel says DEEPENING while the Spatial channel says OPENING." The fix cycle repairs SYMPTOMS, not ARCHITECTURAL DEFICIENCIES.

### The Conventions Brief Paradox

The conventions brief is simultaneously the pipeline's **greatest strength** and its **most fragile dependency**. It contains ALL 9 concepts in rich, actionable form (total ~330 lines of concept-specific content in a 403-line document). The builder reads it fully. But every stage AFTER the builder treats concepts as mechanical checkboxes:

- Gates measure CSS values, not compositional intent
- PA asks perceptual questions, not architectural ones
- Weaver reduces to binary pass/fail
- Fix cycles route symptoms, not concepts (except thresholds)

The pipeline's compositional intelligence is **builder-dependent**: if the builder internalizes the brief deeply, the output has architectural integrity. If the builder skims, builds long, and drifts, the downstream stages cannot catch the loss -- they can only flag mechanical symptoms (wrong delta, too few channels) without understanding the architectural failure.

### The Return Path Gap

The most significant finding: only 1 of 9 concepts (perception thresholds) has a structured return path to the builder in fix cycles. The fix cycle contains:
- Gate JSON (mechanical: measured value vs threshold) -- ONLY for threshold concepts
- PA quotes (perceptual: auditor description of what they see)
- Tier 5 gaps (binary: YES/NO per question)

None of these encode:
- "Your multi-coherence direction is contradictory at boundary Z3"
- "Your fractal echo breaks at Component scale"
- "Your restraint factor is zero, making richness zero"
- "You have DEEPENING at the Chromatic channel but OPENING at the Spatial channel"
- "Your fix cycle is checklist-structured but your original build was recipe-structured -- maintain the recipe framing"

The builder in a fix cycle is solving a DIFFERENT PROBLEM than the one the conventions brief defined. The brief says: compose an architectural experience. The fix instructions say: change background-color from X to Y at element Z.

### The Recipe-to-Checklist Degradation

A unique finding from tracing Concept 8: the pipeline ITSELF undergoes the recipe-to-checklist degradation that it was designed to prevent. The conventions brief is recipe-structured (world-description, sequential phases, conviction card). The spawn prompt preserves recipe structure (Phase A-D). But the fix cycle returns to checklist structure (gate PASS/FAIL + PA YES/NO). This means:

- **First build**: Builder operates in recipe mode (read world, plan, build, verify)
- **Fix cycle**: Builder operates in checklist mode (fix SC-09, fix PA-61, fix SC-13)

The pipeline that LEARNED the recipe-vs-checklist lesson for the initial build has NOT applied that lesson to its own fix cycle. The fix cycle instructions should be recipe-structured to maintain the builder's compositional frame.

---

## KEY FINDING

**The single most important insight from this analysis:**

The pipeline's compositional intelligence stack has a **one-way valve**: concepts flow richly FROM the conventions brief TO the builder (via passthrough reading), but ZERO concepts flow structurally FROM the verification layers BACK to the builder in fix cycles. The only exception is perception thresholds, which survive because they reduce to single-property CSS comparisons.

This creates an asymmetry: the builder's FIRST pass operates at full compositional intelligence (all 9 concepts available via brief). The builder's FIX pass operates at mechanical compliance (gate failures + PA quotes, no concept framing). The fix cycle is architecturally dumber than the initial build.

**Implication:** To close the return path gap, either:
(a) The WEAVER needs to evaluate concepts explicitly (not just binary MET/FAILED) and compose concept-level fix instructions, OR
(b) The ORCHESTRATOR needs concept awareness to translate gate/PA data into architectural feedback, OR
(c) Fix instructions should route the builder BACK to relevant conventions-brief sections rather than forward to CSS fixes

Option (c) is the cheapest: "Re-read Section 4 of conventions-brief.md. Your multi-coherence at boundary Z2-Z3 has 2 channels shifting in opposite directions. SC-13B classified them as contradictory." This uses the brief as the concept store and the gate data as the diagnostic pointer.

---

## MASTER COMPRESSION MAP

```
                    ENTRY         SPAWN        BUILDER       GATES         PA          WEAVER      FIX
                    (brief)       (prompt)     (visible)     (measured)    (perceived)  (scored)    (returned)
                    ─────────     ──────────   ──────────    ──────────    ──────────   ──────────  ──────────
6 Channels          ████████ 27   ░░░ 3        ████████ 30   ██████████   ████ 33      █ 1         ░ 0
                                                             275 lines

5 Scales            ██████ 22     ░ 0          ██████ 22     ████ 43      ██ 10        █ 2         █ 3

Multi-Coherence     ████████ 32   ░ 0          ████████ 32   █████████    ████ 33      █ 2         ░ 0
                                                             98 lines

4 Directions        ███ 7         ░ 0          ███ 7         ██ 9(ADV)    ░ 0          ░ 0         ░ 0

Anti-Scale Model    █████ 16      ░ 0          █████ 16      ░ 0 direct   ██ 10        ░ 0         ░ 0

Fractal Self-Sim    ██████ 22     █ 2          ██████ 24     ███ 19       ██ 10        █ 2         █ 3

Perc. Thresholds    ████████ 31   ███ 6        ████████ 37   ██████████   ░ 0 explct   █ 2         ████ STRUCTURED
                                                             293 lines

Recipe/Checklist    ██████████    ████ 12      ██████████    ██████████   ████████     ████ 40     ██ 20 (mixed)
                    168 (meta)                 180           992 (change) 144 (recipe) (checklist)

Stack Progression   ░ 0 explicit  ░ 0          ░ 0           █ 3(dep)     ░ 0          ░░ 6(flat)  ░ 0
```

Legend: `█` = lines of concept-specific content | `░` = zero or near-zero | Numbers = actual line counts

**The pattern is unmistakable:** Rich entry (brief) --> zero in spawn --> rich in builder (via brief passthrough) --> expanded or absent in gates --> compressed in PA --> crushed to binary in weaver --> extinct in fix cycle.

The pipeline is a FUNNEL that narrows compositional intelligence to mechanical compliance at every stage after the builder. The sole exception -- perception thresholds -- proves the rule: concepts that reduce to CSS property comparisons survive; concepts that require architectural reasoning do not.
