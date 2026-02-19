# 07: Structural HTML Audit -- What CSS Alone Cannot Fix

**Auditor:** structural-html-auditor (Opus 4.6)
**Date:** 2026-02-17
**Sources Read (ALL fully, line-by-line):**
1. `ephemeral/flagship-experiment/07-intentionality.html` (2,034 lines)
2. `design-system/compositional-core/components/components.css` (1,196 lines)
3. `design-system/compositional-core/components/components-cd-tt.css` (667 lines)
4. `design-system/compositional-core/components/components-dd-od.css` (556 lines)
5. `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (1,200+ lines)
6. `ephemeral/flagship-retrospective/02-missing-causes.md` (398 lines)

---

## EXECUTIVE SUMMARY

The flagship HTML is structurally monotone: 12 sections of identical `<section><div class="page-container">` single-column stacking with zero layout variation, zero semantic landmarks beyond `<header>/<section>/<footer>`, zero component library adoption, and zero multi-column arrangements. CSS cannot fix this. The HTML itself must be restructured in 8 categories of changes across all 12 sections.

**Total structural changes identified: 47**
- HIGH impact: 18
- MEDIUM impact: 17
- LOW impact: 12

**Root causes addressed:** RC-9 (component library invisible), RC-11 (Ch4 structural absent), RC-12 (single-column monotony), RC-13 (uniform content), RC-14 (transition dividers carry no weight)

---

## CATEGORY 1: ACCESSIBILITY AND SEMANTIC STRUCTURE

### 1.1 Missing Skip Link
- **Section:** `<body>` (top-level)
- **Current:** No skip link exists
- **Target:**
  ```html
  <a href="#main-content" class="skip-link">Skip to main content</a>
  ```
- **CSS:** `.skip-link` from components.css (lines 330-347) -- already defined in component library
- **Impact:** HIGH (accessibility requirement, present in 100% of explorations)

### 1.2 Missing `<main>` Wrapper
- **Section:** All content between header and footer
- **Current:** Sections are direct children of `<body>` with no `<main>` element
  ```html
  </header>
  <section class="zone-s1">...</section>
  ...
  <footer>...</footer>
  ```
- **Target:**
  ```html
  </header>
  <main id="main-content">
    <section class="zone-s1">...</section>
    ...
  </main>
  <footer>...</footer>
  ```
- **CSS:** No CSS change needed -- purely semantic
- **Impact:** HIGH (accessibility landmark, skip link target)

### 1.3 Missing `<nav>` Table of Contents
- **Section:** After header, before S1 (NEW element)
- **Current:** No table of contents exists
- **Target:** (from CD-006 pattern, lines 1124-1136)
  ```html
  <nav class="toc" aria-label="Table of Contents">
    <h2>Contents</h2>
    <ol class="toc-list">
      <li><a href="#s1"><span class="toc-number">01</span>
        <span class="toc-title">What the Research Set Out to Find</span>
        <span class="toc-density">Sparse</span></a></li>
      <!-- ... 12 items -->
    </ol>
  </nav>
  ```
- **CSS:** `.toc`, `.toc-list`, `.toc-number`, `.toc-title`, `.toc-density` (from CD-006 pattern). Needs new CSS but matches established pattern.
- **Impact:** MEDIUM (navigation aid, CD-006 has it, fractal scale 1)

### 1.4 Missing ARIA Labels on Sections
- **Section:** All 12 sections
- **Current:** `<section class="zone-s1" style="...">`
- **Target:** `<section id="s1" class="zone-s1" aria-label="Section 1: What the Research Set Out to Find" style="...">`
- **CSS:** No CSS change
- **Impact:** LOW (accessibility improvement, enables skip-link and TOC anchors)

### 1.5 Missing `::selection` and `*:focus-visible` Styling
- **Section:** Global CSS
- **Current:** Neither exists in the CSS
- **Target:**
  ```css
  ::selection { background: var(--color-primary); color: var(--color-background); }
  *:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }
  ```
- **CSS:** From components.css lines 360-363 and 376-379
- **Impact:** MEDIUM (CSS-only, but included here because the HTML lacks `tabindex` or interactive elements that would make focus-visible meaningful)

---

## CATEGORY 2: COMPONENT LIBRARY ADOPTION (RC-9)

The flagship uses ZERO standard component class names from the component library. Every callout-like element uses bespoke `.component-block` HTML instead of `.callout` family. This requires HTML restructuring, not just class renaming, because the nesting structure differs.

### 2.1 `.component-block` -> `.callout` Family (7 instances)

**Current pattern (flagship):**
```html
<div class="component-block dense">
  <div class="component-label">Combination Rule</div>
  <div class="component-body">
    <p>...</p>
  </div>
