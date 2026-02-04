# PRODUCTION RULES
## KortAI Implementation Guidelines

**Version:** 1.0
**Date:** 2026-02-04
**Phase:** 4A-E Synthesis
**Sources:** All Tracking Sheets + SOUL-DEFINITION.md

═══════════════════════════════════════════════════════════════════════════════
## THE 6 UNIVERSAL RULES
═══════════════════════════════════════════════════════════════════════════════

### Rule 1: Sharp Edges — NO EXCEPTIONS

```css
/* ✓ CORRECT */
.component {
  border-radius: 0;
}

/* ✗ WRONG — Never do this */
.component {
  border-radius: 4px;   /* NO */
  border-radius: 8px;   /* NO */
  border-radius: 12px;  /* NO */
  border-radius: 50%;   /* NO */
}
```

**Enforcement:** Every component CSS file must explicitly set `border-radius: 0`.

---

### Rule 2: Flat Design — NO EXCEPTIONS

```css
/* ✓ CORRECT */
.component {
  box-shadow: none;
}

/* ✗ WRONG — Never do this */
.component {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);   /* NO */
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);  /* NO */
}
```

**Enforcement:** Every component CSS file must explicitly set `box-shadow: none`.

---

### Rule 3: Limited Palette — RED + CREAM + BLACK ONLY

**Allowed Colors:**
```css
--color-primary: #E83025;      /* Red accent */
--color-background: #FEF9F5;   /* Warm cream */
--color-text: #1A1A1A;         /* Near-black */
--color-text-secondary: #666666;  /* Muted */
```

**Semantic Extensions (ONLY for callouts):**
```css
--accent-blue: #4A90D9;    /* Info only */
--accent-green: #4A9D6B;   /* Tip only */
--accent-amber: #D97706;   /* Essence, Reasoning only */
--accent-purple: #7C3AED;  /* Challenge only */
```

