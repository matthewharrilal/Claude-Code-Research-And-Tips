# Final Structural Integrity Audit
**Date:** 2026-02-25
**Auditor:** Opus agent (structural integrity)
**Scope:** All 20 pipeline files — top-down assessment of whether all parts work together as a coherent system
**Method:** Read every file, trace information flow, verify cross-file consistency, simulate execution path

---

## 1. Information Flow Assessment

### SKILL.md -> MANIFEST -> Orchestrator -> Agents

**Path traced:** SKILL.md (100 lines) is the entry point. It instructs the orchestrator to read MANIFEST.md and follow the quickstart procedure (steps 0-11). MANIFEST.md (1,288 lines) defines the routing authority. artifact-orchestrator.md (~1,100 lines) defines the execution authority.

**Finding: HEALTHY.** The separation between routing authority (MANIFEST) and execution authority (orchestrator) is clean. SKILL.md correctly points to MANIFEST.md as the authoritative spec. The quickstart procedure in MANIFEST.md (steps 0-11) maps exactly to the phase-by-phase execution in MANIFEST Section 4. The orchestrator file provides the detailed step-by-step protocol.

**Information channels verified:**
- SKILL.md -> MANIFEST quickstart -> orchestrator sections: **CLEAR**
- MANIFEST Appendix B (file routing quick reference) -> per-agent file list: **CLEAR**
- MANIFEST Appendix D (file paths) -> actual file locations: **VERIFIED** (all paths use `ephemeral/va-extraction/` correctly)
- MANIFEST Appendix E (agent prompts) -> variable slots: **VERIFIED** (see Section 5 below)

### One concern: SKILL.md line 46 says "54 gates -- see gate-manifest.json for canonical tier breakdown" but gate-runner-core.js header (line 20-26) lists a different tier breakdown than gate-manifest.json. See Section 3 for details.

---

## 2. Role Boundaries and Information Isolation

### Builder isolation
**VERIFIED CLEAN.** The builder receives ONLY:
- Execution Brief (~100-165 lines)
- tokens.css (183 lines)
- components.css (~1,195 lines)
- mechanism-catalog.md
- value-tables.md (~262 lines, optional)
- CD-006 reference (optional, COMPOSED mode only)

The builder does NOT receive: gate thresholds, prohibition lists ("Gate check" / "CSS rule" fields from SC tables), pipeline research, PA questions, or any meta-analysis. This is enforced by:
1. MANIFEST Appendix B "What each agent MUST NOT receive" table
2. artifact-identity-perception.md Section 1.2 (world-description only)
3. artifact-tc-brief-template.md (no gate language in template)
4. BV-04 suppressor scan (catches gate-format language leaking into brief)
5. BV-03 recipe format verification (catches checklist language)

### PA Auditor isolation
**VERIFIED CLEAN.** PA Auditors receive ONLY:
- Screenshots (saved PNG files, read via Read tool)
- Their assigned question subset from pa-questions.md
- pa-guardrails.md (evidence format, visual verification, fresh-eyes principle)

PA Auditors do NOT receive: pa-guardrails-weaver.md, pa-weaver.md, execution brief, content map, build intent, or other auditors' reports. pa-guardrails-weaver.md (59 lines) contains pipeline vocabulary (tiers, channels, mechanisms, anti-patterns) and has explicit header text: "PA Auditors must NOT receive this file."

### Weaver isolation
**VERIFIED CLEAN.** The Weaver receives:
- Integrative report
- Gate results (JSON)
- All 9 individual auditor reports
- pa-weaver.md (verdict protocol, calibration)
- pa-guardrails-weaver.md (anti-patterns, revision degradation)

The Weaver does NOT receive: the execution brief, content map, or builder context. This preserves partial fresh-eyes for the Weaver's experiential anchor (Section 0 of pa-weaver.md).

### VIOLATION FOUND: None.
Information isolation is well-designed and consistently enforced across all 20 files.

