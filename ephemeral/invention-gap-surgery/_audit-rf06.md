# RF-06 Audit: Structural Invention Universals (Source 06)

**Source:** `ephemeral/invention-gap-analysis/06-structural-invention-universals.md` (480 lines)
**Question:** Archetype table accessible to TC? 18 derivation questions reflected in synthesizer? Builder has archetype-transition guidance?

## 1. Archetype Table — TC Coverage

**Source 06 defines 9 archetypes:** Tutorial, Reference, Argument, Comparison, Exploration, Taxonomy, Timeline, Dialogue, Decision (Appendix table, lines 461-473).
**TC-derivation table has 7 archetypes:** Linear Narrative, Parallel Items, Hierarchical Taxonomy, Dialogue/Debate, Branching Paths, Cyclical/Recursive, Hybrid (lines 97-107).
**Coverage gap:** TC is missing 5 of the source-06 archetypes (Tutorial, Reference, Argument, Comparison, Exploration, Timeline) and adds 3 that source 06 lacks (Linear Narrative, Branching Paths, Cyclical/Recursive). The two tables are substantially different taxonomies — only Taxonomy and Dialogue overlap. TC's table is abstract-structural (how ideas relate); source 06's table is content-functional (what the content IS). The TC agent cannot identify a Tutorial or Comparison section because those archetypes do not exist in its reference table.
**Impact: HIGH.** The entire archetype-to-layout derivation chain breaks at step one. TC identifies "Parallel Items" but never "Tutorial with task islands" or "Comparison needing side-by-side display."

## 2. Derivation Questions (Sets A-D) — Synthesizer Coverage

**Source 06 defines 18 questions across 4 sets:** A (archetype ID, 4 questions), B (content-to-layout, 5 questions), C (spatial implications, 5 questions), D (structural coherence, 4 questions).
**Synthesizer Section 10** covers compositional questions but these are generative "What if..." invitations, not structural derivation questions. Section 10's question families (lines 237-320) come from TC brief + knowledge base templates + cross-specialist synthesis — none map to the 18 derivation questions.
**Synthesizer Section 11** assembly protocol (lines 374-384) references TC Section 7 archetype identification but does not ask any of the 18 derivation questions. It assembles propositions from upstream signals, not from a structured interrogation of content logic.
**Coverage gap:** 0 of 18 derivation questions are present in either Section 10 or Section 11. The synthesizer has no mechanism to ask "What content archetypes are present?" (A1), "Which sections demand non-linear layout?" (C10), or "Does simultaneous content get simultaneous display?" (D18).
**Impact: HIGH.** The structural derivation step that source 06 identifies as missing remains missing. Section 11 can propose structures but has no systematic method to derive them from content logic.

## 3. Archetype Transitions — Builder Guidance

**Source 06 states** archetype transitions are spatial events (lines 201-209): when content shifts from taxonomy to exploration, the layout shift is a design event, not just a heading boundary.
**Builder pass-1 prompt** has no mention of archetype transitions. Section 11 evaluation (lines 69-79) treats structural propositions as per-section modules. The "Rhythmic Diversity" section (lines 284-293) addresses zone-boundary variation but in terms of mechanism diversity (border vs background vs spacing), not archetype-logic transitions.
**Coverage gap:** Builder has zero guidance on recognizing or executing archetype transitions. A section shift from taxonomy-grid to tutorial-islands would be treated as a standard zone boundary, not as a logic-boundary requiring a distinct spatial resolution.
**Impact: MEDIUM.** Even if archetypes were correctly identified upstream, the builder has no instruction to treat the transition between archetype-appropriate layouts as a design event.

## Summary

| Element | Source 06 | Pipeline | Gap |
|---------|-----------|----------|-----|
| Archetype count | 9 content-functional | 7 abstract-structural (TC) | 5 missing, 3 different — taxonomies misaligned |
| Derivation questions | 18 across 4 sets | 0 present in S10 or S11 | Complete absence |
| Transition guidance | Explicit (lines 201-209) | None in builder prompt | No builder instruction |
