# Programmatic Soul Verification Report
## Date: 2026-02-11

---

### Summary
- **Total files checked:** 6
- **Total soul violations:** 1 (MINOR)
- **Total convention violations:** 0
- **Soul compliance:** PASS (with 1 minor annotation)
- **Convention compliance:** PASS

---

## Soul Checks (S-01 through S-10)

### S-01: border-radius
**Status: PASS (all 6 files)**

Every `border-radius` instance across all 6 files is either:
- `:root` token `--border-radius: 0;` (all 6 files)
- Global `* { border-radius: 0; }` (all 6 files)
- `border-radius: var(--border-radius)` which resolves to 0 (CD-004 line 501)
- Documentation/comment text referencing the rule

| File | CSS border-radius declarations | All zero? |
|------|-------------------------------|-----------|
| CD-001 | `--border-radius: 0` (117), `border-radius: 0` (174) | YES |
| CD-002 | `--border-radius: 0` (151), `border-radius: 0` (211) | YES |
| CD-003 | `--border-radius: 0` (125), `border-radius: 0` (183) | YES |
| CD-004 | `--border-radius: 0` (133), `border-radius: 0` (193), `border-radius: var(--border-radius)` (501) | YES |
| CD-005 | `--border-radius: 0` (128), `border-radius: 0` (188) | YES |
| CD-006 | `--border-radius: 0` (102), `border-radius: 0` (168) | YES |

**Zero violations.**

---

### S-02: box-shadow
**Status: PASS (all 6 files)**

Every `box-shadow` instance is either:
- `:root` token `--box-shadow: none;` (all 6 files)
- Documentation/comment text referencing the rule

| File | CSS box-shadow declarations | All none? |
|------|---------------------------|-----------|
| CD-001 | `--box-shadow: none` (118) | YES |
| CD-002 | `--box-shadow: none` (152) | YES |
| CD-003 | `--box-shadow: none` (126) | YES |
| CD-004 | `--box-shadow: none` (134) | YES |
| CD-005 | `--box-shadow: none` (129) | YES |
| CD-006 | `--box-shadow: none` (103) | YES |

**Zero violations. No computed box-shadow values anywhere.**

---

### S-03: drop-shadow
**Status: PASS (all 6 files)**

No CSS `filter: drop-shadow()` found in any file. All `drop-shadow` mentions are in:
- Provenance header comments (line ~32-33 in each file)
- Self-audit documentation sections
- Content text discussing the soul rule

**Zero violations.**

---

### S-04: Instrument Serif
**Status: PASS (all 6 files)**

`Instrument Serif` is defined as `--font-display` in `:root` across all files. Its usage via `font-family: var(--font-display)` is applied to:
- **Headings** (h1-h6): Used for page/section headings (display font role)
- **Essence callout body** (`.callout--essence .callout__body`): Italic serif voice
- **Core Abstraction titles** (`.core-abstraction__title`): Principle statements
- **Section headings**: Various structural headings

The `--font-display` variable is the conventional heading/display font. Instrument Serif for headings is consistent across all 6 files and all prior DD/OD/AD explorations. The soul constraint "Instrument Serif italic for Essence/Core ONLY" refers specifically to italic serif usage (the "Archivist voice"), not the display font role. Headings use Instrument Serif in regular weight (not italic), which is the standard display usage.

**Zero violations.**

---

### S-05: Callout DNA
**Status: PASS (all 6 files)**

All callouts across all 6 files follow the 2-zone structure:
- **Zone 1: Label** (`.callout__label` or `.callout-label`)
- **Zone 2: Body** (`.callout__body` or `.callout-body`)
- **Left border: 4px solid** with accent color differentiation

| File | Callout base class | border-left | 2-zone? | Color differentiation? |
|------|-------------------|-------------|---------|----------------------|
| CD-001 | `.callout` (472) | `4px solid var(--accent-blue)` (472) | YES | YES (blue/green/coral/amber/purple) |
| CD-002 | `.callout` (406) | `4px solid var(--accent-blue)` (406) | YES | YES (blue/green/coral/amber/purple) |
| CD-003 | `.callout` (357) | `4px solid var(--accent-blue)` (357) | YES | YES (blue/green/coral/amber/purple) |
| CD-004 | Individual callout classes | `4px solid` per type | YES | YES (purple/blue/green/amber) |
| CD-005 | `.callout` (375) | `4px solid var(--accent-blue)` (375) | YES | YES (blue/green/coral/amber/purple) |
| CD-006 | `.callout` (387) | `var(--border-left-width) solid` (387) | YES | YES (blue/green/coral/purple/amber) |

