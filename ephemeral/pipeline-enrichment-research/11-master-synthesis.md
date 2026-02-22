# 11 - MASTER SYNTHESIS: Pipeline Enrichment Recommendation

**Agent:** Master Synthesizer (Opus)
**Date:** 2026-02-20
**Reports Synthesized:** 10-contrarian-analysis, 04-brief-deep-dive, 07-anti-regression-analysis, 17-concept-flow-trace, 06-orchestrator-deep-dive, 15-scale-component, 01-pipeline-state-map, 02-stack-placement-design, 16-scale-character
**Total corpus:** ~7,200 lines of analysis from 15+ Wave 1 agents + 1 contrarian

---

## 1. THE VERDICT

**TEST FIRST. Pre-register a minimal enrichment package. Apply ONLY if the test result falls in the 2.5-3.0 band.**

This is not "don't enrich" and not "enrich now." It is: **the pipeline has never been run. Run it once. Let the result dictate the action.**

The contrarian's core argument is unassailable: you cannot optimize a machine you have never turned on. The empirical record (963 lines = PA-05 1.5/4; 100 lines = PA-05 4/4) proves that more text does not improve output. The `/build-page` pipeline is architecturally different from both -- its performance is genuinely unknown. Every enrichment recommendation in this corpus is a solution to a problem that has not been observed.

**Decision tree:**
- PA-05 >= 3.0: **No enrichment.** The pipeline works. Ship it.
- PA-05 2.5-3.0: **Apply the pre-registered minimal enrichment package** (see Section 4). Re-test.
- PA-05 < 2.5: **Enrichment will not fix it.** The problem is architectural (routing, model, file selection), not vocabulary. Investigate root cause before adding text.

---

## 2. CONSENSUS FINDINGS (What ALL Reports Agree On)

**C1: Stack progression is ABSENT from all pipeline files.**
Every report that looked for it (01, 02, 04, 06, 17) found the same thing: scales, channels, multi-coherence, and anti-scale are presented as independent peer concepts. The conventions brief orders them (Sections 3-5) but never states their architectural dependency. The orchestrator treats them as flat checkboxes. The weaver evaluates them independently. No file says "channels are the building blocks of multi-coherence, which is the mechanism of the anti-scale formula." This is the single finding with 100% agreement across all 15+ agents.

**C2: The conventions brief is near ceiling at 403 lines.**
Reports 03, 04, and 07 independently converge: the brief is "genuinely well-constructed" (04), "near cognitive load ceiling" (03), and must not exceed 450 lines (07). Any enrichment must be surgical. Report 04 found the brief is 51% world-description, 31% constraint, 16% recipe, 5% creative authority -- healthy ratios. The brief's voice ("These are not rules to comply with. They are the physics of human perception.") is its strongest asset and must be preserved.

**C3: Perception thresholds are the best-preserved concept in the pipeline.**
Report 17 traced all 9 concepts through 6 pipeline stages. Only perception thresholds survived with structured return-path routing. Every other concept suffered total or near-total extinction by the fix cycle. Thresholds survive because they reduce to single CSS property comparisons -- they ARE the measurement.

**C4: The fix cycle degrades from recipe to checklist.**
Reports 06, 17, and 04 all found the same structural pattern: the builder's first pass operates in recipe mode (world-description brief + Phase A-D sequence). The fix cycle returns to checklist mode (gate PASS/FAIL + PA auditor quotes). This reproduces the recipe-vs-checklist failure at the process level.

**C5: Enhancement channels 5+6 (Behavioral, Material) are near-phantom.**
Reports 01, 02, and the scale analyses agree: channels 5-6 have one-line definitions, binary gate checks, zero vocabulary guidance, zero PA coverage. A builder cannot improve what no file describes. However, all 5 scale analyses also agree these are correctly classified as "enhancement" -- they enrich but do not substitute for the primary four. This is low-priority for enrichment.

**C6: The orchestrator has a boundary-by-boundary vs channel-grouped contradiction.**
Report 06 found this: the conventions brief says "build BOUNDARY BY BOUNDARY" (line 386), but the spawn prompt's 4 self-check checkpoints are channel-grouped ("After zone backgrounds... After borders... After typography..."). This directly contradicts the brief's most important building instruction.

---

## 3. GENUINE DISAGREEMENTS (Not Emphasis Differences -- Real Conflicts)

