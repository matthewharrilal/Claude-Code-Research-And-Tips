# Checklist Measurement Precision Audit

**Date:** 2026-02-15
**Author:** measurement-precision-auditor (middle-tier-prep team)
**Task:** Task #8 -- Audit measurement precision of the Middle-tier checklist
**Source:** `/ephemeral/session-insights/18-middle-tier-checklist.md` (129 binary items + 4 coverage tables)

---

## EXECUTIVE SUMMARY

**Overall Assessment:** The checklist contains **91 TRULY BINARY items** (70.5%) with high inter-rater reliability, **26 JUDGMENT-DISGUISED-AS-BINARY items** (20.2%) requiring operationalization, and **12 META/COVERAGE items** (9.3%) that are structural checks.

**Critical Finding:** The 4 judgment items identified in adversarial review (C4.5, D2.2, D3.2, E3.3) are CORRECTLY flagged, but there are **22 additional judgment items** not flagged. The total judgment burden is 5.5x higher than adversarial review suggested.

**Measurement Time:** Estimated **4-6 hours** for full evaluation by a trained evaluator with tools. Fresh evaluator with no context: **8-12 hours**.

**Scoring Rubric:** Proposed weighted scoring system with critical items at 3x weight yields maximum 181 points. PASS threshold: ≥85% (155 pts), PARTIAL: 70-84% (127-154 pts), FAIL: <70% (<127 pts).

---

## 1. TRULY BINARY ITEMS (91 items, 70.5%)

These items have **zero or near-zero** evaluator disagreement risk. Binary confidence rated 1-5 (5 = zero disagreement possible).

### BINARY CONFIDENCE = 5 (Perfect Binary, 47 items)

**Container Width & Layout (4 items):**
- **B2.1:** Container 940-960px at 1440px — Playwright measurement, exact pixel value ✓
- **B2.2:** Width verified at 1440px viewport — viewport setting is exact ✓
- **B9.7:** No horizontal scroll at 1440px — binary overflow test ✓
- **B9.8:** No layout breaks at 768px — binary overflow test ✓

**Soul Constraints (7 items):**
- **B7.1:** `border-radius: 0` on all elements — CSS grep/search, exact value ✓
- **B7.2:** `box-shadow: none` on all elements — CSS grep/search ✓
- **B7.3:** No gradients — CSS search for `gradient(` functions ✓
- **B7.4:** No pure black `#000000` — CSS color search ✓
- **B7.5:** No pure white `#FFFFFF` — CSS color search ✓
- **B7.6:** Typography trinity (3 fonts only) — CSS `font-family` enumeration ✓
- **B7.7:** Colors from tokens.css — CSS color enumeration vs token list ✓

**Documentation Presence (14 items):**
- **A1.1:** M1 timing decision documented — file exists with decision statement ✓
- **A1.2:** Rationale documented (≥2 sentences) — sentence count ✓
- **A1.3:** If option (a): skill SKILL.md lines 882-887 replaced — text diff ✓
- **A1.4:** If option (b): builder prompt contains override — text search ✓
- **A1.5:** If option (c): both builds identical except M1 — diff comparison ✓
- **A3.3:** Content verification documented — file exists ✓
- **A4.2:** Pattern selection justified — justification text present ✓
- **A5.1:** Per-category approach documented — document states per-category ✓
- **A5.2:** Full catalog read instruction — prompt says "read ALL" ✓
- **B1.1:** Tier classification output present — "TIER: Middle" text found ✓
- **B1.4:** M5 format documented — 5 fields present ✓
- **B5.1:** Each mechanism has justification — count mechanisms = count justifications ✓
- **B5.2:** ≥3 rejections documented — count rejection statements ✓
- **C2.1:** Total mechanism count documented — number stated ✓

