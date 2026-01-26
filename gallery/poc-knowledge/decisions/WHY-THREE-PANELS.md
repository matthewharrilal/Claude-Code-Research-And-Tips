# Why Three Panels? - The Complete Reasoning

> **Purpose:** Explains the reasoning behind the three-panel layout, the research backing, and how to refine it.
> Updated with research from best-in-class technical documentation.

---

## The Core Problem

**Documentation that's too shallow for staff engineers.**

Most docs choose ONE approach:
- **Structured** (official docs style) → Authoritative but static, feels dead
- **Fluid** (blog/feed style) → Alive but hard to reference, overwhelming

**Our innovation: Both on the same page, with DEPTH.**

The three-panel layout lets you have stable reference content AND living context simultaneously. But the real insight is that the documentation itself must be deeper—connecting philosophy to implementation to gotchas in a woven narrative.

---

## Research: Gold Standard Technical Documentation

### Sources Studied

| Source | Key Technique | What We Learned |
|--------|---------------|-----------------|
| **Rust Docs** | 15-word opening sentence | Forces clarity. If you can't say it in 15 words, you don't understand it. |
| **PostgreSQL** | "Path of a query" narrative | Follow a journey through the system. Shows system in motion, not static. |
| **Kleppmann (DDIA)** | Comparative analysis showing trade-offs | Theory + reality bound together. Trade-offs explicit. |
| **AOSA** | Components → Interactions → Lessons | Three-question framework exposes architecture. |
| **Stripe** | Transparent constraints upfront | "This doesn't support X." Honesty builds trust. |
| **Kafka** | Explicit "This is hard" sections | Acknowledge complexity. Don't hide it. |

### Information Hierarchy for Staff Engineers

```
Level 1: CONCEPTUAL MODEL - What is this fundamentally?
Level 2: DECISION CONTEXT - Why was it built this way?
Level 3: ARCHITECTURE - How do parts relate?
Level 4: REFERENCE - Detailed specifications
Level 5: PATTERNS - When and how to use this
```

### What "Written By Someone Who Gets It" Means

- Discusses trade-offs honestly, not just benefits
- Explains constraints that forced design decisions
- Provides mental models, not procedures
- Acknowledges edge cases and failure scenarios
- Separates "how it works" from "how to use it"

---

## The Critical Balance: Philosophy + Gritty Implementation

**Not everything is philosophy.** Staff engineers also need:
- Concrete code they can copy and modify
- "When I build this, I'll hit X problem" - practical gotchas
- File structures, templates, real examples
- The gritty "how am I going to build with this" details

**The binding:** Every conceptual idea must connect to concrete implementation. Every implementation detail must trace back to a principle.

```
CONCEPTUAL:  "Fresh context beats accumulated context"
     ↕
PRACTICAL:   "while :; do cat PROMPT.md | claude; done"
     ↕
GOTCHA:      "progress.txt grows unbounded - truncate after 50 iterations"
     ↕
PRODUCTION:  "I hit this at iteration 47, here's what I did"
```

The Main Panel should weave these together, not separate them into "theory" and "practice" sections.

---

## The Three Panels

### Panel Sizing (Updated)

```
┌──────────┬─────────────────────────────────────────┬────────────────────────────────┐
│ LEFT NAV │           MAIN PANEL                    │      ACTIVITY ZONE             │
│  240px   │           (flexible, largest)           │    480px (resizable 280-900px) │
│  fixed   │           margin-based                  │   fixed, user-resizable        │
│  "Where  │     "What is this? (DEEP)"              │   "Operational intelligence"   │
│   am I?" │                                         │                                │
│  STABLE  │     Philosophy + Implementation         │   Cross-pattern reasoning      │
│          │     WOVEN TOGETHER                      │   System-level effects         │
└──────────┴─────────────────────────────────────────┴────────────────────────────────┘
```

