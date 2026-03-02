# Where the Old Thinking Still Lives — An Archaeology of the SKILL.md

**Auditor:** Task #10 (Opus)
**Date:** 2026-02-28
**Method:** Start from the conversation's core insights, then walk through every element of `~/.claude/skills/build-page/SKILL.md` (956 lines, "v2"), distinguishing what serves creation from what serves compliance.

---

## The Insights That Reframe Everything

Before looking at individual elements, the conversation arrived at principles that change how the SKILL.md reads. Understanding these is what makes the archaeology meaningful:

**Creation over extraction.** When an LLM is asked "what did you learn?" it compresses a processing state into language about that state. When asked "make something from this," it generates from the full processing state. The pipeline's category error was treating understanding as transferable information — bottling the exhaust of a fire and trying to use it as fuel. Creation happens when the builder's full generative capacity is engaged toward a direction, not within a cage.

**Conviction and direction over constraints and rules.** When input is conviction — "this page embodies authority emerging from restraint, density that breathes" — the builder generates CSS that creates that feeling. When input is specification — "container 940-960px, stacked gap <=120px, RGB delta >=15" — the builder generates CSS that satisfies those numbers. Same model, same capability, fundamentally different processing mode.

**Artifact + reflection + creative task = handoff.** Not extracted rules + compliance checklist. The lesson chain said "here's what I built, here's what I discovered in the building, here's what's unresolved." The 6 dimensions: what I built, what I was trying to achieve, what I rejected and why, what surprised me, what I wanted to do but couldn't, what's aesthetically unresolved.

**Raw material over pre-digested summaries.** Generative quality scales with how much raw material is in context, not with how well it's been pre-digested. Labels don't generate anything. The raw material does.

**Philosophy over procedure.** Research framed as "by doing this you achieve this" (philosophy) rather than "you need to do this" (task). The original research was philosophy; the pipeline's conversion of philosophy into rules was the loss.

**TC skill's questioning depth + pipeline's output format.** The TC skill's 14-axis questioning, Opposition Principle, and Addition/BECAUSE tests serve as the engine. The pipeline's world-description, calibration ranges, and creative conditions serve as the transmission. The best of both worlds: the deeper engine driving the better output format.

**The multi-window architecture as envisioned.** Window 1 (TC derivation): TC skill + content + research produces a conviction brief. Window 2 (building): raw explorations + research + conviction brief + creative task produces artifact + 6-dimension reflection. Window 3 (continuation/refinement): previous artifact + reflection + fresh explorations + new framing produces next artifact + reflection.

**Context windows as space for inhabitation.** "It's not 'how do we squeeze it into a pipeline.' It's 'how do we MOVE THROUGH it.'" Each window optimized for what it needs. No extraction machinery consuming space that could hold raw material.

**Plumbing + Freedom.** The orchestrator controls plumbing — file loading, agent spawning, screenshots, routing. Creative freedom lives inside each window. Plumbing never judges quality or interprets creative decisions.

---

## What the Archaeology Reveals

### The Key

Each element gets one of four readings:

- **Serves creation** — Aligned with the plumbing+freedom model, activates generative processing
- **Inherited from pipeline** — Carried from pipeline v3/v3.1 without redesign for the new paradigm
- **Mixed** — Contains both creative and compliance DNA in the same element
- **Depends on framing** — Could serve either mode depending on how the builder encounters it

The weight of each finding reflects how much it shapes the builder's processing mode. Heavy findings actively steer builders toward compliance. Light findings are artifacts of terminology or formatting.

---

## Walking Through the SKILL.md

### The Header (lines 1-11)

The description reads "Three windows: DERIVE+BUILD, EVALUATE, REFINE." This describes the pipeline v3 architecture. The conversation envisioned something different: Window 1 for TC derivation, Window 2 for building with raw explorations, Window 3 for continuation. The current architecture combined TC and building, then gave evaluation its own window — a window that doesn't appear in the conversation's design at all.

The header also says "Orchestrator controls plumbing" and "Creative freedom lives inside each window." These capture the core insight precisely. The plumbing/freedom distinction is the conversation's most durable architectural contribution.

