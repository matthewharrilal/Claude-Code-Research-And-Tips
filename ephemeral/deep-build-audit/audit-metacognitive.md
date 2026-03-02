# Metacognitive Audit: Does the Implementation Match the Vision?

**Auditor:** Opus 4.6 (zero prior involvement in build)
**Date:** 2026-02-28
**Files reviewed:** 38 source files across 8 directories, 10 templates, all type definitions

---

## Executive Summary

The implementation is **structurally faithful to the vision** but contains **4 architectural gaps** that would cause failures in a real 12-20 hour run, and **2 silent design decisions** that contradict the stated intent. The code is well-typed, DI-heavy, and clean. But several critical path behaviors are either not what you think they are, or depend on external components that are missing or incomplete.

**Verdict: Would NOT survive a full E2E run without intervention.** Likely fails at Pass 1 (builder max-turns=1 + tools='' means the LLM cannot write the artifact to disk), and would fail again in Phase B (dual routing modules, gate-runner-browser.js existence, HTTP server lifecycle).

---

## Question 1: Does the code ACTUALLY implement the 56-pass carousel?

**MOSTLY YES, with one critical gap.**

The math checks out:
- `PASSES_PER_SUBSET = 8`, `TOTAL_SUBSETS = 7` => 56 passes
- `PASS_ROLES = {1:builder, 2:verifier, 3:builder, 4:builder, 5:verifier, 6:builder, 7:builder, 8:verifier}` -- 5 builders + 3 verifiers per subset
- `getRotationIndex()` maps passes 1-3 to rotation A(0), 4-6 to B(1), 7-8 to C(2)
- `computeRotation()` uses SHIFT_TABLE lookup by file count (4/5/6 files per subset)
- Phase A loop in `pipeline.ts:235-358` iterates subsets 1-7, passes 1-8 within each
- Cross-subset verification fires after S2/S4/S6 (correct)
- Checkpoints + retrospectives fire after each subset (correct)

**The critical gap:** Builder passes have `max-turns: 1` and `allowedTools: ''` (constants.ts:87-88, 101). With max-turns=1 and no tools, the builder gets ONE response turn with NO tool access. This means:
- The builder CANNOT use Read/Write/Edit/Bash to interact with the filesystem
- The builder MUST return the entire HTML artifact as text in its response
- This is a valid design choice IF the prompt instructs the LLM to emit raw HTML between markers (which it does -- `extractHtml()` looks for `<!-- HTML_START -->...<!-- HTML_END -->`)
- BUT max-turns=1 means the LLM gets one shot. No iteration, no self-correction. For pass 1 (building from scratch), this may produce incomplete artifacts. For later passes (modifying existing artifact), emitting the full multi-thousand-line HTML in one turn is risky.

**Rotation carousel itself is correct.** SHIFT_TABLE values ([0,2,3] for 4 files, [0,2,4] for 5-6 files) ensure files rotate through primacy/valley/recency positions. The rotation module is pure, tested, and correct.

---

## Question 2: Does Phase B ACTUALLY implement 9-auditor PA -> weaver -> routing -> refinement loop?

**YES structurally, NO in practice (8+1 not 9 parallel, and two competing routing implementations).**

**What's implemented:**
- `auditor-spawner.ts`: Spawns 8 parallel auditors (A-H) via `Promise.allSettled`, then 1 sequential integrative (I). Each gets screenshots + HTML + guardrails + assigned questions. Total = 9 auditors.
- `weaver-spawner.ts`: Spawns 1 weaver that reads all auditor reports, conviction brief, builder reflection, gate results, screenshots, HTML. Outputs structured JSON `WeaverVerdict`.
- `pipeline.ts:367-582`: Phase B loop runs up to MAX_PA_CYCLES=3 cycles, each with screenshots -> gates -> auditors -> weaver -> routing -> optional refinement.

**Problems found:**

1. **Dual routing implementations.** `orchestrator/phase-router.ts` exports `routePhaseB()` (used by pipeline.ts). `pa/pa-router.ts` exports `routePA()` (not used by anything). The logic is identical but the code is duplicated. The unused `pa-router.ts` also exports a `detectStall()` that is NOT the same implementation as the one in `phase-router.ts`. **Risk:** Future maintenance confusion. Not a runtime bug.

