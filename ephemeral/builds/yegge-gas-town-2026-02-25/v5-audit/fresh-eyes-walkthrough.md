# Fresh-Eyes Walkthrough: Pipeline v5 Complete Audit

**Auditor:** Fresh-eyes Opus agent (zero prior knowledge of v5 design process)
**Date:** 2026-02-26
**Entry point:** MANIFEST.md quickstart
**Method:** Read MANIFEST.md cover-to-cover, then followed ALL references to artifact files. Read 20 files totaling ~11,619 lines.
**Persona:** Experienced pipeline orchestrator encountering this pipeline for the first time.

---

## 1. FIRST IMPRESSIONS: What is confusing? What is unclear? Where would I get stuck?

### The Quickstart is Good But Overloaded

The 12-step quickstart (lines 10-47 of MANIFEST.md) is genuinely useful as an orientation. I can see the phase sequence, agent roster, and dependency chain. However:

**STUCK POINT 1: Step 0 references files that are not in the quickstart.**
The quickstart says "Copy EXECUTION-TRACKER-TEMPLATE.md to this output directory" but I do not know what this template looks like or where to find it until I reach Appendix D (line 984). For a "minimum viable procedure," this is a forward reference to page 50 of a 70-page document.

**STUCK POINT 2: Step 4a (Brief Verification) dumps 5 gates without context.**
BV-01 through BV-05 are listed with detailed thresholds in the quickstart itself. This is too much detail for a quickstart -- it reads as reference material, not a procedure. I would not know whether to run these manually or programmatically until I read much further.

**STUCK POINT 3: The Observer is not in the quickstart.**
The Observer is described as "the FIRST agent spawned" (MANIFEST line 152, orchestrator line 126), but the quickstart procedure starts at "Spawn Content Analyst" (Step 2). Where does the Observer fit in the quickstart? This is a sequencing omission.

**STUCK POINT 4: "Pass A Recipe (D-01-D-05)" in step 5a.**
This tells me which dispositions but not where the recipe file is. I have to cross-reference Section 3 (artifact-builder-recipe.md) and then discover it is a redirect to two split files. Three hops to find the actual file.

### The Document is Well-Organized But Long

MANIFEST.md is 1,389 lines. For a "routing authority" document, this is substantial. The structure (quickstart -> overview -> routing table -> phase-by-phase -> dependency graph -> failure paths -> critical sections -> appendices) is logical. But the information I need as an orchestrator is scattered:

- Agent prompts are in Appendix E (line 1055+), not near the phase descriptions
- File paths are in Appendix D (line 984+), not near the agent descriptions
- Failure recovery is in Section 6 (line 673+), not inline with each phase

I would need to hold 3-4 different sections of this document in context simultaneously to execute any single phase.

---

## 2. CONTRADICTIONS: Where do files disagree with each other?

### CRITICAL: Disposition Split Between Passes (D-01-D-05 vs D-01-D-06+D-09)

This is the most significant contradiction I found.

**MANIFEST.md says (6 locations):**
- Pass A: D-01 through D-05
- Pass B: D-06 through D-09

**artifact-orchestrator.md says (3 locations):**
- Pass A: D-01 through D-05
- Pass B: D-06 through D-09

**artifact-builder-recipe-compose.md says (header, line 5):**
- Pass A (COMPOSE): D-01, D-02, D-03, D-04, D-05, D-06, D-09 (7 dispositions)

**artifact-builder-recipe-polish.md says (header, line 5):**
- Pass B (POLISH): D-07, D-08 (2 dispositions only)

The actual recipe files split dispositions DIFFERENTLY from what the manifest and orchestrator describe. D-06 (Negative Space as Shape) and D-09 (The Quiet Zone) are in Pass A per the recipe files, but in Pass B per the manifest. D-07 and D-08 are the only Pass B dispositions per the recipe, but the manifest implies all four of D-06 through D-09 are Pass B.

**Impact:** An orchestrator following the MANIFEST would route the wrong recipe to each builder. The builder would receive disposition instructions that contradict their recipe file.

### SIGNIFICANT: Gate Count Discrepancy (54 vs 56)

