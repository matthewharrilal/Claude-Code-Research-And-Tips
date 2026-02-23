# Dimensional Gap Analysis: Quality Dimensions the Pipeline CANNOT Address

**Author:** synthesis-mechanism team, Task #17
**Date:** 2026-02-22
**Source material:** SKILL.md (build-page, 579 lines), TC SKILL.md (500+ lines), PA SKILL.md (500+ lines), conventions-brief.md (610 lines), gate-runner.md (500+ lines), pipeline-analysis corpus (41 files, 1.7MB), flagship-retrospective (9 reports), paradigm-exploration synthesis (5 agents)

---

## FRAMING: What "Structural Blind Spot" Means

A structural blind spot is not a bug to fix or a feature to add. It is a quality dimension that the pipeline's ARCHITECTURE cannot engage with, regardless of how many rules, gates, or agents are added within that architecture. The distinction:

- **Fixable gap:** The pipeline CAN measure typography zones but the threshold was set wrong. Fix: change the threshold.
- **Structural blind spot:** The pipeline CANNOT assess whether a page feels "alive." No threshold adjustment helps because the dimension is not measurable by the pipeline's instruments.

The pipeline's instruments are: (1) a TC analyst that reads content and derives a metaphor/mechanism plan, (2) a builder that writes HTML+CSS in a single pass, (3) programmatic gates that measure computed CSS values, (4) perceptual auditors that evaluate screenshots. Every blind spot below is evaluated against these four instruments.

---

## 1. ITERATION

### The Dimension
Human designers iterate 15-30 micro-cycles per page. They sketch, evaluate, revise, sketch again. Each cycle is informed by the PREVIOUS cycle's outcome. A designer sees that the spacing feels wrong at 60% scroll depth, tightens it, then notices the tightening created a new problem with the section above, and adjusts that too. Quality emerges from the accumulation of these micro-corrections.

### Pipeline's Current Architecture
The pipeline is fundamentally ONE-SHOT with late-stage patching:

```
TC brief (1 pass) -> Builder (1 pass) -> Gates (evaluate) -> PA (evaluate) -> Fix cycle
```

The fix cycle is NOT iteration. It is remediation -- fixing identified failures. The builder does not revisit early decisions in light of later ones. The midpoint micro-gate (Step 3.1 in SKILL.md) is the closest thing to mid-build feedback, but it checks only 3 gates (warm palette, bg delta, border count) and is explicitly described as "opportunistic, not blocking."

### Is It Fixable Within the Architecture?

**Partially.** The fix cycle mechanism (Step 7 in SKILL.md, up to 3 cycles) provides a coarse iteration loop: build -> evaluate -> fix -> re-evaluate. But this loop has three structural limits:

1. **Granularity:** Iteration happens at the WHOLE PAGE level. Human designers iterate at the SECTION level or even the ELEMENT level. The pipeline cannot say "rebuild zone 3 while keeping zones 1, 2, 4 intact" because the builder writes the entire CSS in one pass.

2. **Cycle count:** 3 fix cycles is the hard cap. Human designers do 15-30+ micro-revisions. Each pipeline cycle costs ~30-45 minutes of agent time plus auditor time. The economics force coarseness.

3. **Information loss between cycles:** The fix instruction format (Step 7.1) is a structured document with tiers. The builder re-reads its conviction statement before applying fixes. But the builder CANNOT re-experience the page the way auditors experienced it. It receives text descriptions of visual problems, not the visual experience itself.

### What Would Real Iteration Look Like?

A fundamentally different architecture:

```
Builder writes Zone 1 CSS -> Renders -> Self-evaluates screenshot ->
Adjusts -> Writes Zone 2 CSS -> Renders full page -> Self-evaluates ->
Adjusts Zone 1 in light of Zone 2 -> ... -> Writes Zone N ->
Full-page self-evaluation -> Adjustments
```

