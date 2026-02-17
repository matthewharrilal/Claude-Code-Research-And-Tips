# 12 -- PA DEEP INVOCATION: Maximum Perceptual-Auditing Skill Deployment

> This document provides EXACT, INSERTABLE invocation text for deploying the perceptual-auditing skill at maximum capability across all prompt layers. Every PA question, rubric criterion, calibration step, and gate mechanism has invocation language ready for integration.

**Source:** SKILL.md (847 lines), AUDIT-REPORT.md (492 lines, Mode 4 ceiling experiment), 00-PROMPT-STRUCTURE-OUTLINE.md
**Date:** 2026-02-17

---

## 1. PA QUESTION DEPLOYMENT MAP (9 Auditors)

### Load-Balancing Rationale

The PA skill defines 53 questions across 4 tiers. For flagship Mode 4 deployment with 9 auditors (A through I), the allocation must:
- Give each auditor 5-7 PRIMARY questions (load-balanced)
- Ensure every auditor answers PA-17 and PA-41 regardless (Ceiling+ elevation rule)
- Ensure every auditor notes spatial distribution observations (PA-50-53 awareness)
- Maintain domain coherence per auditor (readability questions stay together)
- Account for the CRITICAL ceiling lesson: PA-50-53 were ABSENT during ceiling experiment, enabling the catastrophic void to go undetected by targeted questions

### Auditor Assignment Table

| Auditor | Domain | Primary Questions | Count | Ceiling+ Mandatory | Est. Time |
|---------|--------|-------------------|-------|--------------------|-----------|
| **A** | Impression + Emotion | PA-01, PA-04, PA-05 (full 4-sub), PA-18, PA-19, PA-20, PA-45 | 7 (10 with PA-05 subs) | PA-17, PA-41 | 12-15 min |
| **B** | Readability + Typography | PA-02, PA-06, PA-07, PA-08, PA-29 | 5 | PA-17, PA-41 | 8-10 min |
| **C** | Spatial + Proportion + Void | PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-52, PA-53 | 11 | PA-17, PA-41 | 15-18 min |
| **D** | Flow + Pacing | PA-12, PA-13, PA-34, PA-35, PA-36 | 5 | PA-17, PA-41 | 8-10 min |
| **E** | Grid + Layout | PA-14, PA-15, PA-37, PA-38, PA-39 | 5 | PA-17, PA-41 | 8-10 min |
| **F** | Consistency + Rhythm | PA-16, PA-17, PA-40, PA-41 | 4 | PA-17, PA-41 (PRIMARY) | 8-10 min |
| **G** | Metaphor + Ideology | PA-42, PA-43, PA-44 | 3 | PA-17, PA-41 | 8-10 min |
| **H** | Responsive | PA-21, PA-22, PA-23, PA-46, PA-47 | 5 | PA-17, PA-41 | 10-12 min |
| **I** | Adversarial | PA-26, PA-27, PA-28, PA-48 | 4 | PA-17, PA-41 | 8-10 min |

**Load notes:**
- Auditor C has the heaviest load (11 primary questions including the void pipeline PA-50-53). This is intentional: C is the PRIMARY void detector and spatial analyst. The void pipeline questions require the same perceptual context (spatial awareness) and are most efficient when answered as a connected sequence.
- Auditor A has 7 questions but PA-05 expands to 4 sub-criteria, making effective load ~10 items. PA-05 is THE signature question and demands the most careful evaluation.
- Auditor F has only 4 primary questions but is the PRIMARY evaluator for the Ceiling+ mandatory PA-17 and PA-41. Their rhythm/consistency analysis is expected to be deep.
- All auditors must note PA-17 (rhythm) and PA-41 (monotony) observations regardless of primary assignment per the Ceiling+ elevation rule.

### Screenshot Distribution

Each auditor receives the SAME screenshot set (pre-captured by team lead). No auditor captures their own screenshots. Distribution:

| Screenshot Set | Contents | Auditors Who Need It |
|---------------|----------|---------------------|
| Cold Look 1440px | Single full-page screenshot at 1440px wide | ALL (A-I) |
| Cold Look 768px | Single full-page screenshot at 768px wide | ALL (A-I) |
| Cold Look 1024px | Single full-page screenshot at 1024px wide | ALL (A-I) |
| Scroll-through 1440px | 5-15 viewport-sized screenshots, 80% step | ALL (A-I) |
| Scroll-through 768px | 5-15 viewport-sized screenshots, 80% step | A, B, C, D, H |
| Scroll-through 1024px | 5-15 viewport-sized screenshots, 80% step | C, H |

---

## 2. PA-50-53 DEEP INVOCATION (Void Detection Pipeline)

### Why This Is Critical

PA-50-53 were ABSENT during the ceiling experiment. Result: the catastrophic whitespace void (70-80% of scroll = blank cream) was detected only through gestalt impressions in general questions (PA-01, PA-09, PA-33, PA-35). It was the DOMINANT failure, flagged by 9/9 auditors -- but through UNSTRUCTURED observation, not through TARGETED detection. Without PA-50-53, auditors describe the symptom ("too much whitespace") without the diagnostic precision to quantify, classify, or prescribe.

The void detection pipeline is a four-stage sequence: DETECT (PA-50) -> QUANTIFY (PA-51) -> CLASSIFY (PA-52) -> ASSESS PREVENTION (PA-53). Each stage feeds the next. All four must be answered in sequence by Auditor C.

### PA-50: Void Detection (DETECT)

**Invocation text for Auditor C prompt:**

```
PA-50 (VOID DETECTION -- answer FIRST in the void pipeline, before PA-51/52/53):

Starting from the top of the page, scroll through every viewport-height position at 1440px. At each position, estimate what percentage of the visible screen contains actual content -- text, images, diagrams, interactive elements, meaningful visual structure. "Content" means something a reader would engage with. Background color, empty margins, and decorative whitespace are NOT content.

Count the number of consecutive viewport-height positions where content coverage is BELOW 30%. Record the longest consecutive run.

Answer format:
- Total viewport-height positions examined: [N]
- Positions below 30% content: [list position numbers]
- Longest consecutive run of <30% content: [N] viewport-heights, starting at position [X]
- Positions ABOVE 70% content: [list position numbers]

DO NOT use CSS vocabulary. Describe what you SEE: "mostly blank cream with a thin line of text at the bottom" rather than "large padding values."

This is the single most important spatial question. The ceiling experiment had 24 consecutive frames of blank cream. If you see 2+ consecutive blank viewport-heights, flag IMMEDIATELY as a potential catastrophic void.
```

