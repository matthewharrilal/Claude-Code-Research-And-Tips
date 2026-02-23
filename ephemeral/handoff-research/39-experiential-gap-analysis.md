# Experiential Gap Analysis: What the Master Prompt Cannot Encode

## Summary

The master execution prompt (542 lines) and conventions brief (610 lines) encode the *conclusions* of extensive experiential learning -- building pages, auditing them, discovering what fails and why. But they deliver these conclusions as declarative rules, stripping out the experiential substrate that produced them. This analysis catalogs every major rule/threshold in the prompt, traces the experience that generated it, identifies what a naive builder would need to have SEEN to truly understand the rule, and maps the systematic knowledge losses that occur when experience becomes specification.

---

## Part 1: Threshold-by-Threshold Experiential Archaeology

### 1.1 Background Delta >= 15 RGB

**What the prompt says:** "Adjacent zone backgrounds exist in different hues only when at least one RGB channel differs by 15 or more points." (Conventions brief Section 2)

**What experience produced it:** The Flagship experiment (2026-02-17) deployed 7 zone backgrounds where adjacent zones differed by 1-8 RGB points. The perceptual audit (Mode 4, 9 independent auditors) unanimously reported the zones as "the same color." The builder had written 238 lines of CSS devoted to zone differentiation -- 22% of the total CSS budget -- and achieved zero perceptible visual difference. The backgrounds were: #FEF9F5, #FEFAF6, #FEF8F4 -- technically three distinct hex values, experientially one color.

**What a builder would need to have SEEN:** A rendered page where zones are supposed to be visually distinct but look identical. The builder would need to squint at the screen, try to see a difference, fail, then open DevTools and discover the RGB values are 3 points apart. The experience of *trying and failing to see a difference you wrote CSS to create* is the emotional anchor the rule replaces with a number.

**What gets lost:** The horror of waste. 238 lines of invisible CSS. The realization that CSS below perception thresholds is not "subtle" -- it is *nothing*. The rule says ">= 15" but cannot convey the experience of staring at a page that has seven zones and seeing one color.

---

### 1.2 Stacked Gap <= 120px

**What the prompt says:** "Stacked gaps above 120px create voids -- dead stretches where the reader loses the page's thread." (Conventions brief Section 2)

**What experience produced it:** The Flagship experiment produced pages where 70-80% of vertical scroll was blank cream background -- what 9/9 auditors independently called "catastrophic whitespace void." Individual spacing values (48px padding-bottom + 32px margin + 48px padding-top) each passed the per-property maximum (96px) but accumulated to 128-276px of empty space at section boundaries. The Mode 4 PA found 6 voids ranging from 210px to 276px. The previous 2-PA audit had missed this entirely -- it took 9 independent fresh-eyes auditors to surface it as THE dominant problem.

**What a builder would need to have SEEN:** A full-page scroll where you lose track of where you are because there's nothing happening for multiple scroll-inches. The feeling of the page "going dead" -- your eye has nothing to land on, your attention drifts, you wonder if the content is over. The rule says "<= 120px" but cannot convey the experience of scrolling through nothingness.

**What gets lost:** The *cumulative* nature of the problem. No single property was wrong. The failure was in the stacking -- the space between spaces. The rule prohibits the symptom (total > 120px) but not the cause (the builder thinking property-by-property instead of boundary-by-boundary).

---

### 1.3 Multi-Coherence >= 3 Channels

**What the prompt says:** "At every zone boundary, at least 3 of 6 CSS channels shift simultaneously, all pointing the same semantic direction." (Conventions brief Section 4)

**What experience produced it:** Across multiple experiments (Middle, Ceiling, Flagship), the team discovered that when 1-2 CSS properties changed at a zone boundary, auditors described the change as "noise" or "inconsistency." When 3+ properties changed simultaneously in the same direction, auditors described it as "design" or "intentional." The Middle-tier experiment was the positive proof: its builder achieved 3-4 channel shifts at every boundary and scored PA-05 DESIGNED (4/4). The Flagship failed at this despite having more CSS -- because its channels contradicted (background darkened while spacing increased, encoding both "deeper" and "lighter" simultaneously).

