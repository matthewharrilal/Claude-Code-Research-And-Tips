# DESIGN: Recipe Phase Restructuring -- Embedding Compositional Intelligence

**Author:** Recipe Phase Restructurer (Opus 4.6)
**Task:** #17
**Date:** 2026-02-19
**Sources:**
- PV2-PIPELINE-DIAGRAM.md (977 lines, complete PV2 architecture)
- TC SKILL.md (~1,878 lines, tension-composition pipeline)
- 14-MASTER-SYNTHESIS.md (615 lines, 23-report cross-reference)
- mechanism-catalog.md (~870 lines, 18 mechanisms)

---

## 1. THE CORE PROBLEM

The Middle experiment succeeded because the builder received a 100-line RECIPE: sequenced steps, specific CSS values, "Read/Select/Deploy/Assess" verbs. The Flagship failed because the builder received a 71-line CHECKLIST: all constraints, "Verify/Fail if/Must be" verbs.

But PV2's current 9-phase recipe (Phases 0-8 in the operational-recipe.md) is STRUCTURALLY correct yet COMPOSITIONALLY hollow. Each phase tells the builder WHAT to build and provides perception thresholds, but does NOT embed the intelligence that makes the composition cohere across phases. The recipe phases are:

| Phase | Current Content | What's MISSING |
|-------|----------------|----------------|
| 0 | Read build plan, map zones | WHY these zones have these relationships |
| 1 | HTML skeleton, component classes | WHICH components serve which metaphor properties |
| 2 | CSS reset, soul, base typography | (Adequate -- soul is mechanical) |
| 3 | Zone backgrounds (>=15 RGB) | HOW background progression encodes the metaphor |
| 4 | Borders, dividers, transitions | WHY this transition is SMOOTH vs BRIDGE vs BREATHING |
| 5 | Typography zones (>=2px delta) | HOW typography scale maps to content authority |
| 6 | Element-level richness | WHICH mechanisms from which categories and WHY |
| 7 | Accessibility | (Adequate -- accessibility is mechanical) |
| 8 | Verification + cascade table | WHAT coherence means across all channels |

The missing column is the compositional intelligence. The recipe tells the builder to apply >=15 RGB delta between zones (perception threshold), but not that the zones encode semantic progression from introduction to depth to resolution. It tells the builder to use 3 transition types, but not that SMOOTH transitions mean same-axis continuation while BREATHING transitions signal major semantic shifts.

---

## 2. DIAGNOSIS: WHERE COMPOSITIONAL INTELLIGENCE CURRENTLY LIVES

### 2.1 In the TC Planner (Phases 0-3.5)

The TC skill is WHERE compositional intelligence is generated. TC Phase 1 derives reader needs across 9+ axes. Phase 2 identifies genuine tensions. Phase 3 collapses tensions into structural metaphor. Phase 3.5 validates the metaphor. Phase 4 extracts physical properties across 5 categories and maps them to 6 CSS channels.

The TC planner outputs `_build-plan.md` containing:
- Zone count and section inventory
- Mechanism deployment per category (S:1+, T:1+, M:1+, B:1+, R:1+)
- Background colors per zone (with RGB deltas)
- Isomorphism table (metaphor element -> CSS form)
- Transition plan (>=3 types)
- Builder warnings

### 2.2 In the Operational Recipe (~650 lines)

The recipe is WHERE compositional intelligence should be consumed but ISN'T. The recipe's 9 phases provide:
- Sequential build order (correct)
- Specific CSS values (correct)
- Perception thresholds (correct)
- "Can you SEE?" self-checks (correct)
- Phase checkpoints (correct)

But the recipe is CONTENT-AGNOSTIC. It says "apply >=15 RGB delta" regardless of whether the content is research synthesis, API docs, or a tutorial. The compositional intelligence (WHY these zones, WHY this progression, WHY these specific mechanisms) is locked in `_build-plan.md` and never structurally integrated into the recipe phases.

### 2.3 The Handoff Gap

The builder reads 6 files:
1. operational-recipe.md (~650 lines)
2. _build-plan.md (from TC)
3. tokens.css
4. prohibitions.md
5. merged-components.css
6. mechanism-catalog.md

Files 1 and 2 are the critical pair. But the builder has to MENTALLY MERGE them -- reading the recipe's Phase 3 instruction ("Apply zone backgrounds") and then looking up the build plan's zone specification to know WHICH backgrounds. This mental merge is where compression happens. The builder reads two documents and compresses their intersection into implementation.

The Middle experiment's recipe DID NOT have this gap. The Middle recipe was a SINGLE document that said: "For Section 1 (introduction), deploy sparse background #FEF9F5, 64px padding, Instrument Serif heading. For Section 2 (technical depth), deploy dense background #F0EBE3, 32px padding, border-left 4px." The compositional intelligence was INLINE with the build steps.

The Flagship checklist said: "Must have >=8 mechanisms. Must have >=15 RGB delta. Verify >=3 transition types." The intelligence was extracted into constraints, losing the semantic connection.

---

## 3. THE RESTRUCTURING: RECIPE = TEMPLATE + BUILD PLAN MERGE

### 3.1 Core Insight

The operational-recipe.md should NOT be a static 650-line document. It should be a TEMPLATE that TC generates a CONCRETE INSTANCE of for each build.

Static recipe (current):
```
Phase 3: Zone Backgrounds
- Apply background colors per zone from build plan.
- MANDATORY: >= 15 RGB delta between adjacent zones.
- "Can you SEE the zone boundaries without borders?"
```

Concrete recipe instance (proposed):
```
Phase 3: Zone Backgrounds -- YOUR BUILD

ZONE 1 (Introduction -- "Surface Layer"):
  Background: #FEF9F5 (warm cream)
  Padding: 64px 32px
  Metaphor: Surface = accessible, inviting, sparse
  Content: Opening context, "You Are Here" orientation
  Channels shifting from previous zone: N/A (first zone)

ZONE 2 (Technical Depth -- "Sediment"):
  Background: #F0EBE3 (earthy tan) [delta from Zone 1: R-14, G-17, B-18 = PASS >=15]
  Padding: 32px 32px
  Metaphor: Sediment = partially consolidated, moderate density
  Content: Core findings, evidence chains, detailed analysis
  Channels shifting: Chromatic (+17 avg), Spatial (64px->32px = 50% compression)

ZONE 3 (Reference -- "Bedrock"):
  Background: #E6DFD4 (warm stone) [delta from Zone 2: R-10, G-12, B-15 = CHECK]
  Padding: 24px 32px
  Metaphor: Bedrock = consolidated, dense, foundational
  Content: Appendices, reference tables, citations
  Channels shifting: Chromatic (+12 avg), Spatial (32px->24px), Typographic (body->detail)

Verification: Are zone boundaries visible WITHOUT borders?
If NO: Increase chromatic delta. Check if backgrounds are within 15 RGB of each other.
```

### 3.2 The Two-Layer Recipe Architecture

**Layer A: Recipe Template** (`operational-recipe.md`, ~300 lines, permanent)

The STRUCTURAL skeleton that every build follows. This layer contains:
- Phase ordering (0-8, immutable)
- Perception thresholds (>=15 RGB, >=2px font-size, <=108px stacked gap)
- Soul constraints (border-radius: 0, container 940-960px)
- Accessibility requirements (ARIA, skip link, focus styles)
- Self-check questions per phase
- Cascade value table format (Phase 8 deliverable)

This layer is what File 42 produces. It's the universal infrastructure.

**Layer B: Build Recipe Instance** (`_build-recipe.md`, ~200-400 lines, generated per build)

