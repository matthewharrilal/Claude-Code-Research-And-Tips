# CAPTAIN-VISUAL-REPORT
## Comprehensive Visual Audit — All 12 HTML Exploration Pages

**Captain:** Captain-Visual
**Date:** 2026-02-09
**Method:** Playwright screenshots at 1440px and 768px + getComputedStyle() verification
**Pages Audited:** 6 OD + 6 DD = 12 pages
**Screenshots:** 24 files (12 pages x 2 viewports)
**Elements Checked:** ~5,000+ DOM elements across all pages

---

## EXECUTIVE SUMMARY

### Soul Compliance (Hard Pass/Fail)

| Check | OD Results | DD Results | Total |
|-------|-----------|-----------|-------|
| border-radius: 0 | 0 violations across 6 ODs | 0 violations across 6 DDs | **0 VIOLATIONS** |
| box-shadow: none | 0 violations across 6 ODs | 0 violations across 6 DDs | **0 VIOLATIONS** |
| filter: none | 0 violations across 6 ODs | 0 violations across 6 DDs | **0 VIOLATIONS** |
| 2px borders | 0 found across 6 ODs | 0 found across 6 DDs | **0 VIOLATIONS** |

**CORE SOUL: PASS — Zero border-radius, box-shadow, filter, or 2px border violations across all 12 pages (~5,000+ elements).**

### rgba() Opacity Violations (OD-AP-003)

| Page | rgba Count | Status |
|------|-----------|--------|
| OD-001 | 10 | FAIL |
| OD-002 | 8 | FAIL |
| OD-003 | 18 | FAIL (worst OD) |
| OD-004 | 0 | PASS (reference) |
| OD-005 | 12 | FAIL |
| OD-006 | 0 | PASS |
| DD-001 | 7 | FAIL |
| DD-002 | 8 | FAIL |
| DD-003 | 10 | FAIL |
| DD-004 | 10 | FAIL (includes layer opacity 0.95) |
| DD-005 | 9 | FAIL |
| DD-006 | 10 | FAIL (includes fractal demo opacity) |
| **TOTAL** | **~102** | **10 of 12 pages FAIL** |

---

## SEVERITY BREAKDOWN

### CRITICAL (3)

1. **XVIS-003 — OD-002 Typography Cascade** — H2 sizes decrease to body-text level (16px). Undocumented creative divergence.
2. **VIS-DD-007 — DD-004 Layer Opacity** — stacked-layer and layer-atmosphere at rgba(254,249,245,0.95). Structural opacity violation.
3. **Systemic rgba() Background Pattern** — 102 instances across 10 of 12 pages. Only OD-004 and OD-006 are clean.

### HIGH (7)

4. **VIS-003/006/009/017 — OD rgba() backgrounds** — 48 instances across OD-001/002/003/005
5. **VIS-008 — OD-002 body height** — 7,743px (23% below minimum target)
6. **VIS-010 — OD-003 body height** — 6,532px (35% below minimum target)
7. **VIS-016 — OD-005 body height** — 18,473px (32% above maximum target)
8. **XVIS-004 — Callout background split** — Two implementations coexist (opaque vs rgba)
9. **XVIS-006 — OD page height variance** — 2.83x range, only 2/6 meet targets
10. **XVIS-DD-001 — DD h2 size inconsistency** — DD-004 (22px) and DD-005 (32px) deviate from 28px standard

### MEDIUM (6)

11. **XVIS-005 — Systemic 2.22px border rendering** — All 12 pages render 3px CSS as 2.22px computed
12. **XVIS-001 — OD-003 header title color** — Uses #FEF9F5 instead of #FAFAF5
13. **XVIS-002 — H2 border-bottom inconsistency** — OD-001/002 have them, others don't
14. **VIS-004 — OD-001 body height** — 9,787px (slightly below 10,000px)
15. **DD pre-convention architecture** — All 6 DDs use white headers, smaller type, no tokens
16. **VIS-018 — OD-005 h2 border-bottom mixed** — Some h2s have borders, others don't

### LOW (1)

17. **VIS-004 — OD-001 body height margin** — 213px below target (2% difference)

### NOTE (5)

18. **VIS-013/021 — OD-004/006 zero rgba** — Reference implementations
19. **VIS-020 — OD-006 light code blocks** — Intentional editorial dialect
20. **VIS-012 — OD-003 h2 no border** — Likely intentional for task structure
21. **XVIS-DD-002 — DD no type tokens** — Expected pre-convention
22. **XVIS-DD-004 — DD shorter than OD** — Expected (density demo vs full content)

---

## TOP 10 CRITICAL FINDINGS

