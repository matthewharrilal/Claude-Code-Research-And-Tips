# DIAGRAM REPRESENTATION: Making Compositional Intelligence Visible in PV2

**Author:** Diagram Representation Designer (Opus 4.6)
**Date:** 2026-02-19
**Task:** #96
**Sources:** PV2-PIPELINE-DIAGRAM.md (977 lines), 12-stack-multi-coherence.md (520 lines), 14-stack-fractal.md (377 lines), 28-meta-propagation.md (639 lines)

---

## DESIGN BRIEF

The existing PV2 diagram (977 lines) shows ARCHITECTURE -- boxes, arrows, waves. It answers "what happens in what order." It does NOT show how compositional intelligence (the 5 levels: thresholds, scales, channels, multi-coherence, anti-scale) FLOWS through the pipeline, where it compresses, and where it dies.

The user wants a diagram that makes intelligence VISIBLE at each stage. Five approaches follow, each with a 30-50 line ASCII mockup, pros/cons evaluation, and recommendation.

---

## APPROACH 1: INTELLIGENCE HEATMAP

### Concept

Show each pipeline stage as a ROW. Columns represent the 5 compositional intelligence levels. Cell shading indicates how much of that intelligence level is PRESENT at that stage. Compression loss becomes visible as color fading from left (creation) to right (output).

### ASCII Mockup (42 lines)

```
COMPOSITIONAL INTELLIGENCE HEATMAP
═══════════════════════════════════════════════════════════════════════

                    INTELLIGENCE LEVELS PRESENT AT EACH STAGE
                    ─────────────────────────────────────────
                    Percep.   Scales    Channels   Multi-     Anti-
  STAGE             Thresh.   (5-lvl)   (6 CSS)    Coher.     Scale
  ═════════════     ═══════   ═══════   ════════   ═══════    ══════

  Content.md        ---       ---       ---        ---        ---
                    (none yet -- raw content has no CI)

  TC Planner        [#####]   [#####]   [#### ]    [###  ]    [##   ]
  (Wave 0)          FULL      FULL      HIGH       MODERATE   LOW
                    15 RGB    5/5       6 named    Rule C-1   density
                    thresholds scales    channels   specified  x restraint

  _build-plan.md    [#####]   [##   ]   [###  ]    [#    ]    [     ]
  (TC Output)       FULL      LOW       MODERATE   MINIMAL    ABSENT
                    hex vals  NO scale  mechanisms multi-co   no anti-
                    survive   table!    named      absent     scale ref

  Handoff Gate      [###  ]   [     ]   [     ]    [     ]    [     ]
  (Wave 0.9)        PARTIAL   ABSENT    ABSENT     ABSENT     ABSENT
                    bg delta  no check  no check   no check   no check
                    only

  Builder Input     [#####]   [#    ]   [###  ]    [#    ]    [     ]
  (6 files)         FULL      MINIMAL   MODERATE   MINIMAL    ABSENT
                    recipe    catalog   catalog    Phase 8    nowhere
                    has vals  mentions  has 18     mentions   in builder
                              scales    mechs      ">=3"      files

  CSS/HTML Output   [#### ]   [?    ]   [??   ]    [?    ]    [     ]
  (Wave 1)          HIGH      UNKNOWN   UNKNOWN    UNKNOWN    ABSENT
                    computed  depends   depends    depends    not
                    styles    on build  on build   on build   encoded

  Gate Runner       [#####]   [     ]   [#    ]    [     ]    [     ]
  (SC-01..12)       FULL      ABSENT    MINIMAL    ABSENT     ABSENT
                    SC-09/10  no gate   SC-09 bg   no SC-13   no gate
                    SC-11/12           SC-11 type

  PA Auditors       [     ]   [###  ]   [###  ]    [#### ]    [###  ]
  (9 fresh eyes)    ABSENT    MODERATE  MODERATE   HIGH       MODERATE
                    no nums   percep-   percep-    "DESIGNED" "density x
                    (correct) tual      tual       = implicit restraint"
                              judgment  judgment   multi-co   implicit

  Final Output      [#### ]   [?    ]   [??   ]    [?    ]    [     ]
                    HIGH      VARIABLE  VARIABLE   VARIABLE   ABSENT

  ═══════════════════════════════════════════════════════════════════
  LEGEND:  [#####] FULL   [#### ] HIGH   [###  ] MODERATE
           [##   ] LOW    [#    ] MINIMAL  [     ] ABSENT
           [?    ] DEPENDS ON BUILDER (no enforcement)

  KEY INSIGHT: Intelligence ENTERS at TC (row 2) as full-spectrum,
  then DRAINS through the build-plan handoff. By the time the builder
  writes CSS, only thresholds survive reliably. Everything else is
  aspirational.
```

