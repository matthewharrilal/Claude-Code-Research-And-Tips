# MASTER AUDIT SYNTHESIS

**Date:** 2026-02-28
**Reports analyzed:** 15 (audit-types, audit-orchestrator-pipeline, audit-rotation-conviction, audit-assembler, audit-agents-cli, audit-state, audit-pa-subsystem, audit-config-templates, audit-logging, audit-functional-compile, audit-functional-wiring, audit-metacognitive, audit-adversarial, audit-fresh-eyes, audit-meta-cognitive)
**Total agents:** 15 Opus 4.6 auditors + 1 Opus 4.6 synthesizer
**Scope:** `tools/deep-build/src/` -- all 38 TypeScript files, 10 templates, plan conformance + functional testing + adversarial + meta-cognitive

---

## 1. CONTRADICTIONS BETWEEN AGENTS

### C-1: gate-runner-browser.js existence

- **audit-functional-wiring (W-05):** Says the file exists (`/Users/.../src/validation/gate-runner-browser.js`) and identifies the fragile copy-to-dist issue
- **audit-metacognitive (Gap 5):** Says "gate-runner-browser.js file may not exist (no .js files in validation/)"
- **Resolution:** The file EXISTS. audit-functional-wiring explicitly verified it with Glob. audit-metacognitive made an incorrect inference from its file type search. **Winner: audit-functional-wiring.**

### C-2: pa-auditor max-turns

- **audit-agents-cli:** Says all 10 roles' max-turns match the plan exactly (pa-auditor = 30)
- **audit-pa-subsystem (item 2 in Notable Details):** Says "Plan K05 says PA auditor = 15. Implementation uses 30, which is 2x the plan spec."
- **Resolution:** The plan has conflicting values. K05 says 15, but the invocation table (lines 279-290) says 30. The code uses 30 matching the invocation table. audit-agents-cli verified against the invocation table and marked it as matching. Both are technically correct against different plan sections. **Status: Plan internal inconsistency. Code uses 30.**

### C-3: resume.ts status -- dead code or implemented?

- **audit-state (F-03):** `resumePipeline()` is NEVER CALLED. The full 6-step algorithm is dead code. pipeline.ts uses its own simpler resume.
- **audit-functional-wiring (W-01):** Confirms resume.ts is dead code (BLOCKING).
- **audit-metacognitive:** Confirms resume path is wrong (HIGH gap).
- **audit-fresh-eyes:** Confirms resume.ts is dead code.
- **audit-adversarial (S-01):** Goes further -- identifies a data corruption bug where refine-builder writes to disk via tools but state hash isn't updated.
- **Resolution:** UNANIMOUS across 5 agents. resume.ts is dead code. **This is the highest-confidence finding in the audit.**

### C-4: Logger wiring

- **audit-logging:** Says logging is IMPLEMENTED (8/8 pass). Focuses on the Logger CLASS capabilities.
- **audit-functional-wiring (W-03):** Says Logger is NEVER INSTANTIATED. Pipeline uses inline `console.log`. All 6 log destinations (passes.jsonl, errors.jsonl, etc.) are never written during actual runs.
- **Resolution:** Both are correct but saying different things. The Logger CLASS is well-implemented. The Logger is NEVER USED by the pipeline. **Net: all structured logging is dead code. The pipeline has no structured log output.**

### C-5: Refine-builder tools

