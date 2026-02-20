# PA-05 Analysis: Is 4/4 DESIGNED Sufficient for Flagship Quality Detection?

**Agent:** pa-analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** #2 -- Analyze whether PA-05 4/4 is sufficient for detecting Flagship quality
**Sources:** perceptual-auditing SKILL.md (774 lines, all 48 questions), 26-skill-flagship-audit.md (259 lines), 13-wrong-question.md (406 lines), 18-flagship-vs-middle.md, 04-middle-analysis.md, 19-flagship-4x4-spec.md

---

## 1. WHAT PA-05 "DOES THIS PAGE FEEL DESIGNED?" ACTUALLY MEASURES

PA-05 asks: "Would you put your name on this? What would you fix first?" It is operationalized through 4 sub-criteria:

| Sub-Criterion | What It Tests | Binary Threshold |
|---|---|---|
| **PA-05a DESIGNED** | Intentional composition vs assembled components | "A designer made choices for THIS content" |
| **PA-05b COHERENT** | Single design voice vs fragmented vocabulary | "Same design intent visible across entire page" |
| **PA-05c PROPORTIONATE** | Spatial balance (3 sub-dimensions for Ceiling+: horizontal, vertical, breathing) | "Nothing feels crowded or lost" |
| **PA-05d POLISHED** | Execution quality, missing elements, stray artifacts | "Ready to ship as-is" |

**Scoring:** 4/4 pass = YES (ship-ready); 3/4 = YES WITH RESERVATIONS; <=2/4 = NO.

### What PA-05 Actually Measures: A Floor, Not a Ceiling

PA-05's sub-criteria test whether a page crosses the **"designed" threshold** -- the line between "someone followed a template" and "someone made intentional choices." The critical word is THRESHOLD. The sub-criteria are pass/fail gates, not quality gradients. A page that barely passes all 4 gets the same 4/4 as a page that spectacularly passes all 4.

Evidence from the SKILL.md itself (line 38): "The guardrails are FLOORS (minimum acceptable quality), not TARGETS (what you aim for)." PA-05 is explicitly designed as a floor detector. It was never intended to measure compositional depth above the floor.

### What PA-05 Cannot Detect: The Compositional Intelligence Stack

The user-confirmed compositional intelligence stack defines Flagship quality through four layers (vertical scales, horizontal channels, multi-coherence, anti-scale governing model). PA-05 is blind to ALL FOUR LAYERS:

**Layer 1: 5 Scales (Navigation, Page, Section, Component, Character)**
PA-05c checks proportions at one zoom level. No PA question asks whether design intelligence is present at ALL 5 scales with fractal self-similarity (same pattern direction visible at each zoom level). Middle achieved 2 scales and scored 4/4. PA-05 has no mechanism to require or detect 5-scale coverage.

**Layer 2: 6 Channels (Chromatic, Typographic, Spatial, Structural, Behavioral, Material)**
PA-05 checks overall coherence (PA-05b) and proportion (PA-05c). No PA question asks whether the 6 CSS property groups are independently encoding semantic direction. A page where only 1 channel changes at boundaries (e.g., background color only) passes PA-05 identically to one where 4+ channels shift together. PA-05 is channel-blind.

**Layer 3: Multi-Coherence (>=3 channels shifting together at each boundary in same semantic direction)**
This is the CORE Flagship compositional act and PA-05 has ZERO coverage. PA-05b checks "one designer" (coherence = no fragmentation). Multi-coherence = orchestrated channel convergence at boundaries. These are fundamentally different qualities. Unison (all channels always together) and counterpoint (channels independent but semantically aligned) both pass PA-05b but only counterpoint is Flagship.

**Layer 4: Anti-Scale Model (Richness = semantic density x restraint x spatial confidence)**
PA-05 does not measure any of the three multiplicands:
- **Semantic density** (how much meaning per CSS line) -- PA-05a counts non-default elements but not semantic load
- **Restraint** (designed simplicity as contrast) -- no PA question detects restraint vs absence
- **Spatial confidence** (negative space as composition, not default) -- PA-05c checks balance but not confidence