### Pros
- **Compression loss is immediately visible.** The reader sees full bars at TC and empty bars at Gate Runner -- the fading pattern tells the story.
- **Per-level diagnosis.** You can trace any single column downward to see exactly where THAT intelligence level dies. Scales die at build-plan handoff. Multi-coherence dies at the same point. Anti-scale never enters the pipeline.
- **Compact.** The entire intelligence state of the pipeline fits in one screen.
- **Actionable.** Every empty cell is an implied fix: "add this intelligence at this stage."

### Cons
- **Loses flow direction.** The heatmap shows STATE at each stage but not the ARROW between stages. You cannot see what crosses the boundary -- only what survives.
- **Hides the PA paradox.** The PA row shows intelligence "reappearing" (perceptual judgment detects what programmatic gates miss) but the heatmap format makes this look like intelligence is generated, not that it was always there in the CSS and only visible to human perception.
- **Oversimplifies.** 5 levels x 5 shading values = 25 cells of information. The actual intelligence state is more nuanced (e.g., thresholds "survive" but as numbers detached from their compositional meaning).

---

## APPROACH 2: FLOW DIAGRAM WITH INTELLIGENCE ANNOTATIONS

### Concept

Standard pipeline flow (the existing boxes-and-arrows format) but ANNOTATE every arrow between stages with what intelligence crosses the boundary. Color-code: GREEN = preserved, YELLOW = compressed, RED = lost.

### ASCII Mockup (48 lines)

```
INTELLIGENCE-ANNOTATED PIPELINE FLOW
═══════════════════════════════════════════════════════════════════════

  ┌──────────────┐
  │  TC Planner  │  CREATES: All 5 levels (thresholds, scales,
  │  (Wave 0)    │  channels, multi-coherence, anti-scale reasoning)
  └──────┬───────┘
         │
         │  ARROW: TC --> _build-plan.md
         │  ┌──────────────────────────────────────────────────────┐
         │  │  PRESERVED (green):                                  │
         │  │    Thresholds -- hex values, RGB deltas (numbers)   │
         │  │    Channel names -- "Spatial: #5, Hierarchy: #1"    │
         │  │                                                      │
         │  │  COMPRESSED (yellow):                                │
         │  │    Channels -- mechanism IDs without CSS snippets   │
         │  │    Isomorphism -- metaphor-to-CSS without SCALE col │
         │  │                                                      │
         │  │  LOST (red):                                         │
         │  │    Scale coverage table -- TC produces it, plan     │
         │  │      does NOT include it (5-scale --> 0-scale)      │
         │  │    Multi-coherence binding -- no per-boundary       │
         │  │      semantic direction table                        │
         │  │    Anti-scale model -- not referenced anywhere      │
         │  │    Reasoning chain -- WHY each mechanism selected   │
         │  │    Runner-up metaphors -- alternatives discarded    │
         │  └──────────────────────────────────────────────────────┘
         ▼
  ┌──────────────┐
  │  Handoff     │  CHECKS: 5 binary conditions
  │  Gate (0.9)  │  PRESERVES: zone count, bg delta, grid, mechs, transitions
  └──────┬───────┘  IGNORES: scales, multi-coherence, fractal, anti-scale
         │
         │  ARROW: Plan + Recipe + 4 files --> Builder
         │  ┌──────────────────────────────────────────────────────┐
         │  │  PRESERVED: Thresholds (recipe has specific values) │
         │  │  COMPRESSED: Channels (catalog has CSS but builder  │
         │  │    must look up + adapt -- lossy re-derivation)     │
         │  │  LOST: Multi-coherence (recipe splits channels      │
         │  │    across Phases 3/4/5 -- sequential not bound)     │
         │  │  LOST: Fractal (recipe is scale-blind, no cross-   │
         │  │    references between macro and micro phases)        │
         │  │  LOST: Anti-scale (not in any builder input file)   │
         │  └──────────────────────────────────────────────────────┘
         ▼
  ┌──────────────┐
  │ Opus Builder │  EXECUTES: 9 phases, channel-by-channel
  │ (Wave 1)     │  CREATES: CSS/HTML (visual intelligence encoded)
  └──────┬───────┘  LOSES: Reasoning (CSS has values but not WHY)
         │
         │  ARROW: output.html --> Gate Runner + PA
         │  ┌──────────────────────────────────────────────────────┐
         │  │  Gate Runner VERIFIES: Thresholds (SC-09/10/11/12) │
         │  │  Gate Runner IGNORES: Multi-coherence, fractal,     │
         │  │    anti-scale, compositional reasoning               │
         │  │                                                      │
         │  │  PA DETECTS: Scale presence (perceptual judgment),  │
         │  │    multi-coherence ("feels designed"), anti-scale    │
         │  │    ("density x restraint" implicit)                  │
         │  │  PA CANNOT DETECT: Whether missing patterns were    │
         │  │    INTENDED or ACCIDENTAL                            │
         │  └──────────────────────────────────────────────────────┘
         ▼
  ┌──────────────┐
  │   Output     │  CONTAINS: What survived. Thresholds: HIGH.
  │   (3 files)  │  Scales/Multi-coherence/Fractal: VARIABLE.
  └──────────────┘  Anti-scale: ABSENT.
```