2. **Auditor count:** 8 parallel + 1 sequential = 9 total (matches vision), but the integrative auditor (I) is NOT parallel with A-H. It runs after. This matches the design intent (I synthesizes A-H reports) but the pipeline comment says "8 auditors + 1 sequential integrative" not "9 parallel." Correct behavior.

3. **MIN_SUCCESSFUL_AUDITORS = 5.** If only 4 of 8 parallel auditors succeed, the pipeline logs a WARNING but continues to the weaver with partial data. If all 8 fail, it throws. This is the right graceful degradation.

4. **Refine builder gets Read/Write/Edit/Bash/Glob/Grep (max-turns=25).** The refine-builder is the ONLY builder that can actually use tools. The corpus builders (max-turns=1, tools='') cannot. This is a deliberate asymmetry -- corpus passes are "one-shot LLM output", refinement passes use interactive tool access. **This is the key design decision that makes or breaks the pipeline.**

---

## Question 3: Is state management sufficient for 12-20 hour runs with crash recovery?

**PARTIALLY. The bones are there but 3 gaps would cause pain.**

**What works:**
- `PipelineState` (v3 schema) is comprehensive: 42 fields covering phase, subset, pass, cost, conviction, discovery, error history, checkpoints, PA cycles, in-flight pass tracking.
- `atomicWriteFile()` uses temp-file + rename pattern (crash-safe).
- `inFlightPass` marker is set before each pass and cleared after, enabling crash recovery.
- State is saved after every pass, every subset checkpoint, every PA cycle.
- `resume.ts` has a 6-step integrity verification (schema version, config hash, artifact hash, backup recovery).

**Gaps:**

1. **Resume path in pipeline.ts does NOT use resume.ts.** The `runPipeline()` function handles `config.resume` by calling `deps.loadState()` directly (pipeline.ts:122-124), which calls `state-manager.ts:loadState()`. The comprehensive 6-step `resumePipeline()` in `resume.ts` is NEVER CALLED by the pipeline. The pipeline does its own simpler resume: load state, check `state.currentSubsetId` and `state.currentPass`, and restart from there. This means:
   - No config hash verification on resume (state could be from different config)
   - No artifact integrity check on resume (artifact on disk could be corrupted)
   - `inFlightPass` is NOT checked on resume (the field exists in state but the pipeline loop just uses `currentSubsetId` and `currentPass`)

   **This is the highest-risk state management bug.** A crash mid-pass would leave `inFlightPass` set, but resume ignores it and starts from the next pass number, potentially skipping a failed pass.

2. **No WAL or append-only log.** State is overwritten each time. If the process crashes during `atomicWriteFile()` (between writing temp and rename), both files could be lost. On modern filesystems rename is atomic, so this is unlikely but not impossible under I/O errors.

3. **Cost tracker accumulation is forward-only.** If a pass is re-run on resume, its cost is added again. There's no deduplication. Over a 12-20 hour run with multiple crashes, the cost tracker could drift from reality.

---

## Question 4: Are there ARCHITECTURAL gaps -- not missing fields but wrong mental model?

**YES. Four fundamental ones:**

### Gap A: Builder max-turns=1 + tools='' = one-shot HTML generation

The entire 56-pass Phase A runs with builders that get ONE turn and ZERO tools. This means:
- Builder cannot read files from disk (the corpus files are concatenated INTO the prompt by the assembler)
- Builder cannot write files to disk (the HTML must appear in its text response)
- Builder cannot iterate or self-correct

This is a valid architecture for a system where the orchestrator does all I/O and the LLM is a pure function (text in, text out). **But it means the builder's max output size is limited by the model's max output tokens (~8K-32K tokens depending on model).** For a complex HTML page that might be 5000+ lines, this is tight. The vision of "56 passes building a page" assumes each pass can modify the existing artifact, but with max-turns=1 and no tools, the builder must EMIT THE ENTIRE ARTIFACT every time. This means:
- Pass 1 (S1P1): Builder creates initial artifact from scratch (fine)
- Pass 7 (S1P7): Builder must read the full artifact (included in prompt) and EMIT the full artifact modified (may be 3000-5000+ lines by now)
- Pass 56 (S7P8): Builder must emit the full final artifact (potentially 5000+ lines)

