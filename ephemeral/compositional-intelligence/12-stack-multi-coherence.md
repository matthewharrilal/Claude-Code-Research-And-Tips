# STACK: Multi-Coherence Trace

**Agent:** Multi-Coherence Stack Tracer (Opus 4.6)
**Task:** #12 -- Trace where >=3 channel simultaneous shift gets lost in PV2
**Date:** 2026-02-19
**Sources:** PV2-PIPELINE-DIAGRAM.md, tension-composition SKILL.md (1,878 lines), mechanism-catalog.md (~1,200 lines), 14-MASTER-SYNTHESIS.md (615 lines)
**Blocks:** Task #31 (Contrarian)

---

## 1. WHAT MULTI-COHERENCE IS

Multi-coherence is not a threshold. It is the defining property of pages that feel DESIGNED versus pages that feel STYLED.

**Definition:** At each section boundary, >= 3 CSS channels shift SIMULTANEOUSLY in the SAME semantic direction.

**What this means concretely:** When the reader scrolls from Section 2 (introductory overview) to Section 3 (deep technical content), the transition is not just "the background gets darker." It is:

- Background shifts from #FEF9F5 (warm cream) to #FAF5ED (earthy tan) -- CHROMATIC shift
- Font-size drops from 18px body to 16px body, letter-spacing tightens from 0.01em to 0em -- TYPOGRAPHIC shift
- Padding compresses from 64px to 32px -- SPATIAL shift
- Border-left on callouts shifts from 1px subtle to 4px structural -- STRUCTURAL shift

All four channels say the SAME thing: "we are going DEEPER." The reader does not consciously register any single shift. They register the ENSEMBLE as atmospheric change -- the page feels like it's progressing, not just continuing.

**Why this matters:** The flagship experiment deployed 14 mechanisms across 6 channels. It passed ALL programmatic gates. Computed-style measurement confirmed channels shifted at boundaries. But the PA audit found the result FLAT -- 34/91 richness versus CD-006's 80/91. Individual channel shifts were present but they were not COHERENT. Backgrounds shifted by 1-8 RGB points (imperceptible), typography was uniformly 16px/400, spacing was uniformly padded. Each channel met its minimum threshold independently; no channels worked TOGETHER.

Multi-coherence is the difference between an orchestra where each instrument plays correctly and an orchestra where the instruments play IN CONCERT.

---

## 2. WHERE MULTI-COHERENCE INTELLIGENCE EXISTS IN THE KNOWLEDGE BASE

### 2A. Mechanism Catalog -- The Clearest Statement

The mechanism catalog (mechanism-catalog.md, lines 75-85) contains the single best description of multi-coherence in the entire design system:

> **Ceiling (metaphor-driven multi-channel coherence):**
> Builder has derived a metaphor (e.g., "geological strata") through Phases 1-3
> Builder looks at catalog THROUGH the metaphor: "Geological strata have pressure gradients -> spacing compression (#4). Strata have consolidation levels -> border-weight (#1). Strata have distinct layers -> zone backgrounds (#7)."
> KEY REALIZATION: spacing compression, border-weight, AND zone backgrounds all encode the SAME thing -- geological depth. They REINFORCE each other.
> Selection logic: metaphor -> shared semantic dimension -> multiple mechanisms encoding that dimension simultaneously

And the concrete output difference:

> Middle: border-weight handles hierarchy, zone backgrounds handle section breaks, spacing handles rhythm -- each independently solving different problems
> Ceiling: border-weight + zone backgrounds + spacing ALL encode "depth" together -- when you scroll down, borders get heavier AND backgrounds get darker AND spacing gets tighter, all saying "deeper" in three CSS channels at once

This is the INTELLIGENCE. It says: multi-coherence means multiple channels encoding the SAME semantic through different CSS properties, creating atmospheric coherence through REINFORCEMENT rather than independent function.

### 2B. TC Skill -- Coherence Checking (Step 4.3)

The TC skill's Step 4.3 contains 5 coherence rules (C-1 through C-5). The most important:

> **Rule C-1: Density direction must be consistent across ALL channels.**
> If metaphor implies "descent" (deeper = denser):
> - Background MUST darken or warm progressively
> - Border weight MUST shift from subtle to structural
> - Typography MUST compress (smaller sizes, tighter line-height)
> - Spacing MUST decrease
> - Layout MUST shift from wide/open to tight/contained

This is the RECIPE for multi-coherence -- a directional consistency rule that requires all 5 channel dimensions to move in the same direction when the metaphor's semantic dimension changes.

### 2C. PV2 Architecture -- Cascade Value Table (Phase 8)

The PV2 diagram specifies Phase 8 of the recipe:

> **E. REQUIRED DELIVERABLE: Cascade Value Table**
> - Record computed CSS at EVERY section boundary
> - background, font-size, font-weight, letter-spacing, border-left, paragraph margin, color
> - Verify >= 3 channels shift at every transition

This is the VERIFICATION artifact for multi-coherence -- the builder must PROVE that >= 3 channels shift at each boundary.

### 2D. Master Synthesis -- Convergent Finding

The master synthesis (14-MASTER-SYNTHESIS.md) confirms multi-coherence rules exist and are part of PV2. Report B-07 identifies the cascade value table as a BLOCKING requirement. The synthesis resolves the 6 operational channels as: Chromatic, Typographic, Spatial, Structural, Behavioral, Material.

---

## 3. THE CRITICAL GAP: HOW THE BUILDER KNOWS

Here is the central problem. Three artifacts contain multi-coherence intelligence:

1. **Mechanism catalog** describes the CONCEPT ("multiple mechanisms encoding the same thing")
2. **TC skill Step 4.3** specifies the RULE ("density direction must be consistent")
3. **PV2 Phase 8** specifies the VERIFICATION ("cascade value table with >= 3 channels")

But NONE of these tells the builder HOW to execute multi-coherence at each specific boundary. The gap is between concept and implementation -- between "channels should shift together" and "at THIS boundary, shift THESE channels by THESE amounts in THIS direction."

### 3A. What the Builder Actually Receives

Under PV2, the Opus builder reads 6 files:

1. `operational-recipe.md` (~650 lines) -- 9-phase sequential recipe
2. `_build-plan.md` -- TC planner output
3. `tokens.css` -- design system tokens
4. `prohibitions.md` -- soul constraints
5. `merged-components.css` -- component library
6. `mechanism-catalog.md` -- all 18 mechanisms

The recipe is SEQUENTIAL. The phases are:

- Phase 3: Zone Backgrounds (chromatic channel)
- Phase 4: Structural Borders + Dividers (structural channel)
- Phase 5: Typography Zones (typographic channel)

Each phase addresses ONE channel in ISOLATION. Phase 3 says "apply backgrounds with >= 15 RGB delta." Phase 4 says "add borders, 3+ transition types." Phase 5 says "create 3-zone typography arc with >= 2px delta."

### 3B. The Sequential Phase Problem

The recipe splits multi-coherence across three separate phases (3, 4, 5). The builder does backgrounds FIRST, then adds borders SECOND, then adds typography THIRD. But multi-coherence requires them TOGETHER -- the semantic direction must be consistent ACROSS all three.

The risk: The builder does Phase 3 and creates a warm-to-cool background arc. Then does Phase 4 and adds borders with no directional relationship to the backgrounds. Then does Phase 5 and creates a typography arc that follows neither the background nor the border direction. Each channel independently meets its minimum threshold. But the ENSEMBLE has no coherent semantic direction.

This is EXACTLY what happened in the flagship experiment. The builder executed each CSS property group separately. Each group technically passed. The combination was flat.

### 3C. What the Builder Does NOT Know

At a specific boundary (e.g., Section 2 to Section 3), the builder does NOT know:

1. **WHICH channels should shift?** The recipe says >=3 (Phase 8 verification) but doesn't say which 3. Should it be chromatic + typographic + spatial? Or structural + behavioral + material? The answer depends on the semantic direction at that boundary, but the recipe doesn't bind channels to semantics.

