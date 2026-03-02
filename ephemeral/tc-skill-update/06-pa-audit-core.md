# PA Skill Audit Through Generative Frame (Core Skill Audit)

**Date:** 2026-02-27
**Auditor:** pa-auditor (Opus)
**Source:** `~/.claude/skills/perceptual-auditing/SKILL.md` (993 lines, 69 questions)
**Frame:** Processing over extraction. Raw material over summaries. Conviction over rules at every boundary.

---

## Executive Summary

The perceptual auditing skill is a compliance-verification instrument masquerading as perceptual assessment. Despite excellent philosophical framing ("react before you check," fresh-eyes, the signing frame), the overwhelming architecture -- quantitative guardrails, binary scoring, threshold tables, severity tracks, fix classifications -- transforms every auditor into a defect-finder. The questions that ARE experiential (PA-01, PA-20, PA-33, PA-45, PA-65, PA-67) are outnumbered and drowned by compliance infrastructure.

**The fundamental problem:** The skill answers "does this page meet minimums?" when the generative frame asks "what is this page trying to become?" These are different activities requiring different instruments.

**Recommendation:** Reduce from 69 questions to 20 experiential questions across 5 tiers. Remove all quantitative guardrails from auditor-facing material (move to builder-time gate runner). Rewrite protocol to produce artistic direction, not defect lists.

---

## Part 1: Question-by-Question Classification

### THE GENERATIVE TEST

For each question I applied this filter: **Can the question be answered with a number or yes/no?** If so, it is compliance. Additionally: **Does the answer produce creative direction for the next window, or a defect ticket?** If defect ticket, it needs reframing or removal.

---

### Tier 1: The Mandatory Five (PA-01 through PA-05)

**PA-01: "What's the first thing that bothers you?"**
- Classification: **REFRAME**
- The "bothers" presupposes a defect. Forces negative-first response. An auditor looking at a good page still hunts for bother.
- Reframe: **"What is the first thing you notice? Is your attention being guided or scattered?"**
- Reasoning: Same perceptual sensitivity, but allows the answer to be positive OR negative. A page that guides attention toward its thesis is succeeding -- that finding is as valuable as spotting a misplaced focal point.

**PA-02: "Is any text uncomfortable to read? Point to the worst spot."**
- Classification: **REFRAME**
- Answerable as yes/no + coordinate. Produces a defect ticket, not creative direction.
- Reframe: **"Read any paragraph that catches your eye. Does the reading experience match the emotional register of what you're reading?"**
- Reasoning: Content-form coupling. Dense analytical text SHOULD feel dense. A lyrical passage should feel open. The old question only catches failures; the new question catches mismatches AND alignments.

**PA-03: "Does this feel like one designer made it, or three?"**
- Classification: **KEEP** (minor adjustment)
- This IS experiential. The answer requires felt sense of coherence that cannot be reduced to a metric.
- Minor adjustment: Drop "or three?" -- the number is irrelevant. Better: **"Does this feel like one mind made it?"**
- What makes it generative: The follow-up is naturally "what makes you feel that?" which produces insight about coherence mechanisms.

**PA-04: "Where does your eye go first? Is that where it SHOULD go?"**
- Classification: **REFRAME**
- The first half is experiential. The second half ("should") invokes compliance -- there is a correct answer implied.
- Reframe: **"Where does your eye go first? What do you think the page WANTS you to notice first? Are they the same?"**
- Reasoning: Shifts from "is the hierarchy correct" (compliance) to "what is the page's intention and is it communicating that intention?" (creative assessment).

**PA-05: "Would you put your name on this? What would you fix first?"**
- Classification: **REFRAME (heavily)**
- The base question is the best question in the entire skill -- it demands conviction. But the 4 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) and their binary PASS/FAIL scoring are pure compliance infrastructure.
- **PA-05c** is the worst offender: THREE sub-sub-dimensions (horizontal, vertical, breathing), each with PASS/FAIL, each with explicit thresholds (65-80%, 30% content coverage), each with "ceiling experiment failure" provenance. This transforms a conviction question into a 7-part checklist.
- Reframe: **Keep the base question. Remove sub-criteria entirely.** The answer should be a narrative: "I would put my name on this because..." or "I would not because..." The BECAUSE is the valuable output.
- What to do with sub-criteria: The 4 dimensions (designed, coherent, proportionate, polished) are valid LENSES -- they belong in auditor training, not in scoring rubrics.