**Additionally, PA-05 is blind to two enabling principles:**

5. **Perception thresholds (>=15 RGB, >=2px, >=0.03em, <=108px):** These are FLOORS enforced programmatically. PA-05 cannot detect whether CSS values are above or below perception thresholds -- it relies on auditor perception, which may or may not notice sub-threshold values. The Flagship experiment had 14 mechanisms that were programmatically present but perceptually invisible. PA-05 scored the result at 1.5/4 -- correctly detecting the perceptual failure but unable to diagnose WHY (sub-threshold values). The programmatic gate runner catches this; PA-05 cannot.

6. **Recipe vs Checklist format:** PA-05 evaluates the OUTPUT, not the INPUT. But the format of builder instructions (recipe with action verbs vs checklist with judgment verbs) determines whether the output achieves Flagship quality. PA-05 can detect the consequence (DESIGNED vs FLAT) but not the cause (recipe vs checklist). This matters because a Flagship verification system needs to check both the instructions and the result.

---

## 2. MIDDLE 4/4 vs FLAGSHIP 4/4: ARE THEY THE SAME QUALITY?

**No. They are categorically different achievements using the same score.**

### What Middle 4/4 Actually Was

The Middle experiment (technical documentation, F-PATTERN, 12 mechanisms) scored 4/4 on PA-05's binary sub-criteria:

- **PA-05a:** 4 non-default layout elements (dark header, orange callout, black diagram, styled tables)
- **PA-05b:** Padding range ratio 2.0x (64px/32px)
- **PA-05c:** Visual hierarchy visible under blur (dark header = primary, diagram = secondary)
- **PA-05d:** 15%+ non-framework CSS

But the PA auditor's QUALITATIVE narrative described it as: **"Professional but stiff," "specifications applied correctly," "B+ effort that demonstrates competence but not excellence," "metronomic rather than musical."**

This is the smoking gun: **the quantitative score (4/4) and the qualitative assessment ("B+ competence") directly contradict each other.** The sub-criteria were satisfied by moderate competence. The auditor perceived the gap between "passes thresholds" and "genuinely designed" but the scoring system had no way to express it.

### What Flagship 4/4 Should Be (Theoretical -- No Flagship 4/4 Exists Yet)

**CRITICAL FRAMING:** We have NEVER SEEN Flagship 4/4. It does not exist as an observed artifact. CD-006 (39/40) is the highest-scoring page in the corpus, but it was built under Middle/Ceiling conditions (Opus builder, CD-phase conventions, known content) -- it is NOT a Flagship reference point. What follows is a THEORETICAL specification derived from the compositional intelligence stack (scales, channels, multi-coherence, anti-scale model), not from observation.

Flagship 4/4 is defined by what the compositional intelligence stack PREDICTS. The stack has four layers, and Middle only engaged the first two partially:

| Stack Layer | Middle 4/4 (OBSERVED) | Flagship 4/4 (THEORETICAL) | PA-05 Detection |
|---|---|---|---|
| **5 Scales** | 2 (Page + Component) | All 5 (Nav, Page, Section, Component, Character) with fractal self-similarity | NONE -- no PA question checks scale count or fractal coherence |
| **6 Channels** | ~2 active per boundary (Chromatic + Spatial) | All 6 active, >=3 per boundary | NONE -- PA-05 is channel-blind |
| **Multi-Coherence** | Emergent (3 pairs from content overlap) | Deliberate (>=3 channels shifting together in same semantic direction at each boundary) | NONE -- PA-05b checks "one designer," not orchestrated convergence |
| **Anti-Scale Model** | Not applied (no restraint, no spatial confidence) | Richness = semantic density x restraint x spatial confidence | NONE -- no PA question measures any multiplicand |
| **Perception Thresholds** | Above threshold (visible borders, noticeable backgrounds) | Above threshold (>=15 RGB, >=2px, >=0.03em, <=108px) | INDIRECT -- auditors perceive consequences but cannot diagnose sub-threshold values |
| **Metaphor** | None (content-lookup) | Structural (embodied in CSS, not labeled) | PARTIAL -- PA-44 asks if metaphor visible without labels, but only in Tier 2 |
| **Auditor narrative** | "B+ effort, professionally stiff" | Something we have never read yet | N/A |

