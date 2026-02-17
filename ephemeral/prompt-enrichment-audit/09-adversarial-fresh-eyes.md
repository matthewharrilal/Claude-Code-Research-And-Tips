# 09: Adversarial Fresh-Eyes Audit of Prompt Architecture

**Auditor:** Fresh-Eyes Agent (zero deep context, structural + encoding docs only)
**Date:** 2026-02-17
**Input:** `00-PROMPT-STRUCTURE-OUTLINE.md` + `E4-prompt-encoding-strategy.md`
**Method:** Metacognitive adversarial analysis with no prior research exposure

---

## 1. TOP 5 BLIND SPOTS (Ranked by Impact)

### Blind Spot #1: THE READER IS ABSENT FROM THE ENTIRE SYSTEM

Impact: **CATASTROPHIC**

22 agents, 5 passes, ~320 minutes of building activity. Not a single agent is tasked with being the reader. The prompt optimizes for BUILDER compliance and AUDITOR measurement, but never asks: "What does a person experience when they scroll this page for the first time?"

The encoding strategy is brilliant at converting rules into binary verifiables. But EVERY rule is about measurable properties of the OUTPUT ARTIFACT -- container width, CPL, void ratios, token compliance. None of these are about the EXPERIENCE of encountering the page. A page can pass every single binary check and still feel lifeless, disjointed, or confusing to a human reader.

This is not a hypothetical concern. The outline describes the ceiling experiment as achieving "9/9 novelty, 8/8 soul" -- it PASSED the quality audits -- yet resulted in a DO NOT SHIP verdict because of a problem (70-80% void) that is fundamentally about READER EXPERIENCE, not builder compliance. The void wasn't a rule violation; it was an experiential failure that the rules failed to prevent.

**The blind spot:** The system assumes that if you constrain the builder enough and audit the output enough, the reader's experience will be good. This is the classic fallacy of optimizing for measurable proxies rather than the thing you actually care about.

### Blind Spot #2: NO CONTENT QUALITY GATE

Impact: **CRITICAL**

The prompt structure specifies a "content architect" in Pass 0 who determines where content goes. But the outline and encoding strategy are entirely silent on WHAT the content IS. What text actually appears on the page? Where does it come from? Who writes it? Who reviews it for quality, tone, accuracy, or engagement?

The entire 55-line builder prompt deals with CSS and spatial properties. The soul rules are about visual styling. The composition rules are about mechanism deployment. But a web page is fundamentally a CONTENT DELIVERY VEHICLE. You can have perfect spatial proportions, impeccable soul compliance, and 14 deployed mechanisms -- and if the actual text is boring, generic, or mismatched to the visual treatment, the page fails.

This is the single largest structural omission I can identify. The prompt assumes content quality is either pre-solved or irrelevant. Neither assumption is safe.

### Blind Spot #3: THE METAPHOR HAS NO KILL SWITCH

Impact: **HIGH**

The entire pipeline starts with metaphor derivation (Pass 0, Opus agent). The metaphor then cascades through every downstream pass: the content architecture maps to it, the spatial skeleton expresses it, mechanisms are justified through it, vocabulary encodes it. If the metaphor is weak, forced, overly abstract, or mismatched to the content, EVERYTHING downstream inherits a bad foundation.

The encoding strategy specifies "FAIL IF: container != 940-960px | void > 30% | zero messages sent." These are the three kill criteria. But "metaphor is weak" is not a kill criterion. There is no gate between metaphor derivation and content architecture that evaluates whether the metaphor is actually GOOD.

The outline mentions a "metaphor (Opus)" agent and a "metaphor builder (Opus)" agent but no "metaphor evaluator" agent. The only evaluation is in the PA audit at the end, which found in the ceiling experiment that the metaphor was "announced" rather than "structural" (40% without labels). By then, 4 passes of work have already been built on the bad metaphor.