**PA-05 scoring system (4/4, 3/4, 2/4):**
- Classification: **REMOVE**
- The numeric scoring forces auditors to decompose felt conviction into binary checkboxes. "2.5/4" communicates false precision while hiding qualitative insight.
- Replace with: A conviction narrative. "I would ship this because..." / "This needs another pass because [what's almost there]" / "This needs rethinking because [what's working against itself]."

---

### Tier 2: Standard Questions (PA-06 through PA-20, PA-29 through PA-45)

**PA-06: "Are any words stacking vertically, one per line, in any column?"**
- Classification: **REMOVE**
- Binary defect check. Answerable yes/no. A programmatic gate catches this more reliably than a perceptual auditor.

**PA-07: "Can you read the longest paragraph without losing your place?"**
- Classification: **REFRAME**
- Disguised CPL/leading check. Answerable yes/no.
- Absorbed into reframed PA-02 (reading experience matching content register).

**PA-08: "Is there any text you have to lean in or squint to read?"**
- Classification: **REMOVE**
- Binary defect check. Font size compliance. Gate runner material.

**PA-29: "In the header area, count how many different text styles you see. Are more than three fighting for attention?"**
- Classification: **REMOVE**
- "Count how many" = compliance extraction. "More than three" = binary threshold. The auditor becomes a counting machine.

**PA-09: "Is there dead space that serves no purpose?"**
- Classification: **REFRAME**
- Combined with a mandatory severity calibration table (1-2 viewports = LOOKS-WRONG, 3-5 = WOULD-NOT-SHIP, 6+ = CATASTROPHIC). This transforms spatial judgment into a measurement task.
- Reframe: **"Where does the page exhale? Does the breathing feel designed or abandoned?"**
- Reasoning: "Dead space" presupposes the answer. "Breathing" allows the auditor to distinguish purposeful emptiness from accidental void.

**PA-10: "If you squint until you can't read text, does the layout look balanced?"**
- Classification: **KEEP**
- This IS experiential. The squint test produces genuine perceptual data. Answerable only through felt sense.

**PA-11: "Are the margins generous (confident) or anxious (clutching)?"**
- Classification: **KEEP**
- Excellent experiential framing. "Confident vs anxious" produces creative direction. A builder who hears "the margins feel anxious" knows what to do.

**PA-30: "At this viewport width, does the layout feel DESIGNED for this width, or like a narrower design centered in extra space?"**
- Classification: **REFRAME**
- Reframe: **"Does the page feel like it owns this screen, or like it's borrowing space?"**
- "Owns" vs "borrowing" is more evocative and produces richer creative direction.

**PA-31: "If you covered the content and only looked at the surrounding space, would that space feel designed or leftover?"**
- Classification: **KEEP**
- Genuinely experiential. The "cover the content" instruction produces a specific perceptual exercise.

**PA-32: "Squint at the full page. Is the visual weight distributed purposefully across the scroll, or concentrated in one zone?"**
- Classification: **REFRAME (merge with PA-10)**
- Both are squint tests about visual weight distribution.
- Combined: **"Squint at the full page. What is the shape of its visual weight? Where is it heavy, where is it light, and does that distribution feel like a decision?"**

**PA-33: "Pick the largest area of empty space. Does it feel like silence in music or a dropped signal?"**
- Classification: **KEEP**
- The "silence vs dropped signal" metaphor is the best formulation in the entire skill. Cannot be answered with a number.

**PA-12: "Do your eyes flow smoothly from section to section?"**
- Classification: **REFRAME**
- Answerable yes/no. Binary.
- Reframe: **"Scroll through the page at reading speed. Where does your attention snag? Where does it accelerate? What creates those shifts?"**
- The original asks about flow failure. The reframe asks about the flow experience -- including where flow WORKS.

**PA-13: "Is there a clear visual ending, or does the page just stop?"**
- Classification: **KEEP**
- Experiential. "Just stops" is exactly the right perceptual language.

**PA-34: "Pick the transition between any two major sections. Is it a DESIGNED moment or just empty space?"**
- Classification: **REFRAME (merge)**
- Merge with reframed PA-12. The transition question is a specific case of the flow question.

**PA-35: "Scroll through the entire page at reading speed. Does your interest stay level, peak and valley, or fade? Where do you start skimming?"**
- Classification: **KEEP (excellent)**
- The single best question in the skill. Subjective temporal experience. "Where do you start skimming?" is genuinely diagnostic and experiential.

