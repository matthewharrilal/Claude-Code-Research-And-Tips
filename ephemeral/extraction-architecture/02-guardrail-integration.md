# Research Report: Guardrail Integration Into Extraction Layers

## Metadata
- **Researcher**: guardrail-researcher
- **Date**: 2026-02-13
- **Task**: #2 (Research guardrail integration into extraction layers)
- **Status**: COMPLETE

---

## Executive Summary

The perceptual-auditing skill contains 48 qualitative questions AND 8 quantitative guardrails with specific numeric thresholds. These guardrails currently fire ONLY when the skill is invoked — catching violations after they occur. The user's insight: **"If we're going to be auditing for these things and fixing them, why not enforce them from the beginning?"**

**The answer is layered.** Some guardrails CAN be enforced at the CSS/token level (hard floors that agents cannot violate). Others MUST remain in the perceptual-auditing skill because they require contextual judgment. The key is understanding which enforcement layer serves each guardrail.

**Core finding:** Guardrails split into THREE enforcement layers:
1. **Token-level** (defaults, overridable with intent): Min/max values as CSS custom property defaults
2. **Skill-level** (judgment required, audit-time): Contextual thresholds requiring content/metaphor awareness
3. **Documentation-level** (compositional guidance): Ratios and relationships that can't be CSS-enforced

The tension-composition skill already uses this pattern. Phase 4.0 added "Guardrail Compliance Gates" that prevent metaphor properties from violating perceptual floors. This research extends that pattern BACKWARD into the extraction layer.

---

## 1. Complete Guardrail Inventory from Perceptual-Auditing Skill

From `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/SKILL.md` (lines 148-219), I extracted ALL quantitative guardrails:

### Content Width and Proportion (at 1440px viewport)

| Guardrail | Minimum | Optimal | Maximum | What It Prevents |
|-----------|---------|---------|---------|------------------|
| **Content container width** | 640px (44%) | 700-960px (49-67%) | 1280px (89%) | Over-compression, wasted horizontal space |
| **Characters per line (CPL)** | 45 | 60-66 | 80 | Reading fatigue, line tracking loss |
| **Content-to-viewport ratio** | 44% | 65-80% | 89% | Narrow-column-in-wide-viewport syndrome |

### Typographic Spacing

| Guardrail | Minimum | Optimal | Maximum | What It Prevents |
|-----------|---------|---------|---------|------------------|
| **Body line-height** | 1.5 (WCAG) | 1.5-1.6 | 1.8 | Reading discomfort, line collision |
| **Heading line-height** | 1.2 | 1.25-1.3 | 1.4 | Display type too loose |
| **Space after heading** | 12px (0.75rem) | 16-24px (1-1.5rem) | 32px (2rem) | Heading-body disconnect |
| **Space before heading** | 24px (1.5rem) | 32-48px (2-3rem) | 64px (4rem) | Loss of visual hierarchy |
| **Label-to-heading gap** | 8px (0.5rem) | 12-16px (0.75-1rem) | 24px (1.5rem) | Label-heading collision |
| **Paragraph gap** | 16px (1rem) | 20-24px (1.25-1.5rem) | 32px (2rem) | Text wall syndrome |

### Layout and Grid Spacing

| Guardrail | Minimum | Optimal | Maximum | What It Prevents |
|-----------|---------|---------|---------|------------------|
| **Horizontal padding (desktop)** | 32px (2rem) | 40-64px (2.5-4rem) | 80px (5rem) | Edge collision at 1440px |
| **Horizontal padding (mobile)** | 16px (1rem) | 20-24px (1.25-1.5rem) | 32px (2rem) | Edge collision at 375-768px |
| **Column gap (grid)** | 16px (1rem) | 24-32px (1.5-2rem) | 48px (3rem) | Grid islands feeling disconnected |
| **Section vertical spacing** | 48px (3rem) | 60-80px (3.75-5rem) | 160px (10rem) | Sections running together, dead zones |
| **Breathing zone clearance** | 40px (2.5rem) | 60-80px (3.75-5rem) | 120px (7.5rem) | Focal elements cramped |

### Compression Limits

| Guardrail | Minimum | Optimal | Maximum | What It Prevents |
|-----------|---------|---------|---------|------------------|
| **Padding compression ratio** | 40% | 50-60% | 100% | Deepest section feels crushed (deepest padding must be ≥40% of shallowest) |
| **Line-height floor (body)** | 1.4 | 1.5 | — | Never go below 1.4 for any body text |
| **Line-height floor (headings)** | 1.2 | 1.25 | — | Never go below 1.2 for any heading |
| **Content-to-space ratio** | 50/50 | 55-65% content | 70/30 | Above 70% content = cramped, below 40% = wasteful |

### Hierarchy and Weight

| Guardrail | Minimum | Optimal | Maximum | What It Prevents |
|-----------|---------|---------|---------|------------------|
| **Space above heading** | 1.5× below | 1.5-2× below | — | Heading visually attached to wrong section |
| **Macro whitespace allocation** | 30% of layout | 35-45% | 60% | Insufficient breathing room, over-empty wasteland |
| **Heading size scale** | 1.3× body | 1.4-1.6× body | 3.5× body (H1) | Weak hierarchy, overwhelming headings |

**Total:** 23 quantitative guardrails with specific numeric thresholds.

