# SOUL DEFINITION: Editorial Component System
## The Master Source of Truth

**Version:** 1.0
**Date:** 2026-02-03
**Status:** COMPLETE
**Line Count:** 800+ lines

---

## 1. The Core Principle

### What Makes This Feel Like EDITORIAL DESIGN, Not BOOTSTRAP?

The fundamental difference between editorial design and generic UI frameworks isn't about individual properties—it's about philosophical orientation:

| Bootstrap/Tailwind Philosophy | Editorial Philosophy |
|------------------------------|---------------------|
| Components are containers | Content defines its own space |
| Decoration creates interest | Typography creates interest |
| Rounded corners signal friendliness | Sharp edges signal confidence |
| Shadows create depth | Flatness honors print heritage |
| Color coding conveys meaning | Language conveys meaning |
| Everything fits in boxes | Content breathes freely |

**The Test:** If you removed all content and only saw the CSS properties, would it look like every other SaaS dashboard? If yes, it's generic. If someone would think "this is a magazine layout," it's editorial.

**The Soul Statement:**

> "Editorial design treats web content like magazine content—curated, intentional, and confident. Every sharp edge is a decision. Every lack of shadow is a statement. Every typographic choice serves hierarchy, not decoration."

---

## 2. Universal Soul Rules (Apply to ALL 12 Components)

### 2.1 LOCKED CSS VALUES

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   LOCKED VALUES — DO NOT CHANGE
   These values define the soul of the entire system.
   Changing them breaks the editorial integrity.
   ═══════════════════════════════════════════════════════════════════════════════ */

:root {
  /* ─────────────────────────────────────────────────────────────────────────────
     COLOR PALETTE — LOCKED
     Red + Cream + Black only. No grays, no additional accents.
     ───────────────────────────────────────────────────────────────────────────── */
  --color-primary: #E83025;           /* LOCKED — Sanrok red, editorial confidence */
  --color-background: #FEF9F5;        /* LOCKED — Warm cream, not sterile white */
  --color-text: #1A1A1A;              /* LOCKED — Near-black, softer than pure #000 */
  --color-text-secondary: #666666;    /* LOCKED — Muted secondary text */
  --color-border: #E0D5C5;            /* LOCKED — Warm border tone */
  --color-border-subtle: #F0EBE3;     /* LOCKED — Very subtle dividers */

  /* ─────────────────────────────────────────────────────────────────────────────
     TYPOGRAPHY — LOCKED
     Serif for display, Sans for body, Mono for code.
     ───────────────────────────────────────────────────────────────────────────── */
  --font-display: 'Instrument Serif', Georgia, serif;    /* LOCKED — Editorial headlines */
  --font-body: 'Inter', system-ui, sans-serif;           /* LOCKED — Clean body text */
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;   /* LOCKED — Code and technical */

  /* ─────────────────────────────────────────────────────────────────────────────
     TYPE SCALE — LOCKED
     Based on 16px base, editorial proportions.
     ───────────────────────────────────────────────────────────────────────────── */
  --text-xs: 0.75rem;      /* 12px — Labels, captions */
  --text-sm: 0.875rem;     /* 14px — Small body, metadata */
  --text-base: 1rem;       /* 16px — Body text */
  --text-lg: 1.125rem;     /* 18px — Large body */
  --text-h4: 1.25rem;      /* 20px — Small headlines */
  --text-h3: 1.5rem;       /* 24px — Section headlines */
  --text-h2: 2rem;         /* 32px — Major headlines */
  --text-h1: 2.5rem;       /* 40px — Page titles */
  --text-display: 3rem;    /* 48px — Hero text */

  /* ─────────────────────────────────────────────────────────────────────────────
     GEOMETRY — LOCKED
     Sharp edges, no shadows, flat design.
     ───────────────────────────────────────────────────────────────────────────── */
  --border-radius: 0;                 /* LOCKED — ALWAYS sharp edges */
  --box-shadow: none;                 /* LOCKED — ALWAYS flat design */

  /* ─────────────────────────────────────────────────────────────────────────────
     SPACING — LOCKED
     8px base unit, consistent vertical rhythm.
     ───────────────────────────────────────────────────────────────────────────── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
}
```

### 2.2 THE 6 UNIVERSAL RULES

These rules apply to EVERY component in the system:

#### RULE 1: Sharp Edges (border-radius: 0) — ALWAYS

```css
/* ✓ CORRECT */
.component {
  border-radius: 0;
}

/* ✗ WRONG — Never do this */
.component {
  border-radius: 4px;   /* NO */
  border-radius: 8px;   /* NO */
  border-radius: 12px;  /* NO */
  border-radius: 50%;   /* NO */
}
```

**Soul Impact:** Sharp edges communicate decisiveness and confidence. Rounded corners signal "friendly" and "safe"—which means forgettable. Editorial design is opinionated.

#### RULE 2: Flat Design (box-shadow: none) — ALWAYS

```css
/* ✓ CORRECT */
.component {
  box-shadow: none;
}

/* ✗ WRONG — Never do this */
.component {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);   /* NO — Fake depth */
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);  /* NO — Tailwind pattern */
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1); /* NO — Inset shadows */
}
```

**Soul Impact:** Shadows create fake 3D depth—a lie about the medium. Web content is flat. Print is flat. Editorial design honors this truth.

#### RULE 3: Limited Palette (red + cream + black only)

```css
/* ✓ CORRECT — Use only these */
.component {
  color: var(--color-text);           /* Near-black */
  background: var(--color-background); /* Cream */
  border-color: var(--color-primary);  /* Red accent */
}

