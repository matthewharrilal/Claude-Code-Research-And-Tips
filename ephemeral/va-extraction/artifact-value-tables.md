# Value Tables — Pre-Computed Perception Threshold Values

**Purpose:** Copy-paste CSS values that satisfy perception thresholds. The builder uses these as a REFERENCE (not constraints) when making creative decisions. All values are in CSS snippet format — copy directly into your stylesheet.

**Source:** Extracted from Gas Town output.html CSS, tokens.css, and CD-006-pilot-migration.html.

---

## 1. Background Color Pairs (20 pairs with RGB deltas)

These are pre-computed zone background color pairs that satisfy the >= 15 RGB delta threshold at various intensity levels.

### Subtle Transitions (15-25 RGB delta — legato, gentle)

| Pair | Color A | Color B | Max Delta | Feel |
|------|---------|---------|-----------|------|
| 1 | `#FEF9F5` (254,249,245) | `#F0EBE0` (240,235,224) | 21 | Cream to warm tan |
| 2 | `#F8F3EB` (248,243,235) | `#EDE6DA` (237,230,218) | 17 | Light warm to sand |
| 3 | `#FEF9F5` (254,249,245) | `#F5EFE5` (245,239,229) | 16 | Cream to soft linen |
| 4 | `#FAF5ED` (250,245,237) | `#F0E8DA` (240,232,218) | 19 | Breathing to recovery |
| 5 | `#F5F0E8` (245,240,232) | `#EBE3D5` (235,227,213) | 19 | Neutral warm to deeper sand |

### Confident Transitions (25-40 RGB delta — breathing rest, moderate)

| Pair | Color A | Color B | Max Delta | Feel |
|------|---------|---------|-----------|------|
| 6 | `#FEF9F5` (254,249,245) | `#EDE6DA` (237,230,218) | 27 | Cream to sand |
| 7 | `#FEFEFE` (254,254,254) | `#EDE6DA` (237,230,218) | 36 | Near-white to sand |
| 8 | `#F0EBE0` (240,235,224) | `#E8E1D5` (232,225,213) | 11* | Tan to deep warm (**BELOW THRESHOLD — avoid**) |
| 9 | `#FEF9F5` (254,249,245) | `#E8E1D5` (232,225,213) | 32 | Cream to deep warm |
| 10 | `#FEFEFE` (254,254,254) | `#F0EBE0` (240,235,224) | 30 | Near-white to tan |
| 11 | `#FAF5ED` (250,245,237) | `#E5DDD0` (229,221,208) | 29 | Breathing to warm earth |
| 12 | `#F5EFE5` (245,239,229) | `#E0D8CA` (224,216,202) | 27 | Linen to clay |

*Pair 8 is included as a WARNING example — this is below the 15 RGB threshold and should not be used for adjacent zones.

### Dramatic Transitions (40-70+ RGB delta — full stop, heavy)

| Pair | Color A | Color B | Max Delta | Feel |
|------|---------|---------|-----------|------|
| 13 | `#FEF9F5` (254,249,245) | `#1E1E1E` (30,30,30) | 224 | Cream to dark (inversion) |
| 14 | `#FEFEFE` (254,254,254) | `#E8E1D5` (232,225,213) | 41 | Near-white to deep warm |
| 15 | `#FEF9F5` (254,249,245) | `#D5CCC0` (213,204,192) | 53 | Cream to stone |
| 16 | `#F0EBE0` (240,235,224) | `#1A1A1A` (26,26,26) | 214 | Tan to near-black |
| 17 | `#E8E1D5` (232,225,213) | `#FEF9F5` (254,249,245) | 32 | Deep warm back to cream |
| 18 | `#1E1E1E` (30,30,30) | `#FEF9F5` (254,249,245) | 224 | Dark to cream (recovery) |
| 19 | `#FAF5ED` (250,245,237) | `#C8BFB0` (200,191,176) | 61 | Breathing to dark warm |
| 20 | `#F5F0E8` (245,240,232) | `#1A1A1A` (26,26,26) | 219 | Neutral to near-black |

### Usage Guidance + CSS Snippets

**Subtle (15-25 delta) — legato transitions:**
```css
.zone-opening { background-color: #FEF9F5; } /* 254,249,245 */
.zone-model   { background-color: #F0EBE0; } /* 240,235,224 — delta 21 */
```

**Confident (25-40 delta) — breathing rest transitions:**
```css
.zone-opening { background-color: #FEF9F5; } /* 254,249,245 */
.zone-dense   { background-color: #EDE6DA; } /* 237,230,218 — delta 27 */
```

**Dramatic (40+ delta) — full stop transitions:**
```css
.zone-light   { background-color: #FEF9F5; } /* 254,249,245 */
.zone-dark    { background-color: #1E1E1E; } /* 30,30,30 — delta 224 (inversion) */
```

