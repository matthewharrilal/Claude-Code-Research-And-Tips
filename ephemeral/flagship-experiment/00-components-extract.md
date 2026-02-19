# Components Extract — Builder Reference
Source: `design-system/compositional-core/components/` (3 CSS files merged)
Extracted: 2026-02-17 | Scan time: ~2 min

---

## SOUL CONSTRAINTS (Non-Negotiable)
```css
border-radius: 0;     /* ALWAYS — zero exceptions */
box-shadow: none;     /* ALWAYS — no shadows ever */
opacity: 1;           /* NO transparency on containers */
```

---

## UNIVERSAL COMPONENTS (appear across all stage types)

### Callout Family — 100% frequency
**1 component, parameterized by `--accent-color`**
```css
.callout            /* 4px left border + sparse bg + 24px/20px padding */
.callout__label     /* 10px mono uppercase, tracks --accent-color */
.callout__body      /* 14px body, 1.7 line-height */
.callout__content   /* alias for __body */
```
Semantic color variants (set `--accent-color` on parent):
- `.callout--essence` → amber (#D97706), serif italic body
- `.callout--tip` → green (#4A9D6B)
- `.callout--info` / `.callout--note` → blue (#4A90D9)
- `.callout--gotcha` / `.callout--warning` → primary red (#E83025)
- `.callout--challenge` / `.callout--caution` → purple (#7C3AED)

### Page Header — 100% frequency
```css
.exploration-header, .page-header    /* 3px primary bottom border, white bg, mb:48px */
.exploration-id, .page-header__id   /* 11px mono red, uppercase, letterspace */
.exploration-title, .page-header__title   /* 32px display italic */
.exploration-hypothesis, .page-header__subtitle  /* 14px secondary, max-width:600px */
```

### Code Blocks — 92% frequency
```css
pre          /* dark bg (#1A1A1A), cream text, 3px border, 32px/24px padding */
pre code     /* inherits pre styles, no extra bg/border */
p code, li code  /* light bg (#F0EBE3), 1px border, 2px/6px padding */
```
Structured code snippet (with header):
```css
.code-snippet          /* dark container */
.code-snippet__header  /* flex space-between, border-bottom */
.code-snippet__filename /* 11px mono secondary */
.code-snippet__copy    /* 11px, red border button */
.code-snippet__content /* mono 14px, white-space:pre */
/* Syntax tokens: .comment .keyword .string .function .variable */
```

### Tables — 70% frequency
```css
table   /* width:100%, border-collapse, display:block overflow-x:auto */
th      /* 12px body uppercase bold, 3px bottom border, secondary color */
td      /* 12px/16px body, 1px bottom border, vertical-align:top */
```

### Accessibility (universal)
```css
.skip-link          /* abs positioned, shows on :focus, primary bg */
*:focus-visible     /* 3px primary outline, offset:2px */
::selection         /* primary bg, cream text */
```

### Stats Bar / Metadata — 63-66% frequency
```css
/* DD/OD pattern — horizontal flex segments: */
.stats-bar          /* flex, gap:24px, flex-wrap */
.stats-bar__segment /* flex:1, border, center-aligned */
.stats-bar__label   /* 10px uppercase secondary */
.stats-bar__value   /* 18px bold primary text */

/* CD pattern — vertical stat items: */
.stat-item    /* flex-direction:column, gap:4px */
.stat-label   /* 10px mono uppercase secondary */
.stat-value   /* 16px bold primary text */
```

### Section Indicator / Meta Line — 66% frequency
```css
.section-indicator  /* 10px mono uppercase, 1px subtle border-bottom */
.meta-line          /* 10px body uppercase, flex with gap:16px */
```

### Page Footer — 66% frequency
```css
.page-footer         /* 3px primary top border, mt:64px, 12px secondary */
.page-footer__section /* mb:16px */
.page-footer__label   /* bold uppercase letterspace */
```

---

## CD-SPECIFIC COMPONENTS (Combination Dimension pages)

### Reasoning — 100% CD frequency
```css
.reasoning          /* 3px border, 32px padding, sparse bg */
.reasoning__header  /* flex, border-bottom, mb:24px */
.reasoning__icon    /* 10px mono amber, amber 1px border, small padding */
.reasoning__title   /* display italic 22px */
.reasoning__body p  /* mb:16px (last child: mb:0) */
```

### Core Abstraction — 83% CD frequency
```css
.core-abstraction        /* 3px primary border, dense bg */
.core-abstraction__essence  /* 32px padding, sparse bg, 3px primary border-bottom */
.core-abstraction__label    /* 10px mono purple uppercase */
.core-abstraction__quote    /* display italic 26px, max-width:55ch */
.core-abstraction__proof    /* padding:0, pre has no border/margin */
```

### Bento Grid — 100% CD frequency
```css
.bento-grid        /* grid 1fr 1fr, gap:24px, margin:32px 0 */
.bento-cell        /* 3px border, 24px padding, dense bg */
.bento-cell--primary  /* grid-column:1/-1 (full width) */
.bento-cell__label    /* 10px mono uppercase secondary, 1px subtle border-bottom */
```

### Essence Pullquote — 83% CD frequency
```css
.essence-pullquote  /* 4px purple left border, 32px/24px padding, sparse bg */
.essence-pullquote p  /* display italic 26px, 1.4 line-height, max-width:55ch */
.essence-pullquote cite  /* block, 10px mono uppercase, mt:12px */
```

### Density Meter — 100% CD frequency
```css
.density-meter             /* flex, gap:4px */
.density-meter__segment    /* h:8px flex:1, subtle bg + border */
.density-meter__segment--filled  /* primary bg + border-color */
.density-meter__label      /* 10px mono uppercase secondary */
```

### Version Badge — 100% CD frequency
```css
.version-badge  /* inline-block, 10px mono, 1px secondary border, 2px/8px padding */
```

### Section Zones (CRESCENDO structure) — 100% CD frequency
```css
.section-zone            /* px:48px py:24px (H+V), max-width:1100px, margin:0 auto */
.section-zone--opening   /* sparse bg, pt:64px pb:64px */
.section-zone--rising    /* dense bg, pt:48px pb:48px */
.section-zone--building  /* dense bg, pt:32px pb:32px */
.section-zone--peak      /* dense bg, pt:24px pb:32px */
.section-zone--resolution /* sparse bg, pt:64px pb:64px */
```

### Breathing Zones — 100% CD frequency
```css
.breathing-zone         /* zone-breathing bg, 3px border top+bottom, py:48px px:24px */
.breathing-zone__inner  /* max-width:1100px, margin:0 auto */
.breathing-zone--tight  /* py:24px */
.breathing-zone--release /* py:64px */
```

---

## LOW-CONFIDENCE / SPECIALIZED

### File Tree (DD/OD only)
```css
.file-tree        /* 4px blue left border, subtle 1px border */
.file-tree__label /* 10px body blue uppercase */
.file-tree__content /* 13px mono, white-space:pre */
/* .folder .file .comment color tokens */
```

### Decision Matrix (DD/OD only)
```css
.decision-matrix          /* 4px primary left border */
.decision-matrix__header  /* grid 2fr/1fr/1fr/1fr, red tint bg, 11px uppercase */
.decision-matrix__row     /* grid 2fr/1fr/1fr/1fr, 1px subtle border-bottom, 14px */
```

### Q&A Pair (OD conversational)
```css
.question            /* max-width:60%, ml:32px */
.question__marker    /* 8px × 8px primary square */
.question__text      /* display italic 22px */
.answer              /* 24px padding, dense bg */
.answer__lead        /* 16px 1.7 line-height */
.answer__lead--dropcap::first-letter  /* 3.5em float:left display font */
```

---

## KEY TOKEN USAGE PATTERNS

**Most-used tokens (by frequency in components):**
- `var(--color-primary, #E83025)` — borders, badges, primary accents
- `var(--color-text, #1A1A1A)` — body text
- `var(--color-text-secondary, #666666)` — labels, metadata
- `var(--color-border, #E0D5C5)` — standard borders
- `var(--color-border-subtle, #F0EBE3)` — dividers, secondary borders
- `var(--color-zone-sparse)` — sparse section backgrounds
- `var(--color-zone-dense)` — dense section backgrounds
- `var(--font-body)` — Inter (body, labels, meta)
- `var(--font-display)` — Instrument Serif (headings, pullquotes)
- `var(--font-mono)` — JetBrains Mono (code, IDs, labels)
- `var(--space-6, 24px)` / `var(--space-8, 32px)` — most common padding
- `var(--type-meta, 10px)` — label text size
- `var(--type-body, 14px)` — standard body

**Spacing anchors (6 values used most):**
`space-2=8px` | `space-4=16px` | `space-6=24px` | `space-8=32px` | `space-12=48px` | `space-16=64px`

**Border weights (semantic encoding):**
- `4px` = primary accent / structural (highest importance)
- `3px` = section dividers / heavy borders
- `1px` = subtle separators / component edges

---

## RESPONSIVE BEHAVIOR

At `max-width: 768px`:
- Page title drops: 32px → 26px
- `.question` goes full-width (removes left offset)
- `.code-snippet__content` shrinks: 14px → 12px
- `.decision-matrix` and `.bento-grid` collapse to single column
- `@media (prefers-reduced-motion)` disables all transitions/animations
