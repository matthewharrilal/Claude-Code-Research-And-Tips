# 23 -- Stack Integration: How Scales + Channels + Multi-Coherence + Anti-Scale Work as a SYSTEM

**Author:** stack-integrator (Opus 4.6)
**Date:** 2026-02-19
**Task:** #38
**Sources:** All 11 existing reports in ephemeral/flagship-44-recipe/ (01-DEFINITION through 15-ALWAYS-FLAGSHIP-SIMPLIFICATION), conventions brief draft (10), CD-006 forensics (03), compositional intelligence conditions (06), memory/scale-research.md (not found -- extracted from MEMORY.md and embedded knowledge in reports 01, 03, 06)

---

## EXECUTIVE SUMMARY

The compositional intelligence stack is: **Scales (vertical depth) -> Channels (horizontal breadth) -> Multi-Coherence (simultaneous alignment) -> Anti-Scale Model (governing principle)**. Each layer builds on the previous. But this is NOT a sequential build order. The builder does not "complete scales, then do channels, then do multi-coherence." Instead, the stack describes four LENSES on the same CSS decisions. Every single CSS property participates in all four layers simultaneously.

**The integration insight:** The stack is not a pipeline -- it is a prism. A single CSS decision (e.g., `background: #F0EBE3` at a zone boundary) is simultaneously: a SCALE decision (which zoom level?), a CHANNEL decision (chromatic shift), a MULTI-COHERENCE decision (does it align with the other channels shifting here?), and an ANTI-SCALE decision (does it serve density, restraint, or spatial confidence?). The builder doesn't build four layers -- the builder builds ONE page, and the four layers are four ways of EVALUATING whether any given CSS choice is working.

**Key finding:** The stack has a DEPENDENCY CHAIN for understanding but a SIMULTANEOUS APPLICATION for building. A builder cannot plan multi-coherence without understanding channels. A builder cannot plan channels without understanding scales. But when writing CSS, ALL FOUR operate at once. The conventions brief must teach the stack as a sequence and invoke it as a simultaneity.

---

## 1. THE DEPENDENCY CHAIN (Understanding Order)

### What Each Layer Requires From the Previous

```
ANTI-SCALE MODEL (L5)
  "Is the overall composition rich?"
  Requires: L4 (multi-coherence produces density),
            L3 (channels produce breadth),
            L2 (scales produce depth)
  Cannot evaluate without all three below.
         |
MULTI-COHERENCE (L4)
  "Do 3+ channels shift together at each boundary?"
  Requires: L3 (must know what channels ARE to count them)
  Cannot build without channel vocabulary.
         |
CHANNELS (L3)
  "Which CSS property groups encode semantic direction?"
  Requires: L2 (channels shift at boundaries defined by scales)
  Cannot deploy without knowing where the boundaries are.
         |
SCALES (L2)
  "At what zoom levels does the pattern appear?"
  Requires: L1 (perception thresholds -- must be VISIBLE)
  Cannot verify without perceptible CSS values.
         |
PERCEPTION THRESHOLDS (L1)
  ">= 15 RGB, >= 2px font-size, etc."
  No dependency. This is the absolute floor.
```

### The Dependency Is Real, Not Nominal

**You CANNOT have multi-coherence without scale coverage.** Multi-coherence means 3+ channels shifting at each boundary. If you only have 2 scales (page + component), you have at most 1-2 MEANINGFUL boundaries where multi-coherence could occur (the header and maybe one section break). CD-006 had 11 boundaries across 5 scales -- THAT is enough structural surface area for multi-coherence to manifest consistently.

**You CANNOT have channel breadth without fractal depth.** Channels shift AT BOUNDARIES. Boundaries exist BETWEEN scales. If your page has only page-scale boundaries (sections), the chromatic, typographic, spatial, structural channels only shift at section breaks. With 5 scales, channels shift at navigation, page, section, component, AND character levels -- creating ~30+ opportunities for multi-coherence instead of ~5.

**You CANNOT evaluate the anti-scale model without multi-coherence data.** "Richness = semantic density x restraint x spatial confidence" requires OBSERVING that channels are coordinated (density), that some mechanisms are withheld (restraint), and that space is confidently deployed (spatial confidence). Without L2-L4 operating, there is nothing to evaluate.

### Evidence From Failures

