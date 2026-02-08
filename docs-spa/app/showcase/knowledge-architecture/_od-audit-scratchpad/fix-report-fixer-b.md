# Fix Report: Fixer-B (OD-003-task-based.html)

## File
`docs-spa/app/showcase/explorations/organizational/OD-003-task-based.html`

## Absorption Protocol Executed
- File identity: TASK-BASED/FUNCTIONAL density, ISLANDS (primary) + BOOKENDS (secondary)
- 661 computed thin border instances — most of any OD file
- Soul: 5/5 pieces, DD-F-006 fractal compliance at 4 scales
- Anti-patterns avoided: DD-F-015 (traffic-light), DD-F-016 (border inconsistency), R5-A1 (callout cacophony)

---

## HIGH Priority Fixes

### Fix #4: Consolidate callout label colors to var(--color-text)
**What changed:**
- REMOVED 7 per-callout-type `.callout__label` color rules (essence=red, prereq=red, tip=green, checkpoint=green, warning=amber, gotcha=coral, note=tan)
- ADDED single consolidated rule: `.callout .callout__label { color: var(--color-text); font-weight: 600; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }`
- The original `.callout__label` rule (lines ~602-610) still provides font-family, padding, and border-bottom
- The new consolidated rule provides color, font-weight, font-size, letter-spacing, text-transform — these override any conflicting values from the base rule
- Callout variant blocks now ONLY contain border-left-color and optional background overrides

### Fix #5: Upgrade Category 1 structural borders from 2px to 3px
**Border Category Analysis (OD-003 has 661 computed thin borders — most careful categorization required):**

**Category 1 — UPGRADED to 3px (structural frames, island borders, section dividers, code block frames):**
| Selector | Property | Was | Now | Reasoning |
|----------|----------|-----|-----|-----------|
| `.bookend-meta` | border-top | 2px | 3px | Structural divider within bookend front |
| `.task-map` | border | 2px | 3px | Structural frame for task map visualization |
| `.task-island` | border | 2px | 3px | Island frame — primary structural element |
| `.code-block` | border | 2px | 3px | Code block frame — structural container |
| `.troubleshoot` | border | 2px | 3px | Troubleshooting section frame |
| `.bookend-back` | border | 2px | 3px | Bookend back structural frame |
| `.pipeline-diagram` | border | 2px | 3px | Pipeline diagram structural frame |
| `.pattern-summary` | border | 2px | 3px | Pattern summary structural frame |
| `.whats-next` | border | 2px | 3px | What's next section structural frame |
| `.essence-quote` | border-top | 2px | 3px | Section divider for pullquote |
| `.essence-quote` | border-bottom | 2px | 3px | Section divider for pullquote |

**Category 2 — LEFT as 2px (table separators, connector lines, step number borders):**
| Selector | Property | Reasoning |
|----------|----------|-----------|
| `.task-overview__marker--current` | border: 2px | 10px marker — micro-element |
| `.task-map__square` | border: 2px | 36px map node — small interactive element |
| `.task-map__connector` | height: 2px | Connector line between nodes — not a border |
| `.task-step__marker` | border: 2px | 32px step number marker — micro-element |
| `.task-island__number` | border: 2px | 48px task number square — marker, not frame |
| `.pipeline-stage` | border: 2px | Small pipeline stage cell — table separator |
| `.verification-list__check` | border: 2px | 18px checkbox — micro-element |
| `.troubleshoot summary::before` | border: 2px | 20px toggle marker — micro-element |
| `.pipeline-diagram__flow` | gap: 2px | Spacing value, not a border |

**Category 3 — LEFT as 1px (micro-separators within components):**
| Selector | Property | Reasoning |
|----------|----------|-----------|
| `.callout__label` | border-bottom: 1px | Internal zone separator within callout |
| `.code-block__label` | border-bottom: 1px | Internal separator within code block |
| `.verification-list li` | border-bottom: 1px | List item separator |
| `.pattern-summary th/td` | border-bottom: 1px | Table row separator |
| `.pattern-summary__title` | border-bottom: 1px | Internal separator |
| `p code, li code` | border: 1px | Inline code micro-border |
| `.troubleshoot__body` | border-top: 1px | Internal separator within details |
| `.task-step::after` | width: 1px | Vertical connector line (intentional thin) |