**PA-36: "Is there a dramatic visual moment?"**
- Classification: **REFRAME**
- Asks whether a dramatic moment EXISTS (binary).
- Reframe: **"Where is the page's climax? If it doesn't have one, what would create one?"**
- The reframe demands creative direction. Even if no climax exists, the auditor must imagine one.

**PA-14: "Does every column have enough room for its content to breathe?"**
- Classification: **REMOVE**
- Binary check across all grid cells. Compliance.

**PA-15: "Trace the left edge of every content block. How many starting positions?"**
- Classification: **REMOVE**
- "How many" = counting = compliance extraction.

**PA-37: "Is there any container where you can count five or more distinct pieces competing for attention?"**
- Classification: **REMOVE**
- "Count five or more" = numeric threshold. Binary.

**PA-38: "Pick any card, callout, or info-box. Within it, is there a clear reading order?"**
- Classification: **REFRAME**
- Binary (yes/no clear reading order).
- Absorbed into reframed PA-04 (intention-communication alignment), applied at component scale.

**PA-39: "In the first screenful, how much is header/metadata versus actual content?"**
- Classification: **REMOVE**
- "How much" = ratio = compliance extraction. The "doorway vs lobby" metaphor is interesting but the quantitative framing dominates.

**PA-16: "Pick two elements that should look identical. Do they?"**
- Classification: **REMOVE**
- Binary consistency check. "Should look identical" = compliance against a standard.

**PA-17: "Is there a visual rhythm (like a beat in music), or random?"**
- Classification: **REFRAME**
- Currently marked TIER 1 EQUIVALENT with binary enforcement. This compliance wrapping destroys the experiential potential.
- Reframe: **"What is the rhythm of this page? If it were music, what would the time signature be? Does it change?"**
- The original is binary (rhythm or random). The reframe asks the auditor to CHARACTERIZE the rhythm.

**PA-40: "Does the spacing between sections feel consistent, or is there a sudden jump?"**
- Classification: **REMOVE**
- Binary consistency check with compliance justification clause.

**PA-41: "Are any visual patterns repeated more than four times in a row without variation?"**
- Classification: **REMOVE**
- "More than four times" = numeric threshold. Tier 1 equivalent enforcement compounds the compliance problem. The monotony concern is valid but absorbed into reframed PA-17 (rhythm characterization).

**PA-18: "Do all the grays/neutrals feel like the same family?"**
- Classification: **REMOVE**
- Binary consistency check for color temperature. Programmatic validation territory.

**PA-19: "Is there any element that feels like it's from a different website?"**
- Classification: **KEEP**
- Experiential and powerful. "From a different website" requires holistic felt sense.

**PA-20: "Describe this page's personality in three words. Does it match intent?"**
- Classification: **KEEP**
- One of the most generative questions. Three-word personality forces the auditor to synthesize their entire experience. Drop "does it match intent" -- auditor under fresh-eyes does not know intent. Just: **"Describe this page's personality in three words."**

### Metaphor Questions (PA-42 through PA-45)

**PA-42: "Section where you understand WHY it looks this way but it still looks WRONG?"**
- Classification: **KEEP**
- Genuinely captures concept-comfort tension. Produces nuanced creative direction.

**PA-43: "Could the same metaphor idea be communicated with less visual cost?"**
- Classification: **REFRAME**
- Frames metaphor as having "cost" (deficit language).
- Reframe: **"Is the metaphor working hard enough? Could it be expressed more intensely, or is it already at its natural limit?"**
- Asks about metaphor POTENTIAL in both directions.

**PA-44: "If you removed all labels, could you still sense the metaphor from visual structure alone?"**
- Classification: **KEEP**
- The "remove all labels" test is a precise experiential exercise. Answerable only through imagination/felt sense.

**PA-45: "A single moment you would show someone as an example of good design?"**
- Classification: **KEEP** (reframe slightly)
- Reframe: **"What is the best thing on this page? What makes it work?"**
- Demands creative articulation of WHY something works -- raw material for understanding what to protect and amplify.

---

### Tier 3: Deep Dive (PA-21 through PA-28, PA-46 through PA-48)

