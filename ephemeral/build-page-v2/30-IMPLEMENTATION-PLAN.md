# /build-page v2 — Complete Implementation Plan

**Synthesizer:** plan-synthesizer (Opus)
**Date:** 2026-02-28
**Status:** AUTHORITATIVE
**Source documents:** 01-current-state-map, 02-gate-audit, 03-skill-architecture, 04-reference-file-map, 05-tc-simplification-design, 07-first-principles-design, 10-orchestrator-plumbing, 11-window1-design, 12-window2-design, 13-window3-design, tc-skill-update/10-holistic-process, tc-skill-update/15-process-adversarial

---

## USER DECISIONS (NON-NEGOTIABLE — OVERRIDE ALL DOCUMENTS)

These decisions were made by the user and take precedence over any document recommendation:

1. **Always 5 PA auditors.** Not 2 standard / 5 high-stakes. Every run gets 5 auditors.
2. **TC skill stays at 841 lines.** The rewrite at `ephemeral/tc-skill-update/SKILL-REWRITE.md` is the canonical TC. Do NOT simplify to ~300 lines.
3. **PA skill already rewritten and LIVE** at `~/.claude/skills/perceptual-auditing/SKILL.md` (517 lines). No changes needed.
4. **Gates reduced from 57 to ~28.** Per 02-gate-audit.md.
5. **TC + BUILD combined in one window.** Test combined first; separate only if weak.
6. **Call it a "process" not "pipeline."**
7. **Maximum programmatic enforcement** within Claude Code constraints.
8. **Plumbing + freedom architecture:** tight programmatic plumbing, full creative freedom inside each window.

### RECONCILIATION IMPACT

- 03-skill-architecture.md proposes 2 auditors (standard) / 5 (high-stakes). **OVERRIDDEN: always 5.**
- 03-skill-architecture.md proposes Weaver for high-stakes only. **DECISION NEEDED: with always-5-auditors, always Weaver? This plan assumes YES — 5 auditors always need synthesis.**
- 05-tc-simplification-design.md targets ~300 lines. **OVERRIDDEN: keep 841-line SKILL-REWRITE.md.**
- 12-window2-design.md proposes 2 standard / 5 high-stakes. **OVERRIDDEN: always 5.**
- 12-window2-design.md proposes "ask standard/high-stakes." **OVERRIDDEN: no prompt needed — always 5 + Weaver.**

---

## SECTION 1: PLUMBING SPECIFICATION

Every programmatic step the orchestrator takes, in exact order. The orchestrator is an LLM following instructions — it WILL skip steps unless every step is a single unambiguous tool call with a verifiable artifact.

### Four Enforcement Patterns (from 10-orchestrator-plumbing.md)

1. **SINGLE ATOMIC OPERATIONS.** Each step = ONE tool call → ONE verifiable output.
2. **VERIFIABLE ARTIFACT CHAIN.** Every step produces a file. The NEXT step reads that file. Skip = visible break.
3. **PATH OF LEAST RESISTANCE.** Following is easier than skipping. Exact tool calls spelled out.
4. **ZERO INTERPRETABLE INSTRUCTIONS** for programmatic steps. No "evaluate." No "assess." Only: "Read X. If contains Y, set Z = true."

### STEP 0: Parse Input and Create Output Directory

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 0.1 | Parse command argument for `{content_path}`. If missing: ask user. | `content_path` variable | User cancels → stop |
| 0.2 | `Read({content_path}, limit=10)` | Verification that file exists + has content | File not found → `PRINT "ERROR: File not found." STOP.` |
| 0.3 | Compute `slug` (filename, lowercase, hyphens) and `date` (YYYY-MM-DD). `output_dir = ephemeral/builds/{slug}-{date}/` | `output_dir` variable | None |
| 0.4 | `Bash("mkdir -p {output_dir}/_screenshots/1440 {output_dir}/_screenshots/1024 {output_dir}/_screenshots/768 {output_dir}/_pa")` | Directory tree | Permission denied → stop |
| 0.5 | `Bash("cp {content_path} {output_dir}/_content.md")` | `_content.md` in output dir | Copy fails → stop |
| 0.6 | `Glob("{output_dir}/_content.md")` | Proof file was copied | Zero results → `PRINT "ERROR: Copy failed." STOP.` |

**NO mode prompt.** Always 5 auditors + Weaver.

### STEP 1: Spawn Window 1 Agent (DERIVE + BUILD)

**Construct the agent prompt by concatenating these sections IN ORDER:**

| Section | Source | Lines | Reading Order Position |
|---------|--------|-------|----------------------|
| [A] Receiving Principle | Literal 5-line text embedded in prompt | 5 | First (creative activation) |
| [B] TC Skill | `Read(~/.claude/skills/tension-composition/SKILL.md)` | 841 | Second (creative process guide) |
| [C] Raw content | `Read({output_dir}/_content.md)` | varies | Third (the material) |
| [CHECKPOINT] | Literal text: "STOP. Complete your TC derivation and write brief before reading below." | 10 | Phase gate |
| [D] Identity: prohibitions | `Read(design-system/compositional-core/identity/prohibitions.md)` | 419 | After brief written |
| [E] Identity: tokens | `Read(design-system/compositional-core/vocabulary/tokens.css)` | 183 | After brief written |
| [F] Mechanism catalog | `Read(design-system/compositional-core/grammar/mechanism-catalog.md)` | 751 | Tools for building |
| [G] Components CSS | `Read(design-system/compositional-core/components/components.css)` | 944 | Component library |
| [H] Conventions Brief | Literal ~40-line text embedded in prompt | 40 | Last (mechanical constraints) |

**The prompt ALSO includes output instructions:**

