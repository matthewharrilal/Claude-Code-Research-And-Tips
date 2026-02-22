# Soul Resonance Analysis: Page A vs Page B

**Analyst:** soul-resonance-analyst (Opus 4.6)
**Date:** 2026-02-22
**Subject:** Which Gas Town page resonates more with the SOUL of the KortAI design system?

---

## Executive Verdict

**Page B (gas-town-steve-yegge/output.html, /build-page skill) resonates MORE DEEPLY with the design system's soul.**

Page A is a competent, warm, recognizably-KortAI page. Page B is a page that FEELS like it was born from the same mind that produced CD-006. The difference is not compliance (both comply well) -- it is *inhabitation*. Page B inhabits the design system's identity; Page A follows its rules.

Score: **Page A: 7.5/10 soul resonance. Page B: 9.0/10 soul resonance.**

---

## 1. Prohibitions Compliance (Layer 1)

### Page A (master-execution-prompt)

**Absolute Prohibitions (8 checked):**

| # | Prohibition | Status | Evidence |
|---|-----------|--------|----------|
| 1 | border-radius > 0 | PASS | `--border-radius: 0` in :root, `border-radius: 0` explicit on .callout, .bento-cell, pre, code-snippet, etc. |
| 2 | box-shadow | PASS | `--box-shadow: none` in :root, no box-shadow anywhere in CSS |
| 3 | drop-shadow filter | PASS | No filter properties in CSS |
| 4 | Semi-transparent backgrounds | VIOLATION (MINOR) | `.callout--essence` uses `rgba(217, 160, 50, 0.06)`, `.callout--tip` uses `rgba(157, 140, 100, 0.05)`, `.callout--gotcha` uses `rgba(200, 80, 60, 0.07)`, `.callout--challenge` uses `rgba(157, 120, 90, 0.06)`. These are semi-transparent BACKGROUND colors on callout components. |
| 5 | Gradient backgrounds | PASS | No gradients anywhere |
| 6 | Pure black/white | VIOLATION (MINOR) | `#333333` used for header border-top (line 198, 445) -- not strictly from palette. `#fef9f5` used as literal in .bento-cell (line 515) instead of var(). Not #000 or #FFF directly. |
| 7 | Instrument Serif for body | PASS | Serif used only for headings, drop-cap, essence callout, pullquote |
| 8 | Rounded corners for decoration | PASS | All corners sharp |

**Conditional Prohibitions:**

| # | Prohibition | Status | Evidence |
|---|-----------|--------|----------|
| 9 | 2px borders | PASS | No 2px borders found |
| 10 | Accent borders < 4px | NOTE | `.bento-cell--rig` uses `border-left: 3px solid var(--accent-blue)` (line 531). 3px is permitted for secondary accent weight per tokens.css `--border-accent: 3px`. |
| 11 | Decorative no-info elements | PASS | `.density-meter` carries information (visual density encoding) |
| 12 | Decorative grid breaking | PASS | Bento grid breaks serve content hierarchy |
| 13 | Vertical table borders | PASS | Tables use horizontal-only borders |
| 14 | Hover lift | PASS | No translateY hover effects |
| 15 | Traffic-light adjacency | PASS | Colors separated by sufficient spacing |
| 16 | Cool-toned grays | PASS | All backgrounds warm-toned |
| 17 | Non-italic h3 | PASS | h3 has `font-style: italic` (line 257) |
| 18 | Same-density stacking | PASS | Zone system creates density variation |
| 21 | Full viewport contentless space | PASS | Content distributed across page |
| 22 | Visual interest in first third only | PASS | Decision matrix + Reasoning component below midpoint |

