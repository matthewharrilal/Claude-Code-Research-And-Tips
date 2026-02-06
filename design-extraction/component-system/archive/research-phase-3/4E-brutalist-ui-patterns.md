<!--
═══════════════════════════════════════════════════════════════
⚠️  SUPERSEDED — DO NOT USE FOR NEW WORK
═══════════════════════════════════════════════════════════════

STATUS: This file has been superseded and contains OUTDATED values.

SUPERSEDED BY: design-extraction/component-system/css/components.css

WHY THIS EXISTS: Research-phase-3 design explorations consumed into
production CSS implementations.

DANGER: Values in this file may CONFLICT with soul-locked tokens.
Using these values will break the design system's soul alignment.

DO NOT:
- Copy values from this file
- Reference this file in new work
- Update this file (it's frozen as historical record)

INSTEAD: Use the superseding document linked above.

Last verified: 2026-02-06
═══════════════════════════════════════════════════════════════
-->

# Brutalist UI Component Patterns Research

**Sub-Agent 4E Research Document**
**Date:** 2026-02-03
**Focus:** Brutalist web design component patterns, CSS implementations, and design principles

---

## Table of Contents

1. [Defining Brutalist Web Design](#1-defining-brutalist-web-design)
2. [Core Design Characteristics](#2-core-design-characteristics)
3. [Brutalist Component Patterns](#3-brutalist-component-patterns)
4. [Case Studies](#4-case-studies)
5. [CSS Implementation Details](#5-css-implementation-details)
6. [Principles for Our Component System](#6-principles-for-our-component-system)
7. [What Brutalism is NOT](#7-what-brutalism-is-not)
8. [Brutalist vs Bootstrap/Tailwind](#8-brutalist-vs-bootstraptailwind)
9. [Available Libraries and Resources](#9-available-libraries-and-resources)
10. [Verification Checklist](#10-verification-checklist)

---

## 1. Defining Brutalist Web Design

### Etymology and Origins

The term "brutalism" derives from the French **"béton brut"** meaning "raw concrete." While the original brutalist movement emerged in mid-20th century architecture (primarily in Europe and North America), the web design adaptation focuses on the concept of **"raw"** and **truth to materials**.

### Philosophy

Brutalist web design represents a philosophical stance, not just an aesthetic choice:

> "In its ruggedness and lack of concern to look comfortable or easy, Brutalism can be seen as a reaction by a younger generation to the lightness, optimism, and frivolity of today's web design." — [Brutalist Websites](https://brutalistwebsites.com/)

### Core Tenets

1. **Truth to Materials** — Websites should reflect what they actually are: hypertext documents, not applications or magazines
2. **Function Over Form** — Prioritizing usability and content clarity over decoration
3. **Honesty** — Showing the raw structure without hiding behind fancy visuals
4. **Rebellion** — Challenging the polished, sometimes superficial trends dominating the design world

### Three Sub-Categories of Brutalist Web Design

According to [Todaymade](https://www.todaymade.com/blog/brutalist-web-design):

| Sub-Category | Description | Characteristics |
|--------------|-------------|-----------------|
| **Purists** | Most conservative adherents | Basic HTML markup, blue links, unadorned text |
| **UX Minimalists** | Center on functionality/performance | May include images, clean fonts, interesting grids |
| **Artists** | See brutalism as self-expression | Neglect established rules, use principles freely |

---

## 2. Core Design Characteristics

### Visual Elements

#### Typography
- **Bold, oversized fonts** with geometric components
- Sans-serif or **monospaced typefaces** dominate
- Extreme sizes that command attention
- Often **all-caps** with generous letter-spacing
- Minimal or no font hierarchy
- System fonts and "raw" typefaces preferred

#### Color Palette
- **Monochromatic schemes** (black, white, gray)
- Stark **high-contrast** combinations
- Limited palettes (2-3 colors maximum)
- Classic brutalist palette: `#FFFFFF`, `#000000`, `#0000EE` (hyperlink blue)
- When colors appear, they are **bold and primary**

#### Layout and Structure
- **Asymmetrical layouts** with visible gridlines
- Intentional "unfinished" appearance
- Greater reliance on HTML structure over CSS decoration
- Generous whitespace and margins
- Direct, utilitarian information hierarchy

#### Borders and Edges
- **Sharp edges** — no border-radius (or minimal)
- Heavy borders (typically **2-4px+**)
- Visible structural elements (no hidden dividers)

#### Shadows
- **No soft shadows** — flat design aesthetic
- When shadows exist: hard, offset, single-color
- Common shadow pattern: `box-shadow: 4px 4px 0px #000`

---

## 3. Brutalist Component Patterns

### 3.1 Code Blocks

**Brutalist Approach:**
```css
.code-block {
  font-family: 'Roboto Mono', monospace;
  background: #f0f0f0;
  border: 2px solid #000;
  padding: 16px;
  border-radius: 0;
  box-shadow: none;
}
```

**Key Characteristics:**
- Monospace typography (Roboto Mono, Courier, system mono)
- Light padding and color styling
- Solid borders, no rounded corners
- No syntax highlighting gradients
- Exposed, raw presentation

**From [brutalist.style](https://brutalist.style/):**
- Code blocks feature "light padding and color styling"
- Set apart visually with minimal embellishment

### 3.2 Callouts and Alerts

**Brutalist Approach:**
```css
.callout {
  border: 2px solid #000;
  padding: 16px;
  background: #fff;
  box-shadow: 4px 4px 0px #000;
}

.callout-warning {
  border-left: 6px solid #000;
  background: #ffff00;
}
```

**Key Characteristics:**
- Heavy borders (no subtle 1px lines)
- Solid background colors (no gradients)
- Hard offset shadows for emphasis
- Color indicates severity (but still bold, primary colors)
- No icons or minimal iconography

**Neobrutalist Alert Pattern:**
- Solid border with hard, offset box-shadow
- Creates "tactile, pseudo-3D effect"
- Uses `:has()` pseudo-class for active panel styling

### 3.3 Tables

**Brutalist Approach:**
```css
table {
  border-collapse: collapse;
  width: 100%;
  border: 2px solid #000;
}

th, td {
  border: 1px solid #000;
  padding: 12px;
  text-align: left;
}

th {
  background: #000;
  color: #fff;
  text-transform: uppercase;
}
```

**Key Characteristics:**
- Visible, pronounced borders
- Exposed structure (no hidden dividers)
- Minimal styling beyond borders
- High contrast headers
- No zebra striping or hover effects (optional)

**From Research:**
> "The exposed structure of the UI — like the separating lines, tables, and open navigation — can give a site a sturdy feel."

### 3.4 Cards

**Brutalist Card Pattern:**
```css
.card {
  background: #fff;
  border: 3px solid #000;
  padding: 24px;
  box-shadow: 8px 8px 0px #000;
  border-radius: 0;
}

.card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0px #000;
}
```

**CSS Variables Pattern (from CodePen examples):**
```css
:root {
  --border: solid 1vmin #000;
  --border-small: solid 0.65vmin #000;
  --shadow-1: 1.5vmin 1.5vmin #000;
}

.card-brutalism {
  border: var(--border);
  box-shadow: var(--shadow-1);
}
```

**Key Characteristics:**
- Thick borders (3-4px or viewport-relative)
- Hard offset shadows (no blur)
- No rounded corners
- Bold typography within
- Optional rotation (`transform: rotate(-2deg)`) for raw edge effect

### 3.5 Navigation

**Brutalist Navigation Approach:**
```css
nav {
  position: fixed;
  width: 25%;
  height: 100vh;
  border-right: 1px solid #000;
  background: #fff;
}

nav a {
  display: block;
  padding: 16px;
  color: #000;
  text-decoration: underline;
  text-transform: uppercase;
  font-weight: 400;
}

nav a:hover {
  background: #000;
  color: #fff;
}
```

**Key Characteristics:**
- Open navigation (not hamburger menus or dropdowns)
- Underlined links (standard web convention)
- Clean hover transitions
- Visible structural borders
- Intuitive, straightforward layouts

**From [brutalist-web.design](https://brutalist-web.design):**
> "Hyperlinks are underlined and buttons look like buttons" — using standard conventions so users immediately recognize interactive elements.

### 3.6 Buttons

**Brutalist Button Pattern:**
```css
.btn {
  background: #fff;
  color: #000;
  border: 2px solid #000;
  padding: 12px 24px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 4px 4px 0px #000;
  transition: all 0.1s ease;
}

.btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #000;
}

.btn:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #000;
}
```

**Alternative: Pseudo-Element Shadow:**
```css
.btn-brutal {
  position: relative;
  background: #fff;
  border: 2px solid #000;
  z-index: 1;
}

.btn-brutal::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px;
  background: #000;
  z-index: -1;
}
```

**Key Characteristics:**
- Should "look like buttons" (clear affordance)
- Thick borders
- Hard shadows (no blur, single-color)
- Visible hover/active states
- Often uppercase typography

**Common Shadow Offsets:**
| Library | Shadow Value |
|---------|--------------|
| Basic | `2px 2px 0 #000` |
| Standard | `4px 4px 0 #000` |
| Prominent | `5px 5px 0 #000` |
| Large | `8px 8px 0 #000` |
| TailwindCSS nb-shadow | `2px` (small), `4px` (lg), `6px` (xl) |

### 3.7 Form Inputs

**Brutalist Form Input Pattern:**
```css
.form-input {
  outline: none;
  border: 2px solid #000;
  box-shadow: 3px 4px 0px 1px #000;
  padding: 12px 10px;
  border-radius: 4px;
  font-size: 15px;
  width: 100%;
}

.form-input:focus {
  transform: translateY(4px);
  box-shadow: 1px 2px 0px 0px #000;
}
```

**Key Characteristics:**
- Solid black borders (2px minimum)
- Hard offset shadows
- Focus state: translate down + reduce shadow (pressed effect)
- Minimal border-radius (0-4px)
- Clear visual feedback on interaction

**Form Container Styling:**
```css
.form-area {
  background: #fff;
  border-radius: 20px;
  box-shadow: 30px 35px 2px #52206b;
}
```

### 3.8 Badges and Tags

**Brutalist Badge Pattern:**
```css
.badge {
  display: inline-block;
  padding: 4px 12px;
  background: #000;
  color: #fff;
  border: 2px solid #000;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
}

.badge-outline {
  background: transparent;
  color: #000;
}
```

**Key Characteristics:**
- High contrast (black on white or inverse)
- Thick borders
- Uppercase typography
- No rounded corners (or minimal)

---

## 4. Case Studies

### 4.1 Craigslist

**URL:** craigslist.org

**Design Characteristics:**
- Considered the "granddaddy" of brutalist websites
- Black text, blue links, white background
- Purely functional, no decoration
- Grid-based layout with visible structure
- Fast loading, accessible

**Soul Assessment:** Pure brutalism — function over form, honest about being a hypertext document

### 4.2 Brutalist Websites Gallery

**URL:** [brutalistwebsites.com](https://brutalistwebsites.com/)

**Featured Sites Include:**
- Studio Job, Bureau+Sector, HYPER STUDIO (design studios)
- Logic Magazine, Toilet Paper Magazine (publications)
- Christopher Wool, Ellen Allien (artist portfolios)
- Embassy of Internet, School for Poetic Computation (experimental)
- Supreme, AWGE, Kanye West (commercial brands)

**Common Patterns Observed:**
- Monospace and system fonts dominate
- Generous whitespace and margins
- Minimal decoration or ornamental elements
- Plain HTML-like navigation
- Focus on content accessibility

### 4.3 NPR Text-Only

**URL:** text.npr.org

**Design Characteristics:**
- Pure HTML, minimal CSS
- Maximum accessibility
- Fastest possible load time
- Content-first approach

**Soul Assessment:** UX minimalist brutalism — stripped to essentials for performance

### 4.4 Universal Paperclips

**URL:** decisionproblem.com/paperclips/

**Design Characteristics:**
- Browser game with brutalist interface
- System fonts, minimal styling
- Raw HTML aesthetic
- Function dictates form

### 4.5 Figma and Gumroad (Neo-Brutalist Influence)

**Design Characteristics:**
- Bold, high-contrast colors
- Raw elements with focus on user experience
- Simplified, purposeful design
- Modern interpretation of brutalist principles

---

## 5. CSS Implementation Details

### 5.1 CSS Variables for Brutalist Design

**From Neo-brutalism-CSS Library:**
```css
:root {
  /* Colors */
  --color-primary: #000000;
  --color-secondary: #ffffff;
  --color-accent: #ffff00;

  /* Borders */
  --border-width: 2px;
  --border-color: #000000;

  /* Shadows */
  --shadow-offset-x: 4px;
  --shadow-offset-y: 4px;
  --shadow-color: #000000;

  /* Typography */
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### 5.2 Shadow Patterns

**Standard Neobrutalism Shadow:**
```css
.element {
  box-shadow: 4px 4px 0px 0px #000;
}
```

**Responsive Shadow (viewport-relative):**
```css
.element {
  box-shadow: 1.5vmin 1.5vmin #000;
}
```

**TailwindCSS Utilities:**
```css
/* From NeoBrutalism.css */
.nb-shadow { box-shadow: 2px 2px 0 #000; }
.nb-shadow-lg { box-shadow: 4px 4px 0 #000; }
.nb-shadow-xl { box-shadow: 6px 6px 0 #000; }
```

### 5.3 Border Patterns

**Standard Brutalist Border:**
```css
.element {
  border: 2px solid #000;
  border-radius: 0;
}
```

**Bold Border:**
```css
.element {
  border: 3px solid #000;
}
```

**Extra Bold (for emphasis):**
```css
.element {
  border: 4px solid #000;
}
```

### 5.4 Typography Scale

**From Tiny Brutalism CSS:**
```css
body {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.15rem;
  line-height: 1.5;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
```

**Neobrutalism Heading Style:**
```css
.heading {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### 5.5 Interactive States

**Hover with Translation:**
```css
.btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #000;
}
```

**Focus/Active Pressed Effect:**
```css
.btn:active,
.input:focus {
  transform: translateY(4px);
  box-shadow: 1px 2px 0px 0px #000;
}
```

---

## 6. Principles for Our Component System

Based on this research, here are the principles to apply to our 12-component system:

### Design Tokens

```css
:root {
  /* Brutalist Color Palette */
  --brutal-black: #000000;
  --brutal-white: #ffffff;
  --brutal-link-blue: #0000EE;
  --brutal-warning: #ffff00;
  --brutal-error: #ff0000;
  --brutal-success: #00ff00;

  /* Border System */
  --brutal-border-thin: 1px solid var(--brutal-black);
  --brutal-border-standard: 2px solid var(--brutal-black);
  --brutal-border-thick: 3px solid var(--brutal-black);
  --brutal-border-heavy: 4px solid var(--brutal-black);

  /* Shadow System */
  --brutal-shadow-sm: 2px 2px 0 var(--brutal-black);
  --brutal-shadow-md: 4px 4px 0 var(--brutal-black);
  --brutal-shadow-lg: 6px 6px 0 var(--brutal-black);
  --brutal-shadow-xl: 8px 8px 0 var(--brutal-black);

  /* Typography */
  --brutal-font-mono: 'Roboto Mono', 'Courier New', monospace;
  --brutal-font-sans: 'Space Grotesk', 'Inter', system-ui, sans-serif;

  /* Spacing */
  --brutal-space-sm: 8px;
  --brutal-space-md: 16px;
  --brutal-space-lg: 24px;
  --brutal-space-xl: 32px;

  /* Border Radius (minimal to none) */
  --brutal-radius-none: 0;
  --brutal-radius-minimal: 4px;
}
```

### Component-Specific Guidelines

| Component | Brutalist Treatment |
|-----------|---------------------|
| **CodeBlock** | Mono font, 2px border, no syntax gradients, raw presentation |
| **Callout** | Heavy border (3-4px), hard shadow, solid background colors |
| **Table** | Visible borders on all cells, high-contrast headers, exposed structure |
| **Card** | Thick border, hard offset shadow, no rounded corners |
| **Button** | Clear affordance, thick border, hard shadow, uppercase text |
| **Input** | 2px border, offset shadow, pressed effect on focus |
| **Badge** | High contrast, thick border, uppercase, compact |
| **Navigation** | Open structure, underlined links, visible borders |
| **List** | Minimal styling, clear bullets, generous spacing |
| **Accordion** | Heavy borders, hard shadow on active, clear open/close states |
| **Alert** | Bold border-left indicator, solid background, no gradient |
| **Tooltip** | Hard shadow, solid border, direct positioning |

### Soul Preservation Checklist

For each component, verify:

1. **Is it honest?** — Does the component clearly communicate what it is?
2. **Is it functional?** — Does form follow function, not decoration?
3. **Is it raw?** — Are structural elements visible, not hidden?
4. **Is it accessible?** — Does the boldness aid or hinder usability?
5. **Is it intentional?** — Does every design choice serve a purpose?

---

## 7. What Brutalism is NOT

### Common Misunderstandings

| Myth | Reality |
|------|---------|
| Brutalism = Ugly | Brutalism is **intentional**, not careless. Ugliness for its own sake is not brutalism. |
| Brutalism = Broken | Brutalist sites should still function well. Navigation should work. |
| Brutalism = No CSS | Brutalism uses CSS — but **purposefully and minimally**. |
| Brutalism = Anti-UX | Good brutalism prioritizes content accessibility and clear navigation. |
| Brutalism = Random | Brutalism has consistent principles; randomness is chaos, not brutalism. |
| Brutalism = Lazy | Creating effective brutalist design requires restraint and intentionality. |

### Anti-Patterns to Avoid

1. **Inaccessible text** — High contrast should aid readability, not hurt it
2. **Broken navigation** — The back button must work as expected
3. **Hidden affordances** — Clickable elements should be obviously clickable
4. **Decoration masquerading as brutalism** — Adding chaos without purpose
5. **Unusable interfaces** — Brutalism is raw, not dysfunctional

### The Line Between Brutalist and Bad Design

> "Anti-design is best defined as a way of thinking as opposed to a specific aesthetic. Anti-designers are not seeking destruction, or ugliness for the sake of ugliness, but to offer an alternative to accepted design standards." — [99designs](https://99designs.com/blog/design-history-movements/anti-design/)

---

## 8. Brutalist vs Bootstrap/Tailwind

### Side-by-Side Comparison

| Aspect | Bootstrap/Tailwind | Brutalist Approach |
|--------|-------------------|-------------------|
| **Border Radius** | `rounded-lg` (8-12px) | `rounded-none` (0px) |
| **Shadows** | `shadow-md` (soft, blurred) | `shadow-[4px_4px_0_#000]` (hard, no blur) |
| **Colors** | Gradients, subtle tones | Solid, primary, high-contrast |
| **Typography** | System fonts, normal weights | Bold, uppercase, mono/grotesque |
| **Borders** | 1px, subtle | 2-4px, prominent |
| **Animation** | Smooth easing | Minimal or instant |
| **Overall Feel** | Polished, friendly | Raw, intentional, honest |

### Button Comparison

**Bootstrap Button:**
```css
.btn-primary {
  background: linear-gradient(180deg, #0d6efd, #0a58ca);
  border: 1px solid #0d6efd;
  border-radius: 6px;
  padding: 8px 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**Brutalist Button:**
```css
.btn-brutal {
  background: #fff;
  border: 2px solid #000;
  border-radius: 0;
  padding: 12px 24px;
  box-shadow: 4px 4px 0 #000;
  text-transform: uppercase;
  font-weight: 700;
}
```

### Card Comparison

**Tailwind Card:**
```html
<div class="bg-white rounded-lg shadow-md p-6 border border-gray-200">
```

**Brutalist Card:**
```html
<div class="bg-white rounded-none shadow-[8px_8px_0_#000] p-6 border-4 border-black">
```

### When to Choose Each

| Use Bootstrap/Tailwind When | Use Brutalist When |
|-----------------------------|-------------------|
| Corporate/enterprise apps | Creative portfolios |
| E-commerce checkouts | Artist/designer sites |
| Mass-market products | Experimental projects |
| Accessibility is paramount | Brand differentiation needed |
| Broad audience appeal | Tech-savvy/design-aware audience |

---

## 9. Available Libraries and Resources

### CSS Libraries

| Library | Description | Size | Link |
|---------|-------------|------|------|
| **BrutalKit** | Tailwind CSS brutalist UI kit, 100+ pages | - | [brutalkit.com](https://brutalkit.com/) |
| **neobrutalism.dev** | shadcn/ui based components | - | [neobrutalism.dev](https://www.neobrutalism.dev/) |
| **Neo-brutalism-CSS** | Pure CSS library | - | [GitHub](https://github.com/Walikuperek/Neo-brutalism-CSS) |
| **Tiny Brutalism CSS** | Minimal brutalist styles | 4KB | [Demo](https://pruger.github.io/tiny-brutalism-css/) |
| **brutalist.style** | Classless stylesheet | Small | [brutalist.style](https://brutalist.style/) |
| **NeoBrutalismCSS** | Design framework | <100KB | [Demo](https://matifandy8.github.io/NeoBrutalismCSS/) |
| **Brutalist Framework** | PHP/HTML templates + CSS | - | [brutalistframework.com](http://www.brutalistframework.com/) |
| **RetroUI** | React + Tailwind neobrutalism | - | [retroui.dev](https://www.retroui.dev/) |

### Galleries and Inspiration

| Resource | Description | Link |
|----------|-------------|------|
| **Brutalist Websites** | Original brutalist gallery | [brutalistwebsites.com](https://brutalistwebsites.com/) |
| **Brutal Web** | Neo-brutalist gallery | [brutalweb.com](https://brutalweb.com/) |
| **One Page Love** | 162 brutalism examples | [onepagelove.com/tag/brutalism](https://onepagelove.com/tag/brutalism) |
| **Awwwards Brutalism** | Award-winning brutalist sites | [awwwards.com/collections/brutalism](https://www.awwwards.com/awwwards/collections/brutalism/) |
| **Refs.gallery** | Brutalist design references | [refs.gallery/tags/brutalist](https://refs.gallery/tags/brutalist) |

### Font Recommendations

**For Headings:**
- Space Grotesk
- Inter (bold weights)
- Roboto Mono
- Knif Mono (monospaced serif)

**For Body Text:**
- Inter
- System fonts
- Roboto Mono (for full brutalist effect)

**For Code:**
- Roboto Mono
- Courier New
- SF Mono
- JetBrains Mono

### Tools

| Tool | Purpose | Link |
|------|---------|------|
| **Neobrutalism Button Generator** | Generate button CSS | [jsdev.space/tools/neobrutalism-button](https://jsdev.space/tools/neobrutalism-button/) |
| **Dribbble Anti-Design** | Design inspiration | [dribbble.com/tags/anti-design](https://dribbble.com/tags/anti-design) |

---

## 10. Verification Checklist

### Component Audit Questions

For each component in our system, verify:

#### Visual Design
- [ ] Border width is 2px minimum
- [ ] No border-radius (or minimal ≤4px)
- [ ] Shadows are hard and offset (no blur)
- [ ] Colors are high-contrast
- [ ] No gradients used
- [ ] Typography is bold and intentional

#### Functionality
- [ ] Interactive elements are clearly identifiable
- [ ] Hover/focus states are visible
- [ ] Component is accessible (contrast ratios pass WCAG)
- [ ] Navigation works as expected

#### Philosophy
- [ ] Design is honest about what the component does
- [ ] Form follows function
- [ ] Raw structure is visible/celebrated
- [ ] No decoration without purpose

### CSS Property Checklist

| Property | Brutalist Value | Non-Brutalist Value |
|----------|-----------------|---------------------|
| `border-radius` | `0` to `4px` | `8px+` |
| `box-shadow` | `Xpx Ypx 0 color` | `Xpx Ypx blur color` |
| `border-width` | `2px+` | `1px` |
| `background` | Solid colors | Gradients |
| `font-weight` | `600+` | `400` |
| `text-transform` | `uppercase` | `none` |
| `transition` | Minimal/instant | Smooth easing |

### Final Sanity Check

Before approving a component as "brutalist," ask:

1. **Would this look at home on brutalistwebsites.com?**
2. **Does it prioritize content over decoration?**
3. **Is the rawness intentional, not accidental?**
4. **Does it still function well despite the aesthetic?**
5. **Would removing any element make it worse, not better?**

---

## Sources

### Primary Research
- [Brutalist Websites Gallery](https://brutalistwebsites.com/)
- [Brutalist Web Design Principles](https://brutalist-web.design)
- [NN/g: Neobrutalism Definition and Best Practices](https://www.nngroup.com/articles/neobrutalism/)
- [neobrutalism.dev Component Library](https://www.neobrutalism.dev/)
- [BrutalKit](https://brutalkit.com/)

### Secondary Sources
- [Todaymade: Brutalism Comprehensive Guide](https://www.todaymade.com/blog/brutalist-web-design)
- [99designs: Anti-Design](https://99designs.com/blog/design-history-movements/anti-design/)
- [618media: Neo-Brutalism Raw Aesthetics](https://618media.com/en/blog/neo-brutalism-raw-aesthetics-in-web-design/)
- [StringLabs: Brutalist Web Design](https://stringlabscreative.com/brutalist-web-design/)
- [Elementor: Brutalism in Web Design](https://elementor.com/blog/brutalism-in-web-design/)
- [Wix: Brutalist Websites Examples](https://www.wix.com/blog/brutalist-websites)
- [Really Good Designs: Neo Brutalist Examples](https://reallygooddesigns.com/neo-brutalist-website-examples/)

### CSS Libraries Researched
- [Neo-brutalism-CSS (GitHub)](https://github.com/Walikuperek/Neo-brutalism-CSS)
- [brutalist.style](https://brutalist.style/)
- [Tiny Brutalism CSS](https://pruger.github.io/tiny-brutalism-css/)
- [NeoBrutalismCSS](https://matifandy8.github.io/NeoBrutalismCSS/)
- [Brutalist Framework](http://www.brutalistframework.com/)

### Tutorials
- [Code with Faraz: Neobrutalism Sign-up Form](https://www.codewithfaraz.com/content/61/how-to-create-neobrutalism-sign-up-form-using-html-and-css-only)
- [Medium: Create a Brutalist Style Button](https://sachinamarasinghe.medium.com/create-a-brutalist-style-button-in-css-25e0db0e2719)
- [Free Frontend: 6 CSS Neobrutalism UI Examples](https://freefrontend.com/css-neobrutalism/)

---

**Document Statistics:**
- Total Lines: 700+
- Component Patterns Documented: 8
- Case Studies: 5
- CSS Libraries Analyzed: 8
- Design Principles Extracted: 12+

**Research Completed:** 2026-02-03
