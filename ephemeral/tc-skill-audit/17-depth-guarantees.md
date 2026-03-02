# Side B Depth Guarantees: Ensuring Genuine Engagement Without Prescribing Conclusions

**Agent:** depth-analyst (Task #32)
**Date:** 2026-03-01
**Input:** 03-dynamic-vs-static.md (dynamics-analyst), 12-identity-files-audit.md (identity-auditor), 11-feedback-loop-composition.md (composition-researcher)

---

## Executive Summary

If we remove the pre-baked personality summary ("75% austere, 95% angular..."), the agent must derive its own understanding from the actual design system files. The central risk is shallow engagement -- "it's angular and dark" -- missing the warmth/austerity tension that IS the system's most productive creative territory.

But the user's key insight reframes this: "Different agents might derive different understandings from the same corpus. One might emphasize the angularity. Another might emphasize the warmth. Both are legitimate readings."

This report establishes: (1) what shallow vs deep engagement looks like concretely, (2) how to guarantee depth through QUESTIONS rather than ANSWERS, (3) how to verify depth without prescribing conclusions, and (4) why diverse interpretation is a feature, not a bug.

---

## 1. Shallow vs Deep Engagement: Concrete Examples

### 1A. What Shallow Looks Like

An agent that reads `prohibitions.md` (419 lines) and `soul-constraints.md` (342 lines) and `tokens.css` (174 lines) shallowly would produce a Side B like:

> **Surface-level reading:**
> "The design system uses sharp corners (border-radius: 0), no shadows, no gradients. Colors are warm cream (#FEF9F5) background with near-black (#1A1A1A) text and red (#E83025) primary. Three fonts: Instrument Serif for headings, Inter for body, JetBrains Mono for code. Spacing uses a 4px base unit. The system is angular, flat, and warm-toned."

This is ACCURATE but SHALLOW. It catalogs CSS properties without understanding character. It reads like a token audit, not a personality characterization. The agent has extracted WHAT the system does but not WHO the system is.

**Diagnostic markers of shallow reading:**
- Lists CSS properties without interpreting their combined effect
- No internal tensions identified (the system is described as unitary, not complex)
- No sense of WHY these choices were made (the philosophy is absent)
- No connection between constraints and character (border-radius: 0 is stated but not understood as DECISIVENESS)
- Could describe any angular warm-toned system -- nothing specific to THIS system's personality
- No generative properties identified (constraints as boundaries, not creative catalysts)

### 1B. What Deep Looks Like

A deeply engaging agent reading the same files would produce something like:

> **Deep reading (one possible version):**
> "This system achieves authority through geometry and warmth through palette -- simultaneously. Every surface is a right angle, every corner cut with precision, but those sharp surfaces sit against warm cream, not clinical white. The system's most interesting property is this CONTRADICTION: it is austere in structure but warm in material. It treats constraints as generative -- border-radius: 0 didn't just prevent rounded corners, it forced the angular spiral in AD-004 into existence. The system believes depth is structural (hierarchy through spacing and borders) not physical (no shadows, no fake 3D). It has an editorial heritage -- this is a magazine, not an app. The border system carries semantic weight: 4px signals authority, 1px signals subtlety, and the progression between them encodes confidence gradients."

Or, equally valid:

> **Deep reading (alternate version):**
> "What struck me reading these files is how much the system defines itself through REFUSAL. 22 prohibitions, 3 soul constraints, all framed as 'NEVER.' The system knows itself by what it rejects: roundness, simulation, decoration without information. But the refusals are not ascetic -- the palette is warm, the borders are confident (not thin and timid), the heading typeface (Instrument Serif) has personality and voice. This is a system that achieves richness through discipline. The most productive territory for tension-composition would be where the discipline creates unexpected expression -- where the constraint of sharp edges FORCES a creative solution that roundness would have made unnecessary."

Both readings are DEEP. Both identify internal tensions. Both connect constraints to character. They emphasize different things. They would produce different tension derivations against the same content. **Both are correct.**

### 1C. The Difference, Structurally

| Property | Shallow | Deep |
|----------|---------|------|
| **Vocabulary** | CSS properties | Character traits |
| **Internal tensions** | None identified | At least 1 named |
| **Constraint interpretation** | Boundaries ("can't do X") | Generative ("X forces Y") |
| **Philosophy** | Absent | Present ("believes depth is structural") |
| **Specificity** | Could describe any angular system | Describes THIS system's unique character |
| **Generative potential** | Low (just a checklist) | High (tensions suggest compositional territory) |

---

## 2. Indicators of Genuine Engagement

The question is not "did the agent read the files?" but "did the agent ENGAGE with the files?" Reading is I/O; engagement is cognition. Here are indicators that distinguish them.

### 2A. Positive Indicators (Presence = Depth)

**1. Internal tension identification.** The agent names at least one place where the system contradicts itself. The warmth/austerity tension is the most obvious, but there are others:
- Warm palette vs. austere geometry
- Editorial heritage vs. digital medium
- Maximum constraint (22 prohibitions) vs. maximum creative freedom ("80% creative authority")
- Semantic weight on every element vs. generous whitespace
- Confident bold accents (4px borders) vs. restrained palette (mostly cream and near-black)

An agent that finds NO internal tensions has not engaged deeply. Every complex identity contains contradictions; finding them is the proof of engagement.

**2. Generative constraint interpretation.** The agent describes at least one constraint as CREATING something, not just PREVENTING something. The identity-auditor's finding is key here: `soul-constraints.md` explicitly states "border-radius: 0 was verified as GENERATIVE, not merely restrictive -- the angular spiral in AD-004 exists BECAUSE of this constraint." An engaging agent would notice and internalize this framing: constraints are not walls but forces.

**3. Character language (not property language).** The agent uses words like "decisive," "confident," "editorial," "honest" -- character attributes -- rather than only "angular," "flat," "warm-toned" -- visual properties. Properties describe appearance; character describes identity. The leap from properties to character requires interpretive engagement.

**4. Connection between philosophy and implementation.** The agent links the WHY to the WHAT. Not just "box-shadow: none" but "box-shadow: none because depth is structural, not physical." This connection is explicitly present in the files (soul-constraints.md explains the philosophy), so finding it proves the agent read with comprehension, not just extraction.

**5. Evidence of SURPRISE.** The composition-researcher's perception prompts (Part 6C of 11-feedback-loop-composition.md) include: "What do you see that you didn't expect?" An agent that reports something unexpected has engaged beyond confirmation bias. An agent that finds only what it expected has pattern-matched, not read.

### 2B. Negative Indicators (Presence = Shallow)

**1. Enumeration without interpretation.** "The system has 22 prohibitions, 3 soul constraints, 65 tokens, and 18 mechanisms." This is a table of contents, not engagement.

**2. Uniform characterization.** "The system is angular and warm." No tension, no contradiction, no complexity. Real identity is never one thing; it is always a negotiation between multiple things.

**3. Generic descriptors.** Words that could apply to many systems: "clean," "modern," "minimal," "well-structured." These reveal nothing about THIS system's specific character.

**4. Property-only vocabulary.** "border-radius: 0, box-shadow: none, #FEF9F5 background." No interpretation of what these properties MEAN together. CSS values are not personality; they are implementation.

**5. Absence of the word "because" or its equivalent.** Deep engagement connects cause to effect. "Sharp edges BECAUSE editorial authority." "No shadows BECAUSE honesty about flatness." If the Side B derivation contains no causal reasoning, it is cataloging, not engaging.

---

## 3. Questions That Force Depth

The core design problem: we want depth without prescription. The solution is QUESTIONS. Questions constrain the PROCESS (you must think about X) without constraining the ANSWER (what you conclude about X is yours).

### 3A. The Depth-Forcing Question Set

These questions are ordered from most concrete to most interpretive. An agent that answers all of them WILL have engaged deeply, regardless of what conclusions it reaches.

**Question 1: What does this system REFUSE, and what does each refusal REVEAL about its character?**

This forces the agent past property-cataloging into interpretation. "The system refuses rounded corners" is property. "The system refuses softness -- every refusal is an assertion of precision and decisiveness" is character. The question demands the leap.

The identity-auditor found 13 genuine identity refusals (out of 22 total prohibitions). An engaging agent doesn't need to find exactly 13, but it needs to move from "refuses X" to "refuses X because it believes Y."

**Question 2: Where does this system contradict itself? Name at least one tension WITHIN the system's own identity.**

This is the most important single question. It forces the agent to see the system as COMPLEX rather than UNITARY. The dynamics-analyst identified the key one: "the system is austere in its GEOMETRY but warm in its PALETTE" -- but there are others. Any agent that cannot find ANY internal tension has not engaged deeply.

Why this works: finding contradictions requires holding multiple aspects of the system in mind simultaneously and comparing them. This is inherently deeper than sequential property extraction.

**Question 3: Pick one constraint. How does it GENERATE design possibilities rather than just preventing them?**

This forces the generative-constraint interpretation that separates deep from shallow engagement. The files provide explicit material: "border-radius: 0 was verified as GENERATIVE, not merely restrictive." But the agent must internalize the principle and apply it, not just quote it.

**Question 4: If you had to describe this system's personality to someone who would never see it, using NO visual vocabulary (no "angular," "warm," "flat," "sharp"), what would you say?**

This is the hardest question. It forces the agent to translate visual properties into character, relationships, and philosophy. An agent that can describe the system without visual words has understood it at the identity level, not just the property level.

Example answers (all legitimate):
- "Confident and honest. Says what it means. Doesn't soften messages for comfort."
- "A strict teacher who actually cares. The rules are real, but they exist because the teacher respects you enough to be direct."
- "A well-edited magazine. Every element earned its place. Nothing decorative, nothing gratuitous."

**Question 5: What SURPRISED you? What did you find that you didn't expect?**

Drawn directly from the composition-researcher's perception prompts. This question detects genuine engagement because surprise requires expectation, and expectation requires a mental model that the actual files then disrupted. An agent that reports no surprise either had perfect expectations (unlikely) or didn't form expectations at all (shallow).

### 3B. Why These Questions Work Without Prescribing

Each question constrains the COGNITIVE OPERATION (interpret refusals, find contradictions, identify generative constraints, translate vocabulary, notice surprise) without constraining the OUTPUT. Two agents answering Question 2 might find different internal tensions:

- Agent A: "The system is geometrically rigid but chromatically warm"
- Agent B: "The system has maximum constraint (22 rules) but claims 80% creative authority"
- Agent C: "The system insists on flatness (no shadows) but achieves visual depth through border-weight hierarchy"

All three are correct. All three demonstrate depth. The question forced depth; the answer emerged from the agent's own reading.

### 3C. Questions That Would NOT Work

For contrast, here are questions that would PRESCRIBE rather than FORCE DEPTH:

- "Is this system more warm or more austere?" -- PRESCRIBES the axis of analysis
- "Rate each dimension from 1-10" -- PRESCRIBES a quantitative framework
- "What is the system's primary tension?" -- PRESCRIBES that there IS a primary tension (and by implication a single answer)
- "Does this system have editorial heritage?" -- PRESCRIBES the interpretive lens

The depth-forcing questions ask "WHERE is tension?" not "IS there tension at X?" They ask "WHAT surprised you?" not "DID X surprise you?"

---

## 4. Perception Prompts Applied to System Reading

The composition-researcher (11-feedback-loop-composition.md) identified perception prompts as one of the key instruction types for non-linear composition. These apply directly to design system reading:

### 4A. During-Reading Perception Prompts

**After reading the first file (prohibitions.md):**
- What is the dominant VOICE of this document? (Commanding? Explaining? Warning?)
- If this document were a person, what would their manner be? Strict teacher? Precise engineer? Concerned curator?
- What does this file tell you about the system that the system itself might not realize it's saying?

**After reading the second file (soul-constraints.md):**
- How does this file CHANGE your understanding from the first file?
- The first file had 22 prohibitions. This file claims only 3 are "soul." What does the relationship between 22 and 3 tell you about the system's self-understanding?
- Where do these two files AGREE and where do they EMPHASIZE different things?

**After reading tokens.css:**
- Look at the color values. What MOOD do they create together? (Not individually -- together.)
- Look at the spacing scale. Is it compressed? Generous? What does the spacing rhythm tell you about the system's relationship to space?
- Now that you've read all three files: what is the ONE thing that all three files agree on most strongly?

### 4B. Post-Reading Synthesis Prompts

- You now have three files' worth of information. Close them (metaphorically). What do you REMEMBER most vividly? That is the system's strongest identity signal.
- What is the system TRYING to be? And does it succeed?
- If you had to design one page in this system right now, what would you be MOST careful about? That is the system's sharpest constraint.

### 4C. Why Perception Prompts > Direct Questions

A direct question ("What are the soul constraints?") asks for retrieval. A perception prompt ("What does the relationship between 22 prohibitions and 3 soul constraints tell you?") asks for INTERPRETATION. Retrieval can be shallow; interpretation cannot. Perception prompts force the agent to process, not just extract.

The composition-researcher's key finding applies here: "Perception prompts force the composer to notice consequences." In system reading, the "consequences" are the implications of design choices -- what a constraint MEANS for the kind of pages the system can produce. An agent that has been prompted to perceive consequences will produce a richer Side B than one that has been asked to extract properties.

---

## 5. Minimum Files for Adequate Understanding

### 5A. The Three-File Core

The dynamics-analyst identified three files totaling ~935 lines:
1. `prohibitions.md` (419 lines) -- what the system REFUSES
2. `soul-constraints.md` (342 lines) -- the 3 immutable anchors + philosophy
3. `tokens.css` (174 lines) -- the implementation vocabulary

**Assessment: These three are NECESSARY and SUFFICIENT for Side B derivation.**

**Necessary because:** Each file provides a different dimension of identity:
- prohibitions.md = CHARACTER (what it refuses, and why)
- soul-constraints.md = PHILOSOPHY (the deep principles behind the constraints)
- tokens.css = VOCABULARY (what the system can actually express in CSS)

Without prohibitions.md, the agent knows what the system CAN do but not what it WON'T do. Without soul-constraints.md, the agent knows the rules but not the philosophy. Without tokens.css, the agent knows the character but not the palette/type/spacing.

**Sufficient because:** The identity-auditor found that the genuine identity content (13 rules classified as IDENTITY) is fully contained in these files. The additional files (mechanism-catalog.md, components.css, case-studies/) add compositional vocabulary and implementation examples but NOT identity information. Side B is about IDENTITY, not vocabulary.

### 5B. What About mechanism-catalog.md?

The mechanism catalog (18 mechanisms, ~200+ lines) adds compositional VOCABULARY but not personality. It tells you WHAT the system can do (border-weight gradient, 2-zone DNA, spacing compression) but not WHO the system IS. For Side B derivation, the identity files are sufficient.

HOWEVER: for the Addition Test ("Can existing vocabulary fulfill this need without metaphor?"), the mechanism catalog is relevant. If Side B derivation includes an informal Addition Test, the agent needs to know the system's compositional range, not just its identity constraints.

**Recommendation:** Include mechanism-catalog.md as OPTIONAL -- the System Reading Protocol should mention it as available for agents who want to assess the system's expressive range, but not require it for personality derivation.

### 5C. What About Built HTML?

Should the agent read actual built pages (e.g., `ephemeral/builds/yegge-gas-town-extraction-2026-03-01-5/output.html`) in addition to the documentation?

**Arguments for:**
- Built HTML shows what the system ACTUALLY LOOKS LIKE in practice, not just what the docs say
- The agent could screenshot the page and form a VISUAL impression
- Documentation describes intent; built pages show result
- Any gap between documentation and built pages reveals interesting information about the system

**Arguments against:**
- Built pages are metaphor-specific implementations -- they show one reading of the system, not the system itself
- Reading a built page before deriving Side B could anchor the agent to that specific implementation (same risk as case-study exposure)
- The agent would be reading ONE page's interpretation, not the system's identity
- Phase-gating exists specifically to prevent pre-exposure to implementations

**Assessment:** Built HTML should NOT be part of the System Reading Protocol for Side B derivation. The risk of anchoring outweighs the benefit of visual familiarity. The identity files describe the system's personality; built pages describe one specific implementation of that personality. An agent reading a geological-strata page might anchor to "this is a strata system" rather than forming its own characterization.

**Exception:** If a "System Familiarity" phase is added AFTER Side B derivation (post-tension, pre-metaphor-search), a quick look at 1-2 built pages could provide visual grounding. But this is downstream of Side B, not input to it.

---

## 6. Verifying Depth WITHOUT Prescribing Conclusions

This is the core design challenge: how do we know the agent engaged deeply without checking its answers against a key?

### 6A. Structural Verification (Form, Not Content)

Verify the STRUCTURE of the Side B derivation, not its conclusions.

**Check 1: Internal tension present?** (Binary)
The Side B must identify at least one internal tension within the system. Which tension is irrelevant. The presence of ANY identified tension proves the agent saw the system as complex rather than unitary.

**Check 2: Generative constraint present?** (Binary)
The Side B must describe at least one constraint as generating design possibilities. Which constraint and which possibilities are irrelevant. The presence of generative framing proves the agent engaged beyond boundary-cataloging.

**Check 3: Character vocabulary present?** (Binary)
The Side B must contain at least one character word (decisive, confident, honest, editorial, austere, warm, precise -- or equivalents) in addition to property words (angular, flat, cream, sharp). Pure property vocabulary = shallow.

**Check 4: Causal reasoning present?** (Binary)
The Side B must contain at least one "because" or equivalent causal link between a constraint and a character trait. Property catalogs have no causation; engaged readings have causation.

**Check 5: Surprise or unexpected finding present?** (Binary)
The Side B should note at least one thing that was unexpected, non-obvious, or that complicated the agent's initial understanding. This is the hardest to verify but the strongest signal of genuine engagement.

### 6B. Why Binary Checks Work

Following the project's own discovery that "binary rules achieve 100% agent compliance; judgment rules achieve ~0%," the verification checks are all binary. We don't check whether the tension identified is "correct" (judgment) -- we check whether A tension was identified (binary).

This means an agent could identify a tension that seems wrong or unusual:
- "The tension between the system's 22 rules and its claim of creative freedom"
- "The tension between editorial heritage and digital implementation"
- "The tension between warm palette and cold precision"

All of these are legitimate. Some are more productive for TC than others. But the verification doesn't need to assess PRODUCTIVITY -- only DEPTH. An agent that found ANY tension engaged more deeply than one that found none.

### 6C. What We Do NOT Verify

- We do NOT check whether the agent found the warmth/austerity tension specifically
- We do NOT check whether the agent produced a personality spectrum with numeric values
- We do NOT check whether the agent's characterization "matches" the current static Side B
- We do NOT check whether the agent classified the right number of prohibitions
- We do NOT score the quality of the interpretation on any scale

All of these would require a "correct answer" -- which would mean we have prescribed the conclusion and are checking compliance. That is exactly what we are trying to avoid.

### 6D. The Verification Protocol

After the agent completes the System Reading Protocol, apply the 5 binary checks:

```
DEPTH VERIFICATION (all must pass):
[ ] Internal tension: Agent identified >= 1 tension WITHIN the design system
[ ] Generative constraint: Agent described >= 1 constraint as creating possibilities
[ ] Character vocabulary: Agent used >= 1 character word (not just property words)
[ ] Causal reasoning: Agent linked >= 1 constraint to a character trait with "because" or equivalent
[ ] Unexpected finding: Agent noted >= 1 thing that complicated or surprised their initial understanding
```

**If all 5 pass:** Depth verified. Proceed with Side B.
**If 1-2 fail:** Prompt the agent to re-engage with the specific dimension. E.g., "You've described the system's properties well. Now: where does the system contradict itself?"
**If 3+ fail:** The reading was shallow. Re-run the System Reading Protocol with more explicit perception prompts.

---

## 7. Is Diverse Interpretation a Feature or a Bug?

### 7A. The Case for Feature

The dynamics-analyst made this argument powerfully: "This is actually consistent with the skill's own epistemology. The skill opens with 'You are CONSTRUCTING a composition, not DISCOVERING one.' If Side B is also CONSTRUCTED rather than GIVEN, this is philosophically coherent."

More concretely:

**1. Content-sensitive reading is the GOAL.** An agent that just deeply read warm, inviting content (Side A) would read the design system files THROUGH THAT LENS. It might notice the system's warmth capacity that the static summary downplays. An agent that just deeply read cold, analytical content would read the same files and notice the system's precision capacity. This content-sensitivity means the tension derivation is automatically calibrated to the specific content at hand. The tension between "warm content needs" and "a system that the agent reads as precise" is DIFFERENT from the tension between "warm content needs" and "a system the agent reads as warm" -- and the first tension is more productive.

**2. Diverse interpretations produce diverse compositions.** If every agent reads the system the same way (via static summary), every tension derivation starts from the same baseline. The only variation comes from Side A (the content). With diverse Side B readings, both sides contribute variation, producing a wider range of compositional possibilities.

**3. The current static summary is itself ONE interpretation.** "75% austere" was a human judgment. It is not more correct than "65% austere" or "85% austere" -- it is simply the one that happened to be written down. Treating it as canonical privileges one reading over all others, including potentially better readings.

**4. The identity files support multiple legitimate readings.** The identity-auditor found both IDENTITY content (genuine character) and PIPELINE-ARTIFACT content (process enforcement). An agent that reads the files fresh might focus on the identity content and produce a characterization closer to the system's actual personality than the static summary, which was written during the pipeline era and includes pipeline-era framing.

### 7B. The Case for Bug

**1. Unstable foundation for reproducible quality.** If Side B varies across runs, two pages built from the same content could have different tension derivations, different metaphors, and different compositional outcomes. This might be a quality problem if some readings produce better compositions than others.

**2. Some readings ARE shallow.** Not all variation is equal. "It's angular and dark" is a legitimate reading in the sense that it contains no factual errors, but it's shallow in the sense that it misses the system's complexity. Diversity of interpretation is a feature only among DEEP readings.

**3. Loss of accumulated knowledge.** The current static summary includes tension landscape data ("STRONGEST tensions against KortAI: Warmth/comfort vs austerity (proven)") derived from multiple experiments. A fresh agent doesn't have this experimental history. Some interpretations require experience that a single reading cannot provide.

### 7C. Resolution: Feature IF Depth Is Guaranteed

Diverse interpretation is a feature CONDITIONAL on depth. The verification protocol (Section 6) ensures depth. If depth is guaranteed, variation is creative range. If depth is not guaranteed, variation is quality noise.

The architecture should be:

```
1. System Reading Protocol forces DEPTH (via questions + perception prompts)
2. Depth Verification checks ENGAGEMENT (via 5 binary checks)
3. If depth verified: accept the agent's reading AS-IS (diverse = good)
4. If depth NOT verified: re-engage (shallow = bad, diverse or not)
```

This means we DO NOT need to converge interpretations. We need to ensure a FLOOR of engagement below which no interpretation is accepted. Above that floor, diversity is a feature.

### 7D. The Strongest Argument for Feature

The composition-researcher's deepest finding applies here: "Composition is not a plan that is executed. Composition is a conversation that is conducted."

If Side B is static, the conversation has one fixed partner. The agent brings fresh content (Side A) but encounters the same wall (Side B) every time. The conversation is half-dynamic, half-static.

If Side B is dynamic, the conversation has TWO fresh participants: the agent's reading of the content AND the agent's reading of the system. The tension emerges from the interaction between two independently-derived, situated understandings. This is a richer generative space than content-vs-wall.

The user's framing captures this exactly: "One from the thinking process used against the content.md file, and the other from the research across the corpus." Both sides derived. Both sides fresh. Both sides the agent's own. The composition that emerges from this symmetric derivation has MORE creative potential than one derived from a fixed wall.

---

## 8. The Complete Depth Guarantee Architecture

### 8A. System Reading Protocol (Replaces Static Side B)

**Input:** 3 files (prohibitions.md, soul-constraints.md, tokens.css)
**Optional:** mechanism-catalog.md (for expressive range assessment)
**NOT included:** Built HTML, case studies, prior explorations

**Phase 2A: System Reading**

Read the design system's identity files. As you read, form your own understanding of the system's character. You are not looking for facts to extract -- you are forming a RELATIONSHIP with this system.

**During reading, hold these questions:**

1. **What does this system REFUSE, and what does each refusal REVEAL about its character?** Move past the CSS properties to the personality behind them. "Never border-radius > 0" is a CSS rule. What is the CHARACTER TRAIT that produces this rule?

2. **Where does this system contradict itself?** No identity is simple. Find at least one place where the system's own properties are in tension with each other. This internal tension is your richest compositional territory.

3. **Pick one constraint. How does it GENERATE design rather than just prevent it?** Constraints are not just walls -- they are forces that push design in specific directions. What design solutions are FORCED into existence by what this system refuses?

4. **If you had to describe this system to someone who would never see it, using NO visual vocabulary, what would you say?** Translate the system from CSS to character. From properties to personality.

5. **What surprised you?** What did you find that you didn't expect? What complicated your initial impression?

**After reading, produce:**

A characterization of the design system's personality. This is YOUR reading -- not a summary of the files, but your INTERPRETATION of them. Include:
- The system's dominant character (in your own words)
- At least one internal tension within the system
- At least one generative property of the system's constraints
- The territory where this system's constraints would create the MOST interesting conflict with content needs

### 8B. Depth Verification (5 Binary Checks)

Applied after the agent completes Phase 2A:

```
[ ] TENSION: The characterization identifies >= 1 internal tension
[ ] GENERATIVE: At least 1 constraint is described as creating, not just preventing
[ ] CHARACTER: At least 1 character word used (not just visual properties)
[ ] CAUSATION: At least 1 "because" link between constraint and character
[ ] SURPRISE: At least 1 unexpected or complicating finding noted
```

All 5 must pass. If any fail, the agent re-engages with the specific dimension via a targeted perception prompt.

### 8C. What This Guarantees

**Guaranteed:** The agent engaged with the system deeply enough to find internal tensions, interpret constraints generatively, characterize the system as a personality (not just a property list), reason causally about design choices, and be surprised by something.

**NOT guaranteed:** That the agent found the "right" tensions, or the "correct" personality, or the "best" compositional territory. These are judgment calls that the agent makes for itself, shaped by its own reading AND by the content it has already deeply engaged with (Side A).

**NOT prescribed:** What the system's personality IS. What its tensions ARE. What its generative constraints PRODUCE. What counts as surprising. The questions constrain the process; the answers emerge from the agent's engagement.

### 8D. The Minimum Quality Floor

The 5 binary checks establish a FLOOR of engagement. Below this floor, the agent has not engaged deeply enough to produce useful tension derivation. Above this floor, the agent's interpretation is accepted as legitimate, even if it differs from the current static summary, from other agents' readings, or from what the system's creators might say about their own system.

This is the key architectural choice: **we verify DEPTH of process, not CORRECTNESS of conclusion.** This is how every creative discipline teaches engagement without prescribing results:
- Music: "You must study counterpoint rules" (process), not "your fugue must sound like Bach" (result)
- Architecture: "You must respond to the site's conditions" (process), not "your building must look like Gehry" (result)
- Writing: "You must hear what your draft is saying back to you" (process), not "your essay must reach this specific conclusion" (result)

The System Reading Protocol ensures the agent HAS engaged. The Depth Verification confirms the engagement was genuine. Everything after that is the agent's own creative contribution to the composition.

---

## 9. Recommendations for Integration

### 9A. Where This Fits in the Revised TC Skill

The System Reading Protocol replaces the static Side B (lines 184-218 of current SKILL.md). It lives in Phase 2, after Side A derivation (content questioning) and before tension construction. The 5 depth-forcing questions replace the personality spectrum and world description.

### 9B. Interaction with Phase 1

Critically, the System Reading Protocol runs AFTER Phase 1 (content multi-axis questioning). This means the agent reads the design system files AFTER having deeply engaged with the content. The dynamics-analyst identified this as a key benefit: "An agent that has just deeply engaged with warm, inviting content (Side A) would read the design system files THROUGH THAT LENS. It might notice things about the system's warmth capacity that the static summary doesn't emphasize."

This sequencing is essential. It means the agent's reading of the system is ALREADY content-sensitive -- the perception prompts activate differently depending on what the agent has just been thinking about. This is the symmetric derivation the user described.

### 9C. Interaction with Depth Verification

The 5 binary checks should be applied AUTOMATICALLY within the TC skill, not by an external auditor. The skill itself should include: "Before proceeding to tension construction, verify your system reading passes all 5 depth checks. If any fail, return to the relevant question and engage more deeply."

This is self-verification, not external audit. The agent checks its own engagement depth. Binary checks make this reliable (the agent can unambiguously determine whether it identified a tension, used a character word, etc.).

### 9D. What Happens to Curated Wisdom

The current tension landscape ("STRONGEST tensions against KortAI: Warmth/comfort vs austerity (proven)") and domain compatibility lists represent accumulated knowledge. Per the dynamics-analyst's recommendation, this knowledge should move to the design system's own documentation (perhaps a `system-personality.md` file in `compositional-core/identity/`). The TC agent would encounter it as part of the system files, not as a pre-embedded answer. This preserves the wisdom while making it one input among many, rather than the authoritative conclusion.

---

*END REPORT*
