# 07: Pipeline Implications — What Must Change to Enable Structural Invention

## Context

This document analyzes every stage of the `/research-compose` pipeline (Tripod Pipeline) to identify exactly what must change to enable **structural invention** — content-derived spatial organization that produces novel reading paths, self-aware components, and section-specific layouts. This is a DIAGNOSTIC, not a remediation plan.

**Key distinction:** The v1.1 plan (`vivid-pondering-dusk.md`) addresses DEPLOYMENT depth — moving from 3-4 channel coordination to 5-7 channel coordination within each compositional idea. That is texture depth. This analysis addresses a different KIND of change: structural invention, where the spatial organization itself is derived from content logic.

**v1.1 = richer texture within existing spatial structures.**
**v2.0 = novel spatial structures derived from content.**

These are compatible — v1.1 makes texture richer within each spatial zone, v2.0 makes the zones themselves structurally different. But they address different gaps.

---

## Stage 1: TC Derivation

**File:** `prompts/tc-derivation.md` (96 lines)

### What It Currently Produces

The TC agent runs the full tension-composition pipeline and outputs a conviction brief with 6 mandatory sections:

1. **World-Description** — the metaphor
2. **Calibration** — how metaphor maps to content terrain
3. **Opposition Map** — tensions to hold
4. **Compositional Arc** — spatial + temporal flow with 3+ creative waypoints
5. **Creative Conditions** — builder constraints
6. **Content Map** — article sections mapped to compositional arc

Plus 2-3 **Compositional Questions** (the v1.1 addition) — generative "What if..." invitations implying multi-channel CSS coordination.

### What It Does NOT Produce

**No Structural Observation.** The TC agent identifies a METAPHOR (e.g., "a descending tower") and a COMPOSITIONAL ARC (how density progresses) but never observes the content's INHERENT ORGANIZATIONAL LOGIC. It doesn't say:

- "This content has 8 parallel roles with equal weight — a natural grid or hub-spoke"
- "This content is a dialogue between two competing frameworks — a natural split-screen or interleaving"
- "This content has a single narrative that branches into 3 independent tracks — a trunk-and-branch layout"
- "This content has fractal self-similarity — the same pattern repeats at 3 scales"

The TC brief's Compositional Arc describes a DENSITY PROGRESSION (sparse → dense → breathing → resolution), not a SPATIAL ORGANIZATION. The Content Map assigns article sections to zones, but zones are always sequential vertical bands. There is no mechanism for the TC agent to propose "zones 3-5 should be a grid because the content is 3 parallel case studies."

### What Would Need to Change (v2.0)

Add a 7th mandatory section: **Structural Observation**

```markdown
## 7. Structural Observation

### Content Archetype
[One of: Linear Narrative | Parallel Items | Hierarchical Taxonomy |
 Dialogue/Debate | Branching Paths | Cyclical/Recursive | Hybrid]

### Inherent Spatial Logic
[2-3 sentences: What organizational pattern does the CONTENT itself suggest,
independent of the metaphor? "The content presents 8 developer roles with
equal weight and distinct responsibilities. This naturally forms a grid or
constellation — not a hierarchy."]

### Spatial Propositions
[2-3 specific proposals for how the content's structure could drive layout:]
1. "Sections 3-10 (the 8 roles) could form a responsive grid instead of
   a vertical stack — the content's parallelism would become visible"
2. "The Q&A pairs could use width as a channel — questions narrow/sparse,
   answers wide/dense — making the dialogue visible in space"
3. "The three case studies share identical structure; the design could
   make this visible through a repeating template that adapts locally"
```

**Why this matters:** Without a Structural Observation, every downstream stage inherits the assumption that "page = vertical stack of zones." The metaphor provides atmospheric texture (geological, oceanic, architectural) but not spatial logic (grid, split, hub-spoke). Structural invention requires someone to OBSERVE the content's inherent organization and PROPOSE spatial realizations. The TC agent is the right place because it's the first to engage deeply with the content.