The COMPOSITIONAL intelligence for THIS specific build. Generated by TC, it fills the template's slots with content-specific values. This layer contains:
- Per-zone specification (background, padding, metaphor meaning, content mapping)
- Per-section mechanism assignment (WHICH mechanisms, WHY, from which catalog entries)
- Per-transition type selection (SMOOTH/BRIDGE/BREATHING with semantic justification)
- Channel shift tracking (which channels shift at each boundary, by how much)
- Metaphor-to-CSS isomorphism table (from TC Phase 3)
- Coherence rules specific to this metaphor (e.g., "deeper = denser = darker = heavier")

### 3.3 How TC Generates the Build Recipe Instance

Currently, TC outputs `_build-plan.md` as a planning document. Under the restructured model, TC Phase 4 changes its output format. Instead of a plan, TC generates a BUILD RECIPE INSTANCE that structurally mirrors the recipe template.

**TC Phase 4 (revised): Recipe Instance Generation**

For EACH of the 9 recipe phases, TC writes the content-specific version:

```
## BUILD RECIPE INSTANCE
## Generated by TC for: [content name]
## Metaphor: [committed metaphor]
## Zone count: [N]
## Density pattern: [CRESCENDO/F-PATTERN/BENTO/PULSE]

### Phase 0 Instance: Content -> Zone Mapping

Zone 1: [section names] -- "[metaphor term]"
  Purpose: [what reader needs from this zone]
  Density: SPARSE (opening)

Zone 2: [section names] -- "[metaphor term]"
  Purpose: [what reader needs from this zone]
  Density: MODERATE (building)

Zone 3: [section names] -- "[metaphor term]"
  Purpose: [what reader needs from this zone]
  Density: DENSE (peak)

Zone 4: [section names] -- "[metaphor term]"
  Purpose: [what reader needs from this zone]
  Density: BREATHING (resolution)

### Phase 1 Instance: HTML Skeleton

Component assignments:
  - [section name]: .callout-box (info variant) -- BECAUSE [reason]
  - [section name]: .data-table + .grid-2col -- BECAUSE [reason]
  - [section name]: .pull-quote -- BECAUSE [reason]

Grid layouts:
  - Zone 2: grid-2col for [content type] -- BECAUSE [parallel structure]
  - Zone 3: grid-3col for [content type] -- BECAUSE [comparison needed]

ARIA landmarks:
  - main: entire content area
  - nav: table of contents
  - complementary: sidebar callouts

### Phase 3 Instance: Zone Backgrounds

Zone 1 -> Zone 2: [hex1] -> [hex2]
  RGB delta: R=[n], G=[n], B=[n] (total [n], PASS/FAIL >=15)
  Semantic: [metaphor-driven reason for this progression]

Zone 2 -> Zone 3: [hex2] -> [hex3]
  RGB delta: R=[n], G=[n], B=[n] (total [n], PASS/FAIL >=15)
  Semantic: [metaphor-driven reason]

Zone 3 -> Zone 4: [hex3] -> [hex4]
  RGB delta: R=[n], G=[n], B=[n] (total [n], PASS/FAIL >=15)
  Semantic: [metaphor-driven reason]

### Phase 4 Instance: Borders + Transitions

Transition Zone 1->2: SMOOTH
  CSS: margin-bottom: 48px; border-top: 1px solid var(--color-border)
  Semantic: Same-axis continuation. Both zones address [content theme].

Transition Zone 2->3: BRIDGE
  CSS: margin-bottom: 64px; background: var(--color-zone-breathing); padding: 32px
  Semantic: Cross-axis shift. Content moves from [theme A] to [theme B].
  Bridge text: [optional contextual transition sentence]

Transition Zone 3->4: BREATHING
  CSS: margin-bottom: 80px; border-top: 3px solid var(--color-border)
  Semantic: Major shift from [dense reference] to [resolution/conclusion].

### Phase 5 Instance: Typography

Display zone (h1, h2): 28-36px, Instrument Serif
  Deployed in: Zone 1 (title), Zone 2 (section headers)
  Semantic: [metaphor-driven authority level]

Body zone (p, li): 16-18px, system serif
  Deployed in: All zones
  Semantic: Standard reading voice

Detail zone (captions, meta): 13-14px, system sans
  Deployed in: Zone 3 (reference labels), Zone 4 (footer credits)
  Semantic: [metaphor-driven precision level]

### Phase 6 Instance: Mechanism Deployment

SPATIAL mechanisms:
  #5 Dense/Sparse Alternation -- Zone 1 (sparse, 64px) <-> Zone 3 (dense, 24px)
    WHY: Content moves from overview to reference. Spacing encodes depth.
    CSS: .zone-1 { padding: 64px 32px } .zone-3 { padding: 24px 32px }

HIERARCHY mechanisms:
  #1 Border-Weight Gradient -- 4px for [highest importance], 3px for [structural], 1px for [data]
    WHY: Content has [N] levels of importance. Border weight maps to [metaphor dimension].
    CSS: .callout-critical { border-left: 4px solid var(--color-primary) }

COMPONENT mechanisms:
  #2 2-Zone DNA -- All callouts use label/body split
    WHY: [Content has N callout types] requiring categorical differentiation.
  #10 Border-Left Signal -- 4px left border on all emphasized content
    WHY: Immediate visual scanning affordance for [content type].

DEPTH mechanisms:
  #7 Zone Backgrounds -- 4-color zone system encoding [metaphor dimension]
    WHY: Background color = primary channel for zone differentiation.

STRUCTURE mechanisms:
  #13 Dark Header -- Dark background + 3px primary border
    WHY: Page landmark, entry point, metaphor's [surface/entrance] expression.
  #14 Footer Mirror -- Dark background + 3px border-top
    WHY: Page completion, structural bookend, metaphor's [foundation] expression.

REJECTED mechanisms (with reasons):
  #3 Solid Offset Depth -- Content has no featured-element pattern requiring pseudo-shadow.
  #16 Drop Cap -- Content is technical; drop cap implies editorial/narrative tone.
  #8 Scroll Witness -- Page is 4 zones, short enough that sticky TOC adds complexity without value.

### Phase 8 Instance: Coherence Verification

Expected cascade value table structure:

  | Boundary | Background | Font-Size | Font-Weight | Letter-Spacing | Border-Left | Para Margin | Color |
  |----------|-----------|-----------|-------------|---------------|-------------|-------------|-------|
  | Zone 1->2 | [values] | [values] | [values] | [values] | [values] | [values] | [values] |
  | Zone 2->3 | [values] | [values] | [values] | [values] | [values] | [values] | [values] |
  | Zone 3->4 | [values] | [values] | [values] | [values] | [values] | [values] | [values] |

Coherence rule for this build:
  "[Metaphor coherence direction]" -- e.g., "Deeper = denser = darker = heavier"
  At EVERY boundary, >=3 channels must shift in the metaphor's direction.
  If any boundary has <3 shifting channels: STOP and add mechanisms.
```

---

## 4. WHAT CHANGES IN THE PIPELINE

### 4.1 TC Skill Changes

TC's current Phase 4 ("Compositional Layout Generation") outputs a build plan. Under the restructuring, TC Phase 4 outputs a BUILD RECIPE INSTANCE in the format above.

This means TC needs a new sub-phase:

**Phase 4.8: Recipe Instance Generation (NEW)**

After extracting metaphor properties (4.1), mapping CSS channels (4.2), checking coherence (4.3), inventorying components (4.4), deciding adapt-vs-invent (4.5), building transition grammar (4.6), validating fractal consistency (4.7), and verifying landmarks (4.7B), TC generates the build recipe instance by filling the recipe template's phase-by-phase structure with content-specific values.

This is NOT a new creative step. TC already produces all this information. The change is in OUTPUT FORMAT: instead of a free-form build plan, TC structures its output to MIRROR the recipe phases. The builder then reads one document that has both the universal recipe and the content-specific instance merged.

### 4.2 Builder Input Changes

Currently, builder reads 6 files. Under restructuring:

| File | Lines | Status |
|------|-------|--------|
| operational-recipe.md | ~300 | SHORTENED (template only, no content-specific values) |
| _build-recipe.md | ~200-400 | NEW (TC-generated instance, replaces _build-plan.md) |
| tokens.css | ~174 | UNCHANGED |
| prohibitions.md | ~353 | UNCHANGED |
| merged-components.css | ~31K | UNCHANGED |
| mechanism-catalog.md | ~870 | UNCHANGED |

Total builder input: ~300 + ~300 + 174 + 353 + (100 lines sampled from components) + 870 = ~2,097 lines.
This is LARGER than the current ~1,150 lines. But the critical difference: the recipe instance ELIMINATES the mental merge. The builder reads Phase 3 of the recipe template ("apply zone backgrounds at >=15 RGB delta") and Phase 3 of the recipe instance ("Zone 1: #FEF9F5, Zone 2: #F0EBE3, delta R-14 G-17 B-18, semantic: surface->sediment"). No cross-referencing needed.

### 4.3 Orchestrator Changes

The `/build-page` orchestrator adds one step:

```
WAVE 0: TC Planner runs Phases 0-4.8
  Output: _build-recipe.md (build recipe instance)

WAVE 0.5: Metaphor validation (if metaphor exists)

WAVE 0.9: Handoff gate (checks _build-recipe.md structure)
  NEW CHECK: Does _build-recipe.md have Phase Instance sections for 0,1,3,4,5,6,8?
  NEW CHECK: Does each Phase Instance include semantic justification?

WAVE 1: Builder reads operational-recipe.md (template) + _build-recipe.md (instance)
```

### 4.4 Handoff Gate Changes

The current 5 binary checks become 7:

| Check | Current | New |
|-------|---------|-----|
| Zone count 2-5? | YES | YES |
| BG colors >=15 RGB delta? | YES | YES |
| >=2 grid layouts? | YES | YES |
| Per-category mechs met? | YES | YES |
| >=3 transition types? | YES | YES |
| Recipe instance has phase sections? | -- | NEW |
| Each phase section has semantic justification? | -- | NEW |

---

## 5. HOW TO GENERATE A RECIPE WITHOUT COMPRESSION

The core question: How do you route 1,878 lines of TC skill intelligence into a ~300-line recipe instance without the 50:1 compression that killed the flagship?

### 5.1 The Answer: Phase-Gated Routing

Compression happens when you extract CONCLUSIONS from analysis. The flagship master prompt compressed 337 research findings into "sample 2-4 mechanisms" -- that's 50:1.

The recipe instance avoids compression by ROUTING, not EXTRACTING. Each TC phase produces output that goes DIRECTLY to the corresponding recipe phase:

| TC Phase | Produces | Routes To |
|----------|----------|-----------|
| Phase 0 (Content Analysis) | Zone count, section inventory | Recipe Phase 0 Instance |
| Phase 1 (Multi-Axis Questioning) | Reader needs per axis | Recipe Phase 6 Instance (mechanism selection WHY) |
| Phase 2 (Tension Derivation) | Genuine tensions | Recipe Phase 8 Instance (coherence rule) |
| Phase 3 (Metaphor Collapse) | Isomorphism table | Recipe Phase 3, 4, 5 Instances (per-zone semantics) |
| Phase 3.5 (Lock-In Gate) | Committed metaphor | Recipe header |
| Phase 4.0 (Guardrails) | Threshold values | Recipe template (already present) |
| Phase 4.1 (Property Extraction) | 5-category properties | Recipe Phase 6 Instance (mechanism selection) |
| Phase 4.2 (Translation Grammar) | CSS channel mappings | Recipe Phases 3-6 Instances (specific CSS) |
| Phase 4.3 (Coherence Check) | C-1 through C-5 rules | Recipe Phase 8 Instance (verification criteria) |
| Phase 4.6 (Transition Grammar) | Transition types | Recipe Phase 4 Instance (per-boundary transitions) |
| Phase 4.7 (Fractal Gate) | Scale coverage table | Recipe Phase 8 Instance (fractal verification) |

Each routing is DIRECT: TC Phase X output becomes Recipe Phase Y input. No intermediate compression. No "summarize 337 findings into 5 rules." The TC planner writes the recipe instance AS IT PLANS, not after.

### 5.2 The Key Innovation: TC Writes the Recipe, Not a Separate Document

Currently:
```
TC planner -> _build-plan.md (planning document)
               |
               v
Orchestrator validates build plan
               |
               v
Builder reads recipe + build plan (two documents, mental merge required)
```

Proposed:
```
TC planner -> _build-recipe.md (recipe instance in recipe-phase format)
               |
               v
Orchestrator validates recipe instance structure
               |
               v
Builder reads recipe template + recipe instance (same structure, no merge)
```

The TC planner's output format changes from "here's what I planned" to "here's your recipe for this specific build." The planner is writing INSTRUCTIONS, not ANALYSIS.

### 5.3 What the Middle Experiment Got Right (and How to Reproduce It)

The Middle experiment's recipe was written by the team lead, who had full TC context and translated it directly into builder instructions. The key properties:

1. **Per-section specificity:** "Section 1: Introduction. Deploy sparse background #FEF9F5, 64px padding."
2. **Action verbs:** "Deploy," "Apply," "Set," "Assess."
3. **Semantic connection:** "BECAUSE this section introduces the reader and needs generous breathing room."
4. **Sequential ordering:** Steps 1-2-3 in build order, not a pile of constraints.
5. **Inline verification:** "Can you SEE the zone boundary? If not, increase contrast."

All five properties emerge naturally from TC writing the recipe instance in phase-by-phase format. The TC planner HAS all this information; the restructuring just changes the output format.

---

## 6. CONCRETE RECIPE TEMPLATE STRUCTURE

### 6.1 The Template (~300 lines)

```markdown
# OPERATIONAL RECIPE TEMPLATE
# Use this template with the build recipe instance (_build-recipe.md) for each build.

## Universal Constants (apply to ALL builds)

### Soul (immutable)
- border-radius: 0
- box-shadow: none
- No drop-shadow filter
- No pure #000000 or #FFFFFF
- No gradient backgrounds
- Container: max-width 960px, margin: 0 auto

### Perception Thresholds (immutable)
- Background delta: >= 15 RGB between adjacent zones
- Font-size delta: >= 2px between typographic zones
- Letter-spacing delta: >= 0.03em between zones
- Stacked gap: <= 108px total at section boundaries
- CPL: 45-80 characters per line
- Compression ratio: densest padding >= 40% of sparsest
- Heading spacing: space-above / space-below >= 1.5

### Phase Structure

PHASE 0: ABSORB
  Read: _build-recipe.md Phase 0 Instance
  Action: Confirm zone-to-section mapping. Verify you understand the metaphor.
  Self-test: "Am I about to BUILD or about to PLAN?" (If plan: STOP. Trust TC.)
  Checkpoint: Confirm understanding with planner.

PHASE 1: SKELETON
  Read: _build-recipe.md Phase 1 Instance
  Action: Write semantic HTML. Apply component classes from instance.
  Apply: Grid layouts as specified. ARIA landmarks as specified.
  Self-test: "Does every section have a zone class? Does every component have a library class?"
  Checkpoint: Submit HTML for planner review.

PHASE 2: FOUNDATION
  Action: Write CSS reset. Apply soul constraints. Set base typography.
  CSS: ~50 lines. This is mechanical -- no creative decisions.
  Self-test: "Is border-radius 0 everywhere? Is box-shadow none?"

PHASE 3: ZONES
  Read: _build-recipe.md Phase 3 Instance
  Action: Apply zone backgrounds exactly as specified.
  Verify: RGB deltas as calculated in instance. ALL must pass >=15.
  Self-test: "Can I SEE the zone boundaries without borders?"
  Checkpoint: Submit zones for planner review.

PHASE 4: STRUCTURE
  Read: _build-recipe.md Phase 4 Instance
  Action: Apply borders, dividers, transitions as specified.
  Deploy: Transition types exactly as specified (SMOOTH/BRIDGE/BREATHING).
  Self-test: "Are there >=3 different transition types? Can I FEEL the boundary shifts?"
  Checkpoint: Submit structure for planner review.

PHASE 5: TYPOGRAPHY
  Read: _build-recipe.md Phase 5 Instance
  Action: Apply 3-zone typography arc as specified.
  Verify: Font-size delta >=2px between zones. Letter-spacing delta >=0.03em.
  Self-test: "Is heading text visibly DIFFERENT from body text?"

PHASE 6: RICHNESS
  Read: _build-recipe.md Phase 6 Instance
  Action: Deploy mechanisms as specified with justifications.
  For each mechanism: Read catalog entry, apply to YOUR content, verify semantic fit.
  Self-test: "Does every mechanism serve the CONTENT, not just fill a category?"

PHASE 7: ACCESSIBILITY
  Action: Skip link, ARIA >=3, focus styles, reduced motion, responsive, print.
  CSS: ~180 lines. This is mechanical.
  Self-test: "Tab through the page. Does every interactive element have visible focus?"

PHASE 8: VERIFICATION
  Read: _build-recipe.md Phase 8 Instance
  Action: Build cascade value table. Verify >=3 channels shift at every boundary.
  Apply: Coherence rule from instance. Check that metaphor direction holds.
  Deliverable: Cascade value table (REQUIRED).
  Final checkpoint: Submit complete page for planner review.
```

