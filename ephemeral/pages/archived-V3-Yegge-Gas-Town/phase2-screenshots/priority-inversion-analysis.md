# Priority Inversion Analysis: Pipeline v3 Gas Town Build

**Date:** 2026-02-24
**Analyst:** Opus (priority-analyst agent)
**Scope:** Every pipeline stage, from builder self-evaluation through orchestrator acceptance
**The case:** A Complexity Ladder diagram with illegible labels -- cream/white text on dark bars, low contrast, small size. THE most obviously broken thing on the page. A human notices in 2 seconds. The pipeline ranked it Fix #5.

---

## Table of Contents

1. [Per-Stage Analysis](#1-per-stage-analysis)
   - [Stage 1: Builder Self-Evaluation](#stage-1-builder-self-evaluation-7-questions)
   - [Stage 2: Gate Runner](#stage-2-gate-runner-31-gates)
   - [Stage 3: PA Routing](#stage-3-pa-routing-69-questions-9-auditors)
   - [Stage 4: Weaver Prioritization](#stage-4-weaver-prioritization)
   - [Stage 5: Orchestrator Acceptance](#stage-5-orchestrator-acceptance)
2. [Priority Inversion Map](#2-priority-inversion-map)
3. [Causal Chain](#3-causal-chain)
4. [Proposed Fixes](#4-proposed-fixes)
5. [The Deep Question](#5-the-deep-question)

---

## 1. Per-Stage Analysis

### Stage 1: Builder Self-Evaluation (7 Questions)

#### 1a. What does this stage check for?

The builder answers 7 mandatory questions as an HTML comment block (MANIFEST lines 1065-1073):

| # | Question | What it measures |
|---|----------|-----------------|
| 1 | Zone transitions = different room? | Zone boundary distinctness |
| 2 | Distinct transition types count (need 3+) | Multi-coherence at boundaries |
| 3 | Skeleton has shape without text? | Visual rhythm / squint test |
| 4 | Scroll surprise in second half? | Temporal pacing / delight |
| 5 | Section heights -- 3+ different heights? | Vertical proportion variation |
| 6 | Density arc -- increase then resolve? | Compositional arc shape |
| 7 | Ending -- final viewport feel earned? | Closure quality |

The builder's actual answers for Gas Town (from HTML lines 3-11):
- Q1: "yes" for all 5 boundaries (with details about type scale, spacing, layout, borders)
- Q2: "5" transition types (background, border weight, typography, layout, spacing)
- Q3: "yes -- dark header band, light opening, darkening, dramatic lightening..."
- Q4: "yes -- dark inversion block in Z4, 'chimpanzees' warning callout in Z5"
- Q5: "yes -- Z1 ~350px, Z2 ~700px, Z3 ~1400px, Z4 ~650px, Z5 ~1200px, Z6 ~800px"
- Q6: "Builds, peaks, breathes, peaks, resolves."
- Q7: "yes -- cost estimation table and source links provide concrete resolution"

#### 1b. What does it MISS?

**Categories of human-perceptible failure with ZERO coverage:**

| Missing category | What a human would ask | Why it matters |
|------------------|----------------------|----------------|
| **TEXT LEGIBILITY** | "Can you read everything on the page?" | The most fundamental usability requirement |
| **Diagram/chart readability** | "Are all labels, annotations, and data visualizations legible?" | Complex visual elements are highest-risk for contrast failures |
| **Color contrast sufficiency** | "Is any text hard to read against its background?" | WCAG AA requires 4.5:1 for normal text, 3:1 for large text |
| **Information accessibility** | "Can a reader extract the information this page claims to present?" | The FUNCTIONAL PURPOSE of the page |
| **Component self-check** | "Do all interactive/visual components work as intended?" | Components are independently testable |

The builder created the illegible Complexity Ladder, then passed its own self-evaluation because no question asked "can someone read the chart you just built."

#### 1c. What does it flag that NO HUMAN WOULD NOTICE?

Nothing directly sub-perceptual -- the 7 questions are genuinely about perceivable properties (room transitions, shape, heights). However, the questions are exclusively about **compositional architecture** (the forest) and have zero questions about **element-level execution** (the trees). A perfectly structured page with an unreadable diagram passes 7/7.

#### 1d. What is the implicit PRIORITY MODEL?

**"Compositional intelligence is what matters. If the arc is right, the transitions are varied, and the skeleton has shape, the page is good."**

This is a priority model about MACRO design -- spatial organization, temporal flow, compositional structure. It treats the page as an abstract composition and never asks whether any specific piece of content is broken at the human-reader level.

The 7 questions could be restated as one meta-question: "Does this page have the structural properties of a COMPOSED artifact?" They do not ask: "Does this page WORK for a reader?"

#### 1e. How would the priority model need to change?

Add at minimum 2 questions:

1. **"Can you read every piece of text on this page at its intended size and contrast?"** -- Direct legibility check. Binary pass/fail for each text element.
2. **"Does every diagram, chart, table, and visual component convey its information clearly?"** -- Functional component check. The builder should evaluate each non-prose element.

These should be Q1 and Q2, not Q8 and Q9. The priority inversion starts HERE: compositional architecture is asked FIRST; basic functionality is not asked AT ALL.

---

### Stage 2: Gate Runner (31 Gates)

#### 2a. What does this stage check for?

31 gates across 6 categories (from `gate-manifest.json` and `gate-runner-spec.md`):

**REQUIRED (18 gates -- ANY fail blocks verdict):**

| Gate | What it checks | Category |
|------|---------------|----------|
| GR-01 | border-radius = 0 on all elements | Identity (CSS rule compliance) |
| GR-02 | box-shadow = none on all elements | Identity (CSS rule compliance) |
| GR-03 | Container width 940-960px | Identity (CSS rule compliance) |
| GR-04 | No CSS gradients | Identity (CSS rule compliance) |
| GR-05 | Warm palette (R >= G >= B on all colors) | Identity (CSS rule compliance) |
| GR-06 | Only 3 allowed font families | Identity (CSS rule compliance) |
| GR-07 | No pure black (#000) or white (#FFF) | Identity (CSS rule compliance) |
| GR-08 | No standalone decorative elements | Identity (CSS rule compliance) |
| GR-09 | Border weights are integer px (1/2/3/4) | Identity (CSS rule compliance) |
| GR-10 | Skip link, heading hierarchy, ::selection, etc. | Identity (DNA compliance) |
| GR-11 | Adjacent bg delta >= 15 RGB | Perception (threshold) |
| GR-12 | Letter-spacing >= 0.025em | Perception (threshold) |
| GR-13 | Stacked CSS gap <= 120px | Perception (spatial) |
| GR-14 | Visual gap <= 150px | Perception (spatial) |
| GR-15 | Single margin <= 96px | Perception (spatial) |
| GR-43 | Self-evaluation comment exists | Output (metadata) |
| GR-44 | Trailing void <= 300px | Perception (spatial) |
| GR-48 | All required gates have results | Meta (process) |

**RECOMMENDED (8 gates -- 3+ fail = REBUILD):**

| Gate | What it checks | Category |
|------|---------------|----------|
| GR-17 | Content padding >= 12px, cell >= 4px | Anti-pattern |
| GR-18 | No sub-perceptual borders/opacity | Anti-pattern |
| GR-19 | <50% of bg deltas at floor (15-17 RGB) | Anti-pattern |
| GR-20 | <3 consecutive identical sections | Anti-pattern |
| GR-45 | >= 2 distinct H2 font-size bands | Anti-pattern |
| GR-49 | Result file integrity | Meta |
| GR-51 | Bg delta distribution: 50% >= 25 RGB | Anti-pattern |
| GR-52 | >= 3 distinct section height bands | Measurement |

**ADVISORY (5 gates -- informational only):**

| Gate | What it checks | Category |
|------|---------------|----------|
| GR-21 | <= 4 distinct bg per viewport | Anti-pattern |
| GR-22 | Red used for borders, not backgrounds | Anti-pattern |
| GR-46 | Print stylesheet exists | Accessibility |
| GR-50 | Conviction statement exists | Output |
| GR-53 | Densest section not first/last | Measurement |

#### 2b. What does it MISS?

**Categories of human-perceptible failure with ZERO gate coverage:**

| Missing category | What a gate could check | Difficulty |
|------------------|------------------------|-----------|
| **Text contrast ratio** | `getComputedStyle(el).color` vs `getComputedStyle(el).backgroundColor` -> compute WCAG contrast ratio | TRIVIAL to implement |
| **Text minimum size** | `getComputedStyle(el).fontSize` >= 12px for all visible text | TRIVIAL |
| **Diagram/chart legibility** | Find elements inside SVG/pre/figure, check text contrast | MODERATE |
| **Image alt text** | `querySelectorAll('img:not([alt])')` | TRIVIAL |
| **Link distinguishability** | Links have visible underline or color distinct from body text | EASY |
| **Content completeness** | All sections referenced in TOC exist on page | MODERATE |
| **Heading-content ratio** | h2/h3 elements have non-empty text content following them | EASY |

The gate runner has ZERO legibility checks. Zero contrast checks. Zero text-size checks. Zero content-accessibility checks.

#### 2c. What does it flag that NO HUMAN WOULD NOTICE?

| Gate | What it flagged | Human perceptibility |
|------|----------------|---------------------|
| **GR-05 (FAIL, REQUIRED)** | 4 callout backgrounds use `rgba(124, 58, 237, 0.04)` -- purple at 4% opacity | **INVISIBLE.** 4% opacity over cream = a color shift of ~3-5 RGB points. The perception threshold for background delta is 15 RGB. The pipeline's own threshold proves this is imperceptible. Yet this is a REQUIRED gate that triggers REBUILD. |
| **GR-06 (FAIL, REQUIRED)** | Font stacks include `Georgia` as fallback | **WILL NEVER RENDER.** `Instrument Serif` is loaded via Google Fonts. Georgia is a fallback that only activates if Google Fonts fails AND the user lacks Instrument Serif locally. On the web, this fallback font will essentially never be seen. Yet this is a REQUIRED gate that triggers REBUILD. |
| **GR-07 (FAIL, REQUIRED)** | `html` element has browser-default `color: rgb(0,0,0)` | **NO VISIBLE ELEMENT RENDERS IN THIS COLOR.** The html element's color is inherited but overridden by every styled element. The body, all headings, all paragraphs, all spans specify their own color. The html default is a browser artifact with zero visual impact. Yet this is a REQUIRED gate that triggers REBUILD. |
| **GR-09 (FAIL, REQUIRED)** | Border widths of 0.667px and 2.667px | **AT MOST 0.33px ERROR.** A 0.667px border vs 1px border is a sub-pixel difference that is literally below the rendering resolution of most displays. 2.667px vs 3px is a 0.33px difference -- imperceptible. Yet this is a REQUIRED gate. |
| **GR-17 (FAIL, RECOMMENDED)** | List items have 8px padding (threshold: 12px) | **DEBATABLE.** 8px vs 12px on list items is a subtle density difference. Not invisible, but a reasonable design choice for compact lists. |

**The inversion:** 4 of 8 failures are imperceptible. The most visible defect (illegible chart) has no gate.

#### 2d. What is the implicit PRIORITY MODEL?

**"CSS property compliance with the design system's identity rules is what matters. If the font stack is pure, the palette is warm, the borders are integer pixels, and the colors are not pure black or white, the page is good."**

The gate runner is a CSS COMPLIANCE CHECKER. It verifies that the builder used the correct design tokens. It does not verify that the resulting page is usable by a human. Its priority hierarchy is:

1. **HIGHEST: CSS identity purity** (font families, color warmth, border-radius, no shadows)
2. **HIGH: Spatial thresholds** (gap sizes, margin limits)
3. **MEDIUM: Anti-patterns** (density, echo, gaming)
4. **LOW: Measurement** (height variation, arc direction)
5. **ZERO: Human usability** (can you read the text, can you understand the charts, does the page work)

This is the priority model of a LINTER, not a quality assurance system.

#### 2e. How would the priority model need to change?

The gate runner needs a new category above Identity:

**USABILITY GATES (REQUIRED -- ANY fail = REFINE)**

These check the fundamental contract with the reader: the page must be readable.

---

### Stage 3: PA Routing (69 Questions, 9 Auditors)

#### 3a. What does this stage check for?

69 questions distributed across 9 thematic auditors. Relevant to legibility:

| Question | Text | Auditor | Relevance to illegible chart |
|----------|------|---------|------------------------------|
| **PA-02** | "Is any text uncomfortable to read? Point to the worst spot." | **B ONLY** | DIRECT -- this is THE question that catches the defect |
| **PA-08** | "Is there any text you have to lean in or squint to read?" | **B ONLY** | DIRECT -- explicitly about squint-worthy text |
| PA-73 | "Any text that would be invisible, unreachable, or confusing to keyboard/screen reader users?" | H ONLY | INDIRECT -- accessibility angle |
| PA-77 | "Looking only at text sizes and weights, can you identify 3+ levels of importance?" | B ONLY | INDIRECT -- hierarchy, not legibility per se |

**The coverage problem:** PA-02 and PA-08 -- the ONLY two questions that directly ask "can you read the text" -- are BOTH routed exclusively to Auditor B (Readability + Typography). Zero other auditors have a legibility question.

#### 3b. What does it MISS?

The routing creates 9 analytical tunnels. Each auditor has a thematic focus:

| Auditor | Focus | What they LOOKED at regarding the chart | What they REPORTED |
|---------|-------|----------------------------------------|-------------------|
| A (Impression) | Eye tracking, first bother, design quality | Chart was visible in screenshots | Focused on compositional quality, density annotations, blockquote treatment |
| **B (Readability)** | Text comfort, stacking, squinting, tracking | **Directly examined chart** | **"The chart labels are hard to read... small text on dark background"** |
| C (Spatial) | Dead space, margins, proportion, density | Chart was visible in screenshots | Focused on horizontal proportion, void analysis, negative space |
| D (Flow) | Eye flow, transitions, pacing, scroll rhythm | Chart was visible in screenshots | Focused on transition intensity, density arc, ending quality |
| E (Grid) | Column breathing, information density, reading order | Chart was visible in screenshots | Focused on grid structure, column width, component reading order |
| F (Consistency) | Rhythm, repetition, spacing consistency | Chart was visible in screenshots | Focused on visual rhythm, pattern repetition, spacing uniformity |
| G (Metaphor) | Gray family, alien elements, personality match | Chart was visible in screenshots | Focused on color system, metaphor expression, personality |
| H (Responsiveness) | Cross-viewport, responsive behavior | Chart was visible in screenshots | Focused on viewport adaptation, element reorganization |
| I (Cross-Page) | System coherence, adversarial fragility | Chart was visible in screenshots | Focused on design language, identity persistence, fragility points |

**5 of 9 auditors looked directly at the illegible chart and did not flag it.** Their questions directed their attention elsewhere. They were performing inattentional blindness -- focused on their assigned analytical dimension, they did not notice the gorilla walking through the frame.

#### 3c. What does it flag that NO HUMAN WOULD NOTICE?

| Question | What auditors flagged | Human perceptibility |
|----------|----------------------|---------------------|
| PA-55 | "Can you describe how 3 adjacent sections DIFFER visually without inspecting code?" | Asks about PERCEPTIBLE difference, but is really testing whether sub-perceptual CSS variation is happening. This is a meta-question about the pipeline's own failure mode. |
| PA-56 | "Can you FEEL the tracking difference?" | Same -- testing whether letter-spacing changes are above perception threshold. A pipeline-introspection question disguised as perceptual audit. |
| PA-69 | "Count visual properties changing at transitions" | Asks auditors to COUNT CSS channel changes. This is compositional analysis, not user experience. No reader counts how many CSS properties changed at a section boundary. |

These questions are not about human reading experience. They are about whether the PIPELINE'S COMPOSITIONAL MODEL is reflected in perceptible output. They are the pipeline auditing itself.

#### 3d. What is the implicit PRIORITY MODEL?

**"The page should be a well-composed artifact with multi-coherence, metaphor, varied transitions, and compositional intelligence. If the mechanisms are deployed correctly and the design language is unified, the page is good."**

The 69 questions break down:

| Category | Questions | % of total |
|----------|----------|-----------|
| Compositional intelligence (transitions, coherence, channels, metaphor) | ~25 | 36% |
| Spatial quality (proportion, dead space, grid, density) | ~15 | 22% |
| Emotional / aesthetic (personality, delight, surprise, authority) | ~12 | 17% |
| **Legibility / readability** | **3** | **4%** |
| Responsiveness | ~5 | 7% |
| Cross-page / adversarial | ~6 | 9% |
| Tier 5 (flagship detection) | ~3 | 4% |

**4% of PA bandwidth is allocated to the question "can a reader read this page."** 36% is allocated to "is the compositional intelligence high enough."

#### 3e. How would the priority model need to change?

Legibility is not a 4% concern. It is a binary prerequisite. If the reader cannot read the page, nothing else matters. The PA system treats legibility as one specialty among many, when it should be a shared responsibility of ALL auditors.

---

### Stage 4: Weaver Prioritization

#### 4a. What does this stage check for?

The Weaver produces:
1. PA-05 score (4 sub-criteria: DESIGNED, COHERENT, PROPORTIONATE, POLISHED)
2. Tier 5 score (9 compositional depth questions)
3. Top-5 fixes (classified as MECHANICAL / STRUCTURAL / COMPOSITIONAL)
4. Fix-type classification summary
5. Emotional arc synthesis (4 registers: SURPRISE, DELIGHT, AUTHORITY, EARNED CLOSURE)
6. Ship decision

#### 4b. Weaver's actual fix prioritization

From `p3c-weaver-diagnostic.md` Section 5:

| Priority | Fix | Gate/Source | What it changes |
|----------|-----|-----------|-----------------|
| **#1** | Font stack cleanup | GR-06 | Remove Times, SF Mono, Georgia from font stacks |
| **#2** | Callout background tints | GR-05 | Replace non-warm rgba tints |
| **#3** | Border width rounding | GR-09 | Change 0.667px to 1px, 2.667px to 3px |
| **#4** | HTML default color | GR-07 | Add `html { color: #2a2a2a; }` |
| **#5** | **Chart label legibility** | PA (B, H, I) | Increase text size/contrast in complexity ladder |

**The illegible chart -- THE most obviously broken thing on the page -- is Fix #5.** The four fixes ranked above it are:

- Fix #1: Remove fallback fonts that will never render
- Fix #2: Change callout tints that are invisible at 4% opacity
- Fix #3: Round sub-pixel border differences
- Fix #4: Override a browser default that no visible element uses

#### 4c. Why the Weaver prioritized this way

The Weaver's priority model follows the gate runner's verdict logic (pa-weaver.md Section 5.1):

```
1. Identity gate failures → REBUILD (highest priority)
2. Anti-pattern failures → REBUILD
3. Perception gate failures → REFINE
4. PA-05 score → SHIP/REFINE/REBUILD
```

Fixes 1-4 are all IDENTITY GATE failures (GR-05, GR-06, GR-07, GR-09). Identity gates have the highest priority in the verdict logic. Fix #5 is a PA-sourced finding with no gate backing. The Weaver correctly follows the priority hierarchy: identity > perception > PA findings.

**The priority hierarchy itself is inverted.** The Weaver is doing its job perfectly. It is following a priority model that ranks CSS purity above human readability.

#### 4d. What is the implicit PRIORITY MODEL?

**"Gate failures are more important than PA findings. Identity gates are more important than perception gates. Fix gate failures first, then address what auditors noticed."**

This is a COMPLIANCE-FIRST model. The pipeline's own rules take priority over the user's experience. An invisible CSS violation outranks a visible usability failure.

#### 4e. How would the priority model need to change?

The Weaver should have a pre-filter: **"Is there ANY finding that prevents a reader from reading the page?"** If yes, that finding is Fix #1 regardless of gate status.

---

### Stage 5: Orchestrator Acceptance

#### 5a. What does this stage do?

The orchestrator reads the Weaver's verdict and decides the pipeline outcome:
- Verdict: **SHIP WITH FIXES** (protocol override from strict REFINE)
- Override justification: "All failures are mechanical... forcing REFINE would be disproportionate"

#### 5b. What it missed

The HANDOFF.md (Section 4, Phase 3C) lists the 5 required fixes:

| # | Fix | Priority framing |
|---|-----|-----------------|
| 1 | Font stack cleanup | MECHANICAL |
| 2 | Callout background tints | MECHANICAL |
| 3 | Border width rounding | MECHANICAL |
| 4 | HTML default color | MECHANICAL |
| 5 | Chart label legibility | MECHANICAL |

The orchestrator documented all 5 fixes but accepted the Weaver's priority ordering without reframing. The HANDOFF.md describes the page as having "5 mechanical fixes" and estimates "10-15 CSS value changes." The chart legibility issue is treated as one of five equal items, when it is the ONLY item a human would notice.

**The orchestrator did flag anomaly A5:** "PA Auditor Legibility Coverage -- Single Point of Failure." This is a structural observation about the pipeline. But even in flagging it, the orchestrator did not elevate Fix #5 above Fixes 1-4.

#### 5c. What is the implicit PRIORITY MODEL?

**"If the Weaver says SHIP WITH FIXES and all fixes are mechanical, the pipeline succeeded. The priority order of fixes is the Weaver's responsibility."**

The orchestrator is a process manager, not a quality judge. It checks that the process ran correctly. It does not independently ask: "Would a human be satisfied with this page?"

---

## 2. Priority Inversion Map

### What the pipeline treats as high/medium/low priority

| Priority | Pipeline treats as... | Specific items |
|----------|----------------------|---------------|
| **HIGHEST (REBUILD trigger)** | CSS identity purity | font-family includes Georgia (never renders), rgba purple at 4% opacity (invisible), html default #000 (overridden), 0.667px border (sub-pixel) |
| **HIGH (REFINE trigger)** | Spatial thresholds | Gap > 150px (false positive from nested HTML), stacked gap > 120px |
| **MEDIUM (reported)** | Anti-patterns | 8px list padding, 6 backgrounds per viewport, 4 red background uses |
| **LOW (Fix #5)** | Chart legibility | Cream text on dark bars, low contrast, small size, information inaccessible |
| **ZERO (not checked)** | General text readability | No gate, no shared PA question, no self-eval question |

### What a human reader treats as high/medium/low priority

| Priority | Human treats as... | Specific items |
|----------|-------------------|---------------|
| **HIGHEST (would not use page)** | "I can't read the chart" | Complexity Ladder labels illegible, information inaccessible |
| **HIGH (annoying)** | Density label faintness | Settlement Map annotations very light |
| **MEDIUM (nitpick)** | Hierarchy diagram smallness | Diagram hard to parse at rendered size |
| **LOW (would never notice)** | 4% opacity callout tints | Invisible color shift |
| **ZERO (literally impossible to notice)** | Font fallback stack, html default color, sub-pixel borders | Never rendered, overridden, below display resolution |

### The Inversions (Explicit)

| Item | Pipeline priority | Human priority | Inversion magnitude |
|------|------------------|----------------|-------------------|
| Georgia in font fallback stack | **HIGHEST** (REBUILD trigger) | **ZERO** (never renders) | **MAXIMUM** |
| rgba(124,58,237,0.04) callout tint | **HIGHEST** (REBUILD trigger) | **ZERO** (invisible at 4% opacity) | **MAXIMUM** |
| html { color: rgb(0,0,0) } | **HIGHEST** (REBUILD trigger) | **ZERO** (overridden everywhere) | **MAXIMUM** |
| 0.667px border width | **HIGHEST** (REBUILD trigger) | **ZERO** (sub-pixel, below display resolution) | **MAXIMUM** |
| **Illegible chart labels** | **LOW** (Fix #5 of 5) | **HIGHEST** (can't read the page) | **MAXIMUM** |
| 8px list padding | **MEDIUM** (RECOMMENDED gate) | **LOW** (reasonable density choice) | MODERATE |
| 6 backgrounds per viewport | **MEDIUM** (ADVISORY gate) | **LOW** (visual richness, not overload) | MODERATE |

**5 of 7 significant findings show MAXIMUM inversion: the pipeline's priority is the exact opposite of a human's.**

---

## 3. Causal Chain

### How each stage's blindness feeds the next

```
STAGE 1: Builder Self-Evaluation
  └─ 7 questions about COMPOSITIONAL ARCHITECTURE
  └─ 0 questions about ELEMENT LEGIBILITY
  └─ Builder creates illegible chart, evaluates compositional arc, passes 7/7
       │
       ▼
STAGE 2: Gate Runner (31 gates)
  └─ 18 REQUIRED gates about CSS PROPERTY COMPLIANCE
  └─ 0 gates about TEXT CONTRAST or READABILITY
  └─ 4 invisible CSS violations → FAIL (REBUILD-worthy)
  └─ Illegible chart → not measured → not failed → not flagged
       │
       ▼
STAGE 3: PA Routing (69 questions, 9 auditors)
  └─ PA-02 ("uncomfortable to read?") → Auditor B ONLY
  └─ PA-08 ("squint to read?") → Auditor B ONLY
  └─ 8 other auditors have ZERO legibility questions
  └─ Auditor B catches it (single point of success)
  └─ 5/9 auditors look at chart, don't flag it (their questions are about composition)
       │
       ▼
STAGE 4: Weaver Prioritization
  └─ Priority model: Identity gate FAIL > Perception gate FAIL > PA findings
  └─ GR-05/06/07/09 (invisible violations) = Fixes 1-4
  └─ Chart legibility (visible failure) = Fix 5
  └─ Invisible > Visible because GATE STATUS > HUMAN PERCEPTION
       │
       ▼
STAGE 5: Orchestrator Acceptance
  └─ "SHIP WITH FIXES — all 5 mechanical"
  └─ Fix list ordered by Weaver priority (invisible first, visible last)
  └─ Flags A5 (legibility routing problem) but does not re-prioritize fixes
  └─ Pipeline output: page with illegible chart, ranked as lowest-priority fix
```

### The amplification mechanism

Each stage does not merely fail to catch the problem -- it AMPLIFIES the inversion:

1. **Builder self-eval creates false confidence.** The builder answers 7/7 questions affirmatively. It has no reason to look back at the chart. The self-eval CONFIRMS the builder's work.

2. **Gate runner creates false urgency.** 4 REQUIRED gates fail on invisible issues. These failures consume the pipeline's attention budget. The orchestrator, Weaver, and any fix cycle will address these FIRST because they are REQUIRED-tier. The chart, which has no gate, has no urgency signal.

3. **PA routing creates false redundancy.** 9 auditors sounds like 9x coverage. But legibility coverage is 1/9 = 11%. The architecture creates an ILLUSION of thorough review while concentrating legibility detection in a single point of failure.

4. **Weaver creates false priority.** The fix ordering (invisible first, visible last) creates a document that LOOKS like a priority list but is actually an anti-priority list from the user's perspective. Anyone reading the Weaver output would address Fix #1 first and Fix #5 last.

5. **Orchestrator creates false acceptance.** "SHIP WITH FIXES" implies the page is fundamentally sound. The fix list is presented as polish items. The illegible chart is buried at position 5, framed as "mechanical" (same category as changing a rgba value), and estimated at "10-15 CSS value changes total." The framing minimizes the most important defect.

---

## 4. Proposed Fixes

### 4a. Builder Self-Evaluation: Add 2 Questions

Add as Q1 and Q2 (before current Q1-Q7):

**NEW Q1: "Is every piece of text on this page legible at its rendered size and contrast?"**
```
Format: <!-- SELF-EVALUATION:
1. Text legibility — scan every text element. Any text below 12px?
   Any text with contrast ratio below 3:1 against its background?
   Any diagram/chart labels that are hard to read?
   (list all issues or "none found")
```

**NEW Q2: "Does every visual component (diagram, chart, table, card) convey its information clearly?"**
```
2. Component functionality — for each non-prose visual element
   (diagrams, charts, data tables, card grids), can a reader
   extract the information it presents?
   (list each component and yes/no)
```

These should be asked BEFORE compositional questions because they are prerequisites, not refinements.

### 4b. Gate Runner: Add 3 Usability Gates

**NEW GR-55: Text Contrast Ratio (REQUIRED)**
```javascript
// Playwright implementation sketch
async function checkTextContrast(page) {
  const results = [];
  const elements = await page.$$('*');
  for (const el of elements) {
    const text = await el.textContent();
    if (!text || text.trim().length === 0) continue;

    const styles = await el.evaluate(el => {
      const s = getComputedStyle(el);
      return {
        color: s.color,
        backgroundColor: s.backgroundColor,
        fontSize: parseFloat(s.fontSize),
        fontWeight: parseInt(s.fontWeight),
        display: s.display,
        visibility: s.visibility,
        opacity: s.opacity,
      };
    });

    if (styles.display === 'none' || styles.visibility === 'hidden') continue;
    if (parseFloat(styles.opacity) < 0.1) continue;

    const fgLuminance = relativeLuminance(parseColor(styles.color));
    const bgLuminance = relativeLuminance(
      getEffectiveBackground(el, styles.backgroundColor)
    );
    const ratio = contrastRatio(fgLuminance, bgLuminance);

    // WCAG AA: 4.5:1 for normal text, 3:1 for large text (>=18px or >=14px bold)
    const isLarge = styles.fontSize >= 18 ||
                    (styles.fontSize >= 14 && styles.fontWeight >= 700);
    const threshold = isLarge ? 3.0 : 4.5;

    if (ratio < threshold) {
      results.push({
        text: text.substring(0, 50),
        ratio: ratio.toFixed(2),
        threshold,
        fontSize: styles.fontSize,
        color: styles.color,
        bg: styles.backgroundColor,
      });
    }
  }
  return {
    status: results.length === 0 ? 'PASS' : 'FAIL',
    violations: results
  };
}
```

**Tier: REQUIRED.** Any text contrast failure = REFINE.

**NEW GR-56: Minimum Text Size (REQUIRED)**
```javascript
async function checkMinimumTextSize(page) {
  const violations = await page.$$eval('*', elements => {
    return elements
      .filter(el => {
        const text = el.textContent?.trim();
        const style = getComputedStyle(el);
        return text && text.length > 0 &&
               style.display !== 'none' &&
               style.visibility !== 'hidden' &&
               el.children.length === 0; // leaf text nodes only
      })
      .filter(el => parseFloat(getComputedStyle(el).fontSize) < 11)
      .map(el => ({
        text: el.textContent.substring(0, 50),
        fontSize: getComputedStyle(el).fontSize,
        tag: el.tagName,
      }));
  });
  return {
    status: violations.length === 0 ? 'PASS' : 'FAIL',
    violations
  };
}
```

**Tier: REQUIRED.** Text below 11px = REFINE.

**NEW GR-57: Diagram/Pre/Figure Legibility (RECOMMENDED)**
```javascript
async function checkDiagramLegibility(page) {
  // Check text inside <pre>, <figure>, <svg>, <table> for contrast
  const containers = await page.$$('pre, figure, svg, table, .chart, .diagram');
  const violations = [];
  for (const container of containers) {
    const textEls = await container.$$('*');
    for (const el of textEls) {
      // Same contrast check as GR-55 but scoped to diagram containers
      // These elements are highest-risk for legibility failures
    }
  }
  return { status: violations.length === 0 ? 'PASS' : 'FAIL', violations };
}
```

**Tier: RECOMMENDED.** Diagram text contrast failure = reported, 3+ = REFINE.

### 4c. PA Deployment: Restructure Legibility Routing

**Current state:** PA-02 and PA-08 routed to Auditor B only (1/9 coverage).

**Proposed change:** Add a SHARED legibility pre-check to ALL 9 auditors.

In every auditor's prompt, before their assigned questions:

```
UNIVERSAL PRE-CHECK (all auditors, answer FIRST before your assigned questions):
U-01: "Before answering your assigned questions, scan the full page.
       Is there ANY text you cannot read? Any diagram, chart, or label
       that is illegible? If yes, describe it and flag as BLOCKING.
       If no, write 'No legibility issues found.'"
```

This adds 1 question per auditor (9 total evaluations of legibility) at minimal cost. It ensures legibility is checked by 9 independent observers, not 1.

**Why this works:** The question is asked FIRST, before the auditor enters their analytical tunnel. It catches the gorilla before the counting task begins.

### 4d. Weaver: Restructure Priority Model

**Current priority model:**
1. Identity gate failures
2. Anti-pattern failures
3. Perception gate failures
4. PA findings

**Proposed priority model:**
1. **USABILITY BLOCKERS** (reader cannot read/use the page) -- from any source
2. Identity gate failures (soul violations)
3. Perception gate failures (threshold violations)
4. Anti-pattern failures
5. Other PA findings

**Implementation:** The Weaver prompt should include:

```
PRIORITY OVERRIDE RULE:
Before ordering your fix list, ask: "Is there ANY finding from ANY
auditor that describes something a reader CANNOT READ or CANNOT USE?"

If yes: that finding is Fix #1, regardless of gate status. A reader
who cannot read the page does not care about the font fallback stack.

Gate failures are important. But an invisible gate failure is ALWAYS
lower priority than a visible usability failure.
```

### 4e. Orchestrator: Add Circuit Breaker

**Proposed: Usability Circuit Breaker**

Between Phase 3B (PA Audit) and Phase 3C (Weaver), the orchestrator scans all 9 auditor reports for BLOCKING-severity findings related to:
- Text legibility
- Information accessibility
- Content completeness
- Navigation functionality

If ANY auditor flags a BLOCKING usability issue:

```
ORCHESTRATOR CIRCUIT BREAKER:
1. Elevate finding to BLOCKING-USABILITY status
2. Ensure Weaver receives it with explicit "this is a usability
   blocker — must be Fix #1 regardless of gate ordering" annotation
3. If SHIP WITH FIXES verdict: verify BLOCKING-USABILITY fix is
   addressed. If not: downgrade to REFINE.
```

This is a lightweight addition -- the orchestrator already reads all 9 reports to pass to the Integrative Auditor. It just needs to scan for usability-blocking language.

---

## 5. The Deep Question

### Is the pipeline's priority model FIXABLE by adding more checks, or does it reflect a fundamental design philosophy that needs to be inverted?

**Answer: Both. The fixes in Section 4 are necessary but not sufficient. The pipeline has a fundamental philosophical problem that will produce new inversions even after these specific fixes are applied.**

### The philosophical problem

The pipeline was designed to solve a SPECIFIC failure mode: pipeline-built pages that look "template-generated" -- flat, assembled, without compositional intelligence. Every evolutionary step in the pipeline's history was driven by the question: **"How do we make the output look DESIGNED, not assembled?"**

This question shaped everything:
- The self-evaluation asks about compositional architecture (not usability)
- The gate runner checks design-system identity (not reader experience)
- The PA questions are 36% compositional intelligence (not functionality)
- The Weaver scores PA-05 with sub-criteria DESIGNED, COHERENT, PROPORTIONATE, POLISHED (three of four are compositional; only POLISHED touches execution quality)
- The Tier 5 questions are explicitly "flagship detection" (compositional depth measurement)

**The pipeline optimizes for COMPOSITIONAL SOPHISTICATION. It does not optimize for READER EXPERIENCE.**

These are not the same thing. A page can be compositionally sophisticated AND have illegible charts. A page can be compositionally mediocre AND perfectly usable. The pipeline assumes that compositional quality implies usability. It does not.

### Why adding more checks is necessary but insufficient

Adding usability gates (GR-55, GR-56, GR-57) and universal legibility pre-checks (U-01) will catch THIS specific failure. But the underlying priority model -- CSS compliance > compositional intelligence > human experience -- will produce new inversions:

- A page with a broken navigation link but beautiful multi-coherence
- A page with misleading data in a table but excellent density arc
- A page with inaccessible interactive elements but structural metaphor
- A page with wrong information but perfect emotional registers

Each of these is a priority inversion: the pipeline would score the page highly while the user experiences a broken product.

### What would a fundamental inversion look like?

Instead of the current hierarchy:

```
CURRENT: CSS Compliance → Compositional Intelligence → Human Experience
```

The pipeline should use:

```
PROPOSED: Human Experience → CSS Compliance → Compositional Intelligence
```

This means:

1. **Phase 2 (Builder) self-eval:** First ask "does the page work?" THEN ask "is it composed?"
2. **Phase 3A (Gate Runner):** First check usability gates, THEN check identity gates. A usability FAIL outranks an identity FAIL.
3. **Phase 3B (PA):** First establish basic legibility/functionality across ALL auditors, THEN assess compositional depth in specialist auditors.
4. **Phase 3C (Weaver):** First resolve usability blockers, THEN assess compositional quality. A page that cannot be read is PA-05 = 0/4 regardless of its compositional sophistication.
5. **Verdict logic:** REBUILD if usability fails. REFINE if identity fails. The current logic (identity FAIL = REBUILD, usability = not checked) should be inverted.

### The meta-lesson

The pipeline spent ~30,000 lines of specification (MANIFEST alone is 1,197 lines) ensuring that a page's CSS uses the right font-family fallback stack. It spent 0 lines ensuring a reader can read the page.

This is not a bug in one gate or one question. It is the natural consequence of a system that evolved to solve "how do we make output look designed?" without ever asking "does the output work for a reader?"

The illegible chart is not an edge case. It is the inevitable product of a system that optimizes for the wrong thing. Adding checks will catch charts. The next failure will be something else the pipeline never thought to measure -- because the pipeline does not think about readers. It thinks about CSS.

---

## Appendix A: Complete Gate Inventory vs Usability Coverage

| Gate domain | Gate count | REQUIRED count | Usability relevance |
|------------|-----------|---------------|-------------------|
| CSS identity (fonts, colors, borders, shadows, radii) | 10 | 10 | ZERO -- CSS purity, not reader experience |
| Spatial thresholds (gaps, margins, voids) | 6 | 6 | MODERATE -- extreme gaps are usability issues |
| Anti-patterns (density, echo, gaming, overload) | 6 | 0 | LOW -- design quality, not functionality |
| Output metadata (self-eval, conviction) | 2 | 1 | ZERO -- process compliance |
| Measurement (heights, arcs) | 2 | 0 | ZERO -- compositional analysis |
| Meta (coverage, integrity) | 2 | 1 | ZERO -- process compliance |
| Wave 2 (typography, print, bg distribution) | 3 | 0 | LOW |
| **Text readability** | **0** | **0** | **SHOULD BE HIGHEST** |
| **Color contrast** | **0** | **0** | **SHOULD BE HIGHEST** |
| **Content accessibility** | **0** | **0** | **SHOULD BE HIGH** |

**31 gates. 0 usability gates.** 100% of REQUIRED gate capacity is allocated to CSS compliance. 0% to reader experience.

## Appendix B: PA Question Distribution by Human Priority

| Human priority | PA question count | % of 69 | Auditors covering |
|---------------|------------------|---------|-------------------|
| Can you read the text? | 2 (PA-02, PA-08) | 3% | 1 of 9 (Auditor B only) |
| Can you navigate the page? | 1 (PA-73) | 1% | 1 of 9 (Auditor H only) |
| Does the page look professional? | ~8 (PA-01, PA-03, PA-05, etc.) | 12% | 3 of 9 |
| Is the composition sophisticated? | ~25 | 36% | 8 of 9 |
| Is the emotional arc good? | ~12 | 17% | 6 of 9 |
| Is it responsive? | ~5 | 7% | 1 of 9 |
| Is it part of a system? | ~6 | 9% | 1 of 9 |
| Tier 5 / flagship detection | ~9 | 13% | 6 of 9 |
| **Sub-perceptual CSS detection** | **2** | **3%** | 1 of 9 |

The pipeline allocates MORE questions to detecting sub-perceptual CSS (PA-55, PA-56: 3%) than to detecting unreadable text (PA-02, PA-08: 3%). These are equal in question count but the sub-perceptual questions exist because the pipeline's OWN HISTORY of producing invisible CSS is a known failure mode. The pipeline is more afraid of its own historical failures than of the user's experience.

---

*End of Priority Inversion Analysis.*
