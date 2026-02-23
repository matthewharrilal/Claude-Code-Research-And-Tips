# Report 58: Dispositional Recipe Investigation

**Agent:** synthesis-mechanism (Opus 4.6)
**Date:** 2026-02-22
**Task:** Deep investigation of E-04 (Dispositional Recipe) -- the untested concept that telling builders HOW TO BE while building may achieve what telling them WHAT TO DO cannot.

**Files Read (12+):**
- `ephemeral/pages/_comparison-screenshots/28-beyond-eight-concepts.md` (E-04 section + full Category A)
- `ephemeral/flagship-44-recipe/17-RECIPE-CEILING.md` (recipe ceiling analysis, 610 lines)
- `ephemeral/flagship-preparation/12-defining-beautiful.md` (beauty definition, 344 lines)
- `design-system/pipeline/conventions-brief.md` (current world-description format, 610 lines)
- `ephemeral/handoff-research/20-paradigm-exploration-synthesis.md` (paradigm questioning, 135 lines)
- `ephemeral/pipeline-enrichment-research/11-master-synthesis.md` (pipeline enrichment recommendations)
- `ephemeral/flagship-retrospective/05-metacognitive-process.md` (process analysis, recipe vs checklist)

---

## EXECUTIVE SUMMARY

The dispositional recipe is not a recipe at all. It is an **activation key** for capabilities the builder model already possesses. The evidence for this is overwhelming: CD-006 (39/40) was built by Opus with near-zero specification. The Middle experiment (PA-05 4/4) gave Opus a 100-line recipe. The Flagship (1.5/4) gave Sonnet a 963-line specification. More text produced worse output because text consumed the cognitive space that native capability would have occupied.

A dispositional recipe works by doing three things simultaneously: (1) establishing hard constraints that close off catastrophic failure modes, (2) providing vocabulary (mechanism catalog, component library) that opens the creative space, and (3) framing the builder's relationship to the work in terms that activate compositional judgment rather than compliance behavior.

This report delivers 5 concrete dispositional instructions, a model-specificity analysis, a 50-line hybrid format, the human design education parallel, risk assessment, and the meta-question of whether dispositional recipes are simply "getting out of the way."

---

## 1. FIVE CONCRETE DISPOSITIONAL INSTRUCTIONS FOR KORTAI

These are not abstract. Each one is specific enough to change builder behavior, testable enough to verify, and grounded in observed failure modes from the experimental record.

---

### D-01: "Before writing CSS for any section, read the content of that section aloud in your head. Ask: what is the emotional register of this content? Analytical? Reflective? Urgent? Procedural? Your CSS should put the reader in that register before they read a single word."

**What this changes:** The Flagship builder wrote CSS section by section but never asked what each section's content DEMANDED. Result: uniform treatment across 14 sections. This instruction forces the builder to read content BEFORE writing CSS for each section, creating per-section compositional decisions.

**Grounding in failure:** The Flagship spent 22% of CSS budget on imperceptible micro-typography because the spec emphasized "refinement gradients." D-01 redirects attention from specification compliance to content-form resonance.

**Why it is dispositional, not procedural:** A procedural instruction would say "Read content. Classify register as Analytical/Reflective/Urgent/Procedural. Apply typography profile A/B/C/D." That produces a lookup table. D-01 instead asks the builder to FEEL the register and let that feeling inform CSS choices. The builder's aesthetic judgment, not a classification scheme, does the work.

**Testable:** Compare CSS variation across sections. A builder following D-01 will produce measurably different font-weight, spacing, and border treatment per section (because sections have different registers). A builder without D-01 will produce uniform treatment.

---

### D-02: "After completing each zone, scroll back to the previous zone boundary. A viewer arriving here should perceive that they are entering a NEW room, not the same room with different furniture. If the two zones could be swapped without the reader noticing, one of them needs rethinking."

**What this changes:** The Flagship's zone boundaries differed by 1-8 RGB points -- technically different backgrounds, experientially identical. D-02 does not prescribe a specific RGB delta. It asks the builder to PERCEIVE the boundary as a reader would. If the builder cannot perceive the difference, neither will the reader.

**Grounding in failure:** 9/9 Mode 4 PA auditors flagged the Flagship's zone boundaries as imperceptible. The perception thresholds (>=15 RGB) exist as a safety net. D-02 activates the builder's own perception as the PRIMARY check, with the threshold as backup.

