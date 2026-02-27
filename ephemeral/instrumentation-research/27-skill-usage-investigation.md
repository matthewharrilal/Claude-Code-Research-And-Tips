# Skill Usage Investigation: Are /tension-composition and /perceptual-auditing Actually Used?

**Date:** 2026-02-27
**Scope:** Traced invocation chains across /build-page skill, MANIFEST, 9 pipeline artifacts, 2 build logs

---

## A. INVOCATION MAP

### /tension-composition (1,648 lines)

**Is it invoked by /build-page?** NO.

The /build-page skill (`~/.claude/skills/build-page/SKILL.md`, 110 lines) contains zero references to "tension-composition", "/tension", or the Skill tool. The pipeline MANIFEST (885 items, 17 agents, 4 phases) never mentions invoking it. No build log (yegge-gas-town, molly-panopticon) shows TC skill invocation.

**The pipeline reimplemented TC's job inline:**
- TC Phase 0 (content assessment) -> pipeline Phase 0 (Content Analyst agent using artifact-routing.md)
- TC Phase 1 (multi-axis questioning) -> pipeline Content Analyst's "content tensions" extraction
- TC Phase 2 (tension derivation) -> pipeline Content Analyst's "metaphor-shaping tension" identification
- TC Phase 3 (metaphor collapse) -> pipeline Brief Assembler's Tier 3 "Structural Metaphor" section
- TC Phase 4 (compositional layout) -> pipeline Pass A Builder following recipe dispositions D-01-D-09
- TC Phase 4.5 (TC brief) -> pipeline's entire Brief Assembly phase with BV verification

**One vestigial reference exists:** pa-weaver.md line 163 says COMPOSITIONAL fixes should "Re-invoke tension-composition." This is the ONLY operational reference in all pipeline artifacts. It describes a TYPE C fix cycle that has never been triggered in any recorded build.

### /perceptual-auditing (993 lines)

**Is it invoked by /build-page?** NO.

The /build-page skill contains zero references to "perceptual-auditing" or the Skill tool for PA. The MANIFEST never invokes it. Build logs show PA auditors receiving pa-questions.md + pa-guardrails.md (pipeline artifacts), not the PA skill file.

**Two citation-only references exist:**
- pa-deployment.md line 323: `> Source: perceptual-auditing/SKILL.md, line 46-48` (fresh-eyes principle citation)
- check-consistency.js line 422: reads PA SKILL.md to cross-check question counts

Neither is an invocation. Both treat the skill as a reference document.

---

## B. DUPLICATION ANALYSIS

### /tension-composition vs Pipeline Artifacts

| TC Skill Content | Pipeline Equivalent | Divergence |
|-----------------|---------------------|------------|
| Phase 0: Content type classification (PROSE/MIXED/VISUAL) | artifact-routing.md Phase 0 protocol | IDENTICAL classification scheme |
| Phase 0: Scope assessment (MICRO/SHORT/STANDARD/LONG) | NOT in pipeline | TC-ONLY (pipeline has no scope routing) |
| Phase 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME) | Content Analyst's "content tensions" | DIVERGED -- TC uses formal 4-axis framework; pipeline uses freeform tension identification |
| Phase 2: Addition Test (zero-tension escape) | MANIFEST mode selection (APPLIED/COMPOSED) | DIVERGED -- TC tests for tension presence; pipeline tests for heterogeneity + metaphor viability |
| Phase 3: Metaphor collapse protocol | Brief Assembler Tier 3 "Structural Metaphor" | DIVERGED -- TC has 500+ lines of metaphor derivation; pipeline has ~10 lines in TC brief template |
| Phase 4: Compositional layout | Builder recipe D-01-D-09 | DIVERGED -- TC outputs specific CSS; pipeline outputs recipe instructions |
| Phase 4.5: Sub-skill output mode | NOT used | TC designed for this; pipeline never calls it |
| Universal requirements (container, per-category minimums) | MANIFEST non-negotiables, gate-runner checks | DUPLICATED -- same constraints stated differently |
| Library access prohibition | NOT in pipeline | TC-ONLY (pipeline has no equivalent restriction) |
| Discovery bias warning | NOT in pipeline | TC-ONLY (valuable metacognitive frame absent from pipeline) |

### /perceptual-auditing vs Pipeline Artifacts

