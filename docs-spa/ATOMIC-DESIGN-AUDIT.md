# Atomic Design Audit Framework

**Version:** 2.0 - Atomic Edition
**Created:** 2026-01-26
**Purpose:** Maximum-granularity UX/UI audit with enforced thoroughness

---

## CRITICAL: How This Document Works

This is not a list of questions to answer loosely. **Every question has been decomposed into atomic sub-questions that MUST be answered with specific measurements.**

### The Three Enforcement Mechanisms

**1. ATOMIC SUB-QUESTIONS**
Every main question contains 5-10 sub-questions. Each sub-question requires:
- A specific ACTION (what to do)
- A specific MEASUREMENT (numbers, not opinions)
- A specific RECORD (where to log it)
- A PASS/FAIL judgment based on objective criteria

**2. VERIFICATION CHECKPOINTS**
After every 5 main questions, a mandatory checkpoint:
- Screenshots required
- Measurements verified
- No "looks fine" answers allowed
- Orchestrator validates before proceeding

**3. ADVERSARIAL REVIEW**
After completing a page:
- A second agent reviews the work
- Spot-checks 20% of measurements
- Flags any skimmed or incorrect answers
- Work is rejected if quality is insufficient

---

## Content Preservation Mandate

```
BEFORE ANY CHANGE, VERIFY:

✅ ALLOWED without approval:
- CSS property changes only
- Adding wrapper elements (preserving ALL content)
- Restructuring HTML (preserving ALL content)

🚫 PROHIBITED without explicit approval:
- Removing ANY text
- Summarizing content
- "Simplifying" for clarity
- Deleting elements

IF A QUESTION SUGGESTS CONTENT CHANGES:
→ LOG THE FINDING
→ DO NOT MAKE THE CHANGE
→ FLAG FOR USER REVIEW
```

---

## Playwright MCP: Required Commands

Every audit MUST use these commands. No visual inspection without tools.

```javascript
// Navigate to page
browser_navigate({ url: "http://localhost:3000/synthesis/[page-name]" })

// Get accessibility tree
browser_snapshot({})

// Take screenshot
browser_take_screenshot({ type: "png", fullPage: true, filename: "[page]-[timestamp].png" })

// Measure CSS values
browser_evaluate({
  function: `() => {
    const el = document.querySelector('[selector]');
    const styles = getComputedStyle(el);
    return {
      marginTop: styles.marginTop,
      marginBottom: styles.marginBottom,
      marginLeft: styles.marginLeft,
      marginRight: styles.marginRight,
      paddingTop: styles.paddingTop,
      paddingBottom: styles.paddingBottom,
      paddingLeft: styles.paddingLeft,
      paddingRight: styles.paddingRight,
      fontSize: styles.fontSize,
      fontWeight: styles.fontWeight,
      lineHeight: styles.lineHeight,
      color: styles.color,
      backgroundColor: styles.backgroundColor,
      borderRadius: styles.borderRadius,
      boxShadow: styles.boxShadow,
      border: styles.border
    };
  }`
})
```

---

# CATEGORY 1: INFORMATION ARCHITECTURE

## Question 1: Information Type Classification

**Main Question:** What type of information is this section presenting?

### Sub-Question 1.1: Content Analysis
- **ACTION:** Read the section content thoroughly
- **CLASSIFY AS ONE OF:**
  - [ ] Reference (facts to look up)
  - [ ] Tutorial (steps to follow)
  - [ ] Comparison (contrasting options)
  - [ ] List (enumerated items)
  - [ ] Hierarchy (nested levels)
  - [ ] Process (workflow/sequence)
  - [ ] Concept (abstract explanation)
- **RECORD:** Classification = [type]
- **CONFIDENCE:** [HIGH/MEDIUM/LOW]

### Sub-Question 1.2: User Intent Match
- **ACTION:** Consider why a user would read this section
- **QUESTION:** Does the current presentation match that intent?
- **RECORD:** User intent = [description]
- **RECORD:** Presentation matches intent = [YES/NO]
- **IF NO:** Describe mismatch = [description]

### Sub-Question 1.3: Comparison to Similar Content
- **ACTION:** Find similar content type on other pages
- **RECORD:** Similar section found on = [page name]
- **QUESTION:** Is this section structured the same way?
- **RECORD:** Structure matches = [YES/NO]
- **IF NO:** Describe difference = [description]

### Sub-Question 1.4: Screenshot Evidence
- **ACTION:** Take screenshot of section
- **FILENAME:** info-type-q1-[section]-[timestamp].png
- **ANNOTATE:** Circle/highlight the classification evidence

**CHECKPOINT 1.1:** Before proceeding, verify:
- [ ] Classification recorded
- [ ] User intent documented
- [ ] Comparison completed
- [ ] Screenshot taken

---

## Question 2: Semantic Structure Evaluation

**Main Question:** What HTML semantic structure does this content use, and is it optimal?

### Sub-Question 2.1: Current Structure Identification
- **ACTION:** Inspect HTML via browser dev tools or browser_snapshot
- **RECORD:** Root element tag = [tag name]
- **RECORD:** Child element structure = [description]
- **RECORD:** CSS classes used = [list of classes]

### Sub-Question 2.2: Alternative Structure Analysis
- **ACTION:** Consider ALL possible structures:
  - [ ] `<table>` - tabular data with rows/columns
  - [ ] `<dl>` (definition list) - term/definition pairs
  - [ ] `<ol>` (ordered list) - sequential items
  - [ ] `<ul>` (unordered list) - non-sequential items
  - [ ] Cards (divs with card styling) - discrete units
  - [ ] Accordion - expandable sections
  - [ ] Tabs - switchable views
- **RECORD:** Best alternative structure = [structure]
- **RECORD:** Reasoning = [why this is better]

### Sub-Question 2.3: Structure Optimality Score
- **EVALUATE:** Is current structure the BEST choice?
- **SCORE:**
  - 5 = Optimal, couldn't be better
  - 4 = Good, minor improvements possible
  - 3 = Acceptable, clear improvements exist
  - 2 = Suboptimal, should change
  - 1 = Wrong, definitely needs restructuring
- **RECORD:** Score = [1-5]
- **RECORD:** Justification = [reasoning]

