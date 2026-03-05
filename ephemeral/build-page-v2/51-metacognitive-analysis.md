# Wave 3 Meta-Cognitive Analysis: What 20+ Agents Missed

**Author:** metacog (Opus, Task #51)
**Date:** 2026-02-28
**Method:** Read all 5 built artifacts (SKILL.md, gate-runner-v2.js, world-description.md, conventions-brief.md, prompt-templates.md), the Wave 2 retrospective, and the original meta-cognitive analysis (23). Applied lenses that are orthogonal to the collective's perspective: temporal decay, model coupling, content diversity, architectural alternatives, and cascading failure analysis.

---

## 1. BLIND SPOTS OF COLLECTIVE INTELLIGENCE

### 1A. The Biggest Thing Every Agent Took for Granted: The Orchestrator IS the Skill

Twenty agents designed, built, audited, and cross-referenced a system where the orchestrator follows SKILL.md instructions to spawn agents, take screenshots, run gates, and route. Every agent treated the orchestrator as a neutral executor -- a reliable machine that follows instructions.

Nobody asked: **what happens when the orchestrator LLM misinterprets the SKILL.md?**

The SKILL.md is 906 lines of sequential instructions written in a pseudo-code format (`Read(path)`, `Glob(pattern)`, `IF condition: action`). This format implies deterministic execution. But the orchestrator is an LLM reading natural language instructions, not a computer executing code. It will:

- **Summarize instead of follow.** An LLM reading 906 lines of instructions does not execute them step-by-step the way a CPU executes assembly. It forms a gestalt understanding and then acts from that understanding. Steps 4-7 of the SKILL.md (PA + Weaver + Routing + REFINE) are approximately 400 lines of instructions. The orchestrator will compress this into something like "run 5 PA auditors, synthesize, decide whether to REFINE." The granular sub-steps (4.4 artifact verification, 5.4-5.5 Weaver verification, 6.4 mechanical patching) may be skipped because the LLM's gestalt does not foreground them.

- **Confuse prompt templates with instructions to itself.** The SKILL.md embeds Window 1 prompt text (lines 67-161) inline. The orchestrator must understand that these lines are TEXT TO PASS TO ANOTHER AGENT, not instructions for itself. An LLM reading "You are building a page from raw content" might momentarily adopt that identity. The `--- WINDOW 1 PROMPT START ---` / `--- WINDOW 1 PROMPT END ---` markers mitigate this, but the risk is non-zero, especially under context pressure.

- **Improvise when uncertain.** If the orchestrator cannot determine whether `GATES_FAILED` should be true or false (e.g., the gate runner returned ambiguous JSON), it will make a judgment call rather than following the deterministic logic. This is the plumbing/freedom boundary breach that the original metacognitive analysis (23, Section 2D) identified, but at a more fundamental level: the ENTIRE skill is a freedom-exercising agent pretending to be plumbing.

**The question that was never asked:** Should the orchestrator receive the FULL 906-line SKILL.md, or should it receive a COMPRESSED version (~200 lines) with the prompt templates externalized? The current design loads everything into one context window. An alternative: the SKILL.md is a 200-line orchestration script, and the prompt templates live in prompt-templates.md (which already exists). The orchestrator reads the script, then reads and forwards the templates without interpreting them.

**Why this matters:** Every agent assumed the orchestrator is reliable. But the orchestrator is the least-tested component in the entire system. It has never executed the full SKILL.md. If it misinterprets Step 6.3 (routing matrix), the entire downstream flow is wrong. If it skips Step 7.0 (backup before REFINE), there is no recovery from a bad REFINE. The orchestrator is a single point of failure that has been treated as infrastructure.

### 1B. The Question Nobody Asked: What Is the Success Rate?

Twenty agents designed a system. Nobody estimated the probability that a single /build-page invocation produces a shippable page.

Consider the failure chain:
- P(Window 1 produces output.html) = ~95% (LLM task failures, context overflow)
- P(HTML is well-formed) = ~90% (given output exists)
- P(Screenshots capture successfully) = ~85% (Playwright MCP, server startup, port conflicts)
- P(Gate runner executes without error) = ~90% (browser context execution)
- P(At least 3/5 PA auditors produce reports) = ~90% (parallel Task spawning)
- P(Weaver produces synthesis) = ~85%
- P(Routing decision is correct) = ~95%
- P(REFINE builder produces improved output) = ~85% (given REFINE is triggered)
- P(Post-REFINE gates pass) = ~80%

Multiplying these (approximately): **0.95 * 0.90 * 0.85 * 0.90 * 0.90 * 0.85 * 0.95 * 0.85 * 0.80 = ~0.31**

A 31% end-to-end success rate for the full pipeline (DERIVE + BUILD + EVALUATE + REFINE). Even if individual step reliabilities are higher than my estimates, the multiplicative effect of 9 sequential dependencies means the system fails more often than it succeeds.

The failure protocol (SKILL.md lines 886-891) handles individual step failures, but the compound probability was never estimated. Nobody asked: "What is the expected number of retries before a successful /build-page?"

**Why this matters:** The system is designed for a single happy path. If the typical user needs to invoke /build-page 2-3 times to get a shippable result, the effective build time is 2-3x the estimated 20-50 minutes. The system should track and report cumulative reliability metrics.

### 1C. The Artifact Nobody Questioned: The Mechanism Catalog

Every agent treated the mechanism catalog (751 lines) as a given -- a vocabulary file that builders read. Nobody asked whether the mechanism catalog is the RIGHT vocabulary for this process.

The mechanism catalog was built for the OLD pipeline (Pipeline v3.1), where a planner selected mechanisms and a builder implemented them. In that context, the catalog served as a MENU -- the planner browsed it and selected 8-14 items.

In the NEW pipeline (v2), the builder derives their own metaphor and builds from conviction. The mechanism catalog is now a REFERENCE -- the builder reads it after writing their conviction brief. But the catalog is still structured as a menu: 18 entries with descriptions, impact profiles, application modes, and zone mappings.

**The structural mismatch:** A menu encourages selection from fixed options. A reference should enable creative invention. The builder who reads "M-03: Zone-Background Gradient -- progressive darkening or warming across page depth" may use this exact technique. A builder who reads "backgrounds can shift between zones to create a sense of movement through space" might invent a technique that the catalog does not contain.

The mechanism catalog biases builders toward the 18 cataloged techniques. It does not teach the PRINCIPLES behind those techniques (why backgrounds shift, what borders signal, how typography creates rhythm). The builder gets recipes, not cooking theory.

**Why this matters:** After 20 runs, every page will use a subset of the same 18 mechanisms, because that is all the vocabulary provides. The anti-gravity mechanism prevents case study loading, but the mechanism catalog IS a form of case study -- it encodes the creative patterns of previous builds. The process prevents builders from seeing finished pages but gives them the extracted patterns of those pages.

### 1D. The Assumption That Screenshots Are Sufficient

Every agent assumed that an LLM reading PNG screenshots of a web page produces valid perceptual judgments. Nobody questioned whether screenshots are a high-fidelity representation of the page experience.

Screenshots lose:
- **Scroll behavior.** The experience of scrolling THROUGH a page is fundamentally different from viewing a full-page screenshot. A page that creates a sense of "descent" through scrolling becomes a static image where everything is visible at once. The auditor reading scroll-01, scroll-02, scroll-03 in sequence is reconstructing a scroll experience from snapshots, not experiencing the scroll.
- **Hover states.** The page may have subtle hover effects on links, cards, or navigation. Screenshots cannot capture these.
- **Font rendering.** PNG compression, display scaling, and Playwright's rendering engine may produce different font rendering than the user's browser. An auditor judging "typography quality" from a screenshot is judging Playwright's rendering, not Chrome's or Safari's.
- **Responsive transition.** The auditor sees 1440px AND 768px as separate screenshots. They do not see the transition between them. A page that collapses gracefully between 1440 and 768 but breaks at 1024 is not caught.
- **Reading experience.** The most important perceptual quality of a designed page -- whether it feels good to READ on a real screen -- is impossible to assess from screenshots. The auditor cannot adjust the window, cannot lean back in their chair, cannot experience the page at their natural reading distance.

**Why this matters:** The PA is optimized for qualities that are visible in screenshots (color, spacing, typography weight, layout structure) and blind to qualities that require interaction (scroll feel, reading comfort, responsive flow). This creates a systematic bias toward VISUAL composition and away from EXPERIENTIAL composition -- which is ironic, because the entire system is built around "experiential" language.

---

## 2. AFTER 10 RUNS: TEMPORAL DECAY ANALYSIS

### 2A. Metaphor Space Saturation (Runs 1-10)

The original metacognitive analysis (23, Section 3C) predicted metaphor saturation at runs 10-20. I think this is optimistic. The metaphor derivation process asks the builder to find "tension between the content and the design system." The design system's identity is FIXED: warm, sharp, flat, editorial, restrained. The tensions available are:

1. Content that is cold/clinical vs. warm palette → tension of warmth
2. Content that is playful/casual vs. editorial authority → tension of register
3. Content that is technical/dense vs. spatial confidence → tension of density
4. Content that is narrative/flowing vs. sharp boundaries → tension of movement
5. Content that is chaotic/multiple vs. spinal architecture → tension of order
6. Content that is personal/intimate vs. public presentation → tension of exposure

Six tension archetypes. Each maps to ~2-3 metaphor families. By run 6-8, the builder has seen (through the mechanism catalog) the full vocabulary and will unconsciously default to familiar metaphor-mechanism pairings. The anti-gravity mechanism prevents seeing PREVIOUS BUILDS, but it cannot prevent the builder from recognizing that "geological descent" (dark-at-bottom, compression) is a natural fit for the warm palette and border hierarchy.

### 2B. World-Description Staleness (Runs 10-30)

The world-description (17 lines) is a static file. It describes the design system's soul: sharp, flat, warm, editorial. This description does not change between runs. By run 10, the world-description is no longer orienting the builder -- it is background noise.

**More critically:** the world-description encodes aesthetic judgments that age. "Think of a well-edited magazine spread, not a software interface" -- this frames the design system's identity relative to a cultural reference (magazine design) that may shift. The world-description was written in 2026. By 2027, the reference to "well-edited magazine spread" may feel dated if magazine aesthetics evolve.

**What degrades:** The world-description's effectiveness depends on surprise. A builder encountering "Every surface is sharp. Corners are cut, not curved" for the first time feels something. By the 10th encounter, the sentence is a rule, not an experience. The inhabitation-to-creation frame requires genuine inhabitation, which requires novelty. A static world-description cannot sustain novelty across runs.

### 2C. Gate Threshold Recalibration (Runs 20+)

The gate thresholds (15 RGB, 120px stacked gap, 96px single margin, 940-960px container) are calibrated to catch the failure modes observed in the existing N=4 dataset (Gas Town x3, Middle-tier). These thresholds are:

- **GR-11 (bg delta >= 15):** Calibrated from the Flagship failure where backgrounds differed by 1-8 RGB points (imperceptible). 15 is the minimum delta for human perception. This threshold is grounded in perceptual science and should not need recalibration.

- **GR-13/14 (stacked gap <= 120/150px):** Calibrated from the S-09 stacking loophole where 210-276px voids appeared. 120px is approximately 2x the comfortable section spacing. This may need recalibration if content types change -- a research paper with many subsections might naturally want larger inter-section gaps.

- **GR-03 (container 940-960px):** Fixed identity constraint. No recalibration needed.

- **GR-60 (WCAG contrast 4.5:1):** Accessibility standard. No recalibration needed.

**What DOES need recalibration:** The ADVISORY gates (GR-01 line count, GR-02 CSS lines, GR-04 section count) provide informational signals. As builders become more fluent, the typical CSS line count and section count will drift. GR-02's CSS line thresholds (set from current builds) may become outdated. But since advisory gates never block, this is informational drift, not functional degradation.

**The recalibration nobody planned for:** GR-45 (typography variation). This gate checks for "fewer than 3 distinct font-size values." As builders learn the design system, they will naturally use more typographic variation. The 3-distinct-values threshold becomes trivially passable. But the gate's purpose (catching typography monotony) may need a higher bar after 20 runs -- perhaps "fewer than 5 distinct values" or "fewer than 3 distinct font-weight/style combinations."

### 2D. System Convergence Pattern

After 50 runs, I predict the system converges to a narrow band:

- **Pages will have 5-8 zones** (fewer than 5 fails PA for "flatness," more than 8 creates restlessness)
- **Pages will use 10-14 mechanisms** (the "Middle-to-Ceiling" sweet spot that avoids both floor and over-composition)
- **Background palettes will cluster** around 3-4 common progressions within the R>=G>=B space (cream-to-warm-gray, warm-white-to-brown, light-amber-to-dark-amber)
- **Typography will settle on 3-4 recurring patterns** (Instrument Serif display, Inter body with 2 weights, JetBrains Mono for emphasis)
- **The PA will consistently rate pages 2.5-3.5/4** (the convergence zone where the process reliably produces "composed" work but rarely "designed" or "FLAGSHIP" work)

**The convergence is not failure -- it is the system finding its natural register.** But it contradicts the aspiration to produce pages that "feel different from each other." The mechanism catalog, the warm palette constraint, the 3-font system, and the border hierarchy create a strong gravity well. Anti-gravity (no case studies) prevents template calcification but cannot prevent vocabulary calcification.

---

## 3. MODEL DEPENDENCY

### 3A. Opus-Specific Behaviors Embedded in the Prompts

The prompts assume several Opus-specific behaviors:

1. **Sequential compliance.** The Window 1 prompt has a "STOP. Write your conviction brief before reading the vocabulary files below" instruction. This assumes the model will genuinely pause and write the brief before continuing. Opus has demonstrated willingness to follow sequential checkpoints. Sonnet follows them more literally (which is actually better for compliance). A future model update that optimizes for "efficiency" might skip the checkpoint.

2. **Creative conviction.** The receiving principle says "Your perception is the tiebreaker on every creative decision." This assumes the model has genuine aesthetic preferences that can serve as tiebreakers. Opus demonstrates something that looks like aesthetic preference (it consistently makes certain choices). But this behavior may be an artifact of training distribution, not a stable capability. A model update that rebalances training data could change these preferences.

3. **Multi-format output.** The builder must produce 3 files (HTML, brief, reflection) in a single session. This requires the model to maintain multiple output modes (HTML/CSS technical writing, creative prose, reflective analysis) across a long generation. Opus handles this well. A model update that optimizes for single-format consistency might degrade multi-format output.

4. **Context window utilization.** The combined TC+BUILD window pushes ~5,000-7,000 lines into a single agent. The REFINE window may be even larger (original HTML + Weaver + reflection + brief + content + reference files). These context sizes assume Opus's effective attention spans the full window. If a model update changes the effective context window (by changing how attention is distributed across long contexts), builds will degrade in the portions that fall outside the effective window -- typically the BUILD phase, since it comes last.

### 3B. What Breaks When Opus Updates

**Scenario 1: Opus becomes more compliant.** The builder follows conventions more literally. Container is exactly 960px every time. Borders are always exactly 4/3/1. Typography is always exactly Inter/Instrument Serif/JetBrains Mono with exactly the prescribed weights. The output is mechanically correct but creatively dead. The PA catches this ("the page feels like a template") but the REFINE builder, also more compliant, produces a similarly mechanical refinement. The system has no mechanism to inject creative risk when the model defaults to safety.

**Scenario 2: Opus becomes more creative.** The builder pushes boundaries. Container drifts to 1080px ("the content needs room to breathe"). Borders experiment with 5px weights. Typography uses Inter at 700 weight for emphasis. Gates catch these violations and route to PATCH. The patching mechanically corrects the creative deviations. The resulting page is a Frankenstein: creative intent crushed by mechanical correction. The PA sees a page that "feels like it was heading somewhere interesting but got cut short."

**Scenario 3: Opus attention distribution changes.** The model pays more attention to the beginning of its context (where the TC skill and content live) and less attention to the end (where the conventions brief and "NOW BUILD" instruction live). The conviction brief is rich and detailed. The build is generic and under-specified. This is the "rich derivation, rushed build" failure mode that the original metacognitive analysis (23, Section 2A, Effect 2) predicted.

### 3C. The Sonnet Assumption

The system mandates "All agents: Opus" as a non-negotiable. But 5 of the 7 agents spawned during a run are PA auditors and the Weaver -- evaluation agents, not creative agents. The evidence for Opus-only auditors is:

- Gas Town PA used 9 Opus auditors → produced valid reports
- Flagship PA used 9 Opus auditors → produced valid reports
- No one has tested Sonnet auditors

The PA questions ask for perceptual prose ("What do you notice first? Describe it without using any design vocabulary"). Sonnet is capable of perceptual prose. The language constraint (no CSS terms) is a compliance task where Sonnet may actually outperform Opus. The 5-second cold look is a snap judgment that does not require Opus-level reasoning.

**Cost implication:** At current pricing, 5 Opus PA auditors cost approximately 5x what 5 Sonnet auditors would cost. For a process that is designed to run repeatedly, this is a significant operational decision that nobody validated empirically.

---

## 4. CONTENT TYPE BIAS

The original metacognitive analysis (23, Sections 1A, 3B, 4B, 4C) thoroughly identified the content type bias. I will not repeat those findings. Instead, I will stress-test specific content types against the v2 system as built:

### 4A. Technical API Reference

**Input:** A markdown file documenting 15 REST API endpoints with request/response examples.

**What happens:**
1. TC derivation: The builder reads the content and tries to find "tension with the design system." API documentation has no narrative tension. The builder fabricates tension: "the tension between machine precision and human comprehension." This is decorative, not structural.
2. Build: The metaphor produces 5-7 zones (one per API category). Each zone has a different background color. The endpoints within each zone are laid out with the mechanism catalog's techniques. The result looks like a magazine article ABOUT an API, not API documentation.
3. PA: Auditors experience "a page that is visually interesting but I cannot find the information I need." The PA questions do not measure findability or scannability. The page scores 3.0 PA-05 (compositionally competent) despite being functionally hostile.

**Diagnosis:** The system produces API documentation that is beautiful and unusable.

### 4B. Personal Essay (500 words)

**Input:** A short personal reflection, 500 words.

**What happens:**
1. TC derivation: The builder derives a metaphor from a 500-word piece. The TC skill's 4-axis analysis (Register, Argument, Aesthetic, Structural) finds minimal variation in a short essay. The builder either produces a thin conviction brief or over-interprets the content.
2. Build: 500 words maps to 2-3 zones at most. The mechanism catalog's 18 techniques are excessive for 2 zones. The builder uses 4-5 mechanisms. The page has more design infrastructure than content.
3. PA: Auditors see a page that "feels over-designed for its content." The PA questions reward compositional richness, which this page lacks (by necessity, not by failure).

**Diagnosis:** The system over-designs short content.

### 4C. Data Dashboard

**Input:** A markdown file with 3 charts (described as tables), 5 key metrics, and a 200-word summary.

**What happens:**
1. TC derivation: The builder cannot find a metaphor. Data has no tension with the design system -- it needs clarity, not personality. The builder forces a metaphor ("data as landscape -- each metric a mountain peak").
2. Build: The tables become sections with warm backgrounds. The metrics become callout boxes. The charts (rendered as HTML tables) get border treatments. The result looks editorial when it should look analytical.
3. PA: Auditors may like it ("warm, confident, clear") or may find it confusing ("the decorative treatment makes the numbers harder to read").

**Diagnosis:** The system aestheticizes data at the expense of legibility.

### 4D. Long-form Research Paper (8,000 words)

**Input:** A research synthesis with abstract, 5 sections, methodology, findings, and conclusion.

**What happens:**
1. Step 0.2b triggers: "WARNING: Content is 8,000 lines." (Actually 8,000 words is ~2,400 lines, which is under the warning threshold. But a research paper with figures and tables could exceed 5,000 lines.)
2. TC derivation: Rich content provides genuine tension. The builder derives a strong metaphor. The conviction brief is detailed and earned.
3. Build: The builder attempts to build ~10-12 zones for a 5-section paper. Context pressure from the combined reference files (~3,200 lines) + content (~2,400 lines) = ~5,600 lines before building starts. The builder's effective context for the BUILD phase is compressed. Late sections receive less creative attention.
4. PA: Auditors report "the top third feels designed, the bottom third feels like it was generated." This is the attention depletion that the original analysis predicted (23, Section 2A, Effect 1).

**Diagnosis:** The system produces front-loaded designs for long content.

### 4E. Content That Actually Works

The system is optimized for:
- **Essays** (2,000-5,000 words, argumentative, register-shifting) -- exactly Gas Town
- **Analyses** (research syntheses with findings and recommendations)
- **Narratives** (stories with dramatic arcs)
- **Manifestos** (position papers with strong convictions)

These content types have: narrative structure, register variation, argumentative tension, moderate length. They map naturally to the TC derivation process and the mechanism catalog. The system was designed by analyzing Gas Town (an essay). Its sweet spot IS essays.

---

## 5. THE META-QUESTION: IS PLUMBING/FREEDOM THE RIGHT ARCHITECTURE?

### 5A. Why the Architecture Feels Right

The plumbing/freedom split solves a real problem: the old pipeline's 7.9:1 guardrail-to-playbook ratio produced compliant but lifeless pages. The new architecture inverts this -- builders get creative authority, and the system validates afterward. This is genuinely better. The Gas Town REFINE run (+1.5 PA-05) is evidence that the architecture can produce significant quality improvements.

### 5B. Why It Might Be a Local Optimum

The architecture was derived from analyzing the old pipeline's failures:
- Builder got too many constraints → Give builder freedom
- PA contaminated by build context → Isolate PA from context
- Planner separated from builder → Combine TC+BUILD
- Gates and PA cross-contaminated → Separate gates and PA
- One builder got stuck → Use two builders (BUILD + REFINE)

Every design decision is a NEGATION of a previous failure. This is design-by-inversion: take what failed and do the opposite. Design-by-inversion converges on the nearest local optimum -- the closest design that avoids all known failure modes. But it may not find the global optimum, because the global optimum might require design decisions that are not opposites of any previous failure.

### 5C. What a Fundamentally Different Architecture Would Look Like

**Alternative 1: Iterative Refinement Without Evaluation**

Skip the PA entirely. The builder builds, the REFINE builder refines based solely on the original builder's reflection and the content. No screenshots. No auditors. No Weaver. The quality signal comes from the REFINE builder's own aesthetic judgment.

**Argument for:** The PA introduces a 10-20 minute delay and 6 additional agent invocations. If the REFINE builder is Opus (a capable aesthetic agent), it can identify composition weaknesses by reading the HTML and CSS directly. It does not need 5 auditors to tell it "the middle section is flat."

**Argument against:** The Gas Town evidence shows the REFINE builder's +1.5 improvement was partly driven by the Weaver's artistic direction. Without the PA/Weaver, the REFINE builder's improvement might be +0.5 instead of +1.5. But this is untested.

**Alternative 2: Continuous Building with Live Feedback**

Instead of BUILD → EVALUATE → REFINE (3 discrete phases), use a single long-running agent that builds incrementally and checks its own work every ~200 lines of CSS:

```
FOR each section of content:
  Write HTML + CSS for this section
  Take screenshot of current state
  Self-evaluate: "Does this section serve the content? Does it flow from the previous section?"
  IF unsatisfied: revise before proceeding
```

This eliminates the 90-minute build-without-feedback problem. The builder gets continuous feedback. But it requires a single agent with persistent state across the entire build, which the current Task-spawning architecture does not support.

**Alternative 3: Compositional Grammar Instead of Creative Derivation**

Instead of deriving a metaphor and building from conviction, use a formal grammar:

```
Content → Structural Analysis → Zone Map → CSS Rules per Zone → HTML Assembly
```

The grammar would define: "Section with argumentative tone → warm background, heavier borders, serif headings, compressed spacing." The builder applies the grammar rules, producing a page that is compositionally varied because the grammar maps content properties to visual properties.

**Argument for:** Deterministic, fast, consistent. No metaphor derivation ceremony. Content type bias disappears because the grammar has rules for all content types.

**Argument against:** No creative conviction. No inhabitation. The page is CORRECT but not ALIVE. This is exactly the old pipeline's failure mode, just with a better grammar.

### 5D. The Architecture That Nobody Considered: Human-in-the-Loop

The current system assumes fully autonomous execution. The user provides content and receives a finished page. There is no point where the user sees intermediate work and provides direction.

**What about:** After the TC derivation (conviction brief), present the brief to the user. "Here is the metaphor and arc we plan to use. Proceed? Modify? Reject?" This adds 2-3 minutes but eliminates metaphor tyranny entirely. The user can catch "geological descent is wrong for this content" before 90 minutes of building.

The architecture supports this (the conviction brief is a separate file), but the SKILL.md does not implement it. The user's only intervention point is after the page is SHIPPED (Step 9).

---

## 6. UNEXPLORED AVENUES

### 6A. Experiments Nobody Proposed

1. **The Sonnet-vs-Opus Auditor Experiment.** Run the same page through 5 Opus auditors and 5 Sonnet auditors. Compare findings. Measure quality delta. If delta < 10%, switch PA to Sonnet. This is the cheapest experiment with the highest cost-saving potential.

2. **The No-Mechanism-Catalog Experiment.** Give the builder the TC skill, the content, the prohibitions, the tokens, and the components CSS -- but NOT the mechanism catalog. See whether the builder invents techniques that the catalog contains (proving the catalog is redundant) or produces a page with fewer/different techniques (proving the catalog is influential).

3. **The Two-Auditor-vs-Five Experiment.** Run the same page through 2 auditors (standard mode) and 5 auditors (high-stakes mode). Does the Weaver's synthesis from 5 auditors produce meaningfully different creative direction than the orchestrator's routing from 2 auditors?

4. **The No-REFINE Experiment.** Ship the Window 1 output directly. How does it compare to the REFINE output? Is the +1.5 PA-05 improvement consistent across content types, or was Gas Town an outlier?

5. **The Reversed TC+BUILD Experiment.** Give the builder the vocabulary files FIRST, then the content. Does the builder produce a different metaphor when they already know the available tools? Does "build from conviction" produce better results than "build from vocabulary"?

6. **The Content-Type Routing Experiment.** Run the same process on 3 content types: an essay, an API reference, and a data summary. Compare PA scores and functional usability. This would validate or refute the content type bias hypothesis.

### 6B. Directions Not Explored

1. **Multi-page coherence.** The system builds ONE page at a time. What happens when a user needs 10 pages that feel like they belong together? The anti-gravity mechanism prevents the builder from seeing previous pages. There is no mechanism for cross-page consistency beyond the shared design system vocabulary.

2. **Incremental updates.** What happens when the user updates the content markdown after the page is built? The current process rebuilds from scratch. There is no "update this section" capability.

3. **Collaborative building.** What if the builder and REFINE builder were not sequential agents but CONCURRENT agents working on different sections of the same page? The current architecture is serial (BUILD then REFINE). A parallel architecture could be faster and produce more consistent quality across sections.

4. **User taste learning.** After 10 runs, the system knows nothing about the user's preferences. Each run starts fresh. A taste profile ("this user consistently prefers darker palettes, denser spacing, and serif-heavy typography") could tune the builder's prompt without violating anti-gravity.

### 6C. Alternatives Not Considered

1. **Using the browser's actual rendering instead of screenshots.** The MCP Playwright tools include `browser_snapshot` (accessibility tree) and `browser_evaluate` (computed styles). The PA auditors could receive the accessibility snapshot instead of screenshots, giving them structural information (semantic HTML, heading hierarchy, landmark structure) alongside visual impression. This would catch accessibility issues that screenshots miss.

2. **A feedback loop from gates to the builder.** Not gate results as numbers, but gate results translated into perceptual language: "GR-11 found two adjacent areas with nearly identical backgrounds → the builder might want to create more contrast between zones." This preserves the creative frame while providing useful signal.

3. **Deprecating the mechanism catalog in favor of the components CSS.** The components CSS (944 lines) already contains concrete implementations. The mechanism catalog (751 lines) describes abstract concepts. The builder might benefit more from seeing CSS examples than from reading descriptions of techniques they need to invent CSS for.

---

## 7. IMPLICATIONS OF THE 9 UNFIXED ITEMS

### U-1: Missing stale server cleanup before Step 2.1

**Severity:** SIGNIFICANT (originally), now LOW.

**Cascading implications:**
- First run: no impact (port 8888 is free)
- After a crashed run: port 8888 is occupied → server tries 8889 → succeeds
- After TWO crashed runs: ports 8888 and 8889 occupied → tries 8890 → succeeds
- After THREE crashed runs: all three ports occupied → STOP

**Real-world impact:** Moderate. Users who run /build-page repeatedly in a session will accumulate stale servers. The failure is DELAYED (it does not manifest until the 4th crash), making it hard to diagnose. The fix is trivial (one line of bash), but the omission creates a cumulative reliability degradation.

**Production prediction:** After 10 runs with 2-3 crashes, port exhaustion becomes the DOMINANT failure mode. The user sees "ERROR: Port unavailable" and has no idea that stale servers from previous runs are the cause.

### U-2: Missing common background hexes in conventions-brief.md

**Severity:** LOW.

**Cascading implications:** Minimal. Builders receive tokens.css which contains all background values. The conventions-brief is a quick reference, not the primary source. A builder who cannot find the default background color in the conventions-brief will find it in tokens.css (which they read next).

**Production prediction:** No impact. Builders will use tokens.css.

### U-3: No Weaver failure fallback for REFINE builder

**Severity:** MEDIUM, upgrading to HIGH in production.

**Cascading implications:**
- Weaver fails (Task error, timeout, no output) → weaver_available=false
- Routing fallback (keyword scan) determines route → may be REFINE
- REFINE builder's prompt at Step 7.1 reads `{output_dir}/_pa/weaver-synthesis.md` → Read fails
- The REFINE builder's prompt has a gap where the Weaver synthesis should be
- The REFINE builder sees: the page, a Read error, the reflection, the brief, the content, and reference files
- The REFINE builder has NO creative direction from the evaluation → builds from their own impression only
- Result: the REFINE is equivalent to a SECOND Window 1 build with a different agent, not a guided refinement

**Production prediction:** Weaver failure rate is probably 10-15% (network errors, timeouts, malformed output). This means 10-15% of REFINE cycles operate WITHOUT creative direction. The resulting refinements are unpredictable -- sometimes better (the builder's own aesthetic is strong), sometimes worse (the builder changes things the PA liked).

**The cascading effect nobody noticed:** If the orchestrator catches the Read error and continues (rather than stopping), the REFINE prompt is malformed. The builder receives a prompt with a gap. LLMs handle gaps by improvising. The improvisation may produce creative output or may produce a confused agent that does not understand its role.

### U-4: Post-REFINE gate failure has no recovery path

**Severity:** MEDIUM.

**Cascading implications:**
- REFINE completes successfully → output.html is overwritten
- Server re-navigation fails (Playwright crashes, server died, port conflict)
- Gate runner cannot execute → GATES_FAILED is INDETERMINATE
- No regression check is possible
- The pre-REFINE backup exists (output-pre-refine.html) but the skill does not specify what to do

**Production prediction:** This failure mode occurs when Playwright is unstable (browser process crashes between REFINE and post-REFINE). The probability is low (~5%) but the consequence is high: the user receives a page that may have regressed from the pre-REFINE version, with no way to verify.

**The correct fix:** "If post-REFINE gates fail: ship the pre-REFINE version and warn the user." This is safe because the pre-REFINE version passed the initial gate check.

### U-5: Gate runner extraction boundary unclear

**Severity:** MEDIUM, upgrading to HIGH on first actual run.

**Cascading implications:**
- Orchestrator reads gate-runner-v2.js (983 lines)
- Instruction says "Extract everything from `const gateRunnerV2 = async () => {` through the closing `};`"
- The file has multiple functions after the main closure: `extractBVText()`, `checkGR62Screenshot()` (lines 893+)
- An orchestrator that extracts the ENTIRE file passes extra function definitions to browser_evaluate
- Those extra functions reference Node APIs (fs.readFileSync) that do not exist in browser context
- browser_evaluate MAY throw if the extra functions are parsed and reference undefined globals
- OR browser_evaluate may silently define the functions without executing them → no error, but wasted payload

**Production prediction:** This is the most likely first-run failure. The orchestrator's interpretation of "extract the function body" is ambiguous. If it passes the entire file, the behavior depends on whether browser_evaluate's JavaScript parser chokes on `require('fs')` in the utility functions. If it does: the gate runner fails on every run. If it does not: no impact, but 100 lines of unnecessary code are loaded into browser context.

**The correct fix:** The gate-runner-v2.js should contain ONLY the browser-executable function. The BV and GR-62 utility functions should be in a separate file (gate-runner-utils.js) that the orchestrator uses separately.

### U-6: Step 3 header says "22 gates" which is ambiguous

**Severity:** LOW.

**Cascading implications:** Cosmetic. The orchestrator does not make decisions based on the header text. The gate runner runs all gates regardless of what the header says.

**Production prediction:** No functional impact. May cause confusion if a user reads the SKILL.md and counts gates manually.

### U-7: GR-45 in essentialIds routes to unpatchable path

**Severity:** LOW.

**Cascading implications:**
- GR-45 fails (fewer than 3 distinct font-size values)
- essentialIds includes GR-45 → GATES_FAILED = true
- Route becomes PATCH_THEN_REFINE or PATCH_THEN_SHIP
- Deterministic Patch Table has no entry for GR-45 → treated as "STRUCTURAL" → "NOT patchable. Log in _routing-log.md. Route to REFINE."
- This is the CORRECT behavior: typography monotony requires creative intervention

**Production prediction:** No cascading problems. GR-45 failure correctly routes to REFINE, where the REFINE builder (guided by Weaver synthesis, which will note "the page feels monotonous") addresses the typography variation creatively.

### U-8: No gate for transform/transition prohibition

**Severity:** LOW.

**Cascading implications:**
- Builder uses `transform: translateY(-2px)` on hover
- No gate catches this
- PA auditors cannot perceive hover effects in screenshots
- The page ships with a prohibited CSS property that nobody detects
- If the design system evolves to allow transforms, this is a non-issue
- If the prohibition is enforced, the violation persists silently

**Production prediction:** Low impact. Builders are unlikely to use transforms because the conventions brief explicitly prohibits them. If a builder does use transforms, the visual effect is minimal (hover states are not captured in screenshots, and the page functions correctly without them).

### U-9: World-description not sent to REFINE builder

**Severity:** QUESTION → I assess this as INTENTIONAL AND CORRECT.

**Cascading implications:**
- REFINE builder enters the world through: the conviction brief (which contains a WORLD-DESCRIPTION section), the prohibitions, the tokens, and the components CSS
- The REFINE builder does NOT see the world-description.md directly
- The conviction brief's WORLD-DESCRIPTION section is written by the Window 1 builder, who DID read the world-description.md
- Information flow: world-description → Window 1 builder → conviction brief → REFINE builder

This is a one-hop information transfer. The REFINE builder receives the world-description's content MEDIATED by the Window 1 builder's interpretation. This is actually BETTER than sending the raw world-description, because:
1. The Window 1 builder's interpretation is contextualized to the specific content and metaphor
2. The raw world-description is generic; the conviction brief's world-description is specific
3. The REFINE builder should build from the conviction (specific) not from the system (generic)

**Production prediction:** No cascading problems. This is good design.

---

## 8. THE DEEPEST BLIND SPOT: THE SYSTEM CANNOT LEARN

Every run starts from the same artifacts: SKILL.md, gate-runner-v2.js, world-description.md, conventions-brief.md, prompt-templates.md, mechanism-catalog.md, components.css, prohibitions.md, tokens.css. These files are static. Run 100 uses the exact same inputs as run 1.

The system produces rich OUTPUT on every run (conviction briefs, reflections, auditor reports, Weaver syntheses, gate results, routing logs). But none of this output feeds back into the input files. The system generates intelligence and discards it.

A learning system would:
1. **Accumulate taste.** After 10 runs, identify patterns in what the PA consistently praises or criticizes. "Every page with < 6 zones receives 'flat' feedback. Every page with > 10 zones receives 'restless' feedback. Optimal zone count is 6-9." Add this to the conventions brief.
2. **Calibrate gates.** After 20 runs, identify gates that never fail (GR-03 is always passed because every builder uses max-width: 960px). These gates are dead weight. Identify gates that fail 50%+ of the time (GR-11 because builders struggle with R>=G>=B warm palette). These gates need better builder guidance.
3. **Evolve the mechanism catalog.** After 30 runs, identify which mechanisms are used most often, which are never used, and which are invented by builders beyond the catalog. Add frequently invented techniques. Remove never-used techniques.
4. **Improve the world-description.** After 10 runs, the world-description's 17 lines may need updating. "Three typefaces" is correct but "Think of a well-edited magazine spread" may no longer be the best analogy if the system has built 10 pages that look more like architectural portfolios.

The current system's anti-gravity mechanism explicitly PREVENTS learning. Each run is independent. This is valuable for preventing template calcification. But it is costly for preventing system improvement.

**The deepest question:** Can a system learn without calcifying? Can it accumulate craft wisdom while preserving creative freshness? The answer is probably yes -- human designers do this. But the mechanism for LLM-based creative systems is unexplored.

---

## 9. SUMMARY: WHAT THE COLLECTIVE INTELLIGENCE MISSED

| # | Blind Spot | Severity | Why Nobody Caught It |
|---|-----------|----------|---------------------|
| 1 | Orchestrator is an LLM interpreting 906 lines, not a CPU executing code | HIGH | Every agent treated the orchestrator as reliable infrastructure |
| 2 | End-to-end success rate is ~31% due to multiplicative failures | HIGH | Each agent evaluated individual steps, not the pipeline |
| 3 | Mechanism catalog biases builders toward 18 fixed techniques | MEDIUM | The catalog was inherited from v1, never questioned |
| 4 | Screenshots are a lossy representation of page experience | MEDIUM | Screenshot-based PA is normalized across all project history |
| 5 | The system cannot learn from its own output | HIGH | Anti-gravity was treated as purely positive |
| 6 | No human-in-the-loop checkpoint after TC derivation | MEDIUM | Full autonomy was assumed as a design constraint |
| 7 | Weaver failure creates a silent degradation of REFINE quality | MEDIUM | Weaver reliability was assumed without measurement |
| 8 | Content type bias toward essays with narrative structure | MEDIUM | Identified by original metacog but not mitigated in v2 |
| 9 | Model coupling to Opus's specific behavioral patterns | MEDIUM | "All agents: Opus" is a non-negotiable that was never questioned |

**The single most important finding:** The system was designed by agents who all share the same foundational assumption -- that the process, if specified precisely enough, will execute correctly. But the process is executed by an LLM reading instructions, not by a computer running code. The gap between specification and execution is the system's largest unaddressed risk.

---

**END OF WAVE 3 META-COGNITIVE ANALYSIS**
