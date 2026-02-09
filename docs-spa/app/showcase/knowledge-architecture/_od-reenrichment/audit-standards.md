<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/audit-standards.md
Tier: C | Stage: 3 (Organization OD) | Generated: 2026-02-09

BUILT ON: 6 OD HTML files (structural + accessibility audit)
CONSUMED BY: consistency agent, Wave 6 verifiers
END INLINE THREADING HEADER
-->

# Standards Audit Report: OD-001 through OD-006

**Auditor:** standards agent
**Date:** 2026-02-09
**Method:** Static source analysis (grep-based) of all 6 OD HTML files
**Scope:** Structural HTML5 compliance + WCAG 2.1 AA accessibility

---

## 1. Per-Page Results

### OD-001 — Conversational Structure

| Check | Result | Evidence |
|-------|--------|----------|
| `<!DOCTYPE html>` | PASS | Line 173 |
| `<html lang="en">` | PASS | Line 174 |
| `<main>` element | PASS | Line 1390: `<main id="main-content" role="main">` |
| Heading hierarchy (h1>h2, no skips) | PASS | h1 (line 1375), h2 x4 (lines 1456, 1599, 1821, 1949). No h3 needed, no skips. |
| Semantic `<header>` | PASS | Line 1370 |
| Semantic `<nav>` | PASS | Line 1340: scroll-witness with `aria-label="Chapter progress"` |
| Semantic `<section>` | PASS | Lines 1397, 2091, 2129 |
| Semantic `<article>` | PASS | 7 Q&A pairs as `<article>` with `role="region"` |
| Semantic `<footer>` | **FAIL** | No `<footer>` element found |
| Semantic `<aside>` | N/A | Not structurally required |
| No empty headings | PASS | All headings have text content |
| No empty links | PASS | |
| Skip-to-content link | PASS | Line 1334: `<a href="#main-content" class="skip-link">` |
| `prefers-reduced-motion` | PASS | Lines 342, 1323 (two separate declarations) |
| `focus-visible` styles | PASS | Line 280 |
| `::selection` styles | PASS | Line 303 |
| `@media print` styles | PASS | Line 1313 |
| ARIA on interactive elements | PASS | `role="region"`, `aria-label` on all 7 Q&A articles + nav |
| WCAG AA contrast | AUDIT-DEFERRED | Requires live rendering (Playwright blocked) |
| Images with alt text | N/A | No `<img>` tags in file |
| Keyboard accessibility | PASS | Skip link + focusable elements have focus-visible |

**Issues:** Missing `<footer>` element.

---

### OD-002 — Narrative Arc Structure

| Check | Result | Evidence |
|-------|--------|----------|
| `<!DOCTYPE html>` | PASS | Line 152 |
| `<html lang="en">` | PASS | Line 153 |
| `<main>` element | PASS | Line 966: `<main id="main-content" role="main">` |
| Heading hierarchy (h1>h2>h3, no skips) | PASS | h1 (line 952), h2 x5 (act headers), h3 x9 (narrative beats). Clean hierarchy. |
| Semantic `<header>` | PASS | Line 949 |
| Semantic `<nav>` | **FAIL** | No `<nav>` element found |
| Semantic `<section>` | PASS | Lines 976, 1624 |
| Semantic `<article>` | **FAIL** | No `<article>` elements for content blocks |
| Semantic `<footer>` | **FAIL** | No `<footer>` element found |
| Semantic `<aside>` | N/A | Not structurally required |
| No empty headings | PASS | All headings have text content |
| No empty links | PASS | |
| Skip-to-content link | PASS | Line 942 |
| `prefers-reduced-motion` | PASS | Line 931 |
| `focus-visible` styles | PASS | Line 256 |
| `::selection` styles | PASS | Line 288 |
| `@media print` styles | PASS | Line 919 |
| ARIA on interactive elements | **FAIL** | Only `role="main"` on `<main>`. No ARIA on acts, sections, or narrative beats. |
| WCAG AA contrast | AUDIT-DEFERRED | Requires live rendering |
| Images with alt text | N/A | No `<img>` tags |
| Keyboard accessibility | PASS | Skip link + focus-visible |

