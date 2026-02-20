# CD-006 Ground Truth: CSS Patterns of a Ceiling-Tier Page (NOT the Flagship Target)

**Source:** Actual CSS from `design-system/validated-explorations/combination/CD-006-pilot-migration.html`
**Total CSS:** ~1,018 lines (lines 72-1090), single `<style>` tag
**Score:** 39/40 quality, 59/60 soul compliance
**Tier:** CEILING (NOT Flagship). See 01-DEFINITION.md for the 14-dimension Flagship 4/4 definition.
**Builder:** ONE Opus agent, ~50 lines of instruction

**CRITICAL FRAMING:** CD-006 is the best existing artifact but it is NOT the Flagship target. Flagship 4/4 has NEVER been achieved. CD-006 scores ~10-11/14 on the Flagship spec -- it FAILS on D-04 (global multi-coherence), D-13 (unified structural metaphor), and partially on D-09 (axis variety is present but transitions are incidental, not metaphor-driven). CD-006 represents the FLOOR that our prompt must EXCEED, not reproduce.

**What CD-006 lacks vs Flagship 4/4:**
- No unified pervading metaphor (uses local per-section metaphors instead)
- Multi-coherence is LOCAL (concentrated in S1 strata and bookends), not GLOBAL (sustained throughout via unified metaphor)
- Channel coordination was INCIDENTAL (emergent from Opus craft), not PLANNED
- Static multi-coherence profile (consistent 3-5 channels) vs dynamic (2-6 channels with narrative arc)
- Built under unreproducible conditions (4-stage pipeline context, known tutorial content)

**What CD-006 DOES establish as proven CSS patterns:**
This document extracts EVERY CSS pattern from the actual CD-006 file. These patterns form the VOCABULARY FLOOR -- the minimum CSS toolkit that a Flagship page must deploy AND THEN GO BEYOND with unified metaphor, global multi-coherence, and planned channel coordination.

---

## 1. EVERY BACKGROUND COLOR, ORGANIZED BY ZONE

### Zone Background System (3 base + 5 callout tints + 3 dark inversions)

| Zone | Color | Hex | Usage |
|------|-------|-----|-------|
| **Body / Sparse** | Warm cream | `#FEF9F5` | `--color-background`, body bg, `--color-zone-sparse` |
| **Dense** | White | `#FFFFFF` | `--color-zone-dense`, bento items (`--axis-zone-primary`) |
| **Breathing** | Warm tan | `#FAF5ED` | `--color-zone-breathing`, TOC, file-tree, task-label bg, reasoning-label bg, bridge transitions, decision-matrix-label bg, decision-matrix th bg |
| **Dark slab** | Near-black | `#1A1A1A` | Header bg, footer bg, code-block bg, core-abstraction-proof bg |
| **Info tint** | Blue tint | `#F5F9FE` | `.callout--info` bg |
| **Tip tint** | Green tint | `#F2F9F4` | `.callout--tip` bg, `.recommended` row, `.reasoning-recommendation` bg |
| **Gotcha tint** | Coral tint | `#FEF6F5` | `.callout--gotcha` bg |
| **Essence tint** | Breathing | `#FAF5ED` | `.callout--essence` bg (reuses breathing zone) |
| **Challenge tint** | Amber tint | `#FFFBF2` | `.callout--challenge` bg |
| **Purple tint** | Lavender | `#F8F5FE` | `.core-abstraction-label` bg |
| **Subtle** | Light gray | `#F0EBE3` | `--color-border-subtle`, inline code bg |

### RGB Deltas Between Adjacent Zones

| Boundary | From | To | R delta | G delta | B delta | Max delta |
|----------|------|----|---------|---------|---------|-----------|
| Body → Breathing | `#FEF9F5` | `#FAF5ED` | 4 | 4 | 8 | **8** |
| Body → Dense | `#FEF9F5` | `#FFFFFF` | 1 | 6 | 10 | **10** |
| Breathing → Dense | `#FAF5ED` | `#FFFFFF` | 5 | 10 | 18 | **18** |
| Body → Dark slab | `#FEF9F5` | `#1A1A1A` | 228 | 223 | 219 | **228** |
| Body → Info tint | `#FEF9F5` | `#F5F9FE` | 9 | 0 | 9 | **9** |
| Body → Tip tint | `#FEF9F5` | `#F2F9F4` | 12 | 0 | 1 | **12** |
| Body → Gotcha tint | `#FEF9F5` | `#FEF6F5` | 0 | 3 | 0 | **3** |
| Body → Challenge | `#FEF9F5` | `#FFFBF2` | 1 | 2 | 3 | **3** |
| Body → Purple | `#FEF9F5` | `#F8F5FE` | 6 | 4 | 9 | **9** |

**CRITICAL FINDING:** Many zone deltas are BELOW 15 RGB. Body-to-Breathing is only 8 max. Body-to-Gotcha is only 3. The zone system works because of MULTI-CHANNEL binding (borders, typography, spacing change simultaneously), NOT because background deltas alone are perceptible. The brief's 15 RGB threshold is STRICTER than what CD-006 actually uses for callout tints.

**What makes the zones work despite small deltas:**
1. Dark slab inversions create massive (220+ RGB) boundaries at header/footer/code
2. Callout tints are always paired with 4px left-border accent colors
3. Breathing zone is always paired with 3px structural borders
4. Dense zone (white) is always paired with 3px bordered bento/component cells

---

## 2. EVERY TYPOGRAPHIC VALUE, MAPPED TO ZONES

### Font-Size Scale (7 distinct values)

