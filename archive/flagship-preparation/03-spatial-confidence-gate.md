# Spatial Confidence Gate: Complete Specification

**Author:** SPATIAL-GATE-DESIGNER (Opus 4.6)
**Date:** 2026-02-16
**Evidence Base:**
- 05-flagship-architecture.md (3-pass architecture, gate concept, SC-01 through SC-07)
- 01-process-retrospective.md (spatial budget insight, 10 proposed gates, root cause analysis)
- 02-content-form-analysis.md (zone-content ratio, content height calculations, whitespace decomposition)
- 06-failure-analysis.md (7 failure root cause chains, void budget gate as highest-leverage change)
- ceiling-page.html (actual CSS values: 960px container, zone padding, transition spacing)

**Purpose:** Formalize every aspect of the Spatial Confidence Gate so that it can be executed by agents with ZERO ambiguity. Every threshold is binary and measurable. Every failure response is concrete.

---

## 1. VOID BUDGET CALCULATION

### 1.1 Definitions

**Content:** Any element that contains text, images, code, tables, diagrams, or interactive controls that the reader came to the page to consume. Content is what the page EXISTS to deliver.

Concrete content types:
- Paragraphs of body text (`<p>` with text content)
- Code blocks (`<pre>`, `<code>` with code content)
- Tables (`<table>` with data rows)
- Lists (`<ul>`, `<ol>` with `<li>` items containing text)
- Callout/aside boxes (with text content inside)
- Diagrams (ASCII art in `<pre>`, or inline SVG/images)
- Headings (`<h1>` through `<h6>`) -- these are content because they orient the reader

**Structural overhead:** Any element that exists for visual organization but does not contain reader-consumable information. Structural overhead is the COST of presenting content.

Concrete structural overhead types:
- Zone padding (top and bottom padding on section wrappers)
- Transition spacing (margins/gaps between sections)
- Zone indicators ("ZONE 1 OF 4" labels, checkpoint labels)
- Checkpoint dividers (dark bars, horizontal rules, breathing breaks)
- Header padding (internal padding within the header beyond the text)
- Footer padding (internal padding within the footer beyond the text)
- Inter-element margins (paragraph spacing, heading spacing, list spacing)
- Empty structural `<div>` elements (wrappers with no visible content)

**Content-to-void ratio:** The percentage of total page scroll height occupied by content-bearing elements vs structural overhead.

```
content_ratio = total_content_height / total_page_height
void_ratio = 1 - content_ratio
```

### 1.2 Formula: Projected Page Height (Pre-Build)

This calculation happens BEFORE the builder starts. The planner computes it from the build plan.

```
PROJECTED PAGE HEIGHT =
    header_height
  + SUM(zone_padding_top[i] + zone_padding_bottom[i] for each zone i)
  + SUM(transition_gap[j] for each transition j)
  + SUM(heading_margin_top[k] for each heading k)
  + SUM(paragraph_spacing * paragraph_count)
  + SUM(code_block_height[m] for each code block m)
  + SUM(table_height[n] for each table n)
  + SUM(list_height[p] for each list p)
  + SUM(callout_height[q] for each callout q)
  + SUM(designed_moment_height[r] for each designed moment r)
  + footer_height
```

**Simplified estimation method (recommended for planners):**

```
CONTENT HEIGHT ESTIMATE:
  body_text_lines = word_count / 12  (avg 12 words per line at 960px, 18px Inter)
  body_text_px = body_text_lines * 30.6  (18px * 1.7 line-height)
  code_block_px = code_lines * 22.3  (0.875rem * 16px * 1.5 line-height ~= 21px + 1.3px padding per line)
  table_px = table_rows * 40  (row height + borders)
  list_px = list_items * 30  (item height + margin)
  heading_px = heading_count * 55  (average heading height + top margin)
  callout_px = callout_count * 120  (average callout including padding and content)

STRUCTURAL OVERHEAD ESTIMATE:
  zone_padding_px = zone_count * avg_zone_padding * 2  (top + bottom)
  transition_px = transition_count * avg_transition_gap
  checkpoint_px = checkpoint_count * avg_checkpoint_height
  header_px = header_total_height  (including all padding)
  footer_px = footer_total_height  (including all padding)
  inter_paragraph_px = paragraph_count * paragraph_margin_bottom

TOTAL PAGE HEIGHT = CONTENT HEIGHT + STRUCTURAL OVERHEAD
CONTENT-TO-VOID RATIO = CONTENT HEIGHT / TOTAL PAGE HEIGHT
```

### 1.3 Pass Threshold

**Content-to-void ratio >= 60:40 (content must be >= 60% of total page height)**

This threshold is derived from the ceiling experiment data:
- Ceiling experiment: ~30:70 content-to-void (CATASTROPHIC -- DO NOT SHIP verdict)
- Middle experiment: ~75:25 content-to-void (SUCCESS -- PA-05 DESIGNED 4/4)
- Content-form analysis calculated 91% content ratio by element height, but auditors perceived 30:70 at 1440px due to horizontal void and perceptual factors
- The 60% threshold provides a 15-point margin above the ceiling's failure while remaining achievable for ceiling-tier pages

**Failure response:** If the projected ratio falls below 60:40, the planner MUST take one or more of:
1. Reduce zone count (merge zones with similar content types)
2. Reduce zone padding values
3. Eliminate or compress checkpoint transitions
4. Remove or compress transition spacing
5. Recalculate and re-submit

The planner CANNOT proceed to hand the plan to the builder until the void budget passes.

### 1.4 Worked Example: Ceiling Experiment Data

Using actual values from ceiling-page.html:

```
CEILING EXPERIMENT VOID BUDGET (POST-HOC CALCULATION)

CONTENT ESTIMATES:
  Body text: ~6,500 words / 12 = ~542 lines * 30.6px = ~16,585px
  Code blocks: ~500 lines * 22.3px = ~11,150px
  Tables: ~30 rows * 40px = ~1,200px
  Lists: ~84 items * 30px = ~2,520px
  Headings: ~25 * 55px = ~1,375px
  Callouts: ~6 * 120px = ~720px
  CONTENT SUBTOTAL: ~33,550px

STRUCTURAL OVERHEAD:
  Zone padding:
    zone-ext: 40px top + 40px bottom = 80px
    zone-lobby: 32px + 32px = 64px
    zone-sec (x3): 24px + 24px = 48px each = 144px
    zone-sec-vault: 20px + 20px = 40px
    zone-ops: 20px + 20px = 40px
    zone-ops-strategy: 20px + 20px = 40px
    zone-all: 24px + 24px = 48px
    ZONE PADDING SUBTOTAL: 456px

  Transitions/Checkpoints:
    Entry gate: ~40px (dark bar + margins)
    Security desk: ~80px (breathing transition)
    Smooth dividers (x3): ~48px each = 144px
    Vault door: ~80px (breathing + border)
    Bridge transitions (x2): ~64px each = 128px
    TRANSITION SUBTOTAL: 472px

  Header: 40px top + 32px bottom + content = ~150px overhead
  Footer: 48px top + 48px bottom = ~96px overhead
  Inter-paragraph spacing: ~49 paragraphs * 16px = ~784px
  Heading top margins: ~25 * 32px = ~800px
  MISC OVERHEAD SUBTOTAL: ~1,830px

  OVERHEAD TOTAL: 456 + 472 + 1,830 = ~2,758px

TOTAL PAGE HEIGHT: ~33,550 + ~2,758 = ~36,308px
CONTENT-TO-VOID RATIO: 33,550 / 36,308 = ~92:8

GATE RESULT: PASS (92% > 60%)
```

**Why the gate passes but the page failed:** The ceiling page's content-to-void ratio by ELEMENT HEIGHT is actually high (~92%). The catastrophic void perception came from:
1. Horizontal void: 960px content in 1440px viewport = 33% horizontal fill
2. Perceptual fatigue from zone uniformity (same component types repeated)
3. Checkpoint dividers that were empty `<div>` elements with no visible content

This reveals that the void budget alone is NECESSARY BUT NOT SUFFICIENT. The 7 binary checks below catch what the void budget misses.

**IMPORTANT CALIBRATION NOTE:** The void budget calculation catches GROSS spatial failures (e.g., a build plan with 4,000px of transition spacing on 3,000px of content). It does NOT catch the ceiling experiment's specific failure mode (content present but perceptually void due to zone monotony + horizontal emptiness + empty structural elements). The 7 binary checks address those failure modes. The void budget is the FIRST filter, not the only one.

---

## 2. THE 7 BINARY CHECKS

Each check specifies: what is measured, how it is measured, the pass/fail threshold, and what to do on failure. ALL checks are binary -- no judgment calls except SC-04, which is the only exception and requires team-lead involvement.

### SC-01: Container Width

**What:** The content container's computed width at 1440px viewport.

**How to measure:**
```javascript
// Set viewport to 1440px wide
// Wait for page load and layout
const container = document.querySelector('.page-container')
  || document.querySelector('[class*="container"]')
  || document.querySelector('main');
const rect = container.getBoundingClientRect();
const width = rect.width;
```

**Threshold:** Width must be >= 940px AND <= 960px.

**Pass/Fail:** BINARY.
- 940 <= width <= 960 --> PASS
- width < 940 OR width > 960 --> FAIL

**On failure:**
- If width > 960px: The container `max-width` CSS value is wrong. Fix: set `max-width: 960px` on the content container.
- If width < 940px: The container has excessive horizontal padding eating into the content width. Fix: reduce horizontal padding or increase `max-width`.
- If no container element found: The page lacks a content wrapper. Fix: wrap all content in a `.page-container` with `max-width: 960px; margin: 0 auto`.

**Why this measurement method:** The ceiling experiment had CSS `max-width: 960px` but the initial audit measured 2160px by measuring the VIEWPORT instead of the CONTAINER. This false positive consumed significant audit attention. Programmatic `getBoundingClientRect()` on the correct element prevents this error. NEVER measure container width visually or from viewport dimensions.

---

### SC-02: Maximum Contiguous Void

**What:** No contiguous vertical span of the page may be contentless for more than 1.5 viewport heights (2,160px at 1440px viewport).

**How to measure:**
```javascript
// Scan from top to bottom of page in 100px increments
// At each position, check if there is a content-bearing element visible
const viewportHeight = 1440;
const maxVoidPx = viewportHeight * 1.5; // 2160px
const totalHeight = document.documentElement.scrollHeight;
let currentVoidStart = null;
let maxVoidFound = 0;
let voidRegions = [];

for (let y = 0; y < totalHeight; y += 100) {
  const elements = document.elementsFromPoint(480, y); // center of 960px container
  const hasContent = elements.some(el => {
    const text = el.textContent.trim();
    const tag = el.tagName.toLowerCase();
    // Element has actual text content and is a content-bearing element
    return text.length > 0 &&
      ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th',
       'pre', 'code', 'blockquote', 'figcaption', 'dt', 'dd'].includes(tag);
  });

  if (!hasContent) {
    if (currentVoidStart === null) currentVoidStart = y;
  } else {
    if (currentVoidStart !== null) {
      const voidLength = y - currentVoidStart;
      if (voidLength > maxVoidFound) maxVoidFound = voidLength;
      if (voidLength > maxVoidPx) {
        voidRegions.push({ start: currentVoidStart, end: y, length: voidLength });
      }
      currentVoidStart = null;
    }
  }
}
```

**Threshold:** maxVoidFound must be <= 2,160px. Zero void regions exceeding this threshold.

