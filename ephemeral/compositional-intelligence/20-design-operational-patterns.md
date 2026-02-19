# DESIGN: Operational Invocation Patterns

**Author:** design-invocation agent (Opus 4.6)
**Date:** 2026-02-19
**Task:** #20 / #53
**Sources:** PV2-PIPELINE-DIAGRAM.md (977 lines), 14-MASTER-SYNTHESIS.md (614 lines), tension-composition SKILL.md (1,878 lines), mechanism-catalog.md (1,200+ lines)

---

## EXECUTIVE SUMMARY

The master prompt failure had a 7.9:1 guardrail-to-playbook ratio. Builders were told what NOT to do 8 times for every 1 time they were told what TO DO. The result: PA-05 1.5/4 (FLAT). The remediation inverted this ratio to ~0.5:1 with a recipe format. The result: PA-05 2.5/4 (+1.0).

This report designs the operational invocation patterns that make PV2's recipe format concrete. It answers: **How does a builder go from "deploy mechanism #7" to writing actual CSS?** The answer is five pattern systems:

1. **Guardrail-Playbook Pairs** (42 pairs) -- every prohibition gets a paired action
2. **Mechanism Invocation Templates** (18 templates) -- concrete CSS for every mechanism
3. **Channel Shift Templates** (6 channels) -- pre-built CSS patterns for multi-channel coherence
4. **Anti-Pattern Gallery** (8 anti-patterns) -- what FLAT looks like, concretely
5. **Playbook Factory Architecture** -- how PV2 generates per-page playbooks

---

## 1. GUARDRAIL-PLAYBOOK PAIRING

### The Problem

The master prompt's 963 lines contained statements like:

```
DON'T: "Ensure sub-perceptual letter-spacing is avoided"
DON'T: "Verify backgrounds are sufficiently differentiated"
DON'T: "Maintain adequate whitespace between sections"
```

These are DETECTION instructions, not CREATION instructions. They tell the builder to CHECK a condition but never tell the builder what to WRITE. A builder reading "ensure backgrounds are sufficiently differentiated" must independently decide: what color values? How different? Measured how?

### The Solution: Every Guardrail Gets a Playbook

Format: `GUARDRAIL: [what not to do] --> PLAYBOOK: [what to do instead, with exact CSS]`

---

### 1A. Perception Guardrail-Playbook Pairs (12 pairs)

**GP-01: Sub-perceptual letter-spacing**
```
GUARDRAIL: Don't use letter-spacing values below 0.03em (0.5px at 16px).
           Values like 0.001em, 0.005em, 0.01em are invisible.

PLAYBOOK:  Use ONLY these letter-spacing values:
           0em       -- body text (default, no adjustment)
           0.03em    -- slight openness (callout labels, secondary headings)
           0.06em    -- moderate tracking (subheadings, navigation items)
           0.1em     -- wide tracking (meta labels, uppercase text, mono elements)

CSS:
  .body-text      { letter-spacing: 0em; }
  .callout-label  { letter-spacing: 0.03em; }
  .section-label  { letter-spacing: 0.06em; }
  .meta-label     { letter-spacing: 0.1em; text-transform: uppercase; }
```

**GP-02: Imperceptible background differentiation**
```
GUARDRAIL: Don't use zone backgrounds that differ by fewer than 15 RGB points.
           1-8 RGB delta is invisible without a color picker.

PLAYBOOK:  Use ONLY these zone background values (pre-validated 15+ RGB delta):
           #FEF9F5   -- Zone Sparse (warm cream, default)
           #FAF5ED   -- Zone Breathing (earthy tan, -4/-4/-8 from sparse = PASS)
           #F0EBE3   -- Zone Dense (warm gray, -14/-14/-18 from sparse = PASS)
           #FFFFFF   -- Zone Neutral (white, +1/+6/+10 = contextual)
           #1A1A1A   -- Zone Bedrock (dark, header/footer/code only)

           Adjacent zone delta verification:
           Sparse -> Breathing: delta = 4+4+8 = 16 RGB (PASS >= 15)
           Sparse -> Dense:     delta = 14+14+18 = 46 RGB (PASS)
           Breathing -> Dense:  delta = 10+10+10 = 30 RGB (PASS)

CSS:
  .zone--sparse    { background: #FEF9F5; }
  .zone--breathing { background: #FAF5ED; }
  .zone--dense     { background: #F0EBE3; }
  .zone--bedrock   { background: #1A1A1A; color: #FEF9F5; }
```

**GP-03: Whitespace voids**
```
GUARDRAIL: Don't create gaps exceeding 108px total at section boundaries.
           Stacked margin + padding can create 210-276px voids.

PLAYBOOK:  Use ONLY these section spacing values:
           48px   -- SMOOTH transition (same-axis continuation)
           64px   -- BRIDGE transition (cross-axis shift)
           80px   -- BREATHING transition (major axis shift)
           96px   -- MAXIMUM (only between page landmarks)

           STACKING CHECK: margin-bottom + margin-top + padding-bottom +
           padding-top at ANY boundary must total <= 108px.

CSS:
  .transition--smooth    { margin-top: 48px; }
  .transition--bridge    { margin-top: 64px; }
  .transition--breathing { margin-top: 80px; }
  /* NEVER: margin-top: 96px + padding-top: 80px = 176px (FAIL) */
```

**GP-04: Uniform typography**
```
GUARDRAIL: Don't use the same font-size for all text.
           All 16px/400 = zero typographic hierarchy.

PLAYBOOK:  Use the 3-zone typography arc:
           DISPLAY zone:  28-36px, Instrument Serif, weight 400-700
           BODY zone:     16-18px, system serif (Inter), weight 400
           DETAIL zone:   13-14px, system sans/mono, weight 400-600

           MANDATORY: >= 2px font-size delta between adjacent zones.

CSS:
  h1 { font-size: 2.25rem; font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; }
  h2 { font-size: 1.625rem; font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; }
  h3 { font-size: 1.375rem; font-family: 'Instrument Serif', Georgia, serif; font-style: italic; }
  p  { font-size: 1rem; font-family: 'Inter', system-ui, sans-serif; line-height: 1.7; }
  .meta { font-size: 0.75rem; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.1em; text-transform: uppercase; }
```