| Token | Value | Where Used |
|-------|-------|------------|
| `--type-page` | `3rem` (48px) | h1, header-title |
| `--type-section` | `1.625rem` (26px) | h2 |
| `--type-subsection` | `1.375rem` (22px) | h3, TOC h2, QA question, reasoning-question, bento h3 |
| Custom | `1.25rem` (20px) | core-abstraction-principle |
| Custom | `1.125rem` (18px) | essence callout body |
| `--type-body` | `1rem` (16px) | Body text, callout body, decision-matrix td, task list, reasoning column, choreo h4, reasoning h4 |
| Custom | `0.9em` (~14.4px) | Inline code |
| `--type-code` | `0.875rem` (14px) | Code blocks, file tree |
| `--type-meta` | `0.75rem` (12px) | Header-meta, section-meta, callout-label, file-tree-label, decision-matrix-label, task-label, reasoning-label, stratum-label, TOC number, TOC density, footer ID |
| Custom | `0.625rem` (10px) | Version badge |

**Total distinct font-sizes: 10** (3rem, 1.625rem, 1.375rem, 1.25rem, 1.125rem, 1rem, 0.9em, 0.875rem, 0.75rem, 0.625rem)

### Font-Weight Usage (4 distinct values)

| Weight | Where Used |
|--------|------------|
| **400** (normal) | Body text, header-subtitle, callout body, most prose |
| **500** | Header-meta, JetBrains Mono default |
| **600** | All labels (callout-label, file-tree-label, decision-matrix-label, task-label, reasoning-label, all component labels), decision-matrix th, recommended row, reasoning-column h4, choreo h4, reasoning-recommendation strong |
| **700** (implicit via heading default) | h1-h6 (Instrument Serif headings) |

### Letter-Spacing (4 distinct values)

| Value | Where Used | Register |
|-------|------------|----------|
| **0** (default) | Body text, most prose | Normal reading |
| **0.05em** | Decision-matrix th, code-label | Light formality |
| **0.1em** | Section-meta, callout-label, file-tree-label, decision-matrix-label, task-label, reasoning-label, stratum-label, footer ID, version-badge | Full formality (ALL labels) |
| **0.15em** | Header-meta | Maximum formality |

**CRITICAL PATTERN:** Letter-spacing is a 4-stop register. 0 = prose. 0.05em = table headers. 0.1em = ALL component labels (9 distinct classes use this exact value). 0.15em = page-level meta only. The values are COARSE and PERCEPTIBLE (0.05em steps minimum).

### Line-Height (4 distinct values)

| Value | Where Used |
|-------|------------|
| **1.2** | h1-h6 headings |
| **1.5** | Code blocks, core-abstraction-principle |
| **1.6** | Header-subtitle, task-list li, reasoning-column li, essence callout body |
| **1.7** | Body text, callout body |
| **1.8** | File tree |

### Font-Family Distribution

| Font | Role | Count of CSS Rules Using It |
|------|------|----|
| **Instrument Serif** (`--font-display`) | Display/editorial authority | h1-h6 headings, drop-cap first-letter, essence callout body, reasoning-question, core-abstraction-principle, qa-question |
| **Inter** (`--font-body`) | Functional clarity | body, header-meta, header-subtitle, ALL component labels (9 classes), reasoning-column h4, choreo-spoke h4 |
| **JetBrains Mono** (`--font-mono`) | Technical precision | code-block, code-label, inline code, version-badge, section-meta, toc-number, toc-density, stratum-label, footer ID, file-tree |

### Italic as Semantic Marker (4 distinct uses)

1. `h3 { font-style: italic }` -- All h3 subsection headings
2. `.callout--essence .callout-body { font-style: italic }` -- Essence callout body (Instrument Serif)
3. `.reasoning-question { font-style: italic }` -- Reasoning questions (Instrument Serif)
4. `.core-abstraction-principle { font-style: italic }` -- Core abstraction principle (Instrument Serif)

**Pattern:** Italic is ONLY used with Instrument Serif in body-level contexts. It marks "this text has special editorial weight." Never decorative.

### text-transform: uppercase (9 distinct classes)

`.section-meta`, `.callout-label`, `.file-tree-label`, `.decision-matrix-label`, `.task-label`, `.reasoning-label`, `.stratum-label`, `.header-meta`, `.page-footer__id`

**Pattern:** Uppercase is EXCLUSIVELY used on meta/label elements. Never on headings, body text, or content. Combined with 0.75rem + 0.1em letter-spacing + font-weight 600, it creates a recognizable "label register" across ALL components.

---

## 3. EVERY GRID/FLEXBOX LAYOUT

### Grid Layouts (5 distinct topologies)

| Layout | CSS | Where | Gap |
|--------|-----|-------|-----|
| **Golden ratio 2-col** | `grid-template-columns: 1.618fr 1fr` | `.z-hero` (S2 Z-Pattern) | 32px (`--space-8`) |
| **4-col equal** | `grid-template-columns: repeat(4, 1fr)` | `.bento-grid` (S3, S6 Bento) | 24px (`--space-6`) |
| **3-col equal** | `grid-template-columns: repeat(3, 1fr)` | `.choreo-spokes` (S7 Choreography) | 24px (`--space-6`) |
| **2-col equal** | `grid-template-columns: 1fr 1fr` | `.reasoning-columns` (S4 Reasoning component) | 0 (border-separated) |
| **Inline 2-col** | `style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6)"` | Inline in S3 geometry section | 24px (`--space-6`) |

### Flexbox Layouts

| Layout | CSS | Where |
|--------|-----|-------|
| **Vertical stack** | `flex-direction: column` | `.spiral-strata`, `.toc-list`, `.reasoning-column ul` |
| **Horizontal row** | `display: flex; justify-content: space-between` | `.page-footer__inner`, `.header-meta` |
| **Item alignment** | `display: flex; align-items: flex-start; gap: 8px` | `.task-list li` |
| **TOC link** | `display: flex; align-items: baseline; gap: 8px` | `.toc-list li a` |

