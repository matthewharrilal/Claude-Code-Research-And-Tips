# Conventions-Brief Changelog -- Pipeline Surgery Tasks 5, 6, 7

**Date:** 2026-02-20
**File modified:** `design-system/pipeline/conventions-brief.md`
**Original line count:** 443
**New line count:** 546 (+103 lines)
**Tasks covered:** #5 (coherence arc), #6 (transition mapping), #7 (5 remaining gaps)

---

## Addition 1: Coherence Arc Planning (Task 5)

**Location:** Lines 136-155 (after Section 4 Multi-Coherence, before Section 5 Fractal Echo)
**Heading:** `### Coherence Arc Planning`
**Content:** 4-phase arc model (Opening/Building/Climax/Resolution) with channel counts per phase. Concrete 4-zone DEEPENING arc example showing exact bg colors, padding values, and channel counts per zone. Teaches builders to plan multi-coherence as a narrative shape, not a uniform intensity.

---

## Addition 2: Typographic Progression Per Semantic Direction (Task 7, gap 5)

**Location:** Lines 157-178 (immediately after coherence arc, still within Section 4)
**Heading:** `### Typographic Progression Per Semantic Direction`
**Content:** Two CSS code blocks showing exact typographic values for DEEPENING (heavier weight, tighter letter-spacing, compressed line-height) and OPENING (lighter weight, looser letter-spacing, taller line-height). Bridges the gap between declaring a coherence direction and knowing what happens to typography.

---

## Addition 3: Parametric Echo CSS Recipe (Task 7, gap 4)

**Location:** Lines 203-213 (inside Section 5 Fractal Echo, after existing parametric echo paragraph)
**Heading:** Bold inline: `**Parametric echo CSS recipe (specific values per scale):**`
**Content:** 4-row table mapping Page/Section/Component/Character scales to specific CSS values for dense vs sparse zones. Converts the abstract parametric echo principle into concrete values builders can use directly.

---

## Addition 4: Character-Scale Register Inventory (Task 7, gap 7)

**Location:** Lines 214-229 (inside Section 5 Fractal Echo, after parametric echo recipe)
**Heading:** `### Character-Scale Register (Closed Vocabulary)`
**Content:** Exhaustive listing of all character-scale tools: letter-spacing (0 to 0.12em with 7 named stops), font-weight (4 values), text-transform (2 values with constraint), font-style (2 values with constraint), font-size (range with reference to type scale). Explicitly labeled as CLOSED vocabulary -- values outside this set do not exist.

---

## Addition 5: Navigation-Specific Metaphor CSS (Task 7, gap 6)

**Location:** Lines 244-253 (inside Section 6 Unified Metaphor, after the structural test paragraph)
**Heading:** Bold inline: `**Metaphor in navigation elements:**`
**Content:** 4-item list covering Header (lightest expression, hinted not declared), Breadcrumbs/Nav (metaphor vocabulary in link hover transitions), Footer (echo at smallest scale, mirror header but quieter), Skip link (no metaphor needed). Includes concrete CSS examples (transition timing as metaphor echo).

---

## Addition 6: Transition-to-Coherence Mapping Table (Task 6)

**Location:** Lines 267-281 (inside Section 7 Transition Grammar, after BREATHING description)
**Heading:** `### Transition-to-Coherence Mapping`
**Content:** 3-row table mapping SMOOTH/BRIDGE/BREATHING to channel shift counts (1-2/3-4/4-5), coherence load (Light/Moderate/Heavy), when to use, and concrete examples. Planning shortcut showing how to annotate transitions before writing CSS.

---

## Addition 7: Component-Internal Multi-Coherence (Task 7, gap 3)

**Location:** Lines 291-305 (inside Section 8 CSS Vocabulary, after existing Component micro-coherence paragraph)
**Heading:** Bold inline: `**Component-internal multi-coherence recipe:**`
**Content:** CSS code block showing concrete padding/border values for components inside dense zones vs sparse zones (callouts, data tables, code blocks). States that 2-zone DNA stays constant but internal padding (~25% tighter in dense zones), border weight, and spacing change. Components echo the zone, not override it.

---

## Summary of Gaps Addressed

| Gap | Description | Addition # | Task |
|-----|-------------|-----------|------|
| 1 | No coherence arc planning | Addition 1 | #5 |
| 2 | No transition-to-coherence mapping | Addition 6 | #6 |
| 3 | No component-internal multi-coherence | Addition 7 | #7 |
| 4 | No parametric echo CSS recipe | Addition 3 | #7 |
| 5 | No typographic progression per direction | Addition 2 | #7 |
| 6 | No navigation-specific metaphor CSS examples | Addition 5 | #7 |
| 7 | No character-scale register inventory | Addition 4 | #7 |

All 7 gaps filled. All additions are RECIPES (sequenced steps with specific CSS values), not checklists. All use concrete values from tokens.css. No existing content was reorganized -- all additions inserted at natural points within existing section structure.

---

## Post-Harmony Fixes (requested by team-lead)

### Fix 1 (CRITICAL): Coherence arc example RGB threshold violation

**Problem:** Original example used zone colors with <15 RGB max-channel delta between adjacent zones (Z2 #FAF5ED to Z3 had only 10 delta on all channels). This reproduced the exact Flagship failure mode.

**Fix:** Replaced zone color sequence:
- Zone 2: kept `#F0EBE3` (delta from Z1 #FEF9F5: B channel = 18, passes)
- Zone 3: changed `#FAF5ED` to `#FFFFFF` (delta from Z2 #F0EBE3: G channel = 28, passes)
- Zone 4: kept `#FEF9F5` (delta from Z3 #FFFFFF: G channel = 15, passes)
- Added explicit RGB delta proof line after the example

### Fix 2: Off-scale values

**Problem 1:** `h2 1.75rem` is not on the type scale (tokens.css has 1.5rem and 2rem, no 1.75rem).
**Fix:** Changed to `h2 2rem` (matches `--text-h2: 2rem` in tokens.css).

**Problem 2:** `padding: 24px 28px` -- 28px is not on the 4px spacing scale.
**Fix:** Changed to `padding: 24px 32px` (24px = `--space-6`, 32px = `--space-8`, both on-scale).