---

## 2. Enforcement Layer Classification

For EACH guardrail, I determined the right enforcement layer:

### 2.1 TOKEN-LEVEL ENFORCEMENT (CSS Custom Property Defaults)

**When to use:** Guardrails with fixed numeric floors/ceilings that apply universally.

**Mechanism:** CSS custom properties with default values. Tier 3 layouts can override with INTENT.

| Guardrail | Token Name | Default Value | Overridable? |
|-----------|------------|---------------|--------------|
| **Body line-height floor** | `--line-height-body-min` | `1.5` | YES (with caution) |
| **Heading line-height floor** | `--line-height-heading-min` | `1.2` | YES (with caution) |
| **Horizontal padding (desktop)** | `--padding-horizontal-desktop` | `32px` | YES |
| **Horizontal padding (mobile)** | `--padding-horizontal-mobile` | `16px` | YES |
| **Column gap (grid)** | `--grid-gap` | `24px` | YES |
| **Section vertical spacing min** | `--section-spacing-min` | `48px` | YES |
| **Breathing zone clearance min** | `--breathing-zone-min` | `40px` | YES |
| **Label-to-heading gap min** | `--label-heading-gap-min` | `8px` | YES |
| **Paragraph gap min** | `--paragraph-gap-min` | `16px` | YES |

**Example token CSS:**

```css
:root {
  /* Readability floors (WCAG + editorial quality) */
  --line-height-body-min: 1.5;       /* WCAG minimum, never go below */
  --line-height-heading-min: 1.2;     /* Display type floor */

  /* Spacing floors (perceptual comfort) */
  --padding-horizontal-desktop: 32px; /* Edge collision prevention at 1440px */
  --padding-horizontal-mobile: 16px;  /* Edge collision prevention at 375-768px */
  --section-spacing-min: 48px;        /* Sections must breathe */
  --breathing-zone-min: 40px;         /* Focal elements need clearance */
  --grid-gap: 24px;                   /* Standard grid separation */

  /* Typography spacing floors */
  --label-heading-gap-min: 8px;       /* Prevent label-heading collision */
  --paragraph-gap-min: 16px;          /* Prevent text wall syndrome */
  --heading-space-after-min: 12px;    /* Heading-body disconnect floor */
  --heading-space-before-min: 24px;   /* Visual hierarchy floor */
}
```

**Usage pattern in Tier 2 components:**

```css
/* Tier 2 Callout Component */
.callout {
  padding: var(--callout-padding, 20px 24px);
  margin: var(--callout-margin, 24px 0);
  line-height: var(--callout-line-height, var(--line-height-body-min));
}

/* Tier 2 Container */
.page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-12) var(--padding-horizontal-desktop); /* Guardrail enforced */
}

@media (max-width: 768px) {
  .page-container {
    padding: var(--space-8) var(--padding-horizontal-mobile); /* Guardrail enforced */
  }
}
```

**Override pattern in Tier 3 metaphor contexts:**

```css
/* Geological metaphor INTENTIONALLY compresses padding at depth */
.stratum--bedrock {
  --callout-padding: 12px 20px;  /* Below normal, but ABOVE compression ratio floor */
  --callout-margin: 12px 0;
  --section-spacing-min: 32px;   /* Compressed but still breathing */
}

/* Verification: 12px ≥ 40% of 32px (maximum) → 12 ≥ 12.8px → FAILS */
/* Adjust: 16px ≥ 40% of 40px → 16 ≥ 16px → PASSES */
```

**Token enforcement ensures agents CANNOT accidentally violate floors without EXPLICIT override.**

---

### 2.2 SKILL-LEVEL ENFORCEMENT (Perceptual Audit, Judgment Required)

**When to use:** Guardrails requiring contextual judgment or cross-element measurement.

**Mechanism:** These stay in perceptual-auditing skill. They fire during audit, NOT during build.

| Guardrail | Why Skill-Level? | Judgment Required |
|-----------|------------------|-------------------|
| **Content container width (640-960px)** | Viewport-dependent, content-dependent | Is THIS content comfortable at THIS width? |
| **Characters per line (45-80)** | Font-size dependent, content-dependent | Measure ACTUAL rendered CPL, not theoretical |
| **Content-to-viewport ratio (44-89%)** | Metaphor-dependent | Geological narrowing is INTENTIONAL; detect ACCIDENTAL compression |
| **Padding compression ratio (40% floor)** | Cross-section comparison | Must compare deepest padding to shallowest padding across PAGE |
| **Content-to-space ratio (50/50 to 70/30)** | Page-level measurement | Requires measuring all content vs all whitespace |
| **Space above heading ≥ 1.5× below** | Element-pair relationship | Must measure space-before vs space-after for EACH heading |
| **Macro whitespace allocation (30-60%)** | Page-level aesthetic | Judgment call: does whitespace feel purposeful or wasteful? |
| **Heading size scale (1.3-3.5× body)** | Typography hierarchy judgment | Are headings EFFECTIVELY differentiated, not just numerically? |

**Example audit finding (from skill):**

```markdown
## PA-02: Is any text uncomfortable to read?

YES — Section 4 ("Evidence Analysis") has 82 CPL at 1440px viewport.
- Measured: 16px font-size × 70ch max-width = ~70-75 chars actual
- EXCEEDS guardrail maximum of 80 CPL
- Cause: max-width: 80ch instead of 70ch
- Fix: Reduce max-width to 70ch
```

