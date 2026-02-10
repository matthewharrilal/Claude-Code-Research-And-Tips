# Hygiene Audit — Overflow & Balance: AD-001 Z-Pattern

**Auditor:** Hygiene-Auditor-B
**Target:** `explorations/axis/AD-001-z-pattern.html`
**Gold Standard:** `explorations/organizational/OD-001-conversational.html`
**Date:** 2026-02-10
**Scope:** 12 dimensions of overflow, boundary, and balance

---

## Dimension 1: Text Overflow

FINDING: `.z-question` — line ~646-651
DIMENSION: 1
CURRENT STATE: `max-width: 60%` on `.z-question` with no `overflow-wrap`, `word-wrap`, or `word-break` property. Text inside `.z-question__text` uses `font-size: var(--type-subsection)` (1.375rem / 22px) at `font-weight: 600`. Long unbreakable strings (e.g., URLs, long technical identifiers) have no wrapping mechanism.
EXPECTED STATE: `overflow-wrap: break-word` or `word-break: break-word` on `.z-question__text` to prevent horizontal overflow from the 60%-width container. OD-001 gold standard also lacks explicit `overflow-wrap` on `.question__text`, but has a wider effective width due to `max-width: 65ch` on answer content.
SEVERITY: OVERFLOW

FINDING: `p` tag — line ~278-281
DIMENSION: 1
CURRENT STATE: `p { max-width: 70ch; }` is set globally. This provides good text containment for most body paragraphs. However, paragraphs inside `.z-hero__primary`, `.z-hero__secondary`, `.z-hero__diagonal`, `.z-hero__terminal` inherit this `max-width: 70ch` while the grid cells themselves may be narrower than 70ch, making the `max-width` effectively inert in those contexts. No actual overflow occurs because the parent grid cell constrains the content — this is acceptable.
EXPECTED STATE: Current state is functional. The `max-width: 70ch` acts as a safety net.
SEVERITY: ACCEPTABLE

FINDING: Inline `<code>` inside paragraphs — line ~423-429
DIMENSION: 1
CURRENT STATE: `code:not(pre code)` has `padding: 2px 6px` and `font-size: 0.9em`. Inline code inside the 60%-width `.z-question` could overflow if the code string is long. No `overflow-wrap` on inline code.
EXPECTED STATE: Inline code in narrow containers should have `overflow-wrap: break-word` as a safety measure. OD-001 handles this identically (no explicit break-word on inline code), so this is a shared concern.
SEVERITY: ACCEPTABLE (low probability — most inline code is short)

---

## Dimension 2: Container Boundary

FINDING: `.z-hero` grid — line ~584-594
DIMENSION: 2
CURRENT STATE: `display: grid` with `grid-template-columns: 1.618fr 1fr` and `grid-template-rows: 1.618fr 1fr`. No explicit `overflow: hidden` or `overflow: clip` on the grid container. The grid has `min-height: 320px` and `gap: var(--space-8)` (32px). Child cells use `padding: var(--space-8)` (32px) and `border: 3px solid`. Content is flex-aligned vertically. No overflow risk from the grid structure itself.
EXPECTED STATE: Grid containers with `fr` units auto-constrain children. No `overflow` setting needed unless content is dynamic. Current state is correct.
SEVERITY: ACCEPTABLE

FINDING: `.z-answer` — line ~674-678
DIMENSION: 2
CURRENT STATE: `background: var(--color-zone-dense)` with `padding: var(--space-8)` (32px) and `border: 3px solid var(--color-border)`. No explicit `max-width` — the element is full-width within `.page-container` (860px). Content uses `<p>` with `max-width: 70ch` and `<pre>` with `overflow-x: auto`. Container boundary is respected.
EXPECTED STATE: Full-width answer within 860px container is correct per OD-001 pattern (`.answer { width: var(--answer-width); }` where `--answer-width: 100%`).
SEVERITY: ACCEPTABLE

---

## Dimension 3: Horizontal Scroll

