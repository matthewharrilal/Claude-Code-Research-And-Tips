# Gallery - Claude Context

This folder contains the **Ralph Mintlify POC** - a proof of concept for converting markdown documentation into rich, interactive HTML with a three-panel layout.

---

## Start Here

**Before modifying anything, read:**
→ `poc-knowledge/decisions/WHY-THREE-PANELS.md` - The complete reasoning behind the layout

This explains WHY each panel exists, WHAT it's for, and HOW to refine it.

---

## Current State

**Active POC:** `ralph-mintlify-poc.html`
- Three-panel layout redesigned (2026-01-25)
- Activity Zone enlarged to 400px for deeper content
- Main Panel uses 8-section structure (philosophy + implementation woven)
- Activity Zone uses 6 content types (operational intelligence)
- GSAP scroll-sync between content and activity zone

**Status:** Complete redesign implemented, ready for browser testing

---

## Folder Structure

```
gallery/
├── ralph-mintlify-poc.html     # THE POC - start here
├── css/gallery.css             # Shared styles
│
├── poc-knowledge/              # All documentation about this POC
│   ├── README.md                   # START HERE - full journey narrative
│   ├── research/                   # UI research & inspiration
│   ├── decisions/                  # Why we chose this approach
│   ├── specs/                      # Technical specifications
│   └── audits/                     # Bug investigations & fixes
│
└── archive/                    # Old HTML iterations (reference only)
```

---

## Key Files by Task

| If you need to... | Read this |
|-------------------|-----------|
| **Understand WHY the layout** | `poc-knowledge/decisions/WHY-THREE-PANELS.md` ← START HERE |
| **Understand content structure** | `poc-knowledge/specs/CONTENT-STRUCTURE.md` ← NEW |
| Understand the POC vision | `poc-knowledge/README.md` |
| See layout decisions | `poc-knowledge/decisions/STRUCTURE-DECISION.md` |
| Get technical specs | `poc-knowledge/specs/RALPH-MINTLIFY-REDESIGN.md` |
| Understand the audit/fixes | `poc-knowledge/audits/CSS-LAYOUT-AUDIT.md` |
| See production architecture | `poc-knowledge/specs/GALLERY-ARCHITECTURE.md` |

---

## Three-Panel Layout (Updated 2026-01-25)

```
┌──────────┬─────────────────────────────────────────┬────────────────────────────────┐
│ LEFT NAV │           MAIN PANEL                    │      ACTIVITY ZONE             │
│  240px   │           (flexible, largest)           │        (400px)                 │
│  fixed   │           margin-based                  │        fixed                   │
│          │                                         │                                │
│  "Where  │     Philosophy + Implementation         │   Operational Intelligence     │
│   am I?" │     WOVEN TOGETHER                      │   (cross-pattern reasoning)    │
└──────────┴─────────────────────────────────────────┴────────────────────────────────┘
```

**Activity Zone now 400px** (was 280px) to accommodate deeper operational content.

**Critical:** Sidebars are `position: fixed`. Do NOT use CSS Grid on the container - it conflicts with fixed positioning. Use margins on main content instead.

---

## Main Panel Structure (8 Sections)

1. **Essence** - 15-word summary (Rust docs rule)
2. **Core Abstraction + Implementation** - Philosophy and code bound together
3. **Design Decisions** - Why [X]? + What this means for you
4. **File Structure** - Complete, copy-paste ready code
5. **Path of a Task** - PostgreSQL-style flow through system
6. **Gotchas** - Concrete problems with numbers and fixes
7. **What's Hard** - Honest about fundamental tensions
8. **When to Use / When Not** - Decision criteria with alternatives

---

## Activity Zone Content Types (6 Types)

| Type | Color | Purpose |
|------|-------|---------|
| **Invariant Connection** | Blue | Cross-pattern DNA |
| **Second-Order Effect** | Amber | System properties at scale |
| **Composition Case** | Purple | What combines, what doesn't |
| **Research Frontier** | Red | What's unsolved |
| **War Story** | Green | Real production experiences |
| **Alternative Path** | Gray | Navigation to other options |

---

## Responsive Breakpoints

| Viewport | Layout |
|----------|--------|
| >1280px | Full 3-panel |
| 901-1280px | 2-panel (no activity zone) |
| 769-900px | 2-panel, grids stack |
| <768px | Mobile (no sidebars), hamburger menu |

---

## Design Tokens

```css
/* Colors */
--accent: #0D9373;
--accent-light: #10b981;
--bg-base: #ffffff;
--bg-subtle: #fafafa;
--text-primary: #18181b;
--text-muted: #71717a;
--border: #e4e4e7;

/* Layout */
--header-height: 56px;
--left-nav-width: 240px;
--activity-zone-width: 400px;

/* Typography */
Font: Inter (sans), Fira Code (mono)
Base: 16px, line-height 1.7
```

---

## Tech Stack (POC)

- **Tailwind CSS** (CDN) - Utility classes
- **Lucide Icons** - Icon library
- **GSAP + ScrollTrigger** - Scroll-sync animations
- **Google Fonts** - Inter, Fira Code

**Production target:** Astro + shadcn/ui (see `poc-knowledge/specs/GALLERY-ARCHITECTURE.md`)

---

## Known Technical Debt

1. **Hardcoded colors** - Should use CSS custom properties
2. **Magic numbers** - 56px, 240px, 280px repeated without variables
3. **GSAP overhead** - Could be replaced with CSS transitions
4. **CDN dependencies** - Should bundle locally for production

See `poc-knowledge/audits/CSS-LAYOUT-AUDIT.md` for full list.

---

## Future Intent

This POC is a template for converting the entire markdown knowledge base to this format. The `poc-knowledge/` folder documents patterns that can be extracted into reusable infrastructure:

1. **Content transformation pipeline** - Markdown → enriched HTML
2. **Three-panel layout template** - Reusable CSS/JS
3. **Component library** - Orientation box, checkpoints, accordions
4. **Quality validation** - Automated checks for orientation, checkpoints, etc.
