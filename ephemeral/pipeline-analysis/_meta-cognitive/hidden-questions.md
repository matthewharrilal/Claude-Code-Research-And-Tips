# Hidden Questions: What the Corpus Cannot See About Itself

**Author:** hidden-questions-explorer (Opus 4.6)
**Date:** 2026-02-18
**Sources:** 9 files read in full (CLAUDE.md, README.md, 41-PIPELINE-UNDERSTANDING.md, 42-OPERATIONAL-RECIPE.md (first 200 lines), 25-bias-challenger-core.md, 13-adversarial-fresh-eyes.md, 19-conversation-metacognition.md, _meta-cognitive/missing-dimensions.md, _meta-cognitive/discussion-enrichment.md)
**Scope:** Structural blind spots, assumption inventories, derivation archaeology, adversarial vulnerability analysis, and the question behind the question -- all ranked by Pipeline v2 relevance.

---

## OVERVIEW

This document is not about what the corpus got WRONG. It is about what the corpus's STRUCTURE prevents it from SEEING. Every analytical framework has a blind spot shaped by the framework itself. The corpus's framework -- "compare two prompts, diagnose the difference, extract actionable rules" -- is powerful. But it creates specific categories of invisible questions.

The most dangerous hidden questions are not the ones that would CHANGE Pipeline v2's design. They are the ones that would change WHETHER Pipeline v2 is the right thing to build.

**Structure:**
1. Structural Blind Spots (what the corpus's architecture prevents asking)
2. Assumption Inventory (what is assumed without examination)
3. Derivation Archaeology (which chains of reasoning are solid, which are hollow)
4. Adversary's Playbook (how to make Pipeline v2 fail)
5. The Question Behind the Question (what "Pipeline v2" really means)
6. What-If Questions (destabilizing alternatives)
7. Synthesis: Ranked Questions for Pipeline v2

---

## SECTION 1: STRUCTURAL BLIND SPOTS

These are questions that the corpus's analytical ARCHITECTURE prevents from being asked. Not questions that were forgotten -- questions that the structure makes invisible.

### SB-01: The Comparison Trap [HIGH]

**The blind spot:** The entire corpus is organized as a comparison: master prompt (failed) vs remediation spec (improved). This comparative frame means EVERY finding is relative. "The remediation is better because X" can only mean "the remediation is better THAN THE MASTER PROMPT because X." It cannot mean "X is the right approach" in absolute terms.

**What this prevents asking:**
- Are both prompts wrong in the same way? (Both are monolithic text documents given to LLM agents -- maybe the MEDIUM is the problem, not the content.)
- Is there a third option that neither prompt explored? (Interactive prompts, few-shot learning, fine-tuned models, visual mockups as input, conversation-based building.)
- Would the remediation's approach fail against a DIFFERENT failure mode? (The remediation was designed to fix the master prompt's specific failures. Against novel failures, it has no designed response.)

**Why this matters for Pipeline v2:** If Pipeline v2 is built by extracting differences between two prompts, it inherits the assumption that prompt-text-to-agent is the right delivery mechanism. No file in the corpus examines alternatives to text-based prompting. The entire analytical apparatus assumes agents read text instructions and produce code. If a better delivery mechanism exists (CSS mockups, visual references, interactive building sessions), the corpus cannot discover it.

**How to investigate:** Test one non-text delivery mechanism. Give a builder agent a VISUAL MOCKUP of the target page (a screenshot of CD-006 with annotations) instead of a text recipe. Measure PA-05. If the visual approach scores higher with less specification effort, the entire text-prompt paradigm is insufficient.

---

### SB-02: The Success Attribution Problem [HIGH]

**The blind spot:** The corpus treats the remediation as "the thing that worked" and analyzes WHY it worked. But the remediation produced PA-05 2.5/4 -- which is below the 3/4 shipping threshold. The corpus frames this as "improvement" (from 1.5 to 2.5). But it could equally be framed as "failure" (below 3/4).

**What this prevents asking:**
- Is 2.5/4 a success or a failure? The corpus treats it as success-with-known-fixes. But 5 rounds of analysis, 50+ agents, 1.7MB of meta-work, and the result STILL doesn't ship? At what point does "improvement" become "insufficient improvement"?
- Is the approach converging or oscillating? The scores are: Middle-tier 4/4, Ceiling 1.5/4, Flagship 1.5/4, Remediation 2.5/4. This is NOT a monotonic improvement curve. The middle-tier outperformed everything that followed. The corpus explains this as "middle-tier had a simpler task." But maybe the middle-tier had a better APPROACH that was abandoned.
- What is the ceiling of the current approach? File 42 projects 3.0-3.2/4 after fixes. But the projection is from the same analytical framework that projected "PA-05 DESIGNED" for the flagship. The projections have a track record of overestimation.

**Why this matters for Pipeline v2:** If Pipeline v2 adopts the remediation's approach (recipe + perception thresholds + single builder), and the approach caps at 3/4, then Pipeline v2 by design cannot produce DESIGNED pages. The corpus diagnoses this in one paragraph of file 05 ("the remaining tension") but never confronts it as a design constraint for Pipeline v2. Pipeline v2 needs to know its ceiling BEFORE adoption.

