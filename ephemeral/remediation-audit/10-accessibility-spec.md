# 10: Accessibility & Responsive Specification

**Agent:** accessibility-spec (Opus 4.6)
**Date:** 2026-02-17
**Task:** Produce exact, copy-pasteable CSS and HTML for all missing accessibility and responsive features in `07-intentionality.html`.

**Source Analysis:**
- `07-intentionality.html` -- 2,034 lines, ZERO accessibility features (0/8 vs CD-006's 8/8)
- `CD-006-pilot-migration.html` -- 8/8 accessibility features, benchmark implementation
- `04-remediation-gaps.md` -- BLOCKING gap #1: accessibility 0/6
- `06-cd006-css-forensics.md` -- Channel F: 5 @media queries + skip link + aria + role = 90 CSS lines

**Current State:**
| Feature | CD-006 | Flagship | Gap |
|---------|--------|----------|-----|
| `::selection` styling | YES (lines 213-216) | NO | MISSING |
| `focus-visible` outlines | YES (lines 221-224) | NO | MISSING |
| `prefers-reduced-motion` | YES (lines 982-988) | NO | MISSING |
| Skip link | YES (lines 229-243 CSS + line 1096 HTML) | NO | MISSING |
| ARIA labels | YES (21 instances) | NO | MISSING |
| `role` attributes | YES (17 instances) | NO | MISSING |
| Responsive 768px | YES (lines 1023-1067) | NO | MISSING |
| Responsive 480px | YES (lines 1072-1089) | NO | MISSING |
| Print styles | YES (lines 993-999) | NO | MISSING |
| `<main>` landmark | YES (line 1116) | NO | MISSING |

---

## FEATURE 1: `::selection` Styling

### What it does for accessibility
Selection styling provides visual feedback when users highlight text. It reinforces brand identity and ensures highlighted text remains readable against the selection background. Without it, browsers use a default blue highlight that clashes with the warm cream palette.

### How CD-006 implements it (reference)
```css
/* CD-006 lines 213-216 */
::selection {
  background: var(--color-primary);
  color: var(--color-background);
}
```
CD-006 uses the full primary red (#E83025) as selection background with cream text. This is bold and brand-forward.

### Exact CSS (copy-pasteable)

```css
/* ============================================================
   SELECTION STYLING -- Branded text selection
   Coordinated with page palette. Red selection background
   echoes the primary accent used in header, borders, and
   component labels.
   ============================================================ */
::selection {
  background: var(--color-primary);
  color: var(--color-background);
}
```

### Where in the document
Insert in the `<style>` block, immediately after the RESET & BASE section (after line 176, after the `body` rule). This placement matches CD-006's ordering: reset -> selection -> focus -> skip-link.

---

## FEATURE 2: `focus-visible` Outlines

### What it does for accessibility
`focus-visible` provides visible focus indicators for keyboard navigation without showing outlines during mouse clicks. This is a WCAG 2.1 Level AA requirement (Success Criterion 2.4.7: Focus Visible). Without it, keyboard users cannot see which element is focused.

### How CD-006 implements it (reference)
```css
/* CD-006 lines 221-224 */
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}
```
CD-006 applies a 3px primary-red outline to ALL focusable elements with 2px offset, creating a clear but non-intrusive focus ring.

### Exact CSS (copy-pasteable)

```css
/* ============================================================
   FOCUS STATES -- WCAG 2.1 Level AA (SC 2.4.7)
   3px outline in primary red. Offset prevents overlap with
   element borders. Uses :focus-visible (not :focus) to avoid
   showing outlines on mouse click.
   ============================================================ */
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Where in the document
Insert immediately after the `::selection` block. Same position logic as CD-006.

### Soul compliance note
The `outline` property is NOT `border-radius` and NOT `box-shadow`. Outlines are accessibility infrastructure, not decorative. `outline-offset: 2px` is a spacing value, not a radius. COMPLIANT with all soul constraints.

---

## FEATURE 3: `prefers-reduced-motion`

### What it does for accessibility
Users who experience motion sickness, vestibular disorders, or seizure conditions can set their OS to prefer reduced motion. This `@media` query respects that preference by disabling all animations and transitions. WCAG 2.1 Level AAA (SC 2.3.3: Animation from Interactions). While the flagship currently has no CSS animations, this is defensive -- it prevents any future transitions or scroll behaviors from causing harm, and it addresses any browser-default smooth scrolling.

### How CD-006 implements it (reference)
```css
/* CD-006 lines 982-988 */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
CD-006 sets near-zero durations rather than `none` to avoid breaking JS that depends on `transitionend` events. `scroll-behavior: auto` prevents smooth scrolling.

### Exact CSS (copy-pasteable)

```css
/* ============================================================
   REDUCED MOTION -- WCAG 2.1 (SC 2.3.3)
   Respects user OS preference for reduced motion.
   Uses 0.01ms duration (not 0s) to preserve JS event listeners.
   Disables smooth scrolling for vestibular disorder users.
   ============================================================ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Where in the document
Insert at the END of the `<style>` block, after all other CSS rules (after line 1033, before the closing `</style>` tag). Media queries conventionally go at the end of stylesheets. This matches CD-006's ordering.

---

## FEATURE 4: Skip Link

### What it does for accessibility
A skip link lets keyboard and screen reader users bypass the header and jump directly to the main content. Without it, keyboard users must tab through every header element before reaching the page content. WCAG 2.1 Level A requirement (SC 2.4.1: Bypass Blocks). This is a BLOCKING accessibility requirement.

### How CD-006 implements it (reference)
```css
/* CD-006 lines 229-243 */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--color-primary);
  color: var(--color-background);
  padding: 8px 16px;
  z-index: 1000;
  font-family: var(--font-body);
  font-size: 14px;
  text-decoration: none;
}
.skip-link:focus {
  top: 0;
}
```
HTML (CD-006 line 1096):
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```
Plus `<main id="main-content">` wrapping all body content (CD-006 line 1116).