**Binary guardrail for builder self-check:**
```
VOID-DETECT: At 1440px viewport, scroll through every viewport-height. If ANY 2+ consecutive viewport-height positions have <30% content coverage = FAIL. Rebuild spatial distribution before proceeding.
```

### PA-51: Void Quantification (QUANTIFY)

**Invocation text for Auditor C prompt:**

```
PA-51 (VOID QUANTIFICATION -- answer AFTER PA-50):

Using your PA-50 observation, estimate the total percentage of page scroll height that contains meaningful content versus empty/near-empty space.

Classify into one of four bands:
- DENSE (80%+ of scroll height is content): The page is packed. Concern shifts to cramming, not voids.
- BALANCED (60-80% content): Healthy ratio. Breathing room exists but doesn't dominate.
- SPARSE (40-60% content): Warning zone. More than half the scroll experience is empty or near-empty.
- VOID-DOMINATED (below 40% content): Structural failure. The page is more empty than full.

Answer format:
- Estimated content percentage: [X]%
- Classification: [DENSE / BALANCED / SPARSE / VOID-DOMINATED]
- Where does content concentrate? [Top third / Middle third / Bottom third / Evenly distributed]
- If SPARSE or VOID-DOMINATED: What is filling the non-content space? [Blank background / Repeated pattern / Decorative elements / Nothing]

The ceiling experiment was VOID-DOMINATED at approximately 20-30% content. The middle experiment was BALANCED at approximately 65-70% content. Use these as calibration anchors.

PASS threshold: >=60% content (BALANCED or DENSE).
FAIL threshold: <60% content (SPARSE or VOID-DOMINATED).
```

### PA-52: Void Classification (CLASSIFY)

**Invocation text for Auditor C prompt:**

```
PA-52 (VOID CLASSIFICATION -- answer AFTER PA-51):

Divide the page into THREE equal thirds by scroll depth:
- TOP THIRD (0-33% of total scroll)
- MIDDLE THIRD (33-66% of total scroll)
- BOTTOM THIRD (66-100% of total scroll)

For EACH third, answer:
1. Does this third contain at least ONE "designed moment" -- a section with unique visual treatment, noticeable mechanism deployment (visual shift, rhythm change, texture variation, color progression), or a visual peak that would make a reader pause?
2. Describe the designed moment in perceptual language: what does it LOOK like, what does it FEEL like?
3. If NO designed moment exists in this third: describe what IS there instead.

Answer format:
- TOP THIRD designed moment: [YES: describe / NO: describe what's there instead]
- MIDDLE THIRD designed moment: [YES: describe / NO: describe what's there instead]
- BOTTOM THIRD designed moment: [YES: describe / NO: describe what's there instead]
- Visual weight distribution: [FRONT-LOADED / EVEN / BACK-LOADED / MIDDLE-HEAVY / ABSENT-AFTER-FIRST-THIRD]

The ceiling experiment was FRONT-LOADED: all visual interest concentrated in the first 15-20% of scroll, with the remaining 80% being blank cream. The architecture diagram at ~10% scroll was the ONLY perceivable designed moment.

PASS threshold: All three thirds contain at least one designed moment.
FAIL threshold: Any third lacks a designed moment. Name which third(s) fail.
```

### PA-53: Void Prevention Assessment (ASSESS)

**Invocation text for Auditor C prompt:**

```
PA-53 (VOID PREVENTION -- answer LAST in the void pipeline):

At the widest viewport tested (1440px), evaluate the content container's horizontal space utilization:
1. Does the content area use approximately 65-80% of the available viewport width?
2. Or does the content feel like a narrow strip surrounded by excessive margins?
3. Or does the content stretch edge-to-edge with no breathing room?

Answer format:
- Estimated content width as percentage of viewport: [X]%
- Classification: [CONFIDENT (65-80%) / NARROW (<65%) / STRETCHED (>85%)]
- If NARROW: Does the narrowness serve a clear purpose (focused reading column, editorial intent) or does it feel accidental (design meant for a smaller screen)?
- If STRETCHED: Is there breathing room at the edges, or does content collide with the viewport boundary?

Calibration: The design system specifies 940-960px container width at 1440px viewport = ~65-67% utilization = bottom edge of CONFIDENT. The ceiling experiment's container appeared correct (960px) but auditors perceived it as a "narrow strip floating in vast emptiness" because the VERTICAL void made the HORIZONTAL proportions feel worse. Horizontal and vertical proportion interact -- evaluate both dimensions.

PASS threshold: 65-80% width utilization AND the width feels DESIGNED for this viewport (not merely centered).
FAIL threshold: Below 65% OR above 85% OR width feels accidental/leftover.
```

### Pipeline Integration Rule

**Invocation text for coordination spec:**

```
VOID DETECTION PIPELINE (Auditor C, PA-50 through PA-53):
These four questions form a SEQUENTIAL pipeline. Answer them IN ORDER.
- PA-50 (DETECT) feeds PA-51 (QUANTIFY): detection data enables quantification
- PA-51 (QUANTIFY) feeds PA-52 (CLASSIFY): ratio enables distribution analysis
- PA-52 (CLASSIFY) feeds PA-53 (ASSESS): distribution enables prevention assessment
- If PA-50 finds 2+ consecutive blank viewports: flag IMMEDIATELY in findings, do not wait for pipeline completion
- If PA-51 classifies as VOID-DOMINATED: this is a BLOCKING finding regardless of other PA scores

ALL other auditors (A, B, D-I): If during your assigned questions you notice large areas of blank space, note them in your findings. Auditor C is the PRIMARY spatial evaluator, but spatial awareness is everyone's responsibility.
```

---

## 3. PA-05 SCORING PROTOCOL (The Signature Question)

### Calibration Anchors

**Invocation text for Auditor A prompt (PA-05 evaluator):**

