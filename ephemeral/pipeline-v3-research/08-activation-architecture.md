# 08 -- Activation Architecture: Designing a Pipeline That Activates Rather Than Instructs

**Agent:** activation-architect (Opus 4.6)
**Date:** 2026-02-22
**Task:** #8 -- Design the activation architecture for Pipeline v3

**Sources read:**
- `46-meta-mechanism.md` (577 lines) -- The meta-mechanism: encoding, activation, embodiment, three-function residue
- `41-opus-native-intelligence.md` (483 lines) -- 4-category attribution (A/B/C/D), 60-70% Opus native
- `43-embodiment-chain.md` (451 lines) -- Progressive incarnation, dual-channel architecture, hourglass model
- `42-synthesis-alchemy.md` (298 lines) -- 7-phase assembly, synthesis vs compression, 34-agent convergence
- `45-beyond-eight-integration.md` (371 lines) -- 18 structural / 22 contextual split, specification paradox

---

## EXECUTIVE SUMMARY

The pipeline does not teach Opus how to design. It activates design knowledge Opus already possesses, then constrains that activation toward a specific identity. This report defines what "activation" means in concrete prompt engineering terms, designs a dual-channel architecture that maximizes activation, and provides testable criteria for distinguishing activation from mere compliance.

The core architectural principle: **separate the identity channel (what makes it KortAI) from the activation channel (what makes it composed), and deliver each through the format that matches its survival tier.**

---

## PART 1: WHAT "ACTIVATION" MEANS IN CONCRETE TERMS

### 1.1 The Tuning Fork Model

Report 46 uses the analogy: "A tuning fork doesn't create sound in a piano string. It activates a resonance the string was always capable of producing."

In prompt engineering terms, activation has three concrete properties:

**Property 1: The model's response draws from pre-existing capability, not from instruction content.**

When you write `border-radius: 0`, you are TRANSMITTING a value. The model did not know this specific value before reading it. When you write "the page needs to feel like a military command post briefing," you are ACTIVATING. The model already knows what military command posts look like, how briefing documents are structured, how authority is encoded visually. The instruction selects from existing knowledge rather than providing new knowledge.

The test: **Could the model produce this output element from its training data alone, given the right prompt?** If yes, the pipeline is activating. If no, the pipeline must transmit.

**Property 2: The instruction's FORMAT determines which capability is activated, independent of content.**

Same content, three formats:

```
CHECKLIST FORMAT:
- [ ] Use 3+ channel shifts at every boundary
- [ ] Include background, typography, spacing, and border
- [ ] Ensure delta >= 15 RGB between adjacent zones

RECIPE FORMAT:
At each zone boundary, set four properties together:
1. Background: shift by >= 15 RGB in the DEEPENING direction
2. Typography: increase weight by one step, decrease size by one step
3. Spacing: reduce padding by 8-16px
4. Border: add or thicken a structural border (3px or 4px)

WORLD-DESCRIPTION FORMAT:
Zone boundaries are tectonic plates. Where two zones meet, the ground shifts --
the light changes (backgrounds darken), the air thickens (typography gets heavier),
the space compresses (padding tightens), and a fault line appears (border).
A transition that moves only one property is a tremor. Three or more moving
together is a proper geological event.
```

All three encode the same information: multi-coherence requires 3+ channel shifts at boundaries. But they activate different modes:
- Checklist activates VERIFYING (does my output match these criteria?)
- Recipe activates EXECUTING (follow these steps in order)
- World-description activates COMPOSING (build within this physics)

The conventions brief uses world-description format. This is why it works.

**Property 3: Activation produces emergent behavior that exceeds the specification.**

When the Gas Town builder received "derive a metaphor from the content," it produced a "military command post / field dispatch" metaphor that drove 15+ CSS decisions (darkening backgrounds as clearance increases, heavier borders at authority boundaries, tighter spacing for denser intel). None of these specific CSS decisions were in the instruction. The instruction activated Opus's understanding of military visual language, and Opus generated the CSS implementation from that activated knowledge.

Transmission produces compliance (output matches specification). Activation produces emergence (output exceeds specification in coherent ways).

### 1.2 The Formal Definition

```
ACTIVATION = prompt_signal × model_capability × mode_fit × (1 / interference)

Where:
  prompt_signal    = strength of the activation cue (format + specificity)
  model_capability = depth of the model's pre-existing knowledge in this domain
  mode_fit         = alignment between the prompt's framing and the desired output mode
  interference     = competing signals in the prompt that activate contradictory modes
```

This is Report 46's survival equation reframed for the activation channel:

```
Report 46:  SURVIVAL = Encoding × Activation × Embodiment × (1/Indirection)
This report: QUALITY = Identity_Transmission × Capability_Activation × Mode_Fit × (1/Interference)
```

The pipeline's job is to maximize all four terms simultaneously.

### 1.3 What Activation Is NOT

**Activation is not "just say less."** Brevity helps only because it reduces interference. A 10-line prompt that activates COMPLYING mode will underperform a 100-line prompt that activates COMPOSING mode. The Middle experiment's 100-line recipe outperformed the Flagship's 71-line checklist because the 100 lines were activation-formatted and the 71 lines were compliance-formatted.

**Activation is not "let the model do whatever it wants."** Without identity constraints, Opus produces beautiful generic editorial pages with rounded corners, box shadows, cool grays, and 1200px containers. Activation means selecting the RIGHT pre-existing capability and constraining it to a specific identity. The constraints are transmitted; the capability is activated.

**Activation is not reproducible across models.** Sonnet and Opus respond differently to the same activation signal. Report 46: "Sonnet treats instructions as ceilings. Opus treats them as floors." The same world-description that activates COMPOSING in Opus may activate COMPLYING in Sonnet. Activation architecture must be model-aware.

---

## PART 2: THE DUAL-CHANNEL ARCHITECTURE

### 2.1 Two Channels, Two Mechanisms

