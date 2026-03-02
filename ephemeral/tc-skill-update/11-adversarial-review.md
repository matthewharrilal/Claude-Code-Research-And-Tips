# Adversarial Review: TC Skill Rewrite + PA Redesign + Generative Frame

**Reviewer:** adversary (Opus)
**Date:** 2026-02-27
**Stance:** Genuinely adversarial. Not validation. Not devil's advocate for the sake of it. Actual structural weaknesses.

---

## Executive Summary

The generative frame is philosophically coherent, internally consistent, and represents a genuine paradigm shift from the compliance-extraction model. It is also DANGEROUSLY UNTESTED and relies on at least 6 unverified assumptions, contains 3 structural vulnerabilities that could produce WORSE output than the compliance model it replaces, and has 2 failure modes that the team is actively romanticizing.

The most dangerous thing about this rewrite is that it is PERSUASIVE. The prose is beautiful. The examples are compelling. The philosophy is attractive. Beautiful prose about creative inhabitation is not evidence that creative inhabitation produces better HTML pages. The team is at risk of falling in love with its own theory.

---

## Attack 1: "Conviction and Direction" Is Compliance Wearing a Turtleneck

### The Claim
The old system said "comply with these rules" and agents produced flat output. The new system says "inhabit this world and create from conviction" and agents will produce rich output.

### The Attack
**Compliance is not defined by the word "must."** Compliance is defined by what the agent OPTIMIZES FOR. The old system optimized for threshold satisfaction. The new system optimizes for... what exactly?

Consider the Conviction Brief's Section 1 (World-Description). The SKILL-REWRITE says: "Identity as the world the builder inhabits, not rules the builder obeys." But the builder is still a language model reading instructions. When the instruction says "Every surface is sharp. Corners are cut, not curved," the builder will comply with that sentence exactly the same way it complied with "border-radius: 0." The FRAMING changed. The BEHAVIORAL OUTCOME is identical.

Where this becomes dangerous: The 6-dimension reflection protocol. The builder is instructed to write 20-35 sentences about conviction, alternatives, surprises, impulses, experience, and unresolved tensions. An LLM will produce 20-35 sentences of reflection REGARDLESS of whether it experienced genuine creative tension. The reflection will be fluent, specific-sounding, and completely confabulated. How would you know?

**The confabulation test:** Take the SKILL-REWRITE's example reflections (Sections a-f in Design 2 of the design spec). They read as genuine creative accounts. Now consider: those were written by an Opus agent describing a HYPOTHETICAL build. The examples of "genuine reflection" are themselves GENERATED EXAMPLES of what genuine reflection looks like. If an agent can generate convincing EXAMPLES of reflection without having built anything, it can generate convincing reflection AFTER building without having reflected.

**Concrete prediction:** The first time the generative frame runs, the builder will produce a 6-dimension reflection that is indistinguishable from a genuine creative account. It will mention "surprises" that are post-hoc rationalizations. It will describe "alternatives rejected" that were never actually considered. It will articulate "unresolved tensions" that are intellectually interesting but have no bearing on the actual CSS decisions made. And the team will read this reflection and say "look, the generative frame works."

### What Would Falsify This Attack
Evidence that builders produce DIFFERENT reflections when they actually experience creative tension vs. when they are following a brief mechanically. If the reflections are indistinguishable, the protocol is measuring the agent's prose fluency, not its creative state.

---

## Attack 2: "Raw Material Over Summaries" Is an Untested Assumption

### The Claim
Principle 2 of the generative frame: "actual explorations produce richer processing states than descriptions of what they found." The TC audit (01-tc-audit.md) asserts this repeatedly. The pipeline import (02-pipeline-import.md) uses it as a selection criterion.

### The Attack
**Where is the evidence?** The project has N=0 controlled comparisons of "agent reads full exploration" vs. "agent reads summary of exploration's key findings." The claim is derived from a theory about LLM processing states that has never been tested against this specific pipeline.