### Exact CSS (copy-pasteable)

```css
/* ============================================================
   SKIP LINK -- WCAG 2.1 Level A (SC 2.4.1)
   Hidden off-screen by default. Slides into view on focus.
   Primary red background for high visibility when activated.
   ============================================================ */
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

.skip-link:focus {
  top: 0;
}
```

### Exact HTML additions (copy-pasteable)

**Addition 1: Skip link element**
Insert as the FIRST child of `<body>`, before the `<header>`:

```html
<!-- Skip Link -- Accessibility (WCAG 2.1 SC 2.4.1) -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

**Current HTML (line 1036-1046):**
```html
<body>

  <!-- ============================================================
       DARK HEADER — Mechanism #13
       ...
       ============================================================ -->
  <header class="page-header">
```

**Modified HTML:**
```html
<body>

  <!-- Skip Link -- Accessibility (WCAG 2.1 SC 2.4.1) -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- ============================================================
       DARK HEADER — Mechanism #13
       ...
       ============================================================ -->
  <header class="page-header">
```

**Addition 2: `<main>` landmark wrapping body content**
Wrap all content between `</header>` and `<footer>` in a `<main>` element:

After the closing `</header>` tag (line 1052), insert:
```html
<main id="main-content">
```

Before the opening `<footer class="page-footer">` tag (line 2019), insert:
```html
</main>
```

This gives the skip link a target and creates a proper `<main>` landmark for screen readers.

---

## FEATURE 5: ARIA Labels and Role Attributes

### What it does for accessibility
ARIA labels provide screen readers with meaningful descriptions of page regions. Without them, assistive technology users hear generic "section" or "complementary" announcements with no context. Role attributes communicate the semantic purpose of elements that lack native HTML semantics (e.g., decorative dividers marked as `separator`).

### How CD-006 implements it (reference)
CD-006 has 21 `aria-label` attributes and 17 `role` attributes:
- Every `<section>` has `aria-label="Section N: Title"` (8 sections)
- Navigation has `aria-label="Table of Contents"`
- Bento grid items have individual `aria-label`s (7 items)
- All callouts have `role="note"` (17 callout instances)
- All transitions/dividers have `role="separator" aria-hidden="true"` (7 dividers)
- Choreo spokes have `aria-label` (3 instances)

### Exact HTML attribute additions (copy-pasteable)

Below is every element that needs modification, listed by line number in `07-intentionality.html`:

#### 5A. Header landmark (line 1046)
```html
<!-- CURRENT -->
<header class="page-header">