The artifact grows with each pass. Token budget for the response must accommodate the full artifact. **If the artifact exceeds output token limits, passes silently fail or truncate.** `extractHtml()` will catch truncation (missing `</html>`) and the pass will be marked as failed, but there's no retry or fallback.

### Gap B: Two HTTP server instances per PA cycle

In `createDefaultDeps()`, both `captureScreenshots()` and `runGates()` call `startArtifactServer()` independently. This means:
- Screenshot capture starts server on port 8765+, takes screenshots, kills server
- Gate runner starts a NEW server on port 8765+ (or same port if the first was killed), runs gates, kills server
- This works but is wasteful (2 Playwright launches + 2 server lifecycles per cycle)
- **More importantly: if the screenshots show one state and the gates test a different state (because the artifact changed between server starts), results are inconsistent.** In practice this can't happen because no other process modifies the artifact between these calls, but the architecture doesn't guarantee it.

### Gap C: Prompt assembly loads files eagerly, not lazily

`resolveBuilderVariables()` loads ALL infrastructure files, ALL corpus files, the conviction layer, discovery log, verifier observations, previous subset summaries, AND the current artifact into memory simultaneously. For a single builder prompt, this could be:
- ~1900 lines infrastructure (mechanism catalog + components CSS + tokens CSS)
- ~500-1000 lines corpus files (5-6 files per subset)
- ~2000-5000+ lines current artifact (grows over time)
- Plus conviction, discovery, content markdown, etc.

Total prompt could easily be 50,000-100,000 tokens. The `trimIfNeeded()` function exists but its trimming strategy is limited:
1. Trim conviction layer (removes oldest entries -- saves maybe 1000 tokens)
2. Trim valley-position corpus files (removes 1-2 files -- saves maybe 5000 tokens)

There's no mechanism to trim the CURRENT_ARTIFACT, which is likely the largest variable by pass 30+. And there's no mechanism to trim infrastructure files. **If the artifact grows past ~4000 lines, the combined prompt could exceed TOKEN_FAIL (105K tokens) with no recovery path.**

### Gap D: Conviction layer is append-only within a pass, but FIFO-capped globally

The conviction layer has MAX_CONVICTION_ENTRIES=10. When exceeded, oldest entries are dropped (sorted by passNumber, then addedAt). This means by the time you're in S7 (pass 49-56), ALL conviction from S1-S4 has been evicted. The conviction is supposed to carry "creative tissue" across passes, but it only remembers the most recent 10 entries. For a 56-pass pipeline, this is a very small window.

This may be intentional (keep the conviction layer fresh and relevant) but it means early creative decisions are NOT preserved. By Phase B, the conviction layer only contains entries from the last few passes of S7.

---

## Question 5: If you ran this RIGHT NOW on real content, what would happen?

Assuming all corpus files and templates exist on disk, here's the execution trace:

1. **CLI parses args, builds config** -- works fine
2. **Workspace setup** -- creates isolated workspace with .git/HEAD, validates corpus paths. Would work.
3. **Phase 0: TC derivation** -- spawns `claude -p` with max-turns=30, tools=Read/Write/Edit. The TC derivation agent reads the content markdown and design system files, writes `_tc-brief.md`. Would probably work.
4. **Phase 0: Content analysis** -- similar to TC derivation. Would probably work.
5. **Phase A, Pass 1 (S1P1, builder)** -- assembles prompt with full corpus subset S1 (5 files), infrastructure files, content markdown, empty conviction/discovery. Spawns `claude -p` with **max-turns=1, tools=''**. Builder gets ONE turn. Must output full HTML between markers. The prompt includes all the corpus material and instructions. **This is the first real test.** If the builder outputs valid HTML with markers, `extractHtml()` extracts it, `validateHtml()` checks it, and the artifact is written to disk. **Likely outcome: works, but HTML may be simplistic (one turn, no iteration).**
6. **Pass 2 (S1P2, verifier)** -- verifier gets max-turns=1, tools=''. Reads the artifact (in prompt) and the diff from the previous pass. Outputs observations. Verifier observations are stored (rolling window of 3). **Works fine.**
7. **Pass 3 (S1P3, builder)** -- now must include the CURRENT_ARTIFACT (from pass 1) in the prompt AND output a modified version. The builder has NO tools, so it must re-emit the entire artifact. If the artifact from pass 1 was 500 lines, this is manageable. If it was 2000+ lines, output token pressure starts.
8. **Passes 4-8** -- same pattern. Artifact grows with each builder pass. By pass 8, artifact might be 2000-3000 lines. The verifier pass at P8 would need the full artifact in prompt context.
9. **Subset checkpoint** -- artifact and state are saved. Retrospective agent is spawned (max-turns=10, tools=Read). This works.
10. **Subsets 2-7** -- same pattern, but artifact grows. By S4-S5, token pressure is real. By S7, the prompt may be 80,000-100,000 tokens with the full artifact + corpus + infrastructure.
11. **Phase B, Cycle 1** -- screenshots are captured (Playwright launches, serves HTML, captures at 3 viewports). Gates are run (Playwright launches again, injects gate-runner-browser.js). **Here's a problem: `gate-runner-browser.js` must exist as a file.** It's referenced by `gate-runner.ts` but the Glob for the codebase shows NO `.js` files in the validation directory. If this file doesn't exist, gate runner throws `PlaywrightError`. The pipeline catches this as non-fatal (`gateResults = {}` on failure), so the PA cycle continues with empty gate results. Acceptable degradation.
12. **Auditors A-H spawn in parallel** -- 8 concurrent `claude -p` processes, each with max-turns=30. Each reads screenshots (PNG images) and HTML artifact. The auditors get `Read,Glob,Grep` tools. They can read the screenshot files. **This would work but is extremely API-heavy:** 8 parallel Opus calls, each with images + HTML + guardrails. Estimated cost: $10-30 per cycle.
13. **Integrative auditor I** -- sequential after A-H. Reads all reports. Works.
14. **Weaver** -- synthesizes all reports into WeaverVerdict JSON. max-turns=40, tools=Read/Glob. The weaver's prompt includes ALL auditor report texts inline (not file paths). This could be a very large prompt. Weaver must output a structured JSON block. `parseWeaverVerdict()` extracts it. **Risk: if the JSON block is malformed, the entire PA cycle fails with an exception.** The pipeline does NOT catch weaver parse failures gracefully (pipeline.ts:443 `throw error`).
15. **Routing** -- `routePhaseB()` is deterministic and correct. SHIP requires PA-05 >= 3.5 AND tier5 >= 6 AND zero soul violations. First cycle almost certainly returns REFINE.
16. **Refine builder** -- spawns with max-turns=25 and full tool access. Can Read/Write/Edit the artifact. This is the most capable agent in the pipeline. **This is where real improvement happens.** But the refine builder reads the weaver's synthesis report from `_pa/weaver-synthesis.md` (or falls back to `weaverVerdict.narrativeSummary`). If the file was written correctly, this works.
17. **Cycle 2-3** -- same as cycle 1. Stall detection fires if 2 consecutive cycles show no PA improvement.

**Overall prediction:** The pipeline would START successfully but likely encounter issues around pass 20-30 (artifact size in prompt exceeding comfortable token limits) or at Phase B (weaver JSON parse failure, gate-runner-browser.js missing). Estimated cost for a full run: $100-200.

---

## Question 6: What's the single biggest risk to this pipeline working end-to-end?

**The builder's max-turns=1 constraint creating a silent quality ceiling.**

Every corpus builder pass gets ONE output turn. No tools. Must emit the entire HTML artifact in that turn. As the artifact grows across 56 passes, the builder must:
1. Read the full artifact (in its prompt context)
2. Understand what to modify
3. Output the ENTIRE modified artifact (not a diff, the whole thing)
4. Include conviction markers and discovery log after the HTML