/* ✗ WRONG — No rainbow colors */
.component {
  color: #007bff;  /* NO — Bootstrap blue */
  background: #f8f9fa;  /* NO — Bootstrap gray */
  border-color: #28a745;  /* NO — Bootstrap green */
}
```

**Soul Impact:** Limited palette forces restraint. Every use of red becomes meaningful because it's the ONLY accent. Color coding with red/yellow/green is kindergarten-level communication.

#### RULE 4: Typography Hierarchy (serif display, sans body, mono code)

```css
/* ✓ CORRECT */
.display-text { font-family: var(--font-display); }  /* Serif for headlines */
.body-text { font-family: var(--font-body); }        /* Sans for reading */
.code-text { font-family: var(--font-mono); }        /* Mono for code */

/* ✗ WRONG — Don't mix randomly */
.headline { font-family: sans-serif; }  /* NO — Headlines need weight */
.body { font-family: serif; }           /* NO — Body needs clarity */
```

**Soul Impact:** The serif/sans tension creates visual rhythm. Serif carries authority (editorials, books, newspapers). Sans carries clarity (modern, readable). Together they create sophisticated hierarchy.

#### RULE 5: Heavy Borders When Bordered (2-4px minimum)

```css
/* ✓ CORRECT */
.bordered-component {
  border: 3px solid var(--color-primary);  /* Bold commitment */
  border-left: 4px solid var(--color-primary);  /* Or single-side accent */
}

/* ✗ WRONG — Timid borders */
.component {
  border: 1px solid #dee2e6;  /* NO — Barely visible */
  border: 1px solid rgba(0,0,0,0.1);  /* NO — Cowardly */
}
```

**Soul Impact:** If you're going to have a border, commit to it. 1px borders signal uncertainty. Editorial design is confident.

#### RULE 6: Whitespace as Design Element

```css
/* ✓ CORRECT */
.component {
  padding: 24px 32px;   /* Generous */
  margin: 32px 0;       /* Room to breathe */
  line-height: 1.6;     /* Comfortable reading */
}

/* ✗ WRONG — Cramped layouts */
.component {
  padding: 8px;         /* NO — Too tight */
  margin: 0;            /* NO — No breathing room */
  line-height: 1.2;     /* NO — Uncomfortable */
}
```

**Soul Impact:** Whitespace is not empty space—it's a design element. It creates focus, guides the eye, and signals that someone cared enough to give content room to breathe.

---

## 3. Component Specifications

### Component Overview Table

| # | Component | Soul Question | Primary Research |
|---|-----------|---------------|------------------|
| 1 | ASCII DITHERED ART | How do we create halftone texture without CSS tricks? | 4A |
| 2 | CODE BLOCK | How do we make code feel editorial, not IDE-like? | 4B |
| 3 | GOTCHA BOX | How do we warn WITHOUT yellow box? | 4C |
| 4 | ESSENCE BOX | How do we make insight feel PROFOUND? | 4C |
| 5 | DECISION MATRIX | How do we make tables feel editorial, not spreadsheet? | 4H |
| 6 | CORE ABSTRACTION | How do we make philosophy-code relationship profound? | 4I |
| 7 | REASONING BOX | How do we make tradeoffs feel insightful? | 4C |
| 8 | FILE TREE | How do we make structure feel editorial, not terminal? | 4F |
| 9 | CHALLENGE BOX | How do we communicate difficulty without star ratings? | 4C |
| 10 | TASK PROGRESSION | How do we show progress WITHOUT wizard UI? | 4G |
| 11 | INFO CALLOUT | How do we inform WITHOUT blue info box? | 4C |
| 12 | TIP CALLOUT | How do we share tips WITHOUT tooltip popup? | 4C |

---

### 3.1 ASCII DITHERED ART

**Soul Question:** "How do we create visual texture that feels handmade and editorial, not like a CSS filter?"

**Visual Description:**
Pre-generated ASCII art displayed in monospace text, creating halftone-like texture through character density. Characters like `.:-=+*#%@` represent different brightness levels, forming images that feel raw, intentional, and print-inspired.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   ASCII DITHERED ART — Editorial Texture Component
   ═══════════════════════════════════════════════════════════════════════════════ */

.ascii-art {
  /* Typography — CRITICAL for proper rendering */
  font-family: var(--font-mono);
  font-size: 6px;                     /* Sweet spot for halftone illusion */
  line-height: 0.85;                  /* Tight for continuous texture */
  letter-spacing: -0.5px;             /* Fill horizontal gaps */
  font-weight: 400;
  font-variant-ligatures: none;       /* Prevent ligature merging */

  /* Layout */
  white-space: pre;                   /* Preserve exact spacing */
  overflow: hidden;
  display: block;

  /* Colors */
  color: var(--color-text);
  background: transparent;

  /* Brutalist: no decoration */
  border: none;
  border-radius: 0;                   /* LOCKED */
  box-shadow: none;                   /* LOCKED */

  /* Selection behavior */
  user-select: none;
  -webkit-user-select: none;

  /* Performance */
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: none;
}

/* Color variations */
.ascii-art--red {
  color: var(--color-primary);
}

.ascii-art--muted {
  color: var(--color-text-secondary);
}