**Flagship 1.5/4:** Had 14 mechanisms (decent L3 channel vocabulary) but only 2 scales (L2 absent at navigation/section/character). Result: channels existed but had nowhere to shift. Multi-coherence (L4) was 0 instances. Anti-scale evaluation (L5) showed zero density, zero spatial confidence.

**Middle 4/4:** Had 2 scales, ~12 mechanisms across ~2 channels per boundary. Result: L2 minimal but present, L3 adequate but limited, L4 emergent (3 reinforcing pairs from content overlap), L5 showed density and spatial confidence but no restraint (no deliberate exclusions). Score: 4/4 but "B+ professional" -- the stack partially operating.

**CD-006 39/40:** Had 5 scales, 41 mechanism instances across 6 channels, ~5 multi-coherence instances, strong anti-scale (40% of available mechanisms deliberately withheld). Result: the stack operating at near-capacity. Still labeled Ceiling, not Flagship, because multi-coherence was LOCAL (concentrated in S1 and bookends) not GLOBAL (unified metaphor driving all boundaries).

---

## 2. THE BUILD ORDER (Sequence vs Simultaneity)

### The Paradox

The dependency chain says: understand scales first, then channels, then multi-coherence, then anti-scale. But CSS is written BOUNDARY BY BOUNDARY, not LAYER BY LAYER. When the builder writes `background: #F0EBE3` at the S2->S3 boundary, it is simultaneously:

- **Scale:** This is a page-scale boundary (between sections)
- **Channel:** This is a chromatic channel shift
- **Multi-coherence:** Is this shift aligned with the typographic and spatial shifts happening here?
- **Anti-scale:** Does this shift create density without sacrificing restraint?

The builder cannot write all backgrounds first (channel-by-channel), then all borders (structural channel), then evaluate multi-coherence. That was the Flagship experiment's exact architecture (Phase 3 = backgrounds, Phase 4 = borders, Phase 5 = typography) and it FAILED because channel-by-channel construction precludes boundary-level multi-coherence.

### The Resolution: Plan Sequentially, Build Simultaneously

**The conventions brief resolves this through the self-authored TRANSITION TABLE and FRACTAL ECHO TABLE.** These are PLANNING artifacts that the builder produces BEFORE writing CSS. They force the builder to think through all four stack layers AT EVERY BOUNDARY before writing a single line of CSS.

**The Transition Table IS the stack in tabular form:**

```
| Boundary | bg (L3:chromatic) | font-size (L3:typographic) | padding (L3:spatial) | border (L3:structural) | direction (L4:coherence) | restraint note (L5) |
|----------|-------------------|---------------------------|---------------------|----------------------|--------------------------|---------------------|
| ->Z1     | #FEF9F5           | 18px                      | 64px                | none                 | n/a                      | sparse entry        |
| Z1->Z2   | #F0EBE3 (-18 RGB) | 16px (-2px)               | 48px (-16px)        | 3px appears           | DEEPENING (4 channels)   | density increases   |
| Z2->Z3   | #FAF5ED (+10 RGB) | 15px (-1px)               | 32px (-16px)        | 1px separator         | COMPRESSING (3 channels) | maximum density     |
```

Each ROW is a boundary. Each COLUMN is a channel. The "direction" column IS the multi-coherence check (do all columns point the same way?). The "restraint note" IS the anti-scale check. The row structure FORCES simultaneous thinking because all channels at one boundary are visible on one line.

**The Fractal Echo Table IS the scale check:**

```
| Scale      | How the pattern expresses        | Primary CSS             |
|------------|----------------------------------|------------------------|
| Navigation | header heavy -> nav light         | border-bottom 4px, sparse layout |
| Page       | zones darken and compress downward | bg gradient, padding arc |
| Section    | heading heavy -> body compressed   | h2 weight -> p size    |
| Component  | label sparse -> body dense         | label 0.75rem -> body 1rem |
| Character  | heading tracked -> body tight      | letter-spacing 0.03em -> 0em |
```

Each ROW is a scale. The "How" column forces the builder to articulate the SAME PATTERN at each scale. The "Primary CSS" column IS the channel specification for that scale. Pattern direction must be CONSISTENT across all rows (fractal self-similarity).

### The Build Order That Works

**Phase A: Understand content.** Read content markdown. Identify natural zones (where topic/mode/intensity shifts). This defines the PAGE-SCALE boundaries. (~10-20 min)

