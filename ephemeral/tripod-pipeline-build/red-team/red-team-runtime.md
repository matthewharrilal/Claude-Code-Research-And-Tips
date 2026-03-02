# Red Team: Runtime Failure Modes

**Auditor:** Red Team Agent (Runtime)
**Date:** 2026-03-02
**Target:** Tripod Pipeline SKILL-assembled.md (817 lines) + 13 prompt files (3,413 lines total)
**Approach:** Systematic walk-through of execution flow, identifying crash, hang, and error-producing conditions at each phase.

---

## Executive Summary

21 findings total: **4 BLOCKING, 6 SIGNIFICANT, 7 MEDIUM, 4 LOW.**

The most critical runtime risks are: (1) orchestrator context overflow causing mid-pipeline amnesia with no recovery, (2) HTTP server lifecycle mismanagement across fix cycles, (3) shell state loss making PID-based server cleanup unreliable, and (4) uncontrolled cost explosion in REFINE cycles. The pipeline has good *structural* defenses (pipeline-log.md, validation gates, quality floors) but weak *operational* defenses (no error handling for agent spawn failures, no timeout enforcement, no port fallback, no cost tracking for REFINE re-evaluations).

---

## Findings

### FINDING-R01: Orchestrator Context Overflow — Mid-Pipeline Amnesia
- **Severity:** BLOCKING
- **Failure mode:** The orchestrator's context window fills up before completing all 5 phases, causing it to lose track of where it is, what validation to perform, or how to proceed.
- **Trigger:** The orchestrator must hold in its context: the SKILL file (817 lines), Phase 0 loaded files (identity.md 87L + vocabulary.md 55L + tokens.css 124L + components.css 779L = 1,045 lines), the content markdown (variable — could be 200-2000+ lines), agent prompt files it reads before spawning (~200-400 lines per phase), agent outputs it validates (specialist outputs, package files, build HTML), pipeline log entries, and its own reasoning. By Phase 3, the orchestrator has processed 15+ tool call results. The SKILL instructs reading each agent prompt from disk before spawning — adding 59-643 lines per agent to context. By Phase 4 (screenshot capture), the orchestrator has accumulated massive context: SKILL + 4 design system files + content + TC brief + 5 specialist outputs (validation reads) + 3 package files (validation reads) + 3 build HTML files (validation reads) + 2 decisions files + multiple prompt files + pipeline log. This easily exceeds 15,000-20,000 lines of processed content.
- **Likelihood:** COMMON — especially with longer content articles (500+ lines) or verbose specialist outputs.
- **Impact:** Pipeline enters undefined state. The orchestrator may: skip validation gates, repeat a phase, spawn agents with wrong prompts, lose track of OUTPUT_DIR, or stop entirely. The "context recovery" instructions in the SKILL are the mitigation, but they assume the orchestrator still REMEMBERS to re-read _pipeline-log.md — if the instruction to do so has itself been compressed out, the recovery protocol fails.
- **Current mitigation:** The SKILL has "Context recovery" notes at each phase boundary: "re-read _pipeline-log.md." The pipeline log serves as external memory. The Quick Reference table at the top is designed for post-compression navigation.
- **Recommended mitigation:**
  1. **Reduce orchestrator reads.** The orchestrator should NOT read the full contents of agent prompt files. Instead, pass the prompt file path to the agent and let the agent read it. Currently the SKILL says "Read the prompt from [path] and include its contents as the agent's system prompt" — this forces the orchestrator to read every prompt into its context. Change to: pass the path as part of the agent's task description and have the agent read it.
  2. **Reduce validation scope.** Instead of the orchestrator reading full specialist outputs and build HTML for validation, use lightweight checks: file existence + `wc -l` for line counts + `grep -c '<style>'` for HTML structure. Bash-based validation uses minimal context.
  3. **Add explicit "if you cannot recall your current phase" fallback** at the very top of the SKILL (not just as phase-boundary notes): "If you are unsure what phase you are in, STOP. Read {OUTPUT_DIR}/_pipeline-log.md. The last completed phase tells you where to resume."