/* Size variations */
.ascii-art--xs { font-size: 4px; line-height: 0.8; }
.ascii-art--sm { font-size: 5px; line-height: 0.82; }
.ascii-art--md { font-size: 6px; line-height: 0.85; }
.ascii-art--lg { font-size: 8px; line-height: 0.88; }
.ascii-art--xl { font-size: 10px; line-height: 0.9; }
```

**HTML Structure:**

```html
<figure class="ascii-art-container">
  <pre class="ascii-art ascii-art--md" aria-label="ASCII art portrait">
@@@@@@@@@@@@@@@@
@@##**==--::@@@@
@@:.......::@@@@
@@...-==-...@@@@
@@..=####=..@@@@
@@..-+##+-..@@@@
@@....::....@@@@
@@@@@@@@@@@@@@@@
  </pre>
  <figcaption class="visually-hidden">Portrait rendered as ASCII art</figcaption>
</figure>
```

**Variations:**
- `--red`: Primary accent color
- `--muted`: Secondary text color
- Size variants: xs (4px) through xl (10px)

**Soul Impact Table:**

| Property | Value | Soul Impact |
|----------|-------|-------------|
| `font-size: 6px` | Characters blur into continuous tone at this size |
| `line-height: 0.85` | Tight spacing creates solid texture, no visible rows |
| `letter-spacing: -0.5px` | Fills gaps between characters for smooth gradients |
| `white-space: pre` | CRITICAL — without this, ASCII art collapses |
| `border-radius: 0` | Sharp container edges match editorial aesthetic |

---

### 3.2 CODE BLOCK

**Soul Question:** "How do we make code feel like magazine typography, not VS Code?"

**Visual Description:**
Warm cream background, left border accent, minimal syntax highlighting (2-3 colors max), serif italic label, no line numbers, no traffic light dots, no always-visible copy button.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   CODE BLOCK — Editorial Typography for Code
   ═══════════════════════════════════════════════════════════════════════════════ */

.code-block {
  /* Background — warm, integrates with page */
  background: var(--color-background);

  /* Border — left accent, editorial pull-quote style */
  border-left: 4px solid var(--color-primary);
  border-radius: 0;                   /* LOCKED */

  /* Shadow — NONE */
  box-shadow: none;                   /* LOCKED */

  /* Spacing */
  padding: 24px;
  margin: 24px 0;

  /* Position for label */
  position: relative;
}

.code-block__label {
  /* Typography — matches editorial system */
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-xs);
  font-weight: 400;

  /* Text treatment */
  text-transform: uppercase;
  letter-spacing: 0.05em;

  /* Color */
  color: var(--color-primary);

  /* Spacing */
  margin-bottom: 12px;
  padding-bottom: 8px;

  /* Separator */
  border-bottom: 1px solid var(--color-border);

  display: block;
}

.code-block__code {
  /* Font */
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.6;

  /* Color */
  color: var(--color-text);

  /* Background — transparent to inherit */
  background: transparent;

  /* Whitespace */
  white-space: pre;
  tab-size: 2;
}

/* MINIMAL SYNTAX HIGHLIGHTING — 2-3 colors only */
.code-block__code .keyword {
  color: var(--color-primary);        /* Red for keywords */
}

.code-block__code .string,
.code-block__code .number {
  color: var(--color-text-secondary); /* Muted for values */
}

.code-block__code .comment {
  color: var(--color-text-secondary);
  opacity: 0.7;
  font-style: italic;
}

/* Everything else: inherit (no highlighting) */
.code-block__code .function,
.code-block__code .variable,
.code-block__code .operator,
.code-block__code .punctuation {
  color: inherit;
}

/* Copy button — hover reveal only */
.code-block__copy {
  position: absolute;
  top: 24px;
  right: 24px;
  opacity: 0;
  transition: opacity 0.2s ease;

  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 0;
  padding: 4px 8px;

  font-family: var(--font-display);
  font-size: 10px;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  color: var(--color-text-secondary);
  cursor: pointer;
}

.code-block:hover .code-block__copy {
  opacity: 1;
}
```

**HTML Structure:**

```html
<figure class="code-block">
  <span class="code-block__label">JavaScript</span>
  <button class="code-block__copy" aria-label="Copy code">Copy</button>
  <pre class="code-block__pre"><code class="code-block__code">function greet(name) {
  return `Hello, ${name}!`;
}</code></pre>
  <figcaption class="code-block__caption">
    A simple greeting function demonstrating template literals.
  </figcaption>
</figure>
```

**Variations:**
- `--subtle`: Bottom border only, transparent background
- `--heavy`: Full 4px border (brutalist emphasis)
- `--terminal`: Dark background for shell commands

**Soul Impact Table:**

| Property | Generic | Editorial | Soul Impact |
|----------|---------|-----------|-------------|
| `background` | `#1e1e1e` (dark IDE) | `#FEF9F5` (warm cream) | Integrates with page vs "enter the IDE" |
| `border-radius` | `8px` | `0` | Sharp = editorial precision |
| `border` | All sides | Left accent only | Pull-quote style, not boxed |
| `syntax colors` | 7-12 colors | 2-3 colors | Calm vs cognitive overload |
| `copy button` | Always visible | Hover-reveal | Content first, utility second |

---

### 3.3 GOTCHA BOX

**Soul Question:** "How do we warn users WITHOUT the Bootstrap alert-danger pattern?"

**Visual Description:**
Bold left border in primary red, transparent background, italic uppercase label, no warning icons. Authority through typography, not color coding.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   GOTCHA BOX — Editorial Warning
   ═══════════════════════════════════════════════════════════════════════════════ */

