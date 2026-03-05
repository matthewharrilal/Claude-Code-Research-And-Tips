# Metacognitive Checkpoints for Flagship Build

**Author:** METACOG-DESIGNER
**Date:** 2026-02-16
**Purpose:** Checkpoints that force genuine self-examination at 5 pipeline stages, designed to prevent the specific cognitive failures that doomed the Ceiling experiment
**Sources:** 04-metacognitive-analysis.md, 01-process-retrospective.md, 02-content-form-analysis.md, 02-alternative-mental-models.md, 07-VERDICT.md

---

## THE ANTI-PERFORMATIVE PRINCIPLE

The hardest problem in metacognitive checkpoint design is not *what questions to ask* but *how to prevent the answers from being performative*. The Ceiling experiment had extensive preparation (1,004-line prompt, 56 rules, 16 agents) that identified every risk and prevented none of them. Documentation served a psychological function (reassuring the preparation team) without serving a mechanical function (preventing failure).

A performative checkpoint looks like: "Ask yourself: is the concept buildable?" The agent writes "Yes, the concept is buildable because [rationalization]." The checkpoint is passed. The failure occurs anyway. The checkpoint created an illusion of examination without genuine examination.

**Three design principles prevent performative metacognition:**

1. **EXTERNALIZE THE CHECK.** The agent performing the work cannot be the sole evaluator of its quality. Where possible, a checkpoint requires a DIFFERENT agent to answer the question, or requires producing a concrete artifact (a number, a calculation, a comparison) that cannot be faked by narrative.

2. **MAKE FAILURE CONCRETE.** Each checkpoint has a specific, measurable failure condition -- not "is this good?" but "is this number above this threshold?" Judgment questions achieve ~0% agent compliance. Binary questions achieve ~100%. Metacognitive checkpoints must be binary.

3. **ATTACH CONSEQUENCES TO FAILURE.** A checkpoint without a consequence is a suggestion. Each checkpoint specifies what STOPS if the check fails, and what alternative path is taken. The consequence must be costly enough that the agent cannot rationally ignore it.

---

## CHECKPOINT STAGE 1: PRE-BUILD

**When:** After metaphor derivation and build plan are complete, BEFORE the builder begins implementation.

**Cognitive traps this stage prevents:**
- The "Perfect Concept = Quality Product" fallacy (metacognitive analysis F4): a 12/12 concept produced a 1.5/4 product
- Content-architecture mismatch (content-form analysis B3): the metaphor demanded 4 zones; the content naturally divided into 5 sections with 3 performative zones
- The preparation ceiling (metacognitive analysis C2): prompt length beyond ~200 lines degrades rather than improves builder compliance

---

### CHECK 1.1: THE SPATIAL BUDGET (Binary, Externalized)

**What the agent produces:** A table calculating total estimated page height, total estimated content height, and the content-to-void ratio.

**Format (MANDATORY -- the check fails if this table is absent):**

```
SPATIAL BUDGET
  Zone 1 content: ~Xpx (N paragraphs + M code blocks + K tables)
  Zone 1 structural overhead: ~Ypx (padding + indicator + transition)
  ...repeat for each zone...

  Total content height: ~Xpx
  Total structural overhead: ~Ypx
  Content-to-void ratio: X:Y

  THRESHOLD: Content >= 60% of total
  STATUS: PASS / FAIL
```

**Why this works:** The Ceiling build plan specified spacing values (64px/48px/32px/24px padding, 80px checkpoint margins) without ever calculating their cumulative effect. A simple arithmetic exercise -- which the process retrospective demonstrated could have been done on the plan's own numbers -- would have revealed ~2,180px of whitespace from just three sources. The spatial budget forces the planner to DO THE ARITHMETIC instead of assuming proportions will be acceptable.

**Failure consequence:** If the content-to-void ratio is below 60:40, the plan CANNOT proceed to build. The planner must either:
- Reduce zone count (merge zones with insufficient content)
- Reduce spacing values (compress padding/margins until ratio passes)
- Add content (if the source material supports it)

**Who performs this check:** The planner, but the calculation must be WRITTEN INTO the build plan document. The team lead verifies the table exists and the arithmetic is correct. No table = no build.

---

### CHECK 1.2: THE ZONE NECESSITY TEST (Binary, Concrete)

**What the agent produces:** For each planned zone, a three-question assessment:

| Zone | Content mass >= 800px? | Different content TYPE from neighbors? | Reader intent shifts at boundary? | Verdict |
|------|----------------------|--------------------------------------|----------------------------------|---------|
| Z1   | YES (950px)          | YES (overview vs. technical)         | YES (orienting -> learning)      | KEEP    |
| Z2   | NO (400px)           | NO (same technical reference)        | NO (still learning)              | MERGE   |

**Why this works:** The content-form analysis found that 3 of 7 zones in the Ceiling page were "performative" -- they existed for the metaphor, not the content. Zone SEC-B (Installation) and Zone OPS-B (Mental Models) each existed as separate zones because the metaphor demanded "rooms within wings," not because the content required structural separation. This test forces the planner to justify every zone with concrete content evidence, not metaphor logic.

