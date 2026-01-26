# Claude Code Knowledge Base - Documentation SPA

A modern, three-panel documentation application built with Next.js 15, featuring 75 comprehensive Claude Code orchestration guides.

## Features

### Layout System
- **Three-Panel Layout**: Left navigation, center content, right Activity Zone
- **Resizable Panels**: Drag handles on both navigation and Activity Zone
- **Collapsible Navigation**: Icon-only mode when collapsed below 120px
- **Responsive Design**: Adapts to different viewport sizes

### Navigation
- **13 Category Groups**: Core Guides, Architecture, Mastery, Principles, Taxonomies, Comparisons, Transformations, Pattern Combinations, Reference, Grammar, Technical, Ecosystem, Frontier
- **75 Synthesis Pages**: Complete extraction from HTML source files
- **Filter Search**: Quick filtering of navigation items
- **Active State Indicators**: Clean left border accent on current page
- **Page Sections TOC**: On-this-page navigation for each document

### Content
- **HTML Content Rendering**: Extracted from crafted HTML files
- **Activity Zone Integration**: Operational Intelligence cards with scroll sync
- **Copy Button Feedback**: Animated success state on code blocks
- **Typography System**: 4px baseline grid with cohesive hierarchy

### Micro-Interactions (Framer Motion)
- **Spring Animations**: Snappy (500/30), bouncy (300/20), gentle (200/25)
- **Hover Effects**: Subtle lift on cards, scale on nav items
- **Active Indicators**: Animated height transitions
- **Reduced Motion Support**: Respects user preferences

## Project Structure

```
docs-spa/
├── app/
│   ├── (docs)/
│   │   ├── layout.tsx          # Three-panel layout wrapper
│   │   └── synthesis/[slug]/   # Dynamic page routes
│   ├── globals.css             # Design tokens & component styles
│   └── page.tsx                # Landing redirect
├── components/
│   ├── activity-zone/          # Right panel components
│   │   ├── ActivityItem.tsx    # Individual insight cards
│   │   └── ActivityItemsHydrator.tsx
│   ├── content/                # Content rendering components
│   │   ├── CopyButtonHandler.tsx # Copy button with feedback
│   │   └── HighlightableSection.tsx
│   ├── layout/                 # Layout components
│   │   ├── ThreePanelLayout.tsx
│   │   ├── LeftNavResizer.tsx  # Drag handle for left panel
│   │   └── Resizer.tsx         # Drag handle for right panel
│   └── navigation/             # Left sidebar components
│       ├── GrandNav.tsx        # Main navigation
│       ├── NavCategory.tsx     # Expandable categories
│       ├── NavItem.tsx         # Individual nav links
│       ├── PageSections.tsx    # On-this-page TOC
│       └── CollapsedNav.tsx    # Icon-only collapsed view
├── content/
│   ├── navigation.json         # Navigation structure (13 categories)
│   └── pages/                  # Extracted HTML content (75 pages)
│       ├── master-playbook/
│       │   ├── content.html
│       │   └── activity.json
│       └── ...
├── lib/
│   ├── content.ts              # Content loading utilities
│   ├── store/                  # Zustand state management
│   │   └── navigation-store.ts # Panel widths, collapse state
│   └── hooks/                  # Custom React hooks
│       └── useScrollSync.ts    # Scroll-activity sync
└── scripts/
    └── extract-html-content.ts # HTML extraction script
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Extract HTML content (if needed)
npx tsx scripts/extract-html-content.ts all
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Design System

### Typography Hierarchy
| Element | Size | Weight | Use Case |
|---------|------|--------|----------|
| H1 Page Title | 24px | 700 | Page headers |
| H2 Section | 20px | 600 | Major sections |
| H3 Subsection | 16px | 600 | Subsections |
| Body | 15px | 400 | Content |
| Nav Items | 15px | 500-600 | Navigation |
| Labels | 11px | 600 | UPPERCASE labels |

### Color System
| Token | Value | Use |
|-------|-------|-----|
| `--color-accent` | #059669 | Primary accent (teal) |
| `--color-text-primary` | #1a1a1a | Main text |
| `--color-text-secondary` | #4b5563 | Muted text |
| `--color-border` | #e5e7eb | Borders |
| `--color-bg-base` | #f8fafc | Page background |

### Spring Configs
```typescript
const springs = {
  snappy: { type: 'spring', stiffness: 500, damping: 30 },
  bouncy: { type: 'spring', stiffness: 300, damping: 20 },
  gentle: { type: 'spring', stiffness: 200, damping: 25 },
}
```

## Key Dependencies
- **Next.js 15**: App router, server components
- **Framer Motion**: Animations and gestures
- **Zustand**: State management
- **Lucide React**: Icons
- **JSDOM**: HTML parsing for extraction

## Session Progress (2026-01-26)

### Completed
- [x] Three-panel layout with resizable sidebars
- [x] Left navigation with 13 categories, 75 pages
- [x] Collapsible navigation (icon-only mode)
- [x] Activity Zone with insight cards
- [x] Copy button feedback animation
- [x] Typography system (4px baseline grid)
- [x] HTML content extraction (75 pages)
- [x] Comprehensive UI/UX audit (all pass)

### Pending
- [ ] Replace dangerouslySetInnerHTML with html-react-parser
- [ ] Implement LazyMotion for bundle optimization
- [ ] Add page transition animations
- [ ] Fix Activity Zone color collisions
