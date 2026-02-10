# Hygiene Spacing Audit: AD-004 Spiral

**Auditor:** Hygiene-A (Spacing & Layout)
**File:** `explorations/axis/AD-004-spiral.html`
**Gold Standard:** `explorations/organizational/OD-004-confidence.html`
**Convention:** `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md`
**Date:** 2026-02-10

---

## Summary

**Total Findings: 12**
- BROKEN: 2
- CRAMPED: 3
- INCONSISTENT: 5
- ACCEPTABLE: 2

AD-004 generally follows spacing conventions but has notable deviations from the OD-004 gold standard, particularly in header padding, body line-height, paragraph font-size, callout internal spacing, and list item spacing. The stratum padding model intentionally diverges from OD-004 (using directional padding per-stratum to encode confidence-proportional spacing), which is acceptable as an axis-specific creative decision. However, several spacing values miss OD convention without justification.

---

## Dimension-by-Dimension Analysis

### Dimension 1: Title-to-Content Spacing

**FINDING [header h1 margin-bottom, locked-layer line ~232], DIMENSION 1, CURRENT STATE [margin-bottom: var(--space-4) = 16px], EXPECTED STATE [margin-bottom: var(--space-4) = 16px], SEVERITY: ACCEPTABLE**

AD-004 `header h1` has `margin-bottom: var(--space-4)` (16px). OD-004 `.exploration-title` has `margin-bottom: var(--space-4)` (16px). These match. Convention Section 4 specifies `margin-bottom: var(--space-4)` for the title. Compliant.

---

### Dimension 2: Section-to-Section Spacing

**FINDING [.stratum sections have no explicit margin-bottom between them, axis-layer], DIMENSION 2, CURRENT STATE [gap: 0 on .spiral-container + stratum-transition dividers provide the only separation], EXPECTED STATE [OD-004 uses .stratum { margin-bottom: var(--space-16) } = 64px between strata], SEVERITY: INCONSISTENT**

AD-004 uses `.spiral-container { gap: 0 }` with explicit `.stratum-transition` dividers (48px height each) between strata. OD-004 uses `.stratum { margin-bottom: var(--space-16) }` (64px) plus `.stratum-boundary { padding: var(--space-12) 0 }` (48px top + 48px bottom = 96px) between strata. The combined OD boundary spacing is ~160px. The AD transition zones are only 48px. This is architecturally intentional (the spiral is meant to be tighter) but creates a visually cramped transition compared to the gold standard.

**FINDING [.stratum-transition height, axis-layer line ~591], DIMENSION 2, CURRENT STATE [height: var(--space-12) = 48px], EXPECTED STATE [OD-004 stratum boundary: padding: var(--space-12) 0 = 96px total + 3px line = ~99px visible], SEVERITY: CRAMPED**

The stratum transition zones in AD-004 are 48px total height. In OD-004, the stratum boundary gets `padding: var(--space-12) 0` which means 48px top + 48px bottom = 96px of breathing space, plus the 3px rule line. AD-004's transitions provide roughly half the breathing room of OD-004. This violates OD-F-007 (mode-transition breathing: 48px+), which requires 48px of whitespace on each side, not 48px total.

---

### Dimension 3: Paragraph Spacing

**FINDING [p margin-bottom, locked-layer line ~143], DIMENSION 3, CURRENT STATE [margin-bottom: var(--space-4) = 16px], EXPECTED STATE [OD-004 paragraphs vary by stratum: Established 20px, Probable 16px, Speculative 12px, Open 12px], SEVERITY: INCONSISTENT**

AD-004 uses a uniform `p { margin-bottom: var(--space-4) }` (16px) across all strata. OD-004 varies paragraph spacing per stratum as part of the CRESCENDO density encoding:
- Established: `margin-bottom: var(--space-5)` = 20px
- Probable: `margin-bottom: var(--space-4)` = 16px
- Speculative: `margin-bottom: var(--space-3)` = 12px
- Open: `margin-bottom: var(--space-3)` = 12px

AD-004 misses the stratum-specific paragraph density variation that is a core part of OD-004's GEOLOGICAL + CRESCENDO identity. The uniform 16px flattens the density signal.

---

### Dimension 4: Column Gap

**FINDING [.stratum__content-grid gap, axis-layer line ~656], DIMENSION 4, CURRENT STATE [default gap: var(--space-8) = 32px; established override: var(--space-6) = 24px], EXPECTED STATE [Convention Section 12.3: --grid-gap-standard: var(--space-8) = 32px for between zones; var(--space-4) = 16px within zones], SEVERITY: ACCEPTABLE**

AD-004's content grid uses `gap: var(--space-8)` (32px) as default and `var(--space-6)` (24px) for the tighter established stratum two-column layout. Convention Section 12.3 prescribes `--grid-gap-standard: var(--space-8)` between axis zones and `--grid-gap-tight: var(--space-4)` within. The established stratum uses 24px which falls between tight (16px) and standard (32px), but this is justified by the golden ratio two-column layout density intent (R2-2.3: dense but breathable at core).