**MANIFEST.md says (6 locations):** "54 gates" and "21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BV + 1 UTILITY"

**gate-manifest.json says (canonical):** "56 gates" and "21 REQUIRED + 14 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 8 BV + 1 UTILITY"

The difference is exactly 2 gates: one additional RECOMMENDED (GR-83, INTENT Comment Count) and one additional BV (BV-08, Brief-Output Diff). These appear to be D2 crack dimension additions that were implemented in the gate files but not propagated back to the MANIFEST.

gate-manifest.json explicitly declares itself canonical: "If counts differ elsewhere, THIS FILE wins." So the MANIFEST is stale by 2 gates.

### MODERATE: Agent Count Discrepancy (16 vs 17)

MANIFEST.md says "17 agents" in most places (line 72, line 201, line 731) but also says "16 agents" at line 72 ("Total agents: 17... 1 orchestrator + 16 workers") which is consistent if the orchestrator is counted. However, the table in Section 8 (orchestrator line 731) says "16 agents" in the total row. This is because the orchestrator sometimes counts itself and sometimes does not.

More confusingly: the Observer is counted in the 17 (MANIFEST line 72: "Observer + Content Analyst + Brief Assembler + Pass A Builder + Pass B Builder + 9 PA Auditors + Integrative Auditor + Weaver" = 16 workers + 1 orchestrator = 17). But earlier text (line 824) says "15 agents, not 16" referencing a council mandate that removed the Compositional Critic. This council mandate predates the Observer addition, so the count should be 17 now, but the stale reference creates confusion.

### MODERATE: PA Question Assignment Discrepancy

MANIFEST.md Section 2 says "69 questions across 9 auditors" (line 183) with detailed thematic groupings.

But artifact-orchestrator.md Section 6 (line 439) says "PA-1 Q1-6, PA-2 Q7-12, ..., PA-7 Q37-42 (7 auditors x 6 questions) PA-8 Q43-48, PA-9 Q49-54 (total 54 PA questions across 9 auditors)."

So the orchestrator says 54 questions in sequential ranges. The MANIFEST says 69 questions in thematic groupings. These are completely different assignment schemes. Which is authoritative? The MANIFEST says its assignments come from pa-deployment.md, which is the split file. The orchestrator appears to have stale, pre-split content.

### MODERATE: "Pass A / Pass B" vs "Compose / Polish" Naming

The MANIFEST and orchestrator consistently use "Pass A" and "Pass B." The recipe split files use "COMPOSE" and "POLISH." The REFINE protocol in the orchestrator says "R-A: REFINE Pass B only" and "R-C: REFINE Pass A then new Pass B." But the recipe redirect says "REFINE: REFINE targets Pass A only. After REFINE Compose completes, re-run Pass B on the new HTML."

The naming is inconsistent but manageable. The bigger issue is that the REFINE targeting differs:
- Orchestrator (line 504): "IF dominant fixes are MECHANICAL or SURFACE-LEVEL: R-A: REFINE Pass B only"
- Recipe redirect (line 15): "REFINE targets Pass A only"

These say opposite things about which pass to REFINE.

---

## 3. MISSING INFORMATION: What do I need to know that is not documented?

### Missing: Observer Spawn Prompt in MANIFEST

The MANIFEST's Appendix E (Agent Prompt Templates, line 1055+) has templates for every agent EXCEPT the Observer. The orchestrator (line 130) says "See d10-observer-protocol.md Section 4 for the copy-paste-ready prompt." But d10-observer-protocol.md is NOT listed in Appendix D (File Path Registry). It exists only in the v5-design subdirectory of a specific build directory, not in the va-extraction pipeline spec directory.

If I were running this pipeline fresh, I could not find the Observer prompt without knowing about an implementation-specific file path.

### Missing: How to Serve HTML via HTTP

The manifest says "Serve HTML via HTTP (Playwright blocks file://)" (line 485) but provides no instructions for HOW. What port? What tool? `python3 -m http.server`? A specific Playwright configuration? An orchestrator building a pipeline for the first time would need to figure this out independently.

### Missing: GR-65 (Structure Preservation) Location

