# Instruction Format Exploration: Beyond Recipe, Checklist, and Brief

**Author:** format-explorer (Opus 4.6)
**Date:** 2026-02-19
**Task:** Explore whether a different instruction format can carry compositional intelligence without compression loss, under 200 lines
**Sources:** CD-006 (39/40), mechanism-catalog.md, 42-OPERATIONAL-RECIPE.md, pipeline-analysis corpus (41 files), middle-tier experiment, flagship experiment + remediation

---

## THE FORMAT LANDSCAPE: WHAT WE KNOW

### Three Tested Formats with Measured Outcomes

| Format | PA-05 Score | Lines | Verbs | Constraint:Action | What It Carried |
|--------|------------|-------|-------|-------------------|-----------------|
| **Checklist** (flagship master prompt) | 1.5/4 | 963 | "FAIL IF", "must be", "verify" | 3.0:1 | 97 rules, zero playbooks, zero perception terms. Compression: 99.8% information loss from 337 findings. |
| **Recipe** (remediation spec) | 2.5/4 | 1,025 | "Delete", "Add", "Replace", "Set" | 0.32:1 | 9 sequential phases, exact CSS values, perception checks per phase. Compression: high but lossless on critical path. |
| **Conventions Brief** (middle-tier) | 4/4 | ~100 | "Read/Select/Deploy/Assess" | ~0.5:1 | Content-structure mapping, mechanism selection by content feature, per-category minimums. Compression: extreme but TARGETED. |

### The Compression Paradox

The conventions brief was 10x shorter than the checklist and scored 2.5x higher on PA-05. The recipe was roughly equal in length to the checklist and scored 1.67x higher. This demolishes the assumption that more information = better output.

But there is a ceiling. The conventions brief produced 4/4 at Middle tier (8-10 mechanisms, content-driven selection). Ceiling and Flagship tiers require something the brief cannot carry: multi-channel coherence (mechanisms encoding the SAME semantic dimension simultaneously across 3+ CSS channels).

### The Real Question

What format can carry multi-channel coherence intelligence in under 200 lines?

---

## FORMAT A: EXEMPLAR-BASED (Show CD-006's CSS as the Instruction)

### Concept

Instead of describing what to do, SHOW a complete reference implementation. The builder reads CD-006's CSS, identifies the compositional patterns, and transfers them to new content with new semantics.

### Concrete Example (what the builder receives)

```
REFERENCE: Read CD-006-pilot-migration.html lines 72-1090 (CSS only).

EXTRACTION TASK: As you read, identify these 5 compositional moves:
1. Where does border-weight change and what does each weight mean?
2. Where do zone backgrounds shift and what content distinction does each encode?
3. Where do transition types differ and what boundary type does each mark?
4. Where do grid layouts appear and what content relationship does each express?
5. Where do spacing values compress or expand and what density does each signal?

APPLICATION TASK: Now apply those 5 moves to YOUR content:
- YOUR border-weight gradient encodes [YOUR hierarchy dimension]
- YOUR zone backgrounds encode [YOUR content distinction]
- YOUR transitions encode [YOUR boundary types]
- YOUR grids encode [YOUR content relationships]
- YOUR spacing encodes [YOUR density semantics]

DIVERGENCE REQUIREMENT: Class names, values, and semantic mapping MUST differ.
The PATTERN transfers. The MEANING is yours.
```

### Strengths

1. **Zero compression loss.** The builder reads the actual implementation. No information is lost between research (337 findings) and instruction. CD-006 IS 39/40 encoded as CSS.
2. **Compositional moves are visible in code.** You can SEE border-weight gradient in `.stratum--established { border-left: 4px }` vs `.stratum--speculative { border-left: 1px }`. No abstract description needed.
3. **Multi-channel coherence demonstrated, not described.** In CD-006, sections with heavier borders ALSO have denser padding ALSO have different backgrounds. The builder encounters coherence as pattern, not as rule.
4. **Under 200 lines easily.** The instruction wrapper is ~30 lines. CD-006's CSS is the instruction.

### Weaknesses

