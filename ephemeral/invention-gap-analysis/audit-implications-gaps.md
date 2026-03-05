# Audit: Universals & Implications Gaps in Definitive Document

**Auditor:** audit-implications
**Documents cross-checked:** 00-INVENTION-GAP-DEFINITIVE.md (847 lines) vs 06-structural-invention-universals.md (480 lines) and 07-pipeline-implications.md (595 lines)

---

## Critical Gaps

### 1. Archetype Transition as Spatial Event -- MISSING from Definitive

Source 06, Part 3 (lines 201-209) develops a significant concept: archetype transitions are themselves design events. When content shifts from Taxonomy to Exploration, the spatial logic changes, and that transition should be visible. The definitive document mentions archetype transitions only in passing (Part 6, line 558: "spatial structure that CHANGES as the archetype changes") but does NOT develop the concept of transition-as-event: the grid resolving into a transition element, the new archetype introducing itself through a different spatial register, the logic boundary vs zone boundary distinction.

This matters because the pipeline currently uses zone boundaries (background shifts, padding changes) for transitions. The concept of LOGIC boundaries -- where the spatial model itself changes, not just the atmosphere -- is architecturally distinct and has direct pipeline implications for how builders handle archetype shifts.

### 2. "Why Explorations Got This Right Without the Step" -- MISSING from Definitive

Source 06, Part 4 (lines 281-291) contains a crucial explanatory argument: explorations had structural invention because their CONTENT was about spatial concepts. DD-006 about fractal self-similarity naturally produced fractal layout. OD-004 about confidence gradients naturally produced strata. When the content is ABOUT spatial logic, the builder derives spatial structure automatically because the subject matter IS spatial logic. When content is about non-spatial subjects (auth middleware, Gas Town, recipes), the builder has no automatic mechanism to derive spatial structure.

The definitive document captures a version of this in Part 5 (content-form derivation) but frames it differently -- as a causal chain difference, not as a self-instruction mechanism. The specific argument that "explorations' content was self-instructing about spatial structure and pipeline content is not" is absent. This is the most elegant formulation of WHY the gap exists for non-design-system content and should be explicitly stated.

### 3. "Mechanism Catalog as Ceiling Not Floor" -- MISSING from Definitive

Source 07 mentions this concept in its summary table but the definitive document never explicitly makes the argument that the mechanism catalog functions as a CEILING on structural vocabulary (builders cannot go beyond it) rather than a FLOOR (a minimum that can be exceeded). This is implied in the "Do NOT invent" prohibition discussion but never named as a distinct finding. The framing matters because it clarifies that the prohibition is not just about quality control -- it structurally limits the pipeline's possibility space.

### 4. S3 (Case Study Analyst) as the Most Significant Specialist Gap -- UNDERSPECIFIED

Source 07 (lines 90-93) explicitly identifies S3 as the most significant gap among the 5 specialists: "The Case Study Analyst reads validated explorations -- the same explorations that contain structural invention... But S3 extracts 'process' and 'adapted CSS,' not 'structural reasoning.' The question 'WHY did this exploration use a grid here?' is never asked."

The definitive document's Part 7 mentions S3 getting "Structural Logic Extraction" but does not explain WHY S3 is the most critical specialist to change. The reasoning -- that S3 literally reads the explorations that contain structural invention but extracts only CSS patterns, not structural reasoning -- is the key diagnostic finding for the specialist stage.

---

## Universals Gaps

### 1. Complete Content Archetype Taxonomy -- PRESENT but Compressed

Source 06 develops 8 full archetypes (Tutorial, Reference/Catalog, Argument/Persuasion, Comparison/Decision, Exploration/Deep-Dive, Taxonomy/Classification, Timeline/Narrative, Dialogue/Q&A) with detailed natural spatial structures, signal words, examples, and "What the pipeline currently produces" comparisons for each.

The definitive document (Part 6, lines 527-544) covers all 8 archetypes but compresses each from ~30 lines (with examples, pipeline comparison, and spatial structure details) to ~2-3 lines. Specifically MISSING:

