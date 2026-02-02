# Technical Specification - Complete System Architecture

## 📐 System Architecture

### Technology Stack
- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **Language**: TypeScript
- **UI Library**: Radix UI (comprehensive set of primitives)
- **Icons**: Lucide React 0.487.0

### Project Type
- **NOT a Figma project** - This is a React/TypeScript web application
- **NOT accessible via API** - Claude reads code files directly
- **NO tokens required** - Direct file access

---

## 🗂️ Complete File Manifest

### Core Application Files
```
/src/app/App.tsx                                    # Main router with 6 view modes
/src/app/components/DesignSystemNav.tsx             # Left sidebar navigation
```

### Documentation Components (/src/app/components/docs/)
```
index.tsx                # Central export file for all 36 components

badges.tsx               # 4 components: TierBadge, SeverityBadge, StatusBadge, LevelBadge
callouts.tsx             # 2 components: Callout (4 variants), GotchaBox
cards.tsx                # 8 components: LevelCard, ArchitectureCard, InnovationCard,
                         #               InfoBox, DecisionBox, HighlightBox, IronLawBox, QuoteBox
code.tsx                 # 4 components: CodeBlock, InlineCode, AsciiDiagram, Formula
layout.tsx               # 6 components: EssenceBox, SectionHeader, SubsectionHeader,
                         #               TwoColumnGrid, TaxonomySection, PageContainer
lists.tsx                # 3 components: OrderedStepList, UnorderedList, DefinitionList
navigation.tsx           # 5 components: SidebarNavItem, CategoryGroupHeader, OnThisPageLinks,
                         #               Breadcrumb, Sidebar
tables.tsx               # 4 components: ComparisonTable, SeverityTable, MatrixTable, MigrationTable
```

### Example Pages
```
/src/app/components/ComplexityPlaybookRedesign.tsx  # Full complexity documentation page
/src/app/components/CodeSnippetShowcase.tsx         # Code documentation demo
/src/app/components/ComponentShowcase.tsx           # All 36 components demo
/src/app/components/ColorPalettes.tsx               # Color system demo
/src/app/components/TypographySystem.tsx            # Typography demo
/src/app/components/SpacingSystem.tsx               # Spacing demo
/src/app/components/ContentPage.tsx                 # Content page example
/src/app/components/NavigationExperiments.tsx       # Navigation patterns
/src/app/components/HomePageCohesive.tsx            # Homepage example
/src/app/components/ComponentLibrary.tsx            # Component library demo
/src/app/components/DesignPrinciples.tsx            # Design principles page
/src/app/components/DesignExamples.tsx              # Design examples page
```

### Radix UI Components (/src/app/components/ui/)
Full set of 40+ Radix UI primitives available but not actively used in docs system

### Styles
```
/src/styles/theme.css       # Design tokens, CSS variables, color/typography definitions
/src/styles/fonts.css       # Font imports (Playfair Display, Inter)
/src/styles/globals.css     # Global styles
/src/styles/index.css       # Style entry point
```

---

## 🎨 Design Token System (theme.css)

### CSS Custom Properties
```css
/* Light Mode Colors */
--background: #FAFAFA;
--foreground: #171717;
--card: #FFFFFF;
--primary: #E31E24;
--muted: #F5F5F5;
--border: #D4D4D4;

/* Typography */
--font-serif: 'Playfair Display', serif;
--font-sans: 'Inter', sans-serif;

/* Semantic Tokens */
--text-primary: #171717;
--text-secondary: #525252;
--text-tertiary: #737373;
--surface-base: #FAFAFA;
--surface-raised: #FFFFFF;
--border-default: #D4D4D4;

/* Spacing */
--space-section: 5rem;
--space-component: 3rem;
--space-element: 1.5rem;
```

### Tailwind v4 Integration
```css
@theme inline {
  --color-primary: var(--primary);
  --color-background: var(--background);
  /* ... maps CSS vars to Tailwind classes */
}
```

---

## 🧩 Component Interface Specifications

### Type Definitions

#### Severity System
```typescript
type Severity = 'HIGH' | 'MEDIUM' | 'CRITICAL' | 'LOW';
```

#### Status System
```typescript
type Status = 'Documented' | 'Synergistic' | 'Possible' | 'Anti-pattern' | 'Unexplored';
```