**Pass/Fail:** BINARY.
- maxVoidFound <= 2160 --> PASS
- maxVoidFound > 2160 --> FAIL (report all void regions)

**On failure:**
- Identify which section(s) the void falls within.
- If void is BETWEEN sections: reduce transition spacing or add content between sections.
- If void is WITHIN a section: the section has insufficient content for its spatial allocation. Either add content or shrink the section.
- If void is at page bottom: excessive bottom margin or footer gap. Fix: reduce bottom spacing.

---

### SC-03: Content Distribution (70%+ Coverage)

**What:** At least 70% of the page's total scroll height must contain visible content (text, images, code, tables).

**How to measure:**
```javascript
const totalHeight = document.documentElement.scrollHeight;
const scanInterval = 50; // px between samples
let contentSamples = 0;
let totalSamples = 0;

for (let y = 0; y < totalHeight; y += scanInterval) {
  totalSamples++;
  const elements = document.elementsFromPoint(480, y);
  const hasContent = elements.some(el => {
    const text = el.textContent.trim();
    const tag = el.tagName.toLowerCase();
    return text.length > 0 &&
      ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th',
       'pre', 'code', 'blockquote', 'figcaption', 'dt', 'dd',
       'span', 'a', 'strong', 'em'].includes(tag);
  });
  if (hasContent) contentSamples++;
}

const contentPercentage = (contentSamples / totalSamples) * 100;
```

**Threshold:** contentPercentage must be >= 70%.

**Pass/Fail:** BINARY.
- contentPercentage >= 70 --> PASS
- contentPercentage < 70 --> FAIL (report actual percentage)

**On failure:**
- If 55-69%: Moderate void. Likely fixable by reducing zone padding and transition spacing by 30-50%.
- If 40-54%: Significant void. Zone merging or content addition required. Cannot fix with CSS alone.
- If < 40%: Catastrophic void (ceiling experiment level). Structural redesign required -- reduce zone count, add content to empty zones, or rebuild with simpler spatial architecture.

---

### SC-04: Squint Test (3+ Distinct Content Regions at 25% Zoom)

**What:** When viewed at 25% browser zoom (or equivalent 4:1 scale reduction), the page must show 3 or more visually distinct content regions with balanced mass distribution.

**How to measure:**
This is the ONLY check that involves human judgment. Procedure:

1. Team-lead takes a full-page screenshot at 1440px viewport width.
2. Team-lead (or spatial-auditor) views the screenshot scaled to 25% of its original size.
3. At this scale, identify regions where content mass is visually apparent (dark/textured areas vs light/empty areas).
4. Count the number of distinct content regions visible.

**Threshold:** At least 3 distinct content regions must be visible at 25% zoom. No quadrant of the page (top-left, top-right, bottom-left, bottom-right when viewed at full height) may be entirely empty.

**Pass/Fail:** JUDGMENT (team-lead decides), but with binary criteria:
- 3+ distinct content regions visible AND no empty quadrant --> PASS
- < 3 distinct regions OR any empty quadrant --> FAIL

**On failure:**
- Team-lead determines if the failure is fixable (one section too sparse) or structural (metaphor requires void that cannot be eliminated).
- If fixable: send fix instruction to builder, re-run gate after fix.
- If structural: ABORT. The metaphor is incompatible with the content density. Re-derive metaphor or downgrade to ceiling tier.

**Why this is the one judgment call:** Squint testing requires gestalt perception -- evaluating spatial BALANCE rather than measuring pixels. No programmatic measurement captures "balanced mass distribution" as reliably as a human glance at a zoomed-out screenshot. The other 6 checks are programmatic; SC-04 is perceptual. This split gives the gate 6 automated filters (fast, reliable, no ambiguity) plus 1 human check (catches what algorithms miss).

---

### SC-05: First Viewport Header Ratio

**What:** The header must occupy less than 20% of the first viewport height at 1440px.

**How to measure:**
```javascript
const viewportHeight = window.innerHeight; // Should be ~900px at 1440x900
const header = document.querySelector('header');
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;
const headerPercentage = (headerHeight / viewportHeight) * 100;
```

**Note on viewport height:** At 1440px width, typical viewport height is 900px (16:10 aspect ratio) or 810px (16:9). Use the ACTUAL viewport height reported by `window.innerHeight`. The threshold is percentage-based, so it adapts to any viewport height.

**Threshold:** headerPercentage must be <= 20%.

**Pass/Fail:** BINARY.
- headerPercentage <= 20 --> PASS
- headerPercentage > 20 --> FAIL (report actual percentage)

**On failure:**
- Calculate the header padding reduction needed: `target_height = viewportHeight * 0.20; reduction = headerHeight - target_height`.
- Reduce header top and/or bottom padding by the calculated amount.
- The ceiling experiment fix reduced header padding from 128px to 72px (44% reduction) and brought it within budget. This is a straightforward CSS fix.

---

### SC-06: Minimum Content Sections

**What:** The page must contain at least 5 content sections. A "content section" is defined as a block that contains at least 200px of rendered content height (approximately 2 paragraphs or 1 paragraph + 1 code block). Purely structural/decorative sections (checkpoint dividers, zone indicators, transition bars) do not count.

**How to measure:**
```javascript
// Find all section-level elements
const sections = document.querySelectorAll(
  'section, [class*="zone-"], [class*="section"], article, main > div'
);

let contentSections = 0;
let sectionDetails = [];

sections.forEach((section, index) => {
  // Count content-bearing child elements
  const contentElements = section.querySelectorAll(
    'p, h2, h3, h4, h5, h6, pre, table, ul, ol, blockquote, figure'
  );

  // Calculate content height within this section
  let contentHeight = 0;
  contentElements.forEach(el => {
    contentHeight += el.getBoundingClientRect().height;
  });

  const isContentSection = contentHeight >= 200;
  sectionDetails.push({
    index,
    className: section.className,
    contentHeight: Math.round(contentHeight),
    isContentSection
  });

  if (isContentSection) contentSections++;
});
```

