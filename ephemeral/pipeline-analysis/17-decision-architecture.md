# Decision Architecture: Every Fork in the Road

**Analyst:** decision-architecture (Opus 4.6)
**Date:** 2026-02-18
**Sources:** FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (963 lines), 12-ENHANCED-REMEDIATION-SPEC.md (1,025 lines), 09-SYNTHESIS.md (268 lines), 00-CONVERSATION-JOURNEY-CONTEXT.md (85 lines), 01-remediate-vs-rebuild.md (298 lines), 11-adversarial-challenge.md (334 lines)

---

## OVERVIEW: THE DECISION TREE

The journey from failed flagship to enhanced remediation contains 7 major architectural decisions. Each decision had alternatives that were considered (sometimes explicitly, sometimes implicitly) and evidence that tipped the choice. This document reconstructs the decision architecture -- the WHY behind each fork -- and explores the counterfactual: what would have happened if the other path had been chosen.

The decisions are ordered chronologically as they emerged during the conversation, not by importance.

---

## DECISION 1: APPROACH SELECTION

### The Fork
**Approach A (CSS-only)** vs. **Approach B (CSS + targeted HTML restructuring)** vs. **Approach C (full rebuild)**

### What Was Chosen
**Approach B.** The remediation spec explicitly states: "Remediate with CSS + targeted HTML restructuring" (12-ENHANCED-REMEDIATION-SPEC.md, line 15).

### Evidence That Led to This Choice

Agent #1 (remediate-rebuild) conducted an element-by-element structural audit of the 2,034-line flagship HTML and produced a quantitative breakdown:

**Against Approach A (CSS-only):**
- Of 7 product-addressable root causes, CSS-only fully solves only 2 (RC-4 sub-perceptual variation, RC-10 tokens-not-values), partially solves 3, and cannot solve 2 (RC-9 component library invisible, RC-12 single-column monotony).
- The adversarial agent (report 11) confirmed: "CSS-only remediation CANNOT achieve DESIGNED (4/4). Maximum achievable is COMPETENT (3/4)."
- Predicted PA-05 for CSS-only: 2/4 (Sonnet) or 3/4 (Opus). Neither reaches DESIGNED.
- Grid layouts require HTML wrapper elements. You cannot grid-ify a sequence of `<p>` tags without parent containers.
- Component library adoption requires class name changes in HTML, which is by definition not CSS-only.

**Against Approach C (full rebuild):**
- 89.5% of the HTML body was classified as structurally correct: 12-section zone architecture, dark header/footer bookends, 960px container, 7 table treatments, pullquote, drop cap, code blocks, section-meta labels, bridge prose. Rebuilding would discard ~880 lines of correct work.
- The flagship experiment ITSELF was a rebuild, and it scored 1.5/4. The process that produced the rebuild was the root cause (RC-1 through RC-8), not the HTML. Rebuilding without fixing the process would repeat the same failure.
- Time asymmetry: Approach B estimated at 60-90 minutes. Approach C estimated at 180-300 minutes. Approach C's outcome was UNCERTAIN (1/4 to 4/4 variance), while B's was predictable (3/4 with HTML changes, 2/4 without).
- Risk: "Rebuilding has produced a WORSE result before" (01-remediate-vs-rebuild.md, line 218).

**For Approach B:**
- Approach B fully solves 5 of 7 product root causes and partially solves 2. Identical coverage to a full rebuild.
- Only ~10.5% of the HTML body needs structural changes (~105 lines of a 998-line HTML body).
- The HTML changes are mechanical (class renames, wrapper divs, ARIA attributes), not creative decisions. Low risk.
- Preserves the metaphor arc, zone system, and spatial skeleton that the Planner agent designed.

### Alternatives Considered

The 3 approaches were explicitly evaluated in a decision matrix (01-remediate-vs-rebuild.md, lines 266-276):

| Factor | A (CSS-only) | B (CSS+HTML) | C (Rebuild) |
|--------|-------------|-------------|-------------|
| Time | 30-45 min | 60-90 min | 180-300 min |
| Risk | LOW | MEDIUM-LOW | HIGH |
| Root causes solved | 2 full, 3 partial | 5 full, 2 partial | 5 full, 2 partial |
| Predicted PA-05 | 2/4 | 3/4 | 1/4 to 4/4 |

A fourth option -- "do nothing and rebuild the entire pipeline" -- was implicitly rejected by the user's request for remediation rather than process redesign.

### Counterfactual

**If Approach A was chosen:** The page would have gained perceptible backgrounds, some left borders, and heading weight variation. But it would remain single-column, uniform layout, zero grid structures. PA-05 would cap at 2-3/4. The adversarial agent's DNA argument would have proven correct: "CSS cannot change HTML structure, and the page's DNA is uniform single-column prose." The most visible defects (whitespace voids) would have been partially reduced but not eliminated, because the S-09 stacking loophole requires restructuring dividers, not just reducing margins.