### Sub-Question 2.4: Content Preservation Check
- **ACTION:** If restructuring recommended, verify:
- **WORD COUNT CURRENT:** [count]
- **WORD COUNT AFTER RESTRUCTURE:** [must be equal or note additions only]
- **RECORD:** Content preserved = [YES/NO]

### Sub-Question 2.5: Screenshot Comparison
- **ACTION:** Take current screenshot
- **FILENAME:** structure-current-q2-[section]-[timestamp].png
- **IF RESTRUCTURING RECOMMENDED:**
  - Mock up what new structure would look like
  - Note: This is evaluation only, don't implement yet

**CHECKPOINT 2.1:** Before proceeding, verify:
- [ ] Current structure documented
- [ ] Alternatives evaluated
- [ ] Optimality scored
- [ ] Content preservation confirmed
- [ ] Screenshots taken

---

## Question 3: Structure Optimality Deep Dive

**Main Question:** Is the current structure the OPTIMAL choice, or just "okay"?

### Sub-Question 3.1: The "Explain Verbally" Test
- **ACTION:** Imagine explaining this content to someone verbally
- **RECORD:** How would you organize it verbally? = [description]
- **RECORD:** Does current visual structure match verbal organization? = [YES/NO]
- **IF NO:** Describe the gap = [description]

### Sub-Question 3.2: The "Best-in-Class" Comparison
- **ACTION:** Think of how Stripe, Linear, or Vercel docs would structure this
- **RECORD:** World-class version would be = [description]
- **RECORD:** Gap from current to world-class = [description]
- **RECORD:** Gap severity = [LARGE/MEDIUM/SMALL/NONE]

### Sub-Question 3.3: The "5-Second Scan" Test
- **ACTION:** Look at section for only 5 seconds
- **RECORD:** What did you understand? = [description]
- **RECORD:** What was unclear? = [description]
- **RECORD:** Could structure changes improve 5-second comprehension? = [YES/NO]

### Sub-Question 3.4: Information Hierarchy Check
- **ACTION:** Identify the hierarchy of information
- **RECORD:** Primary information = [what]
- **RECORD:** Secondary information = [what]
- **RECORD:** Tertiary information = [what]
- **QUESTION:** Does visual hierarchy match information hierarchy?
- **RECORD:** Match = [YES/NO]
- **IF NO:** Describe mismatch = [description]

### Sub-Question 3.5: Redundancy Check
- **ACTION:** Look for redundant elements
- **RECORD:** Redundant elements found = [list or "none"]
- **QUESTION:** Could anything be removed WITHOUT losing information?
- **RECORD:** Removable elements = [list or "none"]
- **⚠️ NOTE:** Do NOT remove content - log for user review

**CHECKPOINT 3.1:** Before proceeding, verify:
- [ ] Verbal test completed
- [ ] Best-in-class comparison done
- [ ] 5-second scan test done
- [ ] Hierarchy analyzed
- [ ] Redundancy checked

---

## Question 4: Relationship Clarity

**Main Question:** Does the structure make relationships between items clear?

### Sub-Question 4.1: Identify All Relationships
- **ACTION:** List every relationship in this section:
  - [ ] Parent-child relationships
  - [ ] Sequential relationships (A before B)
  - [ ] Comparative relationships (A vs B)
  - [ ] Causal relationships (A causes B)
  - [ ] Grouping relationships (A, B, C are similar)
- **RECORD:** Relationships found = [list each with type]

### Sub-Question 4.2: Visual Representation Check
- **FOR EACH RELATIONSHIP:**
  - **RECORD:** Relationship [X] is visually represented by = [what visual cue]
  - **QUESTION:** Is this representation clear?
  - **RECORD:** Clarity = [CLEAR/UNCLEAR/MISSING]

### Sub-Question 4.3: Missing Visual Cues
- **ACTION:** Identify relationships that lack visual representation
- **RECORD:** Unrepresented relationships = [list]
- **FOR EACH:** Suggest visual cue = [suggestion]

### Sub-Question 4.4: Misleading Visual Cues
- **ACTION:** Check if any visual elements imply false relationships
- **RECORD:** Misleading cues found = [list or "none"]
- **IF ANY:** Describe the false implication = [description]

### Sub-Question 4.5: Measurement of Visual Grouping
- **ACTION:** Measure spacing between related items
- **ACTION:** Measure spacing between unrelated items
- **RECORD:** Related item spacing = [px]
- **RECORD:** Unrelated item spacing = [px]
- **QUESTION:** Is unrelated spacing > related spacing?
- **RECORD:** Correct spacing relationship = [YES/NO]
- **EXPECTED:** Unrelated spacing should be 1.5-2x related spacing

**CHECKPOINT 4.1:** Before proceeding, verify:
- [ ] All relationships identified
- [ ] Visual representations checked
- [ ] Missing cues documented
- [ ] Misleading cues documented
- [ ] Spacing measured

---

## Question 5: Scannability Assessment

**Main Question:** Could someone scan this and understand it in 5 seconds?

### Sub-Question 5.1: The Actual 5-Second Test
- **ACTION:** Set a timer for 5 seconds
- **ACTION:** Look at the section for exactly 5 seconds
- **ACTION:** Look away
- **RECORD:** What I understood = [list]
- **RECORD:** What I missed = [list]
- **RECORD:** What confused me = [list]

### Sub-Question 5.2: Heading Effectiveness
- **ACTION:** Read ONLY the headings in this section
- **RECORD:** Headings present = [list]
- **QUESTION:** Do headings alone convey the section's content?
- **RECORD:** Heading effectiveness = [EFFECTIVE/PARTIALLY EFFECTIVE/INEFFECTIVE]
- **IF NOT EFFECTIVE:** Suggest better headings = [suggestions]
- **⚠️ NOTE:** Content changes require approval

### Sub-Question 5.3: Visual Anchors
- **ACTION:** Identify visual anchor points (things that catch the eye)
- **RECORD:** Visual anchors = [list: icons, bold text, colors, etc.]
- **QUESTION:** Do anchors highlight the MOST important information?
- **RECORD:** Anchor appropriateness = [YES/NO]
- **IF NO:** What should be anchored instead? = [suggestion]

### Sub-Question 5.4: Information Density Measurement
- **ACTION:** Count distinct pieces of information in section
- **ACTION:** Measure section height in pixels
- **RECORD:** Information count = [number]
- **RECORD:** Section height = [px]
- **CALCULATE:** Density = info count / (height / 100)
- **RECORD:** Density score = [number]
- **EVALUATE:**
  - <2: Too sparse
  - 2-5: Good
  - 5-8: Dense but manageable
  - >8: Too dense