**PA-21:** REMOVE -- Redundant with reframed PA-30.
**PA-22: "User with ONLY this screen size feel served or punished?"** -- **KEEP** -- "Served or punished" is excellent perceptual language.
**PA-23: "What breaks if you resize 200px narrower?"** -- **REMOVE** -- Fragile breakpoint test. Programmatic territory.
**PA-46: "Elements reorganize -- make SENSE for this content?"** -- **REFRAME** -- Merge with PA-22 into: **"At this viewport, does the page feel designed for someone who ONLY has this screen? What would you change?"**
**PA-47: "At what scroll position do you feel like you've 'seen this before'?"** -- **KEEP** -- Experiential temporal question. Localizes novelty decay.
**PA-24: "Page feel like it belongs with its siblings?"** -- **REMOVE** -- Cross-page consistency needs context the fresh-eyes auditor does not have.
**PA-25: "Covered the header, could you identify the design system?"** -- **REMOVE** -- Design system identification is compliance.
**PA-26: "Any convention CAUSING a visual problem?"** -- **REFRAME** -- Absorbed into PA-42 (concept vs comfort tension). Auditor feeling tension IS identifying convention-caused problems without needing to know conventions.
**PA-27: "Designing from scratch, would you design it this way?"** -- **KEEP** -- Conviction question. Reveals whether composition feels inevitable or arbitrary.
**PA-28: "How could someone make this look terrible while passing every rule?"** -- **REMOVE** -- Meta-activity, not perceptual assessment.
**PA-48: "One of five options for same content, first choice, last, or middle?"** -- **KEEP** (reframe): **"If you were designing this page, what would you keep and what would you replace?"**

---

### Pipeline Integration (PA-55, PA-56, PA-69, PA-70)

**PA-55: "3 adjacent sections -- describe how they DIFFER without code?"** -- **KEEP** (reframe slightly): **"Look at 3 adjacent sections. How are they different? How are they the same? Does the difference feel purposeful?"**
**PA-56: "Can you FEEL the tracking difference?"** -- **REMOVE** -- "Tracking" is CSS vocabulary (letter-spacing). Violates the skill's own language constraint.
**PA-69: "Two section transitions -- count how many visual properties change."** -- **REMOVE** -- "Count how many" = compliance extraction. Redundant with reframed PA-62.
**PA-70: "Densest vs lightest section -- visual treatment RESPOND?"** -- **KEEP** -- Content-form coupling detection. Genuinely experiential.

---

### Tier 4: Void Prevention (PA-50 through PA-53)

**PA-50: "Count full viewport-height scroll positions where less than 30% contains content."** -- **REMOVE** -- "Count" + "30%" = pure compliance measurement. Gate runner material.
**PA-51: "What percentage of total scroll height contains meaningful content?"** -- **REMOVE** -- Percentage = compliance.
**PA-52: "Divide into thirds, each third has at least one designed moment?"** -- **REFRAME** -- Absorbed into combined squint/weight question (reframed PA-10+PA-32): "What is the shape of visual weight across the full scroll?"
**PA-53: "Content container use 65-80% of available horizontal space?"** -- **REMOVE** -- "65-80%" = numeric compliance range.

**S-09 Stacking Check and Void Guardrail Specifications:** -- **REMOVE from auditor-facing material** -- Builder-time verification tools. The stacking check requires CSS inspection, directly violating fresh-eyes.

---

### Tier 5: Compositional Depth (PA-60 through PA-68)

**PA-60: "At least 3 distinct 'design moments'?"** -- **REFRAME** -- "At least 3" = numeric threshold. Reframe: **"Where does the design do something you haven't seen elsewhere on the page? How many such moments can you find?"** Removes threshold; the auditor's natural count IS the data.

**PA-61: "Different visual properties have own independent rhythms, or everything shifts together?"** -- **KEEP** -- Genuinely experiential. Describes compositional structure.

**PA-62: "Section transition -- count how many visual properties change simultaneously."** -- **REFRAME** -- "Count how many" = compliance. Reframe: **"Pick the most dramatic section transition and the quietest one. What makes one dramatic and the other quiet? Are both kinds present?"**

**PA-63: "Component's internal design echo page's overall language at smaller scale?"** -- **KEEP (excellent)** -- Zoom exercise is experiential. "Echo" requires felt sense of fractal coherence.

**PA-64: "Section that is DELIBERATELY plain?"** -- **KEEP (excellent)** -- "Designed quiet vs forgot to design" is one of the hardest perceptual distinctions. Requires compositional understanding.

**PA-65: "If this page were music: single instrument, choir in unison, or ensemble?"** -- **KEEP (excellent)** -- Forces synesthetic thinking. Three options clearly distinguished by felt experience.

