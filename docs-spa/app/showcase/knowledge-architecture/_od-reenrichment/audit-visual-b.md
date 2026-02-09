<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/audit-visual-b.md
Tier: C | Stage: 3 (Organization OD) | Generated: 2026-02-09

BUILT ON: OD-003-task-based.html, OD-005-spatial.html, audit-identity-brief.md
CONSUMED BY: consistency agent, Wave 6 verifiers
END INLINE THREADING HEADER
-->

# Visual Audit B: OD-003 + OD-005

**Auditor:** visual-b
**Date:** 2026-02-09
**Method:** Code-based CSS analysis (Playwright unavailable due to browser contention from concurrent agents). All findings derived from direct source inspection of computed CSS properties and HTML structure.
**Viewport simulation:** Responsive breakpoints analyzed from `@media` queries in source.

---

## 1. OD-003 at 1440px

### Layout Structure
- Dark header (full-bleed `#1A1A1A`) with 3px red bottom border -- CORRECT
- Inner wrapper: `max-width: 860px; margin: 0 auto` -- CORRECT per convention spec
- Archipelago map: 6-column grid with 3px solid borders -- CORRECT
- Task islands use `<details>` elements (collapsible) -- intentional per identity brief
- Bookend front/back framing the content -- structural ISLANDS pattern visible
- Page container: `max-width: 860px` -- CORRECT

### Soul Check
- **border-radius: 0 in :root** -- DECLARED on line 135
- **box-shadow: none in :root** -- DECLARED on line 136
- **filter:** -- NONE found anywhere in file
- **transform hover z-depth:** -- NONE found (no :hover + transform pattern)
- **Colors:** Locked palette used via CSS variables. Exceptions noted in findings below.
- **Font trio:** All `font-family` declarations use `var(--font-display)`, `var(--font-body)`, or `var(--font-mono)` -- CORRECT
- **Reduced motion:** Present on line 680 -- CORRECT

### Findings at 1440px

**FINDING VB-003-01: border-radius: 4px on task-island__toggle (SOUL VIOLATION)**
- Line 427: `.task-island__toggle { border-radius: 4px; }`
- This is the +/- toggle button on collapsible task islands
- Severity: **CRITICAL** -- direct violation of Soul Piece 1 (border-radius: 0 on ALL elements, no exceptions)
- The `:root` declares `--border-radius: 0` but this element uses a hardcoded `4px` value

**FINDING VB-003-02: 2px border on .callout (OD-F-AP-001 VIOLATION)**
- Line 439: `.callout { border: 2px solid var(--color-border); }`
- The shorthand sets top/right/bottom to 2px. Left is overridden to `var(--border-left-width)` (4px) on line 440.
- Severity: **HIGH** -- 2px border epidemic anti-pattern. Structural callout borders should be 3px (Cat 1) or 1px (Cat 2/3). 2px is the ambiguous middle ground explicitly banned by OD-F-AP-001.

**FINDING VB-003-03: rgba() semi-transparent backgrounds (OD-AP-003 VIOLATION)**
- Line 122: `--color-zone-emphasis: rgba(232,48,37,0.03)` -- alpha 0.03
- Line 458: `.callout__body code { background: rgba(0,0,0,0.04) }` -- alpha 0.04
- Line 519: `.code-block__label { border-bottom: 1px solid rgba(224,213,197,0.3) }` -- alpha 0.3
- Line 557: `.troubleshoot__body code { background: rgba(0,0,0,0.04) }` -- alpha 0.04
- Severity: **HIGH** -- Binary rule: opacity === 1.0 everywhere. Any rgba() with alpha < 1.0 is a violation per OD-AP-003.

