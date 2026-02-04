# Color Tokens
## Locked KortAI Color Palette

═══════════════════════════════════════════════════════════════════════════════

## Core Colors (LOCKED)

```css
:root {
  --color-primary: #E83025;           /* Sanrok red - editorial confidence */
  --color-background: #FEF9F5;        /* Warm cream - not sterile white */
  --color-text: #1A1A1A;              /* Near-black - softer than #000 */
  --color-text-secondary: #666666;    /* Muted secondary text */
  --color-border: #E0D5C5;            /* Warm border tone */
  --color-border-subtle: #F0EBE3;     /* Very subtle dividers */
}
```

═══════════════════════════════════════════════════════════════════════════════

## Accent Colors (Semantic)

```css
:root {
  --accent-blue: #4A90D9;    /* Info Callout, File Tree */
  --accent-green: #4A9D6B;   /* Tip Callout */
  --accent-coral: #C97065;   /* Gotcha Callout (alternative) */
  --accent-amber: #D97706;   /* Essence Callout, Reasoning */
  --accent-purple: #7C3AED;  /* Challenge Callout */
}
```

═══════════════════════════════════════════════════════════════════════════════

## Background Colors (Zone Differentiation)

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-page` | #FAFAFA | Page ground |
| `bg-card` | #FFFFFF | Elevated zones |
| `bg-warm` | #FEF9F5 | Warm emphasis (Essence) |
| `bg-dark` | #1E1E1E | Inverted focus (Code Snippet) |
| `bg-info` | #F5F8FA | Info semantic |
| `bg-tip` | #F5FAF5 | Tip semantic |
| `bg-gotcha` | #FEF6F5 | Warning semantic |
| `bg-summary` | #FEF9F0 | Synthesis (Reasoning) |

═══════════════════════════════════════════════════════════════════════════════

## Text Colors (Hierarchy)

| Token | Hex | Structural Role |
|-------|-----|-----------------|
| `text-primary` | #1A1A1A | "This is important" |
| `text-secondary` | #444444 | "This explains" |
| `text-tertiary` | #888888 | "This is supporting" |
| `text-muted` | #AAAAAA | "This recedes" |
| `text-inverse` | #FFFFFF | Dark background content |

═══════════════════════════════════════════════════════════════════════════════

## Rules

1. **Limited Palette** — Red + cream + black. No grays beyond hierarchy.
2. **Semantic Colors** — Accents signal meaning, not decoration.
3. **No Traffic Light** — Never place green (#4A9D6B) adjacent to red (#E83025).
4. **Warm Over Cool** — Prefer cream (#FEF9F5) over pure white.
