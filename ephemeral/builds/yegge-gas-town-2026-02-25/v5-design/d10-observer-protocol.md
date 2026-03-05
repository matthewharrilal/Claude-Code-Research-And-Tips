# D10: Observer Agent Protocol
## Breaking the Player-Referee Conflation

Date: 2026-02-26
Status: DESIGN COMPLETE — Research Only
Crack Dimension: D10 (Self-Assessment Unreliability)

---

## 1. Problem Statement

The orchestrator simultaneously:
1. **Executes** pipeline steps (spawning agents, running gates, capturing screenshots)
2. **Decides** which steps matter (mode selection, iteration decisions)
3. **Evaluates** its own work (experiential scan, BEFORE checklist)
4. **Records** whether it did things correctly (execution tracker)

The BEFORE checklist (Section 7, artifact-orchestrator.md) asks yes/no questions — but the orchestrator answers them about its own behavior. This is structurally identical to a student grading their own exam. The execution tracker fields (59 total) are self-reported. No independent verification exists.

**Historical evidence:** In the Gas Town build (2026-02-25), the orchestrator passed illegible chart text through to PA audit without flagging it in the experiential scan. The self-assessment mechanism failed precisely when it was needed most.

---

## 2. Solution: Observer Agent

A dedicated Opus agent spawned at pipeline start that independently watches the orchestrator and verifies compliance. The observer has **no pipeline execution responsibilities** — its only job is to watch, verify, and report.

### 2.1 Core Principle: Separation of Concerns

| Role | Orchestrator | Observer |
|------|-------------|----------|
| Execute pipeline steps | YES | NO |
| Decide which steps to take | YES | NO |
| Evaluate quality of decisions | NO (conflicted) | YES |
| Record execution state | YES (primary) | YES (verification shadow) |
| Halt the pipeline | NO (runs it) | YES (STOP authority for BLOCKING) |

The observer is the referee. The orchestrator is the player. They never switch roles.

---

## 3. Protocol Specification

### 3.1 Spawn Timing

**When:** The observer is the FIRST agent spawned — before the Content Analyst, before any Phase 0 work. It runs for the full pipeline lifecycle.

**Why early:** The observer needs to verify Phase 0 preconditions, Mode Selection, and BV gate execution. If spawned later, these early phases are unobserved.

**Lifecycle:** The observer runs continuously. It does NOT wait for instructions — it polls the build output directory on a fixed schedule (after each phase completes) and reads files as they appear.

**Spawn mechanism:** The orchestrator spawns the observer with `Task` tool, `subagent_type: "Opus"`, providing ONLY the build output directory path and the observer protocol. The observer receives NO pipeline context, NO build intent, NO content map. It observes from artifacts only.

### 3.2 What the Observer Monitors

The observer checks 7 categories of compliance. Each check is BINARY (PASS/FAIL) — no judgment calls.

#### Category 1: Experiential Scan Verification

| Check ID | What | How | Severity |
|----------|------|-----|----------|
| OBS-01 | Experiential scan results recorded before PA deployment | Read execution tracker: `EXPERIENTIAL_SCAN` field must be non-empty AND PA auditor spawn timestamps must be AFTER the tracker update timestamp | BLOCKING |
| OBS-02 | Experiential scan covers all 4 sub-fields | Read tracker fields P3A+-1a through P3A+-1d: all must be non-empty | SIGNIFICANT |
| OBS-03 | Experiential scan time is plausible | Timestamp between screenshot completion and PA deployment must be >= 90 seconds (a genuine scan cannot be faster) | SIGNIFICANT |
| OBS-04 | Visual verification language used | Scan experiential scan text for PIXEL-BASED language ("I see", "pixels show", "rendered as") vs CODE-BASED language ("HTML contains", "CSS sets", "the source code"). Code-based = FAIL | SIGNIFICANT |

**Verification method:** The observer reads the execution tracker file and checks timestamps + field contents. It cannot observe the orchestrator's internal state, but it CAN verify the artifacts the orchestrator is required to produce.