FINDING: `.z-hero` grid at viewport ~768px — line ~813-845
DIMENSION: 3
CURRENT STATE: At 768px breakpoint, `.z-hero` collapses to `grid-template-columns: 1fr` with `grid-template-rows: auto`. This eliminates the 2-column layout. Between 768px and ~920px (860px + padding), the 2-column grid with `1.618fr 1fr` columns still applies. At 860px viewport, the `page-container` max-width (860px) plus padding (24px each side) = 908px total, which exceeds 860px viewport. The `page-container` uses `padding: var(--space-12) var(--space-6)` (48px top/bottom, 24px left/right), and the body has no explicit `overflow-x: hidden`.
EXPECTED STATE: No horizontal scroll should occur at any standard viewport. The `page-container` `max-width: 860px` with `margin: 0 auto` should prevent issues, but at exactly 860px viewport width, the 24px side padding means content area = 812px. The `1.618fr 1fr` grid within 812px = ~502px + ~310px, which fits. No horizontal scroll expected.
SEVERITY: ACCEPTABLE

FINDING: `.micro-z` grid — line ~692-701
DIMENSION: 3
CURRENT STATE: `grid-template-columns: 1fr 1fr` (50/50 split). At 768px, collapses to `1fr`. Between 768px and ~860px, each column is ~400px wide. `<pre>` blocks inside have `overflow-x: auto`, preventing code from causing horizontal page scroll. Correct.
EXPECTED STATE: `overflow-x: auto` on `<pre>` is the standard approach. OD-001 uses identical pattern (`.code-block { overflow-x: auto; }`).
SEVERITY: ACCEPTABLE

FINDING: `<table>` elements — multiple instances (lines ~1012, ~1221, ~1318, ~1469, ~1556)
DIMENSION: 3
CURRENT STATE: `table { width: 100%; border-collapse: collapse; }` — tables are full-width within their container. 4-column tables inside `.z-answer` (padded 32px each side) have effective width ~796px. Long cell content could cause horizontal scroll. No `overflow-x: auto` wrapper around tables. OD-001 uses `.decision-matrix { overflow-x: auto; }` on its table wrapper.
EXPECTED STATE: Tables should be wrapped in a container with `overflow-x: auto` to prevent page-level horizontal scroll on narrow viewports. AD-001 is MISSING this wrapper, while OD-001 has it.
SEVERITY: OVERFLOW

---

## Dimension 4: Code Block Overflow

FINDING: `<pre>` blocks — line ~394-404
DIMENSION: 4
CURRENT STATE: `pre { overflow-x: auto; }` is explicitly set in the locked layer. Code blocks will show a horizontal scrollbar when content exceeds the container width. This is correct.
EXPECTED STATE: `overflow-x: auto` is the standard. OD-001 also uses `overflow-x: auto` on `.code-block`.
SEVERITY: ACCEPTABLE

FINDING: `<pre>` inside `.micro-z` — line ~729-731
DIMENSION: 4
CURRENT STATE: `.micro-z pre { margin-bottom: 0; }` overrides margin but does not affect overflow. `<pre>` blocks in the micro-Z grid are constrained to 50% of page width (~400px at 860px). Long code lines inside will trigger `overflow-x: auto` scrollbar within the `<pre>`. Correct behavior.
EXPECTED STATE: Current state is acceptable. Each code block scrolls independently.
SEVERITY: ACCEPTABLE

---

## Dimension 5: Visual Weight Balance

FINDING: `.z-question` at 60% width vs `.z-answer` at 100% — lines ~646-678
DIMENSION: 5
CURRENT STATE: Questions occupy 60% left-aligned, answers occupy 100%. This creates intentional left-side visual weight on questions, which is the core Z-pattern TIDAL mechanism. The asymmetry is deliberate and documented (OD-F-001). Each Z-cycle reads: narrow sparse (left) then wide dense (full-width). The page leans left at question blocks and re-centers at answers.
EXPECTED STATE: This is the designed behavior. OD-001 uses the same 60%/100% split (via `--question-width: 60%` and `--answer-width: 100%`). The weight distribution is balanced across the page through alternation.
SEVERITY: ACCEPTABLE

FINDING: `.z-hero` 4-quadrant grid — lines ~584-636
DIMENSION: 5
CURRENT STATE: `grid-template-columns: 1.618fr 1fr` creates a 62%/38% split. The left column is visually heavier. Top-left (`.z-hero__primary`) has the most content (heading + paragraph). Bottom-right (`.z-hero__terminal`) has less content but is `text-align: right`, which visually balances by pulling weight to the right. The diagonal cross-axis provides balance. Good compositional balance per Z-pattern theory.
EXPECTED STATE: Intentional asymmetry per golden ratio (EXT-AXIS-Z-001). This is not imbalance — it is designed hierarchy.
SEVERITY: ACCEPTABLE

---