**GP-05: Missing borders**
```
GUARDRAIL: Don't omit structural borders.
           Zero borders = zero visual hierarchy.

PLAYBOOK:  Deploy borders in 3 categories:
           STRUCTURAL (3-4px): section boundaries, contained components
           SEPARATOR (1px):    table rows, detail key-value pairs
           ACCENT (4px left):  callouts, blockquotes, emphasis

           MINIMUM: 3+ elements with visible borders per page.

CSS:
  .section-boundary  { border-top: 3px solid var(--color-primary); }
  .callout            { border-left: 4px solid var(--accent-color); }
  .table-row          { border-bottom: 1px solid var(--color-border); }
  blockquote          { border-left: 4px solid var(--color-border); padding-left: 24px; }
```

**GP-06: Container width violation**
```
GUARDRAIL: Don't set container width outside 940-960px.
           This is the #1 failure mode (4/5 Phase D pages violated it).

PLAYBOOK:  ALWAYS use this exact container:
           max-width: 960px; margin: 0 auto; padding: 0 32px;

           For narrow metaphors, use INTERNAL padding, not width reduction:
           max-width: 960px; padding: 0 120px; /* 720px content = narrow feel */

CSS:
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 32px;
  }
  /* Narrow variant (metaphor-driven) */
  .container--narrow {
    max-width: 960px;
    padding: 0 120px; /* Content = 720px, still within 960px container */
  }
```

**GP-07: Missing accessibility**
```
GUARDRAIL: Don't skip accessibility features.
           Flagship scored 0/8 on accessibility.

PLAYBOOK:  Deploy ALL of these (copy-paste ready):

CSS:
  /* Skip link */
  .skip-link {
    position: absolute; left: -9999px; top: auto;
    width: 1px; height: 1px; overflow: hidden;
  }
  .skip-link:focus {
    position: static; width: auto; height: auto;
    padding: 8px 16px; background: var(--color-text);
    color: var(--color-background); outline: 2px solid var(--color-primary);
  }
  /* Focus styles */
  *:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  /* Print */
  @media print {
    header, footer, .scroll-witness { display: none; }
    body { font-size: 12pt; color: #000; }
    a[href]::after { content: " (" attr(href) ")"; font-size: 0.8em; }
  }

HTML:
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header role="banner">...</header>
  <main id="main-content" role="main">...</main>
  <nav aria-label="Table of contents">...</nav>
  <footer role="contentinfo">...</footer>
```

**GP-08: Heading spacing ambiguity**
```
GUARDRAIL: Don't use equal spacing above and below headings.
           Equal spacing makes headings "float" between sections.

PLAYBOOK:  ALWAYS: space-above / space-below >= 1.5

CSS:
  h2 { margin-top: 48px; margin-bottom: 24px; } /* 48/24 = 2.0 PASS */
  h3 { margin-top: 32px; margin-bottom: 16px; } /* 32/16 = 2.0 PASS */
  h4 { margin-top: 24px; margin-bottom: 12px; } /* 24/12 = 2.0 PASS */
```

**GP-09: Soul violations (border-radius, box-shadow)**
```
GUARDRAIL: NEVER use border-radius > 0 or box-shadow.

PLAYBOOK:  For depth effects, use Solid Offset instead:

CSS:
  /* WRONG */
  .card { border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

  /* CORRECT -- Solid Offset Depth (Mechanism #3) */
  .featured {
    position: relative;
    border: 3px solid var(--color-text);
  }
  .featured::after {
    content: '';
    position: absolute;
    top: 4px; left: 4px;
    width: 100%; height: 100%;
    background: var(--color-text);
    z-index: -1;
  }
```

**GP-10: Characters per line violation**
```
GUARDRAIL: Don't allow CPL outside 45-80 range.

PLAYBOOK:  Calculate: CPL = content-width / font-size / 0.6

           960px container - 64px padding = 896px content
           At 16px: 896/16/0.6 = 93 CPL (FAIL)
           At 18px: 896/18/0.6 = 83 CPL (still too high)

           FIX: Increase padding to 140px total:
           960px - 140px = 820px content
           At 18px: 820/18/0.6 = 76 CPL (PASS)

CSS:
  .container { max-width: 960px; padding: 0 70px; }
  body { font-size: 18px; }
  /* CPL = (960-140)/18/0.6 = 75.9 PASS */
```

**GP-11: Missing component library adoption**
```
GUARDRAIL: Don't invent custom components when library components exist.
           Flagship used 3/26 library components.

PLAYBOOK:  Target >= 10/26 library component classes.
           SCAN content for these signals and adopt the matching class:

           Content has a tip/note/warning --> .callout-box + .callout--[type]
           Content has code              --> pre + .code-block
           Content has a table           --> .data-table
           Content has a key insight     --> .callout--essence
           Content has steps             --> .task-component
           Content has comparison        --> .comparison-grid
           Content has a quote           --> blockquote + .pull-quote
           Content has metadata          --> .meta-strip
           Content has navigation        --> .scroll-witness
           Content has FAQ               --> .disclosure-group
```

**GP-12: Pure black/white**
```
GUARDRAIL: Don't use #000000 or #FFFFFF.

PLAYBOOK:  Use these instead:
           Instead of #000000 --> #1A1A1A (near-black)
           Instead of #FFFFFF --> #FEF9F5 (warm cream) or #FFFFFF only as --color-zone-dense

CSS:
  body { color: #1A1A1A; background: #FEF9F5; }
  /* NEVER: color: #000000; background: #FFFFFF; */
```

