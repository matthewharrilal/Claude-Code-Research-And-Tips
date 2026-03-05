# /build-page v2 — Complete Implementation Plan (FIXED)

**Original Author:** plan-synthesizer (Opus)
**Fixed By:** plan-fixer (Opus)
**Date:** 2026-02-27
**Status:** AUTHORITATIVE — supersedes 30-IMPLEMENTATION-PLAN.md
**Source documents:** 01-current-state-map, 02-gate-audit, 03-skill-architecture, 04-reference-file-map, 05-tc-simplification-design, 07-first-principles-design, 10-orchestrator-plumbing, 11-window1-design, 12-window2-design, 13-window3-design
**Audit reports incorporated:** 20-contamination-audit, 21-ceremony-vs-necessity, 22-potential-issues, 23-metacognitive-analysis, 24-holistic-review, 31-plan-adversarial-review, 32-plumbing-freedom-audit

---

## CHANGE LOG

Every fix applied to the original plan, with the audit report that flagged it.

| # | Change | Source(s) | Category |
|---|--------|-----------|----------|
| 1 | Removed Step 4.2 (brief excerpt extraction for auditors) + removed [D] from Step 4.4 + updated "What Auditors Do NOT Receive" | B-01 (31), C-11/C-21/C-27 (20), 3C (21), PC-2/PC-3 (32) | BLOCKING |
| 2 | Removed Step 4.8 (contamination check on auditor reports) | B-02 (31), C-13/C-22 (20), 4B (21), PC-3 (32) | BLOCKING |
| 3 | Removed Step 2.5 (orchestrator experiential scan) + blocking_usability flag + auditor pre-seeding | B-03 (31), C-12 (20), 4A (21), PC-1 (32) | BLOCKING |
| 4 | Stripped GR-63 and GR-64 from gate list | B-04 (31), C-05/C-28 (20), 2G/2H (21) | BLOCKING |
| 5 | Stripped Category H builder narration gates (BV-08, GR-43, GR-83, GR-84) + removed EXPERIENTIAL-CHECK and SELF-EVALUATION comment mandates from prompt templates | B-05 (31), C-04/C-06 (20), 2F (21), FE-8 (32) | BLOCKING |
| 6 | Canonicalized gate count to 22 throughout (15 REQUIRED + 7 ADVISORY) | B-06 (31), 6C (21) | BLOCKING |
| 7 | Removed gate-manifest.json from file inventory + removed Phase 2 Step 2.6 | B-07 (31), 2B (21) | BLOCKING |
| 8 | Fixed RETHINK tiebreaker: fewer essential gate failures, then user choice (not "larger HTML") | B-08 (31), 5C (21) | BLOCKING |
| 9 | Added content length check (Step 0.2b) with warning at 5,000 lines and stop at 8,000 | B-09 (31), W1-04 (22), 1A/3B (23) | BLOCKING |
| 10 | Stripped 1024px viewport — capture at 1440px + 768px only. Updated mkdir, screenshot capture, dry run checklist | B-10 (31), 4D (21) | BLOCKING |
| 11 | Updated skill file size estimate from ~250 to ~500-600 lines | B-11 (31) | BLOCKING |
| 12 | Specified PA question extraction method: embed 20 question texts directly in /build-page skill, pre-grouped by auditor | B-12 (31), C-10/C-31 (20) | BLOCKING |
| 13 | Clarified Weaver prompt construction: orchestrator Reads all files and embeds content inline. Weaver does NOT read files. | B-13 (31) | BLOCKING |
| 14 | Fixed abbreviated file paths in Step 7 — all paths now fully qualified | B-14 (31) | BLOCKING |
| 15 | Deleted Verdict Logic from Section 3. Step 6.3 routing matrix is sole authority. Added identity-gate RETHINK rule. | B-15 (31) | BLOCKING |
| 16 | Reframed timeout: Task agents run to completion. "Timeout" = Task failure or no output. Embedded keyword lists for fallback scan. | B-16 (31), S-06 (31) | BLOCKING |
| 17 | Expanded mechanical patching to deterministic operations with exact values | B-17 (31), FE-9/FE-10 (32) | BLOCKING |
| 18 | All "pipeline" → "process" where referring to the new system | M-02 (31), C-01/C-07/C-08/C-15/C-19/C-25 (20) | MINOR |
| 19 | Added content suitability note in Step 0 | S-12 (31), 1A/3B (23) | SIGNIFICANT |
| 20 | Separated creative guidance from conventions brief — 3 lines moved to TC skill / receiving principle | S-08 (31), 5A (21), FE-4 (32) | SIGNIFICANT |
| 21 | Added post-REFINE regression check (gate comparison) | S-09 (31), Gap 2 (24) | SIGNIFICANT |
| 22 | Added user direction mechanism (_user-direction.md) | S-11 (31), 6A (24) | SIGNIFICANT |
| 23 | Added failure protocol section | 6D (24) | SIGNIFICANT |
| 24 | Simplified Step 4.7 to structural check only (file exists + > 100 bytes). Removed keyword content check. | M-06 (31), PC-2 (32) | MINOR |
| 25 | Added soft gate risk acknowledgment note | S-10 (31) | SIGNIFICANT |
| 26 | Added model choice justification note | S-03 (31), 1B (23) | SIGNIFICANT |
| 27 | Added post-navigation verification (page content check) | S-04 (31), W2-01 (22), P-02 (22) | SIGNIFICANT |
| 28 | Changed BV gates to check section COUNT (>= 5 sections with >= 3 lines each) instead of exact section names | S-05 (31), 2A (24), C-23 (20) | SIGNIFICANT |
| 29 | Embedded keyword lists directly in plan for routing fallback | S-06 (31) | SIGNIFICANT |
| 30 | Added RETHINK backup + exclusion protocol | S-07 (31) | SIGNIFICANT |
| 31 | Removed "ignore opposition map" from REFINE MAY NOT list | FE-6 (32) | MINOR |
| 32 | Removed line count targets from brief/reflection output instructions | FE-1/FE-2 (32) | MINOR |
| 33 | Simplified checkpoint to "Write your conviction brief before reading vocabulary" (removed redundant TC phase listing) | BB-1 (32) | MINOR |
| 34 | Removed "exactly" language from conventions items | FE-5 (32) | MINOR |
| 35 | Added HTTP server PID capture at Step 2.1 for clean kill at Step 8.5 | M-08 (31) | MINOR |
| 36 | Added failure protocol section (Section 8) | 6D (24) | SIGNIFICANT |
| 37 | Added Weaver convergence acknowledgment instruction | W2-07 (22) | MINOR |

---

## USER DECISIONS (NON-NEGOTIABLE — OVERRIDE ALL DOCUMENTS)

1. **Always 5 PA auditors.** Not 2 standard / 5 high-stakes. Every run gets 5 auditors.
2. **TC skill stays at 841 lines.** The rewrite at `ephemeral/tc-skill-update/SKILL-REWRITE.md` is the canonical TC. Do NOT simplify to ~300 lines.
3. **PA skill already rewritten and LIVE** at `~/.claude/skills/perceptual-auditing/SKILL.md` (524 lines). No changes needed.
4. **Gates reduced to 22.** 15 REQUIRED + 7 ADVISORY. See Section 3.
5. **TC + BUILD combined in one window.** Test combined first; separate only if weak.
6. **Call it a "process" not "pipeline."**
7. **Maximum programmatic enforcement** within Claude Code constraints.
8. **Plumbing + freedom architecture:** tight programmatic plumbing, full creative freedom inside each window.
9. **No brief excerpts for PA auditors.** Fresh-eyes principle: auditors receive ONLY screenshots + questions + language constraint. Zero context about builder intent.

### RECONCILIATION IMPACT

