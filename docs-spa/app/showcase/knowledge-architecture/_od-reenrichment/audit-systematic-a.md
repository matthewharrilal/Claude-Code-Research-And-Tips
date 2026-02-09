<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/audit-systematic-a.md
Tier: C | Stage: 3 (Organization OD) | Generated: 2026-02-09

BUILT ON: OD-001-conversational.html, OD-002-narrative.html, audit-identity-brief.md
CONSUMED BY: consistency agent, Wave 6 verifiers
END INLINE THREADING HEADER
-->

# Systematic Audit A: OD-001 + OD-002

**Auditor:** systematic-a
**Method:** CSS source analysis (Playwright unavailable due to Chrome session contention)
**Scope:** All 8 programmatic checks per audit specification
**Date:** 2026-02-09

**NOTE:** This audit was performed via source-level CSS analysis (grep/read of all CSS declarations in the HTML files) rather than Playwright computed-style evaluation. Source analysis catches all explicit CSS declarations but cannot detect inherited or cascade-resolved computed values. For these two files, all styles are inline `<style>` blocks with explicit declarations, so source analysis provides equivalent coverage.

---

## OD-001-conversational.html

### 1. border-radius Results

**Violation count: 0**

All `border-radius` references in the file:
- Line 106: Comment documenting `--border-radius: 0` in soul checklist
- Line 129: Comment documenting soul violation rule
- Line 221: `:root { --border-radius: 0; }` -- correctly set to 0

No element anywhere in OD-001 declares a non-zero border-radius. **PASS.**

### 2. box-shadow Results

**Violation count: 0**

All `box-shadow` references:
- Line 107: Comment documenting `--box-shadow: none` in soul checklist
- Line 130: Comment documenting soul violation rule
- Line 222: `:root { --box-shadow: none; }` -- correctly set to none
- Line 1317: `* { box-shadow: none !important; }` inside reduced-motion media query (defensive)
- Lines 35, 168, 2150: Comments/descriptions mentioning the constraint

No element declares a non-`none` box-shadow value. **PASS.**

### 3. filter Results

**Violation count: 0**

Zero `filter:` declarations found in the file. No drop-shadow, blur, brightness, or any filter effect. **PASS.**

### 4. Font Audit

**Font variable definitions (line 208-210):**
- `--font-display: 'Instrument Serif', Georgia, serif` -- CORRECT
- `--font-body: 'Inter', system-ui, sans-serif` -- CORRECT
- `--font-mono: 'JetBrains Mono', 'SF Mono', monospace` -- CORRECT

**Font usage (35 declarations):**
All font-family declarations use CSS variables:
- `var(--font-body)` -- lines 271, 292
- `var(--font-mono)` -- lines 299, 405, 436, 464, 484, 531, 552, 566, 583, 612, 636, 655, 703, 732, 760, 796, 866, 893, 939, 985, 1015, 1117, 1145, 1178, 1238, 1261
- `var(--font-display)` -- lines 445, 645, 723, 841, 1126, 1218, 1247

One inline SVG favicon uses `font-family='serif'` (line 179) -- this is a 32x32 SVG icon, not page content.

No `Bebas Neue` or off-trio fonts found. **PASS.**

### 5. Color Audit

**Palette tokens (lines 195-205):**
| Token | Value | On-Palette? |
|-------|-------|-------------|
| --color-primary | #E83025 | YES |
| --color-background | #FEF9F5 | YES |
| --color-text | #1A1A1A | YES |
| --color-text-secondary | #666666 | YES |
| --color-border | #E0D5C5 | YES |
| --color-border-subtle | #F0EBE3 | YES |
| --color-zone-sparse | #FEF9F5 | YES |
| --color-zone-dense | #FFFFFF | YES |
| --color-zone-breathing | #FAF5ED | YES |

