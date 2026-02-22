# TC Skill Sufficiency Audit for /build-page Sub-Skill Mode

**Auditor:** tc-sufficiency-audit agent (Opus)
**Date:** 2026-02-20
**Files Read:**
- `~/.claude/skills/tension-composition/SKILL.md` (1,946 lines, ALL read in 3 chunks: 1-500, 500-999, 999-1498, 1498-1946)
- `~/.claude/skills/build-page/SKILL.md` (477 lines, ALL read)
- `design-system/pipeline/conventions-brief.md` (547 lines, ALL read)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (first 200 lines read for structure)
- `design-system/compositional-core/vocabulary/tokens.css` (first 100 lines read for structure)

---

## 1. Sufficiency Matrix

| # | Dimension | Status | Evidence | Enrichment Needed |
|---|-----------|--------|----------|-------------------|
| 1 | Phase 0-3 Separability | **NEEDS ENRICHMENT** | Phases 0-3 are conceptually separable but Phase 3 ends at metaphor commitment (Step 3.5, line 726-789), NOT at mechanism selection. The build-page SKILL.md says TC does "Phase 3: Mechanism Selection" but mechanism selection is actually Phase 4 (Step 4.0-4.1, lines 1005-1119). There is a PHASE NUMBERING MISMATCH between how build-page describes TC phases and what TC actually contains. Also, Phase 3 naturally flows into Phase 4 with no stopping point -- Step 3.5 says "Proceed to Phase 4" (line 789). | Add explicit "SUB-SKILL STOP POINT" after Phase 3.5 metaphor commitment, with clear "if in sub-skill mode, produce TC brief and STOP" instruction. |
| 2 | Output Format Specification | **NEEDS ENRICHMENT** | TC skill Phase 5 (line 1613-1663) defines TWO outputs: Output A (conventions brief, ~60-80 lines) and Output B (HTML layout). Neither is a "TC brief." The build-page SKILL.md (lines 48-56) expects a ~50 line "_tc-brief.md" with 5 specific sections (STRUCTURAL METAPHOR, ZONE ARCHITECTURE, CONTENT TENSIONS, SELECTED MECHANISMS, METAPHOR-IMPLIED CSS DIRECTIONS). The TC skill has NO specification for this format ANYWHERE. The TC agent must improvise the output format entirely. | Add a "TC BRIEF OUTPUT FORMAT" section specifying the 5-section ~50-line brief format expected by /build-page. |
| 3 | Mechanism Selection Quality | **NEEDS ENRICHMENT** | Phase 4 (lines 1005-1055) provides EXCELLENT mechanism selection guidance -- per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+), justification requirements, mechanism catalog reference. BUT: this is in Phase 4, which the TC agent is told to stop BEFORE reaching (build-page says "stop after Phase 3"). If TC stops at Phase 3.5, mechanism selection hasn't happened yet. The build-page prompt says TC does "Phase 3: Mechanism Selection" but the TC skill puts mechanism selection in Phase 4, Step 4.0. | Either: (a) extend TC sub-skill to include Phase 4 Step 4.0-4.1 (mechanism extraction + property extraction), or (b) add a condensed mechanism selection step to the TC brief output that pulls from Phase 4 guidance. |
| 4 | Metaphor Structural Test | **SUFFICIENT** | Phase 3 includes robust structural testing: Step 3.5E Perceptual Risk Assessment (lines 553-575) tests for structural vs textual metaphors, Step 3.5G Metaphor Scoring Rubric (lines 632-684) includes Criterion 3 "Structural Survival" (remove labels test) AND 6 binary rejection checks (R2: "requires visible text labels" = REJECT). The 6-criterion rubric with >= 12/18 threshold and Interpretive Distance >= 2 mandatory gate are specifically designed to prevent announced metaphors. | None -- this is the skill's strongest section. |
| 5 | Content-Specific Derivation Depth | **SUFFICIENT** | Phase 1 (lines 119-201) provides 14 possible axes (4 core + 5 extended + 5 conditional), each with content-specific triggers, yield ratings, and structural properties. The BECAUSE test (line 309: "The reader needs X BECAUSE [specific content property]") prevents generic derivation. Axis interaction effects (lines 179-185) and opposition-predicts-richness principle (lines 166-175) ensure content-specific results. The extended axes (NAVIGATE, TRUST, EVALUATE, ORIENT, RECONCILE) are always asked but marked LOW YIELD when not relevant, preventing over-application. | None. |
| 6 | Sub-Skill Awareness | **NEEDS ENRICHMENT** | The TC skill has ZERO awareness of sub-skill mode. Every instruction assumes the same agent runs Phases 0-5 and produces HTML output. Specific problems: (a) Phase 0D (line 70) says "Every page runs the FULL pipeline (Phases 1-5). No tier routing, no phase skipping." This directly contradicts /build-page's instruction to stop after Phase 3. (b) Phase 0E Library Access Prohibition (line 95) says "YOU MUST NOT read [library] during Phases 0-3" with "When library access is permitted: Phase 4." But the TC sub-skill agent never reaches Phase 4. (c) Phase 5 Output A (line 1617) describes the conventions brief format, which is close to what /build-page wants but differs in structure and length. | Add a "SUB-SKILL MODE" section near the top of the file (after the critical principle, before Phase 0) that: specifies the stop point, defines the TC brief format, clarifies which phases to run, and says "your output goes to a builder agent, not to you." |
| 7 | Reference File Needs | **NEEDS ENRICHMENT** | The TC agent, as invoked by build-page, reads ONLY the TC skill + content file (build-page lines 37-38). But TC Phase 4 Step 4.0 (line 1005) says "You may NOW consult: mechanisms.md, components.md" for mechanism selection. If the TC agent stops at Phase 3.5, it never reaches Phase 4 and thus never reads the mechanism catalog. Problem: the TC brief is supposed to contain "SELECTED MECHANISMS: Which mechanisms serve the metaphor, from which catalog categories" (build-page line 54) -- but the TC agent has never read the mechanism catalog. It must select mechanisms from memory or from the skill text (which lists mechanism categories at line 1036-1043 but not mechanism details). | If TC sub-skill includes mechanism selection, the build-page spawn prompt must route mechanism-catalog.md to the TC agent. Currently it does not. |
| 8 | Pipeline-Specific Enrichment Gaps | **NEEDS ENRICHMENT** | The build-page expects the TC brief to contain "ZONE ARCHITECTURE: How the content divides into zones, driven by the metaphor" (line 52). The TC skill has NO explicit zone planning step. Zones emerge implicitly through Phase 4.3 multi-coherence rules (R-MC-06: "2-4 major zones, producing 2-4 zone boundaries" at line 1361) and Phase 4.6 transition grammar (lines 1399-1419). But these are in Phase 4, which the TC agent doesn't reach. Specific gaps: (a) No explicit zone count derivation, (b) No transition type specification per boundary, (c) No channel activation plan per zone, (d) No coherence arc (Opening/Building/Climax/Resolution) -- this is in conventions-brief Section 4 (lines 138-155) but NOT in the TC skill. | Add zone architecture planning as part of the TC brief output format: zone count, zone names, transition types between zones, coherence arc shape. |
| 9 | Existing Enrichments Review | **SUFFICIENT WITH CAVEAT** | The TC skill was enriched from 1,583 to 1,878 lines (then further to ~1,946). Enrichments include: (a) Per-category mechanism minimums (S:1+, H:1+, C:1+, D:1+, N:1+) at line 1033-1043 -- RELEVANT for sub-skill if mechanism selection is included, (b) Perceptual Risk Assessment at line 553-575 -- RELEVANT for structural metaphor quality, (c) Perceptual Cost Assessment at line 577-623 -- RELEVANT for flagging builder risks, (d) 6-Criterion Metaphor Quality Rubric at line 632-684 -- RELEVANT for metaphor quality gating, (e) Builder Instruction Warnings appendix at lines 1841-1928 -- RELEVANT for builder handoff (these ARE the warnings that should go into the TC brief). CAVEAT: The Universal Compositional Requirements at line 80-92 include rules that belong to the BUILDER, not the TC agent (e.g., "container width 940-960px" -- this is a CSS implementation rule, not a metaphor derivation rule). In sub-skill mode, these should be flagged as "builder constraints, not TC constraints." | Minor: clarify which Universal Compositional Requirements are TC-relevant (metaphor mandatory, per-category minimums, reinforcing pairs) vs builder-relevant (container width, multi-channel coherence at zone boundaries). |
| 10 | Competition with Conventions Brief | **NEEDS ENRICHMENT** | SIGNIFICANT redundancy exists between the TC skill and conventions-brief. Overlapping content: (a) Perception thresholds: TC Phase 4.0 (lines 830-934) duplicates conventions-brief Section 2 (lines 51-69). TC is MORE detailed (specific guardrail tables) but conventions-brief is MORE concise. (b) Multi-coherence: TC Phase 4.3 (lines 1294-1361) duplicates conventions-brief Section 4 (lines 94-178). TC has the binding rules (R-MC-01 through R-MC-06); conventions-brief has the coherence arc planning and typographic progression -- each has content the other lacks. (c) Fractal echo: TC Phase 4.7 (lines 1421-1453) duplicates conventions-brief Section 5 (lines 181-231). Nearly identical content. (d) Transition grammar: TC Phase 4.6 (lines 1399-1419) duplicates conventions-brief Section 7 (lines 255-280). TC has the lookup table; conventions-brief has the concrete CSS values. | In sub-skill mode, TC stops before Phase 4 so most overlap is in sections the TC agent never reads. But if mechanism selection is added to TC sub-skill, overlap becomes active. Resolution: TC skill is AUTHORITATIVE for Phases 0-3 (derivation). Conventions brief is AUTHORITATIVE for Phase 4+ (building). The TC brief should reference conventions-brief sections for builder guidance rather than duplicating them. |

