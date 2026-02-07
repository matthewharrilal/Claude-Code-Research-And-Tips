<!-- ═══════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/components/OVERVIEW.md
Tier: B | Batch: 5 | Generated: 2026-02-06

1. WHY THIS EXISTS
Provides the complete catalog of all 11 KortAI components with their
character names, soul scores, and velocity/temperature/weight properties.
This is the enriched overview — it goes beyond design-extraction by
adding the behavioral properties (velocity, temperature, weight) that
drive combination-rules.md.

2. THE QUESTION THIS ANSWERS
"What are the 11 KortAI components, what are their soul compliance
scores, and what behavioral properties govern how they combine?"

3. STATUS
COMPLETE — all 11 components cataloged with character names, soul
scores (81%-90%), families (Callout, Technical, Structural), and
behavioral properties. Condensed from CHARACTER-FAMILY-COMPLETE.md
with enrichment (velocity/temperature/weight not in source).

5. BUILT ON
- design-extraction/component-system/perceptual-audit-v2/synthesis/CHARACTER-FAMILY-COMPLETE.md (11 characters, soul scores)
- COMPONENTS-REGISTRY.md (component specifications)
- Velocity/temperature/weight properties (enrichment layer added
  during DESIGN-SYSTEM creation, not in design-extraction source)

6. MUST HONOR
- Soul scores must match CHARACTER-FAMILY-COMPLETE.md
- Character names are canonical (Precise Transcriptionist, Senior
  Concierge, etc.)
- Component families (Callout, Technical, Structural) are structural
  groupings, not arbitrary
- Accent colors and background values must match locked tokens

8. CONSUMED BY
- DESIGN-SYSTEM/CLAUDE.md (navigation: "Understand components → OVERVIEW.md")
- component-findings.md (references component catalog)
- combination-rules.md (consumes velocity/temperature/weight values)
- Individual component spec files (./code-snippet.md, etc.)

10. DIAGNOSTIC QUESTIONS
Q1: Do all 11 soul scores match the values in CHARACTER-FAMILY-COMPLETE.md
    from design-extraction?
Q2: Are the velocity/temperature/weight values consistent with how
    combination-rules.md uses them?
Q3: Do the accent colors and background hex values in the family
    tables match the locked token values in QUICK-START.md?

END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════ -->

# Component Overview
## All 11 KortAI Components

═══════════════════════════════════════════════════════════════════════════════

## Component Catalog

| # | Component | Character | Soul | Velocity | Temp | Weight |
|---|-----------|-----------|------|----------|------|--------|
| 1 | [Code Snippet](./code-snippet.md) | Precise Transcriptionist | 82% | SLOW | Neutral | Heavy |
| 2 | [Info Callout](./info-callout.md) | Senior Concierge | 88% | FAST | Neutral | Light |
| 3 | [Tip Callout](./tip-callout.md) | Seasoned Colleague | 82% | FAST | Warm | Light |
| 4 | [Gotcha Callout](./gotcha-callout.md) | Vigilant Sentinel | 85% | FAST | Cold | Medium |
| 5 | [Essence Callout](./essence-callout.md) | Archivist of Axioms | 90% | SLOW | Warm | Medium |
| 6 | [Challenge Callout](./challenge-callout.md) | Spirited Catalyst | 86% | FAST | Warm | Medium |
| 7 | [File Tree](./file-tree.md) | Methodical Surveyor | 87% | MEDIUM | Neutral | Heavy |
| 8 | [Decision Matrix](./decision-matrix.md) | Impartial Cartographer | 81% | MEDIUM | Neutral | Heavy |
| 9 | [Core Abstraction](./core-abstraction.md) | Sagacious Mentor | 84% | SLOW | Reverent | Heavy |
| 10 | [Task Component](./task-component.md) | Diligent Scribe | 85% | FAST | Utilitarian | Medium |
| 11 | [Reasoning](./reasoning.md) | Deliberative Counselor | 90% | SLOW | Deliberate | Heavy |

═══════════════════════════════════════════════════════════════════════════════

## Component Families

### Callout Family (5 components)
All share: 2-zone structure (label + body), 4px left accent border

| Callout | Accent | Background | Body Font |
|---------|--------|------------|-----------|
| Info | Blue (#4A90D9) | #F5F8FA | Sans |
| Tip | Green (#4A9D6B) | #F5FAF5 | Sans |
| Gotcha | Red (#E83025) | #FEF6F5 | Sans |
| Essence | Amber (#D97706) | #FEF9F5 | **Serif Italic** |
| Challenge | Purple (#7C3AED) | #F8F5FF | Sans |

### Technical Family (2 components)
| Component | Font | Background |
|-----------|------|------------|
| Code Snippet | Mono | Dark (#1E1E1E) |
| File Tree | Mono | Warm cream |

### Structural Family (4 components)
| Component | Zone Count | Unique Feature |
|-----------|------------|----------------|
| Decision Matrix | 3 | Open grid (no vertical lines) |
| Core Abstraction | 5 | Composite (Essence + Code) |
| Task Component | 3-4 per task | Tasks touch (0px gap) |
| Reasoning | 3 | Equal-weight columns |

═══════════════════════════════════════════════════════════════════════════════

## When to Use Each Component

### For Context/Information
| Need | Use |
|------|-----|
| Provide background context | Info Callout |
| Share practical advice | Tip Callout |
| Warn about pitfalls | Gotcha Callout |
| State fundamental truth | Essence Callout |
| Prompt action/exercise | Challenge Callout |

### For Code/Technical
| Need | Use |
|------|-----|
| Show code example | Code Snippet |
| Show directory structure | File Tree |

### For Structure/Decisions
| Need | Use |
|------|-----|
| Compare options | Decision Matrix |
| Teach principle + code | Core Abstraction |
| Track tasks/progress | Task Component |
| Walk through decision | Reasoning |

═══════════════════════════════════════════════════════════════════════════════

## Shared CSS Foundation

All components share these base styles:

```css
/* ALL COMPONENTS */
* {
  border-radius: 0;
  box-shadow: none;
}

/* CALLOUT FAMILY */
.callout {
  padding: 24px 20px 28px 20px;  /* Asymmetric */
  border-left: 4px solid var(--accent-color);
}

.callout__label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

/* FRAME FAMILY (Core Abstraction, Reasoning) */
.frame {
  border: 1px solid var(--color-border);
  padding: 24px;
}
```

═══════════════════════════════════════════════════════════════════════════════

## Property Definitions

### Velocity
- **SLOW:** User pauses to study (Code, Essence, Reasoning)
- **MEDIUM:** User scans systematically (File Tree, Matrix)
- **FAST:** User glances and moves on (Tips, Info, Gotcha)

### Temperature
- **Cold:** Warning, caution (Gotcha)
- **Neutral:** Information, no emotional charge
- **Warm:** Friendly, encouraging (Tip, Essence, Challenge)
- **Reverent:** Respectful, important (Core Abstraction)
- **Deliberate:** Thoughtful, considered (Reasoning)

### Weight
- **Light:** Quick to process, minimal cognitive load
- **Medium:** Moderate attention required
- **Heavy:** Requires significant engagement