**Why these can't be CSS-enforced:**
- **CPL requires rendering measurement** — can't calculate from CSS alone (font-family, font-size, letter-spacing, max-width all interact)
- **Compression ratio requires page-level scan** — CSS can't compare "deepest section padding" to "shallowest section padding" across entire page
- **Metaphor intentionality** — geological narrowing LOOKS like over-compression but is INTENTIONAL; skill distinguishes intent from accident

**Skill enforcement catches violations AFTER building, when content + metaphor + viewport are all known.**

---

### 2.3 DOCUMENTATION-LEVEL ENFORCEMENT (Compositional Guidance)

**When to use:** Guardrails that are prose rules, not CSS-enforceable.

**Mechanism:** Document as compositional guidance in Tier 2.5/Tier 3 strategy recipes.

| Guardrail | Why Documentation-Level? | Where Documented |
|-----------|--------------------------|------------------|
| **Padding compression ratio (40% floor)** | Requires page-level reasoning about density | Tier 3 Geological Strata recipe: "Verify compression ratio: deepest ≥ 40% of shallowest" |
| **Content-to-space ratio (50/50 to 70/30)** | Aesthetic judgment about "cramped" vs "wasteful" | Tier 3 Editorial Synthesis recipe: "Aim for 60% content, 40% whitespace for editorial feel" |
| **Macro whitespace allocation (30-60%)** | Page-level aesthetic balance | Tier 2.5 Bento Grid guidance: "Ocean (gaps) should be 35-45% of total page area" |

**Example documentation (Tier 3 Geological Strata recipe):**

```markdown
### Composition Recipe Step 7: Verify Compression Ratio

After setting padding per confidence level, verify compression ratio guardrail:

**Compression Ratio Formula:** `deepest_padding / shallowest_padding ≥ 0.40`

**Example:**
- Shallowest (Established): 40px padding
- Deepest (Open): 16px padding
- Ratio: 16 / 40 = 0.40 → PASSES

**If ratio < 0.40:** Either increase deepest padding OR reduce shallowest padding.

**Why this matters:** Compression ratio below 40% creates perceptual "crushing" at depth. The metaphor (geological compression) should be FELT, not PAINFUL.
```

**Documentation enforcement provides REASONING and VERIFICATION PROCEDURES for builders to self-check.**

---

## 3. Concrete CSS Code for Token-Level Enforcement

### 3.1 Updated `:root` Block with Guardrail Tokens

```css
:root {
  /* ═══════════════════════════════════════════════════════════════ */
  /* EXISTING TOKENS (from design-system/tokens/) */
  /* ═══════════════════════════════════════════════════════════════ */

  /* Colors (locked) */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  /* ... (full color palette) */

  /* Typography (locked) */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  --text-base: 1rem; /* 16px */
  /* ... (type scale) */

  /* Spacing (locked) */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  /* ... (full scale) */

  /* Geometry (locked) */
  --border-radius: 0;  /* SOUL PIECE #1 */
  --box-shadow: none;  /* SOUL PIECE #4 */

  /* ═══════════════════════════════════════════════════════════════ */
  /* NEW: PERCEPTUAL GUARDRAIL TOKENS */
  /* ═══════════════════════════════════════════════════════════════ */

  /* Readability Floors (WCAG + Editorial Quality) */
  --line-height-body-min: 1.5;        /* WCAG minimum, never go below */
  --line-height-body-optimal: 1.6;    /* Editorial quality sweet spot */
  --line-height-heading-min: 1.2;     /* Display type floor */
  --line-height-heading-optimal: 1.25; /* Display type sweet spot */

  /* Content Width Guardrails (at 1440px viewport) */
  --content-width-min: 640px;         /* 44% of 1440px — minimum container width */
  --content-width-optimal: 940px;     /* 65% of 1440px — sweet spot */
  --content-width-max: 1280px;        /* 89% of 1440px — maximum before wasteful */

  /* Spacing Guardrails (Perceptual Comfort) */
  --padding-horizontal-desktop: 32px; /* Edge collision prevention at 1440px */
  --padding-horizontal-mobile: 16px;  /* Edge collision prevention at 375-768px */
  --section-spacing-min: 48px;        /* Sections must breathe */
  --breathing-zone-min: 40px;         /* Focal elements need clearance */
  --grid-gap-min: 16px;               /* Grid islands too close below this */
  --grid-gap-optimal: 24px;           /* Standard grid separation */

  /* Typography Spacing Guardrails */
  --label-heading-gap-min: 8px;       /* Prevent label-heading collision */
  --paragraph-gap-min: 16px;          /* Prevent text wall syndrome */
  --heading-space-after-min: 12px;    /* Heading-body disconnect floor */
  --heading-space-before-min: 24px;   /* Visual hierarchy floor */

  /* Compression Floors (for Tier 3 Metaphor Safety) */
  --padding-compression-ratio-min: 0.40; /* Deepest ≥ 40% of shallowest */
  --content-space-ratio-min: 0.50;    /* Content ≥ 50% of total area */
  --content-space-ratio-max: 0.70;    /* Content ≤ 70% of total area */
}
```