### Pros
- **Shows WHAT crosses each boundary.** The annotated arrows are the most information-rich part -- they answer "what exactly gets lost where?"
- **Preserves familiar structure.** Extends the existing PV2 diagram rather than replacing it. Readers already understand the wave flow.
- **Green/yellow/red is intuitive.** Even at a glance, the color ratio at each arrow tells the story (mostly red = mostly lost).
- **Specific and actionable.** Each red item is an explicit gap to fix.

### Cons
- **Verbose.** Annotation boxes make the diagram long (this mockup is already 48 lines and only shows 4 arrows -- the full pipeline has 7 boundaries).
- **Hard to compare across levels.** To trace "multi-coherence" through the whole pipeline, you have to read every annotation box sequentially. No single column or row shows the full journey.
- **Doesn't show DEGREE of loss.** "Compressed" covers everything from "95% survived" to "5% survived." The green/yellow/red categories are coarse.

---

## APPROACH 3: LAYERED ARCHITECTURE

### Concept

Show PV2 as STACKED LAYERS, not sequential waves. Bottom layer = perception thresholds (foundation). Each layer up adds one compositional intelligence level. The builder operates AT a specific layer. Gates verify layer by layer. Intelligence that is not BUILT INTO a layer simply is not there.

### ASCII Mockup (46 lines)

