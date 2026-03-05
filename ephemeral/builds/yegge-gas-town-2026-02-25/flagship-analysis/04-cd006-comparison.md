# Forensic CSS Comparison: CD-006 vs Yegge-Gas-Town

**Agent:** comparison-agent (Opus)
**Date:** 2026-02-25
**Method:** Line-by-line CSS source reading of both files. Every property, selector, and value compared.

---

## File Metrics

| Metric | CD-006 | Yegge-Gas-Town |
|--------|--------|----------------|
| Total lines | 2,085 | 2,931 |
| CSS lines (style tag) | ~1,019 | ~1,812 |
| HTML content lines | ~1,066 | ~1,119 |
| Custom property references (`var(--`) | 270 | 366 |
| Media queries | 5 | 2 |
| Pseudo-elements (::before/::after) | 2 | 13 |
| Grid template declarations | 11 | 6 |
| Flexbox declarations | 8 | 7 |
| Transition properties | 27 | 14 |
| Hover rules | 2 | 6 |
| ARIA attributes | 28 | 14 |
| Role attributes | 24 | 9 |
| Sections (`<section>`) | 19 | 5 |
| Container width | 1100px | 960px |

**First observation:** Yegge has 78% more CSS lines but fewer media queries, fewer grid layouts, fewer ARIA/role attributes, and fewer sections. The CSS is DEEPER per zone but NARROWER in structural variety.

---

## 1. CSS Custom Properties Comparison

### CD-006 Custom Properties (84 variables in :root)

**Locked Layer (design tokens):**
- 6 color tokens (primary, background, text, text-secondary, border, border-subtle)
- 3 zone background tokens (sparse, dense, breathing)
- 3 typography tokens (display, body, mono)
- 6 type scale tokens (page, section, subsection, body, code, meta)
- 2 geometry tokens (border-radius: 0, box-shadow: none)
- 14 spacing scale tokens (space-1 through space-20)
- 3 gestalt semantic aliases (space-within, space-between, space-chapter)
- 5 accent colors (blue, green, coral, amber, purple)
- 1 border-left-width
- 3 solid offset tokens (offset-x, offset-y, offset-color)
- 7 syntax highlighting tokens
- 1 transition-standard token
- 4 axis zone tokens (primary, secondary, focal, transition)

**Total: ~58 tokens + 26 aliases/derivations = 84 custom properties**

### Yegge Custom Properties (32 variables in :root)

- 5 zone background tokens (loading-dock, dispatch-floor, factory-floor, assembly-line, shipping-bay)
- 5 identity color tokens (factory-accent, factory-steel, factory-text-light, factory-border, factory-border-subtle, factory-text-secondary)
- 4 accent colors (blue, green, amber, purple)
- 3 typography tokens (display, body, mono)
- 14 spacing scale tokens (space-1 through space-24)
- 3 border hierarchy tokens (border-primary, border-section, border-subtle)
- 2 solid offset tokens (offset-x, offset-y) + offset-color

**Total: ~32 custom properties**

### The Gap: Token System Depth

CD-006 has **2.6x more custom properties**. Key missing categories in Yegge:

| Token Category | CD-006 | Yegge | Impact |
|----------------|--------|-------|--------|
| Type scale (named stops) | 6 (page/section/subsection/body/code/meta) | 0 (hardcoded px values) | **CRITICAL** -- no type scale system |
| Gestalt aliases | 3 (within/between/chapter) | 0 | Important -- no semantic spacing |
| Syntax highlighting | 7 tokens | 0 | Nice-to-have -- no syntax colors |
| Transition timing | 1 token | 0 (inline 0.2s) | Important -- no transition system |
| Axis zone tokens | 4 | 0 | Nice-to-have -- zone naming is inline |
| Accent coral | present | **ABSENT** | Important -- only 4 of 5 accents |

**Critical finding:** Yegge hardcodes ALL font sizes as raw px values (40px, 32px, 28px, 24px, 22px, 20px, 18px, 16px, 15px, 14px, 13px, 12px, 11px, 10px, 9px). CD-006 uses a named type scale (`var(--type-page)`, `var(--type-section)`, etc.) that creates a formal hierarchy. Yegge has MORE font size values (15 distinct) but NO SYSTEM -- it is a typography buffet, not a typography hierarchy.

---

## 2. Mechanism Inventory (Per Mechanism Catalog)

Using the 18-mechanism catalog as reference:

### Mechanism #1: Border-Weight Gradient Encoding [HIERARCHY]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | YES | YES |
| Values | 4px/3px/1px (established/probable/speculative) | 4px/3px/1px (primary/section/subtle) |
| Mode | PROGRESSIVE (geological depth) | DISCRETE (categorical) |
| Comment | Strata classes encode semantic gradient | Zone-local usage, not page-level gradient |

**Verdict:** BOTH deploy this. CD-006 uses it more semantically (progressive encoding of confidence).

### Mechanism #2: 2-Zone Component DNA [COMPONENT]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | YES | YES |
| Variants | info, tip, gotcha, essence, challenge (5) | info, tip, essence, warning, challenge (5) |
| Label zone | `.callout-label` (uppercase, 0.1em letter-spacing) | `.callout__label` (uppercase, 0.1em letter-spacing) |
| Body zone | `.callout-body` (prose, 1.7 line-height) | `.callout__body` (prose, 1.7 line-height) |

**Verdict:** BOTH deploy this. Yegge adds CSS-variable-driven callout variants (custom properties for border-color, bg, label-color), which is MORE compositionally sophisticated. Yegge also adds zone-aware overrides (`.zone-factory-floor .callout--info` with dark-mode styling). **Yegge advantage.**

### Mechanism #3: Solid Offset Depth [DEPTH/EMPHASIS]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | Defined but minimally deployed | Defined in tokens but NOT deployed in CSS |
| CSS | offset tokens declared; `.core-abstraction` uses 3px borders | offset tokens declared; no `::after` pseudo-element offset |

**Verdict:** NEITHER fully deploys this. CD-006 has offset tokens and references them. Yegge defines them but never uses them. **NEITHER advantage -- mutual miss.**

### Mechanism #4: Spacing Compression [HIERARCHY]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | YES | YES (STRONG) |
| Z1 padding | space-16 (64px) per section | space-20 (80px) zone padding |
| Z2 padding | -- | space-16 (64px) zone padding |
| Z3 padding | -- | space-12 (48px) zone padding |
| Z4 padding | -- | space-12 (48px) zone padding |
| Z5 padding | -- | space-16 (64px) zone padding |
| Gradient | Section-level variation (space-16 uniform) | Zone-level ARCH: 80→64→48→48→64 |

**Verdict:** Yegge deploys this FAR more powerfully. The zone padding follows an ARCH shape (open→tighten→dense→dense→relax) that creates a palpable density gradient through scrolling. CD-006 uses uniform section spacing. **Yegge advantage.**

### Mechanism #5: Dense/Sparse Alternation [SPATIAL]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | YES (transition types) | YES (zone structure) |
| Implementation | 3 transition types (smooth/bridge/breathing) with different gap sizes (48px/64px/80px) | 5 zones with explicit boundaries (z1-z2, z2-z3, z3-z4, z4-z5) |
| Alternation pattern | Section-to-section via named transitions | Zone-to-zone with threshold markers |

**Verdict:** Yegge is STRONGER here. The explicit zone boundaries with transition labels ("THE DOORFRAME", "THE RECOVERY DOORFRAME") create dramatic pacing. CD-006's transition classes are more systematic but less dramatic. **Yegge advantage.**

### Mechanism #6: Width Variation [SPATIAL]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | YES (moderate) | YES (minimal) |
| Paragraph max-width | 70ch | 65ch (zone-specific), 50ch-55ch (pull quotes) |
| Container | 1100px fixed | 960px fixed |
| Column variation | Z-hero golden ratio (1.618fr/1fr), bento spanning (span 2) | Factory-comparison 2-col, bento 2-col, quote-collection 2-col |
| Width channels | 100%/70ch variation + bento island clustering | 65ch uniform across zones |

**Verdict:** CD-006 uses MORE width variation (golden ratio grid, paragraph width variation, bento spanning). Yegge constrains paragraph width uniformly. **CD-006 advantage.**

### Mechanism #7: Zone Background Differentiation [DEPTH/EMPHASIS]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | YES (3 zones) | YES (5 zones + DARK INVERSION) |
| Zone colors | #FEF9F5 / #FFFFFF / #FAF5ED (3 warm tones, 17 RGB max delta) | #FEF9F5 / #EDE6DA / #1E1E1E / #F0EBE0 / #E5DDD0 (5 distinct, with dark inversion) |
| Dark zone | Header/footer only | Header/footer + ENTIRE Zone 3 (factory floor) |
| RGB deltas | Sparse→Dense: 5 points. Dense→Breathing: 12 points | Z1→Z2: 17 points. Z2→Z3: 188 points (DRAMATIC). Z3→Z4: 210 points. Z4→Z5: 11 points |
| Multi-coherence | Background shift at section boundaries | Background + typography + spacing + border + component density ALL shift at zone boundaries |

