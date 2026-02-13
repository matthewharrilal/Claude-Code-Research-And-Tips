<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: design-extraction/CLAUDE.md
Tier: C | Batch: 5 | Date: 2026-02-06
═══════════════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
Navigation and process documentation file for agents entering design-extraction/.
Explains the philosophy ("extract soul, not CSS"), the Sanrok reference, and
Phase 1-3 history (font research, typography system, card system).

3. STATUS
ACTIVE (but STALE: does not cover Phase 4 perceptual-audit-v2 or T1 synthesis files)

5. BUILT ON
- typography-system/ files (Phase 2 implementation)
- card-system/ files (Phase 3 implementation, now SUPERSEDED)
- font-research/ results (Instrument Serif decision)
- 10 soul principles (design philosophy)

8. CONSUMED BY
- All agents entering design-extraction/ read this first
- Provides institutional memory for WHY decisions were made

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
 -->

# Design Extraction System - Process Documentation

This document explains the philosophy, methodology, and journey behind the design extraction work in this directory. It serves as institutional memory for understanding WHY decisions were made, not just WHAT was built.

---

## The Core Question

**"What makes a design FEEL like itself and not like Bootstrap?"**

This question drives everything. We're not extracting CSS properties—we're extracting **soul**. The difference between a generic card component and a Sanrok card isn't `border-radius: 12px` vs `border-radius: 0`. It's the entire philosophy of how content relates to its container, how typography carries hierarchy, and how restraint creates impact.

---

## The Sanrok Reference

All design extraction work references **Sanrok Studio** (sanrok.com), an Indonesian graphic design and product studio. Their website exemplifies:

- Editorial/magazine design principles applied to web
- Swiss International Typographic Style influence
- Print heritage (duotone, flat design, sharp edges)
- Typography as primary design element
- Restraint in color (red + cream + black only)

Reference screenshots are stored in `.playwright-mcp/`:
- `sanrok-homepage-full.png`
- `sanrok-about-full.png`
- `sanrok-hero-verification.png`

---

## Phase History

### Phase 1-2: Typography System

**Location:** `design-extraction/typography-system/`

**The Problem:**
Saying "use Instrument Serif italic" isn't enough. The SOUL of Sanrok's typography is in:
- The specific curve of the "R" leg in Instrument Serif
- Ball terminals on lowercase letters (a, c, f, g, j, r, y)
- The exact stroke contrast ratio
- How filled and outline text mix together
- Tight line-height (0.9) for display text
- Letter-spacing adjustments for uppercase

**What We Learned:**
1. **Fonts aren't interchangeable** - Instrument Serif has specific characteristics that make it "Sanrok"
2. **The filled/outline system** - Sanrok mixes solid text with stroked/outline text for visual rhythm
3. **Uppercase + italic = editorial confidence** - This combination signals magazine design heritage
4. **Color restraint** - Only #E83025 red, never grays or additional accents

**Files Created:**
- `typography.css` - Main entry point
- `type-scale.css` - Size variables, responsive clamp values
- `stroke-treatments.css` - Filled vs outline text treatments
- `typography-components.css` - Semantic classes (.typo-hero, .typo-display-1, etc.)
- `index.html` - Demo/test page with Sanrok reproduction
- Playwright tests for automated verification

**Key Insight:**
> "Bold italic serif" describes the surface. The soul is in the ball terminals, the stroke contrast, the way the italic leans forward with confidence. You can't copy soul by copying CSS—you have to understand WHY.

---

### Phase 3: Card Component System

**Location:** `design-extraction/card-system/`

**The Problem:**
Looking at Sanrok's project showcases, they don't look like "web cards." They look like magazine layouts. The question: what makes that difference?

**The Research Process:**

We launched 4 parallel research agents to deeply analyze:

1. **3A: Card Anatomy** - Pixel-by-pixel analysis of Sanrok's "cards"
   - Discovery: They're NOT cards. They're typographic rows.
   - No visible container (no bg, no border, no shadow)
   - Content defines its own boundaries through typography and whitespace