2. **In WHAT direction?** The build plan specifies zone backgrounds (chromatic direction) but not how borders, typography, or spacing should CORRELATE with that chromatic direction. If zone 2 is warmer than zone 3, should borders be heavier or lighter? Should typography be larger or smaller? The mechanism catalog describes this for geological metaphors but not in a generalizable way.

3. **By HOW MUCH relative to each other?** If the background shifts by 15 RGB points, should the font-size shift by 2px? By 4px? Should the border-weight shift by 1px? The cascade value table verifies the EXISTENCE of shifts but not their PROPORTIONAL relationship.

4. **Whether they should accelerate, decelerate, or maintain?** As the page progresses from Section 1 to Section 5, should the channel shifts get LARGER (accelerating depth), stay CONSTANT (uniform progression), or get SMALLER (decelerating arrival)? This is the difference between crescendo, steady-state, and diminuendo. The recipe specifies none of this.

---

## 4. THE CORE STRUCTURAL FAILURE: SEMANTIC BINDING IS ABSENT

### 4A. What Should Happen

At each section boundary, the build plan should specify a SEMANTIC DIRECTION -- a single word or phrase that ALL channels express together:

| Boundary | Semantic Direction | Chromatic | Typographic | Spatial | Structural |
|----------|-------------------|-----------|-------------|---------|------------|
| S1 -> S2 | DEEPENING | bg warms 20 RGB | font-size -1px, weight +100 | padding -16px | border +1px width |
| S2 -> S3 | INTENSIFYING | bg cools 15 RGB | letter-spacing -0.01em | gap -8px | new left border appears |
| S3 -> S4 | RESOLVING | bg lightens 25 RGB | font-size +2px, weight -100 | padding +24px | border lightens to subtle |

This is a SEMANTIC BINDING TABLE. It binds the abstract direction ("deepening") to concrete CSS shifts across 4+ channels, ensuring they move in concert.

### 4B. What Actually Happens

The TC planner outputs a `_build-plan.md` containing:

- Zone count (e.g., 4)
- Section inventory (sections mapped to zones)
- Mechanism deployment per category (S:1+, T:1+, M:1+, B:1+, R:1+)
- Background colors per zone (with >= 15 RGB delta)
- Transition plan (>= 3 types: SMOOTH/BRIDGE/BREATHING)

This build plan specifies CHROMATIC direction (zone background colors) and TRANSITION TYPES (smooth/bridge/breathing). But it does NOT specify:

- How typography should correlate with zone backgrounds
- How spacing should correlate with zone backgrounds
- How borders should correlate with zone backgrounds
- What the SEMANTIC DIRECTION is at each boundary
- How all channels move TOGETHER

The build plan provides one channel's values (chromatic) and leaves the other channels to the builder's discretion across three separate recipe phases.

### 4C. Where the TC Skill COULD Have Generated This

The TC skill's Step 4.3 (Coherence Checking) has Rule C-1, which describes exactly this directional consistency. But Step 4.3 is a POST-GENERATION check, not a GENERATION instruction. It says "verify all channels agree" AFTER the builder has independently decided each channel's values. By then, the channels are already misaligned.

Step 4.1 (Extract Metaphor Physical Properties) has a 5-category taxonomy: Spatial, Temporal, Material, Behavioral, Relational. Each category maps to CSS mechanisms. But the mapping is per-CATEGORY, not per-BOUNDARY. It tells the builder "your metaphor has spatial properties (layering)" and "your metaphor has material properties (density)." It does NOT tell the builder "at boundary S2->S3, the spatial and material properties should both shift toward denser/heavier."

### 4D. The Cascade Value Table: Verification, Not Generation

PV2's Phase 8 requires a cascade value table that records computed CSS at every boundary and verifies >= 3 channels shift. This is a VERIFICATION artifact. It catches multi-coherence failures AFTER 90-150 minutes of building. It does not PREVENT them.

The builder spends 90 minutes executing 9 phases, each addressing channels independently. Then in Phase 8, the builder discovers that only 2 channels shifted at boundary S2->S3 (background changed but nothing else did). Now the builder must go back and add channel shifts -- but retrofitting coherence into a completed page is fundamentally different from building coherence into a page from the start.