.gotcha-box {
  position: relative;
  padding: 20px 24px;
  margin: 32px 0;

  /* Border — Bold left accent */
  border-left: 6px solid var(--color-primary);
  border-top: none;
  border-right: none;
  border-bottom: none;

  /* Background — TRANSPARENT, not yellow */
  background: transparent;

  /* Shape — SHARP */
  border-radius: 0;                   /* LOCKED */
  box-shadow: none;                   /* LOCKED */
}

.gotcha-box__label {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-sm);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-primary);
  margin-bottom: 8px;
  display: block;
}

.gotcha-box__content {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text);
}

.gotcha-box__content p { margin: 0; }
.gotcha-box__content p + p { margin-top: 12px; }
```

**HTML Structure:**

```html
<aside class="gotcha-box" role="note" aria-label="Warning">
  <span class="gotcha-box__label">Gotcha</span>
  <div class="gotcha-box__content">
    <p>This approach will fail silently if the API key is not set.</p>
  </div>
</aside>
```

**Soul Impact Table:**

| Property | Generic | Editorial | Soul Impact |
|----------|---------|-----------|-------------|
| `background` | `#fff3cd` (yellow) | `transparent` | Authority through typography, not color |
| `border` | All sides | Left only | Editorial marker, not box |
| `icon` | Warning triangle | None | Words communicate, not symbols |
| `label font` | Sans-serif | Serif italic | Editorial voice |

---

### 3.4 ESSENCE BOX

**Soul Question:** "How do we make a key insight feel PROFOUND, not like a blockquote?"

**Visual Description:**
Full 3px border on all sides, larger serif italic text, generous padding, no decorative quote marks. Like a magazine pull quote.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   ESSENCE BOX — Key Insight / Pull Quote
   ═══════════════════════════════════════════════════════════════════════════════ */

.essence-box {
  position: relative;
  padding: 32px;
  margin: 40px 0;

  /* Border — Full frame */
  border: 3px solid var(--color-primary);

  /* Background — TRANSPARENT */
  background: transparent;

  /* Shape — SHARP */
  border-radius: 0;                   /* LOCKED */
  box-shadow: none;                   /* LOCKED */
}

.essence-box__content {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-h4);          /* Larger than body */
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-text);
  margin: 0;
}

.essence-box__content p { margin: 0; }

.essence-box__attribution {
  font-family: var(--font-body);
  font-style: normal;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-top: 16px;
  text-align: right;
}

.essence-box__attribution::before {
  content: "— ";
}
```

**HTML Structure:**

```html
<aside class="essence-box" role="note" aria-label="Key Insight">
  <div class="essence-box__content">
    <p>Context as constraint, not capability. The less the model knows,
    the more focused and reliable its responses become.</p>
  </div>
  <cite class="essence-box__attribution">Boris Cherny</cite>
</aside>
```

**Soul Impact Table:**

| Property | Generic | Editorial | Soul Impact |
|----------|---------|-----------|-------------|
| `border` | Left only or none | All 4 sides | "This is important" through framing |
| `font-size` | Same as body | Larger (h4) | Visual prominence |
| `font-family` | Sans-serif | Serif italic | Pull quote convention |
| `quotes` | Decorative " marks | None | Typography carries meaning |

---

### 3.5 DECISION MATRIX

**Soul Question:** "How do we make tables feel editorial, not like Excel spreadsheets?"

**Visual Description:**
Left border accent, bottom-only cell borders, no zebra striping, no color coding, typography-based hierarchy, content-driven width.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   DECISION MATRIX — Editorial Table
   ═══════════════════════════════════════════════════════════════════════════════ */

.decision-matrix {
  margin: 48px 0;
  border-left: 4px solid var(--color-primary);
  padding-left: 32px;
}

.decision-matrix__label {
  font-family: var(--font-display);
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: var(--text-sm);
  color: var(--color-primary);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--color-primary);
}

.decision-matrix__table {
  width: auto;                        /* Let content determine width */
  border-collapse: collapse;
  font-size: var(--text-base);
  line-height: 1.6;
}

.decision-matrix__table th {
  font-family: var(--font-display);
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--text-xs);
  letter-spacing: 0.04em;
  text-align: left;
  padding: 16px 24px 12px 0;
  border-bottom: 1px solid var(--color-border);
  vertical-align: bottom;
}

.decision-matrix__table td {
  padding: 20px 24px 20px 0;
  vertical-align: top;
  border-bottom: 1px solid var(--color-border-subtle);
}

/* Last column: no right padding */
.decision-matrix__table th:last-child,
.decision-matrix__table td:last-child {
  padding-right: 0;
}

/* Last row: no bottom border */
.decision-matrix__table tr:last-child td {
  border-bottom: none;
}

/* NO zebra striping */
/* NO color coding */
/* NO hover effects */
```

**HTML Structure:**