**Threshold:** contentSections must be >= 5.

**Pass/Fail:** BINARY.
- contentSections >= 5 --> PASS
- contentSections < 5 --> FAIL (report section details)

**On failure:**
- If 3-4 content sections: The page may be combining too much content into too few sections. Split large sections or ensure all planned sections were built.
- If < 3 content sections: Major structural issue. The page lacks section-level organization. Review the build plan for missing sections.

---

### SC-07: Footer Reachability

**What:** The footer must be reachable within the total page, with at most 1 viewport height (900px at standard resolution) of void between the last content section and the footer.

**How to measure:**
```javascript
const footer = document.querySelector('footer');
if (!footer) {
  // FAIL: no footer element
  return { pass: false, reason: 'No footer element found' };
}

const footerTop = footer.getBoundingClientRect().top + window.scrollY;

// Find the last content-bearing element before the footer
const allContent = document.querySelectorAll(
  'p, h2, h3, h4, h5, h6, pre, table, ul, ol, blockquote'
);
let lastContentBottom = 0;
allContent.forEach(el => {
  const rect = el.getBoundingClientRect();
  const bottom = rect.bottom + window.scrollY;
  if (bottom > lastContentBottom && bottom < footerTop) {
    lastContentBottom = bottom;
  }
});

const gapBeforeFooter = footerTop - lastContentBottom;
const viewportHeight = window.innerHeight;
```

**Threshold:** gapBeforeFooter must be <= viewportHeight (typically 900px). Footer must exist.

**Pass/Fail:** BINARY.
- Footer exists AND gapBeforeFooter <= viewportHeight --> PASS
- Footer missing --> FAIL (blocking -- footer is a required landmark)
- gapBeforeFooter > viewportHeight --> FAIL (report gap size)