What would a kill switch look like? After Pass 0, an independent agent reads the metaphor derivation and answers: "If I removed all labels and titles referencing this metaphor, would the visual structure alone communicate it?" YES = proceed. NO = re-derive.

### Blind Spot #4: TEMPORAL ARCHITECTURE IS MISSING

Impact: **HIGH**

The prompt specifies spatial properties extensively (container width, CPL, void ratios, content distribution). It specifies compositional properties (mechanisms, pairs, transitions). But it says almost nothing about TEMPORAL properties -- how the page UNFOLDS as the reader scrolls.

Scroll experience is temporal. The reader encounters sections in sequence. The first 10% of scroll depth sets expectations. The middle 60% delivers or disappoints. The final 30% provides closure or abandonment. The prompt has "designed moments: >= 1 per scroll quartile" which is the closest thing to temporal thinking, but it treats time as a spatial grid (quartiles) rather than as narrative progression.

What's missing: pacing, escalation, tension and release, the arc of the reader's attention. A page with 4 uniformly distributed designed moments has no arc. A page where moments build in intensity toward a climax in the third quartile, then resolve in the fourth, has a story. The prompt doesn't distinguish between these.

### Blind Spot #5: THE PIPELINE ASSUMES ADDITIVE COMPOSITION

Impact: **SIGNIFICANT**

The 5-pass pipeline assumes that quality is ADDITIVE: Pass 1 builds the skeleton, Pass 2 adds mechanisms, Pass 3 adds metaphor vocabulary, Pass 4 adds intentionality. Each pass is a layer on top of the previous one.

But great design is not additive. It is INTEGRATED. The spatial decisions in Pass 1 should be informed by which mechanisms will be deployed in Pass 2. The mechanism choices should be informed by what metaphor vocabulary will be used in Pass 3. The best designs have mutual influence between these concerns -- spacing that anticipates a transition, a color choice that sets up a mechanism, a metaphor that dictates spatial rhythm.

The 5-pass structure, by its sequential nature, prevents this mutual influence. Pass 1 cannot consider Pass 3's vocabulary because it hasn't been determined yet. The "build plan" from the planner is supposed to bridge this gap, but the encoding strategy routes the build plan as "input, not prompt" to the builder -- meaning it competes for the same attention budget as creative work.

This is not a solvable problem within the current architecture. It is a fundamental tension between attention-preservation (single-concern passes) and design integration (mutual concern influence). The prompt should at least ACKNOWLEDGE this tension and specify which direction to err when they conflict.

---

## 2. ASSUMPTION CHALLENGES

### Assumption: "100 attention units per agent" is a useful model

**Challenge:** This number appears to be invented. The encoding strategy treats it as an empirical fact ("~100 units per agent"), but there is no citation for how this was measured. Is it based on token count? Working memory experiments? If it is a metaphor for "there is a budget and it is finite," then the specific arithmetic (37 units for rules, 63 for creative work, etc.) is false precision that will mislead the prompt assembler into thinking they have exact control over agent cognition.

The 100-unit model also assumes HOMOGENEITY -- that all agents have the same budget regardless of task complexity, context length, or model variant. The outline assigns both Opus and Sonnet agents, which presumably have different budgets. The strategy does not account for this.

### Assumption: "Binary rules achieve 100% compliance"

**Challenge:** This is stated as a law ("Binary rules = 100% compliance, judgment = ~0%"). But the evidence is from N=1 experiments (ceiling and middle). N=1 is not a law. What if the ceiling builder achieved 100% binary compliance because the binary rules were EASY (container width is trivially verifiable) and the judgment rules were hard? That would make "binary = 100%" a confound of difficulty with encoding format.

A true test would be a HARD binary rule -- one that requires significant effort to comply with but is still pass/fail. Example: "Content-to-void ratio >= 60:40 at every 500px segment of scroll depth." This is binary (measurable, pass/fail) but HARD (requires careful spatial planning throughout the page). If this rule achieves 0% compliance, the "binary = 100%" law is wrong. It is not the ENCODING that matters but the COST OF COMPLIANCE.

