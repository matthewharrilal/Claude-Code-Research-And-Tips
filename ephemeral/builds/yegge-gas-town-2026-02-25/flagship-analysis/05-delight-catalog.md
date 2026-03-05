# Delight Micro-Refinement Catalog

**Subject:** CSS micro-refinements that create DELIGHT — the emotional register scored 4/10 on the yegge-gas-town page.

**Source page:** `p2-yegge-gas-town.html` (~1,842 lines CSS, ~1,030 lines HTML, ~15 lines JS)

**Framework reference:** pa-weaver.md Section 4.2, Register 2 — "DELIGHT: small unexpected refinements that reward attention." CSS signatures: hover states revealing hidden content, typographic micro-refinement, zone-specific ::selection colors, print-specific styling, first/last child edge treatments (ITEMS 010-014).

**Disposition link:** D-07 "Edge intentionality" creates CONDITIONS for delight (DESIGN INTENTION, not guarantee).

---

## Current Inventory: What the Page Already Has

Before cataloging what's missing, here is what the page DOES have:

| Micro-refinement | Location | Notes |
|---|---|---|
| `::selection` (global) | L140-143 | `rgba(232, 48, 37, 0.15)` — factory-accent tint |
| `::selection` (Z3 override) | L793-796 | Solid `var(--factory-accent)` with white text — zone-aware |
| `*:focus-visible` | L135-138 | 3px solid factory-accent, 2px offset — functional but uniform |
| `@media (prefers-reduced-motion)` | L145-151 | Proper: kills animations AND transitions AND scroll-behavior |
| `scroll-behavior: smooth` | L101 | On `html` element |
| Nav rail hover (background) | L190-192 | Background shifts to factory-accent |
| Nav rail hover (label reveal) | L206-213 | Label opacity 0→1 on hover, 0.15s ease |
| Back-to-top hover | L250-253 | Background/color swap (steel→accent) |
| Z2 table row hover | L738-740 | `rgba(232, 48, 37, 0.03)` — extremely subtle |
| Source links hover | L1569-1571 | Color shift blue→accent |
| `font-variant-numeric: tabular-nums` | L1746-1748 | `.tabular-nums` class defined |
| `text-indent: -0.03em` | L1750-1756 | Optical alignment on serif headings (Z1-Z5) |
| `callout:first-child/last-child` | L1759-1760 | Margin collapse at edges |
| Back-to-top JS (scroll visibility) | L2858-2873 | IntersectionObserver-less, simple scroll check |
| Troubleshoot accordion | L1317-1360 | `<details>/<summary>` with custom +/- indicators |
| `cursor: pointer` | L1325 | On troubleshoot summary only |

**Count: 16 micro-refinements present.**

---

## Category 1: Hover States

### What it is
Interactive feedback on mouseover — the page responding to the reader's attention. Each hover should feel like the page notices where you're looking.

### Why it creates delight
Hover states activate the brain's agency circuit. When something changes under your cursor, the page becomes a responsive environment rather than a static document. The effect is subconscious: "this was built with care." The factory metaphor amplifies this — machinery that responds to the operator's presence.