```
LAYERED COMPOSITIONAL INTELLIGENCE ARCHITECTURE
═══════════════════════════════════════════════════════════════════════

  Layer 5: ANTI-SCALE                                    TC only
  ┌─────────────────────────────────────────────────┐    (never
  │  Richness = density x restraint x confidence    │    reaches
  │  NOT "add more mechanisms" but "deploy fewer    │    builder)
  │  with more purpose"                             │
  │  Status: EXISTS in research. ABSENT in pipeline.│
  └─────────────────────────────────────────────────┘

  Layer 4: MULTI-COHERENCE                               TC knows
  ┌─────────────────────────────────────────────────┐    (builder
  │  >=3 channels shift TOGETHER at each boundary   │    doesn't)
  │  Same semantic direction. Proportional intensity.│
  │  Status: TC Rule C-1 specifies. Build plan DROPS│
  │  it. Recipe splits channels across Phases 3/4/5.│
  │  Phase 8 verifies too late.                     │
  └─────────────────────────────────────────────────┘

  Layer 3: CHANNELS (6 CSS dimensions)                   Partially
  ┌─────────────────────────────────────────────────┐    reaches
  │  Chromatic | Typographic | Spatial |             │    builder
  │  Structural | Behavioral | Material              │    (as mech
  │  Status: Mechanism catalog has 18 mechs across   │    names,
  │  all 6. Builder gets catalog but recipe phases   │    not CSS)
  │  address channels independently.                 │
  └─────────────────────────────────────────────────┘

  Layer 2: SCALES (5 zoom levels)                        TC produces
  ┌─────────────────────────────────────────────────┐    coverage
  │  Navigation | Page | Section | Component | Char  │    table.
  │  Status: TC Step 4.7 requires 5-scale table.    │    Build plan
  │  Build plan does NOT include it. Recipe phases   │    DROPS it.
  │  are scale-blind (property-first, not scale-first│
  └─────────────────────────────────────────────────┘

  Layer 1: PERCEPTION THRESHOLDS (foundation)       *** THE ONLY LAYER
  ┌─────────────────────────────────────────────────┐    THAT SURVIVES
  │  bg >= 15 RGB | font >= 2px | spacing >= 0.03em │    END-TO-END ***
  │  stacked gap <= 108px | container 940-960px     │
  │  Status: Recipe has values. Handoff gate checks. │
  │  Gate runner SC-09/10/11/12 enforces. LOSSLESS. │
  └─────────────────────────────────────────────────┘
  ─────────────────────────────────────────────────────
  FOUNDATION: Soul constraints (border-radius:0, etc.)

  ═══════════════════════════════════════════════════════════════════

  WHERE EACH AGENT OPERATES:

  TC Planner:       Operates at ALL 5 layers (creates intelligence)
  Build Plan:       Propagates Layer 1, fragments Layer 3, drops 2/4/5
  Handoff Gate:     Verifies Layer 1 only
  Opus Builder:     Receives Layer 1 (full), Layer 3 (partial). Layers 2/4/5 absent.
  Gate Runner:      Enforces Layer 1 only
  PA Auditors:      PERCEIVE Layers 2-4 implicitly (judgment, not measurement)

  THE GAP:  Builder operates at Layer 1-3 (thresholds + some channels).
            DESIGNED (PA-05 4/4) requires Layer 4 (multi-coherence).
            Builder has NO structured access to Layer 4.
            This is the recipe ceiling.
```

### Pros
- **Makes the recipe ceiling VISIBLE.** The builder operating at Layers 1-3 while DESIGNED requires Layer 4 is a powerful visual. The gap between "where the builder works" and "where quality lives" is immediately clear.
- **Correct conceptual model.** Layers do build on each other: you cannot have multi-coherence without channels, cannot have channels without thresholds. The stacking order reflects real dependency.
- **Answers "what would it take to reach 4/4?"** -- push the builder up to Layer 4.
- **Compact.** The entire intelligence architecture fits in one view with clear labels.

### Cons
- **Loses temporal flow.** Layers don't show WHEN intelligence is created or lost. The TC planner creates all 5 layers in 30-60 min, but the layer diagram makes them look simultaneous.
- **Oversimplifies agent roles.** The PA auditors don't neatly "perceive Layer 4" -- they perceive a gestalt that is informed by all layers simultaneously. The layer model suggests they evaluate one layer at a time.
- **No clear fix path.** The diagram shows WHERE intelligence lives but not HOW to propagate it. The arrows between layers and agents are implicit.

---

## APPROACH 4: DUAL-TRACK (ARTIFACT vs. INTELLIGENCE)

### Concept

Show two parallel tracks running through the pipeline: the ARTIFACT track (what files are produced at each stage) and the INTELLIGENCE track (what compositional knowledge is present at each stage). Where the tracks diverge = compression loss. Where they converge = intelligence surviving.

### ASCII Mockup (50 lines)

