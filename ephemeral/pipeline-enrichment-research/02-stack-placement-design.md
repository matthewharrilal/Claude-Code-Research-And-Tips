# Stack Placement Design: Compositional Intelligence Across the Pipeline

**Agent:** stack-placement-designer (Opus)
**Date:** 2026-02-20
**Sources Read:**
- `~/.claude/skills/build-page/SKILL.md` (408 lines, complete)
- `design-system/pipeline/conventions-brief.md` (403 lines, complete)
- `design-system/pipeline/gate-runner.md` (992 lines, complete)
- `design-system/pipeline/flagship-pa-questions.md` (144 lines, complete)

**Consumed by:** master-synthesizer, all team members

---

## 0. Framework: Telescope / Microscope / Periscope

The pipeline has three optical modes. Each concept must manifest differently at each stage:

| Optic | Stage | Voice | Example |
|-------|-------|-------|---------|
| **Telescope** | Conventions Brief (builder reads) | Declarative, world-describing | "Multi-coherence is the binding rule -- 3+ channels shifting together in the same semantic direction" |
| **Microscope** | Gate Runner (programmatic) | Imperative, binary-threshold | "PASS: shifts >= 3 at every boundary AND avg >= 4.0" |
| **Periscope** | PA Questions (auditor judges) | Perceptual, experiential | "Do different visual properties seem to have their own independent rhythms?" |

The **orchestrator** (SKILL.md) routes between these stages but does NOT interpret concepts itself. It is a dispatcher, not a composer.

**Key principle:** Each concept appears in ALL THREE optics, but in different FORM and GRANULARITY. The brief tells the builder *what to aim for*, the gates verify *what cannot be violated*, and the PA judges *what was actually perceived*.

---

## 1. STACK PROGRESSION (Vertical Architecture)

### What It Is

Scales, channels, multi-coherence, and anti-scale are NOT separate concepts -- they form a vertical stack where each layer depends on the one below:

```
Anti-Scale (governing formula)
    |
    v
Multi-Coherence (3+ channels aligned at boundaries)
    |
    v
6 Channels (CSS property groups that can shift)
    |
    v
5 Scales (zoom levels where patterns manifest)
```

### Current Pipeline State

- **Brief (conventions-brief.md):** Sections 3-5 address richness, multi-coherence, and fractal echo as SEPARATE, PEER sections. No vertical dependency is stated. A builder could read Section 5 (Fractal Echo) without understanding it DEPENDS on Section 4 (Multi-Coherence) which depends on Section 2 (Perception). The stack reads left-to-right (parallel sections) when it should read bottom-to-top (layered dependency).
- **Gate Runner:** SC-13 (multi-coherence) depends on SC-12 (zone count) and SC-09 (bg delta) in the dependency chain (line 95-97). This IS the stack, but it's expressed as a TECHNICAL dependency chain, not as a compositional reasoning chain. The gates correctly implement bottom-up: zones -> backgrounds -> channels -> coherence. But the builder never sees this reasoning.
- **PA:** PA-61 (multi-voice), PA-62 (transition variation), PA-63 (fractal zoom) are assigned to DIFFERENT auditors (F, D, E respectively). This is correct -- independent auditors prevent confirmation bias. But no synthesis step asks "does the stack operate as an integrated vertical architecture?"

### WHERE Each Optic Should Place It

**TELESCOPE (Brief) -- Section restructuring:**

The brief should present the stack as a SINGLE narrative arc, not 4 parallel sections. Proposed reframing:

```
Section 2: PERCEPTION (unchanged -- this is the physics foundation)
Section 3: SCALE ARCHITECTURE (build bottom-up: 5 scales, build order, dependency chain)
    -> 3A: The 5 scales (naming, sizing, what expresses at each)
    -> 3B: Build order (Navigation first -> Character last)
    -> 3C: Scale dependencies (Character without Page = orphaned variation)
Section 4: CHANNEL VOCABULARY (the 6 channels as CSS property groups)
    -> 4A: Channel names and CSS mappings
    -> 4B: Primary vs enhancement channels
    -> 4C: Per-channel perception thresholds
Section 5: MULTI-COHERENCE (channels align at zone boundaries)
    -> Depends explicitly on Section 4 (channels) + Section 3 (scales)
    -> 5A: The binding rule (>= 3 channels, same direction)
    -> 5B: Semantic directions (4 named directions)
    -> 5C: Layout diversity shortcut (free multi-coherence)
Section 6: RICHNESS = density x restraint x spatial confidence
    -> Governs the WHOLE stack
    -> The anti-scale formula as the evaluation of whether the stack works
```

