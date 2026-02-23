# Human Workflow Analysis — What Skilled Designers Actually Do (And What It Means for LLM Builders)

**Agent:** Human Workflow Analyst (v2, re-run with full synthesis context)
**Team:** paradigm-exploration
**Date:** 2026-02-22
**Context:** Investigating whether the pipeline/brief paradigm is fundamentally right by examining how human designers actually work. This version incorporates findings from all 4 other paradigm exploration agents.

---

## 1. HUMAN WORKFLOW: The Actual Process

### What skilled human designers do NOT do

They do not read a 610-line specification, hold it in working memory, and then produce a complete artifact. Nobody works that way. Not a graphic designer at Pentagram, not a developer at Stripe, not an editorial designer at The New York Times. The idea that you can front-load 3,700 lines of reference material, compress it into a brief, hand it to a builder, and expect the builder to produce composed output in a single pass is a workflow that exists nowhere in human design practice.

### What they actually do

The process has five phases, but they are not sequential -- they overlap, loop, and collapse depending on the designer's experience level:

**Phase 1: Absorption (~5-10% of time)**
The designer reads the content. Not the spec. The CONTENT. They're asking: what is this about? What does it want to be? Is this dense analytical material or flowing narrative? Where are the natural breaks? What's the emotional arc?

A designer reading the Yegge Gas Town piece would feel the irreverence, the conversational density, the sudden sharp technical pivots -- and that feeling would drive every subsequent decision. They are developing a FELT SENSE of the material, not an analytical classification.

This maps to TC Phase 0 (content assessment), but there's a crucial difference: the human designer's absorption is holistic and pre-verbal. They don't produce a "content type classification" -- they develop an intuition that guides everything that follows. TC Phase 0 is analytical decomposition; human absorption is synthetic impression.

**Phase 2: Reference Pull (~10-15% of time)**
The designer looks at existing work. Not to copy -- to calibrate. "This feels like that feature spread in Issue 12." "This has the density of our product comparison pages." They pull 2-3 references and lay them next to their workspace.

The references serve as PERCEPTUAL ANCHORS -- they set the quality bar and the stylistic register without encoding explicit rules. A single reference page encodes thousands of micro-decisions (border weights, spacing rhythms, typography scale, color temperature, density arc, component vocabulary, boundary treatments) in a form that a designer absorbs in 2-3 seconds of looking.

This is what the pipeline completely lacks. The conventions brief describes a world in prose; reference pages SHOW that world.

**Phase 3: Sketch/Rough (~20-30% of time)**
The designer produces a rough layout. NOT finished CSS. A sketch -- paper, Figma, or a rough HTML with placeholder styles. The sketch establishes zone architecture, flow, and density distribution. It answers: "where does the eye go first?" and "where are the breathing points?"

This maps loosely to the builder's conviction statement + fractal echo table + transition plan, but with a crucial difference: the designer's sketch is VISUAL. They can see it. They're making spatial decisions by looking at spatial output, not by writing prose about spatial intent.

A designer sketching an editorial page draws maybe 8 rectangles with rough proportions and a few arrows showing flow. This IS the fractal echo table and transition plan -- but rendered in a medium that provides immediate perceptual feedback.

**Phase 4: Build-Preview-Adjust Loop (~40-50% of time)**
This is where human workflow and the pipeline diverge most dramatically. The designer works in TIGHT LOOPS:
- Write 20-40 lines of CSS
- Preview in browser
- Squint, scroll, evaluate
- Adjust 3-5 values
- Preview again
- Move to next section

The loop cycle is 2-5 minutes. A complex page might go through 30-50 of these micro-cycles. Each cycle is a PERCEPTION CHECK -- the designer is asking "does this look right?" not "does this comply with threshold SC-09?" The perception is holistic, not decomposed into channels.

**Phase 5: Polish (~10-15% of time)**
Final pass. Cross-section coherence. Responsive behavior. Typography refinement. Edge cases. This is where the designer's internalized knowledge of the system manifests most clearly -- they catch inconsistencies by FEELING them, not by running 17 programmatic gates. But in practice, most "polish" already happened during the build-preview cycles.

### The critical difference: JUST-IN-TIME knowledge retrieval

A human designer with 6 months of experience on a design system has internalized perhaps 200-300 rules, patterns, and values. But they don't hold all 300 in working memory while writing CSS. They retrieve what they need WHEN they need it.

