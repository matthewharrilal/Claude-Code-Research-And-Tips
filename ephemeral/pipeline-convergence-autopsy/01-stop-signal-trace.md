# Stop Signal Trace — Pipeline v3 Convergence Autopsy

**Date:** 2026-02-25
**Investigator:** Pipeline Forensics Agent (Opus)
**Scope:** Trace every explicit and implicit stop signal through the Pipeline v3 artifact chain
**Question:** Why does the pipeline stop iterating after one pass, leaving 21 known refinements on the table instead of converging to SHIP?

---

## Method

Read every file in the pipeline artifact chain (SKILL.md, MANIFEST.md, artifact-orchestrator.md, pa-weaver.md, EXECUTION-TRACKER-TEMPLATE.md, experiment-protocol.md) and classified every stop signal as:

- **EXPLICIT_STOP** — Text that directly says "stop," "terminate," "single-pass," or "no re-execution"
- **IMPLICIT_STOP** — Text that makes stopping the path of least resistance without directly commanding it
- **ABSENT_LOOP** — Places where a convergence loop SHOULD be specified but is not
- **INCENTIVE_MISALIGNMENT** — Places where the text SAYS one thing but INCENTIVIZES the opposite

---

## 1. EXPLICIT STOP SIGNALS (11 found)

### ES-01: MANIFEST.md Quickstart Step 11 — The Primary Kill Switch
**File:** MANIFEST.md:40-41
**Text:** "If SHIP WITH FIXES: pipeline terminates with mechanical fix list. If REFINE or REBUILD: pipeline terminates with action items for a new manual run. (Single-pass default — no automatic re-execution.)"
**Classification:** EXPLICIT_STOP
**Impact:** CRITICAL. This is the first thing an orchestrator reads after the procedure steps. The parenthetical "(Single-pass default — no automatic re-execution)" converts REFINE from "iterate" to "output a label and stop." The word "terminates" appears twice in one sentence — once for SHIP WITH FIXES (appropriate) and once for REFINE/REBUILD (premature). By using the same verb for both, it equates "page is good enough" with "page needs work" as having the same pipeline response: stop.

### ES-02: MANIFEST.md Quickstart Step 11 — Iteration Cap
**File:** MANIFEST.md:42
**Text:** "Maximum iterations: 1 REBUILD + 1 REFINE before requiring human review. If a second REBUILD is triggered, the pipeline terminates with diagnostic output."
**Classification:** EXPLICIT_STOP
**Impact:** HIGH. This line was designed as a safety valve (prevent infinite loops) but functions as a permission structure for the orchestrator to stop after zero iterations. The cap is "1 REBUILD + 1 REFINE" but the DEFAULT is zero. The cap never activates because the default path never reaches it.

### ES-03: artifact-orchestrator.md Section 0 — Architecture Label
**File:** artifact-orchestrator.md:13
**Text:** "Single-pass = DEFAULT. 3-pass = EXPERIMENTAL (blocked until experiment #21)"
**Classification:** EXPLICIT_STOP
**Impact:** CRITICAL. This is in the COUNCIL MANDATES section at the top of the document. It frames iteration as requiring experimental validation before use. An orchestrator reading this understands: "iterating is unauthorized." The parenthetical "(blocked until experiment #21)" makes iteration feel like an unauthorized action, not an available tool.

### ES-04: artifact-orchestrator.md Section 1 — Architecture Declaration
**File:** artifact-orchestrator.md:65
**Text:** "Default mode: SINGLE-PASS (3-pass is EXPERIMENTAL, blocked until Experiment #21 validates it)"
**Classification:** EXPLICIT_STOP
**Impact:** CRITICAL. Repetition of ES-03 in a different section. Double-reinforcement. The orchestrator encounters this framing in Section 0 AND Section 1, establishing "single-pass" as deeply embedded identity.

### ES-05: artifact-orchestrator.md Section 0 — Budget Expectation
**File:** artifact-orchestrator.md:44
**Text:** "Budget expectation: 25-40% of builds may need REFINE or REBUILD (per council REC-07). Plan for 1 REBUILD + 1 REFINE maximum before human review. Single-pass is the default — no automatic re-execution."
**Classification:** EXPLICIT_STOP
**Impact:** HIGH. Third repetition of "single-pass is the default — no automatic re-execution." Three separate locations in the first 44 lines of the orchestrator document. Pattern: MANDATE, ARCHITECTURE, BUDGET — all three reinforce "do not iterate."

