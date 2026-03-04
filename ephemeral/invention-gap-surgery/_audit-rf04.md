# RF-04 Audit: Question Taxonomy Categories 3, 6, 7→3a

**Source:** `ephemeral/invention-gap-analysis/04-question-taxonomy.md` (319 lines)
**Pipeline files checked:** `synthesizer-prompt.md` (Sections 10-11), `tc-derivation.md` (Section 7, Archetype Table, Compositional Questions)

## Category Coverage

### Category 3 (Multi-Axis Structural) — PARTIALLY ADDRESSED
- **TC derivation** now has Section 7 "Structural Observation" requiring content archetype identification (7 archetypes: Linear Narrative, Parallel Items, Hierarchical Taxonomy, Dialogue/Debate, Branching Paths, Cyclical/Recursive, Hybrid) plus a spatial proposition. This is the structural engine the taxonomy found ABSENT.
- **Synthesizer Section 11** (Structural Propositions) assembles TC Section 7 output into builder-facing propositions with blueprint CSS, responsive degradation, and ADOPT/MODIFY/REJECT protocol. Up to 3 propositions per package.
- **Gap remaining:** Structural questions are marked OPTIONAL (0-1 in Section 10, and Section 11 can be empty). The taxonomy identified Category 3 as the *skeleton* that mechanisms hang on — making it optional means linear-scroll-with-zones remains the default. The pipeline CAN now produce structural variety but does not PUSH toward it.

### Category 3a (Content-Derived Structure, was Category 7) — ADDRESSED
- **TC Section 7** directly asks "what spatial organization does this content's logic suggest?" with content archetype table and spatial proposition requirement. This is exactly the "Phase 1.5: Structural Analysis" the taxonomy proposed.
- **Synthesizer Section 11** traces every proposition back to TC Section 7's archetype. Content logic drives form, not metaphor.
- **The causal order is corrected:** TC now derives structure from content archetype BEFORE metaphor application, matching the exploration order (content analysis → structural question → topology → metaphor) rather than the old pipeline order (metaphor → structure follows).

### Category 6 (Meta/Self-Referential) — PARTIALLY ADDRESSED, NARROW
- **Synthesizer Section 10** includes "Structural Self-Awareness" question family: "What if the page SHOWED its own organizational logic via [minimap/progress/annotation]?" (sourced from DD-006, OD-006).
- **Gap remaining:** This addresses self-awareness (page shows its structure) but NOT self-demonstration (page IS its content). The taxonomy distinguished: Category 6 asks "can this page BE its content?" — form IS content. The current pipeline question is about meta-UI (minimaps, scroll witnesses), not about recursive self-reference where the page's structure constitutes its argument. No pipeline stage asks "does the page demonstrate its own thesis?"

### UNDERSTAND axis "nearest miss"
- The taxonomy noted UNDERSTAND "generates cognitive needs → resolves to hierarchy, causality, comparison (CAN be structural, but TC resolves it via mechanisms, not topology)." TC Section 7's archetype table now intercepts this: when content has parallel items, hierarchies, or comparisons, the archetype identification forces a structural question. The UNDERSTAND axis still resolves to texture, but the new Section 7 acts as a structural bypass that catches what UNDERSTAND misses.

## Impact Assessment
- **Category 3/3a:** High-value fix. The pipeline now has the machinery. Risk: "optional" framing may cause builders to skip it. Recommendation: for Hybrid archetypes (which the prompt says are "most real articles"), make at least one structural proposition EXPECTED rather than optional.
- **Category 6:** Low coverage. The "Structural Self-Awareness" family is a surface-level proxy. True self-reference (OD-006's "page that documents itself," DD-006's "fractal page about fractals") requires a question that no family template currently encodes: "Can this page's structure BE its argument?"
