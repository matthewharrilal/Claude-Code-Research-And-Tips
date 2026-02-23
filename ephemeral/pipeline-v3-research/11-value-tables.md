# Report 11: CSS Value Tables and Structural Directives

**Author:** Agent 11 (Opus 4.6)
**Date:** 2026-02-22
**Task:** Design CSS value tables that bridge constraint to recipe. Positive scaffolding -- what TO DO, not what NOT to do.

**Sources Read:**
- `ephemeral/handoff-research/57-compositional-fluency-deep.md` (509 lines)
- `ephemeral/handoff-research/49-typography-border-provenance.md` (615 lines)
- `ephemeral/handoff-research/48-chromatic-arc-provenance.md` (353 lines)
- `ephemeral/handoff-research/47-mechanism-provenance.md` (393 lines)
- `design-system/compositional-core/vocabulary/tokens.css` (184 lines)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (1,219 lines)
- `design-system/compositional-core/components/components.css` (1,196 lines)
- `design-system/pipeline/conventions-brief.md` (609 lines)

---

## 0. DESIGN PHILOSOPHY

The current pipeline has a 7.9:1 guardrail-to-playbook ratio. These tables INVERT that. Every table below is a RECIPE -- paste-ready CSS reference that tells the builder what values to use, not what to avoid.

**Three principles:**
1. **RANGES, not points.** Every value is a range (e.g., 32-48px) allowing creative freedom within perceptible bounds.
2. **PER-ZONE, not per-property.** Tables are organized boundary-by-boundary. Set all channels at each boundary, not all backgrounds then all borders.
3. **REGISTER-SPECIFIC.** Middle, Ceiling, and Flagship tiers get different value ranges reflecting their compositional ambition.

**Key provenance finding:** Gas Town's typography was 80% prescribed by the TC brief. The border system was 95% prescribed. Sophistication is in COMPOSITION of prescribed values, not in the values themselves. These tables formalize what the TC brief did informally.

---

## 1. TYPOGRAPHY VALUE TABLE

### 1A. Type Scale (7 Stops)

Builders pick from this scale. No values outside it.

```
TOKEN              REM     PX    USAGE                          FONT FAMILY
--type-display     3       48    Hero/page title (1 per page)   Instrument Serif
--type-page        2-2.5   32-40 Zone h2 headings               Instrument Serif
--type-section     1.5-2   24-32 Section h3 headings            Instrument Serif
--type-subsection  1.25-1.5 20-24 Sub-headings, large callouts  Instrument Serif
--type-body        1       16    Body text (baseline)           Inter
--type-code        0.875   14    Code blocks, inline code       JetBrains Mono
--type-meta        0.75    12    Labels, metadata, captions     Inter or JetBrains Mono
```

**Ratio target:** ~1.25-1.5x between adjacent levels. Gas Town achieved 1.2-1.5x across levels.

**Zone-adaptive heading sizes (concrete recipe):**

| Zone Position | h2 Size       | h3 Size       | Rationale |
|---------------|---------------|---------------|-----------|
| Zone 1 (OPEN) | 2.5rem (40px) | 1.5rem (24px) | Generous, editorial, breathing room |
| Zone 2-3 (DEEP) | 2rem (32px) | 1.5rem (24px) | Compressed, tighter, functional |
| Zone 4 (RESOLVE) | 2rem (32px) | 1.5rem (24px) | Return to moderate |

### 1B. Font Weight Progression

Four weights form a closed vocabulary. No 300, no 800, no 900.

```
WEIGHT    NAME       ROLE                              ZONE PROGRESSION
400       Regular    Body text baseline, Z1/Z4 body    OPENING / RESOLVING zones
500       Medium     Moderate emphasis, Z2 body        BUILDING zones
600       Semibold   Labels, table headers, Z3 body    DEEPENING zones (peak)
700       Bold       Maximum emphasis (rare: 1-3 uses) Singular emphasis only
```

**Zone density arc recipe:**

```css
/* OPENING (Z1) */
.zone-1 p { font-weight: 400; }
.zone-1 .section-indicator { font-weight: 500; }

/* DEEPENING (Z2) */
.zone-2 p { font-weight: 500; }
.zone-2 .section-indicator { font-weight: 600; }

/* DEEPENING PEAK (Z3) */
.zone-3 p { font-weight: 600; }
.zone-3 .section-indicator { font-weight: 600; }

/* RESOLVING (Z4) */
.zone-4 p { font-weight: 400; }
.zone-4 .section-indicator { font-weight: 500; }
```

### 1C. Letter-Spacing Vocabulary

Seven stops. Nothing between 0 and 0.025em (sub-perceptual dead zone).

```
VALUE     REGISTER       WHEN TO USE                         PERCEPTIBLE?
0         Body           Default body text, headings          N/A (baseline)
0.025em   Minimum floor  Never use -- this is the perception  BARELY
                         threshold, not a design value
0.03em    Density        Zone 3 body text (DEEPENING signal) YES
0.05em    Citation       Source meta, footer meta, captions   YES
0.08em    Label-light    Smaller labels, breadcrumbs          YES
0.1em     Label          Section indicators, table headers,   YES (standard)
                         callout labels, card ranks
0.12em    Maximum        Extreme emphasis (rare)              YES
```

**Zone-adaptive recipe:**

