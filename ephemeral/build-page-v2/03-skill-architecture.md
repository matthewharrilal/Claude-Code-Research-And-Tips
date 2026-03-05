# /build-page v2 — Skill Architecture

**Author:** skill-architect (Task #3)
**Date:** 2026-02-27
**Status:** COMPLETE

---

## Architecture Overview

3 windows. 5-7 agents. ~2-3 hours. Deterministic routing.

```
Window 1: DERIVE + BUILD (1 Opus agent — derives metaphor, writes conviction brief, builds page)
    |
    v -- outputs: output.html + _reflection.md + _tc-brief.md
    |
Window 2: EVALUATE (orchestrator screenshots + gate runner + 2-5 PA auditors + optional Weaver)
    |
    v -- routing decision: SHIP / REFINE / RETHINK
    |
[If REFINE] Window 3: REFINE (1 different Opus agent, one pass)
    |
    v -- outputs: output.html (overwritten) + _reflection-v2.md
    |
    [Quick gate re-run → SHIP]
```

---

## The Skill File Itself (~200-250 lines)

The skill file (`~/.claude/skills/build-page/SKILL.md`) is the ORCHESTRATOR'S script. It tells the orchestrator (the agent running `/build-page`) what to do, step by step. The orchestrator does NOT build. It spawns agents, takes screenshots, runs gates, makes routing decisions.

### Skill File Structure

```
SECTION 0: Parse input, create output directory          (~15 lines)
SECTION 1: Window 1 — spawn DERIVE+BUILD agent           (~50 lines)
SECTION 2: Screenshot capture protocol                    (~25 lines)
SECTION 3: Gate runner execution                          (~30 lines)
SECTION 4: Window 2 — spawn PA auditors                   (~40 lines)
SECTION 5: Weaver (high-stakes only)                      (~15 lines)
SECTION 6: Routing logic                                  (~30 lines)
SECTION 7: Window 3 — REFINE (if needed)                  (~30 lines)
SECTION 8: Post-REFINE gate check + ship                  (~15 lines)
APPENDIX: Reference file paths + non-negotiables          (~20 lines)
```

Total: ~270 lines. This is the entire orchestrator script.

---

## SECTION 0: Pre-Pipeline Setup

### Input
- `{CONTENT_PATH}` — path to raw markdown content (parsed from command argument or asked)

### What the Orchestrator Does
1. Parse content path from command argument. If missing, ask user.
2. Derive slug from content filename (strip extension, lowercase, hyphenate).
3. Create output directory: `ephemeral/builds/{SLUG}-{DATE}/`
4. Copy content to `{OUTPUT_DIR}/_content.md`
5. Ask user: "Standard or high-stakes?" (Default: standard. High-stakes = 5 auditors + Weaver.)

### Structural Validation
- [ ] Content file exists and is non-empty
- [ ] Output directory created
- [ ] `_content.md` written

---

## SECTION 1: Window 1 — DERIVE + BUILD

### Agent Specification
- **Model:** Opus (mandatory)
- **Spawning method:** `Task` tool with `subagent_type: "code"` (single agent, full context)
- **Timeout:** None specified (allow full creative work)

### Files Loaded Into Agent Prompt (reading order matters)

The orchestrator constructs the agent's prompt by concatenating these sections in this exact order:

#### 1a. Receiving Principle (5 lines, embedded directly in prompt — NOT a file reference)

```
RECEIVING PRINCIPLE:
1. Read the content as a reader first. What excites you about this material?
2. Derive your metaphor from the content's tension with the design system. The metaphor is yours.
3. Write your conviction brief — this is your creative commitment, not a document for someone else.
4. Read the vocabulary files AFTER your brief is written. They are tools, not instructions.
5. Build from your conviction. Your perception is the tiebreaker on every creative decision.
```

#### 1b. TC Pipeline (simplified, ~300 lines)

**File:** `~/.claude/skills/tension-composition/SKILL.md` (the simplified version — Task #5's output)

**What the agent uses from TC:**
- Phase 0: Content assessment (type, scope, section identification)
- Phase 1: 4 core axes (FEEL/UNDERSTAND/DO/BECOME) — extended axes only if content signals richness
- Phase 2: Tension derivation (Addition Test, BECAUSE test, SUBSTITUTION test)
- Phase 3: Metaphor derivation (3 candidates, pick one, ONE structural/decorative check)
- Phase 3.5: Commitment gate + zone architecture
- Phase 4.5: Conviction brief format (5 sections, ~50 lines)

**What is stripped from TC for this context:**
- Phase 4 compositional architecture details (transition tables, fractal checks — the builder handles this intuitively)
- Phase 5 standalone output (not applicable in sub-skill mode)
- Standalone appendix
- Library access prohibition details (simplified to: "do not read case studies before committing your metaphor")

#### 1c. Raw Content

**File:** `{OUTPUT_DIR}/_content.md`
**Purpose:** The material being composed. Read AFTER the TC skill protocol, BEFORE vocabulary files.

#### 1d. Identity Files

**Files (concatenated):**
- `design-system/compositional-core/identity/prohibitions.md` (~419 lines)
- `design-system/compositional-core/vocabulary/tokens.css` (~183 lines)

**Purpose:** The world's physics. What exists and what is prohibited.

#### 1e. Mechanism Catalog

**File:** `design-system/compositional-core/grammar/mechanism-catalog.md` (~751 lines)
**Purpose:** Reusable technique vocabulary. Read AFTER conviction brief is written (Phase 3.5 commitment gate must pass first).

#### 1f. Components CSS

**File:** `design-system/compositional-core/components/components.css` (~944 lines)
**Purpose:** Base component library. Adapt before inventing.

#### 1g. Conventions Brief (~40 lines, embedded directly in prompt — NOT a file)

```
CONVENTIONS (read LAST — after your conviction brief is written):
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

### Total Context Budget

| Content | Lines | % of ~200K tokens |
|---------|-------|-------------------|
| Receiving principle | 5 | <1% |
| TC Skill (simplified) | ~300 | ~5% |
| Raw content | varies | 10-30% |
| Identity files | ~600 | ~10% |
| Mechanism catalog | ~750 | ~12% |
| Components CSS | ~944 | ~15% |
| Conventions brief | ~40 | <1% |
| **Creative headroom** | — | **~27-62%** |

### What the Agent Must Output

1. **`{OUTPUT_DIR}/output.html`** — The complete, self-contained HTML page with embedded CSS
2. **`{OUTPUT_DIR}/_tc-brief.md`** — The conviction brief (~50 lines, 5 sections: world-description, calibration, opposition, arc, content map)
3. **`{OUTPUT_DIR}/_reflection.md`** — 3-dimension reflection (~15-20 sentences)

### Conviction Brief Format (5 sections, ~50 lines)

| Section | Lines | Content |
|---------|-------|---------|
| WORLD-DESCRIPTION | ~10 | The world, the metaphor as natural law, the BECAUSE statement |
| CALIBRATION | ~5 | Background hex arc, spacing arc, type arc — ranges not thresholds |
| OPPOSITION | ~5 | The 2-3 genuine tensions as creative invitations |
| ARC | ~10 | The reader's experiential journey, the climax, the resolution |
| CONTENT MAP | ~15 | Section outline, register annotations, word counts, structural features |

No CREATIVE CONDITIONS section (the builder IS the creator — they do not need suggested experiments from themselves). No EXPLORATION RECOMMENDATION (explorations are not loaded by default).

### 3-Dimension Reflection Format (~15-20 sentences)

| Dimension | Prompt | Sentences |
|-----------|--------|-----------|
| CONVICTION | What were you trying to make? Where did you succeed and where did you fall short? | 5-7 |
| ALTERNATIVES | What roads did you not take, and why? | 4-6 |
| UNRESOLVED | What tension remains? What would you tell the next builder? | 4-6 |

### Structural Validation (orchestrator checks AFTER Window 1 completes)

| Check | Pass Condition |
|-------|---------------|
| HTML file exists | `{OUTPUT_DIR}/output.html` exists and is > 500 bytes |
| Brief file exists | `{OUTPUT_DIR}/_tc-brief.md` exists and is > 100 bytes |
| Reflection file exists | `{OUTPUT_DIR}/_reflection.md` exists and is > 50 bytes |
| HTML is self-contained | No `<link rel="stylesheet"` or `<script src=` tags |
| HTML has content | At least 5 `<section>` or `<article>` or `<div>` elements |

If ANY structural validation fails: log the failure, do NOT proceed to Window 2. Report to user.

---

## SECTION 2: Screenshot Capture Protocol

### When
Immediately after Window 1 structural validation passes. The orchestrator does this ITSELF — no agent spawned.

### How

1. Serve the HTML file via HTTP: `npx http-server {OUTPUT_DIR} -p 8888 --cors -c-1 &`
2. Navigate Playwright to `http://localhost:8888/output.html`
3. Use `captureScreenshots(page, htmlUrl, screenshotDir)` from `ephemeral/va-extraction/gate-runner-core.js` Section 8
   - This function handles DPR-safe capture with 3 automatic fallback strategies
   - Captures at 3 viewports: 1440px, 1024px, 768px
   - For each viewport: cold-look (full page) + scroll-through at 80% viewport-height steps
4. Run `checkScreenshotQuality(screenshotDir)` (GR-62). If FAIL, re-capture once.
5. Save screenshots to `{OUTPUT_DIR}/_screenshots/`

### Screenshot Directory Structure

```
_screenshots/
  1440/
    cold-look.png
    scroll-01.png
    scroll-02.png
    ...
  1024/
    cold-look.png
    scroll-01.png
    ...
  768/
    cold-look.png
    scroll-01.png
    ...
```

### Orchestrator Experiential Scan (~2 min)

After screenshots, the orchestrator SCROLLS THE PAGE at reading speed. Notes:
- Any text that cannot be read
- Any chart or table that cannot be decoded
- Any navigation that fails

If ANYTHING is illegible: tag as BLOCKING-USABILITY. This finding is pre-seeded into each auditor's prompt.

### Structural Validation
- [ ] Screenshots directory exists with files in all 3 viewport subdirectories
- [ ] No all-black or all-white screenshots (GR-62 passes)
- [ ] Cold-look screenshots exist for all 3 viewports

---

## SECTION 3: Gate Runner Execution

### When
PARALLEL with PA auditor spawning. Gates and auditors run simultaneously. They never see each other's results.

### How

The orchestrator runs gate functions from `ephemeral/va-extraction/gate-runner-core.js` via `browser_run_code` or `browser_evaluate`. The gate runner is PROGRAMMATIC — no LLM agent needed.

### Which Gates Run (~28 essential + ~7 advisory)

**ESSENTIAL (must pass for SHIP):**

| Category | Gates | What They Check |
|----------|-------|----------------|
| Physics | GR-60 (WCAG), GR-67 (footer text) | Accessibility, legibility |
| Identity | GR-03 (container width), GR-06 (font trinity), GR-09 (border hierarchy), GR-10 (cross-page DNA), GR-08 (no decorative) | Design system membership |
| Perception | GR-11 (bg delta >= 15 RGB), GR-13 (stacked gap CSS <= 120px), GR-14 (stacked gap visual <= 150px), GR-15 (single margin <= 96px), GR-44 (trailing void), GR-18 (ghost mechanisms) | Perceptible design decisions |
| Structural | GR-45 (typography variation) | Not monotonous |
| Meta | GR-48 (gate coverage), GR-63 (builder experiential marker) | Process integrity |
| Brief | BV-01 through BV-04 (brief section verification) | Brief well-formed |

**ADVISORY (reported but don't block SHIP):**

| Category | Gates |
|----------|-------|
| Identity | GR-01 (border-radius), GR-02 (box-shadow), GR-04 (no gradients) |
| Perception | GR-51 (bg delta distribution), GR-55 (multi-coherence channel count) |
| Structural | GR-20 (structural echo) |
| Meta | GR-17 (density stacking) |

### Gate Results Output

`{OUTPUT_DIR}/_gate-results.json` — structured JSON with pass/fail per gate, failure details, advisory notes.

### Structural Validation
- [ ] Gate results file exists
- [ ] All essential gates have a result (pass or fail)
- [ ] Gate coverage (GR-48) passes

---

## SECTION 4: Window 2 — PA Auditors

### Tiered Deployment

| Mode | Auditors | Questions per Auditor | Weaver | When |
|------|----------|----------------------|--------|------|
| Standard | 2 | 10 each (all 20 covered) | No | Default |
| High-stakes | 5 | 4 each (all 20 covered) | Yes | User-designated |

### Standard Mode: 2 Auditors

**Spawning method:** `Task` tool, 2 parallel agents, `subagent_type: "code"`

#### Auditor A Prompt

**Receiving principle (5 lines, embedded):**
```
RECEIVING PRINCIPLE:
1. You are seeing this page for the first time. You know nothing about it.
2. Describe what you SEE and FEEL. No design vocabulary. No CSS terms.
3. Your perception is sovereign — what you experience IS the truth of this page.
4. If text is illegible or something is broken, that outranks everything else.
5. React to what you see before you check what you know.
```

**Files loaded:**
1. Screenshot file paths (listed explicitly): `{OUTPUT_DIR}/_screenshots/1440/cold-look.png`, `{OUTPUT_DIR}/_screenshots/1440/scroll-01.png`, ... (all 1440px screenshots), then 768px screenshots
2. Conviction brief Sections 1 + 4 ONLY (world-description + compositional arc) — extracted from `{OUTPUT_DIR}/_tc-brief.md` and embedded in prompt. NOT the full brief.
3. 10 experiential questions (embedded in prompt):

**Auditor A questions:** E-01, E-02, E-03, E-04, E-05, E-06, E-07, E-08, E-09, E-10

**Auditor A output:** `{OUTPUT_DIR}/_pa/auditor-A.md`

#### Auditor B Prompt

Same receiving principle. Same screenshot paths. Same conviction brief excerpt.

**Auditor B questions:** E-11, E-12, E-13, E-14, E-15, E-16, E-17, E-18, E-19, E-20

**Auditor B output:** `{OUTPUT_DIR}/_pa/auditor-B.md`

#### Section 0 Protocol (both auditors)

Both auditors perform Section 0 BEFORE answering any question:
1. Cold Look (5 seconds per viewport) — gut reaction, worst thing, best thing, ship-it verdict. LOCKED.
2. Scroll-through narrative — 2-3 sentences on where they sped up, slowed down, stopped.

This is embedded in each auditor's prompt as explicit instructions, not as a separate file reference.

#### Information Isolation (what auditors do NOT receive)

- Gate results
- Builder's reflection
- Other auditor's report
- Mechanism counts, pattern names, pipeline vocabulary
- TC brief sections 2, 3, 5 (calibration, opposition, content map)
- Any numerical targets or thresholds

### High-Stakes Mode: 5 Auditors

Same structure but with the standard 5-auditor split:

| Auditor | Questions |
|---------|-----------|
| A | E-01, E-05, E-11, E-17 |
| B | E-02, E-06, E-14, E-18 |
| C | E-03, E-07, E-12, E-19 |
| D | E-04, E-08, E-13, E-20 |
| E | E-09, E-10, E-15, E-16 |

Each auditor writes `{OUTPUT_DIR}/_pa/auditor-[A-E].md`.

### The 20 Experiential Questions (embedded in auditor prompts)

These are taken directly from `~/.claude/skills/perceptual-auditing/SKILL.md` Sections: Tier 1 (E-01 through E-03), Tier 2 (E-04 through E-08), Tier 3 (E-09 through E-13), Tier 4 (E-14 through E-17), Tier 5 (E-18 through E-20). Plus responsive supplement E-R1 through E-R3 if multi-viewport screenshots provided.

The orchestrator EXTRACTS the question text from the PA skill and embeds it directly in each auditor's prompt. Auditors do NOT receive the full PA skill file.

### Language Constraint (embedded in each auditor's prompt)

```
LANGUAGE CONSTRAINT:
Your answers may NOT contain: px, rem, em, %, hex, rgb, rgba, border-radius,
box-shadow, padding, margin, font-size, font-family, line-height, max-width,
min-width, flex, grid, gap, opacity, z-index, overflow, display, position,
or ANY CSS property name.

Use instead: heavy, light, cramped, spacious, jarring, smooth, floating,
grounded, warm, cold, sharp, soft, cluttered, breathing, deliberate,
abandoned, earned, forced, musical, monotone, alive, flat.
```

### Structural Validation
- [ ] All auditor report files exist
- [ ] Each report has a Section 0 (cold look + scroll-through)
- [ ] Each report has responses to all assigned questions
- [ ] No report contains CSS property names (contamination check)

---

## SECTION 5: Weaver (High-Stakes Mode Only)

### When
After ALL auditors have completed. Standard mode: SKIP (orchestrator reads reports directly).

### Agent Specification
- **Model:** Opus
- **Spawning method:** `Task` tool, `subagent_type: "code"`

### Weaver Prompt — Files Loaded

**Receiving principle (5 lines, embedded):**
```
RECEIVING PRINCIPLE:
1. View the screenshots yourself first. Write 3 sentences about what YOU experience.
2. Read all auditor reports. Notice where 3+ agree (convergence) and where 1 disagrees (divergence).
3. Convergence confirms truth. Divergence surfaces subtlety. Both matter.
4. Write creative direction FOR a creator, not corrections FOR a manager.
5. Your verdict is a creative judgment, not a calculation.
```

**Files loaded:**
1. Screenshot paths (1440px cold-look + scroll-through only — Weaver does their own experiential pass)
2. All auditor reports: `{OUTPUT_DIR}/_pa/auditor-*.md`
3. Full conviction brief: `{OUTPUT_DIR}/_tc-brief.md`
4. Builder's reflection: `{OUTPUT_DIR}/_reflection.md`

**What the Weaver does NOT receive:**
- Gate results (mechanical compliance is separate)
- Components CSS, mechanism catalog, identity files (the Weaver is not building)

### Weaver Output

`{OUTPUT_DIR}/_pa/weaver-synthesis.md` containing:

1. **Experience Portrait** (~15 lines) — what the page feels like as a scroll experience
2. **Creative Direction** (~10 lines) — AMPLIFY / RELEASE / DEEPEN / THE GAP
3. **Verdict** (3 lines) — SHIP / REFINE / RETHINK + one-sentence reason

### Structural Validation
- [ ] Weaver file exists
- [ ] Contains all 3 sections (portrait, direction, verdict)
- [ ] Verdict is one of: SHIP, REFINE, RETHINK

---

## SECTION 6: Routing Logic

### The Routing Decision

The orchestrator reads gate results AND either the auditor reports directly (standard) or the Weaver's verdict (high-stakes). The routing is deterministic:

### Standard Mode (2 auditors, no Weaver)

The orchestrator reads both auditor reports and makes the routing decision itself.

**Decision algorithm:**

```
1. Read gate results.
   - Count ESSENTIAL gate failures.
   - Classify failures: MECHANICAL (CSS value wrong) vs STRUCTURAL (layout/zone issue).

2. Read both auditor reports.
   - Extract Section 0 cold-look verdicts from both auditors.
   - Check for convergence: do BOTH auditors describe the same experience?
   - Check for BLOCKING-USABILITY (illegibility, broken navigation).

3. Route:

   IF BLOCKING-USABILITY found by orchestrator scan OR either auditor:
     → Fix usability issue in-window (CSS patch), then re-evaluate

   IF both auditors cold-look = "SHIP" AND 0 essential gate failures:
     → SHIP

   IF both auditors cold-look = "SHIP" AND only MECHANICAL gate failures:
     → Patch CSS values in-window (orchestrator does this directly)
     → Re-run failed gates
     → SHIP

   IF either auditor cold-look = "REFINE" OR auditors describe compositional issues
     (flat, monotonous, disconnected, tired, unrelated, copy-pasted):
     AND gate failures are 0 or MECHANICAL only:
     → REFINE (Window 3)

   IF either auditor cold-look = "REFINE" AND STRUCTURAL gate failures:
     → Patch MECHANICAL failures first (in-window)
     → REFINE (Window 3)

   IF either auditor cold-look = "NO" OR auditors describe fundamental problems
     (wrong feel, fighting content, incoherent):
     → RETHINK (back to Window 1 with different agent, exclude failed metaphor)
```

### High-Stakes Mode (5 auditors + Weaver)

The orchestrator uses the Weaver's verdict directly:

```
   IF Weaver verdict = SHIP AND 0 essential gate failures:
     → SHIP

   IF Weaver verdict = SHIP AND MECHANICAL gate failures only:
     → Patch CSS in-window → re-run gates → SHIP

   IF Weaver verdict = REFINE:
     → Patch MECHANICAL gate failures first (if any)
     → REFINE (Window 3)

   IF Weaver verdict = RETHINK:
     → RETHINK (Window 1 re-entry)
```

### Mechanical CSS Patching (In-Window)

For MECHANICAL gate failures (wrong hex value, padding too large, missing ARIA), the orchestrator patches CSS directly using Edit tool. No agent needed. This is not creative work — it is value correction.

After patching: re-run ONLY the failed gates. If they pass, proceed with the routing decision as if gates passed.

### RETHINK Protocol

If routing to RETHINK:
1. Log the failed metaphor in `{OUTPUT_DIR}/_rethink-log.md`
2. Spawn a NEW Window 1 agent with an additional constraint: "Do NOT use the metaphor `{FAILED_METAPHOR}`. The previous attempt used it and it did not serve the content."
3. Maximum 1 RETHINK. If the second attempt also routes to RETHINK, ship the better artifact.

---

## SECTION 7: Window 3 — REFINE

### Agent Specification
- **Model:** Opus (mandatory — DIFFERENT instance from Window 1 builder)
- **Spawning method:** `Task` tool, `subagent_type: "code"`

### REFINE Builder Prompt — Files Loaded (reading order)

#### 7a. Receiving Principle (5 lines, embedded)

```
RECEIVING PRINCIPLE:
1. Scroll through the page first. Write 2 sentences about what you experience.
2. Read the auditor reports. Note where they agree and where they diverge.
3. Read the previous builder's reflection. What excites you? What tension remains?
4. Read the conviction brief. This is what the page was trying to become.
5. What is the ONE thing you want to do with this page? Start there.
```

#### 7b. The HTML Artifact

**File:** `{OUTPUT_DIR}/output.html`
**Purpose:** The page to refine. Read via the file, not screenshots — the REFINE builder needs to see and modify the actual code.

#### 7c. Auditor Reports

**Standard mode:** Both auditor reports: `{OUTPUT_DIR}/_pa/auditor-A.md`, `{OUTPUT_DIR}/_pa/auditor-B.md`
**High-stakes mode:** Weaver synthesis ONLY: `{OUTPUT_DIR}/_pa/weaver-synthesis.md` (NOT individual reports — volume of 5 reports is too much; the Weaver has synthesized)

**Why auditor reports go to REFINE builder raw (standard mode):** With only 2 reports, the REFINE builder reads them directly without needing Weaver synthesis. The receiving principle's "note where they agree and where they diverge" does the Weaver's work in the REFINE builder's own context.

#### 7d. Builder's Reflection

**File:** `{OUTPUT_DIR}/_reflection.md`
**Purpose:** The previous builder's creative state — conviction, alternatives, unresolved tensions.

#### 7e. Conviction Brief

**File:** `{OUTPUT_DIR}/_tc-brief.md`
**Purpose:** The original creative direction. The metaphor the page was built from.

#### 7f. Raw Content

**File:** `{OUTPUT_DIR}/_content.md`

#### 7g. Vocabulary Files (same as Window 1)

- `design-system/compositional-core/grammar/mechanism-catalog.md`
- `design-system/compositional-core/components/components.css`
- `design-system/compositional-core/identity/prohibitions.md`
- `design-system/compositional-core/vocabulary/tokens.css`

#### 7h. Conventions Brief (same as Window 1, embedded)

Same ~40 lines as Window 1 Section 1g.

### What the REFINE Builder Does

1. Reads materials in receiving-principle order (page first, then auditor reports, then reflection, then brief, then content, then vocabulary)
2. Answers the ONE THING prompt from the receiving principle
3. Builds improved `{OUTPUT_DIR}/output.html` (overwrites)
4. Writes own 3-dimension reflection: `{OUTPUT_DIR}/_reflection-v2.md`

### What the REFINE Builder May Do
- Restructure HTML sections
- Rewrite CSS substantially
- Change layout approaches
- Introduce new mechanisms
- Extend the metaphor's expression

### What the REFINE Builder May NOT Do
- Replace the metaphor (that is RETHINK, not REFINE)
- Violate the world-description
- Ignore the conviction brief's opposition map

### Structural Validation
- [ ] `output.html` exists and was modified (timestamp check or diff)
- [ ] `_reflection-v2.md` exists and is > 50 bytes

---

## SECTION 8: Post-REFINE Gate Check + Ship

### What Happens After REFINE

1. Orchestrator takes NEW screenshots (same protocol as Section 2)
2. Orchestrator runs essential gates on refined artifact
3. If gates pass → SHIP
4. If MECHANICAL failures → patch CSS directly, re-run gates → SHIP
5. If STRUCTURAL failures → log for user, ship with advisory note

### Second PA Cycle

NOT automatic. The orchestrator does NOT run another PA by default after REFINE.

Exception: If the user explicitly requests it, or if the REFINE builder made structural changes so large that the orchestrator judges a re-evaluation is warranted, the orchestrator may run an abbreviated PA (2 auditors, 10 questions each, focused on the specific areas the auditor reports identified).

### Final Ship

When routing to SHIP:
1. Report to user: file path, gate results summary (X/Y essential passed, Z advisory), auditor cold-look verdicts, Weaver verdict (if high-stakes)
2. Kill the HTTP server

---

## Gate Runner Integration Details

### Which JS Functions the Orchestrator Calls

The gate runner code lives at `ephemeral/va-extraction/gate-runner-core.js`. The orchestrator loads this file's functions into Playwright via `browser_run_code`.

**Phase 1: Pre-build (brief verification)**
- `runBriefVerification(briefText)` — checks TC brief has required sections (BV-01 through BV-04)

**Phase 2: Screenshot capture**
- `captureScreenshots(page, htmlUrl, outputDir)` — DPR-safe capture at 3 viewports
- `checkScreenshotQuality(screenshotDir)` — validates no blank/black screenshots (GR-62)

**Phase 3: Gate execution (after build)**
- `runGateRunner(page)` — runs identity, perception, structural gates (~18 gates)
- `runAntiPatternGates(page)` — runs ghost mechanism check, trailing void, etc. (~6 gates)
- `runWave2Gates(page)` — runs WCAG, typography variation, etc. (~8 gates)

**Phase 4: Meta gates**
- `runGateCoverage(allResults)` — GR-48: did all gates produce results?

**Phase 5: Post-weaver (high-stakes only)**
- `checkUsabilityPriority(auditorReports, weaverReport)` — GR-64: usability prioritized if flagged

### Execution Pattern

```javascript
// The orchestrator runs this sequence in Playwright:

// 1. Load gate runner code
await page.evaluate(fs.readFileSync('gate-runner-core.js', 'utf8'));

// 2. Run gates
const results = await page.evaluate(async () => {
  const core = await runGateRunner(page);
  const anti = await runAntiPatternGates(page);
  const w2 = await runWave2Gates(page);
  return { ...core, ...anti, ...w2 };
});

// 3. Meta check
const coverage = runGateCoverage(results);

// 4. Write results
fs.writeFileSync('_gate-results.json', JSON.stringify(results));
```

Note: The orchestrator adapts this pattern based on what functions are available and how the gate runner code is structured. The exact execution will depend on the gate runner's API.

---

## Orchestrator Operation Model

### How the Orchestrator Itself Works

The orchestrator is the agent that runs when the user invokes `/build-page`. It reads the skill file and follows its instructions. It does NOT use `TeamCreate` to spawn itself. It IS the team lead.

**For Window 1 (DERIVE+BUILD):**
- Orchestrator uses `Task` tool to spawn a single Opus subagent
- The subagent prompt is constructed by the orchestrator from the file references above
- Orchestrator waits for the subagent to complete, then validates outputs

**For Screenshots + Gates:**
- Orchestrator does this ITSELF — no subagent needed
- Uses Playwright MCP tools directly for screenshots
- Uses `browser_run_code` or `browser_evaluate` for gate runner JS

**For PA Auditors:**
- Orchestrator uses `Task` tool to spawn 2 (or 5) parallel subagents
- Each auditor is a separate `Task` call — they run in parallel automatically
- Orchestrator waits for all auditors to complete

**For Weaver (high-stakes only):**
- Orchestrator spawns 1 Weaver subagent after all auditors complete

**For Routing:**
- Orchestrator reads all outputs and applies the deterministic routing logic from Section 6
- No subagent needed — routing is mechanical

**For REFINE:**
- Orchestrator spawns 1 REFINE builder subagent via `Task` tool

**For CSS Patching:**
- Orchestrator does this ITSELF using `Edit` tool — no subagent needed

### Subagent Communication

Subagents communicate through FILES ONLY. No `SendMessage` between subagents. The orchestrator is the sole coordinator.

- Window 1 agent writes files → orchestrator validates → orchestrator spawns Window 2 agents
- Auditors write files → orchestrator reads files → orchestrator makes routing decision
- Weaver reads auditor files → writes synthesis file → orchestrator reads synthesis

This is a HUB-AND-SPOKE model, not peer-to-peer. The orchestrator is the hub.

---

## Reference File Manifest

### Files the Skill Points To (with exact paths)

| File | Lines | Who Reads It | When |
|------|-------|-------------|------|
| `~/.claude/skills/tension-composition/SKILL.md` | ~300 | Window 1 agent | Derive + Build |
| `design-system/compositional-core/identity/prohibitions.md` | 419 | Window 1 agent, REFINE builder | Build, Refine |
| `design-system/compositional-core/vocabulary/tokens.css` | 183 | Window 1 agent, REFINE builder | Build, Refine |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | 751 | Window 1 agent, REFINE builder | After Phase 3.5, Refine |
| `design-system/compositional-core/components/components.css` | 944 | Window 1 agent, REFINE builder | Build, Refine |
| `ephemeral/va-extraction/gate-runner-core.js` | 3,185 | Orchestrator (Playwright) | Gate execution |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | 517 | Orchestrator (extracts questions) | Auditor prompt construction |

### Files Created Per Run

| File | Created By | When |
|------|-----------|------|
| `{OUTPUT_DIR}/_content.md` | Orchestrator | Setup |
| `{OUTPUT_DIR}/output.html` | Window 1 agent (overwritten by REFINE) | Build / Refine |
| `{OUTPUT_DIR}/_tc-brief.md` | Window 1 agent | Build |
| `{OUTPUT_DIR}/_reflection.md` | Window 1 agent | Build |
| `{OUTPUT_DIR}/_reflection-v2.md` | REFINE builder | Refine |
| `{OUTPUT_DIR}/_screenshots/` | Orchestrator | Pre-evaluation |
| `{OUTPUT_DIR}/_gate-results.json` | Orchestrator (gate runner) | Evaluation |
| `{OUTPUT_DIR}/_pa/auditor-A.md` | PA Auditor A | Evaluation |
| `{OUTPUT_DIR}/_pa/auditor-B.md` | PA Auditor B | Evaluation |
| `{OUTPUT_DIR}/_pa/weaver-synthesis.md` | Weaver (high-stakes only) | Evaluation |
| `{OUTPUT_DIR}/_rethink-log.md` | Orchestrator (RETHINK only) | Routing |

---

## Non-Negotiables (Appendix)

These are embedded in the skill file as hard constraints:

1. **Container:** 940-960px
2. **Warm palette:** R >= G >= B on every background hex
3. **Perceptible CSS:** >= 15 RGB bg delta, <= 120px stacked gap, <= 96px single margin
4. **Builder model:** Opus always (Window 1, REFINE, Weaver)
5. **PA auditors:** Fresh-eyes, zero build context, perceptual language only
6. **DERIVE+BUILD in one window:** The builder derives their own metaphor
7. **Different builder for REFINE:** Defeats continuation bias
8. **Gates and PA never cross-contaminate:** Auditors never see gate results; gate runner never sees auditor reports
9. **Structural validation only:** Orchestrator checks "did you produce the thing" not "was the thing good"
10. **Maximum 1 REFINE cycle by default:** User escalates to 2 if needed

---

## Comparison: Old vs New

| Dimension | Old (/build-page v1) | New (/build-page v2) |
|-----------|---------------------|---------------------|
| Windows | 7 (setup, TC, build, gates, PA, weaver, refine) | 3 (derive+build, evaluate, refine) |
| Agent count | ~19 typical path | 5-7 typical path |
| Gate count | 57 | ~28 essential + ~7 advisory |
| PA auditors | 9 (all runs) | 2 standard / 5 high-stakes |
| Weaver | Always | High-stakes only |
| TC as separate window | Yes | No — combined with build |
| Exploration loading | 3-4 files, 6-8K lines | None by default |
| Receiving protocol | 524-line document | 5 lines embedded per window |
| Reflection dimensions | 6 | 3 |
| Multi-cycle REFINE | Max 3 automatic | Max 1 default, 2 by escalation |
| Observer agent | Spawned first, runs full lifecycle | Eliminated (gates cover compliance) |
| Two-pass build | Pass A (structure) + Pass B (enrichment) | Single pass (builder handles both) |
| Brief sections | 6 + exploration rec | 5 (no creative conditions, no exploration rec) |
| Conviction brief author | TC agent (separate from builder) | Builder writes for themselves |
| Skill file size | 110 lines (mostly pointers) | ~270 lines (complete orchestrator script) |
| Reference files | 16+ artifact files in va-extraction/ | 7 files (4 vocabulary + TC skill + gate runner JS + PA skill) |

---

## What This Architecture Does NOT Specify

These are intentionally left to the implementation phase (Task #6):

1. **The simplified TC skill itself** (~300 lines) — that is Task #5's output
2. **The exact gate runner code modifications** — which functions to keep/strip/modify
3. **The conventions brief's final text** — the ~40 lines of mechanical constraints
4. **Error handling** — what happens when Playwright fails, when an agent crashes, when the gate runner JS has errors
5. **User-facing output format** — what the orchestrator reports to the user at each stage
6. **Logging** — what gets logged where for debugging

---

## Implementation Readiness Checklist

Before the skill can be implemented (Task #6), these must be complete:

- [ ] TC skill simplified to ~300 lines (Task #5)
- [ ] Gate audit complete — which ~28 gates survive (Task #2)
- [ ] Reference file map finalized (Task #4)
- [ ] Conventions brief (~40 lines) drafted
- [ ] Gate runner functions identified for keep/strip
- [ ] PA question extraction method verified (can orchestrator extract from PA skill file?)