- **Concrete examples** for each archetype (auth middleware tutorial as chain of trust, API documentation as 40 endpoints, animal kingdom classification, "Why Your Company Should Adopt Rust" as argument arc). Source 06 provides vivid, non-design-system examples that demonstrate universality.
- **"What the pipeline currently produces" comparison** for each archetype. Source 06 includes specific pipeline failure modes for Reference/Catalog ("Linear sequence. Each endpoint gets an identical content block. The reader must scroll through all 40..."), Tutorial ("uniform content blocks with identical spacing, separated only by h3 headings"), etc. These make the gap concrete.
- **Decision/Branching as a distinct archetype.** Source 06's Appendix (line 462-474) includes a 9th archetype "Decision" separate from Comparison. The definitive document merges them.

### 2. Q2 (Spatial Relationships) Detail -- COMPRESSED

Source 06, Part 1, Q2 (lines 29-42) provides a full table of spatial relationships (Comparison, Dependency, Sequence, Opposition, Radiation, Stratification, Interleaving) with CSS structures and content signals. The definitive document (lines 514-516) compresses this to a single sentence listing only some relationships. The full table with CSS structure mappings and content signal words is a practical reference tool that should be preserved.

### 3. Q4 (Reader Orientation) Detail -- COMPRESSED

Source 06, Part 1, Q4 (lines 56-66) identifies 5 orientation needs (Entry, Transition, Depth, Return, Decision) with spatial responses. The definitive document (lines 522-524) covers these but compresses the spatial responses. The "Return" orientation (synthesis mirroring the opening = bookend structure) is architecturally significant and underemphasized.

### 4. Hybrid Archetype Analysis -- PARTIALLY PRESENT

Source 06, Part 3 provides the full Yegge Gas Town hybrid breakdown with section percentages and primary/secondary archetype mapping. The definitive document (Part 6, lines 548-557) includes the table but loses the surrounding analysis about WHY pure archetypes are rare and the structural challenge of transitioning between archetype-appropriate structures within a single page.

### 5. Question Sets A-D for Universal Structural Derivation -- PARTIALLY PRESENT

Source 06, Part 6 (lines 407-439) contains 4 question sets (18 specific questions total) organized as:
- Set A: Archetype Identification (4 questions)
- Set B: Content-to-Layout Mapping (5 questions)
- Set C: Spatial Implications (5 questions)
- Set D: Structural Coherence (4 questions)

The definitive document includes Q1-Q4 (the universal structural questions from Part 1 of source 06) but does NOT include the full Question Sets A-D from Part 6. These are distinct: Q1-Q4 are about content analysis; Sets A-D are about pipeline implementation (what the pipeline should ask at each stage). Specifically missing:

- **Set C questions 12-14** about spatial centerpieces ("Which elements are spatial centerpieces?"), simultaneous visibility needs, and spatial isolation needs
- **Set D questions 15-18** about structural coherence -- whether spatial structure encodes hierarchy independently of text, whether archetype transitions have spatial signals, whether the most important spatial element is the most spatially prominent

These are actionable pipeline questions, not abstract analysis.

### 6. Appendix: Content Archetype Quick Reference Table -- MISSING

Source 06 ends with a compact reference table (lines 462-474) mapping each archetype to signal words, natural layout, and key spatial question. This is the most ACTIONABLE artifact in the entire document -- a quick-reference that could be directly inserted into a TC prompt. The definitive document does not include it.

### 7. Molly/Panopticon Archetype Analysis -- ABSENT

Source 06 focuses primarily on Gas Town with brief references to Panopticon. However, the task description specifically asks whether Molly/Panopticon content is "analyzed for natural structure." Source 06 does NOT provide a Molly archetype breakdown equivalent to the Gas Town table. The definitive document similarly lacks this. While less critical (Gas Town is the more detailed case study), applying the archetype framework to BOTH builds would strengthen the universal claim.

---

## Pipeline Implications Gaps

### 1. Specialist Stage Changes -- INCOMPLETE

Source 07 (Stage 2, lines 77-124) provides detailed changes for ALL 5 specialists:
- **S1:** "Spatial Implication" field for HIGH findings with a specific format example
- **S2:** Validate spatial implications alongside findings
- **S3:** "Structural Logic Extraction" with specific format example showing WHY an exploration used a particular structure
- **S4:** Add spatial anti-patterns ("avoid grids for hierarchical content")
- **S5:** Note non-linear reading paths in consumption protocol