```html
<div class="decision-matrix">
  <div class="decision-matrix__label">When to Use</div>
  <table class="decision-matrix__table">
    <thead>
      <tr>
        <th>Scenario</th>
        <th>Recommendation</th>
        <th>Rationale</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Single agent, simple task</td>
        <td>Basic Claude session</td>
        <td>Orchestration overhead not justified</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Soul Impact Table:**

| Property | Generic | Editorial | Soul Impact |
|----------|---------|-----------|-------------|
| `width` | `100%` forced | `auto` content-driven | Natural, not stretched |
| `th background` | Gray fill | None | Typography creates hierarchy |
| `zebra striping` | Every other row | None | Trusts reader intelligence |
| `hover` | Row highlight | None | Content, not application |
| `borders` | All sides | Bottom only | Clean, horizontal guidance |

---

### 3.6 CORE ABSTRACTION

**Soul Question:** "How do we make the philosophy-code relationship feel PROFOUND?"

**Visual Description:**
Stacked layout with philosophy section (cream background, serif italic) above code section (dark background, monospace). Full border creates a frame. The philosophy precedes the implementation.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   CORE ABSTRACTION — Philosophy + Code Relationship
   ═══════════════════════════════════════════════════════════════════════════════ */

.core-abstraction {
  border: 3px solid var(--color-text);
  border-radius: 0;                   /* LOCKED */
  padding: 0;
  margin: 32px 0;
  overflow: hidden;
  background: transparent;
  box-shadow: none;                   /* LOCKED */
}

/* Philosophy Section */
.core-abstraction__philosophy {
  padding: 32px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-background);
}

.core-abstraction__label {
  font-family: var(--font-display);
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: var(--text-sm);
  color: var(--color-primary);
  margin-bottom: 16px;
}

.core-abstraction__quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-h4);
  line-height: 1.4;
  color: var(--color-text);
  margin: 0;
}

.core-abstraction__attribution {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-top: 12px;
}

.core-abstraction__attribution::before {
  content: '— ';
}

/* Code Section */
.core-abstraction__code {
  padding: 24px;
  background: #1A1A1A;                /* Dark for code contrast */
}

.core-abstraction__code-label {
  font-family: var(--font-display);
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: 12px;
}

.core-abstraction__code pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  border-radius: 0;                   /* LOCKED */
}

.core-abstraction__code code {
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.6;
  color: #F5F0EB;                     /* Light on dark */
}

.core-abstraction__commentary {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border-subtle);
  line-height: 1.6;
}
```

**HTML Structure:**

```html
<article class="core-abstraction">
  <div class="core-abstraction__philosophy">
    <span class="core-abstraction__label">The Principle</span>
    <blockquote class="core-abstraction__quote">
      The abstraction is not about hiding complexity — it's about
      revealing the right complexity at the right level.
    </blockquote>
    <cite class="core-abstraction__attribution">
      A Philosophy of Software Design
    </cite>
  </div>

  <div class="core-abstraction__code">
    <span class="core-abstraction__code-label">Implementation</span>
    <pre><code>const reveal = (level) => {
  return complexity.filter(c => c.abstraction === level);
};</code></pre>
    <p class="core-abstraction__commentary">
      Notice how the function name embodies the principle.
    </p>
  </div>
</article>
```

**Soul Impact Table:**

| Property | Generic | Editorial | Soul Impact |
|----------|---------|-----------|-------------|
| `layout` | Side-by-side equal | Stacked (philosophy first) | Philosophy PRECEDES implementation |
| `philosophy font` | Sans-serif | Serif italic | Editorial weight |
| `frame` | None | 3px border | "This is important" through framing |
| `commentary` | None | Below code | Connects code back to principle |

---

### 3.7 REASONING BOX

**Soul Question:** "How do we make tradeoffs feel insightful, not like a pros/cons checklist?"

**Visual Description:**
Two-column grid with clear headers, full border frame, summary row with accent border. Editorial analysis grid, not bullet lists.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   REASONING BOX — Y vs X Tradeoff Analysis
   ═══════════════════════════════════════════════════════════════════════════════ */

.reasoning-box {
  margin: 32px 0;
  border: 2px solid var(--color-border);
  background: transparent;
  border-radius: 0;                   /* LOCKED */
  box-shadow: none;                   /* LOCKED */
}

.reasoning-box__title {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-lg);
  font-weight: 400;
  color: var(--color-text);
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border);
  margin: 0;
}

.reasoning-box__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.reasoning-box__column {
  padding: 20px;
}

.reasoning-box__column:first-child {
  border-right: 1px solid var(--color-border);
}

.reasoning-box__column-header {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border);
}

.reasoning-box__column-content {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--color-text);
}

.reasoning-box__summary {
  padding: 16px 20px;
  border-top: 2px solid var(--color-primary);
  background: transparent;
}

.reasoning-box__summary-label {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--color-primary);
  margin-bottom: 8px;
  display: block;
}

.reasoning-box__summary-content {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text);
  margin: 0;
}
```

**HTML Structure:**

```html
<div class="reasoning-box" role="region" aria-label="Tradeoff Analysis">
  <h4 class="reasoning-box__title">Ralph Loop vs Traditional Prompting</h4>
  <div class="reasoning-box__grid">
    <div class="reasoning-box__column">
      <div class="reasoning-box__column-header">Ralph Loop</div>
      <div class="reasoning-box__column-content">
        <p>Continuous iteration without manual intervention.</p>
      </div>
    </div>
    <div class="reasoning-box__column">
      <div class="reasoning-box__column-header">Traditional</div>
      <div class="reasoning-box__column-content">
        <p>Single prompt, single response.</p>
      </div>
    </div>
  </div>
  <div class="reasoning-box__summary">
    <span class="reasoning-box__summary-label">Recommendation</span>
    <p class="reasoning-box__summary-content">
      Use Ralph Loop for autonomous multi-file refactoring tasks.
    </p>
  </div>
