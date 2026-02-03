# Typography Component Specifications

## Overview
All typography components using design tokens for consistent, bold documentation styling.

---

## 1. DisplayHero

**Use**: Page titles, major section intros, landing pages

```css
.display-hero {
  font-family: var(--font-display);
  font-size: var(--text-7xl);           /* 192px default, responsive */
  font-weight: var(--font-black);        /* 900 */
  line-height: var(--leading-none);      /* 1 */
  letter-spacing: var(--tracking-tightest); /* -0.05em */
  text-transform: uppercase;
  color: var(--color-text-primary);
  margin: 0;
}
```

**Responsive**:
- 1024px: `--text-6xl` (128px)
- 768px: `--text-5xl` (80px)
- 480px: `--text-4xl` (64px)

**Reference**: Image 2 (NOUS massive type)

---

## 2. PageTitle (H1)

**Use**: Top-level page headings

```css
h1, .page-title {
  font-family: var(--font-display);
  font-size: var(--text-4xl);            /* 64px */
  font-weight: var(--font-black);        /* 900 */
  line-height: var(--leading-tight);     /* 1.15 */
  letter-spacing: var(--tracking-tight); /* -0.015em */
  text-transform: uppercase;
  color: var(--color-text-primary);
  margin: 0 0 var(--space-4) 0;
}
```

**Reference**: Images 4, 7 (DECENTRALIZE AI, WE ARE SANROK)

---

## 3. SectionTitle (H2)

**Use**: Major content sections, chapter divisions

```css
h2, .section-title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);            /* 48px */
  font-weight: var(--font-bold);         /* 700 */
  line-height: var(--leading-snug);      /* 1.25 */
  letter-spacing: var(--tracking-tight); /* -0.015em */
  text-transform: uppercase;
  color: var(--color-text-primary);
  margin: var(--space-16) 0 var(--space-4) 0;

  /* Anchor link support */
  scroll-margin-top: calc(var(--layout-header-height) + var(--space-4));
}

/* Anchor hover indicator */
h2:hover .anchor-link {
  opacity: 1;
}

.anchor-link {
  opacity: 0;
  margin-left: var(--space-2);
  color: var(--color-text-muted);
  transition: var(--transition-opacity);
}
```

**Reference**: Images 3, 4 (NOUS GENSTRUCT-7B)

---

## 4. SubsectionTitle (H3)

**Use**: Subsections within major sections

```css
h3, .subsection-title {
  font-family: var(--font-body);
  font-size: var(--text-2xl);            /* 32px */
  font-weight: var(--font-semibold);     /* 600 */
  line-height: var(--leading-snug);      /* 1.25 */
  letter-spacing: var(--tracking-normal); /* 0 */
  color: var(--color-text-primary);
  margin: var(--space-8) 0 var(--space-3) 0;
  scroll-margin-top: calc(var(--layout-header-height) + var(--space-4));
}
```

---

## 5. MinorTitle (H4)

**Use**: Minor headings, list titles, card headers

```css
h4, .minor-title {
  font-family: var(--font-body);
  font-size: var(--text-xl);             /* 24px */
  font-weight: var(--font-semibold);     /* 600 */
  line-height: var(--leading-snug);      /* 1.25 */
  letter-spacing: var(--tracking-normal);
  color: var(--color-text-primary);
  margin: var(--space-6) 0 var(--space-2) 0;
}
```

---

## 6. BodyText

**Use**: Default paragraph text, general content

```css
p, .body-text {
  font-family: var(--font-body);
  font-size: var(--text-base);           /* 16px */
  font-weight: var(--font-normal);       /* 400 */
  line-height: var(--leading-relaxed);   /* 1.65 */
  letter-spacing: var(--tracking-normal);
  color: var(--color-text-primary);
  max-width: 65ch;                       /* Optimal reading width */
  margin: 0 0 var(--gap-paragraph) 0;
}

/* Last paragraph in container */
p:last-child {
  margin-bottom: 0;
}
```

**Reference**: Images 3, 6 (editorial body text)

---

## 7. LeadText

**Use**: Intro paragraphs, summaries, featured content

```css
.lead, .lead-text {
  font-family: var(--font-body);
  font-size: var(--text-lg);             /* 18px */
  font-weight: var(--font-normal);       /* 400 */
  line-height: var(--leading-relaxed);   /* 1.65 */
  letter-spacing: var(--tracking-normal);
  color: var(--color-text-secondary);
  max-width: 65ch;
  margin: 0 0 var(--gap-element) 0;
}
```