```
PA-05 CALIBRATION (Read BEFORE evaluating):

PA-05 is the single most important PA question. It has four sub-criteria. You must evaluate ALL FOUR independently, then produce a composite score.

CALIBRATION FROM PREVIOUS EXPERIMENTS:
- Middle-tier experiment (simpler page, 2 scales, 12 mechanisms): PA-05 = 4/4 DESIGNED. All four sub-criteria PASSED. The page felt intentionally composed despite having no metaphor. Mechanisms were deployed with purpose and content-fit.
- Ceiling experiment (complex page, 4 scales, 14 mechanisms, metaphor-driven): PA-05 = 1.5/4 DO NOT SHIP. DESIGNED partial-pass, COHERENT pass, PROPORTIONATE catastrophic fail, POLISHED pass-with-concerns. The void dominated everything.
- CD-006 crown jewel (39/40 overall): represents the QUALITY TARGET. Designed transitions, purposeful breathing room, confident spatial use.

WHAT THIS MEANS FOR FLAGSHIP:
The flagship is Ceiling+ tier. It must score PA-05 >= 3/4 to ship (YES or YES WITH RESERVATIONS). A score of 2/4 or below = DO NOT SHIP.

The key lesson: MORE mechanisms and MORE scales do NOT equal higher PA-05. The middle tier scored HIGHER than the ceiling despite being simpler. Quality comes from RESTRAINT and SPATIAL CONFIDENCE, not from complexity.
```

### Sub-Criteria Deep Invocation

**PA-05a: DESIGNED**

```
PA-05a (DESIGNED): Does this feel like intentional composition, or assembled components?

Look for these specific signals:
- MULTI-SCALE COHERENCE: Are there at least 2 visible scales of design? (macro layout + micro details both feel considered)
- RHYTHM VARIATION: Does spacing vary with purpose, or is it metronomic?
- FOCAL POINT PLACEMENT: Are there deliberate visual peaks, or is everything the same weight?
- CONTENT-FORM FIT: Do the visual choices serve THIS specific content, or could they wrap any content?

Scoring guide:
- 4/4 (DESIGNED): "A designer made choices specifically for THIS content. I can point to moments where the form serves the meaning."
  Example: CD-006's transition zone between sections uses a designed breathing moment that signals topic change through visual weight shift.
- 3/4 (COMPETENT): "Someone skilled followed good principles. It looks professional but not distinctive."
  Example: A well-executed template application with correct spacing, clean typography, appropriate hierarchy.
- 2/4 (ASSEMBLED): "Components are individually fine but feel dropped onto a page without considering their relationships."
  Example: A design system's default components arranged in a standard grid with no compositional intent.
- 1/4 (ACCIDENTAL): "The layout happened to end up this way. No compositional intent is visible."
  Example: Content poured into a single-column default with browser-standard spacing.

CRITICAL DISTINCTION: "Designed MOMENTS" vs "designed COMPOSITION." The ceiling experiment had designed moments (the architecture diagram, the header, the YOU ARE HERE box) but lacked designed composition (the RELATIONSHIPS between moments were undesigned void). For PA-05a to PASS, the COMPOSITION must feel designed, not just individual moments.
```

**PA-05b: COHERENT**

```
PA-05b (COHERENT): Does this feel like one designer made it?

Look for these specific signals:
- CONSISTENT MECHANISM DEPLOYMENT: Same visual language throughout (not "elegant header, generic body, minimal footer")
- NO DIALECT SHIFTS: Typography, color, spacing, and border treatment maintain one voice
- SHARED VISUAL DNA: If you isolated any section, could you identify it as belonging to this page?

Scoring guide:
- PASS: "Same design intent visible across entire page. I would identify any random section as belonging here."
- FAIL: "Header looks different from body which looks different from footer. Multiple visual personalities competing."

The ceiling experiment PASSED coherence (typography discipline, consistent zone labeling). This sub-criterion is the EASIEST to pass. If it fails, something is fundamentally wrong with the build process.
```

**PA-05c: PROPORTIONATE (with expanded sub-dimensions)**

```
PA-05c (PROPORTIONATE): Does the spatial balance feel considered?

THIS IS THE SUB-CRITERION MOST LIKELY TO FAIL. It failed in the ceiling experiment. It requires the most granular evaluation.

Evaluate ALL THREE sub-dimensions separately:

PA-05c-3a (HORIZONTAL PROPORTION):
- Does the content container use 65-80% of viewport width at 1440px?
- Do the margins feel confident (intentional breathing room) or wasteful (content lost in empty space)?
- PASS: "Content fills its width with authority. Margins frame it deliberately."
- FAIL: "Content is a narrow strip in a wide viewport (<65%), or edge-to-edge with no breathing room (>85%)."
- Ceiling failure: Content appeared to use ~50% of viewport width in places.

PA-05c-3b (VERTICAL PROPORTION):
- Is visual weight distributed across the full scroll depth?
- Does every third of the page (0-33%, 33-66%, 66-100%) have at least one designed moment?
- PASS: "The page sustains visual interest from top to bottom. Each section earns its scroll depth."
- FAIL: "All visual weight concentrated in first third, remainder is monotone or void."
- Ceiling failure: Visual interest died at ~15-20% scroll depth. 70-80% was blank cream.

PA-05c-3c (BREATHING PROPORTION):
- Is negative space designed or abandoned?
- Every area of empty space should feel like silence in music -- purposeful, tension-building.
- PASS: "Empty space creates anticipation or rest. It participates in the composition."
- FAIL: "Empty space feels like a dropped signal. Accidental. Momentum-killing."
- Ceiling failure: 70-80% of scroll was "abandoned" negative space, not "designed" breathing.

ALL THREE sub-dimensions must PASS for PA-05c to PASS. If ANY single sub-dimension FAILS, PA-05c = FAIL. Name the failing sub-dimension(s).
```

**PA-05d: POLISHED**

```
PA-05d (POLISHED): Is execution quality high?

Look for these specific signals:
- NO MISSING ELEMENTS: Footer present? All sections complete? No placeholder content?
- TOKEN COMPLIANCE: Typography, color, spacing use design system values (not arbitrary)
- TRANSITION QUALITY: Transitions between sections are typed (not uniform gaps)
- NO ARTIFACTS: No stray borders, orphaned elements, broken alignment, overlapping text

Scoring guide:
- PASS: "Ready to ship as-is. Nothing needs cleanup."
- FAIL: "Needs work before showing anyone. Specific defects visible."

The ceiling experiment PASSED polish (where content existed, execution was high). The middle experiment PASSED with minor defects (CPL +2 over limit, missing footer). For flagship: polish must be FLAWLESS. Any missing element = FAIL.
```

