<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/tokens/geometry.md
Tier: B | Batch: 5 | Generated: 2026-02-06
═══════════════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
This file is the canonical geometry token registry for the KortAI design system.
It locks the two most critical soul constraints: border-radius: 0 and
box-shadow: none. These are not stylistic preferences — they are identity-level
decisions. Sharp edges signal decisiveness and print heritage; flat surfaces
signal honesty and editorial confidence. These values are SOUL PIECE #1 and
represent the single most important visual differentiation of the system.

2. THE QUESTION THIS ANSWERS
"What border-radius and box-shadow values are permitted in the KortAI system,
and what border styles define its visual language?"

3. STATUS
ACTIVE — Canonical source of truth for all geometry tokens (MOST CRITICAL token file)

5. BUILT ON
| Source | Role | Key Values | Path |
|--------|------|------------|------|
| DESIGN-TOKEN-SUMMARY.md | T1 origin of locked values | border-radius: 0, box-shadow: none | design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md |
| SOUL PIECE #1 | Identity-level constraint | Sharp edges = decisive, confident | design-extraction/component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md |

6. MUST HONOR
| # | Constraint | Rationale |
|---|-----------|-----------|
| 1 | --border-radius: 0 on EVERYTHING (LOCKED, NO EXCEPTIONS) | Sharp edges = decisive, confident; rounded = generic. This is the #1 soul constraint |
| 2 | --box-shadow: none on EVERYTHING (LOCKED, NO EXCEPTIONS) | Flat = print heritage, honest; shadows = fake 3D, dishonest |
| 3 | design-system/ directory has CRITICAL DIVERGENCE | 7 non-zero radius values and 6 non-none shadows exist there — those are WRONG |
| 4 | Left accent borders use 4px minimum | Never 1-2px — too subtle to register as intentional |
| 5 | Any non-zero radius or non-none shadow is an automatic soul violation | No "just this once" exceptions; the constraint is absolute |

8. CONSUMED BY
| Consumer | How It Uses This File |
|----------|----------------------|
| All explorations (DD-XXX, OD-XXX, AD-XXX, CD-XXX) | CSS variable values for geometry enforcement |
| DESIGN-SYSTEM/README.md | References geometry tokens as the most critical soul constraints |
| Anti-patterns registry | Non-zero radius and shadows are cataloged anti-patterns |
| Components (implicit) | All visual components must enforce these geometry rules |
| Perceptual Depth Audit sub-agents | PRIMARY verification target — geometry is checked first |
| Migration guide | Geometry compliance is the first checkpoint during migration |

10. DIAGNOSTIC QUESTIONS
Q1: Can you confirm that ZERO instances of border-radius > 0 exist in the
    current explorations and components (excluding the known-wrong design-system/
    directory)?
Q2: Can you confirm that ZERO instances of box-shadow with a non-none value
    exist in current explorations and components?
Q3: Do all left-accent borders use exactly 4px width, with no instances of
    1px, 2px, or 3px accent borders?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
 -->

# Geometry Tokens
## Locked KortAI Geometry Rules

═══════════════════════════════════════════════════════════════════════════════

## Border Radius (LOCKED)

```css
:root {
  --border-radius: 0;  /* ALWAYS sharp edges */
}
```

**Rule:** `border-radius: 0` on EVERYTHING. No exceptions.

**Why?** Sharp edges = decisive, confident. Rounded = friendly, safe, generic.

**AD Validation:** 0 soul violations across all 6 AD explorations (AD-001 through
AD-006). border-radius: 0 was verified as GENERATIVE, not merely restrictive — the
angular spiral in AD-004 exists BECAUSE of this constraint (AD-F-013), and bento
grid size hierarchy is MORE visible with sharp edges (AD-F-010). See
`provenance/stage-4-axis-ad/AD-PA-CONVENTIONS.md`.

═══════════════════════════════════════════════════════════════════════════════

## Shadows (LOCKED)

```css
:root {
  --box-shadow: none;  /* ALWAYS flat design */
}
```

**Rule:** `box-shadow: none` on EVERYTHING. No exceptions.

**Why?** Shadows = fake 3D, dishonest. Flat = print heritage, honest.

**AD Validation:** 0 shadow violations across all 6 AD explorations. AD-005
(Choreography) produced the strongest evidence via ANTI-PHYSICAL identity
(AD-F-020): 20 CONDITIONAL PASS R-4 findings required reinterpretation from
"visual movement" to "structural movement." Any technique implying physical
object behavior (including shadows) fails the soul test.

═══════════════════════════════════════════════════════════════════════════════

## Border Styles

### Left Accent Border (Callouts)
```css
.callout {
  border-left: 4px solid [accent-color];
}
```
**Rule:** 4px minimum. Never 1-2px (too subtle).

**AD Validation:** AD-004 (Spiral) uses a progressive border-weight gradient
(4px/3px/1px) for geological depth encoding (AD-F-014). This is the ONE context
where progressive border widths are semantic. The 2px width is deliberately
skipped to avoid the 2px epidemic anti-pattern (OD-F-AP-001).

### Outline Border (Frames)
```css
.frame {
  border: 1px solid var(--color-border);
}
```
Used for: Core Abstraction, Reasoning Component

### No Vertical Borders in Tables
```css
.decision-matrix td {
  border-left: none;
  border-right: none;
}
```
**Why?** Vertical lines = prison bars. Open grid = breathing room.

═══════════════════════════════════════════════════════════════════════════════

## Zone Separation Methods

| Method | KortAI Preferred? | When Used |
|--------|-------------------|-----------|
| Whitespace only | **YES** | Primary method |
| Background color change | **YES** | Semantic zones |
| Left border accent | **YES** | Callouts |
| Full border (1px) | Sometimes | Tables, frames |
| Horizontal rule | RARELY | Explicit breaks |
| Drop shadow | **NEVER** | — |
| Rounded corners | **NEVER** | — |

═══════════════════════════════════════════════════════════════════════════════

## Container Styles

| Style | Zone Type | Meaning |
|-------|-----------|---------|
| No visible container | Content-defined | "Content speaks" |
| Left accent border | Flagged zone | "Semantic category" |
| Full 1px border | Enclosed zone | "Bounded content" |
| Dark background | Inverted zone | "Focus content" |
| Tinted background | Semantic zone | "Type-specific" |
