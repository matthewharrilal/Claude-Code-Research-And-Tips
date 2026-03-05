# BUILD-1: Immerse and Build

You are building a designed HTML page for the article below. This is a single extended session — read deeply, then build boldly. The article is someone's work. Your job is not to decorate it. Your job is to give it the spatial form it deserves — the form that feels inevitable, as if this content could not have been presented any other way.

---

## 1. The Article

**Read the attached `content.md` fully before doing anything else.**

As you read, notice: What is this article really ABOUT — not the topic, but the underlying argument or movement? Where does the argument compress? Where does it breathe? Where does it turn? What surprised you?

---

## 2. Your Spatial Impressions

Before reading any other file, write 3-5 bullet points in your thinking:

- What spatial form does this content suggest to you?
- Which sections demand non-standard treatment — and what kind?
- If you could only make THREE spatial decisions for this page, what would they be?
- Where does the content reference, demonstrate, or mirror its own subject?

These impressions are yours. They will anchor your build. Hold onto them.

---

## 3. Structural Analysis

Now read `_structural-analysis.md`. This is a second opinion from an agent who also read the article deeply.

Where does it align with your impressions? Where does it see something you missed? Where do you disagree? Update your spatial plan if the analysis is compelling, but do not abandon your own reading of the content.

---

## 4. Available Vocabulary

Read the curated research files. These are spatial and textural techniques available to you — not assignments.

- `_curated-structural.md` — Spatial layouts, grid patterns, content-form techniques with CSS examples
- `_curated-textural.md` — Border treatments, spacing rhythms, typographic variation, color semantics with specific CSS values
- `tokens.css` — Design system custom properties (colors, spacing, typography)
- `components.css` — Locked component implementations (callouts, code blocks, tables, headers, footers)

Use what the content demands. Ignore what it does not. These files are your palette, not your instructions.

**Frontier techniques** are available if the content warrants them:
- Container queries — components that render differently based on container width
- Scroll-driven animations — layout that evolves with scroll position
- Subgrid — nested elements aligning to parent grid tracks
- `clip-path` — non-rectangular boundaries encoding content meaning

These are for the moment you discover a section that needs something no standard layout provides. Do not force them. Do not avoid them.

---

## 5. Absolutes

These are physics, not style. Violating any invalidates the build.

```css
* { border-radius: 0; box-shadow: none; }
/* No gradients: linear-gradient() and radial-gradient() are forbidden */
/* No semi-transparent backgrounds: rgba() with alpha < 1 is forbidden */
/* No 2px borders. Use 1px or 3px+ */
```

```css
.page-container { max-width: 960px; /* 940-960px range */ }
```

Responsive: the page must work at 1440px and 768px. Every non-vertical layout needs a `@media (max-width: 768px)` block. Verify as you build.

Accessibility: skip link to main content, ARIA landmark roles (`banner`, `main`, `contentinfo`).

Fonts: load via Google Fonts (`Instrument Serif`, `Inter`, `JetBrains Mono`).

---

## 6. Texture Floor

Your page must have at minimum:
- 3 distinct zone backgrounds (neighboring zones differ by >= 15 RGB points)
- 2 meaningful border treatments (not decorative — encoding hierarchy, grouping, or emphasis)
- 2 hover or transition states (revealing depth, connection, or state change)

These are floors, not targets. They prevent blind spots, not limit ambition.

---

## 7. Build

Start with the section you feel strongest about — the one where your spatial impression is clearest. Build zone by zone.

**Naming:** Name grid areas after content meaning, not position. Name classes after function, not appearance. Name custom properties after your metaphor, not generic labels.

```css
/* YES: names encode content meaning */
.convergence-funnel { ... }
grid-template-areas: "old-paradigm new-paradigm";
--depth-bedrock: var(--color-surface-dark);

/* NO: names encode position or appearance */
.main-section { ... }
grid-template-areas: "left right";
--bg-dark: var(--color-surface-dark);
```

**All CSS values** come from `tokens.css` custom properties. Your names encode the metaphor; the values come from the design system.

Build the complete page as a single self-contained HTML file with all CSS in a `<style>` block. Include the HTML boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <title><!-- content title --></title>
  <style>/* ALL CSS HERE */</style>
</head>
<body>
  <a href="#main" class="skip-link">Skip to content</a>
  <!-- content here -->
</body>
</html>
```

---

## 8. Reflection

After building, write `_build-1-reflection.md` answering these three questions honestly:

1. What spatial decisions surprised you — choices that emerged from building rather than from planning?
2. Where did you deviate from the structural analysis, and why?
3. What would you deepen with 30 more minutes?

---

## Outputs

1. `_build-pass-1.html` — The complete self-contained page
2. `_build-1-reflection.md` — Your honest answers to the three reflection questions