#### Category 2: BEFORE Checklist Verification (REFINE Protocol)

| Check ID | What | How | Severity |
|----------|------|-----|----------|
| OBS-05 | BEFORE checklist answered before REFINE builder spawn | If REFINE occurs: read tracker for REFINE section fields, verify all filled BEFORE REFINE builder spawn timestamp | BLOCKING |
| OBS-06 | REFINE builder is different agent | Compare builder agent description/spawn context between Pass 1 and REFINE. If identical prompt text detected, flag | BLOCKING |
| OBS-07 | REFINE builder received correct inputs | Read the REFINE builder's input files (conviction + artistic + RESIDUAL + brief + Pass 1 HTML). Verify: NO gate scores, NO threshold numbers, NO fix lists, NO diagnostic vocabulary ("fix", "repair", "address", "correct") | BLOCKING |
| OBS-08 | RESIDUAL artifact exists | Grep Pass 1 HTML for `<!-- RESIDUAL:` comment. Must be >= 50 chars and contain >= 3 of 4 required sections | SIGNIFICANT |
| OBS-09 | Post-REFINE re-audit happened | Verify `-refine` suffixed PA reports exist in output directory (9 reports). Verify `-refine` gate results exist | BLOCKING |

**Verification method:** The observer reads output files. For OBS-07 (isolation), it reads the REFINE builder's prompt/input files and searches for prohibited content. This is the highest-value check — REFINE isolation violation is the most consequential orchestrator error.

#### Category 3: Screenshot Protocol Verification

| Check ID | What | How | Severity |
|----------|------|-----|----------|
| OBS-10 | Screenshots cover all 3 viewports | Count directories under `screenshots/`: must have `1440/`, `1024/`, `768/` | BLOCKING |
| OBS-11 | Each viewport has cold-look + scroll-through | Each viewport dir must contain `cold-look.png` + at least 3 `scroll-*.png` files | BLOCKING |
| OBS-12 | Screenshot count is plausible | Total screenshots >= 24 (minimum per pa-deployment.md Section 2.1.1) | SIGNIFICANT |
| OBS-13 | DPR validation ran | Read gate results for GR-61: must be PASS | SIGNIFICANT |
| OBS-14 | Screenshot quality gate ran | Read gate results for GR-62: must exist (PASS or FAIL) | SIGNIFICANT |

**Verification method:** File system inspection (`ls` on screenshot directories) + gate result JSON parsing.

#### Category 4: BV Gate Execution

| Check ID | What | How | Severity |
|----------|------|-----|----------|
| OBS-15 | BV-01 through BV-05 all ran | Read execution tracker: `BV gates` field must show results for all 5 | BLOCKING |
| OBS-16 | BV-06 ran at pipeline startup | Read tracker or gate results for BV-06 (anti-regression language scan). Must be present with result | SIGNIFICANT |
| OBS-17 | BV-07 ran before builder spawn | Read tracker or gate results for BV-07 (builder input volume ceiling). Must be present with result AND timestamp before builder spawn | SIGNIFICANT |
| OBS-18 | BV failures triggered revision | If any BV gate FAILED: verify a revised brief exists (evidence of revision cycle) | BLOCKING |

#### Category 5: PA Deployment Verification

| Check ID | What | How | Severity |
|----------|------|-----|----------|
| OBS-19 | All 9 PA auditors deployed | Count `p3b-pa-auditor-*.md` files: must be exactly 9 (A through I) | BLOCKING |
| OBS-20 | Integrative spawned after all 9 reports | Verify `p3b-pa-integrative.md` exists AND its creation timestamp is after the latest `p3b-pa-auditor-*.md` timestamp | BLOCKING |
| OBS-21 | PA auditors did NOT receive pipeline context | Sample-check 2 random auditor reports for ABSENCE of: build intent language, content map references, mechanism count expectations, pipeline vocabulary ("BV", "GR-", "suppressor", "disposition D-"). If present = fresh-eyes violation | BLOCKING |
| OBS-22 | PA auditor model = Opus | Read tracker Phase 3B auditor table: all entries should indicate Opus (if model info recorded). If not recorded, flag as INCOMPLETE | SIGNIFICANT |
| OBS-23 | Completion manifests present | Spot-check 3 random auditor reports for `## Completion Manifest` section at end | SIGNIFICANT |

