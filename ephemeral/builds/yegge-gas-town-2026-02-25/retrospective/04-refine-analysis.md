# REFINE Cycle Effectiveness Analysis

**Build:** yegge-gas-town-2026-02-25
**Delta:** PA-05 2.0/4 -> 3.5/4 (+1.5), Tier 5 4/9 -> 9/9 (+5)
**Verdict:** REFINE -> SHIP WITH FIXES

---

## 1. What the REFINE Builder Received

Per execution tracker (R-2, R-3) and pa-weaver.md Section 5.2, the REFINE builder received exactly:

1. **Conviction statement** (HTML comment, 20 lines) -- the original builder's architectural intent: factory/refinery metaphor, zone names, 6-channel multi-coherence strategy, density arc pattern.
2. **Artistic impression** (p3c-weaver-artistic.md, 33 lines) -- generative language describing the page experience. Zero numbers, zero gate IDs, zero thresholds.

The REFINE builder did NOT receive: gate results JSON, PA-05 sub-scores, threshold numbers, auditor reports, execution brief, content map, or any pipeline context. Protocol compliance: CONFIRMED.

### What Was in the Artistic Impression

The artistic impression used three rhetorical moves:

1. **Praise of what works** (first 60%): "brass plate on a craftsman's door," "the best single design moment on this page," "precision and personality are not enemies." This anchors the REFINE builder in what to PRESERVE.

2. **A single dramatic metaphor for the failure** (middle 25%): "someone forgot to turn on the lights." Not "GR-60 FAIL: 48 WCAG contrast violations." Not "rgba opacity values too low." The failure is given as a PERCEPTUAL experience -- standing in darkness scrolling through nineteen screens of nothing.

3. **A generative directive** (final 15%): "Raise the contrast, mediate the transition, and let the factory floor be seen." Plus: "Content must exist on the page as a CSS default, with animations as embellishment rather than gate."

The closing sentence for the REFINE agent was the most directive: "The problem is light, not logic."

---

## 2. What the REFINE Builder Changed

**Line count:** 2,671 -> 2,931 (+260 lines, +9.7%)

### Changes by Category

| Category | Count | Lines Added | Key Changes |
|----------|-------|-------------|-------------|
| Z3 contrast uplift | 12 CSS edits | ~30 | Body text rgba 0.9->1.0, table cells 0.85->0.95, borders 0.1->0.2, code bg 0.06->0.08, blockquote border 0.25->0.35, callout text to full opacity |
| Header contrast | 2 CSS edits | ~5 | Subtitle/tags #666->#B0A89C (contrast 3.0->5.2:1) |
| Zone transitions | 2 HTML additions | ~60 | Z2->Z3 threshold ("Entering the Factory Floor") and Z3->Z4 threshold ("Hands-On Practice") with 32px padding + 3px red accent |
| Navigation | 2 components | ~120 | Sticky section nav (14 anchors, right-edge rail, label-on-hover) + back-to-top button |
| Heading hierarchy | 4 tag changes | ~0 | h4->h3 for 4 headings (fixing GR-51) |
| Multi-coherence | 2 CSS edits | ~10 | Z4 font-weight 400->500, Z4 table headers border shifted to accent-red |
| Border normalization | Minor CSS | ~5 | Fractional widths removed (already canonical in practice) |
| Footer polish | 1 CSS edit | ~2 | Closing border 0.1->0.15 |

**Dominant category:** Navigation (~46% of new lines). The REFINE builder treated navigation as the largest structural gap, consistent with the artistic impression's "nineteen screens of nothing" -- the builder inferred that orientation aids were essential if the dark zone was going to be visible.

**CSS vs HTML split:** ~55% CSS changes, ~45% HTML additions. The CSS changes were surgical (opacity/contrast values) while the HTML additions were structural (threshold elements, nav rail).

---

## 3. Dimension-by-Dimension Improvement