1. **Template gravity is extreme.** This format maximizes the risk of pattern-matching. The builder has a complete working implementation in front of them. Continuation bias (LLM fundamental property) will pull toward copying. The anti-gravity mechanisms (phase-gated access, divergence mandate) exist precisely because this failure mode is dominant.
2. **Compositional MOVES are visible but compositional REASONING is not.** You can see that `.stratum--established` gets 4px and `.stratum--speculative` gets 1px. You cannot see WHY consolidation maps to border weight. The mechanism catalog makes this explicit; the CSS does not.
3. **Only works for one reference page.** CD-006 is a tutorial/documentation page. A builder doing API reference or conceptual guide would need a different exemplar. The format is content-type-bound.
4. **N=1 exemplar problem.** One reference page teaches one compositional approach. The builder learns CD-006's specific composition, not composition in general. This is learning one jazz solo, not learning jazz.

### Verdict: HIGH RISK, MODERATE REWARD

The exemplar format preserves maximum information but at maximum template-gravity risk. It is the right format for a SECOND instruction pass (after the builder has committed to their own metaphor and needs CSS technique examples) but wrong for a FIRST pass (before the builder has made compositional decisions).

### Predicted PA-05: 2.0-3.5/4 (high variance -- depends entirely on whether builder copies or transfers)

---

## FORMAT B: CONSTRAINT-MATRIX (5 Scales x 6 Channels = 30 Cells)

### Concept

Represent compositional requirements as a grid. Rows = architectural scales (page > section > component > element > detail). Columns = CSS channels (background, typography, spacing, borders, layout, color). Each cell requires a shift at boundaries.

### Concrete Example (what the builder receives)

```
COMPOSITIONAL MATRIX -- Every cell must shift at zone boundaries.
"Shift" = change must exceed perception threshold.

| Scale / Channel | Background | Typography | Spacing | Borders | Layout | Color |
|----------------|------------|------------|---------|---------|--------|-------|
| PAGE (entire doc) | >= 1 bg for page vs header | Display font for h1 | 64px chapter breaks | 3px structural | Single column | Primary accent |
| SECTION (zones) | >= 15 RGB between zones | >= 2px font-size shift | >= 24px padding shift | Weight gradient 4/3/1 | >= 1 grid per 3 sections | Zone-specific accents |
| COMPONENT (callouts, tables) | Tinted vs zone bg | Label: mono 12px caps | Internal: 8-24px | 4px left border (callout DNA) | 2-zone internal structure | Semantic accent color |
| ELEMENT (inline) | Code bg: warm gray | Code: mono 14px | Code padding: 2px 6px | Code border: 1px | Inline flow | Syntax palette (7 tokens) |
| DETAIL (micro) | Selection: primary | Bold/italic for emphasis | 4-8px fine spacing | -- | -- | Secondary text: #666 |

PERCEPTION THRESHOLDS (every shift must exceed these):
- Background: >= 15 RGB points on at least one channel
- Font size: >= 2px between adjacent sections
- Letter-spacing: >= 0.5px
- Padding/margins: >= 24px between zones
- Border width: >= 1px (present vs absent)
- Total boundary gap: <= 120px stacked

COHERENCE REQUIREMENT: Pick a SEMANTIC DIMENSION (hierarchy, confidence,
complexity, density, formality). At least 3 channels in SECTION row must
encode that SAME dimension. When you move between zones, borders AND
backgrounds AND spacing should shift in the SAME direction.
```

### Strengths

1. **Compositional completeness guaranteed by structure.** If the builder fills every cell, they cannot produce a flat page. The matrix format makes omissions visible (empty cells = missing channels).
2. **Multi-channel coherence is structural, not described.** The SECTION row forces the builder to think about 6 channels simultaneously. The coherence requirement at the bottom makes the "same direction" principle binary-checkable.
3. **Perception thresholds embedded in the format.** Each cell requires shifts that exceed perception thresholds. Sub-perceptual CSS is structurally impossible -- you cannot fill the cell without exceeding the minimum.
4. **Content-agnostic.** The matrix works for any content type. What fills each cell changes; the structure does not.
5. **Compact.** The complete matrix + thresholds + coherence requirement fits in ~50 lines.

### Weaknesses

