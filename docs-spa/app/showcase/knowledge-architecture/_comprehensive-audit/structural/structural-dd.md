# Structural Audit: 6 DD HTML Files
## structural-dd — Captain-Structural v2 Worker Output
**Date:** 2026-02-09 | **Method:** Playwright getComputedStyle() on http://localhost:3000

---

## Summary

| File | Elements | Soul Violations | 2px Borders | RGBA Semi-Transparent | Font Issues | Type Scale Issues |
|------|----------|-----------------|-------------|----------------------|-------------|-------------------|
| DD-001 | 153 | 0 | 0 | 7 (callout tints) | 0 | H1: 32px, H2: 28px |
| DD-002 | 206 | 0 | 0 | 8 (callout tints) | 0 | H1: 32px, H2: 28px |
| DD-003 | 183 | 0 | 0 | 10 (callout tints) | 0 | H1: 32px, H2: 28px |
| DD-004 | 287 | 0 | 0 | 10 (layer + callout) | 0 | H1: 32px/36px, H2: 22px |
| DD-005 | 255 | 0 | 0 | 9 (callout tints) | 0 | H1: 32px, H2: 32px |
| DD-006 | 194 | 0 | 0 | 10 (fractal demos) | 0 | H1: 32px, H2: 28px |
| **TOTAL** | **1,278** | **0** | **0** | **54** | **0** | **See notes** |

---

## Soul Compliance: PASS (0 violations across 1,278 elements)

- [x] border-radius: 0px — PASS (all 6 DDs)
- [x] box-shadow: none — PASS (all 6 DDs)
- [x] filter: none — PASS (all 6 DDs)

---

## Border System: PASS (zero 2px borders)

Zero instances of 2px borders across all DD files.

---

## Type Scale: DD files use DIFFERENT type scale than ODs

DD files were built BEFORE the OD-CONVENTION-SPEC was created. They use their own type scale:

| Level | DD Actual | OD Convention | Delta |
|-------|-----------|---------------|-------|
| H1 (page) | 32px (2rem) | 40px (2.5rem) | -8px |
| H2 (section) | 28px (1.75rem) | 26px (1.625rem) | +2px |

**This is NOT a violation.** DD files predate the OD convention spec. The convention spec explicitly applies to "OD-001 through OD-005" (Section 5) and "All re-enrichment builders" (preamble). DDs were not re-enriched to this spec.

**DD-specific anomalies:**
- STR-DD-001: Medium, DD-004, Has 3 H1 elements ("Density Layers", "Authorization Code Flow", "Token Refresh"). Should have 1 H1 per page.
- STR-DD-002: Low, DD-005, H2 elements at 32px (same as H1). "Understanding API Rate Limiting" and "Handling Rate Limit Errors Gracefully" render at 32px instead of 28px, losing hierarchy distinction.
- STR-DD-003: Note, DD-004, H2 elements at 22px — uses subsection scale for section headings. This is the LAYERS pattern — headers get smaller as you go deeper (bedrock vs atmosphere). Likely intentional.

---

## RGBA Semi-Transparent Backgrounds

54 instances across 6 DDs. All are intentional callout/component tints:
- Callout backgrounds: rgba at 0.05-0.08 alpha using accent colors
- DD-004 layer-atmosphere: rgba(254, 249, 245, 0.95) — intentional semi-transparent layer
- DD-006 fractal demos: rgba(232, 48, 37, 0.03-0.1) — intentional nested fractal depth visualization
- Code snippet headers: rgba(255, 255, 255, 0.05) — subtle header differentiation

**Assessment:** All rgba usage is intentional and serves the density pattern visualization.

---

## Font Verification: PASS

All 6 DDs: body=Inter, headings=Instrument Serif, code=JetBrains Mono. No issues.

---

## Semantic HTML and Accessibility

| Feature | DD-001 | DD-002 | DD-003 | DD-004 | DD-005 | DD-006 |
|---------|--------|--------|--------|--------|--------|--------|
| `<main>` | YES | YES | YES | YES | YES | YES |
| Skip link | NO | NO | NO | NO | NO | NO |
| `<nav>` | NO | NO | NO | NO | NO | NO |
| `<header>` | YES | YES | YES | YES | YES | YES |
| H1 count | 1 | 1 | 1 | **3** | 1 | 1 |
| ARIA regions | 0 | 0 | 0 | 0 | 0 | 0 |
| focus-visible | 0 | 0 | 0 | 0 | 0 | 0 |
| Reduced motion | NO | NO | NO | NO | NO | NO |
| Print media | NO | NO | NO | NO | NO | NO |

**Systemic DD Findings:**
- STR-DD-004: High, ALL DDs, Missing skip-link. Convention spec Section 12 requires `.skip-link` on all explorations. All 6 DDs lack it.
- STR-DD-005: High, ALL DDs, Missing `*:focus-visible` CSS rule. Convention spec Section 12 requires focus-visible styling.
- STR-DD-006: Medium, ALL DDs, Missing `@media (prefers-reduced-motion)` rule. Convention spec Section 12 requires it.
- STR-DD-007: Medium, ALL DDs, Missing `@media print` rule. Convention spec Section 12 requires it.
- STR-DD-008: Medium, ALL DDs, 0 ARIA regions. No semantic role="region" markup.

**Note:** These DD-systemic findings reflect that DD files predate the convention spec. They are pre-re-enrichment artifacts. If DD re-enrichment is planned, these should be addressed then.

---

## Per-File Finding Summary

| ID | Severity | File | Issue |
|----|----------|------|-------|
| STR-DD-001 | Medium | DD-004 | 3 H1 elements (should be 1) |
| STR-DD-002 | Low | DD-005 | H2 at 32px same as H1 (lost hierarchy) |
| STR-DD-003 | Note | DD-004 | H2 at 22px (intentional layers pattern) |
| STR-DD-004 | High | ALL DDs | Missing skip-link |
| STR-DD-005 | High | ALL DDs | Missing focus-visible CSS rule |
| STR-DD-006 | Medium | ALL DDs | Missing prefers-reduced-motion |
| STR-DD-007 | Medium | ALL DDs | Missing print media query |
| STR-DD-008 | Medium | ALL DDs | 0 ARIA regions |

**Total: 8 findings (0 Critical, 2 High, 4 Medium, 1 Low, 1 Note)**
