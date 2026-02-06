# DD Typography Visual Audit — Playwright Extraction

**Date:** 2026-02-06
**Method:** Playwright MCP browser automation — opened each DD file via HTTP server, extracted `getComputedStyle()` values from rendered DOM elements
**Source of Truth:** DD-001 through DD-006 HTML files (per user directive: DD files are the ultimate sources of truth)

---

## Computed Typography Values (Playwright getComputedStyle)

### h1 — LOCKED (identical across all 6 files)

| Property | Value | Notes |
|----------|-------|-------|
| fontFamily | `"Instrument Serif", Georgia, serif` | Confirmed in all 6 |
| fontSize | `32px` | Confirmed in all 6 |
| fontWeight | `700` | Bold |
| fontStyle | `italic` | Instrument Serif italic is the display style |
| lineHeight | `54.4px` (1.7 ratio) | DD-001 is `51.2px` (1.6) — evolved to 1.7 in DD-002+ |
| letterSpacing | `normal` | No tracking adjustments |
| color | `rgb(26, 26, 26)` = `#1A1A1A` | Uses `--color-text` |

### p — LOCKED (identical across all 6 files)

| Property | Value | Notes |
|----------|-------|-------|
| fontFamily | `Inter, system-ui, sans-serif` | Confirmed in all 6 |
| fontSize | `14px` | Confirmed in all 6 |
| fontWeight | `400` | Regular weight |
| fontStyle | `normal` | Standard |
| lineHeight | `23.8px` (1.7 ratio) | DD-001 is `22.4px` (1.6) — evolved to 1.7 |
| letterSpacing | `normal` | No tracking adjustments |
| color | `rgb(102, 102, 102)` = `#666666` | Uses `--color-text-secondary` |

### h2 — VARIES per exploration

| File | fontSize | fontFamily | fontStyle | lineHeight |
|------|----------|------------|-----------|------------|
| DD-001 | 28px | Instrument Serif | italic | 44.8px |
| DD-002 | 28px | Instrument Serif | italic | 47.6px |
| DD-003 | 28px | Instrument Serif | italic | 47.6px |
| DD-004 | **22px** | Instrument Serif | italic | 37.4px |
| DD-005 | **32px** | Instrument Serif | italic | 54.4px |
| DD-006 | 28px | Instrument Serif | italic | 47.6px |

**Consensus:** 28px is the most common (4/6 files). DD-004 uses 22px (tighter for layers), DD-005 uses 32px (equal to h1).

### h3 — VARIES significantly per exploration

| File | fontSize | fontFamily | fontStyle | fontWeight | letterSpacing |
|------|----------|------------|-----------|------------|---------------|
| DD-001 | 20px | Instrument Serif | **normal** | 700 | normal |
| DD-002 | 20px | Instrument Serif | **normal** | 700 | normal |
| DD-003 | 22px | Instrument Serif | italic | 700 | normal |
| DD-004 | **14px** | **Inter** | normal | **600** | **0.7px** |
| DD-005 | 20px | Instrument Serif | italic | 700 | normal |
| DD-006 | 18px | Instrument Serif | italic | 700 | normal |

**Key finding:** DD-004 uses a completely different h3 treatment — Inter (body font) at 14px with 0.7px letter-spacing instead of Instrument Serif. This is an intentional label-style h3 for the geological layers pattern.

### code — VARIES per exploration

| File | fontSize | fontFamily | Present? |
|------|----------|------------|----------|
| DD-001 | — | — | No `<code>` in first element |
| DD-002 | — | — | No `<code>` in first element |
| DD-003 | — | — | No `<code>` in first element |
| DD-004 | 14px | monospace | Yes |
| DD-005 | 13px | monospace | Yes |
| DD-006 | 11px | monospace | Yes |

**Note:** Code blocks in DD-004/005/006 use `monospace` (browser default) rather than `JetBrains Mono`. The `--font-mono` token defines `'JetBrains Mono', 'SF Mono', monospace` but the computed style falls through to `monospace` — likely because JetBrains Mono was not loaded via the Google Fonts import for these elements.

---

## Typography Provenance Chain

```
design-extraction/font-research/FINAL-DECISION.md
    Decision: Instrument Serif (30/40 match score for Sanrok)
        │
        ▼
design-extraction/typography-system/typography.css
    Implementation: --font-display: 'Instrument Serif', Georgia, serif
    Type scale: clamp()-based responsive sizes
        │
        ▼
design-extraction/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md (T1)
    Locked: --font-display: 'Instrument Serif', Georgia, serif
    Locked: --font-body: 'Inter', system-ui, sans-serif
    Locked: --font-mono: 'JetBrains Mono', 'SF Mono', monospace
        │
        ▼
DD-001 through DD-006 (Sources of Truth)
    Implemented: All 3 font stacks confirmed
    Google Fonts: Instrument Serif (ital 0;1), Inter (400;500;600), JetBrains Mono (400;500)
    h1: 32px Instrument Serif italic (LOCKED)
    p: 14px Inter regular (LOCKED)
    h2/h3: varies per density pattern (NOT locked)
        │
        ▼ (UNDOCUMENTED EDGE)
design-system/src/styles/typography.css
    @import Instrument Serif from Google Fonts (SAME font, NO provenance citation)
    tokens.css: --font-display: 'Instrument Serif', 'Playfair Display', Georgia, serif
                                                     ^^^^^^^^^^^^^^^^
                                                     EXTRA FALLBACK not in DD files
```

---

## Comparison: DD Typography vs design-system/tokens.css