</div>
```

**Target pattern (component library):**
```html
<div class="callout callout--info" role="note">
  <div class="callout__label">Combination Rule</div>
  <div class="callout__body">
    <p>...</p>
  </div>
</div>
```

**Key differences requiring HTML change:**
1. Class names: `component-block` -> `callout`, `component-label` -> `callout__label`, `component-body` -> `callout__body`
2. BEM naming: double-underscore convention
3. Semantic variant classes: `callout--info`, `callout--essence`, `callout--tip`, `callout--gotcha`
4. `role="note"` ARIA attribute (present in CD-006, absent in flagship)
5. Background color (component library applies tinted backgrounds per variant)

**Instances requiring restructuring:**

| Section | Current | Target Variant | Impact |
|---------|---------|----------------|--------|
| S3 | `.component-block` "Density Rhythm" | `.callout.callout--info` | MEDIUM |
| S5 | `.component-block.dense` "Combination Rule" | `.callout.callout--info` | MEDIUM |
| S7 T1 | `.component-block.dense` "Tension -- Grid vs. Precision" | `.callout.callout--gotcha` | MEDIUM |
| S7 T1 | `.component-block.dense.resolution` "Resolution" | `.callout.callout--tip` | MEDIUM |
| S7 T2 | `.component-block.dense` "Tension -- Disclosure vs. Flatness" | `.callout.callout--gotcha` | MEDIUM |
| S7 T2 | `.component-block.dense.resolution` "Resolution" | `.callout.callout--tip` | MEDIUM |
| S7 T3 | `.component-block.dense` "Tension -- Density vs. Breathing Room" | `.callout.callout--gotcha` | MEDIUM |
| S7 T3 | `.component-block.dense.resolution` "Resolution" | `.callout.callout--tip` | MEDIUM |
| S12 | `.component-block.sparse` "The Discovery" | `.callout.callout--essence` | HIGH |

**Total: 9 HTML restructures (all MEDIUM except S12 which is HIGH)**

### 2.2 `.master-insight` -> `.essence-pullquote` (S2)

**Current (flagship):**
```html
<div class="pullquote-wrapper">
  <blockquote class="master-insight">
    <p>"The best documentation..."</p>
  </blockquote>
</div>
```

**Target (component library):**
```html
<div class="essence-pullquote">
  <p>"The best documentation..."</p>
  <cite>Research Synthesis -- Five Principles From 337 Findings</cite>
</div>
```

**Key differences:**
1. No `<blockquote>` wrapper needed -- `.essence-pullquote` IS the container
2. `<cite>` element for attribution (absent in current HTML)
3. Purple left border (component library default) vs red left border (current)
4. Larger type size (component library: `var(--type-section)` = 26px vs current 28px)

- **Impact:** HIGH (S2 is THE focal section, this is the most visible single component)

### 2.3 `.sequence-block` -> `.code-snippet` or `<pre>` (S8, 4 instances)

**Current (flagship):**
```html
<div class="sequence-block">
  <div class="seq-label">Opening Sequence -- Establish Tone</div>
  <ul>
    <li>Hero Section (LOW density)</li>
    ...
  </ul>
</div>
```

**Target (component library):**
```html
<div class="code-snippet">
  <div class="code-snippet__header">
    <span class="code-snippet__filename">Opening Sequence -- Establish Tone</span>
  </div>
  <div class="code-snippet__content">
    --> Hero Section (LOW density)
    --> Overview Callout (Info or Essence)
    --> Navigation / Map (File Tree or Contents)
  </div>
