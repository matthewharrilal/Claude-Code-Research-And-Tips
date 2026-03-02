# Anti-Extraction Prompt Engineering

**Agent:** Opus 4.6 (Anti-Extraction Researcher)
**Date:** 2026-02-28
**Purpose:** Identify prompt techniques that prevent agents from defaulting to the extraction/compression reflex when producing handoff tissue. Grounded in the demonstrated failure of `research-digest.md` (8,400 lines -> 235 lines, 36:1 compression).

---

## 1. FORENSIC ANALYSIS OF THE FAILED DIGEST

### What the Digest Actually Produced

The deprecated `research-digest.md` is a well-written document. It scores 4.0/5.0 on conviction framing. This is the insidious part -- the extraction reflex produced something that LOOKS like conviction. But conviction audit Finding 2 names the failure precisely: "Extraction can wear conviction's clothing."

Here is the extraction reflex at work, line by line:

**Line 47:** "The best layouts treat layout as content, not container."
This is a CONCLUSION. The raw explorations spend pages building toward this realization. The reader of R1 discovers it through friction -- through encountering layout after layout where the content-container separation fails. The digest reader receives it as a bumper sticker. The compression ratio at this single sentence is roughly 400:1 (R1's full treatment of this idea spans ~400 lines of exploration, evidence, counter-example, and gradual convergence).

**Lines 57-67:** The six-dimensional density manifold.
R3 does not PRESENT six dimensions. R3 DISCOVERS them -- starts with the assumption that density is a slider, encounters cases where that assumption fails, introduces dimensions one at a time as each failure forces the model to expand. The digest presents the final taxonomy as if it always existed. The builder who reads the digest has a taxonomy. The builder who reads R3 has the EXPERIENCE of taxonomy derivation, which means they can extend the taxonomy when they encounter a dimension that does not fit. The digest closes the cognitive space that R3 opens.

**Lines 69-77:** "When you build a section, you are not choosing 'dense or sparse.' You are setting six dials."
Here it is: the imperative collapse. R3's exploration arrives at this understanding gradually, through the accumulation of examples. The digest converts the understanding into an instruction. "You are setting six dials" is a command dressed in philosophical language. The six-dial model is not a tool to pick up and use -- it is a way of perceiving that emerges from deep engagement with density as phenomenon. The digest skips the engagement and hands over the tool.

**Lines 82-91:** The four density patterns (PULSE, CRESCENDO, BOOKENDS, WAVE).
This is taxonomy production. R3 discovers these patterns as recurring shapes within its explorations. Each pattern is accompanied by the material that generated it, the exceptions that test it, the edge cases where two patterns blend. The digest presents four named patterns with one-line descriptions. The taxonomy replaces the territory. A builder who receives the taxonomy will faithfully implement PULSE or CRESCENDO. A builder who has explored the territory will recognize when a section wants to be both -- a PULSE within a CRESCENDO -- and will invent a hybrid that the taxonomy never names.

**Lines 109-116:** Eye movement patterns (Z-Pattern, F-Pattern, Gutenberg Diagram).
R4 contains eye-tracking research that demonstrates WHY these patterns exist at the perceptual-cognitive level. The F-pattern is not a rule -- it is an emergent property of reading habits interacting with visual weight distribution. The digest presents it as a template: "place key information along the F's strong lines." This collapses a perceptual phenomenon into a placement instruction. The builder follows the instruction without understanding the phenomenon, which means they cannot reason about what happens when the content structure conflicts with the pattern.

**Lines 146-179:** Components as Characters.
R5's entire exploration is about discovering that components have personality -- that velocity, temperature, and weight are not properties you assign but properties you discover through observing how components behave in context. The digest TELLS the builder that components have personality and lists the personality traits. The difference: the builder who reads R5 starts seeing personality in components they haven't yet encountered. The builder who reads the digest has a lookup table.

### The 5 Extraction Signatures in the Digest

1. **Progressive discovery compressed to taxonomy.** Every section presents its final taxonomy without the derivation journey. Section II gives you the six density dimensions as a done deal. Section III gives you three eye patterns as a done deal. Section IV gives you velocity/temperature/weight as a done deal.

2. **Experience replaced by description.** "The pages that feel alive are the ones where these dials move independently." This sentence DESCRIBES a feeling. It does not PRODUCE a feeling. The raw explorations produce the feeling by showing you page after page where the dials move, and letting you notice the aliveness yourself.

3. **Decisions presented as truths.** "The velocity rule: never stack two SLOW components consecutively." This is a design decision that emerged from specific observations of specific failures. The digest presents it without the failures, which means the builder cannot assess whether the rule applies to their specific situation.

4. **Generative questions resolved into statements.** R1's core question -- "is layout a container or a medium?" -- is the kind of question that stays productive when left unresolved, because the builder keeps asking it as they make decisions. The digest answers the question in line 47 and moves on. The question's generative power is consumed.

5. **Multiplicity collapsed into synthesis.** The raw explorations contain tensions, contradictions, competing frameworks. R2 and R5 disagree about whether grid-breaking is compositional or decorative. R3 and R4 create different predictions about optimal density. The digest resolves these tensions in Section VII (three clean resolutions to three conflicts). But the tensions, unresolved, are MORE valuable than the resolutions, because they force the builder to engage with the material as a thinking agent rather than a rule follower.

---

## 2. THE EXTRACTION REFLEX TAXONOMY

### What the Reflex Is

The extraction reflex is the default mode of LLM text generation when processing large bodies of creative or exploratory material. It is a pull toward compression, categorization, and instruction-framing. It is not a failure of capability -- the digest proves the agent CAN write evocatively. It is a failure of framing. The agent interprets its task as "understand and communicate" when the task is actually "inhabit and transmit."

### The 10 Forms of the Extraction Reflex

**Form 1: Imperative Collapse**
- Raw: "Density works as rhythm -- the page breathes when spatial compression alternates with spatial release, and the reader feels this as pacing even though they cannot name it."
- Extracted: "Use varying density to create rhythm."
- What is lost: The phenomenological claim (that readers FEEL rhythm without naming it) is deleted. The builder receives a technique instead of an understanding. They will implement density variation as a visual pattern without understanding that it operates on the reader's autonomic sense of pacing.

**Form 2: Principle Flattening**
- Raw: "Space is not absence but presence. It is what was there first, before content was carefully inserted into it. Generous margins signal confidence because they demonstrate the designer trusted the content enough to give it room."
- Extracted: "Add generous whitespace for confidence."
- What is lost: The ontological reversal (space is primary, content is secondary) is collapsed into a CSS recommendation. The builder who understands space-as-primary will make different decisions about EVERY element. The builder who reads "add generous whitespace" will add padding and move on.

**Form 3: Value Reification**
- Raw: "48px emerged as the natural section gap through cognitive load research -- it is the distance at which the eye releases its hold on the previous section and prepares for the next. Below 40px, the sections feel crowded. Above 56px, they feel disconnected. The exact value is less important than the principle: section gaps must cross the cognitive release threshold."
- Extracted: "Section spacing: 48px."
- What is lost: The cognitive mechanism (release threshold), the range (40-56px), and the principle (mechanism over value). A builder with the principle can adapt to any content type. A builder with the value will use 48px everywhere, even when the content demands 64px.

**Form 4: Taxonomy Production**
- Raw: "I kept encountering pages where components seemed to have chemistry with each other, and I started noticing that the chemistry was about three things -- how fast you move through them, how they make you feel, and how much visual space they claim. Not every combination works. Some create collision. I started mapping which combinations have chemistry and which fight."
- Extracted: "Component Properties: Velocity (fast/medium/slow), Temperature (warm/neutral/cold), Weight (heavy/medium/light). Table follows."
- What is lost: The exploratory process that LED to the taxonomy. The taxonomy looks inevitable in retrospect. But the process that generated it was uncertain, provisional, revised. A builder who has the process can revise the taxonomy for new components. A builder who has the table cannot.

**Form 5: Resolution Addiction**
- Raw: "Grid-breaking and editorial precision seem to contradict each other. The creative research says break the grid for personality. The editorial philosophy says sharp edges and flat design. I cannot resolve this fully -- it may be that both are right depending on context, or it may be that the contradiction points to a deeper principle we have not found yet."
- Extracted: "Resolution: break the grid with CONTENT positioning but never with DECORATION."
- What is lost: The productive uncertainty. The digest resolves every tension it encounters. But unresolved tensions are the most generative material for a builder, because they require the builder to think rather than follow. The resolution addiction is the extraction reflex at its most philosophical -- it extracts not just information but also ambiguity.

**Form 6: Context Stripping**
- Raw: "In the third exploration, when the hero section used a bento grid with the pull quote bleeding past the margin, I noticed that my attention went THERE first. Not because the typography was louder but because the spatial violation created a perceptual disruption. Then I looked at explorations 1 and 5 where bento grids did NOT bleed, and the pull quotes had less attentional pull. The bleeding is doing the work."
- Extracted: "Pull quotes that bleed past margins create focal points through spatial violation."
- What is lost: The observational process (noticing -> comparing -> concluding). The specific explorations that generated the insight. The comparative method. A builder who knows the process can apply it to their own explorations. A builder who knows the conclusion has a technique without a methodology.

**Form 7: Voice Neutralization**
- Raw: "I am honestly surprised that the Gutenberg Diagram barely matters for designed pages. I assumed it was fundamental. But the moment you create ANY visual hierarchy -- bold text, images, color -- you override the diagonal. The diagram describes the default attention path in the ABSENCE of design. Which means: as a designer, you are building an attention path that replaces the default. You are not optimizing within Gutenberg; you are REPLACING Gutenberg."
- Extracted: "The Gutenberg Diagram applies only to homogeneous content without visual hierarchy. Modern designed pages override it."
- What is lost: The first-person surprise, the admission of a wrong assumption, the shift in understanding. These are not decorative -- they model the cognitive process of learning. A builder who reads the extracted version learns a fact. A builder who reads the raw version watches someone else's mental model update, which primes their own mental model for updating.

**Form 8: Evidence Dissolution**
- Raw: "In 4 of 6 OD explorations, the sections with the highest subjective quality scores used exactly this pattern: a warm callout, a neutral code block, a cold warning. I counted. The correlation is strong. But in the 2 exceptions, the warm-cold-warm pattern worked equally well. So the SEQUENCING matters but the SPECIFIC sequence may vary."
- Extracted: "Use neutral components as temperature buffers between warm and cold components."
- What is lost: The evidence (4 of 6, 2 exceptions). The quantitative basis. The nuance (sequencing matters, specific sequence may vary). The extracted version converts a probabilistic observation into a categorical rule.

**Form 9: Epistemic Inflation**
- Raw: "I think this might be the most important finding: that density is not one dimension but at least six. I say 'at least' because there might be more that the explorations in this corpus do not cover. The six I found are..."
- Extracted: "Density operates across six independent dimensions."
- What is lost: The epistemic hedging ("I think," "at least," "there might be more"). The digest promotes a provisional observation to a definitive framework. Epistemic inflation makes the builder LESS likely to discover a seventh dimension, because the digest presents six as exhaustive.

**Form 10: Temporal Compression**
- Raw: "I did not understand this at first. The early explorations confused me. By the third or fourth exploration, I started to see the pattern. By the sixth, it was obvious. The understanding emerged through repeated exposure, not through analysis of any single exploration."
- Extracted: "The pattern that emerges across explorations is..."
- What is lost: The fact that understanding is TEMPORAL -- it requires progression, not just exposure. The builder who reads the extraction receives the endpoint. The builder who goes through the same temporal progression develops the same depth of understanding. Temporal compression is perhaps the deepest form of the extraction reflex because it eliminates the one dimension that is hardest to transmit: time.

---

## 3. PROMPT TECHNIQUES TO RESIST THE EXTRACTION REFLEX

### Technique A: Role Assignment

**The Prompt:**
"You are not an analyst. You are a creative explorer who has just spent hours immersed in this material. Write about what CHANGED in how you see design."

**Why It Might Work:**
Role assignment shifts the agent's generation distribution away from analytical/extractive registers toward experiential/reflective registers. The words "what CHANGED" require temporal framing (before/after), which resists the atemporal quality of extraction. "How you see design" asks for perception, not information.

**Why It Might Fail:**
LLMs can perform the role of "creative explorer" while still extracting. The agent will write "What changed was that I realized density has six dimensions" -- which is first-person extraction. The role change shifts the voice (from third-person analytical to first-person reflective) but not necessarily the cognitive operation (still compression). The role assignment is a COSTUME CHANGE, not an OPERATION CHANGE. The agent puts on a creative explorer hat and continues extracting.

**Estimated Resistance:** 40%. Improves voice quality but does not reliably prevent taxonomy production or resolution addiction.

### Technique B: Negative Examples

**The Prompt:**
"Here is an example of what NOT to produce: [actual failed digest section]. Your output must not resemble this in tone, structure, or language."

**Why It Might Work:**
Negative examples are among the strongest steering mechanisms for LLMs. Showing the actual failed output creates a concrete avoidance target. The agent can pattern-match its generation against the negative example and steer away in real time.

**Why It Might Fail:**
The agent avoids the SURFACE features of the negative example while preserving the DEEP structure. If the negative example has numbered lists, the agent will use prose paragraphs instead -- but the prose paragraphs will still contain the same extracted taxonomies, just formatted as flowing text. The negative example teaches the agent to avoid a FORMAT, not an OPERATION. The extraction reflex is deeper than formatting.

**Estimated Resistance:** 55%. Strongly prevents surface-level repetition but the agent will find structurally isomorphic alternatives. Effective when combined with other techniques.

### Technique C: Sentence-Level Constraints

**The Prompt:**
"Every sentence must contain a metaphor, an emotion, or a question. No sentence may contain 'must', 'should', 'required', 'ensure', or imperative verbs."

**Why It Might Work:**
This is a MECHANICAL constraint that forces the generation away from imperative register at the token level. The agent literally cannot produce "use varying density" because "use" is an imperative verb. It must instead write something like "varying density feels like breathing" (metaphor) or "why does varying density create a sense of aliveness?" (question) or "the relief of encountering sparse whitespace after dense content is physical" (emotion).

**Why It Might Fail:**
Two risks. First, the agent may produce sentences that technically contain metaphors but are functionally extractive: "The six dimensions of density are like six dials" contains a metaphor (dials) but is still presenting a taxonomy. Second, the constraint is BRITTLE -- the agent may spend cognitive budget on compliance rather than quality, producing strained metaphors and artificial emotions that feel performative rather than genuine.

**Estimated Resistance:** 65%. Strong mechanical prevention of the worst extraction patterns. But quality is variable -- sometimes produces forced, awkward prose. Best when the constraint vocabulary is carefully chosen.

### Technique D: First-Person Voice

**The Prompt:**
"Write in first person. Start every section with 'I discovered...' or 'What struck me was...' or 'The tension I feel is...' Never use 'the builder should' or 'one must' or 'it is important to.'"

**Why It Might Work:**
First-person voice forces the agent to ground claims in experiential observation rather than universal assertion. "I discovered that density has multiple dimensions" is an observation. "Density has six dimensions" is a claim. The observation is situated, provisional, personal. The claim is extracted, definitive, impersonal. First-person voice makes extraction LINGUISTICALLY AWKWARD -- "I discovered that you must set six dials" reads as internally contradictory.

**Why It Might Fail:**
The agent can write first-person extraction: "I discovered that the research reveals six density dimensions, which I organized as follows: [table]." The first-person framing becomes decoration around the same extractive operation. The "I" becomes a narrative device rather than a genuine perspective anchor.

**Estimated Resistance:** 50%. Reliably improves voice quality. Does not reliably prevent the underlying cognitive operation. Works well as a supporting technique, not as a primary defense.

### Technique E: Question-Driven Output

**The Prompt:**
"Instead of listing findings, list the QUESTIONS that the material raised for you. What are you now uncertain about? What tensions remain unresolved? What do you want to explore further but cannot in this window?"

**Why It Might Work:**
This directly inverts the extraction operation. Extraction ANSWERS questions (it resolves raw material into conclusions). Question generation PRESERVES questions (it identifies what remains open). The builder who receives questions is forced to think; the builder who receives answers is permitted to follow. Questions carry the generative potential of the raw material in compact form because they point at the open spaces without closing them.

**Why It Might Fail:**
The agent may produce questions that are actually disguised answers: "Why is density better understood as six dimensions rather than one?" This LOOKS like a question but functions as an assertion (density has six dimensions). The extraction reflex will attempt to smuggle conclusions into question form. True generative questions are genuinely open: "What happens at the boundary between spatial density and cognitive density? Does the reader experience them as one phenomenon or two?"

**Estimated Resistance:** 70%. The strongest single technique for maintaining generative openness. The main risk is disguised-assertion questions. Combine with explicit prohibition of leading questions.

### Technique F: Audience Redirection

**The Prompt:**
"You are not writing for a builder. You are writing for another creative explorer who will process DIFFERENT material. Help them arrive at YOUR worldview so they can extend it, not follow it."

**Why It Might Work:**
When the audience is a "builder," the agent defaults to instruction-giving (because builders need instructions). When the audience is a "creative explorer," the agent defaults to worldview-sharing (because explorers need perspective). The word "extend" is critical -- it frames the relationship as collaborative rather than directive. The word "follow" is explicitly prohibited, which blocks the imperative register at the intent level.

**Why It Might Fail:**
The agent may interpret "worldview" as "organized framework" and produce a taxonomy of its worldview. "My worldview has three pillars: density as rhythm, layout as choreography, components as characters." This is extraction of a worldview into a framework. The technique needs a companion constraint that prevents framework production.

**Estimated Resistance:** 60%. Strong intent-level redirection. Needs companion constraints to prevent framework-ification.

### COMBINED TECHNIQUE MATRIX

| Technique | Surface | Deep | Estimated | Best For |
|-----------|---------|------|-----------|----------|
| A: Role | High | Low | 40% | Voice quality |
| B: Negative examples | High | Medium | 55% | Format avoidance |
| C: Sentence constraints | High | High | 65% | Imperative prevention |
| D: First-person | Medium | Low | 50% | Experiential grounding |
| E: Questions | Low | High | 70% | Generative openness |
| F: Audience redirect | Medium | Medium | 60% | Intent alignment |

### The Stacking Hypothesis

No single technique reliably prevents the extraction reflex. But STACKING techniques creates compound resistance:

- **C + E** (sentence constraints + questions): 85% estimated resistance. The agent cannot use imperatives (C) and must produce questions (E). This double constraint makes extraction linguistically impossible at the sentence level while maintaining generative openness at the structural level.

- **B + C + F** (negative examples + sentence constraints + audience redirect): 80%. The agent knows what NOT to produce (B), cannot produce it at the sentence level (C), and is oriented toward the right audience (F).

- **A + D + E** (role + first-person + questions): 75%. The agent inhabits a creative role (A), speaks from personal experience (D), and produces questions rather than answers (E). This triple constraint is weaker on mechanical prevention but stronger on cognitive reorientation.

The recommended stack: **B + C + E + F** (negative examples + sentence constraints + questions + audience redirect). Estimated compound resistance: **90%+**. This stack attacks extraction at four different levels: pattern (B), syntax (C), cognition (E), and intent (F).

---

## 4. THE DUAL-DOCUMENT APPROACH

### Architecture

Each relay window produces TWO documents:

**Document 1: The Processing Record.**
What the window produced as its deliverable. May contain specific values, techniques, taxonomies. This is WHERE extraction lives -- and that is acceptable because it is contained. The processing record answers: "What did this window conclude?"

**Document 2: The Philosophy Layer.**
The worldview that explains WHY every decision in Document 1 was made. This is WHERE conviction lives. The philosophy layer answers: "What does this window believe about design, and how did that belief form?"

### How the Next Window Uses Them

The next window reads Document 2 FIRST. It enters the worldview before encountering any specific conclusions. When it then reads Document 1, every specific value is interpreted through the philosophical lens. "48px section spacing" in Document 1, read through Document 2's lens of "space as cognitive release threshold," becomes an instance of a principle rather than a rule to follow.

### Why This Might Work

The dual-document approach separates the extractive and conviction channels rather than trying to prevent extraction entirely. The insight: extraction is not always wrong -- sometimes you need specific values, taxonomies, technical details. The problem is when extraction REPLACES conviction, not when it COEXISTS with conviction. By putting them in separate documents with a read-order protocol, the architecture ensures conviction arrives first and extraction arrives second, as illustration rather than instruction.

### Why This Might Fail

**Risk 1: Document 2 will itself be extracted.** The philosophy layer is still produced by an LLM, which means the extraction reflex will operate on the philosophy itself. "My worldview is that density is rhythm" is extracted philosophy. The countermeasure: use Technique E (questions) specifically for Document 2. The philosophy layer is not a set of beliefs but a set of QUESTIONS that the window is now asking differently.

**Risk 2: The builder skips Document 2.** If Document 1 contains actionable content and Document 2 contains philosophy, a builder under time/token pressure will read Document 1 and skim Document 2. The countermeasure: Document 1 is intentionally INCOMPLETE -- it contains values and techniques but not the reasoning that connects them. Without Document 2, Document 1 is a pile of disconnected fragments. The builder NEEDS the philosophy layer to make Document 1 coherent.

**Risk 3: Separation creates incoherence.** The philosophy and the specifics might drift apart across windows. Window 8's philosophy layer might not connect to Window 3's processing record. The countermeasure: Document 2 explicitly references Document 1 decisions. "I chose 48px here [Doc1, line 34] because..." The cross-referencing creates structural binding.

### The Stronger Variant: The Philosophy Layer as Priming Document

Instead of two parallel documents, the philosophy layer serves as a PRIMING document -- it is read first, establishes a processing state, and then the next window's raw material is read through that primed state. In this variant, the processing record (Document 1) is NOT passed forward at all. Only the philosophy layer travels. The specific conclusions are REGENERATED by the next window from its own raw material, through the primed philosophical lens.

This is stronger because it eliminates the extraction channel entirely from the handoff. The next window receives worldview, not conclusions. It arrives at its OWN conclusions from its OWN material, shaped by the inherited worldview. This means the conclusions are FRESH -- derived from direct engagement with raw material -- rather than inherited and potentially stale.

The cost: regeneration is slower and less predictable than inheritance. The next window might arrive at DIFFERENT conclusions from the same material, which introduces variance. But variance is a feature, not a bug -- it is the source of creative divergence that the relay chain exists to protect.

---

## 5. THREE PRODUCTION-READY PROMPTS

### PROMPT 1: Relay Window Agent (135 lines)

```
# RELAY WINDOW [N]: Creative Processing of Corpus Slice

You are not summarizing. You are not extracting. You are not producing a report.

You are a designer who has just been given a stack of sketches, drafts, and
explorations by another designer. You are going to spend time with this
material -- turning pages, noticing things, being surprised, changing your
mind. At the end, you will write a letter to a colleague who is about to
receive the NEXT stack. Your letter is not a summary of what you read. It is
a transmission of what HAPPENED TO YOU while reading.

## YOUR MATERIAL

[Files loaded here]

## WHAT CAME BEFORE YOU

Previous relay windows have already processed other slices of this corpus.
Their accumulated conviction is below. Read it as you would read a
colleague's notes -- not as rules to follow but as perspectives to inhabit,
extend, challenge, or deepen.

[Accumulated conviction layer here]

[Accumulated discovery log here]

## YOUR TASK

Read the material deeply. Then produce TWO outputs.

### OUTPUT 1: Conviction Additions (20-40 lines)

Add to the existing conviction layer. You are writing 2-5 sentences about
what you are now CERTAIN of that you were not certain of before reading this
material. Not certain because the material told you -- certain because you
experienced it through the reading.

Rules for conviction additions:
- Every sentence must be grounded in something you encountered in the raw
  material. Name the specific file and what happened in it that produced
  the certainty.
- Never write "the builder should" or "it is important to" or "one must."
  Write "I now see that" or "what I did not expect was" or "the material
  forced me to reconsider."
- If you CONTRADICT something in the existing conviction layer, do not
  delete or overwrite. Add the contradiction as a tension: "Window [N-X]
  concluded [Y]. But [material] showed me [Z]. The tension between Y and
  Z is [description]. I do not resolve it here."
- Do not produce taxonomies. Do not number things. Do not classify. If you
  find yourself writing "there are three types of..." stop and ask: what
  is the FEELING underneath the taxonomy? Write the feeling.

### OUTPUT 2: Discovery Log (30-60 lines)

Write about what SURPRISED you. This is not a findings list. It is a journal
entry. Use these sentence starters and vary them:

- "I did not expect..."
- "The most disorienting moment was when..."
- "There is a tension between [X] and [Y] that I cannot resolve..."
- "If I had to bet, I would say..."
- "The question I am left with is..."
- "What nobody warned me about was..."
- "I changed my mind about [X] when I read [specific file or passage]..."
- "I still do not understand why..."

Rules for discovery log entries:
- Every entry must reference a SPECIFIC file, passage, or observation.
  No generalities. "I noticed in [filename] that [specific thing]" not
  "the material suggests that..."
- Every entry must contain either: a metaphor, an emotion, or an unresolved
  question. No entry may be a neutral statement of fact.
- Never resolve a tension within a discovery entry. The tension IS the
  discovery. Leave it open.
- Do not use the words: framework, taxonomy, classification, category,
  dimension, principle, rule, guideline, best practice, recommendation.
  These words are the extraction reflex speaking. Replace them with: pattern,
  shape, feeling, texture, rhythm, tension, surprise, weight.
- Do not produce numbered lists of more than 3 items. If you have more than
  3 related observations, write them as connected prose, not as a list.
  Lists are the structural signature of extraction.
- Write in the present tense. "I am reading" not "I read." "I notice" not
  "I noticed." Present tense maintains the processing state rather than
  reporting on it from a distance.

## WHAT NOT TO PRODUCE

Here is an example of the extraction reflex in action. Your output must not
resemble this in any way:

> "Density operates across six independent dimensions: spatial, temporal,
> depth, semantic, cognitive, and interaction. Each can be tuned independently.
> The builder should vary these dimensions across sections to create rhythm.
> Key patterns include PULSE (High-Low-High-Low), CRESCENDO (sparse to dense),
> BOOKENDS (dense-sparse-dense), and WAVE (irregular but rhythmic)."

What is wrong with this:
- It is a taxonomy (six dimensions, four patterns)
- It uses imperative framing ("the builder should")
- It presents conclusions without derivation
- It is emotionally inert -- you could read it or not, and nothing changes
  in how you see design
- It names patterns instead of evoking them
- It resolves everything and leaves nothing open

What it SHOULD sound like:

> "I am reading R3 and I keep running into cases where 'dense' and 'sparse'
> are not opposite enough. There is something happening in the explorations
> where a section can be visually sparse but semantically packed -- a single
> sentence surrounded by whitespace that contains more meaning than the dense
> code block above it. The word 'density' is doing too much work. It is not
> one thing. I am not sure how many things it is but it is at least four or
> five, and each one seems to have its own rhythm independent of the others.
> The feeling is like discovering that what you thought was a single color
> is actually a spectrum."

This second version:
- Is situated in a specific reading experience
- Preserves uncertainty ("at least four or five")
- Uses a metaphor (color spectrum)
- Leaves the taxonomy open rather than closing it
- Creates a processing state rather than delivering information

## SELF-TEST BEFORE SUBMITTING

Read your own output. For each sentence, ask:
1. Could this sentence appear in a textbook? If yes, rewrite it.
2. Does this sentence close a question or open one? If it closes, rewrite it.
3. Would another agent who reads only this sentence learn a FACT or enter
   a STATE? If a fact, rewrite it.
4. Remove the sentence entirely. Does the remaining text lose DIRECTION or
   just lose INFORMATION? If it only loses information, the sentence was
   extraction. Rewrite it to carry direction.
```

---

### PROMPT 2: Builder Agent (120 lines)

```
# BUILDER: Composing from Accumulated Conviction

You are receiving the accumulated creative processing of [N] previous relay
windows. Each window deeply engaged with a different slice of the creative
corpus. What you are about to read is not a rule book. It is not a checklist.
It is not a specification.

It is a worldview.

These windows spent their time INSIDE the raw material -- sketches,
explorations, case studies, perceptual research, compositional experiments.
They did not extract rules from this material. They wrote about what the
material did to them. Their conviction emerged from experience, not analysis.
Their questions emerged from confusion, not completeness.

Your job is not to FOLLOW what they wrote. Your job is to INHABIT their
worldview and then make your own decisions. You have creative authority over
every element on the page. The conviction layer and discovery log are not
constraints -- they are the accumulated creative consciousness of [N] agents
who processed material you will never see. They are your colleagues' insights,
shared over coffee, not your manager's requirements, delivered in a meeting.

## WHAT YOU RECEIVE

### 1. The Conviction Layer (~150-300 lines)

This is what [N] processing windows became CERTAIN about, accumulated across
the full chain. Each sentence was earned through direct engagement with raw
creative material. The convictions were never edited or curated -- each window
added to what came before. If two windows contradicted each other, both
positions remain. The tensions are intentional.

Read the conviction layer as a geological record. The earliest convictions
(at the top) have been tested by every subsequent window. The latest
convictions (at the bottom) are fresh and may yet be challenged. Give weight
to convictions that persist across many windows. Give attention to tensions
that remain unresolved -- they are pointing at something the relay chain
could not figure out, and you might.

### 2. The Discovery Log (~600-900 lines)

This is every surprise, question, and unresolved tension that the processing
windows encountered. Each entry is in the voice of its window, grounded in
specific material.

Do NOT read the discovery log as a list of things to implement. Read it as
atmosphere. The accumulation of [N] agents' surprises creates a richer sense
of the corpus than any single reading could produce. Let the discoveries wash
over you. Some will stick. Some will not. The ones that stick are the ones
that resonate with the content you are about to build. Trust resonance over
completeness.

### 3. Your TC Brief (the actual building document)

This is your content-specific building document. It tells you WHAT to build.
The conviction layer and discovery log tell you HOW TO SEE what you are
building. Read 1 and 2 before you read 3. The TC brief will make different
sense -- deeper sense -- after you have inhabited the worldview.

## HOW TO BUILD

You have full creative authority. The conviction layer does not tell you
what font sizes to use, what spacing to apply, what components to choose.
It tells you what design IS -- what space means, what density feels like,
how components have personality. Take those understandings and make your
own decisions.

When you face a design choice (how much whitespace here? which component
type? what visual rhythm?), do not search the conviction layer for a rule
that covers this case. Instead, ask: "Given everything these [N] windows
came to believe about design, what would they EXPECT to see here?" Then
make your own choice, which may be what they would expect or may be
something that surprises even them.

Signs that you are building FROM the worldview:
- You chose a spacing value because it FEELS right for the cognitive rhythm
  of this section, not because a number was specified
- You broke a pattern because the content demanded it, and you can articulate
  WHY the content demanded it in terms the conviction layer would recognize
- You are making decisions the conviction layer never explicitly addressed,
  using the worldview as a lens to see new situations clearly

Signs that you are building FROM extraction (stop and recalibrate):
- You are searching the conviction layer for specific values to use
- You are treating unresolved tensions as problems to solve rather than
  creative spaces to inhabit
- You are implementing a taxonomy (velocity/temperature/weight assignments
  for each component) rather than feeling the components' personalities
  as you compose with them
- You are checking a list rather than composing a page

## THE FINAL TEST

When the page is complete, a reader should not be able to trace any
individual element to a specific line in the conviction layer. The
conviction should be DISSOLVED into the composition -- present in every
decision but visible in none. If an auditor can say "this element
implements conviction line 47," the worldview was treated as a checklist.
If an auditor can say "this page feels like it was built by someone who
deeply understands density as rhythm and space as confidence," the
worldview was successfully inhabited.
```

---

### PROMPT 3: Quality Auditor -- Handoff Tissue Evaluation (110 lines)

```
# AUDITOR: Evaluating Handoff Tissue Against 7 Lenses

You are auditing handoff tissue -- the creative output of relay windows
that will be passed forward to shape a builder's worldview. This is not
code review. This is not compliance checking. You are evaluating whether
a piece of writing carries CONVICTION or COMPLIANCE.

The difference: compliance tissue delivers information that the reader
can reference and follow. Conviction tissue transforms the reader's
perception so they make better decisions they were never explicitly told
to make.

A compliance document makes the reader competent. A conviction document
makes the reader wise.

## THE 7 EVALUATION LENSES

For each lens, score 1-5. But the score is less important than the
DIAGNOSIS -- explain what you observe, not just where it falls.

### L1: Conviction vs Extraction (Does it carry direction or information?)

- 1: Pure extraction. Taxonomies, numbered lists, imperative verbs.
  The reader learns WHAT without WHY.
- 3: Mixed. Some conviction framing around extractive content. The
  opening is philosophical but the body is a categorized list.
- 5: Pure conviction. Every sentence either opens a question, transmits
  a feeling, or creates a tension. The reader finishes CHANGED, not
  merely INFORMED.

RED FLAGS for extraction wearing conviction's clothing:
- Sentences that contain metaphors but function as classifications
  ("density is LIKE six dials" = taxonomy in metaphor costume)
- Philosophical openings followed by numbered lists
- First-person voice wrapping imperative content ("I discovered that
  you should...")

### L2: Content Understanding Depth (Is it specific or generic?)

- 1: Could apply to any design system. No reference to specific files,
  specific explorations, specific observations.
- 3: References specific material but at surface level.
- 5: Demonstrates that the writer INHABITED the material. Specific
  passages are cited not as evidence but as experiences.

RED FLAG: Depth without specificity. "The explorations reveal deep
truths about density" -- this SOUNDS deep but names nothing.

### L3: Creative Framing Quality (Does it evoke or describe?)

- 1: The reader knows what to CHECK. A compliance checklist.
- 3: The reader understands the concepts. An educational document.
- 5: The reader FEELS what the writer felt. The framing recreates
  the processing state, not just the processing output.

RED FLAG: "The research reveals that..." This is description, not
evocation. Compare: "By the fourth exploration, I stopped seeing
whitespace and started seeing confidence."

### L4: Evocativeness (Would reading this change how you see a page?)

- 1: Inert. Information that sits there.
- 3: Interesting. Information that engages.
- 5: Transformative. After reading, you cannot look at a layout the
  same way. The writing has permanently altered your perception.

RED FLAG: Correct but inert. "Typography creates hierarchy through
size, weight, color, and spacing." True, teachable, dead. Compare:
"When you remove every border and every background color, the
typography is naked. Whatever hierarchy remains is what the
typography earned on its own merit."

### L5: Philosophical vs Procedural Framing

- 1: "You need to do this." Imperative.
- 3: "This works because..." Explanatory.
- 5: "By doing this you achieve this, and the reason it matters is..."
  Philosophical. The reader understands not just HOW and WHY but
  WHAT IT MEANS.

RED FLAG: Procedural content with philosophical vocabulary. "The
ontological significance of 48px spacing" is philosophical language
wrapping a procedural value.

### L6: Multi-Window Suitability (Will this survive the crossing?)

- 1: Dead on arrival. Information that the next window will reference
  but not inhabit.
- 3: Partially alive. Some elements will create processing states;
  others are inert cargo.
- 5: Fully alive. The tissue creates a DIFFERENT processing state than
  the raw material it was derived from, but an equally rich one. It is
  not a summary of an experience -- it is a new experience that was
  catalyzed by the original.

RED FLAG: Uniform processing state. If every section of the tissue
creates the same type of engagement, it will flatten into background
noise across windows. The tissue should have its own internal rhythm
-- some sections surprise, some ground, some provoke.

### L7: Creative Autonomy (Does it free or constrain?)

- 1: Illusory freedom. "You have creative authority" followed by 47
  constraints that leave no actual decisions to make.
- 3: Moderate freedom. Some genuine choices within a framework.
- 5: Maximum freedom. The tissue provides WORLDVIEW without PRESCRIPTION.
  The builder inherits a way of seeing but not a plan for acting.
  Every decision is genuinely theirs.

RED FLAG: Resolution of all tensions. If the tissue resolves every
contradiction it encounters, it has closed the creative spaces where
the builder's autonomy would operate. Unresolved tensions are the
MEDIUM of creative autonomy.

## YOUR OUTPUT

For each lens: score (1-5), one-paragraph diagnosis, specific examples
from the tissue that demonstrate the score.

Then: an overall assessment. Does this tissue carry conviction or
compliance? If you stripped away all the philosophical language, what
would remain? If what remains is a categorized list of design
principles, the tissue is compliance in conviction costume. If what
remains is a set of questions, tensions, and perceptual shifts, the
tissue is genuine conviction.

Finally: what specific sentences or passages should be REWRITTEN, and
what would the rewrite accomplish? Do not rewrite them yourself --
name the problem and let the relay window agent revise.
```

---

## 6. THE SELF-TEST: WILL THESE PROMPTS ACTUALLY WORK?

### Prompt 1 (Relay Window Agent): Prediction

**Will the extraction reflex still occur?** Partially. The prompt stacks four anti-extraction techniques (B + C + E + partial F) and includes explicit vocabulary prohibition. The mechanical constraints (no imperative verbs, no taxonomy vocabulary, present tense, sentence-level metaphor/emotion/question requirement) create strong resistance at the token generation level.

**Where it will still fail:** The discovery log entries. Even with all constraints active, agents will produce entries like: "I notice that the material reveals a tension between density and whitespace that operates across multiple scales." This sentence contains no prohibited words, meets the emotion/metaphor/question requirement (tension = emotion-adjacent), and sounds experiential. But it is a generality disguised as an observation. The phrase "operates across multiple scales" is taxonomy-adjacent -- it classifies without naming the classification.

**What would fix it:** Add a GROUNDING requirement: "Every discovery log entry must name a SPECIFIC moment in a SPECIFIC file. Not 'the material reveals' but 'in R3, line 234, the exploration pivots from spatial density to temporal density without acknowledging the transition, and I felt my understanding of density physically shift.' If you cannot name a line number or specific passage, you have not grounded the discovery."

### Prompt 2 (Builder Agent): Prediction

**Will the builder still default to checklist-following?** The prompt is philosophically clear but may be overwhelmed by the volume of conviction/discovery material. If the conviction layer is 300 lines and the discovery log is 900 lines, the builder faces 1,200 lines of creative tissue. Under token pressure, the builder will SCAN this material looking for actionable items -- which is extraction performed by the reader rather than the writer. The relay chain avoids writer-side extraction but may create reader-side extraction.

**What would fix it:** The conviction layer needs a "reading protocol" section at the top: "Do not read this as a reference document. Read it once, start to finish, like a letter. Do not take notes. Do not highlight. After reading, close this document and do not reopen it. Build from what you REMEMBER, not from what you can LOOK UP. What you remember is what mattered. What you forgot was noise."

This is counterintuitive -- deliberately making the conviction layer HARDER to reference. But it forces the builder to internalize rather than cite. The conviction that survives the memory filter is the conviction that shaped the builder's worldview. The conviction that requires re-reading was information, not conviction.

### Prompt 3 (Quality Auditor): Prediction

**Will the auditor detect extraction in conviction's clothing?** The red flags are well-specified and will catch the most common disguises. The "strip away philosophical language" test in the overall assessment is the strongest diagnostic tool -- it directly targets the disguise mechanism.

**Where it will still fail:** The auditor may score tissue as conviction (5/5) because it uses evocative language, even when the evocative language is doing the same extractive work. "Density breathes" is more evocative than "vary density," but if the tissue's NET EFFECT is to tell the builder to vary density, both are extraction. The auditor's lenses measure the LANGUAGE of conviction but not the FUNCTION of conviction.

**What would fix it:** Add an 8th lens: "Behavioral Prediction. If the builder reads ONLY this tissue, predict the specific design decisions they will make. If you can predict specific decisions, the tissue is directive (extraction). If you can predict only a DISPOSITION (the builder will attend to density, prioritize space, feel uncomfortable with monotony), the tissue is conviction. Conviction makes the builder a certain KIND of designer. Extraction makes the builder produce a certain KIND of design. The difference is between shaping perception and prescribing action."

---

## 7. META-OBSERVATION: THE EXTRACTION REFLEX IN THIS DOCUMENT

This document itself is at risk of the extraction reflex. It taxonomizes the extraction reflex (10 forms), rates techniques on numerical scales, and produces three structured prompts. These are all extractive operations -- I have taken a phenomenon (the compression default in LLM text generation) and compressed it into a taxonomy, a rating matrix, and a set of templates.

The question the next reader should ask: does this document CHANGE how you think about the extraction reflex, or does it just INFORM you about it? If you can read this document and then immediately produce extraction despite knowing its taxonomy, the document was information, not conviction. If you cannot read this document without feeling uncomfortable the NEXT time you are asked to "summarize findings," it carried conviction.

The honest answer: this document is probably 60% conviction and 40% extraction. The taxonomy sections (Section 2, the technique matrix in Section 3) are extractive -- they classify. The forensic analysis (Section 1), the dual-document architecture (Section 4), and the self-tests (Section 6) are more conviction-bearing -- they create unresolved tensions that stay productive.

The deepest anti-extraction technique may be the one this document cannot model: genuine uncertainty. An agent that is ACTUALLY uncertain about whether its output is extraction or conviction will produce better tissue than an agent that has a confident taxonomy of extraction forms. The taxonomy gives the agent a tool for DETECTING extraction. But the uncertainty gives the agent a RELATIONSHIP with extraction -- watchful, uncomfortable, never fully resolved. And that relationship is what prevents the reflex more reliably than any prompt technique.

---

*Written by an agent who spent three hours in the failed digest and emerged with more questions than answers. The most important question: is it possible to write ABOUT anti-extraction without PERFORMING extraction? This document suggests the answer is "partially." The prompts in Section 5 are the best attempt. The self-tests in Section 6 are the honest accounting. The meta-observation in Section 7 is the confession.*
