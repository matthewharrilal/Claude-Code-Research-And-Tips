# Pipeline v3: The Dispositional Layer -- Complete Design

**Author:** dispositional-designer (Opus 4.6)
**Date:** 2026-02-22
**Task:** #3 -- Design the full dispositional recipe layer for Pipeline v3
**Sources:** Reports 58 (dispositional recipe), 57 (compositional fluency), 55 (flagship crystallization), 41 (Opus native intelligence), 45 (beyond-eight integration)

---

## EXECUTIVE SUMMARY

The dispositional layer is the answer to the specification paradox: specifying STRUCTURAL concepts increases quality; specifying CONTEXTUAL concepts decreases quality by triggering compliance mode. The dispositional layer does not specify quality. It activates the builder's native compositional judgment -- the 60-70% of design quality that comes from the model itself (Report 41).

This document delivers: 8 dispositional instructions (expanded from the original 5), the full 4-tier hybrid format, model-specific variants, pipeline injection timing, verification methods, risk analysis, the relationship to the conventions brief, and human design education parallels that inform every design decision.

**The central claim:** A dispositional instruction works by naming a PERCEPTUAL SHIFT that redirects the builder's attention from rule-compliance to composition-experience. The shift is the mechanism. The improved quality is the effect.

---

## 1. THE EIGHT DISPOSITIONAL INSTRUCTIONS

The original D-01 through D-05 (Report 58) are retained with refinements. Three new instructions (D-06, D-07, D-08) address gaps identified by cross-referencing Reports 57 (compositional fluency registers), 55 (flagship crystallization), and 45 (structural vs contextual concepts).

### Design Principles for All Instructions

Each instruction follows the human design maxim structure identified in Report 58:
1. Name a perceptual shift
2. The shift redirects attention from mechanical to experiential
3. The redirected attention produces better compositional decisions

Each instruction must be:
- **Dispositional** (describes HOW TO BE, not WHAT TO DO)
- **Testable** (the OUTPUT reveals whether the builder engaged)
- **Non-prescriptive** (does not specify CSS values or technique choices)
- **Failure-grounded** (addresses a specific observed failure mode)

---

### D-01: Content-Register Reading

> Before writing CSS for any section, read the content of that section. Ask: what is the emotional register of this content? Analytical? Reflective? Urgent? Procedural? Your CSS should put the reader in that register before they read a single word.

**Perceptual shift:** From "what CSS does this section need?" to "what does this content FEEL like?"

**Failure addressed:** The Flagship's uniform treatment across 14 sections. The builder wrote CSS section-by-section without asking what each section demanded. Result: identical typography, spacing, and border treatment everywhere.

**Testable output:** Compare CSS variation across sections. A D-01-engaged builder produces measurably different font-weight, spacing, and border treatment per section. A non-engaged builder produces uniform treatment. Specifically: standard deviation of section-level padding values should be > 8px; at least 2 sections should differ in font-weight from the default.

**Model interaction:** Opus interprets this as permission to exercise aesthetic judgment per section. Sonnet may need the supplementary procedural scaffold (Section 5) to translate "feel the register" into concrete action.

---

### D-02: Room Perception at Boundaries

> After completing each zone, scroll back to the previous zone boundary. A viewer arriving here should perceive that they are entering a NEW room, not the same room with different furniture. If the two zones could be swapped without the reader noticing, one of them needs rethinking.

**Perceptual shift:** From "did I change the background color?" to "does this FEEL like a different place?"

**Failure addressed:** The Flagship's zone boundaries differed by 1-8 RGB points -- technically different, experientially identical. 9/9 Mode 4 PA auditors flagged imperceptible boundaries.

**Testable output:** Measure RGB deltas at zone boundaries. D-02-engaged builders produce deltas of 25-50 RGB (the range that reads as "new room"). Non-engaged builders produce 15-20 RGB (the minimum compliant range). Additionally, at least 3 CSS channels (not just background) should shift at each boundary.

**Why "room" and not "zone":** The metaphor of rooms activates spatial imagination. "Zone" is technical jargon that activates categorization behavior. Rooms have atmosphere, temperature, purpose. Zones have boundaries and labels.

---

### D-03: The Signing Frame

> You are building a page that someone will put their name on. Not a page that passes an audit. Every time you reach for a CSS property, ask: does this choice make the page more worth signing? If a choice is invisible at 100% zoom, it is not worth signing. Delete it and spend those lines on something the reader will actually see.

**Perceptual shift:** From "does this satisfy the specification?" to "would I put my name on this?"

**Failure addressed:** The Flagship devoted 238 CSS lines to sub-perceptual variation (letter-spacing 0.001-0.01em, background deltas of 1-8 RGB). 81% of intentional CSS variations were imperceptible. D-03 installs a continuous evaluative stance that makes invisible work feel wasteful.

**Testable output:** Count CSS lines devoted to sub-perceptual variation (letter-spacing < 0.025em, background deltas < 15 RGB, font-size differences < 2px between adjacent elements). D-03-engaged builders should produce near-zero sub-perceptual CSS.

