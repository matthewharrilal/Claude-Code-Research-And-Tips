# PA-05 Operationalization: "Page Feels Designed" -> 4 Binary Sub-Criteria

**Date:** 2026-02-15
**Author:** pa05-designer (checklist-hardening team)
**Task:** Task #1 -- Replace subjective PA-05 with concrete binary sub-criteria
**Sources:** 20-checklist-gaming-audit.md (Scenarios 2D, 5A), 20-checklist-measurement-audit.md (Section 2 C4.5), 18-middle-tier-checklist.md (7 PA-05 references)

---

## 1. THE PROBLEM

PA-05 ("page feels designed") appears in 7 checklist items:

| ID | Role | Current Form |
|----|------|-------------|
| C4.5 | Direct question at 1440px | YES = "designed" / NO = "formatted" |
| C4.10 | Direct question at 768px | YES = "designed" / NO = "formatted" |
| D2.1 | Evidence documentation | "1-2 sentence evidence" |
| E2.1 | SUCCESS gate | PA-05 must = YES |
| E3.1 | PARTIAL signal | PA-05=YES but atmosphere=NO |
| E3.3 | PARTIAL signal | PA-05=MARGINAL at both viewports |
| E4.1 | FAILURE gate | PA-05 = NO |

**Why it fails as-is:**

1. **Gaming audit (Scenario 2D):** ANY page with intentional CSS can be argued as "designed." A Bootstrap-quality page has "intentional spatial decisions" (someone chose those padding values). The bar for "designed vs formatted" is inherently subjective.

2. **Gaming audit (Scenario 5A):** A bad page can present evidence like "the page has intentional spatial decisions: 48px section padding was chosen over default browser spacing." Choosing ANY padding is an "intentional spatial decision."

3. **Measurement audit:** Binary confidence rating = 1.5/5 (lowest of any checklist item). Estimated 30-70% inter-rater disagreement without operationalization.

4. **Cascade risk:** Because PA-05 feeds into 7 items, disagreement on PA-05 destabilizes the entire verdict framework. An evaluator who says NO on PA-05 triggers E4.1 (FAILURE). An evaluator who says YES on the same page enables E2.1 (SUCCESS path). The experiment's outcome hinges on an unmeasurable question.

---

## 2. DESIGN PRINCIPLES FOR SUB-CRITERIA

The sub-criteria must satisfy ALL of the following:

1. **Binary:** Each sub-criterion is PASS or FAIL with zero judgment required
2. **Measurable:** Each can be verified by a Playwright script OR by a fresh-eyes agent counting/observing specific elements
3. **Non-redundant with existing checks:** Sub-criteria must test something BEYOND what B9, C4.1-C4.4 already test (otherwise PA-05 is just a duplicate gate)
4. **Anti-gaming:** The combination must be hard to satisfy with a mediocre page (the "worst possible passing page" from the gaming audit should FAIL at least 2 of 4)
5. **Content-neutral:** Must work for any content type (tutorial, reference, guide, API docs) without favoring one

### What existing checks already cover (and therefore PA-05 sub-criteria should NOT duplicate):

- **C4.2 (PA-02):** >=3 distinct padding values -- already checks density rhythm
- **C4.3 (PA-03):** >=2 visually distinct zones -- already checks zone differentiation
- **C4.4 (PA-04):** >=1 grid/flex layout -- already checks spatial variety
- **B9.1-B9.8:** Guardrail compliance (padding, CPL, line-height, etc.)
- **B3.1-B3.6:** Category coverage (5 categories represented)

PA-05 sub-criteria must capture what "designed" means BEYOND these existing checks. The gap is: a page can pass all of the above and still look like a generic documentation page.

---

## 3. THE 4 SUB-CRITERIA

### PA-05a: Non-Default Layout Element Count

**Question:** Does the page contain elements that could NOT be produced by applying a CSS framework's default grid/column system to plain HTML?

**Pass condition:** Page contains >= 2 elements where the CSS produces a layout effect that requires CUSTOM spatial logic (not achievable by applying a standard grid framework like Bootstrap/Tailwind to semantic HTML).