**The difference is qualitative, not quantitative.** Middle 4/4 is vocabulary fluency -- deploying 12 mechanisms correctly across 5 categories. Flagship 4/4 should be compositional mastery -- mechanisms in conversation, channels orchestrated, negative space designed, metaphor embodied structurally. But we are defining this FROM THEORY, not from evidence. The honest statement is: we know what Middle 4/4 looks like (we have it) and we know what Flagship 4/4 SHOULD look like (we are specifying it). The gap between theory and reality is the experiment's job to bridge.

PA-05 treats both as "4/4 DESIGNED" because its sub-criteria detect only the vocabulary fluency threshold. The compositional mastery dimension has no scoring mechanism.

---

## 3. CAN PA-05 DISTINGUISH MIDDLE 4/4 FROM FLAGSHIP 4/4?

**No. PA-05 as currently defined is structurally incapable of making this distinction.**

### The Mathematical Problem

PA-05 has 4 binary sub-criteria. Each is pass/fail. The maximum score is 4/4. There is no score above 4/4. A page that meets all 4 thresholds at minimum level scores identically to a page that far exceeds all 4 thresholds.

This is like a driving test that checks: (1) can you stay in your lane, (2) can you stop at red lights, (3) can you park, (4) can you use mirrors. A 16-year-old who barely passes and a Formula 1 driver both score 4/4. The test cannot distinguish between them because it was designed to detect a FLOOR, not measure a CEILING.

### The Evidence

Three data points confirm this:

1. **Middle scored 4/4** while the auditor called it "B+ effort" -- the score exceeded what the auditor perceived.

2. **The Flagship remediation scored 2.5/4** with a spread of 0.5-2.5 across auditors (Auditor F scored 0.5, Auditor A scored 2.5). A 5x inter-rater variance on the same artifact means the metric is unreliable at the top of its range.

3. **The PA skill's own validation note** (line 134) says: "Middle-tier experiment passed 4/4 sub-criteria, achieving DESIGNED despite lacking metaphor." The word "despite" reveals the skill's authors know that 4/4 does not require the compositional depth (metaphor, multi-coherence) that Flagship demands.

### What Would Need to Change

PA-05 would need to become a 2-LAYER assessment:

- **Layer 1 (current PA-05):** Floor detection. Binary sub-criteria. Answers: "Does this cross the designed threshold?" Score: YES/NO.
- **Layer 2 (new):** Depth measurement. Graduated criteria. Answers: "How much compositional sophistication is present above the threshold?" Score: Flagship-specific tier.

---

## 4. ADDITIONAL CRITERIA THAT DISTINGUISH FLAGSHIP QUALITY

The compositional intelligence stack defines Flagship quality through 4 layers. Each layer requires detection that PA-05 cannot provide. Organized by stack layer:

### 4.1 STACK LAYER 1: 5 Scales (CRITICAL -- minimal PA coverage)

**What Flagship requires:** Design intelligence visible at all 5 scales (Navigation, Page, Section, Component, Character) with fractal self-similarity -- the SAME pattern direction visible at each zoom level. Middle achieved 2 scales (Page + Component) and scored 4/4.

**What PA currently covers:**
- PA-10 (squint test): Page scale only
- PA-38 (container hierarchy): Component scale only
- PA-05c (proportion): Page scale only

**The gap:** No PA question asks the auditor to ZOOM between scales and detect whether the same design sensibility manifests at Navigation (site-level orientation), Section (zone differentiation), and Character (typographic detail) scales. 3 of 5 scales have ZERO perceptual coverage.

### 4.2 STACK LAYER 2: 6 Channels (CRITICAL -- no PA coverage)

**What Flagship requires:** All 6 CSS channel groups (Chromatic, Typographic, Spatial, Structural, Behavioral, Material) independently encoding semantic direction. The channels are the INSTRUMENTS of the composition; each must have its own part to play.

**What PA currently covers:** Nothing. PA-05b checks "one designer" which is a coherence question, not a channel-independence question. No PA question asks auditors to identify separate visual "voices" playing different roles.

