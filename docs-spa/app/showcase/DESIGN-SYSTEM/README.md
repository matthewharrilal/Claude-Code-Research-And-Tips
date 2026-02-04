# KortAI Design System
## The Unhurried Editor — Editorial Documentation Components

**Version:** 1.0
**Date:** 2026-02-04
**Soul Score:** 86% average across 11 components

═══════════════════════════════════════════════════════════════════════════════

## What This Is

KortAI is an editorial design system for technical documentation. It applies magazine/print design principles to digital documentation, creating components that feel like a premium publication rather than generic web UI.

**The Core Question:** "What makes a design FEEL like itself and not like Bootstrap?"

**The Answer:** Editorial restraint, typography as structure, sharp edges as confidence, and whitespace as intentional design element.

═══════════════════════════════════════════════════════════════════════════════

## Quick Links

| Need | Go To |
|------|-------|
| Get started fast | [QUICK-START.md](./QUICK-START.md) |
| Copy CSS variables | [tokens/](./tokens/) |
| Use a component | [components/](./components/) |
| Choose a layout pattern | [patterns/](./patterns/) |
| Migrate existing docs | [guides/migration-guide.md](./guides/migration-guide.md) |
| Know what NOT to do | [anti-patterns/](./anti-patterns/) |

═══════════════════════════════════════════════════════════════════════════════

## The 6 Universal Rules

These rules are **LOCKED**. No exceptions.

1. **Sharp Edges** — `border-radius: 0` everywhere
2. **Flat Design** — `box-shadow: none` everywhere
3. **Limited Palette** — Red (#E83025) + cream (#FEF9F5) + black (#1A1A1A) only
4. **Typography Hierarchy** — Serif for display, sans for body, mono for code
5. **Heavy Borders** — 4px minimum for callout left borders
6. **Generous Whitespace** — padding 20px+, line-height 1.6+

═══════════════════════════════════════════════════════════════════════════════

## The 11 Components

| # | Component | Character | Soul | When to Use |
|---|-----------|-----------|------|-------------|
| 1 | Code Snippet | Precise Transcriptionist | 82% | Show code examples |
| 2 | Info Callout | Senior Concierge | 88% | Provide context |
| 3 | Tip Callout | Seasoned Colleague | 82% | Share helpful advice |
| 4 | Gotcha Callout | Vigilant Sentinel | 85% | Warn about pitfalls |
| 5 | Essence Callout | Archivist of Axioms | 90% | State fundamental truths |
| 6 | Challenge Callout | Spirited Catalyst | 86% | Prompt action/exercises |
| 7 | File Tree | Methodical Surveyor | 87% | Show directory structure |
| 8 | Decision Matrix | Impartial Cartographer | 81% | Compare options |
| 9 | Core Abstraction | Sagacious Mentor | 84% | Teach principle + code |
| 10 | Task Component | Diligent Scribe | 85% | Track progress |
| 11 | Reasoning | Deliberative Counselor | 90% | Walk through decisions |

═══════════════════════════════════════════════════════════════════════════════

## Density Patterns

Choose based on content type:

| Pattern | Shape | Best For |
|---------|-------|----------|
| **PULSE** | ████░░░░████░░░░ | Tutorials (rhythmic high-low) |
| **CRESCENDO** | ░░░░████████████ | Onboarding (sparse→dense) |
| **BOOKENDS** | ████░░░░░░░░████ | Context-Action-Summary |
| **WAVE** | ░░██████░░░░████ | Long-form docs |

See [patterns/density-patterns.md](./patterns/density-patterns.md) for implementation.

═══════════════════════════════════════════════════════════════════════════════

## Directory Structure

```
DESIGN-SYSTEM/
├── README.md                  ← You are here
├── QUICK-START.md             ← Get up and running in 5 minutes
│
├── tokens/                    ← All CSS variables
│   ├── colors.md
│   ├── typography.md
│   ├── spacing.md
│   └── geometry.md
│
├── components/                ← All 11 component specs
│   ├── OVERVIEW.md
│   ├── code-snippet.md
│   ├── info-callout.md
│   ├── tip-callout.md
│   ├── gotcha-callout.md
│   ├── essence-callout.md
│   ├── challenge-callout.md
│   ├── file-tree.md
│   ├── decision-matrix.md
│   ├── core-abstraction.md
│   ├── task-component.md
│   └── reasoning.md
│
├── patterns/                  ← Layout and density patterns
│   ├── density-patterns.md
│   ├── axis-patterns.md
│   └── combination-rules.md
│
├── guides/                    ← How to use for specific purposes
│   ├── migration-guide.md
│   ├── tutorial-layout.md
│   └── reference-layout.md
│
└── anti-patterns/             ← What NOT to do
    └── registry.md
```

═══════════════════════════════════════════════════════════════════════════════

## The Master Character: The Unhurried Editor

All components serve under this master character:

**Archetype:** Senior professional at a premium publication

**Qualities:**
- Nothing to prove
- Confident decisions
- Trusts reader intelligence
- Editorial calm over expression

**Voice:**
> "We don't explain. We present. The reader is intelligent. The content speaks."

═══════════════════════════════════════════════════════════════════════════════

## Provenance

This design system was extracted from:
1. Sanrok Studio (sanrok.com) visual reference
2. 176 component analysis files
3. 124+ research findings across 5 research domains
4. 3 validated density explorations

**Source Authority:**
- `design-extraction/component-system/perceptual-audit-v2/synthesis/` (T1 Foundation)
- `docs-spa/app/showcase/research/` (T2 Frameworks)

═══════════════════════════════════════════════════════════════════════════════

## Quick Test: Is Your Implementation KortAI?

Ask yourself:
- [ ] Could this exist in a Bootstrap project? (If yes, you've failed)
- [ ] Are all corners sharp?
- [ ] Are there any shadows?
- [ ] Is the color palette limited to red + cream + black?
- [ ] Does typography create hierarchy, not decoration?
- [ ] Is whitespace intentional, not accidental?

**If any checkbox fails → Revise before shipping.**