```
You MUST write these 3 files:
  1. {output_dir}/output.html — complete self-contained HTML page (all CSS embedded, no external deps)
  2. {output_dir}/_tc-brief.md — conviction brief, ~50 lines, 5 sections:
     WORLD-DESCRIPTION (~10 lines), CALIBRATION (~5 lines), OPPOSITION (~5 lines),
     ARC (~10 lines), CONTENT MAP (~15 lines)
  3. {output_dir}/_reflection.md — 3-dimension reflection, ~15-20 sentences:
     CONVICTION, ALTERNATIVES, UNRESOLVED
```

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 1.1 | 6x `Read()` calls (files B, C, D, E, F, G listed above) | Prompt content in orchestrator context | Any Read fails → stop |
| 1.2 | `Task(subagent_type="code", model=Opus, prompt=constructed_prompt)` | Agent execution | Agent crash → stop |
| 1.3 | Wait for completion | — | Timeout → stop |

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
| 2.1 | `Bash("npx http-server {output_dir} -p 8888 --cors -c-1 &")` | HTTP server running | Port busy → try 8889, 8890. After 3: stop. |
| 2.2 | `browser_navigate("http://localhost:8888/output.html")` | Page loaded in Playwright | Navigation fails → `browser_install`, retry once |
| 2.3 | `browser_run_code(captureScreenshots)` using function from `gate-runner-core.js` Section 8 | Screenshots at 3 viewports (1440, 1024, 768): cold-look + scroll-through | Function not found → stop |
| 2.4 | `browser_evaluate(checkScreenshotQuality)` (GR-62) | Screenshot quality validated | FAIL → re-capture once, re-validate. Still FAIL → warn, continue |
| 2.5 | Orchestrator scrolls page in Playwright, checks for illegibility. `SET blocking_usability = true/false` | Usability flag | — |

**Artifact Verification:**

| Verify | Tool Call | Check | On Failure |
|--------|-----------|-------|------------|
| 2.6 | `Glob("{output_dir}/_screenshots/1440/*.png")` | `count > 0` | CRITICAL: no screenshots for auditors |
| 2.7 | `Glob("{output_dir}/_screenshots/768/*.png")` | `count > 0` | WARN: no responsive screenshots |
| 2.8 | Sum counts from 2.6 + 2.7. If `== 0`: `STOP.` | At least 1 screenshot | Cannot deploy auditors with zero images |

### STEP 3: Run Gate Runner (~28 essential gates)

**Design: SINGLE ATOMIC GATE RUNNER.** One `browser_evaluate` call runs ALL gates and returns ONE JSON object. No selective execution.

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 3.0 | IF `has_brief`: `Read({output_dir}/_tc-brief.md)`. String-search for "WORLD", "CALIBRATION", "OPPOSITION", "ARC" (BV-01 through BV-04). Print pass/fail per gate. | BV gate results (text) | Brief missing → skip BV gates |
| 3.1 | `Read(ephemeral/va-extraction/gate-runner-core.js)` | JS code in context | File missing → GATES_FAILED=true |
| 3.2 | `browser_evaluate(atomicGateFunction)` — runs ALL 28 gates, returns JSON string | JSON string with per-gate results + summary | Throws → GATES_FAILED=true, write error JSON |
| 3.3 | `Write({output_dir}/_gate-results.json, jsonString)` | Gate results file | Write fails → GATES_FAILED=true |

**Artifact Verification:**

| Verify | Tool Call | Check | On Failure |
|--------|-----------|-------|------------|
| 3.4 | `Read({output_dir}/_gate-results.json, limit=20)` | Starts with `{`, contains `"summary"` | GATES_FAILED=true (conservative default) |

**Timing:** Steps 3 and 4 run IN PARALLEL. The orchestrator spawns PA auditors (Step 4) first (they run in background via Task tool), then executes the gate runner (Step 3) in the foreground.

### STEP 4: Spawn PA Auditors (always 5)

**Question assignment (5 auditors, 4 questions each, tier-spanning):**

| Auditor | Questions |
|---------|-----------|
| A | E-01, E-05, E-11, E-17 |
| B | E-02, E-06, E-14, E-18 |
| C | E-03, E-07, E-12, E-19 |
| D | E-04, E-08, E-13, E-20 |
| E | E-09, E-10, E-15, E-16 |

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 4.1 | `Read(~/.claude/skills/perceptual-auditing/SKILL.md)` | PA question text extracted | File missing → cannot deploy auditors |
| 4.2 | IF `has_brief`: `Read({output_dir}/_tc-brief.md)`. Extract Sections 1 (WORLD-DESCRIPTION) + 4 (ARC) only. | Brief excerpt for auditor prompt | Brief missing → auditors get no brief context |
| 4.3 | `Glob("{output_dir}/_screenshots/1440/*.png")` + `Glob("{output_dir}/_screenshots/768/*.png")` | `screenshot_paths` list | Already verified in Step 2 |
| 4.4 | Construct 5 auditor prompts, each containing: [A] Receiving principle (5 lines), [B] Section 0 protocol (~20 lines), [C] Screenshot paths, [D] Brief excerpt (sections 1+4 only), [E] 4 assigned questions, [F] Language constraint, [G] BLOCKING-USABILITY note if flagged, [H] Output path | 5 prompt strings | — |
| 4.5 | 5x `Task(subagent_type="code", model=Opus, prompt=auditor_prompt)` — all 5 launched in parallel | 5 agent executions | Individual failures caught at verification |

**What Auditors Do NOT Receive:** gate results, builder's reflection, other auditor reports, full TC brief (only sections 1+4), mechanism catalog, components CSS, content markdown, any numerical targets.

**Artifact Verification:**

| Verify | Tool Call | Check | On Failure |
|--------|-----------|-------|------------|
| 4.6 | `Glob("{output_dir}/_pa/auditor-*.md")` | `count == 5` | If 0: `SET creative_verdict = "REFINE"`, `SET has_pa_data = false`, skip Steps 5+6.2 |
| 4.7 | 5x `Read({output_dir}/_pa/auditor-{A..E}.md, limit=30)` | Contains "cold look" or "gut" or "first impression" (Section 0 check) | WARN per missing Section 0 |
| 4.8 | For each report: string-search for "px", "rem", "font-size", "margin", "padding", "border-radius" | No CSS vocabulary contamination | WARN only (not blocking) |

### STEP 5: Spawn Weaver (always, with 5 auditors)

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 5.1 | Construct Weaver prompt: [A] Receiving principle (5 lines), [B] 1440px screenshot paths, [C] `Read` all 5 auditor reports, [D] `Read` full conviction brief, [E] `Read` builder's reflection, [F] Output instructions | Prompt string | — |
| 5.2 | `Task(subagent_type="code", model=Opus, prompt=weaver_prompt)` | Weaver execution | Timeout → fall back to keyword scan |
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
| 6.2 | **IF `weaver_available`:** String-search weaver file: if contains "RETHINK" → `RETHINK`; else if contains "SHIP" → `SHIP`; else → `REFINE`. **IF NOT `weaver_available`:** Keyword scan ALL auditor reports for RETHINK_WORDS / REFINE_WORDS / SHIP_WORDS (exact lists in 10-orchestrator-plumbing.md Step 6.2). Route by highest hit count. | `creative_verdict` |
| 6.3 | **Routing matrix** (deterministic if/else): | `route` |

