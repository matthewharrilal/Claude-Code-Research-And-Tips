<!-- ============================================================= -->
<!-- === STOP HERE FOR EXECUTION ================================= -->
<!-- Sections 0-9 above contain everything needed to run the       -->
<!-- pipeline. Sections 10+ below are HISTORICAL CONTEXT,          -->
<!-- EXPERIMENTAL features, and PROVENANCE. Do not read further     -->
<!-- unless you need background for a specific decision.            -->
<!-- ============================================================= -->

---

## SECTION 10: EXPERIMENTAL TIER — 3-PASS ARCHITECTURE

**STATUS: BLOCKED until experiment #21 validates Compositional Critic utility**
**All items in this section tagged EXPERIMENTAL**

Per council ruling (CF-02): "Compositional Critic has zero evidence. Pipeline must work without it. Standard REFINE iteration is the default convergence mechanism. 3-pass Compositional Critic architecture is an optional enhancement."

### 3-Pass Structure (EXPERIMENTAL)

**Pass 1: Structural Skeleton + Pervading Metaphor (20-35 min)**
- **ITEM 2** (extract-d06-d08.md L490) [EXPERIMENTAL]
- **ITEM 3** (extract-d06-d08.md L491) Mode: GENERATIVE (composing, not complying) [EXPERIMENTAL]
- **ITEM 4** (extract-d06-d08.md L492) Builder: Opus instance A [EXPERIMENTAL]

**Compositional Critic (between passes) — EXPERIMENTAL/FANTASY**
- **ITEM 8** (extract-d06-d08.md L501) COMPOSITIONAL CRITIC (Opus — separate agent) [EXPERIMENTAL]
- **ITEM 9** (extract-d06-d08.md L503) Views SCREENSHOTS only (not CSS) [EXPERIMENTAL]
- **ITEM 10** (extract-d06-d08.md L504-507) Three Laws: never name CSS, never ref threshold, suggest QUALITY [EXPERIMENTAL]
- **ITEM 11** (extract-d06-d08.md L505) Law 1: Never name a CSS property [EXPERIMENTAL]
- **ITEM 12** (extract-d06-d08.md L506) Law 2: Never reference a threshold [EXPERIMENTAL]
- **ITEM 13** (extract-d06-d08.md L507) Law 3: Always suggest a QUALITY, not an ACTION [EXPERIMENTAL]
- **ITEM 14** (extract-d06-d08.md L509-512) Example: "The middle sags — energy dissipates by S5" [EXPERIMENTAL]
- **ITEM 15** (extract-d06-d08.md L514) NOT: "SC-09 FAILED: stacked gap 210px exceeds 120px" (anti-pattern) [EXPERIMENTAL]
- **ITEM 16** (extract-d06-d08.md L516-517) Artistic feedback + conviction artifact (~25 lines) [EXPERIMENTAL]
- **ITEM 17** (extract-d06-d08.md L517) ~25 lines critic-to-builder handoff [EXPERIMENTAL]

**Pass 2: Atmospheric Enrichment + Mechanism Coupling (15-25 min)**
- **ITEM 18** (extract-d06-d08.md L520) [EXPERIMENTAL]
- **ITEM 19** (extract-d06-d08.md L521) Mode: COMPOSITIONAL [EXPERIMENTAL]
- **ITEM 20** (extract-d06-d08.md L522) Builder: Opus instance B (FRESH — defeats continuation bias) [EXPERIMENTAL]
- **ITEM 21** (extract-d06-d08.md L522) FRESH = defeats continuation bias [EXPERIMENTAL]
- **ITEM 22** (extract-d06-d08.md L524) Input: Pass 1 output + Critic feedback + value tables [EXPERIMENTAL]
- **ITEM 23** (extract-d06-d08.md L525-526) Pass 2 output: Enriched page [EXPERIMENTAL]
- **ITEM 24** (extract-d06-d08.md L531-532) Second critic review: final impressions only [EXPERIMENTAL]

**Pass 3: Terminal Craft + Designed Moments (10-20 min)**
- **ITEM 25** (extract-d06-d08.md L537) [EXPERIMENTAL]
- **ITEM 26** (extract-d06-d08.md L538) Mode: POLISHING [EXPERIMENTAL]
- **ITEM 27** (extract-d06-d08.md L539) Builder: Opus instance C (or Sonnet for cost) [EXPERIMENTAL]
- **ITEM 28** (extract-d06-d08.md L541) Input: Pass 2 output + Critic's final impressions [EXPERIMENTAL]
- **ITEM 29** (extract-d06-d08.md L542-543) Pass 3 output: Finished page [EXPERIMENTAL]