This restructuring makes the vertical dependency VISIBLE in the reading order. The builder encounters scales first, then channels, then coherence, then the governing principle -- bottom-up, same order they should BUILD.

**GRANULARITY:** World-description. "Multi-coherence is what happens when channels align at boundaries between scales." Not: "SC-13 >= 3 channels." The brief creates understanding; the gate measures compliance.

**MICROSCOPE (Gates) -- No restructuring needed:**

The gate dependency chain (SC-12 -> SC-09 -> SC-13 -> SC-13B -> SC-16) already IS the stack, encoded as measurement dependencies. This is correct. What's missing: a COMMENT in the gate runner that names this dependency chain as "the compositional intelligence stack" so future editors understand WHY these gates are ordered this way.

Add one annotation block at line ~94:

```
## Stack Architecture (Why Gates Are Ordered This Way)
##
## The compositional intelligence stack is a bottom-up dependency:
##   SC-12 (zones exist) -> SC-09 (zones are perceptible) ->
##   SC-13 (channels shift together) -> SC-13B (shifts are directional) ->
##   SC-16 (direction progresses)
## Each gate validates a LAYER of the stack. Running them out of order
## produces meaningless measurements.
```

**PERISCOPE (PA) -- Add one synthesis question:**

PA-63 (fractal zoom) asks about scale coherence. PA-61 (multi-voice) asks about channel independence. PA-62 (transition variation) asks about boundary dynamics. These are three views of the same stack.

Missing: A synthesis question that ties them together. Proposed PA-68:

> "Looking at the page as a whole system: do the patterns you see at the component level (cards, callouts) feel like they are PART OF the same design language as the patterns at the page level (zone backgrounds, section transitions)? Or do they feel like separate designs cohabiting?"

This directly tests whether the vertical stack is perceived as integrated. Assign to Auditor G (Metaphor+Ideology) since it tests the unified organizing principle.

---

## 2. SIX CHANNEL NAMES

### What They Are

```
1. Chromatic    -- background-color shift (strongest visual signal)
2. Typographic  -- font-size, font-weight, letter-spacing, line-height
3. Spatial      -- padding, margin, content density
4. Structural   -- border-left weight, horizontal rules, dividers
5. Behavioral   -- hover states, transition timing
6. Material     -- surface treatment, component density, texture
```

### Current Pipeline State

- **Brief (conventions-brief.md, lines 95-102):** The 6 channels are named in Section 4 (Multi-Coherence) with CSS property mappings. This is CORRECT placement. The channels are introduced IN CONTEXT of the rule that uses them. The brief also distinguishes primary (1-4) from enhancement (5-6) channels (line 103). STRONG as-is.
- **Gate Runner (SC-13, lines 334-405):** The 6 channels are measured programmatically. Each has a specific CSS check. This is the microscope form. STRONG as-is. The channel names in the gate match the channel names in the brief.
- **PA:** Channels are NOT named to auditors. PA-62 asks about "visual properties" without naming the 6 channels. This is CORRECT -- auditors should describe what they SEE in perceptual language, not in channel terminology. The channel vocabulary is for builders and gates, not for evaluators.

### WHERE Each Optic Should Place It

**TELESCOPE (Brief) -- Minor enrichment:**

Current placement is good. One addition: after listing the 6 channels, add a SHORT CSS property mapping table that the builder can reference during construction:

```
| Channel | Primary CSS Properties | Perception Floor |
|---------|----------------------|-----------------|
| Chromatic | background-color | >= 15 RGB delta on any channel |
| Typographic | font-size, font-weight, letter-spacing, line-height | >= 2px font-size OR >= 100 font-weight |
| Spatial | padding, margin, gap | >= 24px padding delta |
| Structural | border-left-width, border-style, hr | configuration change |
| Behavioral | transition, :hover | presence/absence change |
| Material | background-image, component density | presence/absence change |
```

This table already partially exists scattered across the gate runner. Consolidating it into the brief gives the builder a single reference for "what counts as a shift in channel X?"

**GRANULARITY:** Declarative (what channels exist + what CSS properties they map to) but NOT imperative (don't tell the builder which channels to shift where -- that's their creative decision).

**MICROSCOPE (Gates) -- Already correct:**

SC-13 already measures all 6 channels with explicit CSS checks. No changes needed. The gate IMPLEMENTS the channel vocabulary; the brief DEFINES it.

**PERISCOPE (PA) -- Already correct:**

