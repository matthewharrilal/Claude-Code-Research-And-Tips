# Multi-Pass Corpus Integration Pipeline — Complete Architecture

```
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                    MULTI-PASS CORPUS INTEGRATION PIPELINE                           ║
║                    Deterministic Orchestration via claude -p                         ║
║                    68-80 passes · 7 subsets · 3 rotations each                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝


    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                        ORCHESTRATOR (Node.js)                               │
    │                                                                             │
    │  DETERMINISTIC CODE controls:                                               │
    │  · File loading (which files, exact paths)                                  │
    │  · File ordering (prompt construction sequence)                             │
    │  · Rotation schedule (hold 2-3 passes, then rotate)                         │
    │  · Pass count (exactly 8 per subset, no early stopping)                     │
    │  · Agent type (builder vs verifier system prompts)                           │
    │  · Model selection (--model claude-opus-4-6)                                │
    │  · Session isolation (fresh claude -p per pass)                              │
    │  · Artifact backup (copy before each pass)                                  │
    │  · Validation (HTML integrity between passes)                               │
    │  · State persistence (crash → resume from last pass)                        │
    │  · Cost tracking (per-pass + cumulative)                                    │
    │  · Checkpoint creation (after each subset)                                  │
    │                                                                             │
    │  LLM controls: NOTHING except creative building and holistic verification   │
    └─────────────────────┬───────────────────────────────────────────────────────┘
                          │
                          ▼
══════════════════════════════════════════════════════════════════════════════════════
 PHASE A: CORPUS INTEGRATION                                    56 PASSES TOTAL
══════════════════════════════════════════════════════════════════════════════════════

    CONTENT INPUT                           CORPUS (43,066 lines · 35+ files)
    ─────────────                           ──────────────────────────────────
    User's markdown ──┐                     Research R1-R5:        4,104 lines
    (the actual        │                     DD Explorations:       6,259 lines
     content to        │                     OD Explorations:      12,012 lines
     be designed)      │                     AD Explorations:      10,920 lines
                       │                     CD Explorations:      10,704 lines
                       │                     Case Studies:          5,120 lines
                       │                     Connective Tissue:    14,780 lines
                       ▼
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │  WINDOW 1: TC DERIVATION (single claude -p call)                           │
    │                                                                             │
    │  Input:  Content markdown + TC skill + world-description (NO rules)         │
    │  Output: Conviction brief + 6D reflection + mechanism log                   │
    │                                                                             │
    │  The conviction brief is the DIRECTION.                                     │
    │  Raw corpus is the MATERIAL.                                                │
    │  They work together — direction tells WHERE, material gives WHAT TO BUILD.  │
    └─────────────────────┬───────────────────────────────────────────────────────┘
                          │
                          │  conviction brief + content
                          ▼
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │  SUBSET 1: DENSITY CORE                                    ~3,336 lines     │
    │  ══════════════════════                                                     │
    │  R3-DENSITY-DIMENSIONS.md ·· DD-003-islands.html ·· DD-006-fractal.html     │
    │  DD-003 case study ·· DD-006 case study                                     │
    │                                                                             │
    │  ROTATION A ─────────────────────────────────────────────────────────────    │
    │  Order: R3 → DD-003 → DD-006 → CS-003 → CS-006                             │
    │                                                                             │
    │    Pass 1 ── BUILDER ──── claude -p ──── Reads raw material + artifact       │
    │         │                                Integrates density philosophy        │
    │         ▼                                Writes to output.html                │
    │    Pass 2 ── VERIFIER ─── claude -p ──── Reads SAME raw material + artifact  │
    │         │                                "Does this FEEL like someone who     │
    │         │                                 understood density dimensions?"      │
    │         │                                Writes holistic observations          │
    │         ▼                                                                     │
    │    Pass 3 ── BUILDER ──── claude -p ──── Reads raw + artifact + observations  │
    │                                          Addresses verifier's gaps             │
    │                                                                               │
    │  ROTATION B ─────────────────────────────────────────────────────────────      │
    │  Order: DD-006 → CS-006 → R3 → DD-003 → CS-003   ← DD-006 to primacy        │
    │                                                                               │
    │    Pass 4 ── BUILDER ──── claude -p ──── Re-engages with new ordering         │
    │         │                                DD-006 (fractal/meta-pattern)         │
    │         ▼                                now gets primary attention             │
    │    Pass 5 ── VERIFIER ─── claude -p ──── Re-checks with DD-006 primacy        │
    │         │                                                                     │
    │         ▼                                                                     │
    │    Pass 6 ── BUILDER ──── claude -p ──── Addresses new observations           │
    │                                                                               │
    │  ROTATION C ─────────────────────────────────────────────────────────────      │
    │  Order: CS-003 → DD-003 → CS-006 → DD-006 → R3   ← case studies primacy      │
    │                                                                               │
    │    Pass 7 ── BUILDER ──── claude -p ──── Final integration pass               │
    │         │                                                                     │
    │         ▼                                                                     │
    │    Pass 8 ── VERIFIER ─── claude -p ──── Final holistic check                 │
    │                                                                               │
    │  ═══ CHECKPOINT S1 ═══  artifact backup + state snapshot + quality metrics     │
    │                                                                               │
    └─────────────────────┬───────────────────────────────────────────────────────┘
                          │
                          ▼
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │  SUBSET 2: ORGANIZATION CORE                               ~6,451 lines     │
    │  ═══════════════════════════                                                │
    │  R1-DOCUMENTATION-PATTERNS.md ·· OD-001-conversational.html                 │
    │  OD-006-creative.html ·· case studies                                       │
    │                                                                             │
    │    Rotation A (passes 9-11)  → original order                               │
    │    Rotation B (passes 12-14) → OD-006 to primacy                            │
    │    Rotation C (passes 15-16) → case studies to primacy                      │
    │                                                                             │
    │  ═══ CHECKPOINT S2 ═══                                                      │
    └─────────────────────┬───────────────────────────────────────────────────────┘
                          │
                          ▼
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │  SUBSET 3: AXIS + COMBINATION CORE                         ~6,522 lines     │
    │  ═════════════════════════════════                                           │
    │  R4-AXIS-INNOVATIONS.md ·· R5-COMBINATION-THEORY.md                         │
    │  AD-006-compound.html ·· CD-006-pilot-migration.html ·· CD-006 case study   │
    │                                                                             │
    │    Rotation A (passes 17-19) → R4 → R5 → AD-006 → CD-006 → CS             │
    │    Rotation B (passes 20-22) → AD-006 → CD-006 → CS → R4 → R5             │
    │    Rotation C (passes 23-24) → CS → CD-006 → R4 → R5 → AD-006             │
    │                                                                             │
    │  ═══ CHECKPOINT S3 ═══                                                      │
    └─────────────────────┬───────────────────────────────────────────────────────┘
                          │
                          ▼
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │  SUBSET 4: DENSITY + ORG EXTENDED                          ~4,686 lines     │
    │  ════════════════════════════════                                            │
    │  DD-001-breathing ·· DD-002-gradient ·· DD-004-layers ·· DD-005-rivers      │
    │  DD-004 case study                                                          │
    │                                                                             │
    │    Passes 25-32 (3 rotations × 2-3 passes)                                  │
    │  ═══ CHECKPOINT S4 ═══                                                      │
    └─────────────────────┬───────────────────────────────────────────────────────┘
                          │
                          ▼
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │  SUBSET 5: ORG + AXIS EXTENDED                             ~5,800 lines     │
    │  ════════════════════════════                                                │
    │  OD-002-narrative ·· OD-003-task-based ·· OD-004-confidence                 │
    │  AD-001-z-pattern                                                           │
    │                                                                             │
    │    Passes 33-40 (3 rotations × 2-3 passes)                                  │
    │  ═══ CHECKPOINT S5 ═══                                                      │
    └─────────────────────┬───────────────────────────────────────────────────────┘
                          │
                          ▼
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │  SUBSET 6: REMAINING AXIS + CD                             ~8,036 lines     │
    │  ═════════════════════════════                                               │
    │  AD-002-f-pattern ·· AD-003-bento-grid                                      │
    │  CD-001-reasoning-inside-code ·· CD-005-multi-axis-transition               │
    │                                                                             │
    │    Passes 41-48 (3 rotations × 2-3 passes)                                  │
    │  ═══ CHECKPOINT S6 ═══                                                      │
    └─────────────────────┬───────────────────────────────────────────────────────┘
                          │
                          ▼
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │  SUBSET 7: SYNTHESIS + CONNECTIVE INTELLIGENCE             ~5,800 lines     │
    │  ═════════════════════════════════════════════                               │
    │  RESEARCH-SYNTHESIS.md ·· R2-CREATIVE-LAYOUTS.md                            │
    │  COMPOSITIONAL-STRATEGY-LIBRARY ·· mechanism-combinations.md                │
    │  compositional-rules.md ·· semantic-rules.md ·· OD-005-spatial.html         │
    │                                                                             │
    │    Passes 49-56 (3 rotations × 2-3 passes)                                  │
    │  ═══ CHECKPOINT S7 ═══                                                      │
    └─────────────────────┬───────────────────────────────────────────────────────┘
                          │
                          │  Artifact has now been shaped by ALL 35+ corpus files
                          │  across 56 passes with 21 rotations
                          ▼

══════════════════════════════════════════════════════════════════════════════════════
 PHASE B: PA HARDENING                                      12-24 PASSES
══════════════════════════════════════════════════════════════════════════════════════

    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                         PA CYCLE (2-6 adaptive)                             │
    │                                                                             │
    │  STEP 1: SCREENSHOTS ──── Deterministic Playwright                          │
    │  ─────────────────────                                                      │
    │  · 1440px viewport (desktop)                                                │
    │  · 768px viewport (tablet)                                                  │
    │  · 375px viewport (mobile)                                                  │
    │  · DPR forced to 1.0                                                        │
    │  · Animations disabled                                                      │
    │  · document.fonts.ready awaited                                             │
    │  · Full-page + viewport captures                                            │
    │  · Saved to builds/{timestamp}/screenshots/                                 │
    │                                                                             │
    │  STEP 2: GATE RUNNER ──── Deterministic Playwright JS (NOT LLM)             │
    │  ────────────────────                                                       │
    │  · 42 gates executed as pure code                                           │
    │  · Identity gates, perception thresholds, responsive checks                 │
    │  · Returns structured JSON: pass/fail per gate                              │
    │  · Gate verdict: PROCEED_TO_PA / IMPROVE / RETHINK                          │
    │                                                                             │
    │  STEP 3: EXPERIENTIAL SCAN ──── Orchestrator scrolls page                   │
    │  ──────────────────────────                                                 │
    │  · Cold look at reading speed                                               │
    │  · Flag anything illegible, broken, or confusing                            │
    │  · Pre-seed BLOCKING-USABILITY findings for auditors                        │
    │                                                                             │
    │  STEP 4: 9 PA AUDITORS ──── 9 PARALLEL claude -p calls                     │
    │  ──────────────────────                                                     │
    │                                                                             │
    │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
    │  │ PA-A │ │ PA-B │ │ PA-C │ │ PA-D │ │ PA-E │ │ PA-F │ │ PA-G │ │ PA-H │  │
    │  │ Soul │ │Percep│ │Coher│ │Metap│ │Conte│ │Respo│ │Typog│ │Spati│  │
    │  └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘  │
    │     │        │        │        │        │        │        │        │        │
    │     │    ┌───┴────────┴────────┴────────┴────────┴────────┴────────┘        │
    │     │    │                                                                  │
    │     │    │  ┌──────┐                                                        │
    │     │    │  │ PA-I │  Integrative (spawns AFTER A-H complete)               │
    │     │    │  │Gestlt│  No assigned questions · Free-form · Emotional arc     │
    │     │    │  └──┬───┘                                                        │
    │     │    │     │                                                             │
    │     └────┴─────┘                                                            │
    │          │                                                                  │
    │          │  INFORMATION ISOLATION:                                           │
    │          │  · Auditors see: screenshots + HTML ONLY                          │
    │          │  · Auditors NEVER see: builder context, conviction brief,         │
    │          │    gate results, other auditor reports                            │
    │          │  · Auditors use: perceptual language ONLY                         │
    │          │                                                                  │
    │          ▼                                                                  │
    │  STEP 5: WEAVER ──── single claude -p call                                  │
    │  ───────────────                                                            │
    │  · Reads all 9 auditor reports                                              │
    │  · Reads gate results                                                       │
    │  · Own experiential anchor (reads screenshots FIRST)                        │
    │  · Produces:                                                                │
    │    ├── Verdict: SHIP / REFINE / REBUILD                                     │
    │    ├── Conviction report (artistic language, territories to enter)           │
    │    ├── Top-5 fixes (typed: MECHANICAL / STRUCTURAL / COMPOSITIONAL)         │
    │    ├── Emotional arc synthesis (Authority / Closure / Surprise / Delight)    │
    │    └── Improvement vector                                                   │
    │                                                                             │
    │  STEP 6: ROUTING ──── Deterministic code decision                           │
    │  ────────────────                                                           │
    │                                                                             │
    │         ┌──────────┐                                                        │
    │         │  VERDICT  │                                                        │
    │         └────┬─────┘                                                        │
    │              │                                                              │
    │     ┌────────┼──────────┐                                                   │
    │     ▼        ▼          ▼                                                   │
    │   SHIP    REFINE     REBUILD                                                │
    │    │        │           │                                                   │
    │    │        │           └── Return to Phase A subset                        │
    │    │        │               selection (rare)                                │
    │    │        │                                                               │
    │    │        ▼                                                               │
    │    │   REFINEMENT PASSES (6-8 per cycle)                                    │
    │    │   ──────────────────────────────────                                   │
    │    │                                                                        │
    │    │   Each refinement pass = claude -p:                                    │
    │    │   · Builder reads Weaver CONVICTION report                             │
    │    │     (territories to enter, NOT fix checklist)                          │
    │    │   · Builder reads current artifact                                     │
    │    │   · Builder DEEPENS, not fixes                                         │
    │    │   · Artistic amplification                                             │
    │    │                                                                        │
    │    │   Every 2-3 refinement passes:                                         │
    │    │   · Mini-PA (3 auditors, 1 viewport)                                   │
    │    │   · Quick verification of improvement direction                        │
    │    │                                                                        │
    │    │        │                                                               │
    │    │        ▼                                                               │
    │    │   ┌──────────────┐                                                     │
    │    │   │ NEXT PA CYCLE │ ──── Re-screenshot, re-gate, re-audit              │
    │    │   └──────┬───────┘                                                     │
    │    │          │                                                              │
    │    │          └──── Loop until SHIP or max cycles (6)                        │
    │    │                                                                        │
    │    │   STALL DETECTION:                                                     │
    │    │   · 2 consecutive cycles with no improvement → force SHIP              │
    │    │   · Budget ceiling reached → warn and pause                            │
    │    │                                                                        │
    │    ▼                                                                        │
    │  ┌──────────────────────────────────────────────────────────────────┐        │
    │  │                        SHIP                                      │        │
    │  │                                                                  │        │
    │  │  Final artifact: output.html                                     │        │
    │  │  Built by someone who collectively read ALL 43,066 lines         │        │
    │  │  Every file got turns at primacy, recency, and valley positions  │        │
    │  │  Every subset's influence holistically verified                   │        │
    │  │  Perceptual quality hardened through PA cycles                    │        │
    │  └──────────────────────────────────────────────────────────────────┘        │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘


══════════════════════════════════════════════════════════════════════════════════════
 STATE MANAGEMENT & INFRASTRUCTURE
══════════════════════════════════════════════════════════════════════════════════════

    DIRECTORY STRUCTURE:
    ────────────────────
    builds/{timestamp}/
    ├── output.html                          ← current artifact
    ├── pipeline-state.json                  ← full state (resume from any pass)
    ├── backups/
    │   ├── output-s1-p1-rA.html             ← every pass backed up
    │   ├── output-s1-p2-rA.html
    │   ├── ...
    │   └── output-s7-p8-rC.html
    ├── checkpoints/
    │   ├── cp-S1/  (state + artifact + metrics after subset 1)
    │   ├── cp-S2/
    │   ├── ...
    │   └── cp-PA-2/ (after PA cycle 2)
    ├── logs/
    │   ├── orchestrator.log                 ← human-readable
    │   ├── passes.jsonl                     ← per-pass summary
    │   ├── decisions.jsonl                  ← routing decisions
    │   ├── quality.jsonl                    ← verifier assessments
    │   ├── cost.jsonl                       ← per-invocation cost
    │   └── errors.jsonl                     ← all errors
    ├── screenshots/
    │   ├── 1440px-full.png
    │   ├── 768px-full.png
    │   └── 375px-full.png
    ├── reports/
    │   ├── pa-auditor-A.md through I.md
    │   ├── weaver-synthesis.md
    │   └── gate-results.json
    └── prompts/                             ← every prompt preserved
        ├── s1-p1-builder.txt
        ├── s1-p2-verifier.txt
        └── ...

    INVOCATION MODEL:
    ─────────────────
    Each pass = one claude -p call:

    CLAUDECODE= claude -p \
      --model claude-opus-4-6 \
      --dangerously-skip-permissions \
      --output-format json \
      --max-turns 30 \
      --allowedTools "Read,Write,Edit" \
      <<< "$CONSTRUCTED_PROMPT"

    CODE constructs the prompt. CODE rotates the files. CODE counts.
    LLM only does creative work inside each call.

    RESUME:
    ───────
    Crash at pass 34 → read pipeline-state.json → verify artifact
    hash matches backup → continue from pass 34.

    INVOCATION FROM CLAUDE CODE:
    ────────────────────────────
    node orchestrator.js --content path/to/content.md
    (runs via Bash tool with run_in_background)
    Or standalone: npm run deep-build -- --content content.md


══════════════════════════════════════════════════════════════════════════════════════
 THE SINGLE-PASS ANATOMY (what happens inside each claude -p call)
══════════════════════════════════════════════════════════════════════════════════════

    BUILDER PASS:                            VERIFIER PASS:
    ─────────────                            ──────────────

    ┌─ System Prompt ─────────────┐          ┌─ System Prompt ─────────────┐
    │ You are inhabiting a world  │          │ You are a reader, not an    │
    │ described by philosophy,    │          │ auditor. You just absorbed   │
    │ not bounded by rules.       │          │ raw creative material.      │
    │                             │          │                             │
    │ 7 evaluation lenses as      │          │ Now look at the artifact.   │
    │ creative compass            │          │ Does it FEEL like someone   │
    │                             │          │ who understood the material │
    │ NO checklists               │          │ built this?                 │
    │ NO extracted rules          │          │                             │
    │ NO compliance language      │          │ NO CSS vocabulary           │
    └─────────────────────────────┘          │ NO checklists               │
                                             │ NO rules                    │
    ┌─ User Prompt ───────────────┐          └─────────────────────────────┘
    │                             │
    │ ── CONVICTION BRIEF ──      │          ┌─ User Prompt ───────────────┐
    │ (from W1 TC derivation)     │          │                             │
    │                             │          │ ── RAW MATERIAL ──          │
    │ ── RAW MATERIAL ──          │          │ (same files builder saw)    │
    │ File 1: [full content]      │          │                             │
    │ File 2: [full content]      │          │ ── THE ARTIFACT ──          │
    │ File 3: [full content]      │          │ (current HTML)              │
    │ ...                         │          │                             │
    │                             │          │ Write about:                │
    │ ── CURRENT ARTIFACT ──      │          │ · Where influence FELT      │
    │ (current HTML or empty)     │          │ · Where influence ABSENT    │
    │                             │          │ · Where influence SHALLOW   │
    │ ── VERIFIER OBSERVATIONS ── │          │   (the 48px test)           │
    │ (from previous pass)        │          │ · Overall spectrum          │
    │                             │          │                             │
    │ Build.                      │          │ Do NOT use CSS vocabulary.  │
    └─────────────────────────────┘          └─────────────────────────────┘


══════════════════════════════════════════════════════════════════════════════════════
 CAROUSEL ROTATION VISUALIZATION (per subset)
══════════════════════════════════════════════════════════════════════════════════════

    Files: [A] [B] [C] [D] [E]

    ROTATION A (passes 1-3):     A  B  C  D  E
                                 ▲              ▲
                                 │              │
                              PRIMACY        RECENCY

    ROTATION B (passes 4-6):     C  D  E  A  B
                                 ▲              ▲
                                 │              │
                              PRIMACY        RECENCY
                              (C was valley → now primary attention)

    ROTATION C (passes 7-8):     E  A  B  C  D
                                 ▲              ▲
                                 │              │
                              PRIMACY        RECENCY
                              (E was deep valley → now primary attention)

    Every file gets 2-3 passes at each attention position.
    Transformer primacy/recency bias is exploited, not fought.


══════════════════════════════════════════════════════════════════════════════════════
 TOTALS
══════════════════════════════════════════════════════════════════════════════════════

    Phase A:  7 subsets × 8 passes           = 56 corpus passes
    Phase B:  2-6 PA cycles × 6-8 ref passes = 12-48 PA passes
    ──────────────────────────────────────────────────────────
    TOTAL:    68-104 passes per page
    CORPUS:   43,066 lines loaded RAW (not compressed, not extracted)
    TIME:     12-20 hours (across sessions, resumable)

    The artifact that emerges should feel like it was built by someone
    who read all 43,066 lines — because across 56 passes, different
    builders collectively DID.
```