### FINDING-R02: HTTP Server PID Lost Between Bash Calls — Zombie Server
- **Severity:** BLOCKING
- **Failure mode:** The HTTP server started in Phase 4 Step 4A cannot be reliably killed because shell state (including `$HTTP_PID`) does not persist between Bash tool calls. The SKILL instructs: `python3 -m http.server 8080 & HTTP_PID=$!` — but `$HTTP_PID` is only available in that specific Bash invocation. Any subsequent `kill $HTTP_PID` in a separate Bash call will fail because `$HTTP_PID` is undefined.
- **Trigger:** Standard pipeline execution. The server is started in one Bash call. The orchestrator then uses Playwright MCP tools (separate tool calls) to capture screenshots. Then it tries to kill the server in a new Bash call. The variable is gone.
- **Likelihood:** COMMON — this happens on every run. The SKILL's fallback `lsof -ti:8080 | xargs kill -9` will usually work, but that's the accidental save, not the designed behavior.
- **Impact:** If the lsof fallback also fails (e.g., the process has already exited and port 8080 is free), no harm. If the lsof fallback doesn't run (orchestrator context compressed and it forgets the cleanup step), the zombie server persists, blocking port 8080 for future runs and the REFINE phase's re-screenshot step.
- **Current mitigation:** The SKILL includes `lsof -ti:8080 | xargs kill -9 2>/dev/null || true` as a fallback. This SHOULD work but is fragile.
- **Recommended mitigation:**
  1. **Write the PID to a file** instead of a shell variable: `echo $! > {OUTPUT_DIR}/_http-server.pid`. Kill with `kill $(cat {OUTPUT_DIR}/_http-server.pid)`.
  2. **Always use the lsof cleanup as PRIMARY, not fallback.** Don't rely on PID tracking at all. Change the kill step to just: `lsof -ti:8080 | xargs kill -9 2>/dev/null || true`.
  3. **Add the kill step to the START of every server launch** (already partially done — the SKILL says "Kill any existing server on port 8080 first" — but make this more prominent and consistent).

### FINDING-R03: HTTP Server Not Restarted in REFINE Fix Cycles
- **Severity:** BLOCKING
- **Failure mode:** Phase 5 Step 5D says "Re-capture screenshots (Step 4A)." Step 4A starts a new HTTP server. But after Phase 4, the server was killed (Step 4A.7). If the orchestrator's context has compressed by Phase 5, it may not re-read the full Step 4A procedure, and it may try to use Playwright to navigate to `localhost:8080` when no server is running.
- **Trigger:** Pipeline reaches REFINE verdict. Orchestrator attempts re-screenshots. Server is not running.
- **Likelihood:** OCCASIONAL — depends on whether context compression has occurred between Phase 4 and Phase 5. If the REFINE cycle is fast, context may still be intact and the orchestrator remembers the full protocol. If there was significant reasoning between Phase 4 and Phase 5 (fix classification, feedback formulation), context may have compressed.
- **Impact:** Screenshots fail. Playwright navigates to `localhost:8080` and gets "connection refused." The pipeline either crashes or produces blank screenshots that the PA auditors evaluate (producing meaningless audit results).
- **Current mitigation:** The SKILL says "Re-capture screenshots (Step 4A)" — this is a reference to the full Step 4A protocol which includes starting the server. But it's a reference, not an inline instruction.
- **Recommended mitigation:**
  1. **Inline the server start command in Phase 5 Step 5D** explicitly. Don't rely on the reference to Step 4A. Write out the full: kill existing -> start server -> take screenshots -> kill server sequence.
  2. **Add a pre-screenshot check:** Before any Playwright navigation, verify the server is running: `curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/ | grep -q 200` — if not 200, start the server.

### FINDING-R04: Fix Cycle Cost Explosion — REFINE Triggers Full Re-PA
- **Severity:** BLOCKING
- **Failure mode:** Each REFINE cycle spawns 5 fresh PA auditors + 1 weaver = 6 Opus agents. With up to 2 fix cycles, that's 12 additional Opus agents. The spec estimates 14-15 total agents, but with 2 REFINE cycles the actual count is: 14 (base) + 1 (refine builder) + 6 (re-PA) + 1 (refine builder 2) + 6 (re-PA 2) = 28 agents. Cost doubles from the $28-56 estimate to potentially $56-100+.
- **Trigger:** Weaver issues REFINE verdict. Pipeline runs fix cycle. Re-evaluates. Gets REFINE again. Runs second fix cycle. Re-evaluates again. Each re-evaluation is a FULL PA (5 auditors + 1 weaver).
- **Likelihood:** OCCASIONAL — based on prior pipeline history, REFINE verdicts are common (PA frequently finds issues in first builds). Two cycles are plausible.
- **Impact:** Cost overrun. The $50 pause threshold may be hit during the first or second REFINE cycle, but by then 20+ agents have already been spent. If the user says "continue," the final cost could reach $80-100.
- **Current mitigation:** The SKILL has a $50 cost pause threshold. The pipeline log tracks cumulative cost estimates. But the cost estimates in the SKILL undercount: the Phase 4 checkpoint says "Cumulative cost estimate: $28-48" and the Phase 5 checkpoint says to record the total, but the cumulative tracking depends on the orchestrator accurately summing up — no automated tracking.
- **Recommended mitigation:**
  1. **Update cost estimates to include REFINE.** The spec should state: "With 1 REFINE cycle: $36-64. With 2 REFINE cycles: $44-80."
  2. **Warn before first REFINE cycle.** When the Weaver issues REFINE, the orchestrator should report to the user: "REFINE verdict. Each fix cycle costs ~$8-16 (1 builder + 5 PA + 1 weaver). Proceed?"
  3. **Consider lighter re-evaluation.** Instead of full 5-auditor PA for fix cycles, use 2-3 auditors focused on the specific issues flagged. This reduces cost per cycle from ~$10 to ~$5.