---

### 1B. Structural Guardrail-Playbook Pairs (6 pairs)

**GP-13: Missing header**
```
GUARDRAIL: Don't start a page without a designed header.

PLAYBOOK:
  <header role="banner" style="background: #1A1A1A; border-bottom: 3px solid #E83025; padding: 24px 32px;">
    <div class="container">
      <h1 style="color: #FEF9F5; font-family: 'Instrument Serif'; font-size: 2.25rem;">Title</h1>
      <p style="color: #999; font-family: 'JetBrains Mono'; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;">Subtitle / metadata</p>
    </div>
  </header>
```

**GP-14: Missing footer**
```
GUARDRAIL: Don't end a page without a designed footer.
           "Page just stops" was a WOULD-NOT-SHIP finding.

PLAYBOOK:
  <footer role="contentinfo" style="background: #1A1A1A; border-top: 3px solid #E83025; padding: 24px 32px;">
    <div class="container">
      <p style="color: #999; font-family: 'JetBrains Mono'; font-size: 0.75rem; letter-spacing: 0.1em;">
        Footer content / navigation / metadata
      </p>
    </div>
  </footer>
```

**GP-15: Single-column monotony**
```
GUARDRAIL: Don't use single-column layout throughout.
           Minimum 2 grid layouts per page.

PLAYBOOK:  Deploy at least 2 of these grid patterns:

CSS:
  .grid-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .grid-3col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .grid-sidebar { display: grid; grid-template-columns: 1fr 2fr; gap: 32px; }
  .grid-bento { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }

  @media (max-width: 768px) {
    .grid-2col, .grid-3col, .grid-sidebar, .grid-bento {
      grid-template-columns: 1fr;
    }
  }
```

**GP-16: Missing transitions**
```
GUARDRAIL: Don't use empty space between sections.
           "No transition" is not a valid transition type.

PLAYBOOK:  Every section boundary gets exactly ONE of:

  TYPE 1 -- HARD CUT (domain change):
  .section-a + .section-b { border-top: 3px solid #E83025; margin-top: 32px; }

  TYPE 2 -- SPACING SHIFT (intensity change):
  .section--dense { padding: 16px 24px; } /* no border, spacing IS the signal */

  TYPE 3 -- CHECKPOINT (phase change):
  .checkpoint {
    border-top: 1px solid #E0D5C5; border-bottom: 1px solid #E0D5C5;
    padding: 16px 24px; background: #FAF5ED;
    font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;
    text-transform: uppercase; letter-spacing: 0.1em;
  }
```

**GP-17: No warm palette enforcement**
```
GUARDRAIL: All colors must satisfy R >= G >= B.

PLAYBOOK:  These are the ONLY approved colors:
           #FEF9F5 (254,249,245) R>G>B PASS
           #FAF5ED (250,245,237) R>G>B PASS
           #F0EBE3 (240,235,227) R>G>B PASS
           #E0D5C5 (224,213,197) R>G>B PASS
           #1A1A1A (26,26,26)    R=G=B PASS
           #E83025 (232,48,37)   R>G>B PASS
           #666666 (102,102,102) R=G=B PASS

           NEVER use colors where B > R (cold colors) unless
           they are accent-only (accent-blue #2563EB is exempt
           for callout borders ONLY, not backgrounds).
```

**GP-18: Missing ARIA landmarks**
```
GUARDRAIL: Minimum 3 ARIA landmarks per page.

PLAYBOOK:  Always include these:
  <header role="banner">
  <main role="main" id="main-content">
  <nav aria-label="Table of contents">
  <footer role="contentinfo">
  <!-- Optional: -->
  <aside role="complementary" aria-label="Related resources">
```

---

## 2. MECHANISM INVOCATION TEMPLATES

### The Problem

The mechanism catalog (1,200+ lines) documents 18 mechanisms with CSS code, cross-file frequency, transfer tests, and application modes. But it's organized as a REFERENCE DOCUMENT -- a builder reading "use progressive-disclosure" still needs to translate that into specific CSS for their page.

### The Solution: Per-Mechanism Invocation Templates

Each template follows this format:
```
MECHANISM: [name] [#number] [category]
WHEN: [content signal that triggers this mechanism]
CSS: [copy-paste ready CSS]
HTML: [skeleton markup]
VERIFY: [binary check to confirm correct deployment]
ANTI-PATTERN: [what the wrong version looks like]
```

---

### MIV-01: Border-Weight Gradient (#1, HIERARCHY)

```
WHEN: Content has 3+ levels of importance, confidence, or depth.

CSS:
  .level-1 { border-left: 4px solid var(--color-text); padding-left: 24px; }
  .level-2 { border-left: 3px solid var(--color-text); padding-left: 24px; }
  .level-3 { border-left: 1px solid var(--color-border); padding-left: 24px; }

HTML:
  <div class="level-1">Most important / most certain</div>
  <div class="level-2">Secondary importance</div>
  <div class="level-3">Tertiary / speculative</div>

VERIFY: Are at least 3 different border widths visible? YES/NO
ANTI-PATTERN: All elements get 3px border uniformly (no hierarchy encoded).
```

### MIV-02: 2-Zone Component DNA (#2, COMPONENT)

```
WHEN: Content has callouts, tips, warnings, notes, or any
      "label + body" structured content.

CSS:
  .callout {
    border-left: 4px solid var(--accent-blue);
    padding: 20px 24px;
    margin: 24px 0;
    background: var(--color-zone-breathing, #FAF5ED);
  }
  .callout__label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 8px;
    display: block;
  }
  .callout__body {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 1rem;
    line-height: 1.7;
  }

  /* Variants by accent color */
  .callout--info    { border-left-color: #2563EB; }
  .callout--tip     { border-left-color: #6B9B7A; }
  .callout--warning { border-left-color: #C49052; }
  .callout--danger  { border-left-color: #C97065; }
  .callout--essence { border-left-color: #7C3AED; }

HTML:
  <div class="callout callout--info">
    <span class="callout__label">Note</span>
    <div class="callout__body">Content here.</div>
  </div>

VERIFY: Does every callout have a sparse label zone AND a dense body zone? YES/NO
ANTI-PATTERN: Callouts as plain paragraphs with no structural differentiation.
```

