# Navigation Component Specifications

## Overview
Navigation components for documentation site structure, using design tokens.

---

## 1. Sidebar

**Use**: Primary navigation container, left column

```css
.sidebar {
  width: var(--layout-sidebar-width);    /* 260px */
  min-width: var(--layout-sidebar-min);  /* 200px */
  max-width: var(--layout-sidebar-max);  /* 320px */
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;

  background-color: var(--color-bg-base);
  border-right: var(--border-width-thin) solid var(--color-border-subtle);

  padding: var(--space-6);
  overflow-y: auto;
  overflow-x: hidden;

  /* Smooth scrolling */
  scroll-behavior: smooth;
  scrollbar-width: thin;
}

/* Collapsed state */
.sidebar--collapsed {
  width: var(--layout-sidebar-collapsed); /* 60px */
  padding: var(--space-3);
}

.sidebar--collapsed .sidebar__section-title,
.sidebar--collapsed .sidebar__item-text {
  display: none;
}
```

---

## 2. SidebarSection

**Use**: Grouped navigation items with collapsible header

```css
.sidebar__section {
  margin-bottom: var(--space-6);
}

.sidebar__section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: var(--padding-nav-section);
  margin-bottom: var(--space-2);
  border-radius: var(--radius-sm);
  transition: var(--transition-colors);
}

.sidebar__section-header:hover {
  background-color: var(--color-bg-sunken);
}

/* Collapse indicator */
.sidebar__section-chevron {
  width: 16px;
  height: 16px;
  color: var(--color-text-muted);
  transition: transform var(--transition-base);
}

.sidebar__section--collapsed .sidebar__section-chevron {
  transform: rotate(-90deg);
}

.sidebar__section--collapsed .sidebar__section-items {
  display: none;
}

/* Animation for collapse */
.sidebar__section-items {
  overflow: hidden;
  transition: max-height var(--transition-slow);
}
```

---

## 3. SidebarSectionTitle

**Use**: Section header text

```css
.sidebar__section-title {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin: 0;
}
```

---

## 4. SidebarItem

**Use**: Individual navigation links

```css
.sidebar__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--padding-nav-item);       /* space-2 space-3 */
  border-radius: var(--radius-sm);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  color: var(--color-text-secondary);

  text-decoration: none;
  transition: var(--transition-all);

  /* Default left border (invisible) */
  border-left: var(--border-width-thick) solid transparent;
}

.sidebar__item:hover {
  background-color: var(--color-bg-elevated);
  color: var(--color-text-primary);
  text-decoration: none;
}

/* Active state */
.sidebar__item--active {
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
  background-color: var(--color-bg-elevated);
  border-left-color: var(--color-primary);
}

/* Icon within item */
.sidebar__item-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-text-muted);
}

.sidebar__item--active .sidebar__item-icon {
  color: var(--color-primary);
}
```

---

## 5. SidebarItemNested

**Use**: Child items under a parent

```css
.sidebar__item--nested {
  padding-left: calc(var(--space-3) + var(--space-4)); /* Increased indent */
  font-size: var(--text-sm);
}

.sidebar__item--nested-2 {
  padding-left: calc(var(--space-3) + var(--space-8)); /* Double indent */
}
```

---

## 6. SearchTrigger

**Use**: Search bar / trigger in sidebar or header

```css
.search-trigger {
  display: flex;
  align-items: center;
  gap: var(--space-3);

  width: 100%;
  height: 40px;
  padding: 0 var(--space-3);

  background-color: var(--color-bg-elevated);
  border: var(--border-width-thin) solid var(--color-border);
  border-radius: var(--radius-base);

  cursor: pointer;
  transition: var(--transition-all);
}

.search-trigger:hover {
  border-color: var(--color-border-strong);
}

.search-trigger:focus-visible {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: var(--shadow-focus-sm);
}

.search-trigger__icon {
  width: 16px;
  height: 16px;
  color: var(--color-text-muted);
  flex-shrink: 0;
}

.search-trigger__text {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  flex-grow: 1;
  text-align: left;
}

.search-trigger__shortcut {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);

  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);

  background-color: var(--color-bg-sunken);
  padding: var(--space-0-5) var(--space-1-5);
  border-radius: var(--radius-sm);
  border: var(--border-width-thin) solid var(--color-border);
}
```

---

## 7. SearchModal