| PA Skill Content | Pipeline Equivalent | Divergence |
|-----------------|---------------------|------------|
| 28 core questions (PA-01 through PA-28) | pa-questions.md: 69 questions (PA-01 through PA-81) | SUPERSET -- pipeline has 41 more questions |
| PA-05 sub-criteria (4 sub-criteria) | pa-questions.md PA-05 (identical 4 sub-criteria) | IDENTICAL text, pipeline adds PA-05c expanded sub-dimensions |
| Fresh-eyes principle | pa-deployment.md Section 3 | DUPLICATED -- pipeline version is more detailed (adds contamination check, three laws) |
| The One Rule | pa-deployment.md Section 3.1 | DUPLICATED verbatim |
| The Three Laws | pa-deployment.md Section 3.2 | DUPLICATED verbatim |
| Sovereignty principle | pa-guardrails.md | PARTIALLY duplicated |
| Experiential pass protocol | pa-deployment.md Section 0 (89 lines) | SUPERSET -- pipeline version is 4x longer with explicit steps, contamination check, priority override |
| Audit optimization trap warning | NOT in pipeline artifacts | PA-SKILL-ONLY (valuable metacognitive frame) |
| 9-auditor deployment architecture | pa-deployment.md Section 1 | PIPELINE-ONLY (skill has no deployment protocol) |
| PA-05 cross-validation protocol | pa-deployment.md Section 1.3 | PIPELINE-ONLY |
| Screenshot pre-capture pattern | pa-deployment.md Section 2 | PIPELINE-ONLY |
| Mini-PA Mode 2.5 | pa-deployment.md Section 6 | PIPELINE-ONLY |
| Weaver protocol | pa-weaver.md (466 lines) | PIPELINE-ONLY |
| Guardrails (auditor + weaver) | pa-guardrails.md + pa-guardrails-weaver.md | PIPELINE-ONLY |

---

## C. ORPHAN STATUS

### /tension-composition: ORPHANED

The pipeline evolved its own content analysis, metaphor derivation, and brief assembly that completely bypasses TC. The TC skill's sub-skill mode (Phase 4.5) was designed for /build-page integration but was never wired in. The one vestigial reference (pa-weaver.md COMPOSITIONAL fix type) describes a path never taken.

**Evidence:** Zero Skill tool invocations in 2 recorded build runs. Zero references in MANIFEST quickstart steps 0-11. Zero references in SKILL.md execution rules. The Content Analyst + Brief Assembler together perform TC's function using different methodology (freeform tensions vs structured 4-axis questioning).

### /perceptual-auditing: SHADOW

The pipeline uses its own copy of the PA instructions (split across 6 files totaling ~1,600 lines), which is a strict SUPERSET of the skill's content. The pipeline versions have evolved significantly past the skill: 69 questions vs 28, experiential pass protocol expanded 4x, deployment architecture added, Mini-PA mode added, cross-validation added, weaver/guardrails added.

**Evidence:** pa-deployment.md cites `perceptual-auditing/SKILL.md` as a SOURCE but does not invoke it. The skill's question count (claimed "65" per consistency sweep finding A-08, actual 69 in pipeline) is stale. Pipeline artifacts are the operational truth.

---

## D. VERSION DRIFT

### Where Pipeline Has Evolved Past Skills

| Area | Skill State | Pipeline State |
|------|-------------|----------------|
| PA question count | 28 core + claims "65" | 69 defined (PA-01-PA-81, gaps) |
| PA deployment | No deployment protocol | 451 lines: 9 auditors, assignments, screenshot protocol, Mini-PA |
| PA experiential pass | ~20 lines | 89 lines with 4 explicit steps + contamination check |
| PA weaver | Not defined | 466 lines with verdict thresholds, emotional arc, fix classification |
| TC metaphor derivation | 500+ lines formal protocol | ~10 lines in TC brief template + freeform Content Analyst |
| Content routing | TC Phase 0 (4 types) | artifact-routing.md (1,056 lines, 125 items) |
| Mode selection | TC has no mode concept | APPLIED vs COMPOSED with explicit criteria |
| Iteration | Not in either skill | IMPROVE/RETHINK protocol with convergence budget |

### Where Skills Contain Value Pipeline Lacks

| Area | Skill | Pipeline Gap |
|------|-------|-------------|
| Discovery bias warning | TC lines 6-24 | Pipeline has no equivalent metacognitive guard |
| Audit optimization trap | PA lines 5-43 | Pipeline has no equivalent warning |
| 4-axis questioning framework | TC Phases 1-2 (~400 lines) | Pipeline uses freeform tension identification |
| Library access prohibition | TC lines 99-108 | Pipeline has no equivalent restriction |
| Addition Test (zero-tension escape) | TC Phase 2 | Pipeline mode selection tests different properties |
| Metaphor commitment ceremony | TC Phase 3.5 (~100 lines) | Pipeline has no formal metaphor lock-in step |

---

## E. WHAT SHOULD BE THE SOURCE OF TRUTH

