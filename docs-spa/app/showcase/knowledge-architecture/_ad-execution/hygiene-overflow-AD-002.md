# Hygiene Audit B: Overflow & Balance -- AD-002 F-Pattern

**Auditor:** Hygiene-Auditor-B
**Target:** `explorations/axis/AD-002-f-pattern.html`
**Gold Standard:** `explorations/organizational/OD-002-narrative.html`
**Date:** 2026-02-10
**Scope:** 12 dimensions of overflow, container boundary, and visual balance

---

## Dimension 1: Text Overflow

### FINDING B-001
- **Selector:** `.callout__label` (line 373-380)
- **Dimension:** 1 (Text Overflow)
- **Current State:** `font-size: 0.625rem` (10px) with `letter-spacing: 0.1em` and `text-transform: uppercase`. No `overflow` or `text-overflow` handling. The label is in a flex-free block context.
- **Expected State:** OD-002 callout labels use `font-size: var(--type-meta)` (0.75rem / 12px) with `letter-spacing: 0.08em`. AD-002 label is 20% smaller than OD gold standard.
- **Severity:** IMBALANCED
- **Note:** While no actual text overflow occurs (labels are short words like "Context", "Caution"), the 10px size is unusually small and deviates from OD-002 convention without stated rationale.

### FINDING B-002
- **Selector:** `p` elements globally (line 208-211)
- **Dimension:** 1 (Text Overflow)
- **Current State:** `max-width: 70ch` set globally. Specific overrides: `.act-zone--exposition p` has `max-width: 65ch`, `.essence-pullquote p` has `max-width: 55ch`. All paragraphs are width-constrained.
- **Expected State:** OD-002 uses `max-width: 65ch` on `.narrative-beat p` (line 499-501). Both files properly constrain text. AD-002's global 70ch with per-zone overrides is a valid approach.
- **Severity:** ACCEPTABLE

### FINDING B-003
- **Selector:** `.subtitle` within `header` (line 303-310)
- **Dimension:** 1 (Text Overflow)
- **Current State:** `max-width: 70ch` set, `line-height: 1.6`. Long subtitle text (3+ lines at typical viewport). No `overflow` or `text-overflow` property.
- **Expected State:** OD-002 `.exploration-hypothesis` also uses `max-width: 70ch` with `line-height: 1.7`. Comparable. No overflow risk.
- **Severity:** ACCEPTABLE

---

## Dimension 2: Container Boundary

### FINDING B-004
- **Selector:** `.act-zone` (line 538-543)
- **Dimension:** 2 (Container Boundary)
- **Current State:** `max-width: 860px; margin: 0 auto; width: 100%; padding: var(--space-12) var(--space-6)`. Content is centered and horizontally bounded.
- **Expected State:** OD-002 `.page-container` uses `max-width: 860px; margin: 0 auto; padding: 0 var(--space-6)`. Both files share the same 860px max-width. Consistent.
- **Severity:** ACCEPTABLE

### FINDING B-005
- **Selector:** `.breathing-zone` (line 607-612) vs `.breathing-zone__inner` (line 614-617)
- **Dimension:** 2 (Container Boundary)
- **Current State:** `.breathing-zone` is full-bleed (no max-width), has `border-top` and `border-bottom` 3px solid. Inner content constrained by `.breathing-zone__inner` at `max-width: 860px; margin: 0 auto`. The full-bleed background with inner constraint is architecturally sound.
- **Expected State:** OD-002 `.act-divider` (line 835-841) is simpler: `height: var(--space-12)` with `background: var(--color-zone-breathing)` and structural borders. It is a pure spacer with no inner content. AD-002's breathing zones contain pullquotes, making them content-bearing, which is an axis innovation rather than a defect.
- **Severity:** ACCEPTABLE

### FINDING B-006
- **Selector:** `header` (line 259-263) / `.header-inner` (line 265-269)
- **Dimension:** 2 (Container Boundary)
- **Current State:** `header` is full-bleed dark. `.header-inner` constrains to `max-width: 860px; margin: 0 auto; padding: var(--space-12) var(--space-6)`. Matches pattern.
- **Expected State:** OD-002 `.exploration-header` (line 299-303) uses `padding: var(--space-16) var(--space-8)`. OD-002 has more vertical padding (64px vs 48px) and slightly more horizontal padding (32px vs 24px). AD-002 header is slightly more compressed.
- **Severity:** IMBALANCED
- **Note:** AD-002 header padding is less generous than OD-002 gold standard. This is minor since the AD-002 header contains fewer meta elements.

