# Design System Guide - COMPLETE & ACCURATE

## 🎯 Project Overview

This is a **technical documentation design system** for complexity management, architectural patterns, and knowledge base content. It features **36 specialized components** designed for educational and technical content, NOT generic marketing pages.

### What Makes This Different
- Components designed for **8-level complexity progression models**
- **Severity/tier/status classification systems**
- **Architectural pattern documentation** (pros/cons, ASCII diagrams)
- **Migration path planning** (effort estimation, cost tracking)
- **Troubleshooting content** ("Gotcha" boxes, recovery steps)
- **Formula and code display** with specialized formatting

---

## 📐 Design Philosophy

### Core Aesthetic
**Brutalist Technical Documentation** with selective color highlights:
- **Sharp corners** (minimal border-radius, except badges)
- **High contrast** typography (serif headings, light body)
- **Selective color** (red for advanced/premium, status colors for categorization)
- **Dense information** display (tables, matrices, comparison grids)
- **ASCII art** support (diagrams, formulas)

### Not This:
❌ Rounded, friendly marketing design
❌ Gradient backgrounds everywhere
❌ Playful, colorful cards
❌ Dark mode code blocks

### Is This:
✅ Sharp, technical, information-dense
✅ Selective red accents for hierarchy
✅ Status-based color coding (severity, tiers)
✅ Light code blocks (easier to read in docs)
✅ Brutalist layout (borders, boxes, sharp edges)

---

## 🎨 Color System

### Primary Brand Color
**Red**: `#E31E24`
- Used for: Advanced levels (6-8), Tier 4, primary CTAs, active states, hover borders
- Signifies: Premium, advanced, important, actionable

### Status Color System

#### Severity (CRITICAL → LOW)
- **CRITICAL**: `red-500`, `red-100`, `red-800` (borders, backgrounds, text)
- **HIGH**: `orange-500`, `orange-100`, `orange-800`
- **MEDIUM**: `yellow-500`, `yellow-100`, `yellow-800`
- **LOW**: `green-500`, `green-100`, `green-800`

#### Information Types
- **Info**: `blue-50`, `blue-300`, `blue-600` (Info callouts)
- **Warning**: `amber-50`, `amber-300`, `amber-600` (Warning callouts, gotchas)
- **Error**: `red-50`, `red-300`, `red-600` (Error callouts)
- **Success**: `green-50`, `green-300`, `green-600` (Success callouts)

#### Pattern Status
- **Documented**: Green (verified patterns)
- **Synergistic**: Blue (complementary combinations)
- **Possible**: Yellow (potential patterns)
- **Anti-pattern**: Red (avoid)
- **Unexplored**: Gray (unknown)

### Neutral Palette
- **Background**: `neutral-50` (page), `neutral-100` (sections), `white` (cards)
- **Text**: `neutral-900` (headings), `neutral-700` (body), `neutral-600` (secondary), `neutral-500` (labels)
- **Borders**: `neutral-300` (standard), `neutral-200` (subtle)
- **Code backgrounds**: `#FAFBFC` (very light gray, not dark!)

### Special Backgrounds
- **Dark box**: `#1A1A1A` (Iron Law Box only)
- **Highlight**: `yellow-50` (HighlightBox)
- **Decision**: `#FEF2F2` (DecisionBox - light red)
- **Formula**: `#FEF2F2` (Formula display - light red)

---

## ✍️ Typography System

### Font Families
```css
--font-serif: 'Playfair Display', serif;    /* Headings, emphasis */
--font-sans: 'Inter', sans-serif;           /* Body text */
```

### Font Weights - CURRENT USAGE
**Important**: Many components still use `font-light` (300):
- ✅ `font-light` (300): Body text in cards, descriptions, lists
- ✅ `font-normal` (400): Some body text (being transitioned)
- ✅ `font-medium` (500): Active states, emphasis
- ✅ `font-bold` (700): Labels, badges, numbers

### Typography Scale

#### Page Level
```tsx
// Page Title
<h1 className="text-5xl text-neutral-900 tracking-tight"
    style={{ fontFamily: 'var(--font-serif)' }}>
```

#### Section Level
```tsx
// Major Section (with number badge)
<h2 className="text-4xl md:text-5xl text-neutral-900 tracking-tight"
    style={{ fontFamily: 'var(--font-serif)' }}>
```

