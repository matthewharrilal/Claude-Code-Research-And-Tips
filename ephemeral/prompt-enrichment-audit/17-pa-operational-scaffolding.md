# PA Operational Scaffolding: Mode 4 for Flagship Experiment

**Author:** PA-OPERATIONS-SPECIALIST
**Date:** 2026-02-17
**Purpose:** Exhaustive operational guide for 9 PA auditors executing Mode 4 Standalone in the flagship experiment. Any agent reading this knows EXACTLY what to do, in what order, with what tools, producing what output.
**Source Material:** PA SKILL.md (847 lines), AUDIT-REPORT.md (Mode 4 ceiling), 01-pa-lessons-for-build.md, 15-perceptual-hierarchy.md, 03-spatial-confidence-gate.md, 00-PROMPT-STRUCTURE-OUTLINE.md

---

## SECTION 1: AUDITOR ASSIGNMENT MATRIX (Load-Balanced)

### Overview

9 auditors cover 48 PA questions across 9 perceptual dimensions. Each auditor owns ONE dimension, answers a specific set of questions, and writes findings to ONE file. All auditors execute in PARALLEL after receiving pre-captured screenshots. No auditor touches Playwright.

### Assignment Table

| Auditor | Dimension | PA Questions | Count | Priority | Expected Time | Output File |
|---------|-----------|-------------|-------|----------|--------------|-------------|
| **A** | Impression+Emotion | PA-01, PA-04, PA-05, PA-18, PA-19, PA-20, PA-45 | 7 | HIGH (PA-05 composite) | 20-25 min | `findings-impression-emotion.md` |
| **B** | Readability+Typography | PA-02, PA-06, PA-07, PA-08, PA-29 | 5 | MEDIUM | 12-15 min | `findings-readability-typography.md` |
| **C** | Spatial+Proportion | PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-52, PA-53 | 11 | **HIGHEST** | 25-30 min | `findings-spatial-proportion.md` |
| **D** | Flow+Pacing | PA-12, PA-13, PA-34, PA-35, PA-36 | 5 | HIGH | 15-20 min | `findings-flow-pacing.md` |
| **E** | Grid+Layout | PA-14, PA-15, PA-37, PA-38, PA-39 | 5 | MEDIUM | 12-15 min | `findings-grid-layout.md` |
| **F** | Consistency+Rhythm | PA-16, PA-17, PA-40, PA-41 | 4 | **HIGH** (PA-17, PA-41 elevated to Tier 1 for Flagship) | 15-20 min | `findings-consistency-rhythm.md` |
| **G** | Metaphor+Ideology | PA-42, PA-43, PA-44 | 3 | MEDIUM-HIGH | 12-15 min | `findings-metaphor-ideology.md` |
| **H** | Responsive | PA-21, PA-22, PA-23, PA-46, PA-47 | 5 | MEDIUM | 15-20 min | `findings-responsive.md` |
| **ADV** | Adversarial | PA-26, PA-27, PA-28, PA-48 | 4 | HIGH | 15-20 min | `findings-adversarial.md` |

**Total:** 49 question-assignments across 9 auditors (PA-17 and PA-41 are assigned to Auditor F but ALL auditors must also note rhythm/monotony observations per Ceiling+ elevation rule).

### Per-Auditor Screenshot Dependencies

| Auditor | Required Screenshots | Why |
|---------|---------------------|-----|
| **A** | 1440 cold look, 768 cold look, 1024 cold look | Impression requires fresh-eyes cold look at all 3 viewports |
| **B** | 1440 scroll-through (ALL frames), 768 scroll-through (ALL frames) | Readability must be checked at viewport scale, every section |
| **C** | 1440 cold look, 1440 full-page, 768 full-page, 1440 scroll-through (ALL frames), 768 scroll-through (ALL frames) | Spatial needs macro (full-page squint) AND micro (scroll-through) at both viewports |
| **D** | 1440 scroll-through (ALL frames), 768 scroll-through (ALL frames) | Flow requires sequential scroll-through to detect pacing |
| **E** | 1440 scroll-through (ALL frames), 768 scroll-through (ALL frames) | Grid/layout checks require viewport-scale examination of each section |
| **F** | 1440 scroll-through (ALL frames), 768 scroll-through (ALL frames) | Rhythm requires seeing ALL transitions in sequence |
| **G** | 1440 cold look, 1440 scroll-through (ALL frames) | Metaphor assessment needs cold first impression + full structural scan |
| **H** | 1440 cold look, 768 cold look, 1024 cold look, 768 scroll-through (ALL frames), 1024 scroll-through (frames 1-10) | Responsive needs all viewport cold looks + narrow viewport scroll-through |
| **ADV** | 1440 cold look, 768 cold look, 1440 scroll-through (ALL frames), Lock Sheet (CHALLENGEABLE section ONLY) | Adversarial needs both viewports + access to challengeable conventions |

### Per-Auditor Finding Template

Every auditor MUST use this template for EACH finding:

```markdown
### Finding [AUDITOR-LETTER]-[SEQUENCE-NUMBER]

**PA Question:** PA-[XX]
**Viewport:** [1440 / 768 / 1024 / ALL]
**Severity:** [CATASTROPHIC / WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER / PASS]

**What I See:**
[Plain language description. NO CSS property names. Use: heavy, light, cramped, spacious, jarring, smooth, floating, grounded, anxious, confident, broken, polished, warm, cold, sharp, soft, cluttered, breathing, stacking, flowing, stuck, drifting.]

**What's Wrong:**
[Why this matters to the viewer's experience]

**What Would Fix It:**
[Direction for improvement, NOT specific CSS changes]

**Gate Impact:** [GATE FAIL / PREFERENCE / NOT A GATE ISSUE]
```

---

## SECTION 2: PER-AUDITOR INSTRUCTION SHEETS

### Auditor A: Impression+Emotion

**Dimension:** First impressions, emotional response, design quality assessment, color warmth, visual coherence, design highlights.

**Files to Read:**
- Pre-captured screenshots ONLY (paths provided by team lead)
- NO source files, NO CSS, NO build plan, NO mechanism list, NO prior audit results

**Temporal Firewall -- DO NOT READ:**
- Lock sheet (until after ALL answers are locked)
- Any `.css`, `.html`, or `.md` files from the build
- Prior experiment results or audit reports
- Mechanism catalog, tier model, or tension skill output

**Execution Sequence:**

1. **Cold Look Protocol (3 viewports, ~5 min)**
   - Open 1440px cold look screenshot. DO NOT read text. Absorb shape, color, weight for 5 seconds.
   - Write Cold Look response (LOCKED FOREVER):
     ```
     COLD LOOK (1440px):
     Gut reaction: [one sentence]
     Worst thing: [one element or area]
     Best thing: [one element]
     Ship verdict: YES / YES WITH RESERVATIONS / NO
     ```
   - Repeat independently for 768px cold look screenshot
   - Repeat independently for 1024px cold look screenshot
   - Total: 3 cold looks, responses FINAL after writing

2. **PA-01: What's the first thing that bothers you?** (~3 min)
   - Return to 1440px cold look. What catches your attention negatively?
   - Then check 768px. Same or different?
   - Write finding using template.

3. **PA-04: Where does your eye go first? Is that where it SHOULD go?** (~3 min)
   - Fresh look at 1440px cold look. Track your actual eye path for 3 seconds.
   - Describe: "My eye went to [X] first, then [Y], then [Z]."
   - Assess: "It SHOULD go to [X] first because [reason]."
   - Write finding.

