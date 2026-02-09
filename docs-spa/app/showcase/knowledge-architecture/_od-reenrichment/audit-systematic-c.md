<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/audit-systematic-c.md
Tier: C | Stage: 3 (Organization OD) | Generated: 2026-02-09

BUILT ON: OD-004-confidence.html, OD-006-creative.html, audit-identity-brief.md
CONSUMED BY: consistency agent, Wave 6 verifiers
END INLINE THREADING HEADER
-->

# Systematic-C Audit Report: OD-004 + OD-006

**Auditor:** systematic-c
**Method:** CSS source analysis (grep-based static audit of all style declarations)
**Date:** 2026-02-09
**Note:** Playwright browser unavailable (Chrome user-data-dir contention). Audit performed via exhaustive source-level pattern scanning, which catches ALL CSS declarations including those in unreachable code paths -- arguably more thorough than computed-style sampling.

---

## OD-004: Confidence-Based (OD-004-confidence.html, 1,978 lines)

### 1. border-radius Results

**PASS** -- Zero violations.

All `border-radius` declarations found:
- Line 206: `--border-radius: 0;` (root token)
- Line 578: `border-radius: 0;` (explicit reset)

Both values are `0`. No non-zero border-radius values exist anywhere in the file.

### 2. box-shadow Results

**PASS** -- Zero violations.

All `box-shadow` declarations found:
- Line 207: `--box-shadow: none;` (root token)
- Line 1244: `* { box-shadow: none !important; }` (universal override in reduced-motion)

Both enforce `none`. No box-shadow values other than `none` exist.

### 3. filter Results

**PASS** -- Zero violations.

No `filter:` declarations found in the entire file. Zero instances of drop-shadow, blur, brightness, or any filter effect.

### 4. Font Audit

**PASS** -- Zero violations.

Font variable definitions (line 193-195):
- `--font-display: 'Instrument Serif', Georgia, serif;`
- `--font-body: 'Inter', system-ui, sans-serif;`
- `--font-mono: 'JetBrains Mono', 'SF Mono', monospace;`

All 34 `font-family` declarations in the file use `var(--font-body)`, `var(--font-display)`, or `var(--font-mono)`. No direct font names outside the trio. No Bebas Neue, Roboto, Poppins, or any off-palette font.

One exception: `font-family='serif'` in the inline SVG favicon (line 167) -- this is a data URI icon, not a page element. **Not a violation.**

### 5. Color Audit

**PASS** -- Zero violations.

All unique hex colors found in CSS declarations:

| Color | Palette Status | Usage |
|-------|----------------|-------|
| `#E83025` | LOCKED (--color-primary) | Primary accent |
| `#FEF9F5` | LOCKED (--color-background) | Background, zone-sparse |
| `#1A1A1A` | LOCKED (--color-text) | Text, dark header bg, offset |
| `#666666` | LOCKED (--color-text-secondary) | Secondary text, code comments |
| `#E0D5C5` | LOCKED (--color-border) | Borders |
| `#F0EBE3` | LOCKED (--color-border-subtle) | Subtle borders |
| `#FFFFFF` | LOCKED (zone-dense/moderate) | Zone backgrounds |
| `#FAF5ED` | LOCKED (zone-breathing) | Breathing zones |
| `#FAFAF5` | ACCEPTABLE | Dark-bg text (warm white variant) |
| `#333333` | ACCEPTABLE | Dark header internal borders |
| `#4A90D9` | LOCKED (--accent-blue) | Accent |
| `#4A9D6B` | LOCKED (--accent-green) | Accent |
| `#C97065` | LOCKED (--accent-coral) | Accent |
| `#D97706` | LOCKED (--accent-amber) | Accent |
| `#7C3AED` | LOCKED (--accent-purple) | Accent |
| `#F4FAF6` | NOTE | Checkpoint callout bg (green-tinted) |
| `#FEF6F5` | NOTE | Error callout bg (coral-tinted) |