### Fix #8: Remove --accent-tan: #B8A080
**What changed:**
- REMOVED `--accent-tan: #B8A080;` from `:root` (was line ~204)
- CHANGED `.callout--note` border-left-color from `var(--accent-tan)` to `var(--color-border)` — the note callout now uses the standard border color, distinguishing it by label text rather than off-palette accent
- The `.callout--note .callout__label` color rule was already eliminated by Fix #4 (consolidated to `var(--color-text)`)
- **Verified: zero instances of `accent-tan` or `#B8A080` remain in the file**

---

## MEDIUM Priority Fixes

### Fix #10: Add @media (prefers-reduced-motion: reduce) block
- Added at end of `<style>` block, before closing `</style>`
- Targets `*, *::before, *::after` with `animation-duration: 0.001ms !important`, `animation-iteration-count: 1 !important`, `transition-duration: 0.001ms !important`, `scroll-behavior: auto !important`
- This disables the scroll-driven `.reveal` animations for users who prefer reduced motion

### Fix #12: Add skip-to-content link
- Added `<a href="#main-content" class="skip-link">Skip to main content</a>` immediately after opening `<body>`
- Added `id="main-content"` to existing `<main class="page-container" role="main">` element
- CSS: `.skip-link` positioned absolute at `top: -100%` (hidden), becomes `top: 0` on `:focus`
- Uses `var(--color-primary)` background with `var(--color-background)` text
- No border-radius, no box-shadow — soul compliant

### Fix #13: Add code { font-family: var(--font-mono); font-size: 0.9em; }
- Added global `code` rule before the existing `p code, li code` rule
- Ensures ALL `<code>` elements (including those in callout bodies and other contexts) use the mono font
- The more specific `p code, li code` rule still applies additional styling (background, padding, border)

---

## LOW Priority Fixes

### Fix #14: Add favicon
- Added SVG data URI favicon in `<head>`, before font preconnect links
- Red square (#E83025) with white serif "K" — matches KortAI brand, no border-radius

### Fix #15: Add ::selection styling
- Added `::selection { background: var(--color-primary); color: var(--color-background); }`
- Placed near top of styles, before skip-link
- Uses locked palette colors only

### Fix #16: Add @media print styles
- Added after reduced-motion media query
- Hides: `.skip-link`, `.scroll-witness`, `nav`
- Shows URL in parentheses after links
- Forces: `body { background: white; color: black; }`
- Removes: `box-shadow: none !important` on all elements

---

## Soul Compliance Checklist (Post-Fix Verification)

| Check | Result | Evidence |
|-------|--------|----------|
| border-radius: 0 everywhere | PASS | Only in `:root` declaration, no rounded corners introduced |
| box-shadow: none | PASS | Only in `:root`, `.task-island--featured`, and print media |
| No filter: drop-shadow() | PASS | Zero instances in file |
| No fake depth, gradients, or blur | PASS | Zero instances of gradient or blur |
| Locked palette intact | PASS | #B8A080 completely removed, no off-palette colors |
| Font trio intact | PASS | Instrument Serif (display), Inter (body), JetBrains Mono (code) |
| Border weights: 4px left OR 3px full | PASS | All structural borders now 3px, 4px left accents preserved |

---

## Summary

| Priority | Fix # | Description | Status |
|----------|-------|-------------|--------|
| HIGH | #4 | Consolidate callout label colors | DONE |
| HIGH | #5 | Upgrade Cat 1 borders 2px→3px | DONE (11 upgraded, 8 left at 2px, 8 left at 1px) |
| HIGH | #8 | Remove --accent-tan #B8A080 | DONE (variable + 2 references removed) |
| MEDIUM | #10 | prefers-reduced-motion | DONE |
| MEDIUM | #12 | skip-to-content link | DONE |
| MEDIUM | #13 | code font baseline | DONE |
| LOW | #14 | favicon | DONE |
| LOW | #15 | ::selection styling | DONE |
| LOW | #16 | @media print | DONE |

**Total changes: 9 fixes applied, 0 soul violations introduced.**
