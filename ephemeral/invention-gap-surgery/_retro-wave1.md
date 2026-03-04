# Wave 1 Retrospective: Structural Intelligence Upstream Pathway

## 1. Metacognitive Anchor

**What this wave was supposed to accomplish:** Install structural intelligence extraction into the 6 upstream agents (TC + S1-S5) so that when content has non-standard spatial logic (parallel items, hierarchies, hub-spoke), the pipeline surfaces that logic before it reaches the synthesizer. Previously, spatial structure was invisible until the builder improvised (or didn't).

**Most likely failure mode:** The 6 changes are cosmetically present but functionally disconnected — each file has a new section/field but they don't chain together. The TC produces a structural observation that S1 references in a field that S3 extracts into a block that nobody synthesizes. The pipeline has 6 new appendages that don't form a pathway.

---

## 2. Holistic Assessment

The 6 modifications form a **coherent but incomplete pathway**. The chain works as follows:

- **TC (Section 7)** identifies content archetype + spatial proposition. This is the origin signal.
- **S1** adds `Spatial Implication` and `Originating Question` fields to every HIGH finding, plus a `Spatial Convergence` section when 3+ findings point to the same form. S1 also added a `Note for Synthesizer` in convergence blocks.
- **S2** adds `Spatial Implication` and `Spatial Chain Tracking` to validated findings, checking whether explorations in provenance chains used non-standard layouts.
- **S3** adds `Step 2.5: Structural Logic Extraction` — a 4-question protocol (content logic, spatial form, why it works, trigger signal) with an exemplar.
- **S4** adds `Spatial Anti-Patterns` — 3 new guard rails (Grid for Sequential, Hub-Spoke for Hierarchical, Structural Overload max-2).
- **S5** adds structural awareness to the consumption protocol (Step 9 includes Section 11 evaluation) and non-linear reading path support.

**Coherence verdict: 7/10.** The upstream chain (TC -> S1/S2/S3 -> S4/S5) has a clear directional flow. Each agent contributes a distinct facet: TC proposes, S1/S2 corroborate from findings, S3 extracts precedent, S4 guards, S5 integrates into protocol. The gap is at the **downstream junction** — the synthesizer has no Section 11 and no instructions for consuming spatial intelligence from S1/S2/S3.

---

## 3. Format Flow Trace

**Concrete example:** TC observes "8 parallel roles at 3 authority tiers" in Section 7.

- **TC Section 7** would identify archetype = `Parallel Items`, spatial proposition = "Authority-encoded grid where Mayor spans full width and Workers share a row."
- **S1's Spatial Implication field** on a HIGH finding (e.g., R4-038) would say: "Suggests grid with authority-weighted row heights — this finding's PULSE rhythm maps to authority tiers as density variation across grid rows."
- **S1's Spatial Convergence section** would fire if 3+ HIGH findings converge: "Converging findings: R4-038, R3-023, R2-014. Suggested spatial form: Grid. Note for Synthesizer: This convergence suggests Section 11 should include a structural proposition for the role taxonomy section."
- **S3's Structural Logic Extraction** would find OD-005 (hub-spoke territory grid) as a precedent and extract: content logic (6 parallel territories = spatial parallelism), spatial form (grid with auto-fit), why it works (grid implies simultaneity, not sequence), trigger signal (4+ items at same hierarchy level).
- **S2's Spatial Chain Tracking** would note whether DD-006 or OD-006 used grid in their provenance chains.

**Would the synthesizer know what to do?** No — not yet. The synthesizer prompt (740 lines) has no Section 11 template, no instructions for consuming Spatial Convergence notes from S1, no instructions for integrating S3's Structural Logic Extraction, and no mechanism for converting these signals into a builder-facing structural proposition with blueprint CSS. The synthesizer would receive 5 specialist outputs containing spatial intelligence scattered across different field names and section types, with no integration recipe.

---

## 4. S3 Depth Evaluation

S3's Structural Logic Extraction is the **strongest individual modification in Wave 1**. The 4-question protocol forces genuine depth:

1. "What CONTENT LOGIC drove the spatial decision?" — forces causal reasoning, not description
2. "What SPATIAL FORM was chosen?" — names the form with CSS specifics
3. "What made that form WORK better than vertical stacking?" — forces comparative justification
4. "What CONTENT SIGNAL would trigger the same spatial logic in a DIFFERENT build?" — forces generalization

The exemplar (OD-005 hub-spoke) demonstrates the expected depth convincingly. It captures the WHY ("Vertical stacking implies sequence. Grid implies simultaneity — all 6 are co-present") rather than just listing "hub-spoke layout."

**Depth verdict: PASSES.** The extraction protocol demands reasoning, not labeling. A shallow implementation would fail Question 3 ("What made it WORK better") because you cannot answer that without understanding the content-form relationship. The exemplar sets the bar correctly.

One concern: the protocol says "examine its HTML structure — not just its CSS" but the case study files are markdown analysis documents, not raw HTML. S3 will extract structural logic from the case study's description of its HTML, which is one level of indirection. This is unavoidable given the file structure but could produce slightly abstracted reasoning.

---

## 5. Course Corrections for Wave 2

The synthesizer (740 lines, unchanged) must address these specific gaps:

**Gap 1 — No Section 11 template.** The synthesizer defines Sections 0-10 across 3 files. Section 11 (Structural Propositions) does not exist. S5 references it (Step 9: "EVALUATE structural propositions (Section 11, if present)"), S1's Spatial Convergence notes reference it ("Section 11 should include a structural proposition"), and S4's spatial anti-patterns guard against misuse. But the synthesizer has no template for producing it. Wave 2 must add Section 11 to `_package-pass-1.md` (it belongs with foundations, not enrichment) with: proposition statement, blueprint CSS (grid-template-areas or equivalent), content-logic justification, and ADOPT/MODIFY/REJECT evaluation instruction for the builder.

**Gap 2 — No consumption recipe for spatial intelligence.** The synthesizer's Step 3 (DEDUPLICATE) and Step 4 (RESOLVE CONFLICTS) have no entries for spatial data. When S1 says "Spatial Convergence: Grid" and S3 says "Structural Logic: hub-spoke from OD-005" and S2 says "DD-006 used nested grids," how does the synthesizer reconcile? Wave 2 needs a spatial resolution hierarchy (TC proposition > S3 case study precedent > S1 convergence > S2 chain evidence) and a merge protocol.

**Gap 3 — File routing.** Section 11 needs to go in Pass 1 package (builder needs structural proposition BEFORE building skeleton, not after). The file size targets need adjustment: Pass 1 is currently 230-280 lines; adding Section 11 (20-30 lines) pushes to 250-310. The quality floor checklist needs a Section 11 entry.

**Gap 4 — Builder consumption.** The consumption protocol (Section 9) references Section 11 via S5's addition, but the synthesizer's Section 9 template (lines 197-229) does not include a step for evaluating structural propositions. Wave 2 must add Step 8.5 or similar: "EVALUATE Section 11 structural propositions. For each: ADOPT (build the spatial form as specified), MODIFY (adapt the form), or REJECT (use standard vertical, state why)."

**Gap 5 — Anti-orphaning format.** S5 added `/* STRUCTURAL: [content-logic] -- [spatial form chosen] */` as a citation prefix. This is present in the anti-orphaning citation format block. The synthesizer must include this in its Section 9 anti-orphaning list — it currently lists 6 prefixes (PACKAGE, FINDING, CASE-STUDY, SOUL, TC-BRIEF, QUESTION) but not STRUCTURAL.

**Summary:** Wave 1 installed the sensors. Wave 2 must install the integrator. The synthesizer needs: Section 11 template, spatial resolution hierarchy, file routing, consumption protocol update, and anti-orphaning format update. Without these, the spatial intelligence from 5 upstream agents will arrive at the synthesizer and die there.
