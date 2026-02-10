# Fix Report: Fixer-C

**Files:** AD-005-choreography.html, AD-006-compound.html
**Date:** 2026-02-10
**Agent:** Fixer-C

---

## AD-005-choreography.html

### SYS-1: Header Padding
**Status:** ALREADY CORRECT -- no change needed
**Details:** Line 248 already has `padding: var(--space-16) var(--space-8)` (64px 32px), which matches the target value. No modification required.

### FIX-026: Body Line-Height
**Status:** ALREADY CORRECT -- no change needed
**Details:** Line 169 already has `line-height: 1.7`, which matches the target value. No modification required.

### FIX-028: Add RAR Section
**Status:** APPLIED
**Line:** Inserted after line 1705 (after `</script>`, before `</body>`)
**Details:** Added RESEARCH APPLICATION RECORD section with `display: none; aria-hidden="true"` containing R4-093, R4-094, DD-F-006, OD-F-FL-001 citations and soul compliance statement.

### ADDITIONAL: Hardcoded Color Audit
**Status:** PASS -- no violations found
**Details:** Searched all hex color values in the file. All hardcoded hex values are exclusively in:
1. The locked-layer `:root` token definitions (lines 74-143) -- correct location
2. CSS comments as annotations (e.g., `/* #1A1A1A */`) -- not actual values
3. Print `@media` block (`#f5f5f5`, `#ccc`) -- acceptable for print overrides
No hardcoded colors found in the axis-layer CSS. The B4 planted violation was already removed.

---

## AD-006-compound.html

### SYS-1: Header Padding
**Status:** ALREADY CORRECT -- no change needed
**Details:** Line 253 already has `padding: var(--space-16) var(--space-8)` (64px 32px), which matches the target value. No modification required.

### FIX-026: Body Line-Height
**Status:** ALREADY CORRECT -- no change needed
**Details:** Line 174 already has `line-height: 1.7`, which matches the target value. No modification required.

### FIX-008: Wrap Transition Matrix Table in Overflow Container
**Status:** APPLIED
**Line:** Around line 1564 (Section 3, transition-matrix table)
**Details:** Wrapped `<table class="transition-matrix">` in `<div style="overflow-x: auto;">`. Note: the base `table` style already has `display: block; overflow-x: auto` (lines 397-403), but the explicit wrapper ensures the transition matrix table specifically handles wide-viewport overflow correctly even if the base table style changes.

### FIX-012: Triple-Column Intermediate Breakpoint
**Status:** APPLIED
**Line:** Inserted new `@media (max-width: 1024px)` block before the existing 768px breakpoint (around line 1097)
**Details:** Added:
```css
@media (max-width: 1024px) {
  .triple-column {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: none;
  }
}
```
Result: 3 columns > 1024px, 2 columns 768-1024px, 1 column < 768px (via existing 768px rule).

### FIX-013: Drop-Cap in Grid Cells
**Status:** APPLIED
**Line:** Inserted after `.drop-cap::first-letter` rule (around line 560)
**Details:** Added rule to disable drop-cap styling inside grid cells:
```css
.bento-item .drop-cap::first-letter,
.z-top-left .drop-cap::first-letter,
.z-top-right .drop-cap::first-letter,
.z-bottom-left .drop-cap::first-letter,
.z-bottom-right .drop-cap::first-letter,
[class*="grid"] .drop-cap::first-letter {
  float: none;
  font-size: inherit;
  line-height: inherit;
}
```
This affects drop-caps inside z-layout quadrants, bento items, and any grid container. The drop-cap in `.z-top-left` (line 1195) and `.spiral-wide` (line 1642) content will now render correctly -- `.spiral-wide` is not a grid cell itself so its drop-cap remains active, while `.z-top-left` correctly gets drop-cap disabled since it's a grid cell.

### FIX-015: Pattern Echo Label Font-Size
**Status:** ALREADY CORRECT -- no change needed
**Details:** Line 652 already has `font-size: var(--type-meta)` (12px), which matches the target value. The fix specified changing from `9px` to `var(--type-meta)`, but the current value was already the target.

### FIX-020: Grid Gaps for Major Axis Zones
**Status:** APPLIED (3 rules changed)
**Lines:**
- `.bento-grid` gap: line ~801 -- changed from `var(--space-4)` to `var(--space-8)` (16px to 32px)
- `.spiral-layout` gap: line ~856 -- changed from `var(--space-4)` to `var(--space-8)` (16px to 32px)
- `.choreo-layout` gap: line ~904 -- changed from `var(--space-4)` to `var(--space-8)` (16px to 32px)
**Details:** Only major zone grids changed. Sub-grids like `.pattern-echo-grid` (gap: `var(--space-2)`), `.triple-column` (gap: `var(--space-4)`), and `.fractal-annotation` (gap: `var(--space-4)`) were left unchanged as they are sub-grids within cells or specialized layouts, not major axis zone grids.

### FIX-022: Spiral-Medium Border-Left Width
**Status:** APPLIED
**Line:** ~869
**Details:** Changed from `border-left: 3px solid var(--accent-green)` to `border-left: 4px solid var(--accent-green)`. The 4px matches the `--border-left-width` convention used across all accent border-left declarations (`.spiral-wide`: 4px, `.spiral-narrow`: 4px, `.spiral-deep`: 4px).

### FIX-028: Add RAR Section
**Status:** APPLIED
**Line:** Inserted after `</script>`, before `</body>` (end of file)
**Details:** Added RESEARCH APPLICATION RECORD section with `display: none; aria-hidden="true"` containing R4-095, R5-012, DD-F-006, AD-F-024, AD-F-025 citations and soul compliance statement.

---

## Summary

| Fix | File | Status |
|-----|------|--------|
| SYS-1 (Header Padding) | AD-005 | Already correct |
| SYS-1 (Header Padding) | AD-006 | Already correct |
| FIX-026 (Body Line-Height) | AD-005 | Already correct |
| FIX-026 (Body Line-Height) | AD-006 | Already correct |
| FIX-028 (RAR Section) | AD-005 | APPLIED |
| Hardcoded Color Audit | AD-005 | PASS (no violations) |
| FIX-008 (Overflow Container) | AD-006 | APPLIED |
| FIX-012 (Triple-Column Breakpoint) | AD-006 | APPLIED |
| FIX-013 (Drop-Cap in Grid) | AD-006 | APPLIED |
| FIX-015 (Echo Label Font) | AD-006 | Already correct |
| FIX-020 (Grid Gaps) | AD-006 | APPLIED (3 grids) |
| FIX-022 (Spiral Border Width) | AD-006 | APPLIED |
| FIX-028 (RAR Section) | AD-006 | APPLIED |

**Total fixes applied:** 8
**Already correct (no change needed):** 5
**Could not apply:** 0

## Unexpected Findings

1. **SYS-1 and FIX-026 were already at target values** in both files. The builders (Wave 1C) appear to have used the correct padding and line-height from the start, consistent with AD-CONVENTION-SPEC.md.

2. **FIX-015 was already at target value** in AD-006. The `.pattern-echo__label` already used `var(--type-meta)` (12px), not the `9px` the fix description expected. This suggests the builder already applied the correct token.

3. **Drop-cap scope consideration:** The FIX-013 rule disables drop-cap in z-layout quadrants. This affects the first drop-cap in `.z-top-left` (line 1195). The drop-cap in `.spiral-wide` (line 1642) remains active because `.spiral-wide` is a grid area name assignment, not a grid cell class matched by the selector. The drop-caps in `.f-scanline` elements (lines 1287, 1642) also remain active since `.f-layout` uses flexbox, not grid.
