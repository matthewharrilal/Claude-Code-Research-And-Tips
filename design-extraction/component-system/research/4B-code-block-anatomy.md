# Code Block Editorial Anatomy Research

> **Sub-Agent 4B**: Deep analysis of what makes code blocks feel "editorial" vs "generic IDE clone"
> **Core Question**: NOT "What syntax highlighting theme?" but "What makes code feel like editorial typography, not VS Code?"
> **Research Date**: 2026-02-03

---

## Table of Contents

1. [Enemy Code - Complete Generic CSS](#1-enemy-code---complete-generic-css)
2. [Visual Diagram - Generic vs Editorial](#2-visual-diagram---generic-vs-editorial)
3. [Soul Impact Analysis Table](#3-soul-impact-analysis-table)
4. [Research Findings](#4-research-findings)
5. [Minimal Syntax Highlighting Philosophy](#5-minimal-syntax-highlighting-philosophy)
6. [Editorial CSS Specification](#6-editorial-css-specification)
7. [HTML Structure](#7-html-structure)
8. [Variations](#8-variations)
9. [What NOT to Include](#9-what-not-to-include)
10. [Verification Checklist](#10-verification-checklist)
11. [Sources](#11-sources)

---

## 1. Enemy Code - Complete Generic CSS

This section documents EVERYTHING we are avoiding. Every property, every value, every pattern that signals "this is a VS Code clone" or "this came from a UI framework."

```css
/* ═══════════════════════════════════════════════════════════════════════════
   ENEMY CODE - The VS Code Clone Pattern

   This CSS represents the ANTI-PATTERN. Every property here is what
   editorial code blocks must consciously REJECT.

   Soul Violation: Code becomes "tool" not "content"
   ═══════════════════════════════════════════════════════════════════════════ */

/* --------------------------------------------------------------------------
   ENEMY: The Wrapper Container
   Problem: Creates a "separate application" feel instead of document flow
   -------------------------------------------------------------------------- */
.generic-code-block {
  /* ENEMY: Dark IDE background */
  background: #1e1e1e;           /* Creates "enter the IDE" feeling */
  background: #282c34;           /* One Dark Pro variant */
  background: #0d1117;           /* GitHub Dark variant */

  /* ENEMY: Rounded corners - signals "friendly modern web app" */
  border-radius: 8px;            /* Tailwind default */
  border-radius: 12px;           /* More "approachable" variant */
  border-radius: 6px;            /* Bootstrap/shadcn */

  /* ENEMY: Excessive padding isolates code from surrounding content */
  padding: 16px;                 /* Too much buffer */
  padding: 1rem 1.5rem;          /* Asymmetric "breathing room" */

  /* ENEMY: Monospace font stack that screams "code editor" */
  font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono',
               'Source Code Pro', Consolas, Monaco, 'Andale Mono',
               'Ubuntu Mono', monospace;

  /* ENEMY: Standard IDE sizing */
  font-size: 14px;               /* Too small, creates "zoomed out" feeling */
  font-size: 13px;               /* Even worse - forces squinting */
  line-height: 1.5;              /* Generic, not optimized for code */

  /* ENEMY: Overflow that suggests horizontal scrolling is expected */
  overflow-x: auto;
  white-space: pre;

  /* ENEMY: Box shadow for "elevation" - fake 3D */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06); /* Tailwind */
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);    /* Inset variant */

  /* ENEMY: Subtle border that says "I'm a container" */
  border: 1px solid rgba(255,255,255,0.1);        /* Dark mode border */
  border: 1px solid #e1e4e8;                      /* Light mode border */
  border: 1px solid var(--border-color);          /* Design system token */
}

/* --------------------------------------------------------------------------
   ENEMY: The Header Bar
   Problem: Mimics desktop application chrome
   -------------------------------------------------------------------------- */
.generic-code-block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  padding: 12px 16px;            /* "Comfortable" variant */

  /* ENEMY: Darker header creates "window title bar" feeling */
  background: #252526;           /* VS Code title bar */
  background: #21252b;           /* One Dark header */
  background: linear-gradient(to bottom, #2d2d2d, #282828);

  /* ENEMY: Border separation mimics window chrome */
  border-bottom: 1px solid #3c3c3c;
  border-bottom: 1px solid rgba(255,255,255,0.05);

  /* ENEMY: Header border radius for "integrated" look */
  border-radius: 8px 8px 0 0;
}

/* --------------------------------------------------------------------------
   ENEMY: The Traffic Light Dots
   Problem: MacOS window decoration on a webpage
   -------------------------------------------------------------------------- */
.generic-code-block__dots {
  display: flex;
  gap: 6px;
  gap: 8px;
}

.generic-code-block__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.generic-code-block__dot--red { background: #ff5f56; }
.generic-code-block__dot--yellow { background: #ffbd2e; }
.generic-code-block__dot--green { background: #27c93f; }

/* --------------------------------------------------------------------------
   ENEMY: Line Numbers
   Problem: Turns content into "source code view"
   -------------------------------------------------------------------------- */
.generic-code-block__line-numbers {
  padding-right: 16px;
  padding-right: 1rem;
  padding-right: 12px;
  border-right: 1px solid #3c3c3c;
  text-align: right;
}

.generic-code-block__line-number {
  color: #858585;                /* VS Code default */
  color: #636d83;                /* One Dark */
  color: #6e7681;                /* GitHub */
  margin-right: 16px;
  user-select: none;
  font-size: 12px;               /* Smaller than code */
  font-variant-numeric: tabular-nums;
}

/* Current line highlight */
.generic-code-block__line-number--active {
  color: #c6c6c6;
  background: #264f78;
}

/* --------------------------------------------------------------------------
   ENEMY: Copy Button - Always Visible
   Problem: Utility feature dominates visual hierarchy
   -------------------------------------------------------------------------- */
.generic-code-block__copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;

  /* ENEMY: Button styling that shouts "click me!" */
  background: #007acc;           /* VS Code blue */
  background: rgba(255,255,255,0.1);
  background: #238636;           /* GitHub green */

  color: white;
  border: none;
  border: 1px solid #007acc;
  border-radius: 4px;
  border-radius: 6px;

  padding: 4px 8px;
  padding: 6px 12px;             /* "Comfortable" variant */

  cursor: pointer;
  font-size: 12px;
  font-weight: 500;

  /* ENEMY: Hover effects that demand attention */
  transition: background 0.15s, transform 0.1s;
}

.generic-code-block__copy-btn:hover {
  background: #0098ff;
  transform: scale(1.05);
}

/* ENEMY: SVG icon that adds visual noise */
.generic-code-block__copy-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* --------------------------------------------------------------------------
   ENEMY: Language Badge
   Problem: Decorative pill that doesn't serve the reader
   -------------------------------------------------------------------------- */
.generic-code-block__language {
  position: absolute;
  top: 0;
  right: 0;

  /* ENEMY: Pill styling */
  background: rgba(255,255,255,0.1);
  background: #30363d;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  color: #8b949e;
  color: white;

  padding: 4px 12px;
  padding: 2px 8px;

  border-radius: 0 8px 0 8px;
  border-bottom-left-radius: 4px;

  font-size: 11px;
  font-size: 12px;
  font-weight: 500;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* --------------------------------------------------------------------------
   ENEMY: Syntax Highlighting - Rainbow Explosion
   Problem: 7+ colors creates cognitive overload, nothing stands out
   -------------------------------------------------------------------------- */

/* VS Code Dark+ Theme - 12+ distinct colors */
.token.keyword { color: #569cd6; }           /* Blue */
.token.string { color: #ce9178; }            /* Orange-brown */
.token.function { color: #dcdcaa; }          /* Yellow */
.token.comment { color: #6a9955; }           /* Green */
.token.number { color: #b5cea8; }            /* Light green */
.token.operator { color: #d4d4d4; }          /* White-ish */
.token.class-name { color: #4ec9b0; }        /* Teal */
.token.variable { color: #9cdcfe; }          /* Light blue */
.token.constant { color: #4fc1ff; }          /* Cyan */
.token.property { color: #9cdcfe; }          /* Light blue */
.token.parameter { color: #9cdcfe; }         /* Light blue */
.token.type { color: #4ec9b0; }              /* Teal */
.token.tag { color: #569cd6; }               /* Blue */
.token.attribute { color: #9cdcfe; }         /* Light blue */
.token.selector { color: #d7ba7d; }          /* Gold */
.token.punctuation { color: #d4d4d4; }       /* White-ish */

/* Monokai Theme - Even more colors */
.token.keyword { color: #f92672; }           /* Pink */
.token.string { color: #e6db74; }            /* Yellow */
.token.function { color: #a6e22e; }          /* Green */
.token.comment { color: #75715e; }           /* Brown-gray */
.token.number { color: #ae81ff; }            /* Purple */
.token.operator { color: #f92672; }          /* Pink */
.token.class-name { color: #a6e22e; }        /* Green */

/* Dracula Theme */
.token.keyword { color: #ff79c6; }           /* Pink */
.token.string { color: #f1fa8c; }            /* Yellow */
.token.function { color: #50fa7b; }          /* Green */
.token.comment { color: #6272a4; }           /* Purple-gray */
.token.number { color: #bd93f9; }            /* Purple */

/* --------------------------------------------------------------------------
   ENEMY: Dark Theme Toggle
   Problem: Feature creep - code block becomes "app within app"
   -------------------------------------------------------------------------- */
.generic-code-block__theme-toggle {
  position: absolute;
  top: 8px;
  right: 80px;

  background: transparent;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 4px 8px;

  cursor: pointer;
  color: #aaa;
  font-size: 11px;
}

/* --------------------------------------------------------------------------
   ENEMY: "Expand/Collapse" Button
   Problem: Content should stand on its own
   -------------------------------------------------------------------------- */
.generic-code-block__expand-btn {
  display: flex;
  align-items: center;
  gap: 4px;

  background: linear-gradient(to bottom, transparent, #1e1e1e);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 16px;
  text-align: center;

  color: #569cd6;
  cursor: pointer;
}

/* --------------------------------------------------------------------------
   ENEMY: Diff Highlighting
   Problem: Too many visual layers
   -------------------------------------------------------------------------- */
.token.inserted {
  background: rgba(63, 185, 80, 0.15);
  color: #7ee787;
}

.token.deleted {
  background: rgba(248, 81, 73, 0.15);
  color: #ffa198;
}

.line-highlight {
  background: rgba(255, 255, 0, 0.1);
}

/* --------------------------------------------------------------------------
   ENEMY: Responsive Behavior
   Problem: Code block shrinks and overflows instead of adapting gracefully
   -------------------------------------------------------------------------- */
@media (max-width: 768px) {
  .generic-code-block {
    font-size: 12px;             /* Gets even smaller */
    padding: 12px;
    border-radius: 4px;          /* Tighter radius */
  }

  .generic-code-block__header {
    padding: 6px 12px;
  }

  .generic-code-block__copy-btn {
    padding: 2px 6px;
    font-size: 10px;
  }
}
```

### Why This CSS is the Enemy

| Pattern | What It Signals | Editorial Alternative |
|---------|-----------------|----------------------|
| Dark background (#1e1e1e) | "Enter the IDE" | Warm cream that matches page |
| Rounded corners (8px) | "Friendly web app" | Sharp edges (0) - decisive |
| Traffic light dots | "MacOS window" | None - code is content |
| Line numbers | "Source code view" | Hidden or very muted |
| 7+ syntax colors | "Rainbow IDE theme" | 2-3 colors max |
| Always-visible copy button | "Utility over content" | Hover-reveal or none |
| Box shadow | "Floating element" | Flat, flush with page |
| Header bar | "Application chrome" | Minimal or none |

---

## 2. Visual Diagram - Generic vs Editorial

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                        GENERIC VS EDITORIAL CODE BLOCKS                       │
└──────────────────────────────────────────────────────────────────────────────┘

GENERIC (VS Code Clone)                    EDITORIAL (Magazine Typography)
═══════════════════════                    ═══════════════════════════════

┌────────────────────────────────┐
│ ● ● ●              main.js [📋]│
├────────────────────────────────┤         ╭─────────────────────────────────
│                                │         │ JAVASCRIPT
│  1 │ function hello() {       │         │─────────────────────────────────
│  2 │   const msg = "world";   │         │
│  3 │   console.log(msg);      │         │ function hello() {
│  4 │ }                        │         │   const msg = "world";
│                                │         │   console.log(msg);
│                                │         │ }
└────────────────────────────────┘         │
                                           │─────────────────────────────────
                                           │ A simple greeting function.
                                           ╰─────────────────────────────────

CHARACTERISTICS:                           CHARACTERISTICS:

[✗] Dark background (#1e1e1e)              [✓] Warm cream background (#F5F0EB)
[✗] 8px border-radius                      [✓] 0px border-radius (sharp)
[✗] Traffic light dots                     [✓] No window chrome
[✗] Line numbers (prominent)               [✓] No line numbers (optional muted)
[✗] Box shadow for depth                   [✓] Flat, no shadow
[✗] Copy button always visible             [✓] Hidden or hover-reveal
[✗] 7+ syntax colors                       [✓] 2-3 syntax colors max
[✗] Header bar mimics app                  [✓] Minimal label (serif italic)
[✗] Rounded language badge                 [✓] Uppercase serif label

SOUL IMPACT:                               SOUL IMPACT:

"I am a tool"                              "I am typography"
"Enter the IDE"                            "Continue reading"
"Code is separate from content"            "Code is part of the narrative"
"Generic developer tool"                   "Curated editorial content"
```

### Side-by-Side Property Comparison

```
┌─────────────────┬──────────────────────┬──────────────────────────────────┐
│ Property        │ GENERIC              │ EDITORIAL                        │
├─────────────────┼──────────────────────┼──────────────────────────────────┤
│ background      │ #1e1e1e (dark)       │ #F5F0EB (warm cream)             │
│                 │ #282c34 (One Dark)   │ transparent (inherits page)      │
├─────────────────┼──────────────────────┼──────────────────────────────────┤
│ border-radius   │ 8px, 12px, 6px       │ 0 (zero, always)                 │
├─────────────────┼──────────────────────┼──────────────────────────────────┤
│ border          │ 1px solid #e1e4e8    │ 4px solid left accent            │
│                 │ rgba border          │ OR 1px solid subtle              │
├─────────────────┼──────────────────────┼──────────────────────────────────┤
│ box-shadow      │ 0 2px 4px shadow     │ none                             │
│                 │ inset shadow         │                                  │
├─────────────────┼──────────────────────┼──────────────────────────────────┤
│ font-family     │ Fira Code, Consolas  │ JetBrains Mono (mono)            │
│                 │ (generic stack)      │ Instrument Serif (label)         │
├─────────────────┼──────────────────────┼──────────────────────────────────┤
│ line-height     │ 1.5 (generic)        │ 1.6-1.7 (readable)               │
├─────────────────┼──────────────────────┼──────────────────────────────────┤
│ padding         │ 16px all around      │ 24px (generous, editorial)       │
├─────────────────┼──────────────────────┼──────────────────────────────────┤
│ syntax colors   │ 7-12 colors          │ 2-3 colors maximum               │
├─────────────────┼──────────────────────┼──────────────────────────────────┤
│ line numbers    │ Always visible       │ Hidden (or very muted)           │
├─────────────────┼──────────────────────┼──────────────────────────────────┤
│ copy button     │ Always visible       │ Hover-reveal or none             │
├─────────────────┼──────────────────────┼──────────────────────────────────┤
│ header/chrome   │ Window-like header   │ None or minimal label            │
└─────────────────┴──────────────────────┴──────────────────────────────────┘
```

---

## 3. Soul Impact Analysis Table

| Aspect | Generic Approach | Editorial Approach | Soul Impact |
|--------|------------------|-------------------|-------------|
| **Background** | Dark (#1e1e1e, #282c34) | Warm cream (#F5F0EB) or transparent | Dark creates "separate app." Cream integrates with page, code becomes content not tool. |
| **Corners** | Rounded (6-12px) | Sharp (0px) | Rounded = friendly, safe, generic. Sharp = decisive, confident, Sanrok aesthetic, print heritage. |
| **Border** | Thin all-around (#e1e4e8) | Left accent (4px primary color) OR thin bottom | All-around border = container. Left accent = editorial pull-quote style, draws eye without enclosing. |
| **Line Numbers** | Always visible, prominent | Hidden or barely visible (#b0a99f) | Visible = source code view, debugging. Hidden = typography, reading. |
| **Syntax Colors** | 7-12 distinct colors | 2-3 colors maximum | Rainbow = cognitive overload, nothing stands out. Minimal = clean, editorial, not overwhelming. |
| **Shadow** | Box-shadow for "depth" | None (flat) | Shadow = fake 3D, "floating element." Flat = honest, print heritage, graphic design aesthetic. |
| **Copy Button** | Always visible, prominent | Hover-reveal or none | Always visible = utility dominates. Hover = respects content, rewards exploration. |
| **Label/Badge** | Pill shape, filled color | Uppercase serif italic | Pill = decorative candy. Serif italic = matches editorial typography system. |
| **Header** | Window chrome (dots, bar) | None or minimal | Header = "this is an app." None = code is content. |
| **Font** | Generic monospace stack | Curated mono + serif pairing | Generic = could be anywhere. Curated = intentional editorial choice. |
| **Figcaption** | None or minimal | Italic serif description | No caption = code without context. Caption = editorial explanation, like magazine figure. |

### The Core Philosophy Shift

**Generic mindset**: "Code blocks are mini-applications embedded in the page."
- Result: Code looks like VS Code screenshot
- Signal: "I copied this from somewhere"
- Feel: Separate, tool-like, interrupts reading flow

**Editorial mindset**: "Code blocks are typography with a different font."
- Result: Code looks like magazine figure with caption
- Signal: "This is curated content"
- Feel: Integrated, content-like, enhances reading flow

---

## 4. Research Findings

### 4.1 Stripe Documentation Analysis

Based on Stripe's approach with [Markdoc](https://stripe.com/blog/markdoc):

- **Philosophy**: Treat documentation like data, not like an application
- **Constraint-driven**: "Impose constraints on styling and programming"
- **Content-first**: Decouple code from content
- **Key insight**: "Prescriptive rails for content extensibility"

Stripe's code blocks are notable for:
- Clean, minimal syntax highlighting
- No traffic light dots
- Professional spacing
- Integrated with documentation design system

### 4.2 Tailwind CSS Documentation Analysis

From [Tailwind CSS Installation page](https://tailwindcss.com/docs):

**Visual Characteristics:**
- Copy buttons integrated but subtle
- Tab-based code examples (different installation methods)
- Terminal/language indicators ("Terminal", "vite.config.ts")
- Numbered step indicators in grid layout
- Dark theme optimized with `dark:` classes
- No visible line numbers
- Professional spacing with grid-based layout

**Key observations:**
- More documentation-focused than IDE-like
- Prioritizes readability and simplicity
- Uses Tailwind's own utility-first design
- Responsive grid layout for step-by-step guides

### 4.3 Vercel/Geist Design System

From [Vercel Design Guidelines](https://vercel.com/design/guidelines):

**Principles:**
- Use `color-scheme: dark` for proper contrast in dark modes
- Tabular numbers for comparisons: `font-variant-numeric: tabular-nums`
- Layered shadows to mimic ambient and direct light
- Combine borders and shadows for crisp edges
- Geist Mono font for code content

**Key insight**: Vercel separates styling concerns (design tokens) from behavior, allowing consistent code block appearance across different contexts.

### 4.4 Linear App Documentation

From [Linear Editor documentation](https://linear.app/docs/editor):

**Design philosophy:**
- "Professional" appearance for engineers
- Dark gray sans-serif (Inter) on black background
- Code environments that match what engineers prefer
- Minimizes battery drain and eye strain
- Uses styled-components with Radix Primitives

**Key observation**: Linear's approach is intentionally "engineering-focused" but maintains editorial quality through:
- Clean typography (Inter font)
- Consistent design system (Orbiter)
- No unnecessary chrome

### 4.5 Brutalist Web Design Principles

From [Brutalist Web Design](https://brutalist-web.design):

**Core principles for code blocks:**

1. **Honest design**: "To trick or deceive the visitor goes against the nature of a website"
2. **Visual honesty**: Hyperlinks must look like hyperlinks, buttons like buttons
3. **Content-first**: Website exists to deliver information, not mimic applications
4. **Visual restraint**: "Decoration for its own sake... goes counter to Brutalist Web Design"
5. **Starting point**: "Left-aligned black text on a white background, and apply styling only to solve a specific problem"

**Application to code blocks:**
- Code should look like code, not like an IDE screenshot
- No decorative elements (traffic lights, gradients)
- Restraint as foundation, not afterthought
- Styling solves problems, not adds decoration

---

## 5. Minimal Syntax Highlighting Philosophy

### 5.1 The Core Argument

From [Nikita Tonsky's "Everyone is getting syntax highlighting wrong"](https://tonsky.me/blog/syntax-highlighting/):

> "If everything is highlighted, nothing is highlighted."

**The problem with standard themes:**
- 7-12 distinct colors create visual noise
- Eye adapts, everything blends together
- Instead of separation, you get homogenization

**The solution:**
- Use 4-5 colors maximum
- Colors should be memorable and distinct
- You should be able to recall "strings are green" without effort

### 5.2 What to Highlight vs. Ignore

**HIGHLIGHT:**
| Element | Why |
|---------|-----|
| Strings | Reference points where logic starts |
| Numbers/Constants | Sparingly used, serve as anchors |
| Comments | Important explanations deserve visibility |
| Top-level definitions | Structural overview |

**DON'T HIGHLIGHT:**
| Element | Why |
|---------|-----|
| Keywords (`if`, `else`, `function`) | Ubiquitous, highlighting them is noise |
| Variable names | 75% of code is variable names |
| Function calls | Everywhere, not special |
| Punctuation | Structural, not semantic |

### 5.3 The Alabaster Philosophy

The Alabaster theme uses only 4 classes:
1. **Strings** - All string literals
2. **Constants** - Numbers, symbols, keywords, booleans
3. **Comments** - All comments
4. **Definitions** - Global/top-level definitions

**Result**: A calm color scheme that actually helps you find what you're looking for.

### 5.4 From Ignacio Carbajo's Analysis

From ["Why I use minimal syntax highlighting"](https://ignaciocarbajo.com/blog/why-minimal-syntax-highlighting/):

**Key arguments:**
- Research is inconclusive on whether highlighting improves productivity
- Different color schemes across platforms (GitHub, Stack Overflow) create inconsistency
- Cognitive load concerns from extended code review sessions
- Adaptation happens faster than expected when reducing colors

**Recommendations:**
- Keep comments, strings, and diffs colored
- Enable cursor highlighting for visibility
- Highlight matching braces
- Use a light theme with most colors disabled
- Minimize UI clutter (reduce line number opacity)

**Core insight**: "Decluttering the editor matters more than any specific color scheme."

### 5.5 DuoTone Approach

DuoTone themes use only 2 hues (7 shades total):
- Tone down less important parts (punctuation, brackets)
- Highlight only important elements
- Results in calmer color scheme
- Still enables finding what you need

**Editorial application**: Perfect for documentation where code should integrate with page design.

---

## 6. Editorial CSS Specification

### 6.1 Base Code Block

```css
/* ═══════════════════════════════════════════════════════════════════════════
   EDITORIAL CODE BLOCK - Base Specification

   Philosophy: Code as typography, not code as application
   Reference: Sanrok design system, magazine/editorial layouts
   ═══════════════════════════════════════════════════════════════════════════ */

/* Design Tokens (integrate with existing system) */
:root {
  /* Colors */
  --code-bg: var(--color-background-subtle, #F5F0EB);
  --code-border: var(--color-border, #E5DDD5);
  --code-text: var(--color-text, #1A1A1A);
  --code-text-muted: var(--color-text-muted, #6B6B6B);
  --code-accent: var(--color-primary, #E83025);

  /* Typography */
  --code-font-mono: var(--font-mono, 'JetBrains Mono', 'SF Mono', Monaco, monospace);
  --code-font-label: var(--font-display, 'Instrument Serif', Georgia, serif);

  /* Spacing */
  --code-padding: 24px;
  --code-margin: 24px;
}

/* Main Container */
.code-block {
  /* Background - warm, integrates with page */
  background: var(--code-bg);

  /* Border - left accent OR subtle bottom, NEVER all-around */
  border-radius: 0;                          /* CRITICAL: Never rounded */
  border-left: 4px solid var(--code-accent);

  /* Shadow - NONE */
  box-shadow: none;

  /* Spacing */
  padding: var(--code-padding);
  margin: var(--code-margin) 0;

  /* Position for label */
  position: relative;
}

/* Alternative: Subtle border variant */
.code-block--subtle {
  border-left: none;
  border-bottom: 1px solid var(--code-border);
}

/* Alternative: Heavy border (brutalist) */
.code-block--heavy {
  border: 4px solid var(--code-text);
  border-left-width: 8px;
}
```

### 6.2 Label/Language Indicator

```css
/* ═══════════════════════════════════════════════════════════════════════════
   CODE BLOCK LABEL

   Editorial approach: Serif italic, uppercase, like figure caption prefix
   ═══════════════════════════════════════════════════════════════════════════ */

.code-block__label {
  /* Typography - matches editorial system */
  font-family: var(--code-font-label);
  font-style: italic;
  font-size: var(--text-label, 12px);
  font-weight: 400;

  /* Text treatment */
  text-transform: uppercase;
  letter-spacing: 0.05em;

  /* Color */
  color: var(--code-accent);

  /* Spacing */
  margin-bottom: 12px;
  padding-bottom: 8px;

  /* Separator */
  border-bottom: 1px solid var(--code-border);

  /* Display */
  display: block;
}

/* Alternative: No border variant */
.code-block__label--minimal {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 16px;
}

/* Alternative: Inline with content */
.code-block__label--inline {
  display: inline-block;
  margin-bottom: 0;
  margin-right: 16px;
  border-bottom: none;
  padding-bottom: 0;
}
```

### 6.3 Code Content

```css
/* ═══════════════════════════════════════════════════════════════════════════
   CODE CONTENT

   Typography optimized for reading code as content
   ═══════════════════════════════════════════════════════════════════════════ */

.code-block__pre {
  margin: 0;
  padding: 0;
  overflow-x: auto;

  /* Hide scrollbar but allow scrolling */
  scrollbar-width: thin;
  scrollbar-color: var(--code-border) transparent;
}

.code-block__pre::-webkit-scrollbar {
  height: 4px;
}

.code-block__pre::-webkit-scrollbar-track {
  background: transparent;
}

.code-block__pre::-webkit-scrollbar-thumb {
  background: var(--code-border);
  border-radius: 2px;
}

.code-block__code {
  /* Font */
  font-family: var(--code-font-mono);
  font-size: 14px;
  line-height: 1.6;

  /* Color */
  color: var(--code-text);

  /* Background - transparent to inherit from container */
  background: transparent;

  /* Whitespace */
  white-space: pre;
  tab-size: 2;

  /* Rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### 6.4 Minimal Syntax Highlighting (2-3 Colors Only)

```css
/* ═══════════════════════════════════════════════════════════════════════════
   SYNTAX HIGHLIGHTING - Minimal Editorial Palette

   Philosophy: 2-3 colors maximum, nothing more
   Reference: Alabaster theme, DuoTone approach
   ═══════════════════════════════════════════════════════════════════════════ */

/* PRIMARY: Accent color for keywords/important */
.code-block__code .keyword,
.code-block__code .token-keyword {
  color: var(--code-accent, #E83025);
}

/* SECONDARY: Muted for strings/values */
.code-block__code .string,
.code-block__code .token-string,
.code-block__code .number,
.code-block__code .token-number {
  color: var(--code-text-muted, #6B6B6B);
}

/* TERTIARY: Very muted for comments */
.code-block__code .comment,
.code-block__code .token-comment {
  color: var(--code-text-muted, #6B6B6B);
  opacity: 0.7;
  font-style: italic;
}

/* EVERYTHING ELSE: Default text color (no highlighting) */
.code-block__code .function,
.code-block__code .token-function,
.code-block__code .variable,
.code-block__code .token-variable,
.code-block__code .operator,
.code-block__code .token-operator,
.code-block__code .punctuation,
.code-block__code .token-punctuation,
.code-block__code .property,
.code-block__code .token-property {
  color: inherit;  /* Same as base text */
}
```

### 6.5 Figcaption (Editorial Caption)

```css
/* ═══════════════════════════════════════════════════════════════════════════
   CODE BLOCK CAPTION

   Like a magazine figure caption - italic serif, descriptive
   ═══════════════════════════════════════════════════════════════════════════ */

.code-block__caption {
  /* Typography */
  font-family: var(--code-font-label);
  font-style: italic;
  font-size: var(--text-sm, 14px);
  line-height: 1.5;

  /* Color */
  color: var(--code-text-muted);

  /* Spacing */
  margin-top: 16px;
  padding-top: 12px;

  /* Separator */
  border-top: 1px solid var(--code-border);
}

/* Credit line */
.code-block__caption .credit {
  display: block;
  margin-top: 8px;

  /* Different styling */
  font-style: normal;
  font-size: var(--text-xs, 11px);
  text-transform: uppercase;
  letter-spacing: 0.08em;

  color: var(--code-text-muted);
  opacity: 0.8;
}
```

### 6.6 Copy Button (Hover Reveal)

```css
/* ═══════════════════════════════════════════════════════════════════════════
   COPY BUTTON - Hover Reveal Pattern

   Philosophy: Utility exists but doesn't dominate
   ═══════════════════════════════════════════════════════════════════════════ */

.code-block__copy {
  /* Position */
  position: absolute;
  top: var(--code-padding);
  right: var(--code-padding);

  /* Hidden by default */
  opacity: 0;
  transform: translateY(-4px);

  /* Transition */
  transition: opacity 0.2s ease, transform 0.2s ease;

  /* Styling - minimal */
  background: transparent;
  border: 1px solid var(--code-border);
  border-radius: 0;               /* Sharp, matches system */

  padding: 4px 8px;

  /* Typography */
  font-family: var(--code-font-label);
  font-size: 10px;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  color: var(--code-text-muted);

  cursor: pointer;
}

/* Show on hover */
.code-block:hover .code-block__copy {
  opacity: 1;
  transform: translateY(0);
}

/* Button hover state */
.code-block__copy:hover {
  background: var(--code-border);
  color: var(--code-text);
}

/* Success state */
.code-block__copy--copied {
  color: var(--color-success, #6b9b7a);
  border-color: var(--color-success, #6b9b7a);
}
```

---

## 7. HTML Structure

### 7.1 Standard Code Block

```html
<!-- Standard code block with label and caption -->
<figure class="code-block">
  <span class="code-block__label">JavaScript</span>
  <button class="code-block__copy" aria-label="Copy code">Copy</button>
  <pre class="code-block__pre"><code class="code-block__code">function greet(name) {
  return `Hello, ${name}!`;
}</code></pre>
  <figcaption class="code-block__caption">
    A simple greeting function demonstrating template literals.
    <span class="credit">Listing 1.2</span>
  </figcaption>
</figure>
```

### 7.2 Minimal Code Block (No Caption)

```html
<!-- Minimal code block -->
<div class="code-block code-block--subtle">
  <span class="code-block__label code-block__label--minimal">bash</span>
  <pre class="code-block__pre"><code class="code-block__code">npm install @sanrok/design-system</code></pre>
</div>
```

### 7.3 Heavy Border Variant

```html
<!-- Brutalist/heavy border variant -->
<figure class="code-block code-block--heavy">
  <span class="code-block__label">Configuration</span>
  <pre class="code-block__pre"><code class="code-block__code">{
  "compilerOptions": {
    "strict": true
  }
}</code></pre>
  <figcaption class="code-block__caption">
    Recommended TypeScript configuration.
  </figcaption>
</figure>
```

### 7.4 Inline Code Block

```html
<!-- Inline code within text -->
<p>
  Use the <code class="code-inline">--production</code> flag to optimize builds.
</p>
```

### 7.5 With Syntax Highlighting (Manual Tokens)

```html
<figure class="code-block">
  <span class="code-block__label">JavaScript</span>
  <pre class="code-block__pre"><code class="code-block__code"><span class="keyword">const</span> result = calculate(<span class="string">"input"</span>);
<span class="comment">// Process the result</span>
console.log(result);</code></pre>
</figure>
```

---

## 8. Variations

### 8.1 Left Border Accent (Default)

```css
/* Default: Left border accent */
.code-block--accent-left {
  border-left: 4px solid var(--code-accent);
  border-top: none;
  border-right: none;
  border-bottom: none;
}
```

**When to use**: Standard documentation code blocks, tutorial content, API examples.

### 8.2 Subtle/Bottom Border

```css
/* Subtle: Bottom border only */
.code-block--subtle {
  border-left: none;
  border-bottom: 1px solid var(--code-border);
  background: transparent;  /* Inherits page background */
}
```

**When to use**: Inline code examples, less prominent snippets, config files.

### 8.3 Heavy Border (Brutalist)

```css
/* Heavy: Full border for emphasis */
.code-block--heavy {
  border: 4px solid var(--code-text);
  border-left-width: 8px;  /* Heavier left accent */
  background: var(--code-bg);
}
```

**When to use**: Featured code examples, primary tutorials, important warnings.

### 8.4 Transparent/Inline

```css
/* Transparent: Flows with content */
.code-block--inline {
  background: transparent;
  border: none;
  padding: 16px 0;
  margin: 16px 0;
}
```

**When to use**: Code within prose, philosophical examples, minimal emphasis.

### 8.5 With Annotation

```css
/* Annotation: Margin notes style */
.code-block--annotated {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 24px;
}

.code-block--annotated .code-block__annotation {
  font-family: var(--code-font-label);
  font-style: italic;
  font-size: 13px;
  color: var(--code-text-muted);
  padding-top: 8px;
  border-top: 1px solid var(--code-border);
}
```

**When to use**: Educational content, code review examples, explaining complex logic.

### 8.6 Terminal/Command Style

```css
/* Terminal: Command prompt styling */
.code-block--terminal {
  background: #1A1A1A;  /* Dark, but not IDE dark */
  border-left: 4px solid var(--code-accent);
}

.code-block--terminal .code-block__code {
  color: #F5F0EB;
}

.code-block--terminal .code-block__label {
  color: #F5F0EB;
  opacity: 0.8;
}

/* Prompt indicator */
.code-block--terminal .prompt::before {
  content: '$ ';
  color: var(--code-accent);
  user-select: none;
}
```

**When to use**: Shell commands, terminal output, CLI examples.

---

## 9. What NOT to Include

This section explicitly documents features that MUST NOT appear in editorial code blocks.

### 9.1 Never Include: Line Numbers

**Why not**: Line numbers turn content into "source code view." They signal debugging, not reading. Editorial code is for understanding, not for referencing specific lines.

**Exception**: If ABSOLUTELY needed (e.g., error messages reference lines), use extremely muted styling:
```css
.code-block__line-number {
  color: var(--code-text-muted);
  opacity: 0.3;
  font-size: 11px;
  user-select: none;
}
```

### 9.2 Never Include: Always-Visible Copy Button

**Why not**: Utility features should not dominate visual hierarchy. Copy is a secondary action - content is primary.

**Instead**: Use hover-reveal pattern (see Section 6.6) or omit entirely.

### 9.3 Never Include: Theme Toggle

**Why not**: Feature creep. Code block becomes "app within app." Reader shouldn't be configuring your documentation.

### 9.4 Never Include: Traffic Light Dots

**Why not**: MacOS window decoration has no place on a webpage. It signals "I copied this from a tutorial template."

### 9.5 Never Include: Expand/Collapse Buttons

**Why not**: Content should stand on its own. If code is too long, split it or provide context differently.

**Exception**: Very long code samples (50+ lines) might use progressive disclosure, but style it editorially, not as a "show more" button.

### 9.6 Never Include: Syntax Color Rainbow (7+ Colors)

**Why not**: Cognitive overload. Nothing stands out when everything is colored.

**Instead**: 2-3 colors maximum. Accent for keywords, muted for strings/values, italic for comments.

### 9.7 Never Include: Diff Highlighting (Unless Explicit Diff Context)

**Why not**: Visual noise. Diff highlighting is for comparing versions, not for reading code.

**Exception**: Explicit diff/comparison examples where the comparison IS the content.

### 9.8 Never Include: Box Shadow

**Why not**: Fake 3D depth. Code blocks are typography, not floating cards. Flat is honest.

### 9.9 Never Include: Rounded Corners

**Why not**: Signals "friendly modern web app." Editorial is decisive, confident, sharp.

**Always**: `border-radius: 0;`

### 9.10 Never Include: Header Bar/Window Chrome

**Why not**: Mimics desktop application. Code is content, not a windowed app.

---

## 10. Verification Checklist

Use this checklist to verify code block implementations meet editorial standards.

### 10.1 Visual Verification

```
[ ] NO rounded corners (border-radius: 0)
[ ] NO box shadow
[ ] NO dark IDE background (unless terminal variant)
[ ] NO traffic light dots
[ ] NO visible line numbers (or extremely muted)
[ ] NO always-visible copy button
[ ] NO header bar/window chrome
[ ] NO 4+ syntax highlighting colors
```

### 10.2 Typography Verification

```
[ ] Label uses serif italic (Instrument Serif)
[ ] Label is uppercase with letter-spacing
[ ] Code uses clean monospace (JetBrains Mono)
[ ] Line-height is 1.6+ for readability
[ ] Caption uses serif italic
[ ] Caption credit is uppercase sans
```

### 10.3 Color Verification

```
[ ] Background is warm cream (#F5F0EB) or transparent
[ ] Border uses accent color (primary red) or subtle gray
[ ] Syntax highlighting uses maximum 2-3 colors
[ ] Keywords use accent color
[ ] Strings/values use muted gray
[ ] Comments are italic with reduced opacity
```

### 10.4 Structure Verification

```
[ ] Uses <figure> element for semantic structure
[ ] Has <figcaption> for caption content
[ ] Label clearly indicates language/context
[ ] Copy button is hidden until hover (or absent)
[ ] Border is LEFT accent or subtle BOTTOM (never all-around)
```

### 10.5 Soul Verification

```
[ ] Feels like magazine typography, not IDE screenshot
[ ] Integrates with page design, not separate from it
[ ] Code is content, not tool
[ ] Reading flow is maintained, not interrupted
[ ] Would fit in editorial/print context
```

---

## 11. Sources

### Documentation Systems

- [Stripe Documentation](https://docs.stripe.com/) - Markdoc-powered, content-first approach
- [How Stripe builds interactive docs with Markdoc](https://stripe.com/blog/markdoc) - Philosophy of constrained content
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Clean code block styling
- [Vercel Geist Design System](https://vercel.com/geist/introduction) - Design tokens approach
- [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines) - Styling best practices
- [Linear Documentation](https://linear.app/docs) - Engineering-focused editorial
- [Material for MkDocs Code Blocks](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/) - Configuration options
- [Docusaurus Code Blocks](https://docusaurus.io/docs/markdown-features/code-blocks) - Framework approach
- [Mintlify Code Block Documentation](https://www.mintlify.com/blog/code-block-documentation) - Best practices

### Minimal Syntax Highlighting

- [Nikita Tonsky: "Everyone is getting syntax highlighting wrong"](https://tonsky.me/blog/syntax-highlighting/) - Core philosophy
- [Ignacio Carbajo: "Why I use minimal syntax highlighting"](https://ignaciocarbajo.com/blog/why-minimal-syntax-highlighting/) - Practical experience
- [Experiments in Minimal Syntax Highlighting](https://nytpu.com/gemlog/2024-02-02) - Alternative approaches
- [Rethink Syntax Highlighting](https://dawranliou.com/blog/rethink-syntax-highlighting/) - DuoTone philosophy
- [Alex Chan: Doing my own syntax highlighting](https://alexwlchan.net/2025/syntax-highlighting/) - Custom implementation

### Design Philosophy

- [Brutalist Web Design](https://brutalist-web.design) - Core principles
- [NeoBrutalismCSS](https://matifandy8.github.io/NeoBrutalismCSS/) - CSS framework reference
- [Tiny Brutalism CSS](https://github.com/pruger/tiny-brutalism-css) - Minimal approach
- [brutalist.style](https://brutalist.style/) - Classless stylesheet

### Editorial Typography

- [AIGA Eye on Design: The Art of Magazine Typography](https://eyeondesign.aiga.org/making-rules-breaking-rules-the-art-of-magazine-typography/) - Typography principles
- [Smashing Magazine: Creative Print Typography Layouts](https://www.smashingmagazine.com/2009/04/creative-print-typography-layouts/) - Print heritage
- [Azura Magazine: How to Use Typography](https://azuramagazine.com/articles/magazine-page-layout-how-to-use-typography) - Layout principles
- [InDesign Skills: Best Fonts for Magazine Design](https://www.indesignskills.com/tutorials/best-magazine-fonts/) - Font selection

### Tools and Libraries

- [Prism.js](https://prismjs.com/) - Lightweight syntax highlighter (2KB)
- [macrolight](https://github.com/xyzshantaram/macrolight) - Minimal syntax highlighter
- [Font with Built-In Syntax Highlighting](https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/) - Experimental approach
- [Shiki](https://shiki.style/) - VS Code-accurate highlighting (for comparison)

### Existing Implementation Reference

- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-extraction/archive/variations/code-blocks/variation-4-editorial.html` - Previous editorial code block implementation
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-extraction/archive/variations/research/editorial.md` - Editorial design research
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-extraction/archive/variations/research/brutalist.md` - Brutalist design research

---

## Summary

Editorial code blocks reject the "code-as-application" paradigm. Where generic code blocks mimic VS Code with dark backgrounds, traffic lights, and rainbow syntax, editorial code blocks treat code as **typography within the document flow**.

**The key shifts:**

1. **Background**: Dark IDE → Warm cream (integrates with page)
2. **Corners**: Rounded → Sharp (decisive, confident)
3. **Border**: All-around → Left accent (editorial pull-quote style)
4. **Syntax**: 7+ colors → 2-3 colors (minimal, readable)
5. **Chrome**: Window decoration → None (code is content)
6. **Utility**: Always-visible copy → Hover-reveal or none (content first)
7. **Caption**: None → Serif italic figcaption (like magazine figure)

The result: Code that feels like it belongs in a magazine article, not a coding tutorial. Code that enhances reading flow instead of interrupting it. Code that is content, not tool.

---

*Research completed: 2026-02-03*
*Lines: 850+*
*Sub-Agent: 4B - Code Block Editorial Anatomy*
