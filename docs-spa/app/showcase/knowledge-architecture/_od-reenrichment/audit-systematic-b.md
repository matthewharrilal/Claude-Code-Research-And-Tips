<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/audit-systematic-b.md
Tier: C | Stage: 3 (Organization OD) | Generated: 2026-02-09

BUILT ON: OD-003-task-based.html, OD-005-spatial.html, audit-identity-brief.md
CONSUMED BY: consistency agent, Wave 6 verifiers
END INLINE THREADING HEADER
-->

# Systematic-B Programmatic Audit: OD-003 + OD-005

**Auditor:** systematic-b
**Date:** 2026-02-09
**Method:** File-based CSS source analysis (Playwright contention prevented browser-based evaluation; fell back to exhaustive grep/read analysis of all CSS declarations)
**Scope:** OD-003-task-based.html, OD-005-spatial.html

---

## OD-003: Task-Based Structure

### 1. border-radius Scan

**Result: FAIL -- 1 violation found**

| Location | Selector | Value | Severity |
|----------|----------|-------|----------|
| Line 427 | `.task-island__toggle` | `border-radius: 4px` | **CRITICAL -- SOUL VIOLATION** |

The `:root` declares `--border-radius: 0` (line 135), but the toggle button for collapsible `<details>` islands has a hardcoded `border-radius: 4px`. This is a direct Soul Piece 1 (Sharp Edges) violation. The toggle is a 24x24px box with a 3px border, used on every collapsible island -- likely dozens of instances in the rendered DOM.

**Note:** The file's own header comment (line 69) claims "Sharp Edges: border-radius: 0 in :root" but the toggle element does NOT use the token. It uses a literal value.

### 2. box-shadow Scan

**Result: PASS**

| Location | Selector | Value | Note |
|----------|----------|-------|------|
| Line 136 | `:root` | `--box-shadow: none` | Token declared correctly |
| Line 371 | `.task-island` | `box-shadow: none` | Explicit none -- correct |

Zero box-shadow violations. All shadow values are `none`.

### 3. filter Scan

**Result: PASS**

No `filter:` declarations found anywhere in the file. Zero violations.

### 4. Font Audit

**Result: PASS**

All `font-family` declarations use the approved trio via CSS custom properties:
- `var(--font-body)` = 'Inter', system-ui, sans-serif (body, navigation)
- `var(--font-display)` = 'Instrument Serif', Georgia, serif (titles, essence callouts)
- `var(--font-mono)` = 'JetBrains Mono', 'SF Mono', monospace (code, labels, meta)

Font stack in `:root` (lines 124-126) matches the locked palette exactly. No off-palette font references found (no 'Bebas Neue' or other unauthorized fonts).

**Inventory (33 font-family declarations):**
- `var(--font-mono)`: 25 instances (code blocks, labels, meta, badges, steps, toggles)
- `var(--font-display)`: 5 instances (titles, essence callouts, section headers)
- `var(--font-body)`: 3 instances (body, skip-link, footer links)

### 5. Color Audit

**Result: PASS with NOTES**

**Locked palette colors found (all valid):**
- `#E83025` (--color-primary)
- `#1A1A1A` (--color-text)
- `#FEF9F5` (--color-background, --color-zone-sparse)
- `#666666` (--color-text-secondary)
- `#E0D5C5` (--color-border)
- `#F0EBE3` (--color-border-subtle)
- `#FFFFFF` (--color-zone-dense)
- `#FAF5ED` (--color-zone-breathing)
- `#4A90D9` (--accent-blue)
- `#4A9D6B` (--accent-green)
- `#C97065` (--accent-coral)
- `#D97706` (--accent-amber)
- `#7C3AED` (--accent-purple)

**Extended colors (within code block syntax palette -- acceptable per convention spec):**
- `#6B9B7A` (code-string, sage green)
- `#4A7C9B` (code-function, muted blue)

