# Phase 3 Visual Audit Report -- CD-004, CD-005, CD-006

**Auditor:** visual-auditor-b
**Date:** 2026-02-11
**Method:** Playwright browser automation with DPR-corrected viewports
**Viewports tested:** 1440px (960 physical) and 768px (512 physical) -- DPR 0.666 on test machine

---

## Executive Summary

| Page | Desktop (1440px) | Mobile (768px) | Footer | Ship? |
|------|-----------------|----------------|--------|-------|
| CD-004 | PASS | PASS | PASS | YES |
| CD-005 | PASS | PASS (bento collapse verified) | PASS | YES |
| CD-006 | PASS (content) | PASS (no overflow) | FAIL (transparent bg) | CONDITIONAL -- 2 issues remain |

**Overall verdict:** CD-004 and CD-005 are ship-ready. CD-006 has 2 confirmed issues (1 CRITICAL, 1 HIGH).

---

## DPR Calibration Note

The Playwright browser instance had `devicePixelRatio: 0.666`, meaning `setViewportSize(768, 900)` produced `innerWidth: 1152` CSS pixels. Media queries at `max-width: 768px` did NOT fire at 768 physical pixels. All mobile tests used 512 physical pixels to achieve 768 CSS pixels. This was validated by confirming `window.innerWidth === 768` and `window.matchMedia('(max-width: 768px)').matches === true`.

Additionally, severe Playwright contention was observed throughout this audit. Other agents navigating the shared browser instance caused URL changes mid-evaluation. All critical checks were performed using atomic `browser_run_code` calls to prevent data contamination.

---

## CD-004: Essence as Background

### Desktop (1440px)
- **Header:** Dark background, "EXPLORATION CD-004 / COMBINATION: ESSENCE AS BACKGROUND / v1"
- **Title:** "Database Architecture Decisions: From Proven Patterns to Emerging Approaches" -- Instrument Serif italic, proper hierarchy
- **Red accent bar:** Full-width below header -- correct
- **Content structure:** 4 confidence tiers (Established, Probable, Speculative, Open Question) + Decision Choreography section + Research Application Record
- **Confidence badges:** Colored border-left badges (Established, Probable, Speculative, Open Question) -- visually distinct and legible
- **Essence callouts:** Properly styled with border-left, italic text, "ESSENCE" label
- **Code blocks:** Dark background, syntax highlighted (SQL, TypeScript)
- **Callouts:** Context (blue), Tip (green), Challenge (amber) -- properly differentiated
- **No horizontal overflow:** scrollWidth == clientWidth at 1440px

### Mobile (768px)
- **No horizontal overflow:** scrollWidth: 768 == clientWidth: 768
- **Media queries fire correctly:** `max-width: 768px` matches
- **Content readable:** Proper padding collapse

### Footer
- **Background:** `rgb(26, 26, 26)` -- CORRECT (dark)
- **Border-top:** `3px solid rgb(232, 48, 37)` -- CORRECT (red)
- **Text:** "CD-004 . Essence as Background" and "DD:TIDAL . OD:CONFIDENCE . AD:SPIRAL+CHOREO" -- CORRECT
- **Structure:** Flex layout with centered rule divider

### Cold Look
- **First impression:** Professional, authoritative. The confidence tier system creates a natural reading hierarchy.
- **What bothers most:** The page is very long with dense content sections. The Decision Choreography hub-and-spoke section could benefit from more visual differentiation from the confidence tiers.
- **What delights most:** The Essence callouts woven throughout create a philosophical undercurrent that gives the page personality without disrupting information flow.
- **Ship?** YES

---

## CD-005: Multi-Axis Transition

### CRITICAL CHECK: Bento Grid Responsive Overflow at 768px

**VERDICT: FIXED**

At true 768px CSS width:
- `document.documentElement.scrollWidth: 768` == `document.documentElement.clientWidth: 768`
- `.bento-grid` computed `grid-template-columns: "736.008px"` -- SINGLE COLUMN
- `.bento-grid` scrollWidth: 736 <= clientWidth: 736 -- NO OVERFLOW
- All 6 bento items at full width (736px), single column stack
- `@media (max-width: 960px)` fires: grid-template-columns set to `1fr`, span overrides applied
- `@media (max-width: 768px)` fires: additional `overflow-x: hidden` and `min-width: 0`

The CSS fix is comprehensive:
1. At 960px: grid collapses to 1fr, span items reset to span 1
2. At 768px: redundant 1fr + overflow-x: hidden + min-width: 0 on all items + code overflow-x: auto