1. **Cell-filling without semantic reasoning.** The matrix tells you to shift background between zones but not WHY zone A should be warmer than zone B. A builder can fill every cell with arbitrary values (48px/49px/50px) and technically comply. This is the binary-rules-achieve-compliance-not-quality problem rediscovered.
2. **No sequencing.** The matrix is spatial (rows x columns) not temporal (step 1, step 2...). The recipe format's key advantage was sequencing: do THIS then do THIS. The matrix provides no build order. A builder might start with detail typography before establishing page structure.
3. **Coherence requirement is a judgment rule.** "At least 3 channels must encode the SAME dimension" requires understanding what "same dimension" means. Judgment rules achieve ~0% agent compliance. The matrix format would need a binary self-test here.
4. **Missing components and transitions.** The matrix addresses channels at scales but not transition types between zones, component internal structure, or layout pattern selection. These are the architectural decisions that separate 3/4 from 4/4.

### Enhancement: Matrix + Sequence + Self-Test

The matrix weakness is fixable by adding phase ordering and binary self-tests:

```
BUILD ORDER: Fill the matrix top-to-bottom, left-to-right.
Phase 0: Fill PAGE row (structural skeleton)
Phase 1: Fill SECTION row (zone differentiation)
Phase 2: Fill COMPONENT row (internal structure)
Phase 3: Fill ELEMENT row (inline patterns)
Phase 4: Fill DETAIL row (micro typography)

SELF-TEST after Phase 1:
- Open browser. Take screenshot at 1440px.
- Can you identify zone boundaries WITHOUT reading text? YES/NO.
- If NO: your SECTION row shifts are too small. Increase background
  delta to >= 25 RGB, spacing delta to >= 32px.
```

### Verdict: STRONG STRUCTURAL FOUNDATION, NEEDS SEMANTIC LAYER

The constraint-matrix is the best format for PREVENTING the flagship failure (flat pages that pass programmatic checks). It makes omissions visible and perception thresholds structural. But it cannot carry compositional reasoning -- the WHY behind each decision. Pairing with a semantic overlay (Format D or E) would address this.

### Predicted PA-05: 2.5-3.0/4 (consistently above functional, rarely reaching designed)

---

## FORMAT C: QUESTION-BASED (10 Compositional Questions Pre-Submission)

### Concept

Instead of telling the builder what to do, require them to ANSWER compositional questions about their own output before submitting. The questions encode compositional intelligence as self-audit prompts.

### Concrete Example (what the builder receives)

```
BUILD FREELY using the design system vocabulary (tokens.css, mechanism-catalog.md).

BEFORE SUBMITTING, answer these 10 questions about YOUR output.
If any answer is NO or WEAK, fix before submitting.

STRUCTURAL QUESTIONS (binary pass/fail):
Q1: Can you identify >= 3 distinct zone backgrounds in your page?
    Test: List the hex values. Are adjacent zones >= 15 RGB apart?
Q2: Does your page use >= 3 distinct border weights?
    Test: List them. Does each encode a different semantic meaning?
Q3: Does your page have >= 3 layout patterns (grid, flow, stacked)?
    Test: Name them and which sections use each.

COHERENCE QUESTIONS (requires reasoning):
Q4: Pick your primary semantic dimension (what concept organizes your zones).
    Does border weight shift in the SAME direction as spacing compression
    when you move between zones?
Q5: Do your transition types (smooth/bridge/breathing) match the semantic
    weight of the boundary they mark?

PERCEPTUAL QUESTIONS (requires visual check):
Q6: Open at 1440px. Squint. Can you distinguish every zone boundary?
    If NO: increase the weakest channel until you can.
Q7: Scroll the full page. Is there any void > 120px with no content?
    If YES: reduce spacing or add content.
Q8: Compare your most information-dense section to your sparsest.
    Compression ratio (dense padding / sparse padding) >= 0.4?

COMPOSITIONAL QUESTIONS (the 3/4 -> 4/4 gap):
Q9: Remove all text from your page (imagine blank boxes). Does the
    spatial structure still communicate hierarchy, rhythm, and zones?
Q10: In one sentence, what is the organizing principle of your page?
     Can someone identify it from the CSS alone?
```

### Strengths