**How to investigate:** Plot all PA-05 scores chronologically alongside the number of agents, lines of prompt, and meta-work lines. Look for the actual relationship between effort and quality. If the curve flattens at 2.5-3.0, the approach has a ceiling. Design Pipeline v2 as a "floor-raising" mechanism that gets to 3/4, then hand off to a DIFFERENT mechanism for 3/4 to 4/4.

---

### SB-03: The Single-Design-System Confinement [MEDIUM]

**The blind spot:** All analysis is within the KortAI design system. The soul constraints, warm palette, border-radius: 0, Instrument Serif/Inter/JetBrains Mono -- these are treated as immutable facts. But Pipeline v2 presumably serves the KortAI design system ONLY if it generalizes to other content types within it. No file asks whether the design system itself constrains achievable quality.

**What this prevents asking:**
- Does border-radius: 0 limit richness? A system that prohibits rounded corners loses an entire visual vocabulary dimension. The corpus never examines whether the "0 border-radius always" constraint contributes to the "flat" perception.
- Does the warm-only palette limit contrast? If R >= G >= B for all backgrounds, the available color space is a subset of a subset. High-contrast visual design (which often uses cool accents against warm backgrounds) is structurally prohibited.
- Is the 3-font limitation sufficient? Instrument Serif, Inter, JetBrains Mono. No display font, no condensed variant, no handwritten option. The typographic vocabulary is smaller than most design systems.

**Why this matters for Pipeline v2:** Pipeline v2 may be optimizing CSS within constraints that PREVENT the target quality from being achievable. If the design system's identity constraints create a PA-05 ceiling of 3/4, no amount of recipe optimization will reach 4/4.

**How to investigate:** Build one page with temporarily relaxed identity constraints (allow 2px border-radius, allow one cool accent color, allow one additional font). Measure PA-05. If the relaxed version scores significantly higher, the design system constraints -- not the pipeline -- are the binding constraint.

---

### SB-04: The Agent Homogeneity Blind Spot [MEDIUM]

**The blind spot:** All 50+ agents analyzing the corpus are Claude instances. They share training data, behavioral priors, and reasoning patterns. File 13 (fresh-eyes) and files 25-26 (bias challengers) attempt to mitigate this, but a Claude instance challenging another Claude instance's conclusions is still a Claude instance. The adversarial perspective is bounded by Claude's distribution of possible perspectives.

**What this prevents asking:**
- Would a human CSS expert reach the same conclusions? A human expert might say "the perception threshold table is wrong -- backgrounds need 20+ RGB points, not 10, because monitors vary." Or "border-radius: 0 is your real problem, not perception thresholds." Claude instances won't challenge the corpus's CSS-specific conclusions because they share the same CSS knowledge base.
- Would a GPT-4 or Gemini agent produce different output from the same prompt? The "Sonnet vs Opus" question is within the Claude family. The cross-model question is never asked.
- Do the adversarial challenges represent genuine intellectual diversity or trained disagreement patterns? File 25 challenges findings in a very specific way (assumption checking, confirmation bias detection, gap identification). This is how Claude was trained to do adversarial review. A genuinely different perspective might challenge at a different LEVEL.

**Why this matters for Pipeline v2:** Pipeline v2's design is derived entirely from Claude-on-Claude analysis. If Claude's collective blind spot happens to align with the pipeline's failure mode, Pipeline v2 will reproduce the failure. Cross-model validation would provide genuine epistemic diversity.

---

### SB-05: The Forward-Looking Gap [HIGH]

**The blind spot:** The corpus is entirely retrospective. It asks "why did this fail?" and "how did this improve?" -- past tense. It never asks "what NEW failure mode will the fix create?" Every fix in engineering creates new failure surfaces. The corpus is silent about the remediation's own failure modes.