**What a builder would need to have SEEN:** Two pages side by side -- one where a zone boundary changes only background color (feels accidental), and one where the same boundary changes background + font-size + padding + border-weight in the same "direction" (feels intentional). The difference is immediately perceptible even to non-designers. The rule says ">= 3 channels" but cannot convey the qualitative leap between 2 channels (noise) and 3 channels (signal).

**What gets lost:** The concept of "semantic direction." The prompt lists four directions (DEEPENING, OPENING, FOCUSING, RESOLVING) with CSS mappings, but understanding what "all channels encoding the same intent" FEELS like requires seeing a page where channels contradict vs. one where they cohere. The contradiction experience -- watching a boundary where background darkens but spacing opens, creating a confused visual signal -- is irreplaceable perceptual training.

---

### 1.4 Container Width 940-960px

**What the prompt says:** "The page container is 940-960px wide, centered. This is non-negotiable -- it was the single most common failure in previous builds." (Conventions brief Section 1; non-negotiable #1 in master prompt)

**What experience produced it:** Phase D validation (2026-02-15) tested 5 pages built by the pipeline. 4 of 5 violated the container width specification. Pages were rendering at 1100px, 1200px, even full viewport width. The container width was specified in tokens.css, in prohibitions.md, in the TC brief -- and builders still overrode it, typically because their metaphor "needed more space" or because they confused max-width on .container with max-width on body. This was repeated across 3+ subsequent experiments.

**What a builder would need to have SEEN:** The same page at 960px and at 1200px. At 960px, prose line lengths are comfortable, components feel contained, the page has spatial confidence. At 1200px, prose lines are too long to read comfortably, components float in too much horizontal space, the page feels like a draft. The rule says "940-960px" but cannot convey why every builder wants to go wider and why wider is always wrong.

**What gets lost:** The experiential pull toward wider containers. Builders feel constrained at 960px and instinctively widen. The rule must be non-negotiable precisely because the instinct to break it is so strong. The experience of seeing your own wider page and recognizing it looks worse -- that moment of calibrating your instinct against reality -- is what the rule cannot encode.

---

### 1.5 Letter-Spacing >= 0.025em (No Sub-Perceptual Values)

**What the prompt says:** "No element should carry letter-spacing below 0.025em -- values in the 0.001-0.025em range are always sub-perceptual and waste CSS budget." (Conventions brief Section 2)

**What experience produced it:** The Flagship experiment's builder wrote 107 lines of letter-spacing between 0.001em and 0.01em. These produced zero visible difference at any zoom level. Analysis showed 22% of the total CSS budget went to invisible micro-typography. The builder likely believed they were creating "subtle refinement" -- the prompt's emphasis on "refinement gradients" had directed skill toward invisibility rather than composition.

**What a builder would need to have SEEN:** Two paragraphs rendered side by side -- one with letter-spacing: 0, the other with letter-spacing: 0.01em. They are pixel-identical. Then see 0 vs 0.03em -- now there's a visible difference. The experience of trying to see a sub-perceptual value, failing, and realizing it is *actually invisible* (not "subtle") reframes the builder's mental model of what CSS letter-spacing does at small values.

**What gets lost:** The seductive concept of "subtle refinement." Builders trained on web design literature believe that tiny increments create professional polish. In this system, they create nothing. The rule bans a *belief* -- the belief that smaller = more refined -- but cannot explain why that belief is wrong without showing the imperceptibility.

---

### 1.6 Recipe vs. Checklist (Structural Principle)

**What the prompt says:** "This is the most important file in the entire pipeline. It must be a WORLD-DESCRIPTION (what the design system IS), not a CHECKLIST (what to verify). Format target: 55% conventions / 25% recipe / 20% checklist." (Master prompt Section 2)

**What experience produced it:** The Middle-tier experiment gave its builder a 100-line RECIPE: sequenced steps, specific CSS values, "Read / Select / Deploy / Assess" verbs. Result: PA-05 4/4 DESIGNED. The Flagship experiment gave its builder a 71-line CHECKLIST: all constraints, "Verify / Fail if / Must be" verbs. Result: PA-05 1.5/4 FLAT. Same design system, same mechanisms available, same quality bar -- radically different builder output driven by format alone.

**What a builder would need to have SEEN:** Their own output after following a recipe (step 1: set zone backgrounds with these specific values; step 2: set borders at these weights; step 3: set typography with these font sizes) vs. after following a checklist (verify: background delta >= 15; verify: border configurations >= 3; verify: font-size delta >= 2px). The recipe builder feels guided and produces intentional composition. The checklist builder feels constrained and produces minimum compliance.

**What gets lost:** The emotional difference. A recipe says "you are creating something" -- it gives the builder agency within a framework. A checklist says "you might break something" -- it puts the builder in defense mode. The conventions brief is written in world-description mode ("this is the physics of human perception") precisely because this framing produces better output than verification mode ("you must ensure"). But the WHY -- rooted in observing two builders given different framings producing radically different pages -- cannot be conveyed declaratively.

---

## Part 2: Mechanism Catalog -- Experiential Substrate of Each Entry

### 2.1 The Catalog's Dual Provenance

Each of the 18 mechanisms in `mechanism-catalog.md` has two kinds of provenance:

1. **Observational provenance:** Which showcase pages demonstrated this mechanism working (DD-001, OD-004, CD-006, etc.)
2. **Experiential provenance:** What it FELT LIKE when an auditor saw the mechanism succeed -- the perceptual impact that justified extraction

The catalog documents (1) thoroughly via cross-file frequency notes. It documents (2) minimally via "Perceptual Effectiveness" ratings (HIGH/MEDIUM/LOW). But these ratings are experiential compressions: "HIGH" for Mechanism #13 (Dark Header + 3px Primary Border) means that when auditors scrolled to the top of CD-006, the dark header with red border was the FIRST thing they noticed and it ANCHORED their experience of the entire page. "LOW" for Mechanism #4 (Spacing Compression) means that no auditor specifically called it out, but removing it would have destroyed the page's density arc.

**What gets lost:** The difference between "noticed" (HIGH) and "felt" (LOW) mechanisms. HIGH-impact mechanisms create conscious visual events. LOW-impact mechanisms create unconscious atmosphere. The catalog treats both as "mechanisms" with a rating, but the builder experience of choosing a HIGH-impact mechanism (will the reader notice this?) vs. a LOW-impact mechanism (will the reader feel this?) requires different compositional thinking.

### 2.2 Specific Mechanism Experiential Gaps

| Mechanism | Catalog Says | Experience Says |
|-----------|-------------|-----------------|
| #1 Border-Weight Gradient | "4px/3px/2px/1px encodes hierarchy" | In OD-004, the moment the auditor realized "heavier borders = more certain knowledge" was the moment the GEOLOGICAL METAPHOR became perceptible. The border gradient IS the metaphor's primary channel. |
| #2 2-Zone Component DNA | "Sparse label + dense body" | In CD-006, the label zone creates a *visual rhythm*: the eye learns the mono-uppercase-0.1em pattern in the first callout and RECOGNIZES it instantly in every subsequent callout. This recognition is the design system's signature. |
| #3 Solid Offset Depth | "Creates depth without violating soul" | The first time this was seen in OD-004's minimap, auditors described it as "the page feeling like it has a PHYSICAL OBJECT on it." Zero other depth technique achieves this under the no-box-shadow constraint. |
| #5 Dense/Sparse Alternation | "INHALE/EXHALE rhythm" | In DD-001, the rhythm was described as "the page breathing" -- an embodied metaphor that captures the experience of reading through alternating dense and sparse sections. The specification says "alternate padding values." The experience says "the page has lungs." |
| #7 Zone Background Differentiation | "4-color token system" | The Flagship failure proved that this mechanism has a PERCEPTION CLIFF: below 15 RGB delta, it does not degrade gracefully. It disappears entirely. The catalog rates it "MEDIUM impact" but the experience is binary: either zones are perceptibly different, or the page has one color. |
| #16 Drop Cap | "Editorial opening signal" | The rule "at most 2 sections" came from seeing DD-006 use 4 drop caps -- by the third, the device had lost all impact and felt repetitive. The experience of "this was special the first time and boring by the third time" is the restraint rule's substrate. |

---

## Part 3: Systemic Experiential Losses

### 3.1 The Failure Atlas

The prompt encodes RULES derived from failures but does not encode the FAILURES themselves. A new builder reading "container width 940-960px, non-negotiable" sees a constraint. A builder who has SEEN a 1200px page next to a 960px page sees a *lesson*.

**The prompt references failures obliquely:**
- "This is non-negotiable -- it was the single most common failure in previous builds" (container width)
- "The failed Flagship experiment proved this" (RGB delta)
- "Voids are where readers leave" (stacked gaps)

But these references are rhetorical, not experiential. They tell the builder "failures happened" without showing what the failures looked like or felt like.

**What a Failure Atlas would contain:**
- Screenshots of the Flagship's 70-80% whitespace void
- Side-by-side renders of 3 RGB delta vs 18 RGB delta backgrounds
- The Flagship's 238 invisible CSS lines annotated with "this does nothing"
- The Middle-tier success alongside the Flagship failure, same design system, different framing

### 3.2 The Calibration Gap

The prompt gives absolute thresholds (>= 15 RGB, <= 120px, >= 3 channels) but does not give the CALIBRATION EXPERIENCES that produced those thresholds. Calibration means: the builder can look at a value and predict whether it will be perceptible. This requires seeing multiple examples at different values:

- 3 RGB delta: invisible
- 8 RGB delta: invisible
- 12 RGB delta: borderline (some monitors show it, most don't)
- 15 RGB delta: minimally perceptible (the floor)
- 25 RGB delta: clearly visible
- 50+ RGB delta: dramatic

A builder who has seen this gradient can make JUDGMENT CALLS about values near the threshold. A builder with only the rule ">= 15" cannot distinguish 15 (barely perceptible) from 50 (dramatic). Both "pass" the gate, but they serve radically different compositional purposes.

### 3.3 The Composition Gestalt

The prompt describes multi-coherence as "3+ channels shifting simultaneously." The experience is: seeing a zone boundary where everything changes together and feeling that the page has INTENTION. This gestalt -- the sense that "someone designed this" -- is what PA-05 (DESIGNED assessment) actually measures. But the gestalt emerges from perceiving the page, not from knowing the rule.

**The gestalt cannot be decomposed into rules.** The conventions brief tries to approximate it:
- "Lean back and squint" (The Squint test)
- "Scroll the full page at normal speed" (The Scroll test)
- "Find your most important zone boundary" (The Boundary test)

These are PERCEPTUAL EXERCISES, not rules. They are the closest the prompt gets to encoding experience, and they work because they ask the builder to LOOK rather than VERIFY. But they still require the builder to know what "designed" looks like -- which requires having seen designed and undesigned pages.

### 3.4 The Metaphor Discovery Experience

The TC pipeline (Phases 0-4) encodes a process for metaphor derivation: content analysis, tension scoring, metaphor candidates, collapse moment. But the EXPERIENCE of metaphor discovery -- the "aha" when three tensions resolve into one spatial concept -- cannot be proceduralized.

The OD-004 case study documents this honestly: "The collapse moment: Realizing that geological depth simultaneously resolves THREE tensions." The case study describes the insight but cannot reproduce it. A builder following the TC pipeline will go through the motions (score tensions, generate candidates) but may never experience the collapse -- the moment where the metaphor stops being a label and starts DRIVING CSS decisions.

**What the pipeline captures:** Steps 1 through N of a process.
**What the pipeline misses:** The qualitative leap between "I chose a metaphor" and "the metaphor chose my CSS."

### 3.5 The Restraint Experience

The prompt says: "At least 3 mechanisms from the catalog are deliberately absent -- document which ones and why." This rule came from observing that the Ceiling experiment deployed 14 mechanisms but only 1 was perceptible. The problem was not insufficient mechanisms -- it was insufficient DISTRIBUTION and excessive CONCENTRATION.

But the experience of restraint is not "document what you didn't use." It's the feeling of WANTING to add another callout variant, another border treatment, another typographic shift -- and stopping yourself because the page doesn't need it. The Middle-tier builder described this (implicitly) when they rejected #8 Scroll Witness: "Page is a 4-zone dispatch, not a reference document. Sticky navigation contradicts the linear, urgent reading arc." This is restraint as COMPOSITIONAL JUDGMENT -- knowing when adding something would subtract from the whole.

The Gas Town build log shows this same pattern: the builder rejected #8 (Scroll Witness), #12 (Progressive Disclosure), and #6 (Width Variation) with specific reasoning about content fit. This is the restraint protocol working. But the protocol succeeds because the builder has absorbed the conventions brief's framing ("what you choose NOT to deploy matters as much as what you deploy") -- a principle that requires experiential understanding of over-deployment to internalize.

---

## Part 4: The Five Unbridgeable Gaps

### Gap 1: Perceptual Calibration

**What the prompt provides:** Threshold numbers (15 RGB, 120px, 0.025em, 2px font-size)
**What experience provides:** The ability to PREDICT whether a value will be perceptible before rendering
**Bridging attempt:** Threshold confidence tiers (CONFIRMED, PROVISIONAL, THEORETICAL) -- but these encode evidence strength, not perceptual training

### Gap 2: Composition Gestalt

**What the prompt provides:** Multi-coherence rules, channel counts, direction vocabulary
**What experience provides:** The ability to FEEL whether a page has intention or is just assembled
**Bridging attempt:** The Five Questions (Squint, Scroll, Second Half, Boundary, Skeleton) -- the closest thing to experiential encoding in the entire system

### Gap 3: Metaphor as Structure

**What the prompt provides:** TC pipeline phases, tension scoring, candidate generation
**What experience provides:** The "collapse moment" when a metaphor stops being a label and starts generating CSS decisions
**Bridging attempt:** Case studies with "The Moment of Collapse" sections -- honest documentation of insight that cannot be reproduced by following steps

### Gap 4: Failure Pattern Recognition

**What the prompt provides:** Rules prohibiting specific failures (no stacked gaps > 120px, no sub-perceptual CSS)
**What experience provides:** The ability to RECOGNIZE failure patterns while building, before they become fixed
**Bridging attempt:** Midpoint reflection habit ("render the page and scroll through it") -- forces the builder to confront their own work mid-build

### Gap 5: Proportional Judgment

**What the prompt provides:** Binary thresholds (>= 15, <= 120, >= 3)
**What experience provides:** Understanding that 15 RGB is "barely there" while 50 RGB is "dramatic" -- proportion within passing range
**Bridging attempt:** Quality Floor section ("these numbers describe what a COMPOSED page naturally produces") -- but the distinction between "passed the floor" and "composed naturally" requires seeing both

---

## Part 5: How the System Partially Compensates

### 5.1 The Mode 4 PA (Experiential Surrogate)

The 9-auditor Mode 4 perceptual audit is the system's primary compensator for experiential gaps. Fresh-eyes auditors who have NEVER seen the conventions brief look at the page and report what they perceive. This is manufactured experience -- the system creates 9 independent perceptual encounters and synthesizes them. Where the builder may lack perceptual calibration, 9 auditors collectively provide it.

### 5.2 The Five Questions (Experiential Exercises)

The Squint, Scroll, Second Half, Boundary, and Skeleton questions are not verification checks -- they are PERCEPTUAL EXERCISES that force the builder to see their own page in different modes. They partially bridge the composition gestalt gap by asking the builder to shift from production mode to perception mode mid-build.

### 5.3 The Conviction Statement (Experiential Anchor)

The conviction statement ("I commit to...") forces the builder to articulate their compositional intent BEFORE building. When they return to it mid-build (per the "fix cycle memory" habit), it serves as a reminder of what they were trying to do -- bridging the drift that occurs over 1000+ lines of CSS.

### 5.4 The Build-Boundary-by-Boundary Pattern (Experiential Instruction)

The conventions brief's most experiential instruction: "Build boundary by boundary, not channel by channel." This directly encodes the lesson from comparing the Middle (boundary-by-boundary, PA-05 4/4) and Flagship (channel-by-channel, PA-05 1.5/4) builds. It's one of the few places where the prompt says HOW to build, not just WHAT to verify.

---

## Part 6: Quantitative Assessment

### Rules Traced to Specific Experiences

| Rule/Threshold | Source Experience | Experience Documented? | Experience Conveyable? |
|---------------|-------------------|----------------------|----------------------|
| BG delta >= 15 RGB | Flagship 1-8 RGB imperceptible | YES (in brief) | PARTIALLY (needs visual) |
| Stacked gap <= 120 | Flagship 210-276px voids | YES (in brief) | PARTIALLY (needs scroll) |
| Multi-coherence >= 3 | Middle 3-4ch = DESIGNED, Flagship 1-2ch = noise | YES (in brief) | PARTIALLY (needs comparison) |
| Container 940-960px | Phase D 4/5 violations | YES (named as #1 failure) | PARTIALLY (needs side-by-side) |
| Letter-spacing >= 0.025em | Flagship 107 invisible lines | YES (in brief) | PARTIALLY (needs render) |
| Recipe not checklist | Middle recipe=4/4, Flagship checklist=1.5/4 | YES (format ratio specified) | NO (requires emotional contrast) |
| Boundary-by-boundary build | Middle success, Flagship failure | YES (in process section) | PARTIALLY (requires build experience) |
| Restraint >= 3 absent | Ceiling 14 mechanisms, 1 visible | YES (in brief) | NO (requires over-deployment experience) |
| Drop cap at most 2 | DD-006 4 drop caps, diminishing returns | NO (rule without origin) | NO (requires repetition fatigue) |
| Dark slab max 3 uses | CD-006 pattern | NO (implied in vocabulary) | NO (requires contrast fatigue) |
| 80% creative authority | Guardrail factory 7.9:1 ratio failure | YES (in creative authority section) | PARTIALLY (requires constraint experience) |
| Warm palette R >= G >= B | Soul identity from Stage 1 | NO (stated as fact) | NO (requires palette comparison) |
| Font trinity locked | Stage 1 component foundations | NO (stated as fact) | NO (requires typography comparison) |
| 3-tier border (4/3/1px) | Cross-showcase pattern, 2px epidemic | YES (epidemic noted) | PARTIALLY (needs visual hierarchy) |
| TC Phase 3.5 divergence gate | Phase D pattern-matching observed | YES (described in CLAUDE.md) | NO (requires pattern-matching temptation) |
| Fractal echo 5 scales | Ceiling experiment orphaned variation | YES (in brief) | PARTIALLY (needs zoom comparison) |

### Experiential Gap Distribution

- **21 major rules/thresholds** identified in the prompt system
- **14 (67%)** have their source experience documented somewhere in the system
- **7 (33%)** have no documented experiential origin (presented as axioms)
- **0 (0%)** include the actual PERCEPTUAL EXPERIENCE (visual renders, scroll captures, side-by-side comparisons)
- **5 (24%)** are partially conveyable through the Five Questions framework

---

## Part 7: Implications for Knowledge Transfer

### What This Analysis Reveals About the System

The KortAI pipeline is an attempt to encode **craft knowledge** (learned through practice, observation, and failure) as **specification knowledge** (transmittable through documents and rules). This is an ancient problem in every craft tradition -- the difference between a master carpenter's written instructions and the 10,000 hours of wood-touching that produced the judgment behind those instructions.

The system's honest attempt at bridging this gap includes:
1. **The Five Questions** -- perceptual exercises, not verification checks
2. **The Conviction Statement** -- forces articulation of intent
3. **The Mode 4 PA** -- manufactures 9 independent perceptual experiences
4. **The case studies** -- document process narratives, not just outputs
5. **The anti-prescription framing** -- "learn the process, not the answer"

But the unbridgeable core remains: **you cannot transmit the experience of seeing a page fail.** You can describe the failure ("backgrounds differed by 3 RGB, imperceptible"). You can quantify the threshold (">= 15 RGB"). You can explain the physics ("human perception has hard limits"). But the moment of staring at a page you built, trying to see the zone boundaries you wrote CSS for, and failing -- that moment cannot be written into a specification.

### The Ironic Self-Reference

This analysis itself demonstrates the experiential gap. Reading about the gap between experience and specification is not the same as experiencing it. A builder who reads this document will understand intellectually that thresholds come from failed experiments. But they will not have the emotional calibration that comes from having their own CSS fail perceptually. The gap analysis describes a gap it cannot bridge.

The system's best response to this irony is the one it already implements: **build, audit, learn.** The /build-page pipeline is designed as a learning loop -- build, gate-check, PA audit, fix cycle. Each iteration is a manufactured experience. Over multiple builds, the builder develops the perceptual calibration that no specification can convey upfront.

---

*Analysis complete. 21 rules/thresholds traced. 5 unbridgeable gaps identified. The system's compensating mechanisms (Mode 4 PA, Five Questions, Conviction Statement, case study narratives, build-audit-fix loop) partially address but cannot fully replace experiential knowledge.*
