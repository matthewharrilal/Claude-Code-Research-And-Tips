# Verification Report: Sections 6-7 (Build Flow + Experiments)

**Verifier:** Agent 4 (Opus 4.6)
**Date:** 2026-02-19
**Sources cross-referenced:**
- Guide: `PIPELINE-V2-IMPLEMENTATION-GUIDE.html`, lines 891-1095 (Sections 6-7)
- Report 94: `ephemeral/compositional-intelligence/94-maximum-efficacy-architecture.md` (Fat Core spec)
- Report 32: `ephemeral/compositional-intelligence/32-master-synthesis.md` (Master Synthesis)
- PV2 Diagram: `design-system/pipeline/PV2-PIPELINE-DIAGRAM.md` (canonical architecture)
- Q20 Protocol: `ephemeral/pipeline-analysis/_meta-cognitive/q20-experiment-protocol.md`

---

## SECTION 6: THE BUILD FLOW

### 6.1 Flow Steps vs Fat Core Spec (Report 94)

| Flow Step (Guide) | Fat Core Spec (Report 94) | MATCH? |
|---|---|---|
| Orchestrator reads content, assembles input | Orchestrator reads content, spawns core with right files (Section 2.4) | YES |
| Core agent: Phase A (read content, discover tensions, 10-20 min) | Phase A: UNDERSTAND (10-20 min) -- read content, determine zones, arc, semantic direction, metaphor | YES |
| Core agent: Phase B (derive metaphor, plan layout, 10-20 min) | Phase B: PLAN (10-20 min) -- per-zone bg color, typography, mechanisms, transitions | YES |
| G1 after Phase B: structure checks | G1 after Phase B + Phase C start (skeleton): zone count, ARIA, skip link, component classes | MINOR DISCREPANCY -- see below |
| Core agent: Phase C (HTML skeleton + CSS, 60-120 min) | Phase C: BUILD (60-120 min) -- HTML skeleton, soul CSS, backgrounds, borders, typography, richness, accessibility | YES |
| G2 after Phase C: styling checks | G2 after Phase C (backgrounds + soul + typography + borders): bg delta, palette, container, font-size zones, border presence, soul | YES |
| Phase D: Refinement + cascade table (10-15 min) | Phase D: PROVE (10-15 min) -- cascade value table, verify channels, verify thresholds | YES |
| G3: ALL 15 gates | G3: ALL checks + stacked gap + multi-coherence + accessibility + cascade table | PARTIAL MATCH -- see below |
| Screenshot capture (orchestrator, 1440px + 768px) | Pre-captures screenshots (mechanical, one Playwright session) | YES |
| 9 PA auditors parallel, 5-6 questions each | 9 fresh-eyes Opus auditors, assigned subset of 48 PA questions | YES |
| Weaver synthesizes verdict | PA weaver synthesizes 9 reports | YES |
| Fix cycle: same core agent, max 3 rounds | If PA-05 < 3/4: routes fixes to SAME core agent; 3 fix cycles max | YES |
| Output: output.html + _pa-report.md + _build-log.md | OUTPUT: HTML + PA report + build log | YES |

**DISCREPANCY 1 (MINOR): G1 placement.**
- Guide says G1 fires "after Phase B" with "structure checks."
- Report 94, Section 2.6 says G1 fires "After Phase B (plan) + Phase C start (skeleton)" and checks "Zone count, ARIA, skip link, component classes."
- The guide's flow diagram shows G1 between Phase B and Phase C, which implies the skeleton hasn't been written yet. But structure checks (ARIA, skip link, component classes) require HTML to exist.
- Report 94's description says G1 fires after the skeleton is started, which is more logical.
- **Severity: MINOR.** The guide's ASCII diagram slightly misplaces G1 temporally. The flow text says "structure checks" which is correct in nature. But the diagram positioning implies G1 runs before any HTML is written, which contradicts what structure checks actually verify.

**DISCREPANCY 2 (MINOR): G3 gate count.**
- Guide says G3 runs "ALL 15 gates."
- Report 94, Section 2.6 explicitly states "3 gates, not 5" and the table shows G1, G2, G3 as the three phase-locked gates.
- The PV2 Diagram (Section WAVE 2) shows 15 programmatic gates (SC-01 through SC-15) as post-build verification.
- **Resolution:** The guide is CORRECT to say G3 runs all 15 gates at the comprehensive check. Report 94's 3-gate model (G1, G2, G3) describes WHEN gates fire; the 15 individual checks (SC-01 through SC-15) are what G3 runs comprehensively. The guide merges both models accurately: 3 gate TIMING points, with G3 running all 15 checks.

