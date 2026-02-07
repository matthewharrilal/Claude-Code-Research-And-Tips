<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/tokens/spacing.md
Tier: B | Batch: 5 | Generated: 2026-02-06
═══════════════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
This file is the canonical spacing token registry for the KortAI design system.
It locks the spatial scale that controls breathing rhythm across the entire
system — from tight within-element gaps (4px) to expansive recovery zones
(96px). The spacing scale encodes structural meaning: proximity signals
relationship, distance signals separation. All values trace to the T1
DESIGN-TOKEN-SUMMARY.md synthesis.

2. THE QUESTION THIS ANSWERS
"How much space should exist between any two elements, and what does that
spacing communicate about their relationship?"

3. STATUS
ACTIVE — Canonical source of truth for all spacing tokens

5. BUILT ON
| Source | Role | Key Values | Path |
|--------|------|------------|------|
| DESIGN-TOKEN-SUMMARY.md | T1 origin of locked values | Full spacing scale, grid-gap, content-max-width | design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md |

6. MUST HONOR
| # | Constraint | Rationale |
|---|-----------|-----------|
| 1 | Spacing scale from --space-1 (4px) to --space-24 (96px) is LOCKED | T1 locked values; arbitrary spacing breaks rhythm |
| 2 | --grid-gap: 24px (LOCKED) | Standard grid separation; T1 locked value |
| 3 | Spacing carries semantic meaning | 4-8px = "one thing", 12-16px = "related", 24-32px = "different sections", 48px+ = "different regions" |
| 4 | INHALE/EXHALE rhythm must be preserved | Dense and sparse alternation is a soul-level breathing pattern |

8. CONSUMED BY
| Consumer | How It Uses This File |
|----------|----------------------|
| All explorations (DD-XXX, OD-XXX, AD-XXX, CD-XXX) | CSS variable values for spatial layout |
| DESIGN-SYSTEM/README.md | References spacing tokens as locked soul constraints |
| Density patterns (patterns/density-patterns.md) | Spacing values drive INHALE/EXHALE rhythm definitions |
| Components (implicit) | All layout components inherit these spacing variables |
| Migration guide | Spacing compliance checklist during page migration |
| Perceptual Depth Audit sub-agents | Verification target for soul compliance checks |

10. DIAGNOSTIC QUESTIONS
Q1: Does every spacing value used in explorations map to a token in this file,
    with no arbitrary pixel values (e.g., 15px, 22px, 50px)?
Q2: Is the INHALE/EXHALE rhythm visible — dense sections (24px padding)
    alternating with sparse recovery zones (64px+ margins)?
Q3: Does --grid-gap consistently resolve to 24px across all grid layouts?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
 -->

# Spacing Tokens
## Locked KortAI Spacing System

═══════════════════════════════════════════════════════════════════════════════

## Spacing Scale (LOCKED)

```css
:root {
  --space-1: 4px;    /* Within element */
  --space-2: 8px;    /* Related items (within zone) */
  --space-3: 12px;   /* Zone gaps */
  --space-4: 16px;   /* Standard separation */
  --space-5: 20px;   /* Generous padding */
  --space-6: 24px;   /* Component padding */
  --space-8: 32px;   /* Section breaks */
  --space-10: 40px;  /* Large section breaks */
  --space-12: 48px;  /* Page margins */
  --space-16: 64px;  /* Major sections (EXHALE) */
  --space-20: 80px;  /* Recovery breathing */
  --space-24: 96px;  /* Sparse ocean */
}
```

═══════════════════════════════════════════════════════════════════════════════

## Structural Meanings

| Range | Meaning | Usage |
|-------|---------|-------|
| 4-8px | "These items are ONE thing" | Within element |
| 12-16px | "These are related but separate" | Related items |
| 24-32px | "These are different sections" | Section breaks |
| 48px+ | "These are different regions" | Major divisions |

═══════════════════════════════════════════════════════════════════════════════

## Density Spacing

### INHALE (Dense) Sections
```css
.section--dense {
  padding: 24px;
  margin-bottom: 24px;
}
```

### EXHALE (Sparse) Sections
```css
.section--sparse {
  padding: 64px;
  margin-bottom: 80px;
}
```

### Recovery Breathing (After Dense)
**Rule:** After any dense section, add 64-80px whitespace.

```css
.dense-section + * {
  margin-top: 64px;
}
```

═══════════════════════════════════════════════════════════════════════════════

## Callout Padding (Asymmetric)

```css
.callout {
  padding-top: 24px;
  padding-right: 20px;
  padding-bottom: 28px;  /* Asymmetric! */
  padding-left: 20px;
}
```

**Why asymmetric?** Creates visual settling effect. Content "rests" at bottom.

═══════════════════════════════════════════════════════════════════════════════

## Semantic Proximity Rules

| Relationship | Spacing | Example |
|--------------|---------|---------|
| Tight coupling | 8-16px | Label to content |
| Related components | 24px | Explanation to code |
| Moderate separation | 32px | Section to section |
| Loose separation | 48-64px | Major theme changes |
| Recovery | 64-80px | After dense sections |
| Sparse ocean | 96px+ | Island separation |