### 6.2 The Instance Generation Protocol

TC writes the build recipe instance by following this protocol at the END of its planning phases:

```
RECIPE INSTANCE GENERATION PROTOCOL

After completing TC Phases 0-4.7B, generate _build-recipe.md as follows:

1. HEADER
   - Content name, metaphor (or FLAT MODE), zone count, density pattern
   - Coherence rule: one sentence describing the metaphor's CSS direction
     e.g., "Deeper = denser = darker = heavier"

2. For EACH recipe phase (0, 1, 3, 4, 5, 6, 8):
   a. State the phase name
   b. Provide CONCRETE values (hex colors, pixel values, class names)
   c. For EACH value, provide one-sentence semantic justification
      ("BECAUSE [content property] maps to [metaphor property] via [CSS channel]")
   d. Include pre-calculated verification
      (RGB deltas, font-size deltas, stacked gap totals)

3. MECHANISM TABLE
   - For each deployed mechanism: catalog number, category, CSS, location, semantic reason
   - For >=3 rejected mechanisms: catalog number, rejection reason

4. TRANSITION TABLE
   - For each zone boundary: transition type, CSS, semantic reason

5. CASCADE VALUE TABLE TEMPLATE
   - Pre-fill the boundary rows based on zone count
   - Include expected ranges for each channel

FORMAT RULES:
- Use action verbs: "Set," "Apply," "Deploy," "Verify"
- Include specific values: hex codes, pixel values, percentages
- Include "BECAUSE" justification for every compositional decision
- Pre-calculate all verification math (RGB deltas, ratios)
- Total length: 200-400 lines (scales with zone count)
```

---

## 7. THE FIVE QUESTIONS ANSWERED

The task asked whether each recipe phase includes five dimensions. Here is the assessment:

### 7.1 WHAT to build (structural) -- ADDRESSED by recipe template

The recipe template provides the structural skeleton: Phase 0 = zone mapping, Phase 1 = HTML skeleton, Phase 2 = CSS reset, etc. This is the static layer that every build shares. The current PV2 9-phase structure handles this correctly.

### 7.2 HOW to express the pattern (compositional) -- ADDRESSED by recipe instance

The build recipe instance provides per-zone, per-section compositional directives. "Zone 2 uses #F0EBE3 BECAUSE sediment is partially consolidated." This is the layer that was MISSING from the flagship checklist and PRESENT in the middle recipe.

### 7.3 WHICH channels to shift (multi-coherence) -- ADDRESSED by instance Phase 3-5

The instance's Phase 3 (backgrounds), Phase 4 (borders/transitions), and Phase 5 (typography) together specify which of the 6 CSS channels shift at each zone boundary. The cascade value table template in Phase 8 makes this explicit: each row lists all 7 measured properties at each boundary.

### 7.4 HOW MUCH to shift them (thresholds) -- ADDRESSED by recipe template

The perception thresholds (>=15 RGB, >=2px font-size, >=0.03em letter-spacing, <=108px stacked) live in the template's Universal Constants section. They apply to ALL builds. The instance pre-calculates the actual deltas so the builder can verify without doing math.

### 7.5 WHY this section needs this specific treatment (semantic) -- ADDRESSED by instance BECAUSE clauses

Every value in the recipe instance includes a BECAUSE clause connecting the CSS choice to the content's semantic need via the metaphor. "Zone 3 padding: 24px BECAUSE reference content is dense and the geological metaphor's bedrock layer is compressed." This is the layer that prevents "technically compliant, semantically empty" output.

---

## 8. COMPARISON: MIDDLE RECIPE vs FLAGSHIP CHECKLIST vs PROPOSED STRUCTURE

| Dimension | Middle Recipe (worked) | Flagship Checklist (failed) | Proposed Recipe Instance |
|-----------|----------------------|---------------------------|------------------------|
| **Format** | Sequential steps per section | Constraint list | Sequential steps per section |
| **Specificity** | "Section 1: #FEF9F5, 64px" | ">=15 RGB delta" | "Zone 1: #FEF9F5, 64px, BECAUSE surface layer" |
| **Semantic** | Implicit (written by human with context) | Absent | Explicit (BECAUSE clauses) |
| **Verification** | Inline ("Can you SEE?") | Post-hoc ("Verify >=8 mechanisms") | Inline + pre-calculated |
| **Length** | ~100 lines | ~71 lines | ~200-400 lines (template) + ~300 (template) |
| **Mental merge needed?** | No (single document) | Yes (checklist + unclear plan) | No (template + matching instance) |
| **Verb type** | Action ("Deploy," "Apply") | Judgment ("Verify," "Ensure") | Action ("Set," "Deploy," "BECAUSE") |
| **Content-specificity** | HIGH (written for this content) | ZERO (generic constraints) | HIGH (generated by TC for this content) |
| **Metaphor integration** | Implicit | Absent | Explicit (isomorphism table + per-value semantics) |

---

## 9. ADDRESSING THE RECIPE CEILING (3/4 vs 4/4)

The master synthesis (Section 5, WRONG-1) identifies the recipe ceiling: recipes reliably produce COMPOSED (3/4) but DESIGNED (4/4) requires compositional fluency beyond recipes.

The restructured recipe does not claim to solve this. But it RAISES the ceiling by:

1. **Embedding metaphor semantics:** The builder knows WHY each choice exists, not just WHAT the choice is. This is the difference between a musician playing notes (3/4) and understanding the harmonic progression (approaching 4/4).

2. **Providing coherence rules:** "Deeper = denser = darker = heavier" gives the builder a GENERATIVE principle. When facing an undocumented decision (e.g., how to style a footnote not in the recipe), the builder can derive the answer from the coherence rule.

3. **Including rejected mechanisms:** Understanding what was NOT chosen and WHY builds negative space awareness. The builder won't accidentally add a mechanism that contradicts the metaphor.

4. **Pre-calculating cascade expectations:** The builder knows what the cascade value table SHOULD look like before writing CSS. Deviations are visible immediately, not only in Phase 8 verification.

The honest assessment: this restructuring likely raises the reliable floor from 3/4 to a more robust 3/4 and makes occasional 4/4 more probable, but does NOT guarantee 4/4. The gap between 3/4 and 4/4 is compositional judgment that no recipe can fully encode.

---

