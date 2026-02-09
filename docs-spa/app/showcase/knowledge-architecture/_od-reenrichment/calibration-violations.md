<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/calibration-violations.md
Tier: C | Stage: 3 (Organization OD) | Generated: 2026-02-09

BUILT ON: OD-003-task-based.html
CONSUMED BY: Lead post-audit (calibration detection analysis)
STATUS: REVEALED — All 3 violations removed, detection results documented
END INLINE THREADING HEADER
-->

# CALIBRATION VIOLATIONS — OD-003

## Purpose

3 intentional violations planted in OD-003-task-based.html to calibrate audit thoroughness.
If auditors detect <80% (fewer than 2 of 3), audit thoroughness is insufficient.

## Planted Violations

| # | Type | Location | Original Value | Planted Value | Line |
|---|------|----------|---------------|--------------|------|
| 1 | **border-radius** (Soul violation) | `.task-island__toggle` | (none — border-radius: 0 via :root) | `border-radius: 4px` | ~422 |
| 2 | **Off-palette color** | `.callout__label` color | `var(--color-text)` → `#1A1A1A` | `#B8A080` (not in locked palette) | ~447 |
| 3 | **2px structural border** (Cat 1 violation) | `.callout` border | (no top/right/bottom border) | `border: 2px solid var(--color-border)` (adds 2px on 3 sides) | ~438 |

## Detection Expectations

- **Violation 1** (border-radius: 4px): Should be caught by systematic agents (JS query for border-radius != 0) AND visual agents (toggle buttons appear rounded)
- **Violation 2** (off-palette #B8A080): Should be caught by systematic agents (color not in locked palette). Visual detection harder — subtle warm brown vs black labels
- **Violation 3** (2px structural border): Should be caught by systematic agents (2px border scan) and possibly visual agents (callout boxes now have visible top/right/bottom borders)

## Detection Results

| Violation | fresh-eyes | visual-b | systematic-b | Detection Rate |
|-----------|-----------|----------|-------------|----------------|
| border-radius: 4px (toggle) | YES | YES | YES | 3/3 (100%) |
| #B8A080 off-palette (callout label) | NO | YES | YES | 2/3 (67%) |
| 2px structural border (callout) | YES | YES | YES | 3/3 (100%) |
| **Overall** | **2/3 (67%)** | **3/3 (100%)** | **3/3 (100%)** | **8/9 (89%)** |

**Calibration Test: PASS** (>=80% overall detection rate)

Notes:
- fresh-eyes missed the subtle off-palette color (#B8A080 vs #1A1A1A) — expected given no design system context
- Both targeted auditors (visual-b, systematic-b) achieved 100% detection
- Systematic source-level analysis caught all 3 even without Playwright

## Post-Audit Actions — COMPLETE

1. Detection rate compared: 89% overall (PASS, threshold 80%)
2. All 3 violations REMOVED from OD-003 (2026-02-09)
3. Verified: border-radius line removed, color restored to var(--color-text), 2px border line removed