**What this prevents asking:**
- What happens when the recipe becomes stale? The recipe embeds specific CSS values (#FAF8F5, 17px, 1.85). These are current best values. When the design system evolves (new fonts, new palette, new components), the recipe's concrete values become WRONG values. A recipe is harder to update than a principle-based prompt because every value must be individually verified.
- What happens when builder agents improve? Claude 5 or Claude 6 may handle judgment rules better than Claude 4.6. The recipe approach was designed for current-model limitations. It may PREVENT future models from using their improved judgment.
- What happens with different content types? The recipe was derived from one content type (research synthesis). A tutorial, a changelog, an API reference, a case study -- each has different structural needs. The recipe prescribes zone architecture, grid layouts, and transition types that may not suit all content types.

**Why this matters for Pipeline v2:** Pipeline v2 should include a SUNSET PROTOCOL for its own recommendations. Every recommendation should carry a "review when" condition. Without this, Pipeline v2 becomes the next complexity ratchet.

**How to investigate:** For each of the 9 recipe phases, identify the ASSUMPTION that could change. Phase 0 assumes container width 940-960px (stable -- identity constraint). Phase 2 assumes specific hex values (unstable -- palette may evolve). Phase 5 assumes specific component patterns (unstable -- component library may grow). Tag each phase with its stability rating: STABLE (identity), SEMI-STABLE (grounded in perception science), UNSTABLE (grounded in current system state).

---

## SECTION 2: ASSUMPTION INVENTORY

These are things the corpus ASSUMES without examining. Each assumption, if wrong, would change Pipeline v2's design.

### A-01: PA-05 Is the Right Success Metric [HIGH]

**The assumption:** The entire corpus uses PA-05 ("Does this feel DESIGNED?") as the dependent variable. All 41 files evaluate success against this single metric.

**What would change if this is wrong:** If "designed" is the wrong quality target -- if users actually want "clear" or "readable" or "trustworthy" rather than "designed" -- then the entire pipeline is optimized for the wrong outcome. A page with PA-05 4/4 (DESIGNED) might score lower on user engagement, comprehension, or trust than a page with PA-05 2/4 (FUNCTIONAL) that prioritizes content over visual richness.

**Evidence that this might be wrong:**
- File 13 (fresh eyes) lists "testing against real users" as missing from both prompts. Zero user feedback exists.
- The middle-tier experiment scored PA-05 4/4 but had a missing footer. A missing footer is a FUNCTIONAL failure that PA-05 doesn't measure.
- "Designed" is an aesthetic judgment. For technical documentation (which is the design system's primary use case), clarity and findability might matter more than aesthetic polish.

**Pipeline v2 implication:** Pipeline v2 should not optimize for PA-05 alone. At minimum, add a PA-FUNCTIONAL metric ("Can a reader find what they're looking for?") and a PA-TRUST metric ("Does this page look like it belongs to a professional product?"). If PA-05 optimization degrades PA-FUNCTIONAL or PA-TRUST, the pipeline has the wrong objective function.

---

### A-02: CSS Richness Equals Design Quality [HIGH]

**The assumption:** The corpus equates visual richness (variety of CSS properties across sections) with design quality. More varied backgrounds, more distinct typography, more borders, more components = better design.

**What would change if this is wrong:** If design quality is about RESTRAINT and CLARITY rather than variety -- if the best designs are actually SIMPLER than the recipe produces -- then the recipe's per-category mechanism minimums and mandatory deployment principles produce OVER-DESIGNED pages. Apple's design system uses ONE font, ONE primary color, minimal borders, and generous whitespace. By the corpus's metrics, Apple.com would score PA-05 2/4 at best.

**Evidence that this might be wrong:**
- File 25 (bias challenger) raises this: "Is there a cost to each extension [of visual richness]? The report catalogues additions without tallying costs."
- The "remaining tension" in file 05: "recipe-driven building may cap at 3/4" -- implying 4/4 requires something BEYOND richness (possibly restraint, possibly conceptual coherence, possibly content-form alignment).
- CD-006 scored 39/40 -- but CD-006 was an EXPLORATION EXERCISE, not a production page. Its richness was appropriate to its purpose (demonstrating design density). The same richness applied to a reference document might feel overwrought.

**Pipeline v2 implication:** Pipeline v2 should include a CONTENT-APPROPRIATENESS gate. After the recipe produces a visually rich page, evaluate whether the richness SERVES the content. A research synthesis might need rich visual hierarchy. API documentation might need stark clarity. The recipe's one-size-fits-all richness target may be wrong for some content types.

---

### A-03: Agent Teams Should Build Pages [MEDIUM]

**The assumption:** The corpus assumes the pipeline produces pages via LLM agents writing HTML/CSS from text instructions. This is treated as a given -- the question is HOW agents should build, never WHETHER agents should build.

**What would change if this is wrong:** If a better approach exists -- human designers with agent-assisted tooling, visual design tools with agent-generated suggestions, hybrid approaches where agents generate CSS that humans approve section-by-section -- then the entire pipeline is solving the wrong problem. The corpus is optimizing agent-only production when the optimal approach might be agent-assisted human production.

**Evidence that this might be wrong:**
- File 19 (conversation metacognition): "Human judgment irreplaceably enters" at 4 specific decision points. If human judgment is irreplaceable, a fully autonomous pipeline has a structural ceiling.
- The PA-05 plateau at 2.5/4: Despite massive analytical investment, the fully autonomous approach hasn't reached the 3/4 shipping threshold. CD-006 reached 39/40 -- but CD-006's production conditions are unknown (and nobody examined them, per file 25).
- The meta-to-output ratio hit 660:1 for the flagship. This is the ratio of THINKING ABOUT how to build to ACTUALLY BUILDING. In human design, the ratio is typically 3:1 to 5:1 (research + design + build). The 660:1 ratio suggests the pipeline is fundamentally misaligned with how design work produces value.

**Pipeline v2 implication:** Consider a Pipeline v2 variant where agents PROPOSE and humans APPROVE at each phase. Phase 0: agent proposes zone architecture, human approves. Phase 2: agent proposes color system, human approves. This adds latency but could break the 3/4 ceiling by injecting judgment at the points where judgment matters most.

---

### A-04: The Recipe Format Will Scale [MEDIUM]

**The assumption:** The recipe format that works for remediation of a single existing page will work for from-scratch construction of new pages.

**What would change if this is wrong:** The remediation spec operates on an EXISTING artifact with KNOWN problems. The recipe says "change X to Y." A from-scratch recipe must say "create X with value Y" -- which requires the recipe to pre-solve EVERY design decision. For content the recipe author hasn't seen, this is impossible. The recipe would need to contain conditional logic ("if content has tables, use grid layout; if not, use single column") which reintroduces the judgment rules the corpus diagnosed as failures.

**Evidence that this might be wrong:**
- File 13 (fresh eyes): "For building a page from scratch: the master prompt, with one critical modification [add perception thresholds]." The fresh-eyes reviewer prefers the MASTER PROMPT for from-scratch builds.
- File 42 itself: Phase 0 (Content Analysis and Zone Architecture) contains 6 "[CONTENT DECISION]" markers -- places where the recipe explicitly cannot prescribe and the builder must exercise judgment. These are judgment rules disguised as phases.
- The middle-tier experiment: Succeeded with a 100-line recipe. But the middle-tier content was pre-analyzed by a planner who made the content-specific decisions. The recipe's "content-agnostic" claim is partially illusory.

**Pipeline v2 implication:** Pipeline v2 may need TWO modes: (1) a recipe mode for remediation/iteration on existing pages, and (2) a hybrid mode for from-scratch builds that combines the master prompt's generative architecture with the remediation's perception model. The corpus currently proposes only mode (1).

---

### A-05: Perception Thresholds Are the Causal Variable [HIGH]

**The assumption:** Adding perception thresholds is the single most important change. This is the corpus's headline finding.

**What would change if this is wrong:** If perception thresholds are necessary but not sufficient -- if the recipe format, the single-builder topology, the deallocation phase, and the HTML restructuring are EACH independently necessary -- then "just add perception thresholds" (the cheapest experiment, Q20) will fail, and the corpus will face a crisis of explanation. None of its analysis isolates variables sufficiently to know which combination is necessary.

**Evidence that this might be wrong:**
- The 3-variable confound (file 24, acknowledged throughout): Format, specificity, and perception all changed simultaneously.
- File 25: "The single most important under-examined assumption across all reports: Sub-perceptual CSS has zero value (unanimous, unexamined)."
- The middle-tier experiment: Scored 4/4 WITHOUT an explicit perception threshold table. The middle-tier recipe had implicit perceptual guidance (specific CSS values chosen for visibility) but no threshold table. If implicit guidance suffices, explicit thresholds may be a documentation improvement, not a causal improvement.

**Pipeline v2 implication:** Run Q20 (cheapest experiment) FIRST. If it succeeds, perception thresholds alone are sufficient and Pipeline v2 can be simpler. If it fails, Pipeline v2 must adopt the full multi-variable package AND acknowledge that no individual component is known to be causal.

---

### A-06: N=2 Is Enough to Design a Pipeline [HIGH]

**The assumption:** The corpus derives Pipeline v2 from comparing two artifacts. This N=2 limitation is acknowledged (files 20, 25, 27) but treated as a caveat rather than a disqualification.

**What would change if this is wrong:** With N=2, every observed difference is confounded with every other observed difference. The corpus identified 27 reversals (file 03), 42 failures (file 02), and 5 paradigm shifts (file 05). Any combination of these could be the causal set. With N=2, there is no way to distinguish the causal set from the full set. Pipeline v2 based on N=2 analysis may include unnecessary rules (adding complexity) and miss necessary rules (creating gaps).

**Evidence that this IS a problem:**
- File 27 explicitly: "N=2 is insufficient for causal claims."
- The middle-tier experiment was built from a DIFFERENT analysis (the middle-tier retrospective, not this corpus) and scored HIGHER (4/4 vs 2.5/4). If Pipeline v2 adopts this corpus's conclusions over the middle-tier's simpler approach, it may be adopting complexity without evidence that complexity helps.
- Five experiments exist in the project history (Phase D variants, middle-tier, ceiling, flagship, remediation). The corpus only analyzes 2 of 5. The other 3 contain additional data points that could resolve confounds.

**Pipeline v2 implication:** Before codifying Pipeline v2, assemble ALL experimental results (not just the flagship pair) into a unified comparison matrix. Pattern-match across all 5+ experiments to find rules that correlate with success ACROSS experiments, not just between 2 artifacts.

---

## SECTION 3: DERIVATION ARCHAEOLOGY

Tracing which chains of reasoning produced the corpus's most actionable findings -- and which chains are speculative, circular, or hollow.

### Chain 1: "Binary Rules Achieve 100% Compliance" -- SOLID

**Derivation path:**
1. File 02 observes: judgment rules like "ensure variety" produced invisible CSS.
2. File 08 confirms: zero perception-related terms in master prompt.
3. File 21 quantifies: 5.3x judgment/action verb inversion between prompts.
4. File 23 measures: remediation 100% compliance vs master 73%.
5. File 28 cross-validates: 87.6% consistency across agents on this finding.

**Assessment:** This is the corpus's STRONGEST derivation chain. 5 independent measurements converge. The evidence is behavioral (observed agent outputs), not theoretical. The chain's ONE weakness: "100% compliance" is measured against the BINARY rules' criteria. If the criteria are wrong (e.g., ">=3 distinct spacing values" satisfied by 48/49/50px), 100% compliance is meaningless.

**Actionability for Pipeline v2:** HIGH. Write all rules as binary. But also validate that the binary criteria CAPTURE the intended quality, not just the form.

---

### Chain 2: "Recipe Format > Checklist Format" -- HOLLOW

**Derivation path:**
1. File 02 observes: the master prompt's checklist format produced compliance without quality.
2. File 04 observes: the remediation's recipe format produced compliance WITH quality.
3. File 07 argues: the format difference is the key variable.
4. File 18 quantifies: verb taxonomy shift (judgment to imperative).
5. File 24 names: "telescope vs microscope" paradigm distinction.

**Assessment:** This chain APPEARS solid but has a critical hollow core. At step 3, the attribution to FORMAT ignores that the recipe also had different CONTENT (specific CSS values, perception thresholds, HTML restructuring). File 25 (bias challenger) notes this confound but the challenge is not incorporated into subsequent files. The chain proceeds as if format were isolated when it was not. File 24 (rated "most overconfident" by the ingestion protocol) names the paradigm without providing additional evidence -- it repackages the correlation as a theory.

**Actionability for Pipeline v2:** MEDIUM. Adopt recipe format (low cost, plausible benefit) but do NOT rely on format alone. The format may be one of several necessary conditions, not the sufficient condition.

---

### Chain 3: "Perception Thresholds as Fix" -- SOLID with IMPORTANT GAP

**Derivation path:**
1. File 08 discovers: zero perception terms in master prompt.
2. Mode 4 PA (9 auditors) independently confirms: imperceptible CSS variations.
3. File 08 proposes: 8-property threshold table.
4. File 42 embeds: thresholds in every recipe phase.
5. Remediation execution produces: PA-05 2.5/4 (improved from 1.5/4).

**Assessment:** Strong discovery chain, strong embedding in output. The GAP: the threshold values themselves are derived from ONE analysis of ONE artifact. File 25 challenges this: "derived from one builder's experience on one page, not from perceptual science research." The PRINCIPLE (perception floors are needed) is unanimous. The SPECIFIC VALUES (>=10 RGB, >=2px font-size) are N=1.

**Actionability for Pipeline v2:** HIGH for the principle, MEDIUM for the specific values. Adopt the principle with the current values as initial estimates. Build a mechanism for refining values through empirical observation across multiple pages.

---

### Chain 4: "S-09 Stacking Loophole" -- SOLID and COMPLETE

**Derivation path:**
1. Mode 4 PA finds: 210-276px whitespace voids.
2. File 02 diagnoses: per-property caps allow stacking.
3. File 08 measures: all 11 transitions exceed 120px.
4. Remediation spec fixes: total-gap cap at 120px, margin reduction.
5. Post-remediation measurement: worst case 108px < 120px.

**Assessment:** The corpus's most COMPLETE derivation chain. Discovery, diagnosis, measurement, fix, verification. Every link has quantitative evidence. No adversarial challenge weakens this chain.

**Actionability for Pipeline v2:** VERY HIGH. Adopt exactly as specified.

---

### Chain 5: "Agent Communication Essential for Quality" -- SPECULATIVE

**Derivation path:**
1. Middle-tier experiment: zero SendMessage, missing footer.
2. Memory MEMORY.md: corrected to "zero SendMessage = quality cost."
3. CD-006: multi-agent with messaging, scored 39/40.
4. Conclusion: messaging essential for quality.

**Assessment:** This chain has a LOGICAL gap. The middle-tier scored 4/4 despite zero messaging and a missing footer. CD-006 scored ~4/4 with messaging. But CD-006 was a DIFFERENT task, DIFFERENT prompt, DIFFERENT team size. The conclusion "messaging is essential" is drawn from comparing across experiments that differ in EVERYTHING. It's possible messaging is essential. It's equally possible that CD-006 succeeded because it had an Opus builder, or better content, or simpler task, and messaging was incidental.

**Actionability for Pipeline v2:** LOW as currently derived. Enable messaging (it costs nothing to enable) but do not design the pipeline AROUND messaging. The evidence does not support messaging as a causal variable.

---

## SECTION 4: ADVERSARY'S PLAYBOOK

If I were trying to make Pipeline v2 FAIL, here is what I would exploit.

### Exploit 1: The Concrete Value Trap

**Vulnerability:** Pipeline v2 embeds specific CSS values (#FAF8F5, 17px, 1.85). Builders follow these literally.

**Attack:** Change the design system's palette. Add new fonts. Introduce a new component type. Now every concrete value in the recipe is stale. The builder follows the recipe's values, producing a page that uses the OLD design system. The recipe format that made Pipeline v2 successful now makes it BRITTLE.

**Defense needed:** Pipeline v2 must separate STABLE values (identity constraints: container width, warm test, no border-radius) from VOLATILE values (color hex codes, font sizes, component patterns). Volatile values should be generated from the design system at build time, not hard-coded in the recipe.

---

### Exploit 2: The Content Mismatch

**Vulnerability:** The recipe assumes RESEARCH-SYNTHESIS style content (long paragraphs, uniform density, 3000-5000 words).

**Attack:** Build a changelog (short items, no hierarchy, 500 words). Build an API reference (tabular, code-heavy, 8000 words). Build a landing page (visual, minimal text, 200 words). The recipe's zone architecture, grid requirements, and transition grammar all assume mid-length prose. They produce nonsensical structure for non-prose content.

**Defense needed:** Content-type detection at Phase 0 that routes to content-specific recipe variants. At minimum: prose variant, tabular variant, short-form variant, visual variant.

---

### Exploit 3: The Compliance Ceiling

**Vulnerability:** Pipeline v2 makes everything binary and measurable. Builders comply with every rule. Compliance produces 3/4 (COMPOSED) but not 4/4 (DESIGNED).

**Attack:** Don't attack at all. Just wait. Pipeline v2 will produce consistent 3/4 pages. The user will be satisfied initially. Then they'll notice every page looks the SAME -- same zone architecture, same transition grammar, same typography hierarchy. The recipe produces UNIFORMITY, not DESIGN. 4/4 requires something beyond compliance: compositional intentionality, which the recipe cannot specify because it's a judgment quality.

**Defense needed:** A "post-recipe" phase where the builder has PERMISSION to deviate from the recipe for compositional reasons. This reintroduces judgment -- but at Phase 8, after all binary compliance is established, so the judgment operates on a solid foundation rather than from scratch.

---

### Exploit 4: The Meta-Work Spiral

**Vulnerability:** The project has a pattern of escalating meta-work (2.6:1 overall, 660:1 for flagship). Pipeline v2 will generate its own meta-work: validation teams, retrospective teams, enrichment teams.

**Attack:** Request a Pipeline v2 validation. The validation produces findings. The findings trigger enrichment. The enrichment requires auditing. The audit produces a retrospective. The retrospective identifies gaps. The gaps require research. Before any page is built with Pipeline v2, another 1MB of meta-analysis exists. The pipeline never ships because it's always being improved.

**Defense needed:** A HARD SHIPPING GATE. "After Pipeline v2 is codified, the NEXT action is building a page. No pre-build validation, no enrichment, no audit. Build first, then retrospect." This is the "cheapest most informative experiment" principle applied to the pipeline itself.

---

### Exploit 5: The Model Upgrade Obsolescence

**Vulnerability:** Pipeline v2 is optimized for Claude 4.6's behavioral profile. Specifically: Claude 4.6 follows binary rules literally, struggles with judgment, benefits from concrete values, has attention patterns that favor recent and structural content.

**Attack:** Claude 5 ships. It handles judgment rules better. It attends uniformly to long prompts. It exercises aesthetic judgment reliably. Now Pipeline v2's recipe format is CONSTRAINING rather than ENABLING -- it prevents the newer model from using its improved capabilities. Pipeline v2 becomes the "sample 2-4 mechanisms" of the next generation: an overly specific instruction that limits a capable agent.

**Defense needed:** Pipeline v2 should include a "model capability check." If the builder model can demonstrate judgment capability (test: give it a judgment rule and verify the output is perceptually correct), RELAX the recipe to allow judgment-based building. This makes Pipeline v2 self-adjusting rather than fixed.

---

## SECTION 5: THE QUESTION BEHIND THE QUESTION

### What is the user REALLY asking?

The stated question is: "How do we build Pipeline v2 so it doesn't repeat these mistakes?"

But this question contains several embedded assumptions that may not be true:

**Embedded assumption 1: The mistakes are the pipeline's fault.**

Maybe the mistakes are the DESIGN SYSTEM's fault (overly constrained identity), or the CONTENT's fault (uniformly dense research prose), or the MODEL's fault (Claude 4.6's specific limitations), or the METRIC's fault (PA-05 optimizes for the wrong outcome). Fixing the pipeline while leaving these unchanged may not fix the problem.

**Embedded assumption 2: A pipeline is the right abstraction.**

A pipeline implies: input -> process -> output. But design is not a pipeline. Design is iterative, non-linear, and often requires backtracking. The master prompt's pipeline approach failed in part because pipelines don't accommodate iteration. The remediation succeeded in part because it operated on an EXISTING artifact (which is iteration). Building Pipeline v2 as a pipeline may reproduce the non-iterative failure mode.

**The deeper question might be:** "How do we create a system where LLM agents produce pages that feel designed -- not just once, but reliably, across content types, at reasonable cost, with the ability to improve over time?"

This reframing changes what Pipeline v2 IS:
- It's not a 9-phase recipe. It's a LEARNING SYSTEM that improves with each page built.
- It's not a prompt. It's a DEVELOPMENT ENVIRONMENT where agents and humans collaborate.
- It's not a specification. It's a FEEDBACK LOOP where output quality informs input improvement.

**Pipeline v2 implication:** Before codifying Pipeline v2 as a recipe, consider codifying it as a PROTOCOL: (1) build a page using current best recipe, (2) audit the page, (3) extract what the recipe got wrong, (4) update the recipe, (5) build the next page. This is what the human user ACTUALLY DID through Phases A-E. Pipeline v2 should formalize this learning cycle, not just codify the current snapshot of its output.

---

### Is the answer a better pipeline or something else entirely?

Three alternatives to "better pipeline" that the corpus's structure prevents from being considered:

**Alternative 1: A smaller design system.** If the design system had fewer constraints, agents would need less specification to produce good output. The pipeline's complexity may be compensating for design system complexity. Simplify the design system, simplify the pipeline.

**Alternative 2: Reference-based building.** Instead of a recipe that specifies CSS values, give agents REFERENCE PAGES. "Build a page that looks like CD-006 but with this content." Agents are better at imitation than creation from specification. The reference-based approach eliminates the translation problem (human intention -> text specification -> agent interpretation -> CSS output) by replacing it with a demonstration problem (reference page -> adaptation to new content).

**Alternative 3: Staged human involvement.** Accept that fully autonomous page building caps at 3/4. Instead of trying to push the autonomous ceiling higher, design a process where agents build to 2.5/4 (which they can do reliably) and humans polish to 4/4 (which takes 30 minutes, not 4 hours). The pipeline's role becomes "produce a high-quality draft" rather than "produce a finished page."

---

## SECTION 6: WHAT-IF QUESTIONS

### What if the master prompt's failure was about CONTENT, not process?

The flagship used RESEARCH-SYNTHESIS content -- dense, uniform, academic prose. The middle-tier (which scored 4/4) may have used different content structure. CD-006 used exploration-style content with built-in visual variety (questions, answers, comparisons, density variations). If content structure determines achievable CSS richness, then the pipeline is a secondary variable. No amount of pipeline optimization will make uniform prose visually rich.

**Relevance to Pipeline v2:** HIGH. If true, Pipeline v2 needs a "content preparation" phase before the building recipe -- a phase that restructures content for visual variety (add pull quotes, convert lists to comparison tables, extract key insights into callouts). This transforms the content from "pipeline-hostile" to "pipeline-friendly."

---

### What if PA-05 4/4 isn't achievable at flagship scale?

The ONLY pages to score 4/4 (DESIGNED) in the project history are middle-tier pages (smaller, simpler). Maybe the correlation isn't "recipe produces 4/4" but "small pages can achieve 4/4 and large pages cap at 3/4" regardless of method. If this is true, Pipeline v2's quality target for flagship pages should be 3/4 (COMPOSED), not 4/4 (DESIGNED), and 4/4 should be reserved for focused, single-topic pages.

**Relevance to Pipeline v2:** HIGH. Adjusting the quality target changes what "success" means. If 3/4 is the realistic ceiling for large pages, Pipeline v2's specification effort can be calibrated accordingly -- less meta-work, more building iterations.

---

### What if N=2 means nothing generalizes?

Every finding in the corpus is a comparison of 2 artifacts. The adversarial files (20, 25, 27) flag this repeatedly. But the corpus PROCEEDS as if the findings are generalizable, just with epistemic humility. What if the correct response to N=2 is NOT "proceed with caution" but "do not codify"? What if Pipeline v2 should be a set of HYPOTHESES to test, not a set of RULES to follow?

**Relevance to Pipeline v2:** HIGH. This changes Pipeline v2 from a specification to an experimental agenda. Instead of "here are the 9 phases," Pipeline v2 becomes "here are 9 hypotheses to test across the next 5 pages, measuring which actually improve quality." The first 5 pages built under Pipeline v2 would be experiments, not production pages.

---

### What if the middle-tier approach is the ceiling?

The middle-tier experiment: 8 agents, 100-line recipe, PA-05 4/4 DESIGNED, 35 minutes. Everything after the middle-tier (ceiling experiment, flagship experiment, remediation) has been more complex AND lower quality. What if the middle-tier represents the optimal point and everything subsequent is over-engineering?

**Relevance to Pipeline v2:** VERY HIGH. If true, Pipeline v2 should be the middle-tier recipe PLUS perception thresholds PLUS nothing else. Not 42-OPERATIONAL-RECIPE's 1,746 lines. Not the 9-phase specification. Just: content analysis -> 100-line recipe with perception thresholds -> single Opus builder -> verify. The rest is noise.

---

## SECTION 7: SYNTHESIS -- RANKED QUESTIONS FOR PIPELINE v2

### TIER 1: BLOCKING (answer these before codifying Pipeline v2)

| # | Question | Why Blocking | Investigation Method |
|---|----------|-------------|---------------------|
| 1 | **Is the middle-tier approach the actual ceiling?** [SB-02, What-If 4] | If yes, Pipeline v2 should be radically simpler than proposed | Compare ALL experiment results in unified matrix |
| 2 | **Is perception thresholds alone the fix, or is the full package needed?** [A-05] | Determines Pipeline v2's complexity | Run Q20 (cheapest experiment): master prompt + thresholds only |
| 3 | **Does the recipe format work for from-scratch builds?** [A-04] | Recipe was only tested for remediation | Build one page from scratch using file 42 recipe on NEW content |
| 4 | **What is Pipeline v2's realistic PA-05 ceiling?** [SB-02, What-If 2] | Determines quality targets and meta-work budget | Plot all PA-05 scores vs effort; identify asymptote |
| 5 | **Should Pipeline v2 be a specification or an experimental agenda?** [What-If 3] | Determines whether to codify or hypothesize | Decision: run 3-5 experiments first, or codify then test? |

### TIER 2: SIGNIFICANT (answer these during Pipeline v2 design)

| # | Question | Why Significant | Investigation Method |
|---|----------|----------------|---------------------|
| 6 | **Is the comparison frame misleading?** [SB-01] | Pipeline v2 may inherit comparison artifacts | Test one non-comparative approach (visual mockup input) |
| 7 | **Does content structure limit design quality?** [What-If 1] | May need content preparation phase | Build same recipe on 3 different content types; compare PA-05 |
| 8 | **How brittle are the recipe's concrete values?** [Exploit 1] | Pipeline maintenance cost | Identify which values are stable vs volatile |
| 9 | **Is PA-05 the right success metric?** [A-01] | Wrong metric = wrong pipeline | Add complementary metrics (functional, trust) to next audit |
| 10 | **Should Pipeline v2 include human approval gates?** [A-03, Alt 3] | May break 3/4 ceiling | Test one page with human approval at Phase 0 and Phase 5 |

### TIER 3: ENRICHING (consider during Pipeline v2 iteration)

| # | Question | Why Enriching | Investigation Method |
|---|----------|--------------|---------------------|
| 11 | **Does CSS richness equal design quality?** [A-02] | May be over-optimizing richness | Build one intentionally minimal page; audit PA-05 |
| 12 | **Are design system constraints the binding limit?** [SB-03] | Pipeline optimization may be misplaced | Build one page with relaxed constraints; compare |
| 13 | **Would cross-model agents provide genuine diversity?** [SB-04] | All analysis is Claude-on-Claude | Run one audit with non-Claude agent |
| 14 | **What new failure modes will Pipeline v2 create?** [SB-05, Exploits 1-5] | Every fix creates new surfaces | Pre-mortem: list 10 ways Pipeline v2 could fail |
| 15 | **Should Pipeline v2 be a learning system, not a recipe?** [Section 5] | Static recipes become stale | Design the update/feedback mechanism |

---

## PROVENANCE AND LIMITATIONS

### What This Document Covers
- 6 structural blind spots
- 6 core assumptions
- 5 derivation chain assessments
- 5 adversary exploits
- 1 reframing of the core question + 3 alternatives
- 4 destabilizing what-if questions
- 15 ranked questions for Pipeline v2

### What This Document Does NOT Cover
- Detailed CSS-level analysis (outside scope -- see files 05, 08, 29)
- Specific recipe edits (see file 42)
- Per-file bias assessment (see files 25, 26)
- Discussion strategies (see discussion-enrichment.md)
- Missing analytical dimensions (see missing-dimensions.md -- partially overlapping but that file focuses on ABSENT LENSES while this file focuses on STRUCTURAL INVISIBILITY)

### Key Distinction from the Existing hidden-questions.md (v1)
The prior version of this file (by hidden-questions-recovery) focused on IMPLICITLY ANSWERED questions -- questions the corpus has data to answer but never assembled. This version focuses on STRUCTURALLY INVISIBLE questions -- questions the corpus's analytical architecture prevents from being formulated. The prior version asks "what did the corpus accidentally answer?" This version asks "what can the corpus never answer, and does that matter for Pipeline v2?"

### Confidence Calibration
- Structural blind spots: HIGH confidence that these are real blind spots. MEDIUM confidence in their severity.
- Assumptions: HIGH confidence that these are assumed. MEDIUM-LOW confidence that any specific assumption is wrong.
- Derivation chains: HIGH confidence in the assessments. These are traceable through specific file references.
- Adversary exploits: MEDIUM confidence. These are plausible attack vectors, not demonstrated vulnerabilities.
- What-if questions: LOW-MEDIUM confidence. These are designed to be destabilizing, not necessarily correct.

---

*File: `ephemeral/pipeline-analysis/_meta-cognitive/hidden-questions.md`*
*Version: 2.0 (replaces v1 by hidden-questions-recovery)*
*Lines: ~500*
*Purpose: Identify questions the corpus's STRUCTURE prevents from being asked, ranked by Pipeline v2 relevance*