---

## 8. SmallText

**Use**: Captions, footnotes, secondary information

```css
small, .small-text {
  font-family: var(--font-body);
  font-size: var(--text-sm);             /* 14px */
  font-weight: var(--font-normal);       /* 400 */
  line-height: var(--leading-normal);    /* 1.5 */
  letter-spacing: var(--tracking-normal);
  color: var(--color-text-muted);
}
```

---

## 9. LabelText

**Use**: Navigation labels, category tags, metadata

```css
.label, .label-text {
  font-family: var(--font-body);
  font-size: var(--text-xs);             /* 12px */
  font-weight: var(--font-semibold);     /* 600 */
  line-height: var(--leading-normal);    /* 1.5 */
  letter-spacing: var(--tracking-wider); /* 0.05em */
  text-transform: uppercase;
  color: var(--color-text-muted);
}
```

**Reference**: Images 4, 6 (ACCELERATE TOWARDS, navigation)

---

## 10. CodeInline

**Use**: Inline code references, file names, commands

```css
:not(pre) > code, .code-inline {
  font-family: var(--font-mono);
  font-size: 0.9em;                      /* Relative to parent */
  font-weight: var(--font-normal);       /* 400 */
  line-height: inherit;
  letter-spacing: var(--tracking-normal);
  background-color: var(--color-bg-code-inline);
  color: var(--color-text-primary);
  padding: var(--space-0-5) var(--space-1-5);
  border-radius: var(--radius-sm);
}
```

---

## 11. ElegantText

**Use**: Mixed typography moments, elegant accents (Sanrok-style mixing)

```css
.elegant {
  font-family: var(--font-display-alt);  /* Playfair Display */
  font-weight: var(--font-normal);       /* 400 */
  font-style: italic;
}

/* Size variants */
.elegant-sm { font-size: var(--text-lg); }
.elegant-md { font-size: var(--text-2xl); }
.elegant-lg { font-size: var(--text-3xl); }
.elegant-xl { font-size: var(--text-4xl); }
```

**Reference**: Images 6, 7 (CLIENTS & TEAM, STUDIO)

---

## 12. BlackletterText

**Use**: Decorative headers, special moments (use sparingly)

```css
.blackletter {
  font-family: var(--font-display-decorative); /* UnifrakturMaguntia */
  font-weight: var(--font-normal);
  /* Note: Blackletter fonts typically only have one weight */
}
```

**Reference**: Image 5 (AFO lettering)

---

## 13. MixedHeadline

**Use**: Headlines combining condensed sans + elegant serif

```css
.mixed-headline {
  font-size: var(--text-3xl);
  line-height: var(--leading-snug);
}

.mixed-headline .condensed {
  font-family: var(--font-display);
  font-weight: var(--font-black);
  text-transform: uppercase;
  letter-spacing: var(--tracking-tight);
}

.mixed-headline .elegant {
  font-family: var(--font-display-alt);
  font-weight: var(--font-normal);
  font-style: italic;
  text-transform: none;
  letter-spacing: var(--tracking-normal);
}
```

**Example usage**:
```html
<h2 class="mixed-headline">
  <span class="condensed">GLOBAL</span>
  <span class="elegant">Clients & Team,</span>
  <span class="condensed">BASED IN</span>
  <span class="elegant">Indonesia</span>
</h2>
```

**Reference**: Images 6, 7 (Sanrok headline mixing)

---

## 14. OutlineText

**Use**: Decorative variation, alternating with filled text

```css
.text-outline {
  -webkit-text-stroke: 2px var(--color-primary);
  color: transparent;
}

/* Combined with filled for rhythm */
.text-filled {
  color: var(--color-primary);
}
```

**Reference**: Image 7 (WE ARE outline, SANROK filled)

---

## Usage Notes

1. **Scale Contrast**: Maintain 5:1+ ratio between headlines and body
2. **All Caps**: Use for display/headline levels only, not body text
3. **Letter Spacing**: Tight for large type, normal/wide for small type
4. **Mixed Typography**: Alternate condensed + elegant for visual interest
5. **Max Width**: Always constrain body text to ~65ch for readability
