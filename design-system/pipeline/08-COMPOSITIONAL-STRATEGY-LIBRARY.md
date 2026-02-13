<!-- INLINE THREADING HEADER
Phase: POST-CD-PIPELINE
Parent: POST-CD-PIPELINE/03-MIGRATION-PIPELINE.md, POST-CD-PIPELINE/09-EXTRACTION-VALIDATION-PROTOCOL.md
Supersedes: NONE
Last Updated: 2026-02-13
-->

# Compositional Strategy Library
## The Complete Component Model and Pattern Catalog

**Version:** 2.0 (Post-Component-Taxonomy Analysis)
**Date:** 2026-02-13
**Sources:** Pipeline Evolution Synthesis, Component Forensics, Tension-Test Analysis, Extraction Reconceived
**Purpose:** THE reference for what gets extracted and what gets composed. This is the bridge between component extraction (Phase C) and the tension-composition pipeline (Phase 3 Track 2 execution).

---

## DOCUMENT OVERVIEW

**This document answers three fundamental questions:**

1. **What is extractable?** Tier 1+2+2.5 components (~400 lines CSS)
2. **What must be composed fresh?** Tier 3 metaphor-driven arrangements (prose patterns)
3. **How does the pipeline consume the extracted base?** Two-layer architecture with CSS custom properties

**Critical Principle:**

> "The metaphor shapes experience; the guardrails prevent it from breaking experience."

- **Tier 1+2 are the guardrails** (locked tokens, stable components)
- **Tier 3 is the metaphor** (compositional arrangements that serve content)

---

## TABLE OF CONTENTS