---

### FINDING-R05: Agent Spawn Failure — No Retry Logic
- **Severity:** SIGNIFICANT
- **Failure mode:** An Opus agent spawn fails due to API error, rate limit, timeout, or Claude Code agent tool failure. The pipeline has no retry logic. If Specialist 3 fails to spawn, the orchestrator has no instruction on how to handle it.
- **Trigger:** API rate limiting (multiple Opus agents spawned in rapid succession — 5 specialists in parallel), network interruption, or Claude Code internal error.
- **Likelihood:** OCCASIONAL — rate limiting is real, especially with 5 parallel Opus spawns. API errors are rare but non-zero over 15+ agent spawns per run.
- **Impact:** Missing specialist output. The synthesizer receives 4 instead of 5 specialist outputs. If the missing specialist is S4 (Constraints Compiler), the soul checklist is absent from the package. If S3 (Case Study Analyst), the builder gets no CSS examples.
- **Current mitigation:** None. The SKILL has no retry protocol, no "if agent spawn fails" instruction.
- **Recommended mitigation:**
  1. **Add a 1-retry protocol for agent spawn failures.** "If an agent spawn fails (error, timeout, empty output), wait 30 seconds and retry once. If the retry also fails, log the failure in _pipeline-log.md and proceed without that agent's output. Note the gap in the synthesizer prompt."
  2. **Sequential fallback for parallel spawns.** "If 2+ specialists fail in parallel, switch to sequential spawning (one at a time) to reduce API load."

### FINDING-R06: Synthesizer Context Overload — 5 Specialist Outputs + Exemplars + Content
- **Severity:** SIGNIFICANT
- **Failure mode:** The synthesizer agent must read: 5 specialist outputs (80-200 lines each = 400-1000 lines), the TC brief (~100-200 lines), content.md (200-2000+ lines), the synthesizer prompt (643 lines), and 2 exemplar packages (249 + 341 = 590 lines). Total input: 2,000-4,500+ lines. The synthesizer must then produce THREE files totaling 400-600 lines of high-quality, content-specific output. This is a massive single-agent context load.
- **Trigger:** Every pipeline run. The synthesizer always receives all these inputs.
- **Likelihood:** COMMON — this is the standard execution path.
- **Impact:** The synthesizer's output quality degrades due to context saturation. It may: produce generic output (losing content-specificity), drop specialist contributions (especially S2 or S5 which are in the "middle" of the read sequence), or produce files below the 100-line quality floor. The orchestrator's validation catches line-count failures but cannot detect genericness at runtime.
- **Current mitigation:** The synthesizer prompt says "Do not skim. Read each one completely." The quality floor is 100 lines per file. The orchestrator validates for content-specificity ("If a section could apply to any article, it's too generic"). But this validation is a judgment call by the orchestrator — unreliable.
- **Recommended mitigation:**
  1. **Reduce exemplar burden.** Include only ONE exemplar package (cd-006, the richer one), not two. Save ~250 lines of context.
  2. **Provide specialist outputs as file paths, not inline.** The synthesizer has Read tool access. Let it read files from disk rather than having them embedded in the prompt. This reduces initial prompt size.
  3. **Accept that genericness validation is low-fidelity.** Note in the SKILL: "Orchestrator's content-specificity check has ~50% reliability. If the package seems thin or generic, the comparison report (Phase 4) will diagnose the failure post-hoc."

