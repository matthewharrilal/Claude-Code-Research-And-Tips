# T5-TC: Simulated Section 7 Output for Yegge Gas Town

## Evidence from v5 Run

The actual TC brief (`ephemeral/builds/yegge-gas-town-extraction-2026-03-01-5/_tc-brief.md`) is 74 lines and contains sections 1-6 (World-Description, Opposition, Metaphor, Arc, Content Map) but **NO Section 7**. The brief was truncated before reaching structural observation. This confirms the gap the modified prompt addresses.

## Simulated Section 7 (Using Modified tc-derivation.md)

### Content Archetype
**Primary: Hierarchical Taxonomy** — the 8 Roles Architecture (lines 179-430) is a nested taxonomy with explicit hierarchy (Mayor > Foreman > Workers) and per-role sub-structure (function, responsibilities, commands, model recommendation). **Secondary: Hybrid** — the document transitions between archetype types across sections: Linear Narrative (mental model intro), Parallel Items (8 roles, comparison matrices), Branching Paths (decision matrix, "when to use"), and reference/tutorial (implementation guide).

### Inherent Spatial Logic
- **8 roles form an authority hierarchy**, not a flat list: Mayor (1) > Foreman (1) > Workers (4-12), with Inbox and Librarian as lateral services. This is a tree, not a grid.
- **3 comparison pairs** (vs Ralph, vs CC Mirror, vs Infinite Orchestra) are natural side-by-side structures.
- **The complexity ladder** (levels 0-7) is an explicit vertical progression.
- **Content density varies dramatically**: the 8 roles section is 250 lines of parallel structure; the mental model section is 56 lines of narrative; the implementation guide is 165 lines of sequential tutorial.

### Spatial Proposition
The 8 Roles section warrants a NON-STANDARD layout: an authority-encoded arrangement where Mayor spans full width at top, Foreman below at slightly narrower width, and Workers arranged in a 2-column or 3-column grid beneath — so the reader SEES the hierarchy before reading a word. The comparison section (3 pairs) warrants side-by-side panels. Remaining sections (narrative, tutorial, reference) are correctly served by standard vertical flow.

## Simulated Structural Question

**"What if the 8 roles were arranged in a spatial hierarchy where Mayor occupies full-width at the top, Foreman sits at 75% width below, and Workers tile in a responsive grid — so the org chart is the LAYOUT, not a diagram within the layout?"**
  - Implied channels: grid-template-columns, grid-template-areas, width per role card, padding scaling per authority tier, border-weight per tier, font-size per tier

## Assessment: Does the Modified TC Prompt Produce Useful Output?

**YES — the prompt provides sufficient guidance.** Three specific mechanisms make this work:

1. **The archetype table** (lines 96-106) forces the agent to classify before proposing. For Gas Town, the "Hierarchical Taxonomy" row directly triggers the instruction on line 107: "If content is Parallel Items or Hierarchical Taxonomy, the spatial proposition should suggest a NON-STANDARD layout." This is a binary gate — it prevents the agent from defaulting to "standard vertical" for content that structurally demands otherwise.

2. **The structural exemplar questions** (lines 84-87) provide a concrete model of what a good structural question looks like. The "8 roles arranged in an authority-encoded grid" example is almost directly applicable to Gas Town's 8 roles — an agent seeing this exemplar would have a clear pattern to follow.

3. **The "Standard vertical is correct, not a failure" safety valve** (line 49, 107) prevents the opposite failure mode: forcing non-standard layout onto linear content. This honesty instruction is critical because without it, agents would invent gratuitous spatial complexity for every article.

**Risk:** The archetype table has only 7 entries. Gas Town is genuinely Hybrid (it shifts archetypes across sections), and the prompt's guidance for Hybrid is just "Per-section variation" — the weakest entry. An agent might classify as Hybrid and then produce a vague proposition. The exemplars partially mitigate this by showing section-level archetype variation (line 86-87: "each section's spatial organization embodied its content type").