**Why it is dispositional, not specification:** The specification version is "adjacent zone backgrounds must differ by >= 15 RGB." That produces exactly 15 RGB (the minimum). D-02 produces whatever delta the builder's judgment deems sufficient for perceivable room-change -- typically 25-50 RGB, because that is what actually looks like a new room.

**Testable:** Measure RGB deltas at zone boundaries. D-02 builders will produce larger deltas (25-50 range) than specification-only builders (15-20 range), because the dispositional framing sets the bar at "perceivable change" rather than "minimum compliant change."

---

### D-03: "You are building a page that someone will put their name on. Not a page that passes an audit. Every time you reach for a CSS property, ask: does this choice make the page more worth signing? If a choice is invisible at 100% zoom, it is not worth signing. Delete it and spend those lines on something the reader will actually see."

**What this changes:** The Flagship devoted 238 lines of CSS to sub-perceptual variation (letter-spacing 0.001-0.01em, background deltas of 1-8 RGB). These passed the specification but were invisible. D-03 reframes the builder's evaluation criterion from "does this satisfy the spec?" to "would I put my name on this?" The first criterion rewards minimum compliance. The second rewards visible quality.

**Grounding in failure:** The remediation analysis found that 81% of the Flagship's intentional CSS variations were imperceptible. D-03 directly addresses the CSS-effort-vs-CSS-effect gap (concept I-01 from Report 28).

**Why it is dispositional, not procedural:** A procedural version would say "After writing each CSS rule, verify perceptibility at 100% zoom." That is a checklist item. D-03 instead installs a continuous evaluative stance: "is this worth signing?" The signing frame activates professional pride, which is a more reliable driver of quality than rule-following.

**Testable:** Count CSS lines devoted to sub-perceptual variation. D-03 builders should produce near-zero sub-perceptual CSS, because the "signing" frame makes invisible work feel wasteful rather than thorough.

---

### D-04: "Somewhere in the second half of this page, the reader should encounter a moment that makes them pause. Not because it is loud, but because it is considered. A callout box where the border weight, background tint, and typography conspire to create exactly the right emphasis. A code block that looks like it belongs in a technical journal. A data display that turns numbers into understanding. Find that moment. Protect it. Make sure the second half earns the first half's promise."

**What this changes:** The Flagship's second half was a barren scroll of uniform sections. Builders naturally front-load visual interest (the "second half coasts" problem from 12-defining-beautiful.md). D-04 explicitly requires a designed moment in the second half, but it does not specify which one or how. It gives the builder creative authority over the moment while making the requirement non-negotiable.

**Grounding in failure:** The beauty definition identifies the "optimal scroll rhythm" as Arrival -> Hook -> Engagement -> Surprise -> Deepening -> Climax -> Release -> Closure. The Flagship had Arrival -> Monotony -> Void. D-04 directly addresses the "Second Half" question from the conventions brief's Five Questions (Section 11) but frames it as a creative challenge rather than a verification checkpoint.

**Why it is dispositional, not specification:** A specification version would say "At least one designed moment (3+ mechanisms combining) must appear below the 50% scroll depth mark." That is measurable but uninspiring. D-04 instead paints a picture of what the moment FEELS LIKE ("conspire to create exactly the right emphasis," "belongs in a technical journal," "turns numbers into understanding"). The pictures activate the builder's imagination. The specification activates the builder's calculator.

**Testable:** Identify the most visually distinctive element in the bottom 50% of the page. Rate its mechanism density and perceptual impact. D-04 builders will produce a bottom-half peak; specification-only builders will not.

---

### D-05: "When you finish, scroll the entire page at the speed a reader would. Not to check rules. Not to verify thresholds. To experience the page as it will be experienced. If any stretch feels like waiting, something is wrong. If the end arrives suddenly, something is missing. If you feel the page could have been generated by a template, start over on the weakest section."

**What this changes:** The Flagship's builder never scrolled as a reader. It verified rules one by one. D-05 installs a final-pass disposition: experience the page as a reader, not as a builder. This is the "midpoint reflection" and "five questions" from the conventions brief (Sections 10-11) reframed as a felt experience rather than a checklist.

**Grounding in failure:** Report 17 (Recipe Ceiling) argues that DESIGNED-ness is a property of what the builder ATTENDS TO. A builder attending to rules produces compliance. A builder attending to the reading experience produces design. D-05 explicitly redirects final-pass attention from rules to experience.

