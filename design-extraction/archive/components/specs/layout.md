<!--
LIGHT SECTION — Phase 2D
Part Of: archive/components/specs — Pre-audit component specifications
Contributed To: Early component structure thinking; superseded by CHARACTER-FAMILY-COMPLETE.md
Full Context: perceptual-audit-v2/synthesis/
-->

# Layout Component Specifications

## Overview
Page structure and layout components for the documentation site.

---

## 1. DocsLayout

**Use**: Main three-column documentation layout

```css
.docs-layout {
  display: grid;
  grid-template-columns: var(--layout-sidebar-width) 1fr var(--layout-toc-width);
  grid-template-rows: var(--layout-header-height) 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar content toc"
    "sidebar footer toc";

  min-height: 100vh;
  max-width: var(--layout-page-max);
  margin: 0 auto;
}

.docs-layout__header {
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}

.docs-layout__sidebar {
  grid-area: sidebar;
}

.docs-layout__content {
  grid-area: content;
}

.docs-layout__toc {
  grid-area: toc;
}

.docs-layout__footer {
  grid-area: footer;
}

/* Responsive: Hide TOC */
@media (max-width: 1280px) {
  .docs-layout {
    grid-template-columns: var(--layout-sidebar-width) 1fr;
    grid-template-areas:
      "header header"
      "sidebar content"
      "sidebar footer";
  }

  .docs-layout__toc {
    display: none;
  }
}

/* Responsive: Collapse sidebar */
@media (max-width: 1024px) {
  .docs-layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "content"
      "footer";
  }

  .docs-layout__sidebar {
    display: none;
  }

  /* Show mobile nav trigger instead */
  .docs-layout--mobile-nav-open .docs-layout__sidebar {
    display: block;
    position: fixed;
    inset: 0;
    z-index: var(--z-overlay);
    width: 100%;
    max-width: 320px;
  }

  .docs-layout--mobile-nav-open::after {
    content: '';
    position: fixed;
    inset: 0;
    background-color: var(--color-bg-overlay);
    z-index: calc(var(--z-overlay) - 1);
  }
}
```

---

## 2. ContentContainer

**Use**: Main content area wrapper

```css
.content-container {
  max-width: var(--layout-content-max);
  padding: var(--space-8) var(--layout-page-padding);
  margin: 0 auto;
}

/* Full-width variant for heroes, banners */
.content-container--full {
  max-width: none;
  padding-left: 0;
  padding-right: 0;
}

/* Wider variant for tables, code */
.content-container--wide {
  max-width: 900px;
}

/* Responsive */
@media (max-width: 768px) {
  .content-container {
    padding: var(--space-6) var(--layout-page-padding-mobile);
  }
}
```

---

## 3. Header

**Use**: Global site header

```css
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);

  height: var(--layout-header-height);
  padding: 0 var(--layout-page-padding);

  background-color: var(--color-bg-base);
  border-bottom: var(--border-width-thin) solid var(--color-border);
}

/* Left section: Logo + nav */
.header__left {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.header__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
}

.header__logo-mark {
  width: 32px;
  height: 32px;
}

.header__logo-text {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-black);
  letter-spacing: var(--tracking-tight);
  text-transform: uppercase;
  color: var(--color-text-primary);
}

/* Primary nav */
.header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.header__nav-link {
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  text-decoration: none;

  transition: var(--transition-colors);
}

.header__nav-link:hover {
  color: var(--color-text-primary);
  background-color: var(--color-bg-sunken);
}

.header__nav-link--active {
  color: var(--color-text-primary);
}

/* Right section: Search + actions */
.header__right {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.header__search {
  width: 200px;
}

/* Theme toggle */
.header__theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  background: none;
  border: none;
  border-radius: var(--radius-sm);

  color: var(--color-text-secondary);
  cursor: pointer;
  transition: var(--transition-colors);
}

.header__theme-toggle:hover {
  color: var(--color-text-primary);
  background-color: var(--color-bg-sunken);
}

/* Mobile menu trigger */
.header__mobile-menu {
  display: none;
}

@media (max-width: 1024px) {
  .header__nav {
    display: none;
  }

  .header__mobile-menu {
    display: flex;
  }
}

@media (max-width: 768px) {
  .header__search {
    display: none;
  }
}
```

---

## 4. Footer

**Use**: Global site footer

```css
.footer {
  padding: var(--space-12) var(--layout-page-padding);
  border-top: var(--border-width-thin) solid var(--color-border);
  background-color: var(--color-bg-base);
}

.footer__content {
  max-width: var(--layout-page-max);
  margin: 0 auto;
}

/* Multi-column footer */
.footer__grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: var(--space-8);
  margin-bottom: var(--space-8);
}

.footer__brand {
  /* First column - larger */
}

.footer__brand-logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.footer__brand-description {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 30ch;
}

/* Link columns */
.footer__column-title {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.footer__links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__links li {
  margin-bottom: var(--space-2);
}

.footer__links a {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: var(--transition-colors);
}

.footer__links a:hover {
  color: var(--color-text-primary);
}

/* Bottom bar */
.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-6);
  border-top: var(--border-width-thin) solid var(--color-border);
}

.footer__copyright {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.footer__social {
  display: flex;
  gap: var(--space-3);
}

.footer__social-link {
  color: var(--color-text-muted);
  transition: var(--transition-colors);
}

.footer__social-link:hover {
  color: var(--color-text-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
  }

  .footer__brand {
    grid-column: span 2;
  }

  .footer__bottom {
    flex-direction: column;
    gap: var(--space-4);
    text-align: center;
  }
}
```

---

## 5. MobileNav

**Use**: Mobile navigation drawer

