# Adversarial Review: TC Skill Update Assumptions

**Agent:** adversarial-reviewer (Task #15)
**Date:** 2026-03-01
**Method:** Read the full TC skill (842 lines) and all 5 completed team reports. Challenge each assumption on its merits. Find blind spots.

---

## Preamble: My Role

I am not here to be agreeable. The team has produced thoughtful, well-reasoned analysis. But thoughtful analysis can still be wrong, and well-reasoned conclusions can rest on unexamined premises. My job is to find where things break.

I will assign each assumption a verdict: **CORRECT**, **PARTIALLY CORRECT**, **WRONG**, or **UNDERDETERMINED** (not enough evidence to judge).

---

## Challenge 1: "Domain metaphors are limiting"

**Team's Position:** Domain metaphors channel creativity toward a pre-approved list of 10 nouns. The search query ("What real-world domain...") forces the answer into a domain shape. Broadening to "compositional ideas" opens the creative space.

**Counter-Argument:**

Domain metaphors are the HIGHEST-VALUE compositional tool in the entire skill, and the team is proposing to dilute them. Here is why:

1. **Domains have physics.** "Geological strata" gives you: layers = background zones, pressure = spacing compression, depth = darkening backgrounds, sediment = border weights, erosion = transition styles, fossils = embedded elements, fault lines = structural breaks, temperature gradients = color temperature shifts. That is 8 independent CSS decisions that are INTERNALLY CONSISTENT because they come from the same physical system. The physics do compositional work for free.

2. **Non-domain ideas lack physics.** "This page accelerates" gives you: spacing compression, typography tightening, increasing density. That is 3 decisions, and they are not internally constrained -- there is nothing about "acceleration" that tells you whether backgrounds should darken or lighten, whether borders should thicken or thin. The builder must INVENT the physics, which means every additional decision is an unforced choice rather than a constrained derivation.

3. **The isomorphism table is the proof.** Report 04 (Phase 3 Broadening) acknowledges this directly: domain metaphors produce 6-10 mappings, non-domain ideas produce 3-6. The report proposes lowering the threshold from 6+ to 5+. But this is accommodating weakness, not finding strength. Lowering the bar for non-domain ideas means accepting compositions with LESS internal coherence.

4. **The data we have supports domains.** CD-006 (CEILING tier, 80/91 richness) used geological strata. The Gas Town page (SHIP verdict) used a domain metaphor. The middle-tier experiment used domain metaphors. Every successful build in this project's history used a domain metaphor. We have ZERO successful builds using a non-domain compositional idea.

**However:**

5. The team IS correct that the 10-domain list is channeling. Geological and Architectural appear to get selected disproportionately because they are the first two listed. An LLM scanning a list will weight earlier items. The list should either be removed (relying on the search query to generate candidates) or shuffled/expanded.

6. The team IS correct that "incompatible domain families" may be overcautious. Musical metaphors were declared incompatible because music "requires curves (sound waves, notation)" -- but a musical SCORE is highly angular (staves, bars, notes on a grid). The incompatibility was judged at the wrong level of abstraction.

**Verdict: PARTIALLY CORRECT.** The domain-as-noun forcing is real and the 10-domain list channels. But the proposal to broaden to "compositional ideas" sacrifices the single highest-value property of the current system (physics-based internal consistency) for speculative gains from untested alternatives. The FIX should be: keep domains as the PRIMARY path, remove the explicit list, remove the incompatibility list, and allow non-domain ideas as a SECONDARY path with a HIGHER structural mapping threshold (not lower). If your non-domain idea cannot produce 6+ CSS channel decisions, it is not rich enough to replace a domain metaphor.

---

## Challenge 2: "The conviction brief is compression"

**Team's Position:** The conviction brief exists to transmit understanding across agent boundaries. In a single-agent model, the brief is unnecessary because the same agent that derives the composition also builds it.

**Counter-Argument:**

1. **Writing is thinking.** The conviction brief is not a memo to another agent. It is a forcing function for CLARITY. When you must write down "the dominant opposition is warmth vs. austerity, and it lives in the opening zone," you must DECIDE what the dominant opposition is. Without the writing requirement, the agent can hold a vague sense of the composition without ever crystallizing it.

2. **The brief disciplines the transition from analysis to execution.** There is a well-known failure mode in creative work where deep analysis produces rich understanding but the execution ignores it. The brief is a GATE between thinking and building. It forces the agent to articulate its compositional intent BEFORE touching CSS. Without it, the agent might jump from "I understand the content" to "let me start writing HTML" without the intermediate step of "here is my compositional plan."

3. **The brief has a specific structure that generates quality.** The 6 sections (World-Description, Calibration, Opposition Map, Compositional Arc, Creative Conditions, Content Map) are not arbitrary. They force the agent to think about the composition from 6 different angles. Removing the brief does not just remove a document -- it removes the multi-perspective planning discipline.

**However:**

4. The brief IS compression in one specific way: the Calibration section specifies exact hex values and padding ranges that represent pre-computed solutions. A single agent deriving its own composition does not need someone else's hex values -- it should derive its own from the metaphor's implications. This section is genuinely transmission-oriented.

5. The Content Map section is also compression -- it re-describes the content in a compressed form for an agent that has not read it. A single agent that already read the content does not need a summary of what it already knows.

**Verdict: PARTIALLY CORRECT, BUT THE BABY IS IN THE BATHWATER.** The brief contains genuine compression (Calibration values, Content Map summaries) that can be removed. But the STRUCTURE of the brief -- the requirement to articulate World-Description, Opposition Map, Compositional Arc, and Creative Conditions -- is a thinking discipline, not a transmission artifact. The fix should be: keep the structured articulation requirement as an internal planning step, remove the sections that only exist for cross-agent transmission.

---

## Challenge 3: "One agent can do TC + building"

**Team's Position:** The multi-agent split was a pipeline assumption. A single agent can hold both the compositional thinking and the CSS execution.

**Counter-Argument:**

1. **Context window is finite.** The TC skill alone is 842 lines. The mechanism catalog it references is another large file. The design system files are ~950 lines. The content being composed is variable but often 1,000+ lines. The CSS output for a rich page is 800-1,500 lines. The HTML output is 1,500-2,500 lines. Add the conviction brief (~100 lines), the reflection (~30 lines), and operational overhead. We are looking at 5,000-7,000 lines of active context for a SINGLE agent doing everything.

2. **Compositional thinking and CSS writing are different cognitive modes.** TC's multi-axis questioning requires EXPANSIVE thinking -- holding multiple perspectives simultaneously, exploring tensions, considering metaphor candidates. CSS writing requires PRECISE thinking -- exact values, specific selectors, correct cascading order. Asking one agent to switch between these modes is possible but risks both modes being done at a shallower level.

3. **The two-instance pattern is a feature, not a bug.** This project's own research (MEMORY.md) found: "Two-Instance pattern exploits fundamental LLM property: continuation bias prevents self-revision." A single agent that derives a metaphor and then builds it will be continuation-biased toward its own derivation. A separate builder can approach the metaphor with fresh eyes, potentially finding better CSS expressions than the derivation agent imagined.

**However:**

4. The pipeline's ACTUAL failure was not in the split itself but in the TRANSMISSION between agents. The "75-line builder visibility cap = 13.4% prompt visibility" finding shows the builder received a fraction of the TC thinking. A single agent has 100% visibility into its own thinking by definition.

5. The IMPROVE builder pattern already validates single-agent composition to some degree: the IMPROVE builder reads the conviction brief AND the prior artifact AND the reflection, and composes a richer version. It is simultaneously analytical and creative.

6. Context window size continues to grow. What was impractical at 100K context may be practical at 200K or 500K.

**Verdict: UNDERDETERMINED.** This is the assumption with the least evidence for or against. The argument for merging is philosophical (compression loss, continuation bias). The argument against is practical (context limits, mode-switching cost). The ONLY way to settle this is to RUN THE EXPERIMENT: have a single agent do TC + building on the same content that the pipeline has already built, and compare the results. Until that experiment exists, this is speculation dressed as analysis.

---

## Challenge 4: "Dynamic Side B is better than static"

**Team's Position:** The static Side B (35 lines summarizing the design system) is a 27:1 compression that loses nuance. The agent should read the actual files (~950 lines) and form its own understanding.

**Counter-Argument:**

1. **The static summary represents ACCUMULATED WISDOM.** Report 03 (Dynamic vs Static) notes that the personality spectrum was "written at a specific point in time by a specific person." Yes -- by a person who had run 50+ experiments, read all the design system files multiple times, and distilled the understanding through repeated testing. The spectrum is not a casual summary; it is REFINED knowledge. A fresh agent reading the same files cold will not discover "75% austere" (or any equivalent insight) in a single reading.

2. **Fresh reading can be SHALLOWER, not deeper.** The report assumes that dynamic reading produces a richer understanding because the agent engages with the full material. But LLMs scanning 950 lines often extract surface features (sharp corners, warm palette, three fonts) and miss deeper patterns (the density rhythm vocabulary, the generative nature of constraints, the system's internal warmth-austerity tension). The static summary, precisely because it is curated, GUARANTEES that the deeper patterns are seen.

3. **Inconsistency across invocations is a real cost.** The report frames inconsistency as a feature ("different agents SHOULD read the system differently -- that is the point"). But this means two pages built for the SAME site on the SAME day might interpret the design system differently, producing visual inconsistency. A portfolio of pages should feel like they belong to the same world. Variable Side B interpretation risks each page feeling like it came from a different design system.

**However:**

4. The report's strongest point stands: the static Side B PREVENTS content-sensitive reading. An agent that has just derived "the reader needs warmth and progressive trust" would notice different things about the design system than one that derived "the reader needs rapid-fire comparison." The static summary presents the system identically regardless of content, which is exactly the kind of one-size-fits-all thinking the skill is supposed to overcome.

5. Report 03 identifies genuine omissions in the static summary: Prohibition #18 (Same-Density Stacking), Prohibition #21 (Full Viewport Contentless Space), Prohibition #22 (Visual Interest Concentration) are all absent. These are directly relevant to composition and their absence from Side B means they are invisible during tension derivation.

6. The Approach C (hybrid) proposal is elegant: teach the agent HOW to read a design system, not WHAT this system is. The "System Reading Protocol" approach preserves the depth guarantee while enabling content-sensitive reading.

**Verdict: PARTIALLY CORRECT.** Dynamic reading IS better than static summary for content-sensitive engagement. But the team underestimates the value of curated wisdom and the risk of shallow engagement. The fix should be Approach C (hybrid) WITH a safety net: teach the reading protocol, AND provide the static summary as a VALIDATION ARTIFACT (not the primary source). After the agent derives its own Side B, it cross-checks against the static summary. Significant divergences trigger investigation, not blind acceptance of either version.

---

## Challenge 5: "Linear decomposition is bad"

**Team's Position:** Phase 4's linear metaphor-to-CSS decomposition prevents emergent composition. Non-linear composition where choices feed back across scales and boundaries is inherently superior.

**Counter-Argument:**

1. **Every creative process has structure.** Jazz follows chord progressions. Poetry follows meter. Architecture follows load-bearing requirements. The TC pipeline's linearity ensures the compositional idea ACTUALLY TRANSLATES to implementable CSS. It is easy to have a beautiful compositional vision that does not survive contact with the medium.

2. **Non-linear composition sounds beautiful but may produce incoherence.** "A choice at section 3 changes what happens in section 1" is elegant in theory. In practice, for an LLM building HTML sequentially (which is what actually happens -- you write HTML from top to bottom), going back to revise section 1 based on section 3 means re-editing previously written code, which introduces regression risk. The linear model produces a draft that is internally consistent; the non-linear model produces a draft that is potentially more creative but potentially self-contradictory.

3. **Report 05's own analysis proves the value of linearity.** It identifies that the UNIVERSAL principles from Phase 4 -- build boundary-by-boundary, RICHNESS equation, adapt before inventing, pacing assessment -- are all PROCESS-LINEAR. They guide the builder through a SEQUENCE of considerations at each transition point. The proposed "generative questions" for non-linear composition are also sequential -- "What does this choice SUGGEST about adjacent elements? Follow the suggestion." The non-linear model is still linear in execution; it just has shorter feedback loops.

4. **The top-down build order is justified.** Navigation -> Page -> Section -> Component -> Character ensures that macro structure is established before micro texture. Building bottom-up risks elaborate component-level details that do not serve the page-level composition. "3 strong beats 5 weak" is genuinely good creative advice.

**However:**

5. Report 05 is correct that the COHERENCE model is too restrictive. The requirement that "ALL channels must reinforce the same metaphor direction at each boundary" excludes contrary motion, which is a legitimate compositional technique (backgrounds darkening while typography lightens at the same boundary). The transition table's "Direction" column should allow "DIVERGENT" as a valid option with the constraint that divergence must be intentional and perceptible.

6. The fractal self-similarity assumption IS too strong. Not all compositions are self-similar. A composition could have different organizing principles at different scales (macro = linear narrative, micro = rhythmic repetition). "Multi-scale presence" is the right requirement; "self-similarity at all scales" is not.

**Verdict: PARTIALLY CORRECT.** The linearity criticism is OVERSTATED. The pipeline's linear decomposition is a FEATURE for implementation reliability. The specific failures (over-rigid coherence model, mandatory self-similarity) are fixable within the linear framework. The non-linear composition model is an intellectual aspiration that has never produced a better page than the linear model in any experiment to date. Fix the coherence model and fractal requirements; do not throw away the decomposition approach.

---

## Challenge 6: "Removing channeling increases creativity"

**Team's Position:** The domain list, incompatible domains list, pre-ranked tensions, and KortAI-specific content channel creativity toward known solutions. Removing them opens the creative space.

**Counter-Argument:**

1. **Constraints enable creativity.** Sonnets are 14 lines. Haiku is 5-7-5. The domain search territory and incompatible domain lists are ENABLING constraints that prevent the agent from wasting time on dead-end metaphors. "Musical" is listed as incompatible with KortAI because musical notation requires curves -- this is a CORRECT constraint that saves the agent from pursuing a metaphor it cannot express in CSS.

2. **LLMs without constraints default to mediocrity.** Give an LLM unconstrained creative freedom and it produces generic, middle-of-the-road output. The constraints in TC are what force it to find SURPRISING solutions within a bounded space. "What real-world domain that is ANGULAR and FLAT yet conveys WARMTH?" is a harder, more generative prompt than "What compositional idea resolves this tension?" The harder prompt produces more creative output because the answer space is more constrained.

3. **The pre-ranked tension landscape accelerates derivation.** Knowing that "warmth/comfort vs. austerity" is a proven strong tension is not channeling -- it is EXPERTISE. A human designer working with the same system would know this from experience. Removing this knowledge forces the agent to re-derive it from scratch every time, which is inefficient and may produce worse results if the agent derives shallow tensions instead.

**However:**

4. The channeling criticism is correct for the SPECIFIC LIST items. The 10-domain list's ordering matters because LLMs weight early items. "Geological/Sedimentary" being first means it is disproportionately selected. This is not constraint -- it is bias.

5. The "ZERO tension (assembly territory)" list in the tension landscape IS harmful channeling. It pre-closes creative doors. Content about "dismantling hierarchies" WOULD create genuine tension against a hierarchical system. Declaring hierarchy as "zero tension" territory prevents the agent from even exploring this.

6. The incompatible domains list conflates DOMAIN incompatibility with QUALITY incompatibility. "Musical" metaphors requiring "curves (sound waves, notation)" is an incorrect exclusion: a musical SCORE is angular, a PERCUSSION section is rhythmic and percussive (not curved), and concepts like "movement" or "tempo" from music are highly compatible with angular systems. The list excludes an entire domain family based on one reading of its visual properties.

**Verdict: PARTIALLY CORRECT.** Remove the items that CLOSE DOORS (ZERO tension list, incompatible domain families, specific list ordering). Keep the items that OPEN DOORS within constraints (the search query format, the structural property extraction, the rejection checks). The distinction is: channeling toward SPECIFIC SOLUTIONS is bad; channeling toward SOLUTION QUALITY is good.

---

## 7: What Are We NOT Questioning?

These are the assumptions the team has not examined:

### 7A. The Phase 1 Questioning Is Sacred

Every report treats Phase 1 (Multi-Axis Questioning) as pure gold -- 100% PROCESS, the engine of TC. Nobody has challenged whether the 14-axis framework is OPTIMAL or whether it is ITSELF channeling.

**The challenge:** The 4 core axes (FEEL/UNDERSTAND/DO/BECOME) were designed by someone. They represent a particular theory of reader engagement. Other frameworks exist: Bloom's taxonomy has 6 levels. McCarthy's 4MAT has 4 learning types. Kolb's experiential learning cycle has 4 stages. Keller's ARCS model has 4 categories (Attention/Relevance/Confidence/Satisfaction). The TC axes are ONE framework among many, but they are presented as THE framework.

The extended 5 axes (NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE) were also designed -- and they happened to be designed to create TENSION against the KortAI system. RECONCILE was rated "richest, highest potential" not because reconciliation is universally the richest axis but because it creates the strongest opposition against KortAI's "verdict-drive" personality. The axis set is subtly tuned to one design system.

**What this means:** Phase 1 may channel creativity as much as Phase 3 does, just more subtly. The axes determine WHAT TENSIONS ARE POSSIBLE. If the axes were different, different tensions would emerge, and different compositions would result.

### 7B. The Assumption That More Analysis = Better Composition

The entire TC skill assumes that DEEPER ENGAGEMENT with content produces BETTER composition. Multi-axis questioning, tension derivation, metaphor collapse, isomorphism tables, transition tables, fractal consistency checks -- all of these are analytical activities. The implicit model is: more analysis -> richer understanding -> better composition.

**The challenge:** Is there a point of diminishing returns? Could a talented builder who reads the content once, gets a strong intuition, and starts building produce a BETTER page than one who spends 45 minutes on multi-axis questioning? The middle-tier experiment's builder spent less time analyzing and more time building, and produced a SHIP-quality page.

The TC pipeline may be solving a problem that does not exist for sufficiently capable builders, while adding overhead that consumes context window and creative energy.

### 7C. The Sonnet-for-Builders Question

MEMORY.md flags this: "Sonnet-for-builders is unexamined. CD-006 was built by Opus. Flagship builders were Sonnet." Every discussion of pipeline changes assumes the PROCESS is the variable. What if the MODEL is the variable?

If Opus produces richer composition than Sonnet regardless of the pipeline, then all of these TC modifications are optimizing the wrong lever. The cheapest experiment would be: run the SAME pipeline with Opus builders and see if the results improve dramatically. If they do, the pipeline is not the bottleneck -- model capability is.

The team has not addressed this at all.

### 7D. Whether TC Is Even the Right Abstraction

TC frames composition as: content + design system -> tension -> metaphor -> architecture. This is a PARTICULAR theory of how composition works. Other theories exist:

- **Direct composition:** Read the content, develop an intuition for how it should feel, start building, refine through iteration. No metaphor needed. (This is how most human designers work.)
- **Reference-based composition:** Look at 5 pages you admire, identify what makes each effective, apply those patterns to new content. (This is how most design education works.)
- **Constraint-driven composition:** Start with the design system's constraints, find the most interesting things you can do within those constraints, map the content to those possibilities. (This is form-first, not content-first.)

TC assumes content-first composition through metaphor. None of the other approaches have been tested. The team is debating how to IMPROVE TC without questioning whether TC should exist.

---

## 8: What Could Go Catastrophically Wrong?

### 8A. The Broadened Phase 3 Produces Vague Compositions

If domain metaphors are demoted and "compositional ideas" are promoted, the most likely failure mode is: the agent selects a vague dynamic ("this page deepens") instead of a rich domain ("geological strata"), produces 3-4 CSS decisions instead of 8, and the resulting page is visually flat. The isomorphism table is sparse, the transition table has no physics to draw from, and the builder must invent coherence rather than deriving it.

This is not hypothetical. The Phase 3 broadening report itself acknowledges this as a HIGH risk and proposes lowering the structural mapping threshold to accommodate it. LOWERING THE THRESHOLD IS ACCOMMODATING FAILURE.

**Probability: HIGH.** LLMs default to the path of least resistance. "This page deepens" is easier to generate than "geological strata." If both are available, agents will gravitate toward the easier option.

### 8B. The Dynamic Side B Produces Shallow Readings

An agent reading 950 lines of design system files may extract surface features and miss deep patterns. The resulting tension derivation would be based on a shallow understanding, producing shallow compositions. The static summary, for all its compression, guarantees that certain deep patterns are visible. Dynamic reading offers no such guarantee.

**Probability: MEDIUM.** The System Reading Protocol proposed in Report 03 (Approach C) partially mitigates this. But the protocol itself is untested -- it may not produce the desired reading depth.

### 8C. The Merged Single Agent Hits Context Limits

A single agent doing TC (842 lines of skill) + design system reading (950 lines) + content analysis (1,000+ lines) + CSS writing (800+ lines) + HTML output (2,000+ lines) + reflection (30 lines) may exceed practical context limits, especially for longer content. The result would be degraded quality in the latter phases (CSS/HTML) as the context window fills and earlier material (TC thinking, design system understanding) gets compressed.

**Probability: MEDIUM-HIGH for long content, LOW for short content.** The mitigation is to test with content of varying lengths and identify the breakpoint.

### 8D. Removing the Conviction Brief Removes the Planning Discipline

If the brief is eliminated as "compression," the structured planning it enforced (World-Description, Opposition Map, Compositional Arc, Creative Conditions) may also disappear. The agent might jump from analysis to building without the intermediate crystallization step. The result would be compositions that start strong (early zones benefit from fresh analytical energy) but degrade (later zones suffer as the original compositional intent fades from attention).

**Probability: MEDIUM.** Mitigated if the structured planning is preserved as an internal step even without the brief format.

---

## 9: What Is the SIMPLEST Version That Captures Value?

Based on this adversarial review, here is the minimum viable change set -- maximum value, minimum risk:

### Do These (LOW RISK, HIGH VALUE):

1. **Remove the 10-domain list and incompatible domain families.** Keep the search query format, let the agent generate domain candidates from the structural overlap analysis. This removes the most obvious channeling without changing the fundamental approach.

2. **Remove the "ZERO tension" list from the tension landscape.** This pre-closes doors and contradicts the skill's own epistemology.

3. **Remove the KortAI-specific content from the skill itself.** Move the personality spectrum, tension landscape quick reference, and domain compatibility lists into a DESIGN SYSTEM FILE that TC reads at runtime. The skill becomes design-system-agnostic; the design system becomes self-documenting. This is the Report 03 Approach C.

4. **Fix the coherence model.** Allow "DIVERGENT" as a valid transition direction in the transition table. Add the constraint that divergence must be intentional and perceptible. This addresses the legitimate criticism of over-rigid coherence without abandoning the coherence framework.

5. **Fix fractal consistency.** Replace "self-similarity at all scales" with "composition is perceptible at 3+ scales." Remove the assumption that the same pattern must repeat at every level.

6. **Keep the conviction brief structure as an internal planning step.** Remove the Calibration section (pre-computed values for another agent) and Content Map (summary for an agent that hasn't read the content). Keep World-Description, Opposition Map, Compositional Arc, Creative Conditions as internal articulation requirements.

### Do NOT Do These (HIGH RISK, UNDERDETERMINED VALUE):

7. **Do NOT replace domain metaphors with "compositional ideas" as the primary path.** Allow non-domain ideas as a secondary option with a HIGHER structural mapping threshold (6+ channel decisions, same as domains). Do not lower the bar.

8. **Do NOT merge TC + building into a single agent until you have experimental evidence.** The context window concern is real and untested. Run the experiment first.

9. **Do NOT remove Phase 4's linear decomposition.** The top-down build order and boundary-by-boundary approach are justified. Fix the specific problems (coherence, fractals) within the existing framework.

10. **Do NOT make Phase 1's axis set dynamic without testing.** The 14 axes may be channeling, but they are TESTED channeling. Changing them is a high-risk move with no evidence of benefit.

---

## 10: Evidence From Past Experiments

Let me be direct about what we actually KNOW versus what we BELIEVE:

### Tested (with evidence):

- Domain metaphors produce rich compositions (CD-006, Gas Town, middle-tier: all used domains, all succeeded)
- Multi-axis questioning produces useful content analysis (every pipeline run confirms this)
- The conviction brief successfully transfers compositional intent (IMPROVE builders consistently produced better second passes)
- Pre-ranked tension lists can be accurate (warmth/comfort vs. austerity has been validated across multiple builds)
- Linear decomposition produces implementable CSS (every successful build used the linear model)

### Untested (no evidence for or against):

- Whether non-domain compositional ideas can produce pages as rich as domain metaphors (ZERO experiments)
- Whether a single agent can do TC + building as well as two agents (ZERO experiments)
- Whether dynamic Side B reading produces better or worse understanding than the static summary (ZERO experiments)
- Whether non-linear composition produces better pages than linear decomposition (ZERO experiments)
- Whether removing channeling produces more creative or more mediocre output (ZERO experiments)
- Whether Opus builders would make the entire pipeline debate moot (ZERO experiments)

### The Uncomfortable Truth:

**Every proposed change is based on theory, not evidence.** The team is proposing to modify a system that HAS produced successful results (SHIP verdict, CEILING-tier pages) based on theoretical arguments about how it COULD be better. The theoretical arguments are intellectually compelling. They are also untested.

The RESPONSIBLE approach is: make the LOW-RISK changes (items 1-6 above), run the system, measure the results, THEN decide whether the HIGH-RISK changes (items 7-10) are warranted based on evidence.

---

## Summary Verdict Table

| Assumption | Verdict | Confidence |
|-----------|---------|------------|
| Domain metaphors are limiting | PARTIALLY CORRECT -- the list channels, but domains themselves are the highest-value tool | HIGH |
| The conviction brief is compression | PARTIALLY CORRECT -- some sections are compression, the structure is thinking discipline | HIGH |
| One agent can do TC + building | UNDERDETERMINED -- compelling arguments on both sides, zero experimental evidence | LOW |
| Dynamic Side B is better than static | PARTIALLY CORRECT -- content-sensitive reading is valuable, but accumulated wisdom has real worth | MEDIUM |
| Linear decomposition is bad | PARTIALLY CORRECT -- specific elements are too rigid, but linearity itself is a feature | HIGH |
| Removing channeling increases creativity | PARTIALLY CORRECT -- remove door-closing channeling, keep quality-ensuring constraints | HIGH |

**The team's analysis is intellectually rigorous and directionally correct.** But it consistently OVERESTIMATES the value of proposed changes and UNDERESTIMATES the value of the existing system. The existing system has produced SHIP-quality pages. The proposed changes are untested. Proceed with surgical fixes (items 1-6), not architectural overhaul (items 7-10), until experimental evidence justifies deeper changes.