Auditors should NOT know channel names. PA-62 ("how many visual properties change simultaneously") lets the auditor discover channels perceptually. PA-61 ("do properties have independent rhythms") lets them discover channel independence. The periscope works best when the observer names what they see, not what the builder intended.

---

## 3. FIVE SCALE NAMES

### What They Are

```
1. Navigation  (~1440px)  -- header, TOC, footer, page chrome
2. Page        (~960px)   -- zone sequence across scroll
3. Section     (~200-400px) -- elements within one viewport
4. Component   (~40-100px)  -- content inside one element
5. Character   (~12-20px)   -- micro-typography shifts
```

### Current Pipeline State

- **Brief (conventions-brief.md, lines 128-148):** Section 5 (Fractal Echo) includes a scale table with 5 rows, build order, min thresholds, and a verification checkbox. STRONG. Also includes the dependency warning (Character without Page = orphaned variation, lines 140-141). The priority rule (Navigation + Page + Component mandatory strong; Section recommended; Character optional/last) is on line 142.
- **Gate Runner (DG-1, lines 561-581):** Checks the fractal echo table deliverable for 5-row coverage, CSS evidence, and pattern direction consistency. This validates the builder PLANNED all 5 scales. But no gate measures whether scales are PERCEPTIBLE in the output. DG-1 checks the PLAN, not the RESULT.
- **PA (PA-63):** "Zoom into one component... does its internal design echo the page's overall design language at a smaller scale?" This checks Component-to-Page scale coherence. It does NOT check Navigation or Section or Character scales explicitly.
- **Orchestrator (SKILL.md):** The builder spawn prompt (lines 45-82) does not mention scales. The builder gets "Phase A: Read content. Identify zones, tensions, metaphor." -- zones, not scales. The 5-scale vocabulary is in the brief but not reinforced in the spawn prompt.

### WHERE Each Optic Should Place It

**TELESCOPE (Brief) -- Already strong, minor enrichment:**

The brief's fractal echo table (lines 131-138) is one of its strongest sections. One addition: make the BUILD ORDER more prominent. Currently it's a table header. Propose promoting it to a named principle:

> **Build Order Dependency:** Build Navigation scale first. Verify perceptibility. Then Page scale. Verify. Then Section. Then Component. Character is LAST and OPTIONAL. Each scale must be perceptible before the next begins. The Flagship experiment built Character scale (letter-spacing gradients) before verifying Page scale (zone backgrounds) -- result: 238 invisible CSS lines.

This turns a table annotation into a narrative lesson with a concrete failure reference.

**MICROSCOPE (Gates) -- Add a scale-coverage gate:**

DG-1 checks the PLAN. No gate checks the RESULT. Proposed new gate SC-17 (or fold into DG-1):

```
SC-17: Scale Coverage (Output Verification)
Tier: A (composition-critical)
Enforcement: Programmatic (blocking)

Check: At least 3 distinct architectural scales are PERCEPTIBLE in the rendered output.

Measurement:
1. Navigation: header padding >= 48px + visible at 20% zoom (proxy: header height >= 100px)
2. Page: >= 3 distinct zone backgrounds (already covered by SC-12 + SC-09)
3. Section: >= 2 component types per viewport-height screenful
4. Component: label/body padding delta >= 4px inside any component
5. Character: any letter-spacing >= 0.03em applied (OPTIONAL -- only checked if present)

PASS: >= 3 of the 5 scale checks pass
FAIL: < 3 scale checks pass
```

This is the missing "scale verification at output" gate. DG-1 checks the plan, SC-17 checks the result.

**PERISCOPE (PA) -- Expand PA-63 or add scale questions:**

PA-63 currently asks about Component-to-Page coherence only. For Flagship, the auditor should be prompted to look at MORE zoom levels. Proposed enrichment to PA-63:

Current: "Zoom into one component... does its internal design echo the page's overall design language at a smaller scale?"

Enriched: "Zoom into one component (card, callout, table, or code block). Does its internal design echo the page's overall design language at a smaller scale? Then look at the header and footer -- do they establish the same visual vocabulary? At how many zoom levels does the design feel like 'the same family' vs 'different templates glued together'?"

This adds Navigation scale to what was previously only Component-to-Page. Now the auditor checks 3 scales (Navigation, Page, Component) in one question.

---

## 4. MULTI-COHERENCE

### What It Is

>= 3 channels shifting TOGETHER at the SAME zone boundary, all pointing the SAME semantic direction. Not just a count -- the shifts must be ALIGNED.