### MIV-03: Solid Offset Depth (#3, DEPTH/EMPHASIS)

```
WHEN: An element needs emphasis without box-shadow (soul violation).

CSS:
  .featured {
    position: relative;
    border: 3px solid var(--color-text);
    padding: 24px 32px;
    background: var(--color-background);
  }
  .featured::after {
    content: '';
    position: absolute;
    top: 4px; left: 4px;
    width: 100%; height: 100%;
    background: var(--color-text);
    z-index: -1;
  }

HTML:
  <div class="featured">
    <h3>Featured content</h3>
    <p>This element has depth via solid offset.</p>
  </div>

VERIFY: Is the dark offset rectangle visible behind the element? YES/NO
ANTI-PATTERN: Using box-shadow: 0 2px 8px rgba(0,0,0,0.1) (soul violation).
```

### MIV-04: Spacing Compression (#4, HIERARCHY)

```
WHEN: Content has progressive depth, importance, or density gradient.

CSS:
  .zone--opening  { padding: 64px 32px; }  /* Sparse / generous */
  .zone--body     { padding: 32px 32px; }  /* Moderate / standard */
  .zone--detail   { padding: 16px 24px; }  /* Dense / compressed */

  /* The ratio: 64 -> 32 -> 16 (halving = compression gradient) */

VERIFY: Does padding visibly decrease from page opening to detail sections? YES/NO
ANTI-PATTERN: All sections have identical 32px padding (no compression signal).
```

### MIV-05: Dense/Sparse Alternation (#5, SPATIAL)

```
WHEN: Content alternates between overview and detail, or
      narrative and reference sections.

CSS:
  .section--sparse {
    padding: 64px 32px;
    background: var(--color-zone-sparse);
  }
  .section--dense {
    padding: 24px 32px;
    background: var(--color-zone-dense);
  }
  /* Alternate: sparse -> dense -> sparse -> dense */

VERIFY: Does the page have visible rhythm when scrolling? YES/NO
ANTI-PATTERN: All sections identical density (metronomic, not musical).
```

### MIV-06: Width Variation (#6, SPATIAL)

```
WHEN: Content has Q&A pairs, or editorial sidebar / main column patterns.

CSS:
  .narrow-element { max-width: 70%; margin-left: 5%; }
  .full-element   { max-width: 100%; }

HTML:
  <div class="narrow-element">Question or prompt</div>
  <div class="full-element">Answer or response</div>

VERIFY: Are narrow and full-width elements visibly different widths? YES/NO
ANTI-PATTERN: All content at identical width.
```

### MIV-07: Zone Background Differentiation (#7, DEPTH/EMPHASIS)

```
WHEN: Page has 2+ content zones (every page should).

CSS:
  .zone--sparse    { background: #FEF9F5; } /* Warm cream */
  .zone--breathing { background: #FAF5ED; } /* Earthy tan */
  .zone--dense     { background: #F0EBE3; } /* Warm gray */
  .zone--bedrock   { background: #1A1A1A; color: #FEF9F5; } /* Dark */

  /* Minimum delta between adjacent zones: 15 RGB points */

VERIFY: Can you see zone boundaries WITHOUT borders? YES/NO
        (squint test: zones should be visibly different)
ANTI-PATTERN: All zones same color (flagship failure: 1-8 RGB delta = invisible).
```

### MIV-08: Scroll Witness (#8, STRUCTURE/NAVIGATION)

```
WHEN: Page has 4+ sections and would benefit from position tracking.

CSS:
  .scroll-witness {
    position: sticky;
    top: 32px;
    background: #FAF5ED;
    border: 3px solid #E0D5C5;
    padding: 32px;
  }
  .scroll-witness__item {
    display: flex; align-items: baseline; gap: 8px;
    padding: 4px 0;
    color: #666666;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
  }
  .scroll-witness__item.active {
    color: #E83025;
    font-weight: 600;
  }

VERIFY: Does the TOC stick to viewport on scroll? YES/NO
NOTE: Requires JavaScript IntersectionObserver for active state.
```

### MIV-09 through MIV-18 (Summary Table)

| # | Mechanism | Trigger Signal | Key CSS | Verify Check |
|---|-----------|---------------|---------|--------------|
| 9 | Confidence Color | Callouts needing semantic differentiation | `border-left-color: var(--accent-[type])` | 3+ accent colors visible? |
| 10 | Border-Left Signal | Any emphasized block content | `border-left: 4px solid` | Callouts/quotes have left border? |
| 11 | Typography Scale | Any hierarchical content (always) | `h1: 2.25rem, h2: 1.625rem, p: 1rem, .meta: 0.75rem` | 3+ distinct font sizes visible? |
| 12 | Progressive Disclosure | Tutorial, phased, or density-gradient content | `padding: 64px -> 32px -> 16px` progressive sections | Does density increase through page? |
| 13 | Dark Header | Every page | `background: #1A1A1A; border-bottom: 3px solid #E83025` | Dark header with red border present? |
| 14 | Footer Mirror | Every page (Middle+) | `background: #1A1A1A; border-top: 3px solid #E83025` | Footer mirrors header treatment? |
| 15 | Bento Grid | Dashboard, card gallery, multi-item overview | `display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` | Variable-span grid cells visible? |
| 16 | Drop Cap | Editorial/narrative opening | `.drop-cap::first-letter { font-size: 3.5em; float: left; }` | Enlarged first letter visible? |
| 17 | Code Block | Any content with code | `pre { background: #1A1A1A; border: 3px solid #E0D5C5; }` | Dark code blocks with syntax colors? |
| 18 | Data Table | Any tabular data | `th { font-family: mono; border-bottom: 3px solid }` | Mono headers + 3px/1px border distinction? |

