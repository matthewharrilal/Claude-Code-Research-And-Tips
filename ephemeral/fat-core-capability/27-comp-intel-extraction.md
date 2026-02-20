# 27 — Compositional Intelligence Extraction: Architectural Recommendations for Flagship 4/4

**Source:** 7 key reports from the 56-report compositional-intelligence investigation
**Reports Read:** 32-master-synthesis.md, 101-master-pv2-diagram.md, 67-revised-pv2-architecture.md, 12-stack-multi-coherence.md, 13-stack-anti-scale.md, 14-stack-fractal.md, 17-design-recipe-restructure.md
**Date:** 2026-02-19
**Purpose:** Every concrete architectural recommendation relevant to achieving Flagship 4/4 DESIGNED, extracted with WHAT/WHY/EVIDENCE for each.

---

## EXTRACTION METHOD

Each report was read in full (~4,800 lines total across 7 files). Every recommendation that specifies a concrete change to architecture, artifacts, gates, skills, recipe, or builder input is captured below. Pure analysis and theory are excluded; only ACTIONABLE changes with evidence trails are included.

**Total changes extracted: 62**

---

## SECTION 1: MASTER ARCHITECTURE CHANGES (from Report 32 — Master Synthesis)

### CI-01: Fat Core Architecture — Single Opus Agent Plans AND Builds
- **WHAT:** Replace the linear pipeline (orchestrator -> planner -> builder -> verifier) with a FAT CORE: one Opus agent that plans AND builds, surrounded by a thin verification shell (9 PA auditors + 1 weaver). Total 12 agents. Boundary count drops from 11 (4 destructive) to 7 (0 destructive).
- **WHY:** Intelligence destruction at handoff boundaries is the primary failure mode. Every boundary between creative agents loses 35-65% of compositional intelligence. The plan-to-build handoff (Boundary 3) destroys 65% of intelligence. The most effective architecture eliminates the most destructive boundary.
- **EVIDENCE:** CD-006 (1 Opus, minimal pipeline) = 39/40. Middle (8 agents, 100-line input) = PA-05 4/4. Flagship (19 agents, 530-line input) = PA-05 1.5/4. Remediation (Opus builder, ~300-line input) = PA-05 2.5/4. Quality inversely correlates with agent count AND builder input volume.

### CI-02: 230-Line Maximum Builder Input
- **WHAT:** Cap total input to the Core agent at ~230 lines: content brief (~30 lines) + conventions brief (~100 lines) + tokens.css (~65 lines) + prohibitions summary (~35 lines).
- **WHY:** Quality degrades monotonically with input volume. More input = more constraints competing for attention = less compositional freedom = flatter output.
- **EVIDENCE:** CD-006 (~50 lines) = 39/40. Middle (~100 lines) = 4/4. Remediation (~300 lines) = 2.5/4. Flagship (~530 lines) = 1.5/4.

### CI-03: Conventions Brief Replaces Recipe (~100 lines, 5 sections)
- **WHAT:** Replace the 650-line operational recipe with a ~100-line conventions brief:
  - Section 1: PERCEPTION THRESHOLDS (20 lines) — bg >= 15 RGB, typography >= 2px, letter-spacing >= 0.5px, spacing >= 24px, gap <= 108px, borders >= 1 per 400px scroll
  - Section 2: SOUL CONSTRAINTS (20 lines) — 8 prohibitions, palette lock, typography trinity, container 940-960px
  - Section 3: SPATIAL RULES (20 lines) — F/Z-pattern topology, progressive disclosure 3+ depths, compression ratio <= 40%, responsive 1440+768px
  - Section 4: QUALITY FLOOR (20 lines) — >= 8 mechanisms per-category (S/T/M/B/R:1+), >= 3 multi-coherence transitions, >= 5 component types, zero voids > 108px
  - Section 5: CREATIVE AUTHORITY (20 lines) — override permission, novel mechanisms allowed, compositional judgment supersedes document, Phase 6.5 self-audit