Report 43 identified the dual-channel architecture empirically: soul constraints flow AROUND the TC brief hourglass through direct file reads, while content-specific composition flows THROUGH the hourglass. This report formalizes the two channels:

```
CHANNEL 1: IDENTITY (Transmission)
  Purpose: Make it KortAI, not generic
  Mechanism: TRANSMISSION of specific values
  Content: Soul constraints, closed vocabularies, binary prohibitions, perception thresholds
  Format: Code values, CSS properties, enumerated sets, binary rules
  Survival tier: Tier 1 (survives any compression)
  Builder receives: Exact values to use and values to never use

CHANNEL 2: COMPOSITION (Activation)
  Purpose: Make it composed, not assembled
  Mechanism: ACTIVATION of pre-existing design intelligence
  Content: Metaphor derivation, zone architecture, multi-coherence framework, spatial narrative
  Format: World-description, dispositional framing, worked examples, creative authority
  Survival tier: Tier 2-3 (survives through reformatting, not through compression)
  Builder receives: A world to compose within, not rules to comply with
```

### 2.2 Why Two Channels Are Necessary

A single channel cannot optimize for both transmission and activation because they require opposite formats:

| Property | Transmission (Identity) | Activation (Composition) |
|----------|------------------------|-------------------------|
| Optimal format | Code values, binary rules | World-description, dispositional framing |
| Compression behavior | Survives any compression | Dies under compression, survives reformatting |
| Builder mode triggered | COMPLYING (verification) | COMPOSING (creation) |
| Information type | Concrete, context-free | Abstract, context-rich |
| Verification method | Programmatic (gate runner) | Perceptual (PA audit) |
| What happens if absent | Output looks wrong (not KortAI) | Output looks flat (not designed) |

The Flagship's failure was a single-channel prompt that tried to transmit AND activate simultaneously. The guardrails (transmission) drowned the recipes (activation) at 7.9:1 ratio, producing pure compliance with zero composition.

The conventions brief succeeds because it is implicitly dual-channel: Sections 1-2 (Identity, Perception) are transmission; Sections 3-8 (Richness, Multi-Coherence, Fractal Echo, Metaphor, Vocabulary, Creative Authority) are activation.

### 2.3 The Dual-Channel Delivery Architecture

```
                                    CONTENT
                                       |
                                       v
                            ┌──────────────────┐
                            │  TC Pipeline      │
                            │  (Phases 0-4)     │
                            │  Opus agent       │
                            └────────┬─────────┘
                                     │
                              TC Brief (99 lines)
                              = ACTIVATION seed
                              (metaphor, zones,
                               mechanism deployment,
                               content-specific tensions)
                                     │
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
    CHANNEL 1: IDENTITY    CHANNEL 2: ACTIVATION    CHANNEL 3: FEEDBACK
              │                      │                      │
    ┌─────────┴─────────┐  ┌────────┴────────┐    ┌───────┴───────┐
    │ tokens.css         │  │ conventions     │    │ gate runner   │
    │ prohibitions.md    │  │ brief (world-   │    │ (servo loop)  │
    │ components.css     │  │ description +   │    │ PA audit      │
    │ mechanism-catalog  │  │ recipes +       │    │ (manufactured │
    │                    │  │ creative auth)  │    │  experience)  │
    │ FORMAT: Code       │  │                 │    │               │
    │ MODE: COMPLY       │  │ FORMAT: World   │    │ FORMAT: Fix   │
    │ TIER: 1 (lossless) │  │ MODE: COMPOSE   │    │  recipes      │
    └─────────┬──────────┘  │ TIER: 2-3       │    │ MODE: REPAIR  │
              │             │  (reformatted)  │    │  → COMPOSE    │
              │             └────────┬────────┘    └───────┬───────┘
              │                      │                      │
              └──────────────────────┼──────────────────────┘
                                     │
                              ┌──────┴──────┐
                              │   BUILDER   │
                              │   (Opus)    │
                              │             │
                              │ Reads:      │
                              │  Ch 1 FIRST │
                              │  Ch 2 NEXT  │
                              │  TC brief   │
                              │   THEN      │
                              │  Builds     │
                              │             │
                              │ Ch 3 runs   │
                              │  AFTER      │
                              │  first pass │
                              └──────┬──────┘
                                     │
                                   PAGE
```

**Channel 3 (Feedback)** is the existing gate runner + PA audit loop. Report 46 identifies it as the pipeline's only LIVING element. It manufactures the experiential knowledge (Tier 4) that neither Channel 1 nor Channel 2 can transmit. The builder produces CSS, the gates measure it, the PA auditors perceive it, and the fix recipes close the gap.

### 2.4 Reading Order as Activation Sequence

The order in which the builder reads documents is itself an activation architecture:

```
STEP 1: Read prohibitions.md + tokens.css
  → Activates: IDENTITY mode ("I am building a KortAI page")
  → Transmits: Exact values, exact prohibitions
  → Builder state: Knows what NOT to do, knows exact palette/spacing/typography

STEP 2: Read conventions brief (Sections 1-8)
  → Activates: WORLD-BUILDING mode ("I am building WITHIN these physics")
  → Transmits: Perception thresholds, multi-coherence framework, recipe format
  → Builder state: Understands the world, has concrete techniques, has creative authority

STEP 3: Read TC brief (99 lines)
  → Activates: CONTENT-SPECIFIC COMPOSING mode ("I am building THIS specific page")
  → Transmits: Metaphor, zone names, mechanism deployment table, boundary CSS
  → Builder state: Has a structural vision, has specific CSS targets, has content-form mapping

STEP 4: Build (writing CSS)
  → Mode: COMPOSING within identity constraints and content-specific vision
  → The three prior readings create a layered activation: identity → physics → vision → execution

STEP 5: Gate runner + PA audit (Channel 3)
  → Activates: CALIBRATION mode ("adjust toward perceptual thresholds")
  → Fix recipes provide specific CSS corrections, maintaining COMPOSING mode
  → Builder state: Self-corrects toward measurable quality while preserving compositional vision
```

