# PA Skill Audit Through the Generative Frame

**Date:** 2026-02-27
**Auditor:** pipeline-auditor (Opus)
**Frame:** Inhabitation -> Creation -> Reflection (not Extraction -> Compression -> Compliance)
**Source:** `~/.claude/skills/perceptual-auditing/SKILL.md` (993 lines)

---

## Executive Summary

The PA skill is a hybrid. Its philosophical framing is excellent (fresh-eyes principle, "react before you check," the Sovereignty Principle). Its question design is split: roughly 40% are genuinely experiential inquiries that surface creative decisions; 35% are compliance checks dressed in perceptual language; and 25% are infrastructure/protocol that should be separated from the creative assessment.

**Recommendation:** Reduce from 69 questions to 22 deeply experiential ones, organized around 5 experiential dimensions (not 9 thematic auditor buckets). Move all quantitative guardrails, void detection thresholds, and protocol infrastructure to a separate "Gate Companion" document that the orchestrator (not the auditor) uses.

---

## Section-by-Section Evaluation

### Opening Warning (Lines 1-43): KEEP (Exemplary)

The "Audit Optimization Trap" warning is the single best-written section in any skill file. It perfectly distinguishes verification from design:

> "If you are consulting this skill BEFORE building: You are doing it wrong."
> "If you are consulting this skill AFTER building: You are doing it right."

This is pure generative frame. No changes needed.

### Fresh-Eyes Principle (Lines 46-48): KEEP (Non-Negotiable)

> "Perceptual auditors MUST be context-starved."

Correct and essential. The generative frame for auditing IS fresh eyes -- the auditor inhabits the page as a first-time visitor, not as a compliance checker.

### The One Rule (Lines 52-57): KEEP (Perfect)

> "React to what you see before you check what you know."

This is the PA skill's soul constraint, expressed in world-description format. No change needed.

### The Sovereignty Principle (Lines 59-66): ADAPT

The concept is sound (audit execution, not decisions) but the three-tier sovereignty system (ALWAYS-LOCKED / LOCKED / CHALLENGEABLE) introduces compliance vocabulary into what should be an experiential frame. The auditor shouldn't be thinking about sovereignty tiers; they should be asking "does this work?"

**Reframe:** "Your job is to say what you SEE and FEEL. You are not checking rules -- you are checking whether the page works as a visual experience. If something looks wrong, say so. If something looks right, say so. The builder's decisions are protected; your perceptions are sovereign."

### The Three Laws (Lines 68-73): KEEP (Excellent Filter)

> 1. The answer must require a screenshot (not answerable from source code alone)
> 2. The answer must be describable in plain language (no CSS vocabulary)
> 3. A non-designer must be able to validate the answer

These are brilliant question-quality filters. Every question in the revised skill should pass all three.

---

## Question-by-Question Classification

### Tier 1: The Mandatory Five (PA-01 through PA-05)

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-01** | "What's the first thing that bothers you?" | **KEEP** | Pure experiential. Open-ended. Surfaces genuine reactions. |
| **PA-02** | "Is any text uncomfortable to read? Point to the worst spot." | **KEEP** | Experiential with grounding ("point to"). |
| **PA-03** | "Does this feel like one designer made it, or three?" | **KEEP** | Brilliant experiential inquiry. The word "feel" is key. |
| **PA-04** | "Where does your eye go first? Is that where it SHOULD go?" | **KEEP** | Tests attention hierarchy experientially. |
| **PA-05** | "Would you put your name on this? What would you fix first?" | **KEEP** | The signing frame as a question. Conviction distilled. |

**PA-05 Sub-Criteria:** The 4 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) are valuable vocabulary but their current format is overly specified:

- **PA-05a (DESIGNED):** KEEP as-is. "Does this feel like intentional composition, or assembled components?" is experiential.
- **PA-05b (COHERENT):** KEEP as-is. "One designer or vocabulary from multiple systems?" is experiential.
- **PA-05c (PROPORTIONATE):** **REFRAME.** The main question is experiential ("Does the spatial balance feel considered?") but the 3 expanded sub-dimensions (horizontal proportion, vertical proportion, breathing proportion) with specific percentage thresholds (65-80%, 30% content coverage) are compliance checks. Collapse the sub-dimensions into the single question.
- **PA-05d (POLISHED):** KEEP but simplify. "Ready to ship as-is?" is experiential. The "look for" checklist (missing elements, token compliance, transitions typed) is compliance.

