# Scale 2: PAGE SCALE — Where Page-Level Composition Gets Lost in PV2

**Tracer Agent:** Scale-Page
**Date:** 2026-02-19
**Sources:** PV2-PIPELINE-DIAGRAM.md, tension-composition/SKILL.md, mechanism-catalog.md

---

## What PAGE SCALE Means

Page scale is the compositional intelligence that governs the FULL-SCROLL EXPERIENCE: zone architecture (how major sections relate), page-level rhythm (warm-cool-warm, dense-sparse-dense), the dramatic arc of the reading journey, and the perceptual impression of the page AS A WHOLE rather than as a collection of sections. Page scale answers: "Does the full scroll tell a coherent visual story?"

Page scale sits BETWEEN navigation scale (chrome-level) and section scale (within-section). It is the SKELETON that everything else hangs on.

---

## Tracing Page-Scale Intelligence Through Each PV2 Wave

### WAVE 0: TC Planner (Phases 0-3.5) — WHERE PAGE SCALE IS BORN

**What TC knows about page scale:**

1. **Phase 0C — Section Identification** (SKILL.md lines 59-65): TC identifies natural sections, classifies each as NARRATIVE/REFERENCE/CODE/DATA/MIXED. This is the RAW MATERIAL for page-scale architecture — you cannot compose a page arc without knowing what sections exist and what their natures are.

2. **Phase 0D — Tier Classification** (SKILL.md lines 69-144): For Middle tier, TC selects a DENSITY PATTERN (CRESCENDO/F-PATTERN/BENTO/PULSE). These patterns ARE page-scale architecture:
   - CRESCENDO: sparse intro -> dense peak -> sparse resolution
   - PULSE: rhythmic dense-sparse-dense alternation
   - F-PATTERN: dense left column, sparse right
   - BENTO: grid-based modular zones

   **CRITICAL OBSERVATION:** These pattern names encode entire page-level composition philosophies. CRESCENDO is not just a list of mechanisms — it is a THEORY of how information density should flow across a full page. PULSE is a theory of rhythmic alternation. Each contains implicit page-arc intelligence.

3. **Phase 1 — Multi-Axis Questioning** (SKILL.md lines 192-275): The NAVIGATE axis ("How does the reader need to move THROUGH this content?") directly addresses page-scale flow. The ORIENT axis asks "WHERE THIS FITS" — page-level context. But these are QUESTION-level insights, not yet spatial intelligence.

4. **Phase 2 — Tension Derivation** (SKILL.md lines 278-465): Tension richness formula (Opposition x Overlap x Width) selects WHICH tensions to resolve. The structural properties extracted here (layering, ordering, containment, traversal) are the BONES of page architecture. But they remain abstract — "ordering" is not yet "sections 1-2 are sparse, sections 3-4 are dense, section 5 is breathing."

5. **Phase 3 — Metaphor Collapse** (SKILL.md lines 467-797): The metaphor is supposed to generate the page-level arc. "Geological strata" implies descent (surface -> bedrock), which implies a page arc of decreasing lightness and increasing density. "Elevation map" implies ascent with contour zones. The metaphor IS the page-scale theory... but:

   **COMPRESSION POINT #1:** The metaphor-to-page-arc connection is IMPLICIT. TC's output (_build-plan.md) contains zone count, section inventory, mechanism deployment, background colors, transition plan. But NOWHERE does it explicitly state: "The page-level arc is warm-cool-warm" or "The dramatic peak falls at 65% scroll" or "The density trajectory is sparse-building-peak-resolution."

6. **Phase 3.5 — Lock-In Gate** (SKILL.md lines 799-862): Validates metaphor commitment but does NOT validate page-level arc coherence. The gate checks divergence and independence — both metaphor-quality questions, not page-composition questions.

**TC's Page-Scale Output (PV2 Diagram lines 151-163):**
```
_build-plan.md contains:
- Zone count (e.g., 4)
- Section inventory (which sections -> which zones)
- Mechanism deployment per category
- Background colors per zone (with >= 15 RGB delta)
- Isomorphism table
- Transition plan (>= 3 types: SMOOTH/BRIDGE/BREATHING)
- Builder warnings
```