### Current Pipeline State

- **Brief (conventions-brief.md, lines 93-123):** Section 4 defines multi-coherence thoroughly. Names 6 channels, defines 4 semantic directions, gives a concrete CSS example (lines 116-117), explains the layout diversity shortcut (lines 118-119), and distinguishes global coherence from per-boundary coherence (lines 120-121). STRONG section -- one of the brief's best.
- **Gate Runner (SC-13, lines 326-405):** Measures channel shift COUNT at boundaries. PASS: >= 3 at every boundary, avg >= 4. But the known limitation (line 402): "Counts channels but CANNOT judge if shifts serve the SAME semantic direction." SC-13B (lines 508-525) attempts direction classification but is ADVISORY with ~50% confidence.
- **PA (PA-61):** "Do different visual properties seem to have their own independent rhythms?" This checks channel INDEPENDENCE, not channel ALIGNMENT. These are complementary but different things. Multi-coherence = alignment at boundaries. Multi-voice = independence between boundaries.
- **PA (PA-62):** "Count how many visual properties change simultaneously." This directly measures channel shift count perceptually. CORRECT.

### WHERE Each Optic Should Place It

**TELESCOPE (Brief) -- Already strong, one clarification:**

The brief's multi-coherence section is well-written. One addition: explicitly distinguish between MULTI-COHERENCE (alignment at boundaries) and MULTI-VOICE (independence between boundaries). Currently the brief only discusses alignment. The PA asks about independence. The builder should know both exist:

> **Multi-coherence at boundaries, multi-voice between boundaries.** At zone boundaries, channels align -- 3+ shift together in the same direction. Between boundaries, channels may have different rhythms (borders appear and disappear at a different pace than background shifts). This is not contradiction; it is counterpoint. The boundary is the downbeat where all instruments play together. The measures between are where instruments have their own melodic lines.

This prevents the builder from thinking "multi-coherence = everything changes at every boundary" (which produces metronomic uniformity). It teaches them to create alignment AT boundaries while allowing independence BETWEEN boundaries.

**MICROSCOPE (Gates) -- SC-13B needs strengthening:**

SC-13 (count) is solid. SC-13B (direction) is weak (~50% confidence, ADVISORY). The gap: direction coherence is the ESSENCE of multi-coherence, but it's the hardest to measure programmatically.

Two options:

A. **Promote SC-13B to blocking** with a refined heuristic: Instead of INTENSIFYING/RELAXING binary, use a 3-value system:
   - CONCORDANT: >= 3 channels shift in same direction (darker + heavier + tighter = all intensifying)
   - DISCORDANT: channels shift in opposite directions (darker bg but lighter borders)
   - NEUTRAL: insufficient data to classify

   PASS: >= 50% of boundaries are CONCORDANT
   FAIL: < 50% CONCORDANT

   Risk: Still heuristic. May produce false positives/negatives.

B. **Keep SC-13B advisory** but add diagnostic output that the WEAVER reads. The weaver (not the auditors) gets SC-13B's direction analysis as context for interpreting PA-61 and PA-62 results. This creates a gates -> PA handoff where programmatic direction estimates inform perceptual evaluation without biasing fresh-eyes auditors.

**Recommendation: Option B.** Direction coherence is fundamentally perceptual. The gate can SUGGEST, but only a human eye can JUDGE whether shifts "feel like the same intent."

**PERISCOPE (PA) -- PA-61 and PA-62 are correct as-is:**

PA-61 tests independence (multi-voice). PA-62 tests simultaneous shift count (multi-coherence mechanism). Together they capture the PERCEPTUAL manifestation of multi-coherence. No changes needed to questions.

One process improvement: The WEAVER should explicitly synthesize PA-61 + PA-62 + SC-13B to produce a multi-coherence verdict. Currently the weaver looks at each PA question independently. The weaver's synthesis (SKILL.md lines 253-294) should include a MULTI-COHERENCE SYNTHESIS sub-section.

---

## 5. FOUR SEMANTIC DIRECTIONS

### What They Are

```
DEEPENING  = darker bg + tighter spacing + heavier borders + denser typography
OPENING    = warmer bg + generous spacing + thinner borders + more air
FOCUSING   = narrower content + larger type + bolder accents + fewer elements
RESOLVING  = settled tones + standard spacing + lighter borders + clean typography
```

### Current Pipeline State