The definitive document (lines 636-639) covers S1 and S3 but reduces S2, S4, S5 to a single sentence. The specific format examples from source 07 (the S1 example with R4-038 PULSE rhythm, the S3 example with CD-006 dual-lens callout DNA) are missing. These format examples are critical because they demonstrate EXACTLY what the output should look like -- without them, the change is abstract.

### 2. Synthesizer Section 4 Modification -- PRESENT but Underspecified

Source 07 (lines 195-216) provides a specific ASCII diagram format for non-linear zone architecture showing how the density diagram could represent a HYBRID spatial model (vertical + grid subsection) with actual ASCII art. The definitive document (line 659-661) mentions this change but does not include the example diagram. The format specification matters because the synthesizer is a FORMATTING engine -- without a concrete example of the output format, the change cannot be implemented.

### 3. Builder Pass 1 Full Prompt Modifications -- INCOMPLETE

Source 07 (Stage 4, lines 220-319) provides 4 specific changes with exact prompt text:

1. **Reading order addition** -- Section 11 as item 6 in the builder's reading sequence (exact text provided, lines 253-259)
2. **Revised creative authority statement** -- specific replacement text for the "Do NOT invent" constraint (exact text provided, lines 266-278)
3. **Self-aware component guidance** -- complete guidance section with definition, examples, permission, and quality test (exact text provided, lines 282-299)
4. **Expanded build process** -- Standard Path vs Structural Path with 5 verification steps (exact text provided, lines 301-317)

The definitive document (lines 663-675) covers items 1-3 but misses item 4 (the Standard Path vs Structural Path build process). This is significant because the current "build zone-by-zone" process implicitly assumes vertical stacking. Without an alternative build process for structural sections, the builder has no procedure for HOW to implement non-standard layouts.

### 4. Builder Pass 2 Three-Category Framework -- MISSING

Source 07 (Stage 5, lines 371-383) introduces a three-category enrichment framework: Enrichment (CSS density), Preservation (zone skeleton), and Structural Evolution (changing section spatial organization). The current binary enrichment/preservation framework is explicitly identified as insufficient. The definitive document (line 679) mentions "Structural Opportunity Assessment" but does not include the three-category framework or the "Maximum 1 structural evolution per pass" constraint.

### 5. Builder Pass 3 Structural Verification Checklist -- PRESENT but Abbreviated

Source 07 (Stage 6, lines 388-428) provides specific verification steps with exact checklist format. The definitive document (line 683) covers this but compresses the 5-point verification checklist and the expanded final validation checklist to a parenthetical.

### 6. PA Questions -- PRESENT but Missing Full Text

Source 07 (Stage 7, lines 435-497) provides:
- Full text of E-21, E-22, E-23 (each 3-4 lines)
- Rationale for why current questions miss structural flatness (E-07 catches texture changes but not layout uniformity; E-12 catches shapes/colors but not rectangular uniformity)
- Weaver structural variety metrics with specific measurement format and target values

The definitive document (lines 686-692) includes abbreviated versions of E-21/22/23 and mentions weaver metrics but loses the rationale explaining WHY current questions fail to detect structural uniformity (the critical diagnostic). It also loses the specific metric format (distinct layout types, sections with non-standard layout, content-form coupling instances, self-aware components) and the target ("1+ non-standard layout section = structural variety present").

### 7. Orchestrator (SKILL.md) Stage-by-Stage Wiring -- MISSING

Source 07 (Stage 8, lines 500-515) details 5 specific orchestrator changes:
1. Phase 1 validation: check for Structural Observation section
2. Phase 2 wiring: how Section 11 is assembled from TC + specialists
3. Phase 3 builder rotation: how each pass uses structural material
4. Phase 4 evaluation: PA question distribution including E-21/22/23
5. Phase 5 comparison report: structural variety measurement

The definitive document omits the orchestrator stage entirely. This is a significant gap because the orchestrator is the integration point -- without specific wiring instructions, the individual stage changes don't connect.

### 8. Risk Assessment per Stage -- MISSING

Source 07 (Summary table, lines 566-583) provides a risk rating for each pipeline stage change (LOW/MED/HIGH) with 13 files identified. The definitive document does not include this risk assessment. Key finding from source 07: only 2 changes are HIGH-risk (synthesizer + builder-pass-1), 3 are MEDIUM, and 8 are LOW. This dramatically clarifies the implementation strategy -- most changes are safe additive modifications.