1. **Self-audit exploits the two-instance pattern.** The builder who WROTE the CSS has continuation bias. Answering questions about their own output forces a fresh evaluation pass. This is structurally equivalent to the two-instance pattern (write, then evaluate separately) but within a single agent.
2. **Binary structural questions prevent the flat-page failure.** Q1-Q3 are binary: either you have 3+ zone backgrounds >= 15 RGB apart, or you do not. The flagship would fail Q1 (backgrounds differed by 1-8 RGB).
3. **Coherence questions encode multi-channel thinking.** Q4 forces the builder to name their semantic dimension. Q5 forces them to evaluate transition-meaning alignment. These are the exact compositional intelligence gaps the flagship lacked.
4. **Q9-Q10 are the 4/4 questions.** "Does spatial structure communicate without text?" and "Can someone identify the organizing principle from CSS alone?" -- these are what separates COMPOSED from DESIGNED. No other format even attempts to encode this.
5. **Under 200 lines easily.** The 10 questions + tests fit in ~60 lines.

### Weaknesses

1. **Post-hoc, not generative.** Questions evaluate output but do not guide creation. A builder who does not know how to create multi-channel coherence will fail Q4 and have no guidance on how to fix it. The recipe format's advantage was prescriptive: "do THIS specific thing." Questions diagnose but do not prescribe.
2. **Coherence questions (Q4-Q5) are judgment rules.** "Does border weight shift in the same direction as spacing compression?" requires understanding what "same direction" means compositionally. Agent compliance on judgment rules is ~0%.
3. **No mechanism selection guidance.** The questions assume the builder already knows which mechanisms to use. They evaluate completeness of application but not appropriateness of selection.
4. **Order dependence is hidden.** Q6 (squint test) requires the page to be built. But Q4 (semantic dimension) should be answered BEFORE building. The questions need temporal ordering -- which turns them into a recipe.

### Enhancement: Questions as Phase Gates

The question format's weakness is fixable by positioning questions as GATES within a recipe:

```
PHASE 0: Read content. Answer: "What is my organizing principle?"
PHASE 1: Build zone skeleton. GATE: Answer Q1 (3+ zones, >= 15 RGB apart).
PHASE 2: Apply mechanisms. GATE: Answer Q2-Q3 (3+ border weights, 3+ layouts).
PHASE 3: Verify coherence. GATE: Answer Q4-Q5 (multi-channel alignment).
PHASE 4: Polish. GATE: Answer Q6-Q8 (perceptual verification).
PHASE 5: Submit. GATE: Answer Q9-Q10 (compositional self-assessment).
```

This hybrid preserves the self-audit advantage while adding sequencing.

### Verdict: POWERFUL DIAGNOSTIC, WEAK GENERATIVE

The question format is the only one that attempts to encode the 4/4 gap (Q9-Q10). But questions alone cannot generate compositional output -- they can only evaluate it. The question format is best as a VERIFICATION LAYER on top of another format.

### Predicted PA-05: 2.0-3.5/4 (high variance -- depends on builder's pre-existing compositional knowledge)

---

## FORMAT D: PATTERN-LANGUAGE (Visual Pattern Description, Not CSS)

### Concept

Describe the compositional intent in natural language about VISUAL effects, not CSS properties. The builder translates perceptual descriptions into CSS.

### Concrete Example (what the builder receives)

```
PATTERN: WARM STRATA

Your page has 3-5 horizontal strata. Each stratum has a distinct warmth.
The topmost stratum is lightest (warm cream). The deepest is darkest
(near-black, used ONLY for header/footer).

Between strata, transitions breathe:
- Minor transitions: a thin rule, a pause of breath (48px)
- Major transitions: a thick structural line, a full exhale (80px)
- Bridge transitions: a tinted band between regions

Within each stratum, borders signal importance:
- Heavy borders (4px): this is load-bearing content
- Medium borders (3px): this is structural content
- Light borders (1px): this is supplementary content

Components are 2-zone organisms:
- Zone 1 (label): small, uppercase, monospace. The whisper.
- Zone 2 (body): normal text, the substance.
- A colored accent on the left edge says what KIND of organism this is.

The page breathes: dense sections alternate with sparse sections.
Where content is packed, padding compresses. Where content opens up,
padding expands. The rhythm is INHALE (dense) then EXHALE (sparse),
never two dense or two sparse in sequence.

Code blocks are dark islands in the warm sea. Their background inverts:
dark where the page is light. They are functional interruptions.

Typography has 5 sizes. The jumps between sizes are audible -- you
notice the change without measuring. Display headings use serif.
Body uses sans-serif. Code uses monospace. This trinity never mixes.

At 768px width, multi-column layouts collapse to single column.
Grids flatten. But the strata, the borders, the breathing -- all remain.
```

