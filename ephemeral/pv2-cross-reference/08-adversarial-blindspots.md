# PV2 Cross-Reference: Adversarial Blind Spots Analysis

**Author:** adversarial-blindspots analyst (Opus 4.6)
**Date:** 2026-02-19
**Sources:** PV2-ARCHITECTURE-DIAGRAM.html (1,143 lines), hidden-questions.md (~470 lines), anti-reproduction-protocol.md (~457 lines), pv2-flagship-fresh-eyes.md (~244 lines), pv2-flagship-beliefs-audit.md (~334 lines), recursive-self-application.md (~847 lines), missing-dimensions.md (~1,000+ lines)
**Scope:** What blind spots exist in the architecture? Does it pass its own anti-reproduction gates? What recursive ironies survive? What dimensions are missing entirely?

---

## EXECUTIVE SUMMARY

The PV2 Architecture Diagram is an impressive synthesis -- 1,143 lines of well-structured HTML that crystallizes a 17-agent validation audit into a clear user journey. It correctly addresses many diagnosed failure modes: recipe format, perception thresholds, two-layer verification, file routing, and tier-gated deployment.

However, cross-referencing against 6 adversarial and meta-cognitive source files reveals **9 blind spots, 5 recursive ironies, 4 anti-reproduction gate violations, and 7 missing dimensions**. The most critical finding: **the architecture assumes it will succeed because it addresses known failures, but the meta-cognitive corpus warns that unknown failures -- the ones the architecture's structure prevents from being seen -- are the actual threat.**

