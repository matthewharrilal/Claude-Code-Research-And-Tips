# Pipeline v3 Architecture Diagram

**Date:** 2026-02-20
**Status:** Post-enrichment complete architecture
**Source files:**
- `~/.claude/skills/build-page/SKILL.md` (436 lines) -- orchestrator
- `design-system/pipeline/conventions-brief.md` (443 lines) -- builder guidance
- `design-system/pipeline/gate-runner.md` (1159 lines) -- programmatic verification
- `design-system/pipeline/flagship-pa-questions.md` (144 lines) -- perceptual verification

---

## PIPELINE v3: COMPLETE FLOW DIAGRAM

```
                    /build-page <content-path>
                              |
                              v
 ================================================================
 |              STAGE 0: INTAKE + SETUP                         |
 |                                                              |
 |  INPUT:  content.md (user-provided)                          |
 |  OUTPUT: ephemeral/pages/[slug]/ directory                   |
 |                                                              |
 |  1. Parse content source from command argument               |
 |  2. Read content file completely                             |
 |  3. Create output directory                                  |
 ================================================================
                              |
                              v
 ================================================================
 |              STAGE 1: BUILDER DEPLOYMENT                     |
 |              (Wave 1: 1 Opus agent)                          |
 |                                                              |
 |  CONSUMES:                                                   |
 |    [1] conventions-brief.md       (443 lines, PRIMARY)       |
 |    [2] content.md                 (user content)             |
 |    [3] mechanism-catalog.md       (reference)                |
 |    [4] components.css             (reference)                |
 |    [5] tokens.css                 (reference)                |
 |    [6] prohibitions.md            (soul, read LAST)          |
 |                                                              |
 |  BUILDER PROCESS (from conventions brief):                   |
 |    Phase A: Read content, identify zones/tensions/metaphor   |
 |    Phase B: Plan -- conviction statement + transition table  |
 |             + fractal echo table (BEFORE any CSS)            |
 |    Phase C: Build -- HTML + CSS with 3 checkpoints [NEW]     |
 |    Phase D: Self-verify -- cascade value table + 5 questions |
 |                                                              |
 |  PRODUCES:                                                   |
 |    output.html          -- the page                          |
 |    _build-log.md        -- plans + reflection                |
 |    _cascade-value-table.md -- computed CSS at boundaries     |
 ================================================================
                              |
                              |
      +-----------------------+------------------------+
      |                                                |
      v                                                v
 ==============================    ==============================
 | MICRO-GATES (during build) |    | (run inline by builder as  |
 | [Thresholds aligned w/     |    |  self-checks at 3          |
 |  gate-runner.md] [NEW]     |    |  checkpoints) [NEW]        |
 |                             |    |                            |
 | MG-1 After HTML skeleton:  |    | BOUNDARY-BY-BOUNDARY       |
 |   SC-06 (>=5 ARIA)         |    | CHECKPOINTS (was 4,        |
 |   SC-07 (skip link)        |    | now 3) [NEW]               |
 |   SC-08 (>=8 components)   |    |                            |
 |   SC-12 (3-5 zones)        |    | CP-1: After HTML skeleton  |
 |   DG-3  (landmarks)        |    |   >=5 ARIA? Skip link?     |
 |                             |    |   >=8 component classes?   |
 | MG-2 After zone bgs:       |    |                            |
 |   SC-04 (R>=G>=B)          |    | CP-2: After zone boundaries|
 |   SC-05 (no #000/#FFF)     |    |   All bg deltas >=15 RGB?  |
 |   SC-09 (>=15 RGB delta)   |    |   >=3 border configs?      |
 |                             |    |   >=1 structural border?   |
 | MG-3 After borders:        |    |   >=3 channels shift/bnd?  |
 |   SC-01 (940-960px)        |    |                            |
 |   SC-02 (radius:0 etc)     |    | CP-3: After full build     |
 |   SC-15 (>=3 border cfgs)  |    |   heading:meta ratio >=3:1?|
 |                             |    |   font-size delta >=2px?   |
 | MG-4 After typography:     |    |   Midpoint observation?    |
 |   SC-03 (font trinity)     |    |   5 questions complete?    |
 |   SC-11 (>=10px display)   |    |                            |
 |                             |    | Max 2 re-runs per MG       |
 ==============================    ==============================
                              |
                              v
 ================================================================
 |              STAGE 2: FULL GATE VERIFICATION                 |
 |              (Run by orchestrator via Playwright)             |
 |                                                              |
 |  SETUP:                                                      |
 |    python3 -m http.server 8765                               |
 |    Navigate to http://localhost:8765/output.html              |
 |    Inject: animation:none, opacity:1, scroll-behavior:auto   |
 |    Wait: document.fonts.ready                                |
 |                                                              |
 |  CONSUMES:                                                   |
 |    output.html              (rendered in Playwright)         |
 |    _build-log.md            (for DG-1, DG-2, DG-4, BG-1/2)  |
 |    _cascade-value-table.md  (for DG-2 cross-validation)      |
 |                                                              |
 |  PRODUCES:                                                   |
 |    _gate-results.json       (all gates with measured values)  |
 ================================================================
                              |
                              v
 ================================================================
 |              GATE EXECUTION GROUPS (22 gates total)           |
 |                                                              |
 |  GROUP 0 -- Zone Validation (FIRST) [NEW]                    |
 |  +------------------------------------------------------+    |
 |  | SC-00: Zone Selector Validation [NEW]                |    |
 |  |   Primary: [class*="zone"], section[data-zone]       |    |
 |  |   Fallback: bare <section>, [data-section],          |    |
 |  |            main children                             |    |
 |  |   Threshold: >= 3 zone elements resolved             |    |
 |  |   IF FAIL: skip ALL per-zone gates, report FAIL      |    |
 |  |   IF FALLBACK: store selector for all subsequent     |    |
 |  +------------------------------------------------------+    |
 |                              |                                |
 |               SC-00 PASS?  -+--> NO: SKIP per-zone gates     |
 |                    |                 (SC-09,10,11,13,13B,     |
 |                   YES                 14-sub3,16)             |
 |                    |                 Identity gates still run  |
 |                    v                                          |
 |  GROUP 1 -- Identity (parallel)                               |
 |  +------------------------------------------------------+    |
 |  | SC-01: Container Width       | 940-960px     | BLOCK |    |
 |  | SC-02: Soul Properties       | r:0,bs:none   | BLOCK |    |
 |  | SC-03: Font Trinity          | 3 fonts only  | BLOCK |    |
 |  | SC-04: Warm Palette          | R>=G>=B       | BLOCK |    |
 |  | SC-05: No Pure Extremes      | no #000/#FFF  | BLOCK |    |
 |  +------------------------------------------------------+    |
 |                              |                                |
 |                              v                                |
 |  GROUP 2 -- Structure (parallel)                              |
 |  +------------------------------------------------------+    |
 |  | SC-06: ARIA Landmarks        | >= 5          | BLOCK |    |
 |  | SC-07: Skip Link             | present       | BLOCK |    |
 |  | SC-08: Component Library     | >= 8 types    | BLOCK |    |
 |  | SC-12: Zone Count            | 3-5 zones     | BLOCK |    |
 |  | DG-3:  Landmark Complete     | hdr+main+ftr  | BLOCK |    |
 |  +------------------------------------------------------+    |
 |                              |                                |
 |                              v                                |
 |  GROUP 3 -- Perception (sequential, needs GROUP 2)            |
 |  +------------------------------------------------------+    |
 |  | SC-09: Background Delta      | >=15 RGB/bnd  | BLOCK |    |
 |  | SC-10: Stacked Gap           | <=120px total  | BLOCK |    |
 |  | SC-11: Typography Zones      | >=10px disp-bd | BLOCK |    |
 |  | SC-14: Sub-Perceptual        | 3 sub-checks  | BLOCK |    |
 |  |   (1) No ls 0-0.025em                        |       |    |
 |  |   (2) No ls micro-clustering (<0.5px apart)  |       |    |
 |  |   (3) No intra-zone bg 1-14 RGB              |       |    |
 |  | SC-15: Border Presence       | >=3 configs   | BLOCK |    |
 |  +------------------------------------------------------+    |
 |                              |                                |
 |                              v                                |
 |  GROUP 4 -- Compositional (sequential, depends on GROUP 3)    |
 |  +------------------------------------------------------+    |
 |  | SC-13: Multi-Coherence       | >=3/bnd avg>=4 | BLOCK |   |
 |  |   6 channels: Chromatic, Typographic, Spatial, |       |   |
 |  |   Structural, Behavioral, Material             |       |   |
 |  |   (Ch 5-6 = enhancement only) [NEW docs]      |       |   |
 |  | SC-13B: Direction Coherence  | >=50% coherent | ADVSR |   |
 |  | SC-16: Monotonic Progress    | >=1 monotonic  | ADVSR |   |
 |  +------------------------------------------------------+    |
 |                              |                                |
 |                              v                                |
 |  GROUP 5 -- Deliverable (after GROUP 4)                       |
 |  +------------------------------------------------------+    |
 |  | DG-1: Fractal Echo Table     | 5 rows+evidence| BLOCK |   |
 |  | DG-2: Cascade Value Table    | all boundaries | BLOCK |   |
 |  |   Cross-validates vs SC-13 measured values     |       |   |
 |  | DG-4: Handoff Validation     | 5 sub-checks   | BLOCK |   |
 |  |   (1) zone_count 3-5                           |       |   |
 |  |   (2) bg_deltas ALL >=15 RGB                   |       |   |
 |  |   (3) mechanisms >=14 total + 1/category       |       |   |
 |  |   (4) transitions >=3 distinct types            |       |   |
 |  |   (5) grid_layouts >=2 distinct patterns        |       |   |
 |  +------------------------------------------------------+    |
 |                              |                                |
 |                              v                                |
 |  BEHAVIORAL GATES (non-blocking, from build log) [NEW refs]   |
 |  +------------------------------------------------------+    |
 |  | BG-1: Metaphor Independence  | log order check| ATTEST|   |
 |  |   content -> tension -> metaphor -> library    |       |   |
 |  | BG-2: Metaphor Structural    | STRUCT vs ANNCD | ATTEST|   |
 |  |   Fresh-eyes Opus judgment (CSS implications?) |       |   |
 |  +------------------------------------------------------+    |
 |                                                              |
 |  DEPENDENCY CHAIN:                                           |
 |  SC-00 -> SC-12 -> SC-09 -> SC-13 -> SC-13B -> SC-16        |
 |                                SC-13 -> DG-2 (cross-val)     |
 ================================================================
                              |
                              |
                    ALL BLOCKING GATES PASS?
                              |
               +--------------+--------------+
               |                             |
              YES                           NO
               |                             |
               v                             v
 ============================   ============================
 | STAGE 3: SCREENSHOT      |   | STAGE 5: FIX CYCLE       |
 | CAPTURE                   |   | (see below)              |
 | (by orchestrator)         |   ============================
 |                           |
 | Viewports: 1440, 1024,   |
 |            768px          |
 |                           |
 | Per viewport:             |
 |   cold screenshot         |
 |   scroll-through at 80%   |
 |   viewport-height steps   |
 |                           |
 | OUTPUT:                   |
 |   _screenshots/*.png      |
 |   (cold + scroll series   |
 |    at 3 viewports)        |
 |                           |
 | Stop HTTP server after    |
 ============================
               |
               v
 ================================================================
 |              STAGE 3.5: LOCK SHEET GENERATION                |
 |              (by orchestrator)                                |
 |                                                              |
 |  CONSUMES:                                                   |
 |    _build-log.md                                             |
 |    _gate-results.json                                        |
 |                                                              |
 |  CLASSIFIES every element as:                                |
 |    LOCKED (Soul)       -- identity prohibitions, immutable   |
 |    LOCKED (Research)   -- gate-confirmed thresholds met      |
 |    CHALLENGEABLE       -- builder creative choices           |
 |                                                              |
 |  OUTPUT: _lock-sheet.md                                      |
 |  ROUTING: Weaver ONLY (NOT PA auditors)                      |
 ================================================================
               |
               v
 ================================================================
 |              STAGE 4: PERCEPTUAL AUDIT (PA)                  |
 |              56 questions: 48 standard + 8 Tier 5            |
 |              9 Opus auditors (parallel) + 1 Opus weaver      |
 |                                                              |
 |  CONSUMES:                                                   |
 |    _screenshots/*.png       (Read tool, NOT Playwright)      |
 |    perceptual-auditing SKILL.md  (48 standard questions)     |
 |    flagship-pa-questions.md      (8 Tier 5 questions)        |
 |                                                              |
 |  AUDITORS RECEIVE: ZERO build context (fresh-eyes)           |
 |  LANGUAGE RULE: Perceptual only ("background shifts from     |
 |                 warm cream to cooler gray" not CSS values)    |
 ================================================================
               |
               v
 ================================================================
 |              PA AUDITOR ASSIGNMENTS (9 parallel agents)       |
 |                                                              |
 |  +----------------------------------------------------------+|
 |  | AUDITOR | ROLE                | QUESTIONS                ||
 |  |---------|---------------------|--------------------------|  |
 |  | A       | Impression+Emotion  | PA-01,04,05,18,19,20,45, |
 |  |         |                     | **65**,**67**            ||
 |  | B       | Readability+Type    | PA-02,06,07,08,29        ||
 |  | C       | Spatial+Proportion  | PA-09,10,11,30,31,32,33, ||
 |  |         |                     | 50,51,52,53,**64**,**66**||
 |  | D       | Flow+Pacing         | PA-12,13,34,35,36,**62** ||
 |  | E       | Grid+Layout         | PA-14,15,37,38,39,       ||
 |  |         |                     | **63** [ENHANCED] [NEW]  ||
 |  | F       | Consistency+Rhythm  | PA-16,17,40,41,          ||
 |  |         |                     | **60**,**61**            ||
 |  | G       | Metaphor+Ideology   | PA-42,43,                ||
 |  |         |                     | 44 [ENHANCED] [NEW]      ||
 |  | H       | Responsive          | PA-21,22,23,46,47        ||
 |  | I       | Adversarial         | PA-26,27,28,48           ||
 |  +----------------------------------------------------------+|
 |                                                              |
 |  **Bold** = Tier 5 questions (PA-60 through PA-67)           |
 |                                                              |
 |  [ENHANCED] PA-44: Now includes metaphor SPATIAL COVERAGE    |
 |    "Does the metaphor persist across the ENTIRE page, or     |
 |     does it fade or disappear in some sections?" [NEW]       |
 |                                                              |
 |  [ENHANCED] PA-63: Now includes PARAMETRIC ECHO detection    |
 |    "Find the SAME component type in a different section --   |
 |     does it adapt to its surroundings?" [NEW]                |
 |                                                              |
 |  EACH AUDITOR PRODUCES:                                      |
 |    _pa/pa-auditor-[A-I].md                                   |
 |    Per question: YES/NO/PARTIALLY + evidence + severity      |
 ================================================================
               |
               v
 ================================================================
 |              PA WEAVER (1 Opus agent, AFTER all 9 complete)  |
 |                                                              |
 |  CONSUMES:                                                   |
 |    _pa/pa-auditor-[A-I].md  (9 auditor reports)              |
 |    _gate-results.json       (diagnostic context)             |
 |    _lock-sheet.md           (what is LOCKED vs CHALLENGEABLE)|
 |                                                              |
 |  PRODUCES:                                                   |
 |    _pa/_pa-report.md        -- synthesis with:               |
 |      1. PA-05 SCORE (4 sub-criteria, 0-4 avg to 0.5)        |
 |         DESIGNED / COHERENT / PROPORTIONATE / POLISHED       |
 |      2. TIER 5 SCORE (count YES from PA-60 to PA-67)        |
 |         7-8 COMPOSED / 5-6 APPROACHING /                     |
 |         3-4 STRUCTURED / 0-2 VOCABULARY ONLY                 |
 |      3. TOP-5 ISSUES (WOULD-NOT-SHIP first)                  |
 |         Names: channel, fractal scale, transition type       |
 |      4. COMPOSITIONAL CRITERIA (6 binary checks)             |
 |      5. VERDICT                                              |
 |    _pa/_pa-matrix.md        -- 56 x 9 cross-tabulation      |
 |      Inter-auditor agreement analysis                        |
 |      Calibration targets flagged                             |
 ================================================================
               |
               v
 ================================================================
 |              STAGE 6: VERDICT                                |
 |                                                              |
 |  +----------------------------------------------------------+|
 |  | PA-05     | Tier 5   | Criteria  | VERDICT               ||
 |  |-----------|----------|-----------|----------------------- ||
 |  | >= 3.5    | >= 6/8   | All MET   | **SHIP**              ||
 |  | >= 3.5    | 4-5/8    | All MET   | **SHIP W/ RESERVATION**|
 |  | >= 3.5    | 0-3/8    | All MET   | **NOT FLAGSHIP**      ||
 |  | 3.0-3.4   | any      | any       | **FIX CYCLE** -->     ||
 |  | < 3.0     | N/A      | N/A       | **REBUILD**           ||
 |  | 3 cycles  | N/A      | N/A       | **ESCALATE**          ||
 |  +----------------------------------------------------------+|
 |                                                              |
 |  MANDATORY CRITERIA (all must be MET):                       |
 |    [ ] Zero soul violations (SC-01 through SC-05 PASS)       |
 |    [ ] Zero void patterns (PA-50-53, SC-10 PASS)             |
 |    [ ] Metaphor is STRUCTURAL (not ANNOUNCED)                |
 |    [ ] Multi-coherence verified (SC-13 + PA-61)              |
 |    [ ] Scale coverage verified (DG-1 + PA-63)                |
 |                                                              |
 |  OUTPUT: _run-manifest.md (full run summary)                 |
 ================================================================
               |
               |
    SHIP/SHIP W/ RESERVATION?
               |
         +-----+-----+
         |           |
        YES         NO (FIX or REBUILD)
         |           |
         v           v
    ==========   ============================
    | DONE.  |   | STAGE 5: FIX CYCLE       |
    | Report |   | (see below)              |
    | to user|   ============================
    ==========


 ================================================================
 ================================================================
 |                                                              |
 |              STAGE 5: FIX CYCLE                              |
 |              (loops back to STAGE 2)                          |
 |                                                              |
 ================================================================

 ================================================================
 |  5.1  BUILD FIX INSTRUCTIONS                                |
 |                                                              |
 |  CONSUMES:                                                   |
 |    _gate-results.json       (failed gates)                   |
 |    _pa/_pa-report.md        (top-5 issues)                   |
 |    _build-log.md            (transition table, conviction)   |
 |    conventions-brief.md     (section references) [NEW]       |
 |                                                              |
 |  PRODUCES:                                                   |
 |    _fixes/fix-instructions-cycle-N.md                        |
 |      - Gate failures with measured values + CSS fix          |
 |      - Compositional context per failure [NEW]               |
 |        (boundary direction, missing channels,                |
 |         conventions-brief section reference)                 |
 |      - PA top-5 issues (directional, not prescriptive)       |
 |      - Tier 5 gaps (which PA-6N scored NO)                   |
 |      - DO NOT TOUCH list (protected elements)                |
 |                                                              |
 |  FIX RECIPE COMPOSITIONAL CONTEXT [NEW]                      |
 |  +----------------------------------------------------------+|
 |  | Gate Category        | Brief Section Reference           ||
 |  |----------------------|-----------------------------------||
 |  | SC-09,SC-14(bg)      | S2: PERCEPTION                   ||
 |  | SC-10                | S2: PERCEPTION (stacked gap)      ||
 |  | SC-11                | S5: FRACTAL ECHO (scale)          ||
 |  | SC-13,SC-13B         | S4: MULTI-COHERENCE               ||
 |  | SC-14(ls)            | S2: PERCEPTION (ls floor)         ||
 |  | SC-15                | S4: MULTI-COHERENCE (Structural)  ||
 |  | SC-01                | S1: IDENTITY (container)          ||
 |  | SC-02-05             | S1: IDENTITY + S12: RESTRAINT     ||
 |  | SC-06-08,DG-3        | S5: FRACTAL ECHO (components)     ||
 |  +----------------------------------------------------------+|
 |                                                              |
 |  Fix recipe JSON format [NEW extension]:                     |
 |  {                                                           |
 |    "fix": {                                                  |
 |      "instruction": "...",                                   |
 |      "css": "...",                                           |
 |      "alternative": "...",                                   |
 |      "reference": "...",                                     |
 |      "brief_section": "Re-read Section N (NAME)" [NEW]      |
 |    }                                                         |
 |  }                                                           |
 ================================================================
               |
               v
 ================================================================
 |  5.2  SEND TO SAME BUILDER                                  |
 |                                                              |
 |  CRITICAL: Use the SAME Opus builder agent                   |
 |  Framing: "Re-read your conviction statement and transition  |
 |  table in _build-log.md before applying fixes."              |
 |  Builder applies fixes, updates output.html + build log      |
 ================================================================
               |
               v
 ================================================================
 |  5.3  RE-VERIFY (loop back to STAGE 2)                       |
 |                                                              |
 |  - Re-run ALL gates (updated _gate-results.json)             |
 |  - Re-capture screenshots (updated _screenshots/)            |
 |  - Cycle 2-3: deploy 2 PA auditors (A+C) focused + Tier 5   |
 |  - Weaver re-synthesizes                                     |
 |                                                              |
 |  CYCLE LIMITS:                                               |
 |  +----------------------------------------------------------+|
 |  | Cycle | PA Auditors | Questions     | Duration           ||
 |  |-------|-------------|---------------|--------------------||
 |  | 1     | 9 Opus      | All 56        | ~45 min            ||
 |  | 2     | 2 Opus (A+C)| Focused+Tier5 | ~20 min            ||
 |  | 3     | 2 Opus (A+C)| Focused+Tier5 | ~20 min            ||
 |  +----------------------------------------------------------+|
 |                                                              |
 |  After Cycle 3: ESCALATE to user. No Cycle 4.               |
 ================================================================


 ================================================================
 ================================================================
 |                                                              |
 |              GATE SUMMARY TABLE (22 gates)                   |
 |                                                              |
 ================================================================

 +-----+-------+-----------------------------+------+--------+---------+
 | #   | ID    | Name                        | Tier | Blocks | Flagship|
 +-----+-------+-----------------------------+------+--------+---------+
 |  0  | SC-00 | Zone Selector Validation     | Pre  | YES*   | >=3    |
 |     |       |                        [NEW] |      |        | zones  |
 +-----+-------+-----------------------------+------+--------+---------+
 |  1  | SC-01 | Container Width              | T1/B | YES    | 940-   |
 |     |       |                              |      |        | 960px  |
 +-----+-------+-----------------------------+------+--------+---------+
 |  2  | SC-02 | Soul Properties              | T1/B | YES    | r:0    |
 |     |       |                              |      |        | bs:none|
 +-----+-------+-----------------------------+------+--------+---------+
 |  3  | SC-03 | Font Trinity                 | T1/B | YES    | 3 fonts|
 +-----+-------+-----------------------------+------+--------+---------+
 |  4  | SC-04 | Warm Palette                 | T1/B | YES    | R>=G>=B|
 +-----+-------+-----------------------------+------+--------+---------+
 |  5  | SC-05 | No Pure Extremes             | T1/B | YES    | no 000 |
 |     |       |                              |      |        | no FFF |
 +-----+-------+-----------------------------+------+--------+---------+
 |  6  | SC-06 | ARIA Landmarks               | T1/B | YES    | >= 5   |
 +-----+-------+-----------------------------+------+--------+---------+
 |  7  | SC-07 | Skip Link                    | T1/B | YES    | present|
 +-----+-------+-----------------------------+------+--------+---------+
 |  8  | SC-08 | Component Library            | T1/B | YES    | >= 8   |
 +-----+-------+-----------------------------+------+--------+---------+
 |  9  | SC-09 | Background Delta             | T1/A | YES    | >=15   |
 |     |       |                              |      |        | RGB/bnd|
 +-----+-------+-----------------------------+------+--------+---------+
 | 10  | SC-10 | Stacked Gap                  | T1/A | YES    | <=120px|
 +-----+-------+-----------------------------+------+--------+---------+
 | 11  | SC-11 | Typography Zones             | T1/A | YES    | >=10px |
 |     |       |                              |      |        | 3+ zone|
 +-----+-------+-----------------------------+------+--------+---------+
 | 12  | SC-12 | Zone Count                   | T1/A | YES    | 3-5    |
 +-----+-------+-----------------------------+------+--------+---------+
 | 13  | SC-13 | Multi-Coherence              | T1/A | YES    | >=3/bnd|
 |     |       |                              |      |        | avg>=4 |
 +-----+-------+-----------------------------+------+--------+---------+
 | 14  | SC-14 | Sub-Perceptual Prevention    | T1/A | YES    | 3 sub- |
 |     |       |                              |      |        | checks |
 +-----+-------+-----------------------------+------+--------+---------+
 | 15  | SC-15 | Border/Structural Presence   | T1/A | YES    | >=3    |
 |     |       |                              |      |        | configs|
 +-----+-------+-----------------------------+------+--------+---------+
 | 16  | SC-13B| Direction Coherence          | T1/A | ADVSRY | >=50%  |
 +-----+-------+-----------------------------+------+--------+---------+
 | 17  | SC-16 | Monotonic Progress           | T1/A | ADVSRY | >=1    |
 |     |       |                              |      |        | monot. |
 +-----+-------+-----------------------------+------+--------+---------+
 | 18  | DG-1  | Fractal Echo Table           | T2/A | YES    | 5 rows |
 +-----+-------+-----------------------------+------+--------+---------+
 | 19  | DG-2  | Cascade Value Table          | T2/A | YES    | all bnd|
 |     |       |                              |      |        | x-val  |
 +-----+-------+-----------------------------+------+--------+---------+
 | 20  | DG-3  | Landmark Completeness        | T1/B | YES    | h+m+f  |
 +-----+-------+-----------------------------+------+--------+---------+
 | 21  | DG-4  | Handoff Validation           | T1/A | YES    | 5 sub- |
 |     |       |                              |      |        | checks |
 +-----+-------+-----------------------------+------+--------+---------+
 | --  | BG-1  | Metaphor Independence        | T3/C | ATTEST | log    |
 |     |       |                              |      |        | order  |
 +-----+-------+-----------------------------+------+--------+---------+
 | --  | BG-2  | Metaphor Structural          | T3/C | ATTEST | struct |
 |     |       |                              |      |        | vs ann |
 +-----+-------+-----------------------------+------+--------+---------+

 TOTALS: 1 pre-gate + 17 blocking + 2 advisory + 2 behavioral = 22 gates
 Tier Pre: 1 | Tier 1 programmatic: 15 | Tier 2 deliverable: 4 | Tier 3 behavioral: 2
 Flagship elevations: 6 gates (SC-06, SC-08, SC-11, SC-12, SC-13, SC-15)

 * SC-00 blocks ALL per-zone gates if it fails


 ================================================================
 ================================================================
 |                                                              |
 |              AGENT MODEL MAP                                 |
 |                                                              |
 ================================================================

 +---------------------+-------+-------+------------------------+
 | Role                | Model | Count | Playwright Access?     |
 +---------------------+-------+-------+------------------------+
 | Orchestrator        | You   |   1   | YES (gates+screenshots)|
 | Builder             | Opus  |   1   | NO                     |
 | PA Auditors (init)  | Opus  |   9   | NO (Read screenshots)  |
 | PA Auditors (fix)   | Opus  |   2   | NO (Read screenshots)  |
 | PA Weaver           | Opus  |   1   | NO                     |
 +---------------------+-------+-------+------------------------+
 Total agents: 12 (initial cycle), 4 (fix cycles 2-3)
 Playwright: ZERO concurrent. All sequential by orchestrator.


 ================================================================
 ================================================================
 |                                                              |
 |              FILE ARCHITECTURE                               |
 |                                                              |
 ================================================================

 ephemeral/pages/[content-slug]/
 |
 +-- output.html                    # The page (self-contained)
 +-- _build-log.md                  # Plans, reflection, overrides
 +-- _cascade-value-table.md        # CSS values at all boundaries
 +-- _lock-sheet.md                 # LOCKED vs CHALLENGEABLE
 +-- _gate-results.json             # All 22 gates with measurements
 +-- _run-manifest.md               # Run summary + verdict
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
 |   +-- _pa-report.md              # Weaver synthesis
 |   +-- _pa-matrix.md              # 56x9 cross-tabulation
 +-- _fixes/
     +-- fix-instructions-cycle-1.md
     +-- fix-instructions-cycle-2.md # (if needed)
     +-- fix-instructions-cycle-3.md # (if needed)


 ================================================================
 ================================================================
 |                                                              |
 |              [NEW] ENRICHMENT CHANGELOG                      |
 |              Elements added by pipeline enrichment           |
 |                                                              |
 ================================================================

 SOURCE FILES ENRICHED:
   conventions-brief.md:  +24 lines (channel threshold table,
                          boundary CSS recipe example, stack
                          relationship bridge, zone markup docs)
   gate-runner.md:        +133 lines (SC-00 pre-gate, execution
                          groups restructured, fix recipe
                          compositional context, phantom channel
                          docs, summary table updated)
   SKILL.md:              +35 lines (SC-00 in gate table,
                          BG-1/BG-2 refs, threshold alignment,
                          checkpoint restructure 4->3,
                          fix recipe brief_section field)
   flagship-pa-questions.md: ~10 lines modified (PA-44 spatial
                          coverage, PA-63 parametric echo)

 NEW ELEMENTS SUMMARY:

   [NEW] SC-00: Zone Selector Validation Pre-Gate
     WHY: #1 single point of failure -- all per-zone gates depend
          on zone selectors. If builder uses non-standard markup,
          all gates silently pass or return meaningless data.
     HOW: Primary selector + 3-tier fallback chain + stored
          selector propagation to all subsequent gates.

   [NEW] Fix Recipe Compositional Context
     WHY: Report 17 found 8 of 9 compositional concepts suffer
          TOTAL EXTINCTION in the fix cycle return path. Builders
          get CSS symptoms, not architectural guidance.
     HOW: Each fix recipe includes a conventions-brief section
          reference (3-word pointer) that routes the builder back
          to the compositional world-model during fixes.

   [NEW] Boundary-by-Boundary Checkpoints (3 instead of 4)
     WHY: Original 4 checkpoints were channel-grouped (all bgs,
          then all borders, then all typography). This produces
          channel-grouped CSS, not boundary-coherent CSS.
     HOW: 3 checkpoints organized by build phase: (1) HTML
          skeleton, (2) zone boundaries (all channels together
          per boundary), (3) full build verification.

   [NEW] BG-1/BG-2 Behavioral Gate References in SKILL.md
     WHY: Behavioral gates existed in gate-runner.md but were
          entirely absent from the orchestrator. Metaphor quality
          was programmatically unchecked.
     HOW: References added to structured gate output and
          verification sections.

   [NEW] Channel Threshold Perception Table (in brief)
     WHY: Thresholds were scattered across Sections 2, 4, and 9B.
          Builders had to assemble the perception physics from 3
          different locations.
     HOW: Single reference table mapping channels to CSS
          properties and perception floors.

   [NEW] Phantom Channel Documentation (Ch 5-6)
     WHY: Behavioral and Material channels had 1-line definitions
          with zero CSS guidance. SC-13 counts all 6 channels but
          Ch 5-6 are nearly impossible to shift.
     HOW: DEFERRED resolution documented. Current recommendation:
          keep denominator at 6 but ADVISORY when shifts come
          from enhancement channels only.

   [ENHANCED] PA-44: Metaphor Spatial Coverage
     WHY: B9 finding -- a page could score YES on metaphor
          quality while the metaphor vanishes in half the
          sections. No question detected this gap.
     HOW: Added "Does the metaphor persist across the ENTIRE
          page?" clause to existing PA-44 question.

   [ENHANCED] PA-63: Parametric Echo Detection
     WHY: Conventions brief defines parametric echo (component
          padding varies by zone density) but no PA question
          tested for it. Same component in different zones
          should look different.
     HOW: Added "Find the SAME component type in a different
          section -- does it adapt?" clause. STRONG YES for
          context-responsive components.

   [DEFERRED] SC-14B: Micro-clustering Detection
     STATUS: Sub-check 2 of SC-14 already handles letter-spacing
             micro-clustering (<0.5px apart). A separate SC-14B
             gate was proposed but absorbed into SC-14's existing
             3 sub-checks. No new gate ID needed.

   [DEFERRED] PA-68/69/70: New Tier 5 Questions
     STATUS: Pre-registered but NOT applied per Report 11
             guidance ("Do NOT add new PA questions before first
             /build-page run provides calibration data").
             PA-68 (Transition Texture), PA-69 (Deliberate
             Asymmetry), PA-70 (Content-Form Echo).

   [DEFERRED] BG-3: No separate BG-3 gate exists.
     STATUS: The original task description anticipated a BG-3 but
             the enrichment research found only BG-1 (Metaphor
             Independence) and BG-2 (Metaphor Structural) in the
             gate system. No third behavioral gate was created.


 ================================================================
 ================================================================
 |                                                              |
 |              END-TO-END FLOW SUMMARY                         |
 |                                                              |
 ================================================================

 /build-page <content.md>
       |
       v
 [0] INTAKE: parse content, create output dir
       |
       v
 [1] BUILDER (1 Opus): 4 phases, 3 checkpoints [NEW],
     reads brief + content + catalog + components + tokens + prohibitions
     writes output.html + _build-log.md + _cascade-value-table.md
       |
       v
 [2] GATES (orchestrator, Playwright): 22 gates in 6 groups
     SC-00 [NEW] -> GROUP 1-5 -> BG-1/BG-2
     writes _gate-results.json
       |
       +-- FAIL? --> [5] FIX CYCLE (fix instructions with
       |                 compositional context [NEW],
       |                 same builder, re-verify, max 3 cycles)
       |                 --> loops back to [2]
       v
 [3] SCREENSHOTS (orchestrator): 3 viewports, cold + scroll
     writes _screenshots/*.png
       |
       v
 [3.5] LOCK SHEET (orchestrator): classify LOCKED vs CHALLENGEABLE
       writes _lock-sheet.md
       |
       v
 [4] PA (9 Opus auditors parallel):
     56 questions (48 standard + 8 Tier 5)
     PA-44 [ENHANCED] + PA-63 [ENHANCED] [NEW]
     writes _pa/pa-auditor-[A-I].md
       |
       v
 [4.5] WEAVER (1 Opus): synthesize 9 reports
       PA-05 score + Tier 5 score + top-5 issues + criteria + verdict
       writes _pa/_pa-report.md + _pa/_pa-matrix.md
       |
       v
 [6] VERDICT:
     SHIP (PA-05>=3.5, T5>=6/8, criteria MET)
     SHIP W/ RESERVATION (PA-05>=3.5, T5 4-5/8)
     FIX (PA-05 3.0-3.4) --> [5] FIX CYCLE
     REBUILD (PA-05<3.0)
     ESCALATE (3 cycles exhausted)
       |
       v
 [7] MANIFEST: write _run-manifest.md, report to user

 ================================================================
 END PIPELINE v3 DIAGRAM
 ================================================================
```

---

## PROVENANCE

This diagram was generated by reading the 4 pipeline files in their post-enrichment state and cross-referencing the enrichment change manifests at:
- `ephemeral/pipeline-enrichment-impl/01-brief-changes.md`
- `ephemeral/pipeline-enrichment-impl/02-skill-changes.md`
- `ephemeral/pipeline-enrichment-impl/03-gate-changes.md`
- `ephemeral/pipeline-enrichment-impl/04-pa-changes.md`

All [NEW] tags indicate elements added or modified by the enrichment process.
All [ENHANCED] tags indicate existing elements whose scope was expanded.
All [DEFERRED] tags indicate proposed elements that were not applied.