The theory might be WRONG. Consider the alternative hypothesis: LLMs process information through ATTENTION mechanisms. A 3,000-line exploration file produces massive attention diffusion across thousands of tokens. A 200-line summary with the 15 most important findings concentrates attention on what matters. The summary might produce MORE focused creative processing, not less.

The project's own evidence actually SUPPORTS summaries in one crucial case: the Conviction Brief. The entire TC skill produces a ~100-line brief from hours of processing. The brief IS a summary. The design spec explicitly argues that this summary is better than giving the builder all the raw TC output. So the team already believes summaries > raw material in at least one case. The principle is stated as universal but applied selectively.

**The context window argument cuts both ways.** The design spec says "each window optimized for its purpose." Loading 3-4 explorations at ~6,000 lines is ~12% of context. The brief is ~100 lines. The content is ~4,000 words. The reflection is ~35 sentences. Components.css. Mechanism catalog. By the time the builder starts writing CSS, their context is 30-40% full of READING MATERIAL. Is the builder in "inhabitation mode" or "trying to keep track of six documents mode"?

### What Would Falsify This Attack
A controlled experiment: same content, same metaphor, two builders. One gets full explorations, one gets 200-line summaries of exploration insights. Compare PA-05 scores. If explorations consistently produce higher PA-05, the principle holds. Until then, it is a hypothesis with philosophical appeal but zero empirical backing.

---

## Attack 3: 5 Auditors With 20 Questions Will Miss What 9 Auditors With 69 Questions Caught

### The Claim
The PA redesign reduces from 69 questions to 20, from 9 specialized auditors to 5 generalists. The claim is that experiential questions produce richer responses and that generalists engage more broadly.

### The Attack
**The whitespace void test.** In the Mode 4 PA, 9/9 auditors independently flagged catastrophic whitespace (70-80% scroll was blank cream). This was THE dominant finding. Would 5 auditors with 20 experiential questions catch it?

Let's check. The relevant new questions are:
- E-04: "Find the most generous area of empty space. Does it feel like a pause or like the other person stopped talking?"
- E-08: "Does each third feel like it got the same amount of attention, or did someone get tired?"

E-04 is assigned to Auditor D. E-08 is assigned to Auditor D. So ONE auditor gets both whitespace-relevant questions. If Auditor D's instance has a blind spot, misinterprets the question, or focuses on a different aspect of space -- the dominant finding of the previous audit would be caught by exactly 1/5 auditors instead of 9/9.

The old system's REDUNDANCY was a feature, not a bug. Nine auditors meant 9 independent chances to catch the same problem. Each looked from a different angle but the OVERLAP was what produced confidence. "9/9 flagged" is not "9 copies of the same finding" -- it is 9 INDEPENDENT CONFIRMATIONS. The new system's non-overlapping question assignments eliminate this redundancy.

**The coverage gap.** 69 questions covered 69 different diagnostic surfaces. 20 questions cover... 20 different experiential surfaces? No -- 20 questions cover whatever the auditor INTERPRETS them to cover. E-07 ("What DO you notice shifting?") could surface multi-coherence, or it could surface "the background got darker." The experiential frame trusts the auditor to notice what matters. But if the auditor doesn't notice the whitespace void because they're focused on describing what they EXPERIENCE rather than what's MISSING, the void passes undetected.

**The quantitative backstop.** The PA design spec says "The gate runner STILL RUNS. All 57 programmatic gates still verify..." But the whitespace void was NOT caught by programmatic gates. The S-09 stacking loophole means individual margins can pass while stacked gaps create voids. This was a PERCEPTUAL finding that required EYES, not gates. The old PA had explicit quantitative questions (PA-50 through PA-53: "Count the number of full viewport-height scroll positions where less than 30% of the screen contains actual content"). The new PA removes these. The gate runner doesn't catch stacked voids. The new PA doesn't ask about stacked voids. What catches stacked voids?

