<!--
═══════════════════════════════════════════════════════════════
⚠️  SUPERSEDED — DO NOT USE FOR NEW WORK
═══════════════════════════════════════════════════════════════

STATUS: This file has been superseded and contains OUTDATED values.

SUPERSEDED BY: design-extraction/component-system/perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md

WHY THIS EXISTS: 56KB rough analysis superseded by 19KB T1 synthesis
with finding IDs.

DANGER: Values in this file may CONFLICT with soul-locked tokens.
Using these values will break the design system's soul alignment.

DO NOT:
- Copy values from this file
- Reference this file in new work
- Update this file (it's frozen as historical record)

INSTEAD: Use the superseding document linked above.

Last verified: 2026-02-06
═══════════════════════════════════════════════════════════════
-->

# Component System Anti-Patterns

## What NOT to Build: A Comprehensive Guide to Generic Design

**Purpose:** Document everything we reject to maintain editorial soul across all 12 component types.

**Date:** 2026-02-03

**Minimum Requirement:** 600+ lines of explicit anti-pattern documentation

---

## Table of Contents

1. [Purpose: Why Document Anti-Patterns?](#1-purpose-why-document-anti-patterns)
2. [Universal Anti-Patterns](#2-universal-anti-patterns)
3. [ENEMY CODE: ASCII ART Component](#3-enemy-code-ascii-art-component)
4. [ENEMY CODE: CODE BLOCK Component](#4-enemy-code-code-block-component)
5. [ENEMY CODE: GOTCHA BOX Component](#5-enemy-code-gotcha-box-component)
6. [ENEMY CODE: ESSENCE BOX Component](#6-enemy-code-essence-box-component)
7. [ENEMY CODE: DECISION MATRIX Component](#7-enemy-code-decision-matrix-component)
8. [ENEMY CODE: CORE ABSTRACTION Component](#8-enemy-code-core-abstraction-component)
9. [ENEMY CODE: REASONING BOX Component](#9-enemy-code-reasoning-box-component)
10. [ENEMY CODE: FILE TREE Component](#10-enemy-code-file-tree-component)
11. [ENEMY CODE: CHALLENGE BOX Component](#11-enemy-code-challenge-box-component)
12. [ENEMY CODE: TASK PROGRESSION Component](#12-enemy-code-task-progression-component)
13. [ENEMY CODE: INFO CALLOUT Component](#13-enemy-code-info-callout-component)
14. [ENEMY CODE: TIP CALLOUT Component](#14-enemy-code-tip-callout-component)
15. [Banned Properties Reference Table](#15-banned-properties-reference-table)
16. [Visual Comparison Requirements](#16-visual-comparison-requirements)
17. [Verification Protocol](#17-verification-protocol)

---

## 1. Purpose: Why Document Anti-Patterns?

### The Problem with Generic Design

Every CSS framework, component library, and documentation platform has converged on identical patterns. Bootstrap alerts look like Tailwind alerts look like Chakra alerts look like Material alerts. This convergence creates:

1. **Visual Homogeneity** - Every website looks the same
2. **Zero Brand Identity** - Components could belong to any project
3. **Unconscious Defaults** - Developers accept framework defaults without question
4. **Lost Editorial Soul** - Documentation feels like SaaS dashboards

### What This Document Provides

For each of our 12 component types, this document includes:

- **Complete ENEMY CODE** - Full CSS that represents the generic pattern
- **Why It's Generic** - Table explaining each problematic property
- **Our Alternative** - The editorial approach that rejects these patterns
- **Visual Difference** - Description of what distinguishes our version

### The Soul Test

Before implementing any component, ask:

> "Could this component exist in a Bootstrap/Tailwind/Material project without modification?"

If yes, the implementation has failed. Our components must be **unmistakably editorial**.

---

## 2. Universal Anti-Patterns

These properties are BANNED across ALL 12 components. No exceptions.

### 2.1 Banned CSS Properties

```css
/* ===================================================================
   UNIVERSAL BANNED PROPERTIES
   These must NEVER appear in any component implementation
   =================================================================== */

/* BANNED: Border Radius > 0 */
border-radius: 4px;      /* Generic "friendly" web app */
border-radius: 6px;      /* Bootstrap default */
border-radius: 8px;      /* Tailwind rounded-lg */
border-radius: 12px;     /* Material Design */
border-radius: 50%;      /* Pill shapes, circles */

/* BANNED: Box Shadows */
box-shadow: 0 1px 2px rgba(0,0,0,0.05);   /* Subtle elevation */
box-shadow: 0 2px 4px rgba(0,0,0,0.1);    /* Bootstrap default */
box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); /* Tailwind shadow-md */
box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); /* Large shadow */
box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);  /* Inset shadow */

/* BANNED: Traffic Light Colors */
color: #28a745;          /* Bootstrap success green */
color: #dc3545;          /* Bootstrap danger red */
color: #ffc107;          /* Bootstrap warning yellow */
color: #17a2b8;          /* Bootstrap info blue */
background: #d4edda;     /* Success green background */
background: #f8d7da;     /* Danger red background */
background: #fff3cd;     /* Warning yellow background */
background: #d1ecf1;     /* Info blue background */

/* BANNED: Hover Lift Effects */
transform: translateY(-2px);    /* Hover lift */
transform: scale(1.02);         /* Hover grow */
transform: scale(1.05);         /* Excessive hover grow */

/* BANNED: Zebra Striping */
:nth-child(even) { background: #f8f9fa; }
:nth-child(odd) { background: #ffffff; }

/* BANNED: Gradient Backgrounds */
background: linear-gradient(to bottom, #fff, #f8f9fa);
background: linear-gradient(135deg, #667eea, #764ba2);
```

### 2.2 Banned Patterns Table

| Pattern | Why Banned | Editorial Alternative |
|---------|-----------|----------------------|
| `border-radius > 0` | Signals "friendly web app", not editorial | Sharp 0px edges convey decisiveness |
| `box-shadow` (any) | Fake 3D depth, dishonest | Flat design with borders for structure |
| Multiple accent colors | Kindergarten color coding | Single brand primary (#E83025) |
| Zebra striping | Assumes user can't follow lines | Trust reader, use borders sparingly |
| Traffic light coding | Green=good, red=bad is unsophisticated | Typography and language convey meaning |
| Hover lift effects | Treats content like buttons | Content is static, not interactive UI |
| Gradient backgrounds | Decorative candy | Flat solid colors only |

### 2.3 Banned Icon Usage

```css
/* ===================================================================
   BANNED: Icon Patterns
   =================================================================== */

/* BANNED: Warning Triangle Icons */
.warning::before {
  content: "⚠️";          /* Emoji warning */
  content: "\26A0";       /* Unicode warning */
  font-family: "Font Awesome"; /* Icon fonts */
}

/* BANNED: Info Circle Icons */
.info::before {
  content: "ℹ️";          /* Emoji info */
  content: "\2139";       /* Unicode info */
}

/* BANNED: Checkmark Icons */
.success::before {
  content: "✓";           /* Checkmark */
  content: "✔️";          /* Emoji checkmark */
  color: green;           /* Colored checkmark */
}

/* BANNED: X/Cross Icons */
.error::before {
  content: "✗";           /* X mark */
  content: "❌";          /* Emoji X */
  color: red;             /* Colored X */
}

/* BANNED: Lightbulb Icons */
.tip::before {
  content: "💡";          /* Lightbulb emoji */
}
```

**Editorial Alternative:** Use typography (italic labels, uppercase text) to convey meaning instead of icons.

---

## 3. ENEMY CODE: ASCII ART Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - Generic Image Placeholder
   ===================================================================

   This is what every documentation site uses for image placeholders.
   It signals "we'll add images later" rather than "this is intentional."

   =================================================================== */

.image-placeholder {
  /* Generic centering */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Rounded corners = web app */
  border-radius: 8px;

  /* Gray background = placeholder */
  background: #f0f0f0;
  background: linear-gradient(135deg, #f5f5f5, #e0e0e0);

  /* Generic sizing */
  min-height: 200px;
  width: 100%;

  /* Border to show it's a container */
  border: 1px dashed #ccc;

  /* Padding for the icon */
  padding: 24px;
}

.image-placeholder__icon {
  /* Large gray icon */
  color: #ccc;
  font-size: 48px;
  opacity: 0.5;
}

.image-placeholder__text {
  /* Placeholder text */
  color: #999;
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
}

/* Hover effect showing interactivity */
.image-placeholder:hover {
  background: #e8e8e8;
  cursor: pointer;
}
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| `border-radius` | 8px | Web app aesthetic, not editorial |
| `background` | #f0f0f0 gradient | Signals "temporary placeholder" |
| `border` | 1px dashed #ccc | Upload dropzone pattern |
| Icon approach | Gray SVG/emoji | Generic, characterless |
| `:hover` | Background change | Suggests interactivity |
| Typography | Sans-serif | No editorial personality |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - ASCII Dithered Art
   ===================================================================

   ASCII art provides ACTUAL visual texture that:
   - Renders identically across all browsers
   - Creates brutalist aesthetic
   - Matches editorial print heritage
   - Is truly content, not placeholder

   =================================================================== */

.ascii-art {
  /* Monospace for character alignment */
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 6px;
  line-height: 0.85;
  letter-spacing: -0.5px;

  /* Preserve whitespace exactly */
  white-space: pre;
  overflow: hidden;

  /* Color from brand palette */
  color: var(--color-text, #1A1A1A);

  /* TRANSPARENT background */
  background: transparent;

  /* NO border-radius */
  border-radius: 0;

  /* NO shadow */
  box-shadow: none;

  /* NO borders */
  border: none;
}
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| Gray box with icon | Actual ASCII character texture |
| "Click to upload" feel | Intentional art piece |
| Rounded, soft, temporary | Sharp, raw, permanent |
| Web app placeholder | Magazine halftone aesthetic |

---

## 4. ENEMY CODE: CODE BLOCK Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - VS Code Clone
   ===================================================================

   This is what every documentation site uses. It mimics VS Code or
   GitHub dark mode, creating an "enter the IDE" feeling that
   separates code from content.

   =================================================================== */

.generic-code-block {
  /* Dark IDE background */
  background: #1e1e1e;
  background: #282c34;           /* One Dark Pro variant */
  background: #0d1117;           /* GitHub Dark variant */

  /* Rounded corners = friendly app */
  border-radius: 8px;
  border-radius: 12px;           /* Even friendlier */

  /* Shadow for "elevation" */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  /* Excessive padding */
  padding: 16px;

  /* Font stack that screams "code editor" */
  font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;
  font-size: 14px;
  line-height: 1.5;
}

/* Header bar mimics window chrome */
.generic-code-block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #252526;
  border-bottom: 1px solid #3c3c3c;
  border-radius: 8px 8px 0 0;
}

/* Traffic light dots - MacOS window decoration */
.generic-code-block__dots {
  display: flex;
  gap: 6px;
}

.generic-code-block__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.generic-code-block__dot--red { background: #ff5f56; }
.generic-code-block__dot--yellow { background: #ffbd2e; }
.generic-code-block__dot--green { background: #27c93f; }

/* Line numbers - source code view */
.generic-code-block__line-number {
  color: #858585;
  margin-right: 16px;
  user-select: none;
  font-size: 12px;
}

/* Copy button always visible */
.generic-code-block__copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #007acc;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
}

/* 7+ syntax highlighting colors */
.token.keyword { color: #569cd6; }
.token.string { color: #ce9178; }
.token.function { color: #dcdcaa; }
.token.comment { color: #6a9955; }
.token.number { color: #b5cea8; }
.token.operator { color: #d4d4d4; }
.token.class-name { color: #4ec9b0; }
.token.variable { color: #9cdcfe; }
.token.constant { color: #4fc1ff; }
.token.property { color: #9cdcfe; }
.token.tag { color: #569cd6; }
.token.attribute { color: #9cdcfe; }
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| `background` | #1e1e1e (dark) | Creates "enter the IDE" feeling |
| `border-radius` | 8px | Friendly modern web app |
| `box-shadow` | Any | Fake depth, elevation |
| Traffic light dots | Colored circles | MacOS window decoration on webpage |
| Line numbers | Prominent | Signals "debugging", not reading |
| Copy button | Always visible | Utility dominates visual hierarchy |
| Syntax colors | 7-12 colors | Rainbow explosion, nothing stands out |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - Magazine Code Typography
   ===================================================================

   Code as typography within document flow, not code as application.

   =================================================================== */

.code-block {
  /* Warm background, not IDE dark */
  background: var(--code-bg, #F5F0EB);

  /* NO rounded corners */
  border-radius: 0;

  /* Left border accent, not all-around */
  border-left: 4px solid var(--color-primary, #E83025);

  /* NO shadow */
  box-shadow: none;

  /* Generous editorial padding */
  padding: 24px;
  margin: 24px 0;
}

.code-block__label {
  /* Editorial label treatment */
  font-family: var(--font-display);
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 12px;
  color: var(--color-primary);
  margin-bottom: 12px;
}

/* Minimal syntax highlighting - 2-3 colors only */
.code-block .keyword { color: var(--color-primary); }
.code-block .string { color: var(--color-text-muted); }
.code-block .comment { color: var(--color-text-muted); opacity: 0.7; font-style: italic; }

/* Everything else: default text color */
.code-block .function,
.code-block .variable,
.code-block .operator { color: inherit; }
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| Dark IDE background | Warm cream background |
| Traffic light dots | No window chrome |
| 8px+ rounded corners | Sharp 0px edges |
| 7+ syntax colors | 2-3 colors maximum |
| Always-visible copy button | Hover-reveal or none |
| Header bar | Minimal serif italic label |

---

## 5. ENEMY CODE: GOTCHA BOX Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - Bootstrap Alert Warning
   ===================================================================

   The universal "warning" pattern. Yellow background, rounded corners,
   optional warning triangle icon. So ubiquitous it's invisible.

   =================================================================== */

.alert-warning {
  /* Pastel yellow background */
  background-color: #fff3cd;

  /* Timid border */
  border: 1px solid #ffc107;
  border: 1px solid #ffecb5;

  /* Rounded corners */
  border-radius: 4px;
  border-radius: 6px;

  /* Brown text on yellow */
  color: #664d03;
  color: #856404;

  /* Standard padding */
  padding: 12px 16px;
  padding: 1rem;

  /* Margin for spacing */
  margin-bottom: 1rem;
}

/* Warning icon */
.alert-warning::before {
  content: "⚠️";
  margin-right: 8px;
}

/* Alternative: Font Awesome icon */
.alert-warning .icon {
  color: #856404;
  margin-right: 12px;
}

/* Tailwind variant */
.tailwind-alert-warning {
  background-color: #FEF3C7;  /* yellow-100 */
  border: 1px solid #FCD34D;  /* yellow-300 */
  border-radius: 0.5rem;
  padding: 1rem;
  color: #92400E;             /* yellow-800 */
}

/* GitHub Markdown Alert */
.markdown-alert-warning {
  border-left: 4px solid #9a6700;
  background-color: #fff8c5;
  padding: 16px;
  margin: 16px 0;
}
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| `background` | #fff3cd (yellow) | Color coding = kindergarten logic |
| `border-radius` | 4-6px | Safe, friendly, forgettable |
| `border` | 1px solid matching | Timid, no commitment |
| `color` | Brown on yellow | Predictable color pairing |
| Icon | Warning triangle | Users ignore after seeing twice |
| All-around border | Yes | Creates "container" not "content" |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - Gotcha Box
   ===================================================================

   Warning through typography and authority, not color coding.

   =================================================================== */

.gotcha-box {
  /* NO pastel background */
  background: transparent;

  /* Bold left border only */
  border-left: 6px solid var(--color-primary);
  border-top: none;
  border-right: none;
  border-bottom: none;

  /* NO rounded corners */
  border-radius: 0;

  /* NO shadow */
  box-shadow: none;

  /* Generous editorial padding */
  padding: 20px 24px;
  margin: 32px 0;
}

.gotcha-box__label {
  /* Editorial label */
  font-family: var(--font-display);
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 12px;
  color: var(--color-primary);
  margin-bottom: 8px;
}

/* NO icon - typography only */
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| Yellow pastel background | Transparent |
| Warning triangle icon | Italic uppercase label only |
| All-around border | Left border accent only |
| Brown text on yellow | Brand primary color |
| Rounded corners | Sharp edges |

---

## 6. ENEMY CODE: ESSENCE BOX Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - Generic Quote Block
   ===================================================================

   The standard blockquote treatment. Left border, gray background,
   italic text, optional large quotation marks.

   =================================================================== */

.generic-blockquote {
  /* Left border - the universal quote marker */
  border-left: 4px solid #ccc;
  border-left: 4px solid #e0e0e0;

  /* Gray background */
  background: #f9f9f9;
  background: #f5f5f5;

  /* Standard padding */
  padding: 16px;
  padding: 16px 20px;

  /* Italic text */
  font-style: italic;

  /* Margin */
  margin: 16px 0;
  margin: 1em 40px;

  /* Optional rounded corners */
  border-radius: 4px;
}

/* Decorative quotation marks */
.generic-blockquote::before {
  content: '"';
  font-size: 48px;
  font-size: 72px;
  color: #ccc;
  position: absolute;
  top: -10px;
  left: 10px;
  font-family: Georgia, serif;
  line-height: 1;
}

.generic-blockquote::after {
  content: '"';
  font-size: 48px;
  color: #ccc;
  position: absolute;
  bottom: -20px;
  right: 10px;
}

/* Bootstrap variant */
.blockquote {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-left: 0.25rem solid #e9ecef;
}

/* With footer/citation */
.blockquote-footer {
  color: #6c757d;
  font-size: 0.875em;
}

.blockquote-footer::before {
  content: "— ";
}
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| `border-left` | 4px #ccc | Ubiquitous, invisible pattern |
| `background` | #f9f9f9 | Generic gray container |
| Decorative quotes | Large " marks | Decorative noise, not meaning |
| `font-style` | italic | Same as body italic |
| `font-size` | Same as body | No visual prominence |
| `border-radius` | 4px | Generic web app |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - Essence Box
   ===================================================================

   Key insights treated like magazine pull quotes.

   =================================================================== */

.essence-box {
  /* NO gray background */
  background: transparent;

  /* Full border frame */
  border: 3px solid var(--color-primary);

  /* NO rounded corners */
  border-radius: 0;

  /* NO shadow */
  box-shadow: none;

  /* Generous breathing room */
  padding: 32px;
  margin: 40px 0;
}

.essence-box__content {
  /* Display typography */
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-h4);  /* LARGER than body */
  line-height: 1.4;
  color: var(--color-text);
}

/* NO decorative quotation marks */
.essence-box__content::before,
.essence-box__content::after {
  content: none;
}

.essence-box__attribution {
  font-family: var(--font-body);
  font-style: normal;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-top: 16px;
  text-align: right;
}
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| Left border only | Full border frame |
| Gray background | Transparent |
| Large decorative " marks | No decoration |
| Same size as body | Larger display text |
| Generic serif italic | Display serif italic |

---

## 7. ENEMY CODE: DECISION MATRIX Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - Spreadsheet Table
   ===================================================================

   The universal data table. Borders everywhere, gray headers, zebra
   striping, traffic light color coding. Screams "Excel export."

   =================================================================== */

.generic-table {
  width: 100%;
  border-collapse: collapse;
}

.generic-table th,
.generic-table td {
  /* Borders everywhere = prison cells */
  border: 1px solid #dee2e6;
  padding: 12px;
  text-align: left;
}

/* Gray header = spreadsheet DNA */
.generic-table th {
  background: #f8f9fa;
  font-weight: 600;
}

/* Zebra striping */
.generic-table tr:nth-child(even) {
  background: #f8f9fa;
}

/* Traffic light color coding */
.generic-table .positive { color: #28a745; }
.generic-table .negative { color: #dc3545; }
.generic-table .neutral { color: #6c757d; }

/* Checkmark/X indicators */
.generic-table .yes::before { content: "✓"; color: green; }
.generic-table .no::before { content: "✗"; color: red; }

/* Hover effect */
.generic-table tr:hover {
  background: #e9ecef;
}

/* Bootstrap table variant */
.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| All-side borders | 1px solid #dee2e6 | Creates prison bars around content |
| Header background | #f8f9fa | Spreadsheet convention |
| Zebra striping | nth-child coloring | Assumes readers can't track rows |
| Color coding | Green/red/gray | Kindergarten-level signaling |
| Check/X icons | ✓ and ✗ | Patronizing visual indicators |
| Hover highlight | Background change | Signals interactive table |
| Width | 100% | Forced stretching |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - Decision Matrix
   ===================================================================

   Typography creates hierarchy, not decoration.

   =================================================================== */

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
  font-size: var(--text-small);
  color: var(--color-primary);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--color-primary);
}

.decision-matrix__table {
  /* Content determines width */
  width: auto;
  border-collapse: collapse;
}

.decision-matrix__table th {
  /* Typography creates hierarchy */
  font-family: var(--font-display);
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--text-small);
  letter-spacing: 0.04em;

  /* NO gray background */
  background: transparent;

  /* Bottom border only */
  border-bottom: 1px solid var(--color-border);
  border-top: none;
  border-left: none;
  border-right: none;

  padding: 16px 24px 12px 0;
}

.decision-matrix__table td {
  /* Bottom border only */
  border-bottom: 1px solid var(--color-border-light);
  border-top: none;
  border-left: none;
  border-right: none;

  padding: 20px 24px 20px 0;
}

/* NO zebra striping */
/* NO color coding */
/* NO checkmarks/X marks */
/* NO hover effects */
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| All-side borders | Bottom borders only |
| Gray header background | Transparent |
| Zebra striping | None |
| Green/red color coding | Typography only |
| ✓/✗ icons | No icons |
| Hover highlight | No hover effect |
| 100% width | Content-driven width |

---

## 8. ENEMY CODE: CORE ABSTRACTION Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - Two Disconnected Boxes
   ===================================================================

   Philosophy and code as separate, unrelated components. Typically
   a callout above a code block with no visual relationship.

   =================================================================== */

/* Philosophy as standalone callout */
.generic-philosophy-box {
  background: #f0f4f8;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  border-left: 4px solid #3182ce;
}

.generic-philosophy-box__quote {
  font-style: italic;
  color: #2d3748;
}

/* Code as separate component */
.generic-code-box {
  background: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
}

/* No visual connection between them */
/* No unified container */
/* Different border treatments */
/* Different corner radii approaches */

/* Alternative: Tab interface */
.tab-interface {
  border: 1px solid #dee2e6;
  border-radius: 8px;
}

.tab-interface__tabs {
  display: flex;
  border-bottom: 1px solid #dee2e6;
}

.tab-interface__tab {
  padding: 12px 16px;
  background: #f8f9fa;
  border-right: 1px solid #dee2e6;
  cursor: pointer;
}

.tab-interface__tab--active {
  background: white;
  border-bottom: 2px solid #007bff;
}
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| Separate containers | Two unrelated boxes | No visual relationship |
| Different treatments | Different border-radius | Inconsistent |
| Tab interface | Click to switch | Hides one element at a time |
| Blue accent | #3182ce / #007bff | Generic SaaS color |
| Rounded corners | 8px on both | Friendly web app |
| Disconnection | margin-bottom gap | Philosophy and code feel unrelated |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - Core Abstraction
   ===================================================================

   Philosophy and code as unified, intertwined content.

   =================================================================== */

.core-abstraction {
  /* Single unified container */
  border: 3px solid var(--color-text);

  /* NO rounded corners */
  border-radius: 0;

  /* NO shadow */
  box-shadow: none;

  /* NO background */
  background: transparent;

  padding: 0;
  margin: 32px 0;
  overflow: hidden;
}

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
  font-size: var(--text-small);
  color: var(--color-primary);
  margin-bottom: 16px;
}

.core-abstraction__quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-h4);
  line-height: 1.4;
}

.core-abstraction__code {
  padding: 24px;
  background: var(--color-background-subtle);
}

/* Unified border, unified container, visual relationship */
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| Two separate boxes | Single unified container |
| Different border treatments | Consistent border frame |
| Tab interface | Stacked vertical layout |
| Blue accent color | Brand primary only |
| Rounded corners | Sharp edges |
| Visual disconnect | Clear visual relationship |

---

## 9. ENEMY CODE: REASONING BOX Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - Simple Pro/Con List
   ===================================================================

   The universal comparison pattern. Two bulleted lists with green
   checkmarks for pros and red X marks for cons.

   =================================================================== */

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.pros-cons__column {
  padding: 16px;
  border-radius: 8px;
}

.pros-cons__column--pros {
  background: #d4edda;
  border: 1px solid #c3e6cb;
}

.pros-cons__column--cons {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}

.pros-cons__header {
  font-weight: 600;
  margin-bottom: 12px;
}

.pros-cons__header--pros {
  color: #155724;
}

.pros-cons__header--cons {
  color: #721c24;
}

.pros-cons__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pros-cons__item--pro::before {
  content: "✓ ";
  color: #28a745;
}

.pros-cons__item--con::before {
  content: "✗ ";
  color: #dc3545;
}

/* Alternative: Thumbs up/down icons */
.pros-cons__item--pro::before {
  content: "👍 ";
}

.pros-cons__item--con::before {
  content: "👎 ";
}
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| Green/red backgrounds | #d4edda / #f8d7da | Traffic light color coding |
| ✓/✗ icons | Green check, red X | Patronizing visual indicators |
| Column colors | Green=good, red=bad | Binary thinking, no nuance |
| Rounded corners | 8px | Web app aesthetic |
| "Pros"/"Cons" labels | Yes | Suggests one side is wrong |
| Thumbs up/down | Emojis | Unprofessional |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - Reasoning Box
   ===================================================================

   Neutral comparison grid without color-coded judgment.

   =================================================================== */

.reasoning-box {
  margin: 32px 0;
  border: 2px solid var(--color-border);

  /* NO rounded corners */
  border-radius: 0;

  /* NO colored backgrounds */
  background: transparent;
}

.reasoning-box__title {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-lg);
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border);
}

.reasoning-box__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.reasoning-box__column {
  padding: 20px;

  /* NO colored background */
  background: transparent;
}

.reasoning-box__column:first-child {
  border-right: 1px solid var(--color-border);
}

.reasoning-box__column-header {
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--text-sm);
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border);
}

/* NO checkmarks, NO X marks, NO colored headers */
/* Neutral language: "Option A" / "Option B" not "Pros" / "Cons" */
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| Green/red backgrounds | Transparent |
| ✓/✗ icons | No icons |
| "Pros"/"Cons" labels | Neutral column headers |
| Colored text | Single text color |
| Rounded corners | Sharp edges |
| Judgmental framing | Neutral analysis |

---

## 10. ENEMY CODE: FILE TREE Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - Terminal Dump
   ===================================================================

   The raw output of the `tree` command pasted into documentation
   with no styling, no annotations, no editorial treatment.

   =================================================================== */

/* Plain pre/code block */
.terminal-file-tree {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.4;

  /* Dark terminal background */
  background: #1e1e1e;
  color: #cccccc;

  /* Code block styling */
  padding: 16px;
  border-radius: 8px;

  /* No structure, just dumped text */
  white-space: pre;
  overflow-x: auto;
}

/* No visual hierarchy */
/* No annotations */
/* No distinction between files and folders */
/* No emphasis on important items */
/* Looks like terminal output, not documentation */

/* VS Code Explorer clone */
.vscode-explorer {
  font-family: 'Segoe UI', system-ui;
  font-size: 13px;
  background: #252526;
  color: #cccccc;
}

.vscode-explorer__item {
  padding: 2px 8px;
  cursor: pointer;
}

.vscode-explorer__item:hover {
  background: #2a2d2e;
}

.vscode-explorer__icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| Dark background | #1e1e1e | Terminal aesthetic |
| No label | None | Just dumped content |
| Single color | #cccccc | No visual hierarchy |
| Courier font | Courier New | Generic terminal font |
| Rounded corners | 8px | Web app code block |
| No annotations | None | Structure without context |
| Interactive hover | Yes | IDE, not documentation |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - File Tree
   ===================================================================

   File structure as editorial design element.

   =================================================================== */

.file-tree {
  /* Intentional monospace */
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 14px;
  line-height: 1.8;

  /* Warm background, not terminal dark */
  background: var(--color-background-subtle);

  /* Editorial left border */
  border-left: 4px solid var(--color-primary);

  /* NO rounded corners */
  border-radius: 0;

  /* Generous padding */
  padding: 24px 28px;
}

.file-tree__label {
  /* Editorial label treatment */
  font-family: var(--font-display);
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 12px;
  color: var(--color-primary);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border);
}

.file-tree__directory {
  /* Bolder for directories */
  font-weight: 500;
  color: var(--color-text-strong);
}

.file-tree__annotation {
  /* Muted annotations */
  font-style: italic;
  color: var(--color-text-muted);
  margin-left: 12px;
}

.file-tree__item--emphasized {
  /* Brand color for important items */
  color: var(--color-primary);
  font-weight: 600;
}
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| Dark terminal background | Warm cream background |
| No label | Italic uppercase label |
| Single color | Hierarchy through weight |
| No annotations | Inline annotations |
| Rounded corners | Sharp edges |
| Terminal dump | Designed component |

---

## 11. ENEMY CODE: CHALLENGE BOX Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - Scary Red Warning Box
   ===================================================================

   The "difficulty" indicator treated like an error message. Red
   background, warning icon, scary language.

   =================================================================== */

.difficulty-warning {
  /* Red danger background */
  background: #f8d7da;
  background: #fef2f2;

  /* Red border */
  border: 1px solid #f5c6cb;
  border: 1px solid #fecaca;
  border-left: 4px solid #dc3545;

  /* Rounded corners */
  border-radius: 8px;
  border-radius: 4px;

  padding: 16px;
  margin: 16px 0;
}

.difficulty-warning__icon {
  color: #dc3545;
  font-size: 24px;
  margin-right: 12px;
}

.difficulty-warning__text {
  color: #721c24;
  color: #991b1b;
  font-weight: 600;
}

/* Star rating system */
.star-rating {
  display: flex;
  gap: 4px;
}

.star-rating__star {
  color: #ffc107;
  font-size: 16px;
}

.star-rating__star--empty {
  color: #dee2e6;
}

/* Progress bar difficulty */
.difficulty-bar {
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.difficulty-bar__fill {
  height: 100%;
  background: linear-gradient(to right, #28a745, #ffc107, #dc3545);
}
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| Red background | #f8d7da | Treats difficulty as danger |
| Warning icon | Exclamation mark | Scary, not informative |
| Star ratings | 1-5 stars | Gamification pattern |
| Progress bars | Colored fill | Visual complexity |
| Red text | #721c24 | Error message aesthetic |
| Rounded corners | 4-8px | Generic web app |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - Challenge Box
   ===================================================================

   Bold typography, not visual complexity.

   =================================================================== */

.challenge-box {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 0;
  margin: 24px 0;

  /* Bottom border, not scary box */
  border-bottom: 1px solid var(--color-border);

  /* NO colored background */
  background: transparent;

  /* NO rounded corners */
  border-radius: 0;
}

.challenge-box__level {
  /* Bold filled square, not circle */
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 56px;
  height: 56px;
  background: var(--color-primary);

  /* SQUARE, not rounded */
  border-radius: 0;

  font-family: var(--font-body);
  font-weight: 700;
  font-size: var(--text-lg);
  color: white;
}

.challenge-box__label {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--color-text);
}

.challenge-box__modifier {
  /* Outline tag */
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 8px;
  border: 1px solid var(--color-text-secondary);

  /* SQUARE, not rounded */
  border-radius: 0;

  background: transparent;
}

/* NO star ratings */
/* NO progress bars */
/* NO red/danger colors */
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| Red danger background | Transparent |
| Star ratings | Text level indicator |
| Progress bars | None |
| Warning icon | Typography only |
| Circle badges | Square badges |
| Scary language | Neutral labels |

---

## 12. ENEMY CODE: TASK PROGRESSION Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - Checkout Wizard Stepper
   ===================================================================

   The e-commerce checkout flow applied to documentation. Circles,
   connecting lines, step numbers, progress percentages.

   =================================================================== */

.wizard-stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wizard-step__circle {
  /* Circle = wizard metaphor */
  width: 32px;
  height: 32px;
  border-radius: 50%;

  /* Bootstrap/SaaS blue */
  background: #007bff;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.wizard-step__circle--inactive {
  background: #dee2e6;
  color: #6c757d;
}

.wizard-step__circle--complete {
  background: #28a745;  /* Green checkmark */
}

.wizard-step__line {
  /* Connecting line */
  height: 2px;
  background: #dee2e6;
  flex: 1;
  margin: 0 8px;
}

.wizard-step__line--complete {
  background: #007bff;
}

.wizard-step__label {
  font-size: 12px;
  color: #6c757d;
  text-transform: uppercase;
  margin-top: 8px;
}

/* Material Design Stepper */
.md-stepper__circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1976d2;
  color: white;
}

.md-stepper__connector {
  border-top-width: 1px;
  border-color: rgba(0, 0, 0, 0.12);
}

/* Progress percentage */
.progress-indicator {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
}

.progress-indicator::after {
  content: "% complete";
  font-size: 14px;
  color: #6c757d;
}
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| Circles | 32px rounded | Wizard/checkout metaphor |
| Connecting lines | Horizontal bars | Sequential transaction feel |
| Green checkmarks | #28a745 | Gamification feedback |
| Horizontal layout | flex row | Squeezes into progress bar |
| Bootstrap blue | #007bff | Generic SaaS color |
| Progress % | "60% complete" | Gamification language |
| Step labels | Uppercase | System UI, not content |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - Task Progression
   ===================================================================

   Magazine table of contents, not checkout wizard.

   =================================================================== */

.task-progression {
  /* Vertical, not horizontal */
  display: flex;
  flex-direction: column;

  /* Left border anchor */
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

/* Typography IS the indicator - not circles */
.task-progression__number {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--text-h3);
  font-weight: 600;
  color: var(--color-primary);
  min-width: 48px;
  line-height: 1;
}

.task-progression__title {
  font-family: var(--font-body);
  font-weight: 600;
}

/* Complete state - subtle, not green */
.task-progression__item--complete .task-progression__number {
  color: var(--color-text-secondary);
}

/* Current state - background highlight, not filled circle */
.task-progression__item--current {
  background: var(--color-background-subtle);
}

/* NO circles */
/* NO connecting lines */
/* NO green checkmarks */
/* NO progress percentages */
/* NO horizontal layout */
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| Horizontal wizard | Vertical list |
| Circles | Typography numbers |
| Connecting lines | None |
| Green checkmarks | Muted text |
| Bootstrap blue | Brand primary |
| "60% complete" | No percentage |

---

## 13. ENEMY CODE: INFO CALLOUT Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - Blue Info Box
   ===================================================================

   The universal "note" pattern. Blue background, info circle icon,
   "Note:" or "Info:" label.

   =================================================================== */

.alert-info {
  /* Blue pastel background */
  background-color: #d1ecf1;
  background-color: #cff4fc;
  background-color: #dbeafe;

  /* Blue border */
  border: 1px solid #bee5eb;
  border: 1px solid #b6effb;
  border: 1px solid #93c5fd;

  /* Rounded corners */
  border-radius: 4px;

  /* Blue text */
  color: #0c5460;
  color: #055160;
  color: #1e40af;

  padding: 12px 16px;
}

/* Info circle icon */
.alert-info::before {
  content: "ℹ️";
  margin-right: 8px;
}

.alert-info .icon {
  color: #17a2b8;
  margin-right: 12px;
}

/* GitHub Note Alert */
.markdown-alert-note {
  border-left: 4px solid #0969da;
  background-color: #ddf4ff;
  padding: 16px;
}

/* Docusaurus Note Admonition */
.theme-admonition-note {
  background-color: rgba(235, 247, 255, 0.8);
  border-left: 6px solid #54c7ec;
  border-radius: 6px;
}
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| Blue background | #d1ecf1 | Color coding pattern |
| Info icon | Circle i | Everyone uses this |
| Border | Blue matching | Predictable |
| Rounded corners | 4-6px | Generic web app |
| "Note:" label | Sans-serif | System UI feel |
| Prominence | Equal to warnings | Demands same attention |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - Info Callout
   ===================================================================

   Margin note treatment - present but not demanding.

   =================================================================== */

.info-callout {
  /* NO blue background */
  background: transparent;

  /* Subtle left border */
  border-left: 3px solid var(--color-text-secondary);

  /* NO rounded corners */
  border-radius: 0;

  padding: 16px 20px;
  margin: 24px 0;
}

.info-callout__label {
  /* Small caps, not bold */
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  margin-bottom: 6px;
}

.info-callout__content {
  /* Slightly smaller, muted */
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

/* NO info icon */
/* NO blue color coding */
/* Muted, not prominent */
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| Blue background | Transparent |
| Info circle icon | No icon |
| Blue text | Muted secondary |
| Bold "Note:" label | Small caps label |
| Prominent | Subtle margin note |
| Rounded corners | Sharp edges |

---

## 14. ENEMY CODE: TIP CALLOUT Component

### The Generic Pattern

```css
/* ===================================================================
   ENEMY CODE - Tooltip/Popover Style
   ===================================================================

   The "pro tip" treated like a tooltip or popover. Lightbulb icon,
   green background, hover-triggered appearance.

   =================================================================== */

.tip-tooltip {
  /* Green success background */
  background-color: #d4edda;
  background-color: #dcfce7;

  /* Green border */
  border: 1px solid #c3e6cb;
  border: 1px solid #86efac;

  /* Rounded corners */
  border-radius: 4px;
  border-radius: 8px;

  /* Green text */
  color: #155724;
  color: #166534;

  padding: 12px 16px;
}

/* Lightbulb icon */
.tip-tooltip::before {
  content: "💡";
  margin-right: 8px;
}

.tip-tooltip .icon {
  color: #28a745;
  margin-right: 12px;
}

/* Popover variant */
.tip-popover {
  position: absolute;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 12px;
  max-width: 300px;
}

.tip-popover::before {
  /* Arrow pointing to trigger */
  content: "";
  position: absolute;
  border: 8px solid transparent;
  border-bottom-color: white;
}

/* Hover-triggered */
.tip-trigger:hover + .tip-popover {
  display: block;
}

/* Docusaurus Tip Admonition */
.theme-admonition-tip {
  background-color: rgba(233, 252, 235, 0.8);
  border-left: 6px solid #00a400;
  border-radius: 6px;
}
```

### Why It's Generic

| Property | Generic Value | Problem |
|----------|---------------|---------|
| Green background | #d4edda | Traffic light pattern |
| Lightbulb icon | Emoji or SVG | Universal, meaningless |
| Hover trigger | Popover pattern | Interactive UI, not content |
| Arrow pointer | CSS triangle | Tooltip convention |
| Box shadow | Elevation | Web app depth |
| Rounded corners | 4-8px | Generic friendly |

### Our Editorial Alternative

```css
/* ===================================================================
   EDITORIAL - Tip Callout
   ===================================================================

   Editor's note treatment - knowledgeable voice, not tooltip.

   =================================================================== */

.tip-callout {
  /* NO green background */
  background: transparent;

  /* Top border accent */
  border-top: 2px solid var(--color-primary);
  border-left: none;
  border-right: none;
  border-bottom: none;

  /* NO rounded corners */
  border-radius: 0;

  /* NO shadow */
  box-shadow: none;

  padding: 20px 0;
  margin: 32px 0;
}

.tip-callout__label {
  /* Editorial voice */
  font-family: var(--font-display);
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-size: var(--text-sm);
  color: var(--color-primary);
  margin-bottom: 12px;
}

/* NO lightbulb icon */
/* NO hover/popover behavior */
/* Static content, not interactive */
```

### Visual Difference

| Generic | Editorial |
|---------|-----------|
| Green background | Transparent |
| Lightbulb icon | No icon |
| Hover trigger | Static display |
| Popover arrow | None |
| Box shadow | Flat |
| Left border | Top border |

---

## 15. Banned Properties Reference Table

### Complete Banned Properties List

| Property | Banned Values | Correct Value | Reason |
|----------|---------------|---------------|--------|
| `border-radius` | Any value > 0 | `0` | Sharp = editorial precision |
| `box-shadow` | Any value | `none` | Flat = honest design |
| `background` | Pastels (#fff3cd, #d4edda, etc.) | `transparent` or solid brand colors | No color coding |
| `background` | Gradients | Solid colors only | Print heritage |
| `transform` | `translateY(-2px)`, `scale()` | None | No hover lift effects |
| `color` (semantic) | #28a745, #dc3545, #ffc107 | Brand primary only | No traffic lights |
| `nth-child` styling | Alternating backgrounds | None | No zebra striping |
| `content` (icons) | Emojis, icon fonts | Typography only | Words > symbols |

### Banned Color Values

| Color | Common Name | Alternative |
|-------|-------------|-------------|
| `#28a745` | Bootstrap success green | `var(--color-primary)` |
| `#dc3545` | Bootstrap danger red | `var(--color-primary)` |
| `#ffc107` | Bootstrap warning yellow | `var(--color-primary)` |
| `#17a2b8` | Bootstrap info blue | `var(--color-primary)` |
| `#007bff` | Bootstrap primary blue | `var(--color-primary)` |
| `#d4edda` | Success background | `transparent` |
| `#f8d7da` | Danger background | `transparent` |
| `#fff3cd` | Warning background | `transparent` |
| `#d1ecf1` | Info background | `transparent` |

### Banned Border Radius Values

| Value | Where Used | Why Banned |
|-------|------------|------------|
| `4px` | Bootstrap default | Generic web app |
| `6px` | Bootstrap/shadcn | Friendly but forgettable |
| `8px` | Tailwind rounded-lg | "Modern" but meaningless |
| `12px` | Material Design | Soft, unthreatening |
| `50%` | Pills, circles | Wizard stepper pattern |
| `9999px` | Full pill | Badge pattern |

---

## 16. Visual Comparison Requirements

### What the Anti-Pattern Comparison Page Must Show

For each component, the comparison page should display:

1. **Side-by-Side Rendering**
   - Left: ENEMY CODE implementation
   - Right: EDITORIAL implementation
   - Same content in both

2. **Property Diff Table**
   - List every CSS property that differs
   - Show banned value vs correct value
   - Explain soul impact of each difference

3. **Context Screenshots**
   - Generic version in a Bootstrap/Tailwind page
   - Editorial version in our design system
   - Same content, different context

4. **Checklist Verification**
   - [ ] No rounded corners visible
   - [ ] No shadows visible
   - [ ] No color coding visible
   - [ ] No icons visible (unless explicitly allowed)
   - [ ] Typography creates hierarchy

### Recommended Test Page Structure

```html
<!DOCTYPE html>
<html>
<head>
  <title>Anti-Pattern Comparison: [Component Name]</title>
  <style>
    .comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
    .comparison__generic { /* Bootstrap styles */ }
    .comparison__editorial { /* Our styles */ }
  </style>
</head>
<body>
  <h1>[Component Name] Comparison</h1>

  <div class="comparison">
    <div class="comparison__generic">
      <h2>ENEMY CODE</h2>
      <!-- Generic implementation -->
    </div>

    <div class="comparison__editorial">
      <h2>EDITORIAL</h2>
      <!-- Our implementation -->
    </div>
  </div>

  <h2>Property Differences</h2>
  <table>
    <tr>
      <th>Property</th>
      <th>Generic</th>
      <th>Editorial</th>
      <th>Soul Impact</th>
    </tr>
    <!-- Diff rows -->
  </table>
</body>
</html>
```

---

## 17. Verification Protocol

### Pre-Implementation Checklist

Before implementing any component, verify:

- [ ] Reviewed ENEMY CODE for this component type
- [ ] Identified all banned properties
- [ ] Confirmed editorial alternative approach
- [ ] Zero rounded corners in design
- [ ] Zero shadows in design
- [ ] Zero traffic light colors
- [ ] Typography creates hierarchy (not decoration)

### Post-Implementation Verification

After implementing, run these checks:

1. **Visual Inspection**
   - Does it look like it could be in Bootstrap? (If yes, FAIL)
   - Does it look like a magazine layout? (If yes, PASS)
   - Are edges sharp throughout?
   - Is the design flat?

2. **CSS Audit**
   ```bash
   # Search for banned properties
   grep -E "border-radius|box-shadow|#28a745|#dc3545|#007bff" component.css
   # Should return 0 matches
   ```

3. **Playwright Test**
   ```typescript
   test('has no banned properties', async ({ page }) => {
     const element = page.locator('.component');
     const styles = await element.evaluate(el => getComputedStyle(el));

     expect(styles.borderRadius).toBe('0px');
     expect(styles.boxShadow).toBe('none');
   });
   ```

4. **Soul Test Questions**
   - Would this feel at home in a magazine?
   - Does the component have editorial confidence?
   - Is meaning conveyed through typography, not color?
   - Is the design decisive, not "safe"?

### Continuous Verification

- Run anti-pattern checks on every PR
- Include visual regression tests
- Maintain side-by-side comparison pages
- Update this document when new patterns emerge

---

## Summary

This document defines what we explicitly reject to maintain editorial soul across all 12 component types:

| Component | Primary Enemy Pattern | Our Alternative |
|-----------|----------------------|-----------------|
| ASCII Art | Gray placeholder box | Character texture art |
| Code Block | VS Code clone | Magazine typography |
| Gotcha Box | Yellow warning box | Left border + italic label |
| Essence Box | Gray blockquote | Full border frame |
| Decision Matrix | Spreadsheet table | Bottom borders only |
| Core Abstraction | Disconnected boxes | Unified container |
| Reasoning Box | Green/red pro/con | Neutral comparison |
| File Tree | Terminal dump | Labeled editorial block |
| Challenge Box | Red danger box | Square badge + text |
| Task Progression | Checkout wizard | Vertical typography list |
| Info Callout | Blue info box | Muted margin note |
| Tip Callout | Green tooltip | Top border + editorial voice |

**The Core Rule:** If a component could exist in Bootstrap, Tailwind, or Material without modification, the implementation has failed. Our components must be unmistakably editorial.

---

**Document Statistics:**
- Total Lines: 950+
- Components Documented: 12
- Banned Properties: 30+
- Enemy Code Examples: 12 complete
- Comparison Tables: 24

**Last Updated:** 2026-02-03
**Status:** COMPLETE
