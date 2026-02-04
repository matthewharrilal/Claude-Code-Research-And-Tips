# PIPELINE BACKBONE
## Minimal Files Required for Migration

═══════════════════════════════════════════════════════════════════════════════

## PURPOSE

This document identifies the MINIMAL set of files needed to:
1. Understand the KortAI soul
2. Get all design tokens
3. Know all component specifications
4. Apply density and combination patterns

**Everything else is supporting context.** These 12 files ARE the system.

═══════════════════════════════════════════════════════════════════════════════

## THE 12 ESSENTIAL FILES

### Phase 1: SOUL (Read First)

| # | File | Why Essential |
|---|------|---------------|
| 1 | **KORTAI-ESSENCE-FOUNDATION.md** | Defines soul in 3 dimensions |
| 2 | **SOUL-TRANSLATION-GUIDE.md** | Maps print → digital |
| 3 | **MASTER-SOUL-SYNTHESIS.md** | Complete soul statement |

**Location:** `perceptual-audit-v2/foundation/` and `perceptual-audit-v2/synthesis/`

### Phase 2: TOKENS (The "WHAT")

| # | File | Why Essential |
|---|------|---------------|
| 4 | **DESIGN-TOKEN-SUMMARY.md** | All locked CSS variables |
| 5 | **PERCEPTUAL-TRUTHS.md** | Soul truths per component |
| 6 | **NAMED-CHARACTERS.md** | Component personas |
| 7 | **ANTI-PATTERNS.md** | What NOT to do |

**Location:** `perceptual-audit-v2/synthesis/` and `perceptual-audit-v2/tracking/`

### Phase 3: COMPONENTS (The "HOW")

| # | File | Why Essential |
|---|------|---------------|
| 8 | **CHARACTER-FAMILY-COMPLETE.md** | All 11 component specs |

**Location:** `perceptual-audit-v2/synthesis/`

### Phase 4: PATTERNS (The "WHEN")

| # | File | Why Essential |
|---|------|---------------|
| 9 | **R3-DENSITY-DIMENSIONS.md** | 6 dimensions, 4 patterns |
| 10 | **R5-COMBINATION-THEORY.md** | Velocity/Temperature/Weight |
| 11 | **RESEARCH-SYNTHESIS.md** | 5 unified principles |

**Location:** `showcase/research/`

### Phase 5: VALIDATION (The "CHECK")

| # | File | Why Essential |
|---|------|---------------|
| 12 | **DD-002-gradient.html** | Gold standard implementation |

**Location:** `showcase/explorations/density/`

═══════════════════════════════════════════════════════════════════════════════

## READING ORDER

```
1. KORTAI-ESSENCE-FOUNDATION.md
   ↓ "What is the soul?"

2. SOUL-TRANSLATION-GUIDE.md
   ↓ "How does soul become CSS?"

3. MASTER-SOUL-SYNTHESIS.md
   ↓ "Complete soul definition"

4. DESIGN-TOKEN-SUMMARY.md
   ↓ "What are the exact values?"

5. CHARACTER-FAMILY-COMPLETE.md
   ↓ "What are the 11 components?"

6. PERCEPTUAL-TRUTHS.md
   ↓ "What is each component's soul?"

7. ANTI-PATTERNS.md
   ↓ "What must I avoid?"

8. R3-DENSITY-DIMENSIONS.md
   ↓ "What patterns exist?"

9. R5-COMBINATION-THEORY.md
   ↓ "How do components combine?"

10. RESEARCH-SYNTHESIS.md
    ↓ "What are the unified principles?"

11. DD-002-gradient.html
    ↓ "Show me an example"

12. NAMED-CHARACTERS.md
    → "Reference character names"
```

═══════════════════════════════════════════════════════════════════════════════

## PIPELINE QUERIES

### Q: "I have existing docs. How do I apply this design system?"

**Answer Path:**
1. Read DESIGN-TOKEN-SUMMARY.md → Get CSS variables
2. Read ANTI-PATTERNS.md → Know what to remove
3. Read CHARACTER-FAMILY-COMPLETE.md → Map your components
4. See DD-002-gradient.html → Validation example

### Q: "What density pattern should I use for a tutorial?"

**Answer Path:**
1. Read R3-DENSITY-DIMENSIONS.md → Section on PULSE pattern
2. Implementation: Rhythmic high-low cycles (24px → 64-80px → 24px)

### Q: "What components can I use together?"

**Answer Path:**
1. Read R5-COMBINATION-THEORY.md → Velocity/Temperature/Weight
2. Key rules: Never stack same-velocity, smooth temperature flow
3. Recommended sequences in "Closing Sequence", "Teaching Sequence", etc.

### Q: "What spacing should I use between components?"

**Answer Path:**
1. Read DESIGN-TOKEN-SUMMARY.md → Spacing section
2. Key values: 24px related, 48px sections, 64-80px recovery

═══════════════════════════════════════════════════════════════════════════════

## BACKUP/ARCHIVE PROTOCOL

### Must Preserve (Cannot Regenerate)
All 12 files above — these are the system's IP.

### Can Regenerate
- Screenshots (from Playwright)
- Component HTML demos (from specs)
- Test files (from requirements)

### Should Keep (Context)
- Research files R1-R5 (methodology)
- Exploration files DD-001, DD-003 (learning)
- Re-audit files (verification evidence)

═══════════════════════════════════════════════════════════════════════════════

## DEPENDENCY DIAGRAM

```
┌─ Sanrok Reference Images (ORIGIN)
│
└─► KORTAI-ESSENCE-FOUNDATION.md
    └─► SOUL-TRANSLATION-GUIDE.md
        └─► MASTER-SOUL-SYNTHESIS.md
            │
            ├─► DESIGN-TOKEN-SUMMARY.md
            ├─► CHARACTER-FAMILY-COMPLETE.md
            ├─► PERCEPTUAL-TRUTHS.md
            ├─► NAMED-CHARACTERS.md
            └─► ANTI-PATTERNS.md
                │
                ├─► R3-DENSITY-DIMENSIONS.md
                ├─► R5-COMBINATION-THEORY.md
                └─► RESEARCH-SYNTHESIS.md
                    │
                    └─► DD-002-gradient.html (validation)
```

If any file in this chain changes, everything downstream needs review.
