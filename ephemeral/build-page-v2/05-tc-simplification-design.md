# TC Skill Simplification Design

**Agent:** tc-simplifier
**Date:** 2026-02-27
**Input:** SKILL-REWRITE.md (841 lines), 15-process-adversarial.md (Part 2 Section 1), 05-verification.md (3 non-blocking findings)
**Target:** ~300 lines (64% reduction)

---

## Key Design Principle

This TC skill is used BY THE BUILDER in the SAME context window. The builder reads it, runs through the derivation, writes a conviction brief, then builds. It is a creative process guide for one agent, not a protocol for a separate TC agent handing off to a downstream builder. This changes everything:

- No handoff ceremony (the builder IS the TC agent)
- No library access prohibition enforcement (builder reads mechanism-catalog.md after metaphor lock anyway)
- No elaborate commitment gate (builder is not going to cheat against themselves)
- No exploration loading section (builder loads its own context)
- No fix cycle re-invocation protocol (orchestrator handles this)
- Phase 4 (Compositional Architecture) REMOVED entirely -- the builder does this during building, not as pre-planning ceremony

---

## Verification Findings Integration

Three non-blocking findings from 05-verification.md that must be addressed:

1. **Remove "16-18 mechanisms"** -- Line 71 plants an implicit numeric target. CUT entirely. The governing evaluation (RICHNESS = DENSITY x RESTRAINT x CONFIDENCE) is the principle; no mechanism count needed.

2. **Reframe channel shift counts** -- Line 611 says ">=3 of 6 channels must shift simultaneously." Reframe as principle: "At each zone boundary, multiple channels should reinforce the same direction -- the reader should feel entering a different room, not notice a CSS property changed."

3. **Reframe transition type counts** -- Line 596 says "at least 3 DIFFERENT transition types." Reframe as principle: "Vary your transitions. Uniform transitions create mechanical rhythm. Some shifts are smooth (continuation), some are bridges (orientation), some are breathing (full reset)."

---

## Section-by-Section Simplification Map

### OPENING PRINCIPLE (Current: lines 6-23, ~18 lines)

**Action:** KEEP FULLY. This is the document's strongest section per verification Test 8.

**Keep (lines 6-23):**
- "You are CONSTRUCTING a composition, not DISCOVERING one" framing
- What this means (4 bullets)
- The opposite / discovery bias (3 examples)
- "Success = conscious construction" closer

**Target: ~18 lines** (unchanged)

**Rationale:** The verification explicitly says this principle is "brilliant and undersustained." We keep it fully and echo it at 2 key transition points later (before metaphor search, before brief writing).

---

### PIPELINE OVERVIEW (Current: lines 27-39, ~13 lines)

**Action:** SIMPLIFY to 4 lines.

**Cut:**
- The ASCII pipeline diagram (lines 33-36) -- builder knows the flow from reading sequentially
- Phase 5 standalone reference (line 38) -- standalone mode gets its own appendix

**Keep:**
- One-sentence pipeline description (line 29)
- Simplified 4-phase list: Content Assessment -> Questioning -> Tension + Metaphor -> Conviction Brief

**Target: ~4 lines**

---

### PHASE 0: CONTENT ASSESSMENT (Current: lines 42-91, ~50 lines)

**Action:** SIMPLIFY to ~40 lines. Cut library prohibition ceremony, keep routing.

**Keep (lines 42-68), simplified:**
- Step 0A Content Type routing (prose/mixed/visual/self-referential) -- 4 bullets, ~8 lines
- Step 0B Scope routing (short/standard/long/massive) -- 4 bullets, ~8 lines
- Step 0C Section Identification -- 3 steps, ~5 lines