### FINDING-R07: Screenshots Come Back Blank or Black
- **Severity:** SIGNIFICANT
- **Failure mode:** Playwright captures screenshots but they are blank (white), black, or show the wrong content. The SKILL says "Validate: Check each screenshot is NOT blank/black before proceeding" but provides no instruction on what to do if they ARE blank.
- **Trigger:** Multiple causes: (a) The HTML file has a rendering error (CSS that hides all content), (b) Google Fonts fail to load (Playwright doesn't wait long enough), (c) The `document.fonts.ready` promise resolves before fonts are actually painted, (d) the HTTP server serves the wrong file, (e) the browser renders before CSS is parsed.
- **Likelihood:** OCCASIONAL — blank screenshots have been flagged as a persistent issue in the project history (see MEMORY.md: "DPR 0.667 screenshot issue persists").
- **Impact:** If blank screenshots reach the PA auditors, all 5 auditors produce meaningless reports based on a blank page. The weaver then synthesizes meaningless reports into a verdict. The entire Phase 4 becomes garbage. The orchestrator wasted $5-10 on useless agents.
- **Current mitigation:** The SKILL says "Check each screenshot is NOT blank/black before proceeding." This is a validation step, but with no recovery protocol.
- **Recommended mitigation:**
  1. **Add explicit blank-screenshot recovery.** "If any screenshot is blank or black: (a) Kill and restart the HTTP server. (b) Navigate to the page again. (c) Wait 3 seconds for rendering. (d) Re-capture. (e) If still blank after 2 retries, STOP and report to user."
  2. **Add a file-size check.** Blank/white PNGs are typically < 5KB. Full-page screenshots of styled HTML are typically > 50KB. "If any screenshot file is < 10KB, consider it potentially blank and re-capture."
  3. **Capture a diagnostic screenshot of just the viewport (not fullPage)** as a quick sanity check before the full-page captures.

### FINDING-R08: Port 8080 Already in Use
- **Severity:** SIGNIFICANT
- **Failure mode:** The HTTP server cannot start because port 8080 is occupied by another process (previous pipeline run, other development server, etc.).
- **Trigger:** User runs the pipeline after a previous run that left a zombie server, or user has another service on port 8080.
- **Likelihood:** OCCASIONAL — especially if FINDING-R02 (zombie server) occurs.
- **Impact:** The server start command fails silently (it runs in background with `&`). Playwright navigates to `localhost:8080` and either gets the WRONG content (from the old server) or gets a connection error. Wrong content is worse than no content — the PA evaluates the wrong page.
- **Current mitigation:** The SKILL says "Kill any existing server on port 8080 first" with `lsof -ti:8080 | xargs kill -9`. This should handle leftover servers.
- **Recommended mitigation:**
  1. **Verify server start was successful.** After starting the server, add: `sleep 1 && curl -s -o /dev/null -w '%{http_code}' http://localhost:8080/ | grep -q 200 && echo 'Server OK' || echo 'Server FAILED'`. If failed, try port 8081, then 8082.
  2. **Use a dynamic port selection.** `python3 -c "import socket; s=socket.socket(); s.bind(('',0)); print(s.getsockname()[1]); s.close()"` to find a free port, then use that port throughout.

### FINDING-R09: Playwright Browser Not Installed
- **Severity:** SIGNIFICANT
- **Failure mode:** The Playwright MCP tools require a browser to be installed. If the browser is not installed, all screenshot operations fail.
- **Trigger:** First run on a new machine, or after a Playwright update that requires browser re-installation.
- **Likelihood:** RARE — once installed, browsers persist. But happens on first setup.
- **Impact:** Phase 4 completely fails. No screenshots, no PA, no verdict. Pipeline stops.
- **Current mitigation:** None in the SKILL. The Playwright MCP has a `browser_install` tool available, but the SKILL doesn't reference it.
- **Recommended mitigation:**
  1. **Add a pre-flight check in Phase 0.** "Before proceeding to Phase 1, verify Playwright browser is available by calling `browser_navigate` to `about:blank`. If this fails with a 'browser not installed' error, call `browser_install` and retry."
  2. **Or add a note in Prerequisites:** "Ensure Playwright browser is installed. If screenshot capture fails in Phase 4, call `browser_install` and retry."

### FINDING-R10: Specialist Quality Floor Re-Run — Max 1 Re-Run But No Escalation Path
- **Severity:** SIGNIFICANT
- **Failure mode:** A specialist produces output below the quality floor. The orchestrator re-runs it once. The re-run also produces thin output (the specialist simply may not find enough relevant material in its assigned files for THIS content). The SKILL says "Maximum 1 re-run per specialist. If still below floor after re-run, proceed with what you have." But there's no instruction on how to handle 2+ failed specialists.
- **Trigger:** Content is unusual or niche. Specialist files don't contain relevant material for this specific article. For example, Specialist 2 (Validation Mapper) reads provenance chains that were built for previous explorations — they may have no relevance to a poetry article.
- **Likelihood:** OCCASIONAL — depends on content diversity.
- **Impact:** The synthesizer receives 2-3 thin specialist outputs. The resulting package is thin and generic. The builder gets poor instructions. The page quality suffers. The comparison report will diagnose this, but only AFTER $40+ has been spent.
- **Current mitigation:** Quality floors with 1 re-run. "Proceed with what you have" after failure. The synthesizer prompt has Edge Case 1: "S3 output was thin" handling.
- **Recommended mitigation:**
  1. **Add a Phase 2 STOP condition:** "If 3+ specialists produce below-floor output after re-runs, STOP and report to user: 'The knowledge base has insufficient relevance for this content. Consider: (a) proceeding with thin packages, or (b) providing supplementary reference material.'"
  2. **Allow the synthesizer to compensate explicitly:** "If specialist outputs are thin, the synthesizer should use the TC brief and content more heavily for Section 2 (mechanisms) and Section 4 (zones), rather than depending on specialist-derived intelligence."

---

### FINDING-R11: File Path Spaces and Special Characters
- **Severity:** MEDIUM
- **Failure mode:** The content file path or output directory path contains spaces or special characters. The SKILL uses `{CONTENT_PATH}` and `{OUTPUT_DIR}` as unquoted variables in shell commands. For example: `python3 -m http.server 8080 --directory {OUTPUT_DIR}` will fail if OUTPUT_DIR is `/Users/name/my project/builds/`.
- **Trigger:** User provides a content file with spaces in its name or parent directory path.
- **Likelihood:** OCCASIONAL — macOS paths commonly have spaces (e.g., "Creative Cloud Files").
- **Impact:** Multiple bash commands fail: HTTP server start, file copies (`cp {OUTPUT_DIR}/_fixes/fix-{N}-page.html {OUTPUT_DIR}/_build-final.html`), mkdir commands.
- **Current mitigation:** None. No quoting in any shell command template.
- **Recommended mitigation:**
  1. **Quote all variable references in shell commands.** Change `{OUTPUT_DIR}` to `"{OUTPUT_DIR}"` in every bash example in the SKILL.
  2. **Add a note in Prerequisites:** "If the content file path contains spaces, the orchestrator must ensure all bash commands quote paths with double quotes."

### FINDING-R12: Content Name Derivation — Collision and Overwrite
- **Severity:** MEDIUM
- **Failure mode:** The SKILL says "Content name = the markdown filename without extension" and the output directory is `ephemeral/builds/<content-name>-<date>/`. If the user runs the pipeline twice on the same content in the same day, the output directory collides. The second run overwrites the first run's artifacts.
- **Trigger:** User runs the pipeline, decides to try again on the same content.
- **Likelihood:** OCCASIONAL — users iterating on the same content is a common workflow.
- **Impact:** Loss of previous run's artifacts. If the first run's PA was better, it's overwritten.
- **Current mitigation:** None. No deduplication or suffix mechanism.
- **Recommended mitigation:**
  1. **Add a run counter suffix.** Check if the output directory exists. If it does, append `-2`, `-3`, etc. This is already the pattern seen in the git status (e.g., `yegge-gas-town-extraction-2026-03-01-2`, `-3`, `-4`, `-5`).
  2. **Or STOP and ask the user:** "Output directory already exists. Overwrite or create new with suffix?"

### FINDING-R13: Builder Pass 2 Receives No Content.md — Cannot Verify Content Completeness
- **Severity:** MEDIUM
- **Failure mode:** The SKILL explicitly says Builder Pass 2 "does NOT receive: content.md (the HTML already contains the content)." But the Pass 2 prompt's continuity rule says "All content — every section from the original content.md must remain." The builder has no way to verify this without content.md. If Pass 1 dropped a section, Pass 2 has no reference to detect the gap.
- **Trigger:** Pass 1 builder drops a content section (e.g., a short aside, a footnote, an appendix). This is common when the content is long and the builder focuses on the main body.
- **Likelihood:** OCCASIONAL — content dropping is a known issue in builder agents.
- **Impact:** Missing content in the final page. The PA auditors won't detect it (they don't know what the content should be). The comparison report won't detect it (it checks package compliance, not content completeness). The gap is only found when the user reads the final page.
- **Current mitigation:** Pass 2 is told to "Spot-check against content.md" in the HTML integrity check, but the file routing map says content.md is NOT provided to Pass 2.
- **Recommended mitigation:**
  1. **This is a contradiction that needs to be resolved.** Either: (a) provide content.md to Pass 2 with the instruction "Use ONLY for content completeness verification, not for re-reading," or (b) require Pass 1 to include a content completeness attestation in _pass-1-decisions.md: "All N sections from content.md are placed: [list]."