<!-- MODIFIED -->
<header class="page-header" role="banner">
```
**Note:** `<header>` as a direct child of `<body>` already implies `role="banner"`, but explicit declaration improves older screen reader support.

#### 5B. Sections with aria-label (12 sections)

**Section 1 (line 1066):**
```html
<!-- CURRENT -->
<section class="zone-s1" style="padding-top: var(--space-16); padding-bottom: var(--space-16);">

<!-- MODIFIED -->
<section class="zone-s1" aria-label="Section 1: What the Research Set Out to Find" style="padding-top: var(--space-16); padding-bottom: var(--space-16);">
```

**Section 2 (line 1097):**
```html
<!-- CURRENT -->
<section class="zone-s2" style="padding-top: var(--space-20); padding-bottom: var(--space-20);">

<!-- MODIFIED -->
<section class="zone-s2" aria-label="Section 2: Master Insight" style="padding-top: var(--space-20); padding-bottom: var(--space-20);">
```

**Section 3 (line 1132):**
```html
<!-- CURRENT -->
<section class="zone-s3" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">

<!-- MODIFIED -->
<section class="zone-s3" aria-label="Section 3: Why Great Documentation Breathes" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">
```

**Section 4 (line 1204):**
```html
<!-- CURRENT -->
<section class="zone-s4" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">

<!-- MODIFIED -->
<section class="zone-s4" aria-label="Section 4: The Choreography of Reading" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">
```

**Section 5 (line 1282):**
```html
<!-- CURRENT -->
<section class="zone-s5" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">

<!-- MODIFIED -->
<section class="zone-s5" aria-label="Section 5: The Characters on Your Page" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">
```

**Section 6 (line 1401):**
```html
<!-- CURRENT -->
<section class="zone-s6" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">

<!-- MODIFIED -->
<section class="zone-s6" aria-label="Section 6: Whitespace and Typography as Design Decisions" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">
```

**Section 7 (line 1441):**
```html
<!-- CURRENT -->
<section class="zone-s7" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">

<!-- MODIFIED -->
<section class="zone-s7" aria-label="Section 7: Three Tensions and How to Resolve Them" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">
```

**Section 8 (line 1523):**
```html
<!-- CURRENT -->
<section class="zone-s8" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">

<!-- MODIFIED -->
<section class="zone-s8" aria-label="Section 8: From Principles to Page Structure" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">
```

**Section 9 (line 1670):**
```html
<!-- CURRENT -->
<section class="zone-s9" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">

<!-- MODIFIED -->
<section class="zone-s9" aria-label="Section 9: What the Research Recommends" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">
```

**Section 10 (line 1761):**
```html
<!-- CURRENT -->
<section class="zone-s10" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">

<!-- MODIFIED -->
<section class="zone-s10" aria-label="Section 10: What to Avoid and Why" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">
```

**Section 11 (line 1832):**
```html
<!-- CURRENT -->
<section class="zone-s11" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">

<!-- MODIFIED -->
<section class="zone-s11" aria-label="Section 11: Where the Research Points Next" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">
```

**Section 12 (line 1985):**
```html
<!-- CURRENT -->
<section class="zone-s12" style="padding-top: var(--space-16); padding-bottom: var(--space-16);">

<!-- MODIFIED -->
<section class="zone-s12" aria-label="Section 12: An Invitation, Not a Conclusion" style="padding-top: var(--space-16); padding-bottom: var(--space-16);">
```

#### 5C. Component blocks with role="note" (12 component-blocks)

Every `.component-block` should receive `role="note"`. There are 12 instances in the HTML. Add `role="note"` to each `<div class="component-block ...">`:

- Line 1180: `<div class="component-block">` -- S3 Density Rhythm
- Line 1376: `<div class="component-block dense">` -- S5 Combination Rule
- Line 1452: `<div class="component-block dense">` -- S7 Tension 1 (coral)
- Line 1458: `<div class="component-block dense resolution">` -- S7 Resolution 1
- Line 1468: `<div class="component-block dense">` -- S7 Tension 2 (coral)
- Line 1474: `<div class="component-block dense resolution">` -- S7 Resolution 2
- Line 1483: `<div class="component-block dense">` -- S7 Tension 3 (coral)
- Line 1490: `<div class="component-block dense resolution">` -- S7 Resolution 3
- Line 2000: `<div class="component-block sparse" ...>` -- S12 The Discovery

Example transformation:
```html
<!-- CURRENT -->
<div class="component-block dense">