**Current PA-05c text to reframe:**
> "3a. Horizontal Proportion: Does the container width use the viewport effectively? PASS: Content fills 65-80% of viewport width."

**Reframed:**
> "Does the page use its width confidently -- neither a narrow strip nor wall-to-wall?"

### Tier 2: Standard Fifteen (PA-06 through PA-48)

#### Readability and Comfort

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-06** | "Are any words stacking vertically, one per line, in any column?" | **KEEP** | Specific, visual, catches real failures. |
| **PA-07** | "Can you read the longest paragraph without losing your place?" | **KEEP** | Tests reading experience directly. |
| **PA-08** | "Is there any text you have to lean in or squint to read?" | **KEEP** | Physical-experiential ("lean in," "squint"). |
| **PA-29** | "In the header area, count how many different text styles you see. Are more than three fighting for attention?" | **REFRAME** | "Count how many" is measurement, not experience. Reframe: "In the header, does the typography feel like one voice or several voices competing?" |

#### Spatial Balance and Proportion

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-09** | "Is there dead space that serves no purpose?" | **KEEP** | Experiential. The severity calibration table below it (LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC with viewport-height measurements) should be **REMOVED** from auditor view. That's weaver/orchestrator infrastructure. |
| **PA-10** | "If you squint until you can't read text, does the layout look balanced?" | **KEEP** | The squint test is experiential genius. |
| **PA-11** | "Are the margins generous (confident) or anxious (clutching)?" | **KEEP** | Emotional language surfaces spatial quality. |
| **PA-30** | "Does the layout feel DESIGNED for this width, or like a narrower design centered in extra space?" | **KEEP** | Tests desktop utilization experientially. |
| **PA-31** | "If you covered the content and only looked at the surrounding space, would that space feel designed or leftover?" | **KEEP** | Tests negative space quality. Beautiful question. |
| **PA-32** | "Squint at the full page. Is the visual weight distributed purposefully or concentrated in one zone?" | **KEEP** | Tests visual weight distribution experientially. |
| **PA-33** | "Pick the largest area of empty space. Does it feel like silence in music or a dropped signal?" | **KEEP** | The music metaphor is perfect experiential language. |

#### Visual Flow and Pacing

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-12** | "Do your eyes flow smoothly from section to section?" | **KEEP** | Tests flow experientially. |
| **PA-13** | "Is there a clear visual ending, or does the page just stop?" | **KEEP** | Tests closure experientially. |
| **PA-34** | "Pick the transition between any two major sections. Is it a DESIGNED moment or just empty space?" | **KEEP** | Brilliant. Forces auditor to examine specific transitions. |
| **PA-35** | "Scroll through the entire page at reading speed. Does your interest stay level, peak and valley, or fade?" | **KEEP** | Tests scroll momentum experientially. |
| **PA-36** | "Is there a dramatic visual moment -- a place where the treatment changes noticeably?" | **KEEP** | Tests D-04 (second-half moment) experientially. |

#### Grid and Layout

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-14** | "Does every column have enough room for its content to breathe?" | **KEEP** | Experiential. "Breathe" is the right word. |
| **PA-15** | "Trace the left edge of every content block. How many starting positions?" | **REFRAME** | "How many starting positions" is counting, not experiencing. Reframe: "Does the left edge of content feel aligned and purposeful, or scattered?" |
| **PA-37** | "Is there any container where you can count five or more distinct pieces of information competing for your attention?" | **REFRAME** | "Count five or more" is measurement. Reframe: "Is there any container that feels overwhelming -- too many things competing for your attention at once?" |
| **PA-38** | "Pick any card, callout, or info-box. Within it, is there a clear reading order?" | **KEEP** | Tests internal hierarchy experientially. |
| **PA-39** | "In the first screenful, how much is header/metadata versus actual content? Does the header feel like a doorway or a lobby?" | **KEEP** | The doorway/lobby metaphor is excellent. |