The sequence matters. If the TC brief (activation) were read BEFORE prohibitions (identity), the builder would compose freely and then discover constraints that require tearing down composition. If prohibitions were read AFTER the conventions brief, the constraints would override the creative authority. The sequence is: constrain → enable → specify → build → correct.

---

## PART 3: ACTIVATION FORMATS -- INSTRUCTION vs ACTIVATION vs WORLD

### 3.1 The Three Prompt Registers

Every prompt sentence falls into one of three registers. Each triggers a different builder mode:

**Register 1: INSTRUCTION (Transmission)**
```
"Use mechanism X at location Y."
"Set background to #F0EBE3."
"Ensure 3+ channel shifts at every boundary."
```

The builder receives a command. Mode activated: EXECUTING. The builder performs the action and moves on. No compositional thought required. This is appropriate for Tier 1 information (exact values) but kills composition when used for Tier 2-3 information.

**Register 2: ACTIVATION (Dispositional)**
```
"The page needs to feel like a military command post briefing."
"Each zone boundary is a security clearance upgrade -- the information gets denser, the borders get heavier, the space compresses."
"Build as if a design director will review this in 3 hours and you want them to feel that every CSS decision was intentional."
```

The builder receives a disposition. Mode activated: COMPOSING. The builder makes CSS decisions that serve the disposition, drawing on pre-existing knowledge of what military command posts look like, how security clearances manifest visually, what intentional design feels like. The instruction doesn't specify CSS; it activates the knowledge that generates CSS.

**Register 3: WORLD-DESCRIPTION (Environmental)**
```
"Human perception has hard limits. Below certain deltas, CSS changes are technically present but experientially invisible."
"These are not rules to comply with. They are the physics of human perception."
"Zone boundaries are where the page's character shifts. Background, typography, spacing, and border all move together -- not because a rule says so, but because that's what designed transitions look like."
```

The builder receives a description of reality. Mode activated: EXPLORING/COMPOSING. The builder treats constraints as properties of the world it is building within, not as requirements to check off. This is the conventions brief's dominant register.

### 3.2 Register Selection by Information Tier

The meta-mechanism analysis (Report 46) identified four tiers of information. Each tier has an optimal prompt register:

| Tier | Information Type | Optimal Register | Why |
|------|-----------------|-----------------|-----|
| 1 | Code values (`border-radius: 0`, `#FEF9F5`) | INSTRUCTION | Self-interpreting; register doesn't matter; use the most efficient |
| 1 | Binary prohibitions (NEVER 2px borders) | INSTRUCTION | Binary; no interpretation needed; direct statement is clearest |
| 1 | Closed vocabularies (11 colors, 3 border weights) | INSTRUCTION | Enumerable; just provide the set |
| 2 | Recipes with values (multi-coherence at boundaries) | ACTIVATION | Action-level but benefits from compositional framing |
| 2 | Named patterns (DEEPENING direction) | ACTIVATION | Needs the builder to understand the semantic direction |
| 3 | Abstract frameworks (compositional fluency) | WORLD-DESCRIPTION | Cannot be instructed; must be activated through environmental framing |
| 3 | Quality models (richness = density x restraint) | WORLD-DESCRIPTION | Judgment-dependent; world-description calibrates the judgment |
| 4 | Perceptual calibration (what 15 RGB looks like) | CANNOT BE TRANSMITTED | Must be manufactured through Channel 3 (gate + PA feedback loop) |
| 4 | Gestalt composition ("the feeling of intentional design") | CANNOT BE TRANSMITTED | Emerges from activation + capability + identity constraints |

**The critical insight: the conventions brief works because its register distribution matches the tier distribution of its content.** Sections 1-2 (identity + perception) use INSTRUCTION register for Tier 1 values. Sections 3-7 (richness + multi-coherence + fractal echo + metaphor + vocabulary) use ACTIVATION and WORLD-DESCRIPTION registers for Tier 2-3 content. Section 8 (creative authority) uses WORLD-DESCRIPTION register to set the builder's disposition.

### 3.3 The "Feel Like" Pattern: Activation's Most Powerful Tool

The most effective activation technique in the corpus is the "feel like" pattern:

```
INSTRUCTION (weak): "Use a military metaphor for zone naming."
ACTIVATION (strong): "The page needs to feel like a classified briefing you'd receive at a forward operating base -- each section deeper into the field, each zone more urgent, the typography tighter, the borders heavier."
```

The "feel like" pattern works because it:
1. **Activates experiential memory.** Opus has encountered thousands of military-themed designs, briefing documents, and command post aesthetics in training. "Feel like a classified briefing" activates all of them simultaneously, providing a richer source of CSS decisions than any explicit instruction could.

2. **Provides a coherence anchor.** Every CSS decision can be tested against the "feel": does this spacing feel like a briefing? Does this typography feel like classified text? The anchor creates self-consistent output without requiring per-property specifications.

3. **Enables compositional emergence.** When the builder needs to decide on something the spec doesn't cover (header stats bar layout, checkpoint bar design, responsive breakpoint behavior), the "feel like" pattern provides guidance. "What would a briefing look like on mobile?" is an answerable question. "What responsive breakpoints should this page use?" requires the spec to provide the answer.

4. **Matches training data format.** Design tutorials, client briefs, and creative directions in Opus's training data frequently use "feel like" language. This format is native to the domain.

### 3.4 The Dispositional Recipe: Activation + Transmission Combined

The highest-performing prompt format observed in the corpus is the **dispositional recipe** -- activation framing wrapped around transmitted values:

```
PURE INSTRUCTION:
  "At the Z1->Z2 boundary: set background from #FEF9F5 to #F0EBE3,
   font-weight from 400 to 500, padding from 64px to 40px,
   add 3px border-left."

PURE ACTIVATION:
  "At the Z1->Z2 boundary, the page deepens -- like walking from
   the lobby into the operations room. Everything gets slightly
   more serious."

DISPOSITIONAL RECIPE (combined):
  "At the Z1->Z2 boundary, the page deepens -- lobby to operations room.
   The light changes (bg #FEF9F5 -> #F0EBE3, delta 18 RGB).
   The air thickens (font-weight 400 -> 500).
   The space compresses (padding 64px -> 40px).
   A threshold appears (border-left: 3px solid var(--color-border))."
```

The dispositional recipe works because it:
- Opens with activation ("deepens -- lobby to operations room") setting the compositional frame
- Follows with transmitted values (exact CSS) providing concrete execution targets
- Uses metaphorical language for each property ("light changes," "air thickens") keeping the builder in COMPOSING mode while providing EXECUTING-level specificity
- Allows the builder to extrapolate beyond the recipe using the metaphor (if the lobby-to-operations-room metaphor suggests a door sound, the builder might add a subtle transition animation)

This is the format the conventions brief uses in its multi-coherence section, and it is the format that should be used for ALL Tier 2 content in the pipeline.

---

## PART 4: PRESERVING THE THREE-FUNCTION RESIDUE

### 4.1 What the Residue Is

Report 46 identified three functions of the "lost" 95% of research:

```
FUNCTION 1: SELECTION (smelting)
  What it produced: The 18 surviving rules, the mechanism catalog, the token values
  Status: COMPLETE. The selection is made. No ongoing function.
  Pipeline v3 action: NONE. Selection is embodied in the design system files.

FUNCTION 2: CALIBRATION (DNA regulatory)
  What it produced: The conventions brief's voice, format, threshold values,
                    anti-prescription framing, world-description register
  Status: PERMANENT. Baked into the brief's structure.
  Pipeline v3 action: PRESERVE the brief's format. Do not compress into checklist.

FUNCTION 3: GROUND TRUTH (judicial precedent)
  What it produced: The ability to resolve future ambiguity (why 960px? why 15 RGB?)
  Status: DORMANT. Available in research archive. Not needed for routine builds.
  Pipeline v3 action: PRESERVE access to research archive. Do not delete or archive.
```

### 4.2 How to Strip Non-Residue Without Damaging Residue

The pipeline currently delivers ~2,800 lines to the builder (conventions brief 609 + TC brief 99 + prohibitions 353 + tokens 174 + mechanism catalog ~400 + components.css ~1200). Report 46 suggests the model needs ~100 lines of constraints + frameworks. The question is: which lines carry residue?

