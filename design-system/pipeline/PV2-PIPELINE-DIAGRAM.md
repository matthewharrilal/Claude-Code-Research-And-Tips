# Pipeline V2 — Complete Architecture Diagram (LIVE INCREMENTAL UPDATE)

**Reference Document** — This is the canonical ASCII visualization of Pipeline V2.
**Status:** INCREMENTALLY UPDATED as investigation reports arrive.
**Last Updated:** 2026-02-19 (incorporating 50+ reports + MASTER SYNTHESIS verdict)
**Source:** 50+ Opus agents across 6 waves: 31 dimensional traces + 17 post-investigation + 8 review/adversarial + master synthesis (Report 32)
**Directives:** ALWAYS FLAGSHIP | ALWAYS REMEDIATION-STYLE | FIRE AND FORGET

**KEY CHANGES FROM PREVIOUS VERSION (based on 50+ investigation reports):**
- 5-layer compositional intelligence stack made visible at every stage
- Transition Table + Fractal Echo Table as mandatory new artifacts
- TC narrowed to ~660 lines (was 1,878) — planning ONLY, no builder content
- 15 programmatic gates (was 12) — SC-13/14/15 added
- INHERENT vs BOLTED-ON annotations at every feature
- **4 builder instruction approaches shown (pending experiments) — NEW: Fat Core**
- Intelligence heatmap showing compression loss across pipeline
- **FAT CORE ALTERNATIVE architecture (Reports 31, 94): merge TC + builder**
- **Builder input cap at 300 lines (Reports 31, 95): SNR optimization**
- **Phase 6.5 Observation Pause + inter-phase micro-gates (Reports 84, 67, 104)**
- **2D model: Specificity × Freedom (Report 85) replaces 1D checklist→recipe→convention**
- **Cost estimate: ~$20-60/page (Report 31)**
- **Self-referential compression warning (Reports 102, 105)**

---

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║              PIPELINE V2 — COMPLETE ARCHITECTURE (Post-Compositional Intelligence)               ║
║              ════════════════════════════════════════════════════════════════                      ║
║                                                                                                  ║
║    Directive: ALWAYS FLAGSHIP | ALWAYS REMEDIATION-STYLE | FIRE AND FORGET                       ║
║    Evidence:  50+ Opus agents, 50+ reports, 5 scales, 6 channels, 3 stacks,                      ║
║              7 designs, 4 integrations, 8 metacognitive, 5 structural, 8 adversarial/review      ║
║    Changes:  Fat Core alt, transition table, fractal echo, TC ~660 lines, 15 gates,              ║
║              inherent enforcement, experiment branch, intelligence heatmap, 2D model              ║
║    Status:   EXPERIMENT FIRST — 5 experiments before codifying (was 3)                            ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝


═══════════════════════════════════════════════════════════════════════════════════════════════════
  THE COMPOSITIONAL INTELLIGENCE STACK — What PV2 Must Encode
═══════════════════════════════════════════════════════════════════════════════════════════════════

    THE 5-LAYER HIERARCHY (Reports 83, 86):

    ┌────────────────────────────────────────────────────────────────────┐
    │                                                                    │
    │  L5 ▲ ANTI-SCALE MODEL (governing principle)                      │
    │     │ Richness = semantic density × restraint × spatial confidence │
    │     │ This EVALUATES everything below. Enables 4/4 (DESIGNED).    │
    │     │ CURRENTLY: Absent from pipeline. Text in research only.     │
    │     │                                                              │
    │  L4 │ MULTI-COHERENCE (binding rule)                               │
    │     │ >= 3 channels shift together at each boundary,               │
    │     │ in the SAME semantic direction.                              │
    │     │ This COORDINATES channels. Enables 3/4 (COMPOSED).          │
    │     │ CURRENTLY: Text in recipe Phase 8. Gate SC-13 NEW.          │
    │     │                                                              │
    │  L3 │ CHANNELS (6 CSS property groups)                             │
    │     │ Chromatic | Typographic | Spatial | Structural |             │
    │     │ Behavioral | Material                                        │
    │     │ These are the INSTRUMENTS. Enables 2.5/4 (STYLED+).         │
    │     │ CURRENTLY: Named in catalog. Partially in recipe.           │
    │     │                                                              │
    │  L2 │ SCALES (5 zoom levels)                                       │
    │     │ Navigation | Page | Section | Component | Character          │
    │     │ These are the STAGES where pattern appears. Enables 2/4.    │
    │     │ CURRENTLY: Mentioned in TC. Lost at handoff.                │
    │     │                                                              │
    │  L1 │ PERCEPTION THRESHOLDS (floor)                                │
    │     │ >= 15 RGB | >= 2px font | >= 0.03em spacing | <= 108px gap  │
    │     │ These prevent INVISIBILITY. Prevents 1.5/4 (FLAT).          │
    │     │ CURRENTLY: Encoded as binary gates SC-09 through SC-12.     │
    │     │                                                              │
    └────────────────────────────────────────────────────────────────────┘

    KEY INSIGHT (Report 83):
    Each layer DEPENDS on the one below. Multi-coherence requires channels.
    Channels require scales. Scales require perceptible thresholds.
    PV2 encodes only L1. Layers 2-5 EVAPORATE at the TC-to-builder boundary.


═══════════════════════════════════════════════════════════════════════════════════════════════════
  INTELLIGENCE HEATMAP — Where Compositional Intelligence Lives (and Dies)