**BANNED:**
- Bootstrap colors (#007bff, #28a745, #dc3545, #ffc107)
- Arbitrary grays (#f8f9fa, #e9ecef, #dee2e6)
- Rainbow accents

---

### Rule 4: Typography Hierarchy — SERIF/SANS/MONO

| Zone Type | Font | Usage |
|-----------|------|-------|
| Display/Title | Serif (Instrument Serif) | Headlines, labels, pull quotes |
| Body/Content | Sans (Inter) | Paragraphs, descriptions |
| Technical | Mono (JetBrains Mono) | Code, file trees |

**Special Case:** Essence Callout body uses Serif Italic (the only callout exception).

---

### Rule 5: Heavy Borders When Bordered — 2-4px MINIMUM

```css
/* ✓ CORRECT */
.bordered-component {
  border: 3px solid var(--color-primary);
  border-left: 4px solid var(--color-primary);
}

/* ✗ WRONG — Timid borders */
.component {
  border: 1px solid #dee2e6;  /* NO */
}
```

**Exception:** Frame borders (Core Abstraction, Reasoning) use 1px for subtlety.

---

### Rule 6: Whitespace as Design Element — GENEROUS ALWAYS

```css
/* ✓ CORRECT */
.component {
  padding: 24px 32px;
  margin: 32px 0;
  line-height: 1.6;
}

/* ✗ WRONG — Cramped */
.component {
  padding: 8px;
  margin: 0;
  line-height: 1.2;
}
```

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT IMPLEMENTATION RULES
═══════════════════════════════════════════════════════════════════════════════

### Code Snippet

| Rule | Value | Reason |
|------|-------|--------|
| Background | `#1E1E1E` (dark slate) | Technical focus zone |
| Border radius | 0 | Editorial precision |
| Syntax colors | 2-3 max | Calm, not rainbow |
| Copy button | Hover-reveal only | Content first |
| Line numbers | Optional, ghosted | Ruler, not feature |
| Max-height | Consider adding | Prevent page domination |

**CSS Template:**
```css
.code-snippet {
  background: #1E1E1E;
  border-radius: 0;
  box-shadow: none;
  padding: 16px;
}
```

---

### Callout Family (Info, Tip, Gotcha, Essence, Challenge)

| Rule | Value | Reason |
|------|-------|--------|
| Left border | 4px solid [accent] | Flag marker |
| Background | Tinted or transparent | Semantic zone |
| Padding top | 24px | Breathing room |
| Padding bottom | 28px (asymmetric!) | Settling space |
| Label | Uppercase, 10-11px | Type identification |
| Icons | NONE | Typography only |

**CSS Template:**
```css
.callout {
  border-left: 4px solid var(--accent-color);
  padding: 24px 20px 28px 20px;
  border-radius: 0;
  box-shadow: none;
}

.callout__label {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

**Essence Exception:**
```css
.essence-callout .callout__body {
  font-family: var(--font-serif);
  font-style: italic;
}
```

---

### File Tree

| Rule | Value | Reason |
|------|-------|--------|
| Font | Monospace only | Alignment critical |
| Line height | 1.4-1.5 (tight) | Dense structure |
| Indentation | 4 spaces fixed | Hierarchy depth |
| Folder color | Blue (#4A90D9) | Landmarks |
| Comment color | Gray (#888) | Annotations recede |

**CSS Template:**
```css
.file-tree {
  font-family: var(--font-mono);
  font-size: 13-14px;
  line-height: 1.4;
  white-space: pre;
  border-left: 4px solid var(--color-primary);
  border-radius: 0;
}
```

---

### Decision Matrix

| Rule | Value | Reason |
|------|-------|--------|
| Left border | 4px red | Category anchor |
| Vertical borders | NONE | Open columns |
| Horizontal rules | 1px subtle | Section breaks |
| Width | auto (content-driven) | Not forced 100% |
| Zebra striping | NONE | Trust reader |
| Hover effects | NONE | Content, not app |

**CSS Template:**
```css
.decision-matrix {
  border-left: 4px solid var(--color-primary);
  border-radius: 0;
}

.decision-matrix th,
.decision-matrix td {
  border-bottom: 1px solid var(--color-border-subtle);
  border-left: none;
  border-right: none;
}
```

---

### Core Abstraction

| Rule | Value | Reason |
|------|-------|--------|
| Frame | 1px border all sides | Bounded teaching unit |
| Philosophy font | Serif italic | Editorial pull-quote |
| Code section | Dark background | Demonstration |
| Layout | Stacked (philosophy first) | Wisdom precedes proof |

**CSS Template:**
```css
.core-abstraction {
  border: 1px solid var(--color-border);
  border-radius: 0;
  box-shadow: none;
}

.core-abstraction__quote {
  font-family: var(--font-serif);
  font-style: italic;
}

.core-abstraction__code {
  background: #1E1E1E;
}
```

---

### Task Component

| Rule | Value | Reason |
|------|-------|--------|
| Task-to-task gap | 0px (touching!) | Workflow continuity |
| Checkbox | 18px square, 0 radius | Sharp, editorial |
| Completed state | Strikethrough | Editorial marking |
| Removal on complete | NO | Visibility preserved |
| Gamification | NONE | No confetti/colors |

**CSS Template:**
```css
.task-list .task + .task {
  margin-top: 0; /* Tasks touch */
}

.task--complete .task__title {
  text-decoration: line-through;
  color: var(--color-text-secondary);
}
```

---

### Reasoning Component

| Rule | Value | Reason |
|------|-------|--------|
| Frame | 1px border all sides | Bounded analysis |
| Columns | 2 only, equal weight | Binary comparison |
| Column divider | 1px subtle | Barely visible |
| Summary background | Amber tint (#FEF9F0) | Synthesis zone |
| Color coding columns | NONE | Equal weight |

**CSS Template:**
```css
.reasoning {
  border: 1px solid var(--color-border);
  border-radius: 0;
}

.reasoning__column:first-child {
  border-right: 1px solid var(--color-border);
}

.reasoning__summary {
  background: #FEF9F0;
  border-top: 2px solid var(--accent-amber);
}
```

═══════════════════════════════════════════════════════════════════════════════
## COEXISTENCE RULES
═══════════════════════════════════════════════════════════════════════════════

### Universal Gap: 24px Between All Components

```css
.component + .component {
  margin-top: 24px;
}
```

### Same-Type Adjacency: Add Prose Break

When placing same-type components back-to-back:
- Code + Code: Add explanatory prose between
- Callout + Callout: Add prose context
- Matrix + Matrix: Needs clear section break

### Density Transitions

| From | To | Recommended Gap |
|------|-----|-----------------|
| HIGH → LOW | 24px | Standard |
| LOW → HIGH | 24px | Standard |
| HIGH → HIGH | Add prose or 32px gap | Prevent fatigue |
| LOW → LOW | 24px | Standard |

═══════════════════════════════════════════════════════════════════════════════
## PAGE COMPOSITION RULES
═══════════════════════════════════════════════════════════════════════════════

### Density Rhythm: LOW → HIGH → LOW

Every page should breathe:
- Start with LOW density (intro prose)
- Build to HIGH density (core content)
- Return to LOW density (breathing points)

### Component Limits Per Page

| Page Type | Recommended Limits |
|-----------|-------------------|
| Documentation | Max 3 same-type components in sequence |
| Tutorial | Mix component types, checkpoints between |
| Reference | Group by semantic category |

### Required Breathing Points

Every 3-4 dense components needs a breathing point:
- Simple prose paragraph
- LOW density component (Tip, Info)
- Visual separator

═══════════════════════════════════════════════════════════════════════════════
## ACCESSIBILITY RULES
═══════════════════════════════════════════════════════════════════════════════

### Focus States (Mandatory)

```css
.interactive:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### ARIA Labels (Required)

| Component | Required ARIA |
|-----------|---------------|
| Code Snippet | `aria-label="Code: [language]"` |
| Callouts | `role="note" aria-label="[type]"` |
| Task Checkbox | `aria-checked` |
| File Tree | `role="tree" aria-label="File structure"` |

### Color Contrast

- All text must meet WCAG AA (4.5:1 for body, 3:1 for large)
- Red accent (#E83025) on cream meets requirements
- Dark code (#F5F0EB on #1E1E1E) meets requirements

═══════════════════════════════════════════════════════════════════════════════
## VERIFICATION CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

### Pre-Implementation

- [ ] Reviewed SOUL-DEFINITION.md locked values
- [ ] Identified component archetype
- [ ] Confirmed no banned properties in design

### Implementation

- [ ] `border-radius: 0` on all elements
- [ ] `box-shadow: none` on all elements
- [ ] Only allowed colors used
- [ ] Typography hierarchy correct (serif/sans/mono)
- [ ] Whitespace generous (24px+ padding)
- [ ] Heavy borders when bordered (3-4px)

### Post-Implementation

- [ ] Passes Soul Test ("Could this be Bootstrap?")
- [ ] Accessibility audit passed
- [ ] Responsive behavior verified
- [ ] Coexistence tested with adjacent components

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Phase:** 4A-E Synthesis
**Sources:**
- SOUL-DEFINITION.md (root)
- All tracking sheets
- Phase 4 re-audit findings

**Purpose:** Implementation rules for production KortAI components
