# 04 -- Orchestrator Architecture Research Extraction

**Agent:** orchestrator-researcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** #4 / #22
**Sources:** PV2-FLAGSHIP-VARIANT.md (2,544 lines), pipeline-v2-architecture.md (625 lines), pv2-user-experience.md, pv2-comms-protocol.md, 07-INPUT-SPEC.md, 08-VERIFICATION-SPEC.md, agent-team-lessons.md, MEMORY.md, existing skill files (tension-composition, perceptual-auditing)

---

## EXECUTIVE SUMMARY

This document extracts the EXACT orchestration sequence for the `/build-page` command. It covers: skill file structure, step-by-step orchestration (spawn builder -> gates -> screenshots -> PA -> weaver -> fix cycle -> success bar), agent model selection, Playwright scheduling, file naming conventions, and all practical details needed to write the master execution prompt.

**Architecture chosen: FAT CORE** (single Opus plans + builds, no separate TC planner for Flagship). This is the ALWAYS FLAGSHIP variant -- no tier routing, every page gets maximum intensity.

---

## 1. SKILL FILE STRUCTURE -- How Claude Code Recognizes `/build-page`

### 1.1 File Location and Format

Claude Code recognizes skills via YAML frontmatter in `~/.claude/skills/[name]/SKILL.md`.

**Required structure:**
```
~/.claude/skills/build-page/SKILL.md
```

**YAML frontmatter (from existing skills as template):**
```yaml
---
name: build-page
description: >
  Takes a content markdown file and produces a fully designed HTML page
  using the KortAI design system. Orchestrates: content analysis, Opus
  builder with conventions brief, programmatic gate verification via
  Playwright, perceptual audit with fresh-eyes agents, and fix cycles.
  Input = any markdown file. Output = self-contained .html file.
  Trigger phrases: "build a page", "build page", "run the pipeline",
  "create a design system page", "turn this into a designed page",
  "/build-page".
---
```

**How Claude Code invocation works:**
1. User types `/build-page content.md` or uses a trigger phrase
2. Claude Code scans `~/.claude/skills/` for matching SKILL.md files
3. The `name` field in YAML frontmatter is the slash command name
4. The `description` field's trigger phrases help Claude Code match natural language
5. The SKILL.md body (after frontmatter) is loaded as the prompt

**Existing pattern observed:**
- `tension-composition/SKILL.md`: name `tension-composition`, ~1,932 lines, YAML frontmatter + body
- `perceptual-auditing/SKILL.md`: name (implicit), ~847 lines, YAML frontmatter + body
- Both use `---` delimited YAML frontmatter with `name` and `description` fields

### 1.2 Trigger Phrases

From pv2-user-experience.md:
- "build a page"
- "run the pipeline"
- "turn this into a designed page"
- "create a design system page"
- "pipeline v2"
- `/build-page` (direct invocation)
- `/build-page path/to/file.md` (with argument)

### 1.3 Estimated Skill File Size

From pipeline-v2-architecture.md Section 3: ~350 lines for the orchestrator.
From PV2-FLAGSHIP-VARIANT.md new artifacts section: ~205 lines.

**Reconciliation:** The ALWAYS FLAGSHIP variant simplifies significantly (no tier routing, no classification logic). The skill file should be ~200-300 lines -- it is a THIN orchestrator that routes to files and spawns agents, not a content-containing document.

---

## 2. STEP-BY-STEP ORCHESTRATION SEQUENCE

### Overview (Bird's Eye)

```
USER: /build-page content.md
  |
  v
STEP 0: INTAKE (read content, validate)              ~10 sec
  |
  v
STEP 1: SPAWN OPUS BUILDER                            ~90-150 min
  |    (reads content + conventions brief + 4 ref files)
  |    (phases A-D: understand, plan, build, self-verify)
  |
  v
STEP 2: GATE RUNNER                                    ~15 sec
  |    (serve HTML, run 15 programmatic gates via Playwright)
  |
  v
STEP 3: SCREENSHOT CAPTURE                             ~5 min
  |    (3 viewports, scroll-through, animations disabled)
  |
  v
STEP 4: PA DEPLOYMENT                                  ~25 min
  |    (9 Opus auditors parallel, 56 questions total)
  |
  v
STEP 5: WEAVER SYNTHESIS                               ~10 min
  |    (aggregate 9 reports, PA-05 score, Tier 5 score, verdict)
  |
  v
STEP 6: FIX CYCLE (if needed)                          ~15-20 min per cycle
  |    (same builder receives feedback, fixes, re-gate, re-PA)
  |    (max 3 cycles)
  |
  v
STEP 7: SUCCESS BAR CHECK                              ~1 min
  |    PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations
  |
  v
OUTPUT: output.html + _pa-report.md + _build-log.md
```

---

### STEP 0: INTAKE