**PA-66: "Empty spaces all same 'flavor' or different gaps feel different?"** -- **KEEP** -- "Flavor of emptiness" is brilliant perceptual language.

**PA-67: "Doing something you have not seen before -- inventive?"** -- **KEEP** -- Novelty detection through felt experience.

**PA-68: "Organizing metaphor persist across ALL scroll thirds?"** -- **REFRAME** -- Binary persistence check. Reframe: **"Does the page's organizing idea get stronger, weaker, or stay the same as you scroll? Where is it most alive?"** Tracks TRAJECTORY of metaphor strength.

---

## Part 2: Protocol and Infrastructure Evaluation

### Section 0: Audit Optimization Trap Warning -- KEEP (rewrite)

The warning is correct in spirit. But in the generative frame, it becomes unnecessary -- the audit does not produce scores to optimize against. Rewrite as: "The PA is a creative consultation, not an exam. The builder does not 'pass' or 'fail' -- they receive artistic perspective that feeds the next creative window."

### Fresh-Eyes Principle -- KEEP (strengthen)

Most important principle. Already aligned. Extension: the auditor should not know the SCORING SYSTEM either. If the auditor knows "PA-05 is scored on 4 sub-criteria," they audit against criteria instead of responding to the page.

### The One Rule -- KEEP

"React to what you see before you check what you know." Perfect generative alignment.

### The Three Laws -- REFRAME (Law 3)

Law 3 currently: "A non-designer must be able to validate the answer." "Validate" implies a correct answer. Replace with: **"A non-designer must be able to UNDERSTAND the answer."**

### The Sovereignty Principle -- REMOVE

ALWAYS-LOCKED / LOCKED / CHALLENGEABLE is enforcement infrastructure. The auditor should describe what they experience, not reason about whether their observation is "challengeable." Sovereignty is for the builder/orchestrator receiving findings, not for the auditor generating them.

### Quantitative Guardrails (all tables, ~200 lines) -- REMOVE from auditor-facing material

Single most important structural change. Content width tables, typographic spacing tables, compression limits, hierarchy tables, perception thresholds -- all are builder-time tools belonging in the gate runner.

Root cause of compliance drift: auditors who have internalized "640px minimum content width" estimate widths. Auditors who know "1.5 line-height WCAG floor" measure line-height. The experiential questions already capture these concerns through felt response.

### Perception Threshold Reference Table -- REMOVE from auditor-facing material

">=15 RGB on at least one channel" is for builders. An auditor should say "the backgrounds look the same" or "shift noticeably." The 15 RGB threshold is the builder's translation job.

### Mode 4 Deployment Architecture (9 auditors + Weaver) -- REFRAME

The 9-auditor parallel deployment is operationally sound. But rigid question assignment ("Auditor F gets PA-17, PA-40, PA-41, PA-60, PA-61") transforms auditors into specialists who audit through a predetermined lens.

Reframe: **All auditors get the same 20 questions.** With 20 questions (vs 69), universal assignment is feasible. Breadth comes from 9 independent perspectives on the SAME questions, not 9 perspectives on DIFFERENT questions.

Evidence: The mode-4 PA was most effective historically when 9/9 auditors flagged the whitespace void because they ALL evaluated the whole page, not because one void-specialist was assigned the void question.

### Weaver Role -- REFRAME (heavily)

Current: Synthesize 9 reports into dual verdict (PA-05 score + Tier 5 score), classify fixes (MECHANICAL / STRUCTURAL / COMPOSITIONAL), produce top-5 fix list with severity rankings. This is a compliance aggregator.

Reframe: The Weaver's job is to LISTEN to 9 independent experiences and find the artistic truth. Not "5 of 9 said FAIL on PA-17 so PA-17 = FAIL." Instead: "Multiple auditors felt the rhythm become metronomic in the second half, connecting to the auditor who felt their interest fade at the same point. The page's energy is dissipating. The next creative window should focus on rhythmic variation in the lower third."

**Weaver produces:**
1. What the page is trying to be (synthesized from personality descriptions, metaphor, intention)
2. Where it succeeds (protect and amplify)
3. Where it is almost there (opportunities, not defects)
4. What the next creative window should focus on (artistic direction, not fix list)

### Scoring System -- REMOVE entirely

PA-05: 2.5/4, Tier 5: 6/9, combined verdict: APPROACHING -- these scores are the wrong output. Replace with narrative verdicts using conviction language.