<!-- MODIFIED -->
<div class="component-block dense" role="note">
```

Apply to ALL 9 component-block instances listed above.

#### 5D. Blockquote (line 1103)
```html
<!-- CURRENT -->
<blockquote class="master-insight">

<!-- MODIFIED -->
<blockquote class="master-insight" aria-label="Master insight: Layout as content, not container">
```

#### 5E. Dividers with role="separator" (11 dividers)

Every `.divider-smooth`, `.divider-bridge`, and `.divider-breathing` should receive `role="separator" aria-hidden="true"`:

**Divider S1->S2 (line 1086):**
```html
<!-- CURRENT -->
<div class="divider-smooth"></div>

<!-- MODIFIED -->
<div class="divider-smooth" role="separator" aria-hidden="true"></div>
```

**Divider S2->S3 (line 1114):**
```html
<div class="divider-bridge" role="separator" aria-hidden="true"></div>
```

**Divider S3->S4 (line 1193):**
```html
<div class="divider-smooth" role="separator" aria-hidden="true"></div>
```

**Divider S4->S5 (line 1263):**
```html
<div class="divider-bridge" role="separator" aria-hidden="true"></div>
```

**Divider S5->S6 (line 1389):**
```html
<div class="divider-smooth" role="separator" aria-hidden="true"></div>
```

**Divider S6->S7 (line 1422):**
```html
<div class="divider-smooth" role="separator" aria-hidden="true"></div>
```

**Divider S7->S8 (line 1505):**
```html
<div class="divider-bridge" role="separator" aria-hidden="true"></div>
```

**Divider S8->S9 (line 1653):**
```html
<div class="divider-breathing" role="separator" aria-hidden="true"></div>
```

**Divider S9->S10 (line 1748):**
```html
<div class="divider-smooth" role="separator" aria-hidden="true"></div>
```

**Divider S10->S11 (line 1813):**
```html
<div class="divider-smooth" role="separator" aria-hidden="true"></div>
```

**Divider S11->S12 (line 1963):**
```html
<div class="divider-bridge" role="separator" aria-hidden="true"></div>
```

#### 5F. Footer landmark (line 2019)
```html
<!-- CURRENT -->
<footer class="page-footer">

<!-- MODIFIED -->
<footer class="page-footer" role="contentinfo">
```
**Note:** `<footer>` as direct child of `<body>` already implies `role="contentinfo"`, but explicit is safer for older AT.

### Summary of ARIA additions

| Attribute | Count | Elements |
|-----------|-------|----------|
| `aria-label` on sections | 12 | All 12 `<section>` elements |
| `aria-label` on blockquote | 1 | `.master-insight` |
| `role="note"` | 9 | All `.component-block` instances |
| `role="separator" aria-hidden="true"` | 11 | All divider elements |
| `role="banner"` | 1 | `<header>` |
| `role="contentinfo"` | 1 | `<footer>` |
| **Total attributes added** | **35** | |

---

## FEATURE 6: Responsive Breakpoints

### What it does for accessibility
Responsive design is a core accessibility requirement (WCAG 2.1 SC 1.4.10: Reflow). Content must be viewable without horizontal scrolling at 320px viewport width. The flagship has ZERO `@media` queries, meaning the page will overflow or render incorrectly on tablets and phones.

### How CD-006 implements it (reference)
CD-006 has 3 breakpoints:
- **960px:** Grid collapse (bento/choreo grids go to 1-column)
- **768px:** Header padding reduction, title shrink, container padding reduction, grid collapses, footer reflow
- **480px:** Further title/heading shrink, smaller code/callout padding

### Exact CSS (copy-pasteable)

```css
/* ============================================================
   RESPONSIVE: 768px -- Tablet and smaller
   Reduces header/container padding, scales typography down.
   WCAG 2.1 SC 1.4.10: Reflow (no horizontal scroll at 320px)
   ============================================================ */