═══════════════════════════════════════════════════════════════════════════════════════════════════

    (Approach 1 from Report 96: makes compression loss VISIBLE)

                        INTELLIGENCE LEVELS PRESENT AT EACH STAGE
                        ─────────────────────────────────────────
                        L1         L2         L3         L4         L5
                        Percep.    Scales     Channels   Multi-     Anti-
    STAGE               Thresh.    (5-lvl)    (6 CSS)    Coher.     Scale
    ═══════════════     ═══════    ═══════    ════════   ═══════    ══════

    Content.md          ---        ---        ---        ---        ---

    TC Planner          [#####]    [#####]    [####.]    [###..]    [##...]
    (Wave 0)            FULL       FULL       HIGH       MODERATE   LOW

    _build-recipe.md    [#####]    [##...]    [###..]    [#....]    [.....] ← CRITICAL
    (TC Output)         FULL       LOW        MODERATE   MINIMAL    ABSENT    LOSS POINT

    Builder Input       [#####]    [#....]    [###..]    [#....]    [.....]
    (7 files)           FULL       MINIMAL    MODERATE   MINIMAL    ABSENT

    CSS/HTML Output     [####.]    [??..]     [??..]     [?....]    [.....]
    (Wave 1)            HIGH       UNKNOWN    UNKNOWN    UNKNOWN    ABSENT

    Gate Runner         [#####]    [.....]*   [#....]    [#....]*   [.....]
    (15 gates)          FULL       ABSENT*    MINIMAL    NEW SC-13  ABSENT

    PA Auditors         [.....]+   [###..]    [###..]    [####.]    [###..]
    (9 fresh eyes)      ABSENT+    MODERATE   MODERATE   HIGH       MODERATE

    ═══════════════════════════════════════════════════════════════════════
    LEGEND: [#####] FULL  [####.] HIGH  [###..] MODERATE
            [##...] LOW   [#....] MINIMAL  [.....] ABSENT
            [??..] DEPENDS ON BUILDER (no enforcement)
            * = FIX IDENTIFIED but not yet implemented
            + = Correct: PA measures perception, not numbers

    THE STORY THIS TELLS:
    Intelligence ENTERS at TC (row 2) as full-spectrum, then DRAINS through
    the build-plan handoff (row 3). By the time the builder writes CSS,
    only L1 (thresholds) survives reliably. L2-L5 depend on builder judgment.

    THE FIXES (from Reports 83, 68, 74):
    - Fractal Echo Table makes L2 (scales) cross the boundary → [###..]
    - Transition Table makes L3 (channels) cross the boundary → [####.]
    - Multi-coherence binding in transition table makes L4 cross → [###..]
    - Anti-scale model remains ABSENT from operational pipeline (L5 = JUDGMENT)


═══════════════════════════════════════════════════════════════════════════════════════════════════
  USER ENTRY POINT
═══════════════════════════════════════════════════════════════════════════════════════════════════

    USER TYPES:
    ┌─────────────────────────────────────────────┐
    │  /build-page path/to/content.md             │
    └──────────────────────┬──────────────────────┘
                           │
                           ▼
    ┌─────────────────────────────────────────────────────────────────────────┐
    │  WHAT THIS IS:                                                         │
    │  A single slash command. The user's ONLY interaction with the pipeline. │
    │  Input = any existing markdown file in the project.                     │
    │                                                                        │
    │  INHERENT:   YES — pipeline cannot start without content file.         │
    │  BOLTED ON:  N/A                                                       │
    │                                                                        │
    │  INTELLIGENCE AT THIS STAGE: None. Orchestrator is a ROUTER.          │
    │                                                                        │
    │  ALWAYS FLAGSHIP: No tier routing. No classification. Every page gets │
    │  maximum intensity. Addition Test is the only escape valve.            │
    │                                                                        │
    │  CONCRETELY:                                                           │
    │  The orchestrator reads content.md, invokes enriched /tension-         │
    │  composition (~660 lines, was 1,878), validates the build plan,       │
    │  spawns an Opus builder, runs 15 gates + 9 PA auditors, fixes up to  │
    │  3x, then deposits output.html + _pa-report.md + _build-log.md.     │
    └─────────────────────────────────────────────────────────────────────────┘
                           │
                           │  Orchestrator reads content.md
                           │  Invokes /tension-composition (~660 lines)
                           ▼

═══════════════════════════════════════════════════════════════════════════════════════════════════
  WAVE 0: CONTENT ANALYSIS + COMPOSITIONAL PLANNING  (Enriched TC, Opus, ~30-60 min)
═══════════════════════════════════════════════════════════════════════════════════════════════════

    ┌─────────────────────────────────────────────────────────────────────┐
    │              ENRICHED /tension-composition                          │
    │              Phases 0 → 3.5 ONLY (was 0 → 5)                      │
    │              ~660 lines (was 1,878 — 66% reduction)                │
    │              68% operational density (was 37%)                      │
    └─────────────────────────────────────────────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
    ┌──────────┐    ┌──────────────┐   ┌──────────────┐
    │ Phase 0  │    │  Phase 1     │   │  Phase 2     │
    │ Content  │───▶│  Multi-Axis  │──▶│  Tension     │
    │ Analysis │    │  Questioning │   │  Derivation  │
    │          │    │  (9+ axes)   │   │  + Addition  │
    │ CHANGED: │    │              │   │  Test        │
    │ No tier  │    │  UNCHANGED   │   │              │
    │ routing  │    │  (core       │   │  UNCHANGED   │
    └──────────┘    │  engine)     │   │  (core       │
                    └──────────────┘   │  engine)     │
                                       └──────┬───────┘
                                              │
                                    ┌─────────┴─────────┐
                                    │  ADDITION TEST    │
                                    │  (Binary Gate)    │
                                    │  INHERENT: YES    │
                                    └────┬─────────┬────┘
                              TENSION    │         │  NO TENSION
                              EXISTS     │         │
                                         ▼         ▼
                                    ┌─────────┐  ┌──────────┐
                                    │ Phase 3 │  │ FLAT     │
                                    │ Metaphor│  │ MODE     │
                                    │ Collapse│  │ (zones + │
                                    └────┬────┘  │ recipe,  │
                                         │       │ no meta- │
                                         ▼       │ phor)    │
                                    ┌─────────┐  └────┬─────┘
                                    │Phase 3.5│       │
                                    │ Lock-In │       │
                                    │  Gate   │       │
                                    └────┬────┘       │
                                         │            │
                                         └──────┬─────┘
                                                │
                                                ▼
                                    ┌──────────────────────────────┐
                                    │  NEW: Phase 4T               │
                                    │  TRANSITION TABLE + FRACTAL  │
                                    │  ECHO TABLE GENERATION       │
                                    │                              │
                                    │  TC outputs 3 artifacts:     │
                                    │  1. _build-recipe.md         │
                                    │  2. Transition Table (YAML)  │
                                    │  3. Fractal Echo Table       │
                                    └──────────────────────────────┘

    ┌─────────────────────────────────────────────────────────────────────────┐
    │  WHAT CHANGED (from original PV2):                                     │
    │                                                                        │
    │  1. TC SCOPE NARROWED (Report 69):                                     │
    │     - Phases 0-3.5 + NEW Phase 4T (transition table generation)       │
    │     - ALL Phase 4+ builder content REMOVED (624 lines, 32.3%)         │
    │     - ALL tier routing REMOVED (145 lines)                             │
    │     - Builder appendices relocated to builder input files              │
    │     - TC is TELESCOPE ONLY — plans, never builds                      │
    │                                                                        │
    │  2. THREE NEW OUTPUT ARTIFACTS (Reports 68, 83):                       │
    │                                                                        │
    │     a. _build-recipe.md (~200-400 lines)                              │
    │        Structured build plan with TELESCOPE COMMENTS at every line.   │
    │        Each mechanism deployment includes WHY (compositional intent)   │
    │        AND WHAT (specific CSS snippet or value).                       │
    │        Zone map + mechanism deployment + builder warnings.            │
    │        INCLUDES rejected alternatives (runner-up metaphor, 2-3        │
    │        rejected tensions with reasons) — Report 74.                   │
    │                                                                        │
    │     b. TRANSITION TABLE (YAML, Report 68):                            │
    │        Per-boundary × 6-channel specification with:                   │
    │        - Exact CSS before/after values (hex colors, px, em)           │
    │        - Delta measurements (pre-computed)                             │
    │        - Semantic direction labels ("DEEPENING", "RESOLVING")         │
    │        - Channel count per boundary (must be >= 3 for zone boundaries)│
    │        - Pass/fail pre-computation                                    │
    │        FLOWS UNCHANGED: TC writes #F0EBE3, builder uses #F0EBE3,     │
    │        gate runner reads rgb(240,235,227), PA sees the rendered color │
    │        THIS IS THE PRIMARY FIX for compression loss at Boundary 3.   │
    │                                                                        │
    │     c. FRACTAL ECHO TABLE (Report 83):                                 │
    │        5-row table showing how the pattern expresses at each scale:   │
    │        | Scale | Pattern Expression | Primary CSS | Secondary CSS |   │
    │        | Nav   | [how header echoes] | [css]      | [css]         |   │
    │        | Page  | [how zones echo]    | [css]      | [css]         |   │
    │        | Section | [how within-sec]  | [css]      | [css]         |   │
    │        | Component | [how comp DNA]  | [css]      | [css]         |   │
    │        | Character | [how typo echo] | [css]      | [css]         |   │
    │        Pattern Direction must be SAME at all 5 rows.                  │
    │        If inconsistent → metaphor is not fractal → FLAT MODE.        │
    │        MAKES L2 (SCALES) CROSS THE BOUNDARY — was previously lost.   │
    │                                                                        │
    │  3. SEPARATION OF CONCERNS (Report 93):                                │
    │     TC answers ONE question: "What visual form does this content need?"│
    │     TC does NOT: write CSS, specify pixel values, verify output,      │
    │     judge quality, or route between tiers.                             │
    │                                                                        │
    │  INTELLIGENCE AT THIS STAGE:                                           │
    │  L1: FULL (thresholds embedded in transition table)                   │
    │  L2: FULL (fractal echo table)                                        │
    │  L3: HIGH (6-channel transition table)                                │
    │  L4: MODERATE (channel counts per boundary computed)                  │
    │  L5: LOW (coherence direction specified, not full anti-scale)         │
    │                                                                        │
    │  TIME: ~30-60 minutes (autonomous)                                     │
    └─────────────────────────────────────────────────────────────────────────┘
                                                │
                                                │  3 artifacts produced
                                                ▼

═══════════════════════════════════════════════════════════════════════════════════════════════════
  WAVE 0.5: METAPHOR VALIDATION  (Fresh-Eyes Opus, ~5-10 min)
═══════════════════════════════════════════════════════════════════════════════════════════════════

                                    ┌──────────────────────┐
                                    │  Fresh-Eyes Opus     │
                                    │  UNCHANGED           │
                                    │                      │
                                    │  Binary: STRUCTURAL  │
                                    │  or ANNOUNCED?       │
                                    │                      │
                                    │  INHERENT: YES       │
                                    │  (prevents 90-150    │
                                    │  min wasted build    │
                                    │  on doomed metaphor) │
                                    └──────────┬───────────┘
                                               │
                                          PASS or FAIL
                                               │
                                               ▼

═══════════════════════════════════════════════════════════════════════════════════════════════════
  WAVE 0.9: ENRICHED HANDOFF GATE  (Binary, ~1-2 min) [UPDATED]
═══════════════════════════════════════════════════════════════════════════════════════════════════

                              ┌────────────────────────────────┐
                              │  ENRICHED HANDOFF GATE          │
                              │  8 binary checks (was 5)        │
                              │  INHERENT: YES (blocks builder) │
                              │                                  │
                              │  ORIGINAL 5:                     │
                              │  [1] Zone count 2-5?             │
                              │  [2] BG colors >= 15 RGB delta?  │
                              │  [3] >= 2 grid layouts?          │
                              │  [4] Per-category mechs met?     │
                              │      (S/T/M/B/R: each >= 1)     │
                              │  [5] >= 3 transition types?      │
                              │                                  │
                              │  NEW 3 (from Reports 83, 68):    │
                              │  [6] Fractal Echo Table present  │
                              │      with 5 rows + consistent    │
                              │      pattern direction?          │
                              │  [7] Transition Table valid?     │
                              │      (>= 3 channels shift at     │
                              │      every zone boundary?)       │
                              │  [8] Channel map complete?       │
                              │      (all 6 channels have        │
                              │      before/after values?)       │
                              │                                  │
                              │  ALL must PASS.                  │
                              │  Any FAIL → return to TC.        │
                              └───────────────┬────────────────┘
                                              │
                                         ALL PASS
                                              │
                                              ▼

    ┌─────────────────────────────────────────────────────────────────────────┐
    │  WHAT CHANGED (from original PV2):                                     │
    │                                                                        │
    │  3 new checks make L2 (scales) and L3/L4 (channels/multi-coherence)  │
    │  INHERENT at the handoff boundary. The builder CANNOT start without:  │
    │  - A 5-row fractal echo table (L2 enforcement)                        │
    │  - A transition table with >= 3 channels per zone boundary (L4)      │
    │  - Complete 6-channel specifications at each boundary (L3)            │
    │                                                                        │
    │  BOUNDARY 3 FIX (Report 74):                                          │
    │  This was the CRITICAL DESTRUCTIVE boundary — TC's full reasoning     │
    │  compressed 20:1 into prose manifest. The transition table changes    │
    │  the format from prose to YAML with embedded CSS values, doubling     │
    │  intelligence survival from ~35% to ~75%.                             │
    │                                                                        │
    │  INTELLIGENCE AT THIS STAGE:                                           │
    │  L1: FULL (bg delta checked)                                          │
    │  L2: NEW — checked via fractal echo table requirement                 │
    │  L3: NEW — checked via transition table completeness                  │
    │  L4: NEW — checked via channel count >= 3 per boundary                │
    │  L5: ABSENT (not enforceable at gate level — judgment domain)         │
    └─────────────────────────────────────────────────────────────────────────┘
                                              │
                                              │  Plan validated. Builder receives:
                                              │  1. _build-recipe.md (TC output, ~200-400 lines)
                                              │  2. Transition Table (YAML, per-boundary × 6 channels)
                                              │  3. Fractal Echo Table (5-row scale coverage)
                                              │  4. operational-recipe-template.md (~300 lines) [NEW - Layer A]
                                              │  5. tokens.css
                                              │  6. prohibitions.md
                                              │  7. merged-components.css
                                              │  8. mechanism-catalog.md (FULL, 18 mechanisms)
                                              ▼

═══════════════════════════════════════════════════════════════════════════════════════════════════
  WAVE 1: BUILD EXECUTION  (Single Opus Builder, ~90-150 min)
═══════════════════════════════════════════════════════════════════════════════════════════════════

    ┌─────────────────────────────────────────────────────────────────────┐
    │                         OPUS BUILDER                               │
    │                         Reads 8 files (was 6)                      │
    │                                                                     │
    │  ╔══════════════════════════════════════════════════════════════╗   │
    │  ║  EXPERIMENT BRANCH — 5 APPROACHES PENDING TESTS            ║   │
    │  ║  (User chose "experiment first" — run before codifying)    ║   │
    │  ║                                                              ║   │
    │  ║  A) RECIPE (PV2 as designed, Report 17)                     ║   │
    │  ║     300-line template + 200-400 line TC-generated instance  ║   │
    │  ║     9 sequential phases, specific CSS values                ║   │
    │  ║     Builder follows steps IN ORDER                          ║   │
    │  ║     Ceiling: 3/4 complex content, 4/4 simple (Report 85)  ║   │
    │  ║     2D position: HIGH specificity, LOW freedom              ║   │
    │  ║                                                              ║   │
    │  ║  B) PRINCIPLES BRIEF (Reports 29/30)                        ║   │
    │  ║     100-line constraints document, no sequence               ║   │
    │  ║     Builder composes freely within constraints               ║   │
    │  ║     Gates + PA verify output                                 ║   │
    │  ║     Ceiling: unknown (no evidence yet)                       ║   │
    │  ║     2D position: LOW specificity, HIGH freedom               ║   │
    │  ║                                                              ║   │
    │  ║  C) HYBRID (Reports 17/22, RECOMMENDED by Report 72)       ║   │
    │  ║     Recipe for Phases 0-4 (structural foundation)           ║   │
    │  ║     Convention-based freedom for Phases 5-8                  ║   │
    │  ║     Telescope + microscope at every line                     ║   │
    │  ║     Ceiling: 3-4/4 (combines structure + creative freedom) ║   │
    │  ║     2D position: HIGH specificity, HIGH freedom (Phases 5+) ║   │
    │  ║                                                              ║   │
    │  ║  D) FAT CORE ★ (Reports 31, 94 — NEW)                      ║   │
    │  ║     MERGE TC planner + builder into SINGLE Opus agent       ║   │
    │  ║     Agent reads content directly, plans AND builds in 1 pass║   │
    │  ║     ~100-line conventions brief (WHAT+WHY, not HOW)         ║   │
    │  ║     NO handoff = NO Boundary 3 compression                  ║   │
    │  ║     3 phase-locked gates (not 15 post-build gates)          ║   │
    │  ║     Same PA shell (9 auditors + weaver)                     ║   │
    │  ║     Fix cycle uses SAME agent (compositional memory)        ║   │
    │  ║     Ceiling: 4/4 possible (CD-006 model = convention)       ║   │
    │  ║     2D position: HIGH specificity, MAXIMUM freedom           ║   │
    │  ║     RISK: N=0 (never tested). Self-assessment bias.         ║   │
    │  ║                                                              ║   │
    │  ║  E) SINGLE OPUS, NO PIPELINE (Report 31 — cheapest test)   ║   │
    │  ║     1 Opus agent + content + soul constraints + thresholds  ║   │
    │  ║     42 lines of instruction. No TC. No recipe. No gates.   ║   │
    │  ║     Tests: Is ALL pipeline infrastructure unnecessary?      ║   │
    │  ║     If PA-05 >= 3/4 → entire pipeline is unjustified        ║   │
    │  ║     Cost: ~$5, ~2 hours. THE CHEAPEST EXPERIMENT.           ║   │
    │  ║     2D position: LOW specificity, MAXIMUM freedom            ║   │
    │  ╚══════════════════════════════════════════════════════════════╝   │
    └─────────────────────────────────────────────────────────────────────┘

    5 EXPERIMENTS TO RESOLVE (Reports 70, 31, 94, 85):

    THE 2D MODEL (Report 85 — replaces 1D checklist→recipe→convention):

    ┌───────────────────────────────────────────────────────────────────────┐
    │                                                                       │
    │  SPECIFICITY (thresholds, exact values, constraints specified)        │
    │       HIGH ┌─────────────────────┬─────────────────────┐              │
    │            │ A) Recipe           │ C) Hybrid           │              │
    │            │ PA-05: 3-4/4        │ PA-05: 3-4/4 est.   │              │
    │            │ (Remediation 2.5/4) │ (Middle 4/4)         │              │
    │            │ HIGH spec, LOW free │ HIGH spec, HIGH free │              │
    │            ├─────────────────────┼─────────────────────┤              │
    │        LOW │ Flagship 1.5/4      │ E) Single Opus      │              │
    │            │ (FAILURE — never    │ PA-05: unknown       │              │
    │            │  repeat this)       │ (CD-006 39/40)       │              │
    │            │ LOW spec, LOW free  │ LOW spec, MAX free   │              │
    │            └─────────────────────┴─────────────────────┘              │
    │                 LOW  ←─── FREEDOM ───→  HIGH                         │
    │                                                                       │
    │  D) Fat Core = HIGH specificity + MAX freedom (UNTESTED QUADRANT)    │
    │  Report 85 predicts: 3.0-3.5/4 first build, 3.5-4.0/4 with fix     │
    │                                                                       │
    │  KEY INSIGHT: The investigation treated instruction type as 1D       │
    │  (checklist→recipe→convention). The evidence maps to 2D. The        │
    │  UNTESTED OPTIMAL is HIGH specificity + HIGH freedom, which is      │
    │  exactly what Fat Core (D) and Hybrid (C) test.                      │
    └───────────────────────────────────────────────────────────────────────┘

    ALL EXPERIMENTS use RESEARCH-SYNTHESIS.md, same Mode 4 PA (9 auditors):

    ┌────────────────────────────────────────────────────────────────────┐
    │                                                                    │
    │  PRIORITY ORDER (cheapest first, each informs the next):          │
    │                                                                    │
    │  ★ EXP E: Single Opus, No Pipeline ($5, ~2 hrs)                   │
    │           42-line prompt. Tests: Is infrastructure necessary?      │
    │           If PA-05 >= 3/4 → STOP. Pipeline is overhead.           │
    │                                                                    │
    │  ★ EXP D: Fat Core — Single Opus Plans + Builds ($15, ~3 hrs)     │
    │           100-line conventions brief + reference files             │
    │           3 phase-locked gates during build                        │
    │           Tests: Does single-agent fusion outperform separation?  │
    │           If PA-05(D) >= 3/4 → Fat Core is the architecture       │
    │                                                                    │
    │  ► EXP A: Opus + Minimal Prompt (42 lines, no pipeline)           │
    │           Soul constraints + perception thresholds only            │
    │           Tests: Do thresholds alone prevent FLAT?                 │
    │           (May be merged with EXP E)                               │
    │                                                                    │
    │  ► EXP B: Opus + Full Recipe (650 lines + TC build plan)          │
    │           Current PV2 recipe path with transition table            │
    │           Tests: Does recipe add value over minimal?               │
    │                                                                    │
    │  ► EXP C: Opus + Principles Brief + Gates (100 lines)             │
    │           Constraints only + transition table + Playwright gates   │
    │           Tests: Do constraints + verification beat recipe?        │
    │                                                                    │
    │  DECISION TREE:                                                    │
    │  E >= 3/4? → Pipeline unnecessary (highest leverage finding)      │
    │  D >= 3/4? → Fat Core architecture wins. Codify that.             │
    │  B > A?    → Recipe adds value. Determine how much.               │
    │  C >= B?   → Recipe unnecessary. Gates + brief sufficient.        │
    │  All < 3/4 → Investigation missed something fundamental.          │
    │                                                                    │
    │  RESULTS DETERMINE: topology, builder format, codification scope. │
    └────────────────────────────────────────────────────────────────────┘

    BUILDER'S INTEGRATED KNOWLEDGE (Report 84 — Telescope + Microscope):

    ┌──────────────────────────────────────────────────────────────────────┐
    │                                                                      │
    │  KEY DESIGN PRINCIPLE: The builder gets BOTH telescope (WHY) and    │
    │  microscope (HOW) at every line. Not separate documents — INTERLACED.│
    │                                                                      │
    │  Example from remediation spec (Report 22, Section 2):              │
    │                                                                      │
    │  /* Ch4 STRUCTURAL BORDERS — Section-level containment.             │
    │     6 of 12 sections. Alternating presence creates rhythm. */       │
    │  .zone-s2 .page-container {                  ← TELESCOPE (WHY)     │
    │    border-left: 3px solid var(--color-border);  ← MICROSCOPE (HOW) │
    │    padding-left: 29px;                                              │
    │  }                                                                   │
    │  /* S5's is RED — the focal point of the analytical zone */         │
    │  .zone-s5 .page-container {                  ← TELESCOPE (WHY)     │
    │    border-left: 4px solid var(--color-primary);  ← MICROSCOPE (HOW)│
    │    padding-left: 28px;                                              │
    │  }                                                                   │
    │                                                                      │
    │  The builder reads WHY before WHAT. This is structurally different  │
    │  from: recipe without context (FLAT) or context without recipe      │
    │  (FREEFORM). The integrated format IS the telescope+microscope.    │
    │                                                                      │
    │  TRANSITION TABLE as bridge: The transition table contains BOTH     │
    │  semantic direction (telescope: "DEEPENING") AND exact CSS values  │
    │  (microscope: "background: #F0EBE3"). It bridges naturally.        │
    │                                                                      │
    │  BUILDER FILE SET (8 files, ~1,300 lines total):                    │
    │  1. _build-recipe.md (TC output, ~200-400 lines, telescope+micro) │
    │  2. Transition table (YAML, ~80-150 lines per-boundary channels)  │
    │  3. Fractal echo table (5-row scale coverage)                      │
    │  4. operational-recipe-template.md (~300 lines, Layer A)           │
    │  5. tokens.css (design tokens)                                      │
    │  6. prohibitions.md (soul constraints)                              │
    │  7. merged-components.css (component library)                       │
    │  8. mechanism-catalog.md (FULL 18 mechanisms)                       │
    │                                                                      │
    │  TOTAL: ~1,300 lines (was 1,150)                                    │
    │  vs. master prompt builder: 75 lines (13.4% visibility)            │
    │  vs. PV2 builder: ~1,300 lines (100% visibility + compositional)  │
    │                                                                      │
    └──────────────────────────────────────────────────────────────────────┘

    9-PHASE BUILD (or convention-based, depending on experiment results):

    ┌──────────────────────────────────────────────────────────────────┐
    │                                                                  │
    │   Phase 0: Content Analysis + Zone Architecture                  │
    │   Phase 1: HTML Skeleton (components >= 10/26, ARIA >= 3)       │
    │   Phase 2: CSS Reset + Soul + Base Typography                    │
    │   Phase 3: Zone Backgrounds (>= 15 RGB delta, use transition    │
    │            table values directly — LOSSLESS from TC)             │
    │   Phase 4: Structural Borders + Transitions (3+ types)          │
    │   ─────── POSSIBLE FREEDOM BOUNDARY (Hybrid Approach C) ────── │
    │   Phase 5: Typography Zones (3-zone arc, use transition table)  │
    │   Phase 6: Element-Level Richness (mechanism catalog deploy)    │
    │   Phase 6.5: OBSERVATION PAUSE ★ NEW (Report 84, F84-3)       │
    │              Builder renders, scrolls, writes 2-3 observations │
    │              "What feels designed? What feels flat? Adjust."   │
    │              Modeled on CD-006's metacognitive loop. ~5-10 min.│
    │              THE cheapest change with highest expected impact.  │
    │   Phase 7: Accessibility (WCAG 2.1 AA, ~180 lines CSS)         │
    │   Phase 8: Verification + CASCADE VALUE TABLE (MANDATORY)       │
    │            NEW: Multi-coherence binding check                    │
    │            NEW: Fractal echo verification (5 scales)            │
    │            NEW: Anti-scale self-test (3 questions)               │
    │                                                                  │
    │   WHAT CHANGED:                                                  │
    │   - Transition table values used DIRECTLY in Phases 3-5         │
    │   - Phase 6.5 Observation Pause (CD-006 metacognitive loop)    │
    │   - Phase 8 now includes fractal + multi-coherence checks       │
    │   - Phase 8 anti-scale self-test: builder must answer YES to:  │
    │     Q1: "Does every section earn its visual weight?"            │
    │     Q2: "Could you remove a CSS rule without losing meaning?"  │
    │     Q3: "Does restraint create more impact than addition?"     │
    │                                                                  │
    │   INTER-PHASE MICRO-GATES ★ NEW (Report 67, BLOCKING — 104):  │
    │   ┌────────┬───────────────────────┬─────────────────────────┐  │
    │   │ MG-1   │ After Phase 1 (HTML)  │ DOM: landmarks, skip,   │  │
    │   │        │                       │ component classes, zones │  │
    │   │ MG-2   │ After Phase 3 (bg)    │ bg delta >= 15 RGB      │  │
    │   │ MG-3   │ After Phase 4 (border)│ border-left present,    │  │
    │   │        │                       │ distinct border values   │  │
    │   │ MG-4   │ After Phase 5 (type)  │ font-size delta >= 2px  │  │
    │   └────────┴───────────────────────┴─────────────────────────┘  │
    │   Each micro-gate: ~30 seconds, Playwright. Catches foundation │
    │   failures at ~30 min (not 90-150 min post-build). Total: ~2min│
    │   These make phase enforcement INHERENT, not advisory.          │
    │                                                                  │
    │   CREATIVE AUTHORITY CLAUSE ★ NEW (Reports 84, 31):            │
    │   "You may override ANY non-soul value if you log the override │
    │   with compositional reasoning. Soul values (border-radius: 0, │
    │   box-shadow: none, container 960px, font trinity) are LOCKED. │
    │   Everything else is a SUGGESTION that you can improve upon."  │
    │   Without this clause: recipe ceiling = 3/4 (Report 85).       │
    │   With this clause: convention ceiling = 4/4+ possible.         │
    │                                                                  │
    └──────────────────────────────────────────────────────────────────┘

    ┌─────────────────────────────────────────────────────────────────────────┐
    │  INHERENT VS BOLTED ON AT WAVE 1 (Report 87):                         │
    │                                                                        │
    │  CURRENTLY INHERENT (pipeline cannot skip):                           │
    │  ✓ TC invocation (builder needs _build-recipe.md to start)           │
    │  ✓ Content markdown (entry point requires file)                       │
    │  ✓ Transition table (builder's Phases 3-5 consume table values)      │
    │                                                                        │
    │  CURRENTLY BOLTED ON (pipeline can skip):                             │
    │  ✗ Recipe phases (builder CAN write all CSS in one pass)             │
    │  ✗ Soul constraints (gate checks after, not during)                   │
    │  ✗ Perception thresholds (text in recipe, gate checks after)         │
    │  ✗ Checkpoint approvals (planner timeout = builder continues)        │
    │  ✗ Component library adoption (text instruction + post-hoc gate)     │
    │  ✗ Cascade value table (deliverable, nothing depends on it)          │
    │  ✗ Accessibility (Phase 7 = text instruction, page renders without)  │
    │                                                                        │
    │  FIX APPROACHES (Report 87):                                          │
    │  - Template HTML with required slots (unfilled {{VAR}} = no output)  │
    │  - Phase-locked build (orchestrator withholds Phase N+1 until N done)│
    │  - Artifact dependency (gate runner REQUIRES cascade value table)    │
    │  - Schema-validated YAML (transition table must match schema or fail)│
    │                                                                        │
    │  HONEST ASSESSMENT: Making ALL features inherent is architecturally  │
    │  impossible for LLM-based builders. The builder is not a compiler.   │
    │  An LLM that "skips Phase 4" cannot be prevented from doing so by   │
    │  any mechanism short of running 9 separate agents sequentially.      │
    │  The pragmatic approach: make ARTIFACT PRODUCTION inherent (the      │
    │  builder MUST produce transition values, cascade table, ARIA markup)│
    │  while accepting that PROCESS SEQUENCE is advisory.                  │
    │                                                                        │
    │  RECIPE CEILING — 2D MODEL (Report 85):                               │
    │                                                                        │
    │  1D (WRONG): Checklist → Recipe → Convention (linear spectrum)       │
    │  2D (RIGHT): Specificity × Freedom (four quadrants)                  │
    │                                                                        │
    │  Checklist → 1.5/4 | Recipe → 3-4/4 | Convention → 4/4+            │
    │  The ceiling is VARIABLE: depends on content complexity, builder     │
    │  model (Opus > Sonnet), and whether recipe encodes INTENT (why) or  │
    │  just PROCEDURE (how). A recipe with WHY approaches 4/4. A recipe   │
    │  with only HOW caps at 3/4.                                          │
    │                                                                        │
    │  THE 4 IRREDUCIBLE CAPABILITIES past recipe (cannot be encoded):    │
    │  1. Content-form resonance: visual decisions emerge FROM content     │
    │  2. Proportional intelligence: knowing the right AMOUNT of weight   │
    │  3. Creative surprise: unexpected-yet-perfect compositional choices │
    │  4. Emergent coherence: the whole exceeds the sum of its parts      │
    │  These define the gap between COMPOSED (3/4) and DESIGNED (4/4).    │
    │                                                                        │
    │  THE CEILING SENTENCE (Report 31):                                   │
    │  "Do NOT deviate from the instance values without planner approval"  │
    │  This single sentence IS the 3/4 ceiling. REMOVING it (via the     │
    │  Creative Authority Clause above) is the highest-leverage edit.     │
    │                                                                        │
    │  TIME: ~90-150 minutes (autonomous)                                   │
    └─────────────────────────────────────────────────────────────────────────┘
                                            │
                                            │  output.html produced
                                            │  cascade value table produced
                                            ▼

═══════════════════════════════════════════════════════════════════════════════════════════════════
  WAVE 2: DUAL-LAYER VERIFICATION  (~30-45 min)
═══════════════════════════════════════════════════════════════════════════════════════════════════

    ┌─────────────────────────────────────────────────────────────────────┐
    │  LAYER 1: PROGRAMMATIC GATES  (Playwright + getComputedStyle)      │
    │  ─────────────────────────────────────────────────────────────────  │
    │                                                                     │
    │  15 binary checks (was 12). ALL BLOCKING. ANY fail = fix cycle.   │
    │                                                                     │
    │  ┌────────┬──────────────────────────────┬───────────────────────┐  │
    │  │  Gate  │  What It Checks              │  Threshold            │  │
    │  ├────────┼──────────────────────────────┼───────────────────────┤  │
    │  │ SC-01  │  Container width             │  940-960px            │  │
    │  │ SC-02  │  Soul properties             │  border-radius: 0    │  │
    │  │        │                              │  box-shadow: none     │  │
    │  │ SC-03  │  Font trinity                │  Only 3 allowed fonts │  │
    │  │ SC-04  │  Warm palette                │  R >= G >= B          │  │
    │  │ SC-05  │  No pure extremes            │  No #000 or #FFF      │  │
    │  │ SC-06  │  ARIA landmarks              │  >= 3                 │  │
    │  │ SC-07  │  Skip link                   │  Present              │  │
    │  │ SC-08  │  Component library           │  >= 3 classes used    │  │
    │  │ SC-09  │  Background delta            │  >= 15 RGB adjacent   │  │
    │  │ SC-10  │  Stacked gap                 │  <= 108px total       │  │
    │  │ SC-11  │  Typography zones            │  >= 2px delta         │  │
    │  │ SC-12  │  Zone count                  │  2-5 zones            │  │
    │  ├────────┼──────────────────────────────┼───────────────────────┤  │
    │  │ SC-13  │  Multi-coherence [NEW]       │  >= 3 channels shift  │  │
    │  │        │                              │  at every zone bndry  │  │
    │  │ SC-14  │  Sub-perceptual prevention   │  No letter-spacing    │  │
    │  │        │  [NEW]                       │  < 0.02em; no bg      │  │
    │  │        │                              │  deltas 1-14 within   │  │
    │  │        │                              │  a zone               │  │
    │  │ SC-15  │  Border presence [NEW]       │  >= 1 border-left     │  │
    │  │        │                              │  >= 3px OR >= 2 <hr>  │  │
    │  └────────┴──────────────────────────────┴───────────────────────┘  │
    │                                                                     │
    │  WHAT CHANGED (Report 73):                                          │
    │  - SC-13 checks multi-coherence (L4): at each zone boundary,       │
    │    measures background, font-size, font-weight, letter-spacing,    │
    │    border-left, padding. If < 3 of these shift, FAIL.              │
    │    ~70% confidence (can count shifts but not semantic coherence).  │
    │  - SC-14 catches sub-perceptual CSS waste: the flagship spent      │
    │    22% of CSS (227 lines) on letter-spacing 0.001-0.01em.         │
    │    SC-14 flags any imperceptible values.                            │
    │  - SC-15 catches the flagship's zero-borders problem.              │
    │                                                                     │
    │  INTELLIGENCE AT THIS STAGE:                                        │
    │  L1: FULL (SC-01 through SC-12 cover all thresholds)              │
    │  L2: ABSENT* (no gate checks scale coverage yet)                   │
    │  L3: MINIMAL (SC-09 bg, SC-11 typography)                          │
    │  L4: NEW — SC-13 checks channel shift count                        │
    │  L5: ABSENT (judgment domain — PA handles this)                    │
    │  * SC-13B (scale coverage) identified as needed but not designed   │
    │                                                                     │
    │  THE 70/30 BOUNDARY (Report 73):                                   │
    │  Programmatic gates catch ~70% of issues cheaply (~2 min).         │
    │  The remaining ~30% requires perceptual judgment (PA auditors).    │
    │  Specifically: gates cannot judge semantic COHERENCE (channels     │
    │  shift in the same direction), PROPORTION (the right amount of    │
    │  visual weight), or SURPRISE (unexpected-yet-perfect decisions).  │
    │                                                                     │
    └─────────────────────────────────────────────────────────────────────┘
                                            │
                                            │  All 15 gates PASS
                                            ▼
    ┌─────────────────────────────────────────────────────────────────────┐
    │  LAYER 2: PERCEPTUAL AUDIT  (Mode 4 — 9 Fresh-Eyes Opus Auditors) │
    │  UNCHANGED from original PV2.                                      │
    │                                                                     │
    │  Screenshot pre-capture → 9 parallel Opus auditors → PA weaver    │
    │  48 questions, zero build context, fresh-eyes only.                │
    │  PA-05 score: 1/4 FLAT | 2/4 STYLED | 3/4 COMPOSED | 4/4 DESIGNED│
    │                                                                     │
    │  INTELLIGENCE AT THIS STAGE:                                        │
    │  L1: ABSENT (correct — PA measures perception, not numbers)        │
    │  L2: MODERATE (auditors see fractal patterns when present)         │
    │  L3: MODERATE (auditors see channel variety when present)          │
    │  L4: HIGH (auditors sense DESIGNED as implicit multi-coherence)   │
    │  L5: MODERATE (auditors sense density × restraint intuitively)    │
    └─────────────────────────────────────────────────────────────────────┘
                                            │
                                            │  PA-05 score + top-3 issues
                                            ▼

═══════════════════════════════════════════════════════════════════════════════════════════════════
  WAVE 3: FIX INTEGRATION  (max 3 cycles, ~30-60 min)
═══════════════════════════════════════════════════════════════════════════════════════════════════

                              ┌──────────────────────┐
                              │   DECISION MATRIX    │
                              └──────────┬───────────┘
                                         │
                         ┌───────────────┼───────────────┐
                         ▼               ▼               ▼
              ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
              │ ALL PASS +   │  │ GATES PASS + │  │ ANY FAIL     │
              │ PA-05 >= 3/4 │  │ PA-05 < 3/4  │  │ AFTER 3      │
              │              │  │              │  │ CYCLES       │
              │   ╔═══════╗  │  │  ┌────────┐  │  │  ┌────────┐  │
              │   ║ SHIP  ║  │  │  │ FIX    │  │  │  │ESCALATE│  │
              │   ╚═══════╝  │  │  │ CYCLE  │  │  │  │TO USER │  │
              └──────────────┘  │  └───┬────┘  │  │  └────────┘  │
                                │      │       │  └──────────────┘
                                │      ▼       │
                                │  Builder     │
                                │  applies     │
                                │  top-3 fixes │
                                │      │       │
                                │  2-PA check  │
                                │  (not full 9)│
                                │      │       │
                                │  Still < 3/4?│
                                │  Cycle <= 3? │
                                │   └──LOOP──┘ │
                                └──────────────┘

    ┌─────────────────────────────────────────────────────────────────────────┐
    │  WHAT CHANGED (from original PV2):                                     │
    │                                                                        │
    │  GATE-GENERATED FIX RECIPES (Report 73):                              │
    │  When SC-09 fails with "zone 1-2 delta = 8 RGB", the gate runner    │
    │  now outputs a SPECIFIC CSS fix recipe:                               │
    │    "FIX: Change .zone-2 background from #FAF5ED to #F0EBE3           │
    │     (delta increases from 8 to 19 RGB points)"                        │
    │  The builder receives EXACT CSS, not generic instructions.            │
    │                                                                        │
    │  CONVENTION ESCALATION PATH (Report 85):                              │
    │  When PA-05 = exactly 3/4 (COMPOSED, not DESIGNED) and the user     │
    │  wants 4/4, the pipeline can optionally escalate to:                  │
    │  - Re-engage TC for metaphor-driven adaptation                       │
    │  - Give builder convention-based creative freedom for a 2nd pass     │
    │  - This addresses the recipe ceiling without abandoning the pipeline │
    │                                                                        │
    │  UNCHANGED: Max 3 cycles, 2-PA re-check, ESCALATE to user on 3x fail│
    └─────────────────────────────────────────────────────────────────────────┘
                                            │
                                            │  SHIP or ESCALATE
                                            ▼

═══════════════════════════════════════════════════════════════════════════════════════════════════
  OUTPUT
═══════════════════════════════════════════════════════════════════════════════════════════════════

    ┌─────────────────────────────────────────────────────────────────────┐
    │                                                                     │
    │  Three files at deterministic paths:                                │
    │                                                                     │
    │  path/to/output.html                                                │
    │  path/to/_pa-report.md                                              │
    │  path/to/_build-log.md                                              │
    │                                                                     │
    │  UNCHANGED from original PV2.                                       │
    └─────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  COMPLETE FLOW — BIRD'S EYE VIEW
═══════════════════════════════════════════════════════════════════════════════════════════════════

  /build-page content.md
         │
         ▼
  ┌──────────────────┐   WAVE 0: Enriched TC (Opus)
  │ Tension          │   30-60 min, Phases 0-3.5 + 4T
  │ Composition      │   ~660 lines (was 1,878)
  │ (content → plan) │   Output: _build-recipe.md
  │                  │   + Transition Table (YAML)
  │                  │   + Fractal Echo Table
  └────────┬─────────┘
           │
           ▼
  ┌──────────────────┐   WAVE 0.5: Fresh-Eyes Metaphor Check
  │ Metaphor         │   5-10 min
  │ Validation       │   Binary: STRUCTURAL or ANNOUNCED
  │ (prevents waste) │   UNCHANGED
  └────────┬─────────┘
           │
           ▼
  ┌──────────────────┐   WAVE 0.9: Enriched Handoff Gate
  │ 8 Binary Checks  │   ~1-2 min
  │ (was 5)          │   NEW: fractal echo, transition table, channel map
  │ (quality gate)   │   All must PASS → return to TC on fail
  └────────┬─────────┘
           │
           ▼
  ┌──────────────────┐   WAVE 1: Opus Builder
  │ [EXPERIMENT]     │   90-150 min
  │ Recipe / Brief / │   8 input files (~1,300 lines)
  │ Hybrid           │   Telescope + Microscope interlaced
  │ (plan → HTML)    │   Output: output.html + cascade table
  └────────┬─────────┘
           │
           ▼
  ┌──────────────────┐   WAVE 2: Dual Verification
  │ 15 Programmatic  │   30-45 min
  │ Gates [+3 new]   │   Layer 1: Playwright (15 binary gates)
  │ +                │   Layer 2: 9 fresh-eyes PA auditors
  │ 9 PA Auditors    │   SC-13/14/15 enforce L3/L4
  └────────┬─────────┘
           │
           ▼
  ┌──────────────────┐   WAVE 3: Fix Integration
  │ Gate-Generated   │   30-60 min (max 3 cycles)
  │ Fix Recipes      │   SPECIFIC CSS fixes, not generic instructions
  │ [NEW]            │   Convention escalation path for 4/4
  └────────┬─────────┘
           │
           ▼
  ┌──────────────────┐
  │   OUTPUT         │   output.html + _pa-report.md + _build-log.md
  │   (3 files)      │   User comes back to finished work
  └──────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  NEW ARTIFACTS — WHAT MUST BE WRITTEN
═══════════════════════════════════════════════════════════════════════════════════════════════════

  4 NEW FILES (estimated ~1,350 lines total):

  ~/.claude/skills/build-page/SKILL.md .................. ~205 lines
  │  The orchestrator. Fire-and-forget entry point.
  │  Invokes TC → validates → spawns builder → verifies → fixes.
  │  Single path (no tier routing). ALWAYS FLAGSHIP hardcoded.
  │
  design-system/compositional-core/operational-recipe-template.md ~300 lines
  │  Layer A — universal recipe template. 9 phases.
  │  Action verbs, inline perception checks, "Can you SEE?" prompts.
  │  Extracts builder content FROM TC skill.
  │
  design-system/compositional-core/perception-thresholds.md . ~80 lines
  │  Canonical threshold table + 6-channel definitions.
  │  Single source of truth for all perception values.
  │
  design-system/compositional-core/gate-runner.js ........ ~400 lines
     15 binary gates (SC-01 through SC-15) via Playwright.
     getComputedStyle on every element.
     Gate-generated fix recipes (SPECIFIC CSS changes).
     70/30 boundary: catches 70% programmatically, 30% needs PA.

  EDITS TO EXISTING FILES:

  TC SKILL.md ......... 1,933 → ~660 lines (-66%)
  PA SKILL.md ......... Add perception thresholds at 108px
  CLAUDE.md ........... Opus builder unconditional, full catalog access
  semantic-rules.md ... S-09 stacking at 108px
  tokens.css .......... S-09 stacking at 108px

  TOTAL: ~1,350 new lines + ~1,270 lines removed from TC = net ~80 lines added


═══════════════════════════════════════════════════════════════════════════════════════════════════
  BOUNDARY CROSSINGS — Intelligence Survival at Each Handoff (Report 74)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  11 BOUNDARIES, 4 DESTRUCTIVE (now with fixes):

  ┌─────────────────────────────────────────────────────────────────────────┐
  │                                                                         │
  │  B1: Content → TC Planner .................... CONSTRUCTIVE (no fix)   │
  │      Format change. TC reads markdown, produces structural analysis.   │
  │      Intelligence preserved: section structure, density, topic.        │
  │      Intelligence lost: word-level rhythm, author voice. (Correct.)   │
  │                                                                         │
  │  B2: TC internal (Phase 1→2→3→3.5) .......... CONSTRUCTIVE (minor fix)│
  │      Funnel by design. 9 axes → 1 metaphor + 3-5 tensions.           │
  │      FIX: Preserve runner-up metaphor + rejected tensions (~5 lines). │
  │                                                                         │
  │  B3: TC → _build-recipe.md .................. CRITICAL FIX ★★★       │
  │      WAS: 20:1 compression, prose manifest, ~35% intelligence         │
  │      NOW: Structured YAML + telescope comments + transition table     │
  │      FIX: Transition table changes format from prose to YAML+CSS.    │
  │      Intelligence survival: ~35% → ~75% (estimated, needs validation)│
  │      THIS IS THE SINGLE HIGHEST-LEVERAGE FIX IN THE ENTIRE PIPELINE. │
  │                                                                         │
  │  B4: Build plan → Handoff Gate ............... NECESSARY (enriched)    │
  │      WAS: 5 binary checks (thresholds only)                           │
  │      NOW: 8 checks (+ fractal echo, transition table, channel map)   │
  │      Makes L2/L3/L4 INHERENT at this boundary.                        │
  │                                                                         │
  │  B5: Handoff → Builder ...................... CONSTRUCTIVE (enriched)  │
  │      WAS: 6 files, ~1,150 lines, zero compositional WHY              │
  │      NOW: 8 files, ~1,300 lines, telescope+microscope interlaced     │
  │      Builder gets transition table (microscope + telescope bridge).   │
  │                                                                         │
  │  B6: Builder → HTML ......................... CONSTRUCTIVE (no fix)    │
  │      The builder's creative translation. CSS = compositional output.  │
  │      Report 28: "CSS IS compositional intelligence."                  │
  │                                                                         │
  │  B7: HTML → Gate Runner .................... NECESSARY (enriched)      │
  │      WAS: 12 binary checks                                            │
  │      NOW: 15 checks (+ multi-coherence, sub-perceptual, borders)     │
  │      Catches the flagship's 3 missing failures.                       │
  │                                                                         │
  │  B8: HTML → PA Auditors .................... NECESSARY (unchanged)     │
  │      Screenshot pre-capture → 9 fresh-eyes auditors. Zero context.   │
  │      Correctly isolated: PA evaluates perception, not compliance.     │
  │                                                                         │
  │  B9: PA → Fix Cycle ........................ CONSTRUCTIVE (fix)        │
  │      WAS: Generic "top-3 issues" as prose                             │
  │      NOW: Gate-generated SPECIFIC CSS fix recipes                     │
  │                                                                         │
  │  B10: Fix Cycle → Builder .................. CONSTRUCTIVE (no fix)     │
  │  B11: Fix Cycle → Output ................... NECESSARY (no fix)        │
  │                                                                         │
  └─────────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  FAT CORE ALTERNATIVE ARCHITECTURE (Reports 31, 94 — NEW)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  THE CONTRARIAN THESIS (Report 31):
  Builder INPUT VOLUME is the primary bottleneck, NOT handoff compression.
  Evidence: Middle (100 lines input → 4/4). Flagship (530 lines → 1.5/4).
  Remediation (300 lines → 2.5/4). Pattern: quality INVERSELY correlates
  with builder input volume, sharp dropoff above ~300 lines.

  THE FAT CORE ARCHITECTURE (Report 94): "One Artist, Many Critics"

  ┌─────────────────────────────────────────────────────────────────────┐
  │                                                                     │
  │  USER: /build-page content.md                                      │
  │         │                                                           │
  │         ▼                                                           │
  │  ORCHESTRATOR (thin, ~250 lines, mechanical routing only)          │
  │         │                                                           │
  │         ├── Spawns ONE Opus CORE AGENT                             │
  │         │   (Plans AND builds in one pass — NO Boundary 3)         │
  │         │   Reads: content.md + 100-line conventions brief         │
  │         │   + reference files (tokens, prohibitions, catalog)      │
  │         │   Phase A: Understand content (10-20 min)                │
  │         │   Phase B: Plan zones + mechanisms (10-20 min)           │
  │         │   Phase C: Build HTML+CSS (60-120 min)                   │
  │         │   Phase D: Self-verify cascade table (10-15 min)         │
  │         │                                                           │
  │         ├── Between phases: runs 3 phase-locked GATES              │
  │         │   G1: After skeleton (landmarks, components, zones)      │
  │         │   G2: After CSS (bg delta, palette, typography, soul)    │
  │         │   G3: Comprehensive (all checks + multi-coherence)       │
  │         │                                                           │
  │         ├── After build: Pre-captures screenshots                  │
  │         │                                                           │
  │         ├── Spawns 9 PA auditors (fresh-eyes, UNCHANGED)           │
  │         │   + 1 PA weaver                                           │
  │         │                                                           │
  │         └── If PA-05 < 3/4: routes fixes to SAME core agent       │
  │             (Preserves compositional memory — no Boundary 10 loss) │
  │                                                                     │
  │  OUTPUT: HTML + PA report + build log                              │
  │                                                                     │
  └─────────────────────────────────────────────────────────────────────┘

  COMPARISON: Linear Pipeline vs Fat Core

  ┌────────────────────┬────────────────────────┬────────────────────────┐
  │    DIMENSION       │    LINEAR PIPELINE     │    FAT CORE            │
  ├────────────────────┼────────────────────────┼────────────────────────┤
  │ Agent count        │ 12-14                  │ 12 (same PA shell)     │
  │ Boundaries         │ 11 (4 destructive)     │ 7 (0 destructive)      │
  │ Builder input      │ 1,300 lines (8 files)  │ Content + 100-line     │
  │                    │                        │ brief + ref files      │
  │ Intelligence       │ ~25% end-to-end        │ ~60-70% (projected)    │
  │ survival           │ (Report 74)            │                        │
  │ Build time         │ 160-270 min            │ 120-210 min            │
  │ Recipe ceiling     │ 3/4 (recipe)           │ 4/4 (convention)       │
  │ Failure mode       │ Compliant but flat     │ Creative but may skip  │
  │ Failure mitigation │ Recipe prevents omit   │ Gates catch omissions  │
  │ N (evidence)       │ 3 (Middle, Flagship,   │ 0 (UNTESTED)           │
  │                    │ Remediation)           │                        │
  │ Cost/page          │ ~$20-60                │ ~$15-40                │
  └────────────────────┴────────────────────────┴────────────────────────┘

  WHY FAT CORE MIGHT WIN:
  - CD-006 (39/40) used ONE agent. Middle (4/4) had tight core.
  - Flagship (1.5/4) had the MOST elaborate separation. Worst result.
  - "The agent that UNDERSTANDS the content WRITES the CSS" (Report 94)
  - Eliminates Boundary 3 entirely (THE critical compression point)
  - Fix cycle uses SAME agent (compositional memory preserved)

  WHY FAT CORE MIGHT FAIL:
  - Core agent holds 2,500-4,000 lines. Context degradation risk.
  - Self-assessment bias (can't catch own bad metaphors)
  - No intermediate planning review (planner and builder are same agent)
  - Mitigation: Option A (fresh-eyes metaphor validator, +5-10 min)
  - N=0. Must EXPERIMENT before adopting.


═══════════════════════════════════════════════════════════════════════════════════════════════════
  ANTI-DEGRADATION PATTERNS — Key Patterns from Report 95 (28 total)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  6 FAILURE MODES (what degradation looks like):
  F-1: Format loss (intelligence changes format, loses information)
  F-2: Re-derivation error (downstream agent re-creates existing work)
  F-3: Context competition (multiple inputs compete for attention)
  F-4: Stacked ambiguity (small ambiguities compound across boundaries)
  F-5: Omission drift (required elements silently disappear)
  F-6: Perceptual blindness (builder cannot perceive own output quality)

  TOP 5 PATTERNS (highest leverage from 28):

  ┌────────────────────────────────────────────────────────────────────┐
  │                                                                    │
  │  IT-1: TRIPLE ENCODING (Shannon error correction)                 │
  │        Encode top 5 decisions in 3 formats: YAML + CSS + semantic │
  │        If one channel degrades, the others correct.               │
  │        Prevents: F-1, F-4. Cost: +15 min TC, +40 lines/build.   │
  │                                                                    │
  │  SE-4: CIRCUIT BREAKERS (fail-fast mid-build)                     │
  │        After Phase 3: "Can I SEE zone boundaries?" If no, STOP.  │
  │        After Phase 5: "Can I see 3 text sizes?" If no, STOP.     │
  │        Prevents: F-1 compounding, F-6. Cost: +6-10 min.          │
  │                                                                    │
  │  MF-5: POKA-YOKE (mistake-proofing)                               │
  │        Replace "warm cream spectrum" with {hex: "#fefcf3"} LOCKED │
  │        Builder CANNOT misinterpret exact values.                  │
  │        Prevents: F-2, F-4. Cost: subsumed by transition table.   │
  │                                                                    │
  │  MA-1: CONDUCTOR MODEL (direction statement)                      │
  │        3-5 line DIRECTION STATEMENT at top of every recipe phase  │
  │        "This page teaches through progressive revelation."        │
  │        Builder re-reads purpose at each phase. Prevents drift.    │
  │        Prevents: F-3, F-5. Cost: +30 lines recipe, +5 lines TC.  │
  │                                                                    │
  │  IT-3: SNR OPTIMIZATION (300-line builder brief)                  │
  │        Current builder input: 1,150 lines, SNR ~0.5              │
  │        Optimized: ~400-500 lines of pure signal, SNR ~0.9        │
  │        Or: 300-line cap (Report 31's recommendation)              │
  │        Prevents: F-3 (context competition). Cost: ~40 lines orch.│
  │                                                                    │
  │  Full catalog: ephemeral/compositional-intelligence/              │
  │  95-anti-degradation-patterns.md (28 patterns from 4 domains)    │
  └────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  COMPARISON: MASTER PROMPT → ORIGINAL PV2 → UPDATED PV2 → FAT CORE
═══════════════════════════════════════════════════════════════════════════════════════════════════

  ┌─────────────────┬────────────────┬────────────────┬────────────────┬────────────────┐
  │   DIMENSION     │ MASTER PROMPT  │ ORIGINAL PV2   │ UPDATED PV2    │ FAT CORE (NEW) │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ Builder input   │ 75 lines       │ 1,150 lines    │ 1,300 lines    │ ~300 lines     │
  │                 │ (13.4%)        │ (recipe+ref)   │ (tele+micro)   │ (brief+content)│
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ Instruction     │ Checklist      │ Recipe         │ Experiment:    │ Convention     │
  │ type            │                │                │ Recipe/Brief/  │ (~100 lines)   │
  │                 │                │                │ Hybrid/FatCore │                │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ Intelligence    │ L1 only        │ L1 only        │ L1-L4 checked  │ L1-L5 possible │
  │ levels          │ (text)         │ (gates)        │ (gates+artif.) │ (one agent)    │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ TC scope        │ Absent         │ 1,878 lines    │ ~660 lines     │ MERGED into    │
  │                 │                │ (plan+build)   │ (planner only) │ core agent     │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ Key artifact    │ None           │ op-recipe      │ Transition Tbl │ Conventions    │
  │                 │                │                │ + Fractal Echo │ Brief (~100 ln)│
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ Gates           │ 0              │ 12             │ 15 post-build  │ 3 phase-locked │
  │                 │                │                │ + 4 micro-gate │ (during build) │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ Boundaries      │ N/A            │ 11 (4 destr.)  │ 11 (4 destr.)  │ 7 (0 destr.)   │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ Builder model   │ Sonnet         │ Opus           │ Opus           │ Opus           │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ PA auditors     │ 0-2            │ 9              │ 9              │ 9 (unchanged)  │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ PA-05 ceiling   │ 1.5/4          │ 3/4            │ 3-4/4          │ 4/4 possible   │
  │                 │ (checklist)    │ (recipe)       │ (recipe+WHY)   │ (convention)   │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ Cost/page       │ ~$5            │ ~$15-30        │ ~$20-60        │ ~$15-40        │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ Fix recipes     │ Generic prose  │ Generic prose  │ Gate CSS       │ Same agent     │
  │                 │                │                │                │ (memory kept)  │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ N (evidence)    │ 1 (Flagship)   │ 2 (Middle, Rem)│ 0 (UNTESTED)   │ 0 (UNTESTED)   │
  └─────────────────┴────────────────┴────────────────┴────────────────┴────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  KNOWN RISKS + OPEN QUESTIONS
═══════════════════════════════════════════════════════════════════════════════════════════════════

  RISK 1: Recipe Ceiling at 3/4 (Report 85)
  ├── Evidence supports variable ceiling: 3/4 complex, 4/4 simple.
  ├── Irreducible core: content-form resonance, proportional intelligence,
  │   creative surprise, emergent coherence.
  ├── Hybrid approach partially addresses: recipe for structure, convention
  │   for composition.
  └── Mitigation: Convention escalation path for users wanting 4/4.

  RISK 2: Transition Table Complexity
  ├── YAML transition table is ~80-150 lines per page.
  ├── TC must GENERATE this correctly — new capability, untested.
  ├── Builder must CONSUME it correctly — new workflow, untested.
  └── Mitigation: Experiment B tests full recipe + transition table.

  RISK 3: INHERENT vs BOLTED-ON Gap (Report 87)
  ├── Even with fixes, most features remain advisory (LLM limitation).
  ├── Template HTML with slots helps but doesn't prevent a creative builder
  │   from rewriting the template entirely.
  ├── Phase-locked builds require inter-agent messaging (complexity).
  └── Mitigation: Focus on ARTIFACT dependency (structural) over PROCESS
      enforcement (advisory).

  RISK 4: Content Generalizability (N=2)
  ├── All evidence from 1-2 content types.
  ├── Experiments will test on RESEARCH-SYNTHESIS.md only.
  └── Mitigation: After experiments, build on 5 content types.

  RISK 5: L5 (Anti-Scale) Remains Absent
  ├── No programmatic gate can enforce "semantic density × restraint ×
  │   spatial confidence."
  ├── This is judgment territory — only PA can evaluate it.
  ├── The self-test questions in Phase 8 are advisory, not inherent.
  └── Mitigation: Accept L5 as the ceiling between COMPOSED (3/4) and
      DESIGNED (4/4). L5 requires Opus fluency, not infrastructure.

  RISK 6: Cost Blind Spot (Report 31) ★ NEW
  ├── PV2 full pipeline: ~$20-60 per page (4-6 hours Opus compute)
  ├── For 20-50 pages: $400-3,000 in API costs.
  ├── Fat Core is cheaper (~$15-40/page) but still significant.
  ├── No report evaluates whether compositional richness is WORTH this.
  └── Mitigation: Run Experiment E ($5 single Opus) first. If it works,
      cost drops 4-12x.

  RISK 7: Content Dependency (Report 31) ★ NEW
  ├── All evidence from 1-2 content types.
  ├── Simple content may score DESIGNED with minimal infrastructure.
  ├── Complex content may cap at STYLED regardless of infrastructure.
  └── Mitigation: After initial experiments, test on 5 content types.

  RISK 8: Temporal Degradation (Report 31) ★ NEW
  ├── LLM behavior changes with model updates.
  ├── A recipe producing COMPOSED today may produce FLAT after update.
  └── Mitigation: No report addresses versioning or regression testing.

  RISK 9: Builder Input Volume as PRIMARY Bottleneck (Reports 31, 95) ★ NEW
  ├── The investigation assumes handoff compression is the main problem.
  ├── The contrarian argues: builder ATTENTION is the main problem.
  ├── Evidence: quality inversely correlates with input volume.
  ├── Middle (100 lines → 4/4). Flagship (530 lines → 1.5/4).
  ├── EVERY recommendation that adds material to builder input worsens
  │   this problem: transition table, triple encoding, telescope comments.
  └── Mitigation: 300-line cap OR Fat Core (eliminates the problem).


═══════════════════════════════════════════════════════════════════════════════════════════════════
  MASTER SYNTHESIS VERDICT (Report 32 — Definitive, 50+ reports synthesized)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  ╔═══════════════════════════════════════════════════════════════════════╗
  ║                                                                       ║
  ║   VERDICT: FAT CORE ARCHITECTURE                                     ║
  ║   One Opus agent that plans AND builds. Thin verification shell.     ║
  ║                                                                       ║
  ║   "Intelligence cannot be compressed into documents and survive      ║
  ║   handoff between agents. Put the intelligence WHERE IT WILL BE      ║
  ║   USED — inside one capable agent with minimal constraints and       ║
  ║   maximum creative authority. Verify the output, not the process.    ║
  ║   Trust the agent, constrain the soul."                              ║
  ║                                                                       ║
  ║   Evidence trail:                                                     ║
  ║   CD-006  (1 Opus, minimal pipeline)  → 39/40                       ║
  ║   Middle  (8 agents, 100-line input)  → PA-05 4/4 DESIGNED          ║
  ║   Flagship (19 agents, 530-line input) → PA-05 1.5/4 FLAT          ║
  ║   Remediation (Opus, ~300-line input) → PA-05 2.5/4 COMPOSED       ║
  ║                                                                       ║
  ║   Quality INVERSELY correlates with agent count AND input volume.    ║
  ║                                                                       ║
  ╚═══════════════════════════════════════════════════════════════════════╝

  WHAT TO CODIFY IMMEDIATELY (before experiments):

  1. conventions-brief.md (~100 lines)
     Location: design-system/compositional-core/guidelines/conventions-brief.md
     5 sections: Perception Thresholds | Soul | Spatial Rules |
     Quality Floor | Creative Authority

  2. experiment-protocol.md (~80 lines)
     Location: ephemeral/compositional-intelligence/experiment-protocol.md
     3 experiments with exact inputs, success criteria, decision gates

  WHAT TO DEFER (until experiments prove value):
  - Pipeline v2 orchestrator code
  - TC skill narrowing
  - Gate runner updates (SC-13 to SC-15)
  - Operational recipe (INDEFINITELY unless experiments prove brief insufficient)
  - Transition table format (let Core agent create organically)


═══════════════════════════════════════════════════════════════════════════════════════════════════
  COST MODEL — PV2 Full Pipeline Economics
═══════════════════════════════════════════════════════════════════════════════════════════════════

  ╔═══════════════════════════════════════════════════════════════════════╗
  ║                                                                       ║
  ║   PV2 FULL PIPELINE: ~$20-60 PER PAGE (4-6 hours Opus compute)      ║
  ║                                                                       ║
  ║   ┌─────────────────────────────────────────────────────────────┐    ║
  ║   │  COST BREAKDOWN PER PAGE:                                   │    ║
  ║   │                                                             │    ║
  ║   │  Wave 0: TC Planning (Opus, 30-60 min)      ~$3-8          │    ║
  ║   │  Wave 0.5: Metaphor Validation (Opus, 5-10m) ~$1-2         │    ║
  ║   │  Wave 0.9: Handoff Gate (programmatic)        ~$0           │    ║
  ║   │  Wave 1: Build Execution (Opus, 90-150 min)  ~$8-25        │    ║
  ║   │  Wave 2: 15 Gates + 9 PA Auditors (30-45 min) ~$5-15       │    ║
  ║   │  Wave 3: Fix Cycles (up to 3x, 30-60 min)   ~$3-10        │    ║
  ║   │  ─────────────────────────────────────────────────────      │    ║
  ║   │  TOTAL PER PAGE:                             ~$20-60       │    ║
  ║   │  TOTAL TIME:                                 4-6 hours     │    ║
  ║   │                                                             │    ║
  ║   │  AT SCALE:                                                  │    ║
  ║   │  20 pages  → $400 - $1,200                                 │    ║
  ║   │  50 pages  → $1,000 - $3,000                               │    ║
  ║   │  100 pages → $2,000 - $6,000                               │    ║
  ║   └─────────────────────────────────────────────────────────────┘    ║
  ║                                                                       ║
  ║   FAT CORE ALTERNATIVE: ~$15-40 per page (3-4 hours)                ║
  ║   SINGLE OPUS (Exp A): ~$5-10 per page (1-2 hours)                  ║
  ║                                                                       ║
  ║   QUESTION NO REPORT ANSWERS (Report 31):                            ║
  ║   Is compositional richness WORTH $20-60/page?                       ║
  ║   This is a user decision, not an architectural one.                 ║
  ║                                                                       ║
  ╚═══════════════════════════════════════════════════════════════════════╝


═══════════════════════════════════════════════════════════════════════════════════════════════════
  NEXT STEP — 3 EXPERIMENTS IN STRICT SEQUENCE
═══════════════════════════════════════════════════════════════════════════════════════════════════

  ╔═══════════════════════════════════════════════════════════════════════╗
  ║                                                                       ║
  ║   EXPERIMENT A: THE $5 EXPERIMENT (RUN FIRST)                        ║
  ║   ────────────────────────────────────────────                       ║
  ║   Input: RESEARCH-SYNTHESIS.md + conventions brief (~100 lines)     ║
  ║          + tokens.css + prohibitions summary. Single Opus agent.     ║
  ║   No pipeline. No orchestrator. No verification shell.              ║
  ║   Cost: ~$5-10. Time: ~30 min build + 1 hr PA.                     ║
  ║                                                                       ║
  ║   DECISION GATE:                                                      ║
  ║   PA-05 >= 3.0 → Pipeline is UNNECESSARY. Just conventions brief.   ║
  ║   PA-05 2.0-2.9 → Proceed to Experiment B (Fat Core).              ║
  ║   PA-05 < 2.0 → Something wrong with conventions brief.            ║
  ║                                                                       ║
  ║   EXPERIMENT B: FAT CORE (RUN SECOND, if A < 3.0)                   ║
  ║   ────────────────────────────────────────────────                   ║
  ║   Input: Same content. Full Fat Core architecture (12 agents).      ║
  ║   Orchestrator + Core Agent (plans + builds) + 9 PA + Weaver.      ║
  ║   Cost: ~$30-50. Time: ~90 min build + 1.5 hr PA.                  ║
  ║                                                                       ║
  ║   DECISION GATE:                                                      ║
  ║   PA-05 improvement >= 0.5 over A → Shell adds value.              ║
  ║   PA-05 improvement < 0.5 → Shell is overhead. Simplify.           ║
  ║                                                                       ║
  ║   EXPERIMENT C: RECIPE COMPARISON (THIRD, only if needed)            ║
  ║   ────────────────────────────────────────────────────               ║
  ║   Input: Same content. Fat Core + 650-line recipe (not brief).      ║
  ║   Directly tests recipe ceiling hypothesis.                          ║
  ║   Cost: ~$30-50. Time: ~90 min.                                     ║
  ║                                                                       ║
  ║   DECISION GATE:                                                      ║
  ║   Recipe < Brief → Ceiling CONFIRMED. Conventions win.              ║
  ║   Recipe >= Brief → Ceiling REJECTED. Investigate.                  ║
  ║                                                                       ║
  ║   ═════════════════════════════════════════════════════════════      ║
  ║                                                                       ║
  ║   ALL EXPERIMENTS:                                                    ║
  ║   Content: RESEARCH-SYNTHESIS.md (same as Flagship)                 ║
  ║   PA: Mode 4, 9 blind Opus auditors + 1 weaver                     ║
  ║   Target: PA-05 >= 3.0/4 | Soul: 0 violations | Container: 960px  ║
  ║   Mechanisms: >= 8 across >= 4 categories                           ║
  ║                                                                       ║
  ║   FULL DECISION TREE:                                                ║
  ║   A >= 3.0 → STOP. conventions brief = the pipeline.                ║
  ║   A < 3.0, B >= 3.0 → Fat Core is the architecture.                ║
  ║   A < 3.0, B < 3.0 → Investigation missed something fundamental.  ║
  ║   C tests recipe ceiling: Recipe < Brief = confirmed. Optional.    ║
  ║                                                                       ║
  ║   Then: Codify the winning approach.                                 ║
  ║   Then: Expand to 5 content types. Track PA-05 per type.            ║
  ║                                                                       ║
  ╚═══════════════════════════════════════════════════════════════════════╝
```