The orchestrator (line 352) references "GR-65: Structure Preservation Verification (post-Pass-B)" but GR-65 does not appear in gate-manifest.json's tier listings. Is it implemented? Where is its code? gate-runner-core.js presumably has it, but the manifest does not list it.

### Missing: Value Tables Content Description

artifact-value-tables.md is referenced extensively (262 lines, builder input) but the MANIFEST never describes what it actually contains beyond "CSS vocabulary for the 6-channel framework." An orchestrator would need to read it to understand what the builder receives, but the MANIFEST provides no summary.

### Missing: tracker-preflight.sh

The execution tracker template says "Fields marked (auto) are filled by tracker-preflight.sh" (line 1) but this script is never listed in Appendix D and I could not find it referenced anywhere else.

### Missing: How to Count "Builder Input Volume" for BV-07

BV-07 enforces a 2,500-line ceiling on builder input. But the honest complexity accounting (orchestrator line 110) says total is ~4,250 lines. How does the orchestrator get from 4,250 to under 2,500? Which files are excluded from the count? Is CD-006 (1,200 lines) optional? Is the content source material excluded? The ceiling and the honest accounting contradict.

---

## 4. COMPLEXITY ASSESSMENT: Is this executable by a competent orchestrator? How long to understand?

### Reading Time

To understand the pipeline well enough to execute it, an orchestrator must read:

| Document | Lines | Priority |
|----------|-------|----------|
| MANIFEST.md | 1,389 | REQUIRED |
| artifact-orchestrator.md | 744 | REQUIRED |
| artifact-tc-brief-template.md | 235 | REQUIRED |
| pa-deployment.md | 442 | REQUIRED |
| gate-manifest.json | 343 | REQUIRED |
| artifact-routing.md (Phase 0 protocol only) | ~200 of 1,056 | REQUIRED |
| artifact-builder-recipe-compose.md | 833 | REQUIRED (to validate) |
| artifact-builder-recipe-polish.md | 284 | REQUIRED (to validate) |
| gate-runner-core.js (structure only) | ~200 of 2,808 | RECOMMENDED |
| pa-weaver.md | 468 | RECOMMENDED |
| EXECUTION-TRACKER-TEMPLATE.md | 199 | RECOMMENDED |
| **Total minimum** | **~5,337 lines** | |

At ~200 lines per careful reading minute, that is ~27 minutes of pure reading time, assuming no confusion or re-reading. With the contradictions identified above, I estimate **45-60 minutes** for a competent orchestrator to reach confident understanding.

### Verdict: EXECUTABLE WITH FRICTION

Yes, a competent orchestrator can execute this pipeline. The quickstart provides a usable skeleton. The detailed sections fill in the gaps. But the contradictions (disposition split, gate counts, PA question assignments) would cause real confusion on a first run. An orchestrator who reads ONLY the MANIFEST quickstart and orchestrator Sections 0-7 (as recommended by the Known Limitations, line 1051) would build a pipeline that routes dispositions incorrectly.

---

## 5. TWO-PASS CONFUSION: Would I understand compose/polish split?

### Understanding the Concept: YES

The two-pass concept is clearly motivated. Pass A builds structure, Pass B adds polish. Different Opus agents. Pass B has ADD-ONLY constraint. This is intuitive.

### Understanding the Routing: NO (without reading the recipe files)

As documented above, the MANIFEST routes D-01-D-05 to Pass A and D-06-D-09 to Pass B. The recipe files route D-01-D-06+D-09 to Pass A and D-07-D-08 to Pass B. An orchestrator following the MANIFEST would:

1. Give Pass A builder D-01 through D-05 (missing D-06 and D-09)
2. Give Pass B builder D-06 through D-09 (D-06 and D-09 are structure dispositions that should be in Pass A; D-07 and D-08 are the only polish dispositions)

This would produce a Pass A build missing negative space and quiet zone decisions, and a Pass B build trying to add structural elements it should not touch.

### Understanding the REFINE Target: PARTIALLY

The orchestrator's REFINE Targeting section (line 496-520) clearly explains R-A (Pass B only) vs R-C (Pass A + new Pass B). The decision logic (dominant fix type -> which pass to re-execute) is sound. But the recipe redirect's statement "REFINE targets Pass A only" contradicts R-A (which targets Pass B only for surface fixes). One of these must be wrong.