**Phase B: Plan the stack.** Write conviction statement (direction), transition table (channels + multi-coherence at each boundary), and fractal echo table (pattern at each scale). This is where ALL FOUR STACK LAYERS are resolved -- on paper, before CSS. (~10-20 min)

**Phase C: Build boundary-by-boundary.** At each zone, write ALL channels simultaneously. Not "all backgrounds first" but "Zone 1 complete (bg + type + spacing + borders), then Zone 2 complete, etc." At each boundary, verify against the transition table: >= 3 channels shifting in the named direction. (~60-120 min)

**Phase D: Verify the stack.** Run the 5 self-check questions + cascade value table. The self-check IS the stack verification: Q1 (squint = page scale), Q2 (voids = density), Q3 (second-half = distribution), Q4 (channel count = multi-coherence), Q5 (spatial skeleton = spatial confidence). (~10-15 min)

---

## 3. HOW THE FULL STACK GETS ENCODED INTO A ~230-LINE CONVENTIONS BRIEF

### Is the Brief Sufficient?

**Yes -- but only because the stack is distributed across sections, not concentrated in one.**

The conventions brief (10-CONVENTIONS-BRIEF-DRAFT.md) encodes the stack as follows:

| Stack Layer | Brief Section | Lines | How Encoded |
|-------------|--------------|-------|-------------|
| L1: Perception Thresholds | Section 2 (Thresholds) | ~20 | YAML block: `background_delta: ">= 15 RGB"`, etc. |
| L2: Scales | Section 5 (Fractal Echo) | ~20 | 5 scale names + blank echo table + consistency rule |
| L3: Channels | Section 4 (Multi-Coherence) | ~25 | 6 channels named + direction examples + anti-pattern |
| L4: Multi-Coherence | Section 4 (Multi-Coherence) | (same ~25) | The binding rule: >= 3 shift at every boundary, same direction |
| L5: Anti-Scale | Section 8 (Creative Authority) + implicit | ~5 + ~20 | Formula + restraint cues in authority section |
| L5: Verification | Section 7 (Self-Check) | ~30 | 5 questions that verify the stack post-build |
| Stack as Process | Section 6 (Memory Protocol) | ~30 | Boundary-by-boundary protocol that invokes all layers |
| Stack as Planning | Process section | ~15 | Phase B mandates transition table + fractal echo table |

**Total stack encoding: ~165 lines out of ~230 (72% of the brief IS the stack).**

### What the Brief Gets Right

1. **L1 (Thresholds) as YAML** -- machine-parseable, unambiguous, the builder can check values against it.
2. **L3+L4 (Channels + Multi-Coherence) combined** -- this is correct because channels ARE multi-coherence ingredients. Separating them would be artificial.
3. **L5 (Anti-Scale) as prose** -- the formula is evaluative, not procedural. YAML would be wrong.
4. **The transition table mandate** -- forces the builder to resolve L2-L4 simultaneously during planning.
5. **The memory protocol** -- forces L4 re-verification at EVERY boundary during building.

### What the Brief Gets Wrong (or Insufficiently)

1. **L2 (Scales) is DESCRIPTIVE but not OPERATIONAL.** Section 5 names the 5 scales and requires a fractal echo table, but does not explain HOW each scale manifests in CSS. The builder knows it needs patterns at 5 scales but may not know what "navigation scale CSS" looks like. **Fix:** Add 1 concrete CSS example per scale (5 lines total).

2. **L5 (Anti-Scale) is BURIED.** The formula appears once in Section 8 (Creative Authority) as "Richness is semantic density multiplied by restraint multiplied by spatial confidence." But it needs to be the GOVERNING FRAME, not a closing thought. The builder should encounter it EARLY (Section 3 position) and it should shape how they read everything after it.

   **Update:** Looking at the brief draft again, Section 3 in the CONVENTIONS BRIEF DRAFT is intentionally left as a placeholder for the anti-scale model -- but the draft as delivered does not have a dedicated Section 3. The brief jumps from Section 2 (Thresholds) to Section 3 (Transition Grammar). **The anti-scale model is DISPLACED by transition grammar.** This is a structural error. The anti-scale model should be Section 3 (the evaluative frame), with transition grammar folded into Section 4 (multi-coherence) or Section 6 (memory protocol).