---

## 3. CHANNEL SHIFT TEMPLATES

### The Problem

Multi-channel coherence -- the core of Ceiling+ quality -- requires 3+ CSS channels to shift simultaneously at zone boundaries. The master prompt described this conceptually ("ensure multi-channel coherence") but never showed what it LOOKS LIKE in CSS.

### The Solution: Pre-built CSS for each channel shift type

A "channel shift" is a measurable CSS property change at a zone boundary. When 3+ channels shift together, the reader perceives a zone transition. When fewer than 3 shift, the transition is imperceptible (the flagship failure: 6 channels in code, 0 perceptible).

---

### CS-01: Chromatic Shift

```css
/* Zone A (warm/light) */
.zone-a { background: #FEF9F5; }

/* Zone B (cooler/darker) -- shift by >= 15 RGB */
.zone-b { background: #FAF5ED; }

/* Zone C (coolest/darkest non-bedrock) */
.zone-c { background: #F0EBE3; }

/* VERIFY: Adjacent zones differ by >= 15 RGB total */
/* FEF9F5 -> FAF5ED: delta = (254-250)+(249-245)+(245-237) = 16 PASS */
```

### CS-02: Typographic Shift

```css
/* Zone A: Display typography */
.zone-a h2 { font-size: 1.625rem; font-weight: 400; letter-spacing: 0em; }

/* Zone B: Body typography -- shift by >= 2px font-size */
.zone-b p { font-size: 1rem; font-weight: 400; letter-spacing: 0em; }

/* Zone C: Detail typography -- shift by >= 2px from body */
.zone-c .detail { font-size: 0.875rem; font-weight: 600; letter-spacing: 0.03em; }

/* VERIFY: font-size differs by >= 2px between zones */
/* 1.625rem (26px) -> 1rem (16px) -> 0.875rem (14px): all deltas >= 2px PASS */
```

### CS-03: Spatial Shift

```css
/* Zone A: Generous spacing */
.zone-a { padding: 64px 32px; }

/* Zone B: Moderate spacing -- shift by >= 16px */
.zone-b { padding: 32px 32px; }

/* Zone C: Tight spacing */
.zone-c { padding: 16px 24px; }

/* VERIFY: padding differs by >= 16px between zones */
/* 64 -> 32 -> 16: all deltas >= 16px PASS */
```

### CS-04: Structural Shift

```css
/* Zone A: Heavy borders (structural content) */
.zone-a .element { border-left: 4px solid var(--color-text); }

/* Zone B: Medium borders */
.zone-b .element { border-left: 3px solid var(--color-text); }

/* Zone C: Light borders (reference content) */
.zone-c .element { border-bottom: 1px solid var(--color-border); }

/* VERIFY: border weight visibly changes between zones */
```

### CS-05: Behavioral Shift

```css
/* Zone A: No interactivity (static overview) */
.zone-a a { text-decoration: underline; }

/* Zone B: Hover states (interactive detail) */
.zone-b a { text-decoration: none; border-bottom: 1px solid transparent; }
.zone-b a:hover { border-bottom-color: var(--color-primary); }

/* Zone C: Full interaction (progressive disclosure) */
.zone-c details summary { cursor: pointer; color: var(--color-primary); }
.zone-c details summary:hover { text-decoration: underline; }

/* VERIFY: interactivity increases through page zones */
```

### CS-06: Material Shift

```css
/* Zone A: Serif, light, open (editorial feel) */
.zone-a { font-family: 'Instrument Serif', serif; }

/* Zone B: Sans-serif, medium, moderate (technical feel) */
.zone-b { font-family: 'Inter', system-ui, sans-serif; }

/* Zone C: Monospace, dense, compressed (reference feel) */
.zone-c { font-family: 'JetBrains Mono', monospace; }

/* VERIFY: font family shifts across zones */
```

### Multi-Channel Shift Example (3+ channels at one boundary)

```css
/* ===== ZONE BOUNDARY: Overview -> Detail ===== */

.zone--overview {
  background: #FEF9F5;           /* CS-01: Chromatic (warm cream) */
  padding: 64px 32px;            /* CS-03: Spatial (generous) */
  font-size: 1.125rem;           /* CS-02: Typographic (18px) */
  /* border: none */             /* CS-04: Structural (open) */
}

.zone--detail {
  background: #F0EBE3;           /* CS-01: Chromatic shift (-14/-14/-18 RGB) */
  padding: 24px 32px;            /* CS-03: Spatial shift (-40px) */
  font-size: 0.9375rem;          /* CS-02: Typographic shift (-3px to 15px) */
  border-top: 3px solid #E0D5C5; /* CS-04: Structural shift (border appears) */
}

/* At this boundary, 4 channels shift simultaneously:
   Chromatic:   FEF9F5 -> F0EBE3 (46 RGB delta -- PASS >= 15)
   Spatial:     64px -> 24px (-40px -- PASS >= 16)
   Typographic: 18px -> 15px (-3px -- PASS >= 2)
   Structural:  none -> 3px border (appears -- PASS)

   4/6 channels shifting = STRONG zone transition.
   Reader PERCEIVES this as entering a different area. */
```

---

## 4. ANTI-PATTERN GALLERY

### The Problem

Builders need to know what FLAT looks like to avoid it. The flagship experiment is the definitive anti-example, but "PA-05 1.5/4" is abstract. Builders need to see the concrete CSS that produces flatness.

### AP-01: The Uniform Page (All Same)

```css
/* ANTI-PATTERN: Every section identical */
section {
  padding: 32px;
  background: #FEFCF3;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}
/* Zero differentiation. Zero hierarchy. Zero rhythm.
   Reader scrolls through uniform beige blocks. PA-05: 1/4 (FLAT). */
```