| # | ID | Severity | Scope | Description |
|---|-----|----------|-------|-------------|
| 1 | SYSTEMIC | CRITICAL | 10/12 pages | **rgba() backgrounds: ~102 instances.** OD-AP-003 violation. Only OD-004 and OD-006 clean. |
| 2 | XVIS-005 | MEDIUM | 12/12 pages | **2.22px border rendering.** All pages show sub-pixel borders instead of 3px. Source: CSS or DPI issue. |
| 3 | XVIS-006 | HIGH | 4/6 ODs | **Page height targets missed.** OD-002 (77%), OD-003 (65%), OD-005 (132%) of target range. |
| 4 | XVIS-003 | CRITICAL | OD-002 | **Narrative h2 cascade undocumented.** H2 decreases to 16px = body text. Needs explicit divergence note. |
| 5 | XVIS-004 | HIGH | 4/6 ODs | **Two callout bg implementations.** OD-004 (opaque) vs OD-001/002/003/005 (rgba). Unify to opaque. |
| 6 | XVIS-DD-001 | HIGH | 2/6 DDs | **DD h2 size inconsistency.** DD-004 at 22px, DD-005 at 32px, standard is 28px. |
| 7 | VIS-DD-007 | CRITICAL | DD-004 | **Layer element opacity 0.95.** Structural use of semi-transparency. |
| 8 | XVIS-001 | MEDIUM | OD-003 | **Header title color wrong.** #FEF9F5 instead of #FAFAF5. |
| 9 | DD-ARCH | NOTE | 6/6 DDs | **Pre-convention architecture.** White headers, no type tokens, different sizing. |
| 10 | XVIS-002 | MEDIUM | Mixed | **H2 border-bottom inconsistent.** OD-001/002 have them; OD-003/004/006 don't; OD-005 mixed. |

---

## 13 BINARY GATE SUMMARY

| Gate | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 | DD-001 | DD-002 | DD-003 | DD-004 | DD-005 | DD-006 |
|------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|
| VA-01 Renders | P | P | P | P | P | P | P | P | P | P | P | P |
| VA-02 Overflow | P | P | P | P | P | P | P | P | P | P | P | P |
| VA-03 Alignment | P | P | P | P | P | P | P | P | P | P | P | P |
| VA-04 Typography | P | C | P | P | P | P | M | M | M | M | H | M |
| VA-05 Colors | P | P | P | P | P | P | P | P | P | P | P | P |
| VA-06 Spacing | P | P | P | P | P | P | M | M | M | M | M | M |
| VA-07 Borders | M | M | M | M | M | M | M | M | M | M | M | M |
| VA-08 Soul | P | P | P | P | P | P | P | P | P | P | P | P |
| VA-09 Responsive | P | P | P | P | P | P | P | P | P | P | P | P |
| VA-10 Code | P | P | P | P | P | N | - | - | - | - | - | - |
| VA-11 Headers | P | P | P | P | P | P | F | F | F | F | F | F |
| VA-12 Dead zones | P | P | P | P | P | P | P | P | P | P | P | P |
| VA-13 Research | P | P | P | P | P | P | P | P | P | P | P | P |

P=PASS, M=MEDIUM, H=HIGH, C=CRITICAL, F=FAIL, N=NOTE, -=N/A

---

## INTERNAL GATES

| Gate | Check | Result |
|------|-------|--------|
| CV-01 | All 12 worker report files exist | PASS (12 files written) |
| CV-02 | Both cross-comparison reports exist | PASS (visual-cross-od.md, visual-cross-dd.md) |
| CV-03 | >=24 screenshot files exist | PASS (24 files: 12 pages x 2 viewports) |
| CV-04 | Every OD report has research compliance section | PASS |

---

## RECOMMENDATIONS

### Immediate (Critical/High Fixes)

1. **Unify callout backgrounds to opaque.** Replace all `rgba(accent, 0.04-0.08)` with opaque equivalents (e.g., `#F0EBE3` or computed opaque color). Use OD-004 as reference implementation.

2. **Investigate 2.22px border rendering.** Check CSS source for the border declarations. If using font-size-relative units or calc(), replace with explicit `3px`. May be a DPI/zoom rendering artifact.

3. **Document OD-002 typography cascade.** Add explicit divergence documentation (like OD-006 Section 9 of convention spec) explaining the narrative arc heading size decrease.

### Recommended (Medium Fixes)

4. **Fix OD-003 h1 color** from #FEF9F5 to #FAFAF5.

5. **Address page height targets.** OD-003 and OD-002 need content expansion; OD-005 needs content consolidation.

6. **Standardize h2 border-bottom treatment** — either all ODs get them or none do (with per-pattern exceptions documented).

### Deferred (DD Pre-Convention)

7. **DD convention backport** is a separate work item. DD pages were built in Stage 2 before the convention existed. Backporting dark headers, type tokens, and convention sizing would be a significant effort.

---

## FILES PRODUCED

### Per-Page Reports
- visual-od-001.md through visual-od-006.md (6 files)
- visual-dd-001.md through visual-dd-006.md (6 files)

### Cross-Comparison Reports
- visual-cross-od.md
- visual-cross-dd.md

### Screenshots
- 24 PNG files in _comprehensive-audit/screenshots/

### This Report
- CAPTAIN-VISUAL-REPORT.md