**The gap:** PA is completely channel-blind. A page using only Chromatic + Spatial (backgrounds and padding) passes PA identically to one orchestrating all 6 channels. This is like judging an orchestra by whether it plays in tune, without asking how many instruments are playing.

### 4.3 STACK LAYER 3: Multi-Coherence (CRITICAL -- no PA coverage)

**What Flagship requires:** >=3 channels shifting TOGETHER at each section boundary in the SAME semantic direction. When the content moves from "introduction" to "analysis," the background shifts (Chromatic), the borders appear (Structural), AND the typography tightens (Typographic) -- all encoding "we are going deeper now."

**What PA currently covers:** PA-03 catches accidental INCOHERENCE (fragmentation). PA-34 examines ONE transition. Neither detects the ABSENCE of multi-channel convergence or the PRESENCE of semantic-direction alignment.

**The gap:** Multi-coherence is the signature Flagship move and PA has zero detection for it. A page where everything shifts together in lockstep (unison) and a page where channels have independent but semantically aligned parts (orchestrated multi-coherence) both pass PA-03. The Flagship experiment had 14 mechanisms in CSS but zero multi-coherence at boundaries -- all channel shifts were below perception thresholds. PA detected the perceptual flatness (1.5/4 on PA-05) but could not diagnose the multi-coherence failure.

### 4.4 STACK LAYER 4: Anti-Scale Model (LARGE -- no PA coverage)

**What Flagship requires:** Richness = semantic density x restraint x spatial confidence. This is the GOVERNING model -- it determines how much of each ingredient produces quality. The three multiplicands:

- **Semantic density:** How much meaning per CSS line. Not "more CSS = richer" but "each CSS line carries load." The Flagship experiment had 1,200 CSS lines but 227 were sub-perceptual micro-typography -- low semantic density. PA has no concept of CSS efficiency.

- **Restraint:** Designed simplicity as compositional contrast. Quiet sections between rich sections make the rich sections richer. PA-09 catches accidental dead space. PA-37 catches overcrowding. NEITHER can distinguish designed restraint from default absence.

- **Spatial confidence:** Negative space as deliberate composition, not leftover gaps. PA-33 assesses ONE area of empty space. Flagship needs the SYSTEM of negative spaces to be varied and purposeful -- different sizes, different backgrounds, different roles.

**The gap:** The anti-scale model is multiplicative -- if ANY multiplicand is zero, richness is zero. A page with high semantic density but zero restraint produces maximalist noise. A page with high restraint but zero spatial confidence produces cautious blandness. PA-05 cannot measure any multiplicand independently, cannot detect their interaction, and cannot diagnose which multiplicand is failing.

### 4.5 Enabling Properties (MODERATE -- partial coverage)

Beyond the 4 stack layers, two additional properties matter for Flagship:

**Transition variety:** Section boundaries use distinct transition types (SMOOTH, BRIDGE, BREATHING, CONTRAST, ECHO, DISSOLVE). PA-34 asks about ONE transition. PA-40 checks spacing consistency. Neither measures the VARIETY of transition types or whether variety is purposeful.

**Design moment density:** Unique visual events distributed across the full scroll depth. PA-45 asks for ONE moment ("a single moment you'd show someone"). Flagship needs a COUNT of distinct moments and their DISTRIBUTION across all thirds of the page.

---

## 5. PROPOSED FLAGSHIP-SPECIFIC PA QUESTIONS (8 Questions)

These form a **Tier 5: Compositional Depth** question set. Under the ALWAYS FLAGSHIP principle (no tier routing, single path at maximum intensity), these questions are part of EVERY Mode 4 audit, not gated behind tier classification. ALWAYS FLAGSHIP eliminates ~542 lines of tier-conditional logic; the PA system should follow suit.

**Epistemic status:** These questions and their numeric thresholds are THEORETICAL -- derived from the compositional intelligence stack, not from observed Flagship artifacts. The first experiment will calibrate whether these thresholds are set correctly. They should be treated as initial hypotheses, not proven gates.