- **Subtle (15-25):** Adjacent zones with similar content density
- **Confident (25-40):** Most zone transitions — the sweet spot for multi-coherence
- **Dramatic (40+):** 1-2 high-drama boundaries per page (dense shift, inversion blocks)
- **Inversion (200+):** At most once per page for the "second-half moment" (D-04)
- **MINIMUM:** Every adjacent zone pair MUST use >= 15 RGB delta. Compositional target: >= 25 RGB at 3+ boundaries.

---

## 2. Spacing Scales (10 zone padding progressions)

Pre-computed padding progressions for zone density. All values from tokens.css spacing scale (4px base unit). Total stacked gap at boundaries must stay <= 120px.

### Progression A: Crescendo (sparse -> dense -> release)

| Zone | Density | Padding-top | Padding-bottom | Inner spacing | Total boundary gap* |
|------|---------|-------------|----------------|---------------|-------------------|
| Z1 (opening) | SPARSE | 80px | 64px | 48px between elements | — |
| Z2 (transitional) | MODERATE | 64px | 48px | 32px between elements | 112px (Z1 bottom + Z2 top) |
| Z3 (peak) | DENSE | 48px | 32px | 24px between elements | 96px (Z2 bottom + Z3 top) |
| Z4 (easing) | MODERATE | 48px | 48px | 32px between elements | 80px (Z3 bottom + Z4 top) |
| Z5 (transitional) | MODERATE | 48px | 64px | 32px between elements | 96px (Z4 bottom + Z5 top) |
| Z6 (closing) | DENSE->SPARSE | 48px | 80px | 24px->48px | 112px (Z5 bottom + Z6 top) |

*Total boundary gap = previous zone padding-bottom + next zone padding-top. All under 120px.

### Progression B: Plateau (uniform moderate)

| Zone | Density | Padding-top | Padding-bottom | Inner spacing |
|------|---------|-------------|----------------|---------------|
| All zones | MODERATE | 48px | 48px | 32px between elements |

*Simple but risks monotony. Use for APPLIED mode only.*

### Progression C: Wave (alternating compression/expansion)

| Zone | Density | Padding-top | Padding-bottom | Inner spacing |
|------|---------|-------------|----------------|---------------|
| Z1 | SPARSE | 80px | 48px | 48px |
| Z2 | DENSE | 32px | 24px | 16px |
| Z3 | SPARSE | 64px | 48px | 40px |
| Z4 | DENSE | 32px | 24px | 16px |
| Z5 | SPARSE | 64px | 64px | 40px |

### Key Values from tokens.css (copy-paste ready)

```css
/* Spacing scale — use these tokens directly */
padding: var(--space-2);   /*  8px — inside tight components */
padding: var(--space-4);   /* 16px — between elements within a zone */
padding: var(--space-6);   /* 24px — component padding, dense zone spacing */
padding: var(--space-8);   /* 32px — between content blocks, moderate zones */
padding: var(--space-12);  /* 48px — zone padding, generous spacing */
padding: var(--space-16);  /* 64px — zone boundaries, breathing space */
padding: var(--space-20);  /* 80px — opening/closing zone padding */
padding: var(--space-24);  /* 96px — ABSOLUTE MAXIMUM single value */
```

---

## 3. Typography Combinations (10 per-zone specs)

Pre-computed typography specs showing how body text, headings, and labels should vary per zone. All values from tokens.css type scale.

### Combination 1: Research-Synthesis (Gas Town pattern)

| Zone | Body | H2 | H3 | Label | Letter-spacing | Line-height |
|------|------|----|----|-------|---------------|-------------|
| Z1 (manifesto) | 18px Inter | 40px Instrument Serif | 24px italic | 12px caps, 0.05em | 0.03em on labels | 1.8 |
| Z2 (model) | 16px Inter | 32px Instrument Serif | 24px italic | 12px caps, 0.04em | 0.03em on labels | 1.7 |
| Z3 (dense) | 15px Inter | 28px Instrument Serif | 20px italic | 11px caps, 0.04em | 1.6 |
| Z4 (moderate) | 16px Inter | 28px Instrument Serif | 22px italic | 12px caps, 0.03em | 1.7 |
| Z5 (resolving) | 16px Inter | 32px Instrument Serif | 24px italic | 12px caps, 0.03em | 1.7 |
| Z6 (cookbook) | 15px Inter | 28px Instrument Serif | 20px italic | 11px caps, 0.04em | 1.6 |

### Combination 2: Tutorial/Guide