**What IS preserved:** Zone count, zone-to-section mapping, background color sequence, transition types.

**What is LOST:** The WHY behind the zone architecture. The page-level arc narrative. The dramatic peak placement theory. The density trajectory rationale. The relationship between zone sequence and reader emotional journey. All of this was in TC's head during Phases 1-3 but NEVER GETS EXTERNALIZED into a named, addressable deliverable.

---

### WAVE 0.5: Metaphor Validation — PAGE SCALE INVISIBLE

The fresh-eyes metaphor validator (PV2 Diagram lines 169-233) reads ONLY the metaphor description. It asks "Does this tell me what CSS to write?" (STRUCTURAL vs ANNOUNCED test). It does NOT ask:

- "Does this metaphor imply a page-level density arc?"
- "Does this metaphor have a natural dramatic peak?"
- "Does this metaphor have a natural resolution/closure point?"

**COMPRESSION POINT #2:** Page-scale composition is NOT VALIDATED at any point between TC planning and builder execution. The metaphor could be structurally rich (implies clear CSS) but page-architecturally bankrupt (all sections get identical treatment).

---

### WAVE 0.9: Handoff Gate — PAGE SCALE PARTIALLY CHECKED

The 5 binary handoff checks (PV2 Diagram lines 241-290):

```
[x] Zone count 2-5?                    — PAGE SCALE: basic presence
[x] BG colors >= 15 RGB delta?         — PAGE SCALE: zone differentiation
[x] >= 2 grid layouts?                 — SECTION SCALE: layout variety
[x] Per-category mechs met?            — SECTION SCALE: vocabulary breadth
[x] >= 3 transition types planned?     — PAGE SCALE: rhythm variety
```

Three of five checks touch page scale. But they are EXISTENCE checks, not COMPOSITION checks:
- "Zone count 2-5" confirms zones EXIST, not that they form a coherent arc
- ">= 15 RGB delta" confirms zones are VISUALLY DISTINCT, not that their sequence tells a story
- ">= 3 transition types" confirms VARIETY exists, not that transitions are SEQUENCED meaningfully

**COMPRESSION POINT #3:** The gate checks the INGREDIENTS of page-scale composition but not the RECIPE. Having 4 zones with 15 RGB delta and 3 transition types does NOT mean the page has a warm-cool-warm arc or a density crescendo. It only means the raw materials for one exist.

---

### WAVE 1: Builder Execution (9-Phase Recipe) — WHERE PAGE SCALE SHOULD MATERIALIZE

The builder receives 6 files and executes 9 phases. Let me trace page-scale intelligence through each:

**Phase 0 (Builder): Content Analysis + Zone Architecture** (PV2 lines 357-367)
"Read _build-plan.md. Map content sections to zones. Determine zone count from build plan."

This is ABSORPTION of TC's page-scale decisions, not creation of new page intelligence. The builder reads zone count = 4 and section-to-zone mappings. But the build plan's zone architecture is a FLAT LIST (zone 1 = sections A,B; zone 2 = sections C,D; zone 3 = sections E,F; zone 4 = section G) — not a COMPOSITIONAL NARRATIVE.

**COMPRESSION POINT #4:** The builder sees zones as containers to fill, not as acts in a dramatic arc. "Zone 1 = warm cream (#FEF9F5), Zone 2 = near-white (#FFFFFF), Zone 3 = earthy tan (#FAF5ED), Zone 4 = dark (#1A1A1A)" is a COLOR PALETTE, not a PAGE ARC. The builder knows WHAT colors to use but not WHY this sequence creates a specific reading experience.

**Phase 1 (Builder): HTML Skeleton** — No page-scale intelligence. Pure structural markup.

**Phase 2 (Builder): CSS Reset + Soul + Base Typography** — Foundation, not composition.