```
IF blocking_usability: patch usability CSS first.

IF creative_verdict == "RETHINK": route = "RETHINK" → Step 6.5
IF creative_verdict == "SHIP" AND GATES_FAILED == false: route = "SHIP" → Step 8
IF creative_verdict == "SHIP" AND GATES_FAILED == true: route = "PATCH_THEN_SHIP" → Step 6.4 → Step 8
IF creative_verdict == "REFINE" AND GATES_FAILED == false: route = "REFINE" → Step 7
IF creative_verdict == "REFINE" AND GATES_FAILED == true: route = "PATCH_THEN_REFINE" → Step 6.4 → Step 7
```

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 6.4 | **MECHANICAL PATCHING** (if route contains "PATCH"): For each failed gate in `_gate-results.json`, read `detail` field. Use `Edit` tool on `output.html` to fix specific CSS values. Known fixes: GR-03→max-width:960px, GR-05→adjust B channel, GR-11→increase RGB delta, GR-13/15→reduce margin/padding, GR-60→increase contrast, GR-67→increase footer font-size. After all patches: re-run gate runner (repeat 3.2-3.3), write to `_gate-results-patched.json`. | Patched HTML + updated gate results | — |
| 6.5 | **RETHINK PROTOCOL:** `Write({output_dir}/_rethink-log.md, ...)`. If first RETHINK → re-run from Step 1 with additional exclusion line. If second RETHINK → ship the better artifact (larger HTML). | `_rethink-log.md` | — |
| 6.6 | `Write({output_dir}/_routing-log.md, ...)` containing: date, creative_verdict, GATES_FAILED, ESSENTIAL_FAIL_COUNT, blocking_usability, route, patches_applied count. | `_routing-log.md` | — |

### STEP 7: Spawn Window 3 Agent (REFINE)

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 7.0 | `Bash("cp {output_dir}/output.html {output_dir}/output-pre-refine.html")` | Pre-REFINE backup | Backup fails → warn, continue |
| 7.0v | `Glob("{output_dir}/output-pre-refine.html")` | Verify backup exists | — |

**Construct REFINE prompt by concatenating IN ORDER:**

| Section | Source | Lines |
|---------|--------|-------|
| [A] Receiving Principle | Literal 5 lines: "Scroll first. Write 2 sentences. Read auditors. Read reflection. Read brief. ONE thing." | 5 |
| [B] HTML artifact | `Read({output_dir}/output.html)` | varies |
| [C] Weaver synthesis | `Read({output_dir}/_pa/weaver-synthesis.md)` | ~60 |
| [D] Builder's reflection | `Read({output_dir}/_reflection.md)` | ~20 |
| [E] Conviction brief | `Read({output_dir}/_tc-brief.md)` | ~50 |
| [F] Raw content | `Read({output_dir}/_content.md)` | varies |
| [G] Mechanism catalog | `Read(mechanism-catalog.md)` | 751 |
| [H] Components CSS | `Read(components.css)` | 944 |
| [I] Prohibitions | `Read(prohibitions.md)` | 419 |
| [J] Tokens | `Read(tokens.css)` | 183 |
| [K] Conventions brief | Literal ~40 lines | 40 |

**Output instructions:** overwrite `output.html`, write `_reflection-v2.md`.

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 7.1 | 8x `Read()` calls for prompt construction | Prompt content | — |
| 7.2 | `Task(subagent_type="code", model=Opus, prompt=refine_prompt)` | Agent execution | — |
| 7.3 | Wait for completion | — | Timeout → restore backup |

**What REFINE Builder Does NOT Receive:** gate results, individual auditor reports (gets Weaver synthesis only), PA-05 scores, gate failure fix lists.

**What REFINE Builder MAY Do:** restructure HTML, rewrite CSS, change layouts, introduce new mechanisms, extend metaphor expression. **May NOT:** replace the metaphor, violate world-description, ignore opposition map.

**Artifact Verification:**

| Verify | Tool Call | Check | On Failure |
|--------|-----------|-------|------------|
| 7.4 | `Read({output_dir}/output.html, limit=20)` | `> 10 lines` AND contains `<html` | Restore backup: `Bash("cp output-pre-refine.html output.html")` |
| 7.5 | `Glob("{output_dir}/_reflection-v2.md")` | File exists | WARN only |

### STEP 8: Post-REFINE Gate Check and Ship

| Sub-step | Tool Call | Artifact | Failure Mode |
|----------|-----------|----------|-------------|
| 8.1 | `browser_navigate` + `browser_run_code(captureScreenshots)` | New screenshots (overwrite existing) | — |
| 8.2 | `browser_evaluate(atomicGateFunction)` | Post-REFINE gate results | — |
| 8.3 | `Write({output_dir}/_gate-results-post-refine.json, ...)` | Gate results file | — |
| 8.4 | If MECHANICAL failures: patch CSS (Edit tool), re-run gates. If STRUCTURAL: log for user, ship with advisory. | — | — |
| 8.5 | `Bash("kill server PID" or "lsof -ti:8888 | xargs kill")` | Server stopped | — |
| 8.6 | `Glob("{output_dir}/*")` | Final file inventory | — |
| 8.7 | `Read(_gate-results.json)` + `Read(_routing-log.md)` | Data for ship report | — |
| 8.8 | PRINT ship report to user: file path, gate summary, route taken, cold-look excerpts from each auditor, Weaver verdict. | User sees final output | — |

### STEP 9: Second REFINE (USER ESCALATION ONLY)

Not automatic. Only if user explicitly requests. Run abbreviated PA (5 auditors, new screenshots), spawn THIRD Opus builder with both reflections, maximum 2 REFINE cycles total.

---

## SECTION 2: WINDOW SPECIFICATIONS

### Window 1: DERIVE + BUILD (Combined TC + Build)

**Agent:** Single Opus instance
**Spawning:** `Task(subagent_type="code")`
**Timeout:** None specified (allow full creative work)

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
  2. {OUTPUT_DIR}/_tc-brief.md — conviction brief, ~50 lines, 5 sections
  3. {OUTPUT_DIR}/_reflection.md — 3-dimension reflection, ~15-20 sentences

---

{TC_SKILL_CONTENT}
(~/.claude/skills/tension-composition/SKILL.md — 841 lines, inserted verbatim)

---

THE CONTENT YOU ARE BUILDING FOR:

{RAW_CONTENT}
({OUTPUT_DIR}/_content.md — inserted verbatim)

---