```css
/* Z1: OPENING -- body at 0, labels at 0.1em */
.zone-1 p { letter-spacing: 0; }

/* Z2: BUILDING -- body still at 0, labels at 0.1em */
.zone-2 p { letter-spacing: 0; }

/* Z3: DEEPENING -- body tightens to 0.03em */
.zone-3 p { letter-spacing: 0.03em; }

/* Z4: RESOLVING -- body returns to 0 */
.zone-4 p { letter-spacing: 0; }

/* All zones: labels always at 0.1em (structural constant) */
.section-indicator { letter-spacing: 0.1em; }
```

**CRITICAL:** Letter-spacing on headings (>= 24px font-size) must be verified. 0.03em at 32px = 0.96px, which is sub-perceptual. Either use >= 0.05em on headings or use 0 (normal). Gas Town's builder caught this in fix cycle 1 (SC-14).

### 1D. Line-Height

```
CONTEXT           VALUE    RATIONALE
Body text         1.7      Generous reading rhythm
Dense zone body   1.6      Compressed for density
List items        1.6      Tighter than body
Headings          1.2-1.3  Tight for structural weight
Code blocks       1.5      Balanced code readability
Labels (meta)     1.4      Compact structural elements
```

---

## 2. COLOR VALUE TABLE

### 2A. Zone Background Palette Construction

**The rule:** Every adjacent zone boundary must have >= 15 RGB max-channel delta. The B (blue) channel typically carries the largest delta in warm palettes.

**4-Zone Warm Palette Template (paste-ready):**

```css
/* Warm cream -> earthy -> deep -> return */
--bg-z1: #FEF9F5;   /* R:254 G:249 B:245 -- OPENING (warmest, lightest) */
--bg-z2: #F0EBE3;   /* R:240 G:235 B:227 -- BUILDING (warm gray-beige) */
--bg-z3: #E8E0D4;   /* R:232 G:224 B:212 -- DEEPENING (deep earthy) */
--bg-z4: #F5F0E8;   /* R:245 G:240 B:232 -- RESOLVING (lighter return) */
```

**Boundary verification:**

| Boundary | R delta | G delta | B delta | Max | Pass? |
|----------|---------|---------|---------|-----|-------|
| Z1->Z2   | 14      | 14      | 18      | 18  | YES   |
| Z2->Z3   | 8       | 11      | 15      | 15  | YES   |
| Z3->Z4   | 13      | 16      | 20      | 20  | YES   |

**Alternative 3-Zone Palette (simpler content):**

```css
--bg-z1: #FEF9F5;   /* R:254 G:249 B:245 */
--bg-z2: #F0EBE3;   /* R:240 G:235 B:227 -- delta 18 from Z1 */
--bg-z3: #FEF9F5;   /* Return to Z1 -- delta 18 from Z2 */
```

**Alternative 5-Zone Palette (complex content):**

```css
--bg-z1: #FEF9F5;   /* R:254 G:249 B:245 */
--bg-z2: #F5F0E8;   /* R:245 G:240 B:232 -- delta 13... */
```

**STOP.** Z1->Z2 max delta = 13. Below threshold. Fix:

```css
--bg-z1: #FEF9F5;   /* R:254 G:249 B:245 */
--bg-z2: #F0EBE3;   /* R:240 G:235 B:227 -- delta 18 */
--bg-z3: #E8E0D4;   /* R:232 G:224 B:212 -- delta 15 */
--bg-z4: #F0EBE3;   /* Return to Z2 value -- delta 20 */
--bg-z5: #FEF9F5;   /* Return to Z1 value -- delta 18 */
```

### 2B. Palette Construction Rules

```
RULE                                    VALUE                EVIDENCE
R >= G >= B for all backgrounds         Always warm          Soul constraint
Max-channel delta >= 15 at boundary     Absolute floor       Flagship failure (1-8 RGB invisible)
DEEPENING direction = lower values      Darker = deeper      Gas Town 4-zone provenance
RESOLVING direction = higher values     Lighter = release    Gas Town Z4 release pattern
Dark bookends (header/footer)           #1A1A1A              220+ RGB delta, strongest boundary
Component inset backgrounds             Use Z1 (#FEF9F5)    Creates contained islands in Z2/Z3
```

### 2C. Accent Color Budget

Accent colors are RESERVED for callout borders and tinted backgrounds only. Never in body text.

```css
/* Semantic accent assignments (locked) */
--accent-blue:   #4A90D9;  /* Info / Intel */
--accent-green:  #4A9D6B;  /* Tip / Advantage */
--accent-coral:  #C97065;  /* Gotcha / Threat */
--accent-amber:  #D97706;  /* Challenge / Caution */
--accent-purple: #7C3AED;  /* Essence / Doctrine */
```

**Callout tinted background formula:** accent color at 5% opacity.
```css
.callout--info    { background: rgba(74, 144, 217, 0.05); }
.callout--tip     { background: rgba(74, 157, 107, 0.05); }
.callout--gotcha  { background: rgba(201, 112, 101, 0.05); }
.callout--challenge { background: rgba(217, 119, 6, 0.05); }
.callout--essence { background: rgba(124, 58, 237, 0.05); }
```

### 2D. Syntax Highlighting Palette (Code Blocks)

```css
/* Dark background (#1A1A1A) with: */
--syntax-keyword:     #E83025;  /* Primary red -- keywords, control flow */
--syntax-string:      #6B9B7A;  /* Sage green -- string literals */
--syntax-comment:     #666666;  /* Secondary gray -- comments */
--syntax-function:    #4A7C9B;  /* Muted blue -- function names */
--syntax-type:        #C97065;  /* Coral -- type annotations */
--syntax-number:      #D97706;  /* Amber -- numeric literals */
--syntax-punctuation: #E0D5C5;  /* Border color -- punctuation */
```

