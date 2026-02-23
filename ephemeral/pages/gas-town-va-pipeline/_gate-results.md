# Gate Runner Results — Gas Town VA Pipeline Build
Date: 2026-02-23

## Soul Constraints (SC-01 through SC-10)

| Gate | Check | Result | Detail |
|------|-------|--------|--------|
| SC-01 | Sharp Surfaces (border-radius: 0) | **PASS** | 0 violations |
| SC-02 | No Shadows (box-shadow: none) | **PASS** | 0 violations |
| SC-03 | Container Discipline (940-960px) | **PASS** | 960px max-width on all 6 `.factory-spine` containers |
| SC-04 | Warm Palette | **PASS** | 0 pure black, 0 pure white text elements |
| SC-05 | Font Trinity | **PASS** | Instrument Serif, Inter, JetBrains Mono all present |
| SC-06 | No Gradients | **PASS** | 0 gradient violations |
| SC-07 | Zero Decorative Elements | MANUAL | Requires visual inspection |
| SC-08 | Border-Weight Hierarchy | **PASS** | 3 distinct weights: 4px / 2.67px / 0.67px |
| SC-09 | Header DNA | MANUAL | Dark bg + red border visible in screenshots |
| SC-10 | Typography Foundations | MANUAL | line-height, max-width, h3 italic — visual check |

## Perception Thresholds (PT-01 through PT-05)

| Gate | Check | Result | Detail |
|------|-------|--------|--------|
| PT-01 | Background Delta >= 15 RGB | **PASS** | All 5 adjacent zone boundaries pass: 21, 31, 37, 17, 22 |
| PT-02 | Letter Spacing >= 0.025em | **PASS** | Distinct values: 0.55px, 0.96px, 1px, 1.2px (all well above 0.025em = ~0.4px) |
| PT-03 | Stacked Gaps < 120px | **PASS** | All inter-section gaps: 0px (zones are flush, no void gaps) |
| PT-04 | Single Margin <= 96px | MANUAL | No computed margins > 96px observed |
| PT-05 | Container Width 940-960px | **PASS** | 960px confirmed |

## Background Colors by Zone

| Zone | Background RGB | Role |
|------|---------------|------|
| Z1 Manifesto | rgb(254, 249, 245) | #FEF9F5 — lightest warm cream |
| Z2 Mental Model | rgb(240, 235, 224) | #F0EBE0 — warm tan |
| Z3 8 Roles | rgb(255, 255, 255) | #FFFFFF — clean white (peak density) |
| Z4 Beads | rgb(237, 230, 218) | #EDE6DA — warm sand |
| Z5 Principles | rgb(248, 243, 235) | #F8F3EB — light warm |
| Z6 Implementation | rgb(232, 225, 213) | #E8E1D5 — deepest warm |

## Content Mechanisms

| Type | Count |
|------|-------|
| Tables | 5 |
| Code blocks | 10 |
| ASCII diagrams | 1+ (pre with aria-label) |
| Blockquotes | 3 |
| Callouts | 12 |
| Lists | 9 |
| Collapsible sections | 5 |

## Accessibility

| Check | Result |
|-------|--------|
| ARIA labels | 19 |
| Landmarks | 16 |
| Skip link | Present |
| Heading order | H1 → H2 → H3 (proper hierarchy, no skips) |

## Summary

**Programmatic gates: 10 PASS, 0 FAIL, 4 MANUAL (require visual inspection)**

All automated soul constraints and perception thresholds pass. The 4 MANUAL gates (SC-07 decorative elements, SC-09 header DNA, SC-10 typography foundations, PT-04 single margins) will be assessed by the PA auditors.