## 10. IMPLEMENTATION RECOMMENDATIONS

### 10.1 Changes to TC SKILL.md

Add Phase 4.8 (Recipe Instance Generation) after the existing Phase 4.7B (Landmark Gate). This phase takes all TC outputs and formats them into the `_build-recipe.md` structure. Estimated addition: ~80 lines of protocol description.

### 10.2 Changes to operational-recipe.md

Split into two documents:
- `operational-recipe-template.md` (~300 lines): Universal recipe structure, thresholds, soul constraints, phase ordering. Permanent, static.
- TC generates `_build-recipe.md` (~200-400 lines per build): Content-specific instance. Ephemeral, per-build.

### 10.3 Changes to /build-page orchestrator

- After TC completes, validate `_build-recipe.md` structure (7 checks instead of 5)
- Pass BOTH recipe template AND recipe instance to builder
- Handoff gate checks recipe instance format compliance

### 10.4 Changes to Builder Prompt

Builder prompt changes from:
"Read operational-recipe.md and _build-plan.md. Execute 9 phases."

To:
"Read operational-recipe-template.md for universal rules. Read _build-recipe.md for THIS BUILD's specific values. At each phase, follow the template's structure using the instance's values."

### 10.5 Estimated Line Counts

| Artifact | Current Lines | Proposed Lines | Delta |
|----------|--------------|----------------|-------|
| operational-recipe.md | ~650 | ~300 (template only) | -350 |
| _build-plan.md | ~100-200 (varies) | Replaced by _build-recipe.md | -- |
| _build-recipe.md | -- | ~200-400 (generated) | +300 avg |
| TC SKILL.md Phase 4.8 | -- | ~80 (new sub-phase) | +80 |
| Handoff gate | ~20 | ~28 (2 new checks) | +8 |
| **Net change to permanent files** | | | **-262** |

The restructuring REDUCES permanent file size by ~262 lines while INCREASING per-build specificity by ~300 lines. This is the correct direction: permanent infrastructure shrinks, per-build intelligence grows.

---

## 11. RISKS AND MITIGATIONS

### Risk 1: TC takes longer to generate recipe instance format

The recipe instance format requires TC to structure its output differently. This may add 10-20 minutes to Wave 0.

**Mitigation:** TC already produces all the information. The format change is output restructuring, not new analysis. The time cost is likely 5-10 minutes, not 20.

### Risk 2: Recipe instance is too long for builder to absorb

At 200-400 lines, the recipe instance is longer than the Middle recipe (~100 lines).

**Mitigation:** The instance is STRUCTURED by phase. The builder reads Phase 3 Instance when executing Phase 3, not the entire instance upfront. Effective reading per phase is ~30-50 lines.

### Risk 3: TC generates a bad recipe instance

If TC's metaphor is flawed, the recipe instance will faithfully propagate flawed decisions.

**Mitigation:** Wave 0.5 (fresh-eyes metaphor validation) catches announced metaphors. Wave 0.9 (handoff gate) catches structural deficiencies. The recipe instance format makes flawed decisions MORE visible, not less, because every decision includes a BECAUSE clause that can be evaluated.

### Risk 4: Recipe instance format is too rigid for diverse content

The phase-by-phase format may not accommodate all content types (e.g., API docs with 20 short sections vs narrative with 4 long sections).

**Mitigation:** The instance length scales with content complexity. 4-zone content produces ~200 lines. 5-zone content with 15 sections produces ~400 lines. The format accommodates variation; only the Universal Constants section is fixed.

---

## 12. SUMMARY

The restructuring transforms the operational recipe from a STATIC 650-line document into a TWO-LAYER system:

- **Layer A (Template, ~300 lines, permanent):** Universal build phases, perception thresholds, soul constraints, self-checks. The WHAT and HOW MUCH.
- **Layer B (Instance, ~200-400 lines, generated per build):** Content-specific zone values, mechanism assignments, transition types, semantic justifications. The HOW, WHICH, and WHY.

TC's new Phase 4.8 generates Layer B by structuring its existing output to mirror the recipe phases. The builder reads both layers in parallel: template provides structure, instance provides specificity.

This eliminates the handoff gap (no mental merge needed), embeds compositional intelligence structurally (BECAUSE clauses at every decision point), and prevents the compression that killed the flagship (direct routing from TC phases to recipe phases, no intermediate summarization).

The recipe becomes what the Middle experiment's recipe already was: a single, specific, sequenced set of instructions that tells the builder exactly what to build, how to express it, which channels to shift, how much to shift them, and why this section needs this treatment.

---

## 13. ALTERNATIVE PHASE STRUCTURES: THE DEEPER QUESTION

The preceding sections (1-12) address the TWO-LAYER architecture (template + instance). But the updated task asks a more fundamental question: **Should the phases themselves be reorganized?**

The current PV2 recipe organizes phases by CSS PROPERTY TYPE:
```
Phase 2: CSS Reset + Soul + Base Typography     (all CSS resets)
Phase 3: Zone Backgrounds                        (all backgrounds)
Phase 4: Structural Borders + Dividers           (all borders)
Phase 5: Typography Zones                         (all typography)
Phase 6: Element-Level Richness                   (all hover/interaction)
```

This organization SPLITS multi-coherence across phases. When the builder executes Phase 3 (backgrounds), they work on ONE channel in isolation. When they move to Phase 4 (borders), they work on a DIFFERENT channel. The multi-coherence requirement (>=3 channels shift simultaneously at every boundary) only gets verified in Phase 8 -- AFTER all channels are set independently. By then, fixing a coherence failure requires going back and reworking Phases 3-6.

The question: Can we reorganize phases so multi-coherence is STRUCTURALLY embedded in the ordering itself?

---

### 13.1 ALTERNATIVE A: BOUNDARY-ORGANIZED PHASES

**Principle:** Each phase addresses ONE zone boundary, deploying ALL channels simultaneously.

```
Phase 0: ABSORB (read build plan, understand metaphor)
Phase 1: SKELETON (HTML structure, component classes, ARIA)
Phase 2: FOUNDATION (CSS reset, soul, base typography -- mechanical)

Phase 3: HEADER ZONE
  Background: #1A1A1A (dark)
  Typography: Instrument Serif, 36px, inverted color
  Borders: 3px solid var(--color-primary) bottom border
  Spacing: 64px padding
  Layout: Centered, max-width 960px
  Mechanisms: #13 Dark Header
  Verification: "Does the header feel like an entrance?"

Phase 4: ZONE 1 -> ZONE 2 BOUNDARY
  Background shift: #FEF9F5 -> #F0EBE3 (delta: R-14, G-17, B-18)
  Typography shift: Display -> Body (36px -> 16px)
  Border shift: None -> 4px left on callouts
  Spacing shift: 64px -> 32px padding
  Transition type: SMOOTH (48px + 1px border)
  Channels shifting: 4/6 (Chromatic, Typographic, Structural, Spatial)
  Verification: "Can I SEE where Zone 1 ends and Zone 2 begins?"

Phase 5: ZONE 2 -> ZONE 3 BOUNDARY
  Background shift: #F0EBE3 -> #E6DFD4 (delta: R-10, G-12, B-15)
  Typography shift: Body -> Detail (16px -> 14px)
  Border shift: 4px callout -> 1px data separator
  Spacing shift: 32px -> 24px padding
  Transition type: BRIDGE (64px + breathing zone)
  Channels shifting: 5/6 (Chromatic, Typographic, Structural, Spatial, Material)
  Verification: "Does this boundary feel like a SHIFT, not just a line?"

Phase 6: ZONE 3 -> FOOTER BOUNDARY
  Background shift: #E6DFD4 -> #1A1A1A (dramatic)
  Typography shift: Detail -> Inverted meta
  Border shift: 3px solid var(--color-primary) top border
  Spacing shift: 24px -> 48px
  Transition type: BREATHING (80px + 3px border)
  Channels shifting: 6/6 (all channels)
  Verification: "Does the footer feel like a foundation?"

Phase 7: ACCESSIBILITY (mechanical, unchanged)
Phase 8: VERIFICATION (cascade table, now a CONFIRMATION not a discovery)
```