```
DUAL-TRACK: ARTIFACT vs. INTELLIGENCE
═══════════════════════════════════════════════════════════════════════

     ARTIFACT TRACK                         INTELLIGENCE TRACK
     (what gets produced)                   (what knowledge is present)
     ──────────────────                     ──────────────────────────

     content.md                             Raw content (no CI)
         │                                      │
         ▼                                      ▼
     _build-plan.md ◄─── DIVERGENCE ───► TC's full cognitive model
     (~100 lines:                         (~2,000 lines of reasoning:
      zone count,                          5-scale coverage table,
      bg hex values,                       multi-coherence binding,
      mechanism names,                     proportional intensity,
      transition types)                    anti-scale evaluation,
                                           metaphor CSS isomorphisms,
         │                                 candidate comparisons,
         │  20:1 compression               pacing predictions)
         │  gap opens here                     │
         │                                     │ <-- INTELLIGENCE DIES HERE
         ▼                                     ▼     (reasoning not in plan)
     Recipe + Plan + 4 files             Thresholds (survive as numbers)
     (1,150 lines total)                 Channels (survive as mech names)
         │                               Scales: GONE
         │  builder synthesizes          Multi-coherence: GONE
         │  6 files into mental          Anti-scale: GONE
         │  model                        Reasoning: GONE
         ▼                                     │
     output.html + cascade table         CSS encodes visual decisions
     (700-1500 lines CSS)               (WHAT was decided survives)
     (500-1000 lines HTML)              (WHY it was decided dies)
         │                                     │
         │                                     │
         ▼                                     ▼
     Gate results (12 PASS/FAIL)         Thresholds verified (Layer 1)
     PA report (48 questions)            Perception evaluated (Layers 2-4)
         │                                     │
         │  CONVERGENCE ATTEMPT                │
         │  (PA tries to recover               │
         │   lost intelligence                 │
         │   through perception)               │
         ▼                                     ▼
     output.html (final)                 What survived:
     _pa-report.md                         Thresholds: HIGH
     _build-log.md                         Channels: MODERATE
                                           Scales: VARIABLE
     ═══════════════════                   Multi-coherence: VARIABLE
     ARTIFACTS: Complete                   Anti-scale: ABSENT
     INTELLIGENCE: Partial                 ═══════════════════════════

  ─────────────────────────────────────────────────────────────────────

  THE KEY INSIGHT:

  The artifact track ALWAYS completes (files are always produced).
  The intelligence track ALWAYS degrades (knowledge is always lost).

  The pipeline succeeds when:
    Artifact quality > threshold (gates PASS)
    Intelligence degradation < critical (PA-05 >= 3/4)

  The pipeline fails when:
    Artifacts are correct but intelligence-empty
    (flagship: all gates PASSED, PA-05 = 1.5/4)

  FIX: Close the DIVERGENCE at the TC-to-build-plan boundary.
  If the build plan carried intelligence as STRUCTURED DATA + CSS
  (not prose compression), the two tracks would stay closer.
```

### Pros
- **Shows the fundamental tension.** The artifact track always succeeds; the intelligence track always degrades. This is the core problem and it is visible at a glance.
- **Pinpoints the divergence.** The moment the two tracks separate (TC output vs build plan) is exactly where the diagram says "20:1 compression, gap opens here." This is the #1 fix target.
- **Shows PA as a convergence attempt.** The PA doesn't create intelligence -- it tries to RECOVER lost intelligence through perception. This framing is correct and novel.
- **Tells the story of the flagship failure.** "Artifacts correct, intelligence empty" = gates PASSED, PA FAILED. The dual-track makes this paradox legible.

### Cons
- **Two-column layout is hard in ASCII.** The parallel tracks require wide lines and careful alignment. Terminal width limitations may truncate.
- **Loses per-level detail.** The intelligence track shows a single aggregated state at each stage, not per-level (thresholds vs scales vs channels). Approaches 1 and 3 are better at per-level diagnosis.
- **Doesn't show fixes.** The divergence is identified but the fix (structured data + CSS) is stated in text, not shown structurally in the diagram itself.

---

## APPROACH 5: BOUNDARY-FOCUSED

### Concept

Center the diagram on BOUNDARIES, not stages. Each boundary is a box showing: what comes in, what goes out, what is lost, and what the fix is. The stages between boundaries become secondary -- the boundaries ARE the diagram.

### ASCII Mockup (50 lines)

