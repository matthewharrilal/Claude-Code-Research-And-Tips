<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/tokens/colors.md
Tier: B | Batch: 5 | Generated: 2026-02-06
═══════════════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
This file is the canonical color token registry for the KortAI design system.
It locks every color value used across the system — primaries, accents,
backgrounds, and semantic colors — ensuring visual consistency and soul
compliance. All color decisions trace back to the T1 DESIGN-TOKEN-SUMMARY.md
synthesis. Without this file, components would drift into arbitrary palettes.

2. THE QUESTION THIS ANSWERS
"What is the exact hex value for any color in the KortAI system, and what
semantic role does it serve?"

3. STATUS
ACTIVE — Canonical source of truth for all color tokens

5. BUILT ON
| Source | Role | Key Values | Path |
|--------|------|------------|------|
| DESIGN-TOKEN-SUMMARY.md | T1 origin of locked values | All core color definitions | design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md |
| COLOR-TOKENS.md | Tracking reference (some drift) | Historical color tracking | design-extraction/component-system/perceptual-audit-v2/tracking/COLOR-TOKENS.md |

6. MUST HONOR
| # | Constraint | Rationale |
|---|-----------|-----------|
| 1 | --color-primary: #E83025 (LOCKED) | Sanrok red — editorial confidence; T1 locked value |
| 2 | --color-bg / --color-background: #FEF9F5 (LOCKED) | Warm cream — not sterile white; T1 locked value |
| 3 | --color-text: #1A1A1A (LOCKED) | Near-black — softer than #000; T1 locked value |
| 4 | --color-border: #E0D5C5 (LOCKED) | Warm border tone; T1 locked value |
| 5 | design-system/ directory values are WRONG | #FF0000, #FBF5EF, #171717 are DIVERGENT — never use those |
| 6 | Any deviation from T1 values is a soul violation | Colors are identity; wrong color = wrong soul |

8. CONSUMED BY
| Consumer | How It Uses This File |
|----------|----------------------|
| All explorations (DD-XXX, OD-XXX, AD-XXX, CD-XXX) | CSS variable values for color application |
| DESIGN-SYSTEM/README.md | References color tokens as locked soul constraints |
| Components (implicit) | All visual components inherit these color variables |
| Migration guide | Color compliance checklist during page migration |
| Perceptual Depth Audit sub-agents | Verification target for soul compliance checks |

10. DIAGNOSTIC QUESTIONS
Q1: Does every component in the system use --color-primary: #E83025 and NOT
    #FF0000 or any other red variant?
Q2: Is --color-background set to #FEF9F5 everywhere, with zero instances of
    #FBF5EF or plain #FFFFFF as the page ground?
Q3: Can you trace every color used in a given exploration back to a token
    defined in this file?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
 -->

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
