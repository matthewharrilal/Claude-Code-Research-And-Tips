# Gallery Structure Decision

**Date:** 2026-01-25
**Status:** DECIDED - Three-Column Layout

---

## The Structure

```
┌──────────────────────────────────────────────────────────────────────────┐
│  LEFT NAV         │  MAIN CONTENT              │  ACTIVITY ZONE          │
│  (Navigation)     │  (Documentation)           │  (Living Context)       │
│  240px fixed      │  flexible (margins)        │  480px fixed            │
│  sticky           │  scrolls                   │  scroll-synced          │
│                   │                            │  resizable 280-900px    │
└──────────────────────────────────────────────────────────────────────────┘
```

### Column Purposes

| Column | Purpose | Content Type |
|--------|---------|--------------|
| **Left Sidebar** | "Where am I?" | Navigation, pattern list, TOC for current page |
| **Main Content** | "What is this?" | The canonical documentation - the pattern itself |
| **Activity Zone** | "What's happening?" | Living context - quotes, cases, connections, questions |

---

## Why Three Columns

1. **Matches premium docs pattern** - Stripe, Tailwind, Vercel all use this
2. **Main content gets full reading width** - No competing for attention
3. **Activity is ambient context** - Visible but supporting, not primary
4. **Clear information hierarchy** - Each column has one job
5. **Familiar to developers** - Reduces learning curve

---

## Behavior Implementation

### Activity Zone Behavior (DECIDED: Option B - Scroll-Synced)

**Implemented:** Activity Zone content highlights based on which main content section is visible.

- GSAP ScrollTrigger detects visible section (40% viewport threshold)
- Activity items have `data-section` attributes matching main content `data-activity`
- Items fade in/out (opacity: 1 → 0.5) based on relevance
- Brushing interaction: hover activity item → highlight related main section
- User can resize Activity Zone (280-900px range, persists to localStorage)

---

## Content Organization (IMPLEMENTED)

### Main Panel: 8 Sections (Research-Backed)

1. **Essence** - 15-word summary (Rust docs rule)
2. **Core Abstraction + Implementation** - Philosophy and code woven together
3. **Design Decisions** - Why [X]? + What this means for you
4. **File Structure** - Complete, copy-paste ready code
5. **Path of a Task** - PostgreSQL-style flow through system
6. **Gotchas** - Concrete problems with numbers and fixes
7. **What's Hard** - Honest about fundamental tensions
8. **When to Use / When Not** - Decision criteria with alternatives

### Activity Zone: 6 Content Types

| Type | Color | Purpose |
|------|-------|---------|
| **Invariant Connection** | Blue | Cross-pattern DNA |
| **Second-Order Effect** | Amber | System properties at scale |
| **Composition Case** | Purple | What combines, what doesn't |
| **Research Frontier** | Red | What's unsolved |
| **War Story** | Green | Real production experiences |
| **Alternative Path** | Gray | Navigation to other options |

See `specs/CONTENT-STRUCTURE.md` for full specifications.

---

## Research That Informed This

- `docs-premium.md` - 11 documentation sites analyzed
- `feeds-timelines.md` - Activity feed patterns
- `dark-aesthetic.md` - Visual treatment
- `component-specimens.md` - UI components to use
- `INSPIRATION-INDEX.md` - Consolidated findings

---

## Implementation Status

All decisions have been implemented in `ralph-mintlify-poc.html`:
- ✅ Three-panel layout with correct sizing
- ✅ Scroll-sync behavior via GSAP ScrollTrigger
- ✅ Brushing interaction (hover activity → highlight main)
- ✅ 8-section main content structure
- ✅ 6 activity zone content types with color coding
- ✅ Resizable Activity Zone with localStorage persistence
