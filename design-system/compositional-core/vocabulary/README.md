# Vocabulary Layer — Design Tokens

**What this directory contains:** The atomic values (colors, spacing, typography, borders) that compose all KortAI layouts.

**Layer:** 2 (foundations — components and mechanisms build FROM these)

---

## Contents

**1. `tokens.css` (65 tokens)**
- 21 IMMUTABLE tokens (soul + identity — never change)
- 14 MUTABLE tokens (accent, semantic flexibility)
- 30 AVAILABLE tokens (derivable, documented but not mandated)

**2. `tokens-mutability.md` (classification guide)**
- Documents which tokens are locked vs flexible
- Explains WHY immutability matters
- Shows derivation rules (4px base unit → 14 spacing values)

---

## Token Categories

### IMMUTABLE — Soul (3 tokens)

**Never change. Ever. These define KortAI recognition.**

```css
--border-radius: 0;           /* ALWAYS sharp edges */
--box-shadow: none;            /* ALWAYS flat surfaces */
--color-primary: #E83025;      /* Sanrok red - editorial confidence */
```

**Why immutable:** These are soul-level constraints (Layer 1). Changing them = soul violation.

---

### IMMUTABLE — Identity (18 tokens)

**Locked for recognition. Change only with strong justification.**

**Primary colors (6):**
```css
--color-background: #FEF9F5;   /* Warm cream */
--color-text: #1A1A1A;        /* Soft black */
--color-text-secondary: #666;  /* Muted secondary */
--color-border: #E0D5C5;      /* Warm tan */
--color-border-subtle: #F0EBE3; /* Very subtle */
```

**Font families (3):**
```css
--font-display: 'Instrument Serif', Georgia, serif;  /* Editorial authority */
--font-body: 'Inter', system-ui, sans-serif;         /* Functional clarity */
--font-mono: 'JetBrains Mono', 'SF Mono', monospace; /* Technical precision */
```

**Border widths (3):**
```css
--border-structural: 4px;     /* Left accent borders (callouts) */
--border-accent: 3px;         /* Secondary accent weight */
--border-micro: 1px;          /* Subtle dividers, frames */
```

**Spacing anchors (6):**
```css
--space-1: 4px;    /* Base unit */
--space-4: 16px;   /* Standard separation */
--space-8: 32px;   /* Section breaks */
--space-12: 48px;  /* Page margins */
--space-16: 64px;  /* Major sections (EXHALE) */
--space-20: 80px;  /* Recovery breathing */
```

**Why immutable:** These create visual signature. Typography trinity (serif display + sans body + mono code) = editorial voice. Border widths (4px/3px/1px) = hierarchy encoding. Spacing anchors = breathing rhythm.

---

### MUTABLE — Accent (14 tokens)

**Semantic flexibility. Change to fit content needs.**

**Accent colors (5):**
```css
--accent-blue: #4A90D9;    /* Info callout, file tree */
--accent-green: #4A9D6B;   /* Tip callout */
--accent-coral: #C97065;   /* Gotcha callout */
--accent-amber: #D97706;   /* Essence callout */
--accent-purple: #7C3AED;  /* Challenge callout */
```

**Zone backgrounds (6):**
```css
--color-zone-sparse: #FEFCF9;     /* Breathing zones */
--color-zone-dense: #F5F2ED;      /* Density peaks */
--color-zone-breathing: #FDFAF6;  /* Recovery spaces */
--color-code-bg: #1A1A1A;         /* Dark code blocks */
```

**Why mutable:** Semantic flexibility. New callout type? Add new accent color. New density zone? Add new background value.

---

### AVAILABLE — Derivable (30 tokens)

**Documented but not mandated. Agents can derive from base values.**

**Spacing scale (8 additional values):**
```css
--space-2: 8px;    /* Derivable: 4px × 2 */
--space-3: 12px;   /* Derivable: 4px × 3 */
--space-5: 20px;   /* Derivable: 4px × 5 */
--space-6: 24px;   /* Derivable: 4px × 6 */
--space-10: 40px;  /* Derivable: 4px × 10 */
--space-24: 96px;  /* Derivable: 4px × 24 */
```

**Typography scale (8 values):**
```css
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-h3: 1.5rem;    /* 24px */
--text-h2: 2rem;      /* 32px */
--text-h1: 2.5rem;    /* 40px */
--text-display: 3rem; /* 48px */
```