```
BOUNDARY-FOCUSED INTELLIGENCE MAP
═══════════════════════════════════════════════════════════════════════

  ╔═══════════════════════════════════════════════════════════════════╗
  ║  BOUNDARY 1: TC Planner --> _build-plan.md                      ║
  ║  SEVERITY: ████████░░ CRITICAL (8/10 intelligence loss)         ║
  ╠═══════════════════════════════════════════════════════════════════╣
  ║  IN:  Full 5-level CI (thresholds + scales + channels +         ║
  ║       multi-coherence + anti-scale reasoning + metaphor CSS)    ║
  ║  OUT: Hex values, mechanism names, zone count, transition types ║
  ║  LOST:                                                          ║
  ║    Scale coverage table (5-row) .............. BLOCKED FIX: B-04║
  ║    Multi-coherence binding (per-boundary) .... BLOCKED FIX: B-01║
  ║    Anti-scale model .......................... SIGNIF. FIX: S-04║
  ║    Mechanism CSS snippets .................... BLOCKED FIX: B-05║
  ║    Metaphor reasoning chain .................. SIGNIF. FIX: S-03║
  ║    Proportional intensity levels ............. SIGNIF. FIX: S-01║
  ║  FIX: Build plan as YAML + embedded CSS (Report 28)            ║
  ╚═══════════════════════════════════════════════════════════════════╝
                              │
                              ▼
  ╔═══════════════════════════════════════════════════════════════════╗
  ║  BOUNDARY 2: _build-plan.md --> Handoff Gate                    ║
  ║  SEVERITY: ████░░░░░░ MODERATE (4/10 intelligence loss)         ║
  ╠═══════════════════════════════════════════════════════════════════╣
  ║  IN:  Build plan (hex values, mech names, zones, transitions)   ║
  ║  OUT: 5 binary PASS/FAIL checks                                ║
  ║  LOST:                                                          ║
  ║    Fractal coverage check .................... SIGNIF. FIX: S-05║
  ║    Multi-coherence presence check ............ BLOCKED FIX: B-06║
  ║    Anti-scale ratio check .................... NOTED  FIX: N-01 ║
  ║  FIX: Add 2-3 gate checks (fractal, multi-coherence, semantic) ║
  ╚═══════════════════════════════════════════════════════════════════╝
                              │
                              ▼
  ╔═══════════════════════════════════════════════════════════════════╗
  ║  BOUNDARY 3: Recipe + Files --> Builder's Mental Model          ║
  ║  SEVERITY: ██████░░░░ SIGNIFICANT (6/10 intelligence loss)      ║
  ╠═══════════════════════════════════════════════════════════════════╣
  ║  IN:  6 files, 1,150 lines (recipe + plan + tokens + prohib +  ║
  ║       components + mechanism catalog)                           ║
  ║  OUT: Builder's synthesized understanding (lossy merge of 6)    ║
  ║  LOST:                                                          ║
  ║    Multi-file synthesis coherence ............ BLOCKED FIX: B-07║
  ║    Recipe splits channels across Phases 3/4/5  BLOCKED FIX: B-02║
  ║    Scale-blind recipe (no fractal cross-refs)  SIGNIF. FIX: S-06║
  ║    Anti-scale model not in any builder file .. SIGNIF. FIX: S-04║
  ║  FIX: Phase 3.5 multi-coherence binding step (Report 12)       ║
  ║  FIX: Fractal cross-refs in recipe phases (Report 14)          ║
  ║  FIX: Inline CSS snippets in recipe (Report 28)                ║
  ╚═══════════════════════════════════════════════════════════════════╝
                              │
                              ▼
  ╔═══════════════════════════════════════════════════════════════════╗
  ║  BOUNDARY 4: CSS/HTML --> Programmatic Gates                    ║
  ║  SEVERITY: ███░░░░░░░ LOW-MODERATE (3/10 intelligence loss)     ║
  ╠═══════════════════════════════════════════════════════════════════╣
  ║  IN:  700-1500 lines CSS + 500-1000 lines HTML                 ║
  ║  OUT: 12 binary PASS/FAIL (SC-01 through SC-12)                ║
  ║  LOST:                                                          ║
  ║    Multi-coherence verification .............. BLOCKED FIX: B-03║
  ║    Fractal direction consistency ............. SIGNIF. FIX: S-07║
  ║  FIX: Add SC-13 (multi-coherence gate) + SC-14 (fractal gate)  ║
  ╚═══════════════════════════════════════════════════════════════════╝
                              │
                              ▼
  ╔═══════════════════════════════════════════════════════════════════╗
  ║  BOUNDARY 5: CSS/HTML --> PA Auditors (screenshots only)        ║
  ║  SEVERITY: ░░░░░░░░░░ INTENTIONAL (correct by design)          ║
  ╠═══════════════════════════════════════════════════════════════════╣
  ║  IN:  Rendered screenshots at 1440px + 768px                    ║
  ║  OUT: PA-05 score, convergent findings, top-3 issues            ║
  ║  LOST: ALL build context (INTENTIONALLY -- fresh eyes)          ║
  ║  RECOVERED: Perceptual assessment of scales, channels, multi-co ║
  ║  NOTE: This is the ONLY boundary where loss is a FEATURE.       ║
  ╚═══════════════════════════════════════════════════════════════════╝
```