### FINDING-R14: Orchestrator Must Write Comparison Report — Heavy Cognitive Task
- **Severity:** MEDIUM
- **Failure mode:** Phase 4 Step 4D instructs the orchestrator to write the comparison report by reading the Weaver's synthesis, all 3 package files, and the build HTML. This is a heavy cognitive task for an agent that by Phase 4 has already processed 15+ tool calls and may have compressed context. The orchestrator is designed for "plumbing, not creativity" (Principle 1), but writing a comparison report requires analytical judgment.
- **Trigger:** Every pipeline run reaches Phase 4.
- **Likelihood:** COMMON — this is the standard path.
- **Impact:** The comparison report is shallow, mechanical, or inaccurate. It fails to diagnose real gaps between package and build. Its diagnostic value — the stated purpose of the Tripod Pipeline — is compromised.
- **Current mitigation:** The SKILL provides a template for the comparison report with section-by-section structure.
- **Recommended mitigation:**
  1. **Delegate the comparison report to a dedicated agent.** Spawn one more Opus agent whose sole job is reading the 3 package files, the Weaver synthesis, and the HTML, and producing the comparison report. This agent has fresh context and analytical focus.
  2. **Or merge it into the Weaver's job.** The Weaver already produces Output 4 (Package Compliance). The comparison report is largely a reformatted version of Output 4 with added CSS citations. The Weaver could produce both.