### Strengths

1. **Perceptual-first language prevents sub-perceptual CSS.** "The jumps between sizes are audible" cannot be satisfied by 0.001em letter-spacing. The language demands visible effects by describing visible effects.
2. **Compositional atmosphere emerges from description.** "The page breathes" communicates dense/sparse alternation more effectively than "deploy mechanism #5 (INHALE/EXHALE rhythm)." The builder receives the INTENT, not the implementation.
3. **Multi-channel coherence is implicit.** "Each stratum has a distinct warmth" + "borders signal importance" + "padding compresses in dense sections" -- all three channels shifting with the same strata concept. Coherence is woven into the description rather than stated as a rule.
4. **Metaphor-neutral.** The pattern language uses "strata" but could just as easily say "floors" or "acts" or "chapters." The visual description works across metaphors.
5. **Highly readable by humans.** This format is the most understandable for non-technical review. A human can read it and picture the page.

### Weaknesses

1. **Translation ambiguity.** "A pause of breath (48px)" -- is 48px the right value? What if the builder interprets "a pause of breath" as 32px? The recipe format's exact values eliminated this ambiguity. Pattern language reintroduces it.
2. **Judgment-heavy.** Almost every sentence requires judgment: "The jumps between sizes are audible" -- audible to whom? At what threshold? Binary rules achieve 100% compliance; this format has zero binary rules.
3. **Missing structural specifics.** The pattern language says "3-5 horizontal strata" but not how to determine whether a section should be 3, 4, or 5 strata. Content-to-structure mapping is absent.
4. **No verification mechanism.** How does the builder know they achieved "warm strata"? The question format (C) has explicit self-tests. The recipe format has perception checks. The pattern language has... vibes.

### Enhancement: Pattern Language + Threshold Anchors

```
PATTERN: WARM STRATA

[...same description...]

ANCHOR VALUES (when "audible" needs a number):
- "Distinct warmth" = >= 15 RGB difference between adjacent strata
- "A pause of breath" = 48px (smooth), 80px (breathing), 64px (bridge)
- "Audible size jumps" = >= 2px font-size between heading levels
- "Heavy/medium/light borders" = 4px / 3px / 1px
- "Compresses/expands" = dense section padding 32px, sparse 80px
```

This hybrid preserves the perceptual language while anchoring it to binary-checkable values.

### Verdict: HIGHEST COMPOSITIONAL FIDELITY, LOWEST COMPLIANCE RELIABILITY

The pattern language carries compositional atmosphere better than any other format. But it relies entirely on the builder's interpretive capacity. An Opus builder may produce 4/4 from this; a Sonnet builder may produce 2/4. This is the format where model selection matters most.

### Predicted PA-05: 1.5-4.0/4 (maximum variance -- entirely builder-dependent)

---

## FORMAT E: STRUCTURED YAML (Compositional Requirements as Data)

### Concept

Encode compositional requirements as structured data. Machine-readable, unambiguous, binary-checkable. The builder parses the YAML and generates CSS that satisfies each field.

### Concrete Example (what the builder receives)