**On failure:**
- If footer missing: Add footer (this was the Middle experiment's defect -- corrected in ceiling experiment).
- If gap too large: Reduce bottom margin/padding on the last content section. If the gap comes from empty structural elements between last content and footer, remove or compress them.

---

## 3. GATE TIMING

### 3.1 When the Gate Fires

The Spatial Confidence Gate fires at the END of Pass 1 (Spatial Skeleton), BEFORE Pass 2 (Compositional Elaboration) begins.

```
EXECUTION TIMELINE:

Pre-Build Phase
  ├── Metaphor derivation (20-30 min)
  ├── Gate 1: Metaphor Resonance Gate (metaphor passes? -> proceed)
  └── Build plan creation (includes void budget calculation)
        └── Void Budget Gate (pre-build spatial check -> must pass before builder starts)

Pass 1: Spatial Skeleton (30-40 min)
  ├── Builder reads plan, sends CLARIFICATION-REQUEST to planner
  ├── Builder creates spatial skeleton (zones, sections, proportions, content)
  ├── Builder sends ANOMALY-FLAG to team-lead on completion
  └── *** SPATIAL CONFIDENCE GATE FIRES HERE ***
        ├── Spatial-auditor runs SC-01 through SC-03, SC-05, SC-06, SC-07
        ├── Team-lead evaluates SC-04 (squint test via screenshot)
        ├── Team-lead verifies spatial-auditor results
        └── VERDICT: ALL 7 PASS -> proceed to Pass 2
                     ANY FAIL -> enter Fix Cycle

Pass 2: Compositional Elaboration (40-60 min)
  [only reached if gate PASSES]

Pass 3: Intentionality Layer (20-30 min)
  [only reached if Gate 4 passes]
```

### 3.2 Gate Execution Protocol

**Step 1: Spatial-auditor launch.** Team-lead spawns spatial-auditor agent with:
- Path to the built HTML file
- Instructions to run SC-01, SC-02, SC-03, SC-05, SC-06, SC-07
- Playwright access for DOM measurement
- Output file: `03-spatial-audit.md`

**Step 2: Team-lead screenshot capture.** While spatial-auditor runs programmatic checks, team-lead:
- Serves the HTML file via HTTP
- Takes full-page screenshot at 1440px viewport
- Views at 25% zoom for SC-04 squint test
- Records SC-04 judgment

**Step 3: Results synthesis.** Team-lead reads `03-spatial-audit.md` and combines with SC-04 result. Produces aggregate verdict.

**Step 4: Verdict decision.**

```
IF all 7 checks PASS:
    Gate PASSES.
    Team-lead messages planner: "Spatial gate passed. Proceed to Pass 2 elaboration plan."
    Team-lead spawns Pass 2 agents.

IF any check FAILS:
    Gate FAILS.
    Enter Fix Cycle (Section 3.3).
```

### 3.3 Fix Cycle Protocol

**Maximum fix cycles: 2.**

Each fix cycle follows this sequence:

```
Fix Cycle N (N = 1 or 2):

1. Team-lead identifies WHICH checks failed and WHY.

2. Team-lead sends fix instructions to skeleton-builder via SendMessage:
   - WHICH checks failed
   - WHAT the measured values were
   - WHAT the target values are
   - SPECIFIC CSS or HTML changes recommended

3. Skeleton-builder applies fixes to flagship-page.html (v1.N).

4. Skeleton-builder sends ANOMALY-FLAG to team-lead:
   "Fix cycle N complete. Changes: [list]. New estimated page height: [X]px."

5. Spatial-auditor re-runs all 7 checks on updated file.

6. Team-lead re-evaluates SC-04 on updated screenshot.

7. IF all 7 pass: Gate PASSES. Proceed to Pass 2.
   IF any still fail AND N < 2: Enter Fix Cycle N+1.
   IF any still fail AND N = 2: ABORT (Section 3.4).
```

**Estimated time per fix cycle:** 10-20 minutes (5-10 min for fixes, 5-10 min for re-audit).

### 3.4 Abort Protocol

If the Spatial Confidence Gate fails after 2 fix cycles, the flagship experiment ABORTS.

**Abort procedure:**

1. Team-lead records all gate check results across both fix cycles.
2. Team-lead classifies the failure:
   - **CSS-fixable failure that fix cycles couldn't resolve:** This indicates a deep structural issue disguised as a surface issue. The builder may not understand the spatial requirements.
   - **Metaphor-structural failure:** The derived metaphor structurally requires void that conflicts with the void budget. Example: a metaphor demanding vast empty transitions between zones.

3. **Downgrade decision:**
   - If the skeleton has spatial promise (passes 4-5 of 7 checks): rebuild the FAILING sections only, targeting ceiling tier without metaphor zone obligations. Re-run gate.
   - If the skeleton is fundamentally flawed (passes < 4 checks): abandon the current skeleton entirely. Rebuild at ceiling tier with a simpler spatial architecture (2-3 sections, no zone progression). Use the existing metaphor at vocabulary level only (naming, not spatial structure).

4. **What "rebuild at ceiling tier" means:** Reduce zone count to 2-3 (natural content breaks only), remove checkpoint transitions, remove zone indicators, keep the metaphor at vocabulary level (terminology, not spatial organization), keep mechanism deployment, keep content.

---

## 4. PROGRAMMATIC IMPLEMENTATION

### 4.1 Complete JavaScript Gate Runner

This script runs all 6 programmatic checks (SC-01 through SC-03, SC-05 through SC-07) in a browser. SC-04 (squint test) is excluded because it requires human judgment.

```javascript
/**
 * SPATIAL CONFIDENCE GATE -- Programmatic Checks
 *
 * Run this script in the browser console at 1440px viewport width.
 * Prerequisite: page must be fully loaded and rendered.
 *
 * Returns: Object with per-check PASS/FAIL and aggregate verdict.
 */
async function runSpatialConfidenceGate() {
  const results = {
    timestamp: new Date().toISOString(),
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    checks: {},
    aggregate: null
  };

  // ========================================
  // SC-01: Container Width (940-960px)
  // ========================================
  const containerSelectors = [
    '.page-container',
    '[class*="container"]',
    'main',
    'article',
    '.content'
  ];

  let container = null;
  for (const sel of containerSelectors) {
    container = document.querySelector(sel);
    if (container) break;
  }

  if (!container) {
    results.checks['SC-01'] = {
      name: 'Container Width',
      pass: false,
      measured: 'NO CONTAINER FOUND',
      threshold: '940-960px',
      action: 'Add .page-container wrapper with max-width: 960px; margin: 0 auto'
    };
  } else {
    const containerWidth = container.getBoundingClientRect().width;
    const sc01Pass = containerWidth >= 940 && containerWidth <= 960;
    results.checks['SC-01'] = {
      name: 'Container Width',
      pass: sc01Pass,
      measured: `${Math.round(containerWidth)}px`,
      threshold: '940-960px',
      selector: container.className || container.tagName,
      action: sc01Pass ? 'None' :
        containerWidth > 960 ? 'Reduce max-width to 960px' :
        'Reduce horizontal padding or increase max-width'
    };
  }

  // ========================================
  // SC-02: Maximum Contiguous Void (< 2160px)
  // ========================================
  const totalHeight = document.documentElement.scrollHeight;
  const maxAllowedVoid = window.innerHeight * 1.5;
  let currentVoidStart = null;
  let maxVoidFound = 0;
  let voidRegions = [];
  const scanX = container ?
    container.getBoundingClientRect().left + container.getBoundingClientRect().width / 2 :
    window.innerWidth / 2;

  // Content-bearing tag names
  const contentTags = new Set([
    'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th',
    'pre', 'code', 'blockquote', 'figcaption', 'dt', 'dd', 'img',
    'svg', 'canvas', 'video', 'audio', 'iframe'
  ]);

  for (let y = 0; y < totalHeight; y += 50) {
    window.scrollTo(0, y);
    // Small delay to allow rendering (in real Playwright, use appropriate waits)
    const elements = document.elementsFromPoint(scanX, Math.min(y, window.innerHeight - 1));

    const hasContent = elements.some(el => {
      const tag = el.tagName.toLowerCase();
      if (!contentTags.has(tag)) return false;
      if (['img', 'svg', 'canvas', 'video', 'audio', 'iframe'].includes(tag)) return true;
      return el.textContent.trim().length > 0;
    });

    if (!hasContent) {
      if (currentVoidStart === null) currentVoidStart = y;
    } else {
      if (currentVoidStart !== null) {
        const voidLength = y - currentVoidStart;
        if (voidLength > maxVoidFound) maxVoidFound = voidLength;
        if (voidLength > maxAllowedVoid) {
          voidRegions.push({
            startPx: currentVoidStart,
            endPx: y,
            lengthPx: voidLength,
            lengthViewports: (voidLength / window.innerHeight).toFixed(1)
          });
        }
        currentVoidStart = null;
      }
    }
  }
  // Handle void extending to end of page
  if (currentVoidStart !== null) {
    const voidLength = totalHeight - currentVoidStart;
    if (voidLength > maxVoidFound) maxVoidFound = voidLength;
    if (voidLength > maxAllowedVoid) {
      voidRegions.push({
        startPx: currentVoidStart,
        endPx: totalHeight,
        lengthPx: voidLength,
        lengthViewports: (voidLength / window.innerHeight).toFixed(1)
      });
    }
  }

  window.scrollTo(0, 0); // Reset scroll

  results.checks['SC-02'] = {
    name: 'Maximum Contiguous Void',
    pass: maxVoidFound <= maxAllowedVoid,
    measured: `${maxVoidFound}px (${(maxVoidFound / window.innerHeight).toFixed(1)} viewports)`,
    threshold: `${Math.round(maxAllowedVoid)}px (1.5 viewports)`,
    voidRegions: voidRegions,
    action: voidRegions.length > 0 ?
      `${voidRegions.length} void region(s) exceed threshold. Add content or reduce spacing in these areas.` :
      'None'
  };

  // ========================================
  // SC-03: Content Distribution (>= 70%)
  // ========================================
  let contentSamples = 0;
  let totalSamples = 0;
  const sampleInterval = 50;

  for (let y = 0; y < totalHeight; y += sampleInterval) {
    totalSamples++;
    window.scrollTo(0, Math.max(0, y - window.innerHeight / 2));
    const localY = Math.min(y - Math.max(0, y - window.innerHeight / 2), window.innerHeight - 1);
    const elements = document.elementsFromPoint(scanX, localY);

    const hasContent = elements.some(el => {
      const tag = el.tagName.toLowerCase();
      if (!contentTags.has(tag)) return false;
      if (['img', 'svg', 'canvas', 'video', 'audio', 'iframe'].includes(tag)) return true;
      return el.textContent.trim().length > 0;
    });

    if (hasContent) contentSamples++;
  }

  window.scrollTo(0, 0);
  const contentPercentage = totalSamples > 0 ? (contentSamples / totalSamples) * 100 : 0;

  results.checks['SC-03'] = {
    name: 'Content Distribution',
    pass: contentPercentage >= 70,
    measured: `${contentPercentage.toFixed(1)}%`,
    threshold: '>=70%',
    totalSamples: totalSamples,
    contentSamples: contentSamples,
    action: contentPercentage < 70 ?
      contentPercentage >= 55 ? 'Moderate void -- reduce zone padding and transitions by 30-50%' :
      contentPercentage >= 40 ? 'Significant void -- zone merging or content addition required' :
      'Catastrophic void -- structural redesign required' :
      'None'
  };

  // ========================================
  // SC-04: Squint Test (MANUAL -- placeholder)
  // ========================================
  results.checks['SC-04'] = {
    name: 'Squint Test',
    pass: null, // Must be filled by team-lead
    measured: 'REQUIRES MANUAL EVALUATION',
    threshold: '3+ distinct content regions at 25% zoom, no empty quadrant',
    action: 'Team-lead: take full-page screenshot, view at 25% zoom, count distinct content regions'
  };

  // ========================================
  // SC-05: First Viewport Header Ratio (<= 20%)
  // ========================================
  const header = document.querySelector('header');

  if (!header) {
    results.checks['SC-05'] = {
      name: 'First Viewport Header Ratio',
      pass: false,
      measured: 'NO HEADER FOUND',
      threshold: '<=20% of viewport',
      action: 'Add header element'
    };
  } else {
    window.scrollTo(0, 0);
    const headerHeight = header.getBoundingClientRect().height;
    const headerPercentage = (headerHeight / window.innerHeight) * 100;

    results.checks['SC-05'] = {
      name: 'First Viewport Header Ratio',
      pass: headerPercentage <= 20,
      measured: `${headerPercentage.toFixed(1)}% (${Math.round(headerHeight)}px of ${window.innerHeight}px)`,
      threshold: '<=20% of viewport',
      action: headerPercentage > 20 ?
        `Reduce header padding by ~${Math.round(headerHeight - window.innerHeight * 0.20)}px` :
        'None'
    };
  }

  // ========================================
  // SC-06: Minimum Content Sections (>= 5)
  // ========================================
  const sectionSelectors = [
    'section',
    '[class*="zone-"]',
    '[class*="section"]',
    'main > div',
    'article > div'
  ];

  let sections = new Set();
  for (const sel of sectionSelectors) {
    document.querySelectorAll(sel).forEach(el => sections.add(el));
  }

  let contentSections = 0;
  let sectionDetails = [];

  sections.forEach((section) => {
    const contentElements = section.querySelectorAll(
      'p, h2, h3, h4, h5, h6, pre, table, ul, ol, blockquote, figure'
    );

    let sectionContentHeight = 0;
    contentElements.forEach(el => {
      sectionContentHeight += el.getBoundingClientRect().height;
    });

    const isContent = sectionContentHeight >= 200;
    sectionDetails.push({
      className: section.className || section.tagName,
      contentHeight: Math.round(sectionContentHeight),
      isContentSection: isContent
    });

    if (isContent) contentSections++;
  });

  results.checks['SC-06'] = {
    name: 'Minimum Content Sections',
    pass: contentSections >= 5,
    measured: `${contentSections} content sections found`,
    threshold: '>=5',
    sectionDetails: sectionDetails,
    action: contentSections < 5 ?
      `Only ${contentSections} content sections. Split large sections or ensure all planned sections were built.` :
      'None'
  };

  // ========================================
  // SC-07: Footer Reachability
  // ========================================
  const footer = document.querySelector('footer');

  if (!footer) {
    results.checks['SC-07'] = {
      name: 'Footer Reachability',
      pass: false,
      measured: 'NO FOOTER FOUND',
      threshold: 'Footer must exist; gap <= 1 viewport',
      action: 'BLOCKING: Add footer element with content'
    };
  } else {
    window.scrollTo(0, totalHeight);
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;

    // Find last content element before footer
    const allContentElements = document.querySelectorAll(
      'p, h2, h3, h4, h5, h6, pre, table, ul, ol, blockquote, figure'
    );
    let lastContentBottom = 0;
    allContentElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const bottom = rect.bottom + window.scrollY;
      if (bottom > lastContentBottom && bottom < footerTop) {
        lastContentBottom = bottom;
      }
    });

    const gapBeforeFooter = footerTop - lastContentBottom;
    const maxGap = window.innerHeight;

    window.scrollTo(0, 0);

    results.checks['SC-07'] = {
      name: 'Footer Reachability',
      pass: gapBeforeFooter <= maxGap,
      measured: `${Math.round(gapBeforeFooter)}px gap before footer`,
      threshold: `<=${maxGap}px (1 viewport)`,
      action: gapBeforeFooter > maxGap ?
        `Reduce bottom margin/padding by ${Math.round(gapBeforeFooter - maxGap)}px or remove empty elements before footer` :
        'None'
    };
  }

  // ========================================
  // AGGREGATE VERDICT
  // ========================================
  const programmaticChecks = ['SC-01', 'SC-02', 'SC-03', 'SC-05', 'SC-06', 'SC-07'];
  const passCount = programmaticChecks.filter(
    id => results.checks[id] && results.checks[id].pass === true
  ).length;
  const failCount = programmaticChecks.filter(
    id => results.checks[id] && results.checks[id].pass === false
  ).length;

  results.aggregate = {
    programmaticPassed: passCount,
    programmaticFailed: failCount,
    programmaticTotal: programmaticChecks.length,
    squintTestPending: true,
    verdict: failCount === 0 ?
      'PROGRAMMATIC PASS -- awaiting SC-04 squint test from team-lead' :
      `FAIL -- ${failCount} check(s) failed`,
    failedChecks: programmaticChecks.filter(
      id => results.checks[id] && results.checks[id].pass === false
    )
  };

  return results;
}

// Execute and format output
runSpatialConfidenceGate().then(results => {
  console.log('=== SPATIAL CONFIDENCE GATE RESULTS ===');
  console.log(`Viewport: ${results.viewportWidth}x${results.viewportHeight}`);
  console.log('');

  for (const [id, check] of Object.entries(results.checks)) {
    const status = check.pass === null ? 'MANUAL' : check.pass ? 'PASS' : 'FAIL';
    console.log(`${id} [${status}] ${check.name}: ${check.measured} (threshold: ${check.threshold})`);
    if (check.pass === false) {
      console.log(`  ACTION: ${check.action}`);
    }
  }

  console.log('');
  console.log(`AGGREGATE: ${results.aggregate.verdict}`);
  if (results.aggregate.failedChecks.length > 0) {
    console.log(`FAILED CHECKS: ${results.aggregate.failedChecks.join(', ')}`);
  }

  return results;
});
```

### 4.2 Playwright Integration

For agents running the gate via Playwright (the expected execution path):

```javascript
// Playwright-based spatial confidence gate runner
// This runs in the context of a Playwright page object

async function runSpatialGatePlaywright(page) {
  // Set viewport
  await page.setViewportSize({ width: 1440, height: 900 });

  // Wait for full page load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // Allow fonts and layout to settle

  // Inject and run the gate script
  const results = await page.evaluate(async () => {
    // [Insert the full runSpatialConfidenceGate function body here]
    // Return results object
    return await runSpatialConfidenceGate();
  });

  return results;
}
```

### 4.3 Output Format

The gate produces a structured report for inclusion in `03-spatial-audit.md`:

```markdown
# Spatial Confidence Gate Report

**Page:** flagship-page.html (v1)
**Viewport:** 1440x900
**Date:** [timestamp]

## Check Results

| Check | Result | Measured | Threshold | Action |
|-------|--------|----------|-----------|--------|
| SC-01 | PASS/FAIL | 960px | 940-960px | [action if fail] |
| SC-02 | PASS/FAIL | 450px (0.5 viewports) | <=2160px | [action if fail] |
| SC-03 | PASS/FAIL | 78.3% | >=70% | [action if fail] |
| SC-04 | PASS/FAIL | [team-lead judgment] | 3+ regions, no empty quadrant | [action if fail] |
| SC-05 | PASS/FAIL | 15.2% (137px) | <=20% | [action if fail] |
| SC-06 | PASS/FAIL | 7 sections | >=5 | [action if fail] |
| SC-07 | PASS/FAIL | 120px gap | <=900px | [action if fail] |

## Aggregate Verdict

**PASS / FAIL**

[If FAIL: list failed checks and recommended fix cycle actions]

## Section Details (SC-06)

[Table of all sections with content heights]

## Void Regions (SC-02)

[If any: list of contiguous void regions with start/end positions]
```

### 4.4 Integration With Existing Programmatic Audit

The Spatial Confidence Gate is a SEPARATE gate from the programmatic audit (which checks soul compliance, token compliance, CPL, heading spacing, etc.). They serve different purposes:

| Gate | When | What | Blocks |
|------|------|------|--------|
| Spatial Confidence Gate | After Pass 1 | Spatial proportions, container, void, content distribution | Pass 2 |
| Programmatic Audit | After Pass 2 and Pass 3 | Soul compliance, token compliance, CPL, heading spacing, mechanisms | Ship-Ready Gate |

The Spatial Confidence Gate runs FIRST because spatial failures are the most expensive to fix. A page that passes soul compliance but fails spatial proportions (the ceiling experiment) requires near-total rebuild. A page that passes spatial proportions but has a soul violation (e.g., accidental border-radius) requires a 1-line CSS fix.

**The gates are sequential, not redundant.** The programmatic audit does NOT re-check SC-01 through SC-07. The Spatial Confidence Gate does NOT check soul compliance or token usage. Each gate owns its domain.

---

## 5. DECISION MATRIX: FIX VS ABORT

This matrix governs the team-lead's response to gate failures across fix cycles:

```
AFTER FIX CYCLE 1 (1 of 2 cycles used):

SC-01 fails: FIX (CSS one-liner: max-width: 960px)
SC-02 fails: FIX IF maxVoid < 3000px. ESCALATE IF maxVoid >= 3000px.
SC-03 fails: FIX IF contentPercentage >= 55%. ESCALATE IF < 55%.
SC-04 fails: TEAM-LEAD JUDGMENT (fixable vs structural)
SC-05 fails: FIX (reduce header padding)
SC-06 fails: FIX (add missing sections from plan)
SC-07 fails: FIX (reduce footer gap spacing)

AFTER FIX CYCLE 2 (2 of 2 cycles used, no more cycles):

SC-01 fails: This should never happen after 2 cycles. If it does: ABORT (builder is not following instructions).
SC-02 fails: ABORT. The metaphor structurally requires void. Re-derive metaphor or downgrade to ceiling.
SC-03 fails: ABORT. Content distribution is a structural property. Cannot be fixed with CSS tweaks.
SC-04 fails: ABORT. Two fix cycles could not produce balanced mass. Spatial architecture is wrong.
SC-05 fails: FIX IN PLACE (header padding is trivially fixable -- allow one more targeted fix).
SC-06 fails: ABORT. Missing content sections after 2 cycles = builder cannot execute the plan.
SC-07 fails: FIX IN PLACE (footer gap is trivially fixable -- allow one more targeted fix).
```

**"ESCALATE" means:** Team-lead must diagnose whether the failure is CSS-fixable or metaphor-structural BEFORE authorizing fix cycle 2. If metaphor-structural, skip cycle 2 and ABORT immediately (saves 10-20 minutes).

**"FIX IN PLACE" means:** The check is trivially fixable (1-3 line CSS change). Allow a targeted fix even after 2 cycles. This does NOT extend the fix cycle count -- it is a one-shot exception for checks that are mechanically simple.

---

## 6. RELATIONSHIP TO OTHER GATES

The Spatial Confidence Gate is Gate 2 in the flagship architecture's 5-gate system:

```
Gate 1: Metaphor Resonance Gate (after metaphor derivation)
  └── Does the metaphor have structural isomorphism?
  └── Does it map to 3+ mechanism categories?
  └── BLOCKING: re-derive if fails

>>> Gate 2: SPATIAL CONFIDENCE GATE (after Pass 1) <<<
  └── 7 binary checks on spatial proportions
  └── BLOCKING: max 2 fix cycles, then abort
  └── THIS DOCUMENT

Gate 3: Landmark Completeness Gate (after Pass 1, checked by team-lead)
  └── Header, footer, all planned sections present
  └── Container width verified (redundant with SC-01 but team-lead confirms)
  └── BLOCKING: team-lead verifies manually

Gate 4: Composition Verification Gate (after Pass 2)
  └── Reinforcing pairs implemented
  └── 4-scale coherence present
  └── Mechanism count 12-16
  └── 3+ transition types
  └── PA-05 quick-check
  └── BLOCKING: if PA-05c would fail, reduce mechanisms

Gate 5: Ship-Ready Gate (after Pass 3)
  └── Full programmatic audit
  └── Dual perceptual audit
  └── Comparative audit
  └── Blind novelty assessment
  └── All success criteria evaluated
```

Gates 2 and 3 run IN PARALLEL after Pass 1 completion. Gate 3 checks structural completeness (are all pieces present?); Gate 2 checks spatial quality (are the pieces well-proportioned?). Both must pass before Pass 2.

---

## 7. EVIDENCE TRACEABILITY

Every threshold and decision in this gate traces to specific evidence from the ceiling experiment:

| Threshold | Evidence Source | Why This Value |
|-----------|---------------|----------------|
| Container 940-960px | Ceiling CSS (line 114: `max-width: 960px`), false positive measurement at 2160px | 960px is the design system standard. 940-960 range allows for sub-pixel rendering variance. |
| Max void 1.5 viewports | Ceiling audit: "70-80% of scroll is blank cream" was catastrophic. 1.5 viewports = visually distinguishable void boundary. | 1.5 viewports is the threshold where void becomes perceptually dominant -- scrolling through 1.5 blank screens makes the reader think the page is broken. |
| Content distribution 70% | Ceiling at ~30% content was catastrophic. Middle at ~75% was successful. | 70% is the floor where content feels present throughout the page. Below 60%, void dominates perception. |
| Squint test 3+ regions | Ceiling at 25% zoom showed header blob then vast empty cream with occasional specks. | 3 regions at squint-zoom ensures content is distributed across the page's vertical extent. |
| Header <= 20% | Ceiling header at ~25%+ of viewport was "too heavy" per both PAs. Fix reduced to ~15%. | 20% is generous -- 15% is better. 20% provides headroom for metaphor-rich headers. |
| 5+ content sections | Ceiling had 7 zones + checkpoints but many were performative. 5 REAL sections is the content-justified minimum. | Content-form analysis identified 5 natural sections for the ceiling's content. Below 5, the page lacks sufficient structural variety. |
| Footer gap <= 1 viewport | Middle experiment had NO footer (caught by audit). Ceiling had footer but excessive bottom void. | 1 viewport of gap is generous -- 0.5 would be tighter. The goal is "footer is reachable without scrolling through emptiness." |
| Max 2 fix cycles | Architecture doc Section B: "Maximum 2 fix cycles. If still failing after 2 cycles, ABORT." | 2 cycles = 20-40 minutes of fix time. After 2 cycles without resolution, the problem is structural, not cosmetic. More cycles yield diminishing returns. |
| 60:40 content-to-void | Ceiling at 30:70 = catastrophic. Target should ensure content dominates. 60:40 is achievable for ceiling-tier pages. | This is the pre-build estimation threshold. The 70% SC-03 threshold is for post-build measurement. Pre-build estimates have ~10% error margin, so 60% pre-build ~= 55-65% post-build. |

---

**END SPATIAL CONFIDENCE GATE SPECIFICATION**

**Checks formalized:** 7 (6 programmatic + 1 manual)
**JavaScript implementation:** Complete (runSpatialConfidenceGate function)
**Gate timing:** After Pass 1, before Pass 2
**Fix cycles:** Maximum 2, then abort
**Decision matrix:** Complete (per-check, per-cycle)
**Evidence traceability:** All thresholds traced to ceiling experiment data
