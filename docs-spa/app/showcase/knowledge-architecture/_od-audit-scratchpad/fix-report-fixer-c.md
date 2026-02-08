# Fix Report: Fixer-C (OD-004-confidence.html)

**Agent:** Fixer-C
**File:** `docs-spa/app/showcase/explorations/organizational/OD-004-confidence.html`
**Date:** 2026-02-07

---

## Absorption Protocol Executed

**Step 1 (Read):** Full inline threading header read (lines 1-150). Understood GEOLOGICAL/CRESCENDO metaphor, 4 strata, DD-F-006 fractal compliance at 4 scales, all anti-patterns, and soul alignment.

**Step 2 (Reflect):** OD-004 = confidence stratification. Density inversely correlates with confidence. Stratum boundaries are Category 1 structural elements. Callout system has 6 variants with 4px left border DNA.

**Step 3 (Traverse):** No external traversal needed -- header was comprehensive.

**Step 4 (Carry Forward):** All fixes respect the GEOLOGICAL metaphor. Stratum structure unchanged.

**Step 5 (Identity):** Stratum boundaries, code blocks, crux blocks, troubleshoot cards, geological survey, and whats-next are Category 1 structural elements.

---

## Fix #1: Essence Callout Font (CRITICAL) -- NO CSS FIX NEEDED

### Investigation

**Method:** Playwright navigation to `http://localhost:8080/OD-004-confidence.html`, waited for `document.fonts.ready`, evaluated `getComputedStyle()` on both `.callout--essence .callout__body` elements.

**Evidence:**

| Property | Callout 1 (line ~1291) | Callout 2 (line ~1742) |
|----------|------------------------|------------------------|
| fontFamily | `"Instrument Serif", Georgia, serif` | `"Instrument Serif", Georgia, serif` |
| fontStyle | `italic` | `italic` |
| fontSize | `15px` | `15px` |
| fontWeight | `400` | `400` |

**Font loading status:** `Instrument Serif italic 400` -- status: `loaded`

**Conclusion:** The CSS at line ~766 correctly declares `font-family: var(--font-display); font-style: italic; font-size: 15px;` and the computed values confirm Instrument Serif italic IS rendering. The 3 audit agents who reported Inter/normal likely encountered a font-loading timing issue (the Google Fonts async load may not have completed before their getComputedStyle evaluation).

**OD-006 comparison:** Not needed -- OD-004 already renders correctly.

**Action taken:** None. CSS is correct as written.

---

## Fix #4: Consolidate Callout Label Colors (HIGH)

**What changed:** Removed 6 per-callout-type `.callout__label` color rules and replaced with a single consolidated rule.

**Before (lines 764-785):**
```css
.callout--essence .callout__label { color: var(--color-primary); }
.callout--tip .callout__label { color: var(--accent-green); }
.callout--checkpoint .callout__label { color: var(--accent-green); }
.callout--warning .callout__label { color: var(--accent-amber); }
.callout--gotcha .callout__label { color: var(--accent-coral); }
.callout--note .callout__label { color: var(--accent-blue); }
```

**After:**
```css
.callout .callout__label {
  color: var(--color-text);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

**Lines affected:** ~763-785 (CSS callout section)

---

## Fix #5: Upgrade Category 1 Structural Borders 2px to 3px (HIGH)

**Category 1 (UPGRADED to 3px):**

| Selector | Line | Purpose |
|----------|------|---------|
| `.geological-survey` | ~363 | Structural card frame |
| `.code-block` | ~861 | Code block frame |
| `.crux-block` | ~912 | Enrichment card |
| `.troubleshoot` | ~937 | Enrichment card |
| `.whats-next` | ~1044 | Structural card |

**Category 2 (LEFT at 2px):**

| Selector | Line | Purpose |
|----------|------|---------|
| `.survey-meta` border-top | ~456 | Table separator |
| `.content-block + .content-block` border-top | ~583, 606, 629, 652 | Content separators |
| `.comparison-column__label` border-bottom | ~819 | Table column label |

**Category 3 (LEFT at 2px):**

| Selector | Line | Purpose |
|----------|------|---------|
| `.progress-square` | ~709 | Micro-element |
| `.troubleshoot summary::before` | ~968 | Micro-element |
| `.verification-list__check` | ~1029 | Micro-element |

---

## Fix #6: Complete Tab ARIA (HIGH)

**What changed:**

1. Converted 3 `<div>` tab elements to `<button>` elements
2. Added `id`, `aria-controls`, `aria-selected`, `tabindex` to each tab button
3. Added 3 `<div role="tabpanel">` elements with `id`, `aria-labelledby`, `hidden`
4. Changed `aria-label` on tablist from "Confidence level filter" to "Confidence filter"
5. Added `cursor: pointer` and explicit `border-radius: 0` to button CSS
6. Added JavaScript keyboard navigation (ArrowLeft/Right, Home, End)
7. JS manages `aria-selected` toggling, `tabindex` (active=0, inactive=-1), panel `hidden`, and CSS active class

**HTML (lines ~1182-1190):**
```html
<div class="confidence-switcher reveal" role="tablist" aria-label="Confidence filter">
  <button role="tab" id="tab-facts" aria-controls="panel-facts" aria-selected="false" tabindex="-1">Facts Only</button>
  <button role="tab" id="tab-analysis" aria-controls="panel-analysis" aria-selected="true" tabindex="0">Full Analysis</button>
  <button role="tab" id="tab-everything" aria-controls="panel-everything" aria-selected="false" tabindex="-1">Everything</button>