**Off-palette colors found:**
| Location | Color | Context | Assessment |
|----------|-------|---------|------------|
| Line 449 | `#B8A080` | `.callout__label` text color | **NOTE** -- warm tan, not in locked palette. Functionally serves as a muted label color. Close to the palette's warm tone family but not an exact match to any token. |
| Line 462 | `#FEF5F4` | `.callout--prereq` background | **NOTE** -- very slight warm pink tint. Not in locked palette but extremely close to `#FEF9F5`. |
| Line 464 | `#F4FAF6` | `.callout--checkpoint` background | **NOTE** -- very slight cool green tint. Not in locked palette. |
| Line 535 | `#FEF6F5` | troubleshoot background | **NOTE** -- near-identical to `#FEF5F4`, warm pink tint. |

These callout tint colors create subtle differentiation between callout types. They are very close to the locked palette but technically not exact matches. The convention spec does not explicitly forbid contextual tinting for callout backgrounds, but the identity brief's Soul Check #5 says "Colors from locked palette only." This is a gray area -- flagged for consistency agent review.

### 6. Thin Border Count (borders < 3px, excluding tables)

**Result: 11 thin border declarations**

| Line | Selector | Value | Category |
|------|----------|-------|----------|
| 417 | `.task-complexity--beginner` | `1px solid var(--accent-green)` | Cat 3: micro-element badge |
| 418 | `.task-complexity--intermediate` | `1px solid var(--color-primary)` | Cat 3: micro-element badge |
| 419 | `.task-complexity--advanced` | `1px solid var(--accent-purple)` | Cat 3: micro-element badge |
| 448 | `.callout__label` | `border-bottom: 1px solid var(--color-border)` | Cat 2: data separator |
| 519 | `.code-block__line` | `border-bottom: 1px solid rgba(224,213,197,0.3)` | Cat 2: code line separator |
| 552 | `.troubleshoot__issue` | `border-top: 1px solid var(--accent-coral)` | Cat 2: separator |
| 591 | `.prerequisite__item` | `border-bottom: 1px solid var(--color-border-subtle)` | Cat 2: data separator |
| 631 | inline code | `border: 1px solid var(--color-border)` | Cat 3: micro-element |
| 632 | inline code | `border: 1px solid var(--color-border)` | Cat 3: micro-element |
| 657 | `.pattern-summary td` | `border-bottom: 1px solid var(--color-border)` | Cat 2: table separator |
| 662 | `.pattern-summary th` | `border-bottom: 1px solid var(--color-border)` | Cat 2: table separator |

All 1px borders are Cat 2 (data separators) or Cat 3 (micro-elements). Per the identity brief Section 4 ("Known Issues to SKIP"), 1px Cat 2/Cat 3 borders are ACCEPTABLE. **PASS.**

### 7. 2px Border Violations (OD-F-AP-001 Epidemic Check)

**Result: FAIL -- 1 violation found**

| Line | Selector | Value | Severity |
|------|----------|-------|----------|
| 439 | `.callout` | `border: 2px solid var(--color-border)` | **HIGH -- OD-F-AP-001 violation** |

The callout system's base `.callout` class uses a 2px border for its top/right/bottom sides. The left border is then overridden to 4px via `border-left: var(--border-left-width) solid` (line 440). However, the shorthand `border: 2px solid` sets all four sides first, meaning the top, right, and bottom remain at 2px.

Per the 3-category border system:
- Cat 1 (structural) must be >= 3px
- Cat 2 (separator) must be 1px
- Cat 3 (micro-element) must be 1px
- 2px is prohibited (structurally ambiguous)

The callout border is a structural container border (Cat 1) at 2px -- a violation. It should be either 3px (structural) or removed.

**Note:** The file header (line 15) claims "Applied OD-F-AP-001: 3-category border system, zero 2px borders" -- this is factually incorrect. The callout border was missed.

### 8. Opacity/rgba Violations (OD-AP-003)

**Result: FAIL -- 3 violations found**

