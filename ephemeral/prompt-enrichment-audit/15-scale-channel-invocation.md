# 15: Maximum Scale-Channel Invocation Architecture

**Agent:** scale-channel-invoker
**Date:** 2026-02-17
**Sources:** All 6 scale-exploration reports (01-06), memory/MEMORY.md scale-research notes, 00-PROMPT-STRUCTURE-OUTLINE.md
**Purpose:** Provide the most granular, exhaustive, operationally complete invocation language for scales AND channels in the flagship execution prompt

---

## 1. SCALE-CHANNEL THEORY SUMMARY

### The Core Discovery

The project's research across 6 independent agents and 6 source domains (music, architecture, typography, cinema, software engineering, biology/fractals) converged on a single universal finding:

**Beyond the natural ceiling of scale depth, richness increases through CHANNELS, not LEVELS.**

The mathematical ceiling for scales in web documentation is 5 (Alexander/Salingaros formula: `ln(1440px / 12px) / ln(2.7) = 4.8`). This is not a design choice -- it is a consequence of the ratio between the largest contextual unit (viewport) and the smallest perceptible unit (character), spaced at the natural perceptual distinguishability ratio of ~2.7x (Euler's number e).

### The Formula

```
Number of scales = ln(largest_unit / smallest_unit) / ln(scaling_ratio)
                 = ln(1440 / 12) / ln(2.7)
                 ≈ 4.8
                 → 5 scales
```

This matches perfectly: Navigation (1440px) -> Page (full scroll) -> Section (~600px) -> Component (~220px) -> Character (~80px). The scaling ratio between adjacent levels is approximately 2.5-3x, confirming Alexander's ~e ratio.

### The Paradigm Shift: Scales vs Channels

**SCALES** = nested zoom levels along the SPATIAL axis. Like floors of a building. 5 is the ceiling; adding floor 6 requires either expanding the building (multi-page scope) or subdividing a floor (glyph-level detail below perception threshold).

**CHANNELS** = independent dimensions of coherence that operate ACROSS all scales simultaneously. Like the building's plumbing, electrical, HVAC, and structural systems -- each runs through every floor but is independently designable.

The critical distinction for the builder:
- Scales are VERTICAL: you move up/down in spatial zoom
- Channels are HORIZONTAL: they run through every scale at once
- The richness matrix is `5 scales x N channels`, not `N scales x 1 channel`

### The Anti-Scale Model (Empirically Validated)

```
Richness = semantic_density_per_decision x restraint x spatial_confidence
```

Where:
- **Semantic density per decision** = how much meaning each CSS choice carries (driven by vocabulary constraint from soul)
- **Restraint** = ratio of plausible additions REJECTED to additions ACCEPTED
- **Spatial confidence** = whether the page's macro rhythm communicates intentional proportion (Scale 1 veto)

Evidence: Middle (2 scales, high restraint) scored PA-05 4/4. Ceiling (4 scales, low restraint) scored PA-05 1.5/4. The page with HALF the scale depth scored NEARLY THREE TIMES higher. More scales did not produce more richness -- more channels of intentionality within fewer scales did.

### The Cross-Domain Convergence (6 domains, same finding)

| Domain | Stopped Adding | Started Adding Instead |
|--------|---------------|----------------------|
| Music | More structural levels (beyond 3 Schenker levels) | More simultaneous dimensions (melody, rhythm, harmony, timbre) |
| Architecture | More scale levels (beyond e-ratio ceiling) | More properties per level (Alexander's 15 properties) |
| Typography | More optical sizes (beyond 5-6) | More independent channels (weight, spacing, color, contrast) |
| Cinema | More narrative levels (beyond 6-7) | More expressive channels per level (color, sound, composition, performance) |
| Software | More abstraction layers | Cleaner interfaces between existing layers |
| Biology | More branching generations | More functional specialization per generation |

**Universal law: scale depth converges; channel width diverges.**

---

## 2. CHANNEL TAXONOMY

### The 7 Identified Channels

Each channel is an independent dimension of coherence that can manifest at any of the 5 spatial scales. Channels are NOT mechanisms -- they are the AXES along which mechanisms operate.

#### Channel 1: CHROMATIC
**Definition:** The deployment of color as a semantic signal. Not "what color is this element" but "what does this color MEAN at this point in the page."

**Manifestations by scale:**
- Navigation: dark header (#1A1A1A) vs cream body vs dark footer = bookend authority framing
- Page: zone-sparse (#FEF9F5) -> zone-breathing (#FAF5ED) -> zone-dense (#FFFFFF) -> zone-bedrock (#1A1A1A) = density encoding through temperature
- Section: background shift at section boundaries = threshold signal
- Component: accent color on callout left border = category encoding (coral = warning, teal = info, green = success)
- Character: syntax highlighting in code blocks, bold color differentiation

**Coherence test:** Do all color deployments on the page use the SAME semantic vocabulary? (warm = safe, cool = technical, dark = structural, light = breathing)

**Mechanisms that operate in this channel:** #2 (zone DNA), #5 (background temperature), #9 (confidence encoding via color), #14 (accent hierarchy)

#### Channel 2: TYPOGRAPHIC
**Definition:** The deployment of type properties (weight, size, family, style, spacing) as a semantic signal. The hierarchy of voice.

**Manifestations by scale:**
- Navigation: Instrument Serif for page title (highest authority voice)
- Page: heading size progression creates page-level hierarchy map
- Section: section heading weight/size encodes relative importance
- Component: label zones use DM Mono uppercase 0.6875rem (meta-voice); body zones use DM Sans regular 1rem (content-voice)
- Character: inline code in DM Mono, emphasis in italic, strong in bold = inline semantic differentiation

**Coherence test:** Can you identify exactly 3 typographic voices (serif = authority, sans = content, mono = code/meta) deployed consistently at every scale?

**Mechanisms that operate in this channel:** #8 (typography trinity), #10 (heading rhythm), #15 (label hierarchy)

#### Channel 3: SPATIAL
**Definition:** The deployment of spacing, positioning, and proportion as semantic signals. How much space surrounds an element encodes its role and importance.

**Manifestations by scale:**
- Navigation: header padding, TOC spacing from content, overall margin strategy
- Page: section spacing progression (generous intro -> compressed middle -> breathing conclusion)
- Section: internal paragraph spacing, callout margin, code block clearance
- Component: internal padding ratios (label zone tighter than body zone), border-content gap
- Character: letter-spacing on labels vs body, word-spacing, line-height differentiation

**Coherence test:** Does spacing COMPRESS toward density and EXPAND toward breathing in a consistent, predictable pattern at every scale?

**Mechanisms that operate in this channel:** #1 (border-weight gradient), #4 (spacing compression), #6 (content density), #11 (rhythm/CRESCENDO), #18 (signal-to-silence ratio)

#### Channel 4: STRUCTURAL
**Definition:** The deployment of borders, dividers, containment, and visual boundaries as architectural signals. The skeleton of the page.

**Manifestations by scale:**
- Navigation: header bottom border (3px structural), TOC enclosure
- Page: section dividers, major zone boundaries
- Section: callout left borders (weight encodes importance: 4px critical, 3px standard, 1px supplementary)
- Component: container borders, table grid, code block enclosure
- Character: inline code background boundary, emphasis markers

**Coherence test:** Does border weight consistently encode the SAME semantic hierarchy at every scale? (4px = critical structure, 3px = standard structure, 2px = secondary, 1px = subtle)

**Mechanisms that operate in this channel:** #1 (border-weight gradient), #3 (solid-offset depth), #12 (containment architecture)

#### Channel 5: DENSITY
**Definition:** The deployment of information density (content per viewport height) as a semantic signal. How much the page GIVES you per scroll-unit.

**Manifestations by scale:**
- Navigation: sparse (landmark only, breathing room) OR dense (utility-packed TOC)
- Page: overall density arc (sparse opening -> dense middle -> sparse resolution = CRESCENDO)
- Section: internal density variation (intro paragraph sparse -> technical detail dense -> summary sparse)
- Component: callout density (sparse context callout vs dense reference table)
- Character: code block line density, list item compression

**Coherence test:** Does density TRACK with content importance? (Most important content = densest section. Orientation content = sparsest.)

**Mechanisms that operate in this channel:** #6 (content density), #11 (CRESCENDO), #16 (density variation), #17 (semantic density -- mechanism count proportional to importance)

#### Channel 6: RHYTHMIC
**Definition:** The deployment of repetition, alternation, and pattern as signals of compositional coherence. The heartbeat of the page.

**Manifestations by scale:**
- Navigation: repeated nav items create regular rhythm
- Page: section alternation pattern (dense-sparse-dense-sparse OR crescendo build-release)
- Section: paragraph-callout-paragraph-code alternation = reading rhythm
- Component: 2-zone DNA repetition across all callouts = family resemblance rhythm
- Character: bullet rhythm, numbered list cadence, code comment/code alternation

**Coherence test:** Can you identify a repeating rhythmic unit (the "heartbeat") and does it appear at multiple scales?

**Mechanisms that operate in this channel:** #7 (alternation pattern), #11 (CRESCENDO arc), #13 (2-zone DNA repetition), #18 (signal-to-silence ratio)

#### Channel 7: INTENTIONAL (The Orthogonal Axis)
**Definition:** The deployment of compositional intelligence that cuts ACROSS all spatial scales. Not what the page looks like at any scale, but what the page DOES to the reader's mind. This is the "5 scales + 1 axis" discovery from the showcase archaeology.

**Sub-dimensions (5 identified):**
1. **Argument arc** -- logical progression of ideas across sections (pedagogical sequencing)
2. **Self-awareness** -- the page's relationship to its own subject matter (content-form alignment)
3. **Cognitive choreography** -- the sequence of mental modes the reader traverses (recognition -> comprehension -> synthesis -> insight)
4. **Structural rhetoric** -- how form creates meaning (bookending, parallels, echoes)
5. **Restraint signal** -- conspicuous absence of decoration where decoration COULD be but is NOT

**Coherence test:** Does the page have a clear beginning-middle-end with designed transitions between cognitive modes? Does the reader feel GUIDED, not just presented to?

**This channel has NO corresponding mechanisms in the catalog.** It operates at the level of compositional decision-making, not CSS deployment. It is the domain of the Opus-model agents (metaphor derivation, content architecture, intentionality builder), not the Sonnet-model builders.

### Channel Interaction Matrix

| Channel Pair | Interaction Type | Example |
|-------------|-----------------|---------|
| Chromatic + Density | REINFORCING | Dense sections use cooler/whiter backgrounds; sparse sections use warmer cream |
| Typographic + Structural | REINFORCING | Heavier type appears near heavier borders; both encode authority |
| Spatial + Density | STRONGLY REINFORCING | Tight spacing = dense content; generous spacing = sparse content |
| Rhythmic + Spatial | REINFORCING | Regular spacing rhythm creates regular reading rhythm |
| Intentional + ALL | GOVERNING | Intentional channel determines HOW the other 6 channels are deployed |
| Chromatic + Typographic | INDEPENDENT | Color choices and type choices can vary independently |
| Structural + Density | PARTIALLY REINFORCING | More borders = more visual density, but a single heavy border in sparse space = emphasis |

**Key finding:** Channels that are REINFORCING (both say the same semantic thing simultaneously) create the "multi-channel encoding" effect that produces richness. This is the Semantic Resonance model from the alternative mental models research: richness comes from how many channels say the SAME THING at the same moment, not from how many channels are active independently.

---

## 3. SCALE-TO-CHANNEL MAPPING

### The Richness Matrix

The design system's richness space is a 5x7 matrix. Each cell represents one channel's manifestation at one scale. A "full" matrix has coherent design in all 35 cells. A "sparse" matrix has coherent design in 10-15 cells.

```
              Ch1:Chromatic  Ch2:Typographic  Ch3:Spatial  Ch4:Structural  Ch5:Density  Ch6:Rhythmic  Ch7:Intentional
             +-----------+-----------+-----------+-----------+-----------+-----------+-----------+
Navigation   |           |           |           |           |           |           |           |
             +-----------+-----------+-----------+-----------+-----------+-----------+-----------+
Page         |           |           |           |           |           |           |           |
             +-----------+-----------+-----------+-----------+-----------+-----------+-----------+
Section      |           |           |           |           |           |           |           |
             +-----------+-----------+-----------+-----------+-----------+-----------+-----------+
Component    |           |           |           |           |           |           |           |
             +-----------+-----------+-----------+-----------+-----------+-----------+-----------+
Character    |           |           |           |           |           |           |           |
             +-----------+-----------+-----------+-----------+-----------+-----------+-----------+
```

### Tier Coverage Targets

| Tier | Matrix Cells Designed | Channel Minimum | Scale Minimum | Key Constraint |
|------|---------------------|----------------|---------------|----------------|
| Floor | 10-12 / 35 | 3 channels | 2 scales (Page + Component) | Chromatic + Typographic + Spatial required |
| Middle | 18-22 / 35 | 5 channels | 3 scales (Page + Section + Component) | All channels except Intentional |
| Ceiling | 25-30 / 35 | 6 channels | 4 scales | Add Intentional (argument arc + structural rhetoric) |
| Flagship | 30-35 / 35 | ALL 7 | ALL 5 | Full matrix, all sub-dimensions of Intentional |

### How Crown Jewels Fill the Matrix

**CD-006 (39/40):** 33/35 cells filled. All 7 channels active at all 5 scales. The 2 empty cells: Character-scale Rhythmic (no deliberate character-level alternation pattern) and Navigation-scale Density (TOC density is uniform, not varied).

**DD-006 (36/40):** 24/35 cells filled. No Navigation scale (page too short). 6/7 channels active. The missing channel: Structural at Character level (no inline border differentiation).

**Middle experiment (PA-05 4/4):** 18/35 cells filled. 5/7 channels active at 2-3 scales. Missing: Intentional channel entirely, Character scale entirely. The high PA-05 score despite low matrix coverage confirms the anti-scale thesis: SPATIAL CONFIDENCE (a single cell in the matrix) has veto power over ALL other cells.

### The 80/20 of Channel-Scale Coverage

Not all cells in the matrix are equal. Research identifies a hierarchy of perceptual impact:

**HIGHEST IMPACT (must be filled for any tier):**
1. Page-scale Spatial (the "squint test" -- overall proportion) -- VETO POWER
2. Component-scale Structural (does the page have visible architecture?)
3. Section-scale Density (does density vary between sections?)
4. Page-scale Chromatic (does the page have a coherent color identity?)

**HIGH IMPACT (required for Middle+):**
5. Section-scale Spatial (do sections have internal breathing room?)
6. Component-scale Typographic (do components use the type trinity correctly?)
7. Page-scale Rhythmic (does the page have a perceivable heartbeat?)
8. Section-scale Chromatic (do zone backgrounds shift at section boundaries?)

**MODERATE IMPACT (required for Ceiling+):**
9. Navigation-scale Structural (header/footer framing)
10. Page-scale Intentional: argument arc
11. Section-scale Rhythmic (section-internal alternation)
12. Component-scale Chromatic (accent color on component borders)

**LOWER IMPACT (required for Flagship only):**
13-35. Character-scale channels, Navigation-scale density, Intentional sub-dimensions beyond argument arc

---

## 4. CONVICTION LAYER TEXT

The following ~12 lines are designed to inspire channel-aware composition in the builder agents. They belong in Layer 1 (Conviction) of the execution prompt.

```
--- CONVICTION: CHANNELS, NOT LEVELS ---

Five scales is the mathematical ceiling for web documentation. The formula is
physical: ln(viewport / character) / ln(2.7) = 4.8. You cannot add a 6th floor
to a 5-story building without either raising the roof or digging a basement.

But you can run more SYSTEMS through every floor. Color, type, space, structure,
density, rhythm, intentionality -- seven channels, each threading independently
through all five scales. CD-006 scored 39/40 not because it had more scales than
the Middle page but because it filled 33 of 35 cells in the scale-channel matrix.
The Middle page filled 18. Both had 5 scales available. The difference was channel
DEPTH, not scale COUNT.

The builder who asks "how many scales am I expressing?" is asking the wrong question.
The builder who asks "how many channels are SAYING THE SAME THING at this transition
point?" is asking the right one. When spacing compresses AND background shifts AND
border thickens AND type weight increases -- four channels encoding ONE semantic
moment -- THAT is richness. Not four scales of the same channel.

A single transition where 5 channels harmonize is worth more than 5 scales where
1 channel repeats.
```

---

## 5. EXECUTION SPEC TEXT

The following binary rules enforce proper channel deployment. They belong in Layer 2 (Execution Spec) of the prompt, section 2C (COMPOSITIONAL).

### Binary Rules for Channel Deployment

```
--- 2C-CHANNELS: BINARY CHANNEL RULES ---

RULE C-01: MINIMUM CHANNEL COUNT PER SECTION TRANSITION
  Every section boundary must deploy >= 3 channels simultaneously.
  Channels: {chromatic, typographic, spatial, structural, density, rhythmic}.
  VERIFICATION: At each section break, count how many of these change:
  background color, heading size/weight, spacing above/below, border presence/weight,
  content density, element alternation pattern. Count >= 3 = PASS.

RULE C-02: CHROMATIC-DENSITY ALIGNMENT
  Zone-sparse sections (#FEF9F5 warm) must have LESS content per viewport
  than zone-dense sections (#FFFFFF neutral).
  VERIFICATION: Compare word count per viewport-height between warm and
  neutral background sections. Warm < Neutral = PASS.

RULE C-03: STRUCTURAL WEIGHT HIERARCHY CONSISTENCY
  Border weight must NEVER increase as content importance DECREASES.
  4px = critical/structural only. 3px = standard emphasis. 1px = subtle/ambient.
  VERIFICATION: Find the heaviest border. Is it on the most important content?
  Find the lightest border. Is it on supplementary content? Both YES = PASS.

RULE C-04: TYPOGRAPHIC TRINITY COMPLIANCE AT ALL SCALES
  Every visible text element must use exactly one of: Instrument Serif (authority),
  DM Sans (content), DM Mono (code/meta). No other fonts. No font-weight values
  outside {400, 500, 600}.
  VERIFICATION: Grep all font-family and font-weight declarations.
  Only 3 families and 3 weights = PASS.

RULE C-05: INTENTIONAL ARC MINIMUM
  The page must have a designed beginning (orientation), middle (substance),
  and end (resolution). The visual treatment of the first section must differ
  from the middle sections, which must differ from the final section.
  VERIFICATION: Compare first section, a middle section, and last section.
  All three visually distinct = PASS.

RULE C-06: REINFORCING CHANNEL PAIR MINIMUM
  At least 3 section transitions must deploy >= 2 REINFORCING channel pairs
  (channels that encode the same semantic shift).
  Example reinforcing pairs: chromatic+density, spatial+structural,
  typographic+density, rhythmic+spatial.
  VERIFICATION: At 3 transitions, identify which channels shift and whether
  they shift in the same semantic direction. 3 transitions with >= 2
  reinforcing pairs each = PASS.

RULE C-07: SEMANTIC DENSITY PROPORTIONALITY
  The most important element on the page (as determined by content meaning)
  must use MORE mechanisms than any supplementary element.
  VERIFICATION: Identify the single most critical content block. Count
  mechanisms applied to it. Identify the least important content block.
  Count mechanisms applied to it. Critical > Supplementary = PASS.

RULE C-08: SIGNAL-TO-SILENCE RATIO
  No more than 60% of the page's total scroll depth may contain mechanism-heavy
  treatment (3+ mechanisms per element). At least 40% must be "quiet" zones
  (0-2 mechanisms per element) to provide perceptual rest.
  VERIFICATION: Measure scroll depth of mechanism-heavy vs quiet zones.
  Quiet >= 40% = PASS.
```

### Channel Self-Check for Builder (addition to 2E BUILDER SELF-CHECK)

```
--- 2E CHANNEL SELF-CHECK ---

Before submitting, the builder counts channels at 3 representative section transitions:
  Transition 1 (early): How many channels shift? [target: >= 3]
  Transition 2 (middle): How many channels shift? [target: >= 4]
  Transition 3 (late): How many channels shift? [target: >= 3]

The builder also checks:
  - Chromatic channel: Are warm zones sparse and cool zones dense? [Y/N]
  - Typographic channel: Exactly 3 font families, exactly 3 weights? [Y/N]
  - Structural channel: Border weight tracks content importance? [Y/N]
  - Density channel: Densest section = most important content? [Y/N]
  - Spatial channel: Spacing compresses from intro to core, expands to resolution? [Y/N]
```

---

## 6. COORDINATION SPEC TEXT

### Which Agents Manage Which Channels

Channel ownership maps to the agent roster from 00-PROMPT-STRUCTURE-OUTLINE.md section 3A:

```
--- 3A-CHANNELS: AGENT-CHANNEL OWNERSHIP ---

METAPHOR DERIVATION AGENT (Opus):
  Owns: Ch7 Intentional (argument arc, self-awareness, cognitive choreography,
        structural rhetoric, restraint signal)
  Informs: All other channels via metaphor-to-channel mapping
  Output: metaphor document specifying how each channel manifests the metaphor

CONTENT ARCHITECT (Opus):
  Owns: Ch5 Density (content importance ranking, density arc design)
  Owns: Ch6 Rhythmic (section alternation pattern, element cadence)
  Informs: Ch3 Spatial via density requirements

PLANNER (Opus):
  Owns: Ch3 Spatial (overall proportion, section spacing, compression ratios)
  Owns: Ch4 Structural (section boundary architecture, border hierarchy)
  Integrates: ALL channel decisions from metaphor + content architect into build plan

MECHANISM BUILDER (Sonnet):
  Implements: Ch1 Chromatic (color tokens, zone backgrounds, accent colors)
  Implements: Ch2 Typographic (font selections, size hierarchy, weight assignments)
  Implements: Ch3 Spatial (padding, margin, gap values)
  Implements: Ch4 Structural (border declarations, divider placement)
  Does NOT decide channel semantics -- follows planner's channel mapping

EMBEDDED AUDITOR (Sonnet):
  Validates: ALL 7 channels against binary rules C-01 through C-08
  Reports: channel count per transition, reinforcing pair identification
  Flags: any transition with < 3 channels as BLOCKING

INTENTIONALITY BUILDER (Opus):
  Validates: Ch7 Intentional sub-dimensions after mechanism builder completes
  Adjusts: content ordering, transition text, structural rhetoric markers
  Does NOT modify CSS -- modifies HTML content/structure only
```

### Channel Communication Protocol

```
--- 3B-CHANNELS: MANDATORY CHANNEL MESSAGES ---

CHECKPOINT A (metaphor complete):
  Metaphor agent MUST message planner with:
  "CHANNEL MAP: [for each of 7 channels, how the metaphor manifests in that channel]"
  Example: "Ch1 Chromatic: trust zones map to warm→cool temperature progression.
  Ch4 Structural: trust boundaries map to border-weight checkpoints."

CHECKPOINT B (plan complete):
  Planner MUST message builder with:
  "TRANSITION SPEC: [for each section boundary, which channels shift and how]"
  Example: "S2→S3: Ch1 cream→white, Ch3 64px→32px, Ch4 add 3px left border,
  Ch5 sparse→dense. 4 channels, 2 reinforcing pairs (chromatic+density, spatial+structural)."

CHECKPOINT D (build complete, pre-audit):
  Builder MUST message embedded auditor with:
  "CHANNEL SELF-COUNT: [channel count at 3 transitions, plus 5 Y/N checks from 2E]"
```

---

## 7. BUILDER QUICK-REFERENCE

### Channel Deployment Checklist

This checklist is designed to be placed in the builder's per-agent context (the "30 lines of per-agent memory" from the highest-leverage change specification).

```
======================================
CHANNEL DEPLOYMENT QUICK-REFERENCE
======================================

BEFORE WRITING ANY CSS, verify you received from planner:
  [ ] Transition spec for each section boundary
  [ ] Channel count target per transition (minimum 3)
  [ ] Reinforcing pair targets (minimum 2 per transition)
  [ ] Density arc direction (sparse→dense→sparse? or CRESCENDO?)

WHILE WRITING, for EACH section transition:
  [ ] Background color changes? (Chromatic channel)
  [ ] Heading/type treatment changes? (Typographic channel)
  [ ] Spacing above/below changes? (Spatial channel)
  [ ] Border presence/weight changes? (Structural channel)
  [ ] Content density changes? (Density channel)
  [ ] Element pattern changes? (Rhythmic channel)
  COUNT: How many checked? Must be >= 3.

AFTER WRITING, run self-check:
  [ ] Warmest background has least content per viewport? (C-02)
  [ ] Heaviest border is on most important content? (C-03)
  [ ] Only 3 font families and 3 font weights used? (C-04)
  [ ] First, middle, last sections visually distinct? (C-05)
  [ ] At least 3 transitions with 2+ reinforcing pairs? (C-06)
  [ ] Most important element has most mechanisms? (C-07)
  [ ] At least 40% of scroll is "quiet" (0-2 mechanisms)? (C-08)

COMMON FAILURE MODES:
  - "All transitions are just spacing changes" = 1 channel only = FAIL C-01
  - "Every section has the same background" = 0 chromatic channel = reduces matrix coverage
  - "Border weight is random" = structural channel incoherent = FAIL C-03
  - "Dense content on warm backgrounds" = chromatic-density misalignment = FAIL C-02
  - "Everything is mechanism-heavy" = 0% quiet zones = FAIL C-08

REMEMBER: Richness is not about HOW MANY mechanisms you deploy.
It is about HOW MANY CHANNELS agree at each transition.
4 channels saying "threshold" simultaneously > 14 mechanisms scattered randomly.
======================================
```

---

## 8. ANTI-PATTERNS

### What Happens When Channels Are Confused With Levels

**ANTI-PATTERN 1: Scale Stacking (adding levels instead of channels)**

Symptom: Builder tries to create coherence at Navigation, Page, Section, Component, AND Character scales, with each scale getting its own unique treatment.
Result: Attention budget fragments. Scale 1 (spatial proportion) degrades. Builder produces metaphor-labeled zones but catastrophic whitespace (the Ceiling experiment outcome).
Fix: Stop at 3 designed scales (Page + Section + Component). Let Navigation and Character scales emerge from vocabulary constraint, not from deliberate targeting.

**ANTI-PATTERN 2: Channel Monotony (same channel at every transition)**

Symptom: Every section transition uses only spacing changes (Spatial channel). Background stays the same. Borders stay the same. Type stays the same. Just the gap between sections varies.
Result: Page feels "formatted, not designed." Transitions are invisible. PA-03 ("one designer or three?") fails because the transitions lack multi-channel coordination.
Fix: Apply Rule C-01: minimum 3 channels at every section boundary.

**ANTI-PATTERN 3: Channel Cacophony (all channels changing independently)**

Symptom: Background shifts but type doesn't match. Borders thicken but spacing loosens. Density increases but color gets warmer. Each channel says something different.
Result: Page feels "busy, noisy, disjointed." Channels CONFLICT instead of REINFORCE. The page has high channel count but zero channel coherence.
Fix: Apply Rule C-06: require reinforcing pairs. Channels must shift in the SAME semantic direction. If density increases, spacing should compress, background should cool, borders should appear/thicken. All saying "you are entering a denser zone."

**ANTI-PATTERN 4: Intentional Channel Neglect (skipping the orthogonal axis)**

Symptom: Page has beautiful chromatic, typographic, spatial, structural, density, and rhythmic channels. All 6 fire at every transition. But the sections are in arbitrary order. There is no argument arc, no cognitive choreography, no beginning-middle-end. The page is a mechanism showcase, not a document.
Result: High mechanism count, high channel count, low perceived quality. The page feels "demo-like" or "templatey." PA-05 DESIGNED score drops because the page lacks compositional intelligence.
Fix: Engage the Intentional channel explicitly. The metaphor agent must specify argument arc. The content architect must specify section ordering that creates cognitive progression. The intentionality builder must validate that the reading experience has shape.

**ANTI-PATTERN 5: Restraint Deficit (filling every matrix cell)**

Symptom: Builder targets 35/35 cells in the scale-channel matrix. Every scale, every channel, every cell filled with deliberate design.
Result: No perceptual rest. No "quiet" zones. No contrast between designed and un-designed. The page is SATURATED. Richness collapses because richness requires silence as context for signal. The page reads as "trying too hard" or "overwrought."
Fix: Apply Rule C-08: minimum 40% quiet zones. LEAVE CELLS EMPTY DELIBERATELY. Character-scale channels should emerge from vocabulary pressure, not from deliberate targeting. The restraint signal IS a channel.

**ANTI-PATTERN 6: Channel-Mechanism Confusion**

Symptom: Builder conflates "deploying a mechanism" with "activating a channel." Deploys 14 mechanisms but all in the same channel (e.g., all spatial: various spacing, margin, padding adjustments).
Result: Mechanism count is high but channel coverage is narrow. The page scores well on "mechanism count" but fails on "multi-channel encoding" -- only 1-2 channels are active despite 14 mechanisms being present.
Fix: Mechanisms are TOOLS; channels are DIMENSIONS. One mechanism can serve multiple channels (e.g., border-weight gradient serves both Structural and Density channels). But deploying 5 spatial mechanisms does not activate 5 channels -- it activates 1 channel (Spatial) with 5 tools. The relevant count is channels, not mechanisms.

---

## 9. OPERATIONAL FORMULAS

### Formula 1: Channel Density per Transition

```
CDT(transition) = count of channels that shift at this transition
                = |{chromatic, typographic, spatial, structural, density, rhythmic}
                    where channel_value_before != channel_value_after|

Target: CDT >= 3 at every transition (Rule C-01)
Optimal: CDT = 4-5 at major transitions, CDT = 2-3 at minor transitions
Warning: CDT = 6 at all transitions = no quiet transitions = cacophony risk
```

### Formula 2: Reinforcement Depth per Transition

```
RDT(transition) = count of channel pairs that encode the SAME semantic shift

Semantic directions:
  INTENSIFYING: denser, heavier, tighter, cooler, more structured, faster
  RELAXING: sparser, lighter, looser, warmer, less structured, slower

For each pair of shifting channels, check: do they move in the same direction?
Same direction = 1 reinforcing pair.

Target: RDT >= 2 at major transitions (Rule C-06)
Maximum meaningful: RDT = 10 (all pairs of 5 channels = C(5,2) = 10)
Typical strong transition: RDT = 3-6
```

### Formula 3: Matrix Coverage Score

```
MCS = (cells_with_deliberate_design / 35) x 100

Where a cell is "designed" if:
  - The channel manifests coherently at that scale
  - The manifestation is INTENTIONAL (not accidental/default)
  - The manifestation is CONSISTENT with the same channel at other scales

Tier targets:
  Floor: MCS >= 29% (10/35)
  Middle: MCS >= 51% (18/35)
  Ceiling: MCS >= 71% (25/35)
  Flagship: MCS >= 86% (30/35)
```

### Formula 4: Semantic Resonance Score

```
SRS = average(CDT across all transitions) x average(RDT across all transitions)

Interpretation:
  SRS < 3: Flat (channels deployed independently, no resonance)
  SRS 3-6: Functional (some multi-channel coordination)
  SRS 6-12: Resonant (deliberate multi-channel encoding)
  SRS 12-20: Harmonic (full semantic field -- CD-006 territory)
  SRS > 20: Oversaturated (possible cacophony -- check C-08)
```

### Formula 5: Restraint Ratio

```
RR = mechanisms_available_but_not_deployed / mechanisms_deployed

From mechanism catalog: 18 mechanisms available.
If builder deploys 12: RR = 6/12 = 0.5

Interpretation:
  RR < 0.3: Low restraint (deploying nearly everything available)
  RR 0.3-0.5: Moderate restraint (Middle tier typical)
  RR 0.5-0.8: High restraint (Ceiling tier optimal)
  RR > 0.8: Extreme restraint (potentially under-deploying)

Optimal for Flagship: RR = 0.3-0.5 (deploy 12-14 of 18, restrain 4-6)
```

### Formula 6: Spatial Confidence Index

```
SCI = 1 - (max_void_height / total_page_height)

Where max_void_height = the tallest contiguous area with NO content elements
(pure background, no text, no components, no borders)

Target: SCI >= 0.85 (no single void exceeds 15% of page height)
Warning: SCI < 0.70 (void exceeding 30% = catastrophic, the Ceiling failure)
VETO: SCI < 0.60 = DO NOT SHIP regardless of all other scores
```

### Formula 7: Channel-Scale Priority Score (for builder attention allocation)

```
CSPS(cell) = perceptual_impact(cell) x reproduction_cost_inverse(cell)

High CSPS = high impact, low cost = DESIGN THIS FIRST
Low CSPS = low impact, high cost = DESIGN THIS LAST (or leave empty)

Priority ordering (descending CSPS):
  1. Page-Spatial (squint test) -- ALWAYS FIRST
  2. Component-Structural (visible architecture)
  3. Section-Density (content pacing)
  4. Page-Chromatic (color identity)
  5. Section-Spatial (breathing room)
  6. Component-Typographic (type trinity)
  7. Page-Rhythmic (heartbeat)
  8. Section-Chromatic (zone transitions)
  ...
  33. Character-Rhythmic
  34. Navigation-Density
  35. Character-Structural
```

---

## 10. INTEGRATION WITH EXISTING PROMPT ARCHITECTURE

### Where This Material Maps to 00-PROMPT-STRUCTURE-OUTLINE.md

| This Document Section | Maps to Prompt Section | Specific Location |
|----------------------|----------------------|-------------------|
| Theory Summary + Anti-Scale Model | Layer 1: CONVICTION | Lines 7-10 of conviction text |
| Alexander/Salingaros Formula | Layer 1: CONVICTION | Mathematical grounding for "5 scales is ceiling" |
| Channel Taxonomy | Layer 4: REFERENCE LIBRARY | New reference file: `channel-taxonomy.md` |
| Binary Rules C-01 through C-08 | Layer 2: EXECUTION SPEC, section 2C | Add to existing compositional rules |
| Channel Self-Check | Layer 2: EXECUTION SPEC, section 2E | Add to existing builder self-check |
| Agent-Channel Ownership | Layer 3: COORDINATION SPEC, section 3A | Augment agent descriptions |
| Channel Communication Protocol | Layer 3: COORDINATION SPEC, section 3B | Add to checkpoint content requirements |
| Builder Quick-Reference | Per-agent memory for builder | Part of builder's 30-line context |
| Anti-Patterns | Layer 1: CONVICTION (negative examples) | "What NOT to do" conviction text |
| Operational Formulas | Layer 4: REFERENCE LIBRARY | Reference file for auditor use |

### Attention Cost Estimate

New rules C-01 through C-08 add **8 attention units** to the builder's load. However, C-04 (typography trinity) and C-07 (semantic density proportionality) overlap with existing rules, reducing the NET new attention to approximately **5-6 units**. This is within the budget ceiling of 37 attention units for the builder (current estimate from 00-PROMPT-STRUCTURE-OUTLINE: ~31 units, leaving room for 6).

### Contradiction Check

| New Rule | Potential Conflict | Resolution |
|----------|-------------------|------------|
| C-01 (3 channels per transition) | Existing 3-transition minimum | COMPATIBLE: the existing rule counts transitions; C-01 requires quality per transition |
| C-02 (chromatic-density alignment) | None found | N/A |
| C-03 (structural weight hierarchy) | Existing border-weight gradient mechanism | COMPATIBLE: C-03 makes the mechanism mandatory, not optional |
| C-05 (intentional arc minimum) | Could conflict with content-driven section ordering | COMPATIBLE: C-05 is visual treatment, not content ordering |
| C-06 (reinforcing pairs) | None found | N/A |
| C-08 (signal-to-silence 60:40) | Existing content-to-void >= 60:40 | COMPATIBLE but DISTINCT: content-to-void measures text vs whitespace; C-08 measures mechanism-heavy vs mechanism-quiet. A zone can have content (text) but be mechanism-quiet (plain text, no borders, no accent colors). |

---

## 11. CRITICAL REMINDERS FOR PROMPT ASSEMBLY

### What This Analysis Confirms

1. **5 scales IS the ceiling.** The Alexander/Salingaros formula proves it mathematically. Every cross-domain study confirms it empirically. Do NOT add Scale 6.

2. **The productive frontier is channels.** 7 channels x 5 scales = 35 cells of designable richness. The difference between Middle (18/35) and Crown Jewel (33/35) is channel depth, not scale count.

3. **The anti-scale model is operationally valid.** Middle (2 scales) beat Ceiling (4 scales) on PA-05. The model `Richness = semantic_density x restraint x spatial_confidence` explains this inversion. The execution prompt should ENCODE this model, not the additive scale model.

4. **Channels must REINFORCE, not merely coexist.** The Semantic Resonance discovery (from alternative mental models, report 02) is the key: 4 channels saying "threshold" simultaneously is worth more than 14 mechanisms scattered across independent channels. Resonance > enumeration.

5. **Spatial confidence has VETO.** SCI < 0.60 = DO NOT SHIP. This is the single most important gate in the entire system. No amount of channel depth rescues a page that fails the squint test. This must be in the execution spec as an absolute binary gate.

6. **Restraint is a channel, not the absence of channels.** Conspicuous absence -- leaving Character-scale cells empty, using 12 mechanisms when 18 are available -- is itself a design signal that communicates quality. The prompt must explicitly protect the builder's right to NOT fill every cell.

7. **The Intentional channel is the Ceiling-to-Flagship differentiator.** The showcase archaeology found 15-20% of crown jewel richness lives in 6 unmodeled dimensions (self-reference, pedagogical sequencing, cognitive mode transitions, structural bookending, meta-annotation, provenance threading). These all live in Channel 7 (Intentional). This channel is owned by Opus agents, not Sonnet builders. The prompt must give Opus agents explicit responsibility for this channel.

---

**END SCALE-CHANNEL INVOCATION ARCHITECTURE**

**Total lines:** ~530
**Binary rules added:** 8 (C-01 through C-08)
**Operational formulas:** 7 (CDT, RDT, MCS, SRS, RR, SCI, CSPS)
**Anti-patterns documented:** 6
**Channel taxonomy:** 7 channels with 5-scale manifestations each
**New attention units for builder:** ~5-6 (within budget)