---

## 6. OBSERVER CONFUSION: Would I know when/how to spawn the observer?

### When: YES

The orchestrator clearly states the Observer is the FIRST agent spawned (line 126). Before Content Analyst, before Phase 0.

### How: PARTIAL

The orchestrator says "Use Task tool with subagent_type: Opus" and "See d10-observer-protocol.md Section 4 for the copy-paste-ready prompt" (line 130). But d10-observer-protocol.md is not in the pipeline spec directory (ephemeral/va-extraction/). It is in an implementation-specific build directory. An orchestrator running a fresh build would not find it.

### STOP Authority: YES

The STOP mechanism is clearly documented (orchestrator line 143-147): Observer writes OBSERVER-STOP.md, orchestrator checks for it before each phase transition with `ls {BUILD_DIR}/OBSERVER-STOP.md 2>/dev/null`. This is simple and unambiguous.

### What the Observer Checks: MOSTLY CLEAR

The 30 binary checks across 7 categories are well-specified. The BLOCKING vs SIGNIFICANT severity classification is clear. However, the verification schedule (line 151: "5 discrete passes at phase boundaries") is somewhat vague -- "Pass 0 after Phase 0, Pass 1 after Phase 1, Pass 2 after Phase 3A, Pass 3 after Phase 3B, Pass 4 after Phase 3C, Pass R after REFINE." That is 6 passes (0-4 plus R), not 5.

---

## 7. GATE OVERLOAD: With 56+ gates, would I know which matter most?

### Prioritization: PARTIALLY CLEAR

The tier system (REQUIRED/RECOMMENDED/ADVISORY/DIAGNOSTIC/BV) provides a reasonable priority framework. The verdict logic in gate-manifest.json is explicit:

- ANY REQUIRED FAIL = REBUILD or REFINE (depending on gate type)
- 3+ RECOMMENDED FAIL = REBUILD
- ADVISORY = informational only
- BV = pre-build, blocks builder spawn

This is workable. The gate-manifest.json is the best-organized document in the pipeline for an orchestrator's purposes.

### BUT: Gate Count Keeps Growing

The manifest documents gate waves (0, 1, 2, 3, 4) and now D2 crack gates. Each wave adds gates. The total went from some smaller number to 56. The notes section of gate-manifest.json (line 325-341) is a changelog of 17 items. An orchestrator does not need to know the history -- they need to know the current state. The provenance information is noise during execution.

### The Real Gate Problem: Execution Ordering

gate-manifest.json's executionOrder array (line 128-271) lists 15 steps with fractional numbering (0, 1, 1.5, 1.8, 1.9, 2, 2.5, 2.7, 2.8, 3, 4, 5, 5.5, 5.7, 5.8, 5.85, 5.9, 6). The fractional steps were clearly inserted after the initial numbering scheme. This is manageable but inelegant. An orchestrator would need to sort these mentally or use the step numbers as a checklist.

### Would I Know Which Gates to Run When?

YES, if I read gate-manifest.json's executionOrder carefully. Each step has a phase label, function name, and gate IDs. The challenge is that some gates are "orchestrator text checks" (BV-01-BV-07, GR-23-GR-28), some are "Playwright DOM inspection" (GR-01-GR-22, etc.), and some are "post-weaver text analysis" (GR-64, GR-81). An orchestrator must understand three different execution contexts.

---

## 8. IDEOLOGY TENSION: Does convergence framing conflict with crystallization language?

### Overall: WELL CLEANED

The convergence reframing is mostly complete. The master equation (line 62-66) uses convergence language: "Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)." The REFINE protocol uses generative verbs. The iteration decision function uses delta-based thresholds.

### Residual Tension Points

1. **"Quality Floor"** (line 476, 962) -- The term "floor" implies a fixed minimum, which is crystallization thinking. In convergence framing, the initial quality is the starting point for iteration, not a pass/fail threshold. However, the gates DO enforce floors (>=14 mechanisms, >=800 CSS lines), so this is operationally correct even if ideologically impure.

