# Ralph Mintlify POC - Knowledge Base

> **Purpose:** This folder documents the complete journey from research to implementation for the Ralph documentation POC. It's designed to be extracted into reusable infrastructure for converting other markdown content to this format.

---

## Quick Navigation

| Need | Go To |
|------|-------|
| **WHY the three-panel layout** | [decisions/WHY-THREE-PANELS.md](decisions/WHY-THREE-PANELS.md) ← START HERE |
| Understand the vision | [decisions/CONTEXT-RECOVERY.md](decisions/CONTEXT-RECOVERY.md) |
| See layout reasoning | [decisions/STRUCTURE-DECISION.md](decisions/STRUCTURE-DECISION.md) |
| Full technical spec | [specs/GALLERY-ARCHITECTURE.md](specs/GALLERY-ARCHITECTURE.md) |
| Current POC design | [specs/RALPH-MINTLIFY-REDESIGN.md](specs/RALPH-MINTLIFY-REDESIGN.md) |
| What went wrong & fixes | [audits/CSS-LAYOUT-AUDIT.md](audits/CSS-LAYOUT-AUDIT.md) |
| The final POC | [../ralph-mintlify-poc.html](../ralph-mintlify-poc.html) |

---

## The Journey

### Phase 1: Research (What Exists?)

We analyzed premium documentation sites and UI patterns to understand what makes docs feel "alive" vs "dead."

**Key Research:**
- `research/docs-premium.md` - Analysis of Mintlify, Stripe, Linear docs
- `research/component-specimens.md` - UI component patterns that work
- `research/dark-aesthetic.md` - Dark theme design principles
- `research/feeds-timelines.md` - Activity feed patterns
- `research/INSPIRATION-INDEX.md` - Consolidated findings

**Core Insight:** The best docs have *spatial awareness* - you always know where you are, what you're looking at, and what's happening around you.

---

### Phase 2: Decisions (What Should We Build?)

From research, we made key structural decisions.

**Key Decisions:**
- `decisions/STRUCTURE-DECISION.md` - Three-column layout rationale
- `decisions/CONTEXT-RECOVERY.md` - Project direction, rejected alternatives

**The Three Zones:**

```
┌─────────────┬─────────────────────────┬──────────────┐
│   WHERE?    │         WHAT?           │   ALIVE?     │
│             │                         │              │
│ Left Nav    │     Main Content        │  Activity    │
│ (240px)     │     (flexible)          │  Zone        │
│             │                         │  (280px)     │
│ Navigation  │  Documentation body     │ Quotes,      │
│ hierarchy   │  with procedures,       │ connections, │
│             │  examples, checkpoints  │ case studies │
└─────────────┴─────────────────────────┴──────────────┘
```

**Why Three Columns:**
1. **Left:** "Where am I?" - Stable navigation, always visible
2. **Center:** "What is this?" - The actual content, scrollable
3. **Right:** "What's happening?" - Living context that syncs with scroll

---

### Phase 3: Specification (How Exactly?)

Detailed technical specifications for implementation.

**Key Specs:**
- `specs/GALLERY-ARCHITECTURE.md` - Full production architecture (Astro + shadcn)
- `specs/RALPH-MINTLIFY-REDESIGN.md` - Current POC design spec
- `specs/LIVING-DOC-PIPELINE.md` - Future automation vision

**Design Tokens:**
```css
/* Mintlify-inspired palette */
--accent: #0D9373;          /* Primary green */
--accent-light: #10b981;    /* Lighter variant */
--bg-base: #ffffff;         /* Clean white */
--bg-subtle: #fafafa;       /* Slight gray */
--text-primary: #18181b;    /* Near black */
--text-muted: #71717a;      /* Gray text */
```

**Typography:**
- Sans: Inter (400, 500, 600, 700)
- Mono: Fira Code (400, 500)
- Base: 16px, line-height 1.7

---

### Phase 4: Implementation (Build It)

The POC went through multiple iterations before arriving at the final version.

**Iteration History:** (see `../archive/`)
- `ralph-a.html` - Initial exploration
- `ralph-b.html` - Dark theme attempt
- `ralph-c.html` - Structure refinement
- `ralph-c-v2.html` - Component polish
- `ralph-c-v3-vision.html` - Vision prototype
- `ralph-flagship-poc.html` - Feature complete draft
- `ralph-mintlify-poc.html` - **Current: Mintlify-inspired light theme**