**D1: Is the stack progression absence a PROBLEM or a FEATURE?**

- **Reports 01, 02, 17:** It is a critical gap. The builder encounters concepts without understanding their architectural relationship. The weaver evaluates them independently, missing integration failures. This is the highest-priority enrichment target.
- **Contrarian (10):** The brief's section ORDER already encodes the progression implicitly. Opus builders infer architectural relationships from reading order. Adding explicit stack notation adds cognitive load without adding capability. The middle-tier builder received ZERO stack vocabulary and produced PA-05 4/4. Explicit progression is not needed for quality output.
- **My assessment:** The contrarian is correct that explicit stack vocabulary is not needed for the BUILDER. But Report 17 makes a stronger case: the progression is needed for the WEAVER and FIX CYCLE, where concepts are currently atomized. A 2-3 line bridge in the brief and a compositional context section in fix instructions would address this without adding cognitive load to the builder.

**D2: Is compression a bug or a feature?**

- **Report 17:** Compression from concept to measurement is catastrophic information loss. 4 semantic directions go from 7 lines to total extinction. Anti-scale model (16 lines) has zero verification. The return path to the builder carries zero concept-level information.
- **Contrarian (10):** Compression IS the abstraction. A gate that measures ">= 15 RGB delta" IS the chromatic channel concept surviving in measurement form. Counting vocabulary occurrences conflates form with function. The concept survives if the builder's output exhibits the property, regardless of whether the measurement uses that term.
- **My assessment:** Both are right about different things. The contrarian is right that forward-path compression (brief to gates) is healthy abstraction. Report 17 is right that return-path compression (gates/PA back to builder) is harmful -- the builder gets symptoms, not diagnoses. The distinction matters: forward compression is a feature; return-path extinction is a bug.

**D3: Should the brief be restructured (bottom-up) or left as-is (telescope-first)?**

- **Report 02:** Restructure Sections 3-5 to present scales first, then channels, then multi-coherence, then anti-scale. Bottom-up matches build order.
- **Report 04:** The current telescope-first order (governing principle before building blocks) is correct for a world-description aimed at builders. Builders benefit from knowing WHY before HOW.
- **Contrarian (10):** Do not restructure. The brief works. Restructuring risks 963-line-prompt-level disruption for speculative benefit.
- **My assessment:** Do NOT restructure. The brief's voice and structure are its best asset. The bridge-text approach (04's recommendation: add 5-7 lines naming the relationship between existing sections) achieves the same goal without the risk of restructuring.

---

## 4. DECISION MATRIX

For each proposed enrichment from the corpus:

| # | Enrichment | Reports Supporting | Regression Risk (from 07) | Contrarian Rebuttal Strength | Verdict |
|---|-----------|-------------------|--------------------------|------------------------------|---------|
| E1 | Stack relationship bridge (~5 lines in brief) | 01, 02, 04, 06, 17 (5/9) | LOW (world-description, zero new constraints) | MEDIUM -- "implicit ordering may suffice for Opus" | **DEFER TO TEST** |
| E2 | Boundary-by-boundary recipe example (~8 lines in brief) | 04, 06, 15 (3/9) | NONE (recipe formatting = 0 HIGH risks) | LOW -- "this is just a concrete example of existing instruction" | **DO** |
| E3 | Fix checkpoint contradiction resolution (~5 lines in SKILL.md) | 06 (1/9, but CRITICAL finding) | NONE (restructures existing lines, adds zero new content) | NONE -- contrarian did not address this | **DO** |
| E4 | Perception threshold table consolidation in brief (~6 lines) | 01, 04, 07, 15, 17 (5/9) | NONE (thresholds already exist, just consolidated) | LOW -- "thresholds are already everywhere" | **DO** |
| E5 | Floor/target naming extension (DESIGNED/COMPOSED for 2-3 more dimensions) | 04 (1/9) | LOW (labels existing thresholds, adds no new constraints) | LOW -- "doesn't add new content, just names what exists" | **DEFER TO TEST** |
| E6 | Channel CSS property completion for channels 4-6 (~3 lines modifying existing) | 04 (1/9) | LOW (modifies existing lines) | MEDIUM -- "Opus doesn't need this" | **DEFER TO TEST** |
| E7 | Compositional reference card for mid-build (new ~30-line file) | 06 (1/9) | MEDIUM (adds new document to builder reading list) | HIGH -- "more text = worse output; 100 lines beat 403" | **DON'T** |
| E8 | Comprehension proof gate before building (~6 lines in SKILL.md) | 06 (1/9) | MEDIUM (adds mandatory deliverable, slows builder start) | HIGH -- "rote exercise, Opus doesn't need a quiz" | **DON'T** |
| E9 | Component-internal multi-coherence statement (~3 lines in brief) | 15 (1/9) | LOW (world-description framing) | MEDIUM -- "builders already know what labels look like" | **DEFER TO TEST** |
| E10 | Parametric echo CSS recipe for components (~6 lines in brief) | 15, 02 (2/9) | NONE (recipe formatting) | LOW -- "recipe, not theory" | **DEFER TO TEST** |
| E11 | New gates (SC-17 scale coverage, SC-18 restraint) | 02 (1/9) | HIGH (Report 08 already exceeds own gate ceiling) | HIGH -- "more gates != better; middle had fewer gates, scored higher" | **DON'T** |
| E12 | New PA questions (PA-68 stack integration) | 02 (1/9) | MEDIUM (PA deployment already at 9 auditors) | HIGH -- "overkill before baseline exists" | **DON'T** |
| E13 | Character scale budget cap (5% of CSS) | 16 (1/9) | MEDIUM (new constraint type, untested) | HIGH -- "SC-14 already prevents the failure; cap is redundant" | **DON'T** |
| E14 | Character scale register inventory (~8 lines in brief) | 16 (1/9) | LOW (documentation, not constraint) | MEDIUM -- "tokens.css already defines these" | **DEFER TO TEST** |
| E15 | Weaver compositional vocabulary enrichment (~8 lines in SKILL.md) | 06, 17 (2/9) | LOW (changes weaver prompt, not builder-facing) | MEDIUM -- "weaver doesn't write CSS, vocabulary doesn't help" | **DEFER TO TEST** |
| E16 | Fix cycle recipe structure (~10 lines in SKILL.md) | 17 (1/9) | LOW (changes fix template format, not content) | LOW -- "addresses return-path extinction, the strongest finding" | **DEFER TO TEST** |

### Summary by Verdict

**DO NOW (apply before first test):** E2, E3, E4
- Total: ~19 lines across 2 files (conventions-brief.md + SKILL.md)
- Regression risk: NONE across all three
- Rationale: E2 and E4 are pure recipe/consolidation with zero new concepts. E3 fixes a CONTRADICTION that could actively harm the first test.

**DEFER TO TEST (pre-register, apply if PA-05 2.5-3.0):** E1, E5, E6, E9, E10, E14, E15, E16
- Total: ~50 lines across 2-3 files
- Regression risk: LOW across all eight
- Rationale: These are the enrichments the research team is MOST confident would help, but the contrarian's rebuttal is valid -- they solve unobserved problems. Pre-registering means committing to specific edits BEFORE seeing results, so the enrichment is not post-hoc rationalization.

**DON'T (reject):** E7, E8, E11, E12, E13
- Rationale: These add new documents, new gates, new PA questions, or new constraints. Each violates the empirical finding that less text produces better output. Several violate Report 07's own risk matrix (HIGH regression risk).

---

## 5. USER'S QUESTIONS ANSWERED

### Q1: Can the full CI stack be applied at greater granularity?

**Yes, but it should not be.**

Report 01 mapped the full CI stack across all 4 pipeline files. The stack IS present in the conventions brief at high granularity (all 6 channels named with CSS properties, all 5 scales with build order and thresholds, all 4 semantic directions defined, the anti-scale formula with three factors). The granularity is already high.

What is missing is not granularity but PROPAGATION. The CI stack lives richly in the brief but degrades through every subsequent stage (Report 17 traced this exhaustively). Gates measure properties without naming channels. PA questions use perceptual language without compositional vocabulary. The weaver reduces everything to binary MET/FAILED. Fix cycles route symptoms, not architectural feedback.

Greater granularity in the brief would make it longer without improving propagation. Greater granularity in gates would increase gate count (Report 08 already exceeds its own ceiling of 22-25 gates). Greater granularity in PA would require CI vocabulary from fresh-eyes auditors, defeating the fresh-eyes principle.

The correct intervention is not greater granularity but better PROPAGATION -- specifically, ensuring that fix cycle instructions carry compositional context (E16), not just mechanical symptoms.