### 3.2 Tier 2 Component CSS Using Guardrail Tokens

```css
/* ═══════════════════════════════════════════════════════════════ */
/* Tier 2 Callout Component (with guardrails baked in) */
/* ═══════════════════════════════════════════════════════════════ */

.callout {
  border-left: 4px solid var(--callout-border-color);
  padding: var(--callout-padding, 20px 24px);
  margin: var(--callout-margin, 24px 0);
  background: var(--callout-bg, var(--color-zone-sparse));
  line-height: var(--callout-line-height, var(--line-height-body-optimal)); /* Guardrail */
}

.callout__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: max(var(--space-2), var(--label-heading-gap-min)); /* Guardrail floor */
}

.callout__body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: var(--line-height-body-optimal); /* Guardrail enforced */
}

.callout__body p + p {
  margin-top: max(var(--space-4), var(--paragraph-gap-min)); /* Guardrail floor */
}

/* ═══════════════════════════════════════════════════════════════ */
/* Tier 2 Container Component (with guardrails baked in) */
/* ═══════════════════════════════════════════════════════════════ */

.page-container {
  max-width: var(--content-width-optimal); /* Guardrail: 940px default */
  min-width: var(--content-width-min);     /* Guardrail: 640px floor */
  margin: 0 auto;
  padding: var(--space-12) var(--padding-horizontal-desktop); /* Guardrail: 32px min */
}

@media (max-width: 768px) {
  .page-container {
    padding: var(--space-8) var(--padding-horizontal-mobile); /* Guardrail: 16px min */
  }
}

/* ═══════════════════════════════════════════════════════════════ */
/* Tier 2 Section Component (with vertical spacing guardrails) */
/* ═══════════════════════════════════════════════════════════════ */

.section {
  padding: var(--section-padding, var(--space-12));
  margin-bottom: max(var(--section-spacing, var(--space-12)), var(--section-spacing-min)); /* Guardrail floor */
}

.section h2 {
  font-family: var(--font-display);
  font-size: var(--type-section);
  line-height: var(--line-height-heading-optimal); /* Guardrail enforced */
  margin-top: max(var(--space-8), var(--heading-space-before-min)); /* Guardrail floor */
  margin-bottom: max(var(--space-4), var(--heading-space-after-min)); /* Guardrail floor */
}

/* ═══════════════════════════════════════════════════════════════ */
/* Tier 2.5 Bento Grid (with grid gap guardrails) */
/* ═══════════════════════════════════════════════════════════════ */

.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: max(var(--bento-gap, var(--grid-gap-optimal)), var(--grid-gap-min)); /* Guardrail floor */
}

.bento-cell {
  border: 3px solid var(--color-border);
  padding: var(--space-6);
  background: var(--color-zone-dense);
  min-width: var(--content-width-min); /* Guardrail: prevents crushing */
}
```

### 3.3 Tier 3 Override Pattern (Geological Metaphor Example)

```css
/* ═══════════════════════════════════════════════════════════════ */
/* Tier 3 Geological Strata (INTENTIONAL compression with safety) */
/* ═══════════════════════════════════════════════════════════════ */

.stratum {
  background: var(--color-zone-sparse);
  padding: var(--stratum-padding, var(--space-10)); /* Default 40px */
  margin-bottom: var(--section-spacing-min); /* Guardrail enforced */
}

.stratum--established {
  --stratum-padding: var(--space-10);  /* 40px — shallowest */
  border-left: 4px solid var(--color-text);
}

.stratum--probable {
  --stratum-padding: var(--space-8);   /* 32px */
  border-left: 3px solid var(--color-text);
  background: var(--color-zone-dense);
}

.stratum--speculative {
  --stratum-padding: var(--space-6);   /* 24px */
  border-left: 2px solid var(--color-text); /* INTENTIONAL semantic 2px */
  background: var(--color-zone-breathing);
}

.stratum--open {
  /* CRITICAL COMPRESSION RATIO CHECK */
  /* Goal: 16px ≥ 40% of 40px (shallowest) */
  /* Calculation: 16 / 40 = 0.40 → PASSES */
  --stratum-padding: var(--space-4);   /* 16px — deepest, AT FLOOR */
  border-left: 1px solid var(--color-border);
  background: var(--color-text);
  color: var(--color-background);
}

/* Context override: callouts within compressed strata */
.stratum--speculative .callout,
.stratum--open .callout {
  --callout-padding: 16px 20px;  /* Compressed but still ≥ 16px vertical */
  --callout-bg: transparent;
}
```

---

## 4. Risks of CSS-Level Enforcement (Over-Rigidity Analysis)

**The concern:** Does CSS-level enforcement create rigidity that prevents legitimate compositional freedom?

### 4.1 The "min-width Trap" (Legitimate Narrowing)

**Scenario:** A metaphor INTENTIONALLY narrows a container below 640px to encode geological compression.

**Risk:** CSS enforces `min-width: var(--content-width-min)` (640px), making intentional narrowing impossible.

**Solution:** Guardrail tokens are DEFAULTS, not hard constraints.

