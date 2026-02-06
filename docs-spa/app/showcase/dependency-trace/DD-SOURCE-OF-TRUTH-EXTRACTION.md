# DD Source-of-Truth Token Extraction

**Date:** 2026-02-05
**Purpose:** Extract all CSS custom properties from the 6 DD HTML files (the actual sources of truth for KortAI's locked design tokens), identify which are truly locked vs. per-exploration variations, and compare against `design-system/src/styles/tokens.css` and `DESIGN-TOKEN-SUMMARY.md`.

---

## Table of Contents

1. [Per-File `:root` Token Extraction](#1-per-file-root-token-extraction)
2. [Cross-File Analysis: Locked vs. Varying Tokens](#2-cross-file-analysis-locked-vs-varying-tokens)
3. [Complete Locked Token Registry](#3-complete-locked-token-registry)
4. [Comparison: DD Files vs. tokens.css](#4-comparison-dd-files-vs-tokenscss)
5. [Comparison: DD Files vs. DESIGN-TOKEN-SUMMARY.md](#5-comparison-dd-files-vs-design-token-summarymd)
6. [Critical Divergence Report](#6-critical-divergence-report)
7. [Font Import Analysis](#7-font-import-analysis)
8. [CSS Comment Analysis (LOCKED / SOUL / TOKEN)](#8-css-comment-analysis)

---

## 1. Per-File `:root` Token Extraction

### DD-001: Density Breathing

```css
:root {
  /* Colors */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* Typography */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Geometry -- LOCKED */
  --border-radius: 0;
  --box-shadow: none;

  /* Spacing */
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

  /* Callout Accents */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
}
```

**Unique to DD-001:** `--accent-coral: #C97065` (present but not in DD-002, DD-003, DD-006)

---

### DD-002: Density Gradient

```css
:root {
  /* Colors — same as DD-001 */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* Typography — same */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Geometry — same */
  --border-radius: 0;
  --box-shadow: none;

  /* Spacing — adds --space-20: 80px */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px;  --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px;  --space-10: 40px;
  --space-12: 48px; --space-16: 64px; --space-20: 80px;

  /* Callout Accents — NO --accent-coral */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;

  /* NEW: Standardized border */
  --border-left-width: 4px;
}
```

**New in DD-002:** `--space-20: 80px`, `--border-left-width: 4px`
**Missing vs DD-001:** `--accent-coral`

---

### DD-003: Density Islands

```css
:root {
  /* Colors — same */
  /* Typography — same */
  /* Geometry — same */

  /* Spacing — adds --space-24: 96px */
  --space-1 through --space-20: same as DD-002;
  --space-24: 96px;

  /* Callout Accents — NO --accent-coral */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;

  /* Standardized Border */
  --border-left-width: 4px;
}
```

**New in DD-003:** `--space-24: 96px`
**Missing:** `--accent-coral`

---

### DD-004: Density Layers

```css
:root {
  /* Colors — same 6 core colors */
  /* Typography — same 3 font families */
  /* Geometry — same (0, none) */

  /* Spacing — same as DD-003 (through --space-24) */

  /* Callout Accents — ADDS --accent-coral back */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
  --accent-coral: #C97065;

  /* Standardized Border */
  --border-left-width: 4px;

  /* LAYER-SPECIFIC COLORS (unique to DD-004) */
  --layer-atmosphere: rgba(254, 249, 245, 0.95);
  --layer-surface: #FFFFFF;
  --layer-topsoil: #F7F4F0;
  --layer-subsoil: #F0EBE3;
  --layer-bedrock: #1E1E1E;
}
```

**Unique to DD-004:** 5 layer-specific color tokens

---

### DD-005: Density Rivers

```css
:root {
  /* Colors — same */
  /* Typography — same */
  /* Geometry — same */
  /* Spacing — same as DD-003/DD-004 */

  /* Callout Accents — includes --accent-coral */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
  --accent-coral: #C97065;

  /* Standardized Border */
  --border-left-width: 4px;

  /* RIVER-SPECIFIC VARIABLES (unique to DD-005) */
  --river-narrow: 280px;
  --river-medium: 450px;
  --river-wide: 700px;
  --river-full: 100%;
}
```

**Unique to DD-005:** 4 river-specific width tokens

---

### DD-006: Fractal Density

```css
:root {
  /* Colors — same */
  /* Typography — same */
  /* Geometry — same */

  /* Spacing — drops --space-24 (back to DD-002 level) */
  --space-1: 4px; ... --space-20: 80px;
  /* NO --space-24 */

  /* Callout Accents — NO --accent-coral */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;

  /* Standardized Border */
  --border-left-width: 4px;
}
```

**Missing vs DD-003/004/005:** `--space-24`, `--accent-coral`

---

## 2. Cross-File Analysis: Locked vs. Varying Tokens

### Tokens IDENTICAL in ALL 6 Files

| Token | Value | Status |
|-------|-------|--------|
| `--color-primary` | `#E83025` | LOCKED |
| `--color-background` | `#FEF9F5` | LOCKED |
| `--color-text` | `#1A1A1A` | LOCKED |
| `--color-text-secondary` | `#666666` | LOCKED |
| `--color-border` | `#E0D5C5` | LOCKED |
| `--color-border-subtle` | `#F0EBE3` | LOCKED |
| `--font-display` | `'Instrument Serif', Georgia, serif` | LOCKED |
| `--font-body` | `'Inter', system-ui, sans-serif` | LOCKED |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | LOCKED |
| `--border-radius` | `0` | LOCKED |
| `--box-shadow` | `none` | LOCKED |
| `--space-1` | `4px` | LOCKED |
| `--space-2` | `8px` | LOCKED |
| `--space-3` | `12px` | LOCKED |
| `--space-4` | `16px` | LOCKED |
| `--space-5` | `20px` | LOCKED |
| `--space-6` | `24px` | LOCKED |
| `--space-8` | `32px` | LOCKED |
| `--space-10` | `40px` | LOCKED |
| `--space-12` | `48px` | LOCKED |
| `--space-16` | `64px` | LOCKED |
| `--accent-blue` | `#4A90D9` | LOCKED |
| `--accent-green` | `#4A9D6B` | LOCKED |
| `--accent-amber` | `#D97706` | LOCKED |
| `--accent-purple` | `#7C3AED` | LOCKED |

**Total: 25 tokens that are identical across all 6 DD files.**

### Tokens That Vary Across Files

| Token | DD-001 | DD-002 | DD-003 | DD-004 | DD-005 | DD-006 | Notes |
|-------|--------|--------|--------|--------|--------|--------|-------|
| `--space-20` | ABSENT | `80px` | `80px` | `80px` | `80px` | `80px` | Added in DD-002+, present in 5 of 6 |
| `--space-24` | ABSENT | ABSENT | `96px` | `96px` | `96px` | ABSENT | Present in 3 of 6 |
| `--accent-coral` | `#C97065` | ABSENT | ABSENT | `#C97065` | `#C97065` | ABSENT | Present in 3 of 6 |
| `--border-left-width` | ABSENT | `4px` | `4px` | `4px` | `4px` | `4px` | Added in DD-002+, present in 5 of 6 |

### Per-Exploration Unique Tokens (Not Locked)

| Token | File | Value | Purpose |
|-------|------|-------|---------|
| `--layer-atmosphere` | DD-004 only | `rgba(254, 249, 245, 0.95)` | Geological layer system |
| `--layer-surface` | DD-004 only | `#FFFFFF` | Geological layer system |
| `--layer-topsoil` | DD-004 only | `#F7F4F0` | Geological layer system |
| `--layer-subsoil` | DD-004 only | `#F0EBE3` | Geological layer system |
| `--layer-bedrock` | DD-004 only | `#1E1E1E` | Geological layer system |
| `--river-narrow` | DD-005 only | `280px` | River width system |
| `--river-medium` | DD-005 only | `450px` | River width system |
| `--river-wide` | DD-005 only | `700px` | River width system |
| `--river-full` | DD-005 only | `100%` | River width system |

---

## 3. Complete Locked Token Registry

These 25 tokens appear identically in ALL 6 DD files. They are the **ground truth** for the KortAI design system.

```css
:root {
  /* ═══════════════════════════════════════════════════════════════════
     COLORS — LOCKED (6/6 files identical)
     ═══════════════════════════════════════════════════════════════════ */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* ═══════════════════════════════════════════════════════════════════
     TYPOGRAPHY — LOCKED (6/6 files identical)
     ═══════════════════════════════════════════════════════════════════ */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* ═══════════════════════════════════════════════════════════════════
     GEOMETRY — LOCKED (6/6 files identical)
     ═══════════════════════════════════════════════════════════════════ */
  --border-radius: 0;
  --box-shadow: none;

  /* ═══════════════════════════════════════════════════════════════════
     SPACING — LOCKED (6/6 files identical)
     ═══════════════════════════════════════════════════════════════════ */
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

  /* ═══════════════════════════════════════════════════════════════════
     CALLOUT ACCENTS — LOCKED (6/6 files identical)
     ═══════════════════════════════════════════════════════════════════ */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
}
```

### Near-Locked Tokens (5/6 files, strong consensus)

```css
:root {
  /* Present in DD-002 through DD-006 (5/6 files) */
  --space-20: 80px;
  --border-left-width: 4px;
}
```

### Conditionally-Locked Tokens (3/6 files, weaker consensus)

```css
:root {
  /* Present in DD-001, DD-004, DD-005 (3/6 files) */
  --accent-coral: #C97065;

  /* Present in DD-003, DD-004, DD-005 (3/6 files) */
  --space-24: 96px;
}
```

---

## 4. Comparison: DD Files vs. tokens.css

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/src/styles/tokens.css`

### Font Family Divergences

| Token | DD Files (6/6) | tokens.css | DIVERGES? |
|-------|----------------|------------|-----------|
| `--font-display` | `'Instrument Serif', Georgia, serif` | `'Instrument Serif', 'Playfair Display', Georgia, serif` | **YES** -- tokens.css adds Playfair Display fallback |
| `--font-body` | `'Inter', system-ui, sans-serif` | `'Inter', system-ui, -apple-system, sans-serif` | **YES** -- tokens.css adds -apple-system fallback |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | `'JetBrains Mono', 'SF Mono', Monaco, monospace` | **YES** -- tokens.css adds Monaco fallback |
| `--font-blackletter` | NOT PRESENT | `'UnifrakturMaguntia', 'Old English Text MT', serif` | **tokens.css only** |
| `--font-condensed` | NOT PRESENT | `'Inter Tight', 'Roboto Condensed', sans-serif` | **tokens.css only** |

### Color Divergences

| Token | DD Files (6/6) | tokens.css | DIVERGES? |
|-------|----------------|------------|-----------|
| `--color-primary` | `#E83025` | `var(--sanrok-red)` = `#FF0000` | **CRITICAL -- #E83025 vs #FF0000** |
| `--color-background` | `#FEF9F5` | `var(--sanrok-cream)` = `#FBF5EF` | **YES -- #FEF9F5 vs #FBF5EF** |
| `--color-text` | `#1A1A1A` | `var(--sanrok-black)` = `#171717` | **YES -- #1A1A1A vs #171717** |
| `--color-text-secondary` | `#666666` | `#4A4A4A` | **YES -- #666666 vs #4A4A4A** |
| `--color-border` | `#E0D5C5` | `rgba(0, 0, 0, 0.08)` | **YES -- solid hex vs rgba** |
| `--color-border-subtle` | `#F0EBE3` | NOT PRESENT (no equivalent) | **DD only** |
| `--accent-blue` | `#4A90D9` | NOT PRESENT | **DD only** |
| `--accent-green` | `#4A9D6B` | NOT PRESENT | **DD only** |
| `--accent-amber` | `#D97706` | NOT PRESENT | **DD only** |
| `--accent-purple` | `#7C3AED` | NOT PRESENT | **DD only** |
| `--sanrok-red` | NOT PRESENT | `#FF0000` | **tokens.css only** |
| `--sanrok-cream` | NOT PRESENT | `#FBF5EF` | **tokens.css only** |
| `--sanrok-black` | NOT PRESENT | `#171717` | **tokens.css only** |

### Geometry Divergences

| Token | DD Files (6/6) | tokens.css | DIVERGES? |
|-------|----------------|------------|-----------|
| `--border-radius` | `0` | NOT PRESENT (has `--radius-none: 0` through `--radius-full: 9999px`) | **YES -- tokens.css provides a full radius scale** |
| `--box-shadow` | `none` | NOT PRESENT (has `--shadow-sm` through `--shadow-elevated`) | **YES -- tokens.css provides a full shadow scale** |

### Spacing Divergences

| Token | DD Files (6/6) | tokens.css | Match? |
|-------|----------------|------------|--------|
| `--space-1` | `4px` | `0.25rem` (=4px) | Values match, units differ (px vs rem) |
| `--space-2` | `8px` | `0.5rem` (=8px) | Values match, units differ |
| `--space-3` | `12px` | `0.75rem` (=12px) | Values match, units differ |
| `--space-4` | `16px` | `1rem` (=16px) | Values match, units differ |
| `--space-5` | `20px` | `1.25rem` (=20px) | Values match, units differ |
| `--space-6` | `24px` | `1.5rem` (=24px) | Values match, units differ |
| `--space-8` | `32px` | `2rem` (=32px) | Values match, units differ |
| `--space-10` | `40px` | `2.5rem` (=40px) | Values match, units differ |
| `--space-12` | `48px` | `3rem` (=48px) | Values match, units differ |
| `--space-16` | `64px` | `4rem` (=64px) | Values match, units differ |
| `--space-20` | `80px` (5/6) | `5rem` (=80px) | Values match, units differ |
| `--space-24` | `96px` (3/6) | `6rem` (=96px) | Values match, units differ |
| `--space-32` | NOT PRESENT | `8rem` (=128px) | **tokens.css only** |
| `--space-40` | NOT PRESENT | `10rem` (=160px) | **tokens.css only** |
| `--space-0` | NOT PRESENT | `0` | **tokens.css only** |

### Type Scale Divergences

| Token | DD Files | tokens.css | Match? |
|-------|----------|------------|--------|
| Type scale tokens | NOT PRESENT as variables | Full scale from `--text-xs` (0.625rem/10px) to `--text-hero` | **DD files use hardcoded px sizes** |

The DD files use inline font-size values (11px, 12px, 13px, 14px, 16px, 18px, 20px, 28px, 32px) rather than type scale tokens.

### Extra Token Categories in tokens.css Not in DD Files

- Line height tokens (`--leading-*`)
- Letter spacing tokens (`--tracking-*`)
- Font weight tokens (`--weight-*`)
- Transition tokens (`--duration-*`, `--ease-*`)
- Z-index scale (`--z-*`)
- Layout/container widths (`--container-*`, `--content-width`, `--sidebar-width`)
- Medieval theme colors
- Nous Research theme colors

---

## 5. Comparison: DD Files vs. DESIGN-TOKEN-SUMMARY.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md`

The DESIGN-TOKEN-SUMMARY.md is explicitly the document the DD files cite as their source (`"LOCKED DESIGN TOKENS -- From DESIGN-TOKEN-SUMMARY.md"`).

### Color Comparison

| Token | DD Files (6/6) | DESIGN-TOKEN-SUMMARY.md | Match? |
|-------|----------------|-------------------------|--------|
| `--color-primary` | `#E83025` | `#E83025` | MATCH |
| `--color-background` | `#FEF9F5` | `#FEF9F5` | MATCH |
| `--color-text` | `#1A1A1A` | `#1A1A1A` | MATCH |
| `--color-text-secondary` | `#666666` | `#666666` | MATCH |
| `--color-border` | `#E0D5C5` | `#E0D5C5` | MATCH |
| `--color-border-subtle` | `#F0EBE3` | `#F0EBE3` | MATCH |

### Typography Comparison

| Token | DD Files (6/6) | DESIGN-TOKEN-SUMMARY.md | Match? |
|-------|----------------|-------------------------|--------|
| `--font-display` | `'Instrument Serif', Georgia, serif` | `'Instrument Serif', Georgia, serif` | MATCH |
| `--font-body` | `'Inter', system-ui, sans-serif` | `'Inter', system-ui, sans-serif` | MATCH |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | `'JetBrains Mono', 'SF Mono', monospace` | MATCH |

### Geometry Comparison

| Token | DD Files (6/6) | DESIGN-TOKEN-SUMMARY.md | Match? |
|-------|----------------|-------------------------|--------|
| `--border-radius` | `0` | `0` | MATCH |
| `--box-shadow` | `none` | `none` | MATCH |

### Spacing Comparison

| Token | DD Files (6/6) | DESIGN-TOKEN-SUMMARY.md | Match? |
|-------|----------------|-------------------------|--------|
| `--space-1` through `--space-16` | All present, px values | All present, px values | MATCH |
| `--space-20` | `80px` (5/6 files) | NOT in locked section | **DD extends beyond SUMMARY** |
| `--space-24` | `96px` (3/6 files) | NOT in locked section | **DD extends beyond SUMMARY** |

### Accent Colors Comparison

| Token | DD Files (6/6) | DESIGN-TOKEN-SUMMARY.md | Match? |
|-------|----------------|-------------------------|--------|
| `--accent-blue` | `#4A90D9` | `#4A90D9` (in accent table) | MATCH |
| `--accent-green` | `#4A9D6B` | `#4A9D6B` (in accent table) | MATCH |
| `--accent-amber` | `#D97706` | `#D97706` (in accent table) | MATCH |
| `--accent-purple` | `#7C3AED` | `#7C3AED` (in accent table) | MATCH |
| `--accent-coral` | `#C97065` (3/6 files) | `#C97065` (in accent table) | MATCH (when present) |

### Type Scale Comparison (DESIGN-TOKEN-SUMMARY has it, DD files don't use tokens)

| SUMMARY Token | SUMMARY Value | DD Inline Usage | Notes |
|---------------|---------------|-----------------|-------|
| `--text-xs` | `0.75rem` (12px) | Various `font-size: 10px`, `11px`, `12px` | DD uses 10-12px; SUMMARY says 12px |
| `--text-sm` | `0.875rem` (14px) | `font-size: 13px`, `14px` | DD uses 13-14px; SUMMARY says 14px |
| `--text-base` | `1rem` (16px) | `font-size: 15px`, `16px` | Close match |
| `--text-lg` | `1.125rem` (18px) | `font-size: 18px` | MATCH |
| `--text-h4` | `1.25rem` (20px) | `font-size: 20px` | MATCH |
| `--text-h3` | `1.5rem` (24px) | NOT used (DD uses 20px for h3) | **DIVERGES** |
| `--text-h2` | `2rem` (32px) | `font-size: 28px` for h2 | **DIVERGES** (28px vs 32px) |
| `--text-h1` | `2.5rem` (40px) | `font-size: 32px` for exploration title | **DIVERGES** |
| `--text-display` | `3rem` (48px) | `font-size: 36px` (DD-004 surface title) | **DIVERGES** |

**Verdict: DD files and DESIGN-TOKEN-SUMMARY.md are perfectly aligned on all locked `:root` tokens.** The DD files also add extended spacing and exploration-specific tokens. The type scale is NOT tokenized in DD files -- they use hardcoded px values that don't always match the SUMMARY's type scale.

---

## 6. Critical Divergence Report

### CRITICAL: tokens.css vs DD Files (vs DESIGN-TOKEN-SUMMARY.md)

The `design-system/src/styles/tokens.css` was extracted from Sanrok/Medieval/Nous reference designs and has **significant divergences** from the DD/SUMMARY ecosystem.

| Property | DD Files + SUMMARY (Source of Truth) | tokens.css | Severity | Resolution |
|----------|--------------------------------------|------------|----------|------------|
| **Primary color** | `#E83025` | `#FF0000` (`--sanrok-red`) | **CRITICAL** | tokens.css uses pure red; DD uses Sanrok's actual editorial red. `#E83025` is correct. |
| **Background** | `#FEF9F5` | `#FBF5EF` (`--sanrok-cream`) | **HIGH** | Different warm creams. DD is warmer/lighter. |
| **Text color** | `#1A1A1A` | `#171717` (`--sanrok-black`) | **MEDIUM** | Very close but not identical. |
| **Text secondary** | `#666666` | `#4A4A4A` | **HIGH** | tokens.css is significantly darker. |
| **Border** | `#E0D5C5` (solid hex) | `rgba(0,0,0,0.08)` (transparent overlay) | **HIGH** | Completely different approach: warm solid vs neutral alpha. |
| **Border radius** | `0` (single locked value) | Full scale: `0` to `9999px` | **HIGH** | tokens.css provides options; DD locks to 0 only. |
| **Box shadow** | `none` (single locked value) | Full scale: `sm` to `elevated` | **HIGH** | tokens.css provides options; DD locks to none only. |
| **Font display fallback** | `Georgia, serif` | `'Playfair Display', Georgia, serif` | **LOW** | Extra fallback in tokens.css |
| **Spacing units** | `px` (absolute) | `rem` (relative) | **MEDIUM** | Same computed values, different units. |
| **Accent colors** | 4-5 semantic accents (blue, green, amber, purple, coral) | NOT PRESENT | **HIGH** | tokens.css has no accent/callout colors. |
| **Type scale** | Not tokenized (hardcoded px) | Full scale with `1.333 Perfect Fourth` ratio | **INFORMATIONAL** | Different philosophies: DD is pragmatic, tokens.css is systematic. |

### Summary of tokens.css Alignment

**tokens.css is NOT aligned with the DD source of truth.** It represents a different extraction -- from Sanrok's marketing site -- while the DD files represent the KortAI documentation design system as evolved through 6 density explorations. The two systems share DNA (both inspired by Sanrok) but diverged on specific values.

---

## 7. Font Import Analysis

All 6 DD files use the IDENTICAL Google Fonts import:

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

This confirms:
- **Instrument Serif** is in ALL 6 DD files (italic and roman)
- **Inter** weights: 400, 500, 600
- **JetBrains Mono** weights: 400, 500
- Font swap strategy: `display=swap`

**tokens.css** does NOT include font imports (it's a CSS-only token file).

---

## 8. CSS Comment Analysis (LOCKED / SOUL / TOKEN)

### Comments Mentioning "LOCKED"

Every DD file contains the comment:
```
/* Geometry -- LOCKED */
--border-radius: 0;
--box-shadow: none;
```

Header comment in all 6:
```
/* LOCKED DESIGN TOKENS -- From DESIGN-TOKEN-SUMMARY.md */
```

Each file adds contextual lessons:
- DD-001: (none)
- DD-002: `"DD-001 LESSONS APPLIED: Standardized borders, no traffic-light"`
- DD-003: (standard header only)
- DD-004: `"DD-003 Lessons: Stronger inter-element connections, visible callouts"`
- DD-005: `"DD-004 Lessons: Visual system at top, multiple usage paths"`
- DD-006: `"DD-005 Lessons: Visualization at top, labels on elements, flow patterns"`

### Comments Mentioning "STANDARDIZED"

DD-002 introduces:
```
/* STANDARDIZED BORDER -- Lesson from DD-001 */
--border-left-width: 4px;
```

This carries forward to DD-003 through DD-006.

### Comments Mentioning "TOKEN"

All 6 files use: `"LOCKED DESIGN TOKENS"` in their header comment block.

### Comments Mentioning "SOUL"

No direct "SOUL" mentions in DD files. The SOUL concept lives in the `design-extraction/` directory (SOUL-DEFINITION.md).

---

## Summary

### What is the DD Source of Truth?

The 6 DD files collectively define the KortAI locked design tokens through empirical validation. The 25 tokens identical across all 6 files are the true ground truth. The DESIGN-TOKEN-SUMMARY.md document perfectly matches these tokens and serves as the authoritative reference document.

### What needs fixing?

1. **tokens.css** needs reconciliation: its `--sanrok-red: #FF0000` must be updated to `#E83025`, or the semantic `--color-primary` must point to `#E83025` instead of `var(--sanrok-red)`.
2. **tokens.css** background (`#FBF5EF`) differs from DD (`#FEF9F5`).
3. **tokens.css** text secondary (`#4A4A4A`) is significantly darker than DD (`#666666`).
4. **tokens.css** border approach (rgba overlay) differs from DD (warm solid hex).
5. **tokens.css** provides radius/shadow scales that contradict DD's locked `0`/`none`.
6. The DD files should adopt type scale tokens rather than hardcoded px values.
7. `--space-20: 80px` and `--border-left-width: 4px` should be promoted to the locked registry (present in 5/6 files).

### Authoritative Chain

```
DESIGN-TOKEN-SUMMARY.md  (defines the locked tokens)
        |
        v
DD-001 through DD-006    (implements and validates the tokens)
        |
        v
[Future OD/AD/CD files]  (will inherit the same locked tokens)

tokens.css               (SEPARATE lineage -- Sanrok site extraction, NOT aligned)
```

The DD files and DESIGN-TOKEN-SUMMARY.md are the sources of truth. tokens.css is a parallel extraction that needs reconciliation.