### Verdict Categories -- REFRAME

Current: SHIP / SHIP WITH FIXES / WOULD NOT SHIP (assumes pass/fail gate).

Reframe:
- **ALIVE:** The composition has energy, identity, momentum. Protect what's working. Polish.
- **EMERGING:** A composition is trying to happen. The next window should deepen [specific aspect].
- **SEARCHING:** The page has not found its voice. The next window should return to [fundamental question].

### Fix Classification -- REFRAME

- MECHANICAL becomes **"precision work"** -- the vision is clear, execution needs tightening
- STRUCTURAL becomes **"architecture work"** -- zones/boundaries need reconsideration
- COMPOSITIONAL becomes **"vision work"** -- the organizing idea needs strengthening or replacement

### Cold Look Protocol -- KEEP (excellent, add one response)

"LOOK 5 seconds, do NOT read text, absorb shape color weight, REACT immediately, LOCK forever." This IS processing over extraction. Add a 5th locked response: **"What is this page trying to be?"**

### Zone Sweep -- REFRAME

Current 5 passes: Readability, Spatial Balance, Hierarchy+Flow, Consistency, Ship Test. Compliance-oriented evaluation dimensions.

Reframe as experiential passes:
1. **READING pass:** Can I read this? Does reading feel the way the content wants me to feel?
2. **WEIGHT pass:** (squint) What is the shape of the page? Heavy where, light where?
3. **JOURNEY pass:** Scroll through. Where does attention move, snag, flow?
4. **IDENTITY pass:** Does this feel like one mind? What is the personality?
5. **CONVICTION pass:** Would I put my name on this? What would I change? What would I protect?

### Multi-Coherence Evaluation -- REMOVE from auditor-facing material

Teaches auditors to COUNT channel shifts at boundaries and calibrate against a table. This is compliance extraction in experiential clothing. Auditors say "I feel a zone change" or "these sections feel the same." The framework is for the Weaver to interpret.

### Coherence ARC Detection -- REFRAME

ARC type table (BUILD-PEAK-RESOLVE, SUSTAINED, FRONT-LOADED, RANDOM) is useful vocabulary but framed as assessment/classification. Reframe: **"Does the page have a story arc? Where does energy build? Where does it release? Does it have a climax?"**

### Progressive Zoom Test -- KEEP (excellent)

The 5-scale zoom test is genuine perceptual exercise. Produces felt data at each scale.

### Auditor Language Constraint -- KEEP (strengthen)

The CSS vocabulary hard block is essential. Strengthen: **also block scoring vocabulary** -- no PASS, FAIL, threshold, minimum, violation, compliance, score, rating, count.

### Dual Severity Track -- REMOVE

Rule Track + Perception Track is routing infrastructure. Not auditor-facing.

---

## Part 3: Proposed Question Set (20 Questions, 5 Tiers)

### Tier 1: First-Scroll Experience (4 questions -- asked at every viewport, locked immediately)

**Q1** (PA-01 reframed): "What is the first thing you notice? Is your attention being guided or scattered?"

**Q2** (PA-03 adjusted): "Does this feel like one mind made it?"

**Q3** (PA-04 reframed): "Where does your eye go first? What do you think the page WANTS you to notice first? Are they the same?"

**Q4** (PA-05 reframed): "Would you put your name on this? Why or why not?"

### Tier 2: Spatial and Rhythm Experience (5 questions)

**Q5** (PA-10+PA-32 merged): "Squint at the full page. What is the shape of its visual weight? Where is it heavy, where is it light? Does the distribution feel like a decision?"

**Q6** (PA-09+PA-33 merged): "Where does the page exhale? Does the breathing feel designed -- like silence in music -- or abandoned, like a dropped signal?"

**Q7** (PA-11 kept): "Are the margins generous and confident, or anxious and clutching?"

**Q8** (PA-17 reframed): "What is the rhythm of this page? If it were music, what would the time signature be? Does it change?"

**Q9** (PA-30 reframed): "Does the page feel like it owns this screen, or like it's borrowing space?"

### Tier 3: Content-Form Relationship (5 questions)

**Q10** (PA-02 reframed): "Read any paragraph that catches your eye. Does the reading experience match the emotional register of what you're reading?"

**Q11** (PA-35 kept): "Scroll through the entire page at reading speed. Does your interest stay level, peak and valley, or fade? Where do you start skimming?"

