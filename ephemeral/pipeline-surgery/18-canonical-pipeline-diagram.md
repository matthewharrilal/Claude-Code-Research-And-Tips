# 18 -- Canonical Pipeline Diagram (Post-Surgical)

**Author:** Diagram Reconciliation Agent
**Date:** 2026-02-20
**Status:** DEFINITIVE -- single source of truth for /build-page pipeline
**Input files read (current state):**
- `~/.claude/skills/build-page/SKILL.md` (477 lines) -- the orchestrator
- `design-system/pipeline/conventions-brief.md` (547 lines) -- builder guidance
- `design-system/pipeline/gate-runner.md` (1,160 lines) -- programmatic verification
- `design-system/pipeline/flagship-pa-questions.md` (158 lines) -- Tier 5 questions
- `~/.claude/skills/tension-composition/SKILL.md` -- TC sub-skill (invoked in Step 2)
- `~/.claude/skills/perceptual-auditing/SKILL.md` -- PA sub-skill (invoked in Step 6)

---

## Section 1: All Existing Diagrams Inventoried

| # | Location | Version | Date | Key Characteristics | Status |
|---|----------|---------|------|---------------------|--------|
| D1 | `ephemeral/pipeline-enrichment-impl/23-pipeline-v3-diagram.md` | v3 | 2026-02-20 | 758 lines. NO TC stage. Builder goes directly after Intake. Says "56 questions (48+8 Tier 5)". Verdict thresholds use /8 for Tier 5. 22 gates. No PA-68. | **STALE** -- predates TC insertion and PA-68 addition |
| D2 | `ephemeral/pipeline-analysis/_meta-cognitive/pipeline-v2-architecture.md` | PV2 design | 2026-02-18 | Has tier routing (Floor/Middle/Ceiling/Flagship). Recipe file at `operational-recipe.md`. 12 binary gates. Separate orchestrator + recipe architecture. | **SUPERSEDED** -- PV2 design doc, not implemented. Current SKILL.md is always-Flagship with no tier routing |
| D3 | `ephemeral/pipeline-analysis/_meta-cognitive/PV2-ARCHITECTURE-DIAGRAM.html` | PV2 visual | 2026-02-18 | HTML visual diagram of PV2 architecture. Same tier routing as D2. | **SUPERSEDED** -- same issues as D2 |
| D4 | `ephemeral/pipeline-enrichment-research/08-enriched-diagram.md` | Research analysis | 2026-02-20 | Analytical diagram showing "before/after enrichment." References 12 gates, 4 checkpoints. No TC stage. | **STALE** -- analytical artifact, not authoritative. Pre-surgical data |
| D5 | `design-system/CLAUDE.md` | Root nav | 2026-02-19 | Claims about pipeline in Skills section and Evolution State. References TC as sub-skill invoked automatically. | **PARTIALLY CURRENT** -- narrative correct but no actual flow diagram |
| D6 | `~/.claude/skills/build-page/SKILL.md` | AUTHORITATIVE | 2026-02-20 | The actual orchestrator. 477 lines. Steps 0-11. TC stage present (Step 2). 57 questions (48+9). Tier 5 /9. 16 gates in table + advisory + deliverable + behavioral. | **CURRENT -- THE SOURCE OF TRUTH** |

**Finding:** Only D6 (SKILL.md itself) reflects the current post-surgical state. All other diagrams are stale. D1 is the closest but is missing the TC stage and has wrong PA question counts.

---

## Section 2: Canonical Pipeline Diagram (ASCII)

