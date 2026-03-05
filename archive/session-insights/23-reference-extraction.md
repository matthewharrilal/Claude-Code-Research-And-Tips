# 23 — Reference Extraction for Middle-Tier Build

**Date:** 2026-02-16 (v2 -- comprehensive rewrite)
**Agent:** reference-researcher
**Task:** #5 -- Extract concrete examples for Middle-tier build
**Sources:** 3 HTML crown jewels + 9 case studies + anti-prescription template + 3 pattern specs (17 files total)

---

## 1. VARIANT B ANATOMY (Phase D Winner -- 18/19 Compliance, 4/5 Novelty)

### HTML Structure

```
<body>
  <div class="page-container">  <!-- max-width: 960px, margin: 0 auto, padding: 0 var(--space-8) -->
    <section class="lab-zone">           <!-- Safety briefing zone -->
    <section class="lab-zone--critical">  <!-- Critical zone: 4px left border -->
    <section class="lab-zone--clean-room"> <!-- Measurement zone: white bg -->
    <section class="lab-zone--dense">      <!-- Dense data zone -->
    <section class="lab-zone--transition"> <!-- Breathing/transition zone -->
  </div>
</body>
```

### CSS Techniques Used (Mechanism Inventory)

| # | Mechanism | CSS Implementation | Category |
|---|-----------|-------------------|----------|
| 1 | **Border-weight gradient** | `--border-critical: 4px`, `--border-verify: 3px`, `--border-monitor: 1px` | Spatial |
| 2 | **2-zone component DNA** | `.instrument-card__label` (uppercase mono 12px) + `.instrument-card__body` (body text) | Material |
| 3 | **Zone background differentiation** | `--bg-safety: #FEF9F5`, `--bg-clean-room: #FFFFFF`, `--bg-transition: #FAF5ED`, `--bg-data: #1A1A1A` | Material |
| 4 | **Spacing compression** | Sections use `--space-16: 64px` (sparse), `--space-12: 48px` (moderate), `--space-8: 32px` (dense) | Spatial |
| 5 | **Dense/sparse alternation** | Lab zones alternate between safety (sparse), clean-room (measurement), dense (data), transition (breathing) | Temporal |
| 6 | **Typographic scale jumping** | `--text-h1: 2.5rem` -> `--text-h2: 2rem` -> `--text-h3: 1.5rem` -> `--text-lg: 1.125rem` | Material |
| 7 | **Dark data readout** | `.error-card` with mono metrics on dark bg for statistical emphasis | Material |
| 8 | **Protocol cards (essence)** | `.protocol-card` with 4px red left border, italic serif display for key insights | Behavioral |
| 9 | **Measurement tables** | `.measurement-table` with mono font, uppercase headers, 3px bottom border | Material |
| 10 | **Cost meter** | `.cost-meter` with 3px border, large mono value, scale readout | Material |

**Total mechanisms: 10** (confirms Middle-tier range of 8-10)

### What Made It Score 18/19

1. **Container width compliance:** `max-width: 960px` (CORRECT -- within 940-960px range)
2. **Soul compliance:** `--border-radius: 0`, `--box-shadow: none` in :root
3. **Typography trinity:** Instrument Serif (display), Inter (body), JetBrains Mono (code)
4. **Correct color palette:** #E83025, #FEF9F5, #1A1A1A, #666666, #E0D5C5
5. **Spacing from scale:** 4px base unit, all spacing values from token scale
6. **h3 italic:** `font-style: italic` on all h3 elements
7. **Lab metaphor (novel):** "Safety Briefing", "Clean Room", "Measurement Protocol" -- original vocabulary
8. **4 combination rules followed:** Velocity interleaving, temperature flow, weight balance, spacing proximity

### What Didn't Work (The 1/19 Violation)

- **Prose-only content** limited component testing to 22-44% (vs 67% target). Text-heavy content with no code examples, data tables, or structured reference material.

### Key Lesson for Middle-Tier Builder