3. **The transition table template lacks a "restraint" column.** Current template: boundary, bg delta, font-size, font-weight, letter-spacing, border, channels. Missing: a column that asks "what am I NOT deploying here and why?" This is how L5 restraint gets operationalized per-boundary.

4. **No WORKED EXAMPLE of the full stack at one boundary.** The brief shows what multi-coherence looks like at a single boundary (Section 4 example), but does not show how that same boundary also satisfies scale coverage, channel breadth, AND anti-scale restraint simultaneously. **Fix:** One 10-line worked example showing a single boundary through all 4 lenses.

---

## 4. DOES THE STACK NEED ITS OWN DEDICATED ARTIFACT?

### The Case For: YES

- The conventions brief is ~230 lines. 72% is stack encoding. But it is INTERLEAVED with soul constraints, deliverables, and process. A builder skimming for "how do I make this boundary work" must navigate 5 sections to find the relevant stack information.
- The transition table and fractal echo table are PLANNING artifacts that reference stack concepts. If those concepts are spread across 5 brief sections, the builder must flip back and forth while filling out the tables.
- CD-006's builder had NO stack document but had 5-scale awareness from accumulated pipeline context (12+ prior explorations). The Flagship builder had zero stack awareness. The gap between them suggests explicit stack teaching is needed.

### The Case Against: NO (Separate Artifact)

- Adding a 7th file to the builder's input increases effective instruction volume past the ~315-line sweet spot (Report 07, Section 5.2). A dedicated stack artifact would be 50-80 lines and push the builder to ~365-395 lines.
- The stack is not a separate SUBJECT -- it is HOW the existing rules work together. Separating it creates a "dual instruction" problem where the builder reads the brief's rules AND the stack's integration separately, potentially contradicting.
- The conventions brief ALREADY encodes the stack. The problem is organizational (spread across sections), not informational (missing content).

### THE VERDICT: No Separate Artifact. Fix the Brief's Organization.

The stack should NOT be a separate file. Instead:

1. **Add a 5-line "Stack Overview" preamble to the brief** (right after "Read this brief once, fully. Then build."):
   ```
   Everything in this brief connects to a compositional intelligence stack:
   L1: Perception Thresholds (Section 2) -- can the reader SEE your decisions?
   L2: Fractal Scales (Section 5) -- does the pattern appear at all 5 zoom levels?
   L3/L4: Channels + Multi-Coherence (Section 4) -- do 3+ properties shift together?
   L5: Anti-Scale Model (Section 3) -- is richness = density x restraint x confidence?
   Each section teaches one layer. The transition table combines them all.
   ```

2. **Reorder Section 3 to be the Anti-Scale Model** (currently displaced by Transition Grammar).

3. **Add the worked example** to Section 4 (Multi-Coherence): one boundary analyzed through all 4 lenses in 10 lines.

4. **Add a "restraint note" column** to the transition table template.

This adds ~20 lines to the brief (~250 total) while making the stack integration visible WITHOUT a separate artifact.

---

## 5. THE STACK CHECKLIST (Mid-Build Self-Assessment)

What would a builder fill out at the midpoint of a build to assess stack health?

### STACK HEALTH CHECK (Fill at ~50% build completion)

```
SCALE COVERAGE
  Navigation scale: [pattern present? Y/N] [CSS evidence: ________]
  Page scale:       [pattern present? Y/N] [CSS evidence: ________]
  Section scale:    [pattern present? Y/N] [CSS evidence: ________]
  Component scale:  [pattern present? Y/N] [CSS evidence: ________]
  Character scale:  [pattern present? Y/N] [CSS evidence: ________]
  Score: __/5 (target: 5/5)

CHANNEL BREADTH
  Chromatic:   [deployed? Y/N] [distinct values: __]
  Typographic: [deployed? Y/N] [distinct values: __]
  Spatial:     [deployed? Y/N] [distinct values: __]
  Structural:  [deployed? Y/N] [distinct values: __]
  Behavioral:  [deployed? Y/N] [distinct values: __]
  Material:    [deployed? Y/N] [distinct values: __]
  Score: __/6 active channels (target: >= 4 active)

MULTI-COHERENCE
  Boundaries analyzed so far: __
  Boundaries with >= 3 channels shifting: __
  Boundaries with all shifts in same direction: __
  Score: __% coherent boundaries (target: 100%)

ANTI-SCALE
  Semantic density: [HIGH / MEDIUM / LOW]
    Evidence: [mechanisms per zone: __, component variety: __]
  Restraint: [HIGH / MEDIUM / LOW]
    Evidence: [mechanisms deliberately NOT deployed: __ names]
    Evidence: [frequency-limited mechanisms: __ names (how many uses)]
  Spatial confidence: [HIGH / MEDIUM / LOW]
    Evidence: [distinct grid layouts: __, bold borders (3-4px): Y/N,
              width variation: Y/N]
  Anti-Scale Score: Density [H/M/L] x Restraint [H/M/L] x Confidence [H/M/L]
    (target: all HIGH or at least 2 HIGH + 1 MEDIUM)

STACK HEALTH VERDICT:
  [GREEN: all targets met, continue building]
  [YELLOW: 1-2 targets missed, address before continuing]
  [RED: 3+ targets missed, STOP and restructure]
```