---

## 3. SPACING VALUE TABLE

### 3A. Zone Padding Per Density Direction

```
ZONE ROLE       VERTICAL PADDING    HORIZONTAL PADDING   SEMANTIC
OPENING (Z1)    64px (--space-16)   80px (--space-20)    Generous, editorial
BUILDING (Z2)   40-48px (10-12)     64-80px (16-20)      Moderate compression
DEEPENING (Z3)  32px (--space-8)    64px (--space-16)    Maximum compression
RESOLVING (Z4)  48px (--space-12)   80px (--space-20)    Release, moderate

MAX SINGLE VALUE: 96px (--space-24). Never exceed.
MAX STACKED GAP:  120px total at any boundary.
```

**Paste-ready zone padding:**

```css
.zone-1 { padding: var(--space-16) var(--space-20); }  /* 64px 80px */
.zone-2 { padding: var(--space-10) var(--space-20); }  /* 40px 80px */
.zone-3 { padding: var(--space-8) var(--space-16); }   /* 32px 64px */
.zone-4 { padding: var(--space-12) var(--space-20); }  /* 48px 80px */
```

### 3B. Component Internal Spacing Per Zone

Components respond to zone density. Denser zones = tighter internal spacing.

```
COMPONENT        SPARSE ZONE (Z1)         DENSE ZONE (Z3)       DELTA
Callout padding  24px 32px                16px 20px              -33%
Table cell       12px 16px                8px 12px               -33%
Code block       24px 32px                16px 24px              -33%
Card padding     24px                     16px                   -33%
Grid gap         24px (--grid-gap)        16px (--space-4)       -33%
```

**Paste-ready component zone modulation:**

```css
/* Sparse zone components (OPENING) */
.zone-1 .callout       { padding: 24px 32px; }
.zone-1 .data-table td { padding: 12px 16px; }
.zone-1 .code-block    { padding: 24px 32px; }

/* Dense zone components (DEEPENING) */
.zone-3 .callout       { padding: 16px 20px; }
.zone-3 .data-table td { padding: 8px 12px; }
.zone-3 .code-block    { padding: 16px 24px; }
```

### 3C. Section Internal Spacing

```
ELEMENT RELATIONSHIP         SPACING          TOKEN
Between sections (same zone) 32px             --space-8
Between heading and content  16-24px          --space-4 to --space-6
Between paragraphs           16px (1em)       --space-4
Between list items           8-12px           --space-2 to --space-3
Between component and text   24px             --space-6
Component margin-bottom      24-32px          --space-6 to --space-8
```

### 3D. Stacked Gap Verification Checklist

At every zone boundary, sum ALL contributing spacing:

```
Previous section padding-bottom:  ___px
Transition element margin-top:    ___px
Transition element height:        ___px
Transition element margin-bottom: ___px
Next section padding-top:         ___px
                                  -----
TOTAL:                            ___px  (must be <= 120px)
```

If total > 120px, use a CHECKPOINT element instead of adding whitespace.

---

## 4. BORDER / SHADOW VALUE TABLE

### 4A. Three-Tier Border Hierarchy

```
WEIGHT  TOKEN             SEMANTIC                    WHERE TO USE
4px     --border-heavy    Accent, emphasis, critical  Callout left-borders, core quotes, highest-priority elements
3px     --border-medium   Structural enclosure        Header/footer accents, zone hard cuts, component borders, code blocks
1px     --border-light    Data separators             Table rows, section indicators, internal dividers

2px DOES NOT EXIST in this world.
```

### 4B. Border Color Assignments

```
COLOR TOKEN              HEX        SEMANTIC ROLE                    USE WITH
--color-primary          #E83025    Authority / editorial emphasis   Header/footer border, hard cut transitions, core quotes
--color-text             #1A1A1A    Maximum structural weight        Rare: mayor/primary cards, solid offset backgrounds
--color-border           #E0D5C5    Standard structural              Table headers (3px), component borders (3px), code blocks (3px)
--color-border-subtle    #F0EBE3    Minimum structural               Section indicators (1px), internal dividers, data separators
--accent-*               varies     Semantic classification          Callout left-borders (4px), always with accent-color
--color-text-secondary   #666666    Chrome / metadata                Header stats borders, footer tag borders
```

### 4C. Border-Weight Gradient Recipes

**PROGRESSIVE MODE (content with natural stratification):**

```css
/* 4 levels encoding a continuous gradient (confidence, depth, priority) */
.element--critical    { border-left: 4px solid var(--color-primary); }
.element--important   { border-left: 3px solid var(--color-border); }
.element--supporting  { border-left: 1px solid var(--color-border-subtle); }
/* Note: 2px is skipped. The gap between 3px and 1px IS the hierarchy signal. */
```

**DISCRETE MODE (categorical differentiation):**

```css
/* 3 categories serving different structural roles */
.callout   { border-left: 4px solid var(--accent-color); }   /* Content emphasis */
.component { border: 3px solid var(--color-border); }         /* Structural containment */
.divider   { border-top: 1px solid var(--color-border-subtle); } /* Data separation */
```

### 4D. Depth Without Shadows

Solid offset is the ONLY depth technique (box-shadow is prohibited).

```css
/* Solid offset recipe -- use for 1-2 featured elements per page */
.featured::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 100%;
  height: 100%;
  background: var(--color-text);  /* #1A1A1A */
  z-index: -1;
}
.featured {
  position: relative;
  background: var(--color-background);  /* #FEF9F5 */
}
```