**Compatibility with v1.1:** Fully compatible. The Compositional Questions (v1.1) generate multi-channel texture. The Structural Observation (v2.0) proposes spatial layouts. They operate at different levels — one is about HOW channels coordinate, the other is about WHERE content lives in space.

---

## Stage 2: Specialists (S1-S5)

**Files:** `prompts/specialist-{1-5}-prompt.md`

### What They Currently Produce

- **S1 (Findings Mapper):** Research findings rated HIGH/MEDIUM/LOW with CSS actions + TC question preservation
- **S2 (Validation Mapper):** Findings validated across build stages with provenance chains
- **S3 (Case Study Analyst):** Structural affinities, process extractions, adapted CSS from validated explorations
- **S4 (Constraints Compiler):** Soul checklist, anti-patterns, creative territory boundaries
- **S5 (Protocol Analyst):** Consumption protocol, Agent-0C patterns, anti-orphaning principle

### What They Do NOT Produce

**No spatial implications from their findings.** When S1 finds "8 parallel items at similar weight," it produces a CSS action like "deploy uniform spacing" — NOT a spatial implication like "8 parallel items → grid or hub-spoke layout." When S3 finds a case study with split-screen layout (like CD-006's 2-zone callout DNA), it extracts the CSS pattern but not the STRUCTURAL LOGIC that made split-screen appropriate for that content.

**S3 is the most significant gap.** The Case Study Analyst reads validated explorations — the same explorations that contain structural invention (DD-006's fractal visualization, OD-004's geological column, CD-006's dual-channel callouts). But S3 extracts "process" and "adapted CSS," not "structural reasoning." The question "WHY did this exploration use a grid here?" is never asked.

### What Would Need to Change (v2.0)

**S1:** Add a "Spatial Implication" field to HIGH findings:

```markdown
### R4-038: PULSE Rhythm Through Q&A Alternation
**Rating:** HIGH
**Rationale:** [existing]
**CSS Action:** [existing]
**Spatial Implication:** "Q&A alternation suggests width differential —
 questions narrow/sparse, answers wide/dense. Could also support side-by-side
 at wider viewports."
```

**S3:** Add a "Structural Logic Extraction" to case study analyses:

```markdown
### Structural Affinity 1: CD-006 → Zones 2-3
**Why this case study matters:** [existing]
**Process extracted:** [existing]
**CSS that produced richness:** [existing]
**Structural Logic:** "CD-006 used 2-zone callout DNA because the content
 had dual-nature elements (theory + practice). The split was CONTENT-DERIVED,
 not decorative. Applicable here because [specific content parallel]."
```

**S2, S4, S5:** Minimal changes. S2 would validate spatial implications alongside findings. S4 might add spatial anti-patterns ("avoid grids for hierarchical content"). S5 would note if the consumption protocol needs to account for non-linear reading paths.

**Compatibility with v1.1:** Fully compatible. v1.1 adds question attribution and carry-through. v2.0 adds spatial implication fields. These are additive — no conflict.

---

## Stage 3: Synthesizer

**File:** `prompts/synthesizer-prompt.md` (741 lines)

### What It Currently Produces

Three files across 10 sections:
- **Pass 1 Package:** Soul Checklist (S0), Build Context (S1), Mechanism Selections (S2), Consumption Protocol (S9), Compositional Questions (S10)
- **Pass 2 Package:** Findings → Build Actions (S3), Zone Architecture (S4), Case Study Processes (S5)
- **Pass 3 Package:** Anti-Patterns (S6), Proven CSS Patterns (S7), Structural Propositions (S8)

### What It Does NOT Produce

**No structural question families in Section 10.** The v1.1 Compositional Questions layer includes 5 KB question families, ALL of which are texture-focused:

| Family | Focus | Structural? |
|--------|-------|------------|
| Certainty Encoding | Visual weight maps to epistemic gradient | Texture (channels) |
| Fractal Self-Similarity | Same rhythm at N scales | Texture (scale) |
| Velocity Interleaving | Heavy/light content pairs | Texture (rhythm) |
| Atmospheric Signature | Per-zone atmospheric feel | Texture (channels) |
| Temporal Compression | Density compresses over time | Texture (progression) |

Every family generates multi-channel CSS decisions WITHIN a fixed spatial structure (vertical zone stack). None generates a structural decision: "What if these 8 parallel items formed a grid?" or "What if the reader could choose their path through this content?"

**No Structural Propositions section in the right place.** Section 8 (Structural Propositions) in the Pass 3 package is about testable hypotheses for existing layout — "does the density feel geological?" — not about proposing alternative spatial organizations. And it arrives in Pass 3 (HARDENING), when it's too late to change structure.

**Section 4 (Zone Architecture) assumes vertical zones.** The ASCII density diagram and zone-by-zone recipe enforce a single spatial model: sequential vertical bands with varying density. The synthesizer cannot propose "Zones 3-5 are a grid" or "Zones 2 and 7 share a split-screen treatment" because the format doesn't allow it.

### What Would Need to Change (v2.0)

**1. Add Category 3 structural question families to Section 10:**

| Family | Template | Source | Implied Structure |
|--------|----------|--------|-------------------|
| Parallel Revelation | "What if all [N parallel items] were visible simultaneously, arranged to reveal their similarities and differences?" | OD-004 confidence strata | Grid, constellation, comparison table |
| Reading Path Choice | "What if the reader could choose which [branch] to explore first, with the design making all paths equally inviting?" | CD-001 reasoning paths | Tab interface, accordion, hub-spoke |
| Structural Self-Awareness | "What if the page SHOWED its own organizational logic — a minimap, a visual index, a structural diagram that is ALSO the navigation?" | DD-006 fractal viz | Meta-layer, self-referential component |
| Content-Form Mirroring | "What if the layout of each section EMBODIED its content — a section about dialogue used side-by-side, a section about hierarchy used nested indentation?" | CD-006 dual-channel | Per-section layout variation |
| Temporal Architecture | "What if sections of different TYPES were visually distinct not just in density but in spatial organization — code sections, narrative sections, and data sections each had their own geometry?" | DD-003 islands | Content-type-specific layouts |

**2. Add a new Section 11: Structural Propositions (in Pass 1, not Pass 3):**

This section would take the TC agent's Structural Observation + specialist spatial implications and propose 2-3 specific layout structures:

```markdown
## 11. STRUCTURAL PROPOSITIONS (FOR PASS 1 BUILDER)

These are proposals for how the content's inherent organization could drive
layout decisions. They are NOT requirements — they are INVITATIONS to invent.

### Proposition 1: [Name]
**Content logic:** [What about the content suggests this structure]
**Spatial realization:** [What layout it implies — grid, split, hub-spoke, etc.]
**CSS sketch:**
```css
/* Grid layout for the 8 parallel roles */
.roles-constellation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-8);
}
```
**Responsive adaptation:** [How this structure degrades at smaller viewports]
**Risk:** [What could go wrong — e.g., "grid may feel too uniform if roles
 aren't visually differentiated"]
```