**Three NOs = MERGE.** Any zone that fails all three questions must be merged with an adjacent zone. Two NOs = FLAG for the team lead to adjudicate. The default is merge; the planner must argue for keeping.

**Failure consequence:** Zone count reduces. The metaphor adapts to the content, not the content to the metaphor. If the metaphor cannot accommodate fewer zones, the metaphor is wrong for this content.

---

### CHECK 1.3: THE PROMPT LENGTH GATE (Binary, Measurable)

**What the agent checks:** Total line count of the execution prompt.

**Threshold:** <= 200 lines.

**Why this works:** The metacognitive analysis established a "preparation ceiling" hypothesis: the Middle experiment used a substantially shorter prompt and achieved 960px container width compliance; the Ceiling used a 1,004-line prompt and failed on container width. The longer prompt did not produce better compliance. It produced worse compliance because critical rules were diluted among non-critical rules. The 200-line threshold is derived from the observation that the Middle prompt was in the 100-200 line range and the Ceiling prompt was 5-10x beyond it.

**Failure consequence:** If the prompt exceeds 200 lines, the planner must compress. Compression rules:
- Remove all THINKING content (rationale, analysis, justification). Keep only INSTRUCTIONS.
- Remove all context that the builder does not need to act on.
- If still over 200 lines after compression, reduce the scope of the build (fewer zones, fewer mechanisms, fewer designed moments).

**The team lead enforces this.** The planner does not self-assess whether the prompt "feels" short enough.

---

### CHECK 1.4: THE ANTI-AMBITION AUDIT (Externalized)

**What happens:** A DIFFERENT agent (not the planner, not the builder) reads the build plan and answers ONE question:

> "What is the SIMPLEST version of this page that would satisfy the flagship requirements? Describe it in 3 sentences."

The planner then compares their plan to this simplest version and answers:

> "My plan adds [N] things beyond the simplest version. For each addition, here is the specific perceptual benefit it creates and the specific spatial cost it incurs."

**Why this works:** The Ceiling experiment optimized for conceptual richness (4 zones, 14 mechanisms, 5 designed moments, 3 checkpoint types, 7 transitions). Each addition was individually justified. But the cumulative effect was a page that was 70-80% void. The anti-ambition audit forces the planner to confront the gap between "each addition has a reason" and "the total package is buildable." It introduces the concept of SPATIAL COST per addition, which was entirely absent from the Ceiling preparation.

