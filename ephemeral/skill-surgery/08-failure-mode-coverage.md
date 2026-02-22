# 08 -- Failure Mode Coverage Map (Post-Surgery)

**Date:** 2026-02-20
**Agent:** failure-mode-mapper
**Task:** Map 7+1 failure modes against the ENTIRE post-surgery pipeline
**Pipeline files examined:**
1. `~/.claude/skills/build-page/SKILL.md` (486 lines)
2. `~/.claude/skills/tension-composition/SKILL.md` (~2,006 lines, read in 3 sections)
3. `~/.claude/skills/perceptual-auditing/SKILL.md` (~881 lines)
4. `design-system/pipeline/conventions-brief.md` (566 lines)
5. `design-system/pipeline/gate-runner.md` (500+ lines read, 1,159 total)
6. `design-system/compositional-core/grammar/mechanism-catalog.md` (300+ lines read)
7. `ephemeral/pipeline-surgery/38-master-enrichment-trim-synthesis.md` (295 lines)

---

## FAILURE MODE 1: GUARDRAIL FACTORY (7.9:1 Ratio)

**The Problem:** The system tells builders what NOT to do more than what TO DO. The original flagship had a 7.9:1 guardrail-to-playbook ratio in builder-facing content.

### Current State in the Pipeline

**Conventions brief (conventions-brief.md, 566 lines):**
This file has been SIGNIFICANTLY reformed since the flagship. It is no longer a guardrail checklist. Breaking it down by section:

| Section | Lines (~) | Content Type | Guardrail or Playbook? |
|---------|-----------|-------------|----------------------|
| 1. IDENTITY (Soul) | 48 | Constraints | GUARDRAIL |
| 2. PERCEPTION | 27 | Thresholds + rationale | GUARDRAIL (but with "why" -- more educational) |
| 3. RICHNESS | 25 | Governing principle with self-tests | PLAYBOOK (density x restraint x confidence formula) |
| 4. MULTI-COHERENCE | 55 | Coherence arc planning + CSS examples | PLAYBOOK (concrete 4-zone example, CSS recipes) |
| 5. FRACTAL ECHO | 55 | Scale build order + parametric echo CSS | PLAYBOOK (CSS recipe per scale, closed vocabulary) |
| 6. UNIFIED METAPHOR | 25 | Metaphor test + navigation elements | MIXED (test = guardrail, nav patterns = playbook) |
| 7. TRANSITION GRAMMAR | 35 | Three transition types + channel budgets | PLAYBOOK (SMOOTH/BRIDGE/BREATHING with CSS) |
| 8. CSS VOCABULARY | 40 | Component patterns + layout topologies | PLAYBOOK (6 concrete patterns with CSS) |
| 9. CREATIVE AUTHORITY | 20 | What builder can override | PLAYBOOK (permission-granting) |
| 9B. QUALITY FLOOR | 15 | Numeric minimums | GUARDRAIL |
| 10. COMPOSITIONAL MEMORY | 15 | Anti-drift habits | PLAYBOOK (4 habits) |
| 11. FIVE QUESTIONS | 18 | Self-assessment | PLAYBOOK (mirrors, not gates) |
| 12. RESTRAINT LIST | 14 | What doesn't exist | GUARDRAIL |
| 13. ACCESSIBILITY | 25 | HTML skeleton + CSS | PLAYBOOK (template code) |
| 14. RESPONSIVE | 12 | Breakpoint behavior | PLAYBOOK |
| CONVICTION CARD | 20 | Builder commitment template | PLAYBOOK |
| PROCESS | 55 | Build flow + boundary CSS recipe | PLAYBOOK (sequenced steps with CSS examples) |
| Builder Warnings | 20 | W-code mitigations | MIXED |

**Estimated ratio in conventions-brief alone: ~2.5:1 PLAYBOOK-to-GUARDRAIL.** The ratio has INVERTED from the flagship's 7.9:1 guardrail-to-playbook. Section 4 alone has a full 4-zone CSS example with RGB deltas computed. Section 5 has per-scale CSS recipes. Section 7 has transition-to-channel budget mapping. The PROCESS section has a boundary CSS recipe example.

**TC brief (_tc-brief.md, ~50 lines):**
Currently a specification-format output (5 sections: metaphor, zones, tensions, mechanisms, CSS directions). Section 4 (SELECTED MECHANISMS) says "1-line description of HOW it serves the metaphor" -- this is closer to a checklist than a recipe.

**After TC-ENRICH-01 (recipe format):** The TC brief converts from specification to recipe format with verb taxonomy, sequenced phases, and embedded perception checks. This is THE highest-leverage change per the synthesis (8/25 concordance, 0 dissent).

**After TC-ENRICH-03 (CSS recipe hints):** Each mechanism gets "1-line CSS recipe AND how it serves the metaphor" instead of just "1-line description." This bridges mechanism names to CSS.

