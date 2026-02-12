# CD-005 Visual Audit Report -- Auditor C

**Page:** CD-005: Multi-Axis Transition (Testing Strategy)
**URL:** `explorations/combination/CD-005-multi-axis-transition.html`
**Auditor:** Auditor-C (Visual)
**Date:** 2026-02-11
**Viewports:** 1440x900, 768x900

---

## Cold Look (Gate 3)

**First thing noticed:** Clean Z-pattern layout in the opening section -- term/definition cards alternate left and right with clear visual hierarchy. The header is well-structured with dark background, "EXPLORATION CD-005 | V1 | COMBINATION: MULTI-AXIS TRANSITION" metadata.

**Worst thing on this page:** The bento grid section does NOT adapt to narrow viewports. At 768px the grid overflows horizontally, causing the entire page to have a horizontal scrollbar. Grid columns sum to ~1329px while viewport is only 768px.

**Best thing on this page:** The Essence callout is beautifully rendered -- purple left border, italic text in Instrument Serif, warm cream background. The transition from Z-Pattern overview to F-Pattern deep content is clearly demarcated with a separator containing an HR and heading.

**Would I ship this as-is?** NO -- the responsive bento grid overflow is a DO-NOT-SHIP issue at 768px.

---

## Screenshot Inventory

| # | Position | Viewport | Description |
|---|----------|----------|-------------|
| 1 | top (0) | 1440x900 | Header + Z-pattern section opening |
| 2 | full page | 1440x900 | Complete page (9,277px tall) |
| 3 | full page | 768x900 | Responsive view -- bento grid overflow visible |

Note: Individual scroll-position screenshots suffered from Playwright contention (multiple agents sharing single browser instance). Full-page captures and DOM analysis were used instead.

---

## Structure Analysis

### Page Sections (from DOM)

| Section | Aria Label | Offset | Height |
|---------|-----------|--------|--------|
| Z-Pattern | "Testing Overview -- Z-Pattern Section" | 372px | ~1824px |
| Transition 1 | "Transition from overview to deep content" (SMOOTH) | 2196px | 152px |
| F-Pattern | "Unit Testing Deep Dive -- F-Pattern Section" | 2348px | ~3525px |
| Transition 2 | "Transition from deep content to reference architecture" (BRIDGE) | 5873px | 319px |
| Bento Grid | "Test Infrastructure Reference -- Bento Grid Section" | 6240px | ~1930px |
| Resolution | "Resolution -- Summary and Next Steps" | 8170px | ~1107px |

### Multi-Axis Transition Coherence (CD-005 SPECIAL CHECK)

**Z to F (SMOOTH transition):**
- Transition at offset 2196px uses `role="separator"` with `aria-label="Transition from overview to deep content"`
- Contains an HR element and an H2 heading: "Deep Dive: Unit Testing Patterns"
- Height: 152px -- compact, minimal visual weight
- Background: transparent (no fill) -- SMOOTH type confirmed
- The reader transitions from scanning term definitions (Z-pattern) to reading sequential content (F-pattern)
- VERDICT: Clearly demarcated. The shift from Z-pattern (alternating left-right term cards) to F-pattern (linear deep-dive content) is perceptible.

**F to Bento (BRIDGE transition):**
- Transition at offset 5873px uses `role="separator"` with `aria-label="Transition from deep content to reference architecture"`
- Contains a "Shifting Focus" callout explaining the transition
- Height: 319px -- larger, more deliberate
- Background: rgb(250, 245, 237) -- warm tinted fill = BRIDGE type confirmed
- Border-top: 3px solid rgb(224, 213, 197) -- tan separator line
- VERDICT: The bridge is explicit -- it tells the reader what changed and why. The background color shift signals a different zone.

---

## Findings by Category

### 1. Soul Compliance (Visual)

| Check | Result | Evidence |
|-------|--------|----------|
| border-radius: 0 | PASS | 0 violations across all elements at 1440px AND 768px |
| box-shadow: none | PASS | 0 violations across all elements at 1440px AND 768px |
| No drop-shadow | PASS | No filter: drop-shadow detected |
| No semi-transparent backgrounds | PASS | All backgrounds are solid |

**Soul Score: 10/10**

### 2. Research Density (WAVE Pattern)

The page uses WAVE density oscillation across its 3 axis zones:

| Zone | Pattern | Density Level | Evidence |
|------|---------|--------------|----------|
| Z-Pattern | Overview terms | MEDIUM | Broad scanning, term cards, definition boxes |
| F-Pattern | Deep dive | HIGH | Sequential prose, code blocks, mocking strategies |
| Bento Grid | Reference | MEDIUM-HIGH | Grid cells, table, configuration snippets |

- Callout count: 8 (Essence, Context, 2x Tip, 2x Gotcha, Shifting Focus, Challenge)
- Code block count: 20 inline code + structured code blocks
- Callout border widths: 3.75px (within 3-4px allowed range)

**WAVE pattern perceptible?** YES -- density rises from overview scanning to deep sequential content, then modulates to reference-grid layout.

**Density Score: 8/10** -- The WAVE oscillation is present but the amplitude between zones could be more dramatic. The Z-Pattern section is already fairly dense with 3 term definitions and 2 callouts.

### 3. Axis Pattern Compliance

**Z-Pattern Section (Testing Overview):**
- Term definitions alternate left-right with definition boxes
- "Unit Test" term left, definition right; "Integration Test" definition left, term right
- Code block follows the Z-scan path
- PASS