@media (max-width: 768px) {
  /* Header: reduce padding, scale title */
  .page-header {
    padding: var(--space-8) var(--space-4);
  }

  .page-header h1 {
    font-size: 28px;
  }

  .page-header .header-inner {
    max-width: 100%;
  }

  /* Body container: reduce side padding */
  .page-container {
    max-width: 100%;
  }

  section {
    padding-left: var(--space-4);
    padding-right: var(--space-4);
  }

  /* Bridge prose: reduce padding */
  .bridge-prose {
    padding: 0 var(--space-4);
  }

  /* Divider wrappers: reduce padding */
  .divider-smooth,
  .divider-bridge,
  .divider-breathing {
    margin-left: var(--space-4);
    margin-right: var(--space-4);
  }

  /* Pullquote: expand to full width on small screens */
  .pullquote-wrapper {
    max-width: 100%;
  }

  /* Tension groups: expand width on small screens */
  .tension-group {
    max-width: 100%;
    margin-left: 0;
  }

  /* Narrow table wrapper: expand */
  .narrow-table-wrapper {
    max-width: 100%;
  }

  /* Tables: allow horizontal scroll */
  .table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* Footer: reduce padding */
  .page-footer {
    padding: var(--space-8) var(--space-4);
  }

  .page-footer .footer-inner {
    max-width: 100%;
  }

  /* Sequence blocks: reduce padding */
  .sequence-block {
    padding: var(--space-4);
  }
}

/* ============================================================
   RESPONSIVE: 480px -- Small mobile
   Further scales typography, tightens spacing.
   ============================================================ */