---

## Dimension 3: Horizontal Scroll

### FINDING B-007
- **Selector:** `pre` code blocks (line 324-334)
- **Dimension:** 3 (Horizontal Scroll)
- **Current State:** `overflow-x: auto` is explicitly set on `pre` elements. This will produce a horizontal scrollbar if code lines exceed the container width.
- **Expected State:** OD-002 `.code-block` (line 619-630) also uses `overflow-x: auto`. Both handle long code lines identically.
- **Severity:** ACCEPTABLE

### FINDING B-008
- **Selector:** `.decision-matrix` (line 740-743) / `table` (line 413-417)
- **Dimension:** 3 (Horizontal Scroll)
- **Current State:** `.decision-matrix` has no `overflow-x` handling. The `table` has `width: 100%` and `border-collapse: collapse`. At narrow viewports, a 4-column table (Criterion, F-Pattern, Z-Pattern, Gutenberg) could force horizontal overflow on the page container since there is no overflow wrapper.
- **Expected State:** OD-002 `.decision-matrix` (line 684-687) explicitly sets `overflow-x: auto` on its wrapper div. AD-002 is missing this overflow safeguard.
- **Severity:** OVERFLOW
- **Note:** The decision matrix table at line 1259 has 4 columns with text content. At viewport widths below ~600px, this table will push beyond the `.act-zone` container and cause page-level horizontal scroll. OD-002 solved this with an `overflow-x: auto` wrapper. AD-002 lacks this.

### FINDING B-009
- **Selector:** `.two-col` grid (line 664-669)
- **Dimension:** 3 (Horizontal Scroll)
- **Current State:** `grid-template-columns: 1fr 1fr; gap: var(--space-8)`. Collapses to `1fr` at `max-width: 768px`. No overflow risk at any viewport.
- **Expected State:** OD-002 does not use a two-column grid (narrative single-column throughout). AD-002's responsive collapse is correctly implemented.
- **Severity:** ACCEPTABLE

---

## Dimension 4: Code Block Overflow

### FINDING B-010
- **Selector:** `pre` elements globally (line 324-334)
- **Dimension:** 4 (Code Block Overflow)
- **Current State:** `overflow-x: auto; padding: var(--space-6) var(--space-8)` (24px 32px). Background `#1A1A1A`, border `3px solid var(--color-border)`. Monospace code at `0.875rem`.
- **Expected State:** OD-002 `.code-block` uses identical sizing and overflow handling. Both are correct.
- **Severity:** ACCEPTABLE

### FINDING B-011
- **Selector:** All `<pre>` blocks in HTML body (lines 1155-1180, 1193-1214, 1240-1251, 1383-1395, 1518-1534)
- **Dimension:** 4 (Code Block Overflow)
- **Current State:** AD-002 has 5 code blocks. The longest lines (line 1162: `<span class="kw">border-left</span>...`) contain inline spans for syntax highlighting. The raw text content of code lines stays under ~60 characters. No individual line exceeds the container at 860px.
- **Expected State:** OD-002 code blocks use a different structure (line-number divs with `.code-block__line`). AD-002 uses raw `<pre><code>` with `<span>` highlighting. Both are valid. No overflow issue.
- **Severity:** ACCEPTABLE

---

## Dimension 5: Visual Weight Balance

### FINDING B-012
- **Selector:** `.act-zone--climax` (line 576-585) vs other act zones
- **Dimension:** 5 (Visual Weight Balance)
- **Current State:** Act III (Climax) contains: 3 code blocks, 1 decision matrix table, 2 callouts, and 6 content blocks. This is the densest section by a wide margin. Act I has: 2 content blocks and 1 callout. Act V has: 2 content blocks, 1 table, 1 code block, 1 callout.
- **Expected State:** OD-002 follows a similar CRESCENDO pattern with Act III being densest (2 code blocks + decision matrix + callout). The weight distribution is intentional per the CRESCENDO density arc.
- **Severity:** ACCEPTABLE
- **Note:** The visual weight balance follows the design intent. CRESCENDO requires Act III to be heaviest.