```css
/* DEFAULT: Guardrail enforced */
.page-container {
  min-width: var(--content-width-min); /* 640px */
}

/* OVERRIDE: Metaphor INTENTIONALLY narrows */
.geological-core-sample {
  min-width: 480px; /* INTENTIONAL compression below guardrail */
  /* Documented in Tier 3 recipe: "Core sample metaphor uses 480px
     to encode physical cylinder constraint. Validated via perceptual
     audit: PA-02 PASS (text still comfortable at 16px font-size)." */
}
```

**Key:** Override is EXPLICIT. Agent must write `min-width: 480px` intentionally, not accidentally fall below 640px.

### 4.2 The "line-height Override" (Display Type Tightening)

**Scenario:** A display heading INTENTIONALLY uses line-height 1.1 for editorial density.

**Risk:** CSS enforces `line-height: var(--line-height-heading-min)` (1.2), preventing tighter spacing.

**Solution:** Same override pattern.

```css
/* DEFAULT: Guardrail enforced */
h1 {
  line-height: var(--line-height-heading-optimal); /* 1.25 */
}

/* OVERRIDE: Editorial density */
.editorial-hero h1 {
  line-height: 1.1; /* INTENTIONAL tightening below guardrail */
  font-size: var(--type-display); /* 3rem / 48px */
  /* Perceptual audit note: PA-07 PASS — single-line hero title,
     no line-tracking issues. Tight leading creates editorial impact. */
}
```

**Key:** Agent must CHOOSE to violate guardrail, not accidentally drift below it.

### 4.3 The "Section Spacing Compression" (Dense Climax)

**Scenario:** CRESCENDO metaphor compresses section spacing to 32px at climax (below 48px guardrail).

**Risk:** CSS enforces `margin-bottom: max(var(--section-spacing), var(--section-spacing-min))` (48px), preventing compression.

**Solution:** Override with INTENT.

```css
/* DEFAULT: Guardrail enforced */
.section {
  margin-bottom: max(var(--section-spacing), var(--section-spacing-min)); /* 48px floor */
}

/* OVERRIDE: CRESCENDO climax compression */
.crescendo-climax .section {
  margin-bottom: var(--space-8); /* 32px — INTENTIONAL compression */
  /* Tier 3 CRESCENDO recipe documents this as "Peak density at climax.
     Verified compression ratio: 32px ≥ 40% of 80px (intro spacing) →
     32 / 80 = 0.40 → PASSES compression ratio guardrail." */
}
```

**Key:** Compression is DOCUMENTED in Tier 3 recipe, not accidental drift.

---

### 4.4 Summary: Rigidity Risk Mitigation

| Risk | Mitigation Strategy |
|------|---------------------|
| **Legitimate narrowing prevented** | Guardrails are CSS custom property DEFAULTS. Tier 3 layouts override with INTENT. |
| **Display type tightening prevented** | Same — override pattern with perceptual audit documentation. |
| **Compositional freedom lost** | Guardrails prevent ACCIDENTS, not CHOICES. Explicit overrides preserve freedom. |
| **Metaphor expression blocked** | Tier 3 recipes document WHEN and WHY to override guardrails for metaphor needs. |

**Core principle:** Guardrails are FLOORS, not CEILINGS. You can go below them WITH INTENT and DOCUMENTATION.

---

## 5. How Other Design Systems Enforce Guardrails

### 5.1 Material Design (Google)

**Enforcement:** Typography guardrails via `clamp()` for responsive scaling.

```css
h1 {
  font-size: clamp(2rem, 5vw, 3rem); /* Min 32px, scales with viewport, max 48px */
  line-height: 1.2; /* Hard floor, no responsive variation */
}
```

**Takeaway:** `clamp()` enforces min/max simultaneously. Could be used for content-width guardrails.

### 5.2 Carbon Design System (IBM)

**Enforcement:** Spacing via tokens + layout components with locked padding.

```css
:root {
  --spacing-03: 0.5rem; /* 8px */
  --spacing-05: 1rem;   /* 16px */
  --spacing-07: 2rem;   /* 32px */
}

.container {
  padding: var(--spacing-07); /* Locked to token, not arbitrary values */
}
```

**Takeaway:** Token-only enforcement. Arbitrary values are anti-patterns.

### 5.3 Polaris (Shopify)

**Enforcement:** Layout constraints via wrapper components with min/max constraints.

```css
.page-wrapper {
  max-width: min(100%, 90rem); /* Never exceed 90rem OR viewport width */
  min-width: 20rem;            /* Never narrow below 20rem */
  padding-inline: max(1rem, 5vw); /* Min 1rem OR 5% of viewport */
}
```

**Takeaway:** `min()` and `max()` functions enforce constraints dynamically.

---

## 6. Proposed Layering: What Goes Where

### Token Layer (Tier 1)

**What:** Numeric floors/ceilings as CSS custom property defaults.

| Guardrail | Token Name | Value |
|-----------|------------|-------|
| Body line-height floor | `--line-height-body-min` | `1.5` |
| Heading line-height floor | `--line-height-heading-min` | `1.2` |
| Horizontal padding (desktop) | `--padding-horizontal-desktop` | `32px` |
| Horizontal padding (mobile) | `--padding-horizontal-mobile` | `16px` |
| Section spacing floor | `--section-spacing-min` | `48px` |
| Grid gap floor | `--grid-gap-min` | `16px` |
| Label-to-heading gap floor | `--label-heading-gap-min` | `8px` |
| Paragraph gap floor | `--paragraph-gap-min` | `16px` |

