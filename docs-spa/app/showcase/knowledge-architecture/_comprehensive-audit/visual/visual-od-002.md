# Visual Audit Report: OD-002-narrative.html

**Auditor:** visual-od-002
**Date:** 2026-02-09
**Method:** Source-code CSS/HTML analysis (Playwright browser unavailable — Chrome session conflict)
**File:** `docs-spa/app/showcase/explorations/organizational/OD-002-narrative.html` (1,659 lines)

---

## PHASE A — Research Loaded

| Reference Document | Status |
|---|---|
| OD-CONVENTION-SPEC.md | READ (468 lines, 12 sections, unified :root block) |
| SOUL-DISCOVERIES.md | READ (5 soul pieces, locked tokens table) |
| anti-patterns/registry.md | READ (geometry, color, layout, typography, component, OD anti-patterns) |

---

## PHASE B — Screenshots

**Status:** NOT CAPTURED — Playwright MCP could not launch due to existing Chrome session conflict (`"Opening in existing browser session"` → immediate process exit). Browser install permission denied.

**Mitigation:** Full source-code audit performed. Every CSS declaration, HTML structure, and token usage was checked against the three research documents. Findings are source-line referenced instead of screenshot-referenced.

---

## PHASE C — Research Validation (Source-Code Analysis)

### C1: Convention Token Check

**:root block (lines 173-236):** VERIFIED against OD-CONVENTION-SPEC.md Section 10.

| Token | Expected | Actual (source) | Status |
|---|---|---|---|
| --color-primary | #E83025 | #E83025 | PASS |
| --color-background | #FEF9F5 | #FEF9F5 | PASS |
| --color-text | #1A1A1A | #1A1A1A | PASS |
| --color-text-secondary | #666666 | #666666 | PASS |
| --color-border | #E0D5C5 | #E0D5C5 | PASS |
| --color-border-subtle | #F0EBE3 | #F0EBE3 | PASS |
| --color-zone-sparse | #FEF9F5 | #FEF9F5 | PASS |
| --color-zone-dense | #FFFFFF | #FFFFFF | PASS |
| --color-zone-breathing | #FAF5ED | #FAF5ED | PASS |
| --font-display | 'Instrument Serif', Georgia, serif | MATCH | PASS |
| --font-body | 'Inter', system-ui, sans-serif | MATCH | PASS |
| --font-mono | 'JetBrains Mono', 'SF Mono', monospace | MATCH | PASS |
| --type-page | 2.5rem | 2.5rem | PASS |
| --type-section | 1.625rem | 1.625rem | PASS |
| --type-subsection | 1.375rem | 1.375rem | PASS |
| --type-body | 1rem | 1rem | PASS |
| --type-code | 0.875rem | 0.875rem | PASS |
| --type-meta | 0.75rem | 0.75rem | PASS |
| --border-radius | 0 | 0 | PASS |
| --box-shadow | none | none | PASS |
| --accent-blue | #4A90D9 | #4A90D9 | PASS |
| --accent-green | #4A9D6B | #4A9D6B | PASS |
| --accent-coral | #C97065 | #C97065 | PASS |
| --accent-amber | #D97706 | #D97706 | PASS |
| --accent-purple | #7C3AED | #7C3AED | PASS |
| --offset-x | 4px | 4px | PASS |
| --offset-y | 4px | 4px | PASS |
| --offset-color | #1A1A1A | #1A1A1A | PASS |
| Spacing scale (all 11 tokens) | per spec | MATCH | PASS |
| Gestalt aliases (3 tokens) | per spec | MATCH | PASS |

**Token compliance: 100% — all 35+ tokens match OD-CONVENTION-SPEC.md exactly.**

### C2: Soul Piece Visual Check

