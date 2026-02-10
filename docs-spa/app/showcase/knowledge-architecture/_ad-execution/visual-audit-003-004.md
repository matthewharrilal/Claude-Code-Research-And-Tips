# Visual Soul Audit: AD-003 and AD-004

**Auditor:** Visual-Auditor-2
**Date:** 2026-02-10
**Method:** Playwright programmatic DOM checks + fullPage screenshots + source code analysis
**Pages:** AD-003-bento-grid.html, AD-004-spiral.html

---

## AD-003: Bento Grid

### 1440px Viewport (622 elements scanned)

| Check | Description | Viewport | Result | Evidence |
|-------|-------------|----------|--------|----------|
| 1. BORDER-RADIUS | `borderRadius !== '0px'` | 1440px | **PASS** | 0 violations / 622 elements |
| 2. BOX-SHADOW | `boxShadow !== 'none'` | 1440px | **PASS** | 0 violations / 622 elements |
| 3. DROP-SHADOW | `filter` contains `drop-shadow` | 1440px | **PASS** | 0 violations / 622 elements |
| 4. 2PX BORDER | any border width === `2px` | 1440px | **PASS** | 0 violations / 622 elements |
| 5. RGBA OPACITY | `background-color` alpha < 1.0 | 1440px | **PASS** | 0 violations / 622 elements |
| 6. FONT CHECK | body=Inter, h1=Instrument Serif, code=monospace | 1440px | **PASS** | body: `Inter, system-ui, sans-serif`; h1: `"Instrument Serif", Georgia, serif`; code: `"JetBrains Mono", "SF Mono", monospace`. All 3 fonts loaded. |

**Screenshot:** `ad003-1440px-fullpage.png` (captured and verified on correct page)

### 768px Viewport (454 elements scanned)

| Check | Description | Viewport | Result | Evidence |
|-------|-------------|----------|--------|----------|
| 1. BORDER-RADIUS | `borderRadius !== '0px'` | 768px | **PASS** | 0 violations / 454 elements |
| 2. BOX-SHADOW | `boxShadow !== 'none'` | 768px | **PASS** | 0 violations / 454 elements |
| 3. DROP-SHADOW | `filter` contains `drop-shadow` | 768px | **PASS** | 0 violations / 454 elements |
| 4. 2PX BORDER | any border width === `2px` | 768px | **PASS** | 0 violations / 454 elements |
| 5. RGBA OPACITY | `background-color` alpha < 1.0 | 768px | **PASS** | 0 violations / 454 elements |
| 6. FONT CHECK | body=Inter, h1=Instrument Serif, code=monospace | 768px | **PASS** | body: `Inter, system-ui, sans-serif`; h1: `"Instrument Serif", Georgia, serif`; code: `"JetBrains Mono", "SF Mono", monospace`. JetBrains Mono loaded. Some `<code>` inside collapsed `<pre>` report `monospace` due to CSS inheritance, but the font IS loaded and applied to inline code elements. |

**Screenshot:** `ad003-768px-fullpage.png` (captured and verified on correct page)

### AD-003 Summary: 12/12 PASS

---

## AD-004: Spiral Layout

### 1440px Viewport (352 elements scanned)

| Check | Description | Viewport | Result | Evidence |
|-------|-------------|----------|--------|----------|
| 1. BORDER-RADIUS | `borderRadius !== '0px'` | 1440px | **PASS** | 0 violations / 352 elements |
| 2. BOX-SHADOW | `boxShadow !== 'none'` | 1440px | **FAIL** | **5 violations** / 352 elements. All 5 are `<pre>` elements with `box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px 0px`. |
| 3. DROP-SHADOW | `filter` contains `drop-shadow` | 1440px | **PASS** | 0 violations / 352 elements |
| 4. 2PX BORDER | any border width === `2px` | 1440px | **PASS** | 0 violations / 352 elements |
| 5. RGBA OPACITY | `background-color` alpha < 1.0 | 1440px | **PASS** | 0 violations / 352 elements |
| 6. FONT CHECK | body=Inter, h1=Instrument Serif, code=monospace | 1440px | **PASS** | body: `Inter, system-ui, sans-serif`; h1: `"Instrument Serif", Georgia, serif`; code: `"JetBrains Mono", "SF Mono", monospace`. All 3 fonts loaded. Some `<code>` inside `<pre>` inherit `monospace` due to CSS specificity, but the font IS loaded and applied to inline code. |

**Screenshot:** `ad004-1440px-actual.png` (captured and verified via URL check on correct page)

### 768px Viewport (source code analysis — Playwright contention prevented live DOM check)

