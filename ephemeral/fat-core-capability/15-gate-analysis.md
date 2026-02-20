# 15-Gate Verification Shell: Compositional Coverage Analysis

**Author:** gate-analyst (Opus)
**Date:** 2026-02-19
**Task:** Analyze what the 15 programmatic gates catch vs miss compositionally

---

## The Core Problem

The Flagship PASSED all 12 programmatic gates (the predecessor set) but scored PA-05 = 1.5/4 (FLAT). PV2 adds 3 new gates (SC-13/14/15) to address specific Flagship failures. This report asks: even with 15 gates, what compositional properties CAN be gated vs what CANNOT?

---

## Gate-by-Gate Compositional Coverage

### Category 1: Soul Gates (SC-01 through SC-05) -- ZERO Compositional Coverage

| Gate | What It Checks | Compositional? | Why Not |
|------|---------------|----------------|---------|
| SC-01 | Container width 940-960px | NO | Identity constraint, not composition |
| SC-02 | border-radius: 0, box-shadow: none | NO | Identity constraint |
| SC-03 | Font trinity (2+ families) | NO | Vocabulary presence, not deployment |
| SC-04 | Warm palette (R >= G >= B) | NO | Palette compliance, not chromatic arcs |
| SC-05 | No pure black/white | NO | Palette compliance |

**Assessment:** These gates enforce the design system's SOUL -- the non-negotiable identity constraints. They prevent a page from being "not KortAI." They say nothing about whether a page is DESIGNED. A completely flat, monochromatic, single-font-size page can pass all 5 soul gates.

**Compositional intelligence layer:** L0 (below even perception thresholds). Identity, not composition.

---

### Category 2: Structure Gates (SC-06, SC-07, SC-08, SC-12) -- ZERO Compositional Coverage

| Gate | What It Checks | Compositional? | Why Not |
|------|---------------|----------------|---------|
| SC-06 | ARIA landmarks >= 3 | NO | Accessibility markup, not visual composition |
| SC-07 | Skip link present | NO | Accessibility requirement |
| SC-08 | Component library classes >= 3 | NO | Presence of class names, not compositional deployment |
| SC-12 | Zone count 2-5 | BARELY | Ensures structural divisions exist, but not their purpose |

**Assessment:** These gates enforce HTML structure: semantic markup, accessibility features, and basic zone architecture. SC-12 is the closest to compositional relevance -- having 2-5 zones is a PREREQUISITE for multi-scale composition. But having zones is not the same as composing across them.

**Compositional intelligence layer:** L0-L1 boundary. Structural prerequisites.

---

### Category 3: Perception Gates (SC-09, SC-10, SC-11, SC-15) -- PARTIAL Compositional Coverage (L1 only)

| Gate | What It Checks | Compositional? | Why Not / How |
|------|---------------|----------------|---------------|
| SC-09 | Background delta >= 15 RGB between zones | PARTIAL | Ensures chromatic CHANNEL is perceptible, but not whether it serves a semantic direction |
| SC-10 | Stacked gap <= 108px | PARTIAL | Prevents whitespace voids, but not whether spacing creates rhythm |
| SC-11 | Typography zones (display-body >= 10px) | PARTIAL | Ensures typographic CHANNEL is perceptible, but not whether it creates hierarchy |
| SC-15 | Border presence (>= 1 border or >= 2 dividers) | PARTIAL | Ensures structural CHANNEL exists, but not whether it communicates hierarchy |

**Assessment:** These are the L1 (Perception Threshold) gates. They enforce the FLOOR -- if you can't see the differences, composition is impossible. They solved the Flagship's specific failure (imperceptible 1-8 RGB deltas, zero borders, uniform 16px typography).

But they check MAGNITUDE, not MEANING. A page where every zone has a 20 RGB delta, 12px font-size variation, and one border passes all four gates. That same page could be completely incoherent -- zones brightening and darkening randomly, font sizes jumping without hierarchy, a border placed arbitrarily. The gates verify perceptibility, not purpose.