#### Category 6: Gate Runner Execution

| Check ID | What | How | Severity |
|----------|------|-----|----------|
| OBS-24 | Gate results file exists | Verify `p3a-gate-results*.json` exists in output directory | BLOCKING |
| OBS-25 | Gate count is plausible | Parse gate results JSON: total gate count should be >= 40 (out of 54 total, allowing some SKIP) | SIGNIFICANT |
| OBS-26 | GR-48 (meta-gate) ran | Gate results must include GR-48 with a result | BLOCKING |
| OBS-27 | No manual gate results | Scan gate results for `source: "manual"` — count should be 0. Any manual results indicate the orchestrator fabricated gate outputs | BLOCKING |

#### Category 7: Tracker Completeness

| Check ID | What | How | Severity |
|----------|------|-----|----------|
| OBS-28 | Tracker fill rate | Count non-empty fields in execution tracker / total fields. Must be >= 80% at pipeline end | SIGNIFICANT |
| OBS-29 | No contradictory timestamps | Phase timestamps must be monotonically increasing: P0 < P1 < P2 < P3A < P3B < P3C | SIGNIFICANT |
| OBS-30 | Output files table matches reality | For each entry in the tracker's "Output Files" table: verify the file exists at the listed path | SIGNIFICANT |

**Total: 30 binary checks** (11 BLOCKING, 19 SIGNIFICANT).

### 3.3 Verification Schedule

The observer does NOT run continuously in real-time. It performs discrete verification passes at phase boundaries:

| Pass | Trigger | Checks |
|------|---------|--------|
| **Pass 0** | After Phase 0 completes (Content Map exists) | OBS-16 (BV-06 at startup) |
| **Pass 1** | After Phase 1 completes (Execution Brief exists) | OBS-15, OBS-17, OBS-18 |
| **Pass 2** | After Phase 3A completes (screenshots + gate results exist) | OBS-01 through OBS-04, OBS-10 through OBS-14, OBS-24 through OBS-27 |
| **Pass 3** | After Phase 3B completes (all PA reports exist) | OBS-19 through OBS-23 |
| **Pass 4** | After Phase 3C completes (Weaver verdict exists) | OBS-26, OBS-28 through OBS-30 |
| **Pass R** | After REFINE completes (if applicable) | OBS-05 through OBS-09, then repeat Pass 2-4 for REFINE artifacts |

### 3.4 STOP Authority

The observer has two levels of authority:

**STOP (BLOCKING violations):** The observer writes a `OBSERVER-STOP.md` file to the build output directory with the violation details. The orchestrator is REQUIRED to check for this file before each phase transition. If the file exists, the orchestrator MUST stop and address the violation before proceeding.

**FLAG (SIGNIFICANT violations):** The observer records these in its report but does NOT halt the pipeline. They appear in the final observer report for post-run analysis.

**STOP criteria (any one triggers STOP):**
- REFINE builder received gate scores or diagnostic vocabulary (OBS-07)
- Fewer than 9 PA auditor reports exist when Integrative is spawned (OBS-20)
- PA auditor reports contain pipeline context (OBS-21, fresh-eyes violation)
- Gate results were fabricated manually (OBS-27)
- BV gates did not run before builder spawn (OBS-15)
- Experiential scan not recorded before PA deployment (OBS-01)
- REFINE re-audit did not happen (OBS-09)
- Screenshots missing for any viewport (OBS-10, OBS-11)
- Gate results file missing (OBS-24)

**Implementation:** The orchestrator checks `ls OBSERVER-STOP.md 2>/dev/null` before each phase transition. This is a 1-line check that adds near-zero overhead.

### 3.5 Communication Protocol