**Total Page A: 2 MINOR violations (semi-transparent callout backgrounds, off-palette #333333)**

---

### Page B (/build-page skill)

**Absolute Prohibitions (8 checked):**

| # | Prohibition | Status | Evidence |
|---|-----------|--------|----------|
| 1 | border-radius > 0 | PASS | `--border-radius: 0` in :root, `border-radius: 0` explicit on skip-link, pre |
| 2 | box-shadow | PASS | `--box-shadow: none` in :root, no box-shadow in CSS |
| 3 | drop-shadow filter | PASS | No filter properties |
| 4 | Semi-transparent backgrounds | PASS | No rgba() backgrounds on any components. All callouts use `var(--bg-z1)` which is solid `#FEF9F5`. The `core-quote::after` pseudo-element uses solid `var(--color-text)`. |
| 5 | Gradient backgrounds | PASS | No gradients |
| 6 | Pure black/white | PASS | All colors from token palette. No #000 or #FFF. |
| 7 | Instrument Serif for body | PASS | Serif only on headings, core-quote blockquote, mental-model blockquote |
| 8 | Rounded corners for decoration | PASS | All corners sharp |

**Conditional Prohibitions:**

| # | Prohibition | Status | Evidence |
|---|-----------|--------|----------|
| 9 | 2px borders | PASS | No 2px borders |
| 10 | Accent borders < 4px | NOTE | `.role-card` uses `border: var(--border-medium) solid` (3px). This is secondary structural weight, not accent. Permitted. |
| 11 | Decorative no-info elements | PASS | Every element carries content |
| 12 | Decorative grid breaking | PASS | Grid breaks serve role hierarchy |
| 13 | Vertical table borders | PASS | Horizontal-only borders on all tables |
| 14 | Hover lift | PASS | No translateY effects |
| 15 | Traffic-light adjacency | PASS | Color usage well-separated |
| 16 | Cool-toned grays | PASS | All backgrounds warm-toned |
| 17 | Non-italic h3 | PASS | h3 has `font-style: italic` (line 153) |
| 18 | Same-density stacking | PASS | 4 zones with distinct density levels |
| 21 | Full viewport contentless space | PASS | Dense content in all zones |
| 22 | Visual interest in first third only | PASS | Mental model component, code blocks, and extension cards in second half |

**Total Page B: ZERO violations.**

### Prohibitions Verdict

**Page B wins.** Zero violations vs Page A's 2 minor violations. More importantly, Page B avoids semi-transparent backgrounds entirely -- it uses solid `var(--bg-z1)` on all callout backgrounds, which is the CORRECT KortAI approach (Prohibition #4 exists specifically because rgba backgrounds "survive multiple review layers but are soul violations"). Page A's rgba backgrounds are the EXACT anti-pattern the prohibition was written to prevent.

Page B also shows awareness of the SPIRIT of prohibitions. Its CSS comments reference specific mechanism numbers (e.g., "MECHANISM #13: DARK HEADER", "MECHANISM #16: Drop Cap") -- it is conscious of the vocabulary. Page A uses descriptive comments but doesn't reference the mechanism catalog.

---

## 2. Token Alignment (Layer 2)

### Color Palette Comparison

**tokens.css canonical values:**
- `--color-primary: #E83025` (KortAI red)
- `--color-background: #FEF9F5` (warm cream)
- `--color-text: #1A1A1A` (near-black)
- `--color-text-secondary: #666666`
- `--color-border: #E0D5C5` (warm tan)
- `--color-border-subtle: #F0EBE3`

| Token | Page A | Page B | Winner |
|-------|--------|--------|--------|
| --color-primary | `#E83025` | `#E83025` | TIE |
| --color-background | `#FEF9F5` | `#FEF9F5` | TIE |
| --color-text | `#1A1A1A` | `#1A1A1A` | TIE |
| --color-text-secondary | `#666666` | `#666666` | TIE |
| --color-border | `#E0D5C5` | `#E0D5C5` | TIE |
| --color-border-subtle | `#F0EBE3` | `#F0EBE3` | TIE |
| Zone backgrounds | `#FEF9F5`, `#FAF5ED` (2 values, delta ~10 RGB) | `#FEF9F5`, `#F0EBE3`, `#E8E0D4`, `#F5F0E8` (4 values, delta 15-20 RGB each) | **Page B** |
| Off-palette colors | `#333333` (header border), `#3d3d3d` (html color), `#fef9f5` (literal) | None found | **Page B** |

### Zone Background Analysis

Page A uses 3 zone backgrounds: `--color-zone-sparse: #FEF9F5`, `--color-zone-dense: #FEFCF8`, `--color-zone-breathing: #F5EDE0`. The delta between sparse and dense is **only ~4 RGB points** (FEF9F5 vs FEFCF8) -- sub-perceptual. The breathing zone (#F5EDE0) has adequate delta (~18 from sparse).

Page B explicitly documents its zone background choices with RGB deltas:
```css
--bg-z1: #FEF9F5;      /* delta 0 from tokens.css canonical */
--bg-z2: #F0EBE3;      /* delta 18 from Z1 -- MATCHES --color-border-subtle */
--bg-z3: #E8E0D4;      /* delta 15 from Z2 */
--bg-z4: #F5F0E8;      /* delta 20 from Z3 */
```

Page B's zone backgrounds are ALL drawn from or adjacent to the token palette. `#F0EBE3` IS the canonical `--color-border-subtle`. The deepest zone `#E8E0D4` is a natural warm continuation. Every delta exceeds the 15 RGB minimum threshold from the design system guardrails. The COMMENT in the CSS explicitly explains WHY the original TC brief values were overridden (deltas were sub-perceptual) -- this is prohibition #19 awareness (research provenance for design choices).

### Typography

| Property | Page A | Page B | tokens.css | Winner |
|----------|--------|--------|-----------|--------|
| --font-display | Instrument Serif | Instrument Serif | Instrument Serif | TIE |
| --font-body | Inter | Inter | Inter | TIE |
| --font-mono | JetBrains Mono | JetBrains Mono | JetBrains Mono | TIE |
| --type-page | 2.75rem | 3rem | 3rem | **Page B** |
| --type-section | 1.625rem | 2rem | 1.625rem or 2rem (both in tokens) | Page B uses `--text-h2: 2rem` |
| --type-subsection | 1.375rem | 1.5rem | 1.375rem or 1.5rem (both in tokens) | Page B uses `--text-h3: 1.5rem` |
| h3 italic | Yes | Yes | Yes | TIE |
| Display type scale | `--type-display` absent | `--type-display: 3rem` present | `--text-display: 3rem` in tokens | **Page B** |

Page B's type scale is LARGER and more differentiated. Its `--type-display: 3rem` header title creates stronger hierarchy. tokens.css defines `--text-display: 3rem` which Page B uses. Page A tops out at 2.75rem, compressing the type scale.

### Spacing

Both pages use the canonical 4px-based spacing scale. Key differences:

| Property | Page A | Page B | Analysis |
|----------|--------|--------|----------|
| Container width | 960px | 960px | Both compliant (940-960px range) |
| Header padding | `--space-12 --space-6` (48px 24px) | `--space-12 --space-8` (48px 32px) | Page B slightly more generous |
| Zone padding varies | Yes (10-16 space tokens) | Yes (5-20 space tokens per zone) | Page B has wider range = more contrast |
| --space-max-zone | No explicit enforcement | `--space-24: 96px` defined, padding respects ceiling | **Page B** |

### Token Alignment Verdict

**Page B wins convincingly.** Its zone backgrounds have perceptible, documented deltas. Its type scale uses the full display-to-meta range from tokens.css. It has zero off-palette colors. Its CSS comments document provenance. Page A has sub-perceptual zone deltas (#FEFCF8 vs #FEF9F5 is invisible), off-palette #333333/#3d3d3d, and a compressed type scale.

---

## 3. Semantic Rules (Layer 6)

### Content-Coupling

**Page A:** Visual treatment has moderate content-coupling. The 5 zones (opening, architecture, memory, principles, comparison) have different backgrounds and spacing, but the mapping is more organizational than semantic. Zone-opening and zone-memory share the same background (#FEF9F5). Zone-architecture and zone-principles share the same background (#FAF5ED). The zone names describe content topics but the VISUAL treatment doesn't ENCODE why one topic feels different from another.

**Page B:** Visual treatment has STRONG content-coupling. The 4 zones are explicitly mapped to a metaphor (military clearance levels): Zone 1 "Situation Brief" (open, warm cream), Zone 2 "Operational Readiness" (tactical, warm gray-beige), Zone 3 "Field Intelligence" (dense, deep earthy), Zone 4 "Allied Ops & Deployment" (resolved, lighter return). Each zone has DISTINCT CSS: Z3 has `letter-spacing: 0.03em` on body text and `font-weight: 600` on paragraphs -- encoding urgency through typographic density. Z4 reverts to `font-weight: 400` -- encoding resolution through release. The visual treatment RESPONDS to what the content IS, not just where it appears.

Specific CSS evidence from Page B:
```css
.zone-3 p { font-weight: 600; } /* DEEPENING -- heavier = more urgent */
.zone-4 p { font-weight: 400; } /* RESOLVING -- release */
.zone-3 { letter-spacing: 0.03em; } /* Dense intel territory */
.zone-4 { letter-spacing: 0; } /* Resolution */
```

This is the semantic value framework from Layer 6 in action: Q2 ("WHY does it vary?") has a clear answer (urgency encoding), and Q3 ("WHY THESE SPECIFIC VALUES?") connects to the metaphor (intelligence density).

**Winner: Page B.** Exemplary content-coupling with CSS evidence for every varying value.

### Restraint

**Page A:** Moderate restraint. Uses 5 zone backgrounds, 2 breathing zone transitions, 1 checkpoint, 1 breathing zone (lines 794-822), bento grid, decision matrix, reasoning components, drop caps, stats bars, tables, callouts, code blocks, essence pullquote. The page uses MANY visual techniques. Some feel gratuitous -- the density-meter component (lines 694-711) is a small horizontal bar whose visual impact is minimal for the CSS investment. The stats-bar segments (lines 577-606) have `text-align: center` which breaks the left-aligned editorial convention.

**Page B:** Strong restraint. Uses 4 zones (not 5), no breathing zones as separate sections (uses checkpoint-bar instead -- 1 element, not a full section), role-card grid, extension-card list, data tables, callouts, code blocks, core-quote with solid offset, mental-model component, and actionability assessment. The page does NOT use: density meters, stats bars with center alignment, decision matrices as custom components (uses standard tables instead). Every component carries substantial content. The checkpoint-bar is a single line of text ("Field Intel Complete / Proceed to Deployment") -- maximum information with minimum visual weight.

The core-quote with solid offset (`::after` pseudo-element with 4px/4px offset in `var(--color-text)`) is the ONE moment of elevated visual complexity, and it is used ONCE, for the most important quote on the entire page. This is restraint: saving your most powerful visual tool for your most important content moment.

**Winner: Page B.** Demonstrates meaningful restraint -- fewer techniques deployed, each one earning its place. Page A spreads techniques more evenly, diluting impact.

### Spatial Confidence

**Page A:** Moderate spatial confidence. Zones have consistent internal padding. The breathing zones between major sections (e.g., `breathing-zone--t3` with 48px padding + 3px double borders) create intentional transition space. However, zone-opening has identical background to zone-memory and zone-comparison -- the spatial story is: "warm cream - warm tan - warm cream - warm tan - warm cream." This alternation is mechanical rather than directional.

**Page B:** Strong spatial confidence. The zone backgrounds progress: warm cream (#FEF9F5) -> warm gray-beige (#F0EBE3) -> deep earthy (#E8E0D4) -> lighter return (#F5F0E8). This is a DEEPENING-then-RESOLVING arc -- the space itself tells a story. Zone 3 has compressed padding (`--space-8 --space-16 --space-5` = 32px 64px 20px -- note the asymmetry, tighter at bottom), explicitly commented:

```css
/* FIX CYCLE 1: SC-10 reduced padding-bottom from 32px to 20px
   to close stacked gap at Z3->Z4 boundary. */
```

This is spatial AWARENESS -- the page knows exactly how much space each boundary needs, and the CSS comments document WHY specific values were chosen. The asymmetric padding (32px top, 20px bottom) serves the DIRECTION (compressing toward the checkpoint-bar transition).

**Winner: Page B.** Spatial progression tells a directional story. Page A's spatial story is alternation without direction.

---

## 4. Component Patterns (Layer 4)

### Component Library Usage

**Page A (components used from components.css vocabulary):**
- `.callout` with 2-zone DNA (label + body) -- YES, matches components.css pattern
- `.callout--essence` with serif italic -- YES
- `.callout--tip`, `.callout--info`, `.callout--gotcha`, `.callout--challenge` -- YES
- `pre` dark background code blocks -- YES
- Inline `code` with border-subtle background -- YES
- Tables with 3px header / 1px row borders -- YES
- `.bento-grid` with variable spans -- YES (matches pattern concept)
- `.stats-bar` -- Custom component, NOT in components.css
- `.reasoning` component -- Custom, feels KortAI-adjacent
- `.decision-matrix` -- Custom, feels KortAI-adjacent
- `.density-meter` -- Custom, does NOT feel KortAI (progress-bar aesthetic)
- `.essence-pullquote` -- Custom variant of callout, feels KortAI
- `.drop-cap` -- YES, matches CD-006 pattern

**Page B (components used from components.css vocabulary):**
- `.callout` with 2-zone DNA -- YES, exact match to components.css
- `.callout--threat`, `.callout--caution`, `.callout--doctrine`, `.callout--intel`, `.callout--advantage` -- Custom semantic names but SAME structural DNA as components.css callout variants
- `pre` dark background code blocks -- YES
- `.data-table` with 3px header / 1px row borders -- YES
- `.role-card` grid with variable spans -- YES (bento variant)
- `.role-card--mayor` (span-2) and `.role-card--overseer` -- hierarchical encoding
- `.extension-card` with 4px blue left border -- YES (callout DNA applied to card)
- `.file-tree` with 4px blue left border + mono content -- YES (code-snippet variant)
- `.core-quote` with solid offset -- YES (EXT-CREATIVE-001 from tokens.css)
- `.mental-model` with 3px border + amber label -- Custom, feels KortAI
- `.actionability` with 4px red left border -- Custom, callout DNA
- `.checkpoint-bar` -- Custom, minimal (mono, uppercase, centered)
- `.upgrades-list` with numbered items -- Custom, clean

### Component DNA Analysis

The critical question: do custom components FEEL like they belong in the component library?

**Page A's density-meter:**
```css
.density-meter__segment {
  height: var(--space-2);
  flex: 1;
  background: var(--color-border-subtle);
  border: 1px solid var(--color-border);
}
.density-meter__segment--filled {
  background: var(--color-primary);
  border-color: var(--color-primary);
}
```
This is a progress bar. It uses correct tokens but its AESTHETIC is "dashboard widget," not "editorial publication." It communicates through fill-state, not through the 2-zone DNA or border-weight vocabulary that defines KortAI components. It would look at home in a data dashboard -- it would look foreign in CD-006.

**Page B's core-quote:**
```css
.core-quote {
  position: relative;
  border-left: var(--border-heavy) solid var(--color-primary);
  padding: var(--space-6) var(--space-8);
  margin: var(--space-10) 0;
  background: var(--bg-z1);
  z-index: 1;
}
.core-quote::after {
  content: '';
  position: absolute;
  top: 4px; left: 4px;
  width: 100%; height: 100%;
  background: var(--color-text);
  z-index: -1;
}
```
This uses the solid offset mechanism (EXT-CREATIVE-001) from tokens.css (`--offset-x: 4px; --offset-y: 4px; --offset-color: #1A1A1A`). It achieves depth WITHOUT box-shadow -- the EXACT technique the design system invented to replace shadows while respecting the anti-physical identity. It has a 4px primary left border (callout DNA). It uses the display font for the blockquote. It is a NATURAL extension of the component library.

### Component Pattern Verdict

**Page B wins.** Its custom components extend the component library vocabulary through the SAME structural DNA (2-zone, 4px left border, mono/uppercase labels, serif-italic for wisdom). Page A's custom components occasionally drift into "dashboard widget" territory (density-meter, centered stats-bar) that breaks the editorial personality.

---

## 5. Crown Jewel Resonance

### CD-006 Comparison

CD-006 (39/40, crown jewel) characteristics:
- Dark header with 3px primary border-bottom
- Full-bleed dark header inner content at 1100px max-width
- Warm cream page background (#FEF9F5)
- Zone differentiation through background shifts
- 2-zone callout DNA with semantic color variants
- Drop caps with Instrument Serif in primary red
- Table of contents with density markers
- Section meta labels (mono, uppercase, letter-spacing)
- Code snippets with dark background
- 3px structural borders
- 4px left accent borders
- All headings in Instrument Serif italic

**Page A vs CD-006:**
- Header: Matches (dark, 3px red border-bottom). Page A title is italic serif, correct.
- Container: 960px vs CD-006's 1100px. Narrower is MORE compliant with current guardrails (940-960px).
- Zone backgrounds: 2 values alternating vs CD-006's distinct zone tokens. Less differentiated.
- Callouts: Same 2-zone DNA. Page A uses rgba backgrounds (CD-006 also used rgba on some -- BUT this was before Prohibition #4 was formalized).
- Drop caps: Both use `font-family: var(--font-display); font-size: 3.5em; color: var(--color-primary)`.
- Tables: Both use horizontal-only borders with 3px header / 1px row pattern.
- Section labels: Both use mono, uppercase, letter-spacing.
- FEEL: Page A feels like CD-006's younger sibling -- recognizably related but less compositionally dense. Zone transitions are softer (1px borders) where CD-006 uses 3px.

**Page B vs CD-006:**
- Header: Matches (dark, 3px red border-bottom). Title uses `--type-display: 3rem` -- SAME scale as CD-006's `--type-page: 3rem`.
- Container: 960px. Compliant.
- Zone backgrounds: 4 distinct values with 15-20 RGB deltas each. CD-006 used `--color-zone-sparse`, `--color-zone-dense`, `--color-zone-breathing` -- Page B uses custom names but SAME philosophy with stronger differentiation.
- Callouts: Same 2-zone DNA, solid backgrounds (no rgba). CLEANER than CD-006 on this dimension.
- Drop cap: Uses `dispatch-opening::first-letter` -- same exact CSS values as CD-006's `.drop-cap::first-letter`.
- Tables: Same horizontal-only pattern with 3px/1px border weights.
- Section labels: Mono, uppercase, letter-spacing 0.1em. Identical treatment.
- Solid offset (core-quote): Uses EXT-CREATIVE-001 tokens -- this technique was INVENTED for CD-006-era work.
- Zone transitions: Uses `border-top: var(--border-medium) solid var(--color-primary)` (3px red) at Z1->Z2 -- HARD CUT transition grammar. CD-006 used similar hard cuts.
- Checkpoint-bar: Mono, uppercase, centered, bordered -- CD-006 had analogous transition elements.
- FEEL: Page B feels like CD-006's contemporary -- built from the same vocabulary, at the same level of compositional intention.

### DD-006 Comparison

DD-006 (36/40, density benchmark) characteristics:
- Strong fractal rhythm (page/section/component/character)
- Dense/sparse alternation at every scale
- Sparse ocean zones between island clusters
- Clear section-level density metadata
- Exploration header with mono metadata

**Page A vs DD-006:** Has section-level density variation (5 zones with different spacing). Has breathing zones between major sections. Does NOT have fractal density at component level -- callouts, tables, and code blocks have uniform internal density regardless of zone.

**Page B vs DD-006:** Has zone-level density variation (4 zones with compressed spacing in Z3, released in Z4). Has COMPONENT-level density variation: Zone 3 callouts get tighter padding (`--space-4 --space-5` vs Zone 1's `--space-6 --space-8`), Zone 3 tables get compressed row padding (`--space-2` vs normal `--space-3`). Zone 3 body text gets `font-weight: 600` (denser visual weight). This is fractal density: page-level (zone backgrounds), section-level (spacing), component-level (internal padding), and character-level (font-weight + letter-spacing).

### Crown Jewel Resonance Verdict

**Page B wins.** It shares CD-006's compositional vocabulary at a deeper level -- hard cut transitions, solid offset depth, fractal density across scales, documented zone progression. Page A shares the surface vocabulary (callouts, tables, drop caps) but not the compositional logic that makes CD-006 feel DESIGNED rather than ASSEMBLED.

---

## 6. The Ineffable Test

### The "Same Maker" Test

If I place CD-006 and Page A side by side:
- Both are warm. Both are editorial. Both have dark headers with red borders. Both use Instrument Serif headings. A visitor would say: "These look related." The family resemblance is clear. But Page A feels LIGHTER -- its zone transitions are gentle (1px borders), its backgrounds barely shift, its components are evenly distributed without dramatic moments. It is a well-made page that follows the rules.

If I place CD-006 and Page B side by side:
- The CONFIDENCE is similar. Page B's header has the same authoritative darkness, the same red primary border, the same serif italic title. But more than that: the RHYTHM is similar. CD-006 has a reading experience of orientation -> deepening -> density peak -> resolution. Page B has exactly that arc: Situation Brief (open) -> Operational Readiness (moderate) -> Field Intelligence (dense, compressed, urgent) -> Allied Ops & Deployment (resolved, released). The page BREATHES the same way CD-006 breathes.

The core-quote with solid offset is the moment that seals it. This component -- a blockquote with a 4px solid pseudo-element creating flat depth -- is the design system's signature creative technique. It achieves depth (visual emphasis, separation from flow) without violating the anti-physical identity (no shadows, no gradients). When I see this on Page B, I see someone who UNDERSTANDS that KortAI achieves visual richness through structural means, not decorative ones.

### The "Pixel Care" Test

**Page A:** Every pixel is correct. Colors match, spacing is from the scale, fonts are right. But the CSS reads as a competent application of rules. The zone CSS is organized by topic (opening, architecture, memory, principles, comparison) with similar structure repeated.

**Page B:** Every pixel is CONSIDERED. The CSS comments explain WHY each value was chosen. Fix cycle annotations document where guardrails caught issues and how they were resolved. The zone backgrounds have documented RGB deltas. The letter-spacing and font-weight shifts are explicitly justified as encoding metaphor semantics. The checkpoint-bar is architecturally minimal (one line of monospace text) because its function is TRANSITION, not CONTENT. Page B's CSS reads as someone who had a conversation with the design system, not just read its rules.

### The "Warmth" Test

Both pages are warm -- warm cream backgrounds, warm tan borders, no cool grays, no harsh contrasts. But Page B's warmth has DEPTH. The 4-zone background progression from cream to earthy to resolved creates a spatial EXPERIENCE of warmth varying -- like walking through rooms in a warm building, each with slightly different wood tones. Page A's warmth is uniform -- equally warm everywhere, which paradoxically makes it feel less warm because there's no CHANGE to notice.

### Ineffable Verdict

**Page B wins the ineffable test.** It is not just correct -- it is INHABITED. The page feels like it was made by someone who has spent months inside the design system's mind, who knows its vocabulary fluently enough to compose with it rather than translate into it. CD-006 was a page that PROVED the design system works. Page B is a page that USES the design system as a native speaker uses language.

---

## 7. Comprehensive Evidence Summary

### Where Page A Aligns with the Soul

1. **Typography trinity correctly applied:** Instrument Serif for display, Inter for body, JetBrains Mono for code. All headings serif italic. H3 italic. Drop caps in primary red.
2. **2-zone callout DNA:** All callout variants have sparse label + dense body + 4px left border. Essence uses serif italic.
3. **Editorial warmth:** Warm cream background, warm tan borders, no harsh contrasts.
4. **Dark header/footer framing:** Correct dark slab header with 3px red border. Footer mirrors header.
5. **Table styling:** Horizontal-only borders, 3px header / 1px row, mono uppercase column headers.
6. **Container width:** 960px throughout. Compliant.
7. **Bento grid:** 2-column with variable spans encoding hierarchy (primary = full-width, human = full-width + green border).
8. **Code blocks:** Dark background, 3px border, mono font, syntax highlighting with correct tokens.
9. **Breathing zones:** Serif italic transition text between major sections.
10. **Accessibility:** Skip link, focus-visible, selection styling, aria-labels, role attributes, reduced-motion.

### Where Page A Diverges from the Soul

1. **Semi-transparent callout backgrounds** -- `rgba(217, 160, 50, 0.06)` etc. Prohibition #4 violation. The design system uses SOLID backgrounds (components.css uses rgba too, but this is a known legacy issue that Prohibition #4 was created to address).
2. **Sub-perceptual zone backgrounds** -- `--color-zone-dense: #FEFCF8` is 4 RGB points from `--color-zone-sparse: #FEF9F5`. Invisible difference.
3. **Off-palette colors** -- `#333333` in header (not a token), `#3d3d3d` on html element (not a token).
4. **Compressed type scale** -- `--type-page: 2.75rem` instead of tokens.css's 2.5rem or 3rem. Custom value not on scale.
5. **Center-aligned stats bar** -- `text-align: center` on stats-bar segments breaks left-aligned editorial convention.
6. **Density meter** -- Dashboard-widget aesthetic, not editorial publication aesthetic.
7. **No solid offset mechanism** -- Doesn't use EXT-CREATIVE-001 from tokens.css.
8. **Mechanical zone alternation** -- Zones alternate warm/breathing/warm/breathing without directional arc.
9. **No metaphor integration in CSS** -- Zone names describe content topics (opening, architecture, memory) but CSS doesn't encode semantic relationships between them.
10. **No fix-cycle documentation** -- CSS has no evidence of guardrail-driven refinement.

### Where Page B Aligns with the Soul

1. **Typography trinity correctly applied** with FULL display scale (3rem display, 2.5rem page, 2rem section, 1.5rem subsection, 1rem body, 0.875rem code, 0.75rem meta).
2. **Zero prohibition violations** -- the ONLY page in the comparison with a clean sheet.
3. **Solid callout backgrounds** -- All callouts use `var(--bg-z1)` (solid #FEF9F5), not rgba.
4. **4-zone directional progression** -- Zone backgrounds progress warm->deep->resolved with documented RGB deltas exceeding 15-point minimum.
5. **Multi-channel coherence at zone boundaries** -- Background + typography (font-weight, letter-spacing) + spacing (padding compression) + borders (1px->3px->1px->3px) all shift simultaneously at every zone transition.
6. **Solid offset depth** -- Uses EXT-CREATIVE-001 (`::after` pseudo-element with 4px/4px offset) for the core quote. Achieves emphasis without shadows.
7. **Fractal density** -- Page-level (zone backgrounds), section-level (padding varies per zone), component-level (Zone 3 callouts get tighter padding), character-level (Zone 3 body text gets font-weight: 600 + letter-spacing: 0.03em).
8. **Semantic CSS comments** -- Mechanism numbers referenced, fix-cycle annotations with SC-XX gate references, RGB delta documentation.
9. **Metaphor integration** -- "Command Post," "Situation Brief," "Operational Readiness," "Field Intelligence," "Allied Ops" -- the military dispatch metaphor shapes zone naming AND visual treatment.
10. **Full accessibility** -- Skip link, focus-visible, selection, aria-labels, roles, reduced-motion, semantic landmarks.
11. **Footer completeness** -- Structured footer with deployment summary, source links grouped by category, tags bar with mono + border treatment. Page A has footer; Page B's footer is more structured.
12. **Component vocabulary extension** -- Custom components (core-quote, mental-model, extension-card, checkpoint-bar, actionability) all built on 2-zone DNA + 4px left border + mono uppercase labels. They FEEL like natural additions to components.css.

### Where Page B Diverges from the Soul

1. **h3 font-family** -- Uses `var(--font-body)` not `var(--font-display)` for h3 (line 152). This is a departure from CD-006 where h3 is Instrument Serif. HOWEVER, the h3 remains italic, and the design system's prohibition #17 says "NEVER Use Non-Italic h3" -- it does not mandate serif for h3. The body-font h3 creates a visual hierarchy (serif h1-h2 vs sans-serif h3) that some case studies use.
2. **Larger type-section** -- Uses `2rem` (32px) for h2 instead of CD-006's `1.625rem` (26px). This is within tokens.css range (`--text-h2: 2rem`) but creates more contrast.
3. **Zone padding uses --space-20 (80px)** -- Zone 1 and Zone 4 use `padding: var(--space-16) var(--space-20)` (64px 80px). The 80px horizontal padding is generous but within tokens.css scale.

---

## Final Soul Resonance Scores

| Dimension | Page A | Page B | Delta |
|-----------|--------|--------|-------|
| Prohibitions compliance | 8/10 (2 minor violations) | 10/10 (zero violations) | +2.0 Page B |
| Token alignment | 7/10 (sub-perceptual zones, off-palette colors) | 9.5/10 (all tokens correct, documented deltas) | +2.5 Page B |
| Semantic rules | 7/10 (moderate content-coupling, moderate restraint) | 9/10 (strong coupling, strong restraint, directional arc) | +2.0 Page B |
| Component patterns | 7/10 (some dashboard-widget drift) | 9/10 (all components extend library DNA) | +2.0 Page B |
| Crown jewel resonance | 7/10 (CD-006 younger sibling) | 9/10 (CD-006 contemporary) | +2.0 Page B |
| Ineffable / warmth / care | 7.5/10 (correct, not inhabited) | 9.0/10 (inhabited, conversant) | +1.5 Page B |

### Overall Soul Resonance

**Page A: 7.5/10** -- A well-executed KortAI page that follows rules correctly. Recognizably family. Would pass a casual soul audit. But its zone backgrounds are imperceptibly different, its callout backgrounds violate a prohibition, and its spatial story is alternation rather than direction. It is COMPETENT within the design system.

**Page B: 9.0/10** -- A page that resonates with the design system's deep identity. Zero prohibition violations. Documented CSS provenance. Multi-channel coherence at every boundary. Solid offset depth mechanism. Directional spatial arc. Component vocabulary that extends the library naturally. It is FLUENT in the design system.

**The 1.5-point gap is the gap between rule-following and soul-inhabitation.** Page A knows the rules. Page B knows the reasons behind the rules, and uses that knowledge to make compositional choices that feel inevitable rather than prescribed.

---

---

## FRAMING CORRECTION (2026-02-22)

**Issue:** Section 5 ("Crown Jewel Resonance") uses CD-006 as the soul quality benchmark, with "crown jewel resonance" as a scoring dimension (7/10 and 9/10). The phrases "CD-006 contemporary" and "CD-006 younger sibling" treat CEILING-level quality as near-maximum. The CD-006 Comparison subsection measures both pages against CD-006 as the standard for soul inhabitation.

**Correct framing:** CD-006 is CEILING tier, not Flagship 4/4. Being "CD-006's contemporary" means being at CEILING tier -- a genuine achievement but not the pipeline's ultimate aspiration. The design system's soul is defined by its PRINCIPLES (prohibitions, tokens, semantic rules, compositional core), not by any single artifact. CD-006 is one expression of those principles at CEILING tier.

**Revised findings:**

- **"Crown jewel resonance" as a scoring dimension** should be renamed to "Design system soul resonance" or "Compositional vocabulary resonance." The measurement should be: "How deeply does the page inhabit the design system's identity principles?" not "How closely does the page resemble CD-006?"

- **"CD-006 contemporary" as highest praise** should be contextualized: "Page B resonates at the CEILING tier of the design system's soul -- matching CD-006's level of vocabulary fluency and compositional intention. This is a genuine achievement. The next level (Flagship) would require not just fluency but designed compositional intelligence: a unified pervading metaphor that generates multi-coherence globally, not just locally."

- **The CD-006 Comparison subsection** uses CD-006 as one appropriate reference point for soul compliance, but should note CD-006's own Flagship gaps. CD-006 has vocabulary fluency without compositional fluency -- it lacks a unified pervading metaphor, and its multi-coherence is concentrated at bookends rather than distributed globally.

- **The report's core contribution remains STRONG.** The 6-layer analysis (prohibitions, tokens, semantic rules, component patterns, resonance, ineffable test) is the report's central methodology and does NOT depend on CD-006 as benchmark. The per-layer analysis stands independently. Section 5's CD-006 comparison is supplementary context, not foundational.

**END SOUL RESONANCE ANALYSIS**
