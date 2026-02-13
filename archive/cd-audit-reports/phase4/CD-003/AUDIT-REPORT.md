# AUDIT REPORT: CD-003 -- File Tree with Callouts

## Verdict: DO NOT SHIP

**Page:** CD-003-file-tree-with-callouts.html
**Date:** 2026-02-11
**Synthesizer:** Weaver (Phase 4 Standalone)
**Inputs:** Lock Sheet, Cold Look (3 viewports), Findings (5 dimensions + 20 PA questions x 3 viewports)

---

## Cold Look Summary

The cold look auditor assessed CD-003 at three viewports with dramatically split results:

- **1440px:** "Structured and purposeful." Ship verdict: YES WITH RESERVATIONS. Bento grid is excellent. "Project Overview" callout feels orphaned.
- **768px:** "The page falls off a cliff into blank cream." Ship verdict: NO. Severe rendering failure makes two-thirds of page invisible.
- **1024px:** "Same catastrophic blank space issue." Ship verdict: NO. Architecture Decision heading visible but content below is blank.

**Gut personality:** "Structured, spatial, instructive" (1440px); "Spatial, broken, incomplete" (768px); "Promising, broken, truncated" (1024px).

**Cold look concordance:** Both auditors (cold look and findings) independently identified the same catastrophic issue -- invisible content below the bento grid at all viewports. The cold look auditor's 768px reaction ("falls off a cliff") matches the findings auditor's quantification (70% invisible). High concordance increases confidence this is a real rendering failure, not an artifact.

---

## Top 5 Findings (ranked by visual impact)

| Rank | Finding | Severity | Concordance | Track |
|------|---------|----------|-------------|-------|
| 1 | 70% of page content invisible below bento grid (all viewports) | CRITICAL | Cold look + Findings (both flagged at all 3 viewports) | Rule + Perception |
| 2 | No visible page ending -- page appears to stop in blank cream | HIGH | Cold look + Findings (both flagged) | Perception |
| 3 | "Project Overview" callout orphaned between intro and bento grid | MEDIUM | Cold look + Findings (both flagged) | Perception |
| 4 | (No LOW findings) | -- | -- | -- |
| 5 | (No additional findings -- visible portion is high quality) | -- | -- | -- |

---

## All Findings by Track

### Perception Track

#### WOULD-NOT-SHIP

**P-001: Invisible content rendering failure**
- **Description:** Approximately 70% of the page content does not render visually despite being present and correctly positioned in the DOM. Affected content includes: choreography hub (comparison table, decision text), all three spoke sections (Feature-Based, Layer-Based, Decision Framework), Challenge and Summary section, Essence callout, Research Application Record, and footer. Only the first ~2,600px of a ~9,760px page renders. Affects ALL three viewports identically.
- **Impact:** A user would believe the page ends after the bento grid section. Two-thirds of the designed content is invisible.
- **Concordance:** Both auditors flagged independently at all three viewports. Cold look at 768px: "falls off a cliff into blank cream." Cold look at 1024px: "below it the page is blank." Findings: "verified across multiple isolated browser tabs, with and without animation-disabling CSS, with wait times up to 1 second per scroll position."
- **Sovereignty:** VALID -- this directly violates ESC-002 (Lock Sheet: "initial CSS = VISIBLE, JS MAY add hidden"). If content is CSS-hidden and requires JS intersection observers to reveal, and those observers fail to trigger, the locked progressive enhancement rule is violated. The findings auditor explicitly verified "the issue is NOT caused by the audit tooling."

**P-002: No visible page ending**
- **Description:** Because the lower content is invisible, the page has no perceivable conclusion. A reader scrolling past the bento grid encounters blank cream and assumes the page is over. No footer, no essence callout, no resolution section visible.
- **Impact:** Reader receives no closure. Page appears incomplete/broken.
- **Concordance:** Both auditors flagged. Cold look at 768px: "The spoken headings appear at the top of their containers but their inner content is completely invisible." Findings PA-13: "No visible ending. Page appears to stop."
- **Sovereignty:** VALID -- this is a downstream consequence of P-001. The footer requirement (Lock Sheet: "Footer/capstone required on every page") is technically met in DOM but not in rendered output.