2. **"REBUILD" terminology** -- The word "rebuild" implies failure and starting over. In convergence framing, even a REBUILD is a convergence step with information from the previous attempt (the conviction artifact is preserved). The terminology is slightly misaligned but well-mitigated by the "Fresh Opus builder in COMPOSING mode, reads previous conviction" protocol.

3. **"SHIP threshold"** (line 537) -- "PA-05 >= 3.5 AND all gates PASS" is a crystallization criterion. Convergence framing would say "iterate until delta < 0.3." The pipeline uses BOTH: convergence for iteration decisions, crystallization for final acceptance. This dual model seems intentional and functional.

### No Blocking Ideology Contradictions Found

The convergence-crystallization tension is managed, not eliminated. The pipeline correctly uses convergence for process (iterate, compose, deepen) and crystallization for acceptance (PA-05 >= 3.5 to ship). This is a reasonable hybrid.

---

## 9. FILE COUNT: How many files must an orchestrator read before starting?

### Minimum Required Reading (to execute Phase 0)

| File | Lines | Why |
|------|-------|-----|
| MANIFEST.md quickstart (lines 10-47) | 37 | Procedure skeleton |
| MANIFEST.md Section 2 (Agent Roster) | ~80 | Who gets what |
| artifact-orchestrator.md Sections 0-1 | ~155 | Preconditions + topology |
| artifact-routing.md Phase 0 protocol | ~100 | Content Analyst instructions |
| EXECUTION-TRACKER-TEMPLATE.md | 199 | What to track |
| d10-observer-protocol.md | ~200 | Observer spawn (if findable) |

**Minimum: 6 files, ~771 lines before spawning the first agent.**

### To Execute Complete Pipeline

| File | Lines | Phase Needed |
|------|-------|-------------|
| MANIFEST.md (full) | 1,389 | All |
| artifact-orchestrator.md | 744 | All |
| artifact-tc-brief-template.md | 235 | Phase 1 |
| artifact-routing.md | 1,056 | Phase 0-1 |
| artifact-builder-recipe-compose.md | 833 | Phase 2A |
| artifact-builder-recipe-polish.md | 284 | Phase 2B |
| artifact-identity-perception.md | 556 | Phase 1 (Brief Assembler input) |
| artifact-value-tables.md | 262 | Phase 2 (Builder input) |
| pa-deployment.md | 442 | Phase 3B |
| pa-questions.md | 431 | Phase 3B (auditor input) |
| pa-weaver.md | 468 | Phase 3C |
| pa-guardrails.md | 113 | Phase 3B (auditor input) |
| pa-guardrails-weaver.md | 59 | Phase 3C (weaver input) |
| gate-manifest.json | 343 | Phase 3A |
| gate-runner-core.js | 2,808 | Phase 3A (execution code) |
| EXECUTION-TRACKER-TEMPLATE.md | 199 | All |
| d10-observer-protocol.md | ~200 | Phase 0 (Observer spawn) |
| **Total** | **~10,422** | |

**Full pipeline: 17+ files, ~10,422 lines.**

### Is This Reasonable?

For a pipeline that produces single HTML pages: this is HEAVY. The ratio of specification to output is extreme. A well-built HTML page might be 500-1,200 lines. The specification is 10,000+ lines. That is an 8:1 to 20:1 spec-to-output ratio.

However, the pipeline is designed around a specific insight: that the FORMAT and ROUTING of these specifications matters more than their volume. The spec is not meant to be read linearly -- it is a reference architecture that the orchestrator navigates per phase. In that frame, 10,000 lines is more like a codebase than a document, and the question becomes "is the codebase well-organized?" The answer is: mostly yes, with the contradictions noted above.

---

## 10. KILLER QUESTION: If I had to run this pipeline RIGHT NOW with no human help, what would go wrong?

### What Would Go Wrong (ranked by impact)

**1. Disposition Routing Error (CRITICAL)**
I would follow the MANIFEST and give Pass A builder D-01-D-05 and Pass B builder D-06-D-09. The actual recipe files expect D-01-D-06+D-09 for Pass A and D-07-D-08 for Pass B. The Pass A builder would receive a recipe expecting 7 dispositions but only get 5. The Pass B builder would receive a recipe expecting 2 dispositions but get 4. This would cause confusion, missed dispositions, or builder hallucination.