### ES-06: MANIFEST.md Section 1 — Pipeline Overview
**File:** MANIFEST.md (within Section 1, around line 65)
**Text:** "Default mode: SINGLE-PASS (3-pass is EXPERIMENTAL, blocked until Experiment #21 validates it)"
**Classification:** EXPLICIT_STOP
**Impact:** HIGH. Fourth instance. Now also in the MANIFEST's pipeline overview, so the orchestrator encounters it reading either file.

### ES-07: MANIFEST.md Section 5 — Dependency Graph Feedback Loops
**File:** MANIFEST.md:591-593
**Text:** "In single-pass mode, there are NO feedback loops. If the verdict is REFINE or REBUILD, the pipeline terminates with action items. A new pipeline run would be needed to act on those items."
**Classification:** EXPLICIT_STOP
**Impact:** CRITICAL. This is the architectural diagram's accompanying text. It explicitly states "there are NO feedback loops" — not "there are feedback loops that are disabled by default" but "NO feedback loops." This converts REFINE from a loop-back instruction to a terminal state. The dependency graph (MANIFEST.md:544-573) is a DAG with no cycles. The arrow goes from Phase 3C to "VERDICT" and stops. There is no arrow from VERDICT back to Phase 2.

### ES-08: MANIFEST.md Phase 3C Single-Pass Behavior
**File:** MANIFEST.md:519
**Text:** "Single-pass behavior: In single-pass mode (the default), REFINE and REBUILD are OUTPUT LABELS. The pipeline terminates with the verdict + action items. A human decides whether to run a new pipeline execution. There is no automatic re-execution."
**Classification:** EXPLICIT_STOP
**Impact:** CRITICAL. The phrase "OUTPUT LABELS" is devastating. It redefines REFINE from a verb (an action to take) into a noun (a classification to report). An orchestrator reading this understands REFINE as equivalent to printing "REFINE" on a report, not as an instruction to actually refine. Fifth repetition of "no automatic re-execution."

### ES-09: artifact-orchestrator.md REFINE Protocol — The Buried Loop
**File:** artifact-orchestrator.md:543-548
**Text:**
```
REFINE protocol:
1. Spawn DIFFERENT Opus builder (defeats continuation bias)
2. Give it: original brief, Pass 1 output, PA weaver's artistic impressions (in generative language)
3. DO NOT give: gate scores, threshold numbers, diagnostic language
4. Builder enters COMPOSITIONAL mode (refining relationships, not fixing defects)
5. Return to Phase 3 for re-audit
```
**Classification:** EXPLICIT_STOP (paradox — the only iteration instruction is buried under 5 layers of stop signals)
**Impact:** CATASTROPHIC MISPLACEMENT. Step 5 ("Return to Phase 3 for re-audit") is the ONLY line in the entire artifact chain that describes a convergence loop. It is:
- Step 5 of 5 in a numbered list (recency bias: readers remember the start of lists, not the end)
- Buried at line 548 of a 1,130-line document
- Preceded by 5 EXPLICIT_STOP signals (ES-01 through ES-08) that all say "pipeline terminates"
- Contradicted by ES-08 which says REFINE is an "OUTPUT LABEL," not an action
- Not mentioned in ANY other file (MANIFEST.md, SKILL.md, pa-weaver.md, EXECUTION-TRACKER-TEMPLATE.md)

In the actual run, steps 1-4 were executed and step 5 was SKIPPED. This is the central finding.

### ES-10: MANIFEST.md Circuit Breaker
**File:** MANIFEST.md:601-603
**Text:** "Maximum iterations: 1 REBUILD + 1 REFINE before human intervention. If a second REBUILD is triggered, the pipeline terminates with diagnostic output for human review."
**Classification:** EXPLICIT_STOP
**Impact:** MODERATE. Sixth instance of iteration caps. The circuit breaker is designed for a loop that never runs.

