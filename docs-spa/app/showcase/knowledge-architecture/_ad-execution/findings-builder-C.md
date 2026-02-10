# Findings — Builder C: AD-003 Bento Grid
## Wave 1B | 2026-02-09

---

## Finding AD-F-009: Bento Grid CONTAINS Islands

**Class:** A (Confirming)
**Central Question Answer:** Does bento grid's rigid structure FIGHT or CONTAIN the ISLANDS density pattern? **CONTAIN.**

The bento grid's rigid structure does not fight the ISLANDS density pattern — it provides the structural container that gives ISLANDS their definition. Grid cells ARE the dense islands. Grid gaps ARE the sparse ocean. The rigid grid enforces consistent spacing between islands, which actually IMPROVES the ISLANDS pattern by preventing the "visual chaos" failure mode where islands drift into irregular arrangements.

**Mechanism:** Spatial containment. The grid defines the topology; ISLANDS fills the content within that topology. The grid imposes WHERE islands appear; the content determines HOW DENSE each island is. These are orthogonal concerns, not competing ones.

**3-way unification impact:** CONFIRMS the org-density-axis equivalence found in Wave 1A, but reveals a DIFFERENT mechanism. Wave 1A found TEMPORAL equivalence (Z-sweep IS PULSE beat). Wave 1B Bento Grid finds SPATIAL equivalence (grid cell IS island, grid gap IS ocean). The 3-way unification holds, but it operates through multiple mechanisms — temporal for traversal-based axes (Z, F), spatial for topology-based axes (Bento).

**Key evidence:** The CSS `gap` property in a bento grid IS the sparse ocean of the ISLANDS pattern. This is not a metaphor — the visual effect of `gap: 24px` is literally "empty space between dense content clusters," which is the definition of ISLANDS.

**Forward question for identity delta:** Is the temporal vs spatial distinction a CLASS B extension of the unification hypothesis, or a CLASS C challenge? If the mechanism differs, is it still "equivalence"?

---

## Finding AD-F-010: Cell Size Hierarchy IS ISLANDS Hierarchy

**Class:** A (Confirming)

A 2x2 grid cell occupying 4x the area of a 1x1 cell creates a proportionally larger island. The size of the cell IS the size of the island IS the importance of the content. This three-way mapping (size = density = importance) confirms R4-026 (varied sizes create hierarchy) and extends OD-F-005 (organization IS density) into the axis dimension.

**Mechanism:** A large cell contains more content (higher density), occupies more visual space (larger island), and commands more attention (higher importance). These three properties are not three separate effects of cell size — they are one phenomenon described in three vocabularies.

**Soul compliance note:** This finding is particularly clean from a soul perspective because it achieves hierarchy through SIZE alone — no shadows, no gradients, no decoration. The IS-1 principle (hierarchy through size) maps directly to the bento grid's span syntax. Soul Piece #1 (sharp edges) makes the size difference MORE visible, not less, because sharp-edged cells have crisper boundaries than rounded ones would.

**Anti-pattern contrast:** Apple's bento grid uses rounded corners + shadows to differentiate cells. KortAI's bento uses sharp edges + size differentiation. The soul constraint IMPROVES the axis pattern by forcing hierarchy to be structural rather than decorative.

---

## Finding AD-F-011: Internal Layout Variation Creates Fractal ISLANDS

**Class:** B (Extending)

Each bento grid cell can use a DIFFERENT internal layout template (vertical steps, code-split, annotated, comparison) while maintaining consistent external grid structure. This creates fractal ISLANDS: at the macro scale, cells are islands in the grid ocean; at the component scale, each cell's internal content blocks are micro-islands separated by internal padding.

