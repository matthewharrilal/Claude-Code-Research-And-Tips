# Fix Report: Fixer-D (OD-005 + OD-006)

**Agent:** Fixer-D
**Files:** OD-005-spatial.html, OD-006-creative.html
**Completed:** 2026-02-07

---

## Absorption Protocol Executed

- **OD-005 identity:** SPATIAL/CARTOGRAPHIC — hub-and-spoke map, territory zones, WAVE+ISLANDS density pairing. Borders frame territories and zones.
- **OD-006 identity:** CREATIVE/FRACTAL — emergent synthesis, "Organization IS Density" thesis. The most fractal of all ODs. Borders between fractal scales are structural.
- **Key difference:** OD-006 uses different callout type names (insight/discovery/warning/note vs info/tip/gotcha/checkpoint in OD-005).

---

## HIGH Fixes

### Fix #4: Consolidate callout label colors to var(--color-text)

**OD-005 (lines ~747-794 pre-edit):**
- REMOVED 5 per-type `.callout__label` color rules: `.callout--info .callout__label { color: var(--accent-blue); }`, `.callout--tip .callout__label { color: var(--accent-green); }`, `.callout--gotcha .callout__label { color: var(--accent-coral); }`, `.callout--essence .callout__label { color: var(--accent-purple); }`, `.callout--checkpoint .callout__label { color: var(--accent-green); }`
- ADDED single consolidated rule: `.callout .callout__label { color: var(--color-text); font-weight: 600; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }`

**OD-006 (lines ~636-673 pre-edit):**
- REMOVED 5 per-type `.callout__label` color rules: `.callout--insight .callout__label { color: var(--accent-blue); }`, `.callout--discovery .callout__label { color: var(--accent-green); }`, `.callout--warning .callout__label { color: var(--accent-coral); }`, `.callout--note .callout__label { color: var(--accent-amber); }`, `.callout--essence .callout__label { color: var(--accent-purple); }`
- ADDED same consolidated rule as OD-005
- **NOTE:** OD-006 uses different callout type names (insight/discovery/warning/note) vs OD-005 (info/tip/gotcha/checkpoint). Both share the `--essence` variant. All 10 per-type color rules removed across both files.

### Fix #5: Upgrade Category 1 structural borders from 2px to 3px

**OD-005 upgrades (6 locations):**
| Selector | Role | Category | Line (pre-edit) |
|----------|------|----------|-----------------|
| `.territory-tile` border | Territory zone frame | 1 (UPGRADE) | ~495 |
| `.territory-tile::after` border | Solid offset shadow | 1 (UPGRADE) | ~521 |
| `.spoke__heading` border-bottom | Section divider | 1 (UPGRADE) | ~624 |
| `.return-link` border | Button/card frame | 1 (UPGRADE) | ~720 |
| `.code-block` border | Code block frame | 1 (UPGRADE) | ~810 |
| `.flowchart` border | Flowchart frame | 1 (UPGRADE) | ~918 |

**OD-005 LEFT at 2px (Category 2/3):**
| Selector | Role | Category |
|----------|------|----------|
| `.wave-diagram` border-bottom | Visualization separator | 2 |
| `.decision-table th` border-bottom | Table separator | 2 |
| `.decision-table tr:last-child td` border-bottom | Table separator | 2 |

**OD-006 upgrades (5 locations):**
| Selector | Role | Category | Line (pre-edit) |
|----------|------|----------|-----------------|
| `.scroll-witness` border-right | Sidebar frame | 1 (UPGRADE) | ~385 |
| `.solid-offset` border | Structural frame | 1 (UPGRADE) | ~605 |
| `.dual-lens__toggle` border | Section frame | 1 (UPGRADE) | ~686 |
| `.territory-tile` border | Zone frame | 1 (UPGRADE) | ~1040 |
| `.synthesis-card` border | Enrichment card | 1 (UPGRADE) | ~1104 |
| `.visual-index` border | Specimen grid | 1 (UPGRADE) | ~1136 |