---

## 2. Specific Enrichment Recommendations

### BLOCKING Issue #1: Phase Numbering Mismatch

**Problem:** The build-page SKILL.md (lines 41-46) describes TC phases as:
```
Phase 0: Content Analysis (multi-axis questioning)
Phase 1: Tension Derivation
Phase 2: Metaphor Collapse
Phase 3: Mechanism Selection
```

But the TC skill's ACTUAL phase numbering is:
```
Phase 0: Content Assessment
Phase 1: Multi-Axis Questioning
Phase 2: Tension Derivation
Phase 3: Metaphor Collapse
Phase 3.5: Metaphor Commitment (Lock-In Gate)
Phase 4: Compositional Layout Generation (includes mechanism selection at Step 4.0)
Phase 5: Output
```

The build-page says "stop after Phase 3 (mechanism selection)" but TC's Phase 3 is metaphor collapse -- mechanism selection is Phase 4. A TC agent reading both files receives CONTRADICTORY instructions about what to do.

**Fix Location:** Two files need coordinated changes:
1. `~/.claude/skills/build-page/SKILL.md` lines 41-46 -- correct phase numbering
2. `~/.claude/skills/tension-composition/SKILL.md` -- add sub-skill mode section

**Proposed Change to build-page (lines 41-46):**
```
Execute Phases 0 through 3.5 of the tension-composition skill on this content:
- Phase 0: Content Assessment (type classification, scope, section identification)
- Phase 1: Multi-Axis Questioning (FEEL/UNDERSTAND/DO/BECOME + extended + conditional axes)
- Phase 2: Tension Derivation (genuine vs cosmetic, richness scoring, selection)
- Phase 3: Metaphor Collapse (structural overlap, search query, candidate scoring, 6-criterion rubric)
- Phase 3.5: Metaphor Commitment (lock-in gate, divergence check)
- THEN: Mechanism Selection (using categories from the skill + mechanism-catalog.md if provided)

DO NOT proceed to Phase 4 (Compositional Layout Generation) or Phase 5 (Output).
```