**Compositional intelligence layer:** L1 (Perception Thresholds). Prevents FLAT (1.5/4). Does NOT enable STYLED (2/4+).

---

### Category 4: New Compositional Gates (SC-13, SC-14) -- LIMITED Compositional Coverage (L3-L4 attempt)

| Gate | What It Checks | Compositional? | Confidence |
|------|---------------|----------------|------------|
| SC-13 | Multi-coherence: >= 3/6 channels shift at each zone boundary | YES -- partially | ~70% (per pipeline docs) |
| SC-14 | Sub-perceptual prevention: no letter-spacing < 0.02em, no bg deltas 1-9 within zone | NO -- hygiene only | ~95% |

**SC-13 deep analysis (the most compositionally ambitious gate):**

SC-13 is the only gate that attempts to verify a COMPOSITIONAL PROPERTY (multi-coherence). It measures 6 channels at each zone boundary: chromatic (background color), typographic (font-size/weight), spatial (padding/margin), structural (borders), behavioral (transitions/animations), material (textures/patterns). If >= 3 shift at a boundary, PASS.

What SC-13 catches:
- A boundary where ONLY background color changes (1/6 channels) -- FAIL
- A boundary where background, font-size, AND padding change (3/6) -- PASS
- The Flagship pattern of invisible changes across all channels -- FAIL (because SC-09/11/15 would catch the imperceptibility first)

What SC-13 MISSES:
1. **Semantic direction coherence.** Three channels shifting is not the same as three channels shifting IN THE SAME SEMANTIC DIRECTION. A boundary where background darkens, font-size increases, AND padding decreases could be incoherent (darkening suggests depth but larger font suggests elevation). SC-13 counts shifts but cannot judge their semantic alignment.
2. **Proportional intelligence.** Three channels all shifting by their minimum threshold (15 RGB, 2px, 24px) produces a technically-passing but visually timid transition. Three channels shifting boldly (60 RGB, 8px, 48px) at a major zone boundary is compositionally stronger. SC-13 treats both identically.
3. **Contextual appropriateness.** A minor sub-section boundary might correctly have only 2 channel shifts (FAIL), while a major zone boundary correctly has 5 (PASS). SC-13 applies the same threshold everywhere.
4. **Narrative arc.** The pattern of channel shifts across ALL boundaries tells a story (e.g., progressive intensification, tension-release). SC-13 evaluates each boundary in isolation.

**SC-13's self-assessed confidence is ~70%.** This is honest. It catches the ABSENCE of multi-coherence (the Flagship pattern) but cannot verify the QUALITY of multi-coherence present.

**SC-14 deep analysis:**

SC-14 is a hygiene gate, not a compositional gate. It catches wasted CSS effort (the Flagship spent 22% of CSS on letter-spacing 0.001-0.01em). It prevents a specific failure mode but does not verify any compositional property. A page that passes SC-14 has no sub-perceptual values, but this says nothing about whether its perceptible values compose well.

**Compositional intelligence layer:**
- SC-13: L4 attempt (Multi-Coherence), ~70% coverage of L4, 0% of L5
- SC-14: L1 enforcement (prevents sub-perceptual waste)

---

## Compositional Intelligence Coverage Map

### What the 15 Gates Cover

```
LAYER    COVERAGE         GATES               CATCHES                           MISSES
------   --------         -----               -------                           ------
L1       ~95%             SC-09,10,11,15      Perceptibility floor              Nothing significant at L1
L2       0%               (none)              Nothing                           Scale coverage (pattern at 5 zoom levels)
L3       ~15%             SC-09,11,15         Channel PRESENCE (3 of 6)         Channel VARIETY, DEPLOYMENT, VOCABULARY
L4       ~35%             SC-13               Channel shift COUNT               Semantic DIRECTION, PROPORTION, ARC
L5       0%               (none)              Nothing                           Anti-scale model, semantic density, restraint
```

### The Gap in Numbers