### Sub-Question 5.5: Entry Point Clarity
- **ACTION:** Identify where a reader's eye would enter this section
- **RECORD:** Natural entry point = [description]
- **QUESTION:** Is entry point the MOST important element?
- **RECORD:** Entry point appropriate = [YES/NO]

**CHECKPOINT 5.1:** Before proceeding, verify:
- [ ] 5-second test completed
- [ ] Headings evaluated
- [ ] Visual anchors identified
- [ ] Density calculated
- [ ] Entry point assessed

---

## Question 6: Verbal Organization Test

**Main Question:** If explained verbally, how would this content be organized?

### Sub-Question 6.1: Create Verbal Outline
- **ACTION:** Without looking at the visual, outline how you'd explain this verbally
- **RECORD:** Verbal outline:
  ```
  1. [First thing you'd say]
  2. [Second thing]
  3. [Third thing]
  ...
  ```

### Sub-Question 6.2: Compare to Visual Order
- **ACTION:** Document the actual visual order
- **RECORD:** Visual order:
  ```
  1. [First thing shown]
  2. [Second thing shown]
  3. [Third thing shown]
  ...
  ```
- **COMPARE:** Do orders match? = [YES/PARTIALLY/NO]
- **IF NOT:** Describe discrepancy = [description]

### Sub-Question 6.3: Identify Why Orders Differ
- **IF ORDERS DIFFER:**
  - **QUESTION:** Is the visual order better than verbal for screen consumption?
  - **RECORD:** Visual order justified = [YES/NO]
  - **RECORD:** Reasoning = [explanation]

### Sub-Question 6.4: User Flow Validation
- **ACTION:** Trace the path a user's eye would take
- **RECORD:** Eye path = [description of flow]
- **QUESTION:** Does this path make logical sense?
- **RECORD:** Path logical = [YES/NO]
- **IF NO:** Where does logic break? = [description]

**CHECKPOINT 6.1:** Before proceeding, verify:
- [ ] Verbal outline created
- [ ] Visual order documented
- [ ] Orders compared
- [ ] User flow validated

---

# ═══════════════════════════════════════════════════════════
#        CATEGORY 1 VERIFICATION CHECKPOINT
# ═══════════════════════════════════════════════════════════

## MANDATORY CHECKPOINT: Questions 1-6 Complete

Before proceeding to Category 2, complete this verification:

### Evidence Checklist
- [ ] Q1: Information type classification recorded with confidence level
- [ ] Q2: Current structure documented, alternatives evaluated, optimality scored
- [ ] Q3: Verbal test, best-in-class comparison, 5-second test completed
- [ ] Q4: All relationships mapped, visual representations checked
- [ ] Q5: Scannability metrics recorded, density calculated
- [ ] Q6: Verbal vs visual order compared

### Screenshot Checklist
- [ ] info-type-q1-[section]-[timestamp].png
- [ ] structure-current-q2-[section]-[timestamp].png
- [ ] Any additional screenshots for findings

### Measurement Checklist
- [ ] All spacing measurements recorded in pixels
- [ ] All density calculations completed
- [ ] All scores assigned (1-5 scales)

### Quality Gate
**Count of vague answers ("looks fine", "seems okay"):** [MUST BE 0]
**Count of missing measurements:** [MUST BE 0]
**Count of skipped sub-questions:** [MUST BE 0]

**IF ANY COUNT > 0:** Return to incomplete questions and complete properly.

**IF ALL COUNTS = 0:** Proceed to Category 2.

---

# CATEGORY 2: VISUAL HIERARCHY

## Question 7: Primary Element Identification

**Main Question:** What's the single most important thing in this section?

### Sub-Question 7.1: Content Importance Ranking
- **ACTION:** List all distinct elements in this section
- **RECORD:** Elements = [list all]
- **RANK:** Order by importance (1 = most important)
- **RECORD:** Ranking:
  ```
  1. [Most important element]
  2. [Second most important]
  3. [Third most important]
  ...
  ```

### Sub-Question 7.2: Visual Weight Measurement
- **ACTION:** For the #1 most important element:
- **MEASURE:** Font size = [px]
- **MEASURE:** Font weight = [number]
- **MEASURE:** Color contrast ratio = [ratio]
- **MEASURE:** Element size (width × height) = [px × px]
- **MEASURE:** Whitespace around it = [px on each side]

### Sub-Question 7.3: Visual Weight Comparison
- **ACTION:** For the #2 element, measure same properties:
- **RECORD:** #2 element measurements = [values]
- **QUESTION:** Does #1 have more visual weight than #2?
- **RECORD:** Hierarchy correct = [YES/NO]
- **IF NO:** Which property is wrong? = [property]

### Sub-Question 7.4: First-Look Test
- **ACTION:** Defocus your eyes (blur vision) and look at section
- **QUESTION:** What stands out most?
- **RECORD:** Most prominent element = [description]
- **QUESTION:** Is this the #1 importance element?
- **RECORD:** Match = [YES/NO]

### Sub-Question 7.5: Hierarchy Fix Recommendation
- **IF HIERARCHY INCORRECT:**
- **RECORD:** Current visual weight of #1 = [description]
- **RECORD:** Needed visual weight = [description]
- **RECORD:** CSS changes needed = [specific property changes]
- **RECORD:** Affected CSS lines = [line numbers]

**CHECKPOINT 7.1:** Before proceeding, verify:
- [ ] All elements ranked
- [ ] Measurements taken for top 2 elements
- [ ] First-look test completed
- [ ] Fix recommendations documented if needed

---

## Question 8: Visual Weight Match

**Main Question:** Does visual weight match importance?

### Sub-Question 8.1: Complete Visual Weight Audit
- **ACTION:** For EVERY element in section, measure and record:

| Element | Font Size | Weight | Color | Size | Whitespace | Importance Rank |
|---------|-----------|--------|-------|------|------------|-----------------|
| [name]  | [px]      | [num]  | [hex] | [px] | [px]       | [1-n]           |

- **RECORD:** Complete table with all elements