### What Would Falsify This Attack
Run the new 5-auditor, 20-question PA on a page WITH a known whitespace void. If 4/5 or 5/5 auditors surface it naturally through experiential questions, redundancy is preserved through the questions' open-ended nature. If 1/5 or 0/5 catch it, the redesign has created a coverage gap for the project's most historically important failure mode.

---

## Attack 4: The Opposition Principle Assumes Tension Is Always Available

### The Claim
"Richest creative work comes from where content needs FIGHT system personality." The Opposition Principle governs axis selection, exploration selection, and metaphor derivation.

### The Attack
**What about content with no meaningful tension?** The SKILL-REWRITE has an escape ramp (Zero-Tension Path, Phase 2), but the entire surrounding infrastructure ASSUMES tension is the norm. The skill is 842 lines long. The zero-tension path is 2 lines: "Zero-tension path. Skip Phases 3-4. Apply design system defaults directly."

Consider these content types:
- A changelog listing version updates and bug fixes
- An API reference with method signatures and return types
- A pricing table comparing plan features
- A glossary of design system terms
- A team roster with photos and bios

These are real content types that real design systems serve. They have ZERO meaningful tension with the KortAI personality. They don't need metaphors. They don't need opposition maps. They need competent, clear, well-spaced presentation within the design system's vocabulary.

The generative frame says "apply design system defaults directly" for these cases. But the defaults are under-specified. What IS a "design system default" for a changelog? For a pricing table? The entire creative intelligence of the skill -- all 840 lines of it -- is devoted to tension-driven composition. Zero lines are devoted to making tension-free content look GOOD.

**The mid-tension problem is worse.** Content with WEAK genuine tension -- maybe one interesting axis (FEEL: warmth vs. austerity for a team roster) but no deep structural opposition. The skill says "proceed to Phase 3" but Phase 3's metaphor search is calibrated for STRONG tensions. A weak tension produces a weak metaphor. A weak metaphor applied to the full compositional architecture (6 sections of the Conviction Brief) produces a page that's TRYING to be more interesting than its content warrants. The cosmetic tension exit ramp is the right call for zero tension. But the skill has no guidance for "this content is a 3/10 on tension -- how much metaphor is appropriate?"

### What Would Falsify This Attack
A content-type matrix showing how the skill handles low-tension and zero-tension content. Not just "apply defaults" but specific guidance for the 5-6 most common low-tension content types. The current skill is beautiful for Steve Yegge blog posts. What about the other 70% of pages a design system serves?

---

## Attack 5: Programmatic Gates and Experiential Evaluation Will Contaminate Each Other

### The Claim
The PA design spec says the separation is "clean": gate runner does binary pass/fail, PA auditors do experiential prose, Weaver does creative direction. These three systems operate independently.

### The Attack
**The orchestrator COMBINES them.** The PA design spec includes a 2x2 matrix (Gates PASS/FAIL x Weaver SHIP/REFINE/RETHINK). The orchestrator reads BOTH and makes routing decisions. This means:

1. If gates FAIL and Weaver says SHIP, the orchestrator orders mechanical fixes. But the Weaver said SHIP -- meaning the experiential quality is good. After mechanical fixes, does the page get re-audited? If yes, you've introduced a compliance loop into a generative pipeline. If no, you've let un-audited mechanical changes ship.

2. If gates PASS and Weaver says REFINE, the refinement builder gets artistic direction but NO gate information. But the gates PASSED -- meaning the quantitative foundations are solid. The refinement builder, working purely from experiential direction, might UNDO a gate-passing state while pursuing a creative direction. The next gate run catches this, creating an oscillation: creative refinement breaks gates, gate-fixing breaks creative intent, refinement again...

3. The RETHINK verdict is the nuclear option. Full TC re-invocation. But the gate runner ran on the old artifact. The new TC invocation produces a completely new metaphor. None of the gate results are relevant. None of the auditor responses are relevant. The entire audit was wasted compute. Is this acceptable? How often does RETHINK happen? If it's 20% of builds, that's massive waste.