**Q12** (PA-70 kept): "Compare the densest section to the lightest section. Does the visual treatment RESPOND to that difference in density?"

**Q13** (PA-20 adjusted): "Describe this page's personality in three words. Does it match what the content is about?"

**Q14** (PA-36 reframed): "Where is the page's climax? If it doesn't have one, what would create one?"

### Tier 4: Creative Coherence (4 questions)

**Q15** (PA-65 kept): "If this page were a piece of music, would it be: (a) a single instrument playing one melody, (b) a choir singing in unison, (c) an ensemble with different parts? What are the instruments?"

**Q16** (PA-63 kept): "Zoom into one component. Does its internal design echo the page's overall design language at a smaller scale? Does the same component type look different in different zones?"

**Q17** (PA-44 kept): "If you removed all labels, headings, and text, could you still sense the organizing idea from the visual structure alone?"

**Q18** (PA-64 kept): "Is there a section that is deliberately plain -- simpler than its neighbors in a way that makes the surrounding richness more noticeable? Can you tell the difference between 'designed quiet' and 'forgot to design this part'?"

### Tier 5: What's Almost There (2 questions -- opportunities, not defects)

**Q19** (PA-67+PA-45 merged): "What is the best thing on this page? What makes it work? Is there anything that feels genuinely novel -- not just well-executed, but inventive?"

**Q20** (PA-27+PA-48 merged): "If you were designing this page, what would you keep and what would you replace? What would you do differently?"

---

## Part 4: Disposition Summary

### Questions Removed (24)
PA-06, PA-07, PA-08, PA-14, PA-15, PA-16, PA-18, PA-21, PA-23, PA-24, PA-25, PA-28, PA-29, PA-37, PA-39, PA-40, PA-41, PA-50, PA-51, PA-53, PA-56, PA-69

Reason patterns: Binary yes/no (PA-06, PA-08, PA-14, PA-16, PA-23), numeric counting/thresholds (PA-15, PA-29, PA-37, PA-41, PA-50, PA-51, PA-53, PA-69), compliance against standard (PA-18, PA-24, PA-25, PA-39, PA-40), CSS vocabulary (PA-56), meta-activity (PA-28), redundant (PA-07, PA-21)

### Questions Kept with Adjustments (17)
PA-03, PA-10, PA-11, PA-13, PA-19, PA-20, PA-22, PA-27, PA-31, PA-33, PA-35, PA-42, PA-44, PA-61, PA-63, PA-64, PA-65, PA-66, PA-67, PA-70

### Questions Reframed (20)
PA-01, PA-02, PA-04, PA-05, PA-09, PA-12, PA-17, PA-26, PA-30, PA-32, PA-34, PA-36, PA-38, PA-43, PA-45, PA-46, PA-47, PA-48, PA-52, PA-55, PA-60, PA-62, PA-68

### Questions Absorbed/Merged
PA-07 -> Q10; PA-12+PA-34 -> Q11; PA-22+PA-46 -> responsive; PA-26 -> Q4/Q20; PA-32 -> Q5; PA-38 -> Q3; PA-47 -> Q11; PA-52 -> Q5; PA-55 -> Q12; PA-60 -> Q19; PA-62 -> Q14+Q15; PA-68 -> Q17

---

## Part 5: What Moves Where

### To gate runner / builder self-check (removed from PA skill):
- All quantitative guardrails (content width, CPL, line-height, spacing tables)
- Perception threshold reference table
- Void guardrail specifications
- S-09 stacking check
- Binary defect checks: PA-06, PA-08, PA-14, PA-15, PA-23, PA-29, PA-37, PA-39, PA-50-53

### Removed entirely (compliance infrastructure):
- PA-05 sub-criteria scoring (4/4 system)
- Tier 5 YES/NO counting and verdict matrix
- Severity calibration tables
- Sovereignty categories
- Dual severity track
- Tier 1 equivalent enforcement for PA-17/PA-41
- Multi-coherence counting protocol

### To Weaver calibration document (not auditor-facing):
- Multi-coherence scale
- Severity scale
- Metaphor expression spectrum
- ARC type table
- Fix-type classification definitions
- Combined verdict matrix

---

## Part 6: Structural Changes Beyond Questions

### 1. Remove all scoring rubrics
No numeric scores. No sub-criteria. No YES/NO counts. No verdict matrix. Output is narrative.

### 2. Universal question assignment
All auditors answer all 20 questions. Breadth from independent perspectives on same questions, not specialized perspectives on different questions.

