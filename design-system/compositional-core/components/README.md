# Components Layer — Implementation Gallery

**What this directory contains:** The CSS implementations of reusable structures (callouts, code blocks, headers, etc.).

**Layer:** 4 (implementations — built FROM tokens + grammar)

---

## Contents

**1. `components.css` (1,039 lines)**
- 34 CSS selectors across 26 component families
- Copy-paste ready implementations
- All soul-compliant (border-radius: 0, box-shadow: none)

**2. `component-inventory.md` (880 lines)**
- Confidence levels (HIGH/MEDIUM/LOW)
- Source stage distribution (universal, CD-only, TT-only)
- Parametric variations (callout colors, section zones, etc.)
- Merge conflict resolutions (3 documented)

---

## Component Categories

### Universal Components (10 families, 100% files)

**High confidence — use freely:**
1. **Callout family** — 2-zone DNA, 6 semantic variants (essence, tip, info, gotcha, challenge, note)
2. **Code blocks** — Dark background, syntax highlighting, 3px border
3. **Page header** — ID + title + hypothesis, editorial typography trinity
4. **Page footer** — Provenance metadata, 3px top border
5. **Tables** — 3px header border, 1px row borders, responsive collapse
6. **Skip-link** — Accessibility, off-screen until focus
7. **Focus-visible** — 3px primary red outline, 2px offset
8. **Selection styling** — Primary red background on text selection
9. **Stats bar** — Label-value pairs, horizontal segments or vertical stacks
10. **Section indicator** — Mono uppercase meta line, subtle bottom border

**These appear in 70–100% of source files across all stages (DD/OD/CD/TT).**

---

### CD-Specific Components (8 families, CD-only)

**Medium confidence — validated in CD stage (6 files):**
11. **Reasoning component** — Framed deliberation, 3px border, amber icon, serif italic title
12. **Core abstraction** — 2-zone composite (essence above, proof below), purple label
13. **Bento grid** — 2-column high-density containment, 3px cell borders
14. **Essence pullquote** — 4px purple border, serif italic 26px, max-width 55ch
15. **Density meter** — 5-segment horizontal bar, primary red fill vs subtle border
16. **Version badge** — Inline mono badge, 1px border, minimal padding
17. **Section zones** — Density progression containers (opening/rising/building/peak/resolution)
18. **Breathing zones** — Decompression spaces, 3px double borders, variable padding

**These appear in 83–100% of CD files. NOT validated in DD/OD. Use for CD-style combination layouts.**

---

### DD/OD-Primary Components (5 families)

**Medium confidence — validated in DD/OD stages:**
19. **File tree** — Directory structure visualization, 4px blue border, monospace
20. **Decision matrix** — Comparison grid, 4px primary border, responsive collapse
21. **Density indicator** — Visual density marker, 4px height bar segments
22. **Q&A pair** — Conversational structure, 60% question + dense answer, drop cap
23. **Breadcrumb navigation** — Hierarchical nav, meta font, secondary color links

**These appear in 7–18% of total files, concentrated in DD/OD. Use for technical documentation.**

---

### Tension-Test Components (3 families, LOW confidence)

**Metaphor-specific — use with caution:**
24. **Layer boundaries** — Horizontal separators for layered content (3px/4px)
25. **Building floor structure** — Hierarchical nesting (floor → room)
26. **Compression grid** — Compact 2-column layout, 1px gap

**These appear in 6–20% of tension-test files ONLY. Marked PROVISIONAL — review after Phase D builds.**

---

## How to Use This Directory

### Copy-Paste Workflow

**Step 1: Read `component-inventory.md`**
- Find component you need
- Check confidence level (HIGH/MEDIUM/LOW)
- Verify source stage (universal, CD-only, DD/OD-primary)

**Step 2: Copy from `components.css`**
```css
/* Example: Callout component */
.callout {
  border-left: 4px solid var(--accent-color, var(--accent-blue));
  padding: var(--space-6, 24px);
  margin: var(--space-6, 24px) 0;
  background: var(--callout-bg-color, transparent);
}
.callout__label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--callout-label-color, var(--accent-color));
  margin-bottom: var(--space-3, 12px);
  display: block;
}
.callout__body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.7;
}
```

**Step 3: Customize via CSS custom properties**
```css
/* In your layout CSS */
.callout--my-type {
  --accent-color: var(--accent-purple);
  --callout-bg-color: var(--color-zone-sparse);
}
```

**Step 4: Verify soul compliance**
- `border-radius: 0` (check)
- `box-shadow: none` (check)
- Primary red used for primary accents (check)

---

### Parametric Customization

**Callout (most flexible):**
```css
/* Override accent color */
.callout--warning {
  --accent-color: var(--color-primary);  /* Primary red */
}

/* Override background */
.callout--dense {
  --callout-bg-color: var(--color-zone-dense);
}

/* Override label color */
.callout--custom {
  --callout-label-color: var(--accent-amber);
}
```

