<!--
LIGHT SECTION — Phase 2D
Part Of: archive/components/specs — Pre-audit component specifications
Contributed To: Early component structure thinking; superseded by CHARACTER-FAMILY-COMPLETE.md
Full Context: perceptual-audit-v2/synthesis/
-->

# Content Block Component Specifications

## Overview
Content components for documentation: code blocks, callouts, cards, tables, tabs, etc.

---

## 1. CodeBlock

**Use**: Multi-line code examples

```css
.code-block {
  position: relative;
  background-color: var(--color-bg-code);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin: var(--gap-element) 0;
}

.code-block__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-4);
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom: var(--border-width-thin) solid rgba(255, 255, 255, 0.1);
}

.code-block__filename {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-inverse-muted);
}

.code-block__language {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-inverse-muted);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}

.code-block__content {
  padding: var(--padding-code-block);
  overflow-x: auto;
}

.code-block__content pre {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--color-text-code);
}

.code-block__content code {
  background: none;
  padding: 0;
  border-radius: 0;
}

/* Copy button */
.code-block__copy {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  background-color: rgba(255, 255, 255, 0.1);
  border: var(--border-width-thin) solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-sm);

  color: var(--color-text-inverse-muted);
  cursor: pointer;
  opacity: 0;
  transition: var(--transition-all);
}

.code-block:hover .code-block__copy {
  opacity: 1;
}

.code-block__copy:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: var(--color-text-inverse);
}

.code-block__copy--copied {
  color: var(--color-success);
}

/* Line numbers */
.code-block--line-numbers .code-block__content {
  display: flex;
}

.code-block__line-numbers {
  flex-shrink: 0;
  padding-right: var(--space-4);
  margin-right: var(--space-4);
  border-right: var(--border-width-thin) solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-inverse-muted);
  text-align: right;
  user-select: none;
}

/* Highlighted lines */
.code-block__line--highlighted {
  background-color: rgba(230, 57, 70, 0.2);
  margin: 0 calc(-1 * var(--space-4));
  padding: 0 var(--space-4);
  display: block;
}
```

**Reference**: Images 2, 3 (high contrast, monospace)

---

## 2. Callout

**Use**: Notes, warnings, tips, errors

```css
.callout {
  display: flex;
  gap: var(--space-3);

  padding: var(--padding-callout);
  border-radius: var(--radius-md);
  border-left: var(--border-width-heavy) solid;

  margin: var(--gap-element) 0;
}

.callout__icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 2px; /* Align with first line of text */
}

.callout__content {
  flex-grow: 1;
  min-width: 0;
}

.callout__title {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin: 0 0 var(--space-2) 0;
}

.callout__body {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}

.callout__body p:last-child {
  margin-bottom: 0;
}

/* Variants */
.callout--info {
  background-color: var(--color-info-subtle);
  border-color: var(--color-info);
}

.callout--info .callout__icon,
.callout--info .callout__title {
  color: var(--color-info-text);
}

.callout--warning {
  background-color: var(--color-warning-subtle);
  border-color: var(--color-warning);
}

.callout--warning .callout__icon,
.callout--warning .callout__title {
  color: var(--color-warning-text);
}

.callout--error {
  background-color: var(--color-error-subtle);
  border-color: var(--color-error);
}

.callout--error .callout__icon,
.callout--error .callout__title {
  color: var(--color-error-text);
}

.callout--success {
  background-color: var(--color-success-subtle);
  border-color: var(--color-success);
}

.callout--success .callout__icon,
.callout--success .callout__title {
  color: var(--color-success-text);
}

/* Tip variant - using primary color */
.callout--tip {
  background-color: rgba(230, 57, 70, 0.08);
  border-color: var(--color-primary);
}

.callout--tip .callout__icon,
.callout--tip .callout__title {
  color: var(--color-primary);
}
```

---

## 3. Card

**Use**: Linked content previews, feature highlights

```css
.card {
  background-color: var(--color-bg-elevated);
  border: var(--border-width-thin) solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--padding-card-md);

  transition: var(--transition-all);
}

.card:hover {
  border-color: var(--color-border-strong);
}
```