**Output:** Add to `design-system/tokens/guardrails.css` (NEW FILE, ~40 lines).

---

### Skill Layer (Perceptual Audit)

**What:** Context-dependent thresholds requiring judgment.

| Guardrail | Why Skill-Level? |
|-----------|------------------|
| Content container width (640-960px) | Viewport + content dependent |
| Characters per line (45-80) | Rendering measurement required |
| Padding compression ratio (40% floor) | Cross-section comparison |
| Content-to-space ratio (50/50 to 70/30) | Page-level aesthetic judgment |
| Space above heading ≥ 1.5× below | Element-pair relationship |

**Output:** Already in `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/SKILL.md` (lines 148-219). No changes needed.

---

### Documentation Layer (Tier 2.5/Tier 3 Recipes)

**What:** Compositional guidance with verification procedures.

| Guardrail | Where Documented |
|-----------|------------------|
| Padding compression ratio verification | Tier 3 Geological Strata recipe |
| Content-to-space ratio guidance | Tier 3 Editorial Synthesis recipe |
| Macro whitespace allocation targets | Tier 2.5 Bento Grid guidance |

**Output:** Integrated into `design-system/pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md` (ALREADY EXISTS, lines 1046-1059 show compression ratio verification in Geological Strata recipe).

---

## 7. Concrete Proposal: New `guardrails.css` Token File

```css
/* ═══════════════════════════════════════════════════════════════ */
/* design-system/tokens/guardrails.css */
/* Perceptual Guardrail Tokens — Floors to Prevent Accidents */
/* ═══════════════════════════════════════════════════════════════ */

:root {
  /* ───────────────────────────────────────────────────────────── */
  /* READABILITY FLOORS (WCAG + Editorial Quality) */
  /* ───────────────────────────────────────────────────────────── */

  --line-height-body-min: 1.5;        /* WCAG AA minimum */
  --line-height-body-optimal: 1.6;    /* Editorial sweet spot */
  --line-height-heading-min: 1.2;     /* Display type floor */
  --line-height-heading-optimal: 1.25; /* Display type sweet spot */

  /* ───────────────────────────────────────────────────────────── */
  /* CONTENT WIDTH GUARDRAILS (at 1440px viewport) */
  /* ───────────────────────────────────────────────────────────── */

  --content-width-min: 640px;         /* 44% of 1440px — absolute floor */
  --content-width-optimal: 940px;     /* 65% of 1440px — sweet spot */
  --content-width-max: 1280px;        /* 89% of 1440px — wasteful above */

  /* ───────────────────────────────────────────────────────────── */
  /* SPACING GUARDRAILS (Perceptual Comfort) */
  /* ───────────────────────────────────────────────────────────── */

  --padding-horizontal-desktop: 32px; /* Edge collision floor at 1440px */
  --padding-horizontal-mobile: 16px;  /* Edge collision floor at 375-768px */
  --section-spacing-min: 48px;        /* Sections must breathe */
  --breathing-zone-min: 40px;         /* Focal elements need clearance */
  --grid-gap-min: 16px;               /* Grid islands too close below */
  --grid-gap-optimal: 24px;           /* Standard grid separation */

  /* ───────────────────────────────────────────────────────────── */
  /* TYPOGRAPHY SPACING GUARDRAILS */
  /* ───────────────────────────────────────────────────────────── */

  --label-heading-gap-min: 8px;       /* Prevent collision */
  --paragraph-gap-min: 16px;          /* Prevent text wall */
  --heading-space-after-min: 12px;    /* Prevent heading-body disconnect */
  --heading-space-before-min: 24px;   /* Maintain visual hierarchy */

  /* ───────────────────────────────────────────────────────────── */
  /* COMPRESSION SAFETY RATIOS (for Tier 3 Metaphor Verification) */
  /* ───────────────────────────────────────────────────────────── */

  --padding-compression-ratio-min: 0.40; /* Deepest ≥ 40% of shallowest */
  --content-space-ratio-min: 0.50;    /* Content ≥ 50% of total area */
  --content-space-ratio-max: 0.70;    /* Content ≤ 70% of total area */
}

/* ═══════════════════================================================================ */
/* USAGE NOTES */
/* ═══════════════================================================================ */

/* 1. These are FLOORS, not mandates. Override with INTENT when metaphor requires it.

   2. Tier 2 components USE these as defaults:
      - .callout { line-height: var(--line-height-body-optimal); }
      - .page-container { padding: var(--padding-horizontal-desktop); }

   3. Tier 3 layouts OVERRIDE when documented in compositional strategy:
      - .geological-core { min-width: 480px; } ← Below guardrail WITH INTENT

   4. Perceptual audit VERIFIES at build time:
      - PA-02: CPL within 45-80? (skill-level, not CSS)
      - PA-06: Words stacking? (skill-level, not CSS)
      - Compression ratio ≥ 40%? (documentation-level, manual calc)

   5. Compression ratios are REFERENCE VALUES for Tier 3 recipes, not CSS-enforced.
*/
```

---

## 8. Integration Points: Where Guardrails Plug Into Existing Architecture

### 8.1 Tier 1 Tokens (`design-system/tokens/`)

**Action:** Create `design-system/tokens/guardrails.css` (NEW FILE, above).

