# THE OPERATIONAL RECIPE: Content-Agnostic Design System Page Pipeline

**Author:** operational-recipe-writer (Opus 4.6)
**Date:** 2026-02-18
**Sources:** 34+ pipeline-analysis files (~1.3MB), enriched master execution prompt (964 lines), enhanced remediation spec (1,026 lines), builder changelog (236 lines), final verdict (306 lines), design system CLAUDE.md files
**Purpose:** Transform 1.3MB of analysis into an actionable, sequenced pipeline specification that a building agent follows step-by-step

---

## HOW TO READ THIS DOCUMENT

This is a RECIPE, not a checklist. The distinction matters:

| Property | Checklist (FAILED) | Recipe (SUCCEEDED) |
|----------|-------------------|-------------------|
| Structure | 97 rules organized by domain | 9 phases organized by sequence |
| Verbs | "FAIL IF", "must be", "verify" | "Delete", "Add", "Replace", "Set" |
| Values | "channel actively used" (any amplitude) | "font-size: 17px" (exact) |
| Verification | "did the CSS rule exist?" | "can you SEE the difference?" |
| Constraint:Action ratio | 3.0:1 (constraints dominate) | 0.32:1 (actions dominate) |

Evidence: The middle-tier experiment succeeded with a 100-line recipe (PA-05 4/4 DESIGNED). The flagship failed with a 71-rule checklist (PA-05 1.5/4 DO NOT SHIP). The remediation spec succeeded as a recipe (PA-05 1.5/4 -> 2.5/4, projected 3.0+ after CSS fixes).

**THE RULE:** Every step in this document tells you WHAT TO DO. Constraints are embedded in the values, not stated as separate rules. If you follow the steps in order, compliance is automatic.

---

================================================================
# PART 1: THE RECIPE
================================================================

The recipe has 9 phases (0-8). Execute in order. Do not skip phases. Do not backtrack. Each phase ends with a perception check -- a visual verification that the phase produced visible results.

This recipe is CONTENT-AGNOSTIC. It works for any content type (tutorial, reference, conceptual guide, API docs, research synthesis, etc.) within the KortAI design system. Content-specific decisions are marked with **[CONTENT DECISION]** and guidance is provided for how to make them.

---

## PHASE 0: CONTENT ANALYSIS AND ZONE ARCHITECTURE (~20 min)

**Goal:** Understand what you are building, determine the zone structure, and establish the spatial skeleton.

### Step 0.1: Read Mandatory Foundation Files

Read these 2 files BEFORE any other action:
1. `design-system/compositional-core/identity/prohibitions.md` (353 lines) -- soul constraints
2. `design-system/compositional-core/vocabulary/tokens.css` (174 lines) -- palette and spacing

**Why:** These define what you CANNOT do. Every CSS value in this recipe complies with these constraints. If you skip them, you will write soul violations (border-radius > 0, box-shadow, wrong colors) that require rebuilding.

**Verification:** Can you answer: What is the primary color? (`#E83025`) What fonts are allowed? (Instrument Serif, Inter, JetBrains Mono) What is border-radius? (0, always, no exceptions)

### Step 0.2: Read the Content

Read the content source file completely. As you read, note:

1. **Word count** -- determines zone count (Step 0.3)
2. **Content type inventory** -- what elements exist:
   - Paragraphs (prose)
   - Tables (data)
   - Lists (enumeration)
   - Code blocks (technical)
   - Quotes/pullquotes (emphasis)
   - Figures/diagrams (visual)
   - Callouts/warnings/tips (semantic markup)
3. **Content arc** -- does the content have a natural progression?
   - Introduction -> body -> conclusion (most common)
   - Problem -> analysis -> solution
   - Theory -> evidence -> application
   - Overview -> details -> synthesis

**[CONTENT DECISION]** The content arc determines zone semantics (Step 0.4).

**Verification:** Write down: total word count, count of each element type, and the content arc in one sentence.

### Step 0.3: Determine Zone Count

| Word Count | Zone Count | Section Count | Rationale |
|-----------|-----------|--------------|-----------|
| < 1,500 | 2 | 3-5 | Short content. Two moods: open and resolved. |
| 1,500 - 3,000 | 3 | 5-8 | Medium content. Three acts: setup, development, resolution. |
| 3,000 - 5,000 | 4 | 8-12 | Long content. Four movements with distinct character. |
| 5,000+ | 5 | 10-15 | Extended content. Five is the mathematical ceiling (Alexander/Salingaros: ln(120)/ln(2.7) ~ 4.8). |

**THE RULE:** NEVER exceed 5 zones. If content is very long (10,000+ words), use 5 zones with more sections per zone. Beyond 5, add CHANNELS (more CSS properties encoding meaning), not LEVELS (more zoom magnifications).

**Why:** The middle-tier experiment achieved PA-05 4/4 DESIGNED with 2-3 zones. The ceiling experiment achieved PA-05 1.5/4 DO NOT SHIP with 4+ zones but collapsed spatial confidence. More zones is NOT better. Fewer zones with perceptible contrast IS better.

**Verification:** Zone count is a single number. Write it down.

### Step 0.4: Assign Zone Semantics

**[CONTENT DECISION]** Map your content arc to zone character. Each zone gets a personality:

| Zone Property | Example Values | Perception |
|--------------|---------------|------------|
| Temperature | Warm (peach/cream), Neutral (gray-cream), Cool (near-white) | Background color family |
| Density | Open (generous spacing), Standard, Compressed (tight spacing) | Paragraph margins and padding |
| Voice | Expansive (17px, wide line-height), Standard (16px), Tight (15px) | Font size and line height |
| Weight | Light (font-weight 400), Standard, Heavy (font-weight 600) | Heading weight |

**3-Zone Example (most common):**
| Zone | Sections | Temperature | Density | Voice | Weight |
|------|----------|-------------|---------|-------|--------|
| Zone 1 (Opening) | S1-S3 | Warm | Open | Expansive | Light |
| Zone 2 (Core) | S4-S8 | Cool/Neutral | Compressed | Tight | Heavy |
| Zone 3 (Resolution) | S9-S12 | Warm | Standard | Standard | Light |

**2-Zone Example:**
| Zone | Sections | Temperature | Density | Voice | Weight |
|------|----------|-------------|---------|-------|--------|
| Zone 1 (Body) | S1-S3 | Warm | Open | Expansive | Light |
| Zone 2 (Resolution) | S4-S5 | Neutral | Standard | Standard | Heavy |

**Why:** Zone semantics drive every CSS value in Phases 2-5. If you skip this step, your CSS values will be arbitrary rather than meaningful.

**Verification:** You have a table mapping every section to a zone with 4 properties assigned.

### Step 0.5: Establish Section Architecture

For each section, determine:
1. **Section number** (S1, S2, ... SN)
2. **Zone assignment** (from Step 0.4)
3. **Primary content type** (prose-dominant, table-dominant, mixed, visual)
4. **Layout shape** -- **[CONTENT DECISION]**:
   - **Single-column** (default for prose)
   - **Two-column grid** (for paired elements: comparison, tension/resolution, before/after)
   - **2x2 grid** (for 4 parallel elements: steps, options, quadrants)
   - **Asymmetric** (for sidebar + main, annotation + content)

**THE RULE:** At least 2 of your sections MUST use non-single-column layout. Single-column throughout is the #1 layout monotony failure. Grid layouts require HTML wrapper divs -- plan them now.

**Why:** The flagship experiment had zero multi-column layouts across 2,034 lines. This single-column monotony was flagged by every adversarial reviewer. Even 2-3 grid sections break the visual monotony enough for a gestalt impression of variety.

**Verification:** You have a section-by-section plan. At least 2 sections have grid layouts.

### Step 0.6: Determine Transition Types

Between each pair of adjacent sections, assign a transition type:

| Transition Type | Visual Weight | When to Use |
|----------------|--------------|-------------|
| **Smooth** | 1px line, subtle color, 16px margins | Between sections WITHIN the same zone |
| **Bridge** | 2px line, dark color, 24px margins, optional bridge prose | Between sections at zone BOUNDARIES |
| **Breathing** | 4px line, primary (red) color, 24px margins | Between MAJOR structural shifts (max 2-3 per page) |

**THE RULE:** Breathing transitions are RARE. Use at most 2-3 per page. They mark the 1-2 most significant structural pivots.

**Stacking Arithmetic (critical -- this prevents whitespace voids):**
```
Worst-case total gap = section-padding-bottom + divider-margin-top + divider-height + divider-margin-bottom + next-section-padding-top
Breathing worst case = 32px + 24px + 4px + 24px + 24px = 108px < 120px target  -- PASSES
Bridge worst case   = 32px + 24px + 2px + 24px + 24px = 106px < 120px target   -- PASSES
Smooth worst case   = 32px + 16px + 1px + 16px + 24px = 89px  < 120px target   -- PASSES
```

**Why:** The S-09 stacking loophole was the #2 failure cause. Individual spacing values looked fine (48px, 64px, 80px -- all under 96px) but they STACKED at section boundaries to create 210-276px voids. The reduced margins (16px/24px) prevent this.

**Verification:** Every section boundary has an assigned transition type. No gap can exceed 120px.

### CHECKPOINT: Phase 0 Complete

You now have:
- [ ] Soul constraints loaded (prohibitions + tokens)
- [ ] Content analyzed (word count, element inventory, content arc)
- [ ] Zone count determined (2-5)
- [ ] Zone semantics assigned (temperature, density, voice, weight per zone)
- [ ] Section architecture planned (layout shapes, at least 2 grids)
- [ ] Transition types assigned (smooth/bridge/breathing between every pair)

**Do NOT proceed to Phase 1 until all boxes are checked.**

---

## PHASE 1: HTML SKELETON (~30 min)

**Goal:** Write the complete HTML structure with semantic markup, accessibility, and grid wrappers. NO CSS beyond what tokens.css provides.

### Step 1.1: Write the Document Shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[PAGE TITLE]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    /* CSS will go here in Phases 2-7 */
  </style>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header class="page-header" role="banner">
    <!-- Header content: Step 1.2 -->
  </header>

  <main id="main-content">
    <!-- Sections and transitions: Steps 1.3-1.6 -->
  </main>

  <footer class="page-footer" role="contentinfo">
    <!-- Footer content: Step 1.7 -->
  </footer>
</body>
</html>
```

**Why skip-link:** WCAG 2.1 SC 2.4.1 requires a mechanism to bypass repeated blocks. The remediation added this; every page going forward includes it.

### Step 1.2: Write the Header

```html
<header class="page-header" role="banner">
  <div class="header-inner">
    <div class="header-label">[CATEGORY LABEL -- e.g., "Research Synthesis", "API Reference"]</div>
    <h1>[PAGE TITLE]</h1>
    <p class="header-subtitle">[SUBTITLE -- one sentence summarizing the page]</p>
    <div class="header-meta">[METADATA -- author, date, reading time, version]</div>
  </div>
</header>
```

**Constraints:**
- Header MUST be <= 20% of first viewport at 1440px (288px). Kill at 25% (360px).
- Dark warm background with red accent border (bookend pattern).
- Instrument Serif for h1, Inter for everything else.

### Step 1.3: Write Sections with Zone Classes and ARIA

For each section from your Phase 0 plan:

```html
<!-- Transition divider between sections -->
<div class="divider-[smooth|bridge|breathing]" role="separator" aria-hidden="true"></div>

<!-- Optional bridge prose for bridge/breathing transitions -->
<div class="bridge-prose">
  <p><em>[One sentence justifying the shift -- e.g., "Now that we understand the principles, let us examine the practice."]</em></p>
</div>

<!-- The section itself -->
<section class="zone-s[N]" aria-label="Section [N]: [Section Title]">
  <div class="page-container">
    <div class="section-indicator">[SECTION N] / [READING PATTERN] / [DENSITY LABEL]</div>
    <h2>[Section Heading]</h2>
    <!-- Content elements go here -->
  </div>
</section>
```

**[CONTENT DECISION]** The section-indicator metadata (`[READING PATTERN] / [DENSITY LABEL]`) is a content-specific editorial element. Examples:
- `SECTION 1 / ORIENTATION / SPARSE` (opening context)
- `SECTION 5 / DEEP DIVE / DENSE` (analytical core)
- `SECTION 9 / SYNTHESIS / MODERATE` (resolution)

### Step 1.4: Add Component Markup

Use the component library class names, not custom classes. The flagship experiment created 54 custom classes because the builder never saw the component library. Use these standard classes:

**Callouts (semantic emphasis blocks):**
```html
<div class="callout callout--info" role="note">
  <div class="callout__label">[CALLOUT TITLE]</div>
  <div class="callout__body"><p>[CALLOUT CONTENT]</p></div>
</div>
```

Callout variants:
- `callout--info` -- neutral information (tan/blue border)
- `callout--gotcha` -- warnings, common mistakes (coral border)
- `callout--tip` -- recommendations, best practices (green border)
- `callout--essence` -- key insights, philosophical statements (amber border, display font)

**Tables:**
```html
<div class="table-wrapper">
  <table class="table-compact">
    <thead><tr><th>...</th></tr></thead>
    <tbody><tr><td>...</td></tr></tbody>
  </table>
</div>
```

Table variants: `table-compact`, `table-featured`, `table-light`, `table-warning`, `table-data`.

**Pullquotes:**
```html
<blockquote class="essence-pullquote">
  <p>[PULLQUOTE TEXT]</p>
</blockquote>
```

### Step 1.5: Add Grid Wrappers for Non-Single-Column Sections

For each section you planned with grid layout in Step 0.5:

**Two-column paired elements:**
```html
<div class="content-pair">
  <div class="callout callout--gotcha" role="note">...</div>
  <div class="callout callout--tip" role="note">...</div>
</div>
```

**2x2 grid (4 parallel elements):**
```html
<div class="content-grid">
  <div class="grid-item">...</div>
  <div class="grid-item">...</div>
  <div class="grid-item">...</div>
  <div class="grid-item">...</div>
</div>
```

**Why wrapper divs:** CSS `grid-template-columns: 1fr 1fr` requires a grid container parent. Without these wrappers, you cannot create multi-column layouts. The flagship had zero wrappers and therefore zero grids.

### Step 1.6: Add Remaining ARIA and Semantic Attributes

For every divider: `role="separator" aria-hidden="true"`
For every callout: `role="note"`
For header: `role="banner"`
For footer: `role="contentinfo"`
For every section: `aria-label="Section N: [Title]"`

### Step 1.7: Write the Footer

```html
<footer class="page-footer" role="contentinfo">
  <div class="footer-inner">
    <div class="footer-label">[LABEL]</div>
    <p class="footer-closing">[CLOSING STATEMENT]</p>
    <div class="footer-meta">[METADATA -- provenance, system info]</div>
  </div>
</footer>
```

**Constraints:** Dark warm background matching header (bookend pattern). Footer MUST exist with visible content.

### PERCEPTION CHECK: Phase 1

Open the HTML file in a browser at 1440px. You should see:
- Raw, unstyled content with system fonts
- All sections present with their headings
- Skip link visible at the top (it will be hidden by CSS later)
- Grid wrappers exist (even though grids don't display yet)
- All content is present and readable

**If any section is missing content, fix it NOW. It is 10x harder to add content after CSS is applied.**

---

## PHASE 2: BASE CSS AND SOUL ENFORCEMENT (~15 min)

**Goal:** Establish the CSS foundation: reset, tokens, soul enforcement, container, base typography. After this phase, the page should look clean and minimal -- correct fonts, correct colors, correct container width.

### Step 2.1: Write the CSS Reset and Token Block

```css
/* ============================================================
   RESET + TOKENS
   ============================================================ */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Soul Constraints (IMMUTABLE) */
  --radius-sharp: 0;

  /* Color Palette */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #6B6560;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;
  --color-accent-blue: #2563EB;

  /* Warm palette extensions */
  --color-coral: #C97065;
  --color-green: #6B9B7A;
  --color-amber: #C49052;

  /* Typography */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', -apple-system, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Spacing Scale (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Zone Backgrounds -- PLACEHOLDER, replaced in Phase 3 */
  /* [Zone color variables will go here] */
}
```

### Step 2.2: Apply Soul Enforcement

```css
/* ============================================================
   SOUL ENFORCEMENT (ABSOLUTE -- never override)
   ============================================================ */