### Composite Scoring

```
PA-05 COMPOSITE SCORING:
- 4/4 sub-criteria PASS: PA-05 = YES (ship-ready)
- 3/4 sub-criteria PASS: PA-05 = YES WITH RESERVATIONS (name the failing criterion)
- 2/4 or fewer PASS: PA-05 = NO (would not ship)

For flagship: PA-05 must be >= 3/4 (YES or YES WITH RESERVATIONS) to pass the shipping gate.
PA-05 score of 2/4 or below = BLOCKING. Build cannot ship.
```

---

## 4. RUBRIC FLOW: Gate-Then-Ranking

### Invocation Text for Weaver-Synthesizer Prompt

```
RUBRIC FLOW: GATE FIRST, THEN RANK

The PA rubric operates in two sequential phases. NEVER rank before gating.

PHASE 1: GATE (Binary -- reject or pass)

Gate questions determine whether the page CAN ship. A GATE FAIL means the page is rejected regardless of how well it scores on other criteria.

GATE-LEVEL QUESTIONS (any FAIL = page cannot ship):
- PA-01 at WOULD-NOT-SHIP severity: First-impression revulsion = GATE FAIL
- PA-05 composite < 3/4: Signature question below threshold = GATE FAIL
- PA-09 at CATASTROPHIC severity (6+ viewport-heights dead space): Spatial collapse = GATE FAIL
- PA-17 FAIL (Ceiling+ mandatory): Rhythm failure at ceiling tier = GATE FAIL
- PA-41 FAIL (Ceiling+ mandatory): Repetition monotony at ceiling tier = GATE FAIL
- PA-50: 2+ consecutive blank viewport-heights = GATE FAIL
- PA-51: VOID-DOMINATED classification (<40% content) = GATE FAIL
- PA-52: Any third of page lacks designed moment = GATE FAIL (for Flagship tier)

GATE DECISION:
- ALL gate questions PASS: Proceed to PHASE 2 (Ranking)
- ANY gate question FAIL: STOP. Page verdict = DO NOT SHIP. List ALL gate failures. Do not proceed to ranking.

PHASE 2: RANKING (Comparative -- choose between viable options)

Only reached if ALL gates pass. Ranking evaluates quality RELATIVE to expectations and previous experiments.

RANKING DIMENSIONS:
- PA-05 composite score (3/4 vs 4/4)
- PA-20 personality match (does the three-word personality match design intent?)
- PA-35 engagement curve (does interest sustain through full scroll?)
- PA-44 metaphor expression level (structural > atmospheric > labeled > announced)
- PA-45 design highlight presence (can you point to a specific moment of excellence?)
- PA-48 comparative ranking (where does this fall among hypothetical alternatives?)

RANKING DECISION:
- HIGH: PA-05 = 4/4, metaphor structural, highlight present, engagement sustained, ranked 1st-2nd of 5
- MEDIUM: PA-05 = 3/4, metaphor atmospheric, highlight present, engagement mostly sustained, ranked 2nd-3rd of 5
- LOW: PA-05 = 3/4, metaphor labeled/announced, no clear highlight, engagement fades, ranked 3rd-4th of 5

FINAL VERDICT:
- GATE FAIL = DO NOT SHIP (list all gate failures)
- GATE PASS + RANKING HIGH = SHIP (ready)
- GATE PASS + RANKING MEDIUM = SHIP WITH NOTES (document polish opportunities)
- GATE PASS + RANKING LOW = SHIP WITH RESERVATIONS (the page meets minimums but is not showcasing the design system's best)
```

---

## 5. SCREENSHOT PROTOCOL

### Pre-Capture Specification (Team Lead Responsibility)

**Invocation text for team lead / coordination spec:**

```
SCREENSHOT PRE-CAPTURE PROTOCOL

The team lead captures ALL screenshots BEFORE spawning any auditors. Auditors receive screenshots via Read tool. NO auditor uses Playwright directly. This eliminates Playwright contention and enables 9 parallel auditors.

STEP 1: SERVE THE PAGE
- Start a local HTTP server (python3 -m http.server or equivalent) serving the built page
- Verify the page loads at the served URL
- Note: Playwright MCP blocks file:// protocol; HTTP serving is mandatory

STEP 2: PLAYWRIGHT CONFIGURATION
Navigate to the served URL, then execute:

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
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);

CRITICAL: document.fonts.ready MUST complete before any screenshot. Font loading affects computed styles, line heights, and character counts.

STEP 3: VIEWPORT SEQUENCE

Capture at THREE viewports in this order:

3a. 1440px viewport (primary desktop):
  - Resize to 1440 x 900
  - Wait 300ms for layout
  - Take COLD LOOK screenshot (fullPage: true) -> save as "cold-look-1440.png"
  - Scroll-through capture:
    - Start at scroll position 0
    - Take viewport screenshot (fullPage: false) -> save as "scroll-1440-01.png"
    - Scroll down 720px (80% of 900px viewport)
    - Take screenshot -> "scroll-1440-02.png"
    - Repeat until bottom of page
    - Record total number of scroll screenshots

3b. 768px viewport (tablet/narrow):
  - Resize to 768 x 1024
  - Wait 300ms
  - Cold look screenshot -> "cold-look-768.png"
  - Scroll-through -> "scroll-768-01.png" through "scroll-768-NN.png"

3c. 1024px viewport (intermediate):
  - Resize to 1024 x 768
  - Wait 300ms
  - Cold look screenshot -> "cold-look-1024.png"
  - Scroll-through -> "scroll-1024-01.png" through "scroll-1024-NN.png"

STEP 4: FILE NAMING AND STORAGE

Save all screenshots to: {target-dir}/_perceptual-audit/screenshots/

Naming convention:
  cold-look-{width}.png           -- full-page cold look
  scroll-{width}-{NN}.png         -- scroll-through at position NN (zero-padded 2 digits)

Expected count: 3 cold looks + (5-15 scrolls x 3 viewports) = ~18-48 screenshots total
The Mode 4 ceiling experiment produced 102 screenshots (including multiple passes). For flagship, expect 40-60.

STEP 5: DISTRIBUTION

After ALL screenshots are captured, spawn 9 auditor agents (A through I).
Each auditor receives:
- Path to the screenshots directory
- Their assigned PA questions (from the deployment map)
- The Cold Look protocol instructions
- The PA question text (ONLY their assigned questions + PA-17/PA-41 mandatory)
- NO other context (no mechanism counts, no build plan, no tier model, no prior scores)

FRESH-EYES PRINCIPLE: Auditors receive ONLY screenshots + PA questions. Zero context about expectations, targets, or previous results.
```