### 3-Pass Predicted Quality Curve (all THEORETICAL)

- **ITEM 31** (extract-d06-d08.md L555) Pass 1 alone: PA-05 ~2.5-3.5 (hypothesis)
- **ITEM 32** (extract-d06-d08.md L556) + Pass 2: PA-05 ~3.0-3.8 (hypothesis)
- **ITEM 33** (extract-d06-d08.md L557) + Pass 3: PA-05 ~3.2-4.0 (hypothesis)
- **ITEM 34** (extract-d06-d08.md L558) Diminishing returns: Pass 4 adds <0.1 with S-20 risk
- **ITEM 35** (extract-d06-d08.md L558) Pass 4 max gain: <0.1

---

## SECTION 11: EXPERIMENT PROTOCOL

### 4-Stage Validation Program

The pipeline must be validated before full deployment. Stages are progressive — each gates the next.

- **ITEM 1** (extract-d09-d11.md L707) EXPERIMENT PROTOCOL DECISION TREE
- **ITEM 2** (extract-d09-d11.md L711-712) 4 Stages, Progressive

**STAGE 0: SMOKE TEST (3 hours, 1 run) — BLOCKING**
- **ITEM 3** (extract-d09-d11.md L715) STAGE 0: SMOKE TEST
- **ITEM 4** (extract-d09-d11.md L717) Pipeline v3 on Gas Town content
- **ITEM 5** (extract-d09-d11.md L718) Opus builder, 73-line brief, single pass
- **ITEM 6** (extract-d09-d11.md L722) Pass/fail: PA-05 >= 2.0?
- **ITEM 7** (extract-d09-d11.md L727-728) Continue to Stage 1 if pass
- **ITEM 8** (extract-d09-d11.md L728-730) STOP & DEBUG if fail

**STAGE 1: Q20 SHORTCUT (6 hours, 2 runs)**
- **ITEM 9** (extract-d09-d11.md L732) STAGE 1: Q20 SHORTCUT
- **ITEM 10** (extract-d09-d11.md L734-735) OLD Flagship prompt + ONLY 25-line threshold appendix
- **ITEM 11** (extract-d09-d11.md L736) Tests: Are thresholds the dominant cause?
- **ITEM 12** (extract-d09-d11.md L740) Success: delta PA-05 >= +0.5?
- **ITEM 13** (extract-d09-d11.md L745-746) Thresholds high-leverage, continue
- **ITEM 14** (extract-d09-d11.md L746-747) Thresholds alone insufficient, still continue

**STAGE 2: HEAD-TO-HEAD (12 hours, 4 runs)**
- **ITEM 15** (extract-d09-d11.md L750) STAGE 2: HEAD-TO-HEAD
- **ITEM 16** (extract-d09-d11.md L752) Old pipeline vs v3 on TWO content types
- **ITEM 17** (extract-d09-d11.md L753) (Gas Town + RESEARCH-SYNTHESIS)
- **ITEM 18** (extract-d09-d11.md L754) Opus builder both. Blind PA evaluation
- **ITEM 19** (extract-d09-d11.md L758-759) Success: v3 > old on BOTH content types?
- **ITEM 20** (extract-d09-d11.md L764-766) v3 validated -> Stage 3
- **ITEM 21** (extract-d09-d11.md L764-766) Content-dependent -> Stage 3
- **ITEM 22** (extract-d09-d11.md L764-766) v3 needs rethinking if loses BOTH

**STAGE 3: VARIABLE ISOLATION (18 hours, 6 runs)**
- **ITEM 23** (extract-d09-d11.md L769) STAGE 3: VARIABLE ISOLATION
- **ITEM 24** (extract-d09-d11.md L771-773) Dose-response curve: old->+thresholds->+recipe->-suppress->73-line
- **ITEM 25** (extract-d09-d11.md L775) Identifies WHICH changes cause improvement