**Key change:** Activity Zone is now 480px default (was 280px), resizable 280-900px to accommodate deeper operational content. Still smaller than Main Panel to maintain focus hierarchy. User resize preference persists to localStorage.

---

## Panel 1: Left Navigation — "Where Am I?"

### Purpose
Orientation and wayfinding. You should always know where you are in the larger structure.

### Content
- Navigation hierarchy (collapsible sections)
- Current page indicator
- Related patterns/pages
- Progress through a sequence (if applicable)

### Behavior
- **Fixed position** - Always visible regardless of scroll
- **Collapsible sections** - Manage complexity without hiding structure
- **Active state highlighting** - Current location always clear

### Why It Exists
Without persistent navigation, users lose context. They don't know how deep they are, what's nearby, or how to get back. The left nav is the "you are here" dot on the mall map.

### Design Principle
> "Navigation is not content. It's infrastructure. Keep it stable, predictable, and out of the way until needed."

---

## Panel 2: Main Content — "What Is This? (DEEP)"

### Purpose
The canonical documentation. Philosophy and implementation WOVEN TOGETHER, not separated.

### Section Structure (Research-Backed)

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
- **Clean typography** - Optimized for reading

### Why It Exists
This is the reference material. When someone needs to implement a pattern, they come here. It needs to be deep, verifiable, and copy-paste ready. No fluff, no maybes—but also no false simplicity that hides the real complexity.

### Design Principle
> "The main content is the contract. It shows WHAT and WHY and HOW and WHERE IT BREAKS. If something is uncertain, it belongs in Activity Zone's Research Frontier, not here."

---

## Panel 3: Activity Zone — "Operational Intelligence"

### Purpose
Cross-pattern reasoning, system-level effects, and real-world evidence. This is where the pattern connects to the ecosystem and to production reality.

### Content Types (Updated - Research-Backed)

| Type | Icon | Color | Purpose |
|------|------|-------|---------|
| **Invariant Connection** | link | Blue | Cross-pattern DNA: "Ralph, Gas Town share INV-003" |
| **Second-Order Effect** | chart | Amber | System properties at scale: "At iteration 50+, reading > thinking" |
| **Composition Case** | layers | Purple | What combines: "Ralph + Playwright works, danger is X" |
| **Research Frontier** | flask | Red | What's unsolved: "Optimal compaction window unknown" |
| **War Story** | user | Green | Real experiences: "14 iterations, $10-15, learnings compounded" |
| **Alternative Path** | arrow | Gray | Navigation: "Need parallelism? → CC Mirror" |

### Research Justification

| Content Type | Research Backing |
|--------------|------------------|
| Invariant Connections | Kleppmann: Theory ↔ Practice binding |
| Second-Order Effects | Kleppmann: Comparative trade-off analysis |
| Composition Cases | AOSA: Component interactions |
| Research Frontier | Kafka: Transparency about what's hard |
| War Stories | AOSA: "Lessons learned" from builders |
| Alternative Paths | Stripe: Multiple entry points for different needs |

### Behavior
- **Fixed position** - Ambient awareness, always visible
- **Scroll-synced** - Items highlight based on which main content section is visible
- **Lower opacity when inactive** - Draws attention when relevant
- **Brushing interaction** - Hover on activity item highlights related main content

### Why It Exists
Static docs feel dead. They don't tell you:
- Who has actually used this in production?
- What did they learn that's not in the docs?
- What's still uncertain after years of use?
- What connects to what at a deeper level?

The Activity Zone answers these questions. It provides **operational intelligence**—the kind of knowledge that comes from running systems in production, not from designing them on paper.

### Design Principle
> "The Activity Zone is where theory meets reality. It shows cross-pattern DNA, scale effects, real outcomes, and honest uncertainty."

---

## Why Three Columns Specifically?

### 1. Matches Mental Model of Premium Documentation
Stripe, Tailwind, Vercel, Mintlify all use three columns. Developers expect this pattern. It reduces cognitive load because the structure is familiar.