### Grid Span Modifiers

| Class | CSS | Purpose |
|-------|-----|---------|
| `.bento-item--wide` | `grid-column: span 2` | Double-width bento cell |
| `.bento-item--large` | `grid-column: span 2; grid-row: span 2` | Double-width + double-height bento cell |

### Responsive Grid Collapses

| Breakpoint | What Collapses | To |
|------------|---------------|-----|
| 960px | 4-col bento, 3-col choreo | 1-col |
| 768px | 2-col z-hero, 2-col reasoning | 1-col |
| 768px | Footer flex row | Column |
| 480px | Font sizes reduce | Smaller values |

---

## 4. EVERY BORDER STYLE

### 3-Tier Border Weight System

| Weight | Color | Where Used | Semantic Meaning |
|--------|-------|------------|-----------------|
| **4px solid** | `var(--color-text)` (#1A1A1A) | `.stratum--established` left, `.callout` left (all types), `.qa-question` left (in primary red) | Highest confidence / accent |
| **3px solid** | `var(--color-border)` (#E0D5C5) or `var(--color-primary)` (#E83025) | Header bottom (red), footer top (red), `.toc` border, `.code-block` border, `.file-tree` border, `.decision-matrix` border, `.core-abstraction` border, `.task-component` border, `.reasoning` border, `.bento-item` border, `.choreo-hub` border, `.choreo-spoke` border, `.stratum--probable` left, `.reasoning-recommendation` top (green), footer rule element | Structural enclosure |
| **1px solid** | `var(--color-border)` (#E0D5C5) | Inline code border, `.decision-matrix-label` bottom, `.decision-matrix th` bottom (WAIT: th uses 3px), `.decision-matrix td` bottom, `.core-abstraction-label` bottom, `.core-abstraction-principle` bottom, `.task-label` bottom, `.reasoning-question` bottom, `.reasoning-column:first-child` right, `.stratum--speculative` left, `.toc-list` (no border actually), version-badge (1px border currentColor) | Data separators / light dividers |

**ZERO uses of 2px borders.** The 3-tier system (4px / 3px / 1px) is never violated.

### Border Locations (Where vs Where NOT)

**Where borders ARE used:**
- LEFT borders: All callouts (4px accent), spiral strata (4px/3px/1px confidence), QA question (4px red)
- FULL borders: TOC (3px), code blocks (3px), file tree (3px), decision matrix (3px), core abstraction (3px), task (3px), reasoning (3px), bento items (3px), choreo hub (3px), choreo spokes (3px)
- TOP borders: Header bottom (3px red), footer top (3px red), transition--smooth (1px), transition--breathing (3px)
- BOTTOM borders: Component label separators (1px), table cell separators (1px)
- RIGHT borders: Reasoning column divider (1px)

**Where borders are NOT used:**
- No borders on body, main, sections, paragraphs, headings, lists (raw)
- No borders between header-meta items
- No decorative top+bottom borders on callouts (ONLY left border)
- No borders on the z-hero grid cells (content flows without containment)
- No borders on f-movement blocks

### Accent Border Colors

| Color | Where |
|-------|-------|
| `var(--color-primary)` (#E83025) | Header bottom (3px), footer top (3px), QA question left (4px), footer rule element |
| `var(--accent-blue)` (#4A90D9) | Info callout left (4px) |
| `var(--accent-green)` (#4A9D6B) | Tip callout left (4px), reasoning-recommendation top (3px) |
| `var(--accent-coral)` (#C97065) | Gotcha callout left (4px) |
| `var(--accent-purple)` (#7C3AED) | Essence callout left (4px) |
| `var(--accent-amber)` (#D97706) | Challenge callout left (4px) |
| `var(--color-text)` (#1A1A1A) | Stratum--established left (4px) |
| `var(--color-text-secondary)` (#666666) | Stratum--probable left (3px) |
| `var(--color-border)` (#E0D5C5) | All structural 3px borders, all 1px separators, stratum--speculative left (1px) |

---

## 5. EVERY TRANSITION/ANIMATION

### CSS Transitions (1 explicit)

| Property | Value | Where |
|----------|-------|-------|
| `color` | `0.3s ease` (`var(--transition-standard)`) | `.toc-list li a` hover |

### Hover States (2 explicit)

1. `.toc-list li a:hover { color: var(--color-primary); }` -- TOC links turn red on hover
2. `a:hover { text-decoration: underline; }` -- General links get underline

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**CRITICAL PATTERN:** CD-006 uses almost NO animation. One hover transition on TOC links. One hover underline on general links. That is the entire behavioral animation budget. The page achieves richness through STATIC visual variety, not through motion.

---

## 6. EVERY PADDING/MARGIN PATTERN

### Spacing Rhythm (from token scale)

| Token | Value | Primary Usage |
|-------|-------|---------------|
| `--space-1` | 4px | Micro (drop-cap margin-top, toc-list li padding) |
| `--space-2` | 8px | Within-group (callout-label mb, stratum-label mb, header-meta mb, list gap, task-list gap, toc-list gap, file-tree-icon mr, reasoning-column gap, drop-cap margin-right) |
| `--space-3` | 12px | (Defined but rarely used directly) |
| `--space-4` | 16px | Element spacing (p margin-bottom, h3 mb via section, bento-item h3 mb, toc h2 mb, reasoning-column h4 mb, choreo-spoke h4 mb, file-tree-label mb, code-label mb, component label padding, task-list padding, qa-question padding-left, file-tree-item--l1 indent, footer__inner gap at 768px) |
| `--space-5` | 20px | (Defined but not used) |
| `--space-6` | 24px | Component internal padding (callout padding-y, code-block padding-y, stratum padding-y, bento-item padding, choreo-spoke padding, file-tree padding-y, bento grid gap, choreo grid gap, h2 mb, callout margin-y, code-block margin-y, task margin-y, component label padding-x, footer padding-x, inline grid gap) |
| `--space-8` | 32px | Section-level spacing (header-inner padding-x, page-container padding-x, toc padding, section-header mb, callout padding-x, code-block padding-x, stratum padding-x, core-abstraction-principle padding-x/y, reasoning-question padding-x, reasoning-column padding, qa-answer padding-left, z-hero gap, z-hero mb, qa-block mb, f-movement mb, spiral-strata gap, choreo-hub padding, choreo-hub mb, decision-matrix margin-y, core-abstraction margin-y, reasoning margin-y, transition--bridge padding, footer padding-y) |
| `--space-10` | 40px | (Defined but not used directly) |
| `--space-12` | 48px | Transition zones (transition--smooth margin-y, transition--smooth padding-top, file-tree-item--l3 indent) |
| `--space-16` | 64px | Major structural spacing (header-inner padding-y, page-container padding-y, section margin-bottom, toc margin-bottom, transition--bridge margin-y) |
| `--space-20` | 80px | Maximum spacing (transition--breathing margin-y, transition--breathing padding-top) |

### Semantic Spacing Aliases

| Alias | Resolves To | Meaning |
|-------|-------------|---------|
| `--space-within` | `var(--space-2)` (8px) | Spacing within a single group |
| `--space-between` | `var(--space-8)` (32px) | Spacing between related groups |
| `--space-chapter` | `var(--space-16)` (64px) | Spacing between major sections |

### Spacing Rhythm Summary

The spacing system operates at 5 primary levels:
1. **8px** (--space-2): Micro-gaps within components (label-to-content, list items)
2. **16px** (--space-4): Element-to-element within a component
3. **24px** (--space-6): Component padding, grid gaps
4. **32px** (--space-8): Section-level internal spacing
5. **64px** (--space-16): Chapter/section boundaries

Plus two transition-specific values:
- **48px** (--space-12): Smooth transition
- **80px** (--space-20): Breathing transition

### Page Container

```css
.page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-8); /* 64px top/bottom, 32px sides */
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-8); /* same */
}
```

**NOTE:** CD-006 uses `max-width: 1100px`, NOT 940-960px. The conventions brief says "940-960px is non-negotiable." CD-006 uses 1100px. This is a divergence worth noting.

---

## 7. MECHANISM INSTANCE COUNTS BY CATEGORY

### Spatial (7 instances)

1. Gestalt semantic spacing aliases (within/between/chapter)
2. Golden ratio grid (1.618fr : 1fr)
3. 4-level progressive indentation (file tree: 0/16/32/48px)
4. 4-column bento grid
5. 3-column choreography spokes
6. 2-column reasoning grid
7. Inline 2-column grid

### Typographic (8 instances)

1. Font-family trio (serif/sans/mono)
2. 7+ step type scale (3rem down to 0.625rem)
3. 4 weight gradients (400/500/600/700)
4. Italic as semantic marker (4 uses)
5. 4-stop letter-spacing register (0/0.05/0.1/0.15em)
6. text-transform uppercase as formality (9 classes)
7. Drop cap (3.5em first-letter in primary red)
8. 70ch prose constraint

### Chromatic (6 instances)

1. 3-zone background system (sparse/dense/breathing)
2. 5 callout accent tint backgrounds
3. Full chromatic inversion header/footer (dark slab)
4. Code block dark inversion
5. 6-color syntax highlighting
6. Branded selection (red on cream)

### Structural (7 instances)

1. 3-tier border weight system (4px/3px/1px)
2. Border-weight-as-confidence (established/probable/speculative)
3. 3-type transition grammar (smooth/bridge/breathing)
4. Full-bleed header/footer bookend
5. TOC box as navigation island
6. Section-meta self-documentation
7. QA question as bordered emphasis

### Behavioral (4 instances)

1. Branded selection (::selection)
2. WCAG focus-visible
3. Hover transitions (TOC color, link underline)
4. Reduced motion respect

### Material (4 instances)

1. Dark slab surface (header, footer, code, proof)
2. Cream paper surface (body)
3. Tinted film surfaces (5 callout types + recommended + purple label + green recommendation)
4. Breathing gauze surface (TOC, file-tree labels, task labels, bridges)

### Relational (5 instances)

1. Bookend spiral (S1 and S8 both use spiral strata)
2. Bridge semantic loading (3 bridge transitions with cognitive-shift prose)
3. TOC-as-page-mirror (density annotations preview axis patterns)
4. Label-label echo (9 classes with identical mono/body 600, 0.75rem, uppercase, 0.1em)
5. Transition-confidence parallel (3 transition types mirror 3 confidence strata)

### TOTALS

| Category | Count |
|----------|-------|
| Spatial | 7 |
| Typographic | 8 |
| Chromatic | 6 |
| Structural | 7 |
| Behavioral | 4 |
| Material | 4 |
| Relational | 5 |
| **TOTAL** | **41** |

---

## 8. ZONE BOUNDARY MAP: CSS CHANNELS SHIFTING

### Boundary 1: Header -> Content (5 channels)

| Channel | Before | After | Shift |
|---------|--------|-------|-------|
| Chromatic | #1A1A1A bg | #FEF9F5 bg | 220+ RGB delta |
| Typographic | Serif 3rem + Sans 0.75rem tracked | Serif italic h3 + mono labels | Full register change |
| Spatial | Full-bleed, 64px/32px padding | 1100px constrained | Container shift |
| Structural | 3px red bottom border | 3px bordered TOC box | Accent to region |
| Material | Dark slab | Cream paper -> Breathing gauze (TOC) | Surface flip |

### Boundary 2: Intro/TOC -> S1 Spiral (3 channels)

| Channel | Before | After | Shift |
|---------|--------|-------|-------|
| Structural | 3px bordered TOC box | Open section with stratum left-borders (4px/3px/1px) | Box exit to strata |
| Typographic | Inter body + mono numbers | Serif italic essence + mono stratum-labels | Register shift |
| Spatial | 32px internal padding | 24px/32px stratum padding, 32px gap | Rhythm change |

### Boundary 4: S1 Spiral -> S2 Z-Pattern -- BREATHING (3 channels)

| Channel | Before | After | Shift |
|---------|--------|-------|-------|
| Structural | Left-bordered strata | Golden ratio grid + QA red left-borders | Complete layout change |
| Spatial | 80px breathing gap + 3px divider | 32px grid gap | Rhythm change |
| Typographic | Section-meta "Spiral/Geological" -> "Z-Pattern/Pulse" | QA question serif italic red | Voice shift |

### Boundary 5: S2 Z -> S3 Bento -- BRIDGE (5 channels)

| Channel | Before | After | Shift |
|---------|--------|-------|-------|
| Chromatic | Cream bg + dark code blocks | White bento cells on cream | Background flip |
| Structural | Z-hero grid + QA blocks | 4-col bento grid, 3px bordered cells | Complete layout change |
| Spatial | Bridge zone at 64px | 24px grid gaps, dense cells | Rhythm compression |
| Typographic | QA italic + body prose | Bento h3 italic + code blocks | Register mix |
| Material | Breathing zone in bridge | Dense white cells | Surface change |

### Boundary 7: S4 F -> S5 Z -- SMOOTH (2 channels)

| Channel | Before | After | Shift |
|---------|--------|-------|-------|
| Spatial | 48px gap + 1px line | Same general flow | Minimal |
| Structural | Reasoning 2-col + decision matrix | QA blocks + task component | Component change |

### Boundary 10: S7 Choreo -> S8 Spiral -- BREATHING (3 channels)

| Channel | Before | After | Shift |
|---------|--------|-------|-------|
| Structural | Hub-spoke layout | Left-bordered strata | Complete layout change |
| Spatial | 80px breathing gap | Strata spacing | Rhythm change |
| Typographic | Section-meta "Choreography/Wave" -> "Spiral/Geological" | Register shift |

### Boundary 11: S8 Spiral -> Footer (5 channels)

| Channel | Before | After | Shift |
|---------|--------|-------|-------|
| Chromatic | #FEF9F5 bg | #1A1A1A bg | 220+ RGB delta |
| Typographic | Serif italic + Inter body | JetBrains Mono 0.75rem uppercase | Full register change |
| Spatial | Section content | 32px/24px compact footer | Compression |
| Structural | 3px top red accent | Footer bookend | Accent return |
| Material | Cream paper | Dark slab | Surface flip |

### BOUNDARY SUMMARY

| Boundary | Type | Channels |
|----------|------|----------|
| Header -> Content | Full inversion | 5 |
| TOC -> S1 | Box exit | 3 |
| S1->S2 | BREATHING | 3 |
| S2->S3 | BRIDGE | 5 |
| S3->S4 | BRIDGE | 3 |
| S4->S5 | SMOOTH | 2 |
| S5->S6 | BRIDGE | 3 |
| S6->S7 | SMOOTH | 2 |
| S7->S8 | BREATHING | 3 |
| S8->Footer | Full inversion | 5 |
| **Average** | | **3.4** |

9/11 boundaries >= 3 channels. The 2 smooth transitions intentionally have only 2.

---

## 9. CONVENTIONS BRIEF GAP ANALYSIS

### What the Brief ENABLES (Correctly)

1. **Soul constraints** (Section 1) -- border-radius: 0, box-shadow: none, solid backgrounds, no pure black/white. CORRECT and matches CD-006.
2. **Typography trinity** (Section 1) -- Instrument Serif / Inter / JetBrains Mono. CORRECT.
3. **Spacing scale** (Section 1) -- 4px base, specific values. CORRECT.
4. **Transition grammar** (Section 3) -- smooth/bridge/breathing with CSS descriptions. CORRECT and matches CD-006 exactly.
5. **Multi-coherence binding** (Section 4) -- 3+ channels at boundaries, coherent direction. CORRECT and matches CD-006 pattern.
6. **Fractal echo** (Section 5) -- 5 scales. CORRECT.
7. **Self-check protocol** (Section 7) -- squint test, scroll test, etc. GOOD safeguards.
8. **Creative authority** (Section 8) -- permission to override, invent, choose. GOOD.

### What the Brief FAILS TO ENABLE (Critical Gaps)

#### GAP 1: No Component DNA Pattern
CD-006's single most powerful pattern is the **label-zone / body-zone DNA** that repeats across ALL 11 component types:
- Label zone: 0.75rem, uppercase, 0.1em letter-spacing, font-weight 600, secondary color, breathing/tinted background, 1px bottom border
- Body zone: 1rem, normal case, 1.7 line-height, full prose

The brief never describes this pattern. A builder reading the brief would not know to create this unified label treatment.

**What the brief needs:** "Every component has a 2-zone internal structure: a sparse LABEL zone (mono or sans 600, 0.75rem, uppercase, 0.1em letter-spacing, muted color, tinted background) and a dense BODY zone (body font, 1rem, normal case). This DNA repeats at component scale and IS the fractal echo at that scale."

#### GAP 2: No Border Budget System
CD-006 uses EXACTLY 3 border weights: 4px (accent/confidence), 3px (structural enclosure), 1px (data separators). Zero 2px borders exist. This creates a legible hierarchy.

The brief mentions borders in multi-coherence (Section 4: "border-left weight, horizontal rules") and perception thresholds (Section 2: ">= 1 structural border-left per zone") but never specifies the 3-tier system.

**What the brief needs:** "Use exactly 3 border weights: 4px for accent/emphasis (callout left-borders, highest-confidence strata), 3px for structural enclosure (component borders, section landmarks, header/footer accents), 1px for data separators (table cells, internal component dividers). Never use 2px. This 3-tier system creates a legible border hierarchy."

#### GAP 3: No Label Register Recipe
CD-006 has 9 distinct classes that ALL share identical typography: mono or body-600, 0.75rem, uppercase, 0.1em letter-spacing. This creates a "label register" that unifies every component.

The brief never mentions this pattern.

**What the brief needs:** "Create a 'label register' — a consistent typographic treatment for ALL component labels: font-weight 600 (or monospace), font-size 0.75rem, uppercase, letter-spacing 0.1em, color: secondary. Apply this SAME treatment to every component's label zone. The consistency is the signal."

#### GAP 4: No Dark Slab Pattern
CD-006 uses `background: #1A1A1A; color: #FEF9F5` in four places: header, footer, code blocks, and core-abstraction-proof. This "dark slab" creates maximum contrast boundaries and makes code/proof zones unmistakable.

The brief doesn't describe this inversion pattern or when to use it.

**What the brief needs:** "Use chromatic inversion (dark near-black background, cream text) for: header and footer (bookend framing), code blocks (technical territory), and optionally one composite component (proof zone). The 220+ RGB delta creates the strongest possible zone boundary."

#### GAP 5: No Callout Accent System
CD-006 uses 5 distinct callout types with color-coded left borders AND tinted backgrounds. Each accent color is NEVER used outside its callout context.

The brief mentions callouts nowhere.

**What the brief needs:** "Callouts use 4px left-border in an accent color, with a faint tinted background matching the accent hue. Each accent color is reserved for ONE semantic function (info=blue, tip=green, warning=coral, essence=purple, challenge=amber). Never use accent colors outside their assigned context."

#### GAP 6: No Responsive Collapse Strategy
CD-006 has 3 breakpoints (960px, 768px, 480px) with specific collapse rules. The brief says "The page must function at 768px" but gives no guidance on HOW grids collapse, WHICH values reduce, or the breakpoint strategy.

**What the brief needs:** "Three responsive breakpoints: 960px (multi-column grids collapse to 1-col), 768px (2-col layouts collapse, header/footer simplify, title font reduces), 480px (final font-size reductions, padding compression). The soul never changes — only layout and proportions adapt."

#### GAP 7: No Drop Cap or Special Typographic Events
CD-006 uses drop-cap (`::first-letter` at 3.5em in primary red) as a rare EVENT (only 2 instances in 8 sections). The brief mentions no special typographic events.

**What the brief needs:** "Drop caps (3.5em first-letter in display font, primary color) are optional but if used, deploy SPARINGLY — 1-2 per page maximum. Rarity creates impact."

#### GAP 8: No Section-Meta Self-Documentation
Every CD-006 section begins with a `.section-meta` element: mono font, 0.75rem, uppercase, letter-spacing 0.1em, secondary color, announcing the section's axis pattern and density type. This creates both structure and navigation at section scale.

The brief doesn't mention this.

**What the brief needs:** "Begin each section with a meta-label (monospace, 0.75rem, uppercase, tracked, secondary color) announcing the section's structural identity. This serves as both wayfinding for the reader and structural documentation for the system."

#### GAP 9: No Syntax Highlighting Recipe
CD-006 has a full 6-color syntax highlighting system for code blocks. The brief doesn't mention code syntax at all.

**What the brief needs:** "Code blocks use dark background (#1A1A1A) with 6 syntax highlight colors: keyword (primary red), string (sage green), comment (secondary gray), function (muted blue), type (coral), number (amber). Apply as inline spans."

#### GAP 10: Container Width Discrepancy
The brief says "940-960px" is non-negotiable. CD-006 actually uses **1100px**. This is a factual mismatch between the brief and the ground truth.

**Resolution needed:** Either the brief should match CD-006 (1100px) or acknowledge CD-006 diverged. The brief currently claims 940-960px is the single most common failure in previous builds, but the best page we have uses 1100px.

#### GAP 11: No Accessibility Pattern List
CD-006 includes: skip link, landmark roles (`aria-label` on sections), `role="note"` on callouts, `nav aria-label="Table of Contents"`, focus-visible, reduced-motion, print styles. The brief mentions WCAG 2.1 AA but doesn't list the specific patterns.

**What the brief needs:** A concrete list: "HTML skeleton must include: skip link, `<header>`, `<main id="main-content">`, `<nav aria-label>`, `<footer>`, section aria-labels, role=note on callouts. CSS must include: focus-visible with 3px primary outline + 2px offset, prefers-reduced-motion, print styles."

#### GAP 12: No Restraint Guidance
CD-006's RESTRAINT is as important as its richness. 40% of available mechanisms are deliberately withheld (no gradients, no shadows, no animations, no icons, no nested grids). The brief mentions "Richness is semantic density multiplied by restraint" but gives no guidance on WHAT to restrain.

**What the brief needs:** "Do NOT deploy: gradient backgrounds, box-shadows, drop-shadows, scroll-triggered animations, parallax effects, icon systems, nested grids (grid-within-grid), decorative borders (top+bottom on callouts), multiple accent colors in body text (accent colors are ONLY for callout borders). Each of these is deliberately absent from the best pages. Their absence is as designed as their presence would be."

---

## 10. CSS BUDGET ALLOCATION

### Where CD-006 Spends Its CSS

| Category | Lines | % | Note |
|----------|-------|---|------|
| Components (11 types) | ~333 | 33% | Largest allocation — each component fully styled |
| Layout patterns (5 grids) | ~130 | 13% | Grid diversity is the spatial backbone |
| Responsive (3 breakpoints) | ~90 | 9% | Full graceful degradation |
| Token system (:root) | ~83 | 8% | Comprehensive token foundation |
| Header + Footer | ~68 | 7% | Bookend architecture |
| Navigation (TOC) | ~47 | 5% | Rich interaction model |
| Base typography | ~28 | 3% | Essential typography rules |
| Accessibility | ~24 | 2% | Skip link, focus, selection, print |
| Transition zones | ~20 | 2% | Maximum effect, minimum code |
| **Imperceptible micro-refinements** | **~0** | **0%** | **ZERO wasted CSS** |

### What CD-006 Does NOT Spend CSS On

- Zero letter-spacing values below 0.05em
- Zero sub-pixel margins or padding
- Zero gradient declarations
- Zero animation keyframes
- Zero transform properties (except ::first-letter float)
- Zero opacity modulations (except skip-link positioning)
- Zero CSS custom properties for animation timing beyond 0.3s

**The flagship experiment spent 22% of CSS (227 lines) on imperceptible letter-spacing (0.001-0.01em). CD-006 spends 0% on this. The ENTIRE CSS budget goes to VISIBLE, STRUCTURAL differentiation.**

---

## 11. SUMMARY: What Must the Prompt Enable?

### CRITICAL NOTE: CD-006 Is the Floor, Not the Ceiling

The 12 patterns below are the MINIMUM CSS vocabulary proven to work at Ceiling tier. A Flagship prompt must enable ALL of these AND additionally enable:

**Beyond-CD-006 requirements (from 01-DEFINITION.md):**
- **D-04: Global multi-coherence** -- 3+ instances where 3+ channels encode the SAME semantic concept simultaneously, driven by a unified metaphor that pervades the entire page (not local per-section metaphors)
- **D-13: Unified structural metaphor** -- a single metaphor named in code, creating 3+ class families NOT in the mechanism catalog, driving 2+ multi-coherence instances, perceivable at 40%+ of sections WITHOUT textual labels
- **D-03: Planned channel coordination** -- at EVERY boundary, deliberately plan which 3-6 channels shift and in what semantic direction (not incidental from accumulated craft)
- **D-09: Axis variety as composition** -- 3+ distinct axis patterns with NAMED transitions between them, where pattern changes serve the metaphor (not just section topic labels)
- **Dynamic multi-coherence profile** -- vary the channel count across boundaries to create narrative arc (2 channels at quiet moments, 5-6 at climactic moments), unlike CD-006's static 3-5

The prompt must teach the builder to deploy CD-006-level vocabulary AND compose it into metaphor-driven global coherence that CD-006 never achieved.

### The 12 Essential Patterns (Vocabulary Floor from CD-006)

1. **Component 2-zone DNA** — label zone (sparse) + body zone (dense), identical label typography across all component types
2. **3-tier border budget** — 4px accent, 3px structural, 1px data. Never 2px.
3. **Dark slab inversion** — near-black bg with cream text for header, footer, code, and optionally proof zones
4. **Label register** — 9+ classes sharing 0.75rem / uppercase / 0.1em / 600 weight
5. **Callout accent system** — 5 types with reserved accent colors and tinted backgrounds
6. **5 grid topologies** — golden ratio, 4-col, 3-col, 2-col, and inline grids
7. **Transition grammar** — smooth (48px, 1px), bridge (64px, tinted zone), breathing (80px, 3px)
8. **Section-meta self-documentation** — mono, meta-sized, uppercase, tracked, announces structure
9. **Responsive collapse strategy** — 960px, 768px, 480px breakpoints with specific collapse rules
10. **Syntax highlighting** — 6-color system on dark code blocks
11. **Restraint discipline** — explicit list of what NOT to deploy
12. **Accessibility skeleton** — skip link, landmarks, ARIA roles, focus-visible, reduced-motion, print

### The Brief's Current Coverage

| Pattern | Brief Coverage | Status |
|---------|---------------|--------|
| Component 2-zone DNA | Not mentioned | **MISSING** |
| 3-tier border budget | Partially (border-left mentioned) | **INSUFFICIENT** |
| Dark slab inversion | Not mentioned | **MISSING** |
| Label register | Not mentioned | **MISSING** |
| Callout accent system | Not mentioned | **MISSING** |
| 5 grid topologies | Not mentioned (says "Choose your own") | **MISSING** |
| Transition grammar | Well described (Section 3) | **COVERED** |
| Section-meta documentation | Not mentioned | **MISSING** |
| Responsive collapse | "Must function at 768px" only | **INSUFFICIENT** |
| Syntax highlighting | Not mentioned | **MISSING** |
| Restraint discipline | Mentioned philosophically, not concretely | **INSUFFICIENT** |
| Accessibility skeleton | "WCAG 2.1 AA" only | **INSUFFICIENT** |

**CD-006 vocabulary coverage: 1/12 fully covered. 3/12 partially covered. 8/12 missing entirely.**

### ADDITIONAL: Brief Coverage of Flagship-Only Dimensions (from 01-DEFINITION.md)

| Flagship Dimension | Brief Coverage | Status |
|--------------------|---------------|--------|
| D-04: Global multi-coherence (3+ instances, 3+ channels, same concept) | Section 4 describes multi-coherence well | **PARTIALLY COVERED** (philosophy yes, but no recipe for PLANNING it) |
| D-13: Unified structural metaphor (4 sub-gates) | Section 8 says "If a metaphor emerges...name it" | **INSUFFICIENT** (treats metaphor as optional, not as the organizing force) |
| D-03: Planned channel coordination (>= 3/boundary, avg >= 4) | Section 4 describes binding rule | **PARTIALLY COVERED** (but no boundary-planning worksheet) |
| D-09: Axis variety (>= 3 patterns, named transitions) | Not mentioned | **MISSING** |
| Dynamic multi-coherence profile | Not mentioned | **MISSING** |
| D-05: 5/5 fractal scales | Section 5 describes well | **COVERED** |

**Grand total: 1/17 fully covered (transition grammar). 5/17 partially covered. 11/17 missing.**

The brief excels at PHILOSOPHY (transition grammar, multi-coherence binding, fractal echo, creative authority, self-check protocol) but fails at BOTH:
1. **CSS RECIPE** -- the specific patterns that produce Ceiling-tier vocabulary (CD-006 patterns)
2. **FLAGSHIP COMPOSITION** -- the beyond-CD-006 requirements for unified metaphor, global multi-coherence, planned channel coordination, and dynamic coherence profile

The brief currently enables a builder to produce Middle-tier 4/4 (which it did successfully). It does NOT enable Ceiling-tier (CD-006 vocabulary patterns missing) or Flagship-tier (metaphor + global coherence architecture missing).

### What the Brief Needs to Add

**Part A: CSS Vocabulary (enables Ceiling tier)** -- ~80 lines:
1. Component DNA pattern (10 lines)
2. Border budget system (8 lines)
3. Dark slab recipe (6 lines)
4. Label register recipe (8 lines)
5. Callout system recipe (8 lines)
6. Grid topology menu (10 lines)
7. Section-meta recipe (4 lines)
8. Responsive collapse strategy (10 lines)
9. Syntax highlighting recipe (6 lines)
10. Restraint list (8 lines)
11. Accessibility skeleton (8 lines)

**Part B: Flagship Composition Architecture (enables beyond-Ceiling)** -- ~60 lines:
12. Metaphor as ORGANIZING FORCE, not optional (10 lines) -- metaphor must drive CSS decisions at every boundary, create 3+ class families, be perceivable without labels at 40%+ of sections
13. Global multi-coherence planning protocol (15 lines) -- before writing CSS, map which 3+ channels encode your metaphor's semantic dimension at each boundary. Plan WHERE coherence peaks (climactic) and WHERE it rests (quiet).
14. Boundary-planning worksheet (10 lines) -- for each zone boundary, explicitly name: direction, channels shifting, metaphor influence, transition type
15. Dynamic coherence profile (10 lines) -- vary channel count across boundaries for narrative arc (2 at quiet, 5-6 at peaks). CD-006 was static 3-5; Flagship must be dynamic.
16. Axis variety as compositional tool (10 lines) -- 3+ axis patterns where pattern CHANGES serve the metaphor. Transition between patterns is a compositional event, not just a section label.
17. Channel coordination verification (5 lines) -- at midpoint, extract computed styles at every boundary, count channels, verify >= 3 each and average >= 4

This would bring the brief from ~230 lines to ~370 lines, transforming it from a MIDDLE-TIER philosophy document into a FLAGSHIP-TIER recipe+architecture document.

---

## APPENDIX: CD-006 Complete Token Table

### :root Custom Properties (Complete)

```css
/* Colors */
--color-primary: #E83025;
--color-background: #FEF9F5;
--color-text: #1A1A1A;
--color-text-secondary: #666666;
--color-border: #E0D5C5;
--color-border-subtle: #F0EBE3;

/* Zone backgrounds */
--color-zone-sparse: #FEF9F5;
--color-zone-dense: #FFFFFF;
--color-zone-breathing: #FAF5ED;

/* Typography */
--font-display: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;

/* Type Scale */
--type-page: 3rem;
--type-section: 1.625rem;
--type-subsection: 1.375rem;
--type-body: 1rem;
--type-code: 0.875rem;
--type-meta: 0.75rem;

/* Geometry */
--border-radius: 0;
--box-shadow: none;

/* Spacing Scale */
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
--space-20: 80px;

/* Semantic Aliases */
--space-within: var(--space-2);     /* 8px */
--space-between: var(--space-8);    /* 32px */
--space-chapter: var(--space-16);   /* 64px */

/* Callout Accents */
--accent-blue: #4A90D9;
--accent-green: #4A9D6B;
--accent-coral: #C97065;
--accent-amber: #D97706;
--accent-purple: #7C3AED;

/* Standardized Border */
--border-left-width: 4px;

/* Solid Offset */
--offset-x: 4px;
--offset-y: 4px;
--offset-color: #1A1A1A;

/* Syntax Highlighting */
--syntax-keyword: #E83025;
--syntax-string: #6B9B7A;
--syntax-comment: #666666;
--syntax-function: #4A7C9B;
--syntax-type: #C97065;
--syntax-number: #D97706;
--syntax-punctuation: #E0D5C5;

/* Transition timing */
--transition-standard: 0.3s ease;

/* Axis Zone Tokens */
--axis-zone-primary: var(--color-zone-dense);
--axis-zone-secondary: var(--color-zone-sparse);
--axis-zone-focal: var(--color-background);
--axis-zone-transition: var(--color-zone-breathing);
```

Total custom properties: **55**