**Accent colors (lines 243-247):**
| Token | Value | On-Palette? |
|-------|-------|-------------|
| --accent-blue | #4A90D9 | YES (accent) |
| --accent-green | #4A9D6B | YES (accent) |
| --accent-coral | #C97065 | YES (accent) |
| --accent-amber | #D97706 | YES (accent) |
| --accent-purple | #7C3AED | YES (accent) |

**Hardcoded hex colors in declarations:**
| Color | Line | Context | On-Palette? |
|-------|------|---------|-------------|
| #1A1A1A | 260 | --offset-color | YES |
| #FAFAF5 | 450, 896 | Dark header/code block text | YES (code block text per convention) |
| #666666 | 468 | Text color in meta context | YES (= --color-text-secondary) |
| #E83025 | 963 | Syntax: keyword | YES (= --color-primary) |
| #6B9B7A | 964 | Syntax: string | YES (sage green, convention spec syntax palette) |
| #4A7C9B | 965 | Syntax: function | YES (muted blue, convention spec syntax palette) |
| #C97065 | 966 | Syntax: type | YES (= --accent-coral) |
| #1A1A1A | 892 | Code block background | YES (dark code block per convention) |

All colors are on-palette or within the approved code-block syntax palette. **PASS.**

### 6. Thin Border Count (borders < 3px, excluding tables)

**Count: 5 declarations**

| Line | Declaration | Category |
|------|-------------|----------|
| 606 | `border-top: 1px solid var(--color-border-subtle)` | Cat 2: data separator |
| 922 | `border-bottom: 1px solid var(--color-text-secondary)` | Cat 2: data separator |
| 936 | `border: 1px solid var(--color-text-secondary)` | Cat 3: micro-element (code block copy button) |
| 997 | `border-bottom: 1px solid var(--color-border-subtle)` | Cat 2: data separator |
| 1050 | `border-top: 1px solid var(--color-border-subtle)` | Cat 2: data separator |

All 1px borders are Cat 2 (data separators) or Cat 3 (micro-elements). Per the identity brief, these are ACCEPTABLE. **PASS.**

### 7. 2px Border Violations

**Count: 0**

No `2px solid` declarations found. The only "2px" occurrence (line 743) is a comment explaining padding math. **PASS.**

### 8. Opacity/rgba Violations (OD-AP-003)

**rgba violations: 6 declarations**

| Line | Declaration | Context |
|------|-------------|---------|
| 820 | `background: rgba(74, 144, 217, 0.05)` | .callout--info background |
| 825 | `background: rgba(74, 157, 107, 0.05)` | .callout--tip background |
| 830 | `background: rgba(201, 112, 101, 0.05)` | .callout--gotcha background |
| 835 | `background: rgba(124, 58, 237, 0.04)` | .callout--essence background |
| 860 | `background: rgba(217, 119, 6, 0.05)` | .callout--challenge background |
| 1006 | `background: rgba(232, 48, 37, 0.04)` | .decision-matrix__highlight row |

**Opacity violations: 2 declarations**

| Line | Declaration | Context |
|------|-------------|---------|
| 737 | `opacity: 0.7` | .question__narrowing (Socratic narrowing indicator, 8px micro-label) |
| 1152 | `opacity: 0.6` | Tag label (8px micro-label) |

**Note:** Lines 315, 319, 345, 353 use `opacity: 0` and `opacity: 1` in scroll-animation keyframes and fallbacks -- these are NOT violations (they animate TO full opacity, and are 0 only in animation start state).

**Assessment:** The 6 rgba backgrounds at 0.04-0.05 alpha on callout backgrounds are the **OD-AP-003 semi-transparent background** anti-pattern. The 2 opacity values (0.6, 0.7) on micro-labels are also OD-AP-003 violations. Per the identity brief, opacity === 1.0 is the binary rule. **FAIL -- 8 total violations.**

### 9. Summary Verdict -- OD-001