### 6.2 Gate Timing

| Gate | Guide Timing | Report 94 Timing | PV2 Diagram | MATCH? |
|---|---|---|---|---|
| G1 | After Phase B | After Phase B + Phase C start | Wave 0.9 (handoff gate, 8 checks) | PARTIAL -- see above |
| G2 | After Phase C (HTML + CSS) | After backgrounds + soul + typography + borders | Inter-phase micro-gates MG-1 through MG-4 | YES (combines micro-gates into single G2) |
| G3 | After Phase D | After Phase D (comprehensive) | Wave 2 Layer 1 (15 gates) | YES |

### 6.3 PA Deployment

| Aspect | Guide | Report 94 | Report 32 | MATCH? |
|---|---|---|---|---|
| Auditor count | 9 | 9 (Section 2.5) | 9 (Wave 2) | YES |
| Model | Opus | Fresh-eyes Opus (Section 2.5) | Sonnet (Report 32 Wave 2 says "9 PA auditors (Sonnet)") | DISCREPANCY |
| Questions per auditor | 5-6 each | "assigned subset of 48 PA questions" | Not specified | YES (48/9 ~ 5.3) |
| Total questions | 48 (implied: 9 x 5-6) | 48 | Not specified | YES |
| Context | ZERO context about content/plan/build | Zero build context (Section 2.5) | "pre-captured screenshots" | YES |
| Screenshot pre-capture | Yes, by orchestrator | Yes, mechanical (Section 2.2) | Yes, team lead | YES |

**DISCREPANCY 3 (SIGNIFICANT): PA auditor model.**
- Guide: "9 fresh-eyes Opus agents"
- Report 94: "9 fresh-eyes Opus auditors" (Section 2.5)
- Report 32: "9 PA auditors (Sonnet)" (Wave 2 description, line 48)
- **Assessment:** Report 94 and the guide agree on Opus. Report 32 says Sonnet. This is a genuine contradiction between source reports. The guide follows Report 94 (the Fat Core architecture spec), which is the more detailed and authoritative source for this specific architecture. Report 32 may have specified Sonnet for cost reasons. The choice has implications: Opus PA auditors are more expensive but potentially more perceptive.
- **Severity: SIGNIFICANT** for cost estimates but not for architectural accuracy.

### 6.4 Weaver Role

| Aspect | Guide | Report 94 | MATCH? |
|---|---|---|---|
| Agent count | 1 | 1 (Section 2.5) | YES |
| Function | "Synthesizes verdict: SHIP / SHIP WITH FIXES / DO NOT SHIP" | "synthesizes 9 reports into PA-05 score + top-3 issues" | YES (guide adds verdicts) |
| Convergence method | Not specified | "Convergence-based findings (7/9 agree = real, 2/9 agree = noise)" | MINOR GAP -- guide omits convergence detail |

### 6.5 Fix Cycle

| Aspect | Guide | Report 94 | PV2 Diagram | MATCH? |
|---|---|---|---|---|
| Same core agent | YES | YES (Section 6: "fix-cycle builder IS the core agent") | SAME agent recommended | YES |
| Max rounds | 3 | 3 (Section 2.4: "3 fix cycles exhausted") | 3 cycles (Wave 3) | YES |
| Compositional memory preserved | YES | YES (Section 6: full compositional memory) | Not explicitly stated | YES |
| Re-check method | Not specified in flow | Not specified (full 9-PA or 2-PA?) | "2-PA check (not full 9)" for fix cycles | GAP |

**DISCREPANCY 4 (MINOR): Fix cycle re-check method.**
- The PV2 Diagram (Wave 3) specifies "2-PA check (not full 9)" for fix cycle verification.
- Report 94 mentions "If PA-05 < 3/4 or 3 fix cycles exhausted" but doesn't specify 2-PA vs 9-PA.
- The guide doesn't specify the re-check method.
- **Severity: MINOR.** This is an implementation detail that could go either way in the Fat Core architecture.

### 6.6 Timing Breakdown

| Stage | Guide Time | Report 94 Time | MATCH? |
|---|---|---|---|
| Phase A | 0:01-0:20 (19 min) | 10-20 min | YES |
| Phase B | 0:20-0:40 (20 min) | 10-20 min | YES |
| G1 | 0:40-0:50 | Not timed separately | PLAUSIBLE |
| Phase C | 0:50-2:00 (70 min) | 60-120 min | YES |
| G2 | 1:30 | Between Phase C sub-stages | YES |
| Phase D + G3 | 2:00-2:05 | 10-15 min | YES |
| PA | 2:10-2:30 (20 min) | 30-45 min PA processing | DISCREPANCY |
| Total | 150-180 min | 150-180 min | YES |

