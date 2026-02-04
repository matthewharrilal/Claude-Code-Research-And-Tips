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
