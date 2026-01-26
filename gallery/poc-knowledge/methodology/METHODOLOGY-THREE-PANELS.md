# Methodology: Three-Panel Architecture

> **Purpose:** Explains the three-panel layout, panel relationships, and interaction patterns.
> This is the ARCHITECTURE that supports the philosophy. Read after METHODOLOGY-PHILOSOPHY.md.

---

## The Layout at a Glance

```
┌──────────┬─────────────────────────────────────────┬────────────────────────────────┐
│ LEFT NAV │           MAIN PANEL                    │      ACTIVITY ZONE             │
│  240px   │           (flexible, largest)           │   480px (resizable 280-900px)  │
│  fixed   │           margin-based                  │   fixed, user-resizable        │
│          │                                         │                                │
│ "Where   │     "What is this? (DEEP)"              │   "Operational intelligence"   │
│  am I?"  │                                         │                                │
│          │     Philosophy + Implementation         │   Cross-pattern reasoning      │
│ STABLE   │     WOVEN TOGETHER                      │   System-level effects         │
│          │                                         │   Real-world evidence          │
└──────────┴─────────────────────────────────────────┴────────────────────────────────┘
```

---

## Panel Sizing Specification

| Panel | Width | Position | Behavior |
|-------|-------|----------|----------|
| **Left Navigation** | 240px | Fixed | Always visible, collapsible sections |
| **Main Content** | Flexible | Scrollable | Uses margins to account for fixed sidebars |
| **Activity Zone** | 480px default | Fixed, user-resizable | Range: 280-900px, persists to localStorage |

### Why These Specific Sizes

**Left Navigation (240px fixed):**
- Wide enough for nested navigation hierarchy
- Narrow enough to not compete with main content
- Matches Mintlify, Stripe, and other premium doc sites

**Main Content (flexible):**
- Takes remaining space via margins: `margin-left: 240px; margin-right: 480px`
- Content width ~600-800px on standard screens
- Wide enough for code blocks without horizontal scrolling
- Flexible allows graceful adaptation to different viewport widths

**Activity Zone (480px default, resizable 280-900px):**
- 480px accommodates deeper operational content than original 280px
- Still smaller than Main Panel to maintain focus hierarchy
- User-resizable because content depth varies—some want glanceable, some want deep
- localStorage persistence respects user preference across sessions

### Critical CSS Architecture Note

```css
/* CORRECT: Use margins for fixed sidebars */
.main-content {
  margin-left: 240px;
  margin-right: 480px;
}

/* WRONG: Don't use CSS Grid with fixed-position sidebars */
.container {
  display: grid;
  grid-template-columns: 240px 1fr 480px; /* Conflicts with fixed positioning */
}
```

**Why this matters:** CSS Grid and fixed-position sidebars conflict. Grid columns try to size elements, but fixed elements are removed from document flow. This caused a severe bug where main content was squeezed to 160px. Always use margins with fixed sidebars.

---

## Panel 1: Left Navigation

### Purpose
**"Where am I?"**

Orientation and wayfinding. Users should always know their location in the larger structure.

### Content

| Element | Purpose |
|---------|---------|
| Navigation hierarchy | Shows document structure |
| Collapsible sections | Manages complexity without hiding it |
| Current page indicator | Always-visible location marker |
| Related patterns | Links to connected content |
| Progress indicator | Position in a sequence (if applicable) |

### Behavior

- **Fixed position** - Always visible regardless of scroll
- **Collapsible sections** - Click to expand/collapse subsections
- **Active state highlighting** - Current location clearly indicated
- **Hover previews** (future) - Show context on hover

### Why It Exists

Without persistent navigation, users lose context. They don't know:
- How deep they are in the hierarchy
- What's nearby in the structure
- How to get back to where they were

The left nav is the "you are here" dot on the mall map. It's infrastructure, not content.

### Design Principle

> "Navigation is not content. It's infrastructure. Keep it stable, predictable, and out of the way until needed."

### What Can Be Refined

- Add search/filter within nav
- Show "related patterns" section
- Indicate pattern maturity (depth of Activity Zone content)
- Add keyboard navigation (j/k to move, enter to select)

---

## Panel 2: Main Content

### Purpose
**"What is this? (DEEP)"**

The canonical documentation. Philosophy and implementation woven together, not separated.

### Section Structure (8 Sections)

