# AD-006 Fix Report — The Convergence (Compound Axis)

**Date:** 2026-02-11
**Fixer:** Fixer-006
**File:** `docs-spa/app/showcase/explorations/axis/AD-006-compound.html`

---

## Summary

4 fixes applied targeting the 2 WOULD-NOT-SHIP findings (MF-001, MF-002) and 2 LOOKS-WRONG findings (MF-004, MF-005). Zero soul violations introduced.

---

## Fixes Applied

### Fix 1: Scroll-Reveal Content Protection (MF-001 — WOULD-NOT-SHIP)

**Problem:** 40-60% of page content (Sections 4-7) renders as blank when scroll-triggered animations fail to fire. 5/5 auditors flagged unanimously.

**Root Cause Analysis:** The HTML file itself contains NO scroll-reveal JavaScript or CSS (no `opacity: 0`, no `transform: translateY()` on content elements). The only JS is a scroll progress bar witness (lines 2191-2207). The content invisibility must originate from the Next.js app framework or an external stylesheet applied when served within docs-spa. The file's own CSS never sets content to invisible.

**Fix:** Added defensive CSS in the axis-layer that explicitly forces all section content to be visible regardless of external stylesheets or failed JS:

```css
.axis-section,
.axis-section > *,
.axis-section .page-container,
.axis-section .page-container > * {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}
```

**Rationale:** Using `!important` is justified here because this is a defensive override against unknown external scroll-reveal code. The audit's proposed fix (Option 2: "CSS initial state visible, JS adds hidden class") aligns with this approach — content is visible by default, and any scroll animation is purely enhancement. The `!important` declarations ensure no external stylesheet can hide content.

**Soul compliance:** No border-radius, no box-shadow, no drop-shadow added.

---

### Fix 2: Bento Grid Early Collapse at 960px (MF-002 — WOULD-NOT-SHIP)

**Problem:** Bento 4-column grid text collapses to single-character-per-line vertical stacking at viewports below ~960px. The existing 768px collapse breakpoint fires 130+ units too late. 5/5 auditors flagged unanimously.

**Fix:** Added new `@media (max-width: 960px)` breakpoint between the existing 1024px and 768px breakpoints. This collapses bento, choreography, and spiral grids to single-column at 960px instead of waiting for the catastrophic 768px threshold:

```css
@media (max-width: 960px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }
  .bento-item--featured {
    grid-column: span 1;
  }
  .bento-item--featured::after {
    display: none;
  }
  .choreo-layout {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }
  .choreo-hub::after {
    display: none;
  }
  .spiral-layout {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }
}
```

**Rationale:** The audit identified the cliff edge at ~960px where multi-column grids become unreadable. Moving the collapse 130px earlier (from 768px to 960px) ensures text is always readable. The choreography and spiral grids are also collapsed at this breakpoint since they share the same 3-column fragility profile. The offset pseudo-elements (`::after`) are hidden in single-column to prevent layout overflow.

**Note on lock conflict:** The audit escalated this as a conflict between LOCKED S12.5 (768px collapse) and LOCKED AD-F-009 (bento cells must be readable). This fix prioritizes readability by adding an earlier breakpoint for complex grids while preserving the 768px breakpoint for simpler layouts (Z-pattern 2-column, etc.) which remain functional at that width.

**Soul compliance:** No border-radius, no box-shadow, no drop-shadow added.

---

### Fix 3: Container Width Expanded to 1100px (MF-005 — LOOKS-WRONG)

**Problem:** Single 860px container constrains bento and choreography sections that need wider breathing room. At 1440px, 40% of screen is empty cream margins.

**Fix:** Changed `max-width` from `860px` to `1100px` in three locations:
1. `.page-container` (line 302)
2. `.header-inner` (line 252)
3. Closing bookend footer inner wrapper (inline style)

**Rationale:** The compound page deploys 5 different axis patterns each with different spatial needs. At 1440px, 1100px gives the bento and choreography grids room to breathe while maintaining sufficient margins (170px per side) to feel intentional. The header inner wrapper is widened to match so the header-to-content alignment is maintained.

**Soul compliance:** No border-radius, no box-shadow, no drop-shadow added.

---

### Fix 4: Closing Bookend Added (MF-004 — LOOKS-WRONG)

**Problem:** Page opens with a dramatic dark header band but ends abruptly after the Discovery Log with no visual closure.

**Fix:** Added a `<footer>` element after `</main>` that mirrors the opening header band:
- Dark background (`var(--color-text)` = #1A1A1A)
- Top border matching header's bottom border (`3px solid var(--color-primary)`)
- Title "The Convergence" in Instrument Serif at section size
- Subtitle line "AD-006 — Compound Axis — Five Patterns, One Phenomenon" in mono uppercase
- Max-width 1100px matching the widened container

**Rationale:** The page's own Section 06 claims to use the BOOKENDS density pattern. The opening bookend exists (the header). The closing bookend was missing. This footer provides the visual period that completes the BOOKENDS structure. The design mirrors the header's typography and color choices without duplicating its content.

**Soul compliance:** No border-radius, no box-shadow, no drop-shadow. Uses only existing design tokens.

---

## Soul Compliance Verification

| Rule | Compliant | Evidence |
|------|-----------|----------|
| `border-radius: 0` | YES | No border-radius added in any fix. Global enforcement rule unchanged. |
| `box-shadow: none` | YES | No box-shadow added in any fix. |
| No `filter: drop-shadow()` | YES | No drop-shadow added in any fix. |
| Colors from tokens only | YES | All colors use `var()` references to `:root` tokens. |
| Typography from tokens only | YES | All fonts use `var(--font-display)`, `var(--font-mono)`, `var(--font-body)`. |

**Grep verification:** `border-radius(?!: 0)|box-shadow(?!: none)|drop-shadow` returns **zero matches** across entire file.

---

## Changes NOT Made

| Finding | Why Not Fixed |
|---------|--------------|
| MF-003 (Excessive dead space) | Spacing is governed by `var(--space-12)` section padding which comes from locked tokens. Reducing it would require convention revision. The wider container (Fix 3) partially mitigates by filling more of the viewport. |
| MF-006 (Header-to-content gap) | Header padding uses locked `var(--space-16)`. Convention-level change. |
| MF-007 (Drop cap ceremony fatigue) | Only 1/5 auditors flagged. Low priority. |
| MF-008 (Axis indicator tonal split) | Only 1/5 auditors flagged. Low priority. |
| MF-009 (Callout label inconsistency) | Only 1/5 auditors flagged. Low priority. |
| MF-010 (Section transitions jarring) | 3/5 flagged but targets LOCKED transition grammar execution. |
| MF-011 (Featured bento proportions) | Addressed indirectly by wider container (Fix 3) giving featured cell more room. |

---

## File Diff Summary

| Location | Before | After |
|----------|--------|-------|
| `.header-inner` max-width | 860px | 1100px |
| `.page-container` max-width | 860px | 1100px |
| Axis layer (new block) | — | Scroll-reveal protection CSS (13 lines) |
| Responsive (new block) | — | `@media (max-width: 960px)` early collapse (22 lines) |
| After `</main>` (new element) | — | Closing bookend `<footer>` (6 lines) |