Building a callout? The designer's fingers remember `border-left: 4px solid`, the label treatment (uppercase, 0.75rem, monospace), the padding pattern. They don't re-read a conventions brief to access this knowledge. It's in motor memory.

Hitting a zone boundary? The designer instinctively reaches for background shift + typography change + spacing compression. They've done it dozens of times. The multi-coherence pattern is procedural knowledge, not declarative knowledge.

This is EXACTLY what the Attention Analyst identified: "The distinction between 'information present in context' and 'information the model is actively using' is massive." The Attention Analyst measured effective working memory during CSS output at ~200-400 lines, with only 5-10% of the 3,700 lines of reference material actively driving CSS at any moment. Human designers solve this by moving knowledge from working memory to procedural memory through repetition. LLMs cannot do this within a single session -- but they can approximate it through architecture.

---

## 2. INTERNALIZATION: Can LLMs Approximate Muscle Memory?

### The internalization spectrum

Human designers exist on a spectrum:

| Level | How They Use Specs | Equivalent LLM Strategy |
|-------|-------------------|------------------------|
| Novice (0-3 months) | Read spec linearly, follow rules | Current pipeline: read brief, comply |
| Competent (3-12 months) | Scan spec for specific sections when needed | JIT reading: re-read relevant sections before each phase |
| Proficient (1-3 years) | Rarely consult spec; work from internalized patterns | Compiled brief: pre-digested, per-phase CSS recipes |
| Expert (3+ years) | Spec is irrelevant; design from principles + taste | Zero-spec: "Build an extraordinary page. Use your judgment." |

**The pipeline currently forces NOVICE behavior on an Expert-capable model.** Opus has been trained on millions of design examples. It has internalized general design principles at a level roughly equivalent to "proficient" on this spectrum. The conventions brief then OVERRIDES this general proficiency with system-specific rules delivered as a novice-style specification. The Creative Capacity Analyst's finding supports this: "Only 6.2% of the conventions brief (38 lines, Section 9) is dedicated to creative authority. The remaining 93.8% is physics/thresholds/constraints that accidentally signal 'follow rules, don't create.'"

### Three paths to approximating internalization

**Path A: Fine-tuning (not available)**
True internalization would require fine-tuning on the KortAI design system's corpus -- all explorations, all research, all validated output. The model would "know" the system the way a designer knows it after a year. This is not currently available for Claude models and would require significant investment.

**Path B: In-context priming (current approach, underperforming)**
The conventions brief (610 lines) IS the LLM's "internalized knowledge" for the session. But 610 lines delivered as TEXT cannot match what a human encodes through 1,000 hours of PRACTICE. The encoding is fundamentally different: human internalization is PROCEDURAL (enacted through practice), while the conventions brief is DECLARATIVE (stated through rules). Declarative knowledge produces compliance; procedural knowledge produces fluency.

The Attention Analyst quantified the problem: effective utilization is ~30% of input material. Of the 610-line brief, the builder actively attends to approximately 180 lines while generating CSS. The rest is present but below the attention threshold -- information that is technically available but not being used.

**Path C: Structural approximation (available now, untested)**
Instead of trying to make the LLM internalize 610 lines, structure the workflow so it only needs 50-80 lines at any given moment. This is the JIT / phased approach:

| Build Phase | What builder needs | Lines |
|-------------|-------------------|-------|
| HTML skeleton | Soul constraints + accessibility requirements | ~40 |
| Zone architecture | TC brief + perception thresholds | ~60 |
| Per-zone CSS | Zone-specific recipe + component DNA | ~50/zone |
| Polish | Multi-coherence rules + five questions | ~80 |

Each phase gets EXACTLY what it needs. Nothing more. The 610-line brief is decomposed into 4 focused briefs of 40-80 lines each. This is structurally analogous to how a proficient designer works: they don't re-read the spec; they access the relevant subset from procedural memory.

However, the Zero-Loss Explorer raised a critical objection: "Phased building contradicts the conventions brief's own philosophy about holistic composition. Building zone-by-zone may actually prevent the cross-zone coherence the system demands." This is a real tension. Human designers solve it by holding the WHOLE PAGE in visual memory while working on PARTS of it. An LLM builder would need to hold the conviction statement + transition plan as a persistent anchor across phases.

