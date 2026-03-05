# Gate Naming Map: GR-XX (V3 gate-runner-core.js) <-> SC-XX (Pipeline gate-runner.md)

**Created:** 2026-02-25 (Wave 0, MUST-14)
**Purpose:** Eliminates naming confusion between the two gate naming systems used across analysis files and spec files.

---

## Two Systems

- **GR-XX** — Gates as implemented in `gate-runner-core.js` (V3 pipeline, extracted/operational)
- **SC-XX** — Gates as defined in `design-system/pipeline/gate-runner.md` (Flagship pipeline, specification-level)
- **DG-X** — Diagnostic/deliverable gates in gate-runner.md (not implemented in gate-runner-core.js)

The SC-XX system is the SPECIFICATION. The GR-XX system is the IMPLEMENTATION. They evolved independently and do NOT have 1:1 correspondence.

---

## Identity Gates

| GR-XX | SC-XX | Name | Notes |
|-------|-------|------|-------|
| GR-01 | SC-01 | Container Width (940-960px) | Direct correspondence |
| GR-02 | SC-02 | Border Radius = 0 (Sharp Surfaces) | Direct correspondence |
| GR-03 | SC-03 | Box Shadow = none (No Shadows) | Direct correspondence |
| GR-04 | SC-06 | No Gradients | SC-06 = No Gradients in identity-perception.md |
| GR-05 | SC-04 | Warm Palette (Visible) | GR-05 now unified with GR-07 (Wave 0). SC-04 = Warm Palette |
| GR-06 | SC-05 | Font Trinity | SC-05 = Font Trinity |
| GR-07 | SC-04 (partial) | No Pure Black/White (Visible Text) | Merged into GR-05 eval block, now RECOMMENDED |
| GR-08 | SC-07 | No Decorative Elements | SC-07 = Zero Decorative Elements |
| GR-09 | SC-08 | Border Weight Hierarchy (4/3/1px) | SC-08 = Border-Weight Hierarchy |
| GR-10 | SC-09 | Header DNA (dark bg + 3px red border) | SC-09 = Header DNA |

## Perception Gates

| GR-XX | SC-XX | Name | Notes |
|-------|-------|------|-------|
| GR-11 | SC-09 (partial) | Background Delta >= 15 RGB | Part of SC-09 bg delta check |
| GR-12 | -- | Letter Spacing >= 0.025em | REMOVED (Wave 0) — absorbed into GR-18 |
| GR-13 | SC-10 | Stacked Gap <= 120px (CSS sum) | SC-10 = stacked gap |
| GR-14 | SC-10 (visual) | Total Visual Gap <= 150px | GR-14 adds getBoundingClientRect measurement |
| GR-15 | -- | Single Margin <= 96px | No SC equivalent — GR-only cap on individual values |
| GR-44 | -- | Trailing Whitespace Void | No SC equivalent — post-build-only void detection |
| GR-60 | -- | Text Contrast Legibility (WCAG AA) | NEW (Wave 0) — no SC equivalent |

## Anti-Pattern Gates (RECOMMENDED/ADVISORY)

| GR-XX | SC-XX | Name | Tier |
|-------|-------|------|------|
| GR-17 | -- | AP-01 Density Stacking | RECOMMENDED |
| GR-18 | -- | AP-09 Ghost Mechanisms (incl. letter-spacing from GR-12) | RECOMMENDED |
| GR-19 | -- | AP-10 Threshold Gaming | ADVISORY (downgraded Wave 0) |
| GR-20 | -- | AP-11 Structural Echo | RECOMMENDED |
| GR-21 | -- | AP-14 Cognitive Overload (Bg Proxy) | ADVISORY |
| GR-22 | -- | AP-02 Color Zone Conflict (Red Role) | ADVISORY |

## Output/Deliverable Gates

| GR-XX | SC-XX | Name | Notes |
|-------|-------|------|-------|
| GR-43 | -- | Self-Evaluation Comment | RECOMMENDED (downgraded Wave 0) |

## Wave 2 Gates

| GR-XX | SC-XX | Name | Notes |
|-------|-------|------|-------|
| GR-45 | SC-11 (partial) | Typography Variation | SC-11 = typography zones |
| GR-46 | -- | Component Diversity | ADVISORY |
| GR-50 | -- | Responsive Breakpoints | ADVISORY |
| GR-51 | SC-15 (partial) | Border Presence | SC-15 = border presence |
| GR-52 | SC-13 (partial) | Multi-Coherence Proxy | SC-13 = multi-coherence |
| GR-53 | -- | Accessible Landmarks | ADVISORY |

## Meta Gates

| GR-XX | SC-XX | Name | Notes |
|-------|-------|------|-------|
| GR-48 | -- | Gate Coverage Completeness | GR-only meta-gate |
| GR-49 | -- | Gate Result File Integrity | GR-only meta-gate |

## Brief Verification Gates (pre-build, text-only)

| GR-XX | SC-XX | Name | Notes |
|-------|-------|------|-------|
| BV-01 | -- | Tier Line Budget | Brief-only gate |
| BV-02 | -- | Background Delta Verification | Brief-only gate |
| BV-03 | -- | Recipe Format Verification | Brief-only gate |
| BV-04 | -- | Suppressor Scan | Brief-only gate |

## SC-XX Gates WITHOUT GR-XX Implementation

These gates exist in `gate-runner.md` but have no corresponding implementation in `gate-runner-core.js`:

| SC-XX | Name | Why No GR |
|-------|------|-----------|
| SC-00 | Zone Selector Validation | Pre-gate; GR system assumes zones exist |
| SC-12 | Zone Count | Structural; GR system does not count zones directly |
| SC-13B | Multi-Coherence Direction | Compositional; requires semantic analysis beyond DOM |
| SC-14 | Letter-Spacing (3 sub-checks) | Sub-checks 1-2 absorbed into GR-18; sub-check 3 not implemented |
| SC-16 | Monotonic Progression | Sequential compositional check; no GR equivalent |
| SC-17 | Parametric Echo vs TC Brief | Cross-file verification; no GR equivalent |
| DG-1 | Gate Result Deliverable | Process-level; GR-49 partial overlap |
| DG-2 | Cross-Validation | Depends on SC-13 measured values |
| DG-3 | HTML Structure | Structural; GR-08 partial overlap |
| DG-4 | PA Context Deliverable | Process-level; no GR equivalent |

## Tier Changes (Wave 0)

| Gate | Previous Tier | New Tier | Reason |
|------|--------------|----------|--------|
| GR-07 | REQUIRED | RECOMMENDED | Merged into GR-05 evaluation; visible-text-only scope |
| GR-12 | REQUIRED | REMOVED (absorbed into GR-18 RECOMMENDED) | Sub-perceptual range, redundant with ghost detection |
| GR-43 | REQUIRED | RECOMMENDED | Self-evaluation is useful but not gate-blocking |
| GR-19 | RECOMMENDED | ADVISORY | Threshold gaming is heuristic, high false-positive rate |
| GR-60 | -- | REQUIRED (NEW) | WCAG 2.1 AA contrast is a real accessibility requirement |

---

*End of naming map. File: `ephemeral/va-extraction/gate-naming-map.md`*