**3. Modify Section 4 to support non-linear zone architecture:**

The ASCII diagram currently shows only vertical density progression. It should support alternative spatial models:

```markdown
### Spatial Model: HYBRID (vertical zones + grid subsection)

Zones 1-2: VERTICAL (standard density progression)
    LOW  ....
    MED  ........

Zone 3: GRID (parallel case studies)
    ┌─────────┬─────────┬─────────┐
    │ Case A  │ Case B  │ Case C  │
    │ ######  │ ######  │ ######  │
    └─────────┴─────────┴─────────┘

Zones 4-5: VERTICAL (resolution)
    HIGH ............####
    LOW  ....
```

**Compatibility with v1.1:** Compatible with tension. Section 10 would grow from 5-7 questions to 7-10 questions (adding 2-3 structural families). This risks cognitive overload. Mitigation: categorize questions explicitly as "TEXTURE questions (explore 2-3)" and "STRUCTURAL questions (explore 0-1)." The builder knows structural questions are higher risk, higher reward.

---

## Stage 4: Builder Pass 1 (STRUCTURE)

**File:** `prompts/builder-pass-1-prompt.md` (386 lines)

### What It Currently Instructs

The Pass 1 builder creates:
1. Zone skeleton (vertical divisions mapped from compositional arc)
2. Mechanism deployment (from Section 2)
3. Typography hierarchy
4. Responsive scaffolding
5. Content mapping