1. [The 3-Tier Component Model](#1-the-3-tier-component-model)
2. [Tier 2 Component Inventory — The Honest Assessment](#2-tier-2-component-inventory--the-honest-assessment)
3. [Tier 2.5 Pattern Catalog](#3-tier-25-pattern-catalog)
4. [The Tier 2.5 vs Tier 3 Boundary](#4-the-tier-25-vs-tier-3-boundary)
5. [Tier 3 Compositional Strategy Recipes](#5-tier-3-compositional-strategy-recipes)
6. [Extraction Output Structure](#6-extraction-output-structure)
7. [How Pipeline Consumes the Library](#7-how-pipeline-consumes-the-library)
8. [Open Questions](#8-open-questions)

---

## 1. THE 3-TIER COMPONENT MODEL

### The Complete Model with Concrete Examples

The component taxonomy research identified three distinct tiers plus a hybrid zone. These tiers have DIFFERENT extractability, DIFFERENT relationships to metaphors, and DIFFERENT lifespans.

```
┌─────────────────────────────────────────────────────────────┐
│ Tier 1: ATOMS (~80 lines)                                   │
│ Design tokens — colors, fonts, spacing scale, soul          │
│ Byte-for-byte identical across ALL explorations             │
│ 100% extractable                                            │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ Tier 2: MOLECULES (~175 lines)                              │
│ Styled elements with internal structure                     │
│ Maintain identity regardless of context                     │
│ 90%+ extractable — place anywhere, looks the same          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ Tier 2.5: REUSABLE PATTERNS (~145 lines CSS + 440 guidance) │
│ Layout systems that work in many contexts                   │
│ CSS extractable, WHEN to use it is compositional           │
│ Require judgment to apply correctly                        │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ Tier 3: ORGANISMS (prose only)                              │
│ Visual arrangements deriving meaning from metaphor           │
│ 0% extractable as CSS                                       │
│ Documented as prose strategy recipes                       │
└─────────────────────────────────────────────────────────────┘
```

### Tier 1: The Locked Alphabet

**What it is:** Design tokens or constraints that cannot be decomposed further.

**Examples:**
- Color palette: `--color-primary: #E83025`
- Typography: `--font-display: 'Instrument Serif'`
- Spacing scale: `--space-4: 16px` through `--space-20: 80px`
- Soul constraints: `border-radius: 0`, `box-shadow: none`

**Key characteristic:** Byte-for-byte identical across all 24 explorations (DD-001 through CD-006). Zero evolution. The alphabet is locked.

**Extractability:** 100%. Copy the `:root` block. ~80 lines of CSS.

**Compositional logic:** NONE. Pure values.

---

### Tier 2: The Stable Vocabulary

**What it is:** A styled element with internal structure that maintains identity regardless of context.

**The Rename Test:** Can you rename the CSS class to something generic without losing distinctiveness?
- `.callout-essence` → `.accent-callout` ✓ (Tier 2: the 4px amber border + italic serif body works anywhere)

**Examples:**
- Callout box (2-zone: label + body, 4px border-left, uppercase label)
- Code block (dark background, monospace font, syntax highlighting)
- Page header (dark bg, 3px red border-bottom, display font title)
- Data table (grid layout, mono headers, 3px/1px borders)

**Key characteristic:** HTML structure 100% stable. CSS core 92-98% stable. Only spacing/background modifiers vary (8%).

**Extractability:** 90%+ (~175 lines total). Extract the CSS class + HTML structure. Works anywhere.

**Compositional logic:** MINIMAL. A callout has internal layout (label above body, border on left) but NO dependency on surrounding context. Place a callout inside a bento cell, a spoke section, or a standalone page → it looks the same.

---

### Tier 2.5: Reusable Patterns Requiring Judgment

**What it is:** Layout systems that work in many contexts but require judgment to apply correctly.

**The Tool Metaphor:** A hammer works in any workshop. The DECISION to use the hammer is compositional.

**Examples:**
- Bento grid (CSS: `display: grid`, span rules. Judgment: WHEN to use varied spans)
- Solid offset depth (CSS: `::after` pseudo-element. Judgment: Featured elements only, 1-2 per page max)
- Confidence encoding (CSS: border-weight gradient. Judgment: Content must have certainty gradients)

**Key characteristic:** The CSS mechanism is extractable. The semantic meaning or application context requires documented judgment.

**Extractability:** 70% (~145 lines CSS + 440 lines mandatory usage guidance).

**Compositional logic:** MODERATE. The pattern can be placed anywhere, but the DECISION to make an element "featured" via offset, or which confidence level to assign, is compositional judgment.

---

### Tier 3: Metaphor-Driven Organisms

**What it is:** Visual arrangements deriving meaning from their metaphor and position within a composition.

**The Rename Test:** Can you rename the CSS class to something generic without losing distinctiveness?
- `.stratum--established` → `.bordered-section` ✗ (Tier 3: the 4px border only means "high confidence" in geological context)

**Examples:**
- Geological strata (border-weight gradient encodes confidence: 4px=established, 3px=probable, 2px=speculative, 1px=open)
- Density islands (the "ocean whitespace" + offset positioning IS the design)
- Hub-spoke spatial (central mass + radiating connections creates spatial topology)

**Key characteristic:** The metaphor IS the component. Extract the CSS, lose the meaning.

**Extractability:** 0-30% (prose patterns only, NOT extractable CSS).

**Compositional logic:** TOTAL. The visual properties carry meaning only because of the metaphor they serve.

---

## 2. TIER 2 COMPONENT INVENTORY — THE HONEST ASSESSMENT

### The Component Count Question

**Original analysis claim:** ~9 Tier 2 components identified across DD/OD/AD/CD explorations.

**Reality:** TWO different research agents disagreed on the count and grouping.

#### Forensics Agent Found 8 Components:
(From DD/OD/AD/CD analysis of 12 files)

1. Callout family (essence, tip, gotcha, info, note, caution)
2. Code block (dark background, syntax highlighting)
3. Page header (dark bg, 3px red border, metadata)
4. Page footer (dark bg, 3px red border-top, mirrors header)
5. Inline code (subtle bg, 1px border, mono font)
6. Skip link (accessibility, focus-reveal)
7. Selection styling (primary bg, branded)
8. Focus-visible (3px solid primary, WCAG compliant)

#### Tension-Test Agent Found 9 Different Components:
(From 15 tension-test layouts: Boris × 5, Gas Town × 5, Playbook × 5)

1. Quote/annotation (purple border-left, italic serif)
2. Key principle callout (red border-left, bold)
3. Warning/anti-pattern (coral border-left)
4. Code block (dark bg, mono font)
5. Data table (grid, mono headers)
6. Numbered principle list (counter-based or flex-num)
7. Vertical workflow chain (steps + arrows)
8. Generic grid container (2-col, 3-col, 4-col, auto-fit)
9. Generic border box (3px border, padding 24px)

#### Components NEITHER Counted:
(Found in explorations but not systematically inventoried)

- File tree (DD-001, DD-003) — generic file directory display
- Decision matrix (DD-001, DD-003) — rows/columns comparison grid
- Q&A pairs (OD-001, OD-006) — question/answer conversational format
- Confidence badge (OD-004) — small colored indicator
- Dense grid (DD-001) — tightly-packed card layout
- Central role component (Gas Town layouts) — large bordered featured element with badge

### The Honest Conclusion

**9 was an analytical estimate, NOT an exhaustive audit.**

A proper programmatic scan across all 30+ HTML files (DD-001 through CD-006) would likely find **12-18+ Tier 2 candidates**.

**The gap:** We have NOT done this audit yet. The component inventory is based on cross-file comparison of 12-15 representative files, not a comprehensive programmatic scan.

**Implication:** Phase C (Component Extraction) should BEGIN with an exhaustive component inventory across all exploration files before extraction begins.

---

### The Confirmed Universal Components

These 9 component types appear across ALL metaphors with 95%+ CSS overlap:

#### 2.1 Callout Component Family

**Structure:** 2-zone (label + body), 4px left border, uppercase label

**HTML template:**
```html
<div class="callout callout--note">
  <div class="callout__label">NOTE</div>
  <div class="callout__body">
    Content here. Callout body supports multiple paragraphs.
  </div>
</div>
```

**Core CSS (invariant):**
```css
.callout {
  border-left: var(--border-left-width) solid;  /* 4px */
  padding: var(--callout-padding, 20px 24px);
  margin: var(--callout-margin, 24px 0);
  background: var(--callout-bg, var(--color-zone-sparse));
}

.callout__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);           /* 12px */
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-2);
  display: block;
}

.callout__body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
}
```

**Accent variants:**
```css
.callout--note {
  border-left-color: var(--accent-blue);
}
.callout--note .callout__label { color: var(--accent-blue); }

.callout--tip {
  border-left-color: var(--accent-green);
}
.callout--tip .callout__label { color: var(--accent-green); }

.callout--gotcha {
  border-left-color: var(--accent-coral);
}
.callout--gotcha .callout__label { color: var(--accent-coral); }

.callout--caution {
  border-left-color: var(--accent-amber);
}
.callout--caution .callout__label { color: var(--accent-amber); }

.callout--essence {
  border-left-color: var(--accent-purple);
}
.callout--essence .callout__label { color: var(--accent-purple); }
.callout--essence .callout__body {
  font-family: var(--font-display);  /* Soul Piece: Archivist speaks in serif */
  font-style: italic;
}
```

**Context adaptation via CSS custom properties:**
```css
/* Example: Pipeline-generated context override for geological metaphor */
.stratum--compressed .callout {
  --callout-padding: 16px 24px;
  --callout-bg: transparent;
  --callout-margin: 20px 0;
}
```

**Names across metaphors:**
- Forensics: `.callout-essence`, `.callout-tip`, `.callout-gotcha`
- Tension-test: `.marginalia`, `.fossil`, `.craftsman-note`, `.master-annotation`

**Best extraction source:** AD-003 (cleanest BEM structure) or CD-006 (most variants)

**Line count:** ~50 lines

**Stability:** 95% CSS overlap across all metaphors

---

#### 2.2 Code Block Component

**Structure:** Dark background + syntax highlighting

**HTML template:**
```html
<pre><code>
<span class="kw">const</span> greeting = <span class="st">"Hello, world!"</span>;
<span class="cm">// This is a comment</span>
<span class="fn">console</span>.<span class="fn">log</span>(greeting);
</code></pre>
```

**Core CSS:**
```css
pre {
  background: var(--color-text);    /* #1A1A1A dark */
  color: var(--color-background);   /* #FEF9F5 light text */
  border: 3px solid var(--color-border);  /* Cat 1 structural */
  padding: var(--code-padding, 24px 32px);
  margin: var(--code-margin, 24px 0);
  font-family: var(--font-mono);
  font-size: var(--type-code);      /* 0.875rem / 14px */
  line-height: 1.5;
  overflow-x: auto;
}

pre code {
  background: none;
  border: none;
  padding: 0;
  font-size: inherit;
}

/* Syntax highlighting tokens */
.kw { color: var(--syntax-keyword); }     /* Keywords */
.st { color: var(--syntax-string); }      /* Strings */
.cm { color: var(--syntax-comment); }     /* Comments */
.fn { color: var(--syntax-function); }    /* Functions */
.ty { color: var(--syntax-type); }        /* Types */
.nu { color: var(--syntax-number); }      /* Numbers */
.pu { color: var(--syntax-punctuation); } /* Punctuation */

/* Inline code */
code:not(pre code) {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--color-border-subtle);  /* #F0EBE3 */
  padding: 2px 6px;
  border: 1px solid var(--color-border);   /* Cat 3 micro */
}
```

**Best extraction source:** CD-006 (most complete syntax palette)

**Line count:** ~40 lines

**Stability:** 98% CSS overlap

---

#### 2.3 Page Header Component

**Structure:** Dark background + 3px red border + metadata + skip link

**HTML template:**
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
<header>
  <div class="header-inner">
    <div class="header-meta">
      DOCUMENTATION
      <span class="version-badge">V2</span>
    </div>
    <h1 class="header-title">Page Title</h1>
    <p class="header-subtitle">Optional subtitle or page description</p>
  </div>
</header>
```

**Core CSS:**
```css
header {
  background: var(--color-text);        /* #1A1A1A */
  color: var(--color-background);       /* #FEF9F5 */
  border-bottom: 3px solid var(--color-primary);  /* Cat 1 structural */
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-8);  /* 64px 32px */
}

.header-meta {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--type-meta);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}

.version-badge {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  padding: 2px 8px;
  border: 1px solid currentColor;
  letter-spacing: 0.1em;
}

.header-title {
  font-family: var(--font-display);
  font-size: var(--type-page);
  color: var(--color-background);
  margin-bottom: var(--space-4);
  line-height: 1.15;
}

.header-subtitle {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: var(--type-body);
  color: var(--color-text-secondary);
  max-width: 70ch;
  line-height: 1.6;
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--color-primary);
  color: var(--color-background);
  padding: 8px 16px;
  z-index: 1000;
  font-family: var(--font-body);
  font-size: 14px;
  text-decoration: none;
}
.skip-link:focus {
  top: 0;
}
```

**Best extraction source:** CD-006 (full accessibility + metadata)

**Line count:** ~30 lines

**Stability:** 100% HTML, 94% CSS

---

#### 2.4 Data Table Component

**Structure:** Grid layout, mono headers, 3px/1px border categories

**Core CSS:**
```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
}

.data-table th {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: left;
  padding: 12px 16px;
  border-bottom: 3px solid var(--color-border);  /* Cat 1 structural */
  background: var(--color-zone-sparse);
}

.data-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border);  /* Cat 2 separator */
  line-height: 1.6;
}

.data-table tbody tr:last-child td {
  border-bottom: none;
}

@media (max-width: 768px) {
  .data-table {
    font-size: 0.8125rem;
  }
}
```

**Best extraction source:** Any AD/CD file (stable pattern)

**Line count:** ~20 lines

**Stability:** 97% CSS overlap

---

#### 2.5 Page Footer Component

**Structure:** Mirrors header (dark bg, 3px red border-top)

**Core CSS:**
```css
footer {
  background: var(--color-text);
  color: var(--color-background);
  border-top: 3px solid var(--color-primary);  /* Cat 1 structural */
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-12) var(--space-8);
}

.footer-meta {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  text-align: center;
}
```

**Best extraction source:** CD-006

**Line count:** ~20 lines

**Stability:** 96% CSS overlap

---

#### 2.6 Generic Container Component

**Structure:** Max-width, centered, responsive padding

**Core CSS:**
```css
.page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-12) var(--space-8);  /* 48px 32px */
}

