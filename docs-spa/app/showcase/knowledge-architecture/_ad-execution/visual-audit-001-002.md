# Visual Soul Audit: AD-001 and AD-002

**Auditor:** Visual-Auditor-1
**Date:** 2026-02-10
**Server:** http://localhost:3333
**Pages:** AD-001-z-pattern.html, AD-002-f-pattern.html

---

## AD-001: Z-Pattern Axis

**URL:** http://localhost:3333/explorations/axis/AD-001-z-pattern.html
**Total Elements Scanned:** 454

### Viewport: 1440x900 (Desktop)

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1 | BORDER-RADIUS | **PASS** | 0 violations across 454 elements. All border-radius values are 0px. |
| 2 | BOX-SHADOW | **PASS** | 0 violations. All box-shadow values are 'none'. |
| 3 | DROP-SHADOW | **PASS** | 0 violations. No filter containing 'drop-shadow' found. |
| 4 | 2PX BORDER | **PASS** | 0 violations. No computed border width of exactly 2px found. |
| 5 | RGBA OPACITY | **PASS** | 0 violations. No background-color with alpha < 1.0 found. |
| 6 | FONT CHECK | **PASS** | Body: `Inter, system-ui, sans-serif`. H1: `"Instrument Serif", Georgia, serif`. Code: `monospace`. All correct. |

**Screenshots:** `/tmp/ad-audit-screenshots/AD-001-1440px.png`, `/tmp/ad-audit-screenshots/AD-001-1440px-fullpage.png`
**Visual scroll-through:** 7 viewport-level screenshots at 0, 1800, 3600, 5400, 7200, 9000, 10800px. No visual anomalies. Page height: 11,829px.

### Viewport: 768x1024 (Tablet/Mobile)

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1 | BORDER-RADIUS | **PASS** | 0 violations across 454 elements. |
| 2 | BOX-SHADOW | **PASS** | 0 violations. |
| 3 | DROP-SHADOW | **PASS** | 0 violations. |
| 4 | 2PX BORDER | **PASS** | 0 violations. |
| 5 | RGBA OPACITY | **PASS** | 0 violations. |
| 6 | FONT CHECK | **PASS** | Body: `Inter, system-ui, sans-serif`. H1: `"Instrument Serif", Georgia, serif`. Code: `monospace`. |

**Screenshots:** `/tmp/ad-audit-screenshots/AD-001-768px.png`, `/tmp/ad-audit-screenshots/AD-001-768px-fullpage.png`

### AD-001 Summary: 12/12 PASS

---

## AD-002: F-Pattern Layout

**URL:** http://localhost:3333/explorations/axis/AD-002-f-pattern.html
**Total Elements Scanned:** 516

### Viewport: 1440x900 (Desktop)

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1 | BORDER-RADIUS | **FAIL** | 6 violations. All are `<aside>` callout elements with `border-radius: 4px`. Classes: `callout--note`, `callout--tip` (x2), `callout--caution`, `callout--gotcha`, `callout--essence`. |
| 2 | BOX-SHADOW | **PASS** | 0 violations. |
| 3 | DROP-SHADOW | **PASS** | 0 violations. |
| 4 | 2PX BORDER | **PASS** | 0 violations. |
| 5 | RGBA OPACITY | **PASS** | 0 violations. |
| 6 | FONT CHECK | **PASS** | Body: `Inter, system-ui, sans-serif`. H1: `"Instrument Serif", Georgia, serif`. Code: `"JetBrains Mono", "SF Mono", monospace`. All correct. |

**Screenshots:** `/tmp/ad-audit-screenshots/AD-002-1440px.png`, `/tmp/ad-audit-screenshots/AD-002-1440px-fullpage.png`
**Visual scroll-through:** Full-page screenshot captured. No visual anomalies beyond border-radius finding.