* {
  border-radius: 0 !important;
  box-shadow: none !important;
}
```

**Why !important:** This is the ONLY justified use of !important in the entire stylesheet. It prevents accidental soul violations from any component or override. The builder changelog confirmed: "Zero violations across 22 prohibitions" after applying this pattern. Without it, individual components can slip through with border-radius > 0.

### Step 2.3: Base Typography and Container

```css
/* ============================================================
   BASE TYPOGRAPHY + CONTAINER
   ============================================================ */
body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-text);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
}

.page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 var(--space-8);
}

section h2 {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--color-text);
  margin-bottom: var(--space-6);
}

section h3 {
  font-family: var(--font-body);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-text);
  margin-top: var(--space-8);
  margin-bottom: var(--space-4);
}

section p {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 1em;
  max-width: 68ch;
}
```

**Container width 960px is NON-NEGOTIABLE.** This was THE primary Phase D failure mode (4/5 pages violated it). Express narrowing through INTERNAL spacing (paragraph max-width), not external width reduction.

### Step 2.4: Header and Footer (Bookend Pattern)

```css
/* ============================================================
   BOOKEND PATTERN: Dark warm header + footer
   ============================================================ */
.page-header {
  background-color: #1E1B18;
  color: var(--color-background);
  padding: var(--space-16) var(--space-8);
  border-top: 4px solid var(--color-primary);
}

.page-header .header-inner {
  max-width: 960px;
  margin: 0 auto;
}

.page-header h1 {
  font-family: var(--font-display);
  font-size: 42px;
  font-weight: 400;
  line-height: 1.15;
  color: var(--color-background);
  margin-bottom: var(--space-4);
}

.page-header .header-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.page-header .header-subtitle {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 20px;
  color: #C4B5A5;
  margin-bottom: var(--space-6);
  max-width: 48ch;
}

.page-header .header-meta {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #8A8580;
  letter-spacing: 0.04em;
}

.page-footer {
  background-color: #1E1B18;
  color: var(--color-background);
  padding: var(--space-16) var(--space-8);
  border-bottom: 4px solid var(--color-primary);
}

.page-footer .footer-inner {
  max-width: 960px;
  margin: 0 auto;
}

.page-footer .footer-closing {
  font-family: var(--font-display);
  font-size: 24px;
  font-style: italic;
  color: #C4B5A5;
  margin-bottom: var(--space-6);
}

.page-footer .footer-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.page-footer .footer-meta {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #8A8580;
}
```

**Why dark bookends:** The header was unanimously praised by all 9 PA auditors as "the single strongest designed moment" and "a premium literary magazine opening." This pattern is proven and should be reused.

### PERCEPTION CHECK: Phase 2

Open the page at 1440px. You should see:
- Dark header with red accent border at top, Instrument Serif title
- Clean, readable body text in Inter at 16px
- Container centered at 960px (not full-width)
- Dark footer matching the header
- All sharp edges (zero rounded corners anywhere)
- NO pure black or pure white backgrounds

**If the header feels too tall (> 288px), reduce padding. If the container is wider than 960px, check your max-width.**

---

## PHASE 3: ZONE SYSTEM AND BACKGROUNDS (~10 min)

**Goal:** Make zones VISIBLE through background color variation. After this phase, scrolling should reveal perceptible color shifts at zone boundaries.

### Step 3.1: Define Zone Background Colors

**[CONTENT DECISION]** Choose background colors based on your zone semantics from Step 0.4. The key constraint: adjacent zones MUST differ by >= 10 RGB points on at least one channel.

**3-Zone Warm-Cool-Warm Template (most common):**
```css
/* Zone 1: Warm (opening) */
--color-zone-s1: #FEF5EB;   /* warm peach cream */
--color-zone-s2: #F5EDE2;   /* warm tan */
--color-zone-s3: #FBF3E8;   /* warm honey */

/* Zone 2: Cool/Neutral (core) */
--color-zone-s4: #F8F6F3;   /* cooling cream */
--color-zone-s5: #FAF8F5;   /* warm near-white -- NOT pure #FAFAFA (cool gray = soul violation) */
--color-zone-s6: #F5F0E8;   /* warm breath */
--color-zone-s7: #F8F6F3;   /* warm neutral */
--color-zone-s8: #F2EFEA;   /* warm mid-gray */

/* Zone 3: Warm (resolution) */
--color-zone-s9: #FEF7F0;   /* refined cream */
--color-zone-s10: #FEF5EB;  /* bookend echo of S1 */
--color-zone-s11: #F8F2EA;  /* gentle breathing */
--color-zone-s12: #FEF5EB;  /* clean cream */
```

**2-Zone Template:**
```css
--color-zone-s1: #FEF5EB;   /* warm cream */
--color-zone-s2: #F5EDE2;   /* warm tan */
--color-zone-s3: #FBF3E8;   /* warm honey */
--color-zone-s4: #F8F6F3;   /* cooling */
--color-zone-s5: #F5F0E8;   /* settled */
```

**CRITICAL -- Warm-only palette:** Every background MUST satisfy R >= G >= B (the warm test). #FAFAFA, #F8F8F8, #F0F0F0 are COOL GRAYS and are soul violations. Replace them with warm equivalents (#FAF8F5, #F8F6F3, #F2EFEA).

### Step 3.2: Apply Zone Backgrounds

```css
/* ============================================================
   ZONE BACKGROUNDS
   ============================================================ */
.zone-s1 { background-color: var(--color-zone-s1); }
.zone-s2 { background-color: var(--color-zone-s2); }
/* ... one rule per section ... */
```

### Step 3.3: Apply Section Padding by Zone

```css
/* ============================================================
   SECTION PADDING BY ZONE
   Use !important to override any inline style="" attributes
   ============================================================ */

/* Zone 1 (Opening): Generous */
.zone-s1, .zone-s2, .zone-s3 {
  padding-top: var(--space-16) !important;    /* 64px */
  padding-bottom: var(--space-10) !important;  /* 40px */
}

/* Zone 2 (Core): Compressed */
.zone-s4, .zone-s5, .zone-s6, .zone-s7, .zone-s8 {
  padding-top: var(--space-8) !important;      /* 32px */
  padding-bottom: var(--space-8) !important;   /* 32px */
}

/* Zone 3 (Resolution): Settled */
.zone-s9, .zone-s10, .zone-s11 {
  padding-top: var(--space-12) !important;     /* 48px */
  padding-bottom: var(--space-10) !important;  /* 40px */
}

/* Final section: Extra bottom breathing */
.zone-s12 {
  padding-top: var(--space-12) !important;     /* 48px */
  padding-bottom: var(--space-16) !important;  /* 64px */
}
```

**Adapt these selectors to YOUR section/zone count.** The values (64px/32px/48px) embody the density semantics from Step 0.4.

### PERCEPTION CHECK: Phase 3

Open the page at 1440px. Scroll from top to bottom at normal speed.
- Can you SEE at least 2 distinct background color shifts WITHOUT a color picker? If not, increase RGB deltas between adjacent zones.
- Do Zone 2 sections feel TIGHTER (less top/bottom padding) than Zone 1? If not, check your padding values.
- Is the page still within the 960px container? Check with browser dev tools.

---

## PHASE 4: STRUCTURAL BORDERS AND DIVIDERS (~15 min)

**Goal:** Add visible structural elements -- section-level borders, divider lines, and callout containment. This is the HIGHEST-IMPACT phase. Ch4 (Structural) was completely absent from the flagship page body and was flagged as the single biggest gap.

### Step 4.1: Section-Level Left Borders

Add left borders to ALTERNATING sections (not every section -- alternation creates rhythm through presence/absence).

**[CONTENT DECISION]** Choose which sections get borders based on content weight. Sections with more analytical or conclusory content typically get borders; transitional sections go without.

```css
/* ============================================================
   STRUCTURAL BORDERS -- Section-level containment
   Alternating presence creates rhythm.
   ============================================================ */