**Keep (lines 69-75), rewritten:**
- Step 0D Pipeline Entry -- but REMOVE "16-18 mechanisms" sentence entirely (verification finding #1). Keep: "Peak richness occurs at maximum content-mechanism fit, not maximum technique count." Keep Addition Test as sole escape valve. ~4 lines

**Simplify (lines 77-91):**
- Library Access Prohibition: reduce from 13 lines to 3 lines. The builder is in the same window -- they know not to read case studies before deriving their metaphor. One principle sentence + one "when permitted" note.

**New addition (~5 lines):**
- Step 0E: Read the content deeply. Not skim, not outline -- READ. Inhabit the reader's experience. What surprises you? What repeats? Where does the energy peak? This is the only input that matters.

**Cut entirely:**
- Sub-skill mode / orchestrator references (line 73) -- the builder IS the TC agent
- Detailed library access reasoning (lines 86-90) -- unnecessary for same-window use

**Target: ~40 lines**

---

### PHASE 1: MULTI-AXIS QUESTIONING (Current: lines 94-173, ~80 lines)

**Action:** SIMPLIFY to ~80 lines. Keep 4 core axes, cut extended axes table and structural triggers table, keep Opposition Principle, cut axis interaction effects.

**Keep fully (lines 94-106):**
- Phase 1 header + opening instruction (~3 lines)
- Core Four table (FEEL/UNDERSTAND/DO/BECOME) -- 4 rows with Question + What It Produces + Richest When. ~12 lines including header

**Cut (lines 107-130):**
- Extended Core table (NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE) -- 24 lines CUT
- Structural Trigger Axes table (COMPARE/IDENTIFY/DISCOVER/SEE/REMEMBER) -- 12 lines CUT

**Replace with (~15 lines):**
- Brief instruction: "After the core four, ask yourself: does this content have dimensions the core four missed? Some content demands NAVIGATION questions (how do I move through this?), TRUST questions (why should I believe this?), RECONCILIATION questions (how do I square this with what I already know?). Ask what the content demands. Don't deploy axes for coverage -- deploy them because the content pulls you there."
- 5-6 example follow-up questions that a builder might discover, phrased as invitations not as a lookup table

**Keep (lines 138-148), slightly simplified:**
- The Opposition Principle: "The axes that produce the RICHEST tension are those whose demands OPPOSE the system's personality." ~8 lines
- The specific opposition ranking (RECONCILE richest, TRUST lowest) -- valuable creative guidance

**Cut (lines 150-158):**
- Axis Interaction Effects -- 8 lines. Too procedural. If axis pairs compound, the builder will discover this naturally.

**Keep (lines 131-136), simplified:**
- Axis Selection Protocol condensed to 2 lines: "Run core four always. Ask additional questions only where content demands them."
- REMOVE "4-14 entries" count (verification Test 6, leak #2). Replace with: "As many entries as the content genuinely demands."

**Keep (lines 160-172):**
- Phase 1 Output format -- the axis/needs/structural-properties template. ~10 lines

**New addition (~5 lines):**
- Echo of opening principle before output: "Remember: you are CONSTRUCTING this reading. These needs are the needs YOU see through YOUR lens. Another reader would construct different needs. That is correct -- your construction is what will make this page yours."

**Target: ~80 lines**

---

### PHASE 2: TENSION DERIVATION (Current: lines 176-315, ~140 lines)

**Action:** SIMPLIFY to ~60 lines. Keep the high-value diagnostic tests, cut the reference tables.

**Keep fully (lines 176-178):**
- Phase 2 header + opening frame. ~3 lines

**Keep (lines 180-182), simplified:**
- Side A reference -- 1 line: "Side A = your Phase 1 needs and their structural properties."

**Keep (lines 184-218), condensed to ~15 lines:**
- Side B: KortAI Design System Personality -- the world description is essential, but it is already embedded in the world-description the builder will have from identity files. Condense to: "Side B = the sharp warm world. Every surface is sharp, light is direct, palette is warm, 3 typefaces, content lives within 940-960px. The personality spectrum..." Keep the personality spectrum table (8 lines) and Soul Test (5 lines) but make them a compact reference block.

**Keep fully (lines 220-267):**
- The Addition Test (~8 lines) -- THE most important diagnostic
- Three Criteria for Genuine Tension (~10 lines)
- Three Criteria for Cosmetic Tension (~6 lines)
- Tension Spectrum diagram (~7 lines)
- Deriving Tension protocol (6 steps, ~8 lines) -- these are the BECAUSE and SUBSTITUTION tests that the verification confirms are high-value

**Cut (lines 269-280):**
- Evaluating Tension Richness -- 12 lines of "opposition depth / structural overlap / metaphor space width." This is refinement ceremony. The builder who has genuine tension will naturally evaluate candidates.

**Keep (lines 281-296), condensed to ~5 lines:**
- Tension Landscape: KortAI Quick Reference -- condense to strongest/zero lists without the current formatting overhead

**Cut (lines 298-306):**
- Tension Validity Check -- 9 lines. Redundant with Addition Test + BECAUSE test already specified.

**Keep (lines 308-314), condensed to ~3 lines:**
- Exit Ramp: Tension Threshold Gate -- 0 genuine tension = skip metaphor, all cosmetic = skip metaphor, else proceed. 3 bullets.

**Target: ~60 lines**

---

### PHASE 3: METAPHOR COLLAPSE (Current: lines 318-450, ~133 lines)

**Action:** SIMPLIFY to ~60 lines. This is the skill's creative heart -- keep the structure, cut the ceremony.

**Keep (lines 318-322):**
- Opening principle: "The tension is emotional; the bridge is structural." ~5 lines

**Keep (lines 324-341), condensed to ~12 lines:**
- Steps 3.1 + 3.2 (Extract structural properties from Side A and Side B) -- condensed into one section with examples. The emotion-to-geometry translation is essential ("warmth" -> "containment with visible boundaries"). The Side B extractions can be shorter since the builder already knows the system.

**Keep (lines 343-358), condensed to ~8 lines:**
- Step 3.3 (Structural overlap) + Step 3.4 (Search query generation). The query format ("What real-world domain naturally exhibits [OVERLAP] while being [SIDE B] yet conveying [SIDE A]?") is the creative step. Keep the example.

**Cut (lines 360-367):**
- Three Search Heuristics -- 8 lines. The builder can derive their own search strategy from the query.

**Keep (lines 370-381), condensed to ~5 lines:**
- Domain Search Territory + Incompatible Domains -- merge into one compact reference: "Compatible: geological, architectural, editorial, cartographic, industrial, scientific. Incompatible with this system: organic, liquid, atmospheric, textile, musical (require curves/softness)."

**Keep (lines 383-399), condensed to ~8 lines:**
- Step 3.5 Evaluate Candidates -- keep the key questions (does it resolve tensions? how many structural mappings? can everything be expressed in CSS?) and the execution risk questions. REMOVE isomorphism count ("6+ is deep, 2-3 is thin") per verification leak #3 -- replace with principle: "The metaphor should produce many independent structural mappings, not just a surface label."

**Simplify (lines 401-416) to ~5 lines:**
- 6 Binary Rejection Checks -- simplify to ONE structural check: "Is this metaphor STRUCTURAL or DECORATIVE? A structural metaphor produces different CSS at every boundary. A decorative metaphor is a label pasted onto default layout. Test: remove every text label that references your metaphor. Does the page still feel like the metaphor? If no, the metaphor is decorative -- reject it."

**Cut (lines 418-450):**
- Step 3.6 Select the Metaphor documentation ceremony (~7 lines) -- the builder just picks the winner, no ceremony needed
- Metaphor Failure Modes table (~5 lines) -- edge cases the builder can handle
- The Irreducible Creative Step section (~9 lines) -- beautiful writing but meta-commentary, not instruction
- Cultural Consideration (~4 lines) -- low-value edge case

**New addition (~5 lines):**
- Echo of opening principle: "The metaphor you just selected is a CREATIVE ACT. Another designer would select a different metaphor from the same tension. That is correct. Commit to yours. Are you excited about it? Can you see the finished page? If the metaphor feels like compliance, go back."

**Cut entirely:**
- Phase 3.5 Commitment Gate (lines 453-514, ~62 lines). In the same-window model, there is no commitment gate ceremony. The builder derives the metaphor and moves on. The divergence justification (3.5D), convergence detection (3.5C), and lock escalation protocol are all handoff-era infrastructure. The ONE check worth keeping is the Creative Check (3.5E, 5 lines) -- "Are you excited about this metaphor?" -- which is folded into the new addition above.
- Phase 3.5Z Zone Architecture (lines 505-514, ~10 lines) -- sub-skill mode only, not relevant in same-window model. Zone architecture happens naturally during building.

**Target: ~60 lines**

---

### PHASE 4: COMPOSITIONAL ARCHITECTURE (Current: lines 517-651, ~135 lines)

**Action:** CUT ENTIRELY (except governing evaluation principle).

**Rationale:** Phase 4 is where the old TC skill most clearly inherited the compliance pipeline's DNA. It contains:
- Step 4.0: Mechanism library access permission (~10 lines) -- builder already has it
- Step 4.1: 5-category taxonomy extraction (~25 lines) -- procedural classification
- Step 4.2: Pacing assessment (~15 lines) -- useful principles, but the builder assesses pacing during building, not as pre-planning
- Step 4.3: Coherence / transition tables (~16 lines) -- SPECIFICATION, the very thing we are moving away from
- Step 4.4: Component adaptation rules (~8 lines) -- builder knows this
- Step 4.5: Fractal consistency (~14 lines) -- valuable principle, but belongs in the conventions brief, not the TC derivation
- Step 4.6: Concept-based CSS naming (~8 lines) -- belongs in conventions brief

**Keep (3 lines only):**
- The Governing Evaluation formula: `RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE`. This is generative -- it changes how the builder THINKS. Include it as a principle before the conviction brief, not as a phase.

**Move to conventions brief (not TC skill):**
- 6 CSS Channels (lines 533-544) -- vocabulary definition, belongs in the conventions brief
- Multi-coherence principle (reframed per verification finding #2) -- belongs in conventions brief
- Transition variety principle (reframed per verification finding #3) -- belongs in conventions brief
- Fractal consistency (lines 627-641) -- belongs in conventions brief
- Concept-based CSS naming (lines 643-650) -- belongs in conventions brief
- Density patterns table (lines 574-583) -- belongs in conventions brief or mechanism catalog

**Target: 3 lines (governing evaluation only, folded into Phase 3 -> Brief transition)**

---

### PHASE 4 (NEW): CONVICTION BRIEF (Current Phase 4.5: lines 654-789, ~136 lines)

**Action:** SIMPLIFY to ~40 lines. Rename to Phase 4. Cut exploration loading. Reduce from 6 sections to 5 (drop Creative Conditions per adversarial recommendation).

**Keep (lines 654-658), simplified:**
- Brief opening frame: "The Conviction Brief makes you want to create THIS page." ~3 lines

**Keep brief format, simplified from 6 to 5 sections (~30 lines):**

| Section | Current Lines | Target Lines | Action |
|---------|--------------|-------------|--------|
| 1. WORLD-DESCRIPTION | 12 (lines 666-676) | 10 | Keep almost fully. Remove 1-line risk profile (builder discovers this during building). |
| 2. CALIBRATION | 10 (lines 679-691) | 5 | Condense. State palette progression + spacing character + typography shifts in 5 lines. Remove "creative authority" paragraph -- stated once at top, not per-section. |
| 3. OPPOSITION | 15 (lines 695-706) | 5 | Condense significantly. State each genuine tension as one creative invitation line. "The content wants X. The world is Y. How does Y accomplish X?" 3-5 tensions = 3-5 lines. |
| 4. ARC | 20 (lines 709-722) | 10 | The experiential journey. Keep the "what the reader experiences" framing. Cut per-transition instructions. The builder writes the arc as a felt narrative. |
| 5. CONTENT MAP | 15 (lines 740-750) | 10 | Keep: outline, register annotations, emotional arc, structural features. Cut word-count-per-section (builder can count). |
| ~~6. CREATIVE CONDITIONS~~ | ~~10 (lines 725-737)~~ | ~~0~~ | **CUT.** Per adversarial: "The builder's creative authority is exercised through their response to the world-description and opposition, not through the TC agent's suggested experiments." The builder IS the TC agent here, making this doubly unnecessary. |

**Cut (lines 753-761):**
- "How Guardrails Survive Without Explicit Statement" -- 9 lines of meta-explanation. The builder does not need to understand the architectural philosophy of implicit guardrails. The conventions brief handles guardrails.

**Cut (lines 767-787):**
- Exploration Recommendation section -- 21 lines. In the same-window model, the orchestrator decides what reference files the builder sees. This is not a TC concern.

**New addition (~2 lines):**
- After the 5-section format: "Target ~50 lines. This is a conviction document, not a spec. Write it, then build from it."

**Target: ~40 lines**

---

### REFLECTION PROTOCOL (Current Phase 4.7: lines 791-821, ~31 lines)

**Action:** SIMPLIFY to ~20 lines. Reduce from 6 dimensions to 3 (per task spec). Remove sentence count target.

**Keep, condensed:**
- Opening frame: "Write this AFTER building, BEFORE any audit. Capture creative state, not post-audit rationalization." ~2 lines

**Simplify from 6 dimensions to 3:**

| Dimension | Source | Action |
|-----------|--------|--------|
| CONVICTION + EXECUTION | (a) CONVICTION | What I was aiming at, where the artifact matches that vision, where it falls short. ~3 lines instruction |
| ALTERNATIVES + IMPULSES | (b) ALTERNATIVES + (d) IMPULSES | Paths not taken, creative energy that was suppressed. These are deferred possibilities, not failures. ~3 lines instruction |
| UNRESOLVED | (c) SURPRISES + (e) EXPERIENCE + (f) UNRESOLVED | Merged: What surprised you, what you experience when scrolling through, and what aesthetic tensions remain alive. ~4 lines instruction |

**Cut:**
- Individual SURPRISES dimension -- folded into UNRESOLVED
- Individual EXPERIENCE dimension -- folded into UNRESOLVED
- Individual IMPULSES dimension -- folded into ALTERNATIVES
- Sentence count target ("20-35 sentences") -- compliance leak per verification Test 6

**Keep (lines 815-821), simplified to ~3 lines:**
- Reflection rules: written before audit, written as direction not findings. Remove sentence count. Remove "travels with the artifact" -- the builder IS the artifact creator.

**Target: ~20 lines**

---

### FIX CYCLE RE-INVOCATION (Current: lines 825-841, ~17 lines)

**Action:** CUT ENTIRELY.

**Rationale:** Fix cycles are handled by the orchestrator, not the TC skill. The TYPE A/B/C classification and escalation path belong in the orchestrator's protocol. The IMPROVE builder isolation principle ("compose deeper, knowing what was") is valuable but belongs in the orchestrator's REFINE prompt, not in the TC derivation skill.

**Target: 0 lines**

---

## Line Count Summary

| Section | Current Lines | Target Lines | Reduction |
|---------|--------------|-------------|-----------|
| Opening Principle | 18 | 18 | 0% |
| Pipeline Overview | 13 | 4 | 69% |
| Phase 0: Content Assessment | 50 | 40 | 20% |
| Phase 1: Multi-Axis Questioning | 80 | 80 | 0% |
| Phase 2: Tension Derivation | 140 | 60 | 57% |
| Phase 3: Metaphor Collapse + Lock | 195 | 60 | 69% |
| Phase 4: Compositional Architecture | 135 | 3 | 98% |
| Phase 4 (new): Conviction Brief | 136 | 40 | 71% |
| Reflection Protocol | 31 | 20 | 35% |
| Fix Cycle | 17 | 0 | 100% |
| Frontmatter (YAML) | 4 | 4 | 0% |
| Section dividers / whitespace | ~22 | ~10 | 55% |
| **TOTAL** | **841** | **~339** | **60%** |

Slightly over the ~300 target at ~339. The excess is in Phase 1 (80 lines) which could be trimmed further if needed, but the core four table + opposition principle + discovered-axis invitation is genuinely high-value content. Recommend keeping Phase 1 at 80 and accepting ~340 as the final count.

---

## What Gets Cut vs Moved vs Kept

### CUT (not needed in any document): ~370 lines
- Extended Core axes table (24 lines) -- coverage insurance for problems that don't occur
- Structural Trigger axes table (12 lines) -- same
- Axis Interaction Effects (8 lines) -- organic discovery > prescribed pairs
- Evaluating Tension Richness (12 lines) -- unnecessary refinement
- Tension Validity Check (9 lines) -- redundant with Addition Test
- Three Search Heuristics (8 lines) -- builder derives own strategy
- Step 3.6 documentation ceremony (7 lines)
- Metaphor Failure Modes (5 lines) -- edge cases
- Irreducible Creative Step meta-commentary (9 lines)
- Cultural Consideration (4 lines)
- Phase 3.5 Commitment Gate (62 lines) -- handoff-era infrastructure
- Phase 4 Steps 4.0-4.2 (50 lines) -- pre-planning ceremony
- Phase 4 Steps 4.3-4.4 (24 lines) -- specification, not conviction
- How Guardrails Survive (9 lines) -- meta-explanation
- Exploration Loading (21 lines) -- orchestrator concern
- Fix Cycle Re-Invocation (17 lines) -- orchestrator concern
- Sentence/entry counts throughout (~10 lines across document)
- 6 Binary Rejection Checks as table (~11 lines) -- replaced by one structural/decorative test
- Isomorphism count rubric (3 lines) -- compliance leak

### MOVED TO OTHER DOCUMENTS: ~130 lines
These are valuable but belong in the conventions brief, not the TC derivation:
- 6 CSS Channels (12 lines) -> conventions brief
- Multi-coherence principle (11 lines, reframed) -> conventions brief
- Transition variety (4 lines, reframed) -> conventions brief
- Fractal consistency (14 lines) -> conventions brief
- Concept-based CSS naming (8 lines) -> conventions brief
- Density patterns table (10 lines) -> conventions brief or mechanism catalog
- Creative Conditions brief section (10 lines) -> dropped (builder decides own experiments)
- Step 4.5 Fractal + Component rules (22 lines) -> conventions brief
- Side B personality full description (30 lines) -> identity files (already there)

### KEPT (in simplified TC skill): ~340 lines
Everything listed in the target sections above.

---

## Structural Comparison

### Current 841-line Structure
```
YAML frontmatter (4)
Opening Principle (18)
Pipeline Overview (13)
Phase 0: Content Assessment (50)
Phase 1: Multi-Axis Questioning (80)
Phase 2: Tension Derivation (140)
Phase 3: Metaphor Collapse (133)
Phase 3.5: Commitment Gate (62)
Phase 4: Compositional Architecture (135)
Phase 4.5: Conviction Brief (136)
Phase 4.7: Reflection (31)
Fix Cycle (17)
Dividers/whitespace (22)
```

### Proposed ~340-line Structure
```
YAML frontmatter (4)
Opening Principle (18) -- UNCHANGED, the document's crown jewel
Phase 0: Content Assessment + Deep Read (40) -- routing + "read deeply" instruction
Phase 1: Core Questioning (80) -- 4 axes + opposition principle + discovered-axis invitation
Phase 2: Tension Derivation (60) -- Addition/BECAUSE/SUBSTITUTION tests + tension landscape
Phase 3: Metaphor (60) -- structural extraction, search query, one structural/decorative check
GOVERNING EVALUATION bridge (3) -- RICHNESS = DENSITY x RESTRAINT x CONFIDENCE
Phase 4: Conviction Brief (40) -- 5 sections, ~50-line output target
Reflection (20) -- 3 dimensions, written before audit
Dividers/whitespace (10)
```

---

## Three Key Reframings (Verification Findings)

### 1. Mechanism Counts -> Removed
**Current (line 71):** "The natural landing zone is 16-18 mechanisms across all 5 categories, but count is a BYPRODUCT..."
**New:** Sentence removed entirely. The governing evaluation (DENSITY x RESTRAINT x CONFIDENCE) is the quality principle. No number.

### 2. Channel Shift Counts -> Principle
**Current (line 611):** ">=3 of 6 channels must shift simultaneously"
**New (moved to conventions brief):** "At each zone boundary, multiple channels should reinforce the same direction. The reader should feel they have entered a different room -- background, typography, spacing, and structure all shifting together. If only one channel changes, the transition is invisible."

### 3. Transition Type Counts -> Principle
**Current (line 596):** "at least 3 DIFFERENT transition types between major sections"
**New (moved to conventions brief):** "Vary your transitions. Some shifts are smooth continuations. Some are bridges that reorient the reader. Some are breathing moments -- full cognitive resets. Uniform transitions create mechanical rhythm. Vary them as the content's emotional arc demands."

---

## Risk Assessment

**What we lose by cutting 500 lines:**
- Coverage insurance (extended axes, structural triggers) -- low risk, builders discover content-specific axes naturally
- Edge case handling (metaphor failure modes, cultural considerations) -- low risk, rare scenarios
- Quality assurance ceremony (commitment gate, transition tables, fractal checks) -- moderate risk, these caught real issues in the old multi-window model. In the same-window model, the builder self-corrects because they are the one building.
- Explicit handoff infrastructure -- zero risk, there is no handoff

**What we gain:**
- Builder reads ~340 lines instead of 841 before starting creative work
- Less compliance-frame contamination of the creative process
- The invitation-to-procedure-to-invitation sandwich (verification Test 8) becomes invitation-to-invitation with embedded procedure
- The skill fits the actual use case (same-window builder) instead of the legacy use case (separate TC agent)

**Highest-risk cut:** Phase 4 (Compositional Architecture). This contained the transition table, multi-coherence check, and fractal consistency -- all proven quality drivers. Mitigation: these principles move to the conventions brief, which the builder also reads. They are not lost, just relocated to a document that frames them as building guidance rather than pre-planning ceremony.