| Channel | Direction | Purpose |
|---------|-----------|---------|
| `OBSERVER-STOP.md` | Observer -> Orchestrator | BLOCKING violation halt signal |
| `OBSERVER-REPORT.md` | Observer -> Build Output | Final comprehensive report |
| `OBSERVER-PASS-{N}.md` | Observer -> Build Output | Per-pass verification results (intermediate) |
| Execution Tracker | Orchestrator -> Observer (read-only) | Primary data source for verification |
| Output files | Orchestrator -> Observer (read-only) | Artifact existence and content verification |

**The observer never sends messages to the orchestrator via SendMessage.** All communication is file-based. This prevents the orchestrator from influencing the observer through conversational manipulation.

### 3.6 Observer Independence Protections

The observer is also an LLM. These safeguards prevent orchestrator influence:

1. **Minimal context at spawn:** Observer receives ONLY the build directory path + this protocol. No pipeline context, no build intent, no "here's what we're trying to accomplish."
2. **File-only data source:** Observer reads files from disk. It never receives orchestrator summaries or explanations.
3. **No conversational channel:** Observer and orchestrator never exchange messages. The observer cannot be talked into leniency.
4. **Binary checks only:** Every check is PASS/FAIL with explicit criteria. No "does this seem reasonable?" judgments.
5. **Immutable protocol:** The observer's protocol is defined before pipeline start. The orchestrator cannot modify the observer's checks mid-run.
6. **Separate spawn:** Observer is spawned via Task tool as a fully independent agent. It has its own context window with no shared state with the orchestrator.

### 3.7 Observer Report Format

Written to `{BUILD_DIR}/OBSERVER-REPORT.md` after the final phase completes.

```markdown
# Observer Verification Report
## Build: {SLUG} — {DATE}

### Summary
- Total checks: 30
- PASS: NN
- FAIL: NN (NN BLOCKING, NN SIGNIFICANT)
- SKIP: NN (not applicable, e.g., REFINE checks when no REFINE occurred)
- Observer compliance rate: NN%

### BLOCKING Failures (pipeline should NOT have continued)
| Check ID | Description | Evidence | Phase |
|----------|-------------|----------|-------|
| OBS-XX   | ...         | ...      | ...   |

### SIGNIFICANT Failures (quality/process concerns)
| Check ID | Description | Evidence | Phase |
|----------|-------------|----------|-------|
| OBS-XX   | ...         | ...      | ...   |

### Pass-by-Pass Detail
#### Pass 0: Post-Phase 0
...
#### Pass 1: Post-Phase 1
...
(etc.)

### Timestamps
| Event | Timestamp |
|-------|-----------|
| Observer spawned | ... |
| Pass 0 complete | ... |
| Pass 1 complete | ... |
| ... | ... |
| Final report written | ... |

### Recommendations
- [Specific process improvements based on findings]
```

### 3.8 Overhead Budget

| Activity | Added Time | Added Cost |
|----------|-----------|------------|
| Observer spawn (once) | ~1 min | 1 Opus agent |
| Per-pass verification (5 passes) | ~2 min each, ~10 min total | Same agent, sequential reads |
| STOP check per phase (6 checks) | ~5 sec each, ~30 sec total | Orchestrator `ls` call |
| **Total overhead** | **~12 min** | **1 additional Opus agent** |

Against a baseline of 80-105 min and 15 agents, this is a 12-15% time increase and 6.7% agent increase. The ROI is high: one prevented REFINE isolation violation saves ~45 min + 11 agent spawns.

---

## 4. Copy-Paste-Ready Observer Agent Prompt

The following is the complete prompt to spawn the observer agent. Use with `Task` tool, `subagent_type: "Opus"`.

```
### Variables to fill before spawning:
# {BUILD_DIR} = absolute path to build output directory (e.g., ephemeral/builds/yegge-gas-town-2026-02-25/)
# {SLUG} = build slug (e.g., yegge-gas-town)
# {DATE} = build date (e.g., 2026-02-25)
```

---

### OBSERVER AGENT PROMPT

