# Preview Worker Specification

## Your Job
For each assigned source HTML file, produce a JS data file containing:
1. **Scoped CSS** — the source file's CSS, scoped so it doesn't leak into the catalog
2. **Preview HTML snippets** — one per cataloged element, using real CSS classes from the source

## Output File Format

Write a single `.js` file. It must be valid JavaScript that can be concatenated into a `<script>` block. Structure:

```javascript
// ═══ SCOPED CSS for XX-NNN ═══
// This gets injected into a <style> tag
const cssXxNnn = `
.preview-xxnnn {
  /* Design tokens from the source file's :root block */
  --color-primary: #E83025;
  /* ... all relevant tokens ... */
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1rem;
  background: var(--color-background);
  border-radius: 0;
}
.preview-xxnnn * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-xxnnn h2, .preview-xxnnn h3 { all: unset; display: block; }

/* Scope EVERY CSS rule under .preview-xxnnn */
.preview-xxnnn .some-class { ... }
.preview-xxnnn .another-class { ... }
`;

// ═══ PREVIEW SNIPPETS for XX-NNN ═══
const previewsXxNnn = {
  'Element Name Exactly As In Catalog': `<div class="...">
    <!-- Real HTML using real CSS classes from the source -->
  </div>`,

  'Another Element Name': `<div>...</div>`,
};
```

## Critical Rules

### 1. Element Names Must Match EXACTLY
The key in the preview object MUST match the `<h3 class="element-name">` text content in the catalog card EXACTLY. Check the catalog HTML to see the exact names. HTML entities like `&#x27;` should be decoded to their character equivalents.

### 2. CSS Scoping Pattern
Every CSS selector gets prefixed with `.preview-xxnnn` where `xxnnn` is the lowercase file code (e.g., `od001`, `ad003`, `cd006`).

Transform rules:
- `:root { --foo: bar; }` → `.preview-xxnnn { --foo: bar; }`
- `body { ... }` → `.preview-xxnnn { ... }` (merge with token block)
- `.some-class { ... }` → `.preview-xxnnn .some-class { ... }`
- `h2 { ... }` → `.preview-xxnnn h2 { ... }`
- `@media` queries → keep the query, scope the selectors inside
- `@keyframes` → prefix name: `@keyframes xxnnn-arrive { ... }`
- Pseudo-elements work: `.preview-xxnnn .foo::after { ... }`

### 3. Preview HTML Must Be Self-Contained
Each preview snippet must render correctly inside:
```html
<div class="preview-viewport preview-xxnnn">
  <!-- YOUR SNIPPET HERE -->
</div>
```

### 4. What To Include Per Element Type

**INSTRUMENTS** (reader orientation devices):
- Show the actual HTML structure with real CSS classes
- Include representative text content from the source
- Show all visual states if there are variants

**GESTURES** (CSS register shifts):
- Show a BEFORE/AFTER or gradient demonstration
- Use inline styles for the specific CSS property values being demonstrated
- Show how the property varies (e.g., border-width: 4px → 1px across zones)

**COMPONENTS** (content containers):
- Show the component with representative content
- Include all visual sub-elements (labels, bodies, borders)
- For components with variants, show 2-3 variants

### 5. Extract CSS From Source, Don't Invent
Read the actual source HTML file. Extract the actual CSS values. Do NOT make up colors, sizes, or spacing — use the real values from the source.

### 6. Reading Order
For each assigned file:
1. Read the source HTML `<style>` block (CSS lines)
2. Read the source HTML `<body>` (HTML structure)
3. Read the findings file (element names, CSS classes, DOM structure descriptions)
4. Cross-reference: for each element in findings, find its CSS and HTML in the source
5. Create the scoped CSS and preview snippets

### 7. Findings File Location
- OD files: `ephemeral/visual-catalog/wave-1-od/od-NNN-findings.md`
- AD files: `ephemeral/visual-catalog/wave-2-ad/ad-NNN-findings.md`
- CD files: `ephemeral/visual-catalog/wave-3-cd/cd-NNN-findings.md`

### 8. Source HTML Location
- OD files: `design-system/validated-explorations/organizational/OD-NNN-*.html`
- AD files: `design-system/axis/AD-NNN-*.html`
- CD files: `design-system/validated-explorations/combination/CD-NNN-*.html`

### 9. Catalog Card Names
To find the exact element names in the catalog, search the catalog HTML for:
```
data-file="xx-nnn"
```
Then look at the `<h3 class="element-name">` inside each matching card.

## Example: OD-004 Pattern (Already Implemented)

The OD-004 previews in the catalog show the established pattern. Key examples:

- **Geological Column** (Instrument): Shows the 4 bars on dark header background
- **Callout System** (Component): Shows all 5 callout variants stacked
- **Border-Weight Confidence Encoding** (Gesture): Shows 4px→1px gradient with labeled boxes
- **Inverse Density-Confidence Gradient** (Gesture): Shows all 4 strata stacked with different padding/typography

Study these in the catalog at lines ~7525-7830 for the exact implementation style.