```
1. ESSENCE (15 words - Rust rule)
   └─ One sentence that captures the core abstraction

2. THE CORE ABSTRACTION + IMPLEMENTATION
   └─ Philosophy and code bound together inseparably
   └─ "That's the whole pattern. Everything else is scaffolding."

3. WHY [DESIGN DECISION]? + WHAT THIS MEANS FOR YOU
   └─ Each design decision with:
      - The reasoning (why fresh context?)
      - The concrete implication (what you must do)

4. THE FILE STRUCTURE (Gritty Implementation)
   └─ Actual files you'll create
   └─ Complete, copy-paste ready scripts

5. THE PATH OF A TASK (PostgreSQL style)
   └─ Follow a task through the system step by step
   └─ Shows the system in motion, not static

6. GOTCHAS (Practical Problems)
   └─ Concrete numbers, concrete fixes
   └─ "progress.txt grows unbounded after 50 iterations"

7. WHAT'S HARD (Honest about Complexity)
   └─ Real failure modes with symptoms
   └─ Not hidden - explicitly acknowledged

8. WHEN TO USE / WHEN NOT
   └─ Clear criteria with alternatives
   └─ Decision support, not just description
```

**Key principle:** Each section weaves philosophy ("why this works") with implementation ("here's the code") with gotchas ("here's what breaks").

### Behavior

- **Scrollable** - Primary reading area
- **Wide enough for code** - ~600-800px content width
- **Clean typography** - Optimized for reading (16px base, 1.7 line-height)
- **Scroll-synced** - Activity Zone updates based on visible section

### Why It Exists

This is the reference material. When someone needs to implement a pattern, they come here. It needs to be:
- **Deep** - Not surface-level explanations
- **Verifiable** - Claims are testable
- **Copy-paste ready** - Code works when copied
- **Honest** - Doesn't hide complexity

### Design Principle

> "The main content is the contract. It shows WHAT and WHY and HOW and WHERE IT BREAKS. If something is uncertain, it belongs in Activity Zone's Research Frontier, not here."

### What Can Be Refined

- Section order can be adjusted per pattern type
- Gotchas section can grow as production experience accumulates
- "What's Hard" can evolve as solutions are discovered
- Add "Copy" buttons to all code blocks
- Add anchor links to all headings

---

## Panel 3: Activity Zone

### Purpose
**"Operational intelligence"**

Cross-pattern reasoning, system-level effects, and real-world evidence. This is where the pattern connects to the ecosystem and production reality.

### Content Types (16 Total)

#### Foundational Types (6)