### When To Fill This Out

1. **At the midpoint** of the build (~Section 6 of 12, or ~500 CSS lines). This is ALREADY mandated by the Memory Protocol (conventions brief Section 6). The stack checklist integrates into that existing pause.

2. **After completing the transition table** (Phase B). The checklist can be pre-filled from the table's planned values to verify that the PLAN covers all stack layers before writing CSS.

3. **During Phase D self-check.** The 5 self-check questions map directly to stack layers:
   - Q1 (Squint test) = L2 Page scale
   - Q2 (Scroll test) = L5 Density
   - Q3 (Second-half test) = L5 Distribution
   - Q4 (Channel count) = L3/L4 Multi-coherence
   - Q5 (Spatial skeleton) = L5 Spatial confidence

### Where This Goes

**NOT in the conventions brief** -- it would add 30+ lines. Instead, the builder self-generates this as part of Phase B planning and the midpoint memory protocol pause. The brief MANDATES the pause; the builder fills in whatever structured self-assessment it needs. If we prescribe the exact format, we cross from convention into recipe territory (Anti-Condition D3: Recipe as Cage).

**Better approach:** The conventions brief's memory protocol section includes ONE line:
```
At midpoint, assess: scale coverage (__/5), channel breadth (__/6),
boundary coherence (__% >= 3), density/restraint/confidence (H/M/L each).
```

This is ~2 lines that give the builder a TEMPLATE for structured self-assessment without prescribing the exact format. The builder's native intelligence fills in the details.

---

## 6. HOW VERIFICATION CHECKS THE STACK

### The Problem: Three Instruments, No Integration

The conventions brief, programmatic gates, and perceptual audit each verify PARTS of the stack but nothing verifies the stack AS AN INTEGRATED SYSTEM.

| Stack Layer | What Checks It | Instrument | Coverage |
|-------------|---------------|-----------|----------|
| L1: Perception | SC-09, SC-10, SC-11, SC-14 | Programmatic gates | ~95% |
| L2: Scales | DG-1 (fractal echo table) + PA-63 | Deliverable gate + PA | ~70% |
| L3: Channels | SC-13 (channel count) | Programmatic gate | ~35% |
| L4: Multi-Coherence | SC-13 + SC-13B + PA-61, PA-62, PA-65 | Gate + PA Tier 5 | ~60% |
| L5: Anti-Scale | PA-64 (restraint) + PA-60 (density) + PA-66 (confidence) | PA Tier 5 only | ~40% |

### The Gap: Cross-Layer Integration

**No instrument checks whether the layers COMPOSE.** Consider:

- A page could pass L1 (all values perceptible), L2 (5 scales present), L3 (6 channels active), L4 (3+ channels shift at boundaries) but STILL fail because the PATTERN at the navigation scale contradicts the pattern at the page scale (L2 fractal incoherence not caught by SC-13 which checks boundaries, not scale-to-scale consistency).

- A page could pass L4 (multi-coherence at boundaries) but fail L5 (anti-scale) because ALL boundaries are maximally rich (no restraint) creating monotone complexity.

- A page could pass L5 (density HIGH, restraint HIGH, confidence HIGH) at a GLOBAL level but have LOCAL failures where one zone has no active channels and the neighboring zone has 6 -- the GLOBAL averages hide LOCAL deficits.

### The Cross-Layer Verification Protocol

**Step 1: Cascade Value Table Cross-Reference (Programmatic, ~30 seconds)**