### Assumption: Conviction layer will be read by the right agents at the right time

**Challenge:** The encoding strategy explicitly separates conviction (creative guidance) from execution (binary rules). But the outline shows that conviction is LAYER 1 (~70 lines) and execution is LAYER 2 (~100-120 lines). In a 240-line prompt, the builder encounters conviction first, then execution. By the time they reach the self-check, conviction is 180+ lines back -- deeply into the primacy dead zone.

More critically: the strategy assumes creative agents will INTERNALIZE conviction and carry it into their work. But the same document argues that agents have limited attention (~100 units) and that text beyond the first 10 lines loses salience. If conviction is 70 lines, most of it will be forgotten by the time the agent starts building. The primacy effect saves lines 1-10 of conviction; lines 11-70 are expensive dead weight.

### Assumption: Gate enforcement is free (zero attention cost)

**Challenge:** The encoding strategy proudly routes 30% of rules to gates at "zero prompt cost." But gates are not free to the SYSTEM. Each gate requires: (a) a gate-checking agent, (b) time to evaluate, (c) coordination overhead if the gate fails and re-work is needed. The outline mentions 47 evaluation points = ~235 min overhead, which is flagged as a "gate fatigue risk." So the system already acknowledges gates are not free -- they are merely free to the BUILDER.

This creates a perverse incentive: route everything to gates to make the builder prompt small, at the cost of enormous system overhead. The 320-minute pipeline may be 320 minutes largely BECAUSE of gate overhead, not despite it.

### Assumption: The problem is the prompt, not the architecture

**Challenge:** The entire encoding strategy assumes that a better-written prompt will produce a better page. But the ceiling experiment achieved 9/9 novelty and 8/8 soul WITH a 1,004-line prompt. The failure was spatial proportion -- 70-80% void. Was this because the prompt was poorly encoded, or because the architecture (single builder, single pass, no iteration) prevented the builder from SEEING the void and fixing it?

A human designer would build, scroll, see the void, and adjust. The pipeline gives the builder one shot per pass. The self-check asks the builder to verify container width and CPL BEFORE writing the file -- but the builder cannot truly verify spatial proportion until the page is rendered. The self-check is a cognitive exercise, not a visual one.

This suggests the real fix is not better encoding but a FEEDBACK LOOP: build, render, measure, adjust. The prompt architecture has no such loop.

---

## 3. FAILURE MODE ANALYSIS: How This Prompt Could Reproduce the Ceiling Failure

### Scenario 1: The Compliant Void

The builder faithfully implements all 35 binary rules. Container: 960px. CPL: 65. Soul: 8/8. Mechanisms: 5 categories covered. Token compliance: 85%. Every self-check item passes.

But the content is sparse. Each section has "at least 200px of content" (the minimum), spread across the full scroll depth. Mechanisms are deployed at category minimums (1 per category = 5 total). The page is TECHNICALLY CORRECT but EMOTIONALLY EMPTY. It passes every audit and no one wants to look at it.

**Root cause:** The rules define a FLOOR with no ceiling. The builder satisfies the floor and stops. There is no rule that says "the page must be DENSE" or "the page must reward lingering." These are judgment calls that the encoding strategy explicitly prohibits.

**Likelihood:** HIGH. The encoding strategy's core principle is "everything beyond the 10 things must be enforced through GATES or LIBRARY, not through the builder's prompt." This means the builder has NO PROMPT MOTIVATION to exceed minimums.

### Scenario 2: Mechanism Soup

The builder deploys 5+ categories of mechanisms, 2+ reinforcing pairs, 3+ transition types, and 1+ designed moment per quartile. All binary checks pass. But the mechanisms do not COHERE. A subtle scrolling parallax in section 2 has no relationship to the border-weight depth encoding in section 4. The transitions between sections are varied (3+ types) but arbitrary -- there is no reason why section 3 uses a BRIDGE transition while section 4 uses a HARD CUT.