- **WHY:** A recipe tells agents WHAT TO DO (prescriptive, caps quality at recipe specificity). A conventions brief tells agents WHAT NOT TO VIOLATE (proscriptive, allows quality to reach agent's native capability). Recipes achieve ceiling of 3/4 on complex content; conventions briefs achieve agent-native capability (3.5-4.0/4 for Opus).
- **EVIDENCE:** Report 85 two-dimensional model: HIGH SPECIFICITY + HIGH FREEDOM = Architecture D (untested, predicted 3.0-3.5 first build, 3.5-4.0 with fix cycle). All successful experiments in HIGH FREEDOM quadrant.

### CI-04: Creative Authority Section Is Non-Negotiable
- **WHAT:** The conventions brief MUST include explicit creative authority: "You may override any non-soul value if you log the override and reason. You may introduce mechanisms not in the catalog. You may deviate from any suggested pattern if content demands it. Your compositional judgment supersedes this document on all non-soul matters. After building: stop, scroll full page, write 3 observations, adjust (Phase 6.5)."
- **WHY:** Report 85 identifies 4 capabilities beyond any recipe: content-form resonance, proportional intelligence, creative surprise, emergent coherence. These only emerge from agents with explicit permission to exercise judgment.
- **EVIDENCE:** The 4 irreducible capabilities exist in the AGENT, not in any document. The conventions brief provides space for them to emerge by constraining only what would break the soul.

### CI-05: Experiment A First ($5 Experiment)
- **WHAT:** Before codifying anything beyond the conventions brief, run Experiment A: single Opus agent + conventions brief (~100 lines) + tokens.css + prohibitions + RESEARCH-SYNTHESIS content. No pipeline, no orchestrator, no verification shell. ~$5-10, ~30 minutes.
  - Decision gate: PA-05 >= 3.0 -> Pipeline v2 is JUST the conventions brief
  - PA-05 2.0-2.9 -> Proceed to Experiment B (Fat Core with 12 agents)
  - PA-05 < 2.0 -> Investigate; conventions brief is insufficient
- **WHY:** Establishes BASELINE. If a single Opus agent with minimal input produces >= 3.0, the entire pipeline infrastructure is unnecessary overhead. This is the cheapest and most informative experiment.
- **EVIDENCE:** Reports 31, 94, 102, 105 all converge: 660:1 meta-to-output ratio on infrastructure never validated by experiment. Codifying more architecture before experiments reproduces the Flagship failure pattern.

### CI-06: Do NOT Send These to Core Agent
- **WHAT:** The Core agent does NOT receive: 650-line recipe (compression artifact), mechanism catalog (the agent discovers mechanisms from content), research digest (pre-digested intelligence degrades to checklist), transition table (the agent creates its own transitions), fractal echo table (the agent discovers fractal patterns organically).
- **WHY:** Pre-digested intelligence constrains rather than enables compositional fluency. The highest-scoring artifacts were built by agents with high autonomy and minimal reference material.
- **EVIDENCE:** Flagship received maximum reference material and scored minimum. CD-006 received minimum and scored maximum.

### CI-07: Conventions Brief Perception Thresholds (Exact Values)
- **WHAT:** Background deltas >= 15 RGB between adjacent sections. Typography shifts >= 2px font-size, >= 0.5px letter-spacing between zones. Spacing >= 24px padding difference between hierarchy levels. Maximum gap <= 108px (S-09 stacking rule: total, not per-property). Border presence >= 1 structural border per 400px scroll.
- **WHY:** These are the binary minimums preventing INVISIBILITY (L1 of the 5-layer stack). Without them, all higher-layer intelligence produces imperceptible output.
- **EVIDENCE:** Flagship backgrounds differed by 1-8 RGB (imperceptible). Remediation applied >= 15 RGB and scored +1.0.

### CI-08: Conventions Brief Quality Floor (Exact Values)
- **WHAT:** >= 8 distinct mechanisms (per-category minimum: Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+). >= 3 multi-coherence transitions (3+ channels shift at boundary). >= 5 distinct component types. Zero whitespace voids > 108px.
- **WHY:** Per-category minimums prevent category blindness. Multi-coherence transitions separate COMPOSED from DESIGNED. Whitespace voids were dominant flagship failure (9/9 auditors flagged).
- **EVIDENCE:** Middle experiment hit 12 mechanisms organically. Flagship had 14 mechanisms but 6 whitespace voids 210-276px each.

### CI-09: Defer Everything Except Conventions Brief and Experiment Protocol
- **WHAT:** Codify ONLY conventions-brief.md (~100 lines) and experiment-protocol.md (~80 lines). Defer: PV2 orchestrator, gate runner updates, TC skill narrowing, operational recipe. NEVER codify: transition table template, fractal echo table template, 650-line recipe, per-agent memory files.
- **WHY:** The project spent 660:1 meta-to-output ratio on infrastructure never validated by experiment.
- **EVIDENCE:** Reports 31, 94, 102, 105 convergence. Flagship disaster was over-engineering, not under-engineering.

---

## SECTION 2: PIPELINE ARCHITECTURE (from Report 101 — Master PV2 Diagram)

### CI-10: 5-Layer Compositional Intelligence Stack Must Be Preserved
- **WHAT:** L1 Perception Thresholds (prevents 1.5/4 FLAT). L2 Scales/5 zoom levels (enables 2/4 STYLED). L3 Channels/6 CSS groups (enables 2.5/4). L4 Multi-Coherence/>= 3 channels shift together (enables 3/4 COMPOSED). L5 Anti-Scale Model/evaluative (enables 4/4 DESIGNED).
- **WHY:** Each layer corresponds to a PA-05 score level. Dropping any layer caps achievable score. L5 is absent from all pipeline artifacts.
- **EVIDENCE:** Heatmap analysis (Report 101 Section 0) traces each layer through every pipeline stage. L2-L5 drain to ABSENT by the builder in original PV2.

### CI-11: Transition Table as Mandatory TC Output
- **WHAT:** Per-boundary x 6-channel table. Columns: Chromatic (bg delta), Typographic (font-size, weight, letter-spacing), Spatial (padding), Structural (border-left), Behavioral (planned), Material (emergent). Rule: >= 3 columns change at every row. Semantic direction labels per column. YAML format for lossless propagation.
- **WHY:** Makes multi-coherence a DATA problem. Hex values survive losslessly from TC to builder to gate to PA comparison.
- **EVIDENCE:** 9 of 11 source reports reference transition table. Reports 02, 03, 06, 07, 08, 09, 12, 17, 18, 68.

### CI-12: Fractal Echo Table as Mandatory TC Output
- **WHAT:** 5-row table: Navigation/Page/Section/Component/Character. Columns: Scale, Pattern Expression, Primary CSS, Secondary CSS. Pattern Direction CONSISTENT across all 5 rows. If planner cannot write same direction at every scale, metaphor is not fractal -> fall back to FLAT mode.
- **WHY:** Scale coverage was the FIRST intelligence loss. Without per-scale guidance, builder deploys metaphor at macro scales and runs out before micro scales.
- **EVIDENCE:** Reports 01-05, 14, 83. Flagship scored 2/5 fractal scales.

### CI-13: YAML-Parseable Build Plan
- **WHAT:** Replace prose build plan with YAML. Key fields: zone_count, sections[].zone, mechanisms.spatial[], transitions[].channels_shifting, semantic_direction.
- **WHY:** Text-based handoff is unparseable and skim-prone. YAML enables programmatic gate validation.
- **EVIDENCE:** Report 15. Text-based phase instructions achieve ~0% compliance for ordering.

### CI-14: 3 New Programmatic Gates
- **WHAT:** SC-13: Multi-coherence (>= 3 of 6 channels shift at each boundary via getComputedStyle). SC-14: Sub-perceptual prevention (no letter-spacing < 0.02em; no bg delta 1-14 within zone). SC-15: Border presence (>= 1 border-left >= 3px OR >= 2 hr).
- **WHY:** SC-13 catches multi-coherence failures programmatically. SC-14 prevents CSS budget waste on invisible micro-typography (22% of Flagship's CSS). SC-15 catches zero-border defect.
- **EVIDENCE:** Report 73. Classification: 10 binary threshold (~95% confidence), 3 structural (~90%), 2 compositional (~70%).

### CI-15: Expanded Handoff Gate (5 -> 8 Checks)
- **WHAT:** [6] Transition table present, >= 3 channel shifts per boundary. [7] Fractal echo table present, 5 rows, consistent direction. [8] Semantic direction declared.
- **WHY:** Without check 6, no multi-coherence spec. Without check 7, no scale guidance. Without check 8, channels shift randomly.
- **EVIDENCE:** Report 74: semantic direction is highest-leverage single fix for Boundary 3.

### CI-16: Gate-Generated Fix Recipes
- **WHAT:** Gate FAIL produces actionable CSS: `{ gate: "SC-09", status: "FAIL", measured: { zones: ["#FEF9F5","#FEFAF6"], delta: 3 }, fix: "Darken zone 2 to at least #EFE9E0 (+15 delta)" }`.
- **WHY:** Makes fix cycle actionable. Builder knows EXACTLY what CSS to change.
- **EVIDENCE:** Report 71. Remediation succeeded partly because spec told builder exactly what to fix.

### CI-17: Make More Features Inherent via Template Slots
- **WHAT:** Template HTML with required slots. Soul constraints PRE-FILLED (not text instructions). Builder fills `{{ZONE_1_BG}}` from transition table. Empty slot = structural dependency = cannot proceed.
- **WHY:** BOLTED features need post-hoc gates. INHERENT features enforce via structural dependency chains.
- **EVIDENCE:** Report 87. YAML keys in build plan make transition table INHERENT.

### CI-18: Telescope + Microscope Recipe Format
- **WHAT:** Every recipe phase: `/* WHY: reasoning */` (TELESCOPE) + `Phase N: what to do` (RECIPE) + `Zone 1: background: {{value}};` (MICROSCOPE). Builder reads WHY before WHAT before HOW.
- **WHY:** Remediation succeeded because telescope comments appeared directly above CSS rules.
- **EVIDENCE:** Reports 84, 22. Remediation's 1,025-line spec succeeded where Flagship's 530-line spec failed.

### CI-19: Single Opus Builder (Not Sonnet)
- **WHAT:** Builder MUST be Opus. PA auditors can be Sonnet.
- **WHY:** Sonnet complies meticulously but produces flat output. Opus complies AND creates beyond constraints.
- **EVIDENCE:** CD-006 (Opus) = 39/40. Flagship (Sonnet builders) = 1.5/4. Remediation (Opus) = +1.0.

### CI-20: ALWAYS FLAGSHIP — Remove All Tier Routing
- **WHAT:** Remove ~145 lines tier-conditional logic. Single path: full TC, Opus builder, 9 PAs. Addition Test is only escape valve.
- **WHY:** Tier routing creates dead code and cognitive overhead.
- **EVIDENCE:** Reports 23, 41. 78 lines classification table serves zero purpose under single-tier.

---

## SECTION 3: MULTI-COHERENCE FIXES (from Report 12 — Stack Trace)

### CI-21: Semantic Binding Table as TC Deliverable
- **WHAT:** TC outputs per-boundary table: SEMANTIC DIRECTION (DEEPENING/INTENSIFYING/RESOLVING) + 4+ channel columns with before/after values + delta + direction label. Pre-computed channels shifting count (>= 3).
- **WHY:** Builder currently receives ZERO per-boundary multi-channel specification. The recipe splits multi-coherence across 3 separate phases (3, 4, 5) where each addresses ONE channel.
- **EVIDENCE:** Report 12 Section 4. Flagship executed backgrounds -> borders -> typography independently. Each passed alone; ensemble was flat (34/91 richness vs CD-006's 80/91).

### CI-22: Recipe Phase 3.5 — Multi-Coherence Binding Step
- **WHAT:** Insert between backgrounds (Phase 3) and borders (Phase 4). Builder commits to specific channel shifts at each boundary BEFORE executing remaining phases. Produces mini cascade value table inline.
- **WHY:** Recipe is SEQUENTIAL BY CHANNEL but multi-coherence requires SIMULTANEOUS BY BOUNDARY. This is a STRUCTURAL CONTRADICTION. Phase 3.5 resolves it.
- **EVIDENCE:** Report 12 Section 5. Flagship: warm-to-cool background arc, borders with no directional relationship, typography following neither.

### CI-23: SC-13 Multi-Coherence Gate — Implementation Detail
- **WHAT:** Measure 6 channels via getComputedStyle at pairs of adjacent sections: background-color, font-size, letter-spacing, padding, margin, border-left. Count channels that CHANGE between last element of zone N and first of zone N+1. Require >= 3 of 4 measurable channels to shift.
- **WHY:** No existing gate checks multi-channel coherence. Individual gates verify channels independently.
- **EVIDENCE:** Report 12 Section 8. Limitation: counts CHANGES but cannot assess SEMANTIC DIRECTION (~40% gap where PA remains irreplaceable).

### CI-24: Perception-Proportional Intensity Levels
- **WHAT:** SUBTLE/MODERATE/STRONG normalized across channels:
  - Chromatic: 15 / 20-30 / 40+ RGB
  - Typographic (font-size): 2px / 3-4px / 6+ px
  - Typographic (letter-spacing): 0.03em / 0.05em / 0.08+ em
  - Spatial (padding): 16px / 24-32px / 48+ px
  - Structural (border-width): 1px existence / 2px increase / 3px appearance
- **WHY:** Without proportional guidance, channels shift at wildly different perceptual magnitudes. Background +25 RGB + font-size +1px = reader notices color, not typography.
- **EVIDENCE:** Report 12 Section 7. Flagship: backgrounds 1-8 RGB (imperceptible), typography uniform 16px/400.

### CI-25: Intensity Arc Type in Build Plan
- **WHAT:** TC specifies page-level arc: ACCELERATING (each boundary bigger) / MAINTAINING (uniform) / DECELERATING (each smaller) / CRESCENDO-DIMINUENDO (peak then resolve). Binding table intensities follow arc.
- **WHY:** Research synthesis = CRESCENDO-DIMINUENDO. API docs = MAINTAINING. Tutorial = ACCELERATING. The arc shapes the reader's experience.
- **EVIDENCE:** Report 12 Section 7C. CD-006 used 4-act dramatic structure (Orient/Learn/Build/Ship).

### CI-26: Move Cascade Value Table to Phase 3.5 (Planning) + Phase 8 (Verification)
- **WHAT:** Builder creates PLANNED cascade table during Phase 3.5, then VERIFIES against actual in Phase 8.
- **WHY:** Currently Phase 8 only (post-hoc after 90-150 min). Catching failures at Phase 8 means retrofitting completed CSS.
- **EVIDENCE:** Report 12 Section 8, Loss Point 3.

### CI-27: Handoff Gate Check for Semantic Direction
- **WHAT:** Binary: "Does build plan specify semantic direction at each major boundary?" YES/NO. Without it, SC-09 passes with random color wandering, SC-11 with static typography, SC-10 with uniform spacing.
- **WHY:** Individual gates verify individual channels but nothing verifies they serve the SAME purpose.
- **EVIDENCE:** Report 12 Section 8, Loss Point 4. Report 74: highest-leverage single fix.

---

## SECTION 4: ANTI-SCALE MODEL FIXES (from Report 13 — Stack Trace)

### CI-28: Anti-Scale Model Has ZERO Operational Encoding (Diagnosis)
- **WHAT:** "Richness = semantic density x restraint x spatial confidence" appears in ZERO builder-visible artifacts. 350 lines -> 1 line in memory -> 0 lines in architecture -> 0 in TC SKILL -> 0 in build plan -> 0 in recipe -> 0 in builder decisions. INFINITY:1 compression.
- **WHY:** Architecture team extracted threshold SYMPTOMS (15 RGB, 108px, 0.03em) but not the PRINCIPLE. PV2 operationalizes symptoms while losing intelligence.
- **EVIDENCE:** Report 13 Section 4 — complete compression stack traced across 6 levels.

### CI-29: Operational Proxy 1 — Isomorphism Consultation (Semantic Density)
- **WHAT:** Binary self-test at EVERY recipe phase: "For each CSS property I just set, can I name the content relationship it encodes? If I cannot, the property is DECORATION — remove it." For FLAT mode: use Content-CSS Map (section type -> CSS treatment).
- **WHY:** Semantic density means each visible CSS difference encodes a content relationship. Without this test, builder satisfies thresholds with arbitrary perceptible-but-semantically-empty variation.
- **EVIDENCE:** Report 13 Section 3.1. Flagship backgrounds differed but encoded no content relationships.

### CI-30: Operational Proxy 2 — Mechanism Rejection Log (Restraint)
- **WHAT:** Builder produces REJECTION LOG: for each of 5 categories (S/T/M/B/R), name one mechanism NOT deployed + why. Gate verifies >= 5 entries with content-specific justifications.
- **WHY:** Restraint ratio (rejected/accepted) should be >= 1:1. Recipe format INVERTS restraint (9 additive phases, no "evaluate if you have enough"). Flagship spent 227 lines on sub-perceptual micro-typography because nothing said "stop."
- **EVIDENCE:** Report 13 Section 3.2. Recipe ceiling at 3/4 exists BECAUSE recipe has no restraint mechanism.

### CI-31: Operational Proxy 3 — Mass Distribution Check (Spatial Confidence)
- **WHAT:** Phase 1: map content mass per zone as percentage. Zone below 30% must contain deliberate spatial element (centered heading, full-width border, framing element). Zone below 20% must be MERGED or JUSTIFIED.
- **WHY:** Spatial confidence has VETO power — no amount of micro-scale coherence rescues a page failing the squint test. Ceiling experiment: 70-80% blank cream.
- **EVIDENCE:** Report 13 Section 3.3. 9/9 auditors identified spatial proportion as dominant concern.

### CI-32: Recipe "When to STOP" Instruction
- **WHAT:** After Phase 6: "STOP CHECK: For each CSS property: (1) Can you name the content relationship? If not, REMOVE. (2) Is this the MINIMUM CSS needed? If not, SIMPLIFY. (3) Would the page feel LESS designed without it? If not, REMOVE. 400 justified lines > 800 with 400 unjustified."
- **WHY:** Recipe format is ADDITIVE by structure. The gap between 3/4 and 4/4 IS the restraint gap.
- **EVIDENCE:** Report 13 Section 6. Flagship: 1,034 CSS lines including 227 imperceptible micro-typography.

### CI-33: Recipe Phase 0 Restraint Pre-Test
- **WHAT:** "List 3 mechanisms you will NOT deploy and state why each would be wrong for this content."
- **WHY:** Establishes restraint mindset BEFORE building. Compositional equivalent of Addition Test applied to mechanisms.
- **EVIDENCE:** Report 13 Section 3.2. Middle naturally rejected; Flagship deployed indiscriminately.

### CI-34: Add Anti-Scale Awareness to TC SKILL Phase 3.5
- **WHAT:** Lock-In Gate evaluation: "Does plan maximize semantic density per decision? Demonstrate restraint (mechanisms rejected)? Ensure spatial confidence (no zone below 30% fill)?"
- **WHY:** Gives PLANNER the evaluative framework. Builder receives its operational output through the build plan.
- **EVIDENCE:** Report 13 Section 7.

### CI-35: Isomorphism Table for ALL Content (Not Just Metaphor Mode)
- **WHAT:** TC produces content-to-CSS mapping for FLAT mode too. Format: "Section X is [introductory/core/supporting/concluding] -> CSS: [lighter/heavier/standard/resolution]."
- **WHY:** Semantic density is not metaphor-dependent. FLAT mode content still needs per-zone semantic binding.
- **EVIDENCE:** Report 13 Section 3.1.

---

## SECTION 5: FRACTAL SELF-SIMILARITY FIXES (from Report 14 — Stack Trace)

### CI-36: Fractal Echo Table in Build Plan (~30 lines)
- **WHAT:** 5-row table in _build-plan.md: Navigation/Page/Section/Component/Character. Columns: Scale, Pattern Direction, Primary CSS, Secondary CSS. Pattern Direction MUST state SAME direction in every row.
- **WHY:** TC Step 4.7 requires 5-scale table but it DIES at handoff. Build plan format doesn't include per-scale CSS. Fractal spec is produced but never reaches builder.
- **EVIDENCE:** Report 14 Loss Points 1-3. Flagship: 2/5 fractal scales (navigation + page only). Report 24 confirms: "Fractal coherence dropped from PV2."

### CI-37: Recipe Phase Cross-References (~9 lines)
- **WHAT:** Add 1 line per phase: "FRACTAL CHECK: Verify [Scale] row of fractal echo table. Does your [property] match the pattern direction?"
- **WHY:** Makes each phase AWARE of fractal responsibility. Minimum viable intervention.
- **EVIDENCE:** Report 14 Section 5.3.

### CI-38: Scale Column in Isomorphism Table
- **WHAT:** Add 4th column "Scale" to existing isomorphism table. Same for mechanism deployment table (Category -> Mechanism -> Scale Target -> CSS).
- **WHY:** Current isomorphism table is SCALE-BLIND. "Geological layers -> zone backgrounds" — at which scale? All scales.
- **EVIDENCE:** Report 14 Loss Point 3. Zero additional volume — one extra column per row.

### CI-39: Gate Runner Fractal Correlation (~30 lines)
- **WHAT:** Measure bg-color direction at zone boundaries (page scale), padding at section boundaries (section scale), font-size at heading levels (component scale). PASS if >= 3 of 4 scales show same direction. FAIL if opposing.
- **WHY:** Makes fractal coherence programmable.
- **EVIDENCE:** Report 14 Section 5.4. Limitation: direction consistency only, not metaphor-specific fractality.

### CI-40: Layered Defense (B + C + D Together = ~70 lines)
- **WHAT:** All 3 approaches are complementary: Echo Table (30 lines, catches planning failures) + Recipe cross-refs (9 lines, catches execution failures) + Gate (30 lines, catches verification failures). Total ~70 lines across 3 existing artifacts. Zero new files/agents/waves.
- **WHY:** Mirrors perception thresholds' 3-layer embedding (planning + execution + verification). Any single layer alone has gaps.
- **EVIDENCE:** Report 14 Section 6. B without C = spec ignored. C without B = nothing to check against. D without B+C = gate catches but can't tell builder HOW to fix.

---

## SECTION 6: RECIPE RESTRUCTURING (from Report 17 — Recipe Phase Design)

### CI-41: Two-Layer Recipe Architecture (Template + Instance)
- **WHAT:** Layer A: Recipe Template (~300 lines, permanent) — phase ordering, thresholds, soul, self-checks. Layer B: Build Recipe Instance (~200-400 lines, generated per build by TC) — per-zone specs, mechanism assignments, transitions, BECAUSE clauses.
- **WHY:** Current recipe is CONTENT-AGNOSTIC ("apply >= 15 RGB delta" for everything). Middle's recipe was single doc with inline intelligence. Flagship separated constraints from context.
- **EVIDENCE:** Report 17 Section 3. Middle (single doc, per-section specificity) = 4/4. Flagship (constraints only) = 1.5/4.

### CI-42: TC Phase 4.8 — Recipe Instance Generation
- **WHAT:** After TC Phases 0-4.7B, generate _build-recipe.md by filling recipe template's phase-by-phase structure with content-specific values. Each TC phase routes DIRECTLY to corresponding recipe phase. No intermediate compression.
- **WHY:** Compression happens when you EXTRACT conclusions. Phase-gated ROUTING avoids compression: TC Phase X -> Recipe Phase Y directly.
- **EVIDENCE:** Report 17 Section 5.1. Routing table: TC Phase 0 -> Recipe Phase 0, TC Phase 3 -> Recipe Phases 3/4/5.

### CI-43: BECAUSE Clauses at Every Decision Point
- **WHAT:** Every CSS value includes: action verb + specific value + BECAUSE + content property + metaphor property + CSS channel. "Zone 2 padding: 32px BECAUSE reference content is dense and the sediment layer is compressed."
- **WHY:** Prevents "technically compliant, semantically empty." Builder knows WHY, enabling informed micro-decisions.
- **EVIDENCE:** Report 17 Section 7. Middle's implicit semantic = 4/4. Flagship's absent semantic = 1.5/4.

### CI-44: Rejected Mechanisms in Recipe Instance
- **WHAT:** >= 3 rejected mechanisms with catalog number + rejection reason. "#16 Drop Cap — technical content; drop cap implies editorial tone."
- **WHY:** Understanding what was NOT chosen prevents accidentally contradicting the metaphor.
- **EVIDENCE:** Report 17 Section 3.1. CD-006 implicitly rejected. Flagship accepted everything.

### CI-45: Pre-Calculated Verification in Recipe Instance
- **WHAT:** Recipe instance pre-calculates all verification math: RGB deltas, font-size deltas, stacked gaps. Phase 8 becomes comparison, not arithmetic.
- **WHY:** Phase 8 becomes confirmation not discovery. Deviations visible immediately.
- **EVIDENCE:** Report 17 Section 3.1.

### CI-46: Recipe Instance Coherence Rule
- **WHAT:** Header: one-sentence rule ("Deeper = denser = darker = heavier"). At every boundary, >= 3 channels shift in this direction.
- **WHY:** GENERATIVE principle. Builder derives undocumented decisions from the rule.
- **EVIDENCE:** Report 17 Section 3.1. Report 12 C-1 coherence rule.

---

## SECTION 7: SCALE-ORGANIZED PHASE RESTRUCTURING (from Report 17 — Extended)

### CI-47: Replace Property-Type Phases with Scale-Organized Phases
- **WHAT:** Current: Phase 3 all backgrounds, Phase 4 all borders, Phase 5 all typography. Proposed: Phase 3 PAGE SCALE (all channels), Phase 4 SECTION SCALE (all channels), Phase 5 COMPONENT SCALE (all channels), Phase 6 CHARACTER SCALE (all channels). CSS grouped by specificity level.
- **WHY:** Property-type phases SPLIT multi-coherence across phases. Scale-organized embeds fractal coherence structurally.
- **EVIDENCE:** Report 17 Section 14. Weighted evaluation: Scale-Organized 7.00/10 vs Current 5.05/10, Boundary 5.60, Direction 6.00.

### CI-48: Boundary Checkpoints Within Scale Phases
- **WHAT:** Within each scale phase: "For each zone boundary: record which channels shifted. Count >= 3? If NO: add channels NOW." Mini cascade value table built inline.
- **WHY:** Pure scale organization loses multi-coherence at boundaries. Boundary checkpoints from Alternative A embedded within scale phases from Alternative B.
- **EVIDENCE:** Report 17 Section 15. Hybrid scored 7.65/10.

### CI-49: Fractal Checkpoints Within Scale Phases
- **WHAT:** Phase 5 (Component): "Does component-scale echo page-scale? If page = sparse-to-dense, components = sparse-label-to-dense-body." Phase 6 (Character): "Does character-scale echo component-scale?"
- **WHY:** Fractal coherence requires cross-phase awareness.
- **EVIDENCE:** Report 17 Section 15.1. Flagship: 2/5 fractal scales because phases independent.

### CI-50: Phase 8 Becomes Confirmatory
- **WHAT:** With boundary checkpoints at each scale phase + fractal checkpoints at component/character, Phase 8 is 80% pre-populated. Confirms rather than discovers.
- **WHY:** Currently Phase 8 is first time builder sees whether coherence was achieved — after 90-150 min.
- **EVIDENCE:** Report 17 Section 15.1.

---

## SECTION 8: REVISED PV2 STRUCTURAL CHANGES (from Report 67 — Revised Architecture)

### CI-51: 7 Structural Gaps and Fixes
- **WHAT:**
  - G-1: Build plan is PLAN; builder needs RECIPE. Fix: TC generates Build Recipe Instance.
  - G-2: Multi-coherence conceptual, never operational. Fix: Transition Table.
  - G-3: Builder gets files but zero WHY. Fix: Telescope comments in instance.
  - G-4: Gates check thresholds, not phases. Fix: Hybrid enforcement (artifact chain + Playwright + YAML).
  - G-5: Tier routing = ~145 lines dead code. Fix: Remove.
  - G-6: TC Phases 4-5 duplicate builder work. Fix: TC scope to Phases 0-3.5 only.
  - G-7: Skills don't invoke each other. Fix: Structural coupling through orchestrator.
- **WHY:** Each gap is a path where compositional intelligence leaks.
- **EVIDENCE:** Report 67 executive summary. Sourced from Reports 17, 22, 12, 18, 15, 19, 23, 41, 25.

### CI-52: TC Scope Narrowing (1,878 -> ~650 lines)
- **WHAT:** Remove Phases 4-5 (461 lines OPERATIONAL content duplicating builder inputs). Remove tier routing (~145 lines). Add Phase 3.6 (Transition Table + Build Recipe Instance assembly). Operational density: 37% -> 68%.
- **WHY:** TC narrowed from 3 roles (analyst + planner + specifier) to 2 (analyst + planner). Build specification done by recipe instance.
- **EVIDENCE:** Report 67 Section 2.1.

### CI-53: Inter-Phase Micro-Gates (4 Lightweight Checks)
- **WHAT:** MG-1 after Phase 1: DOM (landmarks, components). MG-2 after Phase 3: getComputedStyle (bg delta). MG-3 after Phase 4: DOM + Playwright (borders, transition types). MG-4 after Phase 5: getComputedStyle (font-size delta). ~30 sec each, ~2 min total.
- **WHY:** Text-based phase instructions = ~0% compliance. Prevents building on broken foundations.
- **EVIDENCE:** Report 67 Section 5.4.

### CI-54: 42 Guardrail-Playbook Pairs
- **WHAT:** Every prohibition paired with concrete CSS. "GUARDRAIL: letter-spacing < 0.03em. PLAYBOOK: Use ONLY 0em / 0.03em / 0.06em / 0.1em." 42 pairs: perception (12), soul (8), accessibility (6), typography (6), spatial (5), structural (5).
- **WHY:** Original: 7.9:1 guardrail-to-playbook ratio. Revised: ~0.5:1.
- **EVIDENCE:** Report 67 Section 5.5.

### CI-55: Build Recipe Instance Eliminates Mental Merge
- **WHAT:** TC _build-recipe.md sections mirror recipe phases. Builder reads Phase 3 template ("apply >= 15 RGB") alongside Phase 3 instance ("Zone 1: #FEF9F5, Zone 2: #F0EBE3, delta R-14/G-17/B-18, semantic: surface -> sediment").
- **WHY:** Middle = single doc (no merge) = 4/4. Flagship = two docs requiring merge = 1.5/4.
- **EVIDENCE:** Report 67 Section 5.1.

---

## SECTION 9: KNOWN GAPS AND LIMITATIONS

### CI-56: Anti-Scale Model (L5) May Be Permanently Un-Encodable
- **WHAT:** L5 appears in ZERO builder-visible artifacts. Three operational proxies (CI-29/30/31) approximate but may not capture multiplicative relationship.
- **WHY:** Model is EVALUATIVE (explains WHY). Pipeline is OPERATIONAL (tells WHAT TO DO). The gap may be irreducible.
- **EVIDENCE:** Report 13 Section 5. Report 101 Gap 1.

### CI-57: Behavioral and Material Channels Remain Un-Gated
- **WHAT:** 4/6 channels gated. Behavioral (hover, transitions, animation) and Material (texture, weight, atmosphere) not measurable via static DOM.
- **WHY:** SC-13 measures 4/6 channels. ~40% gap between programmatic and perceptual verification.
- **EVIDENCE:** Report 101 Gaps 2-3.

### CI-58: Scale Coverage Gate Missing Post-Build
- **WHAT:** Fractal echo table PLANNED + VALIDATED at handoff but NOT VERIFIED post-build. No gate checks pattern at 4+ scales.
- **WHY:** Builder may execute at 2 scales and skip 3. PA catches at 90-150 min cost.
- **EVIDENCE:** Report 101 Gap 4. CI-39 proposes partial programmatic solution.

### CI-59: N=2 Content Generalizability
- **WHAT:** Evidence from 4 experiments on essentially 2 content types. API docs, tutorials, changelogs untested.
- **WHY:** Conventions brief assumes content-agnostic principles; assumption unvalidated.
- **EVIDENCE:** Report 101 Gap 7.

### CI-60: Component-Level Metaphor Expression Gap
- **WHAT:** Components parameterized for COLOR but not STRUCTURE. Callout in "geological strata" looks same as in "river delta."
- **WHY:** Component library provides color variants but no structural variants.
- **EVIDENCE:** Report 101 Gap 5.

### CI-61: 2D Transition Table for Grid Layouts
- **WHAT:** Current table assumes top-to-bottom ordering. Grids have horizontal adjacency needing 2D transition spec.
- **WHY:** CD-006 used grids with horizontal zone adjacency.
- **EVIDENCE:** Report 67 Section 11.3.

### CI-62: Fat Core vs Pipeline — The Unresolved Tension
- **WHAT:** Report 32 recommends Fat Core (~230 lines input, 12 agents). Reports 67/101 specify pipeline (~1,450 lines input, transition tables, fractal echo tables, YAML, micro-gates). Fundamentally different architectures. Experiment A resolves.
- **WHY:** If Fat Core Experiment A >= 3.0, pipeline infrastructure (CI-11 through CI-55) is unnecessary. If < 2.5, pipeline adds value.
- **EVIDENCE:** Report 32 Decision 4. Fat Core items: CI-01 through CI-09. Pipeline items: CI-10 through CI-55.

---

## SUMMARY TABLE: Priority Classification

| Priority | Count | IDs |
|----------|-------|-----|
| **FAT CORE PATH** (if Experiment A >= 3.0) | 9 | CI-01 through CI-09 |
| **PIPELINE PATH** (if Experiment A < 2.5) | 46 | CI-10 through CI-55 |
| **BOTH PATHS** (implement regardless) | 7 | CI-07, CI-08, CI-19, CI-20, CI-29, CI-30, CI-31 |
| **KNOWN GAPS** | 7 | CI-56 through CI-62 |

---

## THE 10 HIGHEST-LEVERAGE CHANGES FOR 4/4

1. **CI-01** Fat Core architecture (eliminates 65% intelligence loss at Boundary 3)
2. **CI-03** Conventions brief replaces recipe (removes recipe ceiling at 3/4)
3. **CI-04** Creative Authority section (enables 4 irreducible capabilities)
4. **CI-21** Semantic Binding Table (makes multi-coherence operational)
5. **CI-36** Fractal Echo Table (makes fractal self-similarity survive to builder)
6. **CI-32** "When to STOP" instruction (operationalizes restraint)
7. **CI-19** Opus builder (compositional fluency exists in Opus, not Sonnet)
8. **CI-22** Phase 3.5 multi-coherence binding (resolves sequential-phase contradiction)
9. **CI-41** Two-layer recipe architecture (eliminates mental merge compression)
10. **CI-05** Experiment A first (validates before codifying)

---

## CROSS-REPORT CONVERGENCE (Strongest Signals)

1. **Transition Table** (referenced in 6/7 reports): The single most referenced new artifact
2. **Multi-coherence is THE quality lever** (referenced in 5/7 reports): The bridge from 3/4 to 4/4
3. **Format > Volume** (4/7 reports): SPECIFICITY beats LENGTH, CSS-as-intelligence beats prose
4. **Recipe-Plan merge** (4/7 reports): Eliminate mental merge that killed Flagship
5. **Perception thresholds inline** (3/7 reports): At point of use, not separate reference
6. **Anti-scale model absent** (2/7 reports but HIGHEST severity): INFINITY:1 compression of governing principle
7. **Fractal echo table evaporates** (2/7 reports): TC produces but builder never sees

---

*62 changes extracted from 7 reports totaling ~4,800 lines. Each change includes WHAT, WHY, and EVIDENCE trail back to source report and section.*