### Pros
- **Most actionable format.** Every boundary box contains: severity, what is lost, fix IDs, and fix descriptions. A developer can read one box and know exactly what to implement.
- **Prioritized.** Severity bars immediately show where effort should concentrate (Boundary 1 at 8/10, Boundary 5 at 0/10).
- **Fix-referenced.** Each lost item links to a specific BLOCKING or SIGNIFICANT fix ID from the research reports. This creates a direct path from diagnosis to action.
- **Boundary 5 framing.** Shows that the PA boundary is intentionally lossy -- this prevents the user from thinking every loss is a problem.

### Cons
- **No overview.** The boundary-focused format does not show the full pipeline at a glance. You cannot see "what intelligence is present at the builder" without mentally aggregating boundaries 1-3.
- **Stage-blind.** The stages themselves (TC, Builder, PA) become secondary to their boundaries. This loses context about what each stage DOES with the intelligence it receives.
- **Redundant with report format.** The boundary analysis in reports 12, 14, and 28 already provides this information. The diagram format adds structure but little new insight.

---

## EVALUATION MATRIX

| Criterion | 1: Heatmap | 2: Flow | 3: Layers | 4: Dual-Track | 5: Boundary |
|-----------|-----------|---------|-----------|---------------|-------------|
| Shows WHERE intelligence lives at each stage | **5/5** | 4/5 | **5/5** | 3/5 | 4/5 |
| Shows WHAT is lost at each boundary | 3/5 | **5/5** | 2/5 | 4/5 | **5/5** |
| Shows WHY loss happens | 2/5 | 4/5 | **5/5** | **5/5** | 4/5 |
| Actionable (leads to fixes) | 4/5 | 3/5 | 3/5 | 3/5 | **5/5** |
| Compact (fits 1-2 screens) | **5/5** | 2/5 | **5/5** | 4/5 | 3/5 |
| Preserves pipeline flow | 2/5 | **5/5** | 1/5 | 4/5 | 3/5 |
| Novel insight (not just restatement) | 3/5 | 3/5 | **5/5** | **5/5** | 3/5 |
| **TOTAL** | **24/35** | **26/35** | **26/35** | **28/35** | **27/35** |

---

## RECOMMENDATION

**Primary diagram: APPROACH 4 (DUAL-TRACK)** -- scored highest (28/35).

The dual-track format uniquely communicates the core problem: the pipeline always produces ARTIFACTS but inconsistently propagates INTELLIGENCE. The divergence point at the TC-to-build-plan boundary is the single most important insight, and the dual-track format makes it visually inescapable. The PA as "convergence attempt" framing is novel and correct.

**Secondary diagram: APPROACH 1 (HEATMAP)** -- best for per-level diagnosis.

The heatmap is the ideal REFERENCE diagram. When the user asks "what happened to multi-coherence at the builder?" they scan down the multi-coherence column and see it dropping from MODERATE at TC to ABSENT at the builder. The heatmap complements the dual-track by providing the granular per-level view that the dual-track lacks.