### Viewport: 768x1024 (Tablet/Mobile)

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1 | BORDER-RADIUS | **FAIL** | 6 violations. Same 6 callout `<aside>` elements with `border-radius: 4px`. Identical to desktop. |
| 2 | BOX-SHADOW | **PASS** | 0 violations. |
| 3 | DROP-SHADOW | **PASS** | 0 violations. |
| 4 | 2PX BORDER | **PASS** | 0 violations. |
| 5 | RGBA OPACITY | **PASS** | 0 violations. |
| 6 | FONT CHECK | **PASS** | Body: `Inter, system-ui, sans-serif`. H1: `"Instrument Serif", Georgia, serif`. Code: `"JetBrains Mono", "SF Mono", monospace`. |

**Screenshots:** `/tmp/ad-audit-screenshots/AD-002-768px.png`, `/tmp/ad-audit-screenshots/AD-002-768px-fullpage.png`

### AD-002 Summary: 10/12 PASS, 2/12 FAIL

---

## Cross-Page Findings

### FINDING: AD-002 Border-Radius Violation (SEVERITY: HIGH)

- **What:** 6 `<aside class="callout callout--*">` elements on AD-002 have `border-radius: 4px`
- **Where:** AD-002-f-pattern.html only (AD-001 has 0 border-radius violations)
- **Affected classes:** `callout--note`, `callout--tip` (x2), `callout--caution`, `callout--gotcha`, `callout--essence`
- **Soul rule violated:** ANTI-PHYSICAL identity mandates `border-radius: 0` on all elements
- **Fix:** Set `.callout { border-radius: 0; }` in the AD-002 stylesheet
- **Viewport-independent:** Same violation at both 1440px and 768px (not a responsive-specific issue)

### Observation: Font Stack Difference (SEVERITY: NOTE)

- **AD-001 code font:** `monospace` (generic)
- **AD-002 code font:** `"JetBrains Mono", "SF Mono", monospace` (specific stack)
- **Assessment:** Both are valid monospace fonts. AD-002's explicit stack is arguably better. Not a soul violation, but a consistency note. AD-001 may benefit from adopting the same explicit stack.

---

## Overall Verdict

| Page | Desktop | Mobile | Total | Status |
|------|---------|--------|-------|--------|
| AD-001 | 6/6 PASS | 6/6 PASS | **12/12** | CLEAN |
| AD-002 | 5/6 PASS | 5/6 PASS | **10/12** | 1 FINDING (border-radius) |

**AD-001:** Full soul compliance. Zero violations across all checks at both viewports.

**AD-002:** Near-compliant. Single systematic violation: 6 callout aside elements have `border-radius: 4px` instead of `0px`. All other soul checks pass cleanly. Fix is trivial (one CSS rule).

---

## Methodology Notes

### DOM Checks vs Visual Scroll-Through

- **DOM checks** (`querySelectorAll('*')`) scan the FULL DOM regardless of scroll position. All 454 (AD-001) and 516 (AD-002) elements were checked programmatically at each viewport. These results are definitive.
- **Full-page screenshots** were captured using Playwright's `fullPage: true` option, which renders the entire page in a single shot without scrolling. These are definitive visual records.
- **Scroll-through inspection** was performed for AD-001 at 1440px (7 viewport positions from 0-10800px). Visual inspection confirmed no anomalies beyond what DOM checks found.

### Server Navigation Behavior (IMPORTANT)

The static server at localhost:3333 uses client-side routing that can auto-navigate away from the current page during scroll events or viewport resize. This was observed multiple times:
- Scrolling past AD-001's content boundary navigated to AD-005 (Choreography)
- Viewport resize from 1440 to 768 on AD-001 navigated to AD-004 (Spiral Layout)
- Scrolling on AD-002 at 1440px navigated to AD-004 (Spiral Layout)

**Impact on audit:** None. All programmatic DOM checks and full-page screenshots were captured BEFORE any navigation occurred. The `querySelectorAll('*')` checks execute instantly against the full DOM without triggering scroll events. Full-page screenshots use Playwright's internal rendering, not scroll-based capture.

**Recommendation for future auditors:** Always navigate explicitly to the target URL before each check. Do NOT rely on scroll position persistence. Take full-page screenshots immediately after navigation before any other interaction.
