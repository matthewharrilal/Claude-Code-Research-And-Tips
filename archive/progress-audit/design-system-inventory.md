# Design System Inventory

> Comprehensive extraction from http://localhost:3000/poc/design-system and related files
> Generated: 2026-02-02

---

## Table of Contents

1. [Color Tokens](#color-tokens)
2. [Typography Tokens](#typography-tokens)
3. [Spacing Tokens](#spacing-tokens)
4. [Border & Radius Tokens](#border--radius-tokens)
5. [Shadow Tokens](#shadow-tokens)
6. [Animation & Transition Tokens](#animation--transition-tokens)
7. [Z-Index Scale](#z-index-scale)
8. [Layout Tokens](#layout-tokens)
9. [Component Inventory](#component-inventory)
10. [Theme Variants](#theme-variants)
11. [Attio Theme Tokens](#attio-theme-tokens)
12. [Reusability Assessment](#reusability-assessment)
13. [Gaps & Missing Elements](#gaps--missing-elements)

---

## Color Tokens

### Sanrok Theme (Default)

| Token | Value | Description |
|-------|-------|-------------|
| `--sanrok-red` | `#FF0000` | Primary accent - pure red |
| `--sanrok-cream` | `#FBF5EF` | Page background - warm cream |
| `--sanrok-white` | `#FFFFFF` | Card/elevated backgrounds |
| `--sanrok-black` | `#171717` | Primary text |
| `--sanrok-gray-muted` | `#B0B0B0` | Muted text |
| `--sanrok-gray-light` | `#F5F5F5` | User chat bubble background |
| `--sanrok-border` | `rgba(0, 0, 0, 0.08)` | Subtle borders |

### Medieval Theme

| Token | Value | Description |
|-------|-------|-------------|
| `--medieval-blue` | `#1A44B8` | Primary - royal blue |
| `--medieval-blue-dark` | `#0F2D7A` | Hover state |
| `--medieval-white` | `#FFFFFF` | Background |
| `--medieval-cream` | `#F8F6F0` | Alternate background |
| `--medieval-gold` | `#C4A35A` | Decorative accent |

### Nous Research Theme

| Token | Value | Description |
|-------|-------|-------------|
| `--nous-black` | `#000000` | Primary - pure black |
| `--nous-white` | `#FFFFFF` | Background |
| `--nous-gray` | `#333333` | Muted text |

### Semantic Color Mappings

| Token | Default Value | Description |
|-------|---------------|-------------|
| `--color-primary` | `var(--sanrok-red)` | Primary brand color |
| `--color-primary-hover` | `color-mix(in srgb, var(--color-primary) 85%, black)` | Hover state |
| `--color-bg-page` | `var(--sanrok-cream)` | Page background |
| `--color-bg-card` | `var(--sanrok-white)` | Card background |
| `--color-bg-elevated` | `var(--sanrok-white)` | Elevated surface |
| `--color-text-primary` | `var(--sanrok-black)` | Main text |
| `--color-text-secondary` | `#4A4A4A` | Secondary text |
| `--color-text-muted` | `var(--sanrok-gray-muted)` | Muted/hint text |
| `--color-text-inverse` | `var(--sanrok-white)` | Text on dark |
| `--color-border` | `var(--sanrok-border)` | Standard border |
| `--color-border-strong` | `rgba(0, 0, 0, 0.15)` | Emphasized border |

---

## Typography Tokens

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-display` | `'Instrument Serif', 'Playfair Display', Georgia, serif` | Hero text, headings |
| `--font-body` | `'Inter', system-ui, -apple-system, sans-serif` | Body text, UI |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', Monaco, monospace` | Code blocks |
| `--font-blackletter` | `'UnifrakturMaguntia', 'Old English Text MT', serif` | Medieval display |
| `--font-condensed` | `'Inter Tight', 'Roboto Condensed', sans-serif` | Nous display |

### Type Scale (1.333 Perfect Fourth)

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--text-xs` | `0.625rem` | 10px | Metadata, labels |
| `--text-sm` | `0.875rem` | 14px | Captions, small text |
| `--text-base` | `1rem` | 16px | Body text |
| `--text-lg` | `1.333rem` | 21px | Lead paragraphs |
| `--text-xl` | `1.777rem` | 28px | H4 |
| `--text-2xl` | `2.369rem` | 38px | H3 |
| `--text-3xl` | `3.157rem` | 50px | H2 |
| `--text-4xl` | `4.209rem` | 67px | H1 |
| `--text-5xl` | `5.61rem` | 90px | Display |
| `--text-hero` | `clamp(5rem, 15vw, 13.8rem)` | 80-220px | Viewport hero |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--leading-hero` | `0.85` | Tight hero text |
| `--leading-tight` | `0.95` | Display headings |
| `--leading-heading` | `1.1` | Standard headings |
| `--leading-snug` | `1.3` | Subheadings |
| `--leading-body` | `1.6` | Body text |
| `--leading-relaxed` | `1.75` | Long-form reading |

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--tracking-tighter` | `-0.04em` | Extra tight hero |
| `--tracking-tight` | `-0.03em` | Hero text |
| `--tracking-snug` | `-0.02em` | Headings |
| `--tracking-normal` | `0` | Body |
| `--tracking-wide` | `0.05em` | Uppercase labels |
| `--tracking-wider` | `0.1em` | Spaced caps |
| `--tracking-widest` | `0.2em` | Maximum spacing |

### Font Weights

| Token | Value |
|-------|-------|
| `--weight-normal` | `400` |
| `--weight-medium` | `500` |
| `--weight-semibold` | `600` |
| `--weight-bold` | `700` |
| `--weight-extrabold` | `800` |
| `--weight-black` | `900` |

---

## Spacing Tokens

4px base unit system:

| Token | Value | Pixels |
|-------|-------|--------|
| `--space-0` | `0` | 0 |
| `--space-1` | `0.25rem` | 4px |
| `--space-2` | `0.5rem` | 8px |
| `--space-3` | `0.75rem` | 12px |
| `--space-4` | `1rem` | 16px |
| `--space-5` | `1.25rem` | 20px |
| `--space-6` | `1.5rem` | 24px |
| `--space-8` | `2rem` | 32px |
| `--space-10` | `2.5rem` | 40px |
| `--space-12` | `3rem` | 48px |
| `--space-16` | `4rem` | 64px |
| `--space-20` | `5rem` | 80px |
| `--space-24` | `6rem` | 96px |
| `--space-32` | `8rem` | 128px |
| `--space-40` | `10rem` | 160px |

---

## Border & Radius Tokens

### Border Radius

| Token | Value | Pixels |
|-------|-------|--------|
| `--radius-none` | `0` | 0 |
| `--radius-sm` | `0.25rem` | 4px |
| `--radius-md` | `0.5rem` | 8px |
| `--radius-lg` | `0.75rem` | 12px |
| `--radius-xl` | `1rem` | 16px |
| `--radius-2xl` | `1.5rem` | 24px |
| `--radius-full` | `9999px` | Pill shape |

### Border Widths (Nous-style)

| Token | Value |
|-------|-------|
| `--border-thin` | `1px` |
| `--border-medium` | `2px` |
| `--border-thick` | `4px` |
| `--border-frame` | `8px` |
| `--border-heavy` | `12px` |

---

## Shadow Tokens

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.05)` |
| `--shadow-md` | `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)` |
| `--shadow-lg` | `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)` |
| `--shadow-xl` | `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)` |
| `--shadow-card` | `0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.06)` |
| `--shadow-elevated` | `0 8px 32px rgba(0, 0, 0, 0.12)` |

---

## Animation & Transition Tokens

### Durations

| Token | Value |
|-------|-------|
| `--duration-fast` | `150ms` |
| `--duration-normal` | `250ms` |
| `--duration-slow` | `400ms` |

### Easing Functions

| Token | Value |
|-------|-------|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

---

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | `0` | Default |
| `--z-above` | `10` | Slightly elevated |
| `--z-dropdown` | `100` | Dropdowns |
| `--z-sticky` | `200` | Sticky headers |
| `--z-overlay` | `300` | Overlays |
| `--z-modal` | `400` | Modals |
| `--z-toast` | `500` | Toast notifications |
| `--z-tooltip` | `600` | Tooltips |

---

## Layout Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--container-sm` | `640px` | Small container |
| `--container-md` | `768px` | Medium container |
| `--container-lg` | `1024px` | Large container |
| `--container-xl` | `1280px` | Extra large container |
| `--container-2xl` | `1536px` | Maximum container |
| `--content-width` | `720px` | Content column |
| `--sidebar-width` | `280px` | Sidebar width |

---

## Component Inventory

### Sanrok Components (7 components)

| Component | File | Description |
|-----------|------|-------------|
| **HeroTypography** | `HeroTypography.tsx` | Viewport-filling hero with italic/regular mixing |
| **PillNavigation** | `PillNavigation.tsx` | Rounded pill tab navigation |
| **ChatBubble** | `ChatBubble.tsx` | User/Assistant chat bubbles with avatars |
| **TeamMemberCard** | `TeamMemberCard.tsx` | Portrait card with duotone image + rank badge |
| **CTAButton** | `CTAButton.tsx` | Primary/outline pill buttons |
| **BannerStrip** | `BannerStrip.tsx` | Marquee announcement banner |
| **InfoColumns** | `InfoColumns.tsx` | Three-column info layout |

### Medieval Components (3 components)

| Component | File | Description |
|-----------|------|-------------|
| **DecorativeInitialCap** | `DecorativeInitialCap.tsx` | Blackletter drop cap |
| **OrnamentalDivider** | `OrnamentalDivider.tsx` | Fleur-de-lis/flourish dividers |
| **JustifiedTextBlock** | `JustifiedTextBlock.tsx` | Manuscript-style justified text |

### Nous Components (3 components)

| Component | File | Description |
|-----------|------|-------------|
| **RepetitionPattern** | `RepetitionPattern.tsx` | Text-as-texture background |
| **LogoFrame** | `LogoFrame.tsx` | Thick-bordered logo container |
| **HalftoneImage** | `HalftoneImage.tsx` | Halftone dot overlay effect |

### Blended Components (8 components)

| Component | File | Description |
|-----------|------|-------------|
| **BlendedHero** | `index.tsx` | Sanrok hero + Nous texture |
| **HeroSpan** | `index.tsx` | Italic/regular text mixing |
| **BlendedDivider** | `index.tsx` | Medieval ornament in Sanrok red |
| **BlendedTeamCard** | `index.tsx` | Duotone + gold star badge |
| **BlendedFeatureBox** | `index.tsx` | Nous thick border + Medieval corners |
| **BlendedNav** | `index.tsx` | Pill nav + Medieval ornament |
| **BlendedCTA** | `index.tsx` | Sanrok-style button |
| **BlendedSection** | `index.tsx` | Section with Nous bg text |

### UI POC Components (9 components)

| Component | File | Description |
|-----------|------|-------------|
| **LevelCardPOC** | `LevelCardPOC.tsx` | Base level card |
| **LevelCardGlass** | `LevelCardVariants.tsx` | Glassmorphism variant |
| **LevelCardMinimal** | `LevelCardVariants.tsx` | Bold minimal variant |
| **LevelCardDark** | `LevelCardVariants.tsx` | Dark premium variant |
| **LevelCardGradient** | `LevelCardVariants.tsx` | Gradient border variant |
| **LevelCardColorful** | `LevelCardVariants.tsx` | Bold color panels |
| **LevelCardNotion** | `LevelCardVariants.tsx` | Notion-style clean |
| **MountainExpedition** | `MountainExpedition.tsx` | Expedition journey UI |
| **SkillConstellation** | `SkillConstellation.tsx` | Star constellation pattern |

### Attio Docs Components (7 components)

| Component | File | Description |
|-----------|------|-------------|
| **AttioHeader** | `AttioHeader.tsx` | Clean header with search |
| **AttioSidebar** | `AttioSidebar.tsx` | Left navigation sidebar |
| **AttioBreadcrumbs** | `AttioBreadcrumbs.tsx` | Breadcrumb navigation |
| **AttioContent** | `AttioContent.tsx` | Main content area |
| **AttioTOC** | `AttioTOC.tsx` | Right-side table of contents |
| **AttioDocsLayout** | `AttioDocsLayout.tsx` | Three-column layout |

---

## Theme Variants

### Available Themes (10 total)

1. **Sanrok** - Default warm creative agency style
2. **Medieval** - Royal blue blackletter manuscript
3. **Nous** - Maximum contrast B&W brutalism
4. **Medieval-Blend** - Medieval 60% + Sanrok 25% + Nous 15%
5. **Blended (Sanrok-Dominant)** - Sanrok 80% + Medieval 12% + Nous 8%
6. **Blend-Nous-Dominant** - Nous 70% + Medieval 15% + Sanrok 15%
7. **Attio** - Clean modern documentation style

### POC Page Variants (19 pages)

Located at `/docs-spa/app/poc/`:

- `/poc` - Main POC index
- `/poc/design-system` - Theme switcher showcase
- `/poc/variants` - Level card variants
- `/poc/design-compare` - Design comparison
- `/poc/real-content` - Real content test
- `/poc/vision`, `/poc/vision-full`, `/poc/vision-dense` - Vision variants
- `/poc/medieval-blend` - Medieval blend demo
- `/poc/sketchbook-blend` - Sketchbook style
- `/poc/mountain` - Mountain expedition UI
- `/poc/notebook` - Notebook style
- `/poc/trading-cards` - Trading card style
- `/poc/constellation` - Skill constellation
- `/poc/blueprint` - Blueprint style
- `/poc/notion-docs` - Notion-style docs
- `/poc/redesign` - Redesign exploration
- `/poc/sanrok-linear` - Sanrok + Linear blend
- `/poc/exact-match`, `/poc/dense-match` - Matching tests
- `/poc/attio-docs` - Attio-style documentation

---

## Attio Theme Tokens

Separate token system for clean documentation style:

### Colors

| Token | Value | Description |
|-------|-------|-------------|
| `--attio-bg` | `#FFFFFF` | Page background |
| `--attio-bg-subtle` | `#F9FAFB` | Subtle background |
| `--attio-text-primary` | `#111827` | Primary text |
| `--attio-text-secondary` | `#374151` | Body text |
| `--attio-text-muted` | `#6B7280` | Muted text |
| `--attio-text-dim` | `#9CA3AF` | Dim text |
| `--attio-border` | `#E5E7EB` | Standard border |
| `--attio-border-subtle` | `#F3F4F6` | Subtle border |
| `--attio-hover` | `#F9FAFB` | Hover state |
| `--attio-active-border` | `#111827` | Active indicator |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--attio-font-h1` | `48px` | Page title |
| `--attio-font-h2` | `24px` | Section heading |
| `--attio-font-h3` | `18px` | Subsection |
| `--attio-font-body` | `16px` | Body text |
| `--attio-font-nav` | `14px` | Navigation |
| `--attio-font-small` | `13px` | Small text |
| `--attio-font-toc-header` | `12px` | TOC headers |
| `--attio-font-kbd` | `11px` | Keyboard shortcuts |

### Layout

| Token | Value |
|-------|-------|
| `--attio-sidebar-width` | `240px` |
| `--attio-content-max` | `650px` |
| `--attio-toc-width` | `200px` |
| `--attio-header-height` | `56px` |
| `--attio-column-gap` | `48px` |

---

## Reusability Assessment

### Reusable for Attio-Style Docs

| Token/Component | Status | Notes |
|-----------------|--------|-------|
| Spacing scale | **REUSABLE** | 4px base compatible |
| Shadow tokens | **REUSABLE** | Subtle enough |
| Z-index scale | **REUSABLE** | Standard scale |
| Layout tokens | **REUSABLE** | Container widths work |
| Attio theme tokens | **DIRECT USE** | Already built |
| Transition durations | **REUSABLE** | Standard values |
| `--radius-sm/md` | **REUSABLE** | 4px/8px work well |
| Font families (Inter) | **REUSABLE** | Same base font |
| `LevelCardNotion` | **REUSABLE** | Clean, minimal style |
| `LevelCardMinimal` | **REUSABLE** | Typography-first |

### Conflicts with Bold/Editorial Identity

| Token/Component | Issue | Resolution |
|-----------------|-------|------------|
| `--sanrok-red` | Pure red too intense for docs | Use Attio neutral palette |
| Hero typography | Viewport-filling too dramatic | Scale down to Attio h1 (48px) |
| `--radius-xl/2xl` | Too rounded for docs | Use `--radius-sm/md` |
| Duotone effects | Too stylized | Omit for docs |
| Medieval blackletter | Off-brand | Omit entirely |
| Nous thick borders | Too heavy | Use `--attio-border` |
| `--text-hero` scale | Too large | Use Attio type scale |
| Pill navigation | Too playful | Use Attio sidebar nav |
| Chat bubbles | Wrong context | Omit for docs |

### Potentially Reusable with Adaptation

| Token/Component | Adaptation Needed |
|-----------------|-------------------|
| `--leading-body` (1.6) | Slightly lower than Attio (1.625), usable |
| `BlendedFeatureBox` | Remove corner ornaments, thin border |
| `LevelCardGlass` | Remove glass effect, keep structure |
| Color token architecture | Rename to Attio semantics |
| Component composition | Apply Attio styles to structure |

---

## Gaps & Missing Elements

### Missing for Attio-Style Docs

1. **Navigation Components**
   - Expandable/collapsible sidebar sections
   - Keyboard navigation hints (Cmd+K)
   - Breadcrumb trail
   - "On this page" TOC

2. **Content Components**
   - Callout/admonition boxes (info, warning, tip)
   - API reference tables
   - Code blocks with syntax highlighting
   - Copy button for code
   - Tabbed content switcher
   - Step-by-step numbered lists
   - Version badges

3. **Interactive Elements**
   - Search modal with keyboard shortcuts
   - Feedback widget ("Was this helpful?")
   - Pagination (Previous/Next)
   - External link indicators

4. **Visual Polish**
   - Consistent icon system
   - Light/dark mode toggle
   - Focus states for accessibility
   - Loading states

5. **Spacing Refinements**
   - Attio uses specific content spacing tokens not present:
     - `--attio-h1-mb: 16px`
     - `--attio-h2-mt: 48px`
     - `--attio-nav-item-py: 6px`

---

## Summary Statistics

| Category | Count |
|----------|-------|
| **CSS Files** | 10 |
| **Color Tokens** | 40+ |
| **Typography Tokens** | 25+ |
| **Spacing Tokens** | 17 |
| **Components (Total)** | 37 |
| **Sanrok Components** | 7 |
| **Medieval Components** | 3 |
| **Nous Components** | 3 |
| **Blended Components** | 8 |
| **UI POC Components** | 9 |
| **Attio Components** | 7 |
| **Theme Variants** | 7 |
| **POC Pages** | 19 |

---

## File Locations

```
design-system/
├── docs/README.md
└── src/
    ├── styles/
    │   ├── tokens.css           # Core design tokens
    │   ├── typography.css       # Typography system
    │   ├── index.css            # Main entry + utilities
    │   ├── effects/
    │   │   └── duotone.css      # Duotone image effects
    │   └── themes/
    │       ├── sanrok.css       # Sanrok theme + components
    │       ├── medieval.css     # Medieval theme + components
    │       ├── nous.css         # Nous theme + components
    │       ├── medieval-blend.css
    │       ├── blended-sanrok-dominant.css
    │       └── blend-nous-dominant.css
    └── components/
        ├── sanrok/              # 7 components
        ├── medieval/            # 3 components
        ├── nous/                # 3 components
        ├── blended/             # 8 components
        ├── medieval-blend/
        └── blend/

docs-spa/
├── app/poc/
│   ├── design-system/page.tsx   # Theme switcher POC
│   ├── attio-docs/              # Attio-style docs POC
│   │   ├── page.tsx
│   │   ├── attio-theme.css
│   │   └── components/
│   └── [18 other POC pages]
└── components/ui-poc/           # 9 variant components
```

---

## Recommendations

### For Attio-Style Documentation:

1. **Start with Attio tokens** - Already extracted and ready
2. **Use Inter font family** - Already available in system
3. **Adopt Notion variant styling** - `LevelCardNotion` shows the way
4. **Build missing nav components** - Sidebar, TOC, breadcrumbs
5. **Add callout system** - Info/warning/tip boxes
6. **Implement code blocks** - With copy button and highlighting

### Keep from Existing System:

- Spacing scale (compatible)
- Shadow tokens (subtle enough)
- Z-index scale (standard)
- Transition durations
- Small/medium radius values

### Discard for Docs:

- Hero typography (too dramatic)
- Duotone effects (wrong context)
- Medieval/Nous elements (off-brand)
- Large radius values (too playful)
- Pill navigation (wrong pattern)