**Analysis:** `#F4FAF6` and `#FEF6F5` are callout-specific tinted backgrounds. These are not in the locked palette but are functional derivatives of accent colors (green-tint and coral-tint respectively for checkpoint and error callouts). These appear in prior ODs and were not flagged as violations in the original audit. **Borderline -- consistent with prior precedent, not a new violation.**

### 6. Thin Border (1px) Count

**PASS** -- All 1px borders are Cat 2 (data separator) or Cat 3 (micro-element), which is correct per the 3-category system.

Total 1px border declarations: **21**

Breakdown:
- Cat 3 micro within dark header: `border-top: 1px solid #333333` (line 383)
- Cat 2 data separators: `border-top: 1px solid var(--color-border-subtle)` (lines 668, 697, 727, 758)
- Cat 3 micro-elements: `border: 1px solid var(--color-border)` (lines 827, 879, 1023, 1109)
- Cat 3 inline code: `padding: 1px 5px` (lines 878, 1022, 1108 -- padding, not border)
- EXT-CONF-013 semantic encoding: `border-left: 1px solid var(--accent-purple)` (line 749) -- INTENTIONAL per Rule 5 inversion
- Cat 2 data separator: `border-bottom: 1px solid var(--color-border)` (line 863)
- Cat 3 micro within dark block: `border-bottom: 1px solid #333333` (line 998)
- Cat 3 micro-element: `border: 1px solid var(--accent-coral)` (line 1089)
- Cat 3 micro: `border-top: 1px solid var(--accent-coral)` (line 1099)
- Cat 3: `border-bottom: 1px solid var(--color-border-subtle)` (line 1141)
- Cat 3: `border: 1px solid var(--accent-green)` (line 1151)

All conform to the 3-category border system. No Cat 1 structural borders at 1px.

### 7. 2px Border Violations

**PASS** -- No structural 2px border violations.

All 2px occurrences found:

| Line | Declaration | Classification | Verdict |
|------|-------------|---------------|---------|
| 405 | `height: 2px` | Semantic: Speculative stratum marker height | NOT a border -- dimension |
| 718 | `border-left: 2px solid var(--accent-amber)` | EXT-CONF-013: Semantic confidence encoding (Speculative=2px) | INTENTIONAL Cat 3 |
| 1157 | `margin-top: 2px` | Spacing | NOT a border |
| 1198 | `outline-offset: 2px` | Focus outline offset | NOT a border |
| 1203 | `outline-offset: 2px` | Focus outline offset | NOT a border |

The only actual 2px border (line 718) is the **intentional semantic confidence encoding** from EXT-CONF-013. The identity brief explicitly exempts this: "OD-004 has a UNIQUE exception -- the 4px/3px/2px/1px border-weight gradient is a SEMANTIC encoding system (Cat 3)."

**Previously structural 2px borders have been fixed:** Lines 532 and 561 show `was 2px` comments confirming remediation to 3px. Lines 917 and 938 similarly show prior 2px -> 3px fixes.

### 8. Opacity/rgba Violations

**PASS** -- Zero violations.

- **rgba:** Zero `rgba(` occurrences in the entire file.
- **opacity:** 4 occurrences, all in scroll animation context:
  - Line 276: `from { opacity: 0; ... }` -- animation keyframe start (invisible -> visible)
  - Line 277: `to { opacity: 1; ... }` -- animation keyframe end
  - Line 301: `opacity: 1;` -- fallback for non-supporting browsers
  - Line 308: `opacity: 1;` -- reduced-motion override

All opacity values are either `0` (animation start state) or `1` (full opacity). No semi-transparent visual elements.

### 9. OD-004 Summary Verdict