#### Tier System
```typescript
type Tier = 1 | 2 | 3 | 4;  // 4 is premium/red
```

#### Level System
```typescript
type Level = number;  // 1-8, where 6-8 are advanced/red
```

#### Effort/Value Metrics
```typescript
type Effort = 'Low' | 'Medium' | 'High';
type Value = 'Low' | 'Medium' | 'High';
```

#### Callout Variants
```typescript
type CalloutVariant = 'info' | 'warning' | 'error' | 'success';
```

#### List Variants
```typescript
type ListVariant = 'default' | 'check' | 'arrow';
```

### Complete Interface Definitions

#### LevelCard
```typescript
interface LevelCardProps {
  level: number;                    // 1-8
  title: string;
  subtitle: string;
  description: string;
  codeExample?: string;
  unlocks: string[];
}
```

#### ArchitectureCard
```typescript
interface ArchitectureCardProps {
  icon?: string;
  title: string;
  subtitle: string;
  asciiDiagram?: string;
  pros: string[];
  cons: string[];
  useCases: string[];
}
```

#### SeverityTable
```typescript
interface SeverityTableProps {
  headers: string[];
  rows: {
    cells: (string | ReactNode)[];
    severity?: Severity;
  }[];
}
```

#### MatrixTable
```typescript
interface MatrixTableProps {
  rowHeaders: string[];
  columnHeaders: string[];
  cells: (Status | null)[][];
}
```

#### GotchaBox
```typescript
interface GotchaBoxProps {
  mistake: string;
  symptom: string;
  recovery: string[];
}
```

#### CodeBlock
```typescript
interface CodeBlockProps {
  code: string;
  language?: string;                // Default: 'javascript'
  filename?: string;
  showLineNumbers?: boolean;
}
```

*(See COMPLETE_COMPONENT_REFERENCE.md for all 36 component interfaces)*

---

## 🎯 Classification Systems

### 1. Complexity Levels (8-Level Progression)
**Used in**: LevelCard, LevelBadge

```
Level 1: Basic/Beginner          (Gray background)
Level 2: Basic+                  (Gray background)
Level 3: Intermediate            (Gray background)
Level 4: Intermediate+           (Gray background)
Level 5: Advanced                (Gray background)
Level 6: Expert                  (RED background) ← Threshold
Level 7: Expert+                 (RED background)
Level 8: Master                  (RED background)
```

**Visual Treatment**:
- Levels 1-5: `bg-neutral-200`, `text-neutral-900`
- Levels 6-8: `bg-[#E31E24]`, `text-white`

**Use Cases**:
- Skill progression models
- Feature complexity tiers
- Learning pathways
- Capability levels

### 2. Innovation Tiers (4-Tier System)
**Used in**: InnovationCard, TierBadge

```
Tier 1: Basic Innovation         (Gray)
Tier 2: Moderate Innovation      (Gray)
Tier 3: Significant Innovation   (Gray)
Tier 4: Breakthrough Innovation  (RED) ← Premium
```

**Visual Treatment**:
- Tiers 1-3: `bg-neutral-100`, `border-neutral-300`
- Tier 4: `bg-[#E31E24]`, `text-white`, `border-[#E31E24]`

**Additional Metrics**:
- Effort: Low/Medium/High (color-coded: green/yellow/red)
- Value: Low/Medium/High (color-coded: green/yellow/red)

### 3. Severity Levels (4-Level System)
**Used in**: SeverityBadge, SeverityTable

```
CRITICAL:  Immediate action required    (Red)
HIGH:      High priority                (Orange)
MEDIUM:    Medium priority              (Yellow)
LOW:       Low priority                 (Green)
```

**Visual Treatment**:
```css
CRITICAL: bg-red-100, text-red-800, border-red-300
HIGH:     bg-orange-100, text-orange-800, border-orange-300
MEDIUM:   bg-yellow-100, text-yellow-800, border-yellow-300
LOW:      bg-green-100, text-green-800, border-green-300
```

**Table Row Treatment**:
```css
CRITICAL: border-l-4 border-red-500, bg-red-50
HIGH:     border-l-4 border-orange-500, bg-orange-50
MEDIUM:   border-l-4 border-yellow-500, bg-yellow-50
LOW:      border-l-4 border-green-500, bg-green-50
```