**Integration:** Load alongside existing token files.

```html
<!-- Tier 1 token imports -->
<link rel="stylesheet" href="design-system/tokens/colors.css">
<link rel="stylesheet" href="design-system/tokens/typography.css">
<link rel="stylesheet" href="design-system/tokens/spacing.css">
<link rel="stylesheet" href="design-system/tokens/geometry.css">
<link rel="stylesheet" href="design-system/tokens/guardrails.css"> <!-- NEW -->
```

---

### 8.2 Tier 2 Components (`design-system/patterns/`)

**Action:** Update Tier 2 component CSS to USE guardrail tokens.

**Example (Callout Component):**

```css
/* BEFORE (no guardrails) */
.callout {
  padding: 20px 24px;
  margin: 24px 0;
  line-height: 1.7;
}

/* AFTER (guardrails baked in) */
.callout {
  padding: var(--callout-padding, 20px 24px);
  margin: var(--callout-margin, 24px 0);
  line-height: var(--callout-line-height, var(--line-height-body-optimal)); /* Guardrail */
}

.callout__label {
  margin-bottom: max(var(--space-2), var(--label-heading-gap-min)); /* Guardrail floor */
}
```

**Files to update:**
- `tier-2-callouts.css`
- `tier-2-container.css`
- `tier-2-header.css`
- (All Tier 2 component CSS files)

---

### 8.3 Tier 2.5 Patterns (`design-system/patterns/`)

**Action:** Update bento grid, scroll witness, etc. to USE guardrail tokens.

**Example (Bento Grid):**

```css
/* BEFORE */
.bento-grid {
  gap: 24px;
}

/* AFTER */
.bento-grid {
  gap: max(var(--bento-gap, var(--grid-gap-optimal)), var(--grid-gap-min)); /* Guardrail floor */
}
```

---

### 8.4 Tier 3 Recipes (`design-system/pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md`)

**Action:** Add compression ratio verification steps to EVERY Tier 3 recipe.

**Example (CRESCENDO recipe update):**

```markdown
### Composition Recipe Step 7: Verify Compression Ratio Guardrail

After setting progressive padding, verify compression ratio:

**Formula:** `smallest_padding / largest_padding ≥ 0.40`

**Example:**
- Introduction (largest): 80px
- Climax (smallest): 32px
- Ratio: 32 / 80 = 0.40 → PASSES

**If ratio < 0.40:** Increase climax padding to meet floor.
```

**Recipes to update:**
- Geological Stratification (already has this, lines 1046-1059)
- Narrative CRESCENDO (ADD compression verification)
- Hub-Spoke Spatial (verify breathing zone ≥ 40px)
- Bento Task Islands (verify grid gap ≥ 16px)
- Editorial Synthesis (verify content-to-space ratio 50-70%)
- Compound Sequential (verify phase spacing ≥ 48px)

---

### 8.5 Tension-Composition Skill (Phase 4.0 Guardrail Gates)

**Current state:** Skill already has "Phase 4.0 Guardrail Compliance Gates" (tension-composition skill, Phase 4 Translation).

**Action:** UPDATE skill to reference new guardrail tokens by name.

**Example (from skill Phase 4.0):**

```markdown
### Phase 4.0 Guardrail Compliance Gates (MANDATORY)

Before generating CSS, verify ALL metaphor properties pass perceptual guardrails:

**Guardrail #1: Content Width**
- Container max-width ≥ var(--content-width-min) (640px)
- At 1440px viewport, content utilizes 65-80% of width (940-1152px)

**Guardrail #2: Padding Floors**
- Desktop horizontal padding ≥ var(--padding-horizontal-desktop) (32px)
- Mobile horizontal padding ≥ var(--padding-horizontal-mobile) (16px)
- Deepest section padding ≥ 40% of shallowest (compression ratio)

**Guardrail #3: Readability**
- Body line-height ≥ var(--line-height-body-min) (1.5)
- Heading line-height ≥ var(--line-height-heading-min) (1.2)
- Section spacing ≥ var(--section-spacing-min) (48px)
```

**Integration:** Skill references token names, agents generate CSS using those tokens.

---

## 9. Critical Findings Summary

1. **Guardrails split into THREE enforcement layers:**
   - **Token-level** (9 guardrails): Numeric floors as CSS custom property defaults
   - **Skill-level** (8 guardrails): Context-dependent thresholds requiring judgment
   - **Documentation-level** (6 guardrails): Compositional guidance with verification procedures

2. **Token-level enforcement prevents ACCIDENTS, not CHOICES.**
   - Guardrails are CSS custom property DEFAULTS.
   - Tier 3 layouts override WITH INTENT and DOCUMENTATION.
   - Example: Geological core sample narrows to 480px (below 640px guardrail) with perceptual audit proof.

3. **Skill-level guardrails require RENDERING CONTEXT.**
   - Characters per line can't be calculated from CSS alone.
   - Compression ratio requires page-level scan (deepest vs shallowest padding).
   - Metaphor intentionality must be distinguished from accidental compression.

4. **Documentation-level guardrails provide VERIFICATION PROCEDURES.**
   - Tier 3 recipes document compression ratio formulas.
   - Tier 2.5 patterns document when to use vs when NOT to use.
   - Anti-patterns from testing (CD-005 bento overflow at 768px) inform guidance.