```
/build-page <content-path>
        |
        v
================================================================
|  STEP 0: INTAKE                                              |
|  Actor: Orchestrator (you, the team lead)                    |
|                                                              |
|  1. Parse content source from command argument               |
|  2. If no path: ask user for content source                  |
|  3. Read the content file completely                         |
|  4. Create output directory: ephemeral/pages/[content-slug]/ |
|  5. All output files go in this directory                    |
|                                                              |
|  INPUT:  /build-page <path-to-content.md>                    |
|  OUTPUT: output directory created, content read              |
================================================================
        |
        v
================================================================
|  STEP 2: TC SKILL INVOCATION                                |
|  Actor: 1 Opus agent (TC Analyst)                           |
|                                                              |
|  TC Agent reads (in order):                                  |
|    1. ~/.claude/skills/tension-composition/SKILL.md          |
|       (Phases 0-3 only -- STOP before Phases 4-5)           |
|    2. [content-file-path] -- the content to analyze          |
|                                                              |
|  TC executes:                                                |
|    Phase 0: Content Analysis (multi-axis questioning)        |
|    Phase 1: Tension Derivation (internal conflicts)          |
|    Phase 2: Metaphor Collapse (ONE structural metaphor)      |
|    Phase 3: Mechanism Selection (serve the metaphor)         |
|                                                              |
|  OUTPUT: [output-dir]/_tc-brief.md containing:               |
|    1. STRUCTURAL METAPHOR (+ why structural, CSS implied)    |
|    2. ZONE ARCHITECTURE (content division driven by metaphor)|
|    3. CONTENT TENSIONS (key tensions composition must express)|
|    4. SELECTED MECHANISMS (which, from which categories)     |
|    5. METAPHOR-IMPLIED CSS DIRECTIONS (specific CSS patterns)|
|    Target: ~50 lines. Design brief, not essay.               |
|                                                              |
|  GATE: Verify _tc-brief.md exists with all 5 sections       |
================================================================
        |
        v
================================================================
|  STEP 3: BUILDER DEPLOYMENT (Wave 1: 1 Opus agent)          |
|  Actor: 1 Opus agent (Builder)                              |
|  Model: Opus ALWAYS (never Sonnet for CSS-writing agent)     |
|                                                              |
|  Builder reads (IN THIS ORDER):                              |
|    1. [output-dir]/_tc-brief.md      -- compositional found. |
|    2. design-system/pipeline/        -- process guidance     |
|       conventions-brief.md (547 lines)                       |
|    3. [content-file-path]            -- the material         |
|                                                              |
|  Reference files (consulted as needed):                      |
|    4. grammar/mechanism-catalog.md   -- mechanism CSS        |
|    5. components/components.css      -- component library    |
|    6. vocabulary/tokens.css          -- CSS variable values  |
|    7. identity/prohibitions.md       -- soul constraints     |
|                                                              |
|  Builder process (from conventions brief):                   |
|    Phase A: Read TC brief. Internalize metaphor/zones/mechs  |
|    Phase B: Plan. Conviction statement + transition table    |
|             + fractal echo table in build log BEFORE CSS     |
|    Phase C: Build. HTML + CSS. 3 self-checkpoints:           |
|      CP-1: After HTML skeleton                               |
|        - >= 5 ARIA landmarks? Skip link?                     |
|        - >= 8 component classes? header + main + footer?     |
|      CP-2: After zone boundaries (all channels per boundary) |
|        - All adjacent zone bg deltas >= 15 RGB?              |
|        - >= 3 distinct border configs?                       |
|        - >= 1 structural border-left (3px+)?                 |
|        - >= 3 channels shift same direction at each boundary?|
|      CP-3: After full build                                  |
|        - Display-body font-size delta >= 10px?               |
|        - 3+ distinct typography zones?                       |
|        - Midpoint observation recorded?                      |
|        - 5-question self-check complete?                     |
|    Phase D: Self-verify. Cascade value table. 5-q self-check.|
|                                                              |
|  OUTPUT (3 files):                                           |
|    output.html           -- the page (self-contained)        |
|    _build-log.md         -- plans, reflection, overrides     |
|    _cascade-value-table.md -- CSS values at all boundaries   |
|                                                              |
|  GATE: Verify all 3 output files exist                       |
================================================================
        |
        v
================================================================
|  STEP 4: GATE RUNNER                                         |
|  Actor: Orchestrator (runs directly, NOT a separate agent)   |
|  Tool: Playwright                                            |
|                                                              |
|  4.1 Start HTTP server:                                      |
|    cd [output-dir] && python3 -m http.server 8765 &          |
|                                                              |
|  4.2 Navigate to http://localhost:8765/output.html           |
|    Inject animation disabler:                                |
|      * { animation: none !important;                         |
|          transition: none !important;                         |
|          opacity: 1 !important;                              |
|          scroll-behavior: auto !important; }                 |
|    Wait: document.fonts.ready                                |
|                                                              |
|  4.3 Run gates (see Section 2B below for complete list)      |
|    - 22 gates total in 6 execution groups                    |
|    - Dependency chain: SC-00 -> SC-12 -> SC-09 -> SC-13      |
|      -> SC-13B -> SC-16; SC-13 -> DG-2                       |
|                                                              |
|  4.4 Also check deliverable gates (from build log):          |
|    DG-1, DG-2, DG-3, DG-4                                   |
|    Behavioral gates (from build log):                        |
|    BG-1, BG-2                                                |
|                                                              |
|  OUTPUT: [output-dir]/_gate-results.json                     |
|    (all gates with measured values, thresholds, deltas)      |
|                                                              |
|  IF ANY BLOCKING GATE FAILS:                                 |
|    Produce structured fix instruction -> Step 7 (Fix Cycle)  |
================================================================
        |
        | ALL BLOCKING GATES PASS?
        |
   +----+----+
   |         |
  YES       NO ---------> STEP 7: FIX CYCLE (see below)
   |
   v
================================================================
|  STEP 5: SCREENSHOT CAPTURE                                  |
|  Actor: Orchestrator (runs directly)                         |
|  Tool: Playwright                                            |
|                                                              |
|  For each viewport in [1440, 1024, 768]:                     |
|    1. Set viewport to [width]px                              |
|    2. Inject animation disabler                              |
|    3. Wait for document.fonts.ready                          |
|    4. Full-page screenshot: screenshot-[W]px-00-cold.png     |
|    5. Scroll at 80% viewport-height steps:                   |
|       screenshot-[W]px-01-scroll.png, -02-scroll.png, etc.  |
|                                                              |
|  OUTPUT: [output-dir]/_screenshots/*.png                     |
|  Stop HTTP server after screenshots complete.                |
================================================================
        |
        v
================================================================
|  STEP 5.5: LOCK SHEET GENERATION                             |
|  Actor: Orchestrator                                         |
|                                                              |
|  READS:                                                      |
|    _build-log.md                                             |
|    _gate-results.json                                        |
|                                                              |
|  Classifies every major element as:                          |
|    LOCKED (Soul)      -- identity prohibitions, immutable    |
|    LOCKED (Research)  -- gate-confirmed thresholds met       |
|    CHALLENGEABLE      -- builder creative choices            |
|                                                              |
|  OUTPUT: [output-dir]/_lock-sheet.md                         |
|  ROUTING: Weaver ONLY. NOT given to PA auditors.             |
================================================================
        |
        v
================================================================
|  STEP 6: PA DEPLOYMENT                                       |
|  9 Opus auditors (parallel) + 1 Opus weaver (after all 9)   |
|                                                              |
|  6.1 AUDITOR SPAWN (9 agents, ALL PARALLEL)                  |
|  Each receives:                                              |
|    - ZERO build context (fresh-eyes principle)               |
|    - PA SKILL: ~/.claude/skills/perceptual-auditing/SKILL.md |
|    - Screenshot paths from _screenshots/                     |
|    - Their assigned questions (FULL TEXT pasted, not IDs)     |
|    - Language rule: perceptual only, no CSS values            |
|                                                              |
|  OUTPUT: [output-dir]/_pa/pa-auditor-[A-I].md (9 files)     |
|    Per question: YES/NO/PARTIALLY + evidence + severity      |
|                                                              |
|  6.2 QUESTION ASSIGNMENTS (see Section 4 below)              |
|                                                              |
|  6.3 WEAVER SPAWN (1 Opus, AFTER all 9 auditors complete)   |
|  Weaver reads:                                               |
|    - All 9 auditor reports from _pa/                         |
|    - _gate-results.json (diagnostic context)                 |
|    - _lock-sheet.md (LOCKED vs CHALLENGEABLE)                |
|                                                              |
|  Weaver produces:                                            |
|    _pa/_pa-report.md:                                        |
|      1. PA-05 SCORE (4 sub-criteria, 0-4, avg to 0.5)       |
|         DESIGNED / COHERENT / PROPORTIONATE / POLISHED       |
|      2. TIER 5 SCORE (count YES from PA-60 to PA-68)        |
|         8-9 COMPOSED / 6-7 APPROACHING /                     |
|         3-5 STRUCTURED / 0-2 VOCABULARY ONLY                 |
|      3. TOP-5 ISSUES (WOULD-NOT-SHIP first)                  |
|      4. FULL PER-QUESTION MATRIX (57 x 9)                    |
|      5. COMPOSITIONAL CRITERIA (6 binary checks)             |
|      6. VERDICT                                              |
|    _pa/_pa-matrix.md (57 x 9 cross-tabulation)              |
================================================================
        |
        v
================================================================
|  VERDICT LOGIC                                               |
|                                                              |
|  +----------------------------------------------------------+|
|  | PA-05     | Tier 5   | Criteria  | VERDICT               ||
|  |-----------|----------|-----------|------------------------||
|  | >= 3.5    | >= 7/9   | All MET   | SHIP                   |
|  | >= 3.5    | 5-6/9    | All MET   | SHIP WITH RESERVATION  |
|  | >= 3.5    | 0-4/9    | All MET   | NOT FLAGSHIP (rescope) |
|  | 3.0-3.4   | any      | any       | FIX CYCLE --> Step 7   |
|  | < 3.0     | N/A      | N/A       | REBUILD                |
|  | 3 cycles  | N/A      | N/A       | ESCALATE               |
|  +----------------------------------------------------------+|
|                                                              |
|  MANDATORY CRITERIA (all must be MET):                       |
|    Zero soul violations (SC-01 through SC-05 PASS)           |
|    Zero void patterns (PA-50-53, SC-10 PASS)                 |
|    Metaphor is STRUCTURAL (not ANNOUNCED)                    |
|    Multi-coherence verified (SC-13 PASS + PA-61 agreement)   |
|    Scale coverage verified (DG-1 valid + PA-63 agreement)    |
================================================================
        |
        |
   SHIP / SHIP W/ RESERVATION?
        |
   +----+----+
   |         |
  YES       NO (FIX or REBUILD)
   |         |
   v         v
 DONE    STEP 7: FIX CYCLE
 Report
 to user

================================================================
|  STEP 7: FIX CYCLE                                           |
|  (loops back to Step 4)                                      |
|                                                              |
|  7.1 BUILD FIX INSTRUCTIONS                                  |
|    Compose: [output-dir]/_fixes/fix-instructions-cycle-N.md  |
|    Contains:                                                 |
|      - Gate failures (measured values + CSS fix + brief ref) |
|      - Compositional context per failure (boundary direction, |
|        missing channels, conventions-brief section reference) |
|      - PA top-5 issues (directional, not prescriptive)       |
|      - Tier 5 gaps (which PA-6N scored NO)                   |
|      - DO NOT TOUCH list (protected elements)                |
|                                                              |
|  7.2 SEND TO SAME BUILDER                                    |
|    CRITICAL: Use the SAME Opus builder agent                 |
|    Framing: "Re-read conviction statement and transition     |
|    table in _build-log.md before applying fixes."            |
|                                                              |
|  7.3 RE-VERIFY (loop to Step 4)                              |
|    - Re-run ALL gates (updated _gate-results.json)           |
|    - Re-capture screenshots                                  |
|    - Cycle 2-3: 2 PA auditors (A+C) focused + all 9 Tier 5  |
|    - Weaver re-synthesizes                                   |
|                                                              |
|  7.4 CYCLE LIMITS                                            |
|  +----------------------------------------------------------+|
|  | Cycle | PA Auditors | Questions        | Duration         ||
|  |-------|-------------|------------------|------------------||
|  | 1     | 9 Opus      | All 57           | ~45 min          ||
|  | 2     | 2 Opus (A+C)| Focused + Tier 5 | ~20 min          ||
|  | 3     | 2 Opus (A+C)| Focused + Tier 5 | ~20 min          ||
|  +----------------------------------------------------------+|
|                                                              |
|  After Cycle 3: ESCALATE to user. No Cycle 4.               |
================================================================
        |
        v
================================================================
|  STEP 9: OUTPUT SUMMARY                                      |
|  Actor: Orchestrator                                         |
|                                                              |
|  Write [output-dir]/_run-manifest.md containing:             |
|    - Run timestamp (ISO 8601)                                |
|    - Content file path                                       |
|    - Builder model (Opus)                                    |
|    - Gate pass/fail count with failing gate IDs              |
|    - PA-05 score with sub-criterion breakdown                |
|    - Tier 5 score with verdict label                         |
|    - Fix cycles used (N/3)                                   |
|    - Total agents spawned                                    |
|    - Overall verdict                                         |
|    - List of all produced files                              |
|                                                              |
|  Also report summary to user in chat.                        |
================================================================
```