@media (max-width: 768px) {
  .page-container {
    padding: var(--space-8) var(--space-4);  /* 32px 16px */
  }
}
```

**Line count:** ~15 lines

**Stability:** 100%

---

#### 2.7-2.9 Remaining Universal Components

**Inline Code** (~10 lines): Subtle background, 1px border, mono font. Used for in-paragraph code references.

**Focus-Visible** (~5 lines): 3px solid primary, 2px offset. WCAG-compliant.

**Selection Styling** (~5 lines): Primary bg, background text color. Soul branded.

---

### Total Tier 2 Extractable

**~175 lines across 9 component types**

**Coverage:** 60-70% of any exploration file's CSS

---

## 3. TIER 2.5 PATTERN CATALOG

### What Makes a Pattern Tier 2.5?

**The Test:** Can you write the CSS once and have it work across different metaphors?
- **YES, CSS reusable + judgment required** → Tier 2.5
- **NO, CSS itself is metaphor-specific** → Tier 3

**The Metaphor:** Tier 2.5 patterns are TOOLS. A hammer works in any workshop. The DECISION to use the hammer is compositional.

---

### 3.1 Bento Grid System

**Invented in:** AD-003
**Reused in:** CD-005, CD-006
**Purpose:** Task-based content with hierarchical importance (ISLANDS density pattern)

**CSS Mechanism (~25 lines):**
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--bento-gap, 24px);
}

.bento-cell {
  border: 3px solid var(--color-border);
  padding: var(--space-6);
  background: var(--color-zone-dense);
}

/* Size modifiers via grid-column/grid-row span */
.bento-cell--large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-cell--wide {
  grid-column: span 2;
}

.bento-cell--tall {
  grid-row: span 2;
}
```

**Usage Guidance (~110 lines):**

**When to use:**
- Content with varying importance levels requiring spatial hierarchy
- Task-based documentation where items have different conceptual weight
- Reference indexes where topics have different coverage depth

**Application:**
- Grid cells ARE islands; grid gaps ARE sparse ocean (AD-F-009)
- Cell SIZE creates hierarchy (AD-F-010)
- Use span modifiers (large/wide/tall) for importance differentiation:
  - 2x2 large cell = conceptual anchor
  - 2x1 wide cell = secondary importance
  - 1x1 standard cell = tertiary content

**Responsive strategy:**
- At 768px: columns collapse to 1-2 max
- At 480px: all cells full-width stack
- Natural responsive story: floor plan narrows, rooms stack vertically

**DO NOT use for:**
- Sequential content (use F-pattern or CRESCENDO instead)
- Narrative/tutorial content (linear flow breaks with random-access grid)
- Uniform importance content (creates grid monotony — top audit finding)
- More than 12 total cells without grouping/breathing zones

**Metaphor contexts:**
- Floor plan: Rooms by size/importance
- Task dashboard: Cards by priority
- Reference index: Topics by coverage depth
- Component gallery: Items by usage frequency

**Key finding from CD-005 audit:** Bento grid responsive overflow at 768px was #1 CRITICAL. Must test at 768px and ensure cells don't exceed container.

---

### 3.2 Solid Offset Depth

**Invented in:** OD-001 (EXT-CREATIVE-001)
**Reused in:** OD-004, OD-006, AD-005, AD-006
**Purpose:** Featured elements requiring visual emphasis WITHOUT shadows

**CSS Mechanism (~15 lines):**
```css
.featured-element {
  position: relative;
}

.featured-element::after {
  content: '';
  position: absolute;
  top: var(--offset-y);    /* 4px */
  left: var(--offset-x);   /* 4px */
  width: 100%;
  height: 100%;
  background: var(--offset-color);  /* #1A1A1A */
  z-index: -1;
}
```

**Usage Guidance (~80 lines):**

**When to use:**
- Featured elements needing "weight" or "presence"
- Conceptual anchors (1-2 per page maximum)
- Hero content blocks
- Primary navigation elements

**Application:**
- Apply to SPARSE elements only (1-2 per page max)
- Works best with solid backgrounds (white, zone colors)
- Offset creates depth WITHOUT violating soul constraint (no box-shadow)

**DO NOT use for:**
- Repeated grid items (creates visual chaos)
- Dense content zones (offset gets crowded)
- Elements near page edges (offset gets clipped)
- More than 2 elements per page (dilutes featured status)

**Metaphor contexts:**
- Geological: "Outcrop" or "exposed layer" features
- Archival: "Unsealed" or "priority" documents
- Elevation: "Lookout point" or "cairn" markers
- Workshop: "Featured tool" or "master workpiece"

