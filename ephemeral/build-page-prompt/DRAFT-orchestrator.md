# DRAFT: /build-page Orchestrator Section of Master Prompt

**Agent:** orchestrator-researcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** #11 (part 2 of 2)
**Sources:** 04-orchestrator-research.md (830 lines), 15-orchestrator-cross-ref.md (4 amendments incorporated), 03-pa-research.md (389 lines)

**Cross-reference status:** All steps verified against 4 proven architectures (CD-006, Middle Experiment, Flagship Remediation, Mode 4 PA). 11/14 key decisions confirmed at HIGH confidence. 4 amendments from cross-ref APPLIED to this draft.

---

## THE /build-page ORCHESTRATOR

This section defines the complete orchestration sequence for the `/build-page` command. The orchestrator is a THIN routing layer. It does not build. It spawns agents, runs gates, captures screenshots, deploys auditors, and manages fix cycles.

**Architecture: FAT CORE.** One Opus agent plans AND builds. No separate planner.
**Tier: ALWAYS FLAGSHIP.** No tier routing, no classification. Every page gets maximum intensity.
**Total agents: 11 minimum** (1 builder + 9 PA auditors + 1 weaver). Up to 17 with fix cycles.

---

### STEP 0: INTAKE

```
INPUT: /build-page [path/to/content.md]
```

1. If path provided: read file, validate it exists.
2. If no path: prompt user for content source.
3. Read content file completely into memory.
4. Determine output directory: `ephemeral/pages/[slug]/` (default) or user-specified.
5. Create output directory structure:
   ```
   [output-dir]/
   [output-dir]/_verification/
   [output-dir]/_screenshots/
   [output-dir]/_pa/
   [output-dir]/_fixes/
   ```

No tier classification. No content analysis by orchestrator. Content understanding is the builder's job.

---

### STEP 0.5: PREFLIGHT VALIDATION (Amendment #2)

Before spawning the builder, run a 30-second automated scan of the conventions brief:

```
SCAN conventions-brief.md FOR:
  - Any hex value matching #000000 or #FFFFFF (pure black/white) → BLOCK
  - Any hex value where B > R (cool gray) → WARN
  - Any mention of border-radius > 0 → BLOCK
  - Any mention of box-shadow → BLOCK
  - Any file path that does not exist → BLOCK
  - Any gradient reference → BLOCK
```

If BLOCK found: fix conventions brief before proceeding.
If WARN found: log warning, proceed with caution.

**Proven by:** Remediation preflight found 3 BLOCKING issues (cool grays) that would have caused build failure.

---

### STEP 1: SPAWN OPUS BUILDER

Spawn one Opus agent (Task tool, `subagent_type: "code"`). Builder reads 6 files and produces 3 output files.

**Builder spawn prompt:**

```
You are building a page for the KortAI design system.

Read these files in this order:
1. [path/to/content.md] -- THE MATERIAL. Read completely first.
2. [path/to/conventions-brief.md] -- YOUR GUIDE. Follow its process phases.
3. design-system/compositional-core/identity/prohibitions.md -- SOUL. Read early.
4. design-system/compositional-core/vocabulary/tokens.css -- CSS VALUES. Consult during build.
5. design-system/compositional-core/grammar/mechanism-catalog.md -- VOCABULARY. Consult during planning + build.
6. design-system/compositional-core/components/merged-components.css -- COMPONENT LIBRARY. Consult during build.

The conventions brief contains your constraints, process phases (A-D),
self-check protocol, and creative authority clause. Follow it as a RECIPE
(sequenced steps to follow), not as a CHECKLIST (constraints to satisfy).

If you read the brief as a list of things to verify, STOP. Reread it as
a sequence of creative steps: understand content, plan metaphor, build
HTML+CSS, self-verify.

Write these 3 files to [output-dir]/:
  output.html        -- the page (self-contained HTML+CSS)
  _build-log.md      -- transition table, fractal echo table, override log, self-assessment
  _cascade-value-table.md -- computed CSS values at every section boundary

CRITICAL: You MUST write all 3 output files using the Write tool.
```

**Builder model:** ALWAYS Opus. Non-negotiable.
**Estimated time:** 90-150 minutes.

---

### STEP 2: GATE RUNNER

After builder completes, orchestrator runs programmatic gates via Playwright.