**Deploy sparingly.** Maximum 2 per page. Overuse destroys the focal-point effect.

---

## 5. LAYOUT STRUCTURAL DIRECTIVES

### 5A. Page Container

```css
/* NON-NEGOTIABLE -- the #1 failure mode */
.page-container {
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
}
```

### 5B. Grid Pattern Library

Five layout topologies. Use >= 2 per page (3+ for Flagship).

```css
/* 1. Golden Ratio Hero (overview, intro) */
.grid-hero {
  display: grid;
  grid-template-columns: 1.618fr 1fr;
  gap: var(--space-8);  /* 32px */
}

/* 2. Bento Grid (role cards, feature display) */
.grid-bento {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);  /* 24px */
}
.grid-bento .primary { grid-column: span 2; }

/* 3. Three-Column Spokes (parallel comparison) */
.grid-spokes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);  /* 24px */
}

/* 4. Two-Column Equal (side-by-side analysis) */
.grid-equal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);  /* 32px */
}

/* 5. Single-Column Flow (narrative prose) */
.flow {
  max-width: 70ch;
  margin: 0 auto;
}
```

### 5C. Section Structure Templates

**Standard zone section:**

```html
<section class="zone-N" aria-label="Zone Name">
  <div class="section-indicator">ZONE LABEL</div>
  <h2>Zone Heading</h2>
  <!-- Content -->
</section>
```

**Zone with grid layout:**

```html
<section class="zone-2" aria-label="Operational Readiness">
  <div class="section-indicator">OPERATIONAL READINESS</div>
  <h2>Section Heading</h2>
  <div class="grid-bento">
    <div class="card primary"><!-- span 2 --></div>
    <div class="card"><!-- regular --></div>
    <div class="card"><!-- regular --></div>
  </div>
</section>
```

### 5D. Transition Structural Directives

Three transition types with exact CSS:

```css
/* TYPE 1: HARD CUT -- domain change, strongest signal */
.zone-2 {
  border-top: 3px solid var(--color-primary);
  /* Background shift >= 15 RGB from previous zone */
  /* No extra spacing beyond zone padding */
}

/* TYPE 2: SPACING SHIFT -- intensity change within same domain */
/* No border, no background change. Spacing alone carries the signal. */
.zone-moderate {
  padding: var(--space-8);  /* 32px -- intermediate value */
}

/* TYPE 3: CHECKPOINT -- phase change with structural landmark */
.checkpoint {
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 16px 24px;
  background: var(--color-zone-breathing);  /* #FAF5ED */
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

### 5E. Bookending Directive

Header and footer form a page-spanning arch. This produces STRUCTURAL compositional fluency (Register 2).

```css
/* HEADER: Dark slab + 3px primary border */
header {
  background: var(--color-text);        /* #1A1A1A */
  color: var(--color-background);       /* #FEF9F5 */
  border-bottom: 3px solid var(--color-primary);  /* #E83025 */
  padding: var(--space-12) var(--space-8);  /* 48px 32px */
}

/* FOOTER: Mirror of header */
footer {
  background: var(--color-text);
  color: var(--color-background);
  border-top: 3px solid var(--color-primary);
  padding: var(--space-12) var(--space-8);
}
```

The echo is precise: same background, same border thickness, same border color. One uses border-bottom, the other border-top. This is structural rhyme at the Page scale.

### 5F. Component Composition Patterns

**Card grid with hierarchy (bento):**

```css
.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}
.role-card {
  border: 3px solid var(--color-border);
  padding: var(--space-6);
}
.role-card--primary {
  grid-column: span 2;
  border-color: var(--color-text);  /* Maximum weight for primary */
  border-width: 4px;
}
```

**Callout family (5 variants, shared DNA):**

```css
.callout {
  border-left: 4px solid var(--accent-color, var(--accent-blue));
  background: var(--callout-bg, rgba(74, 144, 217, 0.05));
  padding: var(--space-6) var(--space-5);  /* 24px 20px */
  margin-bottom: var(--space-6);
}
.callout__label {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-color, var(--accent-blue));
  margin-bottom: var(--space-3);
}
.callout__body {
  font-size: var(--type-body);
  line-height: 1.7;
}
```

---

## 6. MECHANISM DEPLOYMENT RECIPES

For each of the 18 mechanisms, concrete CSS ranges and deployment guidance.

### Category S: SPATIAL (deploy >= 1)

**#5 Dense/Sparse Alternation**
```
WHAT:   Alternating section density (sparse padding -> dense padding -> sparse)
CSS:    Zone padding ranges from Table 3A
RECIPE: Assign each zone a density character (SPARSE/MODERATE/DENSE).
        Sparse: padding 64px, generous prose width
        Dense:  padding 32px, tighter elements, grid layouts
        At least 1 density shift per page. 2+ for Flagship.
```

**#6 Width Variation**
```
WHAT:   Horizontal rhythm through content width changes
CSS:    .narrow { max-width: 70%; margin-left: 5%; }
        .full   { max-width: 100%; margin-left: 0; }
RECIPE: Questions at 60-70% width, answers at full width.
        Or: prose at max-width 70ch, grids at full container width.
        Creates visual lanes that break monotony.
```

**#15 Bento Grid**
```
WHAT:   Variable-span grid layout
CSS:    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        .primary { grid-column: span 2; }
RECIPE: Use for 4+ related items (roles, features, specs).
        Always give the most important item span 2.
        Gap: 24px (--space-6). Border: 3px structural.