- **Brief (conventions-brief.md, lines 105-114):** The 4 directions are defined with CSS property implications. The brief says "Define your direction before building" (line 105) and explains contradiction detection (line 114). GOOD placement. GOOD granularity.
- **Gate Runner:** SC-13B attempts direction classification using a simplified 2-value system (INTENSIFYING/RELAXING) instead of the brief's 4-value system. The 4 directions are ABSENT from gates. The gate only knows +/-.
- **PA:** No PA question asks about semantic direction. PA-62 asks about "dramatic vs quiet" transitions, which is INTENSITY, not DIRECTION. The 4-direction vocabulary is invisible to auditors.

### WHERE Each Optic Should Place It

**TELESCOPE (Brief) -- Already well-placed:**

The 4 directions with CSS implications are in the right section (multi-coherence). The builder should define their direction in the conviction statement (line 363: "Coherence direction: [one word -- deepening, opening, focusing, resolving, ...]"). This is correctly placed.

One enrichment: Add a COMBINATION rule. Real pages don't use one direction throughout. A page about discovery might OPEN in the first half and DEEPEN in the second. The brief should acknowledge this:

> **Direction can shift across the page.** A page need not maintain one direction throughout. A common pattern: OPENING at the start (generous overview), DEEPENING through the middle (analytical sections), RESOLVING at the end (synthesis). What matters is that WITHIN each zone-boundary transition, the channels agree on direction. The page-level direction arc is a compositional choice; the per-boundary direction is a coherence requirement.

**MICROSCOPE (Gates) -- Enrich SC-13B's direction model:**

SC-13B currently uses 2 values (INTENSIFYING/RELAXING). The brief uses 4 values (DEEPENING/OPENING/FOCUSING/RESOLVING). This mismatch means the gate can't validate what the brief asks the builder to do.

Proposed enrichment to SC-13B:

Map CSS property shifts to the 4 directions:
```
DEEPENING:  bg lightness decreasing + padding decreasing + border-weight increasing + font-weight increasing
OPENING:    bg lightness increasing + padding increasing + border-weight decreasing + font-weight decreasing
FOCUSING:   content-width decreasing + font-size increasing + accent intensity increasing + element count decreasing
RESOLVING:  bg lightness normalizing + padding normalizing + border-weight normalizing + font-weight normalizing
```

The gate doesn't need to classify perfectly. It needs to detect CONTRADICTION: if bg darkens but spacing increases AND borders lighten, no single direction describes the shift. Report this as DISCORDANT.

**PERISCOPE (PA) -- Consider one direction-aware question:**

Auditors shouldn't know the 4 direction names. But they should be able to perceive direction. Proposed enrichment to PA-62:

Current: "Is the result dramatic (3+ shifts) or quiet (1 shift)? Are there BOTH kinds?"

Enriched: "Is the result dramatic (3+ shifts) or quiet (1 shift)? Are there BOTH kinds? When a dramatic transition happens, do ALL the changes feel like they're saying the same thing (all 'going deeper' or all 'opening up'), or do they feel contradictory (some going deeper while others lighten up)?"

This tests direction coherence perceptually without naming the 4 directions.

---

## 6. ANTI-SCALE FORMULA

### What It Is

```
Richness = semantic density x restraint x spatial confidence
```

Zero in ANY factor produces zero richness. This is the GOVERNING PRINCIPLE -- it sits above scales, channels, and coherence. It evaluates whether the WHOLE stack works.

### Current Pipeline State

- **Brief (conventions-brief.md, lines 73-88):** Section 3 (Richness) defines the formula with sub-definitions for density, restraint, and spatial confidence. Each factor has concrete self-tests. STRONG section.
- **Gate Runner:** No gate directly measures the anti-scale formula. Individual gates measure SYMPTOMS of zero-factor failure:
  - Zero density: SC-14 (sub-perceptual prevention) catches invisible CSS = zero density
  - Zero spatial confidence: SC-15 (border presence) catches no structural vocabulary
  - Zero restraint: No gate. There is no way to programmatically detect "everything deployed with no restraint."
- **PA:** PA-64 (restraint as expression) directly tests the restraint factor. PA-60 (design moment density) tests the density factor. PA-66 (negative space variety) tests spatial confidence. These three PA questions ARE the perceptual measurement of the anti-scale formula's three factors.

### WHERE Each Optic Should Place It

**TELESCOPE (Brief) -- Restructure as GOVERNING PRINCIPLE:**

Currently the anti-scale formula is Section 3, peer to multi-coherence (Section 4) and fractal echo (Section 5). But the formula GOVERNS the other sections. It should be repositioned as the opening principle, not a peer section:

**Option A:** Move Section 3 to become Section 1B (after Identity, before Perception). Risk: breaks the bottom-up build order.

**Option B (recommended):** Keep Section 3 where it is but add a forward-reference that connects it to everything below:

> **This formula governs everything that follows.** Multi-coherence (Section 4) is how density manifests at zone boundaries. Fractal echo (Section 5) is how spatial confidence manifests across zoom levels. Restraint is documented in your build log (3+ deliberately absent mechanisms). The formula is not a separate concept -- it is the evaluation of whether the stack as a whole works. If you achieve multi-coherence and fractal echo but the result feels busy, density has exceeded restraint. If it feels hollow, spatial confidence is absent. Tune the factors against each other.

**MICROSCOPE (Gates) -- Add a restraint gate:**

The anti-scale formula has a missing factor in gates: restraint. Proposed:

```
SC-18: Restraint Check (ADVISORY)

Check: No single component type exceeds 35% of all component instances.
Check: Drop-cap (::first-letter) appears in <= 2 sections.
Check: Build log documents >= 3 deliberately absent mechanisms.

ADVISORY: Reports on component concentration and mechanism restraint.
```

This is ADVISORY because restraint is compositional judgment, not mechanical compliance. But it catches the most egregious failure mode: a builder deploying everything in the catalog.

**PERISCOPE (PA) -- Already excellent:**

PA-64 (restraint), PA-60 (density), PA-66 (spatial confidence) already map perfectly to the formula's three factors. No changes needed. The weaver should explicitly reference the anti-scale formula when synthesizing these three questions.

---

## 7. FRACTAL SELF-SIMILARITY

### What It Is

The same pattern direction manifests at ALL 5 zoom levels. If the page organizing principle is "progressive density," then density manifests at Navigation (header sets dense tone), Page (zones compress), Section (elements tighten), Component (internal spacing reduces), and Character (typography densifies).

### Current Pipeline State

- **Brief (conventions-brief.md, lines 126-149):** Section 5 covers fractal echo with scale table, build order, dependency chain, and parametric echo. STRONG. The parametric echo concept (line 144: "Components in dense zones should have tighter internal padding") is particularly well-expressed.
- **Gate Runner (DG-1, lines 561-581):** Checks the fractal echo TABLE (deliverable) for 5 rows, CSS evidence, pattern direction, and consistency. This validates the PLAN. SC-16 (monotonic progression) is the only output-level fractal check, and it's ADVISORY.
- **PA (PA-63):** Tests Component-to-Page scale coherence (2 scales). Does not explicitly test the full 5-scale fractal.

### WHERE Each Optic Should Place It

**TELESCOPE (Brief) -- Add parametric echo emphasis:**

The brief's fractal section is already strong. One addition that would significantly help builders: the PARAMETRIC echo concept (line 144) is a single sentence buried in the section. Promote it to a sub-section with an example:

> **Parametric Echo (How the Fractal VARIES):** The fractal is not copy-paste sameness at every scale. It is the same DIRECTION at different INTENSITIES. In a DEEPENING page:
> - Navigation scale: header padding 80px (generous, setting the stage)
> - Page scale: zone padding 64px (slightly compressed)
> - Section scale: within-zone padding 48px (tighter)
> - Component scale: card padding 24px (compact)
> - Character scale: letter-spacing 0.05em (readable but restrained)
>
> Each scale expresses "density" but at its own magnitude. The RATIO between adjacent scales is the fractal's rhythm.

**MICROSCOPE (Gates) -- SC-17 (proposed above) covers this:**

The proposed SC-17 (Scale Coverage) validates that 3+ scales are perceptible in the output. DG-1 validates that 5 scales are planned. Together they catch both planning gaps and execution gaps.

**PERISCOPE (PA) -- Already addressed in PA-63 enrichment above:**

The enriched PA-63 (adding Navigation scale to the existing Component-to-Page question) extends fractal verification to 3 scales perceptually. For Flagship, the weaver should synthesize PA-63 + DG-1 + SC-17 (if adopted) to produce a scale coverage verdict.

---

## 8. FLOOR vs TARGET Distinction

### What It Is

Thresholds are FLOORS (the minimum below which something is broken). Compositional intelligence is the TARGET (the quality above the floor that makes a page Flagship). Gates measure floors. PA measures targets. A page can pass every gate and still be flat (Middle 4/4 territory). A page that ALSO passes PA-60 through PA-67 at 6+/8 demonstrates the target (Flagship 4/4).

### Current Pipeline State