#### LOOKS-WRONG

No LOOKS-WRONG findings. The visible portion of the page is well-crafted.

#### COULD-BE-BETTER

**P-003: Orphaned "Project Overview" callout**
- **Description:** The introductory callout between the section heading and the bento grid floats in a vertical gap that disrupts the visual rhythm. It lacks sufficient proximity to either the paragraph above or the grid below.
- **Impact:** Minor rhythm interruption at the transition from intro to primary content.
- **Concordance:** Both auditors flagged. Cold look: "feels slightly orphaned... floats in space without strong visual connection." Findings PA-01: "floats in liminal space."
- **Sovereignty:** VALID AND ACTIONABLE -- spacing between components is challengeable (Lock Sheet: spacing token values are in CHALLENGEABLE tier). Reducing the gap above or below the callout would improve visual proximity.

### Rule Track

**R-001: ESC-002 violation -- scroll-reveal progressive enhancement**
- **Description:** Content below the bento grid is CSS-hidden and requires JavaScript intersection observers to reveal. When those observers fail to trigger (across all three viewports, verified by the findings auditor), 70% of page content remains invisible. This violates the locked ESC-002 rule: "initial CSS = VISIBLE, JS MAY add hidden."
- **Lock Sheet Reference:** ESC-002 resolution, CD-CONV S15.3. Origin: "AD-006 hid 40-60% of content when animations failed."
- **Severity:** LOCKED RULE VIOLATION. ESC-002 was created specifically to prevent this exact failure mode (AD-006 precedent).
- **Note:** Unlike CD-001's ambiguous scroll-reveal finding (where DOM reported visible), CD-003's findings auditor explicitly verified: "This finding was verified across multiple isolated browser tabs, with and without animation-disabling CSS, with wait times up to 1 second per scroll position. The issue is NOT caused by the audit tooling." This is a confirmed violation, not a suspected one.

---

## Contamination Report

### CSS Terms Found in Findings

The findings file is **clean** of CSS property contamination. The auditor used perceptual language throughout:

| Location | Term Used | Assessment |
|----------|-----------|------------|
| Finding summary | "scroll height of ~9,760 pixels" / "first ~2,600 pixels" | CLEAN -- measurement language, not CSS property names |
| PA-09 | "7,100 pixels of blank warm cream" | CLEAN -- quantified dead space in perceptual terms |
| PA-15 | "Three distinct left-edge positions" / "offset slightly from the container edge" / "left border width" | BORDERLINE -- "left border width" names a CSS concept, but used to describe a visual offset rather than prescribe a value |
| Pass 2 | "roughly 55% width" / "roughly 40% width" | CLEAN -- proportional description |

**Contamination count: 0 hard CSS property names.** One borderline reference to "left border width" in PA-15, used descriptively not prescriptively. Acceptable.

**Gate 4 assessment: PASS** -- perceptual language discipline maintained.

---

## Sovereignty Classifications

| Finding | Targets | Classification | Rationale |
|---------|---------|---------------|-----------|
| P-001 (invisible content) | Locked EXECUTION (ESC-002) | VALID -- CONFIRMED VIOLATION | ESC-002 requires CSS-visible by default; content is CSS-hidden |
| P-002 (no page ending) | Locked EXECUTION (footer requirement) | VALID -- downstream of P-001 | Footer exists in DOM but not in render |
| P-003 (orphaned callout) | CHALLENGEABLE spacing | VALID AND ACTIONABLE | Spacing tokens are challengeable |

---

## Multi-Viewport Comparison

### Squeeze Test: 1440 -> 1024 -> 768

| Dimension | 1440px | 1024px | 768px |
|-----------|--------|--------|-------|
| Visible content | ~2,600px of ~9,760px | ~2,600px of ~9,760px | ~2,600px of ~9,760px |
| Bento grid | Excellent -- asymmetric 55/40 split | Excellent -- comfortable reading widths | Good -- two-column maintained |
| Ship verdict | YES WITH RESERVATIONS | NO | NO |
| Personality | Structured, spatial, instructive | Promising, broken, truncated | Spatial, broken, incomplete |
| Rendering failure | PRESENT | PRESENT | PRESENT |