4. **PA-05: Would you put your name on this?** (~8 min)
   - This is the COMPOSITE question. Evaluate ALL FOUR sub-criteria:

   **PA-05a DESIGNED:** Does this feel like intentional composition, or assembled components?
   - Look for: multi-scale coherence, rhythm variation, focal points placed deliberately
   - PASS: "A designer made choices for THIS content"
   - FAIL: "Someone competent followed a template"

   **PA-05b COHERENT:** Does this feel like one designer made it?
   - Look for: consistent mechanism deployment, no dialect shifts, shared visual language
   - PASS: "Same design intent across entire page"
   - FAIL: "Header looks different from body which looks different from footer"

   **PA-05c PROPORTIONATE:** Does the spatial balance feel considered?
   - Evaluate ALL THREE sub-dimensions separately (Flagship = Ceiling+ audit):
     - **3a Horizontal Proportion:** Does container width use viewport effectively? PASS: 65-80%. FAIL: <65% or >85%.
     - **3b Vertical Proportion:** Is visual weight distributed across full scroll depth? PASS: every third has at least one designed moment. FAIL: all weight in first third.
     - **3c Breathing Proportion:** Is negative space designed or abandoned? PASS: silence in music. FAIL: dropped signal.
   - ALL THREE sub-dimensions must PASS for PA-05c to PASS.

   **PA-05d POLISHED:** Is execution quality high?
   - Look for: missing elements (footer?), token compliance, typed transitions, no visual artifacts
   - PASS: "Ready to ship as-is"
   - FAIL: "Needs cleanup before showing anyone"

   **Score:** X/4 sub-criteria PASS.
   - 4/4 = YES (ship-ready)
   - 3/4 = YES WITH RESERVATIONS
   - 2/4 or fewer = NO (would not ship)

5. **PA-18: Do all the grays/neutrals feel like the same family?** (~2 min)
   - Scan 1440px scroll-through screenshots. Look for color temperature shifts.
   - Write finding.

6. **PA-19: Is there any element that feels like it's from a different website?** (~2 min)
   - Scan through all 1440px screenshots. Look for visual intruders.
   - Write finding.

7. **PA-20: Describe this page's personality in three words. Does it match intent?** (~2 min)
   - Target personality for flagship: "Warm. Authoritative. Unhurried."
   - What three words ACTUALLY describe what you see?
   - Match assessment: X/3 words align.

8. **PA-45: Is there a single moment you would show someone as an example of good design?** (~2 min)
   - Scan all screenshots. Can you point to ONE moment?
   - If YES: describe it, explain why.
   - If NO: this is a SIGNIFICANT finding (mediocrity detection).

9. **PA-17 + PA-41 observation (Ceiling+ elevation, mandatory)** (~2 min)
   - While scanning, note any rhythm or monotony observations.
   - These supplement Auditor F's primary assessment.

10. **Write findings file** (~3 min)
    - Write ALL findings to `findings-impression-emotion.md`
    - Include cold looks, all PA answers, PA-05 composite score
    - Use the finding template for each finding

---

### Auditor B: Readability+Typography

**Dimension:** Text comfort, line stacking, paragraph tracking, font size, typographic hierarchy, header text competition.

**Files to Read:** Pre-captured screenshots ONLY.

**Temporal Firewall -- DO NOT READ:** Lock sheet, source files, build plan, prior audits, mechanism catalog.

**Execution Sequence:**

1. **Cold Look Protocol (1440px + 768px, ~3 min)**
   - Cold look at 1440px, then 768px. Write locked responses.

2. **PA-02: Is any text uncomfortable to read? Point to the worst spot.** (~3 min)
   - Examine EVERY scroll-through frame at 1440px. For each:
     - Can you comfortably read all text?
     - Any narrow columns forcing uncomfortable line breaks?
     - Any text too small or low-contrast?
   - Repeat at 768px.
   - If found: describe the worst spot in perceptual terms (cramped, squinting, losing place).

3. **PA-06: Are any words stacking vertically, one per line, in any column?** (~3 min)
   - This is the canonical bento-grid failure detector.
   - Examine ALL grid/multi-column layouts at 1440px and 768px.
   - Look for columns where every word sits on its own line.

4. **PA-07: Can you read the longest paragraph without losing your place?** (~2 min)
   - Find the longest continuous paragraph on the page.
   - At 1440px: can your eyes track from line end to next line start?
   - At 768px: same check.
   - If line tracking is difficult, note the approximate location.

5. **PA-08: Is there any text you have to lean in or squint to read?** (~2 min)
   - Check: diagram labels, footer text, metadata, sidebar text, code comments.
   - Anything below comfortable reading size?

6. **PA-29: In the header area, count how many different text styles you see. Are more than three fighting for attention?** (~3 min)
   - Examine ONLY the first viewport (header area) at 1440px.
   - Count: how many distinct text styles (size, weight, family, color)?
   - Are they fighting or harmonizing?

7. **PA-17 + PA-41 observation (mandatory Ceiling+ elevation)** (~2 min)
   - Note any rhythm/monotony observations while examining text.

8. **Write findings file** to `findings-readability-typography.md`

---

### Auditor C: Spatial+Proportion (HIGHEST PRIORITY)

**Dimension:** Dead space, macro composition, margin psychology, horizontal utilization, negative space quality, visual weight distribution, void quantification. THIS DIMENSION FOUND 100% OF BLOCKING ISSUES IN THE CEILING EXPERIMENT.

**Files to Read:** Pre-captured screenshots ONLY.

**Temporal Firewall -- DO NOT READ:** Lock sheet, source files, build plan, prior audits, mechanism catalog, spatial confidence gate results.

**Execution Sequence:**

1. **Cold Look Protocol (1440px + 768px, ~3 min)**
   - Write locked responses for both viewports.

2. **PA-09: Is there dead space that serves no purpose?** (~5 min)
   - **CRITICAL:** Apply PA-09 Severity Calibration (MANDATORY for Flagship):
     - 1-2 viewport-heights of low-content space = LOOKS-WRONG
     - 3-5 viewport-heights of low-content space = WOULD-NOT-SHIP
     - 6+ viewport-heights of low-content space = CATASTROPHIC
   - Measurement method: Count scroll-through frames where content coverage is below 30%. How many CONSECUTIVE blank frames?
   - Low-content = less than 30% of the viewport has actual content.

3. **PA-50: Count full viewport-height scroll positions where less than 30% of screen contains actual content. How many CONSECUTIVE blank viewports exist?** (~4 min)
   - Go through EVERY scroll-through frame at 1440px.
   - For each frame: estimate content coverage percentage.
   - Count: how many frames have <30% content?
   - Count: what is the longest RUN of consecutive <30% frames?
   - This is the single most important void metric.

4. **PA-51: What percentage of total page scroll height contains meaningful content vs empty space?** (~3 min)
   - Estimate overall: 80%+ (dense), 60-80% (balanced), 40-60% (sparse), below 40% (void-dominated)?
   - Use the scroll-through frame count: content frames / total frames.

5. **PA-52: Divide the page into thirds by scroll depth. Does each third have at least one designed moment?** (~3 min)
   - Divide scroll-through frames into 3 equal groups (top/middle/bottom thirds).
   - For EACH third: is there at least ONE section with unique visual treatment, 3+ visual elements, or a visual peak?
   - Mark: TOP [YES/NO], MIDDLE [YES/NO], BOTTOM [YES/NO].
   - If any third = NO, this is a FAIL finding.

6. **PA-53: At 1440px, does the content container use 65-80% of the available horizontal space?** (~2 min)
   - Look at the 1440px cold look. Estimate: what percentage of horizontal space does content actively use?
   - 65-80% = PASS. Below 65% = narrow strip. Above 85% = cramped.