</div>
```

**Soul Impact Table:**

| Property | Generic | Editorial | Soul Impact |
|----------|---------|-----------|-------------|
| `layout` | Bullet pros/cons | Two-column grid | Structured analysis |
| `color coding` | Green pros, red cons | None | Neutral, balanced presentation |
| `icons` | Checkmarks/X marks | None | Typography only |
| `summary` | None | Accent border section | Conclusion has weight |

---

### 3.8 FILE TREE

**Soul Question:** "How do we make file structure feel editorial, not like terminal output?"

**Visual Description:**
Left border accent, section label, generous line-height, annotations for context. Not just ASCII box-drawing characters dumped from `tree` command.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   FILE TREE — Editorial Structure Visualization
   ═══════════════════════════════════════════════════════════════════════════════ */

.file-tree {
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.8;                   /* Generous for readability */
  background: var(--color-background);
  padding: 24px 28px;
  border-left: 4px solid var(--color-primary);
  border-radius: 0;                   /* LOCKED */
  position: relative;
}

.file-tree__label {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: var(--text-xs);
  color: var(--color-primary);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border);
  display: block;
}

.file-tree__content {
  white-space: pre;
  margin: 0;
  color: var(--color-text);
}

.file-tree__directory {
  color: var(--color-text);
  font-weight: 500;
}

.file-tree__file {
  color: var(--color-text);
  font-weight: 400;
}

.file-tree__annotation {
  color: var(--color-text-secondary);
  font-style: italic;
  margin-left: 12px;
}

.file-tree__item--emphasized {
  color: var(--color-primary);
  font-weight: 600;
}

.file-tree__branch {
  color: var(--color-border);
  user-select: none;
}
```

**HTML Structure:**

```html
<div class="file-tree">
  <span class="file-tree__label">Project Structure</span>
  <pre class="file-tree__content">project/
├── src/
│   ├── <strong>index.ts</strong> <em class="file-tree__annotation">← Entry point</em>
│   └── utils/
├── tests/
└── package.json</pre>
</div>
```

**Soul Impact Table:**

| Property | Generic | Editorial | Soul Impact |
|----------|---------|-----------|-------------|
| `label` | None | Serif italic uppercase | Identity, not just dumped content |
| `line-height` | 1.0-1.2 | 1.8 | Breathing room, consideration |
| `annotations` | None | Inline context | Explains WHY, not just WHAT |
| `border` | None | Left accent | Editorial marker |

---

### 3.9 CHALLENGE BOX

**Soul Question:** "How do we communicate difficulty with flair, not star ratings?"

**Visual Description:**
Bold square level indicator, descriptive label, optional modifier tags with outline style. Typography-based, not visual complexity.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   CHALLENGE BOX — Difficulty Indicator
   ═══════════════════════════════════════════════════════════════════════════════ */

.challenge-box {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 0;
  margin: 24px 0;
  border-bottom: 1px solid var(--color-border);
  background: transparent;
  border-radius: 0;                   /* LOCKED */
  box-shadow: none;                   /* LOCKED */
}

.challenge-box__level {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 56px;
  height: 56px;
  background: var(--color-primary);
  border-radius: 0;                   /* SHARP square */
  font-family: var(--font-body);
  font-weight: 700;
  font-size: var(--text-lg);
  color: white;
}

.challenge-box__details {
  flex: 1;
}

.challenge-box__label {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
}

.challenge-box__description {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
}