### BLOCKING Issue #2: No TC Brief Output Format

**Problem:** The TC skill defines Output A (conventions brief, 60-80 lines) and Output B (HTML layout) at Phase 5, but /build-page expects a completely different ~50 line "TC brief" with 5 specific sections. The TC agent has no format specification to follow.

**Fix Location:** `~/.claude/skills/tension-composition/SKILL.md` -- add new section between line 24 ("Success = conscious construction") and line 27 ("# Tension-Composition Pipeline").

**Proposed Content (~40 lines):**

```markdown
## SUB-SKILL MODE (When Invoked by /build-page)

When this skill is invoked by the /build-page orchestrator, you are operating as a SUB-SKILL, not a standalone pipeline. Key differences:

### What Changes
1. **STOP POINT:** Run Phases 0 through 3.5 (metaphor commitment), then perform mechanism selection from the categories below. DO NOT proceed to Phase 4 (layout generation) or Phase 5 (full output).
2. **OUTPUT FORMAT:** Produce a TC BRIEF (~50 lines), not a full conventions brief or HTML.
3. **YOUR CONSUMER:** A different Opus agent (the builder) receives your TC brief. You do NOT build the page.
4. **MECHANISM SELECTION:** After Phase 3.5, select mechanisms by category using the per-category table in Phase 4 Step 4.0. If mechanism-catalog.md was provided, consult it. If not, select from categories listed in this skill.

### TC Brief Format (MANDATORY -- write to the file path specified by the orchestrator)

```
1. STRUCTURAL METAPHOR
   [Metaphor name]. [1 sentence: what it is and WHY it is structural -- what CSS properties it implies].
   Interpretive Distance: [score/3]. Structural Survival: [score/3]. Quality Score: [total/18].
   Builder Warnings: [W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-IMPLICIT as applicable]