**Tech Stack (POC):**
- Tailwind CSS (CDN)
- Lucide Icons
- GSAP + ScrollTrigger
- Google Fonts (Inter, Fira Code)

---

### Phase 5: Audit & Refinement (Fix What's Broken)

The POC had layout issues that required a comprehensive 5-agent audit.

**Key Audit:** `audits/CSS-LAYOUT-AUDIT.md`

**Root Cause Found:**
CSS Grid + fixed-position sidebars = conflict. Grid columns were fighting with margins, squeezing content to 160px.

**Fixes Applied:**
1. Removed grid from three-panel layout
2. Added tablet breakpoint (769-1024px)
3. Fixed hero title overflow
4. Normalized spacing

---

## Content Quality Standards

### What Makes Good Documentation

From our research, documentation needs:

1. **Orientation** - "You Are Here" box at top of every page
2. **Motivation** - Pain point framing before solutions
3. **Procedures** - Numbered steps, copy-paste ready
4. **Checkpoints** - "You should see..." verification points
5. **Failure Handling** - Error glossary with recovery steps

### Activity Zone Content Types

The right sidebar has 5 content types:

| Type | Color | Purpose |
|------|-------|---------|
| Quote | Green | Wisdom from practitioners |
| Connection | Blue | Links to related patterns |
| Case Study | Purple | Real-world examples |
| Question | Amber | Open problems to explore |
| Insight | Green | Key takeaways |

---

## Extractable Patterns

### For Future Infrastructure

This POC demonstrates patterns that can be automated:

**1. Content Transformation Pipeline**
```
Markdown → Parse → Enrich → Template → HTML
                     ↑
              Add orientation box
              Add checkpoints
              Add failure handling
              Generate activity items
```

**2. Three-Panel Layout Template**
- Reusable CSS for nav/content/activity structure
- Responsive breakpoints pre-defined
- GSAP scroll-sync wiring

**3. Component Library**
- "You Are Here" orientation box
- Checkpoint verification box
- Failure accordion
- Success grid
- Code block with copy
- Activity items (5 types)

**4. Content Quality Checklist**
Automated validation that pages have:
- [ ] Orientation box
- [ ] At least one checkpoint
- [ ] Failure handling section
- [ ] Related activity items

---

## Folder Structure

```
poc-knowledge/
├── README.md              ← You are here
│
├── research/              # What we learned from analyzing others
│   ├── docs-premium.md        # Mintlify, Stripe, Linear analysis
│   ├── component-specimens.md # UI patterns that work
│   ├── dark-aesthetic.md      # Dark theme principles
│   ├── feeds-timelines.md     # Activity feed patterns
│   └── INSPIRATION-INDEX.md   # Consolidated findings
│
├── decisions/             # Why we chose what we chose
│   ├── CONTEXT-RECOVERY.md    # Project direction & alternatives
│   └── STRUCTURE-DECISION.md  # Three-column rationale
│
├── specs/                 # How to build it
│   ├── GALLERY-ARCHITECTURE.md    # Production spec (Astro)
│   ├── RALPH-MINTLIFY-REDESIGN.md # POC design spec
│   └── LIVING-DOC-PIPELINE.md     # Automation vision
│
└── audits/                # What went wrong & how we fixed it
    └── CSS-LAYOUT-AUDIT.md    # Layout bug investigation

../archive/                # Old iterations (for reference)
├── ralph-a.html
├── ralph-b.html
├── ralph-c.html
├── ralph-c-v2.html
├── ralph-c-v3-vision.html
├── ralph-flagship-poc.html
├── methodology-layouts-poc.html
└── ui-enhancement-poc.html

../ralph-mintlify-poc.html # The current POC
```

---

## Next Steps

### Immediate
- [ ] Browser test the fixed POC at all breakpoints
- [ ] Address technical debt (CSS variables, remove GSAP)

### Future Infrastructure
- [ ] Extract reusable CSS layout template
- [ ] Create content transformation pipeline
- [ ] Build component library
- [ ] Automate content quality validation
- [ ] Apply to other markdown files in repo

---

## Key Learnings

1. **Fixed sidebars don't play nice with CSS Grid** - Use margins, not grid columns
2. **Test intermediate breakpoints** - The "squeeze zone" is real
3. **Audit comprehensively** - 5 parallel agents found issues a single pass missed
4. **Document the journey** - Future you will thank present you
5. **Archive iterations** - Old versions are valuable for understanding evolution