BUDGET: ~25 CSS lines per grid instance.
```

### Category H: HIERARCHY (deploy >= 1)

**#1 Border-Weight Gradient**
```
WHAT:   Hierarchy encoded through border thickness
CSS:    4px (critical) / 3px (structural) / 1px (separator)
RECIPE: Use Table 4A. Assign each content element a hierarchy level.
        4px: callouts, core quotes, primary cards
        3px: headers, footers, component borders, code blocks
        1px: table rows, section indicators, internal dividers
BUDGET: ~20 CSS lines (4-6 selectors at each weight).
```

**#4 Spacing Compression**
```
WHAT:   Padding decreases as content deepens
CSS:    Zone padding arc from Table 3A: 64->40->32->48
RECIPE: Map zone density to padding values.
        Each zone boundary should shift padding by >= 24px (perception floor).
        The arc has a DIRECTION: compress then release.
BUDGET: ~8 CSS lines (zone selectors with padding).
```

**#11 Typographic Scale Jumping**
```
WHAT:   Discrete font-size jumps signal hierarchy
CSS:    7-stop scale from Table 1A: 48/40/32/24/16/14/12
RECIPE: Each zone uses the scale consistently.
        h2: 2-2.5rem, h3: 1.5rem, body: 1rem, meta: 0.75rem.
        ~1.25-1.5x ratio between adjacent levels.
BUDGET: ~10 CSS lines (heading selectors per zone).
```

### Category C: COMPONENT (deploy >= 1)

**#2 Two-Zone Component DNA**
```
WHAT:   Every component has sparse LABEL + dense BODY
CSS:    Label: mono, 0.75rem, 600, uppercase, 0.1em, secondary color
        Body:  Inter, 1rem, 400, normal case, 1.7 line-height
RECIPE: Apply the SAME label pattern to ALL components:
        callouts, cards, code blocks, tables, file trees.
        The repetition IS the signal -- reader learns it once.