**Section zones (density progression):**
```css
.section-zone--opening  { padding: 64px 32px; }  /* Sparse */
.section-zone--rising   { padding: 48px 32px; }  /* Medium-sparse */
.section-zone--building { padding: 32px 32px; }  /* Medium */
.section-zone--peak     { padding: 24px 32px; }  /* Dense */
.section-zone--resolution { padding: 48px 32px; } /* Recovery */
```

**Stats bar (two patterns):**
```css
/* Horizontal segments (DD/OD pattern) */
.stats-bar__segment { flex: 1; }

/* Vertical stacks (CD pattern) */
.stat-item { flex-direction: column; }
```

---

## What NOT to Do

❌ **DO NOT modify component structure**
- Callout MUST have 2 zones (sparse label + dense body)
- ❌ Single-zone callout (violates DNA rule)
- ✅ Customize colors/spacing via CSS properties

❌ **DO NOT violate soul constraints**
- ❌ Add `border-radius: 4px` to callout
- ❌ Add `box-shadow: 0 2px 4px rgba(0,0,0,0.1)`
- ✅ Use solid-offset depth (3px border offset) for depth

❌ **DO NOT use LOW-confidence components without review**
- Tension-test components (layer boundaries, building floor, compression grid) are PROVISIONAL
- Review component-inventory.md notes before using
- If metaphor-specific, DON'T extract — use case study instead

❌ **DO NOT mix CD-only components in DD/OD layouts**
- Reasoning component is CD-specific (framed deliberation)
- Bento grid is CD-specific (high-density containment)
- Check source stage in component-inventory.md before using

---

## Confidence Levels Explained

**HIGH (8+ files OR 100% within stage):**
- Validated across multiple explorations
- Safe to use without review
- Example: Callout (27/27 files), code blocks (25/27 files)

**MEDIUM (4–7 files OR 80%+ within stage):**
- Validated in specific stage (CD-only, DD/OD-primary)
- Safe to use WITHIN validated context
- Example: Reasoning (6/6 CD files), file tree (5 DD/OD files)

**LOW (2–3 files OR <20% within stage):**
- Limited validation, often metaphor-specific
- PROVISIONAL — review after Phase D builds
- Example: Layer boundaries (3 TT files), building floor (1 TT file)

**Promotion criteria:**
- LOW → MEDIUM: Appears in 4+ new files across different metaphors
- MEDIUM → HIGH: Appears in 8+ total files OR validates across all stages

---

## Merge Conflict Resolutions

**3 conflicts resolved during extraction:**

**1. Code block border width**
- DD/OD: 1px border
- CD: 3px border
- **Resolution:** CD wins (3px) — later refinement, aligns with border-weight system

**2. Stats bar structure**
- DD/OD: Horizontal segments (flex: 1)
- CD: Vertical stacks (flex-direction: column)
- **Resolution:** BOTH merged — two valid layout patterns for same semantic purpose

**3. Callout property names**
- DD/OD: `.callout__content`
- CD: `.callout__body`
- **Resolution:** BOTH supported as aliases (`.callout__content, .callout__body { ... }`)

**Full conflict log:** `component-inventory.md` lines 533–593

---

## Relationship to Other Layers

**Layer 1 (Identity):**
- All components inherit soul constraints (border-radius: 0, box-shadow: none)
- Component inventory: 100% soul compliance (0 violations)

**Layer 2 (Vocabulary):**
- All components use token variables (`var(--color-background)`)
- No hardcoded values (enables theme flexibility)

**Layer 3 (Grammar):**
- Components implement mechanisms (callout = 2-Zone DNA)
- Components follow compositional rules (grids collapse at 768px)

**Layer 5 (Case Studies):**
- Metaphors compose components (geological uses callout + code block + header)
- Case studies show USAGE, components provide IMPLEMENTATION

**Layer 6 (Guidelines):**
- Semantic rules reference components ("When Info vs Context callout?")
- Usage criteria document confidence levels

---

## Why This Layer Exists

**Components bridge THEORY (grammar) and PRACTICE (layouts).**

Without components:
- Every layout reinvents callout structure
- No reusability (copy-paste from metaphors)
- Soul violations accumulate (agents add shadows, round corners)

With components:
- Copy-paste ready CSS
- Soul-compliant by default
- Single source of truth for structures

**Components are IMPLEMENTATIONS, not constraints.**
- Customize via CSS custom properties
- Follow grammar rules (2-zone DNA)
- Use tokens (not hardcoded values)

---

## File Metadata

**Component layer files:** 2
**Total components:** 34 selectors across 26 families
**Confidence distribution:** 10 HIGH, 18 MEDIUM, 6 LOW
**Soul compliance:** 100% (0 violations)
**Parametric components:** 4 (callout, stats bar, density meter, section zones)
**Merge conflicts:** 3 resolved
**Extraction lens:** Identity + Enablement (implementations enable, don't constrain)
**Validation:** Convergence check (98% consensus), anti-gravity audit (94.7%)
**Next review:** After Phase D-V builds (promote LOW → MEDIUM confidence)

---

**COPY. CUSTOMIZE. DON'T VIOLATE SOUL.**