**DISCREPANCY 5 (MINOR): PA timing.**
- Guide shows PA taking ~20 min (2:10 to 2:30).
- Report 94 Section 6 says "one Opus agent held alive for ~30-45 min of PA processing."
- The guide's timing is slightly optimistic but within plausible range for 9 parallel auditors.
- **Severity: MINOR.** The total stays at 150-180 min either way.

### 6.7 Boundary Crossings

| # | Guide | Report 94 (Appendix A) | MATCH? |
|---|---|---|---|
| B1 | Content -> Core agent (LOW) | Content -> Core agent (LOW, CONSTRUCTIVE) | YES |
| B2 | Core plan -> Core build (ZERO) | Core internal plan -> build (ZERO, INTERNAL) | YES |
| B3 | Core output -> Gate runner (ZERO) | Core output -> Gate runner (ZERO, MEASUREMENT) | YES |
| B4 | Core output -> Screenshots (TOTAL, intentional) | Core output -> Screenshots (TOTAL, NECESSARY) | YES |
| B5 | 9 PA reports -> Weaver (LOW) | 9 PA reports -> Weaver (LOW, CONSTRUCTIVE) | YES |
| B6 | PA report -> Core fixes (LOW) | PA report -> Core agent fix (LOW, CONSTRUCTIVE) | YES |
| B7 | Fix cycle -> Final output (ZERO) | Fix cycle -> Final output (ZERO, REVISION) | YES |
| Total | 7 | 7 | YES |
| Destructive count | Not stated (implied 0) | 0 destructive | YES |

The guide correctly notes: "The Flagship's critical Boundary 3 (TC planner -> builder, 65% intelligence loss) is eliminated."
Report 94: "Eliminated boundaries: B3 (TC output -> build plan, ELIMINATED: core agent plans AND builds)."
**EXACT MATCH.**

---

## SECTION 7: THE EXPERIMENTS

### 7.1 Experiment A vs Report 32

| Aspect | Guide | Report 32 (Decision 4) | MATCH? |
|---|---|---|---|
| Name | "The $5 Test" | "The $5 Experiment" | YES |
| Input | RESEARCH-SYNTHESIS.md + conventions brief + tokens.css + prohibitions | Same content as Flagship (RESEARCH-SYNTHESIS). Conventions brief (~100 lines) + tokens.css + prohibitions. | YES |
| Agent count | 1 Opus agent | Single Opus agent | YES |
| Pipeline | No pipeline, no orchestrator, no gates | No pipeline. No orchestrator. No verification shell. | YES |
| Cost | ~$5-10 | ~$5-10 in API | YES |
| Time | ~2 hours | ~30 minutes wall clock (build) + PA time | DISCREPANCY |
| Decision gate: >= 3.0 | Pipeline is UNNECESSARY | Pipeline v2 is JUST the conventions brief | YES |
| Decision gate: 2.0-2.9 | Good. Proceed to Experiment B. | Proceed to Experiment B (Fat Core) | YES |
| Decision gate: < 2.0 | Something wrong with brief. Investigate. | Investigate; something is wrong with conventions brief. | YES |

**DISCREPANCY 6 (MINOR): Experiment A time estimate.**
- Guide says "~2 hours."
- Report 32 says "~30 minutes wall clock" for the build itself, though PA adds ~1 hour.
- The guide's "~2 hours" likely includes PA evaluation, which is reasonable.
- **Severity: MINOR.** Both are plausible depending on whether you count PA time.

### 7.2 Experiment B vs Report 32

| Aspect | Guide | Report 32 | MATCH? |
|---|---|---|---|
| Name | "Fat Core Full Test" | "Fat Core" | YES |
| Architecture | Full 12-agent: orchestrator + core + 3 gates + 9 PA + weaver + fix cycle | Same content. Full Fat Core architecture (12 agents). Orchestrator + Core Agent + 9 PA + Weaver. | YES |
| Cost | ~$20-60 | ~$30-50 in API | OVERLAPPING RANGES |
| Time | ~4 hours | ~90 minutes build + 1.5 hours PA | YES (total ~3-4 hours) |
| Condition | Runs only if Experiment A < 3.0 | "SECOND, if needed" / "if A < 3.0" | YES |
| Decision gate: improvement >= 0.5 | Fat Core is the architecture. BUILD IT. | Shell adds value | YES |
| Decision gate: improvement < 0.5 | Shell is overhead. Simplify. | Shell is overhead; simplify to single agent + PA | YES |

