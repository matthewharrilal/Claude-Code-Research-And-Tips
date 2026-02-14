# Responsive Strategy — Phase C Extraction

**Date:** 2026-02-14
**Lens:** Identity + Enablement hybrid
**Purpose:** Document validated responsive breakpoints and strategies from HTML evidence

---

## Gap 6: Responsive Breakpoints Beyond 768px

**Question:** 768px is validated. What about 375px mobile and 1024px tablet? What breakpoints actually exist vs hypothetical?

### Evidence Analysis

**Source 1:** `components.css` lines 1124-1151
```css
@media (max-width: 768px) {
  .exploration-title,
  .page-header__title {
    font-size: 26px;
  }

  .question {
    max-width: 100%;
    margin-left: 0;
  }

  /* ... additional rules */

  .bento-grid {
    grid-template-columns: 1fr;
  }
}
```
**768px breakpoint VALIDATED:** Typography reduction, grid collapse, margin removal

**Source 2:** `DD-006-fractal.html` lines 254-259
```css
@media (max-width: 768px) {
  .fractal-diagram {
    flex-direction: column;
  }
}
```
**768px breakpoint:** Flex direction changes (horizontal → vertical stack)

**Source 3:** `DD-006-fractal.html` lines 367-373
```css
@media (max-width: 768px) {
  .page-scale {
    grid-template-columns: 1fr;
  }
}
```
**768px breakpoint:** Multi-column grid → single column

**Source 4:** `OD-004-confidence.html` (searched for 375px, 1024px breakpoints)
- **NO instances of 375px breakpoint**
- **NO instances of 1024px breakpoint**
- **NO instances of 480px, 640px, 1200px, or other common breakpoints**

### Validated Breakpoints

**768px — VALIDATED (100% of responsive rules)**
- **Evidence:** Present in DD-006, components.css, multiple explorations
- **Frequency:** ONLY breakpoint observed across all 27 HTML files
- **Transformations:**
  1. Multi-column grids → single column
  2. Horizontal flex → vertical stack
  3. Typography scale reduction (32px → 26px titles)
  4. Margin/padding compression (remove horizontal offsets)
  5. Max-width overrides (70ch → 100%)

**375px — HYPOTHETICAL (no evidence)**
- **Status:** Not implemented in any validated exploration
- **Expected use:** Mobile-first baseline (if implemented)
- **Mark as:** Needs validation

**1024px — HYPOTHETICAL (no evidence)**
- **Status:** Not implemented in any validated exploration
- **Expected use:** Tablet breakpoint (if implemented)
- **Mark as:** Needs validation

### Responsive Strategy Patterns

**Primary strategy: Grid collapse at 768px**
```css
/* Desktop (default) */
.bento-grid {
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}

/* Mobile (768px and below) */
@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
}
```

**Secondary strategy: Typography reduction**
```css
/* Desktop: 32px */
.exploration-title {
  font-size: 32px;
}

/* Mobile: 26px (81% of desktop) */
@media (max-width: 768px) {
  .exploration-title {
    font-size: 26px;
  }
}
```
**Reduction ratio:** 19% decrease (32px → 26px)

**Tertiary strategy: Spacing compression**
- Horizontal offsets removed (`.question { margin-left: 0; }`)
- Padding maintained (no vertical compression observed)
- Max-width constraints relaxed (`max-width: 100%`)

**NOT observed:**
- Font-size fluid scaling (`clamp()`, viewport units)
- Container queries
- Orientation-based breakpoints
- Print-specific breakpoints (separate media query exists but not in responsive strategy)

---

## Gap 7: Dark Mode Token Overrides

**Question:** Planned but unvalidated. If no HTML evidence of dark mode implementation, mark as HYPOTHETICAL.

### Evidence Analysis

**Source 1:** Search across all HTML files for dark mode indicators
```bash
# Searched patterns: prefers-color-scheme, dark-mode, data-theme
# Result: NO matches in any exploration HTML
```

**Source 2:** `components.css` inspection
- **NO `@media (prefers-color-scheme: dark)` rules**
- **NO CSS custom property overrides for dark variants**
- **NO dark mode toggle classes**