| Check | Result | Violations |
|-------|--------|------------|
| 1. border-radius | **PASS** | 0 |
| 2. box-shadow | **PASS** | 0 |
| 3. filter | **PASS** | 0 |
| 4. Font audit | **PASS** | 0 |
| 5. Color audit | **PASS** | 0 (2 borderline callout tints, consistent with precedent) |
| 6. Thin border (1px) | **PASS** | 0 (all Cat 2/Cat 3 correct) |
| 7. 2px border | **PASS** | 0 (1 intentional semantic encoding) |
| 8. Opacity/rgba | **PASS** | 0 |

**OD-004 OVERALL: PASS (8/8 checks clean)**

---

## OD-006: Creative/Emergent (OD-006-creative.html, 2,634 lines)

### 1. border-radius Results

**PASS** -- Zero violations.

All `border-radius` declarations found (33 instances):
- Line 252: `--border-radius: 0;` (root token)
- Lines 515, 528, 620, 684, 717, 730, 741, 793, 802, 845, 857, 915, 961, 1013, 1041, 1110, 1150, 1166, 1215, 1247, 1260, 1296, 1311, 1324, 1337, 1353, 1359, 1382, 1387, 1448, 1472: All `border-radius: 0;`

Every single border-radius declaration is `0`. 33/33 = 100% compliant.

### 2. box-shadow Results

**PASS** -- Zero violations.

All `box-shadow` declarations found:
- Line 253: `--box-shadow: none;` (root token)
- Line 718: `box-shadow: none;` (explicit reset)
- Line 742: `box-shadow: none;` (explicit reset)
- Line 1151: `box-shadow: none;` (explicit reset)
- Line 1452: `box-shadow: none;` (explicit reset)
- Line 1594: `* { box-shadow: none !important; }` (universal override in reduced-motion)

All values are `none`. Zero non-none box-shadow values.

### 3. filter Results

**PASS** -- Zero violations.

No `filter:` declarations found in the entire file.

### 4. Font Audit

**PASS** -- Zero violations.

Font variable definitions (lines 238-240):
- `--font-display: 'Instrument Serif', Georgia, serif;`
- `--font-body: 'Inter', system-ui, sans-serif;`
- `--font-mono: 'JetBrains Mono', 'SF Mono', monospace;`

All 43+ `font-family` declarations use `var(--font-body)`, `var(--font-display)`, or `var(--font-mono)`. Utility classes `.font-mono` and `.font-display` (lines 1587-1588) also reference variables correctly.

Inline styles on TOC labels (lines 1632-1686) all use `var(--font-display)` or `var(--font-body)`.

"Bebas Neue" appears once at line 1891 -- this is **content text** discussing anti-patterns, not a CSS declaration. **Not a violation.**

### 5. Color Audit

**PASS** -- Zero violations.

All unique hex colors found in CSS declarations:

| Color | Palette Status | Usage |
|-------|----------------|-------|
| `#E83025` | LOCKED (--color-primary) | Primary accent |
| `#FEF9F5` | LOCKED (--color-background) | Background |
| `#1A1A1A` | LOCKED (--color-text) | Text, dark areas, offset |
| `#666666` | LOCKED (--color-text-secondary) | Secondary text |
| `#E0D5C5` | LOCKED (--color-border) | Borders |
| `#F0EBE3` | LOCKED (--color-border-subtle) | Subtle borders |
| `#FFFFFF` | LOCKED (zone-dense) | Zone backgrounds |
| `#FAF5ED` | LOCKED (zone-breathing) | Breathing zones |
| `#FAFAF5` | ACCEPTABLE | Dark-bg text (warm white) |
| `#4A90D9` | LOCKED (--accent-blue) | Accent |
| `#4A9D6B` | LOCKED (--accent-green) | Accent |
| `#C97065` | LOCKED (--accent-coral) | Accent |
| `#D97706` | LOCKED (--accent-amber) | Accent |
| `#7C3AED` | LOCKED (--accent-purple) | Accent |
| `#F5EDE0` | NOTE | Territory tile hover bg (line 1171) |