STOP. Before reading the files below, complete your TC derivation:
- Run Phase 0 (content assessment + deep read)
- Run Phase 1 (core questioning + discovered axes)
- Run Phase 2 (tension derivation)
- Run Phase 3 (metaphor collapse)
- Write your conviction brief (5 sections, ~50 lines)
- Save it to {OUTPUT_DIR}/_tc-brief.md

Only AFTER writing the brief, continue reading the vocabulary files below.

---

IDENTITY — THE WORLD'S PHYSICS:

{PROHIBITIONS_CONTENT}
(prohibitions.md — ~419 lines)

{TOKENS_CONTENT}
(tokens.css — ~183 lines)

---

MECHANISMS — YOUR TOOLS:

{MECHANISM_CATALOG_CONTENT}
(mechanism-catalog.md — ~751 lines)

---

COMPONENT LIBRARY — YOUR STARTING POINTS:

{COMPONENTS_CSS_CONTENT}
(components.css — ~944 lines)

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
- At each zone boundary, multiple channels should reinforce the same direction
- Vary transition types: some smooth continuations, some bridges, some full resets
- Name CSS classes from your metaphor, not generic (.geological-bedrock, not .section-dark)

Include an EXPERIENTIAL-CHECK comment (>= 100 chars) in your HTML confirming you
scrolled through your own page and verified legibility + visual clarity.

Include a SELF-EVALUATION comment noting what you would improve.

---

NOW BUILD.

Build from your conviction brief. Work boundary-by-boundary — at each zone
transition, set background, typography, spacing, and borders together. The
reader should feel they enter a different room at each boundary.

Adapt components from the library. Do not invent from scratch when a component
serves your purpose. Do not copy when your metaphor demands something different.

After building, write your reflection to {OUTPUT_DIR}/_reflection.md:

CONVICTION: What were you trying to make? Where did you succeed/fall short? (5-7 sentences)
ALTERNATIVES: What roads did you not take? What creative energy was suppressed? (4-6 sentences)
UNRESOLVED: What tension remains? What surprised you? What would you tell the next builder? (4-6 sentences)
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

#### Transition to Window 2

All 3 structural checks pass → proceed to screenshot capture. If `output.html` absent or malformed → STOP, report to user.

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

{IF blocking_usability:}
BLOCKING-USABILITY FINDING: {usability_notes}. This has been pre-identified.
Address this in your Section 0 response.

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
- Full TC brief sections 2, 3, 5 (calibration, opposition, content map)
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
4. Write creative direction FOR a creator, not corrections FOR a manager.
5. Your verdict is a creative judgment, not a calculation.

SCREENSHOTS:
{1440px cold-look + scroll-through paths}

AUDITOR REPORTS:
{Read all 5: auditor-A.md through auditor-E.md}

CONVICTION BRIEF:
{Read: _tc-brief.md}

BUILDER'S REFLECTION:
{Read: _reflection.md}

Write your synthesis to {OUTPUT_DIR}/_pa/weaver-synthesis.md containing:

1. EXPERIENTIAL ANCHOR (~5-8 sentences) — your own first impression, written
   BEFORE reading any auditor report. Unrevised.

2. WHAT IS WORKING (~10-15 sentences) — convergent strengths. Written so the
   REFINE builder understands WHY they work.

3. WHAT IS ALMOST THERE (~10-15 sentences) — near-misses framed as creative
   invitations.

4. WHERE TO GO (~10-15 sentences) — creative direction:
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

#### Transition to Window 3

Routing matrix applied → SHIP / PATCH_THEN_SHIP / REFINE / PATCH_THEN_REFINE / RETHINK. If REFINE or PATCH_THEN_REFINE → proceed to Window 3.

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

{CONVENTIONS_BRIEF — same ~40 lines as Window 1}

Include an EXPERIENTIAL-CHECK comment (>= 100 chars) in your HTML.
Include a SELF-EVALUATION comment noting what you would improve.

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

CONVICTION: What were you trying to make? Where did you succeed/fall short? (5-7 sentences)
ALTERNATIVES: What roads did you not take, and why? (4-6 sentences)
UNRESOLVED: What tension remains? What would you tell a third builder? (4-6 sentences)
```

#### Reading Order (WHY)

1. **Artifact first** → fresh perception before any other account enters context
2. **2-sentence checkpoint** → locks impression before external influence
3. **Weaver synthesis** → creative direction from 5 independent perceptions
4. **Reflection** → previous builder's creative state (conviction, alternatives, unresolved)
5. **Conviction brief** → the aspirational intent (arrives last among creative documents to prevent governing perception)
6. **Content + vocabulary** → building materials

#### Structural Deliverables After Window 3

| File | Check |
|------|-------|
| `output.html` (overwritten) | `> 10 lines`, contains `<html`. If malformed → restore backup. |
| `_reflection-v2.md` | exists (warn if missing) |

---

## SECTION 3: GATE RUNNER

### 28 Surviving Gates (from 02-gate-audit.md)

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

#### Category E: Experiential (3)

| Gate | Name | Tier | What It Checks |
|------|------|------|---------------|
| GR-61 | DPR Validation | REQUIRED | window.devicePixelRatio === 1 |
| GR-62 | Screenshot Quality | REQUIRED | Per viewport: min 3 PNGs, no 2+ consecutive blanks, blank ratio <= 20% |
| GR-63 | Builder Experiential Marker | REQUIRED | `<!-- EXPERIENTIAL-CHECK: -->` with >= 100 chars |

#### Category F: Meta (2)

| Gate | Name | Tier | What It Checks |
|------|------|------|---------------|
| GR-48 | Gate Coverage | REQUIRED | All required gates produced results |
| GR-64 | Usability Priority | REQUIRED | If >= 3/5 auditors flag usability → Weaver Fix #1 contains usability |

#### Category G: Brief Verification (4)

| Gate | Name | Tier | What It Checks |
|------|------|------|---------------|
| BV-01 | World Section | REQUIRED (BV) | Brief contains WORLD-DESCRIPTION section |
| BV-02 | Calibration Section | REQUIRED (BV) | Brief contains CALIBRATION section |
| BV-03 | Opposition Section | REQUIRED (BV) | Brief contains OPPOSITION section |
| BV-04 | Content Map Section | REQUIRED (BV) | Brief contains ARC section |

#### Category H: Builder Narration (4)

| Gate | Name | Tier | What It Checks |
|------|------|------|---------------|
| BV-08 | Brief-Output Diff | RECOMMENDED | >= 80% coverage across 6 dimensions |
| GR-43 | Self-Evaluation Comment | RECOMMENDED | HTML contains `<!-- SELF-EVALUATION: -->` |
| GR-83 | INTENT Comment Count | RECOMMENDED | >= 15 INTENT comments with disposition coverage |
| GR-84 | IMPROVEMENTS Comment | RECOMMENDED | HTML contains `<!-- IMPROVEMENTS: -->` with >= 5 items |

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
    'GR-11','GR-13','GR-14','GR-15','GR-18','GR-44','GR-45',
    'GR-48','GR-60','GR-61','GR-62','GR-63','GR-67'];
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

### Invocation

1. `Read(gate-runner-core.js)` — load JS code into orchestrator context
2. `browser_evaluate(atomicFunction)` — execute in Playwright, returns JSON string
3. `Write(_gate-results.json, jsonString)` — save to disk

### Pass/Fail Output Format

```json
{
  "summary": {
    "essential_pass": 19,
    "essential_fail": 0,
    "advisory_fail": 2,
    "gates_failed": false
  },
  "gates": {
    "GR-03": { "gate": "GR-03", "pass": true, "detail": "Container width: 960px" },
    "GR-11": { "gate": "GR-11", "pass": false, "detail": "Zones 3-4 bg delta: 8 RGB (threshold: 15)", "fix_type": "MECHANICAL" }
  },
  "errors": []
}
```

### Verdict Logic

```
RETHINK:  ANY identity gate FAIL (GR-03/05/06/08/09/10) OR 3+ RECOMMENDED FAIL
REFINE:   ANY perception gate FAIL OR GR-63 FAIL OR GR-64 FAIL + auditors say SHIP
SHIP:     All essential PASS + <3 recommended FAIL
          (creative verdict from auditors/Weaver determines SHIP vs REFINE)