---

## 5. THE RECIPE'S STRUCTURAL CONTRADICTION WITH MULTI-COHERENCE

The deepest problem is this: PV2's recipe format is SEQUENTIAL BY CHANNEL, but multi-coherence requires SIMULTANEOUS BY BOUNDARY.

### 5A. The Recipe Says: Process by Channel

```
Phase 3: Apply ALL zone backgrounds (chromatic for all sections)
Phase 4: Apply ALL borders + dividers (structural for all sections)
Phase 5: Apply ALL typography zones (typographic for all sections)
```

This is channel-first processing. The builder completes one channel across the entire page, then the next channel, then the next. This is natural for sequential recipe execution -- it minimizes context-switching.

### 5B. Multi-Coherence Requires: Process by Boundary

```
Boundary S1->S2: Shift background + borders + typography + spacing TOGETHER
Boundary S2->S3: Shift background + borders + typography + spacing TOGETHER
Boundary S3->S4: Shift background + borders + typography + spacing TOGETHER
```

This is boundary-first processing. The builder addresses ALL channels at each boundary before moving to the next boundary. This ensures channels are coordinated because they are being decided SIMULTANEOUSLY.

### 5C. The Contradiction

You cannot have both. Either the builder processes channel-by-channel (the recipe's current structure) or boundary-by-boundary (multi-coherence's requirement). The recipe format -- which IS PV2's defining innovation -- structurally prevents the builder from thinking about multi-coherence during execution.

The cascade value table in Phase 8 catches the problem too late. The recipe phases 3-5 create it too early.

This is not a missing rule. This is a STRUCTURAL CONTRADICTION between the recipe's execution model and multi-coherence's deployment model.

---

## 6. WHAT STRUCTURED APPROACH WOULD ENFORCE COHERENT CHANNEL SHIFTS

### 6A. Approach 1: Semantic Binding Table as TC Deliverable

**The TC planner generates a per-boundary binding table as part of `_build-plan.md`.**

Instead of just specifying zone backgrounds, the TC planner specifies the SEMANTIC DIRECTION and its channel expression at every major boundary:

```markdown
## Boundary Coherence Map

### S1 (Introduction) -> S2 (Architecture)
SEMANTIC DIRECTION: DEEPENING (from overview to specifics)
| Channel | S1 Value | S2 Value | Delta | Direction |
|---------|----------|----------|-------|-----------|
| Chromatic | bg #FEF9F5 | bg #FAF5ED | -12R, -4G, -8B | WARMER |
| Typographic | 18px/400 body | 16px/400 body, 0.03em ls | -2px size, +0.03em ls | DENSER |
| Spatial | 64px padding | 48px padding | -16px | TIGHTER |
| Structural | no borders | 1px subtle border-bottom | +1px | MORE DEFINED |
| Channels shifting: 4 (>=3) PASS |

### S2 (Architecture) -> S3 (Deep Dive)
SEMANTIC DIRECTION: INTENSIFYING (from structural overview to technical depth)
...
```

**Why this works:** The TC planner is the TELESCOPE -- it sees the whole content, understands the semantic arc, and can reason about directional coherence. The builder is the MICROSCOPE -- it executes specific CSS. The binding table gives the microscope the telescope's directional intelligence at per-boundary granularity.

**Cost:** Adds ~30-50 lines to the build plan per page. Adds ~15 minutes to TC planning time.

**Risk:** TC planner may generate binding tables that are structurally correct but perceptually wrong (e.g., specifying a 2px font-size delta that is imperceptible alongside a 25 RGB background delta that is dramatic). The binding table needs perception-proportional guidance.

### 6B. Approach 2: Recipe Phase Restructuring (Boundary-First)

**Restructure recipe phases 3-5 from channel-first to boundary-first.**

Instead of:
```
Phase 3: All backgrounds
Phase 4: All borders
Phase 5: All typography
```