### 9. Compatibility Analysis Between v1.1 and v2.0 -- PRESENT but Compressed

Source 07 provides stage-by-stage compatibility analysis at the END of each stage section, explaining exactly how v1.1 (texture) and v2.0 (structure) changes interact. The definitive document handles this at the high level (lines 614-617: "compatible and complementary") but loses the per-stage compatibility notes. For example, the synthesizer compatibility note (lines 216-217) identifies a specific tension: Section 10 would grow from 5-7 to 7-10 questions, risking cognitive overload, with a specific mitigation (categorize as "TEXTURE questions: explore 2-3" and "STRUCTURAL questions: explore 0-1"). This practical implementation detail is absent from the definitive document.

### 10. "The Deepest Implication" -- PRESENT but Repositioned

Source 07 ends (lines 589-595) with a crystallized statement of the pipeline's design theory: "design is texture applied to a standard spatial structure" vs the needed theory "design is the discovery of the spatial structure that the content implies, followed by texture applied to that discovered structure." The definitive document covers this in Part 8 (lines 762-772) -- it IS present and well-integrated. No gap here, noting for completeness.

---

## Unified Model Assessment

Part 8 (lines 738-840) is a strong synthesis. It successfully:

1. Establishes the deterministic relationship between question types and answer types (lines 744-761)
2. Names the pipeline's implicit design theory as the constraint (lines 762-772)
3. Maps question types to pipeline stages with current status (lines 787-798)
4. Frames the gap as incomplete (not broken) -- 4 of 7 question types covered (line 798)
5. Provides the complete category coverage map (lines 804-812)
6. Distills the three deliverables (lines 832-838)

**Weaknesses in Part 8:**

1. **No worked example in the unified model.** The three-level system (OBSERVE/QUESTION/INVENT) is described abstractly. Part 6 (lines 564-588) provides a worked example for the 8-Roles section, which partially addresses this, but Part 8 itself has no example of how the unified model applies end-to-end. A single concrete example in Part 8 showing all 7 question types applied to one content section would demonstrate the model's power.

2. **The "possibility space" thesis is asserted but not proven mechanistically.** Part 8 states that questions shape the possibility space, and this is supported throughout the document. But the MECHANISM -- why experiential questions cannot produce structural answers, why the relationship is "nearly deterministic" -- could be tightened. The argument is: experiential questions resolve to channel-level decisions (what CSS value for this property?), while structural questions resolve to topology-level decisions (what spatial arrangement for this content?). These operate at different levels of the DOM, and channel decisions cannot produce topology changes. This mechanistic argument would strengthen the thesis.

3. **Category 7 collapse acknowledged but not fully justified.** Line 383 states Category 7 (Content Logic) "collapses into Category 3a" but the distinction between "content logic drives form" (3a) and "content logic as a distinct analytical lens" (7) is not fully argued. If 7 truly collapses into 3a, why was it identified separately in the source material? A brief note on why the collapse is justified would help.

---

## Three-Prescription-Levels Architecture Assessment

The three-level model (TC OBSERVES, Synthesizer QUESTIONS, Builder INVENTS) is present in the definitive document at lines 694-721 and is one of the document's strongest sections.

**Strengths:**
- Clear separation of concerns at each level
- Level 1 explicitly frames observations as "factual statements about what the content IS"
- Level 2 produces questions that "define what the spatial structure needs to ACHIEVE" without prescribing CSS
- Level 3 grants invention authority with blueprints as reference, not mandate
- The worked example (8-Roles section, lines 566-588) demonstrates all three levels with specific output formats

**Gaps:**

1. **Missing: Worked example for a NON-taxonomy archetype.** The 8-Roles example (Taxonomy) is detailed, but the three-level model should also be demonstrated for at least one other archetype -- ideally Tutorial (Implementation Guide) or Comparison (Which Orchestrator?). Source 06 provides the raw material for these (lines 340-387) but the definitive document doesn't walk through the three levels for them.