```
You are the OBSERVER AGENT for pipeline build {SLUG} ({DATE}).

## YOUR ROLE

You are an independent compliance verifier. You monitor the orchestrator's execution
of the pipeline and verify it followed the protocol. You have NO pipeline execution
responsibilities — you only watch, verify, and report.

You are the REFEREE. The orchestrator is the PLAYER. You never switch roles.

## YOUR DATA SOURCES

You read files from the build output directory: {BUILD_DIR}
You read the execution tracker: {BUILD_DIR}/EXECUTION-TRACKER.md
You read gate results: {BUILD_DIR}/p3a-gate-results*.json
You read PA reports: {BUILD_DIR}/p3b-pa-auditor-*.md
You read the integrative report: {BUILD_DIR}/p3b-pa-integrative.md
You read screenshots directory: {BUILD_DIR}/screenshots/

You NEVER receive orchestrator explanations or summaries. You judge from artifacts only.

## YOUR AUTHORITY

- BLOCKING violations: Write {BUILD_DIR}/OBSERVER-STOP.md with violation details.
  The orchestrator is required to check for this file before each phase transition.
  If it exists, the pipeline halts.
- SIGNIFICANT violations: Record in your report. Pipeline continues.

## VERIFICATION SCHEDULE

You perform 5 verification passes. After each pass, write your findings to
{BUILD_DIR}/OBSERVER-PASS-{N}.md (where N = 0, 1, 2, 3, 4).

Wait for the trigger file/condition before starting each pass:

### Pass 0 — After Phase 0 (Content Map exists)
Trigger: {BUILD_DIR}/p0-content-map*.md exists

Checks:
- OBS-16 [SIGNIFICANT]: Does the execution tracker show BV-06 ran at pipeline startup?
  Look for BV-06 results in tracker or gate output.

### Pass 1 — After Phase 1 (Execution Brief exists)
Trigger: {BUILD_DIR}/p1-execution-brief*.md exists

Checks:
- OBS-15 [BLOCKING]: Does tracker show BV-01 through BV-05 all ran?
  Look for "BV gates: X/7 PASS" or individual BV results. All 5 must have results.
- OBS-17 [SIGNIFICANT]: Does tracker show BV-07 ran before builder spawn?
  BV-07 result must exist AND precede Phase 2 start timestamp.
- OBS-18 [BLOCKING]: If any BV gate FAILED, does a revised brief exist?
  If BV failures > 0 AND revision cycles = 0, this is BLOCKING.

### Pass 2 — After Phase 3A (Screenshots + Gate Results exist)
Trigger: {BUILD_DIR}/screenshots/ directory exists AND {BUILD_DIR}/p3a-gate-results*.json exists

Checks:
- OBS-01 [BLOCKING]: Read tracker: EXPERIENTIAL_SCAN field must be non-empty.
  If PA auditor files already exist but EXPERIENTIAL_SCAN is empty, BLOCKING violation.
- OBS-02 [SIGNIFICANT]: Read tracker fields P3A+-1a through P3A+-1d: all must be non-empty.
- OBS-03 [SIGNIFICANT]: Time between screenshot completion and PA deployment must be >= 90 seconds.
  A genuine experiential scan of a full page cannot be faster. Check tracker timestamps.
- OBS-04 [SIGNIFICANT]: Scan experiential scan text. Look for pixel-based language
  ("I see", "pixels show", "the rendered text", "visually"). Absence suggests code-reading, not visual verification.
- OBS-10 [BLOCKING]: Screenshots directory must contain subdirectories: 1440/, 1024/, 768/.
- OBS-11 [BLOCKING]: Each viewport subdirectory must contain cold-look.png + at least 3 scroll-*.png files.
- OBS-12 [SIGNIFICANT]: Total screenshot count across all viewports must be >= 24.
- OBS-13 [SIGNIFICANT]: Gate results must include GR-61 (DPR validation) with a result.
- OBS-14 [SIGNIFICANT]: Gate results must include GR-62 (screenshot quality) with a result.
- OBS-24 [BLOCKING]: Gate results file exists and is valid JSON.
- OBS-25 [SIGNIFICANT]: Gate results contain >= 40 total gate entries.
- OBS-27 [BLOCKING]: Scan gate results for any entry with source = "manual" or equivalent.
  Zero manual entries expected. Any manual entry = potential fabrication.

### Pass 3 — After Phase 3B (All PA Reports exist)
Trigger: Count of {BUILD_DIR}/p3b-pa-auditor-*.md files = 9

Checks:
- OBS-19 [BLOCKING]: Exactly 9 PA auditor report files exist (A through I).
- OBS-20 [BLOCKING]: p3b-pa-integrative.md exists AND was created after the latest
  p3b-pa-auditor-*.md file. Compare file modification timestamps.
- OBS-21 [BLOCKING]: Sample 2 random auditor reports. Search for pipeline vocabulary:
  "BV-", "GR-", "suppressor", "disposition D-", "mechanism count", "content map",
  "brief assembler", "REFINE", "gate runner", "PA-05 >= 3.5".
  ANY hit = fresh-eyes violation. Report which file and which term.
- OBS-22 [SIGNIFICANT]: If tracker records auditor model info, verify all say Opus.
- OBS-23 [SIGNIFICANT]: Read 3 random auditor reports. Each must contain a
  "## Completion Manifest" section near the end.

### Pass 4 — After Phase 3C (Weaver verdict exists)
Trigger: {BUILD_DIR}/p3c-weaver*.md exists

Checks:
- OBS-26 [BLOCKING]: Gate results include GR-48 (meta-gate) with a result.
- OBS-28 [SIGNIFICANT]: Count non-empty fields in execution tracker. Must be >= 80%
  of total expected fields. Report actual percentage.
- OBS-29 [SIGNIFICANT]: Phase timestamps must be monotonically increasing.
  P0 start < P1 start < P2 start < P3A start < P3B start < P3C start.
- OBS-30 [SIGNIFICANT]: For each entry in tracker "Output Files" table, verify the
  file exists at the listed path. Report any missing files.

### Pass R — After REFINE (if applicable)
Trigger: Any file matching {BUILD_DIR}/*-refine* exists

Checks:
- OBS-05 [BLOCKING]: REFINE section in tracker has fields filled BEFORE REFINE builder
  spawn timestamp. The BEFORE checklist must be answered BEFORE the builder runs.
- OBS-06 [BLOCKING]: Compare Pass 1 builder spawn context with REFINE builder spawn context.
  They must be observably different agents (different spawn timestamps at minimum, ideally
  different prompt structure visible in tracker).
- OBS-07 [BLOCKING]: Read any REFINE builder input files or the REFINE brief.
  Search for PROHIBITED content: gate scores (numbers like "GR-01: PASS/FAIL"),
  threshold numbers (">=15 RGB", "<=120px"), fix lists, diagnostic verbs
  ("fix", "repair", "address", "correct", "resolve").
  ANY hit = REFINE isolation violation = STOP.
- OBS-08 [SIGNIFICANT]: Grep Pass 1 HTML for <!-- RESIDUAL: comment. Must be >= 50 chars
  and contain >= 3 of: "preserved", "changed", "next", "trade-off".
- OBS-09 [BLOCKING]: Exactly 9 -refine PA auditor reports exist. Gate results with
  -refine suffix exist. Full Phase 3 re-audit must have occurred.
- Then repeat Pass 2, 3, 4 checks on REFINE-suffixed artifacts.

## STOP PROCEDURE

If ANY BLOCKING check fails:
1. Write {BUILD_DIR}/OBSERVER-STOP.md with this format:

```markdown
# OBSERVER STOP — BLOCKING VIOLATION