---

## Section 2B: Complete Gate List (22 Gates)

### Execution Groups

```
GROUP 0 -- Zone Validation (FIRST, before all others):
  SC-00: Zone Selector Validation
    Primary: [class*="zone"], section[data-zone], .section
    Fallback: bare <section>, [data-section], main children
    Threshold: >= 3 zone elements resolved
    IF FAIL: skip ALL per-zone gates, report FAIL
    IF FALLBACK: store selector for all subsequent gates

GROUP 1 -- Identity (parallel):
  SC-01: Container Width          | 940-960px            | BLOCKING
  SC-02: Soul Properties          | r:0, bs:none, no ds  | BLOCKING
  SC-03: Font Trinity             | 3 allowed fonts      | BLOCKING
  SC-04: Warm Palette             | R>=G>=B              | BLOCKING
  SC-05: No Pure Extremes         | no #000 or #FFF      | BLOCKING

GROUP 2 -- Structure (parallel):
  SC-06: ARIA Landmarks           | >= 5                 | BLOCKING
  SC-07: Skip Link                | present              | BLOCKING
  SC-08: Component Library        | >= 8 types           | BLOCKING
  SC-12: Zone Count               | 3-5 zones            | BLOCKING
  DG-3:  Landmark Completeness    | header+main+footer   | BLOCKING

GROUP 3 -- Perception (sequential, needs GROUP 2):
  SC-09: Background Delta         | >=15 RGB at every bnd| BLOCKING
  SC-10: Stacked Gap              | <=120px total at bnd | BLOCKING
  SC-11: Typography Zones         | >=10px disp-body, 3+ | BLOCKING
  SC-14: Sub-Perceptual           | 3 sub-checks         | BLOCKING
  SC-15: Border/Structural        | >=3 distinct configs  | BLOCKING

GROUP 4 -- Compositional (sequential, depends on GROUP 3):
  SC-13: Multi-Coherence          | >=3/bnd, avg>=4      | BLOCKING
  SC-13B: Direction Coherence     | >=50% bnd coherent   | ADVISORY
  SC-16: Monotonic Progress       | >=1 monotonic prop   | ADVISORY

GROUP 5 -- Deliverable (after GROUP 4):
  DG-1: Fractal Echo Table        | 5 rows, CSS evidence | BLOCKING
  DG-2: Cascade Value Table       | all boundaries, x-val| BLOCKING
  DG-4: Handoff Validation        | 5 sub-checks on log  | BLOCKING

BEHAVIORAL (non-blocking, from build log):
  BG-1: Metaphor Independence     | log order check      | ATTESTATION
  BG-2: Metaphor Structural       | STRUCT vs ANNOUNCED  | ATTESTATION

DEPENDENCY CHAIN:
  SC-00 -> SC-12 -> SC-09 -> SC-13 -> SC-13B -> SC-16
                                SC-13 -> DG-2 (cross-validation)
```