2. **Missing: What happens when the builder REJECTS the blueprint.** The model says blueprints are "INVITATIONS to invent" and can be "adopted, modified, or replaced." But what is the builder's obligation when rejecting? Must they document the rejection? Must they provide an alternative? This is addressed in source 07's builder prompt modifications (lines 266-278: "You MAY invent STRUCTURAL techniques... IF: 1. derived from content logic 2. documented in decisions file 3. works at 3 breakpoints 4. cite the structural proposition or content logic that drove the invention") but the definitive document's Part 7 does not fully carry this documentation requirement into the three-level model description.

3. **Missing: How the three levels interact with the three builder PASSES.** The three-level model implies a clear stage separation: TC -> Synthesizer -> Builder. But the builder has three passes. Source 07 specifies that Pass 1 gets structural propositions, Pass 2 gets structural opportunity assessment, and Pass 3 verifies structural inventions survive. The definitive document mentions these pass-specific roles (lines 677-683) but doesn't explicitly map them to the three-level model. A mapping would clarify: Level 3 (Builder invents) is primarily Pass 1, with Pass 2 as a discovery/refinement opportunity and Pass 3 as verification-only.

---

## User Answer Integration Assessment

### Answer 1: "External factors for deriving compositional layout"

**Integration depth: STRONG**

The user's insight that external factors (the types of questions asked) shape what the pipeline can produce is deeply integrated. It appears in:
- Part 1 (lines 53-66) as "The Question Framework IS the Bottleneck"
- Part 4 (lines 385-404) as the full possibility-space argument
- Part 8 (lines 740-772) as the unified model's thesis

**Specific weak spot:** The document explains that adding Category 3 questions produces structural answers, but does not fully explain WHY Category 4-5 questions CANNOT produce structural answers. The answer is implied (experiential questions resolve to channel decisions, not topology decisions) but a direct statement would strengthen the argument. Part 7 (lines 604-693) should have a sentence like: "Category 4-5 questions cannot produce structural answers because they resolve to channel-level CSS decisions (what value for border-weight, padding, background) rather than topology-level decisions (what spatial arrangement for this content group). The question framework constrains the decision level, not just the decision type."

### Answer 2: "Equal partners"

**Integration depth: STRONG**

The metaphor/content-logic relationship is well-developed in:
- Part 5 (lines 453-465) as the derivation chain
- Part 8 (lines 774-783) as "equal partners with emphasis on content logic"

**Specific weak spot:** The definitive document establishes the principle but does not show what "equal partners" looks like in practice at the SYNTHESIZER stage. At the TC stage, it's clear: TC produces both a metaphor AND a structural observation. At the builder stage, it's clear: builder receives both atmospheric direction AND spatial blueprints. But at the synthesizer stage -- where the metaphor-driven zone architecture (Section 4) meets the content-logic-driven structural propositions (Section 11) -- how are conflicts resolved? Source 07 (lines 195-216) suggests the Section 4 diagram should support non-linear zones, but doesn't specify what happens when the metaphor's density arc and the content logic's structural demands conflict. For example: the metaphor says Zone 3 should be the densest (dark, compressed). Content logic says Zone 3 (8 roles) should be a spacious grid. Which wins? The "emphasis on content logic" principle implies the grid, but this needs to be explicit in the synthesizer guidance.

### Answer 3: Three prescription levels at three stages

**Integration depth: STRONG -- the best-developed user answer**

The three-level model (OBSERVE/QUESTION/INVENT) is the definitive document's strongest section. It is fully developed as an architectural model with:
- Clear level definitions (lines 698-721)
- A worked example with actual artifact format (lines 566-588)
- Mapping to pipeline stages
- Explicit framing of blueprints as invitations

**Specific weak spots:**
1. Only one worked example (Taxonomy/8-Roles). Need at least one more (see Three-Prescription-Levels Assessment above).
2. The synthesizer produces both QUESTIONS and BLUEPRINTS (Level 2), but the relationship between them is unclear. Is the blueprint the synthesizer's answer to its own question? Is it independently generated? Source 07 (lines 166-193) shows the blueprint as a CSS sketch with responsive notes and risk assessment. This format specification is compressed in the definitive document.
3. The Level 2 output format (Section 11) is described at high level but the exact deliverable structure (name, content logic, spatial realization, CSS sketch, responsive adaptation, risk) from source 07 lines 171-193 is not fully preserved.

---