7. **PA-10: Squint until you can't read text. Does the layout look balanced?** (~2 min)
   - Look at 1440px full-page screenshot at arm's length (or squint).
   - Is visual weight distributed, or concentrated in one area?
   - Repeat at 768px full-page.

8. **PA-11: Are the margins generous (confident) or anxious (clutching)?** (~2 min)
   - At 1440px: do margins feel spacious and intentional, or nervous and wasted?
   - At 768px: same assessment.

9. **PA-30: At 1440px, does the layout feel DESIGNED for this width?** (~2 min)
   - Or does it feel like a narrower design centered in extra space?
   - Does the full width participate in the composition?

10. **PA-31: Cover the content. Does the surrounding space feel designed or leftover?** (~2 min)
    - Mentally ignore the content column. Look ONLY at the flanking space.
    - Does that space have SHAPE (designed frame) or FORMLESSNESS (leftover void)?

11. **PA-32: Squint at full page. Is visual weight distributed purposefully across scroll, or concentrated in one zone?** (~2 min)
    - Look at 1440px full-page screenshot squinted.
    - Where are the dark/dense areas? Are they spread across the page or clustered at the top?

12. **PA-33: Pick the largest area of empty space. Does it feel like silence in music or a dropped signal?** (~2 min)
    - Find the biggest gap. Is it purposeful tension-building (musical silence) or accidental momentum-killing (dropped signal)?

13. **PA-17 + PA-41 observation (mandatory Ceiling+ elevation)** (~2 min)
    - Note any rhythm/monotony observations during spatial scan.

14. **Write findings file** to `findings-spatial-proportion.md`
    - This file is expected to be the LONGEST and most detailed of all 9 auditor reports.

---

### Auditor D: Flow+Pacing

**Dimension:** Visual flow continuity, section transitions, narrative momentum, interest curve, dramatic moment placement.

**Files to Read:** Pre-captured screenshots ONLY.

**Temporal Firewall -- DO NOT READ:** Lock sheet, source files, build plan, prior audits.

**Execution Sequence:**

1. **Cold Look Protocol (1440px + 768px, ~3 min)**

2. **PA-12: Do your eyes flow smoothly from section to section?** (~3 min)
   - Go through 1440px scroll-through frames IN ORDER.
   - At each transition between sections: does the eye flow naturally, or hit a wall?
   - Note each transition quality: SMOOTH / JARRING / VOID-GAP / DESIGNED-MOMENT.

3. **PA-13: Is there a clear visual ending, or does the page just stop?** (~2 min)
   - Go to the LAST 3 scroll-through frames.
   - Is there a footer with visual weight that signals "journey complete"?
   - Or does the page trail off into nothing?

4. **PA-34: Pick the transition between any two major sections. Is it a DESIGNED moment or just empty space?** (~3 min)
   - For EACH section transition visible in scroll-through:
     - DESIGNED: intentional visual shift, breathing space with purpose, color change, border treatment
     - NOT-DESIGNED: just empty gap between unrelated blocks

5. **PA-35: Scroll through at reading speed. Does your interest stay level, peak and valley, or fade?** (~4 min)
   - Go through ALL scroll-through frames at a pace of ~2 seconds per frame.
   - Track your engagement: HIGH / MEDIUM / LOW at each frame.
   - Where do you start SKIMMING? Note the frame number and approximate scroll percentage.
   - Describe the interest curve: sustained / peak-then-cliff / peak-valley-peak / fadeout.

6. **PA-36: Is there a dramatic visual moment? Where is it positioned?** (~3 min)
   - Look for: treatment changes, dark-background sections, diagrams, high-density areas.
   - How many dramatic moments? Where (by scroll percentage)?
   - Flagship target: climax at 40-55% scroll, with additional moments at 15% and 85%.
   - If climax is at <20% scroll: FRONT-LOADED finding (anti-pattern from ceiling).

7. **PA-17 + PA-41 observation (mandatory Ceiling+ elevation)** (~2 min)

8. **Write findings file** to `findings-flow-pacing.md`

---

### Auditor E: Grid+Layout

**Dimension:** Column breathing room, alignment discipline, container density, internal hierarchy, header-to-content proportion.

**Files to Read:** Pre-captured screenshots ONLY.

**Temporal Firewall -- DO NOT READ:** Lock sheet, source files, build plan, prior audits.

**Execution Sequence:**

1. **Cold Look Protocol (1440px + 768px, ~3 min)**

2. **PA-14: Does every column have enough room for its content to breathe?** (~3 min)
   - Examine all multi-column layouts, tables, and grid sections at 1440px.
   - Is any column too narrow for its text? Is content cramped?
   - Repeat at 768px.

3. **PA-15: Trace the left edge of every content block. How many starting positions?** (~3 min)
   - At 1440px: trace the left edge down the page.
   - Count distinct left-edge starting positions.
   - 2-4 = intentional alignment discipline. 5+ = alignment scatter.

4. **PA-37: Is there any container where you can count 5+ distinct pieces of information competing for attention?** (~3 min)
   - Examine all cards, callouts, info-boxes, complex sections.
   - Does it feel like a control panel (organized) or a pile (chaotic)?

5. **PA-38: Pick any card or callout. Within it, is there a clear reading order?** (~3 min)
   - Choose the most complex container on the page.
   - Is there a hierarchy: title --> key point --> detail?
   - Or do all elements compete at the same visual weight?

6. **PA-39: In the first screenful, how much is header/metadata vs actual content? Does the header feel like a doorway or a lobby?** (~2 min)
   - First viewport at 1440px: estimate percentage header vs content.
   - Doorway = inviting, gets you in quickly.
   - Lobby = making you wait, too much ceremony before content.

7. **PA-17 + PA-41 observation (mandatory Ceiling+ elevation)** (~2 min)

8. **Write findings file** to `findings-grid-layout.md`

---

### Auditor F: Consistency+Rhythm

**Dimension:** Element consistency, visual beat, spacing regularity, repetition monotony. PA-17 and PA-41 are ELEVATED TO TIER 1 for Flagship (Ceiling+ rule). Failure on PA-17 or PA-41 = page verdict CANNOT exceed "YES WITH RESERVATIONS."

**Files to Read:** Pre-captured screenshots ONLY.

**Temporal Firewall -- DO NOT READ:** Lock sheet, source files, build plan, prior audits.

**Execution Sequence:**

1. **Cold Look Protocol (1440px + 768px, ~3 min)**

2. **PA-16: Pick two elements that should look identical. Do they?** (~3 min)
   - Find pairs: two section headers, two callouts of the same type, two code blocks.
   - Are they visually identical? Any subtle differences?

3. **PA-17 (CRITICAL -- TIER 1 EQUIVALENT): Is there a visual rhythm (like a beat in music), or random?** (~5 min)
   - Go through ALL 1440px scroll-through frames.
   - Describe the rhythm: is it musical (varied, intentional tempo changes) or metronomic (identical spacing everywhere)?
   - Ceiling experiment finding: "metronomic, not musical" = FAIL.
   - Musical rhythm = varied intervals, different zone lengths, tempo changes that match content changes.
   - Metronomic rhythm = identical spacing, identical section heights, predictable pattern.
   - **FAIL on PA-17 = page verdict capped at "YES WITH RESERVATIONS" regardless of other scores.**

4. **PA-40: Does spacing between sections feel consistent, or is there a sudden jump?** (~3 min)
   - Look for abrupt spacing changes in the scroll-through.
   - If the beat changes: does the content ALSO change to justify the visual shift?
   - If spacing changes without content justification: LOOKS-WRONG.