**If Approach C was chosen:** Two sub-scenarios:
- (C1) Rebuild with same prompt: The 963-line master execution prompt would produce the same failure. Binary rules achieve compliance, not quality. The process would need to be fixed first, which is what the retrospective team recommended (Takeaway 1: add a playbook generation phase).
- (C2) Rebuild with fixed prompt (Middle-tier recipe format): Would likely produce PA-05 4/4 (proven by Middle-tier experiment), but at 180-300 minute cost. The remediation approach traded the 4/4 ceiling for predictable 3/4 at 60% of the time.

### The Meta-Decision

The choice of Approach B is itself a decision about WHAT KIND OF PROBLEM this is. The remediation frame says: "the page is mostly correct; fix what's broken." The rebuild frame says: "the page's DNA is wrong; start over." The remediation-audit team chose the first frame because of the 89.5% correctness finding -- a quantitative argument that the page's bones are sound. The adversarial agent disagreed, arguing that the "bones" are the wrong metaphor because bones implies structure, and the structure (single-column) is exactly what's wrong.

This disagreement was resolved pragmatically: the enhanced remediation added enough HTML restructuring (grid wrappers, component library adoption, ARIA) to partially address the structural concern while preserving the 89.5% that works. It was a COMPROMISE between remediation and rebuild.

---

## DECISION 2: TEAM COMPOSITION -- 11 SPECIALIZED AGENTS VS. FEWER GENERALISTS

### The Fork
**11 specialized research agents** (each with a narrow lens) vs. **3-5 general agents** (each analyzing the whole problem)

### What Was Chosen
11 specialists: remediate-rebuild, component-auditor, root-cause-auditor, takeaway-auditor, scale-channel-auditor, css-budget-analyst, structural-html-auditor, recipe-writer, coherence-designer, accessibility-spec, adversarial.

### Evidence That Led to This Choice

This decision was driven by prior project experience rather than explicit analysis during the conversation:

1. **Mode 4 PA precedent:** The Mode 4 perceptual audit used 9 independent auditors and found the catastrophic whitespace void that 2-PA lighter audits missed. Breadth of perspectives was established as the key value proposition for multi-agent teams. This finding is recorded in project memory: "9 independent auditors catch what 2 PAs miss."

2. **Specialization enables depth without context overload:** Each agent read different source files. The remediate-rebuild agent read the full 2,034-line HTML. The css-budget-analyst read the CSS forensics. The adversarial read the crown jewel HTML for comparison. No single agent needed to hold all context simultaneously, which prevents the LLM attention degradation that occurs with very long contexts.

3. **Cross-validation by independent convergence:** When 7 of 8 retrospective reports independently confirmed sub-perceptual variation as the truest failure, that convergence carries more weight than a single agent's analysis. The concordance table (09-SYNTHESIS.md, lines 255-264) explicitly measures this.

### What Specialization Produces That Generalism Cannot

**Independent discovery of the same finding.** The S-09 stacking loophole was discovered by report 02 (missing causes, RC-14), report 03 (prompt forensics, Finding 2), and report 04 (remediation gaps). Three agents, each reading different source material, independently identified the same specification defect. A single generalist would have found it once and moved on. Three independent discoveries proved it was a genuine structural flaw, not an artifact of one agent's interpretation.

**Adversarial coverage of blind spots.** The adversarial agent (report 11) challenged every assumption of the remediation. It concluded that CSS-only caps at PA-05 2-3/4 and that the DNA argument against remediation is legitimate. This finding directly influenced the enhanced remediation's expansion to include HTML restructuring. Without a dedicated adversarial agent, this challenge might not have been raised -- the other 10 agents were invested in making remediation work.

**Depth in narrow domains.** The accessibility-spec agent (report 10) identified 7 features, 38 HTML modifications, and 180 CSS lines needed for WCAG 2.1 AA compliance. A generalist analyzing the whole problem would likely have noted "accessibility is missing" without producing the specific skip link, focus-visible, reduced-motion, responsive breakpoint, print styles, and ARIA specifications that the enhanced remediation directly imported.

### Alternatives Considered

A 3-agent team (one analyst, one recipe-writer, one adversarial) was implicitly available as a cheaper option. The project history shows that earlier phases used smaller teams for less critical decisions.

### Counterfactual