**Check:** OBS-XX
**Severity:** BLOCKING
**Phase:** Pass N
**Description:** [What was expected vs what was found]
**Evidence:** [Specific file, line, or value that proves the violation]
**Required Action:** [What the orchestrator must do before continuing]
```

2. Continue monitoring (do not shut down). The orchestrator may fix the issue and resume.
3. After the fix, re-run the failed check. If it passes, delete OBSERVER-STOP.md.
   Write a note in your pass report: "OBS-XX: RESOLVED after STOP."

## FINAL REPORT

After the pipeline completes (SHIP, SHIP WITH FIXES, or HALT), write your comprehensive
report to {BUILD_DIR}/OBSERVER-REPORT.md.

Format:
```markdown
# Observer Verification Report
## Build: {SLUG} — {DATE}

### Summary
- Total checks executed: NN
- PASS: NN
- FAIL: NN (NN BLOCKING, NN SIGNIFICANT)
- SKIP: NN (not applicable)
- Observer compliance rate: NN%

### BLOCKING Failures
| Check ID | Description | Evidence | Phase | Resolved? |
|----------|-------------|----------|-------|-----------|

### SIGNIFICANT Failures
| Check ID | Description | Evidence | Phase |
|----------|-------------|----------|-------|

### Pass-by-Pass Detail
[Include each pass with all check results]