### The critical insight about in-context learning

LLMs don't "internalize" in the human sense -- they don't build durable procedural representations that persist across sessions. But within a session, they exhibit something ANALOGOUS to internalization through the attention mechanism. Early-read material becomes a "background prior" that influences output generation even when not directly attended to.

This means: the ORDER of reading matters enormously. The Attention Analyst identified ~30% section utilization -- the builder cited only 4 of 19 conventions brief sections as influential. Which 4? Almost certainly the FIRST sections and the LAST sections, with the middle lost to attention decay. The conventions brief's current structure (soul -> perception -> richness -> multi-coherence -> fractal -> metaphor -> transitions -> CSS vocabulary -> creative authority) front-loads constraints and back-loads freedom. By the time the model reaches Section 9 (creative authority), 572 lines of constraint have already established the session's "personality" -- cautious, rule-following, compliance-oriented.

A human designer who has internalized the system carries creative confidence and constraint awareness in PARALLEL, not in sequence. They don't think "first the rules, then the freedom." They think "I know what I can do and what I can't, simultaneously." The brief's sequential structure makes this parallel awareness impossible.

---

## 3. REFERENCE-BASED CREATION: "Make It Feel Like This"

### The power of visual reference

When a creative director tells a designer "make this feature page feel like the Q3 product launch spread," they are transmitting approximately:
- Layout topology expectations
- Density register (how packed vs. airy)
- Typography confidence level (how boldly the scale is deployed)
- Color palette deployment patterns
- Component variety expectations
- Boundary treatment patterns
- Overall quality bar

All of this in ONE SENTENCE plus a visual reference. No 610-line brief needed.

The designer then opens the reference page, studies it for 3-5 minutes, and begins working. They're not copying; they're CALIBRATING. The reference tells them "this is the register we're working in" and their internalized knowledge fills in the specifics for the new content.

### What "show don't tell" would look like for an LLM builder

**Current approach:**
```
Read 610-line conventions brief describing the world
Read 80-line TC brief describing the composition
Read content
Build from descriptions
```

**Reference-based approach:**
```
Read CD-006-pilot-migration.html (CEILING-tier reference, 39/40)
Read 50-line soul constraints (non-negotiable rules only)
Read TC brief (content-specific metaphor + zones, ~80 lines)
Read content
Build at the same quality register as the reference
```

The reference page contains approximately 1,500-2,000 lines of HTML+CSS. But the model doesn't need to "read" it the way it reads prose -- it can ANALYZE it. Extracting patterns from working code is a fundamentally different cognitive operation than interpreting prose descriptions of patterns. The code IS the pattern. No translation loss.

The Zero-Loss Explorer identified "translation loss" as one of four irreducible sources: "converting prose descriptions to CSS requires interpretation." Reference-based creation ELIMINATES this source entirely. The model reads CSS and produces CSS. No prose-to-CSS translation needed.

### Evidence from the project's own history

The project's memory contains telling data points:

- **CD-006** (39/40, CEILING tier) was built by an Opus agent without the current pipeline, with access to previous explorations as implicit references. Less specification, more reference = better output.
- **Middle experiment** (PA-05 4/4, 3/3 novel) succeeded with a ~100-line recipe containing CONCRETE CSS values -- which function as inline references. Fewer rules, more examples = better output.
- **Flagship** (PA-05 1.5/4, FAILED) had the most specification in the project's history. Maximum rules, minimum examples = worst output.

The pattern is consistent across all experiments: MORE reference quality, LESS rule quantity produces better creative output.

### Concrete implementation: the Reference Pattern

```
SOUL CONSTRAINTS (50 lines -- non-negotiable physics)
  + REFERENCE PAGE (1-2 successful pages as quality exemplars)
  + TC BRIEF (80 lines -- content-specific composition)
  + CONTENT (the material to compose)
  = BUILD INSTRUCTION
```

Total builder input: ~2,200 lines (50 + ~2,000 reference + 80 + content)
Current builder input: ~3,700+ lines (610 brief + reference files + content)

The reference approach is SHORTER but MORE INFORMATIVE because working code communicates unambiguously what prose descriptions communicate approximately.

### The risk: gravity toward the reference