By pass 30+, the artifact might be 3000-5000 lines. The builder's output must be at least that long PLUS the markers. Claude Opus's max output is ~32K tokens. 5000 lines of HTML at ~1.5 tokens/line = ~7500 tokens. With the surrounding text, we're at ~10K tokens output. This is within limits but leaves no room for explanatory text.

**The real risk is not overflow but QUALITY.** A builder that can't iterate, can't self-check, can't test, is operating with one hand tied behind its back. The vision of "56 passes building complexity" assumes each pass contributes meaningfully. But a one-shot builder with no tools is fundamentally limited to "here's my best guess at the entire artifact."

The refine-builder (Phase B) gets max-turns=25 and full tools. This asymmetry means Phase A builds a rough draft and Phase B does the real work. **If that's the intent, 56 passes may be overkill for Phase A. If quality iteration is the intent, max-turns=1 for builders is the bottleneck.**

---

## Question 7: Does the creative tissue (conviction layer) actually flow between passes as designed?

**YES mechanically, NO semantically.**

**What works:**
- `extractConvictionFromResponse()` parses `<!-- CONVICTION_ADDITION_START -->` markers from builder output
- `addConviction()` appends new entries, FIFO-drops oldest when cap (10) exceeded
- `formatConvictionLayer()` formats entries grouped by dimension for prompt insertion
- The conviction layer is included in every builder prompt via `{CONVICTION_LAYER}` variable

**What doesn't work:**
1. **Builders with max-turns=1 and tools='' must output conviction markers IN ADDITION to the full HTML.** The builder must output: HTML between HTML markers, conviction between conviction markers, discovery between discovery markers. In one turn. This is a lot to ask, and builders under token pressure may omit the conviction markers to save tokens.

2. **Verifier passes (max-turns=1, tools='') don't contribute conviction.** Only builder passes extract conviction. Verifiers output observations that go to `verifierObservations[]`, not the conviction layer. This is by design but means 3 out of every 8 passes contribute nothing to creative tissue.

3. **Conviction cap of 10 entries means old convictions evict.** By S7, all S1-S4 convictions are gone. The builder in S7P7 has no memory of creative decisions from S1-S3. The discovery log (capped at 100 entries) provides more longitudinal memory but is less structured.

4. **Conviction dimensions are sparse.** The 6 dimensions (BUILT/TRYING/REJECTED/SURPRISED/WANTED/UNRESOLVED) are meaningful but extracting them reliably from one-shot builder output is fragile. The regex extraction in `extractConvictionFromResponse()` expects each dimension on its own line with `LABEL: content` format. If the builder doesn't follow this format exactly, dimensions are silently dropped.

**Net assessment:** Conviction flows mechanically but degrades over time due to FIFO capping, and its quality depends entirely on builders reliably outputting formatted conviction markers in their one turn. In practice, expect 50-70% of passes to successfully contribute conviction entries.

---

## Question 8: Is the token isolation sufficient to prevent context pollution?

**YES. Token isolation is the strongest part of the implementation.**

The 4-layer isolation is thorough:

1. **`--no-session-persistence`** -- prevents Claude from reading/writing session state between calls
2. **`--setting-sources ''`** -- prevents loading user-level or project-level settings
3. **`CLAUDECODE: undefined`** -- removes any parent Claude Code environment
4. **Isolated workspace with `.git/HEAD`** -- blocks upward CLAUDE.md traversal (agents can't read the project's CLAUDE.md)
5. **`--strict-mcp-config`** for PA auditors -- denies Playwright access to auditors (they should read screenshots via Read tool, not take their own)
6. **`--allowedTools` per role** -- each agent type gets only the tools it needs
7. **`DISABLE_TELEMETRY`, `DISABLE_AUTO_COMPACT`, `DISABLE_AUTOUPDATER`** -- prevents background processes from interfering