#### Consistency and Rhythm

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-16** | "Pick two elements that should look identical. Do they?" | **KEEP** | Tests consistency through specific comparison. |
| **PA-17** | "Is there a visual rhythm (like a beat in music), or random?" | **KEEP** | Music metaphor surfaces rhythm experientially. |
| **PA-40** | "Does the spacing between sections feel consistent, or is there a sudden jump?" | **KEEP** | Tests vertical rhythm experientially. |
| **PA-41** | "Are any visual patterns repeated more than four times without variation?" | **REFRAME** | "More than four times" is counting. Reframe: "Does any visual pattern repeat so often it becomes monotonous? Or does repetition serve a purpose?" |

**PA-17/PA-41 "Tier 1 Equivalent" Enforcement (Lines 202-212):** **REMOVE.** The concept of "Tier 1 equivalent" with "binary enforcement" is compliance infrastructure. If rhythm matters (it does), make it a core question, not a mandatory override rule. The enforcement language ("page verdict CANNOT be higher than 'YES WITH RESERVATIONS'") is gate language that belongs in the orchestrator, not the auditor's experience.

#### Color and Emotion

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-18** | "Do all the grays/neutrals feel like the same family?" | **KEEP** | Tests color coherence experientially. |
| **PA-19** | "Is there any element that feels like it's from a different website?" | **KEEP** | Tests visual intruders. Perfect question. |
| **PA-20** | "Describe this page's personality in three words. Does it match intent?" | **REFRAME** | "Does it match intent" breaks fresh-eyes (auditor doesn't know intent). Reframe: "Describe this page's personality in three words." Full stop. Let the weaver compare to intent. |

#### Metaphor and Ideology (PA-42, PA-43, PA-44)

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-42** | "Is there any section where you understand WHY it looks this way but it still looks WRONG?" | **KEEP** | Tests metaphor cost experientially. |
| **PA-43** | "Could the same idea be communicated with less visual cost?" | **KEEP** | Tests metaphor efficiency. |
| **PA-44** | "If you removed all labels, could you still sense the metaphor from the visual structure alone?" | **KEEP** | Tests implicit vs explicit metaphor. Critical question. |

#### Quality and Excellence

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-45** | "Is there a single moment on this page that you would show someone as an example of good design?" | **KEEP** | Tests design highlight presence. |

### Tier 3: Deep Dive (PA-21 through PA-28, PA-46 through PA-48)

#### Responsiveness

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-21** | "Does everything look designed for this width, or squeezed?" | **KEEP** | Same question as PA-30 but for narrow viewports. |
| **PA-22** | "Would a user with ONLY this screen size feel served or punished?" | **KEEP** | "Served or punished" is experiential. |
| **PA-23** | "What breaks if you resize 200px narrower?" | **REMOVE** | Requires interaction (resizing), not screenshot-based. Violates Law 1. |
| **PA-46** | "At this narrow viewport, does the way elements reorganize make SENSE for this content?" | **KEEP** | Tests responsive degradation experientially. |
| **PA-47** | "At what scroll position do you start to feel like you've 'seen this before'?" | **KEEP** | Tests novelty decay experientially. Subsumes D-04. |

#### Cross-Page

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-24** | "Does this page feel like it belongs with its siblings?" | **KEEP** | Tests family coherence. Only relevant when siblings exist. |
| **PA-25** | "If you covered the header, could you identify the design system?" | **KEEP** | Tests visual identity beyond header. |

#### Architectural Challenge

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-26** | "Is any convention CAUSING a visual problem?" | **KEEP** | Tests fossilized conventions. Adversarial in the right way. |
| **PA-27** | "Designing from scratch, would you design it this way?" | **KEEP** | Tests whether the design is constraint-shaped vs intention-shaped. |

#### Adversarial

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-28** | "How could someone make this look terrible while passing every rule?" | **REMOVE** | This is a pipeline vulnerability assessment, not a visual audit question. Violates Law 1 (requires rule knowledge, not just screenshots). |
| **PA-48** | "If this were one of five options, would this be your first choice, your last, or somewhere in the middle?" | **KEEP** | Comparative quality assessment. Experiential. |

### Pipeline Integration Questions (PA-55, PA-56, PA-69, PA-70)

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-55** | "Look at 3 adjacent sections. Can you describe how they DIFFER visually without inspecting any code?" | **KEEP** | Tests sub-perceptual CSS detection experientially. Brilliant bridge question. |
| **PA-56** | "Check the text treatment between different zones. Can you FEEL the tracking difference?" | **KEEP** | Tests micro-typography perception. "FEEL" is the right word. |
| **PA-69** | "Pick any two section transitions. Count how many visual properties change at each..." | **REFRAME** | "Count how many" is measurement. Reframe: "Compare two section transitions. Does one feel more dramatic than the other? How?" |
| **PA-70** | "Compare the densest analytical section to the lightest overview section. Does the visual treatment RESPOND to this difference?" | **KEEP** | Tests content-form coupling experientially. |

### Tier 4: Void Prevention (PA-50 through PA-53)

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-50** | "Count the number of full viewport-height scroll positions where less than 30% of the screen contains actual content..." | **REFRAME** | "Count the number" + "less than 30%" is compliance measurement. Reframe: "Scroll through the page. Are there any stretches where you're scrolling past nothing? How long do they last?" |
| **PA-51** | "What percentage of the total page scroll height contains meaningful content..." | **REFRAME** | Percentage estimation is measurement. Reframe: "Does the page feel full of content, or mostly empty?" |
| **PA-52** | "Divide the page into thirds by scroll depth. Does each third contain at least one designed moment?" | **REFRAME** | "At least one" is a threshold check. Reframe: "Is the page's visual interest distributed across the whole scroll, or concentrated in one area?" |
| **PA-53** | "At the widest viewport, does the content container use 65-80% of the available horizontal space..." | **REFRAME** | "65-80%" is a compliance range. Reframe: Already covered by PA-30. **REMOVE as duplicate.** |

**Void Guardrail Specifications (Lines 372-395):** **REMOVE from auditor view.** The binary thresholds (max consecutive blank viewports: 1.5 viewport-heights, min content percentage: 60%, etc.) are gate-runner territory. Move to gate companion document. The auditor should report what they SEE ("I scrolled past three screens of nothing"), not what they MEASURE ("content coverage is below 30% for 2.3 viewport-heights").

**S-09 Stacking Check (Lines 383-391):** **REMOVE from auditor view.** "Sum all contributing gaps: section bottom padding + divider margins + divider height + next section top padding" is CSS measurement, violates Law 1 and Law 2. The auditor detects voids experientially ("there's a huge gap here"); the gate runner measures whether S-09 is violated.

### Tier 5: Compositional Depth (PA-60 through PA-68)

| ID | Question | Classification | Rationale |
|----|----------|---------------|-----------|
| **PA-60** | "Can you identify at least 3 distinct 'design moments' -- places where the visual treatment does something unique?" | **REFRAME** | "At least 3" is a threshold. Reframe: "Are there moments on this page where the design does something unexpected -- something unique that doesn't repeat? Point to each one." |
| **PA-61** | "Do different visual properties seem to have their own independent rhythms, or does everything shift at the same time?" | **KEEP** | Tests multi-voice composition experientially. |
| **PA-62** | "Find a section transition. Count how many visual properties change simultaneously..." | **REFRAME** | Counting again. Reframe: "Find a section transition. Does it feel like a gentle shift or a dramatic transformation? Are there BOTH kinds on this page?" |
| **PA-63** | "Zoom into one component. Does its internal design echo the page's overall design language at a smaller scale?" | **KEEP** | Tests fractal coherence experientially. The follow-up about same component in different zones is excellent. |
| **PA-64** | "Is there a section that is DELIBERATELY plain -- simpler than surrounding sections in a way that makes the surrounding richness more noticeable?" | **KEEP** | Tests designed restraint. The "designed quiet vs forgot to design" distinction is perfect. |
| **PA-65** | "If this page were a piece of music, would it be a single instrument, a choir singing in unison, or an ensemble with different parts?" | **KEEP** | The music analogy is perfect experiential framing. |
| **PA-66** | "Look at the empty spaces between sections. Are they all the same 'flavor' of emptiness, or do different gaps feel different?" | **KEEP** | Tests negative space variety experientially. "Flavor of emptiness" is brilliant language. |
| **PA-67** | "Does the page feel like it is doing something you have not seen before -- not just well-executed, but inventive?" | **KEEP** | Tests novelty beyond competence. |
| **PA-68** | "Does the page's organizing metaphor persist across ALL scroll thirds, or does it fade or disappear?" | **KEEP** | Tests metaphor spatial coverage. |

**Tier 5 Scoring Table (Lines 495-514):** **REMOVE from auditor view.** The YES count -> verdict matrix (8-9/9 = COMPOSED, 6-7 = APPROACHING, etc.) is weaver infrastructure. Auditors should answer questions honestly without knowing how their answers map to verdicts. Move to weaver calibration.

---

## Quantitative Guardrails Section (Lines 543-637): REMOVE from Auditor View

The entire quantitative guardrails section (content width tables, typographic spacing tables, compression limits, hierarchy weights, perception thresholds) should be **moved to a separate gate companion document** that the orchestrator and gate runner use.

**Why:** These tables violate Law 2 ("no CSS vocabulary") and break the fresh-eyes principle. An auditor who knows "CPL must be 45-80" will measure CPL instead of asking "can I read this comfortably?" The experiential version of every guardrail is ALREADY in the questions:

| Guardrail | Experiential Equivalent |
|-----------|------------------------|
| Content width 640-960px | PA-30: "Does the layout feel designed for this width?" |
| CPL 45-80 | PA-07: "Can you read the longest paragraph without losing your place?" |
| Line-height >= 1.5 | PA-08: "Is there text you have to squint to read?" |
| Section spacing >= 48px | PA-12: "Do your eyes flow smoothly from section to section?" |
| Content-to-viewport 65-80% | PA-31: "Would the surrounding space feel designed or leftover?" |
| Stacked gap <= 120px | PA-09: "Is there dead space that serves no purpose?" |

The auditor asks the experiential question. The gate runner checks the threshold. Both produce the same signal through different methods. Giving the auditor BOTH creates the optimization trap the opening warning correctly identifies.

### Perception Threshold Reference Table (Lines 617-637): REMOVE from Auditor View

> "Background color >= 15 RGB on at least one channel"
> "Font-size >= 2px between zones"
> "Letter-spacing >= 0.5px (0.03em at 16px)"

These numbers should be in the gate runner, not in the auditor's view. The auditor should say "these two backgrounds look the same" (PA-55), not "the delta is only 12 RGB."

**Exception:** The "Warm Palette Note" (line 632) is interesting insight but belongs in gate runner calibration.

---

## Modes Section (Lines 640-708): ADAPT

### Mode 4 Structure: REFRAME

The current 9-auditor structure with thematic assignments (A=Impression+Emotion, B=Readability+Typography, etc.) and specific question routing is orchestration infrastructure. It works but creates artificial boundaries -- the auditor who gets "Grid+Layout" may notice a rhythm problem but not feel authorized to report it because it's not their assignment.

**Reframe:** Instead of 9 specialists with 5-8 assigned questions each, consider 5 experiential dimensions with 4-5 questions each:

| Dimension | Questions (reduced) | What It Captures |
|-----------|-------------------|------------------|
| **First Encounter** | PA-01, PA-04, PA-10, PA-20 | Gut reaction, attention hierarchy, balance, personality |
| **Reading Experience** | PA-02, PA-07, PA-08, PA-14, PA-38 | Can you read this? Comfortably? With hierarchy? |
| **Visual Journey** | PA-12, PA-13, PA-35, PA-36, PA-47 | Scroll momentum, transitions, pacing, closure |
| **Coherence & Identity** | PA-03, PA-16, PA-19, PA-44, PA-55 | One designer? Family feel? Metaphor structural? Sub-perceptual? |
| **Compositional Depth** | PA-05, PA-45, PA-61, PA-63, PA-65, PA-67 | Signing frame, design moments, multi-voice, fractal, novelty |

This gives 5 auditors x ~5 questions = 25 questions total, with every auditor ALSO doing cold-look protocol and free-form gestalt response.

### Screenshot-Reading Protocol (Lines 650-665): KEEP

Clear, practical, well-written. No changes needed.

### Weaver Protocol (Lines 669-707): ADAPT

The weaver's fix-type classification (MECHANICAL / STRUCTURAL / COMPOSITIONAL) is valuable. The multi-coherence scale and severity scale are useful calibration for the weaver. But the metadata should stay in the weaver's document, not in the auditor-facing skill file.

**Move to separate weaver document:**
- Multi-coherence scale (0-1 FLAT through 6 FLAGSHIP)
- Severity scale (LOOKS-WRONG through CATASTROPHIC)
- Metaphor expression spectrum (STRUCTURAL through ANNOUNCED)
- Combined verdict matrix

---

## Metaphor-Awareness Principles (Lines 224-285 and 712-797): KEEP with Simplification

The core insight is excellent:

> "The metaphor shapes experience; the guardrails prevent it from breaking experience."

But the section is too long (combined ~130 lines) and too detailed for auditor consumption. The common metaphor traps section (Lines 776-806) is builder guidance, not auditor guidance -- it tells the builder what NOT to do, which means the auditor is being taught to check for builder mistakes. That's compliance, not perception.

**Keep:**
- The fundamental principle (metaphor shapes, guardrails prevent breaking)
- The fresh-eyes metaphor detection protocol (lines 724-737)
- PA-42, PA-43, PA-44 questions

**Remove from auditor view:**
- Metaphor failure root-cause diagnosis (lines 739-749) -- weaver territory
- Common metaphor traps (lines 776-806) -- builder territory
- Specific spatial bias examples (lines 230-238) -- too directive for fresh-eyes

---

## Multi-Coherence Evaluation (Lines 808-857): REFRAME

The concept is valuable but the current format is measurement-heavy:

> "Count the shifts. At each major boundary, how many things change simultaneously?"

This is the opposite of experiential. The auditor should report "this transition feels dramatic" or "this transition feels gentle," not "I count 4 simultaneous shifts."

**Reframe:** Replace the counting protocol with:
> "At each major section boundary, describe how the page CHANGES. Is it a gentle drift (barely noticeable) or a clear transformation (you've entered a different space)? Does the change feel coordinated (everything shifts together) or piecemeal (one thing changed, everything else stayed)?"

The weaver can then classify "gentle drift" as 0-1 shifts and "clear transformation" as 3+ shifts using the calibration table.

**Keep:** The ACTIVE vs DEPLOYED distinction (lines 840-857) is important insight but belongs in the weaver/orchestrator calibration, not in the auditor's view.

---

## Visual Auditing Protocol (Lines 890-960): KEEP (Excellent)

### Cold Look Protocol: KEEP verbatim.

The 4-response format (gut reaction, worst thing, best thing, ship verdict) with the LOCK instruction is perfectly designed. This IS the generative frame applied to auditing -- react, then analyze.

### Scroll-Through Protocol: KEEP.

> "The scroll experience IS the audit."

### Zone Sweep (5 Dimension Passes): KEEP.

The 5 passes (Readability, Spatial Balance, Hierarchy, Consistency, Ship Test) are well-designed. Consider whether the reframed 5-dimension auditor structure could mirror these passes.

### Progressive Zoom Test: KEEP.

The 5 scales (Navigation, Page, Section, Component, Character) with specific "what to examine" and "what 'present' looks like" descriptions are excellent experiential guidance.

---

## Auditor Language Constraint (Lines 969-977): KEEP (Essential)

The CSS vocabulary hard block is brilliant:

> "Answers may NOT contain: px, rem, em, %, hex, rgb... Use instead: heavy, light, cramped, spacious, jarring, smooth..."

This is the generative frame's most concrete enforcement mechanism. It forces perceptual language by prohibiting measurement language.

---

## Dual Severity Track (Lines 981-993): ADAPT

The Rule Track (SOUL VIOLATION / CONVENTION BUG / OVERFLOW) is compliance vocabulary. The Perception Track (WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER) is experiential vocabulary.

**Keep only the Perception Track.** The Rule Track belongs in the gate runner. The auditor should never use the word "violation" -- they should say "would not ship" or "looks wrong."

---

## Summary: Question Disposition

### KEEP (33 questions -- experiential, surfaces creative decisions)

PA-01, PA-02, PA-03, PA-04, PA-05 (with reframed sub-criteria), PA-06, PA-07, PA-08, PA-09, PA-10, PA-11, PA-12, PA-13, PA-14, PA-16, PA-17, PA-18, PA-19, PA-21, PA-22, PA-24, PA-25, PA-26, PA-27, PA-30, PA-31, PA-32, PA-33, PA-34, PA-35, PA-36, PA-38, PA-39, PA-42, PA-43, PA-44, PA-45, PA-46, PA-47, PA-48, PA-55, PA-56, PA-61, PA-63, PA-64, PA-65, PA-66, PA-67, PA-68, PA-70

### REFRAME (11 questions -- good intent, measurement framing)

| ID | Current Framing | Reframed |
|----|----------------|----------|
| **PA-15** | "How many starting positions?" | "Does the left edge feel aligned and purposeful, or scattered?" |
| **PA-20** | "Does it match intent?" | Drop "Does it match intent?" -- auditor doesn't know intent |
| **PA-29** | "Count how many different text styles" | "Does the header typography feel like one voice or several competing?" |
| **PA-37** | "Count five or more" | "Is there any container that feels overwhelming?" |
| **PA-41** | "More than four times" | "Does any pattern repeat so often it becomes monotonous?" |
| **PA-50** | "Count viewport-heights... 30% content" | "Are there stretches where you're scrolling past nothing?" |
| **PA-51** | "What percentage" | "Does the page feel full or mostly empty?" |
| **PA-52** | "At least one designed moment" | "Is visual interest spread across the whole scroll or concentrated?" |
| **PA-60** | "At least 3 distinct design moments" | "Are there moments where the design does something unexpected?" |
| **PA-62** | "Count how many properties change" | "Does the transition feel gentle or dramatic? Are there both kinds?" |
| **PA-69** | "Count visual properties" | "Compare two transitions. Does one feel more dramatic? How?" |

### REMOVE (5 questions -- compliance, violates Three Laws, or duplicate)

| ID | Reason |
|----|--------|
| **PA-23** | Requires interaction (resizing), not screenshot-based. Violates Law 1. |
| **PA-28** | Requires rule knowledge ("passing every rule"). Violates Law 1. |
| **PA-53** | Duplicate of PA-30 with compliance percentages. |
| **PA-17/41 enforcement** | The "Tier 1 equivalent" binary enforcement rule is gate infrastructure, not an auditor question. PA-17 and PA-41 themselves are KEPT. |
| **PA-09 severity** | The severity calibration table (viewport-height counting) is gate infrastructure. PA-09 itself is KEPT. |

### Sections to REMOVE from Auditor View (move to gate/weaver companion)

1. Quantitative Guardrails (lines 543-637) -- all measurement tables
2. Perception Threshold Reference Table (lines 617-637) -- numbers for gate runner
3. Void Guardrail Specifications (lines 372-395) -- binary thresholds
4. S-09 Stacking Check (lines 383-391) -- CSS measurement
5. Tier 5 Scoring / Verdict Matrix (lines 495-514) -- weaver calibration
6. PA-17/41 Tier 1 Equivalent enforcement (lines 202-212) -- gate logic
7. Weaver Calibration References (lines 680-707) -- weaver document
8. Metaphor failure root-cause diagnosis (lines 739-749) -- weaver territory
9. Common metaphor traps (lines 776-806) -- builder territory
10. Multi-coherence counting protocol (lines 808-857) -- reframe or move

### Proposed Reduced Question Set (22 core + 3 responsive + PA-05 sub-criteria)

**Dimension 1: First Encounter (4 questions)**
1. PA-01: What's the first thing that bothers you?
2. PA-04: Where does your eye go first? Is that where it should go?
3. PA-10: Squint test -- does the layout look balanced?
4. PA-20 (reframed): Describe this page's personality in three words.

**Dimension 2: Reading Experience (4 questions)**
5. PA-02: Is any text uncomfortable to read?
6. PA-07: Can you read the longest paragraph without losing your place?
7. PA-14: Does every column have enough room for its content to breathe?
8. PA-38: Does any container have a clear reading order, or do all elements compete?

**Dimension 3: Visual Journey (5 questions)**
9. PA-12: Do your eyes flow smoothly from section to section?
10. PA-34: Is each section transition a designed moment or empty space?
11. PA-35: Does your interest peak and valley, or fade?
12. PA-36: Is there a dramatic visual moment? Where?
13. PA-13: Is there a clear visual ending, or does the page just stop?

**Dimension 4: Coherence & Identity (5 questions)**
14. PA-03: Does this feel like one designer made it, or three?
15. PA-19: Is there any element from a different website?
16. PA-44: Could you sense the metaphor from visual structure alone (no labels)?
17. PA-55: Can you describe how adjacent sections differ without inspecting code?
18. PA-70: Does visual treatment respond to content density differences?

**Dimension 5: Compositional Depth (4 questions)**
19. PA-05: Would you put your name on this? (+ 4 sub-criteria)
20. PA-45: Is there a moment you'd show someone as an example of good design?
21. PA-65: Single instrument, choir, or ensemble?
22. PA-63: Does a component's internal design echo the page's language at smaller scale?

**Responsive Supplement (3 questions, for multi-viewport audits):**
23. PA-21: Designed for this width, or squeezed?
24. PA-22: Would a user with ONLY this screen size feel served or punished?
25. PA-46: Does the responsive reorganization make sense for this content?

Total: 25 questions (22 core + 3 responsive), down from 69. Each passes all Three Laws. Each is experiential, not measurement-based.

---

## Cross-Cutting Findings

### Finding 1: The Skill Contains Two Documents

The PA skill is really two documents merged into one:
1. **The Auditor's Guide** (questions, cold look protocol, language constraints, fresh-eyes principle) -- experiential, correctly framed
2. **The Infrastructure Manual** (guardrail tables, severity scales, verdict matrices, deployment protocol, weaver calibration) -- compliance, should be separate

Splitting these would make both stronger. The auditor gets a clean, focused document. The orchestrator/weaver gets detailed calibration without polluting the auditor's fresh-eyes experience.

### Finding 2: Counting Is the Enemy of Perceiving

The most common anti-pattern across all 69 questions is "count how many X." Every instance where the auditor is asked to count something converts an experiential inquiry into a measurement task. The reframed versions replace "count N" with "do you feel/notice/sense X?"

### Finding 3: The Tier Structure Creates Compliance Pressure

Organizing questions into Tiers (Mandatory / Standard / Deep Dive / Void Prevention / Compositional) creates implicit priorities that bias auditor attention. The auditor spends more effort on "Mandatory" questions and less on "Standard" questions, when the page's actual weakness might be in a "Standard" area. The dimension-based reorganization treats all questions as equally important within each experiential dimension.

### Finding 4: The Best Questions Share a Structure

The strongest questions in the skill share this structure:
1. **Direct the gaze** ("Look at X," "Pick any Y," "Scroll through")
2. **Ask for experience** ("Does it feel," "Can you sense," "Would you")
3. **Offer a metaphor** ("silence in music," "doorway or lobby," "one designer or three")

Weak questions skip step 3 (offer no experiential metaphor) or replace step 2 with measurement ("count how many," "what percentage").

### Finding 5: The PA Skill's Soul Is Already Generative

The opening warning, the One Rule, the Three Laws, the Cold Look Protocol, the Language Constraint -- these are all perfectly generative. The compliance material accumulated AROUND this generative core as the pipeline grew. The rewrite should strip back to the core and protect it.