**Temporal contamination.** The gate runner and PA auditors run at the SAME TIME (after the builder finishes). But the PA design spec says auditors should engage with the page EXPERIENTIALLY -- scroll through it, describe what they feel. If the orchestrator tells the auditor "by the way, the gate runner found 3 failed thresholds," the experiential engagement is contaminated. The spec says the auditor doesn't receive gate results. But the WEAVER does. The Weaver reads both gate results (via the orchestrator's routing decision) and auditor prose. The Weaver's creative direction is informed by mechanical gate failures. The separation is not clean at the Weaver boundary.

### What Would Falsify This Attack
A protocol for the oscillation case (refinement breaks gates). A clear statement about whether the Weaver sees gate results or only the orchestrator does. A cost analysis of the RETHINK path. These are engineering decisions that the philosophical frame doesn't address.

---

## Attack 6: Content Types That Break the Generative Frame

### The Claim
The TC skill applies to any content that has tension with the design system.

### The Attack
The entire framework is optimized for LONG-FORM PROSE with EMOTIONAL CONTENT. Specifically:
- Content that has an author's voice (Yegge, blog posts, essays)
- Content with emotional arc (narrative structure, rising tension, climax)
- Content of substantial length (4,000+ words)
- Content where the reader's primary mode is READING, not SCANNING or LOOKING UP

Real design systems serve content that is NONE of these:

**Data tables.** A 200-row comparison table of features across 5 plans. The TC skill would say "assess tension." There is no tension. There is data. The Opposition Principle produces nothing. The metaphor search finds nothing. The zero-tension exit ramp says "apply defaults." But a well-designed comparison table is NOT "defaults" -- it requires careful column sizing, row grouping, sticky headers, hover states, responsive collapse, and cell typography. This is DESIGN WORK that the generative frame cannot see because it's not driven by emotional tension.

**Interactive forms.** A multi-step checkout flow. The content's "tension" is between user anxiety and task completion -- real, but the metaphor framework is wrong for it. This content needs UX patterns, not compositional metaphors. The generative frame would produce a Conviction Brief about "the anxiety of commitment" when what the builder needs is "step indicator, field validation, progress bar."

**Code documentation.** Function signatures, parameter tables, return types, usage examples. The content is REFERENCE material -- users scan, not read. The scroll experience is irrelevant because users jump to their method via search. The 6-dimension reflection would produce: "SURPRISES: none, the content is a reference table." This is honest, but the protocol forces the builder to pretend there might be surprises.

**Marketing landing pages.** The content is designed to be SCANNABLE, not READ. The hero section matters more than any section boundary. The CTA button matters more than any metaphor. The generative frame's emphasis on scroll experience and compositional arc is wrong-model for content where 60% of value is above the fold.

### What Would Falsify This Attack
Explicit content-type routing that says "for these content types, use THIS subset of the pipeline" or "these content types bypass the TC pipeline entirely and use pattern X instead." The SKILL-REWRITE has a content-type conditional (prose/mixed/visual) but it's too coarse -- it doesn't distinguish between "mixed long-form" and "interactive application UI."

---

## Attack 7: Multi-Cycle Refinement in the Generative Frame

### The Claim
The Conviction Brief + Reflection + PA + Weaver Direction cycle can iterate: REFINE verdict triggers another builder who receives the artifact + reflection + creative direction.

### The Attack
**The generative frame handles the FIRST pass well and the SECOND pass poorly.** Here's why:

The first builder reads the Conviction Brief and enters creative state. They build. They reflect. The PA audits. The Weaver says REFINE with creative direction.

The second builder receives: the artifact, the first builder's reflection, and the Weaver's creative direction. The receiving prompts (R-01 through R-07) orient the second builder. Good so far.

Now: what if the second builder's artifact STILL needs refinement? REFINE again. The third builder receives: the second artifact, the second builder's reflection, and the second Weaver's creative direction. But what about the FIRST builder's reflection? Does it travel? If yes, the third builder has TWO reflections, potentially contradictory. If no, first-builder insights are lost.

