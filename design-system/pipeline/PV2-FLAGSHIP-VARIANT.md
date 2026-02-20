# Pipeline V2 — FLAGSHIP VARIANT (LIVE INCREMENTAL UPDATE)

**Reference Document** — Flagship-first variant of PV2, incrementally updated as investigation findings arrive.
**Status:** LIVE — being updated by diagram-updater agent as reports complete.
**Base:** Copied from PV2-PIPELINE-DIAGRAM.md (2026-02-19)
**Goal:** Evolve the architecture from Middle-biased → Flagship-first (4/4 DESIGNED at maximum compositional depth)
**Directives:** ALWAYS FLAGSHIP | ALWAYS REMEDIATION-STYLE | FIRE AND FORGET

## CHANGE LOG (newest first)
- v3: Applied flagship-44-recipe synthesis (22 reports, Reports 01-23). Changes:
  - DEFINITION: 12-dimension spec → 14-dimension spec with evidence status tags
    (PROVEN/EXTRAPOLATED/THEORETICAL) and contrarian caveats (Report 01, 11)
  - CONVENTIONS BRIEF: Structure spec → actual 230-line draft reference
    (10 sections, hybrid prose+YAML, Report 10). Recipe ceiling caveat (Report 17).
  - TIER 5 PA: Updated 8 questions (PA-60–PA-67) with full text, scoring bands,
    constraints, and circularity caveat (Reports 02, 08, 11)
  - GATES: Added 3-tier triage (A/B/C) + 6 Flagship threshold elevations (Report 08)
  - STACK DEEP DIVE: Added complete operational spec for all 5 layers (Reports 18-23):
    scales (5 zoom levels), channels (6 CSS groups), multi-coherence (6 rules),
    anti-scale (15 gates), fractal (coherence grid), stack integration (prism model)
  - CONTENT-FORM: Updated Risk 11 with 7 content properties predicting PA-05 (Report 09)
  - SUCCESS BAR: PA-05 >= 3.5 AND Tier 5 >= 6/8 (was PA-05 >= 3.5 alone, Report 08)
  - ANTI-CONDITIONS: Added 14 suppressors (5 ABSOLUTE, 9 CONTEXTUAL), 4 chains,
    Fat Core neutralization analysis (Report 05)
  - ALWAYS FLAGSHIP: Added simplification audit (~220 lines removed, 6 decisions
    eliminated, 0 added, Report 15)
  - CONTRARIAN: Added 5 challenges + 8 survived findings + embarrassingly simple
    alternative to Master Synthesis Verdict (Reports 11, 16, 17)
  - EXPERIMENTS: Renamed A→E, added conventions brief draft as input, content
    heterogeneity note, cognitive mode target, Tier 5 to decision gate,
    dispositional variant option (Reports 09, 16, 17)
  - SOURCE: 22 reports from flagship-44-recipe team (01-10, 11, 13-23)
- v2: Applied compositional-intelligence extraction reports (27, 28, 29). Changes:
  - GATE: 3-TIER ENFORCEMENT MODEL added (Tier 1 programmatic / Tier 2 deliverable / Tier 3 behavioral)
  - GATE: Full 21-gate registry (15 Tier 1 + 4 Tier 2 + 2 Tier 3), up from 15+2+unspecified
  - GATE: 4 gates PROMOTED from Tier 3 to Tier 1/2 (handoff validation, fractal consistency, landmark completeness, cascade value table)
  - GATE: YAML gate definition schema v1 added (gate_id, stage, trigger, enforcement, require, fail_action, fail_recipe)
  - GATE: Phase lock mechanism detailed (orchestrator controls builder progression, max 2 re-runs per phase gate)
  - GATE: Gate cascading architecture (later gates reference earlier gate outputs)
  - GATE: Fix recipe structured format (measured values, specific CSS, alternatives, reference files)
  - WAVE 0: Structured TC output (`_build-plan.yaml`) as HIGHEST-LEVERAGE single change
  - WAVE 0: Two-Layer Recipe Architecture (Layer A template ~300 lines + Layer B instance ~200-400 lines)
  - WAVE 0: Scale-organized creative phases (Phases 3-6 by SCALE not by CSS property)
  - WAVE 0: BECAUSE clauses at every recipe decision point
  - WAVE 1: Phase lock protocol (orchestrator runs gate subsets between phases, 5 checkpoint gates)
  - WAVE 1: 47 architectural recommendations (A-01 through A-47) integrated: 16 BLOCKING, 22 SIGNIFICANT, 6 ACKNOWLEDGED
  - WAVE 3: Structured fix recipe JSON format with measured values + suggested CSS + alternatives
  - FAT CORE: Conventions brief expanded to ~200-250 lines (was ~170) with 10 sections
  - FAT CORE: Multi-coherence binding rules (~25 lines) — FLAGSHIP ADDITION
  - FAT CORE: Fractal echo requirements (~20 lines) — FLAGSHIP ADDITION
  - FAT CORE: Compositional memory protocol (~30 lines) — FLAGSHIP ADDITION, prevents drift during long builds
  - FAT CORE: Self-generated transition table + fractal echo table (INHERENT, not received from planner)
  - FAT CORE: 4 of 8 bridging artifacts needed, 4 eliminated (no handoff = no bridging)
  - FAT CORE: FORMAT > VOLUME principle (SPECIFICITY > LENGTH, CSS-as-intelligence)
  - PROPAGATION: TC outputs CSS snippets alongside prose (intelligence survival ~35% → ~75%)
  - PROPAGATION: Build plan as structured YAML + CSS snippets (~80% survival)
  - PROPAGATION: Anti-scale model as 4-line preamble in every builder-read file
  - ARCHITECTURE: Recipe restructuring from property-first to scale-first (Phase 3-6)
  - ARCHITECTURE: Anti-scale model operationalized via 3 proxies (isomorphism, rejection log, mass distribution)
  - ARCHITECTURE: Fractal self-similarity 3-layer defense (echo table, phase cross-refs, gate extension)
  - BOUNDARY: Tier 2 deliverable gates make fractal consistency and cascade value table enforceable
  - BOUNDARY: Handoff validation promoted from Tier 3 to Tier 1 via structured `_build-plan.yaml`
  - COMPARISON: Updated Fat Core conventions brief size from ~170 to ~200-250 lines
  - SOURCE: Reports 27 (47 architectural recs), 28 (YAML gate extraction), 29 (propagation solutions)
- v1: Applied findings from 22 fat-core-capability reports (01-26). Changes:
  - GATE: SC-09 now has component-texture alternative (CD-006 fails zone-level 15 RGB but passes via component richness)
  - GATE: SC-13B added (channel shift direction coherence, ADVISORY, ~50% confidence)
  - GATE: SC-16 added (monotonic property progression, ADVISORY, ~80% confidence)
  - GATE: Updated gate coverage annotation: 15 gates cover ~26% of compositional quality, 65% inherently un-gateable
  - GATE: Flagged 6 Middle-calibrated thresholds that need Flagship-tier parameterization
  - CONVENTIONS BRIEF: Expanded to ~170 lines with Options A+C+E (compositional principles 30 lines + conviction card 20 lines + self-check protocol 25 lines)
  - CONVENTIONS BRIEF: Changed tone from CONSTRAINT LIST to WORLD DESCRIPTION (80% specification, 20% constraint)
  - EXPERIMENT: Added ANNOTATED RECIPE as 6th instruction format option (~180 lines, Report 11)
  - EXPERIMENT: Corrected Middle recipe from "100 lines" to "675-line plan" with Opus planner doing all compositional work (Report 04)
  - EXPERIMENT: Raised success criterion from PA-05 >= 3.0 to >= 3.5 for Flagship (Report 23)
  - EXPERIMENT: Removed early-termination fast path -- ALL experiments must run for Flagship (Report 23)
  - EXPERIMENT: Added divergent exploration experiment (3 Opus builders, parallel) from Report 22
  - EXPERIMENT: Added creative revision loop as structural addition (critique + revision cycle, Report 22)
  - FAT CORE: Enhanced with A+C+E (compositional principles + conviction card + self-check), total brief ~170 lines
  - FAT CORE: Added trimmed reference file recommendation (2,645 -> 1,574 lines, Report 10)
  - FAT CORE: Added 75-85% confidence verdict for Flagship complexity handling (Report 20)
  - FAT CORE: Added soft mechanism ceiling at ~16 (beyond 16 = diminishing returns, Report 20)
  - ARCHITECTURE: Added 5 Flagship capabilities that Middle lacks (Report 18)
  - ARCHITECTURE: Added 12-dimension Flagship 4/4 specification (Report 19)
  - ARCHITECTURE: Added cognitive load analysis -- output volume is NOT the bottleneck, input instruction volume IS (Report 20)
  - ARCHITECTURE: Added phased revelation + structured artifacts as routing solution (Report 21)
  - ARCHITECTURE: Added no-limits architecture with divergent build + synthesis + critique-revision (Report 22)
  - INTELLIGENCE: Updated heatmap with actual gate coverage percentages (26% total, Report 15)
  - INTELLIGENCE: Added 444-line critical gap specification (Report 09)
  - INTELLIGENCE: Added inverse correlation as prominent finding with N=3 caveat (Reports 14, 23)
  - RISK: Added PA-05 4/4 may be low bar -- Middle auditor called it "B+ effort" (Report 13)
  - RISK: Added content-form resonance as highest-leverage unexamined variable (Report 13)
  - RISK: Added N=1 per configuration -- all findings are hypotheses (Report 13)
  - RISK: Added adversarial thesis as documented counterposition (Report 14)
  - RISK: Added 31 Middle-tier biases identified in architecture (Report 23)
  - RISK: Added TC skill tops out at Ceiling tier, PA-05 cannot distinguish Middle 4/4 from Flagship 4/4 (Report 26)
  - SKILL: Added TC enrichment needs (6 modifications) and PA Tier 5 question set (8 questions) for Flagship (Report 26)
- v0: Initial copy from PV2-PIPELINE-DIAGRAM.md (no changes yet)