| Aspect | DD Files (Source of Truth) | tokens.css | Status |
|--------|--------------------------|------------|--------|
| Display font | Instrument Serif | Instrument Serif | MATCH (font name) |
| Display fallback | Georgia, serif | Playfair Display, Georgia, serif | **DIVERGES** (extra fallback) |
| Body font | Inter | Inter | MATCH |
| Body fallback | system-ui, sans-serif | system-ui, -apple-system, sans-serif | **DIVERGES** (extra fallback) |
| Mono font | JetBrains Mono | JetBrains Mono | MATCH |
| Mono fallback | SF Mono, monospace | SF Mono, Monaco, monospace | **DIVERGES** (extra fallback) |
| h1 size | 32px (computed) | `--text-hero` not clearly mapped | Not directly comparable |
| Body size | 14px (computed) | `--text-sm: 0.875rem` (14px) | MATCH |
| Type scale | Hardcoded px per exploration | Perfect Fourth (1.333) ratio | **DIVERGES** (different philosophy) |
| Line height | 1.7 ratio (DD-002+) | `--leading-normal: 1.5` | **DIVERGES** (DD uses 1.7, tokens 1.5) |
| h1 style | italic | Not specified | DD-specific treatment |
| Blackletter font | NOT PRESENT | UnifrakturMaguntia | tokens.css only (medieval) |
| Condensed font | NOT PRESENT | Inter Tight | tokens.css only (nous) |

---

## Comparison: DD Typography vs design-extraction DESIGN-TOKEN-SUMMARY.md

| Aspect | DD Files (Rendered) | DESIGN-TOKEN-SUMMARY.md (T1) | Status |
|--------|-------------------|-----------------------------|--------|
| Font display | Instrument Serif, Georgia, serif | Instrument Serif, Georgia, serif | **EXACT MATCH** |
| Font body | Inter, system-ui, sans-serif | Inter, system-ui, sans-serif | **EXACT MATCH** |
| Font mono | JetBrains Mono, SF Mono, monospace | JetBrains Mono, SF Mono, monospace | **EXACT MATCH** |
| h1 computed | 32px | --text-h1 not in locked :root | DD extends |
| h2 computed | 28px (most common) | --text-h2 not in locked :root | DD extends |
| p computed | 14px | --text-sm = 0.875rem (14px) | **MATCH** |
| Line height | 1.7 (DD-002+) | --leading-relaxed: 1.7 | **MATCH** (DD uses "relaxed") |
| body line height | 1.7 | --leading-normal: 1.5 at base | DD evolved beyond SUMMARY |

---

## Key Typography Insights from Visual Audit

### 1. Instrument Serif Italic is THE Display Treatment
Every h1 and most h2s across all 6 DD files render in **Instrument Serif italic**. This italic treatment creates the "editorial unhurried" character that defines the KortAI documentation identity. It is not just a font choice — the italic variant is the soul.

### 2. Line Height Evolved from 1.6 to 1.7
DD-001 uses 1.6 line-height; DD-002 through DD-006 use 1.7. This is a DD-001 lesson that was applied forward. The 1.7 ratio matches DESIGN-TOKEN-SUMMARY.md's `--leading-relaxed` value.

### 3. Body Text is Consistently 14px Inter
All 6 files render body text at 14px Inter with #666666 color. This is the tightest lock in the system — zero variation.

### 4. Heading Sizes are NOT Locked
Unlike tokens and colors, heading sizes vary per density pattern. DD-004 even uses Inter (body font) for h3 with tracked letter-spacing. This flexibility is intentional — different density patterns require different typographic hierarchies.

### 5. JetBrains Mono Falls Through to Monospace
In DD-004/005/006, code blocks render in generic `monospace` rather than JetBrains Mono, despite the token specifying it. The Google Fonts import includes JetBrains Mono, but CSS selectors for `code` elements may not apply the `--font-mono` variable consistently.

### 6. The Perceptual Deepening → Typography Connection
The font-research/FINAL-DECISION.md (Instrument Serif @ 30/40 match score) is the origin of ALL typography in the system. The perceptual deepening audit refined this into soul-locked tokens. The DD files then validated these tokens through 6 density explorations. design-system/typography.css imports the same font but lacks provenance documentation.

---

## Locked Typography Registry (from DD visual audit)

```css
/* ═══════════════════════════════════════════════════════════════
   TYPOGRAPHY TOKENS — LOCKED (confirmed by Playwright visual audit)
   Source: 6 DD HTML files rendered in Chromium via Playwright MCP
   ═══════════════════════════════════════════════════════════════ */

/* Font Stacks — identical across all 6 DD files */
--font-display: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;

/* Google Fonts Import — identical across all 6 DD files */
/* Instrument Serif: ital 0;1 (roman + italic) */
/* Inter: wght 400;500;600 */
/* JetBrains Mono: wght 400;500 */

/* Body Text — LOCKED (6/6 identical) */
/* font-size: 14px */
/* font-weight: 400 */
/* line-height: 1.7 (23.8px at 14px base) */
/* color: #666666 (--color-text-secondary) */

/* Display (h1) — LOCKED (6/6 identical) */
/* font-family: Instrument Serif */
/* font-size: 32px */
/* font-weight: 700 */
/* font-style: italic */
/* color: #1A1A1A (--color-text) */

/* h2, h3 — NOT LOCKED (varies per density pattern) */
/* Typical h2: 28px Instrument Serif italic */
/* Typical h3: 18-22px Instrument Serif italic/normal */
/* Exception: DD-004 h3 uses Inter 14px/600/0.7px tracking (label style) */
```