| Check | Description | Viewport | Result | Evidence |
|-------|-------------|----------|--------|----------|
| 1. BORDER-RADIUS | `borderRadius !== '0px'` | 768px | **PASS** | Source: `*:where(:not(input, button, select)) { border-radius: 0; }` (line 113). No 768px media query adds border-radius. Deterministic PASS. |
| 2. BOX-SHADOW | `boxShadow !== 'none'` | 768px | **FAIL** | Source: `pre { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }` (line 261). No 768px media query removes it. Same 5 `<pre>` elements will have box-shadow at 768px. Deterministic FAIL. |
| 3. DROP-SHADOW | `filter` contains `drop-shadow` | 768px | **PASS** | Source: no `drop-shadow` anywhere in any CSS rule. Deterministic PASS. |
| 4. 2PX BORDER | any border width === `2px` | 768px | **PASS** | Source: no `2px` border width in axis-layer CSS. Locked-layer uses only `3px`, `1px`. Deterministic PASS. |
| 5. RGBA OPACITY | `background-color` alpha < 1.0 | 768px | **PASS** | Source: all backgrounds use CSS custom properties resolving to opaque hex values (#FFFFFF, #FEF9F5, #FAF5ED, #1A1A1A). No rgba backgrounds. Deterministic PASS. |
| 6. FONT CHECK | body=Inter, h1=Instrument Serif, code=monospace | 768px | **PASS** | Source: font declarations unchanged by media queries. Same font stack at all viewports. Deterministic PASS. |

**Screenshot:** Not captured at 768px due to Playwright contention (another agent navigated browser away during resize). 1440px screenshot confirms page layout.

### AD-004 Summary: 10/12 PASS, 2/12 FAIL

---

## FAIL Details: AD-004 Box-Shadow Violation

**Severity:** HIGH (soul violation)
**Location:** Locked-layer CSS, line 261 of `AD-004-spiral.html`
**Rule:** `pre { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }` (in `<style id="locked-layer">`)
**Affected elements:** All 5 `<pre>` code blocks on the page

| # | Element | Parent Context | box-shadow value |
|---|---------|----------------|------------------|
| 1 | `<pre>` | `.stratum__main` (Established stratum, code block 1) | `rgba(0, 0, 0, 0.1) 0px 4px 12px 0px` |
| 2 | `<pre>` | `.stratum__main` (Established stratum, code block 2) | `rgba(0, 0, 0, 0.1) 0px 4px 12px 0px` |
| 3 | `<pre>` | `.stratum--probable` (Probable stratum code block) | `rgba(0, 0, 0, 0.1) 0px 4px 12px 0px` |
| 4 | `<pre>` | `.comparison-grid__panel--established` (Speculative comparison) | `rgba(0, 0, 0, 0.1) 0px 4px 12px 0px` |
| 5 | `<pre>` | `.comparison-grid__panel--speculative` (Speculative comparison) | `rgba(0, 0, 0, 0.1) 0px 4px 12px 0px` |

**Root cause:** The locked-layer `pre` style at line 261 includes `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`. This contradicts `--box-shadow: none` declared at line 54 in the same `:root` block. The token is defined but NOT applied to the `pre` rule.

**Note:** The RAR block at the bottom of AD-004 claims "box-shadow: none everywhere" — this is **incorrect** per computed style evidence.

**Note:** AD-003 does NOT have this issue. Comparing locked-layer CSS between AD-003 and AD-004 would reveal whether this was introduced in the AD-004 build or is an inherited template difference.

**Fix:** Change line 261 from `box-shadow: 0 4px 12px rgba(0,0,0,0.1);` to `box-shadow: var(--box-shadow);` (which resolves to `none`), OR simply `box-shadow: none;`.

---

## Cross-Page Summary

| Page | Check | 1440px | 768px | Overall |
|------|-------|--------|-------|---------|
| AD-003 | 1. border-radius | PASS | PASS | PASS |
| AD-003 | 2. box-shadow | PASS | PASS | PASS |
| AD-003 | 3. drop-shadow | PASS | PASS | PASS |
| AD-003 | 4. 2px border | PASS | PASS | PASS |
| AD-003 | 5. rgba opacity | PASS | PASS | PASS |
| AD-003 | 6. font check | PASS | PASS | PASS |
| AD-004 | 1. border-radius | PASS | PASS | PASS |
| AD-004 | 2. box-shadow | **FAIL (5)** | **FAIL (5)** | **FAIL** |
| AD-004 | 3. drop-shadow | PASS | PASS | PASS |
| AD-004 | 4. 2px border | PASS | PASS | PASS |
| AD-004 | 5. rgba opacity | PASS | PASS | PASS |
| AD-004 | 6. font check | PASS | PASS | PASS |

**AD-003:** 6/6 PASS (clean)
**AD-004:** 5/6 PASS, 1/6 FAIL (box-shadow on pre elements)

---

## Methodology Notes

- AD-003: Full Playwright programmatic checks at both viewports. Clean.
- AD-004: Full Playwright programmatic checks at 1440px. 768px checks derived from source code analysis due to Playwright contention (shared browser instance with other auditor agents). Source code analysis is deterministic — the `box-shadow` rule is unconditional and not modified by any media query, so the FAIL verdict is certain at both viewports.
- All font checks used `await document.fonts.ready` before reading computed font-family.
- Screenshots captured with `fullPage: true`.
