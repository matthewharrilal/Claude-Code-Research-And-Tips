# Decorative Component Specifications

## Overview
Decorative and brand components based on reference image patterns.

---

## 1. OrnateDivider

**Use**: Section breaks, decorative separators

```css
.ornate-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--space-12) 0;
  gap: var(--space-4);
}

/* Line portions */
.ornate-divider::before,
.ornate-divider::after {
  content: '';
  flex-grow: 1;
  max-width: 100px;
  height: var(--border-width-thin);
  background-color: var(--color-border);
}

/* Center ornament */
.ornate-divider__ornament {
  color: var(--color-text-muted);
  font-size: var(--text-lg);
}

/* Variants */
.ornate-divider--minimal {
  gap: var(--space-2);
}

.ornate-divider--minimal::before,
.ornate-divider--minimal::after {
  max-width: 60px;
}

.ornate-divider--wide::before,
.ornate-divider--wide::after {
  max-width: 200px;
}

/* Symbol options */
.ornate-divider--dots .ornate-divider__ornament::before {
  content: '• • •';
  letter-spacing: var(--tracking-widest);
}

.ornate-divider--diamond .ornate-divider__ornament::before {
  content: '◆';
}

.ornate-divider--star .ornate-divider__ornament::before {
  content: '✦';
}

.ornate-divider--arrows .ornate-divider__ornament::before {
  content: '→ ←';
  letter-spacing: var(--tracking-wide);
}
```

**Reference**: Images 5, 6, 7 (arrow motifs, ornamental dividers)

---

## 2. PatternBadge

**Use**: Complexity levels, category tags, status indicators

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);

  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);

  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;

  white-space: nowrap;
}

/* Primary variant (default) */
.badge--primary {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}

/* Secondary variant */
.badge--secondary {
  background-color: var(--color-secondary);
  color: var(--color-secondary-contrast);
}

/* Outline variant */
.badge--outline {
  background-color: transparent;
  border: var(--border-width-base) solid var(--color-border-strong);
  color: var(--color-text-primary);
}

/* Muted variant */
.badge--muted {
  background-color: var(--color-bg-sunken);
  color: var(--color-text-secondary);
}

/* Semantic variants */
.badge--info {
  background-color: var(--color-info);
  color: white;
}

.badge--success {
  background-color: var(--color-success);
  color: white;
}

.badge--warning {
  background-color: var(--color-warning);
  color: white;
}

.badge--error {
  background-color: var(--color-error);
  color: white;
}

/* Size variants */
.badge--sm {
  padding: var(--space-0-5) var(--space-2);
  font-size: 10px;
}

.badge--lg {
  padding: var(--space-1-5) var(--space-4);
  font-size: var(--text-sm);
}

/* With icon */
.badge__icon {
  width: 12px;
  height: 12px;
}
```

**Reference**: Images 1, 3, 6 (badges, tags)

---

## 3. HeroSection

**Use**: Landing pages, major section intros

```css
.hero {
  position: relative;
  padding: var(--space-16) 0;
  margin-bottom: var(--gap-section);
  overflow: hidden;
}

/* Background options */
.hero--solid {
  background-color: var(--color-bg-inverse);
  color: var(--color-text-inverse);
}

.hero--primary {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}

.hero--gradient {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%);
  color: white;
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: var(--layout-content-max);
  margin: 0 auto;
  text-align: center;
}

.hero__label {
  display: inline-block;
  margin-bottom: var(--space-4);
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-6xl);
  font-weight: var(--font-black);
  line-height: var(--leading-none);
  letter-spacing: var(--tracking-tightest);
  text-transform: uppercase;
  margin-bottom: var(--space-6);
}

.hero__subtitle {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  line-height: var(--leading-relaxed);
  opacity: 0.9;
  max-width: 60ch;
  margin: 0 auto var(--space-8);
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

/* Texture overlay */
.hero--textured::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--texture-halftone-md);
  background-size: var(--texture-halftone-size-md);
  opacity: 0.1;
  pointer-events: none;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: var(--space-12) 0;
  }

  .hero__title {
    font-size: var(--text-4xl);
  }
}
```

**Reference**: Images 2, 4 (massive display type, monumental)

---

## 4. QuoteBlock

**Use**: Important quotes, testimonials, philosophy statements

```css
.quote-block {
  position: relative;
  padding: var(--space-8);
  margin: var(--gap-section) 0;
  text-align: center;
}

/* Decorative quote marks */
.quote-block::before {
  content: '"';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  font-family: var(--font-display-alt);
  font-size: var(--text-6xl);
  line-height: 1;
  color: var(--color-primary);
  opacity: 0.3;
}

.quote-block__text {
  font-family: var(--font-display-alt);
  font-size: var(--text-2xl);
  font-weight: var(--font-normal);
  font-style: italic;
  line-height: var(--leading-relaxed);
  color: var(--color-text-primary);
  max-width: 50ch;
  margin: 0 auto var(--space-4);
}

