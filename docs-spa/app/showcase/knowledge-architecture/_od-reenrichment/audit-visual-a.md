<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/audit-visual-a.md
Tier: C | Stage: 3 (Organization OD) | Generated: 2026-02-09

BUILT ON: OD-001-conversational.html, OD-002-narrative.html, audit-identity-brief.md
CONSUMED BY: consistency agent, Wave 6 verifiers
END INLINE THREADING HEADER
-->

# Visual Audit A: OD-001 + OD-002

**Auditor:** visual-a
**Date:** 2026-02-09
**Method:** CSS source analysis (Playwright contended by parallel agents; source-level audit performed instead of live viewport inspection)
**Identity Brief:** Read in full before audit

**NOTE ON METHOD:** Playwright browser was unavailable due to contention from parallel audit agents sharing the same Chrome profile (port 52893). This audit was performed via comprehensive CSS source analysis using grep and file reads. All soul checklist items, anti-patterns, and convention spec compliance can be fully verified from source. Proportional/visual rhythm assessments are noted as LIMITED where live rendering would add confidence.

---

## 1. OD-001 at 1440px — Findings

### Soul Violations
- **NONE on checklist items 1-4:**
  - `border-radius: 0` declared in `:root` (line 221). No other `border-radius` declarations found.
  - `box-shadow: none` declared in `:root` (line 222). No `box-shadow` usage except `none !important` in print/reduced-motion.
  - No `filter:` declarations anywhere in file.
  - No `transform` on `:hover` states. Hover states use color/border-color changes only (lines 382-384, 943-946, 1001-1003).