**FINDING VB-003-04: Off-palette color #B8A080**
- Line 449: `.callout__label { color: #B8A080; }`
- This warm brown is NOT in the locked palette (#E83025, #1A1A1A, #FEF9F5, #666666, #E0D5C5, #F0EBE3, #FFFFFF, #FAF5ED) and is not one of the 5 accent colors.
- Severity: **MEDIUM** -- Off-palette color. Should use `var(--color-text-secondary)` (#666666) or `var(--color-border)` (#E0D5C5).

**FINDING VB-003-05: Off-palette callout backgrounds**
- Line 462: `.callout--prereq { background: #FEF5F4; }` -- not a zone token
- Line 464: `.callout--checkpoint { background: #F4FAF6; }` -- not a zone token
- Line 535: `.troubleshoot summary { background: #FEF6F5; }` -- not a zone token
- Severity: **LOW** -- These are very subtle tinted backgrounds derived from accent colors. They're not in the locked palette but serve a functional purpose (callout type differentiation). Consider replacing with zone tokens or opacity-free accent tints.

---

## 2. OD-003 at 768px

### Responsive Behavior
- Only one breakpoint at `max-width: 640px` (line 233): collapses archipelago map from 6-column to 3-column grid
- No 768px-specific breakpoint exists
- At 768px, page renders at full desktop layout within `max-width: 860px` container, which fits comfortably
- Task overview grid also has a 640px breakpoint (line 327): collapses to single column

### Findings at 768px

**FINDING VB-003-06: No 768px responsive breakpoint**
- The page only adapts at 640px, not 768px
- At 768px width, the 860px max-width container would be clipped (860px > 768px viewport)
- The page-container likely has padding, but the content may run wider than the viewport
- Severity: **MEDIUM** -- Proportional wrongness. The content container (860px) exceeds the 768px viewport width. Needs a breakpoint or the container needs to respect viewport constraints.

All findings from the 1440px audit (VB-003-01 through VB-003-05) also apply at 768px since they are CSS declarations, not viewport-dependent.

---

## 3. OD-005 at 1440px

### Layout Structure
- Dark header (full-bleed) with `#1A1A1A` background -- CORRECT
- Inner wrapper: `max-width: 860px; margin: 0 auto` -- CORRECT
- Territory grid: hub-and-spoke layout with solid offset pseudo-elements
- WAVE density indicator: fixed sidebar on right side (visible at >1200px)
- Spoke sections: 2-column grid with sidebar reference panels
- 7 territory zones with keyboard navigation

### Soul Check
- **border-radius: 0 in :root** -- DECLARED on line 208 (`--border-radius: 0`)
- **box-shadow: none in :root** -- DECLARED on line 209 (`--box-shadow: none`)
- **filter:** -- NONE found anywhere in file
- **transform hover z-depth:** -- REMOVED per identity-delta-wave1 (line 159 comment confirms). Hover uses flat border-color assertion instead (EXT-SPAT-013).
- **Colors:** Locked palette used via CSS variables. Exceptions noted below.
- **Font trio:** All `font-family` declarations use CSS variables -- CORRECT
- **Solid offset opacity:** Explicitly set to `opacity: 1` on line 565 -- CORRECT
- **Reduced motion:** Present on lines 306-312 -- CORRECT

### Findings at 1440px

**FINDING VB-005-01: rgba() semi-transparent callout backgrounds (OD-AP-003 VIOLATION)**
- Line 801: `.callout--info { background: rgba(74, 144, 217, 0.05) }` -- alpha 0.05
- Line 806: `.callout--tip { background: rgba(74, 157, 107, 0.05) }` -- alpha 0.05
- Line 811: `.callout--gotcha { background: rgba(201, 112, 101, 0.05) }` -- alpha 0.05
- Line 816: `.callout--essence { background: rgba(124, 58, 237, 0.04) }` -- alpha 0.04
- Line 827: `.callout--checkpoint { background: rgba(74, 157, 107, 0.06) }` -- alpha 0.06
- Severity: **HIGH** -- 5 instances of semi-transparent backgrounds on callouts. Binary rule: opacity === 1.0. All rgba() backgrounds with alpha < 1.0 violate OD-AP-003.

**FINDING VB-005-02: Off-palette accent color #7C3AED (purple)**
- Line 239: `--accent-purple: #7C3AED`
- Used on line 815-816 for `.callout--essence` border and background
- The identity brief lists "5 accents" but the locked palette section lists only: `#E83025, #1A1A1A, #FEF9F5, #666666, #E0D5C5, #F0EBE3, #FFFFFF, #FAF5ED + 5 accents`
- The 5 accents are: blue (#4A90D9), green (#4A9D6B), coral (#C97065), amber (#D97706), purple (#7C3AED)
- Purple IS listed as an accent in both OD-003 and OD-005 `:root` blocks, so this may be sanctioned
- Severity: **LOW** -- Needs cross-OD consistency confirmation. If purple is an accepted 5th accent across all ODs, this is PASS.

**FINDING VB-005-03: Scroll animation opacity starts at 0**
- Lines 278-284: `@keyframes arrive { from { opacity: 0; ... } to { opacity: 1; ... } }`
- Elements start at `opacity: 0` before scroll-reveal animation fires
- This is mitigated by: (a) reduced-motion media query that forces instant display, (b) `animation-range: entry 10% entry 40%` means elements become visible quickly, (c) fallback for non-Chromium browsers (not visible in this file but would use `.reveal { opacity: 1 }`)
- Severity: **LOW** -- The animation is scroll-driven (not hover-based), elements end at opacity: 1, and reduced-motion fallback exists. This is a UX pattern, not a soul violation per se, since the final state is fully opaque.

### Positive Observations (OD-005 at 1440px)
- Territory tile hover uses flat border-color assertion (line 550: `border-color: var(--color-primary)`) -- CORRECTLY replaces prior spirit violation
- Solid offset pseudo-element at `opacity: 1` (line 565) -- CORRECT
- Territory tile marker is 8x8px square with no border-radius (line 568-573) -- CORRECT per Soul Piece 5
- Wave indicator zones are rectangular (8x24px) with no border-radius -- CORRECT
- Code blocks use dark background (#1A1A1A) with locked syntax colors -- CORRECT per convention spec
- All structural borders are 3px -- CORRECT

---

## 4. OD-005 at 768px

### Responsive Behavior
- `@media (max-width: 768px)` on line 690: spoke-grid collapses from 2-column to single column
- `@media (max-width: 1200px)` on line 1061: wave-indicator hidden
- At 768px: wave indicator hidden (good), spoke content stacks vertically (good)

### Findings at 768px

**FINDING VB-005-04: Wave indicator disappears at 1200px, not 768px**
- The wave density indicator (`position: fixed; right: var(--space-4)`) vanishes at 1200px
- At 768px, it's already hidden, which is correct behavior
- But between 768px and 1200px there's a gap where the indicator might overlap content on narrower desktop viewports
- Severity: **LOW** -- At 1200px the indicator is already small (8px wide), and it's positioned at the extreme right edge with z-index: 100. Unlikely to cause visual issues, but the 1200px threshold may be too aggressive.

All findings from the 1440px audit (VB-005-01 through VB-005-03) also apply at 768px.

---

## 5. Soul Compliance Summary

### OD-003: CONDITIONAL FAIL

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1 | border-radius: 0 everywhere | **FAIL** | Line 427: `.task-island__toggle { border-radius: 4px }` |
| 2 | box-shadow: none everywhere | PASS | Line 136 declares `--box-shadow: none`; line 371 reinforces `box-shadow: none` |
| 3 | filter: none | PASS | No `filter:` declarations found |
| 4 | No transform hover z-depth | PASS | No `:hover` + `transform` pattern found |
| 5 | Locked palette colors | **FAIL** | Line 449: `#B8A080` off-palette. Lines 462, 464, 535: off-palette backgrounds |
| 6 | Font trio only | PASS | All `font-family` use CSS variables from trio |
| 7 | Border 3-category system | **FAIL** | Line 439: `border: 2px` on .callout (epidemic anti-pattern) |
| 8 | No 2px borders | **FAIL** | Line 439: `border: 2px solid` on .callout |
| 9 | Spacing via tokens | PASS | All spacing uses `var(--space-*)` tokens |
| 10 | Max 2 callouts per viewport | PASS | Each task island has prereq + checkpoint (2 max) |

**OD-003 Result: 6/10 PASS, 4/10 FAIL**

### OD-005: CONDITIONAL FAIL

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1 | border-radius: 0 everywhere | PASS | `--border-radius: 0` in :root; no hardcoded border-radius values found |
| 2 | box-shadow: none everywhere | PASS | `--box-shadow: none` in :root; print style reinforces `box-shadow: none !important` |
| 3 | filter: none | PASS | No `filter:` declarations found |
| 4 | No transform hover z-depth | PASS | Prior spirit violation REMOVED; flat border-color hover used instead |
| 5 | Locked palette colors | **FAIL** | 5 callout backgrounds use rgba() with off-palette colors at sub-1.0 opacity |
| 6 | Font trio only | PASS | All `font-family` use CSS variables from trio |
| 7 | Border 3-category system | PASS | Structural borders are 3px; data separators are 1px; callouts use 4px left border |
| 8 | No 2px borders | PASS | No `2px solid` found in file |
| 9 | Spacing via tokens | PASS | All spacing uses `var(--space-*)` or Gestalt aliases |
| 10 | Max 2 callouts per viewport | PASS | Callouts appear in pairs (max 2 per spoke section) |

**OD-005 Result: 9/10 PASS, 1/10 FAIL**

---

## 6. Severity-Ranked Findings

### CRITICAL (1)

| ID | Page | Finding | Line(s) |
|----|------|---------|---------|
| VB-003-01 | OD-003 | `border-radius: 4px` on `.task-island__toggle` | 427 |

### HIGH (3)

| ID | Page | Finding | Line(s) |
|----|------|---------|---------|
| VB-003-02 | OD-003 | `border: 2px solid` on `.callout` (OD-F-AP-001 epidemic) | 439 |
| VB-003-03 | OD-003 | 4x `rgba()` semi-transparent backgrounds (OD-AP-003) | 122, 458, 519, 557 |
| VB-005-01 | OD-005 | 5x `rgba()` semi-transparent callout backgrounds (OD-AP-003) | 801, 806, 811, 816, 827 |

### MEDIUM (2)

| ID | Page | Finding | Line(s) |
|----|------|---------|---------|
| VB-003-04 | OD-003 | Off-palette color `#B8A080` on callout labels | 449 |
| VB-003-06 | OD-003 | No 768px responsive breakpoint; 860px container exceeds viewport | 233 (only 640px exists) |

### LOW (3)

| ID | Page | Finding | Line(s) |
|----|------|---------|---------|
| VB-003-05 | OD-003 | Off-palette callout backgrounds (#FEF5F4, #F4FAF6, #FEF6F5) | 462, 464, 535 |
| VB-005-02 | OD-005 | Purple accent (#7C3AED) -- needs cross-OD confirmation | 239 |
| VB-005-04 | OD-005 | Wave indicator threshold at 1200px may be too aggressive | 1061 |

---

## 7. Cross-OD Pattern Observations

1. **rgba() is systemic across both files.** OD-003 has 4 instances; OD-005 has 5 instances. This is the same OD-AP-003 anti-pattern flagged as "found in EVERY wave" in the identity brief. The pattern persists despite prior remediation waves.

2. **Callout implementations diverge.** OD-003 uses `border: 2px solid` + `border-left` override (2px top/right/bottom). OD-005 uses only `border-left: var(--border-left-width) solid` (no top/right/bottom border). OD-005's approach is cleaner and more soul-compliant.

3. **Responsive strategy differs.** OD-003 has a single breakpoint at 640px. OD-005 has breakpoints at 768px and 1200px. The 768px breakpoint in OD-005 is better for tablet viewports.

4. **Both files load fonts correctly** via Google Fonts preconnect with the correct trio (Instrument Serif, Inter, JetBrains Mono).

---

## Note on Audit Method

Playwright browser was unavailable due to Chrome session contention from concurrent audit agents (known issue documented in MEMORY.md -- "Some Playwright contention still occurs"). All findings in this report are derived from direct source code analysis. This method is actually more precise for CSS property checking (catches every declaration, not just computed values) but cannot verify:
- Actual rendered font at runtime (must await `document.fonts.ready`)
- Visual spacing proportions as perceived by a human reviewer
- Scroll animation behavior and timing
- Actual viewport layout at specific pixel widths

Recommend systematic-b agent cross-validates these findings programmatically via DOM inspection when Playwright becomes available.