| Check | Result | Details |
|-------|--------|---------|
| 1. border-radius | **PASS** | 0 violations, `--border-radius: 0` in :root |
| 2. box-shadow | **PASS** | 0 violations, `--box-shadow: none` in :root |
| 3. filter | **PASS** | 0 declarations |
| 4. Font audit | **PASS** | Trio only via CSS variables, no off-trio |
| 5. Color audit | **PASS** | All on-palette or approved syntax palette |
| 6. Thin border count | **PASS** | 5 declarations, all Cat 2/Cat 3 (acceptable) |
| 7. 2px borders | **PASS** | 0 violations |
| 8. Opacity/rgba | **FAIL** | 6 rgba backgrounds (alpha 0.04-0.05), 2 opacity < 1 |

**OD-001 Overall: 7/8 PASS, 1 FAIL (OD-AP-003)**

---

## OD-002-narrative.html

### 1. border-radius Results

**Violation count: 0**

All `border-radius` references:
- Line 82: Comment documenting `--border-radius: 0` in soul checklist
- Line 105: Comment documenting soul violation rule
- Line 201: `:root { --border-radius: 0; }` -- correctly set to 0

No element declares a non-zero border-radius. **PASS.**

### 2. box-shadow Results

**Violation count: 0**

All `box-shadow` references:
- Line 83: Comment documenting `--box-shadow: none` in soul checklist
- Line 106: Comment documenting soul violation rule
- Line 202: `:root { --box-shadow: none; }` -- correctly set to none
- Line 925: `* { box-shadow: none !important; }` inside reduced-motion media query (defensive)

No element declares a non-`none` box-shadow value. **PASS.**

### 3. filter Results

**Violation count: 0**

Zero `filter:` declarations found. **PASS.**

### 4. Font Audit

**Font variable definitions (lines 188-190):**
- `--font-display: 'Instrument Serif', Georgia, serif` -- CORRECT
- `--font-body: 'Inter', system-ui, sans-serif` -- CORRECT
- `--font-mono: 'JetBrains Mono', 'SF Mono', monospace` -- CORRECT

**Font usage (24 declarations):**
All use CSS variables: `var(--font-body)`, `var(--font-mono)`, `var(--font-display)`.

One inline SVG favicon uses `font-family='serif'` (line 158) -- not page content.

No `Bebas Neue` or off-trio fonts found. **PASS.**

### 5. Color Audit

**Palette tokens (lines 175-185):**
All identical to OD-001 and on-palette. CORRECT.

**Accent colors (lines 223-227):**
All identical to OD-001 and on-palette. CORRECT.

**Hardcoded hex colors in declarations:**
| Color | Line | Context | On-Palette? |
|-------|------|---------|-------------|
| #1A1A1A | 235 | --offset-color | YES |
| #FAFAF5 | 322, 623 | Dark header/code block text | YES (convention spec) |
| #888 | 644, 653 | Code block lang label + copy button text | DARK CODE BLOCK CONTEXT -- see note |
| #555 | 663 | Code block line numbers | DARK CODE BLOCK CONTEXT -- see note |
| #444 | 651 | Code block copy button border | DARK CODE BLOCK CONTEXT -- see note |
| #333 | 637 | Code block separator border | DARK CODE BLOCK CONTEXT -- see note |
| #6B9B7A | 672 | Syntax: string | YES (convention spec syntax palette) |
| #4A7C9B | 673 | Syntax: function | YES (convention spec syntax palette) |
| #C97065 | 674 | Syntax: type | YES (= --accent-coral) |
| #E0D5C5 | 675 | Syntax: variable | YES (= --color-border warm tan) |
| #D97706 | 676 | Syntax: number | YES (= --accent-amber) |

**Note on #888, #555, #444, #333:** These are all INSIDE the dark code block component (background: #1A1A1A). They serve as subdued UI elements (line numbers, labels, micro-borders) within the code block's dark context. The convention spec defines dark code block styling with its own sub-palette. These are functionally equivalent to --color-text-secondary (#666) mapped to the dark context. However, they are NOT in the explicit locked palette. Flagging as **NOTE** (not FAIL) -- these are reasonable dark-context adaptations but should ideally use CSS variables for consistency.