### Recommendation: Pipeline Artifacts Are Source of Truth. Skills Should Be Retired or Repurposed.

**Why artifacts win:**
1. They are ACTUALLY USED -- every build runs from MANIFEST + artifacts, never from skills
2. They are MORE CURRENT -- 69 questions vs 28, deployment protocol, iteration support
3. They are MORE GRANULAR -- information isolation (6 PA files with role-based access) vs monolithic skill
4. They have PROVENANCE -- item IDs traced to extraction sources

**What to do with each skill:**

**/tension-composition -> RETIRE or EXTRACT UNIQUE VALUE**
The pipeline's Content Analyst + Brief Assembler replaced TC's function. However, TC contains 3 things the pipeline lacks:
1. Discovery bias warning (lines 6-24) -- extract to Brief Assembler context
2. Formal 4-axis questioning (Phases 1-2) -- potentially valuable if Content Analyst quality degrades
3. Library access prohibition -- extract to orchestrator preconditions

**/perceptual-auditing -> RETIRE**
The pipeline's 6 PA files are a strict superset. The skill's "audit optimization trap" warning (lines 5-43) is the ONLY unique content -- extract to pa-guardrails-weaver.md or orchestrator context. Everything else is duplicated and stale.

**Critical action:** Remove the pa-weaver.md line 163 reference to "Re-invoke tension-composition" unless TC is formally integrated (it is not and has never been triggered).

---

---

## [INDEPENDENT CHECK] CROSS-VALIDATION WITH FRESH-EYES EVALUATION

An independent Opus agent with zero prior analysis context traced the same invocation chains and reached the same factual conclusions with different VALUE assessments.

**[VERIFIED] Neither skill is invoked by the pipeline.** Independent confirms: "The skills are NOT invoked. The pipeline evolved independently and absorbed their content into dedicated artifacts." The invocation status is unambiguous.

**[NUANCED] "ORPHANED" and "SHADOW" are judgments, not facts.** This investigation uses "ORPHANED" (Section C, TC) and "SHADOW" (Section C, PA) as status labels. These are editorial framings that imply the skills are valueless artifacts. Independent provides a different framing: "The artifacts EVOLVED FROM the skills but then REPLACED them. The pipeline did not merely extract skill content -- it restructured it." Specifically:
- TC's concepts (multi-axis questioning, tension derivation, metaphor scoring) propagated INTO the pipeline's Content Analyst + Brief Assembler methodology -- the pipeline INHERITED TC's ideas even while bypassing TC's execution
- PA's content was "extracted verbatim" into pa-questions.md, and deployment/weaver/guardrails were built ON TOP of the skill's foundations
- Independent: "The skills are NOT duplicates of the artifacts -- they serve different purposes (skill = methodology explanation, artifact = operational instruction)"

More accurate labels: TC is a **SUPERSEDED METHODOLOGY SOURCE** -- its ideas live on in the pipeline, but its execution path is bypassed. PA is a **SUPERSEDED CONTENT SOURCE** -- its questions and principles were extracted into a superset of artifacts that have evolved past it.

**[NUANCED] "Not invoked" does not mean "not valuable."** This investigation correctly documents zero invocations but then frames both skills as candidates for retirement. Independent rates TC as MIXED and PA as SOLID. The distinction matters for recommendation quality:
- TC's multi-axis questioning is "a real contribution" (independent) that the pipeline's freeform tension identification REPLACED with a less structured alternative. The skill's retirement didn't improve the pipeline -- it compressed a deliberate methodology into an ad-hoc one.
- PA's framework is "well-designed" (independent) and its content was successfully migrated. Here the retirement IS an improvement because the artifacts are a superset.

**[OVERLOOKED] The skills contain unique value the pipeline lacks.** Section D identifies 6 areas where skills contain value the pipeline lacks (discovery bias warning, audit optimization trap, 4-axis questioning framework, library access prohibition, Addition Test, metaphor commitment ceremony). Independent confirms this gap: "the skills still provide value as REFERENCE DOCUMENTS for understanding WHY the pipeline does what it does." The recommendation to "retire or repurpose" should weight these 6 gaps more heavily -- they represent methodology that was LOST during migration, not duplicated by it.

**[OVERLOOKED] Build-page skill is STRONG.** Independent rates the build-page skill itself as STRONG: "Thin launcher pointing to comprehensive manifest. Does exactly what it should -- routes to the right files, lists non-negotiables, specifies execution rules. No bloat." This investigation focuses on TC and PA but should note that the pipeline's orchestration layer (build-page -> MANIFEST -> artifacts) is well-designed even though the skill invocation pathway is unused.

---

*End of investigation. ~250 lines with independent check.*