**Stack mapping:** Each question maps to a specific stack layer. The 8 questions cover all 4 layers + 2 enabling properties.

### Tier 5: Compositional Depth (ALWAYS -- Not Tier-Gated)

| ID | Stack Layer | Question | What It Detects |
|----|-------------|----------|-----------------|
| **PA-70** | **Layer 1: 5 Scales** | Zoom into one component (a card, callout, table, or code block). Does its internal design echo the page's overall design language at a smaller scale? Then zoom out to the full page, then to the navigation area. Can you see the SAME design sensibility expressed differently at each zoom level? | **Fractal self-similarity across scales.** Detects whether design intelligence exists at Navigation, Page, Section, Component, and Character scales with the same pattern direction at each. Middle achieved 2 scales; Flagship needs all 5. |
| **PA-71** | **Layer 2: 6 Channels** | Imagine the visual properties as independent instruments: weight (borders, bold text), color (backgrounds, accents), spacing (padding, gaps), type (font-size, style), motion (hover effects, transitions), and texture (borders, backgrounds, patterns). How many of these instruments are actively playing their own part? Are some silent while others carry everything? | **Channel independence and activation.** Detects how many of the 6 CSS channel groups (Chromatic, Typographic, Spatial, Structural, Behavioral, Material) are actively encoding semantic direction. Middle used ~2 channels per boundary; Flagship needs all 6 active. |
| **PA-72** | **Layer 3: Multi-Coherence** | Find a section boundary (where one major area ends and another begins). Count how many visual properties change AT THAT BOUNDARY simultaneously -- does the background shift? Does a border appear? Does the typography change? Does the spacing change? Do ALL of these changes seem to say the SAME THING (e.g., "we are going deeper now" or "this is a new topic")? How many boundaries have 3+ simultaneous changes? | **Multi-coherence detection.** THE signature Flagship quality: >=3 channels shifting together at each boundary in the same semantic direction. The Flagship experiment had 14 mechanisms but zero multi-coherence (all shifts below perception threshold). This question directly targets that failure mode. |
| **PA-73** | **Layer 4: Anti-Scale (density)** | Is the visual richness EFFICIENT -- does every designed element carry meaning, or are there decorations that exist just to look busy? Could you remove any visual treatment without losing information? | **Semantic density** (first multiplicand of anti-scale model). Detects whether CSS lines carry semantic load vs decorative waste. The Flagship experiment spent 227 CSS lines on imperceptible micro-typography -- high line count, zero semantic density. |
| **PA-74** | **Layer 4: Anti-Scale (restraint)** | Is there a section that is DELIBERATELY plainer than its neighbors -- not because the designer ran out of ideas, but because the simplicity makes the surrounding richness more noticeable? Can you tell the difference between "designed quiet" and "forgot to design this part"? | **Restraint as expression** (second multiplicand of anti-scale model). Richness = density x RESTRAINT x confidence. If restraint = 0, the product is maximalist noise. No current PA question distinguishes designed simplicity from default absence. |
| **PA-75** | **Layer 4: Anti-Scale (spatial confidence)** | Look at the empty spaces between sections. Are they all the same kind of emptiness (same size, same background, same feeling), or do different gaps feel different from each other? Does the empty space feel like the designer CHOSE it, or like it's just what's left over? | **Spatial confidence** (third multiplicand of anti-scale model). Detects whether negative space is composed (varied, purposeful, confident) or default (uniform, leftover). PA-33 assesses ONE area; this assesses the SYSTEM of negative spaces. |
| **PA-76** | **Enabling: Transitions** | Focus on the section transitions (boundaries between major areas). Do different boundaries feel different from each other? Can you tell that the designer chose a SPECIFIC KIND of transition for each boundary (some sharp, some gradual, some dramatic, some quiet), or do all transitions feel the same? | **Transition variety.** Flagship needs >=4 perceptibly distinct transition treatments. PA-34 examines ONE transition. PA-40 checks spacing consistency. Neither measures the VARIETY of transition types or whether that variety is purposeful. |
| **PA-77** | **Enabling: Design moments** | Count the number of places where the visual treatment does something UNIQUE -- a combination of color, weight, spacing, or layout that appears nowhere else on the page. How many distinct "design moments" can you identify? Where are they positioned in the scroll -- concentrated at the top, or distributed throughout? | **Design moment density + distribution.** Flagship needs >=5 unique design moments distributed across all thirds of scroll depth. PA-45 asks for ONE moment. This asks for a count and spatial distribution. |