**Pre-requisites:**
1. Start HTTP server: `python3 -m http.server 8765` serving the output directory.
2. Navigate Playwright to `http://localhost:8765/output.html`.
3. Inject animation disable:
   ```javascript
   page.evaluate(() => {
     const s = document.createElement('style');
     s.textContent = '* { animation: none !important; transition: none !important; opacity: 1 !important; }';
     document.head.appendChild(s);
   });
   ```
4. Wait for `document.fonts.ready` (CRITICAL -- fonts must load before measuring).

**Run 21 gates sequentially via `page.evaluate()`:**

**TIER A: COMPOSITION-CRITICAL (12 gates)**

| Gate | Check | Flagship Threshold |
|------|-------|-------------------|
| SC-01 | Container max-width | 940-960px |
| SC-09 | Adjacent zone background delta | >= 15 RGB max-channel |
| SC-10 | Stacked gap at section boundaries | <= 108px total |
| SC-11 | Typography zone count | >= 3 distinct zones, display-body delta >= 10px, body-detail >= 2px |
| SC-12 | Zone count | 3-5 zones |
| SC-13 | Multi-coherence at zone boundaries | >= 3 of 6 channels shift at every boundary, avg >= 4 |
| SC-14 | Sub-perceptual prevention | No letter-spacing < 0.02em, no intra-zone bg deltas 1-14 RGB |
| SC-15 | Border presence | >= 3 distinct border configurations |
| DG-1 | Fractal echo table in _build-log.md | 5 rows, CSS evidence non-empty |
| DG-2 | Cascade value table cross-validation | Discrepancy < 5 RGB / 1px vs measured |
| SC-13B | Channel shift direction (ADVISORY) | >= 50% same semantic direction |
| SC-16 | Monotonic progression (ADVISORY) | >= 1 property progresses across 3+ zones |

**TIER B: IDENTITY ENFORCEMENT (7 gates)**

| Gate | Check |
|------|-------|
| SC-02 | border-radius: 0, box-shadow: none on ALL elements |
| SC-03 | Only Instrument Serif, Inter, JetBrains Mono |
| SC-04 | R >= G >= B on ALL backgrounds (warm palette) |
| SC-05 | No rgb(0,0,0) or rgb(255,255,255) |
| SC-06 | >= 5 ARIA landmarks |
| SC-07 | Skip link present |
| SC-08 | >= 8 component library classes |

**TIER C: BEHAVIORAL (2 gates)**

| Gate | Method |
|------|--------|
| Metaphor independence | Verify via _build-log.md timestamps |
| Metaphor structural | Fresh-eyes check (STRUCTURAL vs ANNOUNCED) |

**Output:** Write `[output-dir]/_verification/gate-results.json` (structured PASS/FAIL per gate with measured values) and `[output-dir]/_verification/gate-diagnostic.md` (human-readable summary).

**Gate failure format:**
```json
{
  "gate": "SC-09",
  "status": "FAIL",
  "measured": { "zone1_bg": "#FAF5ED", "zone2_bg": "#F9F3EA", "delta_rgb": 8 },
  "threshold": { "min_delta": 15 },
  "fix": {
    "instruction": "Darken zone 2 background",
    "css": ".zone-2 { background: #F0EBE3; }",
    "reference": "tokens.css line 12"
  }
}
```

**If ANY Tier A or Tier B gate FAILS:** proceed to fix cycle (Step 6). Do NOT skip to PA.
**If only ADVISORY gates fail (SC-13B, SC-16):** proceed to screenshots (Step 3). Log advisory results.

**Estimated time:** ~1-2 minutes for 21 gates.

---

### STEP 3: SCREENSHOT CAPTURE

Orchestrator captures ALL screenshots BEFORE spawning PA auditors. Zero Playwright contention.

**Protocol:**
1. Set viewport to 1440px width.
2. Inject animation disable (if not already applied).
3. Wait for `document.fonts.ready`.
4. Take full-page cold-look screenshot.
5. Scroll through page at 80% viewport-height steps, capture at each position.
6. Repeat steps 1-5 at 1024px viewport width.
7. Repeat steps 1-5 at 768px viewport width.

**Naming convention:**
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

**Total screenshots:** ~36-102 depending on page length and 3 viewports.
**Estimated time:** ~5 minutes.

---