---

## 6. CALIBRATION AND WARM-UP

### Auditor Calibration Protocol

**Invocation text for auditor prompts:**

```
CALIBRATION (Read BEFORE looking at any screenshots):

You are evaluating a FLAGSHIP-tier page. This is the highest quality tier in the design system. Your evaluation standards should reflect this.

You have NO CONTEXT about:
- How many mechanisms were deployed
- What metaphor was intended
- What previous experiments scored
- What tier this page targets
- What the build plan specified

You DO know:
- This is a single HTML page meant to serve as authoritative technical documentation
- The design system values: warm, authoritative, unhurried
- You are looking at screenshots, not source code
- Your gut reaction matters more than analysis

COLD LOOK PROTOCOL:
1. Open the cold look screenshot at your first assigned viewport
2. Do NOT read the text. Look at SHAPE, COLOR, WEIGHT for 5 seconds
3. Write your cold look response IMMEDIATELY (this is LOCKED forever):
   COLD LOOK ({WIDTH}px):
   Gut reaction: [one sentence]
   Worst thing:  [one element or area]
   Best thing:   [one element]
   Ship verdict: YES / YES WITH RESERVATIONS / NO
4. Do NOT change your cold look after reading further screenshots
5. Repeat independently for each viewport

THEN proceed to your assigned PA questions in order, using the scroll-through screenshots to examine the page at viewport scale.

LANGUAGE RULES:
- Do NOT use CSS property names (px, rem, padding, margin, font-size, etc.)
- DO use perceptual language (cramped, spacious, heavy, light, jarring, smooth, etc.)
- Describe what you SEE and FEEL, not what you KNOW about the underlying code
```

**Note:** This calibration text deliberately OMITS reference scores from previous experiments. The fresh-eyes principle prohibits auditors from knowing that the middle tier scored PA-05 4/4 or that the ceiling scored 1.5/4. Those anchors are for the WEAVER-SYNTHESIZER only (who contextualizes auditor findings against history AFTER auditors have submitted their locked evaluations).

### Weaver-Synthesizer Calibration

**Invocation text for weaver-synthesizer prompt:**

```
SYNTHESIZER CALIBRATION (for contextualizing auditor findings):

After all 9 auditors have submitted their findings, you synthesize them with these calibration anchors:

PREVIOUS EXPERIMENT SCORES (for context, not for overriding auditor findings):
- Middle-tier experiment: PA-05 = 4/4 (DESIGNED). Simple page, 2 scales, 12 mechanisms. Known defects: CPL +2, missing footer, token compliance 66.5%. Despite defects, composition felt intentional.
- Ceiling experiment: PA-05 = 1.5/4 (DO NOT SHIP). Complex page, 4 scales, 14 mechanisms. Known defects: catastrophic whitespace void (70-80% blank), metaphor announced not structural, no visual ending.
- CD-006 crown jewel: 39/40 overall. Represents the design system at peak quality. Designed transitions, purposeful breathing, confident spatial use. Built with agent iteration and messaging.

EXPECTED FLAGSHIP TARGETS:
- PA-05 >= 3/4 (ship threshold)
- PA-50: 0-1 consecutive blank viewport-heights (PASS)
- PA-51: >= 60% content (BALANCED or DENSE)
- PA-52: Designed moment in all three thirds
- PA-53: 65-80% width utilization
- PA-17 and PA-41: PASS (mandatory for Ceiling+ tier)

SYNTHESIS RULES:
- Do NOT dismiss auditor findings because they conflict with expectations
- Do NOT inflate scores to match targets
- If auditors unanimously flag a concern (as 9/9 did with the ceiling void), treat it as DEFINITIVE regardless of quantitative guardrail measurements
- Corroboration count matters: 1/9 = anecdotal, 3/9 = pattern, 5/9 = consensus, 7/9 = near-universal, 9/9 = definitive
```

---

## 7. CONVICTION LAYER TEXT (Layer 1 Insertable Lines)

**Lines for the Conviction Layer about perceptual quality:**

```
CONVICTION -- PERCEPTUAL TRUTH:

The last line of defense is not a checklist. It is 9 pairs of eyes that have never seen this page before. They will look at screenshots. They will not read your CSS. They will not count your mechanisms. They will feel whether this page is DESIGNED or merely BUILT.

The ceiling experiment scored 9/9 novelty, 8/8 soul compliance, 14 mechanisms deployed. Mode 4 perceptual audit: DO NOT SHIP. 70-80% of the page was blank cream. 6 questions scored WOULD-NOT-SHIP. The mechanisms existed in the CSS but were invisible under void.

Beauty is not the presence of technique. Beauty is the FELT experience of confident intention at every scale of attention. A page with 12 mechanisms and designed spatial confidence (middle tier) scored PA-05 4/4. A page with 14 mechanisms and catastrophic void (ceiling) scored PA-05 1.5/4.

The perceptual audit cannot be gamed. It cannot be pre-optimized. It cannot be studied in advance. It measures the gap between "passes every rule" and "is genuinely good." That gap is where quality lives.

If the flagship build prioritizes rule-compliance over spatial confidence, the PA will catch it. If void accumulates while mechanism count looks healthy, the PA will catch it. If the metaphor is announced rather than structural, the PA will catch it.

Build for the reader. The audit will verify.
```

---

## 8. EXECUTION SPEC TEXT (Layer 2 Binary PA Rules)

**Binary rules for the Execution Spec layer:**