### 7.3 Experiment C vs Report 32

| Aspect | Guide | Report 32 | MATCH? |
|---|---|---|---|
| Name | "Recipe Comparison (Optional)" | "Recipe Comparison (THIRD, only if needed)" | YES |
| Input | Same Fat Core + 650-line recipe | Same content. Fat Core + full 650-line recipe | YES |
| Cost | ~$40-80 (guide, Section 8 Step estimate) | ~$30-50 | SLIGHT DISCREPANCY |
| Decision gate: Recipe < Conventions | Recipe ceiling confirmed | Recipe ceiling confirmed | YES |
| Decision gate: Recipe >= Conventions | Hypothesis rejected | Ceiling hypothesis rejected; investigate | YES |

### 7.4 Experiment Success Criteria vs Report 32

| Criterion | Guide | Report 32 | MATCH? |
|---|---|---|---|
| Content | RESEARCH-SYNTHESIS.md (~384 lines) | RESEARCH-SYNTHESIS (same as Flagship) | YES |
| Builder model | claude-opus-4-6 | Not specified per experiment (implied Opus) | YES |
| PA evaluation | Mode 4, 9 blind Opus auditors, 1440px + 768px | Mode 4 PA: 9 independent Opus auditors, blind scoring | YES |
| PA-05 target | >= 3.0/4 | >= 3.0/4 (COMPOSED or DESIGNED) | YES |
| Soul | Not listed in Shared Protocol | 0 violations (absolute requirement) | MINOR GAP |
| Container | Not listed in Shared Protocol | 940-960px (absolute requirement) | MINOR GAP |
| Mechanisms | Not listed in Shared Protocol | >= 8 distinct, across >= 4 categories | MINOR GAP |

**DISCREPANCY 7 (MINOR): Missing success criteria in guide.**
- Report 32 lists 8 specific success criteria (PA-05, soul, container, mechanisms, multi-coherence, accessibility, perception thresholds).
- Guide lists only 4 in the "Shared Protocol" box (content, builder model, PA evaluation, success threshold).
- The missing criteria (soul, container, mechanisms, multi-coherence) are covered elsewhere in the guide (Sections 2, 5) but not repeated in the experiment protocol.
- **Severity: MINOR.** The criteria exist in the guide, just not co-located with the experiments.

### 7.5 Decision Tree Logic

The guide's ASCII decision tree follows this logic:
```
Exp A >= 3.0 --> Pipeline unnecessary (STOP)
Exp A 2.0-2.9 --> Proceed to Exp B
Exp A < 2.0 --> Investigate
Exp B >= 3.0 AND improvement >= 0.5 --> Fat Core wins
Exp B improvement < 0.5 --> Shell overhead
Exp C: Recipe < Conventions --> Ceiling confirmed
Exp C: Recipe >= Conventions --> Hypothesis rejected
```

Report 32 decision tree:
```
A >= 3.0 --> STOP. conventions brief = the pipeline
A < 3.0, B >= 3.0 --> Fat Core is the architecture
A < 3.0, B < 3.0 --> Investigation missed something fundamental
C: Recipe < Brief --> ceiling confirmed
C: Recipe >= Brief --> ceiling rejected
```

PV2 Diagram decision tree:
```
E >= 3/4 --> Pipeline unnecessary
D >= 3/4 --> Fat Core wins
B > A --> Recipe adds value
C >= B --> Recipe unnecessary
All < 3/4 --> Investigation missed something fundamental
```

**DISCREPANCY 8 (SIGNIFICANT): Experiment naming/numbering inconsistency.**
- The guide uses A/B/C matching Report 32.
- The PV2 Diagram uses E/D/A/B/C (5 experiments, different ordering).
- The PV2 Diagram has 5 experiments (E is single Opus no pipeline, D is Fat Core, A is minimal prompt, B is full recipe, C is principles + gates).
- Report 32 has 3 experiments (A = $5 test, B = Fat Core, C = recipe comparison).
- The guide follows Report 32's 3-experiment model.
- **Assessment:** The PV2 Diagram represents an EARLIER iteration with 5 experiments. Report 32 (the MASTER SYNTHESIS) condensed this to 3. The guide correctly follows the more recent Report 32 synthesis.
- **Severity: SIGNIFICANT** only if a reader tries to cross-reference the PV2 Diagram directly. The guide and Report 32 are internally consistent.

