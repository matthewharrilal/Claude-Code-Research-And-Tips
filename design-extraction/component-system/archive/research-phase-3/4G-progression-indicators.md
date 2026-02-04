# 4G: Progress/Step Indicator Design Research

## Mission Statement

Research progress and step indicators that feel **editorial**, not **wizard UI**. The core question is NOT "How do we show step 2 of 5?" but rather "How do we show progress WITHOUT looking like a checkout wizard?"

---

## Table of Contents

1. [The Enemy: Generic Wizard UI](#1-the-enemy-generic-wizard-ui)
2. [The Goal: Editorial Progression](#2-the-goal-editorial-progression)
3. [Magazine Table of Contents Patterns](#3-magazine-table-of-contents-patterns)
4. [Typography-Based Numbering Systems](#4-typography-based-numbering-systems)
5. [CSS Specification](#5-css-specification)
6. [HTML Structure](#6-html-structure)
7. [Variations](#7-variations)
8. [What NOT to Include](#8-what-not-to-include)
9. [Soul Impact Analysis](#9-soul-impact-analysis)
10. [Verification Checklist](#10-verification-checklist)

---

## 1. The Enemy: Generic Wizard UI

### The Checkout Wizard Pattern (AVOID)

```css
/* ❌ WIZARD UI — What we're avoiding */
.wizard-step {
  display: flex;
  align-items: center;
  gap: 0;
}

.wizard-step__circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;           /* Circle = wizard metaphor */
  background: #007bff;          /* Bootstrap/SaaS blue */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}

.wizard-step__circle--inactive {
  background: #dee2e6;          /* Gray for incomplete */
  color: #6c757d;
}

.wizard-step__circle--complete {
  background: #28a745;          /* Green checkmark */
}

.wizard-step__line {
  height: 2px;
  background: #dee2e6;          /* Connecting line */
  flex: 1;
}

.wizard-step__line--complete {
  background: #007bff;          /* Blue when done */
}

.wizard-step__label {
  font-size: 12px;
  color: #6c757d;
  text-transform: uppercase;
  margin-top: 8px;
}
```

### Why This Pattern Fails for Editorial Design

| Problem | What It Signals | Soul Impact |
|---------|-----------------|-------------|
| **Circles** | "This is a web app wizard" | Immediate association with checkout flows, onboarding |
| **Connecting lines** | "Steps must be sequential" | Linear, transactional mindset |
| **Bootstrap blue (#007bff)** | "Generic SaaS product" | No editorial personality |
| **Green checkmarks** | "Task completion gamification" | Feels like a to-do app |
| **Uppercase labels** | "System UI, not content" | Machine-like, not human |
| **Horizontal layout** | "Squeezing steps into a bar" | Newspaper vs Twitter thread |

### Material Design Stepper (Also Problematic)

```css
/* ❌ Material Design Stepper — Still wizard-adjacent */
.md-stepper__circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1976d2;
  color: white;
  font-size: 12px;
}

.md-stepper__connector {
  top: 12px;
  left: calc(50% + 20px);
  right: calc(-50% + 20px);
  border-top-width: 1px;
  border-color: rgba(0, 0, 0, 0.12);
}
```

Material Design's stepper, while polished, still carries the visual DNA of:
- Circles as step indicators
- Connector lines between steps
- System UI aesthetic
- Form completion metaphor

---

## 2. The Goal: Editorial Progression

### Magazine Heritage

Editorial design treats progression differently:
- **Table of contents** shows what's ahead, not "steps remaining"
- **Chapter numbers** are typographic elements, not UI widgets
- **Page numbers** are information, not gamification
- **Section dividers** create rhythm without connecting lines

### Core Principles for Editorial Progression

1. **Typography IS the indicator** — Numbers as display type, not circles
2. **Vertical orientation** — Like a table of contents, not a progress bar
3. **No connecting lines** — Each item stands alone
4. **Heavy typographic hierarchy** — Display numbers + body text
5. **Content-defined boundaries** — No container chrome
6. **Left border as anchor** — Editorial marker, not wizard connector

### Visual Comparison

```
WIZARD UI (Horizontal)         EDITORIAL (Vertical)

  ①──────②──────③              1.
                                 Understanding Context
  [circles and lines]
                               2.
                                 Building the Pattern

                               3.
                                 Applying to Real Work

  [typography as anchor]
```

---

## 3. Magazine Table of Contents Patterns

Research from [Smashing Magazine](https://www.smashingmagazine.com/2008/07/table-of-contents-creative-and-beautiful-examples/) reveals several editorial approaches:

### Pattern A: Leader Dots

Traditional book/magazine pattern where dots guide the eye:

```
Chapter One · · · · · · · · · · · · · 12
Chapter Two · · · · · · · · · · · · · 45
```

**Soul Impact:** Creates visual rhythm without explicit connection. The dots are texture, not UI widgets.

### Pattern B: Oversized Numbers

Numbers become the primary visual element:

```css
.toc-number {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  color: var(--color-primary);
  line-height: 0.9;
}

.toc-title {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
}
```

**Soul Impact:** Typography carries hierarchy. The number is a design element, not a step indicator.

### Pattern C: Color Coding

Each section has a color that appears in the TOC and repeats on actual pages:

```css
.toc-item--section-1 { border-left-color: #E83025; }
.toc-item--section-2 { border-left-color: #2A7D7D; }
.toc-item--section-3 { border-left-color: #5C4B3A; }
```

**Soul Impact:** Creates visual continuity without explicit "step" language.

### Pattern D: Symbolic Representation

Using icons or symbols instead of numbers:

```
◆ Understanding
◇ Building
◆ Applying
```

**Soul Impact:** Progress becomes conceptual, not transactional.

---

## 4. Typography-Based Numbering Systems

### CSS Counters for Editorial Numbers

From [LogRocket](https://blog.logrocket.com/styling-numbered-lists-with-css-counters/) and [Responsive Web Typography](https://rwt.io/typography-tips/conjuring-better-numbered-list):

```css
/* Editorial numbered list with CSS counters */
.editorial-list {
  counter-reset: section;
  list-style: none;
  padding: 0;
  margin: 0;
}

.editorial-list__item {
  counter-increment: section;
  position: relative;
  padding-left: 80px;           /* Space for large number */
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-border);
}

.editorial-list__item::before {
  content: counter(section) ".";
  position: absolute;
  left: 0;
  top: 24px;
  font-family: var(--font-display);
  font-size: 32px;
  font-style: italic;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}
```

### Hierarchical Numbering (1.1, 1.2)

From [Mark Conroy's blog](https://mark.ie/blog/nested-lists-in-css-with-a-numbered-hierarchy):

```css
/* Nested hierarchy without circles */
.hierarchy-list {
  counter-reset: level1;
  list-style: none;
}

.hierarchy-list > li {
  counter-increment: level1;
  counter-reset: level2;
}

.hierarchy-list > li::before {
  content: counter(level1) ".";
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
}

.hierarchy-list > li > ol {
  counter-reset: level2;
  list-style: none;
}

.hierarchy-list > li > ol > li {
  counter-increment: level2;
}

.hierarchy-list > li > ol > li::before {
  content: counter(level1) "." counter(level2);
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-secondary);
}
```

---

## 5. CSS Specification

### Primary: Task Progression Component

```css
/* ==========================================================
   TASK PROGRESSION — Editorial Step Indicator
   Soul: Magazine TOC, not checkout wizard
   ========================================================== */

.task-progression {
  --progression-border-width: 4px;
  --progression-padding-left: 24px;
  --progression-number-width: 48px;
  --progression-gap: 16px;

  border-left: var(--progression-border-width) solid var(--color-primary);
  padding-left: var(--progression-padding-left);
  margin: 32px 0;
}

.task-progression__item {
  display: flex;
  gap: var(--progression-gap);
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border);
}

.task-progression__item:last-child {
  border-bottom: none;
}

/* Number styling — Typography IS the indicator */
.task-progression__number {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-h3);       /* ~24px */
  font-weight: 600;
  color: var(--color-primary);
  min-width: var(--progression-number-width);
  line-height: 1;
  flex-shrink: 0;
}

/* Content area */
.task-progression__content {
  flex: 1;
  min-width: 0;                    /* Prevent flex overflow */
}

.task-progression__title {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 4px 0;
}

.task-progression__description {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-text-secondary);
  margin: 0;
}

/* ==========================================================
   STATE VARIATIONS — Without circles or checkmarks
   ========================================================== */

/* Complete state — Subtle text treatment, no green checkmark */
.task-progression__item--complete .task-progression__number {
  color: var(--color-text-secondary);
}

.task-progression__item--complete .task-progression__number::after {
  content: ' ✓';
  font-style: normal;
  font-size: 0.75em;
}

.task-progression__item--complete .task-progression__title {
  color: var(--color-text-secondary);
}

/* Current state — Highlighted background, not a filled circle */
.task-progression__item--current {
  background: var(--color-background-subtle);
  margin-left: calc(-1 * var(--progression-padding-left));
  padding-left: var(--progression-padding-left);
  border-left: 2px solid var(--color-primary);
  margin-right: -16px;
  padding-right: 16px;
}

.task-progression__item--current .task-progression__number {
  color: var(--color-primary);
  font-weight: 700;
}

/* Upcoming state — Muted but readable */
.task-progression__item--upcoming .task-progression__number {
  color: var(--color-text-tertiary);
}

.task-progression__item--upcoming .task-progression__title {
  color: var(--color-text-secondary);
}
```

### Secondary: Inline Progress (Non-Bar)

```css
/* ==========================================================
   INLINE PROGRESS — Text-based, not bar-based
   ========================================================== */

.inline-progress {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-text-secondary);
}

.inline-progress__current {
  font-weight: 600;
  color: var(--color-primary);
}

/* Usage: <span class="inline-progress">
            Step <span class="inline-progress__current">2</span> of 5
          </span> */
```

### Tertiary: Chapter Navigation

```css
/* ==========================================================
   CHAPTER NAVIGATION — Magazine-style section nav
   ========================================================== */

.chapter-nav {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 2px solid var(--color-border-strong);
}

.chapter-nav__item {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  color: var(--color-text);
  transition: background 0.15s ease;
}

.chapter-nav__item:hover {
  background: var(--color-background-subtle);
  margin-left: -12px;
  padding-left: 12px;
  margin-right: -12px;
  padding-right: 12px;
}

.chapter-nav__number {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 18px;
  color: var(--color-primary);
  min-width: 32px;
}

.chapter-nav__title {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
}

.chapter-nav__page {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-tertiary);
}
```

---

## 6. HTML Structure

### Primary Structure: Task Progression

```html
<div class="task-progression">
  <div class="task-progression__item task-progression__item--complete">
    <span class="task-progression__number">1.</span>
    <div class="task-progression__content">
      <h4 class="task-progression__title">Understanding Context</h4>
      <p class="task-progression__description">
        Learn the foundational concepts before building.
      </p>
    </div>
  </div>

  <div class="task-progression__item task-progression__item--current">
    <span class="task-progression__number">2.</span>
    <div class="task-progression__content">
      <h4 class="task-progression__title">Building the Pattern</h4>
      <p class="task-progression__description">
        Implement the core structure with editorial styling.
      </p>
    </div>
  </div>

  <div class="task-progression__item task-progression__item--upcoming">
    <span class="task-progression__number">3.</span>
    <div class="task-progression__content">
      <h4 class="task-progression__title">Applying to Real Work</h4>
      <p class="task-progression__description">
        Use the pattern in production documentation.
      </p>
    </div>
  </div>
</div>
```

### Chapter Navigation Structure

```html
<nav class="chapter-nav" aria-label="Chapter navigation">
  <a href="#intro" class="chapter-nav__item">
    <span class="chapter-nav__number">1.</span>
    <span class="chapter-nav__title">Introduction to Patterns</span>
    <span class="chapter-nav__page">pg. 3</span>
  </a>
  <a href="#basics" class="chapter-nav__item">
    <span class="chapter-nav__number">2.</span>
    <span class="chapter-nav__title">Core Concepts</span>
    <span class="chapter-nav__page">pg. 12</span>
  </a>
  <a href="#advanced" class="chapter-nav__item">
    <span class="chapter-nav__number">3.</span>
    <span class="chapter-nav__title">Advanced Techniques</span>
    <span class="chapter-nav__page">pg. 45</span>
  </a>
</nav>
```

### Semantic List Structure (with CSS counters)

```html
<ol class="editorial-list">
  <li class="editorial-list__item">
    <h4 class="editorial-list__title">Understanding Context</h4>
    <p class="editorial-list__description">
      Learn the foundational concepts.
    </p>
  </li>
  <li class="editorial-list__item editorial-list__item--current">
    <h4 class="editorial-list__title">Building the Pattern</h4>
    <p class="editorial-list__description">
      Implement the core structure.
    </p>
  </li>
  <li class="editorial-list__item">
    <h4 class="editorial-list__title">Applying to Real Work</h4>
    <p class="editorial-list__description">
      Use in production.
    </p>
  </li>
</ol>
```

---

## 7. Variations

### 7.1 Simple Numbered List (No State)

```css
.numbered-list {
  counter-reset: item;
  list-style: none;
  padding-left: 0;
}

.numbered-list__item {
  counter-increment: item;
  position: relative;
  padding-left: 48px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--color-border);
}

.numbered-list__item::before {
  content: counter(item) ".";
  position: absolute;
  left: 0;
  font-family: var(--font-display);
  font-style: italic;
  font-size: 20px;
  color: var(--color-primary);
}
```

### 7.2 Checklist (Non-Gamified)

```css
.editorial-checklist {
  list-style: none;
  padding-left: 0;
}

.editorial-checklist__item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

/* Square checkbox, not rounded — editorial precision */
.editorial-checklist__checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-primary);
  border-radius: 0;              /* Sharp corners = editorial */
  flex-shrink: 0;
  margin-top: 2px;
}

.editorial-checklist__item--checked .editorial-checklist__checkbox {
  background: var(--color-primary);
  position: relative;
}

.editorial-checklist__item--checked .editorial-checklist__checkbox::after {
  content: '';
  position: absolute;
  left: 3px;
  top: 0;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.editorial-checklist__label {
  font-family: var(--font-body);
  font-size: var(--text-body);
}

.editorial-checklist__item--checked .editorial-checklist__label {
  color: var(--color-text-secondary);
  text-decoration: line-through;
  text-decoration-color: var(--color-text-tertiary);
}
```

### 7.3 Learning Path (Vertical Timeline)

```css
.learning-path {
  position: relative;
  padding-left: 32px;
}

/* Vertical line — subtle, not connector-like */
.learning-path::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}

.learning-path__milestone {
  position: relative;
  padding: 24px 0;
  padding-left: 32px;
}

/* Marker — small square, not circle */
.learning-path__milestone::before {
  content: '';
  position: absolute;
  left: -36px;                   /* Align with the line */
  top: 28px;
  width: 8px;
  height: 8px;
  background: var(--color-background);
  border: 2px solid var(--color-border);
}

.learning-path__milestone--complete::before {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.learning-path__milestone--current::before {
  background: var(--color-primary);
  border-color: var(--color-primary);
  width: 12px;
  height: 12px;
  left: -38px;
  top: 26px;
}

.learning-path__title {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: 600;
  margin: 0 0 4px 0;
}

.learning-path__meta {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-text-secondary);
}
```

### 7.4 Breadcrumb-Style Progress

```css
.breadcrumb-progress {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: var(--text-small);
}

.breadcrumb-progress__item {
  color: var(--color-text-tertiary);
}

.breadcrumb-progress__item--current {
  color: var(--color-text);
  font-weight: 600;
}

.breadcrumb-progress__item::after {
  content: ' / ';
  color: var(--color-border);
}

.breadcrumb-progress__item:last-child::after {
  content: none;
}
```

---

## 8. What NOT to Include

### Explicit Anti-Patterns

| Element | Why to Avoid | Editorial Alternative |
|---------|--------------|----------------------|
| **Circles** | Wizard metaphor, gamification | Typography-based numbers |
| **Connecting lines** | Sequential transaction feel | Vertical border or none |
| **Percentage bars** | Progress gamification | Text-based "Step 2 of 5" |
| **Green checkmarks** | Task completion gamification | Muted text + subtle ✓ |
| **Animated progress** | App-like, distracting | Static indicators |
| **Horizontal steppers** | Squeezes content, wizard-like | Vertical orientation |
| **Filled circles for states** | Material/Bootstrap DNA | Background highlight |
| **Blue accent color** | Generic SaaS feel | Brand primary color |

### CSS Properties to Avoid

```css
/* ❌ DO NOT USE */
.step-indicator {
  border-radius: 50%;           /* Circles = wizard */
  background: #007bff;          /* Bootstrap blue */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);  /* Elevation */
  transition: transform 0.2s;   /* Hover animations */
}

.step-indicator:hover {
  transform: scale(1.1);        /* Gamification feedback */
}

.step-connector {
  height: 2px;
  background: linear-gradient(to right, #007bff 50%, #dee2e6 50%);
  /* ^ Progress visualization through connectors */
}
```

### Behavioral Anti-Patterns

1. **Auto-advancing** — Don't animate through steps automatically
2. **Progress celebration** — No confetti, no "Great job!" messaging
3. **Percentage completion** — Avoid "You're 60% done!"
4. **Unlock metaphors** — No locked/unlocked step states
5. **Gaming language** — No "achievements", "badges", "levels"

---

## 9. Soul Impact Analysis

### Comparison Table

| Aspect | Wizard UI | Editorial | Soul Impact |
|--------|-----------|-----------|-------------|
| **Primary Visual** | Circles | Typography | Numbers as design, not widgets |
| **Orientation** | Horizontal | Vertical | Table of contents, not progress bar |
| **Connection** | Lines between steps | None or left border | Each item stands alone |
| **State: Complete** | Green circle + check | Muted text | Completion is quiet, not celebrated |
| **State: Current** | Filled blue circle | Background highlight | Focus through context, not color |
| **Color Palette** | Blue/gray/green | Brand primary only | Cohesive, not system-default |
| **Typography** | System sans-serif | Display serif italic | Editorial confidence |
| **Interaction** | Click to navigate | Scroll or click | Content-first, not nav-first |
| **Mental Model** | "Task to complete" | "Content to explore" | Learning vs transaction |

### The Typography Difference

Wizard UI numbers:
```css
/* Generic system font, centered in circle */
font-family: -apple-system, sans-serif;
font-size: 14px;
font-weight: 600;
text-align: center;
```

Editorial numbers:
```css
/* Display font, italic, left-aligned as anchor */
font-family: var(--font-display);
font-size: 24px;
font-style: italic;
font-weight: 600;
text-align: left;
```

The difference is semantic: wizard numbers are labels inside containers; editorial numbers ARE the design element.

---

## 10. Verification Checklist

### Visual Verification

- [ ] **No circles present** — Numbers rendered as typography only
- [ ] **No connecting lines** — Steps are visually independent
- [ ] **Vertical layout used** — Not horizontal stepper
- [ ] **Left border as anchor** — Editorial marker pattern
- [ ] **Display font for numbers** — Italic serif, not system sans
- [ ] **Sharp corners** — No border-radius on any element
- [ ] **Brand color only** — No Bootstrap blue (#007bff)
- [ ] **No shadows** — Flat design throughout

### Behavioral Verification

- [ ] **No progress percentage** — Text-based step indication only
- [ ] **No auto-advance** — User controls navigation
- [ ] **No celebration UI** — Quiet completion states
- [ ] **No unlock metaphors** — All steps visually accessible

### Accessibility Verification

- [ ] **Semantic HTML** — Uses `<ol>` or appropriate ARIA
- [ ] **Screen reader friendly** — Numbers read correctly
- [ ] **Keyboard navigable** — If interactive
- [ ] **Color not sole indicator** — States visible without color

### Anti-Pattern Comparison

Load the component alongside a Bootstrap stepper and verify:

```html
<!-- Side-by-side comparison -->
<div class="comparison">
  <div class="comparison__generic">
    <!-- Bootstrap stepper for reference -->
  </div>
  <div class="comparison__editorial">
    <!-- Our task-progression component -->
  </div>
</div>
```

If they look similar, the implementation has failed.

---

## Sources

### Primary Research

- [Ahmad Shadeed: Building A Stepper Component](https://ishadeed.com/article/stepper-component-html-css/) — CSS patterns for steppers
- [Smashing Magazine: Table of Contents Examples](https://www.smashingmagazine.com/2008/07/table-of-contents-creative-and-beautiful-examples/) — Editorial TOC patterns
- [Carbon Design System: Progress Indicator](https://carbondesignsystem.com/components/progress-indicator/style/) — Enterprise patterns (for contrast)
- [Material Design: Steppers](https://m1.material.io/components/steppers.html) — Generic patterns to avoid

### Typography and Lists

- [Responsive Web Typography: Better Numbered Lists](https://rwt.io/typography-tips/conjuring-better-numbered-list) — CSS counter techniques
- [LogRocket: Styling Numbered Lists](https://blog.logrocket.com/styling-numbered-lists-with-css-counters/) — Counter implementation
- [Mark Conroy: Nested List Hierarchy](https://mark.ie/blog/nested-lists-in-css-with-a-numbered-hierarchy) — Hierarchical numbering

### Design Inspiration

- [Dribbble: Vertical Stepper](https://dribbble.com/search/vertical-stepper) — Visual reference
- [Dribbble: Learning Path](https://dribbble.com/tags/learning-path) — Alternative patterns
- [Icons8: Table of Contents Design Guide](https://icons8.com/blog/articles/ultimate-guide-to-table-of-contents-design/) — Editorial principles
- [PRINT Magazine: Experimental Tables of Contents](https://www.printmag.com/print-design/unrestricted-contents-magazines-with-experimental-tables-of-contents/) — Magazine design

### Brutalist/Alternative

- [NeoBrutalismCSS](https://matifandy8.github.io/NeoBrutalismCSS/) — Minimalist CSS library
- [Neo-Brutalism UI Library](https://neo-brutalism-ui-library.vercel.app/) — Alternative aesthetic
- [Brutalist Framework](https://static.brutalistframework.com/) — Anti-pattern for "brutalist" done wrong

---

## Implementation Notes

### Integration with Sanrok Aesthetic

This progression indicator should integrate with the established Sanrok-inspired design system:

1. **Color:** Use `--color-primary` (#E83025 red), not Bootstrap blue
2. **Typography:** Instrument Serif italic for numbers, Inter for content
3. **Spacing:** 24px grid-aligned padding
4. **Borders:** Sharp corners (0px radius), 1px borders

### File Location

```
design-extraction/component-system/
├── css/
│   └── progression.css         ← Implement here
├── components/
│   └── task-progression.html   ← Demo component
└── tests/
    └── progression.spec.ts     ← Verification tests
```

---

*Research completed: 2026-02-03*
*Line count: 650+*
*Status: COMPLETE*
