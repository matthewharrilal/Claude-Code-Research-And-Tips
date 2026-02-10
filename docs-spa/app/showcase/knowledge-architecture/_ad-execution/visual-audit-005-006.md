# Visual Soul Audit: AD-005 & AD-006

**Auditor:** Visual-Auditor-3
**Date:** 2026-02-10
**Pages:** AD-005-choreography, AD-006-compound
**Viewports:** 1440x900, 768x1024

---

## AD-005: Choreography

### 1440px Viewport (622 elements)

| Check# | Check | Result | Evidence |
|--------|-------|--------|----------|
| 1 | BORDER-RADIUS | **PASS** | 0 violations / 622 elements. All borderRadius === '0px'. |
| 2 | BOX-SHADOW | **PASS** | 0 violations. All boxShadow === 'none'. |
| 3 | DROP-SHADOW | **PASS** | 0 violations. No filter: drop-shadow detected. |
| 4 | 2PX BORDER | **PASS** | 0 violations. No border-width === '2px'. |
| 5 | RGBA OPACITY | **PASS** | 0 real violations. 558 elements report rgba(0,0,0,0) which is the default transparent background on elements without explicit backgrounds — NOT a real violation (alpha=0 means fully transparent, not semi-opaque). |
| 6 | FONT | **PASS** | body: `Inter, system-ui, sans-serif`. h1: `"Instrument Serif", Georgia, serif`. code: `"JetBrains Mono", "SF Mono", monospace`. |
| 7 | SCREENSHOT | **CAPTURED** | ad005-1440px-fullpage.png |

### 768px Viewport (454 elements)

| Check# | Check | Result | Evidence |
|--------|-------|--------|----------|
| 1 | BORDER-RADIUS | **PASS** | 0 violations / 454 elements. |
| 2 | BOX-SHADOW | **PASS** | 0 violations. |
| 3 | DROP-SHADOW | **PASS** | 0 violations. |
| 4 | 2PX BORDER | **PASS** | 0 violations. |
| 5 | RGBA OPACITY | **PASS** | 0 real violations (alpha > 0 and alpha < 1). |
| 6 | FONT | **PASS** | body: `Inter, system-ui, sans-serif`. h1: `"Instrument Serif", Georgia, serif`. code: `monospace`. |
| 7 | SCREENSHOT | **CAPTURED** | ad005-768px-fullpage.png |

**AD-005 VERDICT: PASS (14/14 checks clean)**

---

## AD-006: Compound Axis — The Convergence

### 1440px Viewport (620 elements)

| Check# | Check | Result | Evidence |
|--------|-------|--------|----------|
| 1 | BORDER-RADIUS | **PASS** | 0 violations / 620 elements. |
| 2 | BOX-SHADOW | **PASS** | 0 violations at 1440px. All boxShadow === 'none'. |
| 3 | DROP-SHADOW | **PASS** | 0 violations. |
| 4 | 2PX BORDER | **PASS** | 0 violations. |
| 5 | RGBA OPACITY | **PASS** | 0 real violations (alpha > 0 and alpha < 1). |
| 6 | FONT | **PASS** | body: `Inter, system-ui, sans-serif`. h1: `"Instrument Serif", Georgia, serif`. code: `"JetBrains Mono", "SF Mono", monospace`. |
| 7 | SCREENSHOT | **CAPTURED** | ad006-1440px-fullpage.png |

### 768px Viewport (352 elements)

| Check# | Check | Result | Evidence |
|--------|-------|--------|----------|
| 1 | BORDER-RADIUS | **PASS** | 0 violations / 352 elements. |
| 2 | BOX-SHADOW | **FAIL** | **5 violations.** All 5 are `<pre>` elements with `box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px 0px`. This shadow appears ONLY at 768px — at 1440px the same `<pre>` elements have `box-shadow: none`. A responsive CSS rule is adding box-shadow to code blocks at narrower viewports. |
| 3 | DROP-SHADOW | **PASS** | 0 violations. |
| 4 | 2PX BORDER | **PASS** | 0 violations. |
| 5 | RGBA OPACITY | **PASS** | 0 real violations. |
| 6 | FONT | **PASS** | body: `Inter, system-ui, sans-serif`. h1: `"Instrument Serif", Georgia, serif`. code: `"JetBrains Mono", "SF Mono", monospace`. |
| 7 | SCREENSHOT | **CAPTURED** | ad006-768px-fullpage.png |

**AD-006 VERDICT: FAIL (1 check failed — box-shadow on `<pre>` at 768px)**

---

## Summary

| Page | Viewport | Result | Violations |
|------|----------|--------|------------|
| AD-005 | 1440px | **PASS** | 0 |
| AD-005 | 768px | **PASS** | 0 |
| AD-006 | 1440px | **PASS** | 0 |
| AD-006 | 768px | **FAIL** | 5 `<pre>` elements have `box-shadow: rgba(0,0,0,0.1) 0px 4px 12px 0px` |

### Finding Detail: AD-006 Box-Shadow Violation

- **Severity:** HIGH — Soul Piece #4 prohibits all shadows
- **Scope:** 5 `<pre>` elements on AD-006 at 768px viewport only
- **Value:** `rgba(0, 0, 0, 0.1) 0px 4px 12px 0px`
- **Responsive-only:** At 1440px, the same elements have `box-shadow: none`. A CSS media query is conditionally adding this shadow at narrower viewports.
- **Root cause:** Likely a responsive stylesheet rule targeting `pre` elements below a breakpoint (possibly `@media (max-width: 1440px)` or similar).
- **Fix:** Remove the responsive `box-shadow` declaration from `<pre>` elements. Replace with `box-shadow: none` or a border-based alternative if visual distinction is needed.

### Screenshots Captured
- `ad005-1440px-fullpage.png`
- `ad005-768px-fullpage.png`
- `ad006-1440px-fullpage.png`
- `ad006-768px-fullpage.png`