**Phase 3 (Builder): Zone Backgrounds** (PV2 lines 396-409)
"Apply background colors per zone from build plan. MANDATORY: >= 15 RGB delta between adjacent zones."

The builder applies colors from the plan. The "Can you SEE?" check verifies VISIBILITY, not COMPOSITION. The builder does not ask "Does the zone sequence create a warm-cool-warm arc?" or "Does the color progression match the content's emotional trajectory?"

**Phase 4 (Builder): Borders + Dividers + Transitions** (PV2 lines 411-424)
"3+ transition types: SMOOTH, BRIDGE, BREATHING."

The transition plan from TC gets implemented. But the builder deploys transition types at section boundaries based on the PLAN's prescriptions, not based on reading-experience judgment. The plan says "Section A->B: SMOOTH, B->C: BRIDGE, C->D: BREATHING" and the builder executes. The PAGE-LEVEL REASONING ("B->C is a BRIDGE because the reader shifts from theoretical to practical, requiring a cognitive pause") is absent from the builder's context.

**Phase 5 (Builder): Typography Zones** — 3-zone typography arc (display/body/detail). This is a page-scale structure (typography changes across the page), but it's a FIXED PATTERN (always display -> body -> detail), not a content-responsive arc.

**Phase 6 (Builder): Element-Level Richness** — Section/component scale, not page scale.

**Phase 7 (Builder): Accessibility** — Structural requirements, not compositional.

**Phase 8 (Builder): Verification + Cascade Value Table** (PV2 lines 476-493)
"Record computed CSS at EVERY section boundary. Verify >= 3 channels shift at every transition."

The Cascade Value Table IS page-scale verification — it checks that transitions between zones involve multiple channel shifts. But it verifies INDIVIDUAL TRANSITIONS, not the FULL-PAGE TRAJECTORY. A page where every transition has 3+ channel shifts could still have a flat overall arc (e.g., all transitions shift the same 3 channels by the same amounts).

---

### WAVE 2: Verification — PAGE SCALE JUDGED ONLY PERCEPTUALLY

**Layer 1 (Programmatic Gates):** Of the 12 gates (PV2 lines 547-563):
- SC-09 (bg delta >= 15 RGB) — Zone-level, not page-level
- SC-10 (stacked gap <= 108px) — Anti-void check, not arc check
- SC-12 (zone count 2-5) — Existence, not composition

No gate checks: "Does the page have a coherent density arc?" or "Does the page have a dramatic peak at 60-80% scroll?" or "Does the overall color temperature progression tell a story?"

**Layer 2 (PA Auditors):** The 9 fresh-eyes auditors answer 48 PA questions. Relevant page-scale questions from the PA skill:
- PA-13: "Is there a clear visual ending, or does the page just stop?"
- PA-17: "Is there visual rhythm or random?"
- PA-05: "Does this feel DESIGNED?" (the composite verdict)

These ARE page-scale assessments — but they happen at the END, after all compositional decisions are irreversible. PA auditors can flag "the page feels flat" but cannot articulate "the page-level density arc is missing because Zone 2 and Zone 3 have identical visual weight." They see the SYMPTOMS, not the structural cause.

---

## The Core Compression Cascade

Page-scale intelligence follows this compression trajectory through PV2:

```
TC Planner's Mind (rich):
  "This content is a journey from uncertainty to confidence. The page
   should feel like descending through geological strata — surface
   exploration (light, spacious) gives way to deeper investigation
   (denser, warmer) with a dramatic dark-background revelation at
   the 70% mark, then resolves into lighter concluding synthesis."

_build-plan.md (compressed):
  Zone count: 4
  Zone 1 (#FEF9F5): Introduction, Overview
  Zone 2 (#FFFFFF): Analysis sections
  Zone 3 (#FAF5ED): Deep dive, evidence
  Zone 4 (#1A1A1A): Conclusion
  Transitions: A->B SMOOTH, B->C BRIDGE, C->D BREATHING

Builder's Understanding (further compressed):
  "I have 4 zones. Zone 1 is cream, Zone 2 is white, Zone 3 is
   tan, Zone 4 is dark. Apply colors, add transitions between them.
   Done."
```

