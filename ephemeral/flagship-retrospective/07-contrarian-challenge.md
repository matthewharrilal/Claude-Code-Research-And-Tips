# 07 -- Adversarial Contrarian Challenge: Steelmanning the Prompt Against All 8 Root Causes

**Agent:** contrarian (Opus 4.6)
**Date:** 2026-02-17
**Method:** For each of the 8 root causes identified by the retrospective team, argue the OPPOSITE position as forcefully as possible, then provide an honest verdict. The goal is to prevent confirmation bias, groupthink, and premature consensus.

**Source files read in full:**
- `FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (963 lines, 97 rules, all 5 sections)
- `00-AUDIT-DATA.md` (109 lines, programmatic measurements of flagship output)
- `03-guardrail-vs-playbook.md` (359 lines, full 97-rule classification)
- `04-compression-losses.md` (100 lines read, compression traceability)
- `06-metacognitive-failure.md` (100 lines read, structural pipeline analysis)
- `16-topology-failure.md` (200 lines read, topology and communication analysis)

---

## ROOT CAUSE #1: "No Generative Arrow"

### The Claim
The prompt pipeline is purely extractive -- it extracts constraints from research but never generates operational builder instructions. No agent was tasked with writing "here is how to build a page that looks like CD-006."

### The Counter-Argument

**The prompt DOES have generative elements. The agents chose not to use them.**

Look at Section A of the prompt. A5 (Compositional Fluency, lines 56-69) contains an EXPLICIT worked example of how CD-006 achieved 39/40:

> "In CD-006's 4-act density arc, border-weight (#1) + zone backgrounds (#7) + spacing compression (#4) ALL track the same CRESCENDO trajectory. Act 1: 1px borders + warm cream + 64px padding. Act 3: 4px borders + neutral white + 32px padding."

This IS a generative instruction. It gives specific CSS values (1px/4px borders, cream/white backgrounds, 64px/32px padding) tied to specific mechanisms in a specific trajectory. A competent builder reading this would know EXACTLY how to build a crescendo arc using three channels.

Section A7 (lines 81-95) gives a LITERAL CSS code block for a transition:

```css
.transition--breathing {
  margin: var(--space-20) 0;
  border-top: 3px solid var(--color-border);
  padding-top: var(--space-20);
}
```

This is not a guardrail. This is a recipe. It provides copy-pasteable CSS.

C-05 (line 179-184) names three transition types with specific parameters: SMOOTH (48px+1px), BRIDGE (64px+bg+prose), BREATHING (80px+3px). These are not abstract concepts -- they are specific spacing and border-weight values.

The build plan itself (03-build-plan.md, 718 lines according to 16-topology-failure.md) contains "extremely detailed mechanism deployment instructions -- 14 mechanisms with per-section placement, channel ownership, interaction pairs, and CSS value specifications." The spacing contour is specified down to individual pixels.

So the claim that there is "no generative arrow" is overstated. There IS generative content in the conviction layer. There IS a specific build plan. The problem might not be absence of generative content but its LOCATION (in the conviction layer that builders skim) and its ROUTING (the builder-prompt.md excluded it).

### Honest Verdict

**PARTIALLY CORRECT.** The generative content exists but is structurally misplaced. The A5 worked example, A7 CSS code, and C-05 transition specs ARE operational instructions -- but they live in the conviction layer (Section A), which the builder-prompt.md EXCLUDED under the 75-line visibility cap. The build plan IS generative -- but it was produced by a separate Planner agent during execution, not by the prompt pipeline. So the "no generative arrow" is more precisely: "the generative content that exists is either in the wrong section (A instead of B) or outside the prompt entirely (build plan)." The pipeline itself truly does lack a generative phase. But the prompt is not entirely devoid of generative material -- it is devoid of CORRECTLY ROUTED generative material.

---

## ROOT CAUSE #2: "7.9:1 Guardrail-to-Playbook Ratio"

### The Claim
For every 1 building instruction telling a builder what CSS to write, there are 7.9 instructions telling them what NOT to write. The prompt is architecturally inverted.

### The Counter-Argument

**Maybe guardrails ARE sufficient for a capable agent. CD-006 was built with FEWER explicit instructions.**

Consider this: CD-006 scored 39/40 and was built during the CD Build + Audit phase. What was the guardrail-to-playbook ratio of CD-006's build prompt? Almost certainly even MORE guardrail-heavy. CD-006 was built with the soul rules, the prohibitions file, tokens.css, and semantic-rules.md. There was no elaborate 963-line master execution prompt with playbook sections. The builder agent had constraints and creative freedom.

The 7.9:1 ratio may not be THE problem. It may be a symptom of a different problem: **prompt VOLUME**. CD-006's builder probably had 50-100 lines of instructions total. The flagship builder had 75 lines (after the visibility cap). Both are constraint-heavy. But CD-006's builder was an Opus agent with creative latitude, while the flagship skeleton builder was a Sonnet agent told to hit spatial targets.

Furthermore, the guardrail-vs-playbook classification itself is debatable. The classifier (03-guardrail-vs-playbook.md) calls S-07 ("CPL 45-80") a guardrail. But for a competent CSS agent, knowing the target range IS the instruction -- the agent knows to calculate content-width / font-size / 0.6 and adjust max-width accordingly. Calling this a guardrail because it does not spell out `max-width: 720px` assumes an incompetent agent that cannot derive an implementation from a specification.

The entire premise assumes that LLM agents need recipes like junior developers need recipes. But these are frontier model agents. They know CSS. They know what borders look like. They know how to create callout boxes. The fact that the builder produced ZERO borders is not because no one told it to use borders -- it is because the total weight of 55 prohibition rules created an overwhelming "do not" signal that SUPPRESSED creative additions.

**The problem is not ratio. The problem is tone.** A prompt that lists 55 things NOT to do creates a risk-averse builder that plays it safe. A prompt that lists 7 things TO do creates a focused builder that builds those 7 things. The current prompt does neither -- it has 55 "don't" rules and 7 weak "do" rules, creating an agent that is terrified of violation and uncertain about construction.

### Honest Verdict

**PARTIALLY CORRECT, but the framing is misleading.** The 7.9:1 ratio is real and diagnostic, but it explains the failure through the wrong mechanism. The issue is not that agents NEED more playbook rules. CD-006 proves that a creative agent with few rules can produce a crown jewel. The issue is that 55 guardrails create an overwhelming "avoidance" signal that crowds out creative initiative. The fix might not be "add 7 playbooks" but "reduce the guardrail count to 20 and trust the agent more." The ratio diagnosis points to a real problem but may prescribe the wrong solution (more instructions instead of fewer constraints).

---

## ROOT CAUSE #3: "Builder Saw 13.4%"

### The Claim
The skeleton builder only saw 75 lines of the 530-line master prompt (13.4%), missing all compositional, multi-coherence, scale-channel, and metaphor instructions.

### The Counter-Argument

**Is this actually true? And is it actually a problem?**

First, the 13.4% figure is for the SKELETON builder only. The skeleton builder's job is to create the SPATIAL structure -- container width, section layout, header, footer. This builder was SUPPOSED to see only spatial and soul rules. The compositional rules (B3-B6) were not relevant to Pass 1 (spatial skeleton). The Mechanism Builder (Pass 2) had a DIFFERENT visibility set: build plan + tokens + prohibitions + 16-multi-coherence-invocation.md. The Metaphor Builder (Pass 3) read yet another set. The Intentionality Builder (Pass 4) read crown jewel forensics and compositional fluency docs.

The two-instance pattern (P-03) DELIBERATELY prevents builders from seeing everything. This is not a bug -- it is an intentional design to prevent continuation bias. If the skeleton builder saw all 530 lines, it would pre-commit to compositional decisions that should be made by later-pass agents. The visibility cap is a FEATURE, not a failure.

Second, the Mechanism Builder received the build plan (718 lines), which contained "extremely detailed mechanism deployment instructions -- 14 mechanisms with per-section placement, channel ownership, interaction pairs, and CSS value specifications." The mechanism builder saw FAR more than 13.4% of relevant content -- it just saw it through the lens of the build plan rather than the raw prompt.

The real question is: did the Mechanism Builder's visibility set include enough operational CSS instruction? The answer is: it included the build plan with specific values, tokens.css with the full variable library, and 16-multi-coherence-invocation.md with CCS verification. That is a substantial operational toolkit.

### Honest Verdict

**OVERSTATED.** The 13.4% figure is technically accurate for the skeleton builder but misleading for two reasons: (1) the skeleton builder SHOULD NOT see compositional rules -- that is by design, and (2) later-pass builders had different (and richer) visibility sets. However, there IS a real issue buried here: even with the visibility cap being intentional, the 75 lines the skeleton builder DID see were 100% guardrails with zero CSS recipes. The cap is fine in principle. What it CAPS DOWN TO is the problem. If those 75 lines had included 5 concrete CSS patterns instead of 5 more guardrails, the skeleton would have been richer. So: the percentage is misleading, but the CONTENT of the capped prompt is genuinely deficient.

---

## ROOT CAUSE #4: "Sub-Perceptual Variation"

### The Claim
The builder deployed variation that exists in CSS values but is below human perceptual thresholds: letter-spacing differences of 0.032px, line-height differences of 2.4px, background RGB differences of 1-8 points.

### The Counter-Argument

**Maybe the agent INTENDED imperceptible variation and was using it architecturally. Maybe this is restraint, not failure.**

Consider the soul of this design system. The A2 tensions explicitly state:

> | Restraint | Austere | Cold |

The system VALUES austerity. The identity layer (prohibitions.md) closes 55-65% of CSS. The anti-scale model says `Richness = semantic_density x restraint x spatial_confidence`. RESTRAINT is an explicit multiplier in the richness formula.

What if the builder, having absorbed the conviction layer's emphasis on restraint, chose DELIBERATELY minimal variation? What if 0.032px letter-spacing differences are the builder's interpretation of "austere restraint" -- variation so subtle it registers subconsciously but not consciously?

In typography, sub-perceptual micro-adjustments are a legitimate design technique. Professional type designers adjust kerning pairs by fractions of a point. The difference between a professionally set page and an amateur one is often in details below conscious perception that create an aggregate "feel." The builder may have been operating at this level of sophistication.

Furthermore, the audit data shows that background colors DO vary meaningfully across zones: S1 rgb(254,249,245) vs S5 rgb(254,254,254) is a shift from warm to neutral that encodes the dense-zone semantics specified in SC-10 ("warm=sparse, cool=dense"). The builder deployed exactly the chromatic-density alignment the prompt requested.

### Honest Verdict

**WRONG. This counter-argument does not hold up under scrutiny.** Here is why:

1. **The sub-perceptual variation is UNIFORM, not INTENTIONAL.** If the builder intended subtle variation as sophisticated restraint, we would expect CONSISTENT and SYSTEMATIC variation tied to content semantics. Instead, ALL 12 sections have identical p fontSize (16px), p fontWeight (400), p color (rgb(26,26,26)), and p marginBottom (16px). This is not restraint -- restraint would be choosing WHICH sections get 500 weight and which get 400, then making all of them 400. This is DEFAULT -- the builder simply never changed the values from the initial stylesheet.

2. **The chromatic variation argument is weak.** RGB differences of 1-8 points are below the just-noticeable-difference (JND) threshold for most displays, especially on warm-toned backgrounds where human color discrimination is weakest. The builder deployed background variation that is technically correct but perceptually invisible. This cannot be intentional restraint because restraint requires that the withheld variation be AVAILABLE and CHOSEN against. The builder never demonstrated the ability to deploy perceptible chromatic variation and then chose not to.

3. **CD-006 achieves restraint VISIBLY.** CD-006's restraint is in its deliberate absence zones -- sections with minimal treatment that CONTRAST with sections of high treatment. The contrast makes the restraint visible and intentional. The flagship has no contrast because EVERY section is equally minimal. Uniform minimalism is not restraint; it is monotony.

---

## ROOT CAUSE #5: "Zero Communication"

### The Claim
Zero inter-agent SendMessage calls occurred despite the prompt mandating minimum 8 substantive messages and 6 specific checkpoints. The communication protocol was designed but not enforced.

### The Counter-Argument

**Maybe communication would not have helped. The Middle-Tier experiment had zero communication too and scored PA-05 DESIGNED (4/4).**

This is explicitly documented in the memory: "Zero SendMessage = fast execution (35 min) but B+ quality." The Middle-Tier experiment proved that file-bus communication (agents write files, other agents read them) CAN produce DESIGNED-quality output. The Middle-Tier scored 4/4 on PA-05, 3/3 novel, 7/7 soul -- all without a single inter-agent message.

The argument that communication is THE differentiator is based on a sample size of 2: CD-006 (WITH communication, 39/40) and Ceiling (WITHOUT communication, DO NOT SHIP). But the Middle-Tier is the counter-example: WITHOUT communication, DESIGNED. The correlation between communication and quality may be confounded by other variables (agent model, prompt quality, content complexity, build time).

Furthermore, the flagship used 19 agents across 5 passes with genuine per-file ownership. Each agent's output was a BUILD ARTIFACT that the next agent consumed. The build plan (718 lines) is itself a massive communication document. The builder-prompt.md (71 lines) is a communication document. The content inventory, metaphor derivation, adapted content -- all of these are inter-agent communications through files. "Zero SendMessage" does not mean "zero communication." It means "zero REAL-TIME communication."

The missing footer in the Middle-Tier was blamed on zero communication (the builder could not ask the planner). But the flagship HAS a footer -- it was specified in S-04 and enforced by Gate 2. The specific failure mode that communication was supposed to prevent (missing structural elements) did not occur in the flagship.

### Honest Verdict

**PARTIALLY CORRECT but causally confused.** Zero communication is CORRELATED with the quality gap but may not be CAUSAL. Here is the nuance:

- The Middle-Tier counter-example proves that zero communication can still produce DESIGNED quality. The missing footer was the only communication-attributable defect.
- The flagship's core failure (sub-perceptual variation, zero borders, uniform typography) is not a communication problem. Even if the builder had messaged the planner saying "Container: 960px, Content-to-void: 83:17, Biggest concern: section transitions feel flat" -- what would the planner have responded? The planner did not have a playbook for perceptual amplitudes either. You cannot communicate knowledge that does not exist in the system.
- Communication MIGHT have caught the void issue (scroll positions 4000/5000/6000 being blank cream) if a spatial auditor had flagged it in real-time. But the embedded auditor DID exist (Pass 1) and the void was present from the skeleton stage.

The real finding: communication is necessary for QUALITY REFINEMENT (catching specific defects during build) but insufficient for QUALITY GENERATION (creating rich output from a guardrail-heavy prompt). The flagship's problem is generative, not coordinative. Communication cannot compensate for absent playbook content.

---

## ROOT CAUSE #6: "Coverage Not Causation"

### The Claim
The validation team checked coverage (do all rules trace to sources?) but not causation (will these rules CAUSE the desired output?). 22 validators verified that rules are correctly extracted, not that they are sufficient for producing a crown jewel.

### The Counter-Argument

**What SHOULD validation look like? Is there actually a feasible way to validate causation before execution?**

Consider what "causal validation" would require. A validator would need to:
1. Read the master prompt
2. Simulate what a builder agent would DO with these instructions
3. Predict the perceptual quality of the resulting HTML
4. Compare the predicted quality against the target (crown jewel)

This is asking a validator to mentally execute a multi-agent, multi-pass build process and predict its perceptual outcome. This is arguably harder than actually building the page. No LLM agent can reliably do this. The entire field of software engineering has been trying to predict software quality from specifications for 60 years with limited success.

The 22 validators DID perform their assigned task with rigor. The validation verdict identified 7 BLOCKING and 10 HIGH issues, all of which were fixed. The validators caught real problems: a phantom Planner agent, wrong fonts, broken file paths, competing PA assignments. These were genuine contribution.

Furthermore, the closest thing to causal validation in the pipeline IS the gate sequence. The gates are designed to DETECT quality failures during execution rather than PREDICT them before execution. Gate 1 catches spatial failures. Gate 3 catches compositional failures. Gate 5 (Mode 4 PA) catches perceptual failures. This is a detect-and-fix approach, which is the standard engineering practice. Predicting quality before execution is premature optimization of a process that has only been run a handful of times.

The real question is whether predict-before-execute is even possible for aesthetic quality. CD-006 was not predicted to score 39/40 -- it was built, audited, and scored. No amount of pre-execution validation could have predicted that specific outcome.

### Honest Verdict

**CORRECT, but the prescribed fix may not exist.** The diagnosis is accurate: validation checked coverage, not causation. But the counter-argument reveals that causal validation of aesthetic output may be fundamentally impossible before execution. The feasible alternative is not "validate causation in advance" but "build a tighter feedback loop during execution" -- real-time perceptual checks by embedded auditors, not post-hoc PA audits. The gate sequence IS the right mechanism; the problem is that the gates measure CSS values (programmatic compliance) rather than perceptual quality (human perception). Gate 3 verified 14 mechanisms and CCS but did not check whether any mechanism was PERCEPTIBLE. Adding perceptual checks to gates (not just to the final Gate 5 PA) would be the practical fix.

---

## ROOT CAUSE #7: "ABSENCE COHERENCE"

### The Claim
The conviction closing contains the rule: "If you omit a higher-order element, omit ALL elements at that tier. Consistent absence reads as restraint. Inconsistent absence reads as failure." This rule may have contributed to the builder omitting ALL borders and ALL structural elements because it partially deployed other channels.

### The Counter-Argument

**Maybe the absence coherence rule is correct and the problem is elsewhere.**

The absence coherence rule is architecturally sound. Consider the alternative: a page with 3px left borders on some callouts but no border-tops between sections, pull-quotes with borders but headers without them, some sections with structural containment and others without. This inconsistent partial deployment would look WORSE than consistent absence or consistent presence. The rule exists because the Ceiling experiment demonstrated exactly this failure mode: announced metaphor (some labels present, some absent) scored 1.5/4 on PA-05.

The rule says "consistent absence reads as restraint." This is correct. A page with zero borders, zero callouts, zero pull-quotes -- where all visual variation comes from typography, spacing, and chromatic channels -- CAN be a valid design. It is called "Swiss style" or "International Typographic Style" and it is one of the most respected design traditions. Zero borders is not inherently a failure.

The problem is not the absence coherence rule. The problem is that the builder omitted Ch4 (Structural) while ALSO failing to achieve perceptible variation in Ch1 (Chromatic), Ch2 (Typographic), and Ch3 (Spatial). If Ch4 were absent but Ch1-Ch3 were strong, the page would read as deliberate minimalism. The page fails because MULTIPLE channels are at sub-perceptual amplitude, not because ONE channel is absent.

Furthermore, the absence coherence rule targets "higher-order elements" -- metaphor vocabulary, zone labels, cognitive transitions. These are Ch7 (Intentional) elements, not Ch4 (Structural) elements. The builder may not have even applied this rule to borders. The builder may have omitted borders simply because no rule told them to ADD borders, not because the absence coherence rule told them to omit them.

### Honest Verdict

**PARTIALLY CORRECT.** The absence coherence rule is philosophically sound (consistent absence > inconsistent deployment). BUT it has a dangerous interaction with the guardrail-heavy prompt: in a prompt where no rule says "ADD borders," the absence coherence rule provides JUSTIFICATION for not adding them. A risk-averse builder that is uncertain about whether to add borders encounters this rule and thinks "well, if I add borders inconsistently, it will look like failure. Better to omit them entirely." The rule provides a rationalization for inaction. The fix is not to remove the rule but to pair it with explicit playbook entries for Ch4: "you MUST deploy borders; here is the minimum deployment." Once borders are mandatory, the absence coherence rule correctly governs HOW to deploy them (consistently, not sporadically).

---

## ROOT CAUSE #8: "2,400:1 Compression"

### The Claim
590,000 lines of research were compressed into a 963-line prompt (~612:1) or ~248 lines of execution spec (~2,400:1). This compression destroyed all operational/generative content while preserving constraint/prohibition content.

### The Counter-Argument

**Compression is necessary. What is the RIGHT compression ratio? Is the problem really compression?**

Every engineering specification in history is a compression of a larger body of knowledge. A building code compresses millennia of structural engineering into a few hundred pages. An API specification compresses implementation details into a contract surface. A recipe compresses culinary science into a procedure. Compression is not a failure -- it is the PURPOSE of a specification.

The question is whether 2,400:1 is too aggressive. But consider: the builder also has ACCESS to the full reference library (Section E, lines 740-782). The mechanism-catalog.md (18 mechanisms with impact profiles), the semantic-rules.md, tokens.css, prohibitions.md, crown jewel HTML files (DD-006, CD-006), the PA skill (774 lines), the TC skill (1,932 lines) -- all of these are routed to specific agents. The builder is not working from 248 lines in isolation. The Planner reads 6 reference files. The Metaphor Agent reads 3 files including both crown jewels. The effective compression ratio for any INDIVIDUAL agent is much lower than 2,400:1.

Furthermore, the memory notes that "Only 2.5% of planning content (430/17,084 lines) is on critical execution path." If 97.5% of the research is non-actionable planning overhead, then the true content-to-compress is not 590,000 lines but perhaps 15,000 lines of actionable findings. From 15,000 to 248 is 60:1, which is aggressive but not unusual for a specification.

The real question is: did the compression selectively preserve the WRONG content? The answer may be yes -- constraints compress cleanly (one line per rule) while operational instructions do not (they require context, examples, and judgment). But this is a selective compression problem, not a compression ratio problem. A 200:1 compression that selectively preserves the wrong content would fail equally.

### Honest Verdict

**PARTIALLY CORRECT, but the ratio framing is misleading.** The raw numbers (2,400:1 or 612:1) are sensational but misleading because:
1. Agents have access to reference files beyond the prompt (effective ratio is much lower)
2. Most of the 590k corpus is non-actionable infrastructure (meta-to-output ratio 2.6:1)
3. The ratio itself is not the failure mechanism -- SELECTIVE compression is

The real root cause is WHAT got compressed away, not HOW MUCH got compressed. Specifically: constraints survived compression because they are one-line binary rules. Operational instructions died because they require multi-line context-dependent explanations that do not compress cleanly. A prompt with the SAME ratio (248 lines) but different CONTENT (50% playbook instead of 12% playbook) would produce radically different output. The compression ratio is a correlate, not a cause.

---

## CROSS-CUTTING ANALYSIS: Are Any Root Causes Actually Symptoms?

Having argued against all 8, I see a pattern. Several root causes are SYMPTOMS of a deeper cause:

### Symptom Cluster 1: Root Causes #1, #2, #3, #8 are ONE cause

"No generative arrow" (#1), "7.9:1 ratio" (#2), "builder saw 13.4%" (#3), and "2,400:1 compression" (#8) are FOUR descriptions of the SAME underlying failure: **the pipeline's unit of analysis is the RULE, not the EXPERIENCE.**

When you extract rules from research, you get constraints. When you compress operational content, constraints survive and instructions die. When you cap builder visibility, constraints fit in 75 lines and instructions do not. When you count the ratio, constraints dominate.

These are not four independent root causes. They are four measurements of one architectural decision: to build a rule-extraction pipeline rather than an instruction-generation pipeline.

**The single root cause:** The pipeline treats design quality as a CONSTRAINT SATISFACTION problem (satisfy all rules = quality) rather than a GENERATIVE problem (follow recipes with judgment = quality).

### Symptom Cluster 2: Root Causes #5 and #7 are ENABLERS, not causes

Zero communication (#5) and absence coherence (#7) did not CAUSE the flat page. They ENABLED and RATIONALIZED it. Even with perfect communication, agents communicating guardrails would still produce a guardrail-compliant flat page. Even without the absence coherence rule, a builder with 55 prohibitions and 7 weak instructions would still produce minimal output.

These are aggravating factors. Remove them and you get a slightly less flat page, not a crown jewel.

### The True Root Cause (my contrarian thesis)

**The root cause is not in the PROMPT. It is in the PROCESS that produced the prompt.**

The prompt is the output of an extraction pipeline. The extraction pipeline is the output of a design decision: "let us extract rules from research and compile them into a specification." This design decision encoded the assumption that RULES are the unit of design quality. That assumption is wrong. The unit of design quality is the DECISION PATTERN -- a judgment-laden, context-dependent choice between alternatives.

CD-006 did not score 39/40 because it followed rules. It scored 39/40 because an Opus-level agent made hundreds of judgment calls about borders, spacing, typography, density, and composition -- and those judgment calls were GOOD. The rules prevented bad choices (no border-radius, no gradients). The quality came from good choices, which are not extractable into rules.

The implication: no amount of enriching the prompt will produce a crown jewel if the builder is a Sonnet agent executing compliance checks. The minimum viable path to a crown jewel is an Opus agent with creative latitude, soul constraints, and a few concrete examples (CD-006). The maximum effective prompt length for this is probably 200-300 lines, which is close to what we already have. The problem is not that we have too few instructions -- it is that we have too many constraints and the wrong agent model for creative work.

---

## SUMMARY TABLE

| # | Root Cause | Counter-Argument Strength | Verdict | Assessment |
|---|-----------|--------------------------|---------|------------|
| 1 | No Generative Arrow | MODERATE -- generative content exists in A5/A7/C-05 but is misrouted | PARTIALLY CORRECT | Generative content exists but is in wrong section and excluded by visibility cap |
| 2 | 7.9:1 Guardrail-to-Playbook Ratio | STRONG -- CD-006 proves creative agents need few instructions; ratio may be symptom not cause | PARTIALLY CORRECT | Ratio is real but may prescribe wrong solution (more instructions vs fewer constraints) |
| 3 | Builder Saw 13.4% | STRONG -- visibility cap is by design; later-pass builders had richer sets | OVERSTATED | Percentage is misleading; content quality of the cap is the real issue |
| 4 | Sub-Perceptual Variation | WEAK -- uniform defaults are not intentional restraint | CORRECT (root cause is correct) | Counter-argument fails: uniform values are defaults, not design choices |
| 5 | Zero Communication | MODERATE -- Middle-Tier proves zero-communication can produce DESIGNED | PARTIALLY CORRECT | Communication enables refinement but cannot compensate for absent playbooks |
| 6 | Coverage Not Causation | STRONG -- causal validation of aesthetic output may be impossible | CORRECT, but fix may not exist | Gates should include perceptual checks, not just programmatic measurement |
| 7 | Absence Coherence | MODERATE -- rule is philosophically sound but enables risk-averse inaction | PARTIALLY CORRECT | Rule needs pairing with mandatory deployment minimums |
| 8 | 2,400:1 Compression | STRONG -- raw ratio is misleading; agents have reference files; selective compression is the issue | PARTIALLY CORRECT | WHAT compressed away matters more than HOW MUCH |

### Where We Are Confusing Cause and Effect

1. Root causes #1, #2, #3, #8 are EFFECTS of a single cause: rule-extraction pipeline architecture
2. Root causes #5 and #7 are ENABLERS, not independent causes
3. Root cause #4 (sub-perceptual variation) is the TRUEST symptom of the real failure
4. Root cause #6 (coverage not causation) is a PROCESS critique, not a prompt critique

### The Deeper Cause Not Listed

**The Sonnet-for-builders decision is unexamined.** The C1 spec says "Skeleton Builders A+B (Sonnet, competitive)" and "Mechanism Builder (Sonnet)." CD-006 was built by an Opus agent. The agent model difference may be more explanatory than any prompt content difference. A Sonnet agent given 55 constraints will comply meticulously. An Opus agent given 55 constraints will comply AND make creative decisions beyond the constraints. This is not in any of the 8 root causes but may be the highest-leverage intervention.

---

**END OF CONTRARIAN CHALLENGE**