**Context accumulation.** Each REFINE cycle adds: ~100 lines of artifact, ~35 sentences of reflection, ~15 lines of experience portrait, ~10 lines of creative direction. By cycle 3, the incoming context is: original conviction brief (100 lines) + artifact (~500 lines) + 3 reflections (105 sentences) + 3 experience portraits (45 lines) + 3 creative directions (30 lines) = substantial context devoted to HISTORY rather than CREATION. The builder in cycle 3 is reading about what builders 1 and 2 thought, not inhabiting the content.

**Convergence assumptions.** The old pipeline had a POLISH/IMPROVE dichotomy -- small fixes vs. creative re-engagement. The new system has only REFINE (creative continuation) and RETHINK (nuclear restart). Where is the equivalent of "just fix the border weight and the background hex"? A page that is 95% there but has one wrong border color doesn't need "creative direction" -- it needs a one-line CSS edit. The generative frame forces even trivial fixes through the full reflection -> audit -> Weaver -> creative direction cycle. That's architecturally pure but operationally wasteful.

The SKILL-REWRITE does have the Type A/B/C fix cycle protocol (mechanical/structural/compositional). This partially addresses the concern. But the PA design spec's Weaver only outputs SHIP/REFINE/RETHINK -- no "POLISH" for small mechanical fixes. The orchestrator would need to decide whether to route to the fix cycle protocol or the full REFINE cycle. The decision criteria are not specified.

### What Would Falsify This Attack
A clear multi-cycle protocol: what travels between cycles, what is dropped, what the maximum cycle count is, and how the orchestrator distinguishes "needs one CSS fix" from "needs creative re-engagement."

---

## Attack 8: Shallow Reflections and Empty Surprises

### The Claim
The 6-dimension reflection captures the builder's creative state.

### The Attack
**Dimension (c) SURPRISES will be systematically empty in well-briefed builds.** The Conviction Brief is designed to be so specific that the builder's creative decisions are largely PRE-DIRECTED. The world-description tells the builder what the world looks like. The calibration tells the builder what values to use. The opposition map tells the builder where tension lives. The compositional arc tells the builder what the reader experiences. The creative conditions suggest specific CSS experiments.

A builder following a good Conviction Brief has VERY LITTLE room for genuine surprise. The CSS will produce roughly what the brief predicts. The content will map roughly to the zones the brief specifies. The mechanisms will be roughly what the opposition map implies.

The honest answer to "Was there a moment where the CSS revealed something unexpected?" is often: "No, the brief was accurate. The CSS did what I expected." But the protocol demands 2-4 sentences. So the builder will confabulate surprises -- "the asymmetric margins created an unexpectedly magazine-like quality" -- that are true in the sense that the builder noticed them, but not TRUE in the sense that they were genuinely unexpected or creatively significant.

**Dimension (d) IMPULSES has a similar problem in the OTHER direction.** The brief says "80% creative authority" and suggests experimental CSS. If the builder tries all the experiments, they have no suppressed impulses. If they don't try them, the impulse section becomes "I wanted to try what the brief suggested but didn't have time" -- which is a time management note, not a creative impulse.

**The reflection becomes a PERFORMANCE of creativity rather than a RECORD of it.** The builder knows the reflection will be read by the next builder. Social pressure (even for an LLM) produces reflections that SOUND creative rather than reflections that ARE honest. "I wanted to explore X but the constraints prevented it" is a better NARRATIVE than "I followed the brief and everything went as planned." The protocol incentivizes dramatic creative narratives over honest accounts.

### What Would Falsify This Attack
Collect 10+ reflections from actual builds. Evaluate whether the "surprises" dimension contains genuinely novel observations or post-hoc rationalizations. Evaluate whether "alternatives rejected" were actually considered or are performative. If >50% of reflections contain substantive surprises, the attack is wrong. If >50% are confabulated, the dimension should be made optional ("write only if genuinely surprised").