### FINDING-R15: Pass 3 Builder Receives 2 Decisions Files But Must Build Mental Model of Full History
- **Severity:** MEDIUM
- **Failure mode:** Pass 3 builder receives _pass-1-decisions.md (20-30 lines) + _pass-2-decisions.md (20-30 lines) + _build-pass-2.html + _package-pass-3.md + the builder prompt (334 lines). The builder must reconstruct the full build history from 2 compressed decisions files. If either decisions file is thin or poorly written by the previous builder (quality not validated by the orchestrator), Pass 3 makes decisions in the dark.
- **Trigger:** Pass 1 or Pass 2 builder produces a thin, generic, or poorly structured decisions file. The orchestrator validates HTML output but does NOT deeply validate decisions files (only checks "exists and is > 10 lines").
- **Likelihood:** OCCASIONAL — decisions file quality varies by agent.
- **Impact:** Pass 3 builder doesn't understand the metaphor vocabulary, zone intent, or mechanism rationale. Hardening becomes mechanical (checking for 2px borders) rather than compositional (understanding what the density progression was trying to achieve).
- **Current mitigation:** The SKILL checks "exists and is > 10 lines" for decisions files. The builder prompts include detailed templates for decisions files.
- **Recommended mitigation:**
  1. **Add structured validation for decisions files.** Verify each decisions file contains the required sections: metaphor, zones, mechanisms, CSS naming, responsive strategy. If any section is missing, flag it and optionally re-prompt the builder.

### FINDING-R16: Context Compression DURING a Phase — Intra-Phase Amnesia
- **Severity:** MEDIUM
- **Failure mode:** Context compresses not between phases but DURING a phase. For example, during Phase 2, the orchestrator spawns 5 specialists in parallel, validates outputs, then spawns the synthesizer. If context compresses after validating Specialist 3, the orchestrator may forget the validation status of Specialists 4 and 5 and re-validate or skip them.
- **Trigger:** Phase 2 is the highest risk: the orchestrator processes 5 parallel agent results, validates each, potentially re-runs some, then transitions to the synthesizer. This is 10+ tool calls within a single phase.
- **Likelihood:** OCCASIONAL — depends on content length and specialist output verbosity.
- **Impact:** Specialist outputs are incorrectly validated (passed when they should have been re-run) or the synthesizer is spawned before all specialists complete. The pipeline continues but with degraded quality.
- **Current mitigation:** Phase 2 has a "Context recovery reminder" between Steps 2A and 2C. But no recovery note between individual specialist validations.
- **Recommended mitigation:**
  1. **Write per-specialist validation status to _pipeline-log.md as they complete.** "S1: PASS (142L), S2: RE-RUN (34L -> 98L), S3: PASS (108L)..." This creates a file-based checkpoint the orchestrator can re-read.
  2. **Add a Phase 2 sub-checkpoint:** "After validating all 5 specialists, write a specialist validation summary to _pipeline-log.md BEFORE spawning the synthesizer."