Variant B proved the pipeline produces genuine metaphor derivation (4/5 novelty). The gap is technique DENSITY (5/44 techniques used in Floor tier), not technique ABSENCE. Middle tier targets 8-10 mechanisms.

---

## 2. DD-006 FRACTAL ANATOMY (Crown Jewel -- 36/40, 20+ Inbound Refs)

### What Makes This Ceiling/Flagship Tier

**Line count:** 1,121 lines (CSS + HTML)
**CSS lines:** ~730 (lines 129-731) -- Ceiling-tier range (700-1000)
**Mechanism count:** 12+ mechanisms
**Structural complexity:** 4-level fractal demonstration (page/section/component/character)

### Mechanism Inventory

| # | Mechanism | CSS Implementation |
|---|-----------|-------------------|
| 1 | Border-weight gradient | 4px (primary callouts), 3px (section dividers/headers), 2px (paragraph backgrounds), 1px (separators) |
| 2 | 2-zone component DNA | `.callout-essence__label` (10px uppercase amber) + `.callout-essence__content` (17px italic serif) |
| 3 | Dense/sparse alternation | `.page-scale__section--dense` (background: #F0EBE3, red left border) vs `.page-scale__section--sparse` (white bg) |
| 4 | Spacing compression | 80px sparse -> 32px moderate -> 16px dense -> 4px code gutters |
| 5 | Zone background differentiation | #FEF9F5 (page sparse), #FFFFFF (section sparse), #F0EBE3 (component dense), #1A1A1A (code bedrock) |
| 6 | Typographic scale jumping | 32px (page titles) -> 28px (section heads) -> 20px (component heads) -> 14px (code comments) |
| 7 | Fractal nested visualization | `.fractal-nested` with recursive nesting, increasing rgba opacity |
| 8 | Scale comparison grid | `.scale-comparison` with 4-column grid showing pattern at each scale |
| 9 | Section dividers | `.section-divider` with centered label on horizontal rule |
| 10 | Character-scale code block | `.character-scale` dark background with line numbers, syntax colors |
| 11 | Accessibility layer | `.skip-link`, `:focus-visible`, `prefers-reduced-motion`, `::selection` |
| 12 | Exploration header | `.exploration-header` with 3px bottom red border, mono ID, hypothesis text |

### CSS Techniques (Concrete Snippets for Middle-Tier Reference)

**Callout with amber accent:**
```css
.callout-essence {
  border-left: 4px solid var(--accent-amber);
  background: rgba(217, 119, 6, 0.08);
  padding: var(--space-5);
  margin: var(--space-6) 0;
}
.callout-essence__label {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-amber);
  margin-bottom: var(--space-2);
}
.callout-essence__content {
  font-family: var(--font-display);
  font-size: 17px;
  font-style: italic;
  line-height: 1.7;
}
```

**Section divider with centered label:**
```css
.section-divider {
  margin: var(--space-12) 0;
  text-align: center;
  position: relative;
}
.section-divider::before {
  content: '';
  position: absolute;
  left: 0; right: 0; top: 50%;
  height: 1px;
  background: var(--color-border-subtle);
}
.section-divider__label {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-border);
  background: var(--color-background);
  padding: 0 var(--space-4);
  position: relative;
}
```

### What Separates DD-006 from Middle-Tier

- **Structural recursion:** 4 fractal levels with CSS encoding at each (page, section, component, character)
- **Scale demonstration:** The page TEACHES its own pattern by demonstrating at each scale
- **Line count:** 730 CSS lines vs Middle-tier target of 350-500
- **Meta-content alignment:** Content ABOUT fractal IS fractal -- requires self-referential structure

---

## 3. CD-006 PILOT MIGRATION ANATOMY (Crown Jewel -- 39/40, Flagship)

### What Makes This Flagship Tier

**Estimated CSS lines:** 1,000+ (999 lines of CSS in first 1000 lines of file)
**Components deployed:** ALL 11 types (callouts x5, code blocks, file tree, decision matrix, core abstraction, task component, reasoning)
**Axis patterns:** ALL 5 (Z-Pattern, F-Pattern, Bento Grid, Spiral, Choreography)
**Transitions:** 7 total (2 Smooth, 3 Bridge, 2 Breathing)
**Fractal scales:** 5 (navigation, page, section, component, character)

### Component CSS Patterns (Reusable at Middle-Tier)

**Callout base (2-zone DNA):**
```css
.callout {
  border-left: var(--border-left-width) solid;  /* 4px */
  padding: var(--space-6) var(--space-8);       /* 24px 32px */
  margin: var(--space-6) 0;                     /* 24px */
  position: relative;
}
.callout-label {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--type-meta);     /* 0.75rem = 12px */
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-2);   /* 8px */
}
.callout-body {
  font-family: var(--font-body);
  font-size: var(--type-body);     /* 1rem = 16px */
  line-height: 1.7;
}
```

**Callout variants (color differentiation only):**
```css
.callout--info    { border-left-color: var(--accent-blue);   background: #F5F9FE; }
.callout--tip     { border-left-color: var(--accent-green);  background: #F2F9F4; }
.callout--gotcha  { border-left-color: var(--accent-coral);  background: #FEF6F5; }
.callout--essence {
  border-left-color: var(--accent-purple);
  background: var(--color-zone-breathing);
}
.callout--essence .callout-body {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.125rem;
  line-height: 1.6;
}
.callout--challenge { border-left-color: var(--accent-amber); background: #FFFBF2; }
```

**Code block (dark theme):**
```css
.code-block {
  background: var(--color-text);              /* #1A1A1A */
  color: var(--color-background);             /* #FEF9F5 */
  border: 3px solid var(--color-border);      /* #E0D5C5 */
  padding: var(--space-6) var(--space-8);     /* 24px 32px */
  font-family: var(--font-mono);
  font-size: var(--type-code);                /* 0.875rem */
  line-height: 1.5;
  overflow-x: auto;
  margin: var(--space-6) 0;
}
.kw  { color: #E83025; }   /* keywords = primary red */
.str { color: #6B9B7A; }   /* strings = sage green */
.cmt { color: #666666; }   /* comments = secondary text */
.fn  { color: #4A7C9B; }   /* functions = muted blue */
.typ { color: #C97065; }   /* types = coral */
.num { color: #D97706; }   /* numbers = amber */
```

**Transition types (critical for Middle-tier with 3+ transitions):**
```css
/* SMOOTH: 48px gap + 1px separator */
.transition--smooth {
  margin: var(--space-12) 0;         /* 48px */
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-12);
}
/* BRIDGE: 64px gap + breathing zone */
.transition--bridge {
  margin: var(--space-16) 0;         /* 64px */
  background: var(--color-zone-breathing);
  padding: var(--space-8);           /* 32px */
}
/* BREATHING: 80px gap + 3px structural border */
.transition--breathing {
  margin: var(--space-20) 0;         /* 80px */
  border-top: 3px solid var(--color-border);
  padding-top: var(--space-20);
}
```

**Reasoning component (2-column comparison + recommendation):**
```css
.reasoning {
  border: 3px solid var(--color-border);
  margin: var(--space-8) 0;
}
.reasoning-question {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--type-subsection);  /* 1.375rem */
  padding: var(--space-6) var(--space-8);
  border-bottom: 1px solid var(--color-border);
}
.reasoning-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.reasoning-recommendation {
  padding: var(--space-6) var(--space-8);
  background: #F2F9F4;
  border-top: 3px solid var(--accent-green);
}
```

**Bento grid layout:**
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);              /* 24px */
}
.bento-item {
  background: var(--axis-zone-primary);
  border: 3px solid var(--color-border);
  padding: var(--space-6);
}
.bento-item--wide  { grid-column: span 2; }
.bento-item--large { grid-column: span 2; grid-row: span 2; }
```

**Z-Pattern layout:**
```css
.z-hero {
  display: grid;
  grid-template-columns: 1.618fr 1fr;  /* Golden ratio */
  grid-template-rows: auto auto;
  gap: var(--space-8);
}
.z-primary   { grid-column: 1; grid-row: 1; }
.z-secondary { grid-column: 2; grid-row: 1; }
.z-diagonal  { grid-column: 1; grid-row: 2; }
.z-terminal  { grid-column: 2; grid-row: 2; }
```

### What Separates CD-006 from Middle-Tier

- **ALL 11 component types** (Middle-tier uses 4-6 naturally)
- **ALL 5 axis patterns** (Middle-tier uses 1-2)
- **7 transitions** (Middle-tier minimum is 3)
- **Fractal at 5 scales** (Middle-tier fractal at 2-3 scales suffices)
- **1000+ CSS lines** (Middle-tier target: 350-500)

---

## 4. CASE STUDY PATTERNS (9 Case Studies Analyzed)

### Summary Table

| Case Study | Score | Metaphor | Tension | Key Mechanisms |
|-----------|-------|----------|---------|----------------|
| **DD-003 Islands** | 32/40 | Tidal pools / archipelago | Self-contained topics vs unified docs | Extreme whitespace, horizontal offset, archipelago grouping, 2-zone DNA, border-left signal |
| **DD-004 Layers** | 35/40 | Geological strata | Expert vs novice same content | Spacing compression (80->16px), background progression, border-weight, layer indicators, progressive disclosure, 2-zone DNA, code dark bg |
| **DD-006 Fractal** | 36/40 | Fractal self-similarity | Content ABOUT self-similarity must DEMONSTRATE it | Dense/sparse alternation, compression gradient, border-weight, zone backgrounds, type scale jumping, 2-zone DNA |
| **OD-001 Conversational** | 37/40 | Q&A dialogue | Random-access navigation + dense answers | Dense/sparse alternation, width variation, zone backgrounds, 2-zone DNA, Socratic narrowing |
| **OD-004 Confidence** | 34/40 | Geological core sample | Certainty gradient (established -> speculative) | Border-weight (4/3/2/1px), spacing compression (40->16px), zone backgrounds, stratum boundaries |
| **OD-006 Creative** | 37/40 | Meta-documentation feed | Prove thesis through demonstration | Fractal annotation, mode-transition breathing, pattern echo, culmination spread, territorial hover, 2-zone DNA |
| **CD-001 Reasoning** | 38/40 | Velocity interleaving | Technical depth vs readability | Velocity interleaving, F->Bento transition, CRESCENDO, flat sequencing, composite pre-composition, Bento containment |
| **CD-005 Multi-Axis** | 38/40 | Sequential axes + transitions | Complexity vs clarity | Sequential axis deployment, SMOOTH/BRIDGE transitions, WAVE density, SPATIAL org, velocity interleaving |
| **CD-006 Pilot** | 39/40 | Meta-tutorial (system teaching itself) | Demonstration vs prescription | All 5 axes, all 11 components, 7 transitions, fractal at 5 scales, compound combination |

### Mechanism Frequency Across Case Studies

| Mechanism | Appears In | Count |
|-----------|-----------|-------|
| **2-zone component DNA** (#2) | DD-003, DD-004, DD-006, OD-001, OD-006, CD-006 | 6/9 |
| **Border-weight gradient** (#1) | DD-004, DD-006, OD-004, CD-006 | 4/9 |
| **Zone background differentiation** (#7) | DD-004, DD-006, OD-001, OD-004 | 4/9 |
| **Dense/sparse alternation** (#5) | DD-006, OD-001, OD-006 | 3/9 |
| **Spacing compression** (#4) | DD-004, DD-006, OD-004 | 3/9 |
| **Transition grammar** (AD-F-025) | CD-001, CD-005, CD-006 | 3/9 |
| **Velocity interleaving** (CD-F-001) | CD-001, CD-005 | 2/9 |
| **Typographic scale jumping** (#11) | DD-004, DD-006 | 2/9 |
| **Sequential axis deployment** (AD-F-024) | CD-005, CD-006 | 2/9 |

**Conclusion for Middle-Tier:** The 5 most universally reusable mechanisms are: 2-zone DNA (#2), border-weight gradient (#1), zone backgrounds (#7), spacing compression (#4), dense/sparse alternation (#5). A Middle-tier page selecting 8-10 mechanisms should include ALL 5 of these plus 3-5 from the remaining catalog.

### Case Study Reusable Mechanism Inventory (Full List)

From all 9 case studies, these mechanisms are explicitly marked as REUSABLE:

1. **Dense/sparse alternation** -- Works for ANY rhythmic content flow
2. **Spacing compression gradient** -- Works for ANY depth/hierarchy encoding
3. **Border-weight gradient** (4/3/2/1px) -- Works for ANY hierarchy/priority encoding
4. **Zone background differentiation** -- Works for ANY zone/category/state encoding
5. **Typographic scale jumping** (~1.4x ratio) -- Works for ANY content hierarchy
6. **2-zone component DNA** -- Works for ANY component needing label+content split
7. **Extreme whitespace for isolation** -- Works for ANY content requiring visual separation
8. **Horizontal offset rhythm** -- Works for ANY content avoiding rigid vertical stacking
9. **Archipelago grouping** (2-col grid for related items) -- Works for ANY hierarchical clustering
10. **Self-contained content units** -- Works for ANY non-linear navigation
11. **Width variation** (narrow entry points, wide destinations) -- Works for ANY entry/destination rhythm
12. **Socratic progressive narrowing** -- Works for ANY content with conceptual depth
13. **Inverse density-confidence correlation** -- Works for ANY content where certainty varies
14. **Stratum boundary markers** -- Works for ANY discrete sections requiring strong separation
15. **Layer indicators** -- Works for ANY multi-section navigation
16. **Multiple reading paths** -- Works for ANY multi-audience content
17. **Progressive disclosure** -- Works for ANY progressive complexity
18. **Meta-documentation strategy** -- Works for ANY content proving a structural claim
19. **Mode-transition breathing** -- Works for ANY content with multiple organizational modes
20. **Fractal annotation layer** -- Works for ANY content where structure should be visible
21. **Pattern echo visual index** -- Works for ANY content with discrete patterns to preview
22. **Culmination spread** -- Works for ANY synthesis/conclusion needing emphasis
23. **Territorial border-color hover** -- Works for ANY interactive element requiring flat interactivity
24. **Velocity interleaving** -- Works for ANY content with multiple heavy components
25. **Sequential axis deployment** -- Works for ANY multi-topic page
26. **SMOOTH transition** -- Works for ANY axis change with shared component type
27. **BRIDGE transition** -- Works for ANY axis change with incompatible topologies
28. **WAVE density oscillation** -- Works for ANY page with varying section purposes
29. **SPATIAL organization** -- Works for ANY content with natural top->bottom flow
30. **Velocity interleaving** -- Works for ANY long vertical section (F-Pattern risk zone)
31. **Flat sequencing** -- Works for ANY complex content (stack not nest)
32. **Composite component pre-composition** -- Works for ANY multi-part component
33. **Bento heavy containment** -- Works for ANY section with 4+ heavy components
34. **CRESCENDO density for narrative arc** -- Works for ANY content with setup->climax->resolution
35. **F-Pattern to Bento transition** -- Works for ANY narrative arc with peak density

---

## 5. ANTI-PRESCRIPTION RULES

### Core Principle

Case studies are PROOF-OF-CONCEPT, not TEMPLATES. The Jazz Real Book analogy applies:
- Learn the vocabulary (mechanisms)
- Study the proofs (case studies)
- Play YOUR solo (your page with your metaphor)

### How to Use Case Studies WITHOUT Copying

**Phase Gate (Binary -- 100% compliance achievable):**
1. **Phases 0-3:** DO NOT read case studies. Run tension-composition BLIND.
2. **Phase 3.5:** Lock metaphor BEFORE consulting library.
3. **Phase 4:** Read mechanism-catalog.md. Extract TECHNIQUES, not implementations.
4. **Phase 5 (OPTIONAL):** Read 2-3 similar case studies for divergence verification only.

### The Name Test

Remove the metaphor name from a mechanism. Does the CSS technique still make sense?
- "Border-weight encodes hierarchy" -- YES (mechanism, reusable)
- "4px bedrock border" -- NO (metaphor-specific, not reusable)

### The Transfer Test

Does the technique work with a completely different metaphor?
- "Border-weight gradient (4/3/2/1px)" with architectural metaphor? YES (transferable)
- "`.stratum--bedrock`" with architectural metaphor? NO (metaphor-specific class name)

### Divergence Table (5 Dimensions)

Every case study includes this table. If convergence detected on ANY dimension:
1. Core Metaphor
2. Spatial Encoding
3. Primary Tension
4. Structural Pattern
5. Visual Treatment

**Passing criteria:** DIFFERENT on 3+ dimensions = independent convergence.
**If convergence:** Must justify with Phase 1-2 evidence OR regenerate with constraint.

---

## 6. TIER COMPARISON -- Floor / Middle / Ceiling / Flagship in Concrete CSS Terms

### Floor Tier (5 mechanisms, 150-250 CSS lines, 30-45 min)

**Characteristics from Variant B's "floor mode":**
- Uses tokens correctly (colors, fonts, spacing)
- Has 2-zone callouts (label + body)
- Has basic section zones
- Has one table style
- Has responsive breakpoint
- NO axis patterns (linear scroll only)
- NO transitions between sections
- NO fractal structure

### Middle Tier (8-10 mechanisms, 350-500 CSS lines, 70-100 min) -- TARGET

**What needs to be added beyond Floor:**
- **+1 axis pattern** (Z-Pattern, F-Pattern, or Bento Grid in at least 1 section)
- **+3 transitions** minimum (SMOOTH, BRIDGE, or BREATHING between sections)
- **+Spacing compression** (progressive padding reduction: 64px -> 48px -> 32px)
- **+Border-weight gradient** (4px/3px/1px encoding hierarchy, not just one weight)
- **+Dense/sparse alternation** (visible rhythm, not uniform density)
- **+1-2 additional component types** beyond callouts (reasoning, decision matrix, or code block)

**Concrete CSS difference (Floor vs Middle):**

Floor callout:
```css
.callout { border-left: 4px solid var(--color-primary); padding: 24px; }
```

Middle-tier callout system:
```css
.callout { border-left: 4px solid; padding: var(--space-6) var(--space-8); }
.callout--info    { border-left-color: var(--accent-blue);   background: #F5F9FE; }
.callout--tip     { border-left-color: var(--accent-green);  background: #F2F9F4; }
.callout--gotcha  { border-left-color: var(--accent-coral);  background: #FEF6F5; }
.callout--essence { border-left-color: var(--accent-purple); background: var(--color-zone-breathing); }
.callout--essence .callout-body { font-family: var(--font-display); font-style: italic; }
```

### Ceiling Tier (12-15 mechanisms, 700-1000 CSS lines, 150-220 min)

**What DD-006 adds beyond Middle:**
- 4-level fractal structure (page/section/component/character)
- Fractal nested visualization with progressive rgba opacity
- Scale comparison grid (4-column)
- Custom exploration header with hypothesis
- Section dividers with centered labels
- 12+ mechanisms total

### Flagship Tier (16-18 mechanisms, 1000-1500 CSS lines, 240-400 min)

**What CD-006 adds beyond Ceiling:**
- ALL 5 axis patterns on one page
- ALL 11 component types deployed in context
- 7 transitions between sections
- Fractal at 5 scales (navigation, page, section, component, character)
- Drop caps, core abstraction component, reasoning component
- 16+ mechanisms total

---

## 7. CONCRETE CSS EXAMPLES -- Middle-Tier Level

### Complete :root Block (Copy-Paste Ready)

```css
:root {
  /* Soul constraints -- IMMUTABLE */
  --border-radius: 0;
  --box-shadow: none;

  /* Colors -- LOCKED */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* Zone backgrounds */
  --color-zone-sparse: #FEF9F5;
  --color-zone-dense: #FFFFFF;
  --color-zone-breathing: #FAF5ED;

  /* Typography -- LOCKED */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Type scale */
  --type-page: 2.5rem;
  --type-section: 2rem;
  --type-subsection: 1.5rem;
  --type-body: 1rem;
  --type-code: 0.875rem;
  --type-meta: 0.75rem;

  /* Spacing -- 4px base */
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Border weights -- semantic encoding */
  --border-left-width: 4px;   /* Primary: structural, high-importance */
  /* 3px: section separators, moderate importance */
  /* 1px: component separators, low importance */

  /* Callout accents */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
}
```

### Page Container (NON-NEGOTIABLE)

```css
.page-container {
  max-width: 960px;   /* MUST be 940-960px */
  margin: 0 auto;
  padding: 0 var(--space-8);  /* 32px horizontal */
}
```

### Base Typography

```css
body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
  color: var(--color-text);
  background: var(--color-background);
}

h1, h2 {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.2;
}
h1 { font-size: var(--type-page); margin-bottom: var(--space-6); }
h2 { font-size: var(--type-section); margin-top: var(--space-12); margin-bottom: var(--space-4); }
h3 {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;   /* ALL h3 MUST be italic */
  font-weight: 400;
  line-height: 1.4;
  margin-top: var(--space-8);
  margin-bottom: var(--space-4);
}

p {
  margin-bottom: var(--space-4);
  max-width: 65ch;
}

code {
  font-family: var(--font-mono);
  font-size: var(--type-code);
  background: var(--color-border-subtle);
  padding: 2px 6px;
  border: 1px solid var(--color-border);
}
```

### Section Zones (Dense/Sparse Alternation)

```css
.section--sparse {
  padding: var(--space-16);    /* 64px */
  background: var(--color-zone-sparse);
}
.section--dense {
  padding: var(--space-8);     /* 32px */
  background: var(--color-zone-dense);
  border: 1px solid var(--color-border);
}
.section--breathing {
  padding: var(--space-12);    /* 48px */
  background: var(--color-zone-breathing);
}
.section--critical {
  border-left: 4px solid var(--color-primary);
  padding: var(--space-16);
  background: var(--color-zone-sparse);
}
```

### 2-Zone Component DNA (Universal Pattern)

```css
.component__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}
.component__body {
  font-size: var(--type-body);
  line-height: 1.7;
}
```

### Border-Weight Hierarchy

```css
.border--critical { border-left: 4px solid var(--color-primary); }
.border--high     { border-left: 4px solid var(--color-text); }
.border--section  { border-bottom: 3px solid var(--color-text); }
.border--subtle   { border-bottom: 1px solid var(--color-border); }
```

### Responsive Strategy (768px Breakpoint)

```css
@media (max-width: 768px) {
  .page-container {
    max-width: 100%;
    padding: 0 var(--space-5);
  }
  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  .bento-grid { grid-template-columns: 1fr; }
}
```

### Accessibility (MANDATORY)

```css
.skip-link {
  position: absolute; top: -100%; left: 0;
  background: var(--color-primary); color: var(--color-background);
  padding: 8px 16px; z-index: 1000;
  font-family: var(--font-body); font-size: 14px; text-decoration: none;
}
.skip-link:focus { top: 0; }

*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

::selection {
  background: var(--color-primary);
  color: var(--color-background);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 8. COMBINATION RULES (Component Sequencing)

### Component Properties

| Component | Velocity | Temperature | Weight |
|-----------|----------|-------------|--------|
| Code Snippet | SLOW | Neutral | Heavy |
| Info Callout | FAST | Neutral | Light |
| Tip Callout | FAST | Warm | Light |
| Gotcha Callout | FAST | Cold | Medium |
| Essence Callout | SLOW | Warm | Medium |
| Challenge Callout | FAST | Warm | Medium |
| File Tree | MEDIUM | Neutral | Heavy |
| Decision Matrix | MEDIUM | Neutral | Heavy |
| Core Abstraction | SLOW | Reverent | Heavy |
| Task Component | FAST | Utilitarian | Medium |
| Reasoning | SLOW | Deliberate | Heavy |

### The 4 Rules

1. **Never stack same-velocity:** SLOW + SLOW = monotonous. Insert FAST between.
2. **Temperature flow:** Warm -> Neutral -> Cold (smooth). Never Warm -> Cold (jarring).
3. **Weight balance:** Heavy + Heavy overwhelms. Interleave Light components.
4. **Semantic proximity:** Tight coupling = 8-16px. Moderate = 24-32px. Loose = 48-64px.

### Traffic Light Rule

NEVER place Tip (green) adjacent to Gotcha (red). Insert whitespace or neutral component between.

### Max Components Per Viewport

| Type | Max | Rationale |
|------|-----|-----------|
| Callouts (any) | 2 | Alarm fatigue |
| Code snippets | 2 | Cognitive load |
| Decision structures | 1 | Focus |
| Heavy total | 3 | Balance |

---

## 9. DENSITY PATTERNS (6 Validated)

| Pattern | Shape | Score | Best For | CSS Signature |
|---------|-------|-------|----------|---------------|
| **PULSE** | `####::::####::::` | 33/40 | Tutorials, Q&A | 24px dense / 64-80px sparse alternation |
| **CRESCENDO** | `::::::::########` | 35/40 | Onboarding, progressive | 80px -> 64px -> 48px -> 24px -> 16px |
| **ISLANDS** | `####::::::::####` | 32/40 | Reference, task clusters | 80px+ ocean between dense islands |
| **GEOLOGICAL** | Multi-layer | 35/40 | Multi-audience, API docs | 40px -> 32px -> 20px -> 16px depth |
| **TIDAL** | Width variation | 36/40 | Comparison, flows | 60% width Q, 100% width A |
| **FRACTAL** | Self-similar | 36/40 | META -- apply everywhere | Same rhythm at page/section/component/character |

---

## 10. ORGANIZATIONAL PATTERNS (6 Validated)

| Pattern | Density Pairing | Score | Best For |
|---------|----------------|-------|----------|
| **CONVERSATIONAL** | PULSE + TIDAL | 37/40 | Q&A, tutorials |
| **NARRATIVE** | CRESCENDO | 35/40 | Onboarding, progressive learning |
| **TASK-BASED** | ISLANDS + BOOKENDS | ~35/40 | Setup guides, procedures |
| **CONFIDENCE-BASED** | GEOLOGICAL + CRESCENDO | 34/40 | API docs, multi-certainty |
| **SPATIAL** | WAVE + ISLANDS | 35/40 | Comparison, decision flows |
| **CREATIVE/EMERGENT** | ALL (FRACTAL primary) | 37/40 | Meta-documentation, synthesis |

**Key Insight (OD-F-005):** Organization IS Density. Choosing an organizational pattern automatically determines your density pattern. They are the SAME phenomenon from two perspectives.

---

**END REFERENCE EXTRACTION**

**Total files analyzed:** 17
**Total mechanisms catalogued:** 35 unique reusable mechanisms across all references
**Total CSS snippets:** 15 copy-paste-ready code blocks
**Total case study patterns:** 9 with full tension/metaphor/mechanism decomposition