### Scoring Protocol for Tier 5

**No prerequisite gate.** Under ALWAYS FLAGSHIP, Tier 5 is evaluated for every Mode 4 audit. If PA-05 < 4/4, Tier 5 scores still provide diagnostic value (they reveal WHICH stack layers are present even if the floor is not met).

**Tier 5 Assessment:**
- Each PA-70 through PA-77 is scored YES (evidence present and compelling) or NO (absent or ambiguous).
- Each YES/NO MUST include 2-3 sentence justification citing specific visual evidence.
- Scoring thresholds:

| YES Count | Verdict | Meaning |
|-----------|---------|---------|
| 7-8 / 8 | **COMPOSED** | Full compositional depth. All 4 stack layers active and perceptible. |
| 5-6 / 8 | **APPROACHING** | Significant depth. Most stack layers active; 1-2 need strengthening. |
| 3-4 / 8 | **STRUCTURED** | Some compositional intelligence visible. Multiple stack layers absent. |
| 0-2 / 8 | **VOCABULARY ONLY** | Mechanisms deployed but not composed. Stack layers not engaged. |

**Combined verdict matrix (PA-05 x Tier 5):**

| | PA-05 < 3/4 | PA-05 = 3/4 | PA-05 = 4/4 |
|---|---|---|---|
| **Tier 5: 0-2** | NOT SHIP-READY | STYLED (template-quality) | VOCABULARY ONLY (Middle-equivalent) |
| **Tier 5: 3-4** | NOT SHIP-READY | STRUCTURED | STRUCTURED |
| **Tier 5: 5-6** | (unlikely) | APPROACHING | APPROACHING |
| **Tier 5: 7-8** | (impossible in practice) | (unlikely) | **COMPOSED** (Flagship target) |

**Critical integration:** A page scoring PA-05 4/4 + Tier 5 0-2/8 is CORRECTLY classified as VOCABULARY ONLY, not Flagship. This solves the core problem: Middle 4/4 and Flagship 4/4 are no longer confused because Tier 5 measures the stack layers that separate them.

---

## 6. IS THE 9-AUDITOR MODE 4 SETUP SUFFICIENT FOR FLAGSHIP?

### Current Mode 4 Structure (SKILL.md lines 479-513)

9 auditors (A through I) with specialized question assignments:
- A: Impression+Emotion (PA-01,04,05,18,19,20,45)
- B: Readability+Typography (PA-02,06,07,08,29)
- C: Spatial+Proportion (PA-09,10,11,30,31,32,33,50,51,52,53)
- D: Flow+Pacing (PA-12,13,34,35,36)
- E: Grid+Layout (PA-14,15,37,38,39)
- F: Consistency+Rhythm (PA-16,17,40,41)
- G: Metaphor+Ideology (PA-42,43,44)
- H: Responsive (PA-21,22,23,46,47)
- I: Adversarial (PA-26,27,28,48)

### Assessment: Mostly Sufficient, with One Structural Change Needed

The 9-auditor structure is sound for Flagship. The fresh-eyes principle, information isolation, and specialized focus work well. However, Tier 5 questions introduce a problem: **no current auditor specialization covers multi-channel composition, mechanism interaction, or scale-spanning design.**

### Proposed Flagship Mode 4 Modification

For Flagship audits, ADD one auditor specialization (Auditor J) or REDISTRIBUTE Tier 5 questions across existing auditors:

**Option A: Add Auditor J (Compositional Depth)**
- Assigned: PA-70 through PA-77 (all 8 Tier 5 questions)
- Total auditors: 10 (A through J)
- Pro: Clean separation. Compositional depth is evaluated by a single specialist who sees the full page with only Tier 5 questions in mind.
- Con: One more agent to spawn.