### STEP 3.5: GENERATE LOCK SHEET (Amendment #1)

Before spawning PA auditors, generate a lock sheet from builder's _build-log.md.

**Lock sheet classifies audit findings into 3 tiers:**
1. **LOCKED (Soul):** border-radius: 0, box-shadow: none, font trinity, color palette, container width. These are NEVER challengeable. Any finding flagging these as problems is INCORRECT.
2. **LOCKED (Research):** Mechanism selections, zone background assignments, border weights, spacing values -- all from builder's logged decisions. These are challengeable ONLY with compositional reasoning.
3. **CHALLENGEABLE (Builder):** Metaphor choice, zone count, specific color assignments, component placement. These ARE open to perceptual challenge.

**Lock sheet fed to:** Weaver ONLY (Step 5). NOT to auditors (preserves fresh-eyes).

**Write to:** `[output-dir]/_verification/lock-sheet.md`

**Proven by:** Mode 4 PA and Remediation both used lock sheets. Prevents auditors from flagging intentional design choices as defects, and helps weaver correctly classify findings.

---

### STEP 4: PA DEPLOYMENT (9 Auditors)

Spawn 9 Opus agents in PARALLEL. Each reads saved screenshots (no Playwright). Each writes a report.

**Per-auditor spawn prompt:**

```
You are a perceptual auditor for a design system page. You have ZERO
knowledge of how this page was built, what tools were used, or what
the builder intended.

Your assigned questions:
[INSERT QUESTION LIST WITH FULL TEXT FROM flagship-pa-questions.md]

Screenshots are saved at:
[LIST OF ALL SCREENSHOT FILE PATHS]

Read each screenshot using the Read tool. For each question, provide:
- Your answer (YES / NO / PARTIALLY with evidence)
- What you SEE (perceptual language only)
- Severity: WOULD-SHIP / WOULD-NOT-SHIP / CONDITIONAL

Gate diagnostic context (for orientation only, not conclusion):
[PASTE gate-diagnostic.md content]

LANGUAGE RULE: Describe what you SEE, not what the CSS does.
  GOOD: "The background shifts from warm cream to cooler gray"
  BAD:  "The background-color changes from #FEF9F5 to #F0EBE3"

CRITICAL: You MUST write your report using the Write tool to:
  [output-dir]/_pa/pa-auditor-[LETTER].md
```

**Auditor assignments:**

| Auditor | Role | Questions |
|---------|------|-----------|
| A | Impression+Emotion | PA-01, 04, 05, 18, 19, 20, 45, PA-65, PA-67 |
| B | Readability+Typography | PA-02, 06, 07, 08, 29 |
| C | Spatial+Proportion | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53, PA-64, PA-66 |
| D | Flow+Pacing | PA-12, 13, 34, 35, 36, PA-62 |
| E | Grid+Layout | PA-14, 15, 37, 38, 39, PA-63 |
| F | Consistency+Rhythm | PA-16, 17, 40, 41, PA-60, PA-61 |
| G | Metaphor+Ideology | PA-42, 43, 44 |
| H | Responsive | PA-21, 22, 23, 46, 47 |
| I | Adversarial | PA-26, 27, 28, 48 |

**All 9 run in PARALLEL.** No Playwright used by any auditor.
**Estimated time:** ~25 minutes (parallel).

---

### STEP 5: WEAVER SYNTHESIS

Spawn 1 Opus weaver agent. Reads all 9 auditor reports + lock sheet. Produces synthesis.

**Weaver spawn prompt:**