2. ZONE ARCHITECTURE
   Zone count: [N]. Coherence arc: [OPENING -> BUILDING -> CLIMAX -> RESOLUTION or similar].
   [For each zone: name, semantic role, background direction, transition type TO next zone]
   Example: Z1 "Orientation" (sparse, warm) --SMOOTH--> Z2 "Investigation" (denser, cooler) --BRIDGE--> Z3 "Synthesis" (dense, deep) --BREATHING--> Z4 "Resolution" (sparse, settled)

3. CONTENT TENSIONS
   Primary: [Side A] vs [Side B]. Richness: [score]. Type: [GENUINE/COSMETIC].
   Secondary (if any): [tension statement].
   BECAUSE: [the specific content property that creates this tension].

4. SELECTED MECHANISMS (by category, per-category minimum 1+)
   Spatial: [mechanism names + 1-sentence WHY for this content]
   Hierarchy: [...]
   Component: [...]
   Depth/Emphasis: [...]
   Structure/Navigation: [...]
   Reinforcing pairs: [which 2+ mechanisms encode the SAME semantic dimension through different CSS channels]
   Deliberately absent: [3+ mechanisms NOT deployed and WHY]

5. METAPHOR-IMPLIED CSS DIRECTIONS
   [For each zone boundary: which channels shift, in what direction, with what semantic meaning]
   [Specific CSS patterns the metaphor suggests -- e.g., "geological strata -> visible layer boundaries via border-left weight progression, density gradient via tightening spacing, stratification via bg color darkening"]
   [Responsive story at 768px: how the metaphor degrades naturally]
```

### What Does NOT Change
- ALL Phase 0-3.5 procedures remain identical
- ALL quality gates (Addition Test, BECAUSE test, Richness Formula, Perceptual Risk, 6-Criterion Rubric, 6 Binary Rejection Checks) remain mandatory
- Library prohibition during Phases 0-3 remains absolute
- Phase 3.5 Metaphor Commitment gate remains mandatory
```