**Why it is dispositional, not procedural:** The procedural version is "Scroll the page. Check: any gap > 120px? Any section without a mechanism? Any repeated border treatment?" D-05 instead asks the builder to feel "waiting," "sudden arrival," and "template-ness." These are aesthetic judgments, not measurements. They activate the evaluative mode that produces design.

**Testable:** Give two builders the same brief, one with D-05 and one without. Compare the rate of self-initiated revisions after the first complete pass. D-05 builders will revise more sections because the experiential scroll reveals problems that rule-checking does not.

---

## 2. MODEL-SPECIFICITY: OPUS VS SONNET

### The Hypothesis

**Opus treats dispositional instructions as PERMISSION to engage native aesthetic judgment. Sonnet treats them as unmeasurable and therefore ignorable.**

### Evidence For This Hypothesis

**A-02 (Builder Model Choice) from Report 28:** "Sonnet treats every instruction as a ceiling. Opus treats instructions as a floor." When the specification says ">=3 spacing values," Sonnet produces exactly 3 (48px, 49px, 50px -- technically compliant, semantically empty). Opus produces 5-7 with genuine semantic rationale.

**CD-006 Evidence:** Built by Opus with near-zero specification. Result: 39/40. The builder composed freely within constraints. Every section's HTML structure makes a content-specific compositional decision that no specification could have prescribed.

**Middle Experiment Evidence:** Built by an Opus planner + agent team with 100-line recipe. Result: PA-05 4/4, 12 mechanisms, F-PATTERN. The recipe provided a framework; Opus provided the compositional judgment within it.

**Flagship Evidence:** Built by Sonnet with 963-line specification. Result: 1.5/4. Sonnet faithfully implemented every rule. Zero compositional decisions went beyond the specification. Where the specification said nothing (e.g., "use borders"), Sonnet used zero borders.

**Remediation Evidence:** Built by Opus with 1,025-line repair specification. Result: 2.5/4. Opus made 3 creative decisions that went beyond the spec (selective preservation during deallocation, inline style conflict resolution, proactive soul compliance). But Opus did NOT exercise compositional judgment because the specification framed the task as repair, not composition. Mode determined ceiling, not model alone.

### The Refined Hypothesis

The original hypothesis is too simple. Model choice AND instruction mode interact:

| | Specification Mode | Dispositional Mode |
|---|---|---|
| **Opus** | Competent compliance (2.5/4). Opus COULD compose but won't because the mode says "repair/comply." Makes small creative departures. | Full composition (3.5-4.0/4). Dispositional framing gives Opus PERMISSION to do what it naturally can. The native 60-70% aesthetic intelligence is activated. |
| **Sonnet** | Precise compliance (1.5-2.5/4). Sonnet executes every rule exactly. Where no rule exists, Sonnet does nothing. Minimum viable output. | Unpredictable (1.5-3.0/4). Sonnet may treat dispositional language as non-actionable ("build as if every section is a room" -- what CSS does this specify?) and revert to baseline, OR may interpret it as creative latitude and produce unexpected results. |

### The Prediction

**Dispositional instructions will produce the LARGEST quality improvement for Opus.** Opus already has compositional judgment (CD-006 proves it). The pipeline's job is to stop overriding that judgment. Dispositional instructions do this by framing the task as composition rather than compliance.

**Dispositional instructions will produce SMALLER and LESS RELIABLE quality improvement for Sonnet.** Sonnet's strength is precise execution. Dispositional language is imprecise by design. Sonnet may either ignore it (no improvement) or over-interpret it (unpredictable results). The safest strategy for Sonnet is the procedural recipe (the Middle experiment format), which provides enough structure for Sonnet's compliance strength while leaving enough decision points for creative variation.

**The model-instruction interaction matters more than either variable alone.** Opus + dispositional is predicted to be the highest-ceiling combination. Sonnet + procedural is predicted to be the most reliable combination. Opus + specification wastes Opus's native capability. Sonnet + dispositional creates an impedance mismatch between the model's compliance orientation and the instruction's judgment orientation.

### Implications for Pipeline Design

If the pipeline uses Opus for builders (as recommended by multiple research streams), then dispositional instructions are the natural complement. The instructions activate what Opus already has.