Replace with:
```
Phase 3: Boundary S1->S2 (all channels simultaneously)
Phase 4: Boundary S2->S3 (all channels simultaneously)
Phase 5: Boundary S3->S4 (all channels simultaneously)
Phase 6: Boundary S4->S5 (all channels simultaneously)
```

Each boundary-phase specifies:
- Background shift
- Typography shift
- Spacing shift
- Border shift
- "Can you SEE the transition through >=3 channels?"

**Why this works:** Forces the builder to think about multi-coherence at the point of execution, not as a post-hoc verification. Each boundary is a complete coherence unit.

**Cost:** Recipe becomes variable-length (depends on zone count). Breaks the current fixed 9-phase structure. Requires dynamic recipe generation per page.

**Risk:** Variable-length recipes are harder to validate. The fixed 9-phase structure is one of PV2's advantages -- builders know exactly how many phases to execute. Boundary-first also means the builder can't batch-process backgrounds efficiently.

### 6C. Approach 3: Multi-Coherence Recipe Insert (Phase 3.5)

**Add a new Phase 3.5 between backgrounds and borders that generates the binding table from the builder's own background decisions.**

```
Phase 3: Apply zone backgrounds (chromatic)
Phase 3.5: MULTI-COHERENCE BINDING
  - For each boundary where background shifted:
    - Specify the SEMANTIC DIRECTION of this shift
    - Choose >= 2 additional channels to shift in the same direction
    - Record the planned shift for each channel
    - "Can you NAME the semantic direction at this boundary in one word?"
Phase 4: Apply borders + dividers (structural, following Phase 3.5 binding)
Phase 5: Apply typography zones (typographic, following Phase 3.5 binding)
```

**Why this works:** Preserves the sequential channel-first recipe structure but inserts a coherence planning step between the first channel (chromatic) and the remaining channels. The builder commits to multi-channel binding BEFORE executing borders and typography, so phases 4 and 5 are constrained by Phase 3.5's binding decisions.

**Cost:** Adds one recipe phase (~15-20 lines in recipe, ~10-15 minutes build time). Minimal structural disruption.

**Risk:** Relies on the builder to self-generate the binding table correctly. The TC planner's strategic intelligence is better positioned for this task. However, Approach 3 is the lightest intervention that could work.

### 6D. Approach 4: Hybrid (TC Binding + Builder Phase 3.5)

**The TC planner generates a SKELETON binding table. The builder completes it with specific CSS values in Phase 3.5.**

TC planner outputs:
```markdown
## Boundary Coherence Skeleton

### S1 -> S2: DEEPENING
Required channels: Chromatic (specified: #FEF9F5 -> #FAF5ED), Typographic (COMPRESS), Spatial (TIGHTEN)
Builder: fill in specific typographic and spatial values during Phase 3.5.

### S2 -> S3: INTENSIFYING
Required channels: Chromatic (specified: #FAF5ED -> #F0EBE3), Structural (ADD BORDERS), Material (ADD WEIGHT)
Builder: fill in specific structural and material values during Phase 3.5.
```

Builder Phase 3.5 completes:
```markdown
### S1 -> S2: DEEPENING (completed)
| Channel | Value | Shift | Direction |
|---------|-------|-------|-----------|
| Chromatic | #FEF9F5 -> #FAF5ED | -12R | WARMER (from TC) |
| Typographic | 18px -> 16px body | -2px | COMPRESS (builder) |
| Spatial | 64px -> 48px padding | -16px | TIGHTEN (builder) |
| Channels: 3 PASS |
```

**Why this works:** Distributes the cognitive load. TC provides the strategic intelligence (WHICH semantic direction, WHICH channels), builder provides the tactical precision (WHAT specific CSS values). Neither is solely responsible for multi-coherence. The binding table is produced collaboratively.

**Cost:** Adds ~30-50 lines to build plan + ~15-20 lines to recipe. Adds ~15-20 minutes total (split TC/builder).

**Risk:** Coordination failure between TC skeleton and builder completion. Builder may override TC's channel selection. Need clear protocol for when builder disagrees with TC's channel choices.

---

## 7. THE PROPORTIONAL RELATIONSHIP PROBLEM