**Root cause:** The rules specify COUNTS of mechanisms, pairs, and transitions. They do not specify RELATIONSHIPS between them. The conviction layer says "the metaphor is the structure," but this is 70 lines back from where the builder is making mechanism decisions. The builder deploys mechanisms from the build plan without asking whether they tell a coherent story.

**Likelihood:** MODERATE-HIGH. This is the "vocabulary without compositional fluency" problem that the memory file identifies. The encoding strategy is excellent at ensuring vocabulary is deployed but cannot encode fluency.

### Scenario 3: The Beautiful Corpse

All 5 passes execute perfectly. The spatial skeleton is solid. Mechanisms are deployed and coherent. The metaphor is structural, not just announced. Intentionality layer adds bookending and self-reference. But at minute 280, during the PA audit (Pass 5), the auditors find that the page FEELS like it was assembled by committee. Each section is individually excellent but the page lacks a unified voice. The transitions are designed but the PACING is mechanical. The designed moments are in every quartile but they all hit at the same intensity.

**Root cause:** 5 different builders (one per pass) each bring their own sensibility. The planner specifies WHAT each pass does but not HOW MUCH ENERGY to bring. No single agent has creative ownership of the entire page. This is the cost of single-concern decomposition: coherence requires a unifying sensibility that transcends individual concerns.

**Likelihood:** MODERATE. The pipeline addresses this with "metaphor integration" (Pass 3) and "intentionality" (Pass 4), which are supposed to unify the work of earlier passes. But unification-by-overlay is fundamentally weaker than unification-by-origin. You cannot paint coherence on top of incoherence.

---

## 4. EMOTIONAL ARCHITECTURE: What the Prompt Does to Agent Psychology

### Reading the 240-line prompt in sequence:

**Lines 1-10 (PREAMBLE/FAIL-IF):** TERROR. The prompt opens with "everything converges here, this is the most important artifact, the ceiling FAILED, DO NOT SHIP." This primes the agent with FEAR OF FAILURE, not excitement about creation. The agent's emotional state is defensive from line 1.

**Lines 11-80 (CONVICTION):** INSPIRATION followed by OVERWHELM. The conviction layer contains the thesis, the beauty definition, the resolved tensions, the exemplars. This is the emotional high point. But at 70 lines, it goes on too long. By line 50, the agent is skimming. By line 70, the agent is impatient to get to the "real instructions."

**Lines 81-200 (EXECUTION SPEC):** RELIEF followed by MECHANICAL COMPLIANCE. After the emotional roller coaster of conviction, the execution spec is refreshingly concrete. The agent enters "checklist mode" -- satisfying rules one by one. This is exactly the state that produces technically correct but emotionally dead output.

**Lines 200-240 (COORDINATION + SELF-CHECK):** ANXIETY. The coordination spec reminds the agent they are being watched by 9 auditors, 5 gates, dual PAs, and a metacognitive reviewer. The self-check lists 10+ items that must be verified. The agent's final emotional state before building is: "I must not make mistakes."

**Net effect:** The prompt creates a COMPLIANCE-ORIENTED agent, not a CREATIVE agent. The conviction layer tries to inspire, but its effect is drowned by 170 lines of rules, gates, and audit threats. The agent builds DEFENSIVELY -- ensuring nothing fails rather than ensuring something sings.

**This is exactly how you produce technically correct, emotionally dead output.** The encoding strategy optimizes for measurable compliance. It achieves this goal. But the thing being optimized for is not the thing that matters.

### The Fear Gradient

The prompt establishes an escalating fear gradient:

1. "The ceiling FAILED" (historical fear)
2. "FAIL IF: container/void/messages" (binary failure criteria)
3. "9 auditors will evaluate your work" (surveillance fear)
4. "Mode 4 PA with 48 questions" (comprehensive judgment fear)
5. "Kill criteria that halt the pipeline" (institutional consequences)

