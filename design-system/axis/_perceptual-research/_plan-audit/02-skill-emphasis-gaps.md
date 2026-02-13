# Skill Emphasis Audit: Perceptual Auditing Plan

**Auditor:** skill-auditor
**Date:** 2026-02-10
**Plan file:** `~/.claude/plans/fizzy-sparking-popcorn.md` (571 lines)
**Source of truth:** `MASTER-PERCEPTUAL-EXECUTION-PROMPT.md` (1,704 lines)
**Skill specification:** `11-final-specification.md` (1,541 lines)

---

## AUDIT RESULTS

### Questions (Items 1-4)

#### Item 1: Are the actual 28 questions LISTED in the plan with their full text?

**Rating: PARTIAL**

The plan lists question IDs (PA-01 through PA-28) and assigns them to specific auditors with brief shorthand labels (e.g., "PA-01, PA-04, PA-05, PA-18, PA-19, PA-20"). It also includes a few question texts in the agent prompt templates embedded in the plan (Section 4.10 templates for Alpha auditor show full question text for PA-01 through PA-11). However:

- The plan does NOT reproduce the full 28-question table with their complete text, dimension, and "What It Catches" column from Section 3.1 of the Master Prompt.
- For the Standalone auditors (A through D), the plan only lists IDs, not question text.
- The Adversarial questions (PA-26 through PA-28) appear in shortened form in the prompt template but not in a standalone reference table.

**What's needed:** A complete table of all 28 questions with full text, copied from Section 3.1 of the Master Prompt, should appear in the plan itself. Agents receiving only IDs like "PA-14" have no idea what to actually ASK. The plan should either (a) reproduce the full table, or (b) include the full question text inline in EVERY agent prompt section -- not just the Alpha auditor template.

---

#### Item 2: Does the plan explain what each question ASKS and WHY it matters?

**Rating: MISSING**

The plan never explains what individual questions ask or why they matter. It references them by ID only (e.g., "PA-02 word stacking" in the Bento Grid Litmus Test section) with minimal shorthand. There is no exposition of the perceptual dimension each question tests, the research provenance of each question (Appendix A of 11-final-specification.md), or the specific failure mode each was designed to catch.

**What's needed:** For each of the 28 questions, a brief (1-2 sentence) explanation of: (a) what the question is actually asking the auditor to perceive, (b) what specific failure mode it was designed to catch, and (c) why that failure mode matters in the KortAI context. This could be a condensed version of the "What It Catches" column from Section 3.1.

---

#### Item 3: Are the questions grouped by the dimension they test?

**Rating: PARTIAL**

The plan assigns questions to auditors by perceptual dimension (Impression+Emotion, Readability+Responsiveness, Spatial+Grid, Hierarchy+Coherence), which implicitly groups them. But this grouping is only visible in the auditor assignment tables (lines 172-177). The plan does not reproduce the dimensional grouping from the specification:

- Tier 1: Mandatory Five (PA-01 through PA-05)
- Tier 2 subgroups: Readability/Comfort, Spatial Balance/Weight, Visual Flow, Grid/Layout, Consistency, Color/Emotion
- Tier 3 subgroups: Responsiveness, Cross-Page, Architectural Challenge, Adversarial

**What's needed:** Include the tiered, dimensionally-grouped question table from Section 3.1 (or Section 2 of 11-final-specification.md) so the plan reader understands WHY questions are grouped this way, not just which agent gets which IDs.

---

#### Item 4: Does each auditor prompt include the ACTUAL questions they must answer?

**Rating: PARTIAL**

- The Standard Alpha prompt template (lines 843-886 of Master Prompt, reproduced at plan lines 179-186 as a reference) includes full question text for PA-01 through PA-11.
- The Standard Beta prompt is described as "Same as Alpha but questions PA-12 through PA-20" -- the actual questions are NOT written out.
- The Standalone auditor prompts (A through D) are described as "Same template structure, with these per-agent differences" listing only IDs, not question text.
- The Adversarial prompt includes PA-26 through PA-28 question text.

**What's needed:** EVERY auditor prompt must include the full question text, not just IDs. The Beta prompt must spell out PA-12 through PA-20. Each Standalone auditor (A-D) must spell out their 5-7 questions in full. An agent receiving "PA-14, PA-15, PA-17" cannot audit effectively without knowing: "Does every column have enough room for its content to breathe?", "If you trace the left edge of every content block top to bottom, how many different starting positions do you count?", "Is there a visual rhythm to the page, or does it feel random?"