If the pipeline uses Sonnet for builders (for cost reasons), then dispositional instructions should be SUPPLEMENTED with a procedural scaffold: "Here are 8 steps. Steps 1-5 are concrete (read, plan, deploy). Steps 6-8 are dispositional (feel, experience, revise)."

The hybrid approach accommodates both models: Sonnet follows steps 1-5 and produces competent output (3.0+). Opus follows 1-5 AND engages with 6-8, producing composed output (3.5-4.0).

---

## 3. THE HYBRID FORMAT: 50-LINE EXAMPLE

This is a HYBRID recipe combining structural constraints (Tier 1 binary rules), procedural steps (Tier 2 sequencing), CSS vocabulary (Tier 3 specific values), and dispositional framing (Tier 4 being-instructions).

```
HYBRID RECIPE: Building a KortAI Page
======================================

TIER 1: HARD PHYSICS (15 lines -- binary, non-negotiable)
  Container: 940-960px centered
  border-radius: 0 everywhere. box-shadow: none. No gradients.
  Fonts: Instrument Serif (headings), Inter (body), JetBrains Mono (code)
  Borders: 4px structural, 3px accent, 1px separator. No 2px.
  Adjacent zone backgrounds: >= 15 RGB delta on at least one channel
  No spacing value > 96px. No stacked gap > 120px.
  Palette: #FEF9F5 cream, #1A1A1A near-black, #E83025 primary red
  Warm tones only for backgrounds (R >= G >= B)
  5 accent colors reserved for callouts only

TIER 2: BUILD SEQUENCE (15 lines -- procedural, ordered)
  1. Read the content fully. Note where it shifts topic, mode, intensity.
  2. Read mechanism-catalog.md and components.css. These are your instruments.
  3. Write a conviction statement: metaphor, zone count, coherence direction.
  4. Build HTML skeleton first: landmarks, skip-link, zones, component classes.
  5. Build CSS boundary-by-boundary: at each zone transition, set ALL shifting
     channels together (background + typography + spacing + borders).
  6. At midpoint, render and scroll. Strengthen the weakest section.
  7. After final zone, answer the 5 questions. Fix what fails.
  8. Run gate-runner.js. Fix any programmatic failures.

TIER 3: CSS VOCABULARY (8 lines -- specific values, reference)
  Zone backgrounds: #FEF9F5, #F0EBE3, #FFFFFF, #FAF0E0 (choose 3-5)
  3-tier border: callout 4px left, structural 3px, separator 1px
  Typography: body 16px/1.7, large 18px/1.6, headings 24-48px Instrument Serif
  Component DNA: sparse LABEL (0.75rem, 600, uppercase, 0.1em tracking)
                  + dense BODY (1rem, 400, normal, 1.7 line-height)
  Drop caps: ::first-letter 3.5em Instrument Serif #E83025, max 2 sections
  Code blocks: bg #1A1A1A, 6 syntax colors, JetBrains Mono
  Layouts: golden-ratio 2-col, 4-col bento, 3-col spokes (use >= 2)

TIER 4: DISPOSITION (12 lines -- how to be while building)
  You are composing a page, not implementing a specification.
  Before writing CSS for any section, read its content. Feel its register.
  After each zone, scroll back to the boundary. A reader should perceive
  a new room, not the same room with different furniture.
  Every CSS choice should be visible at 100% zoom. If removing a line
  causes no visible change, delete it permanently.
  Somewhere in the second half, create a moment where the reader pauses
  -- not because it is loud, but because it is considered.
  When you finish, scroll the whole page as a reader would. If any
  stretch feels like waiting, something is wrong. If the end arrives
  suddenly, something is missing.
  You have the full vocabulary. Use it with restraint. Restraint means:
  every element earns its place by serving the content.
```

### 50 lines. 4 tiers. How it compares:

| Approach | Lines | Quality Ceiling | Reliability | Builder Mode |
|----------|-------|----------------|-------------|--------------|
| **(a) Pure specification** (Flagship) | 963 | 2.5/4 | HIGH compliance, LOW quality | COMPLYING |
| **(b) Pure procedural recipe** (Middle) | 100 | 3.5/4 | MEDIUM-HIGH | PLANNING-THEN-EXECUTING |
| **(c) Pure dispositional** (untested) | ~30 | Unknown (est. 3.5-4.0 with Opus) | LOW (model-dependent) | COMPOSING |
| **(d) HYBRID** (above) | 50 | Est. 3.5-4.0 | MEDIUM-HIGH | COMPOSING with GUARDRAILS |