**The only leak vector:** The `--add-dir` flag grants read access to additional directories. Builders get no `--add-dir` (they get everything in the prompt). PA auditors and weaver get `--add-dir` to the output directory and artifact directory. The refine-builder gets `--add-dir` to the design system AND output directory, which is appropriate (it needs to reference design system files).

**Verdict: Context pollution risk is LOW.** Each claude -p call is genuinely isolated. No session state persists. No cross-agent communication except through the orchestrator's state management. This is correct and well-implemented.

---

## Architectural Gaps Summary (Ranked by Impact)

| # | Gap | Severity | Evidence |
|---|-----|----------|----------|
| 1 | Builder max-turns=1 creates quality ceiling; output must contain full artifact + markers in one turn | HIGH | constants.ts:87, pass-executor.ts:112-134 |
| 2 | resume.ts 6-step verification is unused; pipeline.ts does simpler resume that skips config hash + artifact integrity checks | HIGH | pipeline.ts:120-124 vs resume.ts:39-74 |
| 3 | Prompt token pressure grows linearly with artifact size; no CURRENT_ARTIFACT trimming strategy | MEDIUM | assembler.ts:172, trimIfNeeded() only trims conviction + valley corpus |
| 4 | Dual routing implementations (phase-router.ts vs pa-router.ts) -- only one used | LOW | phase-router.ts:25 used, pa-router.ts:17 dead code |
| 5 | gate-runner-browser.js file may not exist (no .js files in validation/) | MEDIUM | gate-runner.ts:18, but gate failure is non-fatal |
| 6 | Conviction FIFO cap=10 evicts early-pass creative decisions before they can influence later passes | MEDIUM | conviction-manager.ts:43-49 |
| 7 | Two HTTP server instances created per PA cycle (screenshots + gates) | LOW | pipeline.ts:841-867 (createDefaultDeps) |
| 8 | Weaver JSON parse failure throws uncaught exception, killing PA cycle | MEDIUM | weaver-spawner.ts:226, pipeline.ts:443 |

---

## Silent Design Decisions That May Not Match Intent

### Decision 1: Corpus builders are pure functions (no tools, one turn)

This is a deliberate choice that values determinism and token isolation over builder capability. But it means the 56 "passes" of Phase A are really 56 "one-shot prompts" where each builder must emit the complete artifact. The vision of iterative refinement across passes is achieved through the ORCHESTRATOR iterating (feeding previous output back as input), not through the BUILDER iterating within a pass.

**Is this what was intended?** If yes, the architecture is correct. If the intent was for builders to interact with the artifact (read it, make targeted edits, verify changes), then max-turns needs to increase and tools need to be granted.

### Decision 2: The refine-builder is the real builder; Phase A is a draft factory

With max-turns=25 and full tool access, the refine-builder is overwhelmingly more capable than the corpus builders. Phase A produces a draft; Phase B's refine-builder does the real work. This means the ROI of 56 corpus passes (estimated $50-80) may be low if a single refine-builder pass ($5-10) can achieve more.

**Counter-argument:** Phase A forces the artifact to absorb influence from ALL 35 corpus files across 7 subsets. A single refine-builder pass wouldn't have that coverage. The value of Phase A is corpus coverage, not individual pass quality. Whether 56 one-shot passes achieve better corpus integration than fewer multi-turn passes is an empirical question.

---

## Recommendations

1. **Fix resume path.** Either call `resume.ts:resumePipeline()` from the pipeline, or delete it and document the simpler resume approach.
2. **Add artifact size monitoring.** When CURRENT_ARTIFACT exceeds 60% of token budget, warn. When it exceeds 80%, consider a summarization strategy.
3. **Delete pa/pa-router.ts.** It's dead code that duplicates phase-router.ts.
4. **Wrap weaver verdict parsing in try-catch** in pipeline.ts Phase B loop. On parse failure, default to REFINE verdict rather than crashing.
5. **Consider max-turns=3 for corpus builders.** Even one extra turn for self-correction would significantly improve pass reliability, at modest cost (~2x per pass = ~$10 total).
6. **Verify gate-runner-browser.js exists** or create a stub that returns an empty array.
7. **Single HTTP server per PA cycle.** Start server once for both screenshots and gates.