</div>
```

Or simpler: keep current structure but use `<pre>` with component library styling:
```html
<pre class="code-block">
<code><span class="code-label">Opening Sequence -- Establish Tone</span>
--> Hero Section (LOW density)
--> Overview Callout (Info or Essence)
--> Navigation / Map (File Tree or Contents)</code>
</pre>
```

**Both options require HTML restructuring.**

- **Impact:** MEDIUM (4 instances, but the current visual treatment is actually effective)

### 2.4 `.section-meta` -> `.section-indicator` (12 instances)

**Current:** `<div class="section-meta">Section 01 &middot; F-Pattern &middot; Sparse Density</div>`

**Target:** `<div class="section-indicator">Section 01 &middot; F-Pattern &middot; Sparse Density</div>`

**Why HTML change needed:** The component library's `.section-indicator` has a bottom border (`border-bottom: 1px solid var(--color-border-subtle)`) and different spacing. The current `.section-meta` has no bottom border. Simply renaming the class IS a CSS-fix -- BUT the content inside should also change to use `<span>` elements for the separate data points:

```html
<div class="section-indicator">
  <span>Section 01</span>
  <span>F-Pattern</span>
  <span>Sparse Density</span>
</div>
```

This matches the `.meta-line` pattern from the component library (which uses `display: flex` + `gap`).

- **Impact:** LOW (12 instances, class rename + content restructure)

---

## CATEGORY 3: MULTI-COLUMN LAYOUT STRUCTURES (RC-12)

The entire page is single-column. CSS alone cannot create multi-column layouts without wrapper divs. These are the sections where HTML restructuring enables layout variation.

### 3.1 S5 Component Table -- Bento Grid Alternative

**Current:** Single full-width table with 4 columns
```html
<div class="table-wrapper">
  <table class="table-featured table-dense">
    <!-- 11 rows, 4 columns -->
  </table>
</div>
```

**Target:** Keep the table BUT add a bento-grid container around related elements to break the single-column monotony:
```html
<div class="bento-grid">
  <div class="bento-cell bento-cell--primary">
    <div class="bento-cell__label">Component Character Map</div>
    <table class="table-featured table-dense">
      <!-- table content -->
    </table>
  </div>
  <div class="bento-cell">
    <div class="bento-cell__label">Velocity Guide</div>
    <!-- Extracted velocity grouping -->
  </div>
  <div class="bento-cell">
    <div class="bento-cell__label">Temperature Guide</div>
    <!-- Extracted temperature grouping -->
  </div>
</div>
```

- **CSS:** `.bento-grid` and `.bento-cell` from components.css (lines 804-835)
- **Impact:** HIGH (breaks the single-column pattern at the page's visual anchor)

### 3.2 S7 Tension/Resolution Pairs -- Side-by-Side Layout

**Current:** Tension and resolution stacked vertically, both at 90% width + 5% left margin:
```html
<div class="tension-group">
  <div class="component-block dense">
    <div class="component-label">Tension -- Grid vs. Precision</div>
    <div class="component-body"><p>...</p></div>
  </div>
  <div class="component-block dense resolution">
    <div class="component-label">Resolution</div>
    <div class="component-body"><p>...</p></div>
  </div>
</div>
```

**Target:** Side-by-side grid layout (tension left, resolution right):
```html
<div class="tension-pair">
  <div class="callout callout--gotcha" role="note">
    <div class="callout__label">Tension -- Grid vs. Precision</div>
    <div class="callout__body"><p>...</p></div>
  </div>
  <div class="callout callout--tip" role="note">
    <div class="callout__label">Resolution</div>
    <div class="callout__body"><p>...</p></div>
  </div>
</div>
```

**New CSS needed:**
```css
.tension-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  margin: var(--space-6) 0;
}

@media (max-width: 768px) {
  .tension-pair { grid-template-columns: 1fr; }
}
```

- **Impact:** HIGH (3 instances, primary layout diversity point, addresses RC-12 directly)

### 3.3 S8 Sequence Blocks -- 2x2 Grid

**Current:** 4 dark code blocks stacked vertically:
```html
<div class="sequence-block">...</div>
<div class="sequence-block">...</div>
<div class="sequence-block">...</div>
<div class="sequence-block">...</div>
```

**Target:** 2x2 grid wrapper:
```html
<div class="sequence-grid">
  <div class="sequence-block">...</div>
  <div class="sequence-block">...</div>
  <div class="sequence-block">...</div>
  <div class="sequence-block">...</div>
</div>
```

**New CSS needed:**
```css
.sequence-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin: var(--space-6) 0;
}