```
EXECUTION SPEC -- PA GATE RULES (Binary, no judgment):

PA-SPATIAL-01: At 1440px, content container width MUST be 940-960px. Measure with computed styles.
PA-SPATIAL-02: At 1440px, 0 or 1 consecutive viewport-height positions may have <30% content coverage. 2+ consecutive = FAIL.
PA-SPATIAL-03: Total page scroll height must be >=60% meaningful content. Below 60% = FAIL.
PA-SPATIAL-04: Every third of the page (by scroll depth) MUST contain at least 1 designed moment with unique visual treatment. Any empty third = FAIL.
PA-SPATIAL-05: Content container at 1440px MUST use 65-80% of viewport width. Below 65% or above 85% = FAIL.
PA-SPATIAL-06: Maximum section spacing is 96px. Any gap >96px between content sections = FAIL (void accumulation signal).

PA-RHYTHM-01: No more than 4 consecutive sections may use identical spacing values. 5+ identical = monotony FAIL.
PA-RHYTHM-02: At least 3 section transitions must use TYPED transitions (visual shift, breathing moment, rhythm change). Fewer than 3 = FAIL.

PA-LANDMARK-01: Footer element must exist AND be reachable within 1 viewport-height of the last content section. Footer buried under void = FAIL.
PA-LANDMARK-02: At least 1 designed moment must exist in the page's second half (50-100% scroll depth). Zero second-half peaks = FAIL.

BUILDER SELF-CHECK (before declaring build complete):
Run Mode 1 Embedded audit: Screenshot at 1440px. Look 5 seconds. Answer PA-01 through PA-05. If PA-05 < 3/4, do NOT declare done. Then scroll through and verify no 2+ consecutive blank viewport-heights exist.
```

---

## 9. COORDINATION SPEC TEXT (Layer 3 PA Roles)

**Insertable coordination spec for PA deployment:**

```
COORDINATION SPEC -- PERCEPTUAL AUDIT DEPLOYMENT

PHASE: Post-build, after builder declares complete and passes self-check.

TEAM LEAD RESPONSIBILITIES:
1. Serve the built page via HTTP (python3 -m http.server)
2. Execute screenshot pre-capture protocol (see Screenshot Protocol)
3. Verify all screenshots saved (expect 40-60 files)
4. Spawn 9 auditor agents (A through I) in parallel
5. Each auditor receives: screenshot directory path + their PA questions + cold look protocol
6. Each auditor receives NO context about build plan, mechanism count, tier, or targets
7. Wait for all 9 auditors to write their findings files
8. Spawn weaver-synthesizer with access to all 9 findings files + lock sheet
9. Weaver produces AUDIT-REPORT.md with gate decision + ranked concerns
10. If GATE FAIL: page returns to builder with specific gate failures listed
11. If GATE PASS: page proceeds to ship decision

AUDITOR FILE OUTPUT:
Each auditor writes one findings file: findings-{domain}.md
- findings-impression-emotion.md (Auditor A)
- findings-readability-typography.md (Auditor B)
- findings-spatial-proportion-void.md (Auditor C)
- findings-flow-pacing.md (Auditor D)
- findings-grid-layout.md (Auditor E)
- findings-consistency-rhythm.md (Auditor F)
- findings-metaphor-ideology.md (Auditor G)
- findings-responsive.md (Auditor H)
- findings-adversarial.md (Auditor I)

TIMING:
- Screenshot pre-capture: 5-8 min
- 9 auditors in parallel: 10-18 min (longest is Auditor C at ~15-18 min)
- Weaver synthesis: 8-12 min
- Total PA phase: 25-38 min

INFORMATION ISOLATION (MANDATORY):
- Auditors CANNOT see each other's findings (parallel, independent)
- Auditors CANNOT see the lock sheet (no awareness of what is LOCKED vs CHALLENGEABLE)
- Auditors CANNOT see build plan, mechanism count, or design intent
- Weaver CANNOT dismiss findings; can only classify and rank them
- Weaver CAN see lock sheet + all findings (synthesis requires both)

GATE CHECK (Team Lead, after Weaver completes):
Read AUDIT-REPORT.md. Check gate decision.
- GATE FAIL: Send builder the list of gate failures. Builder must fix and re-submit for fresh PA.
- GATE PASS: Record ship decision. Proceed.

DUAL PA PROTOCOL (if specified in experiment design):
Run two INDEPENDENT PA cycles with different auditor instances. Compare verdicts. If they disagree on gate decision, escalate to human review.
```

---

## 10. SEVERITY MAPPING (PA Findings to Gate Decisions)

### Complete Severity-to-Action Map

```
SEVERITY MAPPING: How PA Findings Map to Ship Decisions

PERCEPTION TRACK SEVERITIES:
| Severity | Definition | Gate Impact | Action |
|----------|-----------|-------------|--------|
| WOULD-NOT-SHIP | A designer would refuse to release this. Fundamental quality failure. | GATE FAIL if on a gate question. BLOCKING if on any question with 5+ auditor corroboration. | Must fix before shipping. Returns to builder. |
| LOOKS-WRONG | Something is visually off. Not catastrophic but noticeable. | Does NOT trigger gate fail alone. Accumulation of 5+ LOOKS-WRONG = concern escalation. | Address if time permits. Document for fix list. |
| COULD-BE-BETTER | Polish opportunity. Not wrong, just not excellent. | Never triggers gate fail. | Document for future. Do not block ship. |

RULE TRACK SEVERITIES:
| Severity | Definition | Gate Impact | Action |
|----------|-----------|-------------|--------|
| SOUL VIOLATION | Violates one of 8 soul rules (border-radius: 0, etc.) | ALWAYS GATE FAIL | Must fix. Non-negotiable. |
| CONVENTION BUG | Violates design system convention | GATE FAIL if convention is LOCKED | Must fix if locked. Evaluate if challengeable. |
| OVERFLOW | Exceeds guardrail threshold | GATE FAIL if guardrail is a hard floor | Fix to within threshold. |

CORROBORATION ESCALATION:
| Auditor Agreement | Classification | Action |
|-------------------|---------------|--------|
| 1/9 flagged | ANECDOTAL | Document. Do not escalate unless WOULD-NOT-SHIP on gate question. |
| 3/9 flagged | PATTERN | Document with emphasis. Likely valid concern. |
| 5/9 flagged | CONSENSUS | Treat as HIGH PRIORITY. Very likely a real problem. |
| 7/9 flagged | NEAR-UNIVERSAL | Treat as BLOCKING equivalent even if individual severity is LOOKS-WRONG. |
| 9/9 flagged | DEFINITIVE | BLOCKING. No further evidence needed. This IS the dominant finding. (Ceiling void was 9/9.) |

GATE QUESTION LIST (for reference):
These PA questions directly affect the ship/no-ship gate:
- PA-01 (at WOULD-NOT-SHIP severity)
- PA-05 (composite < 3/4)
- PA-09 (at CATASTROPHIC severity: 6+ viewport-heights dead space)
- PA-17 (FAIL at Ceiling+ tier)
- PA-41 (FAIL at Ceiling+ tier)
- PA-50 (2+ consecutive blank viewports)
- PA-51 (VOID-DOMINATED classification)
- PA-52 (any third without designed moment, at Flagship tier)

NON-GATE QUESTIONS:
All other PA questions contribute to the RANKING phase (quality assessment within passing pages) but cannot individually prevent shipping. However, the corroboration escalation rule applies: 7+ auditors flagging ANY question at LOOKS-WRONG or above = effective BLOCKING.

PERCEPTION-RULE INTERACTION:
- A finding CAN exist on BOTH tracks simultaneously (e.g., void is both WOULD-NOT-SHIP on perception AND OVERFLOW on rule)
- Perception track findings can NEVER be dismissed by rule track compliance ("the convention allows it" does NOT override "this looks wrong")
- When perception and rules conflict: escalate to human, do not auto-resolve
```

