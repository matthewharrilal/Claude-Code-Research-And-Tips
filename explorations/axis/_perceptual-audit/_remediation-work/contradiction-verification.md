# Contradiction Verification Report

Verified by: Agent 6B
Date: 2026-02-11

---

## DM-038: AD-001 Scroll-Triggered Navigation

**Claim:** AD-001 has scroll-triggered navigation

**Evidence Found:**
- AD-001 (`AD-001-z-pattern.html`) contains **zero `<script>` tags** -- the file is purely HTML + CSS with no JavaScript whatsoever.
- A grep for `window.location`, `history.pushState`, `scrollTo`, `IntersectionObserver`, `addEventListener`, and `<script>` returned **zero matches** for any navigation-related code.
- The only scroll-related references in the entire file are:
  1. `scroll-behavior: auto !important;` inside the `@media (prefers-reduced-motion: reduce)` block (line 524) -- this is a prophylactic reduced-motion rule, not scroll-triggered navigation.
  2. `.scroll-witness` in the print styles `display: none` rule (line 537) -- this is a CSS class reference for print hiding, but no element with this class exists in the HTML body, and no JavaScript creates or uses it.
- The page uses standard `<a href="#gutenberg-mapping">` anchor links (lines 992, 1292, 1535) for in-page navigation. These are native browser fragment navigation, NOT scroll-triggered.

**Resolution:** FALSE POSITIVE

**Detail:** AD-001 has no scroll-triggered navigation of any kind. The file contains zero JavaScript. The anchor links (`href="#gutenberg-mapping"`, `href="#velocity-control"`, `href="#implementation-checklist"`) are standard HTML fragment links that use native browser behavior, not scroll-event-driven navigation. The `.scroll-witness` CSS class in the print stylesheet appears to be a vestigial reference from the AD-SOUL-TEMPLATE (included prophylactically in case scroll-reveal animations were added), but no such element or script exists in AD-001. The original auditor likely misidentified the anchor links or the `.scroll-witness` print rule as evidence of scroll-triggered navigation.

---

## DM-039: AD-002 Two-Column Collapse at 768px

**Claim:** AD-002 two-column layouts don't collapse properly at 768px

**Evidence Found:**
- AD-002 (`AD-002-f-pattern.html`) defines a `.two-col` class at line 666-670:
  ```css
  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
    margin-bottom: var(--space-between);
  }
  ```
- The responsive collapse is explicitly defined at lines 833-835:
  ```css
  @media (max-width: 768px) {
    .two-col {
      grid-template-columns: 1fr;
    }
  }
  ```
- The `.two-col` class is used exactly once in the HTML body (line 1035), in the Act II Rising Action section to create a two-column layout for "The First Horizontal Scan" and "The Second Horizontal Scan" content blocks.
- The `@media (max-width: 768px)` block (lines 833-879) also handles:
  - `.act-zone` padding reduction
  - `.act-zone--exposition` and `.act-zone--denouement` padding reduction
  - `header h1` font-size reduction (80%)
  - `.header-inner` padding reduction
  - `.breathing-zone` padding reduction
  - `.decision-matrix` font/padding reduction
  - `table` font-size reduction
  - `.essence-pullquote` font-size reduction
  - `.page-footer__inner` column-to-stack conversion

**Resolution:** FALSE POSITIVE

**Detail:** AD-002's two-column layout collapses correctly at 768px. The CSS is unambiguous: `.two-col` switches from `grid-template-columns: 1fr 1fr` to `grid-template-columns: 1fr` at `max-width: 768px`. This is a standard binary responsive collapse following the AD Convention Section 12.5 rule. The responsive block is comprehensive, handling not just the two-column grid but also padding, typography scaling, table sizing, and footer layout. The conflicting auditor reports may have arisen from:
1. Testing at different viewport widths (e.g., 769px vs 768px -- the breakpoint is `max-width: 768px`, meaning 769px would still show two columns)
2. Confusing the single `.two-col` usage with other layout elements that don't use two-column grids (the act zones, breathing zones, etc. are all single-column by default)
3. Browser rendering differences at exactly the breakpoint boundary

---

## Impact on Provenance

Neither contradiction is confirmed. Both are false positives arising from auditor interpretation rather than actual code defects.

**No audit reports need annotation for code fixes.** However, if an AD-AUDIT-SYNTHESIS.md file references either DM-038 or DM-039 as confirmed issues, those entries should be annotated with `[VERIFIED: FALSE POSITIVE]` to prevent future remediation attempts on non-existent bugs.

Specific recommendations:
- DM-038: Annotate as "FALSE POSITIVE -- no JavaScript exists in AD-001; `.scroll-witness` is vestigial CSS from template"
- DM-039: Annotate as "FALSE POSITIVE -- `.two-col` correctly collapses at 768px; see lines 833-835 of source"