This is the "phased building" architecture identified by the Zero-Loss Explorer (paradigm synthesis, Agent 2). It would require:
- Per-zone rendering and evaluation (Playwright interaction during build, not after)
- Builder access to its own rendered output mid-build
- Ability to revise earlier zones based on later visual context
- A concept of "compositional momentum" where the builder develops a live feel for the page

**Estimated architectural change:** Moderate. The builder agent could be given Playwright access and instructed to render-and-evaluate at zone boundaries. The conventions brief already recommends midpoint reflection (Section 10). Making it programmatic rather than aspirational is the gap.

**Risk:** The paradigm exploration's Agent 2 flagged that "phased building contradicts the conventions brief's own philosophy about holistic composition." Building zone-by-zone may prevent the cross-zone coherence the system demands. The tension is real: iteration requires incrementalism, but composition requires holism.

### Verdict: PARTIALLY ADDRESSABLE

The coarse fix-cycle loop exists. True micro-iteration would require restructuring the builder from a one-pass writer to an incremental renderer-reviser. This is a significant but not impossible architectural change. The deeper question is whether incremental building produces better or worse cross-zone coherence than one-shot building.

---

## 2. GESTALT PERCEPTION

### The Dimension
Quality is holistic. A page "works" or "doesn't" as an integrated whole. The gestalt is not the sum of its parts -- it is an emergent property that cannot be decomposed into measurable attributes. A page can pass every individual gate and every PA question and still feel wrong, because the COMBINATION of passing elements produces a specific overall impression that no individual measurement captures.

### Pipeline's Current Architecture
The pipeline decomposes quality into:
- 17 programmatic gates (individual CSS property checks)
- 65 PA questions (individual perceptual evaluations)
- A weaver that synthesizes PA reports into a verdict

The PA questions come closest to gestalt: PA-01 ("What's the first thing that bothers you?"), PA-03 ("Does this feel like one designer made it?"), PA-05 ("Would you put your name on this?"), PA-10 ("If you squint, does the layout look balanced?"). These are holistic questions.

But the weaver's synthesis is additive, not emergent. It counts YES answers, averages sub-criteria scores, and produces a numeric verdict. The synthesis format (Section 6.3) is:

```
PA-05 SCORE: rate each sub-criterion 0-4, average to 0.5 precision
TIER 5 SCORE: count YES answers from PA-60 through PA-68
```

This is reductive by design. The gestalt -- the ineffable "does this page WORK as a whole?" -- is compressed into a number.

### Is It Fixable Within the Architecture?

**Not fully.** The pipeline can approximate gestalt through better PA questions, but it cannot EXPERIENCE gestalt because:

1. **Auditors see screenshots, not the page.** Screenshots are frozen moments. Gestalt includes the experience of scrolling, of discovering, of the page revealing itself over time. A screenshot at 50% scroll does not capture the FEELING of having scrolled past the first 50%.

2. **9 auditors answer different questions about different aspects.** No single auditor sees the whole page through all dimensions simultaneously. The weaver's synthesis is a reconstruction, not an experience.

3. **The weaver produces a REPORT, not a JUDGMENT.** It follows a structured synthesis format. A human art director would say "this doesn't work" based on a gut reaction that integrates thousands of micro-perceptions. The weaver aggregates explicit assessments.

### What Would Gestalt Assessment Look Like?

Two possible approaches:

**A. Integrative auditor:** One additional auditor receives NO assigned questions. Their only instruction: "Look at every screenshot. Scroll through in your mind. Does this page WORK? Write a 200-word impression, then give a single YES/NO." This auditor's verdict would be a gestalt proxy.

**B. Comparative gestalt:** Show the auditor the current page alongside 2-3 reference pages (CD-006, a middle-tier success, and a known failure). Ask: "Which of these does the current page feel most like? Why?" Comparative judgment is easier than absolute judgment for holistic assessment.

Both are implementable within the current architecture with minimal change (add 1 auditor with a different prompt). Neither truly captures gestalt -- they approximate it through structured instructions to an LLM that is itself approximating human perception.

### Verdict: PARTIALLY ADDRESSABLE