| Soul Piece | Check | Status |
|---|---|---|
| #1 Sharp Edges | `--border-radius: 0` in :root (line 201). No other `border-radius` declaration in entire file. | PASS |
| #2 Archivist in Serif | `.callout--essence .callout__body` uses `font-family: var(--font-display); font-style: italic;` (lines 601-604). Essence pullquotes use `font-family: var(--font-display); font-style: italic;` (lines 780-783). | PASS |
| #3 Callout Family DNA | All callouts have 2-zone structure (label + body), `border-left: var(--border-left-width) solid` (line 562). 5 callout types differentiated by color only. | PASS |
| #4 No Shadows | `--box-shadow: none` in :root (line 202). No `box-shadow` anywhere except print media `box-shadow: none !important`. No `filter: drop-shadow()`. | PASS |
| #5 Squares Signal System | `.narrative-summary__marker` is 8x8px square (lines 894-898), no border-radius. Tension meter bars have no border-radius. All act markers are rectangular. | PASS |

---

## PHASE D — 13 Binary Gates

### VA-01: Page Renders (not blank)
**PASS** — Complete HTML structure with `<!DOCTYPE html>`, `<html lang="en">`, `<head>`, `<body>`, `<header>`, `<main>`, semantic content. 5 acts with narrative content, code blocks, callouts, decision matrix, file tree, and summary section.

### VA-02: No Visual Overflow
**PASS** — Code blocks have `overflow-x: auto` (line 626). Decision matrix has `overflow-x: auto` (line 685). Page container is `max-width: 860px` (line 358). Paragraph text is constrained with `max-width: 65ch` (line 499). Essence pullquote text is `max-width: 50ch` (line 784). No elements with fixed widths that would cause overflow. Tension meter bar uses `width: 200px` but inside a flex container. Responsive styles at 768px reduce it to `120px !important` (line 910).

### VA-03: No Misalignment
**PASS** — Header uses inner wrapper with `max-width: 860px; margin: 0 auto` (lines 305-306) matching page container (lines 358-359). All content flows within the same 860px column. Flex layouts used consistently for horizontal elements (exploration-meta, tension-meter, narrative-summary items). No conflicting alignment rules found.

### VA-04: Typography Matches Convention
**PASS (with 1 NOTE)** —
- Page title: `var(--type-page)` = 2.5rem via `.act-header--setup .act-header__title` (line 476)
- Section titles: `var(--type-section)` = 1.625rem via `.act-header--rising .act-header__title` (line 477)
- Subsection titles: `var(--type-subsection)` = 1.375rem via `.act-header--climax .act-header__title` (line 478)
- Body: `var(--type-body)` = 1rem via `.act-header--falling .act-header__title` (line 479)
- Code: `var(--type-code)` = 0.875rem (line 621)
- Meta: `var(--type-meta)` = 0.75rem (multiple locations)
- Fonts: Instrument Serif for display (line 188), Inter for body (line 189), JetBrains Mono for code (line 190)
- Act I body text uses `17px` (line 512) — slight deviation from `var(--type-body)` (16px) but intentional CRESCENDO typography cascade

### VA-05: Colors Match Convention
**PASS (with 2 NOTEs)** —
- All :root colors match exactly (see C1 table above)
- Code syntax highlighting uses locked palette colors: `#6B9B7A` (sage green, line 672), `#4A7C9B` (muted blue, line 673), `#C97065` (coral, line 674), `#E0D5C5` (warm tan, line 675), `#D97706` (amber, line 676)
- Header text uses `#FAFAF5` (line 322) — matches convention spec Section 4

**NOTE-1:** Code block internal colors `#888` (lines 644, 654), `#555` (line 663), `#333` (line 637), `#444` (line 651) are not in the locked palette. These are within dark code blocks and serve as structural tones (line numbers, copy button, separator). Convention spec Section 3 doesn't explicitly define these internal tones.

**NOTE-2:** Arc label font-size is `9px` (line 427), which is below `--type-meta` (12px). Similarly, tension meter label is `9px` (line 803). These are intentionally tiny for wayfinding UI but deviate from the type scale.