**Tertiary: APPROACH 3 (LAYERS)** -- best for conceptual understanding.

The layer architecture communicates "why the recipe ceiling exists" better than any other format. The builder operating at Layers 1-3 while DESIGNED requires Layer 4 is a one-image summary of the entire research corpus. Use this for the "why" discussion, not the "what to fix" discussion.

**Combined recommendation: Use all three.**

1. **DUAL-TRACK** for the main narrative (the story of intelligence degradation)
2. **HEATMAP** for the reference table (per-level, per-stage state lookup)
3. **LAYERS** for the conceptual model (why the ceiling exists)

These three diagrams together replace the 977-line architectural diagram with an intelligence-aware representation that shows not just WHAT the pipeline does, but WHAT IT KNOWS at each step.

---

## BONUS: COMPOSITE DIAGRAM CONCEPT

If the three diagrams were combined into a single integrated view:

```
PIPELINE V2: COMPOSITIONAL INTELLIGENCE MAP
═══════════════════════════════════════════════════════════════════════

                    INTELLIGENCE LEVELS (HEATMAP)
                    ─────────────────────────────
                    Thresh  Scales  Channels  Multi-C  Anti-S
                    ══════  ══════  ════════  ═══════  ══════

  ┌──────────┐     [#####] [#####] [#### ]   [###  ]  [##   ]
  │TC Planner│     FULL    FULL    HIGH      MOD      LOW
  └────┬─────┘
       │ ◄── DIVERGENCE OPENS (20:1 compression, reasoning dies)
       ▼
  ┌──────────┐     [#####] [##   ] [###  ]   [#    ]  [     ]
  │Build Plan│     FULL    LOW     MOD       MINIMAL  ABSENT
  └────┬─────┘
       │         ─────── Builder operates at Layers 1-3 ───────
       ▼         ─────── DESIGNED requires Layer 4 ────────────
  ┌──────────┐     [#### ] [#    ] [##   ]   [     ]  [     ]
  │  Builder │     HIGH    MIN     LOW       ABSENT   ABSENT
  └────┬─────┘
       │ ◄── PA attempts to RECOVER intelligence through perception
       ▼
  ┌──────────┐     [#### ] [##   ] [##   ]   [##   ]  [     ]
  │  Output  │     HIGH    LOW-MOD LOW-MOD   LOW-MOD  ABSENT
  └──────────┘     (proven) (variable -- depends on Opus fluency)

  THE RECIPE CEILING: Builder maxes out at Layer 3 (channels).
  Layer 4 (multi-coherence) requires binding table + Phase 3.5.
  Layer 5 (anti-scale) requires shared mental model (4-line preamble).
```

This 30-line composite provides the heatmap's per-level detail, the dual-track's divergence narrative, and the layer model's ceiling explanation in a single view. It is the densest possible representation of the compositional intelligence flow.

---

## WHAT THE ORIGINAL PV2 DIAGRAM SHOULD BECOME

The existing 977-line PV2-PIPELINE-DIAGRAM.md should NOT be replaced. It serves a different purpose (architectural documentation, file paths, agent counts, timing). Instead, the intelligence diagrams should be a NEW section appended to it, or a companion document referenced from it.

Suggested placement: Add a new section between "COMPLETE FLOW -- BIRD'S EYE VIEW" (line 785) and "PERMANENT FILE ARCHITECTURE" (line 841) titled:

```
═══════════════════════════════════════════════════════════════════
  COMPOSITIONAL INTELLIGENCE FLOW -- What the Pipeline KNOWS
═══════════════════════════════════════════════════════════════════
```

Containing the composite diagram (30 lines) with cross-references to the detailed heatmap, dual-track, and layer diagrams in the companion document.

---

**END REPORT**

**Statistics:**
- 5 approaches designed with ASCII mockups
- Evaluation matrix: 7 criteria x 5 approaches
- Winner: Dual-Track (28/35), with Heatmap and Layers as companions
- Composite diagram: 30 lines integrating all three perspectives
- Total report: ~400 lines