**Extension:** This extends DD-F-006 (fractal self-similarity at 5 scales) by showing how the ISLANDS pattern specifically manifests at each fractal scale:
- **Page scale:** Bento grid sections (dense) separated by breathing zones (sparse)
- **Section scale:** Grid cells (dense islands) separated by grid gaps (sparse ocean)
- **Component scale:** Content blocks within cells (dense) separated by internal padding (sparse micro-ocean)
- **Character scale:** Code logic (dense) alternating with comments (sparse)

The ISLANDS pattern is not just "present at multiple scales" — it is the SAME structural mechanism (dense cluster + sparse separator) replicated through CSS at decreasing magnifications: `margin-bottom: 80px` (page), `gap: 24px` (section), `padding: 24px` (component), `line-height: 1.5` (character).

**Discovery:** The internal layout variation (Template A/B/C/D from EXT-AXIS-B-004) is an anti-monotony mechanism that DOES NOT break the fractal. Different internal layouts within cells are analogous to different "species" on different islands — varied locally, consistent structurally. This directly addresses the OD-003 structural monotony deficit identified in EXT-TASK-013.

---

## Finding AD-F-012: Compound Bento Density — Grid as Multi-Scale Container

**Class:** B (Extending)

The bento grid enables COMPOUND density by operating BOOKENDS and ISLANDS simultaneously at different scales:
- **BOOKENDS at page scale:** Dense header (front bookend) and dense verification section (back bookend) bracket the sparse-to-moderate middle section.
- **ISLANDS at section scale:** Within the middle section, discrete task cells form islands separated by grid gap ocean.

This compound pattern is NOT two separate density patterns applied sequentially — it is ONE structural phenomenon where the bento grid serves as the container for both patterns at once. The grid's rigid structure makes this possible: BOOKENDS requires a well-defined "start" and "end" (which the grid's source order guarantees), while ISLANDS requires well-defined "clusters" and "gaps" (which the grid's cell+gap structure guarantees).

**Extension:** This extends the OD-003 compound density finding (ISLANDS arrangement + CRESCENDO sequence) by showing that compound density also works with ISLANDS + BOOKENDS, and that the axis grid is the mechanism enabling multi-scale compound patterns.

**Stress-test observation:** The forward question from identity-delta-ad-wave1A.md Q1 asked whether bento grid FIGHTS or CONTAINS islands. The answer is CONTAINS — but more specifically, the grid provides MULTI-SCALE containment. It doesn't just contain islands at one scale; it simultaneously enables BOOKENDS at the page scale and ISLANDS at the section scale. The rigidity is not a constraint — it is the structural precondition for compound density.

---

## Soul Compliance Report

| Check | Status |
|-------|--------|
| `border-radius: 0` everywhere | PASS — enforced globally via locked-layer `*:where(:not(input,button,select))` + no overrides in axis-layer |
| `box-shadow: none` everywhere | PASS — zero box-shadow declarations in axis-layer |
| No `filter: drop-shadow()` | PASS — zero filter declarations |
| No `2px` in axis-layer CSS | PASS — all structural borders 3px (Cat 1), all separators 1px (Cat 2/3) |
| All backgrounds opaque | PASS — backgrounds use only `var(--color-zone-dense)` (#FFFFFF), `var(--color-zone-sparse)` (#FEF9F5), `var(--color-zone-breathing)` (#FAF5ED), `var(--color-text)` (#1A1A1A) |
| Font trio correct | PASS — Instrument Serif (display), Inter (body), JetBrains Mono (code) |
| Version badge | PASS — "v1 enriched" |
| 0 off-palette colors | PASS |

## Citation Count

| Category | Count | Minimum | Status |
|----------|-------|---------|--------|
| R-4 | 18 | 15 | PASS |
| R-2 | 8 | 5 | PASS |
| EXT-AXIS-B-* | 5 | 5 | PASS |

## Deviation Log

No deviations from the convention spec were required. The bento grid pattern mapped cleanly to the AD-CONVENTION-SPEC Section 12.4 template.

---

*Builder C | AD-003 Bento Grid | Wave 1B | 2026-02-09*