## Enrichment Patches

### Patch 1: Archetype Transition as Spatial Event

**Location:** After Part 6, line 558 ("spatial structure that CHANGES as the archetype changes")

**Insert:**

```markdown
### Archetype Transitions as Spatial Events

When content shifts archetypes -- from Taxonomy (8 Roles) to Exploration (Beads Memory) -- the spatial transition is itself a design event. The reader should feel the shift in the page's spatial logic, not just see a new heading:

- The grid layout of the Taxonomy section doesn't just stop; it resolves into a transition element
- The Exploration section's spiral logic introduces itself through a different spatial register (narrower container, different density, background shift)
- The transition between archetype-appropriate layouts is itself a structural invention -- not just a zone boundary but a LOGIC boundary

This is the tier above mechanism deployment. Background shifts, border changes, and typography changes serve archetype transitions, but the DECISION of what archetype-appropriate layout to use for each section is the structural invention itself. [Source: 06]
```

### Patch 2: Self-Instruction Mechanism

**Location:** Part 5, after line 452 ("The causal order is reversed")

**Insert:**

```markdown
### Why Explorations Self-Instruct

There is a deeper reason explorations achieved structural invention: their content was ABOUT spatial concepts. DD-006 about fractal self-similarity naturally produced fractal layout. OD-004 about confidence gradients naturally produced strata. When the content's subject matter IS spatial logic, the builder derives spatial structure automatically because the content self-instructs about form.

When content is about non-spatial subjects (auth middleware, Gas Town roles, cooking recipes), no self-instruction occurs. The builder has no automatic mechanism to derive spatial structure from content about non-spatial subjects. The builder falls back to the default: F-pattern with zones, mechanisms as atmospheric texture.

This is why the pipeline needs EXPLICIT structural derivation: to do for all content what design-system content does for itself. The TC Structural Observation replaces the content's self-instruction with explicit instruction. [Source: 06]
```

### Patch 3: S3 as Critical Specialist Gap

**Location:** Part 7, line 638 (specialist changes)

**Insert after S3 mention:**

```markdown
S3 is the most significant specialist gap. The Case Study Analyst reads validated explorations -- the same explorations that contain 29 structural inventions. But S3 extracts "process" and "adapted CSS," not "structural reasoning." The question "WHY did this exploration use a grid here?" is never asked. S3 literally encounters structural invention on every read and systematically discards the structural logic, retaining only the CSS. Adding "Structural Logic Extraction" -- documenting WHY an exploration used a particular spatial form -- would feed content-derived structural reasoning into the synthesizer. [Source: 07]
```

### Patch 4: Builder Standard Path vs Structural Path

**Location:** Part 7, after line 675 (self-aware component guidance)

**Insert:**

```markdown
**Build process expansion:** The current "build zone-by-zone" process implicitly assumes vertical stacking. When structural propositions introduce non-standard layouts, the builder needs an alternative process:

- **Standard Path (vertical zones only):** Build zone-by-zone. At each boundary, set ALL channels simultaneously.
- **Structural Path (grid, split, or non-linear sections):** 1) Build the standard vertical skeleton first (zones above and below the structural section), 2) Build the structural section as a self-contained module, 3) Verify integration with surrounding zones, 4) Verify responsive degradation (grid to stack at narrow viewports), 5) Document the structural choice in decisions file.

Without this procedural guidance, builders granted invention permission will have no procedure for HOW to build non-standard layouts alongside standard zones. [Source: 07]
```

### Patch 5: Three-Category Enrichment Framework

**Location:** Part 7, after line 679 (Pass 2 description)

**Insert:**

```markdown
The current binary enrichment/preservation framework needs a third category:

- **Enrichment** (SAFE -- main task): CSS density within existing zones
- **Preservation** (REQUIRED): Zone skeleton, properties, content, responsive structure
- **Structural Evolution** (DOCUMENTED -- optional): Changing a section's spatial organization based on content logic. Document WHAT, WHY, and responsive degradation. Maximum 1 structural evolution per pass.

This bounded permission (maximum 1 per pass, fully documented) prevents Pass 2 from becoming a redesign while allowing the builder to act on structural opportunities discovered during enrichment. [Source: 07]
```

### Patch 6: PA Question Diagnostic + Weaver Metrics