Key constraint: **"Do NOT invent mechanisms that aren't in the package."** The builder has "creative authority on HOW, not WHETHER." It follows the package's mechanism selections; it chooses the specific CSS values. The build process is explicitly "boundary-by-boundary" — set all channels at each zone boundary, then move to the next zone.

### What It Does NOT Instruct

**No permission to invent spatial structures.** The builder receives zone architecture (vertical bands), mechanisms (CSS techniques), and compositional questions (texture invitations). There is no instruction that says "you may propose a different spatial organization for a section if the content suggests it." The constraint "Do NOT invent mechanisms that aren't in the package" explicitly forbids creative structural departures.

**No structural propositions as input.** Even if Section 11 existed, the builder prompt doesn't reference it. The reading order is: Package (S0, S1, S2, S9, S10) → TC Brief → Content → Tokens → Components. No structural proposals enter the builder's context.

**No self-aware component guidance.** The builder knows about callouts, code blocks, tables, headers, footers, and bento grids (from components.css). It does NOT know how to create:
- A minimap that visualizes the page's own structure
- A structural diagram that serves as navigation
- A component that DEMONSTRATES the content's organizational logic
- A section whose layout EMBODIES its topic (e.g., a section about dialogue rendered as actual side-by-side dialogue)

**The "boundary-by-boundary" process enforces vertical thinking.** "Build zone-by-zone, NOT channel-by-channel" is good advice for texture consistency, but it implicitly assumes zones are stacked vertically. There's no equivalent guidance for "build grid-by-grid" or "build path-by-path."

### What Would Need to Change (v2.0)

**1. Add structural propositions to the reading order:**

```markdown
6. **Structural Propositions (_package-pass-1.md, Section 11)** — OPTIONAL but POWERFUL.
   These are proposals for non-standard spatial organization derived from the
   content's structure. You may adopt 0-1 propositions. Adopting a proposition
   means changing the zone skeleton — this is a structural choice that all
   subsequent passes will inherit.
```

**2. Grant explicit PERMISSION to invent:**

The current constraint "Do NOT invent mechanisms that aren't in the package" should be revised to:

```markdown
**Creative Authority:**
- You have authority on HOW mechanisms are deployed (CSS values, visual weight, rhythm)
- You do NOT selectively omit package instructions
- You MAY invent STRUCTURAL techniques that aren't in the package IF:
  1. The invention is derived from the content's organizational logic (not decoration)
  2. You document the invention in _pass-1-decisions.md with rationale
  3. The invention works at all 3 responsive breakpoints
  4. You cite the structural proposition or content logic that drove the invention
- Structural invention means: grids, split layouts, non-linear reading paths,
  self-aware components, per-section layout variation. NOT: new color palettes,
  new type scales, new animation effects.
```

**3. Add self-aware component guidance:**

```markdown
## Self-Aware Components (OPTIONAL — High Risk, High Reward)

A self-aware component is one that REVEALS the page's organizational logic to
the reader. Examples:
- A minimap showing the page's density progression
- A visual index where each item IS the navigation
- A structural diagram that demonstrates the content's relationships
- A component whose layout literally embodies its topic

You are NOT required to create self-aware components. But if the content
has clear structural logic (parallel items, branching paths, recursive
patterns), consider whether making that logic VISIBLE would serve the reader.

**Test:** If you created a self-aware component, does removing it make the
page LESS understandable? If yes, it serves the content. If the page works
just as well without it, it's decoration.
```