### Desktop (1440px)
- **Header:** Dark background, "EXPLORATION CD-005 / COMBINATION: MULTI-AXIS TRANSITION / v1"
- **Title:** "Testing Strategy" -- Instrument Serif
- **Content structure:** 3 axis zones: Z-Pattern overview, F-Pattern deep dive, Bento Grid reference
- **Z-Pattern section:** Term/definition pairs with proper z-sweep grid layout
- **F-Pattern section:** Linear deep-dive with code blocks, mocking strategies, file organization
- **Bento Grid section:** 6 items (Structure, Decision Matrix, Configuration, Pipeline, Gotcha callout, Metrics) -- 4-column grid at desktop
- **Transition separators:** Between axis zones, with "Shifting Focus" callout at F-to-Bento transition
- **No horizontal overflow:** scrollWidth == clientWidth at 1440px

### Mobile (768px)
- **No horizontal overflow:** CONFIRMED (768 == 768)
- **Bento grid:** Single column, all items full width
- **Z-sweep grids:** Collapse to single column
- **Reasoning columns:** Collapse to stacked with bottom border separator
- **Content remains readable:** Proper padding and font sizing

### Footer
- **Background:** `rgb(26, 26, 26)` -- CORRECT
- **Border-top:** `3px solid rgb(232, 48, 37)` -- CORRECT
- **Text:** "CD-005 . Multi-Axis Transition" and "DD:WAVE . OD:SPATIAL . AD:Z+F+BENTO" -- CORRECT

### Bento Grid Visibility Note
At 768px, bento grid items appear as very low-contrast boxes (cream-on-cream). The items have:
- `opacity: 1` on all items
- `visibility: visible`, `display: block`
- Proper height (420-660px per item) and full width (736px)
- Content text is present and readable

The low contrast is due to `background: var(--color-zone-dense)` being very close to the page background. This is a MINOR visual concern but not a functional bug -- content is accessible.

### Cold Look
- **First impression:** The three-axis-zone architecture is ambitious and well-executed. Each zone has a distinct character.
- **What bothers most:** The bento grid items at mobile are functionally invisible in screenshots (color-on-color). Need a slightly stronger border or background differentiation.
- **What delights most:** The transition separators between axis zones are elegant. The "Shifting Focus" callout contextualizes the perspective change naturally.
- **Ship?** YES

---

## CD-006: Pilot Migration (Crown Jewel)

### CRITICAL CHECK 1: TOC Label Smashing

**VERDICT: STILL PRESENT (HIGH severity)**

The TOC density labels (SPIRAL, Z-PATTERN, BENTO, F-PATTERN, CHOREO) are smashed directly against section titles with zero spacing:

```
Rendered text (no gap):
"01 Why Build from Tokens?SPIRAL"
"02 Understanding the SoulZ-PATTERN"
"03 Token Reference CardsBENTO"
"04 Choosing Your PatternsF-PATTERN"
"05 Building Your First ComponentZ-PATTERN"
"06 Auditing for ComplianceBENTO"
"07 Deploying Your PageCHOREO"
"08 What Comes NextSPIRAL"
```

HTML structure: `<span class="toc-number">01</span> Why Build from Tokens?<span class="toc-density">SPIRAL</span>`

Root cause: `.toc-density` has `margin-left: 0px`, `padding-left: 0px`, `display: inline`. There is no whitespace character between the title text and the density span in the HTML source.

**Fix:** Add `margin-left: 8px` (or `var(--space-2)`) to `.toc-density`, or insert a space/` ` before the span.

### CRITICAL CHECK 2: TOC Density Opacity

**VERDICT: FIXED**

All `.toc-density` elements have `opacity: 1`. The Phase 2 audit reported opacity 0.6 on TOC numbers -- this is resolved.

### CRITICAL FINDING: Footer Styles Not Rendering

**SEVERITY: CRITICAL**

The CD-006 footer has NO background and NO border:
- `backgroundColor: rgba(0, 0, 0, 0)` -- TRANSPARENT (should be `rgb(26, 26, 26)`)
- `borderTop: 0px none` -- MISSING (should be `3px solid rgb(232, 48, 37)`)
- `padding: 0px` -- ZERO (should be `var(--space-8) var(--space-6)`)

**Root cause identified:** CSS comment syntax error at line 944-946 of CD-006-pilot-migration.html.

```css
/* Line 944: */ /* ═══════════════════════
/* Line 945: */    Footer -- mirrors header (C-02, C-04, C-23)
/* Line 946: */    ═══════════════════════ -->   ← WRONG: should be */
/* Line 947: */ .page-footer {
/* Line 948: */   background: var(--color-text);
```

The comment opens with `/*` on line 944 but closes with `-->` on line 946. While `-->` is technically a legacy CSS comment token, the CSSOM inspection confirmed ZERO matching rules for `.page-footer` -- the browser's CSS parser is treating the `-->` as invalid and consuming the footer rules entirely.