```
You are the PA weaver. You synthesize reports from 9 independent
perceptual auditors who evaluated a design system page from
screenshots only.

Read all 9 reports:
  [LIST OF pa-auditor-A.md through pa-auditor-I.md paths]

Read the lock sheet:
  [output-dir]/_verification/lock-sheet.md

Use the lock sheet to classify findings:
- LOCKED findings that auditors flagged are NOT defects -- note them but do not count against the page
- CHALLENGEABLE findings ARE potential defects -- assess their severity

Produce a synthesis with:

1. PA-05 SCORE (0-4, 0.5 precision):
   Rate each sub-criterion:
   - DESIGNED: Does it feel intentionally crafted?
   - COHERENT: Do elements work together?
   - PROPORTIONATE: Is visual weight distributed well?
   - POLISHED: Are details refined?
   Average = PA-05 score.

2. TIER 5 SCORE:
   Count YES answers from PA-60 through PA-67.
   Apply label: COMPOSED (7-8) / APPROACHING (5-6) / STRUCTURED (3-4) / VOCABULARY ONLY (0-2).

3. TOP-3 ISSUES (ranked by severity):
   Each with: auditor source, question, severity, exact quote.

4. COMPOSITIONAL CRITERIA:
   - Zero soul violations: [MET/FAILED]
   - Zero void patterns: [MET/FAILED]
   - Metaphor STRUCTURAL: [MET/FAILED/N/A]
   - Rhythm not metronomic: [MET/FAILED]
   - Multi-coherence verified: [MET/FAILED]
   - Scale coverage verified: [MET/FAILED]

5. VERDICT:
   - SHIP: PA-05 >= 3.5 AND Tier 5 >= 6/8 AND all criteria MET
   - SHIP WITH RESERVATION: PA-05 >= 3.5 AND Tier 5 4-5/8
   - FIX: PA-05 3.0-3.4 OR criteria FAILED
   - REBUILD: PA-05 < 3.0
   - ESCALATE: 3 fix cycles exhausted

Write synthesis to: [output-dir]/_pa/_pa-report.md
```

**Estimated time:** ~15 minutes.

---

### STEP 6: FIX CYCLE (if verdict = FIX)

Same builder receives structured feedback. Max 3 cycles. Then ESCALATE.

**Fix instruction format (written to `[output-dir]/_fixes/fix-instructions-cycle-N.md`):**

```markdown
## FIX INSTRUCTIONS (Cycle N)

### Gate Failures (structured, with CSS fixes)
[Paste relevant entries from gate-results.json -- measured values, thresholds, specific CSS fixes]

### PA Top-3 Issues (direction, not prescription)
1. [SEVERITY] PA-XX: "[auditor's exact words]"
   - WHERE: [scroll position / element description]
   - WHAT: [perceptual problem in plain language]
   - DIRECTION: [what to change -- NOT specific CSS]

### Tier 5 Gaps (which Tier 5 questions answered NO)
- PA-6N: NO -- "[auditor's reason]"
  IMPLICATION: [what compositional property is missing]

### DO NOT TOUCH (protected elements)
[List elements that passed well -- do not regress]
```

**Key distinction:** Gate failures get SPECIFIC CSS recipes. PA issues get DIRECTION feedback (not CSS prescription).

**Fix cycle structure:**

| Cycle | Builder | PA Auditors | Questions | Gates |
|-------|---------|-------------|-----------|-------|
| 1 (initial) | Opus builds from scratch | 9 Opus (full Mode 4) | All 56 | Full 21 |
| 2 (targeted) | Same Opus fixes | 2 Opus (A + C) | Focused + all Tier 5 | Full 21 |
| 3 (final) | Same Opus fixes | 2 Opus (A + C) | Focused + Tier 5 | Full 21 |

After Cycle 3 fails: **ESCALATE to user.** Do NOT loop.

**Estimated time per cycle:** ~35-40 minutes (builder fix + re-gate + re-PA).

---

### STEP 7: SUCCESS BAR CHECK

| Score | Pass Threshold |
|-------|----------------|
| PA-05 | >= 3.5/4 |
| Tier 5 | >= 6/8 |
| Soul | zero violations (SC-02 through SC-05 all PASS) |
| Voids | zero (PA-50 through PA-53 all PASS) |
| Metaphor | STRUCTURAL (not ANNOUNCED or LABELED) |
| Rhythm | not metronomic (PA-17 + PA-41 PASS) |
| Multi-coherence | SC-13 PASS + PA-61 agreement |
| Scale | DG-1 valid + PA-63 agreement |

**On SHIP or SHIP WITH RESERVATION:** Copy `output.html` to final destination. Report to user with PA-05 score, Tier 5 label, and any reservations.

**On FIX:** Loop to Step 6.
**On REBUILD:** Start fresh from Step 1 (new builder instance).
**On ESCALATE:** Report all gate results + PA synthesis to user with recommendation.

---

## PRACTICAL DETAILS

### Agent Models