**Graceful degradation or collapse?** COLLAPSE. The rendering failure affects all viewports identically -- this is not a responsive issue but a systematic content-visibility failure. The visible bento grid portion degrades gracefully across viewports, but the page as a whole is broken at every width.

**Content survival:** Content does NOT survive from desktop to tablet. All three viewports lose the same 70% of content. This is NOT a squeeze failure -- the content is invisible even at the widest viewport.

**Identity survival:** The bento grid section retains its identity across all viewports. The file tree + annotation card spatial relationship is viewport-appropriate at all three widths. If the rendering failure were fixed, identity survival would likely be strong.

---

## Positive Findings (What to Protect -- DO NOT CHANGE)

These elements received consistent praise across both auditors and all viewports (for the visible portion):

1. **Bento grid layout:** Asymmetric cell sizing (large file tree + smaller annotation cards) creates effective spatial hierarchy through size, not decoration. Called "excellent" by both auditors. PROTECT.

2. **Callout type system (Info/Tip/Config/Gotcha):** Clear, consistent, effective semantic differentiation through color. Blue/green/neutral/coral temperature mapping is immediately legible. PROTECT.

3. **File tree rendering:** Monospace typeface, indentation hierarchy, bold directories vs lighter files. Well-crafted and readable. PROTECT.

4. **Left-border accent family cohesion:** File tree cell and callout cards share border-left treatment but differentiate through color. Creates family without uniformity. PROTECT.

5. **Code snippet integration:** tsconfig.json path aliases block integrates naturally into bento grid. Clean, readable syntax highlighting. PROTECT.

6. **One-designer coherence:** Both auditors confirmed consistent visual language in the visible portion. PROTECT.

7. **Three-rail alignment system:** Page container edge, grid cell edge, content-within-card edge. Clean, deliberate hierarchy. PROTECT.

---

## Final Verdict Rationale

**Verdict: DO NOT SHIP**

**Why DO NOT SHIP:** P-001 is a confirmed WOULD-NOT-SHIP finding with maximum concordance. Both the cold look auditor and the findings auditor independently identified the same catastrophic rendering failure at all three viewports. The findings auditor explicitly verified this is not a tooling artifact ("verified across multiple isolated browser tabs, with and without animation-disabling CSS"). 70% of page content is invisible to users. This directly violates the locked ESC-002 rule (progressive enhancement), which was created specifically to prevent this exact failure mode based on the AD-006 precedent.

**Why not SHIP WITH CONCERNS:** A SHIP WITH CONCERNS verdict requires no WOULD-NOT-SHIP findings. P-001 is unambiguously WOULD-NOT-SHIP: a page where most content is invisible cannot ship under any circumstances.

**Why this is fixable:** The visible portion (bento grid section) is genuinely excellent. Both auditors praise it independently. The rendering failure is a single systematic issue (scroll-reveal CSS hiding content by default). Fixing ESC-002 compliance (making content CSS-visible by default, allowing JS to enhance with animations) would likely resolve the entire finding. Once fixed, the page would likely merit SHIP or SHIP WITH CONCERNS based on the quality of the visible portion.

**Action items:**
1. **FIX P-001 (MANDATORY):** Audit all CSS rules affecting content below the bento grid. Ensure all content has `opacity: 1`, `display: block/flex/grid`, `visibility: visible`, and `height: auto` in the default stylesheet WITHOUT JavaScript. JS may add entrance animations (opacity 0->1 transition) but the BASE CSS must show content. This is the ESC-002 pattern.
2. **VERIFY after fix:** Re-run perceptual audit at all three viewports to confirm content is now visible.
3. **FIX P-003 (AFTER P-001):** Reduce vertical gap around "Project Overview" callout to improve visual proximity to neighboring content.
4. **PROTECT bento grid:** Any fix to P-001 must not alter the visible bento grid section, which is the page's strongest asset.

**Bottom line:** CD-003 contains one of the strongest individual components in the CD series (the bento grid) paired with a catastrophic rendering failure that makes the page unusable. The fix is specific and well-understood (ESC-002 compliance). Once fixed, this page has high potential.