```yaml
page:
  container: { max-width: "960px", min-width: "940px" }
  background: "#FEF9F5"

zones:
  count: { min: 3, max: 5 }
  backgrounds:
    - { name: sparse, hex: "#FEF9F5", usage: "introductory sections" }
    - { name: dense, hex: "#FFFFFF", usage: "technical sections" }
    - { name: breathing, hex: "#FAF5ED", usage: "transitional sections" }
  adjacency_rule: "abs(zone_a.R - zone_b.R) + abs(zone_a.G - zone_b.G) + abs(zone_a.B - zone_b.B) >= 15"

borders:
  weights: [4, 3, 1]
  semantics:
    4px: "highest importance / load-bearing"
    3px: "structural / secondary importance"
    1px: "decorative / separator"
  callout_standard: { width: "4px", position: "left" }

typography:
  fonts:
    display: "'Instrument Serif', Georgia, serif"
    body: "'Inter', system-ui, sans-serif"
    mono: "'JetBrains Mono', 'SF Mono', monospace"
  scale: [3rem, 1.625rem, 1.375rem, 1rem, 0.875rem, 0.75rem]
  min_jump: "2px between adjacent levels"

spacing:
  base: "4px"
  anchors: [8, 16, 24, 32, 48, 64, 80]
  transitions:
    smooth: { gap: "48px", divider: "1px solid" }
    bridge: { gap: "64px", background: "breathing zone" }
    breathing: { gap: "80px", divider: "3px solid" }
  max_stacked_gap: "120px"

coherence:
  required_channels: { min: 3, of: [background, typography, spacing, borders, layout, color] }
  direction: "all shifting channels must move in same semantic direction at zone boundaries"

components:
  callout:
    structure: "2-zone (label + body)"
    label: { font: mono, size: "0.75rem", transform: uppercase, spacing: "0.1em" }
    body: { font: body, size: "1rem", line-height: 1.7 }
    variants: [info-blue, tip-green, gotcha-coral, essence-purple, challenge-amber]
  code_block:
    background: "#1A1A1A"
    border: "3px solid #E0D5C5"
    font: { family: mono, size: "0.875rem" }

soul_constraints:
  - { property: border-radius, value: 0, exception: none }
  - { property: box-shadow, value: none, exception: none }
  - { property: opacity, value: 1, scope: containers }
  - { property: background, constraint: "no gradients" }
  - { property: color, constraint: "no pure #000 or #FFF" }
```

### Strengths

1. **Zero ambiguity.** Every value is exact. No interpretation required. Binary compliance is trivially verifiable -- parse the CSS and compare to spec.
2. **Programmatically verifiable.** A gate runner can parse this YAML and check the output CSS against every field. This is the only format that enables AUTOMATED verification of compositional completeness.
3. **Compact.** The full spec fits in ~80 lines of YAML. Under 200 lines trivially.
4. **Composable.** Different pages can share a base YAML and override specific fields. Content-specific YAML patches the base. This enables a library of content-type variants.

### Weaknesses

1. **Zero compositional reasoning.** The YAML tells you border weights are 4/3/1 but not WHY or WHEN to use each. A builder following this spec will assign border weights arbitrarily rather than semantically. This is the checklist problem in structured data clothing.
2. **Coherence is stated, not demonstrated.** `direction: "all shifting channels must move in same semantic direction"` is a judgment rule encoded as YAML. The data structure doesn't make it binary -- it just puts it in a different syntax.
3. **No build order.** Like the matrix (Format B), YAML is spatial, not temporal. The builder has no sequencing guidance.
4. **Reductive.** Compositional intelligence resists reduction to key-value pairs. "The page breathes" (Format D) carries more compositional information than `transitions.breathing.gap: "80px"`. The YAML captures the WHAT but loses the WHY and the FEEL.

### Verdict: EXCELLENT FOR VERIFICATION, POOR FOR GENERATION

The YAML format is the best format for building a GATE RUNNER (automated compliance checking). It is the worst format for guiding a builder to compositional quality. The builder who reads only YAML will produce technically correct, perceptually flat output.

### Predicted PA-05: 2.0-2.5/4 (consistently functional, never composed)

---

## SYNTHESIS: THE FOURTH FORMAT

None of the five formats alone optimizes for compositional intelligence under 200 lines. But the analysis reveals that each format excels at a different layer:

| Layer | Best Format | What It Carries |
|-------|-------------|-----------------|
| **Build sequence** | Recipe (B variant) | Temporal ordering, phase gates |
| **Completeness check** | Matrix (B) | Structural coverage, no omissions |
| **Perceptual intent** | Pattern Language (D) | Compositional atmosphere, multi-channel coherence |
| **Verification** | Questions (C) + YAML (E) | Self-audit, binary compliance |
| **Reference** | Exemplar (A) | Full implementation for technique extraction |

### The Recommended Fourth Format: ANNOTATED RECIPE

A recipe (sequential phases with exact values) where each phase is introduced with a 1-2 sentence pattern-language description of WHAT YOU SHOULD SEE, followed by the exact CSS steps, followed by a binary self-test question.

```
## PHASE 1: ZONE SKELETON

WHAT YOU SHOULD SEE: Three distinct horizontal bands with different warmth.
The top is cream. The middle is white. The bottom returns to cream. A squint
reveals the boundaries without reading.

STEP 1.1: Add zone class to each <section>:
  .zone-sparse  { background: #FEF9F5; padding: 80px 32px; }
  .zone-dense   { background: #FFFFFF; padding: 32px 32px; }
  .zone-breathing { background: #FAF5ED; padding: 48px 32px; }

SELF-TEST: Screenshot at 1440px. Squint. Can you see 3 bands? (Y/N)
  If N: increase padding delta or background delta until you can.
```