**Use**: Full search interface overlay

```css
.search-modal {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 15vh;

  background-color: var(--color-bg-overlay);
  backdrop-filter: var(--backdrop-blur-base);
}

.search-modal__container {
  width: 100%;
  max-width: 600px;
  max-height: 70vh;

  background-color: var(--color-bg-base);
  border: var(--border-width-thin) solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xl);

  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.search-modal__input-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  border-bottom: var(--border-width-thin) solid var(--color-border);
}

.search-modal__input {
  flex-grow: 1;
  border: none;
  outline: none;
  background: transparent;

  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text-primary);
}

.search-modal__input::placeholder {
  color: var(--color-text-muted);
}

.search-modal__results {
  flex-grow: 1;
  overflow-y: auto;
  padding: var(--space-2);
}

.search-modal__result {
  padding: var(--space-3);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition-colors);
}

.search-modal__result:hover,
.search-modal__result--selected {
  background-color: var(--color-bg-elevated);
}

.search-modal__result-title {
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
}

.search-modal__result-path {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.search-modal__no-results {
  padding: var(--space-8);
  text-align: center;
  color: var(--color-text-muted);
}

.search-modal__footer {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-4);
  border-top: var(--border-width-thin) solid var(--color-border);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}
```

---

## 8. Breadcrumbs

**Use**: Location indicator above page title

```css
.breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-1);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-muted);

  margin-bottom: var(--space-4);
}

.breadcrumbs__item {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: var(--transition-colors);
}

.breadcrumbs__item:hover {
  color: var(--color-text-primary);
  text-decoration: underline;
}

.breadcrumbs__separator {
  color: var(--color-text-disabled);
  user-select: none;
}

.breadcrumbs__current {
  color: var(--color-text-primary);
  font-weight: var(--font-medium);
}
```

---

## 9. TableOfContents

**Use**: Right sidebar, page section navigation

```css
.toc {
  width: var(--layout-toc-width);        /* 220px */
  position: sticky;
  top: calc(var(--layout-header-height) + var(--space-6));
  max-height: calc(100vh - var(--layout-header-height) - var(--space-12));
  overflow-y: auto;

  padding: var(--space-4);
}

.toc__header {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);

  margin-bottom: var(--space-3);
}

.toc__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.toc__item {
  margin-bottom: var(--space-1);
}

.toc__link {
  display: block;
  padding: var(--space-1) var(--space-2);
  border-left: var(--border-width-base) solid transparent;

  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  text-decoration: none;

  transition: var(--transition-all);
}

.toc__link:hover {
  color: var(--color-text-primary);
}

/* Active section indicator */
.toc__link--active {
  color: var(--color-text-primary);
  border-left-color: var(--color-primary);
  font-weight: var(--font-medium);
}

/* Nested items (H3) */
.toc__item--nested .toc__link {
  padding-left: var(--space-4);
  font-size: var(--text-xs);
}
```

---

## 10. Pagination

**Use**: Previous/Next page navigation at bottom

```css
.pagination {
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);

  margin-top: var(--gap-section);
  padding-top: var(--gap-element);
  border-top: var(--border-width-thin) solid var(--color-border);
}

.pagination__link {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);

  padding: var(--space-4);
  max-width: 50%;

  background-color: var(--color-bg-elevated);
  border: var(--border-width-thin) solid var(--color-border);
  border-radius: var(--radius-md);

  text-decoration: none;
  transition: var(--transition-all);
}

.pagination__link:hover {
  border-color: var(--color-primary);
}

.pagination__link--prev {
  align-items: flex-start;
}

.pagination__link--next {
  align-items: flex-end;
  margin-left: auto;
}

.pagination__label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.pagination__title {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
}

/* Arrow indicators */
.pagination__arrow {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.pagination__link--prev .pagination__arrow::before {
  content: '←';
}

.pagination__link--next .pagination__arrow::after {
  content: '→';
}
```

**Reference**: Images 6, 7 (arrow motifs → ←)

---

## Usage Notes

1. **Sticky Positioning**: Sidebar and TOC use `position: sticky`
2. **Collapse States**: Sidebar sections should animate on collapse
3. **Active Indicators**: Use left border accent for active states
4. **Keyboard Navigation**: Support arrow keys in search modal
5. **Scroll Behavior**: Smooth scrolling for TOC clicks