| Type | Icon | Color | Purpose |
|------|------|-------|---------|
| **Invariant Connection** | link | Blue (#3b82f6) | Cross-pattern DNA: "Ralph, Gas Town share INV-003" |
| **Second-Order Effect** | chart | Amber (#f59e0b) | System properties at scale: "At iteration 50+, reading > thinking" |
| **Composition Case** | layers | Purple (#8b5cf6) | What combines: "Ralph + Playwright works, danger is X" |
| **Research Frontier** | flask | Red (#ef4444) | What's unsolved: "Optimal compaction window unknown" |
| **War Story** | user | Green (#22c55e) | Real experiences: "14 iterations, $10-15, learnings compounded" |
| **Alternative Path** | arrow-right | Gray (#6b7280) | Navigation: "Need parallelism? → CC Mirror" |

#### Generative Types (10)

| Type | Icon | Color | Core Question |
|------|------|-------|---------------|
| **Inversion Lens** | rotate-ccw | Indigo (#4f46e5) | "What if the opposite? Why would it fail?" |
| **Constraint Chain** | link-2 | Violet (#8b5cf6) | "What forced this? What cascades from it?" |
| **Failure Gradient** | trending-down | Rose (#f43f5e) | "How does this fail gradually?" |
| **Time Horizon Shift** | clock | Cyan (#06b6d4) | "At what scale is this right?" |
| **Violation Chain** | alert-octagon | Orange (#f97316) | "If I skip this, what cascade happens?" |
| **Trade-Off Tension** | scale | Amber (#f59e0b) | "What's the genuine dilemma?" |
| **Analogical Bridge** | git-compare | Fuchsia (#d946ef) | "What do I already know that applies?" |
| **Expertise Gradient** | bar-chart-3 | Emerald (#10b981) | "How deeply do I understand?" |
| **Minimal Pattern** | minimize-2 | Lime (#84cc16) | "What's the simplest version?" |
| **Inflection Point** | activity | Yellow (#eab308) | "When does benefit flip to cost?" |

### Behavior

- **Fixed position** - Ambient awareness, always visible
- **Scroll-synced** - Items highlight based on which main content section is visible
- **Lower opacity when inactive** - Draws attention when relevant
- **Brushing interaction** - Hover on activity item highlights related main content
- **User-resizable** - 280-900px range, preference persisted

### Why It Exists

Static docs feel dead. They don't tell you:
- Who has actually used this in production?
- What did they learn that's not in the docs?
- What's still uncertain after years of use?
- What connects to what at a deeper level?

The Activity Zone answers these questions. It provides **operational intelligence**—knowledge from running systems in production, not designing them on paper.

### Design Principle

> "The Activity Zone is where theory meets reality. It shows cross-pattern DNA, scale effects, real outcomes, and honest uncertainty."

### What Can Be Refined

- Content should grow over time as more War Stories accumulate
- Research Frontier items should move to Main Panel when solved
- Add filtering by content type
- Add "contribute your experience" action
- Add bidirectional brushing with main content

---

## Why Three Columns Specifically?

### 1. Matches Mental Model of Premium Documentation

Stripe, Tailwind, Vercel, Mintlify all use three columns. Developers expect this pattern. It reduces cognitive load because the structure is familiar.

### 2. Clear Information Hierarchy

Each column has ONE job:
- **Left:** Where (navigation)
- **Center:** What/Why/How (deep content)
- **Right:** Cross-cutting intelligence (connections, scale effects, reality checks)

No column competes with another.

### 3. Main Content Gets Full Attention

The center column is the widest. Your eye naturally goes there. The sidebars support but don't distract.

### 4. Supports Different Reading Modes

| Reading Mode | Primary Panel | Secondary |
|--------------|---------------|-----------|
| **Quick reference** | Main (Essence + core code) | - |
| **Deep learning** | Main (top to bottom) | Activity (examples) |
| **Cross-pattern thinking** | Activity (invariant connections) | Main (referenced sections) |
| **Reality check** | Activity (War Stories, Second-Order) | Main (gotchas) |
| **Navigation** | Left Nav | - |

### 5. Separates Canonical from Operational

- **Main Panel:** What the pattern IS (stable, verified)
- **Activity Zone:** What the pattern DOES IN PRACTICE (evolving, experiential)

This separation is intentional. Canonical content shouldn't be polluted with anecdotes. But anecdotes should be accessible when needed.

---

## The Brushing & Linking Interaction

### What It Is

When you hover or select something in one panel, related content in other panels responds.

### How It Works

| Action | Response |
|--------|----------|
| Hover on Main Panel section | Activity Zone highlights relevant items |
| Hover on Activity Zone item | Main Panel section it relates to gets highlighted |
| Click nav item | Smooth scroll to section + Activity Zone updates |
| Scroll Main Panel | Activity Zone scroll-syncs to show relevant items |

### Why It Matters

> "Zones should have a CONVERSATION. The relationship between canonical content and operational intelligence should be visible."

Without brushing, the three panels feel like three separate pages crammed together. With brushing, they feel like one cohesive experience where deep content connects to real-world evidence.

### Technical Implementation

```javascript
// Scroll-sync: Main Panel scroll position → Activity Zone visibility
const sections = document.querySelectorAll('.main-section');
const activityItems = document.querySelectorAll('.activity-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      activityItems.forEach(item => {
        const relatesTo = item.dataset.relatesTo;
        item.classList.toggle('highlighted', relatesTo === sectionId);
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
```

---

## Responsive Breakpoints

| Viewport | Layout | Changes |
|----------|--------|---------|
| >1400px | Full 3-panel | Activity Zone resizable 280-900px |
| 1025-1400px | 2-panel | Activity Zone hidden, content available via toggle |
| 769-1024px | 2-panel compact | Reduced padding, grids stack |
| <768px | Mobile | No sidebars, hamburger menu for nav |

### Breakpoint Rationale

**>1400px:** Full experience. All three panels visible simultaneously.

**1025-1400px:** Activity Zone can't fit at useful width. Hide it but provide access via toggle/overlay.

**769-1024px:** "Tablet squeeze zone." Main content must remain readable. Use fluid widths.

**<768px:** Mobile. Navigation goes to hamburger. Activity Zone goes to overlay/bottom sheet.

### Responsive CSS Pattern

```css
/* Full 3-panel (>1400px) */
@media (min-width: 1401px) {
  .main-content { margin-left: 240px; margin-right: 480px; }
  .activity-zone { width: 480px; display: block; }
}

/* 2-panel (1025-1400px) */
@media (max-width: 1400px) and (min-width: 1025px) {
  .main-content { margin-left: 240px; margin-right: 0; }
  .activity-zone { display: none; }
  .activity-toggle { display: block; }
}

/* Compact 2-panel (769-1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .main-content { margin-left: 240px; margin-right: 0; padding: 1rem; }
}

/* Mobile (<768px) */
@media (max-width: 768px) {
  .left-nav { display: none; }
  .hamburger { display: block; }
  .main-content { margin: 0; padding: 1rem; }
}
```

---

## Evolution Guidance

### What Can Change (With Care)

#### Panel 1 (Left Nav)
- Add search/filter within nav
- Show "related patterns" section
- Indicate pattern maturity
- Add keyboard navigation
- **Don't change:** Fixed position, 240px width, always-visible principle

#### Panel 2 (Main Content)
- Section order can be adjusted per pattern type
- Gotchas section can grow as production experience accumulates
- "What's Hard" can evolve as solutions are discovered
- Add interactive elements (code playgrounds, toggles)
- **Don't change:** 8-section structure, binding principle, flexible width

#### Panel 3 (Activity Zone)
- Content should grow over time
- Research Frontier → Main Panel when solved
- Add filtering by content type
- Add "contribute your experience" action
- **Don't change:** 16 content types, scroll-sync behavior, resizable principle

#### Cross-Panel
- Brushing could be bidirectional (partially implemented)
- Add keyboard navigation between panels (Tab to move, Space to activate)
- Add "focus mode" that hides sidebars for deep reading
- **Don't change:** Three-panel structure, panel purposes, conversation pattern

### What Should NOT Change

1. **Three panels** - The fundamental structure
2. **Panel purposes** - Where/What/Operational split
3. **Fixed sidebars with margin-based main content** - The CSS pattern
4. **Scroll-sync and brushing** - The conversation pattern
5. **Philosophy + Implementation binding** - The content principle

---

## Summary

### The Three-Panel Architecture in One Paragraph

The three-panel layout provides persistent orientation (left nav), deep canonical content (main panel), and operational intelligence (activity zone). Panels have fixed roles and don't compete. They converse through scroll-sync and brushing—when you interact with one panel, related content in other panels responds. This creates a cohesive experience where deep documentation connects to real-world evidence. The architecture uses fixed-position sidebars with margin-based main content, not CSS Grid, to avoid layout conflicts.

### The Questions This Document Answers

- **What are the panel sizes?** → 240px | flexible | 480px (280-900px resizable)
- **What is each panel for?** → Where am I? | What is this? | Operational intelligence
- **Why three columns?** → Mental model, hierarchy, attention, reading modes, canonical vs operational
- **How do panels interact?** → Scroll-sync, brushing, highlighting
- **What's the CSS pattern?** → Fixed sidebars + margin-based main content (NOT Grid)
- **How does responsive work?** → 4 breakpoints: full 3-panel, 2-panel, compact, mobile
- **What can be refined?** → Content, interactions, filtering. NOT structure or panel purposes.

---

## Related Documents

- `METHODOLOGY-PHILOSOPHY.md` - The WHY behind this architecture
- `METHODOLOGY-CONTENT-TYPES.md` - Full specification of 24 content types
- `specs/RALPH-MINTLIFY-REDESIGN.md` - Technical implementation details
- `audits/CSS-LAYOUT-AUDIT.md` - Layout bug investigation and fixes

---

## Source Traceability

| Section | Source Document | Line References |
|---------|-----------------|-----------------|
| Panel Sizing | CONTENT-STRUCTURE.md | Lines 36-50 |
| Panel Purposes | WHY-THREE-PANELS.md | Lines 79-223 |
| Why Three Columns | WHY-THREE-PANELS.md | Lines 226-252 |
| Brushing & Linking | WHY-THREE-PANELS.md | Lines 255-268 |
| Evolution Guidance | WHY-THREE-PANELS.md | Lines 287-308 |

---

## Tags

`#methodology` `#architecture` `#three-panels` `#layout` `#responsive` `#brushing-linking`