**The first tension lives right here:** the description of WHAT the windows are contradicts the conversation's design, while the description of HOW the windows work embodies it perfectly. The philosophy arrived; the architecture didn't follow.

---

### Step 0: Input Parsing (lines 19-44)

Input parsing, output directory creation, content suitability guidance. Pure plumbing, and good plumbing at that. This is exactly what the orchestrator should do — handle logistics so creative agents never think about file paths.

Nothing to change here.

---

### Step 1: Window 1 — DERIVE + BUILD (lines 47-198)

This is where the deepest archaeological layers are visible.

**What the builder reads first** (lines 49-61):

The builder loads seven files. Some are creative fuel, some are compressed extraction:

`[A] world-description.md` — This IS conviction. It describes the design system as a world to inhabit, not a ruleset to follow. Exactly what the conversation wanted.

`[B] TC_SKILL` (the full tension-composition skill) — Here the architecture diverges from the conversation's design. The conversation concluded that TC derivation belongs in its own window, producing a conviction brief that then travels to the builder. Currently, the full TC skill loads into the building window alongside the build task. The ~841 lines of TC methodology consume context space that could hold raw explorations. The counter-argument from build evidence: the combined approach produced PA-05 3.5/4, and the TC comparator found that creative continuity between derivation and building strengthened the brief's best sections.

`[C] RAW_CONTENT` — The content being built. The most important input, and properly placed.

`[D] prohibitions.md` — Identity/physics. The conversation affirmed that physics and identity stay rigid. The file is framed as "the world's physics" (line 115), which is the right framing — these aren't arbitrary constraints but the way this design system's universe works. Corners don't curve. Gradients don't exist. This framing makes the difference between a prohibition that constrains and a physical law that grounds.

`[E] tokens.css` — Vocabulary. Placed after a "STOP. Write your conviction brief before reading" checkpoint (line 109), which is exactly right — conviction before vocabulary. The ordering embodies the insight that conviction activates generative processing while vocabulary provides the material palette.

`[F] mechanism-catalog.md` — This is where extraction lives. The mechanism catalog is a compressed derivative of what was learned from dozens of explorations. The conversation identified this exact pattern as the category error: compressing processing into information and handing the information to someone who needs the processing. The catalog tells the builder WHAT mechanisms exist; reading actual explorations would show the builder HOW mechanisms feel when they work. These are different kinds of knowledge.

And yet the file characterizer rated it 5/5 for builder value — it's the richest creative vocabulary file, and the Middle vs. Ceiling distinction it contains is genuinely creative knowledge. The catalog is both a compressed extraction AND a valuable tool. These facts coexist.

`[G] components.css` — A CSS library is a tool, not an extraction. Its utility depends on whether builders treat it as a starting point for creation or a constraint on what's possible.

**What's absent:** No raw HTML explorations (DD/OD/AD/CD files). No research files (R1-R5). The conversation said "Load the context with as many raw HTML explorations as will fit... Let's try to load up as much as that as we can." The builder sees only compressed derivatives of the creative material that the conversation identified as the most valuable context for building. Whether loading raw explorations would actually produce better output is unknown — it has never been tested. But the absence is deliberate in the current design and accidental relative to the conversation's design.

**The builder's prompt** (lines 63-172):

Much of this is beautifully aligned with the conversation's insights:

- "Read the content as a reader first. What excites you?" — Conviction-first.
- "Derive your metaphor from the content's tension with the design system. The metaphor is yours." — Creative ownership.
- "Write your conviction brief — this is your creative commitment." — The brief as generative act.
- "Build from your conviction. Your perception is the tiebreaker." — The builder's creative judgment takes precedence.
- "Name CSS classes from your metaphor." — Metaphor-driven naming, not generic component naming.

Then the CONVENTIONS block (lines 136-148) arrives: 13 mechanical constraints as a flat list. "Container: 940-960px, Fonts: Inter..., Borders: 1px..." The block says "absorb these, do not checklist them," which is the right framing. But the content itself mixes two fundamentally different kinds of information:

**Physics** — Container width (940-960px), warm palette (R>=G>=B), font trinity, no decorative borders. These describe how this universe works. They ground creation without constraining it.

**Pipeline-derived thresholds** — 120px stacked gap, 96px single margin, 45-80 CPL, >=15 RGB background delta. These numbers were derived from gate-runner analysis during pipeline v3 development. They encode genuine perceptual insights (backgrounds below 15 RGB difference are imperceptible; whitespace voids above 120px were the #1 audit finding across multiple builds). But presenting them as flat constraints alongside physics invites compliance rather than understanding. The builder who understands WHY density matters creates meaningful spacing. The builder who reads "<=120px" creates spacing that satisfies the number.

The reflection template produces 3 dimensions (CONVICTION, ALTERNATIVES, UNRESOLVED). The conversation identified 6 as the full handoff tissue. Missing: what surprised me, what I rejected and why (different from alternatives considered), what I wanted to do but couldn't. Evidence from the actual build shows the current 3 dimensions already capture 5 of 6 implicitly — the REFINE builder understood the first builder's creative intent from the existing reflection. D4 (surprises/discoveries) is the one consistently thin.

---

### Step 2: Screenshots (lines 201-244)

Server startup, screenshot capture at multiple viewports, validation that screenshots exist and render properly. Exemplary plumbing. The orchestrator handles everything mechanical so creative agents never deal with infrastructure.

Nothing to change here.

---

### Step 3: Gate Runner (lines 248-321)

Gates embody a tension the conversation surfaced but never fully resolved. Gates are navigation rails when they catch genuine physics violations — the page can't have a 1200px container because that's not how this universe works. Gates become compression when they enforce pipeline-derived thresholds or judge creative decisions — the page can't have a 130px gap because an analysis said so.

The current SKILL.md has 14 gates classified as essential. Walking through them reveals the mixture:

**Gates that enforce physics (the world's rules):**
- GR-03 (container 940-960px) — The page has a spine. This IS the design system.
- GR-05 (R>=G>=B warm order) — Warmth is baked into the math. Identity.
- GR-06 (font trinity) — Three typefaces. No more. Identity.
- GR-08 (no decorative border-radius, box-shadow, gradients) — Corners are cut, not curved. Identity.
- GR-60 (WCAG contrast) — Accessibility is universal physics, not pipeline-specific.

**Gates that enforce pipeline-derived thresholds:**
- GR-10 (section presence >= 3) — This assumes a particular page architecture. A builder working from conviction might create 2 deeply developed sections or 7 brief ones. The number 3 encodes an assumption about what pages look like, not about what makes pages good.
- GR-13 (stacked gap <= 120px) — 120px came from gate-runner analysis. It encodes a real perceptual insight: large whitespace voids were the #1 audit finding. But a builder creating a dramatic 200px void for compositional purposes — a breath between major movements — would fail this gate for a creative decision.
- GR-14 (stacked gap visual <= 150px) — Same origin as GR-13.
- GR-15 (single margin <= 96px) — Same category. Pipeline number elevated to enforcement.
- GR-67 (footer text size) — Specific font size for a specific element. Styling constraint, not physics.

**Gates in between:**
- GR-09 (border hierarchy 1px/3px/4px) — The system IS identity, but a builder might use 2px intentionally for reasons the gate can't evaluate.
- GR-11 (background delta >= 15 RGB) — 15 RGB IS rooted in perceptual science (below 15, differences are imperceptible to most viewers). But the gate enforces a specific number that emerged from analysis, not from the world description.
- GR-18 (ghost mechanisms) — Detecting sub-perceptual CSS is useful diagnostics. Whether it belongs as an essential gate is debatable.
- GR-44 (trailing void) — Detecting excessive trailing whitespace is reasonable UX concern. The threshold is pipeline-derived.

Of the 14 essential gates, roughly 5 enforce genuine physics, 5 enforce pipeline-derived thresholds, and 4 sit in between. This means nearly half the essential gates shape the builder's output around numbers from analysis rather than principles from the world's identity.

The 9 advisory gates (which inform but don't block) have the right relationship to creative decisions — they provide data without overriding judgment. If the pipeline-derived gates were moved to advisory status, the gate architecture would align more cleanly with the conversation's insight: plumbing enforces physics, creative judgment handles everything else.

---

### Step 4: PA Auditors (lines 324-482)

The PA system is the element most aligned with the conversation's insights. Its 20 questions ask about experience, not compliance:

"What do you notice first?" "Where did you slow down?" "Does it feel like a pause or like the other person stopped talking?"

These are questions about perception — they ask the auditor to report what they experience, not what they measure. The perceptual language constraint (no CSS terms) prevents auditors from collapsing experience into specification. The cold-look experiential pass (scroll through, report immediate impressions before any structured evaluation) captures first-contact perception.

The user explicitly valued PA and refinement: "something I like that we recently added." The open question — "what does PA look like when we're not extracting rules?" — was asked but not answered in the conversation. The current PA already operates more in the creation paradigm than the extraction paradigm. Its output feeds the Weaver, who transforms perceptual data into creative direction. The PA-to-Weaver pipeline is conviction-native.

One note: the 20 PA questions consume ~130 lines of the SKILL.md. Since auditors run in separate agents, this is skill-file organization, not context pressure on the builder.

---

### Step 5: Weaver (lines 486-582)

The Weaver is one of the most conviction-aligned elements in the entire system. Its prompt says "Write creative direction FOR a creator, not corrections FOR a manager." Its output territories — AMPLIFY (what's working, do more), RELEASE (what's constrained, let it breathe), DEEPEN (what's surface-level, find its depth) — are forms of creative direction, not fix lists.

Reading the actual Weaver synthesis from the Gas Town build: "This page's personality is a frontier garrison commander who knows exactly how to brief the first three rooms of the tour but then walks the visitor through the remaining seven rooms with the lights off." This is brilliant creative direction that a REFINE builder can act on because it speaks in the same register as the builder's own creative thinking.

The one place where the Weaver's alignment wavers: its SHIP/REFINE/RETHINK verdict becomes a binary routing input in Step 6. The Weaver's creative judgment — nuanced, contextual, full of "yes, and" — gets reduced to one of three keywords for the routing matrix. The Weaver does sophisticated work; the routing consumes it simply.

---

### Step 6: Routing Decision (lines 586-678)

This is where the conversation's insights and the pipeline's machinery most directly collide.

The "ZERO INTERPRETATION" header embodies the plumbing principle — the orchestrator doesn't judge quality. But the routing matrix IS a judgment framework inherited from the pipeline. It treats the Weaver's creative verdict and the gate results as independent variables in a 2x2 matrix, producing deterministic routing. This is appropriate when gates enforce physics. It becomes problematic when gates enforce pipeline-derived thresholds, because a creative decision that violates a threshold gets the same routing as a physics violation.

The keyword-scan fallback (lines 607-620) is the clearest pipeline remnant in the entire SKILL.md. It reduces the Weaver's rich creative synthesis to word-matching: "flat", "monotonous", "tired" = REFINE; "ready", "polished" = SHIP. This is extraction at its most literal — taking a nuanced creative assessment and compressing it into labels. If the Weaver is unavailable, a simpler default (route to REFINE) would be more honest than pretending keyword matching captures creative judgment.

The mechanical patching table (lines 644-658) patches gate failures directly in the HTML. Some patches are legitimate physics repairs — if the container is wrong, fix it; if colors violate warm palette, correct them. Others patch pipeline-derived thresholds: "reduce stacked gap to <= 120px," "replace margin with 96px." These patches override the builder's creative spacing decisions with numbers from analysis. A builder who deliberately chose 130px of breathing room between major sections sees that creative decision mechanically overwritten by a number that has no relationship to the content's needs.

The RETHINK protocol bans the previous metaphor: "Do NOT derive a metaphor related to: {metaphor}." This is creative direction in that it forces new territory. But the mechanism — copy, modify prompt, re-run from Step 1 — is pipeline routing. The conversation's paradigm would ask: what was the builder reaching for, and how can the next attempt reach further? RETHINK-as-ban is different from RETHINK-as-evolution.

---

### Step 7: REFINE Window (lines 682-869)

The REFINE prompt's receiving principle is beautiful: "Your job is not to fix problems. Your job is to make the page more of what it already is." This is pure conviction. The creative commitment requirement — "What is the ONE THING this page needs?" — focuses creative energy.

But the REFINE builder loads the same compressed derivatives as the initial builder: mechanism-catalog, components.css, prohibitions, tokens. Plus the CONVENTIONS block is copy-pasted identically. The REFINE builder already has the artifact — which embodies all the decisions those files informed. Reloading them invites the REFINE builder to verify compliance with the source files rather than deepen the artifact's own creative identity.

The REFINE builder that produced PA-05 3.5/4 had all these files. Whether removing them would improve, maintain, or degrade quality is unknown. The evidence says they coexist with excellent creative output. The conversation's insight says they activate compliance processing that competes with creative processing. Both may be true — the REFINE builder may achieve 3.5/4 DESPITE the compliance activation, not because of it. Or the compliance activation may provide useful grounding that enables rather than constrains. Without a controlled experiment, this is ideology vs. evidence with no resolution.

---

### Steps 8-9: Post-REFINE and Second REFINE (lines 873-920)

Re-running screenshots and gates after REFINE is pure plumbing — catch regressions. The nuance: the regression check compares essential gate failure counts, which means a REFINE builder who deliberately increased a gap from 110px to 130px (for compositional reasons) would register a "regression" on GR-13. The gate can't distinguish creative evolution from quality degradation.

Step 9 (second REFINE by user request only) is appropriate user authority. Maximum 2 REFINE cycles is practical plumbing.

---

### The Non-Negotiables (lines 945-955)

Nine things declared non-negotiable. Their alignment varies:

1. **Container: 940-960px** — Physics. The page has a spine.
2. **Warm palette: R >= G >= B** — Physics. Warmth is identity.
3. **"Perceptible CSS: >= 15 RGB bg delta, <= 120px stacked gap, <= 96px single margin"** — These three numbers are pipeline-derived thresholds elevated to the same status as the warm palette and container width. But they are fundamentally different things. The warm palette IS the world's identity. 96px is an analysis artifact that encodes a real perceptual insight (large single margins create visual disconnection) in a format (a number) that strips the insight of its reasoning. A builder who understands that spacing creates or destroys visual connection makes better spacing decisions than a builder who knows the number 96. Placing these alongside genuine physics conflates two different categories of knowledge.
4. **All agents: Opus** — Operational. The model matters for quality.
5. **PA auditors: fresh-eyes, zero build context** — Methodology. Fresh perception is valuable because it avoids the builder's confirmation bias.
6. **DERIVE+BUILD in one window** — This directly contradicts the conversation's architecture, which placed TC derivation in its own window. The combined approach works (3.5/4). Whether separation would work better is untested.
7. **Different builder for REFINE** — Methodology. Defeats continuation bias — a different instance processes the artifact fresh.
8. **Gates and PA never cross-contaminate** — Separation of concerns. Programmatic checks and perceptual evaluation serve different functions.
9. **Structural validation only** — Plumbing principle. The orchestrator checks "did you produce the thing," never "is the thing good."

---

### What's Referenced and What's Missing

Every external file path tells a story about what the builder encounters:

- `world-description.md` — Conviction. Correctly framed.
- `gate-runner-v2.js` — Built for the new paradigm but embeds old thresholds.
- `prohibitions.md` — Identity/physics. Correctly framed.
- `tokens.css` — Vocabulary tool.
- `mechanism-catalog.md` — Compressed extraction of exploration learnings.
- `components.css` — CSS library tool.
- `TC SKILL.md` — Loaded in the builder window instead of a separate TC window.

No paths point to raw explorations (DD/OD/AD/CD HTML files) or research files (R1-R5). The SKILL.md contains zero references to the corpus of creative material that the conversation identified as the most valuable context for building.

---

## The Pattern Underneath

All of these individual observations are expressions of one structural reality:

**The SKILL.md was built by evolving the pipeline rather than building from the conversation's insights.**

The conversation envisioned:
- Window 1: TC skill derives conviction from content, producing a brief
- Window 2: Builder reads raw explorations + research + brief, creating artifact + 6-dimension reflection
- Window 3: New builder reads artifact + reflection + fresh direction, deepening the work

The SKILL.md implements:
- Window 1: Builder reads compressed derivatives (mechanism catalog, components, tokens) + TC skill, deriving AND building in the same window
- Window 2: Evaluators screenshot + 5 PA auditors + Weaver synthesize, producing a verdict
- Window 3: Refiner reads artifact + weaver + compressed derivatives AGAIN, refining

In the conversation's design, explorations and research ARE the context. Compressed derivatives don't exist. In the current implementation, compressed derivatives ARE the context. Explorations don't exist.

The difference is profound, but its practical significance is uncertain. The implementation that diverges from the conversation's design produces PA-05 3.5/4 — CEILING quality, the best result in the project's history. The conversation's design, which calls for raw explorations and separate TC windows, has never been tested.

This creates a genuine tension that honesty demands acknowledging: **the philosophy is elegant and the evidence is for something else.** The SKILL.md talks about creative freedom while loading compressed derivatives and enforcing pipeline thresholds. It does both. And it works.

---

## What This Archaeology Suggests

### What clearly serves creation
1. Step 0 (input parsing, directory creation) — pure plumbing
2. Step 2 (screenshots) — pure plumbing
3. World-description.md as creative framing
4. PA auditor system with fresh-eyes and perceptual language
5. Weaver as creative synthesizer
6. "Your perception is the tiebreaker"
7. "Write conviction brief BEFORE reading vocabulary" ordering
8. REFINE prompt receiving principle and creative commitment
9. Different builder for REFINE (defeats continuation bias)
10. Non-negotiables 1, 2, 4, 5, 7, 8, 9

### What would better serve creation with redesign
1. Window architecture: give TC derivation its own window, freeing the builder's context for raw material
2. Builder context: load raw explorations + research alongside (not instead of) the mechanism catalog and components
3. Reflection template: expand from 3 to 6 explicit dimensions (D4/surprises is the gap)
4. Conventions block: distinguish physics (container, warm palette, font trinity, no decorative) from perceptual insights (120px, 96px, 45-80 CPL) — frame the insights as understanding, not thresholds
5. Gate classification: physics-only as essential; perceptual insights as advisory
6. Mechanical patching: only for physics violations; creative spacing decisions belong to the builder
7. Routing: simplify — physics pass + Weaver says REFINE = route to REFINE; physics fail = patch physics only, then route
8. REFINE builder context: remove repeated vocabulary files; let the artifact carry what it embodies
9. Non-negotiable #3: reframe from numbers to the perceptual insight they encode
10. Non-negotiable #6: revisit whether combined or separated TC+BUILD serves creation better

### What the evidence suggests removing
1. Keyword-scan fallback — replace with "if Weaver unavailable, default to REFINE"
2. Pipeline-derived gates as essential (GR-10 section count, GR-13/14 stacked gap, GR-15 single margin, GR-67 footer size)
3. Pipeline-number patches in the mechanical patching table
4. Duplicate conventions block in REFINE prompt
5. "Boundary-by-boundary" building instruction (pipeline methodology language)

### The deeper observation

The SKILL.md is a remarkably well-crafted document that already contains the seeds of the conversation's insights. The receiving principles, creative commitment, "your perception is the tiebreaker," the Weaver's creative territories, the world-description — these genuinely embody conviction-over-compliance thinking.

The inherited pipeline elements aren't wrong in the sense of producing bad output. They're inherited in the sense of coming from a different paradigm — one that understood quality as compliance with derived thresholds rather than expression of creative conviction. The SKILL.md lives in both paradigms simultaneously, and it works. The question isn't whether to purge one paradigm but whether the creative paradigm would produce even better results if the compliance elements weren't competing for the builder's attention and context space.

The architecture contradicts the philosophy. But the architecture produces results. The fix, if there is one, isn't to choose between them — it's to test whether the philosophy's architecture produces better results than the current hybrid. Until that experiment runs, the archaeology reveals what IS, not what SHOULD BE.