---

### Protocols (Items 5-8)

#### Item 5: Is the Cold Look Protocol described step-by-step?

**Rating: PARTIAL**

The plan references the Cold Look Protocol multiple times:
- Line 182: "Cold Look Protocol (Section 3.3): 5-second look -> LOCKED reactions"
- The Alpha auditor prompt template includes Cold Look steps (Steps 2-3 in the procedure).

But the plan does NOT reproduce the full 5-step Cold Look Protocol from Section 3.3 of the Master Prompt as a standalone section. It relies on shorthand ("5-second look -> LOCKED reactions") and assumes agents will execute it correctly from brief mentions.

**What's needed:** The Cold Look Protocol should be reproduced as a standalone subsection in the plan, with all 5 steps:
1. CLEAR (close all files)
2. LOOK (5 seconds, absorb shape/color/weight)
3. REACT (write 4 locked responses: gut reaction, worst thing, best thing, ship verdict)
4. LOCK (responses are FINAL, protocol violation to modify)
5. REPEAT (independently per viewport)

Plus the output format template and the explanation of WHY locking matters (agents retroactively rationalize).

---

#### Item 6: Is the Scroll-Through Protocol described with exact implementation?

**Rating: PARTIAL**

The plan mentions scroll-through multiple times:
- Line 183: "Scroll-Through Protocol (Section 3.4): 80% viewport height scroll steps"
- The Alpha prompt template includes scroll-through steps (Steps 4 and 6).

The plan does NOT reproduce:
- The JavaScript implementation code for scroll positions
- The 5 dimension passes (Readability, Spatial Balance, Hierarchy/Flow, Consistency, Ship Test)
- The "scroll experience IS the audit" framing
- The rationale for why scroll-through trumps full-page screenshots (15,000px compression makes 130px columns invisible)

The 5 dimension passes are a CORE element of the skill -- they define WHAT the auditor looks for during each pass through the scroll-through screenshots. Without them, auditors will look at screenshots randomly instead of systematically.

**What's needed:** Reproduce the 5 dimension passes table from Section 3.4/5.4 of the Master Prompt:
1. READABILITY SCAN
2. SPATIAL BALANCE SCAN (Squint Test)
3. HIERARCHY AND FLOW SCAN
4. CONSISTENCY SCAN
5. THE SHIP TEST

Each with their "What To Watch" column.

---

#### Item 7: Is the Visual Auditing Protocol detailed enough?

**Rating: PRESENT**

The plan includes the Visual Auditing Protocol in the Alpha prompt template (Steps 1-8 at lines 856-867 of the plan), covering:
- fonts.ready wait
- animation disabling (opacity:1, animation:none, transition:none)
- 500ms layout stability wait
- Viewport screenshot
- Scroll-through process

This is adequately detailed for the Alpha auditor. However, it only appears in the Alpha template and not in the Beta/Standalone templates (which say "same structure").

**What's needed:** Ensure the protocol is explicitly stated or at minimum explicitly cross-referenced in EVERY auditor prompt, not just Alpha's. Agents don't have access to each other's prompts.

---

#### Item 8: Are the dimension-layered sweeps described?

**Rating: MISSING**

The plan never describes the dimension-layered sweep approach. Section 3.4 of the Master Prompt explicitly states: "Uses a dimension-layered approach: scan through ALL scroll-through screenshots once per dimension, not once per zone." This is the key architectural difference from the prior audit approach.

The plan mentions scroll-through but does not explain that auditors should make 5 separate passes through ALL their screenshots, one per dimension. Without this, auditors will likely look at each screenshot once and answer all questions -- which is the zone-by-zone approach the skill specifically rejects.

**What's needed:** Add a clear subsection explaining:
- Dimension-layered = scan ALL screenshots once per dimension (not once per zone)
- List the 5 passes with what to watch for each
- Emphasize: "This reveals systemic issues across the page that zone-by-zone misses"

---

### Mindset (Items 9-13)

#### Item 9: Does the plan emphasize LOOKING over CHECKING?

**Rating: PARTIAL**

