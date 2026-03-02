# Orchestrator Plumbing: What the /build-page Skill Programmatically Controls

**Author:** plumbing-spec (Task #16)
**Date:** 2026-02-27
**Updated:** 2026-02-28 (v2 -- enforcement patterns)
**Status:** COMPLETE

---

## Design Principle

The orchestrator is an LLM following instructions, not a runtime. It WILL skip steps, abbreviate, or improvise unless every step is a single unambiguous tool call with a verifiable artifact. This spec is designed for MAXIMUM COMPLIANCE within Claude Code's constraints.

### Four Enforcement Patterns (apply to every step)

**1. SINGLE ATOMIC OPERATIONS.** Each programmatic step is ONE tool call that produces ONE verifiable output. No multi-step sequences that can be partially executed. No "run the gate runner" -- instead: "call `browser_evaluate` with this exact JS, Write the returned JSON to this exact path."

**2. VERIFIABLE ARTIFACT CHAIN.** Every step produces a file. The NEXT step's first action is to Read or Glob that file. If a step was skipped, the chain breaks visibly because the file does not exist. No step can proceed without proof the previous step completed.

**3. PATH OF LEAST RESISTANCE.** Following instructions must be EASIER than skipping them. Every tool call is spelled out with exact parameters. No interpretation, no judgment, no "assess whether." Just: Read this, check this condition, Write this.

**4. ZERO INTERPRETABLE INSTRUCTIONS for programmatic steps.** Never say "evaluate." Never say "assess." Never say "determine if quality is sufficient." Say: "Read file X. If file contains string Y, set variable Z = true. If not, set Z = false."

---

## THE ORCHESTRATOR IS NOT

- A creative agent (it does not compose)
- A quality evaluator (it does not judge beauty)
- A content reader (it does not interpret the conviction brief's meaning)
- An output editor (it does not rewrite agent files -- exception: mechanical CSS patching)

---

## STEP 0: Parse Input and Create Output Directory

### Trigger
User invokes `/build-page {CONTENT_PATH}` or says "build a page from X."

### Actions (exact tool calls)

```
STEP 0.1 — Parse input:
  PARSE content_path from command argument.
  IF content_path is empty or missing:
    ASK USER: "What content file should I build? Provide the file path."
    WAIT for response. SET content_path = user response.

STEP 0.2 — Validate content exists:
  Tool: Read
  File: {content_path}
  Read first 10 lines.
  IF Read returns error (file not found):
    PRINT "ERROR: Content file {content_path} does not exist." STOP.
  IF file has 0 lines:
    PRINT "ERROR: Content file {content_path} is empty." STOP.
  PRINT: "Content file verified: {line_count} lines."

STEP 0.3 — Derive slug + output_dir:
  slug = content filename, stripped of extension, lowercased, spaces/underscores to hyphens.
  date = YYYY-MM-DD (today).
  output_dir = "ephemeral/builds/{slug}-{date}/"
  PRINT: "Output directory: {output_dir}"

STEP 0.4 — Create directory structure:
  Tool: Bash
  Command: mkdir -p {output_dir}/_screenshots/1440 {output_dir}/_screenshots/1024 {output_dir}/_screenshots/768 {output_dir}/_pa

STEP 0.5 — Copy content:
  Tool: Bash
  Command: cp {content_path} {output_dir}/_content.md

STEP 0.6 — Verify content copied:
  Tool: Glob
  Pattern: "{output_dir}/_content.md"
  IF zero results: PRINT "ERROR: Content copy failed." STOP.
  PRINT: "Content copied to {output_dir}/_content.md"

STEP 0.7 — Ask mode:
  ASK USER: "Standard or high-stakes? (Standard = 2 PA auditors. High-stakes = 5 + Weaver.)"
  DEFAULT: standard.
  SET mode = "standard" | "high-stakes"
  PRINT: "Mode: {mode}"
```

### Files Involved
- **Input:** `{content_path}` (user-provided)
- **Created:** `{output_dir}/`, `{output_dir}/_content.md`, screenshot subdirs, `_pa/` subdir
- **Artifact dependency:** Step 1 reads `{output_dir}/_content.md`. If it does not exist, Step 1 prompt construction fails.

### Error Handling
- File not found: Read returns error, orchestrator prints message and stops.
- Permission denied: Bash cp fails, Glob verification catches it.
- Output dir already exists: mkdir -p succeeds silently (idempotent).

---

## STEP 1: Spawn Window 1 Agent (DERIVE + BUILD)

### Actions

```
1.1  CONSTRUCT Window 1 agent prompt by concatenating these sections IN ORDER:

     [A] RECEIVING PRINCIPLE (5 lines, literal text embedded in prompt -- NOT a file path)
     [B] TC Skill simplified (~300 lines):
         READ ~/.claude/skills/tension-composition/SKILL.md
     [C] Raw content:
         READ {output_dir}/_content.md
     [D] Identity files (concatenated):
         READ design-system/compositional-core/identity/prohibitions.md
         READ design-system/compositional-core/vocabulary/tokens.css
     [E] Mechanism catalog:
         READ design-system/compositional-core/grammar/mechanism-catalog.md
     [F] Components CSS:
         READ design-system/compositional-core/components/components.css
     [G] CONVENTIONS BRIEF (literal ~40-line text embedded in prompt)

     The prompt ALSO includes these output instructions:
       "You MUST write these 3 files:
        1. {output_dir}/output.html -- complete self-contained HTML page
        2. {output_dir}/_tc-brief.md -- conviction brief, ~50 lines, 5 sections
        3. {output_dir}/_reflection.md -- 3-dimension reflection, ~15-20 sentences"

1.2  SPAWN agent:
     Tool: Task (subagent_type: "code")
     Model: Opus (mandatory)
     Prompt: the constructed prompt from 1.1

1.3  WAIT for agent to complete.
```

### Artifact Verification (MANDATORY -- do not proceed without these checks)

After Window 1 agent completes, execute these tool calls IN ORDER. Each call verifies the previous step happened.

```
VERIFY 1.4:
  Tool: Glob
  Pattern: "{output_dir}/output.html"
  IF zero results: REPORT "Window 1 failed: no HTML produced." STOP.

VERIFY 1.5:
  Tool: Read
  File: {output_dir}/output.html
  Read first 50 lines.
  CHECK: line count > 10 AND file contains "<html" (case-insensitive).
  IF NOT: REPORT "Window 1 produced malformed HTML." STOP.
  PRINT: "Window 1 HTML verified: {line_count} lines."

VERIFY 1.6:
  Tool: Glob
  Pattern: "{output_dir}/_tc-brief.md"
  IF zero results: PRINT "WARNING: No conviction brief produced. REFINE will lack direction."
  SET has_brief = (result count > 0)

VERIFY 1.7:
  Tool: Glob
  Pattern: "{output_dir}/_reflection.md"
  IF zero results: PRINT "WARNING: No reflection produced."
  SET has_reflection = (result count > 0)
```

**Why Glob then Read:** Glob confirms the file EXISTS. Read confirms it has CONTENT. Both are single tool calls. The orchestrator must execute both -- the Read output is printed to the conversation, creating a visible audit trail.

### Error Handling
- Agent times out (no response): report to user, stop.
- Agent completes but produces no files: Glob returns empty, orchestrator stops.
- Brief or reflection missing: logged as warnings, pipeline continues. These affect downstream quality but are not blocking.

### Files Involved
- **Read by orchestrator:** 6 reference files (listed in 1.1 B-F)
- **Expected outputs from agent:** `output.html`, `_tc-brief.md`, `_reflection.md`

---

## STEP 2: Serve HTML and Capture Screenshots

### Precondition
Step 1 validation passed (HTML file exists).

### Actions

```
2.1  START HTTP server:
     npx http-server {output_dir} -p 8888 --cors -c-1 &
     RECORD server PID for cleanup.
     WAIT 2 seconds for server startup.

2.2  NAVIGATE Playwright:
     browser_navigate to http://localhost:8888/output.html

2.3  CAPTURE screenshots:
     Use captureScreenshots(page, htmlUrl, screenshotDir) from
     ephemeral/va-extraction/gate-runner-core.js Section 8
     via browser_run_code.

     The function captures at 3 viewports (1440, 1024, 768):
       - Cold look (full page)
       - Scroll-through at 80% viewport-height steps

     Screenshots saved to {output_dir}/_screenshots/{viewport}/.

2.4  VALIDATE screenshot quality:
     Run checkScreenshotQuality(screenshotDir) (GR-62).
     IF FAIL:
       RE-CAPTURE once (call captureScreenshots again).
       Run checkScreenshotQuality again.
       IF still FAIL: LOG "Screenshot quality failed after retry." CONTINUE anyway.

2.5  CHECK screenshot files:
     FOR EACH viewport IN [1440, 1024, 768]:
       COUNT .png files in {output_dir}/_screenshots/{viewport}/
       IF count == 0: LOG "No screenshots for {viewport}px viewport."
```

### Orchestrator Experiential Scan (~2 min)

```
2.6  SCROLL through the page in Playwright at reading speed.
     The orchestrator visually inspects:
       - Any text that cannot be read (too small, too low contrast, overlapping)
       - Any chart/table that cannot be decoded
       - Any navigation that does not work (broken links, missing anchors)

     IF anything illegible or broken found:
       SET blocking_usability = true
       SET usability_notes = description of what is broken
     ELSE:
       SET blocking_usability = false
```

### Artifact Verification (MANDATORY after screenshot capture)

```
VERIFY 2.7:
  Tool: Glob
  Pattern: "{output_dir}/_screenshots/1440/*.png"
  PRINT: "1440px screenshots: {count} files"
  IF count == 0: PRINT "CRITICAL: No 1440px screenshots captured."

VERIFY 2.8:
  Tool: Glob
  Pattern: "{output_dir}/_screenshots/768/*.png"
  PRINT: "768px screenshots: {count} files"
  IF count == 0: PRINT "WARNING: No 768px screenshots captured."

VERIFY 2.9:
  SET screenshot_count = sum of 2.7 and 2.8 counts.
  IF screenshot_count == 0: REPORT "Cannot proceed: no screenshots for PA auditors." STOP.
  IF screenshot_count < 3: PRINT "WARNING: Limited screenshots ({screenshot_count}). PA quality may be affected."
  SET screenshot_paths = all .png paths returned by Glob calls above.
```

**Why Glob for verification:** The captureScreenshots function may succeed silently but produce zero files (DPR issues, blank captures). The Glob call provides PROOF that files exist on disk. Step 4 (PA auditors) depends on `screenshot_paths` -- if this list is empty, the PA step cannot proceed.

### Error Handling
- Port 8888 in use: try 8889, then 8890. After 3 attempts: report to user, stop.
- Playwright cannot navigate: `browser_install`, retry once. If still fails: report to user, stop.
- `captureScreenshots` function not found: report to user, stop.
- Screenshots captured but all blank (GR-62 fails twice): proceed with warning. PA auditors will describe blank images, which is itself diagnostic.

### Files Involved
- **Input:** `{output_dir}/output.html`
- **Code source:** `ephemeral/va-extraction/gate-runner-core.js` (loaded into Playwright)
- **Output:** `{output_dir}/_screenshots/{viewport}/*.png`
- **Artifact dependency:** Step 4 depends on `screenshot_paths`. If empty, Step 4 cannot spawn auditors.

---

## STEP 3: Run Gate Runner (~28 essential gates)

### Precondition
HTML served via HTTP (Step 2 server running). Screenshot verification passed (Step 2).

### Design: SINGLE ATOMIC GATE RUNNER

The gate runner is ONE `browser_evaluate` call that runs ALL gates and returns ONE JSON object. No selective execution. No partial runs. No "run these gates, then those gates." One call, one result, one file.

**Why atomic:** An LLM orchestrator that runs gates in 3 separate calls (runGateRunner, runAntiPatternGates, runWave2Gates) can skip call 2 or 3 without visible failure. A single function that runs ALL gates and returns a unified result either works completely or fails completely.

### Actions (exactly 3 tool calls)

```
STEP 3.1 — Load gate runner code:
  Tool: Read
  File: ephemeral/va-extraction/gate-runner-core.js
  Purpose: Get the JS code into the orchestrator's context.
  PRINT: "Gate runner code loaded: {line_count} lines."

STEP 3.2 — Execute ALL gates in ONE browser_evaluate call:
  Tool: browser_evaluate
  Function body:

    async () => {
      const meta = {
        timestamp: new Date().toISOString(),
        url: window.location.href,
        viewport: { width: window.innerWidth, height: window.innerHeight },
        dpr: window.devicePixelRatio,
        userAgent: navigator.userAgent
      };

      const results = {};
      const errors = [];

      // Run ALL gate functions. Each returns { gate, pass, detail }.
      // If any individual gate throws, catch and record the error.
      // The function NEVER throws -- it always returns a complete result.

      try { Object.assign(results, await runGateRunner()); }
      catch(e) { errors.push({ fn: 'runGateRunner', error: e.message }); }

      try { Object.assign(results, await runAntiPatternGates()); }
      catch(e) { errors.push({ fn: 'runAntiPatternGates', error: e.message }); }

      try { Object.assign(results, await runWave2Gates()); }
      catch(e) { errors.push({ fn: 'runWave2Gates', error: e.message }); }

      // Coverage meta-gate
      const expectedGates = [
        'GR-03','GR-05','GR-06','GR-08','GR-09','GR-10',
        'GR-11','GR-13','GR-14','GR-15','GR-18','GR-44','GR-45',
        'GR-48','GR-60','GR-61','GR-62','GR-63','GR-67'
      ];
      const missingGates = expectedGates.filter(g => !(g in results));
      results['GR-48'] = {
        gate: 'GR-48', pass: missingGates.length === 0,
        detail: missingGates.length === 0
          ? 'All expected gates produced results'
          : `Missing gates: ${missingGates.join(', ')}`
      };

      // Summary counts (deterministic, no interpretation)
      let essentialPass = 0, essentialFail = 0, advisoryFail = 0;
      const essentialGateIds = [
        'GR-03','GR-05','GR-06','GR-08','GR-09','GR-10',
        'GR-11','GR-13','GR-14','GR-15','GR-18','GR-44','GR-45',
        'GR-48','GR-60','GR-61','GR-62','GR-63','GR-67'
      ];
      for (const [id, r] of Object.entries(results)) {
        if (essentialGateIds.includes(id)) {
          if (r.pass) essentialPass++; else essentialFail++;
        } else {
          if (!r.pass) advisoryFail++;
        }
      }

      return JSON.stringify({
        meta,
        gates: results,
        errors,
        summary: {
          essential_pass: essentialPass,
          essential_fail: essentialFail,
          advisory_fail: advisoryFail,
          gates_failed: essentialFail > 0
        }
      }, null, 2);
    }

  This returns a SINGLE JSON string. The orchestrator does not interpret it.
  The orchestrator's ONLY action is to Write this string to a file.

STEP 3.3 — Write gate results AND print summary:
  Tool: Write
  File: {output_dir}/_gate-results.json
  Content: the JSON string returned from 3.2.

  IMMEDIATELY AFTER writing, PRINT to conversation:
    "Gate results written to {output_dir}/_gate-results.json
     Essential: {summary.essential_pass} pass, {summary.essential_fail} fail
     Advisory: {summary.advisory_fail} fail
     GATES_FAILED = {summary.gates_failed}"

  SET GATES_FAILED = summary.gates_failed (true or false, from the JSON)
```

### Brief Verification (BV gates)

```
STEP 3.0 — Brief verification (BEFORE gate runner, IF brief exists):
  IF has_brief == true (from Step 1.6):
    Tool: Read
    File: {output_dir}/_tc-brief.md

    CHECK these 4 conditions by string search (no interpretation):
      BV-01: file contains "WORLD" or "World" (case-insensitive)
      BV-02: file contains "CALIBRATION" or "Calibration"
      BV-03: file contains "OPPOSITION" or "Opposition"
      BV-04: file contains "ARC" or "Arc"

    PRINT: "Brief verification: BV-01={pass/fail} BV-02={pass/fail} BV-03={pass/fail} BV-04={pass/fail}"

  ELSE: PRINT "Brief verification: SKIPPED (no brief produced)."
```

### Artifact Verification

```
VERIFY 3.4:
  Tool: Read
  File: {output_dir}/_gate-results.json
  Read first 20 lines.
  CHECK: file starts with "{" (valid JSON opening).
  CHECK: file contains "summary" (the summary block was produced).
  IF NOT: PRINT "CRITICAL: Gate results file missing or malformed. GATES_FAILED = unknown."
  SET GATES_FAILED = true (conservative default if gate results are unreadable).
```

### Error Handling
- `browser_evaluate` throws: PRINT the error message. SET GATES_FAILED = true. Write `{"error": "gate runner failed", "gates_failed": true}` to gate results file. Proceed to PA.
- Page not loaded in Playwright: `browser_navigate` to URL, retry once. If still fails: same error path as above.
- Gate runner JS has syntax errors: the `try/catch` inside the function catches per-section errors. The outer function ALWAYS returns JSON.

### Files Involved
- **Code source:** `ephemeral/va-extraction/gate-runner-core.js` (Read in 3.1)
- **Input:** HTML page via Playwright (already served)
- **Output:** `{output_dir}/_gate-results.json`
- **Artifact dependency:** Step 6 reads this file. If it does not exist, routing defaults GATES_FAILED = true.

### Timing
Steps 3 and 4 run IN PARALLEL. Gates and PA auditors never see each other's results. The orchestrator starts both simultaneously. But note: the orchestrator is an LLM, so "parallel" means "spawn PA auditors via Task tool (which runs in background), then immediately do gate runner steps 3.1-3.4 in the foreground."

---

## STEP 4: Spawn PA Auditors

### Precondition
Screenshots exist (Step 2 completed).

### Actions

```
4.1  DETERMINE auditor count:
     IF mode == "standard": auditor_count = 2
     IF mode == "high-stakes": auditor_count = 5

4.2  EXTRACT conviction brief excerpt:
     IF {output_dir}/_tc-brief.md exists:
       READ the file.
       EXTRACT Section 1 (WORLD-DESCRIPTION) and Section 4 (ARC) only.
       SET brief_excerpt = extracted text.
     ELSE:
       SET brief_excerpt = "(No conviction brief available.)"

4.3  EXTRACT PA questions:
     READ ~/.claude/skills/perceptual-auditing/SKILL.md
     EXTRACT the 20 experiential question texts (E-01 through E-20).

     ASSIGN questions to auditors:

     IF mode == "standard" (2 auditors):
       Auditor A: E-01 through E-10
       Auditor B: E-11 through E-20

     IF mode == "high-stakes" (5 auditors):
       Auditor A: E-01, E-05, E-11, E-17
       Auditor B: E-02, E-06, E-14, E-18
       Auditor C: E-03, E-07, E-12, E-19
       Auditor D: E-04, E-08, E-13, E-20
       Auditor E: E-09, E-10, E-15, E-16

4.4  COLLECT screenshot file paths:
     LIST all .png files in {output_dir}/_screenshots/1440/
     LIST all .png files in {output_dir}/_screenshots/768/
     SET screenshot_paths = all listed paths, absolute.

4.5  CONSTRUCT each auditor's prompt:
     FOR EACH auditor:
       [A] RECEIVING PRINCIPLE (5 lines, literal)
       [B] SECTION 0 PROTOCOL (cold look + scroll-through instructions, literal)
       [C] Screenshot file paths (listed -- auditor reads via Read tool)
       [D] Brief excerpt (Sections 1 + 4 only)
       [E] Assigned questions (literal text)
       [F] LANGUAGE CONSTRAINT (literal -- list of banned CSS terms + encouraged perceptual terms)
       [G] IF blocking_usability == true:
             "BLOCKING-USABILITY FINDING: {usability_notes}. This has been pre-identified.
              Address this in your Section 0 response."
       [H] Output instruction: "Write your responses to {output_dir}/_pa/auditor-{LETTER}.md"

4.6  SPAWN auditors in PARALLEL:
     FOR EACH auditor:
       Tool: Task (subagent_type: "code")
       Model: Opus
       Prompt: the constructed prompt from 4.5

4.7  WAIT for ALL auditors to complete.
```

### What Auditors Do NOT Receive (information isolation -- enforced by prompt construction)

| Excluded Input | Reason |
|---------------|--------|
| Gate results | Auditors would shift from experiencing to verifying |
| Builder's reflection | Auditor perception must be independent |
| Other auditor's report | Independence prevents anchoring |
| Full TC brief (Sections 2, 3, 5) | Calibration, opposition, content map would bias perception |
| PA-05 scale or scoring rubric | No numerical evaluation |
| Mechanism catalog, components.css | Would introduce design vocabulary |
| Content markdown | Auditors evaluate the page, not the content |

### Artifact Verification (MANDATORY after all auditors complete)

```
VERIFY 4.8:
  Tool: Glob
  Pattern: "{output_dir}/_pa/auditor-*.md"
  PRINT: "PA reports found: {count} files: {list of filenames}"
  SET auditor_reports = list of file paths returned.
  SET auditor_report_count = count.

  IF auditor_report_count == 0:
    PRINT "CRITICAL: No PA auditor reports produced. Defaulting creative_verdict = REFINE."
    SET creative_verdict = "REFINE"
    SET has_pa_data = false
    SKIP Steps 5 and 6.2. Proceed directly to Step 6.4 with creative_verdict = REFINE.
  ELSE:
    SET has_pa_data = true

VERIFY 4.9 (for each report found):
  Tool: Read
  File: each path in auditor_reports
  Read first 30 lines.
  PRINT for each: "Auditor {letter}: {line_count} lines. First line: {first_line}"
  CHECK: file contains "cold look" OR "first impression" OR "gut" (case-insensitive).
  IF NOT: PRINT "WARNING: Auditor {letter} may be missing Section 0."

  CONTAMINATION CHECK (exact string match, not interpretation):
  IF file contains "px" OR "rem" OR "font-size" OR "margin" OR "padding" OR "border-radius":
    PRINT "WARNING: Auditor {letter} report contains CSS vocabulary (contamination)."
```

**Why Read each report:** Reading forces the orchestrator to SEE the auditor output. This creates an audit trail in the conversation. It also prevents the orchestrator from proceeding to routing without having actually loaded the PA data into its context.

### Error Handling
- One auditor fails: proceed with remaining reports (Glob reveals which files exist).
- All auditors fail: Glob returns empty, creative_verdict defaults to REFINE, pipeline continues to Step 7.
- Contamination detected: warning only, not blocking.

### Files Involved
- **Read by orchestrator:** PA skill file (for question extraction), TC brief (for excerpt), screenshot directory listing
- **Passed to auditors:** Screenshot paths, brief excerpt, questions, language constraint
- **Expected outputs from auditors:** `{output_dir}/_pa/auditor-{A,B,...}.md`
- **Artifact dependency:** Step 5 (Weaver) and Step 6 (routing) depend on these files existing.

---

## STEP 5: Spawn Weaver (HIGH-STAKES MODE ONLY)

### Precondition
All auditors completed. mode == "high-stakes".

### Actions

```
5.1  IF mode == "standard":
       SKIP this step entirely. Proceed to Step 6.

5.2  CONSTRUCT Weaver prompt:
     [A] WEAVER RECEIVING PRINCIPLE (5 lines, literal)
     [B] Screenshot paths (1440px cold-look + scroll-through only)
     [C] All auditor reports:
         READ {output_dir}/_pa/auditor-A.md
         READ {output_dir}/_pa/auditor-B.md
         READ {output_dir}/_pa/auditor-C.md
         READ {output_dir}/_pa/auditor-D.md
         READ {output_dir}/_pa/auditor-E.md
     [D] Full conviction brief:
         READ {output_dir}/_tc-brief.md
     [E] Builder's reflection:
         READ {output_dir}/_reflection.md
     [F] Output instruction:
         "Write your synthesis to {output_dir}/_pa/weaver-synthesis.md.
          It MUST contain 3 sections:
          1. EXPERIENCE PORTRAIT (~15 lines)
          2. CREATIVE DIRECTION (~10 lines, structured as AMPLIFY / RELEASE / DEEPEN / THE GAP)
          3. VERDICT (one of: SHIP, REFINE, RETHINK) + one-sentence reason."

5.3  SPAWN Weaver:
     Tool: Task (subagent_type: "code")
     Model: Opus
     Prompt: the constructed prompt from 5.2

5.4  WAIT for Weaver to complete.
```

### What Weaver Does NOT Receive

| Excluded Input | Reason |
|---------------|--------|
| Gate results | Weaver's synthesis is creative, not mechanical |
| Components CSS, mechanism catalog | Weaver is not building |
| Raw content markdown | Weaver evaluates the page experience, not the content |

### Artifact Verification

```
VERIFY 5.5:
  Tool: Glob
  Pattern: "{output_dir}/_pa/weaver-synthesis.md"
  IF zero results:
    PRINT "Weaver produced no output. Falling back to standard-mode routing."
    SET weaver_available = false
  ELSE:
    SET weaver_available = true

VERIFY 5.6 (if weaver_available):
  Tool: Read
  File: {output_dir}/_pa/weaver-synthesis.md
  Read full file.
  PRINT: "Weaver synthesis: {line_count} lines. First 3 lines: {first_3_lines}"

  STRING SEARCH for verdict:
    IF file contains "RETHINK": PRINT "Weaver contains RETHINK signal."
    IF file contains "SHIP": PRINT "Weaver contains SHIP signal."
    IF file contains "REFINE": PRINT "Weaver contains REFINE signal."
    IF file contains NONE of these:
      PRINT "WARNING: No verdict keyword found in Weaver output."
      SET weaver_available = false
```

**Why Read the Weaver output:** The Read call puts the Weaver's text into the orchestrator's context, creating an audit trail. It also ensures the verdict extraction in Step 6.2 operates on data the orchestrator has actually seen.

### Error Handling
- Weaver times out: Glob returns empty, `weaver_available = false`, routing falls back to keyword scan.
- Weaver produces file without verdict keywords: same fallback.

### Files Involved
- **Read by orchestrator:** All auditor reports, TC brief, reflection (for embedding in Weaver prompt)
- **Expected output from Weaver:** `{output_dir}/_pa/weaver-synthesis.md`
- **Artifact dependency:** Step 6.2 reads this file for verdict extraction.

---

## STEP 6: Routing Decision

### Precondition
Gate results available (Step 3 complete). Auditor reports available (Step 4 complete). Weaver synthesis available if high-stakes (Step 5 complete).

### Actions (ZERO INTERPRETATION -- all binary checks)

```
STEP 6.1 — Read gate data:
  Tool: Read
  File: {output_dir}/_gate-results.json

  From the JSON "summary" block, extract EXACTLY these values:
    GATES_FAILED = summary.gates_failed (boolean)
    ESSENTIAL_FAIL_COUNT = summary.essential_fail (integer)

  PRINT: "Gate data: GATES_FAILED={GATES_FAILED}, ESSENTIAL_FAIL_COUNT={ESSENTIAL_FAIL_COUNT}"

  IF file does not exist or is unreadable:
    SET GATES_FAILED = true
    SET ESSENTIAL_FAIL_COUNT = -1  (unknown)
    PRINT: "Gate data unavailable. Assuming GATES_FAILED = true."

STEP 6.2 — Determine creative verdict (NO INTERPRETATION):

  IF mode == "high-stakes" AND has_pa_data == true:
    Tool: Glob
    Pattern: "{output_dir}/_pa/weaver-synthesis.md"
    IF exists:
      Tool: Read
      File: {output_dir}/_pa/weaver-synthesis.md

      STRING SEARCH (exact match, case-insensitive):
        IF file contains the word "RETHINK": SET creative_verdict = "RETHINK"
        ELSE IF file contains the word "SHIP" (not inside "RETHINK" or "RELATIONSHIP"):
          SET creative_verdict = "SHIP"
        ELSE: SET creative_verdict = "REFINE"

      PRINT: "Weaver verdict extracted: creative_verdict = {creative_verdict}"
    ELSE:
      PRINT: "Weaver file missing. Falling back to auditor keyword scan."
      (fall through to standard mode below)

  IF mode == "standard" OR (mode == "high-stakes" AND Weaver file missing):
    IF has_pa_data == false:
      SET creative_verdict = "REFINE"
      PRINT: "No PA data. Default: creative_verdict = REFINE"
    ELSE:
      The auditor reports were already Read in VERIFY 4.9.
      KEYWORD SCAN across all auditor report text (exact word match):

      RETHINK_WORDS = ["start over", "fundamentally wrong", "does not belong",
                       "completely different", "wrong direction"]
      REFINE_WORDS  = ["flat", "monotonous", "tired", "repetitive", "unvaried",
                       "disconnected", "surface-level", "needs more", "could deepen",
                       "feels similar", "same treatment"]
      SHIP_WORDS    = ["would ship", "ready", "complete", "polished", "finished",
                       "accomplished", "cohesive"]

      COUNT matches:
        rethink_hits = number of RETHINK_WORDS found across ALL reports
        refine_hits = number of REFINE_WORDS found across ALL reports
        ship_hits = number of SHIP_WORDS found across ALL reports

      ROUTING RULE (deterministic, no judgment):
        IF rethink_hits >= 2: creative_verdict = "RETHINK"
        ELSE IF refine_hits > ship_hits: creative_verdict = "REFINE"
        ELSE: creative_verdict = "SHIP"

      PRINT: "Keyword scan: rethink={rethink_hits}, refine={refine_hits}, ship={ship_hits}"
      PRINT: "creative_verdict = {creative_verdict}"

STEP 6.3 — Apply routing matrix (DETERMINISTIC):

  PRINT: "Routing inputs: creative_verdict={creative_verdict}, GATES_FAILED={GATES_FAILED}, blocking_usability={blocking_usability}"

  IF blocking_usability == true:
    PRINT: "BLOCKING-USABILITY detected. Usability patches applied first."
    (Patch usability CSS issues using Edit tool on output.html -- same as 6.4)

  ROUTING TABLE (if/else chain, no judgment):

    IF creative_verdict == "RETHINK":
      SET route = "RETHINK"
      → Execute RETHINK PROTOCOL (Step 6.5)

    ELSE IF creative_verdict == "SHIP" AND GATES_FAILED == false:
      SET route = "SHIP"
      → Proceed to Step 8

    ELSE IF creative_verdict == "SHIP" AND GATES_FAILED == true:
      SET route = "PATCH_THEN_SHIP"
      → Execute MECHANICAL PATCHING (Step 6.4), then Step 8

    ELSE IF creative_verdict == "REFINE" AND GATES_FAILED == false:
      SET route = "REFINE"
      → Proceed to Step 7

    ELSE IF creative_verdict == "REFINE" AND GATES_FAILED == true:
      SET route = "PATCH_THEN_REFINE"
      → Execute MECHANICAL PATCHING (Step 6.4), then Step 7

  PRINT: "ROUTE = {route}"

STEP 6.4 — MECHANICAL CSS PATCHING (if route contains "PATCH"):
  Read {output_dir}/_gate-results.json.
  FOR EACH gate in "gates" where pass == false:
    Read the "detail" field.
    The detail field contains the specific CSS property and current/expected values.
    USE Edit tool to modify {output_dir}/output.html:
      - Find the CSS property mentioned in "detail"
      - Change its value to satisfy the gate threshold

    Known mechanical fixes (the orchestrator CAN do these without creative judgment):
      GR-03 fail: find "max-width" in CSS, change to "960px"
      GR-05 fail: find the background hex mentioned in detail, adjust B channel down
      GR-11 fail: find the background hex pair mentioned, increase RGB delta
      GR-13 fail: find the margin/padding value mentioned, reduce to within 120px budget
      GR-15 fail: find the single margin/padding value, reduce to <= 96px
      GR-60 fail: find the color/background pair, increase contrast
      GR-67 fail: find footer font-size, increase to >= 11px

    Each fix = one Edit tool call.

  AFTER all patches:
    Re-run gate runner (repeat Step 3.2-3.3, write to _gate-results-patched.json).
    PRINT: "Post-patch gates: {summary}"

STEP 6.5 — RETHINK PROTOCOL (if route == "RETHINK"):
  Tool: Write
  File: {output_dir}/_rethink-log.md
  Content:
    "Failed metaphor: {first line of _tc-brief.md that contains 'world' or 'metaphor'}
     Verdict source: {creative_verdict source -- Weaver or keyword scan}
     Rethink count: {1 or 2}"

  IF this is the FIRST rethink (check: _rethink-log.md did not exist before this Write):
    Re-run from Step 1 with an ADDITIONAL prompt line:
      "Do NOT use the metaphor from the previous attempt. It did not serve the content."
  IF this is the SECOND rethink:
    PRINT: "Two metaphors attempted. Shipping the larger HTML file."
    Compare file sizes of current output.html and output-pre-refine.html (if exists).
    Ship the larger file.
    → Step 8.

STEP 6.6 — Log routing decision:
  Tool: Write
  File: {output_dir}/_routing-log.md
  Content:
    "ROUTING DECISION
     Date: {timestamp}
     creative_verdict: {creative_verdict}
     GATES_FAILED: {GATES_FAILED}
     ESSENTIAL_FAIL_COUNT: {ESSENTIAL_FAIL_COUNT}
     blocking_usability: {blocking_usability}
     ROUTE: {route}
     patches_applied: {count of Edit calls in 6.4, or 0}"

  PRINT: "Routing log written."
```

### Files Involved
- **Read:** `_gate-results.json`, auditor reports, Weaver synthesis (if exists), TC brief (for RETHINK)
- **May modify:** `output.html` (mechanical CSS patching)
- **Created:** `_routing-log.md`, `_rethink-log.md` (RETHINK only)

---

## STEP 7: Spawn Window 3 Agent (REFINE)

### Precondition
Routing decision is REFINE.

### Actions

```
7.1  CONSTRUCT REFINE builder prompt:
     [A] REFINE RECEIVING PRINCIPLE (5 lines, literal)
     [B] HTML artifact:
         READ {output_dir}/output.html
     [C] Auditor reports:
         IF mode == "standard":
           READ {output_dir}/_pa/auditor-A.md
           READ {output_dir}/_pa/auditor-B.md
         IF mode == "high-stakes":
           READ {output_dir}/_pa/weaver-synthesis.md ONLY
           (NOT individual auditor reports -- Weaver has synthesized)
     [D] Builder's reflection:
         READ {output_dir}/_reflection.md (if exists)
     [E] Conviction brief:
         READ {output_dir}/_tc-brief.md (if exists)
     [F] Raw content:
         READ {output_dir}/_content.md
     [G] Vocabulary files (same as Window 1):
         READ mechanism-catalog.md
         READ components.css
         READ prohibitions.md
         READ tokens.css
     [H] CONVENTIONS BRIEF (same ~40-line literal)
     [I] Output instruction:
         "You MUST write these 2 files:
          1. {output_dir}/output.html -- OVERWRITE the existing page with your refined version
          2. {output_dir}/_reflection-v2.md -- your 3-dimension reflection"

7.2  SPAWN agent:
     Tool: Task (subagent_type: "code")
     Model: Opus (mandatory -- DIFFERENT instance from Window 1)
     Prompt: the constructed prompt from 7.1

7.3  WAIT for agent to complete.
```

### What REFINE Builder Does NOT Receive (information isolation)

| Excluded Input | Reason |
|---------------|--------|
| Gate results | Mechanical compliance is not the REFINE builder's concern |
| Individual auditor reports (high-stakes) | Weaver has synthesized; 5 reports is too much volume |
| PA-05 scores or any numerical rating | No numbers, no scores -- creative territory only |
| Gate failure fix lists | REFINE is composing deeper, not fixing |

### Pre-REFINE Safety (MANDATORY before spawning)

```
STEP 7.0:
  Tool: Bash
  Command: cp {output_dir}/output.html {output_dir}/output-pre-refine.html
  PRINT: "Pre-REFINE backup created."

VERIFY 7.0:
  Tool: Glob
  Pattern: "{output_dir}/output-pre-refine.html"
  IF zero results: PRINT "WARNING: Backup failed. Proceeding without safety net."
```

### Artifact Verification (MANDATORY after REFINE agent completes)

```
VERIFY 7.4:
  Tool: Read
  File: {output_dir}/output.html
  Read first 20 lines.
  PRINT: "Post-REFINE HTML: {line_count} lines. First line: {first_line}"

  CHECK: line_count > 10 AND file contains "<html"
  IF NOT:
    PRINT "REFINE produced malformed HTML. Restoring backup."
    Tool: Bash
    Command: cp {output_dir}/output-pre-refine.html {output_dir}/output.html
    → Proceed to Step 8 (ship pre-REFINE version).

VERIFY 7.5:
  Tool: Glob
  Pattern: "{output_dir}/_reflection-v2.md"
  IF zero results: PRINT "WARNING: REFINE builder did not produce reflection."
  IF exists:
    Tool: Read
    File: {output_dir}/_reflection-v2.md
    Read first 10 lines.
    PRINT: "REFINE reflection: {line_count} lines."
```

**Why Read the REFINE HTML:** Confirms the REFINE builder actually produced a complete page. If the builder timed out mid-write, the HTML may be truncated (missing `</html>`). The Read call makes the orchestrator SEE the output, and the line-count check catches truncation.

### Error Handling
- Agent times out: Glob/Read reveals incomplete output. Restore backup.
- Agent produces identical HTML: not a problem -- the builder decided nothing needed changing. Ship it.
- Agent crashes mid-write: Read reveals truncated HTML (< 10 lines or no `<html>`). Restore backup automatically.

### Files Involved
- **Read by orchestrator:** 8+ files for prompt construction
- **Expected outputs from agent:** `output.html` (overwritten), `_reflection-v2.md`
- **Safety artifact:** `output-pre-refine.html` (backup)

---

## STEP 8: Post-REFINE Gate Check and Ship

### Precondition
REFINE completed (Step 7), or routing was SHIP (Step 6).

### Actions (if coming from REFINE)

```
8.1  TAKE new screenshots (same protocol as Step 2):
     Playwright navigate to http://localhost:8888/output.html
     (Server is still running from Step 2.)
     Run captureScreenshots again. Overwrite existing screenshots.

8.2  RUN essential gates on refined artifact (same protocol as Step 3).
     WRITE results to {output_dir}/_gate-results-post-refine.json.

8.3  IF all essential gates pass:
       → SHIP.

8.4  IF MECHANICAL failures only:
       PATCH CSS (same as Step 6.5).
       RE-RUN failed gates.
       → SHIP (regardless of re-run result -- log any remaining failures).

8.5  IF STRUCTURAL failures:
       LOG for user. SHIP with advisory note listing structural gate failures.
```

### Final Ship (artifact chain verification + user report)

```
STEP 8.6 — Kill HTTP server:
  Tool: Bash
  Command: kill {server_pid} 2>/dev/null; echo "Server stopped"
  (If PID unknown, run: lsof -ti:8888 | xargs kill 2>/dev/null)

STEP 8.7 — Final artifact chain verification:
  Tool: Glob
  Pattern: "{output_dir}/*"
  PRINT: "Final output directory contents: {list all files}"

  REQUIRED files (check each exists in Glob output):
    output.html        -- the page
    _content.md        -- source content
    _gate-results.json -- gate data

  EXPECTED files (warn if missing):
    _tc-brief.md       -- conviction brief
    _reflection.md     -- builder reflection
    _routing-log.md    -- routing decision
    _pa/               -- PA directory with auditor reports

STEP 8.8 — Ship report:
  Read {output_dir}/_gate-results.json (already in context from Step 6.1, but re-read for final numbers).
  Read {output_dir}/_routing-log.md.

  PRINT to user (this is the final output -- the user sees this):
    "---
     BUILD COMPLETE: {output_dir}/output.html

     GATES: {summary.essential_pass}/{summary.essential_pass + summary.essential_fail} essential passed
            {summary.advisory_fail} advisory flags
     ROUTE: {route}
     [IF route contains PATCH:] Mechanical patches applied: {count}
     [IF route contains REFINE:] REFINE pass completed by different Opus builder.

     PA SUMMARY:
     [For each auditor report: print first 2 lines (the cold-look reaction)]

     [IF weaver_available:] WEAVER: {first sentence of weaver synthesis}
     ---"
```

### Files Involved
- **Verified:** All output directory contents via Glob
- **Created (if post-REFINE):** `_gate-results-post-refine.json`, updated screenshots
- **No new files created at SHIP -- this step only verifies and reports**

---

## STEP 9: Second REFINE Cycle (USER ESCALATION ONLY)

This step is NOT automatic. It runs only if the user explicitly requests it after seeing the Step 8 report.

### Trigger
User says "refine again", "another pass", "it needs more work", or similar.

### Actions

```
9.1  RUN abbreviated PA:
     2 auditors (regardless of original mode), 10 questions each.
     Same protocol as Step 4 but using NEW screenshots from Step 8.1.

9.2  CONSTRUCT second REFINE prompt:
     Same as Step 7, except:
     [C] Include BOTH sets of auditor reports (original + abbreviated)
     [D] Include BOTH reflections (_reflection.md + _reflection-v2.md)
     Output instruction: overwrite output.html, write _reflection-v3.md.

9.3  SPAWN second REFINE builder (DIFFERENT Opus instance from both previous builders).

9.4  Post-REFINE gate check (same as Step 8).

9.5  SHIP (no third cycle available -- maximum 2 REFINE).
```

---

## COMPLETE ORCHESTRATOR FLOW DIAGRAM

```
User: /build-page {path}
  |
  v
STEP 0: Parse input, create output dir, ask standard/high-stakes
  |
  v
STEP 1: Spawn Window 1 (DERIVE+BUILD) -- single Opus agent
  |  outputs: output.html, _tc-brief.md, _reflection.md
  |  validate: HTML exists (blocking), brief/reflection exist (non-blocking)
  |
  v
STEP 2: Serve HTML, capture screenshots, experiential scan
  |  outputs: _screenshots/**/*.png, blocking_usability flag
  |
  +------PARALLEL------+
  |                     |
  v                     v
STEP 3: Gate runner   STEP 4: Spawn PA auditors (2 or 5)
  |                     |
  | _gate-results.json  | _pa/auditor-*.md
  |                     |
  +-----MERGE----------+
  |                     |
  |   [high-stakes only]|
  |                     v
  |                   STEP 5: Spawn Weaver
  |                     |
  |                     | _pa/weaver-synthesis.md
  |                     |
  +-----MERGE----------+
  |
  v
STEP 6: Routing decision
  |
  +-- SHIP -----------------> STEP 8 (ship)
  |
  +-- PATCH + SHIP ----------> STEP 6.5 (patch) --> STEP 8 (ship)
  |
  +-- REFINE ---------------> STEP 7 (refine) --> STEP 8 (post-refine gates + ship)
  |
  +-- PATCH + REFINE --------> STEP 6.5 (patch) --> STEP 7 --> STEP 8
  |
  +-- RETHINK (1st) ---------> STEP 6.6 --> STEP 1 (new metaphor)
  |
  +-- RETHINK (2nd) ---------> SHIP better artifact
  |
  v
STEP 8: Ship -- report to user, kill server
  |
  [User requests more work?]
  |
  v
STEP 9: Second REFINE (user escalation only)
```

---

## WHAT THE ORCHESTRATOR DOES NOT DO

| Action | Why Not |
|--------|---------|
| Read conviction brief for creative insight | The brief is a creative document for the builder, not routing data for the orchestrator |
| Evaluate whether the metaphor is good | Creative judgment is the PA's domain, not the orchestrator's |
| Modify agent outputs (rewrite reflection, edit brief) | Agent outputs are sovereign; the orchestrator only validates EXISTENCE, not content |
| Add compliance checks to auditor prompts | Auditors receive experiential questions, not compliance checklists |
| Compare the page against explorations or case studies | The orchestrator does not load or reference design system explorations |
| Compute a combined quality score from gates + PA | Routing is matrix-based (creative_verdict x gate_status), not arithmetic |
| Decide whether the page is beautiful | Beauty is not in the orchestrator's domain |
| Choose which mechanisms to use | Mechanism selection is the builder's creative decision |
| Override the Weaver's verdict | The Weaver's creative judgment is authoritative for the creative axis |
| Skip the PA because gates passed | Gates and PA evaluate orthogonal dimensions; both always run |

---

## COMPLETE FILE MANIFEST (per run)

### Files Created by Orchestrator

| File | Step | Purpose |
|------|------|---------|
| `{output_dir}/` | 0 | Output directory |
| `{output_dir}/_content.md` | 0 | Copy of raw content |
| `{output_dir}/_screenshots/**/*.png` | 2 | Screenshot captures |
| `{output_dir}/_gate-results.json` | 3 | Gate pass/fail data |
| `{output_dir}/_routing-log.md` | 6 | Routing decision record |
| `{output_dir}/_rethink-log.md` | 6.6 | Failed metaphor record (RETHINK only) |
| `{output_dir}/output-pre-refine.html` | 7.0 | Backup before REFINE |
| `{output_dir}/_gate-results-post-refine.json` | 8 | Post-REFINE gate data |

### Files Created by Agents

| File | Agent | Step |
|------|-------|------|
| `{output_dir}/output.html` | Window 1 builder (overwritten by REFINE) | 1 / 7 |
| `{output_dir}/_tc-brief.md` | Window 1 builder | 1 |
| `{output_dir}/_reflection.md` | Window 1 builder | 1 |
| `{output_dir}/_reflection-v2.md` | REFINE builder | 7 |
| `{output_dir}/_pa/auditor-A.md` | PA Auditor A | 4 |
| `{output_dir}/_pa/auditor-B.md` | PA Auditor B | 4 |
| `{output_dir}/_pa/auditor-C.md` through `E.md` | PA Auditors C-E (high-stakes) | 4 |
| `{output_dir}/_pa/weaver-synthesis.md` | Weaver (high-stakes) | 5 |

### Reference Files Read by Orchestrator (not copied, not modified)

| File | Step | Purpose |
|------|------|---------|
| `~/.claude/skills/tension-composition/SKILL.md` | 1 | TC pipeline for builder prompt |
| `design-system/compositional-core/identity/prohibitions.md` | 1, 7 | Identity constraints |
| `design-system/compositional-core/vocabulary/tokens.css` | 1, 7 | Token vocabulary |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | 1, 7 | Mechanism vocabulary |
| `design-system/compositional-core/components/components.css` | 1, 7 | Component library |
| `ephemeral/va-extraction/gate-runner-core.js` | 2, 3, 8 | Gate runner code |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | 4 | PA question extraction |

---

## ARTIFACT CHAIN: HOW EACH STEP PROVES THE PREVIOUS STEP HAPPENED

The orchestrator is an LLM. It can skip steps. The artifact chain makes skipping VISIBLE.

```
Step 0 produces: {output_dir}/_content.md
  └─ Step 1 READS _content.md to construct builder prompt.
     If _content.md does not exist, Step 1's Read call FAILS VISIBLY.

Step 1 produces: output.html, _tc-brief.md, _reflection.md
  └─ Step 1 VERIFY uses Glob("output.html").
     If Glob returns empty, Step 1 STOPS THE PIPELINE.
  └─ Step 2 SERVES output.html via HTTP.
     If output.html does not exist, http-server returns 404.

Step 2 produces: _screenshots/**/*.png
  └─ Step 2 VERIFY uses Glob("_screenshots/1440/*.png").
     If Glob returns empty, Step 2 STOPS (no screenshots for PA).
  └─ Step 4 PASSES screenshot_paths to auditors.
     If screenshot_paths is empty, auditor prompts contain no images.

Step 3 produces: _gate-results.json
  └─ Step 3 VERIFY uses Read("_gate-results.json").
     If Read fails, GATES_FAILED defaults to true.
  └─ Step 6 READS _gate-results.json for routing.
     If file does not exist, routing assumes GATES_FAILED = true.

Step 4 produces: _pa/auditor-*.md
  └─ Step 4 VERIFY uses Glob("_pa/auditor-*.md").
     If Glob returns empty, creative_verdict defaults to REFINE.
  └─ Step 5 (Weaver) READS all auditor files.
  └─ Step 6 READS auditor files for keyword scan (standard mode).

Step 5 produces: _pa/weaver-synthesis.md (high-stakes only)
  └─ Step 5 VERIFY uses Glob + Read.
     If missing, routing falls back to standard-mode keyword scan.
  └─ Step 6 READS weaver file for verdict extraction.

Step 6 produces: _routing-log.md
  └─ Step 8 READS _routing-log.md for ship report.
     If missing, ship report has no routing summary.

Step 7 produces: output.html (overwritten), _reflection-v2.md
  └─ Step 7 VERIFY uses Read("output.html").
     If malformed, restores from output-pre-refine.html.
  └─ Step 8 runs gates on the new output.html.
```

**The chain property:** Every file produced by Step N is consumed by Step N+1 (or a later step) via an explicit Read or Glob call. If any step is skipped, the next step's verification FAILS because its input is missing. The orchestrator cannot silently skip a step without the conversation showing a failed verification.

---

## TOOL CALL MANIFEST: EXACT TOOL CALLS PER STEP

For maximum compliance, here is every tool call the orchestrator makes, in order:

| Step | Tool | Target | Purpose |
|------|------|--------|---------|
| 0.2 | Read | `{content_path}` | Verify content exists |
| 0.4 | Bash | `mkdir -p {output_dir}/...` | Create dirs |
| 0.5 | Bash | `cp ...` | Copy content |
| 1.1 | Read | TC skill, prohibitions, tokens, mechanism-catalog, components.css | Build Window 1 prompt |
| 1.2 | Task | (spawn Opus agent) | Window 1: DERIVE+BUILD |
| 1.4 | Glob | `{output_dir}/output.html` | Verify HTML exists |
| 1.5 | Read | `{output_dir}/output.html` (first 50 lines) | Verify HTML valid |
| 1.6 | Glob | `{output_dir}/_tc-brief.md` | Verify brief exists |
| 1.7 | Glob | `{output_dir}/_reflection.md` | Verify reflection exists |
| 2.1 | Bash | `npx http-server ...` | Start server |
| 2.2 | browser_navigate | `http://localhost:8888/output.html` | Load page |
| 2.3 | browser_run_code | `captureScreenshots(...)` | Take screenshots |
| 2.4 | browser_evaluate | `checkScreenshotQuality(...)` | Validate screenshots |
| 2.6 | browser_snapshot + manual scroll | (experiential scan) | Check usability |
| 2.7 | Glob | `_screenshots/1440/*.png` | Verify 1440 screenshots |
| 2.8 | Glob | `_screenshots/768/*.png` | Verify 768 screenshots |
| 3.0 | Read | `_tc-brief.md` | Brief verification (BV gates) |
| 3.1 | Read | `gate-runner-core.js` | Load gate code |
| 3.2 | browser_evaluate | (atomic gate runner function) | Run ALL gates |
| 3.3 | Write | `_gate-results.json` | Save gate results |
| 3.4 | Read | `_gate-results.json` (first 20 lines) | Verify results written |
| 4.3 | Read | PA skill file | Extract questions |
| 4.6 | Task (x2 or x5) | (spawn auditor agents) | PA auditors |
| 4.8 | Glob | `_pa/auditor-*.md` | Verify reports exist |
| 4.9 | Read (x2 or x5) | each auditor report | Verify + audit trail |
| 5.2 | Read | auditor reports + brief + reflection | Build Weaver prompt |
| 5.3 | Task | (spawn Weaver agent) | Weaver synthesis |
| 5.5 | Glob | `_pa/weaver-synthesis.md` | Verify Weaver output |
| 5.6 | Read | `_pa/weaver-synthesis.md` | Verify + extract verdict |
| 6.1 | Read | `_gate-results.json` | Get gate summary |
| 6.6 | Write | `_routing-log.md` | Log routing decision |
| 7.0 | Bash | `cp output.html output-pre-refine.html` | Backup |
| 7.0v | Glob | `output-pre-refine.html` | Verify backup |
| 7.1 | Read | (8+ files) | Build REFINE prompt |
| 7.2 | Task | (spawn REFINE agent) | REFINE |
| 7.4 | Read | `output.html` | Verify REFINE output |
| 7.5 | Glob | `_reflection-v2.md` | Verify reflection |
| 8.1 | browser_run_code | `captureScreenshots(...)` | New screenshots |
| 8.2 | browser_evaluate | (atomic gate runner) | Post-REFINE gates |
| 8.3 | Write | `_gate-results-post-refine.json` | Save results |
| 8.6 | Bash | `kill {pid}` | Stop server |
| 8.7 | Glob | `{output_dir}/*` | Final file inventory |
| 8.8 | Read | `_gate-results.json`, `_routing-log.md` | Ship report data |

**Total tool calls (standard REFINE path):** ~40-45 tool calls. Each produces visible output. Each depends on a previous call's artifact. The orchestrator cannot abbreviate this sequence without the conversation showing gaps.

---

## VALIDATION SUMMARY

Every orchestrator validation is STRUCTURAL, not CREATIVE:

| Type | Examples | NOT This |
|------|----------|----------|
| File existence | "Does output.html exist?" | "Is the HTML well-designed?" |
| File size | "> 500 bytes" | "Does it have enough content?" |
| String presence | "Contains 'SHIP' or 'REFINE' or 'RETHINK'" | "Is the verdict well-reasoned?" |
| Count | "At least 3 PNG files" | "Are the screenshots pretty?" |
| Binary match | "No `<link rel='stylesheet'`" | "Is the CSS well-organized?" |
| JSON validity | "Parses as valid JSON" | "Are the gate thresholds appropriate?" |

The orchestrator is a FILE SYSTEM TRAFFIC CONTROLLER. It moves files between agents, validates their existence, and routes based on binary signals. It has no aesthetic judgment and no opinion about creative quality.

---

**END OF ORCHESTRATOR PLUMBING SPECIFICATION**