The 15 gates cover:
- **L1 (Perception Floor):** ~95%. Essentially complete. The gates ARE L1.
- **L2 (Scales):** 0%. No gate checks whether the pattern appears at multiple zoom levels.
- **L3 (Channels):** ~15%. Gates verify 3 of 6 channels exist (chromatic, typographic, structural) but not the other 3 (spatial, behavioral, material) and none of their compositional deployment.
- **L4 (Multi-Coherence):** ~35%. SC-13 counts channel shifts but misses direction, proportion, context, and arc.
- **L5 (Anti-Scale):** 0%. Entirely in the judgment domain.

**Total compositional coverage: ~29% weighted (L1: 95% x 0.15 weight + L2: 0% x 0.15 + L3: 15% x 0.20 + L4: 35% x 0.25 + L5: 0% x 0.25 = 14.25 + 0 + 3 + 8.75 + 0 = 26%)**

The gates catch about a quarter of compositional quality. The other three-quarters require perceptual judgment.

---

## Can We ADD Compositional Gates?

### Candidate 1: Scale Coverage Gate (L2)

**Proposal:** "Does the primary visual pattern appear at >= 3 of 5 scales?"

**Implementation approach:**
- Define "pattern" as the dominant CSS motif (e.g., warm-to-cool color progression, heavy-to-light border gradient)
- At Navigation scale: check header/footer for pattern expression
- At Page scale: check zone-level properties
- At Section scale: check within-section variation
- At Component scale: check component-level styling
- At Character scale: check typographic micro-details

**Verdict: PROBABLY NOT GATEABLE.**

The problem is defining "pattern" programmatically. A pattern is a SEMANTIC concept -- "the page moves from analytical density to emotional openness." How does `getComputedStyle` detect this? It can detect that font-size increases across zones, or that background lightens, but it cannot determine whether these changes EXPRESS the same underlying pattern.

You could proxy-gate this:
- "Do >= 3 CSS properties change in the same direction across >= 3 zones?" (e.g., font-size increases monotonically across 3 zones)
- Confidence: ~40%. Catches monotonic progressions but misses non-linear patterns (tension-release, U-shaped arcs).

**Recommendation: DEFER TO PA.** Scale coverage is better assessed perceptually.

---

### Candidate 2: Channel Shift Direction Gate (L4 improvement)

**Proposal:** "Do >= 3 channels shift in the same semantic direction at each zone boundary?"

**Implementation approach:**
- At each boundary, classify each channel's shift as INTENSIFYING (+) or RELAXING (-)
  - Chromatic: darker = +, lighter = -
  - Typographic: larger/heavier = +, smaller/lighter = -
  - Spatial: tighter = +, looser = -
  - Structural: more borders = +, fewer = -
- If >= 3 channels agree on direction: PASS

**Verdict: PARTIALLY GATEABLE (~50% confidence).**

The +/- classification is the weak point. "Darker = intensifying" is a reasonable heuristic but not universal (a meditation page might use darkness for calm). The gate can catch CONTRADICTORY transitions (half the channels intensify, half relax) but cannot judge whether the chosen direction is CORRECT for the content.