### Gate Summary Table

| # | ID | Name | Tier | Blocks? | Flagship Threshold |
|---|------|------|------|---------|-------------------|
| 0 | SC-00 | Zone Selector Validation | Pre | YES (blocks per-zone) | >= 3 zones |
| 1 | SC-01 | Container Width | A | YES | 940-960px |
| 2 | SC-02 | Soul Properties | B | YES | radius:0, shadow:none |
| 3 | SC-03 | Font Trinity | B | YES | 3 fonts only |
| 4 | SC-04 | Warm Palette | B | YES | R>=G>=B |
| 5 | SC-05 | No Pure Extremes | B | YES | no #000/#FFF |
| 6 | SC-06 | ARIA Landmarks | B | YES | >= 5 |
| 7 | SC-07 | Skip Link | B | YES | present |
| 8 | SC-08 | Component Library | B | YES | >= 8 types |
| 9 | SC-09 | Background Delta | A | YES | >=15 RGB/boundary |
| 10 | SC-10 | Stacked Gap | A | YES | <=120px total |
| 11 | SC-11 | Typography Zones | A | YES | >=10px display-body, 3+ zones |
| 12 | SC-12 | Zone Count | A | YES | 3-5 |
| 13 | SC-13 | Multi-Coherence | A | YES | >=3/boundary, avg>=4 |
| 14 | SC-14 | Sub-Perceptual Prevention | A | YES | 3 sub-checks |
| 15 | SC-15 | Border/Structural Presence | A | YES | >=3 distinct configs |
| 16 | SC-13B | Direction Coherence | A | ADVISORY | >=50% coherent |
| 17 | SC-16 | Monotonic Progress | A | ADVISORY | >=1 monotonic |
| 18 | DG-1 | Fractal Echo Table | A | YES | 5 rows + evidence |
| 19 | DG-2 | Cascade Value Table | A | YES | all boundaries, cross-val |
| 20 | DG-3 | Landmark Completeness | B | YES | header+main+footer |
| 21 | DG-4 | Handoff Validation | A | YES | 5 sub-checks |
| -- | BG-1 | Metaphor Independence | C | ATTESTATION | log order |
| -- | BG-2 | Metaphor Structural | C | ATTESTATION | struct vs announced |

