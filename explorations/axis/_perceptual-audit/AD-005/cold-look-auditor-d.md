# Cold Look — Auditor D (Hierarchy + Coherence) — Round 2
## AD-005: Choreography
**Viewports examined:** 1440px, 768px, 1024px (via accessibility snapshot)
**Method:** React first, then analyze. No source code consulted.

---

## 3-Second Impression (1440px)

Dark header band with cream title in large ornate serif. Red accent rule below header. Then a clean hub grid of territory cards — one featured (larger, vivid red left border), six standard cards in a 3-top + 4-bottom layout. Below: a diagonal transition zone labeled "AXIS DIRECTION CHANGE / Descending into Detail." The page breathes. Feels like a well-organized magazine table of contents leading into feature articles.

## 3-Second Impression (768px)

Same header DNA, narrower. Cards collapse to single-column stack. Featured territory card is full-width with red left border. All other cards stack vertically. The progress bar (colored segments) is still visible above the card grid. The hub overview still reads as an establishing shot despite the column collapse. The page is noticeably taller but maintains its rhythm.

## 3-Second Impression (1024px — from snapshot data)

Between desktop and mobile behavior. The header, hub grid, spoke sections, and synthesis all render correctly based on accessibility tree analysis. Content hierarchy matches the 1440px experience.

---

## Scroll-Through Notes (1440px)

1. **Header to Hub:** Clean transition. Dark header, red horizontal rule, then warm cream with "The Hub: Establishing Shot" heading. Blue-bordered callout labeled "ESTABLISHING SHOT." Progress indicator bar (red segment + gray segments). Territory card grid.

2. **Hub to Spoke 1:** Diagonal transition zone with label "AXIS DIRECTION CHANGE / Descending into Detail." Below: breadcrumb navigation (Hub > CSS Transition Choreography), progress bar, then dense spoke content with tables and code blocks.

3. **Spoke 1 (CSS Transitions):** Tables, dark code blocks with syntax highlighting, callout boxes (Caution in amber, Essence in purple italic). Dense and well-structured. Multiple sub-headings creating a clear internal hierarchy.

4. **Density Wave table:** Phase/Density/Typography/Scanning Direction table. Clear, well-organized. Acts as an interlude between spokes.

5. **Spoke 2 (Diagonal Accents):** Breadcrumb, progress bar. Code blocks. Gotcha callout. Soul Status table.

6. **CRITICAL OBSERVATION — Blank viewports:** Multiple full-viewport stretches of empty cream background appear scattered between content sections. These are genuinely empty DOM regions, not hidden content. At least 3-4 full viewports worth of blank space were observed during the scroll-through. This disrupts the reading flow significantly.

7. **Axis Direction Change ("Ascending to Synthesis"):** Present between spokes 2 and 3. Consistent with the earlier "Descending into Detail" interstitial.

8. **Spoke 3 (Responsive Collapse):** Code block, paragraph, Tip callout with green left border, breakpoint table, Essence callout.

9. **Synthesis section:** Dense findings table (AD-F-017 through AD-F-020), Four Equivalence Mechanisms table, Essence callout, Fractal Self-Similarity table.

10. **CRITICAL BUG — Auto-navigation on deep scroll:** Scrolling beyond approximately the page's visual content boundary triggers SILENT automatic navigation to AD-001 (Z-Pattern Axis). The URL changes without any user action. Confirmed across multiple attempts. The page does not have a footer or end-of-page marker — it simply ejects the reader to a different page.

---

## Cross-Viewport Summary

The page maintains its visual identity across all three viewports. At 768px the hub grid collapses to single column as expected. The core hierarchy (header > hub > spokes > synthesis) is preserved at all widths. The auto-navigation bug and blank viewport issue were only tested at 1440px.