### BLOCKING Issue #3: Mechanism Selection Without Catalog Access

**Problem:** /build-page expects the TC brief to contain "SELECTED MECHANISMS" but the TC agent spawn prompt (build-page lines 37-38) only routes the TC skill + content file to the TC agent. The mechanism catalog is NOT provided. The TC skill's mechanism selection guidance (Phase 4 Step 4.0) says "Read the FULL mechanism catalog" but the catalog isn't available.

**Fix Location:** `~/.claude/skills/build-page/SKILL.md` lines 37-38.

**Proposed Change:**
```
Read these files IN ORDER:
1. ~/.claude/skills/tension-composition/SKILL.md -- YOUR PROCESS. Follow Phases 0-3.5 + mechanism selection.
2. [content-file-path] -- THE CONTENT to analyze.
3. design-system/compositional-core/grammar/mechanism-catalog.md -- MECHANISM CATALOG. Consult during mechanism selection step. Extract TECHNIQUES, not implementations.
```

### SIGNIFICANT Issue #4: Phase 0D Contradiction

**Problem:** TC skill Phase 0D (line 70) says "Every page runs the FULL pipeline (Phases 1-5). No tier routing, no phase skipping." In sub-skill mode, the agent IS skipping Phases 4-5. This creates a contradiction that may confuse the agent.

**Fix Location:** `~/.claude/skills/tension-composition/SKILL.md` line 70.

**Proposed Change:**
```
**Every standalone invocation runs the FULL pipeline (Phases 0-5).** No tier routing, no phase skipping.

**Exception:** In SUB-SKILL MODE (invoked by /build-page), run Phases 0 through 3.5 + mechanism selection, then produce the TC brief. See SUB-SKILL MODE section above.
```

### SIGNIFICANT Issue #5: Zone Architecture Planning Gap

**Problem:** The build-page TC brief expects "ZONE ARCHITECTURE: How the content divides into zones, driven by the metaphor" but the TC skill has no explicit zone planning step before Phase 4. Zone count appears in Phase 4.3 R-MC-06 (line 1361) and coherence arc planning is in the conventions-brief (lines 138-155), not in the TC skill at all.