**Technical notes:**
- Parent must have `position: relative`
- Works with `::before` if you need content overlay + offset
- Offset color should be `--color-text` (#1A1A1A) for consistency

---

### 3.3 Scroll Witness TOC

**Invented in:** OD-001 (EXT-CREATIVE-003)
**Reused in:** OD-006, AD-006
**Purpose:** Multi-section pages requiring position tracking

**CSS Mechanism (~35 lines):**
```css
.scroll-witness {
  position: sticky;
  top: var(--space-8);
  background: var(--color-zone-breathing);
  border: 3px solid var(--color-border);
  padding: var(--space-8);
}

.scroll-witness__item {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  padding: var(--space-1) 0;
  transition: color var(--transition-standard);
}

.scroll-witness__item.active {
  color: var(--color-primary);
  font-weight: 600;
}

.scroll-witness__number {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  min-width: 24px;
}

.scroll-witness__title {
  flex: 1;
}

.scroll-witness__density {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  margin-left: auto;
}
```

**Usage Guidance (~70 lines):**

**When to use:**
- Multi-section pages (5+ sections) where reader position tracking adds value
- Long-form content with clear section structure
- Documentation with non-linear access patterns

**Application:**
- Add `.active` class to current section via scroll intersection observer
- Density labels optional (remove if not using density patterns)
- Position: `sticky` works for sidebar TOC

**DO NOT use for:**
- Short pages (< 5 sections)
- Pages with no clear section structure
- Mobile-first layouts (sticky behavior breaks on narrow viewports below 768px)

**Metaphor contexts:**
- Narrative: Chapter progress tracking
- Geological: Depth gauge showing current stratum
- Elevation: Altitude marker showing current elevation zone
- Curriculum: Lesson progress indicator

**Implementation note:** Requires JavaScript for scroll intersection observer. CSS provides visual state only.

---

### 3.4 Drop Cap

**Invented in:** OD-006 (EXT-CREATIVE-005)
**Reused in:** AD-006, CD-006
**Purpose:** Section openings for editorial/narrative content

**CSS Mechanism (~10 lines):**
```css
.drop-cap::first-letter {
  font-family: var(--font-display);
  font-size: 3.5em;
  float: left;
  line-height: 0.8;
  margin-right: var(--space-2);
  margin-top: 4px;
  color: var(--color-primary);
}
```

**Usage Guidance (~60 lines):**

**When to use:**
- Section openings for editorial/narrative content
- First paragraph of major sections only
- Content with formal or manuscript-like character

**Application:**
- Works best with left-aligned text (not justified)
- Requires paragraph min-width ~300px to prevent awkward wrapping
- Apply to first paragraph of section, not every paragraph

**DO NOT use for:**
- Every section (overuse cheapens effect)
- Code-heavy content (conflicts with technical tone)
- Mobile viewports below 400px (wrapping becomes problematic)
- Dense content zones (creates excessive whitespace)

**Metaphor contexts:**
- Codex/Manuscript: Illuminated capitals
- Editorial: Magazine-style section opens
- Narrative: Chapter markers
- Formal documentation: Section emphasis

---

### 3.5 Confidence Encoding (Border-Weight Gradient)

**Invented in:** OD-004 (geological strata)
**Reused in:** OD-006, CD-004, CD-006
**Purpose:** Content with clear certainty gradients

**CSS Mechanism (~20 lines):**
```css
.confidence--established {
  border-left: 4px solid var(--color-text);  /* Highest confidence */
  padding: var(--space-10);  /* 40px */
}

.confidence--probable {
  border-left: 3px solid var(--color-text);
  padding: var(--space-8);  /* 32px */
}

.confidence--speculative {
  border-left: 2px solid var(--color-text);  /* INTENTIONAL semantic use per Rule 5 inversion */
  padding: var(--space-6);  /* 24px */
}

.confidence--open {
  border-left: 1px solid var(--color-border);  /* Lowest confidence / open question */
  padding: var(--space-4);  /* 16px */
}
```

**Usage Guidance (~120 lines):**

**CRITICAL WARNING:**

This is the ONLY pattern where 2px borders are semantically valid. DO NOT use 2px borders elsewhere. The comprehensive audit eliminated the "2px epidemic" (108 CSS declarations, 1000+ instances). This pattern is the ONLY intentional exception per Rule 5 inversion.

**When to use:**
- Content with clear certainty gradients (established → probable → speculative → open)
- Research findings documentation
- Decision logs with confidence levels
- Scientific documentation with graded evidence strength

**Visual encoding:**
- **4px border** = Established fact / high confidence
- **3px border** = Probable / moderate confidence
- **2px border** = Speculative / low confidence (ONLY semantic use)
- **1px border** = Open question / lowest confidence

**Density correlation:**
- **Inverse relationship:** certain = sparse (40px padding), uncertain = dense (16px padding)
- **Rationale:** Confident statements need breathing room to be authoritative; speculative content packs tighter to signal tentativeness

**Fractal application:**
- **Page level:** Sections as strata (4 confidence zones)
- **Section level:** Intro (established) → Detail (probable) → Evidence (speculative)
- **Component level:** Callout label (meta) → callout body (content)

**DO NOT:**
- Extract this as a generic "4px border component" — the border-weight IS the confidence encoding
- Use outside geological/confidence contexts — meaning requires the metaphor
- Apply border-weight gradient without documented semantic meaning in content

**Metaphor contexts:**
- Geological: Strata by consolidation (bedrock vs sediment)
- Scientific: Findings by confidence level
- Decision logs: Certainty gradient
- Research documentation: Evidence strength tiers

**The Boundary Question:**

Is this Tier 2.5 or Tier 3? The mechanism is extractable, but the semantic meaning (what do the widths MEAN?) requires content-specific judgment. Current classification: **Tier 2.5** because the CSS pattern is reusable across multiple metaphors (geological, scientific, decision), even though each metaphor must document its semantic interpretation.

---

### Total Tier 2.5

**CSS:** ~145 lines across 5 patterns
**Guidance:** ~440 lines of mandatory usage documentation
**Total:** ~585 lines (CSS + docs)

**Coverage:** Extends Tier 1+2 coverage from 60-70% to ~70-75% when applicable.

---

## 4. THE TIER 2.5 VS TIER 3 BOUNDARY

### The Boundary Question

**The Test:** Can you write the CSS once and have it work across different metaphors?
- **YES, CSS reusable + judgment required** → Tier 2.5
- **NO, CSS itself is metaphor-specific** → Tier 3

**The Metaphor:**
- **Tier 2.5 patterns are TOOLS.** A hammer works in any workshop. The DECISION to use the hammer is compositional.
- **Tier 3 patterns are THE WORKSHOP ITSELF.** The spatial arrangement that IS the metaphor.

---

### The Gradient (Not a Wall)

This is NOT a binary classification. Some patterns sit on the boundary.

**Boundary Cases:**

#### Confidence Encoding
- **CSS mechanism:** Extractable (4px/3px/2px/1px border-weight gradient)
- **Semantic meaning:** Content-dependent (geological=consolidation, scientific=evidence strength, decision=certainty)
- **Classification:** Tier 2.5 (mechanism reusable, meaning documented per metaphor)

#### Fractal Annotations
- **CSS mechanism:** Somewhat extractable (persistent sidebar, vertical-lr text, rotation)
- **Requirement:** Specific content structure (must demonstrate fractal scales)
- **Classification:** Tier 2.5/3 boundary (works in codex, manuscript, editorial, but requires fractal content)

#### Q&A Conversational Pairs
- **CSS mechanism:** Simple (width variation, background differentiation)
- **Structural requirement:** Conversational STRUCTURE is Tier 3, width mechanism is Tier 2.5
- **Classification:** Tier 2.5 (mechanism) + Tier 3 (conversational flow)

---

### The Implication

**A richer Tier 2.5 library could push borderline pages from Track 2 to Track 1.**

Every pattern promoted from Tier 3 to Tier 2.5 potentially reduces the Track 2 queue.

**Example:** If we extract "conversational width variation" as a Tier 2.5 pattern with usage guidance, Q&A-based pages might become Track 1 (assembly) instead of Track 2 (composition).

**Open research question:** Does the Track 2 percentage (currently estimated 50-60%) change significantly if we expand Tier 2.5 from 5 patterns to 10-12 patterns?

---

## 5. TIER 3 COMPOSITIONAL STRATEGY RECIPES

### What Gets Documented (NOT Extracted)

Tier 3 is NOT extractable CSS. It's compositional strategies documented as **prose patterns** that teach WHEN and HOW to compose Tier 3 fresh from Tier 1+2 building blocks.

**Pattern Documentation Format:**

Each high-richness metaphor-driven pattern discovered across explorations receives a prose recipe documenting:
1. Metaphor structure (what the metaphor IS)
2. When to use it (content/tension fit)
3. Tensions this resolves
4. CSS mechanisms used (references to Tier 1/2/2.5)
5. Fractal application (4 scales)
6. DO NOT use for (anti-patterns)
7. Composition recipe (step-by-step)
8. Real-world example file

---

### 5.1 Geological Confidence Stratification

**Metaphor:** Geological core sample with strata representing confidence gradients

**When to use:**
- Content has clear certainty gradients (established → probable → speculative → open)
- Research documentation, decision logs, confidence-stratified findings
- Reader needs to distinguish factual bedrock from speculative hypotheses

**Tensions this resolves:**
- **T1:** Interconnected system (strata are connected but distinct)
- **T3:** Information hierarchy (confidence = visual weight)
- **T5:** Spatial topology (vertical descent = increasing uncertainty)
- **T7:** Accessibility (graded certainty is semantic, not decorative)

**Metaphor structure:**
- **Strata** = horizontal sections with distinct backgrounds
- **Depth** = confidence level (deeper = less certain)
- **Compression** = inverse density (certain = sparse, uncertain = dense)
- **Border weight** = consolidation gradient (4px=bedrock, 1px=sediment)

**CSS mechanisms used** (references Tier 1/2/2.5):
1. **Border-weight gradient** (Tier 2.5 confidence-encoding pattern)
2. **Progressive background darkening** (Tier 1 zone tokens: sparse → dense → breathing → bedrock)
3. **Padding inverse to confidence** (Tier 1 spacing scale: 40px → 32px → 24px → 16px)
4. **Typography compression at depth** (Tier 1 type scale, font-size reduction optional)

**Fractal application:**
- **Page level:** Sections as strata (4 confidence zones: established/probable/speculative/open)
- **Section level:** Intro (established) → Detail (probable) → Evidence (speculative)
- **Component level:** Callout label (meta) → callout body (content)
- **Character level:** Headings (display serif, authoritative) → Body (sans-serif, neutral)

**DO NOT:**
- Extract this as a generic "4px border component" — the border-weight IS the confidence encoding
- Use outside geological/confidence contexts — meaning requires the metaphor
- Apply border-weight gradient without documented semantic meaning
- Use uniform padding (breaks inverse correlation between confidence and density)

**Composition recipe:**
```
1. Start with Tier 1 zone tokens (sparse, dense, breathing, bedrock)
2. Apply Tier 2.5 confidence-encoding border weights per content certainty
3. Set padding INVERSE to confidence:
   - Established (4px border): 40px padding (var(--space-10))
   - Probable (3px border): 32px padding (var(--space-8))
   - Speculative (2px border): 24px padding (var(--space-6))
   - Open (1px border): 16px padding (var(--space-4))
4. Use Tier 2 callouts within strata for featured findings
5. Background progression: sparse → dense → breathing → bedrock (darkest)
6. Fractal-check at 4 scales: page/section/component/character
7. Verify compression ratio ceiling: deepest ≥ 40% of shallowest (16px ≥ 40% of 40px ✓)
```

**Real-world example:** `explorations/organizational/OD-004-confidence.html`

**Key audit finding:** OD-004 was top 3 in post-fix audit (YES vote). The confidence encoding was IMPLICIT (border weight speaks without labels), which correlated with higher quality.

---

### 5.2 Narrative CRESCENDO + F-Pattern

**Metaphor:** Story arc building to climax with vertical scan pattern

**When to use:**
- Tutorial content with progressive complexity
- Getting-started guides with building confidence
- Step-by-step workflows culminating in complete solution
- Content where reader walks WITH the guide (not ahead, not behind)

**Tensions this resolves:**
- **T2:** Warmth and trust (gradual approach, safe progression)
- **T4:** Intimacy (reader walks WITH the guide)
- **T5:** Spatial topology (descent = progression)
- **T6:** Temporal pacing (CRESCENDO rhythm: slow → fast → slow)

**Metaphor structure:**
- **CRESCENDO density:** Sparse opening → dense climax → sparse resolution
- **F-Pattern axis:** Vertical spine (headings left-aligned) + horizontal detail
- **Sections** = crescendo phases (introduction → building → climax → resolution)
- **Rhythm:** Breathing (80px) → Working (32px) → Peak (16px) → Recovery (40px)

**CSS mechanisms used:**
1. **Progressive padding compression** (Tier 1 spacing scale: 80px → 32px → 16px → 40px)
2. **F-pattern via left-aligned headings** (`.section-heading { max-width: 70%; }` creates visual spine)
3. **Background zones shift** (Tier 1 zone tokens: sparse → dense → breathing)
4. **Tier 2 callouts at transition points** (mark phase boundaries)
5. **Tier 2 code blocks at climax** (dark bg signals peak density)

**Fractal application:**
- **Page level:** 4-phase crescendo (intro 80px / build 32px / climax 16px / resolution 40px)
- **Section level:** Heading → explanation → code example (sparse → dense)
- **Component level:** Callout label (sparse, 12px meta) → callout body (denser, 16px body text)
- **Character level:** Line-height variation (1.7 sparse → 1.5 dense)

**DO NOT:**
- Use for reference documentation (ISLANDS better for random-access)
- Apply to multi-path content (CRESCENDO is linear narrative)
- Over-compress climax zone (min 32px padding floor even at peak density — guardrail violation)
- Skip resolution phase (abrupt ending creates dissonance)

**Composition recipe:**
```
1. Classify content into 4 CRESCENDO phases
2. Set progressive padding:
   - Introduction: 80px (var(--space-20))
   - Building: 32px (var(--space-8))
   - Climax: 16px (var(--space-4)) — BUT verify ≥ 32px guardrail
   - Resolution: 40px (var(--space-10))
3. Apply F-pattern via left-aligned headings:
   - h2 { max-width: 70%; text-align: left; }
   - Creates vertical spine for eye tracking
4. Use Tier 2 code blocks at climax (dark bg signals peak)
5. Add breathing zone after climax (48px section gap + zone-breathing bg)
6. Verify compression ratio: 16px ≥ 40% of 80px (20% — FAILS if climax goes below 32px)
7. Adjust: Use 32px at climax to meet 40% compression ratio ceiling
```

**Real-world example:** `explorations/organizational/OD-002-narrative.html` + `explorations/axis/AD-002-f-pattern.html`

**Key audit finding:** OD-002 perceptual audit would have flagged compression ratio violation if climax zone used 16px. Guardrail enforcement (32px padding floor) prevents this.

---

### 5.3 Hub-Spoke Spatial Layout

**Metaphor:** Central hub with radiating spokes

**When to use:**
- Overview pages with multiple topic branches
- Architecture diagrams requiring central concept
- Spatial documentation (API modules radiating from core)
- Content where one concept connects to many sub-concepts

**Tensions this resolves:**
- **T1:** Interconnected system (hub connects all spokes)
- **T3:** Information hierarchy (hub = primary, spokes = secondary)
- **T5:** Spatial topology (radial arrangement IS meaning)
- **T8:** Scale invariance (fractal: hub-spoke at page/section/component levels)

**Metaphor structure:**
- **Hub** = central bordered box (Tier 2 container + featured emphasis)
- **Spokes** = surrounding grid of connected topics
- **Breathing zones** between hub and spokes create radial whitespace
- **Visual connections** via shared border color or alignment

**CSS mechanisms used:**
1. **Hub:** Tier 2 container + Tier 2.5 solid offset for emphasis
2. **Spokes:** Tier 2.5 bento grid (auto-fit columns, 2-4 cols)
3. **Radial whitespace** via margin on hub (creates implied center)
4. **Tier 2 callouts** for spoke content
5. **Shared border color** (--color-primary) connects hub to spokes visually

**Fractal application:**
- **Page level:** Hub (core concept, 2x2 featured) + spokes (related topics in bento grid)
- **Section level:** Intro (hub) + details (spokes arranged around)
- **Component level:** Callout (mini-hub) referencing surrounding context
- **Character level:** Bold hub text, normal spoke text

**DO NOT:**
- Use for linear narratives (breaks sequential flow)
- Create more than 1 hub per page (dilutes centrality, violates metaphor)
- Exceed 6-8 spokes (visual chaos, cognitive overload)
- Use without clear conceptual centrality (hub must be genuinely primary)

**Composition recipe:**
```
1. Build hub as Tier 2 container + solid offset (featured-element)
2. Arrange spokes in Tier 2.5 bento grid around hub:
   - grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
   - gap: 24px
3. Use 48px+ margin on hub to create radial breathing
4. Connect spokes to hub visually:
   - Shared border color (border: 3px solid var(--color-primary))
   - OR alignment (center hub, grid wraps around)
5. Keep spoke count 6-8 max
6. Apply Tier 2 callouts within spokes for sub-emphasis
7. Verify min container width: 940px (65% of 1440px viewport)
```

**Real-world example:** `explorations/organizational/OD-005-spatial.html` + `explorations/axis/AD-005-choreography.html`

**Gas Town metaphor variant:** Central role component (`.main-reactor`, `.main-hall`) with surrounding grid. Same hub-spoke structure, different metaphor vocabulary.

---

### 5.4 Bento Task Islands

**Metaphor:** Distinct territories with clear boundaries and mixed density

**When to use:**
- Task-based documentation (each task is an island)
- Component galleries (each component is an island)
- Reference indexes with varying importance (island size = importance)
- Content requiring random access (not sequential reading)

**Tensions this resolves:**
- **T1:** Interconnected system (islands connected by ocean of whitespace)
- **T3:** Information hierarchy (island size = importance)
- **T5:** Spatial topology (grid layout IS the organizational structure)
- **T9:** Completeness vs focus (islands provide containment + breathing)

**Metaphor structure:**
- **Islands** = bento grid cells (bordered boxes)
- **Ocean** = grid gaps (whitespace between islands)
- **Size variation** = importance encoding (2x2 large = anchor, 1x1 small = tertiary)
- **Uniform borders** = each island is self-contained

**CSS mechanisms used:**
1. **Tier 2.5 bento grid** (display: grid, auto-fit, span modifiers)
2. **Tier 2 container** for each cell (border, padding, background)
3. **Tier 1 spacing tokens** for gap size (24px standard, 32px breathing)
4. **Tier 2 callouts** within islands for sub-emphasis

**Fractal application:**
- **Page level:** Grid of task islands (6-12 cells max)
- **Section level:** Each island contains intro + details
- **Component level:** Island heading + island content (bordered box)
- **Character level:** Mono headers (task labels) + serif/sans content

**DO NOT:**
- Use uniform cells only (creates grid monotony — top audit finding in CD-005)
- Exceed 12 total cells without grouping/breathing zones
- Apply to narrative/sequential content (use F-pattern instead)
- Use cells smaller than 280px min-width (content gets cramped)

**Composition recipe:**
```
1. Apply Tier 2.5 bento grid:
   - grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
   - gap: 24px
2. Create cells with Tier 2 container pattern:
   - border: 3px solid var(--color-border)
   - padding: var(--space-6) (24px)
   - background: var(--color-zone-dense)
3. Assign span modifiers for importance:
   - .bento-cell--large (2x2): 1-2 conceptual anchors
   - .bento-cell--wide (2x1): 2-3 secondary items
   - .bento-cell (1x1): remaining tertiary items
4. Verify responsive: At 768px, 1-2 cols max. At 480px, full-width stack.
5. Test at 768px for overflow (CD-005 CRITICAL finding)
6. Keep total cells ≤ 12 or introduce breathing zones between groups
```

**Real-world example:** `explorations/axis/AD-003-bento.html`, `explorations/combination/CD-005-bento.html`

**Key audit finding:** CD-005 bento grid responsive overflow at 768px was #1 CRITICAL. Must test at 768px and ensure cells don't exceed container. Add `overflow-x: auto` on container OR reduce min-width to 240px at mobile.

---

### 5.5 Editorial Synthesis

**Metaphor:** Columnar flow with pull quotes and sidebar annotations

**When to use:**
- Essay-length content (2000+ words)
- Editorial/opinion pieces requiring authority + accessibility
- Content with supporting quotes or annotations
- Formal documentation with manuscript character

**Tensions this resolves:**
- **T2:** Warmth and trust (readable column width, generous line-height)
- **T3:** Information hierarchy (main column = primary, sidebar = secondary)
- **T4:** Intimacy (pull quotes create conversational pauses)
- **T7:** Accessibility (max-width 70ch, line-height 1.7)

**Metaphor structure:**
- **Columnar flow** = max-width constraint (70ch) creates optimal readability
- **Pull quotes** = featured callouts with display serif, larger size
- **Sidebar annotations** = marginalia (purple border-left, italic serif)
- **Typographic hierarchy** = display font titles, serif/sans body mix

**CSS mechanisms used:**
1. **Max-width control** (`.editorial-column { max-width: 70ch; }`)
2. **Tier 2.5 drop cap** for section openings
3. **Tier 2 callouts** (essence variant) for pull quotes
4. **Tier 2.5 solid offset** for featured pull quotes (1 per page max)
5. **Tier 1 type scale** (display for titles, body for paragraphs)

**Fractal application:**
- **Page level:** Main column + sidebar (if annotations present)
- **Section level:** Drop cap opening + paragraphs + pull quote
- **Component level:** Callout (pull quote) within section
- **Character level:** Serif (display font) for emphasis, sans (body font) for content

**DO NOT:**
- Use for reference documentation (columnar flow breaks random access)
- Apply to code-heavy content (conflicts with technical tone)
- Exceed 70ch line length (readability degrades)
- Use more than 1 solid-offset pull quote per page (dilutes featured status)

**Composition recipe:**
```
1. Create main column with max-width: 70ch
2. Apply Tier 2.5 drop cap to first paragraph of major sections:
   - .drop-cap::first-letter (3.5em, display font, red)
3. Insert Tier 2 callout--essence for pull quotes:
   - Purple border-left, italic serif, 1.0625rem
4. Optional: Apply Tier 2.5 solid offset to 1 featured pull quote
5. Use Tier 1 type scale:
   - h2: var(--type-section) (1.625rem)
   - p: var(--type-body) (1rem), line-height 1.7
6. Verify min line-height: 1.5 (guardrail), actual 1.7 (exceeds)
7. Verify characters per line: 45-80 (70ch = ~70-75 chars ✓)
```

**Real-world example:** `explorations/organizational/OD-006-synthesis.html`, `explorations/axis/AD-006-synthesis.html`

**Key audit finding:** OD-006 was top 3 in post-fix audit (YES vote). The editorial metaphor was IMPLICIT (typography speaks without labels), which correlated with higher quality.

---

### 5.6 Compound Sequential

**Metaphor:** Phase transitions with rhythm changes and theme variations

**When to use:**
- Multi-part documentation (installation → configuration → deployment)
- Workflow guides with distinct phases
- Content where each phase has different character (formal → technical → procedural)
- Sequential content requiring variety to maintain engagement

**Tensions this resolves:**
- **T6:** Temporal pacing (rhythm changes prevent monotony)
- **T9:** Completeness vs focus (each phase is self-contained)
- **T10:** Variety vs coherence (unified by sequential structure)
- **T5:** Spatial topology (vertical descent = progression through phases)

**Metaphor structure:**
- **Phase sections** = distinct background zones (sparse/dense/breathing)
- **Rhythm changes** = padding variation per phase (80px → 40px → 60px)
- **Theme variations** = typography shifts (display serif → mono → sans)
- **Transitional elements** = breathing zones (48px gaps) between phases

**CSS mechanisms used:**
1. **Tier 1 zone tokens** for phase backgrounds (sparse/dense/breathing rotation)
2. **Tier 1 spacing scale** for padding variation (80px/40px/60px)
3. **Tier 2 callouts** at phase boundaries (mark transitions)
4. **Tier 1 type scale** with font-family shifts per phase theme
5. **Breathing zones** (48px+ section gaps)

**Fractal application:**
- **Page level:** 3-5 phases (each with distinct background + padding + font)
- **Section level:** Phase intro + phase content + phase conclusion
- **Component level:** Callout marks transition between phases
- **Character level:** Font-family shifts encode phase theme

**DO NOT:**
- Use for content with no natural phase boundaries
- Apply uniform styling across phases (breaks compound metaphor)
- Skip breathing zones between phases (creates transition whiplash)
- Exceed 5 phases (cognitive overload, too much variety)

**Composition recipe:**
```
1. Divide content into 3-5 distinct phases
2. Assign backgrounds per phase (rotate Tier 1 zone tokens):
   - Phase 1: sparse (#FEF9F5)
   - Phase 2: dense (#FFFFFF)
   - Phase 3: breathing (#FAF5ED)
   - Repeat pattern for phases 4-5
3. Set padding per phase (vary rhythm):
   - Phase 1 (intro): 80px (generous opening)
   - Phase 2 (technical): 40px (working density)
   - Phase 3 (procedural): 60px (moderate breathing)
4. Add breathing zones between phases:
   - margin-bottom: var(--space-12) (48px minimum)
5. Optional: Font-family shifts per phase theme
6. Use Tier 2 callouts to mark phase transitions
7. Verify compression ratio: densest ≥ 40% of sparsest (40px ≥ 40% of 80px ✓)
```

**Real-world example:** `explorations/axis/AD-004-compound.html`

**Key audit finding:** Compound sequential risks transition jarring if breathing zones are insufficient. 48px minimum gap between phases prevents this.

---

### Total Tier 3 Documentation

**Not extractable as CSS.** Documented as:
- **6 high-richness pattern descriptions** (above)
- **~150 lines per pattern** (~900 lines total prose)
- **Cross-references** to Tier 1/2/2.5 mechanisms
- **Real-world exploration examples** (file paths)
- **Composition recipes** (step-by-step procedures)

---

## 6. EXTRACTION OUTPUT STRUCTURE

### Complete Directory Layout

```
extraction-output/

  # Tier 1: Atoms (~80 lines total)
  tier-1-tokens.css

  # Tier 2: Molecules (~175 lines total)
  tier-2-callouts.css              (~50 lines)
  tier-2-code-block.css            (~40 lines)
  tier-2-header.css                (~30 lines)
  tier-2-table.css                 (~20 lines)
  tier-2-footer.css                (~20 lines)
  tier-2-container.css             (~15 lines)

  # Tier 2.5: Reusable Patterns (~145 CSS + 440 guidance)
  tier-2.5-bento-grid.css          (~25 lines)
  tier-2.5-bento-grid.md           (~110 lines usage guidance)

  tier-2.5-solid-offset.css        (~15 lines)
  tier-2.5-solid-offset.md         (~80 lines usage guidance)

  tier-2.5-scroll-witness.css      (~35 lines)
  tier-2.5-scroll-witness.md       (~70 lines usage guidance)

  tier-2.5-drop-cap.css            (~10 lines)
  tier-2.5-drop-cap.md             (~60 lines usage guidance)

  tier-2.5-confidence.css          (~20 lines)
  tier-2.5-confidence.md           (~120 lines usage guidance)

  # Tier 3: Compositional Strategy Recipes (prose only)
  tier-3-patterns/
    geological-stratification.md   (~150 lines)
    narrative-crescendo.md         (~150 lines)
    hub-spoke-spatial.md           (~150 lines)
    bento-task-islands.md          (~150 lines)
    editorial-synthesis.md         (~150 lines)
    compound-sequential.md         (~150 lines)
```

**Total Extractable CSS:** ~400 lines (Tier 1 + 2 + 2.5)
**Total Documentation:** ~1,340 lines (Tier 2.5 guidance 440 + Tier 3 recipes 900)
**Coverage:** 60-70% of any exploration file's CSS via extracted base

---

## 7. HOW PIPELINE CONSUMES THE LIBRARY

### The Current Model (Inline Everything)

**Current explorations** (DD-001 through CD-006):
- Every file has complete `:root` token block (~80 lines)
- Every file re-implements callouts, code blocks, headers (~175 lines)
- Every file has unique Tier 3 CSS (~300-500 lines)
- **Total per file:** ~600-800 lines CSS
- **Duplication:** 95% CSS overlap in Tier 2 components across metaphors (wasteful)

---

### The New Model (Library + Pipeline)

**Extraction produces:**
```
extraction-output/
  tier-1-tokens.css              (~80 lines — LOAD ONCE)
  tier-2-*.css                   (~175 lines total — LOAD ONCE)
  tier-2.5-*.css + .md           (~145 CSS + 440 guidance)
  tier-3-patterns/*.md           (~900 lines prose)
```

**Pipeline generates** (per page):
```html
<!-- TIER 1+2: From library (frozen) -->
<link rel="stylesheet" href="extraction-output/tier-1-tokens.css">
<link rel="stylesheet" href="extraction-output/tier-2-callouts.css">
<link rel="stylesheet" href="extraction-output/tier-2-code-block.css">
<link rel="stylesheet" href="extraction-output/tier-2-header.css">
<!-- Load only needed Tier 2 components -->

<style>
/* TIER 3: Generated fresh per metaphor — ~200-350 lines */

/* Zone wrappers (metaphor-specific) */
.stratum {
  background: var(--color-zone-sparse);
  padding: var(--space-10);  /* 40px */
  margin-bottom: var(--space-4);
}

.stratum--compressed {
  background: var(--color-zone-dense);
  padding: var(--space-6);  /* 24px */
}

.stratum--bedrock {
  background: var(--color-text);  /* #1A1A1A */
  color: var(--color-background);
  padding: var(--space-4);  /* 16px */
}

/* Context overrides for Tier 2 components */
.stratum--compressed .callout {
  --callout-padding: 16px 24px;
  --callout-bg: transparent;
}

.stratum--bedrock .callout {
  --callout-padding: 12px 20px;
  --callout-bg: rgba(255, 255, 255, 0.05);
}

/* Metaphor-specific indicators (Tier 3 only) */
.depth-marker {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  position: absolute;
  left: -60px;
  top: 0;
}
</style>
```

---

### HTML Using Library Components

```html
<div class="stratum stratum--compressed">
  <!-- TIER 3: generated wrapper (metaphor-specific) -->

  <div class="depth-marker">250m</div>
  <!-- TIER 3: metaphor-specific indicator -->

  <div class="callout callout--note">
    <!-- TIER 2: from component library -->
    <div class="callout__label">FINDING</div>
    <div class="callout__body">
      At 250m depth, sediment compression increases sharply.
    </div>
  </div>

  <pre><code>
    <!-- TIER 2: from component library -->
    <span class="kw">const</span> pressure = depth * <span class="nu">0.1</span>;
  </code></pre>
</div>
```

---

### BEFORE vs AFTER Comparison

**BEFORE (current, everything inline):**
```html
<!-- File: OD-004-confidence.html -->
<style>
  /* 80 lines: :root tokens */
  /* 50 lines: callout system */
  /* 40 lines: code block */
  /* 30 lines: header */
  /* 350 lines: geological-specific Tier 3 */
  /* Total: ~550 lines CSS in <style> block */
</style>
```

**AFTER (library + pipeline):**
```html
<!-- File: geological-confidence-content-XYZ.html -->
<link rel="stylesheet" href="/tier-1-tokens.css">
<link rel="stylesheet" href="/tier-2-callouts.css">
<link rel="stylesheet" href="/tier-2-code-block.css">
<link rel="stylesheet" href="/tier-2-header.css">

<style>
  /* 200 lines: geological-specific Tier 3 ONLY */
  /* Tier 1+2 loaded from library */
  /* Total inline: ~200 lines (vs 550) */
</style>
```

**Savings:** 350 lines per page (~64% reduction in inline CSS)

---

### How Pipeline Sets CSS Custom Properties

**From tension-composition skill Phase 4.2 Translation Grammar:**

The pipeline generates Tier 3 CSS that REFERENCES Tier 2 components and SETS context via CSS custom properties:

```css
/* Pipeline-generated Tier 3 context overrides */

/* Sparse zone context */
.zone-sparse .callout {
  --callout-padding: 24px 28px;     /* More generous in sparse zones */
  --callout-margin: 32px 0;         /* More vertical breathing */
  --callout-bg: transparent;        /* Let zone background show through */
}

/* Dense zone context */
.zone-dense .callout {
  --callout-padding: 16px 20px;     /* Tighter in dense zones */
  --callout-margin: 16px 0;         /* Less vertical breathing */
  --callout-bg: var(--color-zone-breathing);  /* Subtle differentiation */
}

/* Bedrock zone context */
.zone-bedrock .callout {
  --callout-padding: 12px 20px;     /* Maximum compression */
  --callout-margin: 12px 0;
  --callout-bg: rgba(255, 255, 255, 0.05);  /* Dark zone, light callout */
  color: var(--color-background);   /* Inverted text */
}
```

---

### The 6 CSS Channels (From Skill Phase 4.2)

Every Tier 3 metaphor property expresses through these and ONLY these:

1. **Background color** — from Tier 1 zone palette (sparse/dense/breathing/bedrock)
2. **Border** — from Tier 1 border categories (4px structural, 3px structural, 1px separator)
3. **Typography** — from Tier 1 fonts + type scale (3 fonts, 6 sizes)
4. **Spacing** — from Tier 1 spacing scale (4-80px) + semantic aliases
5. **Layout** — flexbox (sequential), grid (parallel), or none (inline/block)
6. **Color accent** — from Tier 1 primary + 5 callout accents

**The pipeline's job:** Translate metaphor properties into these 6 channels using Tier 1 values.

---

## 8. OPEN QUESTIONS

### Q1: Is the component count really 9, or 12-18+?

**Current state:** 9 was an analytical estimate based on cross-file comparison of 12-15 representative files.

**Not yet done:** Exhaustive programmatic scan across all 30+ HTML files (DD-001 through CD-006).

**Likely outcome:** 12-18+ Tier 2 candidates if we audit comprehensively.

**Action required:** Phase C should BEGIN with component inventory before extraction.

---

### Q2: Which boundary cases belong in Tier 2.5 vs Tier 3?

**Current classification questions:**

- **Confidence encoding:** Tier 2.5 (CSS extractable, semantic meaning documented per metaphor)
- **Fractal annotations:** Tier 2.5/3 boundary (works in multiple metaphors but requires fractal content structure)
- **Q&A conversational pairs:** Tier 2.5 mechanism (width variation) + Tier 3 structure (conversational flow)
- **File tree:** Unclassified (appears in DD-001, DD-003 but not inventoried)
- **Decision matrix:** Unclassified (appears in DD-001, DD-003 but not inventoried)

**Action required:** Classify all discovered components during Phase C inventory.

---

### Q3: Does a richer Tier 2.5 library significantly reduce the Track 2 percentage?

**Current estimate:** Track 2 (composition) = 50-60% of pages (35-45 pages at 3-5h each)

**Hypothesis:** Expanding Tier 2.5 from 5 patterns to 10-12 patterns could push borderline pages from Track 2 to Track 1.

**Implication:** Every pattern promoted from Tier 3 to Tier 2.5 potentially reduces Track 2 queue (the migration bottleneck).

**Test:** During Phase B (Content Analysis), track how many "borderline Track 2" pages exist. If we extract additional patterns (Q&A, file tree, decision matrix), would those pages become Track 1?

---

### Q4: Are there undiscovered Tier 2 components in the 30+ HTML files we haven't audited?

**Current coverage:** Forensics analyzed 12 files. Tension-test analyzed 15 files. Some overlap.

**Gap:** 30+ total exploration files exist. Some may have components not yet discovered.

**Examples of potentially missed components:**
- Central role component (Gas Town only)
- Dense grid layouts (DD-001 specific?)
- Vertical workflow chain (appears in Boris, Playbook — already classified Tier 2)

**Action required:** Comprehensive audit in Phase C before extraction begins.

---

### Q5: Should Tier 3 recipes be MORE prescriptive or LESS?

**Current approach:** Recipes are ~150 lines each, include step-by-step composition procedures.

**More prescriptive argument:** Easier for Track 2 builders to follow, reduces creative burden, increases consistency.

**Less prescriptive argument:** More creative freedom, allows metaphor evolution, prevents template rigidity.

**Tension:** Track 2 is the migration bottleneck (3-5h per page). More prescriptive recipes might reduce time BUT could also reduce quality ceiling.

**Open question:** What is the right balance?

---

### Q6: How do we handle metaphor-specific vocabulary in Tier 3 generation?

**Example:** Geological metaphor uses `.stratum`, `.depth-marker`, `.mineral-vein`. Floor plan metaphor uses `.room`, `.corridor`, `.plaque`.

**Current approach:** Pipeline generates fresh class names per metaphor.

**Alternative:** Standardize generic Tier 3 class names (`.zone-wrapper`, `.metaphor-indicator`, `.featured-content`) and let metaphor live in documentation/comments only.

**Trade-off:**
- **Metaphor vocabulary:** More readable HTML, clearer intent, but creates namespace bloat
- **Generic vocabulary:** DRYer CSS, but loses semantic richness in HTML

**Open question:** Which approach serves maintainability better?

---

## CONCLUSION

### The Core Principle (Restated)

> "The metaphor shapes experience; the guardrails prevent it from breaking experience."

**This document IS the bridge:**
- **Tier 1+2 are the guardrails** (locked tokens ~80 lines, stable components ~175 lines)
- **Tier 2.5 provides the tools** (reusable patterns ~145 lines CSS + 440 lines guidance)
- **Tier 3 is the metaphor** (compositional strategies ~900 lines prose recipes)

**Total extractable:** ~400 lines CSS covering 60-70% of any file
**Total documentation:** ~1,340 lines guiding composition of remaining 30-40%

**The pipeline consumes this library** via two-layer architecture:
1. Load Tier 1+2 from library (CSS file refs)
2. Generate Tier 3 zone wrappers + CSS custom property overrides fresh per metaphor
3. Output: Library components arranged in pipeline-generated composition

**The migration reality:**
- **Track 1 (assembly):** Use library + mechanical composition (45-90 min/page)
- **Track 2 (composition):** Use library + tension-composition skill (3-5 hrs/page)

**The open questions remain:** Component count, Tier 2.5 boundary cases, Track 2 percentage sensitivity to richer library.

**Next step:** Phase C Component Extraction begins with comprehensive inventory across all 30+ exploration files.

---

**END COMPOSITIONAL STRATEGY LIBRARY**