5. **Tension-composition skill ALREADY uses this pattern.**
   - Phase 4.0 "Guardrail Compliance Gates" enforce perceptual floors.
   - Phase 3.5F "Perceptual Cost Scoring" penalizes metaphors that violate guardrails.
   - This research extends that pattern BACKWARD into extraction layer.

6. **Other design systems use similar mechanisms:**
   - Material: `clamp()` for responsive min/max
   - Carbon: Token-only enforcement (no arbitrary values)
   - Polaris: `min()` and `max()` functions for dynamic constraints

7. **Zero rigidity risk IF overrides are explicit.**
   - Agents must WRITE `min-width: 480px` intentionally.
   - Accidental drift below guardrails is prevented.
   - Intentional overrides are DOCUMENTED in Tier 3 recipes.

---

## 10. Open Questions

### Q1: Should guardrail tokens live in separate file or integrate into existing token files?

**Option A:** New `guardrails.css` file (proposed above)
- **Pro:** Clear separation, easy to understand "these are safety floors"
- **Con:** Another file to load

**Option B:** Integrate into existing `spacing.css`, `typography.css`, `geometry.css`
- **Pro:** Fewer files
- **Con:** Mixes locked values with guardrail floors (conceptual confusion)

**Recommendation:** Option A (separate file). Guardrails are a distinct CATEGORY (safety floors), not just "more tokens."

---

### Q2: Should compression ratio be CSS-enforced via `calc()`?

**Scenario:** Could we use CSS `calc()` to enforce compression ratio dynamically?

```css
.stratum--open {
  --max-compression: calc(var(--stratum-padding-shallowest) * var(--padding-compression-ratio-min));
  padding: max(var(--stratum-padding-deepest), var(--max-compression)); /* Floor enforced */
}
```

**Challenge:** Requires knowing "shallowest padding" value at CSS-time. Not possible without JavaScript.

**Recommendation:** Keep compression ratio at DOCUMENTATION-LEVEL (manual verification in Tier 3 recipes).

---

### Q3: Should perceptual audit skill auto-check guardrail token usage?

**Scenario:** When skill audits a page, should it verify that Tier 2 components USE guardrail tokens?

**Example audit finding:**

```markdown
## GUARDRAIL TOKEN COMPLIANCE

✓ PASS: .callout uses var(--line-height-body-optimal)
✓ PASS: .page-container uses var(--padding-horizontal-desktop)
✗ FAIL: .custom-section uses padding: 20px (arbitrary value, should use var(--section-spacing-min))
```

**Recommendation:** YES, add to perceptual audit skill as "Token Compliance Check" (programmatic, not perceptual).

---

## 11. Recommendations

### Immediate Actions (Phase C Extraction)

1. **Create `design-system/tokens/guardrails.css`** (NEW FILE, ~40 lines)
   - Copy token definitions from Section 7 above
   - Load alongside existing token files

2. **Update Tier 2 component CSS** to USE guardrail tokens
   - `tier-2-callouts.css`: Use `--line-height-body-optimal`, `--label-heading-gap-min`
   - `tier-2-container.css`: Use `--content-width-optimal`, `--padding-horizontal-desktop`
   - `tier-2-header.css`: Use `--heading-space-before-min`, `--heading-space-after-min`

3. **Update Tier 2.5 pattern CSS** to USE guardrail tokens
   - `tier-2.5-bento-grid.css`: Use `--grid-gap-min` as floor
   - `tier-2.5-scroll-witness.css`: Use `--breathing-zone-min` for top position

4. **Update Tier 3 compositional recipes** to INCLUDE compression ratio verification
   - Add "Step 7: Verify Compression Ratio" to all 6 Tier 3 recipes in `08-COMPOSITIONAL-STRATEGY-LIBRARY.md`

---

### Future Actions (Post-Extraction)

5. **Update tension-composition skill** to reference guardrail tokens by name
   - Phase 4.0 Guardrail Gates: Reference token names explicitly
   - Phase 3.5F Perceptual Cost: Penalize violations of guardrail floors

6. **Add Token Compliance Check** to perceptual-auditing skill
   - NEW programmatic check: "Are Tier 2 components using guardrail tokens or arbitrary values?"
   - Surfaces anti-pattern: `padding: 20px` instead of `padding: var(--space-5)`

7. **Test guardrail enforcement** on 3 representative pages
   - Track 1 page (tutorial): Verify guardrails prevent accidental compression
   - Track 2 page (geological metaphor): Verify intentional overrides work
   - Track 2 page (CRESCENDO): Verify compression ratio verification catches violations

---

## Research Sources

1. `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/SKILL.md` (627 lines) — All 48 PA questions + 23 quantitative guardrails
2. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md` (1,747 lines) — Tier 1/2/2.5/3 model, component inventory, strategy recipes
3. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/tokens/geometry.md` (164 lines) — Soul constraints (border-radius: 0, box-shadow: none)
4. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/tokens/spacing.md` (155 lines) — Spacing scale, density rhythm
5. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/tokens/typography.md` (167 lines) — Font families, type scale, line-height rules
6. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/pipeline-metacognition/01-extraction-methodology.md` (467 lines) — Extraction context (content-first analysis)

**Total research base:** 3,327 lines across 6 files

---

**END RESEARCH REPORT**