.zone-s2 .page-container {
  border-left: 3px solid var(--color-border);
  padding-left: 29px;  /* 32px - 3px border = 29px */
}

.zone-s5 .page-container {
  border-left: 4px solid var(--color-primary);
  padding-left: 28px;  /* 32px - 4px border = 28px */
}

.zone-s7 .page-container {
  border-left: 3px solid var(--color-text);
  padding-left: 29px;
}

.zone-s9 .page-container {
  border-left: 3px solid #5C4B3A;
  padding-left: 29px;
}

.zone-s12 .page-container {
  border-left: 4px solid var(--color-text);
  padding-left: 28px;
}
```

**Adapt selectors to YOUR section count.** The pattern: 40-60% of sections get borders; vary color and weight (3px/4px).

**Why this pattern:** Border presence/absence creates rhythm. If every section has a border, borders become background noise. Alternation makes bordered sections feel contained and unbordered sections feel open -- a perceptible structural contrast that costs zero cognitive load.

### Step 4.2: Transition Dividers

```css
/* ============================================================
   TRANSITION GRAMMAR -- 3 types, each visually distinct
   ============================================================ */
.divider-smooth {
  height: 1px;
  background-color: var(--color-border);
  margin: 16px 0;
}

.divider-bridge {
  height: 2px;
  background-color: var(--color-text);
  margin: 24px 0;
}

.divider-breathing {
  height: 4px;
  background-color: var(--color-primary);
  margin: 24px 0;
}

.bridge-prose {
  max-width: 60ch;
  margin: 0 auto;
  padding: var(--space-4) 0;
  margin-bottom: 16px;
  font-family: var(--font-display);
  font-style: italic;
  font-size: 16px;
  color: var(--color-text-secondary);
  text-align: center;
}
```

**THE RULE:** Divider margins MUST be <= 24px. This prevents void stacking. The arithmetic proof is in Step 0.6.

### Step 4.3: Callout Family

```css
/* ============================================================
   CALLOUT FAMILY -- 4 semantic variants
   ============================================================ */
.callout {
  border-left: 4px solid var(--color-primary);
  border-top: 1px solid var(--color-border);
  margin: var(--space-6) 0;
}

.callout__label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle);
}

.callout__body {
  padding: var(--space-4);
}

.callout__body p {
  margin-bottom: 0;
}

/* Variants */
.callout--info {
  border-left-color: var(--color-border);
  background-color: #FAF8F5;
}
.callout--info .callout__label { color: var(--color-text-secondary); }

.callout--gotcha {
  border-left-color: var(--color-coral);
  background-color: #FEF6F5;
}
.callout--gotcha .callout__label { color: var(--color-coral); }

.callout--tip {
  border-left-color: var(--color-green);
  background-color: #F8F7F2;
}
.callout--tip .callout__label { color: var(--color-green); }

.callout--essence {
  border-left-color: var(--color-amber);
  background-color: #FEF5EB;
  font-family: var(--font-display);
}
.callout--essence .callout__label { color: var(--color-amber); }
```

**All callout backgrounds MUST pass the warm test (R >= G >= B).** The original remediation spec used #F5F8FA (cool blue tint) and #F5FAF5 (cool green tint) for callout--info and callout--tip. The builder correctly replaced these with warm equivalents.

### Step 4.4: Grid Layouts

```css
/* ============================================================
   GRID LAYOUTS -- Break single-column monotony
   ============================================================ */
.content-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin: var(--space-6) 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin: var(--space-6) 0;
}
```

### Step 4.5: Table Styling

```css
/* ============================================================
   TABLES
   ============================================================ */
table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--space-6) 0;
  font-size: 14px;
}

table thead tr {
  background-color: #F5F0E8;
  border-bottom: 2px solid var(--color-border);
}

table th {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: left;
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-secondary);
}

table td {
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle);
  vertical-align: top;
}

.table-featured thead tr {
  background-color: #FEF0EE;
}

.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

### Step 4.6: Blockquote / Pullquote

```css
/* ============================================================
   PULLQUOTE
   ============================================================ */
.essence-pullquote {
  font-family: var(--font-display);
  font-size: 24px;
  font-style: italic;
  line-height: 1.4;
  color: var(--color-text);
  border-left: 4px solid var(--color-primary);
  padding: var(--space-6) var(--space-8);
  margin: var(--space-8) 0;
  max-width: 54ch;
}

.essence-pullquote p {
  font-family: var(--font-display);
  font-size: 24px;
  margin-bottom: 0;
}
```

### Step 4.7: Section Indicator

```css
/* ============================================================
   SECTION INDICATOR (editorial wayfinding)
   ============================================================ */
.section-indicator {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-subtle);
}
```

### PERCEPTION CHECK: Phase 4

Open the page at 1440px. Scroll through the full page.
- Can you see left borders on the sections you targeted? At least 3 should be visible.
- Are the three divider types visually distinct? (1px subtle, 2px dark, 4px red)
- Do callout variants have different border colors? (tan, coral, green, amber)
- Are grid sections displaying side-by-side? (If not, check your wrapper HTML)
- Is there NO screenful that is 100% blank cream? (If yes, check gap arithmetic)

---

## PHASE 5: TYPOGRAPHY ZONES (~10 min)

**Goal:** Make the typographic voice shift perceptibly across zones. After this phase, Zone 1 text should look LARGER and more OPEN than Zone 2 text.

### Step 5.1: Paragraph Typography by Zone

```css
/* ============================================================
   TYPOGRAPHIC ZONE VARIATION
   Every value exceeds the perception threshold for its property.
   ============================================================ */

/* Zone 1: Generous reading */
.zone-s1 p, .zone-s2 p, .zone-s3 p {
  font-size: 17px;         /* Threshold: >= 2px difference from Zone 2 */
  line-height: 1.85;       /* Threshold: >= 0.2 difference from Zone 2 */
  letter-spacing: 0.02em;  /* Threshold: >= 0.025em total range */
  max-width: 62ch;
  color: #2A2520;          /* Warmer near-black */
}

/* Zone 2: Analytical compression */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  font-size: 15px;         /* 2px smaller than Zone 1 */
  line-height: 1.55;       /* 0.30 tighter than Zone 1 */
  letter-spacing: -0.01em; /* 0.03em tighter than Zone 1 */
  max-width: 72ch;         /* 10ch wider measure */
  color: var(--color-text); /* Standard near-black */
}

/* Transitional sections */
.zone-s4 p, .zone-s6 p {
  font-size: 16px;
  line-height: 1.7;
  letter-spacing: 0;
  max-width: 68ch;
}

/* Zone 3: Settled output */
.zone-s9 p, .zone-s10 p, .zone-s11 p, .zone-s12 p {
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0;
  max-width: 64ch;
  color: #1E1B18;          /* Slightly warmer near-black */
}
```

**Adapt zone selectors to YOUR section/zone mapping.** The values encode the zone semantics: Zone 1 = expansive (larger type, wider spacing), Zone 2 = compressed (smaller type, tighter spacing), Zone 3 = settled (standard type, moderate spacing).

### Step 5.2: Heading Typography by Zone

```css
/* Zone 1: Display-weight, warm */
.zone-s1 h2, .zone-s2 h2, .zone-s3 h2 {
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: #3D3530;
}

/* Zone 2: Functional, heavy, tight */
.zone-s5 h2, .zone-s7 h2, .zone-s8 h2 {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

/* Zone 3: Refined, settled */
.zone-s9 h2, .zone-s10 h2, .zone-s11 h2, .zone-s12 h2 {
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0;
  color: #2D2825;
}
```