## Dimension 6: Whitespace Dead Zones

FINDING: `.z-hero__diagonal` (bottom-left quadrant) — lines ~616-624
DIMENSION: 6
CURRENT STATE: Contains only 4 lines of mono text metadata. With `padding: var(--space-8)` (32px) and `min-height` inherited from the `1fr` row, this cell could feel empty. The grid row is `1fr` (38% of 320px min-height = ~122px). With 4 lines of small mono text (~60px), there is ~30px of excess vertical space even with padding. However, this is the "Weak Fallow" area per Gutenberg Diagram (R4-016) — metadata IS supposed to have low visual weight here.
EXPECTED STATE: The dead zone is DESIGNED. R4-016 explicitly states "no important content in weak fallow." The sparse metadata in this cell is correct. OD-001 does not have a comparable 4-quadrant hero, so this is a novel AD element.
SEVERITY: ACCEPTABLE

FINDING: `.chapter-divider` — lines ~735-741
DIMENSION: 6
CURRENT STATE: `height: var(--space-12)` (48px) with `background: var(--color-zone-breathing)` and `margin: var(--space-chapter) 0` (64px each side). Total vertical whitespace per divider: 48px + 64px + 64px = 176px. This is a large breathing zone. OD-001's `.conversation-chapter` uses `margin-top: var(--space-chapter)` (64px) + `padding: var(--space-6) 0` (24px) + `margin-bottom: var(--space-between)` (32px) = 120px total. AD-001 has ~47% MORE whitespace at dividers than OD-001.
EXPECTED STATE: AD-001's chapter dividers create MORE dead space than OD-001. The `chapter-divider` element is purely decorative (no text content, unlike OD-001 which has chapter label + title + progress dots). Three dividers appear in the page, contributing ~528px of whitespace. This is borderline excessive compared to the gold standard.
SEVERITY: IMBALANCED

---

## Dimension 7: Crowding Hotspots

FINDING: `.z-question` padding vs content — lines ~646-670
DIMENSION: 7
CURRENT STATE: `.z-question` has `padding: var(--space-6) var(--space-8)` (24px 32px). Inside: `.z-question__label` (meta text, margin-bottom 8px) + `.z-question__text` (22px subsection text). Two elements with 8px gap inside 24px vertical padding. Not crowded.
EXPECTED STATE: OD-001's `.question` has `padding: var(--space-4) var(--space-4) var(--space-4) var(--q-indent)` (16px 16px 16px 32px) — actually TIGHTER than AD-001. AD-001 has MORE breathing room inside questions.
SEVERITY: ACCEPTABLE

FINDING: `.micro-z` grid cells — lines ~692-727
DIMENSION: 7
CURRENT STATE: `gap: var(--space-4)` (16px) between 4 grid cells. Each cell has `padding: var(--space-4)` (16px) for explanation cells. Code cells (`<pre>`) have `padding: var(--space-6) var(--space-8)` (24px 32px). Two `<pre>` blocks + two explanation boxes in a 2x2 grid. The 16px gap between code and explanation is adequate but tight. At narrow viewports (768-900px), the 50% columns give ~400px each, and code blocks + explanation blocks + padding can feel dense.
EXPECTED STATE: 16px gap is the minimum professional spacing for adjacent elements. OD-001 does not use a comparable micro-grid. The spacing is tight but functional.
SEVERITY: ACCEPTABLE

---

## Dimension 8: Z-index / Overlap

FINDING: `.skip-link` — lines ~310-324
DIMENSION: 8
CURRENT STATE: `z-index: 1000` on skip link, `position: absolute`, `top: -100%` (hidden). On focus, `top: 0`. This is standard accessibility pattern, no overlap issue.
EXPECTED STATE: Correct.
SEVERITY: ACCEPTABLE

FINDING: No positioned overlapping elements
DIMENSION: 8
CURRENT STATE: AD-001 does NOT use `::after` pseudo-elements for solid offsets (unlike OD-001 which has `::after` with `z-index: -1` on pattern-visualization, code-block, callout--essence, and conversation-summary). AD-001 has NO solid offset effects at all. No `position: relative` + `position: absolute` child patterns in the body content. Only the skip-link uses absolute positioning.
EXPECTED STATE: No z-index conflicts exist. This is simpler than OD-001's approach. OD-001's `::after { z-index: -1 }` pseudo-elements could clip behind parent backgrounds — a known concern. AD-001 avoids this entirely.
SEVERITY: ACCEPTABLE