The builder produces a cascade value table (_cascade-value-table.md) with computed CSS at every boundary. The gate runner cross-validates:
- L1 check: All delta values exceed perception thresholds
- L3 check: Count active channels per boundary
- L4 check: >= 3 channels at each boundary
- NEW L2 check: Extract CSS evidence at each of the 5 scales from the fractal echo table. Verify each scale's CSS ACTUALLY EXISTS in the cascade table.

**Step 2: Fractal Consistency Check (Programmatic, ~15 seconds)**

From the fractal echo table, extract pattern_direction at each scale. All 5 must be CONSISTENT (not identical -- "deepening" at page scale and "compressing" at component scale can be consistent because both describe increasing density). The check is: can all 5 directions be described by a single coherence arc?

This is partially automatable: extract the direction words, flag contradictions (e.g., "expanding" at page scale + "compressing" at component scale -- these may be intentional counterpoint or may be incoherent). Advisory, not blocking.

**Step 3: PA Tier 5 as Stack Integration Assessment (Perceptual, ~25 min)**

The 8 Tier 5 questions (PA-60 through PA-67, from Report 08) collectively verify the stack:

| Question | Stack Layer Tested |
|----------|-------------------|
| PA-60 (design moments) | L5 density + L4 multi-coherence applied |
| PA-61 (multi-voice) | L3 channel independence |
| PA-62 (transition variation) | L4 multi-coherence dynamic range |
| PA-63 (fractal zoom) | L2 scale coverage |
| PA-64 (restraint) | L5 restraint as expression |
| PA-65 (music analogy) | L4/L5 overall integration |
| PA-66 (negative space) | L5 spatial confidence |
| PA-67 (novelty) | Emergent from L2-L5 operating together |

**PA-65 (the music analogy) IS the stack integration question.** "Would this be a single instrument, a choir in unison, or an ensemble?" An ensemble -- different parts, coordinated but independent -- is what the full stack operating together produces. A choir in unison (all channels move identically everywhere) is L3+L4 without L5 restraint. A single instrument (one channel dominant) is L3 without L4 multi-coherence.

**Step 4: Weaver's Stack Integration Verdict (Synthesis, ~5 min)**

The PA weaver synthesizes gate data + Tier 5 responses into a STACK VERDICT:

```
STACK ASSESSMENT:
  L1 (Perception): [PASS/FAIL -- from gates]
  L2 (Scales):     [__/5 -- from DG-1 + PA-63]
  L3 (Channels):   [__/6 active -- from SC-13 + PA-61]
  L4 (Coherence):  [__% boundaries >= 3 -- from SC-13 + PA-62]
  L5 (Anti-Scale): [D:H/M/L, R:H/M/L, C:H/M/L -- from PA-60,64,66]

  Integration: [ENSEMBLE / CHOIR / SOLO / BROKEN]
    ENSEMBLE: all layers operating, channels independent but coordinated
    CHOIR: channels move together but no restraint variation
    SOLO: one channel dominant, others absent or passive
    BROKEN: layers contradicting each other

  Verdict: [FLAGSHIP / CEILING / MIDDLE / FLOOR]
```

This replaces the current single-dimension PA-05 verdict with a MULTI-LAYER assessment that maps directly to the stack.

---

## 7. WORKED EXAMPLE: ONE BOUNDARY THROUGH ALL FOUR LENSES

**Boundary: Zone 1 (Orientation) -> Zone 2 (Deep Analysis) in a research synthesis page.**

### L1 (Perception Thresholds): Is the shift VISIBLE?

```
Background:     #FEF9F5 -> #F0EBE3 = delta 14R, 4G, 18B = max 18 RGB  >= 15 PASS
Font-size:      18px -> 16px = delta 2px                                >= 2px PASS
Letter-spacing: 0.04em -> 0.02em = delta 0.02em                        >= 0.02em PASS (barely)
Padding:        64px -> 48px = delta 16px                               >= 16px PASS
Border:         none -> 3px solid #5C4B3A                               >= 3px structural PASS
Stacked gap:    margin-bottom 32px + margin-top 16px + padding-top 48px = 96px total <= 108px PASS
```

All 6 perceptible. L1 PASS.

### L2 (Scales): At what zoom level does this boundary operate?