**What happens:**
1. Orchestrator receives `/build-page path/to/content.md`
2. If path provided as argument: read file, validate it exists
3. If no path: prompt user for content source (paste / file path / URL / conversation)
4. Read content file completely
5. No tier classification (ALWAYS FLAGSHIP -- hardcoded)

**From pv2-user-experience.md:**
- If user provides content WITH command: skip intake prompt entirely
- If user provides just `/build-page`: show content source menu
- Auto-detect: argument after `/build-page` is treated as file path

**Output:** Content markdown loaded into memory, output path determined.

**Output path convention:** `ephemeral/pages/[slug].html` (default) or user-specified via `--output` flag.

---

### STEP 1: SPAWN OPUS BUILDER

**Source:** PV2-FLAGSHIP-VARIANT.md Fat Core Architecture section (lines 1373-1588) + 07-INPUT-SPEC.md (full 689 lines)

#### 1.1 Agent Model

**ALWAYS Opus.** No Sonnet for builders. This is a non-negotiable finding:
- CD-006 (39/40) built by Opus
- Flagship (1.5/4) built by Sonnet
- "Sonnet complies meticulously; Opus complies AND creates beyond constraints" (MEMORY.md)
- Report 31: single Opus CAN handle Flagship complexity with 75-85% confidence

#### 1.2 Exact Files the Builder Reads

From 07-INPUT-SPEC.md Section 1.1 (definitive manifest):

| # | File | Path | Lines | Role | When Read |
|---|------|------|-------|------|-----------|
| 1 | **Content** | `[user-provided].md` | variable | THE MATERIAL | Phase A (first, completely) |
| 2 | **Conventions Brief** | `_conventions-brief.md` (generated or permanent) | ~225 | PRIMARY GUIDANCE | All phases |
| 3 | **tokens.css** | `design-system/compositional-core/vocabulary/tokens.css` | 174 | CSS VALUES | Phase C (building) |
| 4 | **prohibitions.md** | `design-system/compositional-core/identity/prohibitions.md` | 353 | SOUL CONSTRAINTS | Phase A (early) |
| 5 | **mechanism-catalog.md** | `design-system/compositional-core/grammar/mechanism-catalog.md` | ~870 | VOCABULARY | Phase B+C |
| 6 | **merged-components.css** | `design-system/compositional-core/components/merged-components.css` | ~500 | COMPONENT LIBRARY | Phase C |

**Total non-content input:** ~2,120 lines
**Effective instruction volume:** ~315 lines (conventions brief + soul rules only)

**What the builder does NOT read:**
- TC SKILL.md (1,932 lines -- builder IS the creative agent)
- PA SKILL.md (847 lines -- separate auditors handle this)
- Case studies (4,579 lines -- template gravity risk)
- RESEARCH-SYNTHESIS.md (383 lines -- already distilled)
- R1-R5 research files (3,721 lines -- already distilled)
- PV2-FLAGSHIP-VARIANT.md (architecture doc, not builder spec)
- operational-recipe.md (Fat Core eliminates the recipe; conventions brief replaces it)

#### 1.3 Builder Spawn Prompt (Approximate)

From 07-INPUT-SPEC.md Section 10.2:

```
You are building a page for the KortAI design system.

Read the content file at: [path/to/content.md]
Read the conventions brief at: [path/to/_conventions-brief.md]

Reference files (consult as needed during build):
- design-system/compositional-core/vocabulary/tokens.css
- design-system/compositional-core/identity/prohibitions.md
- design-system/compositional-core/grammar/mechanism-catalog.md
- design-system/compositional-core/components/merged-components.css

Follow the conventions brief. It contains your constraints, principles,
self-check protocol, and process phases.

Write output.html, _build-log.md, and _cascade-value-table.md to:
[output-directory]/
```

**Total prompt overhead:** ~15 lines of orchestrator prompt + 225 lines conventions brief + 6 file reads.

#### 1.4 Creative Authority Framing

From PV2-FLAGSHIP-VARIANT.md lines 848-855 + 07-INPUT-SPEC.md Section 3:

**The Creative Authority Clause (MUST be in conventions brief Section 7):**
> "You may override ANY non-soul value if you log the override with compositional reasoning. Soul values (border-radius: 0, box-shadow: none, container 960px, font trinity) are LOCKED. Everything else is a SUGGESTION that you can improve upon."

**Why this matters:**
- Without this clause: recipe ceiling = 3/4 (Report 85)
- With this clause: convention ceiling = 4/4+ possible
- "DO NOT deviate from the instance values without planner approval" was identified as THE single sentence that is the 3/4 ceiling