- **Brief (conventions-brief.md):** Section 2 (Perception) says "these are not rules to comply with. They are the physics of human perception." (line 69). Good framing. Section 9B (Quality Floor) is titled "The Minimum Bar" and says "they are the floor below which a page is UNFINISHED" (line 230). EXPLICIT floor/target distinction.
- **Gate Runner:** Line 8: "Gates raise the FLOOR -- they prevent FLAT (1.5/4) pages from consuming PA auditor time. Gates never judge composition; they filter for it." EXPLICIT. This is the clearest floor/target statement in the pipeline.
- **PA (flagship-pa-questions.md):** Line 1-5: "8 questions detecting compositional depth ABOVE the PA-05 designed threshold. PA-05 4/4 confirms a page is DESIGNED. Tier 5 confirms it is FLAGSHIP." EXPLICIT. The two-score system (PA-05 for floor, Tier 5 for target) IS the floor/target distinction.
- **Orchestrator (SKILL.md):** Section 7 (Success Bar, lines 348-374) defines the two-score verdict matrix. EXPLICIT.

### WHERE Each Optic Should Place It

**TELESCOPE (Brief) -- Already handled:**

The brief frames thresholds as physics, not rules. The quality floor section is correctly labeled. No enrichment needed.

One potential clarification: The brief does NOT explicitly say "passing all thresholds makes you Middle, not Flagship." A builder who hits all thresholds might think they're done. Add one sentence to Section 9B:

> **Meeting every floor in this section produces a COMPOSED page (Middle 4/4). Flagship requires compositional intelligence ABOVE these floors -- multi-coherence that serves a unified metaphor, fractal expression that resonates across scales, and restraint that amplifies richness through strategic absence. The floors prevent failure; they do not ensure excellence.**

**MICROSCOPE (Gates) -- Already handled:**

The gate runner's opening statement (line 8) is explicit. No changes needed.

**PERISCOPE (PA) -- Already handled:**

The two-score system (PA-05 + Tier 5) IS the floor/target measurement. No changes needed.

---

## MASTER PLACEMENT TABLE

| Concept | Brief Section | Brief Form | Gate(s) | Gate Form | PA Question(s) | PA Form | Orchestrator Role |
|---------|--------------|-----------|---------|----------|----------------|---------|-------------------|
| **Stack Progression** | Restructured 3-6 (bottom-up arc) | Vertical dependency narrative | SC-12->SC-09->SC-13 dependency chain | Dependency annotation | PA-63+61+62 + proposed PA-68 | Integrated synthesis | Routes handoff data between stages |
| **6 Channels** | Section 4 (Multi-Coherence) | Channel names + CSS mapping table | SC-13 (count per boundary) | 6-channel measurement | PA-62 (shift count), PA-61 (independence) | Perceptual, unnamed | None (channels are builder+gate vocabulary) |
| **5 Scales** | Section 5 (Fractal Echo) w/ enriched build order | Scale table + build order + parametric echo | DG-1 (plan) + proposed SC-17 (output) | Plan validation + perceptibility check | PA-63 (enriched: 3-scale check) | Zoom-level coherence | None (scales are builder vocabulary) |
| **Multi-Coherence** | Section 4 (binding rule) | >= 3 channels, same direction, example | SC-13 (count) + SC-13B (direction advisory) | Count blocking, direction advisory | PA-62 (count), PA-61 (independence) | Dramatic/quiet + rhythmic independence | Weaver synthesizes PA + gate data |
| **4 Directions** | Section 4 sub-section | CSS property implications per direction | SC-13B (enriched 4-value model) | Direction classification, contradiction detection | PA-62 (enriched: direction coherence check) | "Same thing" vs "contradictory" | None (direction is builder vocabulary) |
| **Anti-Scale Formula** | Section 3 (restructured as governing principle) | Evaluation framework over whole stack | SC-14 (density), SC-15 (confidence), proposed SC-18 (restraint) | Factor-level checks | PA-64 (restraint), PA-60 (density), PA-66 (confidence) | Three separate perceptual questions | Weaver maps PA answers to 3 factors |
| **Fractal Self-Similarity** | Section 5 (w/ parametric echo emphasis) | Pattern direction + intensity variation across scales | DG-1 (plan) + SC-16 (monotonic, advisory) + proposed SC-17 | Plan + progression + coverage | PA-63 (enriched) | Component-Page-Navigation coherence | None |
| **Floor vs Target** | Section 9B + one enrichment sentence | "Floors prevent failure, don't ensure excellence" | Gate runner preamble (line 8) | "Gates filter, never judge" | Two-score system (PA-05 + Tier 5) | Floor = PA-05, Target = Tier 5 | Success bar verdict matrix |