### 3. Weaver becomes artistic synthesizer
Produces: What the page is trying to be / Where it succeeds / Where it is almost there / Direction for next window. Not: score aggregation, defect classification, fix routing.

### 4. Output format: narrative, not tables
9 independent narrative responses + 1 Weaver synthesis. Verdict as conviction statement.

### 5. Cold Look Protocol retained + 5th response
Add: "What is this page trying to be?"

### 6. Quantitative material relocated
All tables, thresholds, numeric specs -> gate runner. PA skill becomes pure perceptual instrument with zero numbers.

### 7. Language constraint expanded
Block CSS vocabulary AND scoring vocabulary (PASS, FAIL, threshold, minimum, violation, compliance, score, rating, count).

---

## Part 7: Risk Assessment

### What we lose:
1. **Diagnostic precision:** "PA-05c: 1.5/4, sub-dimension 3b FAIL" tells the builder exactly what is wrong. "The page's energy dissipates in the lower third" requires interpretation.
2. **Historical comparability:** PA-05 scores across experiments (1.5/4, 2.5/4, 3.5/4) trace a clear improvement arc.
3. **Automated routing:** Fix classification routes fixes efficiently. Artistic direction requires interpretation.

### What we gain:
1. **Creative direction instead of defect lists:** "Deepen rhythmic variation in the lower third" vs "PA-17: FAIL, metronomic repetition detected."
2. **Discovery of opportunities, not just problems:** "What's almost there" surfaces potential that compliance questions miss.
3. **Honest perceptual data:** Auditors freed from scoring rubrics produce richer, more honest responses.
4. **Simpler skill:** 20 questions vs 69. ~200 lines vs 774. Auditors can internalize the entire instrument.

### Mitigation:
1. **Diagnostic precision:** Gate runner handles measurable defects. PA handles felt experience. Clean separation.
2. **Historical comparability:** Conviction thermometer (not a score): "How strongly do you feel about shipping this?" with free-text justification.
3. **Automated routing:** Weaver classifies artistic direction into precision/architecture/vision work.

---

## Summary Statistics

| Metric | Before | After |
|--------|--------|-------|
| Total questions | 69 | 20 |
| KEEP | 17 | -- |
| REMOVE | 24 | -- |
| REFRAME | 20 | -- |
| Merged/absorbed | 8 | -- |
| Quantitative guardrail tables | 7 | 0 (moved) |
| Scoring rubrics | 3 | 0 |
| Estimated skill file length | 774 lines | ~200 lines |
| Compliance-answerable questions | ~40 | 0 |
| Experiential questions | ~29 | 20 |

---

## Cross-Cutting Findings

### Finding 1: The Skill Contains Two Documents
The PA skill merges an Auditor's Guide (questions, cold look, language constraints, fresh-eyes) with an Infrastructure Manual (guardrail tables, severity scales, verdict matrices, deployment protocol, weaver calibration). Splitting makes both stronger.

### Finding 2: Counting Is the Enemy of Perceiving
The most common anti-pattern is "count how many X." Every instance where the auditor counts converts experiential inquiry into measurement. Reframed versions replace "count N" with "do you feel/notice/sense X?"

### Finding 3: The Best Questions Share a Structure
Strongest questions: (1) Direct the gaze ("Look at X," "Pick any Y," "Scroll through"), (2) Ask for experience ("Does it feel," "Can you sense," "Would you"), (3) Offer a metaphor ("silence in music," "single instrument or ensemble," "designed quiet or forgot to design"). Weak questions skip step 3 or replace step 2 with measurement.

### Finding 4: Negative-First Framing Produces Defect Lists
Questions beginning with "Is there anything wrong/bothering/uncomfortable/dead/fighting" prime the auditor for deficit-finding. Reframed questions ask about the EXPERIENCE without presupposing its valence.

### Finding 5: The Generative Frame Naturally Absorbs Compliance Concerns
Every quantitative guardrail has an experiential equivalent already in the questions. Container width -> "does the page own this screen?" CPL -> "can you read comfortably?" Line-height -> "does the reading experience match the content?" The guardrails are the builder's translation of auditor perception into CSS. They do not need to be in the auditor's view.

### Finding 6: Universal Assignment > Specialist Assignment
With 20 questions, every auditor can deeply engage with every question. The strength of 9 independent perspectives comes from independence and universality, not from specialization. The whitespace void was caught 9/9 because every auditor evaluated the whole page.
