# T5-SYN: Synthesizer Section 11 Trace — Yegge Gas Town

## Assembly Protocol Walkthrough

**Step 1:** Read TC Section 7 archetype identification.
TC Section 7 identifies PRIMARY archetype as **Linear Narrative** (the rant flows as a sustained argument: Google failed → here's why → Amazon got it right → the mandate → what it means). SECONDARY characteristic: **Parallel Items** (Bezos's 6 mandates are explicitly enumerated, and the Amazon-vs-Google comparison creates a two-column logical structure).

**Step 2:** The assembly protocol says: "If archetype is Linear Narrative → write 'No structural propositions' → done."

**This is the critical decision point.** The protocol's step 2 is a hard gate on the PRIMARY archetype. A compliant synthesizer agent following the protocol literally would stop here and output: "No structural propositions. Content archetype is Linear Narrative — standard vertical layout is the correct spatial form."

**But that outcome wastes the Parallel Items signal.** The 6 mandates are the rhetorical spine of the entire article. They are the EVIDENCE that makes the argument work. A grid or numbered-card layout for that section would serve the reader better than burying 6 mandates in a prose flow.

## Simulated Section 11 Output (if synthesizer exercises judgment)

### 11. STRUCTURAL PROPOSITIONS (INVITATIONS, NOT REQUIREMENTS)

The builder decides ADOPT / MODIFY / REJECT for each proposition.
Every proposition is optional. Standard vertical is always valid.

#### Proposition 1: Bezos's 6 Mandates as Card Grid

**Content logic:** The 6 mandates are parallel directives at the same hierarchy level — conceptually simultaneous (they were all issued as one edict), not sequential. The reader needs to see them as a unified decree, not a numbered list buried in prose.
**Spatial question:** Can the mandates be scannable as a complete set while preserving the "corporate edict" weight each one carries?
**Case study precedent:** OD-005 hub-spoke territory grid (6 parallel territories → grid). Trigger signal matches: 4+ items at same hierarchy level, conceptually simultaneous.
**Blueprint CSS:**
```css
/* STRUCTURAL: 6 parallel mandates — card grid */
.mandates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 40px 0;
}
.mandate-card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 20px;
}
@media (max-width: 768px) {
  .mandates-grid {
    grid-template-columns: 1fr;
  }
}
```
**Responsive degradation:** At 768px, grid collapses to single-column stack — mandates read as numbered list.
**Risk:** LOW — well-precedented (OD-005). 6 items in a 3x2 grid is a standard, safe pattern.
**Alternative:** Standard vertical numbered list within prose flow. Each mandate as a blockquote or indented paragraph.

## Structural Question (Section 10, from Parallel Revelation family)

"What if all 6 of Bezos's mandates were visible simultaneously as a decree wall — a single viewport where the reader confronts the full weight of the edict before the rant explains why each one mattered?"
- Invocation: when building the mandates section, before defaulting to `<ol>`
- Implied channels: `grid-template-columns`, `gap`, `padding`, `border`, `background`, `font-weight`

## Diagnosis: Does the Protocol Produce Actionable Output?

**YES — but only if the synthesizer reaches Step 3.** The template is strong: blueprint CSS is concrete, responsive degradation is explicit, the alternative gives the builder a real escape hatch. A builder receiving this proposition has everything needed to implement or reject it.

**The gap is in Step 2.** The assembly protocol's hard gate on "Linear Narrative" would kill this proposition before it's born. The Yegge rant IS primarily linear, but the 6-mandate sub-section is unambiguously parallel. The protocol has no instruction for "primarily linear with a parallel sub-section" — it treats archetype as a single classification, not a per-section analysis.

**Fix:** Step 2 should read: "If archetype is PURELY Linear Narrative with no secondary parallel/hierarchical signals → write 'No structural propositions' → done. If archetype is Linear Narrative WITH secondary Parallel Items or Hierarchical Taxonomy signals → proceed to Step 3 for the parallel/hierarchical sub-sections only."