This is a PAGE-SCALE boundary (between major sections). It should echo the same pattern as:
- **Navigation scale:** header border-bottom is 4px (heavy -> body lighter) -- DEEPENING
- **Section scale:** within Zone 2, heading h2 is 1.625rem -> body is 1rem -> closing callout is 0.875rem -- COMPRESSING
- **Component scale:** callout label 0.75rem uppercase -> callout body 1rem -> each component mirrors sparse-to-dense
- **Character scale:** heading letter-spacing 0.04em -> body 0em -> code tighter

Pattern at ALL 5 scales: something HEAVIER/SPARSER transitions to something DENSER/TIGHTER. The Z1->Z2 boundary (bg darkens, font shrinks, spacing compresses, border appears) IS the deepening pattern at page scale. Consistent.

L2 PASS at this boundary (pattern direction matches all 5 scales).

### L3 (Channels): Which CSS property groups shift?

| Channel | Before (Z1) | After (Z2) | Shift? |
|---------|-------------|------------|--------|
| Chromatic | #FEF9F5 | #F0EBE3 | YES (18 RGB) |
| Typographic | 18px/1.7 | 16px/1.55 | YES (2px + line-height) |
| Spatial | 64px padding | 48px padding | YES (16px compression) |
| Structural | no border | 3px solid #5C4B3A | YES (border appears) |
| Behavioral | no special hover | hover transitions appear | YES |
| Material | cream paper surface | breathing gauze surface | MARGINAL (surface subtly shifts) |

Active channels: 5 (possibly 6 with material). L3 PASS.

### L4 (Multi-Coherence): Do the shifts point the same direction?

The semantic direction is DEEPENING:
- Chromatic: bg DARKENS (deeper)
- Typographic: font SHRINKS, line-height TIGHTENS (denser)
- Spatial: padding COMPRESSES (tighter)
- Structural: border APPEARS (heavier)
- Behavioral: interactions INCREASE (more active)

ALL 5 shifts point toward "deeper/denser/tighter/heavier." Zero contradictions. The reader should feel "we are entering a more intensive zone" without analyzing any single property. L4 PASS.

### L5 (Anti-Scale Model): Does this serve the governing principle?

```
Richness = semantic density x restraint x spatial confidence
```

**Semantic density at this boundary:** 5 channels shift simultaneously. Each shift carries semantic weight (deeper = more analytical content). Density: HIGH.

**Restraint at this boundary:** Material channel is MARGINAL -- the surface barely shifts. This is restraint in action: the builder CHOSE not to make the surface shift dramatic (e.g., did not use a dark slab here). The restraint creates headroom for the NEXT boundary (Z2->Z3) to use surface shift dramatically. Restraint: PRESENT.

**Spatial confidence:** The 3px border APPEARS from nothing. This is a bold move. The padding compresses from 64px to 48px -- a substantial 25% reduction. These are not timid adjustments -- the builder is making VISIBLE, STRUCTURAL commitments. Confidence: HIGH.

L5 verdict: density HIGH x restraint PRESENT x confidence HIGH = RICH boundary. PASS.

### Summary: One Boundary, Four Lenses, One Assessment

```
Boundary Z1->Z2: DEEPENING
  L1: All 6 deltas exceed perception thresholds           PASS
  L2: Direction matches pattern at all 5 fractal scales   PASS
  L3: 5/6 channels active (above 3-channel minimum)       PASS
  L4: All 5 active channels point DEEPENING               PASS
  L5: High density, present restraint, high confidence     PASS
```

This is what Flagship composition looks like at a SINGLE boundary. Every boundary on the page should pass all 4 lenses (with appropriate variation -- not every boundary needs 5 channels; smooth transitions can have 2-3 deliberately).

---

## 8. THE SYNTHESIS: How This Becomes Actionable

### For the Conventions Brief

The brief needs 4 changes to properly encode the stack as an integrated system:

1. **Add 5-line Stack Overview preamble** (before Section 1) -- teaches the builder that ALL sections connect through the stack.

2. **Reposition Section 3 as Anti-Scale Model** -- currently Section 3 is Transition Grammar. Move Transition Grammar into Section 4 (Multi-Coherence) as the operational mechanism for implementing multi-coherence at boundaries. Dedicate Section 3 to the anti-scale formula + 3 operational proxies (density check, restraint check, confidence check).

3. **Add restraint column to transition table template** -- One extra column: "What am I NOT deploying here?" This operationalizes L5 restraint per-boundary.