The plan includes some looking-over-checking language:
- Line 7: "judged by how they LOOK to a human eye, not by checking CSS properties"
- Line 180: "The One Rule injected"
- Line 181: "Language HARD BLOCK on CSS property names"

But the plan reads predominantly as a procedural checklist ("spawn agent, verify file exists, check gate, spawn next agent"). The MINDSET of perceptual auditing -- that this is fundamentally about SEEING, not CHECKING -- is buried under procedural mechanics.

The Master Prompt opens with "React to what you see before you check what you know" and spends multiple paragraphs explaining WHY this matters (agents default to rule-checking, perceptual findings get 4% fix rate, etc.). The plan references these but doesn't EMBODY them.

**What's needed:** The plan should have a prominent "SKILL MINDSET" section near the top (before any procedural steps) that:
1. States the One Rule prominently
2. Explains what LOOKING means (emotional/perceptual response FIRST)
3. Explains what CHECKING means (rule verification, CSS scanning -- the default agents fall into)
4. Gives the 100%/4% fix rate statistic to motivate why this distinction matters
5. States clearly: "If auditors produce findings about CSS properties, the audit has FAILED. If auditors produce findings about visual experience, the audit is working."

---

#### Item 10: Is the One Rule embedded in every agent prompt?

**Rating: PARTIAL**

The One Rule ("React to what you see before you check what you know") appears in:
- The Alpha auditor prompt template (line 827 of Master Prompt, referenced at plan line 180)
- The general reference at line 180: "The One Rule injected"