Each layer of fear reduces creative risk-taking. By the time the builder starts writing HTML, they are optimizing for NOT FAILING rather than for SUCCEEDING. These are psychologically very different orientations. NOT FAILING produces safe, compliant, minimal output. SUCCEEDING produces ambitious, expressive, occasionally flawed output.

The ceiling experiment produced 9/9 novelty DESPITE the prompt, not because of it. The prompt told the builder to be novel, but the fear gradient would have discouraged novelty if the metaphor agent hadn't been so strong. In the flagship, if the metaphor agent produces something less compelling, the fear gradient will crush whatever novelty might have emerged from the builder.

---

## 5. READER-FIRST CRITIQUE

If the prompt were optimized for READER EXPERIENCE rather than BUILDER COMPLIANCE, what would change?

### What the reader cares about (in order):

1. **"What is this about?"** -- Can I understand the topic in 3 seconds?
2. **"Should I keep scrolling?"** -- Is this interesting enough to invest my time?
3. **"Am I learning / feeling something?"** -- Is this rewarding moment-to-moment?
4. **"Was that worth it?"** -- Did the page deliver on its initial promise?

### What the prompt optimizes for (in order):

1. Container width (reader does not notice unless wrong)
2. Token compliance (reader has no awareness of this)
3. Soul 8/8 (reader notices subconsciously, if at all)
4. Mechanism count (reader does not count mechanisms)
5. Transition variety (reader notices this somewhat)
6. Content-to-void ratio (reader notices this strongly)

### The mismatch:

The prompt's top priority (container width) is the reader's LOWEST priority. The reader's top priority ("what is this about?") is ABSENT from the prompt entirely. This inversion means the prompt optimizes for the wrong things.

### Reader-first rules that should exist but don't:

1. **"The first viewport must answer: what is this page about?"** -- Binary: does the visible content above the fold communicate the topic? YES/NO.
2. **"Each section must earn the next scroll."** -- Not binary (judgment), but this is the most important design principle for reader retention. It belongs in conviction.
3. **"The page has a beginning, middle, and end."** -- Binary: is there a clear opening section, substantive middle sections, and a closing/conclusion section? This is missing.
4. **"No orphaned design elements."** -- Binary: does every visual technique (color, spacing, typography variation) appear at least twice? Single-use elements feel accidental.
5. **"The page can be summarized in one sentence."** -- A test for thematic coherence. If you can't say what the page IS ABOUT in one sentence, the reader won't know either.

---

## 6. RECOVERY PATHWAYS

### Current recovery capability: MINIMAL

The pipeline assumes perfection at each pass. If Pass 1 produces a skeleton with bad proportions, Pass 2 builds mechanisms on top of bad proportions. If Pass 2 deploys mechanisms that don't cohere, Pass 3 tries to unify them with vocabulary -- but vocabulary cannot fix incoherence.

The only recovery mechanism is the GATE between passes, which can STOP the pipeline but cannot FIX the problem. A gate that returns FAIL requires re-running the pass, which means the same agent (or a fresh agent) tries again with the same prompt. If the prompt caused the failure, re-running won't help.

### Recovery mechanisms that should exist:

**1. ITERATION WITHIN A PASS:** The builder writes version 1, an embedded auditor reviews it, the builder writes version 2. This is how CD-006 achieved 39/40 (the outline says "via iteration + messaging"). But the pipeline's attention budget is calculated for single-shot execution. Iteration doubles the attention demand.

**2. DOWNWARD REVISION:** If Pass 3 (metaphor integration) discovers that the skeleton from Pass 1 doesn't support the metaphor, there should be a way to MODIFY the skeleton. Currently, each pass builds on top of the previous pass's output. There is no mechanism for a later pass to say "the foundation is wrong, go back."