All non-code-block colors are on-palette. **PASS with NOTE.**

### 6. Thin Border Count (borders < 3px, excluding tables)

**Count: 5 declarations**

| Line | Declaration | Category | Context |
|------|-------------|----------|---------|
| 285 | `border: 1px solid var(--color-border)` | Cat 3: micro | Table of contents item |
| 435 | `border-top: 1px solid var(--color-border-subtle)` | Cat 2: data separator | Section divider |
| 637 | `border-bottom: 1px solid #333` | Cat 2: data separator | Inside dark code block |
| 651 | `border: 1px solid #444` | Cat 3: micro-element | Code block copy button |
| 707 | `border-bottom: 1px solid var(--color-border-subtle)` | Cat 2: data separator | Section divider |

All 1px borders are Cat 2 or Cat 3 (acceptable per identity brief). **PASS.**

### 7. 2px Border Violations

**Count: 0**

No `2px solid` declarations found anywhere in OD-002. **PASS.**

### 8. Opacity/rgba Violations (OD-AP-003)

**rgba violations: 6 declarations**

| Line | Declaration | Context |
|------|-------------|---------|
| 583 | `background: rgba(74, 144, 217, 0.05)` | .callout--info background |
| 588 | `background: rgba(74, 157, 107, 0.05)` | .callout--tip background |
| 593 | `background: rgba(201, 112, 101, 0.05)` | .callout--gotcha background |
| 598 | `background: rgba(124, 58, 237, 0.04)` | .callout--essence background |
| 610 | `background: rgba(217, 119, 6, 0.05)` | .callout--challenge background |
| 717 | `background: rgba(232, 48, 37, 0.04)` | .decision-matrix__highlight row |

**Opacity violations: 0**

No `opacity:` declarations with values < 1 found in OD-002.

**Assessment:** The 6 rgba backgrounds at 0.04-0.05 alpha are the OD-AP-003 anti-pattern. Per the identity brief, opacity === 1.0 is the binary rule. **FAIL -- 6 violations.**

### 9. Summary Verdict -- OD-002

| Check | Result | Details |
|-------|--------|---------|
| 1. border-radius | **PASS** | 0 violations, `--border-radius: 0` in :root |
| 2. box-shadow | **PASS** | 0 violations, `--box-shadow: none` in :root |
| 3. filter | **PASS** | 0 declarations |
| 4. Font audit | **PASS** | Trio only via CSS variables, no off-trio |
| 5. Color audit | **PASS (NOTE)** | On-palette; dark code block uses #888/#555/#444/#333 (reasonable but not tokenized) |
| 6. Thin border count | **PASS** | 5 declarations, all Cat 2/Cat 3 |
| 7. 2px borders | **PASS** | 0 violations |
| 8. Opacity/rgba | **FAIL** | 6 rgba backgrounds (alpha 0.04-0.05) |

**OD-002 Overall: 7/8 PASS, 1 FAIL (OD-AP-003)**

---

## Cross-Page Comparison

### Consistent Across Both ODs
- Soul compliance (border-radius, box-shadow, filter): IDENTICAL -- both clean
- Font trio: IDENTICAL -- both use CSS variables exclusively
- Palette tokens: IDENTICAL -- same :root declarations
- Accent colors: IDENTICAL -- same 5 accents
- 2px border epidemic: CLEAN in both -- 0 instances
- Callout rgba pattern: IDENTICAL -- same 5 callout variants + 1 decision-matrix highlight, all use the same rgba values

### Differences Between OD-001 and OD-002
| Aspect | OD-001 | OD-002 |
|--------|--------|--------|
| Opacity < 1 | 2 instances (0.7, 0.6 on micro-labels) | 0 instances |
| Dark code block sub-colors | Uses tokenized syntax palette only | Uses #888, #555, #444, #333 for UI elements |
| Solid offset pseudo-element | Present (callout--essence::after) | Not present |
| Hover states | 3 (scroll-witness, copy button, matrix row) | 1 (matrix row) |
| Reduced-motion declarations | 2 (animation + global) | 1 (global) |
| Scroll-driven animations | Present (EXT-CREATIVE-004) | Not present |