**Gate runner (gate-runner.md, 1,159 lines):**
The gate runner has been reformed with FIX RECIPE COMPOSITIONAL CONTEXT. Each gate failure now includes:
- Measured values + threshold + delta
- Specific CSS fix
- `brief_section` reference pointing back to conventions-brief

This prevents the gate runner from being a pure guardrail generator. Fix recipes re-route the builder to the compositional world-model.

### Gap After Surgery

**Remaining gap:** The TC brief's Section 4 (SELECTED MECHANISMS) is still a list format. Even after TC-ENRICH-03, each mechanism gets ONE line. The builder receives 14+ mechanism names with one-line descriptions. This is inherently a checklist, not a recipe. The builder must then independently look up each mechanism in the catalog, understand it, and figure out how to deploy it.

**Proposed fix:** TC-ENRICH-10 (HIGH priority, currently in plan) adds mechanism catalog impact profiles to the TC brief output, not just names. But even this doesn't sequence the mechanisms into a BUILD ORDER. The builder receives "here are 14 mechanisms" not "deploy these 3 first at Zone 1, then these 4 at Zone 2 boundary."

**Assessment: PARTIALLY ADDRESSED**

The conventions-brief has flipped the ratio. The gate runner adds compositional context to fixes. TC-ENRICH-01 (recipe format) is the critical remaining piece. But even with TC-ENRICH-01, the mechanism deployment sequence is unaddressed -- the builder receives mechanisms as a SET not a SEQUENCE.

---

## FAILURE MODE 2: BUILDER ISOLATION (75-Line Cap)

**The Problem:** The builder receives ~75 lines of extracted content and has no compositional intelligence. The builder can't see the mechanism catalog's 869 lines of CSS patterns, the TC skill's 2,006 lines of derivation logic, or the PA skill's 881 lines of evaluation criteria.

### Current State in the Pipeline

**What EXACTLY does the builder receive?** Tracing through `build-page SKILL.md` Section 3 (Builder spawn prompt, lines 81-124):

The builder is told to read these files IN ORDER:

1. `_tc-brief.md` -- ~50 lines (metaphor, zones, tensions, mechanisms, CSS directions)
2. `conventions-brief.md` -- ~566 lines (world-model, CSS vocabulary, process)
3. Content file -- variable length (the actual content to design)

Plus "reference files (consult as needed during build)":

4. `mechanism-catalog.md` -- ~869 lines (18 mechanisms with CSS patterns)
5. `components.css` -- ~31KB (component CSS library)
6. `tokens.css` -- ~174 lines (CSS variables)
7. `prohibitions.md` -- ~353 lines (soul constraints)

**Total available to builder: ~2,000+ lines across 7 files.**

This is NOT a 75-line cap anymore. The build-page orchestrator provides the builder with the full conventions brief (566 lines) and directs them to the mechanism catalog (869 lines) as a reference file.

**The "consult as needed" problem:** Files 4-7 are listed as "consult as needed during build." The builder must PROACTIVELY choose to read them. Given token budget pressure and the instruction to "read these files IN THIS ORDER" (implying priority), the builder may read files 1-3 carefully and skim or skip files 4-7.

**After TC-ENRICH-10 (mechanism catalog impact profiles in TC brief):** The builder gets mechanism impact profiles embedded directly in the TC brief instead of having to look them up. This reduces the "consult as needed" dependency.

**After TC-ENRICH-13 (builder absorption anchors):** A Section 6 footer in the TC brief provides "3 things the builder MUST NOT violate" -- page-specific anchors that survive primacy/recency effects.

### Gap After Surgery

**Remaining gap 1:** The builder has ACCESS to 2,000+ lines but ATTENTION for maybe 500-700 lines (given a typical Opus context window allocation for reading + building). The conventions brief at 566 lines is dense. The builder is likely to absorb Sections 1-5 well (primacy), skim 6-10 (middle dead zone), and re-engage with the PROCESS section (recency). Critical content in Sections 6-8 (Unified Metaphor, Transition Grammar, CSS Vocabulary) may fall in the dead zone.

**Remaining gap 2:** The mechanism catalog is a REFERENCE FILE. Builders under time pressure will not read 869 lines of mechanism descriptions when the TC brief already names 14+ mechanisms. The TC brief's 1-line-per-mechanism format is insufficient to transfer the catalog's CSS patterns to the builder.

**Remaining gap 3:** `components.css` at 31KB is enormous. No builder reads 31KB of CSS during a build. The builder needs a components MENU (10-15 lines: component names + when to use), not the full CSS file.

**Proposed fix for gap 1:** Move the PROCESS section (sequenced build steps with boundary CSS recipe) to immediately after PERCEPTION (Section 2). The builder builds boundary-by-boundary; they need the process BEFORE the theory. Currently: theory (Sections 3-8) then process (Section 15). Better: identity (Section 1), perception (Section 2), PROCESS (Section 3), then theory (Sections 4+).