- 03-skill-architecture.md proposes 2 auditors (standard) / 5 (high-stakes). **OVERRIDDEN: always 5.**
- 03-skill-architecture.md proposes Weaver for high-stakes only. **RESOLVED: always Weaver.** 5 auditors always need synthesis.
- 05-tc-simplification-design.md targets ~300 lines. **OVERRIDDEN: keep 841-line SKILL-REWRITE.md.**
- 12-window2-design.md proposes 2 standard / 5 high-stakes. **OVERRIDDEN: always 5.**
- 03-skill-architecture.md provides brief sections 1+4 to auditors. **OVERRIDDEN: no brief to auditors (user decision #9).**

---

## SECTION 1: PLUMBING SPECIFICATION

Every programmatic step the orchestrator takes, in exact order. The orchestrator is an LLM following instructions — it WILL skip steps unless every step is a single unambiguous tool call with a verifiable artifact.

### Three Enforcement Patterns (design principles for the skill implementer)

1. **VERIFIABLE ARTIFACT CHAIN.** Every step produces a file. The NEXT step reads that file. Skip = visible break.
2. **PATH OF LEAST RESISTANCE.** Following is easier than skipping. Exact tool calls spelled out.
3. **ZERO INTERPRETABLE INSTRUCTIONS** for programmatic steps. No "evaluate." No "assess." Only: "Read X. If contains Y, set Z = true."

### STEP 0: Parse Input and Create Output Directory

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 0.1 | Parse command argument for `{content_path}`. If missing: ask user. | `content_path` variable | User cancels → stop |
| 0.2 | `Read({content_path}, limit=10)` | Verification that file exists + has content | File not found → `PRINT "ERROR: File not found." STOP.` |
| 0.2b | `Read({content_path})`. Count lines. | Content length check | IF > 5,000 lines: `PRINT "WARNING: Content is {N} lines. Pages over 5,000 lines may produce incomplete output."` IF > 8,000 lines: `PRINT "Content too long for single-window build. Consider splitting." STOP.` |
| 0.3 | Compute `slug` (filename, lowercase, hyphens) and `date` (YYYY-MM-DD). `output_dir = ephemeral/builds/{slug}-{date}/` | `output_dir` variable | None |
| 0.4 | `Bash("mkdir -p {output_dir}/_screenshots/1440 {output_dir}/_screenshots/768 {output_dir}/_pa")` | Directory tree | Permission denied → stop |
| 0.5 | `Bash("cp {content_path} {output_dir}/_content.md")` | `_content.md` in output dir | Copy fails → stop |
| 0.6 | `Glob("{output_dir}/_content.md")` | Proof file was copied | Zero results → `PRINT "ERROR: Copy failed." STOP.` |

**Content suitability note:** This process is optimized for content with narrative structure, register variation, and argumentative tension (essays, analyses, research syntheses). For reference content (API docs, tables, changelogs), consider a simpler direct build. Content shorter than 500 words may produce suboptimal results.

**NO mode prompt.** Always 5 auditors + Weaver.

### STEP 1: Spawn Window 1 Agent (DERIVE + BUILD)

**Construct the agent prompt by concatenating these sections IN ORDER:**

| Section | Source | Lines | Reading Order Position |
|---------|--------|-------|----------------------|
| [A] Receiving Principle | Literal 5-line text embedded in prompt | 5 | First (creative activation) |
| [B] TC Skill | `Read(~/.claude/skills/tension-composition/SKILL.md)` | 841 | Second (creative process guide) |
| [C] Raw content | `Read({output_dir}/_content.md)` | varies | Third (the material) |
| [CHECKPOINT] | Literal text: "STOP. Write your conviction brief before reading the vocabulary files below." | 2 | Phase gate |
| [D] Identity: prohibitions | `Read(design-system/compositional-core/identity/prohibitions.md)` | 419 | After brief written |
| [E] Identity: tokens | `Read(design-system/compositional-core/vocabulary/tokens.css)` | 183 | After brief written |
| [F] Mechanism catalog | `Read(design-system/compositional-core/grammar/mechanism-catalog.md)` | 751 | Tools for building |
| [G] Components CSS | `Read(design-system/compositional-core/components/components.css)` | 944 | Component library |
| [H] Conventions Brief | Literal ~14-line text embedded in prompt | 14 | Last (mechanical constraints) |

**NOTE on CHECKPOINT:** This is a soft gate. The agent sees the full prompt including vocabulary files below. The sequential processing instruction + TC skill phases are the enforcement mechanism. If the agent produces a brief that references mechanism catalog vocabulary, it skipped the checkpoint. BV gates do not catch this.

**The prompt ALSO includes output instructions:**

```
You MUST write these 3 files:
  1. {output_dir}/output.html — complete self-contained HTML page (all CSS embedded, no external deps)
  2. {output_dir}/_tc-brief.md — conviction brief, 5 sections:
     WORLD-DESCRIPTION, CALIBRATION, OPPOSITION, ARC, CONTENT MAP
  3. {output_dir}/_reflection.md — 3-dimension reflection:
     CONVICTION, ALTERNATIVES, UNRESOLVED
```

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 1.1 | 6x `Read()` calls (files B, C, D, E, F, G listed above) | Prompt content in orchestrator context | Any Read fails → stop |
| 1.2 | `Task(subagent_type="code", model=Opus, prompt=constructed_prompt)` | Agent execution | Agent crash → stop |
| 1.3 | Wait for completion | — | Task failure → stop |

**Artifact Verification (MANDATORY):**

| Verify | Tool Call | Check | On Failure |
|--------|-----------|-------|------------|
| 1.4 | `Glob("{output_dir}/output.html")` | File exists | `STOP.` No HTML = cannot continue. |
| 1.5 | `Read({output_dir}/output.html, limit=50)` | `> 10 lines` AND contains `<html` | `STOP.` Malformed HTML. |
| 1.6 | `Glob("{output_dir}/_tc-brief.md")` | File exists | `WARN.` Continue without brief. `SET has_brief = false` |
| 1.7 | `Glob("{output_dir}/_reflection.md")` | File exists | `WARN.` Continue without reflection. |

### STEP 2: Serve HTML and Capture Screenshots

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 2.1a | `Bash("lsof -ti:8888 | xargs kill 2>/dev/null")` | Clean kill of any prior process on port 8888 | Silently succeeds if port is free |
| 2.1b | `Bash("npx http-server {output_dir} -p 8888 --cors -c-1 & echo $!")` Capture PID from output. SET `server_pid`. SET `server_port = 8888`. | HTTP server running + PID captured | Port busy → try 8889 (`server_port = 8889`), then 8890. After 3: stop. |
| 2.2 | `browser_navigate("http://localhost:{server_port}/output.html")` | Page loaded in Playwright | Navigation fails → `browser_install`, retry once |
| 2.2v | `browser_evaluate(() => document.querySelector('html').innerHTML.length)` | Content length > 100 | Length < 100 → wrong page or failed load. Kill server, re-serve, retry once. |
| 2.3 | `browser_run_code(captureScreenshots)` using function from `gate-runner-core.js` Section 8. Capture at 2 viewports: 1440px and 768px. Cold-look + scroll-through at each. | Screenshots in `_screenshots/1440/` and `_screenshots/768/` | Function not found → stop |
| 2.4 | `browser_evaluate(checkScreenshotQuality)` (GR-62) | Screenshot quality validated | FAIL → re-capture once, re-validate. Still FAIL → warn, continue |

**Artifact Verification:**

| Verify | Tool Call | Check | On Failure |
|--------|-----------|-------|------------|
| 2.5 | `Glob("{output_dir}/_screenshots/1440/*.png")` | `count > 0` | CRITICAL: no screenshots for auditors. STOP. |
| 2.6 | `Glob("{output_dir}/_screenshots/768/*.png")` | `count > 0` | WARN: no responsive screenshots |
| 2.7 | Sum counts from 2.5 + 2.6. If `== 0`: `STOP.` | At least 1 screenshot | Cannot deploy auditors with zero images |

### STEP 3: Run Gate Runner (22 gates)

**Design: SINGLE ATOMIC GATE RUNNER.** One `browser_evaluate` call runs ALL gates and returns ONE JSON object. No selective execution.

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 3.0 | IF `has_brief`: `Read({output_dir}/_tc-brief.md)`. Count sections (lines starting with `##` or `#`). Check >= 5 sections, each with >= 3 non-empty lines. Print pass/fail per BV gate. | BV gate results (text) | Brief missing → skip BV gates |
| 3.1 | `Read(ephemeral/va-extraction/gate-runner-core.js)` | JS code in context | File missing → GATES_FAILED=true |
| 3.2 | `browser_evaluate(atomicGateFunction)` — runs ALL 22 gates, returns JSON string | JSON string with per-gate results + summary | Throws → GATES_FAILED=true, write error JSON |
| 3.3 | `Write({output_dir}/_gate-results.json, jsonString)` | Gate results file | Write fails → GATES_FAILED=true |

**Artifact Verification:**

| Verify | Tool Call | Check | On Failure |
|--------|-----------|-------|------------|
| 3.4 | `Read({output_dir}/_gate-results.json, limit=20)` | Starts with `{`, contains `"summary"` | GATES_FAILED=true (conservative default) |

**Timing:** Steps 3 and 4 run IN PARALLEL. The orchestrator spawns PA auditors (Step 4) first (they run in background via Task tool), then executes the gate runner (Step 3) in the foreground.

### STEP 4: Spawn PA Auditors (always 5)

**Question assignment (5 auditors, 4 questions each, tier-spanning):**

The 20 questions (Q-01 through Q-20) are embedded directly in the /build-page skill file, pre-grouped by auditor. The orchestrator does NOT parse the PA skill at runtime. Each auditor receives their 4 questions as literal text from the skill.

| Auditor | Questions |
|---------|-----------|
| A | Q-01, Q-05, Q-11, Q-17 |
| B | Q-02, Q-06, Q-14, Q-18 |
| C | Q-03, Q-07, Q-12, Q-19 |
| D | Q-04, Q-08, Q-13, Q-20 |
| E | Q-09, Q-10, Q-15, Q-16 |

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 4.1 | Construct 5 auditor prompts from literal text embedded in the skill. Each prompt contains: [A] Receiving principle (5 lines), [B] Section 0 protocol (~20 lines), [C] Screenshot paths from Step 2, [D] 4 assigned questions (literal text from skill), [E] Language constraint | 5 prompt strings | — |
| 4.2 | `Glob("{output_dir}/_screenshots/1440/*.png")` + `Glob("{output_dir}/_screenshots/768/*.png")` | `screenshot_paths` list | Already verified in Step 2 |
| 4.3 | 5x `Task(subagent_type="code", model=Opus, prompt=auditor_prompt)` — all 5 launched in parallel | 5 agent executions | Individual failures caught at verification |

**What Auditors Do NOT Receive:** gate results, builder's reflection, other auditor reports, conviction brief (any part), mechanism catalog, components CSS, content markdown, any numerical targets.

**Artifact Verification:**

| Verify | Tool Call | Check | On Failure |
|--------|-----------|-------|------------|
| 4.4 | `Glob("{output_dir}/_pa/auditor-*.md")` | `count == 5` | If 0: `SET creative_verdict = "REFINE"`, `SET has_pa_data = false`, skip Steps 5+6.2 |
| 4.5 | 5x `Read({output_dir}/_pa/auditor-{A..E}.md, limit=5)` | File exists and has > 100 bytes | WARN per missing/empty report |

**Model choice note:** All agents use Opus. Future optimization: test Sonnet for auditors (perception task, not creation). If quality difference is < 10%, switch to Sonnet for auditors (saves ~60% of auditor token cost).

### STEP 5: Spawn Weaver (always, with 5 auditors)

The orchestrator Reads all 5 auditor report files and embeds their full content in the Weaver's prompt. The Weaver does NOT read files — it receives all content inline. Same for the conviction brief and reflection.

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 5.1 | Construct Weaver prompt: [A] Receiving principle (5 lines), [B] 1440px screenshot paths, [C] 5x `Read({output_dir}/_pa/auditor-{A..E}.md)` embedded inline, [D] `Read({output_dir}/_tc-brief.md)` embedded inline, [E] `Read({output_dir}/_reflection.md)` embedded inline, [F] Output instructions. Add: "If 3+ auditors converge on the same observation, your synthesis MUST acknowledge it, even if your own impression differs." | Prompt string | — |
| 5.2 | `Task(subagent_type="code", model=Opus, prompt=weaver_prompt)` | Weaver execution | Task failure → `SET weaver_available = false`, proceed to Step 6.2 fallback |
| 5.3 | Wait for completion | — | — |

**What Weaver Does NOT Receive:** gate results, components CSS, mechanism catalog, content markdown.

**Weaver Output:** `{output_dir}/_pa/weaver-synthesis.md` with 5 sections: EXPERIENTIAL ANCHOR, WHAT IS WORKING, WHAT IS ALMOST THERE, WHERE TO GO (AMPLIFY/RELEASE/DEEPEN/THE GAP), VERDICT (SHIP/REFINE/RETHINK + 1-sentence reason).

**Artifact Verification:**

| Verify | Tool Call | Check | On Failure |
|--------|-----------|-------|------------|
| 5.4 | `Glob("{output_dir}/_pa/weaver-synthesis.md")` | File exists | `SET weaver_available = false`, fall back to auditor keyword scan |
| 5.5 | `Read({output_dir}/_pa/weaver-synthesis.md)` | Contains "RETHINK" or "SHIP" or "REFINE" | If no verdict keyword: `SET weaver_available = false` |

### STEP 6: Routing Decision (ZERO INTERPRETATION)

| Sub-step | Action | Variables Set |
|----------|--------|---------------|
| 6.1 | `Read({output_dir}/_gate-results.json)`. Extract `summary.gates_failed` (boolean) and `summary.essential_fail` (integer). | `GATES_FAILED`, `ESSENTIAL_FAIL_COUNT` |
| 6.2 | **IF `weaver_available`:** String-search weaver file: if contains "RETHINK" → `RETHINK`; else if contains "SHIP" → `SHIP`; else → `REFINE`. **IF NOT `weaver_available`:** Keyword scan ALL auditor reports using these exact lists: | `creative_verdict` |

**Routing Fallback Keyword Lists (embedded):**

```
RETHINK_WORDS: "start over", "fundamentally wrong", "does not belong",
  "completely lost", "no connection", "incoherent", "wrong direction"

REFINE_WORDS: "flat", "monotonous", "tired", "repetitive", "disconnected",
  "cramped", "empty", "abandoned", "forced", "lifeless", "identical",
  "copy-pasted", "nothing changes"

SHIP_WORDS: "would ship", "ready", "complete", "polished", "works",
  "earned", "deliberate", "alive", "musical", "confident"
```

Route by: RETHINK if any RETHINK_WORD found. Else: count REFINE_WORDS vs SHIP_WORDS across all reports. Higher count wins. Tie → REFINE (conservative).

**NOTE:** The keyword scan triggers only if the Weaver agent fails or produces no output. With always-5 + always-Weaver, this is an error recovery path, not a standard path.

| Sub-step | Action | Variables Set |
|----------|--------|---------------|
| 6.3 | **Routing matrix** (deterministic if/else, SOLE AUTHORITY for routing): | `route` |

```
IF creative_verdict == "RETHINK":
  route = "RETHINK" → Step 6.5

IF creative_verdict == "SHIP" AND GATES_FAILED == false:
  route = "SHIP" → Step 8
IF creative_verdict == "SHIP" AND GATES_FAILED == true:
  route = "PATCH_THEN_SHIP" → Step 6.4 → Step 8
IF creative_verdict == "REFINE" AND GATES_FAILED == false:
  route = "REFINE" → Step 7
IF creative_verdict == "REFINE" AND GATES_FAILED == true:
  route = "PATCH_THEN_REFINE" → Step 6.4 → Step 7
```

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 6.4 | **MECHANICAL PATCHING** (if route contains "PATCH"): For each failed gate in `_gate-results.json`, apply the deterministic fix from the table below. After all patches: re-run gate runner (repeat 3.2-3.3), write to `_gate-results-patched.json`. | Patched HTML + updated gate results | — |

**Deterministic Patch Table:**

| Gate | Fix Type | Exact Operation |
|------|----------|-----------------|
| GR-03 | MECHANICAL | `Edit(output.html)`: find `max-width` in body/main container CSS. Replace value with `960px`. |
| GR-05 | MECHANICAL | Read gate detail for failing hex. For each failing hex `#RRGGBB`: if B > G, set B = G. If G > R, set G = R. Recompute as `#RRGGBB`. Edit the CSS. |
| GR-11 | MECHANICAL | Read gate detail for failing zone pair (e.g., "zones 3-4 bg delta: 8 RGB, threshold 15"). Read zone Y background hex. Increase R channel by `(15 - current_delta + 5)`. Verify new hex satisfies GR-05 (R>=G>=B). If not: decrease zone X background R channel instead. |
| GR-13 | MECHANICAL | Read gate detail for failing boundary. Reduce `margin-bottom` on the upper element by half. If still failing, reduce `padding-top` on the lower element by half. Target: total <= 120px. |
| GR-15 | MECHANICAL | Read gate detail for failing property. Replace value with `96px`. |
| GR-60 | MECHANICAL | Read gate detail for failing element. If text color too close to background: darken text by 30% toward `#3d3d3d`. Verify new contrast >= 4.5:1. |
| GR-67 | MECHANICAL | `Edit(output.html)`: find footer text `font-size`. Replace with `12px`. |
| GR-44 | MECHANICAL | Read gate detail for trailing void pixel count. Reduce `margin-bottom` on last content element to `24px`. Reduce `padding-bottom` on body/main to `24px`. |
| GR-18 | MECHANICAL | Read gate detail for ghost element. Remove the CSS property causing sub-perceptual effect (e.g., `border: 0.3px` → `border: 1px` or remove entirely). |
| Any STRUCTURAL | NOT PATCHABLE | Log in `_routing-log.md`. Route to REFINE. The REFINE builder addresses structural issues. |

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 6.5 | **RETHINK PROTOCOL:** | — | — |

**RETHINK Protocol (deterministic):**

1. `Bash("cp {output_dir}/output.html {output_dir}/output-rethink-1.html")`
2. `Bash("cp {output_dir}/_tc-brief.md {output_dir}/_tc-brief-rethink-1.md")`
3. `Bash("cp {output_dir}/_reflection.md {output_dir}/_reflection-rethink-1.md")`
4. `Read({output_dir}/_tc-brief.md)`. Extract the first sentence of the WORLD-DESCRIPTION section (the metaphor statement).
5. Add to Window 1 prompt: `"Do NOT derive a metaphor related to: [extracted metaphor]. The previous attempt using this metaphor was rejected by the evaluation."`
6. Re-run from Step 1 with modified prompt.
7. IF second RETHINK: Run gates on both artifacts. Ship the one with fewer essential gate failures. If tied, present both to user for selection.

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 6.6 | `Write({output_dir}/_routing-log.md, ...)` containing: date, creative_verdict, GATES_FAILED, ESSENTIAL_FAIL_COUNT, route, patches_applied count. | `_routing-log.md` | — |

### STEP 7: Spawn Window 3 Agent (REFINE)

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 7.0 | `Bash("cp {output_dir}/output.html {output_dir}/output-pre-refine.html")` | Pre-REFINE backup | Backup fails → warn, continue |
| 7.0v | `Glob("{output_dir}/output-pre-refine.html")` | Verify backup exists | — |

**Construct REFINE prompt by concatenating IN ORDER:**

| Section | Source | Lines |
|---------|--------|-------|
| [A] Receiving Principle | Literal 5 lines | 5 |
| [B] HTML artifact | `Read({output_dir}/output.html)` | varies |
| [C] Weaver synthesis | `Read({output_dir}/_pa/weaver-synthesis.md)` | ~60 |
| [D] Builder's reflection | `Read({output_dir}/_reflection.md)` | ~20 |
| [E] Conviction brief | `Read({output_dir}/_tc-brief.md)` | ~50 |
| [F] Raw content | `Read({output_dir}/_content.md)` | varies |
| [G] Mechanism catalog | `Read(design-system/compositional-core/grammar/mechanism-catalog.md)` | 751 |
| [H] Components CSS | `Read(design-system/compositional-core/components/components.css)` | 944 |
| [I] Prohibitions | `Read(design-system/compositional-core/identity/prohibitions.md)` | 419 |
| [J] Tokens | `Read(design-system/compositional-core/vocabulary/tokens.css)` | 183 |
| [K] Conventions brief | Literal ~14 lines | 14 |
| [L] User direction (if exists) | `Read({output_dir}/_user-direction.md)` if file exists | varies |

**Output instructions:** overwrite `output.html`, write `_reflection-v2.md`.

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 7.1 | 8x `Read()` calls for prompt construction (files B-J above) | Prompt content | — |
| 7.2 | `Task(subagent_type="code", model=Opus, prompt=refine_prompt)` | Agent execution | — |
| 7.3 | Wait for completion | — | Task failure → restore backup |

**What REFINE Builder Does NOT Receive:** gate results, individual auditor reports (gets Weaver synthesis only), PA-05 scores, gate failure fix lists.

**What REFINE Builder MAY Do:** restructure HTML, rewrite CSS, change layouts, introduce new mechanisms, extend metaphor expression. **May NOT:** replace the metaphor, violate world-description.

**Artifact Verification:**

| Verify | Tool Call | Check | On Failure |
|--------|-----------|-------|------------|
| 7.4 | `Read({output_dir}/output.html, limit=20)` | `> 10 lines` AND contains `<html` | Restore backup: `Bash("cp {output_dir}/output-pre-refine.html {output_dir}/output.html")` |
| 7.5 | `Glob("{output_dir}/_reflection-v2.md")` | File exists | WARN only |

### STEP 8: Post-REFINE Gate Check and Ship

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 8.1 | `browser_navigate("http://localhost:{server_port}/output.html")` + `browser_run_code(captureScreenshots)` | New screenshots (overwrite existing) | — |
| 8.2 | `browser_evaluate(atomicGateFunction)` | Post-REFINE gate results | — |
| 8.3 | `Write({output_dir}/_gate-results-post-refine.json, ...)` | Gate results file | — |
| 8.3b | **Regression check:** Compare `essential_fail` count in `_gate-results-post-refine.json` vs `_gate-results.json` (or `_gate-results-patched.json` if patches were applied). IF post-REFINE has MORE essential failures: restore backup `Bash("cp {output_dir}/output-pre-refine.html {output_dir}/output.html")`. PRINT "REFINE introduced regressions. Shipping pre-REFINE version." | — | — |
| 8.4 | If MECHANICAL failures in post-REFINE results: patch CSS (Edit tool using Deterministic Patch Table above), re-run gates. If STRUCTURAL: log for user, ship with advisory. | — | — |
| 8.5 | `Bash("kill {server_pid}")` | Server stopped | If kill fails: `Bash("lsof -ti:{server_port} | xargs kill")` |
| 8.6 | `Glob("{output_dir}/*")` | Final file inventory | — |
| 8.7 | `Read({output_dir}/_gate-results-post-refine.json)` + `Read({output_dir}/_routing-log.md)` | Data for ship report | — |
| 8.8 | PRINT ship report to user: file path, gate summary, route taken, cold-look excerpts from each auditor, Weaver verdict. | User sees final output | — |

### STEP 9: Second REFINE (USER ESCALATION ONLY)

Not automatic. Only if user explicitly requests. If the user provides textual feedback, write it to `{output_dir}/_user-direction.md`. Run abbreviated PA (5 auditors, new screenshots), spawn THIRD Opus builder with both reflections + user direction file, maximum 2 REFINE cycles total.

---

## SECTION 2: WINDOW SPECIFICATIONS

### Window 1: DERIVE + BUILD (Combined TC + Build)

**Agent:** Single Opus instance
**Spawning:** `Task(subagent_type="code")`

#### Prompt Template

```
You are building a page from raw content. You will derive a metaphor,
write a conviction brief, and build an HTML page — all in this session.

RECEIVING PRINCIPLE:
1. Read the content as a reader first. What excites you about this material?
2. Derive your metaphor from the content's tension with the design system. The metaphor is yours.
3. Write your conviction brief — this is your creative commitment, not a document for someone else.
4. Read the vocabulary files AFTER your brief is written. They are tools, not instructions.
5. Build from your conviction. Your perception is the tiebreaker on every creative decision.

You must produce 3 files:
  1. {OUTPUT_DIR}/output.html — the complete, self-contained HTML page (all CSS embedded)
  2. {OUTPUT_DIR}/_tc-brief.md — conviction brief, 5 sections:
     WORLD-DESCRIPTION, CALIBRATION, OPPOSITION, ARC, CONTENT MAP
  3. {OUTPUT_DIR}/_reflection.md — 3-dimension reflection:
     CONVICTION, ALTERNATIVES, UNRESOLVED

---

{TC_SKILL_CONTENT}
(~/.claude/skills/tension-composition/SKILL.md — 841 lines, inserted verbatim)

---

THE CONTENT YOU ARE BUILDING FOR:

{RAW_CONTENT}
({OUTPUT_DIR}/_content.md — inserted verbatim)

---

STOP. Write your conviction brief before reading the vocabulary files below.

Only AFTER writing the brief, continue reading the vocabulary files below.

---

IDENTITY — THE WORLD'S PHYSICS:

{PROHIBITIONS_CONTENT}
(design-system/compositional-core/identity/prohibitions.md — ~419 lines)

{TOKENS_CONTENT}
(design-system/compositional-core/vocabulary/tokens.css — ~183 lines)

---

MECHANISMS — YOUR TOOLS:

{MECHANISM_CATALOG_CONTENT}
(design-system/compositional-core/grammar/mechanism-catalog.md — ~751 lines)

---

COMPONENT LIBRARY — YOUR STARTING POINTS:

{COMPONENTS_CSS_CONTENT}
(design-system/compositional-core/components/components.css — ~944 lines)

---

CONVENTIONS (mechanical constraints — absorb these, do not checklist them):
- Container: 940-960px
- Fonts: Inter (body), Instrument Serif (headings), JetBrains Mono (code)
- Borders: 1px (subtle), 3px (section), 4px (primary)
- Prohibited: border-radius, box-shadow, gradients, transforms, transitions (except opacity)
- Backgrounds: R >= G >= B on every background hex (warm palette)
- Adjacent zone backgrounds: >= 15 RGB difference (perceptible)
- Stacked gap at any boundary: <= 120px total
- Single margin/padding: <= 96px
- Characters per line: 45-80
- WCAG 2.1 AA contrast: >= 4.5:1 body text, >= 3:1 large text
- ARIA landmarks: at least header, main, footer
- Responsive: 768px breakpoint minimum
- Self-contained HTML: all CSS embedded, no external dependencies

---

NOW BUILD.

Build from your conviction brief. Work boundary-by-boundary — at each zone
transition, set background, typography, spacing, and borders together. The
reader should feel they enter a different room at each boundary.

At each zone boundary, multiple channels should reinforce the same direction.
Vary transition types: some smooth continuations, some bridges, some full resets.
Name CSS classes from your metaphor, not generic (.geological-bedrock, not .section-dark).

Adapt components from the library. Do not invent from scratch when a component
serves your purpose. Do not copy when your metaphor demands something different.

After building, write your reflection to {OUTPUT_DIR}/_reflection.md:

CONVICTION: What were you trying to make? Where did you succeed/fall short?
ALTERNATIVES: What roads did you not take? What creative energy was suppressed?
UNRESOLVED: What tension remains? What surprised you? What would you tell the next builder?
```

#### File Reading Order (WHY)

1. **Receiving Principle** → activates creative posture before anything else
2. **TC Skill** → creative process guide; builder reads then runs derivation
3. **Content** → the material; read deeply as a reader, not a designer
4. **[CHECKPOINT]** → conviction brief MUST be written before vocabulary enters context
5. **Identity files** → world physics, processed as properties of the world already imagined
6. **Mechanism catalog** → techniques for implementing decisions already made
7. **Components CSS** → starting points, not templates
8. **Conventions brief** → mechanical constraints absorbed as parameters, not primary frame

#### Structural Deliverables After Window 1

| File | Blocking? | Check |
|------|-----------|-------|
| `output.html` | YES | `> 10 lines`, contains `<html` |
| `_tc-brief.md` | NO (warn) | exists, > 100 bytes |
| `_reflection.md` | NO (warn) | exists, > 50 bytes |

---

### Window 2: EVALUATE (Screenshots + Gates + 5 PA + Weaver)

**Agents:** 5 PA auditors (Opus) + 1 Weaver (Opus) = 6 agents. Gate runner = programmatic (no agent).
**Spawning:** All 5 auditors launched in parallel via `Task`. Weaver launched after all 5 complete.

#### Auditor Prompt Template (for Auditor {LETTER})

```
You are a perceptual auditor. You are seeing a web page for the first time.
You know nothing about who made it, why, or what it's supposed to look like.

RECEIVING PRINCIPLE:
1. You are seeing this page for the first time. You know nothing about it.
2. Describe what you SEE and FEEL. No design vocabulary. No CSS terms.
3. Your perception is sovereign — what you experience IS the truth of this page.
4. If text is illegible or something is broken, that outranks everything else.
5. React to what you see before you check what you know.

SECTION 0: THE EXPERIENTIAL PASS

Before answering any question, inhabit the page.

THE COLD LOOK (do this for EACH viewport):
Read the cold-look screenshot. Do NOT read text. Absorb shape, color, weight.
Spend 5 seconds. Then write these four responses — they are LOCKED forever:

COLD LOOK ({WIDTH}px):
Gut reaction: [one sentence — what did you FEEL?]
Worst thing: [one element or area]
Best thing: [one element or area]
Ship it?: [YES / REFINE / NO]

THE SCROLL-THROUGH:
After the cold look, read the scroll-through screenshots in sequence
(scroll-01, scroll-02, scroll-03...). Experience the page as a journey.
Where did you speed up? Where did you slow down? Where did you stop?
Write 2-3 sentences. This narrative has permanent priority.

PRIORITY: If text is illegible or something is broken, report that FIRST
regardless of everything else.

SCREENSHOTS:
1440px cold look: {OUTPUT_DIR}/_screenshots/1440/cold-look.png
1440px scroll: {OUTPUT_DIR}/_screenshots/1440/scroll-01.png, scroll-02.png, ...
768px cold look: {OUTPUT_DIR}/_screenshots/768/cold-look.png
768px scroll: {OUTPUT_DIR}/_screenshots/768/scroll-01.png, ...

YOUR {N} QUESTIONS:

{QUESTION_TEXT_FOR_THIS_AUDITOR}

LANGUAGE CONSTRAINT:
Your answers may NOT contain: px, rem, em, %, hex, rgb, rgba, border-radius,
box-shadow, padding, margin, font-size, font-family, line-height, max-width,
min-width, flex, grid, gap, opacity, z-index, overflow, display, position,
or ANY CSS property name.

Use instead: heavy, light, cramped, spacious, jarring, smooth, floating,
grounded, warm, cold, sharp, soft, cluttered, breathing, deliberate,
abandoned, earned, forced, musical, monotone, alive, flat.

OUTPUT:
Write your report to: {OUTPUT_DIR}/_pa/auditor-{LETTER}.md
Structure: Section 0 (cold look for each viewport + scroll-through),
then each question response (3-8 sentences of prose with screenshot references).
```

#### Information Isolation (what auditors NEVER receive)

- Gate results (plumbing/freedom boundary)
- Builder's reflection
- Other auditor reports
- Conviction brief (any part — fresh-eyes principle)
- "What this surfaces" annotations from PA skill
- Mechanism catalog, components CSS, content markdown
- Any numerical targets or thresholds

#### Weaver Prompt Template

```
You are a creative synthesizer. Your job is to transform five independent
experiential accounts into creative direction that makes a refinement
builder want to CREATE, not FIX.

RECEIVING PRINCIPLE:
1. View the screenshots yourself first. Write 3 sentences about what YOU experience.
2. Read all auditor reports. Notice where 3+ agree (convergence) and where 1 disagrees (divergence).
3. Convergence confirms truth. Divergence surfaces subtlety. Both matter.
4. If 3+ auditors converge on the same observation, your synthesis MUST acknowledge it, even if your own impression differs.
5. Write creative direction FOR a creator, not corrections FOR a manager.
6. Your verdict is a creative judgment, not a calculation.

SCREENSHOTS:
{1440px cold-look + scroll-through paths}

AUDITOR REPORTS:
{Full content of auditor-A.md through auditor-E.md, embedded inline}

CONVICTION BRIEF:
{Full content of _tc-brief.md, embedded inline}

BUILDER'S REFLECTION:
{Full content of _reflection.md, embedded inline}

Write your synthesis to {OUTPUT_DIR}/_pa/weaver-synthesis.md containing:

1. EXPERIENTIAL ANCHOR (~5-8 sentences) — your own first impression, written
   BEFORE reading any auditor report. Unrevised.

2. WHAT IS WORKING — convergent strengths. Written so the
   REFINE builder understands WHY they work.

3. WHAT IS ALMOST THERE — near-misses framed as creative
   invitations.

4. WHERE TO GO — creative direction:
   AMPLIFY: The composition's best moment. Extend it.
   RELEASE: Where tension should resolve.
   DEEPEN: The near-miss. Shortest path to significant improvement.
   THE GAP: Distance between the page's personality and its best self.

5. VERDICT: SHIP / REFINE / RETHINK + one-sentence reason.
```

#### Structural Deliverables After Window 2

| File | Blocking? |
|------|-----------|
| `_screenshots/**/*.png` | YES (for PA) |
| `_gate-results.json` | NO (defaults GATES_FAILED=true) |
| `_pa/auditor-{A..E}.md` | NO (defaults creative_verdict=REFINE) |
| `_pa/weaver-synthesis.md` | NO (falls back to keyword scan) |

---

### Window 3: REFINE

**Agent:** Single Opus instance (DIFFERENT from Window 1 builder)
**Spawning:** `Task(subagent_type="code")`

#### Prompt Template

```
You are building the second version of a page. A different builder created the first version.
Your job is not to fix problems. Your job is to make the page more of what it already is.

You may restructure HTML, rewrite CSS, change layouts, introduce new mechanisms,
and extend the metaphor's expression. You may NOT replace the metaphor itself or
violate the world-description.

RECEIVING PRINCIPLE:
1. Scroll through the page first. Write 2 sentences about what you experience.
2. Read the Weaver's synthesis. Note what is working, what is almost there, and where to go.
3. Read the previous builder's reflection. What excites you? What tension remains?
4. Read the conviction brief. This is what the page was trying to become.
5. What is the ONE thing you want to do with this page? Start there.

Follow this sequence exactly. Write each checkpoint response before proceeding.

---

STEP 1: THE PAGE

Read this file: {OUTPUT_DIR}/output.html

CHECKPOINT: Write 2 sentences about what you experience on this page.
Do not proceed until you have written them.

---

STEP 2: CREATIVE DIRECTION FROM THE EVALUATION

Read this file: {OUTPUT_DIR}/_pa/weaver-synthesis.md

The Weaver listened to five people experience this page and wrote about what they
collectively felt. The Weaver's direction has territories: AMPLIFY (where the page
has momentum), RELEASE (where it holds too tight), DEEPEN (where it has unexplored room).

These are territories to enter, not instructions to follow. What you do in each
territory is yours.

---

STEP 3: WHAT THE PREVIOUS BUILDER WAS REACHING FOR

Read this file: {OUTPUT_DIR}/_reflection.md

What excites you in this reflection? What tension is still alive?

---

STEP 4: THE CREATIVE DIRECTION

Read this file: {OUTPUT_DIR}/_tc-brief.md

This is the conviction brief — the metaphor, the world, the calibration ranges,
the opposition map, the compositional arc. This is what the page was TRYING to become.
The page you scrolled through is what it ACTUALLY became.

The gap between aspiration and reality is not failure. It is your creative territory.

---

STEP 5: CONTENT + BUILDING MATERIALS

Re-read the content: {OUTPUT_DIR}/_content.md

Vocabulary files (these are tools, not instructions):
- design-system/compositional-core/grammar/mechanism-catalog.md
- design-system/compositional-core/components/components.css
- design-system/compositional-core/identity/prohibitions.md
- design-system/compositional-core/vocabulary/tokens.css

CONVENTIONS (mechanical constraints — absorb these, do not checklist them):
{SAME 14-LINE CONVENTIONS BRIEF AS WINDOW 1}

{IF _user-direction.md exists:}
USER FEEDBACK:
{Content of _user-direction.md}
The user has specific feedback. Prioritize this alongside your own creative judgment.

---

CREATIVE COMMITMENT:

Before you write any HTML or CSS, state:
What is the ONE THING you want to do with this page?
Not three things. Not "address the Weaver's feedback." One thing that,
if you achieved it, would make you proud of your contribution.

---

BUILD:

Overwrite {OUTPUT_DIR}/output.html with your refined version.

After building, write your own 3-dimension reflection to {OUTPUT_DIR}/_reflection-v2.md:

CONVICTION: What were you trying to make? Where did you succeed/fall short?
ALTERNATIVES: What roads did you not take, and why?
UNRESOLVED: What tension remains? What would you tell a third builder?
```

#### Reading Order (WHY)

1. **Artifact first** → fresh perception before any other account enters context
2. **2-sentence checkpoint** → locks impression before external influence
3. **Weaver synthesis** → creative direction from 5 independent perceptions
4. **Reflection** → previous builder's creative state (conviction, alternatives, unresolved)
5. **Conviction brief** → the aspirational intent (arrives last among creative documents to prevent governing perception)
6. **Content + vocabulary** → building materials

---

## SECTION 3: GATE RUNNER

### 22 Gates (15 REQUIRED + 7 ADVISORY)

#### Category A: Physics (2)

| Gate | Name | Tier | What It Checks |
|------|------|------|---------------|
| GR-60 | WCAG Contrast | REQUIRED | >= 4.5:1 body, >= 3:1 large text |
| GR-67 | Footer Text Size | REQUIRED | Footer text >= 11px |

#### Category B: Identity (6)

| Gate | Name | Tier | What It Checks |
|------|------|------|---------------|
| GR-03 | Container Width | REQUIRED | 940-960px max-width |
| GR-05 | Warm Palette | REQUIRED | R >= G >= B on all backgrounds. Absorbs GR-07. |
| GR-06 | Font Trinity | REQUIRED | Inter + Instrument Serif + JetBrains Mono present |
| GR-08 | No Decorative | REQUIRED | No standalone HRs, empty spacers, icon-only elements |
| GR-09 | Border Hierarchy | REQUIRED | 4px/3px/1px weight hierarchy |
| GR-10 | Cross-Page DNA | REQUIRED | Skip link, heading hierarchy, callout borders, ::selection red, :focus-visible, p max-width 70ch, body line-height >= 1.6, h3 italic, header dark bg + red border |

#### Category C: Perception (6)

| Gate | Name | Tier | What It Checks |
|------|------|------|---------------|
| GR-11 | Background Delta | REQUIRED | Adjacent zone bg delta >= 15 RGB |
| GR-13 | Stacked Gap (CSS) | REQUIRED | mb+pb+mt+pt at boundaries <= 120px |
| GR-14 | Stacked Gap (Visual) | REQUIRED | getBoundingClientRect gap <= 150px |
| GR-15 | Single Margin | REQUIRED | No single margin/padding > 96px (auto-centering excluded) |
| GR-18 | Ghost Mechanisms | REQUIRED | Zero sub-perceptual borders (<0.5px) or opacity (<0.1) |
| GR-44 | Trailing Void | REQUIRED | Last content to body bottom <= 300px |

#### Category D: Anti-Pattern (1)

| Gate | Name | Tier | What It Checks |
|------|------|------|---------------|
| GR-45 | Typography Variation | RECOMMENDED | >= 2 distinct H2 font-size bands |

#### Category E: Experiential (2)

| Gate | Name | Tier | What It Checks |
|------|------|------|---------------|
| GR-61 | DPR Validation | REQUIRED | window.devicePixelRatio === 1 |
| GR-62 | Screenshot Quality | REQUIRED | Per viewport: min 3 PNGs, no 2+ consecutive blanks, blank ratio <= 20% |

#### Category F: Meta (1)

| Gate | Name | Tier | What It Checks |
|------|------|------|---------------|
| GR-48 | Gate Coverage | REQUIRED | All required gates produced results |

#### Category G: Brief Verification (4)

| Gate | Name | Tier | What It Checks |
|------|------|------|---------------|
| BV-01 | Brief Section 1 | REQUIRED (BV) | Brief has >= 5 sections (## headers) |
| BV-02 | Brief Section 2 | REQUIRED (BV) | Each section has >= 3 non-empty lines |
| BV-03 | Brief Non-Empty | REQUIRED (BV) | Brief total > 100 bytes |
| BV-04 | Brief Structure | REQUIRED (BV) | Brief contains at least 4 of: WORLD, CALIBRATION, OPPOSITION, ARC, MAP |

#### Advisory Gates (7 — reported, never block SHIP)

GR-01 (border-radius), GR-02 (box-shadow), GR-04 (no gradients), GR-07 (no pure B/W — absorbed by GR-05), GR-20 (structural echo), GR-51 (bg delta distribution), GR-55 (multi-coherence channels)

### Single Atomic JS Function Design

ONE `browser_evaluate` call. One JSON result. One file. The function wraps ALL gate execution in try/catch per section, ALWAYS returns JSON, never throws.

```javascript
async () => {
  const results = {};
  const errors = [];

  try { Object.assign(results, await runGateRunner()); }
  catch(e) { errors.push({ fn: 'runGateRunner', error: e.message }); }

  try { Object.assign(results, await runAntiPatternGates()); }
  catch(e) { errors.push({ fn: 'runAntiPatternGates', error: e.message }); }

  try { Object.assign(results, await runWave2Gates()); }
  catch(e) { errors.push({ fn: 'runWave2Gates', error: e.message }); }

  // Coverage meta-gate (GR-48)
  const expected = ['GR-03','GR-05','GR-06','GR-08','GR-09','GR-10',
    'GR-11','GR-13','GR-14','GR-15','GR-18','GR-44',
    'GR-48','GR-60','GR-61','GR-62','GR-67'];
  const missing = expected.filter(g => !(g in results));
  results['GR-48'] = { gate: 'GR-48', pass: missing.length === 0,
    detail: missing.length === 0 ? 'All gates produced results' : `Missing: ${missing.join(', ')}` };

  // Summary
  const essentialIds = [...expected];
  let ep = 0, ef = 0, af = 0;
  for (const [id, r] of Object.entries(results)) {
    if (essentialIds.includes(id)) { if (r.pass) ep++; else ef++; }
    else { if (!r.pass) af++; }
  }

  return JSON.stringify({ gates: results, errors,
    summary: { essential_pass: ep, essential_fail: ef, advisory_fail: af, gates_failed: ef > 0 }
  }, null, 2);
}
```

**GR-48 coverage array (17 REQUIRED gates):** GR-03, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-18, GR-44, GR-48, GR-60, GR-61, GR-62, GR-67.

**BV gates (4) are checked separately** by the orchestrator via text scan (Step 3.0), not by the browser-based gate runner.

**Advisory gates (7) + GR-45 (1 RECOMMENDED)** are reported but never block routing.

**Total: 17 REQUIRED (browser) + 4 BV (text) + 1 RECOMMENDED + 7 ADVISORY = 29 checks. 22 gates that affect routing (17 REQUIRED + 4 BV + 1 META = 22).**

---

## SECTION 4: FILE INVENTORY

### Files the New Process References (Complete List)

| # | File Path | Lines | Status | Who Reads | When |
|---|-----------|-------|--------|-----------|------|
| 1 | `~/.claude/skills/build-page/SKILL.md` | ~500-600 | **REWRITE** | Orchestrator | Entry point |
| 2 | `~/.claude/skills/tension-composition/SKILL.md` | 841 | **KEEP AS-IS** (the rewrite from ephemeral/tc-skill-update/) | Window 1 agent | Derive + Build |
| 3 | `~/.claude/skills/perceptual-auditing/SKILL.md` | 524 | **KEEP AS-IS** | Reference only (questions embedded in skill #1) | N/A |
| 4 | `design-system/compositional-core/identity/prohibitions.md` | 419 | **KEEP AS-IS** | Window 1 + REFINE builders | Build, Refine |
| 5 | `design-system/compositional-core/vocabulary/tokens.css` | 183 | **KEEP AS-IS** | Window 1 + REFINE builders | Build, Refine |
| 6 | `design-system/compositional-core/grammar/mechanism-catalog.md` | 751 | **KEEP AS-IS** | Window 1 + REFINE builders | After brief, Refine |
| 7 | `design-system/compositional-core/components/components.css` | 944 | **KEEP AS-IS** | Window 1 + REFINE builders | Build, Refine |
| 8 | `ephemeral/va-extraction/gate-runner-core.js` | ~1,200 | **MODIFY** (reduce from 3,185, strip ceremony gates) | Orchestrator (Playwright) | Gate execution |

### Files Created Per Run

| File | Created By | Step |
|------|-----------|------|
| `{output_dir}/` | Orchestrator | 0 |
| `{output_dir}/_content.md` | Orchestrator | 0 |
| `{output_dir}/output.html` | Window 1 builder (overwritten by REFINE) | 1 / 7 |
| `{output_dir}/_tc-brief.md` | Window 1 builder | 1 |
| `{output_dir}/_reflection.md` | Window 1 builder | 1 |
| `{output_dir}/_screenshots/**/*.png` | Orchestrator | 2 |
| `{output_dir}/_gate-results.json` | Orchestrator (gate runner) | 3 |
| `{output_dir}/_pa/auditor-A.md` through `auditor-E.md` | PA Auditors A-E | 4 |
| `{output_dir}/_pa/weaver-synthesis.md` | Weaver | 5 |
| `{output_dir}/_routing-log.md` | Orchestrator | 6 |
| `{output_dir}/output-pre-refine.html` | Orchestrator (backup) | 7 |
| `{output_dir}/_reflection-v2.md` | REFINE builder | 7 |
| `{output_dir}/_gate-results-post-refine.json` | Orchestrator | 8 |
| `{output_dir}/_rethink-log.md` | Orchestrator (RETHINK only) | 6 |
| `{output_dir}/_user-direction.md` | User/Orchestrator (optional) | 9 |

### Files That Need Modification

| File | Current Lines | Target Lines | What Changes |
|------|--------------|-------------|-------------|
| `~/.claude/skills/build-page/SKILL.md` | 110 | ~500-600 | Complete rewrite. Becomes the orchestrator script with all 9 steps, 3 prompt templates, conventions brief, 20 PA questions pre-grouped, routing logic, and mechanical patching table. |
| `ephemeral/va-extraction/gate-runner-core.js` | 3,185 | ~1,200 | Remove stripped gate functions (35 gates removed). Update GR-48 coverage array (17 essential gates). Keep captureScreenshots + checkScreenshotQuality. Keep exception patterns. |

### Files That Need NO Modification

- `~/.claude/skills/tension-composition/SKILL.md` (841 lines — user decision: keep as-is)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (524 lines — already rewritten and LIVE, used as reference only)
- `design-system/compositional-core/identity/prohibitions.md` (419 lines)
- `design-system/compositional-core/vocabulary/tokens.css` (183 lines)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (751 lines)
- `design-system/compositional-core/components/components.css` (944 lines)

---

## SECTION 5: IMPLEMENTATION ORDER

### Phase 1: TC Skill Deployment (~15 min)

**Prerequisite:** None.
**Parallelizable:** Yes (independent of all other phases).

| Step | Action | Lines Changed | Dependency |
|------|--------|--------------|------------|
| 1.1 | Copy `ephemeral/tc-skill-update/SKILL-REWRITE.md` to `~/.claude/skills/tension-composition/SKILL.md` | 841 (full replacement) | None |
| 1.2 | Verify the copy: `Read(~/.claude/skills/tension-composition/SKILL.md, limit=5)`. Confirm it starts with the rewrite's opening, not the old skill's. | 0 | 1.1 |

**Note:** Line count refers to SKILL-REWRITE.md (the canonical version to be deployed). Live TC skill line count may differ until Phase 1 is complete.

### Phase 2: Gate Runner Reduction (~1-2 hours)

**Prerequisite:** 02-gate-audit.md (complete).
**Parallelizable:** Yes (independent of Phases 1 and 3).

| Step | Action | Lines Changed | Dependency |
|------|--------|--------------|------------|
| 2.1 | Read `ephemeral/va-extraction/gate-runner-core.js` fully. Identify functions for ALL STRIPPED gates (listed in 02-gate-audit.md "STRIPPED" section + the 6 ceremony gates: GR-63, GR-64, BV-08, GR-43, GR-83, GR-84). | 0 (read only) | None |
| 2.2 | Remove stripped gate functions. | ~-1,900 (removal) | 2.1 |
| 2.3 | Update the GR-48 coverage array to contain ONLY the 17 REQUIRED gates (listed in Section 3 above). | ~5 | 2.2 |
| 2.4 | Verify remaining gates still reference correct helper functions. | 0 (audit) | 2.2 |
| 2.5 | Test gate runner: serve any existing HTML page, run the atomic function via Playwright, verify JSON output has all required gates. | 0 (test) | 2.2-2.4 |

### Phase 3: Write the New /build-page Skill (~3-5 hours)

**Prerequisite:** Phases 1 and 2 (TC skill deployed, gate runner reduced).
**Parallelizable:** NO (depends on Phase 1 + 2 outputs).

| Step | Action | Lines Changed | Dependency |
|------|--------|--------------|------------|
| 3.1 | Write `~/.claude/skills/build-page/SKILL.md` (~500-600 lines). This is the ENTIRE orchestrator script containing Steps 0-8 from Section 1 of this plan. The skill must include: prompt templates (Window 1, auditors, Weaver, REFINE), exact file paths, verification checks, routing logic, keyword lists for fallback, conventions brief text, 20 PA questions pre-grouped by auditor, and deterministic patch table. | ~500-600 (new) | Phases 1, 2 |
| 3.2 | Verify the skill: `Read(~/.claude/skills/build-page/SKILL.md)`. Check it contains: all 9 steps, file paths to all 8 referenced files, the conventions brief text, all 3 receiving principles, the routing matrix, the mechanical patching table, the 20 PA questions, the keyword lists for routing fallback. | 0 (audit) | 3.1 |

### Phase 4: Validation Run (~2-3 hours)

**Prerequisite:** Phase 3 (skill written).

| Step | Action | Dependency |
|------|--------|------------|
| 4.1 | Select a test content file (ideally the Gas Town content or another previously-built page for comparison). | None |
| 4.2 | Invoke `/build-page {test_content_path}`. | 3.1 |
| 4.3 | Observe: Does the orchestrator follow all 9 steps? Does it spawn Opus agents? Does the gate runner produce JSON? Do all 5 auditors produce reports? Does the Weaver produce synthesis? Does routing work? | 4.2 |
| 4.4 | If any step is skipped or fails: diagnose, adjust skill text, re-run. | 4.3 |
| 4.5 | Compare output quality to previous process runs on the same content. | 4.3 |

### Phase 5: Design System Navigation Updates (~30 min)

**Prerequisite:** Phase 4 (validation passed).

| Step | Action | Lines Changed | Dependency |
|------|--------|--------------|------------|
| 5.1 | Update `design-system/CLAUDE.md`: change `/build-page` description to reference the new 3-window process. Remove references to MANIFEST, 9 artifacts, Observer agent, 2-pass build. | ~20 | Phase 4 |
| 5.2 | Update `design-system/compositional-core/CLAUDE.md`: update build protocol section. | ~10 | Phase 4 |

### Parallelism Map

```
Phase 1 (TC deploy)     ───────> done (~15 min)
                                    \
Phase 2 (gate reduction) ──────────> done (~1-2 hrs)
                                    \
                                     Phase 3 (skill write) ──> Phase 4 (validate) ──> Phase 5 (nav update)
```

### Total Estimated Scope

| Phase | Lines Modified | Lines Created | Lines Removed |
|-------|---------------|--------------|---------------|
| 1: TC deploy | 0 | 841 (copy) | 1,648 (old TC) |
| 2: Gate reduction | ~5 | 0 | ~1,900 |
| 3: Skill write | 0 | ~500-600 | 110 (old skill) |
| 4: Validation | 0 | 0 | 0 |
| 5: Nav updates | ~30 | 0 | ~50 |
| **Total** | **~35** | **~1,341-1,441** | **~3,708** |

**Net reduction: ~2,267-2,367 lines.**

---

## SECTION 6: RECONCILIATION LOG

Where the 10 input documents disagree, and how each disagreement is resolved.

### Disagreement 1: Auditor Count
**Resolution: USER DECISION overrides all.** Always 5 auditors. No mode prompt.

### Disagreement 2: TC Skill Size
**Resolution: USER DECISION overrides all.** Keep 841-line SKILL-REWRITE.md.

### Disagreement 3: Weaver Always or Only High-Stakes
**Resolution: Always.** With 5 auditors always deployed, the Weaver is always needed for synthesis.

### Disagreement 4: Conventions Brief as Separate File or Embedded
**Resolution: Embedded in the skill.** ~14 lines of mechanical constraints embedded directly in Window 1 and REFINE builder prompts. No separate file. Creative guidance lines moved to the prompt body (after conventions, before BUILD instruction).

### Disagreement 5: Auditors Receive Conviction Brief Excerpt
**Resolution: No brief excerpt for auditors (USER DECISION #9).** The PA skill's fresh-eyes principle is correct. If the metaphor works, auditors will describe it without being told.

### Disagreement 6: World-Description as Separate File
**Resolution: Load full prohibitions.md.** The 419-line prohibitions file provides the identity WHY. The conventions brief provides the WHAT. Creating a 30-line world-description could be a future optimization but is not blocking.

### Disagreement 7: Post-REFINE PA
**Resolution: Unanimous agreement.** No automatic second PA. Post-REFINE evaluation = gates only + regression check. User requests additional PA explicitly.

### Disagreement 8: What REFINE Builder Receives
**Resolution:** REFINE builder ALWAYS receives Weaver synthesis only (not raw auditor reports).

---

## SECTION 7: VERIFICATION PROTOCOL

### Pre-Test Structural Checks (no content needed)

| # | Check | How | Pass Condition |
|---|-------|-----|---------------|
| 1 | TC skill exists at correct path | `Read(~/.claude/skills/tension-composition/SKILL.md, limit=5)` | File exists, starts with rewrite content |
| 2 | PA skill exists at correct path | `Read(~/.claude/skills/perceptual-auditing/SKILL.md, limit=5)` | File exists, 524 lines |
| 3 | Build-page skill exists at correct path | `Read(~/.claude/skills/build-page/SKILL.md)` | File exists, ~500-600 lines, contains "STEP 0" through "STEP 8" |
| 4 | Build-page skill references correct file paths | `Grep` the skill for each of the 8 files in Section 4 | All 8 paths appear |
| 5 | Build-page skill contains conventions brief text | `Grep` the skill for "940-960px" | Found |
| 6 | Build-page skill contains all 3 receiving principles | `Grep` the skill for "RECEIVING PRINCIPLE" | 3 occurrences (Window 1, auditor, REFINE) |
| 7 | Build-page skill contains routing matrix | `Grep` for "RETHINK" AND "PATCH_THEN_SHIP" AND "PATCH_THEN_REFINE" | All found |
| 8 | Build-page skill contains 20 PA questions | `Grep` for "Q-01" through "Q-20" | All 20 found |
| 9 | Build-page skill contains keyword lists | `Grep` for "RETHINK_WORDS" AND "REFINE_WORDS" AND "SHIP_WORDS" | All found |
| 10 | Gate runner has 22 gates | `Grep` gate-runner-core.js for function names of surviving gates | All surviving gate IDs found |
| 11 | Gate runner has NO stripped gates | `Grep` gate-runner-core.js for GR-63, GR-64, BV-08, GR-43, GR-83, GR-84 | NOT found |
| 12 | GR-48 coverage array is correct | `Read` gate-runner-core.js, find coverage array | Contains exactly the 17 REQUIRED gate IDs |
| 13 | All vocabulary files exist | `Glob` for prohibitions.md, tokens.css, mechanism-catalog.md, components.css | All 4 found |

### Dry Run Checklist (with test content)

| # | Check | Expected Behavior |
|---|-------|------------------|
| 1 | Orchestrator creates output directory | `ephemeral/builds/{slug}-{date}/` exists |
| 2 | Content length check | Warning if > 5,000 lines, stop if > 8,000 |
| 3 | Orchestrator copies content | `_content.md` exists in output dir |
| 4 | Window 1 agent receives correct prompt order | TC skill → content → checkpoint → identity → mechanisms → components → conventions |
| 5 | Window 1 agent produces 3 files | `output.html`, `_tc-brief.md`, `_reflection.md` all exist |
| 6 | Orchestrator validates HTML before proceeding | `Glob` + `Read` output visible in conversation |
| 7 | Screenshots captured at 2 viewports | `_screenshots/1440/`, `768/` have PNG files |
| 8 | Gate runner produces JSON | `_gate-results.json` exists and is valid JSON |
| 9 | 5 PA auditors spawned | 5 `Task` calls visible in conversation |
| 10 | All 5 auditor reports exist | `auditor-A.md` through `auditor-E.md` in `_pa/` |
| 11 | Auditor reports contain NO brief excerpts | Spot-check: no "WORLD-DESCRIPTION" or "CALIBRATION" headings in auditor files |
| 12 | Weaver spawned and produces synthesis | `weaver-synthesis.md` exists |
| 13 | Routing decision logged | `_routing-log.md` exists with correct format |
| 14 | If REFINE: backup created | `output-pre-refine.html` exists |
| 15 | If REFINE: different builder produces updated HTML | `output.html` modified (timestamp check) |
| 16 | Post-REFINE regression check | Gate comparison executed |
| 17 | Post-REFINE gates run | `_gate-results-post-refine.json` exists |
| 18 | Ship report printed | User sees gate summary + auditor excerpts |
| 19 | HTTP server killed | Port is free after completion |

---

## SECTION 8: FAILURE PROTOCOL

What happens when things go wrong at each stage.

| Failure | Detection | Action | Recovery |
|---------|-----------|--------|----------|
| Content file not found | Step 0.2 Read fails | PRINT error, STOP | User provides correct path |
| Content too long (>8,000 lines) | Step 0.2b line count | PRINT warning, STOP | User splits content |
| Window 1 produces no HTML | Step 1.4 Glob returns empty | STOP | User re-runs or adjusts content |
| Window 1 produces malformed HTML | Step 1.5 Read shows <10 lines or no `<html` | STOP | User re-runs |
| Playwright fails to install | Step 2.2 navigation fails after install retry | STOP, PRINT "Playwright unavailable" | User fixes Playwright |
| Zero screenshots captured | Step 2.7 sum = 0 | STOP | User checks page rendering |
| Gate runner throws exception | Step 3.2 try/catch | SET GATES_FAILED=true, continue | Gates default to failed; process continues with PA |
| All 5 auditors fail | Step 4.4 count = 0 | SET creative_verdict="REFINE", skip Weaver | Process routes to REFINE without PA data |
| Weaver fails | Step 5.4/5.5 no file or no verdict | SET weaver_available=false | Keyword scan fallback |
| REFINE produces malformed HTML | Step 7.4 check fails | Restore backup: `cp output-pre-refine.html output.html` | Ship pre-REFINE version |
| REFINE introduces gate regressions | Step 8.3b comparison | Restore backup, ship pre-REFINE | User sees pre-REFINE version |
| Second RETHINK | Step 6.5 protocol | Compare both artifacts by gate failures | Ship better one or present both to user |
| Server port unavailable after 3 attempts | Step 2.1 | STOP | User frees port |

---

## APPENDIX A: COMPLETE TOOL CALL MANIFEST

Every tool call the orchestrator makes, in execution order (standard REFINE path):

| Step | Tool | Target | Purpose |
|------|------|--------|---------|
| 0.2 | Read | `{content_path}` | Verify content exists |
| 0.2b | Read | `{content_path}` | Count lines for length check |
| 0.4 | Bash | `mkdir -p ...` | Create dirs (1440 + 768 only) |
| 0.5 | Bash | `cp ...` | Copy content |
| 0.6 | Glob | `_content.md` | Verify copy |
| 1.1 | Read (x6) | TC skill, content, prohibitions, tokens, mechanism-catalog, components | Build prompt |
| 1.2 | Task | Opus agent | Window 1: DERIVE+BUILD |
| 1.4 | Glob | `output.html` | Verify HTML |
| 1.5 | Read | `output.html` (50 lines) | Verify valid |
| 1.6 | Glob | `_tc-brief.md` | Verify brief |
| 1.7 | Glob | `_reflection.md` | Verify reflection |
| 2.1a | Bash | `lsof -ti:8888 \| xargs kill 2>/dev/null` | Kill stale server on port |
| 2.1b | Bash | `npx http-server ... & echo $!` | Start server + capture PID |
| 2.2 | browser_navigate | localhost:{port} | Load page |
| 2.2v | browser_evaluate | innerHTML.length | Verify page loaded |
| 2.3 | browser_run_code | captureScreenshots | Take screenshots (2 viewports) |
| 2.4 | browser_evaluate | checkScreenshotQuality | Validate screenshots |
| 2.5 | Glob | `_screenshots/1440/*.png` | Verify screenshots |
| 2.6 | Glob | `_screenshots/768/*.png` | Verify screenshots |
| 3.0 | Read | `_tc-brief.md` | BV gates (section count check) |
| 3.1 | Read | `gate-runner-core.js` | Load gate code |
| 3.2 | browser_evaluate | atomic gate function | Run ALL gates |
| 3.3 | Write | `_gate-results.json` | Save results |
| 3.4 | Read | `_gate-results.json` | Verify |
| 4.2 | Glob (x2) | `_screenshots/...` | Collect paths |
| 4.3 | Task (x5) | 5 Opus agents | PA auditors |
| 4.4 | Glob | `_pa/auditor-*.md` | Verify reports |
| 4.5 | Read (x5) | each auditor report (limit=5) | Verify existence + size |
| 5.1 | Read (x7) | auditor reports + brief + reflection | Build Weaver prompt |
| 5.2 | Task | Opus agent | Weaver |
| 5.4 | Glob | `weaver-synthesis.md` | Verify |
| 5.5 | Read | `weaver-synthesis.md` | Extract verdict |
| 6.1 | Read | `_gate-results.json` | Get summary |
| 6.4 | Edit (xN) | `output.html` | Mechanical patches (deterministic) |
| 6.6 | Write | `_routing-log.md` | Log decision |
| 7.0 | Bash | `cp output.html ...` | Backup |
| 7.0v | Glob | `output-pre-refine.html` | Verify backup |
| 7.1 | Read (x8+) | artifact + weaver + reflection + brief + content + vocabulary files | Build REFINE prompt |
| 7.2 | Task | Opus agent | REFINE |
| 7.4 | Read | `output.html` | Verify REFINE output |
| 7.5 | Glob | `_reflection-v2.md` | Verify reflection |
| 8.1 | browser_navigate + browser_run_code | captureScreenshots | New screenshots |
| 8.2 | browser_evaluate | atomic gate function | Post-REFINE gates |
| 8.3 | Write | `_gate-results-post-refine.json` | Save results |
| 8.3b | Read (x2) | pre/post gate results | Regression check |
| 8.5 | Bash | `kill {pid}` | Stop server |
| 8.6 | Glob | `{output_dir}/*` | Final inventory |
| 8.7 | Read (x2) | gate results + routing log | Ship report data |
| 8.8 | (print) | user report | Final output |

**Total: ~45-50 tool calls** (standard REFINE path).

---

## APPENDIX B: CONVENTIONS BRIEF (EMBEDDED IN SKILL)

This exact text is embedded in the `/build-page` skill and included in Window 1 and REFINE builder prompts:

```
CONVENTIONS (mechanical constraints — absorb these, do not checklist them):
- Container: 940-960px
- Fonts: Inter (body), Instrument Serif (headings), JetBrains Mono (code)
- Borders: 1px (subtle), 3px (section), 4px (primary)
- Prohibited: border-radius, box-shadow, gradients, transforms, transitions (except opacity)
- Backgrounds: R >= G >= B on every background hex (warm palette)
- Adjacent zone backgrounds: >= 15 RGB difference (perceptible)
- Stacked gap at any boundary: <= 120px total
- Single margin/padding: <= 96px
- Characters per line: 45-80
- WCAG 2.1 AA contrast: >= 4.5:1 body text, >= 3:1 large text
- ARIA landmarks: at least header, main, footer
- Responsive: 768px breakpoint minimum
- Self-contained HTML: all CSS embedded, no external dependencies
```

**Creative guidance (in prompt body, NOT in conventions):**
```
At each zone boundary, multiple channels should reinforce the same direction.
Vary transition types: some smooth continuations, some bridges, some full resets.
Name CSS classes from your metaphor, not generic (.geological-bedrock, not .section-dark).
```

---

## APPENDIX C: ARTIFACT CHAIN DIAGRAM

```
Step 0: _content.md
  └─ Step 1 READS _content.md. If missing → Read FAILS VISIBLY.

Step 1: output.html, _tc-brief.md, _reflection.md
  └─ Step 1 VERIFY: Glob("output.html"). If empty → STOP.
  └─ Step 2 SERVES output.html. If missing → 404.

Step 2: _screenshots/**/*.png
  └─ Step 2 VERIFY: Glob("_screenshots/1440/*.png"). If empty → STOP.
  └─ Step 4 PASSES paths to auditors. If empty → auditors see nothing.

Step 3: _gate-results.json
  └─ Step 3 VERIFY: Read("_gate-results.json"). If missing → GATES_FAILED=true.
  └─ Step 6 READS for routing. If missing → assumes failure.

Step 4: _pa/auditor-*.md
  └─ Step 4 VERIFY: Glob("_pa/auditor-*.md"). If empty → creative_verdict=REFINE.
  └─ Step 5 (Weaver) READS all reports (embedded inline).
  └─ Step 6 READS for keyword scan (fallback only).

Step 5: _pa/weaver-synthesis.md
  └─ Step 5 VERIFY: Glob + Read. If missing → keyword scan fallback.
  └─ Step 6 READS for verdict extraction.

Step 6: _routing-log.md
  └─ Step 8 READS for ship report.

Step 7: output.html (overwritten), _reflection-v2.md
  └─ Step 7 VERIFY: Read("output.html"). If malformed → restore backup.
  └─ Step 8 runs gates on new output.html.
  └─ Step 8.3b compares gate results for regression.
```

**Chain property:** Every file produced by Step N is consumed by Step N+k via an explicit Read or Glob call. If any step is skipped, the next step's verification FAILS because its input is missing.

---

## APPENDIX D: FINDING TRACKER

Every finding from every audit report and its disposition.

### Adversarial Review (31-plan-adversarial-review.md) — 17 BLOCKING, 12 SIGNIFICANT, 9 MINOR

| Finding | Description | Status | Change # |
|---------|-------------|--------|----------|
| B-01 | Step 4.2 contradicts Reconciliation #5 (brief to auditors) | **FIXED** | 1 |
| B-02 | Step 4.8 contamination check contradicts philosophy | **FIXED** | 2 |
| B-03 | Step 2.5 experiential scan is interpretive | **FIXED** | 3 |
| B-04 | GR-63 and GR-64 should be stripped | **FIXED** | 4 |
| B-05 | Category H narration gates should be stripped | **FIXED** | 5 |
| B-06 | Gate count inconsistent (28 vs 22 vs 19) | **FIXED** | 6 |
| B-07 | gate-manifest.json should be stripped | **FIXED** | 7 |
| B-08 | RETHINK tiebreaker uses "larger HTML" | **FIXED** | 8 |
| B-09 | No content length check | **FIXED** | 9 |
| B-10 | 1024px viewport inconsistency | **FIXED** | 10 |
| B-11 | Skill file size estimate too low | **FIXED** | 11 |
| B-12 | No PA question extraction method specified | **FIXED** | 12 |
| B-13 | Weaver prompt construction ambiguous | **FIXED** | 13 |
| B-14 | Abbreviated file paths in Step 7 | **FIXED** | 14 |
| B-15 | Dual routing logic (Section 3 vs Step 6) | **FIXED** | 15 |
| B-16 | No timeout specification | **FIXED** | 16 |
| B-17 | Mechanical patching underspecified | **FIXED** | 17 |
| S-01 | Auditor question numbering (E-XX) | **FIXED** | 12 (renumbered to Q-XX) |
| S-02 | Unenforceable metaphor constraint | **ACKNOWLEDGED** | PA auditors are the backstop. Added note in prompt. |
| S-03 | No model choice justification | **FIXED** | 26 |
| S-04 | No post-navigation verification | **FIXED** | 27 |
| S-05 | BV gates check section NAMES not structure | **FIXED** | 28 |
| S-06 | Routing keyword lists in external document | **FIXED** | 29 |
| S-07 | RETHINK backup + exclusion underspecified | **FIXED** | 30 |
| S-08 | Conventions brief mixes creative/mechanical | **FIXED** | 20 |
| S-09 | No post-REFINE regression check | **FIXED** | 21 |
| S-10 | Soft gate risk not acknowledged | **FIXED** | 25 |
| S-11 | No user direction mechanism | **FIXED** | 22 |
| S-12 | No content suitability note | **FIXED** | 19 |
| M-01 | Standard mode routing assumes 2 auditors | **FIXED** | Always 5 + Weaver makes standard mode N/A |
| M-02 | "Pipeline" terminology (4 instances) | **FIXED** | 18 |
| M-03 | TC skill line count inconsistency | **FIXED** | Added note in Phase 1 |
| M-04 | Phase 2 time estimate too high | **FIXED** | Reduced to 1-2 hours |
| M-05 | Dry run expects 3 viewports | **FIXED** | 10 (updated to 2) |
| M-06 | Step 4.7 checks content of auditor reports | **FIXED** | 24 |
| M-07 | Reflection sentence count inconsistency | **FIXED** | 32 (removed counts) |
| M-08 | Server PID not captured | **FIXED** | 35 |
| M-09 | No context management mention | **ACKNOWLEDGED** | Context management is implicit in skill design. Front-loading routing logic is the mitigation. |

### Plumbing/Freedom Boundary Audit (32-plumbing-freedom-audit.md) — 5 PC, 11 FE, 1 CONTRADICTION

| Finding | Description | Status | Change # |
|---------|-------------|--------|----------|
| PC-1 | Orchestrator experiential scan (Step 2.5) | **FIXED** | 3 |
| PC-2 | Step 4.7 checks auditor content | **FIXED** | 24 |
| PC-3 | Step 4.8 contamination check | **FIXED** | 2 |
| PC-4 | GR-64 checks Weaver creative output | **FIXED** | 4 |
| PC-5 | BV-08 checks brief-output diff | **FIXED** | 5 |
| FE-1 | Line count targets on brief | **FIXED** | 32 |
| FE-2 | Line count targets on reflection | **FIXED** | 32 |
| FE-3 | Checkpoint redundantly lists TC phases | **FIXED** | 33 |
| FE-4 | Creative guidance in conventions brief | **FIXED** | 20 |
| FE-5 | "Exactly" language in constraints | **FIXED** | 34 |
| FE-6 | "Ignore opposition map" in REFINE MAY NOT | **FIXED** | 31 |
| FE-7 | ~50 lines target on brief | **FIXED** | 32 |
| FE-8 | EXPERIENTIAL-CHECK + SELF-EVALUATION mandates | **FIXED** | 5 |
| FE-9 | Mechanical patching "adjust" / "increase" language | **FIXED** | 17 |
| FE-10 | Patching requires interpretive CSS judgment | **FIXED** | 17 |
| FE-11 | Over-composition vulnerability (many mechanisms) | **ACKNOWLEDGED** | PA auditors catch overcomposition; conventions do not mandate mechanism count |
| CONTRADICTION | Brief-to-auditor (Step 4.2 vs Reconciliation #5) | **FIXED** | 1 |

### Contamination Audit (20-contamination-audit.md) — 5 HIGH, 14 MEDIUM, 15 LOW

| Finding | Description | Status | Change # |
|---------|-------------|--------|----------|
| C-01 | Pipeline terminology in current-state-map | **FIXED** | 18 |
| C-02 | "ALWAYS FLAGSHIP" tier import | **FIXED** | Tier vocabulary eliminated |
| C-03 | BV-03 forbidden spec language gate | **FIXED** | 5 (BV-03 redefined to structure check) |
| C-04 | BV-08 brief-output diff | **FIXED** | 5 |
| C-05 | GR-64 checks creative output | **FIXED** | 4 |
| C-06 | Category H naming | **FIXED** | 5 (Category H stripped) |
| C-07 | Pipeline in gate audit | **FIXED** | 18 |
| C-08 | "Pre-Pipeline Setup" header | **FIXED** | 18 |
| C-09 | Structural validation checklists | **PARTIALLY FIXED** | Simplified to Glob+Read |
| C-10 | Old PA tier numbering (E-XX) | **FIXED** | 12 (renumbered to Q-XX) |
| C-11 | Conviction brief excerpt for auditors | **FIXED** | 1 |
| C-12 | Orchestrator experiential scan | **FIXED** | 3 |
| C-13 | Contamination check on auditor reports | **FIXED** | 2 |
| C-14 | "Non-Negotiables" format | **FIXED** | Split into USER DECISIONS + CONVENTIONS |
| C-15 | Pipeline in reference-file-map | **FIXED** | 18 |
| C-16 | soul-constraints.md classification | **N/A** | File not referenced |
| C-17 | "ALWAYS FLAGSHIP" in reference-file-map | **FIXED** | Tier vocabulary eliminated |
| C-18 | 5 auditors as default disagreement | **FIXED** | User decision: always 5 |
| C-19 | Pipeline in first-principles | **FIXED** | 18 |
| C-20 | Execution tracker mentioned | **FIXED** | Tracker stripped entirely |
| C-21 | Step 4.2 brief excerpt extraction | **FIXED** | 1 |
| C-22 | Step 4.9 contamination check | **FIXED** | 2 |
| C-23 | BV gates check brief content | **FIXED** | 28 (structure check, not content) |
| C-24 | "MAXIMUM COMPLIANCE" framing | **FIXED** | Reframed as enforcement patterns |
| C-25 | Pipeline in window1-design | **FIXED** | 18 |
| C-26 | "Phase gate" framing | **FIXED** | Now "checkpoint" |
| C-27 | Open Design Question #1 contradiction | **FIXED** | 1 (resolved: no brief) |
| C-28 | GR-64 in essential gate list | **FIXED** | 4 |
| C-29 | BV gates reimagined but check content | **FIXED** | 28 |
| C-30 | Pipeline in window2-design | **FIXED** | 18 |
| C-31 | Old PA tier numbering in questions | **FIXED** | 12 |
| C-32 | Pipeline in historical references | **N/A** | Historical references kept |
| C-33 | REFINE conventions placement | **ACKNOWLEDGED** | Conventions arrive after creative commitment in both windows |

### Ceremony Audit (21-ceremony-vs-necessity.md) — 8 CEREMONY, 3 GAPS, 4 OVER-ENGINEERING

| Finding | Description | Status | Change # |
|---------|-------------|--------|----------|
| 2A | Execution tracker | **FIXED** | Stripped |
| 2B | gate-manifest.json | **FIXED** | 7 |
| 2C | Separate pa-questions.md | **FIXED** | Not referenced |
| 2D | Separate pa-weaver.md | **FIXED** | Protocol inlined in skill |
| 2E | pa-manifest.md | **FIXED** | Not referenced |
| 2F | Builder narration gates (4) | **FIXED** | 5 |
| 2G | GR-63 experiential marker | **FIXED** | 4 |
| 2H | GR-64 usability priority | **FIXED** | 4 |
| 3A | World-description gap | **DEFERRED** | Prohibitions.md serves this role. Future optimization. |
| 3B | TC simplification | **N/A** | User decision: keep 841 lines |
| 3C | No brief to auditors | **FIXED** | 1 |
| 4A | Orchestrator experiential scan | **FIXED** | 3 |
| 4B | Contamination check | **FIXED** | 2 |
| 4C | Structural validation tables | **PARTIALLY FIXED** | Simplified to Glob+Read |
| 4D | 1024px viewport | **FIXED** | 10 |
| 5A | Conventions brief boundary | **FIXED** | 20 |
| 5C | RETHINK comparison | **FIXED** | 8, 30 |
| 6C | Gate count is ~22, not ~28 | **FIXED** | 6 |

### Potential Issues (22-potential-issues.md) — 22 risks

| Finding | Description | Status | Change # |
|---------|-------------|--------|----------|
| W1-01 | Agent skips TC derivation | **ACKNOWLEDGED** | 25 (soft gate risk note added) |
| W1-02 | No conviction brief | **FIXED** | Graceful degradation in plumbing spec |
| W1-03 | Malformed HTML | **PARTIALLY FIXED** | Step 1.5 checks; Step 2.2v adds page load verification |
| W1-04 | Context exhaustion for long content | **FIXED** | 9 |
| W1-05 | Decorative metaphor | **ACKNOWLEDGED** | PA auditors are backstop |
| W1-06 | Wrong token values | **ACKNOWLEDGED** | Advisory gate consideration for future |
| W2-01 | Playwright failure | **PARTIALLY FIXED** | 27 (page load verification added) |
| W2-02 | Dark screenshots | **ACKNOWLEDGED** | GR-62 threshold handles most cases |
| W2-03 | Auditor cross-contamination | **ACKNOWLEDGED** | Prompt construction enforces isolation |
| W2-04 | Gate runner bugs | **ACKNOWLEDGED** | Phase 4 validation catches this |
| W2-05 | Routing misclassification | **PARTIALLY FIXED** | 29 (keyword lists embedded) |
| W2-06 | 2-auditor mode misses issues | **FIXED** | Always 5 auditors |
| W2-07 | Weaver ignores auditors | **FIXED** | 37 (convergence acknowledgment added) |
| W2-08 | Shallow BV gates | **FIXED** | 28 (section count + min content check) |
| W3-01 | REFINE makes page worse | **FIXED** | 21 (regression check) |
| W3-02 | REFINE replaces metaphor | **ACKNOWLEDGED** | PA auditors are backstop |
| W3-03 | REFINE identical output | **ACKNOWLEDGED** | Accepted as feature |
| W3-04 | REFINE context budget | **ACKNOWLEDGED** | Context management is implicit |
| P-01 | File Read fails silently | **ACKNOWLEDGED** | Artifact chain catches most cases |
| P-02 | Wrong server content | **FIXED** | 27 |
| P-03 | Orchestrator skips steps | **FIXED** | Artifact chain design |
| P-04 | Orchestrator interprets | **FIXED** | 17 (deterministic patches) |

### Metacognitive Analysis (23-metacognitive-analysis.md) — systemic observations

| Finding | Description | Status |
|---------|-------------|--------|
| 1A | Content problem (bad/unsuitable content) | **FIXED** (19 — content suitability note) |
| 1B | Model dependency untested | **FIXED** (26 — model choice note) |
| 1C | Temporal blind spot (reading time) | **ACKNOWLEDGED** — design decision, not implementation fix |
| 1D | Audience does not exist (LLM proxy) | **ACKNOWLEDGED** — fundamental limitation |
| 1E | Metaphor tyranny | **ACKNOWLEDGED** — PA catches content-form misfit |
| 2A | TC+BUILD cognitive load | **ACKNOWLEDGED** — monitor in validation runs |
| 2B | 5-auditor convergence trap | **ACKNOWLEDGED** — design decision |
| 2C | 29 stripped gates — what did they catch? | **ACKNOWLEDGED** — PA replaces stripped gate coverage |
| 2D | Plumbing/freedom boundary already breached | **FIXED** (3, 2, 17 — interpretive steps removed/made deterministic) |
| 3A | Process optimizes for visual density | **ACKNOWLEDGED** — by design |
| 3B | Content type bias | **FIXED** (19 — suitability note) |
| 3C | Degradation at 50+ runs | **ACKNOWLEDGED** — future concern |

### Holistic Review (24-holistic-review.md) — gaps and tensions

| Finding | Description | Status |
|---------|-------------|--------|
| Gap 1 | BLOCKING-USABILITY to REFINE builder | **FIXED** (3 — usability scan removed, auditors catch this) |
| Gap 2 | Post-REFINE feedback loop | **FIXED** (21 — regression check) |
| 2A | BV gates pressure formulaic briefs | **FIXED** (28 — structure check, not name check) |
| 2B | GR-45 RECOMMENDED vs ESSENTIAL | **FIXED** (GR-45 is RECOMMENDED in gate table) |
| 2C | Routing keyword scanning | **FIXED** (29 — embedded keyword lists) |
| 2D | File reading order influences priorities | **ACKNOWLEDGED** — reading order is intentional architecture |
| 2E | Conventions brief position | **ACKNOWLEDGED** — arrives after creative commitment |
| 6A | User direction mechanism | **FIXED** (22) |
| 6D | Failure protocol | **FIXED** (36 — Section 8 added) |

---

**END OF IMPLEMENTATION PLAN v2**