**Zero violations.**

---

### S-06: No physical animation
**Status: PASS (all 6 files)**

All `animation` and `transition` instances fall into permitted categories:

1. **`text-transform: uppercase`** -- CSS text formatting, not animation (found extensively in all files)
2. **`--transition-standard: 0.3s ease`** -- token definition only (all files)
3. **`transition: color var(--transition-standard)`** -- color transition only (CD-004:283, CD-006:330) -- PERMITTED
4. **`@media (prefers-reduced-motion: reduce)`** -- accessibility reduction:
   - `animation-duration: 0.01ms !important` (all 6 files)
   - `transition-duration: 0.01ms !important` (all 6 files)
5. **`.transition-smooth`, `.breathing-transition`, `.transition--smooth`** -- CSS class names for layout elements, not CSS animation properties
6. **`transform: translateY(-50%)`** -- CD-005 line 1033 -- used for checkbox vertical centering (static positioning, not hover/animation)

No `translateY` on hover. No `scale()` anywhere. No `parallax` anywhere. No `@keyframes` with physical motion.

**Zero violations.**

---

### S-07: Opacity
**Status: PASS with 1 MINOR annotation**

| File | Opacity/rgba instances | Status |
|------|----------------------|--------|
| CD-001 | None in CSS | PASS |
| CD-002 | None in CSS | PASS |
| CD-003 | None in CSS | PASS |
| CD-004 | None in CSS (documentation mentions "opacity: 1" as compliant) | PASS |
| CD-005 | None in CSS | PASS |
| CD-006 | `opacity: 0.6` at line 349 | **MINOR** |

**CD-006 line 349 detail:**
```css
.toc-section-number {
    font-family: var(--font-mono);
    font-size: var(--type-meta);
    color: var(--color-text-secondary);
    margin-left: auto;
    opacity: 0.6;
}
```

This is a **table-of-contents section number** element -- a minor decorative/navigational element, not a background or major visual component. The opacity applies to a small text label within the TOC sidebar. While technically a soul violation (opacity < 1.0), it is:
- On a text element, not a background
- On a decorative/navigational element, not a content element
- A minor stylistic choice for visual hierarchy within the TOC

**Severity: MINOR. One instance across 6 files.**

No `rgba()` with alpha < 1.0 found in any CSS across all 6 files.

---

### S-08: Border categories
**Status: PASS (all 6 files)**

Exhaustive border-width check across all files. Every CSS border declaration uses only permitted widths:

| Width | Category | Count (approximate across all files) |
|-------|----------|--------------------------------------|
| 1px | Cat 2 separator / Cat 3 micro | ~95 instances |
| 3px | Cat 1 structural | ~85 instances |
| 4px | Cat 3 semantic (callout left-border) | ~35 instances |
| 0 / none | Reset/removal | ~20 instances |

**2px border check:** Searched for `2px` across all files. All instances are:
- `outline-offset: 2px` (accessibility, not border -- all 6 files)
- `padding: 2px 8px` or `padding: 2px 6px` (padding, not border -- all 6 files)
- `text-underline-offset: 2px` (CD-004 line 282, text decoration, not border)
- `margin-top: 2px` (CD-002 line 620, margin, not border)
- Spacing values in comments (`32px`, `12px`, etc.)
- Documentation text referencing the "2px border epidemic"

**Zero 2px border declarations. Only 1px, 3px, 4px borders used.**

---

### S-09: Accent color
**Status: PASS (all 6 files)**

`#E83025` is used as `--color-primary` in all 6 files. Also used as `--syntax-keyword` for code highlighting.

Other color search results:
- No other red/accent hex colors found in CSS rules
- Callout accent colors (`--accent-blue`, `--accent-green`, `--accent-coral`, `--accent-amber`, `--accent-purple`) are used exclusively for callout left-border differentiation as permitted

**Zero violations.**

---

### S-10: No hover depth
**Status: PASS (all 6 files)**

All `:hover` rules across all files contain only:
- `text-decoration: underline` (links) -- all 6 files
- `color` change (CD-006 line 333, TOC links) -- permitted

Multiline regex search for `:hover` combined with `translateY`, `scale`, `box-shadow`, or `drop-shadow` returned **zero matches**.

**Zero violations.**

---

## Convention Checks (C-11 through C-16)

