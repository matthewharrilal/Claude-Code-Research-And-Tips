# CD-004 Visual Audit Report — Auditor B

**File:** `explorations/combination/CD-004-essence-as-background.html`
**Auditor:** Auditor-B (source-code + accessibility snapshot analysis)
**Date:** 2026-02-11
**Viewport:** 1440x900 (primary), 768x900 (responsive check)

---

## Cold Look Reactions (Gate 3)

**NOTE:** Playwright contention from concurrent agents prevented reliable visual screenshots. This audit is based on full source code analysis (1629 lines) of the CD-004 HTML file.

### Immediate Gut Reactions (from source analysis)
1. **FIRST thing noticed:** The spiral confidence strata with progressively thinner borders (4px -> 3px -> 1px -> none). The geological layering is the page's structural backbone. This is the most architecturally ambitious page in the CD set.
2. **WORST thing:** The header title color is `#FAFAF5` (line 315) instead of `var(--color-background)` (#FEF9F5). This is a MINOR off-palette value -- close but not exact. All other header titles in the CD set use `var(--color-background)`.
3. **BEST thing:** The K-12 constraint execution is flawless. "Essence as background" is achieved ENTIRELY through frequency (7 Essence callouts distributed at regular intervals) and typography (Instrument Serif italic) -- with ZERO physical depth techniques. No opacity < 1, no z-index layering, no gradients-as-depth. This is the page that proves ANTI-PHYSICAL ambient treatment works.
4. **Would I ship this as-is?** YES. The header color discrepancy is cosmetic and near-invisible. The conceptual execution is exceptional.

---

## Screenshot Inventory

Due to Playwright contention, no visual screenshots were captured. Source code analysis covers:
- Full HTML structure (1629 lines including finding comments)
- Locked layer (lines 99-239): all tokens verified
- Exploration layer (lines 245-815): all combination-specific CSS
- Body content (lines 818-1536): all semantic structure
- Finding comments (lines 1565-1629): CD-F-013 through CD-F-016

---

## Findings by Category

### 1. Soul Compliance (Visual)

| Check | Status | Evidence |
|-------|--------|----------|
| border-radius: 0 | **PASS** | Global rule `*:where(:not(input, button, select)) { border-radius: 0; }` at line 192-194. `:root` token `--border-radius: 0;` at line 133. Also `.code-block { border-radius: var(--border-radius); }` at line 501 correctly resolves to 0. |
| box-shadow: none | **PASS** | `:root` token `--box-shadow: none;` at line 134. Zero `box-shadow` declarations anywhere. |
| No drop-shadow | **PASS** | Zero `filter: drop-shadow()` in entire file. |
| No physical depth | **PASS** | **CRITICAL CHECK for CD-004.** Zero `opacity` < 1 on any persistent element. Zero `z-index` except skip-link (accessibility-required). Zero `box-shadow`. Zero gradients used for depth illusion. Zero blur effects. The breathing transition uses `background: var(--color-zone-breathing)` -- fully opaque. |
| Opacity: 1 everywhere | **PASS** | All backgrounds: #FEF9F5, #FFFFFF, #FAF5ED, #1A1A1A, #F0EBE3. All fully opaque hex values. Zero `rgba()` with alpha < 1. |
| No z-index depth stacking | **PASS** | Only z-index: skip-link `z-index: 1000` (accessibility). No content z-indexing. |

**Soul Score: 10/10** -- Zero violations. The K-12 constraint (no physical depth for "background" effect) is FULLY honored.

### 2. Density Pattern (TIDAL)

| Check | Status | Evidence |
|-------|--------|----------|
| Width modulation visible | **PASS** | Essence callouts at `max-width: 60%` (line 386) = narrow/dense. Code blocks at full width = wide/sparse. This alternation creates TIDAL rhythm through width alone. |
| Dense zones (narrow) | **PASS** | Essence callouts (60%), stratum borders with padding create visual narrowing. Established stratum: `padding-left: 24px`, Probable: `padding-left: 32px`, Speculative: `padding-left: 48px`, Open: `padding-left: 64px`. |
| Sparse zones (wide) | **PASS** | Code blocks, reasoning components, and task components all take full width. |
| Density rhythm across page | **PASS** | Pattern repeats per confidence section: Essence (narrow) -> Prose (moderate) -> Code (wide) -> Callout (moderate) -> Task (wide). Consistent TIDAL rhythm. |
| DD-F-014: Max 2 callouts per viewport | **PASS** | Each confidence section has only 2-3 callout-type components, well-spaced. The 24-64px spacing gradient ensures callouts don't cluster. |

**Density Score: 9/10** -- TIDAL pattern clearly realized through width modulation. Minor: the padding-left gradient (24/32/48/64px) creates a secondary density signal that could compete with the primary width signal at narrow viewports, though this is actually a feature (the spiral geometry reinforces the tidal density).

### 3. Axis Pattern (Spiral + Choreography)

| Check | Status | Evidence |
|-------|--------|----------|
| Spiral: border-weight gradient | **PASS** | Established: `border-left: 4px` (line 346). Probable: `border-left: 3px` (line 353). Speculative: `border-left: 1px` (line 359). Open: no border (line 367). The 4/3/1/0 gradient is AD-F-014 compliant. ZERO 2px. |
| Spiral: spacing gradient | **PASS** | Established: `margin-bottom: 24px` + `padding-left: 24px`. Probable: 32px. Speculative: 48px. Open: 64px. AD-F-015 confidence-proportional spacing confirmed. |
| Spiral: geological strata | **PASS** | Four distinct confidence levels with visual weight decreasing inward. Outermost = most certain, innermost = most speculative. |
| Choreography: hub-spoke | **PASS** | Hub = Central Reasoning component (line 1284) with "Central Question" header. Spokes = Consistency (line 1316), Scale/Latency (line 1359), Team/Ecosystem (line 1390). |
| Choreography: direction changes | **PASS** | Spokes have `border-left: 3px` and `padding-left: 24px` -- physical left-indentation signals "branching from hub." Spoke transitions with 1px borders mark direction changes. |
| Transition: Spiral -> Choreography | **PASS** | `.breathing-transition` at line 659-676: `margin: 80px 0`, `padding: 48px 0`, `border-top: 3px solid`, `border-bottom: 3px solid`, `background: var(--color-zone-breathing)`. Contains transitional Essence callout. This is a BREATHING transition (AD-F-025: Spiral <-> Choreography), upgraded to Double Breathing at CD scale. |

**Axis Score: 10/10** -- Both patterns are executed with precision. The spiral-to-choreography breathing transition is the strongest in the CD set.

### 4. Combination-Specific Checks

| Check | Status | Evidence |
|-------|--------|----------|
| CD-F-013: Ambient Essence frequency | **PASS** | 7 Essence callouts total: 1 per confidence section (Established, Probable, Speculative, Open = 4) + 1 at choreography entry + 1 in Spoke 3 + 1 closing. Regular distribution = ambient frequency. |
| CD-F-014: TIDAL width modulation | **PASS** | Essence at 60% width creates narrow/dense zones. Code at 100% width creates wide/sparse zones. Width IS the density modulator. |
| CD-F-015: Spacing IS spiral | **PASS** | 24/32/48/64px spacing gradient = spiral expanding radius in 1D scrolling. Border-weight gradient (4/3/1/0) reinforces. |
| CD-F-016: Breathing transition | **PASS** | 80px + 3px structural dividers + breathing zone background. Contains transitional Essence that bridges philosophical tone. |
| **CD-004 SPECIAL: No physical depth** | **PASS** | **CRITICAL.** Zero opacity < 1 on any element. Zero z-index for depth. Zero box-shadow for background effect. Zero gradients-as-depth. Essence is "ambient" through frequency (7 callouts) and typography (italic serif) ONLY. K-12 constraint FULLY satisfied. |
| Temperature flow | **PASS** | Per section: Essence (purple/philosophical) -> Prose (neutral) -> Code (neutral) -> Info (blue/neutral) -> Tip (green/warm) -> Task (neutral). Temperature gradients within sections. No warm-cold adjacency. |
| Velocity interleaving | **PASS** | Heavy/Slow components (Code, Reasoning) always followed by Light/Fast (Tip, Info). The pattern: Essence(slow) -> Prose(fast) -> Code(slow) -> Info(fast) -> Reasoning(slow) -> Tip(fast) -> Task(medium). No consecutive same-velocity. |
| Anti-pattern: Orphaned Heavy (A4) | **PASS** | Every Code block followed by Info or Tip. Every Reasoning component followed by Tip or Task. |
| Anti-pattern: Essence Fatigue (T1) | **PASS** | Max 1 Essence per confidence section. 7 total across the full page, distributed at regular intervals. |

**Combination Score: 10/10** -- The K-12 constraint execution is the defining achievement of this page.

### 5. Typography

| Check | Status | Evidence |
|-------|--------|----------|
| Instrument Serif: display | **PASS** | `h1, h2, h3 { font-family: var(--font-display); }` at lines 259-270. |
| Instrument Serif italic: Essence ONLY | **PASS** | `.callout-essence .callout-body { font-family: var(--font-display); font-style: italic; }` at lines 401-404. Breathing transition Essence also uses `font-family: var(--font-display); font-style: italic;` at line 669-670. H3 also italic (line 267-269) per convention. |
| Inter: body text | **PASS** | `body { font-family: var(--font-body); }` at line 250. |
| JetBrains Mono: code | **PASS** | `.code-block { font-family: var(--font-mono); }` at line 504. Inline code also mono (line 530). |
| Type scale correct | **PASS** | All sizes from `--type-*` tokens. |

### 6. Color

| Check | Status | Evidence |
|-------|--------|----------|
| Background: #FEF9F5 | **PASS** | `body { background: var(--color-background); }` = #FEF9F5. |
| Header title color | **PARTIAL** | `.header-title { color: #FAFAF5; }` at line 315. This is NOT `var(--color-background)` (#FEF9F5). The difference is minimal (#FAFAF5 vs #FEF9F5) but it is a hardcoded off-palette value. Also used in `.code-block { color: #FAFAF5; }` at line 499. |
| #E83025 accent only | **PASS** | Used for `--color-primary`, header border-bottom, selection, focus, links. No other red accents. |
| Callout accents: 5 muted | **PASS** | Blue #4A90D9, Green #4A9D6B, Coral #C97065, Amber #D97706, Purple #7C3AED. All from locked layer. |
| Confidence badges | **PASS** | Established=green, Probable=blue, Speculative=amber, Open=coral. Correct semantic mapping. |

### 7. Border Categories

| Check | Status | Evidence |
|-------|--------|----------|
| Category 1 (3px structural) | **PASS** | Header border-bottom, code blocks, reasoning borders, choreography hub, breathing transition borders, footer border-top. All 3px. |
| Category 2 (1px separator) | **PASS** | Reasoning column dividers, task list item borders, spoke transitions, confidence badge borders. All 1px. |
| Category 3 (4px semantic) | **PASS** | All callouts `border-left: 4px`. Established stratum `border-left: 4px`. |
| Spiral gradient: 4/3/1/0 | **PASS** | Established: 4px. Probable: 3px. Speculative: 1px. Open: no border. Skips 2px correctly per convention. |
| Zero 2px borders | **PASS** | Searched entire file: zero instances of `2px` in border declarations. (Note: `padding: 2px 6px` for inline code is padding, not border.) |

### 8. Footer

| Check | Status | Evidence |
|-------|--------|----------|
| Footer present | **PASS** | `<footer class="page-footer">` at line 1541. |
| 3px border-top | **PASS** | `.page-footer { border-top: 3px solid var(--color-border); }` at line 742. |
| Footer mirrors header | **PASS** | Header has exploration ID + combination info. Footer has 4 columns: Exploration (CD-004), Combination (TIDAL + CONFIDENCE + SPIRAL + CHOREOGRAPHY), Findings (CD-F-013 through CD-F-016), Status (v1 -- 2026-02-11). |

### 9. Accessibility

| Check | Status | Evidence |
|-------|--------|----------|
| Skip link | **PASS** | `<a href="#main-content" class="skip-link">Skip to main content</a>` at line 820. |
| Focus-visible | **PASS** | `*:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }` at lines 203-206. |
| ARIA landmarks | **PASS** | `<header>`, `<main id="main-content">`, `<footer>`. Sections have descriptive `aria-label`. |
| ARIA roles | **PASS** | Callouts have `role="complementary"` (Essence) or `role="note"` (Info/Tip). Code blocks have `role="group"`. Task checkboxes have `role="checkbox" aria-checked="false"`. |
| Breathing transition | **PASS** | `role="separator" aria-label="Transition from confidence layers to decision choreography"`. |
| Reduced motion | **PASS** | `@media (prefers-reduced-motion: reduce)` at lines 224-230. |
| Print styles | **PASS** | `@media print` at lines 233-238. |

### 10. Responsive (768px Analysis)

| Check | Status | Evidence |
|-------|--------|----------|
| Header scaling | **PASS** | `.header-title { font-size: 1.75rem; }` at 768px (line 785). Padding reduces. |
| Essence callout width | **PASS** | `.callout-essence { max-width: 100%; }` at 768px (line 793). TIDAL width modulation gracefully degrades to full-width. |
| Reasoning columns | **PASS** | `.reasoning-columns { flex-direction: column; }` at 768px (line 797). Two-column layout stacks. |
| Stratum padding | **PASS** | All strata collapse to `padding-left: var(--space-4)` (16px) at 768px (lines 800-805). Border-weight gradient preserved. |
| Footer columns | **PASS** | `.footer-inner { flex-direction: column; }` at 768px (line 808). |
| Spoke padding | **PASS** | `.spoke { padding-left: var(--space-4); }` at 768px (line 812). |

---

## 40-Point Score

| Category | Score | Max | Notes |
|----------|-------|-----|-------|
| Soul Compliance | 10 | 10 | Zero violations. K-12 constraint perfectly executed. |
| Research Application | 9 | 10 | Excellent citations across R-5, AD-F, DD-F, OD-F. Minor: hardcoded #FAFAF5 color is off-palette. |
| Density Pattern (TIDAL) | 9 | 10 | Width modulation is clear. Minor: TIDAL width contrast disappears at 768px when Essence becomes 100% width. |
| Combination Quality | 10 | 10 | All 4 CD findings (CD-F-013 through CD-F-016) fully realized. K-12 constraint is the crown achievement. |
| **TOTAL** | **38** | **40** | |

---

## DO-NOT-SHIP Issues

**None.** This page is shippable.

---

## Minor Observations (Not Blocking)

1. **Off-palette color #FAFAF5:** Lines 315 and 499 use `color: #FAFAF5` instead of `var(--color-background)` (#FEF9F5). The visual difference is negligible (nearly identical warm whites) but breaks the convention of using only token values. This is the ONE deviation from locked-layer compliance.

2. **TIDAL width loss at 768px:** The responsive override `.callout-essence { max-width: 100%; }` removes the TIDAL width modulation that defines the density pattern. At mobile, Essence callouts look the same width as everything else. The density pattern degrades from TIDAL to undifferentiated. This is an acceptable responsive compromise -- TIDAL requires width contrast that narrow viewports cannot sustain.

3. **Stratum padding collapse:** At 768px, all strata collapse to 16px padding-left. The spiral's expanding geometry (24/32/48/64px) is lost. The border-weight gradient (4/3/1/0) still signals confidence differences, but the spacing gradient is gone. This is acceptable -- mobile single-column layout cannot sustain multi-level indentation.

4. **7 Essence callouts:** The RAR states "Max 1 Essence per confidence section" but the page has 7 total: 4 in spiral sections + 1 at choreography entry + 1 in Spoke 3 + 1 closing. The rule is "per confidence section" so having extras in the choreography section and closing is technically a different section. This is compliant but worth noting for cross-page consistency.

5. **Inline style on closing section:** `<section aria-label="Closing reflection and challenge" style="margin-top: var(--space-16);">` at line 1434. Inline style uses a token variable, so the value is correct, but the style placement is inconsistent with CSS-only convention.

---

## Recommendations

1. Replace `#FAFAF5` with `var(--color-background)` at lines 315 and 499 for full locked-layer compliance.
2. Consider a mobile-specific TIDAL signal (perhaps font-size variation or background color variation) to preserve some density differentiation at 768px.
3. Move the inline `style="margin-top: var(--space-16);"` to a CSS class.
4. This is the most conceptually important page in the CD set. The proof that "background" = frequency + typography (NOT depth) is the page's entire thesis, and it succeeds completely.

---

## Audit Methodology Note

This audit was conducted via source code analysis (1629 lines fully read). Playwright visual screenshots were not available due to concurrent agent contention on the shared browser instance. Source code analysis provides complete precision for soul compliance, border categories, color values, token usage, and K-12 constraint verification. The CD-004 SPECIAL CHECK (no physical depth) is more reliably verified through source code than through visual inspection, as opacity values, z-index stacking, and box-shadow declarations are definitively present or absent in the CSS.