**Strengths:**
- Multi-coherence is STRUCTURAL. Each boundary phase forces the builder to think about ALL 6 channels simultaneously. The builder cannot write backgrounds in isolation.
- The cascade value table is built INLINE as each boundary is implemented. Phase 8 verification becomes confirmation of values already recorded, not post-hoc discovery.
- Coherence failures are caught at the boundary where they originate. If Zone 2->3 has only 2 channels shifting, the builder sees it immediately in Phase 5, not retroactively in Phase 8.
- The "Can you SEE?" self-check becomes specific: "Can you see THIS boundary?" not "Can you see zone boundaries in general?"

**Weaknesses:**
- CSS organizational inefficiency. The builder writes background CSS in Phase 4, then MORE background CSS in Phase 5, then MORE in Phase 6. CSS for the same property is scattered across phases. This makes the stylesheet harder to organize and maintain.
- Phases scale with zone count. A 2-zone page has Phases 3-4 (header + 1 boundary + footer). A 5-zone page has Phases 3-7 (header + 4 boundaries + footer). The recipe structure itself changes based on content, which means the template layer can't have fixed phase numbers.
- Responsive CSS (breakpoints) doesn't fit the boundary model. @media queries affect ALL zones simultaneously. Where does responsive go? It needs its own phase after all boundaries, which re-introduces the property-type model for responsive.
- Component styling (hover states, selection, link treatments) is element-level, not boundary-level. Where do these go? They cross-cut all boundaries.

**Verdict:** STRONG for coherence, WEAK for CSS organization and scalability.

---

### 13.2 ALTERNATIVE B: SCALE-ORGANIZED PHASES

**Principle:** Each phase addresses ONE scale level, deploying all channels at that scale.

```
Phase 0: ABSORB (read build plan, understand metaphor)
Phase 1: SKELETON (HTML structure, component classes, ARIA)
Phase 2: FOUNDATION (CSS reset, soul, base typography -- mechanical)

Phase 3: PAGE SCALE
  Background: Full zone palette (#FEF9F5, #F0EBE3, #E6DFD4, #1A1A1A)
  Typography: Display tier (h1, h2: 28-36px Instrument Serif)
  Borders: Header/footer structural borders (3px primary)
  Spacing: Zone padding (64px -> 32px -> 24px progression)
  Layout: Container 960px, zone stacking order
  Mechanisms: #13 Dark Header, #14 Footer Mirror, #7 Zone Backgrounds
  Coherence check: "Does the page have a visible density arc?"

Phase 4: SECTION SCALE
  Background: Section-level variations within zones
  Typography: Body tier (h3, h4: 18-22px, body: 16px)
  Borders: Section dividers (1px), transition elements
  Spacing: Section margins (48px/64px/80px by transition type)
  Layout: Grid layouts within zones (2-col, 3-col)
  Mechanisms: #5 Dense/Sparse, #12 Progressive Disclosure, #4 Spacing Compression
  Coherence check: "Do sections within the same zone feel related but distinct?"

Phase 5: COMPONENT SCALE
  Background: Component internal backgrounds (callout fills, code block fills)
  Typography: Detail tier (labels: 13px sans, code: 14px mono)
  Borders: Component borders (4px left callout, 1px data separator)
  Spacing: Component internal padding (16px-24px)
  Layout: Component internal structure (2-zone DNA: label + body)
  Mechanisms: #2 2-Zone DNA, #10 Border-Left Signal, #9 Confidence Color, #17 Code Block
  Coherence check: "Do components echo the page-scale pattern at smaller scale?"

Phase 6: CHARACTER SCALE
  Background: Selection colors (::selection)
  Typography: Inline treatments (bold, italic, code spans)
  Borders: None at this scale
  Spacing: Letter-spacing (>=0.03em between zones), word-spacing
  Layout: Inline flow
  Mechanisms: #11 Typography Scale, hover states, link treatments
  Coherence check: "Does text-level styling reinforce the typographic hierarchy?"

Phase 7: ACCESSIBILITY (mechanical, unchanged)
Phase 8: VERIFICATION (cascade table + fractal consistency check)
```

**Strengths:**
- FRACTAL COHERENCE is structural. The scale ordering forces the builder to implement the SAME pattern direction at each zoom level. If Page scale says "sparse to dense," Section scale must echo it, Component scale must echo it. Phase 4.7 (fractal gate) becomes embedded in the phases themselves rather than appended as a post-hoc check.
- CSS grouping by scale maps naturally to CSS selector specificity. Page-scale CSS (body, section, zone classes) has LOW specificity. Component-scale CSS (.callout, .code-block) has MEDIUM specificity. Character-scale CSS (::selection, a:hover) has HIGH specificity. The builder writes CSS in specificity order, which is best practice.
- Fixed phase count. Always 4 creative phases (3-6) regardless of zone count. The template layer has stable phase numbers.
- The coherence check per phase asks "Does this scale echo the pattern?" -- a FRACTAL question, not a boundary question. This is the right question for compositional quality.

**Weaknesses:**
- Multi-coherence at BOUNDARIES is not structural. The builder sets all page-scale backgrounds in Phase 3, but the BOUNDARY between Zone 1 and Zone 2 is still implicit -- it emerges from the difference between two zone declarations, not from a single boundary declaration. The cascade value table still requires post-hoc boundary analysis in Phase 8.
- Transition styling is awkward. Transitions are BETWEEN sections (section scale) but use backgrounds (page scale) and borders (component scale). Where do transition elements live? They bridge scales.
- The builder may lose coherence BETWEEN scales. Setting page-scale backgrounds in Phase 3 and section-scale borders in Phase 4 still splits channels across phases for any given boundary.

**Verdict:** STRONG for fractal coherence and CSS organization, MODERATE for multi-coherence at boundaries.

---

### 13.3 ALTERNATIVE C: SEMANTIC-DIRECTION-ORGANIZED PHASES

**Principle:** Each phase ESTABLISHES or DEPLOYS a semantic direction. The metaphor's coherence rule ("deeper = denser = darker = heavier") is broken into its component directions, and each phase implements one direction across ALL scales and channels.

```
Phase 0: ABSORB (read build plan, understand metaphor)
Phase 1: SKELETON (HTML structure, component classes, ARIA)
Phase 2: FOUNDATION (CSS reset, soul, base typography -- mechanical)

Phase 3: ESTABLISH DIRECTION
  Coherence rule: "Deeper = denser = darker = heavier"
  Decomposed into 4 semantic directions:
    D1: CHROMATIC DIRECTION -- darker backgrounds as depth increases
    D2: SPATIAL DIRECTION -- tighter spacing as depth increases
    D3: STRUCTURAL DIRECTION -- heavier borders as importance increases
    D4: TYPOGRAPHIC DIRECTION -- denser typography as detail increases

  For each direction:
    - Starting value (Zone 1 / surface / opening)
    - Ending value (Zone N / bedrock / conclusion)
    - Intermediate steps
    - Perception threshold (>=15 RGB, >=2px font, etc.)
    - Expected gradient slope

Phase 4: DEPLOY CHROMATIC DIRECTION
  Zone 1: #FEF9F5 (lightest)
  Zone 2: #F0EBE3 (lighter)
  Zone 3: #E6DFD4 (medium)
  Zone 4: #1A1A1A (darkest -- bedrock/footer)
  At ALL scales:
    Page: zone backgrounds
    Section: section variant backgrounds
    Component: callout fills (lightest in Zone 1, slightly darker in Zone 3)
    Character: ::selection color follows zone
  Verify: "Does the page visually darken as you scroll deeper?"

Phase 5: DEPLOY SPATIAL DIRECTION
  Zone 1: 64px padding (sparsest)
  Zone 2: 32px padding (moderate)
  Zone 3: 24px padding (densest)
  At ALL scales:
    Page: zone padding
    Section: section margins (80px -> 48px as depth increases)
    Component: component internal padding (24px -> 16px)
    Character: line-height (1.8 -> 1.5)
  Verify: "Does the page feel tighter/denser as you scroll deeper?"

Phase 6: DEPLOY STRUCTURAL + TYPOGRAPHIC DIRECTIONS
  Structural: borders increase in weight with importance
    4px for critical callouts, 3px for section boundaries, 1px for data
  Typographic: font size decreases, weight increases with density
    Display: 36px/400 -> Body: 16px/400 -> Detail: 14px/600
  At ALL scales: section dividers get heavier, component labels get smaller
  Verify: "Does every structural element reinforce the depth gradient?"

Phase 7: ACCESSIBILITY (mechanical, unchanged)
Phase 8: VERIFICATION (cascade table should show coherent gradient in ALL columns)
```