One danger: the builder might produce a page that looks TOO MUCH like the reference, collapsing into imitation rather than calibration. This is the anti-gravity concern the project has already identified (94.7% mechanism deployment, divergence mandate in the case studies).

Mitigation strategies:
1. The TC brief's unique metaphor provides compositional direction that forces divergence from the reference's specific patterns
2. Select references whose content type DIFFERS from the current build (narrative reference for an analytical page, etc.)
3. Explicit instruction: "Study the reference's QUALITY REGISTER (boundary strength, density arc, component variety). Do NOT replicate its LAYOUT, METAPHOR, or SPECIFIC MECHANISMS."
4. The content itself forces divergence -- different content demands different treatment

The Paradigm Questioner's "Paradigm D" recommendation aligns here: "50 lines of non-negotiables + 2-3 reference pages + 3 rapid build-review cycles."

---

## 4. THE FEEDBACK LOOP: Mid-Build Preview as the Missing Piece

### The current pipeline's fundamental timing problem

The current pipeline:
1. Builder writes ALL HTML + ALL CSS (~1,000-2,000 lines) in a single burst
2. Gates verify programmatically (17 checks)
3. PA auditors evaluate perceptually (65 questions)
4. Fixes are applied
5. Re-verify

The entire build phase (step 1) happens WITHOUT PERCEPTION. The builder is writing CSS based on IMAGINED output, not observed output. This is like a painter who closes their eyes, paints the entire canvas, then opens their eyes to evaluate.

No human designer works this way. The build-preview loop is the CORE of their workflow -- 40-50% of their time, 30-50 micro-cycles of write-preview-adjust.

### Why this matters for LLMs specifically

The Flagship failure provides the case study. The builder wrote 1,067 lines of CSS that included 238 invisible lines (letter-spacing 0.001-0.01em, background deltas of 1-8 RGB). A mid-build preview after Zone 2 would have caught this IMMEDIATELY -- "Zone 2 and Zone 3 look identical, the backgrounds aren't shifting." Instead, the builder continued for 500+ more lines building on a broken foundation. The problem compounded: each subsequent zone used the same imperceptible values because the builder had no signal that the values were imperceptible.

The midpoint micro-gate (Step 3.1 in /build-page) is an attempt at mid-build feedback, but it's underutilized:
- Only 3 gates (SC-04, SC-09, SC-15) -- misses composition
- Only runs ONCE at ~50% completion
- No PERCEPTUAL evaluation, only programmatic
- Builder may complete too fast for it to trigger
- If it fires, it catches problems at 50% that a human would catch at 10%

### Three models for mid-build feedback

**Model A: Per-zone gate checkpoint (minimal change)**
After each zone boundary, the orchestrator renders the partial page, runs SC-04 + SC-09 + SC-15, sends pass/fail to builder before the next zone. Cheap, mechanical, catches the #1 failure mode (imperceptible backgrounds). Doesn't address composition.

**Model B: Phased build with screenshot review (moderate change)**
Break the build into 3-4 phases, each producing renderable output:

| Phase | Output | Feedback Type |
|-------|--------|--------------|
| 1. Skeleton | HTML structure + zone backgrounds + header/footer | "Can I see zone boundaries? Does the page have architecture?" |
| 2. Typography + Borders | Full type scale + border system | "Do zones feel different? Is there rhythm?" |
| 3. Components + Content | All components populated | "Is there variety? Are there dead zones?" |
| 4. Polish | Responsive, accessibility, refinement | "Does it hold together? Five-question check." |

After each phase, the orchestrator captures a screenshot and sends both mechanical feedback (gate checks) and compositional feedback (brief assessment of how the page LOOKS). This creates 3-4 feedback loops where currently there are zero (or one weak one).

**Model C: Builder self-preview (transformative change)**
Give the builder agent access to Playwright within its own process. After each zone, the builder renders its own work, takes a screenshot, evaluates it, and self-corrects. This is closest to the human model: the designer IS the feedback loop.

The Paradigm Questioner identified this as part of the untested alternative: "Conversation instead of pipeline -- iterative dialogue between builder and reviewer." In Model C, the builder has a dialogue with its own output.

Risk: Playwright contention. The /build-page pipeline already schedules zero concurrent Playwright usage. Giving the builder Playwright access would require careful orchestration. But the potential payoff is significant -- the builder could catch and fix composition issues in real-time, without waiting for gate checks or PA audits.