---

## 11. CEILING+ TIER ELEVATION RULES (PA-17 and PA-41)

**Invocation text for ALL auditor prompts (not just Auditor F):**

```
CEILING+ MANDATORY EVALUATION (applies to ALL auditors):

Regardless of your assigned questions, you MUST also evaluate:

PA-17 (VISUAL RHYTHM): Is there a visual rhythm (like a beat in music), or is the section sequencing random? If there IS a rhythm, is it MUSICAL (varied, purposeful shifts in tempo) or METRONOMIC (identical spacing repeated without variation)?
- The middle-tier experiment was "metronomic rather than musical" -- consistent spacing but no variation. This was the highest-leverage perceptual finding.
- MUSICAL rhythm PASSES. METRONOMIC rhythm is a CONDITIONAL PASS with a note. RANDOM/NO rhythm FAILS.
- For Ceiling+ tier: PA-17 FAIL = page verdict cannot exceed YES WITH RESERVATIONS.

PA-41 (REPETITION MONOTONY): Are any visual patterns repeated more than four times in a row without variation? Does repetition serve a purpose or create monotony?
- The ceiling experiment had zone labels repeating identically without differentiation, compounding the spatial monotony.
- PURPOSEFUL repetition (e.g., list items that SHOULD match) = PASS.
- MONOTONOUS repetition (reader starts skimming because "I've seen this already") = FAIL.
- For Ceiling+ tier: PA-41 FAIL = page verdict cannot exceed YES WITH RESERVATIONS.

Record your PA-17 and PA-41 observations in your findings file, even if your primary domain is unrelated (e.g., Auditor G on metaphor should still note rhythm observations).
```

---

## 12. ADVERSARIAL AUDITOR DEEP INVOCATION (Auditor I)

**Invocation text for Auditor I prompt:**

```
ADVERSARIAL AUDITOR (Auditor I):

Your role is DIFFERENT from other auditors. While they evaluate what IS, you evaluate what COULD GO WRONG.

PA-26 (FOSSILIZED CONVENTIONS): Is any visual convention CAUSING a visual problem? Look for places where a rule or pattern is being followed even though it hurts the page. "This looks bad BECAUSE of the convention, not DESPITE it."

PA-27 (INTENTION vs CONSTRAINT): If you were designing this from scratch for the same content, would you design it this way? If not, what would you change? This question distinguishes between choices made BY the designer and choices made FOR the designer by constraints.

PA-28 (GAMING TEST): How could someone make this look terrible while passing every rule? Identify the layout's vulnerabilities -- the places where rule compliance could coexist with visual failure.
- The ceiling experiment is the PROOF that this is possible: 9/9 novelty, 8/8 soul, 14 mechanisms, and yet DO NOT SHIP due to 70% void.
- Your job is to find if the flagship has similar vulnerabilities.

PA-48 (COMPARATIVE RANKING): If this layout were one of five options for the same content, would this be your first choice, last choice, or somewhere in the middle? Why?
- Be honest. If it's second-to-last (as the ceiling was ranked), say so.
- If it's genuinely first choice, explain what makes it better than alternatives you can imagine.

ADDITIONAL ADVERSARIAL MANDATE:
After answering your four questions, write a brief "VULNERABILITY REPORT" section in your findings:
- List 3 ways this page could pass all rules but still look bad
- List 1 way the PA audit itself could miss a real problem
- If you see a void accumulation pattern (even mild), flag it -- you are the backup void detector after Auditor C
```

---

## 13. MODE 1 EMBEDDED AUDIT (Builder Self-Check)

**Invocation text for builder agent prompt (not for PA auditors):**

```
BUILDER SELF-CHECK (Mode 1 Embedded -- 90 seconds, MANDATORY before declaring done):

BEFORE you declare the build complete, perform this self-audit:

1. Take a screenshot at 1440px viewport (fullPage: true)
2. LOOK at it for 5 seconds without reading text
3. Answer these 5 questions in your findings:
   - PA-01: What's the first thing that bothers you?
   - PA-02: Is any text uncomfortable to read?
   - PA-03: Does this feel like one designer or three?
   - PA-04: Where does your eye go first? Should it go there?
   - PA-05: Would you put your name on this? (Score all 4 sub-criteria: DESIGNED, COHERENT, PROPORTIONATE, POLISHED)
4. If PA-05 < 3/4: DO NOT declare done. Fix the failing sub-criteria first.
5. Quick void check: scroll through the full page. If you see 2+ consecutive viewport-heights of mostly blank space (>70% empty), you have a void problem. Fix before declaring done.

This self-check is NOT a replacement for Mode 4. It is a MINIMUM GATE. If the builder cannot pass Mode 1, Mode 4 will certainly fail.
```

---

## 14. CROSS-SKILL INTEGRATION (PA + TC)

### How PA References the Tension-Composition Skill

**Invocation text for the coordination layer:**