**Strengths:**
- The COHERENCE RULE is the organizing principle. The builder doesn't think "now I'm doing backgrounds" or "now I'm doing borders." They think "now I'm making the page get DARKER as you scroll" and "now I'm making the page get DENSER as you scroll." Each direction is a complete, coherent thought deployed across all scales and all relevant CSS properties.
- Multi-coherence is IMPLICIT. When the builder deploys the chromatic direction (Phase 4), they set backgrounds at page, section, component, AND character scales. When they deploy the spatial direction (Phase 5), they set padding at all scales. The cascade value table naturally shows coherent gradients because the builder was thinking in gradients, not in properties.
- The coherence rule serves as a GENERATIVE principle. When the builder encounters an undocumented element (e.g., a footnote), they can derive the styling: "Is this element deep or shallow in the metaphor? If deep, it should be denser, darker, heavier."
- Phase 8 verification becomes trivially confirmatory. If each direction was deployed correctly, the cascade table MUST show >=3 channels shifting at every boundary. It's a proof, not a discovery.

**Weaknesses:**
- Not all metaphors decompose cleanly into independent directions. "Deeper = denser = darker = heavier" has 4 clear directions. But a metaphor like "botanical growth" might have directions like "growth = expanding = greening = branching" where the CSS mappings are less obvious. Direction extraction requires metaphor-specific intelligence, which means the recipe instance does the heavy lifting.
- CSS duplication risk. Deploying chromatic direction at component scale (Phase 4) means setting callout background colors. But deploying structural direction at component scale (Phase 6) means setting callout border weights. The same CSS selector appears in two different phases. The builder must organize their stylesheet carefully to avoid conflicts.
- Direction count varies by metaphor complexity. A simple FLAT MODE page (no metaphor) might have only 2 directions (sparse-to-dense + light-to-dark). A complex metaphor might have 5-6 directions. The template can't have fixed phase counts for the direction phases.
- The builder must hold MULTIPLE directions in working memory simultaneously at each element. When styling a callout in Zone 3, they need to know: chromatic direction says darker, spatial direction says denser, structural direction says heavier. The mental model is more complex than property-type or boundary phases.

**Verdict:** STRONGEST for compositional intelligence and generative power, WEAKEST for CSS organization and builder cognitive load.

---

## 14. COMPARATIVE EVALUATION

### 14.1 Evaluation Criteria

| Criterion | Weight | Why It Matters |
|-----------|--------|----------------|
| Multi-coherence embedding | 30% | THE primary failure mode. Channels must shift together. |
| Fractal coherence embedding | 20% | Pattern-at-every-zoom is second most important quality dimension. |
| CSS organizational clarity | 15% | Builder must produce maintainable, debuggable CSS. |
| Builder cognitive load | 15% | Recipe must be followable, not just theoretically correct. |
| Template stability | 10% | Fixed phase numbers enable stable tooling and gate runner. |
| Content generalizability | 10% | Must work for API docs AND research synthesis AND tutorials. |

### 14.2 Scoring

| Criterion | Current (Property-Type) | A (Boundary) | B (Scale) | C (Semantic-Direction) |
|-----------|----------------------|-------------|----------|----------------------|
| Multi-coherence | 2/10 (Phase 8 post-hoc) | 9/10 (structural) | 5/10 (implicit) | 8/10 (directional) |
| Fractal coherence | 3/10 (Phase 4.7 gate) | 4/10 (not addressed) | 9/10 (structural) | 7/10 (all-scale deployment) |
| CSS organization | 8/10 (property groups) | 3/10 (scattered) | 7/10 (specificity order) | 4/10 (direction-scattered) |
| Builder cognitive load | 7/10 (familiar model) | 5/10 (many phases) | 7/10 (natural grouping) | 4/10 (multiple directions) |
| Template stability | 9/10 (fixed 9 phases) | 3/10 (scales with zones) | 8/10 (fixed 4 creative) | 5/10 (varies with directions) |
| Content generalizability | 7/10 (property-agnostic) | 6/10 (boundary-dependent) | 8/10 (scale-universal) | 5/10 (metaphor-dependent) |

### 14.3 Weighted Scores

| Alternative | Multi (30%) | Fractal (20%) | CSS (15%) | Cognitive (15%) | Stability (10%) | General (10%) | **TOTAL** |
|-------------|-------------|---------------|-----------|-----------------|-----------------|---------------|-----------|
| Current | 0.60 | 0.60 | 1.20 | 1.05 | 0.90 | 0.70 | **5.05** |
| A (Boundary) | 2.70 | 0.80 | 0.45 | 0.75 | 0.30 | 0.60 | **5.60** |
| B (Scale) | 1.50 | 1.80 | 1.05 | 1.05 | 0.80 | 0.80 | **7.00** |
| C (Direction) | 2.40 | 1.40 | 0.60 | 0.60 | 0.50 | 0.50 | **6.00** |

### 14.4 Ranking

1. **ALTERNATIVE B (Scale-Organized): 7.00** -- Best overall balance
2. **ALTERNATIVE C (Semantic-Direction): 6.00** -- Strongest compositional intelligence but high cognitive cost
3. **ALTERNATIVE A (Boundary-Organized): 5.60** -- Strongest multi-coherence but worst CSS organization
4. **Current (Property-Type): 5.05** -- Familiar but compositionally hollow

---

## 15. RECOMMENDED HYBRID: SCALE-ORGANIZED WITH BOUNDARY CHECKPOINTS

No single alternative perfectly embeds BOTH multi-coherence and fractal coherence. The best solution is a HYBRID that uses Scale-Organized phases (Alternative B) as the primary structure, with BOUNDARY CHECKPOINTS embedded within each phase.

### 15.1 Hybrid Phase Structure

