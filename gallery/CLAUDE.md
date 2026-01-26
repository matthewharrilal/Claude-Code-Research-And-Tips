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
- Activity Zone enlarged to 480px (resizable 280-900px) for deeper content
- Main Panel uses 8-section structure (philosophy + implementation woven)
- Activity Zone uses 16 content types (6 foundational + 10 generative)
- GSAP scroll-sync between content and activity zone
- Generative content methodology documented in CONTENT-STRUCTURE.md

**Status:** Generative content implemented, ready for browser testing

---

## Folder Structure

```
gallery/
├── ralph-mintlify-poc.html     # THE POC - start here
├── css/gallery.css             # Shared styles
│
├── poc-knowledge/              # All documentation about this POC
│   ├── README.md                   # START HERE - full journey narrative
│   ├── methodology/                # HOW TO APPLY to other patterns (NEW)
│   │   ├── METHODOLOGY-PHILOSOPHY.md       # The WHY
│   │   ├── METHODOLOGY-THREE-PANELS.md     # The ARCHITECTURE
│   │   ├── METHODOLOGY-CONTENT-TYPES.md    # The WHAT (24 types)
│   │   ├── METHODOLOGY-GENERATION-QUESTIONS.md # The 8 Questions
│   │   ├── METHODOLOGY-QUALITY-RUBRICS.md  # Validation
│   │   ├── METHODOLOGY-TRANSFORMATION.md   # Step-by-step process
│   │   ├── METHODOLOGY-PATTERN-ADAPTATION.md # Reusability guide
│   │   └── TEMPLATES-ACTIVITY-ZONE.md      # Copy-paste templates
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
| **Apply this approach to other patterns** | `poc-knowledge/methodology/METHODOLOGY-TRANSFORMATION.md` ← NEW |
| **Understand WHY the layout** | `poc-knowledge/decisions/WHY-THREE-PANELS.md` |
| **Understand content structure + generative methodology** | `poc-knowledge/specs/CONTENT-STRUCTURE.md` |
| Understand the philosophy | `poc-knowledge/methodology/METHODOLOGY-PHILOSOPHY.md` |
| See all 24 content types | `poc-knowledge/methodology/METHODOLOGY-CONTENT-TYPES.md` |
| Copy-paste Activity Zone templates | `poc-knowledge/methodology/TEMPLATES-ACTIVITY-ZONE.md` |
| Quality validation rubrics | `poc-knowledge/methodology/METHODOLOGY-QUALITY-RUBRICS.md` |
| Adapt for different pattern types | `poc-knowledge/methodology/METHODOLOGY-PATTERN-ADAPTATION.md` |
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
│  240px   │           (flexible, largest)           │        (480px default)         │
│  fixed   │           margin-based                  │     fixed, resizable 280-900px │
│          │                                         │                                │
│  "Where  │     Philosophy + Implementation         │   Operational Intelligence     │
│   am I?" │     WOVEN TOGETHER                      │   (cross-pattern reasoning)    │
└──────────┴─────────────────────────────────────────┴────────────────────────────────┘
```

**Activity Zone now 480px** (was 280px) with resizable range 280-900px to accommodate deeper operational content.

**Critical:** Sidebars are `position: fixed`. Do NOT use CSS Grid on the container - it conflicts with fixed positioning. Use margins on main content instead.

---

## Methodology: Applying to Other Patterns (NEW)

The `poc-knowledge/methodology/` folder contains the **complete backbone documentation** for applying this POC approach to any markdown file in the knowledge base.

**8 Documents in Reading Order:**

1. `METHODOLOGY-PHILOSOPHY.md` - The WHY (ideology, research backing, staff engineer worldview)
2. `METHODOLOGY-THREE-PANELS.md` - The ARCHITECTURE (panel structure, scroll-sync, brushing)
3. `METHODOLOGY-CONTENT-TYPES.md` - The WHAT (8 Main Panel + 16 Activity Zone types)
4. `METHODOLOGY-GENERATION-QUESTIONS.md` - The 8 Questions that generate generative content
5. `METHODOLOGY-QUALITY-RUBRICS.md` - Measurable 0-3 scoring for validation
6. `TEMPLATES-ACTIVITY-ZONE.md` - Copy-paste templates for all 16 Activity Zone types
7. `METHODOLOGY-TRANSFORMATION.md` - Step-by-step process (markdown → POC format)
8. `METHODOLOGY-PATTERN-ADAPTATION.md` - How to adapt for Gas Town, CC Mirror, etc.

**Relationship to existing docs:**
- `specs/CONTENT-STRUCTURE.md` = Technical specification (raw definitions)
- `decisions/WHY-THREE-PANELS.md` = Decision record (reasoning)
- `methodology/*` = How to APPLY the spec (operational guidance)

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

## Activity Zone Content Types (16 Types)

### Foundational Types (6)

| Type | Color | Purpose |
|------|-------|---------|
| **Invariant Connection** | Blue | Cross-pattern DNA |
| **Second-Order Effect** | Amber | System properties at scale |
| **Composition Case** | Purple | What combines, what doesn't |
| **Research Frontier** | Red | What's unsolved |
| **War Story** | Green | Real production experiences |
| **Alternative Path** | Gray | Navigation to other options |

### Generative Types (10) — NEW

These transform content from **descriptive** (what happens) to **generative** (how to think):

| Type | Color | Core Question |
|------|-------|---------------|
| **Inversion Lens** | Indigo | "What if the opposite? Why would it fail?" |
| **Constraint Chain** | Violet | "What forced this? What cascades from it?" |
| **Failure Gradient** | Rose | "How does this fail gradually?" |
| **Time Horizon Shift** | Cyan | "At what scale is this right?" |
| **Violation Chain** | Orange | "If I skip this, what cascade happens?" |
| **Trade-Off Tension** | Amber | "What's the genuine dilemma?" |
| **Analogical Bridge** | Fuchsia | "What do I already know that applies?" |
| **Expertise Gradient** | Emerald | "How deeply do I understand?" |
| **Minimal Pattern** | Lime | "What's the simplest version?" |
| **Inflection Point** | Yellow | "When does benefit flip to cost?" |

**The Mindset:** Staff engineers don't need more facts. They need cognitive tools that change how they think. Every Activity Zone item should pass: "Does this change how I REASON, or just add to what I KNOW?"

---

## Responsive Breakpoints

| Viewport | Layout |
|----------|--------|
| >1400px | Full 3-panel, Activity Zone resizable |
| 901-1400px | 2-panel (no activity zone) |
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
--activity-zone-width: 480px;  /* default, resizable 280-900px */

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
2. **Magic numbers** - 56px, 240px, 480px repeated without variables
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