### The deeper insight: feedback loops enable discovery

The human build-preview loop is not just error-catching -- it's DISCOVERY. The designer sees something unexpected in the preview ("oh, that border creates a nice rhythm I didn't plan") and INCORPORATES it into the next phase. The preview reveals compositional opportunities that were invisible in the plan.

LLM builders currently have zero opportunity for this kind of emergent discovery. Their entire creative process is plan-then-execute, never observe-then-adapt. Mid-build preview would introduce the possibility of compositional surprise -- the thing the project is explicitly trying to achieve at Flagship level.

The Creative Capacity Analyst's taxonomy supports this: "Dispositional recipes" ("here's what to care about, here's what excellent looks like") potentially unlock PA-05 4/4. Dispositional awareness requires feedback -- you can't "care about how it looks" if you can't SEE how it looks.

---

## 5. CREATIVE CONFIDENCE vs. SPECIFICATION COMPLIANCE

### The evidence is damning and consistent

| Experiment | Specification Density | PA-05 Score | Rules:Recipes Ratio |
|-----------|----------------------|-------------|---------------------|
| CD-006 (no pipeline) | Minimal spec | 39/40 | ~0:1 (pure creation) |
| Middle (fewer rules) | ~100 lines recipe-style | 4/4 (DESIGNED) | ~1:3 (recipe-heavy) |
| Flagship Remediation | Same rules + fix recipe | 2.5/4 | ~2:1 (mixed) |
| Flagship (max rules) | ~530 lines master prompt | 1.5/4 (FAILED) | ~8:1 (guardrail-heavy) |

The correlation is negative across all four data points. More specification consistently produces worse creative output. This is not noise; it's signal.

### The mechanism: compliance mode vs. composition mode

The Creative Capacity Analyst identified the mechanism precisely: the conventions brief is 93.8% constraint and 6.2% creative authority. This ratio trains COMPLIANCE MODE.

But there's a deeper mechanism. The Attention Analyst's finding about finite attention budget explains WHY:

```
Total attention budget = 100%
Attention to constraints = proportional to constraint tokens in context
Attention to creation = 100% - attention to constraints
```

610 lines of constraints + 38 lines of creative authority = ~94% of attention budget allocated to constraint satisfaction, ~6% to creative composition. The builder's creative capacity is not absent -- it's CROWDED OUT by the attention demands of 572 lines of specification.

The Middle experiment's 100-line recipe inverted this ratio: concrete CSS values (procedural knowledge) dominated the input, with minimal threshold language (declarative constraints). The builder spent its attention budget on "what to build" rather than "what not to break." Result: PA-05 4/4.

### The creative confidence paradox

The conventions brief says "You are the composer. Approximately 80% of all decisions are yours." (Section 9, line 356). But BEFORE the builder reads that sentence, it has processed 356 lines of constraints, thresholds, and prohibitions. The 80% freedom claim is STATED but not FELT.

The felt experience of reading the brief is: "there are many ways to fail." This is the Paradigm Questioner's insight: "the pipeline PREVENTS known failures but CANNOT CREATE excellence."

The Creative Capacity Analyst proposed a taxonomy that maps directly to the human design world:

| Recipe Type | Human Analogue | LLM Result | Cap |
|-------------|---------------|------------|-----|
| **Specification** ("here are the rules, comply") | Design intern reading the brand guidelines | Flagship: 1.5/4 | ~2.5/4 |
| **Procedural** ("here's how to build this step by step") | Junior designer following a tutorial | Middle: 4/4 | ~3.5/4 |
| **Dispositional** ("here's what to care about, what excellent looks like") | Senior designer working from taste | CD-006: 39/40 | ~4.0/4 |

The pipeline currently operates at the Specification level. The Middle experiment accidentally operated at the Procedural level. CD-006 accidentally operated at the Dispositional level. The progression from Specification to Dispositional is the progression from novice to expert in human design practice.

### What Composition Register input looks like

Instead of the current input (610 lines of world-description preceding creative authority), structure the input to trigger the Dispositional register from the first line:

```
You are composing a page for the KortAI design system. You know this world:
warm cream backgrounds, sharp edges, editorial typography, flat and honest.

Study this reference: [CD-006 HTML]. This is the quality register you're
working in. Not the layout -- the INTENSITY of composition. Every boundary
is deliberate, every component is purposeful, every zone has a personality.

Today's content is [content]. The TC analyst found [metaphor] as the
organizing principle, with [N] zones moving [direction].

Soul constraints (the ONLY hard rules):
[6 lines: border-radius, box-shadow, container, fonts, palette, spacing max]

Perception thresholds (the physics of visibility):
[5 lines: bg delta >=15, font-size delta >=2, letter-spacing >=0.025,
 stacked gap <=120, multi-coherence >=3]

Your composition: [TC brief, ~40 lines of zone architecture + mechanisms]

Build it. Make it extraordinary. After each zone, check: can you FEEL the
boundary? If you squint, do the zones read as different? If not, strengthen.
```

Total instruction: ~65 lines + reference + content. Current: 610 lines + reference files + content.

The dramatic reduction is not "less information" -- it's information delivered in a form that triggers creation rather than compliance.

---

## 6. THE "APPRENTICE" MODEL: Restructuring the Architecture

### From assembly line to mentorship

The current architecture is industrial:
```
RAW CONTENT -> TC ANALYSIS -> BRIEF COMPILATION -> BUILDER (single burst) -> GATES -> PA -> FIXES -> OUTPUT
```

Each stage is independent. The builder has no relationship with the TC analyst. The PA auditors have no context about the builder's intentions. Information flows ONE DIRECTION (forward through the pipeline) with ZERO real-time feedback during the build phase.

### The apprentice architecture

In a master-apprentice model:

**The Master** (TC analyst/orchestrator hybrid) represents accumulated design system knowledge. Not as rules to follow, but as taste to calibrate against. The master doesn't hand the apprentice a 610-line rulebook -- they demonstrate, guide, and critique in real-time.

**The Apprentice** (Opus builder) has raw creative ability but needs calibration for this specific design system. They need to know: what does good look like here? What are the boundaries I can't cross? What's the emotional register of this particular piece? They don't need: 91 thresholds, 17 programmatic gates, or 610 lines of world-description delivered before the first line of CSS.

**The Critique** (PA audit) is the client review at the end -- the external perspective that catches what the master-apprentice pair missed. Not a rubric check. An honest reaction to the work.

### What this looks like architecturally

```
PHASE 1: STUDY (Apprentice absorbs)
  - Read 1-2 successful pages (the master's previous work)
  - Read the content (today's assignment)
  - Read soul constraints (the hard rules, 50 lines)
  - Read TC brief (the compositional direction, 80 lines)
  - Write conviction statement (the apprentice's plan)

PHASE 2: BUILD WITH GUIDANCE (3-4 zones, master reviews each)
  Zone 1:
    - Apprentice builds header + Zone 1
    - Master renders, evaluates: "Good architecture. The header sets the right
      tone. But your Zone 1 background is too similar to the header -- I can't
      feel the transition. Darken Zone 1 or lighten the header."
    - Apprentice adjusts

  Zone 2:
    - Apprentice builds Zone 2
    - Master renders: "The boundary between Z1 and Z2 has 4 channels shifting
      together. Excellent. But the border weight doesn't match -- you used 1px
      where the DEEPENING direction calls for heavier. Try 3px."
    - Apprentice adjusts

  [continue for each zone]

PHASE 3: SELF-REVIEW (Apprentice evaluates own work)
  - Apprentice renders full page
  - Answers 5 questions (squint, scroll, second half, boundary, skeleton)
  - Self-identifies weakest section
  - Strengthens it

PHASE 4: EXTERNAL CRITIQUE (PA audit)
  - 9 auditors examine the finished work
  - Weaver synthesizes
  - If verdict is FIX: apprentice receives directional feedback, not threshold violations
  - If verdict is SHIP: done
```

### Key differences from current pipeline

1. **Reference pages replace the conventions brief** as the primary input. The brief shrinks to ~50 lines of soul constraints + perception thresholds.

2. **Mid-build feedback replaces post-build gates.** The builder gets compositional guidance after each zone, not a barrage of 17 gates after completion.

3. **Directional feedback replaces structured fix instructions.** Instead of "SC-09 FAIL: bg delta 8 RGB at Z1->Z2, increase to 15," the master says "the boundary between your introduction and your first content zone is invisible -- the reader won't feel the transition. Strengthen it." The builder uses their judgment about HOW.

