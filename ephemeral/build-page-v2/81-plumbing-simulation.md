# Plumbing Simulation Report — /build-page v2

**Date:** 2026-02-28
**Task:** #81 — WAVE 5 Plumbing Simulation
**Scenario:** Build `extractions/deep/yegge-gas-town-extraction.md` (1,324 lines, ~42KB) as if we were the orchestrator executing SKILL.md (956 lines) step by step.

---

## 1. STEP-BY-STEP TRACE

### STEP 0: Parse Input and Create Output Directory

**0.1 — Parse content path**

Tool call: User invokes `/build-page extractions/deep/yegge-gas-town-extraction.md`

SKILL.md says: "Parse {content_path} from command argument." The orchestrator receives the argument string, extracts the file path. No ambiguity here — the user provides the path directly.

**Decision:** content_path = `extractions/deep/yegge-gas-town-extraction.md`

**0.2 — Verify file exists**

```
Tool: Read("extractions/deep/yegge-gas-town-extraction.md", limit=10)
```

Simulated output: First 10 lines of the markdown file. File exists, starts with `# Steve Yegge and Gas Town: Complete Extraction`. CHECK PASSES.

**0.2b — Count lines**

```
Tool: Read("extractions/deep/yegge-gas-town-extraction.md")  [full file, count lines]
```

Simulated output: 1,324 lines. Under 5,000 threshold. Under 8,000 threshold. No warnings. CONTINUE.

**STUCK POINT #1:** SKILL.md says "Read({content_path}). Count lines." but the Read tool returns content, not a line count. The orchestrator must either:
- Read the full file and count `\n` characters in the response, OR
- Use `Bash("wc -l {content_path}")` instead.

Neither is explicitly specified. In practice, the orchestrator would likely do `Read` then mentally count or use the line numbers shown. This is MINOR — any Opus orchestrator would figure it out.

**0.3 — Derive slug and output directory**

```
slug = "yegge-gas-town-extraction"  (filename, lowercase, hyphens — already in that format)
date = "2026-02-28"
output_dir = "ephemeral/builds/yegge-gas-town-extraction-2026-02-28/"
```

**Decision:** Straightforward string manipulation. No ambiguity.

**0.4 — Create directory structure**

```
Tool: Bash("mkdir -p ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_screenshots/1440 ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_screenshots/768 ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa")
```

**0.5 — Copy content**

```
Tool: Bash("cp extractions/deep/yegge-gas-town-extraction.md ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_content.md")
```

**0.6 — Verify copy**

```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_content.md")
```

Simulated output: 1 file found. CHECK PASSES.

**Step 0 timing:** ~15 seconds (5 tool calls, all fast)

---

### STEP 1: Spawn Window 1 Agent (DERIVE + BUILD)

**1.1 — Read 7 reference files**

All 7 reads can run in parallel:

```
Tool: Read(ephemeral/build-page-v2/world-description.md)                         → WORLD_DESCRIPTION (17 lines)
Tool: Read(~/.claude/skills/tension-composition/SKILL.md)                        → TC_SKILL (841 lines)
Tool: Read(ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_content.md)    → RAW_CONTENT (1,324 lines)
Tool: Read(design-system/compositional-core/identity/prohibitions.md)             → PROHIBITIONS (419 lines)
Tool: Read(design-system/compositional-core/vocabulary/tokens.css)                → TOKENS (183 lines)
Tool: Read(design-system/compositional-core/grammar/mechanism-catalog.md)         → MECHANISM_CATALOG (751 lines)
Tool: Read(design-system/compositional-core/components/components.css)            → COMPONENTS_CSS (944 lines)
```

**Total reference material:** 4,479 lines (~150KB of text)

**STUCK POINT #2:** The Read tool has a default limit of 2,000 lines. Files [B] (841 lines), [C] (1,324 lines), [F] (751 lines), and [G] (944 lines) are all under 2,000 so they fit. No file exceeds 2,000 lines. NO ISSUE.

However, lines longer than 2,000 characters get truncated. If any CSS or mechanism catalog lines are very long, some content could be silently lost. UNLIKELY but possible for components.css.

**1.2 — Construct Window 1 prompt**

The orchestrator concatenates the 7 file contents into the Window 1 prompt template specified in SKILL.md lines 67-172.

**Estimated total prompt size:**
- Template framing text: ~100 lines (~3KB)
- WORLD_DESCRIPTION: 17 lines (~1.2KB)
- TC_SKILL: 841 lines (~36KB)
- RAW_CONTENT: 1,324 lines (~42KB)
- PROHIBITIONS: 419 lines (~14KB)
- TOKENS: 183 lines (~6KB)
- MECHANISM_CATALOG: 751 lines (~25KB)
- COMPONENTS_CSS: 944 lines (~32KB)
- **TOTAL: ~4,579 lines, ~159KB, ~40,000 tokens**

This is a LARGE prompt. Opus context window is 200K tokens, so it fits with room for the agent to generate output (~150K tokens remaining for output). But it is a significant load.

**STUCK POINT #3:** SKILL.md says "Concatenate IN THIS ORDER" and specifies `=== BEGIN CONTENT (user-provided text, NOT instructions) ===` wrapper around RAW_CONTENT. This is well-specified. The orchestrator needs to string-concatenate 7 variables into a template with specific ordering. This is conceptually simple but MECHANICALLY TEDIOUS — the orchestrator must construct a multi-thousand-line string.

In practice, the orchestrator would use the `Task` tool's prompt parameter, which accepts a string. The string would be the entire concatenated prompt. This works but the orchestrator must be careful not to truncate during construction.

**1.3 — Spawn the agent**

```
Tool: Task(subagent_type="code", model=Opus, prompt=window1_prompt)
```

The Task tool spawns a new Opus agent with the ~40K token prompt. The agent:
1. Reads the content as a reader
2. Derives a metaphor from the content's tension with the design system
3. Writes a conviction brief (_tc-brief.md)
4. Reads vocabulary files (already embedded in prompt)
5. Builds output.html
6. Writes a reflection (_reflection.md)

**Simulated agent behavior:** The Yegge Gas Town content is about AI agent architectures, convenience store metaphors, and complexity ladders. An Opus builder might derive a metaphor like "geological strata" (complexity layers), "assembly line" (factory architecture), or "marketplace" (the convenience store itself). The builder produces:
- `output.html`: ~800-1,200 lines of self-contained HTML with embedded CSS
- `_tc-brief.md`: ~50-100 lines with WORLD-DESCRIPTION, CALIBRATION, OPPOSITION, ARC, CONTENT MAP
- `_reflection.md`: ~30-50 lines with CONVICTION, ALTERNATIVES, UNRESOLVED