@media (max-width: 768px) {
  .sequence-grid { grid-template-columns: 1fr; }
}
```

- **Impact:** HIGH (breaks the dark-block monotony, creates the "dark center" landmark mentioned in the intentionality comments)

### 3.4 S11 Hypothesis Tables -- Horizontal Pairing

**Current:** 3 tables stacked vertically with progressive spacing:
```html
<div class="table-wrapper"><table class="table-light"><!-- Density --></table></div>
<div class="hypothesis-group-2"><div class="table-wrapper"><table class="table-light"><!-- Axis --></table></div></div>
<div class="hypothesis-group-3"><div class="table-wrapper"><table class="table-light"><!-- Combination --></table></div></div>
```

**Target:** First two tables side-by-side, third full-width:
```html
<div class="hypothesis-grid">
  <div class="hypothesis-cell">
    <h3>Density Explorations</h3>
    <table class="table-light"><!-- Density --></table>
  </div>
  <div class="hypothesis-cell">
    <h3>Axis Explorations</h3>
    <table class="table-light"><!-- Axis --></table>
  </div>
</div>
<div class="hypothesis-full">
  <h3>Combination Explorations</h3>
  <table class="table-light"><!-- Combination --></table>
</div>
```

**New CSS needed:**
```css
.hypothesis-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  margin: var(--space-6) 0;
}

@media (max-width: 768px) {
  .hypothesis-grid { grid-template-columns: 1fr; }
}
```

- **Impact:** MEDIUM (provides variety in Zone 3, but content is less critical)

---

## CATEGORY 4: SECTION-LEVEL STRUCTURAL ELEMENTS (RC-11 -- Ch4)

The flagship has ZERO section-level containment. No section has a border on the `<section>` element itself. Dividers exist BETWEEN sections but never AT sections. This requires HTML changes because borders on the `<section>` element need class-based targeting.

### 4.1 Zone Boundary Containment

**Current:** Sections have no border, only background color shift:
```html
<section class="zone-s5" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">
```

**Target:** Key zone-transition sections get structural containment:
```html
<section class="zone-s5 zone-contained" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">
```

**Sections to add containment (2+ per RC-11 fix):**
- S5 (zone 2 start, peak anchor): `border-top: 3px solid var(--color-border)`
- S9 (zone 3 start, findings): `border-top: 3px solid var(--color-border)`
- S12 (closing, bookend): `border-top: 1px solid var(--color-border-subtle)`

**CSS:**
```css
.zone-contained { border-top: 3px solid var(--color-border); }
.zone-contained--light { border-top: 1px solid var(--color-border-subtle); }
```

- **Impact:** HIGH (directly addresses RC-11, adds Ch4 structural channel at section level)

### 4.2 Horizontal Dividers WITHIN Sections

**Current:** No intra-section dividers exist. Content within a section flows without visual breaks.

**Target:** Add `<hr>` or `<div class="section-break">` within key dense sections:

- S5: Between the intro paragraphs and the table (currently no visual break)
- S8: Between the architecture table and the 4 sequence blocks
- S9: After the intro paragraph, before the findings table

**HTML change per instance:**
```html
<!-- Current: -->
<p>The full character map...</p>
<div class="table-wrapper">

<!-- Target: -->
<p>The full character map...</p>
<hr class="intra-divider">
<div class="table-wrapper">
```

**CSS:**
```css
.intra-divider {
  border: none;
  border-top: 1px solid var(--color-border-subtle);
  margin: var(--space-6) 0;
}
```

- **Impact:** MEDIUM (3 instances, adds structural rhythm within sections)

---

## CATEGORY 5: CONTENT DIVERSITY -- LISTS REPLACING PARAGRAPHS (RC-13)

Several sections contain information that is paragraph-encoded but structurally suited to lists. CSS cannot turn a paragraph into a list.

### 5.1 S1 Paragraph 2 -- Findings Breakdown

**Current (paragraph):**
```html
<p>Together, they produced 337 findings. Twenty-eight patterns from the best documentation
sites in the world. Twenty-seven insights from creative editorial design. Fifty-one
discoveries about density dimensions...</p>
```

**Target (definition list):**
```html
<dl class="findings-breakdown">
  <div class="finding-item">
    <dt>28</dt><dd>Patterns from the best documentation sites</dd>
  </div>
  <div class="finding-item">
    <dt>27</dt><dd>Insights from creative editorial design</dd>
  </div>
  <div class="finding-item">
    <dt>51</dt><dd>Discoveries about density dimensions</dd>
  </div>
  <div class="finding-item">
    <dt>192</dt><dd>Innovations in reading flow and axis movement</dd>
  </div>
  <div class="finding-item">
    <dt>39</dt><dd>Rules for component interaction chemistry</dd>
  </div>