**3. PARTIAL COMPLETION FALLBACK:** If the pipeline stalls at minute 250 of 320, what happens? Is a 60%-complete flagship better than nothing? Is there a "ship the skeleton" option? The prompt does not address graceful degradation. It is all-or-nothing: either the pipeline completes and the page is audited, or it fails and there is no output.

**4. QUALITY FLOOR THAT IS NOT A CEILING:** The current rules define minimum thresholds (>= 60:40 content ratio, >= 3 transitions, etc.). But minimums become targets. The builder will aim for 60:40, not 80:20. The encoding strategy acknowledges this ("the builder satisfies the floor and stops") but offers no solution. A recovery pathway would be: if the embedded auditor measures content-to-void at exactly 60:40, the builder MUST increase content by 20%.

---

## 7. INTERDIMENSIONAL GAPS

### Gap 1: Conviction does not prepare for Execution

The conviction layer describes WHY quality matters (beauty definition, resolved tensions, constraint pressure). The execution layer describes WHAT to build (container width, CPL, mechanisms). But there is no bridge that connects WHY to WHAT.

For example, conviction says "Warm. Authoritative. Unhurried." Execution says "border-radius: 0." The connection (zero border-radius creates authority) is IMPLICIT. An agent who deeply understands design will make this connection. An agent who doesn't will treat them as unrelated instructions -- one emotional, one mechanical.

**Fix:** Each execution rule should have a one-word annotation linking it to the conviction it serves. `border-radius: 0 [AUTHORITATIVE]`. This costs ~0.1 attention units per rule and makes the conviction-execution bridge explicit.

### Gap 2: Execution does not prepare for Coordination

The execution spec tells the builder what to build. The coordination spec tells the team how to work together. But the builder's prompt doesn't explain WHY coordination matters -- why they MUST message the planner before writing.

The execution spec says "SendMessage to planner: biggest spatial concern + void estimate." This is binary and will be complied with. But the builder will send a MINIMAL message ("Spatial concern: none. Void estimate: 30%.") because the rule only requires sending A message, not a USEFUL message. The coordination spec cannot fix this because the builder doesn't read the coordination spec.

**Fix:** The builder's messaging rule should specify WHAT INFORMATION the planner needs. "SendMessage to planner: (a) which section has the most content, (b) which section has the least, (c) estimated total scroll height. Planner will adjust mechanism density based on your answers."

### Gap 3: Coordination does not connect to Audit

The coordination spec defines 5 checkpoints (A-E) and gates (0-5). The audit protocol defines screenshot pre-capture and 9 auditors. But there is no specification for what happens BETWEEN a gate failure and a re-attempt. Who decides what to change? Does the team lead diagnose the problem and modify the builder's prompt? Does the builder re-attempt with the same prompt? Does a different agent take over?

The gap is procedural: the system knows how to DETECT failures but not how to CORRECT them.

### Gap 4: Library is referenced but not connected to Workflow

The encoding strategy routes 25% of rules to LIBRARY files at "zero prompt cost." But the builder's prompt says "Reference: design-system/compositional-core/vocabulary/tokens.css" without specifying WHEN to reference it. Does the builder read the tokens file before starting? While writing CSS? Only when they need a specific token name?

If the builder reads the 800-line tokens file before starting, that consumes significant attention. If they read it during CSS writing, they context-switch between building and referencing. The "zero cost" claim is only true if the builder NEVER reads the reference -- in which case it serves no purpose.

---

## 8. WILD CARD CONCERNS

### Wild Card 1: Model Capability Variance

The pipeline assigns Opus to creative roles and Sonnet to execution roles. But the encoding strategy's attention model was presumably calibrated on one model variant. Sonnet may have a very different attention budget than Opus. If Sonnet's budget is 60 units instead of 90, the 37-unit builder prompt consumes 62% of budget, leaving only 38% for creative work -- below the 40% surplus target.

