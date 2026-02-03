# Reference Documentation Extraction

**Extraction Date:** 2026-02-02
**Sub-Agent:** 0E - Reference Documentation Extraction
**Sources:** Attio, Linear, Vercel documentation sites + web research

---

## Executive Summary

This extraction captures precise measurements, typography scales, color systems, and component patterns from three leading documentation sites (Attio, Linear, Vercel) plus insights from web research on documentation design best practices.

---

## 1. Attio Documentation

### Source URLs
- Help Center: https://attio.com/help
- Developer Docs: https://docs.attio.com/ (Mintlify-powered)
- Design Guidelines: https://docs.attio.com/sdk/guides/design-guidelines

### Layout Structure
| Element | Measurement |
|---------|-------------|
| Sidebar width | ~265px (navigation) |
| Content max-width | Fluid, responsive |
| Viewport tested | 2204 x 1284px |

### Typography Scale (Measured)
| Element | Font Size | Line Height | Font Weight | Font Family |
|---------|-----------|-------------|-------------|-------------|
| H1 (Hero) | 56px | 60px | 600 | Inter Display |
| H1 (Docs) | 24px | 33.6px | 700 | Inter |
| H2 | 30px | 39px | 600 | Inter |
| H2 (Help) | 16px | 22px | 500 | Inter |
| H3 | 16px | 22px | 500 | Inter |
| Body | 16px | 22px/24px | 450-500 | Inter |