```

---

## SECTION 4: FILE INVENTORY

### Files the New Process References (Complete List)

| # | File Path | Lines | Status | Who Reads | When |
|---|-----------|-------|--------|-----------|------|
| 1 | `~/.claude/skills/build-page/SKILL.md` | ~250 | **REWRITE** | Orchestrator | Entry point |
| 2 | `~/.claude/skills/tension-composition/SKILL.md` | 841 | **KEEP AS-IS** (the rewrite from ephemeral/tc-skill-update/) | Window 1 agent | Derive + Build |
| 3 | `~/.claude/skills/perceptual-auditing/SKILL.md` | 517 | **KEEP AS-IS** | Orchestrator (extracts questions) | PA deployment |
| 4 | `design-system/compositional-core/identity/prohibitions.md` | 419 | **KEEP AS-IS** | Window 1 + REFINE builders | Build, Refine |
| 5 | `design-system/compositional-core/vocabulary/tokens.css` | 183 | **KEEP AS-IS** | Window 1 + REFINE builders | Build, Refine |
| 6 | `design-system/compositional-core/grammar/mechanism-catalog.md` | 751 | **KEEP AS-IS** | Window 1 + REFINE builders | After Phase 3.5, Refine |
| 7 | `design-system/compositional-core/components/components.css` | 944 | **KEEP AS-IS** | Window 1 + REFINE builders | Build, Refine |
| 8 | `ephemeral/va-extraction/gate-runner-core.js` | ~1,500 | **MODIFY** (reduce from 3,185) | Orchestrator (Playwright) | Gate execution |
| 9 | `ephemeral/va-extraction/gate-manifest.json` | ~150 | **MODIFY** (reduce from 361) | Orchestrator | Gate ordering |

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

### Files That Need Modification

| File | Current Lines | Target Lines | What Changes |
|------|--------------|-------------|-------------|
| `~/.claude/skills/build-page/SKILL.md` | 110 | ~250 | Complete rewrite. Becomes the orchestrator script with all 9 steps. |
| `ephemeral/va-extraction/gate-runner-core.js` | 3,185 | ~1,500 | Remove 29 stripped gate functions. Update coverage array (GR-48). Keep captureScreenshots + checkScreenshotQuality. Keep exception patterns. |
| `ephemeral/va-extraction/gate-manifest.json` | 361 | ~150 | Remove entries for stripped gates. Simplify to REQUIRED + ADVISORY tiers. |

### Files That Need NO Modification

- `~/.claude/skills/tension-composition/SKILL.md` (841 lines — user decision: keep as-is)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (517 lines — already rewritten and LIVE)
- `design-system/compositional-core/identity/prohibitions.md` (419 lines)
- `design-system/compositional-core/vocabulary/tokens.css` (183 lines)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (751 lines)
- `design-system/compositional-core/components/components.css` (944 lines)

### Files To Discard (not modified — just no longer referenced by the process)

All 30+ files in `ephemeral/va-extraction/` that the old pipeline used but the new process does not reference. These files continue to exist for historical reference but are NOT loaded, NOT read, and NOT pointed to by the new `/build-page` skill. Notable discards:

- `MANIFEST.md` (1,450 lines — absorbed into skill)
- `artifact-orchestrator.md` (755 lines — absorbed into skill)
- `council-verdict.md` (575 lines)
- `artifact-routing.md` (1,056 lines — ALWAYS FLAGSHIP, no routing)
- `artifact-builder-recipe-compose.md` + `artifact-builder-recipe-enrich.md` (1,166 lines — replaced by conviction brief)
- `artifact-identity-perception.md` (556 lines — split into prohibitions + conventions)
- `artifact-tc-brief-template.md` (235 lines — merged into TC skill)
- `artifact-worked-examples.md` (182 lines — risk of pattern-matching)
- `artifact-value-tables.md` (262 lines — thresholds in gates + conventions)
- `pa-deployment.md` (450 lines — absorbed into skill)
- All redirect files, provenance docs, experiment protocol

---

## SECTION 5: IMPLEMENTATION ORDER

### Phase 1: TC Skill Deployment (~15 min)

**Prerequisite:** None.
**Parallelizable:** Yes (independent of all other phases).

| Step | Action | Lines Changed | Dependency |
|------|--------|--------------|------------|
| 1.1 | Copy `ephemeral/tc-skill-update/SKILL-REWRITE.md` to `~/.claude/skills/tension-composition/SKILL.md` | 841 (full replacement) | None |
| 1.2 | Verify the copy: `Read(~/.claude/skills/tension-composition/SKILL.md, limit=5)`. Confirm it starts with the rewrite's opening, not the old skill's. | 0 | 1.1 |

### Phase 2: Gate Runner Reduction (~2-4 hours)

**Prerequisite:** 02-gate-audit.md (complete).
**Parallelizable:** Yes (independent of Phases 1 and 3).

| Step | Action | Lines Changed | Dependency |
|------|--------|--------------|------------|
| 2.1 | Read `ephemeral/va-extraction/gate-runner-core.js` fully. Identify functions for the 29 STRIPPED gates (listed in 02-gate-audit.md "STRIPPED" section). | 0 (read only) | None |
| 2.2 | Remove stripped gate functions from `gate-runner-core.js`. This includes: GR-49, GR-50, GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07, GR-52, GR-53, GR-66, GR-17, GR-19, GR-22, GR-33, GR-34, GR-05b, GR-21, GR-46, BV-05, A-03, plus any supporting helper functions only used by stripped gates. | ~-1,500 (removal) | 2.1 |
| 2.3 | Update the GR-48 coverage array to contain ONLY the 19 essential gates (listed in Section 3 above). | ~5 | 2.2 |
| 2.4 | Update GR-64 threshold from `>= 3/9` to `>= 3/5` (always 5 auditors). | ~2 | 2.2 |
| 2.5 | Verify remaining gates still reference correct helper functions (no broken references from stripped dependencies). | 0 (audit) | 2.2 |
| 2.6 | Update `ephemeral/va-extraction/gate-manifest.json`: remove entries for stripped gates, update tier labels to REQUIRED + ADVISORY only. | ~-200 | 2.2 |
| 2.7 | Test gate runner: serve any existing HTML page, run the atomic function via Playwright, verify JSON output has all 28 gates. | 0 (test) | 2.2-2.6 |

### Phase 3: Write the New /build-page Skill (~3-5 hours)

**Prerequisite:** Phases 1 and 2 (TC skill deployed, gate runner reduced).
**Parallelizable:** NO (depends on Phase 1 + 2 outputs).

| Step | Action | Lines Changed | Dependency |
|------|--------|--------------|------------|
| 3.1 | Write `~/.claude/skills/build-page/SKILL.md` (~250 lines). This is the ENTIRE orchestrator script containing Steps 0-8 from Section 1 of this plan. The skill must include: prompt templates (Window 1, auditors, Weaver, REFINE), exact file paths, verification checks, routing logic, and conventions brief text. | ~250 (new) | Phases 1, 2 |
| 3.2 | Verify the skill: `Read(~/.claude/skills/build-page/SKILL.md)`. Check it contains: all 9 steps, file paths to all 9 referenced files, the conventions brief text, all 3 receiving principles, the routing matrix, the mechanical patching logic. | 0 (audit) | 3.1 |

### Phase 4: Validation Run (~2-3 hours)

**Prerequisite:** Phase 3 (skill written).

| Step | Action | Dependency |
|------|--------|------------|
| 4.1 | Select a test content file (ideally the Gas Town content or another previously-built page for comparison). | None |
| 4.2 | Invoke `/build-page {test_content_path}`. | 3.1 |
| 4.3 | Observe: Does the orchestrator follow all 9 steps? Does it spawn Opus agents? Does the gate runner produce JSON? Do all 5 auditors produce reports? Does the Weaver produce synthesis? Does routing work? | 4.2 |
| 4.4 | If any step is skipped or fails: diagnose, adjust skill text, re-run. | 4.3 |
| 4.5 | Compare output quality to previous pipeline runs on the same content. | 4.3 |

### Phase 5: Design System Navigation Updates (~30 min)

**Prerequisite:** Phase 4 (validation passed).
**Parallelizable:** Yes (independent).

| Step | Action | Lines Changed | Dependency |
|------|--------|--------------|------------|
| 5.1 | Update `design-system/CLAUDE.md`: change `/build-page` description to reference the new 3-window process. Remove references to MANIFEST, 9 artifacts, Observer agent, 2-pass build. | ~20 | Phase 4 |
| 5.2 | Update `design-system/compositional-core/CLAUDE.md`: update build protocol section. | ~10 | Phase 4 |

### Parallelism Map

```
Phase 1 (TC deploy)     ───────> done (~15 min)
                                    \