**Mitigation:** Read the actual recipe files (which I would naturally do), and follow THEIR headers over the MANIFEST. But this undermines trust in the MANIFEST as the routing authority.

**2. Observer Prompt Not Found (SIGNIFICANT)**
I cannot find d10-observer-protocol.md in the pipeline spec directory. I would either skip the Observer or write my own prompt, both of which are suboptimal.

**Mitigation:** The Observer is valuable but not strictly required for the build to produce output. Skip it and note the gap.

**3. Gate Count Mismatch Leading to GR-48 Failure (MODERATE)**
If I run gates based on the MANIFEST's count of 54 but gate-manifest.json expects 56, GR-48 (gate coverage verification) might FAIL because I skipped BV-08 and GR-83. This would make the verdict INCOMPLETE.

**Mitigation:** gate-manifest.json is declared canonical. Use it, not the MANIFEST counts.

**4. BV-07 vs Honest Accounting Confusion (MODERATE)**
The 2,500-line ceiling (BV-07) appears to conflict with the ~4,250-line honest accounting. I would not know which files to exclude to get under the ceiling. I would probably just not run BV-07 and note the discrepancy.

**Mitigation:** CD-006 reference (1,200 lines) is optional. Content source material varies. If I exclude both, the remaining files (brief 165 + tokens 183 + components 944 + mechanism-catalog varies + value tables 262) might fit under 2,500.

**5. PA Question Assignment Confusion (MODERATE)**
The orchestrator says 54 questions in sequential ranges. The MANIFEST says 69 questions in thematic groupings from pa-deployment.md. I would follow pa-deployment.md (the split file, which is declared authoritative), but the orchestrator's conflicting instructions would slow me down.

**Mitigation:** pa-deployment.md is authoritative. The orchestrator's Section 6 is stale.

**6. tracker-preflight.sh Not Found (LOW)**
The execution tracker references this script for auto-filling fields. I would fill them manually.

**7. HTTP Serving Logistics (LOW)**
"Serve HTML via HTTP" without instructions. I would use `python3 -m http.server 8000` or equivalent. Not blocking, but adds 2-3 minutes of trial and error.

---

## Summary Assessment

### Strengths
- **Quickstart is genuinely useful** as an orientation
- **Phase structure is clear** (0 -> 0.5 -> 1 -> 2A -> 2A-gate -> 2B -> 3A -> 3B -> 3C)
- **Gate tier system works** (REQUIRED/RECOMMENDED/ADVISORY provides clear priority)
- **PA deployment is well-designed** (9 parallel auditors, fresh-eyes, experiential pass)
- **Convergence ideology is mostly well-implemented**
- **Agent prompt templates in Appendix E** are copy-paste ready and comprehensive
- **Information isolation** (what each agent must NOT receive) is clearly specified

### Weaknesses
- **Disposition split contradiction** between MANIFEST/orchestrator (D-01-D-05/D-06-D-09) and recipe files (D-01-D-06+D-09/D-07-D-08) is a blocking error for correct routing
- **Gate count is stale** (54 in MANIFEST vs 56 in gate-manifest.json) -- 2 new gates not propagated
- **PA question assignments** differ between orchestrator (54 sequential) and MANIFEST/pa-deployment (69 thematic)
- **Observer prompt** not accessible from pipeline spec directory
- **Spec-to-output ratio** (~10,000:~1,000 = 10:1) is high but manageable if treated as reference architecture
- **BV-07 ceiling** (2,500 lines) contradicts honest accounting (~4,250 lines) without clear resolution
- **REFINE targeting** contradicts between orchestrator ("R-A targets Pass B") and recipe redirect ("REFINE targets Pass A only")

### Bottom Line

**This pipeline is executable but contains 3-5 contradictions that would cause routing errors on a first run.** The most serious is the disposition split. If these contradictions were resolved, the pipeline would be READY FOR EXECUTION by a competent orchestrator with ~45-60 minutes of reading time. The architecture is sound. The ideology is coherent. The contradictions are implementation bugs, not design flaws.