4. **The quality bar is SET BY EXAMPLE, not by specification.** "Your page should feel as composed as this reference" transmits more information than 610 lines of thresholds.

5. **The builder's creative agency is PRIMARY.** The current pipeline positions the builder as an executor of the brief's vision. The apprentice model positions the builder as the creator, with the master providing calibration, not instruction.

6. **TC analyst persists throughout.** Currently the TC agent fires once (Phases 0-4) and exits. In the apprentice model, the TC agent's compositional knowledge persists as the "master" providing ongoing guidance during the build. This addresses the Paradigm Questioner's "Paradigm B: conversation instead of pipeline."

### Risk assessment

**Risk 1: Without programmatic gates, how do you catch objective violations?**
Keep soul constraint gates (SC-01 through SC-05) as a FINAL CHECK. These are binary, objective, and non-negotiable. The master also checks perception thresholds during zone reviews. But gates become verification, not the primary quality mechanism.

**Risk 2: Without the conventions brief, how does the builder know the system?**
Through the reference page(s). A well-built KortAI page demonstrates every principle the brief describes. The builder extracts principles from working code rather than interpreting them from prose. This eliminates what the Zero-Loss Explorer identified as "translation loss" -- one of the four irreducible sources of information loss.

**Risk 3: Without structured fix instructions, how does the fix cycle work?**
The master's per-zone guidance catches most issues before they compound. PA-level problems become rare rather than routine. When PA does find issues, the master translates them into compositional language ("the middle section lacks confidence") rather than threshold language ("SC-13 FAIL at Z3->Z4: 2 channel shifts, need 3").

**Risk 4: More agent-time per build.**
The master must evaluate partial builds after each zone (render screenshot, assess, generate feedback). Total agent-time increases by ~30-40%. But the current pipeline already budgets 3 fix cycles, each requiring re-gates and re-PA. If the apprentice model produces a first build that needs zero or one fix cycle instead of three, the total cost is similar or lower.

**Risk 5: Reference gravity -- the builder copies instead of creating.**
The TC brief's unique metaphor provides compositional direction that forces divergence. Different content forces different treatment. And the master actively guides AWAY from imitation during zone reviews: "This is looking too much like the reference's grid layout. Your content is narrative, not taxonomic -- find a layout that serves the narrative flow."

---

## 7. SYNTHESIS: What Human Design Practice Tells Us About /build-page

### The fundamental problem, restated

The pipeline treats the builder like a novice following a rulebook when it should treat the builder like a proficient practitioner working from taste and reference. Every element of the current architecture -- the TC brief, the conventions brief, the gate runner, the PA audit -- is designed to ensure the output is CORRECT (compliant with thresholds, free of soul violations, mechanically sound). And it succeeds at this: gates pass, soul constraints hold.

But quality -- the difference between PA-05 2.5 and PA-05 4.0, between STRUCTURED and COMPOSED -- comes from DIALOGUE between intent and result. In human practice, that dialogue happens 30-50 times per build via the build-preview loop. In the current pipeline, it happens ZERO times during the build and 1-3 times after (fix cycles).

The Paradigm Questioner put it most sharply: "The pipeline PREVENTS known failures but CANNOT CREATE excellence. The embarrassingly simple alternative has NEVER BEEN TESTED."

### The conventions brief is miscast, not wrong

The conventions brief is an excellent INTERNALIZATION DOCUMENT -- something a human designer would read, study, re-read over weeks, and eventually absorb into procedural memory. It's the textbook for the course.

It is a counterproductive EXECUTION DOCUMENT -- something an agent reads once and immediately builds from. It pushes the builder into compliance mode, consumes 94% of the attention budget with constraints, and buries creative authority at the end of a 610-line specification.

**The fix:** Separate the internalization document from the execution document.

- **The conventions brief** (610 lines, current form): Remains as-is. Read by RESEARCHERS, AUDITORS, and PLANNERS. It is the "textbook."
- **The execution recipe** (50-80 lines, new): Derived from the brief + TC brief. This is what the builder receives. It is the "exam instructions." It contains: soul constraints, perception thresholds, the TC brief's zone architecture and metaphor, and reference to 1-2 successful pages. Nothing else.