---

## 3. Gate Architecture Assessment

### Gate Count Consistency

**gate-manifest.json** (canonical): 54 gates total
- REQUIRED: 21 (GR-01-06, GR-08-11, GR-13-15, GR-44, GR-60-64, GR-48, GR-79)
- RECOMMENDED: 13 (GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52, GR-67, GR-78, GR-80, GR-82)
- ADVISORY: 10 (GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53, GR-55, GR-66, GR-81)
- DIAGNOSTIC: 2 (GR-33, GR-34)
- BRIEF VERIFICATION: 7 (BV-01 through BV-07)
- UTILITY: 1 (A-03)
- Sum: 21 + 13 + 10 + 2 + 7 + 1 = **54** CORRECT

**gate-runner-core.js header** (line 20-26):
- REQUIRED (21), RECOMMENDED (13), ADVISORY (10), BRIEF (7)
- In-file executable: 44 GR + 7 BV + 1 utility = 52
- Plus Diagnostic (2): GR-33, GR-34 (report-only, no code)
- **MATCHES** gate-manifest.json

**gate-runner-spec.md** (line 23): "Total executable gates: 54" -- **MATCHES**

**SKILL.md** (line 46, line 50): "54 gates" -- **MATCHES**

**MANIFEST Section 3** (line 248): "54 gate-runner gates (21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BV + 1 UTILITY)" -- **MATCHES**

### DISCREPANCY FOUND: gate-runner-spec.md GATE SUMMARY TABLE (bottom)

The gate-runner-spec.md GATE SUMMARY TABLE at line 257 states: "Tier totals (gate-runner scope): 20 REQUIRED, 10 RECOMMENDED, 9 ADVISORY, 2 DIAGNOSTIC, 5 BRIEF, 1 UTILITY = 47 executable gates."

This does NOT match the canonical counts. The summary table appears to be STALE from a pre-v4 version. The individual gate listings in the spec file DO match (Sections 1-9 list all the correct gates), but the summary line at the bottom has not been updated.

**Severity: LOW.** The spec file explicitly states "see gate-manifest.json for canonical registry" in the first line of the table. gate-manifest.json is authoritative. But the stale count at the end could confuse a human reader.

### Gate-to-Code Coverage

Verified all 22 functions in gate-runner-core.js against gate-manifest.json executionOrder:
- `runBriefVerification`: BV-01 through BV-05 **MATCH**
- `checkAntiRegressionLanguage`: BV-06 **MATCH**
- `runGateRunner`: GR-01 through GR-15, GR-43, GR-44, GR-60, GR-63 **MATCH**
- `runAntiPatternGates`: GR-17 through GR-22 **MATCH**
- `runWave2Gates`: GR-45, GR-46, GR-50-53, GR-55, GR-66, GR-67 **MATCH**
- `runGateCoverage`: GR-48 **MATCH**
- `checkGateResultIntegrity`: GR-49 **MATCH**
- `checkDPR`: GR-61 **MATCH**
- `checkScreenshotQuality`: GR-62 **MATCH**
- `checkUsabilityPriority`: GR-64 **MATCH**
- `checkPredictionSuppression`: GR-81 **MATCH**
- `checkFindingStatusMap`: GR-82 **MATCH**
- `checkBuilderInputVolume`: BV-07 **MATCH**
- `checkResidualArtifact`: GR-78 **MATCH**
- `checkRefineCompletion`: GR-79 **MATCH**
- `checkIterationLogAutoFill`: GR-80 **MATCH**
- `checkVisibleContent`: A-03 **MATCH**
- Wrapper functions: `runPhase3Gates`, `runPostWeaverGates`, `runMetaGates`, `runAllGates` **PRESENT**
- `elementLevelScreenshotFallback`: utility helper **PRESENT**

**GR-33 and GR-34** (mode detection): Listed as DIAGNOSTIC in gate-manifest.json. Code present in `runGateRunner` function. **VERIFIED.**