#### Subsection Level
```tsx
// Subsection
<h3 className="text-3xl text-neutral-900 tracking-tight"
    style={{ fontFamily: 'var(--font-serif)' }}>
```

#### Card Titles
```tsx
// Card Title
<h3 className="text-2xl text-neutral-900 tracking-tight"
    style={{ fontFamily: 'var(--font-serif)' }}>
```

#### Body Text
```tsx
// Standard body
<p className="text-base text-neutral-600 leading-relaxed font-light">

// Large body (intro)
<p className="text-xl text-neutral-900 leading-relaxed font-light"
   style={{ fontFamily: 'var(--font-serif)' }}>

// Small body (captions)
<p className="text-sm text-neutral-700 font-light">
```

#### Labels & Badges
```tsx
// Uppercase labels
<div className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.25em]">

// Alternative
<span className="text-xs font-bold uppercase tracking-[0.2em]">
```

#### Code
```tsx
// Inline code
<code className="font-mono text-sm text-[#E31E24]">

// Code blocks
<pre className="font-mono text-sm text-neutral-800">

// ASCII diagrams
<pre className="font-mono text-xs text-neutral-700">
```

### Typography Rules

1. **All headings**: Use `Playfair Display` serif, `tracking-tight`
2. **All body text**: Use `Inter` sans-serif, `font-light` (300 weight)
3. **All labels**: `text-[10px]` or `text-xs`, `uppercase`, wide tracking (`0.2em` or `0.25em`)
4. **All code**: Monospace font, inline code is RED (#E31E24)
5. **Contrast**: `neutral-900` headings, `neutral-600`/`neutral-700` body

---

## 📏 Spacing System

### Border Radius (Minimal/Brutalist)
Most components use **NO border radius** (sharp corners):
- Cards: No rounding (brutalist)
- Tables: `rounded-xl` only on outer container
- Boxes: No rounding
- Badges: `rounded-full` (pills)
- Some elements: `rounded-lg`, `rounded-xl` (exceptions)

**Philosophy**: Sharp edges = technical, brutalist aesthetic

### Component Spacing
```css
/* Section gaps */
margin-bottom: 4rem;     /* mb-16 between major sections */

/* Component gaps */
margin-bottom: 3rem;     /* mb-12 between components */

/* Element gaps */
margin-bottom: 1.5rem;   /* mb-6 within components */

/* List spacing */
space-y-2               /* 0.5rem between list items */
space-y-4               /* 1rem between step items */
space-y-6               /* 1.5rem between definitions */
```

### Padding Standards
```css
/* Large cards */
padding: 2rem;          /* p-8 */

/* Medium cards */
padding: 1.5rem;        /* p-6 */

/* Small cards/badges */
padding: 1rem;          /* p-4 */

/* Table cells */
padding: 1rem 1.5rem;   /* py-4 px-6 or py-3 px-4 */
```

---

## 🧩 Component Architecture

### 36 Components in 8 Categories

1. **Cards & Boxes** (8): LevelCard, ArchitectureCard, InnovationCard, InfoBox, DecisionBox, HighlightBox, IronLawBox, QuoteBox
2. **Callouts** (2): Callout (4 variants), GotchaBox
3. **Tables** (4): ComparisonTable, SeverityTable, MatrixTable, MigrationTable
4. **Code** (4): CodeBlock, InlineCode, AsciiDiagram, Formula
5. **Lists** (3): OrderedStepList, UnorderedList (3 variants), DefinitionList
6. **Layout** (6): EssenceBox, SectionHeader, SubsectionHeader, TwoColumnGrid, TaxonomySection, PageContainer
7. **Badges** (4): TierBadge, SeverityBadge, StatusBadge, LevelBadge
8. **Navigation** (5): SidebarNavItem, CategoryGroupHeader, OnThisPageLinks, Breadcrumb, Sidebar

**See**: `/COMPLETE_COMPONENT_REFERENCE.md` for full details on each component

---

## 🔢 Level/Tier System

### Complexity Levels (1-8)
Used in: LevelCard, LevelBadge

**Levels 1-5**: Basic/Intermediate
- Gray background (`neutral-200`)
- Gray text (`neutral-900`)
- Standard priority

**Levels 6-8**: Advanced/Expert
- **Red background** (`#E31E24`)
- **White text**
- High priority/premium

### Innovation Tiers (1-4)
Used in: InnovationCard, TierBadge

**Tiers 1-3**: Standard innovations
- Gray background
- Standard border

**Tier 4**: Premium/breakthrough
- **Red background** (`#E31E24`)
- **White text**
- Premium classification

---

## 📊 Pattern Usage Guidelines

### When to Use Each Component

#### LevelCard
- Progression models (beginner → expert)
- Complexity scaling (simple → complex)
- Feature tiers (basic → premium)
- Skill levels

#### ArchitectureCard
- Design pattern documentation
- System architecture options
- Technical approach comparisons
- Framework evaluations

#### GotchaBox
- Common mistakes
- Debugging guides
- Troubleshooting steps
- Error recovery

#### SeverityTable
- Risk assessments
- Priority matrices
- Issue tracking
- Alert classification

#### MatrixTable
- Pattern compatibility
- Feature support grids
- Integration matrices
- Status overviews

#### EssenceBox
- Page summaries (must be ~15 words)
- TL;DR sections
- Key takeaways

#### IronLawBox
- Absolute rules
- Non-negotiable constraints
- Critical warnings
- Universal principles

---

## 💻 Code Display Patterns

### Light Theme Code (NOT Dark!)
```tsx
<CodeBlock
  code="const example = 'light theme';"
  language="javascript"
  filename="example.js"
/>
```

**Styling**:
- White/light gray background (`#FAFBFC`)
- Dark text (`neutral-800`)
- Light border (`neutral-200`)
- Copy button (hover to show)

### Inline Code (RED)
```tsx
<InlineCode>variable</InlineCode>
```

**Styling**:
- Background: `#FAFBFC`
- **Text color: RED** (`#E31E24`)
- Border: `neutral-200`
- Creates strong visual emphasis

### ASCII Diagrams
```tsx
<AsciiDiagram title="Architecture">
{`
  ┌─────────┐
  │ Service │
  └────┬────┘
       │
  ┌────▼────┐
  │  Store  │
  └─────────┘
`}
</AsciiDiagram>
```

**Features**:
- Monospace font
- Preserves spacing
- Light background
- Optional title

---

## 🎛️ State & Interaction Patterns

### Hover Effects
```tsx
// Cards
className="border border-neutral-300 hover:border-[#E31E24] transition-colors"

// Navigation items
className="hover:bg-neutral-200/50 hover:text-neutral-900 transition-colors"

// Tables
className="hover:bg-neutral-50 transition-colors"
```

### Active States
```tsx
// Navigation
className={active
  ? 'bg-[#E31E24]/10 text-[#E31E24] font-medium border-l border-[#E31E24]'
  : 'text-neutral-600 font-light border-l border-transparent'
}

// Table rows (severity)
className={`border-l-4 ${severityColor}`}
```

### Copy Buttons
```tsx
const [copied, setCopied] = useState(false);

<button onClick={handleCopy}>
  {copied ? <Check className="text-green-600" /> : <Copy className="text-neutral-600" />}
</button>
```

---

## 📦 Dependencies & Icons

### Icon Library
**All icons from**: `lucide-react`

**Commonly used**:
- `Info`, `AlertTriangle`, `AlertCircle`, `CheckCircle`, `Zap` (callouts)
- `Copy`, `Check` (code blocks)
- `ChevronRight`, `ChevronDown` (navigation)
- `ArrowLeft` (back buttons)

### UI Library
**Radix UI** components available in `/src/app/components/ui/`:
- Accordion, Alert Dialog, Checkbox, Dialog, Dropdown Menu
- Popover, Select, Tabs, Tooltip, etc.

### Other Libraries
- `motion/react` - Animations (if needed)
- `recharts` - Charts/graphs
- `react-dnd` - Drag and drop
- Material UI components available (but not used in docs system)

---

## 🗂️ File Structure

```
/src
  /app
    App.tsx                               # Main router
    /components
      /docs                               # 36 documentation components
        index.tsx                         # All exports
        badges.tsx                        # 4 badge components
        callouts.tsx                      # 2 callout components
        cards.tsx                         # 8 card/box components
        code.tsx                          # 4 code components
        layout.tsx                        # 6 layout components
        lists.tsx                         # 3 list components
        navigation.tsx                    # 5 navigation components
        tables.tsx                        # 4 table components

      ComplexityPlaybookRedesign.tsx      # Example: Full doc page
      CodeSnippetShowcase.tsx             # Example: Code docs page
      ComponentShowcase.tsx               # Demo of all 36 components

      ColorPalettes.tsx                   # Color system demo
      TypographySystem.tsx                # Typography demo
      SpacingSystem.tsx                   # Spacing demo
      DesignSystemNav.tsx                 # Main navigation

      /ui                                 # Radix UI components
      /figma                              # Protected system files

  /styles
    theme.css                             # Design tokens
    fonts.css                             # Font imports
    globals.css                           # Global styles
    index.css                             # Style entry point
```

---

## 🚀 Quick Start Patterns

### Basic Documentation Page
```tsx
import {
  PageContainer,
  EssenceBox,
  SectionHeader,
  LevelCard,
  CodeBlock
} from '@/app/components/docs';

export function MyDocPage() {
  return (
    <PageContainer maxWidth="lg">
      <EssenceBox summary="15-word summary of this entire page goes right here." />

      <SectionHeader
        number={1}
        title="Getting Started"
        subtitle="Introduction to the concepts"
      />

      <LevelCard
        level={1}
        title="Basic Usage"
        subtitle="Simple Integration"
        description="Start with the simplest approach..."
        unlocks={['Basic features', 'Core functionality']}
      />

      <CodeBlock
        filename="example.ts"
        code="const example = 'hello world';"
      />
    </PageContainer>
  );
}
```

### Architecture Documentation
```tsx
<ArchitectureCard
  icon="🏗️"
  title="Microservices Architecture"
  subtitle="Distributed System Pattern"
  asciiDiagram={`
    ┌─────────┐    ┌─────────┐
    │Service A│────│Service B│
    └─────────┘    └─────────┘
  `}
  pros={[
    'Independent scaling',
    'Technology flexibility',
    'Fault isolation'
  ]}
  cons={[
    'Network complexity',
    'Distributed transactions',
    'Operational overhead'
  ]}
  useCases={[
    'Large-scale systems',
    'Multi-team development'
  ]}
/>
```

### Troubleshooting Guide
```tsx
<GotchaBox
  mistake="Forgetting to await async functions"
  symptom="Data appears undefined even after fetch"
  recovery={[
    'Add await keyword before async function call',
    'Ensure parent function is marked async',
    'Check for proper error handling'
  ]}
/>
```

---

## ⚠️ Important Notes

### What This System IS:
✅ Technical documentation framework
✅ Complexity progression models
✅ Architectural pattern library
✅ Educational content structure
✅ Brutalist, information-dense design

### What This System is NOT:
❌ Marketing landing pages
❌ E-commerce product pages
❌ Social media content
❌ Colorful, rounded, playful design
❌ Dark mode focused

### Protected Files
**DO NOT EDIT**:
- `/src/app/components/figma/ImageWithFallback.tsx`
- `/pnpm-lock.yaml`

### Key Differences from Generic Systems
1. **Specialized components** (not generic FeatureCard/PricingCard)
2. **Level/tier systems** (numbered progression with red highlights)
3. **Severity classification** (CRITICAL/HIGH/MEDIUM/LOW)
4. **Light code blocks** (better for documentation)
5. **ASCII diagram support** (technical diagrams)
6. **Sharp corners** (brutalist aesthetic)
7. **Status matrices** (pattern compatibility grids)

---

## 🎯 Design Tokens Reference

### Quick Copy-Paste
```css
/* Brand */
--primary-red: #E31E24;

/* Neutrals */
--neutral-900: #171717;   /* Headings */
--neutral-700: #404040;   /* Body text */
--neutral-600: #525252;   /* Secondary text */
--neutral-300: #D4D4D4;   /* Borders */
--neutral-100: #F5F5F5;   /* Backgrounds */
--neutral-50: #FAFAFA;    /* Page background */

/* Backgrounds */
--code-bg: #FAFBFC;
--dark-bg: #1A1A1A;       /* Iron Law only */
--highlight-bg: #FEF2F2;  /* Light red */

/* Typography */
--font-serif: 'Playfair Display', serif;
--font-sans: 'Inter', sans-serif;
```

---

**Last Updated**: Current session (Complete Audit)
**Version**: 2.0 (Accurate Component Inventory)
**Total Components**: 36 (verified)