**Option B: Distribute Tier 5 Across Existing Auditors**
- Auditor A (Impression): Add PA-70 (design moments) + PA-77 (novelty) -- these are gestalt impressions
- Auditor C (Spatial): Add PA-74 (negative space variety) -- spatial dimension
- Auditor D (Flow): Add PA-71 (transition variety) -- pacing dimension
- Auditor F (Consistency): Add PA-72 (multi-channel composition) + PA-73 (fractal coherence) -- coherence dimension
- Auditor G (Metaphor): Add PA-75 (restraint) + PA-76 (mechanism interaction) -- compositional intent
- Pro: No additional agent. Questions distributed to thematically aligned auditors.
- Con: Auditors already have 4-11 questions each. Adding more may dilute focus.

**Recommendation: Option A for Flagship audits.** The computational cost of one additional agent is trivial compared to the information value of having a dedicated compositional depth specialist. The specialist sees the same screenshots as all other auditors but evaluates ONLY the Tier 5 dimension, which prevents their assessment from being contaminated by lower-tier concerns.

### Additional Flagship Mode 4 Change: Weaver Must Score Both Tiers

The Weaver-Synthesizer currently produces a single PA-05 verdict. For Flagship, it must produce TWO verdicts:

1. **PA-05 Standard:** 0-4/4 (floor detection, same as Middle/Ceiling)
2. **Tier 5 Compositional Depth:** 0-8/8 (ceiling detection, Flagship only)

The combined verdict uses a 2x2 matrix:

| | PA-05 < 4/4 | PA-05 = 4/4 |
|---|---|---|
| **Tier 5 < 5/8** | NOT SHIP-READY | MIDDLE/CEILING EXCELLENT |
| **Tier 5 >= 5/8** | (impossible -- Tier 5 requires PA-05 = 4/4) | **FLAGSHIP COMPOSED** |

---

## 7. THE "WRONG QUESTION" PROBLEM -- DOES PA-05 4/4 EVEN MATTER?

File 13-wrong-question.md raises a devastating challenge: **PA-05 4/4 might be the wrong target entirely.** Key points that must be addressed:

### 7.1 PA-05 4/4 Is a Low Bar

The Middle-tier cleared 4/4 with what the auditor called "B+ effort." The sub-criteria thresholds are achievable by moderate competence. This means: **the project has been treating 4/4 as an aspirational target when it is actually a minimum competence marker.**

**How Tier 5 addresses this:** Tier 5 redefines the target. The new aspirational target is PA-05 4/4 + Tier 5 7-8/8. PA-05 4/4 remains the floor; Tier 5 becomes the ceiling detector. This separates the two problems: (1) preventing catastrophic failure (PA-05's job) and (2) detecting compositional excellence (Tier 5's job).

### 7.2 Content-Form Resonance Is Unexamined

All experiments used different content. Content structure may be the binding constraint -- uniform prose resists visual variety regardless of CSS skill. A page of uniform academic prose may have a PA-05 ceiling below 4/4 regardless of treatment.

**Tier 5 cannot fix this.** If the content resists compositional depth, Tier 5 questions will correctly report "NO" on most dimensions. This is the RIGHT outcome -- it prevents false positives. The implication is that Flagship content selection must include structural variety as a prerequisite. Uniform prose should not be used for Flagship experiments because it confounds content quality with compositional quality.

### 7.3 N=1 Makes All Scores Unreliable

With one experiment per configuration, all PA-05 scores have unknown confidence intervals. Middle's 4/4 might be a lucky draw.

**Tier 5 partially addresses this through granularity.** An 8-question Tier 5 set provides more signal than a single 4-point score. Even with N=1, an artifact scoring 7/8 on Tier 5 gives more information than one scoring 4/4 on PA-05, because the 8 dimensions reveal WHERE compositional depth is present and WHERE it is absent. The diagnostic value is higher even if the precision is not.

### 7.4 The Qualitative Narrative Problem

The PA auditor's qualitative narrative ("B+ effort, professionally stiff") was more informative than the 4/4 score. The score compressed rich perceptual assessment into a lossy 4-point number.

