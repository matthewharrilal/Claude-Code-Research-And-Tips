<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: design-extraction/component-system/CLAUDE.md
Tier: C | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
Navigation file for agents entering component-system/. Documents the folder's
TRANSITIONAL status, explains which sub-artifacts are ACTIVE vs SUPERSEDED,
and directs agents to perceptual-audit-v2/synthesis/ as the T1 authority.

3. STATUS
ACTIVE

5. BUILT ON
Folder contents: perceptual-audit-v2/, SOUL-DEFINITION.md, ANTI-PATTERNS.md,
css/, components/, archive/. Created during Phase 2A Part 3 classification.

8. CONSUMED BY
All agents entering component-system/ read this first. It prevents agents from
using SUPERSEDED files (ANTI-PATTERNS.md, archive/) and routes them to T1 synthesis.

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# component-system — CLAUDE.md

## STATUS: TRANSITIONAL — Bridge to T1 Synthesis

This folder contains the component-level audit work that preceded and fed into perceptual-audit-v2/. Some files here are **SUPERSEDED** by T1 synthesis; others remain active.

## What This Folder Contains

- **perceptual-audit-v2/** — The T1 synthesis (ACTIVE, authoritative)
- **SOUL-DEFINITION.md** — Comprehensive soul definition (ACTIVE, locked)
- **ANTI-PATTERNS.md** — Anti-patterns collection (SUPERSEDED by T1 ANTI-PATTERNS-REGISTRY.md)
- **archive/** — Historical work (SUPERSEDED)
- **css/** — Production CSS implementations (9 files)
- **components/** — Component HTML implementations

## Why This Exists

This folder evolved over multiple phases:
1. **Phase 2.5** — Original perceptual audit (now in archive/)
2. **Phase 3** — Research expansion (now in archive/)
3. **Validation sprint** — Soul validation (now in archive/)
4. **Phase 4 (perceptual-audit-v2/)** — T1 synthesis (CURRENT)

The current authority is in `perceptual-audit-v2/synthesis/`. Files at this level are either actively used (SOUL-DEFINITION.md, css/) or superseded (ANTI-PATTERNS.md).

## Pipeline Position

```
Research → T1 Synthesis → DD → OD → AD → CD
           ↑
    [COMPONENT-SYSTEM]
    - perceptual-audit-v2/ = T1 (current authority)
    - archive/ = historical phases (2.5, 3, validation)
```

## Constraints (Read Before Modifying Anything)

- **DO NOT modify SOUL-DEFINITION.md** — It's locked soul authority
- **DO NOT use ANTI-PATTERNS.md** — It's SUPERSEDED; use synthesis/ANTI-PATTERNS-REGISTRY.md
- **DO NOT reference archive/ for new work** — It contains superseded and dangerous values
- **ALWAYS start in perceptual-audit-v2/synthesis/** — That's the T1 authority

## Key Files (Start Here)

| File | Purpose | Status |
|------|---------|--------|
| `perceptual-audit-v2/` | T1 synthesis hub | ACTIVE (authoritative) |
| `SOUL-DEFINITION.md` | Comprehensive soul definition | ACTIVE (locked) |
| `ANTI-PATTERNS.md` | Anti-patterns collection | SUPERSEDED |
| `css/variables.css` | Production CSS custom properties | ACTIVE |

## What You'll Find Here

| Item | Type | Status | Description |
|------|------|--------|-------------|
| `perceptual-audit-v2/` | Directory | ACTIVE | T1 synthesis — go here first |
| `archive/` | Directory | SUPERSEDED | Historical phases 2.5, 3, validation |
| `assets/` | Directory | ACTIVE | ASCII art, visual assets |
| `components/` | Directory | ACTIVE | Component HTML files |
| `css/` | Directory | ACTIVE | 9 production CSS files |
| `tests/` | Directory | ACTIVE | Test files and snapshots |
| `SOUL-DEFINITION.md` | File | ACTIVE | Complete soul authority (locked) |
| `ANTI-PATTERNS.md` | File | SUPERSEDED | Use synthesis/ version instead |
| `anti-pattern-comparison.html` | File | ACTIVE | Visual comparison demo |
| `index.html` | File | ACTIVE | Component demo page |
| `showcase-all.html` | File | ACTIVE | All-components showcase |
| `showcase-nested.html` | File | ACTIVE | Nested components showcase |
| `PROGRESS.md` | File | ACTIVE | Status tracking |

## Where To Go Next

| If You Want To... | Go To |
|-------------------|-------|
| Get T1 synthesis files | `perceptual-audit-v2/synthesis/` |
| See the complete soul definition | `SOUL-DEFINITION.md` (read-only) |
| Get production CSS | `css/variables.css` |
| See anti-patterns | `perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md` |
| Understand historical work | `archive/` (read-only, superseded) |

## Upstream Sources

- `../card-system/` — Original soul thinking (SUPERSEDED)
- `../archive/tokens/` — Original token explorations (SUPERSEDED, DANGEROUS)
- `../font-research/` — Typography decisions

## Downstream Consumers

- `../../docs-spa/app/showcase/explorations/` — DD work consumes T1 synthesis
- `../../docs-spa/app/showcase/DESIGN-SYSTEM/` — Public docs consume synthesis + CSS

## For Context Recovery

**perceptual-audit-v2 status:** COMPLETE (all 11 components, T1 locked)
**What to check:** Has synthesis/ been modified? If yes, investigate.
**Read first:** `perceptual-audit-v2/CLAUDE.md` for T1 orientation