But the plan does not explicitly show the One Rule being injected into:
- Beta auditor prompt (says "same as Alpha" but doesn't reproduce)
- Standalone auditor prompts A-D (says "same template structure")
- Adversarial agent prompt (which has its own different template)
- Synthesizer/Weaver prompts (where it's also relevant -- synthesizers must understand what valid perceptual language looks like)

**What's needed:** The One Rule must appear literally (not by reference) in EVERY agent prompt template. "Same as Alpha" is insufficient -- each prompt is a self-contained document given to an agent who has never seen Alpha's prompt.

---

#### Item 11: Is the Language HARD BLOCK enforced with a specific word list?

**Rating: PRESENT**

The plan includes the Language HARD BLOCK at lines 181 and in the Alpha prompt template with both the BLOCKED word list (px, rem, em, %, hex, rgb, rgba, hsl, border-radius, box-shadow, padding, margin, font-size, font-family, line-height, max-width, min-width, flex, grid, gap, opacity, z-index, overflow, display, position) and the REPLACEMENT word list (heavy, light, cramped, spacious, jarring, smooth, floating, grounded, anxious, confident, broken, polished, warm, cold, sharp, soft).

The contamination check at Gate 2 (line 202) verifies this: "Contamination spot-check (Grep for CSS property names)."

**What's needed:** Ensure the word lists appear in ALL auditor prompts, not just Alpha's. Currently only present in the Alpha template.

---

#### Item 12: Are the Three Laws of Perceptual Questions explained?

**Rating: MISSING**

The Three Laws are not mentioned anywhere in the plan:
1. The answer must require a screenshot
2. The answer must be describable in plain language
3. A non-designer must be able to validate the answer

These laws are foundational -- they define WHAT MAKES a question perceptual versus analytical. Without understanding them, agents and the lead cannot distinguish good perceptual findings from disguised rule-checking.

**What's needed:** Include the Three Laws as a reference section in the plan. They should appear:
1. As a plan-level reference section
2. In the Gate 2 contamination check criteria (Law 2 violation = CSS property names)
3. In the synthesizer/weaver prompt as validation criteria

---

#### Item 13: Does the plan distinguish between Rule Track and Perception Track findings?

**Rating: PRESENT**

The plan includes the Dual Severity Track at line 214: "Ranking (WOULD-NOT-SHIP > LOOKS-WRONG > COULD-BE-BETTER)" and references the sovereignty classification at line 216: "Sovereignty classification per finding (INVALID / VALID / VALID+ACTIONABLE / ESCALATE)".

The Synthesizer prompt template (lines 947-974) includes cross-referencing against the Lock Sheet with RULE TRACK, PERCEPTION TRACK, and NOVEL PERCEPTION classifications.

The enrichment section (lines 331-332) includes finding classification suffixes (-R for RULE, none for PERCEPTUAL, -C for CASCADE, -E for ESCALATION, -S for SOUL).

However, the plan does not reproduce the full explanation of WHY a separate Perception Track exists (Appendix D of the Master Prompt -- the ~4% fix rate data) or the critical rules (cannot be reclassified, cannot be dismissed because convention allows it, can exist on both tracks).

**What's needed:** Add the 4 Critical Rules of the Dual Track from Section 3.7 of the Master Prompt:
1. Perception Track findings can NEVER be reclassified onto the Rule Track
2. Cannot be dismissed because "the convention allows it"
3. A finding can exist on BOTH tracks simultaneously
4. When convention and perception conflict, escalate to human

---

### Anti-Patterns (Items 14-16)

#### Item 14: Are all 23 anti-patterns listed by name and description?

**Rating: MISSING**

The plan mentions anti-patterns in the verification matrix (line 57: "23 across 7 categories (AP-01 to AP-23)") and at Gate 2 contamination check. But it never lists ANY anti-pattern by name, ID, or description.

The 23 anti-patterns are the skill's IMMUNE SYSTEM -- they define how agents fail at perceptual auditing. Without knowing what AP-01 (Analytical Escape) or AP-23 (Thumbnail-Scale Blindness) look like, neither the lead nor the agents can detect when the audit is failing.

**What's needed:** Include the full anti-pattern taxonomy from Section 3.8 of the Master Prompt (or Section 8 of 11-final-specification.md). At minimum, list all 23 by ID, name, and "The Tell" (the diagnostic signal). The full table is 23 rows -- it's compact enough to include.

---

#### Item 15: Are the most critical anti-patterns embedded in agent prompts?

**Rating: MISSING**

No anti-patterns are embedded in any agent prompt in the plan. The Alpha auditor prompt template includes the language HARD BLOCK (which addresses AP-04) but does not name it as an anti-pattern or warn about others.

The most critical anti-patterns for visual auditors are:
- AP-01 (Analytical Escape) -- first action after screenshot is reading source code
- AP-04 (Property-Name Answers) -- CSS property names in answers
- AP-16 (Finding-Without-Looking) -- findings match prompt verbatim, not actual page
- AP-23 (Thumbnail-Scale Blindness) -- evaluating from full-page screenshot instead of scroll-through

For the Synthesizer/Weaver:
- AP-08 (Convention Worship) -- convention cited as proof despite visual evidence
- AP-19 (Research Suppression) -- valid perception dismissed because convention allows it

**What's needed:** Embed the 3-5 most relevant anti-patterns as explicit warnings in each agent prompt. Example for auditor prompts:

```
WARNING -- These are the ways this audit fails:
- ANALYTICAL ESCAPE (AP-01): If your first action after a screenshot is
  reading a source file, you've failed. LOOK first, always.
- THUMBNAIL-SCALE BLINDNESS (AP-23): Never evaluate from a full-page
  screenshot. Scroll through at viewport scale. A 130px column looks
  "fine" at thumbnail size but catastrophic at real scale.
- FINDING-WITHOUT-LOOKING (AP-16): If your findings match the prompt
  questions verbatim but don't describe what you actually see on THIS
  page, you're fabricating, not perceiving.
```

---

#### Item 16: Is AP-23 (Thumbnail-Scale Blindness) specifically addressed?

**Rating: PARTIAL**

The plan implicitly addresses AP-23 through the scroll-through requirement ("80% viewport height scroll steps" at line 183, fullPage: false). The Alpha prompt says "scroll the entire page section by section" and "Take viewport-sized screenshot at each scroll position."

But AP-23 is never named, never explained as an anti-pattern, and the specific failure mode (evaluating from a full-page compressed screenshot) is never warned against. Agents who don't understand WHY they're scrolling may take a fullPage:true screenshot "for reference" and base their evaluation on it.

**What's needed:** AP-23 should be explicitly named and explained in every auditor prompt, with the specific instruction: "NEVER use fullPage: true. NEVER evaluate from a compressed full-page image. Every finding must reference a specific scroll position screenshot."

---

### Templates (Items 17-19)

#### Item 17: Are the ACTUAL prompt templates from Section 4.10 included?

**Rating: PARTIAL**

The plan includes:
- Research Contextualizer prompt (paraphrased, not exact -- plan at lines 148-165 references "Uses Research Contextualizer Prompt from Section 4.10" but doesn't reproduce it; however, the Master Prompt Section 4.10 template IS detailed)
- Alpha auditor prompt (referenced at line 179: "All Visual Auditor prompts use the exact template from Section 4.10")
- Adversarial agent prompt (referenced at line 200)
- Synthesizer prompt (referenced at line 206)

The plan says these templates will be used but does not INCLUDE them inline. It references Section 4.10 of the Master Prompt.

**What's needed:** Either (a) include the templates inline in the plan, or (b) be EXTREMELY explicit that the templates from Section 4.10 must be copied VERBATIM into the agent spawn prompts, with no paraphrasing, no shortening, and no "same as Alpha" shortcuts. Currently the plan's stance is ambiguous -- it says "uses exact template" but the lead executing the plan will need to know WHERE to find these templates and WHICH version to use (11-final-specification.md Section 10, or Master Prompt Section 4.10).

---

#### Item 18: Or does the plan just say "uses template from Section 4.10"?

**Rating: YES -- This is the current approach**

The plan predominantly uses references rather than inclusions:
- Line 163: "Uses Research Contextualizer Prompt from Section 4.10 (exact template, no paraphrase)."
- Line 179: "All Visual Auditor prompts use the exact template from Section 4.10"
- Line 200: "Adversarial uses Adversarial Agent Prompt from Section 4.10"
- Line 206: "Uses Weaver-Synthesizer Prompt from Section 4.10"
- Line 240: "Uses Visual Auditor Alpha/Beta Prompts and Synthesizer-Validator Prompt from Section 4.10"

This is a REFERENCE, not an INCLUSION. The executing lead must read the Master Prompt to find these templates. This creates a dependency chain: plan -> Master Prompt -> template. If the lead doesn't read the Master Prompt (or if context is compacted), the templates are lost.

**What's needed:** The plan should be self-contained. Include the full templates inline, or include a "TEMPLATES APPENDIX" at the end of the plan with all templates verbatim. The plan currently says it absorbed the Master Prompt, but the templates -- the most critical operational artifact -- are the one thing it didn't absorb.

---

#### Item 19: Are the calibration examples (good vs bad answers) included?

**Rating: MISSING**

The plan does not include any calibration examples. The Master Prompt Section 8.5 and 11-final-specification.md Appendix B both provide:
- Good Cold Look example (perceptual, immediate, visceral)
- Bad Cold Look example (analytical, technical, could be written without seeing the page)
- Good Zone Sweep Finding example (plain language readability concern)
- Bad Zone Sweep Finding example (CSS-property-laden technical description)

These examples are the CALIBRATION INSTRUMENT. Without them, agents have no reference for what "good" perceptual answers look like versus what "bad" analytical answers look like. The Language HARD BLOCK tells them what words to avoid, but the calibration examples show them what to AIM FOR.

**What's needed:** Include at minimum the 4 calibration examples (2 Cold Look + 2 Zone Sweep) from Appendix B of 11-final-specification.md / Section 8.5 of the Master Prompt. These should appear in:
1. The plan itself (as a reference section)
2. Every auditor prompt (ideally as "Example good answer" / "Example bad answer")

---

### Sovereignty (Items 20-22)

#### Item 20: Is the Lock Sheet format detailed enough?

**Rating: PRESENT**

The plan describes the Lock Sheet format at line 165: "Lock Sheet file exists with ALWAYS-LOCKED, LOCKED, CHALLENGEABLE, PREVIOUS FINDINGS sections. Under 200 lines." The Research Contextualizer prompt template in the Master Prompt (referenced by the plan) includes the full Lock Sheet structure with column headers.

The plan also specifies what the contextualizer reads (lines 149-159) and the gate verification criteria (line 165).

**What's needed:** Minor improvement -- include the actual Lock Sheet format template inline in the plan rather than relying on the Master Prompt reference. The format is compact (~20 lines) and is the critical output of Wave 1.

---

#### Item 21: Is the Temporal Firewall explained?

**Rating: PARTIAL**

The plan references the temporal firewall at line 185: "MUST NOT read lock-sheet.md (information isolation, Section 4.6)." This is the MECHANISM but not the EXPLANATION.

The plan does not explain WHY auditors cannot see the Lock Sheet (the cognitive conflict between "I see a problem" and "the research says it's correct"), or what happens when agents encounter research context (they retroactively rationalize, weakening perceptual findings).

**What's needed:** A brief (3-5 sentence) explanation of WHY the temporal firewall exists, not just that it exists. Include:
- Agents retroactively rationalize perceptual findings when they encounter rule compliance
- The Cold Look and all PA findings must be LOCKED before any research context
- Reading the Lock Sheet before completing perceptual work is a PROTOCOL VIOLATION that invalidates the audit
- This is AP-21 (Temporal Firewall Breach) and AP-22 (Post-Lock Revision)

---

#### Item 22: Are the sovereignty classification categories explained?

**Rating: PRESENT**

The plan includes sovereignty classification in the Synthesizer task list (lines 216): "Sovereignty classification per finding (INVALID / VALID / VALID+ACTIONABLE / ESCALATE)." The Synthesizer prompt template (referenced from Section 4.10) includes the full classification tree:
- Targets locked DECISION -> INVALID
- Targets locked EXECUTION -> VALID
- Targets CHALLENGEABLE -> VALID and ACTIONABLE
- Genuine conflict -> ESCALATE

**What's needed:** Minor -- the classification tree is present in the referenced template but not in the plan body itself. Consider reproducing it inline in the plan's synthesis section for lead reference.

---

## CRITICAL ADDITIONS: TOP 10

These are the 10 most important things to add to the revised plan, ranked by impact on audit quality:

### 1. FULL QUESTION TEXT IN EVERY AGENT PROMPT (Items 1, 4)

**Impact:** Without full question text, agents cannot audit. This is the single highest-impact gap.

Every agent prompt must include the FULL TEXT of their assigned questions, not just IDs. Example for Standalone Auditor C:

```
YOUR ASSIGNED QUESTIONS (for 1440px, 1024px, AND 768px):

PA-09: Is there dead space that serves no purpose -- a screen-sized
       void with nothing in it?
       CATCHES: Viewport-scale dead zone, meaningless emptiness

PA-10: If you squint until you can't read any text, does the layout
       still look balanced?
       CATCHES: Macro composition failure, top-heavy pages, lopsided grids

PA-11: Are the margins generous (confident spacing) or anxious
       (clutching or pushing away)?
       CATCHES: Spacing psychology, inconsistent rhythm, mechanical rigidity

PA-14: Does every column have enough room for its content to breathe?
       CATCHES: Content-container misfit across all grid cells

PA-15: If you trace the left edge of every content block top to bottom,
       how many different starting positions do you count?
       CATCHES: Alignment scatter, staircase margins, jittery edges

PA-17: Is there a visual rhythm to the page (like a beat in music),
       or does it feel random?
       CATCHES: Arrhythmic section sequencing, unpredictable density alternation
```

### 2. THE 5 DIMENSION PASSES (Scroll-Through Protocol) (Items 6, 8)

**Impact:** Without the 5 dimension passes, auditors will scan screenshots randomly instead of systematically. This is the METHODOLOGY of the audit.

Add this as a standalone section:

```
SCROLL-THROUGH: THE 5 DIMENSION PASSES

After Cold Look, scroll through the ENTIRE page. For each pass, review
ALL scroll-through screenshots looking for ONE dimension only:

PASS 1 -- READABILITY: Word stacking, squinting, lines too wide, text
  squeezed against edges. Could you read this for 10 minutes?

PASS 2 -- SPATIAL BALANCE (Squint Test): Blur vision. Only shapes and
  weight. Dead space? Jarring jumps? Heavy/light? Margins generous or anxious?

PASS 3 -- HIERARCHY & FLOW: Content flow between positions. Focal points.
  Section transitions. Narrative momentum or disconnected slides?

PASS 4 -- CONSISTENCY: Identical elements across positions match? Visual
  rhythm? Gray family? Dialect shifts as you scroll?

PASS 5 -- SHIP TEST: Senior designer. Fix with 10 more minutes? Next to
  Stripe, proud or embarrassed? Any scroll position where you winced?
```

### 3. CALIBRATION EXAMPLES (Good vs Bad Answers) (Item 19)

**Impact:** Without calibration, agents have no reference for what "good" perceptual language looks like. The Language HARD BLOCK tells them what to AVOID but not what to AIM FOR.

Include all 4 examples from Section 8.5/Appendix B:
- Good Cold Look (perceptual)
- Bad Cold Look (analytical)
- Good Zone Sweep Finding (plain language)
- Bad Zone Sweep Finding (CSS-laden)

These should appear in EVERY auditor prompt as calibration anchors.

### 4. ANTI-PATTERN WARNINGS IN AGENT PROMPTS (Items 14, 15, 16)

**Impact:** The anti-patterns are the skill's immune system. Without them embedded in prompts, agents will fall into AP-01 (Analytical Escape), AP-23 (Thumbnail-Scale Blindness), and AP-16 (Finding-Without-Looking) because those are the DEFAULT behaviors for Claude agents.

Add to every auditor prompt:

```
ANTI-PATTERN WARNINGS -- These are how this audit fails:

AP-01 ANALYTICAL ESCAPE: If your first action after a screenshot is
  opening a source file, you've failed. LOOK first.

AP-04 PROPERTY-NAME ANSWERS: If your answer contains ANY CSS property
  name (px, margin, flex, opacity), rewrite it in human words.

AP-16 FINDING-WITHOUT-LOOKING: If your findings could describe ANY page
  (not specifically THIS page), you're fabricating, not perceiving.

AP-23 THUMBNAIL-SCALE BLINDNESS: NEVER evaluate from a full-page
  screenshot. Always scroll-through at viewport scale. A crushed column
  looks "fine" at thumbnail size but catastrophic at real size.
```

Add to synthesizer/weaver prompts:

```
AP-08 CONVENTION WORSHIP: A convention cited as proof of correctness
  despite visual evidence is a SOVEREIGNTY VIOLATION. Convention describes
  WHAT. Perception judges HOW IT LOOKS.

AP-19 RESEARCH SUPPRESSION: If you dismiss a valid perception because
  "the convention allows it," you are suppressing perception. The
  convention is not a shield.
```

### 5. SKILL MINDSET SECTION (Item 9)

**Impact:** The plan reads like a procedural dispatch manual. It should open with the MINDSET that distinguishes perceptual auditing from every prior audit.

Add a "SKILL MINDSET" section immediately after the Context section:

```
## Skill Mindset: LOOKING, Not CHECKING

This audit is fundamentally different from every prior audit in this project.
Prior audits achieved ~100% fix rate for rule-based findings and ~4% fix rate
for perceptual findings. A page can pass every CSS check and still look wrong.
This skill closes that gap.

THE ONE RULE: "React to what you see before you check what you know."

If an agent's first action after taking a screenshot is opening a CSS file,
the skill has failed. If an agent's first action is describing what they SEE
and FEEL, the skill is working.

THE THREE LAWS:
1. Every answer must REQUIRE a screenshot (if answerable from source, it's not perceptual)
2. Every answer must use PLAIN LANGUAGE (no CSS properties, no pixel values)
3. A non-designer must be able to VALIDATE the answer

WHAT SUCCESS LOOKS LIKE:
"The narrow column on the left where text is stacking vertically -- it
looks like a bookmark, not a content area."

WHAT FAILURE LOOKS LIKE:
"Column 4 in the bento grid has a computed width of 130px. At 16px
font-size, this yields approximately 8 characters per line."

The bad example could be written without seeing the page.
```

### 6. THREE LAWS OF PERCEPTUAL QUESTIONS (Item 12)

**Impact:** Without the Three Laws, there is no framework for evaluating whether a question has been answered perceptually or analytically.

Include in plan body and in Gate 2 contamination check criteria.

### 7. COLD LOOK PROTOCOL AS STANDALONE SECTION (Item 5)

**Impact:** The Cold Look is the closest an agent gets to a user's first impression. It's the foundation of every audit. Currently it's embedded in one prompt template and mentioned in shorthand elsewhere.

Reproduce the full 5-step protocol with output format template as a standalone plan section.

### 8. TEMPORAL FIREWALL EXPLANATION (Item 21)

**Impact:** Without understanding WHY auditors cannot see the Lock Sheet, the lead may not enforce the barrier strictly, or may allow "just a peek" that contaminates the entire audit.

Add 3-5 sentences explaining the cognitive mechanism: agents retroactively rationalize perceptual findings when they encounter rule compliance. Lock the findings BEFORE introducing any research context.

### 9. DUAL TRACK CRITICAL RULES (Item 13)

**Impact:** Without the 4 Critical Rules, synthesizers may dismiss perception findings using conventions as shields (the exact failure mode the Perception Track was designed to prevent).

Add the 4 rules:
1. Cannot reclassify Perception to Rule Track
2. Cannot dismiss because convention allows it
3. Can exist on BOTH tracks simultaneously
4. When convention and perception conflict, escalate

### 10. SELF-CONTAINED TEMPLATES (Items 17, 18)

**Impact:** The plan says "uses template from Section 4.10" in 5+ places. This creates a dependency on the Master Prompt being available in context. If the lead's context is compacted, or if the Master Prompt is too long to re-read mid-execution, the templates are lost.

Either include all templates inline or add a TEMPLATES APPENDIX to the plan.

---

## SUMMARY SCORECARD

| # | Item | Rating | Severity |
|---|------|--------|----------|
| 1 | Full 28 questions listed? | PARTIAL | HIGH |
| 2 | Questions explained (what + why)? | MISSING | MEDIUM |
| 3 | Questions grouped by dimension? | PARTIAL | LOW |
| 4 | Full question text in agent prompts? | PARTIAL | CRITICAL |
| 5 | Cold Look Protocol step-by-step? | PARTIAL | HIGH |
| 6 | Scroll-Through Protocol with implementation? | PARTIAL | HIGH |
| 7 | Visual Auditing Protocol detailed? | PRESENT | -- |
| 8 | Dimension-layered sweeps described? | MISSING | HIGH |
| 9 | LOOKING over CHECKING emphasis? | PARTIAL | CRITICAL |
| 10 | One Rule in every prompt? | PARTIAL | HIGH |
| 11 | Language HARD BLOCK with word lists? | PRESENT | -- |
| 12 | Three Laws explained? | MISSING | HIGH |
| 13 | Rule Track vs Perception Track? | PRESENT | LOW |
| 14 | All 23 anti-patterns listed? | MISSING | HIGH |
| 15 | Critical anti-patterns in prompts? | MISSING | CRITICAL |
| 16 | AP-23 specifically addressed? | PARTIAL | HIGH |
| 17 | Actual prompt templates included? | PARTIAL | HIGH |
| 18 | Templates referenced vs included? | REFERENCE ONLY | HIGH |
| 19 | Calibration examples included? | MISSING | CRITICAL |
| 20 | Lock Sheet format detailed? | PRESENT | -- |
| 21 | Temporal Firewall explained? | PARTIAL | MEDIUM |
| 22 | Sovereignty categories explained? | PRESENT | -- |

**Ratings Distribution:**
- PRESENT: 5 items (23%)
- PARTIAL: 10 items (45%)
- MISSING: 7 items (32%)

**Severity of gaps:**
- CRITICAL: 4 items (full question text in prompts, LOOKING mindset, anti-patterns in prompts, calibration examples)
- HIGH: 9 items
- MEDIUM: 2 items
- LOW: 2 items

---

## OVERALL ASSESSMENT

The plan is an excellent PROCEDURAL document -- it correctly sequences waves, manages Playwright contention, defines gate checks, and structures enrichment/cascade flows. But it treats the Perceptual Auditing skill as a MECHANISM to be dispatched rather than a MINDSET to be instilled.

The plan's fundamental gap: it assumes agents will know HOW to do perceptual auditing from brief references ("uses Cold Look Protocol", "answers PA-01 through PA-11"). But agents don't carry forward knowledge from reference IDs. They need the ACTUAL CONTENT: the full question text, the dimension passes, the calibration examples, and the anti-pattern warnings.

The Master Prompt spends ~600 lines defining the skill itself (Sections 1, 3, and 8). The plan spends ~30 lines referencing it. That 20:1 compression ratio means 95% of the skill's substance is lost.

The revised plan should grow by approximately 200-300 lines to include: full question text in agent prompts, the 5 dimension passes, calibration examples, anti-pattern warnings, the Three Laws, the Cold Look Protocol as a standalone section, and a SKILL MINDSET opening section. This is a modest cost for ensuring the skill is actually EXECUTED rather than merely INVOKED.