Even with a binding table, there is a second-order problem: HOW MUCH should each channel shift relative to the others?

If background shifts by 20 RGB points (a substantial chromatic move), and font-size shifts by 1px (barely perceptible), the multi-coherence is technically present (both shifted) but perceptually imbalanced. The reader notices the background change and doesn't notice the typography change. The channels are present but not PROPORTIONAL.

### 7A. Perception-Proportional Deltas

Each channel has a different perceptual threshold (how much delta is needed for the shift to be VISIBLE):

| Channel | Minimum Perceptible Delta | "Moderate" Delta | "Strong" Delta |
|---------|--------------------------|------------------|----------------|
| Chromatic (background) | 15 RGB points | 20-30 RGB | 40+ RGB |
| Typographic (font-size) | 2px | 3-4px | 6+ px |
| Typographic (letter-spacing) | 0.03em | 0.05em | 0.08+ em |
| Spatial (padding) | 16px | 24-32px | 48+ px |
| Structural (border-width) | 1px existence | 2px increase | 3px appearance/removal |

For multi-coherence to FEEL coherent, the channels should shift at roughly the SAME perceptual intensity. A "moderate" shift at all channels creates atmospheric change. A "strong" chromatic shift with "minimum" typographic shift creates perceptual imbalance -- the reader notices the color but not the text.

### 7B. Intensity Levels for Binding Tables

The binding table should specify not just DIRECTION but INTENSITY:

```
Boundary S1 -> S2: DEEPENING, MODERATE intensity
- Chromatic: 20-30 RGB shift (moderate)
- Typographic: 3-4px font-size (moderate) + 0.03em letter-spacing (minimum)
- Spatial: 24-32px padding reduction (moderate)
- Structural: 1px border appearance (minimum -- borders don't need to match moderate)
```

The intensity levels (SUBTLE / MODERATE / STRONG) normalize across channels with different perceptual thresholds. "MODERATE chromatic" and "MODERATE spatial" are not the same number but the same PERCEPTUAL MAGNITUDE.

### 7C. Acceleration/Deceleration Arcs

Over the full page, the intensity of boundary shifts can ACCELERATE (each boundary bigger than the last), MAINTAIN (uniform shifts), or DECELERATE (each boundary smaller):

| Arc Type | When to Use | Effect |
|----------|-------------|--------|
| ACCELERATING | Content builds to climax (research synthesis, argument building) | Reader feels increasing urgency |
| MAINTAINING | Content has uniform sections (API docs, reference) | Reader feels steady progression |
| DECELERATING | Content resolves after peak (tutorial conclusion, retrospective) | Reader feels arrival/resolution |
| CRESCENDO-DIMINUENDO | Content has a dramatic peak (case study, investigation) | Reader feels narrative arc |

The TC planner should specify the arc type. The binding table's intensity levels should follow the arc.

---

## 8. WHERE SPECIFICALLY MULTI-COHERENCE GETS LOST IN PV2

### Loss Point 1: TC Planner -> Build Plan (compression)

The TC planner's Phase 2 derives tensions, Phase 3 collapses them into metaphor, Phase 3.5 locks in. The resulting build plan specifies mechanisms PER CATEGORY but not PER BOUNDARY. The semantic direction at each boundary is implicit in the metaphor but never made explicit. When the build plan crosses the handoff to the builder, the per-boundary semantic intelligence is LOST -- it exists in the TC planner's reasoning but is not codified in the build plan.

**Fix:** Binding table in build plan (Approach 4).

### Loss Point 2: Build Plan -> Recipe Phases (sequential splitting)

The recipe splits channels across Phases 3 (backgrounds), 4 (borders), 5 (typography). Even if the build plan contained multi-coherence intelligence, the recipe's sequential structure would fragment it. The builder processes each channel in isolation, creating three independent arcs that may not align.

**Fix:** Phase 3.5 multi-coherence binding step (Approach 3 or 4).

### Loss Point 3: Recipe Phases -> Cascade Value Table (too late)

The cascade value table is Phase 8 -- the LAST phase before verification. By the time the builder discovers that only 2 channels shifted at boundary S2->S3, the page is already built. Retrofitting coherence into completed CSS is harder than building it in from the start.