```css
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-overlay);

  width: 100%;
  max-width: 320px;
  height: 100vh;

  background-color: var(--color-bg-base);
  border-right: var(--border-width-thin) solid var(--color-border);

  transform: translateX(-100%);
  transition: transform var(--transition-slow);
  overflow-y: auto;
}

.mobile-nav--open {
  transform: translateX(0);
}

/* Backdrop */
.mobile-nav-backdrop {
  position: fixed;
  inset: 0;
  z-index: calc(var(--z-overlay) - 1);

  background-color: var(--color-bg-overlay);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-slow), visibility var(--transition-slow);
}

.mobile-nav-backdrop--visible {
  opacity: 1;
  visibility: visible;
}

/* Header */
.mobile-nav__header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: var(--space-4);
  border-bottom: var(--border-width-thin) solid var(--color-border);
}

.mobile-nav__close {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  background: none;
  border: none;
  border-radius: var(--radius-sm);

  color: var(--color-text-secondary);
  cursor: pointer;
}

.mobile-nav__close:hover {
  background-color: var(--color-bg-sunken);
}

/* Content - use sidebar styles */
.mobile-nav__content {
  padding: var(--space-4);
}

/* Search at top */
.mobile-nav__search {
  margin-bottom: var(--space-4);
}
```

---

## 6. PageWrapper

**Use**: Individual page wrapper within content area

```css
.page {
  min-height: calc(100vh - var(--layout-header-height));
}

.page__header {
  margin-bottom: var(--gap-section);
}

.page__breadcrumbs {
  margin-bottom: var(--space-4);
}

.page__title {
  margin-bottom: var(--space-4);
}

.page__meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;

  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.page__meta-item {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.page__content {
  /* Main prose content */
}

.page__footer {
  margin-top: var(--gap-section);
}
```

---

## 7. Grid

**Use**: Generic responsive grid layouts

```css
.grid {
  display: grid;
  gap: var(--gap-card-grid);
}

/* Auto-fill columns */
.grid--auto {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

/* Fixed columns */
.grid--2 { grid-template-columns: repeat(2, 1fr); }
.grid--3 { grid-template-columns: repeat(3, 1fr); }
.grid--4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive */
@media (max-width: 1024px) {
  .grid--4 { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .grid--3,
  .grid--4 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .grid--2,
  .grid--3,
  .grid--4 { grid-template-columns: 1fr; }
}

/* Gap variants */
.grid--gap-sm { gap: var(--space-3); }
.grid--gap-lg { gap: var(--space-8); }
```

---

## 8. Stack

**Use**: Vertical stacking with consistent spacing

```css
.stack {
  display: flex;
  flex-direction: column;
}

/* Default gap */
.stack { gap: var(--gap-element); }

/* Gap variants */
.stack--xs { gap: var(--space-1); }
.stack--sm { gap: var(--space-2); }
.stack--md { gap: var(--space-4); }
.stack--lg { gap: var(--space-8); }
.stack--xl { gap: var(--space-12); }

/* Section-level gaps */
.stack--section { gap: var(--gap-section); }
```

---

## 9. Cluster

**Use**: Horizontal wrapping with consistent spacing

```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-inline);
  align-items: center;
}

/* Gap variants */
.cluster--xs { gap: var(--space-1); }
.cluster--sm { gap: var(--space-2); }
.cluster--md { gap: var(--space-4); }
.cluster--lg { gap: var(--space-6); }

/* Alignment */
.cluster--start { justify-content: flex-start; }
.cluster--center { justify-content: center; }
.cluster--end { justify-content: flex-end; }
.cluster--between { justify-content: space-between; }
```

---

## 10. Container

**Use**: Centered max-width container

```css
.container {
  width: 100%;
  max-width: var(--layout-page-max);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--layout-page-padding);
  padding-right: var(--layout-page-padding);
}

/* Size variants */
.container--sm { max-width: 640px; }
.container--md { max-width: 768px; }
.container--lg { max-width: 1024px; }
.container--xl { max-width: 1280px; }
.container--content { max-width: var(--layout-content-max); }

/* No padding variant */
.container--flush {
  padding-left: 0;
  padding-right: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding-left: var(--layout-page-padding-mobile);
    padding-right: var(--layout-page-padding-mobile);
  }
}
```

---

## 11. Prose

**Use**: Long-form content wrapper with optimized typography

```css
.prose {
  max-width: 65ch;
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-primary);
}

/* Heading spacing */
.prose h1,
.prose h2,
.prose h3,
.prose h4 {
  margin-top: var(--space-8);
}

.prose h1:first-child,
.prose h2:first-child,
.prose h3:first-child,
.prose h4:first-child {
  margin-top: 0;
}

/* Paragraph spacing */
.prose p {
  margin-bottom: var(--gap-paragraph);
}

/* List spacing */
.prose ul,
.prose ol {
  margin-bottom: var(--gap-paragraph);
}

/* Code in prose */
.prose pre {
  margin: var(--gap-element) 0;
}

/* Links in prose */
.prose a {
  color: var(--color-text-link);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.prose a:hover {
  color: var(--color-text-link-hover);
}

/* Images in prose */
.prose img {
  max-width: 100%;
  height: auto;
  margin: var(--gap-element) 0;
  border-radius: var(--radius-md);
}
```

---

## Usage Notes

1. **DocsLayout**: Primary layout for documentation pages
2. **Responsive Breakpoints**: 1280px (hide TOC), 1024px (hide sidebar), 768px (mobile)
3. **Mobile Nav**: Always trap focus when open
4. **Prose**: Use for markdown-rendered content
5. **Grid/Stack/Cluster**: Composable utility components for layout