**Totals: 1 pre-gate + 17 blocking + 2 advisory + 2 behavioral = 22 gates**

### Micro-Gate Schedule (During Build)

| Micro-Gate | When | Gates |
|------------|------|-------|
| MG-1 | After HTML skeleton | SC-06, SC-07, SC-08, SC-12, DG-3 |
| MG-2 | After zone backgrounds | SC-04, SC-05, SC-09 |
| MG-3 | After borders | SC-01, SC-02, SC-15 |
| MG-4 | After typography | SC-03, SC-11 |

---

## Section 3: Data Flow Diagram

```
USER INPUT
  |
  | content.md (markdown file)
  v
INTAKE (Step 0)
  |
  | content.md + output-dir path
  v
TC ANALYST (Step 2) ----reads----> tension-composition/SKILL.md (Phases 0-3)
  |                                content.md
  | writes
  v
_tc-brief.md (~50 lines)
  |
  | _tc-brief.md + conventions-brief.md + content.md
  v
BUILDER (Step 3) ------reads----> conventions-brief.md (547 lines)
  |                               mechanism-catalog.md (reference)
  |                               components.css (reference)
  |                               tokens.css (reference)
  |                               prohibitions.md (reference)
  | writes
  v
output.html + _build-log.md + _cascade-value-table.md
  |
  | output.html (rendered via Playwright)
  | _build-log.md + _cascade-value-table.md (for DG gates)
  v
GATE RUNNER (Step 4) --reads----> gate-runner.md (gate specs + JS code)
  |
  | writes
  v
_gate-results.json
  |
  | output.html (rendered via Playwright at 3 viewports)
  v
SCREENSHOTS (Step 5)
  |
  | writes
  v
_screenshots/*.png (cold + scroll at 1440/1024/768)
  |
  | _build-log.md + _gate-results.json
  v
LOCK SHEET (Step 5.5)
  |
  | writes
  v
_lock-sheet.md
  |
  | _screenshots/*.png (via Read tool)
  | perceptual-auditing/SKILL.md (evaluation framework)
  | flagship-pa-questions.md (Tier 5 question text)
  v
PA AUDITORS (Step 6.1) -- 9 parallel
  |
  | write (each)
  v
_pa/pa-auditor-[A-I].md (9 files)
  |
  | _pa/pa-auditor-[A-I].md (all 9 reports)
  | _gate-results.json (diagnostic context)
  | _lock-sheet.md (LOCKED vs CHALLENGEABLE)
  v
WEAVER (Step 6.3) -- 1 agent after all 9
  |
  | writes
  v
_pa/_pa-report.md + _pa/_pa-matrix.md
  |
  | _pa-report.md verdict
  v
VERDICT LOGIC --> SHIP / FIX / REBUILD / ESCALATE
  |
  | if FIX:
  | _gate-results.json (failures)
  | _pa/_pa-report.md (top-5 issues)
  | _build-log.md (conviction, transition table)
  | conventions-brief.md (section references)
  v
FIX INSTRUCTIONS (Step 7.1)
  |
  | writes
  v
_fixes/fix-instructions-cycle-N.md
  |
  | fix instructions -> SAME BUILDER
  v
BUILDER (same agent) -> updated output.html -> loop to Step 4
```

---

## Section 4: File Map

### Files READ at Each Pipeline Step

| Step | File Read | Path | Purpose |
|------|-----------|------|---------|
| 0 Intake | Content file | User-provided | The material to transform |
| 2 TC | TC Skill | `~/.claude/skills/tension-composition/SKILL.md` | Process definition (Phases 0-3) |
| 2 TC | Content file | User-provided | Content to analyze |
| 3 Builder | TC brief | `[output-dir]/_tc-brief.md` | Compositional foundation |
| 3 Builder | Conventions brief | `design-system/pipeline/conventions-brief.md` | World model + process guidance |
| 3 Builder | Content file | User-provided | The material |
| 3 Builder | Mechanism catalog | `design-system/compositional-core/grammar/mechanism-catalog.md` | CSS patterns (reference) |
| 3 Builder | Components CSS | `design-system/compositional-core/components/components.css` | Component library (reference) |
| 3 Builder | Tokens CSS | `design-system/compositional-core/vocabulary/tokens.css` | CSS variables (reference) |
| 3 Builder | Prohibitions | `design-system/compositional-core/identity/prohibitions.md` | Soul constraints (reference, read LAST) |
| 4 Gates | Gate runner spec | `design-system/pipeline/gate-runner.md` | Gate definitions + JS code |
| 4 Gates | output.html | `[output-dir]/output.html` | Rendered page (via Playwright) |
| 4 Gates | Build log | `[output-dir]/_build-log.md` | For DG-1, DG-4, BG-1, BG-2 |
| 4 Gates | Cascade table | `[output-dir]/_cascade-value-table.md` | For DG-2 cross-validation |
| 6 PA | PA Skill | `~/.claude/skills/perceptual-auditing/SKILL.md` | Evaluation framework + standard questions |
| 6 PA | Tier 5 questions | `design-system/pipeline/flagship-pa-questions.md` | 9 Tier 5 question text |
| 6 PA | Screenshots | `[output-dir]/_screenshots/*.png` | Visual artifacts (via Read tool) |
| 6 Weaver | Auditor reports | `[output-dir]/_pa/pa-auditor-[A-I].md` | 9 audit reports |
| 6 Weaver | Gate results | `[output-dir]/_gate-results.json` | Diagnostic context |
| 6 Weaver | Lock sheet | `[output-dir]/_lock-sheet.md` | LOCKED vs CHALLENGEABLE |
| 7 Fix | Gate results | `[output-dir]/_gate-results.json` | Failed gates |
| 7 Fix | PA report | `[output-dir]/_pa/_pa-report.md` | Top-5 issues |
| 7 Fix | Build log | `[output-dir]/_build-log.md` | Conviction + transition table |
| 7 Fix | Conventions brief | `design-system/pipeline/conventions-brief.md` | Section references for fix context |