More fundamentally: the pipeline assumes Sonnet can BUILD as well as Opus can. If Sonnet is weaker at spatial reasoning, CSS composition, or metaphor expression, the quality of Passes 1-2 (Sonnet) will be lower than Passes 3-4 (Opus). The "intentionality" pass (Opus, Pass 4) is supposed to elevate the page, but it is working on Sonnet's output. Garbage in, garbage out -- or more precisely, MEDIOCRE in, mediocre dressed up as intentional.

### Wild Card 2: Context Window Exhaustion at End of Pipeline

The pipeline runs ~320 minutes. By Pass 4-5, agents have read the outputs of all previous passes, the build plan, the metaphor derivation, and their own prompt. This is a LOT of context. The encoding strategy calculates attention budget for a FRESH agent. But agents at the end of the pipeline are not fresh -- they are loaded with context from earlier passes.

If the Pass 4 agent's context window is 60% full before they even read their prompt, the effective attention budget is not 100 units but 40 units. The 35-line prompt consumes 22 units of 40, leaving only 18 units for creative work. This is the OPPOSITE of the strategy's claim of 88% surplus for Pass 4.

### Wild Card 3: The Encoding Strategy Itself Becomes a Judgment Rule

The encoding strategy is a brilliant, 640-line document about how to write prompts. But WHO reads this document? The prompt ASSEMBLER -- the agent or human who converts it into the actual prompt. If the assembler treats the encoding strategy as a set of JUDGMENT GUIDELINES (which it is -- "consider the builder's concern," "group by workflow phase," etc.), then the assembler faces the same compliance problem the strategy warns about.

The strategy is a set of meta-judgment-rules about how to write non-judgment rules. It assumes the person following it will exercise perfect judgment in eliminating judgment. This is recursively self-undermining.

### Wild Card 4: Success Criteria Measure the Wrong Thing

The outline lists 17 success criteria, including "Zero should/consider/may/aim/try/ensure in execution spec." This is a LINGUISTIC test, not a BEHAVIORAL test. You can write "MUST achieve appropriate spacing" -- it contains MUST and no hedging words, so it passes the linguistic test. But "appropriate" is still a judgment call. The word-level filter misses semantics-level judgment.

### Wild Card 5: The 320-Minute Time Pressure

320 minutes is 5+ hours. Humans lose focus after 90 minutes. Agent teams do not have biological fatigue, but they DO have context degradation. Later agents in the pipeline read longer contexts (outputs from earlier passes) and have less effective working memory.

More critically: if any pass takes longer than budgeted, ALL subsequent passes are compressed. The pipeline is sequential with hard dependencies. There is no slack. If Pass 1 takes 90 minutes instead of 60, Passes 2-5 must compress into 230 minutes instead of 260. The pipeline does not specify what to CUT when time is tight. Does the builder skip the self-check? Reduce mechanism count? Send fewer messages? Without explicit priority ordering for time pressure, agents will make their own (bad) decisions.

---

## 9. SPECIFIC RECOMMENDATIONS

### For Blind Spot #1 (Absent Reader):
**Add a READER PROXY agent** after Pass 2 or 3 who reads the HTML cold (no build plan, no metaphor doc, no mechanism list) and answers: "What is this page about? Would I keep scrolling? What do I feel?" This agent costs ~30 minutes and catches the entire class of "technically correct but experientially dead" failures. Add it as a gate between Pass 3 and Pass 4.