5. **PA-41 (CRITICAL -- TIER 1 EQUIVALENT): Are any visual patterns repeated more than 4 times without variation?** (~5 min)
   - Check for: identical section layouts repeated, same callout style 5+ times, same background treatment extending beyond 4 sections.
   - Does repetition serve a purpose (listing related items) or create monotony (lazy templating)?
   - **FAIL on PA-41 = page verdict capped at "YES WITH RESERVATIONS" regardless of other scores.**

6. **Write findings file** to `findings-consistency-rhythm.md`
   - Include explicit PA-17 PASS/FAIL verdict with justification.
   - Include explicit PA-41 PASS/FAIL verdict with justification.

---

### Auditor G: Metaphor+Ideology

**Dimension:** Metaphor perceptual cost, metaphor visual expression level (structural vs announced), metaphor implicit detectability.

**Files to Read:** Pre-captured screenshots ONLY. Auditor G receives NO information about what the metaphor IS. They must detect it (or fail to detect it) from the visual structure alone.

**Temporal Firewall -- DO NOT READ:** Lock sheet, source files, build plan, prior audits, metaphor derivation output, tension-composition skill output.

**Execution Sequence:**

1. **Cold Look Protocol (1440px only, ~2 min)**

2. **PA-42: Is there any section where you understand WHY it looks this way (serving a metaphor) but it still looks WRONG?** (~5 min)
   - Scan through 1440px scroll-through frames.
   - For any section that has an unusual visual treatment: can you infer a concept driving it?
   - If yes: does the concept's visual execution HURT the experience?
   - Name the trade-off: "The [concept] is expressed through [visual treatment], which costs [perceptual price]."

3. **PA-43: Could the same metaphor idea be communicated with less visual cost?** (~4 min)
   - For any metaphor-driven sections identified in PA-42:
   - Is there a lighter way to express the same concept?
   - Example: if zone separation uses 3 viewport-heights of void, could it use background color shifts instead?

4. **PA-44: If you removed all labels, headings, and text annotations, could you still sense the metaphor from the visual structure alone?** (~4 min)
   - This is the STRUCTURAL vs ANNOUNCED test.
   - Imagine the page with all text removed. Only shapes, colors, borders, spatial relationships remain.
   - Can you still sense an organizing concept?
   - Scoring: 0-20% = NO metaphor structurally present. 20-50% = ANNOUNCED (text-dependent). 50-80% = ATMOSPHERIC (sensed through palette/texture). 80-100% = STRUCTURAL (felt through spatial organization).
   - Ceiling experiment scored 40% = ANNOUNCED. Flagship target: >60% (ATMOSPHERIC or STRUCTURAL).

5. **Write findings file** to `findings-metaphor-ideology.md`

---

### Auditor H: Responsive

**Dimension:** Viewport-specific design quality, responsive degradation, breakpoint fragility, visual novelty decay, narrow-viewport experience.

**Files to Read:** Pre-captured screenshots ONLY.

**Temporal Firewall -- DO NOT READ:** Lock sheet, source files, build plan, prior audits.

**Execution Sequence:**

1. **Cold Look Protocol (ALL 3 viewports, ~4 min)**
   - Cold look at 1440px, 768px, and 1024px. Write locked responses for each.

2. **PA-21: Does everything look designed for this width, or squeezed?** (~3 min)
   - At 768px: does the layout feel NATIVE to this width, or is it a desktop design crammed smaller?
   - At 1024px: designed or awkward middle ground?
   - At 1440px: designed for this width, or a narrower design floated in extra space?

3. **PA-22: Would a user with ONLY this screen size feel served or punished?** (~3 min)
   - At 768px: tablet-only user -- do they feel the page was made for them?
   - At 1024px: small laptop user -- served or tolerated?
   - At 1440px: desktop user -- served or ignored?

4. **PA-23: What breaks if you resize 200px narrower?** (~3 min)
   - From each viewport, imagine 200px less width.
   - At 768px --> 568px: does anything collapse?
   - At 1440px --> 1240px: does anything change?
   - How many distinct breakpoints does this page appear to have?

5. **PA-46: At 768px, does the way elements reorganize make SENSE for this content?** (~3 min)
   - At 768px: do multi-column layouts stack intelligently?
   - Or did the layout just shrink things without rethinking what the reader needs at this width?

6. **PA-47: At what scroll position do you start to feel like you've "seen this before"? Is there anything in the second half that surprises you visually?** (~3 min)
   - Go through 768px scroll-through frames.
   - At which frame does visual novelty die?
   - Is there any visual surprise in the second half of the scroll?
   - Ceiling experiment: novelty died at 30% scroll. Flagship target: novelty sustained past 60%.

7. **PA-17 + PA-41 observation (mandatory Ceiling+ elevation)** (~2 min)

8. **Write findings file** to `findings-responsive.md`

---

### Adversarial Auditor (ADV)

**Dimension:** Convention exploitation, fragility testing, comparative assessment, rule-gaming detection.

**Files to Read:**
- Pre-captured screenshots (1440px cold look, 768px cold look, 1440px scroll-through)
- Lock Sheet: CHALLENGEABLE SECTION ONLY (NOT always-locked or locked sections)

**Temporal Firewall -- DO NOT READ:** Source files, build plan, mechanism catalog. CAN read the Lock Sheet's CHALLENGEABLE section to identify which conventions to attack.

**Execution Sequence:**

1. **Cold Look Protocol (1440px + 768px, ~3 min)**

2. **PA-26: Is any convention CAUSING a visual problem?** (~5 min)
   - Read the CHALLENGEABLE section of the Lock Sheet.
   - For each challengeable convention: does it cause a visual problem on THIS page?
   - Example from ceiling: the zone spacing convention was being applied at maximum everywhere, creating void.
   - This is the auditor's chance to identify rules that HURT this specific page.

3. **PA-27: Designing from scratch, would you design it this way?** (~3 min)
   - Forget all conventions, rules, and constraints.
   - If you were designing a page for this content starting from zero: would you make these same choices?
   - Where does the design feel CONSTRAINT-SHAPED (forced by rules) vs INTENTION-SHAPED (chosen by a designer)?

4. **PA-28: How could someone make this look terrible while passing every rule?** (~5 min)
   - Identify layout vulnerabilities.
   - What could a hostile actor change (within rules) to make this page look awful?
   - This reveals proportional fragility and rule-gaming potential.
   - Ceiling experiment finding: "convention-shaped, not intention-shaped."

5. **PA-48: If this layout were one of five options for the same content, would this be your first choice, last choice, or somewhere in the middle?** (~3 min)
   - Rank this page among 5 hypothetical alternatives.
   - Why? What would the better alternatives do differently?
   - Ceiling experiment: ranked 4th of 5.

6. **PA-17 + PA-41 observation (mandatory Ceiling+ elevation)** (~2 min)

7. **Write findings file** to `findings-adversarial.md`

---

## SECTION 3: SCREENSHOT DISTRIBUTION PROTOCOL

### 3.1 Pre-Capture Responsibility

**The team lead pre-captures ALL screenshots BEFORE spawning any auditors.** This is a NON-NEGOTIABLE protocol proven in the ceiling Mode 4 PA (102 screenshots, 9 agents, zero Playwright contention).

No auditor touches Playwright. Ever. Auditors read saved image files via the Read tool.

### 3.2 Capture Sequence

The team lead executes the following in order:

**Step 1: Serve the HTML file via HTTP**
```bash
cd /path/to/build-output && python3 -m http.server 8080 &
```