### 4. Pattern Status (5-State System)
**Used in**: StatusBadge, MatrixTable

```
Documented:   Verified, production-ready     (Green)
Synergistic:  Works well together            (Blue)
Possible:     Potential, needs validation    (Yellow)
Anti-pattern: Avoid, known issues            (Red)
Unexplored:   Unknown, not tested            (Gray)
```

**Use Cases**:
- Pattern compatibility matrices
- Integration support grids
- Feature status tracking
- Best practice validation

---

## 🎨 Color Mapping System

### Status-Based Color Mapping
```typescript
const severityColors = {
  CRITICAL: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
  HIGH:     { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300' },
  MEDIUM:   { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' },
  LOW:      { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' },
};

const statusColors = {
  'Documented':   'bg-green-100 text-green-800 border-green-200',
  'Synergistic':  'bg-blue-100 text-blue-800 border-blue-200',
  'Possible':     'bg-yellow-100 text-yellow-800 border-yellow-200',
  'Anti-pattern': 'bg-red-100 text-red-800 border-red-200',
  'Unexplored':   'bg-neutral-100 text-neutral-600 border-neutral-200',
};

const calloutColors = {
  info:    { bg: 'bg-blue-50', border: 'border-blue-300', icon: 'text-blue-600' },
  warning: { bg: 'bg-amber-50', border: 'border-amber-300', icon: 'text-amber-600' },
  error:   { bg: 'bg-red-50', border: 'border-red-300', icon: 'text-red-600' },
  success: { bg: 'bg-green-50', border: 'border-green-300', icon: 'text-green-600' },
};
```

---

## 🏗️ Layout Patterns

### Page Structures

#### Single Column (PageContainer)
```tsx
<PageContainer maxWidth="lg">
  {/* Content */}
</PageContainer>
```
**Max Widths**: sm=2xl, md=3xl, lg=4xl, xl=5xl

#### Two Column (TwoColumnGrid)
```tsx
<TwoColumnGrid gap="md">
  <div>{/* Left column */}</div>
  <div>{/* Right column */}</div>
</TwoColumnGrid>
```
**Gaps**: sm=gap-4, md=gap-5, lg=gap-8

#### Three Column (Custom Layout)
```tsx
<div className="flex h-screen">
  <aside className="w-64 border-r">{/* Left sidebar */}</aside>
  <main className="flex-1 overflow-y-auto">{/* Main content */}</main>
  <aside className="w-80 border-l">{/* Right sidebar */}</aside>
</div>
```
**Typical Widths**: Left=256px (w-64), Right=320px (w-80) or 420px (w-[420px])

### Section Structure Pattern
```tsx
<section>
  <SectionHeader
    number={1}
    title="Section Title"
    subtitle="Optional subtitle"
  />

  <SubsectionHeader title="Subsection" level={3} />

  {/* Content components */}

  <TwoColumnGrid gap="lg">
    <LevelCard {...} />
    <LevelCard {...} />
  </TwoColumnGrid>
</section>
```

---

## 🔤 Typography Implementation

### Font Loading (fonts.css)
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### Typography Scale Implementation
```tsx
// Massive page title
<h1 className="text-5xl text-neutral-900 tracking-tight leading-tight"
    style={{ fontFamily: 'var(--font-serif)' }}>

// Section with number badge
<div className="flex items-start gap-6">
  <div className="w-12 h-12 bg-[#E31E24] text-white flex items-center justify-center text-xl font-bold">
    {number}
  </div>
  <h2 className="text-4xl md:text-5xl text-neutral-900 tracking-tight"
      style={{ fontFamily: 'var(--font-serif)' }}>
</div>

// Card title
<h3 className="text-2xl text-neutral-900 tracking-tight"
    style={{ fontFamily: 'var(--font-serif)' }}>

// Body text
<p className="text-base text-neutral-600 leading-relaxed font-light">

// Uppercase label
<div className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.25em]">
```

---

## 🔄 State Management

### Local State Patterns
```typescript
// View switching
const [activeSection, setActiveSection] = useState<Section>('colors');
const [showDocComponents, setShowDocComponents] = useState(false);

// Component state
const [copied, setCopied] = useState(false);
const [isOpen, setIsOpen] = useState(true);
const [activeId, setActiveId] = useState<string | null>(null);
```