This format:
1. **Carries compositional intent** (pattern language introduction)
2. **Provides exact values** (recipe steps with specific CSS)
3. **Enables self-audit** (binary question gate)
4. **Is sequenced** (phase ordering)
5. **Embeds perception thresholds** (values exceed thresholds by construction)

### Line Budget Estimate

| Section | Lines |
|---------|-------|
| Preamble (organizing principle, perception thresholds) | 15 |
| Phase 0: Content analysis + zone architecture | 25 |
| Phase 1: Zone skeleton (backgrounds + spacing) | 20 |
| Phase 2: Border system (weight gradient + callouts) | 25 |
| Phase 3: Typography cascade (5 levels + zone variation) | 20 |
| Phase 4: Component styling (callouts, code, tables) | 25 |
| Phase 5: Transitions + coherence verification | 20 |
| Phase 6: Accessibility + responsive | 15 |
| Phase 7: Submit gate (Q9 + Q10 from Format C) | 15 |
| **Total** | **180 lines** |

### Why This Beats Each Format Alone

- **vs Checklist:** Sequenced, not listed. Actions, not constraints. 0.32:1 constraint:action ratio.
- **vs Recipe alone:** Pattern-language intros carry compositional atmosphere that raw recipe steps cannot.
- **vs Brief alone:** Exact CSS values prevent the threshold ambiguity that briefs leave open.
- **vs Exemplar:** No template gravity. Builder creates from description, not from reference.
- **vs Matrix:** Temporally ordered. Build sequence prevents "fill arbitrary cells" problem.
- **vs Questions alone:** Generative AND evaluative. Steps create; questions verify.
- **vs Pattern language alone:** Anchored values prevent interpretation drift. Binary self-tests enable compliance checking.
- **vs YAML alone:** Carries the WHY alongside the WHAT.

### Critical Caveat

Format is NECESSARY but not SUFFICIENT. The conventions brief (100 lines) scored 4/4 at Middle tier because:
1. The builder was Opus (not Sonnet)
2. The content-mechanism mapping was direct (each mechanism served a different content need)
3. Multi-channel coherence was not required (Middle tier = independent mechanisms)

For Ceiling/Flagship tiers, the annotated recipe must also carry:
- **Metaphor commitment protocol** (from TC pipeline Phases 1-3)
- **Multi-channel coherence table** (Format B's matrix, compressed to the SECTION row only)
- **The Q9-Q10 submit gate** (spatial structure without text + organizing principle from CSS)

These additions push the line count to ~200, which is exactly the budget.

### The Unresolved Question

No instruction format has been tested at Ceiling/Flagship tier with an Opus builder. CD-006 (39/40) was built by an Opus agent with extensive multi-agent collaboration, not from a 200-line instruction format. The gap between "single-builder with 200-line annotated recipe" and "multi-agent team with 500+ lines of coordination" may be irreducible.

The cheapest experiment to test this: give an Opus builder the 200-line annotated recipe with Flagship-tier content and measure PA-05. If >= 3/4 COMPOSED, the format carries sufficient compositional intelligence. If < 3/4, multi-agent collaboration (not format) is the missing variable.

---

## BOTTOM LINE

**Best format for under 200 lines: ANNOTATED RECIPE** (pattern-language intros + exact CSS steps + binary self-test gates).

**Why:** It is the only format that addresses all 5 failure modes simultaneously:
1. Flat pages (matrix completeness via phase coverage)
2. Sub-perceptual CSS (perception thresholds in exact values)
3. No build sequence (recipe phases)
4. No compositional atmosphere (pattern language intros)
5. No self-verification (binary question gates)

**Predicted PA-05 range:** 3.0-3.5/4 with Opus builder, 2.5-3.0/4 with Sonnet builder.

**What it cannot carry in 200 lines:** Full metaphor derivation (TC Phases 1-3, ~100 lines alone), extended multi-agent coordination protocol, and the entire mechanism catalog. These must live in companion files, not in the core instruction format.