**Step 2: Navigate and prepare**
```javascript
// Navigate to page
await page.goto('http://localhost:8080/flagship-page.html');
// Wait for fonts
await page.evaluate(() => document.fonts.ready);
// Disable all animations
await page.evaluate(() => {
  const style = document.createElement('style');
  style.textContent = `*, *::before, *::after {
    animation: none !important;
    animation-duration: 0s !important;
    transition: none !important;
    transition-duration: 0s !important;
    opacity: 1 !important;
    transform: none !important;
    scroll-behavior: auto !important;
  }`;
  document.head.appendChild(style);
});
// Wait 500ms for layout stability
await page.waitForTimeout(500);
```

**Step 3: Cold Look Captures (6 screenshots)**

| # | Viewport | Type | File Name |
|---|----------|------|-----------|
| 1 | 1440x900 | Cold look (first viewport only) | `flagship-1440-coldlook.png` |
| 2 | 768x1024 | Cold look (first viewport only) | `flagship-768-coldlook.png` |
| 3 | 1024x768 | Cold look (first viewport only) | `flagship-1024-coldlook.png` |
| 4 | 1440x900 | Full-page screenshot | `flagship-1440-fullpage.png` |
| 5 | 768x1024 | Full-page screenshot | `flagship-768-fullpage.png` |
| 6 | 1024x768 | Full-page screenshot | `flagship-1024-fullpage.png` |

**Step 4: Scroll-Through Captures (variable count)**

For EACH viewport (1440px, 768px), capture viewport-sized screenshots at 80% scroll increments:

```javascript
async function captureScrollThrough(page, viewportWidth, viewportHeight, prefix) {
  await page.setViewportSize({ width: viewportWidth, height: viewportHeight });
  await page.waitForTimeout(500);

  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = Math.floor(viewportHeight * 0.8);
  let frameNum = 1;

  for (let y = 0; y < totalHeight; y += step) {
    await page.evaluate((pos) => window.scrollTo(0, pos), y);
    await page.waitForTimeout(300);
    // Take screenshot: flagship-{width}-scroll-{NN}.png
    await page.screenshot({
      path: `screenshots/${prefix}-scroll-${String(frameNum).padStart(2, '0')}.png`,
      fullPage: false
    });
    frameNum++;
  }

  // Reset scroll
  await page.evaluate(() => window.scrollTo(0, 0));
  return frameNum - 1; // total frames captured
}

// 1440px scroll-through
const frames1440 = await captureScrollThrough(page, 1440, 900, 'flagship-1440');
// 768px scroll-through
const frames768 = await captureScrollThrough(page, 768, 1024, 'flagship-768');
```

**Step 5: 1024px Scroll-Through (partial -- first 10 frames only)**
```javascript
const frames1024 = await captureScrollThrough(page, 1024, 768, 'flagship-1024');
// Only need first 10 frames for 1024px (Auditor H uses for responsive check)
```

### 3.3 File Naming Convention

```
{target-dir}/_perceptual-audit/screenshots/
  flagship-1440-coldlook.png
  flagship-768-coldlook.png
  flagship-1024-coldlook.png
  flagship-1440-fullpage.png
  flagship-768-fullpage.png
  flagship-1024-fullpage.png
  flagship-1440-scroll-01.png
  flagship-1440-scroll-02.png
  ...
  flagship-1440-scroll-NN.png
  flagship-768-scroll-01.png
  flagship-768-scroll-02.png
  ...
  flagship-768-scroll-NN.png
  flagship-1024-scroll-01.png
  ...
  flagship-1024-scroll-10.png
```

### 3.4 Expected Screenshot Counts

| Viewport | Cold Look | Full-Page | Scroll-Through | Total |
|----------|-----------|-----------|----------------|-------|
| 1440px | 1 | 1 | 15-25 (depends on page length) | 17-27 |
| 768px | 1 | 1 | 15-30 (taller at narrow width) | 17-32 |
| 1024px | 1 | 1 | 10 (capped) | 12 |
| **TOTAL** | 3 | 3 | 40-65 | **46-71** |

### 3.5 Distribution Method

Team lead provides each auditor with:
1. The absolute path to the screenshots directory
2. A manifest listing all screenshot filenames with frame numbers
3. The specific filenames relevant to that auditor's dimension (see Section 1 screenshot dependencies)

Auditors read screenshots using the Read tool (which handles images natively). They NEVER launch Playwright, navigate URLs, or take their own screenshots.

---

## SECTION 4: COLD LOOK PROTOCOL (Per Viewport)

### 4.1 The 5-Step Sequence

This sequence is IDENTICAL for every auditor at every viewport. The responses are LOCKED FOREVER after writing.

**STEP 1: CLEAR**
- Close all CSS files, specs, convention docs in your mental model.
- You are seeing this page for the FIRST TIME.
- You know NOTHING about the design system, the metaphor, the mechanism count, the tier model.
- You are a designer opening a colleague's work cold.

**STEP 2: LOOK (5 seconds)**
- Open the cold look screenshot for this viewport.
- DO NOT read text. DO NOT count elements. DO NOT analyze structure.
- Absorb ONLY: shape, color, weight, balance, feel.
- 5 seconds. Not 10. Not 30. Five.

**STEP 3: REACT (immediate)**
Write these four responses:
```
COLD LOOK ({WIDTH}px):
Gut reaction: [one sentence -- what did you FEEL? Not think. FEEL.]
Worst thing:  [one element or area -- if you could fix ONE thing in 10 seconds, what?]
Best thing:   [one element or area -- if everything burned but one thing survived, protect what?]
Ship verdict: YES / YES WITH RESERVATIONS / NO
```