**Location:** Part 7, after line 692 (PA section)

**Insert:**

```markdown
**Why current PA questions miss structural flatness:** E-07 asks what changes between adjacent sections, but a diligent auditor may notice only texture changes (background, typography) without noticing that every section is a vertically stacked column. E-12 asks about shapes/colors/space, but if every section has the same rectangular shape, the auditor may not flag this because colors and spacing DO vary. No current question specifically surfaces "all sections have the same reading path."

**Weaver structural variety metrics:**

- Distinct layout types used: [count] (vertical, grid, split, progressive-disclosure)
- Sections with non-standard layout: [count] / [total sections]
- Content-form coupling instances: [count] (sections where layout embodies content logic)
- Self-aware components: [count]

**Target:** 1+ non-standard layout section = structural variety present. 0 non-standard sections = structural uniformity (texture may be rich but spatial organization is standard). [Source: 07]
```

### Patch 7: Orchestrator Wiring

**Location:** Part 7, after line 733 (incremental implementation path) or as a new subsection

**Insert:**

```markdown
### Orchestrator Integration

The orchestrator (SKILL.md) wires the stage changes together:

1. **Phase 1 validation:** Check that TC brief contains a Structural Observation section (or note its absence without blocking)
2. **Phase 2 wiring:** Synthesizer assembles Section 11 (Structural Propositions) from TC's Structural Observation + specialist spatial implications. Section 11 goes into `_package-pass-1.md`
3. **Phase 3 builder rotation:** Pass 1 reads Section 11 alongside other sections. Pass 2 checks for structural opportunities. Pass 3 verifies structural inventions survive.
4. **Phase 4 evaluation:** PA question distribution includes E-21/E-22/E-23. Weaver compliance includes structural variety metrics.
5. **Phase 5 comparison report:** New section measuring structural variety in the final build.

[Source: 07]
```

### Patch 8: Risk Assessment Summary

**Location:** Part 7, after line 733 or in Summary section

**Insert:**

```markdown
### Implementation Risk Assessment

Of 13 files requiring v2.0 modifications: [Source: 07]

| Risk | Count | Files |
|------|-------|-------|
| HIGH | 2 | synthesizer-prompt.md, builder-pass-1-prompt.md |
| MEDIUM | 3 | specialist-3-prompt.md, builder-pass-2-prompt.md, weaver-prompt.md |
| LOW | 8 | tc-derivation.md, specialist-1/2/4/5-prompt.md, builder-pass-3-prompt.md, pa-auditor-prompt.md, SKILL.md |

The two HIGH-risk changes are the architectural core: the synthesizer must produce structural propositions, and the builder must receive permission and guidance to act on them. Everything else is plumbing that carries structural intelligence between these two critical nodes. Most changes are safe, additive modifications to existing prompt sections.
```

### Patch 9: Mechanism Catalog as Ceiling

**Location:** Part 3, after line 291 (Pass 3 constraint) or Part 8 discussion

**Insert:**

```markdown
The mechanism catalog functions as a CEILING on structural vocabulary, not a FLOOR. The "Do NOT invent mechanisms not in the package" constraint means the catalog's 20 mechanisms are the maximum structural vocabulary available to the builder -- not a minimum to build upon. This is appropriate for texture (the catalog represents curated knowledge), but catastrophic for spatial structure (the catalog contains zero spatial organization techniques). The catalog as ceiling is a feature for texture and a bug for structure. [Source: 07]
```

### Patch 10: Content Archetype Quick Reference

**Location:** Appendix or end of Part 6

**Insert:**

```markdown
### Content Archetype Quick Reference

| Archetype | Signal Words | Natural Layout | Key Spatial Question |
|-----------|-------------|----------------|---------------------|
| Tutorial | "Step 1...", "Install...", "How to..." | Task islands, stepped progression | What is the dependency chain? |
| Reference | "API", "Endpoint", "Parameters" | Hub-spoke, bento grid, index | What is the access pattern? |
| Argument | "Because...", "Therefore...", "Consider..." | Act structure, crescendo | Where is the climax? |
| Comparison | "vs", "Unlike", "Compared to" | Side-by-side columns, grid | Can items be viewed simultaneously? |
| Exploration | "Deep dive", "Under the hood" | Spiral, zoom levels | What are the abstraction layers? |
| Taxonomy | "Types of...", "Categories" | Strata, hub-spoke, nested | How deep is the hierarchy? |
| Timeline | "History", "Evolution", "Waves" | Chronological axis, act structure | Where is "now"? |
| Dialogue | "Q&A", "Interview", quotes | Alternating blocks, voice differentiation | How many voices? |
| Decision | "When to use", "Which one" | Branching paths, matrix | What are the decision criteria? |

This table could be directly inserted into a TC or synthesizer prompt as a lookup reference for content archetype identification. [Source: 06]
```