**4. Expand the build process beyond vertical zones:**

```markdown
## Build Process: Structure-First

If Section 11 proposes a non-standard spatial organization:

### Standard Path (vertical zones only):
Build zone-by-zone. At each boundary, set ALL channels simultaneously.

### Structural Path (grid, split, or non-linear sections):
1. BUILD the standard vertical skeleton first (zones above and below the structural section)
2. BUILD the structural section as a self-contained module
3. VERIFY the structural section integrates with surrounding zones
4. VERIFY responsive degradation (grid → stack at narrow viewports)
5. Document the structural choice in _pass-1-decisions.md
```

**Compatibility with v1.1:** Compatible. v1.1's texture guidance (explore compositional questions, coordinate channels) applies WITHIN whatever spatial structure the builder creates. A grid section still benefits from multi-channel coordination. The question exploration process doesn't change — it just applies to potentially non-standard layouts.

---

## Stage 5: Builder Pass 2 (ENRICHMENT)

**File:** `prompts/builder-pass-2-prompt.md` (373 lines)

### What It Currently Instructs

Pass 2 enriches the existing skeleton: apply research findings zone-by-zone, verify density progression, integrate case study CSS, deepen compositional question explorations.

Key constraint: **"DO NOT rebuild from scratch. Refine what exists."** And: **"Map findings from Section 3 to EXISTING zones. Do not create new zones unless Section 4 specifically calls for it."**

### What It Does NOT Instruct

**No freedom to discover structural opportunities.** If the Pass 1 builder created a vertical stack but the Pass 2 builder notices that Zones 3-5 contain parallel case studies that would benefit from a grid, there is no permission or guidance to make that structural change. The enrichment prompt explicitly says "add density WITHIN zones, don't restructure them."

**No structural enrichment category.** The enrichment/preservation distinction covers:
- Enrichment: CSS values within zones, components, spacing, borders
- Preservation: zone skeleton, custom properties, content placement, responsive structure

There's no third category for "structural evolution" — discovering during enrichment that a section would benefit from a different spatial treatment.

### What Would Need to Change (v2.0)

**1. Add a "Structural Opportunity" assessment step:**

After applying all Section 3 findings and verifying Section 4's density diagram, add:

```markdown
### Structural Opportunity Assessment (after all findings deployed)

Look at the enriched page and ask: Is there any section where the CONTENT
suggests a different spatial treatment than what Pass 1 created?

Signs of structural opportunity:
- 3+ parallel items in a vertical stack that could be a grid
- Alternating content pairs (Q&A, before/after) that could use width as a channel
- A section that demonstrates something that could SHOW it instead of describing it
- Dense reference material that could be progressive-disclosure (details/summary)

**If you find a structural opportunity:**
1. Note it in _pass-2-decisions.md under "Structural Opportunities Identified"
2. If it can be implemented WITHOUT restructuring surrounding zones, implement it
3. If it requires zone restructuring, document it for the team lead to consider
4. NEVER restructure zones that affect other zones' boundaries without documenting

**This is NOT a license to redesign.** It is permission to notice that a
vertical stack of 8 items would read better as a 2x4 grid, and to make
that specific change with documentation.
```

**2. Modify the enrichment/preservation framework to add a third category:**

```markdown
## Enrichment vs Preservation vs Structural Evolution

**Enrichment** (SAFE — main task): CSS density within existing zones
**Preservation** (REQUIRED): Zone skeleton, properties, content, responsive
**Structural Evolution** (DOCUMENTED — optional): Changing a section's
  spatial organization based on content logic. Document WHAT, WHY, and HOW
  it degrades responsively. Maximum 1 structural evolution per pass.
```

