# RF-08 Audit: audit-evidence-gaps.md (452 lines)

**Source:** `ephemeral/invention-gap-analysis/audit-evidence-gaps.md`
**Question:** Were the 7 critical gaps and 11 enrichment patches applied to the definitive doc AND do they inform the pipeline changes?

## Definitive Document: Patches Applied

All 11 enrichment patches are present in `00-INVENTION-GAP-DEFINITIVE.md`. EP-1 (Molly 8-skeleton detail, line 226), EP-2 (CSS-audit-vs-structural-reality, line 212), EP-3 (four nevers, line 251), EP-4 (exploration comparison numbers), EP-5 (Reasoning Columns + Transition-as-Component), EP-8 (per-category stats table, lines 200-208), EP-9 (structural observatory hypothetical, line 228), EP-10 (Molly 8-domain three-level derivation, lines 704-714), EP-11 (Molly reading path, lines 260-268). CG-1 through CG-7 are all addressed. The definitive is fully enriched.

## Pipeline Reflection: Partial

| Finding | Pipeline File | Status | Detail |
|---------|--------------|--------|--------|
| Molly 8-domain derivation (EP-10) | `tc-derivation.md` | PARTIAL | Archetype table includes "Parallel Items" row and "8 roles" structural question exemplar (line 84), but no Molly-specific derivation example. The TC agent sees the generic archetype, not the worked REFERENCE/CATALOG example that demonstrates observe-question-invent for parallel-item content. |
| Skeleton inventory / "1 structure worn 9 ways" (CG-1, EP-1, EP-2) | `synthesizer-prompt.md` Section 11 | NOT REFLECTED | Section 11 assembly (lines 322-391) addresses structural propositions from content archetypes. It does not reference the skeleton-inventory insight (CSS variety masking structural sameness). The synthesizer has no instruction to diagnose whether its proposed skeleton is genuinely distinct or "the same room with different CSS." |
| "Four nevers" of width modulation (EP-3) | `specialist-4-prompt.md` | NOT REFLECTED | Spatial anti-patterns (lines 179-238) cover grid-for-sequential, hub-spoke-for-hierarchical, and structural-overload. None address the diagnostic: "Does this layout actually break the single-column axis, or is it width modulation within one column?" The four nevers are a detection heuristic the constraints compiler lacks. |
| Structural observatory hypothetical (EP-9) | `tc-derivation.md` | INDIRECT | The archetype table's "Branching Paths" row ("Hub-spoke, tab interface") loosely covers observatory-like structures, but the specific "what would structural X look like?" diagnostic method is absent. The TC agent is not prompted to generate hypothetical spatial forms from the metaphor and then test whether the content supports them. |

## Impact Assessment

The definitive document is complete. The pipeline prompts absorbed the *framework* (archetype table, structural propositions, spatial anti-patterns) but not the *diagnostic examples* that make the framework actionable. Three specific gaps:
1. **TC derivation** lacks a worked REFERENCE/CATALOG derivation example -- the Molly 8-domain case is the clearest demonstration of how parallel-item content should trigger non-standard layout, and its absence means the TC agent has no model for catalog-type structural observations.
2. **Specialist 4** lacks the "four nevers" as a width-modulation diagnostic -- without it, the constraints compiler cannot flag when a builder's "grid" is actually single-column-with-varying-width rather than a genuine axis change.
3. **Synthesizer Section 11** lacks the skeleton-sameness diagnostic -- without it, structural propositions may produce "the same room with different CSS" rather than genuinely distinct spatial forms.