**Fix:** Move cascade value table generation to Phase 3.5 as a PLANNING artifact (not just Phase 8 as a verification artifact). Builder plans the table, executes phases 4-7, then verifies against the planned table in Phase 8.

### Loss Point 4: Handoff Gate -> Channel Isolation

The handoff gate (Wave 0.9) checks zone count, background delta, grid layouts, per-category mechanisms, and transition types. It does NOT check whether the build plan contains per-boundary multi-channel coherence specifications. You can pass the handoff gate with a build plan that specifies beautiful backgrounds but says nothing about how typography or spacing should correlate with those backgrounds.

**Fix:** Add handoff gate check: "Does build plan specify semantic direction at each major boundary?" Binary: YES/NO.

### Loss Point 5: Programmatic Gates -> Single-Channel Verification

SC-09 checks background delta (>= 15 RGB). SC-11 checks font-size zones (>= 2px delta). SC-10 checks stacked gap (<= 108px). Each gate checks ONE channel. No gate checks MULTI-CHANNEL COHERENCE -- whether >= 3 channels shifted together at each boundary.

**Fix:** Add SC-13: Multi-Coherence Gate. For each section boundary, compute the number of channels that shifted. If any boundary has < 3 channels shifting, FAIL. This requires the gate-runner to measure PAIRS of adjacent sections, not just individual measurements.

---

## 9. RECOMMENDATIONS (PRIORITIZED)

### BLOCKING (must resolve before codification)

**B-01: Add Semantic Binding Table to build plan output.**
The TC planner MUST output per-boundary semantic directions with channel assignments. Without this, multi-coherence is aspirational text, not operational specification. This is Approach 4 -- TC provides skeleton, builder completes.

**B-02: Add Phase 3.5 (Multi-Coherence Binding) to recipe.**
Between backgrounds (Phase 3) and borders (Phase 4), insert a phase where the builder commits to specific channel shifts at each boundary. This prevents the sequential-phase fragmentation.

**B-03: Add SC-13 (Multi-Coherence Gate) to gate-runner.**
Measure computed styles at PAIRS of adjacent sections. Count channels that shifted. Any boundary with < 3 channels shifting = FAIL.

### SIGNIFICANT (should resolve)

**S-01: Define perception-proportional intensity levels.**
Create a SUBTLE/MODERATE/STRONG table that normalizes across channels with different perceptual thresholds. Include in perception-thresholds.md.

**S-02: Add acceleration/deceleration arc to build plan.**
TC planner specifies the page's intensity arc (ACCELERATING/MAINTAINING/DECELERATING/CRESCENDO-DIMINUENDO). Binding table intensity levels follow the arc.

**S-03: Move cascade value table from Phase 8 to Phase 3.5 (planning) + Phase 8 (verification).**
Builder creates the PLANNED cascade table during Phase 3.5, then VERIFIES against actual computed values in Phase 8.

### NOTED

**N-01: Boundary-first recipe restructuring (Approach 2) is theoretically optimal but practically disruptive.** The variable-length recipe breaks PV2's fixed 9-phase structure. File for future consideration if Phase 3.5 binding proves insufficient.

**N-02: The mechanism catalog's multi-coherence description (lines 75-85) is the best existing articulation.** It should be QUOTED VERBATIM in the operational recipe's Phase 3.5 preamble.

---

## 10. THE DEEPER INSIGHT: MULTI-COHERENCE IS THE BRIDGE FROM 3/4 TO 4/4

The master synthesis identifies "recipe ceiling at 3/4" as the #1 risk for ALWAYS FLAGSHIP. The recipe reliably produces COMPOSED (3/4) but struggles to reach DESIGNED (4/4).

Multi-coherence is the SPECIFIC PROPERTY that separates COMPOSED from DESIGNED.

