<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: design-extraction/archive/CLAUDE.md
Tier: C | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
Navigation file for agents entering archive/. Documents the DANGEROUS superseded
values in tokens/ (wrong border-radius, wrong shadows, wrong fonts like 'Bebas Neue')
and warns agents never to copy values from this folder.

3. STATUS
ACTIVE (the warning is active; the content it describes is SUPERSEDED/DANGEROUS)

5. BUILT ON
Historical token definitions, component specs, and layout experiments from
pre-audit phases. Created during Phase 2A Part 3 classification.

8. CONSUMED BY
Agents entering archive/ read this to understand the folder is frozen and dangerous.
Redirects to perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md for current values.

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# archive — CLAUDE.md

## STATUS: ARCHIVE — Contains DANGEROUS Superseded Values

**CRITICAL WARNING: The `tokens/` subdirectory contains values that VIOLATE soul-locked constraints.**

Do NOT copy values from this folder. They are historical records only.

## What This Folder Contains

Historical/superseded work from earlier design phases:
- **tokens/** — DANGEROUS: Pre-audit token values (wrong border-radius, wrong shadows, wrong fonts)
- **components/specs/** — Old component specifications
- **extraction/** — Extraction analysis work
- **variations/** — Layout variation experiments

## Why This Exists

This folder preserves historical work that has been superseded:
1. **tokens/** — Original token definitions BEFORE perceptual audit
2. **variations/** — Layout experiments that informed current patterns
3. **components/** — Specifications that evolved into T1 CHARACTER-FAMILY

The values here are WRONG by current standards but preserved to document evolution.

## Pipeline Position

```
[ARCHIVE] ──(historical)──> component-system/ → perceptual-audit-v2/ → T1
   ↑
   This folder is BEFORE the pipeline
   Contains superseded source material
```

## Constraints (CRITICAL — READ CAREFULLY)

### tokens/ Directory — DANGEROUS VALUES

| Token Type | Archive Value | Current Value | Violation |
|------------|---------------|---------------|-----------|
| `border-radius` | Various (4px, 8px, etc.) | **0** (locked) | Soul Piece 2: "Sharp Edges Only" |
| `box-shadow` | Various shadows | **none** (locked) | Soul Piece 2: "Sharp Edges Only" |
| `font-display` | 'Bebas Neue' | **'Instrument Serif'** (locked) | Soul Piece 5 |
| Color palette | Pre-audit colors | T1 locked colors | Soul alignment |

**Using these values will break the design system.**

### DO NOT:

- Copy ANY values from `tokens/`
- Reference `tokens/` in new work
- Update any file in this folder
- Remove SUPERSEDED headers

### FOR CURRENT VALUES:

Use `../component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md`

## What You'll Find Here

| Item | Type | Status | Description |
|------|------|--------|-------------|
| `tokens/` | Directory | DANGEROUS | Pre-audit tokens — WRONG VALUES |
| `components/` | Directory | SUPERSEDED | Old component specs |
| `extraction/` | Directory | SUPERSEDED | Extraction analysis |
| `variations/` | Directory | SUPERSEDED | Layout experiments |
| `PROGRESS-variations.md` | File | SUPERSEDED | Variation progress tracking |

## Upstream Sources

- Original design exploration and token extraction work (pre-audit phases)
- Early component specifications before perceptual deepening

## Downstream Consumers

- `../component-system/perceptual-audit-v2/` — T1 synthesis superseded all archive values
- Historical reference only — no active downstream consumers

## Where To Go Instead

| If You Want To... | Go To |
|-------------------|-------|
| Get current token values | `../component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md` |
| See current component specs | `../component-system/perceptual-audit-v2/synthesis/CHARACTER-FAMILY-COMPLETE.md` |
| Understand token evolution | Read `tokens/` (read-only), then compare to T1 |

## For Context Recovery

**Status:** ARCHIVE (contains superseded + dangerous values)
**Action:** Read-only, never copy values
**Files with SUPERSEDED headers:** All 7 files in tokens/