---

## 4. LinkCard

**Use**: Clickable card linking to another page

```css
.link-card {
  display: block;
  text-decoration: none;
  color: inherit;

  background-color: var(--color-bg-elevated);
  border: var(--border-width-thin) solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--padding-card-md);

  transition: var(--transition-all);
}

.link-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.link-card__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);

  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);

  margin-bottom: var(--space-2);
}

.link-card__arrow {
  color: var(--color-text-muted);
  transition: var(--transition-transform);
}

.link-card:hover .link-card__arrow {
  color: var(--color-primary);
  transform: translateX(4px);
}

.link-card__description {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}
```

---

## 5. CardGrid

**Use**: Grid of cards

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--gap-card-grid);
  margin: var(--gap-element) 0;
}

/* Two-column variant */
.card-grid--2 {
  grid-template-columns: repeat(2, 1fr);
}

/* Three-column variant */
.card-grid--3 {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  .card-grid--2,
  .card-grid--3 {
    grid-template-columns: 1fr;
  }
}
```

---

## 6. Table

**Use**: Data tables, API parameters, comparisons

```css
.table-wrapper {
  overflow-x: auto;
  margin: var(--gap-element) 0;
  border: var(--border-width-thin) solid var(--color-border);
  border-radius: var(--radius-md);
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body);
  font-size: var(--text-sm);
}

.table th {
  background-color: var(--color-bg-sunken);
  font-weight: var(--font-semibold);
  text-align: left;
  padding: var(--padding-table-header);
  border-bottom: var(--border-width-base) solid var(--color-border);
}

.table td {
  padding: var(--padding-table-cell);
  border-bottom: var(--border-width-thin) solid var(--color-border);
  vertical-align: top;
}

.table tr:last-child td {
  border-bottom: none;
}

.table tr:hover td {
  background-color: var(--color-bg-elevated);
}

/* Striped variant */
.table--striped tbody tr:nth-child(even) td {
  background-color: var(--color-bg-sunken);
}

/* Compact variant */
.table--compact th,
.table--compact td {
  padding: var(--space-2) var(--space-3);
}
```

---

## 7. List

**Use**: Ordered and unordered lists

```css
.list, ul, ol {
  margin: var(--gap-paragraph) 0;
  padding-left: var(--space-6);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

.list li, ul li, ol li {
  margin-bottom: var(--gap-list);
}

.list li:last-child,
ul li:last-child,
ol li:last-child {
  margin-bottom: 0;
}

/* Custom bullet styling */
ul {
  list-style-type: disc;
}

ul ul {
  list-style-type: circle;
}

ul ul ul {
  list-style-type: square;
}

/* Nested list indentation */
.list .list,
ul ul, ul ol, ol ul, ol ol {
  margin-top: var(--gap-list);
  margin-bottom: 0;
}
```

---

## 8. Blockquote

**Use**: Quoted content, emphasis

```css
blockquote, .blockquote {
  margin: var(--gap-element) 0;
  padding-left: var(--space-4);
  border-left: var(--border-width-thick) solid var(--color-border-strong);

  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

blockquote p:last-child {
  margin-bottom: 0;
}

/* Citation */
.blockquote__cite {
  display: block;
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  font-style: normal;
  color: var(--color-text-muted);
}

.blockquote__cite::before {
  content: '— ';
}
```

---

## 9. Divider

**Use**: Section breaks, visual separation

```css
hr, .divider {
  height: var(--border-width-thin);
  background-color: var(--color-border);
  border: none;
  margin: var(--space-8) 0;
}

/* Decorative variant */
.divider--decorative {
  height: auto;
  background: none;
  text-align: center;
}

.divider--decorative::before {
  content: '• • •';
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-widest);
}
```

---

## 10. Image

**Use**: Content images with optional caption

```css
.figure {
  margin: var(--gap-element) 0;
}

.figure__image {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  border: var(--border-width-thin) solid var(--color-border);
}

.figure__caption {
  margin-top: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  text-align: center;
}
```

---

## 11. Tabs

**Use**: Tabbed content panels

```css
.tabs {
  margin: var(--gap-element) 0;
}

.tabs__list {
  display: flex;
  gap: 0;
  border-bottom: var(--border-width-thin) solid var(--color-border);
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}

.tabs__trigger {
  padding: var(--space-2) var(--space-4);
  border: none;
  border-bottom: var(--border-width-base) solid transparent;
  background: none;
  margin-bottom: -1px;

  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);

  cursor: pointer;
  transition: var(--transition-colors);
}