### FINDING B-013
- **Selector:** `.tension-meter` segments (line 690-706)
- **Dimension:** 5 (Visual Weight Balance)
- **Current State:** 5 square segments, `height: var(--space-2)` (8px), `flex: 1`. Filled segments use `--color-primary` (#E83025). The meter in Act IV shows 5/5 segments filled (line 1352-1358), while Act III shows 4/5 filled (line 1126-1131). Act IV having MORE tension than Act III contradicts the CRESCENDO arc where Act III is the peak.
- **Expected State:** OD-002 tension meter uses a continuous bar (`width: 95%` at climax, `55%` at falling). AD-002 uses discrete segments. The issue is that Act IV (Falling Action) shows 5/5 filled, which is MORE than Act III's 4/5. This visually communicates that Act IV is the peak, not Act III.
- **Severity:** BROKEN
- **Note:** The tension meter in Act IV (Falling Action) at line 1352-1358 shows all 5 segments filled. Act III (Climax) at line 1126-1131 shows only 4 of 5 filled. This inverts the CRESCENDO hierarchy -- the climax should be the maximum, not the falling action. OD-002's continuous bar correctly shows climax at 95% and falling at 55%.

---

## Dimension 6: Whitespace Dead Zones

### FINDING B-014
- **Selector:** Gap between `.f-pattern-layout` children (line 529-533)
- **Dimension:** 6 (Whitespace Dead Zones)
- **Current State:** `.f-pattern-layout` uses `gap: 0`. Sections are separated by `.breathing-zone` elements which add `padding: var(--space-12) var(--space-6)` (48px 24px) plus structural borders top/bottom.
- **Expected State:** OD-002 uses `.act-divider` with `height: var(--space-12)` (48px) plus `.essence-pullquote` with `margin: var(--space-16) 0` (64px). The breathing space between acts is comparable.
- **Severity:** ACCEPTABLE

### FINDING B-015
- **Selector:** Space between final `</section>` (Act V) and `</main>` (line 1551-1553)
- **Dimension:** 6 (Whitespace Dead Zones)
- **Current State:** Act V `.act-zone--denouement` has `padding-bottom: var(--space-16)` (64px). The `</main>` follows directly with no additional spacing or footer. The page ends with the Essence callout in Act V.
- **Expected State:** OD-002 has a `narrative-summary` section (line 1625-1653) followed by `</div></main>` with the `.page-container` providing `padding-bottom: var(--space-20)` (80px). OD-002 has more terminal breathing room.
- **Severity:** IMBALANCED
- **Note:** AD-002 has less bottom padding (64px via act zone) than OD-002 (80px via page-container). The page ends somewhat abruptly after the Essence callout. A small dead zone concern at the very bottom of the page.

---

## Dimension 7: Crowding Hotspots

### FINDING B-016
- **Selector:** Act III `.act-zone--climax` content sequence (lines 1122-1324)
- **Dimension:** 7 (Crowding Hotspots)
- **Current State:** Act III contains: h2 heading, content block (1 paragraph), content block (h3 + paragraph + full code block), content block (h3 + paragraph + full code block), amber callout, content block (h3 + paragraph + full code block), decision matrix table (6 rows x 4 columns), coral callout. Total ~200 lines of HTML content. Padding is `var(--space-8)` top/bottom (32px).
- **Expected State:** OD-002 Act III (line 1261-1489) contains comparable density but with slightly more vertical padding per `.act--climax .narrative-beat` using `margin-bottom: var(--space-6)` (24px). Both are intentionally dense per CRESCENDO.
- **Severity:** ACCEPTABLE
- **Note:** The crowding in Act III is by design (CRESCENDO peak). However, the reduced padding (32px vs the 48px in Act II) amplifies the density. This is intentional.

### FINDING B-017
- **Selector:** `.callout` in Act III -- two callouts close together (lines 1218-1228 and 1310-1322)
- **Dimension:** 7 (Crowding Hotspots)
- **Current State:** Two callouts in Act III (.callout--caution at line 1218, .callout--gotcha at line 1310) separated by approximately 80 lines of content including a full code block and decision matrix. They are adequately spaced.
- **Expected State:** OD-002 has max 1 callout per dense section in Act III (line 1360-1367). AD-002 has 2 callouts in Act III, but they are well-separated by substantial content between them.
- **Severity:** ACCEPTABLE

---

## Dimension 8: Z-index / Overlap

### FINDING B-018
- **Selector:** `.skip-link` (line 240-254)
- **Dimension:** 8 (Z-index / Overlap)
- **Current State:** `z-index: 1000; position: absolute; top: -100%`. Moves to `top: 0` on focus. No other z-index declarations exist in the entire stylesheet.
- **Expected State:** OD-002 `.skip-link` uses identical z-index pattern (line 240-255). Both files have exactly one z-index declaration (the skip link). No stacking conflicts possible.
- **Severity:** ACCEPTABLE

---

## Dimension 9: Image / Diagram Spacing

### FINDING B-019
- **Selector:** N/A (no images or diagrams)
- **Dimension:** 9 (Image / Diagram Spacing)
- **Current State:** AD-002 contains zero `<img>`, `<svg>`, `<figure>`, or diagram elements. The page is pure text, code, tables, and callouts.
- **Expected State:** OD-002 has an `.arc-visualization` diagram (line 371-440) with `.arc-diagram` bars. AD-002 lacks a visual diagram equivalent. This is a missed opportunity compared to OD-002 which opens with a CRESCENDO arc visualization.
- **Severity:** IMBALANCED
- **Note:** OD-002 opens with a bar-chart arc visualization showing the Freytag 5-beat model. AD-002 has no equivalent visual diagram. The tension meter segments partially serve this function but are far less informative than OD-002's full arc diagram.

---

## Dimension 10: Border Consistency

### FINDING B-020
- **Selector:** All border declarations across the file
- **Dimension:** 10 (Border Consistency)
- **Current State:** Three border categories are consistently applied:
  - **Cat 1 (3px structural):** `header border-bottom` (line 262), `pre border` (line 327), `.breathing-zone border-top/bottom` (line 610-611), `.act-zone h2 border-left` (line 625), `.decision-matrix border` (line 741), `.decision-matrix th border-bottom` (line 748), `.term-def border-bottom` (line 776), `th border-bottom` (line 427)
  - **Cat 2 (1px separator):** `.act-indicator border-bottom` (line 684), `td border-bottom` (line 435)
  - **Cat 3 (1px micro):** `.version-badge border` (line 291), `code:not(pre code) border` (line 358), `.tension-meter__segment border` (line 700)
- **Expected State:** OD-002 uses the same 3-category system. Border application is consistent and correct across AD-002. No stray 2px borders (anti-pattern avoided).
- **Severity:** ACCEPTABLE

### FINDING B-021
- **Selector:** `.callout` (line 365-370)
- **Dimension:** 10 (Border Consistency)
- **Current State:** `.callout` has `border-radius: 4px` at line 367.
- **Expected State:** Soul Piece #1 mandates `border-radius: 0` everywhere. The global reset at line 179-181 uses `*:where(:not(input, button, select)) { border-radius: 0; }` which SHOULD override this. However, the `.callout` declaration at line 367 explicitly sets `border-radius: 4px` with higher specificity than the `:where()` selector (`:where()` has zero specificity contribution). This means the callout WILL render with 4px rounded corners.
- **Severity:** BROKEN
- **Note:** `border-radius: 4px` on `.callout` at line 367 is a SOUL VIOLATION. The `:where()` reset has zero specificity, so the `.callout` class selector (specificity 0,1,0) overrides it. The callout renders with rounded corners. OD-002 callouts have no explicit border-radius, relying on the global reset. This must be fixed.

---

## Dimension 11: Font Rendering

### FINDING B-022
- **Selector:** `body` (line 186-194)
- **Dimension:** 11 (Font Rendering)
- **Current State:** `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`. Font smoothing is correctly applied.
- **Expected State:** OD-002 does NOT have explicit font smoothing declarations on `body`. AD-002 is MORE thorough in this regard.
- **Severity:** ACCEPTABLE

### FINDING B-023
- **Selector:** `h3` global (line 203-206) and `.act-zone h3` (line 631-637)
- **Dimension:** 11 (Font Rendering)
- **Current State:** Global `h3` sets `font-style: italic` (line 205). `.act-zone h3` re-declares `font-style: italic` (line 634). This is redundant but not harmful.
- **Expected State:** OD-002 does not have a global h3 italic rule; its subsection styling is contextual (`.narrative-beat__subtitle` uses uppercase sans-serif instead of italic serif). AD-002's italic h3 is an axis-specific choice, correctly implemented.
- **Severity:** ACCEPTABLE

### FINDING B-024
- **Selector:** Inline `code` elements (line 352-359)
- **Dimension:** 11 (Font Rendering)
- **Current State:** `font-size: 0.9em` for inline code. OD-002 inline code uses `font-size: var(--type-code)` (0.875rem). The `0.9em` is relative (inherits from parent) while `0.875rem` is absolute (root-relative). In body text at 1rem, `0.9em` = 14.4px and `0.875rem` = 14px. Near-identical rendering.
- **Expected State:** Minor deviation from OD-002 but functionally equivalent.
- **Severity:** ACCEPTABLE

---

## Dimension 12: Interactive Element Spacing

### FINDING B-025
- **Selector:** `.skip-link` (line 240-254)
- **Dimension:** 12 (Interactive Element Spacing)
- **Current State:** `padding: 8px 16px` when visible on focus. Adequate touch/click target.
- **Expected State:** OD-002 identical pattern. Correct.
- **Severity:** ACCEPTABLE

### FINDING B-026
- **Selector:** Links (`a` element, line 213-219)
- **Dimension:** 12 (Interactive Element Spacing)
- **Current State:** No explicit `padding` or `min-height` on links. Inline links rely on line-height (1.6) for vertical spacing. No links exist in the actual HTML body content of AD-002.
- **Expected State:** OD-002 has copy buttons (`.code-block__copy`) as interactive elements within code blocks. AD-002 has NO interactive elements beyond the skip link -- no copy buttons on code blocks, no expandable sections, no navigation links.
- **Severity:** IMBALANCED
- **Note:** AD-002 has zero copy buttons on its 5 code blocks. OD-002 has copy buttons on every code block. This is a functional regression -- users cannot easily copy code from AD-002.

---

## Summary

| Severity | Count | Finding IDs |
|----------|-------|-------------|
| BROKEN | 2 | B-013, B-021 |
| OVERFLOW | 1 | B-008 |
| IMBALANCED | 4 | B-001, B-006, B-015, B-019, B-026 |
| ACCEPTABLE | 17 | B-002, B-003, B-004, B-005, B-007, B-009, B-010, B-011, B-012, B-014, B-016, B-017, B-018, B-020, B-022, B-023, B-024, B-025 |

### Critical Issues (BROKEN)

1. **B-013: Tension meter inversion.** Act IV (Falling Action) shows 5/5 filled segments while Act III (Climax) shows only 4/5. This inverts the CRESCENDO peak. The climax must show maximum tension.

2. **B-021: Callout border-radius soul violation.** `.callout` at line 367 has `border-radius: 4px`, which overrides the `:where()` reset due to higher specificity. All callouts render with rounded corners, violating Soul Piece #1 (sharp edges everywhere).

### Overflow Issue

3. **B-008: Decision matrix table has no overflow wrapper.** The 4-column table at line 1259 lacks `overflow-x: auto` on its container, causing page-level horizontal scroll at narrow viewports. OD-002 solved this.

### Imbalance Issues

4. **B-001:** Callout label font-size (10px) is 20% smaller than OD-002 standard (12px).
5. **B-006:** Header padding less generous than OD-002 (48px/24px vs 64px/32px).
6. **B-015:** Page ends with 64px bottom padding vs OD-002's 80px -- slightly abrupt termination.
7. **B-019:** No visual arc diagram equivalent to OD-002's bar-chart CRESCENDO visualization.
8. **B-026:** No copy buttons on code blocks (OD-002 has them on every code block).

---

*Auditor-B complete. Information barrier maintained -- Auditor-A findings not consulted.*