The pipeline can improve its gestalt approximation through integrative auditors and comparative assessment. But genuine gestalt perception -- the feeling of a page as a unified experience -- is an emergent property that no decomposition-and-recomposition process fully captures. This is a hard limit of analytical frameworks applied to aesthetic objects.

---

## 3. EMOTIONAL RESONANCE

### The Dimension
Quality is felt. A well-designed page creates an emotional response: confidence, trust, curiosity, delight. These emotions are not properties of CSS values -- they are properties of the reader's EXPERIENCE. The conventions brief acknowledges this (Section 1: "Decisive, not friendly. No shadows. Depth comes from spacing and borders, not illusion."), but the pipeline measures CSS, not feelings.

### Pipeline's Current Architecture
The TC pipeline (Phases 0-2) explicitly engages emotion through the FEEL axis: "What does the reader need to FEEL while navigating this content?" This produces emotional needs that inform the metaphor. But the pipeline then CONVERTS those emotional needs into structural properties (Phase 3.1: "Warmth is not a structural property. Containment with visible boundaries is.") The emotion is consumed during derivation and never verified at delivery.

PA questions PA-18 ("Do all the grays feel like the same family?"), PA-20 ("Describe this page's personality in three words"), and PA-45 ("Is there a single moment you would show someone as an example of good design?") approach emotional assessment. But they are asked of auditors looking at screenshots, not readers experiencing the page.

### Is It Fixable Within the Architecture?

**Partially, through a verification loop.** The pipeline could:

1. TC brief specifies intended emotional trajectory: "Zone 1: curiosity. Zone 2: deepening trust. Zone 3: intellectual engagement. Zone 4: resolution."
2. PA auditors receive the question: "What emotion does each zone evoke?" (without seeing the TC brief's intended emotions)
3. Weaver cross-references intended vs perceived emotions.

This tests whether INTENDED emotion landed. It does not test whether the emotion is APPROPRIATE for the content, which is a human editorial judgment.

### What Would True Emotional Verification Look Like?

A reader-simulation protocol: the auditor reads the CONTENT first (not the page), forms expectations about how it SHOULD feel, then views the page and evaluates whether the visual treatment matches, amplifies, or contradicts the content's emotional register.

This is actually close to what the current PA SKILL.md describes (the Sovereignty Principle, the Three Laws). But it is not operationalized as a structured protocol. Making it explicit -- "Read the content. What should this feel like? Now look at the page. Does it?" -- is straightforward.

### Verdict: ADDRESSABLE with moderate effort

Emotional resonance CAN be specified (intended trajectory), CAN be measured (auditor perception vs intent), and CAN be compared (content expectations vs delivery). The pipeline does not currently do this, but the architecture supports it. The gap is in the PA question set and weaver synthesis, not in the fundamental architecture.

---

## 4. RESPONSIVE BEHAVIOR

### The Dimension
Real pages respond to user interaction: viewport resizing, scrolling, hovering, focusing, clicking. The pipeline's conventions brief specifies responsive behavior (Section 14: three breakpoints at 960/768/480px) and the PA includes responsive questions (PA-21 through PA-23, PA-46). But the pipeline's OUTPUT is static HTML -- there is no post-build responsive testing.

### Pipeline's Current Architecture
- Conventions brief specifies 3 breakpoints with responsive guidelines
- Builder writes @media queries (when it does -- the flagship had ZERO)
- Screenshots are captured at 1440, 1024, and 768px widths (Step 5)
- PA auditors H (Responsive) answers PA-21/22/23/46/47

The responsive testing is real. Screenshots at multiple viewports + dedicated responsive auditor means the pipeline DOES assess responsive behavior.

### Gaps
1. **No interactive testing.** The pipeline does not test hover states, focus order, or keyboard navigation. Behavioral channel (channel 5 in multi-coherence) is measured as presence/absence only.
2. **No viewport TRANSITION testing.** The screenshots are at fixed widths. What happens at 961px (just above the first breakpoint)? Fragile breakpoints are not caught.
3. **No animation/scroll testing.** The pipeline injects `animation: none !important` before all measurements. Any scroll-triggered behavior is explicitly disabled.

### Verdict: MOSTLY ADDRESSABLE

The static responsive assessment exists and works. Interactive behavior, breakpoint transitions, and animation are not tested. Adding Playwright interaction tests (hover, focus, resize) during the gate phase would be a straightforward extension. The pipeline already owns Playwright -- it just uses it only for measurement, not interaction.

---

## 5. MOTION AND ANIMATION

### The Dimension
Temporal quality -- how elements appear, transition, and move -- is a significant dimension of web design quality. Entry animations, scroll-triggered reveals, hover transitions, loading sequences. These create a sense of life and intentionality.

### Pipeline's Current Architecture
Motion is EXPLICITLY PROHIBITED. The conventions brief's restraint list (Section 12):
```
scroll-triggered animations
parallax effects
```

The gate runner injects `animation: none !important; transition: none !important` before ALL measurements. The PA SKILL.md recommends disabling scroll animations for audit. The only permitted temporal property is CSS `transition` for hover states (behavioral channel, channel 5).

### Is It Fixable?
This is a DESIGN CHOICE, not a structural limitation. KortAI's identity is "warm, sharp, flat, and editorial." Motion contradicts "flat" and complicates "sharp." The pipeline faithfully implements this identity by excluding motion.

IF the design system wanted to add motion, the pipeline would need:
- A temporal vocabulary in the conventions brief (timing curves, duration ranges, trigger types)
- Temporal gates (verify transition durations, verify prefers-reduced-motion support)
- PA questions about motion quality (too fast? too slow? distracting? purposeful?)
- Scroll-based testing in Playwright (currently disabled)

### Verdict: DELIBERATELY EXCLUDED (design choice, not architectural limit)

The pipeline CAN support motion if the design system wants it. Currently excluded by identity constraints, not by architectural inability. Adding it would be moderate effort within the existing framework.

---

## 6. NARRATIVE PACING

### The Dimension
Content flow -- the experience of reading a long page -- has a rhythm. Some sections should feel quick and scannable. Others should slow the reader down into deep engagement. The pace should vary, creating peaks and valleys of attention demand. This is the literary dimension of web design.

### Pipeline's Current Architecture
The pipeline engages narrative pacing in several ways:
- TC Phase 1 (multi-axis questioning) considers NAVIGATE ("How does the reader need to move THROUGH this content?") and assesses content sections by type
- Conventions brief Section 7 (Transition Grammar) defines three boundary types (SMOOTH/BRIDGE/BREATHING) that create pacing variation
- Conventions brief Section 4 (coherence arc planning) describes an arc: Opening (2-3 channels) -> Building (3-4) -> Climax (4-5) -> Resolution (2-3)
- PA-35 ("Scroll through at reading speed. Does your interest stay level, peak and valley, or fade? Where do you start skimming?") directly measures pacing
- PA-47 ("At what scroll position do you start to feel like you've seen this before?") catches pacing decay

### Gaps
1. **Content-form coupling is aspirational, not verified.** The conventions brief says "Dense analytical content = tighter spacing. Overview content = generous spacing." But no gate checks whether content density correlates with visual density. PA-70 asks about this, but it is a single question among 65.
2. **Section length is not considered.** A 200-word section and a 2000-word section might receive identical visual treatment. The pipeline has no mechanism for varying visual intensity based on content VOLUME within a section.
3. **Reading speed is not modeled.** The pipeline does not consider how long a reader spends in each section. Fast-scan sections (statistics, key findings) vs deep-read sections (analysis, argumentation) need different visual pacing.

### Verdict: PARTIALLY ADDRESSED, with room for improvement

The architectural framework exists (transition grammar, coherence arc, PA questions). The gap is in the SPECIFICITY of content-form coupling -- the pipeline describes the principle but provides no mechanism for the builder to assess content density per-section and calibrate visual treatment accordingly. A content density pre-analysis step (word count, list density, heading frequency per section) could feed into the TC brief as pacing guidance.

---

## 7. MATERIAL AUTHENTICITY

### The Dimension
"Real-feeling" textures and surfaces. A well-designed page has surfaces that feel like they are made of something -- paper, cloth, stone, metal. This is not about literal textures but about the SUGGESTION of materiality through subtle color variation, border weight, spacing rhythm, and visual density.

### Pipeline's Current Architecture
KortAI explicitly rejects simulated materiality:
- `box-shadow: none` (no depth illusion)
- `background: solid only` (no gradients, no patterns)
- `opacity: 1 on containers` (no transparency)
- `filter: drop-shadow(): NEVER`

However, the system achieves material SUGGESTION through:
- The warm cream palette that suggests paper
- Sharp edges (border-radius: 0) that suggest cut/folded material
- The 3-tier border system that creates weight hierarchy
- The "dark slab inversion" (Section 8 of conventions brief) that creates contrast panels

The Material channel (channel 6 in multi-coherence) is an "enhancement channel" that measures "surface treatment or component density change" -- this is the closest the pipeline comes to materiality.

### Is It Fixable?
Material authenticity within the KortAI identity is about SUGGESTION through CSS fundamentals, not about texture images or effects. The pipeline's vocabulary (borders, backgrounds, spacing, typography) IS the material vocabulary. The question is whether the pipeline's rules help or hinder the builder's ability to use these fundamentals to create material feeling.

The conventions brief's emphasis on perception thresholds (>= 15 RGB delta, >= 2px font-size delta) actually SUPPORTS material authenticity -- by ensuring that surface changes are perceptible, they become tangible. The flagship's failure (1-8 RGB deltas) was a failure of materiality -- surfaces that were technically different but felt identical.

### Verdict: ADDRESSED THROUGH THE EXISTING VOCABULARY

Material authenticity within the KortAI identity is achieved through the same CSS properties the pipeline already measures. The perception thresholds ensure these properties are tangible. The gap is not architectural but creative -- the builder must choose values that create material suggestion, which is a compositional skill, not a pipeline feature.

---

## 8. CONTEXTUAL APPROPRIATENESS

### The Dimension
Does the pipeline consider content TYPE when specifying form? A research synthesis should feel different from an API reference, which should feel different from a personal essay. The visual treatment should respond not just to content structure but to content NATURE.

### Pipeline's Current Architecture
The TC pipeline EXPLICITLY addresses this:
- Phase 0A: Content Type Classification (Prose-dominant / Mixed / Visual-dominant / Self-referential)
- Phase 0B: Scope Assessment (MICRO through MASSIVE)
- Phase 0C: Section Identification (NARRATIVE / REFERENCE / CODE / DATA / MIXED)
- Phase 1: Multi-axis questioning explicitly varies by content type ("Richest When" column)
- Phase 2: Tension derivation depends on content-system opposition
- Phase 3: Metaphor search uses content resonance as a primary heuristic

The conventions brief explicitly states: "CONTENT-FORM COUPLING: Each section's visual density, component selection, and spacing must respond to what the content in that section IS ABOUT."

### Gaps
1. **Content type does not propagate to the builder.** The TC brief contains the content analysis, but the builder reads the TC brief for metaphor and mechanisms, not for per-section content classification. The builder may not know which sections are NARRATIVE vs REFERENCE vs CODE.
2. **No genre-level treatment guidance.** The pipeline has one build process regardless of whether the content is a technical tutorial, a philosophical essay, or a research report. Different genres have different optimal visual treatments.
3. **No reader expertise model.** The pipeline does not consider whether the audience is beginners, experts, or mixed. Reader expertise affects optimal information density, progressive disclosure, and navigation complexity.

### Verdict: PARTIALLY ADDRESSED

Content type analysis exists in the TC pipeline but does not always propagate to the builder as actionable guidance. Adding a per-section content classification to the TC brief (with visual density recommendations) would close the gap without architectural change.

---

## 9. USER PSYCHOLOGY

### The Dimension
Does the pipeline consider how users EXPERIENCE the page? Cognitive load, scanning patterns, decision fatigue, information overload, the satisfying feeling of completion, the anxiety of being lost.

### Pipeline's Current Architecture
User psychology is embedded implicitly:
- The spacing scale (Section 1) prevents cognitive overload through visual breathing room
- The 3-tier border system creates visual hierarchy that guides attention
- PA-04 ("Where does your eye go first? Is that where it SHOULD go?") addresses attention direction
- PA-35 ("Does your interest stay level, peak and valley, or fade?") addresses engagement psychology
- PA-39 ("Does the header feel like a doorway or a lobby?") addresses first-impression psychology
- The TC FEEL axis explicitly asks about reader emotional needs

### Gaps
1. **No cognitive load assessment.** The pipeline does not measure or estimate the cognitive demand of any section. Information-dense sections with complex table layouts create high cognitive load. The pipeline does not distinguish "appropriately dense" from "overwhelmingly dense."
2. **No progressive disclosure modeling.** The pipeline builds a full page. It has no mechanism for deciding what to show first vs what to reveal on interaction or scroll. Collapsible sections, expandable details, and progressive revelation are not part of the vocabulary.
3. **No task-completion modeling.** For tutorial/guide content, the pipeline does not consider whether the reader can track their progress through the material. Progress indicators, section numbering, and completion signals are not part of the systematic vocabulary.
4. **No return-visit consideration.** Pages are designed for first-read. The pipeline does not consider how a page serves someone returning to find a specific section.

### Verdict: IMPLICITLY PRESENT, EXPLICITLY ABSENT

User psychology is embedded in the design system's values but is not a dimension the pipeline explicitly models or measures. The PA questions catch gross psychological failures (overwhelming density, missing hierarchy). But finer-grained psychological optimization (cognitive load balancing, progressive disclosure, return-visit navigation) is beyond the pipeline's explicit scope. Adding cognitive load heuristics to the gate system (elements per viewport, competing focal points per section) would be a moderate extension.

---

## 10. TYPOGRAPHIC MICRO-DECISIONS

### The Dimension
Optical kerning, hanging punctuation, rag optimization, widow/orphan control, pull-quote placement, drop-cap interaction with surrounding text. These are the craft details that distinguish typographically excellent pages from merely correct ones.

### Pipeline's Current Architecture
The pipeline addresses typography at the MACRO level:
- Font trinity (Instrument Serif, Inter, JetBrains Mono) is locked
- Typography zones must have >= 10px display-body delta
- Letter-spacing floor of 0.025em
- Character-scale register is a closed vocabulary (Section 5 of conventions brief)
- Drop cap deployment limited to 2 sections maximum

At the MICRO level, the pipeline is largely silent. The gate runner (SC-11) checks font-size hierarchy. The PA (PA-06 through PA-08) checks readability. But:

### Gaps
1. **No rag optimization.** The pipeline does not check whether paragraph right edges create ugly shapes. This is a CSS `text-wrap: balance` or `text-wrap: pretty` decision that affects every paragraph.
2. **No widow/orphan control.** Single words on the last line of paragraphs, orphaned headings at page bottom. CSS `orphans` and `widows` properties exist but are not in the vocabulary.
3. **No optical margin alignment.** Pull quotes, drop caps, and list markers create optical edges that may misalign with text edges. The pipeline does not address this.
4. **No line-length optimization.** The pipeline specifies container width (940-960px) but not the characters-per-line for body text. CPL (characters per line) is the single most important typographic readability metric. PA-07 catches extreme violations ("Can you read the longest paragraph without losing your place?") but does not establish an optimal range.
5. **No hyphenation guidance.** CSS `hyphens: auto` can improve rag and prevent rivers but is not in the vocabulary.

### Is It Fixable?
Mostly yes. Several fixes are trivial CSS additions:
- `text-wrap: pretty` or `text-wrap: balance` for paragraphs and headings
- `orphans: 2; widows: 2` as a global rule
- `hyphens: auto` with `word-break: break-word` fallback
- CPL verification gate (count characters per line, flag >80 or <45)
- Hanging punctuation: `hanging-punctuation: first last` (limited browser support)

These could be added to the conventions brief as mandatory CSS and to the gate runner as additional checks. The architectural change is minimal.

### Verdict: ADDRESSABLE through vocabulary expansion

Typographic micro-decisions are not a structural blind spot but a vocabulary gap. The pipeline's architecture (brief -> builder -> gates -> PA) can accommodate them. The conventions brief and gate runner need expansion, not the pipeline itself.

---

## THE META-QUESTION: Is One-Shot the Fundamental Limit?

The paradigm exploration synthesis (5 agents) converges on this: **the pipeline suppresses what it claims to enable.** More specification produces less quality. The evidence:

| Experiment | Specification volume | PA-05 |
|-----------|---------------------|-------|
| Middle-tier | ~100 lines recipe | 4/4 (DESIGNED) |
| Flagship | 963 lines checklist | 1.5/4 (FLAT) |
| Remediation | 1,025 lines recipe | 2.5/4 (IMPROVED) |
| Gas Town (/build-page) | ~542 lines master prompt | CEILING-tier |

The one-shot nature is ONE factor. But Agent 3 (Paradigm Questioner) argues the deeper issue is that the pipeline is "rationalized fear of the blank page" -- scar tissue from failures that has grown thicker than the original wound.

### What Would a LIVE Pipeline Look Like?

A live pipeline would differ in three fundamental ways:

**1. Continuous rendering.** The builder renders the page every N lines of CSS, evaluating its own output visually. This requires builder access to Playwright during build, not just after.

**2. Conversation instead of specification.** Instead of a 500+ line prompt read once, the builder receives a thin brief (~50 lines of non-negotiables) and then ASKS QUESTIONS as needed during build. A reviewer agent responds in real time. This is Agent 3's "Paradigm B."

**3. Example-anchored creativity.** Instead of rules, the builder receives 2-3 reference pages and the instruction: "Make something this good for this content." The pipeline's role becomes CURATION (selecting the right reference pages) and VERIFICATION (checking the output), not SPECIFICATION (describing how to build).

### Architectural Requirements for a Live Pipeline

```
Current:    [specification] --one-shot--> [builder] --evaluate--> [auditors]

Live:       [thin spec + examples] ---> [builder + Playwright loop]
                                              |
                                              v
                                        [render every ~100 lines]
                                              |
                                              v
                                        [self-evaluate screenshot]
                                              |
                                              v
                                        [adjust / ask reviewer]
                                              |
                                              v
                                        [continue building]
                                              |
                                              v
                                        [final PA (abbreviated)]
```

The key changes:
- Builder has Playwright access (currently prohibited -- orchestrator owns all Playwright)
- Builder self-evaluates mid-build (currently aspirational: "midpoint reflection" in conventions brief)
- Reviewer agent available for real-time consultation (currently zero communication during build)
- PA is final validation, not primary quality assessment (currently PA is the only quality assessment)

**Cost:** Higher per-page agent time (more rendering, more evaluation loops). But potentially LOWER total time because fewer fix cycles needed.

**Risk:** The paradigm questioner's concern is real: the pipeline exists because earlier attempts WITHOUT specification produced failures. Removing specification entirely might reproduce those failures. The answer is likely "thin specification + examples + iteration" rather than either extreme.

---

## SYNTHESIS: The Ten Blind Spots Ranked

| Rank | Dimension | Status | Effort to Address | Architectural Change |
|------|-----------|--------|-------------------|---------------------|
| 1 | **Iteration** | PARTIALLY ADDRESSABLE | HIGH | Builder needs render-loop capability |
| 2 | **Gestalt perception** | PARTIALLY ADDRESSABLE | LOW | Add 1 integrative auditor |
| 3 | **Emotional resonance** | ADDRESSABLE | MODERATE | Add emotion trajectory to TC + PA |
| 4 | **Narrative pacing** | PARTIALLY ADDRESSED | MODERATE | Add content density pre-analysis |
| 5 | **User psychology** | IMPLICITLY PRESENT | MODERATE | Add cognitive load heuristics |
| 6 | **Contextual appropriateness** | PARTIALLY ADDRESSED | LOW | Propagate content classification to builder |
| 7 | **Responsive behavior** | MOSTLY ADDRESSABLE | LOW | Add interactive Playwright testing |
| 8 | **Typographic micro-decisions** | ADDRESSABLE | LOW | Vocabulary expansion in brief + gates |
| 9 | **Material authenticity** | ALREADY ADDRESSED | NONE | Current vocabulary sufficient |
| 10 | **Motion/animation** | DELIBERATELY EXCLUDED | N/A | Design choice, not gap |

### The Three Truly Structural Blind Spots

Of these ten, only three represent genuine STRUCTURAL limitations that the current architecture cannot address without fundamental change:

**1. True iteration (build-evaluate-revise loops).** The one-shot builder with late-stage fix cycles is the pipeline's deepest architectural constraint. Every other blind spot is downstream of this: if the builder could iterate, gestalt would improve through accumulated micro-corrections, emotional resonance would be tunable through revision, narrative pacing would emerge through scroll-and-adjust cycles.

**2. Holistic gestalt assessment.** The pipeline decomposes quality into 65 questions + 17 gates + a synthesis. No matter how good the decomposition, the recomposition loses emergent properties. This is not a solvable problem within analytical frameworks -- it is a fundamental tension between measurement and experience.

**3. Creative confidence vs specification volume.** The paradigm exploration's central finding -- that more specification produces less quality -- is a structural tension. The pipeline exists to SPECIFY, but specification suppresses the creative capacity that produces quality. This is not a tuning problem (write better specs). It is a paradox: the pipeline's purpose (ensure quality through specification) may be in tension with its outcome (quality through creative freedom).

### The Meta-Answer

**Is the pipeline's ONE-SHOT nature the fundamental structural limit?**

Yes, but not because one-shot prevents iteration. Rather, one-shot forces FRONT-LOADING -- all design intelligence must be encoded in the specification BEFORE the builder starts. This creates the specification paradox: too little specification = failures from ignorance. Too much specification = failures from compliance-mode. The sweet spot is narrow and content-dependent.

A live pipeline resolves this by making specification JUST-IN-TIME instead of front-loaded. The builder gets thin non-negotiables, begins building, and receives guidance AS NEEDED based on what it produces. This shifts the pipeline from PREVENTIVE (specify everything to prevent all known failures) to RESPONSIVE (observe what the builder does and correct in real time).

The fundamental architectural change is: **from specification-as-input to feedback-as-process.**

---

## APPENDIX: Evidence Map

| Claim | Source |
|-------|--------|
| Pipeline is one-shot with late-stage patching | SKILL.md Steps 3-7, fix cycle architecture |
| Midpoint micro-gate checks only 3 of 17 gates | SKILL.md Step 3.1 |
| Fix cycle hard cap = 3 | SKILL.md Step 7.4 |
| PA decomposes into 65 questions + 17 gates | SKILL.md Steps 4-6, PA SKILL.md |
| TC FEEL axis consumed during derivation | TC SKILL.md Phase 3.1 |
| Content type classification exists in TC | TC SKILL.md Phase 0A-0C |
| Motion explicitly prohibited | conventions-brief.md Section 12 |
| Typography zones checked at macro level only | gate-runner.md SC-11 |
| More specification -> less quality | paradigm-exploration-synthesis.md, cross-agent convergence |
| Middle scored 4/4 with fewer rules | MEMORY.md Middle-Tier Experiment |
| Flagship scored 1.5/4 with more rules | MEMORY.md Flagship Experiment |
| Conventions brief 93.8% constraint, 6.2% creative authority | paradigm-exploration-synthesis.md, Agent 5 |
| "Rationalized fear of the blank page" | paradigm-exploration-synthesis.md, Agent 3 |
| Zero-loss theoretical minimum ~15-20% | paradigm-exploration-synthesis.md, Agent 2 |
| Phased building contradicts holistic composition | paradigm-exploration-synthesis.md, Agent 2 |