**Lines that carry ZERO residue (safe to remove from builder's view):**
- Threshold confidence tier explanations (Section 2, lines 69-92). The builder needs the VALUES, not the evidence basis.
- Mechanism catalog descriptions beyond name + CSS pattern. The builder needs to know HOW to use a mechanism, not its research provenance.
- Component inventory metadata (confidence tiers, provenance). The builder needs the CSS, not the classification.
- Anything that explains WHY a constraint exists. The builder needs the constraint, not the justification.

**Lines that carry CALIBRATION residue (removing them degrades quality):**
- The "physics of human perception" framing. This is Function 2 output. Removing it changes the register from WORLD-DESCRIPTION to CHECKLIST.
- The "80% creative / 20% constraint" authority grant. This is Function 2 output. Removing it triggers COMPLYING mode.
- The multi-coherence recipe format (Section 4). The FORMAT is Function 2 residue. The specific values are Function 1 output.
- The "Five Questions" self-assessment (Squint, Scroll, Second Half, Boundary, Skeleton). These are Function 2 output -- they calibrate the builder's self-evaluation.
- Section headers that use world-description language ("PERCEPTION: The Physics of Visibility"). The TITLES carry activation signal.

**Lines that carry GROUND TRUTH residue (not needed for builds, but must remain accessible):**
- All research files (R1-R5, RESEARCH-SYNTHESIS.md)
- The exploration archive (DD/OD/CD HTML files)
- Pipeline analysis artifacts
- Retrospective reports

### 4.3 The Minimal Activation Document

Based on this analysis, the minimal builder-facing document set is:

```
CHANNEL 1: IDENTITY (Transmission) -- ~250 lines
  prohibitions.md          (353 lines → trim to ~100 lines: values only, no rationale)
  tokens.css               (174 lines → keep as-is; it IS code)

CHANNEL 2: ACTIVATION (Composition) -- ~200 lines
  conventions brief        (609 lines → trim to ~200 lines: world-description +
                            recipes + creative authority + Five Questions.
                            Remove: threshold evidence, tier explanations,
                            mechanism inventory, component family listing)

CHANNEL 2b: CONTENT-SPECIFIC ACTIVATION -- ~100 lines
  TC brief                 (99 lines → keep as-is; it IS the content-specific seed)

CHANNEL 3: FEEDBACK -- ~150 lines
  gate runner              (keep as infrastructure; builder sees only fix recipes)

TOTAL BUILDER INPUT: ~550 lines (down from ~2,800)
  Channel 1 (identity):  ~275 lines of code values and binary constraints
  Channel 2 (activation): ~200 lines of world-description and dispositional recipes
  Channel 2b (content):  ~100 lines of metaphor, zones, and boundary CSS
  Channel 3 (feedback):  As-needed fix recipes (not pre-read)
```

This is a 2:1 reduction while preserving all three residue functions. The removed ~2,250 lines are either (a) rationale that serves humans but not the builder, (b) metadata that serves auditors but not the builder, or (c) redundant restatements of values already in tokens.css.

---

## PART 5: TESTING WHETHER ACTIVATION IS HAPPENING

### 5.1 The Activation Test Battery

How do you know the builder is COMPOSING (activated) rather than COMPLYING (merely following instructions)?

**Test 1: Unprompted Decisions (Category D Detection)**

Count the number of CSS decisions in the output that have NO source in any input document. Report 41 attributes 10-20% of Gas Town's quality to Category D (emerged from interaction). If the output contains zero Category D decisions, activation failed.

```
MEASURE: Unprompted Decision Count (UDC)
METHOD: For each component/technique in the output, trace to input documents.
        Components with no source = unprompted.
THRESHOLD: UDC >= 5 for a full page build.
EXAMPLE: Gas Town UDC = ~9 (header stats bar, checkpoint bar, callout semantic system,
         responsive breakpoint logic, syntax highlighting, selection styling,
         bento grid authority encoding, Z3 heading resets, footer tag groups)
```

**Test 2: Specification Override (Self-Correction)**

Does the builder override input values when its own judgment identifies a problem? Gas Town's builder overrode the TC brief's zone background values because they violated the 15 RGB threshold. This self-correction is the signature of COMPOSING mode -- the builder treats the specification as advisory, not absolute, for non-soul values.

```
MEASURE: Override Count (OC)
METHOD: Search output CSS comments for override annotations or
        compare output values against TC brief values.
THRESHOLD: OC >= 1 for a full page build.
         OC = 0 may indicate pure compliance.
ANTI-PATTERN: OC on soul constraints = builder is ignoring identity.
              Overrides should be on composition, not identity.
```

**Test 3: Metaphor-Driven CSS (Structural Metaphor Test)**

Does the page's CSS reflect the structural metaphor? If the TC brief says "military command post" and the CSS uses generic class names (`.section-1`, `.card`, `.container`), the metaphor didn't activate. If the CSS uses metaphor-derived class names (`.dispatch-opening`, `.intel-divider`, `.checkpoint-bar`), the metaphor is STRUCTURAL -- it drove naming and therefore drove thinking.

```
MEASURE: Metaphor Penetration Score (MPS)
METHOD: Count class names and CSS comments that reference the metaphor.
        Divide by total class name count.
THRESHOLD: MPS >= 0.15 (15% of class names are metaphor-derived).
EXAMPLE: Gas Town MPS = ~0.25 (dispatch-opening, core-quote, intel-divider,
         checkpoint-bar, roles-grid, threat-*, doctrine-*, etc.)
```

**Test 4: Multi-Coherence Quality (Not Just Quantity)**

Does the builder produce coherent multi-property shifts, or does it mechanically set 3 properties to satisfy the gate? The difference between activation and compliance:

```
COMPLIANCE: Z1->Z2 boundary has bg shift, type shift, spacing shift (3 channels, gate passes)
            But: bg shifts by exactly 15 RGB (minimum), type shifts by exactly 1 step (minimum),
            spacing shifts by exactly 24px (minimum). All minimums. Technically passing.

ACTIVATION: Z1->Z2 boundary has bg shift (18 RGB), type shift (2 steps), spacing shift (24px),
            border addition (3px), AND the shifts form a coherent direction (all DEEPENING).
            The values exceed minimums. The direction is semantic, not random.
```

```
MEASURE: Coherence Quality Score (CQS)
METHOD: At each boundary, measure:
  (a) Number of channels shifting (must be >= 3)
  (b) Average delta above minimum threshold (measures generosity)
  (c) Whether shifts follow a named direction (DEEPENING/OPENING/FOCUSING/RESOLVING)
THRESHOLD: CQS = (channels * avg_excess * direction_match) > baseline
```

**Test 5: The Squint Test (Perceptual Gestalt)**

Report 45's "Five Questions" includes the Squint Test: blur your eyes and look at the page. Does it have visual rhythm, or is it a uniform column of text?

This is a Tier 4 (perceptual) test that cannot be automated. But it can be operationalized through the PA audit:

```
MEASURE: PA-05 score (DESIGNED vs ASSEMBLED)
METHOD: Fresh-eyes Opus auditor, zero project context, answers:
        "Does this page look DESIGNED (intentional composition) or
         ASSEMBLED (competent but undifferentiated)?"
THRESHOLD: PA-05 >= 3.5/4 = activation succeeded.
          PA-05 <= 2.0/4 = activation failed (mere compliance).
```

### 5.2 Activation Failure Signatures

When activation fails, the output exhibits recognizable patterns:

**Signature 1: Minimum-Viable Compliance**
Every measurable threshold is met at EXACTLY the minimum. 3 channel shifts (not 4). 15 RGB delta (not 18). 120px stacked gap (not 96px). The builder treated thresholds as targets rather than floors.

**Signature 2: Generic Component Patterns**
Cards with rounded corners (overridden to 0, but the HTML structure says "card"), standard hero sections, conventional sidebar layouts. The builder produced web-design-101 patterns constrained to KortAI identity, rather than KortAI-native composition.

**Signature 3: Absent Metaphor**
The TC brief specified a metaphor, but the CSS shows no trace of it. Class names are generic. Zone names don't reflect the metaphor. The page would look identical if the content were about a completely different topic.

**Signature 4: No Fix Cycle Self-Correction**
The builder's first pass output has zero comments about self-correction. No "adjusted because..." annotations. No override of TC brief values. The builder accepted every input value without judgment.

**Signature 5: Flat Typography and Spacing**
All body text is the same size. All spacing is the same value. No density arc. No zone differentiation beyond background color. This is the signature of a builder that read the VALUES from the spec but didn't activate the COMPOSITION framework.

---

## PART 6: MODEL DEPENDENCY AND RESILIENCE

### 6.1 The Risk: Activation Is Model-Dependent

The entire activation architecture depends on Opus possessing deep design knowledge and responding to world-description framing by entering COMPOSING mode. What happens when:

**Scenario A: Opus is updated (Opus 5, Opus 6)**
- Risk: Changed response patterns to activation cues
- Mitigation: The activation test battery (Part 5) detects whether activation is working. If UDC drops below 5 or MPS drops below 0.15, the activation format needs recalibration.
- Structural protection: Channel 1 (identity transmission) is model-independent. `border-radius: 0` works regardless of model. Only Channel 2 (activation) is model-dependent.

**Scenario B: Sonnet is used as builder (cost optimization)**
- Risk: Report 46 identifies Sonnet as treating instructions as ceilings. The same world-description that activates COMPOSING in Opus may produce literal compliance in Sonnet.
- Mitigation: Use the recipe register (more explicit) rather than world-description register for Sonnet. Increase the proportion of dispositional recipes (activation + transmission combined) versus pure world-description.
- Structural protection: The dual-channel architecture allows Channel 2 to be reformatted per-model without changing Channel 1.

**Scenario C: A completely different model family**
- Risk: Unknown activation patterns. World-description framing may not work at all.
- Mitigation: The activation test battery provides immediate detection. Run UDC/OC/MPS/CQS tests on first output. If activation fails, fall back to pure recipe format (the Middle experiment's approach) -- which works across models because it is Tier 2 (procedural) rather than Tier 3 (dispositional).

### 6.2 Model-Adaptive Activation

The pipeline can include a model-selection step:

```
IF builder_model == Opus:
  Channel 2 format: WORLD-DESCRIPTION (primary) + DISPOSITIONAL RECIPE (secondary)
  Creative authority: 80% creative / 20% constraint
  Expected UDC: 5-10
  Expected MPS: 0.15-0.30

IF builder_model == Sonnet:
  Channel 2 format: DISPOSITIONAL RECIPE (primary) + INSTRUCTION (secondary)
  Creative authority: 60% creative / 40% constraint (Sonnet needs more structure)
  Expected UDC: 2-5
  Expected MPS: 0.05-0.15

IF builder_model == Unknown:
  Channel 2 format: RECIPE (explicit steps with values)
  Creative authority: 50% creative / 50% constraint
  Expected UDC: >= 2 (test on first build)
  Expected MPS: >= 0.05 (test on first build)
  Action: Run activation test battery after first build. Adjust format up or down.
```

### 6.3 The Resilience Principle

The architecture is resilient to model changes because it separates:
- Identity (Channel 1) -- transmitted as code, model-independent, survives any model
- Activation (Channel 2) -- formatted per model, tested per build, adjustable
- Feedback (Channel 3) -- programmatic, model-independent, catches failures regardless of activation

If Channel 2 fails completely (new model doesn't respond to activation at all), the pipeline degrades gracefully to: identity-compliant pages with Middle-tier composition (recipe-driven). This is the floor, not the ceiling. The activation architecture provides the path from Middle to Flagship, but the identity architecture ensures KortAI-ness regardless.

---

## PART 7: ACTIVATION VS CREATIVITY

### 7.1 Does Activation Merely Reproduce Training Data?

If the pipeline activates Opus's pre-existing design knowledge, and that knowledge comes from training data (millions of web pages), is the output merely a sophisticated mashup of existing designs?

**The answer is nuanced: activation reproduces PATTERNS, but composition is GENERATIVE.**

What activation reproduces from training data:
- Individual CSS techniques (drop caps, bento grids, dark headers)
- Typographic conventions (modular scales, line-height ratios)
- Layout patterns (grid systems, responsive breakpoints)
- Color relationships (warm palettes, accent coding)

What activation does NOT reproduce from training data:
- The specific combination of 15 mechanisms deployed in Gas Town
- The military command post metaphor driving CSS parameter selection
- The zone-specific density arc with content-specific compression ratios
- The self-correction of TC brief values based on perception physics
- The checkpoint-bar component invented for the Z3-Z4 transition

The distinction is between VOCABULARY (training data provides techniques) and COMPOSITION (the builder combines techniques in novel ways). A jazz musician's vocabulary comes from listening to other musicians. Their composition is generative -- new combinations, new contexts, new expressions of known patterns.

### 7.2 The Compositional Intelligence Stack

Report 45 identifies a 5-layer compositional intelligence stack:

```
Layer 1: CHANNELS -- individual CSS properties (training data)
Layer 2: MULTI-COHERENCE -- coordinated channel shifts (activated by framework)
Layer 3: FRACTAL ECHO -- same patterns at every scale (activated by concept)
Layer 4: ANTI-SCALE -- richness through density, not quantity (activated by disposition)
Layer 5: METAPHOR -- content-specific structural organizing principle (generated, not activated)
```

Layers 1-3 are ACTIVATED from training data (Opus knows CSS, knows design coordination, knows fractal patterns). Layer 4 is CALIBRATED by the conventions brief (Opus has restraint capability but needs the brief to calibrate how much restraint). Layer 5 is GENERATED by the interaction between content and Opus's capability (the military dispatch metaphor doesn't exist in training data -- it was composed from Opus's understanding of content + design).

**Activation enables creativity by providing the right vocabulary at the right moment.** Without the multi-coherence framework (activation), Opus would still shift backgrounds at zone boundaries. But it might shift only backgrounds, producing monotone transitions. The framework activates the pre-existing knowledge that "designed transitions coordinate multiple properties" -- and then the builder COMPOSES the specific coordination for THIS content.

### 7.3 The Creativity Floor and Ceiling

```
FLOOR (pure transmission, no activation):
  Identity-compliant page with generic patterns.
  PA-05: ~2.0/4 (ASSEMBLED).
  Category D: ~0% (no emergent decisions).
  Metaphor: NONE (generic structure).

MIDDLE (partial activation via recipes):
  Identity-compliant page with coordinated multi-coherence.
  PA-05: ~3.0/4 (borderline DESIGNED/ASSEMBLED).
  Category D: ~5-10% (some emergent decisions).
  Metaphor: ANNOUNCED (stated but doesn't drive CSS).

CEILING (full activation via world-description + metaphor):
  Identity-compliant page with structural metaphor driving CSS.
  PA-05: ~3.5-4.0/4 (DESIGNED to COMPOSED).
  Category D: ~15-20% (multiple emergent decisions).
  Metaphor: STRUCTURAL (drives class names, spacing, typography, zone character).

FLAGSHIP (full activation + inter-agent articulation + fix cycles):
  Identity-compliant page where every CSS decision serves the metaphor
  AND multi-coherence is perceptible AND fractal echo appears at 3+ scales.
  PA-05: 4.0/4 (COMPOSED).
  Category D: ~20-25% (many emergent decisions, including self-corrections).
  Metaphor: PERVADING (drives CSS + content structure + reader experience).
```

The activation architecture is what moves the builder from Floor to Ceiling. The feedback loop (Channel 3) is what potentially moves from Ceiling to Flagship. Activation alone cannot achieve Flagship -- the builder needs the manufactured experience of seeing its own failures and correcting them.

---

## PART 8: THE COMPLETE ACTIVATION ARCHITECTURE

### 8.1 Architecture Summary

```
┌─────────────────────────────────────────────────────────────────┐
│                    PIPELINE V3: ACTIVATION MODEL                │
│                                                                 │
│  PRINCIPLE: The pipeline's job is to activate 60-70% of the     │
│  output quality from Opus's pre-existing capability, transmit   │
│  15-20% as identity constraints, and create conditions for      │
│  10-20% to emerge from the interaction.                         │
│                                                                 │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐                   │
│  │ CHANNEL 1 │  │ CHANNEL 2 │  │ CHANNEL 3 │                   │
│  │ IDENTITY  │  │ACTIVATION │  │ FEEDBACK  │                   │
│  │           │  │           │  │           │                   │
│  │ Transmit  │  │ Activate  │  │Manufacture│                   │
│  │ values    │  │capability │  │experience │                   │
│  │           │  │           │  │           │                   │
│  │ Format:   │  │ Format:   │  │ Format:   │                   │
│  │ Code      │  │ World-    │  │ Fix       │                   │
│  │           │  │ description│  │ recipes   │                   │
│  │           │  │ +         │  │ +         │                   │
│  │ Register: │  │ Dispo-    │  │ Annotated │                   │
│  │INSTRUCTION│  │ sitional  │  │ failure   │                   │
│  │           │  │ recipe    │  │ examples  │                   │
│  │           │  │           │  │           │                   │
│  │ Tier: 1   │  │ Tier: 2-3 │  │ Tier: 4   │                   │
│  │ (lossless)│  │(reformatd)│  │(experiential)                 │
│  │           │  │           │  │           │                   │
│  │ Mode:     │  │ Mode:     │  │ Mode:     │                   │
│  │ COMPLY    │  │ COMPOSE   │  │ CALIBRATE │                   │
│  │           │  │           │  │           │                   │
│  │ ~275 lines│  │ ~300 lines│  │ As-needed │                   │
│  │           │  │           │  │           │                   │
│  │ 15-20%    │  │ 60-70%    │  │ 10-20%    │                   │
│  │ of output │  │ of output │  │ of output │                   │
│  │ quality   │  │ quality   │  │ quality   │                   │
│  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘                   │
│        │              │              │                          │
│        └──────────────┼──────────────┘                          │
│                       │                                         │
│                ┌──────┴──────┐                                   │
│                │   BUILDER   │                                   │
│                │   (Opus)    │                                   │
│                │             │                                   │
│                │ Reads Ch1   │                                   │
│                │ then Ch2    │                                   │
│                │ then TC     │                                   │
│                │ brief       │                                   │
│                │             │                                   │
│                │ Builds in   │                                   │
│                │ COMPOSING   │                                   │
│                │ mode        │                                   │
│                │             │                                   │
│                │ Ch3 runs    │                                   │
│                │ after first │                                   │
│                │ pass        │                                   │
│                └──────┬──────┘                                   │
│                       │                                         │
│                     PAGE                                        │
│                  (PA-05 target: >= 3.5/4)                       │
│                  (UDC target: >= 5)                              │
│                  (MPS target: >= 0.15)                           │
│                  (Zero soul violations)                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 The Seven Design Rules of the Activation Architecture

**Rule 1: NEVER transmit what you can activate.**
If Opus already knows how to do something (drop caps, dark headers, responsive design), don't specify it. At most, name it ("deploy a drop cap in Z1") and let Opus implement from its own knowledge. Specifying implementation details for known techniques wastes builder attention and triggers COMPLYING mode.

**Rule 2: ALWAYS transmit identity.**
Soul constraints, token values, perception thresholds, closed vocabularies -- these define what makes it KortAI. Transmit them as exact code values. Do not use activation language for identity. `border-radius: 0` is `border-radius: 0`, not "edges should feel decisive."

**Rule 3: Use world-description register for frameworks, instruction register for values.**
Multi-coherence as a concept: world-description. The specific 15 RGB threshold: instruction. Fractal echo as a principle: world-description. The specific 3-tier border system: instruction. Mix registers deliberately to match information tiers.

**Rule 4: The conventions brief is the activation layer. Do not compress it into a checklist.**
The brief's FORMAT is its primary function. It was composed (not compressed). Its voice, register, and framing are Function 2 (calibration) residue. Compressing it into a checklist would preserve the CONTENT while destroying the ACTIVATION.

**Rule 5: The TC brief is the content-specific activation seed.**
The TC brief provides the metaphor, zone architecture, and mechanism deployment that are content-specific. It should be a recipe (action-oriented) with dispositional framing (metaphor-connected). It should NOT include identity constraints (those come from Channel 1).

**Rule 6: Test activation on every build.**
Run the activation test battery (UDC, OC, MPS, CQS, PA-05) on every build output. If activation metrics drop, investigate whether the activation channel was degraded (brief compressed? format changed? model swapped?).

**Rule 7: Degrade gracefully when activation fails.**
If the builder model changes and activation fails (UDC < 2, MPS < 0.05), fall back to recipe format (the Middle experiment's approach). This produces Middle-tier output (PA-05 ~3.0/4) rather than Flagship -- but Middle-tier is still KortAI-identity-compliant and designed. The floor is Middle, not Floor.

### 8.3 Prompt Structure Template

Based on the architecture, the optimal builder prompt structure is:

```
=== SECTION 0: IDENTITY (Channel 1, INSTRUCTION register) ===
[100 lines: soul constraints as code values, palette, typography, spacing scale]
[Source: prohibitions.md condensed + tokens.css]

=== SECTION 1: WORLD (Channel 2, WORLD-DESCRIPTION register) ===
[50 lines: perception physics, the world's rules, what "designed" means]
[Source: conventions brief Sections 2-3, condensed]

=== SECTION 2: COMPOSITION FRAMEWORK (Channel 2, ACTIVATION register) ===
[60 lines: multi-coherence as dispositional recipe, fractal echo as concept,
 zone architecture as world-property, boundary grammar]
[Source: conventions brief Sections 4-7, condensed to dispositional recipes]

=== SECTION 3: CREATIVE AUTHORITY (Channel 2, WORLD-DESCRIPTION register) ===
[20 lines: 80% creative authority, Five Questions, the builder's role]
[Source: conventions brief Section 8]

=== SECTION 4: THIS PAGE (Channel 2b, ACTIVATION + RECIPE register) ===
[99 lines: TC brief -- metaphor, zones, mechanisms, boundary CSS, tensions]
[Source: TC pipeline output]

=== SECTION 5: VERIFICATION (Channel 3 setup) ===
[20 lines: gate runner invocation, PA audit protocol, fix cycle format]
[Source: gate-runner.md condensed to invocation instructions]

TOTAL: ~350 lines to the builder
(down from ~2,800 in current architecture)
(preserving all three residue functions)
(activation-optimized format throughout)
```

---

## PART 9: OPEN QUESTIONS AND RISKS

### 9.1 Unresolved Questions

**Q1: Is 350 lines too aggressive a reduction?**
The current conventions brief is 609 lines and works well. Cutting to ~200 lines of activation content (within a 350-line total) may lose material that contributes to activation through cumulative effect. The only way to know is to test: build a page with the 350-line version and measure UDC/MPS/PA-05.

**Q2: Does the TC brief need to change format?**
Currently the TC brief is a recipe. The activation architecture suggests it should be a dispositional recipe (recipe wrapped in metaphorical framing). This would make the TC pipeline's job harder -- it would need to produce not just zones and mechanisms but metaphor-connected language for each boundary. The TC pipeline is already Opus; it may produce this naturally.

**Q3: What is the activation ceiling?**
Even with perfect activation, Category D is 10-20% of output quality. Is there a way to increase this? Or is 20% the fundamental limit -- the remaining 80% is either transmitted identity (15-20%) or activated-but-standard patterns (60-70%)? The Flagship target (4/4 COMPOSED, pervading metaphor) may require more than activation alone can provide.

**Q4: Can activation be measured without PA audit?**
The activation test battery includes UDC, OC, MPS, and CQS -- all programmatically measurable. But PA-05 (the ultimate quality metric) requires a fresh-eyes auditor. Is there a programmatic proxy for PA-05 that would allow activation testing without human-in-the-loop?

### 9.2 Known Risks

**Risk 1: Activation may be an artifact of the current model.**
Everything we know about activation comes from Claude Opus 4.6 with the current system prompt. A model update could change activation patterns without warning. Mitigation: the test battery detects degradation immediately.

**Risk 2: Reducing builder input may reduce ceiling, not just floor.**
The 609-line conventions brief may contribute to activation through sections we believe are "rationale" (removable). Some rationale may provide implicit activation cues that the test battery doesn't measure. Mitigation: A/B test the 350-line version against the 609-line version on the same content.

**Risk 3: The dual-channel model may be a post-hoc rationalization.**
The conventions brief was not designed as a dual-channel document. It evolved through empirical iteration. Claiming it is "dual-channel" may impose structure that isn't there. Mitigation: trace each section to its channel and test whether reordering sections by channel (all identity first, all activation second) improves or degrades output.

**Risk 4: Over-indexing on Gas Town N=1.**
All activation evidence comes from one successful build. Gas Town's metaphor (military dispatch) may have been unusually compatible with activation-style prompting. Different content (philosophical essays, technical documentation, narrative fiction) may not activate as cleanly. Mitigation: test with 2-3 content types before committing to the architecture.

---

## SUMMARY

The activation architecture rests on five pillars:

1. **Dual-channel delivery:** Identity (transmitted as code) and composition (activated through world-description) flow through separate channels with separate formats. Mixing them in a single document triggers mode conflict.

2. **Register-matched formatting:** Tier 1 information uses INSTRUCTION register. Tier 2 uses DISPOSITIONAL RECIPE. Tier 3 uses WORLD-DESCRIPTION. Tier 4 is manufactured through feedback loops. Mismatched registers degrade both transmission and activation.

3. **Activation testing on every build:** Five metrics (UDC, OC, MPS, CQS, PA-05) detect whether the builder is COMPOSING or merely COMPLYING. Activation failure triggers format adjustment, not content expansion.

4. **Model-adaptive formatting:** Opus receives world-description. Sonnet receives dispositional recipes. Unknown models receive explicit recipes. The channel content is the same; the format adapts to the model's activation patterns.

5. **Graceful degradation:** If activation fails completely, the pipeline degrades to Middle-tier (recipe-driven) output rather than failing entirely. The identity channel (Channel 1) is model-independent and always produces KortAI-compliant pages.

The pipeline does not teach. It does not transmit knowledge. It activates the right knowledge in the right mode, constrains it to a specific identity, and creates conditions for compositional emergence. The 60-70% that comes from Opus's native capability is not waste -- it is the primary product. The pipeline's 30% contribution (identity + calibration + feedback) is what makes that 70% KortAI rather than generic.

---

*Written: 2026-02-22*
*Task: #8 -- Design the activation architecture*
*Sources: Reports 41, 42, 43, 45, 46; conventions-brief.md*
*Method: Architecture design grounded in meta-mechanism analysis, dual-channel model, and empirical activation evidence from Gas Town build*