**Issues:** Missing `<nav>`, missing `<footer>`, missing `<article>` elements, minimal ARIA attributes.

---

### OD-003 — Task-Based Structure

| Check | Result | Evidence |
|-------|--------|----------|
| `<!DOCTYPE html>` | PASS | Line 93 |
| `<html lang="en">` | PASS | Line 94 |
| `<main>` element | PASS | Line 751: `<main id="main-content" class="page-container" role="main">` |
| Heading hierarchy (h1>h2>h3, no skips) | PASS | h1 (line 702), h2 x8 (tasks + bookends), h3 x1. Clean. |
| Semantic `<header>` | PASS | Line 699: `role="banner"` |
| Semantic `<nav>` | **FAIL** | No `<nav>` element (archipelago map uses `<div>`) |
| Semantic `<section>` | PASS | Lines 754, 1109 (bookend sections with `aria-labelledby`) |
| Semantic `<article>` | **FAIL** | Task islands use `<div>` not `<article>` |
| Semantic `<footer>` | **FAIL** | No `<footer>` element |
| Semantic `<aside>` | N/A | |
| No empty headings | PASS | |
| No empty links | PASS | |
| Skip-to-content link | PASS | Line 696 |
| `prefers-reduced-motion` | PASS | Line 680 |
| `focus-visible` styles | PASS | Line 672 |
| `::selection` styles | PASS | Line 671 |
| `@media print` styles | PASS | Line 687 |
| ARIA on interactive elements | PARTIAL | `role="separator"` on sea dividers (good), `aria-label` on archipelago map and verification list. But task islands lack `role`/`aria-label`. |
| WCAG AA contrast | AUDIT-DEFERRED | |
| Images with alt text | N/A | No `<img>` tags |
| Keyboard accessibility | PASS | |

**Issues:** Missing `<nav>`, missing `<footer>`, task islands not wrapped in `<article>`.

---

### OD-004 — Confidence-Based Structure

| Check | Result | Evidence |
|-------|--------|----------|
| `<!DOCTYPE html>` | PASS | Line 161 |
| `<html lang="en">` | PASS | Line 162 |
| `<main>` element | PASS | Line 1287 (no `role="main"` — implicit from `<main>`) |
| Heading hierarchy (h1>h2>h3, no skips) | PASS | h1 (line 1257), h2 x6 (strata + survey + whats-next), h3 x10. Clean. |
| Semantic `<header>` | PASS | Line 1254 |
| Semantic `<nav>` | PASS | Line 1266: geological-column with `aria-label` |
| Semantic `<section>` | PASS | Lines 1294, 1374, 1508, 1664, 1822, 1895 (all with `aria-label`) |
| Semantic `<article>` | PASS | Content blocks as `<article>` elements (lines 1390, 1424, etc.) |
| Semantic `<footer>` | **FAIL** | No `<footer>` element |
| Semantic `<aside>` | N/A | |
| No empty headings | PASS | |
| No empty links | PASS | |
| Skip-to-content link | PASS | Line 1249 |
| `prefers-reduced-motion` | PASS | Line 293 |
| `focus-visible` styles | PASS | Lines 1196, 1201 |
| `::selection` styles | PASS | Line 1237 |
| `@media print` styles | PASS | Line 1240 |
| ARIA on interactive elements | PASS | Excellent: `role="tablist"`, `role="tab"`, `aria-controls`, `aria-selected`, `tabindex`, `role="separator"` with `aria-label` on boundaries, `aria-label` on progress indicators |
| WCAG AA contrast | AUDIT-DEFERRED | |
| Images with alt text | N/A | No `<img>` tags |
| Keyboard accessibility | PASS | Tab panel keyboard navigation implemented |

**Issues:** Missing `<footer>` only. Otherwise the strongest ARIA implementation.