**Tone spectrum (from 07-INPUT-SPEC.md Section 3.1):**
- Section 1 (Soul): ABSOLUTE COMMAND
- Section 2 (Thresholds): BINARY SPECIFICATION
- Section 3 (Anti-scale): PHILOSOPHICAL FRAME
- Sections 4-5 (Multi-coherence, Fractal): CREATIVE CHALLENGE
- Section 6 (Memory): PROFESSIONAL DISCIPLINE
- Section 7 (Creative authority): EMPOWERMENT
- Section 8 (Anti-patterns): WARNING FROM EXPERIENCE
- Sections 9-10 (Deliverables, Process): PROFESSIONAL EXPECTATION

#### 1.5 Builder Process Phases

From 07-INPUT-SPEC.md Section 10 + PV2-FLAGSHIP-VARIANT.md Fat Core:

| Phase | Duration | What Happens |
|-------|----------|-------------|
| **A: Content Understanding** | 10-20 min | Read content FIRST, completely. Identify zones, tensions, metaphor. |
| **B: Planning** | 10-20 min | Produce Transition Table + Fractal Echo Table in build log BEFORE any CSS |
| **C: Building** | 60-120 min | HTML+CSS. Consult reference files. Self-check at 4 phase checkpoints. Midpoint pause. |
| **D: Self-Verification** | 10-15 min | Cascade value table. Complete 8-question self-check. Final scroll + assess. |

**Phase C sub-checkpoints (binary, from 07-INPUT-SPEC.md Section 7.1):**
- After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 10 component classes?
- After zone backgrounds: All adjacent zone bg deltas >= 15 RGB?
- After borders: >= 1 structural border-left (3px+)? >= 2 distinct border weights?
- After typography: heading-to-meta ratio >= 3:1? Adjacent zone font-size delta >= 2px?

#### 1.6 Builder Deliverables

3 output files:
1. `output.html` -- the page
2. `_build-log.md` -- transition table (BEFORE), fractal echo table (BEFORE), override log (DURING), midpoint observation (DURING), final self-assessment (AFTER)
3. `_cascade-value-table.md` -- computed CSS values at every section boundary (background, font-size, font-weight, letter-spacing, border-left, padding, margin)

---

### STEP 2: GATE RUNNER

**Source:** 08-VERIFICATION-SPEC.md + PV2-FLAGSHIP-VARIANT.md Wave 2 section

#### 2.1 How Gates Run Programmatically

**Method:** Serve HTML via HTTP, run JavaScript via Playwright `page.evaluate()`.

**Pre-requisites:**
1. Start HTTP server: `python3 -m http.server [port]` (or similar) serving the output directory
2. Navigate Playwright to `http://localhost:[port]/output.html`
3. Wait for `document.fonts.ready` (CRITICAL -- fonts must load before measuring)
4. Disable animations: inject `* { animation: none !important; transition: none !important; opacity: 1 !important; }`

**Gate execution:** Each gate is a JavaScript function that:
1. Queries DOM elements (`document.querySelectorAll`, `getComputedStyle`)
2. Measures CSS property values
3. Compares against thresholds
4. Returns structured PASS/FAIL with measured values

#### 2.2 The 21-Gate Registry (Flagship Thresholds)

**TIER A: COMPOSITION-CRITICAL (12 gates)**

| Gate | What It Checks | Flagship Threshold | Method |
|------|---------------|-------------------|--------|
| SC-01 | Container width | 940-960px | `getComputedStyle(container).maxWidth` |
| SC-09 | Background delta | >= 15 RGB max-channel between adjacent zones | Parse computed bg-color per zone, compute channel deltas |
| SC-10 | Stacked gap | <= 108px total at section boundaries | Sum margin-bottom + padding-bottom + border + padding-top + margin-top |
| SC-11 | Typography zones | display-body >= 10px; body-detail >= 2px; 3+ distinct zones | Measure computed font-size of all headings/body/detail |
| SC-12 | Zone count | 3-5 zones | Count elements with zone class |
| SC-13 | Multi-coherence | >= 3 of 6 channels shift at every zone boundary, avg >= 4 | At each boundary: measure bg, font-size, font-weight, letter-spacing, border-left, padding |
| SC-14 | Sub-perceptual prevention | No letter-spacing < 0.02em; no intra-zone bg deltas 1-14 RGB | Scan all computed letter-spacing + adjacent section backgrounds |
| SC-15 | Border presence | >= 3 distinct border configurations | Count unique border-left declarations |
| DG-1 | Fractal echo table | 5 rows present, CSS evidence non-empty, pattern direction consistent | Parse `_build-log.md` for table |
| DG-2 | Cascade value table | Computed CSS at every boundary; cross-validate vs SC-13 (discrepancy < 5 RGB / 1px) | Parse `_cascade-value-table.md`, compare to measured |
| SC-13B | Channel shift direction (ADVISORY) | >= 50% boundaries shift in same semantic direction | Analyze shift directions |
| SC-16 | Monotonic progression (ADVISORY) | >= 1 CSS property progresses monotonically across 3+ zones | Check property progression |

**TIER B: IDENTITY ENFORCEMENT (7 gates)**