---

### Dimension 5: Container Padding

**FINDING [.header-inner padding, locked-layer line ~201], DIMENSION 5, CURRENT STATE [padding: var(--space-12) var(--space-6) = 48px 24px], EXPECTED STATE [OD-004 .exploration-header: padding: var(--space-16) var(--space-8) = 64px 32px; Convention Section 4: padding: var(--space-16) var(--space-8)], SEVERITY: BROKEN**

AD-004's header inner padding is `48px 24px`. Both OD-004 and the Convention Spec Section 4 specify `padding: var(--space-16) var(--space-8)` = `64px 32px`. This is a clear convention violation. The header feels cramped compared to the gold standard.

**FINDING [.page-container padding, locked-layer line ~251], DIMENSION 5, CURRENT STATE [padding: var(--space-12) var(--space-6) = 48px 24px], EXPECTED STATE [OD-004 .page-container: padding: 0 var(--space-6) = 0 24px with padding-bottom: var(--space-24) = 96px], SEVERITY: INCONSISTENT**

AD-004's page container uses `padding: 48px 24px` uniformly. OD-004 uses `padding: 0 var(--space-6)` for horizontal and `padding-bottom: var(--space-24)` (96px) for footer breathing. The side padding matches (24px), but AD-004 applies 48px top padding where OD-004 has 0 (letting the first element's own margin handle spacing). This is minor but creates a different vertical rhythm at the top of the content area.

---

### Dimension 6: Margin Consistency

**FINDING [callout margin-bottom, locked-layer line ~302], DIMENSION 6, CURRENT STATE [.callout margin-bottom: var(--space-8) = 32px], EXPECTED STATE [OD-004 .callout margin: var(--space-6) 0 = 24px top and bottom], SEVERITY: INCONSISTENT**

AD-004 callouts use `margin-bottom: var(--space-8)` (32px) with no top margin. OD-004 callouts use `margin: var(--space-6) 0` (24px top + 24px bottom). The AD callout bottom margin is larger (32px vs 24px) but has no top margin, creating asymmetric spacing. OD-004's symmetric approach is more consistent.

---

### Dimension 7: Vertical Rhythm

**FINDING [body line-height, locked-layer line ~122], DIMENSION 7, CURRENT STATE [line-height: 1.6], EXPECTED STATE [OD-004 body line-height: 1.7], SEVERITY: CRAMPED**

AD-004 body text uses `line-height: 1.6`. OD-004 uses `line-height: 1.7`. The convention spec does not explicitly lock body line-height, but OD-004 established 1.7 as the standard. The 0.1 difference compounds across the page, making AD-004 text blocks perceptibly tighter.

**FINDING [p max-width, locked-layer line ~142], DIMENSION 7, CURRENT STATE [max-width: 70ch], EXPECTED STATE [OD-004 varies: Established 720px (~60ch), general p has no max-width], SEVERITY: ACCEPTABLE (SEE NOTE)**

AD-004 sets a global `p { max-width: 70ch }`. OD-004 sets per-stratum content widths (Established: `max-width: 720px`). The 70ch limit is a reasonable general-purpose value from the locked layer. Not a finding per se, but noted as a divergence in approach.

---

### Dimension 8: Responsive 768px

**FINDING [@media 768px responsive rules, axis-layer line ~801], DIMENSION 8, CURRENT STATE [Collapses established grid, comparison grid, and spiral map at 768px], EXPECTED STATE [OD-004 collapses comparison-grid, strata-inventory, survey-meta, exploration-meta at 768px], SEVERITY: ACCEPTABLE**

AD-004 properly collapses multi-column grids at 768px per Convention Section 12.5. The responsive behavior matches the convention binary rule: all multi-column grids collapse to single column at 768px. No issues found.

---

### Dimension 9: Header Meta Spacing

**FINDING [.meta-line margin-bottom, locked-layer line ~211], DIMENSION 9, CURRENT STATE [margin-bottom: var(--space-2) = 8px], EXPECTED STATE [OD-004 .exploration-id margin-bottom: var(--space-2) = 8px], SEVERITY: ACCEPTABLE**

The meta line spacing matches between AD and OD (8px below the ID line). However, note the header padding issue from Dimension 5 which compounds to make the entire header area feel tighter.

---

### Dimension 10: Table Cell Padding

**FINDING [th/td padding, locked-layer lines ~359/367], DIMENSION 10, CURRENT STATE [th: padding: var(--space-3) var(--space-4) = 12px 16px; td: padding: var(--space-3) var(--space-4) = 12px 16px], EXPECTED STATE [OD-004 uses no explicit table styles; comparison-column p and ul within grid cells handle spacing], SEVERITY: ACCEPTABLE**

AD-004 defines table styles in the locked layer with `12px 16px` cell padding. OD-004 does not use HTML tables directly (it uses grid-based comparison layouts). The AD table padding values use proper spacing tokens and are reasonable. No convention violation.