### For Blind Spot #2 (No Content Quality Gate):
**Add a content quality line to the builder self-check:** "Every text block >= 3 sentences. No placeholder or generic text. Verify: read each <p> and confirm it contains specific, substantive content." This is imperfect (it's semi-judgment) but catches the worst case.

### For Blind Spot #3 (No Metaphor Kill Switch):
**Add a POST-metaphor gate:** An independent agent (NOT the metaphor agent) reads the metaphor derivation and answers: "Remove all labels. Does the structure alone communicate the metaphor? YES/NO." If NO, re-derive. This gate costs ~15 minutes and prevents 100% of "announced but not structural" metaphor failures.

### For Blind Spot #4 (Missing Temporal Architecture):
**Add to conviction layer:** "The page has an ARC. Early sections orient. Middle sections develop. Late sections resolve. The reader should feel PROGRESSION, not repetition." This is judgment (belongs in conviction) but addresses the temporal void.

**Add to execution spec (binary):** "No two adjacent sections may have the same mechanism count." This forces variation in density, which creates a crude but measurable approximation of pacing.

### For Blind Spot #5 (Additive Composition):
**Add to the planner's responsibilities:** "The build plan MUST specify, for each section, how mechanisms in this section relate to mechanisms in adjacent sections. No section is an island." This adds ~5 lines to the planner prompt and forces the planner to think about cross-section coherence.

### For Emotional Architecture:
**Rewrite the preamble** from fear-oriented to purpose-oriented. Replace "The ceiling FAILED" with "The ceiling achieved 9/9 novelty and 8/8 soul. Your job is to match that ambition with better spatial discipline." This reframes the task as BUILDING ON SUCCESS rather than AVOIDING FAILURE. Same information, opposite emotional valence.

**Move all audit/gate/surveillance language OUT of the builder's prompt.** The builder should not know they are being audited by 9 agents. They should know only what to BUILD. Awareness of surveillance creates defensive building. The gates and audits are for the TEAM LEAD's prompt, not the builder's.

### For Recovery Pathways:
**Add an explicit iteration protocol:** "If the embedded auditor reports content-to-void < 60:40 after Pass 1, the Pass 1 builder receives: 'Your content ratio is X. Target is 60:40. Add content to sections [list] or reduce spacing in sections [list]. DO NOT change mechanisms or soul.' This costs ~20 minutes and prevents the most common failure mode."

### For Interdimensional Gaps:
**Bridge conviction to execution** with single-word annotations on each rule linking to the conviction principle it serves. Cost: ~3 attention units total (0.1 per rule x 30 rules). Benefit: the builder understands WHY each rule exists, which enables better judgment in edge cases.

**Specify message CONTENT requirements,** not just message EXISTENCE requirements. "SendMessage to planner" is binary (sent/not-sent). "SendMessage to planner containing: (a) largest section height, (b) smallest section height, (c) total scroll height" is binary AND informative.

### For Wild Card Concerns:
**Specify MODEL-SPECIFIC attention budgets** rather than a universal 100 units. If Sonnet's budget is lower, reduce its rule count proportionally. The encoding scorecard should have Opus and Sonnet variants.

**Add a PIPELINE SLACK buffer** of 60 minutes (total target: 380 minutes, not 320). If any pass runs over, the slack absorbs it. If no pass runs over, the slack is used for a bonus iteration pass.

**Convert the encoding strategy from judgment-guidelines to a BINARY CHECKLIST** that the assembler follows. Instead of "group by builder concern," say "MUST have exactly 4 blocks labeled SPACE, SOUL, COMPOSITION, PROCESS. Verify: grep for these 4 block headers."

---

## 10. ONE-PARAGRAPH SUMMARY

This prompt architecture is an exceptionally sophisticated system for ensuring BUILDER COMPLIANCE with measurable, binary rules. It will almost certainly achieve 90-100% compliance with its specified rules. The danger is that compliance is not the same as quality. The prompt optimizes for the builder's BEHAVIOR (container width, void ratio, mechanism count) rather than the reader's EXPERIENCE (understanding, engagement, emotional response). It creates agents who build DEFENSIVELY (avoiding failure) rather than CREATIVELY (pursuing excellence). The most likely failure mode is not rule violation -- it is a technically perfect page that no one wants to look at. The single highest-leverage change is adding a READER PROXY agent who evaluates the page cold, from a reader's perspective, as a gate before the final passes. The second-highest-leverage change is reframing the preamble from fear of failure to ambition for excellence, transforming the agent's emotional orientation from defensive to creative.