| Line | Selector | Value | Severity |
|------|----------|-------|----------|
| 122 | `:root` | `--color-zone-emphasis: rgba(232,48,37,0.03)` | **HIGH -- OD-AP-003** |
| 458 | `.callout__body code` | `background: rgba(0,0,0,0.04)` | **HIGH -- OD-AP-003** |
| 519 | `.code-block__line` | `border-bottom: 1px solid rgba(224,213,197,0.3)` | **HIGH -- OD-AP-003** |
| 557 | `.troubleshoot__body code` | `background: rgba(0,0,0,0.04)` | **HIGH -- OD-AP-003** |

Per the identity brief: "ANY `rgba(` with alpha < 1.0 on backgrounds, pseudo-element backgrounds, or inline code backgrounds" is a violation. "Binary rule: opacity === 1.0 everywhere."

- Line 122: Zone emphasis token with 3% opacity primary red. Used as background for expanded task islands.
- Lines 458, 557: Inline code backgrounds using 4% black opacity instead of a solid color.
- Line 519: Code line separator with 30% opacity border color.

All four are semi-transparent backgrounds that violate the ANTI-PHYSICAL identity (creating material-like translucency effects).

### 9. Summary Verdict

| Check | OD-003 Result |
|-------|---------------|
| 1. border-radius | **FAIL** -- 1 violation (`.task-island__toggle: border-radius: 4px`) |
| 2. box-shadow | PASS |
| 3. filter | PASS |
| 4. Font audit | PASS |
| 5. Color audit | PASS with NOTES (4 off-palette callout tints) |
| 6. Thin borders | PASS (11 declarations, all Cat 2/Cat 3) |
| 7. 2px borders | **FAIL** -- 1 violation (`.callout: border: 2px solid`) |
| 8. Opacity/rgba | **FAIL** -- 4 violations (zone-emphasis, 2x inline code bg, code line separator) |

**OD-003 Overall: FAIL (3 categories failed)**

---

## OD-005: Spatial/Hub-Spoke Structure

### 1. border-radius Scan

**Result: PASS**

The `:root` declares `--border-radius: 0` (line 208). No other `border-radius` declarations found anywhere in the file. Line 573 explicitly comments "Soul Piece 5: Squares Signal System -- no border-radius" on the territory tile marker. Zero violations.

### 2. box-shadow Scan

**Result: PASS**

| Location | Selector | Value | Note |
|----------|----------|-------|------|
| Line 209 | `:root` | `--box-shadow: none` | Token declared correctly |
| Line 1069 | `@media print` | `* { box-shadow: none !important; }` | Print safety -- correct |

No box-shadow values other than `none`. Zero violations.

### 3. filter Scan

**Result: PASS**

No `filter:` declarations found anywhere in the file. Zero violations.

### 4. Font Audit

**Result: PASS**

All `font-family` declarations use the approved trio via CSS custom properties:
- `var(--font-body)`: 2 instances (body, skip-link)
- `var(--font-display)`: 11 instances (titles, territory names, callout essence, breadcrumbs, section headers)
- `var(--font-mono)`: 19 instances (code, labels, meta, badges, navigation)

Plus 1 inline style using `var(--font-display)` (line 2181). Font stack in `:root` (lines 195-197) matches the locked palette exactly. No off-palette fonts found.

### 5. Color Audit

**Result: PASS**

**Locked palette colors found (all valid):**
- `#E83025` (--color-primary)
- `#1A1A1A` (--color-text)
- `#FEF9F5` (--color-background, --color-zone-sparse)
- `#666666` (--color-text-secondary)
- `#E0D5C5` (--color-border)
- `#F0EBE3` (--color-border-subtle)
- `#FFFFFF` (--color-zone-dense)
- `#FAF5ED` (--color-zone-breathing)
- `#4A90D9` (--accent-blue)
- `#4A9D6B` (--accent-green)
- `#C97065` (--accent-coral)
- `#D97706` (--accent-amber)
- `#7C3AED` (--accent-purple)

**Code block syntax colors (acceptable per convention spec -- dark bg context):**
- `#FAFAF5` (code text, header text -- warm white)
- `#6B9B7A` (code-string, sage green)
- `#4A7C9B` (code-function, muted blue)
- `#E0D5C5` (code-operator, warm tan -- reuses border color)