### Color Palette
| Usage | Value |
|-------|-------|
| Body Background | `rgb(255, 255, 255)` |
| Text (Dark) | `lab(10.7201 -0.0959039 -1.54182)` (~#1a1a1a) |
| Muted Text | `lab(65.6464 1.53497 -5.42429)` (~#8a8a9a) |
| Primary Accent | Teal (brand color) |

### Design System Specifications (from Official Docs)
**Icon Specifications:**
- Minimum size: 560px x 560px
- Corner radius: 30% automatic application
- Format: PNG without transparency

**Screenshot Specifications:**
- Aspect ratio: 16:10
- Resolution: 2960px x 1848px
- Corner radius: Auto-applied

**Corner Radius Reference:**
| Icon Size | Radius |
|-----------|--------|
| 1000px | 300px |
| 500px | 150px |
| 280px | 84px |

### Navigation Behavior
- Collapsible sidebar sections with chevron icons
- Cmd+K search modal with popular searches
- Three-tier structure: Academy / Reference / Apps
- Breadcrumb navigation

### Unique Features
- AI chat assistant at bottom of docs pages
- "Was this page helpful?" feedback mechanism
- Copy page button
- Powered by Mintlify

---

## 2. Linear Documentation

### Source URL
- https://linear.app/docs

### Layout Structure
| Element | Measurement |
|---------|-------------|
| **Sidebar width** | **280px** |
| Content area | 928px (measured) |
| Main container | Fluid to viewport |
| Viewport tested | 2204 x 1284px |

### Typography Scale (Measured - HIGHLY DETAILED)
| Element | Font Size | Line Height | Letter Spacing | Font Weight |
|---------|-----------|-------------|----------------|-------------|
| **H1** | **40px** | **44px** | **-0.88px** | **590** |
| **H2** | **21px** | **27.93px** | **-0.252px** | **590** |
| **H3** | **15px** | **24px** | **-0.165px** | **510** |
| **Body/P** | **15px** | **24px** | **-0.165px** | **400** |
| Nav text | 16px | 24px | normal | 400 |

### Font Stack
```css
font-family: "Inter Variable", "SF Pro Display", -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
```

### Color Palette (Dark Theme - Default)
| Usage | Value |
|-------|-------|
| **Background** | **rgb(8, 9, 10)** (~#08090a) |
| **Primary Text** | **rgb(247, 248, 248)** (~#f7f8f8) |
| **Muted Text** | **rgb(138, 143, 152)** (~#8a8f98) |
| Nav Background | rgb(8, 9, 10) |

### Navigation Behavior
- Left sidebar with category buttons (Getting Started, Account, Teams, etc.)
- Accordion-style expansion for subcategories
- Search button in top nav
- Breadcrumb at top of content area
- Sign up CTA in header

### Component Patterns
- Card-based feature listings with icons
- "Popular" section highlighting key docs
- Grid layout for feature cards (2 columns)
- Icon + Title + Description card pattern

### Design System Notes (from Radix Case Study)
- Uses "Orbiter" internal design system
- Built on Radix Primitives for accessibility
- styled-components for styling
- Focus on "clear separation of styling and behavior"
- Modular NPM package structure

---

## 3. Vercel Documentation

### Source URL
- https://vercel.com/docs

### Layout Structure
| Element | Measurement |
|---------|-------------|
| **Aside/Sidebar** | **300px** |
| Content width | 832px (measured) |
| Nav height | 30px |
| Main container | Full viewport width |
| Viewport tested | 2204 x 1284px |

### Typography Scale (Measured)
| Element | Font Size | Line Height | Letter Spacing | Font Weight |
|---------|-----------|-------------|----------------|-------------|
| **H1** | **40px** | **48px** | **-2.4px** | **600** |
| **H2** | **32px** | **40px** | **-1.28px** | **600** |
| Body/P | 12-16px | 16-24px | normal | 400 |
| **Code** | **14px** | **21px** | normal | 400 |

### Font Stack
```css
/* Primary */
font-family: Geist, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

/* Monospace */
font-family: "Geist Mono", ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace;
```

### Color Palette (Light Theme)
| Usage | Value |
|-------|-------|
| **Background** | **rgb(255, 255, 255)** |
| **Primary Text** | **lab(7.78201...)** (~#000000) |
| **Muted Text** | **lab(43.16...)** (~#6b6b6b) |
| Code Background | rgb(250, 250, 250) |
| Code Border Radius | 4px |

### Code Block Styling
```css
code {
  padding: 1px 2px;
  margin: -1px 0px;
  font-size: 14px;
  line-height: 21px;
  background-color: rgb(250, 250, 250);
  border-radius: 4px;
}
```

### Unique Features
- Custom Geist font family (Vercel's own typeface)
- Very tight letter-spacing on headings (-2.4px on H1)
- Extensive use of monospace for technical content
- Three-panel layout (sidebar, content, TOC)

---

## 4. Cross-Site Pattern Analysis

### Common Layout Patterns
| Pattern | Attio | Linear | Vercel |
|---------|-------|--------|--------|
| Sidebar width | 265px | 280px | 300px |
| Content max-width | Fluid | 928px | 832px |
| Three-panel layout | Yes | Partial | Yes |
| Dark mode | Toggle | Default | Toggle |

### Typography Comparison
| Element | Attio | Linear | Vercel |
|---------|-------|--------|--------|
| H1 size | 24-56px | 40px | 40px |
| Body size | 16px | 15px | 12-16px |
| Primary font | Inter | Inter Variable | Geist |
| Letter spacing | Normal | Negative | Very negative |

### Common Components
1. **Search** - All three use Cmd+K pattern
2. **Sidebar Navigation** - Collapsible sections
3. **Breadcrumbs** - Standard across all
4. **Code blocks** - Syntax highlighting, copy buttons
5. **Cards** - Feature/doc linking with icons
6. **Feedback** - "Was this helpful?" patterns

---

## 5. Best Practices from Research

### From Backlight.dev Analysis

**Top Documentation Sites Referenced:**
- Atlassian Design System - Multi-product brand, single system
- Auro (Alaska Airlines) - Technical + UX writing, Web Components
- Backpack (Skyscanner) - Search-first navigation
- Gestalt (Pinterest) - Function over form, mature system
- Garden (Zendesk) - Elaborate content design definitions

### Key Design Patterns

1. **Multi-audience approach** - Separate content for designers vs developers
2. **Search-first navigation** - Discovery over hierarchy
3. **Component organization by use-case** - Not alphabetical
4. **Continuous feedback** - Rating systems on every page
5. **Multi-brand flexibility** - Theming across brands
6. **Content design prominence** - UX writing as primary
7. **Accessibility emphasis** - A11y throughout
8. **Multiple implementation formats** - React, Web Components, CSS, native

### Technology Patterns
- Design tokens in multiple formats (JSON, CSS, Sass, Less, Android, iOS)
- Framework-agnostic approaches (Web Components)
- Modular package structures

---

## 6. Vercel Component Library (react-components.vercel.app)

### Component Categories
| Category | Count | Examples |
|----------|-------|----------|
| Form Fields | 8 | Checkbox, Radio, Select, Text, Textarea |
| Components | 73+ | Accordion, Alert, Badge, Button, Card, CodeBlock, Hero, Tabs |
| Docs | 4 | Color, Grid, Playground, Typography |

### Notable Components
- **DocsPage** - Full documentation page template
- **DocsSidenav** - Documentation sidebar navigation
- **CodeBlock** - Syntax-highlighted code display
- **CaseStudySlider** - Case study presentation
- **PricingTiers** - Pricing table component
- **MarketoForm** - Marketing form integration

---

## 7. Design Token Recommendations

Based on the extraction, recommended tokens for a documentation site:

### Spacing Scale
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
```

### Typography Scale (Linear-inspired)
```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 15px;
--text-lg: 16px;
--text-xl: 21px;
--text-2xl: 24px;
--text-3xl: 32px;
--text-4xl: 40px;
```

### Line Height Scale
```css
--leading-none: 1;
--leading-tight: 1.1;
--leading-snug: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.6;
```

### Letter Spacing (Linear pattern)
```css
--tracking-tighter: -0.04em;  /* H1: -2.4px at 40px */
--tracking-tight: -0.02em;    /* H2: -1.28px at 32px */
--tracking-normal: -0.01em;   /* Body: -0.165px at 15px */
```

### Sidebar Widths
```css
--sidebar-width-sm: 240px;
--sidebar-width-md: 280px;  /* Linear standard */
--sidebar-width-lg: 300px;  /* Vercel standard */
```

### Content Widths
```css
--content-width-sm: 640px;
--content-width-md: 768px;
--content-width-lg: 832px;  /* Vercel */
--content-width-xl: 928px;  /* Linear */
```

---

## 8. Sources

### Primary Documentation Sites Analyzed
- [Attio Help Center](https://attio.com/help)
- [Attio Developer Docs](https://docs.attio.com/)
- [Attio Design Guidelines](https://docs.attio.com/sdk/guides/design-guidelines)
- [Linear Docs](https://linear.app/docs)
- [Vercel Docs](https://vercel.com/docs)

### Design System Resources
- [Attio Dribbble](https://dribbble.com/attio)
- [How Attio Does Design](https://strategybreakdowns.com/p/how-attio-does-design)
- [Linear Design System (Figma)](https://www.figma.com/community/file/1222872653732371433/linear-design-system)
- [Linear Radix Case Study](https://www.radix-ui.com/primitives/case-studies/linear)
- [Vercel Component Library](https://react-components.vercel.app/)
- [AI Elements by Vercel](https://github.com/vercel/ai-elements)

### Best Practices Research
- [Best Design System Documentation Sites - Backlight](https://backlight.dev/mastery/the-best-design-system-documentation-sites)
- [Top Software Documentation Platforms 2026](https://www.mobiloud.com/blog/top-software-documentation-platforms)

---

## 9. Key Takeaways

### For Documentation Site Design

1. **Sidebar width consensus:** 280-300px is the sweet spot
2. **Content width:** 832-928px for comfortable reading
3. **Typography:** 15-16px body, 40px H1, negative letter-spacing on headings
4. **Font choice:** Inter (or Inter Variable) dominates; Geist for Vercel
5. **Dark mode:** Essential - Linear defaults to dark, others toggle
6. **Search:** Cmd+K is universal pattern
7. **Navigation:** Collapsible sidebar with search > deep hierarchies
8. **Feedback:** Include "Was this helpful?" on every page
9. **AI assistance:** Emerging pattern (Attio has chat, Vercel has v0)

### Design System Maturity Indicators
- Multi-format token exports
- Accessibility-first component architecture
- Content design (UX writing) documentation
- Multi-brand/theme support
- Continuous feedback mechanisms