**No global state management** - All state is local to components

---

## 🎭 Component Composition Patterns

### Slot Pattern (Radix UI)
```tsx
import { Slot } from "@radix-ui/react-slot";

<Slot className={cn(className)}>
  {children}
</Slot>
```

### Variant Pattern (class-variance-authority)
```tsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "...",
        destructive: "...",
      },
    },
  }
);
```

### Conditional Rendering Pattern
```tsx
{showLineNumbers ? (
  <LineNumberedCode />
) : (
  <PlainCode />
)}

{title && <Header title={title} />}

{rows.map((row, idx) => (
  <Row key={idx} {...row} />
))}
```

---

## 📦 Package Dependencies

### Core Dependencies
```json
{
  "react": "18.3.1",
  "react-dom": "18.3.1",
  "vite": "6.3.5",
  "tailwindcss": "4.1.12"
}
```

### UI Libraries
```json
{
  "@radix-ui/react-*": "Various",          // 20+ UI primitives
  "lucide-react": "0.487.0",               // Icons
  "class-variance-authority": "0.7.1",     // Variant management
  "clsx": "2.1.1",                         // Class name composition
  "tailwind-merge": "3.2.0"                // Tailwind class merging
}
```

### Additional Features
```json
{
  "motion": "12.23.24",                    // Animations (Framer Motion successor)
  "recharts": "2.15.2",                    // Charts
  "react-dnd": "16.0.1",                   // Drag and drop
  "sonner": "2.0.3",                       // Toast notifications
  "@mui/material": "7.3.5"                 // Material UI (available but not used)
}
```

---

## 🛠️ Build Configuration

### Vite Config
- React plugin enabled
- Tailwind CSS v4 plugin
- Path alias: `@` → `/src`

### TypeScript
- Strict mode enabled
- React types
- Module resolution: bundler

---

## 🚀 Import Patterns

### Component Imports
```typescript
// From docs system
import { LevelCard, CodeBlock } from '@/app/components/docs';

// From UI library
import { Button } from '@/app/components/ui/button';

// Icons
import { Copy, Check, Info } from 'lucide-react';

// React
import { useState, ReactNode } from 'react';
```

### Path Alias Usage
```typescript
// ✅ Correct
import { Component } from '@/app/components/Component';

// ❌ Incorrect
import { Component } from '../../../app/components/Component';
```

---

## 🔒 Protected/System Files

**DO NOT EDIT**:
- `/src/app/components/figma/ImageWithFallback.tsx` - System component
- `/pnpm-lock.yaml` - Package lock
- `/node_modules/` - Dependencies

**CAN EDIT**:
- All files in `/src/app/components/docs/`
- `/src/styles/theme.css`
- Page components
- Documentation

---

## 📊 Component Usage Statistics

### By Category
- Cards & Boxes: 8 components (22%)
- Layout: 6 components (17%)
- Navigation: 5 components (14%)
- Code: 4 components (11%)
- Tables: 4 components (11%)
- Badges: 4 components (11%)
- Lists: 3 components (8%)
- Callouts: 2 components (6%)

### By Complexity
- Simple (no state): 24 components (67%)
- Medium (local state): 10 components (28%)
- Complex (multiple state): 2 components (5%)

---

## 🎯 Design Decisions & Rationale

### Why Light Code Blocks?
Technical documentation needs maximum readability. Light themes have:
- Better contrast for extended reading
- Easier to print/PDF export
- Standard for documentation sites
- Reduces eye strain in mixed-mode pages

### Why Sharp Corners?
Brutalist aesthetic emphasizes:
- Information over decoration
- Technical, professional appearance
- Clear component boundaries
- High information density

### Why Red for Advanced Levels?
Color psychology and hierarchy:
- Red = Stop, pay attention, important
- Creates clear visual threshold
- Matches "advanced" warning pattern
- Consistent with tier/premium patterns

### Why Serif Headings?
Typography hierarchy:
- Serif = Traditional, authoritative, educational
- Sans-serif = Modern, clean, readable (body)
- Creates strong visual contrast
- Matches academic/technical documentation tradition

---

**Last Updated**: Current session (Complete Technical Specification)
**Version**: 2.0 (Comprehensive Audit)
**Status**: ✅ Production Ready
