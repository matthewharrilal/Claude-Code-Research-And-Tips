# Hygiene Spacing Audit: AD-005 Choreography

**Auditor:** Hygiene-Auditor-A (Spacing & Layout)
**File:** `explorations/axis/AD-005-choreography.html`
**Gold Standard:** `explorations/organizational/OD-005-spatial.html`
**Convention:** `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md`

---

## Summary

AD-005 spacing is **well-aligned** with both the OD-005 gold standard and the AD Convention Spec. The locked-layer tokens are correctly applied. Most findings are ACCEPTABLE or minor INCONSISTENT deviations reflecting intentional AD axis-layer design differences (hub-grid topology vs. OD's auto-fit territory grid). No BROKEN findings. One CRAMPED finding related to callout label sizing.

**Findings:** 8 total (0 BROKEN, 1 CRAMPED, 3 INCONSISTENT, 4 ACCEPTABLE)

---

## Dimension-by-Dimension Audit

### Dimension 1: Title-to-Content Spacing

**FINDING 1** [header h1 margin-bottom, locked-layer line ~279]
- DIMENSION: 1
- CURRENT STATE (AD): `header h1 { margin-bottom: var(--space-4); }` = 16px
- EXPECTED STATE (OD): `.exploration-title { margin-bottom: var(--space-4); }` = 16px
- SEVERITY: **ACCEPTABLE**
- Notes: Exact match. Both use --space-4 (16px) between title and subtitle. Convention Spec Section 4 confirms `margin-bottom: var(--space-4)` for title.

### Dimension 2: Section-to-Section Spacing

**FINDING 2** [.spoke-section margin-bottom, axis-layer line ~764]
- DIMENSION: 2
- CURRENT STATE (AD): `.spoke-section { margin-bottom: var(--space-between); }` = 32px
- EXPECTED STATE (OD): `.spoke-section { margin-bottom: var(--space-8); }` = 32px
- SEVERITY: **ACCEPTABLE**
- Notes: Equivalent value. AD uses the Gestalt semantic alias `--space-between` which resolves to `var(--space-8)` = 32px. Same effective spacing. AD is arguably more semantically correct by using the alias.

**FINDING 3** [.hub-grid margin-bottom, axis-layer line ~599]
- DIMENSION: 2
- CURRENT STATE (AD): `.hub-grid { margin-bottom: var(--space-chapter); }` = 64px
- EXPECTED STATE (OD): `.hub { margin: var(--space-12) 0 var(--space-20) 0; }` = bottom margin 80px
- SEVERITY: **INCONSISTENT**
- Notes: AD uses 64px between hub grid and next section; OD uses 80px. The AD value is still generous (per Convention Spec Section 6, `--space-chapter` = 64px is the chapter-level spacing). OD's 80px is more generous, providing extra breathing between hub overview and first spoke. The 16px difference is noticeable but not cramped given the diagonal transition element that follows adds its own 80px padding.

### Dimension 3: Paragraph Spacing

**FINDING 4** [p margin-bottom, locked-layer line ~190]
- DIMENSION: 3
- CURRENT STATE (AD): `p { margin-bottom: var(--space-4); }` = 16px
- EXPECTED STATE (OD): `.spoke-section p { margin-bottom: var(--space-4); }` = 16px
- SEVERITY: **ACCEPTABLE**
- Notes: Exact match. Both use 16px paragraph spacing. Convention Spec Section 6 spacing scale confirms this is appropriate.

### Dimension 4: Column Gap

**FINDING 5** [.hub-grid gap, axis-layer line ~598]
- DIMENSION: 4
- CURRENT STATE (AD): `.hub-grid { gap: var(--space-6); }` = 24px
- EXPECTED STATE (OD): `.territory-grid { gap: var(--space-6); }` = 24px
- SEVERITY: **ACCEPTABLE**
- Notes: Exact match. Both territory grids use 24px gaps. Convention Spec Section 12.3 allows `--space-4` (tight), `--space-8` (standard), or `--space-16` (wide) for grid gaps. The 24px value (`--space-6`) sits between tight and standard, matching the OD gold standard perfectly.

### Dimension 5: Container Padding

**FINDING 6** [.page-container, .spoke-content, .header-inner padding]
- DIMENSION: 5
- CURRENT STATE (AD):
  - `.page-container { padding: var(--space-12) var(--space-6); }` = 48px top/bottom, 24px left/right
  - `.spoke-content { padding: var(--space-12) var(--space-6); }` = 48px top/bottom, 24px left/right
  - `.header-inner { padding: var(--space-12) var(--space-6); }` = 48px top/bottom, 24px left/right
- EXPECTED STATE (OD):
  - `.page-container { padding: 0 var(--space-6); padding-bottom: var(--space-20); }` = 0 top, 24px left/right, 80px bottom
  - `.exploration-header { padding: var(--space-16) var(--space-8); }` = 64px top/bottom, 32px left/right
- SEVERITY: **INCONSISTENT**
- Notes: Two differences here.
  1. **Header padding:** AD uses 48px/24px vs OD's 64px/32px. Convention Spec Section 4 specifies `padding: var(--space-16) var(--space-8)` (64px/32px). AD's header is tighter than spec. However, AD's header has an inner wrapper with `max-width: 860px; margin: 0 auto` which matches the convention's inner wrapper pattern.
  2. **Page container:** AD applies 48px top padding to page-container and spoke-content sections. OD has 0 top padding on page-container (relying on the hub's own 48px top margin). The AD approach of consistent 48px vertical padding is uniform but diverges from OD's asymmetric approach.

### Dimension 6: Margin Consistency

**FINDING 7** [.callout margin-bottom, locked-layer line ~348 vs OD line ~780]
- DIMENSION: 6
- CURRENT STATE (AD): `.callout { margin-bottom: var(--space-8); }` = 32px
- EXPECTED STATE (OD): `.callout { margin: var(--space-6) 0; }` = 24px top and bottom
- SEVERITY: **INCONSISTENT**
- Notes: AD callouts have 32px bottom margin only (no top margin). OD callouts have 24px top and bottom. The AD approach creates slightly more separation after callouts but no separation before them. In practice, callouts in AD are inside `.spoke-section` containers which have their own spacing, so the visual effect is acceptable. However, the asymmetric margin (bottom only) vs OD's symmetric margin (top + bottom) is a stylistic divergence.

### Dimension 7: Vertical Rhythm

- DIMENSION: 7
- CURRENT STATE (AD): Body line-height 1.6, headings 1.2, code 1.5
- EXPECTED STATE (OD): Body line-height 1.7, headings 1.2, code 1.5
- SEVERITY: **ACCEPTABLE** (minor)
- Notes: AD body line-height is 1.6 vs OD's 1.7. Convention Spec does not explicitly lock body line-height. The 0.1 difference is barely perceptible. Both use identical heading (1.2) and code (1.5) line-heights. AD's callout body line-height is 1.6, matching its body line-height.

### Dimension 8: Responsive 768px Behavior

- DIMENSION: 8
- CURRENT STATE (AD): At 768px, `.hub-grid` collapses to `grid-template-columns: 1fr` with all named areas stacked. `.axis-transition` drops `clip-path` and gains `border-top: 3px solid`.
- EXPECTED STATE (OD): At 768px, `.spoke-grid` collapses to `grid-template-columns: 1fr`. Territory grid uses `auto-fit minmax(280px, 1fr)` which naturally collapses.
- SEVERITY: **ACCEPTABLE**
- Notes: Both correctly collapse to single-column at 768px per Convention Spec Section 12.5. AD also has an intermediate 1440px breakpoint (4-col to 2-col) that OD doesn't need (OD uses auto-fit). The responsive behavior is appropriate for each file's distinct grid topology.

### Dimension 9: Header Meta Spacing

- DIMENSION: 9
- CURRENT STATE (AD): `.meta-line { margin-bottom: var(--space-2); }` = 8px between meta-line and title. Meta-line uses `display: flex; gap: var(--space-4);` between items.
- EXPECTED STATE (OD): `.exploration-id { margin-bottom: var(--space-2); }` = 8px between ID line and title. `.exploration-meta { gap: var(--space-6); margin-top: var(--space-4); }` = 24px gap between meta items, 16px above meta block.
- SEVERITY: **ACCEPTABLE**
- Notes: Meta-to-title spacing matches (8px). AD's meta items use 16px gap vs OD's 24px gap between inline meta elements. AD also places meta items within the meta-line itself (before title) rather than after the subtitle (OD pattern). This is a layout difference, not a spacing error. Convention Spec Section 4 shows meta above title, matching AD.

### Dimension 10: Table Cell Padding

- DIMENSION: 10
- CURRENT STATE (AD): `th { padding: var(--space-3) var(--space-4); }` = 12px/16px. `td { padding: var(--space-3) var(--space-4); }` = 12px/16px.
- EXPECTED STATE (OD): `.decision-table th { padding: var(--space-3) var(--space-4); }` = 12px/16px. `.decision-table td { padding: var(--space-3) var(--space-4); }` = 12px/16px.
- SEVERITY: **ACCEPTABLE**
- Notes: Exact match. Both use identical 12px vertical / 16px horizontal padding for table cells.

### Dimension 11: List Item Spacing

- DIMENSION: 11
- CURRENT STATE (AD): No explicit list-item styling (no `<ul>` or `<ol>` elements in the HTML body content).
- EXPECTED STATE (OD): `.sidebar-panel__list { line-height: 1.8; padding-left: var(--space-4); }` for sidebar reference lists.
- SEVERITY: **ACCEPTABLE**
- Notes: AD-005 does not use lists in its content — it uses grid tiles, tables, code blocks, and callouts. OD-005 uses lists only in sidebar reference panels (which AD-005 does not have, since it uses a different spoke layout). No comparison applicable.

### Dimension 12: Inline Code Padding

**FINDING 8** [code:not(pre code) padding, locked-layer line ~337]
- DIMENSION: 12
- CURRENT STATE (AD): `code:not(pre code) { padding: 2px 6px; font-size: 0.9em; }` + `border: 1px solid var(--color-border);`
- EXPECTED STATE (OD): `.inline-code { padding: 1px 5px; font-size: 13px; }` + `border: 1px solid var(--color-border);`
- SEVERITY: **ACCEPTABLE**
- Notes: AD uses 2px/6px padding vs OD's 1px/5px. The 1px difference is sub-pixel negligible. Convention Spec Section 3 specifies `padding: 2px 6px` for inline code, so AD actually matches the spec more precisely than OD. AD font-size is 0.9em (~14.4px at 16px body) vs OD's fixed 13px. AD is closer to convention spec which says `font-size: 0.9em`.

---

## Additional Spacing Observations

### Callout Label Font Size
**FINDING 9** [.callout__label font-size, locked-layer line ~354]
- DIMENSION: 6 (margin consistency / component internal spacing)
- CURRENT STATE (AD): `.callout__label { font-size: 0.625rem; }` = 10px
- EXPECTED STATE (OD): `.callout .callout__label { font-size: 12px; }`
- SEVERITY: **CRAMPED**
- Notes: AD callout labels are 10px vs OD's 12px. At 10px, the label text is notably small and may compromise readability. Convention Spec Section 5 defines `--type-meta: 0.75rem` (12px) as the smallest type token. The AD value of 0.625rem (10px) goes BELOW the smallest defined token, which is a spacing/typography violation. Should use `var(--type-meta)` = 12px.

### Breathing Zone Padding
- CURRENT STATE (AD): `.breathing-zone { padding: var(--space-12) var(--space-6); }` = 48px/24px
- EXPECTED STATE (OD): `.spoke-divider { margin: var(--space-20) 0; }` = 80px top/bottom (as a 1px line)
- Notes: Different implementations. OD uses a thin divider line with generous 80px margins. AD uses a full breathing zone section with 48px padding + structural borders. Both achieve mode-transition breathing. AD's total breathing footprint is larger due to the background-colored zone content, while OD's is pure whitespace. Convention Spec Section 8 requires 15% whitespace; both approaches satisfy this.

### Axis Transition Padding
- CURRENT STATE (AD): `.axis-transition { padding: var(--space-20) var(--space-6); }` = 80px/24px
- Notes: The diagonal clip-path transition zones use generous 80px vertical padding. This matches the OD-F-007 requirement for 48px+ between mode transitions, exceeding the minimum. At 768px mobile, this drops to `var(--space-12) var(--space-6)` = 48px/24px, still meeting the minimum.

---

## Severity Summary

| Severity | Count | Findings |
|----------|-------|----------|
| BROKEN | 0 | — |
| CRAMPED | 1 | Finding 9 (callout label 10px vs 12px minimum) |
| INCONSISTENT | 3 | Findings 3, 6, 7 (hub-to-spoke gap, header padding, callout margins) |
| ACCEPTABLE | 5 | Findings 1, 2, 4, 5, 8 (exact matches or negligible differences) |

---

## Recommendation

The single CRAMPED finding (callout label font-size at 10px / 0.625rem) should be corrected to `var(--type-meta)` (12px / 0.75rem) to comply with the type scale minimum. The three INCONSISTENT findings are minor and reflect intentional AD architectural choices (axis transitions, consistent section padding) rather than errors. No BROKEN spacing found.