</div>
<div role="tabpanel" id="panel-facts" aria-labelledby="tab-facts" hidden></div>
<div role="tabpanel" id="panel-analysis" aria-labelledby="tab-analysis"></div>
<div role="tabpanel" id="panel-everything" aria-labelledby="tab-everything" hidden></div>
```

**JS (before `</body>`):** ~30 lines of keyboard navigation and tab switching.

**Verified:** Click switching works. ArrowRight keyboard navigation confirmed ("Facts Only" -> "Full Analysis"). Focus management confirmed.

---

## Fix #7: Remove Dead Zone at ~6881px (HIGH) -- NO FIX NEEDED

### Investigation

**Method:** Playwright navigation, evaluated element positions and spacing at y=6881.

**Evidence:**

| Section | Top (px) | Bottom (px) | Height (px) |
|---------|----------|-------------|-------------|
| stratum--probable | 3509 | 6360 | 2851 |
| stratum-boundary 2->3 | 6424 | 6608 | 183 |
| stratum--speculative | 6608 | 9588 | 2980 |

**Inter-stratum transitions (consistent):**

| Transition | Gap before boundary | Gap after boundary | Total |
|------------|--------------------|--------------------|-------|
| est -> probable | 64px | 0px | 247px |
| probable -> speculative | 64px | 0px | 247px |
| speculative -> open | 84px | -20px | 265px |

**At y=6881:** This is within the speculative stratum -- specifically at the first `article.content-block` (starts at y=6874, top 20px padding). The stratum header (depth label, title, epistemic marker, evidence DNA) fills y=6628-6842. There is no dead zone.

**Root cause of audit finding:** The scroll-driven animation (`animation-timeline: view()`) causes `.reveal` elements to be opacity: 0 until they enter the viewport scroll range. When auditors used Playwright `scrollTo()` without physically scrolling, 14 elements were hidden (opacity < 0.5). A screenshot at y=6881 from a static scroll position would show the speculative stratum header area as blank because the `.reveal` elements hadn't been animated into view yet.

**Fallback already handles this:** `@supports not (animation-timeline: view())` and `@media (prefers-reduced-motion: reduce)` both set `opacity: 1; transform: none;`.

**Action taken:** None. No dead zone exists. Audit finding was a scroll-animation artifact.

---

## Fix #12: Skip-to-Content Link (MEDIUM)

**Added CSS (before `</style>`):**
```css
.skip-link {
  position: absolute; top: -100%; left: 0;
  background: var(--color-primary); color: var(--bg-warm, var(--color-background));
  padding: 8px 16px; z-index: 1000;
  font-family: var(--font-body); font-size: 14px;
  text-decoration: none; border: none;
}
.skip-link:focus { top: 0; }
```

**Added HTML (after `<body>`):**
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

**Added `id="main-content"` to existing `<main>` tag.**

---

## Fix #13: Inline Code Font (MEDIUM)

**Added CSS:** `code { font-family: var(--font-mono); font-size: 0.9em; }`

---

## Fix #14: Favicon (LOW)

**Added to `<head>` (after `<title>`):**
```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,...">
```
Red square with white serif "K" letter. Matches KortAI brand.

---

## Fix #15: Selection Styling (LOW)

**Added CSS:** `::selection { background: var(--color-primary); color: var(--color-background); }`

---

## Fix #16: Print Styles (LOW)

**Added CSS:**
```css
@media print {
  body { background: white; color: black; }
  .skip-link, .scroll-witness, nav { display: none; }
  a[href]::after { content: " (" attr(href) ")"; font-size: 0.8em; }
  * { box-shadow: none !important; }
}
```

---

## Soul Compliance Checklist

| Check | Status | Evidence |
|-------|--------|----------|
| border-radius: 0 everywhere | PASS | `--border-radius: 0` in :root (line ~196); explicit `border-radius: 0` on button (line ~503) |
| box-shadow: none | PASS | `--box-shadow: none` in :root (line ~197); only `!important` in print media |
| No filter: drop-shadow() | PASS | grep returns 0 matches |
| Locked palette intact | PASS | All colors via CSS variables, :root unchanged |
| Font trio intact | PASS | Instrument Serif, Inter, JetBrains Mono all via var() |
| Border weights: 4px left accent OR 3px full | PASS | 4px left borders on callouts; 3px full borders on structural elements (Fix #5) |
| GEOLOGICAL metaphor not broken | PASS | All 4 strata, 3 boundaries, geological survey, and density progression intact |

---

## Summary

| Fix | Severity | Action | Result |
|-----|----------|--------|--------|
| #1 | CRITICAL | Investigated | NO FIX NEEDED -- font renders correctly |
| #4 | HIGH | Applied | Callout labels consolidated to var(--color-text) |
| #5 | HIGH | Applied | 5 Category 1 borders upgraded 2px -> 3px |
| #6 | HIGH | Applied | Full tab ARIA with keyboard navigation |
| #7 | HIGH | Investigated | NO FIX NEEDED -- scroll animation artifact |
| #12 | MEDIUM | Applied | Skip-to-content link added |
| #13 | MEDIUM | Applied | Code font rule added |
| #14 | LOW | Applied | SVG favicon added |
| #15 | LOW | Applied | Selection styling added |
| #16 | LOW | Applied | Print styles added |

**Total changes:** 7 applied, 2 investigated (no fix needed), 0 regressions.