### 2. Clear Information Hierarchy
Each column has ONE job:
- Left: Where (navigation)
- Center: What/Why/How (deep content)
- Right: Cross-cutting intelligence (connections, scale effects, reality checks)

No column competes with another.

### 3. Main Content Gets Full Attention
The center column is the widest. Your eye naturally goes there. The sidebars support but don't distract.

### 4. Supports Different Reading Modes
- **Quick reference:** Look at Essence + core code block
- **Deep learning:** Read main content top to bottom
- **Cross-pattern thinking:** Scan Activity Zone for invariant connections
- **Reality check:** Look for War Stories and Second-Order Effects
- **Navigation:** Use left nav to jump to specific section

### 5. Separates Canonical from Operational
- Main Panel: What the pattern IS (stable, verified)
- Activity Zone: What the pattern DOES IN PRACTICE (evolving, experiential)

---

## The Brushing & Linking Interaction

### What It Is
When you hover or select something in one panel, related content in other panels responds.

### How It Works
- Hover on "Philosophy" section in main content → Activity Zone highlights relevant War Stories
- Hover on an Invariant Connection → Main content section it relates to gets highlighted
- Click nav item → Smooth scroll to section + Activity Zone updates

### Why It Matters
> "Zones should have a CONVERSATION. The relationship between canonical content and operational intelligence should be visible."

Without brushing, the three panels feel like three separate pages crammed together. With brushing, they feel like one cohesive experience where deep content connects to real-world evidence.

---

## What Makes This "Staff Engineer Level"

Based on research:

1. **Assumes competence** - No basic explanations
2. **Shows WHY** - Reasoning, not just commands
3. **Gives constraints/tradeoffs** - What breaks, costs, limits
4. **Respects time** - Dense, scannable, no fluff
5. **Holistic view** - Everything visible, not buried
6. **Honest about limits** - What's hard, what's unsolved
7. **Cross-pattern thinking** - Shows system-level connections
8. **Production-tested** - War stories, not just theory

---

## What Can Be Refined

### Panel 1 (Left Nav)
- Could add search/filter within nav
- Could show "related patterns" section
- Could indicate pattern maturity (depth of Activity Zone content)

### Panel 2 (Main Content)
- Section order can be adjusted per pattern type
- Gotchas section can grow as production experience accumulates
- "What's Hard" can evolve as solutions are discovered

### Panel 3 (Activity Zone)
- Content should grow over time as more War Stories accumulate
- Research Frontier items should move to Main Panel when solved
- Could add filtering by content type
- Could add "contribute your experience" action

### Cross-Panel
- Brushing could be bidirectional
- Could add keyboard navigation between panels
- Could add "focus mode" that hides sidebars for deep reading

---

## Summary

The three-panel layout exists because:

1. **Documentation needs DEPTH** - Main Panel weaves philosophy + implementation + gotchas
2. **Users need ORIENTATION** - Left Nav always tells you where you are
3. **Patterns need CROSS-CUTTING INTELLIGENCE** - Activity Zone shows invariants, scale effects, real outcomes
4. **Zones should CONVERSE** - Brushing & linking connects everything
5. **The layout COMMUNICATES** - Visual structure signals what's canonical vs. operational

When refining, always ask:
- Does this change add depth or just surface area?
- Does this help connect theory to practice?
- Does this make the operational intelligence more visible?
- Does this respect the staff engineer's time and expertise?

---

## Related Documents

- `specs/CONTENT-STRUCTURE.md` - Detailed section templates and content type definitions
- `specs/RALPH-MINTLIFY-REDESIGN.md` - Technical implementation specs
- `audits/CSS-LAYOUT-AUDIT.md` - Layout bug investigations

---

## Tags

`#decision` `#three-panels` `#layout` `#research-backed` `#staff-engineer` `#depth` `#operational-intelligence`