.challenge-box__modifiers {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.challenge-box__modifier {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 8px;
  border: 1px solid var(--color-text-secondary);
  border-radius: 0;                   /* LOCKED */
  background: transparent;
  color: var(--color-text-secondary);
}
```

**HTML Structure:**

```html
<div class="challenge-box" role="note" aria-label="Difficulty Level">
  <div class="challenge-box__level">L3</div>
  <div class="challenge-box__details">
    <div class="challenge-box__label">Intermediate</div>
    <p class="challenge-box__description">
      Requires familiarity with CLAUDE.md configuration.
    </p>
    <div class="challenge-box__modifiers">
      <span class="challenge-box__modifier">Multi-file</span>
      <span class="challenge-box__modifier">Terminal</span>
    </div>
  </div>
</div>
```

**Soul Impact Table:**

| Property | Generic | Editorial | Soul Impact |
|----------|---------|-----------|-------------|
| `indicator` | 5 stars, progress bar | Text level (L3) | Typography, not gamification |
| `badge shape` | Circle | Square | Sharp, editorial |
| `tags` | Filled pills | Outline borders | Breathing room, restraint |
| `colors` | Multi-color by difficulty | Single primary | Consistent, not traffic light |

---

### 3.10 TASK PROGRESSION

**Soul Question:** "How do we show progress WITHOUT looking like a checkout wizard?"

**Visual Description:**
Vertical layout like a table of contents, typography-based numbers (not circles), left border as anchor, no connecting lines.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   TASK PROGRESSION — Editorial Step Indicator
   ═══════════════════════════════════════════════════════════════════════════════ */

.task-progression {
  border-left: 4px solid var(--color-primary);
  padding-left: 24px;
  margin: 32px 0;
}

.task-progression__item {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border);
}

.task-progression__item:last-child {
  border-bottom: none;
}

.task-progression__number {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-h3);
  font-weight: 600;
  color: var(--color-primary);
  min-width: 48px;
  line-height: 1;
  flex-shrink: 0;
}

.task-progression__content {
  flex: 1;
  min-width: 0;
}

.task-progression__title {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 4px 0;
}

.task-progression__description {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin: 0;
}

/* Complete state — Muted, not green checkmark */
.task-progression__item--complete .task-progression__number {
  color: var(--color-text-secondary);
}

.task-progression__item--complete .task-progression__number::after {
  content: ' ✓';
  font-style: normal;
  font-size: 0.75em;
}

/* Current state — Background highlight */
.task-progression__item--current {
  background: var(--color-background);
  margin-left: -24px;
  padding-left: 24px;
  border-left: 2px solid var(--color-primary);
}

/* Upcoming state — Muted */
.task-progression__item--upcoming .task-progression__number {
  color: var(--color-border);
}
```

**HTML Structure:**

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
</div>
```

**Soul Impact Table:**

| Property | Generic | Editorial | Soul Impact |
|----------|---------|-----------|-------------|
| `orientation` | Horizontal stepper | Vertical TOC | Magazine, not checkout |
| `indicator` | Circles | Typography numbers | Numbers AS design |
| `connection` | Lines between steps | None | Each item stands alone |
| `complete state` | Green circle | Muted text + subtle ✓ | Quiet completion |

---

### 3.11 INFO CALLOUT

**Soul Question:** "How do we provide context WITHOUT the blue info box pattern?"

**Visual Description:**
Subtle left border (thinner than gotcha), smaller muted text, no icon. Present but not demanding attention.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   INFO CALLOUT — Contextual Note
   ═══════════════════════════════════════════════════════════════════════════════ */

.info-callout {
  position: relative;
  padding: 16px 20px;
  margin: 24px 0;

  /* Border — Subtle left accent */
  border-left: 3px solid var(--color-text-secondary);
  background: transparent;
  border-radius: 0;                   /* LOCKED */
  box-shadow: none;                   /* LOCKED */
}

.info-callout__label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  margin-bottom: 6px;
  display: block;
}

.info-callout__content {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.info-callout__content p { margin: 0; }
.info-callout__content p + p { margin-top: 10px; }

.info-callout__content a {
  color: var(--color-primary);
  text-decoration: underline;
}
```

**HTML Structure:**

```html
<aside class="info-callout" role="note">
  <span class="info-callout__label">Note</span>
  <div class="info-callout__content">
    <p>This feature requires Claude Code version 1.4 or later.</p>
  </div>
</aside>
```

**Soul Impact Table:**

| Property | Generic | Editorial | Soul Impact |
|----------|---------|-----------|-------------|
| `background` | `#cff4fc` (blue) | `transparent` | Present, not demanding |
| `border` | All sides or left 4px | Left 3px muted | Subtle marker |
| `icon` | Info circle | None | Label text only |
| `text color` | Blue tint | Muted gray | Supplementary feel |

---

### 3.12 TIP CALLOUT

**Soul Question:** "How do we share pro tips WITHOUT the tooltip popup pattern?"

**Visual Description:**
Top border accent (not left), serif italic label suggesting expert voice, full-width visual break.

**CSS Specification:**

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   TIP CALLOUT — Pro Tip / Editor's Note
   ═══════════════════════════════════════════════════════════════════════════════ */

.tip-callout {
  position: relative;
  padding: 20px 0;
  margin: 32px 0;

  /* Border — Top accent */
  border-top: 2px solid var(--color-primary);
  background: transparent;
  border-radius: 0;                   /* LOCKED */
  box-shadow: none;                   /* LOCKED */
}

.tip-callout__label {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-sm);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--color-primary);
  margin-bottom: 12px;
  display: block;
}

.tip-callout__content {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text);
}

.tip-callout__content p { margin: 0; }
.tip-callout__content p + p { margin-top: 12px; }

.tip-callout__content code {
  background: var(--color-background);
  padding: 2px 6px;
  font-size: var(--text-sm);
}
```

**HTML Structure:**

```html
<aside class="tip-callout" role="note" aria-label="Tip">
  <span class="tip-callout__label">Pro Tip</span>
  <div class="tip-callout__content">
    <p>Use <code>claude-code --continue</code> to resume from where your last
    session ended.</p>
  </div>
</aside>
```

**Soul Impact Table:**

| Property | Generic | Editorial | Soul Impact |
|----------|---------|-----------|-------------|
| `background` | `#d1e7dd` (green) | `transparent` | Advice, not decoration |
| `border` | Left accent | Top accent | Section break, draws eye down |
| `icon` | Lightbulb | None | Expert voice through typography |
| `label font` | Sans-serif | Serif italic | Editorial personality |

---

## 4. Locked CSS Values Summary

```css
/* ═══════════════════════════════════════════════════════════════════════════════
   COMPLETE LOCKED VALUES FILE
   Copy this as the foundation for all component CSS
   ═══════════════════════════════════════════════════════════════════════════════ */

:root {
  /* ─────────────────────────────────────────────────────────────────────────────
     COLORS — LOCKED
     ───────────────────────────────────────────────────────────────────────────── */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* ─────────────────────────────────────────────────────────────────────────────
     TYPOGRAPHY — LOCKED
     ───────────────────────────────────────────────────────────────────────────── */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* ─────────────────────────────────────────────────────────────────────────────
     TYPE SCALE — LOCKED
     ───────────────────────────────────────────────────────────────────────────── */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-h4: 1.25rem;
  --text-h3: 1.5rem;
  --text-h2: 2rem;
  --text-h1: 2.5rem;
  --text-display: 3rem;

  /* ─────────────────────────────────────────────────────────────────────────────
     GEOMETRY — LOCKED
     ───────────────────────────────────────────────────────────────────────────── */
  --border-radius: 0;
  --box-shadow: none;

  /* ─────────────────────────────────────────────────────────────────────────────
     SPACING — LOCKED
     ───────────────────────────────────────────────────────────────────────────── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
}
```

---

## 5. Success Criteria

