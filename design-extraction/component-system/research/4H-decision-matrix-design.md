# 4H: Decision Matrix Design Research

## Sub-Agent Mission
Design editorial tables for "When to Use / Don't Use" patterns that feel like magazine content, not spreadsheets.

## Core Research Question
**NOT**: "How do we style a comparison table?"
**IS**: "How do we make a table feel editorial, not like an Excel spreadsheet?"

---

## Research Sources

### Primary References
- [A List Apart: Web Typography - Tables](https://alistapart.com/article/web-typography-tables/) - Typography-first table design
- [Smashing Magazine: Top 10 CSS Table Designs](https://www.smashingmagazine.com/2008/08/top-10-css-table-designs/) - Classic CSS patterns
- [Imperavi: UI Typography - Tables](https://imperavi.com/books/ui-typography/elements/tables/) - Minimalist table philosophy
- [NN/Group: Prioritization Matrices](https://www.nngroup.com/articles/prioritization-matrices/) - Decision matrix UX
- [Google Design Sprint Kit: Decision Matrix](https://designsprintkit.withgoogle.com/methodology/phase4-decide/decision-matrix) - Structured decision making
- [UX Planet: Data Table Best Practices](https://uxplanet.org/best-practices-for-usable-and-efficient-data-table-in-applications-4a1d1fb29550) - Modern UX patterns

### Secondary References
- [Brutalist.style](https://brutalist.style/) - Classless brutalist CSS
- [Tiny Brutalism CSS](https://github.com/pruger/tiny-brutalism-css) - Minimal brutalist framework
- [MDN: Styling Tables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Tables) - Technical CSS reference

---

## Section 1: ENEMY CODE - The Spreadsheet Table

```css
/* ═══════════════════════════════════════════════════════════
   ❌ ENEMY CODE — Spreadsheet Table
   ═══════════════════════════════════════════════════════════

   This is what Bootstrap, Tailwind, and most frameworks produce.
   It signals "data dump" not "curated editorial content."

   Problems:
   1. Borders everywhere = prison cells for your content
   2. Gray header backgrounds = Excel muscle memory
   3. Zebra striping = treating readers like they can't follow a line
   4. Color coding = obvious, unsophisticated signaling
   5. Equal column widths = ignoring content hierarchy

   ═══════════════════════════════════════════════════════════ */

.generic-table {
  width: 100%;                    /* PROBLEM: Forced full-width */
  border-collapse: collapse;
}

.generic-table th,
.generic-table td {
  border: 1px solid #dee2e6;      /* PROBLEM: Borders everywhere = prison */
  padding: 12px;
  text-align: left;
}

.generic-table th {
  background: #f8f9fa;            /* PROBLEM: Gray header = spreadsheet DNA */
  font-weight: 600;
}

/* Zebra striping — the spreadsheet's calling card */
.generic-table tr:nth-child(even) {
  background: #f8f9fa;            /* PROBLEM: Assumes readers can't track rows */
}

/* Traffic light color coding — obvious and unsophisticated */
.positive { color: #28a745; }     /* PROBLEM: Green = good (kindergarten logic) */
.negative { color: #dc3545; }     /* PROBLEM: Red = bad (zero sophistication) */
.neutral { color: #6c757d; }      /* PROBLEM: Gray = meh (lazy signaling) */

/* Hover effects — desktop software vibes */
.generic-table tr:hover {
  background: #e9ecef;            /* PROBLEM: Interactive table expectations */
}
```

### Why This Fails Editorially

| Characteristic | Spreadsheet Pattern | Editorial Problem |
|----------------|---------------------|-------------------|
| **Borders** | All four sides of every cell | Creates visual "prison bars" around content |
| **Background** | Gray headers, zebra rows | Screams "data dump" not "curated content" |
| **Typography** | System fonts, uniform weight | No hierarchy, no personality |
| **Color** | Red/green/gray coding | Obvious, unsophisticated signaling |
| **Width** | Forced 100% | Ignores natural content width |
| **Alignment** | Everything left-aligned | No consideration for data type |

---

## Section 2: The Editorial Philosophy

### Edward Tufte's Principle
> "Minimize furniture, maximize information."

Where Tufte talks about graphics, he means charts, diagrams, and tables. "Ink" means pixels. We should remove almost everything that is not data or white space.

### Jan Tschichold on Table Rules
> "Tables should not be set to look like nets with every number enclosed. Try to do without rules altogether. They should be used only when they are absolutely necessary."
— *Asymmetric Typography*

### A List Apart's Core Insight
> "Tables are there to be read, referenced and used, not merely looked at."

The table exists to serve data comprehension, not to look impressive. Every visual element must earn its place by improving readability.

### The Data-Ink Ratio Applied
```
Data-Ink Ratio = (Data Ink) / (Total Ink Used)

Goal: Approach 1.0 by eliminating:
- Decorative borders
- Background fills
- Zebra striping
- Color coding
- Icons and badges
```

---

## Section 3: Editorial Decision Matrix Design

```css
/* ═══════════════════════════════════════════════════════════
   ✅ EDITORIAL CODE — Decision Matrix
   ═══════════════════════════════════════════════════════════

   Design principles:
   1. Typography creates hierarchy, not decoration
   2. Borders used sparingly, one direction only
   3. White space does the heavy lifting
   4. No zebra stripes, no color coding
   5. Content determines width

   ═══════════════════════════════════════════════════════════ */

.decision-matrix {
  margin: 48px 0;
  border-left: 4px solid var(--color-primary);
  padding-left: 32px;
}

.decision-matrix__label {
  font-family: var(--font-display);
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: var(--text-small);
  color: var(--color-primary);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--color-primary);
}

.decision-matrix__table {
  width: auto;                     /* Let content determine width */
  border-collapse: collapse;
  font-size: var(--text-base);
  line-height: 1.6;
}

.decision-matrix__table th {
  font-family: var(--font-display);
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--text-small);
  letter-spacing: 0.04em;
  text-align: left;
  padding: 16px 24px 12px 0;
  border-bottom: 1px solid var(--color-border);
  vertical-align: bottom;
}

.decision-matrix__table td {
  padding: 20px 24px 20px 0;
  vertical-align: top;
  border-bottom: 1px solid var(--color-border-light);
}

/* Last column gets no right padding */
.decision-matrix__table th:last-child,
.decision-matrix__table td:last-child {
  padding-right: 0;
}

/* Last row gets no bottom border */
.decision-matrix__table tr:last-child td {
  border-bottom: none;
}

/* NO zebra striping */
/* NO color coding */
/* NO hover effects */
/* NO icons or badges */
```

### Key Design Decisions Explained

| Decision | Rationale |
|----------|-----------|
| `width: auto` | Content determines table width, not viewport |
| Left border only | Creates editorial "pull quote" feel |
| Bottom borders only | Horizontal lines guide eye across row |
| No header background | Typography alone creates hierarchy |
| Generous padding | White space improves readability |
| Uppercase small headers | Magazine column header convention |
| No hover states | This is content, not interactive UI |

---

## Section 4: Soul Impact Table

This table documents the transformation from spreadsheet to editorial:

| Aspect | Spreadsheet | Editorial | Soul Impact |
|--------|-------------|-----------|-------------|
| **Borders** | All four sides | Bottom only | Removes "prison cell" feeling |
| **Header** | Gray background | Typography only | Cleaner, more confident |
| **Rows** | Zebra striping | None | Trusts reader intelligence |
| **Color coding** | Red/green/gray | None | More sophisticated |
| **Width** | Forced 100% | Content-driven | Natural, not stretched |
| **Alignment** | Left everywhere | Type-appropriate | Professional precision |
| **Hover** | Row highlight | None | Content, not application |
| **Corners** | Square | Square | Consistent, no decoration |

---

## Section 5: HTML Structure

### Basic Decision Matrix

```html
<!-- Editorial Decision Matrix -->
<div class="decision-matrix">
  <div class="decision-matrix__label">When to Use</div>

  <table class="decision-matrix__table">
    <thead>
      <tr>
        <th>Scenario</th>
        <th>Recommendation</th>
        <th>Rationale</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Single agent, simple task</td>
        <td>Basic Claude session</td>
        <td>Orchestration overhead not justified</td>
      </tr>
      <tr>
        <td>Multi-file refactoring</td>
        <td>Ralph pattern</td>
        <td>Continuous iteration with fresh context</td>
      </tr>
      <tr>
        <td>Long-running project</td>
        <td>External state management</td>
        <td>Context degrades over extended sessions</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Two-Column Use/Don't Use

```html
<!-- Two-Column Decision Matrix -->
<div class="decision-matrix decision-matrix--two-column">
  <div class="decision-matrix__label">Pattern Selection Guide</div>

  <table class="decision-matrix__table">
    <thead>
      <tr>
        <th>Use When</th>
        <th>Don't Use When</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tasks exceed single context window</td>
        <td>Simple, bounded tasks</td>
      </tr>
      <tr>
        <td>Multiple domains need coordination</td>
        <td>Single domain expertise sufficient</td>
      </tr>
      <tr>
        <td>Progress must survive failures</td>
        <td>Failure recovery unimportant</td>
      </tr>
      <tr>
        <td>Audit trail required</td>
        <td>Results-only focus</td>
      </tr>
    </tbody>
  </table>
</div>
```

### With Descriptions

```html
<!-- Decision Matrix with Extended Descriptions -->
<div class="decision-matrix decision-matrix--descriptive">
  <div class="decision-matrix__label">Complexity Level Selection</div>

  <table class="decision-matrix__table">
    <thead>
      <tr>
        <th>Level</th>
        <th>Description</th>
        <th>Best For</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Level 0</strong></td>
        <td>
          Single session, human-in-loop. Direct interaction with Claude
          for bounded tasks that fit within one context window.
        </td>
        <td>Quick questions, code snippets, explanations</td>
      </tr>
      <tr>
        <td><strong>Level 3</strong></td>
        <td>
          External state via CLAUDE.md. Project context persists across
          sessions through explicit documentation.
        </td>
        <td>Multi-day projects, team collaboration</td>
      </tr>
      <tr>
        <td><strong>Level 5</strong></td>
        <td>
          Orchestrated multi-agent with shell loops. Ralph pattern or
          equivalent for continuous autonomous operation.
        </td>
        <td>Large refactors, migration projects</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## Section 6: Design Variations

### Variation A: Minimal (No Left Border)

```css
/* ═══════════════════════════════════════════════════════════
   Variation A: Pure Minimalist
   No border, just typography and space
   ═══════════════════════════════════════════════════════════ */

.decision-matrix--minimal {
  border-left: none;
  padding-left: 0;
}

.decision-matrix--minimal .decision-matrix__label {
  border-bottom: 1px solid var(--color-text);
  color: var(--color-text);
}

.decision-matrix--minimal .decision-matrix__table th {
  border-bottom: 2px solid var(--color-text);
}
```

### Variation B: Compact (Reduced Spacing)

```css
/* ═══════════════════════════════════════════════════════════
   Variation B: Compact
   For inline use within body text
   ═══════════════════════════════════════════════════════════ */

.decision-matrix--compact {
  margin: 24px 0;
  padding-left: 24px;
  border-left-width: 3px;
}

.decision-matrix--compact .decision-matrix__table th {
  padding: 12px 16px 8px 0;
  font-size: calc(var(--text-small) * 0.9);
}

.decision-matrix--compact .decision-matrix__table td {
  padding: 12px 16px 12px 0;
  font-size: var(--text-small);
}
```

### Variation C: Featured (Larger, More Prominent)

```css
/* ═══════════════════════════════════════════════════════════
   Variation C: Featured
   For key decision points, visual prominence
   ═══════════════════════════════════════════════════════════ */

.decision-matrix--featured {
  margin: 64px 0;
  padding: 32px;
  padding-left: 40px;
  border-left-width: 6px;
  background: var(--color-surface);
}

.decision-matrix--featured .decision-matrix__label {
  font-size: var(--text-base);
  margin-bottom: 28px;
}

.decision-matrix--featured .decision-matrix__table {
  font-size: calc(var(--text-base) * 1.05);
}
```

### Variation D: Two-Column Specific

```css
/* ═══════════════════════════════════════════════════════════
   Variation D: Two-Column Use/Don't Use
   Optimized for binary decision display
   ═══════════════════════════════════════════════════════════ */

.decision-matrix--two-column .decision-matrix__table {
  width: 100%;
  table-layout: fixed;
}

.decision-matrix--two-column .decision-matrix__table th,
.decision-matrix--two-column .decision-matrix__table td {
  width: 50%;
}

.decision-matrix--two-column .decision-matrix__table th:first-child {
  color: var(--color-primary);
}

.decision-matrix--two-column .decision-matrix__table th:last-child {
  color: var(--color-text-muted);
}
```

---

## Section 7: Anti-Patterns to Avoid

### Anti-Pattern 1: Zebra Striping

```css
/* ═══════════════════════════════════════════════════════════
   ❌ ANTI-PATTERN: Zebra Striping
   ═══════════════════════════════════════════════════════════

   Why it fails:
   - Assumes readers can't track horizontal lines
   - Creates visual noise that competes with data
   - Highlights arbitrary rows based on position, not importance
   - Screams "spreadsheet" immediately

   The research says:
   "Alternating row backgrounds actually worsen readability by
   drawing attention to striped rows, forcing users to strain
   maintaining focus." — Imperavi UI Typography

   ═══════════════════════════════════════════════════════════ */

/* DON'T DO THIS */
.table tr:nth-child(even) {
  background: #f8f9fa;
}

/* Instead, use adequate row spacing and horizontal borders */
```

### Anti-Pattern 2: Traffic Light Color Coding

```css
/* ═══════════════════════════════════════════════════════════
   ❌ ANTI-PATTERN: Traffic Light Color Coding
   ═══════════════════════════════════════════════════════════

   Why it fails:
   - Kindergarten-level signaling (green = good, red = bad)
   - Accessibility issues (color blindness affects 8% of males)
   - Removes nuance from complex decisions
   - Cheapens editorial voice

   Alternatives:
   - Use language: "Recommended" vs "Not recommended"
   - Use typography weight: bold for emphasis
   - Use position: important items first

   ═══════════════════════════════════════════════════════════ */

/* DON'T DO THIS */
.positive { color: #28a745; }
.negative { color: #dc3545; }
.warning { color: #ffc107; }

/* Instead, let content and position convey meaning */
```

### Anti-Pattern 3: Icon Badges

```css
/* ═══════════════════════════════════════════════════════════
   ❌ ANTI-PATTERN: Icon Badges and Decorative Elements
   ═══════════════════════════════════════════════════════════

   Why it fails:
   - Checkmarks and X marks are patronizing
   - Icons add visual noise without information
   - Creates PowerPoint slide aesthetic
   - Undermines editorial sophistication

   Common offenders:
   - ✓ and ✗ symbols
   - Thumbs up/down icons
   - Star ratings
   - Progress indicators

   ═══════════════════════════════════════════════════════════ */

/* DON'T DO THIS */
.cell-positive::before {
  content: "✓";
  color: green;
  margin-right: 8px;
}

.cell-negative::before {
  content: "✗";
  color: red;
  margin-right: 8px;
}

/* Instead, use clear language without decoration */
```

### Anti-Pattern 4: Full-Width Stretching

```css
/* ═══════════════════════════════════════════════════════════
   ❌ ANTI-PATTERN: Forced Full Width
   ═══════════════════════════════════════════════════════════

   Why it fails:
   - Creates awkward spacing when content is short
   - Ignores natural content hierarchy
   - Makes narrow columns look sparse
   - Destroys the compact, editorial feel

   ═══════════════════════════════════════════════════════════ */

/* DON'T DO THIS */
.table {
  width: 100%;
}

/* Instead, let content determine width */
.table {
  width: auto;
}

/* Or use max-width for constraint without stretching */
.table {
  width: auto;
  max-width: 100%;
}
```

### Anti-Pattern 5: Hover Row Highlighting

```css
/* ═══════════════════════════════════════════════════════════
   ❌ ANTI-PATTERN: Hover Row Highlighting
   ═══════════════════════════════════════════════════════════

   Why it fails:
   - Signals interactivity (click to select/edit)
   - Creates application UI expectations
   - Distracts from reading flow
   - Unnecessary for content tables

   When it IS appropriate:
   - Data tables with row actions
   - Selection interfaces
   - Interactive dashboards

   NOT appropriate for:
   - Editorial content tables
   - Decision matrices
   - Comparison tables
   - Reference documentation

   ═══════════════════════════════════════════════════════════ */

/* DON'T DO THIS for editorial tables */
.table tr:hover {
  background: #e9ecef;
  cursor: pointer;
}

/* Editorial tables have no hover state */
```

---

## Section 8: Typography Deep Dive

### Numeric Alignment

```css
/* ═══════════════════════════════════════════════════════════
   Typography: Numeric Alignment
   ═══════════════════════════════════════════════════════════

   For tables with numbers, use tabular figures to ensure
   digits align vertically for easy comparison.

   ═══════════════════════════════════════════════════════════ */

.decision-matrix__table td.numeric {
  font-variant-numeric: lining-nums tabular-nums;
  text-align: right;
}

/* Column header should match alignment */
.decision-matrix__table th.numeric {
  text-align: right;
}
```

### Text Hierarchy Within Cells

```css
/* ═══════════════════════════════════════════════════════════
   Typography: Cell Text Hierarchy
   ═══════════════════════════════════════════════════════════

   When cells contain multiple elements, use typography
   (not decoration) to create hierarchy.

   ═══════════════════════════════════════════════════════════ */

.decision-matrix__table td strong {
  font-weight: 600;
  display: block;
  margin-bottom: 4px;
}

.decision-matrix__table td small {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  display: block;
  margin-top: 4px;
}

/* Usage in HTML:
<td>
  <strong>Ralph Pattern</strong>
  <small>Continuous shell loop with PROMPT.md</small>
</td>
*/
```

### Monospace for Technical Content

```css
/* ═══════════════════════════════════════════════════════════
   Typography: Monospace for Technical Terms
   ═══════════════════════════════════════════════════════════

   Use monospace for:
   - Command names
   - File names
   - Code snippets
   - Technical identifiers

   ═══════════════════════════════════════════════════════════ */

.decision-matrix__table code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--color-surface);
  padding: 2px 6px;
  border-radius: 3px;
}
```

---

## Section 9: Accessibility Requirements

### Semantic HTML Structure

```html
<!-- Accessible Decision Matrix -->
<figure class="decision-matrix" role="figure" aria-labelledby="matrix-caption">
  <figcaption id="matrix-caption" class="decision-matrix__label">
    When to Use Each Pattern
  </figcaption>

  <table class="decision-matrix__table">
    <caption class="visually-hidden">
      Comparison of orchestration patterns by use case
    </caption>
    <thead>
      <tr>
        <th scope="col">Pattern</th>
        <th scope="col">Best For</th>
        <th scope="col">Avoid When</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Basic Session</th>
        <td>Quick tasks</td>
        <td>Multi-step projects</td>
      </tr>
      <!-- More rows -->
    </tbody>
  </table>
</figure>
```

### CSS for Screen Reader Support

```css
/* ═══════════════════════════════════════════════════════════
   Accessibility: Screen Reader Support
   ═══════════════════════════════════════════════════════════ */

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Ensure sufficient contrast */
.decision-matrix__table th {
  color: var(--color-text);  /* Minimum 4.5:1 contrast ratio */
}

.decision-matrix__table td {
  color: var(--color-text);  /* Minimum 4.5:1 contrast ratio */
}

/* Focus indicators for keyboard navigation */
.decision-matrix__table:focus-within {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
}
```

---

## Section 10: Responsive Behavior

### Mobile Transformation

```css
/* ═══════════════════════════════════════════════════════════
   Responsive: Mobile Table Transformation
   ═══════════════════════════════════════════════════════════

   On mobile, transform table rows into stacked cards.
   This is more readable than horizontal scrolling.

   ═══════════════════════════════════════════════════════════ */

@media (max-width: 640px) {
  .decision-matrix {
    padding-left: 16px;
    border-left-width: 3px;
  }

  .decision-matrix__table,
  .decision-matrix__table thead,
  .decision-matrix__table tbody,
  .decision-matrix__table tr,
  .decision-matrix__table th,
  .decision-matrix__table td {
    display: block;
  }

  .decision-matrix__table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  .decision-matrix__table tr {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-border);
  }

  .decision-matrix__table tr:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .decision-matrix__table td {
    padding: 8px 0;
    border-bottom: none;
  }

  .decision-matrix__table td::before {
    content: attr(data-label);
    display: block;
    font-weight: 600;
    font-size: var(--text-small);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--color-text-muted);
    margin-bottom: 4px;
  }
}
```

### HTML with Data Labels

```html
<!-- Mobile-Ready Decision Matrix -->
<table class="decision-matrix__table">
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Pattern</th>
      <th>Rationale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Scenario">Single task, immediate need</td>
      <td data-label="Pattern">Basic session</td>
      <td data-label="Rationale">Minimal overhead</td>
    </tr>
    <!-- More rows -->
  </tbody>
</table>
```

---

## Section 11: Complete Component Example

```css
/* ═══════════════════════════════════════════════════════════
   COMPLETE: Editorial Decision Matrix Component
   ═══════════════════════════════════════════════════════════

   Copy this entire block for production use.

   ═══════════════════════════════════════════════════════════ */

/* Base Component */
.decision-matrix {
  margin: 48px 0;
  border-left: 4px solid var(--color-primary, #2a7d7d);
  padding-left: 32px;
}

/* Label/Caption */
.decision-matrix__label {
  font-family: var(--font-display, Georgia, serif);
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.875rem;
  color: var(--color-primary, #2a7d7d);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--color-primary, #2a7d7d);
}

/* Table Base */
.decision-matrix__table {
  width: auto;
  border-collapse: collapse;
  font-size: 1rem;
  line-height: 1.6;
}

/* Headers */
.decision-matrix__table th {
  font-family: var(--font-display, Georgia, serif);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-align: left;
  padding: 16px 24px 12px 0;
  border-bottom: 1px solid var(--color-border, #e0d5c5);
  vertical-align: bottom;
  color: var(--color-text, #3d3d3d);
}

/* Cells */
.decision-matrix__table td {
  padding: 20px 24px 20px 0;
  vertical-align: top;
  border-bottom: 1px solid var(--color-border-light, #f0ebe3);
  color: var(--color-text, #3d3d3d);
}

/* Last column alignment */
.decision-matrix__table th:last-child,
.decision-matrix__table td:last-child {
  padding-right: 0;
}

/* Last row */
.decision-matrix__table tr:last-child td {
  border-bottom: none;
}

/* Cell Typography */
.decision-matrix__table td strong {
  font-weight: 600;
}

.decision-matrix__table code {
  font-family: var(--font-mono, 'SF Mono', Monaco, monospace);
  font-size: 0.9em;
  background: var(--color-surface, #f9f6f0);
  padding: 2px 6px;
  border-radius: 3px;
}

/* Numeric Columns */
.decision-matrix__table th.numeric,
.decision-matrix__table td.numeric {
  text-align: right;
  font-variant-numeric: lining-nums tabular-nums;
}

/* Modifier: Minimal */
.decision-matrix--minimal {
  border-left: none;
  padding-left: 0;
}

.decision-matrix--minimal .decision-matrix__label {
  border-bottom-width: 1px;
  color: var(--color-text, #3d3d3d);
}

/* Modifier: Compact */
.decision-matrix--compact {
  margin: 24px 0;
  padding-left: 24px;
  border-left-width: 3px;
}

.decision-matrix--compact .decision-matrix__table th {
  padding: 12px 16px 8px 0;
  font-size: 0.6875rem;
}

.decision-matrix--compact .decision-matrix__table td {
  padding: 12px 16px 12px 0;
  font-size: 0.875rem;
}

/* Modifier: Featured */
.decision-matrix--featured {
  margin: 64px 0;
  padding: 32px;
  padding-left: 40px;
  border-left-width: 6px;
  background: var(--color-surface, #f9f6f0);
}

/* Modifier: Two Column */
.decision-matrix--two-column .decision-matrix__table {
  width: 100%;
  table-layout: fixed;
}

.decision-matrix--two-column th:first-child {
  color: var(--color-primary, #2a7d7d);
}

.decision-matrix--two-column th:last-child {
  color: var(--color-text-muted, #6b6b6b);
}

/* Responsive */
@media (max-width: 640px) {
  .decision-matrix {
    padding-left: 16px;
    border-left-width: 3px;
  }

  .decision-matrix__table,
  .decision-matrix__table thead,
  .decision-matrix__table tbody,
  .decision-matrix__table tr,
  .decision-matrix__table th,
  .decision-matrix__table td {
    display: block;
  }

  .decision-matrix__table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  .decision-matrix__table tr {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-border, #e0d5c5);
  }

  .decision-matrix__table tr:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .decision-matrix__table td {
    padding: 8px 0;
    border-bottom: none;
  }

  .decision-matrix__table td::before {
    content: attr(data-label);
    display: block;
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--color-text-muted, #6b6b6b);
    margin-bottom: 4px;
  }
}
```

---

## Section 12: Verification Checklist

### Design Review

- [ ] No borders on all four sides (bottom-only allowed)
- [ ] No gray header backgrounds
- [ ] No zebra striping
- [ ] No traffic light color coding (red/green)
- [ ] No decorative icons (checkmarks, X marks)
- [ ] No hover row highlighting
- [ ] Width is content-driven, not forced 100%
- [ ] Typography creates hierarchy, not decoration

### Editorial Quality

- [ ] Label uses italic + uppercase + letter-spacing
- [ ] Left border creates "pull quote" feel
- [ ] Headers are small caps or uppercase
- [ ] Cell padding is generous (20px+)
- [ ] Last row has no bottom border
- [ ] Last column has no right padding

### Typography

- [ ] Numeric columns are right-aligned
- [ ] Numeric data uses tabular figures
- [ ] Code elements use monospace
- [ ] Strong elements create emphasis without color
- [ ] Line height is readable (1.6+)

### Accessibility

- [ ] `scope="col"` on column headers
- [ ] `scope="row"` on row headers (if applicable)
- [ ] Caption provided (visible or `.visually-hidden`)
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Works with keyboard navigation
- [ ] Screen reader tested

### Responsive

- [ ] Mobile breakpoint transforms to stacked cards
- [ ] `data-label` attributes on cells
- [ ] No horizontal scrolling required
- [ ] Touch targets adequate (48px minimum)

---

## Section 13: Research Synthesis

### What Makes Print Magazine Tables Different

Magazine tables succeed because they treat tables as **editorial content**, not data interfaces:

1. **Typography First**: Headers use editorial conventions (small caps, italics, letter-spacing) not spreadsheet conventions (bold, gray background)

2. **Minimal Rules**: Horizontal lines only, and sparingly. Vertical lines almost never.

3. **Content-Driven Width**: Tables size to their content, not the page width.

4. **No Interactive Affordances**: No hover states, no cursor changes. This is content to read, not UI to manipulate.

5. **White Space as Separator**: Generous padding replaces borders as the primary row/column separator.

### The Spreadsheet-to-Editorial Transformation

| Before (Spreadsheet) | After (Editorial) |
|---------------------|-------------------|
| Borders define cells | White space defines cells |
| Color signals meaning | Language signals meaning |
| All rows equal | Position implies importance |
| Interactive expectations | Content consumption |
| Data dump aesthetic | Curated information |

### Key Insight

> "Tables are there to be read, referenced and used, not merely looked at."

The editorial table respects reader intelligence. It doesn't highlight every other row because it trusts readers to track horizontal lines. It doesn't color-code because it uses clear language. It doesn't add icons because the content speaks for itself.

---

## Appendix: CSS Custom Properties Reference

```css
/* ═══════════════════════════════════════════════════════════
   CSS Custom Properties for Decision Matrix
   ═══════════════════════════════════════════════════════════ */

:root {
  /* Colors */
  --color-primary: #2a7d7d;
  --color-text: #3d3d3d;
  --color-text-muted: #6b6b6b;
  --color-border: #e0d5c5;
  --color-border-light: #f0ebe3;
  --color-surface: #f9f6f0;

  /* Typography */
  --font-display: Georgia, 'Times New Roman', serif;
  --font-body: system-ui, -apple-system, sans-serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;

  /* Sizes */
  --text-base: 1rem;
  --text-small: 0.875rem;
  --text-xs: 0.75rem;
}
```

---

**Research Complete**: 450+ lines documenting editorial decision matrix design patterns, anti-patterns, variations, accessibility requirements, and responsive behavior.

**Core Transformation**: From spreadsheet (borders + zebra + colors) to editorial (typography + space + position).
