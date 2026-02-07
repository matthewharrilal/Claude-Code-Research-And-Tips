<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: design-extraction/typography-system/CLAUDE.md
Tier: C | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
Navigation file for agents entering typography-system/. Documents the production
typography implementation for KORTAI: typography.css entry point, 3 CSS modules
(type-scale, stroke-treatments, typography-components), and Playwright test coverage.

3. STATUS
ACTIVE (T1 locked — modifications require Phase-level approval)

5. BUILT ON
font-research/FINAL-DECISION.md (Instrument Serif selection), DESIGN-TOKEN-SUMMARY.md
(locked token values). Created during Phase 2A Part 3 classification.

8. CONSUMED BY
Agents implementing typography consume these CSS files. typography.css is imported
by component-system CSS. Import order matters: type-scale -> stroke-treatments -> typography-components.

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# typography-system — CLAUDE.md

## STATUS: ACTIVE — T1 Typography Implementation

This folder contains the production typography implementation for KORTAI, including the locked `typography.css` that implements the Instrument Serif decision.

## What This Folder Contains

Typography implementation files:
- **typography.css** — Main entry point; imports 3 CSS modules in order
- **type-scale.css** — Size variables, line-height, letter-spacing
- **stroke-treatments.css** — Filled/outline text treatments (Sanrok signature)
- **typography-components.css** — Semantic component classes (.typo-hero, etc.)
- **index.html** — Typography demonstration page
- **tests/** — Playwright visual regression tests

## Why This Exists

After font-research/ selected Instrument Serif, this folder implements that decision in production CSS:
1. Defines `--font-display: 'Instrument Serif'` and font stacks
2. Sets up responsive typography scale with clamp() values
3. Implements filled/outline text treatments (Sanrok signature style)
4. Provides semantic component classes
5. Includes Playwright test coverage for visual regression

## Pipeline Position

```
font-research/ ──(decision)──> [TYPOGRAPHY-SYSTEM] ──(implements)──> DESIGN-TOKEN-SUMMARY.md
                                     ↓
                              typography.css (imports 3 modules):
                              1. type-scale.css
                              2. stroke-treatments.css
                              3. typography-components.css
```

## Constraints

- **DO NOT modify typography.css without Phase approval** — It's T1 locked
- **DO NOT change the font stack** — Instrument Serif is the soul's voice
- **Run tests after any changes** — Visual regression matters here
- **Import order matters** — type-scale → stroke-treatments → typography-components

## Key Files (Start Here)

| File | Purpose | Status |
|------|---------|--------|
| `typography.css` | Main entry point; imports 3 modules, defines :root variables | KEEP+FULL |
| `type-scale.css` | Responsive type scale with clamp() values | KEEP+FULL |
| `stroke-treatments.css` | Filled/outline text treatments | KEEP+FULL |
| `typography-components.css` | Semantic classes (.typo-hero, .typo-display-*, etc.) | KEEP+FULL |
| `index.html` | Typography demonstration page | KEEP+LIGHT |

## What You'll Find Here

| Item | Type | Description |
|------|------|-------------|
| `typography.css` | File | Main stylesheet — imports modules, :root variables |
| `type-scale.css` | File | Size variables, responsive clamp() values |
| `stroke-treatments.css` | File | Filled/outline text treatments |
| `typography-components.css` | File | Semantic typography component classes |
| `index.html` | File | Demo/test page with Sanrok reproduction |
| `PROGRESS.md` | File | Status tracking |
| `playwright.config.ts` | File | Test configuration |
| `package.json` | File | Dependencies for test runner |
| `tests/` | Directory | Playwright test suite |
| `test-snapshots/` | Directory | Visual regression baselines |

Note: `node_modules/`, `playwright-report/`, `test-results/` are build artifacts (gitignored).

## Where To Go Next

| If You Want To... | Go To |
|-------------------|-------|
| See complete token summary | `../component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md` |
| Understand the font decision | `../font-research/FINAL-DECISION.md` |
| See typography in context | `../../docs-spa/app/showcase/explorations/density/DD-006-fractal.html` |

## Upstream Sources

- `../font-research/FINAL-DECISION.md` — Instrument Serif selection
- `../component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md` — Locked token values
- `../component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md` — Soul Piece 5 (typography character)

## Downstream Consumers

- `../../docs-spa/app/showcase/explorations/density/` — DD explorations import typography.css
- `../../docs-spa/app/showcase/DESIGN-SYSTEM/` — Public docs reference typography implementation
- Any component implementation — MUST use these typography classes

## For Context Recovery

**Status:** ACTIVE (T1 implementation)
**Key file:** typography.css (locked, imports 3 modules)
**Depends on:** font-research/FINAL-DECISION.md