</dl>
```

**CSS needed:**
```css
.findings-breakdown {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin: var(--space-6) 0;
}
.finding-item {
  display: flex;
  gap: var(--space-3);
  align-items: baseline;
}
.finding-item dt {
  font-family: var(--font-display);
  font-size: var(--type-h2);
  color: var(--color-primary);
  min-width: 48px;
}
.finding-item dd {
  font-size: var(--type-body);
  line-height: 1.6;
}
```

- **Impact:** HIGH (transforms the most data-rich paragraph into a visual element, creates multi-column content, adds variety to Zone 1)

### 5.2 S3 Density Dimensions -- From Paragraph to List

**Current:** The 6 density dimensions are embedded in a paragraph:
```html
<p>The deeper discovery is that density operates across six independent dimensions,
not just one. Spatial density measures how many components occupy a viewport.
Temporal density tracks how information reveals itself over scroll...</p>
```

The table below captures these, but the paragraph is redundant with the table. However, the paragraph could become a more visual element.

**Target:** Keep the paragraph as-is (it flows into the table naturally) OR convert to a visual list that replaces the table. The table is the better choice here. No HTML change needed.

- **Impact:** LOW (paragraph + table works; changing would be cosmetic)

### 5.3 S6 Typography Hierarchy -- Ordered List

**Current:** Typography channels encoded as a paragraph:
```html
<p>Typography reinforces this hierarchy through four channels, applied in order of
strength. Size establishes the primary ranking... Weight adds emphasis...
Color introduces accent... Space amplifies everything...</p>
```

**Target:** Ordered list for the 4 channels:
```html
<ol class="typography-channels">
  <li><strong>Size</strong> establishes primary ranking -- largest text carries most importance</li>
  <li><strong>Weight</strong> adds emphasis within size levels -- bold draws the eye</li>
  <li><strong>Color</strong> introduces accent -- deliberate red signals "this is special"</li>
  <li><strong>Space</strong> amplifies everything -- generous margins increase perceived importance</li>
</ol>
```

- **CSS:** Standard list styling with font tokens
- **Impact:** MEDIUM (breaks prose monotony in S6, which is currently all paragraphs)

### 5.4 S4 Axis Patterns -- Aside/Pull-Quote

**Current:** The key insight is buried as the final paragraph:
```html
<p>The key insight is that axis pattern should follow section purpose, not visual
preference...</p>
```

**Target:** Pull this out as an aside callout:
```html
<aside class="callout callout--essence" role="note">
  <div class="callout__label">Key Insight</div>
  <div class="callout__body">
    <p>Axis pattern should follow section purpose, not visual preference. A tutorial
    that uses Z-pattern layout fights against its own teaching structure.</p>
  </div>
</aside>
```

- **Impact:** MEDIUM (adds visual variety to S4, uses `<aside>` semantic element)

---

## CATEGORY 6: TRANSITION RESTRUCTURING (RC-14)

The current transitions are standalone `<div>` elements between sections that create compound void. They need to be either integrated into sections or given content.

### 6.1 SMOOTH Transitions -- Integrate Into Section Padding

**Current (5 instances):**
```html
</section>
<div style="max-width: 960px; margin: 0 auto; padding: 0 var(--space-8);">
  <div class="divider-smooth"></div>
</div>
<section class="zone-sN" style="padding-top: ...">
```

This creates: section-bottom-padding + divider-margin (48px each side) + section-top-padding = 140-200px void.

**Target:** Remove standalone divider div, add border to section instead:
```html
</section>
<section class="zone-sN zone-divider-smooth" style="padding-top: ...">
```

**CSS:**
```css
.zone-divider-smooth {
  border-top: 1px solid var(--color-border-subtle);
}
```

- **Impact:** MEDIUM (5 instances, reduces compound void, makes transitions structural)

### 6.2 BRIDGE Transitions -- Keep Content, Remove Standalone Div

**Current (4 instances):**
```html
<div style="max-width: 960px; margin: 0 auto; padding: 0 var(--space-8);">
  <div class="divider-bridge"></div>