### Execution Order Consistency

gate-manifest.json executionOrder defines steps 0, 1, 1.5, 2, 2.5, 2.7, 2.8, 3, 4, 5, 5.5, 5.7, 5.8, 5.85, 5.9, 6.

Cross-checked against MANIFEST Section 4 phase-by-phase execution and artifact-orchestrator.md section flow. All phases and steps align.

**FINDING: BV-06 (step 0) runs at "Pipeline startup (Pre-Phase 0)"** per gate-manifest.json. This is BEFORE the quickstart step 1 in MANIFEST. The MANIFEST quickstart does not mention BV-06. However, SKILL.md also does not mention it. The gate-manifest.json is the authoritative execution order. This is a minor documentation gap -- the pipeline will work correctly because gate-runner-core.js includes the function, but a human orchestrator following only the MANIFEST quickstart might skip BV-06.

**Severity: MEDIUM.** BV-06 should be mentioned in MANIFEST quickstart step 1 or as step 0.

---

## 4. Iteration Architecture Assessment

### REFINE/REBUILD Cycle Traced End-to-End

**Path: Verdict -> Decision Function -> REFINE Protocol -> Builder Spawn -> Gate Re-run -> PA Re-deployment -> Weaver -> Verdict**

1. **Weaver issues REFINE** (pa-weaver.md Section 5.2, MANIFEST Phase 3C): Weaver produces TWO outputs -- diagnostic verdict (for orchestrator) + artistic impression (for REFINE builder). **VERIFIED.**

2. **Orchestrator decision function** (artifact-orchestrator.md Section 7, "SECTION 8: REFINE AND REBUILD PROTOCOLS"): REFINE protocol specifies:
   - Spawn DIFFERENT Opus builder
   - Builder receives: conviction artifact + artistic impression + RESIDUAL + brief + Pass 1 HTML
   - Builder does NOT receive: gate scores, threshold numbers, fix lists
   - **VERIFIED** in MANIFEST Appendix E REFINE Builder Prompt template

3. **Builder spawn** (MANIFEST Appendix E, REFINE Builder Prompt): Template includes all 5 required inputs as `{VARIABLE}` placeholders. Builder is instructed to use "generative verbs" not "diagnostic verbs." Must include own `<!-- RESIDUAL: ... -->` comment. **VERIFIED.**

4. **Gate re-run**: MANIFEST quickstart step 11 says "RETURN TO PHASE 3 FOR FULL RE-AUDIT." This means: serve new HTML, capture new screenshots, run all gates again, deploy all 9 PA auditors again, spawn new Integrative, spawn new Weaver. **VERIFIED** in artifact-orchestrator.md.

5. **PA re-deployment**: pa-deployment.md Section 5.2 confirms "For cycle >= 2, include the Finding Status Map" for the Weaver. pa-weaver.md Section 5.5 defines the Finding Status Map (FIXED/IMPROVED/UNCHANGED/REGRESSION). GR-82 enforces this. **VERIFIED.**

6. **REFINE output artifacts**: SKILL.md line 91 states "All REFINE artifacts use `-refine` suffix." GR-79 (`checkRefineCompletion`) verifies `-refine` files exist. GR-80 (`checkIterationLogAutoFill`) auto-fills the iteration log in the tracker. **VERIFIED.**

7. **Iteration budget**: MANIFEST quickstart line 42: "1 REBUILD + 2 REFINE passes maximum. Stop when PA-05 delta < 0.3 between passes." MANIFEST Section 6: "40-60% of builds will use at least one REFINE cycle." **CONSISTENT.**

### FINDING: REBUILD path underspecified

The REBUILD path (pa-weaver.md Section 5.3) says "FRESH Opus builder in COMPOSING mode, reads previous conviction artifact." But MANIFEST Appendix E does NOT include a REBUILD Builder Prompt template. It only has a REFINE Builder Prompt.

