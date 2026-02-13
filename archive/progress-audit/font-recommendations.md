# Font Recommendations for Bold Editorial Design System

**Sub-Agent 0G: Font Sourcing Report**
**Date:** 2026-02-02

---

## Reference Image Analysis

Based on the reference images provided:

1. **Blue/White Image:** Blackletter/Gothic display type with classical authority, dramatic contrast
2. **Sanrok Image:** Bold condensed sans-serif with mixed serif accents, RED color accent, brutalist energy
3. **Nous Image:** Ultra-condensed bold sans-serif, dramatic, brutalist, high-impact

**Key Visual Characteristics:**
- Ultra-bold weights (700-900)
- High contrast (thick/thin strokes)
- Condensed proportions
- Editorial authority
- Museum/fashion magazine aesthetics

---

## Final Recommendations

### 1. Display Font (H1, Hero) - PRIMARY

| Recommendation | Backup Option |
|----------------|---------------|
| **Barlow Condensed Black** | **Anton** |

#### Barlow Condensed Black (RECOMMENDED)

| Attribute | Value |
|-----------|-------|
| **Name** | Barlow Condensed |
| **Google Fonts** | YES - [fonts.google.com/specimen/Barlow+Condensed](https://fonts.google.com/specimen/Barlow+Condensed) |
| **Variable Font** | No (but 18 static styles available) |
| **Weight Range** | 100-900 (Thin to Black) |
| **License** | SIL Open Font License 1.1 |
| **Reference Match** | 85% - Matches Sanrok/Nous brutalist condensed aesthetic |

**Why Barlow Condensed Black:**
- Full weight range including Black (900)
- Slightly rounded grotesk character adds modern warmth
- Condensed proportions maximize impact
- 18 styles (9 weights + italics) provide flexibility
- Free for commercial use

```html
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap" rel="stylesheet">
```

```css
.display-primary {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}
```

#### Anton (BACKUP)

| Attribute | Value |
|-----------|-------|
| **Name** | Anton |
| **Google Fonts** | YES - [fonts.google.com/specimen/Anton](https://fonts.google.com/specimen/Anton) |
| **Variable Font** | No |
| **Weight Range** | 400 only (appears bold by default) |
| **License** | SIL Open Font License 1.1 |
| **Reference Match** | 90% - Ultra-condensed, maximum impact |

**Why Anton as backup:**
- Single weight but visually VERY bold
- Ultra-condensed for maximum headline impact
- Excellent for short headlines where weight variation isn't needed
- Popular in Vogue-style editorial designs

---

### 2. Display Secondary (H2, Callouts)

| Recommendation | Backup Option |
|----------------|---------------|
| **Libre Franklin Black** | **Oswald Bold** |

#### Libre Franklin Black (RECOMMENDED)

| Attribute | Value |
|-----------|-------|
| **Name** | Libre Franklin |
| **Google Fonts** | YES - [fonts.google.com/specimen/Libre+Franklin](https://fonts.google.com/specimen/Libre+Franklin) |
| **Variable Font** | YES (axes: weight) |
| **Weight Range** | 100-900 (Thin to Black) |
| **License** | SIL Open Font License 1.1 |
| **Reference Match** | 80% - Classic gothic authority, museum/institutional feel |

**Why Libre Franklin Black:**
- Based on Morris Fuller Benton's 1912 Franklin Gothic (same lineage as Glamour magazine's custom font)
- Full weight range for hierarchy flexibility
- Variable font version available
- More readable than condensed fonts at smaller sizes
- Professional/institutional authority

```html
<link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600;700;800;900&display=swap" rel="stylesheet">
```

```css
.display-secondary {
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 800; /* ExtraBold for H2 */
}

.display-callout {
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 900; /* Black for callouts */
  text-transform: uppercase;
}
```

#### Oswald Bold (BACKUP)

| Attribute | Value |
|-----------|-------|
| **Name** | Oswald |
| **Google Fonts** | YES - [fonts.google.com/specimen/Oswald](https://fonts.google.com/specimen/Oswald) |
| **Variable Font** | YES |
| **Weight Range** | 200-700 (ExtraLight to Bold) |
| **License** | SIL Open Font License 1.1 |
| **Reference Match** | 75% - Close to Bebas Neue but with lowercase |

**Limitation:** Max weight is 700 (Bold), not 900 (Black). Works well but slightly less impactful than Libre Franklin Black.

---

### 3. Body Font (Paragraphs)

| Recommendation | Backup Option |
|----------------|---------------|
| **Inter** | **Source Serif Pro** |

#### Inter (RECOMMENDED for Modern/Tech)

| Attribute | Value |
|-----------|-------|
| **Name** | Inter |
| **Google Fonts** | YES - [fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter) |
| **Variable Font** | YES (axes: weight, optical size) |
| **Weight Range** | 100-900 (Thin to Black) |
| **License** | SIL Open Font License 1.1 |
| **Reference Match** | N/A - Optimized for UI/body readability |

**Why Inter:**
- Designed specifically for screen readability
- Full weight range including Black (900)
- Variable font with optical size axis
- Each glyph has 3 dedicated designs (100, 400, 900 weights)
- Excellent for technical documentation

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
.body-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
}

.body-emphasis {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}
```

#### Source Serif Pro (BACKUP for Editorial/Traditional)

| Attribute | Value |
|-----------|-------|
| **Name** | Source Serif Pro |
| **Google Fonts** | YES - [fonts.google.com/specimen/Source+Serif+Pro](https://fonts.google.com/specimen/Source+Serif+Pro) |
| **Variable Font** | YES |
| **Weight Range** | 200-900 (ExtraLight to Black) |
| **License** | SIL Open Font License 1.1 |
| **Reference Match** | 70% - Traditional editorial feel |

**Why Source Serif Pro as backup:**
- Transitional serif with high readability
- Designed to complement Source Sans (good for mixed systems)
- Weight range up to Black (900)
- More traditional/editorial feel than Inter

---

### 4. Mono Font (Code Blocks)

| Recommendation | Backup Option |
|----------------|---------------|
| **JetBrains Mono** | **IBM Plex Mono** |

#### JetBrains Mono (RECOMMENDED)

| Attribute | Value |
|-----------|-------|
| **Name** | JetBrains Mono |
| **Google Fonts** | YES - [fonts.google.com/specimen/JetBrains+Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| **Variable Font** | YES |
| **Weight Range** | 100-800 (Thin to ExtraBold) |
| **License** | SIL Open Font License 1.1 |
| **Reference Match** | 85% - Modern, bold weights available |

**Why JetBrains Mono:**
- 8 weights including ExtraBold (800)
- Designed for developers with excellent character distinction
- OpenType ligatures for code (optional)
- Increased x-height for better small-size rendering
- "NL" variant available without ligatures

```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
.code-block {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 14px;
}

.code-emphasis {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
}
```

#### IBM Plex Mono (BACKUP)

| Attribute | Value |
|-----------|-------|
| **Name** | IBM Plex Mono |
| **Google Fonts** | YES - [fonts.google.com/specimen/IBM+Plex+Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) |
| **Variable Font** | No |
| **Weight Range** | 100-700 (Thin to Bold) |
| **License** | SIL Open Font License 1.1 |
| **Reference Match** | 75% - Professional, slightly lighter |

**Limitation:** Max weight 700 (Bold) vs JetBrains' 800 (ExtraBold).

---

## Optional: Blackletter/Gothic Accent Font

For the Blue/White reference image's classical blackletter authority:

#### UnifrakturCook (Google Fonts Option)

| Attribute | Value |
|-----------|-------|
| **Name** | UnifrakturCook |
| **Google Fonts** | YES - [fonts.google.com/specimen/UnifrakturCook](https://fonts.google.com/specimen/UnifrakturCook) |
| **Weight Range** | Bold only |
| **License** | SIL Open Font License 1.1 |
| **Use Case** | Decorative headers, "level" badges, special callouts |

**Note:** Blackletter fonts should be used sparingly - they're highly impactful but reduce legibility for extended text.

---

## Complete Font Stack

```css
:root {
  /* Display - Bold Condensed Headers */
  --font-display: 'Barlow Condensed', 'Anton', Impact, sans-serif;

  /* Display Secondary - Authority Headers */
  --font-display-secondary: 'Libre Franklin', 'Franklin Gothic', sans-serif;

  /* Body - Readable UI Text */
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;

  /* Mono - Code Blocks */
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Accent - Special Decorative (use sparingly) */
  --font-accent: 'UnifrakturCook', cursive;
}
```

### Google Fonts Import (Single Request)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Libre+Franklin:wght@600;700;800;900&display=swap" rel="stylesheet">
```

---

## Typography Scale Recommendations

```css
/* Display Typography */
h1, .h1 {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

h2, .h2 {
  font-family: var(--font-display-secondary);
  font-weight: 800;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h3, .h3 {
  font-family: var(--font-display-secondary);
  font-weight: 700;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  line-height: 1.3;
}

/* Body Typography */
p, .body {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
}

/* Code Typography */
code, pre {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 0.875rem;
}
```

---

## Summary Table

| Role | Font | Weight | Google Fonts | Variable | License |
|------|------|--------|--------------|----------|---------|
| **Display (H1)** | Barlow Condensed | 900 (Black) | YES | No | OFL |
| **Display (H2)** | Libre Franklin | 800-900 | YES | YES | OFL |
| **Body** | Inter | 400-700 | YES | YES | OFL |
| **Mono** | JetBrains Mono | 400-800 | YES | YES | OFL |
| **Accent** | UnifrakturCook | Bold | YES | No | OFL |

---

## Sources

### Font Resources
- [Google Fonts](https://fonts.google.com/)
- [Typewolf - Best Google Fonts 2026](https://www.typewolf.com/google-fonts)
- [Beautiful Web Type - Libre Franklin](https://beautifulwebtype.com/libre-franklin/)
- [JetBrains Mono Official](https://www.jetbrains.com/lp/mono/)
- [Inter Font Family](https://rsms.me/inter/)

### Design References
- [Fonts Used by Fashion Magazines](https://moshik.net/pages/fonts-in-use-by-fashion-magazines)
- [The Definitive Museum Guide to Fonts](https://www.axiell.com/blog-post/the-definitive-museum-guide-to-fonts/)
- [Brutalist Fonts - Pangram Pangram](https://pangrampangram.com/blogs/journal/brutalist-fonts-in-brutalist-designs)
- [Typewolf - Anton Alternatives](https://www.typewolf.com/anton)

### Search Queries Executed
1. "fonts similar to Bebas Neue google fonts"
2. "condensed bold sans serif google fonts 2026"
3. "blackletter fonts google fonts free"
4. "modern blackletter web fonts"
5. "editorial serif fonts variable"
6. "high contrast didone fonts web"
7. "brutalist typography fonts"
8. "bold condensed display fonts free commercial"
9. "IBM Plex alternatives bold"
10. "monospace fonts extra bold weight"
11. "variable fonts with black weight"
12. "fonts used in fashion magazines"
13. "fonts used in museum design"
14. "libre fonts editorial display"
15. "best free display fonts 2026"
16. "Anton font google fonts alternatives condensed"
17. "Barlow condensed black weight google fonts"
18. "League Gothic web font features weights"
19. "JetBrains Mono bold weight features"
20. "Libre Franklin black weight google fonts"
21. "Playfair Display black weight variable font"
22. "Inter font extra bold 900 weight"
23. "Source Serif Pro black heavy weight"

---

## Implementation Checklist

- [ ] Add Google Fonts link to `<head>`
- [ ] Define CSS custom properties for font families
- [ ] Set up typography scale (h1-h6, body, code)
- [ ] Test weights load correctly (inspect Network tab)
- [ ] Verify fallback fonts work without Google Fonts
- [ ] Check contrast ratios for accessibility (WCAG AA)
- [ ] Test on multiple devices/browsers
