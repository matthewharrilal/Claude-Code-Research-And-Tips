# Page-Specific Flagship Analysis: Yegge Gas Town

**Agent:** CSS + Compositional Design Specialist
**Date:** 2026-02-25
**Source material:** Full HTML (2,931 lines), 9 PA auditor REFINE reports (A-I), weaver diagnostic + artistic reports
**Current score:** PA-05 3.5/4, Tier 5 9/9, DELIGHT 4/10, AUTHORITY 8/10

---

## Executive Summary

This page is at the CEILING/FLAGSHIP boundary. The compositional logic is sound -- the factory metaphor is STRUCTURAL (confirmed by G's PA-44: metaphor persists without text labels). The multi-coherence at Z2-Z3 is COMPOSED-level (7 simultaneous property shifts). What separates this from undeniable Flagship is concentrated in three dimensions:

1. **Dark Zone Fatigue** (6/10 auditors) -- the strongest cross-auditor signal
2. **DELIGHT register at 4/10** -- the weakest emotional dimension by far
3. **Multi-coherence gaps at edge boundaries** (Z1-Z2 and Z4-Z5 only shift 2 channels)

Each section below provides exact CSS selectors, property values, and needle-movement ratings.

---

## 1. Dark Zone Fatigue Relief (6/10 auditors flagged)

### The Problem
Zone 3 (`.zone-factory-floor`) runs continuously from the Z2-Z3 threshold through Beads (S4), 6 Waves (S5), and Core Principles (S6) -- approximately 2,200px of unbroken `#1E1E1E`. Then Z4 (`.zone-assembly-line`) continues at `#F0EBE0` but the transition back to light happens after a LONG dark stretch. The weaver artistic report captures it: "the dark zones become a visual monoculture in the middle third."

### Where the Relief Moment Should Go

**Between S5 (6 Waves / 8 Stages) and S6 (Core Principles).** This is the natural content boundary: S4-S5 are informational/analytical (tables, data), while S6 is philosophical (principles, blockquotes). The reader has absorbed dense data and needs a breath before principles.

### Specific CSS Changes

**Option A: Lighter Interlude Section (Recommended)**

Create a `.z3-interlude` between the S5 and S6 `.z3-section` elements. This does NOT break the factory metaphor -- it represents a "foreman's office" within the factory: a slightly warmer, lit pocket.

```css
/* Insert between S5 and S6 in Zone 3 */
.z3-interlude {
  background: #2A2520;              /* Warm dark brown, NOT cream -- still inside factory */
  border-top: 1px solid rgba(232, 48, 37, 0.3);
  border-bottom: 1px solid rgba(232, 48, 37, 0.3);
  padding: var(--space-8) 0;
  margin: var(--space-8) calc(-1 * var(--space-6));  /* Bleed to container edges */
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}

.z3-interlude p {
  color: #D4C8B8;                   /* Warmer, slightly muted text */
  font-family: var(--font-display);
  font-style: italic;
  font-size: 17px;
  line-height: 1.7;
  max-width: 55ch;
}
```

The HTML would contain a brief transitional thought -- a Yegge quote or a "now that you understand the framework, here are the principles that drive it" bridging sentence. This gives the reader 60-80px of a different dark shade that breaks the visual monoculture without abandoning the dark zone.

**Option B: Gradient Shift Within Z3**

Instead of a discrete interlude, make Z3's background subtly shift from pure `#1E1E1E` at the top to `#252018` (warm dark brown) at the bottom, creating a visual "deepening" as you move further into the factory.

```css
.zone-factory-floor {
  background: linear-gradient(
    180deg,
    #1E1E1E 0%,
    #1E1E1E 40%,          /* Pure dark for S4 + first half of S5 */
    #252018 70%,           /* Warm shift begins at 8 Stages */
    #2A2520 100%           /* Warmest at Core Principles */
  );
}
```

This is sub-perceptual at any single viewport but perceptible over the full scroll -- the reader FEELS the factory getting warmer/closer as they go deeper. The shift is only ~18 RGB points over 2,200px of scroll.

**Needle movement: Flagship-defining.** This is the single highest-leverage change. The 6/10 auditor signal is the strongest consensus finding. Resolving it addresses both dark zone fatigue AND adds a new multi-coherence channel (background gradient as a spatial progression signal).

---

## 2. DELIGHT Register (Currently 4/10 -- Weakest Dimension)

The weaver diagnostic identifies DELIGHT as the weakest register. Here are the specific micro-refinements that create the DELIGHT vocabulary:

### 2a. Zone-Specific ::selection Colors

Currently, the page has ONE selection style globally (`rgba(232, 48, 37, 0.15)`) and a Z3-specific override (`background: var(--factory-accent); color: white`). Flagship pages make selection colors ATMOSPHERIC -- each zone's selection reflects its personality.

```css
/* Z1: Warm amber -- office/orientation warmth */
.zone-loading-dock ::selection {
  background: rgba(217, 119, 6, 0.2);
  color: var(--factory-steel);
}

/* Z2: Muted teal -- analytical, dispatch floor */
.zone-dispatch-floor ::selection {
  background: rgba(74, 144, 217, 0.15);
  color: var(--factory-steel);
}

/* Z3: Already has red selection -- keep it. Factory floor = danger + intensity */

/* Z4: Green -- practice, checkpoints, "you're doing it right" */
.zone-assembly-line ::selection {
  background: rgba(74, 157, 107, 0.15);
  color: var(--factory-steel);
}

/* Z5: Purple -- reflection, resolution, wisdom */
.zone-shipping-bay ::selection {
  background: rgba(124, 58, 237, 0.12);
  color: var(--factory-steel);
}
```

**Needle movement: Meaningful shift.** Zone-specific selection is a Flagship signal because it means the designer thought about EVERY use case, including the reader's act of selecting text. It's the kind of detail that PA auditors notice on their second pass.

### 2b. Hover States on Interactive Elements

Currently, the troubleshooting accordions have NO hover state beyond the default cursor. The source links have a simple color change. The comparison table rows in Z2 have a hover, but nothing else does.

```css
/* Troubleshooting accordion hover -- industrial reveal */
.troubleshoot summary:hover {
  background: rgba(232, 48, 37, 0.05);
  border-left: 3px solid var(--factory-accent);
  padding-left: calc(var(--space-5) - 3px);  /* Compensate for border */
}

.troubleshoot summary:hover::after {
  color: var(--factory-steel);
  background: var(--factory-accent);
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

/* Table row hover in Z4 (implementation) -- add to match Z2's existing hover */
.zone-assembly-line tr:hover {
  background: rgba(232, 48, 37, 0.03);
}

/* Z5 table rows */
.zone-shipping-bay tr:hover {
  background: rgba(26, 26, 26, 0.04);
}

/* Z3 table rows -- subtle light reveal on dark */
.zone-factory-floor tr:hover {
  background: rgba(254, 249, 245, 0.04);
}

/* Source links -- underline reveal on hover */
.source-links a:hover {
  color: var(--factory-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}

/* Community card hover -- lift effect */
.community-card:hover {
  border-color: rgba(26, 26, 26, 0.25);
  background: rgba(26, 26, 26, 0.02);
}

/* Quote card hover -- subtle border intensification */
.quote-card:hover {
  border-left-color: var(--factory-accent);
  border-left-width: 2px;
  padding-left: calc(var(--space-5) - 1px);  /* Compensate */
}
```

**Needle movement: Meaningful shift.** Hover states communicate that someone cared about the INTERACTION, not just the reading. Every hover state is a conversation between the page and the reader.

### 2c. Transition Choreography on Accordions

The current troubleshooting accordions snap open/closed with no animation. A subtle choreography signals craftsmanship:

```css
.troubleshoot__content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease-out, padding 0.25s ease-out;
  padding-top: 0;
  padding-bottom: 0;
}

.troubleshoot[open] .troubleshoot__content {
  max-height: 500px;  /* Generous upper bound */
  padding-top: var(--space-4);
  padding-bottom: var(--space-4);
}

/* Rotate the + to x smoothly */
.troubleshoot summary::after {
  transition: transform 0.2s ease;
}

.troubleshoot[open] summary::after {
  transform: rotate(45deg);
}
```

Note: This requires the `<details>` animation to work with CSS (or a small JS enhancement). The `prefers-reduced-motion` media query already handles the accessibility case.

**Needle movement: Minor tweak.** Adds polish but doesn't fundamentally change the experience.

### 2d. Print Styles

Print CSS = someone cared about EVERY use case. This is the Flagship signal that separates "thorough" from "obsessive":

```css
@media print {
  .section-nav,
  .back-to-top {
    display: none;
  }

  .zone-factory-floor {
    background: #f5f5f5;
    color: #1A1A1A;
  }

  .zone-factory-floor .callout {
    background: #f0f0f0;
    border-left-color: #333;
  }

  .zone-factory-floor pre {
    background: #f5f5f5;
    border: 1px solid #ccc;
    color: #1A1A1A;
  }

  .zone-factory-floor th {
    color: #1A1A1A;
    border-bottom-color: #333;
  }

  .zone-factory-floor td {
    color: #333;
    border-bottom-color: #ddd;
  }

  .page-header {
    background: white;
    border-bottom: 2px solid #1A1A1A;
  }

  .page-header__title {
    color: #1A1A1A;
  }

  .page-header__subtitle,
  .page-header__id,
  .page-header__tag {
    color: #666;
  }

  .page-footer {
    background: white;
    border-top: 2px solid #1A1A1A;
    color: #666;
  }

  .troubleshoot {
    page-break-inside: avoid;
  }

  .troubleshoot[open] .troubleshoot__content {
    display: block;
  }

  a { color: #1A1A1A; text-decoration: underline; }
  a::after { content: " (" attr(href) ")"; font-size: 0.8em; color: #666; }
}
```

**Needle movement: Meaningful shift.** Print styles are one of the canonical "someone cared" signals. They demonstrate awareness that content has a life beyond the screen.

### 2e. First-Child / Last-Child Treatments

The page already has `.callout:first-child` and `:last-child` margin resets. Extend this to create CONTEXTUAL awareness:

```css
/* First section in each zone gets extra top breathing room */
.z1-section:first-child .section-indicator,
.z2-section:first-child .section-indicator,
.z3-section:first-child .section-indicator {
  margin-top: 0;
  padding-top: 0;
}

/* Last paragraph before a table gets tighter margin -- visual binding */
table:not(:first-child) {
  margin-top: calc(-1 * var(--space-2));  /* Pull table closer to its intro text */
}

/* First code block in Z4 gets a slightly different treatment -- "welcome to the terminal" */
.z4-section:first-child pre:first-of-type {
  border-top: 3px solid var(--factory-accent);
}

/* Last item in the troubleshoot series gets a closing border */
.troubleshoot:last-of-type {
  border-bottom: 3px solid rgba(26, 26, 26, 0.08);
}
```

**Needle movement: Minor tweak.** These are polish details that auditors notice subconsciously but rarely call out explicitly.

---

## 3. Factory-Floor Metaphor: STRUCTURAL to ATMOSPHERIC

### Current State

The metaphor is enacted through zone structure (light = office/briefing, dark = factory, light = desk/practice). Auditor G (PA-44) confirms: "Without any text, the visual structure communicates: arrival/briefing area -> threshold crossing -> deep interior -> operational work -> resolution/exit."

This is STRUCTURAL coupling. For ATMOSPHERIC, the metaphor needs to be FELT in the micro-typography and material textures, not just in the macro zone colors.

### 3a. Industrial Typography Shifts in the Dark Zone

Currently, Z3 headings use the same `font-display` (Instrument Serif) as all other zones. For atmospheric coupling, the dark zone should feel slightly different typographically -- like stencil paint on factory walls vs. printed signage in an office.

```css
/* Z3 headings: slightly condensed, slightly heavier -- stencil aesthetic */
.zone-factory-floor h2 {
  letter-spacing: -0.01em;          /* Tighter than Z1/Z2's default */
  font-weight: 400;                  /* Instrument Serif default, but if variable: slightly heavier */
}

/* Z3 section indicators: wider tracking = stencil spray-paint spacing */
.zone-factory-floor .section-indicator {
  letter-spacing: 0.15em;           /* Was 0.1em -- 50% wider in the factory */
}

/* Z3 callout labels: same widened tracking */
.zone-factory-floor .callout__label {
  letter-spacing: 0.12em;           /* Was implicit 0.1em */
}

/* Z3 bento cell labels: factory serial-number aesthetic */
.bento-cell__label {
  letter-spacing: 0.14em;           /* Wider than default 0.1em */
}
```

**Needle movement: Flagship-defining.** This is the difference between "the factory is announced" (STRUCTURAL) and "the factory is felt" (ATMOSPHERIC). The tracking widening in Z3 makes the uppercase labels feel like stenciled markings on metal crates. The reader won't consciously notice, but they'll FEEL the zone change.

### 3b. Component Border Adaptation Across Zones

Currently, callout borders are the same `4px solid` left border in all zones. For atmospheric coupling, borders should feel like different MATERIALS in different zones:

```css
/* Z1 borders: clean, precise -- office signage */
.zone-loading-dock .callout {
  border-left-width: 4px;
  border-left-style: solid;
}

/* Z2 borders: same -- dispatch paperwork */
.zone-dispatch-floor .callout {
  border-left-width: 4px;
  border-left-style: solid;
}

/* Z3 borders: thicker, slightly rougher -- industrial signage */
.zone-factory-floor .callout {
  border-left-width: 5px;           /* Slightly thicker in the factory */
}

/* Z3 bento cells: thicker borders = industrial framing */
.bento-cell {
  border-width: 2px;               /* Was 1px -- heavier in the factory */
}

/* Z4 borders: return to standard -- back at the desk */
.zone-assembly-line .callout {
  border-left-width: 4px;
}

/* Z5 borders: thinner, delicate -- resolution/departure */
.zone-shipping-bay .callout {
  border-left-width: 3px;          /* Lighter touch in resolution */
}
```

**Needle movement: Meaningful shift.** Border weight adaptation is a multi-coherence channel that currently doesn't shift across zones. Adding it creates a 7th or 8th channel at major transitions.

### 3c. Subtle Texture Differences (CSS-Only)

A very subtle noise/texture on Z3's background suggests industrial surfaces without requiring images:

```css
/* Z3: Very subtle industrial texture via CSS gradient noise */
.zone-factory-floor {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(42, 37, 32, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(42, 37, 32, 0.2) 0%, transparent 40%),
    radial-gradient(ellipse at 50% 80%, rgba(42, 37, 32, 0.15) 0%, transparent 45%),
    var(--factory-floor);
  background-attachment: fixed;      /* Texture doesn't scroll -- it's the building */
}
```

This creates very subtle tonal variation across the dark zone -- like light falling unevenly across a factory floor. The variation is sub-perceptual at any given scroll position but creates an atmospheric quality over the full dark stretch.

**Needle movement: Minor tweak to Meaningful shift.** Depends on execution subtlety. If too visible, it's distracting. If just right, it's atmospheric.

---

## 4. Multi-Coherence at Edge Boundaries

### Z1 to Z2 (Currently 2 Channels: Background + Typography Size)

The Z1-Z2 boundary currently shifts:
1. Background: `#FEF9F5` to `#EDE6DA` (23 RGB delta)
2. Typography: 18px/40px to 16px/32px body/heading

**Add a 3rd channel: Border treatment**

```css
/* Z2 callouts get slightly different border treatment than Z1 */
.zone-dispatch-floor .callout {
  border-left-width: 3px;           /* Was 4px -- slightly thinner = dispatch paperwork */
}

/* Z2 section indicator gets a different bottom border */
.zone-dispatch-floor .section-indicator {
  border-bottom: 1px solid rgba(26, 26, 26, 0.15);  /* Already exists */
  padding-bottom: var(--space-3);   /* Was var(--space-2) -- slightly more padding */
}
```

**Add a 4th channel: Component density shift**

Z1 is LOW density, Z2 is MODERATE. Make this visible by tightening Z2's inner section spacing:

```css
.z2-section {
  margin-bottom: var(--space-6);     /* Was var(--space-8) -- tighter than Z1's --space-12 */
}
```

This creates a perceivable rhythm change: Z1 sections breathe widely, Z2 sections are more compact. The boundary signal becomes 4 channels: background + typography + border weight + section spacing.

**Needle movement: Meaningful shift.** Resolves GR-50 gate failure. Turns a "gentle handoff" into a "considered handoff."

### Z4 to Z5 (Currently 2-3 Channels: Background + Typography H2 Size + Density)

The Z4-Z5 boundary currently shifts:
1. Background: `#F0EBE0` to `#E5DDD0` (only 16 RGB delta -- very subtle)
2. Typography: H2 28px to 32px (widening)
3. Components shift to quotes/comparisons/links

**Add channels:**

```css
/* Z5 body text returns to regular weight (Z4 was font-weight: 500) */
/* This already exists -- Z4 p { font-weight: 500 } vs Z5 p default 400 */
/* Make it more explicit: */
.zone-shipping-bay p {
  font-weight: 400;                 /* Explicit relaxation from Z4's 500 */
  line-height: 1.8;                 /* Slightly more generous than Z4's 1.7 */
}

/* Z5 table borders: lighter, more resolved */
.zone-shipping-bay th {
  border-bottom: 2px solid rgba(26, 26, 26, 0.15);  /* Was 3px at 0.2 -- lighter */
}

/* Z5 section indicator: no border-bottom, just the label */
.zone-shipping-bay .section-indicator {
  border-bottom: none;
  color: var(--factory-text-secondary);
  opacity: 0.8;                     /* Slightly faded -- resolution mood */
}
```

This adds font-weight (500 to 400), line-height (1.7 to 1.8), table border weight (3px to 2px), and section indicator styling as additional channels. The Z4-Z5 boundary now shifts 5-6 channels instead of 2-3.

**Needle movement: Meaningful shift.** The legato exit becomes a considered denouement.

---

## 5. Principle Cards (4x Identical)

### The Problem
Auditor D: "By the third box I am scanning headings rather than reading." Auditor F: "right at the monotony threshold."

Currently all four `.principle-card` elements have identical CSS:
- `border-left: 4px solid var(--factory-accent)`
- `background: rgba(232, 48, 37, 0.07)`
- Same padding, same structure

### Solution: Semantic Color-Coding Without Breaking Coherence

Each principle has a different character. Color-code the LEFT BORDER (not the background) to create variation while maintaining the card family:

```css
/* GUPP: Red-orange (operational, action-oriented) -- keep default */
.principle-card--operational {
  border-left-color: var(--factory-accent);
  background: rgba(232, 48, 37, 0.07);
}

/* Zero Framework Cognition: Blue (architectural, structural) */
.principle-card--architectural {
  border-left-color: var(--accent-blue);
  background: rgba(74, 144, 217, 0.07);
}

/* Agents as Cattle: Amber (philosophical, paradigm-shift) */
.principle-card--philosophical {
  border-left-color: var(--accent-amber);
  background: rgba(217, 119, 6, 0.07);
}

/* Nondeterministic Idempotence: Purple (abstract, mathematical) */
.principle-card--abstract {
  border-left-color: var(--accent-purple);
  background: rgba(124, 58, 237, 0.07);
}

/* Token Spend: Green (metric, measurable) */
.principle-card--metric {
  border-left-color: var(--accent-green);
  background: rgba(74, 157, 107, 0.07);
}
```

This requires adding a class to each `.principle-card` in the HTML. The background tint shifts are sub-perceptual on the dark Z3 background, but the border color shifts are visible and create a "category" signal for each principle.

**Alternative (no HTML changes):** Use `:nth-child` selectors:

```css
.principle-card:nth-child(1) { border-left-color: var(--factory-accent); }
.principle-card:nth-child(2) { border-left-color: var(--accent-blue); background: rgba(74, 144, 217, 0.07); }
.principle-card:nth-child(3) { border-left-color: var(--accent-amber); background: rgba(217, 119, 6, 0.07); }
.principle-card:nth-child(4) { border-left-color: var(--accent-purple); background: rgba(124, 58, 237, 0.07); }
.principle-card:nth-child(5) { border-left-color: var(--accent-green); background: rgba(74, 157, 107, 0.07); }
```

**Needle movement: Meaningful shift.** Breaks the monotony while maintaining the card family. The color-coding adds semantic meaning (different principle types) which is content-specific, not decorative.

---

## 6. Typography Depth Beyond Headings

### Current State
The page has two typographic registers:
1. **Display:** Instrument Serif (italic) for headings
2. **Body:** Inter for everything else

Flagship needs at least 4-5 distinct typographic treatments for different content types.

### Specific Additions

```css
/* Narrative prose (introductory paragraphs that set context) */
/* Already at 18px in Z1 -- this is the "generous" voice */

/* Reference text (tables, code annotations, technical specs) */
/* Already at 14-15px in Z3/Z4 -- this is the "dense" voice */

/* Caption/annotation text (a NEW register for footnote-like content) */
.caption {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--factory-text-secondary);
  letter-spacing: 0.01em;
}

/* Code annotation (comments within or near code blocks) */
.code-annotation {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--factory-text-secondary);
  font-style: italic;
  margin-top: var(--space-1);
  margin-bottom: var(--space-4);
}

/* Blockquote attribution (distinct from body text) */
.pull-quote cite,
.pull-quote--resolved cite,
.quote-card__theme {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;                /* Slightly heavier than current 400 */
  letter-spacing: 0.08em;          /* Wider than current 0.05em */
  text-transform: uppercase;
}

/* Principle card title: distinguish from regular h4 */
.principle-card__title {
  font-family: var(--font-mono);   /* Was var(--font-body) -- shift to monospace for "industrial label" feel */
  font-size: 13px;                 /* Was 14px -- slightly smaller but wider-tracked */
  font-weight: 600;
  letter-spacing: 0.06em;          /* Was 0.03em -- wider */
  text-transform: uppercase;
}
```

The typographic register now has 6 voices:
1. **Display serif** (headings): Instrument Serif italic, 24-40px
2. **Narrative body** (prose): Inter 16-18px, weight 400-500
3. **Dense body** (Z3/Z4 technical): Inter 14-15px, weight 400
4. **Monospace technical** (code, labels): JetBrains Mono 10-13px
5. **Caption/annotation**: Inter 12-13px, secondary color
6. **Industrial label** (principle cards, bento labels): JetBrains Mono 10-13px, uppercase, wide tracking

**Needle movement: Meaningful shift.** Each typographic register serves a different content type. The reader subconsciously learns the vocabulary: serif = narrative, sans = exposition, mono-uppercase = category/label, mono-regular = code, italic serif = voice/quote.

---

## 7. Component Adaptation Across Zones

### 7a. Callout Boxes

Currently, callout boxes adapt their border color and background tint to the dark zone. But they could go further:

```css
/* Z1 callouts: generous, open -- welcoming office */
.zone-loading-dock .callout {
  padding: var(--space-6) var(--space-5);  /* Already generous */
}

/* Z3 callouts: tighter, industrial -- factory notices */
.zone-factory-floor .callout {
  padding: var(--space-4) var(--space-5);  /* Already tighter -- good */
  border-left-width: 5px;                  /* Thicker in factory (new) */
}

/* Z4 callouts: structured, practical -- workbench instructions */
.zone-assembly-line .callout {
  padding: var(--space-5) var(--space-5);  /* Already present */
  border-left-style: solid;
  position: relative;
}

/* Z4 callout labels: add a bottom border for "instruction sheet" feel */
.zone-assembly-line .callout__label {
  padding-bottom: var(--space-2);
  border-bottom: 1px solid rgba(26, 26, 26, 0.08);
  margin-bottom: var(--space-3);
}

/* Z5 callouts: lighter, resolved -- departure lounge */
.zone-shipping-bay .callout {
  border-left-width: 3px;                  /* Thinner = resolved */
  background: rgba(232, 48, 37, 0.02);    /* More transparent */
}
```

### 7b. Tables

Tables already adapt somewhat (Z3 has light text on dark, Z4 has accent-red headers). Extend:

```css
/* Z1 tables: clean office table, no row hover */
.zone-loading-dock th {
  color: var(--factory-text-secondary);
  border-bottom: 3px solid var(--factory-border);
}

/* Z3 tables: industrial spec sheet -- tighter rows */
.zone-factory-floor td {
  padding: var(--space-2) var(--space-3);  /* Slightly tighter than default */
}

/* Z4 tables: workbench reference -- accent header, generous */
.zone-assembly-line th {
  border-bottom: 3px solid var(--factory-accent);  /* Already present */
  background: rgba(232, 48, 37, 0.03);             /* Subtle header tint (new) */
}

/* Z5 tables: comparison reference -- muted header */
.zone-shipping-bay th {
  border-bottom: 2px solid rgba(26, 26, 26, 0.15);  /* Lighter border weight */
  letter-spacing: 0.06em;                             /* Slightly wider tracking */
}
```

### 7c. Code Blocks

```css
/* Z3 code blocks: terminal inside the factory -- raised floor of code */
.zone-factory-floor pre {
  border-left: 3px solid var(--factory-accent);   /* Add left accent border (new) */
  border-top: none;                                /* Remove neutral top border */
  border-right: none;
  border-bottom: none;
}

/* Z4 code blocks: workbench terminal -- solid industrial frame */
.zone-assembly-line pre {
  border: 3px solid var(--factory-border);         /* Already present -- good */
}

/* Z5 code blocks (if any): lighter frame */
.zone-shipping-bay pre {
  border: 1px solid rgba(26, 26, 26, 0.12);
  background: var(--factory-steel);
}
```

**Needle movement: Meaningful shift (cumulative).** Each individual adaptation is a minor tweak, but the cumulative effect is ATMOSPHERIC -- components feel like they belong to their zone, not just sit on top of it.

---

## 8. The Footer as Bookend

### Current State
The footer has:
- `background: var(--factory-steel)` -- matches header
- `border-top: 3px solid var(--factory-accent)` -- mirrors header's bottom border
- Three-column layout (Source / Complexity / Author)
- Closing italicized quote

This is GOOD. The footer already echoes the header. But it can be elevated:

```css
/* Footer: Increase text sizes (Fix #1 from weaver diagnostic) */
.page-footer__value {
  font-size: 14px;                  /* Was 13px */
  line-height: 1.7;                 /* Was 1.6 */
}

.page-footer__label {
  font-size: 11px;                  /* Was 10px */
}

/* Footer closing quote: make it feel like a return, not an afterthought */
.page-footer__closing {
  font-size: 18px;                  /* Was 16px -- slightly larger for gravitas */
  color: rgba(254, 249, 245, 0.7);  /* Was 0.6 -- slightly brighter */
  letter-spacing: 0.01em;
  border-top: 1px solid rgba(254, 249, 245, 0.2);  /* Was 0.15 -- slightly more visible */
  padding-top: var(--space-6);      /* Was var(--space-4) -- more breathing room */
  margin-top: var(--space-8);       /* Was var(--space-6) -- more separation */
}

/* Add a subtle footer "ID" that echoes the header's "Deep Dive -- Level 7" */
.page-footer::before {
  content: '';
  display: block;
  width: 28px;
  height: 3px;
  background: var(--factory-accent);
  margin: 0 auto var(--space-4);
}
```

The `::before` pseudo-element creates a small red accent mark centered at the top of the footer content area, echoing the header's red bottom border. This creates a visual rhyme: the header says "here I am" with a red line, and the footer whispers "here I was" with a smaller version.

**Needle movement: Meaningful shift.** The footer goes from "competent bookend" to "designed return." The text size fix alone resolves the 2/10 auditor concern.

---

## 9. Additional Flagship-Level Details

### 9a. Tabular Nums Enforcement

The page already has a `.tabular-nums` class but only applies it to some `<tbody>` elements. Extend:

```css
/* All tables in all zones should use tabular nums */
td, th {
  font-variant-numeric: tabular-nums;
}
```

**Needle movement: Minor tweak.**

### 9b. Optical Alignment for Body Lists

Currently, list bullet markers (`:before` pseudo-elements) are positioned with hardcoded `top` values. These should optically align with the text's x-height:

```css
/* Adjust bullet marker vertical position per zone's font-size */
.zone-loading-dock li::before { top: 13px; }        /* 18px text */
.zone-factory-floor li::before { top: 10px; }       /* 14px text */
.zone-assembly-line li::before { top: 12px; }       /* 15px text */
```

**Needle movement: Minor tweak.**

### 9c. Scroll-Margin for Section Anchors

When using the nav rail to jump to sections, the section should land with breathing room, not flush with the viewport top:

```css
[id^="s"] {
  scroll-margin-top: var(--space-8);
}
```

**Needle movement: Minor tweak.** But it's the kind of detail that shows awareness of the full user journey.

---

## Summary: Needle Movement Table

| Change | Category | Needle Movement | Effort |
|--------|----------|----------------|--------|
| Dark zone interlude/gradient (Section 1) | Zone fatigue | **Flagship-defining** | HTML + CSS |
| Zone-specific ::selection colors (2a) | Delight | **Meaningful shift** | CSS only |
| Hover states on all interactive elements (2b) | Delight | **Meaningful shift** | CSS only |
| Accordion transition choreography (2c) | Delight | Minor tweak | CSS only |
| Print styles (2d) | Delight | **Meaningful shift** | CSS only |
| First/last-child contextual treatments (2e) | Delight | Minor tweak | CSS only |
| Z3 tracking widening for atmospheric typography (3a) | Metaphor | **Flagship-defining** | CSS only |
| Border weight adaptation across zones (3b) | Metaphor | **Meaningful shift** | CSS only |
| CSS-only subtle texture in Z3 (3c) | Metaphor | Minor to Meaningful | CSS only |
| Z1-Z2 third channel (border + spacing) (4) | Multi-coherence | **Meaningful shift** | CSS only |
| Z4-Z5 additional channels (4) | Multi-coherence | **Meaningful shift** | CSS only |
| Principle card color-coding (5) | Monotony fix | **Meaningful shift** | CSS (nth-child) |
| Typography depth -- 6 registers (6) | Compositional | **Meaningful shift** | CSS + minor HTML |
| Component adaptation across zones (7) | Atmospheric | **Meaningful shift** (cumulative) | CSS only |
| Footer elevation (8) | Closure | **Meaningful shift** | CSS only |
| Tabular nums, optical alignment, scroll-margin (9) | Polish | Minor tweak | CSS only |

### Priority Order for Maximum Impact

1. **Dark zone relief** (Section 1) -- resolves the 6/10 auditor consensus finding
2. **Z3 atmospheric typography** (3a) -- pushes metaphor from STRUCTURAL to ATMOSPHERIC
3. **Principle card differentiation** (5) -- breaks the 4x monotony
4. **Zone-specific ::selection + hover states** (2a, 2b) -- DELIGHT register from 4/10 toward 6-7/10
5. **Multi-coherence at edge boundaries** (4) -- resolves GR-50 gate failure
6. **Component adaptation** (7a-7c) -- cumulative atmospheric shift
7. **Footer elevation + print styles** (8, 2d) -- polish and "someone cared" signals
8. **Typography depth** (6) -- adds registers without disrupting existing hierarchy

### Projected PA-05 After All Changes

**Current: 3.5/4**
**Projected: 3.75-4.0/4 (FLAGSHIP territory)**

The changes above address:
- PROPORTIONATE advisory (breathing gaps) via dark zone relief
- POLISHED advisory (footer text) via size increase
- DELIGHT register from 4/10 to estimated 6-7/10
- AUTHORITY maintained at 8/10 (no changes weaken it)
- Multi-coherence at all boundaries elevated to 3+ channels
- Metaphor coupling pushed from STRUCTURAL toward ATMOSPHERIC

The question of whether this reaches undeniable Flagship depends on execution quality. The changes described here are the VOCABULARY for Flagship. Whether they create Flagship depends on whether the builder deploys them with the same intentionality that produced the current CEILING-tier page.