**Why "signing" works:** Professional pride is a more reliable quality driver than rule-following. The signing frame activates ownership, which activates the care that produces terminal craft (Report 55's "visual generosity").

---

### D-04: The Second-Half Moment

> Somewhere in the second half of this page, the reader should encounter a moment that makes them pause. Not because it is loud, but because it is considered. A callout box where the border weight, background tint, and typography conspire to create exactly the right emphasis. A code block that looks like it belongs in a technical journal. A data display that turns numbers into understanding. Find that moment. Protect it. Make sure the second half earns the first half's promise.

**Perceptual shift:** From "build sections uniformly" to "compose an arc with a climactic point."

**Failure addressed:** The Flagship's second half was a barren scroll of uniform sections. Builders naturally front-load visual interest (the "second half coasts" problem from the beauty definition). Report 55 identifies the emotional arc: arrival -> hook -> engagement -> surprise -> deepening -> climax -> release -> closure. The Flagship achieved: arrival -> monotony -> void.

**Testable output:** Identify the most visually distinctive element in the bottom 50% of the page. Rate its mechanism density (number of CSS channels contributing to it). D-04-engaged builders produce a bottom-half peak with 3+ mechanisms combining. Non-engaged builders have no distinguishable bottom-half peak.

**Why "conspire" matters:** The word "conspire" implies that multiple CSS properties work TOGETHER toward a single effect. This is compositional fluency (Report 57) invoked through language, not specification. A specification would say "deploy 3+ mechanisms below 50% scroll." D-04 instead paints a picture that activates the builder's compositional imagination.

---

### D-05: The Reader's Scroll

> When you finish, scroll the entire page at the speed a reader would. Not to check rules. Not to verify thresholds. To experience the page as it will be experienced. If any stretch feels like waiting, something is wrong. If the end arrives suddenly, something is missing. If you feel the page could have been generated by a template, start over on the weakest section.

**Perceptual shift:** From "verify compliance" to "experience the page as a reader."

**Failure addressed:** The Flagship's builder never scrolled as a reader. It verified rules one by one. Report 58 argues that DESIGNED-ness is a property of what the builder ATTENDS TO. A builder attending to rules produces compliance. A builder attending to the reading experience produces design.

**Testable output:** Self-initiated revisions after the first complete pass. D-05-engaged builders revise more sections because the experiential scroll reveals problems that rule-checking does not. Compare revision count between D-05-present and D-05-absent builds.

**The "template" trigger:** The instruction to "start over on the weakest section" if the page feels templated activates the continuation-bias override (Report 55). LLMs naturally continue rather than revise. D-05 gives explicit permission -- even a mandate -- to revise.

---

### D-06: Negative Space as Shape (NEW)

> The space between your sections is content. A 64px gap says "breathe here." A 24px gap says "these ideas are connected." A 120px gap says "something went wrong." Design your gaps with the same intentionality as your elements. Treat every margin and padding as a compositional decision, not a default.

**Perceptual shift:** From "spacing is a parameter to set" to "spacing IS the composition's skeleton."

**Failure addressed:** Two distinct failure modes. (1) The Flagship's stacked gaps of 210-276px -- the builder did not perceive accumulated whitespace as a design problem. (2) CD-006's uniform section padding (all 64px) -- the builder used spacing for consistency rather than composition. Report 57 identifies that CD-006 achieves structural but not atmospheric compositional fluency partly because section-level padding is uniform rather than composed.

**Human design parallel:** "See negative space as shape" (Report 58, Section 4). Trained designers perceive spaces between elements as active compositional participants. Untrained builders treat margins as defaults.

**Testable output:** Count distinct padding values across sections. D-06-engaged builders produce 3+ distinct section padding values with semantic rationale (tighter for urgent content, generous for reflective content). Non-engaged builders produce uniform padding or binary tight/generous.

**Sonnet guardrail:** "This does not mean fill every gap with content. It means choose gap sizes deliberately. An empty 64px is not a void if it was chosen with purpose."

---

### D-07: Edge Intentionality (NEW)

> Every border you include -- and every border you omit -- communicates the relationship between elements. A 4px left border says "pay attention, this is marked." A 1px bottom border says "these items are listed, not separated." No border says "these elements flow into each other." If you cannot articulate what a border communicates, remove it.

**Perceptual shift:** From "borders are optional decoration" to "border presence/absence is a compositional decision."

**Failure addressed:** The Flagship used ZERO borders in the main content -- not a single border-left, border-top, or border-bottom. The builder had no instruction to use borders, and because borders are optional, none appeared. The 3-tier border system (4px/3px/1px) existed in the vocabulary but was never deployed because no specification REQUIRED borders. D-07 reframes border presence as an active communicative choice.

**Human design parallel:** "Every edge is a decision" (Report 58, Section 4). The boundary between any two elements is a conscious design choice -- its crispness, weight, presence, or absence.

**Testable output:** Count border instances in the main content area. D-07-engaged builders produce at least 3 border deployments with at least 2 distinct weights. Non-engaged builders tend toward either zero borders (the Flagship failure) or uniform borders everywhere.

**Why "articulate" matters:** The requirement to articulate what a border communicates forces the builder to have a REASON for each border. This prevents both zero-border (no reason to add) and border-everywhere (no reason to omit) failure modes.

---

### D-08: The Skeleton Test (NEW)

> At any point during your build, lean back. Let the details blur. What remains is your composition's skeleton -- the distribution of mass, color, and void. If the skeleton is strong (clear zones, varied density, confident proportions), the details will serve it. If the skeleton is weak, no amount of detail will save it. Build the skeleton first. Then dress it.

**Perceptual shift:** From "build detail-first" to "build structure-first, then detail."

**Failure addressed:** Report 57's analysis of CD-006 reveals that its mechanisms are "vocabulary exhibits" rather than compositional elements -- four grid patterns demonstrated in sequence but not composed in relationship. Report 55's crystallization identifies that Flagship requires a governing logic connecting ALL mechanisms. Builders who start with detail produce locally correct sections that do not cohere globally. D-08 installs the habit of checking global composition before local detail.

**Human design parallel:** "Squint and see the big shapes" (Report 58, Section 4). The conventions brief already includes "The Squint" as a verification step (Section 11, Question 1), but the brief frames it as a POST-BUILD checkpoint. D-08 reframes it as a CONTINUOUS disposition: evaluate composition throughout the build, not only at the end.

**Testable output:** At 25% zoom, the page should show a rhythmic pattern of light and dark bands with varied density. At least one dark zone should be visible. The first viewport should show both header and content. The last viewport should show a composed footer (Report 55, Section 10 criterion 6). Compare squint-test results between D-08-present and D-08-absent builds.

---

### Summary: The Eight Instructions and What They Address

| ID | Name | Perceptual Shift | Failure Addressed | Register |
|----|------|-----------------|-------------------|----------|
| D-01 | Content-Register Reading | Section needs -> content feeling | Uniform treatment | Atmospheric |
| D-02 | Room Perception | Changed value -> different place | Imperceptible boundaries | Atmospheric |
| D-03 | The Signing Frame | Spec compliance -> ownership | Sub-perceptual CSS | Terminal craft |
| D-04 | Second-Half Moment | Uniform build -> composed arc | Second-half barrenness | Emotional arc |
| D-05 | Reader's Scroll | Rule verification -> experience | No reader-perspective | Whole-page |
| D-06 | Negative Space as Shape | Default spacing -> composed spacing | Whitespace voids / uniformity | Spatial |
| D-07 | Edge Intentionality | Optional decoration -> active choice | Zero borders | Structural |
| D-08 | The Skeleton Test | Detail-first -> structure-first | Local exhibits, no global logic | Compositional |

**Coverage of Report 55's 7-point Flagship definition:**

1. Single pervading metaphor governing all CSS -> D-01 (content-form resonance) + D-08 (governing skeleton)
2. Compositional fluency (CCS >= 0.30) -> D-07 (edge intentionality) + D-08 (skeleton coherence)
3. Emotional arc -> D-04 (second-half moment) + D-05 (reader's scroll)
4. Content-form resonance through metaphor -> D-01 (content-register reading)
5. Semantic restraint -> D-03 (signing frame: delete invisible CSS) + D-06 (deliberate spacing)
6. 5-second squint test -> D-08 (skeleton test)
7. Terminal craft -> D-03 (signing frame: worth-signing quality)

---

## 2. INTERACTION WITH THE 73-LINE MINIMAL CONSTRAINT SET

Report 45 establishes the structural/contextual binary: 18 structural concepts survive compression perfectly; 22 contextual concepts must be regenerated by the builder. The dispositional layer addresses the 22 contextual concepts. The 73-line minimal constraint set addresses the 18 structural concepts.

### The Separation Principle

**Constraints tell the builder WHAT THE WORLD IS.**
**Dispositions tell the builder HOW TO BE IN THAT WORLD.**

Constraints close off catastrophic failure modes (border-radius violations, container width errors, sub-perceptual CSS). They are the physics of the design system -- non-negotiable, binary, testable.

Dispositions activate compositional judgment within the constraint space. They are not rules but cognitive frames that determine HOW the builder applies the constraints.

### Interaction Rules

1. **Constraints override dispositions.** If D-01 says "feel the register" but the constraint says "border-radius: 0," the constraint wins. Dispositions operate WITHIN constraints, never outside them.

2. **Dispositions interpret constraints.** The constraint "adjacent zone backgrounds >= 15 RGB delta" is a FLOOR. D-02 (room perception) interprets this floor as "perceivable room change," which typically means 25-50 RGB -- well above the constraint but not CONTRADICTING it.

3. **Constraints are read FIRST, dispositions read LAST.** This is the recording studio model from Report 58: install the constraints (isolation booth), provide the vocabulary (instruments), give the workflow (procedure), THEN activate composing mode (disposition). By the time the builder reads D-01-D-08, it has already internalized what it CANNOT do and what materials it HAS. The dispositions then govern how it USES those materials.

4. **No disposition creates a NEW constraint.** D-04 says "somewhere in the second half, create a moment." This is a creative mandate, not a measurable gate. The programmatic gates test structural constraints; the PA audit evaluates dispositional engagement.

### Where They Overlap

Some constraints and dispositions address the same failure mode from different angles:

| Failure Mode | Constraint (structural) | Disposition (contextual) |
|-------------|------------------------|------------------------|
| Imperceptible backgrounds | >= 15 RGB delta | D-02: "perceive a new room" |
| Whitespace voids | Stacked gap <= 120px | D-06: "120px gap says something went wrong" |
| Sub-perceptual CSS | Letter-spacing >= 0.025em | D-03: "invisible at 100% zoom = delete it" |
| No borders | >= 3 distinct border configs | D-07: "every edge is a decision" |
| Uniform sections | >= 3 channel shifts per boundary | D-01: "feel the register" |

The constraint catches the FLOOR violation. The disposition prevents the builder from AIMING at the floor. Together they produce output that is both compliant AND composed.

### The 73 Lines + 40 Lines = 113-Line Core

The full builder-facing specification in Pipeline v3:
- **Lines 1-15:** Hard physics (identity constraints, perception thresholds) -- Tier 1
- **Lines 16-30:** Build sequence (procedural steps in order) -- Tier 2
- **Lines 31-38:** CSS vocabulary (concrete starting values) -- Tier 3
- **Lines 39-73:** Content-specific parameters (from TC brief: zones, metaphor, density direction) -- Tier 3.5
- **Lines 74-113:** Dispositional instructions (D-01 through D-08) -- Tier 4

Total: ~113 lines. Compare to: Flagship master prompt (963 lines), Middle recipe (100 lines), Gas Town conventions brief (610 lines).

---

## 3. THE 4-TIER HYBRID FORMAT IN FULL DETAIL

### Tier Architecture

```
TIER 1: HARD PHYSICS (15 lines)
  Purpose: Close off catastrophic failure modes
  Content: Soul constraints, perception thresholds, locked values
  Survival class: CODE-AS-SPECIFICATION (1:1 compression, zero loss)
  Builder mode activated: UNDERSTANDING (learning the world's laws)

TIER 2: BUILD SEQUENCE (15 lines)
  Purpose: Reduce cognitive load with ordered workflow
  Content: Sequenced steps from content-read through gate-check
  Survival class: RECIPE REFORMATTING (~5:1, lossy but functional)
  Builder mode activated: PLANNING (knowing what to do when)

TIER 3: CSS VOCABULARY (8 lines) + CONTENT PARAMETERS (~35 lines from TC)
  Purpose: Provide concrete starting points, prevent blank-page paralysis
  Content: Zone backgrounds, border tiers, typography values, component DNA
  Survival class: CLOSED VOCABULARIES (1:1 compression)
  Builder mode activated: EQUIPPING (having the instruments)

TIER 4: DISPOSITION (40 lines)
  Purpose: Activate compositional judgment
  Content: D-01 through D-08
  Survival class: MODEL CALIBRATION (sets cognitive mode)
  Builder mode activated: COMPOSING (the target mode for quality output)
```

### Why This Order Matters

**Tier 4 MUST come last.** Report 58 explains: if disposition comes first, the builder starts composing without having internalized constraints. Result: soul violations, container width errors. The disposition activates native capability, but native capability does not include knowledge of THIS system's specific constraints. Tiers 1-3 install system knowledge; Tier 4 activates the builder's judgment to apply that knowledge compositionally.

**Tier 1 MUST come first.** Constraints are the walls of the recording studio. They must be built before the musician enters. If constraints come after vocabulary, the builder may have already committed to approaches that violate constraints.

**Tier 3 before Tier 4, not after.** The builder needs concrete starting values BEFORE entering composing mode. Without Tier 3, the dispositional instructions say "compose freely" -- but with what? Tier 3 gives the builder instruments. Tier 4 says "now play."

### Full Tier 1: Hard Physics (15 lines)

```
HARD PHYSICS -- Non-negotiable. These are the world's laws.
  Container: 940-960px centered. This is the single most common failure mode.
  border-radius: 0 everywhere. box-shadow: none. No gradients.
  Fonts: Instrument Serif (headings), Inter (body), JetBrains Mono (code)
  Borders: 4px structural, 3px accent, 1px separator. No 2px.
  Adjacent zone backgrounds: >= 15 RGB delta on at least one channel
  No spacing value > 96px. No stacked gap > 120px total.
  No letter-spacing below 0.025em. Either >= 0.03em or 0.
  Palette: #FEF9F5 cream, #1A1A1A near-black, #E83025 primary red
  Warm tones only for backgrounds (R >= G >= B)
  5 accent colors: blue #4A90D9, green #4A9D6B, coral #C97065,
    amber #D97706, purple #7C3AED -- reserved for callouts only
  h3 headings: always italic Instrument Serif
  Tables: no vertical borders
  Focus-visible: must be styled for keyboard navigation
  Opacity: 1 on all containers. No semi-transparent backgrounds.
```

### Full Tier 2: Build Sequence (15 lines)

```
BUILD SEQUENCE -- Do these in order.
  1. Read the content fully. Note where it shifts topic, mode, intensity.
  2. Read mechanism-catalog.md and components.css. These are your instruments.
  3. Write a conviction statement: your metaphor, your zone count,
     your coherence direction (which channels shift at each boundary).
  4. Build HTML skeleton first: landmarks, skip-link, zones, component classes.
  5. Build CSS zone-by-zone. At each zone boundary, set ALL shifting channels
     together: background + typography + spacing + borders. Not one at a time.
  6. Deploy components within zones. Each component must earn its place
     by serving the content -- no decoration without function.
  7. At midpoint (~50% built), render and scroll the page at reading speed.
     Strengthen the weakest section before continuing.
  8. After completion, answer the Five Questions (squint, transition, second
     half, restraint, signing). Fix what fails.
  9. Run gate-runner.js. Fix any programmatic failures.
```

### Full Tier 3: CSS Vocabulary (8 lines) + Content Parameters (~35 lines)

```
CSS VOCABULARY -- Your starting palette. Depart from these with intention.
  Zone backgrounds: #FEF9F5, #F0EBE3, #FFFFFF, #FAF0E0 (choose 3-5)
  3-tier border: callout 4px left, structural 3px, separator 1px
  Typography: body 16px/1.7, large 18px/1.6, headings 24-48px Instrument Serif
  Component DNA: sparse LABEL (0.75rem, 600, uppercase, 0.1em tracking)
                  + dense BODY (1rem, 400, normal, 1.7 line-height)
  Drop caps: ::first-letter 3.5em Instrument Serif #E83025, max 2 sections
  Code blocks: bg #1A1A1A, 6 syntax colors, JetBrains Mono
  Layouts: golden-ratio 2-col, 4-col bento, 3-col spokes (use >= 2)

CONTENT PARAMETERS -- From TC analysis. Specific to THIS page.
  [35 lines injected by TC pipeline: zone names, metaphor, density direction,
   zone-specific CSS values, mechanism selections, boundary shift tables]
```

### Full Tier 4: Disposition (40 lines)

```
DISPOSITION -- How to be while building this page.

You are composing a page, not implementing a specification.
The constraints above are the physics of this world. Within those physics,
you are the composer. Your aesthetic judgment makes the decisions that
no specification can prescribe.

D-01: Before writing CSS for any section, read its content. Feel its register.
Analytical content wants precision. Reflective content wants breathing room.
Urgent content wants compression. Let the content's emotional weight
determine your CSS choices for that section.

D-02: After each zone, scroll back to the boundary. A reader should perceive
a new room, not the same room with different furniture. If the zones could
be swapped without the reader noticing, rethink.

D-03: You are building a page someone will sign their name to. If a CSS choice
is invisible at 100% zoom, delete it. Spend those lines on something
the reader will actually see.

D-04: Somewhere in the second half, create a moment where the reader pauses.
Not because it is loud -- because it is considered. Multiple CSS properties
should conspire to create exactly the right emphasis.

D-05: When finished, scroll the entire page at reading speed. If any stretch
feels like waiting, fix it. If the end arrives suddenly, something is
missing. If it feels like a template, rework the weakest section.

D-06: The space between your sections is content. 64px says breathe.
24px says these are connected. 120px says something went wrong.
Design your gaps with the same intentionality as your elements.

D-07: Every border you include -- and every border you omit -- communicates.
4px left: pay attention. 1px bottom: listed, not separated. No border:
these elements flow. If you cannot say what a border communicates, remove it.

D-08: At any point, lean back and blur the details. What remains is your
skeleton: mass, color, void. If the skeleton is strong, details will serve
it. If weak, no detail saves it. Build the skeleton first.

You have the full vocabulary. Use it with restraint. Restraint means:
every element earns its place by serving the content.
```

### Total Line Count: ~113 lines

| Tier | Lines | % | Purpose |
|------|-------|---|---------|
| Tier 1: Hard Physics | 15 | 13% | Prevent catastrophic failures |
| Tier 2: Build Sequence | 15 | 13% | Reduce cognitive load |
| Tier 3: CSS Vocabulary | 8 | 7% | Provide starting materials |
| Tier 3.5: Content Params | ~35 | 31% | Content-specific values from TC |
| Tier 4: Disposition | 40 | 36% | Activate compositional judgment |
| **TOTAL** | **~113** | **100%** | |

Compare to prior approaches:
- Flagship master prompt: 963 lines (8.5x larger), PA-05 1.5/4
- Gas Town conventions brief: 610 lines (5.4x larger), PA-05 ~3.5/4
- Middle experiment recipe: 100 lines (0.9x), PA-05 4/4

The hybrid format targets the sweet spot: enough structure for reliability, enough disposition for composition.

---

## 4. MODEL-SPECIFIC VARIANTS

### The Interaction Matrix (from Report 58)

| | Specification Mode | Dispositional Mode |
|---|---|---|
| **Opus** | Competent compliance (2.5/4). Could compose but won't -- mode says "comply." | Full composition (3.5-4.0/4). Disposition gives permission to engage native 60-70% capability. |
| **Sonnet** | Precise compliance (1.5-2.5/4). Executes every rule exactly. No unprompted creativity. | Unpredictable (1.5-3.0/4). May ignore disposition as non-actionable OR over-interpret it. |

### Opus Variant: Full Dispositional (113 lines)

Opus receives the complete 4-tier hybrid exactly as described in Section 3. No modifications needed. Opus treats Tier 4 as PERMISSION to engage native aesthetic judgment. The disposition activates what Opus already has.

**Predicted output range:** PA-05 3.0-4.0/4. The range is wider than specification (which clusters at 2.0-2.5) because dispositional instructions produce varied output -- but the FLOOR is higher.

### Sonnet Variant: Procedural-Dispositional Hybrid (130 lines)

Sonnet receives the same Tiers 1-3 but a MODIFIED Tier 4 that scaffolds each disposition with a concrete procedural step. The dispositions are retained as MOTIVATION; the procedures translate them into actionable steps.

```
DISPOSITION + PROCEDURE -- How to work, and why.

You are composing a page, not implementing a specification.

D-01 + P-01:
  PROCEDURE: For each section, write one sentence describing its emotional
  register (e.g., "analytical," "urgent," "reflective") in a CSS comment.
  Then choose font-weight, spacing, and border treatment to match that register.
  MOTIVATION: Your CSS should put the reader in the section's register before
  they read a single word.

D-02 + P-02:
  PROCEDURE: After writing each zone's CSS, compute the RGB delta between
  this zone's background and the previous zone's. If delta < 25 on all
  channels, increase the dominant channel by 15. Check that at least 3 CSS
  properties differ between zones.
  MOTIVATION: A reader arriving at this boundary should feel they are entering
  a new room, not the same room with different furniture.

D-03 + P-03:
  PROCEDURE: After completing all CSS, search for any letter-spacing < 0.025em,
  background deltas < 15 RGB, or font-size differences < 2px between adjacent
  elements. Delete or strengthen each instance.
  MOTIVATION: If a CSS choice is invisible at 100% zoom, it is not worth
  keeping. Spend those lines on something visible.

D-04 + P-04:
  PROCEDURE: Below the 50% scroll mark, identify one element and apply 3+
  mechanisms to it (e.g., a callout with distinctive border + background +
  typography + internal spacing). This is your "designed moment."
  MOTIVATION: The second half should earn the first half's promise. One
  considered moment where multiple CSS properties conspire.

D-05 + P-05:
  PROCEDURE: After the first complete pass, scroll the page top-to-bottom
  at 2 seconds per viewport. Note any stretch where nothing changes visually
  for > 300px of scroll. Fix those stretches.
  MOTIVATION: The page should be experienced as a reader experiences it.
  Waiting is a design failure.

D-06 + P-06:
  PROCEDURE: List all section padding values. If more than 60% are identical,
  vary at least 2 based on content register (tighter for dense content,
  more generous for reflective content).
  MOTIVATION: Spacing is composition. Every gap should be chosen, not defaulted.

D-07 + P-07:
  PROCEDURE: Count border instances in the main content. If fewer than 3,
  add borders where they communicate hierarchy (callouts, section boundaries,
  table headers). If more than 10, remove any that are purely decorative.
  MOTIVATION: Borders communicate relationships. Their presence or absence
  should be intentional.

D-08 + P-08:
  PROCEDURE: View the page at 25% zoom (or equivalent). Verify: at least
  2 density bands are visible, header and footer are distinct, no single
  density extends more than 40% of the page height.
  MOTIVATION: The composition's skeleton must be strong before details matter.
```

**Sonnet variant is ~130 lines** (17 lines longer than Opus variant). The procedures translate dispositions into concrete checks Sonnet can execute. The motivations retain the dispositional language so that if Sonnet CAN engage compositionally, it has the frame to do so.

**Predicted output range:** PA-05 2.5-3.5/4. Lower ceiling than Opus (Sonnet cannot compose at the same level) but higher floor than specification-only (procedures prevent the worst failure modes).

### Model Selection Logic

```
IF page_tier = FLAGSHIP:
  model = Opus
  recipe = Full Dispositional (113 lines)
  rationale: Flagship requires compositional judgment only Opus provides

IF page_tier = MIDDLE:
  model = Sonnet (cost-efficient) OR Opus (if budget allows)
  recipe = Procedural-Dispositional (130 lines) for Sonnet
         OR Full Dispositional (113 lines) for Opus
  rationale: Middle can be achieved through procedural recipe

IF Opus unavailable:
  model = Sonnet
  recipe = Procedural-Dispositional (130 lines)
  expected_ceiling = PA-05 3.0-3.5/4 (sufficient for Middle, borderline Ceiling)
```

---

## 5. PIPELINE INJECTION TIMING

### When in the Pipeline the Dispositional Layer Appears

```
PIPELINE STAGE MAP

Stage 0: Content Analysis (TC Pipeline)
  → Content file read, emotional registers identified, zone structure planned
  → OUTPUT: TC brief with zone names, density direction, mechanism selections
  → DISPOSITION: None yet. TC operates in ANALYZING mode.

Stage 1: Constraint Assembly
  → Soul constraints, perception thresholds, locked values assembled
  → Tier 1 (Hard Physics) assembled
  → DISPOSITION: None yet. Constraints are pre-composed.

Stage 2: Recipe Assembly
  → Build sequence (Tier 2) and CSS vocabulary (Tier 3) assembled
  → TC brief content parameters injected as Tier 3.5
  → DISPOSITION: None yet. Recipe is structural.

Stage 3: Dispositional Injection ← HERE
  → Tier 4 (D-01 through D-08) appended
  → Model-specific variant selected (Opus full / Sonnet procedural)
  → The complete 4-tier hybrid recipe is now assembled

Stage 4: Builder Deployment
  → Builder agent receives the complete hybrid recipe
  → Builder reads Tiers 1-3 (internalizing constraints + vocabulary)
  → Builder reads Tier 4 (activating compositional mode)
  → Builder begins execution in COMPOSING mode
  → DISPOSITION: Active throughout the build

Stage 5: Midpoint Check
  → Builder scrolls page at ~50% completion (Tier 2, Step 7)
  → D-05 (reader's scroll) and D-08 (skeleton test) are invoked
  → Builder identifies and strengthens the weakest section
  → DISPOSITION: Active as evaluation frame

Stage 6: Final Pass
  → Builder completes the page
  → D-05 (full reader's scroll) applied
  → Builder answers the Five Questions
  → DISPOSITION: Active as final quality frame

Stage 7: Programmatic Verification
  → Gate runner executes
  → Structural failures caught and fixed
  → DISPOSITION: Dormant. Gates test constraints, not dispositions.

Stage 8: Perceptual Audit
  → PA evaluates the OUTPUT of dispositional engagement
  → PA-05 measures whether the page looks "designed"
  → If PA-05 < 3.0, the disposition may have failed to activate
  → DISPOSITION: Evaluated indirectly through output quality
```

### Critical Timing Constraint

**Tier 4 must be injected AFTER Tiers 1-3 and BEFORE builder execution.** There is no separate "disposition injection" step visible to the builder. The builder receives a single document with all four tiers in order. The injection timing refers to the ASSEMBLY process, not the builder's reading experience.

**The builder should NOT know that Tier 4 is a separate layer.** If the builder perceives Tier 4 as an add-on or secondary concern, it may deprioritize it. The four tiers should read as a single coherent document where the disposition is the natural culmination of the constraints and vocabulary that preceded it.

### Re-Injection During Fix Cycles

If the builder enters a fix cycle (Stage 7 catches failures), there is a risk that the dispositional mode is lost. Fix cycles tend to trigger COMPLIANCE mode: "fix this specific failure." To mitigate:

**Fix cycle framing:** Instead of "Fix: stacked gap exceeds 120px at section 4 boundary," use: "The reader encounters a void at section 4. The space says 'something went wrong.' Reduce the stacked gap to something that says 'breathe here' instead. (Constraint: total gap <= 120px.)"

This preserves the dispositional frame (D-06) even during programmatic fixes. The constraint provides the binary check; the disposition provides the REASON for the fix.

---

## 6. VERIFYING DISPOSITIONAL COMPLIANCE

### The Fundamental Challenge

You cannot test "was the builder in composing mode?" You can only test "does the output show signs of compositional engagement?" This is the untestability risk from Report 58 (Risk 3). The OUTCOME is testable; the PROCESS is not.

### Three-Layer Verification Framework

**Layer 1: Programmatic Indicators (gate-runner testable)**

These tests do not measure disposition directly. They measure OUTPUT PATTERNS that correlate with dispositional engagement:

| Test | What It Measures | Threshold | Disposition Indicated |
|------|-----------------|-----------|---------------------|
| Section padding variance | Standard deviation of padding values | stdev > 8px | D-06 (deliberate spacing) |
| Border deployment count | Distinct border instances in main content | >= 3 instances | D-07 (edge intentionality) |
| Zone boundary RGB delta | Average delta across all boundaries | avg > 25 RGB | D-02 (room perception) |
| Sub-perceptual CSS lines | Count of invisible CSS | 0 lines | D-03 (signing frame) |
| Bottom-50% mechanism peak | Max mechanism density below midpoint | >= 3 mechanisms | D-04 (second-half moment) |
| Channel shifts per boundary | Distinct CSS channels changing at each boundary | >= 3 per boundary | D-01 (content-register) |
| Distinct section typography | Sections with unique font-weight or line-height | >= 2 sections | D-01 (content-register) |

**Layer 2: PA Audit Indicators (perceptual, not programmatic)**

The PA audit evaluates dispositional quality through experiential questions:

| PA Question | What It Reveals | Disposition Evaluated |
|-------------|----------------|---------------------|
| PA-05 (Designed-ness) | Does the page look designed vs assembled? | ALL dispositions |
| PA-10 (Zone perception) | Are zone boundaries perceivable? | D-02 (room perception) |
| PA-20 (Emotional arc) | Does the page have a reading rhythm? | D-04, D-05 (arc, scroll) |
| PA-30 (Restraint) | Does the page show deliberate absence? | D-03, D-06, D-07 |
| PA-60-68 (Tier 5 Flagship) | Does the page exhibit compositional intelligence? | D-01, D-08 (registers, skeleton) |

**Layer 3: Build Log Analysis (diagnostic, not gating)**

If PA-05 < 3.0 despite dispositional instructions, analyze the build log for signs of dispositional engagement:

| Signal | Present (composing) | Absent (complying) |
|--------|--------------------|--------------------|
| Self-initiated revisions | Builder revised sections after scrolling | Builder made zero revisions after first pass |
| Register comments | CSS comments noting section emotional register | No register annotations |
| Override decisions | Builder departed from TC brief values with perceptual reasoning | Builder implemented TC values exactly |
| Component invention | Builder created novel component variants | Builder used only catalog components |
| Restraint decisions | Builder explicitly chose NOT to deploy a mechanism | Builder deployed all available mechanisms |

Build log analysis is DIAGNOSTIC, not GATING. It helps understand WHY a build failed dispositionally, not whether it PASSED. The pipeline does not gate on process; it gates on output.

### Verification Summary

```
CAN gate on (structural):
  - Programmatic indicators (Layer 1): yes/no thresholds
  - PA audit scores (Layer 2): PA-05 >= 3.0 as minimum

CANNOT gate on (contextual):
  - Builder's internal state during building
  - Whether the builder "felt" the register of each section
  - Whether the builder experienced the page as a reader

DIAGNOSTIC (not gating):
  - Build log patterns that correlate with compositional engagement
  - Used for post-mortem analysis, not for pass/fail decisions
```

---

## 7. RISK ANALYSIS

### Risk 1: Non-Reproducibility

**Severity:** MEDIUM
**Description:** Dispositional instructions produce different output from the same builder on different runs. A specification produces approximately the same output every time.
**Mitigation:** The pipeline's goal is output WITHIN A QUALITY BAND (PA-05 3.0-4.0) rather than at a fixed point. Tier 1 constraints guarantee the floor (no output below 2.5 is possible with soul compliance). Variation within the band is a FEATURE -- each page has unique compositional character.
**Residual risk:** Some runs produce 3.0 despite D-01-D-08. Running 2-3 divergent builds and selecting the best is a valid strategy for pushing the probability of 4/4 higher.
**Acceptance:** ACCEPT. Non-reproducibility within a quality band is acceptable if the band's floor is high enough.

### Risk 2: Model Dependence

**Severity:** HIGH
**Description:** Dispositional instructions may only work with Opus. Sonnet may ignore them entirely. This creates a hard dependency on Opus for Flagship-tier output.
**Mitigation:** The procedural-dispositional hybrid (Section 4) provides a Sonnet fallback. Tiers 1-3 produce competent output (estimated PA-05 2.5-3.0) with Sonnet even if Tier 4 has no effect. Tier 4 is additive, not load-bearing.
**Residual risk:** If Opus is required for Flagship, cost per page increases. Acceptable if Flagship pages are rare (5-10% of total pages per the tier model).
**Acceptance:** ACCEPT with mitigation. Sonnet variant exists as fallback.

### Risk 3: Untestability of Process

**Severity:** LOW-MEDIUM
**Description:** Dispositional engagement cannot be verified directly. Only output quality can be measured.
**Mitigation:** The three-layer verification framework (Section 6) measures output indicators that correlate with engagement. PA-05 is the ultimate arbiter -- it measures whether the page LOOKS designed, regardless of how the builder achieved it.
**Residual risk:** Diagnostic blindness when a build fails. We cannot distinguish between "builder ignored dispositions" and "builder engaged but lacked capability." Build log analysis provides partial diagnosis.
**Acceptance:** ACCEPT. We audit the page, not the builder.

### Risk 4: Regression to Mean Over Time

**Severity:** MEDIUM
**Description:** Over many builds, the dispositional language may lose activating power. Opus may learn to "perform" disposition (producing build logs that sound compositional) without actually composing.
**Mitigation:** The PA audit evaluates outcomes, not process. If output quality declines, the dispositions need refreshing -- new language, new framings, new metaphors for the same perceptual shifts.
**Residual risk:** Requires periodic refresh of dispositional language. A library of equivalent framings for each disposition (Section 9) enables rotation.
**Acceptance:** ACCEPT with monitoring. Track PA-05 across builds and refresh language if scores decline.

### Risk 5: Disposition-Constraint Conflict

**Severity:** LOW
**Description:** D-01 says "feel the register" but the constraint says "maximum 96px spacing." What if the register demands 128px spacing?
**Mitigation:** Rule 1 from Section 2: constraints override dispositions. The constraint wins. The disposition works WITHIN constraints, never against them. This is explicit in the hybrid format: "The constraints above are the physics of this world. Within those physics, you are the composer."
**Residual risk:** Builder frustration (if Opus "wants" to exceed a constraint for compositional reasons). Mitigated by generous constraint ranges (96px is rarely limiting in practice).
**Acceptance:** ACCEPT. Constraints are non-negotiable.

### Risk 6: Over-Indexing on Disposition (Pipeline Complacency)

**Severity:** LOW
**Description:** If "just trust Opus with dispositions" works, the pipeline may stop investing in constraint quality, vocabulary updates, or perception threshold research.
**Mitigation:** Report 41 shows that constraints (Category A, 15-20% of output) are the IDENTITY-DEFINING content. Without border-radius: 0, the output is "good generic editorial." Constraints make it KortAI. The pipeline must maintain constraint quality regardless of dispositional success.
**Residual risk:** Institutional complacency. Mitigated by periodic PA audits that verify constraint compliance independently of dispositional quality.
**Acceptance:** ACCEPT with vigilance.

### Risk 7: Sonnet Misinterpretation

**Severity:** MEDIUM (if Sonnet is used for Flagship)
**Description:** Sonnet may interpret "build as if every section is a room" literally and generate actual content to fill every gap, or may interpret "delete invisible CSS" as "delete all CSS that isn't structural" (removing decorative elements that ARE visible).
**Mitigation:** The Sonnet variant (Section 4) pairs each disposition with a concrete procedure that bounds interpretation. The procedures translate "feel the register" into "write one sentence describing the register in a CSS comment, then choose font-weight to match." This constrains Sonnet's interpretation without removing the dispositional frame.
**Residual risk:** Sonnet may still misinterpret. The programmatic gates (Layer 1) catch the worst misinterpretations; the PA audit catches subtler ones.
**Acceptance:** ACCEPT. Sonnet is not the recommended builder for Flagship.

---

## 8. COULD THE DISPOSITIONAL LAYER REPLACE THE CONVENTIONS BRIEF?

### Answer: No. But It Should REFRAME the Brief.

Report 58 analyzed the conventions brief's content distribution:

| Type | Lines | % | Replaceable by Disposition? |
|------|-------|---|----------------------------|
| World-description | ~310 | 51% | NO -- builders need the physics |
| Constraint | ~190 | 31% | NO -- constraints prevent catastrophic failure |
| Recipe/procedure | ~100 | 16% | PARTIALLY -- dispositions replace some steps |
| Creative authority | ~10 | 2% | YES -- this IS the dispositional layer |

### What Changes

**The conventions brief's 610 lines are NOT replaced by the 113-line hybrid recipe.** They serve different purposes:

- **Conventions brief** = the comprehensive world-description that exists as reference material. It describes the design system's identity, vocabulary, grammar, and philosophy. It is READ ONCE by the builder for orientation.

- **Hybrid recipe** = the operational instructions the builder carries in working memory during the build. It is the DISTILLED, ACTION-ORIENTED subset of the conventions brief plus the dispositional layer.

### The Restructuring Proposal

The conventions brief should be restructured to support the dispositional layer:

**Current structure (610 lines):**
1. Identity (soul) -- constraints
2. Perception (physics) -- thresholds
3. Richness (principles) -- philosophy
4. Multi-coherence -- framework
5. Fractal echo -- framework
6. Metaphor -- framework
7. Transition grammar -- vocabulary
8. CSS vocabulary -- concrete values
9. Creative authority -- 10 lines at LINE 356
10. Compositional memory -- process
11. Five questions -- verification
12. Process -- build steps
13. Accessibility -- requirements
14. Responsive -- requirements

**Proposed restructure (same content, different ordering):**

```
OPENING: Dispositional frame (D-01, D-02, D-03 excerpts) -- 8 lines
  "You are composing a page. The constraints below are physics.
   Within them, your judgment makes the decisions."

PART 1: PHYSICS (Sections 1, 2, 13, 14) -- constraints
  Identity, perception thresholds, accessibility, responsive

PART 2: INSTRUMENTS (Sections 7, 8) -- vocabulary
  Transition grammar, CSS vocabulary, concrete values

PART 3: FRAMEWORKS (Sections 3, 4, 5, 6) -- compositional theory
  Richness, multi-coherence, fractal echo, metaphor

PART 4: PROCESS (Sections 10, 12) -- build steps
  Compositional memory, build process

CLOSING: Dispositional frame (D-04, D-05, D-06, D-07, D-08) -- 20 lines
  The signing frame, the second-half moment, the reader's scroll
```

**The key change:** Creative authority moves from line 356 (buried in the middle) to the OPENING and CLOSING positions (primacy + recency effects). Report 58's paradigm exploration found that "only 6.2% of the conventions brief is dedicated to creative authority" and "the remaining 93.8% accidentally signals 'follow rules, don't create.'" Moving creative authority to bookend positions changes the signal without changing the content.

### Relationship Summary

```
Conventions brief (610 lines):
  PURPOSE: Comprehensive reference document
  WHEN READ: Once, before building
  CONTAINS: Everything the builder needs to KNOW about the design system

Hybrid recipe (113 lines):
  PURPOSE: Operational instructions for the build
  WHEN READ: Carried in working memory during the build
  CONTAINS: Everything the builder needs to DO and BE during the build

The hybrid recipe is NOT a subset of the conventions brief.
  - Tiers 1-3 are a DISTILLATION of the brief's constraints + vocabulary
  - Tier 3.5 is NEW (content-specific parameters from TC pipeline)
  - Tier 4 is NEW (dispositional instructions not in the current brief)

The conventions brief should be RESTRUCTURED to support the hybrid recipe:
  - Open and close with dispositional framing
  - Group content by builder need (physics, instruments, frameworks, process)
  - The brief remains the comprehensive reference; the recipe is the operational extract
```

---

## 9. HUMAN DESIGN EDUCATION PARALLELS

### The Master Pattern

Every human design education maxim follows the same three-step structure (from Report 58):

1. **Name a perceptual shift** -- redirect attention from the mechanical to the experiential
2. **The shift reveals something previously invisible** -- the student sees what was always there
3. **Seeing produces better decisions** -- quality improves because attention is in the right place

This is EXACTLY how D-01 through D-08 work. Each names a perceptual shift. Each reveals something the builder wasn't seeing. Each produces better CSS decisions because attention has been redirected.

### Maxim-to-Instruction Mapping

| Human Design Maxim | AI Instruction | What Becomes Visible |
|-------------------|---------------|---------------------|
| "See negative space as shape" | D-06 (Negative Space) | Margins and padding as compositional elements, not defaults |
| "Every edge is a decision" | D-07 (Edge Intentionality) | Border presence/absence as communicative choice |
| "If it looks right, it IS right" | D-02 (Room Perception), D-03 (Signing Frame) | Perceptual correctness over mathematical correctness |
| "Squint and see the big shapes" | D-08 (Skeleton Test) | Global composition over local detail |
| "Design is not decoration" | D-03 (Signing Frame) | Visible quality over invisible compliance |
| "Show, don't tell" | D-01 (Content-Register) | CSS as emotional preparation, not just structure |
| "Less, but better" | D-03 + D-06 + D-07 | Restraint as compositional intelligence |
| "The space IS the design" | D-06 (Negative Space) | Layout as primary design medium, not content arrangement |

### The Studio Model

Design schools operate on what Report 58 calls the "recording studio model":

1. **Build the booth** (soundproof walls = constraints) -- students learn the medium's limitations
2. **Provide instruments** (tools, materials = vocabulary) -- students learn what they can work with
3. **Teach technique** (sequenced exercises = procedures) -- students learn how to work
4. **Create the space** (critique culture = disposition) -- students learn how to BE while working

The 4-tier hybrid recipe maps exactly to this model:
- Tier 1 = the booth (constraints that prevent escape)
- Tier 3 = instruments (CSS vocabulary, component library)
- Tier 2 = technique (build sequence)
- Tier 4 = the space (dispositional instructions)

The studio model's most important lesson: **the creative space must come LAST, after the student has internalized constraints and vocabulary.** A student who enters the studio before learning the constraints produces undisciplined work. A student who learns constraints without ever entering the studio produces mechanical work. The sequence matters.

### Crit Culture as Verification

In design schools, the "crit" (critique session) functions exactly like the PA audit:

- Students present their work
- Peers and faculty evaluate the OUTCOME, not the process
- The question is not "did you follow the brief?" but "does this work?"
- Feedback addresses PERCEPTUAL quality: "this section feels dead," "the proportions are off," "the rhythm breaks here"

The PA audit mirrors this: it evaluates whether the page LOOKS designed (PA-05), whether zone boundaries are PERCEIVABLE (PA-10), whether the page has a READING RHYTHM (PA-20). These are experiential evaluations, not rule checks.

The dispositional layer succeeds or fails at the crit, not at the gate runner. This is by design. Structural compliance is necessary (gates). Compositional quality is the goal (crit/PA).

### The Bauhaus Precedent

The Bauhaus school (1919-1933) formalized the separation that the dispositional layer implements:

- **Vorkurs (Preliminary Course):** Materials, constraints, vocabulary -- "learn the physics." (= Tier 1 + Tier 3)
- **Workshop Training:** Technique, process, sequencing -- "learn the workflow." (= Tier 2)
- **Master Class:** Composition, personal voice, creative judgment -- "learn to BE." (= Tier 4)

Students who skipped the Vorkurs produced decorative work without structural foundation. Students who never reached the Master Class produced competent work without compositional soul. The progression was essential.

The AI equivalent: Opus that receives ONLY Tier 4 produces undisciplined output (soul violations, container width errors). Opus that receives ONLY Tiers 1-3 produces competent but mechanical output (the Middle experiment profile). Opus that receives all four tiers in sequence produces composed output within discipline -- the target.

---

## 10. EQUIVALENCE LIBRARY FOR DISPOSITIONAL REFRESH

Risk 4 (regression to mean) requires periodic refresh of dispositional language. Each disposition has multiple equivalent framings that achieve the same perceptual shift through different words. Rotate framings across builds to maintain activating power.

### D-01 Equivalents (Content-Register Reading)

- **Primary:** "Before writing CSS for any section, read its content. Feel its register."
- **Alt 1:** "Each section has a voice. Analytical sections speak in clean lines. Reflective sections breathe. Match the CSS to the voice."
- **Alt 2:** "If you read this section aloud, what tone would you use? Write CSS in that tone."
- **Alt 3:** "A section about tension should feel tense. A section about resolution should feel resolved. The CSS declares the mood before the words confirm it."

### D-02 Equivalents (Room Perception)

- **Primary:** "A viewer arriving at this boundary should perceive a new room."
- **Alt 1:** "If you printed each zone on a separate sheet and shuffled them, could someone sort them by visual feel alone? If not, the zones are not distinct enough."
- **Alt 2:** "Close your eyes and reopen them at the zone boundary. The shift should be immediate and unmistakable."
- **Alt 3:** "Every zone has its own climate. When you cross the boundary, the temperature changes."

### D-03 Equivalents (The Signing Frame)

- **Primary:** "You are building a page someone will sign their name to."
- **Alt 1:** "Would you link to this page from your own portfolio? If any section makes you hesitate, that section needs work."
- **Alt 2:** "This page represents someone's thinking. It should look like someone cared about HOW it's presented, not just WHAT it says."
- **Alt 3:** "Every CSS line is a vote for the reader's experience. Invisible votes are wasted."

### D-04-D-08: Similar equivalence sets can be generated on demand. The pattern: same perceptual shift, different metaphor, different emotional register. Rotate monthly or per-project.

---

## 11. INTEGRATION CHECKLIST

### For Pipeline v3 Implementation

- [ ] Hybrid recipe template created with 4 tiers (113-line Opus / 130-line Sonnet)
- [ ] Conventions brief restructured: disposition at opening + closing positions
- [ ] TC pipeline outputs Tier 3.5 content parameters in compatible format
- [ ] Model selection logic integrated: Opus for Flagship, choice for Middle
- [ ] Gate runner updated with Layer 1 programmatic indicators (Section 6)
- [ ] PA audit questions confirmed to cover dispositional quality (Layer 2)
- [ ] Fix cycle framing template created (dispositional + constraint format)
- [ ] Equivalence library seeded for 8 dispositions (Section 10)
- [ ] Build log analysis protocol documented for diagnostic use (Layer 3)
- [ ] Sonnet procedural-dispositional variant tested against Middle-tier content

### Verification That Integration Is Working

- [ ] First Opus + full dispositional build achieves PA-05 >= 3.0
- [ ] First Sonnet + procedural-dispositional build achieves PA-05 >= 2.5
- [ ] Zero builds produce sub-perceptual CSS (D-03 working)
- [ ] All builds have >= 3 border deployments (D-07 working)
- [ ] All builds have a bottom-half mechanism peak (D-04 working)
- [ ] Section padding variance > 8px across builds (D-06 working)

---

## 12. SUMMARY

The dispositional layer is not a specification. It is an activation key for capabilities the builder already possesses.

**Eight instructions** (D-01 through D-08) address eight observed failure modes through eight perceptual shifts. Each redirects the builder's attention from rule-compliance to composition-experience. The shifts are grounded in human design education (Bauhaus, studio model, crit culture) and validated against the project's experimental record (Flagship failure, Middle success, CD-006 reference, Gas Town output).

**The 4-tier hybrid format** (Hard Physics -> Build Sequence -> CSS Vocabulary -> Disposition) delivers all four types of builder knowledge in 113 lines. The order is critical: constraints first, dispositions last. The builder internalizes the world's laws before being told to compose within them.

**Model-specific variants** accommodate Opus (full dispositional, 113 lines) and Sonnet (procedural-dispositional, 130 lines). Opus treats dispositions as permission. Sonnet needs procedural scaffolding to translate dispositions into action.

**Verification is indirect but sufficient.** The pipeline gates on output quality (programmatic indicators + PA audit), not on builder process. Build log analysis provides diagnostic depth when builds fail.

**The dispositional layer complements the conventions brief; it does not replace it.** The brief should be restructured to bookend with dispositional framing, but its content (world-description, constraints, vocabulary) remains essential.

**The specification paradox is resolved:** Specify STRUCTURAL concepts (constraints, vocabulary, recipes). Activate CONTEXTUAL concepts (atmosphere, fluency, arc) through disposition. Specify zero contextual concepts as rules. The 22 contextual concepts from Report 45 emerge when the 18 structural concepts are correct and specification interference is low.

---

**END DISPOSITIONAL LAYER DESIGN**

*The dispositional recipe is the oldest idea in design education: teach the student to see, give them the materials, and get out of the way. What is new is applying this to AI builders -- and the evidence that it may be the only path to consistent 4/4 quality, because the alternative (more specification) provably reduces quality by consuming the attention that composition requires. Eight concrete instructions, integrated as Tier 4 of a hybrid recipe, represent the minimum viable implementation of this hypothesis.*