**Examples of qualifying elements:**
- Asymmetric multi-column layout (columns with different widths, not 50/50 or 33/33/33)
- Bento-style grid with items spanning different row/column counts
- Width-constrained content blocks narrower than parent (via intentional max-width or padding, not container width)
- Zone-specific background treatment spanning full width behind constrained content
- Sticky/fixed navigation elements with scroll-aware behavior
- Elements with solid-offset depth positioning (transform: translate)
- Content sections with deliberately different internal padding structures

**Examples that do NOT qualify:**
- Equal-width columns (2-col 50/50, 3-col 33/33/33)
- Single-column centered content (every CSS framework default)
- Standard header/footer/main layout
- Uniform card grids
- Default blockquote/callout styling with only border-left

**Measurement procedure (Playwright):**
```javascript
// Count elements with custom spatial properties
let customCount = 0;

// 1. Check for asymmetric grid columns
const gridElements = await page.locator('[style*="grid"], *').all();
for (const el of gridElements) {
  const gridCols = await el.evaluate(e =>
    window.getComputedStyle(e).gridTemplateColumns
  );
  if (gridCols && gridCols !== 'none') {
    const cols = gridCols.split(' ').map(v => parseFloat(v));
    const allEqual = cols.every(c => Math.abs(c - cols[0]) < 2);
    if (!allEqual) customCount++;
  }
}

// 2. Check for width-constrained blocks inside wider parents
const blocks = await page.locator('main *, [role="main"] *').all();
for (const block of blocks) {
  const data = await block.evaluate(e => {
    const style = window.getComputedStyle(e);
    const parentWidth = e.parentElement?.offsetWidth || 0;
    const myWidth = e.offsetWidth;
    return {
      ratio: parentWidth > 0 ? myWidth / parentWidth : 1,
      hasMaxWidth: style.maxWidth !== 'none' && style.maxWidth !== '0px',
      isTextBlock: e.children.length > 0 || e.textContent.trim().length > 50
    };
  });
  if (data.ratio < 0.85 && data.hasMaxWidth && data.isTextBlock) {
    customCount++;
  }
}

// 3. Check for solid-offset depth (transform: translate on decorative elements)
const transformed = await page.locator('*').evaluateAll(els =>
  els.filter(e => {
    const t = window.getComputedStyle(e).transform;
    return t && t !== 'none' && t !== 'matrix(1, 0, 0, 1, 0, 0)';
  }).length
);
customCount += transformed;

// 4. Check for full-bleed backgrounds behind constrained content
const fullBleeds = await page.locator('*').evaluateAll(els =>
  els.filter(e => {
    const style = window.getComputedStyle(e);
    const bg = style.backgroundColor;
    const width = e.offsetWidth;
    const viewportWidth = window.innerWidth;
    const child = e.querySelector(':scope > *');
    const childWidth = child ? child.offsetWidth : width;
    return (
      bg !== 'rgba(0, 0, 0, 0)' &&
      bg !== 'transparent' &&
      width > viewportWidth * 0.9 &&
      childWidth < width * 0.85
    );
  }).length
);
customCount += fullBleeds;

const PASS = customCount >= 2;
```

**Why this works against gaming:**
- The "worst possible passing page" from the gaming audit has ZERO custom layout elements (single-column vertical stack with uniform padding). It would score 0/2. FAIL.
- A Bootstrap-quality page would score 0-1. Likely FAIL.
- A genuinely designed page naturally produces 3-5+ custom elements.

---

### PA-05b: Padding Range Ratio >= 2.0x

**Question:** Does the page use meaningfully different spacing to create visual pacing, not just technically distinct values?

**Pass condition:** The ratio of the LARGEST section padding to the SMALLEST section padding is >= 2.0 (i.e., the largest padding is at least double the smallest).

