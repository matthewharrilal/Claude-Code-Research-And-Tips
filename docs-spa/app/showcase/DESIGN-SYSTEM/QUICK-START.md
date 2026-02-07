<!-- ═══════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/QUICK-START.md
Tier: B | Batch: 5 | Generated: 2026-02-06

1. WHY THIS EXISTS
Copy-paste-ready CSS token definitions and base styles for getting
KortAI running immediately. This is the practical on-ramp — everything
a developer needs to start applying the design system without reading
the full research chain.

2. THE QUESTION THIS ANSWERS
"What are the exact CSS variable values I need to copy into my
stylesheet to be KortAI-compliant?"

3. STATUS
COMPLETE — all locked token values present (colors, typography,
geometry, spacing). Values sourced from design-extraction T1 synthesis.

5. BUILT ON
- design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md (CSS token values)
- density-patterns.md (pattern references)
- combination-rules.md (combination methodology)
- anti-patterns/registry.md (what to avoid)

6. MUST HONOR
- Token values are LOCKED — border-radius: 0, box-shadow: none
- Color values must match DESIGN-TOKEN-SUMMARY.md exactly
- Font stack order (Instrument Serif, Inter, JetBrains Mono) is fixed
- Spacing scale must use the defined 4px base unit

8. CONSUMED BY
- DESIGN-SYSTEM/CLAUDE.md (quick reference link)
- guides/migration-guide.md (prerequisite — "load KortAI CSS variables")
- Any downstream developer onboarding

10. DIAGNOSTIC QUESTIONS
Q1: Do all CSS variable values here match DESIGN-TOKEN-SUMMARY.md
    from design-extraction exactly?
Q2: Does border-radius resolve to 0 and box-shadow to none with
    no exceptions?
Q3: Are the font family stacks identical to the locked typography
    tokens in design-extraction T1?

END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════ -->

# Quick Start Guide
## Get KortAI Running in 5 Minutes

═══════════════════════════════════════════════════════════════════════════════

## Step 1: Copy the CSS Variables

Add this to your stylesheet:

```css
:root {
  /* COLORS — LOCKED */
  --color-primary: #E83025;           /* Sanrok red */
  --color-background: #FEF9F5;        /* Warm cream */
  --color-text: #1A1A1A;              /* Near-black */
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* Callout Accents */
  --accent-blue: #4A90D9;             /* Info */
  --accent-green: #4A9D6B;            /* Tip */
  --accent-amber: #D97706;            /* Essence, Reasoning */
  --accent-purple: #7C3AED;           /* Challenge */
  --accent-coral: #C97065;            /* Gotcha alt */

  /* TYPOGRAPHY — LOCKED */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* TYPE SCALE */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-h4: 1.25rem;      /* 20px */
  --text-h3: 1.5rem;       /* 24px */
  --text-h2: 2rem;         /* 32px */
  --text-h1: 2.5rem;       /* 40px */

  /* GEOMETRY — LOCKED */
  --border-radius: 0;                 /* ALWAYS sharp */
  --box-shadow: none;                 /* ALWAYS flat */

  /* SPACING */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
}
```

═══════════════════════════════════════════════════════════════════════════════

## Step 2: Load the Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

═══════════════════════════════════════════════════════════════════════════════

## Step 3: Set Base Styles

```css
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-background);
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 400;
}

h3 {
  font-style: italic;  /* All h3 should be italic */
}

code, pre {
  font-family: var(--font-mono);
}

/* NO ROUNDED CORNERS - EVER */
* {
  border-radius: 0 !important;
}

/* NO SHADOWS - EVER */
* {
  box-shadow: none !important;
}
```

═══════════════════════════════════════════════════════════════════════════════

## Step 4: Create Your First Callout

```html
<!-- Info Callout -->
<aside class="callout callout--info">
  <span class="callout__label">INFO</span>
  <p class="callout__body">
    A word before you proceed...
  </p>
</aside>
```

```css
.callout {
  padding: 24px 20px 28px 20px;  /* Asymmetric! */
  border-left: 4px solid var(--accent-blue);
  background: #F5F8FA;
}

.callout__label {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-blue);
  margin-bottom: 8px;
  display: block;
}

.callout__body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  margin: 0;
}

/* Variants */
.callout--tip { border-color: var(--accent-green); background: #F5FAF5; }
.callout--gotcha { border-color: var(--color-primary); background: #FEF6F5; }
.callout--essence {
  border-color: var(--accent-amber);
  background: var(--color-background);
}
.callout--essence .callout__body {
  font-family: var(--font-display);  /* Serif for essence! */
  font-style: italic;
}
.callout--challenge { border-color: var(--accent-purple); background: #F8F5FF; }
```

═══════════════════════════════════════════════════════════════════════════════

## Step 5: Verify Your Implementation

Run through this checklist:

- [ ] All corners are sharp (0px radius)
- [ ] No shadows anywhere
- [ ] Colors are from the locked palette
- [ ] Callout left borders are 4px
- [ ] h3 elements are italic
- [ ] Display text uses Instrument Serif
- [ ] Body text uses Inter
- [ ] Code uses JetBrains Mono

**If any item fails → Fix before proceeding.**

═══════════════════════════════════════════════════════════════════════════════

## Next Steps

1. **Add more components** → See [components/](./components/)
2. **Choose a density pattern** → See [patterns/density-patterns.md](./patterns/density-patterns.md)
3. **Combine components** → See [patterns/combination-rules.md](./patterns/combination-rules.md)
4. **Avoid anti-patterns** → See [anti-patterns/registry.md](./anti-patterns/registry.md)

═══════════════════════════════════════════════════════════════════════════════

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Using `border-radius: 4px` | Set to `0` — always |
| Adding `box-shadow` for depth | Remove — always flat |
| Using gray backgrounds | Use cream (#FEF9F5) or tinted semantics |
| Sans-serif for Essence body | Use Instrument Serif italic |
| Thin callout borders (1-2px) | Use 4px minimum |
| Stacking Tip + Gotcha adjacent | Separate with whitespace (traffic-light) |