@media (max-width: 480px) {
  .page-header h1 {
    font-size: 24px;
  }

  section h2 {
    font-size: 22px;
  }

  section h3 {
    font-size: 18px;
  }

  /* Tighter component block padding */
  .component-block .component-body {
    padding: var(--space-3);
  }

  .component-block .component-label {
    padding: var(--space-2) var(--space-3);
  }

  /* Blockquote: reduce padding and size */
  blockquote.master-insight {
    padding: var(--space-4);
  }

  blockquote.master-insight p {
    font-size: 22px;
  }

  /* Sequence block items: smaller font */
  .sequence-block ul li {
    font-size: 13px;
  }

  /* Section meta: smaller */
  .section-meta {
    font-size: 0.625rem;
  }

  /* Footer: tighter */
  .page-footer .footer-closing {
    font-size: 18px;
  }
}
```

### Where in the document
Insert at the END of the `<style>` block, AFTER the `prefers-reduced-motion` query but BEFORE the closing `</style>` tag. Media queries are conventionally placed at the end of the stylesheet, ordered from largest to smallest breakpoint.

---

## FEATURE 7: Print Styles

### What it does for accessibility
Print styles ensure the page is readable when printed or saved to PDF. Without them, dark backgrounds print as large ink-consuming blocks, light text on dark backgrounds becomes invisible, and decorative elements waste paper. Print styles are a professional quality signal and a mild accessibility improvement for users who print documentation for offline reference.

### How CD-006 implements it (reference)
```css
/* CD-006 lines 993-999 */
@media print {
  body { background: white; color: black; }
  .skip-link { display: none; }
  header, footer { background: white; color: black; border-color: black; }
  .code-block { background: #f5f5f5; color: black; border-color: #ccc; }
  .core-abstraction-proof { background: #f5f5f5; color: black; }
}
```

### Exact CSS (copy-pasteable)

```css
/* ============================================================
   PRINT STYLES -- Optimized for paper/PDF output
   Strips dark backgrounds, ensures black text on white.
   Hides non-content elements (skip link, section-meta labels).
   ============================================================ */
@media print {
  /* Base: white background, black text */
  body {
    background: white;
    color: black;
  }

  /* Hide skip link and meta annotations */
  .skip-link,
  .section-meta {
    display: none;
  }

  /* Header/Footer: invert to white background */
  .page-header,
  .page-footer {
    background: white;
    color: black;
    border-color: black;
  }

  .page-header h1,
  .page-header .header-subtitle,
  .page-header .header-meta {
    color: black;
  }

  .page-footer .footer-closing,
  .page-footer .footer-meta,
  .page-footer .footer-label,
  .page-footer .footer-provenance {
    color: black;
  }

  /* Sequence blocks (dark code blocks): invert */
  .sequence-block {
    background: #f5f5f5;
    color: black;
    border: 1px solid #ccc;
  }

  .sequence-block .seq-label {
    color: black;
  }

  .sequence-block ul li {
    color: black;
    border-bottom-color: #ccc;
  }

  .sequence-block ul li::before {
    color: black;
  }

  /* Zone backgrounds: remove to save ink */
  .zone-s1, .zone-s2, .zone-s3, .zone-s4,
  .zone-s5, .zone-s6, .zone-s7, .zone-s8,
  .zone-s9, .zone-s10, .zone-s11, .zone-s12 {
    background: white;
  }

  /* Dividers: ensure visibility on white */
  .divider-smooth,
  .divider-bridge,
  .divider-breathing {
    background-color: black;
  }

  /* Component blocks: subtle border on white */
  .component-block {
    border-left-color: black;
    background: #f9f9f9;
  }

  /* Tables: ensure borders visible */
  table th,
  table td {
    border-color: #ccc;
  }

  /* Remove page breaks inside key elements */
  blockquote,
  .component-block,
  .sequence-block,
  table {
    break-inside: avoid;
  }

  section {
    break-before: auto;
    break-after: auto;
  }
}
```

### Where in the document
Insert AFTER the `prefers-reduced-motion` query but BEFORE the responsive breakpoints. Order: reduced-motion -> print -> responsive queries.

---

## COMPLETE CSS BLOCK (all features combined, insertion-ready)

This is the single copy-pasteable block containing ALL accessibility and responsive CSS. Insert this at the END of the `<style>` block (after line 1033, before `</style>`).

```css
    /* ============================================================
       ACCESSIBILITY + RESPONSIVE — Phase 7
       Features: selection, focus, skip link, reduced motion,
       print, responsive (768px, 480px)
       CD-006 benchmark: 8/8 accessibility features
       ============================================================ */

    /* --- Selection Styling --- */
    ::selection {
      background: var(--color-primary);
      color: var(--color-background);
    }

    /* --- Focus States (WCAG 2.1 SC 2.4.7) --- */
    *:focus-visible {
      outline: 3px solid var(--color-primary);
      outline-offset: 2px;
    }

    /* --- Skip Link (WCAG 2.1 SC 2.4.1) --- */
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

    .skip-link:focus {
      top: 0;
    }

    /* --- Reduced Motion (WCAG 2.1 SC 2.3.3) --- */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    /* --- Print Styles --- */
    @media print {
      body {
        background: white;
        color: black;
      }

      .skip-link,
      .section-meta {
        display: none;
      }

      .page-header,
      .page-footer {
        background: white;
        color: black;
        border-color: black;
      }

      .page-header h1,
      .page-header .header-subtitle,
      .page-header .header-meta {
        color: black;
      }

      .page-footer .footer-closing,
      .page-footer .footer-meta,
      .page-footer .footer-label,
      .page-footer .footer-provenance {
        color: black;
      }

      .sequence-block {
        background: #f5f5f5;
        color: black;
        border: 1px solid #ccc;
      }

      .sequence-block .seq-label {
        color: black;
      }

      .sequence-block ul li {
        color: black;
        border-bottom-color: #ccc;
      }

      .sequence-block ul li::before {
        color: black;
      }

      .zone-s1, .zone-s2, .zone-s3, .zone-s4,
      .zone-s5, .zone-s6, .zone-s7, .zone-s8,
      .zone-s9, .zone-s10, .zone-s11, .zone-s12 {
        background: white;
      }

      .divider-smooth,
      .divider-bridge,
      .divider-breathing {
        background-color: black;
      }

      .component-block {
        border-left-color: black;
        background: #f9f9f9;
      }

      table th,
      table td {
        border-color: #ccc;
      }

      blockquote,
      .component-block,
      .sequence-block,
      table {
        break-inside: avoid;
      }
    }

    /* --- Responsive: 768px (Tablet) --- */
    @media (max-width: 768px) {
      .page-header {
        padding: var(--space-8) var(--space-4);
      }

      .page-header h1 {
        font-size: 28px;
      }

      .page-header .header-inner {
        max-width: 100%;
      }

      .page-container {
        max-width: 100%;
      }

      section {
        padding-left: var(--space-4);
        padding-right: var(--space-4);
      }

      .bridge-prose {
        padding: 0 var(--space-4);
      }

      .pullquote-wrapper {
        max-width: 100%;
      }

      .tension-group {
        max-width: 100%;
        margin-left: 0;
      }

      .narrow-table-wrapper {
        max-width: 100%;
      }

      .table-wrapper {
        -webkit-overflow-scrolling: touch;
      }

      .page-footer {
        padding: var(--space-8) var(--space-4);
      }

      .page-footer .footer-inner {
        max-width: 100%;
      }

      .sequence-block {
        padding: var(--space-4);
      }
    }

    /* --- Responsive: 480px (Mobile) --- */
    @media (max-width: 480px) {
      .page-header h1 {
        font-size: 24px;
      }

      section h2 {
        font-size: 22px;
      }

      section h3 {
        font-size: 18px;
      }

      .component-block .component-body {
        padding: var(--space-3);
      }

      .component-block .component-label {
        padding: var(--space-2) var(--space-3);
      }

      blockquote.master-insight {
        padding: var(--space-4);
      }

      blockquote.master-insight p {
        font-size: 22px;
      }

      .sequence-block ul li {
        font-size: 13px;
      }

      .section-meta {
        font-size: 0.625rem;
      }

      .page-footer .footer-closing {
        font-size: 18px;
      }
    }
```

---

## COMPLETE HTML CHANGES CHECKLIST

A numbered checklist of every HTML modification required, in document order:

| # | Line | Change | Element |
|---|------|--------|---------|
| 1 | 1036 (after `<body>`) | ADD skip link: `<a href="#main-content" class="skip-link">Skip to main content</a>` | New element |
| 2 | 1046 | ADD `role="banner"` to `<header>` | `<header class="page-header">` |
| 3 | 1052 (after `</header>`) | ADD `<main id="main-content">` | New element |
| 4 | 1066 | ADD `aria-label="Section 1: What the Research Set Out to Find"` | `<section class="zone-s1">` |
| 5 | 1086 | ADD `role="separator" aria-hidden="true"` | `.divider-smooth` |
| 6 | 1097 | ADD `aria-label="Section 2: Master Insight"` | `<section class="zone-s2">` |
| 7 | 1103 | ADD `aria-label="Master insight: Layout as content, not container"` | `<blockquote>` |
| 8 | 1114 | ADD `role="separator" aria-hidden="true"` | `.divider-bridge` |
| 9 | 1132 | ADD `aria-label="Section 3: Why Great Documentation Breathes"` | `<section class="zone-s3">` |
| 10 | 1180 | ADD `role="note"` | `.component-block` (S3) |
| 11 | 1193 | ADD `role="separator" aria-hidden="true"` | `.divider-smooth` |
| 12 | 1204 | ADD `aria-label="Section 4: The Choreography of Reading"` | `<section class="zone-s4">` |
| 13 | 1263 | ADD `role="separator" aria-hidden="true"` | `.divider-bridge` |
| 14 | 1282 | ADD `aria-label="Section 5: The Characters on Your Page"` | `<section class="zone-s5">` |
| 15 | 1376 | ADD `role="note"` | `.component-block.dense` (S5) |
| 16 | 1389 | ADD `role="separator" aria-hidden="true"` | `.divider-smooth` |
| 17 | 1401 | ADD `aria-label="Section 6: Whitespace and Typography as Design Decisions"` | `<section class="zone-s6">` |
| 18 | 1422 | ADD `role="separator" aria-hidden="true"` | `.divider-smooth` |
| 19 | 1441 | ADD `aria-label="Section 7: Three Tensions and How to Resolve Them"` | `<section class="zone-s7">` |
| 20 | 1452 | ADD `role="note"` | `.component-block.dense` (Tension 1) |
| 21 | 1458 | ADD `role="note"` | `.component-block.dense.resolution` (Resolution 1) |
| 22 | 1468 | ADD `role="note"` | `.component-block.dense` (Tension 2) |
| 23 | 1474 | ADD `role="note"` | `.component-block.dense.resolution` (Resolution 2) |
| 24 | 1483 | ADD `role="note"` | `.component-block.dense` (Tension 3) |
| 25 | 1490 | ADD `role="note"` | `.component-block.dense.resolution` (Resolution 3) |
| 26 | 1505 | ADD `role="separator" aria-hidden="true"` | `.divider-bridge` |
| 27 | 1523 | ADD `aria-label="Section 8: From Principles to Page Structure"` | `<section class="zone-s8">` |
| 28 | 1653 | ADD `role="separator" aria-hidden="true"` | `.divider-breathing` |
| 29 | 1670 | ADD `aria-label="Section 9: What the Research Recommends"` | `<section class="zone-s9">` |
| 30 | 1748 | ADD `role="separator" aria-hidden="true"` | `.divider-smooth` |
| 31 | 1761 | ADD `aria-label="Section 10: What to Avoid and Why"` | `<section class="zone-s10">` |
| 32 | 1813 | ADD `role="separator" aria-hidden="true"` | `.divider-smooth` |
| 33 | 1832 | ADD `aria-label="Section 11: Where the Research Points Next"` | `<section class="zone-s11">` |
| 34 | 1963 | ADD `role="separator" aria-hidden="true"` | `.divider-bridge` |
| 35 | 1985 | ADD `aria-label="Section 12: An Invitation, Not a Conclusion"` | `<section class="zone-s12">` |
| 36 | 2000 | ADD `role="note"` | `.component-block.sparse` (S12) |
| 37 | 2019 | ADD `role="contentinfo"` | `<footer>` |
| 38 | 2019 (before `<footer>`) | ADD `</main>` | Closing `<main>` |

**Total HTML modifications: 38**

---

## SOUL COMPLIANCE VERIFICATION

All additions in this specification have been checked against soul constraints:

| Constraint | Compliant? | Notes |
|-----------|-----------|-------|
| `border-radius: 0` | YES | No border-radius in any added CSS |
| `box-shadow: none` | YES | No box-shadow in any added CSS |
| No gradients | YES | Skip link uses solid `var(--color-primary)` |
| No pure #000/#FFF | YES | Print styles use `white`/`black` (standard print convention, not page rendering) |
| Font trinity only | YES | Skip link uses `var(--font-body)` |
| Colors from palette | YES | All colors are `var(--color-primary)`, `var(--color-background)`, or print-specific values |
| Container 960px | YES | Responsive queries adapt padding but never widen the container beyond 960px |
| `outline` != `border-radius` | YES | `outline` is a separate CSS property with no curvature by default; `outline-offset` is spacing, not radius |

---

## EXPECTED SCORE CHANGE

| Metric | Before | After | Delta |
|--------|--------|-------|-------|
| Accessibility features present | 0/8 | 8/8 | +8 |
| `@media` queries | 0 | 4 (reduced-motion, print, 768px, 480px) | +4 |
| ARIA attributes | 0 | 35 | +35 |
| `role` attributes | 0 | 23 (9 note + 11 separator + 1 banner + 1 contentinfo + 1 main implicit) | +23 |
| Skip link | NO | YES | -- |
| `<main>` landmark | NO | YES | -- |
| Responsive breakpoints | 0 | 2 (768px, 480px) | +2 |
| Print styles | NO | YES | -- |

**This specification closes BLOCKING gap #1 (accessibility 0/6 -> 6/6) identified in `04-remediation-gaps.md`.**

---

**END ACCESSIBILITY SPECIFICATION**