**Fix Location:** The TC BRIEF FORMAT section proposed in BLOCKING Issue #2 already addresses this by including zone architecture as a required output section. The TC agent derives zones from:
- Phase 0C section identification (content sections)
- Phase 2 tension structure (where tensions peak/resolve)
- Phase 3 metaphor structure (the metaphor's natural divisions)

No additional skill enrichment needed beyond the TC brief format -- the zone architecture emerges naturally from the metaphor. The format specification forces the TC agent to ARTICULATE it explicitly.

### MODERATE Issue #6: Universal Compositional Requirements Scope

**Problem:** Lines 80-92 list 6 "Universal Compositional Requirements" that apply to all pages. Some are TC-relevant (metaphor mandatory, per-category minimums), others are builder-relevant (container width 940-960px, multi-channel coherence at zone boundaries, 5-scale fractal coherence). In sub-skill mode, the TC agent doesn't need to enforce builder constraints.

**Fix Location:** No change needed. The TC agent should know these exist (they inform metaphor selection -- e.g., knowing container width is 940-960px prevents selecting metaphors that demand narrow containers). The current framing is acceptable.

---

## 3. Redundancy Map

| Content | TC Skill Location | Conventions Brief Location | Authoritative Source | Action |
|---------|-------------------|---------------------------|---------------------|--------|
| **Perception thresholds** (bg >= 15 RGB, letter-spacing >= 0.025em, etc.) | Phase 4.0, lines 830-934 (detailed tables) | Section 2, lines 51-69 (concise paragraph form) | **Conventions brief** for builder. TC for derivation risk assessment. | TC agent reads thresholds for Perceptual Risk scoring (Phase 3.5E). Builder reads conventions-brief for CSS implementation. No deduplication needed -- they serve different consumers at different stages. |
| **Multi-coherence rules** | Phase 4.3, lines 1294-1361 (R-MC-01 through R-MC-06) | Section 4, lines 94-178 (narrative + coherence arc + typographic progression) | **SPLIT:** TC has binding rules (R-MC-01 through R-MC-06). Conventions brief has coherence arc planning and CSS recipes. | TC skill is authoritative for multi-coherence RULES. Conventions brief is authoritative for multi-coherence IMPLEMENTATION. No conflict -- TC agent stops before needing implementation guidance. |
| **Fractal echo** | Phase 4.7, lines 1421-1453 (5 binary rules + echo table) | Section 5, lines 181-231 (scale table + parametric echo + character-scale register) | **Conventions brief** for builder (includes CSS recipes). TC for structural planning. | TC agent doesn't need fractal echo in sub-skill mode (it's a Phase 4 building concern). Builder gets this from conventions-brief. No change needed. |
| **Transition grammar** | Phase 4.6, lines 1399-1419 (lookup table + type taxonomy) | Section 7, lines 255-280 (three types with CSS values) | **Conventions brief** for builder (includes concrete CSS). TC for zone architecture planning. | TC brief should specify transition TYPES between zones (SMOOTH/BRIDGE/BREATHING). Builder implements using conventions-brief CSS values. TC agent needs the type taxonomy (which it has in Phase 4.6) but only for planning, not implementation. |
| **6 CSS channels** | Phase 4.2, lines 1212-1222 (list + brief description) | Section 4, lines 97-106 (6 channels with primary/enhancement distinction) | **Conventions brief** (adds primary vs enhancement distinction that TC lacks). | No active conflict. TC agent doesn't need channel distinction in sub-skill mode. |
| **Container width** | Phase 4.0, lines 898-934 (detailed with examples) | Section 1, line 27 (one line) | **Both** (same value, different detail level). | No conflict. |
| **Soul constraints** | Phase 2 Side B, lines 213-263 (detailed with personality profile) | Section 1, lines 11-48 (concise) | **TC skill** for derivation (needs full personality profile for tension derivation). **Conventions brief** for building (needs concise reference). | No deduplication needed -- they serve different purposes. |
| **Builder warnings** | Appendix, lines 1841-1928 (6 warning types + selection protocol) | Not present | **TC skill** (unique content). | These are CRITICAL for the TC brief. The TC agent should include applicable warnings in the brief output. Currently only in TC skill, correctly placed. |

**Summary:** Redundancy exists but is NOT problematic because TC and conventions-brief serve different consumers at different pipeline stages. In sub-skill mode, the TC agent reads Phases 0-3.5 (where overlap is minimal) and the builder reads the conventions-brief (where most overlap lives). The only active redundancy concern is if the TC sub-skill is extended to include Phase 4 mechanism selection, which would put the TC agent in overlap territory. Solution: TC brief references conventions-brief sections rather than duplicating content.

---

## 4. BLOCKING Issues (Must Fix Before TC Can Serve as Sub-Skill)

### B1. Phase Numbering Mismatch (BLOCKING)
**Impact:** TC agent receives contradictory phase numbering from build-page vs TC skill. Will either run wrong phases or be confused about when to stop.
**Fix:** Correct build-page phase descriptions to match TC skill numbering. ~10 line edit.

### B2. Missing TC Brief Output Format (BLOCKING)
**Impact:** TC agent has no specification for its output. Will improvise, producing inconsistent briefs that may omit critical information the builder needs.
**Fix:** Add SUB-SKILL MODE section to TC skill with TC brief format. ~40 lines.

