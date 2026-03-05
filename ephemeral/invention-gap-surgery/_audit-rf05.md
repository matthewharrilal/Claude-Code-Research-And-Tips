# RF-05 Audit: Content-Form Derivation (4-Stage Gap)

**Source:** `ephemeral/invention-gap-analysis/05-content-form-derivation.md` (481 lines)
**Question:** Does the modified pipeline extract tacit content-form derivation at each of the 4 stages?

## Stage 1 — TC Derivation (`tc-derivation.md`): GAP CLOSED

**Mechanism:** Section 7 ("Structural Observation") is now a mandatory output section requiring content archetype identification (from a 7-row archetype table: Linear Narrative, Parallel Items, Hierarchical Taxonomy, Dialogue/Debate, Branching Paths, Cyclical/Recursive, Hybrid), inherent spatial logic, and a spatial proposition. The source document's core ask — "TC should produce STRUCTURAL OBSERVATIONS, not just metaphors" — is directly addressed. Compositional Questions now include structural question examples (authority-encoded grid, per-section spatial organization). The archetype table operationalizes the previously tacit "what is the content's organizational logic?" step.

## Stage 2 — Synthesizer (`synthesizer-prompt.md`): GAP CLOSED

**Mechanism:** Section 11 ("Structural Propositions") is a new ~50-80 line optional section assembled from TC Section 7 (primary), S3 structural logic extraction, S1 spatial convergence, and S2 validation. Each proposition includes content logic rationale, blueprint CSS with grid/layout code, responsive degradation strategy, risk rating, and a standard vertical alternative. The zone architecture (Section 4) now includes a `Layout: STANDARD VERTICAL / STRUCTURAL` field per zone, acknowledging non-vertical topologies. The ASCII-only density diagram limitation identified in the source still implicitly persists (the diagram format hasn't changed), but the separate Section 11 blueprint CSS compensates — spatial propositions live outside the density diagram rather than being crammed into it.

## Stage 3 — Builder Pass 1 (`builder-pass-1-prompt.md`): GAP CLOSED

**Mechanism:** The Standard/Structural build path explicitly instructs builders to evaluate Section 11 propositions with ADOPT/MODIFY/REJECT decisions. Structural invention is permitted (max 2 per build) when derived from content logic, proposed in Section 11, documented in decisions file, and responsive at all breakpoints. The builder receives blueprint CSS as a starting point. Citation format (`/* STRUCTURAL: [content-logic] — [spatial form] */`) tracks structural decisions. The decisions file includes a dedicated "Structural Choices (Section 11)" section for continuity to Pass 2. Critically, REJECT is a valid option — this avoids the source's concern about prescribing layouts vs. deriving them.

## Stage 4 — Fix Cycles (`refine-builder-prompt.md`): GAP PARTIALLY CLOSED

**Mechanism:** The refine builder now has explicit structural invention handling: TYPE A fixes within structural modules (fix CSS values, preserve layout), TYPE B fixes for broken structural layouts (may revert to standard vertical), and a rule "DO NOT remove structural inventions unless fundamentally broken." This addresses the source's concern that fix cycles couldn't restructure topology. **Remaining gap:** Fix cycles still cannot INTRODUCE structural layouts that were REJECTED or missed in Pass 1. If the builder rejected a Section 11 proposition and the PA audit reveals the vertical stack is structurally flat, the fix cycle has no pathway to adopt the proposition post-hoc. The weaver would need to explicitly direct this, and the refine-builder prompt does not mention Section 11 propositions as a fix source.

## Impact Summary

3 of 4 stages fully closed. Stage 4 is partially closed — structural layouts can be preserved and repaired during fix cycles but cannot be newly introduced. The self-instruction mechanism for spatial content (Section 7 archetype + Section 11 blueprint + Standard/Structural path) is now replicated for non-spatial content via the archetype table's coverage of all content types (not just spatial). The tacit-to-explicit bridge is functional: content logic flows TC Section 7 -> Synthesizer Section 11 -> Builder ADOPT/MODIFY/REJECT -> Fix cycle preservation.