**Evidence:** `document.styleSheets` enumeration found zero rules matching `.page-footer` in any stylesheet. The CSS variables are defined and resolve correctly (`--color-text: #1A1A1A`, `--color-primary: #E83025`), but the rule that references them never reaches the CSSOM.

**Note:** Other `-->` comment closers in the file (lines 306, 767, 791, etc.) appear to work -- their subsequent CSS rules are applied. The failure may be position-dependent or related to the specific comment content. Regardless, this is a bug: the comment at line 946 should use `*/` not `-->`.

**Fix:** Change line 946 from `═══ -->` to `═══ */`

### Desktop (1440px)
- **Header:** Dark background, proper metadata
- **Title:** "CD-006: Pilot Migration -- Building Your First KortAI Documentation Page"
- **Page length:** 15,612px scroll height -- massive crown jewel page
- **Section count:** 19 sections with 8 TOC entries
- **TOC:** Present with numbered entries, density labels visible in accent color
- **Content:** Section headers use "SECTION 01 . SPIRAL . GEOLOGICAL DENSITY" format
- **Core Abstraction callout:** Styled with proper Essence block
- **Code blocks:** Dark theme, showing actual KortAI token CSS (meta -- showing tokens within a page built from those tokens)
- **Geological density labels:** "BEDROCK -- ESTABLISHED", "SUBSOIL -- PROBABLE" visible
- **No horizontal overflow:** scrollWidth: 1440 == clientWidth: 1440

### Mobile (768px)
- **No horizontal overflow:** scrollWidth: 768 == clientWidth: 768
- **Media query fires:** `max-width: 768px` matches

### Footer (source file verification)
- **HTML content correct:** "CD-006 . Pilot Migration" and "DD:FRACTAL . OD:COMPOUND . AD:ALL"
- **CSS rule correct in source:** `background: var(--color-text); border-top: 3px solid var(--color-primary);`
- **Rendering:** BROKEN -- transparent background, no border (CSS parsing error)

### Cold Look
- **First impression:** Ambitious and impressive. A page that teaches you to build KortAI pages using KortAI itself. The meta-quality is the crown jewel's crown.
- **What bothers most:** (1) TOC labels smashed against titles destroy the TOC readability. (2) The invisible footer makes the page feel unfinished -- it just fades into cream.
- **What delights most:** The geological density metaphor (Bedrock/Subsoil/Topsoil) overlaid on the confidence tiers creates a vivid conceptual framework. Section headers with "SECTION 01 . SPIRAL . GEOLOGICAL DENSITY" are uniquely expressive.
- **Ship?** CONDITIONAL -- must fix TOC label spacing and footer CSS comment syntax

---

## Summary of Findings

### CRITICAL (1)
| ID | Page | Issue | Status |
|----|------|-------|--------|
| VB-001 | CD-006 | Footer CSS rules not rendering (comment syntax `-->` instead of `*/` at line 946) | OPEN |

### HIGH (1)
| ID | Page | Issue | Status |
|----|------|-------|--------|
| VB-002 | CD-006 | TOC density labels smashed against section titles (zero margin-left on `.toc-density`) | OPEN |

### FIXED FROM PHASE 2 (2)
| ID | Page | Issue | Status |
|----|------|-------|--------|
| -- | CD-005 | Bento grid responsive overflow at 768px | FIXED -- grid collapses to 1fr, no overflow |
| -- | CD-006 | TOC density opacity 0.6 | FIXED -- all `.toc-density` elements at opacity 1.0 |

### LOW / NOTE (2)
| ID | Page | Issue | Severity |
|----|------|-------|----------|
| VB-003 | CD-005 | Bento grid items low contrast at mobile (cream-on-cream) | LOW |
| VB-004 | All | Playwright DPR 0.666 causes viewport miscalibration -- must use physical px / DPR for accurate CSS px | NOTE |

---

## Methodology Notes

### Playwright Contention
Severe contention was observed throughout this audit. Other agents using the same Playwright browser instance navigated to different pages during my evaluations. Pages changed from CD-004 to CD-001, CD-005 to CD-002, etc. without any user action.

**Mitigation:** All critical measurements were performed using atomic `browser_run_code` calls that navigate + measure in a single function, preventing inter-agent navigation interference.

### DPR Correction
The test machine has `devicePixelRatio: 0.666`, causing `setViewportSize({ width: 768 })` to produce `innerWidth: 1152` CSS pixels. This means:
- 512 physical px = 768 CSS px
- 640 physical px = 960 CSS px
- 960 physical px = 1440 CSS px

All media query checks were validated by confirming `window.innerWidth` and `window.matchMedia()` results before drawing conclusions.

### Source File Verification
Footer content for all 3 pages was verified by reading the HTML source files directly (grep), not relying solely on Playwright DOM evaluation, due to the contention issues.