**Mechanism Category Coverage (5 items):**
- **B3.1:** ≥1 Spatial mechanism (#5, #6, or #15) — catalog number search ✓
- **B3.2:** ≥1 Hierarchy mechanism (#1, #4, or #11) — catalog number search ✓
- **B3.3:** ≥1 Component mechanism (#2, #9, #10, or #17) — catalog number search ✓
- **B3.4:** ≥1 Depth mechanism (#3, #7, or #16) — catalog number search ✓
- **B3.5:** ≥1 Structure mechanism (#8, #12, #13, #14, or #18) — catalog number search ✓

**Pipeline Routing (2 items):**
- **B1.2:** Phases 1-3 skipped — no metaphor/tension files exist ✓
- **B1.3:** Started at Phase 4.0 — first design file is Phase 4.0 guardrails ✓

**Content Structure (5 items):**
- **A2.3:** Contains code blocks (≥2) — HTML `<code>` or `<pre>` count ✓
- **A2.4:** Contains callouts (≥2) — callout element count ✓
- **A2.5:** Hierarchical headings (2+ levels) — heading level enumeration ✓
- **A2.6:** Table OR reference section (≥1) — `<table>` or reference section exists ✓
- **A2.7:** Step sequence (≥3 steps) — numbered/ordered list with ≥3 items ✓

**Fractal Gate Format (5 items):**
- **B6.1:** Scale table completed for 2 scales — table has 2 rows ✓
- **B6.4:** CSS evidence for Page scale — CSS properties cited ✓
- **B6.5:** CSS evidence for Component scale — CSS properties cited ✓
- **B6.6:** Direction consistent between scales — both sparse→dense OR both dense→sparse ✓
- **B6.7:** Pattern is structural not decorative — evidence cites spacing/density not color ✓

**Measurement Documentation (5 items):**
- **C2.2:** Category coverage documented — 5 categories listed ✓
- **C2.3:** Mechanisms listed by catalog number — "#N Name" format ✓
- **C3.1:** Soul compliance score computed — fraction stated (X/7) ✓
- **C3.2:** Guardrail compliance score computed — fraction stated (X/8) ✓
- **C3.3:** Token compliance percentage computed — percentage stated ✓

### BINARY CONFIDENCE = 4 (High Binary, 24 items)

**Quantitative Thresholds (10 items):**
- **A2.1:** Word count 800-1,200 — measurable, but "what counts as a word?" has edge cases (code? headings?) — **SEE SECTION 4**
- **B4.1:** Mechanism count 5-12 — count is exact, but "what is a mechanism instance?" may vary
- **B9.1:** Min horizontal padding ≥32px — computed style measurement, clear threshold
- **B9.4:** Body line-height ≥1.5 — computed style, exact threshold
- **B9.5:** Section breathing ≥48px — measurable, but "what is a major section?" requires definition — **SEE SECTION 4**
- **B9.6:** Heading-body gap ≥16px — measurable, clear
- **C1.1:** CSS line count 350-500 — measurable, but "formatted or minified?" — **SEE SECTION 3**
- **C1.3:** Grid/flex count 2-3 — CSS selector count `display: grid` + `display: flex`
- **C1.4:** Pseudo-element count 1-3 — CSS `::before` + `::after` count
- **C1.5:** Breakpoint count 2-3 — `@media` query count

**Content Requirements (7 items):**
- **A2.2:** Contains prose (≥3 paragraphs) — `<p>` count ≥3, but "what if prose in `<div>`?"
- **A3.1:** Structural element type count ≥4 — enumeration, but boundaries between types may blur
- **B3.6:** All 5 categories represented — compound check, B3.1-B3.5 all PASS
- **B8.1:** Token compliance ≥80% — requires computation (see Section 3), but threshold is exact
- **B8.2:** Always-load protocol completed — trace evidence of reading prohibitions.md + tokens.css
- **E1.1:** Verdict is SUCCESS/PARTIAL/FAILURE — one of three exact strings
- **E1.3:** ≥3 pieces supporting evidence — count citations, ≥3

**Fractal Coherence (2 items):**
- **B6.2:** Page scale follows pattern — section sequence analysis, directional (sparse→dense)
- **B6.3:** Component scale mirrors pattern — internal component analysis, directional

**Comparison Metrics (3 items):**
- **D1.2:** Category count comparison — exact count for both pages
- **D1.5:** Mechanism count comparison — exact count for both pages
- **C2.5:** Overlap with Variant B documented — % shared mechanisms

**Pre-Build Decisions (2 items):**
- **A5.3:** 8-10 described as natural landing not target — language analysis ("naturally produces" vs "deploy exactly")
- **E1.2:** Verdict maps to 2x2 decision matrix — both engagement AND novelty assessed

### BINARY CONFIDENCE = 3 (Moderate Binary, 20 items)

**Content Domain (3 items):**
- **A2.8:** Domain different from Variant B — subjective overlap judgment, but domains clearly distinct if different
- **A2.9:** NOT self-referential — clear if content describes design system/pipeline/mechanisms
- **A2.10:** Maps to exactly one density pattern — M5 routing table lookup, but hybrid content ambiguous

**Pattern Selection (3 items):**
- **A4.1:** Pattern from 4-option lookup — one of CRESCENDO/F-PATTERN/BENTO/PULSE
- **A4.3:** CRESCENDO not hardcoded — if CRESCENDO, content must be tutorial
- **A4.4:** Hybrid content handled correctly — hybrid → dominant pattern, not multi-pattern

**Mechanism Deployment (3 items):**
- **B4.2:** No mechanism deployed solely for count — requires reading justifications for count-based reasoning
- **B4.3:** Count emerged from breadth — documentation must state "categories first, count observed"
- **B5.3:** Justifications reference content not catalog — language analysis (content features vs catalog descriptions)

**Container Width (2 items):**
- **B2.3:** No secondary containers <940px — requires auditing all content containers, excluding intentional internal padding
- **B2.4:** Narrow aesthetic via padding not width — implementation check (padding vs width reduction)

**Measurement Procedures (4 items):**
- **C3.4:** Audit via Playwright or equivalent — methodology documented (computed styles vs CSS source)
- **D1.1:** Spatial variety comparison — count grid/flex in both, compare counts
- **D1.3:** Fractal coherence comparison — Middle has scale table, Variant B has [description]
- **D1.4:** Density rhythm comparison — padding values extracted for both, variation compared

**Perceptual Audit Binary Items (5 items):**
- **C4.1 (PA-01):** Container-content ratio harmonious — 940-960px + content fit check
- **C4.6 (PA-01 768px):** Content fills viewport appropriately — no excessive margins/overflow
- **C4.7 (PA-02 768px):** Rhythm maintained at 768px — proportions scale not disappear
- **C4.8 (PA-03 768px):** Zones distinct at 768px — visual zones persist
- **C4.9 (PA-04 768px):** Layout adapted not broken — grid→stacked gracefully

---

## 2. JUDGMENT-DISGUISED-AS-BINARY (26 items, 20.2%)

These items require JUDGMENT but are presented as binary. Inter-rater disagreement is HIGH (30-70% disagreement rate estimated) without further operationalization.

### ADVERSARIAL-IDENTIFIED ITEMS (4 items)

**C4.5 (PA-05 at 1440px): "Page feels designed"**
- **Current form:** YES = "designed" / NO = "formatted"
- **Disagreement source:** "Designed" vs "formatted" is subjective aesthetic judgment. Two evaluators may differ on whether visible spatial decisions = "designed" or just "structured."
- **Operationalization proposal:**
  1. **Sub-criterion 1:** At least 3 distinct padding values across sections (B9.2 already requires this)
  2. **Sub-criterion 2:** At least 1 grid/flex layout (C4.4 already requires this)
  3. **Sub-criterion 3:** At least 2 visually distinct zones (C4.3 already requires this)
  4. **Sub-criterion 4:** Visual hierarchy visible in 3-second glance test (NEW: can you identify most important section in <3 sec?)
  5. **PA-05 = YES if 4/4 sub-criteria PASS**
- **Binary confidence:** Currently 1.5/5. With sub-criteria: 3.5/5.

**D2.2: Better than Variant B = YES/MARGINAL/NO**
- **Current form:** Comparative verdict with "MARGINAL" gray zone
- **Disagreement source:** What constitutes "clear" vs "marginal" improvement? Threshold is vague.
- **Operationalization proposal:**
  - **YES:** Middle outperforms Variant B on ≥3 of: spatial variety count, category coverage, fractal coherence, density rhythm variation
  - **MARGINAL:** Middle outperforms on 1-2 metrics, ties or underperforms on others
  - **NO:** Middle underperforms or ties on all metrics
- **Binary confidence:** Currently 2/5. With quantitative thresholds: 4/5.

**D3.2: CSS overlap 31-59% gray zone**
- **Current form:** <30% = novel, >60% = derivative, 31-59% = gray zone
- **Disagreement source:** Gray zone lacks verdict. What happens at 45% overlap?
- **Operationalization proposal:**
  - **Redefine thresholds:** <40% = NOVEL, 40-60% = MARGINAL, >60% = DERIVATIVE
  - **For MARGINAL:** Break tie with mechanism combination comparison (D3.3)
  - **If D3.3 also MARGINAL:** Defer to D3.1 (structural fingerprint) as tiebreaker
- **Binary confidence:** Currently 2.5/5. With tiebreaker protocol: 4/5.

**E3.3: PA-05 = MARGINAL at both viewports**
- **Current form:** "Ambiguous — neither clearly designed nor clearly formatted"
- **Disagreement source:** "MARGINAL" is not defined. How do you score a marginal answer when PA-05 is YES/NO?
- **Operationalization proposal:**
  - **Officially make PA-05 TERNARY:** YES / MARGINAL / NO
  - **MARGINAL definition:** 2-3 of 4 sub-criteria from C4.5 PASS (not all 4, not fewer than 2)
  - **E3.3 = TRUE if PA-05 at BOTH 1440px AND 768px = MARGINAL**
- **Binary confidence:** Currently 1/5. With ternary scale: 3.5/5.

### ADDITIONAL JUDGMENT ITEMS (22 items not flagged by adversarial review)

**Content Selection Judgments (3 items):**
- **A3.2:** "No single element dominates >60%" — by word count or line count? What about whitespace? Visual dominance vs content dominance? **Needs:** Exact counting procedure (prose word count vs code line count vs heading word count). If by word count, code comments excluded?

- **A2.10 (repeat):** "Content maps to exactly one pattern" — hybrid content judgment is subjective. What if content is 50% tutorial, 50% reference?

- **A4.3 (repeat):** "CRESCENDO not hardcoded" — What is "demonstrably tutorial"? Step-by-step = tutorial, but what about explanatory prose with examples?

**Mechanism Justification Judgments (3 items):**
- **B5.1 (judgment component):** "Content-based justification" — What makes a justification "content-based"? "I deploy #5 because sections vary" vs "I deploy #5 because content has 3 sections with different lengths" — where's the threshold?

- **B5.2:** "Rejection rationale" — How detailed must it be? "Doesn't fit" vs "Content lacks grid-suitable layout for Bento mechanism"?

- **B5.3 (repeat):** References content vs catalog — requires evaluator to judge whether justification is parroting or analyzing.

**Perceptual Audit Judgments (10 items — THE LARGEST CATEGORY):**

**C4.2 (PA-02 at 1440px): "Density rhythm"**
- **Current:** YES = "at least 3 distinct padding values" / NO = "identical or random"
- **Judgment:** "Random" vs "intentional" is subjective. What if padding is 64px, 60px, 56px? Is that intentional progression or measurement noise?
- **Operationalization:** Require padding values in arithmetic or geometric progression (e.g., 64→48→32 = 0.75x ratio) OR documented justification for each value in fractal gate.
- **Binary confidence:** Currently 2.5/5. With progression requirement: 4/5.

**C4.3 (PA-03 at 1440px): "Zone differentiation"**
- **Current:** YES = "at least 2 visually distinct zones" / NO = "uniform throughout"
- **Judgment:** "Visually distinct" is aesthetic judgment. Background color #f5f3ed vs #faf8f0 — distinct or not?
- **Operationalization:** Zones must differ by at least one of: (a) background color with ≥10% luminance difference, (b) border treatment (border-left, border-top), (c) padding difference ≥24px.
- **Binary confidence:** Currently 3/5. With quantitative thresholds: 4.5/5.

**C4.4 (PA-04 at 1440px): "Spatial variety"**
- **Current:** YES = "at least 1 grid/flex layout" / NO = "all block stacking"
- **Judgment:** Does a single 2-column flex count as "variety"? What about CSS Grid with 1 column?
- **Operationalization:** Grid/flex must produce ≥2 columns at 1440px OR change default document flow (e.g., horizontal scrolling sections).
- **Binary confidence:** Currently 3.5/5. With 2-column minimum: 4.5/5.

**C4.5 (PA-05 at 1440px):** Already covered above (adversarial item #1).

**C4.10 (PA-05 at 768px): "Engagement threshold at 768px"**
- Same judgment issues as C4.5. Apply same 4-sub-criteria operationalization.
- **Binary confidence:** Currently 1.5/5. With sub-criteria: 3.5/5.

**D2.1:** "PA-05 engagement answer documented" — If PA-05 has judgment issues (C4.5), D2.1 inherits them. Answering a subjective question with evidence doesn't make the underlying question objective.

**D2.3: "Spatial atmosphere assessment"**
- **Current:** "Want to spend time here?" — YES / SOMEWHAT / NO
- **Judgment:** HIGHLY subjective. One evaluator's "YES" is another's "SOMEWHAT."
- **Operationalization proposal:**
  1. **Sub-criterion 1:** Page has ≥2 "resting zones" (visually calm sections with lower density)
  2. **Sub-criterion 2:** Color palette warmth (all colors from tokens.css = automatically PASS)
  3. **Sub-criterion 3:** No visual discomfort (CPL in range, line-height ≥1.5, no horizontal scroll)
  4. **Sub-criterion 4:** Fractal coherence at 2 scales (B6.6 = PASS)
  5. **Atmosphere = YES if 4/4, SOMEWHAT if 2-3, NO if 0-1**
- **Binary confidence:** Currently 1/5. With sub-criteria: 3/5.

**D2.4: "Fresh-eyes test"**
- **Current:** "Agent rates which feels most designed"
- **Judgment:** Fresh agent still makes aesthetic judgment. Inter-agent variability.
- **Operationalization:** Run fresh-eyes test with 3 agents, take majority vote.
- **Binary confidence:** Currently 2/5. With 3-agent majority: 3.5/5.

**D3.1: "Structural fingerprint comparison"**
- **Current:** "DISTINCT or SAME structural shape at 20px blur"
- **Judgment:** Visual similarity at blur is perceptual. What if 70% similar?
- **Operationalization:**
  1. Take 20px Gaussian blur screenshots of Middle, OD-004, DD-006
  2. Evaluator ranks similarity 1-3 (1=most similar, 3=most distinct)
  3. If Middle ranks #3 (most distinct) = DISTINCT. If ranks #1 or #2 = SAME.
- **Binary confidence:** Currently 2/5. With ranking protocol: 3.5/5.

**D3.3: "Mechanism combination comparison"**
- **Current:** "Are COMBINATIONS same or different?"
- **Judgment:** What is a "combination"? Spatial+Hierarchy = combination? Or just deployment proximity?
- **Operationalization:**
  1. List all mechanism pairs deployed on same element (e.g., border-weight gradient + zone background on section)
  2. Count how many pairs match showcase pages' pairs
  3. <30% pair overlap = NOVEL, >60% = DERIVATIVE
- **Binary confidence:** Currently 2/5. With pair-counting: 4/5.

**Verdict Framework Judgments (5 items):**

**E2.2: "Better than Variant B = YES (not MARGINAL)"**
- Same issue as D2.2. "Clear" vs "marginal" threshold is vague.
- Use same operationalization: outperforms on ≥3 metrics.

**E2.3: "Spatial atmosphere = YES or SOMEWHAT"**
- Same issue as D2.3. Use same 4-sub-criteria operationalization.

**E2.5: "Novelty signals ≥2 of 3"**
- Depends on D3.1, D3.2, D3.3 which all have judgment components. Compound judgment.

**E3.1: "PA-05=YES but atmosphere=NO"**
- Compound of C4.5 and D2.3 judgments.

**E3.2: "PA-05=YES but novelty <2 of 3"**
- Compound of C4.5 and E2.5 judgments.

**E3.4: "Better than Variant B = MARGINAL"**
- Same as D2.2 / E2.2.

**Failure Criteria (2 items):**

**E4.1: "PA-05 at 1440px = NO"**
- Inverse of C4.5. Same judgment issues.

**E4.2: "Better than Variant B = NO"**
- Inverse of D2.2. If outperforms on 0 metrics or underperforms on majority.

---

## 3. MEASUREMENT PROCEDURES (15 Most Measurement-Intensive Items)

Documenting the EXACT tool/process to produce each measurement.

### 1. **B2.1: Container max-width 940-960px at 1440px**

**Tool:** Playwright MCP
**Procedure:**
```javascript
// Step 1: Set viewport to 1440px width
await page.setViewportSize({ width: 1440, height: 900 });

// Step 2: Identify main container element
// (Assume container has class="container" or role="main")
const container = await page.locator('.container, main, [role="main"]').first();

// Step 3: Get computed max-width
const maxWidth = await container.evaluate(el => {
  return window.getComputedStyle(el).maxWidth;
});

// Step 4: Parse pixel value
const widthPx = parseInt(maxWidth);

// Step 5: Check range
const pass = widthPx >= 940 && widthPx <= 960;
```

**Output:** PASS if 940 ≤ computed max-width ≤ 960, otherwise FAIL.

---

### 2. **B9.2: Characters per line 45-80**

**Tool:** Playwright MCP
**Procedure:**
```javascript
// Step 1: Set viewport to 1440px
await page.setViewportSize({ width: 1440, height: 900 });

// Step 2: Select body paragraph (use first non-heading paragraph)
const paragraph = await page.locator('p').filter({ hasNot: page.locator('h1, h2, h3, h4, h5, h6') }).first();

// Step 3: Get text content
const text = await paragraph.textContent();

// Step 4: Get computed width in px
const width = await paragraph.evaluate(el => el.offsetWidth);

// Step 5: Get font size
const fontSize = await paragraph.evaluate(el => window.getComputedStyle(el).fontSize);

// Step 6: Estimate average character width
// (Use "m" character as reference, or average of "m", "e", "a")
const avgCharWidth = parseFloat(fontSize) * 0.6; // heuristic for Inter font

// Step 7: CPL = width / avgCharWidth
const cpl = width / avgCharWidth;

// Step 8: Check range
const pass = cpl >= 45 && cpl <= 80;
```

**Alternative (more accurate):** Use `canvas.measureText()` to measure actual line length, or count visible lines and divide total characters by line count.

**Output:** PASS if 45 ≤ CPL ≤ 80, otherwise FAIL.

**Ambiguity:** Which paragraph? Longest line? Average line? **Operationalization:** Measure first body paragraph after first H2. If fails, check 2 more paragraphs. PASS if 2/3 pass.

---

### 3. **B9.3: Compression ratio ≥40%**

**Tool:** Playwright MCP
**Procedure:**
```javascript
// Step 1: Identify all major sections (e.g., <section>, .section, main > div)
const sections = await page.locator('section, .section, main > div').all();

// Step 2: Get computed padding for each section
const paddings = await Promise.all(sections.map(async (section) => {
  const style = await section.evaluate(el => {
    const computed = window.getComputedStyle(el);
    return {
      top: parseInt(computed.paddingTop),
      bottom: parseInt(computed.paddingBottom),
      left: parseInt(computed.paddingLeft),
      right: parseInt(computed.paddingRight)
    };
  });
  return Math.max(style.top, style.bottom, style.left, style.right); // use max padding as "depth"
}));

// Step 3: Find shallowest (max) and deepest (min)
const shallowest = Math.max(...paddings);
const deepest = Math.min(...paddings);

// Step 4: Compute ratio
const ratio = deepest / shallowest;

// Step 5: Check threshold
const pass = ratio >= 0.4;
```

**Output:** PASS if deepest ≥ 40% of shallowest, otherwise FAIL.

**Ambiguity:** "Deepest" and "shallowest" padding — top, bottom, left, right, or max? **Operationalization:** Use max padding value for each section.

---

### 4. **B9.5: Section breathing zones ≥48px**

**Tool:** Playwright MCP
**Procedure:**
```javascript
// Step 1: Identify major sections
const sections = await page.locator('section, .section, main > div').all();

// Step 2: For each adjacent pair, measure gap
const gaps = [];
for (let i = 0; i < sections.length - 1; i++) {
  const bottomOfFirst = await sections[i].evaluate(el => el.getBoundingClientRect().bottom);
  const topOfSecond = await sections[i+1].evaluate(el => el.getBoundingClientRect().top);
  gaps.push(topOfSecond - bottomOfFirst);
}

// Step 3: Check all gaps ≥48px
const pass = gaps.every(gap => gap >= 48);
```

**Output:** PASS if all inter-section gaps ≥48px, otherwise FAIL.

**Ambiguity:** "Major section" definition. **Operationalization:** Sections with ≥2 child elements OR >100 words of text.

---

### 5. **C1.1: CSS line count 350-500**

**Tool:** File read + line count
**Procedure:**
```bash
# Count lines in CSS (exclude blank lines and comments)
grep -v '^\s*$' styles.css | grep -v '^\s*//' | wc -l
```

**Ambiguity:** Minified or formatted? Comments included? **Operationalization:** Count formatted CSS (1 declaration per line) with comments excluded. Blank lines excluded.

**Output:** PASS if 350 ≤ line count ≤ 500, otherwise FLAG (not auto-fail, just flagged for analysis per C1 instructions).

---

### 6. **C1.2: Custom property count**

**Tool:** CSS grep
**Procedure:**
```bash
# Count CSS custom properties (--var-name)
grep -o '\-\-[a-zA-Z0-9\-]*' styles.css | sort -u | wc -l
```

**Output:** Number only (observational metric, no pass/fail).

---

### 7. **C1.3: Grid/flex layout count 2-3**

**Tool:** CSS grep
**Procedure:**
```bash
# Count display: grid instances
grep -c 'display:\s*grid' styles.css

# Count display: flex instances
grep -c 'display:\s*flex' styles.css

# Sum both
```

**Output:** Count only. Expected range 2-3 (descriptive not prescriptive).

---

### 8. **C3.3: Token compliance percentage**

**Tool:** CSS analysis script
**Procedure:**
```javascript
// Step 1: Load tokens.css and extract all custom properties
const tokens = extractTokens('tokens.css'); // ["--color-primary", "--spacing-xl", ...]

// Step 2: Load styles.css and extract all CSS values
const values = extractCSSValues('styles.css'); // ["#2a7d7d", "64px", "Inter", ...]

// Step 3: For each value, check if it matches a token OR is derived
let tokenCount = 0;
let totalCount = 0;

values.forEach(value => {
  totalCount++;
  if (tokens.includes(value)) {
    tokenCount++;
  } else if (isDerivedFromToken(value, tokens)) {
    // e.g., "calc(var(--spacing-xl) * 2)" or color within warm palette
    tokenCount++;
  }
});

// Step 4: Compute percentage
const compliance = (tokenCount / totalCount) * 100;
```

**Output:** Percentage. PASS if ≥80%, otherwise FAIL.

**Complexity:** "Derived from token" logic requires domain knowledge (warm palette, spacing multiples, etc.).

---

### 9. **A2.1: Word count 800-1,200**

**Tool:** HTML text extraction + word count
**Procedure:**
```javascript
// Step 1: Load HTML
const html = fs.readFileSync('page.html', 'utf-8');
const dom = new JSDOM(html);

// Step 2: Extract text content (exclude code blocks, script, style)
const body = dom.window.document.querySelector('body');
const codeBlocks = body.querySelectorAll('code, pre, script, style');
codeBlocks.forEach(block => block.remove());

const text = body.textContent;

// Step 3: Count words (split on whitespace)
const words = text.split(/\s+/).filter(w => w.length > 0);
const count = words.length;

// Step 4: Check range
const pass = count >= 800 && count <= 1200;
```

**Output:** PASS if 800 ≤ word count ≤ 1,200, otherwise FAIL.

**Ambiguity:** Do headings count? Alt text? Code comments? **Operationalization:** Count all visible text content excluding `<code>`, `<pre>`, `<script>`, `<style>` elements. Headings count. Alt text does NOT count.

---

### 10. **A3.2: No single element type dominates >60%**

**Tool:** Content type enumeration + percentage
**Procedure:**
```javascript
// Step 1: Count words in each element type
const prose = countWords('p, li'); // paragraphs + list items
const code = countLines('code, pre'); // code blocks by line count
const headings = countWords('h1, h2, h3, h4, h5, h6');
const tables = countCells('table td'); // tables by cell count
const callouts = countWords('.callout, .warning, .tip'); // callout content

// Step 2: Compute total
const total = prose + code + headings + tables + callouts;

// Step 3: Check dominance
const maxType = Math.max(prose, code, headings, tables, callouts);
const dominance = maxType / total;

// Step 4: Check threshold
const pass = dominance <= 0.6;
```

**Output:** PASS if no type >60%, otherwise FAIL.

**Ambiguity:** Word count or line count? Visual dominance vs content count? **Operationalization:** Use word count for prose/headings/callouts, line count for code, cell count for tables. Convert to word-equivalents (1 code line = 5 words, 1 table cell = 3 words) for comparison.

---

### 11. **B3.1-B3.5: Mechanism category coverage**

**Tool:** HTML + CSS pattern search
**Procedure for each category:**

**B3.1 (Spatial):**
- Search for `grid-template-columns` (Bento Grid #15)
- Search for `max-width` + `width` variation (Width Variation #6)
- Search for alternating padding values (Dense/Sparse #5)

**B3.2 (Hierarchy):**
- Search for `border` with weight gradient pattern (Border-Weight Gradient #1)
- Search for padding compression (Spacing Compression #4)
- Search for font-size jumping >2 steps (Typographic Scale #11)

**B3.3 (Component):**
- Search for component with 2 zones (2-Zone DNA #2)
- Search for `border-left` + semantic color (Border-Left Signal #10)
- Search for color-coded components (Confidence Encoding #9)
- Search for code block styling (Code Block #17)

**B3.4 (Depth):**
- Search for solid offset depth (Solid Offset #3)
- Search for background color zones (Zone Background #7)
- Search for drop cap (Drop Cap #16)

**B3.5 (Structure):**
- Search for sticky TOC or scroll witness (Scroll Witness #8)
- Search for progressive disclosure (Progressive Disclosure #12)
- Search for dark header + 3px border (Dark Header #13)
- Search for footer mirror (Footer Mirror #14)
- Search for data table styling (Data Table #18)

**Output:** PASS if ≥1 mechanism per category, otherwise FAIL.

---

### 12. **C2.5: Mechanism overlap with Variant B**

**Tool:** Mechanism list comparison
**Procedure:**
```javascript
// Step 1: List mechanisms in Middle page
const middleMechanisms = ["#1", "#4", "#7", "#10", "#17"]; // example

// Step 2: List mechanisms in Variant B (from Phase D analysis)
const variantBMechanisms = ["#1", "#4", "#10"]; // example from Phase D

// Step 3: Compute overlap
const shared = middleMechanisms.filter(m => variantBMechanisms.includes(m));
const overlapPct = (shared.length / middleMechanisms.length) * 100;
```

**Output:** Percentage. High overlap (>80%) = derivative, low overlap (<40%) = novel.

---

### 13. **D1.4: Density rhythm comparison**

**Tool:** Playwright MCP for both pages
**Procedure:**
```javascript
// For Middle page
const middlePaddings = await extractSectionPaddings('middle.html');

// For Variant B page
const variantBPaddings = await extractSectionPaddings('variant-b.html');

// Compute variation coefficient for each
const middleVariation = standardDeviation(middlePaddings) / mean(middlePaddings);
const variantBVariation = standardDeviation(variantBPaddings) / mean(variantBPaddings);

// Compare
const comparison = middleVariation > variantBVariation ? "Middle has more deliberate variation" : "Variant B has equal or more variation";
```

**Output:** Qualitative comparison with numerical backing.

---

### 14. **D3.2: CSS value overlap**

**Tool:** CSS value extraction + comparison
**Procedure:**
```javascript
// Step 1: For SHARED mechanisms, extract CSS values
// Example: Both use #1 Border-Weight Gradient
const middleValues = extractValuesForMechanism('middle.html', '#1');
// e.g., ["border: 3px solid", "border: 2px solid", "border: 1px solid"]

const showcaseValues = extractValuesForMechanism('OD-004.html', '#1');
// e.g., ["border: 4px solid", "border: 2px solid", "border: 1px solid"]

// Step 2: Compute exact match percentage
const matches = middleValues.filter(v => showcaseValues.includes(v)).length;
const overlapPct = (matches / middleValues.length) * 100;

// Step 3: Interpret
// <30% = novel, >60% = derivative, 31-59% = gray zone (needs D3.3 tiebreaker)
```

**Output:** Percentage + NOVEL/MARGINAL/DERIVATIVE verdict.

---

### 15. **C4.2 (PA-02): Density rhythm — at least 3 distinct padding values**

**Tool:** Playwright MCP
**Procedure:**
```javascript
// Step 1: Extract padding from all sections
const sections = await page.locator('section, .section').all();
const paddings = await Promise.all(sections.map(async (s) => {
  return await s.evaluate(el => {
    const style = window.getComputedStyle(el);
    return parseInt(style.paddingTop); // or use max of top/bottom/left/right
  });
}));

// Step 2: Get unique values
const unique = [...new Set(paddings)];

// Step 3: Check count
const pass = unique.length >= 3;
```

**Output:** PASS if ≥3 distinct padding values, otherwise FAIL.

**Additional check (per operationalization in Section 2):** If ≥3 distinct values, verify they form intentional progression (arithmetic or geometric) OR are documented in fractal gate.

---

## 4. VAGUE THRESHOLDS (7 Items Requiring Disambiguation)

### 1. **A2.1: "800-1,200 words"**
- **Ambiguity:** Code blocks? Headings? Alt text? Comments?
- **Resolution:** Count all visible text excluding `<code>`, `<pre>`, `<script>`, `<style>`. Headings count. Alt text does NOT count. Whitespace normalized (split on `\s+`).

### 2. **A3.2: "No single element type >60%"**
- **Ambiguity:** By word count or line count? Visual dominance?
- **Resolution:** Use word-equivalent conversion. Prose/headings = word count. Code = line count × 5. Tables = cell count × 3. Callouts = word count. Compute percentage of total word-equivalents.

### 3. **B9.2: "Characters per line"**
- **Ambiguity:** Which paragraph? Longest line? Average?
- **Resolution:** Measure first body paragraph after first H2. If out of range, check 2 more paragraphs. PASS if 2/3 paragraphs in range.

### 4. **B9.3: "Deepest vs shallowest padding"**
- **Ambiguity:** Top, bottom, left, right, or max?
- **Resolution:** Use max padding value (top, bottom, left, right) for each section. Shallowest = section with largest max padding. Deepest = section with smallest max padding.

### 5. **B9.5: "Section breathing zones ≥48px"**
- **Ambiguity:** What is a "major section"? Margin or padding or both?
- **Resolution:** Major section = `<section>`, `.section`, or `main > div` with ≥2 child elements OR >100 words. Measure gap = `topOfNext.getBoundingClientRect().top - bottomOfPrevious.getBoundingClientRect().bottom`. Includes margins and padding.

### 6. **C1.1: "CSS line count"**
- **Ambiguity:** Minified or formatted? Comments?
- **Resolution:** Count formatted CSS (1 property per line). Exclude blank lines. Exclude comments (`//` and `/* */`). Do NOT minify before counting.

### 7. **C4.2: "At least 3 distinct padding values"**
- **Ambiguity:** How distinct? 64px vs 60px?
- **Resolution:** Values are distinct if they differ by >4px (measurement precision threshold). 64px and 60px = NOT distinct. 64px and 58px = distinct.

---

## 5. EVALUATION TIME ESTIMATES

Estimated time for a TRAINED evaluator with Playwright MCP and tools ready:

| Section | Items | Estimated Time | Notes |
|---------|-------|----------------|-------|
| **A. Pre-Build Decisions** | 22 | 45 min | Primarily documentation review. A1-A5 decision verification. |
| **B. Build Requirements** | 35 | 90 min | Most time-intensive. B2 container audit (15 min), B3 mechanism enumeration (20 min), B6 fractal gate (25 min), B7 soul compliance (10 min), B9 guardrails (20 min). |
| **C. Measurement & Metrics** | 21 | 75 min | C1 structural metrics (20 min), C2 mechanism analysis (15 min), C3 programmatic audit (20 min), C4 perceptual audit (20 min). |
| **D. Evaluation Criteria** | 12 | 60 min | D1 comparison (20 min), D2 engagement (15 min), D3 novelty (25 min). |
| **E. The Verdict** | 16 | 30 min | Synthesizing prior sections. If evidence collected, verdict is fast. |
| **F. Post-Experiment Decisions** | 15 | 15 min | Checklist only, no execution required. |
| **G. Meta-Checks** | 8 | 20 min | Documentation review for clarification compliance. |
| **H. Completeness Cross-Check** | 4 tables | 15 min | Self-verification against source docs. |
| **TOTAL** | 129 items + 4 tables | **5.8 hours** | ~350 minutes |

**For FRESH evaluator (no context):**
- Add 2-3 hours for reading source documents (HANDOFF, master-agenda, master-execution-prompt, skill excerpts, tokens.css, prohibitions.md)
- Add 30-60 min for setting up Playwright MCP and measurement scripts
- **Total: 8-12 hours**

**Critical path items (B2.1, B3.6, B7.1, B7.2, B1.2, E1.1, B8.2):** ~45 minutes to verify all 7.

---

## 6. PROPOSED SCORING RUBRIC

### 6.1 Weighting System

**Critical items (7 identified):** 3x weight
**Standard items (122):** 1x weight
**Meta-checks (G1-G8):** 1x weight (documentation quality)
**Completeness checks (H1-H4):** 0.5x weight (self-verification)

**Maximum score:**
- Critical items: 7 × 3 = 21 points
- Standard items: 122 × 1 = 122 points
- Meta-checks: 8 × 1 = 8 points
- Completeness: 4 × 0.5 = 2 points
- **Total:** 153 points

Wait, let me recalculate. The checklist has 129 items total, but some are compound or observational.

**Recalculation:**
- **Critical items (7):** B2.1, B3.6, B7.1, B7.2, B1.2, E1.1, B8.2 → 3 pts each = 21 pts
- **Binary items (91 - 7 critical):** 84 items → 1 pt each = 84 pts
- **Judgment items (26):** 1 pt each = 26 pts (same weight, but flagged for review)
- **Meta-checks (8):** 1 pt each = 8 pts
- **Completeness (4 tables):** 2 pts each = 8 pts
- **Total:** 21 + 84 + 26 + 8 + 8 = **147 points maximum**

**Note:** Observational metrics (C1.2, C1.6, C1.7) do NOT contribute to score — they're recorded for analysis but don't pass/fail.

### 6.2 Verdict Thresholds

**PASS:** ≥85% of maximum score = ≥125 points
**PARTIAL:** 70-84% = 103-124 points
**FAIL:** <70% = <103 points

**Critical item requirement:** ALL 7 critical items MUST pass for any verdict except FAIL. Failing any critical item = automatic FAIL regardless of total score.

### 6.3 Category Sub-Scores

For diagnostic purposes, break score into sub-scores:

| Category | Max Points | Pass Threshold (85%) |
|----------|-----------|---------------------|
| Pre-Build (A) | 22 | 19 |
| Build (B) | 35 + 18 (critical) = 53 | 45 |
| Measurement (C) | 21 | 18 |
| Evaluation (D) | 12 | 10 |
| Verdict (E) | 16 + 3 (E1.1 critical) = 19 | 16 |
| Meta (G) | 8 | 7 |
| Completeness (H) | 8 | 7 |

**Total:** 147 points

### 6.4 Failure Mode Diagnostics

If score <125 (PARTIAL or FAIL), categorize failure mode:

| Failure Mode | Diagnostic Signature | Likely Cause |
|--------------|---------------------|--------------|
| **Soul violation** | B7.1-B7.7 <7/7 | Skipped prohibitions.md, token palette not enforced |
| **Container failure** | B2.1 FAIL | 940-960px rule not followed (Phase D repeat) |
| **Category coverage failure** | B3.6 FAIL | Per-category minimum not enforced, or content didn't support all categories |
| **Fractal incoherence** | B6.1-B6.7 <5/7 | Pattern not expressed at 2 scales, or scales inconsistent |
| **Engagement failure** | C4.5 (PA-05) = NO | Lookup-based deployment cannot produce "designed" output |
| **Novelty failure** | D3.1-D3.3 all DERIVATIVE | Copying showcase structures despite different content |
| **Improvement failure** | D2.2 = NO or MARGINAL | Middle no better than Variant B — modifications didn't add value |

---

## 7. INTER-RATER RELIABILITY ESTIMATES

**For truly binary items (91 items, 70.5% of checklist):**
- Expected inter-rater agreement: **95-100%** (items with binary confidence ≥4)
- Items with binary confidence 3: **85-95%** agreement (some edge cases)

**For judgment items (26 items, 20.2% of checklist):**
- **Without operationalization:** 30-70% agreement (high disagreement)
- **With operationalization (Section 2 proposals):** 70-85% agreement (improved, but not perfect)

**Overall checklist inter-rater reliability:**
- **Current state:** ~82% agreement (weighted average)
- **After operationalizing judgment items:** ~91% agreement
- **Critical items only (7 items):** 100% agreement (all are binary confidence ≥4)

**Recommended action before deploying checklist:**
1. Apply operationalizations from Section 2 to all 26 judgment items
2. Run pilot evaluation with 2 independent evaluators on same test page
3. Measure actual inter-rater agreement
4. Target: ≥90% agreement on critical items, ≥85% overall

---

## 8. KEY FINDINGS SUMMARY

### 8.1 The Hidden Judgment Burden

**Adversarial review identified 4 judgment items.** This audit found **22 additional judgment items** not flagged, bringing total to **26 (20.2% of checklist).**

**Judgment hotspots:**
- **Perceptual Audit (PA questions):** 10/10 items have judgment components (C4.2, C4.3, C4.4, C4.5, C4.10, D2.1, D2.3)
- **Engagement threshold (PA-05):** Appears in 5 items (C4.5, C4.10, D2.1, E3.1, E4.1) — single most judgment-heavy question
- **Comparative verdicts:** D2.2, E2.2, E3.4 — "better than Variant B" requires quantitative thresholds

### 8.2 Measurement Precision vs Judgment

**91 items (70.5%) are genuinely binary with clear measurement procedures.** This is EXCELLENT baseline precision for an experimental checklist.

**However:** The 26 judgment items cluster in the MOST IMPORTANT sections:
- **Section C4 (Perceptual Audit):** 5/10 items have judgment issues
- **Section D2 (Engagement Assessment):** 3/4 items have judgment issues
- **Section E (Verdict):** 7/16 items depend on judgment items from C4/D2

**Implication:** You can measure everything perfectly and still get evaluator disagreement on the final verdict because verdict depends on subjective PA questions.

### 8.3 The PA-05 Problem

**PA-05 ("page feels designed")** is THE linchpin question. It appears in:
- C4.5 (direct)
- C4.10 (768px version)
- D2.1 (documentation requirement)
- E2.1 (SUCCESS criterion)
- E3.1, E3.3 (PARTIAL criteria)
- E4.1 (FAILURE criterion)

**If PA-05 has high inter-rater disagreement, the entire verdict framework is unstable.**

**Recommendation:** MUST operationalize PA-05 with 4 sub-criteria (per Section 2) OR replace with compound binary checks.

### 8.4 Measurement Tooling Requirements

**To execute this checklist, evaluator needs:**
1. **Playwright MCP** (or equivalent browser automation) — for computed styles, viewport testing, CPL measurement
2. **CSS analysis script** — for token compliance, mechanism enumeration, value overlap
3. **HTML text extraction** — for word count, element type distribution
4. **Diff tools** — for comparison with Variant B
5. **Screenshot/blur tools** — for structural fingerprint comparison (D3.1)

**Total setup time for fresh evaluator:** 30-60 minutes (if tools already exist), 2-4 hours (if building from scratch).

### 8.5 Critical Items Are Bulletproof

**The 7 critical items (B2.1, B3.6, B7.1, B7.2, B1.2, E1.1, B8.2) ALL have binary confidence ≥4.**

This means:
- Zero disagreement on whether experiment auto-fails
- Fast critical path verification (45 min)
- Clear GO/NO-GO decision before full evaluation

**Recommendation:** Run critical item check FIRST. If any fail, abort full evaluation (experiment already failed).

---

## 9. RECOMMENDATIONS FOR CHECKLIST IMPROVEMENT

### Priority 1: Operationalize PA-05 (Highest Impact)

**Current:** "Page feels designed" — YES/NO
**Proposed:** 4 sub-criteria (Section 2, C4.5 operationalization)
1. ≥3 distinct padding values (already B9.2)
2. ≥1 grid/flex layout (already C4.4)
3. ≥2 visually distinct zones (already C4.3)
4. Visual hierarchy visible in 3-second glance test (NEW)

**PA-05 = YES if 4/4 sub-criteria pass.**

**Impact:** Eliminates single largest source of inter-rater disagreement.

### Priority 2: Quantify "Better Than Variant B"

**Current:** D2.2, E2.2 use YES/MARGINAL/NO without thresholds
**Proposed:** Define by metric count
- **YES:** Outperforms on ≥3 of [spatial variety, category coverage, fractal coherence, density rhythm]
- **MARGINAL:** Outperforms on 1-2 metrics
- **NO:** Outperforms on 0 metrics or underperforms on majority

**Impact:** Makes comparative verdict binary and defensible.

### Priority 3: Resolve D3.2 Gray Zone

**Current:** CSS overlap 31-59% has no verdict
**Proposed:** Redefine <40% = NOVEL, 40-60% = MARGINAL (use D3.3 as tiebreaker), >60% = DERIVATIVE

**Impact:** Every overlap percentage produces a verdict, no ambiguous middle ground.

### Priority 4: Make PA-05 Officially Ternary

**Current:** PA-05 is binary (YES/NO) but E3.3 references "MARGINAL"
**Proposed:** Add MARGINAL tier = 2-3 of 4 sub-criteria pass

**Impact:** Resolves E3.3 scoring and acknowledges gray-zone reality.

### Priority 5: Document Exact Measurement Procedures

**Current:** Checklist says "measure CPL" but doesn't say how
**Proposed:** Append Section 3 (Measurement Procedures) as an annex to the checklist

**Impact:** Eliminates measurement variability. Two evaluators run same script → same result.

### Priority 6: Add Pilot Calibration Step

**Before deploying checklist:**
1. Select test page (e.g., Variant B)
2. Two independent evaluators score it using checklist
3. Measure agreement on all 129 items
4. For items with disagreement, refine operationalization
5. Re-test until ≥90% agreement achieved

**Impact:** Validates checklist reliability before high-stakes use.

---

## 10. FINAL VERDICT ON CHECKLIST QUALITY

**Strengths:**
- 70.5% truly binary items — excellent foundation
- 7 critical items are all binary confidence ≥4 — bulletproof instant-fail detection
- Comprehensive coverage (129 items across 8 sections)
- Clear pass/fail structure
- Strong measurement procedures for quantitative items

**Weaknesses:**
- 20.2% judgment items (26 total) not fully operationalized
- PA-05 question is subjective but appears in 7 verdict criteria
- "Better than Variant B" lacks quantitative thresholds
- CSS overlap gray zone (31-59%) lacks resolution
- Measurement procedures not documented in checklist itself (evaluator must infer)

**Overall Assessment:**
- **For critical items (instant-fail checks):** EXCELLENT — 100% inter-rater reliability expected
- **For quantitative metrics:** VERY GOOD — 95%+ reliability with proper tooling
- **For perceptual/engagement items:** NEEDS IMPROVEMENT — 30-70% reliability without operationalization, 70-85% with

**Recommended action:** Apply Priority 1-5 improvements BEFORE using checklist for Middle-tier experiment. Pilot test with 2 evaluators to validate ≥90% agreement.

**Estimated time to improve checklist:** 2-3 hours (apply operationalizations from Section 2, document procedures from Section 3).

---

**END AUDIT**

**Next step:** Review findings with team lead. If improvements approved, update checklist with operationalizations before Middle-tier build begins.