### FINDING-R17: Weaver Receives _build-final.html — Context Load Risk
- **Severity:** MEDIUM
- **Failure mode:** The Weaver prompt specifies it receives `_build-final.html` "for CSS-level compliance checks." A styled HTML page can easily be 500-1500+ lines. The Weaver already receives: 6 screenshots, 5 auditor reports (40-80 lines each = 200-400 lines), the Weaver prompt (158 lines), and 3 package files (400-600 lines). Adding the HTML file pushes the Weaver's total input to 1,200-2,700+ lines.
- **Trigger:** Every pipeline run. The HTML file is always included.
- **Likelihood:** COMMON — standard execution path.
- **Impact:** The Weaver's primary job (Outputs 1-3: Experience Portrait, Creative Direction, Verdict) is diluted by the compliance assessment (Output 4). The fresh-eyes principle is partially compromised: the Weaver sees the HTML source code AND the package instructions, which may bias its perceptual assessment even though it reads screenshots first.
- **Current mitigation:** The Weaver prompt says "AFTER completing Outputs 1-3, read the 3 package files and the HTML source. Produce Output 4." This sequencing is designed to protect fresh-eyes.
- **Recommended mitigation:**
  1. **Accept the risk with the sequencing guard.** The current design is reasonable — reading package files AFTER the experiential assessment protects the fresh-eyes principle. But note that agent compliance with reading order instructions is not guaranteed.
  2. **Alternative: Split into 2 agents.** A "Perceptual Weaver" (Outputs 1-3, fresh-eyes only) and a "Compliance Assessor" (Output 4, reads packages + HTML). This is more expensive but cleaner.

---

### FINDING-R18: Cost Estimates Are Underestimated
- **Severity:** LOW
- **Failure mode:** The spec estimates $3-5 per phase for most phases. An Opus agent reading 4,000-5,000 lines of input (the specialist load) and producing 100-200 lines of output costs more like $5-8 per agent at current pricing. 5 specialists at $5-8 each = $25-40 for Phase 2 alone, not the estimated "$5-10."
- **Trigger:** Standard pricing for Opus agents with large context.
- **Likelihood:** COMMON — this is a systematic underestimate.
- **Impact:** Users are surprised by costs. The $50 pause threshold may be reached earlier than expected. Total cost may reach $80-120 instead of the estimated $28-56.
- **Current mitigation:** The cost estimates in the spec say "Est." and the SKILL tracks cumulative cost in the pipeline log.
- **Recommended mitigation:**
  1. **Revise cost estimates upward.** Phase 2 specialists: $15-30 (not $5-10). Synthesizer: $5-8 (not $3-5). Builder passes: $5-8 each = $15-24 (not $12-18). PA: $8-15 (not $5-10). Total: $46-80 base, $60-120 with REFINE.
  2. **Add input token estimates per agent.** The specialists read 3,900-5,200 lines = roughly 30,000-40,000 tokens input. At Opus pricing, this is quantifiable.

### FINDING-R19: Builder Pass 2 HTML Size Check — Misleading Validation
- **Severity:** LOW
- **Failure mode:** Pass 2 validation says "File is >= size of _build-pass-1.html (enrichment should add, not remove)." But this compares file size, not CSS complexity. A builder could add verbose HTML comments and whitespace while removing actual CSS rules, and still pass this check.
- **Trigger:** Pass 2 builder restructures CSS (removing redundant rules, consolidating selectors) while adding HTML content — net file size increases but CSS richness decreases.
- **Likelihood:** RARE — most agents don't optimize CSS during enrichment.
- **Impact:** Low — the PA audit would catch perceptual regression. This is a validation hole, not a crash risk.
- **Current mitigation:** File size comparison plus visual PA evaluation downstream.
- **Recommended mitigation:**
  1. **Add a CSS line count check in addition to file size.** Extract the `<style>` block and count lines. Pass 2 CSS lines should be >= Pass 1 CSS lines.

