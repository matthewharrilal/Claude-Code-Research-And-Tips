# Cold Look -- AD-004 Spiral Layout

**Auditor:** Alpha (Impression + Readability + Spatial)
**Date:** 2026-02-10
**Methodology:** Playwright screenshots at 1440x900 and 768x1024 with full-page scroll-through. Animations disabled. Fonts loaded via document.fonts.ready.

---

## COLD LOOK (1440px)

**Gut reaction:** A dignified geological column -- the warm cream background, dark header, and serif headings create an immediately scholarly atmosphere. The red left border on the first stratum is a strong anchor. The two-column golden ratio layout in Established feels natural and well-proportioned.

**Worst thing:** The massive void of empty space in the lower half of the page. The Open stratum's generous whitespace, combined with the confidence-encoding philosophy, creates scroll positions where the entire viewport is empty warm cream. A user would think they had scrolled past the end of the page.

**Best thing:** The header's four-cell geological survey map (Bedrock / Subsoil / Topsoil / Atmos) with decreasing border weights beneath each cell. Instantly communicates the page's four-tier confidence structure before a word of body content is read.

**Ship verdict:** YES WITH RESERVATIONS

---

## COLD LOOK (768px)

**Gut reaction:** The responsive adaptation is mostly clean but two critical issues emerge: the comparison grid in Speculative stays two-column and clips text off the right edge, and the Open stratum's left border is literally invisible (0.75 subpixel rendering, color matching background).

**Worst thing:** The comparison grid panels at 768px are side-by-side and the right panel's text is visibly clipped. "Early" becomes "Ea...", "surface" becomes "surfa...". This is a functional failure, not just a cosmetic concern.

**Best thing:** The geological survey map collapsing from four columns to two-by-two preserves the mental model elegantly.

**Ship verdict:** YES WITH RESERVATIONS (bordering on NO due to the text clipping)