This would upgrade SC-13 from "3 channels shift" to "3 channels shift coherently." Confidence: ~50% (up from SC-13's ~70% for shift count alone, but the NEW check is ~50% on direction).

**Recommendation: IMPLEMENT AS SC-13B (optional enrichment to SC-13).** Runs after SC-13 passes. Reports direction coherence as advisory (WARN, not FAIL). Let PA make the final call.

---

### Candidate 3: Monotonic Property Progression (L2/L3 hybrid)

**Proposal:** "Does at least 1 CSS property change monotonically across >= 3 consecutive zones?"

**Implementation approach:**
- For each zone boundary, measure: background lightness, font-size, padding, border-weight
- Check if any single property forms a monotonic sequence across 3+ zones (always increasing or always decreasing)

**Verdict: GATEABLE (~80% confidence).**

This is mechanically straightforward (sort zone values, check monotonicity). It catches a specific compositional pattern: PROGRESSIVE ARCS. A page where font-size goes 14 -> 16 -> 18 -> 16 (non-monotonic) is not necessarily bad, but a page where NO property progresses across 3+ zones likely lacks compositional direction.

**Limitation:** Not all good compositions are monotonic. Tension-release patterns (A-B-A) would fail this gate despite being compositionally rich. So this must be ADVISORY, not BLOCKING.

**Recommendation: IMPLEMENT AS SC-16 (advisory).** Report findings but do not FAIL. "No monotonic property progression detected -- PA should verify compositional direction."

---

### Candidate 4: Visual Rhythm Gate (L3)

**Proposal:** "Do spacing values between sections follow a recognizable pattern (not random)?"

**Implementation approach:**
- Measure `gap` / `margin` between all zone boundaries
- Check for patterns: constant (all equal), arithmetic (linear increase), geometric (doubling), or alternating (A-B-A-B)
- Random spacing = WARN

**Verdict: PARTIALLY GATEABLE (~60% confidence).**

Recognizing mathematical patterns in spacing is straightforward. But "good rhythm" is not always mathematically regular -- a skilled composer might use IRREGULAR spacing intentionally (a pause before a climax, a tight cluster for emphasis). The gate catches RANDOM spacing but cannot distinguish between INTENTIONAL irregularity and ACCIDENTAL randomness.

**Recommendation: ADVISORY ONLY.** Useful diagnostic information for PA auditors.

---

### Candidate 5: Content-Form Resonance Gate (L5)

**Proposal:** "Does the visual treatment correlate with content density/type?"

**Implementation approach:**
- Measure content density per zone (word count, heading frequency, list/table presence)
- Measure visual treatment per zone (CSS complexity, mechanism count)
- Check correlation: dense content should get dense visual treatment

**Verdict: NOT GATEABLE.**

Content-form resonance is the defining property of DESIGNED (4/4). It requires understanding WHAT the content MEANS, not just its structure. A dense data section might correctly get sparse visual treatment (letting the data speak) or dense treatment (supporting analytical reading). The correct choice depends on the content's PURPOSE, which no CSS measurement can determine.

**Recommendation: PA ONLY.** This is the irreducible core of perceptual judgment.

---

## The Verdict: What Is and Isn't Gateable

### Currently Gateable (15 gates = ~26% of compositional quality)

1. **L1 Perception Floor:** FULLY gateable. SC-09/10/11/15 cover this completely.
2. **L4 Channel Shift Count:** PARTIALLY gateable (~70%). SC-13 counts shifts.
3. **L1 Hygiene:** FULLY gateable. SC-14 catches sub-perceptual waste.

### Potentially Gateable (3 candidates = could reach ~35%)

4. **L4 Shift Direction (SC-13B):** ~50% confidence. Advisory, not blocking.
5. **L2/L3 Monotonic Progression (SC-16):** ~80% confidence. Advisory, not blocking.
6. **L3 Visual Rhythm:** ~60% confidence. Diagnostic information for PA.

### NOT Gateable (the irreducible 65%)

7. **L2 Scale Coverage:** Pattern at multiple zoom levels requires perceptual judgment.
8. **L4 Semantic Direction:** Whether channel shifts serve the SAME purpose requires understanding purpose.
9. **L4 Proportional Intelligence:** The RIGHT amount of shift at the RIGHT boundary -- judgment.
10. **L4 Narrative Arc:** The pattern of transitions across ALL boundaries tells a story -- judgment.
11. **L5 Content-Form Resonance:** Visual decisions emerging FROM content meaning -- judgment.
12. **L5 Semantic Density x Restraint:** The anti-scale model -- entirely judgment.
13. **L5 Creative Surprise:** Unexpected-yet-perfect choices -- definitionally ungated.
14. **L5 Emergent Coherence:** The whole exceeding parts -- judgment.

### Why Compositional Quality Is Inherently Un-Gateable (Mostly)

The fundamental issue is that gates measure PROPERTIES (numbers, presence, counts) while compositional quality is about RELATIONSHIPS (purpose, direction, proportion, surprise). A gate can verify that 3 channels shift at a boundary (property). It cannot verify that the shifts serve the page's narrative arc (relationship).

This is not a limitation of the gate IMPLEMENTATION. It is a limitation of the gate CONCEPT. `getComputedStyle` returns CSS values. Compositional quality lives in the MEANING those values create in a viewer's perception. No amount of CSS measurement can bridge that gap.

The 70/30 boundary cited in the pipeline documentation is generous. For STRUCTURAL compliance (soul, accessibility, basic thresholds), gates catch ~95%. For COMPOSITIONAL quality (scales, channels, coherence, design), gates catch ~26%. The "70% of issues" figure includes structural issues in the denominator; if we count only compositional issues, gates catch closer to 25-30%.

---

## What This Means for Fat Core

### For the Gate Shell

The 15-gate shell is NECESSARY but RADICALLY INSUFFICIENT for compositional quality:

1. **Keep all 15 gates.** They prevent mechanical failures (wrong container width, invisible deltas, zero borders). These are cheap to run (~15 seconds total) and catch problems that should never reach PA.

2. **Add SC-13B (direction coherence) as advisory.** Not blocking. Feeds diagnostic info to PA auditors: "At boundary 2-3, channels shift in contradictory directions."

3. **Add SC-16 (monotonic progression) as advisory.** Not blocking. "No property progresses monotonically across 3+ zones."

4. **Do NOT add more blocking gates.** Every additional blocking gate risks false positives on legitimate compositional choices. A tension-release pattern (A-B-A) would fail a monotonic progression gate. An intentionally sparse section would fail a visual rhythm gate. The more compositional the gate, the more it interferes with creative authority.

### For the PA Shell

The 9-auditor PA shell is the PRIMARY compositional quality instrument. The gates are preprocessing -- catching mechanical errors so PA auditors can focus on COMPOSITIONAL judgment.

The PA shell should receive gate diagnostic output as context:
- "SC-13 passed: 4/6 channels shift at boundaries 1-2, 3/6 at boundaries 2-3"
- "SC-13B advisory: direction coherent at 1-2, contradictory at 2-3"
- "SC-16 advisory: font-size increases monotonically across zones 1-3-4"

This gives PA auditors QUANTITATIVE context without biasing their QUALITATIVE judgment.

### For the Fat Core Architecture Decision

The gate analysis supports Fat Core's thesis: **compositional quality cannot be externally verified during the build process; it must be INTERNALLY generated by a capable agent.** The gates are a safety net, not a quality generator.

The key implication: investing in BETTER GATES will not produce DESIGNED pages. The 15 gates prevent FLAT. The PA catches STYLED-but-not-COMPOSED. But DESIGNED can only come from the builder's compositional intelligence. Fat Core's bet -- put that intelligence in one agent with full context rather than spreading it across agents and losing it at boundaries -- is supported by the gate analysis.

The gates are a FLOOR, not a CEILING. Raising the floor (from 12 to 15 gates) prevented specific known failures. But the ceiling is set by the builder, not the verifier.

---

## Summary Table

| Layer | Description | Gate Coverage | Best Possible Gate Coverage | Gap Filled By |
|-------|-------------|--------------|---------------------------|---------------|
| L1 | Perception Floor | ~95% (SC-09/10/11/14/15) | ~98% | Gates sufficient |
| L2 | 5 Scales | 0% | ~20% (SC-16 advisory) | PA auditors |
| L3 | 6 Channels | ~15% (presence only) | ~30% (+ rhythm advisory) | PA auditors + builder skill |
| L4 | Multi-Coherence | ~35% (SC-13 count) | ~50% (+ SC-13B direction) | PA auditors |
| L5 | Anti-Scale Model | 0% | 0% (fundamentally ungated) | Builder judgment only |

**Bottom line:** Gates catch ~26% of compositional quality. With maximal expansion (3 advisory gates), ~35%. The remaining 65% is inherently un-gateable and requires either PA judgment (L2-L4 remainder) or builder compositional intelligence (L5).
