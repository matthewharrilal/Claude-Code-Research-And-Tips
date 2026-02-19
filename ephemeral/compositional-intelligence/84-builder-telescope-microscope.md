# DESIGN: Builder Telescope + Microscope Integration

**Author:** Builder Knowledge Designer (Opus 4.6)
**Task:** #84
**Date:** 2026-02-19
**Sources:** 17-design-recipe-restructure.md, 18-design-builder-visibility.md, 21-integration-cd006.md, 22-integration-remediation.md, 28-meta-propagation.md, PV2-PIPELINE-DIAGRAM.md

---

## EXECUTIVE SUMMARY

PV2 gives the planner the telescope (compositional intelligence -- scales, channels, coherence, metaphor) and the builder only the microscope (recipe steps, CSS execution, perception thresholds). The remediation worked because ONE Opus agent held BOTH. CD-006 scored 39/40 because ONE Opus agent held BOTH. Every experiment that scored 3/4+ had a builder with BOTH.

The fix is not two documents (theory + recipe). The fix is ONE integrated knowledge format where every CSS instruction carries its compositional meaning. Not "telescope section followed by microscope section" but "telescope + microscope at every line."

This report designs that integration.

---

## 1. THE PROBLEM: SEPARATION KILLS COMPOSITION

### 1.1 The Current PV2 Split

```
TC PLANNER receives:
  - Full TC skill (1,878 lines of compositional intelligence)
  - Full content markdown
  - Full mechanism catalog (18 mechanisms with CSS)
  - Full research context (337 findings distilled)

TC PLANNER outputs:
  - _build-plan.md: zone count, mechanism NAMES, hex values, transition types
  - LOSES: WHY these zones, WHY this metaphor, WHY these mechanisms
  - LOSES: Isomorphism chain (metaphor element -> physical property -> CSS form)
  - LOSES: Coherence direction ("deeper = denser = darker = heavier")
  - LOSES: Rejected alternatives and their reasons

BUILDER receives:
  - operational-recipe.md (~650 lines): phases, thresholds, action verbs
  - _build-plan.md (~100 lines): decisions without reasoning
  - 4 reference files: tokens, prohibitions, components, mechanism catalog

BUILDER must:
  - MENTALLY MERGE recipe + build plan (cross-reference two documents)
  - RE-DERIVE mechanism CSS from catalog (lossy translation)
  - GUESS compositional intent from zone names and hex values
  - EXECUTE 9 phases without understanding WHY
```

Report #28 (Propagation Without Loss) quantifies this: intelligence survival from TC-to-builder is ~35-45%. Over half the compositional intelligence evaporates at the handoff boundary.

### 1.2 What the Remediation Got Right