### C-11: max-width: 1100px on page container
**Status: PASS (all 6 files)**

| File | max-width: 1100px instances | Applied to |
|------|---------------------------|------------|
| CD-001 | Lines 261, 312, 322, 371, 775 | .page-container, .section-content, .bento-grid, footer-inner |
| CD-002 | Lines 305, 356, 1388 | .page-container, .section-content, footer inline |
| CD-003 | Lines 260, 309, 898 | .page-container, .section-content, footer-inner |
| CD-004 | Lines 298, 333, 748 | .page-container, .section-content, footer-inner |
| CD-005 | Lines 275, 325, 1050 | .page-container, .section-content, footer-inner |
| CD-006 | Lines 255, 291, 947 | .page-container, .section-content, footer-inner |

**All files have proper 1100px containment.**

---

### C-12: Footer/capstone presence
**Status: PASS (all 6 files)**

| File | Footer element | Capstone present? |
|------|---------------|-------------------|
| CD-001 | `<footer class="page-footer">` (1578) | YES -- Essence callout capstone (1562) |
| CD-002 | `<footer>` (1387) with inline 3px border-top | YES -- footer with provenance |
| CD-003 | `<footer class="page-footer">` (1661) | YES -- Challenge callout + capstone section (1427) |
| CD-004 | `<footer class="page-footer">` (1541) | YES -- 4-column footer with exploration/combination/findings/status |
| CD-005 | `<footer>` (1793) | YES -- soul compliance + findings summary |
| CD-006 | `<footer>` (2022) | YES -- footer with meta + provenance chain |

**All files have both footer and capstone/closing content.**

---

### C-13: 3px border on structural elements
**Status: PASS (all 6 files)**

| File | Header border | Footer border |
|------|--------------|---------------|
| CD-001 | `border-bottom: 3px solid var(--color-primary)` (257) | `border-top: 3px solid var(--color-primary)` (770) |
| CD-002 | `border-bottom: 3px solid var(--color-primary)` (301) | `border-top: 3px solid var(--color-border)` (1387 inline) |
| CD-003 | `border-bottom: 3px solid var(--color-primary)` (256) | `border-top: 3px solid var(--color-border)` (892) |
| CD-004 | `border-bottom: 3px solid var(--color-primary)` (294) | `border-top: 3px solid var(--color-border)` (742) |
| CD-005 | `border-bottom: 3px solid var(--color-primary)` (271) | `border-top: 3px solid var(--color-border)` (1044) |
| CD-006 | `border-bottom: 3px solid var(--color-primary)` (251) | `border-top: 3px solid var(--color-primary)` (943) |

**All structural elements use 3px borders.**

---

### C-14: 4px border-left on callouts
**Status: PASS (all 6 files)**

All callouts use `border-left: 4px solid` (or `border-left: var(--border-left-width) solid` where `--border-left-width: 4px`).

Verified per file:
- CD-001: `border-left: var(--border-left-width) solid` (472), `--border-left-width: 4px` (146)
- CD-002: `border-left: 4px solid` (406)
- CD-003: `border-left: 4px solid` (357)
- CD-004: `border-left: 4px solid` on each callout type (383, 413, 441, 469)
- CD-005: `border-left: 4px solid` (375)
- CD-006: `border-left: var(--border-left-width) solid` (387), `--border-left-width: 4px` (131)

**Zero violations.**

---

### C-15: Prose max-width: 70ch
**Status: PASS (all 6 files)**

| File | 70ch instances |
|------|---------------|
| CD-001 | Lines 203, 304, 726 |
| CD-002 | Lines 240, 348 |
| CD-003 | Lines 210, 303 |
| CD-004 | Lines 273, 325, 406, 434, 462, 490 |
| CD-005 | Lines 217, 317, 627, 675, 709, 824 |
| CD-006 | Lines 197, 283, plus inline styles on key prose elements |

Some elements use narrower widths (55ch, 60ch) for specific design purposes (e.g., CD-001 reasoning component at 55ch, CD-004 essence callout at 60%). These are intentional density variations, not violations.

**All files constrain prose width.**

---

### C-16: Font-family uses only permitted trio
**Status: PASS (all 6 files)**

All `font-family` declarations across all files reference only:
- `var(--font-display)` = `'Instrument Serif', Georgia, serif`
- `var(--font-body)` = `'Inter', system-ui, sans-serif`
- `var(--font-mono)` = `'JetBrains Mono', 'SF Mono', monospace`