**Failure consequence:** If any addition has spatial cost > perceptual benefit (planner's own assessment), it is removed. If the planner cannot articulate the perceptual benefit in one sentence, the addition is decorative, not structural, and is removed.

---

### CHECK 1.5: THE METAPHOR DISTANCE TEST (Binary)

**What the agent measures:** Semantic overlap between the metaphor's vocabulary and the content's own vocabulary.

**How:** List the 10 key terms in the metaphor. List the 10 key terms in the content. Count overlaps.

**Threshold:** Overlap <= 3/10.

**Why this works:** The content-form analysis identified that "Secure Facility" for content about secure access control had zero interpretive distance -- the metaphor RENAMED what was already there. The metaphor survived at only 35-45% without labels because it was never doing visual-interpretive work. A productive metaphor introduces a dimension NOT present in the content (e.g., the Canal Lock metaphor would have added "elevation change" and "water flow," concepts absent from the original content). High vocabulary overlap = labeling, not metaphor.

**Failure consequence:** If overlap > 3/10, the metaphor is too literal. Either select a different metaphor candidate with greater semantic distance, or accept the current metaphor with the explicit acknowledgment that it will require structural (not just labeling) expression to survive without text labels.

---

## CHECKPOINT STAGE 2: POST-PASS-1 (Structure/Skeleton)

**When:** After the first structural pass is complete -- HTML structure, zone divisions, basic layout are in place. No mechanism enrichment yet, no designed moments.

**Cognitive traps this stage prevents:**
- Continuation bias (metacognitive analysis E4): building despite warning signs because effort has been invested
- The "CSS is the unit of change" assumption (metacognitive analysis B2): treating all problems as fixable at the same level
- Signal-to-silence imbalance (content-form analysis D5): 67 signal events vs. 57 silence elements

---

### CHECK 2.1: THE FRESH-EYES PROPORTION CHECK (Externalized, Binary)

**What happens:** A SEPARATE agent (never the builder, never the planner) views the skeleton at 1440px viewport and answers three questions:

1. "What percentage of the scroll depth is content vs. empty space?" (Measurement, not impression)
2. "If you stopped scrolling at 50%, would you think the page was complete?" (Must answer NO for pass)
3. "Where is the last visually distinct landmark? Is it past the 70% scroll mark?" (Must answer YES for pass)

**Why this works:** The builder cannot objectively evaluate their own skeleton because of continuation bias -- they have invested effort and will rationalize any result. The Ceiling builder implemented spacing values faithfully without ever scrolling the finished page. A separate agent with NO investment in the skeleton has no rationalization incentive.

**Critical implementation detail:** This agent must view the page in a browser (via team lead's pre-captured screenshots). The agent does NOT read the build plan. The agent does NOT know the metaphor. The agent sees ONLY the rendered HTML. This is a cold-look checkpoint, not a plan-verification checkpoint.

**Failure consequence:**
- If question 1 shows < 55% content: STOP. Rebuild skeleton with fewer zones or reduced spacing. Do not proceed to Pass 2.
- If question 2 answers YES: The second half of the page has insufficient visual weight. Add structural landmarks to the latter half before proceeding.
- If question 3 answers NO: Designed moments are front-loaded. Redistribute before proceeding.

**This is the most expensive checkpoint** (requires a separate agent and browser rendering). It is also the most valuable. The Mode 4 PA found what the initial lighter audit missed precisely because fresh-eyes observers with no context caught what invested observers could not. Moving this observation to BEFORE mechanism enrichment saves the cost of enriching a fundamentally broken skeleton.

---

### CHECK 2.2: THE VOID DETECTION SCAN (Binary, Programmatic)

**What the agent measures:** Using JavaScript in the browser, calculate:

```javascript
// Total scroll height
const totalHeight = document.documentElement.scrollHeight;

// Sum heights of elements with actual content
const contentElements = document.querySelectorAll('p, pre, code, table, ul, ol, img, figure, blockquote');
let contentHeight = 0;
contentElements.forEach(el => { contentHeight += el.offsetHeight; });

// Content ratio
const ratio = contentHeight / totalHeight;
console.log(`Content ratio: ${(ratio * 100).toFixed(1)}%`);
```

**Threshold:** Content ratio >= 50% at skeleton stage.

**Why this works:** The process retrospective proposed a cumulative whitespace audit (Change 9) and demonstrated that the Ceiling page's void could have been detected programmatically. This moves that detection to the earliest possible point -- after skeleton but before enrichment. At skeleton stage, the threshold is lower (50% vs. 60% for the final page) because mechanisms will add visual density.

**Failure consequence:** If ratio < 50%, the skeleton has a structural void problem. The builder must:
- Reduce zone count
- Reduce inter-zone spacing
- Remove empty structural containers (checkpoint dividers, zone indicators that have no content)
- Recheck ratio after changes

Do NOT proceed to Pass 2 until the skeleton passes this gate.

---

### CHECK 2.3: THE CONTINUATION BIAS INTERRUPT (Self-Check with Teeth)

**What the builder answers:** After viewing their own skeleton:

> "I am about to invest significant effort enriching this skeleton with mechanisms and designed moments. Here are the THREE most likely ways the finished page could fail despite my enrichment efforts:
> 1. [specific failure mode]
> 2. [specific failure mode]
> 3. [specific failure mode]
>
> For each: Is this failure mode preventable NOW (at the skeleton level) or only detectable LATER (after enrichment)?"

**Why this works:** This is a pre-mortem exercise, which the metacognitive analysis recommended (E4): "Before any experiment launch, require a pre-mortem exercise: 'Assume this experiment fails catastrophically. What is the most likely cause?'" The pre-mortem forces the builder to generate failure scenarios BEFORE continuation bias fully activates.

**The key mechanism is the second part:** "Is this preventable NOW or only detectable LATER?" If a failure mode is preventable now but detectable only later, the builder is being offered a choice: fix it cheaply now or expensively later. The Ceiling experiment's whitespace void was preventable at the skeleton stage (reduce zones, reduce spacing) but was only detected after Mode 4 PA (the most expensive detection possible).

**Failure consequence:** If ANY failure mode is identified as "preventable now," the builder must address it before proceeding. The builder sends this pre-mortem analysis to the team lead. The team lead reviews and approves continuation only if now-preventable failure modes have been addressed.

---

## CHECKPOINT STAGE 3: POST-PASS-2 (Mechanism Enrichment)

**When:** After mechanisms have been deployed to the skeleton. The page has visual texture, designed moments, multi-channel encoding -- but before the final intentionality pass.

**Cognitive traps this stage prevents:**
- Complexity bias (metacognitive analysis E3): more mechanisms = better, more scales = richer
- Signal saturation (content-form analysis D5): 67 signal events creating flat perceptual experience
- The substitution effect (metacognitive analysis A3): attention spent on higher scales diverts from lower scales

---

### CHECK 3.1: THE SUBTRACTION TEST (Concrete, Binary)

**What the builder does:** Identify the LAST 3 mechanisms deployed (the most recently added). For each:

> "If I removed this mechanism entirely, would the page be:
> (a) WORSE -- the page loses something the reader would notice
> (b) SAME -- the reader would not perceive the difference
> (c) BETTER -- the page gains breathing room or clarity"

**Why this works:** The content-form analysis found that the Ceiling page had 67 signal events competing for attention against 57 silence elements -- a nearly 1:1 ratio that creates flat perceptual experience. The page's BEST element (the architecture diagram) worked precisely because it was surrounded by designed silence, inverting the page's overall ratio. The subtraction test forces the builder to evaluate whether each mechanism is creating signal or noise.

**Failure consequence:**
- Any mechanism rated (c) BETTER if removed: Remove it.
- Any mechanism rated (b) SAME: Remove it. A mechanism the reader cannot perceive is structural overhead, not richness.
- The builder must justify keeping (a)-rated mechanisms with a one-sentence statement of what the reader would lose. "The reader would lose multi-channel encoding at the zone transition" is acceptable. "The reader would lose compliance with the mechanism mandate" is NOT acceptable -- that is a process reason, not a reader reason.

**The deeper purpose:** This checkpoint embeds the adversarial thesis ("restraint > saturation") into the build process without requiring the builder to adopt the thesis as doctrine. The builder simply evaluates their own work and removes what does not serve the reader. If 3/3 mechanisms survive the test, the mechanisms are well-chosen. If 2/3 are removed, the builder was adding complexity for its own sake.

---

### CHECK 3.2: THE SIGNAL-TO-SILENCE RATIO (Measurable)

**What the builder counts:**

Signal events: Every discrete visual element that demands reader attention. Includes:
- Zone indicators with text ("ZONE 1 OF 4")
- Checkpoint/transition dividers with labels
- Callout boxes
- Workstation/component title bars
- Tables, diagrams, code blocks
- Designed moments (if visually distinct from surrounding content)

Silence elements: Every region of deliberate visual quiet. Includes:
- Plain paragraph spacing (standard line-height, no decoration)
- Generous margins without content
- Background-only transitions (no text, no labels)

**Threshold:** Signal-to-silence ratio must be <= 0.8:1 (more silence than signal).

**Why this works:** The content-form analysis calculated the Ceiling page's ratio at 1.18:1 and demonstrated that the page's strongest moment (architecture diagram) had the INVERSE ratio (~0.33:1). The alternative mental models research (Model 2: Semantic Resonance) establishes that richness comes from the RATIO of signal to silence, not from the total amount of signal. A page with more silence than signal creates space for designed moments to stand out.

**Failure consequence:** If ratio > 0.8:1, the builder must remove signal elements (zone labels, checkpoint bars, workstation title bars, decorative dividers) until the ratio drops below threshold. The choice of WHICH signals to remove is the builder's judgment -- but the REQUIREMENT to remove signals is binary.

---

### CHECK 3.3: THE DESIGNED MOMENT DISTRIBUTION CHECK (Binary)

**What the builder maps:**

Divide the page into 4 scroll quartiles (0-25%, 25-50%, 50-75%, 75-100%). For each quartile, identify whether at least one designed moment exists -- a visually distinct element that would stop a scanner and make them look more closely.

**Threshold:** At least 1 designed moment per quartile. The last quartile (75-100%) is the most critical because the Ceiling page's 5 designed moments clustered at 10-65% scroll depth with zero past 75%.

**Failure consequence:** If any quartile (especially the last) has zero designed moments, the builder must either:
- Move an existing designed moment into the empty quartile
- Create a new designed moment in the empty quartile
- Restructure the page to move content into the empty quartile

**Why this matters for performativity:** This is not "do you have enough designed moments?" (a question the builder will always answer yes). This is "show me WHERE they are on the scroll axis" (a factual question with a verifiable answer). The quartile map is a concrete artifact that the team lead can verify.

---

### CHECK 3.4: THE RESTRAINT INVENTORY (Self-Report with Accountability)

**What the builder produces:** A list of at least 3 things they CHOSE NOT TO DO.

Format:
```
RESTRAINT INVENTORY
1. Did NOT add [specific mechanism/technique]: because [reason]
2. Did NOT add [specific element]: because [reason]
3. Did NOT add [specific decoration]: because [reason]
```

**Why this works:** The metacognitive analysis identified complexity bias as systemic: "The system consistently equated complexity with quality: more mechanisms = more richness, more scales = more compositional fluency." The restraint inventory forces the builder to NOTICE their acts of restraint and articulate why restraint serves the page. This creates a cognitive counterweight to the "add more" default.

**The accountability mechanism:** The team lead reads the restraint inventory. If the inventory is absent or trivially filled ("Did not add border-radius because it is prohibited"), the checkpoint fails. The restraints must be GENUINE -- things the builder could plausibly have added and consciously chose not to.

**Failure consequence:** If the builder cannot name 3 genuine restraints, the builder has been adding without filtering. The builder must review all deployed mechanisms and apply the subtraction test (3.1) to the most recent 5 rather than 3.

---

## CHECKPOINT STAGE 4: POST-PASS-3 (Intentionality/Polish)

**When:** After the final pass -- intentionality layer, polish, responsive checks. The page is complete. This is the LAST checkpoint before the verdict process.

**Cognitive traps this stage prevents:**
- Confirmation bias (metacognitive analysis E1): constructing a "success" narrative before evidence is complete
- The "Playwright artifact" dismissal pattern (metacognitive analysis B1): explaining away inconvenient findings
- The concept-product coupling assumption (metacognitive analysis B3): "I planned well, so the result must be good"

---

### CHECK 4.1: THE EGO SEPARATION (Externalized, Mandatory)

**What happens:** Before any self-assessment, the team lead captures full-page screenshots at 1440px and 768px (with animations disabled). A DIFFERENT agent (not the builder, not the planner, not anyone who has seen the build plan or metaphor) views these screenshots and answers:

> "Describe this page in 3 sentences. What is its strongest element? What is its weakest element? Would you ship this?"

**Why this works:** The Mode 4 PA demonstrated that 9/9 fresh-eyes auditors found the whitespace void that 5 invested observers missed. The Ceiling experiment's initial verdict was structured as "SUCCESS WITH CRITICAL CONTAINER VIOLATION" BEFORE comprehensive evaluation -- the framing was chosen before the evidence was in. The ego separation checkpoint prevents this by gathering external perception BEFORE the builder or team lead constructs any narrative.

**Critical constraint:** This agent receives ZERO context. No metaphor name. No mechanism count. No build plan. No success criteria. Just screenshots. The agent's response is a pure perceptual reaction.

**Failure consequence:** If the fresh-eyes agent says "would not ship" or identifies a gestalt-level failure (e.g., "most of this page is empty"), the build enters a FIX cycle before any formal verdict. The fresh-eyes finding is treated as REAL unless a second independent agent contradicts it. The finding is NEVER attributed to "artifacts" without verification by a third agent.

**This addresses the PA-2 dismissal directly:** In the Ceiling experiment, PA-2 reported "3,600px of blank space" and was dismissed as a Playwright artifact because 4/5 observers saw the full page. But those 4 observers were checking for PRESENCE of content, not PROPORTION. PA-2 was the only observer checking spatial experience. The ego separation checkpoint ensures that at least one observer is checking proportion, and their finding cannot be dismissed without independent verification.

---

### CHECK 4.2: THE LEVEL-OF-ABSTRACTION DIAGNOSIS (Binary)

**What the builder answers for every known defect:**

> "This defect is at the level of:
> (a) CSS -- fixable by changing property values
> (b) HTML -- fixable by restructuring elements
> (c) ARCHITECTURE -- fixable only by changing zone count, content distribution, or metaphor structure
> (d) CONTENT -- fixable only by adding or removing source material"

**Why this works:** The Ceiling fix team treated the whitespace void as a CSS problem and applied 40 CSS changes. The re-audit found the void unchanged because the void was an ARCHITECTURE problem (4 zones with insufficient content for zones 3-4). The fix team asked "what CSS values produce this void?" instead of "why does this zone have more space than content?" The level-of-abstraction diagnosis prevents this misdiagnosis by forcing explicit classification before any fix begins.

**Failure consequence:** If any defect is classified as (c) ARCHITECTURE or (d) CONTENT, CSS fixes are prohibited for that defect. The team must decide whether to:
- Restructure the architecture (merge zones, eliminate structural containers)
- Add content (if source material exists)
- Accept the defect and note it in the verdict
- Abandon the current build and start from a simpler architecture

**The prohibition is the teeth:** CSS fixes for architecture problems are not "suboptimal" -- they are BANNED. This is a binary rule, and binary rules achieve 100% compliance.

---

### CHECK 4.3: THE NARRATIVE CONTAMINATION TEST (Self-Check)

**What the builder writes BEFORE seeing any formal evaluation:**

> "If I had to write the verdict for this page RIGHT NOW, what would I call it? What narrative frame would I use?"

Then, after writing this:

> "Now list THREE ways this narrative could be wrong. What evidence would contradict my narrative? Where have I been looking for confirmation rather than disconfirmation?"

**Why this works:** The metacognitive analysis found that the Ceiling verdict was structured as "SUCCESS WITH CRITICAL DEFECT" -- a narrative frame constructed before evidence was complete, which then served as a filter through which PA-2's legitimate finding was dismissed. By forcing the builder to NAME their narrative frame and then ATTACK it, the checkpoint interrupts the cycle of confirmation bias.

**This is the one checkpoint that IS genuinely a self-check.** It cannot be externalized because it is about the builder's internal narrative. But it has a structural safeguard: the builder must write the narrative AND the counter-evidence. If the counter-evidence section is empty or trivially filled, the team lead flags it.

**Failure consequence:** None -- this is the ONE purely reflective checkpoint. Its value comes from the act of articulation, not from a pass/fail gate. However, the written output becomes part of the build record and is available to the verdict synthesizer, who can check whether the builder's narrative matches the evidence.

---

## CHECKPOINT STAGE 5: PRE-VERDICT

**When:** After all audits are complete (programmatic, perceptual, comparative, novelty), BEFORE the verdict document is written.

**Cognitive traps this stage prevents:**
- Consensus epistemology failure (metacognitive analysis B1): "4/5 agree, so the dissenter is wrong"
- The "better than X = success" asymmetry (metacognitive analysis B4): defining success on dimensions where success is expected
- Framework-boundary blindness (metacognitive analysis G): "each framework is correct within its domain and misleading at its boundaries"

---

### CHECK 5.1: THE DISSENT PROTECTION PROTOCOL (Binary, Procedural)

**What the verdict synthesizer must do:** Before writing the verdict, list every finding from every auditor that CONTRADICTS the emerging consensus. For each dissenting finding:

1. "Is this finding qualitatively different from what a rendering artifact would produce?" (If YES: the finding is REAL until proven otherwise)
2. "Did this auditor use a DIFFERENT METHODOLOGY than the consensus?" (If YES: the finding addresses a different question and cannot be dismissed by majority vote)
3. "Does this finding challenge my preferred narrative?" (If YES: it receives EXTRA scrutiny FOR its validity, not AGAINST it)

**Why this works:** PA-2's finding of "3,600px of blank space" was dismissed because 4/5 observers "disagreed." But the 4 agreeing observers were checking PRESENCE; PA-2 was checking PROPORTION. They were answering different questions. The consensus was about completeness, not proportion. The dissent protection protocol forces the synthesizer to check whether dissent comes from a different methodology before applying majority rule.

**Failure consequence:** Any finding dismissed as "artifact" or "outlier" MUST be accompanied by a verification note from an independent agent who specifically investigated that finding. "PA-2 probably had Playwright issues" is NOT sufficient. "A separate agent scrolled the page and confirmed content renders correctly at all scroll positions" IS sufficient.

---

### CHECK 5.2: THE SUCCESS-AXIS ALIGNMENT (Concrete)

**What the verdict synthesizer produces:** A matrix comparing the dimensions WHERE the page succeeds against the dimensions THAT DETERMINE SHIPPABILITY:

```
DIMENSION          | DID WE SUCCEED? | DOES IT DETERMINE SHIPPABILITY?
Novelty            | YES (9/9)       | NO (a novel unshippable page is still unshippable)
Metaphor coherence | YES (structural)| PARTIALLY (contributes to reader experience)
Soul compliance    | YES (8/8)       | YES (binary guardrail)
Container width    | NO              | YES (binary guardrail)
Spatial proportion | NO (1.5/4)      | YES (determines first impression)
Token compliance   | YES (86%)       | PARTIALLY (below 80% is blocking)
Inter-agent msgs   | NO (0)          | NO (process metric, not product metric)
```

**Why this works:** The Ceiling verdict used "better than Middle" as a success criterion, which created an asymmetric filter: it asked "Is Ceiling better in SOME ways?" (yes) without asking "Is Ceiling better on the dimensions that MATTER MOST?" (no -- spatial proportion matters more than metaphor novelty for a shippable page). The success-axis alignment forces the synthesizer to distinguish between "dimensions where we succeeded" and "dimensions that determine the verdict."

**Failure consequence:** If the page FAILS on 2+ dimensions that determine shippability, the verdict CANNOT be "SUCCESS WITH DEFECTS." It must be "DOES NOT SHIP" with a clear description of which shippability dimensions fail and what would fix them. The verdict narrative must be structured as "EVALUATION" not "SUCCESS/FAILURE" -- findings first, then assessment.

---

### CHECK 5.3: THE FRAMEWORK-BOUNDARY SCAN (Reflective, Documented)

**What the verdict synthesizer writes:**

> "The evaluation frameworks I used to assess this page are: [list them].
> For each framework, what is the BOUNDARY where it stops being reliable?
> What properties of the page exist AT THOSE BOUNDARIES that no single framework captures?"

**Why this works:** The metacognitive analysis's core finding is that "each framework is correct within its domain and misleading at its boundaries." The scale model correctly predicted novelty but was blind to spatial proportion. The binary/judgment framework correctly predicted compliance but was blind to emergent failures. The preparation paradigm correctly identified risks but was blind to the preparation ceiling. No single framework captures the properties that exist at the INTERFACE between frameworks.

**Example output:**
- The programmatic audit captures binary rule compliance but is blind to proportion (framework boundary: presence vs. perception)
- The PA captures perceptual quality but is blind to CSS-level correctness (framework boundary: perception vs. specification)
- At the boundary between these two frameworks sits "emergent spatial experience" -- a property that is neither programmatic nor purely perceptual but arises from their interaction

**Failure consequence:** None -- this is a reflective checkpoint, not a gate. But the output is included in the verdict document as a "Methodology Limitations" section, which signals to future readers that the verdict acknowledges its own epistemic boundaries.

---

### CHECK 5.4: THE KILL CRITERIA CHECK (Binary, Pre-Committed)

**What the verdict synthesizer verifies:** Before the experiment began, kill criteria were established (pre-build checkpoint 1.1). The verdict synthesizer checks whether any kill criteria have been triggered:

1. "Did any post-build audit find a gestalt failure flagged by > 6/9 auditors as WOULD-NOT-SHIP?" (If YES: the fix path is architectural restructure, not CSS patch)
2. "Did any fix cycle fail to improve PA-05c PROPORTIONATE by >= 1 full point?" (If YES: the fix is addressing the wrong level of abstraction)
3. "Is the page's content-to-void ratio still below 55% after fixes?" (If YES: the architecture cannot be saved; rebuild required)

**Why this works:** The metacognitive analysis recommended establishing "abandon triggers" before experiments begin, because sunk cost bias prevents abandonment at the decision point. Pre-committed kill criteria bypass sunk cost by making the abandonment decision BEFORE investment creates attachment. The verdict synthesizer does not decide whether to abandon -- they check whether pre-committed criteria have been triggered.

**Failure consequence:** If ANY kill criterion is triggered, the verdict is "REBUILD REQUIRED." The synthesizer does not evaluate whether the rebuild is "worth it" -- the pre-commitment already made that judgment. This is the most painful checkpoint and the most important one. The Ceiling experiment's fix cycle (40 CSS changes, estimated 1,652px savings, actual 0% improvement) would have been prevented by kill criterion #2.

---

## HOW TO IMPLEMENT: THE ANTI-PERFORMATIVITY ARCHITECTURE

### Who Asks These Questions?

Each checkpoint specifies its own enforcement mechanism:

| Checkpoint | Self-Check | External Agent | Team Lead Verification | Programmatic |
|-----------|:----------:|:--------------:|:---------------------:|:------------:|
| 1.1 Spatial Budget | | | X (verifies table exists) | X (arithmetic) |
| 1.2 Zone Necessity | X (produces table) | | X (reviews table) | |
| 1.3 Prompt Length | | | | X (line count) |
| 1.4 Anti-Ambition | | X (different agent) | X (reviews comparison) | |
| 1.5 Metaphor Distance | X (vocabulary list) | | X (counts overlap) | |
| 2.1 Fresh-Eyes Proportion | | X (cold-look agent) | X (captures screenshots) | |
| 2.2 Void Detection | | | | X (JavaScript measurement) |
| 2.3 Continuation Bias | X (pre-mortem) | | X (reviews and approves) | |
| 3.1 Subtraction Test | X (evaluates mechanisms) | | | |
| 3.2 Signal-to-Silence | X (counts elements) | | X (verifies ratio) | |
| 3.3 Designed Moment Map | X (quartile map) | | X (verifies distribution) | |
| 3.4 Restraint Inventory | X (lists restraints) | | X (reviews genuineness) | |
| 4.1 Ego Separation | | X (cold-look agent) | X (captures screenshots) | |
| 4.2 Level-of-Abstraction | X (classifies defects) | | X (enforces CSS ban) | |
| 4.3 Narrative Contamination | X (names + attacks narrative) | | | |
| 5.1 Dissent Protection | X (lists dissent) | X (verifies if dismissed) | | |
| 5.2 Success-Axis Alignment | X (produces matrix) | | X (reviews matrix) | |
| 5.3 Framework-Boundary | X (identifies boundaries) | | | |
| 5.4 Kill Criteria | | | X (checks triggers) | X (measurements) |

**Summary:** 12 self-checks, 4 external agent checks, 13 team lead verifications, 4 programmatic checks. Most checkpoints use multiple enforcement mechanisms.

### How to Prevent Performative Responses

Three structural safeguards:

**1. ARTIFACT REQUIREMENT.** 14 of 19 checkpoints require the agent to PRODUCE SOMETHING -- a table, a calculation, a map, a list, a matrix. The artifact is verifiable. A narrative answer ("yes, the proportions look good") is not verifiable. A table showing "Zone 1: 800px content, 160px overhead, 83% ratio" IS verifiable.

**2. TEAM LEAD AS ENFORCER, NOT EVALUATOR.** The team lead's role is not to evaluate quality -- that is the builder's and auditor's job. The team lead's role is to verify that checkpoints WERE PERFORMED and that artifacts EXIST. This is a binary verification: "Does the spatial budget table exist? Does the zone necessity table exist? Does the restraint inventory have 3+ genuine entries?" The team lead does not need design judgment to enforce these checks.

**3. EXTERNAL AGENTS AT GESTALT BOUNDARIES.** The two most critical checkpoints (2.1 Fresh-Eyes Proportion, 4.1 Ego Separation) use external agents because self-assessment systematically fails at the gestalt level. The Mode 4 PA's 9/9 convergence on the whitespace void -- found by cold-look observers, missed by invested observers -- is definitive evidence that external observation is not optional for gestalt assessment.

### How to Make These Questions Actually CHANGE Behavior

The checkpoints change behavior through three mechanisms:

**1. GATES.** Checkpoints 1.1, 1.3, 2.1, 2.2, 4.1, and 5.4 are hard gates: the process STOPS if the check fails. The builder cannot proceed to the next pass. The verdict cannot declare success. The fix team cannot apply CSS patches to architecture problems. Gates change behavior because they make continuation impossible without addressing the finding.

**2. REMOVAL PRESSURE.** Checkpoints 1.2, 3.1, 3.2, and 3.4 create pressure to REMOVE rather than ADD. The zone necessity test merges weak zones. The subtraction test removes invisible mechanisms. The signal-to-silence ratio forces removal of decorative signal elements. The restraint inventory rewards acts of restraint. These checkpoints counterbalance the system's default complexity bias.

**3. NARRATIVE DISRUPTION.** Checkpoints 4.3, 5.1, 5.2, and 5.3 disrupt the verdict narrative by forcing the synthesizer to name their assumptions, protect dissent, align success axes with shippability, and acknowledge framework boundaries. These do not produce binary pass/fail outcomes, but they produce documented reasoning that can be audited and challenged.

---

## COST-BENEFIT ANALYSIS

**Total additional cost:** ~2 external agent invocations (checks 2.1 and 4.1), ~30 minutes of team lead verification time across all stages, ~15 minutes of builder self-assessment time across all stages.

**What this prevents:** The Ceiling experiment consumed 12 agents for the build, 12 agents for the Mode 4 PA, 6+ agents for the fix cycle, and 8+ agents for the re-audit -- all to ultimately reach a verdict of "DO NOT SHIP." The total cost of the failure cascade was ~38+ agent invocations. The checkpoints add ~2 agent invocations to prevent ~30+ wasted ones.

**The asymmetry is stark:** A 5-minute spatial budget calculation (Check 1.1) would have prevented the entire Ceiling experiment's failure cascade. The 504px of structural padding was calculable from the build plan's own numbers. The arithmetic was trivial. Nobody did it. The checkpoint ensures somebody does.

---

## SUMMARY: THE FIVE STAGES

| Stage | When | Key Checks | Primary Mechanism | Cost |
|-------|------|-----------|-------------------|------|
| PRE-BUILD | Plan complete, before build | Spatial budget, zone necessity, prompt length, anti-ambition, metaphor distance | Gates + external review | 1 external agent, team lead review |
| POST-PASS-1 | Skeleton complete | Fresh-eyes proportion, void detection, continuation bias interrupt | External cold-look + programmatic measurement | 1 external agent, browser rendering |
| POST-PASS-2 | Mechanisms deployed | Subtraction test, signal-to-silence ratio, moment distribution, restraint inventory | Removal pressure + measurement | Builder self-assessment, team lead verification |
| POST-PASS-3 | Page complete | Ego separation, level-of-abstraction, narrative contamination | External cold-look + diagnostic classification | 1 external agent (shared with 2.1) |
| PRE-VERDICT | Audits complete | Dissent protection, success-axis alignment, framework boundaries, kill criteria | Narrative disruption + pre-committed gates | Team lead verification |

**Total checkpoints:** 19
**Binary/measurable:** 14 (74%)
**Self-check only:** 5 (26%)
**External agent required:** 3 (shared across stages)
**Estimated overhead:** ~45-60 minutes across the entire pipeline

---

## THE META-METACOGNITIVE CHECK

If these 19 checkpoints feel like too many, apply the system's own principle: **binary rules achieve 100% compliance; judgment rules achieve ~0%.** Each checkpoint is designed to be binary. But 19 binary checks in sequence create cognitive load that may itself produce the dilution effect the metacognitive analysis warns about (the 1,004-line prompt's 56 rules each getting 1/56th of the builder's attention).

**The resolution:** Not every checkpoint fires for every agent. The pre-build checks (1.1-1.5) are for the PLANNER. The post-pass checks (2.1-2.3, 3.1-3.4, 4.1-4.3) are for the BUILDER. The pre-verdict checks (5.1-5.4) are for the SYNTHESIZER. No single agent faces more than 7 checkpoints. This is within the demonstrated attention budget.

**If even 7 is too many:** The irreducible minimum is 3 checkpoints:
1. **CHECK 1.1 (Spatial Budget):** This alone would have prevented the Ceiling failure.
2. **CHECK 2.1 (Fresh-Eyes Proportion):** This alone would have caught the void before enrichment.
3. **CHECK 5.4 (Kill Criteria):** This alone would have prevented the wasted fix cycle.

Everything else is defense in depth. These three are the load-bearing walls.

---

**END METACOGNITIVE CHECKPOINTS**
**Author:** METACOG-DESIGNER
**Total checkpoints designed:** 19 across 5 stages
**Binary/measurable:** 14 (74%)
**External agent required:** 3 invocations
**Estimated pipeline overhead:** 45-60 minutes
**Irreducible minimum:** 3 checkpoints (spatial budget, fresh-eyes, kill criteria)
**Core principle:** Checkpoints must produce ARTIFACTS, not ANSWERS. An artifact (table, calculation, map) is verifiable. An answer ("yes, this looks good") is performative.