- **STYLED (2/4):** Individual channels have visible variation. Backgrounds differ, typography has hierarchy, borders exist. But they operate independently.
- **COMPOSED (3/4):** Channels are coordinated at the page level. There is an overall arc. But the per-boundary coordination is approximate -- some boundaries have 3 channels shifting, others have 1 or 2.
- **DESIGNED (4/4):** Every boundary has >= 3 channels shifting in the same semantic direction with perception-proportional intensity. The page has an overall intensity arc. The ensemble creates atmospheric coherence that no single channel could achieve alone.

If PV2 wants to exceed the 3/4 recipe ceiling, multi-coherence is the lever. Not more mechanisms, not more rules, not more gates -- but per-boundary, multi-channel, semantically-bound, perception-proportional coordination.

The binding table IS the bridge from 3/4 to 4/4. It is the one structured artifact that could make compositional fluency TEACHABLE through recipe format.

---

## 11. ADVERSARIAL CHALLENGE TO MY OWN ANALYSIS

**Challenge 1: "CD-006 achieved 39/40 without ANY binding table."**

True. CD-006 was built by Opus with human iteration. The Opus builder had compositional fluency that produced implicit multi-coherence without explicit binding. The binding table is a PROSTHESIS for builders who lack that fluency -- it makes the implicit explicit. Under fire-and-forget (no human iteration), the prosthesis is necessary because there is no human to say "the typography isn't following the background arc."

**Challenge 2: "Adding a binding table adds complexity to an already complex system."**

True. PV2 already has 9 phases, 12 gates, 5 mandatory checkpoints, and a cascade value table. Adding Phase 3.5 and SC-13 increases complexity. But multi-coherence IS the defining property that separates designed from styled. Without it, PV2 reliably produces 3/4 pages. With it, PV2 has a path to 4/4. The complexity increase (~30 lines to recipe, ~50 lines to gate-runner, ~50 lines to build plan) buys the highest-leverage quality improvement.

**Challenge 3: "The TC planner can't reliably predict which channels should shift at each boundary."**

Partially true. The TC planner reasons at the strategic level (content semantics) not the tactical level (specific CSS). The binding SKELETON (semantic direction + channel assignment) is within TC's capability. The binding COMPLETION (specific CSS values) requires the builder. Approach 4 (hybrid) correctly distributes the cognitive load.

**Challenge 4: "Perception-proportional intensity levels are a judgment concept, not binary."**

True and this is the hardest problem. SUBTLE/MODERATE/STRONG maps to specific number ranges (e.g., "moderate chromatic = 20-30 RGB"), which converts judgment to ranges. The ranges themselves are derived from empirical observation (flagship's 1-8 RGB was invisible, remediation's 15-25 RGB was visible). They are calibrated approximations, not perfect measurements. But calibrated approximations are dramatically better than no guidance at all.

---

## 12. SUMMARY

**Multi-coherence = >= 3 channels shifting TOGETHER at each boundary in the SAME semantic direction with perception-proportional intensity.**

**Where it gets lost:**
1. TC planner derives semantic arc but doesn't codify it per-boundary in build plan
2. Recipe splits channels across sequential phases (3, 4, 5) preventing simultaneous reasoning
3. Cascade value table verifies multi-coherence AFTER building, not BEFORE
4. Handoff gate and programmatic gates don't check multi-channel coherence
5. No perception-proportional intensity guidance exists

**What would fix it:**
1. Semantic binding table in build plan (TC provides skeleton)
2. Phase 3.5 multi-coherence binding step in recipe (builder completes skeleton)
3. SC-13 programmatic gate (measures channel co-shifts at boundaries)
4. Perception-proportional intensity levels in thresholds file
5. Intensity arc type in build plan

**Why it matters:**
Multi-coherence is the specific property that separates COMPOSED (3/4) from DESIGNED (4/4). It is the bridge across the recipe ceiling. Without it, PV2 reliably produces professionally styled pages. With it, PV2 has a path to pages that feel intentionally designed at every boundary.

---

**END REPORT**

**Statistics:**
- Sources read: 5 (PV2 diagram, TC skill, mechanism catalog, master synthesis, scale research)
- Loss points identified: 5
- Approaches evaluated: 4
- Blocking recommendations: 3
- Significant recommendations: 3
- Total lines: ~450