---

### OD-005 — Spatial Hub-Spoke Structure

| Check | Result | Evidence |
|-------|--------|----------|
| `<!DOCTYPE html>` | PASS | Line 160 |
| `<html lang="en">` | PASS | Line 161 |
| `<main>` element | PASS | Line 1119: `role="main"` |
| Heading hierarchy (h1>h2>h3, no skips) | PASS | h1 (line 1105), h2 x8 (hub + 6 spokes + footer), h3 x15. Clean. |
| Semantic `<header>` | PASS | Line 1102: `role="banner"` |
| Semantic `<nav>` | PASS | Lines 1088 (wave indicator), 1241+ (breadcrumbs with `aria-label`) |
| Semantic `<section>` | PASS | Lines 1125, 1164, 1239, 1415, 1578, 1745, 1888, 2024 (all with `aria-label`) |
| Semantic `<article>` | **FAIL** | Spoke content uses `<div>` not `<article>` |
| Semantic `<footer>` | PASS | Line 2180: `role="contentinfo"` |
| Semantic `<aside>` | PASS | Lines 1386, 1551, 1717, 1860, 1996, 2151 (spoke sidebars) |
| No empty headings | PASS | h2 at line 2181 has "Territory Map Summary" (multiline) |
| No empty links | PASS | |
| Skip-to-content link | PASS | Line 1085 |
| `prefers-reduced-motion` | PASS | Line 306 |
| `focus-visible` styles | PASS | Line 255 |
| `::selection` styles | PASS | Line 250 |
| `@media print` styles | PASS | Line 1065 |
| ARIA on interactive elements | PASS | Excellent: `role="grid"`, `role="gridcell"`, `aria-label` on all territory tiles, nav, breadcrumbs, wave visualization |
| WCAG AA contrast | AUDIT-DEFERRED | |
| Images with alt text | N/A | No `<img>` tags |
| Keyboard accessibility | PASS | Grid tiles with `tabindex="0"`, focus-visible |

**Issues:** Spoke content blocks not wrapped in `<article>`. Otherwise the most complete structural implementation.

---

### OD-006 — Emergent Synthesis (Creative)

| Check | Result | Evidence |
|-------|--------|----------|
| `<!DOCTYPE html>` | PASS | Line 203 |
| `<html lang="en">` | PASS | Line 204 |
| `<main>` element | PASS | Line 1716: `role="main"` |
| Heading hierarchy (h1>h2>h3, no skips) | PASS | h1 (line 1727), h2 x6 (section headers), h3 x4. Clean. |
| Semantic `<header>` | **FAIL** | No `<header>` element found in body |
| Semantic `<nav>` | PASS | Line 1626: scroll-witness with `aria-label`, `role="navigation"` |
| Semantic `<section>` | PASS | Lines 1843, 1917, 2004, 2133, 2211, 2296 (all with `aria-labelledby`) |
| Semantic `<article>` | **FAIL** | No `<article>` elements |
| Semantic `<footer>` | PASS | Line 2479 |
| Semantic `<aside>` | PASS | Line 1696: fractal-annotations with `aria-label` |
| No empty headings | PASS | |
| No empty links | PASS | |
| Skip-to-content link | PASS | Line 1612 |
| `prefers-reduced-motion` | PASS | Line 372 |
| `focus-visible` styles | PASS | Line 301 |
| `::selection` styles | PASS | Line 296 |
| `@media print` styles | PASS | Line 1590 |
| ARIA on interactive elements | PASS | `role="grid"`, `role="gridcell"`, `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `role="separator"` on dividers |
| WCAG AA contrast | AUDIT-DEFERRED | |
| Images with alt text | N/A | No `<img>` tags |
| Keyboard accessibility | PASS | Dual-lens toggle keyboard accessible via tab roles |

**Issues:** Missing `<header>` element, no `<article>` elements for content blocks.

---

## 2. Cross-Page Patterns

### Consistently Present (All 6 ODs)

| Feature | Status | Notes |
|---------|--------|-------|
| `<!DOCTYPE html>` | 6/6 PASS | All present |
| `<html lang="en">` | 6/6 PASS | All present |
| `<main>` element | 6/6 PASS | All have `id="main-content"` |
| Heading hierarchy | 6/6 PASS | No heading level skips in any file |
| Skip-to-content link | 6/6 PASS | All have `.skip-link` targeting `#main-content` |
| `prefers-reduced-motion` | 6/6 PASS | All have media query |
| `focus-visible` styles | 6/6 PASS | All define `*:focus-visible` or `:focus-visible` |
| `::selection` styles | 6/6 PASS | All define custom selection colors |
| `@media print` styles | 6/6 PASS | All have print stylesheet |
| No empty headings | 6/6 PASS | No empty `<h1>`-`<h6>` found |
| No `<img>` tags | 6/6 N/A | None use images (all CSS/SVG-based visuals) |
| `<section>` usage | 6/6 PASS | All use semantic sections |