| Gate | Flagship Threshold |
|------|-------------------|
| SC-02 | border-radius: 0, box-shadow: none on ALL elements |
| SC-03 | Only Instrument Serif, Inter, JetBrains Mono |
| SC-04 | R >= G >= B on ALL backgrounds |
| SC-05 | No rgb(0,0,0) or rgb(255,255,255) |
| SC-06 | >= 5 ARIA landmarks |
| SC-07 | Skip link present |
| SC-08 | >= 8 component library classes |

**TIER C: BEHAVIORAL (2 gates)**

| Gate | Method |
|------|--------|
| Metaphor independence | Verify via build log timestamps |
| Metaphor structural | Fresh-eyes check (STRUCTURAL vs ANNOUNCED) |

#### 2.3 Gate Failure Output Format

From PV2-FLAGSHIP-VARIANT.md lines 1143-1167:

```json
{
  "gate": "SC-09",
  "status": "FAIL",
  "measured": { "zone1_bg": "#FAF5ED", "zone2_bg": "#F9F3EA", "delta_rgb": 8 },
  "threshold": { "min_delta": 15 },
  "fix": {
    "instruction": "Darken zone 2 background",
    "css": ".zone-2 { background: #F0EBE3; }",
    "new_delta": 19,
    "alternative": ".zone-2 { background: #EDE5D9; } /* delta=24 */",
    "reference": "tokens.css line 12"
  }
}
```

Every gate failure includes: measured values, threshold, specific CSS fix, alternative fix, and reference file.

#### 2.4 Gate Failure Protocol

From 08-VERIFICATION-SPEC.md Section 1.3:
- Max 2 re-runs per micro-gate (during build)
- Max 3 fix cycles on full gate run (post-build)
- After 3 failed cycles: ESCALATE to user (do not loop)

---

### STEP 3: SCREENSHOT CAPTURE PROTOCOL

**Source:** 08-VERIFICATION-SPEC.md Section 3.4 + MEMORY.md screenshot pre-capture pattern

#### 3.1 The Pre-Capture Pattern

**Team lead takes ALL screenshots BEFORE spawning PA auditors.** This is the proven pattern from Mode 4 PA (102 screenshots, 9 agents parallel, zero Playwright contention).

#### 3.2 Exact Protocol

```
1. Set viewport to 1440px width
2. Disable animations:
   page.evaluate(() => {
     const style = document.createElement('style');
     style.textContent = '* { animation: none !important; transition: none !important; opacity: 1 !important; }';
     document.head.appendChild(style);
   });
3. Wait for document.fonts.ready
4. Take full-page cold-look screenshot
5. Scroll through at 80% viewport-height step, capture at each position
   (typically 5-15 screenshots depending on page length)
6. Repeat steps 1-5 at 1024px viewport width
7. Repeat steps 1-5 at 768px viewport width
8. Save all screenshots to temp directory with naming convention:
   screenshot-{viewport}px-{index}.png
   e.g., screenshot-1440px-00-cold.png
         screenshot-1440px-01-scroll.png
         screenshot-768px-00-cold.png
```

**Total: ~36-102 screenshots** (depending on page length, 3 viewports)

#### 3.3 Why Pre-Capture

From agent-team-lessons.md:
- "Screenshot pre-capture pattern: Team lead takes ALL screenshots BEFORE spawning auditors. Auditors read saved images via Read tool. Eliminates Playwright contention entirely, enables 9+ parallel auditors."
- 4+ concurrent Playwright agents = severe contention
- Sequential Playwright scheduling eliminates contention

---

### STEP 4: PA DEPLOYMENT -- 9 Auditors

**Source:** 08-VERIFICATION-SPEC.md Sections 2-3

#### 4.1 Team Architecture

- **9 Opus auditors** (fresh-eyes, zero build context)
- **1 Opus weaver** (synthesis)
- All auditors run in PARALLEL (enabled by pre-captured screenshots)
- Each auditor reads screenshots via Read tool (no Playwright)

#### 4.2 Question Assignments (56 total: 48 standard + 8 Tier 5)

| Auditor | Role | Standard Questions | Tier 5 Addition | Total |
|---------|------|-------------------|-----------------|-------|
| **A** | Impression+Emotion | PA-01, 04, 05, 18, 19, 20, 45 | PA-65 (music), PA-67 (novelty) | 9 |
| **B** | Readability+Typography | PA-02, 06, 07, 08, 29 | (none) | 5 |
| **C** | Spatial+Proportion | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53 | PA-64 (restraint), PA-66 (negative space) | 13 |
| **D** | Flow+Pacing | PA-12, 13, 34, 35, 36 | PA-62 (transitions) | 6 |
| **E** | Grid+Layout | PA-14, 15, 37, 38, 39 | PA-63 (fractal) | 6 |
| **F** | Consistency+Rhythm | PA-16, 17, 40, 41 | PA-60 (design moments), PA-61 (multi-voice) | 6 |
| **G** | Metaphor+Ideology | PA-42, 43, 44 | (none) | 3 |
| **H** | Responsive | PA-21, 22, 23, 46, 47 | (none) | 5 |
| **I** | Adversarial | PA-26, 27, 28, 48 | (none) | 4 |