**STAGE 4: FLAGSHIP EXISTENCE PROOF (5 hours, 1-2 runs)**
- **ITEM 26** (extract-d09-d11.md L779) STAGE 4: FLAGSHIP EXISTENCE PROOF
- **ITEM 27** (extract-d09-d11.md L781-783) Maximum investment: 3-pass + disposition + worked examples + critic
- **ITEM 28** (extract-d09-d11.md L783) PA + Tier 5 questions
- **ITEM 29** (extract-d09-d11.md L785) Tests: Is 4/4 even achievable?
- **ITEM 30** (extract-d09-d11.md L789-790) Success: PA-05>=3.5 AND Tier 5>=6/8?
- **ITEM 31** (extract-d09-d11.md L795-798) Flagship ACHIEVABLE if both thresholds met
- **ITEM 32** (extract-d09-d11.md L795-798) Flagship may not be discrete register, accept Ceiling if fail

### Program Totals

- **ITEM 33** (extract-d09-d11.md L801) TOTAL PROGRAM: 44 hours, 14 runs
- **ITEM 34** (extract-d09-d11.md L802) CHEAPEST USEFUL: Stage 0+1 = 9 hours
- **ITEM 35** (extract-d09-d11.md L803) HIGHEST ROI: Stage 0+1+2 = 21 hours

### Council Implementation Sequence

Per council Part 6, the implementation is phased:

**Phase 0: PRE-FLIGHT (BLOCKING)**
- Run smoke test (Stage 0, ~3 hours)
- If fail, STOP and diagnose

**Phase 1: SAFE FIXES (2-4 hours)**
- Remove Phase 1 suppressors (mechanism count language, judgment language, technique counting)
- Add perception threshold table to builder prompt
- Convert constraint format to recipe

**Phase 2: CHEAP EXPERIMENTS (4-8 hours each)**
- Experiment #22 (Q20 thresholds-only)
- Experiment #20 (disposition-only)

**Phase 3: DESIGN WORK (4-8 hours)**
- Restructure brief with disposition at both ends
- Design zone-level CSS value tables

**Phase 4: FULL EXPERIMENTS (8-20 hours each)**
- Experiment #19 (Opus vs Sonnet isolation)
- Experiment #18 (73-line constraint set test)
- Experiment #21 (creative revision cycle) — ONLY IF single-pass fails PA-05 3.0

