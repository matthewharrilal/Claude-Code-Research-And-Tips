# Gallery Structure Decision

**Date:** 2026-01-25
**Status:** DECIDED - Three-Column Layout

---

## The Structure

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SIDEBAR          │  MAIN CONTENT              │  ACTIVITY ZONE          │
│  (Navigation)     │  (Documentation)           │  (Living Context)       │
│  ~200px           │  ~600-700px                │  ~280-320px             │
│  sticky           │  scrolls                   │  sticky or anchored     │
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

## Behavior Options

### Activity Zone Behavior (TBD)

**Option A: Sticky**
- Same content visible regardless of scroll
- "What's hot" summary approach

**Option B: Anchored/Synced**
- Activity changes based on which main content section is visible
- Contextually relevant

**Option C: Hybrid**
- Top portion sticky (recent/important)
- Bottom portion syncs with content

---

## Content Organization (To Be Fleshed Out)

### Main Content Structure
- Pattern title + maturity badge
- Essence (the one-liner, copy button)
- The Shape (architecture, flow)
- When to Use / When Not
- Variants (tabbed)
- Common Failures
- Connections

### Activity Zone Structure
- Recent quotes (attributed, timestamped)
- Case studies (real numbers)
- Connections discovered
- Open questions
- (Possibly section-anchored)

---

## Research That Informed This

- `docs-premium.md` - 11 documentation sites analyzed
- `feeds-timelines.md` - Activity feed patterns
- `dark-aesthetic.md` - Visual treatment
- `component-specimens.md` - UI components to use
- `INSPIRATION-INDEX.md` - Consolidated findings

---

## Next Steps

1. Flesh out content organization within each column
2. Decide Activity Zone behavior (sticky vs anchored)
3. Define visual treatment for each content type
4. Build prototype with this structure