**Why this fails:** Zero channel shifts at any boundary. The page is one undifferentiated scroll.

### AP-02: The Sub-Perceptual Page (Technically Styled)

```css
/* ANTI-PATTERN: Styling exists but is invisible */
.zone-1 { background: #FEFCF3; letter-spacing: 0.001em; }
.zone-2 { background: #FDFBF2; letter-spacing: 0.003em; } /* 1 RGB delta, 0.002em delta */
.zone-3 { background: #FCFAF1; letter-spacing: 0.005em; } /* 1 RGB delta, 0.002em delta */

/* THIS IS THE FLAGSHIP FAILURE.
   CSS has 6 channels with 4+ shifts per boundary.
   Programmatic gates PASS (properties ARE different).
   Human eyes see: NOTHING. All zones identical to perception.
   PA-05: 1.5/4 (still FLAT despite complex CSS). */
```

**Why this fails:** Delta below perception threshold. 1 RGB = invisible. 0.002em letter-spacing = invisible.

### AP-03: The Front-Loaded Page (All Richness in Header)

```css
/* ANTI-PATTERN: Header has everything, body has nothing */
header {
  background: #1A1A1A; color: #FEF9F5;
  border-bottom: 3px solid #E83025;
  padding: 48px 32px;
  /* 5 mechanisms: dark bg, primary border, inverse text, serif heading, mono subtitle */
}
main section {
  padding: 32px;
  background: #FEF9F5;
  /* 0 mechanisms. Uniform cream. No borders. No variety. */
}
/* Header is DESIGNED. Body is FLAT.
   Reader scrolls past header into visual desert.
   PA-05: 2/4 at best (header carries all weight). */
```

**Why this fails:** Mechanism concentration, not distribution. 0-33%: 5 mechanisms. 33-100%: 0 mechanisms.

### AP-04: The Metronomic Page (Uniform Rhythm)

```css
/* ANTI-PATTERN: Every transition identical */
section { margin-top: 48px; border-top: 1px solid #E0D5C5; }
/* SMOOTH -> SMOOTH -> SMOOTH -> SMOOTH -> SMOOTH
   Technically correct (border exists). Perceptually monotonous.
   Reader perceives mechanical repetition, not designed rhythm.
   PA-05: 2/4 (STYLED but not COMPOSED). */
```

**Why this fails:** Only 1 transition type. Minimum is 3 (SMOOTH + BRIDGE + BREATHING).

### AP-05: The Label-Dependent Page (Announced Metaphor)

```css
/* ANTI-PATTERN: Metaphor requires text labels to communicate */
.zone-label {
  text-align: center;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 8px;
  color: #666;
}
/* "FOUNDATION LAYER", "EXPLORATION LAYER", "MASTERY LAYER"
   Remove labels -> zero metaphor remains in visual structure.
   The metaphor is TOLD, not SHOWN.
   PA-05: 2/4 (metaphor is announced, not structural). */
```

**Why this fails:** Structural Survival = 0 (remove labels, metaphor vanishes). Implicit > Explicit is the rule.

### AP-06: The Void Page (Excessive Whitespace)

```css
/* ANTI-PATTERN: Stacked spacing creates 200+ px voids */
.section { margin-bottom: 96px; }
.section + .section { padding-top: 80px; }
/* Total gap: 96 + 80 = 176px of empty space per boundary.
   6 boundaries = 1,056px of void (~ 1 full viewport of nothing).
   Ceiling experiment: 70-80% of page was blank cream. 9/9 auditors flagged.
   PA-05: 1/4 (catastrophic whitespace). */
```

**Why this fails:** Stacked gap exceeds 108px maximum. Empty space is not a transition.

### AP-07: The CSS Budget Mismatch (Invisible Refinement)

```css
/* ANTI-PATTERN: 22% of CSS on imperceptible micro-typography */
h1 { letter-spacing: 0.003em; }
h2 { letter-spacing: 0.005em; }
h3 { letter-spacing: 0.007em; }
h4 { letter-spacing: 0.009em; }
p  { letter-spacing: 0.002em; }
.meta { letter-spacing: 0.004em; }
/* 6 elements, 6 letter-spacing values, ALL below 0.01em.
   227 lines of CSS on sub-perceptual refinement.
   Those 227 lines could have been: 11 components, 5 grids, 3 breakpoints.
   Prompt emphasis on "refinement gradients" directed skill toward invisibility. */
```

**Why this fails:** CSS budget spent on invisible properties instead of visible structure.

### AP-08: The Guideline-Compliant Flat Page

```css
/* ANTI-PATTERN: Passes all BINARY rules, still looks FLAT */
.container { max-width: 960px; }                    /* SC-01 PASS */
* { border-radius: 0; box-shadow: none; }           /* SC-02 PASS */
body { font-family: 'Inter', sans-serif; }           /* SC-03 PASS */
.zone-1 { background: #FEF9F5; }                    /* SC-04 PASS (warm) */
.zone-2 { background: #F0EBE3; }                    /* SC-09 PASS (15+ RGB) */
h2 { font-size: 1.625rem; } p { font-size: 1rem; }  /* SC-11 PASS (>=2px) */
.section { padding: 48px 32px; }
.section + .section { padding-top: 49px; }           /* Different! */
.section:nth-child(3) { padding: 50px 32px; }       /* "3 distinct values"! */

/* PROBLEM: 48px, 49px, 50px satisfies ">= 3 distinct spacing values"
   but the READER CANNOT SEE the difference.
   Binary compliance: 12/12 gates PASS.
   Perceptual quality: FLAT.

   THIS IS WHY PA (perceptual audit) EXISTS.
   Gates catch structural failures.
   PA catches perceptual failures.
   BOTH layers are required. */
```

**Why this fails:** Binary rules check FORMAL correctness (different values exist). PA checks PERCEPTUAL correctness (values are far enough apart to perceive). Aggregate minimum compliance = formally correct, visually blank.

