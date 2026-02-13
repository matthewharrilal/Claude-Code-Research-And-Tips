<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: design-extraction/README.md
Tier: B | Batch: 5 | Date: 2026-02-06
═══════════════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
External-facing entry point for the design-extraction/ directory. Provides
a high-level overview of current work (font-research, typography-system),
phase status table, and locked CSS values for quick reference.

2. THE QUESTION THIS ANSWERS
"What is in design-extraction/, what phase are we in, and how do I use the
outputs?" — Oriented toward external readers and first-time visitors.

3. STATUS
ACTIVE (but stale phase table: "Phase 3: Color System" listed as NEXT is outdated;
perceptual-audit-v2 and T1 synthesis work are not reflected)

5. BUILT ON
- Phase progress documentation (font-research, typography-system, card-system)
- typography-system/ overview (locked CSS values, file table)
- archive/ supersession markers (Phase 3 card system documented as complete)

6. MUST HONOR
- Locked token values documented in this file must match T1 authority
  (component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md)
- Phase status claims must be accurate to current state

8. CONSUMED BY
- External readers (primary entry point)
- design-extraction/CLAUDE.md (references this for directory overview)

10. DIAGNOSTIC QUESTIONS
Q1: Does the phase status table reflect the actual current phase (Phase 2B
    inline threading), or is it stuck at an outdated "Phase 3: Color System NEXT"?
Q2: Do the locked CSS values in the "Locked Values" code block match the
    authoritative T1 values in DESIGN-TOKEN-SUMMARY.md?
Q3: Is the card-system/ section still listed as active work when it has been
    SUPERSEDED by perceptual-audit-v2?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
 -->

# Design Extraction - Sanrok-Inspired Design System

This directory contains the complete design system extraction based on Sanrok Studio's aesthetic.

---

## Current Work (Verified & Locked)

These directories contain the **active, tested, and verified** design system:

### `font-research/` - Phase 1: Font Identification
**Status:** ✅ COMPLETE

Font identification and selection process:
- `letterform-analysis.md` - 18+ character analysis from Sanrok reference
- `classification-research.md` - Typographic classification (Didone confirmed)
- `specimens/` - 7 font specimens analyzed
- `comparisons/` - Letter-by-letter comparison of 5 candidates
- `FINAL-DECISION.md` - **Final selection: Instrument Serif**

**Key Decision:** Instrument Serif (Google Fonts, FREE) - 30/40 match score.
This is the actual font Sanrok's live website uses.

---

### `typography-system/` - Phase 2: Typography CSS System
**Status:** ✅ COMPLETE (Tested & Verified)

Complete typography implementation:

| File | Purpose |
|------|---------|
| `typography.css` | Main entry point (imports all modules) |
| `type-scale.css` | Fluid sizes, line-heights, letter-spacing |
| `stroke-treatments.css` | Filled/outline text mixing (Sanrok signature) |
| `typography-components.css` | Semantic classes (.typo-hero through .typo-micro) |
| `index.html` | Interactive demo with Sanrok reproduction |
| `tests/` | 40 Playwright tests (100% pass) |
| `PROGRESS.md` | Complete verification documentation |

**Locked Values:**
```css
--font-display: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', -apple-system, sans-serif;
--color-primary: #E83025;
--color-background: #FEF9F5;
--leading-none: 0.9;  /* Sanrok's signature tight line-height */
```

**To Use:**
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="typography-system/typography.css">
```

---

## Archive (Reference Material)

The `archive/` directory contains earlier exploration work. This material informed the final typography system but has been **superseded**:

| Directory | Contains | Status |
|-----------|----------|--------|
| `archive/tokens/` | Early design token extraction | Superseded by typography-system |
| `archive/extraction/` | Initial image analysis (7 screenshots) | Reference only |
| `archive/components/` | Early component specifications | Reference only |
| `archive/variations/` | Design experiments (cards, callouts, code-blocks) | Experimental |
| `archive/PROGRESS-variations.md` | Variations progress tracking | Historical |

**Note:** If you need color tokens, spacing tokens, or other non-typography tokens, the `archive/tokens/` directory has useful starting points, but they haven't been verified like the typography system.

---

## Quick Start

### View the Typography Demo
```bash
open design-extraction/typography-system/index.html
```

### Run Typography Tests
```bash
cd design-extraction/typography-system
npm install
npx playwright install chromium
npm test
```

### Use in Your Project
```css
/* Import the typography system */
@import url('path/to/design-extraction/typography-system/typography.css');

/* Use semantic classes */
.my-hero { @apply typo-hero; }
.my-body { @apply typo-body; }

/* Or use CSS variables directly */
.custom-heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  line-height: var(--leading-snug);
}
```

---

## Phase Progress

| Phase | Status | Output |
|-------|--------|--------|
| Phase 1: Font Identification | ✅ COMPLETE | `font-research/FINAL-DECISION.md` |
| Phase 2: Typography System | ✅ COMPLETE | `typography-system/` |
| Phase 3: Color System | 🔜 NEXT | - |
| Phase 4: Spacing System | ⏳ Planned | - |
| Phase 5: Component Library | ⏳ Planned | - |

---

## Verification Results

### Playwright Tests: 40/40 PASS
- Font loading verified
- Type scale values verified
- Line heights verified
- Stroke treatments verified
- Visual regression baselines captured

### Human Verification: 12/12 PASS
- ✅ Stroke contrast visible
- ✅ Unbracketed serifs sharp
- ✅ R leg characteristic kick
- ✅ Italic angle correct
- ✅ Ball terminals present
- ✅ Viewport dominance achieved
- ✅ Line spacing tight (Sanrok signature)
- ✅ Filled/outline mixing works
- ✅ Overall Sanrok aesthetic

---

## Key Files Quick Reference

| Need This? | Look Here |
|------------|-----------|
| Font decision rationale | `font-research/FINAL-DECISION.md` |
| Typography CSS | `typography-system/typography.css` |
| Type scale values | `typography-system/type-scale.css` |
| Stroke treatments | `typography-system/stroke-treatments.css` |
| Visual demo | `typography-system/index.html` |
| Test suite | `typography-system/tests/typography.spec.ts` |
| Phase 2 progress | `typography-system/PROGRESS.md` |