### What the page has
- Nav rail: background shift + label reveal (GOOD — the label reveal is the page's single best delight moment)
- Back-to-top: color swap (ADEQUATE)
- Z2 table rows: 3% opacity background shift (TOO SUBTLE — likely imperceptible)
- Source links: color change (MINIMAL)

### What's missing — Concrete CSS

**1a. Table row hover (all zones, perceptible)**
```css
/* Current Z2 hover is 0.03 opacity — raise to perceptible */
.zone-loading-dock tr:hover td,
.zone-dispatch-floor tr:hover td {
  background: rgba(232, 48, 37, 0.06);
  transition: background 0.15s ease;
}

.zone-factory-floor tr:hover td {
  background: rgba(254, 249, 245, 0.06);
  transition: background 0.15s ease;
}

.zone-assembly-line tr:hover td,
.zone-shipping-bay tr:hover td {
  background: rgba(232, 48, 37, 0.05);
  transition: background 0.15s ease;
}
```
Delight intensity: **subtle whisper** — reinforces the tabular data as scannable, the page as responsive.

**1b. Callout border intensification on hover**
```css
.callout {
  transition: border-left-color 0.2s ease;
}

.callout:hover {
  border-left-color: var(--factory-accent);
}

.callout--info:hover { border-left-color: #3a7dc9; }
.callout--tip:hover { border-left-color: #3a8d5b; }
.callout--essence:hover { border-left-color: #c96706; }
.callout--challenge:hover { border-left-color: #6c2acd; }
```
Delight intensity: **subtle whisper** — the callout "wakes up" when you approach it.

**1c. Code block border accent on hover**
```css
.zone-assembly-line pre,
.zone-factory-floor pre {
  transition: border-color 0.2s ease;
}

.zone-assembly-line pre:hover {
  border-color: var(--factory-accent);
}

.zone-factory-floor pre:hover {
  border-color: rgba(232, 48, 37, 0.4);
}
```
Delight intensity: **subtle whisper** — factory machinery lighting up when the operator approaches.

**1d. Quote card elevation on hover**
```css
.quote-card {
  transition: border-left-color 0.2s ease, transform 0.2s ease;
}

.quote-card:hover {
  border-left-color: var(--factory-accent);
  transform: translateX(2px);
}
```
Delight intensity: **noticeable touch** — the quote shifts slightly, as if being pulled from a file drawer.

**1e. Bento cell border brightening**
```css
.bento-cell {
  transition: border-color 0.2s ease;
}

.bento-cell:hover {
  border-color: rgba(254, 249, 245, 0.5);
}
```
Delight intensity: **subtle whisper** — factory panels illuminating under inspection.

**1f. Principle card left-border pulse**
```css
.principle-card {
  transition: border-left-width 0.15s ease, padding-left 0.15s ease;
}

.principle-card:hover {
  border-left-width: 6px;
  padding-left: calc(var(--space-5) - 2px); /* compensate for border growth */
}
```
Delight intensity: **noticeable touch** — the principle "steps forward" on the factory floor.

---

## Category 2: Selection Colors (::selection)

### What it is
Custom text selection highlighting that adapts to the zone the reader is in. The page's visual identity extends into the most intimate user interaction — dragging to select text.

### Why it creates delight
Selection color is one of the few things a reader actively CAUSES. When the selection color matches the zone's palette instead of the OS default blue, it produces a micro-moment of "oh — they thought about THIS too?" This is atmospheric coupling at the smallest scale: the page's world is so complete it extends into the selection state.

### What the page has
- Global: `rgba(232, 48, 37, 0.15)` — warm accent tint (GOOD)
- Z3 override: solid `var(--factory-accent)` with white text (GOOD — dark-on-dark needs strong selection)

### What's missing — Concrete CSS

```css
/* Z1: warm gold selection — loading dock warmth */
.zone-loading-dock ::selection {
  background: rgba(217, 119, 6, 0.2);
  color: var(--factory-steel);
}

/* Z2: keep default factory-accent tint — dispatch floor is neutral */
/* (already covered by global rule) */

/* Z3: already overridden (L793) — GOOD */

/* Z4: assembly-line green tint — practice/verification zone */
.zone-assembly-line ::selection {
  background: rgba(74, 157, 107, 0.2);
  color: var(--factory-steel);
}

/* Z5: earth-tone selection — resolution warmth */
.zone-shipping-bay ::selection {
  background: rgba(180, 140, 100, 0.25);
  color: var(--factory-steel);
}

/* Header: bright accent on dark */
.page-header ::selection {
  background: var(--factory-accent);
  color: white;
}

/* Footer: match header */
.page-footer ::selection {
  background: var(--factory-accent);
  color: white;
}
```
Delight intensity: **memorable moment** — this is the kind of refinement people screenshot and share. "Look, even the selection color changes per zone."

---

## Category 3: Print Styles (@media print)

### What it is
Dedicated stylesheet for paper output. Hides interactive chrome, adjusts backgrounds for toner, inserts page breaks at zone boundaries.

### Why it creates delight
Print styles signal completeness of thought. A reader who prints the page (or saves to PDF) and discovers it's been considered says "someone cared about every context this page might exist in." For a technical deep-dive document like Gas Town, printing for offline reading is a real use case.

### What the page has
Nothing. Zero print styles.

### What's missing — Concrete CSS

```css
@media print {
  /* Hide interactive chrome */
  .section-nav,
  .back-to-top,
  .skip-link {
    display: none !important;
  }

  /* Flatten backgrounds for toner */
  .zone-loading-dock,
  .zone-dispatch-floor,
  .zone-assembly-line,
  .zone-shipping-bay {
    background: white !important;
  }

  .zone-factory-floor {
    background: #f5f5f5 !important;
    color: #1a1a1a !important;
  }

  .zone-factory-floor h2,
  .zone-factory-floor h3,
  .zone-factory-floor h4,
  .zone-factory-floor p,
  .zone-factory-floor li,
  .zone-factory-floor td,
  .zone-factory-floor .callout__body,
  .zone-factory-floor .bento-cell p,
  .zone-factory-floor .principle-card__body {
    color: #1a1a1a !important;
  }

  .zone-factory-floor .callout__label,
  .zone-factory-floor .section-indicator {
    color: #666 !important;
  }

  .page-header {
    background: white !important;
    border-bottom: 2px solid #1a1a1a;
  }

  .page-header__title,
  .page-header__subtitle {
    color: #1a1a1a !important;
  }

  .page-header__id,
  .page-header__tag {
    color: #666 !important;
    border-color: #666 !important;
  }

  .page-footer {
    background: white !important;
    border-top: 2px solid #1a1a1a;
  }

  .page-footer__label { color: #666 !important; }
  .page-footer__value { color: #333 !important; }
  .page-footer__closing { color: #666 !important; }

  /* Visible borders on code blocks */
  pre, .code-snippet {
    border: 1px solid #ccc !important;
    background: #f9f9f9 !important;
    color: #1a1a1a !important;
  }

  .architecture-diagram {
    background: #f0f0f0 !important;
    border: 1px solid #ccc !important;
    color: #1a1a1a !important;
  }

  .architecture-diagram pre {
    color: #1a1a1a !important;
  }

  /* Page breaks at zone boundaries */
  .boundary-z1-z2,
  .boundary-z2-z3,
  .boundary-z3-z4,
  .boundary-z4-z5 {
    page-break-after: always;
    border: none !important;
    padding: 0 !important;
  }

  /* Avoid orphans in callouts */
  .callout, .principle-card, .bento-cell {
    page-break-inside: avoid;
  }

  /* Remove transitions */
  * {
    transition: none !important;
  }

  /* Container full-width for paper */
  .container {
    max-width: 100%;
    padding: 0 1cm;
  }

  /* URLs visible after links */
  .source-links a::after {
    content: " (" attr(href) ")";
    font-size: 11px;
    color: #666;
  }
}
```
Delight intensity: **memorable moment** — the "someone thought about EVERY use case" signal. A reader who Cmd+P discovers the page was waiting for them.

---

## Category 4: Focus Styles (:focus-visible)

### What it is
Keyboard navigation indicators that are visible, beautiful, and zone-adapted. The page acknowledges accessibility as a first-class design concern, not an afterthought.

### Why it creates delight
Focus styles are invisible to most users — they only appear during keyboard navigation. When a keyboard user discovers that the focus indicators match the zone's palette (warm outline in Z1, bright outline in Z3), the page communicates "you are not an edge case; you are a considered user."

### What the page has
- Global: `3px solid var(--factory-accent)`, 2px offset (ADEQUATE — functional but uniform)

### What's missing — Concrete CSS

```css
/* Zone-adapted focus colors */
.zone-loading-dock *:focus-visible {
  outline-color: var(--accent-amber);
}

.zone-dispatch-floor *:focus-visible {
  outline-color: var(--factory-steel);
}

.zone-factory-floor *:focus-visible {
  outline-color: var(--factory-text-light);
  outline-offset: 3px;
}

.zone-assembly-line *:focus-visible {
  outline-color: var(--accent-green);
}

.zone-shipping-bay *:focus-visible {
  outline-color: var(--accent-blue);
}

/* Troubleshoot accordion: custom focus ring */
.troubleshoot summary:focus-visible {
  outline: 3px solid var(--factory-accent);
  outline-offset: -3px; /* inset to match the container edge */
}

/* Back-to-top focus */
.back-to-top:focus-visible {
  outline: 3px solid var(--factory-accent);
  background: var(--factory-accent);
  color: var(--factory-text-light);
}
```
Delight intensity: **subtle whisper** for most users (invisible unless keyboard-navigating), **memorable moment** for accessibility users.

---

## Category 5: Typographic Micro-Refinements

### What it is
Fine-grained typography adjustments that no reader consciously notices but that contribute to the feeling of "this text feels RIGHT." The page reads as if a typographer set it, not a browser.

### Why it creates delight
Typography micro-refinements operate below conscious perception. The reader doesn't think "nice tabular-nums" — they think "this table is easy to scan." The effect is cumulative: each refinement adds 0.5% to the sense of craft. Together, they create the gap between "generated" and "designed."

### What the page has
- `font-variant-numeric: tabular-nums` class (defined but NOT checked if applied to all number-heavy tables)
- `text-indent: -0.03em` on serif headings (GOOD — optical alignment)
- First/last callout margin adjustments (MINIMAL)

### What's missing — Concrete CSS

**5a. First-paragraph text-indent after headings**
```css
/* Subtle indent on first paragraphs — a book-typographic convention */
.z1-section > h2 + p,
.z1-section > h3 + p,
.z2-section > h2 + p,
.z2-section > h3 + p,
.z4-section > h2 + p,
.z4-section > h3 + p,
.z5-section > h2 + p,
.z5-section > h3 + p {
  text-indent: 0; /* NO indent after heading — typographic convention */
}

.z1-section > p + p,
.z2-section > p + p,
.z4-section > p + p,
.z5-section > p + p {
  text-indent: 1.5em; /* Indent SUBSEQUENT paragraphs */
}
```
Delight intensity: **subtle whisper** — creates a bookish, professional rhythm. Most readers won't notice; designers will.

**5b. Hanging punctuation on blockquotes**
```css
/* Optical alignment: opening quotes hang into the margin */
.pull-quote p,
.pull-quote--resolved p {
  hanging-punctuation: first;
}

/* Fallback for browsers without hanging-punctuation */
@supports not (hanging-punctuation: first) {
  .pull-quote p::first-letter,
  .pull-quote--resolved p::first-letter {
    margin-left: -0.4em;
  }
}
```
Delight intensity: **noticeable touch** — the quotes look "right" without the reader knowing why. The opening quotation mark aligns with the text edge, not the margin edge.

**5c. Letter-spacing shifts between zones**
```css
/* Z1 (generous): slightly looser body letter-spacing */
.zone-loading-dock p {
  letter-spacing: 0.005em;
}

/* Z3 (dense, dark): tighter, more mechanical */
.zone-factory-floor p {
  letter-spacing: -0.005em;
}

/* Z4 (practical): back to neutral */
.zone-assembly-line p {
  letter-spacing: 0;
}
```
Delight intensity: **subtle whisper** — imperceptible individually, contributes to the zone-to-zone "feel" shift.

**5d. Tabular-nums enforcement on ALL number tables**
```css
/* Apply tabular-nums to all table cells — numbers should always align */
td {
  font-variant-numeric: tabular-nums;
}
```
Delight intensity: **subtle whisper** — number columns scan cleanly.

**5e. Optical margin alignment for opening quotes**
```css
/* Pull quotes: negative indent for opening quotation marks */
.callout--essence .callout__body {
  text-indent: -0.35em;
}

.principle-card blockquote {
  text-indent: -0.35em;
}
```
Delight intensity: **subtle whisper** — professional typesetting detail.

---

## Category 6: Edge Treatments (first-child / last-child)

### What it is
Special styling for elements at structural boundaries — the first paragraph after entering a new zone, the last element before a zone transition, the first item in a list.

### Why it creates delight
Edge treatments create "bookend" sensations. The first element after a zone transition sets the tone; the last element before a transition provides closure. Without edge treatments, content feels poured into zones arbitrarily. With them, each zone has a beginning and an end.

### What the page has
- `callout:first-child { margin-top: 0 }` / `callout:last-child { margin-bottom: 0 }` (MINIMAL — margin cleanup only)

### What's missing — Concrete CSS

**6a. First paragraph after zone entry: distinct treatment**
```css
/* First paragraph in each zone gets slight larger size — the "opening statement" */
.zone-loading-dock > .container > .z1-section:first-child > p:first-of-type {
  font-size: 20px;
  line-height: 1.75;
}

/* In Z3, first paragraph after section-indicator: slightly brighter */
.z3-section:first-child > p:first-of-type {
  color: #FFFFFF; /* full white vs the 0.95 opacity used elsewhere */
}
```
Delight intensity: **subtle whisper** — the opening statement has more presence.

**6b. Last element before zone transition: reduced bottom margin**
```css
/* Remove excess space before boundaries — tighter seal */
.zone-loading-dock > .container > .z1-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
}

.zone-dispatch-floor > .container > .z2-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
}
```
Delight intensity: **subtle whisper** — cleaner zone transitions.

**6c. First and last quote-card in collection**
```css
.quote-card:first-child {
  border-left-width: 3px;
  border-left-color: var(--factory-accent);
}

.quote-card:last-child {
  border-left-style: dashed;
}
```
Delight intensity: **noticeable touch** — the quote collection has a start and an end; the last quote signals "we're wrapping up."

---

## Category 7: Transition Choreography

### What it is
Coordinated timing and easing on interactive state changes. Transitions should feel like machinery — consistent timing, industrial easing curves, elements moving in concert rather than independently.

### Why it creates delight
Choreographed transitions create the feeling of a SYSTEM rather than independent elements. The factory metaphor demands mechanical precision: things move deliberately, at industrial tempo. Mismatched timing (100ms here, 500ms there) creates cognitive noise.

### What the page has
- Nav rail background: `0.2s ease`
- Nav rail label: `0.15s ease`
- Back-to-top opacity: `0.2s ease`
- Troubleshoot: no transition (instant open/close)

### What's missing — Concrete CSS

**7a. Accordion open/close animation**
```css
.troubleshoot__content {
  overflow: hidden;
  transition: max-height 0.25s ease, opacity 0.2s ease;
}

/* Note: CSS-only height animation on <details> requires additional JS or
   the newer interpolate-size property. The simplest improvement: */
.troubleshoot summary::after {
  transition: transform 0.2s ease;
  display: inline-block;
}

.troubleshoot[open] summary::after {
  transform: rotate(45deg);
}
```
Delight intensity: **noticeable touch** — the accordion opens with industrial smoothness rather than snapping.

**7b. Unified transition timing (normalize to factory tempo)**
```css
/* Factory tempo: 0.2s ease-out for ALL micro-interactions */
:root {
  --factory-tempo: 0.2s ease-out;
}

.section-nav__link { transition: background var(--factory-tempo); }
.section-nav__link::after { transition: opacity var(--factory-tempo); }
.back-to-top { transition: opacity var(--factory-tempo); }
.callout { transition: border-left-color var(--factory-tempo); }
.quote-card { transition: border-left-color var(--factory-tempo), transform var(--factory-tempo); }
.bento-cell { transition: border-color var(--factory-tempo); }
```
Delight intensity: **subtle whisper** — everything moves at the same tempo, creating mechanical coherence.

**7c. Scroll-triggered section fade-in (progressive enhancement)**
```css
/* Progressive enhancement: no-JS fallback shows everything */
.z1-section, .z2-section, .z3-section, .z4-section, .z5-section {
  /* Only animate if JS adds the class */
}

.js-scroll-reveal .z1-section,
.js-scroll-reveal .z2-section,
.js-scroll-reveal .z3-section,
.js-scroll-reveal .z4-section,
.js-scroll-reveal .z5-section {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.js-scroll-reveal .section-visible {
  opacity: 1;
  transform: translateY(0);
}
```
```js
// Progressive enhancement — only if not prefers-reduced-motion
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('section-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.z1-section, .z2-section, .z3-section, .z4-section, .z5-section')
    .forEach(el => observer.observe(el));
}
```
Delight intensity: **memorable moment** — sections materialize as you scroll, the factory "turning on" room by room. MUST respect prefers-reduced-motion.

---

## Category 8: Reduced Motion Respect

### What it is
`@media (prefers-reduced-motion: reduce)` block that disables all animations and transitions for users who need or prefer stillness.

### Why it creates delight
Reduced motion respect is delight through CARE, not through movement. It communicates: "we built beautiful animations AND we built beautiful stillness." This is the most ethical micro-refinement — it costs nothing, harms no one, and helps those who need it.

### What the page has
- Global reduced motion block: kills `animation-duration`, `transition-duration`, `scroll-behavior` (GOOD)

### What's missing — Concrete CSS

```css
/* The existing block (L145-151) is already solid. Ensure any new
   scroll-triggered animations are also caught: */
@media (prefers-reduced-motion: reduce) {
  .js-scroll-reveal .z1-section,
  .js-scroll-reveal .z2-section,
  .js-scroll-reveal .z3-section,
  .js-scroll-reveal .z4-section,
  .js-scroll-reveal .z5-section {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

The existing implementation is COMPLETE for current features. This category only needs updating if Category 7 scroll-reveal is added.

Delight intensity: **subtle whisper** — invisible to most users, profoundly appreciated by those who need it.

---

## Category 9: Dark Mode (prefers-color-scheme: dark)

### What it is
Adaptive color scheme that responds to the user's system preference. The page has a natural advantage here: Z3 (factory-floor) is ALREADY dark, so the light zones need to invert.

### Why it creates delight
Dark mode in 2026 is expected. Its ABSENCE is noticed. But for this page, the opportunity is exceptional: the factory metaphor already has a dark zone. In dark mode, the entire page becomes "the factory at night" — and Z3 becomes the brightest zone (the furnace still running). This inversion of the inversion is a genuine surprise.

### What the page has
Nothing. Zero dark mode support.

### What's missing — Concrete CSS

```css
@media (prefers-color-scheme: dark) {
  :root {
    --loading-dock: #1C1B19;
    --dispatch-floor: #252320;
    --factory-floor: #2C2A27; /* Slightly lighter than surroundings — furnace glow */
    --assembly-line: #1F1E1C;
    --shipping-bay: #1A1918;
    --factory-steel: #E8E4DE;
    --factory-text-light: #1C1B19;
    --factory-border: #3D3A35;
    --factory-border-subtle: #2D2B28;
    --factory-text-secondary: #9B9590;
  }

  body {
    color: var(--factory-steel);
  }

  .page-header {
    background: #0F0E0D;
  }

  .page-header__title { color: var(--factory-steel); }
  .page-header__subtitle { color: #9B9590; }
  .page-header__tag { color: #9B9590; border-color: #9B9590; }

  /* Z3 inversion: the factory floor GLOWS in dark mode */
  .zone-factory-floor {
    background: #2C2A27;
    /* Slightly raised from surroundings — the furnace doesn't sleep */
  }

  .zone-factory-floor ::selection {
    background: var(--factory-accent);
    color: #1C1B19;
  }

  /* Code blocks: dark-on-dark needs stronger borders */
  pre {
    border-color: var(--factory-border) !important;
  }

  .page-footer {
    background: #0F0E0D;
  }

  /* Inline code */
  p code, li code, td code {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.12);
  }
}
```
Delight intensity: **memorable moment** — the factory at night. Dark mode users will see the page was designed for them, not adapted as an afterthought.

**NOTE:** Full dark mode is a significant effort (~80-120 additional CSS lines for all components). The above is a SKELETON. Even just acknowledging it with the CSS custom property overrides creates the foundation.

---

## Category 10: Scroll Behavior

### What it is
Fine-tuned scroll physics: padding at scroll targets so sticky elements don't overlap content, smooth scrolling for internal links, scroll-margin on section targets.

### Why it creates delight
When you click a nav rail link and the page scrolls to a section heading that's perfectly positioned (not hidden behind a sticky header, not flush with the top), it creates a feeling of precision. The factory metaphor: machinery that stops at exactly the right position.

### What the page has
- `scroll-behavior: smooth` on `html` (GOOD)
- No `scroll-padding-top` or `scroll-margin-top`

### What's missing — Concrete CSS

```css
/* scroll-margin on section targets — breathing room after scroll */
[id^="s0-"],
[id^="s1-"],
[id^="s2-"],
[id^="s3-"],
[id^="s4-"],
[id^="s5-"],
[id^="s6-"],
[id^="s7-"],
[id^="s8-"],
[id^="s9-"],
[id^="s10-"],
[id^="s11-"],
[id^="s12-"],
[id^="s13-"] {
  scroll-margin-top: 24px;
}
```
Delight intensity: **subtle whisper** — the nav rail links land perfectly.

---

## Category 11: Details/Summary Enhancement

### What it is
Custom styling for the `<details>/<summary>` elements used in the troubleshooting accordions. Replace the browser's default disclosure triangle with a factory-appropriate indicator.

### Why it creates delight
The default `<details>` element feels like browser chrome — it breaks the illusion that the page is a designed artifact. Custom disclosure indicators (the +/- the page already uses) maintain the factory vocabulary. Adding rotation animation on the indicator completes the illusion.

### What the page has
- Custom +/- indicators (L1337-1346) — replaces browser default (GOOD)
- `-webkit-details-marker: none` (GOOD)
- No transition on the indicator change
- No content reveal transition

### What's missing — Concrete CSS

```css
/* Smooth indicator rotation */
.troubleshoot summary::after {
  transition: transform 0.2s ease-out;
  display: inline-block;
}

.troubleshoot[open] summary::after {
  content: '\2212'; /* minus sign */
  transform: rotate(90deg);
}

/* Summary hover state */
.troubleshoot summary:hover {
  background: rgba(26, 26, 26, 0.06);
}
```
Delight intensity: **noticeable touch** — the accordion feels manufactured, not browser-default.

---

## Category 12: Cursor Styles

### What it is
Explicit cursor declarations that reinforce element affordance. The cursor tells you what an element does before you interact with it.

### Why it creates delight
Cursor changes are subconscious affordance signals. When the cursor becomes a pointer over something clickable, the brain's motor cortex pre-prepares for a click. Missing cursor styles (e.g., a clickable element with `cursor: default`) create micro-frustration.

### What the page has
- `cursor: pointer` on troubleshoot summary (L1325)
- No explicit cursor on other interactive elements

### What's missing — Concrete CSS

```css
/* All interactive elements should signal their nature */
.section-nav__link,
.back-to-top,
.source-links a,
.page-header__tag {
  cursor: pointer;
}

/* Selectable pre blocks — indicate "this is copy-able" */
pre, .code-snippet__content, .complexity-ladder pre {
  cursor: text;
}

/* The architecture diagram is also copyable */
.architecture-diagram pre {
  cursor: text;
}
```
Delight intensity: **subtle whisper** — invisible when present, noticeable when absent.

---

## Summary Analysis

### Current Count

The page has **16 micro-refinements** across 7 of the 12 categories:

| Category | Count | Quality |
|---|---|---|
| 1. Hover States | 4 | Mixed (nav rail good, Z2 table imperceptible) |
| 2. Selection Colors | 2 | Good (global + Z3 override) |
| 3. Print Styles | 0 | Missing entirely |
| 4. Focus Styles | 1 | Functional but uniform |
| 5. Typographic Micro | 3 | Partial (tabular-nums defined but underused) |
| 6. Edge Treatments | 2 | Minimal (margin cleanup only) |
| 7. Transition Choreography | 3 | Inconsistent timing |
| 8. Reduced Motion | 1 | Complete for current features |
| 9. Dark Mode | 0 | Missing entirely |
| 10. Scroll Behavior | 1 | Incomplete (no scroll-margin) |
| 11. Details/Summary | 2 | Partial (custom indicator, no animation) |
| 12. Cursor Styles | 1 | Minimal |
| **TOTAL** | **16** (present) | |

### Flagship Estimate

A Flagship page at DELIGHT 8-9/10 would need approximately **45-55 micro-refinements** across all 12 categories:

| Category | Floor (4/10) | Middle (6/10) | Flagship (8-9/10) |
|---|---|---|---|
| Hover States | 4 | 8 | 12-15 |
| Selection Colors | 2 | 3 | 5-6 (per-zone + header/footer) |
| Print Styles | 0 | 1 (basic) | 1 (comprehensive) |
| Focus Styles | 1 | 3 | 5-6 (per-zone) |
| Typographic Micro | 3 | 5 | 7-8 |
| Edge Treatments | 2 | 4 | 6-8 |
| Transition Choreography | 3 | 5 | 6-8 |
| Reduced Motion | 1 | 1 | 1 |
| Dark Mode | 0 | 0 | 1 (comprehensive) |
| Scroll Behavior | 1 | 2 | 3 |
| Details/Summary | 2 | 3 | 3-4 |
| Cursor Styles | 1 | 2 | 3 |
| **TOTAL** | **16** | **~37** | **~53-65** |

### Top 5 Highest Delight-Per-Effort Ratio

Ranked by (delight impact) / (CSS lines required):

1. **Zone-specific ::selection colors** (~20 lines CSS, memorable moment) — The single cheapest way to create "oh, they thought about EVERYTHING." 5 minutes of work. People will screenshot this.

2. **scroll-margin-top on section targets** (~5 lines CSS, subtle whisper but solves real annoyance) — Currently, nav rail links may scroll to sections that are flush with viewport top. This is a usability fix disguised as delight.

3. **Print styles** (~60 lines CSS, memorable moment) — Large line count but entirely mechanical (background removal, visibility toggling). Zero creative decisions required. The reader who discovers it is permanently impressed.

4. **Unified transition timing with --factory-tempo** (~10 lines CSS, subtle whisper but creates coherence) — Normalizes all transitions to a single custom property. The factory "breathes" at one rhythm.

5. **Table row hover across all zones** (~15 lines CSS, subtle whisper) — Tables are the most interactive passive element. Hover feedback makes them scannable.

### The Single Most Surprising Micro-Refinement

**Zone-specific ::selection colors.**

Here is why: Every other micro-refinement on this list operates in spaces the reader expects design to exist (hover states, transitions, typography). Selection color operates in a space the reader considers THEIRS — the act of selecting text. When the highlight color shifts from warm gold (Z1) to factory red (Z3) to sage green (Z4), the reader experiences the page's world extending into their own actions. The boundary between "designed page" and "browser chrome" dissolves.

This is the CSS equivalent of a restaurant that matches the napkin color to the course being served. You don't notice until you notice — and then you can't un-notice it.

---

## Delight Score Projection

- **Current:** 4/10 (16 micro-refinements, 5 missing categories)
- **After Top 5 changes:** 6/10 (~30 micro-refinements, strong in interaction + typography)
- **After full catalog:** 8/10 (~55 micro-refinements, all 12 categories covered, zone-adaptive throughout)
- **Theoretical max:** 9/10 (diminishing returns — 10/10 would require micro-animations, custom scrollbar styling, and page-specific prefers-contrast support)

The gap from 4 to 8 is approximately 120-150 lines of CSS and 15 lines of JavaScript. The effort is modest; the perceptual impact is transformative. DELIGHT is the cheapest emotional register to improve because it compounds — each refinement makes the others more noticeable.