**Proposed fix for gap 3:** Add a 15-line component menu to the TC brief Section 4 (alongside mechanisms): "For this content, use these 8-10 components: [name] for [purpose]" with class names. Currently absent from all enrichments.

**Assessment: PARTIALLY ADDRESSED**

The 75-line cap is GONE -- the builder now has 566 lines of conventions brief + 50-line TC brief + reference files. The problem has shifted from ACCESS to ABSORPTION. TC-ENRICH-10 and TC-ENRICH-13 partially address absorption but don't solve the middle-dead-zone problem in the conventions brief or the gap between mechanism NAMES and mechanism CSS.

---

## FAILURE MODE 3: BINARY COMPLIANCE WITHOUT QUALITY

**The Problem:** Perception thresholds are floors, not quality indicators. A page with every value at exactly the threshold (15 RGB background delta, 2px font-size delta, 3 channels shifting) passes all gates and is boring. Gates catch FLAT, but nothing pushes toward COMPOSED.

### Current State in the Pipeline

**What pushes above the floor?**

1. **TC skill metaphor derivation:** The 6-criterion metaphor quality rubric (Phase 3.5G) requires Interpretive Distance >= 2, total score >= 12/18. This generates a metaphor that is NOT generic.

2. **Conventions brief Section 3 (RICHNESS):** Richness = density x restraint x confidence. Each factor has specific self-tests. The formula is multiplicative -- zero in any factor = zero richness.

3. **Conventions brief Section 9B (QUALITY FLOOR):** >= 14 mechanisms, >= 800 CSS lines, >= 3 channel shifts avg >= 4, >= 3 border configs, >= 8 component types. These are HIGHER than the gate thresholds.

4. **PA Tier 5 (PA-60 through PA-68):** 9 compositional depth questions that assess QUALITY above the floor. The weaver synthesizes a dual-verdict (PA-05 x Tier 5). PA-65 (compositional voice -- "single instrument, choir, or ensemble?") specifically detects whether composition exists above compliance.

5. **After PA-ENRICH-05 (channel activation vs deployment):** Distinguishes DEPLOYED (CSS exists) from ACTIVE (exceeds perception threshold). Counts only ACTIVE channels. This prevents "wrote the CSS but it's invisible" from passing.

6. **After PA-ENRICH-06 (magnitude check):** For each channel counted as "shifting," verifies delta exceeds perception threshold. This catches the "technically shifted by 1px" loophole.

### Gap After Surgery

**The fundamental gap is still present:** No part of the pipeline GENERATES quality above the floor. The TC skill derives a metaphor (structural quality). The conventions brief describes the world-model (conceptual quality). The gates verify floors (mechanical quality). The PA measures outcome (perceptual quality).

But the BUILDER'S actual decision-making process has no mechanism that rewards exceeding thresholds. The builder reads:
- "Background delta >= 15 RGB" and uses 15 RGB
- "3+ channels shift at boundary" and makes exactly 3 shift
- "14+ mechanisms" and deploys exactly 14

**Why this happens:** The conventions brief's Section 9 (CREATIVE AUTHORITY) says "You are the composer. ~80% of all decisions are yours." But this is PERMISSION, not DIRECTION. The builder gets permission to exceed floors but no recipe for HOW.

**The conventions brief's Section 4 example (MULTI-COHERENCE)** provides a concrete 4-zone example with 5 channels shifting at the climax boundary. This is a recipe for EXCEEDING the 3-channel floor. But it's one example buried in 566 lines.

**Proposed fix:** The TC brief Section 5 (METAPHOR-IMPLIED CSS DIRECTIONS) should include TARGET values, not just directions. Currently: "geological strata -> visible layer boundaries via border-left-width progression." Better: "geological strata -> border-left 4px at Zone 1 / 3px at Zone 2 / 1px at Zone 3, bg shift of 25+ RGB at Z1->Z2 (primary drama), 15-20 RGB at Z2->Z3 (resolution)." Specific values that EXCEED floors because the metaphor demands them.

**Assessment: PARTIALLY ADDRESSED**

PA Tier 5 detects quality above floors. PA-ENRICH-05/06 strengthen the detection. But detection is POST-BUILD. The builder has no pre-build mechanism for GENERATING quality above floors. The conventions brief's examples show it; the TC brief doesn't encode it. TC-ENRICH-01 (recipe format) would partially address this IF the recipe includes target values above thresholds.

---

## FAILURE MODE 4: PROGRAMMATIC != PERCEPTUAL

**The Problem:** Gates say PASS, humans say FLAT. The flagship passed programmatic gates (6 CSS channels with 4+ shifts per boundary) but PA found them imperceptible. The gate system counted channels without verifying perceptual magnitude.

### Current State in the Pipeline

**Gate runner SC-13 (Multi-Coherence):** Currently counts channel shifts with these thresholds:
- Chromatic: bg max-channel delta >= 15 RGB
- Typographic: font-size delta >= 2px OR font-weight delta >= 100
- Spatial: padding delta >= 24px
- Structural: border configuration change
- Behavioral: interactivity presence change
- Material: background-image change