---

## Attack 9: Are We Swapping "Comply With Rules" for "Comply With Conviction"?

### The Claim
The generative frame replaces compliance with conviction -- the builder WANTS to create, not just OBEYS constraints.

### The Attack
**"Comply with conviction" is still compliance.** The Conviction Brief is an instruction document. The builder reads it and produces output that matches. The FRAMING is creative ("inhabit this world"), but the FUNCTION is identical to the old brief: tell the builder what to make, check whether they made it.

The old system said: "Background delta >= 15 RGB." The builder set backgrounds 15+ RGB apart.
The new system says: "The descent runs warm-to-cool: #FEF9F5 -> #F5F0E8 -> #EDE6DA -> #1A1A1A." The builder uses those exact hex values.

In both cases, the builder is FOLLOWING INSTRUCTIONS. The new instructions are more poetic. They might activate different processing states (genuine claim). They might produce genuinely different creative engagement (unverified claim). But the structural relationship -- "document tells agent what to produce, agent produces it, audit checks output" -- is identical.

**The test for genuine generative shift:** Does the new system enable the builder to produce output that SURPRISES the brief-writer? If the Conviction Brief fully predicts the output, it is a compliance document with literary merit. A genuinely generative system would produce output that the TC agent could NOT have predicted -- compositions that emerge from the builder's engagement with the content that exceed the brief's imagination.

The current design does not measure or reward builder-originated creative contributions. The PA questions ask what the page FEELS like, not whether the page exceeded its brief. The Weaver produces creative direction based on the brief's intent, not the builder's innovation. The entire evaluation loop measures COMPLIANCE WITH CONVICTION, not TRANSCENDENCE OF IT.

### What Would Falsify This Attack
A builder produces output where the PA auditors identify creative decisions that are NOT in the Conviction Brief -- decisions that surprised even the TC agent. If this happens reliably, the generative frame enables genuine creative emergence. If the output consistently matches the brief's predictions (just with better CSS), the frame is compliance in creative clothing.

---

## Attack 10: The 42+ Programmatic Gates Are the Elephant in the Room

### The Claim
The gate runner operates independently from the experiential evaluation.

### The Attack
**42+ binary gates define a FLOOR that constrains the CEILING.** Every gate that says "FAIL if X" eliminates a design decision. The builder has "80% creative authority" minus every gate that removes an option.

The gates include: container width, RGB deltas, letter-spacing minimums, stacked gap maximums, WCAG compliance, mechanism counts, border-weight usage, typography constraints, component usage requirements. These are collectively a SPECIFICATION. The builder's "80% creative authority" is actually "creative authority over the 20% of decisions that gates don't cover."

Now consider: the generative frame says "the brief should make the builder want to create THIS page." The builder reads the beautiful Conviction Brief, gets excited, starts building... and then hits Gate GR-18 (background delta), Gate GR-23 (mechanism count), Gate GR-27 (stacked gap). Each gate failure requires CSS modification. Each modification MOVES THE ARTIFACT AWAY from the builder's creative vision and TOWARD the gate's specification.

The generative frame ASSUMES that gates and conviction are aligned -- that a good Conviction Brief will naturally satisfy all gates. But the Flagship experiment proved this is NOT always true. The brief specified subtle, atmospheric transitions. The gates required 15+ RGB deltas. The atmospheric intent and the perception threshold conflicted. The result: the builder parked at threshold floor values, producing technically-compliant but perceptually flat output. The generative frame has not solved this problem -- it has renamed it.

**The gate count itself is a problem.** 42-57 binary gates means the builder must satisfy 42-57 independent constraints. Even with "80% creative authority," 57 constraints operating simultaneously create a tightly constrained optimization space. The generative frame's beautiful philosophy sits on top of 57 mechanical requirements that collectively define the output more than the philosophy does.