**KEY CHANGES FROM PREVIOUS VERSION (based on 50+ investigation + 3 extraction reports):**
- 5-layer compositional intelligence stack made visible at every stage
- Transition Table + Fractal Echo Table as mandatory new artifacts
- TC narrowed to ~660 lines (was 1,878) — planning ONLY, no builder content
- **21 gates across 3 tiers (was 15+2): 15 Tier 1 + 4 Tier 2 + 2 Tier 3**
- **_build-plan.yaml structured TC output — HIGHEST-LEVERAGE single change**
- INHERENT vs BOLTED-ON annotations at every feature
- **4 builder instruction approaches shown (pending experiments) — NEW: Fat Core**
- Intelligence heatmap showing compression loss across pipeline
- **FAT CORE ALTERNATIVE architecture (Reports 31, 94, 29): merge TC + builder**
- **Fat Core conventions brief: 10 sections, ~200-250 lines, hybrid prose+YAML**
- **3-Tier Enforcement Model: Programmatic / Deliverable / Behavioral**
- **4 gates PROMOTED from Tier 3 to Tier 1/2 (enforceable)**
- **YAML gate definition schema v1 — single gates.yaml registry**
- **Phase lock mechanism — orchestrator controls builder progression**
- **Structured fix recipes (JSON: measured values + CSS + alternatives)**
- **Scale-organized creative phases (by SCALE not CSS property type)**
- **Builder input cap at 300 lines (Reports 31, 95): SNR optimization**
- **Phase 6.5 Observation Pause + inter-phase micro-gates (Reports 84, 67, 104)**
- **2D model: Specificity × Freedom (Report 85) replaces 1D checklist→recipe→convention**
- **47 architectural recommendations (A-01 through A-47) from Report 27**
- **FORMAT > VOLUME principle (Report 29): SPECIFICITY > LENGTH**
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
║    Evidence:  50+ Opus agents, 50+ reports, 3 extraction reports (27/28/29),                      ║
║              5 scales, 6 channels, 3 stacks, 7 designs, 4 integrations,                          ║
║              8 metacognitive, 5 structural, 8 adversarial/review, 47 arch recs                   ║
║    Changes:  Fat Core alt, 3-tier gates (21 total), _build-plan.yaml, 10-section                 ║
║              conventions brief (~225 lines), phase lock, gate cascading, structured fixes         ║
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
    GATE COVERAGE:      ~95%       0%         ~15%       ~35%       0%
    (Report 15)         ──── 15 gates cover ~26% of compositional quality ────
                        ──── 65% is inherently un-gateable (judgment domain) ──

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

    THE 444-LINE GAP (Report 09):
    Builder receives ~4% of total intelligence. 444 lines of critical
    compositional knowledge (scales, channels, multi-coherence, anti-scale)
    exist in research + TC but NEVER reach the CSS-writing agent.

    THE FIXES (from Reports 83, 68, 74, 27, 28, 29):
    - Fractal Echo Table makes L2 (scales) cross the boundary → [###..]
    - Transition Table makes L3 (channels) cross the boundary → [####.]
    - Multi-coherence binding in transition table makes L4 cross → [###..]
    - Anti-scale model: 3 PROXIES (isomorphism, rejection log, mass check)
      at build level, but ABSENT at evaluative level (L5 = JUDGMENT)
    - _build-plan.yaml makes handoff gate PROGRAMMATIC (Tier 1, not Tier 3)
    - CSS snippets in TC output: intelligence survival ~35% → ~75-85%

    THE PROPAGATION PRINCIPLE (Report 29 — FORMAT > VOLUME):
    SPECIFICITY > LENGTH. 100 specific lines beat 963 abstract lines.
    CSS-as-intelligence: code is LOSSLESS, prose is CATASTROPHICALLY LOSSY.
    Fidelity hierarchy: CSS > HTML > YAML > prose+code > prose > abstract.
    The inverse-quality-with-input correlation is actually
    INVERSE-QUALITY-WITH-ABSTRACTION. More SPECIFIC material helps.
    More ABSTRACT material hurts.


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
    │  SIMPLIFICATION AUDIT (Report 15):                                    │
    │  ALWAYS FLAGSHIP removes ~220 lines tier-conditional from TC skill   │
    │  (11.4%), ~15 lines from PA skill, ~15 lines from CLAUDE.md.        │
    │  Eliminates 6 decisions (which tier? skip phases? calibrate gates?). │
    │  Adds 0 decisions. Pipeline becomes a straight line.                  │
    │  The tier model's content was always DESCRIBING Flagship while       │
    │  routing most pages AWAY from it. Now: maximum intensity, always.    │
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
                                    │  TC outputs 4 artifacts:     │
                                    │  1. _build-recipe.md         │
                                    │  2. _build-plan.yaml (NEW)   │
                                    │  3. Transition Table (YAML)  │
                                    │  4. Fractal Echo Table       │
                                    └──────────────────────────────┘

    ┌─────────────────────────────────────────────────────────────────────────┐
    │  STRUCTURED TC OUTPUT: _build-plan.yaml (Report 28 — HIGHEST-LEVERAGE) │
    │                                                                        │
    │  The SINGLE HIGHEST-LEVERAGE change from the compositional-intelligence│
    │  corpus. TC outputs machine-parseable YAML alongside prose:            │
    │                                                                        │
    │  ```yaml                                                               │
    │  # _build-plan.yaml (TC planner output, machine-parseable)             │
    │  zone_count: 4                                                         │
    │  zones:                                                                │
    │    - id: intro                                                         │
    │      background: "#fefcf3"                                             │
    │      sections: [overview, context]                                     │
    │    - id: build                                                         │
    │      background: "#f0ebe3"                                             │
    │      sections: [mechanism-analysis, evidence]                          │
    │  bg_deltas:                                                            │
    │    intro_to_build: 17   # >= 15: PASS                                 │
    │  mechanisms:                                                           │
    │    spatial: [progressive-disclosure]                                   │
    │    temporal: [scroll-reveal]                                           │
    │    material: [paper-texture]                                           │
    │    behavioral: [hover-depth]                                           │
    │    relational: [border-weight-gradient]                                │
    │  grid_layouts: [grid-2col, grid-3col]                                 │
    │  transitions: [SMOOTH, BRIDGE, BREATHING]                             │
    │  metaphor:                                                             │
    │    name: "Geological Intentionality"                                   │
    │    structural: true                                                    │
    │  ```                                                                   │
    │                                                                        │
    │  This makes the handoff gate FULLY PROGRAMMATIC: orchestrator parses   │
    │  YAML, validates zone count (2-5), bg deltas (>= 15 RGB), mechanism   │
    │  per-category minimums (5 categories, >= 1 each), transition types     │
    │  (>= 3), grid layouts (>= 2). BEFORE committing 90-150 min builder.   │
    │                                                                        │
    │  PROMOTES handoff validation from Tier 3 (text-parse) to Tier 1       │
    │  (YAML-parse). "YAML-as-Prompt is theater. YAML-as-Schema is real."   │
    │                                                                        │
    │  TWO-LAYER RECIPE ARCHITECTURE (Report 27, A-06 — BLOCKING):          │
    │  Layer A: Recipe Template (~300 lines, permanent) — universal          │
    │    structure, thresholds, soul, self-checks.                           │
    │  Layer B: Build Recipe Instance (~200-400 lines, generated per build   │
    │    by TC) — content-specific zone values, mechanism assignments,       │
    │    transition types, BECAUSE clauses at every decision point.          │
    │  TC generates Layer B by structuring output to MIRROR recipe phases.   │
    │  Builder reads both: template provides structure, instance specificity.│
    │  Eliminates the "mental merge" problem that killed the Flagship.       │
    │                                                                        │
    │  SCALE-ORGANIZED CREATIVE PHASES (Report 27, A-05 — SIGNIFICANT):     │
    │  Phase 3: PAGE SCALE — deploy ALL 6 channels at page level             │
    │    >>> BOUNDARY CHECKPOINT: count shifting channels at zone boundary   │
    │  Phase 4: SECTION SCALE — deploy ALL 6 channels at section level       │
    │    >>> BOUNDARY CHECKPOINT: verify transitions match semantic shifts   │
    │  Phase 5: COMPONENT SCALE — deploy ALL 6 channels at component level   │
    │    >>> FRACTAL CHECKPOINT: does component-scale echo page-scale?       │
    │  Phase 6: CHARACTER SCALE — deploy ALL channels at inline level        │
    │    >>> FRACTAL CHECKPOINT: does character-scale echo component-scale?  │
    │  Phases 0-2 and 7-8 remain unchanged. Each creative phase addresses   │
    │  ONE SCALE across all channels — prevents multi-coherence fragmentation│
    │  where channels are set independently across separate phases.          │
    └─────────────────────────────────────────────────────────────────────────┘

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
    │  2. FOUR OUTPUT ARTIFACTS (Reports 68, 83, 28):                         │
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
    │     d. _build-plan.yaml (Reports 28, 15 — HIGHEST-LEVERAGE):         │
    │        Machine-parseable structured output. Zone count, zone bg hex   │
    │        values, pre-computed bg deltas, mechanisms per category,       │
    │        grid layouts, transition types, metaphor declaration.          │
    │        Handoff gate PARSES this (Tier 1), not text-matches prose.    │
    │        PROMOTES handoff validation from Tier 3 to Tier 1.            │
    │        "YAML-as-Prompt is theater. YAML-as-Schema is real."          │
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
    │  STRUCTURED TC OUTPUT (Report 28 — _build-plan.yaml):                │
    │  Handoff gate PARSES _build-plan.yaml programmatically (Tier 1).     │
    │  No text matching, no prose interpretation. Code validates:            │
    │  zone_count (2-5), bg_deltas (>= 15 all), mechanisms (5 categories, │
    │  >= 1 each), transitions (>= 3 types), grid_layouts (>= 2).         │
    │  PROMOTES handoff from Tier 3 (behavioral) to Tier 1 (programmatic). │
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
    │  ║  D) FAT CORE ★ (Reports 31, 94, 10, 20, 29 — ENHANCED)       ║   │
    │  ║     MERGE TC planner + builder into SINGLE Opus agent       ║   │
    │  ║     Agent reads content directly, plans AND builds in 1 pass║   │
    │  ║     ~200-250 line conventions brief (was 170) — 10 sections:║   │
    │  ║       10 sections: Soul (20) | Thresholds YAML (20) |         ║   │
    │  ║       Anti-scale (5) | Multi-coherence binding (25) |       ║   │
    │  ║       Fractal echo (20) | Compositional memory (30) |      ║   │
    │  ║       Creative authority (20) | Flagship anti-patterns (15) ║   │
    │  ║       | Required deliverables (15) | Process (15)           ║   │
    │  ║       +4 Flagship-specific sections absent from Middle      ║   │
    │  ║       (multi-coherence, fractal, memory protocol, anti-pats)║   │
    │  ║     Brief TONE: WORLD DESCRIPTION not CONSTRAINT LIST       ║   │
    │  ║       (80% specification describing what good looks like,    ║   │
    │  ║        20% constraint for soul/threshold enforcement)        ║   │
    │  ║     FORMAT: Hybrid prose + YAML (Report 29)                 ║   │
    │  ║       YAML for structured data (thresholds, multi-coherence)║   │
    │  ║       Prose for creative principles (anti-scale, authority)  ║   │
    │  ║     NO handoff = NO Boundary 3 compression                  ║   │
    │  ║     3 phase-locked gates (not 15 post-build gates)          ║   │
    │  ║     Same PA shell (9 auditors + weaver)                     ║   │
    │  ║     Fix cycle uses SAME agent (compositional memory)        ║   │
    │  ║     Ceiling: 4/4 possible (CD-006 model = convention)       ║   │
    │  ║     Single Opus CAN handle Flagship: 75-85% confidence      ║   │
    │  ║       (Report 20: output volume NOT bottleneck, input IS)   ║   │
    │  ║     Soft mechanism ceiling: ~16 (beyond = diminishing)      ║   │
    │  ║     Reference files: trimmed 2,645 → 1,574 lines (R10)     ║   │
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
    │  ║                                                              ║   │
    │  ║  F) ANNOTATED RECIPE (Report 11 — NEW)                      ║   │
    │  ║     ~180 lines, RECIPE format with WHY annotations          ║   │
    │  ║     Every CSS instruction has compositional reasoning inline ║   │
    │  ║     Telescope (WHY) + Microscope (HOW) at every line        ║   │
    │  ║     Tests: Does recipe WITH WHY beat recipe without?        ║   │
    │  ║     2D position: HIGH specificity, MODERATE freedom          ║   │
    │  ╚══════════════════════════════════════════════════════════════╝   │
    └─────────────────────────────────────────────────────────────────────┘

    6 EXPERIMENTS TO RESOLVE (Reports 70, 31, 94, 85, 11, 22):

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
    │           ~225-line conventions brief + reference files            │
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
    │   PHASE LOCK MECHANISM ★ NEW (Reports 19, 73, 28):             │
    │   Orchestrator controls builder progression through 5 gates:    │
    │   ┌─────────┬───────────────────┬──────────────────────────┐   │
    │   │ Gate 1  │ HTML Skeleton     │ Landmarks, components,    │   │
    │   │         │                   │ zone containers present   │   │
    │   │ Gate 2  │ Zone Backgrounds  │ bg delta >= 15 RGB at     │   │
    │   │         │                   │ every zone boundary       │   │
    │   │ Gate 3  │ Borders+Transition│ >= 1 border-left, >= 3    │   │
    │   │         │                   │ transition types used      │   │
    │   │ Gate 4  │ Typography Zones  │ font-size delta >= 2px,   │   │
    │   │         │                   │ 3-zone arc present         │   │
    │   │ Gate 5  │ Comprehensive     │ All SC-01 through SC-15   │   │
    │   │         │                   │ + multi-coherence SC-13   │   │
    │   └─────────┴───────────────────┴──────────────────────────┘   │
    │   Protocol: Builder cannot proceed to Phase N+1 until Gate N   │
    │   passes. Max 2 re-runs per phase gate. Max 3 fix cycles on    │
    │   full run. Gate FAILURES generate specific CSS fix recipes     │
    │   (not generic "fix it" — measured values + suggested CSS).     │
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
    │  3-TIER ENFORCEMENT MODEL (Reports 15, 19, 28):                     │
    │  ─────────────────────────────────────────────────────────────────  │
    │  Tier 1: PROGRAMMATIC — code runs check, blocks pipeline           │
    │  Tier 2: DELIVERABLE — builder outputs structured YAML, code       │
    │          validates the YAML (fractal_table, cascade_table, etc.)   │
    │  Tier 3: BEHAVIORAL — agent self-check (honor system)              │
    │                                                                     │
    │  Total: 21 gates (15 Tier 1 + 4 Tier 2 + 2 Tier 3)              │
    │  Up from: 12 T1 + 0 T2 + 6 T3 = 18 gates                        │
    │  4 gates PROMOTED from Tier 3 to Tier 1/2 + 3 new = +7 enforceable│
    │                                                                     │
    │  GATE TRIAGE (Report 08): Not all 21 gates carry equal weight.    │
    │  TIER A: 12 COMPOSITION-CRITICAL (determines if PA worth running):│
    │    SC-09, SC-10, SC-11, SC-13, SC-15, SC-14, SC-01, SC-12,       │
    │    DG-1, DG-2, SC-13B (advisory), SC-16 (advisory).              │
    │  TIER B: 7 IDENTITY ENFORCEMENT (must pass, zero compositional   │
    │    signal): SC-02, SC-03, SC-04, SC-05, SC-06, SC-07, SC-08.    │
    │  TIER C: 2 BEHAVIORAL (honor system, audit trail).               │
    │  Flagship threshold ELEVATIONS (6 gates, Report 08):              │
    │    SC-06: 3→5 landmarks | SC-08: 3→8 component types |           │
    │    SC-11: 2px→3px + 3 zones | SC-12: 2-5→3-5 zones |            │
    │    SC-13: avg>=4/boundary | SC-15: 1→3 distinct borders           │
    │  ─────────────────────────────────────────────────────────────────  │
    │                                                                     │
    │  LAYER 1: PROGRAMMATIC GATES  (Playwright + getComputedStyle)      │
    │  ─────────────────────────────────────────────────────────────────  │
    │                                                                     │
    │  15 binary checks (was 12) + 2 ADVISORY. BLOCKING fail = fix.    │
    │  Advisory gates (SC-13B, SC-16) log warnings, don't block.       │
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
    │  │ SC-09  │  Background delta OR          │  >= 15 RGB adjacent   │  │
    │  │        │  component-texture richness   │  OR >= 5 component    │  │
    │  │        │  (CD-006 path: fails zone RGB │  types per zone       │  │
    │  │        │   but passes via component    │  (Report 07)          │  │
    │  │        │   texture within zones)       │                       │  │
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
    │  ├────────┼──────────────────────────────┼───────────────────────┤  │
    │  │ SC-13B │  Channel shift direction     │  ADVISORY (~50% conf) │  │
    │  │ [ADV]  │  coherence at boundaries     │  Shifts in same       │  │
    │  │        │  (Reports 15, 73)            │  semantic direction   │  │
    │  │ SC-16  │  Monotonic property          │  ADVISORY (~80% conf) │  │
    │  │ [ADV]  │  progression within zones    │  No random CSS jumps  │  │
    │  │        │  (Report 15)                 │  within a zone        │  │
    │  └────────┴──────────────────────────────┴───────────────────────┘  │
    │                                                                     │
    │  WHAT CHANGED (Reports 73, 28):                                      │
    │  - SC-13 checks multi-coherence (L4): at each zone boundary,       │
    │    measures background, font-size, font-weight, letter-spacing,    │
    │    border-left, padding. If < 3 of these shift, FAIL.              │
    │    ~70% confidence (can count shifts but not semantic coherence).  │
    │  - SC-14 catches sub-perceptual CSS waste: the flagship spent      │
    │    22% of CSS (227 lines) on letter-spacing 0.001-0.01em.         │
    │    SC-14 flags any imperceptible values.                            │
    │  - SC-15 catches the flagship's zero-borders problem.              │
    │  - 4 gates PROMOTED from Tier 3 (behavioral) to Tier 1/2:         │
    │    ┌──────────────────────┬───────┬──────────────────────────┐     │
    │    │ Gate                 │ Was→Is│ How Promoted              │     │
    │    ├──────────────────────┼───────┼──────────────────────────┤     │
    │    │ Handoff validation   │ T3→T1 │ Parse _build-plan.yaml   │     │
    │    │ Fractal consistency  │ T3→T2 │ Builder outputs           │     │
    │    │                      │       │ fractal_table.yaml       │     │
    │    │ Landmark completeness│ T3→T1 │ DOM query header/main/   │     │
    │    │                      │       │ footer (already possible) │     │
    │    │ Cascade value table  │ T3→T2 │ Builder outputs           │     │
    │    │                      │       │ cascade_table.yaml       │     │
    │    └──────────────────────┴───────┴──────────────────────────┘     │
    │                                                                     │
    │  INTELLIGENCE AT THIS STAGE:                                        │
    │  L1: FULL (SC-01 through SC-12 cover all thresholds)              │
    │  L2: ABSENT* (no gate checks scale coverage yet)                   │
    │  L3: MINIMAL (SC-09 bg, SC-11 typography)                          │
    │  L4: NEW — SC-13 checks channel shift count                        │
    │  L5: ABSENT (judgment domain — PA handles this)                    │
    │  * SC-13B (scale coverage) identified as needed but not designed   │
    │                                                                     │
    │  MIDDLE-CALIBRATED THRESHOLDS (Report 23 — 31 biases identified): │
    │  These gates use Middle-tier thresholds. Flagship may need higher:│
    │  - SC-06: ARIA landmarks >= 3 → Flagship: >= 5                   │
    │  - SC-08: Component classes >= 3 → Flagship: >= 8 types          │
    │  - SC-11: Typography delta >= 2px → Flagship: >= 3px, 3+ zones  │
    │  - SC-15: Border presence >= 1 → Flagship: >= 3 distinct borders │
    │  - SC-13: Channel shift >= 3 → Flagship: avg >= 4 per boundary  │
    │  - SC-12: Zone count 2-5 → Flagship: 3-5 (minimum 3)            │
    │  ⚠ Current thresholds are FLOOR. Flagship experiments should     │
    │  test higher values and calibrate based on PA-05 correlation.    │
    │                                                                     │
    │  LAYER 1B: TIER 2 DELIVERABLE GATES (Reports 15, 28 — NEW):         │
    │  ─────────────────────────────────────────────────────────────────  │
    │  Builder outputs structured YAML alongside HTML. Code validates.   │
    │                                                                     │
    │  ┌────────────┬────────────────────────┬─────────────────────────┐ │
    │  │ Gate       │ Builder Deliverable     │ Code Validates           │ │
    │  ├────────────┼────────────────────────┼─────────────────────────┤ │
    │  │ DG-1       │ fractal_table.yaml     │ 5 rows present, pattern │ │
    │  │ (Fractal)  │ (5-scale coverage with │ direction consistent,    │ │
    │  │            │ CSS evidence per scale) │ CSS evidence non-empty  │ │
    │  │ DG-2       │ cascade_table.yaml     │ Computed CSS at every    │ │
    │  │ (Cascade)  │ (computed CSS at every  │ boundary, cross-validate │ │
    │  │            │ zone boundary)          │ vs SC-13 measured values │ │
    │  │ DG-3       │ landmark_table.yaml    │ header/main/footer with │ │
    │  │ (Landmark) │ (ARIA landmark mapping) │ selector evidence       │ │
    │  │ DG-4       │ _build-plan.yaml       │ Schema validation: zone  │ │
    │  │ (Handoff)  │ (TC structured output)  │ count, bg deltas, mechs │ │
    │  └────────────┴────────────────────────┴─────────────────────────┘ │
    │                                                                     │
    │  GATE CASCADING: Later gates reference earlier gate outputs.        │
    │  DG-2 (cascade) cross-validates AGAINST SC-13 (multi-coherence).  │
    │  SC-13 measures ACTUAL computed values; DG-2 checks builder's     │
    │  CLAIMED values match. Discrepancy > 5 RGB / 1px / 0.01em = FAIL.│
    │                                                                     │
    │  YAML GATE DEFINITION SCHEMA v1 (Report 28):                       │
    │  Single `gates.yaml` registry (~200 lines). Gate runner reads      │
    │  dynamically. Adding gate = adding YAML block. Sunsetting =        │
    │  removing block. No scattered thresholds.                           │
    │  Schema per gate: gate_id, stage, trigger, enforcement (tier),     │
    │  require (check/method/selector/threshold/unit), fail_action        │
    │  (block_and_recipe | block_and_return | block_and_escalate),       │
    │  fail_recipe (instruction + css_example + reference_file),          │
    │  metadata (provenance, confidence, sunset).                         │
    │                                                                     │
    │  LAYER 1C: TIER 3 BEHAVIORAL GATES (2 remaining — CANNOT PROMOTE): │
    │  ─────────────────────────────────────────────────────────────────  │
    │  ┌─────────────────────────┬────────────────────────────────────┐  │
    │  │ Metaphor independence   │ "Did the agent derive independently?"│  │
    │  │                         │ Fundamentally subjective. Tier 3    │  │
    │  │                         │ attestation + audit trail.          │  │
    │  │ Metaphor structural     │ "Does metaphor suggest specific CSS?"│  │
    │  │                         │ Requires semantic judgment. Fresh-   │  │
    │  │                         │ eyes Opus agent (Wave 0.5) handles. │  │
    │  └─────────────────────────┴────────────────────────────────────┘  │
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
    │  GATE-GENERATED FIX RECIPES (Reports 73, 28):                         │
    │  When SC-09 fails with "zone 1-2 delta = 8 RGB", the gate runner    │
    │  now outputs a SPECIFIC CSS fix recipe:                               │
    │    "FIX: Change .zone-2 background from #FAF5ED to #F0EBE3           │
    │     (delta increases from 8 to 19 RGB points)"                        │
    │  The builder receives EXACT CSS, not generic instructions.            │
    │                                                                        │
    │  STRUCTURED FIX RECIPE FORMAT (Report 28 — _gate-results.json):      │
    │  ```json                                                               │
    │  {                                                                     │
    │    "gate": "SC-09",                                                    │
    │    "status": "FAIL",                                                   │
    │    "measured": { "zone1_bg": "#FAF5ED", "zone2_bg": "#F9F3EA",        │
    │                  "delta_rgb": 8 },                                     │
    │    "threshold": { "min_delta": 15 },                                   │
    │    "fix": {                                                            │
    │      "instruction": "Darken zone 2 background",                       │
    │      "css": ".zone-2 { background: #F0EBE3; }",                      │
    │      "new_delta": 19,                                                  │
    │      "alternative": ".zone-2 { background: #EDE5D9; } /* delta=24 */",│
    │      "reference": "tokens.css line 12"                                 │
    │    }                                                                   │
    │  }                                                                     │
    │  ```                                                                   │
    │  Every gate failure includes: measured values, threshold, specific     │
    │  CSS fix, alternative fix, and reference file. Builder receives        │
    │  ACTIONABLE structured data, not prose.                                │
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

  5 NEW FILES (estimated ~1,550 lines total):

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
  design-system/compositional-core/gate-runner.js ........ ~440 lines
  │  15 Tier 1 gates (SC-01 through SC-15) via Playwright.
  │  4 Tier 2 deliverable gates (DG-1 through DG-4) via YAML parse.
  │  getComputedStyle + DOM query + file parse.
  │  Gate-generated fix recipes (structured JSON with CSS).
  │  Phase-locked enforcement (5 checkpoint gates during build).
  │  70/30 boundary: catches 70% programmatically, 30% needs PA.
  │
  design-system/compositional-core/gates.yaml ............ ~200 lines [NEW]
     Single registry of ALL gate definitions. Gate runner reads dynamically.
     Adding gate = adding YAML block. Sunsetting = removing block.
     Schema per gate: gate_id, stage, trigger, enforcement (tier),
     require (check/method/selector/threshold/unit), fail_action,
     fail_recipe (instruction + css_example + reference_file),
     metadata (provenance, confidence, sunset).
     No scattered thresholds — ONE canonical source of truth.

  EDITS TO EXISTING FILES:

  TC SKILL.md ......... 1,933 → ~660 lines (-66%)
  PA SKILL.md ......... Add perception thresholds at 108px
  CLAUDE.md ........... Opus builder unconditional, full catalog access
  semantic-rules.md ... S-09 stacking at 108px
  tokens.css .......... S-09 stacking at 108px

  TOTAL: ~1,550 new lines + ~1,270 lines removed from TC = net ~280 lines added


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
  │  B3: TC → _build-recipe.md + _build-plan.yaml  CRITICAL FIX ★★★     │
  │      WAS: 20:1 compression, prose manifest, ~35% intelligence         │
  │      NOW: Structured YAML + telescope comments + transition table     │
  │      NEW: _build-plan.yaml (machine-parseable, Tier 1 gate input)    │
  │      FIX: Transition table changes format from prose to YAML+CSS.    │
  │      FIX: TC outputs CSS snippets alongside prose (Report 27, A-26). │
  │      Intelligence survival: ~35% → ~75-85% (code path, Report 29)   │
  │      THIS IS THE SINGLE HIGHEST-LEVERAGE FIX IN THE ENTIRE PIPELINE. │
  │                                                                         │
  │  B4: Build plan → Handoff Gate ............... NECESSARY (enriched)    │
  │      WAS: 5 binary checks (thresholds only), Tier 3 text-parse       │
  │      NOW: 8 checks (+ fractal echo, transition table, channel map)   │
  │      NEW: _build-plan.yaml PROMOTES gate from Tier 3 to Tier 1       │
  │      (code PARSES YAML, not text-matches prose)                       │
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
  │      WAS: 12 binary checks (Tier 1 only)                              │
  │      NOW: 21 gates across 3 tiers: 15 T1 + 4 T2 + 2 T3             │
  │      +3 new (SC-13/14/15) + 4 promoted from T3 to T1/T2             │
  │      Tier 2 validates builder deliverables (fractal_table.yaml,      │
  │      cascade_table.yaml). Gate cascading: DG-2 cross-validates SC-13.│
  │      Catches the flagship's 3 missing failures + enforces artifacts. │
  │                                                                         │
  │  B8: HTML → PA Auditors .................... NECESSARY (unchanged)     │
  │      Screenshot pre-capture → 9 fresh-eyes auditors. Zero context.   │
  │      Correctly isolated: PA evaluates perception, not compliance.     │
  │                                                                         │
  │  B9: PA → Fix Cycle ........................ CONSTRUCTIVE (fix)        │
  │      WAS: Generic "top-3 issues" as prose                             │
  │      NOW: Gate-generated SPECIFIC CSS fix recipes in structured JSON  │
  │      (measured values + threshold + specific CSS + alternatives)      │
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
  Evidence: Middle (675-line plan, Opus planner did compositional work → 4/4).
  Flagship (530 lines → 1.5/4). NOTE: Middle's "100 lines" was builder INPUT;
  the Opus PLANNER produced a 675-line plan (Report 04). Inverse correlation
  holds for builder input volume, but N=3 with confounded variables.
  Remediation (300 lines → 2.5/4). Pattern: quality INVERSELY correlates
  with builder input volume, sharp dropoff above ~300 lines.

  THE FAT CORE ARCHITECTURE (Reports 94, 29): "One Artist, Many Critics"

  ┌─────────────────────────────────────────────────────────────────────┐
  │                                                                     │
  │  USER: /build-page content.md                                      │
  │         │                                                           │
  │         ▼                                                           │
  │  ORCHESTRATOR (thin, ~250 lines, mechanical routing only)          │
  │         │                                                           │
  │         ├── Spawns ONE Opus CORE AGENT                             │
  │         │   (Plans AND builds in one pass — NO Boundary 3)         │
  │         │   Reads: content.md + ~200-250 line conventions brief    │
  │         │   + reference files (tokens, prohibitions, catalog)      │
  │         │   Phase A: Understand content (10-20 min)                │
  │         │   Phase B: Plan — SELF-GENERATE transition table +       │
  │         │            fractal echo table in build log (10-20 min)   │
  │         │   Phase C: Build HTML+CSS, consulting OWN tables         │
  │         │            for multi-coherence navigation (60-120 min)   │
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
  │  BRIDGING TISSUE (Report 29 — what Fat Core keeps/eliminates):     │
  │  ┌──────────────────────────────┬──────────┬──────────────────────┐│
  │  │ Linear Pipeline Artifact     │ Needed?  │ Fat Core Equivalent  ││
  │  ├──────────────────────────────┼──────────┼──────────────────────┤│
  │  │ _build-recipe.md (TC output) │ NO       │ Agent plans internally││
  │  │ _fix-instructions.md         │ NO       │ Same agent fixes     ││
  │  │ operational-recipe-template  │ ADAPTED  │ Conventions brief    ││
  │  │ _cascade-value-table.md      │ YES      │ Self-verification    ││
  │  │ _gate-results.json           │ YES      │ Gate runner output   ││
  │  │ _pa-report.md (enhanced)     │ YES      │ PA shell unchanged   ││
  │  │ _build-log.md (enhanced)     │ YES      │ Reasoning trace      ││
  │  │ Per-agent briefs (4 types)   │ 2 of 4   │ Core conventions +   ││
  │  │                              │          │ PA auditor brief     ││
  │  └──────────────────────────────┴──────────┴──────────────────────┘│
  │  Net: Fat Core needs 4 of 8 artifacts. Eliminates 4 inter-agent   │
  │  bridging artifacts. Keeps 4 verification artifacts.               │
  │                                                                     │
  └─────────────────────────────────────────────────────────────────────┘

  COMPARISON: Linear Pipeline vs Fat Core

  ┌────────────────────┬────────────────────────┬────────────────────────┐
  │    DIMENSION       │    LINEAR PIPELINE     │    FAT CORE            │
  ├────────────────────┼────────────────────────┼────────────────────────┤
  │ Agent count        │ 12-14                  │ 12 (same PA shell)     │
  │ Boundaries         │ 11 (4 destructive)     │ 7 (0 destructive)      │
  │ Builder input      │ 1,300 lines (8 files)  │ Content + ~200-250 ln  │
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
  - Single Opus CAN handle Flagship complexity: 75-85% (Report 20)
  - Output volume not the bottleneck — input instruction volume IS
  - Build Flagship DIRECTLY, not iteratively from Middle (Report 20)

  WHY FAT CORE MIGHT FAIL:
  - Core agent holds 2,500-4,000 lines. Context degradation risk.
  - Self-assessment bias (can't catch own bad metaphors)
  - No intermediate planning review (planner and builder are same agent)
  - Mitigation: Option A (fresh-eyes metaphor validator, +5-10 min)
  - N=0. Must EXPERIMENT before adopting.
  - CAVEAT (Report 04): Middle's "100-line input" was builder input;
    Opus PLANNER produced 675-line plan. The inverse correlation is
    between builder INSTRUCTION volume and quality, with N=3 and
    confounded variables (model, content, prompt design all varied).

  FLAGSHIP CONVENTIONS BRIEF STRUCTURE (Report 29 — ~200-250 lines, 10 sections):

  ┌─────────────────────────────────────────────────────────────────────┐
  │                                                                     │
  │  Section 1: IDENTITY (SOUL) [~20 lines]                            │
  │    border-radius: 0, box-shadow: none, no #000/#FFF, no gradients  │
  │    Container: 940-960px, font trinity, 4px spacing base unit       │
  │    (Same for Middle and Flagship — identity is universal)          │
  │                                                                     │
  │  Section 2: PERCEPTION THRESHOLDS [~20 lines, YAML block]          │
  │    background_delta: >= 15 RGB, font_size_delta: >= 2px,           │
  │    letter_spacing_delta: >= 0.03em, stacked_gap_max: <= 108px,     │
  │    multi_coherence: >= 3 channels shift at every zone boundary,    │
  │    border_presence: >= 1 structural border-left per zone,          │
  │    component_adoption: >= 10 families, mechanism_span: >= 4/5 cats │
  │    (Flagship thresholds HIGHER than Middle — see Report 23)        │
  │                                                                     │
  │  Section 3: ANTI-SCALE MODEL [~5 lines]                            │
  │    RICHNESS = semantic density x restraint x spatial confidence     │
  │    density = mechanisms per zone (not total count)                  │
  │    restraint = unused CSS budget (what you DIDN'T add)             │
  │    confidence = whitespace-to-content ratio (breathing room)       │
  │    (4 lines, near-zero cost, shared evaluative framework)          │
  │                                                                     │
  │  Section 4: MULTI-COHERENCE BINDING [~25 lines] ★ FLAGSHIP ONLY   │
  │    6 CSS channels: chromatic, typographic, spatial, structural,    │
  │    behavioral, material. >= 3 shift at every zone boundary.        │
  │    Shifts must be in SAME SEMANTIC DIRECTION.                      │
  │    "deeper = denser = darker = heavier" at EVERY boundary.         │
  │    NOT: bg darkens but spacing increases (contradictory).          │
  │    (Middle lacks this section — it's the 3/4→4/4 bridge)          │
  │                                                                     │
  │  Section 5: FRACTAL ECHO [~20 lines] ★ FLAGSHIP ONLY              │
  │    Pattern must appear at ALL 5 scales: Nav|Page|Section|Comp|Char │
  │    BEFORE writing CSS: produce FRACTAL ECHO TABLE (self-generated) │
  │    Pattern direction SAME at all 5 rows. If inconsistent: fix or   │
  │    abandon metaphor.                                                │
  │    (Middle achieves 2-3 scales. Flagship requires all 5.)          │
  │                                                                     │
  │  Section 6: COMPOSITIONAL MEMORY PROTOCOL [~30 lines] ★ FLAG ONLY │
  │    At every ZONE BOUNDARY: RECALL coherence direction, CHECK >= 3  │
  │    channels shifting, VERIFY same semantic direction, LOG in CSS.  │
  │    At MIDPOINT of build: PAUSE, render, scroll, assess density arc │
  │    + metaphor structural integrity + weakest section.              │
  │    At every 5TH MECHANISM: count by category (S/T/M/B/R), deploy  │
  │    to empty categories, check for over-saturation.                 │
  │    (Prevents compositional drift during 60-120 min Flagship builds)│
  │                                                                     │
  │  Section 7: CREATIVE AUTHORITY [~20 lines]                          │
  │    Override ANY non-soul value with logged compositional reasoning. │
  │    Soul values LOCKED. Everything else is SUGGESTION to improve.   │
  │    PROVIDED: no soul violations, no threshold violations,          │
  │    LOG every override (what, from, to, WHY), maintain coherence.   │
  │                                                                     │
  │  Section 8: FLAGSHIP ANTI-PATTERNS [~15 lines] ★ FLAGSHIP ONLY    │
  │    Sub-perceptual CSS (letter-spacing < 0.02em = invisible)        │
  │    Uniform typography (all 16px/400 = FLAT)                        │
  │    Imperceptible backgrounds (1-8 RGB delta = same color)          │
  │    Whitespace voids (> 108px stacked gap)                          │
  │    Zero borders (need structural border-left)                      │
  │    Announced-not-structural metaphor (decoration, not structure)   │
  │    (All observed in PA-05 1.5/4 failure — specific to Flagship)   │
  │                                                                     │
  │  Section 9: REQUIRED DELIVERABLES [~15 lines]                       │
  │    1. output.html (the page)                                       │
  │    2. _build-log.md: transition table (BEFORE), fractal echo       │
  │       table (BEFORE), override log (DURING), midpoint observation  │
  │       (DURING), final self-assessment (AFTER)                      │
  │    3. _cascade-value-table.md (computed CSS at every boundary)     │
  │                                                                     │
  │  Section 10: PROCESS [~15 lines]                                    │
  │    Phase A: Read content. Identify zones, tensions, metaphor.      │
  │    Phase B: Plan. Write transition + fractal echo tables.          │
  │    Phase C: Build HTML+CSS. Consult reference files as needed.     │
  │      After skeleton: verify landmarks, skip link, components.      │
  │      After backgrounds: verify >= 15 RGB delta.                    │
  │      After borders: verify border-left + distinct values.          │
  │      After typography: verify >= 2px delta between zones.          │
  │    Phase D: Self-verify. Cascade value table. Scroll + assess.     │
  │                                                                     │
  │  TOTAL: ~200-250 lines (~100 lines Flagship-specific additions)    │
  │                                                                     │
  │  KEY FORMAT DECISIONS (Report 29):                                  │
  │  - YAML blocks for structured data (thresholds, multi-coherence)  │
  │  - Prose for creative principles (anti-scale, creative authority)  │
  │  - HYBRID format matches proven remediation pattern                 │
  │  - Convention-style (WHAT outcomes + WHY), not recipe (HOW steps) │
  │  - Self-generated tables (transition + fractal echo) = INHERENT   │
  │  - FORMAT > VOLUME: 200 specific lines beat 963 abstract lines    │
  │  - SPECIFICITY > LENGTH: CSS-as-intelligence, not prose-about-CSS │
  │                                                                     │
  │  FAT CORE INPUT SET (Report 29):                                    │
  │  ┌──────────────────────────────┬────────┬─────────────────────────┐│
  │  │ File                         │ Lines  │ When Consulted          ││
  │  ├──────────────────────────────┼────────┼─────────────────────────┤│
  │  │ Content markdown             │ varies │ Phase A (understanding) ││
  │  │ Conventions brief (above)    │ ~225   │ Always (PRIMARY)        ││
  │  │ tokens.css                   │ 174    │ Phase C (building)      ││
  │  │ prohibitions.md              │ 353    │ Phase C (building)      ││
  │  │ mechanism-catalog.md         │ ~870   │ Phase B + C             ││
  │  │ merged-components.css        │ ~500   │ Phase C (building)      ││
  │  ├──────────────────────────────┼────────┼─────────────────────────┤│
  │  │ TOTAL (excl. content)        │ ~2,120 │ ~225 PRIMARY + ref      ││
  │  └──────────────────────────────┴────────┴─────────────────────────┘│
  │  Less than linear pipeline (~1,950 lines) because: no operational  │
  │  recipe, no build plan artifact, no transition table artifact      │
  │  (agent generates its own). Reference files identical.             │
  │                                                                     │
  └─────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  ANTI-CONDITIONS — 14 Quality Suppressors (Report 05)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  Quality suppression is an ECOSYSTEM of interacting suppressors.
  Flagship suffered ALL 14 simultaneously. Remediation neutralized 7 → +1.0pt.
  Quality = (Skill x Coupling x Metaphor) / (Active Suppressors)

  5 ABSOLUTE SUPPRESSORS (always kill quality, regardless of context):
  ┌─────┬────────────────────────────────────┬───────────────────────────────┐
  │ ID  │ Suppressor                         │ Remediation Status             │
  ├─────┼────────────────────────────────────┼───────────────────────────────┤
  │ S-01│ CHECKLIST FORMAT (vs recipe)       │ NEUTRALIZED (recipe format)    │
  │ S-02│ PROHIBITION OVERLOAD (55 prohib.)  │ PARTIAL (80/20 spec/guard)     │
  │ S-03│ INVERTED QUALITY ROUTING (CSS      │ NEUTRALIZED (single builder)   │
  │     │  writer never sees rich CSS ref)   │                                │
  │ S-04│ SUB-PERCEPTUAL EMPHASIS (22% CSS   │ NEUTRALIZED (perception gates) │
  │     │  budget on invisible properties)   │                                │
  │ S-05│ ANALYTICAL PIPELINE (building=     │ PARTIAL (still research-       │
  │     │  analyzing, not composing)         │  derived, not content-derived) │
  └─────┴────────────────────────────────────┴───────────────────────────────┘

  9 CONTEXTUAL SUPPRESSORS (depend on other factors):
  S-06: Sonnet for builders (Opus compositional fluency unmeasured)
  S-07: Zero inter-agent messaging (fast but B+ quality)
  S-08: Agent count inflation (more agents = more boundaries = more loss)
  S-09: Stacked gap loophole (individual values pass, total fails)
  S-10: Missing reference files (builder never sees crown jewel CSS)
  S-11: Monotone typography (all 16px/400, zero arc)
  S-12: CSS budget misallocation (227 lines on micro-typography)
  S-13: Zero borders (no structural vocabulary)
  S-14: Uniform content register (all sections same rhetorical mode)

  4 SUPPRESSOR CHAINS (cascading interactions):
  Chain A: S-01 → S-02 → S-05 (format → tone → mode: checklist triggers
    prohibition focus triggers analytical mode → 1.5/4)
  Chain B: S-03 → S-10 → S-04 (routing → reference → perception: wrong
    agent gets intelligence, CSS-writer works blind → invisible CSS)
  Chain C: S-08 → S-07 → S-06 (count → communication → capability:
    too many agents, none talk, wrong model → diluted quality)
  Chain D: S-11 → S-12 → S-13 → S-09 (typography → budget → borders
    → spacing: uniform type wastes CSS, no structural rhythm, voids)

  FAT CORE + CONVENTIONS BRIEF NEUTRALIZES: S-01 (recipe tone),
  S-02 (80/20 description/constraint), S-03 (single agent sees all),
  S-04 (perception thresholds in brief), S-06 (Opus unconditional),
  S-07 (one agent = no messaging needed), S-08 (12→1 core agent),
  S-10 (full reference file set), S-11 (typography arc in brief).
  STILL ACTIVE: S-05 (analytical pipeline), S-09 (stacking loophole),
  S-14 (content register — content selection problem, not pipeline).


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
  │ type            │                │                │ Recipe/Brief/  │ (~225 lines,   │
  │                 │                │                │ Hybrid/FatCore │ prose+YAML)    │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ Intelligence    │ L1 only        │ L1 only        │ L1-L4 checked  │ L1-L5 possible │
  │ levels          │ (text)         │ (gates)        │ (gates+artif.) │ (one agent)    │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ TC scope        │ Absent         │ 1,878 lines    │ ~660 lines     │ MERGED into    │
  │                 │                │ (plan+build)   │ (planner only) │ core agent     │
  ├─────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
  │ Key artifact    │ None           │ op-recipe      │ Transition Tbl │ Conventions    │
  │                 │                │                │ + Fractal Echo │ Brief ~225 ln  │
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
  COMPOSITIONAL INTELLIGENCE STACK — DEEP DIVE (Reports 18-23)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  The 5-layer hierarchy (Section 1 of this document) gains operational depth
  from 6 deep-dive reports. The stack is a PRISM, not a pipeline — every CSS
  decision participates in all layers simultaneously (Report 23).

  LAYER 2 — 5 SCALES (Report 18):
  ┌────────────────┬────────────┬────────────────────────────────────────────┐
  │ Scale          │ CSS Range  │ Dependency                                 │
  ├────────────────┼────────────┼────────────────────────────────────────────┤
  │ Navigation     │ ~1440px    │ Standalone                                 │
  │ Page           │ ~960px     │ Standalone                                 │
  │ Section        │ ~200-400px │ Depends on Page                            │
  │ Component      │ ~40-100px  │ Depends on Section                         │
  │ Character      │ ~12-20px   │ Depends on Page+Section. OPTIONAL.         │
  └────────────────┴────────────┴────────────────────────────────────────────┘
  KEY FINDING: 2 strong scales > 5 weak scales. Middle at 2 scales = 4/4.
  Flagship at 5 scales = 1.5/4. Build bottom-up: establish Page + Section
  FIRST, add Component, then optionally Character.

  LAYER 3 — 6 CHANNELS (Report 19):
  4 primary: Chromatic | Typographic | Spatial | Structural
  2 enhancement: Behavioral | Material (secondary, after primary established)
  CD-006: avg 3.4 channels/boundary via LAYOUT DIVERSITY (axis rotation).
  Flagship: avg 3.4 via PROPERTY MODULATION (less robust, same count).
  KEY FINDING: Layout diversity (rotating grid patterns) guarantees multi-
  channel shifting as emergent property. Property modulation requires
  explicit per-boundary management. Layout diversity is easier and more robust.

  LAYER 4 — MULTI-COHERENCE (Report 20):
  Multi-coherence = 3+ channels shifting in SAME semantic direction at a
  zone boundary. Define direction BEFORE building: DEEPER = darker bg +
  tighter spacing + heavier borders. LIGHTER = warmer bg + generous spacing.
  0-1 channels = FLAT | 2 = FUNCTIONAL | 3 = DESIGNED | 4-5 = COMPOSED | 6 = FLAGSHIP
  6 operational rules (R-MC-01 through R-MC-06):
    R-MC-01: Name direction in CSS comment at every boundary
    R-MC-02: Count channels before proceeding. If <3, add shifts.
    R-MC-03: All shifts must point SAME direction. Fix contradictions.
    R-MC-04: Transition table is the planning instrument.
    R-MC-05: Vary intensity (not all boundaries equally dramatic).
    R-MC-06: Test with squint test (lean back, 3-foot distance).

  LAYER 5 — ANTI-SCALE MODEL (Report 21):
  Richness = semantic density x restraint x spatial confidence (multiplicative)
  ~70% computable: 15 programmatic gates (SD-01-04, RE-01-05, SC-01-06).
  ~30% requires builder compositional intelligence (perceptual verification).
  NECESSARY but NOT SUFFICIENT for Flagship — also needs D-04 multi-coherence
  and D-13 unified metaphor, which anti-scale alone cannot produce.

  FRACTAL SELF-SIMILARITY (Report 22):
  Structural echo (binary: present/absent) + parametric echo (gradient:
  CSS values modulate by zone). CD-006: 4/5 strong + 1 moderate.
  Flagship: 0/5 strong despite ATTEMPTING all 5 (dependency chain violated).
  Realistic minimum for Flagship: 3/5 strong (Navigation + Page + Component).
  COHERENCE GRID: fractal (vertical, 5 scales) x multi-coherence (horizontal,
  6 channels) = 30-cell grid. Each cell: does this channel express the
  pattern at this scale? Flagship fills >= 60% of cells.

  STACK INTEGRATION (Report 23):
  The stack is a PRISM: every CSS decision participates in ALL 4 layers.
  A `background: #F0EBE3` simultaneously: crosses perception threshold (L1),
  defines section identity at page scale (L2), shifts chromatic channel (L3),
  participates in multi-coherence if other channels co-shift (L4), and
  contributes to semantic density or restraint (L5).
  The conventions brief already encodes 72% of the stack (165/230 lines).
  4 targeted additions needed: 5-line stack preamble, reposition Section 3
  as anti-scale, add restraint column to transition table, 1 worked example.
  WEAVER STACK VERDICT: ENSEMBLE (all layers audible) / CHOIR (layers in
  unison) / SOLO (one layer dominates) / BROKEN (layers contradict).


═══════════════════════════════════════════════════════════════════════════════════════════════════
  FLAGSHIP CAPABILITIES — 5 Things Middle Cannot Do (Report 18)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  Middle 4/4 ≠ Flagship 4/4. These 5 capabilities define the qualitative gap:

  ┌─────────────────────────────────────────────────────────────────────────┐
  │                                                                         │
  │  FC-1: MULTI-CHANNEL SEMANTIC COHERENCE                                │
  │        Multiple CSS channels shifting together at boundaries in the    │
  │        SAME semantic direction (e.g., "deepening" = darker bg +       │
  │        heavier font + tighter spacing simultaneously).                 │
  │        Middle achieves ~2 channels. Flagship requires >= 3, avg >= 4. │
  │                                                                         │
  │  FC-2: METAPHOR-DRIVEN ARCHITECTURE                                   │
  │        Visual structure emerges FROM content metaphor, not applied     │
  │        as decoration. The metaphor must be STRUCTURAL (shapes layout,  │
  │        governs transitions) not ANNOUNCED (label + standard layout).  │
  │        Middle may lack metaphor entirely. Flagship requires structural.│
  │                                                                         │
  │  FC-3: 5-SCALE FRACTAL DEPTH                                          │
  │        The same compositional pattern echoes at all 5 scales:          │
  │        Navigation → Page → Section → Component → Character.           │
  │        Middle achieves 2-3 scales. Flagship requires all 5.           │
  │                                                                         │
  │  FC-4: MULTI-PATTERN ORCHESTRATION                                    │
  │        14+ mechanisms from ALL 5 categories (Spatial, Temporal,        │
  │        Material, Behavioral, Relational) working as an ensemble,      │
  │        not independently. Middle uses 8-10. Flagship >= 14.           │
  │                                                                         │
  │  FC-5: PERCEPTUAL AMPLITUDE MANAGEMENT                                │
  │        Knowing when to be LOUD (large deltas, strong borders) vs      │
  │        QUIET (subtle shifts, negative space). The restraint that      │
  │        makes amplitude meaningful. This is the anti-scale model (L5). │
  │        Middle achieves uniform amplitude. Flagship varies it.          │
  │                                                                         │
  │  IMPLICATION: Fat Core must enable ALL 5. The conventions brief       │
  │  must describe these capabilities as WORLD, not constrain them.       │
  └─────────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  ANTI-SCALE OPERATIONALIZATION — 3 Proxies (Report 27, A-08/09/10)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  The anti-scale model (L5: Richness = semantic density x restraint x spatial
  confidence) has 0% operational encoding despite being the governing principle.
  Three proxies make it actionable without requiring judgment gates:

  ┌─────────────────────────────────────────────────────────────────────────┐
  │                                                                         │
  │  PROXY 1: ISOMORPHISM CONSULTATION (semantic density) — A-08           │
  │  Binary self-test at EVERY recipe phase:                               │
  │  "For each CSS property I just set, can I name the content             │
  │  relationship it encodes? If I cannot, the property is DECORATION —   │
  │  remove it."                                                           │
  │                                                                         │
  │  PROXY 2: MECHANISM REJECTION LOG (restraint) — A-09                   │
  │  Recipe Phase 0: "List 3 mechanisms you will NOT deploy on this page  │
  │  and state why each would be wrong for this content."                  │
  │  For each of 5 categories (S/T/M/B/R): name one mechanism NOT         │
  │  deployed and state why. Restraint as active choice, not absence.     │
  │                                                                         │
  │  PROXY 3: MASS DISTRIBUTION CHECK (spatial confidence) — A-10          │
  │  Recipe Phase 1: map each zone's content mass as % of zone area.      │
  │  Any zone below 30% fill must contain deliberate spatial element      │
  │  (centered heading, deliberate whitespace frame, full-width border).  │
  │  Zone below 30% with no spatial signal = SPATIAL FAILURE.             │
  │  Gate SC-14 enforces this programmatically.                            │
  │                                                                         │
  │  WHEN TO STOP INSTRUCTION (A-12):                                      │
  │  After Phase 6: "STOP CHECK: Review all CSS. For each property:       │
  │  Can you name the content relationship? Is this the MINIMUM CSS?      │
  │  Would the page feel LESS designed if removed? If any NO, REMOVE."    │
  │  Converts additive recipe into subtractive checkpoint.                 │
  │                                                                         │
  │  NET EFFECT: L5 remains judgment-dependent at the EVALUATIVE level     │
  │  but gains 3 operational proxies at the BUILD level. The proxies      │
  │  cannot produce 4/4, but they prevent the specific failures (over-    │
  │  decoration, mechanism hoarding, whitespace voids) that blocked it.   │
  └─────────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  14-DIMENSION FLAGSHIP 4/4 SPECIFICATION (Report 01, updated from Report 19)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  ⚠ CRITICAL HONESTY: Flagship 4/4 has NEVER been achieved. This definition
  is THEORETICAL — derived from the compositional intelligence stack and from
  understanding what existing artifacts LACK. It is the best-informed
  extrapolation, but remains unvalidated until a page passes all gates.
  CONTRARIAN CAVEAT (Report 11): This 14-dimension definition was derived from
  "what CD-006 lacks that a theoretically perfect page would have" — that is
  extrapolation from absence. Challenge 1 (HIGH confidence): the distinction
  between Middle 4/4 and Flagship 4/4 may not exist as a perceptual category.
  It may be a continuous spectrum, not a discrete register. First experiment
  that produces two PA-05 4/4 pages will test whether auditors perceive a
  qualitative register shift or merely "more of the same."

  EVIDENCE STATUS: Each dimension tagged [PROVEN], [EXTRAPOLATED], or
  [THEORETICAL] based on whether any existing artifact demonstrates it.

  ┌──────────────────────────┬──────────────────────────┬────────┬────────┬──────────┐
  │   DIMENSION              │   THRESHOLD (Flagship)   │ CD-006 │Flag1.5 │ Evidence │
  ├──────────────────────────┼──────────────────────────┼────────┼────────┼──────────┤
  │ D-01: Mechanism count    │   >= 14, min 2/category  │  18    │  ~6    │ PROVEN   │
  │ D-02: Zone transitions   │   >= 8, 2+ channels each │  ~7    │  0     │ PROVEN   │
  │ D-03: Channels/boundary  │   >= 3 each, avg >= 4    │  ~4.3  │  ~0.5  │ EXTRAP.  │
  │ D-04: Multi-coherence    │   >= 3 instances          │  ~0-1  │  0     │ THEOR.   │
  │ D-05: Fractal scales     │   All 5 present          │  4.5/5 │  2/5   │ EXTRAP.  │
  │ D-06: CSS lines          │   >= 600, varied          │  ~999  │  ~450  │ PROVEN   │
  │ D-07: Component types    │   >= 8 distinct           │  ~11   │  ~3    │ PROVEN   │
  │ D-08: Designed moments   │   >= 90% viewport cover   │  ~95%  │  ~20%  │ PROVEN   │
  │ D-09: Perceptibility     │   All CSS visually percep │  YES   │  NO    │ PROVEN   │
  │ D-10: Semantic density   │   Content-driven layout   │  HIGH  │  LOW   │ JUDGMENT │
  │ D-11: Restraint          │   Negative space intent   │  HIGH  │  NONE  │ JUDGMENT │
  │ D-12: Axis variety       │   >= 3 attention patterns │  ~4    │  1     │ EXTRAP.  │
  │ D-13: Unified metaphor   │   Structural, governs CSS │  ~0.3  │  0     │ THEOR.   │
  │ D-14: Creative surprise  │   Unexpected-yet-perfect  │  MOD.  │  NONE  │ JUDGMENT │
  └──────────────────────────┴──────────────────────────┴────────┴────────┴──────────┘

  THE TWO REGISTERS OF PA-05 4/4:
  │ Register     │ Mechanisms │ Scales │ Multi-Coh. │ How mechanisms work      │
  │ Middle 4/4   │ 8-12       │ 2      │ 0-1        │ Independently (1 per need)│
  │ Flagship 4/4 │ 14-18      │ 5      │ 3+         │ In concert (same concept) │

  CD-006 passes ~8/14. Flagship 1.5/4 passes ~2/14. Remediation 2.5/4 ~5/14.
  D-04 (multi-coherence) and D-13 (unified metaphor) are THEORETICAL — the
  defining gap between what exists and what Flagship requires.
  D-10, D-11, D-14 are judgment dimensions (PA only). Rest are gateable.
  CONTRARIAN NOTE: CD-006 passes 8/14 despite being called "Ceiling, not
  Flagship" — this reclassification serves a rhetorical purpose. If CD-006
  were "as good as it gets," the Flagship project would be reframed as
  marginal improvement. The first experiment must test whether the gap
  between CD-006 and theoretical Flagship is perceptible or taxonomic.


═══════════════════════════════════════════════════════════════════════════════════════════════════
  47 ARCHITECTURAL RECOMMENDATIONS — Index (Report 27, extracted from 11 reports)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  Source: ephemeral/fat-core-capability/27-comp-intel-extraction.md (562 lines)

  ┌─────────────────────────────────────────────────────────────────────────┐
  │                                                                         │
  │  BLOCKING (16 items — must resolve):                                   │
  │  A-01: TC generates Transition Table (Phase 3.6/4T)                   │
  │  A-02: Handoff gate validates Transition Table                         │
  │  A-03: Builder reads Transition Table as reference                     │
  │  A-04: New gate SC-13 (multi-coherence)                                │
  │  A-06: Two-Layer Recipe (Template + Instance)                          │
  │  A-10: Mass distribution check (spatial confidence)                    │
  │  A-11: New gate SC-14 (mass distribution)                              │
  │  A-13: Fractal Echo Table in build plan                                │
  │  A-16: Transition Table as INPUT to builder                            │
  │  A-17: Per-Phase CSS Values in recipe                                  │
  │  A-26: TC outputs CSS snippets alongside prose                         │
  │  A-27: Build plan as structured YAML + CSS                             │
  │  A-30: TC scope narrowed to Phases 0-3.6                               │
  │  A-31: ALWAYS FLAGSHIP — tier routing removed                          │
  │  A-32: Handoff gate expanded 5→8 checks                                │
  │  A-33: Programmatic gates expanded 12→15                                │
  │  A-37: Phase 3.5 multi-coherence binding                               │
  │  A-38: Semantic Binding Table from TC                                   │
  │                                                                         │
  │  SIGNIFICANT (22 items — should resolve):                              │
  │  A-05: Scale-organized creative phases                                 │
  │  A-07: BECAUSE clauses in recipe instance                              │
  │  A-08: Isomorphism consultation (semantic density proxy)               │
  │  A-09: Mechanism rejection log (restraint proxy)                       │
  │  A-12: "When to STOP" instruction (restraint checkpoint)               │
  │  A-14: Recipe phase cross-refs for fractal                             │
  │  A-15: Gate SC-13 extended for fractal                                 │
  │  A-18 through A-25: Builder visibility format changes                  │
  │  A-28: Single integrated build instruction                             │
  │  A-29: Anti-scale model as 4-line preamble                             │
  │  A-34: Inter-phase micro-gates (4 lightweight Playwright checks)      │
  │  A-35: Gate-generated fix recipes                                      │
  │  A-36: 42 guardrail-playbook pairs in recipe template                  │
  │  A-39: Perception-proportional intensity levels                        │
  │  A-40: Acceleration/deceleration arcs                                  │
  │  A-41: Experiment Branch (Path A vs B)                                 │
  │                                                                         │
  │  ACKNOWLEDGED (6 items — known but unsolved):                          │
  │  A-42: Anti-scale model not operational (may be un-encodable)         │
  │  A-43: Behavioral channel unplanned                                    │
  │  A-44: Material channel phantom (no operational spec)                  │
  │  A-45: Component-level metaphor expression                             │
  │  A-46: Fractal unverifiable programmatically                           │
  │  A-47: Recipe ceiling at 3/4                                           │
  │                                                                         │
  │  CROSS-REPORT CONVERGENCE (5 strongest signals):                       │
  │  1. Transition Table (9/11 reports) — single most referenced artifact  │
  │  2. Multi-coherence is THE quality lever (8/11) — 3/4→4/4 bridge      │
  │  3. FORMAT > VOLUME (7/11) — SPECIFICITY beats LENGTH                  │
  │  4. Recipe-Plan merge (6/11) — eliminate mental merge problem           │
  │  5. Perception thresholds inline (5/11) — at point of use             │
  │                                                                         │
  │  Full details: ephemeral/fat-core-capability/27-comp-intel-extraction.md│
  └─────────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  ROUTING SOLUTION — Phased Revelation (Report 21)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  THE PROBLEM: How does compositional intelligence (L2-L5) reach the agent
  that writes CSS? 6 approaches analyzed. Recommended: PHASED REVELATION.

  ┌─────────────────────────────────────────────────────────────────────────┐
  │                                                                         │
  │  PRINCIPLE: Route LESS intelligence to MORE capable models.            │
  │  Opus doesn't need 530 lines of instruction. It needs the right       │
  │  50-80 lines revealed at the right moment.                             │
  │                                                                         │
  │  ARCHITECTURE: 5×6 Grid + Self-Checks + Propose-Validate              │
  │                                                                         │
  │  Phase A: Content understanding (content.md only, no constraints)     │
  │           Self-check: "What are the 3 core tensions in this content?" │
  │                                                                         │
  │  Phase B: Structural planning (+ soul constraints, 30 lines)          │
  │           Self-check: "What metaphor emerged? Is it STRUCTURAL?"      │
  │                                                                         │
  │  Phase C: CSS composition (+ transition table, mechanism catalog)      │
  │           Self-check: "Can I SEE zone boundaries at arm's length?"    │
  │                                                                         │
  │  Phase D: Self-verification (+ PA questions for self-audit)           │
  │           Self-check: "Does every section earn its visual weight?"    │
  │                                                                         │
  │  TOTAL INPUT AT ANY PHASE: ~80-120 lines (never 530+)                │
  │  TOTAL ACROSS ALL PHASES: ~250-350 lines (same material, sequenced)  │
  │                                                                         │
  │  WHY THIS WORKS: Matches how CD-006's Opus agent actually operated.  │
  │  It read content FIRST, then soul, then built. Not all at once.       │
  └─────────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  NO-LIMITS ARCHITECTURE — Creative Revision for DESIGNED (Report 22)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  KEY INSIGHT: DESIGNED is a PROCESS property, not an artifact property.
  You cannot prescribe it. You can only create conditions for it to emerge.

  ┌─────────────────────────────────────────────────────────────────────────┐
  │                                                                         │
  │  3 COGNITIVE MODES (must be separated, not mixed):                     │
  │                                                                         │
  │  1. CONSTRUCTION: Build from content tensions → visual form            │
  │     (generative, divergent, exploratory)                                │
  │                                                                         │
  │  2. CORRECTION: Fix threshold violations, gate failures                │
  │     (compliance, convergent, mechanical)                                │
  │                                                                         │
  │  3. REVISION: Aesthetic judgment, proportion, surprise                  │
  │     (evaluative, iterative, taste-driven)                              │
  │                                                                         │
  │  Current pipeline does CONSTRUCTION + CORRECTION but NOT REVISION.    │
  │  Revision is what separates COMPOSED (3/4) from DESIGNED (4/4).       │
  │                                                                         │
  │  NO-LIMITS ARCHITECTURE (aspirational, for Flagship 4/4):             │
  │                                                                         │
  │  ┌─────────────────────────────────────────────────────────────────┐   │
  │  │  3 Opus builders (PARALLEL, divergent, different approaches)    │   │
  │  │          ↓                                                       │   │
  │  │  Selection: Best of 3 (PA-05 + gate scores)                    │   │
  │  │          ↓                                                       │   │
  │  │  Synthesis: Merge best elements from 2nd/3rd into winner       │   │
  │  │          ↓                                                       │   │
  │  │  Critique-Revision Loop (1-3 cycles):                           │   │
  │  │    Fresh-eyes Opus CRITIQUES → Builder REVISES (aesthetics)    │   │
  │  │          ↓                                                       │   │
  │  │  Final PA: Mode 4, 9 auditors                                   │   │
  │  └─────────────────────────────────────────────────────────────────┘   │
  │                                                                         │
  │  COST: ~8-12 agents, 4-6 hours, $40-80/page                          │
  │  WHEN: Only for FLAGSHIP tier (5-10% of pages)                         │
  │  WHY: Content-form resonance cannot be prescribed, only discovered.   │
  │  Build Flagship DIRECTLY — do NOT iterate from Middle (Report 20).    │
  │                                                                         │
  │  EXPERIMENT: Add as 4th experiment (EXP D2: Divergent Build).         │
  │  3 Opus + selection + revision vs single Fat Core. Tests whether      │
  │  parallel divergence adds value over single-agent depth.              │
  └─────────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  COGNITIVE LOAD ANALYSIS — Can One Opus Handle Flagship? (Report 20)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  VERDICT: YES, with 75-85% confidence. Key findings:

  ┌─────────────────────────────────────────────────────────────────────────┐
  │                                                                         │
  │  1. OUTPUT VOLUME is NOT the bottleneck.                               │
  │     Opus can produce 1,500+ lines of CSS+HTML in one pass.            │
  │     CD-006 did exactly this. Flagship builder did too (wrong CSS).    │
  │                                                                         │
  │  2. INPUT INSTRUCTION VOLUME IS the bottleneck.                        │
  │     Quality inversely correlates with instruction count.               │
  │     530 lines of "do this, don't do that" → 1.5/4.                   │
  │     ~50 lines of "here's the world" → 39/40.                          │
  │                                                                         │
  │  3. SOFT MECHANISM CEILING at ~16.                                     │
  │     Beyond 16 mechanisms, diminishing returns set in.                  │
  │     Not because Opus can't track more, but because the PAGE           │
  │     can't accommodate more without becoming noisy.                     │
  │     14-16 is the sweet spot for Flagship.                              │
  │                                                                         │
  │  4. BUILD FLAGSHIP DIRECTLY, not iteratively from Middle.             │
  │     Starting from Middle and "upgrading" to Flagship produces         │
  │     Middle-with-extras, not Flagship. The compositional decisions     │
  │     must be Flagship from the start.                                   │
  │                                                                         │
  │  5. MIDPOINT OBSERVATION (not correction) is the key intervention.    │
  │     Render at 50%, scroll, observe. Not "fix problems" but            │
  │     "notice what's emerging." This is Phase 6.5 already in spec.     │
  │                                                                         │
  └─────────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════════════════════════════
  SKILL ENRICHMENT NEEDS FOR FLAGSHIP (Report 26)
═══════════════════════════════════════════════════════════════════════════════════════════════════

  FINDING: Both skills top out at Ceiling tier. Flagship requires enrichment.

  ┌─────────────────────────────────────────────────────────────────────────┐
  │  TENSION-COMPOSITION SKILL (6 modifications needed):                   │
  │                                                                         │
  │  TC-M1: Metaphor blending (combine 2 metaphors for richer form)       │
  │  TC-M2: Channel-scale allocation matrix (which channel at which scale)│
  │  TC-M3: Multi-coherence modes (graduated, alternating, compound)      │
  │  TC-M4: Expanded transition taxonomy (3 types → 6 types)             │
  │         Add: dissolution, crystallization, echo                        │
  │  TC-M5: Negative space as active composition (not just absence)       │
  │  TC-M6: Fractal variation (same pattern, different expression/scale)  │
  │                                                                         │
  │  Without these: TC produces Ceiling-tier plans, not Flagship-tier.    │
  └─────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────────────────┐
  │  PERCEPTUAL-AUDITING SKILL (Tier 5 question set needed):              │
  │                                                                         │
  │  Current PA-05 cannot distinguish Middle 4/4 from Flagship 4/4.       │
  │  Both score "DESIGNED" but qualitative depth differs enormously.       │
  │                                                                         │
  │  8 TIER 5 QUESTIONS (PA-60 through PA-67, Report 08):                 │
  │  PA-60: Can you identify 3+ distinct "design moments" — places where │
  │         the visual treatment does something UNIQUE, not repeated?     │
  │  PA-61: Do different visual properties have independent rhythms,     │
  │         or does everything shift at the same time?                    │
  │  PA-62: Find a transition. Count how many properties change. Are     │
  │         there BOTH dramatic (3+) and quiet (1) transitions?          │
  │  PA-63: Zoom into one component. Does its design mirror the page's   │
  │         overall language at smaller scale? (Fractal coherence)        │
  │  PA-64: Is any section DELIBERATELY plain — making surrounding       │
  │         richness more noticeable? (Restraint as expression)           │
  │  PA-65: If this page were music, is it: (a) single instrument,      │
  │         (b) choir in unison, (c) ensemble with different parts?      │
  │  PA-66: Are different empty spaces between sections the same         │
  │         "flavor" of emptiness, or do gaps feel different?             │
  │  PA-67: Does the page feel inventive — not just well-executed, but   │
  │         doing something you have not seen before? What specifically?  │
  │                                                                         │
  │  SCORING (Report 08):                                                   │
  │  6-8/8 YES = Flagship COMPOSED (tier above DESIGNED)                   │
  │  4-5/8 YES = Flagship SOPHISTICATED (approaching, not achieving)       │
  │  0-3/8 YES = NOT Flagship (may be excellent Middle/Ceiling)            │
  │                                                                         │
  │  TIER 5 CONSTRAINTS:                                                    │
  │  - Asked ONLY after PA-05 achieves >= 3/4                              │
  │  - Same fresh-eyes principle: zero build context                       │
  │  - Same language hard block: no CSS vocabulary                         │
  │  - Distributed among existing 9 auditors (no extra agents)            │
  │                                                                         │
  │  CONTRARIAN CAVEAT (Report 11): Tier 5 questions are derived from     │
  │  the compositional intelligence stack model. They detect STACK          │
  │  PROPERTIES, not necessarily what humans perceive as quality. This     │
  │  is potentially circular: define quality as "stack operating," create  │
  │  questions detecting "stack operating," conclude quality = stack.      │
  │  Disprove by: showing two PA-05 4/4 pages, asking auditors which is   │
  │  better WITHOUT Tier 5 prompting. If they consistently distinguish    │
  │  them, PA-05 collapses a real distinction.                             │
  │                                                                         │
  │  SUCCESS BAR (Report 08): PA-05 >= 3.5 AND Tier 5 >= 6/8.            │
  │  Middle 4/4 typically scores 2-3/8 on Tier 5.                         │
  └─────────────────────────────────────────────────────────────────────────┘


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

  RISK 10: PA-05 4/4 May Be a Low Bar (Report 13) ★ NEW
  ├── Middle experiment scored 4/4 DESIGNED, but Middle auditor called
  │   it "B+ effort." PA-05 4/4 is a NECESSARY but not SUFFICIENT
  │   condition for Flagship quality.
  ├── PA cannot distinguish Middle 4/4 from Flagship 4/4 without Tier 5
  │   question set (Report 26).
  └── Mitigation: Add Tier 5 PA questions (PA-60 through PA-67).

  RISK 11: Content-Form Resonance Is Unexamined (Reports 13, 09) ★ UPDATED
  ├── The highest-leverage variable — whether visual form emerges FROM
  │   content tensions — has zero measurement infrastructure.
  ├── All experiments test instruction format, not content-form fit.
  ├── 7 CONTENT PROPERTIES predict higher PA-05 (Report 09):
  │   P1: Structural heterogeneity (mixed modes: prose, code, tables, diagrams)
  │   P2: Code block presence (visual anchors demanding distinct treatment)
  │   P3: Embedded questions (dialogic register breaking uniformity)
  │   P4: Multiple rhetorical modes (explanatory, procedural, comparative)
  │   P5: Natural decision points (inviting compositional branching)
  │   P6: Self-referential meta-content (content IS the design system)
  │   P7: Domain transitions (shifts requiring visual accompaniment)
  ├── CONTENT THAT FAILS has: uniform register, no code, no procedural
  │   content, single semantic domain, zero questions, no mode transitions.
  │   Failed Flagship content exhibited ALL 7 negative properties.
  └── Mitigation: Content selection pre-analysis (Report 09) + PA question
      + experiment variable. RESEARCH-SYNTHESIS.md may be suboptimal Flagship
      content — its uniform academic register limits compositional variety.

  RISK 12: N=1 Per Configuration (Report 13) ★ NEW
  ├── Every finding is based on 1 build per configuration.
  ├── Middle 4/4 = N=1. Flagship 1.5/4 = N=1. Remediation 2.5/4 = N=1.
  ├── All "findings" are HYPOTHESES until replicated.
  └── Mitigation: First experiment should REPLICATE, not innovate.
      Run same content + same approach twice to measure variance.

  RISK 13: Adversarial Thesis (Report 14) ★ NEW
  ├── COUNTERPOSITION: Quality inversely correlates with instruction
  │   volume BECAUSE codifying tacit knowledge DESTROYS the advantage
  │   of tacit knowledge. The more you specify, the worse it gets.
  ├── If true: the entire pipeline investigation is counterproductive.
  │   The optimal architecture is ZERO infrastructure beyond soul.
  └── Mitigation: This is what Experiment E tests. If PA-05 >= 3.5 with
      42 lines, the adversarial thesis is validated.

  RISK 14: 31 Middle-Tier Biases in Architecture (Report 23) ★ NEW
  ├── The current PV2 architecture (including this diagram) is optimized
  │   for Middle-tier success: PA-05 >= 3.0, fast path, cost optimization,
  │   Middle-calibrated gate thresholds.
  ├── "ALWAYS FLAGSHIP" directive is CONTRADICTED by operational spec.
  ├── Specific biases: cost model favors cheap, fast path terminates at
  │   3.0, gate thresholds are Middle floor, experiment success = 3.0.
  └── Mitigation: This v1 update addresses the most visible biases.
      Thresholds raised, fast path removed, experiments retargeted.
      Deeper biases require architectural redesign in next iteration.

  RISK 15: TC + PA Skills Top Out at Ceiling Tier (Report 26) ★ NEW
  ├── TC skill produces Ceiling-tier plans (12-15 mechanisms, 3 transition
  │   types). Flagship requires 14+ mechanisms, 6 transition types.
  ├── PA skill cannot distinguish Middle 4/4 from Flagship 4/4.
  └── Mitigation: 6 TC modifications + 8 Tier 5 PA questions documented
      in SKILL ENRICHMENT NEEDS section above.


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
  ║   CAVEAT: N=3 with confounded variables. All findings = hypotheses. ║
  ║                                                                       ║
  ║   CONTRARIAN CHALLENGES (Reports 11, 16, 17 — survived tempering):  ║
  ║                                                                       ║
  ║   C1: Flagship 4/4 may not exist as a perceptual category.          ║
  ║       Confidence: HIGH. Disprove: build 2 PA-05 4/4 pages, test     ║
  ║       whether auditors perceive a register shift. (Report 11)        ║
  ║                                                                       ║
  ║   C2: The $5 experiment might work. Opus + soul + "make this        ║
  ║       extraordinary" might match any pipeline output. The project    ║
  ║       should STOP ANALYZING and BUILD. Meta:output ratio = NaN:0.   ║
  ║       (Report 16)                                                     ║
  ║                                                                       ║
  ║   C3: Recipe ceiling is real. Specification and composition compete  ║
  ║       for the SAME cognitive resource (builder attention). More      ║
  ║       specification → less composition. Optimal recipe: 30-50 lines ║
  ║       describing DISPOSITION, not procedure. DESIGNED is a property  ║
  ║       of ATTENTION, not product. (Report 17)                         ║
  ║                                                                       ║
  ║   C4: 4 builder cognitive modes: COMPOSING (4/4), PLANNING-THEN-    ║
  ║       EXECUTING (4/4), COMPLYING (1.5/4), REPAIRING (2.5/4).       ║
  ║       The brief must create COMPOSING mode. (Report 17)              ║
  ║                                                                       ║
  ║   C5: Content determines ceiling. All experiments confound content   ║
  ║       with instruction format. Structural heterogeneity (code +     ║
  ║       tables + prose + diagrams) predicts PA-05. (Report 09)         ║
  ║                                                                       ║
  ║   8 FINDINGS THAT SURVIVED CHALLENGE (Report 11):                    ║
  ║   ✓ Perception thresholds (>=15 RGB, etc.) — non-negotiable          ║
  ║   ✓ FORMAT > VOLUME — SPECIFICITY > LENGTH                          ║
  ║   ✓ Multi-coherence as quality lever — 3+ channels = DESIGNED       ║
  ║   ✓ Fat Core architecture — eliminate Boundary 3                     ║
  ║   ✓ Anti-scale model — density x restraint x confidence              ║
  ║   ✓ Content heterogeneity predicts PA-05                             ║
  ║   ✓ Conventions brief over recipe                                    ║
  ║   ✓ Opus unconditional for builders                                  ║
  ║                                                                       ║
  ║   EMBARRASSINGLY SIMPLE ALTERNATIVE (Report 16):                     ║
  ║   Opus + content + soul + catalog + short brief + PA.               ║
  ║   If it works → entire pipeline is unjustified overhead.            ║
  ║   This IS Experiment E ($5). Run it FIRST.                           ║
  ║                                                                       ║
  ╚═══════════════════════════════════════════════════════════════════════╝

  WHAT TO CODIFY IMMEDIATELY (before experiments):

  1. conventions-brief.md (~230 lines — DRAFT COMPLETE, Report 10)
     Location: design-system/compositional-core/guidelines/conventions-brief.md
     DRAFT EXISTS: ephemeral/flagship-44-recipe/10-CONVENTIONS-BRIEF-DRAFT.md
     10 sections, ~230 lines, hybrid prose+YAML:
       S1: IDENTITY (Soul) [~20 lines] — 5 soul constraints + container + trinity
       S2: PERCEPTION THRESHOLDS [~20 lines, YAML block] — 8 threshold gates
       S3: TRANSITION GRAMMAR [~25 lines] — 3 boundary types (SMOOTH/BRIDGE/BREATHING)
       S4: MULTI-COHERENCE BINDING [~25 lines] — 6 channels, 3 semantic directions
       S5: FRACTAL ECHO [~20 lines] — 5-scale table, pattern consistency
       S6: COMPOSITIONAL MEMORY PROTOCOL [~20 lines] — drift prevention
       S7: SELF-CHECK PROTOCOL [~25 lines] — 5 binary self-tests
       S8: CREATIVE AUTHORITY [~20 lines] — override rights with logged reasoning
       S9: QUALITY FLOOR [~20 lines] — mechanism minimums + CSS range
       S10: CONVICTION CARD [~20 lines] — pre-build commitment statement
     PLUS: PROCESS section (Phases A-D with 4 verification pauses)
     TONE: WORLD DESCRIPTION — "describes the world you are building inside,
     not a checklist of what not to do" (Report 10, opening paragraph)
     FORMAT: Hybrid prose + YAML (structured data in YAML, creative
     principles in prose, Report 29 FORMAT > VOLUME)
     KEY FEATURE: Conviction card + self-check protocol anchor builder's
     compositional memory for the duration of the build.
     CONTRARIAN CAVEAT (Report 17): The 230-line brief is a PROCEDURAL recipe
     (ceiling 3.0-3.5/4). A DISPOSITIONAL format (~30-50 lines describing
     the builder's attitude and orientation) might achieve 4/4, but N=0.
     4 stack integration edits needed (Report 23): 5-line stack preamble,
     reposition S3 as anti-scale, add restraint column to transition table,
     add 1 worked boundary example.

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
  ║   EXPERIMENT E: THE $5 EXPERIMENT (RUN FIRST — Reports 16, 17)       ║
  ║   ────────────────────────────────────────────                       ║
  ║   Input: RESEARCH-SYNTHESIS.md + conventions brief (~230 lines,     ║
  ║          Report 10 draft) + tokens.css + prohibitions.md +          ║
  ║          mechanism-catalog.md + merged-components.css.               ║
  ║          Single Opus agent. No TC. No orchestrator. No gates.       ║
  ║   Cost: ~$5-10. Time: ~30 min build + 1 hr PA.                     ║
  ║   COGNITIVE MODE TARGET: COMPOSING, not COMPLYING (Report 17).      ║
  ║   CONTENT NOTE (Report 09): RESEARCH-SYNTHESIS.md has uniform       ║
  ║   academic register — consider alternative content with structural   ║
  ║   heterogeneity for stronger Flagship test.                          ║
  ║                                                                       ║
  ║   DECISION GATE:                                                      ║
  ║   PA-05 >= 3.5 AND Tier 5 >= 6/8 → Conventions brief = pipeline.  ║
  ║   PA-05 >= 3.5 AND Tier 5 < 6/8 → Brief = COMPOSED, not Flagship.║
  ║     Proceed to Exp D (Fat Core) to test verification shell value.  ║
  ║   PA-05 3.0-3.4 → COMPOSED but not DESIGNED. Proceed to Exp D.    ║
  ║   PA-05 2.0-2.9 → Brief insufficient. Proceed to Exp D.           ║
  ║   PA-05 < 2.0 → Something wrong with brief. Debug before Exp D.   ║
  ║   NOTE: Recipe ceiling (Report 17) predicts 230 lines =            ║
  ║   PROCEDURAL ceiling 3.0-3.5/4. If confirmed, test DISPOSITIONAL  ║
  ║   variant (~50 lines) as Exp E2 before adding infrastructure.      ║
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
  ║   Target: PA-05 >= 3.5/4 AND Tier 5 >= 6/8 (Flagship bar, R08)   ║
  ║   Soul: 0 violations | Container: 960px | No fast path.           ║
  ║   Mechanisms: >= 14 across all 5 categories (14-dim spec, R01)    ║
  ║   NO FAST PATH: ALL experiments run full verification (Report 23)  ║
  ║   NO EARLY TERMINATION: PA-05 = 3.0 is NOT sufficient for Flagship║
  ║                                                                       ║
  ║   FULL DECISION TREE (Flagship thresholds, Report 23):               ║
  ║   A >= 3.5 → STOP. conventions brief = the pipeline.                ║
  ║   A 3.0-3.4 → COMPOSED not DESIGNED. Fat Core may close gap.       ║
  ║   A < 3.0, B >= 3.5 → Fat Core is the architecture.                ║
  ║   A < 3.0, B 3.0-3.4 → Fat Core + creative revision needed.       ║
  ║   A < 3.0, B < 3.0 → Investigation missed something fundamental.  ║
  ║   C tests recipe ceiling: Recipe < Brief = confirmed. Optional.    ║
  ║                                                                       ║
  ║   Then: Codify the winning approach.                                 ║
  ║   Then: Expand to 5 content types. Track PA-05 per type.            ║
  ║                                                                       ║
  ╚═══════════════════════════════════════════════════════════════════════╝
```