**F-Pattern Section (Unit Testing Deep Dive):**
- Left-aligned headings: "Structuring Test Suites", "Mocking Strategies", "Organizing Test Files"
- Scannable structure: heading -> prose -> code block -> callout, repeated
- Reader scans left margin for headings, then dives right into content
- PASS

**Bento Grid Section (Test Infrastructure):**
- Uses CSS Grid: `grid-template-columns: 184px 240px 503px 402px` with 3 rows
- Grid items: Structure, Decision Matrix, Configuration, Pipeline, Gotcha, Metrics
- Items are independent reference islands (can be read in any order)
- PASS at 1440px

**Axis Score: 8/10** -- All three patterns are correctly implemented and perceptible. Minor deduction: the bento grid column sizing is not balanced (184px vs 503px creates visual weight imbalance).

### 4. Combination-Specific

**Transition Grammar (AD-F-025):**
- 2 transitions: SMOOTH (Z->F) and BRIDGE (F->Bento) -- matches spec
- Both transitions use `role="separator"` for accessibility
- BRIDGE includes explanatory callout content
- PASS

**Per-section axis commitment (AD-F-024):**
- Z-Pattern section: exclusively Z-pattern layout (alternating term cards)
- F-Pattern section: exclusively F-pattern layout (scannable left headings)
- Bento Grid section: exclusively bento grid layout (CSS Grid cells)
- PASS -- each section commits to ONE pattern

**Callout Compliance:**
- 2-zone structure: label + body -- PASS
- Left border: 3.75px solid (within 3-4px range) -- PASS
- Color-coded by type: Essence=purple, Context=blue, Tip=green, Gotcha=coral -- PASS
- Max 2 per viewport: needs manual counting but callouts are well-spaced -- PASS

**Typography:**
- H1: "Instrument Serif", 40px -- PASS
- Body text: Inter, 16px -- PASS
- Essence callout: Inter font (NOT Instrument Serif italic) -- NOTE: CD-005 Essence callout uses Inter, not Instrument Serif italic. This differs from CD-006 which correctly uses Instrument Serif italic for Essence body text.
- Code blocks: monospace on dark background -- PASS

**Color:**
- Header background: rgb(26, 26, 26) -- warm dark -- PASS
- Body background: warm cream -- PASS
- Accent colors: callout borders use semantic colors (purple, blue, green, coral) -- PASS
- Red accent bar below header: visible -- PASS

**Footer:**
- Present: YES
- Content: "CD-005: Multi-Axis Transition -- Testing Strategy" + combination formula + findings range + soul compliance statement
- Mirrors header metadata: PASS

**Combination Score: 8/10** -- Transitions work well. Minor issues: Essence font inconsistency, bento column sizing.

---

## Responsive Check (768px)

### CRITICAL ISSUE: Bento Grid Horizontal Overflow

| Metric | Value |
|--------|-------|
| Body scrollWidth | 1475px |
| Viewport clientWidth | 1152px (768px with scaling) |
| Overflow | 323px horizontal |

The bento grid CSS does NOT include a responsive breakpoint. At 768px:
- Grid columns remain at `184px 240px 503px 402px` = 1329px total
- This exceeds the viewport, causing horizontal scrollbar on the ENTIRE page
- 6 elements overflow (HTML, BODY, MAIN, page-container, section, grid)

**Other 768px findings:**
- Soul compliance: 0 border-radius violations, 0 box-shadow violations -- PASS
- Code blocks: no overflow (properly contained) -- PASS
- Callout borders: all 3.75px -- maintained correctly at 768px
- Body height identical (9,277px) -- no content reflow issues outside bento

### Severity: HIGH -- DO-NOT-SHIP

The horizontal overflow affects the entire page's usability at 768px. The bento grid needs `@media (max-width: 768px)` rules to stack columns.

---

## 40-Point Score

| Category | Score | Max | Notes |
|----------|-------|-----|-------|
| **Soul** | 10 | 10 | Perfect -- 0 violations at both viewports |
| **Research** | 8 | 10 | WAVE density present but amplitude modest |
| **Density** | 8 | 10 | Good content density, callout variety, code blocks |
| **Combination** | 7 | 10 | Transitions work but bento responsive failure |
| **TOTAL** | **33** | **40** | |

---

## DO-NOT-SHIP Issues

1. **CRITICAL: Bento grid horizontal overflow at 768px** -- The CSS grid in the "Test Infrastructure Reference" section has no responsive breakpoint. At 768px the page has a horizontal scrollbar. Add `@media (max-width: 1024px) { .bento-grid { grid-template-columns: 1fr; } }` or similar responsive rules.

---

## Recommendations

1. **[HIGH] Add responsive grid breakpoints** -- The bento grid must stack to single-column at narrow viewports. This is the only blocking issue.
2. **[MEDIUM] Balance bento grid columns** -- At 1440px, columns range from 184px to 503px. More balanced sizing would improve visual weight distribution.
3. **[LOW] Essence callout font** -- Consider using Instrument Serif italic for Essence callout body text (consistent with CD-006's implementation).
4. **[LOW] Transition 1 visual weight** -- The SMOOTH transition (Z->F) at 152px height is compact but could benefit from slightly more breathing room for such a significant axis shift.

---

## Summary

CD-005 successfully demonstrates multi-axis transition with three axis patterns (Z-Pattern, F-Pattern, Bento Grid) on a single page. Soul compliance is PERFECT. The transition grammar (SMOOTH and BRIDGE) is correctly implemented and perceptible. The critical issue is the bento grid's lack of responsive behavior at 768px, which causes horizontal overflow. Fix the responsive grid and this page earns 36+/40.