Phase 2 (gate reduction) ──────────> done (~2-4 hrs)
                                    \
                                     Phase 3 (skill write) ──> Phase 4 (validate) ──> Phase 5 (nav update)
```

Phases 1 and 2 can run in parallel. Phase 3 depends on both. Phases 4 and 5 are sequential after Phase 3.

### Total Estimated Scope

| Phase | Lines Modified | Lines Created | Lines Removed |
|-------|---------------|--------------|---------------|
| 1: TC deploy | 0 | 841 (copy) | 1,648 (old TC) |
| 2: Gate reduction | ~7 | 0 | ~1,700 |
| 3: Skill write | 0 | ~250 | 110 (old skill) |
| 4: Validation | 0 | 0 | 0 |
| 5: Nav updates | ~30 | 0 | ~50 |
| **Total** | **~37** | **~1,091** | **~3,508** |

**Net reduction: ~2,417 lines.** From ~24,311 lines across 44 files to ~11,000 lines across ~14 files.

---

## SECTION 6: RECONCILIATION LOG

Where the 10 input documents disagree, and how each disagreement is resolved.

### Disagreement 1: Auditor Count

| Document | Position |
|----------|----------|
| 03-skill-architecture.md | 2 standard / 5 high-stakes |
| 07-first-principles-design.md | 5 always (recommends 5 as default) |
| 12-window2-design.md | 2 standard / 5 high-stakes |
| 10-orchestrator-plumbing.md | Supports both modes |

**Resolution: USER DECISION overrides all.** Always 5 auditors. No mode prompt.

### Disagreement 2: TC Skill Size

| Document | Position |
|----------|----------|
| 03-skill-architecture.md | ~300 lines simplified |
| 04-reference-file-map.md | ~300 lines simplified |
| 05-tc-simplification-design.md | ~300 lines (detailed reduction plan) |
| 07-first-principles-design.md | ~200-250 lines creative process guide |
| 11-window1-design.md | ~340 lines simplified |

**Resolution: USER DECISION overrides all.** Keep 841-line SKILL-REWRITE.md. It is loaded verbatim into the Window 1 agent's prompt.

### Disagreement 3: Weaver Always or Only High-Stakes

| Document | Position |
|----------|----------|
| 03-skill-architecture.md | High-stakes only |
| 07-first-principles-design.md | Always (5 auditors need synthesis) |
| 12-window2-design.md | High-stakes only |

**Resolution: Always.** With 5 auditors always deployed (user decision), the Weaver is always needed for synthesis. 5 reports (~200-400 lines) benefit from creative synthesis. The REFINE builder receives the Weaver synthesis only (not raw reports).

### Disagreement 4: Conventions Brief as Separate File or Embedded

| Document | Position |
|----------|----------|
| 03-skill-architecture.md | Embedded ~40 lines in prompt |
| 04-reference-file-map.md | Separate file at `design-system/compositional-core/conventions-brief.md` |
| 07-first-principles-design.md | No separate file needed — world-description + tokens.css cover it |
| 11-window1-design.md | Embedded in prompt |

**Resolution: Embedded in the skill.** The conventions brief is ~40 lines of mechanical constraints that are embedded directly in the Window 1 and REFINE builder prompts. No separate file. The skill itself contains the text. This avoids creating a file that would need to be kept in sync with the gate runner thresholds.

### Disagreement 5: Auditors Receive Conviction Brief Excerpt

| Document | Position |
|----------|----------|
| 03-skill-architecture.md | Yes — sections 1 (world-description) + 4 (arc) |
| 07-first-principles-design.md | No — fresh-eyes principle |
| 12-window2-design.md | No — recommends zero context |

**Resolution: No brief excerpt for auditors.** The PA skill's fresh-eyes principle is correct. If the metaphor works, auditors will describe it without being told. If they can't see it, it's announced, not structural. This is a stronger signal.

**UPDATE from user decisions: re-examined.** The skill architecture (03) includes brief excerpt. The window2 spec (12) recommends against. Since the user emphasized "maximum programmatic enforcement" but did not decide this specific question, I follow the perceptual auditing principle: auditors see ONLY screenshots + questions. No brief excerpt.

### Disagreement 6: World-Description as Separate File

| Document | Position |
|----------|----------|
| 07-first-principles-design.md | Yes — `world-description.md` (~30 lines), distilled from prohibitions.md |
| 11-window1-design.md | No — loads full prohibitions.md (419 lines) |
| 04-reference-file-map.md | No separate world-description; prohibitions.md serves this role |

**Resolution: Load full prohibitions.md.** The 419-line prohibitions file provides the identity WHY. The conventions brief provides the WHAT (40 lines, embedded). Creating a 30-line world-description would add another file to maintain. The builder reads prohibitions.md as the world's physics, not as compliance rules — the receiving principle establishes this framing.

### Disagreement 7: Post-REFINE PA

| Document | Position |
|----------|----------|
| 03-skill-architecture.md | Not automatic after REFINE |
| 13-window3-design.md | Not automatic; user can request |
| 10-orchestrator-plumbing.md | Step 9 = user escalation only |

**Resolution: Unanimous agreement.** No automatic second PA. Post-REFINE evaluation = gates only. User requests additional PA explicitly.

### Disagreement 8: What REFINE Builder Receives (Standard vs High-Stakes)

| Document | Position |
|----------|----------|
| 03-skill-architecture.md | Standard: raw auditor reports. High-stakes: Weaver synthesis only. |
| 13-window3-design.md | Same split. |

**Resolution: Moot.** With always-5-auditors and always-Weaver, the REFINE builder ALWAYS receives the Weaver synthesis only (not raw auditor reports). The Weaver has synthesized 5 reports into ~60 lines of creative direction. This is what the REFINE builder gets.

---

## SECTION 7: VERIFICATION PROTOCOL

How to verify the implementation is correct BEFORE testing with real content.

### Pre-Test Structural Checks (no content needed)

| # | Check | How | Pass Condition |
|---|-------|-----|---------------|
| 1 | TC skill exists at correct path | `Read(~/.claude/skills/tension-composition/SKILL.md, limit=5)` | File exists, starts with rewrite content |
| 2 | PA skill exists at correct path | `Read(~/.claude/skills/perceptual-auditing/SKILL.md, limit=5)` | File exists, 517 lines |
| 3 | Build-page skill exists at correct path | `Read(~/.claude/skills/build-page/SKILL.md)` | File exists, ~250 lines, contains "STEP 0" through "STEP 8" |
| 4 | Build-page skill references correct file paths | `Grep` the skill for each of the 9 files in Section 4 | All 9 paths appear |
| 5 | Build-page skill contains conventions brief text | `Grep` the skill for "940-960px" | Found |
| 6 | Build-page skill contains all 3 receiving principles | `Grep` the skill for "RECEIVING PRINCIPLE" | 3 occurrences (Window 1, auditor, REFINE) |
| 7 | Build-page skill contains routing matrix | `Grep` for "RETHINK" AND "PATCH_THEN_SHIP" AND "PATCH_THEN_REFINE" | All found |
| 8 | Gate runner has ~28 gates | `Grep` gate-runner-core.js for function names of surviving gates | All 28 gate IDs found |
| 9 | Gate runner has NO stripped gates | `Grep` gate-runner-core.js for GR-49, GR-50, GR-52, etc. | NOT found |
| 10 | GR-48 coverage array is correct | `Read` gate-runner-core.js, find coverage array | Contains exactly the 19 essential gate IDs |
| 11 | Gate manifest matches gate runner | Compare gate IDs in `gate-manifest.json` to functions in `gate-runner-core.js` | 1:1 match |
| 12 | All vocabulary files exist | `Glob` for prohibitions.md, tokens.css, mechanism-catalog.md, components.css | All 4 found |

### Dry Run Checklist (with test content)

| # | Check | Expected Behavior |
|---|-------|------------------|
| 1 | Orchestrator creates output directory | `ephemeral/builds/{slug}-{date}/` exists |
| 2 | Orchestrator copies content | `_content.md` exists in output dir |
| 3 | Window 1 agent receives correct prompt order | TC skill → content → checkpoint → identity → mechanisms → components → conventions |
| 4 | Window 1 agent produces 3 files | `output.html`, `_tc-brief.md`, `_reflection.md` all exist |
| 5 | Orchestrator validates HTML before proceeding | `Glob` + `Read` output visible in conversation |
| 6 | Screenshots captured at 3 viewports | `_screenshots/1440/`, `1024/`, `768/` have PNG files |
| 7 | Gate runner produces JSON | `_gate-results.json` exists and is valid JSON |
| 8 | 5 PA auditors spawned | 5 `Task` calls visible in conversation |
| 9 | All 5 auditor reports exist | `auditor-A.md` through `auditor-E.md` in `_pa/` |
| 10 | Weaver spawned and produces synthesis | `weaver-synthesis.md` exists |
| 11 | Routing decision logged | `_routing-log.md` exists with correct format |
| 12 | If REFINE: backup created | `output-pre-refine.html` exists |
| 13 | If REFINE: different builder produces updated HTML | `output.html` modified (timestamp check) |
| 14 | Post-REFINE gates run | `_gate-results-post-refine.json` exists |
| 15 | Ship report printed | User sees gate summary + auditor excerpts |
| 16 | HTTP server killed | Port 8888 is free after completion |

### What a Successful Dry Run Looks Like

The orchestrator conversation should show, in order:

```
1. "Content file verified: X lines."
2. "Output directory: ephemeral/builds/{slug}-{date}/"
3. "Content copied to _content.md"
4. [Window 1 agent spawned — visible Task tool call]
5. "Window 1 HTML verified: X lines."
6. "1440px screenshots: X files"
7. "768px screenshots: X files"
8. "Gate results written. Essential: X pass, Y fail. Advisory: Z fail."
9. [5 PA auditor Task calls visible]
10. "PA reports found: 5 files"
11. [Weaver Task call visible]
12. "Weaver verdict extracted: SHIP/REFINE/RETHINK"
13. "Routing inputs: creative_verdict=X, GATES_FAILED=Y"
14. "ROUTE = X"
15. [If REFINE: REFINE agent Task call visible]
16. "BUILD COMPLETE: {path}/output.html"
```

Every step produces visible output. Every artifact is verified by the next step. No silent skips.

---

## APPENDIX A: COMPLETE TOOL CALL MANIFEST

Every tool call the orchestrator makes, in execution order (standard REFINE path):

| Step | Tool | Target | Purpose |
|------|------|--------|---------|
| 0.2 | Read | `{content_path}` | Verify content exists |
| 0.4 | Bash | `mkdir -p ...` | Create dirs |
| 0.5 | Bash | `cp ...` | Copy content |
| 0.6 | Glob | `_content.md` | Verify copy |
| 1.1 | Read (x6) | TC skill, content, prohibitions, tokens, mechanism-catalog, components | Build prompt |
| 1.2 | Task | Opus agent | Window 1: DERIVE+BUILD |
| 1.4 | Glob | `output.html` | Verify HTML |
| 1.5 | Read | `output.html` (50 lines) | Verify valid |
| 1.6 | Glob | `_tc-brief.md` | Verify brief |
| 1.7 | Glob | `_reflection.md` | Verify reflection |
| 2.1 | Bash | `npx http-server ...` | Start server |
| 2.2 | browser_navigate | localhost:8888 | Load page |
| 2.3 | browser_run_code | captureScreenshots | Take screenshots |
| 2.4 | browser_evaluate | checkScreenshotQuality | Validate screenshots |
| 2.5 | browser_snapshot + scroll | (experiential scan) | Check usability |
| 2.6 | Glob | `_screenshots/1440/*.png` | Verify screenshots |
| 2.7 | Glob | `_screenshots/768/*.png` | Verify screenshots |
| 3.0 | Read | `_tc-brief.md` | BV gates |
| 3.1 | Read | `gate-runner-core.js` | Load gate code |
| 3.2 | browser_evaluate | atomic gate function | Run ALL gates |
| 3.3 | Write | `_gate-results.json` | Save results |
| 3.4 | Read | `_gate-results.json` | Verify |
| 4.1 | Read | PA skill | Extract questions |
| 4.2 | Read | `_tc-brief.md` | Brief excerpt (sections 1+4) — **NOTE: per Reconciliation #5, this is NOT sent to auditors** |
| 4.3 | Glob (x2) | `_screenshots/...` | Collect paths |
| 4.5 | Task (x5) | 5 Opus agents | PA auditors |
| 4.6 | Glob | `_pa/auditor-*.md` | Verify reports |
| 4.7 | Read (x5) | each auditor report | Verify + audit trail |
| 4.8 | (inline) | string search per report | Contamination check |
| 5.1 | Read (x7) | auditor reports + brief + reflection | Build Weaver prompt |
| 5.2 | Task | Opus agent | Weaver |
| 5.4 | Glob | `weaver-synthesis.md` | Verify |
| 5.5 | Read | `weaver-synthesis.md` | Extract verdict |
| 6.1 | Read | `_gate-results.json` | Get summary |
| 6.4 | Edit (xN) | `output.html` | Mechanical patches |
| 6.6 | Write | `_routing-log.md` | Log decision |
| 7.0 | Bash | `cp output.html ...` | Backup |
| 7.0v | Glob | `output-pre-refine.html` | Verify backup |
| 7.1 | Read (x8+) | artifact + reports + reflection + brief + content + vocabulary | Build REFINE prompt |
| 7.2 | Task | Opus agent | REFINE |
| 7.4 | Read | `output.html` | Verify REFINE output |
| 7.5 | Glob | `_reflection-v2.md` | Verify reflection |
| 8.1 | browser_run_code | captureScreenshots | New screenshots |
| 8.2 | browser_evaluate | atomic gate function | Post-REFINE gates |
| 8.3 | Write | `_gate-results-post-refine.json` | Save results |
| 8.5 | Bash | `kill {pid}` | Stop server |
| 8.6 | Glob | `{output_dir}/*` | Final inventory |
| 8.7 | Read (x2) | gate results + routing log | Ship report data |
| 8.8 | (print) | user report | Final output |

**Total: ~45-50 tool calls** (standard REFINE path). Each produces visible output in the conversation.

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
- At each zone boundary, multiple channels should reinforce the same direction
- Vary transition types: some smooth continuations, some bridges, some full resets
- Name CSS classes from your metaphor, not generic (.geological-bedrock, not .section-dark)
```

---

## APPENDIX C: ARTIFACT CHAIN DIAGRAM

How each step proves the previous step happened:

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
  └─ Step 5 (Weaver) READS all reports.
  └─ Step 6 READS for keyword scan (fallback).

Step 5: _pa/weaver-synthesis.md
  └─ Step 5 VERIFY: Glob + Read. If missing → keyword scan fallback.
  └─ Step 6 READS for verdict extraction.

Step 6: _routing-log.md
  └─ Step 8 READS for ship report.

Step 7: output.html (overwritten), _reflection-v2.md
  └─ Step 7 VERIFY: Read("output.html"). If malformed → restore backup.
  └─ Step 8 runs gates on new output.html.
```

**Chain property:** Every file produced by Step N is consumed by Step N+k via an explicit Read or Glob call. If any step is skipped, the next step's verification FAILS because its input is missing. The orchestrator cannot silently skip a step without the conversation showing gaps.

---

**END OF IMPLEMENTATION PLAN**