**If 3 generalists were used:** Each agent would have analyzed the problem holistically but with less depth per dimension. The stacking loophole might have been found (it's prominent enough), but the specific accessibility requirements, component library mappings, and multi-coherence cascade tables would likely have been less detailed. The synthesis document (12-ENHANCED-REMEDIATION-SPEC.md) drew from all 11 reports to produce its 9-phase structure -- with fewer inputs, the remediation would have been a simpler CSS-only document without the Phase 0 deallocation, Phase 1 HTML restructuring, or Phase 8 verification that proved critical.

**If more agents were used (e.g., 20):** Diminishing returns. The 11 agents already covered the key dimensions (approach selection, components, root causes, takeaways, scale/channel, CSS budget, HTML structure, recipe writing, coherence, accessibility, adversarial). Additional agents would have required inventing new lenses, and the synthesis burden would have grown. The project's established pattern is that 8-12 agents is the sweet spot for comprehensive analysis.

### The Meta-Decision

The choice of 11 agents reflects a learned principle: BREADTH OF PERSPECTIVE beats DEPTH OF ANALYSIS for diagnostic tasks. This is the Mode 4 lesson applied to remediation planning rather than perceptual auditing. The team was designed to produce independent, narrow, deep analyses that a synthesizer could compose into something no single agent could produce.

---

## DECISION 3: PHASE ORDERING -- WHY DEALLOCATION FIRST

### The Fork
**Phase 0 (deallocation) BEFORE Phase 1 (HTML restructuring) BEFORE Phases 2-7 (CSS addition)**
vs.
**Adding CSS first, then cleaning up**
vs.
**HTML restructuring first, then CSS changes**

### What Was Chosen
Deallocation first (Phase 0), then HTML restructuring (Phase 1), then CSS addition (Phases 2-7), then verification (Phase 8).

### Evidence That Led to This Choice

**Phase 0 (deallocation) first:**
The css-budget-analyst (report 06) found that 23.7% of the flagship's CSS (233 lines) was sub-perceptual waste: letter-spacing values of 0.004-0.01em (0.064-0.16px, invisible), word-spacing of 0.005-0.02em (0.08-0.32px, invisible), heading color shifts of 1-12 RGB points (below human perception threshold). This CSS is not just useless -- it is actively harmful because:
1. It satisfies rules (SC-02 "channels active") without producing visible effects, creating a false sense of compliance.
2. It occupies attention budget (both the builder's and any auditor's) without delivering value.
3. It inflates the CSS line count, masking how little visible styling the page actually has.

Removing this waste FIRST establishes a clean baseline. The checkpoint after Phase 0 requires: "Open the page at 1440px. It should look IDENTICAL to before. If anything visibly changed, you deleted something perceptible -- restore it." This validates that the deleted CSS was truly sub-perceptual.

**Phase 1 (HTML restructuring) before CSS phases:**
HTML restructuring changes class names (`.component-block` to `.callout`), adds wrapper elements (grid containers), and adds semantic attributes (ARIA labels, roles). CSS phases reference these new class names (`.callout--info`, `.callout--tip`, `.tension-pair`, `.sequence-grid`). If CSS were applied first to the old class names and then HTML restructured, every CSS selector would need to be updated -- double the work and double the error surface.

**Phases 2-7 ordered by visual impact:**
Phase 2 (backgrounds) before Phase 3 (borders) before Phase 4 (typography) before Phase 5 (spacing) before Phase 6 (element-level) before Phase 7 (accessibility). This ordering follows a principle the remediation states explicitly: "If time is short, complete Phases 0-2 and Phase 7 FIRST" (line 55). The highest-impact visual changes come first, ensuring that even partial completion produces maximum improvement.

### Alternatives Considered

**Adding CSS first, then removing waste:** This creates a "clean as you go" approach but risks building on a polluted foundation. New CSS for zone backgrounds could interact with existing sub-perceptual zone typography rules, producing unexpected cascading effects. Deallocation first eliminates these interactions.

**HTML restructuring first, then deallocation, then CSS:** Logically sound, but HTML restructuring changes the DOM structure, and Phase 0 targets specific CSS line ranges ("lines ~736-834"). After HTML restructuring, line numbers shift and class names change, making the deallocation instructions less precise. The chosen ordering: remove targeted CSS lines (stable references) -> restructure HTML (changes DOM) -> add new CSS (references new DOM) preserves reference stability at each step.

### Counterfactual

**If CSS were added before deallocation:** The builder would be working with ~984 lines of CSS, of which 233 are invisible. New CSS for backgrounds (Phase 2) would interact with existing sub-perceptual background-related rules. The per-zone typography rules (lines 736-834) would compete with the new per-zone typography rules (Phase 4), creating specificity conflicts. The builder would need to debug cascade interactions rather than working on a clean slate. Estimated time overhead: +20-30 minutes of debugging.

**If deallocation were skipped entirely:** The result would have ~984 + 310 = ~1,294 CSS lines, of which 233 (18%) produce no visible effect. The page would look the same to humans but carry 18% dead weight. More critically, any auditor running a "channel active" check would see the sub-perceptual channels as "active," creating false confidence in richness. The Mode 4 PA caught exactly this problem in the ceiling experiment: "14 mechanisms deployed, 1 perceived."

### The Meta-Decision

Phase ordering reflects a SUBTRACTIVE-BEFORE-ADDITIVE principle. This is counterintuitive -- builders want to ADD things, not REMOVE things. But the retrospective established that the flagship's problem was not insufficient CSS but MISALLOCATED CSS. The 22% sub-perceptual waste represents exactly the kind of misallocation that deallocation corrects. The ordering says: "get your house in order before building an extension."

---

## DECISION 4: SINGLE BUILDER VS. MULTIPLE BUILDERS

### The Fork
**One writer receiving all 11 research reports as manifest inputs** vs. **Multiple builders working on different sections**

### What Was Chosen
Single builder. The remediation spec states: "Single pass execution. Do NOT spawn analytical agents to audit the remediation. Apply Phases 0-7, run Phase 8 verification, deliver. Total agents: 1 builder." (line 1015).

### Evidence That Led to This Choice

**From project experiment history:**

1. **Middle-tier experiment (8 agents, 35 min, PA-05 4/4):** Used a flat file-bus topology with per-file builder ownership. Success. But the Middle-tier was building from scratch, not modifying an existing file. Per-file ownership works when agents each create a different file; it breaks when multiple agents need to modify the SAME file.

2. **Flagship experiment (19 agents, PA-05 1.5/4):** Used 4 sequential build passes (skeleton A+B, mechanism, metaphor, intentionality), each modifying the same HTML file. Despite per-pass ownership (only one agent writes at a time), the sequential handoff created information loss between passes. The Sonnet skeleton builder couldn't ask the Planner about spatial concerns because communication was zero. The mechanism builder received a skeleton without understanding its spatial rationale.

3. **The "missing footer" smoking gun:** In the Middle-tier experiment, the builder couldn't ask the planner about the footer, and the footer was missing. This was identified as evidence that communication matters. But in remediation, there IS no planner -- the remediation spec IS the complete build plan. A single builder reading the complete spec has all the information that would otherwise need to be communicated between agents.

**The remediation-specific argument:**

The remediation is modifying a SINGLE FILE. Multi-agent approaches to single-file modification create contention (who writes when, merge conflicts, version management). The project learned this lesson with Playwright contention (sequential scheduling eliminates contention). The same principle applies to file writing.

Furthermore, the 9 phases are SEQUENTIAL BY DESIGN. Phase 0 must complete before Phase 1 (deallocation before restructuring). Phase 1 must complete before Phase 2 (HTML class names before CSS selectors). There is no parallelism to exploit. Multiple agents would be doing sequential work anyway, with handoff overhead between each phase.

### Alternatives Considered

**Multiple builders, one per phase:** 9 agents, each handling one phase. Benefits: smaller context per agent, faster wall-clock time if phases could be parallelized. Drawbacks: phases are sequential (no parallelism possible), handoff between agents introduces information loss, each agent needs to read the file and understand the prior agent's changes.

**Two builders (CSS specialist + HTML specialist):** Phase 0 + Phases 2-7 go to the CSS builder; Phase 1 goes to the HTML builder. Benefits: domain specialization. Drawbacks: Phase 1 and Phase 2 must be sequential (HTML class names must exist before CSS targets them), so the CSS builder waits for the HTML builder. Coordination overhead exceeds benefit.

**"Opus recipe writer" + "Sonnet builder" (two-instance pattern):** The master execution prompt used this pattern (Planner writes plan, Builder executes). Benefits: continuation bias prevention (the Planner's creativity isn't constrained by the Builder's implementation decisions). Drawbacks: the remediation spec is ALREADY the "recipe" -- adding another recipe-writing step creates 3 levels of indirection (retrospective -> remediation spec -> recipe -> builder). The retrospective finding (Takeaway 7) recommends capping analytical phases at 2 between research and execution. A recipe-on-top-of-remediation would violate this cap.

### Counterfactual

**If multiple builders were used:** Each builder would read the full 2,034-line HTML file, understand the prior builder's changes, apply their phase, and write the result. With 9 sequential handoffs, the file would be read 9 times and written 9 times. At ~5 minutes per read-understand-verify cycle, that adds ~45 minutes of overhead. The single-builder approach reads the file once and writes once. Net time savings: ~45 minutes.

More critically, multi-agent handoffs introduce the exact communication failure that plagued the flagship experiment. The retrospective found that "zero SendMessage = quality cost." But the solution to communication failure is not "more agents communicating" -- it is "fewer agents needing to communicate." A single builder who reads the complete remediation spec needs to communicate with nobody.

### The Meta-Decision

The single-builder decision represents a PHILOSOPHICAL REVERSAL from the master execution prompt. The master prompt used multi-agent architecture as a quality mechanism (two-instance pattern, per-pass builders, Mode 4 PA). The remediation uses single-agent architecture as a quality mechanism (complete information, zero handoff loss, zero communication failure). The evidence that justified this reversal: the flagship experiment proved that multi-agent architecture with poor communication produces worse results than single-agent architecture with complete information. The Middle-tier's PA-05 4/4 was achieved with a single builder who received a complete recipe. Communication is valuable only when information is distributed; when information is centralized in a spec, communication becomes overhead.

---

## DECISION 5: RECIPE FORMAT -- SEQUENTIAL PHASES WITH EXACT CSS VALUES

### The Fork
**Sequential recipe (specific CSS code blocks, ordered phases, perception checkpoints)** vs. **Binary rule checklist (constraint IDs, verification methods, FAIL IF conditions)** vs. **Hybrid (constraints + worked examples)**

### What Was Chosen
Sequential recipe with exact CSS values. The remediation spec contains copy-pasteable CSS blocks (e.g., the 12 zone color variables in Phase 2, the 6 border rules in Phase 3.1, the typography rules in Phase 4.1) interspersed with PERCEPTION CHECKS after each phase.

### Evidence That Led to This Choice

**The retrospective's #1 finding: Recipe vs. Checklist.**
Report 05 (metacognitive process analysis) identified this as THE core metacognitive finding:
> "The Middle-tier builder received a RECIPE (100-line planner slice with sequenced steps: 'Read this, then select a pattern, then deploy mechanisms'). The Flagship builder received a CHECKLIST (71 lines of constraints: 'verify that X is true'). The Middle builder was told WHAT TO DO. The Flagship builder was told WHAT NOT TO DO."

This finding was confirmed by 4 of 8 retrospective reports (concordance strength: STRONG). The master execution prompt's Section B contains 97 rule IDs, all in FAIL IF / VERIFY format. The remediation spec contains zero FAIL IF statements in its build phases. Instead, it says: "Find this block... DELETE everything from... Replace ALL THREE with these values..."

**The sub-perceptual variation failure (RC-4):**
The master execution prompt's rules allowed sub-perceptual variation because they checked for PRESENCE not MAGNITUDE. Rule SC-02 requires "5 of 7 channels actively used" but doesn't define what "active" means. The builder satisfied SC-02 with letter-spacing of 0.004em -- technically "active" but physically invisible.

The remediation spec solves this by providing EXACT VALUES that exceed perception thresholds. Instead of "zone backgrounds must differ," it gives: `--color-zone-s1: #FEF5EB; --color-zone-s4: #F8F6F3; --color-zone-s5: #FAFAFA;` -- a 23 RGB-point range that is unambiguously perceptible. The builder cannot produce sub-perceptual variation because the recipe specifies perceptible values.

**The 7.9:1 guardrail-to-playbook ratio (RC-2):**
The master execution prompt contained 55 building guardrails and 7 building playbooks. The word "border" appeared 3 times as prohibition and once as reference value, zero times as construction instruction. The remediation spec inverts this ratio: it is ~5:1 playbook-to-guardrail (line 917). Every phase IS a construction instruction.

### Alternatives Considered

**Binary rule checklist (the master prompt's format):** The 963-line master execution prompt used this format and it failed. The retrospective identified the format itself as a root cause. Using the same format for remediation would be repeating the mistake.

**Hybrid (constraints + worked examples):** The master prompt's Section A5 contained a worked CD-006 example with specific CSS values. But Section A5 was in the CONVICTION LAYER, which was excluded from the builder's 75-line prompt. The worked example existed but never reached the builder. The remediation spec avoids this by making the entire document builder-facing -- there is no conviction/execution split that could cause content to be routed away from the builder.

**Declarative intent (describe the desired outcome, let builder figure out how):** This is what the build plan attempted -- it described 14 mechanisms with deployment locations but didn't provide CSS code. The builder produced sub-perceptual implementations of these mechanisms. Declarative intent only works when the builder has the skill to translate intent into visible CSS, and the evidence showed Sonnet agents lack this skill.

### Counterfactual

**If the remediation used binary rules instead of recipes:** A spec like "Background color must differ by >= 15 RGB points between adjacent zones. Font-size must vary by >= 2px between zones. Left borders must appear on >= 6 of 12 sections." The builder would need to INVENT specific values that satisfy these constraints. A Sonnet builder would produce MINIMAL satisfaction (exactly 15 RGB points, exactly 2px font-size difference, borders on exactly 6 sections). An Opus builder might produce surplus. But the evidence from the flagship experiment -- where binary rules produced minimal satisfaction across ALL channels -- suggests that binary rules reliably produce minimum viable compliance, not quality surplus.

The recipe format avoids this problem by providing VALUES that are already above minimum viable. The specific CSS code blocks in the remediation spec encode design judgment (which sections get borders, what colors to use, how much typography varies) that would otherwise need to come from the builder's creative judgment -- which the Sonnet model doesn't reliably produce.

**If the remediation used pure prose descriptions:** "Make the backgrounds more distinct. Add some borders. Vary the typography." This is even less specific than binary rules. The builder would need to interpret "more distinct" -- and the flagship experiment showed that the builder's interpretation of "active channels" was letter-spacing of 0.004em. Prose descriptions produce the widest variance in output quality, which is the opposite of what remediation needs (predictable improvement).

### The Meta-Decision

The recipe format is a decision about WHERE design judgment lives. In the master execution prompt, design judgment was expected to emerge from the builder's creative process (guided by constraints). In the remediation spec, design judgment is PRE-COMPUTED by the 11 research agents and ENCODED into specific CSS values. The builder is a faithful executor, not a creative interpreter. This trades creative ceiling (an inspired builder could exceed any recipe) for reliability floor (a compliant builder will at least achieve the recipe's quality level). The evidence -- Middle-tier recipe produced 4/4, flagship checklist produced 1.5/4 -- overwhelmingly favors reliability over ceiling potential.

---

## DECISION 6: 4-WAVE ARCHITECTURE FOR EXECUTION

### The Fork
**4-wave architecture (prep -> build -> verify -> synthesize)** vs. **All-at-once (single agent reads everything and executes)** vs. **Phase-per-agent (9 agents, one per phase)**

### What Was Chosen
When the user asked for an auxiliary execution prompt, the team lead designed a 4-wave architecture:
- Wave 1 (Parallel Prep): Multiple agents read source material and produce analysis artifacts
- Wave 2 (Single Build): One builder applies all phases
- Wave 3 (Parallel Verify): Multiple auditors assess the result
- Wave 4 (Synthesis): One synthesizer compiles findings

### Evidence That Led to This Choice

**Wave 1 (parallel prep) serves a specific need: the remediation spec references 7+ source files.** The builder needs to understand the current HTML structure, the component library, the perception thresholds, the root causes, and the design intent. Rather than having the builder read all these files (consuming context window and time), prep agents can extract and compress relevant information into focused briefs. This is the same principle as the "screenshot pre-capture pattern" used in Mode 4 PA -- do the expensive I/O work before the critical agent starts.

**Wave 2 (single build) follows Decision 4's logic.** One builder, complete recipe, zero handoffs. The 4-wave architecture protects this decision by ensuring the builder has pre-processed inputs (from Wave 1) rather than raw files.

**Wave 3 (parallel verify) follows the Mode 4 PA precedent.** Multiple independent auditors catch failures that a single builder's self-check misses. The remediation spec includes Phase 8 (verification), but self-verification has a known blind spot: the builder who created a problem is least likely to see it. External auditors provide the "fresh eyes" that the project has repeatedly found valuable.

**Wave 4 (synthesis) is the established pattern.** Every multi-agent team in this project has used a synthesizer agent (Opus) to compose individual reports into a unified analysis. The pattern works: 09-SYNTHESIS.md (the retrospective synthesis) drew from 8 reports to produce a coherent 268-line document.

### Alternatives Considered

**All-at-once:** One agent reads the 1,025-line remediation spec and the flagship HTML, then executes all 9 phases, then self-verifies. Benefits: minimum overhead, fastest possible execution. Drawbacks: the agent's context window must hold ~3,000 lines (spec + HTML + working memory). At this scale, attention degradation causes the agent to skip or simplify later phases. The master execution prompt's "LENGTH IS THE ENEMY OF QUALITY" diagnosis applies here: a 1,025-line spec IS long enough to cause attention degradation in a single agent.

**Phase-per-agent:** 9 agents, one per phase, sequential execution. Benefits: each agent has focused context. Drawbacks: 9 handoffs between agents, each requiring the next agent to read and understand the modified HTML. Total overhead: ~45 minutes of read-understand cycles. No parallelism exploitable because phases are sequential.

### Counterfactual

**If all-at-once was chosen:** The post-execution results reported in Phase E of the journey context (00-CONVERSATION-JOURNEY-CONTEXT.md, lines 65-75) suggest the actual execution team produced 16+ agents, achieving PA-05 2.5/4 with 3 BLOCKING fixes needed. An all-at-once approach would have been faster but might have missed the verification issues (border selectors, S9-S12 typography, table class mismatch) that the multi-wave team caught.

**If phase-per-agent was chosen:** Each agent would have context for only one phase. Phase 3 (borders) and Phase 4 (typography) have interactions -- the border padding values affect the paragraph max-width calculations. An agent working on Phase 3 without awareness of Phase 4 might choose border padding that breaks the typography's max-width constraints. The single-builder approach avoids this because one agent holds all phase interactions in working memory simultaneously.

### The Meta-Decision

The 4-wave architecture is a SEPARATION OF CONCERNS: reading (Wave 1), writing (Wave 2), auditing (Wave 3), concluding (Wave 4). This maps to the software engineering principle of separating input, processing, output, and validation. The evidence supporting this separation comes from the flagship experiment, where all concerns were merged into a single pipeline and the pipeline failed because analytical concerns crowded out creative concerns (the "analysis displaces creation" finding from report 05).

---

## DECISION 7: HARDCODED PERCEPTION THRESHOLDS

### The Fork
**Hardcode minimum perceptual magnitudes** (background >= 10 RGB, letter-spacing >= 0.025em, font-size >= 2px, border weight >= 1px, margin >= 8px) vs. **Leave perceptual judgment to the builder** vs. **Provide qualitative guidance** ("make sure differences are visible")

### What Was Chosen
Hardcoded minimums. The remediation spec includes an "APPENDIX: PERCEPTION THRESHOLDS REFERENCE" (lines 970-985) with a table of 8 properties, each with a minimum perceptible delta and the spec's actual values. The spec's operative rule: "If a human cannot SEE the difference without a color picker, do NOT write the CSS" (line 985).

### Evidence That Led to This Choice

**The sub-perceptual variation failure is the most confirmed root cause in the entire retrospective.** The concordance table shows 7 of 8 reports confirming it -- UNANIMOUS agreement, the only finding with this level of convergence. The specific evidence:

- Letter-spacing varied by 0.096px across zones (invisible; human perception threshold for tracking change is ~0.5px at 16px font-size).
- Line-height range was 2.4px across all zones (barely perceptible, but only if comparing side-by-side).
- Zone backgrounds differed by 1-8 RGB points (below human perception threshold of ~15-20 RGB for adjacent regions).
- All sections had identical paragraph font-size (16px), font-weight (400), text color (#1A1A1A), and margin-bottom (16px).

**No rule in the 963-line master execution prompt defined a minimum perceptual magnitude.** SC-02 requires "5 of 7 channels actively used" without defining "active." C-01 requires "per-category minimums" for mechanism deployment without specifying magnitude. S-09 caps spacing at 96px but doesn't set a minimum for zone differentiation. This is a SPECIFICATION GAP: the rules check for the existence of CSS properties but not for the visual effect of their values.

**The builder followed the rules perfectly.** Every rule was technically satisfied. Letter-spacing IS a typographic property; applying it to different zones IS "using the typographic channel." The sub-perceptual values passed every binary rule. This means the failure was not in the builder's execution but in the rules' specification. The rules asked the wrong question ("is a property present?") instead of the right question ("is the property value visually perceptible?").

### Alternatives Considered

**Leave perceptual judgment to the builder:** This is what the master execution prompt did. The conviction layer (Section A) contained philosophical guidance about perception ("Deployment does NOT equal perception. 14 mechanisms deployed, 1 perceived.") but formatted it as wisdom, not as a gate. The builder saw this wisdom (if they read Section A at all, which the 75-line builder prompt suggests they didn't) but had no BINARY RULE to anchor it to. "Use your judgment about what's perceptible" is a judgment rule, and the project's most important architectural principle is: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."

**Provide qualitative guidance:** "Make sure backgrounds are noticeably different" is better than no guidance but worse than specific thresholds. "Noticeably" is subjective. A Sonnet agent's interpretation of "noticeably" might be 3 RGB points (technically different per the digital color space). A human's interpretation would be 15-20 RGB points. Qualitative guidance reintroduces the judgment gap that caused the failure.

**Automated perception testing:** A tool that measures pixel-level differences between adjacent zones and flags sub-perceptual values. This would be ideal but doesn't exist in the current toolset. The hardcoded thresholds are the low-tech equivalent: human-derived perception floors that approximate what an automated tool would measure.

### Counterfactual

**If thresholds were left to builder judgment:** The remediation would produce the same sub-perceptual variation the flagship did, because the builder (especially Sonnet) defaults to minimum viable values. The builder would apply "some" background variation and "some" typography variation, but without specific minimums, "some" could mean 2 RGB points or 0.003em letter-spacing. The perception thresholds are the ONLY mechanism that prevents this regression.

**If thresholds were set too high:** Setting minimum background difference at 40 RGB points (instead of 10) would produce garish, high-contrast zone transitions that violate the design system's "warm, unhurried" aesthetic. The chosen thresholds (10-20 RGB, 0.025em letter-spacing, 2px font-size) were calibrated to be ABOVE perception threshold but BELOW aesthetic disruption. This calibration came from the css-budget-analyst (report 06), who analyzed CD-006's actual values as a reference: CD-006 uses 15-30 RGB deltas between zones, which are clearly perceptible but aesthetically integrated.

**If thresholds were omitted from the spec:** The builder would have no reference for "how much is enough." The Phase 8 verification checks ("Can you SEE color change without zooming?") would catch some sub-perceptual values, but only during self-verification at the end, after all 7 build phases are complete. Catching sub-perceptual values in Phase 8 means reworking Phases 2-6 -- expensive. The thresholds prevent sub-perceptual values at AUTHORING TIME, avoiding the rework.

### The Meta-Decision

Hardcoding perception thresholds is a decision about WHAT LEVEL OF ABSTRACTION rules should operate at. The master execution prompt operated at the SEMANTIC level ("channels active," "mechanisms deployed," "coherence score"). The remediation operates at the PHYSICAL level ("RGB delta >= 10," "letter-spacing >= 0.025em," "border weight >= 1px"). The semantic level allows creative interpretation but enables gaming (technically satisfying rules with invisible values). The physical level constrains creative interpretation but prevents gaming.

The adversarial agent (report 11) called the perception thresholds "a genuine innovation" -- "no prior prompt in this project defined minimum perceptible deltas." This innovation emerged from the FAILURE: the flagship experiment proved that semantic-level rules produce semantic-level compliance (technically correct, physically invisible). Physical-level rules produce physical-level compliance (measurably visible). The downside is rigidity: physical thresholds assume specific viewing conditions (display calibration, ambient lighting, visual acuity) that may vary. But for LLM agent builders who lack biological visual perception, physical thresholds are the only viable mechanism for ensuring perceptible output.

---

## CROSS-CUTTING PATTERN: THE DECISION ARCHITECTURE'S DNA

Across all 7 decisions, a consistent pattern emerges. Every decision moved in the same direction along 5 axes:

### Axis 1: Specificity (Abstract -> Concrete)
- Master prompt: "channels active," "mechanisms deployed," "coherence score >= 0.30"
- Remediation: exact CSS code blocks, specific RGB values, named file paths

### Axis 2: Locus of Judgment (Builder -> Spec Author)
- Master prompt: builder interprets constraints and makes creative decisions
- Remediation: 11 research agents pre-compute design decisions, builder executes faithfully

### Axis 3: Failure Mode Prevention (Post-hoc Detection -> Pre-authoring Constraint)
- Master prompt: Mode 4 PA at Gate 5 catches failures AFTER building
- Remediation: perception thresholds prevent failures DURING building

### Axis 4: Team Topology (Distributed -> Centralized Execution)
- Master prompt: 19 agents across 5 passes with communication mandates
- Remediation: 11 agents produce research, 1 agent executes

### Axis 5: Document Format (Constraint List -> Implementation Guide)
- Master prompt: 97 rule IDs in FAIL IF format
- Remediation: 9 sequential phases with CSS code blocks and perception checkpoints

The aggregate direction is: FROM "enable creative quality through constrainted freedom" TO "ensure reliable quality through pre-computed specificity."

This is not a universally correct direction. The master prompt's approach COULD produce higher quality than the remediation IF the builder had sufficient creative judgment (the Opus + constraint model that produced CD-006 at 39/40). But the evidence showed that the master prompt's approach requires an unreliable precondition (builder creative judgment) while the remediation's approach requires only a reliable precondition (builder compliance). The decision architecture chose RELIABILITY over CEILING.

---

## APPENDIX: DECISION DEPENDENCY MAP

```
Decision 1 (Approach B: CSS+HTML)
  └── Decision 3 (Phase ordering: dealloc -> HTML -> CSS)
       ├── Evidence: css-budget-analyst found 23.7% waste (Phase 0 justified)
       ├── Evidence: adversarial confirmed CSS-only caps at 3/4 (Phase 1 justified)
       └── Evidence: sequential dependency (Phase 1 class names before Phase 2 selectors)

Decision 2 (11 specialized agents)
  └── Decision 5 (Recipe format with exact values)
       ├── Evidence: 11 agents pre-computed design decisions
       ├── Evidence: retrospective finding #1 (recipe > checklist)
       └── Decision 7 (Hardcoded perception thresholds)
            └── Evidence: 7/8 concordance on sub-perceptual failure

Decision 4 (Single builder)
  └── Decision 6 (4-wave architecture)
       ├── Evidence: flagship 19-agent failure (multi-agent != quality)
       ├── Evidence: Middle-tier single-builder success
       └── Evidence: remediation = single-file modification (no parallelism)
```

All 7 decisions are traceable to 3 root evidence sources:
1. The flagship experiment failure (PA-05 1.5/4, 19 agents, zero communication)
2. The Middle-tier experiment success (PA-05 4/4, 8 agents, recipe format)
3. The retrospective's 10 master takeaways (especially #1 playbook generation, #2 dual-track prompt, #3 perception floors)

---

**END OF DECISION ARCHITECTURE ANALYSIS**

**Total decisions analyzed: 7**
**Total alternatives considered: 21 (3 per decision)**
**Total counterfactuals explored: 14 (2 per decision)**
**Key meta-finding: All 7 decisions move from abstract/distributed/post-hoc to concrete/centralized/pre-authoring -- a coherent architectural shift driven by empirical failure evidence.**