### What Would Falsify This Attack
Demonstrate that a page can satisfy all 57 gates AND have a PA-05 of 4/4 DESIGNED. If no such page exists in the project's history, the gates may be structurally incompatible with the quality the generative frame seeks.

---

## Cross-Cutting Vulnerability: The Romanticization Problem

The single most dangerous pattern across this entire project is the tendency to ROMANTICIZE process instead of MEASURING output.

- "Inhabitation" sounds better than "instruction-following," but is it measurably different?
- "Conviction" sounds better than "specification," but does it produce different CSS?
- "Experiential questions" sound better than "compliance questions," but do they surface different findings?
- "Creative direction" sounds better than "fix list," but does it produce different refinements?

The project has ZERO A/B comparisons of generative vs. compliance approaches on matched content. Every claim about the generative frame's superiority is based on THEORY (philosophical arguments about processing states) and EXTRAPOLATION (from the Middle experiment and Flagship failure).

The most honest statement would be: "We believe the generative frame SHOULD produce better output because the theory is sound and the compliance model demonstrably failed. But we have not proven it."

---

## Summary: 10 Attacks, Severity Ranking

| # | Attack | Severity | Status |
|---|--------|----------|--------|
| 1 | Conviction compliance / confabulated reflection | HIGH | Unaddressed -- no falsification mechanism exists |
| 2 | Raw material assumption untested | MEDIUM | Addressable with one experiment |
| 3 | 5 auditors miss what 9 caught | HIGH | Structural gap for the project's #1 failure mode |
| 4 | Opposition Principle assumes tension | MEDIUM | Low-tension content underserved |
| 5 | Gate/experiential contamination | MEDIUM | Engineering gaps in the protocol |
| 6 | Content types that break the frame | HIGH | 70% of real content is ill-served |
| 7 | Multi-cycle refinement underspecified | MEDIUM | Solvable with clear protocol |
| 8 | Shallow reflections and empty surprises | MEDIUM | Solvable by making dimensions optional |
| 9 | Conviction compliance vs. rules compliance | HIGH | Philosophical -- may be unfalsifiable |
| 10 | 57 gates constrain the ceiling | HIGH | Structural tension between systems |

### The 3 I Would Fix Before Shipping

1. **Attack 3 (PA coverage gap):** Add one SPATIAL VOID question back. E-04 is good for quality-of-space but doesn't catch QUANTITY-of-void. Something like: "Scroll through the page at speed. Is there a moment where the page seems to disappear -- where you're scrolling through emptiness?" This is experiential, not quantitative, but it catches the whitespace void.

2. **Attack 6 (content type coverage):** Add explicit routing for low-tension content types. The TC skill should say "If the content is a reference table, API documentation, pricing comparison, or changelog: skip Phases 1-3, use the design system's STANDARD PATTERNS for this content type, and invest creative energy in typography and spatial refinement within the pattern." Give the builder permission to NOT metaphorize.

3. **Attack 7 (multi-cycle protocol):** Specify what travels between REFINE cycles. Recommendation: only the MOST RECENT reflection travels (not all). The artifact travels. The original Conviction Brief travels. Previous creative directions are dropped (the Weaver produces fresh direction each cycle). Maximum 3 REFINE cycles before escalation to RETHINK.

### The 2 That Are Features, Not Bugs (But Should Be Acknowledged)

- **Attack 1 (confabulated reflection):** LLM reflection will always contain confabulation. This is a PROPERTY of the system, not a fixable bug. Acknowledge it: "Reflections are the builder's best account of their creative state. They may contain post-hoc rationalization. The next builder should read them as DIRECTION, not as TRUTH."

- **Attack 9 (conviction as compliance):** The generative frame IS a form of compliance -- compliance with creative intent rather than mechanical specification. This is a philosophical improvement, not a paradigm escape. Acknowledge it: "The builder is still following instructions. The instructions are designed to activate creative processing rather than mechanical verification. The output quality depends on whether this distinction is real at the LLM processing level -- a question the project cannot yet answer."

---

**END OF ADVERSARIAL REVIEW**