### Patch 11: Second Worked Example for Three-Level Model

**Location:** Part 6, after line 588 (8-Roles worked example)

**Insert:**

```markdown
**Applying the three-level model to the Implementation Guide (Tutorial archetype):**

**TC Structural Observation (Level 1 -- OBSERVE):**
> **Content archetype:** TUTORIAL (sequential steps with dependencies)
> **Inherent spatial logic:** 5 dependent steps (Install, Add Rig, Start Roles, Setup tmux, Daily Workflow). Each step requires completion of the previous. Checkpoints exist between step clusters.

**Synthesizer Structural Question (Level 2 -- QUESTION):**
> Can the 5 tutorial steps be made visually self-contained so the reader can focus on one task at a time? Can checkpoint moments be spatially distinct from task steps?

**Synthesizer Spatial Blueprint (Level 2 -- BLUEPRINT):**
```css
/* Task islands with step indicators */
.task-island { border: 1px solid var(--color-border); border-radius: 8px;
  padding: 24px; margin: 24px 0; position: relative; }
.task-island::before { content: 'Step ' attr(data-step);
  position: absolute; top: -12px; left: 16px;
  background: var(--color-bg); padding: 0 8px; font-weight: 500; }
.checkpoint { background: var(--color-success-bg); padding: 16px;
  border-left: 3px solid var(--color-success); margin: 32px 0; }
```

**Builder Invention (Level 3 -- INVENT):**
The builder receives the question and blueprint. May adopt task islands directly, or invent an alternative that serves the tutorial archetype -- perhaps a scrollable step indicator in the margin, or a progress bar that fills as sections pass. The builder also decides whether checkpoint callouts deserve spatial prominence (full-width breathing moments) or inline treatment based on content weight.
```

### Patch 12: v1.1/v2.0 Synthesizer Conflict Resolution

**Location:** Part 7, after line 661 (synthesizer changes)

**Insert:**

```markdown
**Cognitive load mitigation:** Adding Category 3 structural families to Section 10 grows it from 5-7 questions to 7-10. To prevent cognitive overload, questions should be explicitly categorized: "TEXTURE questions (explore 2-3)" and "STRUCTURAL questions (explore 0-1)." This signals to the builder that structural questions are higher risk, higher reward -- optional but powerful. [Source: 07]
```

---

## Summary

The definitive document is strong on thesis, evidence, and the unified model. Its primary weakness is compression of ACTIONABLE IMPLEMENTATION DETAILS from source 07. The 7-source synthesis successfully captures the analytical argument but loses the specific prompt modifications, format examples, verification checklists, risk assessments, and orchestrator wiring that would be needed to actually implement the v2.0 changes.

**Priority ranking of patches:**

1. **Patch 4** (Standard/Structural build path) -- Without this, builders granted invention permission have no procedure
2. **Patch 7** (Orchestrator wiring) -- Without this, stage changes don't connect
3. **Patch 8** (Risk assessment) -- Critical for implementation planning
4. **Patch 3** (S3 as critical gap) -- Key diagnostic finding
5. **Patch 6** (PA diagnostic + weaver metrics) -- Measurement gap
6. **Patch 5** (Three-category enrichment) -- Pass 2 operational gap
7. **Patch 10** (Archetype quick reference) -- Most actionable artifact from source 06
8. **Patch 11** (Second worked example) -- Strengthens the three-level model
9. **Patch 1** (Archetype transitions) -- Conceptual gap
10. **Patch 2** (Self-instruction mechanism) -- Explanatory gap
11. **Patch 9** (Mechanism catalog as ceiling) -- Framing gap
12. **Patch 12** (Cognitive load mitigation) -- Implementation detail