### Step 5.3: Paragraph Spacing by Zone

```css
/* ============================================================
   PARAGRAPH SPACING BY ZONE
   ============================================================ */
.zone-s1 p, .zone-s2 p, .zone-s3 p { margin-bottom: 20px; }
.zone-s5 p, .zone-s7 p, .zone-s8 p { margin-bottom: 12px; }
.zone-s4 p, .zone-s6 p { margin-bottom: 16px; }
.zone-s9 p, .zone-s10 p, .zone-s11 p, .zone-s12 p { margin-bottom: 18px; }
```

### PERCEPTION CHECK: Phase 5

Compare Zone 1 (S1-S3) and Zone 2 (S5-S8) side by side (or scroll between them).
- Zone 1 text should look LARGER and more OPEN.
- Zone 2 headings should look BOLDER and TIGHTER.
- If you cannot see the difference, your selectors are wrong -- check that the zone-specific rules have higher specificity than the base rules.

---

## PHASE 6: ELEMENT-LEVEL RICHNESS (~10 min)

**Goal:** Add the finest-grained designed details: inline code, links, hover states, selection styling. This completes Scale 5 (all 5 levels of attention have designed moments).

### Step 6.1: Inline Elements

```css
/* ============================================================
   ELEMENT-LEVEL RICHNESS (Scale 5, Level 5)
   ============================================================ */

/* Inline code */
code:not(pre code) {
  background: var(--color-border-subtle);
  border: 1px solid var(--color-border);
  padding: 1px 4px;
  font-family: var(--font-mono);
  font-size: 0.9em;
}

/* Links */
a {
  color: var(--color-primary);
  text-decoration: underline;
  transition: color 0.15s ease;
}
a:hover {
  color: var(--color-text);
}

/* Table row hover */
table tbody tr {
  transition: background-color 0.1s ease;
}
table tbody tr:hover {
  background-color: var(--color-border-subtle);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Text selection */
::selection {
  background: var(--color-primary);
  color: var(--color-background);
}
```

### Step 6.2: Code Blocks (if applicable)

```css
/* Dark code blocks (if content includes code) */
pre {
  background: #2A2520;
  color: #E8E0D8;
  padding: var(--space-6);
  margin: var(--space-6) 0;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.6;
  border-left: 3px solid var(--color-primary);
}

pre code {
  background: none;
  border: none;
  padding: 0;
  font-size: inherit;
}
```

### Step 6.3: Drop Cap (optional, for prose-heavy opening sections)

```css
/* Drop cap for opening section (Zone 1, S1 only) */
.zone-s1 .page-container > p:first-of-type::first-letter {
  font-family: var(--font-display);
  font-size: 3.5em;
  float: left;
  line-height: 0.8;
  padding-right: 8px;
  color: var(--color-primary);
}
```

### PERCEPTION CHECK: Phase 6

- Select some text -- it should highlight in RED with cream text.
- Hover over a table row -- the row should get a subtle warm background.
- Hover over a link -- the color should transition smoothly.
- Inline code should have a visible background and border.

---

## PHASE 7: ACCESSIBILITY AND RESPONSIVE (~15 min)

**Goal:** Complete WCAG 2.1 AA compliance and ensure the page works at 768px and 480px breakpoints.

### Step 7.1: Accessibility

```css
/* ============================================================
   ACCESSIBILITY
   ============================================================ */

/* Focus states (WCAG 2.1 SC 2.4.7) */
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* Skip link (WCAG 2.1 SC 2.4.1) */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--color-primary);
  color: var(--color-background);
  padding: var(--space-2) var(--space-4);
  z-index: 1000;
  font-family: var(--font-body);
  font-size: 14px;
  text-decoration: none;
}
.skip-link:focus { top: 0; }

/* Reduced motion (WCAG 2.1 SC 2.3.3) */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Step 7.2: Print Styles

```css
/* ============================================================
   PRINT
   ============================================================ */