The MANIFEST quickstart step 11 says "If REBUILD: execute REBUILD protocol (artifact-orchestrator.md Section 7) -- full Phase 0-3 re-execution." This implies the orchestrator re-runs the entire pipeline from Phase 0, using a fresh Content Analyst, Brief Assembler, and Builder. But the exact prompt template for a REBUILD (which must differ from a fresh first-pass because it should receive the failed conviction artifact as context) is missing.

**Severity: MEDIUM.** REBUILD is the rare case (PA-05 < 2.5 or identity gate FAIL). A competent orchestrator can construct the prompt from the REBUILD protocol description, but the absence of a template creates ambiguity about exactly what the REBUILD builder receives. Compare to the REFINE path which has an explicit template.

### FINDING: GR-78 (Builder Residual Artifact) validation

GR-78 checks for `<!-- RESIDUAL: ... -->` in the HTML. This is a RECOMMENDED gate that validates the REFINE builder included its rationale. The Builder Prompt (Phase 2, first pass) does NOT mention RESIDUAL -- it only mentions CONVICTION and SELF-EVALUATION. The REFINE Builder Prompt explicitly requires RESIDUAL. This is correct: RESIDUAL is a REFINE-only artifact. **VERIFIED.**

But GR-78 has `step: 5.8` (post-verdict iteration check, cycle >= 2). If it runs for cycle 1, it would always FAIL because first-pass builders do not produce RESIDUAL. The gate-manifest.json note says "Run for cycle >= 2 (REFINE builds must include RESIDUAL comment)." The code must check iteration cycle before applying. Let me verify...

The function `checkResidualArtifact(htmlText)` (gate-runner-core.js) takes only htmlText, with no cycle parameter. If called on cycle 1, it would FAIL on the first-pass HTML. However, gate-manifest.json executionOrder places it at step 5.8 "Post-verdict iteration check (cycle >= 2 only)" -- the "cycle >= 2 only" note means the orchestrator should skip it for the first pass. This is an orchestrator-level guard, not a code-level guard.