| PA-05 Sub-criterion | Initial | REFINE | Delta | What Changed |
|---------------------|---------|--------|-------|--------------|
| DESIGNED | Conditional FAIL | PASS | +1 | Dark zone content now visible -> auditors can verify design intent across full page. Multi-scale coherence (macro light-dark-light, meso section pacing, micro element alternation) becomes perceivable. |
| COHERENT | Conditional PASS | PASS | +0.5 | Zone transitions mediated (threshold elements) -> "one designer" feeling extends through the transition instead of colliding at it. |
| PROPORTIONATE | FAIL | PASS | +1 | Vertical: designed moments now visible in every scroll third. Horizontal: unchanged (borderline 60-67%). Breathing: gaps reduced (100px->80px max). 4/4 cross-validators agree PASS. |
| POLISHED | Conditional PASS | PASS (with advisory) | +0.5 | Header contrast fixed. Heading hierarchy corrected. Footer text size still flagged (advisory, not failure). |

**Tier 5 movement:** 4/9 (2 YES + 5 CONDITIONAL) -> 9/9 (all YES). The CONDITIONALs all converted because the dark zone became evaluable. The auditors could now see and name the design moments, voice independence, fractal coherence, and metaphor persistence that were already present in the HTML but invisible at viewport scroll resolution.

---

## 4. Root Cause of the +1.5 Delta

The improvement has three distinct sources, in order of contribution:

### Source 1: Visibility Unlocking Existing Quality (~60% of delta)

The initial build's design was already COMPOSED-tier in its HTML/CSS architecture. The factory metaphor was structural (CSS custom properties named by factory zones). The 6-channel multi-coherence was coded. The density arc was present. But at DPR 0.667 with low-opacity rgba values, 85% of this work was invisible in screenshots.

The REFINE builder's contrast uplift (12 CSS edits totaling ~30 lines) did not add new compositional thinking. It revealed existing compositional thinking. The Tier 5 score moving from 4/9 to 9/9 is the clearest evidence: the SAME architectural decisions, once visible, scored maximum.

**Implication:** PA-05 was measuring DELIVERY, not DESIGN. The initial build was a 3.5/4 page trapped behind a 2.0/4 rendering.

### Source 2: Transition Architecture (~25% of delta)

The threshold elements ("Entering the Factory Floor," "Hands-On Practice") were genuinely new design work. They transformed the cream-to-dark boundary from a collision into a mediated handoff. The REFINE Weaver specifically cites these as contributing to DESIGNED and COHERENT passing: "threshold dividers create landmark moments."

### Source 3: Fresh-Eyes Generative Effect (~15% of delta)

A different Opus agent, given only the conviction + artistic impression, made choices the initial builder would not have: sticky navigation with label-on-hover, back-to-top with scroll-based visibility, and the specific Z3->Z4 multi-coherence strategy (font-weight + table border color shift). These were not prescribed by the artistic impression -- they were creative responses to the generative framing.

---

## 5. Could the Initial Builder Have Achieved This?

**Partially yes, mostly no.** The initial builder had the compositional skill (the design architecture is strong). The initial builder could have:

- Set higher opacity values for Z3 text (this was likely a DPR miscalibration, not a design choice)
- Added threshold transitions at zone boundaries (the conviction statement shows awareness of the transitions)
- Fixed the heading hierarchy

The initial builder could NOT have:

- **Seen the rendering failure.** The builder works without screenshots -- they write CSS without seeing the result at DPR 0.667. The builder's self-evaluation (question 3: "Z3 inverts to near-black (the factory)") assumed the content was visible.
- **Diagnosed the perceptual impact.** Without the artistic impression's "nineteen screens of nothing" framing, the builder would not know that their rgba(254,249,245,0.9) was insufficiently opaque at non-Retina DPR.
- **Added navigation.** Nothing in the execution brief or reference files prescribes navigation for long pages. The artistic impression's emphasis on "scrolling through nothing" created the imperative.

**Key insight:** The initial build's failure was a CALIBRATION error (opacity values too low for non-Retina rendering), not a COMPOSITION error. The REFINE cycle's success confirms this: the smallest CSS changes (opacity adjustments) produced the largest PA-05 movement.