2. **3B: Anti-Patterns** - What makes cards generic?
   - Bootstrap: `border-radius: 6px`, `background: white`, subtle border
   - Tailwind: `rounded-lg shadow-lg bg-white`
   - Material Design: 12px radius, elevation shadows
   - SaaS landing pages: hover lift effects, pastel pill tags
   - Key insight: These optimize for "safe" and "universally acceptable"—Sanrok optimizes for "memorable" and "opinionated"

3. **3C: Halftone/Duotone Techniques** - Image treatment research
   - Discovery: Sanrok uses DUOTONE (cream + red), not traditional halftone dots
   - Recommended technique: CSS blend modes (`mix-blend-mode: darken/lighten`)
   - Fallback: SVG feComponentTransfer for pixel-perfect accuracy
   - 908 lines of research covering 5 techniques with code examples

4. **3D: Editorial/Magazine Patterns** - Design theory research
   - Swiss International Typographic Style principles
   - Why print uses flat, content-defined layouts
   - The "content block" approach (no containers needed)
   - Josef Muller-Brockmann's grid systems
   - Duotone history from 1900s to Spotify 2015

**The 10 Soul Principles:**

1. **No Container Chrome** - `background: transparent`, no border, no shadow, no radius
2. **Outline Tags** - Tags are stroked, not filled (breathing room, restraint)
3. **Duotone Images** - CSS blend mode treatment creates editorial feel
4. **Typography Hierarchy** - Serif display, sans metadata (tension, not sameness)
5. **Flat Design** - Zero shadows, gradients, or transforms (honest, print heritage)
6. **Sharp Edges** - 0px border-radius everywhere (decisive, confident)
7. **Limited Palette** - Red + cream + black only (bold restraint)
8. **Tight Spacing** - 24px grid gap (editorial efficiency)
9. **Grid Alignment** - 12-column system, cards span 6 columns
10. **Left-Heavy Alignment** - Title left, metadata right (creates tension)

**Verification Process:**

- 31 Playwright tests covering all soul principles
- 3 audit cycles with 100% pass rate
- Visual regression tests for baseline comparison
- Side-by-side anti-pattern comparison in demo

**Key Insight:**
> Sanrok's "cards" reject the container-first paradigm of web design. Where Bootstrap wraps content in boxes, Sanrok lets content define its own space. This isn't a card system—it's a typographic rhythm system that happens to display project information.

---

## The Anti-Pattern Philosophy

A critical part of our methodology is documenting what NOT to do. Generic design happens when you:

1. **Default to rounded corners** - Signals "I'm friendly and modern" but means nothing
2. **Add shadows for depth** - Fake 3D for fake importance
3. **Use white backgrounds** - Creates container instead of letting content speak
4. **Apply hover lift effects** - Treats content like buttons
5. **Fill tags with pastel colors** - Decorative candy instead of information
6. **Stick to sans-serif** - Safe but characterless

The Sanrok alternative:
- Sharp corners = editorial precision
- Flat design = print heritage honesty
- Transparent backgrounds = content breathes
- No hover effects = content, not interactive element
- Outline tags = information hierarchy
- Serif italic = editorial confidence

---

## Research Methodology

### Parallel Agent Architecture

For complex research phases, we launch multiple specialized agents in parallel:

```
┌─────────────────────────────────────────┐
│         PARALLEL RESEARCH TRACK         │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐       │
│  │ 3A  │ │ 3B  │ │ 3C  │ │ 3D  │       │
│  │Card │ │Anti │ │Half │ │Edit │       │
│  │Anat │ │Patt │ │tone │ │orial│       │
│  └──┬──┘ └──┬──┘ └──┬──┘ └──┬──┘       │
└─────┼──────┼──────┼──────┼─────────────┘
      └──────┴──────┴──────┘
                  │
      WAIT: All 4 complete
                  │
      ┌───────────▼───────────┐
      │  SYNTHESIS DOCUMENT   │
      │  (SOUL-DEFINITION.md) │
      └───────────────────────┘
```