### FINDING-R20: Screenshot File Naming Assumes Single Build File
- **Severity:** LOW
- **Failure mode:** The screenshot protocol navigates to `http://localhost:8080/_build-final.html`. But during fix cycles, the file is overwritten: `cp {OUTPUT_DIR}/_fixes/fix-{N}-page.html {OUTPUT_DIR}/_build-final.html`. If the copy fails (e.g., fix-N-page.html doesn't exist because the refine builder named it differently), the screenshots capture the PREVIOUS version of _build-final.html.
- **Trigger:** Refine builder produces output with unexpected filename or fails to produce output.
- **Likelihood:** RARE — builder agents typically follow naming instructions.
- **Impact:** PA evaluates the unfixed version. Fix cycle is wasted.
- **Current mitigation:** The orchestrator explicitly copies the fixed page to _build-final.html before re-screenshots.
- **Recommended mitigation:**
  1. **Verify the copy succeeded before re-screenshots.** "After `cp`, verify the file's modification time updated: `stat -f '%m' {OUTPUT_DIR}/_build-final.html`."

### FINDING-R21: Pipeline Log Grows Large — Diminishing Returns on Re-Reading
- **Severity:** LOW
- **Failure mode:** Each phase appends a checkpoint to _pipeline-log.md. By Phase 5 with 2 fix cycles, the log has 7+ checkpoints with detailed line counts, cost estimates, and decision rationales. The "context recovery" protocol says "re-read _pipeline-log.md" — but a 200+ line log file consumes context that could be used for actual work.
- **Trigger:** Pipeline runs to completion with fix cycles.
- **Likelihood:** OCCASIONAL — only long runs with fix cycles.
- **Impact:** Minor context waste. The orchestrator reads 200 lines to determine it should be in Phase 5, Cycle 2.
- **Current mitigation:** The log uses structured checkpoints that the orchestrator can scan quickly.
- **Recommended mitigation:**
  1. **Keep only the LATEST checkpoint in the main log.** Archive previous checkpoints to `_pipeline-log-archive.md`. The main log always has just the most recent phase status.
  2. **Or add a CURRENT STATUS header at the very top of the log** that gets updated each phase: "CURRENT: Phase 5, Cycle 2. Next step: Re-capture screenshots."

---

## Summary

| Severity | Count | Finding IDs |
|----------|-------|-------------|
| BLOCKING | 4 | R01, R02, R03, R04 |
| SIGNIFICANT | 6 | R05, R06, R07, R08, R09, R10 |
| MEDIUM | 7 | R11, R12, R13, R14, R15, R16, R17 |
| LOW | 4 | R18, R19, R20, R21 |
| **TOTAL** | **21** | |

## Top 5 Highest-Impact Findings (Prioritized for Fix)

1. **R01 (BLOCKING): Context overflow** — The single most likely cause of pipeline failure. Reduce orchestrator reads, use bash-based validation, add top-of-file fallback instructions.

2. **R04 (BLOCKING): REFINE cost explosion** — Each fix cycle costs $8-16, not reflected in estimates. Warn user before fix cycles. Consider lighter re-evaluation.

3. **R02+R03 (BLOCKING): HTTP server lifecycle** — PID loss is guaranteed. Server not restarted in REFINE is likely. Use file-based PID tracking or lsof-primary cleanup. Inline server start in Phase 5.

4. **R07 (SIGNIFICANT): Blank screenshots** — Known persistent issue from project history. Add file-size validation, retry logic, and explicit recovery protocol.

5. **R06 (SIGNIFICANT): Synthesizer overload** — The synthesizer is the pipeline's bottleneck. 2,000-4,500 lines of input for a single agent. Reduce exemplar burden, use file-path-based reading, accept that genericness detection is low-fidelity.

## Risk Heat Map by Phase

| Phase | Risk Level | Key Threats |
|-------|------------|-------------|
| 0: SETUP | LOW | Browser not installed (R09) |
| 1: DERIVE | LOW | Agent spawn failure (R05) |
| 2: RESEARCH | HIGH | Context overflow (R01), specialist failures (R10), synthesizer overload (R06), spawn failures (R05), intra-phase compression (R16) |
| 3: BUILD | MEDIUM | Context overflow (R01), content dropping (R13), thin decisions files (R15) |
| 4: EVALUATE | HIGH | HTTP server issues (R02, R08), blank screenshots (R07), context overflow (R01), comparison report quality (R14) |
| 5: REFINE | CRITICAL | Server not restarted (R03), cost explosion (R04), full context of SKILL lost (R01) |
