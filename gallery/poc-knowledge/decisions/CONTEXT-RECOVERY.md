# Gallery Project: Context Recovery

**Last Updated:** 2026-01-25
**Session:** cuddly-watching-seal
**Status:** UI exploration - iterating on aesthetic direction

---

## THE BIG PICTURE

Building an **Architectural Gallery** - a visual interface for the Claude Code research knowledge base (150+ sources). The goal is something to look at every morning that:
1. Shows what's new (new patterns, connections forming)
2. Lets you quickly reference patterns (copy-paste the Ralph one-liner)
3. Helps you decide which pattern to use (compare Ralph vs Gas Town)

---

## THE GALLERY JOURNEY SO FAR

### Phase 1: Initial Discussion
- Stopped from building "bullshit simple HTML"
- Pointed to `UI-Tips/CLAUDE.md` (design workflows reference)
- Clarified: "heavy setup but not overengineering"
- Key phrase: "The engineering is in service of clarity, not showing off"

### Phase 2: Three Visual Directions
Created 3 prototype pages for the Ralph pattern:
- `ralph-a.html` - Refactoring.guru style (intent-first teaching)
- `ralph-b.html` - Game Programming Patterns style (conversational prose)
- `ralph-c.html` - shadcn style (copy-first, minimal prose)

**Chose Direction C** but felt something was missing.

### Phase 3: Deep Research (5 Opus Agents)
Researched:
1. Premium documentation sites (Stripe's 3-column, Linear's soul)
2. Dashboard dual-pane patterns (brushing & linking)
3. Gallery/portfolio artifact presentation
4. Creative tool interfaces (Figma, Raycast)
5. Experimental/game UI (Disco Elysium Thought Cabinet)

**Key insight:** Zones should "talk to each other" - selecting in one pane should affect the other (brushing & linking).

### Phase 4: V2 with Brushing
Built `ralph-c-v2.html` with bidirectional brushing & linking.

### Phase 5: V3 Vision (CDN-only)
Built `ralph-c-v3-vision.html` using Tailwind CDN + Lucide icons.
**Reaction: "This is so ass. Everything feels boring."**

### Phase 6: UI-Tips Cleanup (COMPLETED 2026-01-25)
Reorganized `UI-Tips/CLAUDE.md` (1,080 → 952 lines) before continuing gallery work.

---

## KEY DECISIONS MADE

| Decision | Choice | Reasoning |
|----------|--------|-----------|
| Visual foundation | Direction C (shadcn style) | Copy-first, morning ritual use case |
| Zone interaction | YES - brushing & linking | Research unanimous: makes dual-pane feel alive |
| Accordions | NO | "Too slow, hide structure" - structure IS the content |
| Personal journey tracking | NO | Explicitly rejected - not needed |
| Animations | OK if purposeful | Must not delay content access |
| Visual richness | More tolerant than assumed | Sin is making someone wait, not visual complexity |

---

## THE VIBE

> "Living Workshop + Curated Gallery (hybrid)"

| Dimension | Direction |
|-----------|-----------|
| Emotional quality | Living Workshop + Curated Gallery |
| Imagery | Purposeful illustrations + subtle texture (NOT for warmth) |
| Color | Dark + green direction is RIGHT, current execution is WRONG |
| Hard line | NO animations that delay content access |
| Tolerance | Open to decorative elements if they don't slow things down |

---

## RESEARCH SYNTHESIS: THE NUANCE WE'RE MISSING

Based on all 5 agents' research:

### 1. Structure Should Be SPATIAL, Not INFORMATIONAL
- Currently: Accordions (temporal - expand/collapse)
- Should be: A visual map showing relationships and shape
- **Insight:** Structure should show HOW pieces relate, not just WHAT they are

### 2. Zones Should Have a CONVERSATION
- Currently: Parallel columns that don't interact
- Should be: Brushing & linking - hover/select in one affects the other
- **Insight:** The relationship between canonical and living content should be visible

### 3. Each Element Should Feel ARTIFACT-LIKE
- Currently: Functional list items
- Should be: Museum-quality presentation with provenance, visual weight variation
- **Insight:** Not everything is equally important; visual hierarchy should show it

### 4. Premium ≠ Decorated; Premium = CONFIDENT
- Currently: Green accent chosen arbitrarily
- Should be: Intentional, considered, signature color used sparingly
- **Insight:** Restraint and opinion create soul, not visual noise

---

## FILES CREATED

```
gallery/
├── ralph-a.html           # Direction A prototype
├── ralph-b.html           # Direction B prototype
├── ralph-c.html           # Direction C prototype (chosen)
├── ralph-c-v2.html        # V2 with brushing & linking
├── ralph-c-v3-vision.html # V3 with Tailwind CDN (felt "boring")
├── css/
│   └── gallery.css        # Shared design tokens
├── GALLERY-ARCHITECTURE.md # Production stack spec (Astro + shadcn)
└── CONTEXT-RECOVERY.md    # THIS FILE
```

---

## RELATED PLAN FILES

- `~/.claude/plans/cuddly-watching-seal.md` - Master plan with full decision tree
- `~/.claude/plans/gallery-design-exploration.md` - Deep research synthesis

---

## WHAT'S NEXT

The current blocker is: **V3 feels "boring"** - need to figure out why and iterate.

Possible directions:
1. Diagnose what's not working in V3 (colors? spacing? visual weight?)
2. Review research findings to identify what we're missing
3. Explore a completely different direction
4. Look at specific inspiration sites

---

## REFERENCE: THE CORE CONCEPT

**Hybrid Zones** - Most docs pick ONE approach:
- **Structured** (like official docs) - authoritative but static
- **Fluid** (like a blog/feed) - alive but hard to reference

Our innovation: **Both on the same page.**

```
┌─────────────────────────────────────────────────────────────┐
│ ESSENCE (always visible)                                    │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  while :; do cat PROMPT.md | claude ; done              │ │
│ │  The one-liner. Everything else is scaffolding. [Copy]  │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  STRUCTURED ZONE          │  FLUID ZONE                     │
│  ━━━━━━━━━━━━━━━━━━━━━━  │  ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄            │
│  (solid borders)          │  (dashed borders)               │
│  (authoritative)          │  (evolving)                     │
│                           │                                 │
│  ## The Shape             │  💭 "The trick with hooks..."   │
│  [Architecture Diagram]   │     @mpocock · 2h ago           │
│                           │                                 │
│  ## When to Use           │  🔗 Connection forming:         │
│  ✓ Overnight builds       │     Ralph + Playwright for E2E  │
│  ✗ Need parallelism       │                                 │
└─────────────────────────────────────────────────────────────┘
```

**Left side (Structured):** The stable, verified stuff. The Shape. The rules.
**Right side (Fluid):** The living stuff. Recent insights. Connections forming. Open questions.

When a pattern is **new** (🌱), the fluid zone dominates.
When a pattern is **mature** (🌳), the structured zone dominates.
The visual layout itself communicates confidence level.