### Sub-Question 8.2: Weight-Importance Correlation
- **ACTION:** Sort table by visual weight (size × font size × contrast)
- **ACTION:** Compare to importance ranking
- **RECORD:** Weight order matches importance order = [YES/PARTIALLY/NO]
- **IF NOT:** List mismatches = [elements that are wrong]

### Sub-Question 8.3: Specific Measurements
- **FOR EACH MISMATCH:**
- **RECORD:** Element = [name]
- **RECORD:** Current visual weight = [calculated]
- **RECORD:** Expected visual weight = [should be higher/lower than X]
- **RECORD:** Specific CSS fix = [property: value]

### Sub-Question 8.4: Subordination Check
- **ACTION:** Identify elements meant to be secondary/supporting
- **QUESTION:** Are they visually subordinated?
- **RECORD:** Secondary elements = [list]
- **FOR EACH:** Properly subordinated = [YES/NO]
- **IF NO:** What makes it too prominent? = [description]

**CHECKPOINT 8.1:** Before proceeding, verify:
- [ ] Complete visual weight table created
- [ ] Correlation analyzed
- [ ] Mismatches documented with specific fixes
- [ ] Subordination checked

---

## Question 9: Eye Flow Path

**Main Question:** What should the eye go to first? Does it?

### Sub-Question 9.1: Intended Flow Documentation
- **ACTION:** Document the INTENDED reading flow
- **RECORD:** Intended path:
  ```
  1. Start at: [element]
  2. Then move to: [element]
  3. Then move to: [element]
  ...
  ```
- **RECORD:** Why this order? = [reasoning]

### Sub-Question 9.2: Actual Flow Test
- **ACTION:** Have fresh eyes look at section (or simulate by looking away for 30 seconds, then looking back)
- **RECORD:** Where did eyes go first? = [element]
- **RECORD:** Then where? = [element]
- **RECORD:** Actual path = [full sequence]

### Sub-Question 9.3: Flow Comparison
- **COMPARE:** Intended vs Actual
- **RECORD:** Match = [PERFECT/MOSTLY/PARTIALLY/NOT AT ALL]
- **FOR EACH DEVIATION:**
  - Intended step: [X]
  - Actual step: [Y]
  - Why deviation occurred: [visual reason]

### Sub-Question 9.4: Flow Blockers
- **ACTION:** Identify anything that disrupts natural flow
- **RECORD:** Flow blockers = [list: competing elements, visual noise, etc.]
- **FOR EACH BLOCKER:** How to reduce its weight = [suggestion]

### Sub-Question 9.5: Flow Enhancement
- **ACTION:** Identify opportunities to guide flow better
- **OPTIONS:**
  - [ ] Add visual hierarchy contrast
  - [ ] Add directional elements (arrows, lines)
  - [ ] Adjust whitespace to create flow
  - [ ] Reduce competing elements
- **RECORD:** Recommended enhancements = [list]

**CHECKPOINT 9.1:** Before proceeding, verify:
- [ ] Intended flow documented
- [ ] Actual flow tested
- [ ] Deviations analyzed
- [ ] Blockers identified
- [ ] Enhancements suggested

---

## Question 10: Reading Flow Clarity

**Main Question:** Is there a clear reading flow?

### Sub-Question 10.1: Flow Continuity Test
- **ACTION:** Trace the reading path continuously
- **QUESTION:** Are there any "jumps" where the eye has to search?
- **RECORD:** Jump points = [list locations or "none"]
- **FOR EACH JUMP:** What causes it? = [description]

### Sub-Question 10.2: Dead Ends Check
- **ACTION:** Identify any visual "dead ends"
- **DEFINITION:** A dead end is where the eye lands and has no clear next destination
- **RECORD:** Dead ends found = [list or "none"]
- **FOR EACH:** How to add continuation cue = [suggestion]

### Sub-Question 10.3: Competing Paths Check
- **ACTION:** Identify if multiple paths seem equally valid
- **RECORD:** Competing paths = [YES/NO]
- **IF YES:** Describe the ambiguity = [description]
- **IF YES:** How to resolve = [make one path dominant by...]

### Sub-Question 10.4: Return Path Check
- **ACTION:** After reading to the end, is there a clear way back?
- **QUESTION:** Can user navigate back to start easily?
- **RECORD:** Return navigation = [CLEAR/UNCLEAR]
- **IF UNCLEAR:** Suggestion = [how to improve]

**CHECKPOINT 10.1:** Before proceeding, verify:
- [ ] Flow continuity tested
- [ ] Dead ends identified
- [ ] Competing paths checked
- [ ] Return path evaluated

---

## Question 11: Subordination Assessment

**Main Question:** Are secondary elements appropriately subordinated?

### Sub-Question 11.1: Secondary Element Identification
- **ACTION:** List all elements that SHOULD be secondary
- **RECORD:** Secondary elements:
  ```
  - [element name]: Purpose = [why it's secondary]
  - [element name]: Purpose = [why it's secondary]
  ...
  ```

### Sub-Question 11.2: Subordination Measurement
- **FOR EACH SECONDARY ELEMENT:**
- **MEASURE:** Font size relative to primary = [%]
- **MEASURE:** Font weight relative to primary = [lighter/same/bolder]
- **MEASURE:** Color contrast relative to primary = [lower/same/higher]
- **MEASURE:** Size relative to primary = [%]
- **EXPECTED:** Secondary should be 70-85% of primary in at least 2 dimensions

### Sub-Question 11.3: Subordination Score
- **FOR EACH SECONDARY ELEMENT:**
- **SCORE:**
  - 5 = Clearly subordinate, perfect hierarchy
  - 4 = Subordinate, minor adjustments possible
  - 3 = Somewhat subordinate, noticeable issues
  - 2 = Competes with primary
  - 1 = More prominent than primary
- **RECORD:** [element]: Score = [1-5]

### Sub-Question 11.4: Subordination Fixes
- **FOR ELEMENTS SCORING < 4:**
- **RECORD:** Element = [name]
- **RECORD:** Current prominence issue = [description]
- **RECORD:** CSS fix = [property: current → new value]
- **RECORD:** CSS line = [line number]

**CHECKPOINT 11.1:** Before proceeding, verify:
- [ ] All secondary elements identified
- [ ] Measurements taken
- [ ] Scores assigned
- [ ] Fixes documented for low scores

---

## Question 12: First-Time Visitor Test

**Main Question:** Would a first-time visitor know where to look?