---

## Dimension 9: Image/Diagram Spacing

FINDING: No images or SVGs present
DIMENSION: 9
CURRENT STATE: AD-001 contains ZERO `<img>`, `<svg>`, or `<figure>` elements. All content is text, tables, and code blocks. The only visual element is the `.z-hero` grid, which uses CSS grid areas (not images).
EXPECTED STATE: OD-001 also has no images (except the SVG favicon data URI). Both files are text-only demonstrations. No spacing concern.
SEVERITY: ACCEPTABLE

---

## Dimension 10: Border Consistency

FINDING: Structural borders (Cat 1) — multiple locations
DIMENSION: 10
CURRENT STATE: Cat 1 structural borders at 3px:
- `header { border-bottom: 3px solid var(--color-primary); }` (line ~332)
- `.z-hero__primary/secondary/diagonal/terminal { border: 3px solid var(--color-border); }` (lines ~600, 610, 620, 630)
- `pre { border: 3px solid var(--color-border); }` (line ~397)
- `.z-answer { border: 3px solid var(--color-border); }` (line ~677)
- `.chapter-divider { border-top/bottom: 3px solid var(--color-border); }` (lines ~738-739)
- `th { border-bottom: 3px solid var(--color-border); }` (line ~496)
- `.section-title { border-bottom: 3px solid var(--color-border); }` (line ~795)
- `.z-terminal-cta a { border-bottom: 3px solid var(--color-primary); }` (line ~784)

Cat 2 separator borders at 1px-2px:
- `td { border-bottom: 2px solid var(--color-border-subtle); }` (line ~504) — **NOTE: 2px**
- `.running-header { border-bottom: 1px solid var(--color-border-subtle); }` (line ~807)

Cat 3 micro borders at 1px:
- `.version-badge { border: 1px solid var(--color-text-secondary); }` (line ~361)
- `code:not(pre code) { border: 1px solid var(--color-border); }` (line ~428)
EXPECTED STATE: OD-001 uses the 3-category border system with Cat 1 at 3px and Cat 2 at 1px. AD-001's `td { border-bottom: 2px }` at line 504 uses 2px, which is BANNED per OD-F-AP-001 ("zero 2px structural borders"). This should be 1px (Cat 2 data separator).
SEVERITY: BROKEN

FINDING: `.z-question` border-left — line ~650
DIMENSION: 10
CURRENT STATE: `border-left: var(--border-left-width) solid var(--color-primary)` which resolves to `4px`. This is the standardized callout/accent border width, consistent with the callout system.
EXPECTED STATE: 4px left accent borders are the standard. OD-001 uses `border-left: var(--border-left-width) solid var(--color-border)` on `.answer` — same token, different color. Consistent.
SEVERITY: ACCEPTABLE

---

## Dimension 11: Font Rendering

FINDING: `body { font-size: var(--type-body); }` — line ~258
DIMENSION: 11
CURRENT STATE: `--type-body: 1rem` (16px). Body text uses Inter at 16px, line-height 1.6. OD-001 uses `line-height: 1.7` on body. AD-001's 1.6 line-height is slightly tighter.
EXPECTED STATE: Both 1.6 and 1.7 are acceptable body line-heights. The AD-CONVENTION-SPEC may specify 1.6 for the axis layer. Minor difference, not a defect.
SEVERITY: ACCEPTABLE

FINDING: `.callout__label { font-size: 0.625rem; }` — line ~444
DIMENSION: 11
CURRENT STATE: `0.625rem` = 10px. OD-001's callout labels use `font-size: 12px` (set by `.callout .callout__label` override at line ~810-816). AD-001's 10px callout labels are SMALLER than OD-001's 12px. The `--type-meta` token is `0.75rem` (12px), but AD-001 uses `0.625rem` (10px) instead of the token.
EXPECTED STATE: Callout labels should use `var(--type-meta)` (12px) per the type scale. Using a hardcoded `0.625rem` (10px) deviates from the locked type scale. OD-001's `12px` is correct.
SEVERITY: IMBALANCED

FINDING: `.callout--amber` class referenced but not defined — line ~1619
DIMENSION: 11
CURRENT STATE: HTML at line ~1619 uses `class="callout callout--amber"` but CSS only defines `callout--note`, `callout--tip`, `callout--gotcha`, `callout--caution`, and `callout--essence`. There is NO `.callout--amber` class. The callout will render with the DEFAULT blue border-left (from `.callout { border-left: 4px solid var(--accent-blue); }`), not amber.
EXPECTED STATE: Either define `.callout--amber` in CSS or change the class to `callout--caution` (which uses `--accent-amber`). The `callout--caution` variant already exists and maps to amber.
SEVERITY: BROKEN