| Zone | Body | H2 | H3 | Label | Letter-spacing | Line-height |
|------|------|----|----|-------|---------------|-------------|
| Overview | 18px Inter | 40px Instrument Serif | 24px italic | 14px caps | 0.04em on labels | 1.8 |
| Steps | 16px Inter | 28px Instrument Serif | 22px italic | 12px caps | 0.03em on labels | 1.7 |
| Code zones | 14px JetBrains Mono | 24px Instrument Serif | 20px italic | 11px mono caps | 0.03em on labels | 1.5 |

### Combination 3: Dense Reference

| Zone | Body | H2 | H3 | Label | Letter-spacing | Line-height |
|------|------|----|----|-------|---------------|-------------|
| All zones | 15px Inter | 24px Instrument Serif | 20px italic | 11px caps | 0.03em on labels | 1.6 |

### Key Principles (copy-paste ready)

```css
/* Display-body delta: minimum 10px between H2 and body */
h2 { font-size: 32px; } /* with 16px body = 16px delta */
body { font-size: 16px; }

/* Letter-spacing: ALWAYS >= 0.025em when applied */
.zone-label { letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px; }

/* H3 is ALWAYS italic (soul constraint SC-10) */
h3 { font-style: italic; }

/* Code zones: JetBrains Mono, tight line-height */
.code-zone { font-family: 'JetBrains Mono', monospace; line-height: 1.5; }
```

- **Zone variation:** Deploy at least 3 distinct typography combinations across the page
- **Compositional letter-spacing range:** 0.03-0.05em (0.025em is the floor, not the target)

---

## 4. Border Weight Trios (5 configurations)

Pre-computed border configurations using the 4px/3px/1px hierarchy from SC-08.

### Configuration A: Standard Hierarchy (Gas Town)

```css
/* 4px = primary emphasis (3-5 uses per page) */
.callout { border-left: 4px solid #E83025; }
.header  { border-bottom: 4px solid #1A1A1A; }

/* 3px = section-level (5-8 uses per page) */
.section-divider { border-bottom: 3px solid #E83025; }

/* 1px = subtle articulation (10-20 uses per page) */
.table td { border: 1px solid #E0D5C5; }
.card     { border: 1px solid #F0EBE3; }
```

### Configuration B: Zone-Modulated

| Zone | Primary (4px) | Secondary (3px) | Subtle (1px) |
|------|---------------|-----------------|--------------|
| Sparse zones | `#E83025` red left | `#E0D5C5` section bottom | `#F0EBE3` table |
| Dense zones | `#1A1A1A` dark left | `#E83025` red section | `#E0D5C5` table |
| Inverted zones | `#FEF9F5` cream left | `#E83025` red section | `#666666` divider |

### Configuration C: Emphasis Gradient

| Position | Weight | Usage |
|----------|--------|-------|
| Opening (Z1) | 4px | Strong entry statement |
| Middle (Z3-Z4) | 3px dominant | Section organization |
| Closing (Z6) | 1px dominant, one 4px accent | Quiet resolution with punctuation |

### Configuration D: Minimal (for APPLIED mode)

| Weight | Usage |
|--------|-------|
| 4px | Header bottom only |
| 3px | Not used |
| 1px | All dividers and borders |

### Configuration E: Maximum Expression (for FLAGSHIP)

| Weight | Count | Distribution |
|--------|-------|-------------|
| 4px | 5-8 instances | Callout left borders, pull quotes, data tables |
| 3px | 8-12 instances | Section dividers, zone transitions, header |
| 1px | 15-25 instances | Table cells, card frames, subtle separators |

---

## 5. Component Library Classes (Reference)

Pre-computed component adoption targets from components.css.

### Minimum Viable Set (8 classes for COMPOSED mode)

| Class | Usage | Zones |
|-------|-------|-------|
| `.callout` | Information callouts with 4px left border | All zones |
| `.callout--{type}` | Semantic variants (info, tip, gotcha, essence) | Per content need |
| `.code-block` | Dark background code with syntax highlighting | Z3, Z4, Z6 |
| `.table-wrapper` | Responsive table containers | Z3, Z5, Z6 |
| `.pull-quote` | Emphasized quotations | Z1, Z5 |
| `.section-header` | Zone title treatment | Zone boundaries |
| `.skip-link` | Accessibility skip navigation | Page top |
| `.toc` | Table of contents | After header |

### Extended Set (12+ classes for FLAGSHIP)

Add to the above:
| Class | Usage |
|-------|-------|
| `.card` | Contained content units |
| `.grid--2col` | Two-column reference layouts |
| `.grid--3col` | Three-column comparison layouts |
| `.collapsible` | Expandable detail sections |

---

*These value tables are REFERENCE material in copy-paste CSS format, not constraints. The builder has 80% creative authority to use, modify, or exceed these values within the identity constraints (Tier 1) and perception physics (Tier 2). Copy the CSS snippets directly and adapt to your zone context.*