```
TC-PA SEQUENCING:

The tension-composition skill BUILDS. The perceptual-auditing skill VERIFIES.

CORRECT sequence:
1. TC skill derives metaphor from content tension
2. Builder implements the metaphor using mechanism catalog
3. Builder runs Mode 1 self-check (PA embedded)
4. Team lead runs Mode 4 full PA audit
5. PA results feed back to builder for fixes (if gate fails)
6. Fixed build gets re-audited (fresh PA, new auditor instances)

INCORRECT sequence:
1. Reading PA skill before building (inverts the process)
2. Designing to pass PA questions (audit optimization trap)
3. Using PA scores to GUIDE composition decisions (guardrails verify, not design)

The PA skill's critical warning (lines 5-43 of SKILL.md) states: "If you are consulting this skill BEFORE building, you are doing it wrong." This warning is NON-NEGOTIABLE. Builders must not see PA questions before build completion.

METAPHOR-AWARE AUDITING:
When PA auditors encounter a metaphor-driven layout:
- PA-42, PA-43, PA-44 specifically evaluate metaphor quality
- Auditor G (Metaphor+Ideology) is the PRIMARY metaphor evaluator
- Other auditors should note metaphor impressions but NOT use metaphor as an excuse for spatial failures
- The metaphor SHAPES experience; the guardrails PREVENT it from BREAKING experience
- If the metaphor forces a guardrail violation (void, compression, width), the IMPLEMENTATION failed, not the metaphor
```

---

## 15. INFORMATION ISOLATION ENFORCEMENT

**Binary rules for information isolation:**

```
INFORMATION ISOLATION (BINARY -- no judgment required):

AUDITORS MUST NOT RECEIVE:
- Mechanism count (e.g., "14 mechanisms deployed") -- if auditor knows the count, they will see mechanisms that aren't perceptually visible
- Build plan or design intent -- if auditor knows what was intended, they will evaluate intent rather than result
- Tier designation (e.g., "this is flagship tier") -- if auditor knows the tier, their standards shift to match expectations rather than react to reality
- Previous experiment scores -- if auditor knows the middle tier scored PA-05 4/4, they will anchor to that number
- Lock sheet -- if auditor knows what is LOCKED, they will avoid challenging it even when it looks wrong perceptually

AUDITORS MUST RECEIVE:
- Screenshot directory path (all pre-captured screenshots)
- Their assigned PA questions (text of each question, including scoring guides)
- Cold Look protocol instructions
- Language rules (no CSS vocabulary)
- PA-17 and PA-41 mandatory evaluation instructions (Ceiling+ elevation)

NOTHING ELSE.

The fresh-eyes principle is not a preference. It is the MECHANISM by which PA catches failures that rule-based audits miss. The ceiling void was caught because 9 context-starved auditors reacted to what they SAW, not what they KNEW. If they had known "14 mechanisms were deployed," they might have looked for mechanisms instead of noticing the void.

VERIFICATION: Team lead must review each auditor's prompt BEFORE spawning to verify zero-context compliance. If any context leaks into an auditor prompt, that auditor's findings are CONTAMINATED and must be excluded from synthesis.
```

---

## 16. VOID GUARDRAIL SPECIFICATIONS (Build-Time Enforcement)

**Binary specifications for builder and auditor use:**

```
VOID GUARDRAILS (Build-Time Self-Check + Audit-Time Verification):

| Guardrail | Threshold | How to Check | Pass | Fail |
|-----------|-----------|-------------|------|------|
| Max consecutive blank viewports | 1.5 vh at 1440px with <30% content | Scroll through, count blank positions | 0-1 consecutive | 2+ consecutive |
| Min content percentage | 60% of total scroll height | Estimate content vs empty ratio | >= 60% | < 60% |
| Visual weight distribution | Every third has 1+ designed moment | Divide page into thirds, check each | All thirds have moment | Any third empty |
| Width utilization | 65-80% of viewport at 1440px | Measure content container vs viewport | 65-80% | <65% or >85% |
| Max section gap | 96px between content sections | Measure or estimate largest gap | <= 96px | > 96px |
| Footer reachability | Footer within 1 vh of last content | Scroll to end, check footer proximity | Within 1 vh | Buried under void |

BUILDER: Check ALL 6 guardrails before declaring build complete.
AUDITOR C: Verify ALL 6 guardrails during PA-50-53 evaluation.
WEAVER: Report guardrail status in AUDIT-REPORT.md quantitative section.

If ANY void guardrail FAILS: this is a GATE FAIL. Page cannot ship until fixed.
```

---

## SUMMARY: What This Document Provides

| Section | Content | Target Layer |
|---------|---------|-------------|
| 1. Deployment Map | 53 questions across 9 auditors, load-balanced | Coordination Spec |
| 2. PA-50-53 Invocation | Deep detection-quantification-classification-assessment pipeline | Execution Spec + Coordination |
| 3. PA-05 Protocol | Calibration anchors, 4 sub-criteria scoring guides, composite rules | Conviction + Execution |
| 4. Rubric Flow | Gate-then-ranking two-phase structure | Coordination Spec |
| 5. Screenshot Protocol | Pre-capture, viewports, naming, distribution | Coordination Spec |
| 6. Calibration Warm-Up | Auditor zero-context calibration + weaver contextual calibration | Coordination Spec |
| 7. Conviction Lines | Perceptual truth statements for Layer 1 | Conviction Layer |
| 8. Execution Rules | Binary PA gate rules for Layer 2 | Execution Spec |
| 9. Coordination Roles | PA team structure, timing, isolation, gates | Coordination Spec |
| 10. Severity Mapping | How findings map to ship decisions | Coordination Spec |
| 11. Ceiling+ Elevation | PA-17/PA-41 mandatory evaluation rules | All auditor prompts |
| 12. Adversarial Deep | Auditor I specialized invocation | Coordination Spec |
| 13. Mode 1 Embedded | Builder self-check invocation | Execution Spec |
| 14. Cross-Skill Integration | TC-PA sequencing and interaction rules | Coordination Spec |
| 15. Information Isolation | Binary isolation enforcement rules | Coordination Spec |
| 16. Void Guardrails | Build-time and audit-time void thresholds | Execution Spec |

**Total insertable text blocks:** 16 sections, each with ready-to-integrate prompt language.
**All 53 PA questions covered:** 48 core + PA-50-53 void pipeline + PA-05 expanded sub-criteria.
**Key innovation:** The void detection pipeline (PA-50-53) is a SEQUENTIAL four-stage process (detect -> quantify -> classify -> assess) that prevents the ceiling experiment's dominant failure mode from recurring undetected.