### Sub-Question 12.1: Fresh Eyes Simulation
- **ACTION:** Clear your mind of what you know about this section
- **ACTION:** Pretend you've never seen this content
- **ACTION:** Look at the section
- **RECORD:** First impression = [what stands out, what's confusing]

### Sub-Question 12.2: Orientation Cues
- **ACTION:** Identify elements that help orient a new visitor
- **RECORD:** Orientation cues found:
  - [ ] Clear heading that explains what this is
  - [ ] Visual grouping that shows structure
  - [ ] Starting point indicator
  - [ ] Context about where this fits in the page
- **RECORD:** Missing orientation cues = [list]

### Sub-Question 12.3: Confusion Points
- **ACTION:** Identify potential confusion for first-time visitors
- **RECORD:** Confusion points:
  - [ ] Jargon or assumed knowledge
  - [ ] Unclear purpose
  - [ ] Too many equally prominent elements
  - [ ] Missing labels or explanations
  - [ ] Other: [describe]
- **⚠️ NOTE:** Content changes require approval - log only

### Sub-Question 12.4: Comparison to Known Good
- **ACTION:** Think of a documentation site you find clear on first visit
- **RECORD:** Reference site = [name]
- **QUESTION:** What do they do that this section doesn't?
- **RECORD:** Gap = [description]

### Sub-Question 12.5: Improvement Priority
- **RANK:** What would help first-time visitors most?
- **RECORD:** Top 3 improvements:
  ```
  1. [Highest impact improvement]
  2. [Second highest]
  3. [Third highest]
  ```

**CHECKPOINT 12.1:** Before proceeding, verify:
- [ ] Fresh eyes simulation done
- [ ] Orientation cues cataloged
- [ ] Confusion points identified
- [ ] Comparison made
- [ ] Improvements ranked

---

# ═══════════════════════════════════════════════════════════
#        CATEGORY 2 VERIFICATION CHECKPOINT
# ═══════════════════════════════════════════════════════════

## MANDATORY CHECKPOINT: Questions 7-12 Complete

### Evidence Checklist
- [ ] Q7: All elements ranked by importance, measurements for top elements
- [ ] Q8: Complete visual weight table, correlation analysis
- [ ] Q9: Intended flow vs actual flow documented
- [ ] Q10: Flow continuity tested, dead ends and competing paths checked
- [ ] Q11: All secondary elements scored, fixes for low scores
- [ ] Q12: Fresh eyes test, orientation cues, confusion points

### Measurement Checklist
All measurements recorded in specific units:
- [ ] Font sizes in px
- [ ] Font weights as numbers
- [ ] Colors as hex codes
- [ ] Spacing in px
- [ ] Scores on 1-5 scale

### Quality Gate
**Count of vague answers:** [MUST BE 0]
**Count of missing measurements:** [MUST BE 0]
**Count of skipped sub-questions:** [MUST BE 0]

**IF ALL COUNTS = 0:** Proceed to Category 3.

---

# CATEGORY 3: TYPOGRAPHY

## Question 13: Font Size Appropriateness

**Main Question:** Is the font size appropriate for this content type?

### Sub-Question 13.1: Current Font Size Measurement
- **ACTION:** Use browser_evaluate to get computed font size
- **COMMAND:**
  ```javascript
  browser_evaluate({
    function: `() => {
      const el = document.querySelector('[selector]');
      return getComputedStyle(el).fontSize;
    }`
  })
  ```
- **RECORD:** Font size = [value in px]

### Sub-Question 13.2: Content Type Classification
- **CLASSIFY THIS TEXT AS:**
  - [ ] Primary heading (H1) - Expected: 28-36px
  - [ ] Section heading (H2) - Expected: 22-28px
  - [ ] Subsection heading (H3) - Expected: 18-22px
  - [ ] Body text - Expected: 16-18px
  - [ ] Secondary text - Expected: 14-16px
  - [ ] Caption/label - Expected: 12-14px
  - [ ] Code - Expected: 13-15px
- **RECORD:** Classification = [type]
- **RECORD:** Expected range = [min-max px]

### Sub-Question 13.3: Size Evaluation
- **COMPARE:** Actual [X px] vs Expected [Y-Z px]
- **RECORD:** Within range = [YES/NO]
- **IF NO:** How far off? = [+/- N px]
- **IF NO:** CSS fix = `font-size: [correct value]`
- **IF NO:** CSS line = [line number]

### Sub-Question 13.4: Readability Test
- **ACTION:** Read a full paragraph at this size
- **EVALUATE:**
  - [ ] Too small to read comfortably
  - [ ] Slightly small
  - [ ] Comfortable
  - [ ] Slightly large
  - [ ] Too large, feels like shouting
- **RECORD:** Readability = [evaluation]

### Sub-Question 13.5: Cross-Page Consistency
- **ACTION:** Find same content type on another page
- **ACTION:** Measure its font size
- **RECORD:** Other page font size = [px]
- **RECORD:** Sizes match = [YES/NO]
- **IF NO:** Which should change? = [this page/other page]

**CHECKPOINT 13.1:** Before proceeding, verify:
- [ ] Font size measured via Playwright
- [ ] Content type classified
- [ ] Size evaluated against expected
- [ ] Readability tested
- [ ] Cross-page consistency checked

---

## Question 14: Font Weight Evaluation

**Main Question:** Is the font weight conveying the right emphasis?

### Sub-Question 14.1: Current Font Weight Measurement
- **ACTION:** Use browser_evaluate to get computed font weight
- **RECORD:** Font weight = [100-900 or keyword]

### Sub-Question 14.2: Emphasis Level Classification
- **CLASSIFY THE INTENDED EMPHASIS:**
  - [ ] Maximum emphasis (headings, CTAs) - Expected: 700-800
  - [ ] Strong emphasis (subheadings, important text) - Expected: 600-700
  - [ ] Normal emphasis (body text) - Expected: 400-500
  - [ ] Reduced emphasis (secondary, captions) - Expected: 300-400
- **RECORD:** Intended emphasis = [level]
- **RECORD:** Expected weight range = [min-max]

### Sub-Question 14.3: Weight Evaluation
- **COMPARE:** Actual [X] vs Expected [Y-Z]
- **RECORD:** Within range = [YES/NO]
- **IF NO:** Current creates what impression? = [description]
- **IF NO:** CSS fix = `font-weight: [correct value]`

### Sub-Question 14.4: Weight Contrast Check
- **ACTION:** Compare weight to surrounding elements
- **MEASURE:** This element weight = [value]
- **MEASURE:** Adjacent element weights = [values]
- **QUESTION:** Is there enough contrast to show hierarchy?
- **RECORD:** Sufficient contrast = [YES/NO]
- **MINIMUM CONTRAST:** 200 weight units between hierarchy levels

### Sub-Question 14.5: Visual Weight Balance
- **ACTION:** Look at overall section
- **QUESTION:** Is there too much bold? Too little?
- **EVALUATE:**
  - [ ] Too heavy (too much bold/emphasis)
  - [ ] Balanced
  - [ ] Too light (nothing stands out)
- **RECORD:** Balance = [evaluation]

**CHECKPOINT 14.1:** Before proceeding, verify:
- [ ] Font weight measured
- [ ] Emphasis level classified
- [ ] Weight evaluated
- [ ] Contrast checked
- [ ] Balance assessed

---

## Question 15: Line Height Comfort

**Main Question:** Is the line height comfortable for reading?

### Sub-Question 15.1: Current Line Height Measurement
- **ACTION:** Use browser_evaluate to get computed line height
- **RECORD:** Line height = [value in px or unitless]
- **CALCULATE:** If in px, divide by font-size to get ratio
- **RECORD:** Line height ratio = [number, e.g., 1.5]

### Sub-Question 15.2: Line Height Expectations
- **FOR THIS CONTENT TYPE:**
  - [ ] Headings - Expected: 1.2-1.3
  - [ ] Body text - Expected: 1.5-1.75
  - [ ] Dense UI text - Expected: 1.3-1.4
  - [ ] Code blocks - Expected: 1.4-1.6
- **RECORD:** Expected ratio = [number]

### Sub-Question 15.3: Line Height Evaluation
- **COMPARE:** Actual [X] vs Expected [Y]
- **RECORD:** Appropriate = [YES/NO]
- **IF NO:** Too tight or too loose? = [TIGHT/LOOSE]
- **IF NO:** CSS fix = `line-height: [correct value]`

### Sub-Question 15.4: Multi-Line Readability Test
- **ACTION:** Read a paragraph with multiple lines
- **EVALUATE:**
  - [ ] Lines feel cramped
  - [ ] Comfortable to track across lines
  - [ ] Too much space, loses cohesion
- **RECORD:** Readability = [evaluation]

### Sub-Question 15.5: Line Height Consistency
- **ACTION:** Check line height across different text elements in section
- **RECORD:** Element A line-height = [value]
- **RECORD:** Element B line-height = [value]
- **RECORD:** Element C line-height = [value]
- **QUESTION:** Are ratios consistent for same content types?
- **RECORD:** Consistent = [YES/NO]

**CHECKPOINT 15.1:** Before proceeding, verify:
- [ ] Line height measured and ratio calculated
- [ ] Expectations set for content type
- [ ] Evaluation completed
- [ ] Multi-line test done
- [ ] Consistency checked

---

## Question 16: Letter Spacing Assessment

**Main Question:** Is the letter spacing (tracking) appropriate?

### Sub-Question 16.1: Current Letter Spacing Measurement
- **ACTION:** Use browser_evaluate to get computed letter-spacing
- **RECORD:** Letter spacing = [value, e.g., "normal", "0.5px", "-0.02em"]

### Sub-Question 16.2: Letter Spacing Expectations
- **FOR THIS CONTENT:**
  - [ ] Large headings (>24px) - Expected: -0.02em to -0.01em (tighter)
  - [ ] Body text - Expected: normal or -0.01em
  - [ ] Small text (<14px) - Expected: 0.01em to 0.02em (looser)
  - [ ] ALL CAPS - Expected: 0.1em to 0.15em (much looser)
- **RECORD:** Expected = [value]

### Sub-Question 16.3: Letter Spacing Evaluation
- **COMPARE:** Actual vs Expected
- **RECORD:** Appropriate = [YES/NO]
- **IF NO:** What's wrong? = [too tight/too loose]
- **IF NO:** CSS fix = `letter-spacing: [correct value]`

### Sub-Question 16.4: Tracking Visual Check
- **ACTION:** Look at the text at actual size
- **EVALUATE:**
  - [ ] Letters feel cramped
  - [ ] Comfortable, natural spacing
  - [ ] Letters feel disconnected
- **RECORD:** Visual evaluation = [result]

**CHECKPOINT 16.1:** Before proceeding, verify:
- [ ] Letter spacing measured
- [ ] Expectations set
- [ ] Evaluation completed
- [ ] Visual check done

---

## Question 17: Heading Hierarchy

**Main Question:** Are headings establishing clear hierarchy (h1 > h2 > h3)?

### Sub-Question 17.1: Heading Inventory
- **ACTION:** List all headings in this section
- **FOR EACH HEADING:**
  - **RECORD:** Text = [heading text]
  - **RECORD:** Tag = [h1/h2/h3/h4/etc. or div/p/span]
  - **RECORD:** Font size = [px]
  - **RECORD:** Font weight = [value]
  - **RECORD:** Color = [hex]
  - **RECORD:** Margin-top = [px]
  - **RECORD:** Margin-bottom = [px]

### Sub-Question 17.2: Semantic Correctness
- **ACTION:** Check if heading tags match visual hierarchy
- **QUESTION:** Is the visually largest heading h1?
- **RECORD:** Correct = [YES/NO]
- **QUESTION:** Do heading levels never skip (h1→h3 without h2)?
- **RECORD:** No skips = [YES/NO]

### Sub-Question 17.3: Size Progression
- **ACTION:** Verify size decreases with level
- **RECORD:** h1 size = [px]
- **RECORD:** h2 size = [px]
- **RECORD:** h3 size = [px]
- **CALCULATE:** h1:h2 ratio = [number]
- **CALCULATE:** h2:h3 ratio = [number]
- **EXPECTED:** Ratios between 1.2 and 1.5
- **RECORD:** Ratios appropriate = [YES/NO]

### Sub-Question 17.4: Weight Progression
- **RECORD:** h1 weight = [value]
- **RECORD:** h2 weight = [value]
- **RECORD:** h3 weight = [value]
- **QUESTION:** Is there differentiation via weight?
- **RECORD:** Weight differentiated = [YES/NO]

### Sub-Question 17.5: Spacing Progression
- **QUESTION:** Do larger headings have more space above?
- **RECORD:** h1 margin-top = [px]
- **RECORD:** h2 margin-top = [px]
- **RECORD:** h3 margin-top = [px]
- **RECORD:** Spacing increases with heading level = [YES/NO]

**CHECKPOINT 17.1:** Before proceeding, verify:
- [ ] All headings inventoried with full measurements
- [ ] Semantic tags checked
- [ ] Size progression verified
- [ ] Weight progression checked
- [ ] Spacing progression checked

---

## Question 18: Body Text Readability

**Main Question:** Is body text readable at this size?

### Sub-Question 18.1: Body Text Measurements
- **ACTION:** Measure body text properties
- **RECORD:** Font size = [px]
- **RECORD:** Line height = [ratio]
- **RECORD:** Line length (characters per line) = [count]
- **RECORD:** Font weight = [value]
- **RECORD:** Color = [hex]
- **RECORD:** Background color = [hex]

### Sub-Question 18.2: Size Evaluation
- **EXPECTED:** 16-18px for primary body text
- **RECORD:** Within range = [YES/NO]
- **IF NO:** Too small or too large? = [answer]

### Sub-Question 18.3: Line Length (Measure) Evaluation
- **EXPECTED:** 45-75 characters per line ideal
- **ACTION:** Count characters in an average line
- **RECORD:** Character count = [number]
- **EVALUATE:**
  - [ ] <45: Too narrow, choppy reading
  - [ ] 45-75: Ideal
  - [ ] >75: Too wide, hard to track

### Sub-Question 18.4: Contrast Ratio Calculation
- **ACTION:** Calculate contrast ratio between text and background
- **FORMULA:** Use online contrast checker or formula
- **RECORD:** Contrast ratio = [number:1]
- **EXPECTED:** ≥4.5:1 for WCAG AA
- **RECORD:** Passes WCAG AA = [YES/NO]

### Sub-Question 18.5: Extended Reading Test
- **ACTION:** Read 3 full paragraphs
- **EVALUATE:**
  - [ ] Eye strain after reading
  - [ ] Comfortable extended reading
  - [ ] Very comfortable, could read for hours
- **RECORD:** Extended reading comfort = [evaluation]

**CHECKPOINT 18.1:** Before proceeding, verify:
- [ ] Body text fully measured
- [ ] Size evaluated
- [ ] Line length checked
- [ ] Contrast calculated
- [ ] Reading test completed

---

## Question 19: Code Text Differentiation

**Main Question:** Are code/monospace sections clearly differentiated?

### Sub-Question 19.1: Code Element Identification
- **ACTION:** Find all code elements in section
- **TYPES:**
  - [ ] Inline code (`<code>` in paragraphs)
  - [ ] Code blocks (`<pre><code>`)
  - [ ] Syntax highlighted code
- **RECORD:** Code elements found = [count and types]

### Sub-Question 19.2: Inline Code Measurements
- **FOR INLINE CODE:**
- **MEASURE:** Font family = [value]
- **MEASURE:** Font size = [px]
- **MEASURE:** Background color = [hex]
- **MEASURE:** Padding = [px]
- **MEASURE:** Border-radius = [px]
- **MEASURE:** Color = [hex]

### Sub-Question 19.3: Code Block Measurements
- **FOR CODE BLOCKS:**
- **MEASURE:** Font family = [value]
- **MEASURE:** Font size = [px]
- **MEASURE:** Line height = [ratio]
- **MEASURE:** Background color = [hex]
- **MEASURE:** Padding = [px each side]
- **MEASURE:** Border-radius = [px]
- **MEASURE:** Border = [value]

### Sub-Question 19.4: Differentiation Evaluation
- **QUESTION:** Is code immediately recognizable as code?
- **FACTORS:**
  - [ ] Monospace font used = [YES/NO]
  - [ ] Different background = [YES/NO]
  - [ ] Different text color = [YES/NO]
  - [ ] Clear boundaries = [YES/NO]
- **RECORD:** Clearly differentiated = [YES/NO]

### Sub-Question 19.5: Code Readability
- **ACTION:** Read a code block
- **EVALUATE:**
  - [ ] Font too small to read comfortably
  - [ ] Comfortable size
  - [ ] Syntax highlighting helpful
  - [ ] Color contrast sufficient
- **RECORD:** Code readability = [POOR/ACCEPTABLE/GOOD/EXCELLENT]

**CHECKPOINT 19.1:** Before proceeding, verify:
- [ ] All code elements identified
- [ ] Inline code measured
- [ ] Code blocks measured
- [ ] Differentiation evaluated
- [ ] Readability assessed

---

## Question 20: Weight Contrast Balance

**Main Question:** Is there too much or too little contrast in font weights?

### Sub-Question 20.1: Weight Distribution Inventory
- **ACTION:** List all unique font weights used in section
- **RECORD:** Weights used = [list all values]
- **RECORD:** Count of each weight:
  - 400 (normal): [count]
  - 500 (medium): [count]
  - 600 (semibold): [count]
  - 700 (bold): [count]
  - Other: [weight]: [count]

### Sub-Question 20.2: Weight Spread Evaluation
- **CALCULATE:** Range = highest weight - lowest weight
- **RECORD:** Weight range = [number]
- **EVALUATE:**
  - [ ] <200: Too little contrast (everything looks same)
  - [ ] 200-400: Good range
  - [ ] >400: Too much contrast (jarring)
- **RECORD:** Range appropriate = [YES/NO]

### Sub-Question 20.3: Bold Usage Audit
- **COUNT:** Elements with weight ≥600
- **COUNT:** Total text elements
- **CALCULATE:** Bold ratio = bold elements / total
- **RECORD:** Bold ratio = [%]
- **EXPECTED:** 10-25% should be bold
- **EVALUATE:**
  - [ ] <10%: Too little emphasis, nothing stands out
  - [ ] 10-25%: Good balance
  - [ ] >25%: Too much bold, emphasis lost
- **RECORD:** Bold usage = [evaluation]

### Sub-Question 20.4: Weight Purpose Check
- **FOR EACH BOLD ELEMENT:**
- **QUESTION:** Why is this bold?
- **RECORD:** [element]: Bold because = [reason]
- **QUESTION:** Is the reason valid (headline, key term, important)?
- **RECORD:** Valid reason = [YES/NO]

### Sub-Question 20.5: Visual Scan Test
- **ACTION:** Scan section quickly
- **QUESTION:** Do bold elements draw eye to important information?
- **RECORD:** Bold aids scanning = [YES/NO/PARTIALLY]

**CHECKPOINT 20.1:** Before proceeding, verify:
- [ ] Weight inventory complete
- [ ] Spread evaluated
- [ ] Bold ratio calculated
- [ ] Each bold element justified
- [ ] Scan test done

---

# ═══════════════════════════════════════════════════════════
#        CATEGORY 3 VERIFICATION CHECKPOINT
# ═══════════════════════════════════════════════════════════

## MANDATORY CHECKPOINT: Questions 13-20 Complete

### Evidence Checklist
- [ ] Q13: Font size measured via Playwright, compared to expectations
- [ ] Q14: Font weight measured, emphasis levels classified
- [ ] Q15: Line height measured and ratio calculated
- [ ] Q16: Letter spacing measured
- [ ] Q17: All headings inventoried with full measurements
- [ ] Q18: Body text fully measured, contrast ratio calculated
- [ ] Q19: All code elements measured
- [ ] Q20: Weight distribution inventoried, bold ratio calculated

### Playwright Commands Used
- [ ] browser_evaluate for getComputedStyle executed
- [ ] Measurements recorded from actual computed values (not CSS file)

### Quality Gate
**Count of "looks fine" answers:** [MUST BE 0]
**Count of missing pixel values:** [MUST BE 0]
**Count of estimated values:** [MUST BE 0 - all must be measured]

**IF ALL COUNTS = 0:** Proceed to Category 4.

---

# CONTINUING PATTERN...

The remaining categories (4-30) follow this same atomic structure:

- **Category 4: Spacing & Rhythm** (Q21-27) - All spacing measurements in px
- **Category 5: Color & Contrast** (Q28-33) - All colors as hex, contrast ratios calculated
- **Category 6: Components** (Q34-38) - Component inventory and comparison
- **Category 7: Interactions** (Q39-45) - Hover/focus state verification
- **Category 8: Animation** (Q46-50) - Duration and easing measurements
- **Category 9: Consistency** (Q51-54) - Cross-page comparison
- **Category 10: Linear Test** (Q55-60) - Professional evaluation
- **Categories 11-30** - All following same atomic pattern

---

# ADVERSARIAL REVIEW PROTOCOL

## After Completing a Page Audit

A second agent MUST review the work using this protocol:

### Step 1: Sample Selection
- **ACTION:** Randomly select 20% of answered questions
- **SELECTION METHOD:** Use random number generator for question numbers
- **RECORD:** Selected questions = [list of question numbers]

### Step 2: Re-Measurement
- **FOR EACH SELECTED QUESTION:**
- **ACTION:** Re-execute the Playwright measurements
- **ACTION:** Re-answer the sub-questions independently
- **RECORD:** Reviewer's answers = [complete answers]

### Step 3: Comparison
- **FOR EACH RE-MEASURED QUESTION:**
- **COMPARE:** Original answer vs Reviewer answer
- **RECORD:** Measurements match = [YES/NO]
- **RECORD:** Conclusions match = [YES/NO]
- **IF DISCREPANCY:** Describe = [what's different]

### Step 4: Quality Assessment
- **CALCULATE:** Match rate = matching questions / sampled questions
- **EVALUATE:**
  - ≥90%: PASS - Original work is reliable
  - 80-89%: CONDITIONAL - Specific questions need re-audit
  - <80%: FAIL - Full re-audit required
- **RECORD:** Match rate = [%]
- **RECORD:** Verdict = [PASS/CONDITIONAL/FAIL]

### Step 5: Issue Log
- **FOR EACH DISCREPANCY:**
- **RECORD:** Question number = [Q#]
- **RECORD:** Original answer = [summary]
- **RECORD:** Correct answer = [summary]
- **RECORD:** Impact = [what was missed/wrong]

### Step 6: Feedback Loop
- **IF FAIL OR CONDITIONAL:**
- **ACTION:** Return to original agent with specific issues
- **REQUIREMENT:** Original agent must re-audit flagged questions
- **REQUIREMENT:** Re-audited answers go through review again

---

# EXECUTION SEQUENCE

## For Each Page

```
1. INITIALIZE
   - Navigate to page via Playwright
   - Take full-page screenshot
   - Get accessibility snapshot

2. IDENTIFY SECTIONS
   - List all sections on page
   - Identify all components in each section

3. AUDIT EACH SECTION
   - Work through Categories 1-30
   - Complete ALL sub-questions
   - Take screenshots at checkpoints
   - Validate at each category checkpoint

4. COMPILE FINDINGS
   - Aggregate all measurements
   - List all FAIL verdicts with CSS fixes
   - Prioritize by severity

5. ADVERSARIAL REVIEW
   - Second agent reviews 20% sample
   - Resolve any discrepancies

6. IMPLEMENT FIXES (VISUAL ONLY scope)
   - Make CSS changes
   - Re-screenshot after each fix
   - Verify fix worked

7. FINAL VERIFICATION
   - Full page screenshot after all fixes
   - Compare before/after
   - Confirm all issues resolved
```

---

# DESIGN SYSTEM REFERENCE

## Spacing Scale (4px base)
```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
```

## Typography Scale
```
Headings:
  H1: 28-36px, weight 700-800
  H2: 22-28px, weight 600-700
  H3: 18-22px, weight 600

Body:
  Primary: 16-18px, weight 400-450
  Secondary: 14-16px, weight 400
  Caption: 12-14px, weight 400

Code:
  Inline: 0.9em, weight 400
  Block: 13-15px, weight 400
```

## Color Values
```
Text:
  --color-text-primary: #0f0f10
  --color-text-secondary: #27272a
  --color-text-muted: #52525b

Backgrounds:
  --color-bg-base: #ffffff
  --color-bg-subtle: #fafafa
  --color-bg-muted: #f4f4f5

Accent:
  --color-accent: #0D9373
  --color-accent-light: #10b981

Border:
  --color-border: #e4e4e7
```

## Border Radius
```
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
```

## Shadows
```
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04)
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.04)
```

---

*Document continues with Categories 4-30 in same atomic format...*