```
Phase 0: ABSORB
  Read build plan. Understand metaphor. Internalize coherence rule.
  "This build follows: [coherence rule, e.g., deeper = denser = darker = heavier]"
  Checkpoint: Confirm understanding.

Phase 1: SKELETON
  Semantic HTML. Component classes. ARIA landmarks. Grid layouts.
  Checkpoint: Submit HTML for planner review.

Phase 2: FOUNDATION
  CSS reset. Soul constraints. Base typography.
  Mechanical -- no creative decisions.

Phase 3: PAGE SCALE -- establish the macro composition
  Deploy ALL 6 channels at page level:
  - Chromatic: Zone backgrounds (full palette, >=15 RGB deltas)
  - Typographic: Display tier (h1, h2 sizing and font)
  - Spatial: Zone padding progression
  - Structural: Header/footer borders, zone dividers
  - Behavioral: No interaction at page scale (static landmarks)
  - Material: Zone texture differences (if metaphor demands)

  >>> BOUNDARY CHECKPOINT: For each zone boundary (1->2, 2->3, etc.):
  >>> Record which channels shifted. Count >= 3? If NO: add channels NOW.
  >>> This is a MINI cascade value table, built inline.

  Verification: "Does the page have a visible density arc at full scroll?"
  Checkpoint: Submit page-scale CSS for planner review.

Phase 4: SECTION SCALE -- deploy the rhythm
  Deploy ALL 6 channels at section level:
  - Chromatic: Section-level background variants within zones
  - Typographic: Body tier (h3, h4, body text)
  - Spatial: Section margins, transition spacing (SMOOTH/BRIDGE/BREATHING)
  - Structural: Section borders, transition elements, >=3 transition types
  - Behavioral: Section-level hover (expand/collapse, if applicable)
  - Material: Section density variation (sparse/dense alternation)

  >>> BOUNDARY CHECKPOINT: For each section boundary:
  >>> Does the transition type match the semantic shift?
  >>> SMOOTH = same axis, BRIDGE = cross axis, BREATHING = major shift.
  >>> Are >=3 channels shifting? (Check against Phase 3 boundary values.)

  Verification: "Do sections within the same zone feel related but distinct?"

Phase 5: COMPONENT SCALE -- deploy the vocabulary
  Deploy ALL 6 channels at component level:
  - Chromatic: Callout fills, code block backgrounds
  - Typographic: Detail tier (labels, captions, meta text, code)
  - Spatial: Component internal padding, gap values
  - Structural: Component borders (4px left callouts, 1px separators)
  - Behavioral: Hover states, focus styles, selection
  - Material: Component texture (2-zone DNA: sparse label + dense body)

  >>> FRACTAL CHECKPOINT: Does component-scale echo page-scale?
  >>> If page = sparse-to-dense, components should also be sparse-label-to-dense-body.
  >>> Same pattern, smaller scale.

  Verification: "Do components echo the page-scale pattern?"

Phase 6: CHARACTER SCALE -- deploy the finish
  Deploy ALL relevant channels at inline level:
  - Chromatic: ::selection color, link colors
  - Typographic: Letter-spacing (>=0.03em between zones), inline code
  - Spatial: Word-spacing, paragraph margins
  - Structural: Link underline treatments
  - Behavioral: Link hover transitions, focus outlines
  - Material: Inline emphasis (bold, italic semantic mapping)

  >>> FRACTAL CHECKPOINT: Does character-scale echo component-scale?
  >>> If components are dense-body, character-level should be precise-monospace.

  Verification: "Does text-level styling reinforce the hierarchy?"

Phase 7: ACCESSIBILITY
  Skip link, ARIA >=3, focus styles, reduced motion, responsive, print.
  Mechanical. ~180 lines CSS.

Phase 8: VERIFICATION
  Build FULL cascade value table from Phase 3 boundary checkpoints.
  Confirm >=3 channels shift at every major boundary.
  Confirm fractal consistency from Phase 5-6 fractal checkpoints.
  Confirm coherence rule holds across all scales.
  Deliverable: Cascade value table (should already be 80% complete from inline work).
  Final checkpoint: Submit complete page.
```

### 15.2 Why the Hybrid Works

**Multi-coherence:** The BOUNDARY CHECKPOINTS embedded within Phases 3-4 force the builder to count shifting channels at every zone/section boundary AS they build. This is the Boundary model's strength, embedded as checkpoints rather than as the phase-organizing principle.

**Fractal coherence:** The SCALE organization is the primary structure. The builder moves from page to section to component to character, implementing the SAME pattern at each zoom level. The FRACTAL CHECKPOINTS in Phases 5-6 verify echo explicitly.

**CSS organization:** Writing CSS by scale naturally groups selectors by specificity. Page-scale CSS (.zone-1, .zone-2) is low specificity. Component-scale CSS (.callout, .code-block) is medium. Character-scale CSS (a:hover, ::selection) is high. This is CSS best practice.

**Builder cognitive load:** 4 creative phases (3-6) is manageable. Each phase asks ONE question: "What does the pattern look like at THIS scale?" The builder doesn't need to hold multiple directions or track boundary math -- the inline checkpoints prompt them.

**Template stability:** Always 4 creative phases regardless of content. The CHECKPOINTS within phases scale with zone count (more zones = more boundary checkpoints in Phase 3), but the PHASE COUNT is fixed.

### 15.3 How the Recipe Instance Supports the Hybrid

The TC-generated `_build-recipe.md` is organized to match the hybrid structure:

```
## RECIPE INSTANCE HEADER
Metaphor: [name]
Coherence rule: [direction sentence]
Zone count: [N]

## Phase 3 Instance: PAGE SCALE
Zone palette: [colors with deltas]
Display typography: [sizes, fonts]
Zone padding: [values per zone]
Header/footer: [border specs]
BOUNDARY TABLE:
  | Boundary | Channels Shifting | Minimum Met? |
  | Z1->Z2   | Chromatic, Spatial, Typographic | 3/6 YES |
  | Z2->Z3   | Chromatic, Spatial, Structural, Material | 4/6 YES |

## Phase 4 Instance: SECTION SCALE
Section margins: [per-transition-type values]
Transition assignments: [boundary -> SMOOTH/BRIDGE/BREATHING]
Body typography: [h3, h4, body specs]
Section borders: [specs]

## Phase 5 Instance: COMPONENT SCALE
Component assignments: [section -> component class + variant]
Component borders: [4px/3px/1px assignments]
Component typography: [label/body/meta specs]
FRACTAL CHECK: Page pattern is [direction]. Component pattern should echo as [component-level direction].

## Phase 6 Instance: CHARACTER SCALE
Letter-spacing: [per-zone values, >=0.03em deltas]
Link treatment: [underline style, hover color]
Selection: [::selection background]
FRACTAL CHECK: Component pattern is [direction]. Character pattern should echo as [character-level direction].
```

---

## 16. FINAL RECOMMENDATION

**Primary structure:** SCALE-ORGANIZED (Alternative B) with embedded BOUNDARY CHECKPOINTS (from Alternative A) and COHERENCE RULE framing (from Alternative C).

**Why not pure Boundary (A):** CSS organization collapse and variable phase count make it impractical as the primary structure.

**Why not pure Direction (C):** High cognitive load and metaphor-dependence make it fragile. However, the coherence rule framing ("deeper = denser = darker = heavier") from Alternative C is the MOST POWERFUL single innovation and is incorporated as the recipe instance header.

**Why not current Property-Type:** Multi-coherence at 2/10 is unacceptable. The primary failure mode (channels not shifting together at boundaries) is a direct consequence of organizing by property type.

**The hybrid achieves:**
- Multi-coherence: 8/10 (boundary checkpoints inline, not just Phase 8)
- Fractal coherence: 9/10 (scale organization IS fractal thinking)
- CSS organization: 7/10 (specificity-ordered)
- Builder cognitive load: 6/10 (4 creative phases + inline checkpoints)
- Template stability: 8/10 (fixed 4 creative phases)
- Content generalizability: 8/10 (scales work for all content types)

**Weighted total: 7.65** (vs 7.00 for pure Scale, 6.00 for pure Direction, 5.60 for pure Boundary, 5.05 for current).

The recipe template should be rewritten from 9 CSS-property-type phases to 4 creative scale-organized phases (3-6) with boundary and fractal checkpoints. Phases 0-2 (absorb, skeleton, foundation) and 7-8 (accessibility, verification) remain unchanged. The recipe INSTANCE generated by TC mirrors this scale structure, with per-phase boundary tables and fractal checks pre-populated.

---

**END OF REPORT (EXTENDED)**

**Key files referenced:**
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/PV2-PIPELINE-DIAGRAM.md`
- `/Users/spacewizardmoneygang/.claude/skills/tension-composition/SKILL.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/pv2-cross-reference/14-MASTER-SYNTHESIS.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`