Each agent:
- Has a specific research mission
- Produces a markdown document with sources
- Includes "Soul Impact" analysis (not just facts)
- Uses tables with comparison columns

### The "Soul Impact" Column

Every comparison table includes a "Soul Impact" column explaining WHY a difference matters:

| Property | Generic | Sanrok | Soul Impact |
|----------|---------|--------|-------------|
| border-radius | 12px | 0 | Sharp = decisive, confident; Rounded = friendly, safe |
| background | white | transparent | Container vs content-defined space |

This prevents documentation from becoming a list of CSS properties without understanding.

### Verification Protocol

1. **Automated Tests** - Playwright tests enforce soul principles programmatically
2. **Audit Cycles** - Minimum 3 runs, must achieve 100% twice consecutively
3. **Human Verification** - 10-point checklist comparing to reference
4. **Anti-Pattern Comparison** - Visual proof that our implementation differs from generic

---

## Directory Structure

```
design-extraction/
├── CLAUDE.md                    ← This file (process documentation)
├── typography-system/           ← Phase 1-2 output
│   ├── typography.css
│   ├── type-scale.css
│   ├── stroke-treatments.css
│   ├── typography-components.css
│   ├── index.html
│   └── [tests]
├── card-system/                 ← Phase 3 output
│   ├── PROGRESS.md              ← Status tracking
│   ├── SOUL-DEFINITION.md       ← Source of truth
│   ├── card.css                 ← Implementation
│   ├── index.html               ← Demo/test page
│   ├── css/
│   │   └── halftone.css         ← Duotone treatment
│   ├── research/
│   │   ├── 3A-card-anatomy.md
│   │   ├── 3B-anti-patterns.md
│   │   ├── 3C-halftone-techniques.md
│   │   └── 3D-editorial-patterns.md
│   └── tests/
│       └── card.spec.ts
└── archive/                     ← Previous extraction work
    ├── extraction/
    ├── tokens/
    ├── components/
    └── variations/
```

---

## Key Documents

| Document | Purpose | Location |
|----------|---------|----------|
| SOUL-DEFINITION.md | Source of truth for card implementation | card-system/ |
| PROGRESS.md | Status tracking, audit logs, verification results | card-system/ |
| 3A-card-anatomy.md | Deep analysis of Sanrok card structure | card-system/research/ |
| 3B-anti-patterns.md | What to avoid (with CSS examples) | card-system/research/ |
| 3C-halftone-techniques.md | Image treatment research (5 techniques) | card-system/research/ |
| 3D-editorial-patterns.md | Design theory (Swiss style, editorial) | card-system/research/ |

---

## Philosophy Summary

### What We Extract
- **Soul** - The feeling, not just the properties
- **Principles** - The WHY behind decisions
- **Anti-patterns** - What to explicitly avoid
- **Verification criteria** - How to know if we succeeded

### What We Don't Extract
- Pixel-perfect reproduction (that's copying, not understanding)
- Every CSS property (noise obscures signal)
- Decoration without purpose
- "Safe" defaults that could apply anywhere

### The Goal
Create design systems that couldn't exist in a generic UI kit. When someone looks at the output, they should think "this is editorial magazine design" not "this is a web app card component."

---

## Future Phases

The design extraction work is ISOLATED. It produces:
- Reference CSS files
- Demo HTML pages
- Research documentation
- Test suites

It does NOT automatically migrate to production content. Each phase is a self-contained artifact that can inform future work without forcing changes.

---

## Commands

```bash
# View typography demo
open design-extraction/typography-system/index.html

# View card system demo
open design-extraction/card-system/index.html

# Run card system tests
cd design-extraction/card-system/tests
npm install
npm test

# Run typography tests
cd design-extraction/typography-system
npm test
```

---

*Last updated: 2026-02-03*
*Phases completed: Typography (1-2), Card System (3)*