#### 4.3 Auditor Prompt Template

Each auditor receives:
1. Their assigned questions (from the table above)
2. Screenshot file paths (to read via Read tool)
3. Gate diagnostic summary (from Step 2) as ORIENTATION context, not instructions
4. Zero build context (fresh-eyes principle)
5. CSS vocabulary hard block (describe in perceptual language, not CSS terms)

**Approximate auditor spawn prompt:**

```
You are a perceptual auditor for a design system page. You have ZERO
knowledge of how this page was built, what tools were used, or what
the builder intended.

Your assigned questions: [list of PA-XX questions with full text]

Screenshots are saved at:
  [list of screenshot file paths]

Read each screenshot. For each question, provide:
- Your answer (YES/NO/PARTIALLY with evidence)
- What you SEE (perceptual language only -- no CSS vocabulary)
- Severity: WOULD-SHIP / WOULD-NOT-SHIP / CONDITIONAL

Gate diagnostic context (for orientation, not conclusion):
[paste gate diagnostic summary]

LANGUAGE RULE: Describe what you SEE, not what the CSS does.
  GOOD: "The background shifts from warm cream to cooler gray"
  BAD: "The background-color changes from #FEF9F5 to #F0EBE3"

Write your report to: [output-path]/pa-auditor-[letter].md
```

#### 4.4 The 8 Tier 5 Questions (Flagship-Specific)

From 08-VERIFICATION-SPEC.md Section 2.2:

| ID | Question | What It Detects |
|----|----------|----------------|
| PA-60 | Can you identify at least 3 distinct "design moments"? | Design moment density |
| PA-61 | Do different visual properties have independent rhythms? | Multi-voice composition |
| PA-62 | At a section transition, how many properties change? Both dramatic AND quiet? | Transition sophistication |
| PA-63 | Zoom into one component -- does it mirror page-level design? | Fractal coherence |
| PA-64 | Is any section DELIBERATELY plain to make surrounding richness noticeable? | Restraint as expression |
| PA-65 | If this page were music: single instrument, choir, or ensemble? | Multi-voice detection |
| PA-66 | Do different gaps between sections feel different from each other? | Negative space as composition |
| PA-67 | Does the page feel inventive -- not just well-executed? What is novel? | Creative surprise |

**Scoring:** Each YES (with evidence) or NO. 6-8 YES = Flagship COMPOSED. 4-5 = SOPHISTICATED. 0-3 = NOT Flagship.

**Constraint:** Tier 5 questions asked ONLY if PA-05 >= 3/4. If PA-05 < 3/4, skip Tier 5.

---

### STEP 5: WEAVER SYNTHESIS

**Source:** 08-VERIFICATION-SPEC.md Section 4 + agent-team-lessons.md (weaver role)

#### 5.1 Weaver Role

The weaver receives all 9 auditor reports and produces:
1. **PA-05 score** (4 sub-criteria: DESIGNED, COHERENT, PROPORTIONATE, POLISHED)
2. **Tier 5 score** (8 YES/NO questions aggregated)
3. **Top-3 issues** ranked by severity (WOULD-NOT-SHIP first)
4. **Compositional criteria checklist** (soul, voids, metaphor, rhythm, multi-coherence, scale coverage)
5. **VERDICT:** SHIP / SHIP WITH RESERVATION / FIX / REBUILD / ESCALATE

#### 5.2 Weaver Spawn Prompt (Approximate)

```
You are the PA weaver. You receive reports from 9 independent auditors
who evaluated a design system page from screenshots only.

Read all 9 reports:
  [list of pa-auditor-A.md through pa-auditor-I.md paths]

Produce a synthesis with:
1. PA-05 SCORE: Rate each sub-criterion 0-4
   - DESIGNED (does it feel intentionally crafted?)
   - COHERENT (do elements work together?)
   - PROPORTIONATE (is visual weight distributed well?)
   - POLISHED (are details refined?)
   Average = PA-05 score (to 0.5 precision)

2. TIER 5 SCORE: Count YES answers from PA-60 through PA-67
   (only if PA-05 >= 3.0)

3. TOP-3 ISSUES: The 3 most severe findings across all auditors
   Each with: auditor source, question, severity, exact quote

4. COMPOSITIONAL CRITERIA:
   - Zero soul violations: [MET/FAILED]
   - Zero void patterns: [MET/FAILED]
   - Metaphor STRUCTURAL: [MET/FAILED/N/A]
   - Rhythm not metronomic: [MET/FAILED]
   - Multi-coherence verified: [MET/FAILED]
   - Scale coverage verified: [MET/FAILED]

5. VERDICT: One of:
   - SHIP (PA-05 >= 3.5 AND Tier 5 >= 6/8 AND all criteria MET)
   - SHIP WITH RESERVATION (PA-05 >= 3.5 AND Tier 5 4-5/8)
   - FIX (PA-05 3.0-3.4 or criteria FAILED)
   - REBUILD (PA-05 < 3.0)
   - ESCALATE (3 fix cycles exhausted)

Write synthesis to: [output-path]/_pa-report.md
```