### VA-06: Spacing Matches Convention
**PASS** — All spacing uses `var(--space-*)` tokens throughout. Gestalt aliases present. Spacing progression follows CRESCENDO:
- Act I: `margin-bottom: var(--space-16)` (64px, line 509)
- Act II: `margin-bottom: var(--space-10)` (40px, line 519)
- Act III: `margin-bottom: var(--space-6)` (24px, line 528)
- Act IV: `margin-bottom: var(--space-8)` (32px, line 538)
- Act V: `margin-bottom: var(--space-10)` (40px, line 547)

### VA-07: Border System (ZERO 2px)
**PASS** — No `2px` border declarations found in entire file. Border audit:

| Location | Border Value | Category | Status |
|---|---|---|---|
| `.exploration-header` (line 300) | `border-bottom: 3px solid var(--color-primary)` | Cat 1: structural | PASS |
| `.arc-diagram` (line 392) | `border-bottom: 3px solid var(--color-border)` | Cat 1: structural frame | PASS |
| `.arc-annotation` (line 435) | `border-top: 1px solid var(--color-border-subtle)` | Cat 2: data separator | PASS |
| `.act-header__title` (line 471) | `border-bottom: 3px solid var(--color-primary)` | Cat 1: structural | PASS |
| `.callout` (line 562) | `border-left: var(--border-left-width) solid` (=4px) | Cat 1: accent | PASS |
| `.code-block` (line 628) | `border: 3px solid var(--color-border)` | Cat 1: structural frame | PASS |
| `.code-block__header` (line 637) | `border-bottom: 1px solid #333` | Cat 2: data separator | PASS |
| `.code-block__copy` (line 651) | `border: 1px solid #444` | Cat 3: micro-element | PASS |
| `code:not(pre code)` (line 285) | `border: 1px solid var(--color-border)` | Cat 3: micro-element | PASS |
| `.decision-matrix th` (line 701) | `border-bottom: 3px solid var(--color-primary)` | Cat 1: structural header | PASS |
| `.decision-matrix td` (line 707) | `border-bottom: 1px solid var(--color-border-subtle)` | Cat 2: data separator | PASS |
| `.file-tree` (line 732) | `border-left: var(--border-left-width) solid var(--color-border)` (=4px) | Cat 1: accent | PASS |
| `.essence-pullquote` (lines 765-766) | `border-top/bottom: 3px solid var(--accent-purple)` | Cat 1: structural | PASS |
| `.act-divider` (lines 838-839) | `border-top/bottom: 3px solid var(--color-border)` | Cat 1: structural | PASS |
| `.code-progression` (line 851) | `border-left: var(--border-left-width) solid var(--color-border)` (=4px) | Cat 1: accent | PASS |
| `.narrative-summary` (line 866) | `border-left: var(--border-left-width) solid var(--color-primary)` (=4px) | Cat 1: accent | PASS |
| `*:focus-visible` (line 257) | `outline: 3px solid var(--color-primary)` | Not a border (outline) | N/A |

**Total: 16 border declarations, 0 are 2px. ZERO 2px border epidemic. 3-category system applied correctly.**

### VA-08: Soul Compliance (NO border-radius, NO box-shadow, NO drop-shadow)
**PASS** —
- `border-radius`: Only declaration is `--border-radius: 0` in :root (line 201). No element-level border-radius anywhere. Grep for `border-radius` finds only the :root token.
- `box-shadow`: Only declaration is `--box-shadow: none` in :root (line 202) and print styles `box-shadow: none !important` (line 925). No element-level box-shadow anywhere.
- `drop-shadow`: Zero instances of `filter: drop-shadow()` in entire file.
- `transform`: No `translateY` or lift effects found.

### VA-09: Responsive at 768px
**PASS (with 1 NOTE)** — `@media (max-width: 768px)` block (lines 904-914):
- Arc diagram height reduced to 80px
- Exploration meta stacks vertically (`flex-direction: column`)
- Tension meter bar width reduced to 120px
- Header padding reduced

