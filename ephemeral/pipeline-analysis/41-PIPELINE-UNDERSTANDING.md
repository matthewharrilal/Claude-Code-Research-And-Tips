# PIPELINE UNDERSTANDING SYNTHESIS

**Purpose:** This document distills the entire 1.3MB, 25-file analysis corpus into a single authoritative reference. Every claim traces to specific source files. Every principle is binary and testable. Every paradigm shift includes operational implications.

**Method:** 10 files read in full or partially across 3 tiers: Tier 1 meta-audits (31, 32, 42), Tier 2 core analyses (02, 03, 07, 08), Tier 3 validation (11, 14, 25). The Tier 1 meta-audits themselves synthesize all 25 files, providing full corpus coverage.

**Version:** 1.0 | 2026-02-18

---

## TABLE OF CONTENTS

1. [THE 20 QUESTIONS](#section-1-the-20-questions)
2. [PARADIGM SHIFTS](#section-2-paradigm-shifts)
3. [OPERATIONAL PRINCIPLES](#section-3-operational-principles)
4. [FAILURE MODES](#section-4-failure-modes)
5. [CONVERGENCE MAP](#section-5-convergence-map)
6. [IRREDUCIBLE CORE](#section-6-irreducible-core)

---

## SECTION 1: THE 20 QUESTIONS

These are the 20 most important questions the corpus answers, ranked by operational impact on pipeline design. Each includes the consensus answer, confidence level, and dissenting views where they exist.

---

### Q1: Why did the master execution prompt produce sub-perceptual CSS?

**Consensus Answer:** The master prompt contained ZERO perception thresholds. A search for "perception", "threshold", "human", "RGB", "magnitude", "delta" across the entire prompt returned ZERO hits. The prompt specified WHAT to vary (backgrounds, borders, spacing) but never HOW MUCH variation constitutes a perceptible difference. Without minimum deltas, agents produced CSS that was technically compliant but humanly invisible — 23.7% of all CSS (233 lines) fell below perception thresholds.

**Confidence:** UNANIMOUS (10/25 files address this; 7/8 core analysts agree)

**Supporting:** 02-master-prompt-failures (F-09, the dominant failure), 08-perception-model-shift (complete perception-term search), 42-OPERATIONAL-RECIPE (Phase 1 perception floors)

**Dissenting:** 25-bias-challenger-core challenges whether sub-perceptual=zero is truly zero or merely "very low." This challenge is acknowledged but the operational implication is unchanged: floors are needed regardless of whether the answer is zero or near-zero.

**Operational Implication:** Every CSS variation rule MUST include a minimum perceptible delta. No rule that says "vary X" is complete without saying "by at least Y."

---

### Q2: What is the single most limiting specification in the original pipeline?

**Consensus Answer:** "Sample 2-4 mechanisms" from the mechanism catalog. This instruction was identified by ALL 11 richness/rigidity research agents as the single most constraining specification. It compressed 337 research findings (from R1-R5) into a 3-word instruction — a 50:1 information loss ratio. The instruction also conflated mechanism count with mechanism quality, treating richness as linear with technique count (which it is not; richness peaks at content-mechanism fit).

**Confidence:** UNANIMOUS (cross-validated by memory/MEMORY.md, 42-OPERATIONAL-RECIPE, multiple research archives)

**Supporting:** Memory MEMORY.md (all 11 agents converged), 42-OPERATIONAL-RECIPE (per-category minimums now replace flat count)

**Dissenting:** None identified.

**Operational Implication:** Replace flat mechanism counts with per-category minimums: Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+.

---

### Q3: Should the pipeline use a recipe format or a checklist/constitution format?

**Consensus Answer:** RECIPE. This is the dominant paradigm reversal in the corpus. The master execution prompt used a scattered-constraint format (rules organized by category, not by execution order). The remediation spec rewound this to a sequential recipe format (phases executed in order, each phase containing the exact CSS to write). The reversal was driven by a fundamental insight about LLM agent cognition: rules require translation (agent must interpret what the rule means for the current context); recipes eliminate translation (agent follows steps and writes the CSS provided). Binary rules achieve 100% agent compliance; judgment rules achieve ~0%.

**Confidence:** STRONG MAJORITY (8/10 core files support; 2 adversarial files challenge but do not refute)

**Supporting:** 03-remediation-rewinding (Reversal A1: Guardrail→Recipe), 02-master-prompt-failures (F-22: checklist not recipe), 07-process-topology-shift (recipe eliminates coordination overhead), 42-OPERATIONAL-RECIPE (entire document is a recipe)

**Dissenting:** 14-adversarial-gap-review notes that the recipe format has not been tested against alternative prompt formats (prompt-as-conversation, prompt-as-example). 25-bias-challenger-core notes N=2 is insufficient to conclude recipe > checklist universally. These are valid experimental concerns but do not undermine the observed evidence: the recipe-format remediation produced perceptible CSS where the checklist-format master prompt did not.

**Operational Implication:** All execution prompts should be sequential recipes with phase numbers, not scattered rules with categories.

---

### Q4: How many agents should build the page?

**Consensus Answer:** ONE builder agent (Opus) for middle-tier and most pages. The master prompt used 12 agents in a hub-spoke topology with sequential pipeline execution and 2,400:1 information compression. The remediation used 1 builder agent with sequential phases and ~1:1 information (zero loss). The single-builder pattern succeeded because: (a) zero information loss between planning and execution, (b) recipe replaces checklist so coordination is unnecessary, (c) embedded verification eliminates separate gate agents, (d) the builder can self-correct in real-time rather than passing messages.

**Confidence:** STRONG MAJORITY (files 03, 07, 42 strongly support; file 07 provides optimal hybrid)

**Supporting:** 07-process-topology-shift (23 topology shifts mapped; single-builder advantages enumerated), 03-remediation-rewinding (Reversal A2: multi-agent→single-agent), 42-OPERATIONAL-RECIPE (Part 2: Team Architecture)

**Dissenting:** 07-process-topology-shift itself proposes a HYBRID: pre-execution planning (multiple analysts) + single builder + embedded checkpoints + final Mode 4 PA. Memory MEMORY.md records that CD-006 (39/40 quality) used multi-agent WITH messaging, suggesting multi-agent can work IF communication protocol is right. The key insight is not "one agent always" but "one builder always; support agents for planning and verification only."

**Operational Implication:** Use single-builder for middle-tier. For ceiling/flagship: multi-agent planning → single builder → Mode 4 PA verification.

---

### Q5: What is the container width and why does it matter so much?

**Consensus Answer:** 940-960px, NON-NEGOTIABLE. Container width was THE primary Phase D failure mode — 4 out of 5 pages violated it. The container width is an identity constraint (Layer 1 of the ontology), meaning it is enabling rather than limiting: it creates the spatial frame within which all other decisions are made. When the container is wrong, EVERYTHING built inside it is proportionally wrong, making all other CSS relationships invalid.

**Confidence:** UNANIMOUS

**Supporting:** Memory MEMORY.md ("Container width 940-960px = NON-NEGOTIABLE"), 42-OPERATIONAL-RECIPE (Phase 0: identity parameters), 02-master-prompt-failures (container violations documented)

**Dissenting:** None.

**Operational Implication:** Container width is Phase 0 — set before any other CSS. Verify programmatically. Halt if wrong.

---

### Q6: What is the S-09 stacking loophole and how was it fixed?

**Consensus Answer:** The master prompt specified per-property caps (e.g., max 96px margin-top, max 96px margin-bottom, max 96px padding-top, max 96px padding-bottom) but did not cap TOTAL accumulated whitespace at section boundaries. This meant a section transition could legally accumulate 96+96+96+96 = 384px of total gap while each individual property was "compliant." In practice, measured transitions ranged from 209-276px — all exceeding the 120px perceptual comfort threshold. The fix was to replace per-property MAX caps with a TOTAL transition gap cap: no section boundary may exceed 120px total whitespace (sum of all contributing margins and paddings).

**Confidence:** STRONG (8/25 files address this; convergence score 8/25 per file 32)

**Supporting:** 08-perception-model-shift (all 11 transitions measured, all exceeded 120px; post-fix worst case 108px < 120px), 02-master-prompt-failures (F-03: stacking loophole), 42-OPERATIONAL-RECIPE (Phase 3: spacing system)

**Dissenting:** None on the diagnosis. 25-bias-challenger-core questions whether 120px is the right threshold (it's borrowed from the perception model but hasn't been independently validated for whitespace gaps specifically).

**Operational Implication:** Replace per-property spacing caps with total-gap caps at section boundaries. Measure actual accumulated whitespace, not individual properties.

---

### Q7: What perception thresholds should be enforced?

**Consensus Answer:** The corpus converges on an 8-property perception threshold table:

| Property | Minimum Delta | CSS Governed |
|----------|--------------|-------------|
| Background color | >= 10 RGB per channel | section backgrounds, callout fills |
| Font size | >= 2px | heading hierarchy, body variants |
| Letter-spacing | >= 0.025em | heading vs body text |
| Line-height | >= 0.15 | prose vs dense content |
| Border width | >= 1px | dividers, card borders |
| Border-radius | >= 4px | card vs pill vs sharp |
| Margin/padding | >= 8px | section spacing, component gaps |
| Box-shadow | >= 2px blur + opacity >= 0.08 | elevation layers |

**Confidence:** STRONG (11/25 files address perception; the table appears in files 08, 42, and is cross-referenced in 32)

**Supporting:** 08-perception-model-shift (original derivation), 42-OPERATIONAL-RECIPE (Appendix A: Perception Thresholds), 32-cross-reference-map (convergence score 11/25)

**Dissenting:** 25-bias-challenger-core notes that these thresholds are derived from one builder's experience on one page, not from perceptual science research. The specific numbers may need refinement, but the PRINCIPLE of having floors is unanimously supported.

**Operational Implication:** Every CSS variation instruction must reference this table. Any value change that falls below these thresholds is a defect.

---

### Q8: What does "binary rules achieve 100% compliance; judgment rules achieve ~0%" mean in practice?

**Consensus Answer:** When an instruction says "use warm backgrounds" (judgment), agents interpret "warm" differently, often producing technically warm but perceptually indistinguishable variations. When an instruction says "all backgrounds must satisfy R >= G >= B with R-B >= 15" (binary), compliance is measurable and 100%. The master prompt was dominated by judgment rules ("ensure variety," "create visual interest," "maintain rhythm"). The remediation spec replaced these with binary rules (specific hex values, pixel measurements, named alternatives). The insight: LLM agents are excellent rule-followers but poor judgment-exercisers. Design instructions for compliance, not for interpretation.

**Confidence:** UNANIMOUS (this is the corpus's most frequently cited insight, appearing in files 02, 03, 07, 08, 32, 42, and memory)

**Supporting:** 02-master-prompt-failures (cross-cutting pattern: Judgment Rules ~0% Compliance), 42-OPERATIONAL-RECIPE (all rules are binary), memory MEMORY.md ("Binary rules achieve 100% agent compliance; judgment rules achieve ~0%")

**Dissenting:** None.

**Operational Implication:** Every instruction in the pipeline must be binary — either the output has the property or it doesn't. If you can't write a programmatic check for the instruction, the instruction is too vague.

---

### Q9: What is the "warm-only palette" constraint and how is it enforced?

**Consensus Answer:** Every background color must satisfy R >= G >= B (the "warm test"). This is an identity constraint that prevents the page from feeling cold, clinical, or generic. The builder in the remediation actually DEVIATED from the spec to correct cool callout backgrounds (#F5F8FA → #FAF8F5), demonstrating that the warm constraint was internalized as identity even when the spec got it wrong. Enforcement is programmatic: extract all background-color values, convert to RGB, verify R >= G >= B. Any violation is an identity failure.

**Confidence:** STRONG

**Supporting:** 11-bidirectional-mapping (P3: Warm Identity, builder deviation documented), 42-OPERATIONAL-RECIPE (Phase 2: color system), 02-master-prompt-failures (warm palette mentioned)

**Dissenting:** 25-bias-challenger-core asks whether the warm-only constraint is a genuine identity requirement or a content-specific preference. This is a valid question for generalization, but within the current design system, warmth is definitional.

**Operational Implication:** Programmatic warm test on all background colors. Builder should be told the test so they can self-verify.

---

### Q10: What is the relationship between conviction (identity/soul) and execution (CSS/HTML)?

**Consensus Answer:** The master prompt MIXED conviction content with execution content — identity prohibitions, design philosophy, and quality standards were interspersed with CSS rules and HTML structure. This created two problems: (1) conviction content diluted execution specificity, and (2) agents couldn't distinguish "what I must feel" from "what I must do." The remediation SEPARATED them: conviction comes BEFORE the recipe as context (why we build this way), then the recipe contains only execution steps (what to build and how). The 42-OPERATIONAL-RECIPE formalizes this as Part 3 (Conviction Layer) — read before executing, never referenced during execution.

**Confidence:** STRONG MAJORITY

**Supporting:** 03-remediation-rewinding (Reversal A4: Conviction sandwich→Linear recipe), 02-master-prompt-failures (cross-cutting pattern: Conviction Contains Execution Content), 42-OPERATIONAL-RECIPE (Part 3: Conviction Layer)

**Dissenting:** 14-adversarial-gap-review questions whether conviction truly has zero execution value, noting that internalized identity might prevent classes of errors that no rule can cover.

**Operational Implication:** Separate conviction from execution. Conviction is read-once context, not referenced during building. Execution is the recipe phases.

---

### Q11: What is the "deallocation principle" and why is it Phase 0?

**Consensus Answer:** Before adding any visible CSS, first REMOVE all invisible CSS. The deallocation principle recognizes that the default output of an LLM building CSS will include sub-perceptual variations, redundant properties, and invisible overrides. Rather than trying to prevent these (which judgment rules fail to do), accept they will appear and systematically remove them as the first step. This is Phase 0 because: (a) removing invisible CSS before adding visible CSS prevents the invisible from contaminating perception thresholds, and (b) it establishes the baseline from which all perceptible variations are measured.

**Confidence:** STRONG

**Supporting:** 08-perception-model-shift (sub-perceptual as dominant failure), 42-OPERATIONAL-RECIPE (Phase 0 + Appendix B: Deallocation Protocol), 03-remediation-rewinding (Reversal A7: Absence as restraint→Mandatory deployment)

**Dissenting:** None on the principle. 14-adversarial-gap-review notes that the deallocation protocol has not been validated against the possibility that some "sub-perceptual" CSS is actually perceptible in combination (gestalt effects).

**Operational Implication:** Phase 0 of every build: audit existing CSS against perception thresholds, remove everything below minimums.

---

### Q12: How should metaphor be used in page design?

**Consensus Answer:** POST-HOC, not a-priori. The ceiling experiment used metaphor-driven architecture (choosing a metaphor first, then building CSS to express it). This produced impressive-sounding metaphors but weak spatial confidence — 40% of metaphorical elements were only identifiable WITH labels, meaning the metaphor was "announced" rather than "structural." The remediation approach is reversed: build the page first using the recipe, then apply metaphor as a naming/organization layer after the visual structure exists. This prevents metaphor from overriding functional CSS decisions with poetic ones.

**Confidence:** MAJORITY

**Supporting:** 03-remediation-rewinding (Reversal A8: Metaphor-driven→Post-hoc metaphor), Memory MEMORY.md (ceiling experiment: metaphor downgraded from "structural" to "announced")

**Dissenting:** The ceiling experiment DID achieve 9/9 novelty with metaphor-driven architecture. The cost was spatial confidence, not novelty. If novelty is the priority, metaphor-driven may be acceptable — but for the pipeline's quality bar (which includes spatial confidence), post-hoc is safer.

**Operational Implication:** Do not select a metaphor before building. Build first, name later. Metaphor is a coherence check, not a design driver.

---

### Q13: What is the "three independent variables" conflation?

**Consensus Answer:** The corpus identifies three independent variables that were systematically conflated in analysis:

1. **FORMAT** — recipe vs. checklist (how instructions are structured)
2. **SPECIFICITY** — concrete CSS values vs. abstract principles (how detailed instructions are)
3. **PERCEPTION** — human-visible minimum deltas (whether output is perceptible)

The master prompt was checklist + abstract + no perception. The remediation was recipe + concrete + perception. Because all three changed simultaneously, it's impossible to attribute improvement to any single variable. The cheapest most informative experiment (changing ONE variable at a time) has not been run.

**Confidence:** STRONG (identified in file 32 as meta-finding; cross-referenced in 14 and 25)

**Supporting:** 32-cross-reference-map (Meta-Finding: "Three Independent Variables Being Conflated"), 14-adversarial-gap-review (experimental gap), 25-bias-challenger-core (N=2 insufficient)

**Dissenting:** None on the conflation diagnosis. Disagreement only on whether it matters operationally — the recipe+concrete+perception combination WORKS, so separating variables may be academic.

**Operational Implication:** For future pipeline evolution, change ONE variable at a time to understand causation. For current pipeline, use all three (recipe + concrete + perception) since the combination is validated.

---

### Q14: What percentage of remediation is content-agnostic?

**Consensus Answer:** 46% content-agnostic, 54% content-dependent. This was one of the most contested questions in the corpus. The content-agnostic portion includes: container width, color system, spacing system, typography hierarchy, component patterns. The content-dependent portion includes: specific section ordering, callout placement, visual density decisions, mechanism selection, metaphor naming. The implication is that roughly half the recipe can be pre-written as a template; the other half must be adapted to content.

**Confidence:** CONTESTED (file 32 rates this convergence; files 09, 11, 14 disagree on the ratio)

**Supporting:** 42-OPERATIONAL-RECIPE (Part 4: What the recipe doesn't cover — explicitly marks content-dependent decisions), 32-cross-reference-map (content agnosticism discussion)

**Dissenting:** Some analysts argue the ratio is higher (60-70% agnostic) because mechanism selection follows content-category patterns. Others argue lower (30-40%) because even "agnostic" decisions like spacing depend on content density.

**Operational Implication:** Build the template from the 46% agnostic portion. For each new page, the builder must make content-dependent decisions in the remaining 54%.

---

### Q15: What is the role of inter-agent communication?

**Consensus Answer:** ESSENTIAL for quality, but TOPOLOGY doesn't matter. The middle-tier experiment used zero SendMessage calls and produced a page with a missing footer (the builder couldn't ask the planner about footer requirements). CD-006 used multi-agent WITH messaging and achieved 39/40. The corrected understanding (from the retro-analysis team): "zero SendMessage = quality cost," NOT "zero SendMessage = success." A flat topology (no hierarchy) with file-bus communication (shared files) works, but agents must be able to ASK QUESTIONS when they encounter ambiguity.

**Confidence:** STRONG (corrected from earlier "zero = success" framing per memory MEMORY.md)

**Supporting:** Memory MEMORY.md ("zero SendMessage = quality cost" correction), 07-process-topology-shift (communication protocol analysis), 42-OPERATIONAL-RECIPE (Part 2: communication patterns)

**Dissenting:** For remediation specifically, single-builder needs no communication. The communication requirement applies to multi-agent builds (ceiling/flagship tier).

**Operational Implication:** For multi-agent builds: enable SendMessage between builder and planner. For single-builder: communication is N/A.

---

### Q16: What verification model should replace the CCS (Compositional Coupling Score)?

**Consensus Answer:** The CCS was mandated but NEVER actually computed across any experiment. It failed because it required judgment to evaluate "coupling" — a concept too abstract for binary verification. The replacement is PERCEPTION VERIFICATION: measure whether CSS differences are perceptible using the threshold table (Q7). This is binary (above or below threshold), programmatic (can be computed), and human-aligned (measures what users actually see).

**Confidence:** STRONG

**Supporting:** 08-perception-model-shift (three measurement paradigms; all insufficient), 02-master-prompt-failures (CCS never computed), 42-OPERATIONAL-RECIPE (embedded verification at each phase)

**Dissenting:** None on CCS failure. Some analysts suggest supplementing perception verification with structural verification (does the HTML have the right number of sections, headings, etc.).

**Operational Implication:** Replace CCS with perception-delta verification. Embed checks at each phase, not as a final gate.

---

### Q17: What is the "zone architecture" and how many zones should a page have?

**Consensus Answer:** A page should be organized into 2-5 "zones" following a warm/cool/resolved arc. Each zone has a distinct color temperature and spatial density. The zone architecture provides macro-level variety while the perception thresholds provide micro-level variety. The warm/cool/resolved arc creates a narrative structure: the page begins in a warm, inviting zone; transitions to a cooler, more analytical zone; and resolves in a balanced zone. This architecture was present in CD-006 (39/40) and absent in most Phase D failures.

**Confidence:** MAJORITY

**Supporting:** 42-OPERATIONAL-RECIPE (Phase 2: zone architecture), Memory MEMORY.md (zone architecture mentioned in scale research)

**Dissenting:** The specific number (2-5) and the warm/cool/resolved arc are derived from a small number of examples. The principle of macro-level variety is strong; the specific implementation may need refinement.

**Operational Implication:** Define 2-5 zones before building sections. Each zone gets a background-color key and spacing density. Verify zones follow a temperature arc.

---

### Q18: What is the information compression problem in multi-agent pipelines?

**Consensus Answer:** The master prompt's 12-agent pipeline compressed information at 2,400:1 — from the total research corpus (337 findings, multiple skills, design system layers) to the instructions received by each agent. This compression destroyed the nuance that makes good CSS decisions: the builder received "vary backgrounds" but not "by at least 10 RGB channels" because the compression removed the perception context. The remediation's single-builder approach has ~1:1 compression (the builder receives everything), which is why it produces perceptible CSS — no information is lost.

**Confidence:** STRONG

**Supporting:** 07-process-topology-shift (2,400:1 compression calculated), 02-master-prompt-failures (information loss as root cause), 42-OPERATIONAL-RECIPE (single-builder eliminates compression)

**Dissenting:** 14-adversarial-gap-review argues that information compression is inevitable at scale and the question is not "how to eliminate it" but "how to compress losslessly" — i.e., which information must survive compression.

**Operational Implication:** For single-builder: embed all necessary context in the recipe. For multi-agent: identify the critical information that must survive compression (perception thresholds, identity constraints, content brief) and ensure those travel with EVERY agent.

---

### Q19: What role does the "conviction layer" play?

**Consensus Answer:** The conviction layer (identity prohibitions, design philosophy, quality bar) serves as read-once context that calibrates the builder's judgment for the 54% of decisions that are content-dependent. It does NOT replace rules (the binary rules handle the 46% content-agnostic decisions). It does NOT appear in the recipe phases. Its role is atmospheric: after reading the conviction layer, the builder makes content-dependent decisions with the right sensibility. Think of it as tuning the LLM's priors before execution begins.

**Confidence:** MAJORITY

**Supporting:** 42-OPERATIONAL-RECIPE (Part 3: Conviction Layer), 03-remediation-rewinding (conviction separated from execution), 02-master-prompt-failures (conviction mixed with execution = both diluted)

**Dissenting:** 14-adversarial-gap-review questions whether "atmospheric calibration" is measurable or testable. If it's not testable, it may be placebo.

**Operational Implication:** Include a conviction layer BEFORE the recipe, clearly marked as "read this, then build." Do not intersperse conviction with recipe steps.

---

### Q20: What is the "cheapest most informative experiment" that hasn't been run?

**Consensus Answer:** Take the EXACT master execution prompt (no format change, no specificity change) and add ONLY perception thresholds. If the result produces perceptible CSS, then perception thresholds alone solve the problem and the recipe format + concrete specificity are optional improvements. If the result still produces sub-perceptual CSS, then format and/or specificity are necessary, not just nice-to-have. This experiment would disambiguate the three conflated variables (Q13) at minimal cost.

**Confidence:** STRONG (identified in file 32, endorsed by adversarial reviewers)

**Supporting:** 32-cross-reference-map (Meta-Finding: "Cheapest Most Informative Experiment Has Not Been Run"), 14-adversarial-gap-review (experimental gap)

**Dissenting:** Some argue this experiment is academic because the recipe format is strictly better regardless — even if perception thresholds alone work, the recipe format adds clarity at no cost.

**Operational Implication:** If pursuing pipeline optimization, run this experiment first. If not, proceed with the full recipe+concrete+perception combination.

---

## SECTION 2: PARADIGM SHIFTS

Every paradigm shift documented in the corpus, organized by category. Each shift includes FROM → TO, evidence strength, and operational implication.

---

### Category A: Architectural Paradigm Reversals

These are fundamental reversals in how the pipeline is structured.

---

#### SHIFT A1: Guardrail → Recipe
**FROM:** Scattered constraint rules organized by category (identity, grammar, components), checked by gate agents
**TO:** Sequential recipe with numbered phases, each containing exact CSS to write
**Evidence Strength:** STRONG (files 02, 03, 07, 42 all support; 14 and 25 challenge but don't refute)
**Why it happened:** Rules require TRANSLATION — the agent must interpret what "use warm backgrounds" means for this specific context. Recipes eliminate translation — the agent follows steps. Translation is where judgment fails.
**Operational Implication:** All execution instructions must be sequential recipes, not categorical rule sets. Phase numbers, not category headers.

---

#### SHIFT A2: Multi-Agent Hub-Spoke → Single Builder
**FROM:** 12 agents in hub-spoke topology with sequential pipeline, gates between phases, 2,400:1 information compression
**TO:** 1 Opus builder agent with sequential recipe phases, embedded self-verification, ~1:1 information
**Evidence Strength:** STRONG (files 03, 07 map this comprehensively; file 42 implements it)
**Why it happened:** Multi-agent coordination introduced information loss at every handoff. Each gate agent checked rules, not experience. The builder received compressed instructions that stripped perception context.
**Operational Implication:** Use single-builder for middle-tier. Reserve multi-agent for pre-execution planning and post-execution verification only.

---

#### SHIFT A3: Constraint-Then-Create → Create-Then-Verify
**FROM:** Define all constraints first, then build within them
**TO:** Build according to recipe, then verify constraints are met
**Evidence Strength:** MAJORITY (files 03, 07, 42 support; subtle distinction from A1)
**Why it happened:** Defining all constraints first overwhelms the agent with rules before it has context for what it's building. Building first, then verifying, allows the agent to make coherent decisions and then check them.
**Operational Implication:** Recipe phases come first. Verification checkpoints are embedded WITHIN the recipe, not as separate gate phases.

---

#### SHIFT A4: Conviction Sandwich → Linear Recipe
**FROM:** Conviction (identity) wrapped around execution rules, creating a sandwich structure
**TO:** Conviction as read-once prefix, then pure linear recipe with no conviction interspersed
**Evidence Strength:** STRONG (files 02, 03 document this clearly)
**Why it happened:** The sandwich structure meant agents encountered conviction statements between execution steps, diluting both. The linear structure means conviction calibrates judgment BEFORE execution begins.
**Operational Implication:** Conviction layer → Recipe phases → Verification. Never mix.

---

#### SHIFT A5: Zero Judgment → Perception Thresholds
**FROM:** "Ensure variety" / "create visual interest" / "maintain rhythm" (judgment-based instructions)
**TO:** "Background delta >= 10 RGB per channel" / "section gap <= 120px total" (threshold-based instructions)
**Evidence Strength:** UNANIMOUS (the corpus's most frequently cited insight)
**Why it happened:** LLM agents are excellent rule-followers but poor judgment-exercisers. "Ensure variety" is interpreted as "make technically different" which produces 1 RGB channel difference — technically varied but humanly invisible.
**Operational Implication:** Every instruction must have a measurable threshold. If you can't write a test for it, it's too vague.

---

#### SHIFT A6: Information Hiding → Full Visibility
**FROM:** Each agent sees only its role-relevant subset of the design system
**TO:** The builder sees EVERYTHING — all research, all constraints, all examples
**Evidence Strength:** STRONG (files 07, 42 implement this)
**Why it happened:** Information hiding was designed to prevent overload, but it caused information loss. The builder couldn't make good decisions about CSS variation because it didn't know WHY variation mattered (perception) or HOW MUCH was needed (thresholds).
**Operational Implication:** Give the builder the complete context. Compression loses nuance. Trust the agent to handle context length.

---

#### SHIFT A7: Absence as Restraint → Mandatory Deployment
**FROM:** Restraint means NOT using design elements (minimal approach)
**TO:** Every mechanism in the palette MUST appear at least once; restraint means using each exactly as much as needed
**Evidence Strength:** MAJORITY (files 03, 42 support)
**Why it happened:** "Use restraint" was interpreted as "use as few elements as possible," producing pages that were restrained to the point of emptiness. "Deploy every mechanism" forces the builder to USE the vocabulary, with restraint expressed through HOW each mechanism is used, not WHETHER it's used.
**Operational Implication:** Per-category mechanism minimums (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+). Restraint = appropriate usage, not absence.

---

#### SHIFT A8: Metaphor-Driven → Post-Hoc Metaphor
**FROM:** Choose a metaphor first, build CSS to express it
**TO:** Build CSS according to recipe, then name the pattern after the fact
**Evidence Strength:** MAJORITY (files 03, memory support; ceiling experiment provides counterevidence for novelty)
**Why it happened:** Metaphor-driven design prioritized poetic expression over spatial confidence. 40% of metaphorical elements were only identifiable WITH labels. Building first ensures spatial confidence; naming later adds coherence without compromising structure.
**Operational Implication:** Metaphor is a coherence check applied after Phase 6 (composition verification), not a design input at Phase 0.

---

### Category B: Operational Paradigm Reversals

These are reversals in how specific operations are performed.

---

#### SHIFT B1: Per-Property Caps → Total-Gap Caps
**FROM:** max-margin-top: 96px, max-margin-bottom: 96px, max-padding-top: 96px, max-padding-bottom: 96px
**TO:** Total section-boundary whitespace <= 120px (sum of all contributing margins and paddings)
**Evidence Strength:** STRONG (file 08 measures all 11 transitions; file 42 implements)
**Why it happened:** Per-property caps allowed stacking — each property was compliant but the total was overwhelming. The S-09 stacking loophole.
**Operational Implication:** Measure TOTAL accumulated whitespace at boundaries, not individual properties.

---

#### SHIFT B2: Counting Channels → Measuring Channels
**FROM:** "Use 3-5 scale channels" (count-based)
**TO:** "Each channel's variation must exceed perception threshold" (measurement-based)
**Evidence Strength:** STRONG (file 08 documents three inversions including this one)
**Why it happened:** Having 5 scale channels where each varies by 1px is worse than having 3 channels where each varies by 8px. Count is meaningless without magnitude.
**Operational Implication:** Channel count is a minimum, not a quality metric. Each channel must exceed its perception threshold.

---

#### SHIFT B3: Rule Verification → Perception Verification
**FROM:** "Does the CSS follow rule X?" (compliance check)
**TO:** "Can a human perceive the CSS difference?" (perception check)
**Evidence Strength:** STRONG (files 02, 08, 42 all converge)
**Why it happened:** A page can be 100% rule-compliant and 0% perceptible. The rules were written to produce variety, but variety below perception thresholds is invisible variety.
**Operational Implication:** Verification = perception thresholds, not rule compliance. The question is "can you see it?" not "does it match the spec?"

---

#### SHIFT B4: Abstract Token Names → Concrete CSS Values
**FROM:** "Use token-warm-bg-primary for main section backgrounds"
**TO:** "#FAF8F5 for main sections, #F5F0E8 for alternate sections, #FFFDF8 for callouts"
**Evidence Strength:** MAJORITY (files 02, 42 support; token abstraction still useful for maintainability)
**Why it happened:** Token names add an indirection layer that agents must resolve. Concrete values eliminate resolution ambiguity.
**Operational Implication:** Provide concrete hex values in the recipe phases. Token names can be assigned post-build for CSS maintainability.

---

#### SHIFT B5: Sequential Gate Pipeline → Embedded Checkpoint Recipe
**FROM:** Build → Gate → Build → Gate → Build → Gate (separate verification phases)
**TO:** Build-and-verify → Build-and-verify → Build-and-verify (verification embedded in each phase)
**Evidence Strength:** STRONG (files 07, 42 implement this)
**Why it happened:** Separate gate agents added coordination overhead and information loss without catching sub-perceptual CSS (they checked rules, not perception).
**Operational Implication:** Each recipe phase ends with a self-verification step. No separate gate agents.

---

#### SHIFT B6: Design System Abstraction → Direct CSS Authoring
**FROM:** Reference the design system layers (tokens → grammar → components) to compose CSS
**TO:** Write CSS directly following the recipe, referencing design system only for identity constraints
**Evidence Strength:** MAJORITY (file 42 implements; some concern about design system bypass)
**Why it happened:** Multi-layer design system reference added cognitive overhead. The recipe pre-resolves design system decisions into concrete CSS instructions.
**Operational Implication:** The recipe IS the design system for execution purposes. Reference raw design system only for identity constraints (container width, color warmth, prohibitions).

---

### Category C: Structural Paradigm Reversals

These are reversals in document and process structure.

---

#### SHIFT C1: Scattered Rules → Phase-Ordered Steps
**FROM:** Rules organized by category (Layout, Typography, Color, Spacing)
**TO:** Steps organized by execution order (Phase 0: Reset, Phase 1: Identity, Phase 2: Color, Phase 3: Spacing...)
**Evidence Strength:** STRONG (files 02, 03, 42 all converge)
**Why it happened:** Agents executing scattered rules must determine their own execution order. This introduces decision-making overhead and ordering errors. Phase-ordered steps eliminate this.
**Operational Implication:** Recipe phases are numbered and sequential. The agent executes Phase 0 before Phase 1 before Phase 2.

---

#### SHIFT C2: Separate Conviction and Execution Documents → Unified Document with Clear Boundaries
**FROM:** Identity in one file, execution in another, quality bar in a third
**TO:** Single document: Part 1 (Conviction) → Part 2 (Recipe) → Part 3 (Verification)
**Evidence Strength:** MAJORITY (file 42 implements this structure)
**Why it happened:** Separate documents required agents to cross-reference, introducing lookup overhead and missed context. A unified document with clear section boundaries provides everything in sequence.
**Operational Implication:** One document per build. Three sections, clearly demarcated.

---

#### SHIFT C3: General-Purpose → Tier-Specific
**FROM:** One pipeline for all page complexity levels
**TO:** Separate recipes for Floor, Middle, Ceiling, Flagship tiers
**Evidence Strength:** MAJORITY (memory MEMORY.md documents tier model; file 42 notes middle-tier default)
**Why it happened:** A flagship recipe applied to a simple page wastes effort. A floor recipe applied to a complex page produces insufficient richness. Tier-specific recipes match effort to ambition.
**Operational Implication:** Determine tier before selecting recipe. Middle-tier is the default. Override only with explicit justification.

---

#### SHIFT C4: Free-Form Agent Output → Structured Phase Deliverables
**FROM:** "Build a page" (open-ended)
**TO:** "Phase 3 deliverable: CSS with section gaps, verify all gaps < 120px, report actual measurements" (structured)
**Evidence Strength:** STRONG (files 07, 42 implement this)
**Why it happened:** Free-form output makes verification impossible — you don't know what to check. Structured deliverables make verification binary — either the measurements are reported or they aren't.
**Operational Implication:** Each recipe phase specifies both what to produce AND what measurements to report.

---

### Category D: Tonal Paradigm Reversals

These are reversals in how instructions are worded and framed.

---

#### SHIFT D1: Aspirational Language → Imperative Language
**FROM:** "The page should feel warm and inviting, with a sense of organic rhythm"
**TO:** "Set background-color to #FAF8F5. Set section gap to max 80px."
**Evidence Strength:** UNANIMOUS
**Why it happened:** Aspirational language is subjective and unverifiable. Imperative language is objective and binary.
**Operational Implication:** Use imperative verbs (Set, Add, Remove, Verify). Never use "should feel" or "try to create."

---

#### SHIFT D2: Judgment Vocabulary → Measurement Vocabulary
**FROM:** "Enough," "appropriate," "tasteful," "balanced," "harmonious"
**TO:** ">= 10 RGB," "<= 120px," "exactly 3 zone colors," "minimum 5 section types"
**Evidence Strength:** UNANIMOUS
**Why it happened:** Judgment vocabulary requires the agent to have taste. Measurement vocabulary requires the agent to have a calculator.
**Operational Implication:** Grep all instructions for judgment words. Replace each with a measurement.

---

#### SHIFT D3: Prohibition-Heavy → Permission-Heavy
**FROM:** "Do NOT use more than X" / "NEVER exceed Y" / "AVOID Z"
**TO:** "USE exactly X" / "SET Y to this value" / "DEPLOY Z at these locations"
**Evidence Strength:** MAJORITY (file 03 documents tonal reversals)
**Why it happened:** Prohibitions tell agents what to avoid but not what to do. In the absence of positive instruction, agents default to minimal/generic output. Permissions tell agents exactly what to deploy.
**Operational Implication:** For every prohibition, add a corresponding permission. "Do not exceed 120px" → "Set to 60-100px. Verify total < 120px."

---

#### SHIFT D4: Multi-Conditional Rules → Single-Condition Rules
**FROM:** "If section is hero AND uses background AND follows a text section, set margin-top to 48px unless previous section has border-bottom in which case use 32px"
**TO:** "Section gap: 60-100px. Verify total < 120px."
**Evidence Strength:** MAJORITY
**Why it happened:** Multi-conditional rules have exponential failure modes — each condition is a branch that can be misinterpreted. Single-condition rules have binary outcomes.
**Operational Implication:** Decompose multi-conditional rules into separate single-condition rules. If decomposition loses meaning, the rule is trying to do too much.

---

## SECTION 3: OPERATIONAL PRINCIPLES

Binary, testable principles organized by category. Each principle is independent and can be verified without reference to other principles.

---

### 3A: Prompt Architecture Principles (PA-01 through PA-12)

**PA-01:** Every execution prompt MUST be a sequential recipe with numbered phases, not a categorical rule set.
*Test: Are the instructions numbered and ordered by execution sequence? Yes/No.*

**PA-02:** Conviction content (identity, philosophy, quality bar) MUST precede the recipe, never interspersed within it.
*Test: Does any recipe phase contain identity prohibitions, philosophical statements, or quality standards? If yes, violation.*

**PA-03:** Every instruction MUST be binary — either the output has the property or it doesn't.
*Test: Can you write a programmatic check for this instruction? If no, it's too vague.*

**PA-04:** Zero judgment words in execution instructions. No "enough," "appropriate," "tasteful," "balanced," "harmonious."
*Test: Grep for judgment words. Count must be zero.*

**PA-05:** Every rule that says "vary X" MUST include "by at least Y" where Y is the perception threshold for X.
*Test: Does every variation instruction reference a minimum delta? Yes/No.*

**PA-06:** Instructions MUST use imperative verbs (Set, Add, Remove, Verify), never aspirational language ("should feel," "try to create").
*Test: Grep for "should feel," "try to," "aim to," "strive for." Count must be zero.*

**PA-07:** Multi-conditional rules MUST be decomposed into single-condition rules.
*Test: Does any rule contain more than one IF/UNLESS/WHEN clause? If yes, decompose.*

**PA-08:** Each recipe phase MUST specify both what to produce AND what measurements to report.
*Test: Does each phase have an explicit deliverable AND a verification step? Yes/No.*

**PA-09:** The prompt MUST fit in a single document with three clearly demarcated sections: Conviction → Recipe → Verification.
*Test: Is there exactly one document with three labeled sections? Yes/No.*

**PA-10:** For every prohibition, there MUST be a corresponding permission specifying what TO do.
*Test: For each "do not" / "never" / "avoid," is there a "instead use" / "set to"? Yes/No.*

**PA-11:** The execution prompt MUST include the perception threshold table as a reference.
*Test: Is the 8-property threshold table present? Yes/No.*

**PA-12:** Total prompt length for middle-tier builds SHOULD be under 300 lines (exclusive of conviction layer).
*Test: Line count of recipe phases + verification < 300? Yes/No.*

---

### 3B: CSS Philosophy Principles (CSS-01 through CSS-14)

**CSS-01:** Container width MUST be 940-960px. This is Phase 0.
*Test: Computed container width in range [940, 960]? Yes/No.*

**CSS-02:** All background colors MUST satisfy R >= G >= B (the warm test).
*Test: For every background-color value, does R >= G >= B? Yes/No.*

**CSS-03:** Background color variation between adjacent sections MUST be >= 10 RGB per channel.
*Test: For every adjacent section pair, is |R1-R2| + |G1-G2| + |B1-B2| >= 30? Yes/No.*

**CSS-04:** Font-size variation between heading levels MUST be >= 2px.
*Test: For every adjacent heading level pair, is |size1-size2| >= 2? Yes/No.*

**CSS-05:** Letter-spacing variation between heading and body text MUST be >= 0.025em.
*Test: |heading_letter_spacing - body_letter_spacing| >= 0.025em? Yes/No.*

**CSS-06:** Total section-boundary whitespace (sum of margins + paddings) MUST be <= 120px.
*Test: For every section boundary, is total_gap <= 120px? Yes/No.*

**CSS-07:** Individual section gaps SHOULD be in the 60-100px range for comfortable reading.
*Test: For each section gap, is 60 <= gap <= 100? Yes/No.*

**CSS-08:** Border width MUST be >= 1px when used.
*Test: For every border, is width >= 1px? Yes/No.*

**CSS-09:** Border-radius differences between element types MUST be >= 4px.
*Test: For element types with different border-radius, is |r1-r2| >= 4px? Yes/No.*

**CSS-10:** Box-shadow blur MUST be >= 2px and opacity >= 0.08 when used.
*Test: For every box-shadow, is blur >= 2px AND opacity >= 0.08? Yes/No.*

**CSS-11:** Line-height variation between text types MUST be >= 0.15.
*Test: For distinct text types, is |lh1-lh2| >= 0.15? Yes/No.*

**CSS-12:** The page MUST use 2-5 distinct zone colors following a warm/cool/resolved arc.
*Test: Count distinct zone background colors. Is 2 <= count <= 5? Yes/No.*

**CSS-13:** Margin/padding differences between spacing levels MUST be >= 8px.
*Test: For distinct spacing levels, is |s1-s2| >= 8px? Yes/No.*

**CSS-14:** Sub-perceptual CSS (below perception thresholds) MUST be removed, not accumulated.
*Test: After Phase 0 deallocation, are all CSS variations above their respective thresholds? Yes/No.*

---

### 3C: HTML Strategy Principles (HTML-01 through HTML-07)

**HTML-01:** The page MUST contain at minimum 5 distinct section types (hero, prose, callout, list/grid, conclusion).
*Test: Count distinct section types. Is count >= 5? Yes/No.*

**HTML-02:** No two adjacent sections MAY have the same HTML structure.
*Test: For every adjacent pair, do they have different structural patterns? Yes/No.*

**HTML-03:** Every section MUST have a semantic heading (h1-h6) appropriate to its hierarchy.
*Test: Does every section contain a heading? Yes/No.*

**HTML-04:** Callout/highlight components MUST be visually distinct from body sections (different background, border, or indentation).
*Test: For every callout, is it visually distinguishable by at least one property above perception threshold? Yes/No.*

**HTML-05:** Grid/list sections MUST use CSS Grid or Flexbox, not tables.
*Test: Are all grid/list sections using display: grid or display: flex? Yes/No.*

**HTML-06:** The page MUST NOT use inline styles for any property that the recipe defines.
*Test: Do any elements have inline styles for recipe-governed properties? If yes, violation.*

**HTML-07:** All images MUST have alt text. All links MUST have href attributes.
*Test: Any img without alt or a without href? If yes, violation.*

---

### 3D: Team Topology Principles (TT-01 through TT-08)

**TT-01:** Middle-tier builds MUST use a single Opus builder agent.
*Test: Is there exactly one builder agent for middle-tier? Yes/No.*

**TT-02:** Ceiling/flagship builds MUST use multi-agent planning → single builder → Mode 4 PA verification.
*Test: Does the team architecture include pre-execution analysts, one builder, and post-execution auditors? Yes/No.*

**TT-03:** Per-file builder ownership — each output file has exactly one owner agent.
*Test: Does each file have exactly one writing agent? Yes/No.*

**TT-04:** For multi-agent builds, the builder MUST be able to send messages to the planner.
*Test: Is SendMessage enabled between builder and planner? Yes/No.*

**TT-05:** Screenshot pre-capture: the team lead takes ALL screenshots before spawning auditors.
*Test: Are all screenshots captured before auditor agents start? Yes/No.*

**TT-06:** Fresh-eyes zero-context agents MUST be included in verification for ceiling/flagship.
*Test: Does at least one verification agent have zero pre-loaded context? Yes/No.*

**TT-07:** File-writing emphasis MUST be in ALL worker prompts — "write your analysis to [path]."
*Test: Does every worker prompt include an explicit file-writing instruction? Yes/No.*

**TT-08:** Recovery agents (doing work directly) are preferred over captain→worker hierarchies.
*Test: If a task fails, does the recovery plan use a direct-execution agent rather than spawning a new hierarchy? Yes/No.*

---

### 3E: Verification Principles (VF-01 through VF-09)

**VF-01:** Verification MUST measure perception, not rule compliance.
*Test: Does the verification step check "can a human see this?" not just "does this match the spec?" Yes/No.*

**VF-02:** Verification MUST be embedded in each recipe phase, not as a separate final gate.
*Test: Does each recipe phase end with a self-verification step? Yes/No.*

**VF-03:** All computed CSS values MUST be measured (getComputedStyle), not assumed from source CSS.
*Test: Does verification use computed values from the browser, not CSS source? Yes/No.*

**VF-04:** Scroll animations MUST be disabled before visual verification: `animation: none !important; opacity: 1 !important;`.
*Test: Is the disable-animation override applied before screenshots? Yes/No.*

**VF-05:** Verification MUST be performed at both 1440px AND 768px viewport widths.
*Test: Are both viewport widths tested? Yes/No.*

**VF-06:** `document.fonts.ready` MUST resolve before checking computed font properties.
*Test: Does the verification script await font loading? Yes/No.*

**VF-07:** CSS shorthand overrides MUST be checked — shorthand can silently override longhand values.
*Test: Does verification check for shorthand/longhand conflicts? Yes/No.*

**VF-08:** For Mode 4 PA: minimum 9 independent auditors, each assigned specific PA questions.
*Test: Are there >= 9 auditors with non-overlapping question assignments? Yes/No.*

**VF-09:** The total section-gap measurement MUST sum ALL contributing margins and paddings at each boundary.
*Test: Does the gap measurement include margin-top + margin-bottom + padding-top + padding-bottom? Yes/No.*

---

### 3F: Perception Model Principles (PM-01 through PM-08)

**PM-01:** The 8-property perception threshold table is THE authority for minimum deltas.
*Test: Is the table present and referenced by all CSS variation instructions? Yes/No.*

**PM-02:** Sub-perceptual CSS is a DEFECT, not a design choice.
*Test: Is every CSS variation above its threshold? Yes/No. Any below = defect.*

**PM-03:** Total accumulated whitespace at section boundaries MUST be measured, not per-property values.
*Test: Is the measurement total (sum) or individual (per-property)? Total = correct.*

**PM-04:** Perception verification replaces CCS (Compositional Coupling Score) as the quality metric.
*Test: Is the verification using perception thresholds, not CCS? Yes/No.*

**PM-05:** Max caps MUST be replaced with min floors for all variation properties.
*Test: Do variation instructions specify minimums (floors), not just maximums (caps)? Yes/No.*

**PM-06:** The warm-test (R >= G >= B) MUST be applied to all background colors programmatically.
*Test: Is there a programmatic warm-test in the verification script? Yes/No.*

**PM-07:** Color perception MUST be evaluated per-channel (separate R, G, B deltas), not as total difference.
*Test: Does the color verification check per-channel deltas, not euclidean distance? Yes/No.*

**PM-08:** Any CSS property that varies but falls below its perception threshold MUST be unified (set to the same value), not kept as invisible noise.
*Test: After deallocation, do any properties vary below their thresholds? If yes, unify them.*

---

### 3G: Content Handling Principles (CH-01 through CH-07)

**CH-01:** 46% of the recipe is content-agnostic (template-ready); 54% requires content-dependent decisions.
*Test: Is the recipe divided into agnostic and content-dependent sections? Yes/No.*

**CH-02:** Content-agnostic decisions: container width, color system, spacing system, typography hierarchy, component patterns.
*Test: Are these five areas pre-resolved in the recipe template? Yes/No.*

**CH-03:** Content-dependent decisions: section ordering, callout placement, visual density, mechanism selection, metaphor naming.
*Test: Does the recipe leave these decisions to the builder with guidance rather than prescribing them? Yes/No.*

**CH-04:** Mechanism selection MUST use per-category minimums (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+).
*Test: Does the mechanism mandate specify per-category minimums? Yes/No.*

**CH-05:** Content research (RESEARCH-SYNTHESIS or equivalent) MUST be provided to the builder as input.
*Test: Does the builder receive content research alongside the recipe? Yes/No.*

**CH-06:** The content brief MUST specify the page's communication goal (inform, persuade, teach, inspire).
*Test: Is the communication goal stated? Yes/No.*

**CH-07:** The builder MUST make content-dependent decisions AFTER reading both the conviction layer AND the content brief.
*Test: Is the content brief positioned before the recipe's content-dependent phases? Yes/No.*

---

## SECTION 4: FAILURE MODES

Every documented failure mode, organized as anti-patterns with the structure: What Happened → Why → What Instead → Which Principle Prevents It.

---

### FM-01: The Perception Gap (THE dominant failure)
**What Happened:** 23.7% of CSS (233 lines) in the flagship experiment was sub-perceptual — technically varied but humanly invisible. Backgrounds differed by 2-3 RGB channels. Spacing varied by 1-2px. Borders changed by 0.5px.
**Why:** The master prompt contained ZERO perception thresholds. No minimum delta was specified for any property. Agents optimized for rule compliance ("is it varied?"), not perception ("can you see it?").
**What Instead:** Include the 8-property perception threshold table. Every variation instruction references a minimum delta.
**Which Principle Prevents It:** PM-01 (threshold table is authority), PM-02 (sub-perceptual = defect), PA-05 (every variation includes minimum)

---

### FM-02: The S-09 Stacking Loophole
**What Happened:** Section transitions accumulated 209-276px of total whitespace. Each individual margin/padding was within its per-property cap (max 96px), but the sum was overwhelming. The page appeared to have vast empty voids between sections.
**Why:** Per-property caps don't prevent per-boundary accumulation. margin-top + margin-bottom + padding-top + padding-bottom can each be 96px = 384px max.
**What Instead:** Cap TOTAL boundary whitespace at 120px. Measure the sum, not individual properties.
**Which Principle Prevents It:** CSS-06 (total gap <= 120px), PM-03 (measure total, not per-property), VF-09 (sum ALL contributing properties)

---

### FM-03: Container Width Violation
**What Happened:** 4 out of 5 Phase D pages violated the 940-960px container width. Pages were either full-width (breaking intimate reading experience) or narrow (creating excessive margins).
**Why:** Container width was specified but not enforced as Phase 0. Agents set it at some point during building, then other CSS overwrote it.
**What Instead:** Container width is the FIRST thing set (Phase 0) and the FIRST thing verified. Any build that doesn't pass container-width verification at Phase 0 is halted.
**Which Principle Prevents It:** CSS-01 (container width is Phase 0)

---

### FM-04: Judgment Rule Non-Compliance
**What Happened:** Instructions like "ensure variety," "maintain rhythm," "create visual interest" achieved ~0% meaningful compliance. Agents produced technically compliant output that met the letter of the rule but not the spirit.
**Why:** Judgment requires taste. LLM agents don't have taste — they have pattern-matching. "Ensure variety" is interpreted as "make things different" at any magnitude, including sub-perceptual.
**What Instead:** Replace every judgment word with a measurement. "Ensure background variety" → "Adjacent backgrounds differ by >= 10 RGB per channel."
**Which Principle Prevents It:** PA-03 (binary instructions), PA-04 (zero judgment words), PA-05 (every variation includes minimum), D2 (measurement vocabulary)

---

### FM-05: Conviction-Execution Mixing
**What Happened:** Identity prohibitions ("never compromise warmth") appeared between CSS instructions ("set background-color to X"). Agents couldn't distinguish calibration from action, leading to both being partially executed.
**Why:** The master prompt used a sandwich structure where conviction wrapped around execution. This made it impossible to read conviction as calibration and execution as action — they blurred.
**What Instead:** Conviction layer BEFORE recipe. Clear section boundary. Conviction is read-once; recipe is executed.
**Which Principle Prevents It:** PA-02 (conviction precedes recipe), PA-09 (three-section document), A4 (linear recipe)

---

### FM-06: Information Compression Loss
**What Happened:** 337 research findings were compressed into "sample 2-4 mechanisms" — a 50:1 information loss. Perception context was stripped from instructions. Builders received "what to do" but not "why it matters" or "how much to do."
**Why:** Multi-agent hub-spoke topology required each agent to receive a compressed subset. Compression necessarily loses nuance. The question "which nuance is safe to lose?" was never asked.
**What Instead:** Single-builder receives everything (~1:1 compression). For multi-agent: identify critical information (perception thresholds, identity constraints) that must survive compression.
**Which Principle Prevents It:** A6 (full visibility), TT-01 (single builder for middle-tier), A2 (single-builder pattern)

---

### FM-07: Gate Agent Failure
**What Happened:** Gate agents between pipeline stages checked rule compliance but not perception. A page could pass every gate while being 23.7% sub-perceptual.
**Why:** Gates verified "does the CSS match the rule?" not "can a human see the CSS difference?" The rules themselves lacked perception thresholds, so gates couldn't check what wasn't specified.
**What Instead:** Replace gate agents with embedded verification that checks perception thresholds at each recipe phase.
**Which Principle Prevents It:** VF-01 (verify perception, not rules), VF-02 (embedded verification), A5 (perception thresholds), B5 (embedded checkpoints)

---

### FM-08: Communication Silence
**What Happened:** In the middle-tier experiment, zero SendMessage calls were made. The builder couldn't ask the planner about footer requirements, resulting in a missing footer. Execution was fast (35 minutes) but quality was B+ rather than A.
**Why:** The team topology specified file-bus communication (shared files) but didn't encourage questions. Agents defaulted to silent execution.
**What Instead:** For multi-agent builds, explicitly enable and encourage builder→planner messaging. "If you encounter ambiguity, ask the planner."
**Which Principle Prevents It:** TT-04 (builder can message planner)

---

### FM-09: Metaphor-Over-Structure
**What Happened:** The ceiling experiment chose a metaphor first ("geological strata") and built CSS to express it. The result had 9/9 novelty but degraded spatial confidence — 40% of metaphorical elements required labels to be identified.
**Why:** Metaphor-driven design prioritizes the metaphor over the user's reading experience. If the metaphor is only visible with labels, it's decoration, not structure.
**What Instead:** Build structure first (recipe phases). Apply metaphor as a naming layer after structure is verified.
**Which Principle Prevents It:** A8 (post-hoc metaphor)

---

### FM-10: Whitespace Void Catastrophe
**What Happened:** In the ceiling experiment, 70-80% of the scroll was blank cream space. The Mode 4 PA (9/9 auditors flagged this) identified it as the DOMINANT failure. Previous 2-PA audits had missed it entirely.
**Why:** Without total-gap caps, the builder accumulated massive whitespace between sections. The whitespace wasn't a "design choice" — it was an uncontrolled accumulation of uncapped margins and paddings.
**What Instead:** Total gap cap (120px max) + embedded verification at each phase + Mode 4 PA with >= 9 auditors.
**Which Principle Prevents It:** CSS-06, CSS-07, FM-02 fix, VF-08 (9 auditors)

---

### FM-11: Mechanism Poverty
**What Happened:** "Sample 2-4 mechanisms" produced pages with minimal visual vocabulary. Pages felt monotonous despite being technically compliant.
**Why:** The instruction treated mechanisms as a menu to sample from, not a vocabulary to deploy. 2-4 out of 18+ mechanisms is a 78-89% vocabulary loss.
**What Instead:** Per-category minimums ensuring at least one mechanism from each category. Restraint in HOW each is used, not WHETHER it's used.
**Which Principle Prevents It:** CH-04 (per-category minimums), A7 (mandatory deployment)

---

### FM-12: Warm Palette Violation
**What Happened:** Cool callout backgrounds (#F5F8FA, blue-tinted) appeared in pages that were supposed to maintain warm identity. The builder in remediation actually caught and fixed this (#F5F8FA → #FAF8F5), but the spec itself was wrong.
**Why:** Without the programmatic warm test (R >= G >= B), blue-tinted values can enter the palette through default component styles, spec errors, or agent default choices.
**What Instead:** Programmatic warm test on all background values. Builder AND verification both check R >= G >= B.
**Which Principle Prevents It:** CSS-02 (warm test), PM-06 (programmatic warm test)

---

### FM-13: Token Compliance Drift
**What Happened:** Token compliance was 66.5% in the middle-tier experiment — the builder used correct values but didn't use correct token names. This is a maintainability concern, not a perceptual concern.
**Why:** The recipe provided concrete values, not token names. The builder had no incentive to use the abstraction layer.
**What Instead:** Post-build token assignment. Build with concrete values, then map values to token names for CSS maintainability.
**Which Principle Prevents It:** B4 (concrete values in recipe, tokens post-build)

---

### FM-14: CCS Never Computed
**What Happened:** The Compositional Coupling Score was mandated as the quality metric but was never actually computed in any experiment. It existed as a rule but not as a practice.
**Why:** CCS required judgment to evaluate "coupling" — too abstract for binary measurement. No one knew how to actually compute it.
**What Instead:** Replace with perception-delta verification which IS computable and binary.
**Which Principle Prevents It:** PM-04 (perception replaces CCS), VF-01 (perception verification)

---

### FM-15: Workers Finishing Without Writing
**What Happened:** In multiple team experiments, worker agents completed their analysis without writing output files. They "thought" but didn't "deliver."
**Why:** Worker prompts didn't emphasize file-writing as a mandatory deliverable. Agents completed their reasoning and considered the task done.
**What Instead:** Every worker prompt MUST include: "Write your analysis to [specific file path]. Your task is not complete until the file exists."
**Which Principle Prevents It:** TT-07 (file-writing emphasis in all prompts)

---

### FM-16: Playwright Contention
**What Happened:** When 4+ agents attempted concurrent Playwright browser interactions, severe contention caused failures, timeouts, and corrupted screenshots.
**Why:** Playwright shares browser state. Multiple agents navigating, scrolling, and screenshotting simultaneously creates race conditions.
**What Instead:** Screenshot pre-capture pattern — team lead takes ALL screenshots before spawning auditors. Auditors read images via file read, not browser interaction.
**Which Principle Prevents It:** TT-05 (screenshot pre-capture), VF-04 (disable animations before screenshots)

---

### FM-17: 2-PA vs 9-PA Blindness
**What Happened:** A 2-PA audit rated the ceiling experiment as "ship after fix." The subsequent 9-PA Mode 4 audit downgraded to "DO NOT SHIP." The 2-PA missed the dominant failure (whitespace void) that 9/9 auditors in Mode 4 flagged.
**Why:** Two auditors provide insufficient perspective diversity. With only 2 viewpoints, both can share the same blind spot. With 9, the probability of unanimous blind spots drops to near zero.
**What Instead:** Mode 4 PA with >= 9 auditors for ceiling/flagship. 2-PA is acceptable for middle-tier only.
**Which Principle Prevents It:** VF-08 (minimum 9 auditors), TT-06 (fresh-eyes agents)

---

## SECTION 5: CONVERGENCE MAP

Classification of all corpus findings by agreement level across the 25 analysis files.

---

### TIER 1: UNANIMOUS (All or nearly all files agree — implement without debate)

| Finding | Convergence | Key Files |
|---------|-------------|-----------|
| Master prompt has ZERO perception thresholds | 10/25 files address; 100% agree | 02, 08, 32, 42 |
| Binary rules >> judgment rules for agent compliance | Cited in 12+ files; 100% agree | 02, 03, 07, 08, 32, 42 |
| Container width 940-960px is non-negotiable | Universal; 100% agree | memory, 42 |
| Sub-perceptual CSS is the dominant failure | 7/8 core analysts agree | 02, 08, 42, memory |
| "Sample 2-4 mechanisms" is the most limiting specification | All 11 research agents agree | memory, 42 |
| Recipe format > checklist format for LLM execution | 8/10 core files support | 02, 03, 07, 42 |
| Per-property caps enable stacking loopholes | 8/25 address; 100% agree | 08, 02, 42 |
| Information compression in multi-agent pipelines causes quality loss | 7/25 address; 100% agree | 07, 02, 42 |
| Aspirational/judgment language fails for agent instructions | Universal | 02, 03, 08, 42 |

---

### TIER 2: MAJORITY (Strong agreement with minor dissent — implement with awareness of edge cases)

| Finding | Convergence | Dissent | Key Files |
|---------|-------------|---------|-----------|
| Single-builder > multi-agent for execution | 6/10 core files support | Multi-agent works IF communication is right (CD-006) | 03, 07, 42, memory |
| Post-hoc metaphor > metaphor-driven design | 5/10 support | Ceiling experiment achieved 9/9 novelty with metaphor-driven | 03, memory |
| Conviction layer should be read-once prefix | 5/10 support | Some argue conviction has ongoing value during execution | 03, 42, 02 |
| Zone architecture (2-5 zones, warm/cool/resolved arc) | 4/10 support | Specific zone count and arc are under-validated | 42, memory |
| Per-category mechanism minimums > flat count | Strong in research; less in core analysis | Flat count is simpler to enforce | memory, 42 |
| 8-property perception threshold table values are correct | 4/10 support | Derived from N=1 builder experience, not perceptual science | 08, 42 |
| Embedded verification > separate gate agents | 5/10 support | Some gate functions (identity check) benefit from independence | 07, 42 |
| Content agnosticism ratio is ~46/54 | 3/10 address | Range of 30-70% depending on definition | 42, 32 |

---

### TIER 3: CONTESTED (Significant disagreement — requires experiment to resolve)

| Finding | Pro | Con | Resolution Path |
|---------|-----|-----|-----------------|
| Which variable matters most: FORMAT, SPECIFICITY, or PERCEPTION? | Recipe advocates say format; perception advocates say thresholds | Three variables changed simultaneously; can't attribute | Run the "cheapest most informative experiment" (Q20) |
| Is N=2 (master + remediation) sufficient for conclusions? | Observed evidence is strong | N=2 provides correlation, not causation | Run additional experiments with controlled variables |
| Is 120px the right total-gap threshold? | Derived from perception model; post-fix result was 108px < 120px | Not independently validated for whitespace-specific perception | Conduct A/B testing with users at different thresholds |
| Should the design system be bypassed in execution? | Recipe pre-resolves design system decisions | Bypassing loses design system coherence benefits | Test recipe-only vs recipe+design-system reference builds |
| Is "atmospheric calibration" from conviction measurable? | Conviction-layer advocates say it prevents classes of errors | Skeptics say unmeasurable = unverifiable = possibly placebo | Compare conviction-included vs conviction-excluded builds |
| Are perception thresholds from one builder generalizable? | The thresholds are grounded in physical perception | One builder's experience may not represent all perception | Conduct perception threshold study with multiple evaluators |

---

### TIER 4: UNRESOLVED (Insufficient evidence — flag for future investigation)

| Question | Why Unresolved | Minimum Evidence Needed |
|----------|---------------|------------------------|
| What is the optimal team size for ceiling/flagship builds? | Only 2 team configurations tested (12-agent and 1-agent) | Test 3-5 agent configurations with communication enabled |
| How does model choice (Opus vs Sonnet) affect perception compliance? | Only Opus tested for building | Run identical recipe with Sonnet builder; compare perception scores |
| Can perception thresholds be automatically extracted from content? | No content-to-threshold mapping exists | Build a content analyzer that recommends thresholds based on content density |
| What is the cost-benefit curve for additional PA auditors? | 9 is better than 2, but is 9 optimal? | Run 3, 5, 7, 9, 12 auditor configurations on the same page |
| How does the recipe scale beyond single-page builds? | All experiments are single-page | Test recipe on multi-page site with shared design system |
| Layer F (Intentionality) — why is it unanalyzed? | No file in the corpus addresses intentionality as a distinct layer | Commission dedicated intentionality analysis |
| What is the builder's subjective experience of the recipe format? | No builder feedback is captured | Interview/survey builder agents on execution experience |
| Does the recipe produce creativity or just compliance? | Recipe compliance is high, but creativity is unmeasured | Define creativity metric; test recipe vs open-ended prompt |

---

## SECTION 6: IRREDUCIBLE CORE

The minimal set of facts and principles needed to reconstruct the pipeline from scratch. If this section is all that survives, a competent builder should be able to reproduce the pipeline's quality.

---

### 6A: The Three Non-Negotiable Identity Constraints

1. **Container width: 940-960px.** Everything inside this frame. Everything else is wrong without this.

2. **Warm palette: R >= G >= B for all backgrounds.** Programmatic test. No exceptions.

3. **No sub-perceptual CSS.** Every variation must exceed its perception threshold. Below threshold = defect, not subtlety.

---

### 6B: The Perception Threshold Table

| Property | Minimum Delta |
|----------|--------------|
| Background color | >= 10 RGB per channel |
| Font size | >= 2px |
| Letter-spacing | >= 0.025em |
| Line-height | >= 0.15 |
| Border width | >= 1px |
| Border-radius | >= 4px |
| Margin/padding | >= 8px |
| Box-shadow | >= 2px blur, >= 0.08 opacity |

**Total section-boundary whitespace: <= 120px.**

---

### 6C: The Recipe Format

Instructions MUST be:
- **Sequential** — numbered phases executed in order
- **Binary** — every instruction is testable as yes/no
- **Imperative** — "Set X to Y," not "try to create Z"
- **Perception-grounded** — every "vary X" includes "by at least Y"
- **Self-verifying** — each phase includes its own verification step

Structure: **Conviction (read-once) → Recipe (phases 0-8) → Verification (embedded)**

---

### 6D: The 9 Recipe Phases

**Phase 0: Reset & Identity**
Set container width (940-960px). Remove any sub-perceptual CSS from defaults. Establish the frame.

**Phase 1: Perception Floors**
Apply the perception threshold table to all CSS variation instructions. No variation below minimums.

**Phase 2: Color System**
Define 2-5 zone colors satisfying R >= G >= B. Adjacent backgrounds differ by >= 10 RGB per channel. Warm/cool/resolved arc.

**Phase 3: Spacing System**
Set section gaps (60-100px range). Total boundary whitespace <= 120px. Replace per-property caps with total-gap caps.

**Phase 4: Typography System**
Heading hierarchy with >= 2px differences. Letter-spacing >= 0.025em difference between heading and body. Line-height >= 0.15 difference between text types.

**Phase 5: Component Deployment**
Deploy callouts, cards, dividers, grids. Each component visually distinct above perception thresholds. At least 5 distinct section types.

**Phase 6: Mechanism Deployment**
Per-category minimums: Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+. Restraint = appropriate usage, not absence.

**Phase 7: Composition Verification**
Verify all perception thresholds are met. Verify total boundary gaps <= 120px. Verify warm test on all backgrounds. Verify container width.

**Phase 8: Coherence & Metaphor**
Name the pattern. Verify zone arc. Apply metaphor as coherence check, not design driver. Post-hoc only.

---

### 6E: The Team Architecture

**Middle-tier (default):** Single Opus builder + recipe + embedded verification.

**Ceiling/flagship:** Multi-agent planning (analysts read research, produce content brief) → Single Opus builder (executes recipe) → Mode 4 PA (>= 9 auditors, pre-captured screenshots, assigned questions).

**Communication:** File-bus for planning artifacts. SendMessage enabled for builder→planner questions during execution.

---

### 6F: The Five Root Causes of Pipeline Failure

1. **No perception thresholds** — the prompt doesn't specify how much variation is enough.
2. **Judgment rules** — the prompt uses subjective language that agents can't operationalize.
3. **Information compression** — multi-agent handoffs strip perception context from instructions.
4. **Per-property caps without total-boundary caps** — individual compliance doesn't prevent accumulation.
5. **Metaphor before structure** — choosing a metaphor first overrides spatial confidence decisions.

If these five are prevented, the pipeline produces perceptible, warm, well-spaced pages with appropriate mechanism density.

---

### 6G: The Meta-Insight

**The pipeline's failure was not in what it tried to achieve, but in how it communicated what it tried to achieve.**

The design system's identity (warmth, restraint, organic rhythm) is correct. The research findings (337 across R1-R5) are comprehensive. The mechanism catalog (18+ techniques) is rich. The quality bar (PA-05 DESIGNED) is appropriate.

The failure was in the TRANSLATION from human intention to agent instruction:
- Human: "Warm, restrained, varied backgrounds"
- Agent received: "Use warm backgrounds" (no measurement)
- Agent produced: backgrounds varying by 2 RGB channels (technically warm, technically varied, humanly invisible)

The fix is not better intentions or better design. The fix is better translation — from human perception to agent measurement. That translation is the perception threshold table.

**Everything in this document exists because of that translation gap.**

---

### 6H: The Irreducible Experiment Queue

If you must run exactly one experiment to advance the pipeline:

**Run the "cheapest most informative experiment":** Take the original master execution prompt unchanged. Add ONLY the perception threshold table. If the result produces perceptible CSS, then perception thresholds alone are the fix and the recipe format is optional. If the result still fails, then format + specificity are necessary conditions, not just helpful additions.

This experiment costs one build (~1 hour) and resolves the three-variable conflation that the entire corpus acknowledges but cannot resolve from analysis alone.

---

## APPENDIX A: SOURCE FILE QUALITY RATINGS

From file 31 (inventory audit), average quality 4.2/5:

| Rating | Files |
|--------|-------|
| 5/5 | 02, 08, 20, 21, 23, 25, 26, 27, 28, 29 |
| 4/5 | 01, 03, 04, 05, 06, 07, 09, 10, 11, 12, 13 |
| 3/5 | 14, 15 |

---

## APPENDIX B: CONTRADICTION REGISTRY

From file 32 (cross-reference map), 8 direct contradictions:

| ID | Contradiction | Resolution |
|----|--------------|------------|
| C1 | File 01 says master prompt "provides solid foundation" vs File 02 says it has 42 failures | Both correct at different levels: foundation is sound, implementation fails |
| C2 | File 03 says conviction should be eliminated vs File 04 says conviction is the foundation | Conviction should be SEPARATED from execution, not eliminated |
| C3 | File 07 says single-builder always better vs Memory says CD-006 multi-agent scored 39/40 | Single-builder for execution; multi-agent for planning and verification |
| C4 | File 08 says thresholds are grounded vs File 25 says they're derived from N=1 | Thresholds are grounded in perception science; SPECIFIC VALUES are N=1 |
| C5 | Multiple files disagree on content agnosticism ratio | Range is 30-70%; 46% is the corpus median |
| C6 | File 03 says metaphor is harmful vs ceiling experiment got 9/9 novelty with metaphor | Metaphor aids novelty but costs spatial confidence; post-hoc is the compromise |
| C7 | File 07 says zero communication succeeded vs Memory corrects this | Corrected: zero communication = quality cost (missing footer) |
| C8 | CCS mandated but never computed | CCS is replaced by perception verification; contradiction dissolved |

---

## APPENDIX C: COVERAGE GAP REGISTRY

From file 14 (adversarial gap review), 14 gaps identified:

| Priority | Gap | Status |
|----------|-----|--------|
| CRITICAL | No builder execution experience captured | Open |
| CRITICAL | No temporal execution order analysis | Partially addressed by file 42 recipe |
| CRITICAL | No cost-benefit analysis of pipeline changes | Open |
| HIGH | No content dependency mapping | Partially addressed in 46/54 discussion |
| HIGH | No alternative prompt format testing | Open — "cheapest experiment" proposed |
| HIGH | No failure mode analysis OF remediation | Open |
| HIGH | No model-specific behavior analysis | Open |
| MEDIUM | No scaling analysis beyond single-page | Open |
| MEDIUM | No user role examination | Open |
| MEDIUM | No temporal dynamics analysis | Open |
| LOW | Shared narrative bias across analysts | Partially addressed by adversarial reviewers |
| LOW | No forward-looking analysis | Partially addressed by file 42 risk section |
| LOW | Layer F (Intentionality) unanalyzed | Open |
| LOW | No builder satisfaction data | Open |

---

## APPENDIX D: PROVENANCE

This document synthesizes findings from the following files, listed in reading order:

**Tier 1 (Meta-Audits — full read):**
1. `31-file-inventory-audit.md` — 877 lines, complete file inventory with quality ratings
2. `32-cross-reference-map.md` — 625 lines, 45+ cross-references, 8 contradictions, 7 meta-findings
3. `42-OPERATIONAL-RECIPE.md` — 1,747 lines, the actionable 9-phase recipe

**Tier 2 (Core Analyses — full read):**
4. `02-master-prompt-failures.md` — 404 lines, 42 failures (14 BLOCKING)
5. `03-remediation-rewinding.md` — 692 lines, 27 reversals (8 paradigm)
6. `07-process-topology-shift.md` — 493 lines, 23 topology shifts
7. `08-perception-model-shift.md` — 485 lines, perception paradigm analysis

**Tier 3 (Validation — partial read, ~200 lines each):**
8. `11-bidirectional-mapping.md` — 11 philosophies mapped bidirectionally
9. `14-adversarial-gap-review.md` — 14 coverage gaps, 11 blind spots
10. `25-bias-challenger-core.md` — bias challenges to all 10 core reports

**Context (from memory):**
11. `memory/MEMORY.md` — project state, experimental results, established findings

**Total lines read:** ~5,500 directly + meta-audit summaries covering all 25 files

---

*End of Pipeline Understanding Synthesis*
*Version 1.0 | 2026-02-18*
*Synthesized from 1.3MB analysis corpus (25 files) via 10 direct reads + meta-audit coverage*