---

### STEP 6: FIX CYCLE

**Source:** 08-VERIFICATION-SPEC.md Section 5 + PV2-FLAGSHIP-VARIANT.md Wave 3

#### 6.1 Same Builder Receives Feedback

**Non-negotiable: the SAME Opus agent that built the page performs fixes.** Reasons:
- Compositional memory preserved (builder knows WHY it made decisions)
- Remediation evidence: PA-05 went from 1.5 to 2.5 with same agent
- Metaphor continuity (new builder needs 15-20 min to reload context)

#### 6.2 Feedback Format for Builder

From 08-VERIFICATION-SPEC.md Section 5.3:

```markdown
## FIX INSTRUCTIONS (Cycle N)

### Gate Failures (structured JSON)
[gate-results.json with measured values, thresholds, specific CSS fixes]

### PA Top-3 Issues (ranked by severity)
1. [WOULD-NOT-SHIP] PA-XX: "[auditor's exact words]"
   - WHERE: [scroll position / element description]
   - WHAT: [perceptual problem in plain language]
   - DIRECTION: [what to change -- e.g., "increase visual weight in middle third"]

### Tier 5 Gaps (which questions answered NO)
- PA-6N: NO -- "[auditor's reason]"
  IMPLICATION: [what compositional property is missing]

### DO NOT TOUCH (protected elements)
- [List of elements that passed well -- do not regress]
```

**Key distinction:** Gate failures get SPECIFIC CSS recipes. PA issues get DIRECTION feedback (not prescription).

#### 6.3 Fix Cycle Structure

| Cycle | PA Auditors | Questions | Gate Run | Time |
|-------|-------------|-----------|----------|------|
| **1 (initial)** | 9 Opus | All 56 | Full 21 | ~45 min |
| **2 (targeted)** | 2 Opus (A + C) | Focused + all 8 Tier 5 | Full 21 | ~20 min |
| **3 (final)** | 2 Opus (A + C) | Focused + Tier 5 | Full 21 | ~20 min |

After Cycle 3 fails: ESCALATE to user. Do NOT loop beyond 3 cycles.

#### 6.4 Convention Escalation Path

If PA-05 = exactly 3.0/4 after 3 cycles (COMPOSED but not DESIGNED):
1. Re-engage TC for metaphor-driven adaptation
2. Give builder convention-based creative freedom for 2nd pass (remove ceiling constraints)
3. Run fresh Mode 4 PA (new auditors, no memory)

---

### STEP 7: SUCCESS BAR

**Source:** 08-VERIFICATION-SPEC.md Section 4

#### 7.1 Two-Score Verdict

| Score | Pass Threshold | What It Measures |
|-------|----------------|------------------|
| **PA-05** | >= 3.5/4 | "Is this DESIGNED?" |
| **Tier 5** | >= 6/8 | "Is this Flagship-tier?" |

Plus mandatory criteria:
- Zero soul violations (SC-01 through SC-05 all PASS)
- Zero void patterns (PA-50 through PA-53 all PASS)
- Metaphor is STRUCTURAL (not ANNOUNCED or LABELED)
- Rhythm is not metronomic (PA-17 + PA-41 PASS)
- Multi-coherence verified (SC-13 PASS + PA-61 agreement)
- Scale coverage verified (DG-1 valid + PA-63 agreement)

#### 7.2 Full Verdict Matrix

| PA-05 | Tier 5 | Criteria | Verdict |
|-------|--------|----------|---------|
| >= 3.5 | >= 6/8 | All MET | **SHIP** |
| >= 3.5 | 4-5/8 | All MET | **SHIP WITH RESERVATION** |
| >= 3.5 | 0-3/8 | All MET | **NOT FLAGSHIP** (rescope) |
| 3.0-3.4 | any | any | **FIX CYCLE** |
| < 3.0 | N/A | N/A | **REBUILD** |

---

## 3. PRACTICAL DETAILS

### 3.1 Agent Model Selection

| Role | Model | Count | Why |
|------|-------|-------|-----|
| Orchestrator | Lead agent (whatever invokes skill) | 1 | Thin routing, no building |
| Builder | **Opus** (ALWAYS) | 1 | Creative composition requires Opus fluency |
| Gate runner | Orchestrator (Playwright) | 0 (same agent) | 15-second check, no separate agent needed |
| PA Auditors | **Opus** | 9 | Compositional judgment, Tier 5 questions |
| PA Weaver | **Opus** | 1 | Synthesis requires nuanced judgment |
| Fix cycle | **Same builder** | 0 (reuse) | Compositional memory preservation |