**OD-006 LEFT at 2px (Category 2/3):**
| Selector | Role | Category |
|----------|------|----------|
| `.dual-lens__btn` border-right | Toggle internal divider | 2 |
| `.section-header` border-bottom | Transparent transition | 2 |
| `.stratum--emerging` border-left | Confidence encoding | 2 |
| `.certainty-badge--emerging` border | Badge micro-element | 3 |
| `.act-marker__icon` border | Step number square | 3 |
| `.task-island__number` border | Task number square | 3 |
| `.concept-link` border-bottom | Interactive hover | 2 |
| `.comparison-table th` border-bottom | Table separator | 2 |

---

## MEDIUM Fixes

### Fix #9: OD-005 ONLY — max-width 960px to 860px

**Two locations changed:**
1. `.exploration-header__inner` max-width: 960px → 860px (line ~320 pre-edit)
2. `.page-container` max-width: 960px → 860px (line ~375 pre-edit)

**Layout verification:** Territory grid uses `repeat(auto-fit, minmax(280px, 1fr))`. At 860px minus 48px padding = 812px available, still fits 2 columns (280px * 2 + 24px gap = 584px). Grid layout remains valid.

### Fix #11: *:focus-visible rule — BOTH files

Added after `:root` block in both files:
```css
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Fix #12: Skip-to-content link — BOTH files

**OD-005:**
- Already had `.skip-link` CSS and `<a href="#hub" class="skip-link">` — UPDATED:
  - Changed href from `#hub` to `#main-content`
  - Changed text from "Skip to territory map" to "Skip to main content"
  - Updated CSS to match spec (`top: -100%`, `padding: 8px 16px`, `font-size: 14px`, `border: none`)
  - Added `id="main-content"` to existing `<main>` tag

**OD-006:**
- Had NO skip link — ADDED:
  - New `.skip-link` CSS block with spec values
  - New `<a href="#main-content" class="skip-link">Skip to main content</a>` after `<body>`
  - Added `id="main-content"` to existing `<main>` tag

### Fix #13: Inline code font — BOTH files

Added to both files:
```css
code {
  font-family: var(--font-mono);
  font-size: 0.9em;
}
```

---

## LOW Fixes

### Fix #14: Favicon — BOTH files

Added to `<head>` in both files:
```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,...">
```
Red square with white "K" — matches KortAI brand identity.

### Fix #15: ::selection — BOTH files

Added to both files:
```css
::selection {
  background: var(--color-primary);
  color: var(--color-background);
}
```
Note: OD-005 uses `var(--color-background)` which resolves to `#FEF9F5`. OD-006 same.

### Fix #16: @media print — BOTH files

Added to both files:
```css
@media print {
  body { background: white; color: black; }
  .skip-link, .scroll-witness, nav { display: none; }
  a[href]::after { content: " (" attr(href) ")"; font-size: 0.8em; }
  * { box-shadow: none !important; }
}
```
Note: OD-006 includes `.scroll-witness` in print hide (its unique sidebar). OD-005 does not have `.scroll-witness` so that selector is harmless (no match).

---

## Soul Compliance Checklist

| Check | OD-005 | OD-006 |
|-------|--------|--------|
| border-radius: 0 everywhere | PASS (0 violations) | PASS (0 violations; content text mentions `8px` as anti-example only) |
| box-shadow: none | PASS | PASS (content text mentions `none` as example only) |
| No filter: drop-shadow() | PASS | PASS |
| Locked palette intact | PASS | PASS |
| Font trio intact | PASS (Instrument Serif, Inter, JetBrains Mono) | PASS |
| Border weights: 4px left accent OR 3px full | PASS | PASS |
| DD-F-006 fractal self-similarity | NOT BROKEN | NOT BROKEN (most fractal OD preserved) |

---

## Summary

- **Total changes:** 11 fix categories applied
- **OD-005:** 15 edits (2 HIGH, 3 MEDIUM, 3 LOW = 8 fix types)
- **OD-006:** 16 edits (2 HIGH, 3 MEDIUM, 3 LOW = 8 fix types)
- **OD-006 callout naming:** insight/discovery/warning/note (not info/tip/gotcha/checkpoint) — all handled correctly
- **OD-005 max-width:** Verified grid layout still works at 860px
- **Soul violations introduced:** 0