**Verdict:** Yegge is DRAMATICALLY stronger. The Z2→Z3 dark inversion is the single most powerful compositional move in either page. The 188 RGB delta is 11x the largest CD-006 zone shift. **Yegge STRONG advantage.**

### Mechanism #8: Scroll Witness / Sticky Navigation [STRUCTURE/NAVIGATION]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | Static TOC only | Fixed side-rail navigation + back-to-top button |
| Implementation | `.toc` with numbered list, anchor links, density labels | `.section-nav` with fixed position, right rail, hover labels |
| Scroll behavior | None | `scroll-behavior: smooth` on html + JS for back-to-top visibility |
| Interactive | No | YES -- hover reveals section label, zone-aware colors |

**Verdict:** Yegge has PERSISTENT navigation (always visible fixed rail) while CD-006 has scroll-away static TOC. Yegge also adds zone-aware styling (`.section-nav__link--z3` for dark section). Back-to-top button with visibility toggle. **Yegge advantage.**

### Mechanism #9: Confidence/Priority Encoding via Color [COMPONENT]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | YES (5 accent colors) | YES (5 accent colors) |
| Accents used | blue, green, coral, amber, purple | blue, green, amber, purple, red (factory-accent) |
| Missing | -- | coral (#C97065) -- only 4 of 5 standard accents |

**Verdict:** TIED. Both use color encoding. CD-006 has the full 5-color accent palette. Yegge substitutes factory-accent (red) for coral.

### Mechanism #10: Border-Left Semantic Signaling [COMPONENT]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | YES | YES |
| Callout border | 4px solid | var(--border-primary) = 4px solid |
| Additional uses | qa-question (4px primary), stratum borders | complexity-ladder (4px accent), pull-quote (4px purple/accent), principle-card (4px accent), checkpoint (4px green), use-grid columns (4px green/red) |

**Verdict:** Yegge uses 4px left-border signaling on MORE component types (6+ vs 3). **Yegge advantage.**

### Mechanism #11: Typographic Scale Jumping [HIERARCHY]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | YES (formal 5-level scale) | YES (informal but MORE levels) |
| Named stops | 3rem / 1.625rem / 1.375rem / 1rem / 0.875rem / 0.75rem | NONE (all px values) |
| Distinct sizes used | ~8 (h1 3rem, h2 1.625rem, h3 1.375rem, body 1rem, code 0.875rem, meta 0.75rem, version 0.625rem, inline 0.9em) | ~15 (40px, 36px, 32px, 28px, 26px, 24px, 22px, 20px, 18px, 16px, 15px, 14px, 13px, 12px, 11px, 10px, 9px) |
| Zone variation | h2 same across all sections | h2 varies by zone: Z1=40px, Z2=32px, Z3=28px, Z4=28px, Z5=32px |

**Verdict:** MIXED. CD-006 has the FORMAL SYSTEM (named type scale, ratio-based). Yegge has MORE TYPOGRAPHIC VARIATION per zone but no formal system. Yegge's zone-by-zone heading size changes (40→32→28→28→32) create compression that reinforces the density arc. CD-006's typography is uniform. **Yegge has more compositional typographic richness; CD-006 has more systematic rigor.**

### Mechanism #12: Responsive Strategy [STRUCTURE/NAVIGATION]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Breakpoints | 960px, 768px, 480px (3 breakpoints) | 768px only (1 breakpoint) |
| 960px rules | Grid collapse (bento→1col, choreo→1col) | NONE |
| 768px rules | Header title size, Z-hero collapse, reasoning 2-col→1-col, footer collapse | Zone heading sizes, zone padding, all grids→1col, pull quote sizes, container padding, footer collapse, section-nav hide, back-to-top resize |
| 480px rules | Title and h2 size, code-block padding, callout padding | NONE |
| Print styles | YES (full @media print block) | NO |
| Reduced motion | YES | YES |

**Verdict:** CD-006 has 3x more breakpoints, print styles, AND more granular responsive adjustments. Yegge has only 768px + reduced-motion. **CD-006 STRONG advantage.**

### Mechanism #13: Drop Cap [HIERARCHY]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | YES (3 instances) | NO |
| CSS | `.drop-cap::first-letter` with 3.5em serif, float, primary color | -- |

**Verdict:** CD-006 only. Drop cap is a significant typographic gesture -- the display serif appearing at 3.5em as a section opener creates a moment of visual authority. **CD-006 advantage.**

### Mechanism #14: Syntax Highlighting [COMPONENT]

| Feature | CD-006 | Yegge |
|---------|--------|-------|
| Present | YES (7-color system with named tokens) | NO |
| Tokens | syntax-keyword, syntax-string, syntax-comment, syntax-function, syntax-type, syntax-number, syntax-punctuation | -- |
| Classes | .kw, .str, .cmt, .fn, .typ, .num, .pn | -- |
| Application | Code blocks throughout, hand-styled spans | Plain `<pre><code>` blocks without highlighting |

**Verdict:** CD-006 has a FULL code syntax highlighting system. Yegge's code blocks are monochrome (single color text on dark background). For technical content, this matters. **CD-006 advantage.**

---

## 3. Axis Pattern Usage

### CD-006: 5 Distinct Axis Patterns

1. **Spiral** (Section 1): `.spiral-strata` with border-weight gradient strata (bedrock→atmosphere)
2. **Z-Pattern** (Sections 2, 5): `.z-hero` with golden ratio grid (1.618fr/1fr) + Q&A blocks
3. **Bento Grid** (Sections 3, 6): `.bento-grid` with 4-column grid, span-2 wide/large items
4. **F-Pattern** (Section 4): `.f-movement` with progressive 3-movement narrative arc
5. **Choreography** (Section 7): `.choreo-hub` centered + `.choreo-spokes` 3-column grid

**Section-by-section axis rotation:** The page cycles through ALL 5 axis patterns across 8 sections, never repeating consecutively. This creates maximum structural variety.

### Yegge: 1 Primary Pattern (5-Zone Linear)

The page follows a SINGLE linear zone architecture:
- Zone 1 (Loading Dock): Orientation (Z-like generous spacing)
- Zone 2 (Dispatch Floor): Mental model (moderate density)
- Zone 3 (Factory Floor): Infrastructure deep dive (dark inversion, high density)
- Zone 4 (Assembly Line): Practice/implementation (moderate-high density)
- Zone 5 (Shipping Bay): Resolution (moderate, relaxed)

Within zones, Yegge uses 2-column grids (factory-comparison, bento-grid, quote-collection, use-grid, community-grid) but these are always simple 1fr 1fr layouts. No golden ratio. No 4-column grids. No span variations. No spiral or choreography patterns.

### The Gap: Structural Variety

| Axis Feature | CD-006 | Yegge |
|--------------|--------|-------|
| Distinct axis patterns | 5 | 1 (linear with sub-grids) |
| Grid column configs | 4-col, 3-col, 2-col (golden ratio), 1-col | 2-col (1fr 1fr) only |
| Section-level layout changes | Every section changes | All sections use same linear flow |
| Named transition types | 3 (smooth/bridge/breathing) | 4 explicit boundaries with threshold markers |

**Importance: CRITICAL.** CD-006's axis variety is one of its defining characteristics. Each section feels structurally distinct -- scrolling through CD-006 is a journey through different spatial arrangements. Yegge's linear zone model is powerful for emotional arc but monotonous in LAYOUT. The reader sees the same column structure (or no columns) throughout.

---

## 4. Component Type Variety

### CD-006: 11 Distinct Component Types

1. **Callouts** (5 variants: info, tip, gotcha, essence, challenge)
2. **Code blocks** (dark theme, with syntax highlighting + labels)
3. **File tree** (indented directory structure with icons)
4. **Decision matrix** (table with labeled header + recommended row highlighting)
5. **Core abstraction** (3-zone: label + principle + proof-code)
6. **Task component** (checkbox list with build checklist)
7. **Reasoning** (2-column comparison + recommendation bar)
8. **Q&A blocks** (question with serif italic + answer section)
9. **Transition zones** (3 types: smooth/bridge/breathing)
10. **Table of contents** (numbered with density labels)
11. **Stratum blocks** (border-weight gradient sections)

### Yegge: 14 Distinct Component Types

1. **Callouts** (5 variants: info, tip, essence, warning, challenge)
2. **Code blocks** (dark on light in Z1/Z2/Z4/Z5; light on dark in Z3; code-snippet with header)
3. **Complexity ladder** (pre-formatted ASCII diagram)
4. **Pull quotes** (serif italic with citations)
5. **Architecture diagram** (dark background, pre-formatted ASCII)
6. **Factory comparison** (2-column grid with mono headers)
7. **Principle cards** (4px left border, Z3 dark variant)
8. **Bento cells** (grid with label + body, full-width variant)
9. **Step list** (CSS counter-based numbered steps)
10. **Troubleshooting accordions** (details/summary with +/- indicators)
11. **Checkpoint boxes** (green left border, verification component)
12. **Use grid** (2-column yes/no comparison with colored borders)
13. **Quote cards** (2-column grid with themed quotes + citations)
14. **Community cards** (2-column grid with name/author/description)
15. **Source links** (styled link list with type badges)
16. **Section navigation** (fixed right rail with hover labels)
17. **Back-to-top button** (fixed position, zone-aware)

**Verdict:** Yegge has MORE component types (17 vs 11). However, many of Yegge's components are simple (2 CSS properties), while CD-006's components are more architecturally complex (core-abstraction has 3 nested zones, reasoning has 2-column grid + recommendation bar).

---

## 5. What CD-006 Has That Yegge Doesn't

### CRITICAL (Would Transform Yegge Into Flagship)

**C1. Multiple Axis Patterns (Structural Variety)**
```css
/* CD-006: Golden ratio Z-Pattern hero */
.z-hero {
  display: grid;
  grid-template-columns: 1.618fr 1fr;
  grid-template-rows: auto auto;
  gap: var(--space-8);
}

/* CD-006: 4-column Bento grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

/* CD-006: 3-column Choreography spokes */
.choreo-spokes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}
```
**Compositional function:** Section-level layout rotation creates the sense that each section is a NEW spatial experience. The reader encounters 5 different attention topologies across 8 sections. This prevents "scrolling fatigue" -- the spatial monotony that flattens long pages.

**Importance: CRITICAL.** This is the single largest compositional gap. Yegge uses the same linear-with-2-column-subgrid pattern across all 5 zones. The zone backgrounds change, the typography shifts, but the LAYOUT stays the same.

---

**C2. Named Type Scale System**
```css
/* CD-006: formal type scale with named stops */
--type-page: 3rem;
--type-section: 1.625rem;
--type-subsection: 1.375rem;
--type-body: 1rem;
--type-code: 0.875rem;
--type-meta: 0.75rem;
```
**Compositional function:** A named type scale creates a HIERARCHY SYSTEM, not just a collection of sizes. Every element's size is defined relative to the system, not as an arbitrary pixel value. This enables programmatic verification (does the type scale follow a ratio?) and creates consistency that transcends any single zone.

**Importance: CRITICAL.** Yegge has 15+ font sizes with no formal system. The sizes are locally justified (zone-specific) but globally chaotic. A type scale would impose system-level typographic coherence.

---

**C3. Three-Breakpoint Responsive Strategy**
```css
/* CD-006: 3 breakpoints */
@media (max-width: 960px) { /* grid collapse */ }
@media (max-width: 768px) { /* general collapse */ }
@media (max-width: 480px) { /* minimum */ }
```
**Compositional function:** Three breakpoints ensure the page degrades gracefully across ALL viewport widths. The 960px breakpoint catches multi-column grid collapse before it becomes unreadable. The 480px breakpoint handles mobile-specific adjustments (code block padding, callout spacing).

**Importance: CRITICAL.** Yegge only responds at 768px. Between 960px and 769px, the 2-column grids may become cramped. Below 480px, there are no mobile-specific adjustments.

---

### IMPORTANT (Would Noticeably Improve Quality)

**I1. Drop Cap First-Letter Treatment**
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
**Function:** Creates a visual "moment" at section openings. The display serif appearing at 3.5em in primary red is a strong signal that "something new is beginning." It is a one-property micro-gesture that punches above its weight.

---

**I2. Syntax Highlighting System**
```css
/* 7 token colors for code visualization */
.kw { color: var(--syntax-keyword); }   /* #E83025 red */
.str { color: var(--syntax-string); }    /* #6B9B7A green */
.cmt { color: var(--syntax-comment); }   /* #666666 gray */
.fn { color: var(--syntax-function); }   /* #4A7C9B blue */
.typ { color: var(--syntax-type); }      /* #C97065 coral */
.num { color: var(--syntax-number); }    /* #D97706 amber */
.pn { color: var(--syntax-punctuation); } /* #E0D5C5 tan */
```
**Function:** Transforms monochrome code blocks into color-coded semantic displays. Each code element type gets a distinct color that matches the design system's accent palette. This turns code blocks from "text dumps" into "information-rich visualizations."

---

**I3. Print Stylesheet**
```css
@media print {
  body { background: white; color: black; }
  .skip-link { display: none; }
  header, footer { background: white; color: black; border-color: black; }
  .code-block { background: #f5f5f5; color: black; border-color: #ccc; }
  .core-abstraction-proof { background: #f5f5f5; color: black; }
}
```
**Function:** Basic print optimization. Ensures dark backgrounds become white for printing. This is a small but professional touch.

---

**I4. Formal Transition Grammar (3 Named Types)**
```css
.transition--smooth { margin: 48px 0; border-top: 1px solid; padding-top: 48px; }
.transition--bridge { margin: 64px 0; background: breathing; padding: 32px; }
.transition--breathing { margin: 80px 0; border-top: 3px solid; padding-top: 80px; }
```
**Function:** Three named transition types with escalating weight create a grammar of inter-section relationships. "How sections connect" becomes a first-class compositional concern. CD-006 uses transitions between EVERY section, varying the type based on axis-pattern compatibility (e.g., Spiral always gets breathing transition per AD-F-025).

---

**I5. Golden Ratio Grid**
```css
.z-hero {
  grid-template-columns: 1.618fr 1fr;
}
```
**Function:** The golden ratio creates a naturally pleasing asymmetry that simple 1fr/1fr grids cannot achieve. The primary column gets 61.8% of width, the secondary gets 38.2%. This creates visual hierarchy through SPACE ALLOCATION, not just content.

---

**I6. Inline Code Styling**
```css
code:not(pre code):not(.code-block code) {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--color-border-subtle);
  padding: 2px 6px;
  border: 1px solid var(--color-border);
}
```
**Function:** Inline code gets a subtle but distinct treatment (0.9em size reduction, subtle background, micro border). CD-006 uses `:not()` selectors to avoid styling code inside pre blocks. Yegge has inline code styling too but with a simpler selector and zone-aware overrides, which is actually more compositionally aware.

---

### NICE-TO-HAVE (Polish)

**N1. Gestalt Semantic Spacing Aliases**
```css
--space-within: var(--space-2);
--space-between: var(--space-8);
--space-chapter: var(--space-16);
```
Provides semantic names for spacing relationships. Not visible in output but improves code semantics.

**N2. Section Meta Labels**
CD-006 has `section-meta` labels (e.g., "Section 01 . Spiral . Geological Density") that explain the compositional strategy to the reader. Yegge uses `section-indicator` for simpler labels ("S0 -- Orientation").

**N3. Axis Zone Token System**
```css
--axis-zone-primary: var(--color-zone-dense);
--axis-zone-secondary: var(--color-zone-sparse);
--axis-zone-focal: var(--color-background);
--axis-zone-transition: var(--color-zone-breathing);
```
An additional indirection layer for axis-pattern-specific zone colors.

---

## 6. What Yegge Has That CD-006 Doesn't

### THE PERVADING METAPHOR (Yegge's Defining Advantage)

CD-006 was classified as CEILING (not Flagship) because it lacks a pervading metaphor. Yegge's factory/refinery metaphor is STRUCTURAL:

**M1. Metaphor-Named Custom Properties**
```css
--loading-dock: #FEF9F5;
--dispatch-floor: #EDE6DA;
--factory-floor: #1E1E1E;
--assembly-line: #F0EBE0;
--shipping-bay: #E5DDD0;
```
The CSS custom properties ARE the metaphor. Zone names encode the factory journey. This is NOT labeling -- it is structural integration.

**M2. Zone-Aware Component Overrides**
```css
/* 29+ zone-specific CSS rules */
.zone-factory-floor .callout { background: rgba(232, 48, 37, 0.1); }
.zone-factory-floor .callout__label { color: var(--factory-accent); }
.zone-factory-floor .callout__body { color: #FEF9F5; }
.zone-factory-floor .callout--info { /* dark variant */ }
.zone-factory-floor th { border-bottom: 3px solid rgba(254, 249, 245, 0.3); }
.zone-factory-floor td { color: rgba(254, 249, 245, 0.95); }
.zone-factory-floor pre { background: rgba(254, 249, 245, 0.08); }
.zone-factory-floor p code { background: rgba(254, 249, 245, 0.12); }
```
CD-006 has NO zone-aware component overrides. Every component looks the same regardless of which section it appears in. Yegge's components TRANSFORM when entering the dark factory floor -- callouts go dark, tables get light borders, code blocks invert, even inline code changes. This is per-zone compositional awareness.

**M3. Threshold Transition Markers**
```css
.boundary-z2-z3 .threshold__line {
  border-top: 3px solid var(--factory-accent);
  padding-top: var(--space-4);
}
.boundary-z2-z3 .threshold__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--factory-accent);
  text-align: center;
}
```
CD-006 uses generic transition classes. Yegge has specific boundary classes (`.boundary-z1-z2`, `.boundary-z2-z3`, `.boundary-z3-z4`, `.boundary-z4-z5`) with threshold markers that physically mark the zone transitions. The Z2→Z3 and Z3→Z4 boundaries are HEAVY (red accent line + uppercase label), while Z4→Z5 is LIGHT (1px border only). This boundary-weight variation is itself a compositional technique.

**M4. The Dark Inversion (Zone 3)**
An entire page zone in near-black background with fully inverted component styling. CD-006 inverts header/footer only. Yegge inverts an ENTIRE CONTENT ZONE with:
- All text shifted to `#FEF9F5` (cream) and `rgba(254, 249, 245, 0.95)`
- Callout backgrounds darkened (rgba transparency on dark)
- Table borders lightened (rgba white)
- Code blocks reversed (light on near-black)
- Selection color changed (red bg + white text)
- List bullet markers adjusted (red accent on dark)
- Section indicators changed from secondary gray to accent red

This is 30+ CSS rules specifically for the dark zone. It is the single most CSS-intensive compositional move in either page.

**M5. Fixed Section Navigation with Zone Awareness**
```css
.section-nav__link--z3 {
  background: rgba(254, 249, 245, 0.25);
}
```
The sticky navigation changes its visual weight when it aligns with the dark zone. This is a UI-level acknowledgment of the zone system.

**M6. Edge Intentionality Features**
```css
/* Tabular nums for numeric alignment */
.tabular-nums { font-variant-numeric: tabular-nums; }

/* Optical alignment for serif headings */
.zone-loading-dock h2,
.zone-dispatch-floor h2 { text-indent: -0.03em; }

/* First/last child collapse */
.callout:first-child { margin-top: 0; }
.callout:last-child { margin-bottom: 0; }
```
CD-006 does not have optical alignment compensation, tabular-nums, or first/last-child margin collapse. These are micro-refinements that show attention to typographic detail.

**M7. CSS Counter-Based Step Lists**
```css
.step-list li::before {
  content: counter(step-counter);
  counter-increment: step-counter;
  /* styled as numbered badges */
}
```
A CSS counter creates numbered steps without HTML numbering. CD-006 uses manual numbering or relies on `<ol>`.

**M8. Troubleshooting Accordions**
```css
.troubleshoot summary { /* styled with +/- toggle */ }
.troubleshoot summary::after { content: '+'; }
.troubleshoot[open] summary::after { content: '\2212'; }
.troubleshoot summary::-webkit-details-marker { display: none; }
```
Interactive `<details>/<summary>` elements with custom styling. CD-006 has no progressive disclosure components.

**M9. Checkpoint Boxes**
```css
.checkpoint {
  border-left: 4px solid var(--accent-green);
  background: rgba(74, 157, 107, 0.05);
}
```
A verification/milestone component not present in CD-006.

**M10. Per-Zone Typography Variation**
Yegge changes heading sizes, body font sizes, line heights, and letter-spacing VALUES at every zone boundary. CD-006 uses the same type scale throughout.

---

## 7. The Combined Blueprint

If you merged the best of CD-006's CSS vocabulary depth with Yegge's metaphor-driven architecture:

### From Yegge (KEEP -- Metaphor & Emotional Arc)
- 5-zone factory metaphor with named custom properties
- Zone-aware component overrides (30+ dark-zone rules)
- Threshold transition markers at boundaries
- Dark inversion zone (Zone 3 factory floor)
- Spacing compression ARCH (80→64→48→48→64)
- Fixed section navigation with zone awareness
- Edge intentionality (text-indent, tabular-nums, first/last child)
- Troubleshooting accordions (progressive disclosure)
- CSS counter step lists
- Per-zone typography variation

### From CD-006 (ADD -- Structural Variety & Systems)
- **Multiple axis patterns per section** (replace uniform 2-col grids with Z-hero golden ratio, 4-col bento, 3-col choreography, spiral strata) -- THE HIGHEST PRIORITY ADDITION
- **Named type scale system** (replace 15 hardcoded px values with var(--type-*) tokens)
- **Three breakpoints** (add 960px and 480px breakpoints)
- **Drop cap first-letter treatment** (add to zone-opening paragraphs, especially Z1 and Z4)
- **Syntax highlighting** (add 7-token color system for code blocks)
- **Print styles** (add @media print block)
- **Named transition grammar** (formalize Yegge's boundaries into smooth/bridge/breathing vocabulary)
- **Golden ratio grid** (use 1.618fr/1fr for at least one section layout)
- **Gestalt semantic aliases** (add space-within/between/chapter tokens)

### The Synthesized Result Would Be:
- ~2,200 CSS lines (Yegge's 1,812 + ~400 for axis patterns, type scale, responsive, print, syntax)
- 5 zone backgrounds + dark inversion (from Yegge)
- 5 axis patterns across zones (from CD-006)
- Named type scale (from CD-006) with zone-specific overrides (from Yegge)
- 3 responsive breakpoints (from CD-006) with zone-aware rules (from Yegge)
- All edge intentionality and micro-refinements (from Yegge)
- Full syntax highlighting and print support (from CD-006)

This would be the first page to achieve BOTH CD-006's structural vocabulary depth AND Yegge's metaphor-driven emotional arc. It would be the strongest possible candidate for Flagship 4/4.

---

## 8. Summary Scorecard

### Where Yegge Wins (7 categories)

| Category | Margin |
|----------|--------|
| Pervading metaphor | MASSIVE (structural vs none) |
| Zone background differentiation | MASSIVE (5 zones + dark inversion vs 3 subtle zones) |
| Zone-aware component overrides | MASSIVE (30+ rules vs 0) |
| Spacing compression | STRONG (ARCH pattern vs uniform) |
| Dense/sparse alternation | STRONG (dramatic boundaries vs named transitions) |
| Pseudo-element usage | MODERATE (13 vs 2) |
| Component type count | MODERATE (17 vs 11) |

### Where CD-006 Wins (6 categories)

| Category | Margin |
|----------|--------|
| Axis pattern variety | MASSIVE (5 patterns vs 1 linear) |
| Responsive strategy | MASSIVE (3 breakpoints + print vs 1 breakpoint) |
| Named type scale system | STRONG (6 named stops vs 15 arbitrary px) |
| Syntax highlighting | STRONG (7-color system vs none) |
| ARIA/Role attributes | STRONG (28/24 vs 14/9) |
| Drop cap treatment | MODERATE (3 instances vs none) |

### Where They Are Equal

| Category | Notes |
|----------|-------|
| Soul compliance | Both perfect (border-radius: 0, box-shadow: none) |
| Border-weight gradient | Both deploy 4px/3px/1px |
| 2-zone callout DNA | Both have 5 variants |
| Color encoding | Both use 4-5 accent colors |
| Accessibility (skip link, focus-visible) | Both present |

---

## 9. The Central Insight

**CD-006 is a SYSTEM demonstration. Yegge is an EXPERIENCE.**

CD-006 proves that 5 axis patterns, 11 component types, 7 transition grammars, and a formal type scale can work together. It is a VOCABULARY SHOWCASE -- "look at all the things this design system can do." Its structural variety is unmatched.

Yegge proves that a single metaphor can organize an entire page into an emotional journey. The factory metaphor doesn't just name zones -- it DRIVES every CSS decision. The dark inversion isn't a technique; it is the reader ENTERING the factory floor. The spacing compression isn't a pattern; it is the machinery tightening.

**What makes Flagship 4/4 is BOTH:**
- CD-006-level structural variety (multiple axis patterns, formal type scale, responsive depth)
- Yegge-level metaphor coherence (zone-aware components, emotional arc, named properties, edge intentionality)

Neither page achieves both. The combined blueprint above would.

---

*End of forensic comparison.*