The hybrid inherits the best property of each approach:
- From specification: catastrophic failure prevention (Tier 1 closes off soul violations, container width errors, imperceptible CSS)
- From procedural: sequenced workflow that reduces cognitive load (Tier 2 tells the builder what to do WHEN)
- From vocabulary: concrete CSS values that prevent blank-page paralysis (Tier 3 gives starting points)
- From dispositional: compositional engagement that produces designed output (Tier 4 activates aesthetic judgment)

**The key structural innovation:** Tier 4 comes LAST. The builder reads constraints first (closing bad options), then procedures (knowing what to do when), then vocabulary (having concrete starting points), and ONLY THEN receives the dispositional framing. By the time the builder reads "you are composing a page, not implementing a specification," they have already internalized the constraints and vocabulary. The dispositional frame then governs HOW they use what they have learned. This is the recording studio model from Report 17: isolation (Tier 1), instruments (Tier 3), workflow (Tier 2), then creative space (Tier 4).

**What would break if Tier 4 were first:** The builder would read "you are composing a page" and begin composing WITHOUT having internalized the constraints. Result: soul violations, container width errors, sub-perceptual CSS. The dispositional frame activates native capability, but native capability does not include knowledge of THIS system's specific constraints. Tier 1-3 install system knowledge; Tier 4 activates the builder's judgment to apply that knowledge compositionally.

---

## 4. HUMAN DESIGN EDUCATION PARALLEL

Design schools teach through maxims that sound like D-01 through D-05. Here is how each translates to AI builder instructions.

### "See negative space as shape."

**Human meaning:** Trained designers perceive the spaces BETWEEN elements as active compositional participants, not empty voids. The white space between two paragraphs is as designed as the paragraphs themselves.

**AI translation:** "The space between your sections is content. It communicates pacing, hierarchy, and intent. A 64px gap between zones says 'breathe here.' A 24px gap says 'these ideas are related.' A 120px+ gap says 'something went wrong.' Design your gaps with the same intentionality as your elements."