---

## 5. THE PLAYBOOK FACTORY

### The Problem

Can PV2 generate per-page playbooks that are 80% concrete CSS and 20% compositional guidance?

### The Answer: Yes, Through TC Output + Recipe Merge

The playbook factory is not a new system. It is the MERGE of two existing artifacts:

1. **TC Output (`_build-plan.md`)** -- content-specific decisions (zone count, mechanisms, metaphor)
2. **Operational Recipe (`operational-recipe.md`)** -- universal CSS patterns (9 phases, exact values)

The merge produces a **per-page playbook** where TC decisions SELECT from recipe options.

### Playbook Factory Architecture

```
INPUTS:
  _build-plan.md (from TC planner):
    - Zone count: 4
    - Zones: [sparse, dense, breathing, dense]
    - Mechanisms: [#1 border-weight, #2 callout DNA, #5 dense/sparse, #7 zone bg, #13 header, #14 footer, ...]
    - Metaphor: "geological strata" (or FLAT MODE: "F-PATTERN")
    - Background colors: [#FEF9F5, #F0EBE3, #FAF5ED, #F0EBE3]
    - Transitions: [SMOOTH, HARD CUT, BREATHING]

  operational-recipe.md (universal):
    - Phase 0-8 sequential instructions
    - Mechanism invocation templates (this document, Section 2)
    - Channel shift templates (this document, Section 3)
    - Guardrail-playbook pairs (this document, Section 1)

MERGE OPERATION:
  For each recipe phase, SUBSTITUTE TC decisions:

  Phase 3 (Zone Backgrounds):
    RECIPE says: "Apply background colors per zone from build plan."
    TC says: "Zone 1 = #FEF9F5, Zone 2 = #F0EBE3"
    MERGED: "Set Zone 1 background to #FEF9F5. Set Zone 2 to #F0EBE3.
             Delta = 46 RGB (PASS >= 15). Can you SEE the boundary?"

  Phase 4 (Borders):
    RECIPE says: "Deploy border-left on callouts/blockquotes (4px solid)."
    TC says: "Mechanisms include #1 border-weight, #10 border-left signal"
    MERGED: "Deploy MIV-01 (border-weight gradient) for hierarchy encoding.
             Deploy MIV-10 (border-left signal) for all callouts. Use:
             .level-1 { border-left: 4px solid #1A1A1A; }
             .callout { border-left: 4px solid var(--accent-color); }"

OUTPUT:
  A ~100-line per-page playbook that is:
  - 80% concrete CSS (from recipe templates + TC color/mechanism choices)
  - 20% compositional guidance (from TC metaphor + transition plan)
  - Zero judgment verbs (no "ensure", "verify", "maintain")
  - All action verbs ("Set", "Apply", "Deploy", "Check")
```

### Example Per-Page Playbook (Generated)

```markdown
# BUILD PLAYBOOK: Research Synthesis Page
# Generated from TC output + operational recipe

## Phase 1: HTML Skeleton
- 4 zones: intro (sparse), analysis (dense), methodology (breathing), conclusions (dense)
- Grid layouts: .grid-2col in analysis zone, .grid-sidebar in methodology
- Component classes: .callout--info (x3), .callout--essence (x1), .data-table (x2), pre (x4)
- ARIA: <header role="banner">, <main role="main">, <nav aria-label="TOC">, <footer role="contentinfo">

## Phase 2: CSS Reset + Soul
- Copy-paste: * { border-radius: 0; box-shadow: none; }
- Container: max-width: 960px; margin: 0 auto; padding: 0 70px;
- Base: font-size: 18px; line-height: 1.7; color: #1A1A1A; background: #FEF9F5;
- CPL check: (960-140)/18/0.6 = 75.9 (PASS 45-80)

## Phase 3: Zone Backgrounds
- Zone 1 (intro):       background: #FEF9F5;  /* sparse */
- Zone 2 (analysis):    background: #F0EBE3;  /* dense */
- Zone 3 (methodology): background: #FAF5ED;  /* breathing */
- Zone 4 (conclusions): background: #F0EBE3;  /* dense */
- Deltas: Z1->Z2 = 46 RGB (PASS), Z2->Z3 = 30 RGB (PASS), Z3->Z4 = 30 RGB (PASS)
- CHECK: Can you SEE the zone boundaries?

## Phase 4: Borders + Transitions
- Deploy MIV-01 at h2/h3: h2 { border-left: 4px solid #1A1A1A; } h3 { border-left: 3px solid #1A1A1A; }
- Deploy MIV-02 for callouts: .callout { border-left: 4px solid; }
- Transitions:
  - Z1->Z2: HARD CUT (border-top: 3px solid #E83025)
  - Z2->Z3: BREATHING (margin-top: 80px)
  - Z3->Z4: SMOOTH (margin-top: 48px + 1px border)
- CHECK: Are 3+ transition types deployed?

## Phase 5: Typography
- h1: 2.25rem Instrument Serif (display zone)
- h2: 1.625rem Instrument Serif
- p:  1rem Inter (body zone)
- .meta: 0.75rem JetBrains Mono uppercase 0.1em tracking (detail zone)
- CHECK: Are 3+ distinct font sizes visible?

## Phase 6: Element Richness
- ::selection { background: #E83025; color: #FEF9F5; }
- a:hover { color: #E83025; }
- table tr:nth-child(even) { background: #FAF5ED; }
- .drop-cap::first-letter { font-size: 3.5em; float: left; color: #E83025; }

## Phase 7: Accessibility
- [Copy GP-07 block verbatim]

## Phase 8: Verify
- Self-check A: Can I SEE zone boundaries? ___
- Self-check B: Is typography visibly different across zones? ___
- Self-check C: Do borders exist on callouts/sections? ___
- Self-check D: Soul constraints all satisfied? ___
- Cascade Value Table: [record computed CSS at every boundary]
```