BUDGET: ~50 CSS lines (shared label/body across 5+ components).
```

**#9 Confidence/Color Encoding**
```
WHAT:   Accent color differentiates semantic type
CSS:    5 accent colors from Table 2C
RECIPE: Use --accent-color custom property on each component variant.
        Map to content semantics (info/tip/warning/etc OR metaphor-specific).
        Always paired with 4px left border (#10).
BUDGET: ~10 CSS lines (5 color variant selectors).
```

**#10 Border-Left Semantic Signal**
```
WHAT:   4px left border = "this is emphasized content"
CSS:    border-left: 4px solid var(--accent-color);
RECIPE: Every callout, every featured quote, every important aside.
        NEVER 2px, NEVER 3px for callouts. 4px is THE signal.
        The universal callout marker across ALL 27 explorations.
BUDGET: ~5 CSS lines.
```

**#17 Code Block**
```
WHAT:   Dark background + syntax highlighting
CSS:    bg #1A1A1A, border 3px, font JetBrains Mono, 0.875rem
        6 syntax colors from Table 2D
RECIPE: Use .kw/.st/.cm/.fn/.nu/.tp classes for syntax tokens.
        Code blocks are natural dark inversion islands.
        No more than 30% of page area as code blocks.
BUDGET: ~40 CSS lines (pre + 6 syntax classes).
```

### Category D: DEPTH/EMPHASIS (deploy >= 1)

**#3 Solid Offset Depth**
```
WHAT:   Pseudo-element shadow alternative
CSS:    ::after { top: 4px; left: 4px; bg: #1A1A1A; z-index: -1; }
RECIPE: Deploy on 1-2 focal elements per page (core quote, key insight).
        Always pair with background: var(--color-background) on parent.
        NEVER use box-shadow -- solid offset is the ONLY depth.
BUDGET: ~15 CSS lines per instance.
```

**#7 Zone Background Differentiation**
```
WHAT:   Background color arc across zones
CSS:    4-zone palette from Table 2A
RECIPE: Choose palette from Table 2A.
        Verify >= 15 RGB max-channel delta at EVERY boundary.
        Name zones in CSS: /* Zone 1: OPENING bg #FEF9F5 */
        DEEPENING = values decrease. RESOLVING = values increase.
BUDGET: ~8 CSS lines (zone background selectors + token declarations).
```

**#16 Drop Cap**
```
WHAT:   Editorial opening signal
CSS:    ::first-letter { font: 3.5em Instrument Serif; float: left;
        line-height: 0.8; color: #E83025; }
RECIPE: Deploy in AT MOST 2 sections. Z1 opening is the natural choice.
        Creates weight-response chain with dark header (primary red bridges header to content).
        Rarity creates impact.
BUDGET: ~10 CSS lines.
```

### Category N: STRUCTURE/NAVIGATION (deploy >= 1)

**#13 Dark Header + 3px Border**
```
WHAT:   Dark slab with primary accent border
CSS:    bg #1A1A1A, color #FEF9F5, border-bottom 3px #E83025
RECIPE: See Table 5E. Always present. The header IS the page's anchor.
        Include: page title (Instrument Serif), meta line, optional stats bar.
BUDGET: ~20 CSS lines.
```

**#14 Footer Mirror**
```
WHAT:   Header echo that creates bookending
CSS:    bg #1A1A1A, color #FEF9F5, border-top 3px #E83025
RECIPE: Mirror the header. Include: provenance info, navigation links.
        The header-footer arch = structural compositional fluency (Register 2).
BUDGET: ~20 CSS lines.
```

**#18 Data Table**
```
WHAT:   Mono headers + border hierarchy
CSS:    th: mono, 0.75rem, 600, uppercase, 0.1em, border-bottom 3px
        td: body font, 1rem, border-bottom 1px
RECIPE: Follow 2-zone DNA (th = label zone, td = body zone).
        NO vertical borders (prohibition).
        Max table width 100% with overflow-x: auto.
BUDGET: ~20 CSS lines.
```

**#8 Scroll Witness / #12 Progressive Disclosure**
```
DEPLOY ONLY IF: Page has 5+ sections requiring position tracking (Scroll Witness)
                OR content has natural phases (Progressive Disclosure).
NOT MANDATORY. These are contextual mechanisms.
```

---

## 7. ANTI-MISALLOCATION RULES

The Flagship failure spent 22% of CSS on imperceptible micro-typography. CD-006 spent the same budget on grids, components, and breakpoints. These rules prevent budget misallocation.

### 7A. CSS Budget Allocation Guide

```
BUDGET CATEGORY              TARGET %    WHAT IT BUYS
Zone architecture            10-15%      Zone backgrounds, transitions, padding
Component styling            25-35%      Callouts, cards, tables, code blocks
Grid layouts                 10-15%      Bento grids, hero layouts, spokes
Typography system            10-15%      Type scale, weight arc, label register
Responsive breakpoints       10-15%      960/768/480px adaptations
Dark inversions              5-10%       Header, footer, code blocks
Accessibility                3-5%        Skip link, focus-visible, reduced-motion
Mechanism-specific CSS       5-10%       Drop cap, solid offset, width variation

NEVER EXCEED 10% on any single property channel (e.g., letter-spacing across all selectors).
```

### 7B. Imperceptible CSS Detection Checklist

Before submitting, scan for these waste patterns:

```
PATTERN                                  ACTION
letter-spacing < 0.025em                 DELETE (always invisible)
letter-spacing 0.03em on heading >= 24px VERIFY (may be sub-perceptual at that size)
background-color delta < 15 RGB          INCREASE to >= 15 or REMOVE
font-size delta < 2px between zones      INCREASE to >= 2px or USE SAME SIZE
padding delta < 24px between zones       INCREASE or USE SAME PADDING
border-weight 2px                        CHANGE to 1px or 3px (2px not in vocabulary)
opacity < 1 on containers                REMOVE (prohibited)
```

### 7C. Budget Misallocation Alarm

If you find yourself writing:
- More than 15 letter-spacing declarations across the whole page -> STOP. Consolidate.
- More than 10 font-weight declarations that are NOT zone-specific -> STOP. Use zone inheritance.
- Background colors that differ by 1-14 RGB -> STOP. Either >= 15 or identical.
- 3+ refinement passes on the same property -> STOP. Move to a different property or component.

**The rule:** Each property should be set ONCE per context. Overriding the same property 3+ times on the same element type signals misallocation. Spend those lines on a new grid layout, a new component, or a responsive breakpoint instead.

---

## 8. REGISTER-SPECIFIC VALUE TABLES

### 8A. Middle Tier (PA-05 >= 3.5, CCS 0.15-0.35)

**The minimum composed page.** 8-10 mechanisms, 2 scales (Page + Component).

```
PROPERTY              MIDDLE RANGE           NOTES
Zones                 3-4                    3 is fine if density arc is clear
Mechanisms            8-10 from catalog      At least 1 per category (S, H, C, D, N)
Grids                 1-2 layout types       Single-column + one grid (bento or 2-col)
CSS budget            400-600 lines          Perceptible only
Channels per boundary 3 minimum, 3.5 avg    Focus on primary 4 channels
Zone backgrounds      3-4 distinct           15 RGB floor applies
Components            5-8 types              Callout + code + table + header/footer + 1-4 more
Breakpoints           2 (960px, 768px)       480px optional
Type scale stops      5-6 (display through meta, skip 1-2 levels)
Border configs        3 (4px/3px/1px)        Standard 3-tier
Drop caps             0-1                    Optional
Solid offset          0-1                    Optional
Compositional fluency Register 1 (local coupling only)
```

### 8B. Ceiling Tier (PA-05 >= 3.5, CCS 0.35-0.55)

**Structural compositional fluency.** 12-15 mechanisms, 4 scales.

```
PROPERTY              CEILING RANGE          NOTES
Zones                 4-5                    4 is standard. 5 for complex content.
Mechanisms            12-15 from catalog     All categories. 3+ rejections documented.
Grids                 2-3 layout types       Bento + hero + one more
CSS budget            700-1000 lines         Perceptible only
Channels per boundary 3 min, 4+ avg         Target 5 at climax boundary
Zone backgrounds      4-5 distinct           15 RGB floor. Consider 5-zone palette.
Components            8-12 types             Use >= 8 from components.css
Breakpoints           3 (960/768/480px)      All three mandatory
Type scale stops      7 (full scale)         3rem through 0.75rem
Border configs        3+ (with progressive mode where content warrants)
Drop caps             1-2                    Deploy strategically
Solid offset          1-2                    Focal points only
Bookending            YES (header <-> footer echo)
Transition grammar    All 3 types used       Hard cut, spacing shift, checkpoint
Weight-response chain YES (header -> drop cap primary red echo)
Compositional fluency Register 2 (structural: bookending + transitions + weight chains)
```

### 8C. Flagship Tier (PA-05 >= 3.5, Tier 5 >= 7/9, CCS 0.55+)

**Atmospheric compositional fluency.** All mechanisms governed by one directional logic.

```
PROPERTY              FLAGSHIP RANGE         NOTES
Zones                 4-5                    Each zone is a ROOM in the metaphor
Mechanisms            14-18 from catalog     5+ rejections documented with reasoning
Grids                 3+ layout types        Grid choice IS compositional (not structural exhibit)
CSS budget            1000-1500 lines        Perceptible only, zero waste
Channels per boundary 3 min, 4.5+ avg       5-6 at climax, 2-3 at quiet boundaries
Zone backgrounds      4-5 with arc direction Full warm->deep->warm or similar
Components            10-14 types            Component internal spacing VARIES by zone
Breakpoints           3 (960/768/480px)      Full responsive with soul preservation
Type scale stops      7+ (full + intermediate values for special components)
Border configs        3+ with PROGRESSIVE    Border weight tracks zone density direction
Drop caps             1-2 (weight-response chain with header)
Solid offset          1-2 (singular emphasis)
Bookending            YES (precise header <-> footer echo)
Transition grammar    All 3 types, planned in conviction statement
Weight-response chain YES + zone-by-zone density progression
Component modulation  YES (.zone-3 .callout tighter than .zone-1 .callout)
Grid-as-composition   YES (grid density co-varies with zone density)
Silence zones         1+ (zone where mechanisms are withheld for contrast)
Compositional fluency Register 2.5-3 (atmospheric: all channels co-vary along single axis)
```

### 8D. Register Progression Summary

| Register | CCS Range | What It Requires | Tables That Produce It |
|----------|-----------|------------------|----------------------|
| 1 (Local) | 0.15-0.35 | Mechanism pairs within sections | Tables 1-4 (basic deployment) |
| 2 (Structural) | 0.35-0.55 | Bookending + weight-response + transition grammar | Tables 5E + 6 (structural directives) |
| 2.5 (Zonal) | 0.45-0.60 | Multi-channel density arc across zones | Tables 1B-1C + 2A + 3A + 3B (zone-adaptive values) |
| 3 (Atmospheric) | 0.55-0.80 | ALL mechanisms governed by single logic + component modulation | All tables + dispositional recipe (Section 9) |

---

## 9. COMPOSITIONAL FLUENCY SCAFFOLDING

Value tables (Sections 1-8) can reliably produce Register 2.5 fluency. Register 3 requires ADDITIONAL scaffolding beyond values.

### 9A. Structural Directives That Produce Fluency

These are not value tables -- they are INSTRUCTIONS that produce mechanism coupling:

```
DIRECTIVE                               WHAT IT PRODUCES                     CCS BOOST
"Footer mirrors header"                 Bookending (Page-scale echo)         +0.05
"Drop cap uses primary red from header" Weight-response chain                +0.05
"Transition type varies by boundary"    Transition grammar (boundary logic)  +0.05
"Zone padding tracks density arc"       Spacing-density coupling             +0.05
"Zone backgrounds track same arc"       Multi-channel encoding               +0.10
"Zone font-weight tracks same arc"      Typographic-density coupling         +0.05
"Component padding varies by zone"      Component modulation (fractal echo)  +0.10
"Grid density co-varies with zone"      Grid-as-composition                  +0.05
```

### 9B. The Zone Value Card (Master Recipe)

For each zone, fill in this card. This IS compositional fluency in specification form.

```
ZONE: [N] -- [NAME]
Direction: [OPENING / DEEPENING / RESOLVING]

Background:     #______  (delta __ from adjacent zone, >= 15)
Padding:        __ px __ px
Font-weight:    body: ___ / labels: ___ / headings: ___
Letter-spacing: body: ___em / labels: 0.1em
Border-left:    callout: _px / component: _px / separator: _px
Heading size:   h2: ___rem / h3: ___rem
Layout:         [single-column / bento / hero / spokes / equal]
Components:     [list of component types deployed in this zone]

Channels shifting at entry boundary: [list 3+ channels]
Direction of shift: [all encoding DEEPENING / OPENING / RESOLVING]
```

When all 4 zone cards share a coherent directional arc, multi-channel encoding emerges from the VALUE COHERENCE, not from an instruction to "be compositionally fluent."

### 9C. Register 3 Dispositional Recipe

Register 3 (atmospheric coupling) cannot be fully specified through values. It requires a builder DISPOSITION. These prompts scaffold the disposition without specifying the output:

```
1. "Build as if each zone is a room in the same building. When you enter
    a new room, EVERYTHING changes -- light, temperature, density, texture.
    Not just one property."

2. "The density arc is not 4 independent settings. It is ONE gradient
    experienced through multiple channels simultaneously."

3. "Components are not islands. A callout in Zone 3 should FEEL different
    from the same callout in Zone 1 -- tighter, heavier, more urgent."

4. "Silence is composition. At least one zone should deploy FEWER
    mechanisms than adjacent zones, creating contrast through absence."

5. "Grid choice is not coverage -- it is expression. Use bento where
    content is parallel, flow where content is narrative, hero where
    content is hierarchical. Each grid says something about the content's
    structure."
```

---

## 10. COMPLETE BOUNDARY-BY-BOUNDARY RECIPE (4-Zone DEEPENING Example)

This is what the TC brief should produce: a complete value card for every boundary.

### Header -> Zone 1 (OPENING)

```css
/* Header: Dark anchor */
header {
  background: #1A1A1A;
  color: #FEF9F5;
  border-bottom: 3px solid #E83025;
  padding: 48px 32px;
}

/* Zone 1: OPENING -- warm, generous, editorial */
.zone-1 {
  background: #FEF9F5;      /* 220+ RGB delta from header (dark->light) */
  padding: 64px 80px;        /* Maximum breathing room */
}
.zone-1 p        { font-weight: 400; letter-spacing: 0; line-height: 1.7; }
.zone-1 h2       { font-size: 2.5rem; }
.zone-1 .callout { padding: 24px 32px; border-left: 3px solid; }

/* Drop cap: weight-response chain from header */
.zone-1 .opening::first-letter {
  font-family: var(--font-display);
  font-size: 3.5em;
  color: var(--color-primary);  /* Red bridges header into content */
  float: left;
  line-height: 0.8;
}
```

**Channels at Header->Z1 boundary:** Chromatic (dark->cream = 220+ RGB), Spatial (tight->generous), Structural (3px border disappears), Typographic (mono meta -> serif display). **4 channels, all OPENING.**

### Zone 1 -> Zone 2 (BUILDING)

```css
/* Boundary Z1->Z2: BUILDING -- HARD CUT */
.zone-2 {
  background: #F0EBE3;      /* delta 18 from Z1 #FEF9F5 */
  padding: 40px 80px;        /* Compressed from 64px */
  border-top: 3px solid var(--color-primary);  /* Hard cut signal */
}
.zone-2 p        { font-weight: 500; letter-spacing: 0; line-height: 1.6; }
.zone-2 h2       { font-size: 2rem; }
.zone-2 .callout { padding: 20px 24px; border-left: 4px solid; }
```

**Channels:** Chromatic (bg +18 RGB), Spatial (padding 64->40), Typographic (weight 400->500, h2 40->32), Structural (3px hard cut border). **4 channels, all DEEPENING.**

### Zone 2 -> Zone 3 (DEEPENING PEAK)

```css
/* Boundary Z2->Z3: DEEPENING -- BRIDGE (tinted breathing band) */
.checkpoint-bar {
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 16px 24px;
  background: #FAF5ED;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.zone-3 {
  background: #E8E0D4;      /* delta 15 from Z2 #F0EBE3 */
  padding: 32px 64px;        /* Maximum compression */
}
.zone-3 p        { font-weight: 600; letter-spacing: 0.03em; line-height: 1.5; }
.zone-3 h2       { font-size: 2rem; letter-spacing: normal; }  /* Reset -- 0.03em sub-perceptual on headings */
.zone-3 .callout { padding: 16px 20px; border-left: 4px solid; }
.zone-3 .data-table td { padding: 8px 12px; }
```

**Channels:** Chromatic (bg +15 RGB), Spatial (padding 40->32, component padding 20->16), Typographic (weight 500->600, letter-spacing 0->0.03em, line-height 1.6->1.5), Structural (checkpoint element + heavier component borders). **5 channels, all DEEPENING.** This is the climax boundary.

### Zone 3 -> Zone 4 (RESOLVING)

```css
/* Boundary Z3->Z4: RESOLVING -- CHECKPOINT */
.zone-4 {
  background: #F5F0E8;      /* delta 20 from Z3 #E8E0D4 -- lighter, releasing */
  padding: 48px 80px;        /* Opens up from 32px */
}
.zone-4 p        { font-weight: 400; letter-spacing: 0; line-height: 1.7; }
.zone-4 h2       { font-size: 2rem; }
.zone-4 .callout { padding: 24px 32px; border-left: 3px solid; }
```

**Channels:** Chromatic (bg +20 RGB lighter), Spatial (padding 32->48), Typographic (weight 600->400, letter-spacing 0.03->0, line-height 1.5->1.7), Structural (lighter callout borders 4px->3px). **4 channels, all RESOLVING.**

### Zone 4 -> Footer

```css
/* Footer: Dark mirror of header */
footer {
  background: #1A1A1A;
  color: #FEF9F5;
  border-top: 3px solid #E83025;
  padding: 48px 32px;
}
```

**Channels:** Chromatic (cream->dark = 220+ RGB), Structural (3px primary border-top mirrors header border-bottom). **Bookending closes the page-spanning arch.**

---

## SUMMARY

These tables provide **~550 lines of positive scaffolding** organized as:

1. **Typography** (type scale, weight arc, letter-spacing vocabulary, line-height)
2. **Color** (zone palette construction, accent budget, syntax highlighting)
3. **Spacing** (zone padding, component modulation, stacked gap verification)
4. **Borders** (3-tier hierarchy, color assignments, gradient recipes, solid offset)
5. **Layout** (container, 5 grid patterns, section templates, transitions, bookending)
6. **Mechanism recipes** (all 18 mechanisms with CSS, ranges, and budget)
7. **Anti-misallocation** (budget guide, imperceptible detection, alarm triggers)
8. **Register-specific tables** (Middle / Ceiling / Flagship value ranges)
9. **Fluency scaffolding** (structural directives, zone value cards, dispositional recipe)
10. **Complete boundary-by-boundary example** (4-zone DEEPENING arc with exact CSS)

**Guardrail-to-playbook ratio of this document: ~1:7** (inverted from the current 7.9:1).

Every table is designed so that a builder who follows it boundary-by-boundary will PRODUCE multi-channel encoding without being told to "compose interdependently." The compositional fluency emerges from the VALUE COHERENCE, not from an instruction about fluency.

---

**END REPORT 11**