**Compatibility with v1.1:** Compatible. v1.1's question deepening applies regardless of spatial structure. If Pass 2 changes a section from vertical to grid, the question-driven CSS still applies within the grid.

---

## Stage 6: Builder Pass 3 (HARDENING)

**File:** `prompts/builder-pass-3-prompt.md` (375 lines)

### What It Currently Instructs

Pass 3 is defensive: anti-pattern sweep, validated CSS integration, structural proposition testing, accessibility hardening.

Key constraint: **"This is a HARDENING pass, not a creative pass. Do not add new features."**

### Assessment: Mostly Correct for v2.0

Pass 3 SHOULD remain defensive. The time for structural invention is Pass 1 (with structural propositions) and Pass 2 (with structural opportunities). Pass 3 should verify that structural inventions SURVIVE hardening.

### What Would Need to Change (v2.0)

**1. Add structural invention verification to the anti-pattern sweep:**

```markdown
### Structural Invention Verification (if Pass 1/2 introduced non-standard layout)

If _pass-1-decisions.md or _pass-2-decisions.md document a structural
invention (grid, split, non-linear path):

1. Verify it works at all 3 breakpoints (1440px, 1024px, 768px)
2. Verify it degrades gracefully (grid → stack, split → vertical)
3. Verify it doesn't create accessibility issues (reading order, focus order)
4. Verify it integrates with surrounding zones (no orphaned gaps, no broken flow)
5. Do NOT remove the structural invention unless it is broken
```

**2. Add a structural question to the final validation:**

```markdown
### Structural Integrity (FINAL CHECK) — expanded
[ ] ... existing checks ...
[ ] Structural inventions (if any) work at all 3 viewports
[ ] Structural inventions degrade to accessible single-column at 768px
[ ] Reading order follows content logic even with non-standard layout
```

**Compatibility with v1.1:** Fully compatible. v1.1's question verification and citation checking apply regardless.

---

## Stage 7: PA / Evaluation

**Files:** `prompts/pa-auditor-prompt.md` (100 lines), `prompts/weaver-prompt.md` (195 lines), PA skill question battery (E-01 through E-20)

### What the PA Currently Detects

The 20 PA questions are experiential:
- E-01: First impression
- E-02: Scroll speed variation
- E-07: What changes between adjacent sections
- E-12: Shapes/colors/space without text — "does the page still tell you something?"
- E-14: Rhythm — "a beat you can feel?"
- E-16: Same element in different sections — adapted or copy-pasted?
- E-17: Musical analogy — single instrument or ensemble?

### What the PA Does NOT Detect

**No question surfaces "all sections have the same reading path."** E-07 asks what changes between adjacent sections, but a diligent auditor might only notice texture changes (background, typography) without noticing that every section is a vertically stacked column. E-12 asks about shapes/colors/space — but if every section has the same rectangular shape, the auditor might not flag this as a problem because the colors and spacing vary.

**No question asks about spatial variety.** Questions like:
- "Do different sections invite different ways of reading — some top-to-bottom, some side-to-side, some explore-at-will?"
- "Does every section have the same shape, or do some sections have a different geometry?"
- "Is there a section that seems to SHOW its topic rather than just describing it?"

These are absent from the battery.

**The weaver's compliance assessment tracks texture, not structure.** The Section 10 assessment measures "channels coordinated per question" — a texture metric. There is no metric for "structural variety across sections" or "content-form coupling at the layout level."

### What Would Need to Change (v2.0)

**1. Add 2-3 structural questions to the PA battery:**

```markdown
E-21: "Look at the overall shape of the page. Does every section have the
same layout — the same width, the same structure? Or do some sections have
a different geometry? If different, does the difference make sense for what
that section is about?"

E-22: "Is there a section that SHOWS what it's about, not just tells?
A section where the layout itself communicates the content's structure?
Or does every section just present text in the same container?"

E-23: "If you imagine the page as a map, would it look like a single road
going north to south? Or would it have intersections, plazas, side streets?
Does the page give you choices about where to go, or is it strictly linear?"
```