### B3. Mechanism Catalog Not Routed to TC Agent (BLOCKING)
**Impact:** TC agent is told to select mechanisms but has never read the mechanism catalog. Will select from skill-text summaries (lines 1036-1043) which list category names but not mechanism details.
**Fix:** Add mechanism-catalog.md to TC agent's file list in build-page. ~1 line edit.

---

## 5. Non-Changes (Preserve What Works)

### DO NOT CHANGE: Phases 0-3.5 Core Process
The TC skill's derivation pipeline (multi-axis questioning, tension derivation, metaphor collapse, candidate scoring, commitment gate) is the system's strongest asset. It should remain IDENTICAL in sub-skill mode. No simplification, no shortcuts.

### DO NOT CHANGE: Phase 3.5 Quality Gates
The 6-criterion rubric (lines 632-684), 6 binary rejection checks (lines 671-683), Perceptual Risk Assessment (lines 553-575), and Perceptual Cost Assessment (lines 577-623) are battle-tested from 15 test layouts + 3 experiments. These are WHY the TC skill produces structural metaphors. Removing any gate to "simplify" sub-skill mode would degrade metaphor quality.

### DO NOT CHANGE: Library Access Prohibition
Phase 0E (lines 95-116) prohibiting library access during Phases 0-3 is the single most important anti-gravity mechanism. In sub-skill mode, the TC agent never reaches Phase 4-5 where library access is permitted -- this means the prohibition is AUTOMATICALLY enforced by the stop point. No change needed.

### DO NOT CHANGE: Construction Consciousness Framing
The "you are CONSTRUCTING, not DISCOVERING" principle (lines 6-23) is foundational to metaphor quality. It prevents the TC agent from treating derivation as lookup. Must remain in sub-skill mode.

### DO NOT CHANGE: Builder Instruction Warnings Appendix
Lines 1841-1928 contain 6 warning categories (W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT) with a selection protocol. These are CRITICAL for the TC brief -- the TC agent should include applicable warnings. The warnings are currently well-specified and complete.

### DO NOT CHANGE: Richness Formula and Tension Landscape
Phase 2's richness formula (Opposition x Overlap x Width, lines 311-348) and KortAI tension landscape (lines 353-367) are calibrated from test data. The cap on richness at metaphor selection (lines 343-350) prevents the documented failure mode where high-richness metaphors produce low-quality layouts.

### DO NOT CHANGE: Domain Search Menu
Phase 3's domain search menu (lines 455-470) and incompatible metaphor families (lines 494-501) are a valuable creative scaffold. They should remain available in sub-skill mode.

### DO NOT CHANGE: Phase 0A-0C Content Assessment
Content type classification, scope assessment, and section identification are essential pre-derivation steps that produce information needed for the TC brief's zone architecture section.

---

## 6. Summary Assessment

**Overall Verdict: NEEDS ENRICHMENT (3 BLOCKING, 2 SIGNIFICANT, 1 MODERATE)**

The TC skill is an exceptionally strong derivation engine. Its Phases 0-3.5 are battle-tested and well-specified. The enrichment needed is NOT to the derivation process itself but to the HANDOFF PROTOCOL -- how the skill communicates its output to a downstream consumer.

**Effort estimate:** ~50 lines added to TC skill (SUB-SKILL MODE section + Phase 0D amendment). ~15 lines changed in build-page (phase numbering + file routing). Total: ~65 lines across 2 files.

**Risk assessment:** LOW. All changes are ADDITIVE (new section) or CORRECTIVE (phase numbering). No existing process is modified. The sub-skill mode section can be clearly delineated so standalone invocations are unaffected.

**Priority order:**
1. B2 (TC brief format) -- without this, the TC agent produces inconsistent output
2. B1 (phase numbering) -- without this, the TC agent runs wrong phases
3. B3 (mechanism catalog routing) -- without this, mechanism selection is uninformed
4. S4 (Phase 0D contradiction) -- agent confusion risk
5. S5 (zone architecture) -- addressed by B2's format specification
6. M6 (requirements scope) -- no change needed