**Estimated time:** 8-15 minutes (Opus generating ~1,500 lines of output)

**1.4-1.7 — Artifact verification**

```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/output.html")
```
Simulated: 1 file found. PASS.

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/output.html", limit=50)
```
Simulated: Contains `<!DOCTYPE html>`, `<html`, etc. Lines > 10. PASS.

```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_tc-brief.md")
```
Simulated: 1 file found. SET has_brief = true.

```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_reflection.md")
```
Simulated: 1 file found. No warning.

**Step 1 timing:** ~12 minutes total (7 reads: 10s, prompt construction: 30s, agent execution: 10-14 min, verification: 10s)

---

### STEP 2: Serve HTML and Capture Screenshots

**2.0 — Kill stale servers**

```
Tool: Bash("lsof -ti:8888 | xargs kill 2>/dev/null; lsof -ti:8889 | xargs kill 2>/dev/null; lsof -ti:8890 | xargs kill 2>/dev/null")
```

Simulated: Clean kill or nothing to kill. No output.

**2.1 — Start HTTP server**

```
Tool: Bash("npx http-server ephemeral/builds/yegge-gas-town-extraction-2026-02-28 -p 8888 --cors -c-1 & echo $!")
```

Simulated output: `12345` (PID). SET server_pid = 12345. SET server_port = 8888.

**STUCK POINT #4:** The Bash tool runs commands but backgrounded processes (`&`) may or may not persist across Bash calls. The `run_in_background` parameter exists but SKILL.md doesn't mention it. In practice:
- If the shell state doesn't persist (as noted in tool docs: "shell state does not persist between commands"), the backgrounded http-server may die when the Bash call completes.
- WORKAROUND: Use `run_in_background=true` on the Bash call, OR use `nohup`.
- HISTORICAL EVIDENCE: Previous pipeline runs used this exact command successfully, so it likely works — the process is forked and continues even after the shell exits.

**2.2 — Navigate browser**

```
Tool: browser_navigate("http://localhost:8888/output.html")
```

**2.2v — Verify page loaded**

```
Tool: browser_evaluate(() => document.querySelector('html').innerHTML.length)
```

Simulated: Returns something like `45320`. Greater than 100. PASS.

**2.3 — Capture screenshots at 2 viewports**

**Viewport 1: 1440px**

```
Tool: browser_resize(width=1440, height=900)
Tool: browser_take_screenshot(type="png", fullPage=true, filename="ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_screenshots/1440/cold-look.png")
Tool: browser_evaluate(() => document.body.scrollHeight)
```

Simulated scrollHeight: ~6,000px (1,324 lines of content, designed page). Steps = Math.ceil(6000 / (900 * 0.8)) = Math.ceil(6000 / 720) = 9 scroll captures.

```
FOR i = 1 to 9:
  Tool: browser_evaluate(() => window.scrollTo(0, {i * 720}))
  Tool: browser_take_screenshot(type="png", filename="ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_screenshots/1440/scroll-{i:02d}.png")
```

That's 1 (cold-look) + 9 (scroll) = 10 screenshots at 1440px.
Tool calls: 1 resize + 1 cold-look screenshot + 1 scrollHeight eval + 9*(1 eval + 1 screenshot) = 21 tool calls.

**STUCK POINT #5:** The scroll-through screenshots involve sequential browser_evaluate + browser_take_screenshot pairs. These CANNOT be parallelized — each scroll must happen before its screenshot. This is 18 sequential browser tool calls for the scroll captures alone. At ~2s per call, that's ~36 seconds just for 1440px scrolls.

**Viewport 2: 768px**

```
Tool: browser_resize(width=768, height=900)
Tool: browser_take_screenshot(type="png", fullPage=true, filename="ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_screenshots/768/cold-look.png")
Tool: browser_evaluate(() => document.body.scrollHeight)
```

Simulated scrollHeight at 768px: ~8,000px (narrower viewport = taller page). Steps = Math.ceil(8000 / 720) = 12 scroll captures.

```
FOR i = 1 to 12:
  Tool: browser_evaluate(() => window.scrollTo(0, {i * 720}))
  Tool: browser_take_screenshot(type="png", filename="ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_screenshots/768/scroll-{i:02d}.png")