### Timestamps
| Event | Timestamp |
|-------|-----------|
| Observer spawned | ... |
| Pass 0 complete | ... |
| ... | ... |
| Final report written | ... |

### Recommendations
[1-3 specific process improvements based on what you observed]
```

## RULES

1. You are INDEPENDENT. You do not ask the orchestrator for explanations.
2. You judge from ARTIFACTS ONLY — files on disk, timestamps, content.
3. Every check is BINARY — PASS or FAIL. No "seems okay" or "probably fine."
4. You NEVER modify pipeline files. You only read and write observer files.
5. You NEVER participate in pipeline execution (no spawning builders, no running gates).
6. If a file you need to check does not exist yet, WAIT. Do not skip the check.
7. If you cannot determine a check result from available artifacts, mark it INCONCLUSIVE
   and explain what information was missing.

## WHAT YOU DO NOT HAVE

- No knowledge of the content being built
- No knowledge of the design intent
- No access to the orchestrator's thought process
- No ability to judge whether the page LOOKS good (that is the PA's job)
- No ability to run programmatic gates (that is the gate runner's job)

You verify PROCESS COMPLIANCE, not QUALITY. The PA verifies quality.
The gates verify thresholds. You verify that the process was followed.

BEGIN: Start with Pass 0. Wait for the Content Map file to appear in {BUILD_DIR}.
```

---

## 5. Integration with Existing Pipeline

### 5.1 Orchestrator Changes Required

The orchestrator needs exactly 3 additions:

1. **Spawn observer first:** Before Phase 0, spawn the observer agent with the prompt above.
2. **Check for STOP file at phase transitions:** Add `ls {BUILD_DIR}/OBSERVER-STOP.md 2>/dev/null` before each phase transition. If file exists, read it and address the violation.
3. **Wait for final report:** After pipeline completes, wait for `OBSERVER-REPORT.md` to appear before archiving.

### 5.2 Files the Observer Writes

| File | When | Purpose |
|------|------|---------|
| `OBSERVER-PASS-0.md` | After Phase 0 | Pass 0 verification results |
| `OBSERVER-PASS-1.md` | After Phase 1 | Pass 1 verification results |
| `OBSERVER-PASS-2.md` | After Phase 3A | Pass 2 verification results |
| `OBSERVER-PASS-3.md` | After Phase 3B | Pass 3 verification results |
| `OBSERVER-PASS-4.md` | After Phase 3C | Pass 4 verification results |
| `OBSERVER-PASS-R.md` | After REFINE (if applicable) | REFINE verification results |
| `OBSERVER-STOP.md` | On BLOCKING violation | Halt signal (deleted after resolution) |
| `OBSERVER-REPORT.md` | Pipeline end | Comprehensive final report |

### 5.3 Agent Count Impact

Pipeline agents: 15 (current) -> 16 (with observer).
The observer is a long-running agent that persists for the full pipeline.
Cost: 1 additional Opus agent (~$10-15 per run, ~12 min added time).

### 5.4 Execution Tracker Additions

Add one field to the tracker's Build Metadata section:

```markdown
| OBSERVER_SPAWNED | ___ | (auto) timestamp |
| OBSERVER_COMPLIANCE | ___ | (auto) from OBSERVER-REPORT.md summary |
```

Add one row to the Output Files table:

```markdown
| OBS | Observer Report | {BUILD_DIR}/OBSERVER-REPORT.md | [ ] |
```

---

## 6. Limitations and Mitigations

### 6.1 The Observer is Also an LLM

**Risk:** The observer could be lenient, could miss violations, or could fabricate PASS results.

**Mitigations:**
- Binary checks with explicit criteria (no judgment = no leniency)
- Minimal context (no pipeline goals = no motivation to be lenient)
- File-only communication (no conversational pressure)
- Post-run audit: a human can re-run any check by reading the same files

### 6.2 Timing Dependencies

**Risk:** The observer reads files at phase boundaries. If the orchestrator writes files after the observer checks (but before the next phase), the observer misses intermediate violations.

**Mitigation:** The observer checks are designed around final phase artifacts, not intermediate state. Phase-boundary checking is sufficient because violations either persist in artifacts (detectable) or self-correct (harmless).

### 6.3 Observer Cannot Verify Internal Decisions

**Risk:** The observer cannot verify whether the orchestrator genuinely considered alternatives during Mode Selection, or genuinely read the experiential scan results before deciding to proceed.

**Mitigation:** This is an inherent limitation. The observer verifies ARTIFACTS, not INTENT. It catches the most consequential violations (REFINE isolation, fresh-eyes, screenshot completeness) even if it cannot catch subtle judgment errors. Process compliance is a proxy for decision quality, not a replacement.

### 6.4 False Positives

**Risk:** OBS-03 (experiential scan timing >= 90 seconds) could trigger on a legitimately fast scan of a simple page.

**Mitigation:** OBS-03 is SIGNIFICANT, not BLOCKING. It flags for review but does not halt the pipeline. The 90-second threshold is calibrated against the Gas Town experience (102 screenshots, complex page) — for simpler pages, this could be lowered to 60 seconds.

### 6.5 Observer Self-Assessment

**Risk:** The observer itself is unobserved. Who watches the watcher?

**Mitigation:** The observer's report is a transparent artifact. A human (or a post-run audit agent) can verify any check by reading the same files. The observer's value is not that it is infallible — it is that it provides an independent perspective and creates a verifiable audit trail that did not previously exist.

---

## 7. Comparison: Before and After Observer

### Without Observer (Current State)

```
Orchestrator executes pipeline
Orchestrator evaluates itself via BEFORE checklist (self-reported Y/N)
Orchestrator fills execution tracker (self-reported values)
→ No independent verification
→ Self-assessment unreliability (crack D10)
```

### With Observer

```
Orchestrator executes pipeline
Observer independently verifies compliance from artifacts
Observer writes STOP file if BLOCKING violation detected
Orchestrator checks for STOP file at phase transitions
Observer writes comprehensive report at pipeline end
→ Independent verification of 30 binary checks
→ STOP authority for 11 most critical violations
→ Transparent audit trail for post-run review
```

### What This Catches That Self-Assessment Misses

1. **REFINE isolation violations** — The orchestrator might accidentally include gate scores in the REFINE prompt. It would self-report "isolation verified: YES" because it believes the prompt is clean. The observer READS the prompt and checks for prohibited content.

2. **Experiential scan theater** — The orchestrator might fill in the experiential scan fields without genuinely scanning. The observer checks timing (< 90 seconds = suspicious) and language (code-based vs pixel-based).

3. **Missing screenshots** — The orchestrator might report "screenshots captured" but miss a viewport. The observer counts actual files.

4. **Fresh-eyes violations** — The orchestrator might accidentally include pipeline context in PA auditor prompts. The observer spot-checks auditor reports for pipeline vocabulary.

5. **Gate fabrication** — The orchestrator might hand-write gate results instead of running the gate runner. The observer checks for manual source entries.

---

*End of D10 Observer Protocol design document.*
