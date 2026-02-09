# Structural Audit: CSS Property-Level Compliance Sweep
## structural-css — Captain-Structural v2 Worker Output
**Date:** 2026-02-09 | **Method:** Playwright getComputedStyle() sweep across all 12 HTML files

---

## Summary

Total elements scanned: **4,876** (3,598 OD + 1,278 DD)

| Property | Expected | OD Result | DD Result | Overall |
|----------|----------|-----------|-----------|---------|
| border-radius: 0px | All elements | 0 violations / 3,598 | 0 violations / 1,278 | **PASS** |
| box-shadow: none | All elements | 0 violations / 3,598 | 0 violations / 1,278 | **PASS** |
| filter: none | All elements | 0 violations / 3,598 | 0 violations / 1,278 | **PASS** |
| 2px borders | Zero instances | 0 instances / 3,598 | 0 instances / 1,278 | **PASS** |

---

## Soul Compliance Across All 12 HTML Files

### border-radius: CLEAN
Zero elements with computed border-radius != '0px' across 4,876 elements. The soul-locked `--border-radius: 0` token is honored universally.

### box-shadow: CLEAN
Zero elements with computed box-shadow != 'none' across 4,876 elements. The soul-locked `--box-shadow: none` token is honored universally.

### filter: CLEAN
Zero elements with computed filter != 'none' across 4,876 elements. No blur, drop-shadow, or other filter effects detected.

### 2px Borders: CLEAN
Zero instances of any border side computed at 2px across all 4,876 elements. The OD-F-AP-001 2px border epidemic has been fully eradicated from OD files, and DD files never had it (predating the fix).

---

## RGBA/Semi-Transparent Backgrounds

| File Group | Count | Assessment |
|------------|-------|------------|
| 6 OD files | 48 | All intentional callout accent tints (0.03-0.06 alpha) |
| 6 DD files | 54 | All intentional callout/pattern visualization tints |
| **Total** | **102** | All acceptable — no opacity violations |

Breakdown by type:
- **Callout tints** (~70): accent-color rgba at 0.04-0.08 alpha on callout backgrounds
- **Code snippet headers** (~10): rgba(255, 255, 255, 0.05) for subtle header differentiation
- **Pattern visualizations** (~15): Used in DD-004 layers and DD-006 fractal demos
- **Table alternating rows** (~7): rgba(232, 48, 37, 0.04) for subtle row differentiation

One minor finding:
- STR-CSS-001: Low, OD-003 inline code, Uses rgba(0, 0, 0, 0.04) — pure black not from accent palette. Should use #F0EBE3 or accent-derived rgba. (Duplicate of STR-OD-001)

---

## Font Stack Compliance

Verified via getComputedStyle().fontFamily:

| Role | Expected | Result |
|------|----------|--------|
| Body (`<body>`) | Contains 'Inter' | PASS (all 12 files) |
| Headings (H1, H2) | Contains 'Instrument Serif' | PASS (all 12 files) |
| Code (`<code>`, `<pre>`) | Contains 'JetBrains Mono' or 'SF Mono' | PASS (all files with code) |

---

## Type Scale Compliance

### OD Files (Convention Spec applies)
| Level | Expected | Result |
|-------|----------|--------|
| H1 | 40px (OD-006: 48px) | PASS |
| H2 | 26px | PASS (OD-002 narrative arc intentional variation) |

### DD Files (Pre-convention, own scale)
| Level | Actual | Note |
|-------|--------|------|
| H1 | 32px | DD's own scale, pre-convention |
| H2 | 28px (varies) | DD-004 H2 at 22px, DD-005 H2 at 32px |

---

## Border Category Compliance

All borders found in the 12 HTML files fall into the 3-category system:

| Category | Width | Instances | Assessment |
|----------|-------|-----------|------------|
| Cat 1: Structural/Accent | 3px+ (mostly 4px left) | Hundreds (callouts, headers) | PASS |
| Cat 2: Data Separators | 1px | Hundreds (table rows, HR, borders) | PASS |
| Cat 3: Micro-element | 1px | Dozens (badges, inline code) | PASS |
| **PROHIBITED: 2px** | 2px | **0** | **PASS** |

---

## Overall CSS Findings

| ID | Severity | Scope | Issue |
|----|----------|-------|-------|
| STR-CSS-001 | Low | OD-003 | Inline code rgba(0,0,0,0.04) — off-palette |

**Total: 1 finding (0 Critical, 0 High, 0 Medium, 1 Low)**