### Q2: Would it improve visual quality?

**Unknown. The pipeline has never been tested.**

The contrarian's strongest argument: every prediction about visual quality improvement is speculation until the pipeline runs once. The empirical evidence shows:
- 963 lines of rich CI specification = PA-05 1.5/4
- 100 lines of recipe with zero CI vocabulary = PA-05 4/4
- 403 lines of world-description + 408 lines of orchestration = UNKNOWN

If the pipeline already produces PA-05 >= 3.0 (the DESIGNED threshold), enrichment is unnecessary. The CI stack is already embedded in the brief's world-description (Report 04 confirmed: 51% world-description containing the full CI model). Opus builders internalize world-descriptions without needing explicit CI vocabulary (Argument 8 from the contrarian).

If the pipeline produces PA-05 < 2.5, the problem is not CI vocabulary -- it is architectural (wrong files routed, wrong model, wrong build order). The flagship failure was not caused by missing CI vocabulary; it was caused by a 7.9:1 guardrail-to-playbook ratio. The `/build-page` pipeline already fixes that ratio (the brief is 1.6:1 world-description to constraint).

Only in the 2.5-3.0 band would targeted enrichment plausibly improve visual quality.

### Q3: Where should each concept be propagated?

Report 02 designed a full placement map. The summary:

| Concept | Brief (Builder) | SKILL.md (Orchestrator) | Gate-Runner (Verifier) | PA (Auditor) |
|---------|----------------|------------------------|----------------------|--------------|
| Stack Progression | 5-line bridge between Sections 2-3 | No change | No change (gate dependency chain already encodes it) | No change |
| 6 Channels | Already FULL (Section 4) | Already PARTIAL (spawn checkpoints) | Already FULL (SC-13) | Already correct (perceptual, unnamed) |
| 5 Scales | Already FULL (Section 5) | No change needed | DG-1 already validates plan | PA-63 already checks Component-Page |
| Multi-Coherence | Already FULL (Section 4) | No change needed | SC-13 + SC-13B already measure | PA-61 + PA-62 already check |
| 4 Directions | Already present (Section 4, lines 107-114) | ABSENT (acceptable -- orchestrator doesn't build) | SC-13B advisory (acceptable) | ABSENT (acceptable -- auditors use perceptual language) |
| Anti-Scale Formula | Already FULL (Section 3) | ABSENT (acceptable) | ABSENT as model (factors measured individually) | PA-64/60/66 cover 3 factors |
| Perception Thresholds | Already FULL (Sections 2 + 9B) | Already PARTIAL (spawn checkpoints) | Already FULL (6 gates, 293 lines) | Implicit (thresholds designed from PA data) |

**The propagation gaps that matter** (E16 and E15) are in the RETURN PATH: fix cycle instructions should carry compositional context, and the weaver should use compositional vocabulary when synthesizing. These affect the builder's SECOND pass, which is currently architecturally dumber than the first pass.

### Q4: Would it repeat the 963-line failure?

**Not if the enrichment follows the "DO NOW" package (19 lines, zero new concepts). Possibly if the full "DEFER" package is applied without testing.**

Report 07's risk matrix is the definitive answer. The 963-line failure had specific failure modes:

| Failure Mode | "DO NOW" Package Risk | Full "DEFER" Package Risk |
|-------------|----------------------|--------------------------|
| Complexity ratchet (rules accumulate) | NONE (no new rules) | LOW (50 lines net, cap at 450) |
| Guardrail factory (7.9:1 ratio) | NONE (recipe + consolidation) | LOW (all enrichments are recipe/world-description) |
| Checklist trap (verify/fail language) | NONE (recipe format) | LOW (world-description voice maintained) |
| 660:1 meta ratio | Already 400:1 for THIS RESEARCH | Same (the research cost is already paid) |
| 50:1 compression loss | NONE (thresholds already compressed) | MEDIUM (abstract concepts compress catastrophically -- E1 and E9 add abstract concepts) |
| Binary compliance != quality | NONE (no new binary rules) | LOW (naming patterns, not new thresholds) |
| CSS budget misallocation | NONE (recipe prevents it) | LOW (parametric echo recipe E10 specifies concrete values) |

**The safeguard:** Report 07's mitigation checklist (10 items, Appendix) should be applied to every edit before merging. The most important check: "line budget -- wc -l conventions-brief.md <= 450 lines."

---

## 6. CONCRETE NEXT STEPS

### Step 1: Apply the "DO NOW" package (~30 minutes)

Three edits, 19 lines total, zero regression risk:

**Edit A: Boundary-by-boundary recipe example (E2)**
- File: `design-system/pipeline/conventions-brief.md`
- Location: Section 11 (Process), after "BOUNDARY BY BOUNDARY" instruction (~line 386)
- Content: 8-line CSS example showing all channels set together at one boundary
- Effect: The most important building instruction gets a concrete CSS example

**Edit B: Checkpoint contradiction fix (E3)**
- File: `~/.claude/skills/build-page/SKILL.md`
- Location: Builder spawn prompt, lines 61-66
- Change: Restructure 4 channel-grouped checkpoints into 3 boundary-grouped checkpoints
- Effect: Spawn prompt no longer contradicts the brief's "boundary by boundary" instruction

**Edit C: Perception threshold consolidation (E4)**
- File: `design-system/pipeline/conventions-brief.md`
- Location: Section 4 (Multi-Coherence), after channel list (~line 102)
- Content: 6-line table mapping each channel to its perception threshold
- Effect: Builder has a single reference for "what counts as a shift in channel X?"

### Step 2: Run `/build-page` once with no other changes (~2 hours)

- Content: RESEARCH-SYNTHESIS (the previously selected content)
- Builder: Opus (as specified in SKILL.md)
- Gates: Full 21-gate suite
- PA: Mode 4 (9 independent auditors, 48 questions)
- Record: PA-05 score, Tier 5 score, gate results, top-5 PA issues

### Step 3: Decision based on result

**IF PA-05 >= 3.0 (DESIGNED):** STOP. The pipeline works. No further enrichment. Celebrate. The entire 7,200-line research corpus was insurance against a failure that did not occur.

**IF PA-05 2.5-3.0:** Apply the pre-registered "DEFER" package:

| Edit | File | Lines | Content |
|------|------|-------|---------|
| E1 | conventions-brief.md | +5 | Stack relationship bridge between Sections 2-3 |
| E5 | conventions-brief.md | +4 | DESIGNED/COMPOSED naming for 2-3 more dimensions |
| E6 | conventions-brief.md | +3 (mod) | CSS property completion for channels 4-6 |
| E9 | conventions-brief.md | +3 | Component-internal multi-coherence statement |
| E10 | conventions-brief.md | +6 | Parametric echo CSS recipe for components |
| E14 | conventions-brief.md | +8 | Character scale register inventory |
| E15 | SKILL.md | +8 | Weaver compositional vocabulary |
| E16 | SKILL.md | +10 | Fix cycle recipe structure |
| **Total** | 2 files | **+47 lines** | |

Post-enrichment brief: ~450 lines (at the hard cap).
Post-enrichment SKILL.md: ~418 lines (well within limits).

Re-run `/build-page` with the same content. Compare PA-05.

**IF PA-05 < 2.5:** Do NOT apply enrichment. Instead:
1. Check: Is the builder reading the conventions brief? (Look at build log for evidence of absorption.)
2. Check: Are gates running in the correct dependency order?
3. Check: Is the builder model actually Opus?
4. Check: Is the brief's world-description voice surviving to the builder, or is it being overridden by spawn prompt checklist language?
5. If all checks pass and PA-05 is still < 2.5, the problem is deeper than text -- investigate file routing, context window limits, or model capability.

### Step 4: What NOT to do

1. **Do NOT add new gates.** Report 08 proposed 6 new gates but acknowledged exceeding its own 22-25 gate ceiling. The middle-tier experiment had fewer gates and scored higher. More verification does not produce more quality.

2. **Do NOT add new PA questions.** The current 48-question + 8-Tier-5-question suite is comprehensive. Adding questions increases auditor load and PA contention without empirical evidence of a detection gap.

3. **Do NOT add compositional fluency concepts to the brief.** Report 07 rated this enrichment type as having 6 HIGH regression risks out of 10 failure modes. "Parametric echo," "density arc," and "compositional memory" are exactly the kind of abstract vocabulary that produced the 963-line master prompt. The brief should describe what the WORLD looks like, not what the THEORY says.

4. **Do NOT restructure the brief.** The current section order (Identity -> Perception -> Richness -> Multi-Coherence -> Fractal Echo -> Metaphor -> Transitions -> CSS Vocabulary -> Creative Authority -> Quality Floor) is telescope-first and working. Restructuring to bottom-up would change the brief's character without evidence of benefit.

5. **Do NOT produce more research before testing.** This team has produced 7,200 lines of analysis for ~19-67 lines of edits. The meta-to-output ratio is 400:1, violating Gate 6 by 40x. The pipeline does not need more intelligence. It needs to be turned on.

---

## APPENDIX A: Pre-Registered Enrichment Package (Exact Edits)

### "DO NOW" Edits (Apply Before Test)

#### Edit A: Boundary-by-boundary recipe (conventions-brief.md, ~line 386)

```
At each zone boundary, set ALL shifting channels together in one CSS block:
  /* Boundary Z1->Z2: DEEPENING */
  .zone-2 {
    background: #F0EBE3;     /* Chromatic: 18 RGB darker */
    padding: 48px 64px;      /* Spatial: compressed from 64px */
    border-left: 3px solid;  /* Structural: border appears */
    font-size: 16px;         /* Typographic: reduced from 18px */
  }
Do NOT set all backgrounds first, then all borders, then all typography.
That produces flat output. Set everything at each boundary.
```

#### Edit B: Checkpoint restructuring (SKILL.md, lines 61-66)

Replace:
```
Self-check at 4 checkpoints:
1. After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 8 component classes?
2. After zone backgrounds: All adjacent zone bg deltas >= 15 RGB?
3. After borders: >= 1 structural border-left (3px+)? >= 2 distinct border weights?
4. After typography: heading-to-meta ratio >= 3:1? Adjacent zone font-size delta >= 2px?
```

With:
```
Self-check at 3 checkpoints:
1. After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 8 component classes?
2. After zone boundaries set (all channels together per boundary):
   - All adjacent zone bg deltas >= 15 RGB?
   - >= 1 structural border-left (3px+)? >= 2 distinct border weights?
   - >= 3 channels shift in same semantic direction at each boundary?
3. After full build: heading-to-meta ratio >= 3:1? Font-size delta >= 2px?
   5-question self-check complete? Final scroll review?
```

#### Edit C: Channel-threshold reference table (conventions-brief.md, after ~line 102)

```
| Channel | Primary CSS | Perception Floor |
|---------|------------|-----------------|
| Chromatic | background-color | >= 15 RGB delta |
| Typographic | font-size, font-weight, letter-spacing | >= 2px font-size OR >= 100 weight |
| Spatial | padding, margin | >= 24px delta |
| Structural | border-left-width, hr, dividers | config change (appear/weight/style) |
| Behavioral | transition, :hover | presence change |
| Material | surface texture, component density | presence change |
```

### "DEFER" Edits (Apply If PA-05 2.5-3.0)

Exact text for each of E1, E5, E6, E9, E10, E14, E15, E16 is specified in the individual reports (04, 15, 06, 16, 17). Total: ~47 lines across 2 files. Each edit has been validated against Report 07's mitigation checklist:
- Line budget: 403 + 47 = 450 (at cap)
- Guardrail ratio: zero new constraints (all are world-description or recipe)
- Voice preservation: all drafted in the brief's atmospheric voice
- CSS anchor: every concept includes >= 1 CSS property-value pair
- Net deletion: not required for DEFER package (still within 450 cap)

---

## APPENDIX B: The Meta-Lesson

This research team produced ~7,200 lines of analysis to recommend ~19 lines of immediate edits and ~47 lines of conditional edits. The meta-to-output ratio is 109:1 (immediate) or 400:1 (including pre-registered).

The contrarian was right: the team demonstrated the exact failure mode it was tasked to prevent. The 963-line master prompt buried actionable CSS in analytical text. This team buried actionable edits in analytical reports.

But the analysis was not wasted. It produced:
1. **Certainty about what NOT to do** -- which is worth more than guessing about what to do
2. **A pre-registered enrichment package** -- preventing post-hoc rationalization after seeing test results
3. **A decision tree** -- so the test result produces action, not another research cycle
4. **Report 07's risk matrix** -- the definitive tool for evaluating any future enrichment proposal
5. **Report 17's compression map** -- the definitive diagnostic of where concepts survive and die in the pipeline

The correct next action is not more analysis. It is: apply 19 lines, run the pipeline, and let the result speak.

---

*End of master synthesis. 11-master-synthesis.md complete.*