**2. Add structural metrics to the weaver's compliance assessment:**

```markdown
### Structural Variety Assessment

- Distinct layout types used: [count] (e.g., vertical, grid, split, progressive-disclosure)
- Sections with non-standard layout: [count] / [total sections]
- Content-form coupling instances: [count] (sections where layout embodies content logic)
- Self-aware components: [count] (components that reveal the page's structure)

**Target:**
- 1+ non-standard layout section = structural variety present
- 1+ content-form coupling = content drives layout
- 0 non-standard sections = structural uniformity (the texture may be rich,
  but the spatial organization is standard)
```

**Compatibility with v1.1:** Compatible. The texture metrics (channels per question) remain. Structural metrics are additive.

---

## Stage 8: Orchestrator (SKILL.md)

**File:** `SKILL.md` (~1400+ lines)

### What Would Need to Change (v2.0)

**Phase 1 validation:** Check that TC brief contains a Structural Observation section (or note its absence without blocking).

**Phase 2 wiring:** Synthesizer assembles Section 11 (Structural Propositions) from TC's Structural Observation + specialist spatial implications. Section 11 goes into `_package-pass-1.md`.

**Phase 3 builder rotation:** Pass 1 builder reads Section 11 alongside other sections. Pass 2 builder checks for structural opportunities. Pass 3 builder verifies structural inventions survive.

**Phase 4 evaluation:** PA question distribution includes E-21/E-22/E-23. Weaver compliance includes structural variety metrics.

**Phase 5 comparison report:** New section measuring structural variety in the final build.

---

## The v1.1 vs v2.0 Distinction: Precise Taxonomy

### v1.1: Texture Depth (DEPLOYMENT)

**What changes:** Multi-channel coordination. Questions generate CSS decisions across 5-7 visual channels simultaneously. Each compositional idea is expressed through border-weight, padding, background, font-size, line-height, letter-spacing, and content-spacing varying together.

**What stays the same:** The spatial model. Pages are still vertical stacks of zones. Zones vary in texture (sparse, dense, breathing) but not in spatial organization (all are full-width columns).

**Metaphor:** A painter using 7 pigments per brushstroke instead of 3. More nuanced color, same canvas shape.

### v2.0: Structural Invention (SPATIAL ORGANIZATION)

**What changes:** The spatial model itself. Content's inherent organizational logic drives layout decisions. Parallel items become grids. Dialogues become split-screens. Self-similar content gets fractal visualization. The reading path is no longer always top-to-bottom.

**What stays the same:** All v1.1 texture improvements still apply WITHIN each structural section.

**Metaphor:** A painter who can also choose the canvas shape — sometimes rectangular, sometimes circular, sometimes folded, sometimes with windows cut through to another painting beneath.

### Are They Compatible?

**Yes — and they are COMPLEMENTARY.**

- v1.1 without v2.0: Rich texture, standard layout. Pages feel professionally designed but structurally conventional. Every section reads the same way (top to bottom) even if it looks different.

- v2.0 without v1.1: Novel spatial structures with flat texture. Interesting layouts that feel visually thin within each section. The shapes are novel but the surfaces are uniform.

- v1.1 + v2.0: Novel spatial structures with rich multi-channel texture within each. A grid section where each cell has its own atmospheric signature across 7 channels. A split-screen where each half has a different density progression. This is the target.

### Implementation Order

**v1.1 FIRST.** It is lower risk (texture improvements within a stable spatial model), well-specified (the `vivid-pondering-dusk.md` plan has 31 findings across 5 waves), and measurable (channels per question). It also builds the infrastructure (question families, citation tracking, multi-channel guidance) that v2.0 will extend.

**v2.0 SECOND.** It is higher risk (spatial invention can go wrong in ways that break responsive design, accessibility, and reading flow), requires new pipeline sections (Structural Observation, Section 11, PA structural questions), and is harder to measure (structural variety is subjective in ways texture depth is not).