**Measurement procedure (Playwright):**
```javascript
// Extract all major section vertical paddings
const sections = await page.locator(
  'section, .section, main > div, [class*="zone"], [class*="section"]'
).all();

const paddings = [];
for (const section of sections) {
  const data = await section.evaluate(e => {
    const style = window.getComputedStyle(e);
    const top = parseInt(style.paddingTop) || 0;
    const bottom = parseInt(style.paddingBottom) || 0;
    return Math.max(top, bottom);
  });
  if (data > 0) paddings.push(data);
}

if (paddings.length < 2) {
  // Fewer than 2 sections = automatic FAIL
  return false;
}

const maxPadding = Math.max(...paddings);
const minPadding = Math.min(...paddings);

const ratio = maxPadding / minPadding;
const PASS = ratio >= 2.0;
// Example: 80px / 32px = 2.5x -- PASS
// Example: 48px / 40px = 1.2x -- FAIL
// Example: 64px / 32px = 2.0x -- PASS (boundary)
```

**Why this works against gaming:**
- The gaming audit's worst page uses 48px/52px padding (ratio 1.08x). FAIL.
- Scenario 7C uses 48px/44px/40px (ratio 1.2x). FAIL.
- A genuinely designed page with CRESCENDO pattern naturally produces 80px/32px (ratio 2.5x). PASS.
- This is DIFFERENT from C4.2 (which counts distinct values) and B9.3 (which checks compression ratio as deepest >= 40% of shallowest). PA-05b checks the RANGE from the opposite direction: largest must be >= 2x smallest.

**Relationship to existing checks:**
- B9.3 says deepest >= 40% of shallowest (prevents OVER-compression). PA-05b says largest >= 2x smallest (prevents UNDER-variation). They are complementary bounds: B9.3 sets the floor on compression, PA-05b sets the floor on variation.
- C4.2 requires >= 3 distinct values but has no minimum range. PA-05b requires minimum range but doesn't care about count. Together they prevent both "3 values that are 48/49/50" (fails PA-05b) and "2 values that are 80/32" (fails C4.2).

---

### PA-05c: Visual Hierarchy Identification Test (3-Second Glance)

**Question:** Can a fresh agent identify the page's most important section AND a secondary section within 3 seconds, without reading content?

**Pass condition:** A zero-context agent (or evaluator) views a 20px Gaussian-blurred screenshot of the page for 3 seconds and can correctly identify: (1) which area is the PRIMARY content zone, and (2) which area is a SECONDARY/supporting zone. If BOTH identifications match the builder's intent (documented during build), PASS.

**Measurement procedure:**

Step 1 -- Builder documents (during build):
```
PRIMARY ZONE: [description, e.g., "the main tutorial steps in the center"]
SECONDARY ZONE: [description, e.g., "the API reference table at the bottom"]
```

Step 2 -- Evaluator takes screenshot and applies 20px Gaussian blur:
```javascript
// Playwright screenshot
await page.screenshot({ path: 'page-full.png', fullPage: true });
// Apply blur externally or via canvas:
const canvas = document.createElement('canvas');
// ... apply 20px Gaussian blur filter
```

Step 3 -- Fresh agent (or evaluator without build context) views blurred screenshot for 3 seconds and writes:
```
I believe the PRIMARY zone is: [their answer]
I believe the SECONDARY zone is: [their answer]
```

Step 4 -- Compare answers:
```
PASS: Both identifications match builder's documented intent
FAIL: Either identification is wrong or agent cannot distinguish zones
```

**Why this works against gaming:**
- A page with uniform padding, uniform backgrounds, and single-column layout produces a blurred image that is a uniform gray rectangle. No zones are distinguishable. FAIL.
- A page with zone backgrounds, density variation, and spatial hierarchy produces a blurred image with clear light/dark bands and size variation. Zones are distinguishable. PASS.
- This test is BINARY (match or no match) but captures the GESTALT of "designed" -- visual hierarchy is the foundation of design.

**Practical simplification:** If a Gaussian blur tool is not available, the evaluator can squint at the page from arm's length (simulates blur) or zoom the browser to 25% (simulates distance). The test is: can you identify spatial zones without reading text?