**Severity Distribution:**
- BLOCKING: 3 (would cause failure if unaddressed before codification)
- SIGNIFICANT: 8 (degrade quality but do not prevent shipping)
- ENRICHING: 14 (improve the architecture's resilience but are not urgent)

---

## PART 1: BLIND SPOTS IN THE ARCHITECTURE

### BS-01: The Architecture Cannot See Its Own Failure Modes [BLOCKING]

**Source:** hidden-questions.md, SB-05 (Forward-Looking Gap)

The architecture diagram is entirely RETROSPECTIVE. It addresses the flagship's failure modes: whitespace voids (stacking gate), sub-perceptual CSS (perception thresholds), uniform typography (font-size zones), zero borders (structural border recipe). Every gate, every threshold, every verification check addresses a KNOWN failure.

But hidden-questions.md asks: "What NEW failure mode will the fix create? Every fix in engineering creates new failure surfaces." The architecture is silent about its own failure surfaces.

**Specific new failure modes the architecture creates:**

1. **Recipe ossification.** The recipe embeds specific CSS values (#FAF8F5, 17px, 1.85). When the design system evolves (new fonts, revised palette, new components), every concrete value becomes stale. hidden-questions.md Exploit 1 identifies this: "Change the design system's palette. Now every concrete value in the recipe is WRONG values." The architecture has no staleness detection mechanism.

2. **Uniformity trap.** hidden-questions.md Exploit 3: "Pipeline v2 will produce consistent 3/4 pages. Then they'll notice every page looks the SAME -- same zone architecture, same transition grammar, same typography hierarchy." The recipe produces UNIFORMITY, not DESIGN. No gate checks for inter-page variety.

3. **Compliance ceiling.** The architecture's binary gates ensure minimum quality but may also impose maximum quality. A builder who satisfies all 12 programmatic gates and all perception checks has no incentive to exceed them. The architecture has no "bonus" mechanism for exceptional work -- only "penalty" mechanisms for failure.

**What's missing in the architecture:** A "FORWARD FAILURE" section listing the top 5 predicted new failure modes, with monitoring criteria for each. The anti-reproduction protocol's M-2 (sunset audit) partially addresses this but only for existing rules, not for predicted new failures.

---

### BS-02: The Architecture Assumes Content-Agnosticism Without Evidence [SIGNIFICANT]

**Source:** hidden-questions.md, A-04 (Recipe Format Will Scale), What-If 1 (Content Determines Quality)

The architecture diagram Section 2 shows the user journey starting with "/build-page [content-source] [tier?]" -- implying any content source works. Section 5 says "The same recipe powers all three tiers." The tier routing table (Section 5) differentiates by agent count, gate strictness, and PA depth -- but NOT by content type.

hidden-questions.md A-04 warns: "The recipe format that works for remediation of a single existing page will work for from-scratch construction of new pages" is an UNTESTED assumption. The recipe was derived from RESEARCH-SYNTHESIS content. API documentation, changelogs, tutorials, landing pages, and FAQ pages have fundamentally different structures.

The fresh-eyes review confirms this: "Phase 0 assumes content has an 'Introduction -> body -> conclusion' arc. What about FAQ pages? Reference documentation? Comparison matrices?" (Part A, Under-Specified #1)

**What's missing in the architecture:** Content-type detection at Phase 0 that routes to content-specific recipe variants. At minimum: prose variant, tabular variant, short-form variant, visual variant. The architecture currently treats all content identically.

---

### BS-03: The Middle-Tier Paradox Is Unresolved [BLOCKING]

**Source:** hidden-questions.md, What-If 4 (Middle-Tier Is the Ceiling)

The architecture diagram presents three tiers (Middle, Ceiling, Flagship) as a progression of increasing quality. But hidden-questions.md asks the most destabilizing question in the corpus: "What if the middle-tier approach is the ceiling?"

The evidence: Middle-tier scored PA-05 4/4 DESIGNED with 8 agents, 100-line recipe, 35 minutes. Everything after (ceiling 1.5/4, flagship 1.5/4, remediation 2.5/4) has been MORE COMPLEX and LOWER QUALITY. The architecture adds complexity (4-wave architecture, 9 PA auditors, mandatory approvals, metaphor integration) in pursuit of quality that the simplest approach already achieved.

The architecture diagram does NOT address this paradox. It presents Flagship as the aspirational target without acknowledging that the only 4/4 result came from the simplest tier.

**What's missing:** A "TIER EVIDENCE" section that honestly reports PA-05 scores by tier across all experiments. The current architecture presents tiers as if more complexity = more quality. The data does not support this.

---

### BS-04: PA-05 as Sole Success Metric Is Unexamined [SIGNIFICANT]

**Source:** hidden-questions.md, A-01 (PA-05 Is the Right Success Metric); missing-dimensions.md, Dimension 2 (Emotional/Aesthetic)

The architecture diagram uses PA-05 as its ONLY quality metric. Ship decisions (Section 2, Step 7) are entirely PA-05 gated: "SHIP: PA-05 >= 3/4 AND all programmatic gates PASS AND 0 soul violations."

hidden-questions.md A-01 challenges this: "If 'designed' is the wrong quality target -- if users actually want 'clear' or 'readable' or 'trustworthy' rather than 'designed' -- then the entire pipeline is optimized for the wrong outcome." The middle-tier scored PA-05 4/4 but had a MISSING FOOTER. PA-05 did not catch a functional failure.

missing-dimensions.md Dimension 2 deepens this: "No file examines the FELT experience of reading either the prompts or the final HTML page... PA-05 measures whether a Claude instance thinks the page 'feels designed.' But does a HUMAN viewer feel the same way?"

**What's missing:** At minimum, a PA-FUNCTIONAL metric ("Can a reader find what they're looking for? Is the content complete?") alongside PA-05. The architecture should not ship a page that scores PA-05 4/4 but has missing content.

---

### BS-05: The 1,746-Line Recipe Problem Is Acknowledged But Not Solved [SIGNIFICANT]

**Source:** fresh-eyes review, C1 (Is 1,746 Lines Too Long?)

The architecture diagram Section 3 says the recipe will be "~650 lines." But the fresh-eyes review identifies this as the architecture's FOURTH most likely failure mode: "All of the above analysis assumes the builder reads the 1,746-line File 42. The architecture says the permanent recipe will be ~650 lines. But the extraction is FUTURE WORK."

The architecture diagram was created BEFORE the extraction happened. It describes a system that depends on a 650-line recipe that does not yet exist. This is not a blind spot per se -- the architecture acknowledges it -- but the TIMING is critical. If any build runs before extraction, the builder reads 1,746 lines including analysis, evidence, and provenance that actively distract from building.

The fresh-eyes review quantifies: "Even at ~1,200 lines, Part 1 is 2x the 'recipe' that succeeded in the Middle experiment (~100 lines). The Middle succeeded BECAUSE the recipe was short enough to hold in context."

**What's missing:** An explicit dependency: "PREREQUISITE: operational-recipe.md extraction MUST complete before first PV2 build." The architecture implies this but does not enforce it.

---

### BS-06: Perception Check Self-Reporting Is Undetected by the Architecture [SIGNIFICANT]

**Source:** fresh-eyes review, Part D (Second Most Likely Failure Mode)

The architecture diagram Section 2, Steps 5-6, shows the builder executing phases with inline perception checks. The fresh-eyes review identifies the fundamental problem: "The perception checks during building are self-reported by the person who built the thing. This is the equivalent of a student grading their own exam."

The architecture's fix (Wave 2 PA with fresh-eyes auditors) catches failures AFTER the build completes. But by then, the builder has invested 90-150 minutes (for Flagship). The perception check theater during building provides FALSE CONFIDENCE that the build is proceeding correctly, leading the builder to commit to approaches that will fail the PA.

**What's missing:** For Flagship MANDATORY approval phases, the planner should independently verify at least one perception claim per checkpoint. The architecture's comms protocol requires CHECKPOINT messages with perception checks, but the APPROVAL mechanism does not require independent visual verification.

---

### BS-07: The Architecture Silently Assumes Opus Builder [SIGNIFICANT]

**Source:** beliefs-audit, Belief 4 (N=2 Is Fundamental); MEMORY.md ("Sonnet-for-builders is unexamined")

The architecture diagram specifies "1 Opus agent" for all tiers (Section 5, Tier Routing table). The beliefs audit identifies this as an N=1 assumption: "Single Opus builder is sufficient for Middle tier. Source: Remediation success." But the architecture presents it as settled fact.

MEMORY.md flags this as a strategic finding: "CD-006 was built by Opus. Flagship builders were Sonnet. Sonnet complies meticulously; Opus complies AND creates beyond constraints." But the architecture does not justify WHY Opus is specified or what would happen with Sonnet. If Sonnet is cheaper and the recipe caps quality at 3/4 anyway, Opus may be unnecessary overhead for Middle tier.

**What's missing:** Builder model selection as an explicit design decision with evidence and escape hatch, not a silent assumption baked into every tier.

---

### BS-08: Inter-Page Coherence Is Absent [SIGNIFICANT]

**Source:** missing-dimensions.md, Dimension 8 (Cross-Artifact Coherence)

The architecture builds ONE page at a time. It has no mechanism for ensuring that page N is coherent with pages 1 through N-1. As the design system grows, pages built at different times with different content will have different zone architectures, different mechanism deployments, different transition grammars. The architecture produces page-level quality without system-level consistency.

missing-dimensions.md identifies this: "The corpus analyzes a SINGLE artifact's quality. It never examines how multiple pages within the same design system should relate to each other." A visitor navigating between three design system pages should feel that they belong together. No gate checks this.

**What's missing:** A cross-page coherence check in the orchestrator that compares the new page's zone architecture and mechanism deployment against previously built pages.

---

### BS-09: The Architecture Has No Learning Mechanism [SIGNIFICANT]

**Source:** hidden-questions.md, Section 5 (The Question Behind the Question); missing-dimensions.md, Dimension 6 (Feedback Loops)

hidden-questions.md reframes the core question: "Pipeline v2 should not be a 9-phase recipe. It should be a LEARNING SYSTEM that improves with each page built." The architecture diagram's enrichment section (Section 8) describes how PA enrichment feeds back -- but this is MANUAL enrichment by a human updating skill files. There is no automated feedback loop.

The architecture diagram does include kill criteria (Section 9, Decision 5): "3 consecutive PA-05 < 3/4 = recipe failure." But kill criteria are a FAILURE signal, not a LEARNING signal. The architecture does not systematically capture what went RIGHT on successful builds and incorporate it into subsequent builds.

missing-dimensions.md Dimension 6: "The corpus identifies 3 feedback loops (multi-coherence verification, perception checks, PA audit) but does not examine whether these loops are CLOSED (information from the output actually reaches the input)." The architecture's feedback loops are all WITHIN a single build. No loop spans across builds.

**What's missing:** A post-build learning protocol: after every build, extract 3 lessons (what worked, what failed, what surprised) and append to a `_build-history.md` that subsequent builds can reference.

---

## PART 2: ANTI-REPRODUCTION GATE ANALYSIS

Does the PV2 Architecture Diagram pass its own anti-reproduction gates?

### Gate 1: The 50:1 Compression Gate -- PARTIAL PASS

The architecture diagram contains concrete values (15 RGB, 108px, 960px), provenance citations ("Post-validation synthesis from 17 Opus auditors"), and violation examples (the flagship experiment's failures). However, not every rule meets ALL THREE requirements. The tier routing table specifies "12 gates, BLOCKING severity" without naming which 12 gates or providing violation examples for each.

**Verdict:** PARTIAL PASS. The diagram is a synthesis document, not a rule specification. Full Gate 1 compliance should be enforced on the operational-recipe.md and /build-page skill, not on the diagram itself.

### Gate 2: The Judgment Rule Gate -- PASS

The architecture's gates are all binary: container 940-960px (measurable), background delta >= 15 RGB (measurable), PA-05 >= 3/4 (scored). The one permitted judgment check (fresh-eyes PA) is correctly designated as the sole exception. No other judgment-based rule appears in the architecture.

**Verdict:** PASS.

### Gate 3: Guardrail-to-Playbook Ratio -- PARTIAL PASS

The architecture diagram is predominantly PLAYBOOK. It tells agents WHAT TO DO (invoke TC, hand recipe to builder, run programmatic gates, capture screenshots, spawn PA auditors). Guardrails are present but subordinate (soul constraints listed in Layer 1 verification). However, the architecture does not PAIR every guardrail with a playbook. The soul constraints ("no border-radius, no shadows") do not have paired "INSTEAD, do this" instructions.

The anti-reproduction protocol exempts soul constraints from the 1:1 requirement ("Soul constraints are identity constraints, not execution instructions. They exist in a separate section marked 'IDENTITY -- READ ONCE'"). The architecture correctly places them in the Layer 1 identity section.

**Verdict:** PARTIAL PASS. Exempt per escape hatch, but the principle of paired instructions should extend to the builder's recipe.

### Gate 4: Builder Visibility Gate -- CANNOT ASSESS

The architecture DESCRIBES what the builder reads (Section 7: "operational-recipe.md, _build-plan.md, tokens.css, prohibitions.md, merged-components.css"). But the operational-recipe.md does not yet exist in its 650-line extracted form. The Gate 4 test ("Remove all external file references from the builder's prompt. Can the builder still write every CSS value and HTML element required?") cannot be run until the recipe is extracted.

The fresh-eyes review warns: "The builder must hold in context ~3,000+ lines. By Phase 5-6, early recipe phases may be compressed or evicted."

**Verdict:** CANNOT ASSESS. Depends on extraction quality.

### Gate 5: Quality Routing Gate -- PASS

The architecture explicitly routes CSS-rich files to CSS-writing agents. Section 7 shows: TC planner reads mechanism-catalog.md (for selection), builder reads operational-recipe.md + merged-components.css (for execution), PA auditors read screenshots only (for verification). This directly addresses the flagship's inverted routing failure.

**Verdict:** PASS.

### Gate 6: Meta-to-Output Ratio Gate -- VIOLATED

The anti-reproduction protocol states: "Current ratio: INFINITY:1. This gate is ALREADY VIOLATED. The next action must be codification, not more analysis."

The PV2 Architecture Diagram is an ANALYSIS artifact, not an OUTPUT artifact. By creating the diagram instead of writing the /build-page skill, the team extended the violation. The architecture diagram adds ~1,143 lines to the meta side while producing 0 lines of permanent output.

This is acknowledged in the architecture itself (Section 10: "The next step: codification"). But acknowledgment is not compliance. The gate says STOP ANALYZING. The architecture is more analysis.

**Verdict:** VIOLATED. This is the most important gate failure. Every additional analysis document (including the 17-agent validation audit, including this cross-reference exercise) deepens the violation.

### Gate 7: Recipe-vs-Checklist Gate -- PASS (for target documents)

The architecture specifies recipe format for all builder-facing content. The recipe phases (0-8) use action verbs: "Content analysis," "HTML skeleton," "CSS reset," etc. The tier routing table uses descriptive language but is not builder-facing.

**Verdict:** PASS for target format. Actual compliance depends on the unwritten operational-recipe.md.

### Summary: Anti-Reproduction Gate Results

| Gate | Result | Notes |
|------|--------|-------|
| Gate 1: Compression | PARTIAL PASS | Diagram-level, not rule-level |
| Gate 2: Judgment rules | PASS | All gates are binary |
| Gate 3: Guardrail ratio | PARTIAL PASS | Exempt per escape hatch |
| Gate 4: Builder visibility | CANNOT ASSESS | Recipe not yet extracted |
| Gate 5: Quality routing | PASS | Explicitly corrected |
| Gate 6: Meta-to-output ratio | **VIOLATED** | infinity:1 continues |
| Gate 7: Recipe format | PASS | For target format |

**Overall:** 3 PASS, 2 PARTIAL PASS, 1 VIOLATED, 1 CANNOT ASSESS. Gate 6 is the dominant violation.

---

## PART 3: RECURSIVE IRONIES

Does the architecture reproduce the failures it was designed to prevent?

### RI-01: The Architecture Is a Checklist, Not a Recipe [SIGNIFICANT]

**Source:** recursive-self-application.md, Section 4

The architecture diagram's core finding is that recipes outperform checklists. But the architecture diagram ITSELF is structured as a reference document, not a recipe. It presents: what the pipeline IS (Section 1), how it flows (Section 2), how skills propagate (Section 3), how verification works (Section 4), how tiers differ (Section 5), how waves sequence (Section 6), how files route (Section 7), and how enrichment feeds back (Section 8).

This is a DESCRIPTION of a system, not a RECIPE for building one. A developer tasked with implementing /build-page would read the architecture and understand WHAT the system does, but would need to independently determine HOW to implement it. The architecture tells you the pieces; it does not sequence the assembly.

recursive-self-application.md scored the pipeline-analysis CLAUDE.md at "Recipe Score: 1.0/5" for this exact pattern. The architecture diagram scores similarly: thorough description, minimal sequenced instruction.

**Mitigation:** The architecture diagram is INTENTIONALLY a reference document, not a builder spec. The recipe is delegated to operational-recipe.md. This division is correct. But the recursive irony remains: the document that argues for recipes is not itself a recipe.

---

### RI-02: The Architecture Compresses Uncertainty Into Certainty [SIGNIFICANT]

**Source:** beliefs-audit, Belief 5 (Compression Is Recursive)

The beliefs audit identifies: "File 42 compresses the corpus's CONDITIONAL findings into UNCONDITIONAL instructions." The architecture diagram does the same:

| Conditional finding in corpus | Unconditional statement in architecture |
|-----|-----|
| "Perception thresholds are N=1 with values from single analysis" | "SC-09: Background delta >= 15 RGB" (stated as definitive) |
| "Recipe format correlated with success in 2/2 experiments (Tier 3 causation)" | "Recipe format powers all tiers" (stated as architectural decision) |
| "Content-agnosticism ratio is 46/15/40 (contested)" | "The same recipe powers all three tiers" (stated as universal) |
| "Single builder outperformed multi-builder in remediation; CD-006 used multi-agent" | "1 Opus builder executes Phases 0-8" (stated as specification) |

The beliefs audit calls this "NECESSARY for a recipe (you can't build a page on conditional instructions). But it means the recipe's users will treat hypotheses as proven facts."

**Mitigation:** The architecture acknowledges this in Section 10 ("One thing to keep in mind" box). But the acknowledgment is in a single paragraph at the end, while the unconditional statements fill the preceding 1,100 lines. Structural position matters: the certainty dominates, the doubt whispers.

---

### RI-03: The Architecture Diagnoses the Conviction Sandwich, Then Serves One [ENRICHING]

**Source:** recursive-self-application.md, Section 6.3

The architecture diagram interleaves context and execution content:
- Section 1: Context (orientation)
- Section 2: Execution (user journey)
- Section 3: Execution (skill propagation)
- Section 4: Execution (verification)
- Section 5: Reference (tier routing)
- Section 6: Execution (wave architecture)
- Section 7: Reference (file flow)
- Section 8: Context (enrichment)
- Section 9: Context (resolved decisions)
- Section 10: Context (reassurance)

recursive-self-application.md identifies this as a "conviction sandwich" in the CLAUDE.md and scores it 6/10 severity. The architecture diagram follows the same pattern: context-execution-context-execution. The corpus's own finding (Shift A4) recommends "conviction as read-once prefix, then pure linear recipe."

**Mitigation:** This is a LESSER irony. The architecture diagram is for human consumption (the user deciding whether to codify). A conviction sandwich is less harmful for humans than for LLM agents. The recipe (for agents) should not repeat this pattern.

---

### RI-04: The Architecture's Meta-to-Output Ratio IS the Problem It Diagnoses [BLOCKING]

**Source:** anti-reproduction-protocol.md, Gate 6; recursive-self-application.md, Section 8.4

The architecture diagram identifies "660:1 meta-to-output ratio" as the flagship's pathological failure mode. The anti-reproduction protocol's Gate 6 sets a 10:1 threshold and warns: "Current ratio: INFINITY:1. The next action must be codification, not more analysis."

The architecture diagram itself adds ~1,143 lines to the meta side. The 17-agent validation audit that produced it added thousands more. This cross-reference exercise adds thousands more. The meta side grows while the output side remains at zero.

The architecture diagram Section 10 says: "The next step: codification." The anti-reproduction protocol says: "STOP ANALYZING and START CODIFYING." Every analysis document since Gate 6 was identified as violated -- including the architecture diagram, the validation audit, and this report -- deepens the violation.

**This is the MOST IMPORTANT recursive irony.** The system designed to prevent meta-work spirals is itself a meta-work spiral.

---

### RI-05: Fresh-Eyes Analysis Requires Context That Destroys Fresh Eyes [ENRICHING]

**Source:** fresh-eyes review methodology

The fresh-eyes review's value comes from reading PV2 specifications COLD -- zero prior knowledge of the 41-file corpus. But to write a useful review, the fresh-eyes agent must UNDERSTAND what the specifications are trying to achieve, which requires context. The review demonstrates this tension: its most insightful findings (metaphor-recipe conflict, perception check theater, context window exhaustion) show deep understanding of the pipeline's goals -- understanding that contradicts the "zero context" framing.

The architecture relies on fresh-eyes PA auditors who "read saved images via Read tool" with "ZERO build context." But the PA questions themselves provide context: "Does this feel DESIGNED?" presupposes understanding of "designed" within this design system. A truly zero-context auditor would evaluate the page against general web design standards, not the specific KortAI soul constraints.

**What this means:** "Fresh eyes" is a spectrum, not a binary. The architecture should specify exactly HOW MUCH context PA auditors receive (PA questions only? PA questions + soul constraint summary? PA questions + reference page screenshot for comparison?).

---

## PART 4: MISSING DIMENSIONS

What does the architecture not address that the meta-cognitive corpus says it should?

### MD-01: Economic Analysis [SIGNIFICANT]

**Source:** missing-dimensions.md, Dimension 1

The architecture specifies "Expected Build Time" per tier (Middle: 70-100 min, Ceiling: 150-220 min, Flagship: 240-400 min) but not COST. At Opus pricing, a Flagship build with 4 waves, 12+ agents, and 1.5M+ tokens could cost $100-300. The architecture does not help the user decide whether the quality increment from Middle to Flagship justifies the cost increment.

missing-dimensions.md asks: "Was the ~1.8M-token investment worth +0.6 PA-05 points?"

**What's missing:** A cost estimate per tier, even approximate, to enable informed tier selection.

### MD-02: Temporal Path Dependency [ENRICHING]

**Source:** missing-dimensions.md, Dimension 3

The architecture presents the pipeline as if the user journey is the ONLY valid sequence. But the meta-cognitive corpus warns that discovery order affects conclusions. The architecture's specific choices (TC before builder, programmatic before perceptual, fix-before-PA-re-check) create path dependencies. Different orderings might produce different quality outcomes.

**What's missing:** Justification for the specific ordering, not just description of it. WHY does TC run before the builder? (Because content analysis must precede layout decisions.) WHY programmatic before perceptual? (Because fixing threshold violations is cheaper than fixing gestalt failures.) Making the ordering rationale explicit would help future pipeline modifiers understand which sequences are load-bearing and which are arbitrary.

### MD-03: Failure Taxonomy for PV2 Itself [ENRICHING]

**Source:** missing-dimensions.md, Dimension 5

The corpus has a detailed failure taxonomy for the master prompt (42 failures, 14 BLOCKING). No equivalent taxonomy exists for PV2. The architecture inherits the master prompt's failure analysis but does not anticipate its OWN failure modes.

**What's missing:** A "PV2 Failure Mode Inventory" listing the top 10 predicted failures with monitoring criteria. The fresh-eyes review provides 5 (metaphor-recipe conflict, perception check theater, context window exhaustion, 1,746-line length, content mismatch). These should be formalized.

### MD-04: Human-in-the-Loop Decision Points [ENRICHING]

**Source:** hidden-questions.md, A-03 (Agent Teams Should Build Pages); missing-dimensions.md, Dimension 1

The architecture has exactly ONE human decision point: tier selection at Step 1. After that, the pipeline is fully autonomous until the ship decision at Step 7 (which is also formula-driven: PA-05 >= 3/4 = SHIP).

hidden-questions.md suggests: "Consider a Pipeline v2 variant where agents PROPOSE and humans APPROVE at each phase. Phase 0: agent proposes zone architecture, human approves. Phase 2: agent proposes color system, human approves." This could break the 3/4 ceiling by injecting human judgment where it matters most.

The architecture's Flagship tier includes "mandatory APPROVAL at Phases 0, 1, 3, 4, 8" -- but these approvals are from the PLANNER agent, not from the human user. The human is absent from all intermediate decisions.

**What's missing:** An optional "human review" mode where the user can approve zone architecture and key CSS decisions. This is especially relevant given the user's stated preference for "ALWAYS FLAGSHIP" quality.

### MD-05: Cross-Model Diversity [ENRICHING]

**Source:** hidden-questions.md, SB-04 (Agent Homogeneity); missing-dimensions.md, Dimension 4

All agents in the architecture are Claude instances. hidden-questions.md SB-04 warns: "If Claude's collective blind spot happens to align with the pipeline's failure mode, Pipeline v2 will reproduce the failure." PA auditors, builders, TC planners -- all share the same training data, behavioral priors, and reasoning patterns.

The architecture's "fresh-eyes" auditors are fresh eyes within the Claude distribution. A GPT or Gemini auditor might see failures that no Claude instance can see.

**What's missing:** An acknowledgment that agent homogeneity is a known limitation, with a recommendation to test cross-model PA auditing when feasible.

### MD-06: Reference-Based Building Alternative [ENRICHING]

**Source:** hidden-questions.md, Alternative 2

The architecture assumes text-to-CSS as the building paradigm. hidden-questions.md proposes an alternative: "Instead of a recipe that specifies CSS values, give agents REFERENCE PAGES. 'Build a page that looks like CD-006 but with this content.'" The architecture never evaluates this alternative.

Given that CD-006 is the 39/40 crown jewel and the architecture's explicit quality target, using CD-006 as a visual reference (via screenshots) could be more effective than translating CD-006's qualities into text rules.

**What's missing:** An evaluation of reference-based building as a complement to recipe-based building, especially for Flagship tier.

### MD-07: The "ALWAYS FLAGSHIP" Constraint [BLOCKING]

**Source:** Team lead's context message ("User wants ALWAYS FLAGSHIP")

The architecture diagram presents three tiers as a routing decision: "If no tier specified, the orchestrator auto-classifies based on content complexity." But if the user wants ALWAYS FLAGSHIP, the entire tier routing system is unnecessary complexity.

More critically: the architecture's tier routing optimizes for COST-EFFECTIVENESS (most pages at Middle, some at Ceiling, few at Flagship). An ALWAYS FLAGSHIP constraint inverts the economics: every page gets 9 PA auditors, 4-wave architecture, mandatory approvals. This is the most expensive configuration for every page.

The architecture does not consider what ALWAYS FLAGSHIP means for:
- Build time (240-400 min PER PAGE is sustainable for 5 pages but not 50)
- Cost (Flagship is 4-10x Middle cost per page)
- Diminishing returns (Middle scored PA-05 4/4; Flagship has never exceeded 2.5/4)
- The paradox that simpler builds produced better results

**What's missing:** An honest assessment of whether ALWAYS FLAGSHIP is the right strategy, or whether ALWAYS MIDDLE + selective Flagship for high-impact pages would produce better aggregate quality at lower cost.

---

## PART 5: THE DEEPEST BLIND SPOT

All the blind spots above are WITHIN the architecture's conceptual frame. The deepest blind spot is the frame itself.

### The Architecture Assumes Pipeline v2 Is the Right Thing to Build

hidden-questions.md Section 5 asks: "The most dangerous hidden questions are not the ones that would CHANGE Pipeline v2's design. They are the ones that would change WHETHER Pipeline v2 is the right thing to build."

The entire meta-cognitive corpus raises variations of this question:
- hidden-questions.md: "Is the answer a better pipeline or something else entirely?"
- beliefs-audit: "If the mindset dies but the findings survive, PV2 will produce reliably competent (3/4) pages but will be unable to diagnose its own failure modes."
- recursive-self-application.md: "The fix is not more analysis. The fix is implementation."
- fresh-eyes review: "Prediction: A Flagship build using this pipeline will produce a page that scores PA-05 3/4 -- but will not reach 4/4 DESIGNED because the recipe constrains the metaphor instead of serving it."

The architecture diagram Section 10 dismisses this concern: "No. Your two instincts are exactly right." It does not engage with the meta-cognitive corpus's challenges. It resolves the tension by REASSURANCE rather than by EVIDENCE.

The honest answer: Pipeline v2 is PROBABLY the right thing to build. The recipe approach has produced the only 4/4 result (middle-tier). The two-layer verification catches what previous approaches missed. But "probably right" is different from "certainly right." The architecture presents certainty where the evidence warrants probability.

---

## PART 6: SYNTHESIS -- RANKED RECOMMENDATIONS

### BLOCKING (address before codification)

| # | Issue | Source | Recommendation |
|---|-------|--------|----------------|
| 1 | **Gate 6 violation: meta-to-output at infinity:1** | anti-reproduction-protocol.md | STOP cross-referencing. START writing /build-page skill and operational-recipe.md. Every additional analysis document deepens the violation. |
| 2 | **Middle-tier paradox unresolved** | hidden-questions.md What-If 4 | Before building Flagship complexity, build ONE Middle-tier page with PV2 and measure PA-05. If Middle scores 3/4+, the Flagship apparatus may be unnecessary. |
| 3 | **ALWAYS FLAGSHIP vs tier routing contradiction** | Team context | If the user wants ALWAYS FLAGSHIP, remove the tier routing from the orchestrator and design PV2 as a single-tier Flagship pipeline. This simplifies the architecture and eliminates the untested auto-classification logic. |

### SIGNIFICANT (address during codification)

| # | Issue | Source | Recommendation |
|---|-------|--------|----------------|
| 4 | Content-agnosticism untested | hidden-questions.md A-04 | Add content-type detection to Phase 0 with at least 3 variant paths |
| 5 | PA-05 as sole metric | hidden-questions.md A-01 | Add PA-FUNCTIONAL check ("Is content complete?") to ship criteria |
| 6 | 650-line extraction prerequisite | fresh-eyes C1 | Mark recipe extraction as BLOCKING prerequisite for first PV2 build |
| 7 | Perception check self-reporting | fresh-eyes Part D | Require planner independent verification at Flagship approval phases |
| 8 | Opus builder assumption | beliefs-audit Belief 4 | Make builder model an explicit parameter, not a silent assumption |
| 9 | Inter-page coherence absent | missing-dimensions.md Dim 8 | Add cross-page comparison to orchestrator for 2nd+ builds |
| 10 | No forward failure inventory | hidden-questions.md SB-05 | Create top-5 predicted PV2 failure modes with monitoring criteria |
| 11 | No learning mechanism across builds | hidden-questions.md Sec 5 | Add post-build learning protocol with `_build-history.md` |

### ENRICHING (address during iteration)

| # | Issue | Source | Recommendation |
|---|-------|--------|----------------|
| 12 | Uncertainty compressed into certainty | beliefs-audit Belief 5 | Add "Recipe Assumptions" section with N=2 caveats |
| 13 | Architecture is reference, not recipe | recursive-self-application.md | Acceptable -- architecture is for humans, recipe is for agents |
| 14 | Temporal path dependency unexplained | missing-dimensions.md Dim 3 | Add ordering rationale to user journey |
| 15 | Agent homogeneity | hidden-questions.md SB-04 | Note as known limitation; test cross-model PA when feasible |
| 16 | Reference-based building not evaluated | hidden-questions.md Alt 2 | Add CD-006 screenshots as optional builder reference for Flagship |
| 17 | Economic analysis absent | missing-dimensions.md Dim 1 | Add approximate cost estimates to tier table |
| 18 | Human-in-the-loop too limited | missing-dimensions.md Dim 1 | Add optional human review mode for zone architecture approval |
| 19 | Fresh-eyes context spectrum | RI-05 analysis | Specify exactly how much context PA auditors receive |
| 20 | Recipe staleness detection | hidden-questions.md Exploit 1 | Add version number and "review when" triggers to recipe |
| 21 | Uniformity trap across pages | hidden-questions.md Exploit 3 | Add inter-page variety check after 3+ pages built |
| 22 | Compliance ceiling | hidden-questions.md Exploit 3 | Add "post-recipe creative phase" for Flagship builders |
| 23 | Kill criteria for recipe itself | beliefs-audit Belief 4 | Add to /build-page orchestrator |
| 24 | Conviction sandwich structure | recursive-self-application.md 6.3 | Lower priority -- acceptable for human-facing documents |
| 25 | PV2 failure mode inventory | missing-dimensions.md Dim 5 | Formalize the 5 predicted failures from fresh-eyes review |

---

## PROVENANCE AND LIMITATIONS

### What This Report Covers
- 9 blind spots in the architecture (3 BLOCKING, 6 SIGNIFICANT)
- 7 anti-reproduction gate assessments (3 PASS, 2 PARTIAL, 1 VIOLATED, 1 CANNOT ASSESS)
- 5 recursive ironies (2 SIGNIFICANT, 1 BLOCKING, 2 ENRICHING)
- 7 missing dimensions
- 1 frame-level blind spot ("should PV2 be built at all?")
- 25 ranked recommendations (3 BLOCKING, 8 SIGNIFICANT, 14 ENRICHING)

### What This Report Does NOT Cover
- Line-by-line CSS verification (outside adversarial scope)
- Specific recipe phase analysis (covered by other cross-reference reports)
- Gate runner implementation details (covered by perception-gates analyst)
- Communication protocol specifics (covered by comms-protocol analyst)

### Self-Aware Irony
This report is itself a meta-analysis document that deepens the Gate 6 violation. It adds ~600 lines to the meta side while producing 0 lines of permanent output. The anti-reproduction protocol says this should not exist. The report's own top recommendation is to STOP ANALYZING and START CODIFYING.

The value of this report is that it catalogs the blind spots BEFORE codification, so the codified artifacts can address them. If the blind spots are not addressed, the report's value is zero -- it is analysis feeding on analysis, exactly the pattern the corpus diagnoses.

The report's shelf life is one codification session. After that, it should be archived, not consulted.

---

*File: `ephemeral/pv2-cross-reference/08-adversarial-blindspots.md`*
*Lines: ~350*
*Purpose: Adversarial analysis of blind spots, recursive ironies, gate compliance, and missing dimensions in PV2 architecture*