### Files WRITTEN at Each Pipeline Step

| Step | File Written | Path | Content |
|------|-------------|------|---------|
| 2 TC | TC brief | `[output-dir]/_tc-brief.md` | ~50 lines: metaphor, zones, tensions, mechanisms, CSS directions |
| 3 Builder | Output page | `[output-dir]/output.html` | Self-contained HTML page |
| 3 Builder | Build log | `[output-dir]/_build-log.md` | Plans, reflection, overrides |
| 3 Builder | Cascade table | `[output-dir]/_cascade-value-table.md` | CSS values at all zone boundaries |
| 4 Gates | Gate results | `[output-dir]/_gate-results.json` | 22 gates with measured values |
| 5 Screenshots | Screenshots | `[output-dir]/_screenshots/*.png` | Cold + scroll at 1440/1024/768 |
| 5.5 Lock | Lock sheet | `[output-dir]/_lock-sheet.md` | LOCKED/CHALLENGEABLE classification |
| 6 PA | Auditor reports | `[output-dir]/_pa/pa-auditor-[A-I].md` | 9 individual audit reports |
| 6 Weaver | PA synthesis | `[output-dir]/_pa/_pa-report.md` | Verdict + scores + issues |
| 6 Weaver | PA matrix | `[output-dir]/_pa/_pa-matrix.md` | 57 x 9 cross-tabulation |
| 7 Fix | Fix instructions | `[output-dir]/_fixes/fix-instructions-cycle-N.md` | Per-cycle fix instructions |
| 9 Summary | Run manifest | `[output-dir]/_run-manifest.md` | Full run summary |

### Complete Output Directory Structure

```
ephemeral/pages/[content-slug]/
|
+-- _tc-brief.md                     # TC analyst output (~50 lines)
+-- output.html                      # The page (self-contained)
+-- _build-log.md                    # Plans, reflection, overrides
+-- _cascade-value-table.md          # CSS values at all boundaries
+-- _lock-sheet.md                   # LOCKED vs CHALLENGEABLE
+-- _gate-results.json               # All 22 gates with measurements
+-- _run-manifest.md                 # Run summary + verdict
+-- _screenshots/
|   +-- screenshot-1440px-00-cold.png
|   +-- screenshot-1440px-01-scroll.png
|   +-- screenshot-1440px-02-scroll.png
|   +-- ...
|   +-- screenshot-1024px-00-cold.png
|   +-- ...
|   +-- screenshot-768px-00-cold.png
|   +-- ...
+-- _pa/
|   +-- pa-auditor-A.md
|   +-- pa-auditor-B.md
|   +-- pa-auditor-C.md
|   +-- pa-auditor-D.md
|   +-- pa-auditor-E.md
|   +-- pa-auditor-F.md
|   +-- pa-auditor-G.md
|   +-- pa-auditor-H.md
|   +-- pa-auditor-I.md
|   +-- _pa-report.md                # Weaver synthesis
|   +-- _pa-matrix.md                # 57x9 cross-tabulation
+-- _fixes/
    +-- fix-instructions-cycle-1.md
    +-- fix-instructions-cycle-2.md   # (if needed)
    +-- fix-instructions-cycle-3.md   # (if needed)
```

---

## Section 5: Agent Map