**Gate runner SC-14 (Sub-Perceptual Prevention):** Catches:
- letter-spacing < 0.025em
- adjacent bg delta < 15 RGB
- 3+ values clustered within 2px

**These two gates together address the magnitude problem.** SC-13 already includes magnitude thresholds (>= 15 RGB for chromatic, >= 2px for typographic). SC-14 explicitly catches sub-perceptual CSS. This is the flagship fix that was MISSING before.

**PA skills after enrichment:**

After PA-ENRICH-05 (channel activation distinction): PA auditors now distinguish DEPLOYED from ACTIVE. The weaver classifies channels as active only if they exceed perception thresholds.

After PA-ENRICH-06 (magnitude check): For each channel counted as "shifting," the weaver verifies delta exceeds the perception threshold table.

After PA-ENRICH-09 (metaphor failure root-cause diagnosis): When PA-44/PA-68 fail, the PA now classifies the failure as IMPLEMENTATION (builder labels), STRUCTURAL (TC derivation), or COVERAGE (builder ran out of steam). Each routes to a different fix type.

### Gap After Surgery

**Remaining gap 1:** The gate runner's SC-13 measures ADJACENT zones. It does NOT measure whether the CUMULATIVE EXPERIENCE is perceptible. A page with 5 zones, each shifting 15 RGB from the previous, has a total range of 60 RGB -- which IS perceptible as an arc. But a page with 5 zones each at exactly 15 RGB delta in ALTERNATING directions (lighter-darker-lighter-darker) would have each transition perceptible but the overall ARC absent. SC-13 can't detect this. PA-ENRICH-10 (Coherence ARC detection) addresses this at the PA level but not at the gate level.

**Remaining gap 2:** The behavioral and material channels (5 and 6) have no magnitude thresholds in SC-13. A hover state that changes opacity by 0.01 "counts" as a behavioral shift. This is minor but exploitable.

**Remaining gap 3:** PA tells the builder WHAT is flat but still not always WHY. PA-ENRICH-09 provides root-cause diagnosis for metaphor failures. But for non-metaphor issues (e.g., "typography feels uniform"), the PA output is still "PA-07 FAIL: text is uncomfortable to read" without diagnosing whether the cause is line-height, font-size, letter-spacing, or contrast.

**Assessment: MOSTLY RESOLVED**

SC-14 (sub-perceptual prevention) + magnitude thresholds in SC-13 + PA-ENRICH-05/06/09 collectively close the programmatic-perceptual gap for PRIMARY channels (1-4). The behavioral/material channels remain loosely gated. The ARC vs individual-transition distinction is caught by PA but not by gates.

---

## FAILURE MODE 5: CONTINUATION BIAS (Builder Can't Self-Revise)

**The Problem:** The builder can't revise its own composition because LLMs have continuation bias. Fix cycles exist but strip compositional context, turning recipes into checklists.

### Current State in the Pipeline

**Build-page fix cycle protocol (Section 7):**

7.1: Fix instructions include:
- Gate failures with measured values, thresholds, and CSS fixes
- Compositional context from build log: boundary's planned coherence direction, which channels shift, which are missing
- PA top-5 issues: directional, not prescriptive
- Tier 5 gaps with auditor reasons
- DO NOT TOUCH list (protected elements)

7.2: "Re-read _tc-brief.md (your metaphor, zones, tensions) AND your conviction statement and transition table in _build-log.md before applying fixes."

7.3: Re-verification with reduced PA (2 auditors for cycles 2-3)

7.4: TC re-invocation if PA-44 AND PA-68 both fail across 2+ cycles (metaphor problem, not implementation)

**Gate runner fix recipe compositional context:**
Each gate failure includes a `brief_section` reference: "Re-read conventions-brief.md Section N (SECTION_NAME) before applying this fix."

**After TC-ENRICH-05 (fix cycle re-invocation protocol):**
- TYPE A (mechanical) -> builder fixes CSS
- TYPE B (structural) -> builder re-reads TC brief, fixes with compositional context
- TYPE C (compositional) -> TC re-invocation, new metaphor

**After PA-ENRICH-08 (fix-type classification in weaver top-5):**
MECHANICAL / STRUCTURAL / COMPOSITIONAL classification prevents compositional fixes from getting mechanical treatment.

**After PA-ENRICH-09 (metaphor failure root-cause diagnosis):**
Weaver diagnoses WHETHER the problem is IMPLEMENTATION vs STRUCTURAL vs COVERAGE, routing to the correct fix type.

### Gap After Surgery

**Remaining gap 1:** The fix cycle instruction at 7.2 says "re-read _tc-brief.md AND your conviction statement." This is a 2-line instruction. Whether the builder ACTUALLY re-reads them depends on LLM compliance. The instruction is behavioral (not structural). Binary rules achieve 100% compliance -- but "re-read this file" is hard to enforce programmatically.