The page-level ARC THEORY ("journey from uncertainty to confidence") that produced the zone architecture is LOST. The builder sees zones as paint-by-number regions, not as acts in a story. The WHAT survives (4 zones, these colors, these transitions); the WHY does not (density trajectory, dramatic peak placement, emotional arc).

---

## Where Exactly Page Scale Gets Lost (5 Compression Points)

### CP-1: TC Phase 3 -> _build-plan.md (Metaphor-to-Plan Compression)
**What's lost:** The page-level arc narrative. Why THIS zone sequence for THIS content. Where the dramatic peak falls and why. The density trajectory theory.
**Current state:** _build-plan.md contains zone count, colors, transitions — the DELIVERABLES of page-scale thinking, not the THINKING itself.
**Evidence:** PV2 Diagram lines 151-163 list _build-plan.md contents — no field for "page arc" or "density trajectory" or "dramatic peak placement."

### CP-2: Wave 0.5 Metaphor Validation (Missing Page-Arc Gate)
**What's lost:** Opportunity to validate that the metaphor produces a coherent page-level experience.
**Current state:** Fresh-eyes agent checks STRUCTURAL vs ANNOUNCED. Does not check PAGE-COMPOSITIONAL.
**Evidence:** PV2 Diagram lines 186-200. The only question asked: "Does this tell me what CSS to write?" No question about page-level arc.

### CP-3: Wave 0.9 Handoff Gate (Ingredient vs Recipe)
**What's lost:** Distinction between "zone materials exist" and "zones form a composed arc."
**Current state:** 3 of 5 checks are page-relevant but check EXISTENCE (zones exist, deltas exist, transition types exist), not COMPOSITION (zones tell a story, deltas create a trajectory, transitions are sequenced meaningfully).
**Evidence:** PV2 Diagram lines 243-253. Compare these existence checks with what CD-006 actually has: a warm-cool-warm color temperature arc, a density crescendo peaking at the evidence sections, and a dramatic shift to dark background for the key insight.

### CP-4: Builder Phase 0 (Zone-as-Container, Not Zone-as-Act)
**What's lost:** The NARRATIVE understanding of zones.
**Current state:** Builder reads zone-to-section mapping as an assignment ("Section A goes in Zone 1") not as a story ("Zone 1 is the inviting entry that establishes trust before the denser Zone 2 challenges assumptions").
**Evidence:** PV2 Diagram lines 357-367. The builder "maps content sections to zones" and "confirms understanding." But understanding of WHAT? Understanding of containment (which sections go where), not understanding of arc (why this progression creates a specific reading experience).

### CP-5: Wave 2 Programmatic Gates (No Arc Verification)
**What's lost:** Objective verification of page-level arc coherence.
**Current state:** 12 gates check individual properties. No gate checks the full-page trajectory.
**Evidence:** PV2 Diagram lines 547-563. SC-09 checks ADJACENT zone deltas (local property). No gate measures OVERALL trajectory (global property) — e.g., "Do zone backgrounds follow a temperature trajectory?" or "Does padding compression follow a consistent gradient?"

---

## What Page-Scale OPERATIONAL Invocation Would Look Like

### Proposal 1: Page Arc Declaration (TC Output Enhancement)

TC's _build-plan.md should include a new section:

```markdown
## PAGE ARC

Trajectory: DESCENDING (sparse -> dense -> revelation -> resolution)
Dramatic peak: Zone 3 (approximately 65-70% scroll height)
Density gradient: Zone 1 (80px padding) -> Zone 2 (48px) -> Zone 3 (24px) -> Zone 4 (40px)
Color temperature: warm cream -> neutral white -> earthy warm -> dramatic dark
Emotional arc: invitation -> challenge -> evidence -> synthesis

WHY THIS ARC: The content moves from general overview to specific evidence.
The reader needs to feel "welcomed in" (sparse, warm) before being "shown
the proof" (dense, detailed). The dark Zone 4 is a dramatic reveal for the
synthesizing conclusion — contrast after the dense evidence sections creates
a moment of "stepping back to see the whole."
```