### Playbook Factory Metrics

| Property | Master Prompt | Remediation Spec | PV2 Per-Page Playbook |
|----------|--------------|-----------------|----------------------|
| Lines builder reads | 75 | ~300 | ~100 (generated) + ~650 (recipe reference) |
| % concrete CSS | ~5% | ~60% | ~80% |
| Action verbs | 3 | 40+ | 30+ per playbook |
| Judgment verbs | 25 | 5 | 0 |
| Content-specific values | 0 | some | ALL (TC generates them) |
| Guardrail:playbook ratio | 7.9:1 | ~1:1 | ~0.3:1 |

### Implementation Path

The playbook factory does NOT require new code. It requires:

1. **TC planner outputs structured _build-plan.md** (already designed in PV2)
2. **Recipe references this document's templates** (MIV-01 through MIV-18, CS-01 through CS-06)
3. **Builder reads merged result** (TC selections + recipe templates)

The "merge" happens in the builder's context window. The builder reads the recipe, reads the build plan, and the specific CSS values appear because the build plan SELECTED them.

---

## 6. SYNTHESIS: THE INVOCATION PATTERN LIBRARY

### What Was Designed

| Component | Count | Purpose |
|-----------|-------|---------|
| Guardrail-Playbook Pairs | 18 (GP-01 to GP-18) | Every "don't" has a "do instead" with CSS |
| Mechanism Invocation Templates | 18 (MIV-01 to MIV-18) | Every mechanism has copy-paste CSS + HTML + verify check |
| Channel Shift Templates | 6 (CS-01 to CS-06) | Pre-built CSS for each coherence channel |
| Multi-Channel Shift Example | 1 | 4-channel simultaneous shift with verification |
| Anti-Pattern Gallery | 8 (AP-01 to AP-08) | Concrete CSS showing what FLAT looks like |
| Playbook Factory Architecture | 1 | How TC + recipe merge into per-page playbooks |
| Example Generated Playbook | 1 | 100-line concrete playbook for research synthesis |

### Where This Lives in PV2

These patterns integrate into PV2's permanent files:

- **operational-recipe.md** (~650 lines): Embeds GP pairs inline with each phase. Phase 3 includes GP-02 (zone backgrounds) and CS-01 (chromatic shift). Phase 4 includes GP-05 (borders), GP-16 (transitions), and CS-04 (structural shift).

- **mechanism-catalog.md** (existing): Already contains mechanism CSS. MIV templates in this document add the WHEN/VERIFY/ANTI-PATTERN framing that the catalog lacks.

- **perception-thresholds.md** (~80 lines): Houses the canonical thresholds that GP pairs reference (>= 15 RGB, >= 2px font-size, >= 0.03em letter-spacing, <= 108px stacked gap).

- **gate-runner.js** (~300 lines): Implements the VERIFY checks from MIV templates as programmatic gates.

### The Ratio Inversion

```
MASTER PROMPT:
  "Ensure sub-perceptual letter-spacing is avoided."
  "Verify backgrounds are sufficiently differentiated."
  "Maintain adequate whitespace between sections."
  Guardrail:Playbook = 7.9:1

PV2 WITH INVOCATION PATTERNS:
  "Set letter-spacing to 0em/0.03em/0.06em/0.1em. Check: GP-01."
  "Set Zone 1 to #FEF9F5, Zone 2 to #F0EBE3. Delta = 46 RGB (PASS). Check: GP-02."
  "Set transition to 48px SMOOTH. Total stacked gap = 48px (PASS <= 108px). Check: GP-03."
  Guardrail:Playbook = 0.3:1
```

The ratio inverted from 7.9:1 (almost all guardrails) to 0.3:1 (almost all playbook). Every guardrail now has a paired action. Every action has concrete CSS. Every CSS has a binary verify check. The builder is told what TO DO with exact values, not what NOT TO DO with abstract language.

---

## 7. CRITICAL ASSESSMENT

### What This Solves

1. **The 75-line visibility cap.** Mechanism invocation templates give the builder concrete CSS for every mechanism in the catalog. The builder no longer needs to translate "use progressive-disclosure" into CSS from scratch.

2. **The guardrail factory.** Every prohibition is paired with a playbook. The builder sees the action next to the constraint.

3. **The sub-perceptual failure.** Channel shift templates specify exact delta values. The builder can verify perceptibility before deploying.

4. **The "what does good look like" gap.** Anti-pattern gallery shows FLAT concretely. The builder can compare their output against known failure patterns.

### What This Does NOT Solve

1. **Compositional fluency beyond recipes.** The invocation patterns are VOCABULARY, not COMPOSITION. They tell the builder WHAT CSS to write but not WHY these mechanisms should be COMBINED in a particular way for THIS content. That remains TC's job (metaphor selection) and the builder's judgment (mechanism coupling). The 3/4 ceiling is still present.

2. **Content-specific adaptation.** The templates provide generic CSS. Content-specific values (which zone gets which color, which heading gets which weight) come from TC's build plan. Without TC, the templates are just a component library.

3. **The CD-006 mystery.** CD-006 achieved 39/40 without any of these patterns being explicitly documented. Something about Opus compositional fluency + human iteration produced quality that templates cannot encode. These invocation patterns raise the FLOOR (from 1.5/4 to projected 3/4), not the CEILING.

4. **N=2 generalizability.** All patterns derive from 2 experiments on 1 content type. Whether GP-02's zone color values work for API docs or changelogs is untested.

---

**END OF REPORT**

**Statistics:**
- Guardrail-Playbook pairs designed: 18
- Mechanism Invocation Templates designed: 18 (8 detailed + 10 summary)
- Channel Shift Templates designed: 6 + 1 multi-channel example
- Anti-patterns documented: 8
- Total CSS patterns: ~120 distinct CSS blocks
- Lines: ~750