- **audit-agents-cli:** Flags refine-builder tools as WRONG (3 extra: Bash, Glob, Grep)
- **audit-config-templates:** Flags same as MISMATCH / NON-BLOCKING
- **audit-pa-subsystem:** Does not flag (doesn't audit refine-builder tools)
- **audit-adversarial (C-05):** Flags as MEDIUM risk (Bash = unconstrained tool execution)
- **Resolution:** All agents agree the code has 6 tools vs plan's 3. Disagreement is on severity: WRONG (agents-cli) vs NON-BLOCKING (config-templates) vs MEDIUM (adversarial). **Real status: Plan deviation. Whether intentional is unknown. Bash access is the specific concern.**

---

## 2. CONVERGENCE: Findings in 3+ Reports

### CONV-1: resume.ts is dead code (5 agents)
- **Found by:** audit-state, audit-functional-wiring, audit-metacognitive, audit-fresh-eyes, audit-adversarial
- **Details:** The full 6-step resume algorithm (config hash check, artifact hash verification, inFlightPass recovery, backup restoration) is implemented in resume.ts but NEVER CALLED. pipeline.ts does its own simpler resume via `deps.loadState()` that only validates schema version. Steps 3-6 are skipped.
- **Confidence:** HIGHEST. Unanimous across 5 independent auditors.

### CONV-2: Logging infrastructure is dead code (4 agents)
- **Found by:** audit-functional-wiring, audit-fresh-eyes, audit-metacognitive, audit-adversarial (implicitly)
- **Details:** Logger class (6 destinations), cost-tracker.ts, metrics.ts, report.ts -- all fully implemented, all NEVER IMPORTED by the pipeline. Pipeline uses `console.log` via `deps.log()`. No passes.jsonl, no errors.jsonl, no quality.jsonl, no run-report.json are ever written.
- **Confidence:** HIGH. 4 agents independently identified this.

### CONV-3: pa/pa-router.ts duplicates orchestrator/phase-router.ts (4 agents)
- **Found by:** audit-functional-wiring, audit-metacognitive, audit-fresh-eyes, audit-adversarial
- **Details:** Both export routing logic (SHIP/REFINE/RETHINK) and stall detection. Only phase-router.ts is used by the pipeline. pa-router.ts is dead code.
- **Confidence:** HIGH.

### CONV-4: checkpoint.ts is dead code (3 agents)
- **Found by:** audit-state (F-04), audit-functional-wiring, audit-fresh-eyes
- **Details:** `createCheckpoint()`, `listCheckpoints()`, `loadCheckpointState()` all exist but are never called. Pipeline does inline checkpoint creation that is less robust (missing artifact hash file, verifier observations, cost metrics).
- **Confidence:** HIGH.

### CONV-5: Broken file paths in paths.ts (3 agents)
- **Found by:** audit-config-templates (F3-1, F3-2 -- BLOCKING), audit-assembler (indirectly references CASE_STUDY loading), audit-meta-cognitive (corpus content quality)
- **Details:** `caseStudy` points to non-existent `CD-006/exploration.html`. `r5` points to non-existent `R5-agent-assisted-design-review.md`. These will cause runtime failures.
- **Confidence:** HIGH (filesystem-verified by audit-config-templates).

### CONV-6: Refine-builder has extra tools beyond plan (4 agents)
- **Found by:** audit-agents-cli, audit-config-templates, audit-adversarial, audit-fresh-eyes
- **Details:** Code gives Read,Write,Edit,Bash,Glob,Grep. Plan says Read,Write,Edit only. Bash grants shell execution.
- **Confidence:** HIGH (agreement on the fact; disagreement on severity).

### CONV-7: 21% of codebase is dead code (3 agents)
- **Found by:** audit-functional-wiring (8 dead modules), audit-fresh-eyes (19 unused exported functions), audit-state (10 dead functions)
- **Details:** state/resume.ts, pa/pa-router.ts, pa/mini-pa-spawner.ts, logging/logger.ts, logging/cost-tracker.ts, instrumentation/metrics.ts, instrumentation/report.ts, types/report.ts -- all dead. Plus ~19 exported functions never called from the main execution path.
- **Confidence:** HIGH.

### CONV-8: No test suite (3 agents)
- **Found by:** audit-fresh-eyes, audit-meta-cognitive, audit-functional-compile (tests/ only has fixtures/)
- **Details:** Zero test files. For a $150-250 per run system, critical pure functions (rotation, conviction extraction, HTML extraction, phase routing) have no unit tests.
- **Confidence:** HIGH.

### CONV-9: archivePass has silent empty catch (3 agents)
- **Found by:** audit-functional-wiring (W-06), audit-adversarial (S-06), audit-fresh-eyes (Potential Bug A)
- **Details:** `pass-executor.ts:371` -- catch block says "log but don't throw" but the body is EMPTY. Disk full / permissions errors are completely silent.
- **Confidence:** HIGH.

### CONV-10: --dangerously-skip-permissions not in plan (3 agents)
- **Found by:** audit-agents-cli (WRONG), audit-adversarial (7F), audit-meta-cognitive (7F)
- **Details:** Hardcoded on every spawn at claude-cli.ts:53. Not in plan anywhere. Necessary for automated operation but has security implications.
- **Confidence:** HIGH.

### CONV-11: MAX_DISCOVERY_ENTRIES never enforced (3 agents)
- **Found by:** audit-adversarial (R-05), audit-meta-cognitive (implicitly), audit-fresh-eyes (implicitly in unbounded state growth)
- **Details:** `MAX_DISCOVERY_ENTRIES = 100` exists as a constant but is NEVER used in any `.slice()` call. Discovery log grows unbounded.
- **Confidence:** HIGH.

---

## 3. BLIND SPOTS: What No Agent Checked

### BS-1: Template CONTENT quality
No agent evaluated whether the builder-corpus.md template (278 lines) would actually cause Opus to produce good HTML. All agents verified variable placeholders and structure, but nobody asked: "Is this a good prompt?" The templates ARE the product. (Identified by audit-meta-cognitive but not actually tested.)

### BS-2: Corpus file freshness and token size accuracy
`corpus.ts` hardcodes `approximateLines` for each file (e.g., `mechanism-catalog.md: 751`), but the actual file is now 1,878 lines (2.5x). Nobody verified actual file sizes against listed sizes. Token budget calculations based on stale `approximateLines` values would underestimate by 50%+.

### BS-3: Token estimation accuracy against real content
`CHARS_PER_TOKEN = 4` is used everywhere. Nobody ran `estimateTokens()` against actual corpus content to validate. For CSS/HTML-heavy content, the real ratio is 3.2-3.5, potentially underestimating by 15-25%.

### BS-4: Real-world timing estimates per role
Nobody checked whether DEFAULT_TIMEOUT_MS (10 min) is sufficient for all roles. The weaver has max-turns=40 and reads 10+ files. Phase 0 agents have max-turns=30 with tools. No timing validation.

### BS-5: Marker extraction against real Opus output
The conviction extraction regex, HTML marker extraction, and discovery log extraction were verified structurally but nobody tested them against actual Claude Opus output to check for format deviations.

### BS-6: Cross-subset verifier signal quality
`cross-subset-verifier.ts` classifies results by checking if the text contains the string "CRITICAL". Nobody audited whether this string-match approach reliably detects actual critical regressions vs. negative mentions of the word.

### BS-7: Disk space growth over a full run
Each of 56 passes archives prompt + response + artifact-backup. Plus screenshots, checkpoints, PA reports. Estimated 50-100MB per run with no cleanup mechanism. Nobody measured.

### BS-8: allRequiredPassed=true when zero gates ran
Only found by audit-adversarial (S-02). When the gate runner fails entirely, `allRequiredPassed: true` is set despite zero gates running. The weaver could receive a false "all gates passed" signal from a total infrastructure failure.

### BS-9: Dual-instance race condition
Only found by audit-adversarial (ST-01). No lock file prevents running the pipeline twice on the same output directory. Both instances would write to the same state.json and output.html, causing complete state corruption.

---

## 4. TOP 10 FINDINGS RANKED BY SEVERITY

### 1. BLOCKING: resume.ts 6-step algorithm is dead code; pipeline resume skips integrity checks
- **Severity:** BLOCKING
- **Found by:** audit-state, audit-functional-wiring, audit-metacognitive, audit-fresh-eyes, audit-adversarial (5 agents)
- **Impact:** Resume after crash: no config hash check (wrong config silently accepted), no artifact integrity verification (corrupted artifact silently used), no inFlightPass recovery (crashed pass silently skipped)
- **Fix:** Replace `deps.loadState(config)` at pipeline.ts:123 with `resumePipeline()` from resume.ts. 5-10 lines changed.
- **Effort:** 30 min

### 2. BLOCKING: Two broken hardcoded paths in config/paths.ts
- **Severity:** BLOCKING
- **Found by:** audit-config-templates (F3-1, F3-2)
- **Impact:** Runtime crash when assembler loads `{CASE_STUDY}` or `{RESEARCH_FILES}` variables. Affects builder, refine-builder, and weaver templates.
- **Fix:** Change `caseStudy` path from `CD-006/exploration.html` to actual file. Change `r5` from `R5-agent-assisted-design-review.md` to `R5-COMBINATION-THEORY.md`.
- **Effort:** 5 min

### 3. BLOCKING: Logging infrastructure (Logger, cost-tracker, metrics, report) is fully implemented but never wired in
- **Severity:** BLOCKING (for observability; pipeline runs but produces no structured logs)
- **Found by:** audit-functional-wiring, audit-fresh-eyes, audit-logging (indirectly)
- **Impact:** No passes.jsonl, no errors.jsonl, no quality.jsonl, no run-report.json. The only output is console.log. A $200+ run produces no structured telemetry.
- **Fix:** Instantiate Logger in pipeline.ts, replace `deps.log()` with Logger methods, call `generateReport()` at pipeline completion. ~50-100 lines.
- **Effort:** 2-4 hours

### 4. HIGH: Refine-builder hash desync -- artifact hash not updated when refine-builder writes via tools
- **Severity:** HIGH
- **Found by:** audit-adversarial (S-01)
- **Impact:** Data corruption on resume. If refine-builder writes artifact via Edit/Write tools (not via response text), `state.currentArtifactHash` still reflects the OLD artifact. Resume would detect mismatch and potentially overwrite the refined artifact with the backup.
- **Fix:** After refine builder completes, always re-read and re-hash the artifact from disk. 10 lines.
- **Effort:** 15 min

### 5. HIGH: No dual-instance protection (lock file)
- **Severity:** HIGH
- **Found by:** audit-adversarial (ST-01)
- **Impact:** Running pipeline twice on same content produces complete state corruption. Two instances write interleaved state.json updates, double-count costs, flip artifact between versions.
- **Fix:** Write `outputDir/.lock` with PID at startup, check on startup, remove on clean exit. 20 lines.
- **Effort:** 30 min

### 6. HIGH: No artifact size hard limit
- **Severity:** HIGH
- **Found by:** audit-adversarial (R-01)
- **Impact:** Builder producing >500KB HTML triggers WARNING (not ERROR). Oversized artifact cascades into subsequent prompts, exceeding TOKEN_FAIL. Token trimming has no mechanism to trim CURRENT_ARTIFACT.
- **Fix:** Change html-validator.ts warning to error for >200KB. Add CURRENT_ARTIFACT to trimming strategy. 15 lines.
- **Effort:** 1 hour

### 7. HIGH: PA auditor `{CURRENT_ARTIFACT}` set to PATH not content
- **Severity:** HIGH
- **Found by:** audit-assembler (WRONG-1, WRONG-2)
- **Impact:** PA auditor and integrative auditor templates substitute a FILE PATH string where HTML content is expected. Auditors may try to audit a filepath string instead of the actual HTML. Every other `{CURRENT_ARTIFACT}` usage loads content via `loadFileOrEmpty()`.
- **Fix:** Change `assembler.ts:438` and `assembler.ts:470` from `htmlPath` to `loadFileOrEmpty(htmlPath)`. 2 lines.
- **Effort:** 5 min

### 8. MEDIUM: allRequiredPassed=true when zero gates evaluated
- **Severity:** MEDIUM
- **Found by:** audit-adversarial (S-02)
- **Impact:** Total gate infrastructure failure is treated as "everything passed." Weaver may receive false SHIP signal.
- **Fix:** Set `allRequiredPassed = gates.length > 0` when constructing gate verdict with empty results. 3 lines.
- **Effort:** 5 min

### 9. MEDIUM: configHash excludes subsetFilter and skipPhaseA
- **Severity:** MEDIUM
- **Found by:** audit-adversarial (ST-05)
- **Impact:** Changing `--subset 3` to `--subset 5` between runs is undetected on resume. Pipeline continues from saved state with new subset filter.
- **Fix:** Add `subsetFilter`, `skipPhaseA`, `designSystemDir` to the config hash computation. 5 lines.
- **Effort:** 10 min

### 10. MEDIUM: MAX_DISCOVERY_ENTRIES (100) never enforced
- **Severity:** MEDIUM
- **Found by:** audit-adversarial (R-05)
- **Impact:** Discovery log grows unbounded. State.json bloats. 56 passes x multiple entries per pass = potentially hundreds of entries.
- **Fix:** Add `.slice(-MAX_DISCOVERY_ENTRIES)` at pass-executor.ts:233 after appending. 1 line.
- **Effort:** 2 min

---

## 5. IF YOU COULD ONLY FIX 5 THINGS

### Fix 1: Wire resume.ts into the pipeline (Finding #1)
**Why first:** Resume is a safety net for a 12-20 hour, $200+ run. Without it, any crash produces undefined behavior on restart. The code is ALREADY WRITTEN -- it just needs to be called.

### Fix 2: Fix the 2 broken paths in paths.ts (Finding #2)
**Why second:** These cause immediate runtime crashes on Pass 1. The pipeline CANNOT RUN with these broken. 5-minute fix.

### Fix 3: Fix PA auditor CURRENT_ARTIFACT = path instead of content (Finding #7)
**Why third:** PA auditors are a core pipeline feature. If they receive a filepath string instead of HTML, all 8 auditor reports are based on wrong input. The weaver's verdict is based on garbage. 2-line fix.

### Fix 4: Wire Logger into the pipeline (Finding #3)
**Why fourth:** A $200+ run with no structured telemetry is flying blind. The Logger is fully implemented -- it needs instantiation and method calls. Without it, debugging pipeline issues requires parsing console.log output.

### Fix 5: Add lock file for dual-instance protection (Finding #5)
**Why fifth:** The most catastrophic user error (running twice) has no guard. 20-line fix prevents complete state corruption.

---

## 6. OVERALL VERDICT

### NEEDS FIXES (then runnable)

The pipeline is NOT fundamentally broken. The architecture is sound:
- Phase 0/A/B structure is correctly implemented (56-pass carousel + PA hardening)
- Types are 118/118 IMPLEMENTED (0 MISSING, 0 WRONG)
- Rotation logic is 8/8 correct
- PA subsystem is 14/15 correct
- CLI compiles, dry-run works, error handling passes 8/9 tests
- All 37 corpus file paths exist on disk
- Token isolation is thorough (4-layer, correctly implemented)
- Immutable state pattern, atomic writes, DI -- solid engineering

But 3 items prevent a successful first run:
1. **Two broken paths** (caseStudy, r5) cause immediate crashes
2. **PA auditor gets filepath instead of HTML content** -- corrupts all auditor reports
3. **Logger not wired in** -- no observability for a multi-hour run

And 4 items make resume/recovery unsafe:
4. **resume.ts dead code** -- crashes during 12-20 hour runs produce undefined behavior
5. **No lock file** -- accidental double-run corrupts everything
6. **Refine-builder hash desync** -- resume after refinement may overwrite improvements
7. **configHash incomplete** -- config changes between runs are undetected

After fixing items 1-7, the pipeline is RUNNABLE. The dead code (21% of codebase, 8 modules, 19 unused functions) is cosmetic -- it doesn't prevent operation, but it degrades maintainability.

### Dead Code Inventory (for cleanup)

| Module | Lines | Status |
|--------|-------|--------|
| state/resume.ts | 200 | Dead (but SHOULD BE WIRED IN, not deleted) |
| state/checkpoint.ts | 94 | Dead (pipeline uses inline checkpoint) |
| pa/pa-router.ts | ~60 | Dead (duplicates phase-router.ts -- DELETE) |
| pa/mini-pa-spawner.ts | ~80 | Dead (not yet wired -- future feature) |
| logging/logger.ts | 109 | Dead (SHOULD BE WIRED IN, not deleted) |
| logging/cost-tracker.ts | 75 | Dead (duplicates inline cost tracking -- DELETE) |
| instrumentation/metrics.ts | 63 | Dead (depends on Logger -- wire after Logger) |
| instrumentation/report.ts | 203 | Dead (SHOULD BE CALLED at pipeline end) |
| types/report.ts | 73 | Dead (only used by report.ts -- wire with it) |
| **Total dead** | **~957 lines** | **21% of ~4,500 LOC** |

Additionally, 19 exported functions are never called from the main path (see audit-fresh-eyes for complete list).

---

## 7. THE UNCOMFORTABLE QUESTION: Is the 56-Pass Architecture Validated?

### Answer: NO. Zero empirical evidence exists.

**What we know:**
- The 56-pass carousel (7 subsets x 8 passes) is the most expensive hypothesis in the codebase
- Phase A alone is estimated at $80-120 (56 Opus calls at $1.50-2.00 each)
- The project's own research (Fat Core Capability Team, 25 Opus agents) concluded: "Unanimous: RUN EXPERIMENTS before building more infrastructure"
- The response was to build 6,400 lines of infrastructure without running the experiment

**What the audit reveals about the hypothesis:**
- Builders get max-turns=1 with no tools. Each builder is a one-shot prompt that must emit the ENTIRE HTML artifact. By pass 30+, this is 3,000-5,000+ lines of HTML in a single output.
- The conviction layer (the mechanism for passing "creative tissue" between passes) is capped at 10 entries with FIFO. By subset 2, ALL subset 1 convictions are evicted. The "accumulated creative intelligence" is really a 2-pass rolling window.
- Infrastructure files (mechanism catalog 1,878 lines + components.css 944 lines + tokens.css 183 lines = 3,005 lines) are loaded identically on all 56 passes in the same position. If attention bias is the concern, the NON-ROTATED infrastructure files are the largest static block.
- The refine-builder (Phase B, max-turns=25, full tools) is overwhelmingly more capable than any Phase A builder. It's likely that Phase B's single refine pass produces more improvement than all of Phase A.

### The Cheapest Validation ($15, 30 minutes)

As proposed by audit-meta-cognitive:

1. Take the existing Yegge Gas Town content
2. Run a SINGLE `claude -p --model opus` call with the builder template, ALL 38 corpus files (no rotation), conviction brief, `--max-turns 30`, tools=Read,Write,Edit. Cost: ~$8-10.
3. Run a stripped-down Phase B (3 auditors instead of 9). Cost: ~$5-7.
4. Compare the PA-05 score to the pipeline's output.

**If single-pass >= 3.0 PA-05:** The 56-pass carousel adds at most 0.5 points for 15x the cost. Phase A is a bad investment.
**If single-pass < 2.0 PA-05:** Multi-pass integration may provide real value. Proceed with Phase A, but test at 8 passes (1 subset) first.

This experiment should be run BEFORE the next live pipeline run. It resolves the most important architectural question at 1/15th the cost.

### Alternative Architecture (from audit-meta-cognitive)

If the 56-pass hypothesis fails, a 4-pass architecture provides 90% cost reduction:

```
Pass 1: FOUNDATION (max-turns 30, full tools) -- Build complete HTML from all corpus
Pass 2: ENRICHMENT (max-turns 20, tools: Read) -- Corpus in different order, enhance
Pass 3: REFINEMENT (max-turns 15, tools: Read, Edit) -- Targeted improvements
Pass 4: PA CYCLE (existing Phase B)
```

Cost: ~$37-90 total (vs $200-250). Time: ~1-2 hours (vs 12-20 hours).

This preserves Phase B (the genuinely valuable automated PA) while replacing Phase A's unproven 56-pass carousel with a proven multi-turn approach.

---

## APPENDIX: Cross-Reference Matrix

| Finding | Types | Orch | Rot/Conv | Assembler | CLI | State | PA | Config | Logging | Compile | Wiring | Meta | Advers | FreshEyes | MetaCog |
|---------|:-----:|:----:|:--------:|:---------:|:---:|:-----:|:--:|:------:|:-------:|:-------:|:------:|:----:|:------:|:---------:|:-------:|
| resume.ts dead | | | | | | X | | | | | X | X | X | X | |
| Logger dead | | | | | | | | | X | | X | | | X | |
| pa-router.ts dup | | | | | | | | | | | X | X | | X | |
| checkpoint.ts dead | | | | | | X | | | | | X | | | X | |
| Broken paths | | | | | | | | X | | | | | | | X |
| Refine extra tools | | | | | X | | | X | | | | | X | X | |
| No tests | | | | | | | | | | X | | | | X | X |
| archivePass silent | | | | | | | | | | | X | | X | X | |
| skip-permissions | | | | | X | | | | | | | | X | | X |
| Discovery unbounded | | | | | | | | | | | | | X | | X |
| CURRENT_ARTIFACT=path | | | | X | | | | | | | | | | | |
| allRequiredPassed bug | | | | | | | | | | | | | X | | |
| Lock file missing | | | | | | | | | | | | | X | | |
| Hash desync | | | | | | | | | | | | | X | | |

---

## APPENDIX: Severity Distribution Across All 15 Reports

| Severity | Count | Percentage |
|----------|-------|------------|
| BLOCKING | 3 | 7% |
| HIGH | 4 | 10% |
| MEDIUM | 14 | 34% |
| LOW | 20 | 49% |
| **Total findings** | **41** | 100% |

Note: Many findings overlap across reports. The TOP 10 list above deduplicates and represents the ~15 truly unique actionable items.
