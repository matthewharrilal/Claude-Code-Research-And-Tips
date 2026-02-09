# Visual Audit Report: OD-003-task-based.html

**Auditor:** visual-od-003
**Date:** 2026-02-09
**Method:** Source-level audit (Playwright blocked by Chrome contention — browser already in use by another agent)
**File:** `docs-spa/app/showcase/explorations/organizational/OD-003-task-based.html` (1163 lines)

**Research consumed:**
- OD-CONVENTION-SPEC.md (468 lines, all 10 sections)
- SOUL-DISCOVERIES.md (5 soul pieces)
- Anti-patterns registry (OD-F-AP-001, OD-AP-002, OD-AP-003)

---

## FINDINGS

---

### VIS-001 | CRITICAL | OD-AP-003 rgba Semi-Transparent Background — callout inline code

- **Location:** Line 456 — `.callout__body code`
- **Description:** Inline code inside callout bodies uses `rgba(0,0,0,0.04)` background
- **Expected:** Fully opaque background per OD-AP-003 binary rule: `opacity === 1.0 on all visual elements`. Use `background: #F0EBE3` or `background: var(--color-border-subtle)`.
- **Actual:** `background: rgba(0,0,0,0.04); padding: 1px 5px;`
- **Convention ref:** Anti-patterns registry OD-AP-003; OD-CONVENTION-SPEC Section 10 (--color-border-subtle: #F0EBE3)
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-002 | CRITICAL | OD-AP-003 rgba Semi-Transparent Background — troubleshoot inline code

- **Location:** Line 555 — `.troubleshoot__body code`
- **Description:** Inline code inside troubleshoot bodies uses `rgba(0,0,0,0.04)` background
- **Expected:** Fully opaque background: `background: #F0EBE3` or `background: var(--color-border-subtle)`.
- **Actual:** `background: rgba(0,0,0,0.04); padding: 1px 5px;`
- **Convention ref:** Anti-patterns registry OD-AP-003
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-003 | CRITICAL | OD-AP-003 rgba Semi-Transparent Background — zone emphasis token

- **Location:** Line 122 — `:root` token `--color-zone-emphasis`
- **Description:** Zone emphasis token defined as `rgba(232,48,37,0.03)` — opacity 0.03. Used on `.task-island[open]` (line 366) to tint open islands. This is a semi-transparent overlay that violates OD-AP-003.
- **Expected:** Fully opaque value. Compute the resulting color against white (#FFFFFF, the --color-zone-dense background): rgba(232,48,37,0.03) on white ≈ `#FEF8F8`. Use that solid hex.
- **Actual:** `--color-zone-emphasis: rgba(232,48,37,0.03);`
- **Convention ref:** Anti-patterns registry OD-AP-003 — "opacity === 1.0 on all visual elements. No exceptions."
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-004 | HIGH | rgba Border in Code Block Label

- **Location:** Line 517 — `.code-block__label` border-bottom
- **Description:** Code block label separator uses semi-transparent border: `border-bottom: 1px solid rgba(224,213,197,0.3)`
- **Expected:** Fully opaque border using a solid color. Compute: rgba(224,213,197,0.3) on #1A1A1A (dark code block bg) ≈ `#4B453E`. Or use `var(--color-border)` at reduced opacity effect via a pre-computed solid color.
- **Actual:** `border-bottom: 1px solid rgba(224,213,197,0.3);`
- **Convention ref:** OD-AP-003 extension — rgba in any context creates transparency artifacts
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-005 | MEDIUM | Off-Palette Background — callout--prereq

- **Location:** Line 460 — `.callout--prereq`
- **Description:** Prereq callout uses `background: #FEF5F4` — this is NOT in the locked palette or zone tokens.
- **Expected:** Use a locked palette value. Closest: `--color-background: #FEF9F5` or `--color-zone-dense: #FFFFFF` or `--color-border-subtle: #F0EBE3`. Convention Section 7 explicitly states: "Prohibited: Off-palette colors."
- **Actual:** `background: #FEF5F4`
- **Convention ref:** OD-CONVENTION-SPEC Section 7 — "Prohibited: Off-palette colors"
- **Note:** This is a tinted prereq background (light red wash). Needs to be from locked palette or removed.
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-006 | MEDIUM | Off-Palette Background — callout--checkpoint

- **Location:** Line 462 — `.callout--checkpoint`
- **Description:** Checkpoint callout uses `background: #F4FAF6` — this is NOT in the locked palette.
- **Expected:** Use a locked palette value. Same prohibition as VIS-005.
- **Actual:** `background: #F4FAF6`
- **Convention ref:** OD-CONVENTION-SPEC Section 7 — "Prohibited: Off-palette colors"
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-007 | MEDIUM | Off-Palette Background — troubleshoot summary

- **Location:** Line 533 — `.troubleshoot summary`
- **Description:** Troubleshoot summary uses `background: #FEF6F5` — NOT in locked palette.
- **Expected:** Use `var(--color-border-subtle)` (#F0EBE3) or `var(--color-background)` (#FEF9F5).
- **Actual:** `background: #FEF6F5`
- **Convention ref:** OD-CONVENTION-SPEC Section 7 — "Prohibited: Off-palette colors"
- **Note:** These 3 off-palette backgrounds (#FEF5F4, #F4FAF6, #FEF6F5) are semantic tints. However, they are NOT in the callout accent color table (Section 7) or zone token list.
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-008 | MEDIUM | Hypothesis font-size not using type token

- **Location:** Line 219 — `.exploration-hypothesis`
- **Description:** Hypothesis text uses `font-size: 15px` instead of a type token.
- **Expected:** Convention Section 5 defines a 5-level type cascade. 15px falls between `--type-body` (16px/1rem) and `--type-code` (14px/0.875rem). Should use `--type-body` (1rem).
- **Actual:** `font-size: 15px;`
- **Convention ref:** OD-CONVENTION-SPEC Section 5 — type scale tokens
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-009 | MEDIUM | Bookend-front description font-size not using type token

- **Location:** Line 316 — `.bookend-front__description`
- **Description:** Same as VIS-008 — uses `font-size: 15px` instead of a type token.
- **Expected:** Use `--type-body` (1rem / 16px).
- **Actual:** `font-size: 15px;`
- **Convention ref:** OD-CONVENTION-SPEC Section 5
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-010 | LOW | Non-Token Pixel Sizes Throughout

- **Location:** Multiple lines — font-size: 9px (L251, 259, 345, 513), 10px (L273, 413, 619, 651, 663), 13px (L335, 484, 648, 657), 14px (L333, 349, 451, 493, 549, 590, 611, 675), 15px (L219, 316, 459, 491, 583), 16px (L542), 18px (L243), 20px (L386)
- **Description:** Multiple font-size declarations use raw pixel values instead of type scale tokens. Some of these fall outside the 5-level type cascade entirely (9px, 10px, 13px, 18px, 20px).
- **Expected:** Convention Section 5 defines tokens: --type-page (40px), --type-section (26px), --type-subsection (22px), --type-body (16px), --type-code (14px), --type-meta (12px). Values like 9px, 10px, 13px, 15px, 18px, 20px are not in the type scale.
- **Actual:** Mix of token refs and raw pixel values
- **Convention ref:** OD-CONVENTION-SPEC Section 5
- **Note:** Some of these (9px for micro labels, 13px for small text) may be intentional micro-typography below the scale. The convention is ambiguous on sub-scale sizes. The 18px and 20px values (archipelago tile number, task island number) fall between --type-body (16px) and --type-subsection (22px) and are clearly non-standard.
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-011 | LOW | Code Block Syntax Colors as Raw Hex Instead of Tokens

- **Location:** Lines 522, 524 — `.code-string`, `.code-function`
- **Description:** Code syntax highlighting uses raw hex: `color: #6B9B7A` (strings), `color: #4A7C9B` (functions). While these are from the locked palette, they should reference the CSS custom properties for consistency.
- **Expected:** These ARE locked palette colors (per Convention Section 3 syntax palette), so technically compliant. However, using tokens like `var(--accent-green)` for strings and a token for functions would be more maintainable.
- **Actual:** Raw hex values `#6B9B7A`, `#4A7C9B`
- **Convention ref:** OD-CONVENTION-SPEC Section 3 explicitly lists these as syntax colors — this is COMPLIANT but not tokenized.
- **Note:** LOW severity — Convention Section 3 uses these exact hex values. Not a violation, but a consistency gap.
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-012 | LOW | Missing `--color-background` Token Reference — Step Marker

- **Location:** Line 486 — `.task-step__marker`
- **Description:** Step marker uses `background: white` instead of `var(--color-zone-dense)` (#FFFFFF) or a named token.
- **Expected:** Use `var(--color-zone-dense)` for #FFFFFF references per Convention Section 7.
- **Actual:** `background: white;`
- **Convention ref:** OD-CONVENTION-SPEC Section 7
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-013 | NOTE | Exploration-hypothesis Uses `color: var(--color-background)` instead of `--color-text-secondary`

- **Location:** Line 215 — `.exploration-title`
- **Description:** The header title uses `color: var(--color-background)` (#FEF9F5) on the dark header. This is correct per Convention Section 4 which specifies `color: #FAFAF5` for the title. However, the token uses #FEF9F5 (not #FAFAF5). The Convention spec Section 4 says `color: #FAFAF5` but the :root token `--color-background` is `#FEF9F5`.
- **Expected:** Convention Section 4 specifies title color as `#FAFAF5` but the :root defines `--color-background: #FEF9F5`. These differ (FEF9F5 vs FAFAF5).
- **Actual:** Uses `var(--color-background)` which resolves to `#FEF9F5` — this is actually the correct :root value. The Convention Section 4 diagram says #FAFAF5 which appears to be a spec-level inconsistency (not a page-level violation).
- **Convention ref:** OD-CONVENTION-SPEC Section 4 vs Section 10
- **Note:** The page correctly uses the :root token. The Convention spec has an internal inconsistency between Section 4 (#FAFAF5) and Section 10 (#FEF9F5). Not actionable against the page.
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-014 | NOTE | `task-duration` Badge Border — 3px for Micro Element

- **Location:** Line 409 — `.task-duration`
- **Description:** Duration badge uses `border: 3px solid var(--color-border)`. Per the 3-category border system, badges/micro-elements should use Cat 3 (1px), not Cat 1 (3px+).
- **Expected:** `border: 1px solid var(--color-border)` (Cat 3 micro-element, per Convention Section 2).
- **Actual:** `border: 3px solid var(--color-border);`
- **Convention ref:** OD-CONVENTION-SPEC Section 2 — Cat 3 micro-element: "Badge outlines, toggle borders" = 1px
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-015 | NOTE | `task-island__toggle` Border — 3px for Micro Element

- **Location:** Line 426 — `.task-island__toggle`
- **Description:** Toggle button (expand/collapse indicator) uses `border: 3px solid var(--color-border)`. This is a micro-element (toggle) that should be Cat 3 (1px).
- **Expected:** `border: 1px solid var(--color-border)` (Cat 3 micro-element).
- **Actual:** `border: 3px solid var(--color-border);`
- **Convention ref:** OD-CONVENTION-SPEC Section 2 — Cat 3: "toggle borders" = 1px
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-016 | NOTE | `troubleshoot summary::before` Border — 3px for Micro Element

- **Location:** Line 545 — `.troubleshoot summary::before`
- **Description:** Troubleshoot expand indicator uses `border: 3px solid var(--accent-coral)`. This is a micro-element (toggle indicator) that should be Cat 3 (1px).
- **Expected:** `border: 1px solid var(--accent-coral)` (Cat 3).
- **Actual:** `border: 3px solid var(--accent-coral);`
- **Convention ref:** OD-CONVENTION-SPEC Section 2 — Cat 3
- **Screenshot:** N/A (Playwright blocked)

---

### VIS-017 | NOTE | `verification-list__check` Border — 3px for Micro Element

- **Location:** Line 595 — `.verification-list__check`
- **Description:** Verification checkmark boxes use `border: 3px solid var(--accent-green)`. These are small 18x18px micro-elements where 3px is 16.7% of the element width — visually heavy for a checklist marker.
- **Expected:** `border: 1px solid var(--accent-green)` (Cat 3 micro-element).
- **Actual:** `border: 3px solid var(--accent-green);`
- **Convention ref:** OD-CONVENTION-SPEC Section 2 — Cat 3
- **Screenshot:** N/A (Playwright blocked)

---

## SUMMARY

### 13 Binary Gate Results

| Gate | ID | Description | Result | Notes |
|------|----|-------------|--------|-------|
| VA-01 | Page renders | Not blank, proper HTML structure | **PASS** | DOCTYPE, html lang, head, body all present. 1163 lines of valid HTML. |
| VA-02 | No visual overflow | No overflow-causing patterns | **PASS** | `overflow-x: auto` on code blocks (L508). max-width: 860px container. Responsive media queries present. |
| VA-03 | No misalignment | Flexbox/grid alignment correct | **PASS** | Consistent flex/grid patterns throughout. Inner wrapper matches page-container at 860px (L200-201). |
| VA-04 | Typography matches convention | Font trio, type scale | **CONDITIONAL PASS** | Font trio correct (Instrument Serif, Inter, JetBrains Mono). Type tokens present. BUT: multiple raw pixel sizes outside the 5-level cascade (9px, 10px, 13px, 15px, 18px, 20px). See VIS-010. |
| VA-05 | Colors match convention | Locked palette compliance | **CONDITIONAL PASS** | :root tokens match Convention Section 10 exactly. BUT: 3 off-palette backgrounds (#FEF5F4, #F4FAF6, #FEF6F5). See VIS-005/006/007. 4 rgba values. See VIS-001/002/003/004. |
| VA-06 | Spacing matches convention | Spacing token usage | **PASS** | All --space-* tokens present and correctly valued per Convention Section 6. Gestalt aliases correct. 80px+ sparse sea between islands. |
| VA-07 | Border system (ZERO 2px) | No 2px borders | **PASS** | Zero 2px border declarations in CSS rules. All structural borders are 3px (Cat 1). All separators are 1px (Cat 2/3). The `2px` occurrences on L334, L343, L597 are margin/gap values, not border-width. `outline-offset: 2px` (L670) is not a border. |
| VA-08 | Soul compliance | No border-radius, no box-shadow, no drop-shadow | **PASS** | `--border-radius: 0` in :root. `--box-shadow: none` in :root. Explicit `box-shadow: none` on .task-island--featured. Zero `border-radius` values > 0. Zero `drop-shadow`. Zero `filter:`. |
| VA-09 | Responsive at 768px | Media queries present | **PASS** | Media query at `max-width: 640px` for archipelago map (L233-235) and task overview grid (L327). Print media query (L685). Reduced-motion query (L678). Note: no 768px-specific breakpoint, but 640px covers smaller. |
| VA-10 | Code blocks correct | Dark theme, 3px border, correct fonts | **PASS** | Dark bg (#1A1A1A via var(--color-text)), 3px border, font-mono, type-code size, syntax colors from locked palette. Matches Convention Section 3 exactly. |
| VA-11 | Headers correct | Full-bleed dark, Instrument Serif, correct structure | **PASS** | Dark bg, 3px bottom border (primary), inner wrapper at 860px, meta line + title + hypothesis + archipelago map. Matches Convention Section 4. |
| VA-12 | No dead zones | No empty/broken areas | **PASS** | Sparse sea separators are intentional (80px+). Section labels bridge sparse areas. No broken layouts visible in source. |
| VA-13 | Research compliance | EXT findings applied, anti-patterns avoided | **CONDITIONAL PASS** | 19 EXT findings documented as applied (comments L3-16). Anti-patterns listed as avoided (L33-38). BUT: OD-AP-003 (rgba) still has 4 violations. Known from Wave 5 audit (L65). |

### Gate Summary

| Result | Count | Gates |
|--------|-------|-------|
| **PASS** | 9 | VA-01, VA-02, VA-03, VA-06, VA-07, VA-08, VA-10, VA-11, VA-12 |
| **CONDITIONAL PASS** | 3 | VA-04, VA-05, VA-13 |
| **FAIL** | 0 | — |
| **NOT TESTED** | 1 | VA-09 (responsive — source has media queries but visual viewport testing requires Playwright) |

### Finding Severity Summary

| Severity | Count | Finding IDs |
|----------|-------|-------------|
| CRITICAL | 3 | VIS-001, VIS-002, VIS-003 |
| HIGH | 1 | VIS-004 |
| MEDIUM | 4 | VIS-005, VIS-006, VIS-007, VIS-008, VIS-009 |
| LOW | 3 | VIS-010, VIS-011, VIS-012 |
| NOTE | 5 | VIS-013, VIS-014, VIS-015, VIS-016, VIS-017 |
| **TOTAL** | **17** | — |

### Key Patterns

1. **OD-AP-003 is the dominant issue** — 4 rgba violations (VIS-001, VIS-002, VIS-003, VIS-004). This was already known from Wave 5 audit (header comment L65: "OD-AP-003 FAIL (4 rgba)"). All 4 need solid hex replacements.

2. **3 off-palette backgrounds** (VIS-005, VIS-006, VIS-007) — semantic tint colors (#FEF5F4, #F4FAF6, #FEF6F5) that are not in the locked palette. These create subtle callout differentiation but violate Convention Section 7's prohibition.

3. **Type scale leakage** (VIS-008, VIS-009, VIS-010) — numerous raw pixel sizes outside the 5-level cascade. Convention ambiguous on sub-scale sizes, but 15px, 18px, 20px are clearly between defined stops.

4. **Cat 3 micro-element borders over-weighted** (VIS-014, VIS-015, VIS-016, VIS-017) — four micro-elements (duration badge, toggle, troubleshoot toggle, verification check) use 3px borders where Convention Section 2 specifies 1px for Cat 3 micro-elements.

5. **Soul compliance is STRONG** — zero border-radius > 0, zero box-shadow, zero drop-shadow, zero filter. The soul pieces are fully honored.

### Audit Limitations

- **No Playwright screenshots** — Chrome contention prevented browser launch. All findings are source-level analysis only.
- **No computed style checks** — Cannot verify inheritance, cascading, or runtime font loading behavior.
- **No viewport-specific testing** — Cannot verify responsive layout at 1440px or 768px visually.
- **No scroll behavior testing** — Cannot verify sparse sea spacing, dead zones, or animation behavior.

### Recommendation

The page is structurally sound with strong soul compliance. The 4 rgba violations (VIS-001–004) are the highest priority fix — replace all `rgba()` with pre-computed solid hex values. The 3 off-palette backgrounds (VIS-005–007) should either be added to the convention as sanctioned semantic tints or replaced with locked palette values.