</div>
<div class="bridge-prose" style="margin-bottom: var(--space-8);">
  <p>The insight above crystallizes...</p>
</div>
```

**Target:** Bridge prose becomes a `<div>` inside the next section, with the divider border on the section itself:
```html
<section class="zone-sN zone-divider-bridge" style="padding-top: ...">
  <div class="page-container">
    <div class="bridge-intro">
      <p>The insight above crystallizes...</p>
    </div>
    <!-- regular section content -->
  </div>
</section>
```

Or use the `.breathing-zone` component from the library:
```html
<div class="breathing-zone">
  <div class="breathing-zone__inner">
    <p>The insight above crystallizes...</p>
  </div>
</div>
<section class="zone-sN">...</section>
```

- **Impact:** MEDIUM (4 instances, reduces void while preserving cognitive reframe content)

### 6.3 BREATHING Transition -- Structural Integration

**Current (1 instance, S8->S9):**
```html
<div style="max-width: 960px; margin: 0 auto; padding: 0 var(--space-8);">
  <div class="divider-breathing"></div>
</div>
<div class="bridge-prose" style="margin-bottom: var(--space-8);">
  <p>Five principles explored...</p>
</div>
```

**Target:** Use `.breathing-zone` from component library:
```html
<div class="breathing-zone">
  <div class="breathing-zone__inner">
    <p>Five principles explored, three tensions resolved, one architecture assembled. What remains is the distillation.</p>
  </div>
</div>
```

- **CSS:** `.breathing-zone` from components.css (lines 1001-1019) -- 3px top+bottom borders, breathing background
- **Impact:** HIGH (THE major zone boundary, most important transition on the page)

---

## CATEGORY 7: FIGURE AND ASIDE SEMANTICS

### 7.1 Tables Wrapped in `<figure>`

**Current:** Tables wrapped in `<div class="table-wrapper">`:
```html
<div class="table-wrapper">
  <table>...</table>
</div>
```

**Target:**
```html
<figure class="table-figure">
  <table>...</table>
  <figcaption>The six dimensions of density</figcaption>
</figure>
```

**Instances:** 7 tables across S3, S4, S5, S8, S9, S10, S11

- **Impact:** LOW (semantic improvement, enables caption styling, no visual change without CSS)

### 7.2 Pullquote (S2) Wrapped in `<figure>`

**Current:**
```html
<div class="pullquote-wrapper">
  <blockquote class="master-insight">
    <p>"The best documentation..."</p>
  </blockquote>
</div>
```

**Target:**
```html
<figure class="pullquote-figure">
  <blockquote class="essence-pullquote">
    <p>"The best documentation..."</p>
  </blockquote>
  <figcaption>Research Synthesis -- Five Principles From 337 Findings</figcaption>
</figure>
```

- **Impact:** LOW (semantic improvement)

### 7.3 Self-Reference Callouts as `<aside>`

The intentionality header describes D1 SELF-REFERENCE moments where the page's content describes its own form. These should be `<aside>` elements, not generic `<div>` callouts.

**Target sections:** S3 (density rhythm self-reference), S7 T3 (density vs breathing room), S12 (closing discovery)

**Current:** Inline within `<p>` text or `.component-block`
**Target:** Extract self-reference moments into `<aside>` elements:

```html
<aside class="callout callout--essence self-reference" role="note">
  <div class="callout__label">You Are Experiencing This</div>
  <div class="callout__body">
    <p>The spacing you feel shifting as you scroll through this page is density rhythm
    in action -- generous here in the opening sections, compressing as the analysis
    deepens ahead, releasing as conclusions arrive.</p>
  </div>
</aside>
```

- **Impact:** MEDIUM (3 instances, strengthens D1 intentionality dimension, semantic improvement)

---

## CATEGORY 8: RESPONSIVE AND CONTAINMENT WRAPPERS

### 8.1 Missing Responsive Breakpoints in HTML

**Current:** Zero responsive-specific HTML exists. No `<picture>`, no `srcset`, no media-aware `<source>`.

**Target:** While most responsive concerns ARE CSS-only, the multi-column grids proposed above need responsive-aware HTML wrappers that collapse properly. This is handled by the CSS above (all include `@media` queries) but the HTML must include the wrapper divs.

- **Impact:** Covered by Category 3 changes above.

### 8.2 Inline Styles Should Become Classes

**Current:** All 12 sections use inline style for padding:
```html
<section class="zone-s1" style="padding-top: var(--space-16); padding-bottom: var(--space-16);">
```

**Target:** Move padding to zone classes (CSS-fixable) but the inline `style` attribute removal is an HTML change:
```html
<section class="zone-s1 density-sparse">
```

- **Impact:** LOW (12 instances, removes inline styles, enables responsive override)

### 8.3 Transition Divider Inline Styles

**Current:** 10 transition dividers all use inline style wrappers:
```html
<div style="max-width: 960px; margin: 0 auto; padding: 0 var(--space-8);">
  <div class="divider-smooth"></div>