**Why this works for Opus:** Opus already "sees" negative space when composing (CD-006's spacing is precisely calibrated). The instruction makes explicit what Opus does implicitly, giving it permission to allocate attention to spacing as a first-class design element rather than a default.

**Why this may not work for Sonnet:** Sonnet may interpret "space between sections is content" literally and generate actual content (text, dividers, ornaments) to fill every gap. The instruction needs a guardrail: "This does not mean fill every gap. It means choose gap sizes deliberately."

### "Every edge is a decision."

**Human meaning:** The boundary between any two elements is a conscious design choice -- its crispness, its color, its weight, its presence or absence.

**AI translation:** "Every border you include (and every border you omit) communicates the relationship between elements. A 4px red left border says 'pay attention -- this is marked.' A 1px tan bottom border says 'these items are listed but not separated.' No border says 'these elements flow together.' If you cannot articulate what a border communicates, remove it."

**Why this works:** The Flagship used zero borders (not a single border-left, border-top, or border-bottom in the main content). The builder had no instruction to use borders, and because borders are optional (not required by any specification rule), none appeared. "Every edge is a decision" reframes border presence as an active choice rather than an optional decoration.

### "If it looks right, it IS right."

**Human meaning:** Perceptual correctness supersedes mathematical correctness. If two elements appear centered but are 2px off, they ARE centered. If two elements are mathematically centered but appear off due to optical illusion, they are NOT centered.

**AI translation:** "Trust your rendering. If you scroll the page and something feels off -- a gap that seems too large, a heading that seems too small, a color that seems too similar to its neighbor -- it IS off. Fix it based on how it LOOKS, not how it MEASURES. The perception thresholds in Tier 1 are minimum floors, not targets. Your eye (or your rendering) is the real judge."

**Why this is critical:** The entire pipeline's failure mode is prioritizing measurement over perception. Gates measured "backgrounds differ" (true: by 2 RGB points). Perception measured "backgrounds look the same" (true: 2 RGB points is imperceptible). "If it looks right, it IS right" installs perceptual authority over programmatic authority.

### "Squint and see the big shapes."

**Human meaning:** Blur your vision to strip away detail, revealing the compositional structure -- the distribution of mass, color, and void.

**AI translation:** Already in the conventions brief as "The Squint" (Section 11, Question 1). But the conventions brief frames it as a verification step ("If zones blend together, strengthen them"). The dispositional version: "At any point during your build, lean back. Let the details blur. What remains is your composition's skeleton. If the skeleton is strong -- clear zones, varied density, confident proportions -- the details will serve it. If the skeleton is weak, no amount of detail will save it. Build the skeleton first."

**Why this reframing matters:** As a verification step, "The Squint" happens AFTER the page is built. As a dispositional instruction, it happens DURING the build. The builder learns to evaluate composition continuously rather than at a single checkpoint.

### The pattern across all four maxims

Every human design maxim follows the same structure:

1. Name a perceptual shift (see negative space, see edges, see big shapes)
2. The shift redirects attention from mechanical to experiential
3. The redirected attention produces better compositional decisions

AI dispositional instructions follow the same structure. They name a perceptual shift that redirects the builder's attention from rule-compliance to composition-experience. The shift is the mechanism by which quality improves.

---

## 5. RISKS

### Risk 1: Non-reproducibility

**Severity: MEDIUM**

Dispositional instructions produce different output from the same builder on different runs. A specification produces approximately the same output every time (because the builder is executing a deterministic plan). A dispositional instruction produces varied output because the builder's compositional judgment varies with context window state, random seed, and attention allocation.

**Mitigation:** Non-reproducibility is not the same as unreliability. Dispositional instructions should produce output WITHIN A QUALITY BAND (e.g., PA-05 3.0-4.0) rather than AT A FIXED POINT (PA-05 3.0 exactly). The pipeline's job is to guarantee the floor of the band (Tier 1 constraints prevent sub-3.0 output) while allowing the ceiling to vary. If the floor is high enough (3.0+), variation within the band is a feature, not a bug -- it means each page has unique compositional character.

**Residual risk:** Some runs will produce 3.0 output despite dispositional instructions. The pipeline must accept that 4/4 is probabilistic, not deterministic. Running 2-3 divergent builds and selecting the best is a valid strategy for pushing the probability of 4/4 higher.

### Risk 2: Model-dependence

**Severity: HIGH**

Dispositional instructions may only work with Opus. Sonnet may ignore them entirely, producing output indistinguishable from specification-only output. This creates a hard dependency on Opus for builder agents, with significant cost implications.

**Mitigation:** The hybrid format (Section 3) degrades gracefully. If Sonnet ignores Tier 4, Tiers 1-3 still produce competent output (estimated 3.0/4 from the procedural recipe + specification alone). Tier 4 is an additive layer, not a load-bearing one. The pipeline works without it; it works BETTER with it.

**Residual risk:** If Opus is required for 4/4, the cost per page increases significantly. This may be acceptable if Flagship pages are rare (5-10% of pages, per the tier model). Most pages built at Middle tier (3.0-3.5) can use Sonnet with the procedural recipe.

### Risk 3: Untestability

**Severity: LOW-MEDIUM**

Dispositional instructions are harder to audit than specifications. "Build as if every section is a room" cannot be verified by a programmatic gate. Only a perceptual auditor can evaluate whether the builder's dispositional engagement produced measurably better output.

**Mitigation:** The OUTCOME is testable even if the PROCESS is not. PA-05 measures whether the page looks designed. If dispositional instructions produce consistently higher PA-05 scores, the instructions work regardless of whether we can audit the builder's internal process. We audit the page, not the builder.

**Residual risk:** We cannot diagnose WHY a dispositional build fails. If PA-05 is 2.5 despite dispositional instructions, we do not know whether the builder ignored the instructions, misinterpreted them, or engaged with them but lacked capability. Diagnosis requires reading the builder's CSS and build log for signs of compositional engagement.

### Risk 4: Regression to the mean

**Severity: MEDIUM**

Over many builds, dispositional instructions may lose their activating effect. Opus may learn to "perform" dispositional engagement (producing build logs that sound compositional) without actually engaging compositionally. The builder optimizes for the LANGUAGE of disposition rather than the PRACTICE.

**Mitigation:** This is the same problem as specification compliance: builders optimize for the metric rather than the intent. The mitigation is the same: the PA audit evaluates outcomes, not process. If the builder's output passes PA-05 at 3.5+, the builder's internal process is irrelevant.

**Residual risk:** If regression occurs, it will manifest as PA-05 scores declining over time. The pipeline should track PA-05 across builds and investigate if scores drop below 3.0 consistently.

### Risk 5: Over-reliance on "getting out of the way"

**Severity: LOW**

If dispositional instructions are framed as "just trust Opus," the pipeline may become complacent about specification quality. Constraints are still necessary. Opus without constraints produces CD-006 (39/40) but also produces pages with border-radius (soul violation) or container width errors. The constraints prevent catastrophic failures; the dispositional frame activates capability above the constraint floor.

**Mitigation:** The hybrid format makes this explicit: Tier 1 constraints are NON-NEGOTIABLE regardless of dispositional framing. The disposition governs how the builder works WITHIN constraints, not whether constraints apply.

---

## 6. COULD A DISPOSITIONAL RECIPE REPLACE THE CONVENTIONS BRIEF?

### No. But it could REFRAME it.

The conventions brief (610 lines) contains four distinct types of content:

| Type | Lines | Purpose | Replaceable by disposition? |
|------|-------|---------|----------------------------|
| World-description | ~310 (51%) | Describes what the system IS | NO -- builders need to know the physics |
| Constraint | ~190 (31%) | Specifies hard limits | NO -- constraints prevent catastrophic failure |
| Recipe/procedure | ~100 (16%) | Specifies build sequence | PARTIALLY -- disposition can replace some steps |
| Creative authority | ~10 (2%) | Grants permission to compose | YES -- this IS the dispositional layer |

**The world-description layer is irreplaceable.** Opus needs to know what Instrument Serif is, what the 3-tier border system means, what multi-coherence requires. No amount of dispositional framing can substitute for factual knowledge about the design system.

**The constraint layer is irreplaceable.** "border-radius: 0" is a hard fact, not a disposition. "No spacing value > 96px" is a safety net, not a creative frame.

**The recipe layer is partially replaceable.** Some procedural instructions ("build boundary-by-boundary," "check perception thresholds after each zone") could be replaced by dispositional equivalents ("after each zone, scroll back and feel whether the boundary is real"). But the build ORDER matters (HTML skeleton first, then CSS), and ordering is inherently procedural, not dispositional.

**The creative authority layer is exactly the dispositional layer.** The current 10 lines of creative authority ("You are the composer. Approximately 80% of all decisions are yours to make.") are already dispositional. D-01 through D-05 extend this layer from 10 lines to ~30 lines.

### The Proposal: Restructured Brief

Keep the conventions brief's content but restructure its FRAMING:

1. **Open with Tier 4 disposition** (12 lines) -- establish the builder's relationship to the work FIRST
2. **Tier 1 constraints** (Section 1: Identity, Section 12: Restraint List) -- install hard boundaries
3. **Tier 3 vocabulary** (Sections 4-8: Multi-Coherence, Fractal Echo, Metaphor, Transition Grammar, CSS Vocabulary) -- provide the instruments
4. **Tier 2 process** (Section 14: Process, Section 10: Compositional Memory) -- give workflow structure
5. **Close with Tier 4 disposition** (D-04 and D-05) -- the "signing" frame and experiential scroll

This puts creative authority at BOTH ends (primacy + recency effects) rather than buried at line 356 of 610 (where Section 9 currently sits). The content is identical; the ordering activates the dispositional frame.

The paradigm exploration synthesis (Report 20) found that "only 6.2% of the conventions brief (38 lines, Section 9) is dedicated to creative authority" and "the remaining 93.8% is physics/thresholds/constraints that accidentally signal 'follow rules, don't create.'" Moving creative authority to the opening and closing positions changes the signal without changing the content.

---

## 7. THE META-QUESTION: IS A DISPOSITIONAL RECIPE JUST ACTIVATING OPUS'S NATIVE CAPABILITY?

### Yes. And that is the point.

The soul-tracer findings estimated 60-70% of design quality comes from the model's native intelligence. The remaining 30-40% comes from system-specific knowledge (soul constraints, token values, component library). If this estimate is correct, then the optimal prompt is:

**30-40% system knowledge** (constraints + vocabulary + reference files) + **0% quality specification** (no rules about what "good" looks like) + **a frame that activates the 60-70%** (dispositional instructions)

The Flagship prompt was approximately:

**20% system knowledge** + **70% quality specification** + **10% creative authority**

The 70% quality specification INTERFERED with the 60-70% native capability. This is the interference model from Report 17: `quality = f(model_capability - instruction_interference)`. The 963-line prompt consumed attention that would otherwise have been devoted to composition.

### The Optimal Recipe Is the One That Removes the Most Interference

This reframes the pipeline design question from "what do we need to ADD to get 4/4?" to "what do we need to REMOVE to stop preventing 4/4?"

What to remove:
- Rules that specify values the builder can judge (letter-spacing, exact font-size progressions, exact spacing values per zone)
- Rules that duplicate what the builder already knows (constraints that restate soul prohibitions in different language)
- Rules that constrain without informing ("FAIL IF < 15 RGB" tells the builder what to avoid but not what to do)
- Rules that measure process rather than outcome (build log requirements, conviction statement format)

What to keep:
- Hard constraints the builder cannot judge (soul prohibitions -- the builder has no way to know that border-radius is prohibited without being told)
- Perception thresholds (the builder cannot calibrate RGB deltas without a reference point)
- Vocabulary the builder does not possess (the mechanism catalog, the component library, the token definitions)
- The dispositional frame (which activates the judgment that USES the vocabulary within the constraints)

### The Paradox Resolved

The paradox of the pipeline is that more specification produces worse output. The resolution: specification and composition compete for the same cognitive resource. A dispositional recipe resolves this by:

1. Installing system knowledge EFFICIENTLY (30-50 lines of constraints + vocabulary pointers)
2. Activating native capability EXPLICITLY ("you are composing, not complying")
3. Getting out of the way

"Getting out of the way" is not laziness. It is the recognition that the builder's 200K-token context window is a finite resource. Every line of specification consumes attention that could be spent on composition. The dispositional recipe maximizes the attention available for composition by minimizing the attention consumed by specification.

This is what Report 17 called "creating the silence in which the builder can hear the question." The question is: "What does this content want to look like?" The silence is: the absence of 900 lines of rules telling the builder what it already knows how to judge.

### The Final Claim

A dispositional recipe does not CREATE capability. It ACTIVATES capability that already exists. The evidence is that CD-006 was built by Opus with near-zero specification and achieved 39/40. The capability was always there. The pipeline's 963 lines suppressed it.

The optimal pipeline is therefore:

1. **Install what Opus does not know** (system-specific constraints, vocabulary, content)
2. **Activate what Opus already knows** (compositional judgment, restraint, content-form resonance)
3. **Verify what Opus produced** (gates for catastrophic failures, PA for perceptual quality)

Step 1 is specification. Step 2 is disposition. Step 3 is audit. The current pipeline does 1 and 3 exhaustively and skips 2 entirely. Adding D-01 through D-05 fills the gap.

---

## SUMMARY TABLE

| Question | Answer | Confidence |
|----------|--------|------------|
| Are the 5 dispositional instructions concrete enough? | YES -- each changes measurable builder behavior | HIGH (grounded in observed failures) |
| Does model choice matter? | YES -- Opus + disposition is the highest ceiling; Sonnet + disposition is unreliable | MEDIUM (n=0 for dispositional, but strong theoretical basis) |
| Is the hybrid format viable? | YES -- 50 lines, 4 tiers, graceful degradation for Sonnet | MEDIUM (untested but architecturally sound) |
| Do human design maxims translate? | YES -- same structure (perceptual shift -> attention redirection -> better decisions) | HIGH (4 maxims analyzed, all translate) |
| How serious are the risks? | Model-dependence is the biggest risk. Non-reproducibility is manageable. | MEDIUM |
| Replace or complement the brief? | COMPLEMENT -- restructure the brief's framing, not its content | HIGH |
| Is it just "activating native capability"? | YES -- and that is precisely why it should work | HIGH (CD-006 is the proof) |

---

**END REPORT 58**

*The dispositional recipe is not a new idea. It is the oldest idea in design education: teach the student to see, give them the materials, and get out of the way. What is new is applying this to AI builders -- and the evidence that it may be the only path to consistent 4/4 quality, because the alternative (more specification) provably reduces quality by consuming the attention that composition requires. Five concrete instructions (D-01 through D-05), integrated as Tier 4 of a hybrid recipe, represent the minimum viable test of this hypothesis.*