**Severity: LOW.** The orchestrator must read gate-manifest.json to know to skip GR-78 for cycle 1. A naive "run all gates" call would produce a false FAIL. However, the `runAllGates` wrapper does NOT include GR-78 (it's not in runPhase3Gates). It must be called separately by the orchestrator, so the orchestrator naturally controls when it runs.

---

## 5. Template Completeness Assessment

### MANIFEST Appendix E Variable Slots

**Content Analyst Prompt:**
- `{RAW_CONTENT_MARKDOWN}` -- filled by orchestrator from user-provided content path. **FILLABLE.**

**Brief Assembler Prompt:**
- `{APPLIED or COMPOSED}` -- filled by orchestrator after Phase 0.5 mode selection. **FILLABLE.**
- `{CONTENT_MAP}` -- filled from Phase 0 output. **FILLABLE.**

**Builder Prompt:**
- `{EXECUTION_BRIEF_FROM_PHASE_1}` -- filled from Phase 1 output. **FILLABLE.**
- `{tokens.css content}` -- read from file. **FILLABLE.**
- `{components.css content}` -- read from file. **FILLABLE.**
- `{mechanism-catalog.md content}` -- read from file. **FILLABLE.**
- `{value-tables.md content}` -- read from file. **FILLABLE.**

**PA Auditor Prompt:**
- `{LETTER}` -- filled per auditor A-I. **FILLABLE.**
- `{SPECIALTY}` -- filled from pa-deployment.md Section 1.2. **FILLABLE.**
- `{ASSIGNED_QUESTIONS}` -- filled from pa-deployment.md auditor assignments. **FILLABLE.**
- `{List of screenshot file paths}` -- filled from screenshot capture output. **FILLABLE.**

**Integrative Auditor Prompt:**
- `{all 9 reports}` -- filled from Phase 3B output files. **FILLABLE.**
- `{file paths}` -- filled from screenshot capture. **FILLABLE.**

**Weaver Prompt:**
- `{pa-guardrails-weaver.md content}` -- read from file. **FILLABLE.**
- `{integrative_report}` -- filled from Integrative output. **FILLABLE.**
- `{gate_results_json}` -- filled from Phase 3A gate runner JSON. **FILLABLE.**
- `{all 9 reports}` -- filled from Phase 3B. **FILLABLE.**

**REFINE Builder Prompt:**
- `{CONVICTION_FROM_PASS_1}` -- extracted from Pass 1 HTML (grep `<!-- CONVICTION:`). **FILLABLE.**
- `{WEAVER_ARTISTIC_IMPRESSION}` -- from Weaver Output B. **FILLABLE.**
- `{RESIDUAL_FROM_PASS_1}` -- extracted from Pass 1 HTML (grep `<!-- RESIDUAL:`). **FILLABLE** (but only if Pass 1 had a RESIDUAL, which is not required for first-pass builders. See note below.)
- `{EXECUTION_BRIEF}` -- from Phase 1 output. **FILLABLE.**
- `{PASS_1_HTML}` -- from Phase 2 output. **FILLABLE.**

### FINDING: RESIDUAL slot in REFINE prompt for first REFINE

The REFINE Builder Prompt includes `{RESIDUAL_FROM_PASS_1}`. For the first REFINE (cycle 2), the Pass 1 builder was not instructed to produce a RESIDUAL comment. The Builder Prompt (Phase 2) requires only CONVICTION and SELF-EVALUATION. So `{RESIDUAL_FROM_PASS_1}` would be empty for the first REFINE cycle.

This is a minor gap: the REFINE builder is told to read "The RESIDUAL artifact (<!-- RESIDUAL: ... --> from Pass 1 HTML)" but the Pass 1 HTML may not have one. The REFINE builder prompt should handle this gracefully (e.g., "if no RESIDUAL exists, skip").

**Severity: LOW.** The REFINE builder receiving an empty string for RESIDUAL will not break anything. It just won't have that context.

---

## 6. Tracker Completeness Assessment

### EXECUTION-TRACKER-TEMPLATE.md

The tracker has sections for:
- Build Metadata (6 fields)
- Phase 0: Content Analysis (4 items)
- Phase 1: Brief Assembly (5 items)
- Phase 2: Build (6 items)
- Phase 3A: Screenshots + Gates (8 items)
- Phase 3B: Perceptual Audit (9 auditor rows + 4 items)
- Phase 3C: Verdict (7 items)
- REFINE Phase (7 items)
- Iteration State (1 item)
- Iteration Log (3 cycle rows)
- Gate Failure Triage (auto-populated from failures)
- Orchestrator Self-Assessment (5 items)
- Output Files (10 rows)
- Derived Phase Completion (7 phase rows)

**Total: 59 fields** per the tracker's own count.

### Auto-fill vs Manual Analysis

Fields marked **(auto)** are mechanically fillable:
- BUILD_DATE, CONTENT_PATH, SLUG, PIPELINE_START from preflight
- Content Map lines, Content Type, Brief lines from `wc -l`
- HTML lines, CSS lines from gate runner
- BV gates from BV JSON
- Screenshot count, DPR, screenshot quality from gate runner
- Gate results from unified JSON
- GR-48 from meta-gate
- Auditor spawned/report timestamps
- PA-05, Tier 5, verdict from Weaver output
- Output file existence checks

Fields marked **(manual)** require orchestrator judgment:
- Mode determination (APPLIED/COMPOSED)
- Content-form fit rationale
- BV revision cycle count
- Builder model justification (if non-Opus)
- Experiential scan results
- Gate failure triage (INTENTIONAL/FALSE-POS/GENUINE)

### FINDING: GR-80 (Iteration Log Auto-Fill) integration

GR-80 (`checkIterationLogAutoFill`) is a WRITE gate that returns modified tracker text with the iteration log table auto-filled. This gate takes `(trackerText, iterationCycle, pa05Score, tier5Score, gatePassPercent, fixCount, verdict, decision)` as parameters. The orchestrator must call this explicitly and write the returned text back to the tracker file.

This is well-designed but places responsibility on the orchestrator to:
1. Read the current tracker text
2. Call GR-80 with all 7 parameters
3. Write the returned text back to the tracker file

These parameters are all available from pipeline outputs (Weaver diagnostic for PA-05/Tier 5/verdict, gate JSON for pass %, Weaver for fix count). **VERIFIED as fillable.**

### FINDING: Tracker does not capture BV-06 result

BV-06 (Anti-Regression Language Scan) runs at pipeline startup (step 0, pre-Phase 0). The tracker has no explicit field for BV-06 results. The "BV gates: ___/4 PASS" field in Phase 1 counts BV-01 through BV-04. BV-05, BV-06, and BV-07 are not explicitly tracked.

**Severity: LOW.** BV-06 is a one-time check that either passes (pipeline continues) or fails (pipeline halts). If it passes, the pipeline starts; if it fails, there's no build to track. Similarly, BV-07 runs pre-build and blocks if it fails. But the tracker should ideally capture all 7 BV results for complete accountability.

---

## 7. Cross-File Consistency Assessment

### Gate Count Consistency
| Source | Total | REQ | REC | ADV | DIAG | BV | UTIL |
|--------|-------|-----|-----|-----|------|----|----|
| gate-manifest.json | 54 | 21 | 13 | 10 | 2 | 7 | 1 |
| gate-runner-core.js header | 54 | 21 | 13 | 10 | 2 | 7 | 1 |
| gate-runner-spec.md (body) | 54 | 21 | 13 | 10 | 2 | 7 | 1 |
| gate-runner-spec.md (summary table) | **47** | **20** | **10** | **9** | **2** | **5** | **1** |
| MANIFEST Section 3 | 54 | 21 | 13 | 10 | 2 | 7 | 1 |
| SKILL.md | 54 | -- | -- | -- | -- | -- | -- |

**DISCREPANCY: gate-runner-spec.md summary table is stale.** All other sources agree.

### PA Question Count Consistency
| Source | Total Questions | Auditors |
|--------|----------------|----------|
| MANIFEST Section 2 | 69 | 9 (A-I) |
| pa-deployment.md Section 1.2 | 69 | 9 (A-I) |
| pa-manifest.md | 69 | 9 (A-I) |
| pa-guardrails.md | 69 | 9 (A-I) |

Per-auditor assignment counts:
| Auditor | MANIFEST | pa-deployment | Match? |
|---------|----------|---------------|--------|
| A | 9 | 9 | YES |
| B | 8 | 8 | YES |
| C | 10 | 10 | YES |
| D | 11 | 11 | YES |
| E | 7 | 7 | YES |
| F | 5 | 5 | YES |
| G | 8 | 8 | YES |
| H | 5 | 5 | YES |
| I | 6 | 6 | YES |
| **Total** | **69** | **69** | **YES** |

### File Path Consistency

MANIFEST Appendix D lists 22 pipeline artifact files. Cross-checked against SKILL.md file table: all 22 files listed in SKILL.md match MANIFEST Appendix D paths. SKILL.md also lists 5 gate-runner split files and 6 PA split files -- all match MANIFEST.

### Line Count Consistency

| File | MANIFEST Appendix D | Actual (approximate) |
|------|---------------------|----------------------|
| gate-runner-core.js | ~1,626 lines | ~2,270 lines (grew due to v4 + convergence reframe) |
| gate-runner-spec.md | ~223 lines | ~266 lines |
| pa-questions.md | ~431 lines | ~431 lines |
| pa-deployment.md | ~363 lines | ~377 lines |
| pa-weaver.md | ~455 lines | ~467 lines |
| pa-guardrails.md | ~113 lines | ~114 lines |
| pa-guardrails-weaver.md | ~59 lines | ~60 lines |
| pa-manifest.md | 89 lines | ~90 lines |
| EXECUTION-TRACKER-TEMPLATE.md | ~595 lines | ~163 lines |

**DISCREPANCY: gate-runner-core.js**. MANIFEST says ~1,626 lines but SKILL.md line 46 says ~2,270 lines. The actual file has grown from v3 (1,626) to v4+convergence (2,270). SKILL.md has the updated count. MANIFEST Appendix D has the stale count.

**DISCREPANCY: EXECUTION-TRACKER-TEMPLATE.md**. MANIFEST says ~595 lines but the actual file is ~163 lines. The 595-line number appears to be the old tracker before Wave 3 cleanup. This is a stale reference.

**Severity: LOW.** Line counts are informational. The files themselves are correct and functional. But stale line counts can mislead an orchestrator estimating token budgets.

### Section Reference Consistency

MANIFEST Section 7 "Critical Sections Index" references specific section headers in each artifact file. Spot-checked:
- artifact-orchestrator.md "SECTION 0: MASTER EQUATION AND PRECONDITIONS" -- **EXISTS**
- artifact-orchestrator.md "SECTION 7: VERDICT AND DECISION TREE" -- **EXISTS** (mapped in orchestrator file)
- pa-deployment.md "Screenshot Pre-Capture Pattern" -- **EXISTS** (Section 2)
- artifact-routing.md "Phase 0: Content Analysis Protocol" -- **EXISTS** (TOC #1)
- artifact-routing.md "Brief Template Structure" -- **EXISTS** (TOC #10)

### Verdict Logic Consistency

Three files define verdict logic:
1. **MANIFEST Phase 3C** (lines 505-525): 8-rule priority list
2. **gate-manifest.json** `verdictLogic` field: 6 verdict categories
3. **pa-weaver.md** Section 5.1: Ship thresholds
4. **gate-runner-spec.md** Section "Verdict Logic": 7 rules

All four are **CONSISTENT** on the core rules:
- Identity FAIL = REBUILD (with MECHANICAL exception)
- Perception FAIL = REFINE
- 3+ recommended FAIL = REBUILD
- PA-05 >= 3.5 + all gates PASS = SHIP
- PA-05 >= 3.0 + MECHANICAL only + <= 3 fixes = SHIP WITH FIXES
- PA-05 2.5-3.5 = REFINE
- PA-05 < 2.5 = REBUILD

MANIFEST adds PRIORITY 0 (experiential findings override), which is also in pa-weaver.md Section 0 and the Weaver prompt template. **CONSISTENT.**

---

## 8. Issues Summary

### BLOCKING Issues (would cause pipeline failure)
**None found.** The pipeline architecture is structurally sound and all critical paths are connected.

### SIGNIFICANT Issues (should fix before next run)

1. **REBUILD prompt template missing** (Appendix E). The REFINE builder has a full template; the REBUILD path (full Phase 0-3 re-execution) does not. An orchestrator could construct this from the existing Phase 2 template, but the explicit template is absent. **RECOMMENDATION:** Add a REBUILD section to Appendix E that specifies how the previous conviction artifact is incorporated into a fresh Phase 0-3 run.

2. **BV-06 not mentioned in MANIFEST quickstart.** BV-06 (Anti-Regression Language Scan) runs at pipeline startup but is invisible in the quickstart procedure. An orchestrator following the quickstart would skip it. **RECOMMENDATION:** Add "Step -1: Run BV-06 against MANIFEST.md and artifact-orchestrator.md" to the quickstart, or add a note to Step 1.

### MINOR Issues (cosmetic/documentation)

3. **gate-runner-spec.md summary table stale** (counts 47 instead of 54). Body text is correct; summary at bottom is wrong.

4. **MANIFEST Appendix D line counts stale** for gate-runner-core.js (1,626 vs 2,270) and EXECUTION-TRACKER-TEMPLATE.md (595 vs 163).

5. **RESIDUAL slot empty on first REFINE.** The REFINE Builder Prompt references `{RESIDUAL_FROM_PASS_1}` but first-pass builders don't produce RESIDUAL. Not a functional issue but could confuse the REFINE builder.

6. **Tracker BV field counts only BV-01 through BV-04** ("___/4 PASS"), not the full BV-01 through BV-07 suite.

7. **SKILL.md says "9 artifact files"** (line 5, 29) but the actual count of distinct operational files is much larger (9 original artifacts + 5 gate-runner splits + 6 PA splits + 3 support files = 23). The "9 artifacts" refers to the original routing-table files but is potentially misleading since the splits created additional files. SKILL.md's file tables are comprehensive (listing all files), so this is cosmetic.

---

## 9. Structural Health Assessment

### Strengths

1. **Authority hierarchy is clean.** SKILL.md -> MANIFEST (routing) -> orchestrator (execution) -> artifact files (role-specific). No circular dependencies.

2. **Information isolation is robust.** Builder, PA Auditors, and Weaver each have strictly defined input scopes with explicit exclusion lists and enforcement gates (BV-04, BV-03).

3. **Gate architecture is comprehensive and well-documented.** 54 gates across 5 tiers with clear execution order, verdict logic, and exception patterns. gate-manifest.json serves as a single source of truth.

4. **Iteration architecture is well-designed.** REFINE path has full template, explicit isolation (no gate scores to builder), -refine suffix convention, iteration log auto-fill, diminishing returns detection (PA-05 delta < 0.3), and budget limits (1 REBUILD + 2 REFINE).

5. **The DUAL-ROUTE pattern is consistently applied.** Soul constraints go to builder (world-description) AND gates (binary checks). Perception thresholds go to builder (calibration table) AND gates (binary checks). Different framing for different purposes, zero leakage.

6. **Experiential pass enforcement is well-positioned.** Section 0 in both pa-deployment.md and pa-weaver.md, embedded in prompt templates at primacy position, with GR-63/GR-64 as code-level enforcement.

7. **Self-correcting mechanisms.** BV gates catch brief quality before builder sees it. GR-48 meta-gate catches missing gate results. GR-82 catches missing Finding Status Map in iterations. GR-80 auto-fills the iteration log.

### Weaknesses

1. **Documentation drift.** Several files have stale numbers (gate-runner-spec summary table, MANIFEST line counts, tracker BV count). This is the natural result of rapid v4 + convergence reframe development. Not blocking but creates trust erosion.

2. **REBUILD path underspecified.** The rare-case path (PA-05 < 2.5 or identity failure) lacks an explicit prompt template and specific instructions for incorporating the failed conviction artifact.

3. **BV-06 invisible in quickstart.** Pre-Phase 0 gate exists in code and manifest but not in the primary human-facing procedure.

---

## Overall Structural Health Score: **8/10**

**Justification:** The pipeline architecture is fundamentally sound. Information flow is clean, role boundaries are well-enforced, gate architecture is comprehensive with a single source of truth, iteration support is well-designed, and all critical paths work end-to-end. The two SIGNIFICANT issues (REBUILD template missing, BV-06 invisible in quickstart) are real gaps but neither would cause a pipeline failure on a typical run -- REBUILD is rare (PA-05 < 2.5) and BV-06 is a one-time regression check. The MINOR documentation drift issues are the expected result of rapid iteration and do not affect operational correctness. Deducting 1 point for the REBUILD gap and 1 point for cumulative documentation drift.

For a production-grade pipeline orchestrated by an LLM agent, this is a healthy structural state. The next priority should be updating stale numbers (30-minute task) and adding the REBUILD prompt template (15-minute task).