### Systemic Issue: OD-AP-003 Semi-Transparent Backgrounds

Both OD-001 and OD-002 share the **exact same 6 rgba callout background declarations**. This is clearly a SYSTEMIC pattern, not a one-off error. The callout variant system uses rgba with alpha 0.04-0.05 to create tinted backgrounds.

**Remediation would require:** Replacing rgba backgrounds with solid opaque equivalents. For example:
- `rgba(74, 144, 217, 0.05)` on #FEF9F5 background = approx `#F5F7FB` (opaque)
- `rgba(74, 157, 107, 0.05)` on #FEF9F5 background = approx `#F5F9F6` (opaque)
- `rgba(201, 112, 101, 0.05)` on #FEF9F5 background = approx `#FBF7F6` (opaque)
- `rgba(124, 58, 237, 0.04)` on #FEF9F5 background = approx `#F9F7FC` (opaque)
- `rgba(217, 119, 6, 0.05)` on #FEF9F5 background = approx `#FBF8F3` (opaque)
- `rgba(232, 48, 37, 0.04)` on #FEF9F5 background = approx `#FBF6F5` (opaque)

---

## Hover State Compliance (Supplemental Check)

All hover states in both files use FLAT 2D effects only:
- **OD-001 line 382-384:** `.scroll-witness__item:hover` -- changes `color` only
- **OD-001 line 943-946:** `.code-block__copy:hover` -- changes `border-color` + `color`
- **OD-001 line 1001-1003:** `.decision-matrix tr:hover td` -- changes `background`
- **OD-002 line 711-713:** `.decision-matrix tr:hover td` -- changes `background`

No `transform`, `translateY`, `scale`, `perspective`, or `rotate3d` on any hover. **PASS.**

## Reduced-Motion Compliance (Supplemental Check)

- **OD-001:** Two `@media (prefers-reduced-motion: reduce)` blocks (lines 342, 1323). Covers scroll animations and global `* { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }`.
- **OD-002:** One `@media (prefers-reduced-motion: reduce)` block (line 931). Covers global animation/transition override.

Both files include the prophylactic reduced-motion handler. **PASS.**

## Vertical Table Borders (Anti-Pattern #14 Supplemental Check)

No `border-right` or `border-left` declarations on table cells in either file. No prison bars. **PASS.**

---

## Final Summary

| | OD-001 | OD-002 |
|--|--------|--------|
| border-radius | PASS (0) | PASS (0) |
| box-shadow | PASS (0) | PASS (0) |
| filter | PASS (0) | PASS (0) |
| Font audit | PASS | PASS |
| Color audit | PASS | PASS (NOTE: dark code block sub-colors) |
| Thin borders | PASS (5, all Cat 2/3) | PASS (5, all Cat 2/3) |
| 2px borders | PASS (0) | PASS (0) |
| Opacity/rgba | **FAIL** (8: 6 rgba + 2 opacity) | **FAIL** (6 rgba) |
| Hover compliance | PASS (flat 2D only) | PASS (flat 2D only) |
| Reduced-motion | PASS | PASS |
| Vertical table borders | PASS | PASS |

**Overall: Both pages are SOUL-COMPLIANT on geometry (border-radius, box-shadow, filter) and typography (font trio). Both FAIL on OD-AP-003 (semi-transparent backgrounds in callout variants). OD-001 has 2 additional opacity < 1 violations on micro-labels. OD-002 has untokenized dark-context colors (NOTE, not FAIL).**

**Method limitation:** Source-level analysis only. No computed-style evaluation due to Playwright contention. For these inline-styled HTML files, source analysis captures all explicit declarations. Cascade/inheritance effects are not evaluated but are low-risk given the self-contained inline style architecture.