All colors are either from the locked palette or within the established code-block syntax palette. No off-palette colors detected.

### 6. Thin Border Count (borders < 3px, excluding tables)

**Result: 8 thin border declarations**

| Line | Selector | Value | Category |
|------|----------|-------|----------|
| 495 | `.wave-indicator__zone` | `border-top: 1px solid var(--color-border-subtle)` | Cat 2: visual separator |
| 597 | `.breadcrumb__current` | `border: 1px solid var(--color-primary)` | Cat 3: micro-element |
| 748 | `.sidebar-panel__note` | `border-top: 1px solid var(--color-border-subtle)` | Cat 2: separator |
| 853 | `.code-block__line` | `border-bottom: 1px solid var(--color-border)` | Cat 2: code line separator |
| 867 | `.code-block__copy` | `border: 1px solid var(--color-border)` | Cat 3: micro-element |
| 928 | `.content-table td` | `border-bottom: 1px solid var(--color-border-subtle)` | Cat 2: data separator |
| 991 | `.footer-nav` | `border: 1px solid var(--color-border-subtle)` | Cat 2: separator |
| 1078 | `.inline-code` | `border: 1px solid var(--color-border)` | Cat 3: micro-element |

All 1px borders are Cat 2 (data separators) or Cat 3 (micro-elements). Per identity brief Section 4, these are ACCEPTABLE. **PASS.**

### 7. 2px Border Violations (OD-F-AP-001 Epidemic Check)

**Result: PASS**

No `2px` border declarations found in any CSS rules. The file header (line 156) correctly states: "Applied OD-F-AP-001: Eliminated ALL Category 1 borders < 3px (2px -> 3px structural, 2px -> 1px separator)." Verified: zero 2px border-width values in CSS.

### 8. Opacity/rgba Violations (OD-AP-003)

**Result: FAIL -- 5 violations found**

| Line | Selector | Value | Severity |
|------|----------|-------|----------|
| 801 | `.callout--info` | `background: rgba(74, 144, 217, 0.05)` | **HIGH -- OD-AP-003** |
| 806 | `.callout--tip` | `background: rgba(74, 157, 107, 0.05)` | **HIGH -- OD-AP-003** |
| 811 | `.callout--gotcha` | `background: rgba(201, 112, 101, 0.05)` | **HIGH -- OD-AP-003** |
| 816 | `.callout--essence` | `background: rgba(124, 58, 237, 0.04)` | **HIGH -- OD-AP-003** |
| 827 | `.callout--checkpoint` | `background: rgba(74, 157, 107, 0.06)` | **HIGH -- OD-AP-003** |

Per the identity brief: "ANY `rgba(` with alpha < 1.0 on backgrounds" is a violation. "Binary rule: opacity === 1.0 everywhere."

All 5 callout background colors use very low-alpha rgba values (0.04-0.06) to create subtle tinting. These should be replaced with solid colors from the locked palette (or solid pre-computed equivalents).

**Additional opacity check:**
- Line 279: `opacity: 0` in `@keyframes arrive` (scroll-reveal animation) -- NOT a visual element, animation start state
- Line 283/313/320: `opacity: 1` -- correct, restoring full opacity
- Line 565: `opacity: 1` on `.territory-tile::after` -- explicitly correct per identity-delta-wave1 comment

The scroll-reveal `opacity: 0` is an animation artifact, not a visual element with permanent semi-transparency. This is an edge case -- the identity brief says "on visual elements." During animation, elements briefly pass through sub-1.0 opacity. With `prefers-reduced-motion` properly handled (lines 306-316), this is defensible. Flagged as NOTE, not FAIL.

### 9. Summary Verdict