**Analysis:** `#F5EDE0` is a warm cream hover state for territory tiles. It falls between `--color-border-subtle` (#F0EBE3) and `--color-zone-breathing` (#FAF5ED) -- a functional interpolation for hover feedback. Same pattern as `#F4FAF6`/`#FEF6F5` in OD-004 callouts. **Borderline -- consistent with prior precedent.**

`#10003` in the grep output is a false match -- it's the HTML entity `&#10003;` (checkmark character), not a hex color.

### 6. Thin Border (1px) Count

**PASS** -- All 1px borders are Cat 2 or Cat 3, correct per the 3-category system.

Total 1px border declarations: **16**

Breakdown:
- Cat 2 data separators: lines 441, 1032, 1089, 1510, 1546
- Cat 3 micro-elements: lines 514, 811, 1118, 1123, 1259, 1273, 1381
- Cat 3 transparent (concept links): line 1415
- Dimension-only (not borders): lines 1363, 1369, 1378 (`height: 1px`, `width: 1px`, `gap: 1px` -- visually-hidden / accessibility patterns)

All conform to the 3-category border system.

### 7. 2px Border Violations

**PASS** -- Zero structural violations.

All 2px occurrences found:

| Line | Declaration | Classification | Verdict |
|------|-------------|---------------|---------|
| 303 | `outline-offset: 2px` | Focus outline offset | NOT a border |
| 552 | `margin-top: 2px` | Spacing | NOT a border |
| 1407 | `margin-top: 2px` | Spacing | NOT a border |

**Zero 2px border declarations.** The content mentions "2px=emerging" (line 1068) and "2px border ban" (line 2487) but these are text content, not CSS.

Line 1145 mentions `translate(-2px,-2px)` in a comment only ("Replaces transform: translate(-2px,-2px) with flat 2D surface operation") -- this is documentation of a RESOLVED spirit violation, not active CSS.

### 8. Opacity/rgba Violations

**CONDITIONAL PASS** -- 1 potential violation flagged.

#### rgba scan:
- Line 1434: `background: rgba(232, 48, 37, 0.05);` -- on `.code-target.highlighted`

This is an `rgba()` background with alpha 0.05 (95% transparent). Per the identity brief: "ANY `rgba(` with alpha < 1.0 on backgrounds = violation (OD-AP-003)."

**FINDING: OD-006-SYS-C-001** -- `rgba(232, 48, 37, 0.05)` on `.code-target.highlighted` (line 1434). This is a very subtle red tint background applied when code targets are highlighted via JavaScript interaction. The alpha is 0.05, making it nearly imperceptible. However, the binary rule is clear: alpha < 1.0 = violation.

**Severity:** LOW -- This is an interactive highlight state (not always visible), and the alpha is minimal (0.05). But the binary rule says FAIL.

#### opacity scan:

| Line | Value | Context | Verdict |
|------|-------|---------|---------|
| 345 | `opacity: 0` | Animation keyframe start | OK -- animation mechanics |
| 349 | `opacity: 1` | Animation keyframe end | OK |
| 375 | `opacity: 1` | Reduced-motion override | OK |
| 382 | `opacity: 1` | Fallback for non-supporting browsers | OK |
| 457 | `opacity: 0.6` | `.fractal-annotation` inactive state | **VIOLATION** |
| 462 | `opacity: 1` | `.fractal-annotation.active` state | OK |
| 476 | `opacity: 0.7` | `.fractal-annotation__ratio` | **VIOLATION** |
| 551 | `opacity: 0.7` | `.toc__subtitle` | **VIOLATION** |

**FINDING: OD-006-SYS-C-002** -- Three sub-1.0 opacity values on visible elements:
1. `.fractal-annotation` at `opacity: 0.6` (line 457) -- fractal sidebar annotation labels
2. `.fractal-annotation__ratio` at `opacity: 0.7` (line 476) -- ratio sub-labels in fractal sidebar
3. `.toc__subtitle` at `opacity: 0.7` (line 551) -- TOC subtitle text

Per the identity brief: "opacity === 1.0 on ALL visual elements. Semi-transparent offsets at ANY opacity < 1.0 create the same visual effect as box-shadow."

**Severity:** MEDIUM -- These are text elements where opacity is used as a visual hierarchy technique (dimming secondary labels). They are not creating physical depth illusion (no shadows, no z-depth). But the binary rule is: `opacity !== 1.0` on visual elements = FAIL.

**Mitigation option:** Replace `opacity: 0.6`/`0.7` with `color: var(--color-text-secondary)` which achieves the same visual hierarchy through color rather than transparency.

### 9. OD-006 Summary Verdict

| Check | Result | Violations |
|-------|--------|------------|
| 1. border-radius | **PASS** | 0 (33/33 = 0) |
| 2. box-shadow | **PASS** | 0 (6/6 = none) |
| 3. filter | **PASS** | 0 |
| 4. Font audit | **PASS** | 0 |
| 5. Color audit | **PASS** | 0 (1 borderline hover tint, consistent with precedent) |
| 6. Thin border (1px) | **PASS** | 0 (all Cat 2/Cat 3 correct) |
| 7. 2px border | **PASS** | 0 |
| 8. Opacity/rgba | **FAIL** | 4 violations (1 rgba, 3 opacity) |

**OD-006 OVERALL: CONDITIONAL PASS (7/8 checks clean, 1 FAIL on opacity/rgba)**

---

## Cross-Page Findings Summary

### Findings Registry

| ID | Page | Severity | Check | Description |
|----|------|----------|-------|-------------|
| OD-006-SYS-C-001 | OD-006 | LOW | rgba | `rgba(232, 48, 37, 0.05)` on `.code-target.highlighted` (line 1434) |
| OD-006-SYS-C-002a | OD-006 | MEDIUM | opacity | `.fractal-annotation` at `opacity: 0.6` (line 457) |
| OD-006-SYS-C-002b | OD-006 | MEDIUM | opacity | `.fractal-annotation__ratio` at `opacity: 0.7` (line 476) |
| OD-006-SYS-C-002c | OD-006 | MEDIUM | opacity | `.toc__subtitle` at `opacity: 0.7` (line 551) |

### Comparative Notes

1. **OD-004 is cleaner than OD-006** on the opacity/rgba dimension. OD-004 has zero rgba values and its only opacity uses are animation mechanics (0 -> 1 transitions).

2. **Both pages are 100% clean** on the core soul checks: border-radius, box-shadow, filter, fonts.

3. **Both pages have borderline callout/hover tint colors** (`#F4FAF6`, `#FEF6F5` in OD-004; `#F5EDE0` in OD-006). These are functional derivatives and consistent with prior precedent across all ODs. Recommend the consistency agent evaluate whether these should be formalized as tokens.

4. **OD-004's 2px remediation is thorough** -- 4 former structural 2px borders have been fixed to 3px with `was 2px` comments. The only remaining 2px border is the intentional semantic confidence encoding.

5. **OD-006 has 33 explicit `border-radius: 0` declarations** -- significantly more than OD-004's 2, suggesting aggressive soul enforcement was applied component-by-component.

### Methodology Note

This audit was performed via exhaustive CSS source scanning rather than Playwright computed-style evaluation. Source-level scanning catches:
- Declarations in unreachable CSS paths (media queries, animation keyframes)
- Declarations overridden by specificity (all values visible, not just computed)
- Token definitions in `:root` that may differ from usage

It does NOT catch:
- Inherited values from parent elements
- Default browser styles (user-agent stylesheet)
- Dynamically injected styles via JavaScript

For the checks performed (pattern matching on declarations), source-level scanning is equally or more thorough than computed-style evaluation.

---

**Audit complete. 4 findings total, all in OD-006. OD-004 is fully clean.**