---

## 6. REFINE Protocol Compliance

| Check | Status | Evidence |
|-------|--------|----------|
| Different Opus agent (not same builder amending) | CONFIRMED | Execution tracker R-1: "DIFFERENT Opus agent" |
| Received conviction + artistic impression only | CONFIRMED | Execution tracker R-2, R-3 |
| Did NOT receive gate scores | CONFIRMED | Execution tracker R-3: "protocol: REFINE agent never sees gates" |
| Did NOT receive threshold numbers | CONFIRMED | Artistic impression contains zero numbers |
| Generative language used (not diagnostic) | CONFIRMED | "someone forgot to turn on the lights" vs "GR-60 FAIL" |
| Continuation bias defeated | CONFIRMED | Fresh agent, no access to previous builder's context |

**Protocol fully compliant.** The REFINE builder's conviction update (lines 18-21 of HTML) documents its own changes without reference to any gate scores, confirming it worked from generative input.

---

## 7. What the REFINE Builder Still Missed (at 3.5/4)

The REFINE Weaver identified 5 remaining fixes:

1. **Footer text too small** (MECHANICAL) -- 2/10 auditors flagged
2. **Nav rail links lack aria-labels** (MECHANICAL) -- GR-52 FAIL, 14 inaccessible links
3. **Principle cards 4x identical** (MECHANICAL) -- 2/10 auditors flagged monotony
4. **Edge zone transitions have only 2 channels** (STRUCTURAL) -- Z1->Z2 and Z4->Z5
5. **Dark zone lacks internal visual relief** (STRUCTURAL) -- 6/10 auditors flagged scroll fatigue

Fix #5 is the most significant remaining gap. The dark zone runs 60-70% of scroll height at uniform intensity. Even with content visible, 6/10 auditors report fatigue setting in. A lighter interlude (different dark shade or a single cream card) would break the monotony. This is the barrier between 3.5/4 and 4.0/4.

The DELIGHT register scored lowest (4/10) -- the page lacks micro-refinements (hover states, ::selection colors, typographic details) that would reward close attention. A second REFINE cycle would likely address this.

---

## 8. The Artistic Impression as a Tool

### Language Analysis

The artistic impression used exclusively perceptual language:

| Type | Example | Count |
|------|---------|-------|
| Perceptual/experiential | "someone forgot to turn on the lights," "the floor falls away," "nineteen screens of nothing" | 8 instances |
| Prescriptive/specific | "raise the contrast," "content must exist as CSS default" | 2 instances |
| Diagnostic/numerical | (none) | 0 instances |

**Ratio: 80% perceptual, 20% prescriptive, 0% diagnostic.**

### Effectiveness Assessment

The perceptual language was more effective than prescriptive would have been. Evidence:

1. The REFINE builder added navigation and threshold transitions -- neither prescribed by the artistic impression. Perceptual framing ("nineteen screens of nothing") triggered creative problem-solving rather than mechanical compliance.
2. The builder's conviction update uses the same metaphorical register ("the factory floor is now lit") -- demonstrating the generative language was internalized, not just parsed.
3. The single prescriptive sentence ("raise the contrast") was sufficient to drive 12 surgical CSS opacity edits. The builder understood the intent without needing specific values.

**The artistic impression functions as a RECIPE, not a CHECKLIST.** It describes the perceptual destination ("a page whose content reaches the reader") and lets the builder determine the route. This mirrors the pipeline's core finding: recipe format produces DESIGNED; checklist format produces FLAT.

### Optimal Feedback Formula

Based on this evidence, effective REFINE feedback follows this structure:

1. **Anchor what works** (40% of text) -- prevents the REFINE builder from overwriting good architecture
2. **Name the failure perceptually** (40%) -- "someone forgot the lights" not "48 WCAG violations"
3. **Give one directive** (20%) -- "raise the contrast" not a 10-item fix list

This is the exact inverse of diagnostic output: diagnostics are 80% prescriptive, 0% perceptual. The REFINE builder needs the opposite.