The brief already says (line 7): "Read this brief once, fully. Then build." But an LLM can't "read once, fully" and then build from internalized knowledge. The execution recipe gives the builder what it WOULD have internalized if it COULD absorb the brief over months of practice.

### The three highest-leverage changes, in priority order

**1. Per-zone build-preview-adjust loop** (Section 4)
Let the builder see its work after each zone boundary. Catches composition failures early. Enables emergent discovery. Addresses the #1 failure mode (imperceptible foundations compounding). Cheapest to implement, highest confidence of impact.

**2. Reference-based creation** (Section 3)
Give the builder 1-2 successful HTML pages as quality references. Eliminates translation loss. Transmits compositional intelligence at the procedural level. Addresses the specification-length-vs-quality inverse relationship. Moderate implementation cost.

**3. Apprentice model with persistent compositional guidance** (Section 6)
Merge TC analyst and orchestrator into a persistent "master" that guides zone-by-zone. Most expensive, most transformative. Addresses the fundamental architectural gap between pipeline (evaluate-after) and human practice (guide-during).

Each can be implemented independently. Together they transform /build-page from an assembly line into something closer to how humans actually produce designed artifacts.

### The experiment that would validate this analysis

**The "Proficient Designer" experiment:**
- Input: 50 lines of soul constraints + CD-006 as reference + TC brief + content
- No conventions brief. No 610 lines. No 17-gate specification.
- Builder instruction: "Study the reference page. Understand its quality register. Build a page for this content at the same compositional intensity. The TC brief provides your metaphor and zone architecture. The soul constraints are your only hard rules. Everything else is your creative decision."
- Gates: Run only SC-01 through SC-05 (soul) + SC-09 (perception) + SC-13 (multi-coherence)
- PA: Full 9-auditor Mode 4

**Prediction:** Based on Middle (4/4 with fewer rules) and CD-006 (39/40 with minimal spec), I predict PA-05 3.0-3.5. Not Flagship on first attempt, but DESIGNED -- achieved with 90% less specification overhead. The gap between 3.5 and 4.0 can then be closed by targeted additions of SPECIFIC brief sections that address the SPECIFIC shortfall, rather than the current approach of including everything and hoping the builder attends to the right parts.

This experiment costs one Opus builder session. If it produces PA-05 >= 3.0, it proves that the conventions brief in its current form is not necessary for quality. If it produces PA-05 < 2.5, the brief carries essential information that references cannot transmit, and the fix is JIT decomposition rather than elimination.

---

## 8. CROSS-REFERENCES TO OTHER PARADIGM EXPLORATION AGENTS

This analysis aligns with and extends findings from the other 4 agents:

| Agent | Key Finding | How This Analysis Extends It |
|-------|-------------|------------------------------|
| **Attention Analyst** | Effective utilization ~30%, 5-10% active at any moment | Human designers solve this with JIT retrieval from procedural memory; LLMs can approximate with phased builds |
| **Zero-Loss Explorer** | Theoretical minimum loss ~15-20%, current ~70% | Reference-based creation eliminates "translation loss" (one of 4 irreducible sources); phased building risks cross-zone coherence loss |
| **Paradigm Questioner** | Pipeline is "rationalized fear of the blank page"; Paradigm D recommended | The apprentice model IS Paradigm D with added structure: thin constraints + thick examples + fast iteration + persistent guidance |
| **Creative Capacity Analyst** | Over-specification inversely correlates with quality; dispositional recipes untested | Human workflow analysis explains the mechanism: compliance mode vs. composition mode; the internalization spectrum shows WHY dispositional recipes should work |

**The cross-cutting insight all 5 agents converge on:** The pipeline is optimized for CORRECTNESS, but quality comes from DIALOGUE. Human designers create quality through continuous build-preview-adjust loops, not through upfront specification. The pipeline's architecture -- which front-loads specification and eliminates the feedback loop -- is structurally incompatible with the quality it's trying to achieve.

---

*This analysis draws on: the conventions brief (610 lines), the /build-page SKILL.md (579 lines), the synthesis of 4 other paradigm exploration agents, and the project's experimental history (Middle PA-05 4/4, Flagship PA-05 1.5/4, CD-006 39/40, Flagship Remediation PA-05 2.5/4). All claims are grounded in this project's own data.*