This makes the page arc EXPLICIT and TRANSFERABLE to the builder.

### Proposal 2: Page Arc Validation Gate (Wave 0.9 Enhancement)

Add to the 5-check handoff gate:

```
[ ] Page arc coherent?
    - Do zone backgrounds follow a legible temperature/value trajectory?
    - Does padding compression follow a consistent direction within sections?
    - Is there a dramatic peak placed at 50-80% scroll height?
    - Do transitions escalate (SMOOTH before BRIDGE before BREATHING)?

    TEST: Read zone backgrounds in order. If they form neither warm->cool, cool->warm,
    warm->cool->warm, nor dark->light->dark progression, the arc is INCOHERENT.
```

### Proposal 3: Builder Page-Arc Awareness (Recipe Phase 0 Enhancement)

Add to the builder's Phase 0 (Content Analysis + Zone Architecture):

```
Phase 0 ADDITION: Page Arc Comprehension

Before proceeding to Phase 1 (HTML Skeleton), articulate in writing:

1. What is the EMOTIONAL ARC of this page? (invitation -> challenge -> evidence -> synthesis)
2. Where is the DRAMATIC PEAK? (Zone ___, approximately ___% scroll height)
3. What is the DENSITY TRAJECTORY? (sparse -> dense -> breathing -> ...)
4. How do zone TRANSITIONS mark the reader's journey? (Why SMOOTH here, BRIDGE there?)

If you cannot articulate these, you do NOT understand the build plan.
Return to _build-plan.md and re-read the PAGE ARC section.
```

### Proposal 4: Programmatic Arc Verification (Wave 2 Enhancement)

New programmatic gate:

```
SC-13: PAGE ARC COHERENCE
  - Measure background-color at each zone boundary
  - Compute color temperature trajectory (warm->cool values)
  - Verify: trajectory has at most 1 inflection point
    (monotone descent, monotone ascent, or single-peak arc)
  - Verify: padding values follow a gradient (not random)
  - Verify: at least one zone has notably different visual weight
    (dramatic peak — border count OR background darkness OR density
    measurably exceeds neighbors)
  PASS: trajectory is legible, padding follows gradient, peak exists
  FAIL: random zone ordering, no density gradient, no peak
```

### Proposal 5: Pacing Prediction as Structured Deliverable (TC Enhancement)

TC already has Phase 4.2B (Pacing Prediction Heuristic, SKILL.md lines 1262-1301) but it lives INSIDE the builder's phase, not as a TC output. It should be a TC DELIVERABLE in _build-plan.md:

```markdown
## PACING PREDICTION

Section count: 6
Breathing model: CHANGING STATE (background shifts, not empty gaps)
Element uniformity: VARIED (3 section types: prose, evidence grid, comparison)
Dramatic peak: YES at 65% (Zone 3, dark evidence section)
Risky transitions: None flagged
Overall pacing: CRESCENDO with BREATHING resolution

CONCRETE SEQUENCE:
  Scroll 0-20%:  SPARSE (intro, 80px padding, warm cream)
  Scroll 20-40%: BUILDING (analysis, 48px padding, neutral white)
  Scroll 40-70%: PEAK (evidence, 24px padding, earthy tan, 2-col grids)
  Scroll 70-85%: DRAMATIC SHIFT (synthesis, dark background, inverted text)
  Scroll 85-100%: RESOLUTION (conclusion + footer, warm, generous spacing)
```

---

## Summary: The Page-Scale Compression Map