The remediation spec (1,025 lines) interlaced THREE document types (Report #22, Section 2):

```
/* Ch4 STRUCTURAL BORDERS -- Section-level containment.
   6 of 12 sections. Alternating presence creates rhythm. */     <-- TELESCOPE
.zone-s2 .page-container {                                        <-- RECIPE
  border-left: 3px solid var(--color-border);                     <-- MICROSCOPE
  padding-left: 29px;
}
/* S5's is RED -- the focal point of the analytical zone */       <-- TELESCOPE
.zone-s5 .page-container {                                        <-- RECIPE
  border-left: 4px solid var(--color-primary);                    <-- MICROSCOPE
  padding-left: 28px;
}
```

The telescope was not in a separate document. It was a CSS COMMENT directly above the rule it governed. The builder read WHY before WHAT. This is structurally different from:
- **PV2 current:** Telescope in the build plan, microscope in the recipe, builder mentally merges
- **Master prompt:** Telescope absent, microscope absent, builder gets constraints only
- **CD-006:** Telescope in the builder's HEAD (full creative context), microscope in the CSS

Result: Remediation scored PA-05 2.5/4 (+1.0 from 1.5). With bug fixes projected 3.0-3.2.

### 1.3 What CD-006 Got Right

CD-006 (39/40) had no recipe, no separate build plan, no structured handoff. ONE Opus builder held:
- Full research context (all 39 R-5 findings)
- Convention specification (S1-20, not a recipe -- WHAT outcomes, not HOW steps)
- All previous CD explorations (CD-001 through CD-005) as reference
- Full accumulated identity

The builder made HUNDREDS of micro-decisions that reinforced each other because it understood the WHOLE -- the 4-act density arc, the transition grammar mapping to cognitive boundary difficulty, the fractal self-similarity at 5 scales. Every CSS rule served BOTH a mechanical purpose (the microscope) and a compositional purpose (the telescope).

Report #21 identifies 7 factors, but the fundamental one: **single builder, single pass, full compositional memory.** The builder could change early decisions based on late discoveries because it held everything in working memory.

---

## 2. THE INTEGRATION DESIGN: FIVE MECHANISMS

### 2.1 Mechanism 1: Integrated Build Recipe (Telescope + Microscope at Every Line)

This is the core structural change. Instead of:
- File A: _build-plan.md (compositional decisions, ~100 lines, telescope)
- File B: operational-recipe.md (execution phases, ~650 lines, microscope)

TC generates ONE file:
- File: _build-recipe.md (~300-500 lines, integrated)

Every phase instruction in the build recipe carries its compositional meaning INLINE:

```markdown
## PHASE 3: PAGE SCALE -- Establish the Macro Composition

YOUR METAPHOR: Geological Strata
COHERENCE DIRECTION: deeper = denser = darker = heavier

### Zone Backgrounds

ZONE 1 (S1-S3: "Surface Layer"):
  Set background: #FEF5EB (warm cream)
  BECAUSE: Surface = accessible, inviting, sparse. The reader
  is arriving. Warm cream says "welcome." This is the lightest
  zone because topsoil is the lightest geological layer.
  Padding: 64px 32px (spacious -- surface has room to breathe)

ZONE 2 (S4-S8: "Sediment"):
  Set background: #F0EBE3 (earthy tan)
  RGB delta from Zone 1: R-14, G-10, B-8 = avg 10.7 -- CHECK >= 15
  BECAUSE: Sediment = partially consolidated, moderate density.
  The reader is digging. Earthy tan says "substance." Darker
  because deeper layers compress under weight.
  Padding: 32px 32px (compressed -- sediment is denser)

ZONE 3 (S9-S12: "Bedrock"):
  Set background: #E6DFD4 (warm stone)
  RGB delta from Zone 2: R-10, G-12, B-15 = avg 12.3 -- CHECK >= 15
  BECAUSE: Bedrock = foundational, dense, load-bearing.
  The reader has arrived at the core. Warm stone says "foundation."
  Darkest content zone because bedrock is the densest layer.
  Padding: 24px 32px (most compressed -- bedrock is solid)

>>> PERCEPTION GATE: Open at 1440px. Scroll Zone 1 to Zone 3.
    Can you FEEL the page getting denser as you scroll?
    If NO: Increase RGB deltas until zones are visually distinct.
    The metaphor says deeper = darker. If zones look the same,
    the metaphor is broken.

>>> BOUNDARY CHECKPOINT:
    Zone 1->2: Which channels shifted? Background (YES), Spatial (YES, 64->32px).
    That's only 2. Need >= 3. ADD a channel: deploy border-left on Zone 2
    callouts (3px solid var(--color-border)) to get Structural as third channel.
```

This format is NEITHER pure telescope NOR pure microscope. It is BOTH at every instruction. The builder reads:
- WHAT to set (microscope: `#F0EBE3`)
- WHY to set it (telescope: `sediment = partially consolidated`)
- HOW MUCH (microscope: `RGB delta -14, -10, -8`)
- HOW TO CHECK (microscope: `>= 15 RGB`)
- WHAT TO DO IF WRONG (recovery: `increase deltas`)
- WHAT IT MEANS (telescope: `deeper = darker`)

### 2.2 Mechanism 2: Builder Reads the Build Plan

Currently the PV2 diagram shows the builder reading 6 files, one of which is `_build-plan.md`. But the build plan is a PLANNING artifact, not a BUILDING artifact. Report #17 proposes that TC's output format change from "here's what I planned" to "here's your recipe for this specific build."

The deeper insight: **the build plan IS the telescope.** It contains:
- The metaphor and its isomorphism table
- The zone logic (why these sections group this way)
- The mechanism selection with justifications
- The channel mapping (which CSS properties express which metaphor dimensions)
- The transition grammar (SMOOTH/BRIDGE/BREATHING with semantic reasons)

Instead of the builder receiving a separate planning document that it must mentally merge with the recipe, TC writes the build recipe in a format that EMBEDS the planning intelligence at each phase. The planning decisions become execution context.

**Implementation:** TC Phase 4 is renamed "Build Recipe Generation." Instead of outputting a planning manifest, TC outputs an integrated build recipe that follows the recipe template's phase structure but fills every slot with content-specific values AND compositional reasoning.

The builder still reads:
1. `operational-recipe-template.md` (~300 lines) -- universal rules, thresholds, soul
2. `_build-recipe.md` (~300-500 lines) -- TC-generated, content-specific, integrated
3. `tokens.css` -- exact token values
4. `prohibitions.md` -- soul constraints
5. `merged-components.css` -- component library
6. `mechanism-catalog.md` -- application modes for selected mechanisms

But files 1 and 2 are now STRUCTURALLY ALIGNED (same phase numbering, same organization). No mental merge needed. The template says "Phase 3: Zone Backgrounds, apply >= 15 RGB delta." The instance says "Phase 3: Zone 1 = #FEF5EB, Zone 2 = #F0EBE3, delta = 10.7 avg -- BECAUSE geological strata, deeper = darker." The builder reads them in parallel at each phase.

### 2.3 Mechanism 3: Builder Reads the Transition Table

Report #18 identifies the transition table as "the SINGLE MOST IMPORTANT artifact that the TC planner must produce for the builder." The transition table is NATURALLY both telescope and microscope:

```
TRANSITION TABLE

| Boundary | bg delta  | font-sz | font-wt | letter-sp | border-left       | p-margin | channels |
|----------|-----------|---------|---------|-----------|-------------------|----------|----------|
| ->Z1     | n/a       | 17px    | 400     | 0.02em    | none              | 20px     | n/a      |
| Z1->Z2   | -14 RGB   | -1px    | +100    | -0.01em   | ADD 3px tan       | -4px     | 5 PASS   |
|          | deeper    | denser  | heavier | tighter   | structural rhythm | compress |          |
| Z2->Z3   | -12 RGB   | -2px    | +100    | -0.005em  | CHANGE to 1px     | -4px     | 5 PASS   |
|          | deepest   | densest | heaviest| tightest  | data-level        | tightest |          |
```

The second row of each boundary is the TELESCOPE (semantic direction: "deeper," "denser," "heavier"). The first row is the MICROSCOPE (CSS values: `-14 RGB`, `+100 font-weight`, `ADD 3px`). They live in the SAME table, not in separate documents.

The builder executes the transition table as their PRIMARY navigation tool. At each zone boundary, they look up:
1. What CSS properties change (microscope)
2. By how much (microscope)
3. In which semantic direction (telescope)
4. Whether enough channels shift (>= 3, multi-coherence)

**Implementation:** The transition table becomes a required section of `_build-recipe.md`, generated by TC during the recipe generation phase. The table format includes both CSS values and semantic direction annotations. The handoff gate validates that every boundary row has >= 3 shifting channels AND semantic direction labels.

### 2.4 Mechanism 4: Compositional Phases in the Recipe

Report #17's hybrid recommendation (Section 15) reorganizes the recipe by SCALE rather than by CSS property type. The scale-organized phases embed compositional thinking structurally:

```
Phase 3: PAGE SCALE -- establish the macro composition
  Deploy ALL 6 channels at page level.
  >>> BOUNDARY CHECKPOINT at each zone boundary.
  "Deploy your metaphor's pattern at the Page scale."
  "Does the page have a visible density arc at full scroll?"

Phase 4: SECTION SCALE -- deploy the rhythm
  Deploy ALL 6 channels at section level.
  >>> BOUNDARY CHECKPOINT at each section transition.
  "Deploy your metaphor's pattern at the Section scale."
  "Do sections within the same zone feel related but distinct?"

Phase 5: COMPONENT SCALE -- deploy the vocabulary
  Deploy ALL 6 channels at component level.
  >>> FRACTAL CHECKPOINT: Does component-scale echo page-scale?
  "Deploy your metaphor's pattern at the Component scale."
  "Do components echo the page-scale pattern at smaller scale?"

Phase 6: CHARACTER SCALE -- deploy the finish
  Deploy ALL relevant channels at inline level.
  >>> FRACTAL CHECKPOINT: Does character-scale echo component-scale?
  "Deploy your metaphor's pattern at the Character scale."
```

Each phase says "deploy your pattern at [SCALE]" -- this IS the telescope. It tells the builder to think compositionally, not just property-by-property. The embedded checkpoints (boundary + fractal) force multi-coherence and fractal consistency at the MOMENT they matter, not post-hoc in Phase 8.

**Implementation:** The operational-recipe-template.md is rewritten from 9 CSS-property-type phases to the hybrid structure:
- Phases 0-2: ABSORB, SKELETON, FOUNDATION (unchanged, mechanical)
- Phases 3-6: PAGE SCALE, SECTION SCALE, COMPONENT SCALE, CHARACTER SCALE (compositional)
- Phases 7-8: ACCESSIBILITY, VERIFICATION (unchanged, mechanical)

Each creative phase (3-6) includes:
- ALL 6 channels (Chromatic, Typographic, Spatial, Structural, Behavioral, Material)
- Inline boundary checkpoints (from Alternative A)
- Fractal checkpoints (from Alternative B)
- Coherence rule reference (from Alternative C)
- Content-specific values from the build recipe instance

### 2.5 Mechanism 5: Creative Authority with Compositional Guardrails

CD-006's builder had PERMISSION to diverge. Convention S9 allowed "crown jewel divergence" (overriding type-page to 3rem). The builder's findings (CD-F-021 through CD-F-025) show metacognitive observation -- building, observing, understanding, adjusting.

PV2's recipe must grant equivalent creative authority WITHOUT becoming a blank check. The balance:

**The build recipe specifies VALUES but explicitly grants OVERRIDE AUTHORITY with logging:**

```
CREATIVE AUTHORITY CLAUSE

You are not a transcription machine. The build recipe provides values
derived from compositional analysis. These values are your STARTING POINT,
not your cage.

IF you discover during execution that:
  - A specified value does not LOOK right when rendered
  - Two adjacent values create an unintended visual effect
  - A component would benefit from a mechanism not in the recipe
  - The metaphor suggests a treatment the recipe does not specify

THEN you may:
  - OVERRIDE any non-soul value (backgrounds, spacing, typography, borders)
  - ADD mechanisms from the catalog that serve the content
  - ADJUST proportions to improve visual composition
  - INVENT component treatments not in the recipe

PROVIDED you:
  - DO NOT violate soul constraints (border-radius: 0, no shadows, etc.)
  - DO NOT violate perception thresholds (>= 15 RGB, >= 2px font, etc.)
  - LOG every override in your build log with: what you changed, from what
    to what, and WHY (in compositional terms, not "it looked better")
  - MAINTAIN the coherence direction at every boundary (>= 3 channels shifting)

The metaphor is your GUIDE, not your MASTER. If the metaphor says "deeper =
denser" but a specific section reads better with a breathing pause, ADD the
breathing pause and log: "Override: S7 density reduced from 24px to 48px
padding BECAUSE section introduces a new conceptual thread requiring cognitive
reset, per CD-F-022 (bridge transitions carry semantic load)."
```

This clause transforms the recipe from a cage into a runway. The builder knows it CAN diverge, which paradoxically makes it more likely to FOLLOW the recipe (the prophylactic paradox -- permission to diverge prevents reckless divergence because the builder doesn't feel trapped).

**Implementation:** The creative authority clause is included in the operational-recipe-template.md's preamble, immediately after soul constraints and before Phase 0. It is ~20 lines.

---

## 3. THE CD-006 MODEL: What "Full Creative Context" Means

Report #21 identifies 7 factors that made CD-006 work. Translating each to PV2:

### Factor 1: Opus, Not Sonnet
PV2 already mandates Opus builder. CHECK.

### Factor 2: Full Creative Context (~7 files of rich context)
CD-006's builder saw research, conventions, references, identity. PV2's builder sees recipe, build plan, tokens, prohibitions, components, catalog -- comparable VOLUME but different QUALITY.

**Gap:** PV2's builder sees WHAT to do but not WHY at the research level. The integrated build recipe (Mechanism 1) addresses this by embedding WHY at every instruction. But there's still a missing layer: RESEARCH CONTEXT.

**Addition:** TC planner includes a "Research Digest" section in the build recipe (~50 lines) that excerpts the 5-10 most relevant research findings for THIS content. Not the full 337 findings -- a curated selection. Example:

```
## RESEARCH DIGEST (for this build)

These findings from the design system research are most relevant
to your build decisions:

R3-023 (Fractal Self-Similarity): "The same density rhythm should
operate at navigation, page, section, component, and character scales."
--> Your page has 4 scales. Verify the metaphor's direction holds at each.

AD-F-025 (Transition Grammar): "SMOOTH transitions indicate low cognitive
boundary, BRIDGE indicates medium, BREATHING indicates high."
--> Your 4 zone boundaries should use transition types that match their
    cognitive distance, not arbitrary assignment.

CD-F-024 (Density Arc): "The CRESCENDO peak should land where content
density is highest, not at the end."
--> Your peak density zone is Zone 2 (S4-S8: analytical core), not Zone 3.

R5-017 (Content-Form Resonance): "The visual form should emerge from
the content's meaning, not be applied to the content's surface."
--> Every CSS decision should serve the geological strata metaphor's
    meaning (consolidation under pressure), not just satisfy thresholds.
```

### Factor 3: Content-Form Unity
CD-006's content was about building pages with the design system (meta-documentation). PV2 will build pages on diverse content. This factor is NOT replicable but IS addressable: the build recipe's BECAUSE clauses create EXPLICIT content-form connections. "Background #F0EBE3 BECAUSE this zone contains analytical depth and the strata metaphor says deeper = darker." This is artificial content-form unity -- not emergent but intentional.

### Factor 4: Single Builder, Single Pass, Full Compositional Memory
PV2 already mandates single Opus builder. CHECK.

### Factor 5: Convention-Based Creative Freedom (Not Recipe, Not Checklist)
Report #21 observes that CD-006's input was conventions (WHAT outcomes + WHY) not recipes (HOW steps) or checklists (VERIFY constraints). PV2's recipe is sequential steps. This is a FUNDAMENTAL tension.

**Resolution:** The build recipe uses RECIPE format for mechanical phases (0-2, 7) and CONVENTION format for compositional phases (3-6). Convention format means:

```
## Phase 5: COMPONENT SCALE

CONVENTION: Components echo the page-scale pattern at smaller scale.
If page = sparse-to-dense (topsoil-to-bedrock), then:
  - Zone 1 components: spacious internal padding, light backgrounds
  - Zone 2 components: moderate padding, medium backgrounds
  - Zone 3 components: tight padding, darker backgrounds

SPECIFIC COMPONENTS FOR THIS BUILD:
  .callout--info: Zone 1-2, background #FAF8F5, border-left 3px --color-border
  .callout--gotcha: Zone 2-3, background #F5F0E8, border-left 4px --color-primary
  .data-table: Zone 2-3, header bg #F0EBE3, striped rows
  .pull-quote: Zone 1, Instrument Serif italic, generous padding

Deploy these components. If you discover a section needs a component not
listed here, adopt from the component library (merged-components.css).
Log the addition with compositional reasoning.
```

This is BOTH convention (Components echo the page-scale pattern) AND recipe (specific class names, hex values, border specs). The telescope tells the builder the PRINCIPLE; the microscope tells them the VALUES; the creative authority clause lets them ADAPT.

### Factor 6: Metacognitive Builder Loop
CD-006's builder reflected on its own work and generated 5 findings (CD-F-021-025). PV2's recipe is execute-then-verify. Report #21 recommends adding Phase 6.5 (metacognitive reflection).

**Implementation:** Between Phase 6 (Character Scale) and Phase 7 (Accessibility), add:

```
## Phase 6.5: OBSERVATION PAUSE (5-10 min)

Stop. Scroll through your page from top to bottom at 1440px.

Write 2-3 observations about what you SEE:
  1. Is the density arc visible? Does the page feel [coherence direction]
     as you scroll? (e.g., "Does it feel like digging deeper?")
  2. Where is the DESIGNED MOMENT -- the one section that stops the eye?
     If there is no designed moment, identify the section with the most
     structured content and make it one (grid layout, featured table,
     pull-quote composition).
  3. What feels WRONG? Not "what violates a rule" but "what doesn't feel
     right." Trust your aesthetic judgment. If a section feels flat
     compared to its neighbors, it probably IS flat.

Adjust anything that doesn't feel right. Log adjustments.
This phase exists because CD-006 proved that building + observing +
adjusting = 39/40. Building + verifying = 3/4.
```

### Factor 7: Human Iteration Context
CD-006 was the product of human + Opus collaboration across 5 prior explorations. PV2 is fire-and-forget. This factor is NOT replicable in PV2's autonomous mode.

**Partial mitigation:** The research digest (Factor 2 addition) carries SOME of the accumulated human context. The 5-10 curated findings represent the distilled human intelligence from 337 findings across 5 research streams. It's not equivalent to 5 iterations of human review, but it's better than zero research context.

---

## 4. THE INTEGRATED FORMAT: COMPLETE SPECIFICATION

### 4.1 What TC Outputs (Build Recipe Instance)

TC Phase 4 (renamed "Build Recipe Generation") outputs `_build-recipe.md` with this structure:

```markdown
# BUILD RECIPE: [Content Title]

## METADATA
Metaphor: [name or FLAT MODE]
Coherence direction: [one sentence, e.g., "deeper = denser = darker = heavier"]
Zone count: [N]
Density pattern: [CRESCENDO/F-PATTERN/BENTO/PULSE]
Content type: [RESEARCH-SYNTHESIS/API-DOCS/TUTORIAL/NARRATIVE/REFERENCE]

## RESEARCH DIGEST
[5-10 curated findings relevant to this content, 50 lines max]

## TRANSITION TABLE
[Full table with CSS values + semantic direction labels, per Section 2.3]

## PHASE 0 INSTANCE: ABSORB
Zone-to-section mapping with semantic roles.
[Per-zone: section names, metaphor term, density level, purpose]

## PHASE 1 INSTANCE: SKELETON
Component assignments with BECAUSE clauses.
Grid layouts with content justification.
ARIA landmarks.

## PHASE 3 INSTANCE: PAGE SCALE
Per-zone: background hex, padding, metaphor meaning, content mapping.
Per-boundary: channels shifting, multi-coherence check (>= 3).
[As shown in Section 2.1 example]

## PHASE 4 INSTANCE: SECTION SCALE
Per-section margin and transition type with semantic reason.
Body typography per zone group.
Section borders with compositional purpose.

## PHASE 5 INSTANCE: COMPONENT SCALE
Component assignments with convention + specific values.
Fractal check: how components echo page-scale pattern.

## PHASE 6 INSTANCE: CHARACTER SCALE
Letter-spacing per zone (>= 0.03em deltas).
Link treatment, selection styling.
Fractal check: how character-level echoes component-level.

## MECHANISM DEPLOYMENT
[Per mechanism: catalog ID, category, specific CSS, zone assignment,
semantic reason (BECAUSE clause), rejection list with reasons]

## PHASE 8 INSTANCE: VERIFICATION
Expected cascade value table structure (pre-filled boundary rows).
Coherence rule verification criteria.
```

Estimated length: 300-500 lines (scales with zone count and content complexity).

### 4.2 What the Builder Receives

The builder reads, in order:

1. **operational-recipe-template.md** (~300 lines) -- Universal rules, soul constraints, perception thresholds, creative authority clause, phase structure (0-2 mechanical, 3-6 compositional, 6.5 observation, 7-8 mechanical).

2. **_build-recipe.md** (~300-500 lines) -- TC-generated, content-specific, integrated telescope+microscope. This is the PRIMARY document. Every phase instruction carries compositional meaning inline.

3. **tokens.css** (~174 lines) -- Exact token values (reference, not cover-to-cover).

4. **prohibitions.md** (~353 lines) -- Soul constraints (reference, loaded at Phase 2).

5. **merged-components.css** (~31K, reference) -- Component library classes (consulted at Phase 5).

6. **mechanism-catalog.md** (~870 lines, reference) -- Application modes for selected mechanisms (consulted at Phases 3-6 as needed).

**Total primary reading:** ~600-800 lines (template + instance).
**Reference files:** Consulted per-phase, not loaded cover-to-cover.

### 4.3 How the Builder Executes

For each creative phase (3-6):

1. Read the phase section from **operational-recipe-template.md** (universal structure: which channels to deploy, what thresholds apply, what checkpoints to hit).

2. Read the corresponding phase instance from **_build-recipe.md** (content-specific values: exact hex codes, exact px values, exact selectors, BECAUSE clauses, pre-calculated deltas).

3. Write CSS that implements the instance values within the template's constraints.

4. Execute the embedded perception gate ("Can you SEE?").

5. Execute the embedded boundary/fractal checkpoint.

6. If checkpoint fails: adjust BEFORE proceeding (multi-coherence is checked INLINE, not in Phase 8).

For Phase 6.5 (observation):
7. Scroll the page. Write 2-3 observations. Adjust what doesn't feel right. Log adjustments.

For Phase 8 (verification):
8. Build cascade value table from the boundary checkpoints already completed in Phases 3-4.
9. Verify coherence rule holds (this should be CONFIRMATION, not discovery, because it was checked at each boundary inline).

---

## 5. ADDRESSING THE SIX PROMPT QUESTIONS

### Q1: Integrated Recipe Format

YES, implemented as Mechanism 1 (Section 2.1). Every phase step = WHY (telescope, BECAUSE clause) + WHAT (microscope, CSS snippet). Not separate sections but interlaced at every instruction.

The format is:
```
VALUE: [exact CSS]
BECAUSE: [compositional reason, one line]
ARITHMETIC: [pre-calculated verification, e.g., RGB delta = 14, PASS >= 15]
```

This eliminates the mental merge that PV2 currently requires.

### Q2: Builder Reads the Build Plan

TRANSFORMED, implemented as Mechanism 2 (Section 2.2). The build plan IS the build recipe. TC's output format changes from planning manifest to integrated execution document. The builder doesn't read a separate "build plan" and then a separate "recipe" -- it reads ONE document that carries both planning intelligence and execution specifics.

The build recipe instance IS the telescope. It contains the metaphor, zone logic, mechanism selection, channel map -- all embedded at the point of use.

### Q3: Builder Reads the Transition Table

YES, implemented as Mechanism 3 (Section 2.3). The transition table is both telescope (semantic direction labels) and microscope (CSS delta values) in the same rows. It becomes a required section of _build-recipe.md, generated by TC.

The transition table is the builder's PRIMARY navigation tool for multi-coherence. At each boundary, the builder looks up which channels shift, by how much, and in which semantic direction.

### Q4: Compositional Phases in the Recipe

YES, implemented as Mechanism 4 (Section 2.4). The hybrid scale-organized phases (from Report #17, Section 15) embed compositional thinking structurally. Each creative phase says "deploy your pattern at [SCALE]" with boundary checkpoints (multi-coherence) and fractal checkpoints (pattern echo).

Phase structure:
- 0-2: Mechanical (absorb, skeleton, foundation)
- 3: PAGE SCALE (all 6 channels, boundary checkpoints)
- 4: SECTION SCALE (all 6 channels, transition type verification)
- 5: COMPONENT SCALE (all 6 channels, fractal checkpoint)
- 6: CHARACTER SCALE (relevant channels, fractal checkpoint)
- 6.5: OBSERVATION PAUSE (metacognitive reflection)
- 7-8: Mechanical (accessibility, verification)

### Q5: The CD-006 Model

ANALYZED in Section 3. Seven factors identified; four replicable in PV2:
- Opus builder (already mandated)
- Full creative context (research digest + integrated build recipe)
- Single builder/single pass (already mandated)
- Convention format for compositional phases (Phases 3-6 use convention + specific values)

Three NOT replicable:
- Content-form unity (artificial via BECAUSE clauses)
- Metacognitive loop (partial via Phase 6.5)
- Human iteration (partial via research digest)

The honest assessment: this design should raise the reliable floor from 3/4 to a more robust 3/4 and make 3.5/4 achievable. CD-006's 39/40 requires either human involvement or a fundamentally different approach.

### Q6: Creative Authority

YES, implemented as Mechanism 5 (Section 2.5). The creative authority clause grants explicit PERMISSION to override non-soul values, add mechanisms, adjust proportions, and invent treatments -- PROVIDED the builder maintains soul constraints, perception thresholds, coherence direction, and LOGS every override.

The clause transforms the recipe from a cage into a runway. The builder knows it CAN diverge, and the logging requirement ensures overrides are compositionally justified, not random.

---

## 6. WHAT CHANGES IN PV2

### 6.1 TC Skill Changes

**New sub-phase: Phase 4.8 (Build Recipe Generation)**

After extracting metaphor properties (4.1), mapping CSS channels (4.2), checking coherence (4.3), inventorying components (4.4), deciding adapt-vs-invent (4.5), building transition grammar (4.6), validating fractal consistency (4.7), and verifying landmarks (4.7B):

TC generates `_build-recipe.md` in the integrated format (Section 4.1). This replaces the current `_build-plan.md` output. The new output is LONGER (~300-500 lines vs ~100 lines) but STRUCTURED to mirror recipe phases and INTEGRATED with compositional reasoning.

This is NOT a new creative step. TC already produces all this information. The change is OUTPUT FORMAT: structured, phase-aligned, telescope+microscope integrated.

**New section: Research Digest**

TC includes a ~50-line research digest in the build recipe, curating the 5-10 most relevant findings from the design system research. This requires TC to have access to RESEARCH-SYNTHESIS.md during planning.

Estimated addition to TC skill: ~100 lines of protocol description.

### 6.2 Operational Recipe Changes

**Rewrite from property-type phases to scale-organized phases.**

Current 9 phases (property-type):
```
0: Content analysis, 1: HTML skeleton, 2: CSS reset + soul,
3: Zone backgrounds, 4: Borders + dividers, 5: Typography zones,
6: Element-level richness, 7: Accessibility, 8: Verification
```

Proposed 10 phases (scale-organized):
```
0: ABSORB, 1: SKELETON, 2: FOUNDATION,
3: PAGE SCALE, 4: SECTION SCALE, 5: COMPONENT SCALE, 6: CHARACTER SCALE,
6.5: OBSERVATION PAUSE,
7: ACCESSIBILITY, 8: VERIFICATION
```

The recipe template shrinks from ~650 lines to ~300 lines (content-specific values move to the build recipe instance).

**Add creative authority clause** (~20 lines in preamble).

**Add Phase 6.5 observation pause** (~15 lines).

### 6.3 Handoff Gate Changes

Current 5 binary checks become 7:

| Check | Current | New |
|-------|---------|-----|
| Zone count 2-5? | YES | YES |
| BG colors >= 15 RGB delta? | YES | YES |
| >= 2 grid layouts? | YES | YES |
| Per-category mechs met? | YES | YES |
| >= 3 transition types? | YES | YES |
| Build recipe has phase-aligned sections? | -- | NEW |
| Each section has BECAUSE clauses? | -- | NEW |

### 6.4 Builder Prompt Changes

From:
"Read operational-recipe.md and _build-plan.md. Execute 9 phases."

To:
"Read operational-recipe-template.md for universal rules. Read _build-recipe.md for YOUR BUILD's specific values and compositional reasoning. At each creative phase (3-6), deploy your metaphor's pattern at the named scale. You have creative authority to override non-soul values -- log overrides with compositional reasoning."

### 6.5 Per-Agent Memory Briefs

Report #18 (Section 5.2) designs role-specific briefs. The builder brief should include the anti-scale model as a shared frame:

```
RICHNESS = semantic density x restraint x spatial confidence
density = mechanisms per zone (not total count)
restraint = unused CSS budget (what you DIDN'T add)
confidence = whitespace-to-content ratio (breathing room)
```

These 4 lines, added to the builder brief preamble, align judgment without explicit rules.

---

## 7. ESTIMATED IMPACT

### 7.1 Intelligence Survival

| Metric | Current (Separate Files) | Proposed (Integrated) |
|--------|------------------------|----------------------|
| TC-to-builder intelligence survival | ~35-45% | ~70-80% |
| Builder re-derivation errors | ~15-25% of mechanisms | ~5-10% |
| Mental merge overhead | HIGH (2 documents) | NEAR-ZERO (aligned phases) |
| Compositional reasoning at CSS point-of-use | ABSENT | PRESENT (BECAUSE clauses) |

### 7.2 Projected PA-05

| Configuration | Expected PA-05 |
|--------------|---------------|
| Current PV2 design (separate telescope + microscope) | 3.0/4 |
| Integrated format (this design) | 3.0-3.5/4 |
| Integrated + Phase 6.5 observation | 3.2-3.5/4 |
| Integrated + observation + 1 fix cycle | 3.3-3.8/4 |
| CD-006 model (human iteration, full context) | 4.0/4 (ceiling) |

### 7.3 Cost

| Change | Lines Added | Lines Removed | Net |
|--------|-------------|---------------|-----|
| TC Phase 4.8 protocol | +100 | 0 | +100 |
| Recipe template (rewrite) | +300 | -650 | -350 |
| Build recipe instance (per build) | +300-500 | -100 (old build plan) | +200-400 |
| Creative authority clause | +20 | 0 | +20 |
| Phase 6.5 observation | +15 | 0 | +15 |
| Research digest protocol | +30 | 0 | +30 |
| Handoff gate (2 new checks) | +8 | 0 | +8 |
| **Net change to permanent files** | | | **-177** |
| **Per-build generated content** | | | **+200-400** |

Permanent infrastructure SHRINKS. Per-build compositional intelligence GROWS. This is the correct direction.

---

## 8. RISKS

### Risk 1: TC takes longer to generate integrated build recipe
**Severity:** LOW. TC already produces all the information. The change is output restructuring (~5-10 min additional), not new analysis.

### Risk 2: Builder overwhelmed by ~800 lines of primary input
**Severity:** MODERATE. Mitigation: the build recipe is STRUCTURED by phase. The builder reads Phase 3 Instance when executing Phase 3, not the entire instance upfront. Effective per-phase reading: ~40-60 lines.

### Risk 3: BECAUSE clauses become formulaic
**Severity:** MODERATE. If TC writes "BECAUSE the metaphor says so" for every value, the telescope degrades to noise. Mitigation: the handoff gate checks that BECAUSE clauses contain SPECIFIC metaphor terms and content references, not generic justifications.

### Risk 4: Creative authority leads to soul violations
**Severity:** LOW. The clause explicitly restricts overrides to non-soul values. Perception thresholds are also protected. The builder can diverge on COMPOSITION but not on IDENTITY.

### Risk 5: Phase 6.5 observation adds nothing
**Severity:** LOW. If the builder's observation is "everything looks fine," the pause cost is 5 minutes. If it catches a flat zone or broken density arc, the correction is worth 30+ minutes of fix-cycle time.

---

## 9. VERDICT

The builder needs BOTH the telescope and the microscope, not as separate documents (theory + recipe) but as INTEGRATED KNOWLEDGE. The five mechanisms in this design achieve this:

1. **Integrated build recipe:** Every CSS instruction carries its compositional meaning (BECAUSE clause). No separate planning document to mentally merge.

2. **Builder reads the build plan as the build recipe:** TC's output format changes from planning manifest to integrated execution document aligned with recipe phases.

3. **Transition table as telescope+microscope bridge:** CSS delta values and semantic direction labels in the same rows. The builder's primary navigation tool for multi-coherence.

4. **Scale-organized compositional phases:** The recipe structure embeds compositional thinking by organizing creative phases by SCALE (Page/Section/Component/Character) with boundary and fractal checkpoints inline.

5. **Creative authority with compositional guardrails:** The builder has explicit permission to override non-soul values, provided it maintains coherence direction, perception thresholds, and logs every override with compositional reasoning.

The result: a builder that knows WHAT to write (microscope), WHY to write it (telescope), HOW MUCH to shift (thresholds), and WHEN to diverge (creative authority) -- all in ONE integrated knowledge flow.

The honest limitation: this design raises the reliable floor from 3/4 to a robust 3/4 and makes 3.5/4 achievable in many builds. CD-006's 4/4 requires either human involvement or an approach that trusts Opus more and constrains it less. But the recipe + integrated telescope/microscope + creative authority + observation pause is the closest autonomous approximation to what CD-006's builder had naturally.

---

**END OF DESIGN REPORT**

**Key files referenced:**
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/17-design-recipe-restructure.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/18-design-builder-visibility.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/21-integration-cd006.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/22-integration-remediation.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/28-meta-propagation.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/PV2-PIPELINE-DIAGRAM.md`
