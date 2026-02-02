# Complete Component Reference - ACTUAL INVENTORY

## ⚠️ CRITICAL: This is the REAL component list

The actual components in this project are **DIFFERENT** from generic documentation components. These are **highly specialized** for technical documentation, complexity management, and architectural patterns.

---

## Total: 36 Components Across 8 Categories

### 1. Cards & Boxes (8 components)
**File**: `/src/app/components/docs/cards.tsx`

#### LevelCard
**Purpose**: Display complexity/progression levels (1-8 scale)
```tsx
interface LevelCardProps {
  level: number;                    // 1-8, where 6-8 are highlighted in red
  title: string;                    // e.g., "Simple Prompt"
  subtitle: string;                 // e.g., "Zero-Shot Execution"
  description: string;              // Detailed explanation
  codeExample?: string;             // Optional code snippet
  unlocks: string[];                // What this level enables
}
```
**Styling**:
- Levels 1-5: Gray background
- Levels 6-8: Red (#E31E24) background - "advanced" levels
- Hover border transitions to red
- Serif headings, light body text

#### ArchitectureCard
**Purpose**: Show architectural patterns with pros/cons
```tsx
interface ArchitectureCardProps {
  icon?: string;                    // Emoji or icon
  title: string;                    // Pattern name
  subtitle: string;                 // Pattern type
  asciiDiagram?: string;            // ASCII art diagram
  pros: string[];                   // Advantages
  cons: string[];                   // Disadvantages
  useCases: string[];               // When to use
}
```
**Features**:
- Two-column pros/cons layout
- Green (+) for pros, Red (−) for cons
- ASCII diagram section with monospace font
- Border hover effects

#### InnovationCard
**Purpose**: Display tiered innovations/features
```tsx
interface InnovationCardProps {
  tier: 1 | 2 | 3 | 4;             // Tier 4 is highlighted in red
  number: number;                   // Sequential number
  title: string;
  description: string;
  codeExample?: string;
  effort: 'Low' | 'Medium' | 'High';
  value: 'Low' | 'Medium' | 'High';
}
```
**Features**:
- Tier badges (1-3 gray, 4 red)
- Effort/value metrics with color coding
- Code example section

#### InfoBox
**Purpose**: Informational callout
```tsx
interface InfoBoxProps {
  title: string;
  children: ReactNode;
}
```
**Styling**: Blue background, minimal design

#### DecisionBox
**Purpose**: Explain design decisions and reasoning
```tsx
interface DecisionBoxProps {
  topic: string;                    // What decision is being made
  reasoning: string;                // Why this decision
  takeaway: string;                 // What user should do
}
```
**Features**:
- Red accent border
- "WHY [TOPIC]?" header in uppercase serif
- Nested takeaway box
- Light red background

#### HighlightBox
**Purpose**: Emphasize key statements
```tsx
interface HighlightBoxProps {
  children: ReactNode;
}
```
**Styling**: Yellow background, centered text, serif font

#### IronLawBox
**Purpose**: Display absolute rules/constraints
```tsx
interface IronLawBoxProps {
  children: ReactNode;
}
```
**Features**:
- Dark background (#1A1A1A)
- White text
- Warning emoji (⚠️)
- "Iron Law" header
- Used for non-negotiable constraints

#### QuoteBox
**Purpose**: Display quotes with attribution
```tsx
interface QuoteBoxProps {
  quote: string;
  attribution: string;
}
```
**Styling**: Left border, serif quote text, citation

---

### 2. Callouts & Alerts (2 components)
**File**: `/src/app/components/docs/callouts.tsx`

#### Callout
**Purpose**: Contextual alerts with icons
```tsx
interface CalloutProps {
  variant?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: ReactNode;
}
```
**Variants**:
- `info`: Blue, Info icon
- `warning`: Amber, AlertTriangle icon
- `error`: Red, AlertCircle icon
- `success`: Green, CheckCircle icon

**Icons**: From lucide-react

#### GotchaBox
**Purpose**: Common mistakes and recovery steps
```tsx
interface GotchaBoxProps {
  mistake: string;                  // What went wrong
  symptom: string;                  // How to recognize it
  recovery: string[];               // Step-by-step fix
}
```
**Features**:
- Orange theme
- Zap icon
- Symptom section (boxed)
- Numbered recovery steps
- Designed for troubleshooting docs

---

### 3. Tables (4 components)
**File**: `/src/app/components/docs/tables.tsx`

#### ComparisonTable
**Purpose**: Standard comparison table
```tsx
interface ComparisonTableProps {
  headers: string[];
  rows: (string | ReactNode)[][];
}
```
**Features**: Basic table with hover rows

#### SeverityTable
**Purpose**: Tables with color-coded severity levels
```tsx
interface SeverityTableProps {
  headers: string[];
  rows: {
    cells: (string | ReactNode)[];
    severity?: 'HIGH' | 'MEDIUM' | 'CRITICAL' | 'LOW';
  }[];
}
```
**Features**:
- Left border color based on severity
- Background tints
- Critical=red, High=orange, Medium=yellow, Low=green

#### MatrixTable
**Purpose**: Status matrix/grid
```tsx
interface MatrixTableProps {
  rowHeaders: string[];
  columnHeaders: string[];
  cells: (MatrixStatus | null)[][];
}

type MatrixStatus = 'Documented' | 'Synergistic' | 'Possible' | 'Anti-pattern' | 'Unexplored';
```
**Features**:
- Status badges in cells
- Color-coded by status
- Used for pattern compatibility matrices

#### MigrationTable
**Purpose**: Show migration paths between systems
```tsx
interface MigrationTableProps {
  rows: {
    from: string;
    to: string;
    trigger: string;
    effort: 'Low' | 'Medium' | 'High';
    cost: string;
  }[];
}
```
**Features**:
- Effort badges (color-coded)
- Monospace cost display
- Migration trigger column

---

### 4. Code & Technical (4 components)
**File**: `/src/app/components/docs/code.tsx`

#### CodeBlock
**Purpose**: Multi-line code with syntax
```tsx
interface CodeBlockProps {
  code: string;
  language?: string;                // Default: 'javascript'
  filename?: string;
  showLineNumbers?: boolean;
}
```
**Features**:
- Copy button (hover to show)
- File header with language badge
- Optional line numbers
- Check icon on successful copy
- Light theme (not dark!)

#### InlineCode
**Purpose**: Inline code snippets
```tsx
interface InlineCodeProps {
  children: ReactNode;
}
```
**Styling**:
- Light gray background
- Red text (#E31E24)
- Border
- Monospace font

#### AsciiDiagram
**Purpose**: Display ASCII art diagrams
```tsx
interface AsciiDiagramProps {
  children: string;
  title?: string;
}
```
**Features**:
- Monospace font
- Light background
- Optional title header
- Preserves spacing/alignment

#### Formula
**Purpose**: Display mathematical formulas
```tsx
interface FormulaProps {
  children: ReactNode;
  label?: string;
}
```
**Styling**:
- Centered display
- Red accent background
- Serif font for elegance
- Optional label above

---

### 5. Lists & Sequences (3 components)
**File**: `/src/app/components/docs/lists.tsx`

#### OrderedStepList
**Purpose**: Numbered tutorial/procedure steps
```tsx
interface OrderedStepListProps {
  steps: ReactNode[];
}
```
**Features**:
- Red circular number badges
- Generous spacing
- Clean step layout

#### UnorderedList
**Purpose**: Bullet/check/arrow lists
```tsx
interface UnorderedListProps {
  items: ReactNode[];
  variant?: 'default' | 'check' | 'arrow';
}
```
**Variants**:
- `default`: Bullet (•), neutral gray
- `check`: Checkmark (✓), green
- `arrow`: Arrow (→), red

#### DefinitionList
**Purpose**: Term/definition pairs
```tsx
interface DefinitionListProps {
  items: {
    term: string;
    definition: ReactNode;
  }[];
}
```
**Features**:
- Left border accent
- Serif terms
- Light definitions

---

### 6. Layout Components (6 components)
**File**: `/src/app/components/docs/layout.tsx`

#### EssenceBox
**Purpose**: 15-word page summary
```tsx
interface EssenceBoxProps {
  summary: string;                  // Must be ~15 words
}
```
**Features**:
- "Essence (15 words)" label
- Large serif text
- Red accent line
- Top of page placement

#### SectionHeader
**Purpose**: Numbered major sections
```tsx
interface SectionHeaderProps {
  number: number;
  title: string;
  subtitle?: string;
}
```
**Features**:
- Red numbered box
- Huge serif heading (text-4xl/5xl)
- Bottom border
- Optional subtitle

#### SubsectionHeader
**Purpose**: Smaller section breaks
```tsx
interface SubsectionHeaderProps {
  title: string;
  level?: 3 | 4;                    // Heading level
}
```
**Styling**: Gray accent line, serif heading

#### TwoColumnGrid
**Purpose**: Responsive 2-column layout
```tsx
interface TwoColumnGridProps {
  children: ReactNode;
  gap?: 'sm' | 'md' | 'lg';
}
```

#### TaxonomySection
**Purpose**: Categorized content sections
```tsx
interface TaxonomySectionProps {
  category: string;
  description: string;
  children: ReactNode;
}
```
**Features**:
- Category badge
- Description
- Divider line

#### PageContainer
**Purpose**: Max-width container
```tsx
interface PageContainerProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}
```
**Widths**: sm=2xl, md=3xl, lg=4xl, xl=5xl

---

### 7. Badges & Indicators (4 components)
**File**: `/src/app/components/docs/badges.tsx`

#### TierBadge
**Purpose**: Innovation tier indicators
```tsx
interface TierBadgeProps {
  tier: 1 | 2 | 3 | 4;              // Tier 4 is red
}
```
**Styling**: Tiers 1-3 gray, Tier 4 red

#### SeverityBadge
**Purpose**: Severity level indicators
```tsx
interface SeverityBadgeProps {
  severity: 'HIGH' | 'MEDIUM' | 'CRITICAL' | 'LOW';
}
```
**Colors**: CRITICAL=red, HIGH=orange, MEDIUM=yellow, LOW=green

#### StatusBadge
**Purpose**: Pattern/feature status
```tsx
type Status = 'Documented' | 'Synergistic' | 'Possible' | 'Anti-pattern' | 'Unexplored';

interface StatusBadgeProps {
  status: Status;
}
```
**Colors**:
- Documented: Green
- Synergistic: Blue
- Possible: Yellow
- Anti-pattern: Red
- Unexplored: Gray

#### LevelBadge
**Purpose**: Numeric level indicators
```tsx
interface LevelBadgeProps {
  level: number;                    // 0-7, where 5+ is red
}
```
**Features**: Square badges, levels 5-7 highlighted red

---

### 8. Navigation & Structure (5 components)
**File**: `/src/app/components/docs/navigation.tsx`

#### SidebarNavItem
**Purpose**: Sidebar navigation links
```tsx
interface SidebarNavItemProps {
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}
```
**Features**:
- Active state (red accent)
- Hover effects
- Left border indicator

#### CategoryGroupHeader
**Purpose**: Collapsible navigation groups
```tsx
interface CategoryGroupHeaderProps {
  label: string;
  children: ReactNode;
  defaultOpen?: boolean;
}
```
**Features**:
- Chevron icons
- Collapsible
- Uppercase labels

#### OnThisPageLinks
**Purpose**: In-page table of contents
```tsx
interface OnThisPageLinksProps {
  links: {
    label: string;
    id: string;
    level?: 2 | 3;                  // Indentation level
  }[];
}
```
**Features**:
- Smooth scroll
- Active tracking
- Nested indentation
- Sticky positioning

#### Breadcrumb
**Purpose**: Breadcrumb navigation
```tsx
interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}
```
**Features**:
- ChevronRight separators
- Last item bold
- Click handlers

#### Sidebar
**Purpose**: Sidebar container
```tsx
interface SidebarProps {
  children: ReactNode;
}
```
**Styling**:
- 256px width
- Sticky top-0
- Full height
- Light gray background

---

## Icon Usage

**All icons from**: `lucide-react`

### Icons Used in Components:
- **Callouts**: Info, AlertTriangle, AlertCircle, CheckCircle, Zap
- **Code**: Copy, Check
- **Navigation**: ChevronRight, ChevronDown, ArrowLeft
- **Page Templates**: BookOpen, Layers, Zap, Link2, Sparkles, TrendingUp, Target, Terminal, Code2, FileCode, Type

---

## Design System Tokens

### Colors in Components:

#### Primary/Brand
- `#E31E24` - Red (primary brand, CTAs, advanced levels)

#### Status Colors
- Green: `green-600`, `green-100`, `green-800`
- Yellow: `yellow-600`, `yellow-100`, `yellow-800`
- Orange: `orange-600`, `orange-100`, `orange-800`
- Red: `red-600`, `red-100`, `red-800`
- Blue: `blue-600`, `blue-100`, `blue-800`

#### Neutrals
- Gray backgrounds: `neutral-50`, `neutral-100`, `#FAFBFC`
- Text: `neutral-600`, `neutral-700`, `neutral-900`
- Borders: `neutral-200`, `neutral-300`

#### Special
- Dark mode: `#1A1A1A` (Iron Law Box background)

### Typography Classes

#### Headings (Serif)
- `font-serif` with `Playfair Display`
- Sizes: `text-5xl`, `text-4xl`, `text-3xl`, `text-2xl`, `text-xl`

#### Body (Sans)
- `font-light` (300 weight) - Still used in components
- Monospace: `font-mono` for code

#### Labels
- `text-[10px]` uppercase, `tracking-[0.2em]` or `tracking-[0.25em]`
- Font weight: `font-bold`

### Border Radius
- None (brutalist): Most components use sharp corners
- Some use: `rounded-xl`, `rounded-full` (badges)

---

## Import Statement

```tsx
import {
  // Cards & Boxes
  LevelCard,
  ArchitectureCard,
  InnovationCard,
  InfoBox,
  DecisionBox,
  HighlightBox,
  IronLawBox,
  QuoteBox,

  // Callouts
  Callout,
  GotchaBox,

  // Tables
  ComparisonTable,
  SeverityTable,
  MatrixTable,
  MigrationTable,

  // Code
  CodeBlock,
  InlineCode,
  AsciiDiagram,
  Formula,

  // Lists
  OrderedStepList,
  UnorderedList,
  DefinitionList,

  // Layout
  EssenceBox,
  SectionHeader,
  SubsectionHeader,
  TwoColumnGrid,
  TaxonomySection,
  PageContainer,

  // Badges
  TierBadge,
  SeverityBadge,
  StatusBadge,
  LevelBadge,

  // Navigation
  SidebarNavItem,
  CategoryGroupHeader,
  OnThisPageLinks,
  Breadcrumb,
  Sidebar,
} from '@/app/components/docs';
```

---

## Key Design Patterns

### 1. Levels/Tiers System
- Levels 1-5: Gray (basic)
- Levels 6-8 (or Tier 4): Red (#E31E24) - Advanced/Premium

### 2. Severity System
- CRITICAL: Red
- HIGH: Orange
- MEDIUM: Yellow
- LOW: Green

### 3. Status System
- Documented: Green (verified)
- Synergistic: Blue (complementary)
- Possible: Yellow (potential)
- Anti-pattern: Red (avoid)
- Unexplored: Gray (unknown)

### 4. Typography Hierarchy
- Page title: `text-5xl` serif
- Section: `text-4xl` serif with number badge
- Subsection: `text-3xl` or `text-2xl` serif
- Card titles: `text-2xl` serif
- Labels: `text-[10px]` uppercase, wide tracking
- Body: `text-base` or `text-sm`, `font-light`

### 5. Code Display
- Light theme (NOT dark) for code blocks
- Red inline code highlights
- Monospace ASCII diagrams
- Copy buttons appear on hover

---

## Usage Context

These components are designed for:
- **Technical documentation** (API docs, architecture guides)
- **Complexity management** (8-level progression models)
- **Pattern libraries** (architectural patterns, anti-patterns)
- **Migration guides** (path planning, effort estimation)
- **Educational content** (step-by-step tutorials, gotchas)
- **Decision frameworks** (comparison matrices, trade-offs)

They are NOT generic marketing/landing page components.

---

**Last Updated**: Current session (Comprehensive Audit)
**Total Components**: 36
**Component Files**: 8 (cards, callouts, tables, code, lists, layout, badges, navigation)