---

## Dimension 12: Interactive Element Spacing

FINDING: `.z-terminal-cta a` links — lines ~770-787
DIMENSION: 12
CURRENT STATE: Terminal CTA links are right-aligned (`justify-content: flex-end`) with `padding: var(--space-4) 0` (16px top/bottom). Only ONE link per CTA container. No spacing conflict between multiple interactive elements.
EXPECTED STATE: Single links in their own container are always fine. No touch-target adjacency issue.
SEVERITY: ACCEPTABLE

FINDING: `#gutenberg-mapping` and `#velocity-control` anchor targets — lines ~997, ~1287
DIMENSION: 12
CURRENT STATE: In-page anchor links (`href="#gutenberg-mapping"`, `href="#velocity-control"`, `href="#implementation-checklist"`). Three CTA links spaced across different sections. No clustering.
EXPECTED STATE: Links are well-spaced across the page. No adjacent clickable elements that could cause misclicks on touch devices.
SEVERITY: ACCEPTABLE

FINDING: Skip link touch target — line ~310-324
DIMENSION: 12
CURRENT STATE: `padding: 8px 16px` gives a touch target of approximately 34px tall (14px font + 16px padding). Below the 44px minimum recommended by WCAG 2.5.8. OD-001 uses identical dimensions (`padding: 8px 16px`).
EXPECTED STATE: Skip link should have minimum 44px touch target height. Both AD-001 and OD-001 share this minor accessibility concern. Since skip-link is only visible on keyboard focus, this is a low-impact issue.
SEVERITY: ACCEPTABLE

---

## Summary

| Dimension | Findings | Worst Severity |
|-----------|----------|----------------|
| 1. Text overflow | 3 | OVERFLOW |
| 2. Container boundary | 2 | ACCEPTABLE |
| 3. Horizontal scroll | 3 | OVERFLOW |
| 4. Code block overflow | 2 | ACCEPTABLE |
| 5. Visual weight balance | 2 | ACCEPTABLE |
| 6. Whitespace dead zones | 2 | IMBALANCED |
| 7. Crowding hotspots | 2 | ACCEPTABLE |
| 8. Z-index / overlap | 2 | ACCEPTABLE |
| 9. Image/diagram spacing | 1 | ACCEPTABLE |
| 10. Border consistency | 2 | BROKEN |
| 11. Font rendering | 3 | BROKEN |
| 12. Interactive element spacing | 3 | ACCEPTABLE |
| **TOTAL** | **27** | **2 BROKEN, 2 OVERFLOW, 1 IMBALANCED** |

### Critical Findings (BROKEN)

1. **`td` border-bottom uses 2px** (Dim 10, line ~504): The 3-category border system bans 2px. Data separator borders should be 1px. This violates OD-F-AP-001.

2. **`.callout--amber` class undefined** (Dim 11, line ~1619): HTML references `callout--amber` but no CSS rule defines it. Should be `callout--caution` (which maps to `--accent-amber`).

### Significant Findings (OVERFLOW)

3. **`.z-question` has no `overflow-wrap`** (Dim 1, line ~646-651): Long unbreakable text in the 60%-width question container could cause horizontal protrusion. Needs `overflow-wrap: break-word`.

4. **Tables lack `overflow-x: auto` wrapper** (Dim 3, multiple locations): Five `<table>` elements have no overflow wrapper. OD-001 wraps tables in `.decision-matrix { overflow-x: auto; }`. AD-001 tables could cause page-level horizontal scroll on narrow viewports.

### Minor Findings (IMBALANCED)

5. **Chapter dividers have 47% more whitespace than OD-001** (Dim 6): AD-001's `chapter-divider` produces ~176px total whitespace per instance vs OD-001's ~120px. Three dividers contribute ~528px vs OD-001's ~360px. Content-less dividers feel emptier than OD-001's content-bearing chapter sections.

6. **Callout labels use 10px instead of 12px** (Dim 11, line ~444): `.callout__label` uses hardcoded `0.625rem` (10px) instead of `var(--type-meta)` (12px). OD-001 uses 12px. This is a type-scale deviation.