- **Item 5 (Colors):** All hex colors are from locked palette. Syntax highlight colors (#6B9B7A, #4A7C9B, #C97065) are from accent palette. Code block uses #1A1A1A bg, #FAFAF5 text. PASS.
- **Item 6 (Font trio):** All `font-family` declarations use `var(--font-display)`, `var(--font-body)`, or `var(--font-mono)`. No external fonts. PASS.
- **Item 7 (Border 3-category):** Structural borders at 3px (lines 513, 837, 901, 1162, 1232), callout left-border at 4px (var(--border-left-width)), copy button at 1px (Cat 3). PASS.
- **Item 8 (No 2px borders):** Zero instances of `2px solid` found. PASS.
- **Item 9 (Spacing tokens):** Spacing uses `var(--space-*)` and Gestalt aliases throughout. PASS.
- **Item 10 (Max 2 callouts per viewport):** Cannot verify exact viewport stacking from source alone. Marked LIMITED.

### Proportional Wrongness (Source-Level)
- **font-size: 8px** on `.question__narrowing` (line 733) and `.enrichment-card__tag` (line 1146). The convention spec defines `--type-meta: 0.75rem` (12px) as the smallest token. 8px is significantly below the type scale floor. **MEDIUM finding.**
- **font-size: 9px** on multiple meta labels (lines 406, 485, 553, 584, 656, 1239, 1262). Also below the 12px type-meta floor. **LOW finding** (9px is closer to token, and used for decorative micro-labels).
- **opacity: 0.7** on `.question__narrowing` (line 737) — this is a visual element with opacity < 1. Per OD-AP-003, any opacity < 1 on visual elements is a violation. **HIGH finding.**
- **opacity: 0.6** on `.enrichment-card__tag` (line 1152) — same violation. **HIGH finding.**

### rgba() Semi-Transparency (OD-AP-003)
- **6 instances of rgba() with alpha < 1.0** on callout variant backgrounds (lines 820, 825, 830, 835, 860, 1006). All are 0.04-0.05 alpha. Per identity brief, ANY `rgba()` with alpha < 1.0 is a violation (OD-AP-003). **HIGH finding** — systemic across all callout variants and decision matrix highlight.

### Human Reviewer Flags
- The scroll-driven animation (`@keyframes arrive`, line 313-321) uses `opacity: 0` → `opacity: 1` and `translateY(16px)` → `translateY(0)`. The `opacity: 0` in the animation start state is acceptable (transitional, not resting state), and fallback/reduced-motion both set `opacity: 1`. Not a violation.
- Dark header convention: background uses `var(--color-text)` which resolves to #1A1A1A. PASS.
- Header inner wrapper: `max-width: 860px; margin: 0 auto`. PASS.
- Border-bottom on header: `3px solid var(--color-primary)`. PASS (Cat 1 structural).
- `--type-page: 2.5rem` on exploration-title. PASS.
- Meta line: `var(--type-meta)` (0.75rem / 12px), `letter-spacing: 0.08em` (brief says 0.15em). **LOW divergence** on letter-spacing vs convention spec.

---

## 2. OD-001 at 768px — Findings

### Source-Level Responsive Analysis
- Media query at 768px (line 1278): Questions go to `max-width: 100%`, TIDAL width difference eliminated. This is per spec (EXT-CONV-005: PULSE via bg color only at mobile).
- Exploration meta stacks vertically (`flex-direction: column`). PASS.
- Title reduces to `2rem` (from 2.5rem). Acceptable responsive reduction.
- Drop cap reduces to `2.5em`. Reasonable.
- **No new soul violations introduced** in responsive breakpoint.
- Enrichment grid goes single-column. PASS.
- Scroll witness: hidden at 1200px breakpoint (line 412). PASS.

### Proportional Wrongness at 768px
- All findings from 1440px carry through at 768px (opacity, rgba, font-size sub-token issues persist).
- LIMITED: Cannot verify actual layout flow, spacing rhythm, or touch target sizes without live rendering.

---

## 3. OD-002 at 1440px — Findings

### Soul Violations
- **Items 1-4:** Same as OD-001 — all PASS. `border-radius: 0` (line 201), `box-shadow: none` (line 202), no filter, no transform on hover.
- **Item 5 (Colors): MEDIUM VIOLATION.** Four off-palette hex colors in code block section:
  - `#333` (line 637) — code block header separator border
  - `#444` (line 651) — copy button border
  - `#555` (line 663) — code line numbers
  - `#888` (lines 644, 653) — code block language label + copy button text

  These are cool grays, not from the locked palette. OD-001 uses `var(--color-text-secondary)` (#666666) for the same elements. This is both an off-palette violation AND a cross-OD consistency divergence.

- **Item 6 (Font trio):** All `font-family` declarations use token variables. One instance uses `var(--font-body)` for `.act-narrative` body text (line 489). PASS.
- **Item 7 (Border 3-category):** Inline code border at 1px (Cat 3, line 285), code block at 3px (Cat 1, line 628), code header separator at 1px (Cat 2, line 637). PASS.
- **Item 8 (No 2px borders):** Zero instances. PASS.
- **Item 9 (Spacing tokens):** Uses `var(--space-*)` throughout. PASS.
- **Item 10 (Max 2 callouts):** LIMITED (cannot verify from source).

### rgba() Semi-Transparency (OD-AP-003)
- **6 instances of rgba() with alpha < 1.0** on callout variant backgrounds (lines 583, 588, 593, 598, 610, 717). Same pattern as OD-001: 0.04-0.05 alpha on callout backgrounds and decision matrix highlight. **HIGH finding.**

### Proportional Wrongness (Source-Level)
- **font-size: 9px** on `.tension-meter__label` (line 426) and `.progress-label` (line 803). Below type-meta floor. **LOW finding.**
- No opacity < 1 violations found outside animation contexts. OD-002 does NOT have the `.question__narrowing` opacity issue. PASS on this item (except rgba).

### Convention Spec Divergences
- **OD-002 exploration-id letter-spacing: 0.15em** (line 314) vs OD-001 at 0.1em (line 440). Convention spec says 0.15em. OD-001 is the divergent one here. **LOW finding** (consistency, not soul).
- **OD-002 missing `margin-bottom` on header.** OD-001 has `margin-bottom: var(--space-chapter)` on `.exploration-header` (line 425). OD-002 does not (line 298-302). This could cause the header to sit too close to first content section. **MEDIUM finding** (proportional wrongness).
- **OD-002 reduced-motion uses 0.01ms** (line 933). OD-001 uses 0.001ms (line 1325). Both effectively zero, but inconsistent. **NOTE.**
- OD-002 print styles override header to white background (line 922). OD-001 does NOT have header override in print. Minor inconsistency. **NOTE.**

### Human Reviewer Flags
- **Act header title font sizes decrease** (40px, 26px, 22px, 16px, 16px) per CRESCENDO. This is the core structural mechanism and looks intentional per EXT-NARR-005.
- Tension meter bar uses inline width via `style` attribute (likely). At 768px, forced to 120px via `!important`. The `!important` is a code smell but functionally acceptable.
- Dark header convention: `background: var(--color-text)`. PASS.
- Code blocks: `background: var(--color-text)` resolving to #1A1A1A per convention. PASS.

---

## 4. OD-002 at 768px — Findings

### Source-Level Responsive Analysis
- Media query at 768px (line 904): Arc diagram height reduced to 80px, meta stacks vertically, tension meter bar forced to 120px, header padding reduced.
- **No new soul violations introduced** in responsive breakpoint.
- **Missing responsive adjustments:** OD-002 has no responsive font-size reduction for `.exploration-title`. OD-001 reduces to `2rem` at 768px. OD-002 stays at `var(--type-page)` (2.5rem / 40px), which may be too large on narrow viewports. **MEDIUM finding** (proportional).
- No responsive adjustments for act content width, narrative sections, or callouts. The default `max-width: 860px` container handles most of this, but at 768px with padding, effective content width is narrow. LIMITED — need live rendering to assess actual rhythm.

---

## 5. Soul Compliance Summary

| Check | OD-001 | OD-002 |
|-------|--------|--------|
| 1. border-radius: 0 | PASS | PASS |
| 2. box-shadow: none | PASS | PASS |
| 3. filter: none | PASS | PASS |
| 4. No hover z-depth | PASS | PASS |
| 5. Locked palette | PASS | **MEDIUM FAIL** (4 off-palette code block colors) |
| 6. Font trio only | PASS | PASS |
| 7. Border 3-category | PASS | PASS |
| 8. No 2px borders | PASS | PASS |
| 9. Spacing tokens | PASS | PASS |
| 10. Max 2 callouts/vh | LIMITED | LIMITED |

**OD-001 Soul: 9/9 PASS, 1 LIMITED** (items 1-9 verified, item 10 needs live render)
**OD-002 Soul: 8/9 PASS, 1 MEDIUM FAIL, 1 LIMITED**

---

## 6. Insider Test Answer

> "If this were shown to a design critic with full knowledge of our methodology, what would they attack first?"

**The rgba() callout backgrounds.** Both OD-001 and OD-002 use `rgba(color, 0.04-0.05)` for callout variant backgrounds. This is the exact pattern OD-AP-003 was written to catch — "systemic, found in EVERY wave." The identity brief says the binary rule is "opacity === 1.0 everywhere." These rgba values create semi-transparent tints that technically simulate material/depth interaction (light passing through a tinted surface). A design critic who understands the ANTI-PHYSICAL identity would immediately identify this as contradicting the flat 2D commitment.

The critic would also note the inconsistency between OD-001 (which uses design tokens religiously in its code blocks) and OD-002 (which hardcodes raw hex values for the same elements). This signals that OD-002 was built with less rigor or by a different agent who didn't internalize the "use tokens, not raw values" principle.

**Secondary attack:** The font sizes below the type scale floor (8px, 9px). If the system has a defined type scale with a floor of 12px (--type-meta), why do micro-labels go to 8-9px? Either the scale needs a 6th level or these labels are violating it.

---

## 7. Severity-Ranked Findings

### CRITICAL
None.

### HIGH

| ID | Page | Finding | Lines |
|----|------|---------|-------|
| VA-H-001 | OD-001 | **OD-AP-003: rgba() callout backgrounds with alpha < 1.0** — 6 instances of semi-transparent backgrounds on callout variants (.callout--info, --tip, --gotcha, --essence, --challenge) + decision matrix highlight. Binary rule: opacity must be 1.0. | 820, 825, 830, 835, 860, 1006 |
| VA-H-002 | OD-002 | **OD-AP-003: rgba() callout backgrounds with alpha < 1.0** — 6 instances, same pattern as OD-001. Systemic across both files. | 583, 588, 593, 598, 610, 717 |
| VA-H-003 | OD-001 | **opacity: 0.7 on .question__narrowing** — Visual element at sub-1.0 opacity violates OD-AP-003 binary rule. | 737 |
| VA-H-004 | OD-001 | **opacity: 0.6 on .enrichment-card__tag** — Same violation as VA-H-003. | 1152 |

### MEDIUM

| ID | Page | Finding | Lines |
|----|------|---------|-------|
| VA-M-001 | OD-002 | **Off-palette colors in code block: #333, #444, #555, #888** — Four hardcoded cool grays not in locked palette. OD-001 uses `var(--color-text-secondary)` for same elements. Cross-OD consistency divergence. | 637, 644, 651, 653, 663 |
| VA-M-002 | OD-001 | **font-size: 8px below type scale floor** — .question__narrowing and .enrichment-card__tag use 8px; type scale floor is --type-meta (12px). No sub-12px token exists. | 733, 1146 |
| VA-M-003 | OD-002 | **Missing header margin-bottom** — OD-001 has `margin-bottom: var(--space-chapter)` on .exploration-header; OD-002 does not. May cause header-to-content spacing issue. | 298-302 |
| VA-M-004 | OD-002 | **Missing responsive title reduction at 768px** — OD-001 reduces .exploration-title to 2rem; OD-002 keeps 2.5rem (40px) which may be oversized on narrow viewports. | 904-914 |

### LOW

| ID | Page | Finding | Lines |
|----|------|---------|-------|
| VA-L-001 | OD-001+002 | **font-size: 9px on micro-labels** — Multiple meta labels use 9px instead of --type-meta (12px). Affects .scroll-witness, .version-badge, .diagram-label, .tension-meter__label, etc. Consistent between files but below token floor. | OD-001: 406,485,553,584,656,1239,1262; OD-002: 426,803 |
| VA-L-002 | OD-001 | **Exploration-id letter-spacing: 0.1em** — Convention spec says 0.15em. OD-002 uses 0.15em correctly. OD-001 diverges. | 440 |
| VA-L-003 | OD-001 vs OD-002 | **Reduced-motion animation-duration inconsistency** — OD-001 uses 0.001ms, OD-002 uses 0.01ms. Both functionally zero but inconsistent. | OD-001:1325, OD-002:933 |

---

## Audit Methodology Notes

- **Playwright unavailable** due to Chrome profile contention (existing session on port 52893 from parallel agents). All findings are from CSS source analysis.
- **Items marked LIMITED** (callout stacking, proportional layout assessment, touch targets) would benefit from live viewport verification at both 1440px and 768px.
- All soul checklist items that can be verified from source (items 1-9) were checked exhaustively via grep search across entire file contents.
- Font-family, border-width, color, opacity, rgba, filter, box-shadow, border-radius, and transform patterns were all searched comprehensively.
- Cross-OD comparison performed for code block styling, header conventions, and responsive patterns.

---

## Summary Statistics

| Metric | OD-001 | OD-002 |
|--------|--------|--------|
| Soul items PASS | 9/10 | 8/10 |
| Soul items FAIL | 0 | 1 (off-palette) |
| Soul items LIMITED | 1 | 1 |
| HIGH findings | 3 | 1 |
| MEDIUM findings | 1 | 2 |
| LOW findings | 2 | 1 |
| Total findings | 6 | 4 |

**Overall: OD-001 has more opacity/transparency violations; OD-002 has off-palette colors and convention divergences. The rgba() callout background issue is systemic across BOTH files and is the highest-priority fix target.**
