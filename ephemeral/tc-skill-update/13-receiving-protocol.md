# Receiving Protocol: How New Windows Interpret Deliverables Without Reducing Them to Rules

**Author:** receiving-designer (Task #24)
**Date:** 2026-02-27
**Status:** COMPLETE

---

## The Core Problem

A previous builder writes: "I chose 48px padding here because the content pivots from narrative to analysis."

Three possible receptions:
1. **Compliance:** "Use 48px at content pivots." (Rule extracted, context discarded.)
2. **Preservation:** "Maintain the 48px padding at this specific transition." (Decision preserved, reasoning discarded.)
3. **Inhabitation:** "The previous builder felt a pivot in the content's register and used spatial expansion to mark it. The pivot is real. How do I want to mark it?" (Intent absorbed, creative authority retained.)

Reception #3 is what we need. The difference is not in the words the previous builder writes -- the conviction brief and reflection protocol already handle framing. The difference is in how the RECEIVING PROMPT orients the new instance's processing state BEFORE it encounters the deliverable.

This document specifies that orientation for every window that receives input from another window.

---

## The Mechanism: Processing Mode Activation

An LLM's relationship to incoming text is shaped by what it was doing BEFORE the text arrived. If the preceding prompt says "verify the following requirements," the text is processed as requirements. If the preceding prompt says "here is what someone was trying to make -- what do you see?", the text is processed as creative testimony.

The receiving protocol works by establishing the PROCESSING MODE before the deliverable enters context. Three modes:

| Mode | Activated By | Processes Input As | Produces |
|------|-------------|-------------------|----------|
| **COMPLIANCE** | "Follow these...", "Ensure...", "Verify..." | Checklist items to satisfy | Output that matches input |
| **ANALYTICAL** | "Evaluate...", "Compare...", "Assess..." | Evidence to judge | Diagnosis of input |
| **GENERATIVE** | "What do you see?", "What do you want to make?", "What excites you?" | Raw material to respond to | Output that builds on input |

Every receiving prompt in this protocol activates GENERATIVE mode. The activation happens through specific language patterns (Section 5 below) and through the SEQUENCE in which the builder encounters materials.

---

## Window 2: Builder Receiving the TC Conviction Brief + Explorations

### The Problem Specific to This Window

The conviction brief is a beautifully framed creative document. But the builder is about to write thousands of lines of CSS. CSS is precise. The moment the builder needs to choose a background hex value, they will look for the "answer" in the conviction brief's calibration section. If the calibration says "#FEF9F5 -> #F5F0E8 -> #EDE6DA -> #1A1A1A," those hex values BECOME the specification. The framing is generative; the reception is compliance.

The same problem applies to explorations. A builder reading DD-006 (Fractal) doesn't naturally think "what interesting structural ideas live here?" They think "what CSS patterns can I reuse?" The exploration becomes a parts catalog.

### Receiving Prompt Sequence for Window 2

The builder receives these prompts BEFORE encountering any deliverable. Each prompt establishes a processing posture that shapes how the subsequent material is read.

---

**W2-ENTER: The Builder's Own Starting Point**

> "You are about to read a creative brief about a page. Before you read it, take a breath. You are going to build something. Not assemble it, not verify it, not implement it -- BUILD it. You will make choices the brief cannot predict. You will discover relationships the TC agent never saw. The brief tells you what world you are in. What you make inside that world is yours."

*Why this comes first:* It establishes creative authority before any input arrives. The builder's identity is "creator" before it becomes "reader." This matters because the first identity is stickier -- subsequent material is processed through the lens of "I am someone who creates" rather than "I am someone who follows."

---

**W2-READ-BRIEF: Orientation for the Conviction Brief**

> "Read the conviction brief now. Notice what EXCITES you. Not what you need to remember, not what you need to comply with -- what makes you want to build. The world-description tells you what this world FEELS like. The opposition map tells you where the FIGHT is. The compositional arc tells you what the READER will experience. The creative conditions are experiments you COULD try. After reading, answer one question: what is the single most interesting creative challenge this brief presents?"

*Why "excites" and "interesting":* These words activate evaluative engagement with the material rather than extractive engagement. The builder is asked to RESPOND to the brief, not ABSORB it. The single-question output forces synthesis -- the builder processes the entire brief through a creative lens and produces a creative judgment, not a compliance plan.

*Why NOT "summarize the brief" or "list the key constraints":* Both activate analytical/compliance modes. A builder who summarizes will extract rules. A builder who identifies "the most interesting challenge" will find creative territory.

---

**W2-READ-CONTENT: Orientation for the Raw Content**

> "Read the content now. Read it as a READER first -- someone encountering this writing for the first time. Where does it pull you forward? Where does it surprise you? Where does it change its voice? Now read it again through the conviction brief's lens. Does the brief's metaphor resonate with what you felt on first read? Where does the metaphor FIT the content, and where does it STRETCH? The stretching points are your richest creative territory."

*Why two reads:* The first read (as reader) gives the builder their OWN experience of the content, independent of the brief. The second read (through the brief's lens) connects that experience to the compositional strategy. This creates a layered relationship: the builder has both a first-person content experience AND a compositional framework. When these diverge, the builder has discovered something the TC agent missed -- and that discovery is creative fuel.

---

**W2-READ-EXPLORATIONS: Orientation for Explorations**

> "You are about to read 3-4 HTML pages created for different content with different metaphors. You are NOT reading these to copy their CSS. You are reading them to CHALLENGE your instincts. Each exploration solved a different compositional problem. As you read each one, ask: 'What would happen if I tried THIS approach with MY content? What would break? What would be better?' The explorations that FIGHT with your brief's approach are the most valuable."

*Why "challenge" and "fight":* The exploration recommendation already selects by generative opposition. But the builder still defaults to extraction without explicit orientation. "What would happen if I tried this" activates HYPOTHETICAL processing -- the builder mentally simulates alternative approaches rather than cataloging reusable patterns.

---

**W2-PRE-BUILD: The Creative Commitment**

> "You have read the brief, the content, and the explorations. Before you write any HTML or CSS, state in 2-3 sentences: what do you want this page to FEEL like? Not what the brief says it should feel like -- what YOU want it to feel like, having absorbed everything. This is your conviction. Build from it."

*Why this comes AFTER all reading:* The builder has processed all inputs and must now PRODUCE a creative statement. This statement is the inhabitation moment -- the point where the builder stops receiving and starts creating. The instruction "not what the brief says" explicitly separates the builder's creative conviction from compliance with the brief. If the builder's conviction perfectly mirrors the brief, that's fine -- but it must be the builder's own words, their own synthesis, their own desire.

*The key distinction:* The brief's conviction is the TC agent's. The builder's conviction is the builder's. When they align, the alignment is convergent creative intent, not compliance. When they diverge, the divergence is creative contribution.

### How This Prevents Hex-Value Compliance

The calibration section of the conviction brief lists specific hex values and spacing ranges. Without the receiving protocol, these become a specification. With the protocol:

1. The builder encountered the calibration AFTER being told to notice what "excites" them (W2-READ-BRIEF). Hex values are not exciting. The opposition map and creative conditions ARE.
2. The builder read the content as a READER first (W2-READ-CONTENT), developing their own sense of what the content needs before the calibration told them what values to use.
3. The builder committed to their OWN conviction (W2-PRE-BUILD) before writing CSS. When they reach for a background hex, they reach for one that serves their conviction, referencing the calibration as a PALETTE (creative resource) not a SPEC (compliance target).

The calibration values are still available and will likely be used. But the builder's relationship to them is "these are the colors of this world, and I am painting with them" rather than "these are the required values."

### Engaging with Raw Explorations Without Extracting Rules

The anti-extraction mechanism has three layers:

**Layer 1: The exploration recommendation's framing.** The TC skill already frames each exploration with "WHY" in terms of generative opposition ("your metaphor is linear descent; this shows how self-similarity achieves depth without linearity"). The builder encounters the exploration through a challenge frame, not a model frame.

**Layer 2: The receiving prompt (W2-READ-EXPLORATIONS).** "What would happen if I tried THIS approach with MY content?" This reframes the exploration as a thought experiment rather than a parts catalog.

**Layer 3: The reading order.** Explorations are read THIRD, after the conviction brief and the content. By this point, the builder already has creative direction (from the brief) and content experience (from their own reading). The explorations enter a context that already has creative momentum. They are processed as CHALLENGES TO existing creative direction, not as sources of direction.

What this cannot prevent: a builder who sees a beautiful CSS pattern in an exploration and uses it directly. But the three layers make this less likely by establishing the builder's own creative trajectory before the exploration's CSS is encountered.

---

## Window 3: PA Auditors Receiving Artifact + Screenshots

### The Problem Specific to This Window

Auditors receive screenshots and experiential questions. The questions are carefully designed to elicit perception, not measurement. But an LLM reading "Does your interest stay level, peak and valley, or fade?" can still process this as "scan the page for interest peaks and valleys and report findings." The experiential framing asks for experience; the LLM may produce analysis wearing experiential clothing.

The harder problem: auditors also receive the conviction brief's world-description and compositional arc (Sections 1 + 4). This context TELLS them what the page is trying to be. An auditor who knows the page intends to "descend through geological strata" will LOOK FOR descent and FIND IT -- or look for descent and report its absence. Either way, the context has converted experiential engagement into verification.

### Receiving Prompt Sequence for Window 3b Auditors

---

**PA-ENTER: The First Look**

> "You are about to look at a page. You will see it as screenshots -- the same way a reader would encounter it for the first time. Your job is to EXPERIENCE the page and describe what you experience. Not evaluate it. Not grade it. Not measure it. Look at it, scroll through it, and tell us what it is like to be there."

*Why "be there":* Spatial/experiential language ("be there") activates different processing than evaluative language ("assess this"). The auditor's first relationship to the page is presence, not judgment.

---

**PA-SCREENSHOTS: The Cold Look**

> "Look at the first screenshot (top of the page, cold -- as if you just arrived). Before you move to the next screenshot, write one sentence about what you feel. Not what you see. What you FEEL."

*Why one sentence, why BEFORE moving on:* The cold look is irreproducible. Once the auditor scrolls, the first impression is gone. Forcing a one-sentence response captures the gestalt before analysis can displace it. "What you feel" separates emotional response from visual description.

---

**PA-SCROLL: The Reading Experience**

> "Now look through all the screenshots in order, at reading speed. Do not pause to analyze. Just read. When you reach the bottom, describe the journey. Where did you speed up? Where did you slow down? Where did something catch you?"

*Why "journey" and why NO pausing:* The instruction to not pause prevents the auditor from switching to analytical mode mid-scroll. The scroll-through produces a continuous experiential record. "Where did you speed up" catches disengagement without asking "where is there dead space." "Where did something catch you" catches engagement without asking "what is the strongest design element."

---

**PA-CONTEXT: The Brief's Role**

> "You are about to read two sections of the creative brief that guided this page's construction. The world-description tells you what world the page lives in. The compositional arc tells you what journey the page was trying to create. Read them. Then ask yourself: did the page deliver on its own terms? Not 'did it follow the brief' -- did the experience you just had match the journey the brief describes? Where did it exceed? Where did it fall short? Where did it do something the brief never mentioned?"

*Why this comes AFTER the scroll-through:* The auditor has already had their own experience. The brief cannot overwrite it. The prompt explicitly separates "deliver on its own terms" from "follow the brief." And the third question -- "where did it do something the brief never mentioned" -- rewards the auditor for finding SURPLUS, not just compliance or failure. This is the question that catches emergent creative qualities no checklist would surface.

### How Fresh-Eyes Actually Works

Fresh-eyes perception is NOT the absence of knowledge. It is the presence of UNCOMMITTED attention. An auditor with no context about the page's intent will notice whatever their attention naturally lands on. An auditor who has been told the page is "geological descent" will direct their attention toward descent-related features.

The receiving protocol produces fresh-eyes through SEQUENCING:

1. **Experience first, context second.** The auditor's own experience (PA-SCREENSHOTS, PA-SCROLL) is captured BEFORE the brief's context enters. This experience is "YOURS -- it cannot be overridden by anything you read next" (from R-01 in the existing PA design spec). The protocol makes this temporally enforced, not just stated.

2. **One-sentence capture points.** At each screenshot, the auditor writes one sentence. These sentences accumulate into a perceptual record that exists independently of any framework. By the time the brief arrives, there are 6-10 sentences of genuine first-impression data that anchor the auditor's subsequent analysis.

3. **The surplus question.** "Where did it do something the brief never mentioned?" This question makes the auditor LOOK FOR what the framework cannot see. It rewards peripheral perception -- the things that are visible only to uncommitted attention.

### What Prevents Auditors from Reducing Experiential Questions to Implicit Checklists

The questions themselves are designed to resist checklist reduction (the PA design spec's three tests: requires looking, asks what they feel, non-designer could answer). But the receiving protocol adds three mechanisms:

**Mechanism 1: The experience-before-questions sequence.**

The auditor has already described their experience (PA-SCROLL output) before they see any questions. The questions then function as DEEPENING prompts for an experience that already exists, not as measurement instruments pointed at an unknown surface. The auditor is elaborating on what they already felt, not scanning for what the question asks about.

**Mechanism 2: No "what this catches" labels.**

The PA design spec includes "What this surfaces" annotations for each question (e.g., "What this surfaces: Header-to-content proportion, emotional alignment, focal point hierarchy, margin psychology"). These annotations are for the SKILL DESIGNER, not the auditor. The auditor's prompt contains ONLY the question text. No framing about what the question is supposed to catch. If the auditor knows "E-07 catches negative space variety," they will scan for negative space variety and report. If they only know "Look at the gaps between sections -- are they all the same flavor of emptiness?" they will look at gaps and describe what they see.

**Mechanism 3: The response format is prose, not structured.**

The auditor writes free prose. No severity fields. No score fields. No pass/fail. No "dimension: X, finding: Y, confidence: Z." Structured formats activate compliance processing ("fill in the fields"). Prose activates narrative processing ("describe what you experienced"). The Weaver extracts structure from prose; the auditor produces prose from experience.

---

## Window 4: MECHANICAL FIX Builder Receiving Gate Failures

### The Problem Specific to This Window

Window 4 is the one window where compliance IS the correct mode. Gate failures are binary: the background delta is 11 RGB (needs >= 15), the stacked gap is 132px (needs < 120). The fix builder should comply.

The risk is not compliance collapse here -- it is CREATIVE CONTAMINATION. If the fix builder reads the conviction brief or the Weaver's creative direction, they may start making creative decisions while patching CSS values. A "quick hex fix" becomes a "let me also adjust the typography in this zone since I'm here." Creative drift in a mechanical fix window breaks the clean separation between programmatic compliance and creative composition.

### Receiving Prompt for Window 4

---

**W4-ENTER: Mechanical Scope**

> "You are patching specific CSS values that failed programmatic verification. Each failure is listed with the current value and what it needs to become. Make the minimum change to each value. Do not adjust anything else. Do not read the conviction brief. Do not consider the 'feel' of the page. These are mechanical corrections -- like tightening a bolt that is 2mm loose. Tighten it. Move on."

*Why mechanical language:* This is the one window where compliance language is correct. The metaphor (tightening a bolt) frames the task as precise adjustment, not creative work. "Do not read the conviction brief" is an explicit prohibition because the conviction brief will be in the output directory and a curious agent might read it.

This window needs NO anti-compliance receiving protocol. It IS compliance. The protocol's job here is to prevent the opposite failure: creative drift contaminating mechanical fixes.

---

## Window 5: REFINE Builder Receiving Artifact + Weaver Direction + Conviction Brief + Reflection

### The Problem Specific to This Window

The REFINE builder is the most complex receiving case. They receive FOUR creative documents (conviction brief, reflection, Weaver direction, artifact) from three different sources (TC agent, original builder, Weaver). Each document carries a different perspective on the same page. The REFINE builder must engage with all four without:

1. Treating the conviction brief as spec ("build what this says")
2. Treating the reflection as constraints ("preserve what they decided")
3. Treating the Weaver's AMPLIFY/RELEASE/DEEPEN as a fix list ("do these three things")
4. Treating the artifact as finished work that needs only patches ("fix what's broken")

The existing R-01 through R-07 prompts (from 10-holistic-process.md) provide a good skeleton. This section makes them more granular and addresses the specific compliance traps at each step.

### Receiving Prompt Sequence for Window 5

---

**R-01: Your Own Eyes First (UNCHANGED but ENFORCED)**

> "Scroll through the artifact at reading speed. Before reading ANYTHING else -- not the conviction brief, not the reflection, not the Weaver's notes. Just look. Write 3-4 sentences about what you experience. This impression is YOURS. It is data that no other document can provide. Capture it before anything else enters your context."

*Enforcement mechanism:* The REFINE builder's prompt should physically present the artifact FIRST, followed by a response checkpoint that requires the builder to produce its 3-4 sentence impression before any other file is loaded. The orchestrator structures the context window so the artifact is at the top and the other documents follow a divider that says "STOP: Write your first impression before reading below."

---

**R-02: Meeting the Previous Builder's Vision (REFRAMED)**

> "Now read the previous builder's reflection -- all six dimensions. You are meeting the person who made this page. They are telling you what they were reaching for, what they rejected, what surprised them, what they wanted but couldn't achieve, what the page feels like to them, and what tensions they couldn't resolve.
>
> Notice where their experience AGREES with yours. These are the page's confirmed qualities -- they work for both the creator and a fresh viewer.
>
> Notice where their experience DIVERGES from yours. This is the most interesting data. They may have intended something you didn't feel -- an execution gap. Or you may have felt something they didn't realize they expressed -- an emergent quality. Both are creative opportunities."

*Why "meeting the person" instead of "reading the reflection":* This reframes the reflection as TESTIMONY from another creative agent, not as a specification from an authority. The builder is meeting a peer, not receiving instructions. The peer has useful things to say about their experience. The builder listens with curiosity, not with compliance.

*Why divergence is "interesting" not "problematic":* The word "interesting" activates curiosity. "Problematic" activates diagnostic mode. The builder who finds divergence "interesting" explores it. The builder who finds divergence "problematic" fixes it.

---

**R-03: The Creative Inheritance (REFRAMED AND EXPANDED)**

> "The previous builder left you three gifts in their reflection:
>
> 1. ALTERNATIVES -- roads they didn't take. These are live creative options. The previous builder's reasons for rejection may not apply to YOU. Read each alternative and ask: 'does this excite me? Would the page be more interesting if I tried this?'
>
> 2. IMPULSES -- creative energy they couldn't express. These are seeds. Not assignments. Not even suggestions. Seeds that may grow in YOUR hands in ways the previous builder couldn't predict.
>
> 3. UNRESOLVED -- tensions they couldn't resolve. These are NOT problems to fix. They are creative territories where two good ideas compete. The previous builder picked one. You get to reconsider. You might pick the same one, the other one, or find a third option they didn't see.
>
> You are not obligated to pursue any of these. They are offerings. Which one, if any, excites you?"

*Why "gifts" and "offerings":* This language positions the reflection as GENEROSITY, not authority. The previous builder gave you something. You can use it or not. This is the opposite of "the previous builder specified X, maintain X." The question "which one excites you?" activates evaluative engagement (which is generative) rather than compliance engagement (do all of them).

*The critical move:* "The previous builder's reasons for rejection may not apply to YOU." This explicitly breaks the authority chain. The previous builder rejected a warm eruption because it felt decorative at their scale. The REFINE builder may have a different sense of scale. The rejection was contextual, not absolute.

---

**R-04: The Weaver's Creative Direction (THE HARDEST RECEIVING MOMENT)**

> "Now read the Weaver's creative direction. The Weaver listened to five people experience your page and wrote about what they collectively felt. The Weaver's direction has three parts:
>
> **AMPLIFY** -- the page's strongest moment, and how it might grow.
> **RELEASE** -- where the page holds too tight, and what could open.
> **DEEPEN** -- where the composition has room it hasn't used yet.
>
> Here is the critical thing: AMPLIFY does not mean 'make this louder.' RELEASE does not mean 'fix this problem.' DEEPEN does not mean 'add more here.' These are INVITATIONS to engage with specific territories on the page. Your engagement may look nothing like what the Weaver imagined.
>
> The Weaver says 'AMPLIFY the dark inversion.' You might amplify it by making it darker. Or by extending its spatial reach. Or by adding a typographic break. Or by doing something to the sections BEFORE it that makes its arrival more dramatic. The territory is 'the dark inversion.' What you do in that territory is yours."

*Why this is the hardest moment:* The Weaver's direction is the closest thing to a fix list in the entire pipeline. AMPLIFY/RELEASE/DEEPEN maps dangerously well to "more of this / fix this / add to this." The receiving prompt must EXPLICITLY break this mapping.

The mechanism: redefine the Weaver's words as TERRITORIES, not ACTIONS. "AMPLIFY the dark inversion" names a territory (the dark inversion) and a direction of energy (expansion/intensification). It does NOT specify an action. The builder enters the territory and finds their own action.

This is the difference between:
- **Compliance:** "The Weaver said AMPLIFY the dark inversion, so I made it darker." (Action = Weaver's implied instruction.)
- **Inhabitation:** "The Weaver pointed me to the dark inversion. I spent time there and realized it wants a spatial APPROACH -- the sections before it need to compress so the inversion feels like release, not interruption." (Action = builder's own creative response to the territory.)

---

**R-05: Triangulating Three Perspectives (NEW)**

> "You now have three perspectives on this page:
>
> 1. YOUR OWN first impression (from R-01) -- what the page felt like to fresh eyes.
> 2. THE PREVIOUS BUILDER's reflection -- what the creator intended and experienced.
> 3. THE WEAVER's direction -- what five auditors collectively experienced, synthesized.
>
> Where do all three CONVERGE? That is the page's truth -- the thing it IS, regardless of perspective.
>
> Where do two converge and one diverges? That is a question worth investigating -- whose perspective is seeing something the others missed?
>
> Where do all three DISAGREE? That is the page's most volatile creative territory -- the place where the composition is not yet settled and your contribution will matter most.
>
> If you must choose between perspectives, your own first impression is the tiebreaker. You are the one building. Your perception is the one that produces CSS."

*Why the tiebreaker matters:* Without an explicit tiebreaker, the REFINE builder defaults to the source with the most AUTHORITY -- usually the Weaver (because it synthesized multiple auditors) or the conviction brief (because it comes from the TC pipeline). Both of these are INCOMING authority. The tiebreaker gives authority to the builder's OWN perception, which is the only perception that will produce CSS. The builder who trusts their own eyes builds from conviction. The builder who defers to the Weaver builds from compliance with the Weaver's direction.

---

**R-06: Reading the Conviction Brief (DIFFERENT FROM WINDOW 2)**

> "Finally, re-read the conviction brief. You read it differently now than the original builder did. They read it as creative direction for a blank page. You read it as the ASPIRATIONAL INTENT behind an existing page. The conviction brief's compositional arc describes what the TC agent HOPED the page would become. The page you just scrolled through is what it ACTUALLY became. The gap between aspiration and reality is not failure -- it is the creative territory the original builder couldn't reach in one pass.
>
> Your job is not to make the page match the brief. Your job is to make the page become MORE of what it already is. The brief tells you what 'more' might look like. But the page itself -- its actual qualities, its emergent successes, its near-misses -- is your primary material."

*Why the brief arrives LAST for the REFINE builder:* In Window 2, the brief arrives FIRST because the builder has no artifact to work with. In Window 5, the artifact exists. If the brief arrives first, the REFINE builder reads the brief and then evaluates the artifact against it -- compliance mode. If the brief arrives AFTER the builder has already formed their own impression (R-01), met the previous builder (R-02/R-03), and read the Weaver's direction (R-04), the brief enters a context already rich with creative engagement. It becomes one more perspective, not the primary authority.

---

**R-07: The Creative Commitment (PARALLEL TO W2-PRE-BUILD)**

> "Before you touch any CSS: what is the ONE THING you want to do with this page? Not three things. Not 'address the Weaver's notes.' One thing. The thing that, if you achieved it, would make you proud of your contribution. State it in 1-2 sentences. This is your conviction for this refinement pass."

*Why one thing:* A builder given three directions (AMPLIFY + RELEASE + DEEPEN) tries to do all three and does each shallowly. A builder given permission to do ONE THING does it deeply. The single-focus commitment concentrates creative energy. If the builder's one thing naturally addresses two of the Weaver's three territories, that's convergence. If it only addresses one, that's fine -- depth on one territory produces more compositional value than surface engagement with three.

### How AMPLIFY/RELEASE/DEEPEN Avoids Becoming a Fix List

The Weaver's three-part direction has a structural resemblance to a fix list with three items. The receiving protocol breaks this resemblance at five points:

1. **R-04 redefines the terms as territories, not actions.** The builder enters the territory and finds their own action.

2. **R-05 establishes the builder's own perspective as the tiebreaker.** If the builder's impression disagrees with the Weaver's direction, the builder's impression wins.

3. **R-06 positions the conviction brief as aspirational context, not specification.** The brief is what the page HOPED to be, not what it MUST become.

4. **R-07 allows the builder to select ONE thing.** The builder is not obligated to address all three Weaver territories. They choose the one that excites them.

5. **The REFINE builder may NOT receive individual auditor reports.** They receive only the Weaver's synthesis. This prevents the builder from reading 5 auditors all saying "the mid-sections are flat" and treating that as 5-vote evidence for "fix the mid-sections." The Weaver's synthesis describes what the mid-sections COULD BECOME, not what they currently fail at.

### How the Builder Reads the 6-Dimension Reflection: Creative Continuity, Not Constraints

The receiving protocol frames each reflection dimension with specific language that prevents constraint extraction:

| Dimension | Compliance Reading (PREVENT) | Generative Reading (ENABLE) |
|-----------|-------|---------|
| CONVICTION | "The previous builder wanted X. Maintain X." | "The previous builder reached for X. Do you see X in the page? Do you want more of it, or something different?" |
| ALTERNATIVES | "These were rejected. The reasons still apply." | "These were deferred. The previous builder's reasons were theirs. What are yours?" |
| SURPRISES | "This emerged and should be preserved." | "This emerged. Is it still alive in the page? Does it suggest something further?" |
| IMPULSES | "The previous builder wanted this. Try to deliver it." | "Creative energy that couldn't find expression. Does it excite YOU?" |
| EXPERIENCE | "The page should feel like this." | "The creator's experience. Does YOUR experience match? Where does it diverge?" |
| UNRESOLVED | "This tension needs resolution." | "Two good ideas are still competing. You get to choose -- or find a third." |

The pattern: every compliance reading treats the reflection as AUTHORITY ("maintain," "should," "needs"). Every generative reading treats the reflection as TESTIMONY ("do you see," "does it excite," "does your experience match"). Testimony is something you engage with. Authority is something you obey.

---

## Section 4: Anti-Collapse Mechanisms

### Mechanism 1: Sequencing as Structural Prevention

The most powerful anti-collapse mechanism is not in the words of any prompt but in the ORDER materials arrive:

**Window 2 (BUILD):**
1. Creative identity activation (W2-ENTER)
2. Conviction brief (creative direction)
3. Content (raw material)
4. Explorations (creative challenge)
5. Conventions brief (mechanical constraints -- LAST)
6. Creative commitment statement (builder's own conviction)

**Window 3b (PA AUDITORS):**
1. Experiential identity activation (PA-ENTER)
2. Screenshots (raw visual experience)
3. First-impression capture (locked before context arrives)
4. Conviction brief context (aspiration, not spec)
5. Questions (deepening prompts, not measurement instruments)

**Window 5 (REFINE):**
1. Artifact (raw experience of the existing page)
2. First-impression capture (R-01, locked)
3. Reflection (creator's testimony)
4. Weaver direction (synthesized experience)
5. Triangulation (R-05, builder's own perspective as tiebreaker)
6. Conviction brief (aspirational context, LAST)
7. Creative commitment statement (R-07, builder's one thing)

In every window, COMPLIANCE-ADJACENT material arrives AFTER creative engagement is already established. This is temporal inoculation: the builder has already formed creative intent by the time specifications appear. Specifications enter an existing creative context rather than creating the initial context.

### Mechanism 2: Response Checkpoints That Require Creative Output

At specific points in the receiving sequence, the builder is required to PRODUCE creative output before continuing. These checkpoints prevent passive ingestion:

| Window | Checkpoint | What It Produces | Why It Prevents Collapse |
|--------|-----------|-----------------|-------------------------|
| W2 | W2-READ-BRIEF | "Most interesting challenge" (1-2 sentences) | Forces creative evaluation of the brief |
| W2 | W2-PRE-BUILD | "What I want it to feel like" (2-3 sentences) | Forces creative commitment before building |
| W3b | PA-SCREENSHOTS | One-sentence feeling per screenshot | Locks experiential data before analysis |
| W5 | R-01 | 3-4 sentence first impression | Locks fresh perception before context |
| W5 | R-05 | Convergence/divergence map | Forces active comparison, not passive reception |
| W5 | R-07 | "My ONE thing" (1-2 sentences) | Forces creative focus before building |

Each checkpoint converts the builder from READER to WRITER. A reader can passively absorb (and compliance-process) indefinitely. A writer must synthesize, evaluate, and commit. The checkpoints punctuate the receiving sequence with moments of creative production that prevent compliance from accumulating.

### Mechanism 3: Language Patterns That Activate Generation

Specific word choices in the receiving prompts systematically activate generative processing:

**GENERATIVE activators (USE):**
- "What excites you?" (evaluative, personal)
- "What do you want to make?" (creative, forward-looking)
- "What do you see?" (perceptual, present-tense)
- "Where does this surprise you?" (experiential, discovery)
- "Which one resonates with you?" (personal, selective)
- "What would happen if...?" (hypothetical, experimental)
- "The territory is X. What you do there is yours." (named space + creative authority)
- "This is yours." (ownership)

**COMPLIANCE activators (AVOID):**
- "Ensure that..." (verification)
- "Maintain the..." (preservation)
- "According to the brief..." (authority citation)
- "The previous builder decided..." (inherited constraint)
- "Fix the..." / "Address the..." / "Correct the..." (deficit framing)
- "Comply with..." / "Satisfy..." / "Meet the requirement..." (explicit compliance)
- "Check that..." / "Verify that..." (binary evaluation)

**ANALYTICAL activators (USE SPARINGLY):**
- "Compare..." / "Notice where..." (directed observation)
- "Where does it diverge?" (analytical but in service of creative discovery)
- These are acceptable when used to DEEPEN creative engagement (R-02, R-05) but not as the primary mode

### Mechanism 4: The "Seeds Not Assignments" Principle

Every deliverable that travels between windows carries creative POTENTIAL. The receiving protocol must frame this potential as seeds that may or may not germinate, not as assignments to complete:

| Deliverable | Assignment Framing (PREVENT) | Seed Framing (ENABLE) |
|------------|------|--------|
| Conviction brief's opposition map | "Resolve these tensions" | "These are where the creative energy concentrates" |
| Reflection's alternatives | "Consider implementing these" | "Roads not taken. They might excite you." |
| Reflection's impulses | "The previous builder wanted these" | "Creative energy that couldn't find expression. Yours if you want it." |
| Weaver's AMPLIFY | "Intensify this element" | "A territory where the page has momentum. Enter it and see what you find." |
| Weaver's RELEASE | "Fix this tight spot" | "A territory where the page holds more than it needs to. What happens if you let go?" |
| Weaver's DEEPEN | "Add complexity here" | "A territory the page hasn't fully explored. What's in there?" |
| Exploration CSS patterns | "Adapt this technique" | "A different solution to a similar problem. What would happen with yours?" |

The pattern: Assignment framing tells the builder WHAT TO DO. Seed framing tells the builder WHERE TO LOOK. The builder who knows where to look makes their own decisions about what to do there. The builder who knows what to do executes someone else's decisions.

### Mechanism 5: "Understand What They Intended" vs. "Maintain What They Decided"

This is the critical philosophical distinction at the heart of the receiving protocol. Both phrases seem respectful of the previous builder. Both seem like good instructions for a REFINE builder. But they activate completely different processing:

**"Understand what the previous builder intended"** = GENERATIVE
- The REFINE builder reconstructs the previous builder's creative vision
- Understanding enables the REFINE builder to EXTEND that vision in ways the previous builder couldn't
- The vision becomes shared creative territory that two builders inhabit
- The REFINE builder's contribution is ADDITIVE -- they contribute their own creative energy to the shared vision

**"Maintain what the previous builder decided"** = COMPLIANCE
- The REFINE builder catalogs the previous builder's CSS decisions
- Maintenance constrains the REFINE builder to preserve those decisions
- The decisions become fixed points that limit creative movement
- The REFINE builder's contribution is CORRECTIVE -- they fix what's wrong without changing what's right

The receiving protocol uses "understand" language consistently:
- R-02: "Notice where their experience AGREES/DIVERGES with yours" (understanding, not maintaining)
- R-03: "Which one, if any, excites you?" (selective engagement, not comprehensive maintenance)
- R-06: "The brief tells you what 'more' might look like" (aspiration, not specification)

### Mechanism 6: Addressing Attack 9 Head-On -- Is "Comply With Conviction" Still Compliance?

The adversarial review's Attack 9 argues that replacing "comply with rules" with "inhabit this conviction" is just renaming compliance. This is the deepest challenge and deserves a direct response.

**The attack is partially right.** At the structural level, the builder reads a document and produces output that aligns with it. Whether the document says "border-radius: 0" or "every surface is sharp and flat," the builder is following instructions. The FUNCTION is the same.

**Where the attack is wrong:** It assumes the only output of a document is behavioral compliance. But documents also produce PROCESSING STATES. A builder who reads "border-radius: 0" processes that as a constraint (something to remember and not violate). A builder who reads "every surface is sharp and flat -- light falls directly, nothing floats" processes that as a WORLD (something to inhabit and create within). The compliance output may be identical (both produce border-radius: 0), but the creative outputs DIFFER:

- The constraint-state builder writes `border-radius: 0` on every element and moves on.
- The world-state builder writes `border-radius: 0` AND considers what "sharp and flat" means for spacing, for typography, for transitions, for the overall feeling of the page. The world-description activates a broader creative context than the constraint.

**The evidence this distinction is real (from this project's own history):**

The Middle-Tier experiment builder received a recipe (world + creative direction) and produced PA-05 DESIGNED with 12 mechanisms and novel compositional choices the recipe didn't specify. The Flagship experiment builder received a checklist (constraints + verification) and produced PA-05 1.5/4 with technically-compliant but perceptually flat output. Same design system, similar content complexity, different input framing, radically different output quality.

**What the receiving protocol CANNOT do:** guarantee that every builder enters a genuine creative state. An LLM may read "every surface is sharp" and produce the same CSS it would have produced from "border-radius: 0." The receiving protocol maximizes the PROBABILITY of creative engagement through sequencing, checkpoints, language patterns, and seed framing. It cannot force creative engagement any more than a creative brief can force a human designer to be inspired.

**What the receiving protocol CAN do:** make compliance the HARDER path. In the old system, compliance was the path of least resistance -- read the checklist, satisfy each item, done. In the receiving protocol, the builder must:
1. Form their own impression BEFORE reading the brief
2. Respond to the brief with what EXCITES them (not what they need to remember)
3. Read the content AS A READER before reading it as a builder
4. Challenge their instincts against opposing explorations
5. Commit to their OWN conviction before building

Compliance is still possible at every step. But the default path is engagement. The builder who wants to just "do what the brief says" must actively resist the receiving prompts' invitation to engage creatively. The path of least resistance is now creative engagement, not compliance.

---

## Summary: The Receiving Protocol as a System

The receiving protocol is not a set of nice-sounding prompts. It is an ARCHITECTURE for how creative deliverables cross context window boundaries without collapsing into rules. The architecture has five structural elements:

1. **Sequencing:** Materials arrive in an order that establishes creative engagement before compliance-adjacent content enters. Fresh perception first, context second, constraints last.

2. **Checkpoints:** At key moments, the receiver PRODUCES creative output before continuing. These moments convert passive reception into active engagement and lock first-party data before incoming authority can overwrite it.

3. **Language patterns:** Every prompt uses generative activators (excites, want to make, see, feel, yours) and avoids compliance activators (ensure, maintain, verify, fix). The word choices shape the processing mode before the content arrives.

4. **Seed framing:** Every deliverable is presented as potential (seeds, offerings, gifts, territories) rather than authority (requirements, decisions, specifications, directions). The receiver engages selectively, not comprehensively.

5. **Authority flow:** Creative authority flows FORWARD to the current builder, not backward to previous builders or auditors. The current builder's own impression is always the tiebreaker. The receiving prompts establish the builder as the AUTHORITY in their own window, reading incoming material as creative testimony from peers, not instructions from superiors.

These five elements work together. Remove any one and the others are weakened:
- Sequencing without checkpoints allows passive ingestion in the correct order (still compliance).
- Checkpoints without seed framing produce creative output about compliance-framed inputs (creative compliance).
- Language patterns without authority flow produce nice-sounding engagement with someone else's vision (aesthetic compliance).
- Seed framing without sequencing presents seeds after specifications have already established the frame (seeds in a compliance context).

The full system, working together, makes creative engagement the path of least resistance at every window boundary.

---

**END OF RECEIVING PROTOCOL**