| Role | Model | Count | Spawn Method |
|------|-------|-------|-------------|
| Orchestrator | Lead agent | 1 | N/A (this agent) |
| Builder | **Opus** | 1 | Task tool (code subagent) |
| Gate runner | Orchestrator | 0 (same) | Direct Playwright |
| PA Auditors | **Opus** | 9 | Task tool (9 parallel) |
| Weaver | **Opus** | 1 | Task tool |
| Fix cycle PAs | **Opus** | 2 | Task tool (targeted) |

### Playwright Scheduling

**Zero concurrent Playwright usage.** All Playwright operations by orchestrator, sequentially:
1. Builder writes HTML (no Playwright needed).
2. Orchestrator starts HTTP server.
3. Orchestrator runs gate runner via Playwright (sequential, ~2 min).
4. Orchestrator captures screenshots via Playwright (sequential, ~5 min).
5. PA auditors read saved screenshots via Read tool (NO Playwright).
6. Weaver reads reports (no Playwright).
7. If fix cycle: builder fixes, then orchestrator repeats steps 3-6.

### File Structure

```
[output-dir]/
  output.html                       -- The page
  _build-log.md                     -- Builder reasoning trace
  _cascade-value-table.md           -- Computed CSS at boundaries
  _verification/
    gate-results.json               -- Structured PASS/FAIL per gate
    gate-diagnostic.md              -- Human-readable gate summary
    lock-sheet.md                   -- Finding classification for weaver
  _screenshots/
    screenshot-1440px-00-cold.png
    screenshot-1440px-01-scroll.png
    ...
    screenshot-1024px-00-cold.png
    ...
    screenshot-768px-00-cold.png
    ...
  _pa/
    pa-auditor-A.md                 -- Impression+Emotion
    pa-auditor-B.md                 -- Readability+Typography
    pa-auditor-C.md                 -- Spatial+Proportion
    pa-auditor-D.md                 -- Flow+Pacing
    pa-auditor-E.md                 -- Grid+Layout
    pa-auditor-F.md                 -- Consistency+Rhythm
    pa-auditor-G.md                 -- Metaphor+Ideology
    pa-auditor-H.md                 -- Responsive
    pa-auditor-I.md                 -- Adversarial
    _pa-report.md                   -- Weaver synthesis
  _fixes/
    fix-instructions-cycle-1.md
    fix-instructions-cycle-2.md
    fix-instructions-cycle-3.md
```

### Timing

| Phase | Duration | Cumulative |
|-------|----------|-----------|
| Intake + preflight | ~1 min | ~1 min |
| Builder (Phases A-D) | 90-150 min | ~91-151 min |
| Gate runner | ~2 min | ~93-153 min |
| Screenshots | ~5 min | ~98-158 min |
| Lock sheet generation | ~2 min | ~100-160 min |
| 9 PA auditors (parallel) | ~25 min | ~125-185 min |
| Weaver synthesis | ~15 min | ~140-200 min |
| **Total (no fix cycles)** | **~140-200 min** | |
| Per fix cycle | ~40 min | +40 min each |
| **Total (1 fix cycle)** | **~180-240 min** | |
| **Total (3 fix cycles)** | **~260-320 min** | |

### Cost

~$15-40/page (Fat Core architecture). Primarily builder token cost.

---

## CROSS-REFERENCE VERIFICATION STATUS

All orchestrator steps verified against 4 proven architectures:
- **CD-006** (39/40, CEILING tier -- NOT Flagship target): Confirmed Opus model, file access patterns. CD-006 is a FLOOR REFERENCE for Ceiling quality; Flagship targets BEYOND CD-006.
- **Middle Experiment** (PA-05 4/4): Confirmed recipe format, content-first approach
- **Flagship Remediation** (PA-05 2.5/4): Confirmed spawned builder, same-builder fix cycle, lock sheet
- **Mode 4 PA** (102 screenshots, 9 auditors): Confirmed screenshot pre-capture, 3 viewports, question assignments

4 amendments from cross-reference incorporated:
1. Lock sheet generation (Step 3.5) -- proven in Mode 4 PA and Remediation
2. Preflight validation (Step 0.5) -- proven by Remediation preflight
3. Adjusted timing (gate runner 2 min, weaver 15 min) -- based on evidence
4. Recipe format warning in builder spawn prompt -- addresses #1 failure root cause

---

**END OF ORCHESTRATOR SECTION DRAFT**