```

That's 1 + 12 = 13 screenshots at 768px.

**STUCK POINT #6:** SKILL.md Step 2.3 says `fullPage=true` for the cold-look screenshot. But the fullPage parameter captures the ENTIRE scrollable page in one image. If cold-look is already fullPage, why do we ALSO need scroll-through screenshots? The scroll-through captures are for PA auditors to experience the page as a journey (sequential viewing). But the cold-look fullPage already gives the complete visual. This is INTENTIONAL DESIGN — cold-look shows overall composition, scroll-through shows pacing — but it means the cold-look screenshot could be very large (6000px tall image).

**Total screenshots:** 10 + 13 = 23 screenshots.

**2.5-2.8 — Verify screenshots**

```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_screenshots/1440/*.png")
```
Simulated: 10 files. PASS.

```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_screenshots/768/*.png")
```
Simulated: 13 files. PASS.

SET screenshot_paths = all 23 .png paths.

```
FOR each of 23 screenshots:
  Tool: Bash("stat -f%z {path}")
```

**STUCK POINT #7:** That's 23 separate Bash calls to check file sizes. These CAN be parallelized (independent). But 23 parallel Bash calls is a lot. In practice, an orchestrator might combine: `Bash("wc -c ephemeral/builds/.../_screenshots/1440/*.png ephemeral/builds/.../_screenshots/768/*.png")` — single call returning all sizes. SKILL.md specifies individual calls, but combining is more efficient and achieves the same verification.

Simulated: All screenshots > 5000 bytes (typical PNG screenshot is 50KB-500KB). PASS.

**Step 2 timing:** ~2-3 minutes (server start: 5s, navigation: 3s, cold-look screenshots: 10s, scroll-through: ~90s for both viewports, verification: 15s)

---

### STEP 3 + 4: Gates + PA (PARALLEL)

SKILL.md explicitly says: "Steps 3 and 4 run IN PARALLEL. Spawn PA auditors (Step 4) first (background via Task), then run gates (Step 3) in foreground."

**EXECUTION ORDER:**
1. Spawn 5 PA auditors first (Step 4, background)
2. Run gates in foreground (Step 3)
3. Wait for PA agents to complete

### STEP 4 (spawned first): PA Auditors

**4.1 — Collect screenshot paths**

```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_screenshots/1440/*.png")
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_screenshots/768/*.png")
```

These return ordered lists of paths. The orchestrator formats them into the auditor prompt template.

**4.2 — Construct 5 auditor prompts**

Each auditor prompt follows the AUDITOR PROMPT TEMPLATE (SKILL.md lines 424-482). The orchestrator must:
1. Fill {LETTER} with A, B, C, D, E
2. Fill {QUESTIONS_FOR_THIS_AUDITOR} from the question assignment table
3. Fill {SCREENSHOT_PATHS} with the actual file paths
4. Fill {output_dir} with the build directory path

**Auditor A prompt (~500 tokens):**
- Questions: Q-01, Q-05, Q-11, Q-17
- Screenshots: all 23 paths listed
- Output: `{output_dir}/_pa/auditor-A.md`

**Auditor B prompt (~500 tokens):**
- Questions: Q-02, Q-08, Q-14, Q-18

**Auditor C prompt (~500 tokens):**
- Questions: Q-03, Q-07, Q-12, Q-19

**Auditor D prompt (~500 tokens):**
- Questions: Q-04, Q-06, Q-13, Q-20

**Auditor E prompt (~500 tokens):**
- Questions: Q-09, Q-10, Q-15, Q-16

**STUCK POINT #8:** Each auditor receives screenshot PATHS, not screenshot contents. The agents use the Read tool to view screenshots (Read tool can read images). But auditors are spawned via `Task(subagent_type="code")`. Subagents CAN use the Read tool to read images. This should work. However, if any screenshot path is wrong (typo in construction), an auditor will silently miss those screenshots.

**STUCK POINT #9:** The prompt template lists `{1440_scroll_paths}` and `{768_scroll_paths}` as separate variables. The orchestrator must format these from the Glob results. SKILL.md doesn't specify the exact format — should they be listed one per line? Comma-separated? The template shows:
```
1440px cold look: {output_dir}/_screenshots/1440/cold-look.png
1440px scroll: {1440_scroll_paths}
```
Most natural: newline-separated list of full paths. An Opus orchestrator would figure this out.

**4.3 — Spawn 5 agents in parallel**

```
Tool: Task(subagent_type="code", model=Opus, prompt=auditor_A_prompt)
Tool: Task(subagent_type="code", model=Opus, prompt=auditor_B_prompt)
Tool: Task(subagent_type="code", model=Opus, prompt=auditor_C_prompt)
Tool: Task(subagent_type="code", model=Opus, prompt=auditor_D_prompt)
Tool: Task(subagent_type="code", model=Opus, prompt=auditor_E_prompt)
```

All 5 spawn simultaneously. Each auditor:
1. Reads cold-look screenshots at both viewports (Read tool on .png files)
2. Writes cold-look responses (gut reaction, worst thing, best thing, ship it?)
3. Reads scroll-through screenshots sequentially
4. Writes scroll-through narrative
5. Answers 4 questions with screenshot references
6. Writes report to `_pa/auditor-{LETTER}.md`

**Simulated per-auditor execution:** ~3-5 minutes each (reading ~23 images, writing ~50-80 lines of prose)

**STUCK POINT #10:** 5 Opus agents reading images simultaneously. Each agent reads ~23 screenshots via Read tool. That's 115 Read calls on image files, potentially competing for resources. The Read tool handles images natively. But the TOTAL image data across 5 agents is significant (~23 screenshots * 5 agents = 115 image reads, though many are the same files read by multiple agents). This should work fine — Read tool caches and handles concurrent access.

### STEP 3 (foreground): Gate Runner

**3.0 — Brief verification (IF has_brief = true)**

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_tc-brief.md")
```

Orchestrator manually checks:
- BV-01: Count `## ` headers. Simulated: 5 headers (WORLD-DESCRIPTION, CALIBRATION, OPPOSITION, ARC, CONTENT MAP). >= 5. PASS.
- BV-02: Each section >= 3 non-empty lines. Simulated: Likely pass (Opus writes substantive sections).
- BV-03: Total > 100 bytes. Simulated: Brief is ~3-5KB. PASS.
- BV-04: Contains at least 4 of WORLD, CALIBRATION, OPPOSITION, ARC, MAP. Simulated: 5/5 found. PASS.

```
PRINT: "BV: BV-01 pass, BV-02 pass, BV-03 pass, BV-04 pass"
```

**STUCK POINT #11:** The BV checks are TEXT checks done by the orchestrator. SKILL.md says "BV-01 through BV-04 are text-only gates run by the orchestrator separately (Step 3.0)." But the gate-runner-v2.js file ALSO contains a `checkBriefVerification(briefText)` function (lines 959-1005) that does the same checks. Should the orchestrator use the JS function or do it manually?

SKILL.md is clear: "BV gates (BV-01..04) are TEXT-ONLY, checked by the orchestrator separately." The JS function exists as a utility but the orchestrator does text parsing. This means the orchestrator does the check via Read + manual inspection. NO AMBIGUITY — the SKILL.md instruction is authoritative.

However, there's a practical tension: the orchestrator (an LLM) is doing text parsing (counting headers, checking line counts). LLMs can miscount. The JS function would be more reliable. This is a DESIGN CHOICE that prioritizes simplicity (no extra browser_evaluate for text-only checks) over precision.

**3.1-3.4 — Gate execution**

**3.1a — Read gate runner**

```
Tool: Read("ephemeral/build-page-v2/gate-runner-v2.js")
```

Returns 1,049 lines of JavaScript.

**3.1b — Extract function body**

The orchestrator must extract lines 33-944 (the `gateRunnerV2` function). SKILL.md gives practical guidance: "starts at `const gateRunnerV2` and ends at the LAST `};` before any `// --- ORCHESTRATOR-ONLY` comment or `function checkBriefVerification` definition."

**STUCK POINT #12 (CRITICAL):** This is the MOST COMPLEX mechanical step. The orchestrator must:
1. Read a 1,049-line JS file
2. Identify the function boundaries (line 33 to line 944)
3. Extract that 912-line function
4. Pass it to browser_evaluate as a string

The browser_evaluate tool expects a `function` parameter that is a JavaScript function string. SKILL.md says:
```
browser_evaluate({ function: GATE_JS_FUNCTION_BODY })
```

But the gate runner function is `const gateRunnerV2 = async () => { ... };` — it's a function ASSIGNMENT, not a bare function. The browser_evaluate tool needs an invokable function. The orchestrator must either:
- Pass `async () => { ... }` (strip the `const gateRunnerV2 =` prefix and trailing `;`)
- OR wrap it: `(async () => { const gateRunnerV2 = async () => { ... }; return await gateRunnerV2(); })()`

The SKILL.md says at line 29: `// or: browser_evaluate({ function: gateRunnerV2.toString() })` which suggests the function body is passed directly.

**In practice:** The orchestrator would:
1. Read the file
2. Mentally (or via string processing) extract the function
3. Construct the browser_evaluate call with the function body

This is mechanically fragile. An LLM orchestrator might truncate, misidentify boundaries, or introduce syntax errors when extracting 912 lines of JS. This is the HIGHEST-RISK step in the entire pipeline.

**REALISTIC WORKAROUND:** The orchestrator could use Bash to extract the function:
```bash
sed -n '33,944p' gate-runner-v2.js
```
But SKILL.md doesn't suggest this approach. An Opus orchestrator would likely read the file, identify the boundaries, and construct the browser_evaluate call — which works but is tense.

**3.2 — Execute gate runner**

```
Tool: browser_evaluate(function="async () => { const gates = {}; const errors = []; ... [912 lines] ... return JSON.stringify({gates, metadata, summary, errors}, null, 2); }")
```

Simulated output: JSON string with ~25 gate results. Example:
```json
{
  "gates": {
    "GR-03": { "id": "GR-03", "pass": true, "value": { "maxWidth": 960 } },
    "GR-05": { "id": "GR-05", "pass": true, "value": { "violations": 0 } },
    ...
  },
  "summary": {
    "total": 25,
    "passed": 22,
    "failed": 3,
    "essential_pass": 12,
    "essential_fail": 2,
    "gates_failed": true
  }
}
```

Simulated failures (typical for first build):
- GR-13 (stacked gap): FAIL — some section boundaries exceed 120px
- GR-44 (trailing void): FAIL — footer has excessive bottom margin
- GR-45 (typography variation): FAIL — insufficient weight/size diversity

**3.3 — Write results**

```
Tool: Write("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_gate-results.json", jsonString)
```

**3.4 — Read and parse results**

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_gate-results.json", limit=20)
```

Starts with `{`, contains `"summary"`. PASS.
SET GATES_FAILED = true (2 essential failures).
SET ESSENTIAL_FAIL_COUNT = 2.

```
PRINT: "Essential: 12 pass, 2 fail. GATES_FAILED=true"
```

**Step 3 timing:** ~2-3 minutes (brief verification: 30s, gate runner read/extract: 60s, browser_evaluate: 30s, write+read: 15s)

### STEP 4 (continued): Wait for PA agents

By this point, PA agents have been running for ~2-3 minutes while gates ran. Each agent takes 3-5 minutes. Some may be done, some still running.

**4.4-4.5 — Verify PA artifacts**

```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa/auditor-*.md")
```

Simulated: 5 files found (all agents completed). PASS.

```
FOR each of A, B, C, D, E:
  Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa/auditor-{LETTER}.md", limit=5)
```

Simulated: Each > 100 bytes. PASS. SET has_pa_data = true.

**Step 4 timing (total):** ~5 minutes (agents run in parallel, verification after all complete)

**Steps 3+4 combined timing:** ~5 minutes (gate runner finishes in ~3 min, PA agents finish in ~5 min, waiting for slowest)

---

### STEP 5: Spawn Weaver

**5.1 — Read all PA content + brief + reflection**

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa/auditor-A.md")
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa/auditor-B.md")
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa/auditor-C.md")
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa/auditor-D.md")
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa/auditor-E.md")
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_tc-brief.md")
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_reflection.md")
```

All 7 reads in parallel.

Simulated total: ~350-500 lines of PA reports + 80-130 lines brief + reflection = ~500-650 lines.

**5.2 — Construct Weaver prompt**

Using WEAVER PROMPT TEMPLATE (SKILL.md lines 526-582). The orchestrator embeds:
- Screenshot paths (1440px only per template: `{1440px screenshot paths}`)
- All 5 auditor reports inline
- Conviction brief
- Reflection

**Estimated Weaver prompt:** ~800-1,000 lines, ~25-30K tokens.

**STUCK POINT #13:** The Weaver prompt template at line 539 says `{1440px screenshot paths}`. But it only lists 1440px paths — no 768px. This means the Weaver only sees desktop screenshots. Is this intentional? The auditors see BOTH viewports. The Weaver's experiential anchor is formed from desktop-only screenshots. This seems intentional (the Weaver reads auditor reports that include responsive observations) but could be a gap if the Weaver's own first impression misses responsive issues.

**5.3 — Spawn Weaver**

```
Tool: Task(subagent_type="code", model=Opus, prompt=weaver_prompt)
```

Simulated: Weaver agent runs for ~3-5 minutes. Produces:
- `_pa/weaver-synthesis.md`: ~100-150 lines
- Contains: EXPERIENTIAL ANCHOR, WHAT IS WORKING, WHAT IS ALMOST THERE, WHERE TO GO, VERDICT

Simulated verdict: **REFINE** — "The page has the bones of a compelling composition but the spacing and typographic monotony prevent it from reaching its potential."

**5.4-5.5 — Verify Weaver**

```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa/weaver-synthesis.md")
```
Simulated: 1 file found.

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa/weaver-synthesis.md")
```
Contains "REFINE". SET weaver_available = true.

**Step 5 timing:** ~4-5 minutes (reads: 10s, prompt construction: 30s, Weaver execution: 3-4 min, verification: 10s)

---

### STEP 6: Routing Decision

**6.1 — Read gate data**

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_gate-results.json")
```

Extract: GATES_FAILED = true, ESSENTIAL_FAIL_COUNT = 2.

**6.2 — Determine creative verdict**

weaver_available = true, so extract last 30 lines of Weaver file.

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa/weaver-synthesis.md")
```

**STUCK POINT #14:** SKILL.md says "Extract the LAST 30 lines of the Weaver file." The Read tool reads from the beginning by default. To get the last 30 lines, the orchestrator must:
- Read the full file and count lines, then Read with offset = total - 30
- OR use `Bash("tail -30 {path}")`

SKILL.md doesn't specify HOW to get last 30 lines. An Opus orchestrator would likely read the full file and look at the end. Since the Weaver file is ~100-150 lines, reading the whole thing and finding the verdict in the last section is straightforward.

Simulated: Last 30 lines contain "VERDICT: REFINE" → creative_verdict = "REFINE"

**6.3 — Apply routing matrix**

```
creative_verdict = "REFINE"
GATES_FAILED = true
```

Matrix entry: `IF creative_verdict == "REFINE" AND GATES_FAILED == true: route = "PATCH_THEN_REFINE" → Step 6.4 then Step 7`

**DECISION: PATCH_THEN_REFINE**

**6.4 — Mechanical patching**

Simulated failures: GR-13 (stacked gap), GR-44 (trailing void). GR-45 is RECOMMENDED (not essential) and explicitly marked "NOT patchable" — routes to REFINE.

**For GR-13 (stacked gap > 120px):**

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_gate-results.json")
```

Extract the failing detail — which elements, what values. Simulated: section boundary between zones 3 and 4 has margin-bottom: 80px + padding-top: 64px = 144px total.

Fix per table: "Reduce margin-bottom on upper element by half."

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/output.html")
```

Find the offending CSS rule. Simulated: `.zone-3 { margin-bottom: 80px; }`.

```
Tool: Edit("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/output.html", old_string="margin-bottom: 80px", new_string="margin-bottom: 40px")
```

New total: 40px + 64px = 104px. Under 120px. PASS.

**For GR-44 (trailing void):**

Fix per table: "Reduce margin-bottom on last content element to 24px. Reduce padding-bottom on body/main to 24px."

```
Tool: Edit("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/output.html", old_string="<appropriate CSS>", new_string="<fixed CSS>")
```

**STUCK POINT #15:** Patching requires the orchestrator to:
1. Read gate results to identify WHICH gates failed and their specific details
2. Read the HTML to find the corresponding CSS
3. Apply the fix

This is well-specified in the Deterministic Patch Table but mechanically complex. The orchestrator must understand the gate failure detail format and map it to CSS edits. Gate result details vary in format (some give element selectors, some give computed values). The orchestrator must bridge from gate output to CSS edit.

**Re-run gates after patching:**

```
Tool: browser_navigate("http://localhost:8888/output.html")  [force reload]
Tool: browser_evaluate(gateRunnerV2_function)
Tool: Write("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_gate-results-patched.json", jsonString)
```

**STUCK POINT #16:** After patching the HTML file, the browser is still showing the old version. The orchestrator must either:
- Hard refresh: `browser_evaluate(() => location.reload(true))`
- Navigate away and back
- The http-server has `-c-1` (no caching) so navigation should work

SKILL.md doesn't explicitly say "reload after patching" — it says to re-run the gate runner (3.2-3.3). The orchestrator would need to reload first. This is implicit but could be missed.

**6.6 — Log routing decision**

```
Tool: Write("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_routing-log.md",
  "date: 2026-02-28\ncreative_verdict: REFINE\nGATES_FAILED: true\nESSENTIAL_FAIL_COUNT: 2\nroute: PATCH_THEN_REFINE\npatches_applied: 2")
```

**Step 6 timing:** ~3-5 minutes (reads: 15s, patching: 2-3 min, re-run gates: 1 min, logging: 10s)

---

### STEP 7: Spawn Window 3 Agent (REFINE)

**7.0 — Backup**

```
Tool: Bash("cp ephemeral/builds/yegge-gas-town-extraction-2026-02-28/output.html ephemeral/builds/yegge-gas-town-extraction-2026-02-28/output-pre-refine.html")
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/output-pre-refine.html")
```

Simulated: Backup created. 1 file found. PASS.

**7.1 — Read reference files for REFINE prompt**

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/output.html")        → ARTIFACT_HTML (~1,000 lines)

[weaver_available = true, so:]
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_pa/weaver-synthesis.md") → WEAVER (~120 lines)

Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_reflection.md")     → REFLECTION (~40 lines)
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_tc-brief.md")       → BRIEF (~80 lines)
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_content.md")        → RAW_CONTENT (1,324 lines)
Tool: Read("design-system/compositional-core/grammar/mechanism-catalog.md")             → MECHANISM_CATALOG (751 lines)
Tool: Read("design-system/compositional-core/components/components.css")                → COMPONENTS_CSS (944 lines)
Tool: Read("design-system/compositional-core/identity/prohibitions.md")                 → PROHIBITIONS (419 lines)
Tool: Read("design-system/compositional-core/vocabulary/tokens.css")                    → TOKENS (183 lines)
```

Also check for user direction:
```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_user-direction.md")
```
Simulated: Not found (first run, no user feedback). USER_DIRECTION not set.

Total reads: 9 reads + 1 Glob = 10 tool calls. Most can run in parallel.

**Estimated REFINE prompt size:**
- Template framing: ~120 lines (~4KB)
- ARTIFACT_HTML: ~1,000 lines (~35KB)
- WEAVER: ~120 lines (~4KB)
- REFLECTION: ~40 lines (~1.5KB)
- BRIEF: ~80 lines (~3KB)
- RAW_CONTENT: 1,324 lines (~42KB)
- MECHANISM_CATALOG: 751 lines (~25KB)
- COMPONENTS_CSS: 944 lines (~32KB)
- PROHIBITIONS: 419 lines (~14KB)
- TOKENS: 183 lines (~6KB)
- **TOTAL: ~4,981 lines, ~167KB, ~42,000 tokens**

This is even LARGER than the Window 1 prompt because it includes both the existing HTML artifact AND the creative evaluation materials. Still fits in Opus context (200K), but the agent has less room for output generation.

**STUCK POINT #17 (SIGNIFICANT):** The REFINE prompt includes the FULL output.html (~35KB) and the FULL raw content (~42KB). That's 77KB of raw text just for those two files. The REFINE builder needs both (HTML to modify, content for reference), but this is a significant context load. If the HTML is very long (1,500+ lines), the REFINE agent might struggle with accurate editing — it must read, understand, and rewrite a large HTML document.

**7.2 — Construct REFINE prompt**

Using REFINE PROMPT TEMPLATE (SKILL.md lines 750-869). Concatenate all variables into the template.

**7.3 — Spawn REFINE agent**

```
Tool: Task(subagent_type="code", model=Opus, prompt=refine_prompt)
```

Simulated: REFINE agent runs for ~10-15 minutes (reads full HTML, reads Weaver direction, writes creative commitment, rebuilds/modifies HTML, writes reflection-v2). Produces:
- Overwritten `output.html` (~1,200-1,500 lines)
- New `_reflection-v2.md` (~40-60 lines)

**STUCK POINT #18:** The REFINE agent receives the current HTML and must overwrite it. The agent uses `Write("ephemeral/builds/.../output.html", ...)` to replace the file. This is a full file overwrite — the agent must produce the COMPLETE HTML, not just edits. For a 1,000+ line HTML file, this means the agent generates 1,000+ lines of output. Opus can do this but it's at the edge of what agents typically produce in a single session.

**7.4-7.5 — Verify REFINE artifacts**

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/output.html", limit=20)
```
CHECK: > 10 lines AND contains `<html`. Simulated: PASS.

```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_reflection-v2.md")
```
Simulated: 1 file found. PASS.

**Step 7 timing:** ~12-18 minutes (reads: 15s, prompt construction: 45s, REFINE execution: 10-15 min, verification: 10s)

---

### STEP 8: Post-REFINE Gate Check and Ship

**8.1 — Re-navigate and recapture screenshots**

```
Tool: browser_navigate("http://localhost:8888/output.html")
```

Then repeat Step 2.3 screenshot protocol (2 viewports, cold-look + scroll-through).

**STUCK POINT #19:** SKILL.md says "Recapture screenshots (same protocol as Step 2.3, overwrite existing)." The screenshots overwrite the same filenames. This means the PA auditor screenshots (from the initial build) are lost. If post-REFINE regression check (8.3b) triggers backup restoration, the screenshots in the directory will be from the REFINED version, not the original. This is PROBABLY FINE — the ship report uses post-REFINE screenshots — but there's no way to visually compare pre-REFINE vs post-REFINE.

Timing: Same as Step 2.3, ~90 seconds.

**8.2 — Re-run gate runner**

```
Tool: browser_evaluate(gateRunnerV2_function)
```

Simulated: Post-REFINE gates. The REFINE builder likely fixed the typography monotony (GR-45) through creative means, and the mechanical patches already fixed GR-13 and GR-44. Simulated result: 14/14 essential pass, 0 fail. GATES_FAILED = false.

**8.3 — Write post-REFINE results**

```
Tool: Write("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_gate-results-post-refine.json", jsonString)
```

**8.3b — Regression check**

Compare essential_fail counts:
- Pre-REFINE (after patching): 0 essential failures (patches fixed them)
- Post-REFINE: 0 essential failures

No regressions. CONTINUE.

**STUCK POINT #20:** The regression check compares "post-refine vs pre-refine results." But we have THREE sets of gate results:
1. `_gate-results.json` — initial (before patching)
2. `_gate-results-patched.json` — after patching
3. `_gate-results-post-refine.json` — after REFINE

Which "pre-refine" does 8.3b compare against? Logically, it should compare against the patched version (the version the REFINE builder received). SKILL.md doesn't specify which file to compare. An orchestrator would likely compare against `_gate-results-patched.json` since that's the immediate predecessor.

**8.4 — Post-REFINE mechanical patching (if needed)**

Simulated: 0 essential failures. No patching needed.

**8.5 — Kill server**

```
Tool: Bash("kill 12345")
```

If fails:
```
Tool: Bash("lsof -ti:8888 | xargs kill")
```

**8.6 — Final file inventory**

```
Tool: Glob("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/*")
```

Simulated inventory:
```
_content.md
_gate-results.json
_gate-results-patched.json
_gate-results-post-refine.json
_pa/auditor-A.md
_pa/auditor-B.md
_pa/auditor-C.md
_pa/auditor-D.md
_pa/auditor-E.md
_pa/weaver-synthesis.md
_reflection.md
_reflection-v2.md
_routing-log.md
_screenshots/1440/cold-look.png
_screenshots/1440/scroll-01.png through scroll-09.png
_screenshots/768/cold-look.png
_screenshots/768/scroll-01.png through scroll-12.png
_tc-brief.md
output.html
output-pre-refine.html
```

Total: ~35 files.

**8.7-8.8 — Read results and print ship report**

```
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_gate-results-post-refine.json")
Tool: Read("ephemeral/builds/yegge-gas-town-extraction-2026-02-28/_routing-log.md")
```

Print ship report to user:
```
Build complete.

Output: ephemeral/builds/yegge-gas-town-extraction-2026-02-28/output.html
Gates: 14/14 essential passed, 1 recommended warning (GR-45 typography), 0 advisory issues
Route: PATCH_THEN_REFINE (2 mechanical patches → full REFINE cycle)
Weaver verdict: REFINE — "The page has the bones of a compelling composition but the spacing and typographic monotony prevent it from reaching its potential."
Auditor impressions:
  A: "Warm, editorial, grounded — like holding a well-made magazine."
  B: "The middle third dragged — I found myself skimming past similar-looking sections."
  C: "Personality: authoritative, systematic, deliberate."
  D: "The dense code section is rescue — the design holds your hand through complexity."
  E: "Content shifts and visual shifts align at the major transitions."
```

**Step 8 timing:** ~3-5 minutes (screenshots: 90s, gates: 30s, writes: 15s, ship report: 30s)

---

## 2. STUCK POINTS SUMMARY

### CRITICAL (could cause pipeline failure)

| # | Step | Issue | Severity | Workaround |
|---|------|-------|----------|------------|
| 12 | 3.1b | Gate runner function extraction: orchestrator must extract 912 lines of JS, strip const assignment, pass to browser_evaluate without syntax errors | CRITICAL | Use `Bash("sed -n '33,944p' file")` or read carefully with function boundaries |
| 17 | 7.1-7.3 | REFINE prompt is ~42K tokens — agent must read AND rewrite ~1,000 line HTML. Risk of truncation or incomplete output | HIGH | Opus handles this, but longer HTML increases risk |

### SIGNIFICANT (could cause confusion or suboptimal results)

| # | Step | Issue | Severity | Workaround |
|---|------|-------|----------|------------|
| 4 | 2.1 | Backgrounded http-server may not persist across Bash calls | MEDIUM | Use nohup or run_in_background=true; historically works with `&` |
| 15 | 6.4 | Patching requires mapping gate failure details to specific CSS edits | MEDIUM | Gate runner details are structured JSON with selectors — orchestrator can map |
| 16 | 6.4 | Browser needs reload after file edit — not explicitly stated | MEDIUM | browser_navigate to same URL, or browser_evaluate(location.reload) |
| 20 | 8.3b | Ambiguous which "pre-refine" results to compare against (initial vs patched) | MEDIUM | Compare against patched — it's the version REFINE builder received |

### MINOR (unlikely to cause issues)

| # | Step | Issue | Severity | Workaround |
|---|------|-------|----------|------------|
| 1 | 0.2b | "Count lines" from Read output — no direct line count returned | LOW | Read returns numbered lines; count max line number. Or use wc -l |
| 5 | 2.3 | Scroll screenshots are sequential — 18+ browser calls per viewport | LOW | Inherent to the design; ~90s total, acceptable |
| 7 | 2.8 | 23 separate file size checks — could be one Bash call | LOW | Combine into single wc -c with glob pattern |
| 8 | 4.2 | Screenshot paths must be correctly formatted in auditor prompts | LOW | Glob returns sorted paths; list one per line |
| 9 | 4.2 | `{1440_scroll_paths}` format unspecified in template | LOW | Use newline-separated list |
| 11 | 3.0 | BV checks done by LLM text parsing — could miscount | LOW | Opus is reliable at counting; JS function available as backup |
| 13 | 5.2 | Weaver only receives 1440px screenshots, not 768px | LOW | Intentional — Weaver reads auditor reports that cover both viewports |
| 14 | 6.2 | "Extract LAST 30 lines" requires knowing file length first | LOW | Read full file; verdict is always at the end |
| 19 | 8.1 | Screenshots overwritten — no visual comparison pre/post REFINE | LOW | Output-pre-refine.html preserved as backup; screenshots are secondary |

---

## 3. TIMING ESTIMATE

| Step | Description | Estimated Time | Bottleneck |
|------|-------------|---------------|------------|
| 0 | Parse + Setup | 15s | None |
| 1 | Window 1 (DERIVE+BUILD) | 10-14 min | Opus agent generating HTML |
| 2 | Screenshots | 2-3 min | Sequential browser calls |
| 3+4 | Gates + PA (parallel) | 5-7 min | PA agents (slowest of 5) |
| 5 | Weaver | 4-5 min | Opus Weaver agent |
| 6 | Routing + Patching | 3-5 min | Mechanical patching |
| 7 | REFINE | 12-18 min | Opus REFINE agent |
| 8 | Post-REFINE + Ship | 3-5 min | Re-screenshots + gates |
| **TOTAL** | | **~40-57 min** | **Agent execution time** |

**Breakdown by category:**
- Agent execution (Steps 1, 4, 5, 7): ~30-40 minutes (75% of total)
- Browser/screenshots (Steps 2, 8): ~5-7 minutes (12%)
- Orchestrator plumbing (Steps 0, 3, 6): ~5-10 minutes (13%)

**Comparison to historical runs:**
- Middle-Tier Experiment: ~35 min (no REFINE cycle)
- Yegge Gas Town (pipeline v3): ~3h20m total across 3 sessions (included PA re-runs)
- Expected for v2: ~45 min for PATCH_THEN_REFINE route (most common path)

---

## 4. COMPLETE TOOL CALL SEQUENCE

### Step 0: Parse + Setup (5 calls)
```
01. Read(content_path, limit=10)                          [verify exists]
02. Read(content_path)                                    [count lines]
03. Bash("mkdir -p {output_dir}/...")                      [create dirs]
04. Bash("cp {content_path} {output_dir}/_content.md")    [copy content]
05. Glob("{output_dir}/_content.md")                       [verify copy]
```

### Step 1: Window 1 (12 calls)
```
06-12. Read x7 (world-desc, TC skill, content, prohibitions, tokens, mechanisms, components)  [parallel]
13.    Task(Opus, window1_prompt)                          [spawn builder — BLOCKING ~12 min]
14.    Glob("{output_dir}/output.html")                    [verify HTML]
15.    Read("{output_dir}/output.html", limit=50)          [verify content]
16.    Glob("{output_dir}/_tc-brief.md")                   [verify brief]
17.    Glob("{output_dir}/_reflection.md")                 [verify reflection]
```

### Step 2: Screenshots (~48 calls)
```
18.    Bash("lsof -ti:8888 | xargs kill ...")             [stale cleanup]
19.    Bash("npx http-server ... & echo $!")               [start server]
20.    browser_navigate("http://localhost:8888/output.html") [navigate]
21.    browser_evaluate(innerHTML.length)                   [verify load]
22.    browser_resize(1440, 900)                           [viewport 1]
23.    browser_take_screenshot(cold-look.png)               [cold look 1440]
24.    browser_evaluate(scrollHeight)                       [get height]
25-42. browser_evaluate(scrollTo) + browser_take_screenshot x9  [scroll 1440]
43.    browser_resize(768, 900)                            [viewport 2]
44.    browser_take_screenshot(cold-look.png)               [cold look 768]
45.    browser_evaluate(scrollHeight)                       [get height]
46-69. browser_evaluate(scrollTo) + browser_take_screenshot x12 [scroll 768]
70.    Glob("..._screenshots/1440/*.png")                  [verify 1440]
71.    Glob("..._screenshots/768/*.png")                   [verify 768]
72.    Bash("stat -f%z ...") x23 or combined               [verify sizes]
```

### Step 4 (spawned first, parallel with 3): PA Auditors (~12 calls)
```
73.    Glob("..._screenshots/1440/*.png")                  [collect paths]
74.    Glob("..._screenshots/768/*.png")                   [collect paths]
75-79. Task(Opus, auditor_X_prompt) x5                     [spawn 5 auditors — parallel]
       [WAIT for all 5 to complete]
80.    Glob("..._pa/auditor-*.md")                         [verify all]
81-85. Read("..._pa/auditor-X.md", limit=5) x5            [verify content]
```

### Step 3 (foreground, parallel with 4): Gates (~5 calls)
```
86.    Read("..._tc-brief.md")                             [BV checks]
87.    Read("gate-runner-v2.js")                           [load gate runner]
88.    browser_evaluate(gateRunnerV2)                       [run gates]
89.    Write("..._gate-results.json", jsonString)          [save results]
90.    Read("..._gate-results.json", limit=20)             [parse results]
```

### Step 5: Weaver (~10 calls)
```
91-97. Read x7 (5 auditor reports + brief + reflection)   [parallel]
98.    Task(Opus, weaver_prompt)                           [spawn Weaver — BLOCKING ~4 min]
99.    Glob("..._pa/weaver-synthesis.md")                  [verify exists]
100.   Read("..._pa/weaver-synthesis.md")                  [verify verdict]
```

### Step 6: Routing (~8 calls)
```
101.   Read("..._gate-results.json")                       [get gate data]
102.   Read("..._pa/weaver-synthesis.md")                  [get verdict]
       [DECISION: PATCH_THEN_REFINE]
103.   Read("..._gate-results.json")                       [get failure details]
104.   Read("...output.html")                              [find CSS to patch]
105-106. Edit("...output.html") x2                         [apply patches]
107.   browser_navigate(...)                               [reload page]
108.   browser_evaluate(gateRunnerV2)                       [re-run gates]
109.   Write("..._gate-results-patched.json")              [save patched results]
110.   Write("..._routing-log.md")                         [log decision]
```

### Step 7: REFINE (~14 calls)
```
111.   Bash("cp output.html output-pre-refine.html")      [backup]
112.   Glob("...output-pre-refine.html")                   [verify backup]
113-121. Read x9 (HTML + weaver + reflection + brief + content + mechanisms + components + prohibitions + tokens) [parallel]
122.   Glob("..._user-direction.md")                       [check for user feedback]
123.   Task(Opus, refine_prompt)                           [spawn REFINE — BLOCKING ~12 min]
124.   Read("...output.html", limit=20)                    [verify HTML]
125.   Glob("..._reflection-v2.md")                        [verify reflection]
```

### Step 8: Post-REFINE + Ship (~50+ calls)
```
126.   browser_navigate(...)                               [reload refined page]
127-168. Screenshot protocol (same as Step 2.3)            [~42 calls]
169.   browser_evaluate(gateRunnerV2)                       [post-refine gates]
170.   Write("..._gate-results-post-refine.json")          [save results]
       [regression check: compare counts]
171.   Bash("kill {server_pid}")                           [kill server]
172.   Glob("{output_dir}/*")                              [file inventory]
173.   Read("..._gate-results-post-refine.json")           [for ship report]
174.   Read("..._routing-log.md")                          [for ship report]
       [PRINT ship report to user]
```

**TOTAL TOOL CALLS: ~174** (not counting parallelized calls that collapse into fewer round-trips)

**Effective round-trips (accounting for parallelism):**
- Step 0: 4 rounds (read → read → 2xbash → glob)
- Step 1: 3 rounds (7x read parallel → task → 4x glob/read parallel)
- Step 2: ~48 rounds (mostly sequential browser calls)
- Step 3+4: ~8 rounds (reads → task x5 → gate runner → verifications)
- Step 5: 3 rounds (7x read parallel → task → 2x verify)
- Step 6: ~6 rounds (reads → edits → gate re-run → log)
- Step 7: 4 rounds (backup → 10x read parallel → task → 2x verify)
- Step 8: ~50 rounds (screenshots + gates + ship)
- **EFFECTIVE: ~126 round-trips**

---

## 5. VERDICT

### EXECUTABLE AS WRITTEN: YES, WITH AMBIGUITIES

The pipeline is executable by an Opus orchestrator. All steps have sufficient specification to produce the intended outcome. No step is fundamentally impossible or underspecified to the point of failure.

### AMBIGUITIES (11 total)

**2 HIGH (could cause failure if mishandled):**

1. **Gate runner function extraction (Step 3.1b):** The orchestrator must extract 912 lines of JavaScript from a 1,049-line file, correctly identify boundaries, and pass it to browser_evaluate. The instructions say "find the line starting with `const gateRunnerV2 = async () => {`" which is clear, but the extraction itself is error-prone for an LLM. A concrete line number reference (`lines 33-944`) or a Bash sed command would be more robust.

2. **REFINE prompt context budget (Step 7):** The REFINE prompt is ~42K tokens. If the initial builder produced very large HTML (1,500+ lines), the prompt could approach context limits, leading to truncated generation. SKILL.md doesn't address what to do if the REFINE prompt exceeds a threshold.

**5 MEDIUM (could cause confusion or suboptimal execution):**

3. **Browser page reload after patching (Step 6.4):** After editing the HTML file, the browser must reload. SKILL.md says to re-run the gate runner but doesn't say "reload the page first." An orchestrator might navigate to the URL again (which effectively reloads) but could also try to run gates on the stale version.

4. **Line counting method (Step 0.2b):** "Count lines" from a Read result isn't a direct operation. Ambiguous whether to use Read (count line numbers) or Bash (wc -l).

5. **Last 30 lines extraction (Step 6.2):** Read tool reads from the beginning. Getting "last 30 lines" requires either reading the full file or using Bash. Not explicitly addressed.

6. **Regression comparison baseline (Step 8.3b):** Three sets of gate results exist (initial, patched, post-refine). Which "pre-refine" to compare against is implied but not stated.

7. **Screenshot file size validation (Step 2.8):** 23 individual checks specified; combining into one Bash call is more efficient. Not a functional ambiguity but a verbosity issue.

**4 LOW (informational, unlikely to affect execution):**

8. **Screenshot path format in auditor prompts (Step 4.2):** How to format the list of paths. Obvious default: newline-separated.

9. **Weaver screenshot scope (Step 5.2):** Only 1440px paths specified. Intentional but not explicitly stated as such.

10. **BV check mechanism (Step 3.0):** Text checks by orchestrator vs JS utility function. SKILL.md is clear (orchestrator does it) but the JS function's existence is confusing.

11. **fullPage vs scroll screenshots (Step 2.3):** cold-look is fullPage AND there are scroll-throughs. Both are needed (different purposes) but not explained.

### OVERALL ASSESSMENT

The pipeline is **well-specified for the common path** (PATCH_THEN_REFINE, which is the most likely route). The RETHINK and SHIP paths are also specified but less likely to be tested. The gate runner extraction (Stuck Point #12) is the single highest-risk mechanical step — it would benefit from a helper script or explicit line numbers in the spec.

The timing estimate of **~40-57 minutes** for a complete PATCH_THEN_REFINE run is realistic and aligns with historical data (Middle-Tier: 35 min without REFINE, Yegge v3 first session: ~80 min including debugging).

**Confidence that an Opus orchestrator executes this successfully on first attempt: 80-85%.** The 15-20% failure risk comes primarily from gate runner extraction (5-8%) and REFINE prompt size edge cases (3-5%), with the remaining risk distributed across the medium ambiguities.