.quote-block__attribution {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-text-secondary);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

/* Variant: left-aligned */
.quote-block--left {
  text-align: left;
  padding-left: var(--space-12);
}

.quote-block--left::before {
  left: 0;
  transform: none;
}
```

**Reference**: Images 5, 3 (archaic text, philosophical content)

---

## 5. FeatureHighlight

**Use**: Feature grids, capabilities lists

```css
.feature {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
}

.feature__icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
  border-radius: var(--radius-lg);
}

.feature__icon svg {
  width: 24px;
  height: 24px;
}

.feature__title {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin: 0;
}

.feature__description {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Grid layout */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--gap-card-grid-large);
  margin: var(--gap-element) 0;
}

/* Centered variant */
.feature--centered {
  align-items: center;
  text-align: center;
}
```

---

## 6. ContributorBadge

**Use**: Author attribution, team credits

```css
.contributor {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
}

.contributor__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: var(--border-width-base) solid var(--color-border);
}

/* Placeholder if no image */
.contributor__avatar--placeholder {
  background-color: var(--color-bg-sunken);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  color: var(--color-text-muted);
}

.contributor__info {
  display: flex;
  flex-direction: column;
}

.contributor__name {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
}

.contributor__role {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

/* Linked variant */
a.contributor {
  text-decoration: none;
}

a.contributor:hover .contributor__name {
  color: var(--color-primary);
}
```

**Reference**: Image 6 (team cards)

---

## 7. Banner

**Use**: Announcements, alerts, promotions

```css
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);

  width: 100%;
  padding: var(--space-3) var(--space-4);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}

/* Primary banner (red) */
.banner--primary {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}

/* Dark banner */
.banner--dark {
  background-color: var(--color-bg-inverse);
  color: var(--color-text-inverse);
}

.banner__content {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.banner__link {
  color: inherit;
  text-decoration: underline;
}

.banner__link:hover {
  opacity: 0.8;
}

.banner__dismiss {
  background: none;
  border: none;
  color: inherit;
  opacity: 0.7;
  cursor: pointer;
  padding: var(--space-1);
}

.banner__dismiss:hover {
  opacity: 1;
}

/* With arrow motifs (Sanrok style) */
.banner--arrows .banner__content::before {
  content: '→';
  margin-right: var(--space-2);
}

.banner--arrows .banner__content::after {
  content: '←';
  margin-left: var(--space-2);
}
```

**Reference**: Images 6, 7 (full-width banners, arrow motifs)

---

## 8. CountdownBadge

**Use**: Event countdowns, release dates

```css
.countdown {
  display: inline-flex;
  align-items: center;
  gap: var(--space-4);

  padding: var(--space-4) var(--space-6);
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}

.countdown__number {
  font-family: var(--font-display-alt);
  font-size: var(--text-4xl);
  font-weight: var(--font-normal);
  line-height: 1;
}

.countdown__unit {
  font-family: var(--font-display-alt);
  font-size: var(--text-2xl);
  font-weight: var(--font-normal);
  font-style: italic;
}

.countdown__emoji {
  font-size: var(--text-2xl);
}

.countdown__suffix {
  font-family: var(--font-display-alt);
  font-size: var(--text-xl);
  font-style: italic;
}
```

**Reference**: Images 6, 7 ("2 DAYS ツ TO GO")

---

## 9. LevelIndicator

**Use**: Complexity level display (Level 0-7)

```css
.level-indicator {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.level-indicator__dots {
  display: flex;
  gap: var(--space-1);
}

.level-indicator__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background-color: var(--color-border);
}

.level-indicator__dot--active {
  background-color: var(--color-primary);
}

.level-indicator__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-text-secondary);
}

/* Numeric variant */
.level-indicator--numeric .level-indicator__number {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
  border-radius: var(--radius-full);

  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
}
```

---

## 10. IconInline

**Use**: Inline decorative icons (Sanrok-style pencil, knight, etc.)

```css
.icon-inline {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  margin: 0 0.1em;
}

.icon-inline svg {
  width: 100%;
  height: 100%;
}

/* Size variants */
.icon-inline--sm { width: 0.75em; height: 0.75em; }
.icon-inline--lg { width: 1.25em; height: 1.25em; }
.icon-inline--xl { width: 1.5em; height: 1.5em; }
```

**Reference**: Image 7 (pencil icon, knight icon inline with text)

---

## Usage Notes

1. **Ornate Dividers**: Use sparingly between major sections
2. **Badges**: Limit to 2-3 per item to avoid visual clutter
3. **Heroes**: Reserve for landing pages and major section openers
4. **Banners**: Maximum one banner visible at a time
5. **Level Indicators**: Consistent across all pattern documentation