**Why available:** Full scale documented for reference. Agents can use these OR derive new values (e.g., `--space-7: 28px;` = 4px × 7). System permits derivation, doesn't mandate specific values.

---

## How to Use This Directory

### Building New Layouts

**Step 1: Import tokens.css**
```html
<link rel="stylesheet" href="/vocabulary/tokens.css">
```

**Step 2: Use token variables in your CSS**
```css
.my-component {
  background: var(--color-zone-sparse);
  border-left: var(--border-structural) solid var(--accent-blue);
  padding: var(--space-6);
  font-family: var(--font-body);
}
```

**Step 3: Check mutability before changing**
- IMMUTABLE tokens → use as-is
- MUTABLE tokens → safe to override for semantic needs
- AVAILABLE tokens → safe to derive new values

### Adding New Tokens

**When to add:**
- New semantic callout type needs unique color
- New density zone needs unique background
- New component needs unique spacing value

**How to add:**
```css
/* In your component CSS (NOT tokens.css) */
.my-component {
  --my-new-color: #ABC123;  /* Local token */
  background: var(--my-new-color);
}
```

**When to promote to tokens.css:**
- Token appears in 4+ files (MEDIUM confidence)
- Token serves reusable semantic purpose
- Token doesn't violate soul constraints

---

## What NOT to Do

❌ **DO NOT modify IMMUTABLE tokens**
- Changing `--color-primary` → soul violation
- Changing `--border-radius` → instant FAIL
- Changing `--font-display` → destroys editorial voice

❌ **DO NOT use off-grid spacing**
- `padding: 13px;` → violates 4px base unit
- `margin: 7px;` → off-grid
- Use derivable values: `--space-3` (12px), `--space-4` (16px)

❌ **DO NOT add pure black or pure white**
- `#000` → prohibited (use `--color-text: #1A1A1A`)
- `#FFF` → prohibited (use `--color-background: #FEF9F5`)

❌ **DO NOT add gradient backgrounds**
- `linear-gradient()` → prohibited
- `radial-gradient()` → prohibited
- Use zone differentiation (background alternation) instead

---

## Derivation Rules

**Spacing:**
- Base unit: `4px`
- All spacing values MUST be multiples of 4px
- Derive new values: `new-value = 4px × N`
- Example: Need 28px? → `4px × 7 = 28px` ✅

**Typography:**
- Base size: `1rem` (16px)
- Scale uses modular scale (1.25 ratio for display, 1.125 for body)
- Derive new sizes: stay within 12px–48px range

**Colors:**
- No pure black (`#000`) or pure white (`#FFF`)
- Primary red locked (`#E83025`)
- New accent colors: check contrast ratio (WCAG AA minimum)

**Borders:**
- 3-category system: 4px (structural), 3px (accent), 1px (micro)
- No 2px borders (EXCEPT geological confidence encoding — see prohibitions)
- Derive depth via border-weight gradient, NOT shadows

---

## Relationship to Other Layers

**Layer 1 (Identity):**
- Soul constraints implemented as tokens: `--border-radius: 0;`
- Prohibitions enforced via token values: no pure black/white

**Layer 3 (Grammar):**
- Mechanisms reference tokens: "Border-weight gradient uses `--border-structural` (4px)"
- Compositional rules assume token system: "Spacing compression uses `--space-1` through `--space-20`"

**Layer 4 (Components):**
- All components built FROM tokens
- Component CSS uses `var(--token-name)` not hardcoded values

**Layer 5 (Case Studies):**
- Metaphors work WITHIN token constraints
- Geological uses `--border-accent` (3px) for confidence encoding

---

## Why This Layer Exists

**Tokens are ATOMIC values (not compounds).**

Without tokens:
- Components hardcode values (`background: #FEF9F5;`)
- Changing colors requires find-replace across 100+ files
- No single source of truth

With tokens:
- Components reference variables (`background: var(--color-background);`)
- Changing colors = edit 1 file (`tokens.css`)
- Single source of truth

**Tokens separate WHAT (values) from WHERE (usage).**

---

## File Metadata

**Vocabulary layer files:** 2
**Total tokens:** 65 (21 immutable, 14 mutable, 30 available)
**Base unit:** 4px (spacing), 1rem (typography)
**Extraction lens:** Identity + Enablement (tokens are foundation, not constraint)
**Validation:** 100% component compliance (all 34 components use token variables)
**Next review:** After Phase D-V builds (check for new token needs)

---

**USE TOKENS. DON'T HARDCODE.**
