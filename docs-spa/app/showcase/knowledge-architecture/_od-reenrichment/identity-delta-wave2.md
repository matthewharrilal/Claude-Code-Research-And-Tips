<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/identity-delta-wave2.md
BUILT ON: research-package-od-003.md (discoveries), research-package-od-005.md (discoveries), verification-wave2.md, identity-delta-wave1.md
CONSUMED BY: researcher-3a, researcher-3b, builder-3a, builder-3b, identity-delta-wave3, ACCUMULATED-IDENTITY v1.2
END INLINE THREADING HEADER
-->

# Identity Delta — Wave 2 (OD-003 + OD-005)

## What Surprised

1. **Collapsible islands transform ISLANDS from spatial pattern to navigation paradigm.** Builder-2a's `<details>` wrapping (EXT-TASK-018) created something new: when collapsed, 6 island headers form a visual table of contents — the reader sees the entire archipelago at a glance. Each expansion is a deliberate "visit." This is the first OD where the READER controls density distribution. Neither OD-001 (linear scroll) nor OD-002 (sequential narrative) offer this. **Identity refinement:** ISLANDS pattern has two modes — static (spatial arrangement) and interactive (wayfinding system). Wave 3 ODs should consider which mode applies.

2. **The 3-category border system scales cleanly to 471+ thin borders.** Identity-delta-wave1 posed this as an open question. Answer: YES. The overwhelming majority were Cat 3 micro borders (step markers, task-map squares) that convert to 1px. The 2px→1px conversion actually IMPROVED island structure by increasing contrast between heavy structural borders (3px+) and light internal borders (1px).

3. **Dark header creates stronger LANDMARK effect on spatial layouts than conversational ones.** Builder-2b discovered that OD-005's dark header → light hub → dense spokes creates a three-phase density cascade (landmark → breathing → content) that's more dramatic than OD-001's two-phase cascade. The hub-spoke pattern amplifies the convention spec's dark header into a Kevin Lynch wayfinding anchor.

4. **Zone token renaming carries dual semantics.** Renaming `--color-hub-bg` to `--color-zone-sparse` communicates BOTH spatial architecture ("zone") AND density dimension ("sparse/dense/breathing"). The old names communicated only one. This dual-semantic naming should be standard for all future ODs.

5. **Static vs animated offset is a binary rule, not a judgment call.** Builder-2b discovered that removing OD-005's hover transform required removing BOTH the tile AND `::after` pseudo-element animations. A static solid offset = flat graphic (acceptable). An animated offset that syncs with tile movement = physics simulation (spirit violation). The distinction: does the offset move? If yes → FAIL. If no → PASS.

## Identity Refinements

- **ISLANDS dual mode:** ISLANDS pattern now has static mode (spatial) and interactive mode (wayfinding via collapse/expand). Interactive mode gives the reader density control.
- **Compound density confirmed:** OD-003 achieved ISLANDS + CRESCENDO simultaneously — island SEQUENCE is CRESCENDO (beginner→advanced) while island ARRANGEMENT is ISLANDS. Two patterns at different scales.
- **Dark header map as fractal echo:** Builder-2a's archipelago map (6 small squares in dark header) is DD-F-006 at miniature scale — the reader encounters the page structure twice at different sizes.
- **WAVE density self-documentation:** OD-005's fixed sidebar wave indicator (EXT-SPAT-018) transforms the page from "demonstrates WAVE density" to "SHOWS its own density in real time." First OD where the hypothesis is empirically visible to the reader.
- **Keyboard spatial navigation validates hub-spoke:** Arrow-key navigation on the territory grid (EXT-SPAT-014) proves the spatial pattern supports fundamentally different interaction from linear layouts. AD work should preserve 2D grid navigability.
- **Comprehensive reduced-motion supersedes per-component rules:** Convention spec's `*, *::before, *::after { animation-duration: 0.01ms !important }` is prophylactic — prevents failure by making compliance the default. All ODs should use this single-rule approach.

## SOUL FAIL Summary (from researchers)
- Researcher-2a: 4 SOUL FAILs. Pattern: decorative depth — rounded progress steppers, card shadows for hierarchy, gradient connectors, animated step transitions. 100% involve depth illusion through shadows, gradients, rounded shapes, or animated spatial movement.
- Researcher-2b: 3 SOUL FAILs. Pattern: movement implying z-depth — transform hover lift (current OD-005), scale-up hover, CSS perspective/3D transforms. 100% involve movement that implies the element exists at a different z-depth.
- **Combined pattern:** 7/7 SOUL FAILs continue the ANTI-PHYSICAL identity from Wave 1 (now 13/13 total across Waves 1+2). The system consistently rejects: (a) decorative depth, (b) animated z-movement, (c) rounded shapes suggesting physical objects, (d) gradients suggesting light/material.

## New Questions for Wave 3 (OD-004 + OD-006)

1. **OD-004's GEOLOGICAL density + CRESCENDO — does the geological metaphor imply physical depth?** Geological layers are inherently 3D (stratification = depth). Does OD-004 achieve its geological metaphor through flat visual layering (color banding, border weight variation) or through depth cues that would trigger the ANTI-PHYSICAL identity? This is the hardest soul test yet — the metaphor itself suggests physicality.

2. **OD-006 uses ALL density patterns (FRACTAL primary) — what happens when compound patterns exceed 2?** OD-003 achieved 2 simultaneous patterns (ISLANDS + CRESCENDO). OD-006 claims to use ALL patterns. Does this work as rich complexity or collapse into noise? Is there an upper bound on simultaneous density patterns?

3. **The WAVE self-documentation pattern (OD-005) — should OD-004/006 also make their density visible?** If OD-005's wave indicator proved that showing density enhances the page, should OD-004 show its geological strata and OD-006 show its fractal nesting? Or is density self-documentation only appropriate for spatial patterns?