@media print {
  body { background: white; color: black; }
  .skip-link, .section-indicator { display: none; }
  .page-header, .page-footer {
    background: white;
    color: black;
    border-color: black;
  }
  .page-header h1, .page-header .header-subtitle,
  .page-header .header-meta, .page-header .header-label {
    color: black;
  }
  .page-footer .footer-closing, .page-footer .footer-meta,
  .page-footer .footer-label {
    color: black;
  }
  section { background: white !important; }
  .callout { border-left-color: black; background: #f9f9f9; }
  blockquote, .callout, table { break-inside: avoid; }
}
```

### Step 7.3: Responsive Breakpoints

```css
/* ============================================================
   RESPONSIVE: 768px
   ============================================================ */
@media (max-width: 768px) {
  .page-header { padding: var(--space-8) var(--space-4); }
  .page-header h1 { font-size: 28px; }
  .page-header .header-inner { max-width: 100%; }

  .page-container { max-width: 100%; }
  section {
    padding-left: var(--space-4) !important;
    padding-right: var(--space-4) !important;
  }

  .content-pair, .content-grid { grid-template-columns: 1fr; }

  .table-wrapper { overflow-x: auto; }

  .page-footer { padding: var(--space-8) var(--space-4); }
}

/* ============================================================
   RESPONSIVE: 480px
   ============================================================ */
@media (max-width: 480px) {
  .page-header h1 { font-size: 24px; }
  section h2 { font-size: 22px; }
  section h3 { font-size: 18px; }
  .callout__body { padding: var(--space-3); }
  .essence-pullquote { font-size: 20px; padding: var(--space-4); }
  .section-indicator { font-size: 0.625rem; }
  .page-footer .footer-closing { font-size: 18px; }
}
```

### PERCEPTION CHECK: Phase 7

- Press Tab -- a visible red focus ring should appear on interactive elements.
- Resize to 768px -- grids should collapse to single-column. Tables should scroll horizontally.
- Resize to 480px -- headings and body text should be smaller. Page should remain readable.
- Print preview (Cmd+P) -- backgrounds should be white, text should be black.

---

## PHASE 8: VERIFICATION (~15 min)

**Goal:** Verify the page meets all quality thresholds before shipping.

### 8A: Perception Threshold Verification

For every CSS property that varies across zones, verify the delta exceeds the perception threshold:

| Property | Minimum Perceptible Delta | How to Check |
|----------|--------------------------|--------------|
| Background color | >= 10 RGB points between adjacent zones | Screenshot Zone 1 next to Zone 2. Can you SEE the color shift? |
| Font-size | >= 2px between zone groups | Computed style: Zone 1 p (17px) vs Zone 2 p (15px) |
| Font-weight | >= 200 units between zone groups | Computed style: Zone 1 h2 (400) vs Zone 2 h2 (600) |
| Line-height | >= 0.2 between zone groups | Computed style: Zone 1 p (1.85) vs Zone 2 p (1.55) |
| Letter-spacing | >= 0.025em total range | Computed style: Zone 1 p (0.02em) vs Zone 2 p (-0.01em) |
| Border weight | >= 1px difference between levels | Visual: 1px divider vs 4px breathing divider |
| Margin-bottom | >= 8px between zone groups | Computed style: Zone 1 p (20px) vs Zone 2 p (12px) |

**THE RULE:** If a human cannot SEE the difference without a color picker or inspector, do NOT ship the CSS. Increase the delta or remove the variation.

### 8B: Void Prevention Verification

Scroll through the ENTIRE page at 1440px. At every inter-section gap:

1. No gap exceeds 120px of blank background (content-free space).
2. No full viewport (900px) is 100% blank at any scroll position.
3. Bridge prose fills transition gaps at zone boundaries.

**If any gap exceeds 120px:** Reduce the adjacent section's padding or the divider's margin by 8px increments until the gap is < 120px.

### 8C: Scale 5 Verification

| Scale | What to Check | Pass? |
|-------|---------------|-------|
| 1. Page | Dark header + dark footer bookends visible. 960px container. | |
| 2. Zone | 2-5 zone groups perceptibly distinct in background color + typography. | |
| 3. Section | At least 2 sections have distinct layout (grids, multi-column). | |
| 4. Component | Callout variants have distinct border colors AND background tints. | |
| 5. Element | ::selection styled. Inline code has background. Links have hover. | |

### 8D: Soul Constraint Verification

- [ ] border-radius: 0 everywhere (check with `* { border-radius: 0 !important }`)
- [ ] box-shadow: none everywhere (check with `* { box-shadow: none !important }`)
- [ ] Fonts ONLY from trinity: Instrument Serif (display), Inter (body), JetBrains Mono (code)
- [ ] Container max-width: 960px
- [ ] No pure #000000 or #FFFFFF backgrounds
- [ ] All backgrounds pass warm test (R >= G >= B)
- [ ] No gradients, no opacity < 1 on containers

### 8E: Multi-Coherence Verification

For the 2-3 major zone transitions (where zone groups change):

1. Count how many CSS properties shift at the boundary.
2. Each major transition MUST have >= 3 properties shifting simultaneously.

**Example transition verification table:**
| Channel | Zone 1 Value | Zone 2 Value | Changed? |
|---------|-------------|-------------|----------|
| Background | #FEF5EB (warm) | #FAF8F5 (cool) | YES |
| Font-size | 17px | 15px | YES |
| Font-weight (h2) | 400 | 600 | YES |
| Letter-spacing | 0.02em | -0.01em | YES |
| Left border | none | 4px red | YES |
| Paragraph margin | 20px | 12px | YES |
| **Total** | | | **6 channels. PASS** |

### 8F: Accessibility Verification

- [ ] Tab through the page -- focus ring visible on every interactive element
- [ ] First Tab press reveals skip link ("Skip to main content")
- [ ] All sections have aria-label (check with browser inspector)
- [ ] All callouts have role="note"
- [ ] All dividers have role="separator" aria-hidden="true"
- [ ] Header has role="banner", footer has role="contentinfo"
- [ ] Resize to 768px -- everything readable, grids collapse
- [ ] Resize to 480px -- everything readable, smaller type

### 8G: Gestalt Perception Test

Scroll the full page at 1440px at normal reading speed. Ask yourself:

1. Does each screenful look DIFFERENT from the previous one? (backgrounds, borders, typography, layout shape, component types)
2. Does the page feel like it has ZONES -- not uniform, not random, but intentionally varying?
3. Do the grid layouts create moments of spatial variety that break the single-column rhythm?
4. Does the page feel **DESIGNED** (intentional choices at every scale) or **PATCHED** (surface decoration on uniform structure)?

**If the answer to #4 is PATCHED:** Identify the most monotonous stretch (usually the middle sections) and add variation: a callout, a grid layout, a different border treatment, or a pullquote.

### CHECKPOINT: Phase 8 Complete -- Ship Decision

All 8 phases complete. All perception checks pass.

**SHIP IF:** 8D soul = 0 violations, 8B void = 0 failures, 8C scale = 5/5, 8G gestalt = DESIGNED.
**FIX IF:** Any 8D violation (soul), 8B failure (void > 120px), or 8G = PATCHED.
**DO NOT SHIP IF:** 8D has > 0 violations (soul compliance is non-negotiable).

---

================================================================
# PART 2: THE TEAM ARCHITECTURE
================================================================

## Recommended Team Structure

### For Middle-Tier Pages (DEFAULT -- most pages)

**1 builder agent (Opus).** The recipe is the complete spec. One agent reads it, executes it, verifies it.

**Why single-builder:** The remediation proved that one agent reading the complete spec outperforms multiple agents with fragments. Zero information loss, zero coordination overhead, cross-phase coherence maintained.

**When to use Opus vs Sonnet:**
- **Opus:** For any page where content-specific decisions matter (metaphor, zone semantics, callout variant selection). Opus makes better judgment calls in ambiguous contexts.
- **Sonnet:** For pages where all decisions are pre-made (template replication, Track 1 assembly with predetermined layout). Sonnet will copy exact values and achieve reliable compliance.

### For Ceiling/Flagship Pages (5-10% of pages)

**4-wave architecture:**

```
Wave 0: Content Analysis (1 Opus agent, read-only)
  - Execute Phase 0 (content analysis, zone architecture)
  - Output: content-inventory.md, zone-plan.md

Wave 1: Building (1 Opus agent, sole writer)
  - Execute Phases 1-7
  - Has complete recipe + Wave 0 outputs
  - Sole writer of the HTML file

Wave 2: Verification (3+ agents in parallel)
  - Programmatic verification (1 Sonnet agent -- computed styles, selector checks)
  - Soul compliance (1 Sonnet agent -- automated prohibition checks)
  - Perceptual audit (1 Opus agent -- Mode 4 PA, visual assessment)

Wave 3: Fix Integration (1 Opus agent)
  - Reads all Wave 2 reports
  - Applies fixes to the HTML file
  - Runs Phase 8 verification
```

**Communication protocol:**
- Waves 0-1: File-bus only (agents write files, next wave reads files)
- Waves 2-3: File-bus + SendMessage for BLOCKING findings only
- Total agents: 6-7

**Why this specific architecture:** The flagship experiment used 19 agents with zero SendMessage calls and scored 1.5/4. The remediation used 1 builder and scored 2.5/4. The middle-tier used 8 agents with file-bus and scored 4/4. The sweet spot is: small team, file-bus communication, single writer for the HTML file.

### Screenshot Pre-Capture Pattern (for Wave 2 PA)

If running Mode 4 PA (9 auditors):
1. Team lead takes ALL screenshots BEFORE spawning auditors:
   - Cold look at 1440px (full viewport)
   - Scroll-through at 1440px (every ~900px scroll position)
   - Full-page at 768px and 375px
2. Save screenshots as files with descriptive names
3. Spawn auditors who READ saved images (no Playwright access)
4. This eliminates Playwright contention and enables 9+ parallel auditors

### Dependency Chain

```
Phase 0 (content analysis) MUST complete before Phase 1 (HTML skeleton)
Phase 1 MUST complete before Phase 2 (CSS reset -- class names must exist)
Phase 2 MUST complete before Phase 3 (zone backgrounds -- :root must exist)
Phase 3 can run in parallel with Phase 4 (backgrounds and typography are independent)
Phase 4 MUST complete before Phase 5 (typography and spacing interact)
Phase 6 can run in parallel with Phase 5 (element-level is independent)
Phase 7 MUST come after Phases 3-6 (responsive overrides all prior CSS)
Phase 8 MUST come last (verification of everything)
```

In practice, single-builder executes sequentially anyway. The dependency chain matters if you ever try to parallelize.

---

================================================================
# PART 3: THE CONVICTION LAYER
================================================================

What the building agent needs to BELIEVE before executing.

## 3.1: Identity Prohibitions

The page belongs to the KortAI design system. KortAI is defined by what it REFUSES:

- **No rounded corners.** border-radius: 0 on EVERYTHING. Sharp edges = decisive, confident, print heritage. This is the #1 soul constraint.
- **No shadows.** box-shadow: none. Shadows create false depth through physical light metaphors. KortAI is flat, honest, anti-physical.
- **No gradients.** Solid colors only. Gradients imply light sources, dimensional depth, decorative complexity.
- **No semi-transparency.** opacity: 1 on all visual elements. rgba() backgrounds on containers = soul violation.
- **No pure black or white.** Use warm near-black (#1A1A1A) and warm cream (#FEF9F5).

## 3.2: Design Philosophy

**Personality:** Warm. Authoritative. Unhurried.

| Axis | IS | IS NOT |
|------|-----|--------|
| Temperature | Warm | Soft |
| Restraint | Austere | Cold |
| Authority | Authoritative | Aggressive |
| Density | Restrained | Empty |

**The Anti-Scale Model:**
```
Richness = semantic_density x restraint x spatial_confidence
```
If spatial_confidence = 0, the entire product = 0 regardless of other factors. This correctly predicts the ceiling failure: high semantic density + decent restraint + zero spatial confidence = zero perceived richness.

## 3.3: Quality Bar

**PA-05 Score Levels:**
- **1/4 DEFICIENT:** No design decisions visible. Template application only.
- **2/4 FUNCTIONAL/STYLED:** Some design decisions present (header, font pairing). Body is uniform.
- **3/4 COMPOSED:** Multiple design decisions visible throughout. Zone differentiation. Component variety. Layout variation. This is the MINIMUM shipping threshold.
- **4/4 DESIGNED:** Every element feels intentionally placed. Mechanisms interact and create emergent coherence. The page is compositionally fluent. This is the ASPIRATION for flagship pages.

**What DESIGNED means:**
- Content and form are ALIGNED (the CSS expresses the content's meaning, not just decorates it)
- Mechanisms INTERACT (removing one changes how others are perceived)
- Every screenful looks DIFFERENT from the previous one
- The page has spatial CONFIDENCE (distributed visual weight, not front-loaded)

## 3.4: The Core Principle

**RECIPES WORK, CHECKLISTS FAIL.**

The middle-tier experiment succeeded with a 100-line recipe: sequenced steps, specific CSS values, action verbs ("set font-size to 17px"). PA-05 4/4 DESIGNED.

The flagship failed with a 71-rule checklist: constraints, verify/must be ("FAIL IF channel not active"). PA-05 1.5/4 DO NOT SHIP.

The difference: a recipe tells you WHAT TO DO. A checklist tells you what NOT to violate. LLMs execute actions reliably. LLMs satisfy abstract constraints unreliably.

This document is a recipe. Follow the steps. The compliance is embedded in the values.

---

================================================================
# PART 4: WHAT THIS RECIPE DOES NOT COVER
================================================================

## 4.1: Content-Specific Decisions the Recipe Cannot Make

| Decision | Why It Requires Judgment | How to Decide |
|----------|------------------------|---------------|
| Zone semantics | What does "opening" mean for THIS content? | Read the content arc. Map your introduction to Zone 1, your core argument to Zone 2, your conclusion to Zone 3. |
| Section boundaries | Where does one section end and another begin? | Use the content's own structure (headings, topic shifts, argument pivots). Each section should be 200-800px of rendered content. |
| Callout variant selection | Is this callout a warning (gotcha), a recommendation (tip), or a key insight (essence)? | Read the callout content. If it says "avoid this" -> gotcha. If it says "do this" -> tip. If it says "this is the core idea" -> essence. |
| Grid layout placement | Which sections benefit from multi-column? | Sections with paired/parallel elements (compare, contrast, before/after, tension/resolution). Prose-only sections stay single-column. |
| Transition type assignment | Where are the major structural pivots? | Zone boundaries get bridge or breathing. Within-zone transitions get smooth. |
| Bridge prose text | What justifies the shift between zones? | One sentence explaining WHY the content is changing character. "Having established the principles, we now examine their application." |
| Drop cap usage | Should S1 have a drop cap? | Prose-heavy openings benefit. Technical/list-heavy openings do not. |
| Content element markup | Is this a callout, a table, or a blockquote? | If it summarizes/warns/recommends -> callout. If it compares structured data -> table. If it quotes a source or states a thesis -> blockquote. |

## 4.2: What to Read for Guidance

For content-specific decisions, consult:

| Decision Domain | File to Read |
|----------------|-------------|
| Mechanism vocabulary | `design-system/compositional-core/grammar/mechanism-catalog.md` (18 mechanisms) |
| Component options | `design-system/compositional-core/components/merged-components.css` |
| Case study examples | `design-system/compositional-core/case-studies/_INDEX.md` (9 examples) |
| Research insights | `design-system/research/RESEARCH-SYNTHESIS.md` (cross-research findings) |
| Usage criteria | `design-system/compositional-core/guidelines/usage-criteria.md` |

**Reading order for Track 2 (tension-composition) pages:** Invoke the tension-composition skill BEFORE reading case studies. The skill's 7-phase pipeline handles metaphor derivation independently.

## 4.3: Metaphor Integration (Track 2 Only)

This recipe provides content-agnostic CSS values. For Track 2 pages that need metaphor-driven composition:

1. Execute tension-composition skill Phases 0-3 (BLIND -- no library consultation)
2. Lock the metaphor at Phase 3.5
3. Map the metaphor to zone semantics (e.g., geological = "bedrock" Zone 1, "topsoil" Zone 3)
4. Replace generic zone class names with metaphor-specific names (`.zone-s1` -> `.stratum--bedrock`)
5. Adjust CSS values to express the metaphor (e.g., geological density progression)

The recipe's structure (9 phases) remains identical. The CSS VALUES change to express the metaphor.

---

================================================================
# PART 5: KNOWN RISKS
================================================================

## Risk 1: Sub-Perceptual CSS Drift

**What could go wrong:** Over time, builders add CSS values below perception thresholds. Letter-spacing of 0.005em, background color shifts of 3 RGB points. Each value passes the "does CSS exist?" test but fails the "can a human see it?" test.

**Early warning signs:** CSS line count increasing without visible change. Auditors reporting "channel active" for channels that look uniform. PA-05 scores stagnating despite increasing CSS.

**Mitigation:** Apply the perception threshold table (Phase 8A) to every new CSS value. THE RULE: If a human cannot SEE the difference without a color picker, do NOT write the CSS.

## Risk 2: Void Stacking at New Boundaries

**What could go wrong:** New sections or dividers are added with margins that individually pass the 96px per-property cap but collectively exceed 120px total gap.

**Early warning signs:** Blank viewports appearing during scroll. PA auditors flagging "whitespace voids."

**Mitigation:** Calculate total gap arithmetic for every new section boundary (Step 0.6 formula). Cap divider margins at 24px. Cap section padding at 64px.

## Risk 3: Cool Gray Infiltration

**What could go wrong:** New background colors or component backgrounds use cool grays (#FAFAFA, #F8F8F8, #F0F0F0). These look "neutral" to a builder but violate the warm-only palette.

**Early warning signs:** Backgrounds that feel slightly "clinical" or "tech-like." The warm test (R >= G >= B) failing.

**Mitigation:** Apply the warm test to every hex background value before shipping. Replace cool grays with warm equivalents: #FAFAFA -> #FAF8F5, #F8F8F8 -> #F8F6F3, #F0F0F0 -> #F2EFEA.

## Risk 4: Single-Column Monotony Regression

**What could go wrong:** New pages are built with zero grid layouts. All content is single-column prose. The page looks like a blog post, not a designed document.

**Early warning signs:** All sections having identical layout shape. No content-pair or content-grid elements in the HTML.

**Mitigation:** Phase 0 Step 0.5 requires at least 2 grid sections. Phase 4.4 provides grid CSS. Phase 8C checks Scale 3 (section-level layout variety). Make this a gate, not a suggestion.

## Risk 5: Component Library Bypass

**What could go wrong:** Builders create custom class names instead of using callout, table-compact, section-indicator, etc. The page has visual richness but doesn't use the standard vocabulary.

**Early warning signs:** HTML containing classes like `.component-block`, `.info-box`, `.note-container` instead of `.callout .callout--info`.

**Mitigation:** Phase 1 Step 1.4 explicitly names the standard classes. Automated check: search the HTML for `.callout`, `.table-`, `.section-indicator`. If custom classes outnumber standard classes, flag for remediation.

## Risk 6: Builder Sees 13.4% of Instructions

**What could go wrong:** In multi-agent teams, the builder agent receives a compressed subset of the recipe. The compression drops critical details (perception thresholds, void arithmetic, warm test).

**Early warning signs:** Builder producing technically correct CSS that no human can see. Builder creating voids at section boundaries. Builder using cool grays.

**Mitigation:** Give the builder the COMPLETE recipe. Do NOT compress or summarize. The remediation proved that one agent reading 1,025 lines outperforms one agent reading 71 lines. The recipe IS the builder's input. If the recipe is too long, shorten the RECIPE, not the builder's view of it.

## Risk 7: Perception Checks Skipped Under Time Pressure

**What could go wrong:** The builder skips the PERCEPTION CHECK after each phase and proceeds directly to the next. Without visual verification, CSS errors (wrong selectors, specificity conflicts, warm test failures) propagate through all subsequent phases.

**Early warning signs:** Builder completing all 9 phases in < 30 minutes (the fastest credible execution is ~90 minutes for a middle-tier page). Builder changelog not mentioning any visual observations.

**Mitigation:** Make perception checks BINARY deliverables. The builder must write one sentence: "Phase 3 check: I see left borders on S2, S5, S7, S9, S12. Dividers are visible. Grids display side by side." If the builder cannot write this sentence, the phase has a bug.

## Risk 8: Metaphor Overriding Spatial Confidence

**What could go wrong:** For Track 2 pages, the metaphor drives CSS decisions that collapse spatial confidence. A "compression" metaphor reduces padding to zero. A "density" metaphor makes sections too tight to read. The metaphor wins, the page loses.

**Early warning signs:** Any CSS value that violates a guardrail (940px container, 16px minimum spacing, 32px minimum padding, 40% maximum compression ratio).

**Mitigation:** Guardrails are ABSOLUTE. No metaphor may override them. Check: container >= 940px, minimum spacing >= 16px, minimum padding >= 32px, densest section / sparsest section <= 0.40. If metaphor conflicts with a guardrail, the guardrail wins.

---

================================================================
# APPENDIX A: PERCEPTION THRESHOLDS REFERENCE
================================================================

Every CSS value in this recipe exceeds these minimums. Use this table to validate ANY new CSS:

| Property | Minimum Perceptible Delta | This Recipe's Values |
|----------|--------------------------|---------------------|
| Background color | >= 10 RGB points between adjacent zones | 10-20 RGB points across zone groups |
| Letter-spacing | >= 0.025em (= 0.4px at 16px) | 0.03em total range |
| Line-height | >= 0.2 unit difference between zone groups | 1.55 vs 1.85 = 0.30 |
| Font-size | >= 2px between zone groups | 15px vs 17px = 2px |
| Font-weight | Visible jump: 400 vs 600 | 400 vs 600 |
| Border weight | >= 1px difference between hierarchy levels | 1px/2px/3px/4px |
| Margin-bottom | >= 8px between zone groups | 12px vs 20px = 8px |
| Max-width | >= 6ch between zone groups | 62ch vs 72ch = 10ch |
| Color (text) | >= 15 RGB points net shift | #2A2520 vs #1A1A1A = ~16 RGB |

**THE RULE:** If a human cannot SEE the difference without a color picker, do NOT write the CSS.

---

================================================================
# APPENDIX B: DEALLOCATION PROTOCOL
================================================================

When REMEDIATING an existing page (not building from scratch), execute Phase 0 DEALLOCATION before the standard recipe:

### Sub-Perceptual CSS Identification Criteria

CSS is sub-perceptual if ANY of the following are true:
- Letter-spacing delta < 0.025em between adjacent zones
- Background color delta < 10 RGB points between adjacent zones
- Font-weight delta < 100 units between zones
- Font-size delta < 1px between adjacent zones (< 2px between zone GROUPS)
- Margin/padding delta < 8px between zones
- Heading color delta < 15 net RGB points
- Border color delta < 10 RGB points
- Any rule that is IDENTICAL to its base/parent value (redundant declarations)

### Deallocation Steps

1. **Identify:** Use browser dev tools computed styles to measure actual deltas at every zone boundary
2. **Classify:** Mark each CSS block as PERCEPTIBLE (keep) or SUB-PERCEPTUAL (delete)
3. **Delete:** Remove sub-perceptual blocks bottom-to-top (preserves line numbers)
4. **Verify:** Open the page. It MUST look IDENTICAL to before. If anything visibly changed, restore it.

### Expected Deallocation Volume

From the flagship experiment: 23.7% of CSS (233 of 984 lines) was sub-perceptual. Expect 15-25% of any page's CSS to be candidates for deallocation if the page was built without perception thresholds.

---

================================================================
# APPENDIX C: QUICK-REFERENCE CARD
================================================================

**For builders who know the system well and just need the values:**

### Soul
```
border-radius: 0 !important
box-shadow: none !important
Fonts: Instrument Serif / Inter / JetBrains Mono
Container: 960px
No #000000, no #FFFFFF, no gradients, no opacity < 1
All backgrounds: R >= G >= B (warm test)
```

### Zone Typography (3-zone template)
```
Zone 1 (open):    17px / 1.85 / 0.02em / 62ch / h2: 30px 400
Zone 2 (tight):   15px / 1.55 / -0.01em / 72ch / h2: 26px 600
Zone 3 (settled): 16px / 1.75 / 0 / 64ch / h2: 28px 400
Transitional:     16px / 1.7 / 0 / 68ch
```

### Zone Paragraph Margins
```
Zone 1: 20px | Zone 2: 12px | Transitional: 16px | Zone 3: 18px
```

### Divider Margins (void prevention)
```
Smooth:    16px 0 (1px height)
Bridge:    24px 0 (2px height)
Breathing: 24px 0 (4px height)
Max total gap: 120px
```

### Callout Variants
```
--info:    border #E0D5C5, bg #FAF8F5
--gotcha:  border #C97065, bg #FEF6F5
--tip:     border #6B9B7A, bg #F8F7F2
--essence: border #C49052, bg #FEF5EB (display font)
```

### Breakpoints
```
768px: grids collapse, padding reduces, fonts smaller
480px: headings smaller, further padding reduction
```

### Perception Thresholds
```
Background: >= 10 RGB     Font-size: >= 2px
Font-weight: >= 200       Line-height: >= 0.2
Letter-spacing: >= 0.025em  Margin: >= 8px
Border: >= 1px            Max-width: >= 6ch
```

---

================================================================
# APPENDIX D: PROVENANCE AND EVIDENCE
================================================================

This recipe is derived from the following evidence chain:

| Finding | Source | Concordance |
|---------|--------|-------------|
| Recipes work, checklists fail | 28-reproducibility-consistency.md (11/11 agents) | UNANIMOUS |
| Binary rules achieve 100% compliance | MEMORY.md, confirmed across ALL experiments | UNANIMOUS |
| Sub-perceptual CSS = primary failure | 08-perception-model-shift.md (7/8 agents) | NEAR-UNANIMOUS |
| Container 960px = non-negotiable | Phase D validation (4/5 violations), MEMORY.md | CONFIRMED |
| Single builder > multi-builder for remediation | 07-process-topology-shift.md, 17-decision-architecture.md | CONFIRMED |
| Deallocation before allocation | 05-css-philosophy-shift.md, 12-ENHANCED-REMEDIATION-SPEC.md | CONFIRMED |
| Warm-only palette mandatory | Builder changelog (3 cool grays corrected), soul compliance report | CONFIRMED |
| Grid layouts break monotony | 06-html-restructuring-shift.md, 13-adversarial-fresh-eyes.md | CONFIRMED |
| Perception thresholds prevent invisible CSS | 08-perception-model-shift.md, remediation results | CONFIRMED |
| S-09 stacking loophole | 10-coherence-model-shift.md (3 independent discoveries) | CONFIRMED |
| Mode 4 PA catches what 2-PA misses | Mode 4 standalone PA (9/9 flagged whitespace, 2-PA missed) | CONFIRMED |
| Component library must be execution target | 06-html-restructuring-shift.md (3/26 -> 10/26 families) | CONFIRMED |

---

**END OF OPERATIONAL RECIPE**

**Total: ~1,200 lines. 5 parts + 4 appendices. Every step is sequenced, every value is specific, every check is perceptual.**

**This is the thing the analysis corpus exists to produce: an actionable pipeline specification that transforms content into designed pages, reliably, without requiring the building agent to derive values from abstract principles.**
