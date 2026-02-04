# Component Combination Rules
## How Components Work Together

═══════════════════════════════════════════════════════════════════════════════

## Component Properties Model

Every component has three properties:

| Component | Velocity | Temperature | Weight |
|-----------|----------|-------------|--------|
| Code Snippet | SLOW | Neutral | Heavy |
| Info Callout | FAST | Neutral | Light |
| Tip Callout | FAST | Warm | Light |
| Gotcha Callout | FAST | Cold | Medium |
| Essence Callout | SLOW | Warm | Medium |
| Challenge Callout | FAST | Warm | Medium |
| File Tree | MEDIUM | Neutral | Heavy |
| Decision Matrix | MEDIUM | Neutral | Heavy |
| Core Abstraction | SLOW | Reverent | Heavy |
| Task Component | FAST | Utilitarian | Medium |
| Reasoning | SLOW | Deliberate | Heavy |

═══════════════════════════════════════════════════════════════════════════════

## The 4 Combination Rules

### Rule 1: Never Stack Same-Velocity
**Wrong:** SLOW + SLOW (monotonous)
**Right:** SLOW + FAST + SLOW (rhythm)

```
❌ Code Snippet → Core Abstraction → Reasoning
✅ Code Snippet → Tip Callout → Reasoning
```

### Rule 2: Temperature Flow
**Wrong:** Warm → Cold (jarring)
**Right:** Warm → Neutral → Cold (smooth)

```
❌ Tip Callout (Warm) → Gotcha Callout (Cold)
✅ Tip Callout (Warm) → Info Callout (Neutral) → Gotcha Callout (Cold)
```

### Rule 3: Weight Balance
**Wrong:** Heavy + Heavy (overwhelms)
**Right:** Heavy + Light + Heavy (intersperse)

```
❌ Code Snippet → Decision Matrix → Reasoning
✅ Code Snippet → Info Callout → Decision Matrix
```

### Rule 4: Semantic Proximity Spacing

| Relationship | Spacing |
|--------------|---------|
| Tight coupling | 8-16px |
| Moderate | 24-32px |
| Loose | 48-64px |
| Recovery | 64-80px |

═══════════════════════════════════════════════════════════════════════════════

## Recommended Sequences

### Opening Sequence (Start of page)
```
Hero Section (LOW density)
    ↓
Overview Callout (Info or Essence)
    ↓
Navigation/Map (File Tree or Contents)
```

### Teaching Sequence (Explain a concept)
```
Essence Callout (principle)
    ↓
Core Abstraction (principle + code)
    ↓
Code Snippet (full example)
    ↓
Tip Callout (practical advice)
```

### Decision Sequence (Help user choose)
```
Decision Matrix (options)
    ↓
Reasoning Component (analysis)
    ↓
Gotcha Callout (what to avoid)
```

### Closing Sequence (End of page)
```
Challenge Callout (next steps)
    ↓
Task Component (action items)
    ↓
Essence Callout (key takeaway)
```

═══════════════════════════════════════════════════════════════════════════════

## Traffic Light Rule

**NEVER place Tip Callout (green) adjacent to Gotcha Callout (red).**

This creates a "traffic light" effect that feels childish and diminishes both.

```
❌ Tip Callout → Gotcha Callout
✅ Tip Callout → [whitespace or neutral component] → Gotcha Callout
```

═══════════════════════════════════════════════════════════════════════════════

## Max Components Per Viewport

| Component Type | Maximum | Rationale |
|----------------|---------|-----------|
| Callouts (any type) | 2 | Alarm fatigue |
| Code Snippets | 2 | Cognitive load |
| Decision structures | 1 | Focus |
| Heavy components total | 3 | Balance |