### 5.1 Universal Verification Checklist

Apply to EVERY component:

| # | Check | Verification Method |
|---|-------|---------------------|
| 1 | `border-radius: 0` | Inspect element, verify 0 on all corners |
| 2 | `box-shadow: none` | Inspect element, verify no shadow |
| 3 | Background is transparent or cream | No gray, no pastel colors |
| 4 | Only red accent color used | No blue, green, yellow accents |
| 5 | Display text uses serif font | Headlines, labels use Instrument Serif |
| 6 | Body text uses sans font | Paragraphs use Inter |
| 7 | Code uses mono font | Code blocks use JetBrains Mono |
| 8 | Borders are 2px+ when present | No 1px timid borders |
| 9 | No icons used for meaning | Typography carries all meaning |
| 10 | Whitespace is generous | Padding 20px+, line-height 1.6+ |

### 5.2 Per-Component Checklists

#### ASCII DITHERED ART

- [ ] Font-size is 6px or appropriate variant
- [ ] Line-height is 0.85 or less
- [ ] Letter-spacing is negative
- [ ] white-space: pre is set
- [ ] No border on container (unless intentional frame)

#### CODE BLOCK

- [ ] Left border accent (4px primary)
- [ ] No header bar / window chrome
- [ ] No traffic light dots
- [ ] No visible line numbers
- [ ] Syntax highlighting uses 2-3 colors max
- [ ] Copy button is hover-reveal only

#### GOTCHA BOX

- [ ] Background is transparent (NOT yellow)
- [ ] Left border only (6px primary)
- [ ] Label is serif italic uppercase
- [ ] No warning icon

#### ESSENCE BOX

- [ ] Border on all 4 sides (3px primary)
- [ ] Content is larger serif italic
- [ ] Padding is generous (32px)
- [ ] No decorative quote marks

#### DECISION MATRIX

- [ ] Width is auto (content-driven)
- [ ] No header background color
- [ ] Bottom borders only
- [ ] No zebra striping
- [ ] No hover row highlighting

#### CORE ABSTRACTION

- [ ] Philosophy section above code section
- [ ] Full 3px border frame
- [ ] Philosophy uses serif italic
- [ ] Code section has dark background

#### REASONING BOX

- [ ] Two-column grid layout
- [ ] No color coding per column
- [ ] Summary row has accent border top
- [ ] No checkmark/X icons

#### FILE TREE

- [ ] Has section label
- [ ] Line-height is 1.8+
- [ ] Left border accent
- [ ] Annotations for context (where appropriate)

#### CHALLENGE BOX

- [ ] Level indicator is square (not circle)
- [ ] No star ratings or progress bars
- [ ] Modifier tags are outline style

#### TASK PROGRESSION

- [ ] Vertical orientation
- [ ] Numbers are typography (not circles)
- [ ] No connecting lines between steps
- [ ] Current state is background highlight

#### INFO CALLOUT

- [ ] Background is transparent (NOT blue)
- [ ] Border is subtle (3px muted left)
- [ ] Text is smaller and muted
- [ ] No info icon

#### TIP CALLOUT

- [ ] Background is transparent (NOT green)
- [ ] Top border accent (not left)
- [ ] Label is serif italic
- [ ] No lightbulb icon

### 5.3 The Soul Test

After implementing any component, ask:

1. **"Does this look like it could appear in a magazine?"** — If yes, pass.
2. **"Does this look like Bootstrap?"** — If yes, fail.
3. **"Could I swap the accent color to Bootstrap blue and it would fit?"** — If yes, fail.
4. **"Does every design choice serve hierarchy or readability?"** — If yes, pass.
5. **"Is there any decoration that doesn't earn its place?"** — If yes, fail.

---

## Sources and References

### Research Documents Synthesized

1. **4A: ASCII Dither Techniques** — 2,200+ lines on ASCII art, dithering algorithms, character sets
2. **4B: Code Block Anatomy** — 1,300+ lines on editorial vs generic code blocks
3. **4C: Callout Taxonomy** — 1,900+ lines on 6 callout types with full CSS
4. **4D: Editorial Documentation** — 600+ lines on what makes docs feel "designed"
5. **4E: Brutalist UI Patterns** — 880+ lines on brutalist design principles
6. **4F: File Tree Designs** — 760+ lines on editorial file tree patterns
7. **4G: Progression Indicators** — 950+ lines on editorial step indicators
8. **4H: Decision Matrix Design** — 1,180+ lines on editorial tables
9. **4I: Core Abstraction Design** — 850+ lines on philosophy-code relationships

### External Sources

- Stripe Documentation Design (Markdoc)
- Apple Human Interface Guidelines
- Linear Documentation
- Tailwind CSS Documentation
- Brutalist Web Design manifesto
- Donald Knuth's Literate Programming
- John Ousterhout's A Philosophy of Software Design
- Smashing Magazine typography articles
- A List Apart table design guides
- Material Design (as contrast/anti-pattern)
- Bootstrap alerts (as anti-pattern)

---

## Document Statistics

- **Total Lines:** 860+
- **Components Specified:** 12
- **CSS Specifications:** 12 complete
- **HTML Structures:** 12 complete
- **Soul Impact Tables:** 12
- **Verification Checklists:** 13 (1 universal + 12 per-component)
- **Locked CSS Variables:** 25+
- **Universal Rules:** 6

---

*Soul Definition Document Complete*
*Version 1.0 | 2026-02-03*
*Sub-Agent 4J: Soul Definition Synthesis*