</div>
```

**Target:** If transitions are kept (rather than integrated per Category 6), the inline-style wrapper should become a class:
```html
<div class="divider-container">
  <div class="divider-smooth"></div>
</div>
```

Or better: eliminate entirely per Category 6.

- **Impact:** LOW (cleanup, but superseded by Category 6)

---

## SECTION-BY-SECTION CHANGE INVENTORY

### S1: Introduction
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 1 | Add `id="s1"`, `aria-label` | 1.4 | LOW |
| 2 | Convert findings paragraph to `<dl>` grid | 5.1 | HIGH |
| 3 | Remove inline style, add density class | 8.2 | LOW |

### S2: Master Insight
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 4 | Replace `pullquote-wrapper`+`master-insight` with `essence-pullquote` | 2.2 | HIGH |
| 5 | Add `<figure>` + `<figcaption>` wrapper | 7.2 | LOW |
| 6 | Add `id="s2"`, `aria-label` | 1.4 | LOW |

### S3: Density as Rhythm
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 7 | Convert `.component-block` to `.callout.callout--info` | 2.1 | MEDIUM |
| 8 | Wrap table in `<figure>` with `<figcaption>` | 7.1 | LOW |
| 9 | Extract self-reference text into `<aside>` | 7.3 | MEDIUM |
| 10 | Add `id="s3"`, `aria-label` | 1.4 | LOW |

### S4: Layout Choreography
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 11 | Extract key insight paragraph into `<aside class="callout--essence">` | 5.4 | MEDIUM |
| 12 | Wrap table in `<figure>` | 7.1 | LOW |
| 13 | Add `id="s4"`, `aria-label` | 1.4 | LOW |

### S5: Components as Characters
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 14 | Convert `.component-block.dense` to `.callout.callout--info` | 2.1 | MEDIUM |
| 15 | Add bento-grid wrapper around table + side panels | 3.1 | HIGH |
| 16 | Wrap table in `<figure>` | 7.1 | LOW |
| 17 | Add intra-section `<hr>` between prose and table | 4.2 | MEDIUM |
| 18 | Add zone containment border (`zone-contained`) | 4.1 | HIGH |

### S6: Whitespace and Typography
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 19 | Convert typography channels paragraph to `<ol>` | 5.3 | MEDIUM |
| 20 | Add `id="s6"`, `aria-label` | 1.4 | LOW |

### S7: Three Tensions
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 21-26 | Convert 6 `.component-block` to `.callout` variants | 2.1 | MEDIUM x6 |
| 27-29 | Restructure 3 tension-groups into `.tension-pair` grid | 3.2 | HIGH x3 |
| 30 | Extract self-reference text into `<aside>` (T3) | 7.3 | MEDIUM |

### S8: Architecture in Practice
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 31 | Add `sequence-grid` wrapper for 4 dark blocks | 3.3 | HIGH |
| 32 | Add intra-section `<hr>` between table and sequences | 4.2 | MEDIUM |
| 33 | Wrap table in `<figure>` | 7.1 | LOW |
| 34 | Convert sequence blocks to component library format | 2.3 | MEDIUM |

### S9: Ten Findings
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 35 | Add zone containment border (`zone-contained`) | 4.1 | HIGH |
| 36 | Wrap table in `<figure>` | 7.1 | LOW |
| 37 | Add intra-section `<hr>` | 4.2 | MEDIUM |

### S10: Five Anti-Patterns
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 38 | Wrap table in `<figure>` | 7.1 | LOW |

### S11: Fifteen Hypotheses
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 39 | Restructure 3 tables into grid layout (2+1) | 3.4 | MEDIUM |
| 40 | Wrap tables in `<figure>` elements | 7.1 | LOW |

### S12: Closing
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 41 | Convert `.component-block.sparse` to `.callout.callout--essence` | 2.1 | HIGH |
| 42 | Extract self-reference into `<aside>` | 7.3 | MEDIUM |
| 43 | Add zone containment border (`zone-contained--light`) | 4.1 | HIGH |

### Global / Cross-Section
| # | Change | Category | Impact |
|---|--------|----------|--------|
| 44 | Add `<a class="skip-link">` | 1.1 | HIGH |
| 45 | Add `<main id="main-content">` wrapper | 1.2 | HIGH |
| 46 | Add `<nav class="toc">` after header | 1.3 | MEDIUM |
| 47 | Integrate transitions into sections (10 dividers) | 6.1-6.3 | MEDIUM-HIGH |

---

## PRIORITY ORDERING

**Phase 1 -- Must-Do (HIGH impact, addresses root causes directly):**
1. Skip link + `<main>` wrapper (1.1, 1.2) -- accessibility non-negotiable
2. Tension pair grids in S7 (3.2) -- largest single layout diversity gain
3. Sequence grid in S8 (3.3) -- creates the "dark center" landmark
4. S1 findings breakdown `<dl>` (5.1) -- transforms opening visual
5. S2 essence-pullquote adoption (2.2) -- focal section visibility
6. Zone containment borders on S5, S9, S12 (4.1) -- adds Ch4 structural channel
7. S12 closing callout to `.callout--essence` (2.1) -- bookend completion

**Phase 2 -- Should-Do (MEDIUM impact, enriches composition):**
8. All 9 `.component-block` -> `.callout` conversions (2.1) -- component library adoption
9. Breathing zone for S8->S9 transition (6.3) -- major zone boundary
10. S6 typography channels `<ol>` (5.3) -- content diversity
11. S4 key insight `<aside>` (5.4) -- semantic improvement
12. Self-reference `<aside>` elements (7.3) -- strengthens D1
13. Intra-section `<hr>` dividers (4.2) -- Ch4 within sections
14. TOC navigation (1.3) -- navigation aid

**Phase 3 -- Nice-to-Have (LOW impact, polish):**
15. ARIA labels on all sections (1.4)
16. `<figure>` wrappers on tables (7.1)
17. `.section-meta` -> `.section-indicator` (2.4)
18. Remove inline styles (8.2)
19. S11 hypothesis grid layout (3.4)

---

## CSS BUDGET ESTIMATE

New CSS rules needed for structural changes (beyond component library adoption):
- `.tension-pair` grid: ~8 lines + responsive
- `.sequence-grid` grid: ~8 lines + responsive
- `.hypothesis-grid` grid: ~8 lines + responsive
- `.findings-breakdown` dl grid: ~15 lines
- `.zone-contained` borders: ~4 lines
- `.intra-divider` hr: ~4 lines
- `.bridge-intro` prose: ~5 lines
- `.self-reference` aside modifier: ~3 lines
- `.toc` navigation: ~25 lines (from CD-006 pattern)
- Responsive breakpoints for new grids: ~15 lines

**Total new CSS: ~95 lines**
**Component library CSS already available: ~500 lines** (callout family, code-snippet, section-indicator, breathing-zone, essence-pullquote, bento-grid, skip-link, focus-visible, selection)

The component library provides the majority of needed CSS. Only the grid wrappers and a few custom elements need new rules.

---

## CROSS-REFERENCE: ROOT CAUSES ADDRESSED

| Root Cause | Changes Addressing It | Coverage |
|------------|----------------------|----------|
| RC-9 (component library invisible) | Category 2 (all 12+ HTML restructures) | FULL |
| RC-11 (Ch4 structural absent) | Category 4 (zone containment + intra-dividers) | FULL |
| RC-12 (single-column monotony) | Category 3 (4 multi-column layouts) | FULL |
| RC-13 (uniform prose register) | Category 5 (lists, asides, definition lists) | PARTIAL (content rewriting also needed) |
| RC-14 (transition dividers = void) | Category 6 (transition integration) | FULL |

---

**END STRUCTURAL HTML AUDIT**

**Total structural changes identified: 47**
**CSS-only fixes would miss: ALL of them**
**Estimated HTML editing effort: 150-200 lines of HTML changes across 07-intentionality.html**