**Alternative automated approach (no fresh agent needed):**
```javascript
// Measure visual weight distribution across page quadrants
const fullHeight = await page.evaluate(() => document.body.scrollHeight);
const quarterHeight = fullHeight / 4;

const quadrantData = [];
for (let i = 0; i < 4; i++) {
  const y = i * quarterHeight;
  // Count distinct background colors in this vertical band
  const data = await page.evaluate((startY, height) => {
    const elements = document.elementsFromPoint(
      window.innerWidth / 2, startY + height / 2
    );
    const bgs = new Set();
    const paddings = [];
    elements.forEach(el => {
      const style = window.getComputedStyle(el);
      bgs.add(style.backgroundColor);
      paddings.push(parseInt(style.paddingTop) || 0);
    });
    return { bgCount: bgs.size, avgPadding: paddings.reduce((a,b) => a+b, 0) / paddings.length };
  }, y, quarterHeight);
  quadrantData.push(data);
}

// Page has visual hierarchy if quadrants differ meaningfully
const paddingVariation = Math.max(...quadrantData.map(q => q.avgPadding)) -
                         Math.min(...quadrantData.map(q => q.avgPadding));
const bgVariation = new Set(quadrantData.map(q => q.bgCount)).size;

const PASS = paddingVariation >= 16 && bgVariation >= 2;
```

**Recommended approach:** Use the fresh-agent method for highest fidelity. Use the automated approach as a pre-screen (if automated PASS, skip fresh-agent test; if automated FAIL, confirm with fresh-agent test).

---

### PA-05d: Non-Framework CSS Ratio >= 15%

**Question:** Does the page contain a meaningful proportion of CSS declarations that go BEYOND what a framework + tokens would produce?

**Pass condition:** At least 15% of the page's CSS declarations are "compositional" -- they encode spatial relationships, density patterns, or mechanism-specific behavior rather than just applying token values to standard selectors.

**Definition of "compositional" CSS:**
- Declarations using `calc()` with spacing tokens (e.g., `padding: calc(var(--space-8) * 1.5)`)
- Media queries that change spatial relationships (not just font sizes)
- Pseudo-elements (`::before`, `::after`) used for spatial/decorative effects
- Grid/flex declarations with non-trivial configurations
- `transform` declarations for depth/offset effects
- Selector specificity targeting content-specific elements (e.g., `.tutorial-step:nth-child(even)`)
- Declarations that differ between instances of the same element type (e.g., different padding for different `<section>` elements)

**Definition of "framework" CSS (does NOT count as compositional):**
- Token variable application (e.g., `color: var(--color-text)`)
- Standard resets (e.g., `margin: 0`, `box-sizing: border-box`)
- Typography declarations (font-family, font-size, line-height using token values)
- Uniform spacing (same padding applied to all instances of a class)
- Basic responsive breakpoints that only adjust font size or hide elements

**Measurement procedure:**
```javascript
// Parse the page's <style> block or linked stylesheet
const styleContent = await page.evaluate(() => {
  const styles = document.querySelectorAll('style');
  return Array.from(styles).map(s => s.textContent).join('\n');
});

// Count total declarations
const allDeclarations = styleContent.match(/[^{}]+\{[^}]+\}/g) || [];
const totalDecls = allDeclarations.length;

// Count compositional declarations
let compositionalCount = 0;
for (const block of allDeclarations) {
  const isCompositional = (
    block.includes('calc(') ||
    block.includes('::before') || block.includes('::after') ||
    block.includes('grid-template') ||
    block.includes('transform:') ||
    block.includes(':nth-') ||
    block.includes('@media') ||
    // Different values for same element type (requires semantic analysis)
    /\.(zone|section|area|block)--\w+/.test(block)
  );
  if (isCompositional) compositionalCount++;
}

const ratio = compositionalCount / totalDecls;
const PASS = ratio >= 0.15;
```

**Why this works against gaming:**
- A page that only applies tokens to semantic HTML (the "formatted" baseline) has ~0-5% compositional CSS. FAIL.
- A page with 5 minimally-deployed mechanisms adds ~5-10% compositional CSS. FAIL.
- A genuinely designed Middle-tier page with 8-10 meaningfully deployed mechanisms produces ~20-35% compositional CSS. PASS.
- The 15% threshold is set below the Middle-tier natural landing (~25%) to allow for content variation, but above the Floor-tier ceiling (~10%).

---

## 4. COMPOSITE SCORING

### PA-05 = YES (Designed)
All 4 sub-criteria PASS.

### PA-05 = MARGINAL
2-3 of 4 sub-criteria PASS.