Rules for the reaction:
- "Gut reaction" must be an EMOTION, not an analysis. "Empty and lonely" YES. "Too much whitespace" NO (that's analysis).
- "Worst thing" must be specific and locatable. "The area below the header" YES. "The spacing" NO (too vague).
- "Best thing" must be specific. "The dark header typography" YES. "The colors" NO (too vague).
- "Ship verdict" must be one of the three options. No hedging.

**STEP 4: LOCK**
These responses are FINAL. They CANNOT be changed after reading specs, after seeing the Lock Sheet, after hearing what other auditors found. Cold look reactions are the closest thing to a genuine first impression. Revising them corrupts the data.

**STEP 5: REPEAT**
Perform Steps 1-4 INDEPENDENTLY for each viewport. Do NOT carry your 1440px reaction into your 768px cold look. Clear your mind between viewports.

### 4.2 Cold Look Execution Order

All auditors perform cold looks FIRST, before any PA questions. This ensures perceptual reactions are uncontaminated by analytical thinking.

```
AUDITOR EXECUTION ORDER:
1. Cold Look (all assigned viewports) -- 3-5 min
2. PA Questions (in assigned order) -- 10-25 min
3. PA-17 + PA-41 observation (all auditors) -- 2 min
4. Write findings file -- 3-5 min
```

### 4.3 Aggregate Cold Look Analysis (Weaver's Responsibility)

The Weaver-Synthesizer collects all 27 cold looks (9 auditors x 3 viewports) and produces:
- Verdict distribution per viewport (YES / YES WITH RESERVATIONS / NO counts)
- Consensus worst thing (what did the most auditors flag?)
- Consensus best thing (what did the most auditors protect?)
- Dominant emotional response (is there a consistent FEELING across auditors?)

---

## SECTION 5: FINDING CLASSIFICATION TAXONOMY

### 5.1 Three Severity Levels

| Severity | Definition | Visual Example | Gate Action |
|----------|-----------|----------------|-------------|
| **CATASTROPHIC** | Fundamental failure requiring structural rebuild. Not fixable with CSS tweaks. The viewer perceives the page as broken, incomplete, or abandoned. | Ceiling: 70-80% of scroll is blank cream void. 24 consecutive frames of nothing. Users think page failed to load. | **KILL** -- stop experiment, diagnose root cause, determine if rebuild or abort. |
| **WOULD-NOT-SHIP** | Functional issue that blocks shipment. A professional designer would refuse to release this. Fixable but requires significant work. | Ceiling: metaphor is announced not structural (40% without labels). Ceiling: no visual ending, page just stops in void. | **FIX** -- mandatory resolution before shipping. Must be addressed and re-verified. |
| **LOOKS-WRONG** | Visual issue that degrades impression. Would cause a designer to flag it for revision but not block release entirely. | Middle: missing footer. Ceiling: header metadata low contrast. Ceiling: margins feel anxious. | **CONTINUE** -- document finding, fix if time permits, does not block shipment alone. |

### 5.2 Additional Classifications

| Classification | Definition | Gate Action |
|---------------|-----------|-------------|
| **COULD-BE-BETTER** | Polish opportunity. Not wrong, but could be improved. | **DOCUMENT** -- record for future improvement, no action required. |
| **PASS** | No issue found for this question. | **NONE** -- question answered positively. |

### 5.3 Classification Rules

1. **CATASTROPHIC requires 3+ auditors corroborating the SAME finding.** One auditor calling something catastrophic is a strong signal; it becomes CATASTROPHIC classification only when 3+ independently agree. The ceiling experiment's void was 9/9 -- the clearest possible case.

2. **WOULD-NOT-SHIP requires the finding to be INDEPENDENTLY identifiable.** If auditor A says "I wouldn't ship because of X" and auditor B independently identifies the same X, it's confirmed WOULD-NOT-SHIP.

3. **LOOKS-WRONG is the default for real findings.** When in doubt, classify as LOOKS-WRONG. The weaver can upgrade to WOULD-NOT-SHIP during synthesis if corroboration warrants it.

4. **Perception Track findings CANNOT be dismissed by convention compliance.** "The convention allows it" is NOT a valid dismissal of a perception track finding. If 5 auditors say the spacing looks wrong, "but the spacing value follows the token system" does not invalidate their perception.

5. **A finding can exist on BOTH tracks simultaneously.** Example: "Container width is 1200px" = Rule Track violation (>960px) AND Perception Track finding (looks too wide). Both are valid.

---

## SECTION 6: SEVERITY CALIBRATION

### 6.1 What Does CATASTROPHIC Look Like?

**Calibration example: Ceiling experiment's 70% void**

9/9 auditors independently used these descriptions:
- "Vast white desert... makes page feel half-built" (Auditor A)
- "12-15 completely blank screens at desktop" (Auditor B)
- "This feels like a phone design stretched across a cinema screen" (Auditor C)
- "24 CONSECUTIVE FRAMES of nothing. This isn't breathing space -- it's abandonment" (Auditor D)
- "Content (1 measure) then SILENCE (3-4 measures)" (Auditor F)
- "This is not breathing room. This is a WASTELAND." (Adversarial)

**CATASTROPHIC means:** A user scrolling this page will conclude it is broken. No amount of explanation or metaphor justification rescues the experience. The page fundamentally fails its purpose.

**Threshold for flagship:** 6+ consecutive viewport-heights of content-free space = CATASTROPHIC. The spatial confidence gate (SC-02) should prevent this, but if it slips through, the PA catches it.

### 6.2 What Does WOULD-NOT-SHIP Look Like?

**Calibration example: Ceiling experiment's announced-not-structural metaphor**

Auditor G found: "40% strength without labels... ANNOUNCED metaphor, not STRUCTURAL metaphor." The metaphor IS perceived, but through READING text labels, not through SEEING visual structure. This undermines the claim of compositional fluency.

**Calibration example: Ceiling experiment's missing visual ending**

Auditor D: "THE PAGE JUST STOPS. ABRUPTLY. IN A VOID. Zero visual conclusion." The footer EXISTS in HTML but is buried under 24 frames of void -- users never reach it.

**WOULD-NOT-SHIP means:** A professional designer would say "this needs significant work before I'd show it to a client." The issue is real and substantial, but the page isn't fundamentally broken -- it's incomplete or poorly executed in a specific dimension.

### 6.3 What Does LOOKS-WRONG Look Like?

**Calibration example: Middle experiment's missing footer**

The middle experiment page was PA-05 4/4 DESIGNED but had no footer element at all. The page ended without closure. This is LOOKS-WRONG, not WOULD-NOT-SHIP, because:
- The rest of the page was excellent (4/4 on all other PA-05 sub-criteria)
- The missing footer was a single element omission, not a structural failure
- Adding a footer is a 20-line fix, not a rebuild

**Calibration example: Ceiling experiment's header metadata contrast**

Small metadata text in the header had low contrast against the dark background. Some auditors flagged it, one dissented ("crisp and legible"). This is a minor legibility issue affecting non-essential text.

**LOOKS-WRONG means:** A designer would flag it in a review but not block release. It degrades the impression by a noticeable but non-critical amount.

### 6.4 PA-05 Calibration for Flagship Tier

| Score | What It Means | Flagship-Specific Criteria |
|-------|--------------|---------------------------|
| **4/4** | Ship-ready. All sub-criteria PASS. | DESIGNED: multi-scale coherence, rhythm variation, deliberate focal points. COHERENT: zero dialect shifts. PROPORTIONATE: 65-80% container use, weight in all thirds, designed negative space. POLISHED: zero missing elements, all tokens compliant. |
| **3/4** | Ship with reservations. One sub-criterion fails. | Acceptable ONLY if the failing criterion is PA-05d POLISHED (minor cleanup). If PA-05a DESIGNED or PA-05c PROPORTIONATE fails, this should be treated as 2/4. |
| **2/4** | Would not ship. Two sub-criteria fail. | Two failures means a fundamental quality gap. For flagship tier, 2/4 is equivalent to WOULD-NOT-SHIP severity. |
| **1.5/4** | Do not ship (ceiling experiment's actual score). | This indicates catastrophic spatial failure + partial design failure. Requires structural rebuild. |
| **1/4 or below** | Abort. | The page has failed fundamentally. Only COHERENT might pass; everything else fails. |

**Flagship target: 4/4.** 3/4 is acceptable ONLY for PA-05d. Any other sub-criterion failure is WOULD-NOT-SHIP.

---

## SECTION 7: VERDICT SYNTHESIS PROTOCOL

### 7.1 The Weaver Agent

The Weaver-Synthesizer is the FINAL agent to execute, AFTER all 9 auditors have completed and written their findings files. The weaver reads ALL findings and produces the unified AUDIT-REPORT.md.

**Weaver CAN:** Read Lock Sheet + all 9 findings files, classify findings, deduplicate, rank, produce verdict.

**Weaver CANNOT:** Touch Playwright, read source files, make fixes, override Lock Sheet, dismiss findings, add new findings.

### 7.2 Synthesis Steps

**Step 1: Collect all findings (~5 min)**
- Read all 9 findings files
- Read the Lock Sheet
- Compile a master list of ALL individual findings

**Step 2: Cold Look Consensus (~3 min)**
- Aggregate 27 cold looks (9 auditors x 3 viewports)
- Count verdict distribution per viewport
- Identify consensus worst/best elements
- Identify dominant emotional response

**Step 3: Cross-Auditor Finding Reconciliation (~10 min)**

For each distinct finding:
1. **Count corroboration:** How many auditors independently identified this?
2. **Check for contradictions:** Did any auditor DISSENT on this finding?
3. **Reconcile contradictions** using these rules:
   - If 7+ auditors agree and 1-2 dissent: majority prevails, note dissent
   - If 5-6 agree and 3-4 dissent: finding is VALID but contested, note both sides
   - If split (4-5 vs 4-5): finding is AMBIGUOUS, flag for human review
   - If only 1-2 auditors found it: finding is VALID but MINOR unless it's a spatial/void finding (spatial findings from even 1 auditor are taken seriously due to 100% hit rate from ceiling)

4. **Deduplicate:** Multiple auditors may describe the same issue differently. Group these under one finding with citations from each auditor.

5. **Reconcile dimensional overlap:** Spatial findings from Auditor C may overlap with flow findings from Auditor D (e.g., "void causes flow break"). Group the finding under the PRIMARY dimension but cite both auditors.

**Step 4: PA-05 Reconciled Verdict (~5 min)**
- Compile PA-05 sub-criteria assessments from Auditor A (primary) and corroborating evidence from other auditors
- For each sub-criterion:
  - What did Auditor A score?
  - Is that score supported by other auditors' findings?
  - Should it be upgraded or downgraded based on cross-auditor evidence?
- Produce final PA-05 score (X/4)
- Check PA-17 and PA-41 results from Auditor F: if either FAIL, cap overall verdict at "YES WITH RESERVATIONS"

**Step 5: Lock Sheet Classification (~5 min)**
- For each finding: check against Lock Sheet
- Finding attacks ALWAYS-LOCKED (soul rule) --> INVALID, note as redirection
- Finding attacks LOCKED decision --> INVALID for the decision, but valid for EXECUTION quality
- Finding attacks CHALLENGEABLE value --> VALID and ACTIONABLE
- Genuine perception vs research conflict --> ESCALATE to human

**Step 6: Severity Assignment and Ranking (~5 min)**
- Assign severity to each reconciled finding (CATASTROPHIC / WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER / PASS)
- Rank findings by severity, then by corroboration count
- Top 10 findings get detailed write-ups with:
  - Severity classification
  - Lock Sheet status
  - Corroboration count
  - All auditor evidence citations
  - Gate impact (GATE FAIL / PREFERENCE)

**Step 7: Ship Decision (~3 min)**

Apply the decision tree:

```
IF any CATASTROPHIC findings exist:
  VERDICT: DO NOT SHIP (KILL)
  Conditions: list what must change for re-evaluation

ELSE IF any WOULD-NOT-SHIP findings exist:
  IF count(WOULD-NOT-SHIP) <= 2 AND all are CSS-fixable:
    VERDICT: SHIP AFTER FIX
    Conditions: list specific fixes required
  ELSE:
    VERDICT: DO NOT SHIP (FIX)
    Conditions: list what must change

ELSE IF PA-05 score < 3/4:
  VERDICT: DO NOT SHIP
  Conditions: PA-05 sub-criteria failures

ELSE IF PA-17 FAIL OR PA-41 FAIL:
  VERDICT: SHIP WITH RESERVATIONS (capped)
  Note: rhythm/monotony failure caps verdict

ELSE IF count(LOOKS-WRONG) > 8:
  VERDICT: SHIP WITH RESERVATIONS
  Note: too many minor issues aggregate into quality concern

ELSE:
  VERDICT: SHIP
  Note: list any COULD-BE-BETTER items as nice-to-have improvements
```

**Step 8: Write AUDIT-REPORT.md (~5 min)**
- Executive summary
- Cold look consensus
- PA-05 reconciled verdict
- Ranked concerns (top 10)
- Full PA question results table
- Quantitative guardrail checks
- CSS vocabulary contamination log
- Ship decision with conditions
- What's excellent (always include positive findings)

### 7.3 Weaver Output Format

```markdown
# AUDIT-REPORT: Flagship Page -- Mode 4 Standalone

**Synthesizer:** WEAVER-SYNTHESIZER
**Date:** [date]
**Page:** flagship-page.html
**Mode:** Standalone (Mode 4) -- 9 auditors, 48 PA questions, 27 cold looks

---

## Executive Summary
[3-5 sentence summary: overall quality, dominant finding, ship decision]

## Cold Look Consensus
[Verdict distribution table, consensus worst/best, dominant emotion]

## PA-05 Reconciled Verdict
[All 4 sub-criteria with cross-auditor evidence, final score X/4]

## Ranked Concerns (Top 10)
[For each: severity, lock sheet status, corroboration, evidence, gate impact]

## Full PA Question Results
[Table: PA#, Question, Answer, Severity for all 48 questions]

## Quantitative Guardrail Check
[Table: guardrail, threshold, measured, status]

## CSS Vocabulary Contamination Log
[Any auditors who used CSS property names in findings]

## Ship Decision
[SHIP / SHIP WITH RESERVATIONS / SHIP AFTER FIX / DO NOT SHIP / KILL]
[Conditions and recommendations]

## What's Excellent
[Positive findings -- always include these even in DO NOT SHIP verdicts]

---
**AUDIT-REPORT COMPLETE**
```

---

## SECTION 8: GATE INTEGRATION

### 8.1 Which PA Findings Trigger Which Gates

The PA audit is Gate 5 (Ship-Ready Gate) in the flagship architecture's 5-gate system. PA findings feed into the final ship/no-ship decision.

| PA Finding Category | Gate Triggered | Gate Response |
|-------------------|---------------|---------------|
| **CATASTROPHIC void (PA-50/51/52/53 + PA-09)** | Ship-Ready Gate VETO | KILL -- page cannot ship. If SC-02/SC-03 passed but PA finds void, the spatial confidence gate has a false negative. Document the discrepancy. |
| **Container width violation (PA-53 + PA-30)** | Ship-Ready Gate BLOCK | FIX -- verify against SC-01 programmatic result. If SC-01 passed but PA perceives narrow/wide, investigate perception vs measurement gap. |
| **PA-05 score < 3/4** | Ship-Ready Gate BLOCK | FIX or KILL depending on which sub-criteria failed. PA-05c failure = likely spatial (coordinate with SC-02/03/04). PA-05a failure = likely compositional. |
| **PA-17 or PA-41 FAIL** | Ship-Ready Gate CAP | Verdict capped at "YES WITH RESERVATIONS" regardless of other scores. Cannot SHIP without addressing rhythm/monotony. |
| **6+ WOULD-NOT-SHIP findings** | Ship-Ready Gate BLOCK | Too many significant issues to ship. Fix cycle required. |
| **Footer unreachable (PA-13)** | Cross-validate with SC-07 | If SC-07 passed but PA says footer is perceptually unreachable, the void before footer is too large even if under 1-viewport threshold. |
| **Metaphor ANNOUNCED not STRUCTURAL (PA-44 < 50%)** | Ship-Ready Gate FLAG | For flagship tier, metaphor must be ATMOSPHERIC or STRUCTURAL (>50%). Below 50% = WOULD-NOT-SHIP for flagship. |

### 8.2 PA-05 Score to Gate Decision Mapping

| PA-05 Score | Gate Decision | Rationale |
|-------------|--------------|-----------|
| 4/4 | PASS (ship-ready) | All sub-criteria met. Proceed to comparative audit and blind novelty. |
| 3/4 (PA-05d fails) | CONDITIONAL PASS | Polish issues only. Fix minor items, re-check PA-05d. |
| 3/4 (any other fails) | BLOCK | DESIGNED, COHERENT, or PROPORTIONATE failure = significant quality gap for flagship. Must fix and re-audit. |
| 2/4 | BLOCK | Two sub-criteria fail = would not ship. Fix cycle required. |
| 1.5/4 or below | KILL | Structural failure. CSS fixes insufficient. Diagnose root cause: content problem, spacing problem, or metaphor problem? |

### 8.3 Void Finding Automatic Gate Actions

The Tier 4 void prevention questions (PA-50 through PA-53) have AUTOMATIC gate consequences:

| Finding | Threshold | Automatic Action |
|---------|-----------|-----------------|
| PA-50: Consecutive blank viewports | 3+ consecutive frames with <30% content | WOULD-NOT-SHIP (automatic). If 6+: CATASTROPHIC (automatic KILL). |
| PA-51: Content-to-scroll ratio | Below 60% | WOULD-NOT-SHIP (automatic). Below 40%: CATASTROPHIC (automatic KILL). |
| PA-52: Missing designed moment in any third | Any third has NO designed moment | WOULD-NOT-SHIP (automatic). All three thirds empty: CATASTROPHIC. |
| PA-53: Width utilization | Below 50% at 1440px | WOULD-NOT-SHIP. Cross-validate with SC-01 container width. |

### 8.4 PA to Spatial Confidence Gate Cross-Validation

The PA audit (Gate 5) cross-validates the earlier Spatial Confidence Gate (Gate 2). If PA finds spatial issues that Gate 2 missed:

| Scenario | Implication | Action |
|----------|------------|--------|
| SC-02 PASS but PA-50 finds 4+ blank frames | SC-02 measurement missed perceptual void (content exists but is invisible/minimal) | Flag as gate methodology gap. The void is PERCEPTUAL not STRUCTURAL -- content is present but doesn't register. |
| SC-03 PASS (70%+) but PA-51 estimates <60% | SC-03 counts content elements that DON'T contribute to visual perception (e.g., empty structural divs with text) | Flag as measurement calibration issue. SC-03's content detection may be too permissive. |
| SC-04 PASS but PA-32/PA-10 fail | Team-lead squint test was too generous | Flag for future SC-04 calibration. The squint test threshold may need tightening. |
| All SC PASS but PA-05c FAIL | The page passes STRUCTURAL spatial checks but fails PERCEPTUAL spatial assessment | This is the ceiling experiment scenario. The page is technically correct but perceptually catastrophic. This is the MOST IMPORTANT cross-validation. |

### 8.5 Full Gate Sequence Summary

```
Gate 1: Metaphor Resonance Gate (after metaphor derivation)
Gate 2: Spatial Confidence Gate (after Pass 1 -- 7 binary checks)
Gate 3: Landmark Completeness Gate (after Pass 1 -- team-lead manual)
Gate 4: Composition Verification Gate (after Pass 2 -- mechanisms, transitions, PA-05 quick-check)

>>> Gate 5: SHIP-READY GATE (after Pass 3) <<<
    ├── Full programmatic audit (soul, tokens, CPL, spacing)
    ├── MODE 4 PA (THIS DOCUMENT -- 9 auditors, 48 questions)
    ├── Blind novelty assessment (D3 criterion)
    ├── Comparative audit vs Middle experiment
    └── Final ship/fix/kill decision
```

The PA is ONE component of Gate 5. The ship decision integrates PA findings with programmatic audit results, novelty assessment, and comparative evaluation. The weaver produces the PA's verdict; the team lead produces the OVERALL Gate 5 verdict by combining all inputs.

---

## APPENDIX A: LANGUAGE HARD BLOCK

Auditor findings may NOT contain ANY of the following CSS property names. Findings containing these terms are flagged CONTAMINATED and excluded from synthesis:

**BLOCKED TERMS:** px, rem, em, %, hex, rgb, rgba, border-radius, box-shadow, padding, margin, font-size, font-family, line-height, max-width, min-width, flex, grid, gap, opacity, z-index, overflow, display, position

**USE INSTEAD:** heavy, light, cramped, spacious, jarring, smooth, floating, grounded, anxious, confident, broken, polished, warm, cold, sharp, soft, cluttered, breathing, stacking, flowing, stuck, drifting, thick, thin, tight, loose, generous, narrow, wide

**Exception:** Adversarial auditor may reference design system concepts when critiquing conventions (PA-26/28).

**Exception:** Dimensional estimates are permitted: "roughly half the screen width," "about a thumb's width of space," "three finger-widths of breathing room." Physical/proportional descriptions are fine; CSS vocabulary is not.

## APPENDIX B: ERROR HANDLING

| Failure | Recovery |
|---------|----------|
| Lock Sheet not written in 10 min | Team lead produces emergency Lock Sheet from memory |
| Auditor doesn't write findings file | Respawn auditor with "MUST write file using Write tool. Your analysis is WORTHLESS unless written to disk." |
| Auditor findings contain CSS properties | Flag file as CONTAMINATED. Weaver notes contamination but still includes findings (with warning). |
| All auditors return zero concerns | Spawn ADDITIONAL adversarial auditor with instruction: "Your predecessors found nothing. Find what they missed." |
| Auditor can't read screenshots | Verify screenshot paths. If Read tool fails on images, convert PNG to JPEG and retry. |
| Weaver finds irreconcilable contradictions | Document both positions. Flag as AMBIGUOUS. Escalate to human. |
| PA-05 scores wildly diverge from expectations | Check if auditors had context contamination (read build plan, prior results). If so, discount contaminated auditor. |
| Screenshot pre-capture fails | Team lead retries screenshot capture. If HTTP server fails, try different port. Never fall back to letting auditors touch Playwright. |

## APPENDIX C: TASK GRAPH

```
#1 Team Lead: Screenshot Pre-Capture    blockedBy: []         blocks: [#2-#11]
#2 Research Contextualizer: Lock Sheet   blockedBy: [#1]       blocks: [#3-#11]
#3 Auditor A: Impression+Emotion         blockedBy: [#1]       blocks: [#12]
#4 Auditor B: Readability+Typography     blockedBy: [#1]       blocks: [#12]
#5 Auditor C: Spatial+Proportion         blockedBy: [#1]       blocks: [#12]
#6 Auditor D: Flow+Pacing               blockedBy: [#1]       blocks: [#12]
#7 Auditor E: Grid+Layout               blockedBy: [#1]       blocks: [#12]
#8 Auditor F: Consistency+Rhythm         blockedBy: [#1]       blocks: [#12]
#9 Auditor G: Metaphor+Ideology          blockedBy: [#1]       blocks: [#12]
#10 Auditor H: Responsive               blockedBy: [#1]       blocks: [#12]
#11 Adversarial Auditor                  blockedBy: [#1, #2]   blocks: [#12]
#12 Weaver-Synthesizer                   blockedBy: [#3-#11]   blocks: []
```

**Note:** Auditors A-H (#3-#10) depend ONLY on screenshots (#1), NOT on the Lock Sheet (#2). This preserves the temporal firewall: auditors never see the Lock Sheet. The Adversarial auditor (#11) depends on BOTH screenshots AND the Lock Sheet (CHALLENGEABLE section only). The Weaver (#12) depends on ALL auditors completing.

**Parallelism:** Tasks #3 through #10 run in PARALLEL (8 concurrent agents). Task #11 runs after #2 completes (may start before #3-#10 finish). Task #12 runs ONLY after ALL of #3-#11 complete.

**Expected timeline:**
- Screenshot capture: 5-10 min
- Lock Sheet: 10-15 min (parallel with screenshot capture)
- All auditors (parallel): 15-30 min
- Weaver synthesis: 20-30 min
- **Total: 50-75 min**

---

**END OF PA OPERATIONAL SCAFFOLDING**

**Total sections:** 8 + 3 appendices
**Coverage:** 9 auditors, 48 PA questions, all viewports, cold look protocol, classification taxonomy, severity calibration, verdict synthesis, gate integration
**Confidence:** HIGH -- all protocols traced to empirical evidence from ceiling Mode 4 PA (102 screenshots, 9 agents, zero contention, 492-line AUDIT-REPORT)
