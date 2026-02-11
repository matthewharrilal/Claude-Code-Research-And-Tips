<!-- ═══════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/patterns/combination-rules.md
Tier: B | Batch: 5 | Generated: 2026-02-06

1. WHY THIS EXISTS
Defines the rules for combining KortAI components — velocity sequencing,
temperature flow, and weight balance. Without these rules, components
placed adjacently can create jarring or monotonous experiences even when
each individual component is soul-compliant.

2. THE QUESTION THIS ANSWERS
"When placing KortAI components next to each other, what ordering rules
prevent visual monotony, jarring transitions, and weight overload?"

3. STATUS
COMPLETE for core 4 rules (velocity, temperature, weight, density).
Derived from R5-COMBINATION-THEORY.md. Awaiting future CD (Combination
Dimension) stage exploration for empirical validation.

5. BUILT ON
- R5-COMBINATION-THEORY.md (pattern combination methodology)
- Component velocity/temperature/weight properties from OVERVIEW.md
- Density pattern interaction principles

6. MUST HONOR
- Component property values (velocity, temperature, weight) must match
  OVERVIEW.md exactly
- Rules are derived from R5 research — changes require R5 re-validation
- Temperature flow direction (Warm → Neutral → Cold) is not arbitrary

8. CONSUMED BY
- QUICK-START.md (combination methodology reference)
- STAGE-HEADER (CD) — future combination dimension exploration
- density-patterns.md (indirect — density rhythms interact with
  component combination rules)

10. DIAGNOSTIC QUESTIONS
Q1: Do the velocity/temperature/weight values in the properties table
    match OVERVIEW.md component catalog exactly?
Q2: Are the 4 combination rules internally consistent (no rule
    contradicts another)?
Q3: Do the "Wrong/Right" examples correctly demonstrate each rule
    violation and fix?

END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════ -->

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

## AD Stage Validation

AD-006 (Compound) validated that compound pattern application is SEQUENTIAL, not
simultaneous (AD-F-024). Multiple axis patterns within a single viewport create
visual cacophony. This extends to component combination: velocity sequencing creates
temporal rhythm that parallels the compound sequential principle. The AD transition
grammar (AD-F-025) classifies 20 directed pattern transitions into Smooth/Bridge/
Breathing types — the same classification logic applies to component combination:
same-velocity stacking is "monotone" (requires Bridge), while velocity alternation
is "Smooth." See `provenance/stage-4-axis-ad/AD-PA-CONVENTIONS.md` for the
convention ideology.

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

AD validated these spacing values through confidence-proportional spacing (AD-F-015):
Established=24px, Probable=32px, Speculative=40px, Open=48px/64px. Spacing IS the
semantic signal — same principle as component proximity.

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