**Recommendation for Tier 5:** Each YES/NO on PA-70 through PA-77 must be accompanied by a 2-3 sentence justification. The Weaver synthesizes these narratives into a QUALITATIVE Flagship assessment paragraph in addition to the numeric score. The paragraph is the primary output; the number is a summary index.

---

## 8. SUMMARY OF FINDINGS

### Direct Answers to the 6 Questions

**Q1: What does PA-05 "Does this page feel designed?" actually measure?**
A floor. PA-05 detects whether a page crosses the "designed threshold" -- the line between template-following and intentional composition. It uses 4 binary sub-criteria (non-default elements, padding ratio, hierarchy under blur, compositional CSS percentage) that are clearable by moderate competence. It does NOT measure compositional depth above this threshold.

**Q2: Middle scored 4/4. Is that the SAME quality as what Flagship 4/4 should be?**
No. Middle 4/4 is vocabulary fluency (12 mechanisms correctly deployed across 5 categories). Flagship 4/4 should be compositional mastery (mechanisms in conversation, multi-channel coherence, metaphor embodied structurally, designed negative space, multi-scale fractal depth). The auditor described Middle 4/4 as "B+ competence" -- a verdict that should never apply to Flagship. Note: Flagship 4/4 is THEORETICAL -- we have never observed it. We are defining what it SHOULD be from the compositional intelligence framework, not from any existing artifact.

**Q3: Can PA-05 even distinguish Middle 4/4 from Flagship 4/4?**
No. PA-05 has 4 binary sub-criteria with a maximum of 4/4. There is no score above 4/4. A page that barely clears all thresholds scores identically to one that far exceeds them. The metric is structurally incapable of making the distinction. This is a driving-test vs Formula-1 problem.

**Q4: What additional criteria distinguish Flagship quality beyond "feels designed"?**
Seven properties: (1) multi-channel coherence, (2) scale-spanning design, (3) designed negative space, (4) transition variety, (5) mechanism interaction at boundaries, (6) restraint as expression, (7) design moment density and distribution. See Section 4 for full analysis.

**Q5: Should there be Flagship-specific PA questions? Draft 5-8 concrete questions.**
Yes. 8 questions drafted as Tier 5: Compositional Depth (PA-70 through PA-77). See Section 5 for full questions, scoring protocol, and integration with existing PA-05. Tier 5 is gated behind Flagship classification -- Middle/Ceiling audits never see these questions.

**Q6: Is the 9-auditor Mode 4 setup sufficient, or does Flagship need different auditor specializations?**
Mostly sufficient. Recommend adding Auditor J (Compositional Depth) for Flagship audits to handle all 8 Tier 5 questions. The Weaver must produce a 2-layer verdict: PA-05 standard score + Tier 5 compositional depth score. See Section 6 for full specification.

---

## 9. WHAT THIS MEANS FOR THE FLAGSHIP 4/4 RECIPE

The PA analysis produces 3 implications for the recipe team:

### Implication 1: The Recipe Must Target Tier 5, Not PA-05

PA-05 4/4 is necessary but not sufficient. The recipe should be designed to produce artifacts that score well on PA-70 through PA-77, not just PA-05a through PA-05d. Concretely: the recipe must guide the builder toward multi-channel transitions, design moment density, negative space variety, and mechanism interaction -- not just "deploy 14 mechanisms across 5 categories."

### Implication 2: Verification Needs Two Layers

The Flagship experiment's programmatic gates all passed while the perceptual audit failed catastrophically. Any future experiment needs:
- Layer 1: Programmatic gates (mechanism count, channel coverage, CSS metrics) -- necessary but not sufficient
- Layer 2: Tier 5 perceptual assessment -- the actual quality signal

### Implication 3: Content Selection Is a PA Concern

If content lacks structural variety, even a perfect builder cannot produce Tier 5 scores. The recipe must either (a) select content with inherent structural variety or (b) include a content restructuring step (adding pullquotes, converting lists to tables, extracting callouts) as part of the build process. Uniform prose is a confounding variable that suppresses quality independent of recipe quality.

---

**END OF PA ANALYSIS**