### PA-05 = NO (Formatted)
0-1 of 4 sub-criteria PASS.

This ternary scale resolves the E3.3 issue (previously, "MARGINAL" was undefined for a binary YES/NO question).

---

## 5. APPLICATION TO ALL 7 PA-05 REFERENCES

### C4.5 (PA-05 at 1440px)

**Old:** "YES: page feels 'designed' (intentional spatial decisions visible) / NO: page feels 'formatted'"

**New:**
```
Evaluate 4 sub-criteria at 1440px viewport:
  PA-05a: Non-default layout element count >= 2      [PASS/FAIL]
  PA-05b: Padding range ratio >= 2.0x                [PASS/FAIL]
  PA-05c: Visual hierarchy identification test        [PASS/FAIL]
  PA-05d: Non-framework CSS ratio >= 15%             [PASS/FAIL]

  Result: 4/4 = YES | 2-3/4 = MARGINAL | 0-1/4 = NO
```

### C4.10 (PA-05 at 768px)

**Old:** Same subjective question at 768px.

**New:**
```
Evaluate 3 sub-criteria at 768px viewport (PA-05d is viewport-independent,
measured once):
  PA-05a at 768px: Non-default layout element count >= 1  [PASS/FAIL]
    (threshold lowered: grid->stacked is expected, but at least 1
     non-default element should survive responsive adaptation)
  PA-05b at 768px: Padding range ratio >= 1.5x            [PASS/FAIL]
    (threshold lowered: responsive often compresses padding range)
  PA-05c at 768px: Visual hierarchy identification test    [PASS/FAIL]
    (same method, different screenshot)
  PA-05d: Same as 1440px result (CSS doesn't change)      [from C4.5]

  Result: 4/4 = YES | 2-3/4 = MARGINAL | 0-1/4 = NO
```

Note: 768px thresholds are intentionally lower than 1440px. Responsive adaptation naturally reduces spatial complexity. The question at 768px is "does design SURVIVE adaptation?" not "is design EQUAL to desktop?"

### D2.1 (PA-05 engagement answer documented)

**Old:** "Clear YES or NO at 1440px with 1-2 sentence evidence"

**New:**
```
PA-05 sub-criteria scores documented:
  PA-05a: [score] -- [list of qualifying elements]
  PA-05b: [ratio value] -- [max padding]px / [min padding]px
  PA-05c: [PASS/FAIL] -- [primary zone identified: ___] [secondary zone: ___]
  PA-05d: [ratio value] -- [compositional count] / [total count]

  Composite: [YES / MARGINAL / NO]
```

Evidence is now STRUCTURED, not free-form. Each sub-criterion produces specific data. No room for vague "intentional spatial decisions" claims.

### E2.1 (SUCCESS criterion: PA-05 = YES)

**Old:** PA-05 must = YES (subjective)

**New:** PA-05 composite = YES (4/4 sub-criteria PASS at 1440px). No change to gate logic, but the underlying measurement is now binary.

### E3.1 (PARTIAL: PA-05=YES but atmosphere=NO)

**No change needed.** PA-05 is now operationalized; atmosphere (D2.3) is a separate question. The compound condition remains valid.

### E3.3 (PARTIAL: PA-05=MARGINAL at both viewports)

**Old:** "MARGINAL" was undefined.

**New:** MARGINAL = 2-3 of 4 sub-criteria PASS. E3.3 triggers when BOTH C4.5 AND C4.10 produce MARGINAL results.

### E4.1 (FAILURE: PA-05 at 1440px = NO)

**Old:** PA-05 = NO (subjective)

**New:** PA-05 composite = NO (0-1 of 4 sub-criteria PASS at 1440px). Experiment FAILS because the page could not produce 2+ measurable design indicators.

---

## 6. ANTI-GAMING ANALYSIS

Testing the 4 sub-criteria against the gaming audit's "worst possible passing page":

**The worst page:** Single-column, 940px, 5 mechanisms (1 per category at minimal expression), padding 48-52px, background alternation between #FEF9F5 and #FAF5ED, CRESCENDO claimed via 52px -> 48px decrease.