4. **Add 1 worked example** (the one from Section 7 above, condensed to 10 lines) showing one boundary through all 4 lenses. Place in Section 4 after the current multi-coherence example.

### For the Build Process

The stack should NOT change the 4-phase process (Understand, Plan, Build, Verify). But it should be visible at each phase:

- **Phase A (Understand):** The builder identifies natural zone boundaries. These will become the SURFACE AREA for multi-coherence. More natural boundaries = more opportunity for the stack to manifest.

- **Phase B (Plan):** The transition table and fractal echo table are WHERE the stack gets resolved. The transition table handles L3+L4 (channels at boundaries). The fractal echo table handles L2 (pattern at all scales). The conviction statement names the L4 semantic direction and L5 governing principle.

- **Phase C (Build):** At each boundary, the builder writes CSS for ALL channels simultaneously, verifying against its transition table row. The memory protocol triggers L4 re-verification at every boundary.

- **Phase D (Verify):** The self-check questions map to stack layers. The cascade value table provides L1 and L3 data. PA provides L4 and L5 judgment.

### For Verification

The stack needs ONE new verification instrument: the **Weaver Stack Verdict** (described in Section 6). This produces a 4-layer assessment (L2 score, L3 score, L4 score, L5 assessment) and an integration classification (ENSEMBLE/CHOIR/SOLO/BROKEN). This replaces the single PA-05 number with a DIMENSIONAL assessment that maps directly to what makes Flagship different from Middle.

---

## 9. THE BOTTOM LINE

### One Paragraph

The compositional intelligence stack (scales -> channels -> multi-coherence -> anti-scale) is a DEPENDENCY CHAIN for understanding and a SIMULTANEOUS APPLICATION for building. The builder learns it layer by layer (L1 thresholds before L2 scales before L3 channels before L4 coherence before L5 anti-scale) but deploys it BOUNDARY BY BOUNDARY (all layers at once per boundary). The self-authored transition table is the primary integration artifact: each row is a boundary, each column is a channel, the direction column checks multi-coherence, and the restraint column checks anti-scale. The conventions brief does NOT need a separate stack document -- it needs 4 minor changes (preamble, anti-scale repositioning, restraint column, worked example) to make the integration visible. Verification needs a Weaver Stack Verdict that assesses all 4 layers + their integration, replacing the single-dimension PA-05 score with a multi-dimensional stack assessment.

### Five Key Findings

1. **The stack is a PRISM, not a pipeline.** Every CSS decision participates in all 4 layers simultaneously. The builder does not "complete scales, then do channels." The transition table forces simultaneous resolution.

2. **The dependency chain is REAL.** You cannot have multi-coherence without scale coverage (not enough boundaries). You cannot have channel breadth without fractal depth (nowhere for channels to shift). You cannot evaluate anti-scale without multi-coherence data (nothing to evaluate).

3. **The brief encodes 72% of the stack already.** The problem is organizational (spread across 5+ sections) not informational (missing content). Four targeted changes (+20 lines) make the integration explicit.

4. **PA-65 (music analogy) IS the stack integration question.** "Ensemble with different parts" = full stack operating. "Choir in unison" = channels without restraint. "Solo instrument" = channels without multi-coherence. This single question is the most efficient probe for stack health.

5. **The stack has NEVER been verified as an integrated system.** Current verification checks layers independently (gates for L1/L3, deliverables for L2, PA for L4/L5). The Weaver Stack Verdict is the missing integrator.

---

**END OF STACK INTEGRATION REPORT**

**Statistics:**
- Reports read: 11 (all existing in ephemeral/flagship-44-recipe/)
- Stack layers analyzed: 5 (L1 perception + L2 scales + L3 channels + L4 multi-coherence + L5 anti-scale)
- Questions answered: 6 (build progression, dependency chain, brief encoding, separate artifact, mid-build checklist, verification integration)
- Conventions brief changes proposed: 4 (preamble, anti-scale repositioning, restraint column, worked example)
- New verification instrument proposed: 1 (Weaver Stack Verdict with ENSEMBLE/CHOIR/SOLO/BROKEN classification)
- Cross-references to other team deliverables: Report 01 (14 dimensions), Report 03 (CD-006 41 mechanisms), Report 06 (5 conditions), Report 08 (Tier 5 PA questions), Report 10 (conventions brief)