### 7.6 Cost Estimates Plausibility

| Experiment | Guide Cost | Report 32 Cost | Report 94 Cost | Plausible? |
|---|---|---|---|---|
| A | ~$5-10 | ~$5-10 | Not specified | YES |
| B | ~$20-60 | ~$30-50 | ~$15-40 (Fat Core) | YES (ranges overlap) |
| C | Not stated in S7 | ~$30-50 | Not specified | N/A |

Report 94 provides detailed cost breakdown (Section 7): TC 1hr, Builder 2hr, PA 0.5hr x9 + weaver 0.5hr = ~6-8 Opus agent-hours for Fat Core. At typical API rates, $20-60 is reasonable for 6-8 hours of Opus compute.

### 7.7 Q20 Experiment

The Q20 experiment (thresholds-only test from `q20-experiment-protocol.md`) is **NOT referenced in Sections 6-7** of the guide. This is a separate experiment concept from the pipeline-analysis corpus that tests whether adding ONLY perception thresholds to the unchanged master prompt would improve results.

The guide's experiments (A/B/C) test the FAT CORE architecture, which is a different question from Q20's isolation of the perception threshold variable.

**Assessment:** The guide correctly does NOT conflate these. Q20 tests "did thresholds cause the remediation improvement?" while Experiments A/B/C test "does the Fat Core architecture work?" These are independent experimental questions.

---

## SUMMARY

### Accuracy Scores

| Aspect | Score | Notes |
|---|---|---|
| Build flow steps | 9/10 | G1 timing slightly ambiguous |
| Gate timing (G1/G2/G3) | 8/10 | G1 placement discrepancy, G3 scope correct |
| PA deployment | 9/10 | Model discrepancy (Opus in guide vs Sonnet in Report 32) |
| Weaver role | 9/10 | Missing convergence method detail |
| Fix cycle | 9/10 | Missing 2-PA vs 9-PA re-check detail |
| Boundary crossings | 10/10 | Exact match with Report 94 |
| Experiment A/B/C descriptions | 9/10 | Minor time estimate differences |
| Decision tree logic | 9/10 | Correct and consistent with Report 32 |
| Cost estimates | 9/10 | Plausible, ranges overlap with sources |
| Q20 experiment | N/A | Correctly not included in these sections |

### Issues Found

| # | Severity | Description | Location |
|---|---|---|---|
| 1 | MINOR | G1 gate fires "after Phase B" in guide but Report 94 says "after Phase B + Phase C start (skeleton)" -- structure checks need HTML to exist | Guide line 909-911 |
| 2 | SIGNIFICANT | PA auditor model: Guide says Opus, Report 32 says Sonnet. Affects cost. Guide follows Report 94 (Opus). | Guide line 931 |
| 3 | MINOR | Weaver convergence method (7/9 = real, 2/9 = noise) not mentioned in guide | Guide line 936-938 |
| 4 | MINOR | Fix cycle re-check (2-PA or full 9-PA?) unspecified. PV2 Diagram says 2-PA. | Guide line 940-943 |
| 5 | MINOR | PA timing shows ~20 min in guide; Report 94 says 30-45 min. Total timing still valid. | Guide line 966-968 |
| 6 | MINOR | Experiment A time: guide says ~2 hours; Report 32 says ~30 min build. Likely includes PA. | Guide line 1044 |
| 7 | MINOR | Missing success criteria in experiment protocol (soul, container, mechanisms) -- covered elsewhere in guide | Guide lines 1082-1087 |
| 8 | SIGNIFICANT | PV2 Diagram has 5 experiments (E/D/A/B/C) vs guide's 3 (A/B/C from Report 32). Guide correctly follows newer Report 32 synthesis. | Section 7 vs PV2 Diagram |

### Overall Verdict

**ACCURATE WITH MINOR GAPS.** Sections 6-7 faithfully represent the Fat Core architecture from Report 94 and the experiment plan from Report 32. The two SIGNIFICANT issues are: (1) PA auditor model inconsistency between source reports (guide chose a defensible side), and (2) experiment naming mismatch with the PV2 Diagram (guide correctly follows the newer Report 32). Neither is a factual error in the guide -- they are inconsistencies between source documents that the guide had to resolve.

No BLOCKING issues found. The build flow is architecturally correct and matches the Fat Core spec. The experiments are properly sequenced with valid decision gates.
