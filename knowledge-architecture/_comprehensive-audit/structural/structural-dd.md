# Structural Audit: 6 DD HTML Files

**Worker:** structural-dd
**Captain:** Captain-Structural
**Method:** Playwright getComputedStyle() after document.fonts.ready
**Date:** 2026-02-09

---

## Summary

| File | Elements | Soul Violations | 2px Borders | Skip Link | Main |
|------|----------|-----------------|-------------|-----------|------|
| DD-001 | 153 | 0 | 0 | **NO** | YES |
| DD-002 | 206 | 0 | 0 | **NO** | YES |
| DD-003 | 183 | 0 | 0 | **NO** | YES |
| DD-004 | 287 | 0 | 0 | **NO** | YES |
| DD-005 | 255 | 0 | 0 | **NO** | YES |
| DD-006 | 194 | 0 | 0 | **NO** | YES |

**Total elements scanned: 1,278**
**Soul violations (border-radius/box-shadow/filter): 0**
**2px borders: 0**

---

## Soul Compliance (10-item checklist)

ALL 6 DDs PASS all 10 soul checks:
- [x] border-radius: 0
- [x] box-shadow: none
- [x] filter: none
- [x] No parallax/z-axis
- [x] No rounded shapes
- [x] No traffic-light colors
- [x] Locked palette (--color-primary: #E83025)
- [x] --border-radius: 0

---

## Critical Findings

**STR-DD-001** | Medium | ALL DD files | Accessibility | Skip Link | Expected: Present | Actual: **Missing**
- None of the 6 DD files have a skip-link for keyboard navigation. The OD files all have skip-links per convention. The DD files predate the convention spec and were not re-enriched.

**STR-DD-002** | Medium | ALL DD files | `h1` | fontSize | Expected: 40px (2.5rem) | Actual: **32px**
- All DD h1 titles render at 32px instead of the convention's 40px (2.5rem). The DD files use an older type scale that predates the convention spec.

**STR-DD-003** | Medium | ALL DD files | `p` | fontSize | Expected: 16px (1rem) | Actual: **14px**
- Body text computes to 14px across all DDs instead of 16px. This is the older DD type scale.

**STR-DD-004** | Medium | DD-004, DD-005, DD-006 | `code` | fontFamily | Expected: JetBrains Mono | Actual: **monospace (generic)**
- Code elements use the generic `monospace` fallback instead of JetBrains Mono. DD-004 shows `monospace`, DD-005 shows `monospace` at 13px, DD-006 shows `monospace` at 11px. The JetBrains Mono webfont is not loaded in these DD files.

**STR-DD-005** | Low | ALL DD files | `:root` | --type-page | Expected: 2.5rem | Actual: **(empty)**
- The --type-page token is not defined in DD file :root blocks. The DD files predate the unified token convention.

---

## Font Verification

| File | h1 Font | h1 Size | Body Font | Body Size | Code Font | Code Size |
|------|---------|---------|-----------|-----------|-----------|-----------|
| DD-001 | Instrument Serif | 32px | Inter | 14px | (no code) | - |
| DD-002 | Instrument Serif | 32px | Inter | 14px | (no code) | - |
| DD-003 | Instrument Serif | 32px | Inter | 14px | (no code) | - |
| DD-004 | Instrument Serif | 32px | Inter | 14px | monospace | 14px |
| DD-005 | Instrument Serif | 32px | Inter | 14px | monospace | 13px |
| DD-006 | Instrument Serif | 32px | Inter | 14px | monospace | 11px |

Display font (Instrument Serif) is correct across all DDs.
Body font (Inter) is correct across all DDs.
Code font is incorrect in DD-004/005/006 — uses generic monospace instead of JetBrains Mono.

---

## Border System Compliance

| File | Cat 1 (3px+) | Cat 2 (1px) | Prohibited (2px) |
|------|-------------|-------------|-------------------|
| DD-001 | 7 | 0 | 0 |
| DD-002 | 10 | 0 | 0 |
| DD-003 | 15 | 0 | 0 |
| DD-004 | 14 | 0 | 0 |
| DD-005 | 24 | 0 | 0 |
| DD-006 | 9 | 0 | 0 |

**Zero prohibited 2px borders across all 6 DDs.**

---

## Context Note

The DD files predate the OD-CONVENTION-SPEC (which was created for OD re-enrichment). The findings above (missing skip-links, smaller type scale, missing JetBrains Mono) are **expected** because:
1. DD files were built in Stage 2 before convention unification
2. OD files were re-enriched in Stage 3 with the convention spec applied
3. DD files have NOT been re-enriched

These are not regressions but rather pre-existing divergences that should be addressed when DD files are eventually re-enriched.