### ES-11: pa-weaver.md — Ship Decision Thresholds
**File:** pa-weaver.md:270-275
**Text:** The ship decision table maps PA-05 scores directly to terminal verdicts. REFINE (PA-05 2.5-3.5) is listed as a category, not as a loop instruction. The Weaver produces a verdict, and that verdict is the end of the Weaver's role. Nothing in pa-weaver.md tells the Weaver to trigger re-execution.
**Classification:** EXPLICIT_STOP (by omission — the Weaver's protocol ends at verdict)

---

## 2. IMPLICIT STOP SIGNALS (14 found)

### IS-01: Linear Phase Naming (Phases 0 → 1 → 2 → 3A → 3B → 3C)
**File:** All files
**Impact:** The phase names form a monotonically increasing sequence (0, 1, 2, 3A, 3B, 3C). No phase name suggests return. Compare with "Phase 4: REFINE iteration" — which does not exist. The naming convention implies forward-only flow.

### IS-02: Dependency Graph Is a DAG, Not a Cycle
**File:** MANIFEST.md:544-573
**Impact:** The ASCII dependency graph is a directed acyclic graph (DAG). The visual structure — straight down with a branch-and-merge for screenshots/gates — shows no arrows pointing upward. An orchestrator reading this diagram internalizes "pipeline flows down." The absence of a visual cycle is a powerful implicit stop signal. If the graph showed an arrow from VERDICT back to Phase 2 (labeled "if REFINE"), the loop would be visible and expected.

### IS-03: EXECUTION-TRACKER-TEMPLATE Has No Iteration Fields
**File:** EXECUTION-TRACKER-TEMPLATE.md (entire file)
**Impact:** CRITICAL. The 597-line tracker template has fields for every phase, every gate, every auditor report — but NO field for "Iteration Count," "REFINE Cycle Number," "Pass 2 Builder," "Pass 2 Gate Results," or "Pass 2 PA Scores." The tracker is structurally single-pass. If the orchestrator were to run a REFINE iteration, there would be no place to record it. The tracker's structure IS the pipeline's structure.

The only iteration-adjacent field is line 501: `| Circuit Breaker | ___ (N/A / 1st REBUILD / 1st REFINE / HUMAN REVIEW) |` — but this is a METADATA field documenting what happened, not a PROCEDURAL field triggering iteration.

### IS-04: Output File Naming Convention Is Single-Indexed
**File:** MANIFEST.md:526-536
**Text:** File names use `{phase}-{agent}-{timestamp}.md` format. There is no pass index: `p2-builder-20260224T1530.html`, not `p2-builder-pass1-20260224T1530.html`. If a REFINE iteration produced a second HTML file, it would collide with or overwrite the first.

### IS-05: "15 Agents" Count Assumes No Iteration
**File:** MANIFEST.md:175, artifact-orchestrator.md:66
**Text:** "Total agents: 15 (1 orchestrator + 14 workers)."
**Impact:** The agent count is exact and assumes single-pass. A REFINE iteration adds at minimum 1 builder + 9 auditors + 1 integrative + 1 weaver = 12 agents, bringing the total to 27. The "15 agents" framing makes iteration feel like doubling the cost, not like a natural part of the process.

### IS-06: Runtime Estimate Excludes Iteration
**File:** artifact-orchestrator.md:663, MANIFEST.md:67
**Text:** "Estimated runtime: 80-105 minutes."
**Impact:** The runtime estimate is for single-pass only. REFINE adds ~60-75 minutes (artifact-orchestrator.md:669). A pipeline that iterates to convergence might take 160-180 minutes. By estimating 80-105, the pipeline frames itself as a sub-2-hour activity. Exceeding this feels like failure, not like normal operation.

### IS-07: Cost Estimates Treat Iteration As Exceptional
**File:** artifact-orchestrator.md:667-670
**Text:** "Single-pass default: ~60-120 min, ~$30-150 per page. REFINE iteration (if needed): adds ~60-75 min."
**Impact:** The phrasing "if needed" frames REFINE as an exception. Combined with "25-40% of builds may need REFINE or REBUILD," this means the pipeline frames iteration as a FAILURE MODE that affects the minority of builds, not as a CONVERGENCE MECHANISM that drives every build toward quality.

### IS-08: SKILL.md Entry Point Has Zero Mention of Iteration
**File:** SKILL.md (entire 90-line file)
**Impact:** The skill entry point (what the user and orchestrator read first) describes quickstart steps 0-11 but never mentions REFINE, REBUILD, iteration, convergence, or looping. The skill frames the pipeline as: read manifest → follow steps → get verdict → done. An orchestrator reading this as its mission brief understands the pipeline as a single-pass procedure.

### IS-09: Weaver Produces TWO Outputs, But Only One Is Consumed
**File:** MANIFEST.md:511-513, pa-weaver.md:83-84
**Text:** Weaver produces "(a) Diagnostic verdict for the orchestrator" and "(b) Artistic impression for a potential REFINE/REBUILD builder."
**Impact:** The artistic impression IS the input for a REFINE builder. But there is no instruction in the orchestrator protocol to CONSUME this output by spawning a REFINE builder. The Weaver creates the fuel for iteration but the orchestrator has no instruction to use it. The artistic impression is written to disk and then... nothing happens with it.

### IS-10: REFINE Protocol Is In "Verdict" Section, Not "Execution" Section
**File:** artifact-orchestrator.md:526-562
**Impact:** The REFINE and REBUILD protocols appear in "SECTION 7: VERDICT AND DECISION TREE" — a section about CLASSIFYING outcomes. They do not appear in the execution sections (Sections 2-6) where the orchestrator follows step-by-step procedures. An orchestrator executing Sections 2-6 sequentially will reach Section 6 (Phase 3 verdict), receive the verdict, and consider the execution complete. Reading Section 7 requires a separate intentional act. The protocols are filed under "what the verdict means" not "what to do next."

### IS-11: Experiment Protocol Treats Iteration As Future Work
**File:** experiment-protocol.md:48-51
**Text:** "Experiments run OUTSIDE normal pipeline execution — they are NOT part of a build."
**Impact:** By relegating iteration-related experiments to a separate file explicitly marked as "NOT part of a build," the pipeline creates a categorical boundary between "building a page" (which does not iterate) and "experimenting with iteration" (which is a separate activity). An orchestrator cannot justify iterating during a build because the experiment protocol says experiments are not builds.

### IS-12: The "STOP HERE FOR EXECUTION" Comment
**File:** artifact-orchestrator.md:720-726
**Text:** `<!-- === STOP HERE FOR EXECUTION === -->` followed by "Sections 0-9 above contain everything needed to run the pipeline. Sections 10+ below are HISTORICAL CONTEXT."
**Impact:** The 3-pass architecture (Section 10) and experiment protocol (Section 11) — the only content that describes iteration in detail — are BELOW the stop marker. An orchestrator following the instruction to "STOP HERE FOR EXECUTION" will never reach the sections that describe how iteration works.

### IS-13: Tracker "Post-Run Verification" Implies Pipeline Is Complete
**File:** EXECUTION-TRACKER-TEMPLATE.md:529-596
**Impact:** The tracker has a "Post-Run Verification" section that checks whether all phases completed, all files exist, and all fields are populated. This section treats the pipeline as FINISHED after Phase 3C. It checks for anomalies but does not check "if verdict was REFINE, did iteration occur?" This is a structural assumption of completion.

### IS-14: The Word "Terminates" Appears 6 Times; "Iterates" Appears 0 Times
**File:** All files (aggregate count)
**Impact:** Across MANIFEST.md, artifact-orchestrator.md, and SKILL.md, the word "terminates" (or "pipeline terminates") appears in 6 distinct locations describing what happens after verdict. The word "iterates" appears in 0 locations. The word "loop" appears in 0 execution-relevant locations. The word "converge" appears in 0 locations. The vocabulary of the pipeline does not contain the concept of convergence.

---

## 3. ABSENT LOOPS (8 found)

### AL-01: No "Phase 4" Exists
**Impact:** CRITICAL. The pipeline has Phases 0, 1, 2, 3A, 3B, 3C. There is no Phase 4. If REFINE were a first-class operation, it would be Phase 4 (REFINE build) followed by Phase 5 (re-audit). The absence of Phase 4 means REFINE has no home in the pipeline's architecture.

### AL-02: No Orchestrator Decision Point After Verdict
**Impact:** CRITICAL. The orchestrator's execution sequence (MANIFEST.md Steps 0-11) ends at Step 11 with verdict. There is no Step 12: "If REFINE, execute REFINE protocol from artifact-orchestrator.md Section 7." The decision tree exists in the orchestrator document but is not invoked by the manifest's procedure.

### AL-03: No REFINE Builder Prompt Template
**File:** MANIFEST.md Appendix E
**Impact:** HIGH. Appendix E has copy-paste-ready prompts for: Content Analyst, Brief Assembler, Builder, Gate Runner, PA Auditors, Integrative Auditor, and Weaver. There is NO prompt template for a REFINE builder. An orchestrator that wanted to iterate would need to improvise the prompt, violating the pipeline's "use these templates" ethos.

### AL-04: No REFINE Tracker Section
**File:** EXECUTION-TRACKER-TEMPLATE.md
**Impact:** HIGH. The tracker has detailed sections for Pre-Flight, Phase 0, Phase 1, Phase 2, Phase 3A, Phase 3A+, Phase 3B, Phase 3C, Execution Summary, Output Files Manifest, and Post-Run Verification. There is no "Phase 4: REFINE" section, no "Iteration N" section, no place to record REFINE builder inputs/outputs/gate results.

### AL-05: No Convergence Criterion Defined
**Impact:** CRITICAL. Even if the loop existed, there is no convergence criterion. What PA-05 score means "good enough to stop iterating"? The SHIP threshold (>=3.5) is defined. But there is no criterion for "when to stop REFINING" if iterating. Does the orchestrator iterate until SHIP? Until SHIP WITH FIXES? Until PA-05 improves by <0.5 per iteration (diminishing returns)? This is undefined.

### AL-06: No REFINE Gate Results Comparison
**Impact:** MODERATE. If the pipeline iterated, the orchestrator would need to compare Pass 1 gate results with Pass 2 gate results to verify improvement. No comparison mechanism exists. The gate runner produces a flat JSON — there is no "delta" computation or "improvement check."

### AL-07: No Re-Audit Trigger in Orchestrator Execution Sections
**File:** artifact-orchestrator.md Sections 2-6
**Impact:** HIGH. Sections 2-6 describe the execution of Phases 0-3C. Section 7 describes the verdict. But Section 7 does NOT say "if REFINE, return to Section 5 and re-execute Phase 2." The execution sections are one-shot. The loop-back instruction in ES-09 ("Return to Phase 3 for re-audit") has no corresponding entry point in the execution sections that says "this section may be re-entered from Section 7."

### AL-08: No Inter-Iteration State Management
**Impact:** MODERATE. If the pipeline iterated, artifacts from Pass 1 (builder output, gate results, PA reports) would need to coexist with artifacts from Pass 2. No state management protocol exists. Should Pass 1 artifacts be archived? Renamed? Do Pass 2 auditors see Pass 1 results? The absence of state management means iteration is not just undocumented — it is structurally unsupported.

---

## 4. INCENTIVE MISALIGNMENTS (7 found)

### IM-01: "Single-Pass" Is Both an Architecture and an Achievement
**Impact:** CRITICAL. The pipeline frames single-pass success as evidence of good architecture:
- "Single-pass default" (architecture label)
- "N=1 at PA-05 4/4 (Middle), N=1 at PA-05 3.5 (Gas Town). Both single-pass." (artifact-orchestrator.md:89)
- "Estimated runtime: 80-105 minutes" (achievement, not budget)

This frames an orchestrator that iterates as FAILING the architecture, not as USING the architecture. Completing in one pass is a point of pride; needing two passes is a deficiency.

### IM-02: REFINE Budget Treated As Overhead, Not Investment
**File:** artifact-orchestrator.md:669
**Text:** "REFINE iteration (if needed): adds ~60-75 min + PA re-audit"
**Impact:** The word "adds" frames REFINE as cost (additional time beyond the expected 80-105 minutes), not as investment (improving PA-05 from 2.5 to 3.5). Compare: "REFINE iteration improves quality by ~1.0 PA-05 points in ~60-75 minutes" — same fact, opposite framing.

### IM-03: Council Mandate Creates Fear of Unauthorized Iteration
**File:** artifact-orchestrator.md:13, 91
**Text:** "3-pass = EXPERIMENTAL (blocked until experiment #21)"
**Impact:** The council explicitly blocked multi-pass iteration. An orchestrator attempting to iterate risks violating a council mandate. Even though REFINE (2-pass) is architecturally different from 3-pass, the proximity of "iteration" to "blocked" creates a chilling effect. The orchestrator would need to distinguish between "REFINE (authorized, buried in Section 7)" and "3-pass (unauthorized, blocked by council)" — a distinction the text does not make clearly.

### IM-04: Success Metric Favors Efficiency Over Quality
**File:** EXECUTION-TRACKER-TEMPLATE.md:488-501
**Text:** The Execution Summary tracks "Total Duration" and "Agents Spawned" but not "Quality Improvement Per Iteration" or "PA-05 Delta From First Pass."
**Impact:** The tracker measures COST (time, agents) but not QUALITY IMPROVEMENT. An orchestrator filling out the tracker is incentivized to minimize cost metrics. Iterating increases both duration and agent count — making the tracker's efficiency metrics worse. There is no offsetting quality-improvement metric to justify the cost.

### IM-05: "25-40% of Builds May Need REFINE" Is Presented As Bad News
**File:** artifact-orchestrator.md:44
**Text:** "Budget expectation: 25-40% of builds may need REFINE or REBUILD"
**Impact:** The framing is "budget FOR failure" not "plan for iteration." If 25-40% of builds need REFINE, that could mean "the pipeline works as designed — it builds, evaluates, and refines." Instead it is framed as a failure rate to be "budgeted for," implying these builds are abnormal.

### IM-06: The Weaver's Artistic Impression Has No Consumer
**File:** MANIFEST.md:511-513
**Impact:** The Weaver produces an artistic impression specifically for a REFINE builder. But the orchestrator's manifest procedure (Steps 0-11) contains no step that says "give the artistic impression to a REFINE builder." The artifact is created (cost incurred) but never consumed (value not realized). This is a dead-letter mechanism — it exists on paper but has no execution path.

### IM-07: REFINE Protocol Step 5 Contradicts Its Own Document
**File:** artifact-orchestrator.md:548 vs. artifact-orchestrator.md:591-593
**Text:** Step 5: "Return to Phase 3 for re-audit" vs. "In single-pass mode, there are NO feedback loops."
**Impact:** The same document contains both an instruction to loop ("Return to Phase 3") and a declaration that loops don't exist ("NO feedback loops"). When an instruction contradicts a declaration, the declaration wins because it is the broader architectural statement. An orchestrator encountering both will follow the architecture (no loops) and ignore the procedure (return to Phase 3).

---

## 5. THE CRITICAL PATH: Why Step 5 Was Skipped

The REFINE protocol (artifact-orchestrator.md:543-548) has 5 steps. In the actual run, steps 1-4 were executed and step 5 was skipped. Here is every factor that made skipping step 5 the path of least resistance:

### Factor 1: Positional Disadvantage
Step 5 is the LAST item in a 5-step list. LLM attention follows primacy bias — first items in lists get more attention than last items. Steps 1-4 describe ACTIONS (spawn, give, withhold, enter mode). Step 5 describes a LOOP BACK ("Return to Phase 3") which is architecturally different from the preceding actions.

### Factor 2: 11 Explicit Stop Signals Precede It
Before the orchestrator reaches line 548, it has read 11 EXPLICIT_STOP signals (ES-01 through ES-11) across multiple files. Each one reinforces "pipeline terminates after verdict." Step 5 is a single line contradicting 11 prior signals.

### Factor 3: No Procedural Entry Point
Step 5 says "Return to Phase 3 for re-audit" but Phase 3 (MANIFEST.md Section 4.3 / artifact-orchestrator.md Section 6) does not say "this phase may be re-entered from a REFINE iteration." The execution sections are one-way. Step 5 points to a door that the door does not acknowledge opens from the other side.

### Factor 4: No Tracker Support
The EXECUTION-TRACKER-TEMPLATE has no section for recording a re-audit. If the orchestrator executed Step 5, it would have no place to record the results. The tracker's structure reinforces single-pass by having no iteration-aware fields.

### Factor 5: No Prompt Template
MANIFEST.md Appendix E has no REFINE builder prompt. Executing Step 5 requires the orchestrator to improvise a prompt — violating the pipeline's "use these templates" principle.

### Factor 6: Architectural Contradiction
The dependency graph (MANIFEST.md:544-573) is a DAG with no cycles. ES-07 states "there are NO feedback loops." Step 5 asks the orchestrator to create a feedback loop in a system that architecturally declares it has none.

### Factor 7: Cost Framing
Executing Step 5 adds ~60-75 minutes to a pipeline estimated at 80-105 minutes (an 60-75% cost increase). The tracker would show worse efficiency metrics with no offsetting quality-improvement metric.

### Factor 8: Completion Bias (LLM Behavior)
LLM orchestrators have a completion bias — they seek to finish tasks, not to extend them. After completing Phase 3C and receiving a verdict, the orchestrator's continuation tendency (the strongest LLM behavioral pattern) is to CONCLUDE the pipeline, not to RE-ENTER it. Step 5 requires the orchestrator to override its own completion drive.

### Factor 9: The Word "Return"
Step 5 uses the word "Return" — implying going backwards. Every other instruction in the pipeline uses forward-oriented language: "proceed to," "spawn," "output." "Return" is the only backward-looking verb in the entire execution protocol, and it competes with an entire vocabulary of forward motion.

---

## 6. SUMMARY TABLE

| ID | Location | Type | Severity | Text Summary |
|----|----------|------|----------|-------------|
| ES-01 | MANIFEST.md:40-41 | EXPLICIT_STOP | CRITICAL | "pipeline terminates with action items" |
| ES-02 | MANIFEST.md:42 | EXPLICIT_STOP | HIGH | "Maximum iterations: 1 REBUILD + 1 REFINE" |
| ES-03 | orchestrator.md:13 | EXPLICIT_STOP | CRITICAL | "Single-pass = DEFAULT. 3-pass = EXPERIMENTAL (blocked)" |
| ES-04 | orchestrator.md:65 | EXPLICIT_STOP | CRITICAL | "Default mode: SINGLE-PASS" (second occurrence) |
| ES-05 | orchestrator.md:44 | EXPLICIT_STOP | HIGH | "Single-pass is the default — no automatic re-execution" (third occurrence) |
| ES-06 | MANIFEST.md ~line 65 | EXPLICIT_STOP | HIGH | "SINGLE-PASS" in pipeline overview (fourth occurrence) |
| ES-07 | MANIFEST.md:591-593 | EXPLICIT_STOP | CRITICAL | "there are NO feedback loops" |
| ES-08 | MANIFEST.md:519 | EXPLICIT_STOP | CRITICAL | "REFINE and REBUILD are OUTPUT LABELS" |
| ES-09 | orchestrator.md:548 | EXPLICIT_STOP (paradox) | CATASTROPHIC | Only loop instruction, buried step 5 of 5 at line 548 |
| ES-10 | MANIFEST.md:601-603 | EXPLICIT_STOP | MODERATE | Circuit breaker — caps never-activated loop |
| ES-11 | pa-weaver.md:270-275 | EXPLICIT_STOP | MODERATE | Weaver protocol ends at verdict |
| IS-01 | All files | IMPLICIT_STOP | HIGH | Linear phase naming (0→1→2→3) |
| IS-02 | MANIFEST.md:544-573 | IMPLICIT_STOP | CRITICAL | Dependency graph is DAG, not cycle |
| IS-03 | TRACKER (entire file) | IMPLICIT_STOP | CRITICAL | No iteration fields in 597-line tracker |
| IS-04 | MANIFEST.md:526-536 | IMPLICIT_STOP | HIGH | File naming has no pass index |
| IS-05 | MANIFEST.md:175 | IMPLICIT_STOP | MODERATE | "15 agents" count assumes no iteration |
| IS-06 | orchestrator.md:663 | IMPLICIT_STOP | MODERATE | Runtime estimate excludes iteration |
| IS-07 | orchestrator.md:667-670 | IMPLICIT_STOP | HIGH | Iteration framed as exceptional ("if needed") |
| IS-08 | SKILL.md (entire file) | IMPLICIT_STOP | HIGH | Zero mention of iteration in entry point |
| IS-09 | MANIFEST.md:511-513 | IMPLICIT_STOP | HIGH | Artistic impression created but never consumed |
| IS-10 | orchestrator.md:526-562 | IMPLICIT_STOP | HIGH | REFINE protocol in Verdict section, not Execution |
| IS-11 | experiment-protocol.md:48 | IMPLICIT_STOP | MODERATE | Iteration experiments "NOT part of a build" |
| IS-12 | orchestrator.md:720-726 | IMPLICIT_STOP | HIGH | STOP HERE FOR EXECUTION hides iteration details |
| IS-13 | TRACKER:529-596 | IMPLICIT_STOP | MODERATE | Post-Run Verification assumes completion |
| IS-14 | All files | IMPLICIT_STOP | HIGH | "terminates" appears 6x; "iterates" appears 0x |
| AL-01 | All files | ABSENT_LOOP | CRITICAL | No Phase 4 exists |
| AL-02 | MANIFEST.md Steps 0-11 | ABSENT_LOOP | CRITICAL | No decision point after verdict |
| AL-03 | MANIFEST.md Appendix E | ABSENT_LOOP | HIGH | No REFINE builder prompt template |
| AL-04 | TRACKER | ABSENT_LOOP | HIGH | No REFINE tracker section |
| AL-05 | All files | ABSENT_LOOP | CRITICAL | No convergence criterion defined |
| AL-06 | All files | ABSENT_LOOP | MODERATE | No gate results comparison mechanism |
| AL-07 | orchestrator.md Sections 2-6 | ABSENT_LOOP | HIGH | No re-entry point in execution sections |
| AL-08 | All files | ABSENT_LOOP | MODERATE | No inter-iteration state management |
| IM-01 | orchestrator.md:89 | INCENTIVE_MISALIGNMENT | CRITICAL | Single-pass framed as achievement |
| IM-02 | orchestrator.md:669 | INCENTIVE_MISALIGNMENT | HIGH | REFINE framed as cost, not investment |
| IM-03 | orchestrator.md:13, 91 | INCENTIVE_MISALIGNMENT | HIGH | Council mandate creates fear of unauthorized iteration |
| IM-04 | TRACKER:488-501 | INCENTIVE_MISALIGNMENT | HIGH | Tracker measures cost, not quality improvement |
| IM-05 | orchestrator.md:44 | INCENTIVE_MISALIGNMENT | MODERATE | Iteration need framed as failure |
| IM-06 | MANIFEST.md:511-513 | INCENTIVE_MISALIGNMENT | HIGH | Artistic impression dead letter |
| IM-07 | orchestrator.md:548 vs 591 | INCENTIVE_MISALIGNMENT | CRITICAL | Same doc says "return" AND "no loops" |

---

## 7. VERDICT

The pipeline has **11 explicit stop signals, 14 implicit stop signals, 8 absent loops, and 7 incentive misalignments** — a total of **40 factors** pushing toward premature termination. Against this, it has **1 buried line** (orchestrator.md:548) suggesting iteration.

**The ratio is 40:1 against iteration.**

The pipeline was not designed to converge. It was designed to CLASSIFY (SHIP / REFINE / REBUILD) and then STOP. The REFINE protocol exists as a conceptual possibility in Section 7, but the entire execution infrastructure (phases, tracker, prompts, naming conventions, dependency graphs, cost estimates, vocabulary) is structurally single-pass.

The 21 remaining refinements were not "left on the table" — the pipeline has no table to put them on. REFINE is an output label, not an execution path. The artistic impression is a dead letter. The convergence loop exists only as Step 5 of a 5-step list in a document that declares "there are NO feedback loops."

**Root cause:** The pipeline was designed during a period when the council mandated single-pass (council ruling Contradiction B). The REFINE protocol was added as a forward-looking feature for when multi-pass would be validated. But the infrastructure was never updated to support it. The result is a pipeline that can identify quality problems but cannot act on them.

---

## 8. CROSS-REFERENCE: Yegge Gas Town Run

In the actual Yegge Gas Town pipeline run (2026-02-25):
- **Pass 1:** PA-05 2.0/4 — REFINE verdict issued
- **REFINE executed:** A different Opus builder WAS spawned with artistic impressions (steps 1-4)
- **Step 5 WAS executed** in this case — but only because the USER manually intervened to request REFINE
- **Pass 2 result:** PA-05 3.5/4 — the largest single-cycle improvement in pipeline history (+1.5 points)

This proves the REFINE mechanism WORKS when executed. The +1.5 improvement validates that iterating is the highest-ROI action available. But the pipeline's architecture does not execute it automatically. The single largest quality improvement in pipeline history occurred because a human overrode the pipeline's stop signals.