| PV2 Stage | Page-Scale Intelligence Present | Page-Scale Intelligence Lost | Operational Fix |
|-----------|-------------------------------|-----------------------------|--------------------|
| TC Phases 0-3 | Rich: full arc theory, density trajectory, dramatic peak, emotional journey | N/A (this is where it originates) | N/A |
| _build-plan.md | Zones, colors, transitions, mechanisms | Arc narrative, peak placement theory, density trajectory rationale, emotional journey | **Add PAGE ARC section** |
| Wave 0.5 | None | Opportunity to validate arc coherence | **Add page-arc dimension to metaphor check** |
| Wave 0.9 | Ingredient checks (zones exist, deltas exist, transitions exist) | Composition checks (zones form arc, deltas create trajectory, transitions are sequenced) | **Add arc coherence gate** |
| Builder Phase 0 | Zone-as-container mapping | Zone-as-act narrative understanding | **Add arc comprehension requirement** |
| Builder Phase 3-4 | Color application, transition deployment | Arc-aware color sequencing, trajectory-aware transition escalation | **Page Arc section in build plan makes this implicit** |
| Builder Phase 8 | Cascade Value Table (per-boundary checks) | Full-page trajectory verification | **Table should include trajectory summary row** |
| SC Gates | Individual zone checks (SC-09, SC-10, SC-12) | Global trajectory checks | **Add SC-13 page arc coherence** |
| PA Auditors | Perceptual impression (PA-05, PA-13, PA-17) | Structural diagnosis capability | **PA catches symptoms; gates must catch causes** |

---

## The Deepest Finding: "2-5 Zones" Is Not a Page Architecture

The most severe compression occurs in TC's Phase 0: "Determine zone count (2-5 zones)." This reduces page architecture to a COUNTING EXERCISE. CD-006 has 4 zones — but what makes it a 39/40 page is not THAT it has 4 zones, but HOW those zones relate:

- Zone 1 (warm cream) = welcoming entry, generous spacing, editorial opening
- Zone 2 (near-white) = technical depth, tighter spacing, grid layouts
- Zone 3 (earthy tan) = evidence/proof, densest section, comparison grids
- Zone 4 (dark) = structural landmark, synthesis, dramatic contrast

The number 4 is the LEAST interesting fact about this architecture. The INTERESTING facts are:
1. The color temperature DESCENDS (warm -> neutral -> earthy -> dark)
2. The density INCREASES (sparse -> moderate -> dense -> sparse-but-dark)
3. The dramatic peak is at ~65% scroll (Zone 3)
4. Zone 4 CONTRASTS with the preceding trajectory (dark after earthy = surprise)
5. The transition types ESCALATE (SMOOTH -> BRIDGE -> BREATHING)

None of these facts survive into _build-plan.md as explicit deliverables. They are implicit in the zone specification, but implicit intelligence is intelligence that builders don't receive.

The fix is conceptually simple: make TC externalize its page-arc theory as a structured, named deliverable alongside zone counts and color specs. The builder then receives not just "4 zones with these colors" but "4 zones forming a DESCENDING DENSITY ARC with dramatic contrast at Zone 4, peaking at 65% scroll."

---

## Relationship to Other Scales

- **Navigation scale (Scale 1):** Navigation reflects the page arc — TOC entries should signal zone shifts, header weight should match page position. Page arc is the AUTHORITY that navigation mirrors.
- **Section scale (Scale 3):** Each zone contains sections. Section-level mechanism deployment should REINFORCE the zone's role in the page arc (dense mechanisms in dense zones, sparse mechanisms in sparse zones). Page arc is the CONSTRAINT that sections respect.
- **Component scale (Scale 4):** Components within sections adapt to zone density. Component density in Zone 3 (peak) should exceed Zone 1 (entry). Page arc is the GRADIENT that component density follows.
- **Character scale (Scale 5):** Letter-spacing, font-size within zones should follow the page-level trajectory. Character-level refinement is the FINEST GRAIN of the page arc.

Page scale is the ORGANIZING PRINCIPLE that all other scales serve. Without explicit page-arc intelligence reaching the builder, the other scales become independent rather than coordinated — each section and component makes locally sensible decisions that don't add up to a global experience.