**Phase 5: ARCHITECTURE (weeks+, only if experiments validate)**
- 3-pass iteration (only if experiment #21 validates)
- Flagship 4/4 pursuit (only if prior phases succeed)

- **ITEM 183** (extract-d21-d25.md L2048-2051) NEXT STEP: Run Q20 thresholds-only (4h), then #20 disposition (2-4h)

---

## SECTION 12: SUPPRESSOR MANAGEMENT

### Phased Suppressor Removal Protocol (council CF-03 ruling)

Council: "Suppressor removal curve relabeled: HYPOTHESIZED improvement (phased validation required). Monotonic framing REMOVED."

**Phase 1 Removals (SAFE — unanimously identified as harmful):**
- S-01: Mechanism count language ("sample 2-4") — highest individual impact
- S-03: Judgment language in specification
- S-08: Technique counting as quality metric

**Phase 2 Removals (TEST FIRST — keep as PROGRAMMATIC GATES with adjusted thresholds):**
- S-09: Stacking gap — adjusted to <=150px total stacked gap (not <=96px per-property)
- S-07: Letter-spacing bounds
- S-14: Mechanism minimums

**Also:** Builder receives perception threshold table (8 lines) as calibration — council item #2.

### Suppressor-Related Items

- **ITEM 116** (extract-d01-d03.md L257) Zero repair-mode suppressors
- **ITEM 117** (extract-d01-d03.md L259) 20 quality suppressors active (old)
- **ITEM 118** (extract-d01-d03.md L259) 0 suppressors active (new)
- **ITEM 51** (extract-d06-d08.md L595-597) Specification Interference: suppressor removal + 113 line cap
- **ITEM 53** (extract-d06-d08.md L596) Suppressor removal (all 20)
- **ITEM 55** (extract-d06-d08.md L597) avoids all 20 suppressors
- **ITEM 54** (extract-d06-d08.md L597) gates hidden from builder
- **ITEM 119** (extract-d01-d03.md L261) Builder sees gates (old pipeline) [META/historical]
- **ITEM 120** (extract-d01-d03.md L261) Builder sees frameworks only (new pipeline)
  - Council reclassified: GATES -> ORCHESTRATION (routing policy)
- **ITEM 121** (extract-d01-d03.md L262) Gates in builder prompt (old) [META/historical]
- **ITEM 122** (extract-d01-d03.md L262) Gates in orchestrator only (new)
- **ITEM 123** (extract-d01-d03.md L263) Builder optimizes for gates (old) [META/historical]
- **ITEM 124** (extract-d01-d03.md L263) Builder optimizes for quality (new)
  - Council reclassified: GATES -> DISPOSITION (builder-facing disposition)

### Suppressor Inflection Curve (HYPOTHESIZED per council)

- **ITEM 40** (extract-d04-d05.md L470-475) INFLECTION 1: Recipe Switch (+0.5-1.0) Remove S-01
- **ITEM 41** (extract-d04-d05.md L470-475) INFLECTION 2: Perception Floor (+0.5) Remove S-08
- **ITEM 42** (extract-d04-d05.md L470-475) INFLECTION 3: Architecture Collapse (+0.3-0.5) Remove remaining 8

---

## SECTION 13: 13 IRREDUCIBLE CONCEPTS

The pipeline must address all 13 concepts. Each is handled via one of three mechanisms: SPECIFY (binary rules), ACTIVATE (dispositional recipe), or create CONDITIONS (emergent).

- **ITEM 36** (extract-d06-d08.md L568) 13 IRREDUCIBLE CONCEPTS: Pipeline must address all 13
- **ITEM 37** (extract-d06-d08.md L571) 7 EXISTING (from 40-concept collapse)
- **ITEM 58** (extract-d06-d08.md L602) 6 MISSING (newly identified)
- **ITEM 74** (extract-d06-d08.md L632-634) "Specify/Activate/Create CONDITIONS" master routing principle

### Concept Distribution

- **ITEM 71** (extract-d06-d08.md L628) SPECIFIED (binary rules, measurable): 6 / 13
- **ITEM 72** (extract-d06-d08.md L629) ACTIVATED (dispositional, recipe): 5 / 13
- **ITEM 73** (extract-d06-d08.md L630) EMERGENT (conditions only): 2 / 13

### Concept Routing (per concept)

**Builder Cognitive Mode** — ACTIVATED via D-01 to D-09 + recipe format
- **ITEM 38** (extract-d06-d08.md L575-577)
- **ITEM 39** (extract-d06-d08.md L575) (11 concepts collapsed)

**Content-Form Coupling** — SPECIFIED + ACTIVATED via TC + D-01
- **ITEM 41** (extract-d06-d08.md L579-581)
- **ITEM 42** (extract-d06-d08.md L579) (9 concepts collapsed)
- **ITEM 43** (extract-d06-d08.md L580) TC brief routing + D-01

**Compression Physics** — SPECIFIED via 73-line + dual-channel
- **ITEM 44** (extract-d06-d08.md L583-585)
- **ITEM 45** (extract-d06-d08.md L583) (6 concepts collapsed)
- **ITEM 47** (extract-d06-d08.md L584) dual-channel architecture

**Intentional Composition** — ACTIVATED + EMERGENT via multi-coherence
- **ITEM 48** (extract-d06-d08.md L587-589)

**Peak-Valley Architecture** — ACTIVATED via D-04 + density arc
- **ITEM 49** (extract-d06-d08.md L591-593)
- **ITEM 50** (extract-d06-d08.md L591) D-04 + density arc

**Specification Interference** — suppressor removal + 113 line cap
- **ITEM 51** (extract-d06-d08.md L595-597)
- **ITEM 52** (extract-d06-d08.md L596) <=113 line cap
- **ITEM 53** (extract-d06-d08.md L596) suppressor removal
- **ITEM 54** (extract-d06-d08.md L597) gates hidden from builder

**Scale-Channel Independence** — 6-channel framework + value tables
- **ITEM 56** (extract-d06-d08.md L599-600)
- **ITEM 57** (extract-d06-d08.md L600) 6-channel framework + value tables

**Temporal Composition** — ACTIVATED via density arc recipe + D-06
- **ITEM 59** (extract-d06-d08.md L604-605)
- **ITEM 60** (extract-d06-d08.md L605) D-06 neg space

**Reader Model** — SPECIFIED via reader persona in content analysis
- **ITEM 61** (extract-d06-d08.md L607-608)

**Emotional Arc** — EMERGENT via D-04 + D-05 + arc framing
- **ITEM 62** (extract-d06-d08.md L610-612)
- **ITEM 63** (extract-d06-d08.md L612) builder produces, cannot be specified
  - Council ruling: D-04->Surprise, D-05->Closure, etc. are DESIGN INTENTIONS, not guaranteed causal links

**Compositional Anti-Patterns** — 6 binary gates in gate runner
- **ITEM 64** (extract-d06-d08.md L614-615)
- **ITEM 65** (extract-d06-d08.md L615) Exactly 6 anti-pattern gates, each binary pass/fail

**Cross-Page Coherence** — soul + shared tokens.css + components.css
- **ITEM 66** (extract-d06-d08.md L617-619)
- **ITEM 67** (extract-d06-d08.md L618) shared tokens.css + components.css

**Revision Quality** — REBUILD not FIX + zone-aware editing
- **ITEM 68** (extract-d06-d08.md L621-623)
- **ITEM 69** (extract-d06-d08.md L621) REBUILD not FIX
- **ITEM 70** (extract-d06-d08.md L622) zone-aware editing protocol

---

## SECTION 14: PIPELINE V3 DIAGNOSTIC CONTEXT

### Why v3 Exists (Root Cause Analysis)

- **ITEM 92** (extract-d06-d08.md L691) Pipeline v3 required (dependency for top 4 dims)
- **ITEM 93** (extract-d06-d08.md L697) "Right vocabulary, WRONG MODE of composition"
- **ITEM 94** (extract-d06-d08.md L698-699) Builder deploys mechanisms as CHECKLIST not RESPONSES to content
- **ITEM 95** (extract-d06-d08.md L700-701) Pipeline v3 addresses via dispositional recipe + activation arch
- **ITEM 97** (extract-d06-d08.md L701) activation architecture (file ref) [META]
- **ITEM 100** (extract-d06-d08.md L644) needs architecture change (triangle = Pervading Metaphor, Multi-coh, CI)

### Gas Town Flagship Gap

- **ITEM 76** (extract-d06-d08.md L649-650) Pervading Metaphor: 2.5/5 (needs architecture change)
- **ITEM 77** (extract-d06-d08.md L652-653) Multi-coherence: 1.5/5 (needs architecture change)
- **ITEM 78** (extract-d06-d08.md L655-656) Compositional Intelligence: 2.0/5 (needs architecture change)
- **ITEM 79** (extract-d06-d08.md L658-659) Material Authenticity: 1.5/5 (fixable by prompt)
- **ITEM 80** (extract-d06-d08.md L661-662) Detail Density: 2.0/5 (fixable by prompt)
- **ITEM 81** (extract-d06-d08.md L664-665) Typographic Craft: 2.0/5 (fixable by prompt)
- **ITEM 82** (extract-d06-d08.md L667-668) Scale Hierarchy CSS: 3.0/5
- **ITEM 83** (extract-d06-d08.md L670-671) Channel Shifts CSS: 3.0/5
- **ITEM 84** (extract-d06-d08.md L673-674) Emotional Arc CSS: 3.5/5
- **ITEM 85** (extract-d06-d08.md L676-677) Spatial Confidence CSS: 3.5/5

### Fix Tier Roadmap

- **ITEM 86** (extract-d06-d08.md L681-685) CSS-only fix tier: Channel Shifts, Emotional Arc, Spatial Confidence
- **ITEM 87** (extract-d06-d08.md L683) CSS-only tier: 2.5 -> 3.2/5
- **ITEM 88** (extract-d06-d08.md L687-689) Prompt enrichment tier: Typographic Craft, Material Auth, Detail Density
- **ITEM 89** (extract-d06-d08.md L687) Prompt enrichment tier: 3.2 -> 3.5/5
- **ITEM 90** (extract-d06-d08.md L691-694) Architecture change tier: Pervading Metaphor, Multi-coherence, etc.
- **ITEM 91** (extract-d06-d08.md L691) Architecture change tier: 3.5 -> 4.0+/5
- **ITEM 99** (extract-d06-d08.md L644) fixable by prompt (star = Material Auth, Detail Dens, Typo Craft)
- **ITEM 101** (extract-d06-d08.md L667-677) 4 dims fixable by CSS: Scale Hierarchy, Channel Shifts, Emo Arc, Spatial

### Quality Tier Thresholds (from rerouted VALUES)

- **Rerouted ITEM 83** (extract-d01-d03.md L233) 963 lines of specification (old) [historical]
- **Rerouted ITEM 84** (extract-d01-d03.md L233) ~113 lines of brief (new)
- **Rerouted ITEM 85** (extract-d01-d03.md L235) 7.9:1 guardrail-to-playbook (old) [historical]
- **Rerouted ITEM 86** (extract-d01-d03.md L235) 0.3:1 guardrail-to-playbook (new)
- **Rerouted ITEM 87** (extract-d01-d03.md L236) 55 prohibitions (old) [historical]
- **Rerouted ITEM 125** (extract-d01-d03.md L266-268) "RIGHT vocabulary, WRONG mode of composition"
- **Rerouted ITEM 126** (extract-d01-d03.md L266-268) Predicted: Vocabulary + correct MODE COMPOSING not COMPLYING

### Flagship Achievement Status (evidence level: OBSERVED)

- **ITEM 42** (extract-d09-d11.md L825) NEVER ACHIEVED — requires 3-pass + Opus
- **ITEM 46** (extract-d18-d20.md L1473) NEVER ACHIEVED. Requires 3-pass + metaphor.

These items document that Flagship-level composition (PA-05 >= 3.5 with unified pervading metaphor) has never been demonstrated in any build. Both carry evidence level OBSERVED (factual status of the historical record).

### Register/Tier Predictions (all carry "(hypothesis)" per council)

- **Rerouted ITEM 143** (extract-d01-d03.md L324-340) Compositional Fluency: mechanisms interdependent
- **Rerouted ITEM 144** (extract-d01-d03.md L334-335) Register 1->2->3 (CCS 0.15->0.80)
- **Rerouted ITEM 145** (extract-d01-d03.md L324-340) Peak-Valley Rhythm: designed moments within competent baseline
- **Rerouted ITEM 146** (extract-d01-d03.md L337-339) EMERGENT from conditions (both capabilities)
- **Rerouted ITEM 147** (extract-d01-d03.md L348-349) Floor (2.5-3.0): Preconditions met, gatekeeper partial (hypothesis)
- **Rerouted ITEM 148** (extract-d01-d03.md L351-352) Ceiling (3.0-3.5): All met, Register 2 (hypothesis)
- **Rerouted ITEM 149** (extract-d01-d03.md L354-356) Flagship (3.5-4.0): All met, Register 3 + unified metaphor (hypothesis)

---

## SECTION 15: REVISION QUALITY AND MODE THEORY

### Why Fix Cycles Degrade Quality

- **ITEM 28** (extract-d15-d17.md L1199) REVISION QUALITY — WHY FIX CYCLES DEGRADE COMPOSITION
- **ITEM 29** (extract-d15-d17.md L1208-1221) THE MODE SHIFT: GENERATIVE (build) vs CORRECTIVE (fix)
- **ITEM 30** (extract-d15-d17.md L1208-1221) GENERATIVE: full composition in working memory, CCS >0.35

### Mode Determinants for Orchestrator

The orchestrator uses these to verify the builder achieved the target mode:

- **ITEM 62** (extract-d18-d20.md L1513) Position-based names provide no design guidance
- **ITEM 63** (extract-d18-d20.md L1513-1515) Concept names PREDICT other CSS properties

---

## SECTION 16: ACTIONABILITY AND RECOMMENDATION TIERS

### Recommendation Tiers (from Actionability Audit)

- **ITEM 57** (extract-d21-d25.md L1733-1734) 47 recommendations -> 25 after dedup -> 4 tiers
- **ITEM 58** (extract-d21-d25.md L1767-1769) TIER 1: IMMEDIATELY ACTIONABLE (9 items, 2-4 hours)
- **ITEM 68** (extract-d21-d25.md L1781-1783) TIER 2: ACTIONABLE WITH DESIGN (8 items, 4-8 hours)
- **ITEM 77** (extract-d21-d25.md L1794-1796) TIER 3: REQUIRES EXPERIMENTATION (5 items, 8-20 hrs)
- **ITEM 83** (extract-d21-d25.md L1804-1806) TIER 4: THEORETICAL (3 items, weeks+)
- **ITEM 84** (extract-d21-d25.md L1808) Live pipeline (#23)
- **ITEM 85** (extract-d21-d25.md L1809) Atmospheric coupling (Register 3 CCS>=0.55) (#24)
- **ITEM 86** (extract-d21-d25.md L1810) Flagship 4/4 achievement (the end goal) (#25)
- **ITEM 91** (extract-d21-d25.md L1836-1841) 5-phase implementation sequence
- **ITEM 92** (extract-d21-d25.md L1842) Remove 900 lines. Keep 73. Test.
  - Council: rewritten to "Restructure constraint layer to 73 lines in recipe format; total input comparable to v2 but better organized"

### Orchestrator-Relevant Recommendations

- **ITEM 71** (extract-d21-d25.md L1787) Design creative revision cycle (#12)
- **ITEM 79** (extract-d21-d25.md L1799) Opus-as-sole-builder experiment (#19)
- **ITEM 128** (extract-d21-d25.md L1941) REC-02 Start single-pass, add iteration only if needed
- **ITEM 127** (extract-d21-d25.md L1940) REC-01 Run smoke test BEFORE building anything (BLOCKING)
- **ITEM 131** (extract-d21-d25.md L1944) REC-05 Honest complexity accounting (~3,600 lines not 73)
- **ITEM 132** (extract-d21-d25.md L1945) REC-06 Design falsification test as MANDATORY
- **ITEM 133** (extract-d21-d25.md L1946) REC-07 Budget for failure recovery (25-40% builds fail)

---

## ITEM COVERAGE VERIFICATION

### Layer 9 ORCHESTRATION Items from classify-by-layer.md (188 items)

All 188 Layer 9 items appear in this document across Sections 0-16:
- Section 0: Preconditions (ITEMS 127-136, ITEM 1-3)
- Section 1: Topology (ITEMS 55-58, 89, 91, 95-102, 109-115, 119-124, 21-27 from d04-d05)
- Section 2: Phase 0 (ITEMS 4-14, 65-68 from d09-d11, 100, 102 from d12-d14)
- Section 3: Phase 1 (ITEMS 15-19, 31-37, 46-47, 69-73 from d09-d11, 6-14 from d04-d05, 142)
- Section 4: Mode Selection (ITEMS 50-54, 62-63, 74-78, 79-82, 86 from d18-d20, 98, 137-138)
- Section 5: Phase 2 (ITEMS 48-54, 59-68, 74-79 from d09-d11, 2-7, 90, 92 from d06-d08)
- Section 6: Phase 3 (ITEMS 69-76, 78-82 from d01-d03, 80-89 from d09-d11, 30 from d06-d08)
- Section 7: Verdict (ITEMS 77-80, 43-51 from d15-d17)
- Section 8: Summary (ITEMS 62-63, 90-91 from d09-d11)
- Section 10: 3-Pass (ITEMS 1-29, 31-35 from d06-d08, 8-28 from d06-d08)
- Section 11: Experiments (ITEMS 1-35 from d09-d11, 183 from d21-d25)
- Section 12: Suppressors (ITEMS 116-124, 40-42 from d04-d05, 51-55 from d06-d08)
- Section 13: 13 Concepts (ITEMS 36-74 from d06-d08)
- Section 14: Diagnostics (ITEMS 76-101 from d06-d08, 28-30 from d15-d17)
- Section 15: Revision Quality (ITEMS 28-30 from d15-d17, 62-63 from d18-d20)
- Section 16: Recommendations (ITEMS 57-58, 68, 71, 77, 79, 83-86, 91-92, 127-128, 131-133, 183 from d21-d25)

### 15 Council-Rerouted VALUES Items (Pattern 5 Category A) + 19 Additional Context Items

All 15 council-rerouted items appear in Section 9, plus 19 additional VALUES context items across Sections 8, 9, and 14:
- ITEMS 31, 32, 34-39, 43-47, 75 from d04-d05/d06-d08
- ITEMS 81-82, 83-87, 93-94, 103-104, 125-126, 143-149 from d01-d03

---

*This document is AUTHORITATIVE for the orchestrator agent. Where this document conflicts with any other VA document (except the council verdict), this document takes precedence. The council verdict takes precedence over everything.*