**NOTE:** No responsive adjustments for typography sizes (Act I body text at 17px, Act II at 15px, Act III at 14px). These values are fixed regardless of viewport. At 768px, the typography cascade may still work but wasn't tested visually.

### VA-10: Code Blocks Correct
**PASS** — Code blocks (lines 618-676):
- Dark background: `var(--color-text)` = `#1A1A1A` ✓
- Text color: `#FAFAF5` ✓
- Border: `3px solid var(--color-border)` (Cat 1) ✓
- Font: `var(--font-mono)` ✓
- Font size: `var(--type-code)` = 0.875rem ✓
- Line height: 1.5 ✓
- Padding: `var(--space-6) var(--space-8)` (24px 32px) ✓
- Syntax colors match convention spec (keyword=#E83025, string=#6B9B7A, comment=#666666, function=#4A7C9B, type=#C97065, number=#D97706, variable=#E0D5C5)
- 4 code blocks in file, all using same dark theme ✓
- Inline code: `background: var(--color-border-subtle); border: 1px solid var(--color-border)` (Cat 3) ✓

### VA-11: Headers Correct
**PASS** — Exploration header (lines 298-352):
- Full-bleed dark background: `var(--color-text)` ✓
- Border-bottom: `3px solid var(--color-primary)` (Cat 1) ✓
- Inner wrapper: `max-width: 860px; margin: 0 auto` ✓
- Meta line: `var(--font-mono)`, `var(--type-meta)`, `text-transform: uppercase`, `letter-spacing: 0.15em` ✓
- Title: `var(--font-display)`, `var(--type-page)`, `color: #FAFAF5` ✓
- Hypothesis: `var(--type-body)`, `color: var(--color-text-secondary)`, `max-width: 70ch` ✓
- Padding: `var(--space-16) var(--space-8)` ✓
- All match Convention Spec Section 4 exactly

### VA-12: No Dead Zones
**PASS** — Content flows continuously through 5 acts with pull quotes as breathing zones. Act divider CSS exists (lines 834-840) but is not used in HTML (no `.act-divider` elements in body). Pull quotes serve as act transitions instead. No visible gaps in content flow from source analysis.

### VA-13: Research Compliance
**PASS (with FINDINGS)** —

OD-AP-003 CHECK (semi-transparent backgrounds):

| Location | rgba/opacity Value | Status |
|---|---|---|
| `.callout--info` (line 583) | `rgba(74, 144, 217, 0.05)` | **FAIL** |
| `.callout--tip` (line 588) | `rgba(74, 157, 107, 0.05)` | **FAIL** |
| `.callout--gotcha` (line 593) | `rgba(201, 112, 101, 0.05)` | **FAIL** |
| `.callout--essence` (line 598) | `rgba(124, 58, 237, 0.04)` | **FAIL** |
| `.callout--challenge` (line 610) | `rgba(217, 119, 6, 0.05)` | **FAIL** |
| `.decision-matrix__highlight td` (line 717) | `rgba(232, 48, 37, 0.04)` | **FAIL** |

**6 instances of rgba < 1.0 — violates OD-AP-003 (binary rule: opacity === 1.0 on all visual elements).**

---

## FINDINGS

### VIS-001: OD-AP-003 Semi-Transparent Callout Backgrounds (×5)
- **Severity:** MEDIUM
- **Screenshot:** N/A (source audit)
- **Location:** Lines 583, 588, 593, 598, 610
- **Description:** All 5 callout types use rgba backgrounds with opacity 0.04-0.05
- **Expected:** Fully opaque backgrounds (e.g., `background: #F0EBE3` or computed opaque equivalents)
- **Actual:**
  - `.callout--info`: `rgba(74, 144, 217, 0.05)`
  - `.callout--tip`: `rgba(74, 157, 107, 0.05)`
  - `.callout--gotcha`: `rgba(201, 112, 101, 0.05)`
  - `.callout--essence`: `rgba(124, 58, 237, 0.04)`
  - `.callout--challenge`: `rgba(217, 119, 6, 0.05)`
- **Convention Ref:** OD-AP-003 — "opacity === 1.0 on all visual elements. No exceptions."

### VIS-002: OD-AP-003 Semi-Transparent Decision Matrix Highlight
- **Severity:** MEDIUM
- **Screenshot:** N/A (source audit)
- **Location:** Line 717
- **Description:** Decision matrix highlighted row uses rgba background
- **Expected:** Fully opaque background
- **Actual:** `rgba(232, 48, 37, 0.04)`
- **Convention Ref:** OD-AP-003 — "opacity === 1.0 on all visual elements. No exceptions."

### VIS-003: Off-Palette Code Block Internal Colors
- **Severity:** NOTE
- **Screenshot:** N/A (source audit)
- **Location:** Lines 637, 644, 651, 654, 663
- **Description:** Code block internal UI elements use colors not in the locked palette
- **Expected:** Colors from locked palette or convention-specified values
- **Actual:**
  - `.code-block__header border-bottom`: `#333`
  - `.code-block__lang color`: `#888`
  - `.code-block__copy border`: `#444`
  - `.code-block__copy color`: `#888`
  - `.code-block__num color`: `#555`
- **Convention Ref:** Convention Spec Section 3 defines syntax highlighting colors but not these structural tones. Wave 5 audit flagged this as NOTE (not FAIL) — internal code block tones are conventional.

### VIS-004: Sub-Meta Font Sizes (9px)
- **Severity:** NOTE
- **Screenshot:** N/A (source audit)
- **Location:** Lines 427, 803
- **Description:** Arc labels and tension meter labels use 9px font size, below the minimum `--type-meta` (12px) in the type scale
- **Expected:** Minimum `var(--type-meta)` = 0.75rem (12px)
- **Actual:** `font-size: 9px` (both locations)
- **Convention Ref:** Convention Spec Section 5 defines 6-level type scale with `--type-meta: 0.75rem` as the minimum. These elements fall below the defined floor.

### VIS-005: Act I Body Text Deviation from Type Scale
- **Severity:** NOTE
- **Screenshot:** N/A (source audit)
- **Location:** Line 512
- **Description:** Act I narrative beat paragraphs use `font-size: 17px` instead of `var(--type-body)` (16px)
- **Expected:** `var(--type-body)` = 1rem (16px) or a defined scale value
- **Actual:** `font-size: 17px` — not in the 5-level type scale
- **Convention Ref:** Intentional CRESCENDO typography cascade (sparse act = slightly larger text). Part of the density progression design. However, 17px is not a named token value.

### VIS-006: Missing h3 Italic Style
- **Severity:** LOW
- **Screenshot:** N/A (source audit)
- **Location:** Lines 488-496 (`.narrative-beat__subtitle`)
- **Description:** Anti-patterns registry specifies "All h3 should be italic" (registry.md line 207). The `.narrative-beat__subtitle` elements are `<h3>` tags styled with `font-weight: 600` but no `font-style: italic`.
- **Expected:** `font-style: italic` on h3 elements
- **Actual:** `font-style` not set (defaults to `normal`)
- **Convention Ref:** Anti-patterns registry — "❌ Non-Italic h3 — Breaks editorial hierarchy convention"

### VIS-007: No Table Vertical Border Prevention
- **Severity:** NOTE
- **Screenshot:** N/A (source audit)
- **Location:** Lines 705-708 (`.decision-matrix td`)
- **Description:** Decision matrix td uses `border-bottom` only (correct), but does not explicitly prevent vertical borders (no `border-left: none; border-right: none`). With `border-collapse: collapse` (line 691), no vertical borders should appear by default, but explicit prevention would be safer.
- **Expected:** Explicit `border-left: none; border-right: none` per anti-patterns registry "Vertical Table Borders" pattern
- **Actual:** Only `border-bottom` set — relies on CSS default (no left/right borders). Likely renders correctly but not explicitly guarded.
- **Convention Ref:** Anti-patterns registry — "❌ Vertical Table Borders — Prison bars effect"

### VIS-008: Responsive Typography Not Adjusted at 768px
- **Severity:** NOTE
- **Screenshot:** N/A (source audit)
- **Location:** Lines 904-914 (@media max-width: 768px)
- **Description:** The 768px responsive breakpoint adjusts layout (arc height, meta direction, tension meter width, header padding) but does not adjust any typography sizes. Act I body text at 17px, type-page at 40px, and essence pullquote at 26px all remain unchanged.
- **Expected:** Potential type scale reduction for mobile viewport
- **Actual:** No typography changes in responsive block
- **Convention Ref:** Research Debt item in threading header: "Mobile viewport: narrative beat-per-viewport untested below 768px"

---

## SUMMARY

### 13 Binary Gate Results

| Gate | Check | Result |
|---|---|---|
| VA-01 | Page renders (not blank) | **PASS** |
| VA-02 | No visual overflow | **PASS** |
| VA-03 | No misalignment | **PASS** |
| VA-04 | Typography matches convention | **PASS** |
| VA-05 | Colors match convention | **PASS** |
| VA-06 | Spacing matches convention | **PASS** |
| VA-07 | Border system (ZERO 2px) | **PASS** |
| VA-08 | Soul compliance (NO border-radius, NO box-shadow, NO drop-shadow) | **PASS** |
| VA-09 | Responsive at 768px | **PASS** |
| VA-10 | Code blocks correct | **PASS** |
| VA-11 | Headers correct | **PASS** |
| VA-12 | No dead zones | **PASS** |
| VA-13 | Research compliance | **FAIL** (OD-AP-003: 6 rgba instances) |

### Gate Score: 12/13 PASS, 1 FAIL

### Finding Summary

| ID | Severity | Description |
|---|---|---|
| VIS-001 | MEDIUM | 5 callout rgba backgrounds (OD-AP-003 violation) |
| VIS-002 | MEDIUM | 1 decision matrix rgba background (OD-AP-003 violation) |
| VIS-003 | NOTE | 5 off-palette code block internal colors (#333, #444, #555, #888) |
| VIS-004 | NOTE | 2 sub-meta font sizes (9px < 12px minimum) |
| VIS-005 | NOTE | Act I body text 17px not in type scale |
| VIS-006 | LOW | h3 elements missing italic per anti-patterns registry |
| VIS-007 | NOTE | No explicit vertical border prevention on decision matrix td |
| VIS-008 | NOTE | No responsive typography adjustments at 768px |

### Totals
- **MEDIUM:** 2 findings (6 total rgba instances across them)
- **LOW:** 1 finding
- **NOTE:** 5 findings
- **Total:** 8 findings

### Key Observations

1. **Token compliance is excellent** — all 35+ :root tokens match the convention spec exactly
2. **Soul compliance is perfect** — zero border-radius, zero box-shadow, zero drop-shadow
3. **Border system is clean** — 16 border declarations, all correctly categorized (Cat 1/2/3), zero 2px borders
4. **OD-AP-003 is the primary issue** — 6 rgba instances (5 callouts + 1 decision matrix highlight), same systemic finding seen in every OD during Wave 5
5. **The CRESCENDO density pattern reads clearly in source** — typography, spacing, and code density all progress correctly across 5 acts
6. **Responsive handling exists but is layout-only** — typography is not adjusted at 768px

### Limitations

- No Playwright screenshots taken (browser session conflict)
- Visual rendering not verified (overflow, alignment, font loading checked via source only)
- `document.fonts.ready` check not performed — font loading timing not verified
- 768px responsive rendering not visually confirmed