| Sub-criterion | Score | Reasoning |
|---------------|-------|-----------|
| PA-05a: >= 2 non-default elements | **FAIL (0)** | Single-column layout, no asymmetric grids, no width-constrained blocks, no transforms, no full-bleed backgrounds. Zero custom layout elements. |
| PA-05b: Padding ratio >= 2.0x | **FAIL (1.08x)** | Max padding 52px / min padding 48px = 1.08x. Far below 2.0x threshold. |
| PA-05c: Visual hierarchy test | **FAIL** | Blurred image shows uniform gray rectangle. No distinguishable zones (background colors differ by 1 hex step -- invisible at blur). |
| PA-05d: >= 15% compositional CSS | **FAIL (~5%)** | 5 minimally-deployed mechanisms produce ~15-20 compositional declarations out of ~300-350 total. Most CSS is token application. |

**Result: 0/4 = NO.** The worst possible passing page correctly gets PA-05 = NO under the new system. It would trigger E4.1 (FAILURE).

**Testing a genuinely designed Middle-tier page:**

| Sub-criterion | Expected Score | Reasoning |
|---------------|---------------|-----------|
| PA-05a | **PASS (3-5 elements)** | Bento grid with asymmetric spans, width-constrained code blocks, full-bleed zone backgrounds, solid-offset depth elements |
| PA-05b | **PASS (2.5-3.0x)** | CRESCENDO: intro at 80px, dense section at 28-32px = 2.5-2.8x ratio |
| PA-05c | **PASS** | Clear light/dark bands visible at blur. Primary zone (tutorial steps) visually distinct from secondary zone (reference table). |
| PA-05d | **PASS (~25-30%)** | 8-10 mechanisms with 3+ instances each produce substantial compositional CSS |

**Result: 4/4 = YES.** A genuinely designed page correctly gets PA-05 = YES.

---

## 7. MEASUREMENT BURDEN

| Sub-criterion | Measurement Method | Time | Automatable? |
|---------------|-------------------|------|-------------|
| PA-05a | Playwright element analysis | 5-10 min | YES (fully) |
| PA-05b | Playwright padding extraction | 3-5 min | YES (fully) |
| PA-05c | Screenshot + blur + fresh agent | 10-15 min | PARTIAL (screenshot auto, judgment manual) |
| PA-05d | CSS analysis | 5-10 min | YES (fully) |
| **Total** | | **23-40 min** | **3/4 fully automated** |

PA-05c is the only sub-criterion requiring human/agent judgment, and that judgment is constrained to a specific, structured task (identify 2 zones from a blurred image) rather than the open-ended "does this feel designed?" question.

**Fallback for PA-05c if fresh agent is unavailable:** Use the automated quadrant-analysis approach from Section 3 (PA-05c). This makes all 4 sub-criteria fully automatable, though with slightly lower fidelity on the visual hierarchy test.

---

## 8. IMPLEMENTATION CHECKLIST

To integrate this operationalization into the Middle-tier checklist (18-middle-tier-checklist.md):

1. **REPLACE** C4.5's pass/fail conditions with the 4 sub-criteria evaluation at 1440px
2. **REPLACE** C4.10's pass/fail conditions with the 4 sub-criteria evaluation at 768px (adjusted thresholds)
3. **REPLACE** D2.1's evidence format with the structured template from Section 5
4. **UPDATE** E3.3 to reference the new MARGINAL definition (2-3 of 4 sub-criteria)
5. **ADD** builder documentation requirement: PRIMARY ZONE and SECONDARY ZONE must be declared during build (for PA-05c evaluation)
6. **ADD** PA-05 sub-criteria measurement scripts to the evaluator's tooling setup
7. **NO CHANGES** needed to E2.1, E3.1, or E4.1 -- they reference PA-05 outcomes (YES/NO) which the new system still produces

---

**END SPECIFICATION**

*This operationalization transforms PA-05 from a 1.5/5 binary confidence question into a 4.0/5 binary confidence compound check. The remaining 1.0 gap comes from PA-05c (visual hierarchy test), which still requires structured agent judgment -- but the judgment is now constrained to "identify 2 zones from a blurred image" rather than "does this feel designed?"*