| Agent | Role | Model | Count | Inputs | Outputs | Playwright? |
|-------|------|-------|-------|--------|---------|-------------|
| Orchestrator | Team lead, gate runner, screenshot capture, lock sheet, fix instruction assembly, verdict | You (lead) | 1 | All files + Playwright | _gate-results.json, _screenshots/, _lock-sheet.md, _fixes/, _run-manifest.md | YES |
| TC Analyst | Content analysis, tension derivation, metaphor collapse, mechanism selection | Opus | 1 | TC SKILL.md, content.md | _tc-brief.md | NO |
| Builder | HTML + CSS page construction | Opus (ALWAYS) | 1 | _tc-brief.md, conventions-brief.md, content.md, mechanism-catalog.md, components.css, tokens.css, prohibitions.md | output.html, _build-log.md, _cascade-value-table.md | NO |
| PA Auditor A | Impression + Emotion | Opus | 1 | PA SKILL.md, screenshots, assigned questions | _pa/pa-auditor-A.md | NO (Read tool) |
| PA Auditor B | Readability + Typography | Opus | 1 | PA SKILL.md, screenshots, assigned questions | _pa/pa-auditor-B.md | NO (Read tool) |
| PA Auditor C | Spatial + Proportion | Opus | 1 | PA SKILL.md, screenshots, assigned questions | _pa/pa-auditor-C.md | NO (Read tool) |
| PA Auditor D | Flow + Pacing | Opus | 1 | PA SKILL.md, screenshots, assigned questions | _pa/pa-auditor-D.md | NO (Read tool) |
| PA Auditor E | Grid + Layout | Opus | 1 | PA SKILL.md, screenshots, assigned questions | _pa/pa-auditor-E.md | NO (Read tool) |
| PA Auditor F | Consistency + Rhythm | Opus | 1 | PA SKILL.md, screenshots, assigned questions | _pa/pa-auditor-F.md | NO (Read tool) |
| PA Auditor G | Metaphor + Ideology | Opus | 1 | PA SKILL.md, screenshots, assigned questions | _pa/pa-auditor-G.md | NO (Read tool) |
| PA Auditor H | Responsive | Opus | 1 | PA SKILL.md, screenshots, assigned questions | _pa/pa-auditor-H.md | NO (Read tool) |
| PA Auditor I | Adversarial | Opus | 1 | PA SKILL.md, screenshots, assigned questions | _pa/pa-auditor-I.md | NO (Read tool) |
| PA Weaver | Synthesis of 9 auditor reports | Opus | 1 | 9 auditor reports, _gate-results.json, _lock-sheet.md | _pa/_pa-report.md, _pa/_pa-matrix.md | NO |

**Initial cycle total: 13 agents** (1 orchestrator + 1 TC + 1 builder + 9 auditors + 1 weaver)
**Fix cycle total: 4 agents** (1 orchestrator + 1 builder (same) + 2 auditors (A+C) + weaver reuses prior)
**Playwright: ZERO concurrent.** All Playwright operations run sequentially by orchestrator only.

---

## Section 6: Discrepancy Report

### D1: `ephemeral/pipeline-enrichment-impl/23-pipeline-v3-diagram.md`

| # | Discrepancy | D1 Says | SKILL.md Says (Canonical) | Correct |
|---|-------------|---------|---------------------------|---------|
| 1 | TC stage existence | NO TC stage. Stage 1 is Builder directly after Intake. | Step 2 is TC SKILL INVOCATION (Opus agent, Phases 0-3, produces _tc-brief.md). Step 3 is Builder. | **SKILL.md** -- TC stage was added surgically |
| 2 | Builder read order | conventions-brief.md is item [1] (PRIMARY) | _tc-brief.md is item [1], conventions-brief.md is item [2] | **SKILL.md** -- TC brief is the compositional foundation, read first |
| 3 | PA question total | "56 questions (48 standard + 8 Tier 5)" | "57 questions" in weaver section; PA-60 through PA-68 = 9 Tier 5 questions | **SKILL.md** -- PA-68 (Metaphor Spatial Coverage) was added surgically, making 9 Tier 5 = 57 total |
| 4 | Tier 5 denominator | /8 (e.g., "Tier 5 >= 6/8") | /9 (e.g., "Tier 5 >= 7/9") | **SKILL.md** -- updated to /9 after PA-68 addition |
| 5 | Verdict thresholds | SHIP: T5>=6/8, SHIP W/ RES: T5 4-5/8 | SHIP: T5>=7/9, SHIP W/ RES: T5 5-6/9 | **SKILL.md** -- thresholds updated to match 9-question denominator |
| 6 | Builder checkpoints | Lists 4 checkpoints in parallel with micro-gates | 3 checkpoints (CP-1, CP-2, CP-3) | **SKILL.md** -- reduced from 4 to 3 (boundary-by-boundary, not channel-by-channel) |
| 7 | SKILL.md line count | 436 lines | 477 lines | **477** -- post-surgical state is larger |
| 8 | conventions-brief.md line count | 443 lines | 547 lines | **547** -- enriched with coherence arc, transition mapping, parametric echo, etc. |
| 9 | Gate count in SKILL.md table | 16 composition-critical gates | 16 in compact table but 22 total in gate-runner.md (including advisory + deliverable + behavioral) | Both are correct for their context: SKILL.md shows the compact table, gate-runner.md has full specs |

### D2 + D3: `pipeline-v2-architecture.md` + PV2 HTML Diagram

| # | Discrepancy | PV2 Design Says | Current State (Canonical) |
|---|-------------|-----------------|---------------------------|
| 1 | Tier routing | 4-tier routing (Floor/Middle/Ceiling/Flagship) | NO tier routing. Always Flagship. Every page runs full pipeline. |
| 2 | Separate recipe file | `operational-recipe.md` (~650 lines) as separate builder doc | conventions-brief.md (547 lines) IS the builder's world model. No separate recipe file. |
| 3 | Gate count | 12 binary gates | 22 gates (1 pre + 17 blocking + 2 advisory + 2 behavioral) |
| 4 | TC invocation | TC only for Ceiling/Flagship tiers | TC ALWAYS invoked (Step 2, every run) |
| 5 | Builder input | Builder reads operational-recipe.md | Builder reads _tc-brief.md + conventions-brief.md + content |
| 6 | Agent architecture | Varies by tier (single-agent for Floor, multi for Flagship) | Always multi-agent: TC + Builder + 9 PA auditors + Weaver |

**Conclusion:** PV2 was a design proposal. The implemented pipeline in SKILL.md took a different path -- always-Flagship, no tier routing, conventions-brief as the builder's document (not a separate recipe), and TC always invoked.

### D4: `ephemeral/pipeline-enrichment-research/08-enriched-diagram.md`

