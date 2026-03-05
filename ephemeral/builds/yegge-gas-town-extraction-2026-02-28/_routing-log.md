# Routing Log

**Date:** 2026-02-28
**Creative Verdict:** REFINE (Weaver)
**Gates Failed:** true
**Essential Fail Count:** 7
**Route:** PATCH_THEN_REFINE
**Patches Applied:** 0 (structural color issues deferred to REFINE builder)

## Gate Failures

| Gate | Status | Notes |
|------|--------|-------|
| GR-03 | FAIL | Container reports non-960px — DPR 0.667 artifact. CSS is 960px. |
| GR-05 | FAIL | 111 cold colors + 4 warm-order violations. Accent-blue, accent-green, accent-purple, syntax colors, callout backgrounds all violate R>=G>=B. Structural — requires palette redesign. |
| GR-10 | FAIL | calloutBorderOk false, selectionRedOk false. Component DNA structural. |
| GR-11 | FAIL | 3 boundaries below 15 RGB delta. |
| GR-14 | FAIL | 12 visual gaps >150px — DPR measurement artifact. |
| GR-45 | FAIL | Typography monotony. RECOMMENDED gate, not essential. Structural. |
| GR-60 | FAIL | 154 elements fail WCAG contrast. Stat labels, code comments. |

## Decision

All gate failures are either DPR artifacts (GR-03, GR-14) or structural issues requiring holistic redesign (GR-05 palette, GR-10 component DNA, GR-11 zone deltas, GR-45 typography, GR-60 contrast). Mechanical patching would be incomplete and create inconsistencies. Routing all to REFINE builder who can address them as part of the compositional refinement.