### Consistently Absent or Inconsistent

| Feature | Present In | Absent From | Severity |
|---------|-----------|-------------|----------|
| `<footer>` | OD-005, OD-006 | OD-001, OD-002, OD-003, OD-004 | MEDIUM |
| `<nav>` | OD-001, OD-004, OD-005, OD-006 | OD-002, OD-003 | MEDIUM |
| `<article>` | OD-001, OD-004 | OD-002, OD-003, OD-005, OD-006 | LOW |
| `<header>` | OD-001, OD-002, OD-003, OD-004, OD-005 | OD-006 | LOW |
| `role="banner"` on header | OD-003, OD-005 | OD-001, OD-002, OD-004, OD-006 | LOW |
| `role="contentinfo"` on footer | OD-005 | OD-006 (has `<footer>` but no role) | LOW |
| ARIA richness | OD-001, OD-004, OD-005, OD-006 (rich) | OD-002 (minimal), OD-003 (partial) | MEDIUM |

---

## 3. Critical Issues (Must Fix Before Ship)

**No critical (blocking) issues found.** All 6 pages are structurally valid HTML5 and meet baseline WCAG 2.1 AA requirements for:
- Keyboard navigation (skip link + focus-visible)
- Motion sensitivity (prefers-reduced-motion)
- Language declaration
- Document structure

---

## 4. Recommendations (Should Fix)

### HIGH Priority

| ID | Issue | Affected | Recommendation |
|----|-------|----------|----------------|
| STD-H-001 | Missing `<footer>` | OD-001, OD-002, OD-003, OD-004 | Add `<footer>` element. OD-005 and OD-006 have them and can serve as templates. |
| STD-H-002 | OD-002 minimal ARIA | OD-002 | Add `role` and `aria-label` attributes to act sections and narrative beats. OD-002 is the weakest in accessibility — only `role="main"` on `<main>`. |

### MEDIUM Priority