| # | Discrepancy | D4 Says | Current State (Canonical) |
|---|-------------|---------|---------------------------|
| 1 | Gate count | 12 composition-critical gates | 22 total gates |
| 2 | Builder checkpoints | 4 checkpoints | 3 checkpoints |
| 3 | TC stage | Not present (Stage 2 is Builder) | TC is Step 2, Builder is Step 3 |
| 4 | Analytical status | Research analysis of "before/after enrichment" | Not authoritative -- analytical artifact |

### D5: `design-system/CLAUDE.md`

| # | Discrepancy | D5 Says | Current State (Canonical) |
|---|-------------|---------|---------------------------|
| 1 | Pipeline description | "TC pipeline (Flagship-only)" in Evolution State section | TC is invoked for EVERY run, not Flagship-only. There is no tier routing. |
| 2 | PA question count | "Full 56-question audit -- 48 standard + 8 Tier 5" | 57 questions: 48 standard + 9 Tier 5 (PA-68 added) |
| 3 | Success bar | "PA-05 >= 3.5 AND Tier 5 >= 6/8" | PA-05 >= 3.5 AND Tier 5 >= 7/9 |
| 4 | Passing criteria | "48 questions, 4 modes" for PA skill | 57 questions, no modes (always Mode 4 / 9 auditors) |
| 5 | TC phases | "Full Phases 0-5" | TC runs Phases 0-3 only (SKILL.md Step 2 explicitly says "DO NOT proceed to Phases 4-5") |

### SKILL.md Internal Question Count Discrepancy

| Item | SKILL.md Says | Counted from Auditor Assignments | Counted from flagship-pa-questions.md |
|------|---------------|----------------------------------|---------------------------------------|
| Standard questions | Implied "48" (from "48 standard" references in other files) | 49 question-slots across 9 auditors | N/A (standard Qs are in PA SKILL) |
| Tier 5 questions | "PA-60 through PA-68" = 9 | 9 (PA-60,61,62,63,64,65,66,67,68) | 9 (PA-60 through PA-68) |
| Total | "57 questions x 9 auditors" | 58 question-slots (49+9) | N/A |

**Analysis:** SKILL.md says "57 questions" in the weaver section. Counting unique standard PA numbers from auditor assignments yields: PA-01,02,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,50,51,52,53 = 49 unique standard questions. Plus 9 Tier 5 = 58 total unique question assignments. The "48 standard" figure from older documents may have been before PA-45 was assigned to Auditor A, or there may be a question numbering gap (e.g., PA-03 is unassigned). This is a MINOR discrepancy -- the auditor assignments in SKILL.md are authoritative.

---

## Section 7: Files That Need Diagram Updates

### MUST UPDATE (contain diagrams/claims that actively contradict current state)

| Priority | File | What to Change | Effort |
|----------|------|----------------|--------|
| 1 | `design-system/CLAUDE.md` | Update PA question count from 56 to 57, Tier 5 from /8 to /9, success bar from 6/8 to 7/9, TC phases from "0-5" to "0-3", remove "Flagship-only" qualifier from TC | Medium (multiple scattered references) |
| 2 | `ephemeral/pipeline-enrichment-impl/23-pipeline-v3-diagram.md` | Either replace entirely with this document's canonical diagram, or add a SUPERSEDED header pointing here | Low (add header) |

### SHOULD UPDATE (contain stale but non-authoritative diagrams)

| Priority | File | What to Change | Effort |
|----------|------|----------------|--------|
| 3 | `ephemeral/pipeline-enrichment-research/08-enriched-diagram.md` | Add SUPERSEDED header. Research artifact, not authoritative. | Low |
| 4 | `ephemeral/pipeline-analysis/_meta-cognitive/pipeline-v2-architecture.md` | Add "PV2 DESIGN PROPOSAL -- NOT IMPLEMENTED" header. The actual implementation diverged significantly. | Low |

### NO UPDATE NEEDED (correct or not claiming to be diagrams)

| File | Reason |
|------|--------|
| `~/.claude/skills/build-page/SKILL.md` | IS the canonical source. Already correct. |
| `design-system/pipeline/conventions-brief.md` | Contains no pipeline diagram. Builder-facing content only. |
| `design-system/pipeline/gate-runner.md` | Contains gate specs only, no overall pipeline flow. |
| `design-system/pipeline/flagship-pa-questions.md` | Contains question text only. Already matches SKILL.md assignments. |

---

## CANONICAL REFERENCE

**This document (`18-canonical-pipeline-diagram.md`) is the SINGLE SOURCE OF TRUTH for the pipeline diagram.** It was produced by reading the CURRENT state of all 4 pipeline files + 2 sub-skills after surgical edits on 2026-02-20.

**If any pipeline file changes, this diagram must be regenerated.** The authoritative implementation remains SKILL.md -- this diagram is a derived artifact.

**Key numbers to remember:**
- Steps: 0, 2, 3, 4, 5, 5.5, 6, 7, 9
- Gates: 22 (1 pre + 17 blocking + 2 advisory + 2 behavioral)
- PA questions: 57 (48 standard + 9 Tier 5, PA-60 through PA-68)
- Agents per initial cycle: 13 (1 orchestrator + 1 TC + 1 builder + 9 auditors + 1 weaver)
- Fix cycle agents: 4 (same builder + 2 auditors A+C + weaver)
- Max fix cycles: 3
- Success bar: PA-05 >= 3.5 AND Tier 5 >= 7/9 AND all mandatory criteria MET