**Total agents spawned:** 1 builder + 9 PA auditors + 1 weaver = 11 agents
**Total for 1 fix cycle:** +2 re-check auditors = 13 agents
**Maximum (3 fix cycles):** 1 + 9 + 1 + (2 * 3) = 17 agent spawns

### 3.2 Playwright Scheduling

From MEMORY.md + agent-team-lessons.md:
- **Sequential Playwright operations eliminate contention** (confirmed across 6+ teams)
- 2 concurrent Playwright agents: usually works
- 4+ concurrent: severe contention, agents fall back to source code analysis
- **HTTP server MUST be started before agents need Playwright**

**Practical scheduling:**
1. Builder writes output.html (no Playwright needed)
2. Orchestrator starts HTTP server
3. Orchestrator runs gate runner via Playwright (SEQUENTIAL, ~15 sec)
4. Orchestrator captures screenshots via Playwright (SEQUENTIAL, ~5 min)
5. Orchestrator spawns 9 PA auditors (ALL PARALLEL, NO Playwright -- they read saved screenshots)
6. Weaver synthesis (no Playwright)
7. If fix cycle: builder fixes (no Playwright), then repeat steps 3-6

**Zero concurrent Playwright usage.** All Playwright operations done by the orchestrator/lead sequentially. PA auditors never touch Playwright.

### 3.3 File Naming Conventions

**Build outputs:**
```
[output-dir]/
  output.html                          # The page
  _build-log.md                        # Builder's reasoning trace
  _cascade-value-table.md              # Computed CSS at boundaries
```

**Gate runner outputs:**
```
[output-dir]/_verification/
  gate-results.json                    # Structured PASS/FAIL per gate
  gate-diagnostic.md                   # Human-readable summary for PA context
```

**Screenshot outputs:**
```
[output-dir]/_screenshots/
  screenshot-1440px-00-cold.png
  screenshot-1440px-01-scroll.png
  screenshot-1440px-02-scroll.png
  ...
  screenshot-1024px-00-cold.png
  ...
  screenshot-768px-00-cold.png
  ...
```

**PA outputs:**
```
[output-dir]/_pa/
  pa-auditor-A.md                      # Impression+Emotion auditor
  pa-auditor-B.md                      # Readability+Typography
  pa-auditor-C.md                      # Spatial+Proportion
  pa-auditor-D.md                      # Flow+Pacing
  pa-auditor-E.md                      # Grid+Layout
  pa-auditor-F.md                      # Consistency+Rhythm
  pa-auditor-G.md                      # Metaphor+Ideology
  pa-auditor-H.md                      # Responsive
  pa-auditor-I.md                      # Adversarial
  _pa-report.md                        # Weaver synthesis (ALSO copied to output-dir/)
```

**Fix cycle outputs:**
```
[output-dir]/_fixes/
  fix-instructions-cycle-1.md
  fix-instructions-cycle-2.md
  fix-instructions-cycle-3.md
```

### 3.4 Timing Estimates

| Phase | Duration | Cumulative |
|-------|----------|-----------|
| Intake | ~10 sec | ~10 sec |
| Builder (Phases A-D) | 90-150 min | 90-150 min |
| Gate runner | ~15 sec | ~90 min |
| Screenshot capture | ~5 min | ~95 min |
| 9 PA auditors (parallel) | ~25 min | ~120 min |
| Weaver synthesis | ~10 min | ~130 min |
| **Total (no fix cycles)** | **~130-185 min** | |
| Per fix cycle | ~35-40 min | +35-40 min each |
| **Total (1 fix cycle)** | **~165-225 min** | |
| **Total (3 fix cycles)** | **~235-305 min** | |

### 3.5 Cost Estimate

From PV2-FLAGSHIP-VARIANT.md: ~$15-40/page (Fat Core architecture).

---

## 4. COMMUNICATION PROTOCOL

**Source:** pv2-comms-protocol.md

### 4.1 Fat Core Simplification

Fat Core eliminates most inter-agent communication. The single Opus builder has no one to message during its build. Communication happens only:
- Orchestrator -> Builder: spawn prompt + fix instructions
- PA Auditors -> Weaver: via file artifacts (pa-auditor-X.md)
- Weaver -> Orchestrator: via _pa-report.md

### 4.2 File-Based Communication

From pv2-comms-protocol.md: "A message is a TASK OUTPUT, not an afterthought. Every message type produces a FILE ARTIFACT that the next agent reads."

- Builder produces output files -> orchestrator reads them
- Gate runner produces gate-results.json -> builder reads on fix
- PA auditors produce individual reports -> weaver reads them
- Weaver produces _pa-report.md -> orchestrator reads verdict