---

### Dimension 11: List Item Spacing

**FINDING [.open-questions li padding, axis-layer line ~781], DIMENSION 11, CURRENT STATE [padding: var(--space-4) 0 = 16px top/bottom], EXPECTED STATE [OD-004 ul li: margin-bottom: var(--space-2) = 8px], SEVERITY: INCONSISTENT**

AD-004's open questions list items use `padding: 16px 0` (32px total vertical per item). OD-004's list items use `margin-bottom: 8px`. The AD list items have 4x the vertical spacing of OD list items. While this is somewhat justified by the "Open" stratum's sparse-whitespace intent, it creates a very different visual density from the gold standard's list styling.

---

### Dimension 12: Inline Code Padding

**FINDING [inline code padding, locked-layer line ~291], DIMENSION 12, CURRENT STATE [padding: 2px 6px], EXPECTED STATE [OD-004 inline code: padding: 1px 5px; Convention Section 3: padding: 2px 6px], SEVERITY: ACCEPTABLE**

AD-004 uses `padding: 2px 6px` for inline code. OD-004 uses `padding: 1px 5px`. The Convention Spec Section 3 specifies `padding: 2px 6px`. AD-004 follows the convention spec exactly. OD-004 is actually the one diverging here (slightly tighter). No issue for AD-004.

---

## Critical Findings Summary

| # | Selector | Dim | AD Value | OD/Conv Value | Severity |
|---|----------|-----|----------|---------------|----------|
| 1 | `.header-inner` padding | 5 | 48px 24px | 64px 32px (conv) | **BROKEN** |
| 2 | `body` line-height | 7 | 1.6 | 1.7 (OD gold) | **CRAMPED** |
| 3 | `.stratum-transition` height | 2 | 48px total | ~99px (OD) | **CRAMPED** |
| 4 | `p` margin-bottom uniformity | 3 | 16px everywhere | Varies 20/16/12/12px per stratum (OD) | **INCONSISTENT** |
| 5 | `.callout` margin model | 6 | 0 top / 32px bottom | 24px top / 24px bottom (OD) | **INCONSISTENT** |
| 6 | `.page-container` padding | 5 | 48px 24px | 0 24px + 96px bottom (OD) | **INCONSISTENT** |
| 7 | `.open-questions li` padding | 11 | 16px top/bottom | 8px bottom (OD) | **INCONSISTENT** |
| 8 | Section-to-section gap model | 2 | gap:0 + 48px dividers | 64px margins + 96px boundaries (OD) | **INCONSISTENT** |
| 9 | `.stratum-transition` breathing | 2 | 48px total | 96px+ (OD) | **CRAMPED** |

---

## Recommendations

### Must Fix (BROKEN)
1. **Header padding** (Finding #1): Change `.header-inner` padding from `var(--space-12) var(--space-6)` to `var(--space-16) var(--space-8)` per Convention Section 4. This is a direct convention violation.

### Should Fix (CRAMPED)
2. **Body line-height** (Finding #2): Change `body { line-height: 1.6 }` to `line-height: 1.7` to match OD gold standard.
3. **Stratum transition breathing** (Findings #3, #9): Consider adding vertical padding inside `.stratum-transition` (e.g., `padding: var(--space-6) var(--space-8)` instead of relying solely on the 48px height) to approach OD-004's ~96px breathing zones.

### Consider Fixing (INCONSISTENT)
4. **Paragraph spacing per stratum** (Finding #4): Add stratum-specific paragraph margin-bottom overrides to encode CRESCENDO density (larger margins in Established, smaller in Open).
5. **Callout margins** (Finding #5): Unify callout margin to symmetric `margin: var(--space-6) 0` to match OD-004.
6. **List item spacing** (Finding #7): Reduce open-questions list item padding to be closer to OD norms, or document why 16px padding is intentional for the sparse Open stratum.

---

## Convention Compliance Matrix

| Convention Section | Status | Notes |
|-------------------|--------|-------|
| Sec 1: Soul Compliance | PASS | border-radius: 0, box-shadow: none confirmed |
| Sec 2: Border System | PASS | 3-category system respected, semantic gradient documented |
| Sec 3: Code Block Theme | PASS | Dark theme, correct padding |
| Sec 4: Header Layout | **FAIL** | Padding 48px/24px vs required 64px/32px |
| Sec 5: Type Scale | PASS | All 5 levels present and correct |
| Sec 6: Spacing Tokens | PASS | All tokens present, Gestalt aliases included |
| Sec 7: Color Application | PASS | Locked palette respected |
| Sec 10: Unified :root | PASS | Complete :root block matches convention |
| Sec 11: Base Styles | PASS | Reset, selection, focus, skip-link, reduced-motion, print all present |
| Sec 12: CSS Grid | PASS | Named areas used, fr units, token-based gaps |
| Sec 16: Accessibility | PASS | Source order matches reading order, sections have aria-labels |