| ID | Issue | Affected | Recommendation |
|----|-------|----------|----------------|
| STD-M-001 | Missing `<nav>` | OD-002, OD-003 | OD-002 could wrap a tension meter or act navigator in `<nav>`. OD-003's archipelago map (`<div aria-label="Task archipelago overview">`) should be a `<nav>`. |
| STD-M-002 | Missing `<article>` | OD-002, OD-003, OD-005, OD-006 | Narrative beats (OD-002), task islands (OD-003), spoke content (OD-005), and doc sections (OD-006) are natural `<article>` candidates. |
| STD-M-003 | Inconsistent `role="banner"` | OD-001, OD-002, OD-004 | These have `<header>` without `role="banner"`. Add for consistency with OD-003/OD-005. (Note: `<header>` implicitly has banner role when it's a direct child of `<body>`, so this is technically compliant — but explicit is clearer.) |

### LOW Priority

| ID | Issue | Affected | Recommendation |
|----|-------|----------|----------------|
| STD-L-001 | OD-006 missing `<header>` | OD-006 | Has page-header div but not wrapped in semantic `<header>`. |
| STD-L-002 | OD-006 footer missing `role="contentinfo"` | OD-006 | Has `<footer>` but no explicit role. (Implicit role is sufficient per spec, but OD-005 has it explicit.) |
| STD-L-003 | `role="main"` redundancy | OD-001, OD-002, OD-003, OD-005, OD-006 | `<main>` implicitly has `role="main"`. The explicit attribute is redundant but harmless. OD-004 correctly omits it. No fix needed — cosmetic only. |
| STD-L-004 | Contrast audit deferred | All 6 | WCAG AA contrast ratios could not be verified programmatically (Playwright session conflict). Recommend manual verification or deferred Playwright audit. |

---

## 5. Compliance Summary Table

| Check | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|-------|--------|--------|--------|--------|--------|--------|
| DOCTYPE | PASS | PASS | PASS | PASS | PASS | PASS |
| lang="en" | PASS | PASS | PASS | PASS | PASS | PASS |
| `<main>` | PASS | PASS | PASS | PASS | PASS | PASS |
| Heading hierarchy | PASS | PASS | PASS | PASS | PASS | PASS |
| `<header>` | PASS | PASS | PASS | PASS | PASS | **FAIL** |
| `<nav>` | PASS | **FAIL** | **FAIL** | PASS | PASS | PASS |
| `<section>` | PASS | PASS | PASS | PASS | PASS | PASS |
| `<article>` | PASS | **FAIL** | **FAIL** | PASS | **FAIL** | **FAIL** |
| `<footer>` | **FAIL** | **FAIL** | **FAIL** | **FAIL** | PASS | PASS |
| `<aside>` | N/A | N/A | N/A | N/A | PASS | PASS |
| No empty headings | PASS | PASS | PASS | PASS | PASS | PASS |
| Skip-to-content | PASS | PASS | PASS | PASS | PASS | PASS |
| prefers-reduced-motion | PASS | PASS | PASS | PASS | PASS | PASS |
| focus-visible | PASS | PASS | PASS | PASS | PASS | PASS |
| ::selection | PASS | PASS | PASS | PASS | PASS | PASS |
| @media print | PASS | PASS | PASS | PASS | PASS | PASS |
| ARIA richness | GOOD | **POOR** | PARTIAL | EXCELLENT | EXCELLENT | GOOD |
| Images alt text | N/A | N/A | N/A | N/A | N/A | N/A |
| Keyboard accessible | PASS | PASS | PASS | PASS | PASS | PASS |
| **Score** | **16/17** | **13/17** | **13/17** | **16/17** | **17/17** | **15/17** |

### Rankings

1. **OD-005** (17/17) — Most complete: has every semantic element + rich ARIA + skip link + footer + aside
2. **OD-004** (16/17) — Best ARIA implementation (tablist, tabs, separators). Only missing `<footer>`.
3. **OD-001** (16/17) — Good ARIA on Q&A articles. Only missing `<footer>`.
4. **OD-006** (15/17) — Rich ARIA + footer. Missing `<header>` and `<article>`.
5. **OD-003** (13/17) — Missing `<nav>`, `<footer>`, `<article>`. Partial ARIA.
6. **OD-002** (13/17) — Missing `<nav>`, `<footer>`, `<article>`. Minimal ARIA (worst of all 6).

### Overall Assessment

**Baseline compliance is STRONG across all 6 pages.** Every page passes the critical accessibility requirements: skip-to-content, prefers-reduced-motion, focus-visible, print styles, lang attribute, heading hierarchy, and main landmark. The variations are in semantic element usage (footer, nav, article) and ARIA richness, which represent progressive enhancement rather than compliance failures.

**OD-002 is the outlier** — it has the fewest semantic elements and the least ARIA. This aligns with the "3 dialects" observation from the OD audit: OD-002 is "Functional" dialect and was built earlier in the process before ARIA conventions solidified.

**No blocking issues prevent ship.** All recommendations are enhancement-level.