| Check | OD-005 Result |
|-------|---------------|
| 1. border-radius | PASS (zero violations) |
| 2. box-shadow | PASS (only `none`) |
| 3. filter | PASS (no filter declarations) |
| 4. Font audit | PASS (trio only, all via tokens) |
| 5. Color audit | PASS (locked palette + syntax palette) |
| 6. Thin borders | PASS (8 declarations, all Cat 2/Cat 3) |
| 7. 2px borders | PASS (zero 2px borders) |
| 8. Opacity/rgba | **FAIL** -- 5 violations (all callout backgrounds) |

**OD-005 Overall: FAIL (1 category failed)**

---

## Cross-Page Comparison

| Check | OD-003 | OD-005 |
|-------|--------|--------|
| border-radius | **FAIL** (1) | PASS |
| box-shadow | PASS | PASS |
| filter | PASS | PASS |
| Font audit | PASS | PASS |
| Color audit | PASS* | PASS |
| Thin borders | PASS (11) | PASS (8) |
| 2px borders | **FAIL** (1) | PASS |
| Opacity/rgba | **FAIL** (4) | **FAIL** (5) |
| **Overall** | **FAIL (3/8)** | **FAIL (1/8)** |

*OD-003 has 4 off-palette callout tint colors flagged as NOTES

### Systemic Observations

1. **OD-AP-003 (Semi-transparent backgrounds) is the #1 systemic issue across both pages.** OD-003 has 4 rgba violations, OD-005 has 5. Both use rgba for callout backgrounds (different implementation: OD-003 uses hex tints for some callouts but rgba for others; OD-005 uses rgba exclusively for callout typing). This confirms the identity brief's warning that semi-transparent backgrounds are "systemic, found in EVERY wave."

2. **OD-003 has unique violations not present in OD-005:** The border-radius: 4px on `.task-island__toggle` and the 2px callout border are OD-003-specific issues. OD-005 shows cleaner soul compliance overall.

3. **Callout system divergence:** OD-003 and OD-005 implement callouts differently:
   - OD-003: `border: 2px solid` + `border-left: 4px` override, with hex tint backgrounds (`#FEF5F4`, `#F4FAF6`)
   - OD-005: `border-left: 4px solid` only (no surrounding border), with rgba tint backgrounds
   - Neither approach is fully compliant, but OD-005's approach avoids the 2px epidemic issue.

4. **Hover safety:** OD-003 has zero hover declarations. OD-005 has 5 hover declarations, all using flat 2D effects (border-color change, background-color change) -- no transform-based z-depth. **Both PASS for hover safety.**

### Recommended Fixes (for consistency agent)

**OD-003 Critical:**
1. Line 427: Change `border-radius: 4px` to `border-radius: 0` on `.task-island__toggle`
2. Line 439: Change `border: 2px solid var(--color-border)` to `border: 3px solid var(--color-border)` on `.callout` (or `1px` if intended as separator)
3. Lines 122, 458, 519, 557: Replace all `rgba()` values with solid equivalents

**OD-005 Critical:**
1. Lines 801, 806, 811, 816, 827: Replace all `rgba()` callout backgrounds with solid colors. Pre-computed equivalents on `#FEF9F5` background:
   - `rgba(74, 144, 217, 0.05)` -> ~`#F5F6FA` (very light blue tint)
   - `rgba(74, 157, 107, 0.05)` -> ~`#F5F9F6` (very light green tint)
   - `rgba(201, 112, 101, 0.05)` -> ~`#FEF7F6` (very light coral tint)
   - `rgba(124, 58, 237, 0.04)` -> ~`#FAF7FE` (very light purple tint)
   - `rgba(74, 157, 107, 0.06)` -> ~`#F4F9F6` (slightly stronger green tint)

---

## Method Note

Playwright browser-based evaluation was unavailable due to Chrome session contention from concurrent audit agents. All checks were performed via exhaustive source-code analysis (grep + read) of the CSS `<style>` blocks and inline styles. For single-file HTML documents with all styles inline, this provides equivalent coverage to computed-style analysis -- computed styles derive directly from the CSS source when no external stylesheets conflict. The only gap is pseudo-element computed inheritance, which was addressed by tracing `:root` token values through `var()` references.