**Remaining gap 2:** Fix cycles 2-3 use only 2 PA auditors (A + C). The flagship's DOMINANT failure (catastrophic whitespace void) was caught by 9/9 auditors but missed by a previous 2-PA audit. Reducing to 2 auditors in fix cycles risks missing systemic issues that only surface with breadth of perspective.

**Remaining gap 3:** The "same builder" rule (build-page Section 11, non-negotiable #5) preserves compositional memory. But the SAME builder also has continuation bias -- it will tend to EXTEND its existing approach rather than REVISE it. The fix cycle instruction "re-read your conviction statement" reinforces continuation ("remember what you intended") rather than enabling revision ("reconsider whether your approach works").

**Proposed fix for gap 2:** For cycle 2, use 4 auditors (A, C, D, F) instead of 2. The cost is ~20 min extra but catches systemic issues. Only cycle 3 reduces to 2 auditors.

**Proposed fix for gap 3:** Add a "REVISION PROMPT" to fix cycle instructions: "Before applying fixes, answer: 'If I were starting this page from scratch with the same metaphor, would I make the same zone boundary decisions?' If NO, state what you would change and WHY, then apply that revision instead of patch-fixing." This exploits the hypothetical framing to bypass continuation bias.

**Assessment: PARTIALLY ADDRESSED**

TC-ENRICH-05 + PA-ENRICH-08/09 together classify fix types correctly and route to the right treatment. The gate runner's compositional context references prevent pure mechanical compliance. But the fundamental LLM limitation (continuation bias) is addressed through behavioral instructions, not structural mechanisms. The fix cycle PA reduction from 9 to 2 auditors is a known risk.

---

## FAILURE MODE 6: META-OUTPUT RATIO

**The Problem:** The pipeline generates more infrastructure than product. The flagship had a 660:1 meta-to-output ratio. The threshold is 20:1.

### Current State in the Pipeline

**Post-surgery infrastructure count:**

| File | Lines | Role |
|------|-------|------|
| TC SKILL.md | ~1,490 (post-trim+enrich) | Derivation intelligence |
| PA SKILL.md | ~1,032 (post-trim+enrich) | Evaluation intelligence |
| build-page SKILL.md | ~486 | Orchestration |
| conventions-brief.md | ~566 | Builder world-model |
| gate-runner.md | ~1,159 | Programmatic gates |
| mechanism-catalog.md | ~869 | Mechanism vocabulary |
| components.css | ~31KB (~800 lines) | Component library |
| tokens.css | ~174 | Token values |
| prohibitions.md | ~353 | Soul constraints |
| **Total infrastructure** | **~6,929 lines** | |

**Output from one pipeline run:**

| File | Lines | Role |
|------|-------|------|
| _tc-brief.md | ~50 | Compositional brief |
| output.html | ~800-2,000 | The page |
| _build-log.md | ~100-200 | Builder documentation |
| _cascade-value-table.md | ~50-100 | CSS verification |
| _gate-results.json | ~200 | Gate measurements |
| _lock-sheet.md | ~50-100 | Sovereignty categories |
| _pa/ (9 reports + synthesis + matrix) | ~1,000-2,000 | PA documentation |
| _run-manifest.md | ~30 | Run summary |
| **Total output** | **~2,300-4,700 lines** | |

**Ratio: ~6,929 / ~3,500 = ~2:1 infrastructure to output.**

This is WELL within the 20:1 threshold. The surgery trims (reducing TC by ~620 lines and PA by ~306 lines) improve this further.

**The critical distinction:** The flagship's 660:1 ratio included the ENTIRE pipeline analysis corpus (50+ agents, 41 files, ~1.7MB) in "infrastructure." The OPERATIONAL pipeline (skill files + reference files) is ~6,929 lines. The ANALYTICAL corpus (ephemeral research) is separate and not loaded during builds.

### Gap After Surgery

**Remaining concern:** The 6,929 lines of infrastructure are loaded into DIFFERENT agents:
- TC agent reads: TC SKILL (~1,490) + content + mechanism catalog (~869) + prohibitions (~353) + tokens (~174) = ~2,886 lines
- Builder reads: TC brief (~50) + conventions brief (~566) + content + mechanism catalog (~869) + components.css (~800) + tokens (~174) + prohibitions (~353) = ~2,812 lines
- Each PA auditor reads: PA SKILL (~1,032) + screenshots (visual) + assigned questions = ~1,032 lines
- Orchestrator reads: build-page SKILL (~486) + coordinates everything

No single agent reads all 6,929 lines. The per-agent load is manageable (~1,000-2,900 lines).

**Assessment: RESOLVED**

The operational meta-output ratio is ~2:1, well within the 20:1 threshold. Per-agent loads are manageable. The trims further improve this. The 660:1 flagship ratio was an artifact of including analytical research in the measurement.

---

## FAILURE MODE 7: TC GAP (Does TC Actually Reach the Builder?)

**The Problem:** Does the pipeline actually invoke TC for per-content analysis? Does the TC brief reach the builder? If TC is not invoked, who does per-content analysis?

### Current State in the Pipeline

**Exact data flow (traced through build-page SKILL.md):**

1. **Step 2 (TC SKILL INVOCATION):** Orchestrator spawns 1 Opus agent with the TC spawn prompt. The TC agent reads: TC SKILL, content file, mechanism catalog, prohibitions, tokens. Executes Phases 0-4. Outputs `_tc-brief.md` (~50 lines).

2. **Step 2 verification:** "Wait for TC agent to complete. Verify _tc-brief.md exists and contains all 5 sections."

3. **Step 3 (BUILDER DEPLOYMENT):** Builder reads `_tc-brief.md` FIRST ("order matters -- TC brief establishes compositional foundation"). The TC brief is file #1 in the builder's read order.

4. **Builder spawn prompt (line 87):** "_tc-brief.md -- YOUR DESIGN BRIEF. Content-specific metaphor, zones, tensions, mechanisms derived by the TC analyst. This is your compositional foundation."

**The TC brief DOES reach the builder.** It is the FIRST file the builder reads. The data flow is:

```
Content -> TC agent (Phases 0-4) -> _tc-brief.md -> Builder (reads FIRST)
                                                  -> Builder also reads conventions-brief.md (SECOND)
                                                  -> Builder also reads content (THIRD)
```

**After B-01 fix (TC spawn prerequisites):** The TC agent's spawn prompt now includes `prohibitions.md` + `tokens.css` in its file read list. Previously, the TC agent had ZERO constraint awareness. This was a BLOCKING issue discovered by the trim safety audit.

### Gap After Surgery

**Remaining gap 1:** The TC brief is ~50 lines summarizing ~1,490 lines of TC skill output. The compression ratio is ~30:1. Critical information about WHY specific mechanisms were selected, WHICH tensions they resolve, and HOW the metaphor maps to CSS may be lost in compression. TC-ENRICH-03 (CSS recipe hints) partially addresses this by requiring "1-line CSS recipe AND how it serves the metaphor" per mechanism. But 1 line per mechanism for 14+ mechanisms is still severe compression.

**Remaining gap 2:** The TC brief has no mechanism for the builder to ASK QUESTIONS back to the TC agent. If the builder encounters ambiguity in the TC brief ("what does 'geological strata' mean for border treatment?"), they must interpret independently. The build-page orchestrator has no builder->TC communication channel. The only re-invocation path is the TC re-invocation in Section 7.4 (after PA-44 AND PA-68 both fail across 2+ cycles).

**Remaining gap 3:** The builder's Phase A instruction (build-page line 97) says "Read the TC brief. Your metaphor, zones, tensions, and mechanisms have been pre-derived by the TC analyst. Internalize them. Your job starts at Phase B." This is a BEHAVIORAL instruction. The builder must INTERNALIZE 50 lines before starting their own planning. If the builder is eager to start building, they may skim the TC brief.

**Assessment: MOSTLY RESOLVED**

TC IS invoked. The TC brief DOES reach the builder as file #1. The B-01 fix ensures the TC agent has constraint awareness. The compression gap (30:1) is partially addressed by TC-ENRICH-03. The missing builder->TC communication channel is a structural limitation of the agent topology but is mitigated by the fix cycle's TC re-invocation path.

---

## FAILURE MODE 8: ABSORPTION UNCERTAINTY (Does the Builder Actually Process It All?)

**The Problem:** After all surgery, estimate total lines the builder must process. Map primacy/recency/middle-dead-zone. What critical content falls where? Does TC-ENRICH-01 and TC-ENRICH-13 solve this?

### Current State in the Pipeline

**Builder's read order (from build-page Section 3):**

| Priority | File | Lines | Position Effect |
|----------|------|-------|-----------------|
| 1 (FIRST) | _tc-brief.md | ~50 | PRIMACY -- highest absorption |
| 2 | conventions-brief.md | ~566 | EARLY-TO-MIDDLE -- absorption degrades |
| 3 | Content file | ~variable | MIDDLE -- content is WHAT to build |
| 4 (reference) | mechanism-catalog.md | ~869 | MIDDLE-LATE -- "consult as needed" |
| 5 (reference) | components.css | ~800 | LATE -- "consult as needed" |
| 6 (reference) | tokens.css | ~174 | LATE -- "consult as needed" |
| 7 (LAST) | prohibitions.md | ~353 | RECENCY -- "Read LAST before CSS begins" |

**Total: ~2,812 lines (excluding variable content length).**

**Absorption mapping:**

| Zone | Lines | Files | Critical Content | Absorption |
|------|-------|-------|------------------|------------|
| PRIMACY (first ~200 lines) | ~200 | TC brief (50) + conventions brief Sections 1-3 (~150) | Metaphor, zones, tensions, mechanisms, soul, perception, richness formula | HIGH -- builder remembers these |
| EARLY (lines 200-500) | ~300 | Conventions brief Sections 4-8 | Multi-coherence, fractal echo, metaphor, transitions, CSS vocabulary | MODERATE -- some retention |
| MIDDLE DEAD ZONE (lines 500-800) | ~300 | Conventions brief Sections 9-14 + PROCESS | Creative authority, quality floor, compositional memory, 5 questions, restraint, accessibility, responsive, conviction card, BUILD PROCESS | LOW -- critical process content is HERE |
| LATE (lines 800-2800+) | ~2,000+ | Content + reference files | The actual content to build, mechanism details, component CSS, tokens, prohibitions | VARIABLE -- content is forced-read, reference is optional |

**The critical problem:** The BUILD PROCESS section (sequenced steps, boundary CSS recipe, verification pauses) is at the END of the conventions brief (~line 500+). This is in the MIDDLE DEAD ZONE. The builder's actual build methodology falls exactly where absorption is lowest.

**After TC-ENRICH-01 (recipe format):** The TC brief itself becomes recipe-formatted with sequenced phases and embedded perception checks. If the TC brief is 50 lines of RECIPE, and the builder reads it FIRST (primacy), the recipe format partially compensates for the conventions brief's process section being in the dead zone.

**After TC-ENRICH-13 (builder absorption anchors):** A Section 6 footer in the TC brief provides "3 things the builder MUST NOT violate" -- page-specific. These land in the TC brief (~line 50), still in primacy zone. But 3 items is limited.

### Gap After Surgery

**Remaining gap 1:** The conventions brief's PROCESS section is the most actionable content for the builder (sequenced steps, boundary CSS recipe, verification pauses) but lives in the dead zone. Moving it earlier would help but wasn't proposed in any enrichment.

**Remaining gap 2:** The "consult as needed" reference files (~2,043 lines) are effectively optional. The builder will not read 869 lines of mechanism catalog during a build. The TC brief names mechanisms but doesn't transfer their CSS patterns. The builder must independently bridge "mechanism #7 Zone Backgrounds" to the actual CSS patterns in the catalog.

**Remaining gap 3:** `prohibitions.md` is read LAST ("Read LAST before CSS begins"). This exploits recency well -- soul constraints are fresh when CSS writing starts. But 353 lines of prohibitions is a lot of LAST-position content. The builder may absorb the first 50 lines (absolute prohibitions) and skim the remaining 303 lines.

**Remaining gap 4:** The builder's total cognitive load is ~2,812 lines BEFORE they write their first line of CSS. Even with Opus, this is significant. The conventions brief at 566 lines is a WORLD-MODEL document -- it teaches the builder how composition works. A builder who has internalized this world-model produces COMPOSED pages. A builder who has skimmed it produces COMPLIANT pages. The difference between these two outcomes is absorption quality, not information availability.

**Proposed fix for gap 1:** Create a 30-line "BUILDER QUICK-START" section at the TOP of conventions-brief.md (before Section 1) that summarizes the process: "1. Read TC brief. 2. Write conviction statement. 3. Build boundary-by-boundary. 4. Verify at midpoint. 5. Answer 5 questions." Then the full process section remains later for depth. The quick-start lands in primacy zone.

**Proposed fix for gap 2:** TC-ENRICH-10 (mechanism catalog impact profiles in TC brief) partially addresses this. Additionally, the TC brief Section 4 could include a 2-line CSS snippet per mechanism (not just name + description) for the top 5 most critical mechanisms. This transfers CSS patterns directly without requiring catalog lookup.

**Assessment: PARTIALLY ADDRESSED**

TC-ENRICH-01 (recipe format) places build methodology in primacy zone via the TC brief. TC-ENRICH-13 places 3 critical anchors in primacy zone. But the conventions brief's PROCESS section remains in the dead zone, reference files are effectively optional, and total cognitive load (~2,812 lines) is high. The gap between INFORMATION AVAILABLE and INFORMATION ABSORBED is the fundamental remaining challenge.

---

## SUMMARY MATRIX

| # | Failure Mode | Rating | Key Factor |
|---|-------------|--------|------------|
| 1 | Guardrail Factory (7.9:1) | **PARTIALLY ADDRESSED** | Conventions brief ratio inverted to ~2.5:1 playbook-to-guardrail. TC-ENRICH-01 (recipe format) is the remaining critical piece. Mechanism deployment still a list, not a sequence. |
| 2 | Builder Isolation (75-line cap) | **PARTIALLY ADDRESSED** | 75-line cap eliminated (builder has 2,812+ lines). Problem shifted from ACCESS to ABSORPTION. TC-ENRICH-10/13 partially address absorption. Middle-dead-zone in conventions brief unaddressed. |
| 3 | Binary Compliance Without Quality | **PARTIALLY ADDRESSED** | PA Tier 5 detects quality above floors. PA-ENRICH-05/06 strengthen detection. But no pre-build mechanism GENERATES quality above floors. Detection is post-build only. |
| 4 | Programmatic != Perceptual | **MOSTLY RESOLVED** | SC-14 + magnitude thresholds in SC-13 + PA-ENRICH-05/06/09 close the gap for primary channels. Behavioral/material channels loosely gated. ARC detection at PA level only. |
| 5 | Continuation Bias | **PARTIALLY ADDRESSED** | TC-ENRICH-05 + PA-ENRICH-08/09 classify fix types and route correctly. Gate runner adds compositional context to fixes. Fundamental LLM limitation addressed behaviorally, not structurally. Fix cycle PA reduction (9->2) is a known risk. |
| 6 | Meta-Output Ratio | **RESOLVED** | Operational ratio ~2:1 (well within 20:1 threshold). Per-agent loads manageable. Trims further improve. |
| 7 | TC Gap | **MOSTLY RESOLVED** | TC IS invoked. TC brief reaches builder as file #1. B-01 fix ensures constraint awareness. 30:1 compression partially addressed by TC-ENRICH-03. No builder->TC communication channel. |
| 8 | Absorption Uncertainty | **PARTIALLY ADDRESSED** | TC-ENRICH-01 places recipe in primacy zone. TC-ENRICH-13 places 3 anchors. But conventions brief PROCESS in dead zone, reference files effectively optional, total cognitive load ~2,812 lines. |

---

## TOP 5 REMAINING GAPS (Ranked by Impact)

### Gap 1: Conventions Brief Process Section in Dead Zone
**Impact:** HIGH -- the builder's actual methodology lands where absorption is lowest
**Fix:** Add 30-line BUILDER QUICK-START at top of conventions-brief.md
**Effort:** Small (30 lines added, no other changes)
**Files affected:** `conventions-brief.md`

### Gap 2: Mechanism Deployment is a List, Not a Sequence
**Impact:** HIGH -- builder receives 14+ mechanism names without build order
**Fix:** TC-ENRICH-01 (recipe format) must include mechanism deployment SEQUENCE keyed to zones, not just mechanism LIST
**Effort:** Medium (modifying TC-ENRICH-01 spec)
**Files affected:** `TC SKILL.md` Phase 4.5

### Gap 3: No Pre-Build Quality-Above-Floor Generation
**Impact:** MEDIUM-HIGH -- gates verify floors, PA detects quality, nothing GENERATES quality
**Fix:** TC brief Section 5 should include TARGET values above thresholds (e.g., "25+ RGB delta at primary drama boundary" not just "visible bg shift")
**Effort:** Small (modifying TC Phase 4.5 output template)
**Files affected:** `TC SKILL.md` Phase 4.5

### Gap 4: Reference Files Effectively Optional
**Impact:** MEDIUM -- mechanism catalog (869 lines) and components.css (31KB) contain critical CSS patterns the builder probably skips
**Fix:** Embed top 5 mechanism CSS snippets (2 lines each = 10 lines) in TC brief Section 4
**Effort:** Small (modifying TC Phase 4.5 output template)
**Files affected:** `TC SKILL.md` Phase 4.5

### Gap 5: Fix Cycle PA Reduction (9->2)
**Impact:** MEDIUM -- systemic issues caught by breadth of perspective may be missed
**Fix:** Use 4 auditors (A, C, D, F) for cycle 2, reduce to 2 for cycle 3 only
**Effort:** Tiny (changing 1 table in build-page SKILL.md)
**Files affected:** `build-page SKILL.md` Section 7.4

---

## CROSS-CUTTING OBSERVATION

The surgery plan addresses the DETECTION side thoroughly (PA enrichments, gate magnitude thresholds, fix-type classification) but the GENERATION side less thoroughly. The pipeline is now very good at MEASURING quality but the gap between "information available to the builder" and "information the builder actually absorbs and applies" is the remaining structural challenge.

The single highest-leverage intervention is TC-ENRICH-01 (recipe format), because it places BUILD METHODOLOGY in the PRIMACY ZONE (the TC brief, read first). This partially compensates for the conventions brief's process section being in the dead zone. If TC-ENRICH-01 includes mechanism deployment SEQUENCES (not just lists) and TARGET VALUES above thresholds (not just floor thresholds), it addresses Gaps 2, 3, and 4 simultaneously.

**Recommendation:** When applying TC-ENRICH-01, ensure the recipe format includes:
1. Sequenced mechanism deployment keyed to zones (not a flat list)
2. Target CSS values above perception thresholds (not just floor values)
3. Top 5 mechanism CSS snippets (2 lines each)
4. The 3 builder absorption anchors (TC-ENRICH-13)

This makes the TC brief a 50-line BUILD RECIPE that compensates for absorption loss in the 566-line conventions brief.