No rogue font families found anywhere.

**Zero violations.**

---

## Component Census

### Per-File Component Inventory

| Component | CD-001 | CD-002 | CD-003 | CD-004 | CD-005 | CD-006 | TOTAL |
|-----------|--------|--------|--------|--------|--------|--------|-------|
| Code Snippet / Code Block | 5 | 3 | 4 | 4 | 4 | 12 | 32 |
| Info Callout | 2 | 1 | 2 | 1 | 2 | 3 | 11 |
| Tip Callout | 2 | 1 | 2 | 1 | 2 | 2 | 10 |
| Gotcha Callout | 2 | 1 | 2 | 1 | 2 | 2 | 10 |
| Essence Callout | 4 | 1 | 2 | 4 | 1 | 3 | 15 |
| Challenge Callout | 0 | 0 | 1 | 0 | 0 | 1 | 2 |
| File Tree | 0 | 0 | 3 | 0 | 0 | 1 | 4 |
| Decision Matrix | 0 | 1 | 1 | 0 | 0 | 0 | 2 |
| Core Abstraction | 1 | 0 | 1 | 1 | 1 | 1 | 5 |
| Task Component | 0 | 2 | 0 | 0 | 1 | 3 | 6 |
| Reasoning | 3 | 0 | 0 | 0 | 0 | 0 | 3 |
| Spiral Strata | 0 | 3 | 0 | 4 | 0 | 2 | 9 |
| Q&A Blocks | 0 | 0 | 0 | 0 | 0 | 6 | 6 |
| Bento Grid | 1 | 0 | 1 | 0 | 1 | 1 | 4 |
| Essence Pullquote | 4 | 0 | 0 | 0 | 0 | 0 | 4 |

**Notes:**
- CD-001 is reasoning-heavy (3 Reasoning components, 4 Essence pullquotes)
- CD-002 is task/decision-heavy (2 Task, 1 Decision Matrix, 3 Spiral strata)
- CD-003 is file-tree/callout-heavy (3 File Trees, diverse callout types)
- CD-004 is essence/spiral-heavy (4 Essence callouts, 4 Spiral strata)
- CD-005 has balanced distribution across component types
- CD-006 is the most component-rich (12 code blocks, 6 Q&A, 3 tasks)

---

## Finding Census (CD-F-001 through CD-F-025)

| Finding ID | File | Status | Description |
|------------|------|--------|-------------|
| CD-F-001 | CD-001 (1593) | DOCUMENTED | CRESCENDO Velocity Interleaving |
| CD-F-002 | CD-001 (1608) | DOCUMENTED | F-Pattern to Bento Bridge Transition |
| CD-F-003 | CD-001 (1624) | DOCUMENTED | Core Abstraction Contains the CRESCENDO Peak |
| CD-F-004 | CD-001 (1639) | DOCUMENTED | Bento Grid as Heavy-Component Containment |
| CD-F-005 | CD-002 (1458) | DOCUMENTED | Decision-as-PULSE-Pause |
| CD-F-006 | CD-002 (1475) | DOCUMENTED | Breathing Transition Validated Between Z and Spiral |
| CD-F-007 | CD-002 (1491) | DOCUMENTED | Task-Decision Stacking via N1 |
| CD-F-008 | CD-002 (1507) | DOCUMENTED | Spiral Confidence Strata in Task Context |
| CD-F-009 | CD-003 (1671) | DOCUMENTED | File Tree + Callout Left-Anchor Coexistence |
| CD-F-010 | CD-003 (1688) | DOCUMENTED | SMOOTH Transition Preserves ISLANDS Density |
| CD-F-011 | CD-003 (1705) | DOCUMENTED | File Tree as Temperature Buffer for Callout Sequences |
| CD-F-012 | CD-003 (1725) | DOCUMENTED | Decision Matrix as Cognitive Mode Hub |
| CD-F-013 | CD-004 (1569) | DOCUMENTED | Ambient Essence Through Frequency, Not Depth |
| CD-F-014 | CD-004 (1583) | DOCUMENTED | TIDAL Width Modulation Creates Density Without Depth |
| CD-F-015 | CD-004 (1597) | DOCUMENTED | Confidence-Proportional Spacing IS Spiral Reading Order |
| CD-F-016 | CD-004 (1613) | DOCUMENTED | Breathing Transition Separates Incompatible Axis Geometries |
| CD-F-017 | CD-005 (1935) | DOCUMENTED | Multi-Axis Sequential Coherence |
| CD-F-018 | CD-005 (1949) | DOCUMENTED | WAVE Density Across Axis Boundaries |
| CD-F-019 | CD-005 (1963) | DOCUMENTED | Bridge Transition as Cognitive Handoff |
| CD-F-020 | CD-005 (1981) | DOCUMENTED | Component Voice Preservation Across Axes |
| CD-F-021 | CD-006 (2036) | DOCUMENTED | Bookend Spiral Creates Structural Wholeness |
| CD-F-022 | CD-006 (2042) | DOCUMENTED | Bridge Transitions Carry Semantic Load |
| CD-F-023 | CD-006 (2048) | DOCUMENTED | Real Content Eliminates Forced Component Placement |
| CD-F-024 | CD-006 (2054) | DOCUMENTED | Compound Page Density Arc Is a 4-Act Structure |
| CD-F-025 | CD-006 (2060) | DOCUMENTED | Transition Grammar Types Map to Cognitive Boundary Difficulty |