---

## PROPOSED NEW/MODIFIED ARTIFACTS

### New Gates

| ID | Name | Tier | Enforcement | What It Measures |
|----|------|------|-------------|------------------|
| SC-17 | Scale Coverage (Output) | A | Blocking | >= 3 of 5 architectural scales perceptible in rendered output |
| SC-18 | Restraint Check | A | ADVISORY | Component concentration <= 35%, drop-cap <= 2 sections, 3+ absent mechanisms logged |

### Modified Gates

| ID | Modification | Rationale |
|----|-------------|-----------|
| SC-13B | Enrich from 2-value (INTENSIFYING/RELAXING) to 4-value (DEEPENING/OPENING/FOCUSING/RESOLVING) + DISCORDANT detection | Aligns gate model with brief's 4-direction vocabulary |
| DG-1 | Add cross-validation against SC-17 | Plan says 5 scales but only 2 are perceptible = DG-1 should flag |

### New PA Questions

| ID | Text | Auditor | What It Tests |
|----|------|---------|--------------|
| PA-68 | "Do the patterns at component level feel like part of the SAME design language as the patterns at page level? Or do they feel like separate designs cohabiting?" | G (Metaphor+Ideology) | Vertical stack integration |

### Modified PA Questions

| ID | Modification | Rationale |
|----|-------------|-----------|
| PA-63 | Add Navigation scale check: "Then look at the header and footer -- do they establish the same visual vocabulary? At how many zoom levels does the design feel like 'the same family'?" | Expands from 2-scale to 3-scale perceptual check |
| PA-62 | Add direction coherence prompt: "Do ALL the changes feel like they're saying the same thing, or do they feel contradictory?" | Tests semantic direction alignment perceptually |

### Brief Restructuring

| Current Section | Proposed Change | Rationale |
|----------------|----------------|-----------|
| Section 3 (Richness) | Add forward-reference connecting formula to sections below | Makes governing principle relationship explicit |
| Section 4 (Multi-Coherence) | Add channel CSS mapping table + boundary/between distinction | Gives builder per-channel reference + teaches multi-voice concept |
| Section 5 (Fractal Echo) | Promote parametric echo to sub-section with concrete example | Currently a buried single sentence; key concept for Flagship |
| Section 9B (Quality Floor) | Add "floors produce Middle, not Flagship" clarification | Prevents builder from stopping at floor compliance |
| New: Stack Architecture note | Add between Section 2 and Section 3 | Names the vertical dependency that currently exists only implicitly |

### Gate Runner Structural

| Location | Addition | Rationale |
|----------|---------|-----------|
| Lines 93-98 (dependency chain) | Add "Stack Architecture" annotation block naming the compositional intelligence stack | Future editors need to understand WHY gates are ordered this way |

### Weaver Process

| Addition | Location | Rationale |
|---------|---------|-----------|
| Multi-coherence synthesis sub-section | Weaver spawn prompt (SKILL.md lines 253-294) | Weaver should synthesize PA-61 + PA-62 + SC-13B data explicitly |
| Anti-scale factor mapping | Weaver synthesis section | Weaver should map PA-64/60/66 to the formula's 3 factors |
| Scale coverage synthesis | Weaver synthesis section | Weaver should synthesize PA-63 + DG-1 + SC-17 for scale verdict |

---

## DESIGN PRINCIPLES APPLIED

1. **Each concept appears in all 3 optics** but in the form appropriate to that optic. The brief teaches, the gate measures, the PA perceives. No optic does another's job.

2. **Granularity decreases from brief to gate to PA.** The brief gives the full vocabulary (6 channels, 4 directions, 5 scales). Gates reduce to binary thresholds (>= 3, avg >= 4). PA reduces to "do you see this?"

3. **No concept lives in only one optic.** Every concept has at least a presence (even if implicit) in all three stages. The anti-scale formula has no direct gate but has factor-level gates. Direction coherence has no blocking gate but has an advisory gate.

4. **Fresh-eyes are protected.** PA auditors never receive channel names, direction names, or scale names. They describe what they see. The WEAVER (who is NOT fresh-eyes) maps perceptual observations to the compositional vocabulary.

5. **The stack is bottom-up.** Scales -> Channels -> Multi-Coherence -> Anti-Scale. Build order matches this. Gate dependency matches this. The brief should match this too.