**v2.0 can be INCREMENTAL.** The changes can be introduced in stages:
1. Add Structural Observation to TC (requires no other pipeline changes)
2. Add spatial implications to specialists (small additive changes)
3. Add Section 11 to synthesizer and Section 10 structural families
4. Grant builder permission to invent + self-aware component guidance
5. Add PA structural questions
6. Add weaver structural metrics

Each stage adds capability without breaking existing pipeline behavior. A v2.0-enabled pipeline will still produce standard vertical layouts if the content doesn't suggest structural alternatives — the invention is content-derived, not mandatory.

---

## Summary: Changes by Pipeline Stage

| Stage | File | v1.1 Changes | v2.0 Changes | Risk |
|-------|------|-------------|-------------|------|
| TC Derivation | tc-derivation.md | Compositional Questions format | Add Structural Observation section (7th mandatory) | LOW — additive |
| S1 Findings | specialist-1-prompt.md | Question attribution, carry-through | Add Spatial Implication field to HIGH findings | LOW — additive |
| S2 Validation | specialist-2-prompt.md | Question carry-through | Validate spatial implications | LOW — minimal |
| S3 Case Study | specialist-3-prompt.md | Medium-affinity handling | Add Structural Logic extraction | MED — requires judgment |
| S4 Constraints | specialist-4-prompt.md | (unchanged) | Add spatial anti-patterns | LOW — additive |
| S5 Protocol | specialist-5-prompt.md | Protocol condensation | Note non-linear reading paths | LOW — additive |
| Synthesizer | synthesizer-prompt.md | Section 10 (texture questions) | Add Category 3 structural families to S10, add Section 11 (Structural Propositions), modify Section 4 for non-linear zones | HIGH — core architectural change |
| Builder Pass 1 | builder-pass-1-prompt.md | Question exploration, citations | Add S11 to reading order, grant invention permission, self-aware component guidance, expand build process | HIGH — fundamental shift in builder agency |
| Builder Pass 2 | builder-pass-2-prompt.md | Question deepening, enrichment/preservation | Add structural opportunity assessment, 3-category enrichment framework | MED — bounded scope |
| Builder Pass 3 | builder-pass-3-prompt.md | Question verification, citations | Add structural invention verification | LOW — defensive only |
| PA Auditor | pa-auditor-prompt.md | Strength/weakness balance, report length | Add E-21, E-22, E-23 structural questions | LOW — additive |
| Weaver | weaver-prompt.md | Override visibility, S10 assessment | Add structural variety metrics | MED — new judgment dimension |
| Orchestrator | SKILL.md | Cost, gates, question wiring | Structural Observation validation, S11 wiring, PA structural distribution, comparison structural metrics | MED — integration complexity |

**Total v2.0 changes:** 13 files modified. 2 HIGH-risk changes (synthesizer + builder-pass-1). 3 MEDIUM-risk changes. 8 LOW-risk changes.

The two HIGH-risk changes are the architectural core: the synthesizer must produce structural propositions, and the builder must receive PERMISSION and GUIDANCE to act on them. Everything else is plumbing that carries structural intelligence between these two critical nodes.

---

## The Deepest Implication

The pipeline's current architecture enforces a specific theory of design: **design is texture applied to a standard spatial structure.** Every page is a vertical stack of zones with varying density, typography, color, and spacing. The zones are always rectangular, always full-width, always read top-to-bottom. Richness means more channels coordinating within this fixed spatial model.

Structural invention requires a different theory: **design is the discovery of the spatial structure that the content implies, followed by texture applied to that discovered structure.** Some content IS a vertical stack. But some content is a grid, a tree, a dialogue, a cycle, a fractal. Discovering which — and having the permission, vocabulary, and technical guidance to BUILD it — is what v2.0 enables.

The v1.1 plan makes the pipeline world-class at texture. The v2.0 changes would make it capable of invention. Both are needed. Neither alone is sufficient.