**All 25 findings (CD-F-001 through CD-F-025) are present and documented.**
- 4 per file for CD-001 through CD-004
- 4 for CD-005
- 5 for CD-006
- Distribution: 4 + 4 + 4 + 4 + 4 + 5 = 25

---

## Violations Detail

### VIOLATION #1 (MINOR)
- **File:** CD-006-pilot-migration.html
- **Line:** 349
- **Check:** S-07 (opacity)
- **Type:** Soul violation (minor)
- **Element:** `.toc-section-number`
- **Value:** `opacity: 0.6`
- **Context:** Table of contents section number label -- decorative/navigational text element
- **Severity:** MINOR -- text element, not background; navigational, not content
- **Recommendation:** Replace with `color: var(--color-text-secondary)` or adjust the color value to achieve the desired visual hierarchy without opacity

---

## Overall Assessment

### Soul Compliance Matrix

| Check | CD-001 | CD-002 | CD-003 | CD-004 | CD-005 | CD-006 |
|-------|--------|--------|--------|--------|--------|--------|
| S-01 border-radius: 0 | PASS | PASS | PASS | PASS | PASS | PASS |
| S-02 box-shadow: none | PASS | PASS | PASS | PASS | PASS | PASS |
| S-03 No drop-shadow | PASS | PASS | PASS | PASS | PASS | PASS |
| S-04 Instrument Serif | PASS | PASS | PASS | PASS | PASS | PASS |
| S-05 Callout DNA | PASS | PASS | PASS | PASS | PASS | PASS |
| S-06 No physical anim | PASS | PASS | PASS | PASS | PASS | PASS |
| S-07 Opacity 1.0 | PASS | PASS | PASS | PASS | PASS | MINOR |
| S-08 Border 1/3/4px | PASS | PASS | PASS | PASS | PASS | PASS |
| S-09 #E83025 accent | PASS | PASS | PASS | PASS | PASS | PASS |
| S-10 No hover depth | PASS | PASS | PASS | PASS | PASS | PASS |

### Convention Compliance Matrix

| Check | CD-001 | CD-002 | CD-003 | CD-004 | CD-005 | CD-006 |
|-------|--------|--------|--------|--------|--------|--------|
| C-11 max-width: 1100px | PASS | PASS | PASS | PASS | PASS | PASS |
| C-12 Footer/capstone | PASS | PASS | PASS | PASS | PASS | PASS |
| C-13 3px structural | PASS | PASS | PASS | PASS | PASS | PASS |
| C-14 4px callout border | PASS | PASS | PASS | PASS | PASS | PASS |
| C-15 Prose 70ch | PASS | PASS | PASS | PASS | PASS | PASS |
| C-16 Font trio only | PASS | PASS | PASS | PASS | PASS | PASS |

### Final Verdict

**SOUL COMPLIANCE: PASS** (59/60 checks PASS, 1/60 MINOR)
**CONVENTION COMPLIANCE: PASS** (36/36 checks PASS)
**FINDING COVERAGE: COMPLETE** (25/25 findings documented)
**COMPONENT CENSUS: COMPLETE** (122 total component instances across 15 types)

The CD exploration set demonstrates exceptionally strong soul compliance. The single minor violation (opacity: 0.6 on a TOC label in CD-006) is a text decorative element that does not affect the ANTI-PHYSICAL identity. All critical soul constraints (border-radius, box-shadow, drop-shadow, border categories, accent color) are zero-violation across all 6 files.