.tabs__trigger:hover {
  color: var(--color-text-primary);
}

.tabs__trigger--active {
  color: var(--color-text-primary);
  border-bottom-color: var(--color-primary);
}

.tabs__panel {
  padding: var(--space-4) 0;
  display: none;
}

.tabs__panel--active {
  display: block;
}
```

---

## 12. Accordion

**Use**: Expandable content sections

```css
.accordion {
  margin: var(--gap-element) 0;
  border: var(--border-width-thin) solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.accordion__item {
  border-bottom: var(--border-width-thin) solid var(--color-border);
}

.accordion__item:last-child {
  border-bottom: none;
}

.accordion__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-4);
  border: none;
  background-color: var(--color-bg-elevated);

  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  text-align: left;

  cursor: pointer;
  transition: var(--transition-colors);
}

.accordion__trigger:hover {
  background-color: var(--color-bg-sunken);
}

.accordion__chevron {
  width: 16px;
  height: 16px;
  color: var(--color-text-muted);
  transition: transform var(--transition-base);
}

.accordion__item--open .accordion__chevron {
  transform: rotate(180deg);
}

.accordion__content {
  padding: 0 var(--space-4) var(--space-4);
  background-color: var(--color-bg-elevated);
}
```

---

## 13. Steps

**Use**: Sequential instructions, tutorials

```css
.steps {
  margin: var(--gap-element) 0;
  padding-left: 0;
  list-style: none;
  counter-reset: step-counter;
}

.steps__item {
  display: flex;
  gap: var(--space-4);
  position: relative;
  padding-bottom: var(--space-6);
}

.steps__item:last-child {
  padding-bottom: 0;
}

/* Connector line */
.steps__item:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 15px; /* Center of badge */
  top: 32px;
  bottom: 0;
  width: var(--border-width-base);
  background-color: var(--color-border);
}

.steps__badge {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
  border-radius: var(--radius-full);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);

  counter-increment: step-counter;
}

.steps__badge::before {
  content: counter(step-counter);
}

.steps__content {
  flex-grow: 1;
  padding-top: var(--space-1);
}

.steps__title {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.steps__body {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}
```

---

## 14. ParameterTable

**Use**: API/function parameter documentation

```css
.param-table {
  margin: var(--gap-element) 0;
}

.param-table__row {
  padding: var(--space-4) 0;
  border-bottom: var(--border-width-thin) solid var(--color-border);
}

.param-table__row:first-child {
  padding-top: 0;
}

.param-table__header {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
}

.param-table__name {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
}

.param-table__type {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-accent);
}

.param-table__required {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-error);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}

.param-table__optional {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.param-table__description {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}
```

---

## 15. KeyboardShortcut

**Use**: Displaying keyboard shortcuts inline

```css
.kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 var(--space-2);

  background-color: var(--color-bg-elevated);
  border: var(--border-width-thin) solid var(--color-border);
  border-radius: var(--radius-sm);
  box-shadow: inset 0 -1px 0 var(--color-border);

  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
}

.kbd + .kbd {
  margin-left: var(--space-1);
}

/* Separator between keys */
.kbd-combo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
}

.kbd-combo__separator {
  color: var(--color-text-muted);
  font-size: var(--text-xs);
}
```

---

## Usage Notes

1. **Code Blocks**: Always include language identifier and copy button
2. **Callouts**: Use appropriate variant for semantic meaning
3. **Cards**: Keep content concise; link cards should have clear titles
4. **Tables**: Use wrapper for horizontal scroll on mobile
5. **Steps**: Always use numbered steps for sequential processes