**SendMessage is notification only.** The file is the substance.

### 4.3 Message Types (Simplified for Fat Core)

Only 3 of 5 message types apply:
1. **CHECKPOINT** (builder -> orchestrator): Not needed in Fat Core (orchestrator monitors file output)
2. **FIX** (orchestrator -> builder): Structured fix instructions with measured values + CSS
3. **ESCALATE** (any -> user): Gate fails after 3 cycles

---

## 5. KEY ARCHITECTURAL DECISIONS

### 5.1 Why Fat Core Over Linear Pipeline

| Property | Linear Pipeline | Fat Core (CHOSEN) |
|----------|----------------|-------------------|
| Boundaries | 11 (4 destructive) | 7 (0 destructive) |
| Builder input | 1,300 lines | ~2,120 (225 primary + ref) |
| Intelligence survival | ~25% | ~60-70% (projected) |
| Recipe ceiling | 3/4 | 4/4 possible |
| Cost/page | ~$20-60 | ~$15-40 |
| Build time | 160-270 min | 120-210 min |

### 5.2 Why ALWAYS FLAGSHIP

From PV2-FLAGSHIP-VARIANT.md line 278: "No tier routing. No classification. Every page gets maximum intensity."

Simplification audit (Report 15): removes ~220 lines tier-conditional from TC, ~15 lines from PA, ~15 lines from CLAUDE.md. Eliminates 6 decisions. Adds 0 decisions. Pipeline becomes a straight line.

### 5.3 Why 9 PA Auditors (Not Fewer)

From MEMORY.md: "9 independent auditors catch what 2 PAs miss. The whitespace void was THE dominant failure (9/9 flagged) but previous 2-PA audit missed it entirely. Breadth of perspectives is the key value of Mode 4."

---

## 6. CONVENTIONS BRIEF STRUCTURE (For Reference)

The conventions brief is ~225 lines, 10 sections. Detailed in 07-INPUT-SPEC.md Section 9. Summary:

| # | Section | Lines | Content |
|---|---------|-------|---------|
| 1 | IDENTITY (SOUL) | ~20 | 7 absolute constraints (border-radius: 0, etc.) |
| 2 | PERCEPTION THRESHOLDS | ~20 | YAML block with all binary thresholds |
| 3 | ANTI-SCALE MODEL | ~5 | Richness = density x restraint x confidence |
| 4 | MULTI-COHERENCE BINDING | ~25 | 6 channels, binding rule, worked example |
| 5 | FRACTAL ECHO | ~20 | 5 scales, blank table template |
| 6 | COMPOSITIONAL MEMORY | ~30 | Zone boundary, midpoint, mechanism count protocols |
| 7 | CREATIVE AUTHORITY | ~20 | Override permission with conditions |
| 8 | ANTI-PATTERNS | ~15 | 6 specific failures from PA-05 1.5/4 |
| 9 | REQUIRED DELIVERABLES | ~15 | 3 output files |
| 10 | PROCESS | ~15 | Phases A-D with checkpoints |

**Format:** Hybrid prose + YAML (proven by remediation experiment).
**Tone:** 80% world description, 20% constraint (NOT checklist).

---

## 7. WHAT THE MASTER EXECUTION PROMPT MUST ENCODE

Based on this research, the master prompt sections that need orchestrator content:

### 7.1 Orchestrator Skeleton (~80-100 lines in master prompt)

1. **Intake protocol** (~15 lines): Read content, validate, determine output path
2. **Builder spawn** (~20 lines): Exact files, exact prompt, creative authority framing
3. **Gate runner invocation** (~15 lines): HTTP server, Playwright sequence, gate list
4. **Screenshot protocol** (~10 lines): 3 viewports, scroll-through, naming convention
5. **PA deployment** (~15 lines): 9 auditors, question assignments, spawn template
6. **Weaver invocation** (~10 lines): Synthesis template, verdict matrix
7. **Fix cycle** (~10 lines): Same builder, structured feedback, max 3 cycles
8. **Success bar** (~5 lines): PA-05 >= 3.5 AND Tier 5 >= 6/8

### 7.2 Cross-References to Other Sections

The orchestrator section references but does NOT contain:
- Conventions brief content (separate section)
- Gate definitions and thresholds (gate-runner section)
- PA question text (PA section)
- File paths to design system files (embedded in builder spawn prompt)

---

**END OF ORCHESTRATOR RESEARCH EXTRACTION**

**Document statistics:**
- Sections: 7 major, 30+ sub-sections
- Sources read: 7 primary documents + 4 supplementary
- Total source material: ~8,000+ lines analyzed
- Orchestration steps: 8 (intake -> builder -> gates -> screenshots -> PA -> weaver -> fix -> success)
- Agent count: 11 (1 builder + 9 PA + 1 weaver) minimum
- Key files: 6 builder inputs, 21 gates, 56 PA questions, 3 output files