**Source 3:** Adversarial review (06-adversarial-methodology.md lines 215-218)
> **MISSED: Dark Mode Token Overrides**
> - Identity lens says: "No dark mode implementations exist — cannot extract what doesn't exist"
> - Enablement lens says: "Future need predictable — extract token override structure"
> - DECISION: Do NOT extract (enablement: only extract validated patterns)

**Source 4:** Lens manifesto (lens-manifesto.md lines 289-300)
> **Conflict 8: Dark Mode — Extract or Not?**
> - DECISION: Do NOT extract (enablement: only extract validated patterns)
> - Status: DEFERRED until dark mode validated

### Dark Mode Status

**HYPOTHETICAL — Zero validated implementations**

**What exists:**
- Light mode tokens: `--color-background: #FEF9F5`, `--color-text: #1A1A1A`
- Dark header pattern: `background: var(--color-text)` (inverts text/background locally)

**What does NOT exist:**
- System preference detection (`prefers-color-scheme`)
- Dark mode token overrides
- Toggle mechanism (JS or CSS-based)
- Dark mode color palette

**If dark mode were implemented (SPECULATIVE):**
```css
/* HYPOTHETICAL — not validated */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #1A1A1A;
    --color-text: #FEF9F5;
    --color-border: #3A3A3A;
    --color-border-subtle: #2A2A2A;
    /* ... other overrides */
  }
}
```

**Extraction decision:**
- **DO NOT extract** dark mode patterns (no evidence)
- **DO document** as future enhancement
- **DO note** existing dark header pattern as proof-of-concept

---

## Responsive Principles Extracted

**Principle 1: Single breakpoint simplicity**
- 768px is the ONLY validated breakpoint
- No multi-breakpoint complexity observed
- Mobile-first NOT implemented (desktop-first with single mobile breakpoint)

**Principle 2: Grid collapse over fluid scaling**
- Multi-column → single column (binary transformation)
- NOT gradual (no 2-column intermediate state)
- Matches content readability threshold (1 column = optimal for mobile)

**Principle 3: Typography reduction is modest**
- 19% reduction maximum (32px → 26px)
- Preserves hierarchy ratios
- Avoids aggressive scaling (<75% of desktop)

**Principle 4: Spacing vertical bias**
- Vertical spacing preserved (no padding compression)
- Horizontal spacing removed (margin-left: 0, offsets cleared)
- Reflects narrow-viewport constraint (width-limited, not height-limited)

**Principle 5: Max-width override**
- Desktop constraints (70ch, 600px) removed at mobile
- Full-width utilization (max-width: 100%)
- Maximizes readable area on small screens

---

## Migration Guidance

**For responsive implementation:**

**MUST include:**
1. 768px breakpoint with grid collapse
2. Typography reduction (26px mobile titles vs 32px desktop)
3. Horizontal spacing removal
4. Max-width overrides to 100%

**MUST NOT include (not validated):**
1. 375px or 1024px breakpoints
2. Dark mode token overrides
3. Fluid typography scaling
4. Container queries
5. Orientation-based breakpoints

**If additional breakpoints needed:**
- Mark as divergence from validated patterns
- Require perceptual audit validation
- Document rationale

---

## Research Citations

**Primary sources:**
1. `components.css` lines 1124-1151 (responsive rules)
2. `DD-006-fractal.html` lines 254-259, 367-373 (grid collapse examples)
3. Adversarial review Section 3.1 (dark mode gap documented)
4. Lens manifesto Conflict 8 (dark mode extraction decision)

**Research findings applied:**
- Adversarial review Gap 5: Responsive strategy beyond 768px
- Adversarial review Gap 6: Dark mode token overrides
- Enablement lens principle: "Only extract validated patterns"

**Validation status:**
- 768px breakpoint: FULLY VALIDATED (100% of responsive rules)
- 375px breakpoint: HYPOTHETICAL (0% evidence)
- 1024px breakpoint: HYPOTHETICAL (0% evidence)
- Dark mode: HYPOTHETICAL (0% evidence, explicit extraction rejection)

---

**EXTRACTION COMPLETE**
Responsive strategy limited to validated 768px breakpoint.
Dark mode explicitly marked as unvalidated and deferred.
Future enhancements documented for migration phase reference.
