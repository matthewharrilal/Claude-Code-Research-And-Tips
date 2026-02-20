# 08 — Enriched Pipeline Diagram: Before and After Compositional Intelligence Stack

**Author:** Diagram Evolution Designer
**Date:** 2026-02-20
**Input:** SKILL.md (408 lines), conventions-brief.md (403 lines), gate-runner.md (992 lines), flagship-pa-questions.md (144 lines), PV2-PIPELINE-DIAGRAM.md (1,355 lines)

---

## Executive Summary

The current pipeline (SKILL.md `/build-page`) already incorporates many compositional intelligence concepts from the PV2 investigation. The conventions brief contains multi-coherence, fractal echo, anti-scale, and channel vocabulary. But the stack is **distributed across prose documents** rather than **structurally enforced at each stage**. The enrichment question is: what changes when the 5-layer compositional intelligence stack becomes a first-class architectural element at every pipeline stage?

**Key findings:**
1. **Two new stages** appear (Scale Verification Gate, Channel Coherence Pre-Check)
2. **Three existing stages fundamentally change** (Builder input, Gate Runner, PA question routing)
3. **Information flow shifts** from document-centric to stack-layer-centric
4. **The 26%/74% gate/PA split shifts to approximately 40%/60%** as gates gain L2-L4 enforcement
5. **Complexity ceiling exists at approximately 25 gates** -- beyond that, gate maintenance cost exceeds detection value

---

## A. CURRENT PIPELINE (Baseline)

This diagram reflects the ACTUAL implemented pipeline as codified in SKILL.md (the `/build-page` skill), NOT the theoretical PV2 diagram.

```
THE COMPOSITIONAL INTELLIGENCE STACK (exists in PROSE, not in STRUCTURE)
═══════════════════════════════════════════════════════════════════════════

  L5: Anti-Scale Model ........ conventions-brief.md Section 3 (text)
  L4: Multi-Coherence ......... conventions-brief.md Section 4 (text) + SC-13 gate
  L3: 6 Channels .............. conventions-brief.md Section 4 (text, named)
  L2: 5 Scales ................ conventions-brief.md Section 5 (text)
  L1: Perception Thresholds ... conventions-brief.md Section 2 (text) + SC-09/10/11/14 gates

  STATUS: L1 has programmatic enforcement. L4 has partial enforcement (SC-13).
          L2, L3, L5 are TEXT ONLY -- they survive or die based on builder attention.


CURRENT PIPELINE FLOW
═══════════════════════════════════════════════════════════════════════════

  USER: /build-page content.md
         |
         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 1: INTAKE                                         │
  │  Parse content source, create output directory           │
  │                                                          │
  │  Intelligence present: NONE                              │
  │  Stack layers active:  NONE                              │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 2: BUILDER DEPLOYMENT (Wave 1)                    │
  │  Single Opus agent                                       │
  │                                                          │
  │  READS (in order):                                       │
  │  1. conventions-brief.md (403 lines)                     │
  │     - Contains L1-L5 as PROSE sections                   │
  │     - Section 2: Perception thresholds (L1)              │
  │     - Section 3: Anti-scale model (L5)                   │
  │     - Section 4: Multi-coherence (L4) + Channels (L3)   │
  │     - Section 5: Fractal echo / Scales (L2)             │
  │  2. Content file                                         │
  │  3. mechanism-catalog.md (reference)                     │
  │  4. components.css (reference)                           │
  │  5. tokens.css (reference)                               │
  │  6. prohibitions.md (soul constraints)                   │
  │                                                          │
  │  PRODUCES:                                               │
  │  - output.html                                           │
  │  - _build-log.md (conviction, fractal echo table,        │
  │    transition plan, overrides, midpoint reflection)      │
  │  - _cascade-value-table.md                               │
  │                                                          │
  │  Builder self-checks at 4 checkpoints:                   │
  │  [1] After HTML: >= 3 ARIA, skip link, >= 8 components  │
  │  [2] After zone bg: all adjacent bg deltas >= 15 RGB    │
  │  [3] After borders: >= 1 border-left 3px+, >= 2 weights │
  │  [4] After typography: heading/meta ratio >= 3:1         │
  │                                                          │
  │  Intelligence present: FULL (conventions brief = L1-L5)  │
  │  Stack layers active:  L1-L5 via PROSE (no enforcement)  │
  │  RISK: Builder attention determines which layers survive │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 3: GATE RUNNER (Orchestrator runs directly)       │
  │  Playwright + getComputedStyle                           │
  │                                                          │
  │  12 composition-critical gates:                          │
  │                                                          │
  │  IDENTITY (L1):                                          │
  │    SC-01  Container width         940-960px              │
  │    SC-02  Soul properties         radius:0, shadow:none  │
  │    SC-03  Font trinity            3 allowed fonts        │
  │    SC-04  Warm palette            R >= G >= B            │
  │    SC-05  No pure B/W             No #000 or #FFF        │
  │                                                          │
  │  STRUCTURE:                                              │
  │    SC-06  ARIA landmarks          >= 5                   │
  │    SC-07  Skip link               present                │
  │    SC-08  Component classes       >= 8 types             │
  │                                                          │
  │  PERCEPTION (L1):                                        │
  │    SC-09  Background delta        >= 15 RGB adjacent     │
  │    SC-10  Stacked gap             <= 120px total         │
  │    SC-11  Typography zones        >= 3 distinct zones    │
  │                                                          │
  │  COMPOSITIONAL (L4 partial):                             │
  │    SC-13  Multi-coherence         >= 3 channels shift    │
  │                                    avg >= 4 across all   │
  │                                                          │
  │  ADVISORY:                                               │
  │    SC-13B Direction coherence     >= 50% boundaries      │
  │    SC-16  Monotonic progression   >= 1 property          │
  │                                                          │
  │  DELIVERABLE:                                            │
  │    DG-1   Fractal echo table      5 rows, evidence      │
  │    DG-2   Cascade value table     all boundaries         │
  │    DG-4   Handoff validation      5 sub-checks           │
  │                                                          │
  │  Intelligence present: L1 FULL, L4 PARTIAL (SC-13)       │
  │  Stack layers active:                                     │
  │    L1 ████████████████████ FULL (SC-09/10/11)            │
  │    L2 ██░░░░░░░░░░░░░░░░░ MINIMAL (DG-1 checks table   │
  │       exists but NOT whether scales are perceptible)     │
  │    L3 ████░░░░░░░░░░░░░░░ LOW (SC-09=Chromatic,         │
  │       SC-11=Typographic; Spatial/Structural/Behavioral/  │
  │       Material channels NOT individually verified)       │
  │    L4 ████████░░░░░░░░░░░ MODERATE (SC-13 counts but    │
  │       cannot judge semantic DIRECTION coherence)         │
  │    L5 ░░░░░░░░░░░░░░░░░░░ ABSENT (judgment domain)      │
  │                                                          │
  │  THE GAP: Gates enforce that channels SHIFT but not      │
  │  that they shift TOGETHER in the SAME DIRECTION.         │
  │  Gates verify fractal table EXISTS but not whether the   │
  │  pattern is PERCEPTIBLE at each scale. The stack is      │
  │  measured in fragments, not as a coherent whole.         │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 4: SCREENSHOT CAPTURE                             │
  │  Orchestrator captures at 1440/1024/768px                │
  │  Full-page + scroll-through at 80% viewport steps        │
  │                                                          │
  │  Intelligence present: NONE (mechanical capture)         │
  │  Stack layers active:  NONE                              │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 4.5: LOCK SHEET                                   │
  │  Categorize elements as LOCKED/CHALLENGEABLE             │
  │  Route to weaver ONLY (not PA auditors)                  │
  │                                                          │
  │  Intelligence present: Classification only               │
  │  Stack layers active:  NONE                              │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 5: PA DEPLOYMENT (Mode 4)                         │
  │  9 Opus auditors + 1 Opus weaver                         │
  │                                                          │
  │  48 standard questions + 8 Tier 5 questions = 56 total   │
  │                                                          │
  │  QUESTION DISTRIBUTION:                                  │
  │  A: Impression+Emotion    (PA-01,04,05,18,19,20,45,65,67)│
  │  B: Readability+Typography (PA-02,06,07,08,29)           │
  │  C: Spatial+Proportion    (PA-09..53,64,66) -- 13 Qs    │
  │  D: Flow+Pacing           (PA-12,13,34,35,36,62)        │
  │  E: Grid+Layout           (PA-14,15,37,38,39,63)        │
  │  F: Consistency+Rhythm    (PA-16,17,40,41,60,61)        │
  │  G: Metaphor+Ideology     (PA-42,43,44)                 │
  │  H: Responsive            (PA-21,22,23,46,47)           │
  │  I: Adversarial            (PA-26,27,28,48)             │
  │                                                          │
  │  Tier 5 questions detect compositional depth:            │
  │  PA-60: Design moment density (>= 3 distinct moments)   │
  │  PA-61: Multi-voice composition (channel independence)   │
  │  PA-62: Transition variation (dynamic range)             │
  │  PA-63: Fractal zoom coherence (scale echo)              │
  │  PA-64: Restraint as expression (designed quiet)         │
  │  PA-65: Music analogy (ensemble assessment)              │
  │  PA-66: Negative space variety (gap composition)         │
  │  PA-67: Novelty beyond competence (creative surprise)    │
  │                                                          │
  │  Intelligence present: PERCEPTUAL (human-like judgment)  │
  │  Stack layers active:                                     │
  │    L1 ░░░░░░░░░░░░░░░░░░░ ABSENT (correct -- PA        │
  │       measures perception, not numbers)                  │
  │    L2 ████████░░░░░░░░░░░ MODERATE (PA-63 detects       │
  │       fractal echo when present)                         │
  │    L3 ████████░░░░░░░░░░░ MODERATE (auditors perceive   │
  │       channel variety when present)                      │
  │    L4 ████████████████░░░ HIGH (PA-61, PA-62 directly   │
  │       detect multi-coherence and dynamic range)          │
  │    L5 ████████░░░░░░░░░░░ MODERATE (PA-64, PA-65        │
  │       detect density x restraint intuitively)            │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 6: FIX CYCLE (max 3)                              │
  │  Gate failures: structured CSS fix recipes               │
  │  PA issues: top-5 ranked by severity                     │
  │  Cycle 1: full 9 PA | Cycle 2-3: 2 PA (A + C)          │
  │                                                          │
  │  Intelligence present: Fix routing                       │
  │  Stack layers active:  Inherits from gate + PA stages    │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 7: VERDICT                                        │
  │  PA-05 >= 3.5 AND Tier 5 >= 6/8 AND criteria MET = SHIP│
  │  PA-05 3.0-3.4 = FIX | PA-05 < 3.0 = REBUILD           │
  │                                                          │
  │  Intelligence present: Binary decision                   │
  │  Stack layers active:  NONE (terminal)                   │
  └──────────────────────────────────────────────────────────┘


INTELLIGENCE SURVIVAL HEATMAP (CURRENT)
═══════════════════════════════════════════════════════════════════════════

                    L1         L2         L3         L4         L5
                    Percep.    Scales     Channels   Multi-C.   Anti-Sc.
  STAGE             Thresh.    (5 lvl)    (6 CSS)    Coher.     Model
  ══════════════    ═══════    ═══════    ════════   ═══════    ══════

  Conventions       [#####]    [####.]    [####.]    [####.]    [###..]
  Brief (input)     FULL       HIGH       HIGH       HIGH       MODERATE

  Builder Agent     [####.]    [??..]     [??..]     [??..]     [?....]
  (execution)       HIGH       UNKNOWN    UNKNOWN    UNKNOWN    UNKNOWN

  Gate Runner       [#####]    [#....]    [##...]    [###..]    [.....]
  (12 blocking)     FULL       MINIMAL    LOW        MODERATE   ABSENT

  PA Auditors       [.....]+   [###..]    [###..]    [####.]    [###..]
  (9 fresh eyes)    ABSENT+    MODERATE   MODERATE   HIGH       MODERATE

  LEGEND: [#####] FULL  [####.] HIGH  [###..] MODERATE
          [##...] LOW   [#....] MINIMAL  [.....] ABSENT
          [??..]  DEPENDS ON BUILDER (no enforcement)
          +  = Correct: PA measures perception, not numbers

  THE STORY: Intelligence ENTERS as full-spectrum prose in the conventions
  brief, then DEPENDS ON BUILDER ATTENTION through execution. Gates catch
  L1 reliably and L4 partially (channel count, not direction). L2, L3,
  and L5 have NO programmatic enforcement -- they either survive through
  the builder's compositional skill or they don't. PA catches L2-L5 after
  the fact, but by then it's fix-cycle territory.
```

---

## B. ENRICHED PIPELINE (With Full Compositional Intelligence Stack)

This diagram shows what the pipeline would look like if the 5-layer stack were structurally enforced at every stage, not merely described in prose.

```
THE COMPOSITIONAL INTELLIGENCE STACK (STRUCTURAL, not just prose)
═══════════════════════════════════════════════════════════════════════════

  L5: Anti-Scale Model                                          ◄── UNCHANGED
      Richness = semantic density x restraint x spatial confidence
      STATUS: Still judgment-domain. Cannot be programmatically gated.
      PA-64 + PA-65 remain the only detection mechanism.
      NEW: Builder self-test questions codified as MANDATORY deliverable.

  L4: Multi-Coherence                                           ◄── CHANGED
      >= 3 channels shift together at each boundary,
      in the SAME semantic direction.
      STATUS: SC-13 enforces count. NEW: SC-13C enforces direction
      agreement via semantic direction labels in transition table.

  L3: 6 Channels                                                ◄── CHANGED
      Chromatic | Typographic | Spatial | Structural |
      Behavioral | Material
      STATUS: NEW: Per-channel verification gates. Each channel
      independently measured at every zone boundary. Channel
      COVERAGE gate ensures >= 4 of 6 channels deployed.

  L2: 5 Scales                                                  ◄── CHANGED
      Navigation | Page | Section | Component | Character
      STATUS: NEW: Scale perceptibility gate. Each scale must have
      MEASURABLE CSS expression, not just a table row claiming it.
      DG-1 upgraded from "table exists" to "CSS evidence verifiable."

  L1: Perception Thresholds                                     ◄── UNCHANGED
      >= 15 RGB | >= 2px font | >= 0.03em spacing | <= 120px gap
      STATUS: Fully enforced by SC-09/10/11/14. No changes needed.


ENRICHED PIPELINE FLOW
═══════════════════════════════════════════════════════════════════════════

  USER: /build-page content.md
         |
         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 1: INTAKE (UNCHANGED)                             │
  │  Parse content source, create output directory           │
  │                                                          │
  │  Intelligence present: NONE                              │
  │  Stack layers active:  NONE                              │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 2: BUILDER DEPLOYMENT (Wave 1)        ◄── CHANGED │
  │  Single Opus agent                                       │
  │                                                          │
  │  READS (in order -- UNCHANGED file set):                 │
  │  1. conventions-brief.md (403 lines)                     │
  │  2. Content file                                         │
  │  3. mechanism-catalog.md (reference)                     │
  │  4. components.css (reference)                           │
  │  5. tokens.css (reference)                               │
  │  6. prohibitions.md (soul constraints)                   │
  │                                                          │
  │  PRODUCES (CHANGED -- 2 new mandatory deliverables):     │
  │  - output.html                                           │
  │  - _build-log.md (conviction, fractal echo table,        │
  │    transition plan, overrides, midpoint reflection)      │
  │  - _cascade-value-table.md                               │
  │  - _transition-table.yaml           ◄── NEW DELIVERABLE  │
  │    Per-boundary x 6-channel YAML with:                   │
  │    exact CSS before/after, delta, semantic direction,    │
  │    channel count. Machine-parseable.                     │
  │  - _anti-scale-self-test.md         ◄── NEW DELIVERABLE  │
  │    3 questions answered YES/NO with evidence:            │
  │    Q1: Does every section earn its visual weight?        │
  │    Q2: Could you remove a CSS rule without losing        │
  │        meaning?                                          │
  │    Q3: Does restraint create more impact than addition?  │
  │                                                          │
  │  Builder self-checks at 4 checkpoints (UNCHANGED):       │
  │  [1] After HTML: >= 3 ARIA, skip link, >= 8 components  │
  │  [2] After zone bg: all adjacent bg deltas >= 15 RGB    │
  │  [3] After borders: >= 1 border-left 3px+, >= 2 weights │
  │  [4] After typography: heading/meta ratio >= 3:1         │
  │                                                          │
  │  Intelligence present: FULL (conventions brief = L1-L5)  │
  │  Stack layers active:  L1-L5 via prose + L3/L4 via       │
  │  mandatory transition table artifact (STRUCTURED output) │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 2.5: TRANSITION TABLE VALIDATION  ◄── NEW STAGE   │
  │  Programmatic check of _transition-table.yaml            │
  │  BEFORE full gate run (fast, ~30 seconds)                │
  │                                                          │
  │  Validates:                                              │
  │  [TV-1] YAML parses correctly                            │
  │  [TV-2] One entry per zone boundary (N-1 for N zones)   │
  │  [TV-3] All 6 channels have before/after values          │
  │  [TV-4] >= 3 channels show delta above perception at     │
  │         every boundary (pre-computed channel count)      │
  │  [TV-5] Semantic direction labels present at every       │
  │         boundary (DEEPENING/OPENING/FOCUSING/RESOLVING) │
  │  [TV-6] Direction consistency: >= 50% of channels at     │
  │         each boundary agree with stated direction        │
  │                                                          │
  │  FAIL on TV-1 through TV-4 = builder re-work             │
  │  ADVISORY on TV-5, TV-6 = warning passed to gate runner │
  │                                                          │
  │  WHY THIS STAGE: The transition table is the PRIMARY     │
  │  vehicle for L3 (channels) and L4 (multi-coherence)      │
  │  crossing the builder boundary. Validating it before     │
  │  the expensive gate run catches plan-vs-execution        │
  │  mismatches early (~30 sec vs ~15 min).                  │
  │                                                          │
  │  Intelligence present: L3+L4 STRUCTURAL enforcement      │
  │  Stack layers active:                                     │
  │    L1 ░░░░░░░░░░░░░░░░░░░ (not checked here)            │
  │    L2 ░░░░░░░░░░░░░░░░░░░ (not checked here)            │
  │    L3 ████████████████░░░ HIGH (6-channel completeness)  │
  │    L4 ████████████████░░░ HIGH (channel count + dir.)    │
  │    L5 ░░░░░░░░░░░░░░░░░░░ (not checked here)            │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 3: GATE RUNNER (ENRICHED)             ◄── CHANGED │
  │  Playwright + getComputedStyle                           │
  │                                                          │
  │  EXISTING 12 gates (UNCHANGED):                          │
  │    SC-01 through SC-11, SC-13                            │
  │    SC-13B (advisory), SC-16 (advisory)                   │
  │    DG-1, DG-2, DG-4                                      │
  │                                                          │
  │  NEW GATES (6 additional):                  ◄── NEW       │
  │                                                          │
  │  CHANNEL COVERAGE (L3):                                  │
  │    SC-17  Channel deployment      ◄── NEW                │
  │           Count how many of the 6 channels are           │
  │           actually USED across the page.                 │
  │           PASS: >= 4 of 6 channels deployed              │
  │           (Chromatic + Typographic mandatory;             │
  │           2+ of Spatial/Structural/Behavioral/Material)  │
  │           Check: measure each channel independently      │
  │           across all zones. A channel is "deployed" if   │
  │           it shows perceptible variation.                 │
  │                                                          │
  │  SCALE PERCEPTIBILITY (L2):                              │
  │    SC-18  Scale coverage          ◄── NEW                │
  │           Cross-reference DG-1 fractal echo table CSS    │
  │           evidence against COMPUTED styles.               │
  │           For each of 5 scales, verify the claimed CSS   │
  │           property is actually present in the DOM.        │
  │           PASS: >= 3 of 5 scales have VERIFIABLE CSS     │
  │           FAIL: < 3 scales verified, or table claims     │
  │           CSS that doesn't exist in computed styles.     │
  │           This closes the gap between "table says it"    │
  │           and "page shows it."                           │
  │                                                          │
  │  DIRECTION AGREEMENT (L4):                               │
  │    SC-13C Multi-coherence direction ◄── NEW              │
  │           At each zone boundary, classify each           │
  │           shifting channel as INTENSIFYING (+) or        │
  │           RELAXING (-). Report agreement percentage.     │
  │           PASS: >= 60% of boundaries have >= 3           │
  │           channels agreeing in direction                  │
  │           ADVISORY UPGRADE: SC-13B promoted from         │
  │           advisory to blocking at 60% threshold.         │
  │           (SC-13B at 50% remains advisory for logging.)  │
  │                                                          │
  │  SUB-PERCEPTUAL ENFORCEMENT (L1, expanded):              │
  │    SC-14B Padding micro-clustering  ◄── NEW              │
  │           Adjacent sorted padding values must differ     │
  │           by >= 8px. Prevents padding 47/48/49/50px      │
  │           (technically 4 values, perceptually identical). │
  │                                                          │
  │  ANTI-SCALE PROXIES (L5, best-effort):                   │
  │    SC-19  Component density variance ◄── NEW             │
  │           Measure component count per viewport-height.   │
  │           PASS: at least 2 viewport screens have         │
  │           different component densities (variance > 0).  │
  │           This is a PROXY for "semantic density" --      │
  │           the best programmatic approximation of L5.     │
  │           ADVISORY only (L5 is fundamentally judgment).  │
  │                                                          │
  │    SC-20  Restraint signature       ◄── NEW              │
  │           Check if any zone has FEWER mechanisms than    │
  │           its neighbors (density trough = designed       │
  │           quiet). Count mechanisms per zone.             │
  │           PASS: at least 1 zone has mechanism count      │
  │           < 50% of the maximum zone.                     │
  │           ADVISORY only (restraint is judgment).          │
  │                                                          │
  │  TOTAL: 18 blocking + 4 advisory = 22 gates             │
  │  (was:  15 blocking + 2 advisory = 17 gates)            │
  │                                                          │
  │  Intelligence present: L1 FULL, L2 NEW, L3 NEW, L4 HIGH │
  │  Stack layers active:                                     │
  │    L1 ████████████████████ FULL (SC-09/10/11/14/14B)     │
  │    L2 ████████████░░░░░░░ MODERATE-HIGH (SC-18 cross-   │
  │       references fractal table against computed CSS)     │
  │    L3 ████████████████░░░ HIGH (SC-17 per-channel       │
  │       deployment + TV-3 completeness)                    │
  │    L4 ████████████████░░░ HIGH (SC-13 count +           │
  │       SC-13C direction agreement)                        │
  │    L5 ████░░░░░░░░░░░░░░░ LOW (SC-19/SC-20 proxies,    │
  │       advisory only -- L5 is fundamentally judgment)    │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 4: SCREENSHOT CAPTURE (UNCHANGED)                 │
  │  Orchestrator captures at 1440/1024/768px                │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 4.5: LOCK SHEET (UNCHANGED)                       │
  │  Categorize elements as LOCKED/CHALLENGEABLE             │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 5: PA DEPLOYMENT (CHANGED)            ◄── CHANGED │
  │  9 Opus auditors + 1 Opus weaver                         │
  │                                                          │
  │  48 standard + 8 Tier 5 = 56 questions (UNCHANGED count) │
  │                                                          │
  │  WHAT CHANGES: Stack-aligned question routing             │
  │                                                          │
  │  Currently, auditor assignments are by ROLE               │
  │  (Impression, Readability, Spatial, etc.).                │
  │  Enrichment adds STACK LAYER ANNOTATIONS to each         │
  │  question so the weaver can synthesize by layer:         │
  │                                                          │
  │  LAYER ANNOTATIONS (added to weaver synthesis):          │
  │                                                          │
  │  L1 (Perception):                                        │
  │    PA-09,10,11 (bg delta, void patterns)                 │
  │    PA-50,51,52,53 (spacing assessment)                   │
  │                                                          │
  │  L2 (Scales):                                            │
  │    PA-63 (fractal zoom coherence)           ◄── PRIMARY   │
  │    PA-14,15 (component internal design)     ◄── SUPPORT   │
  │    PA-42 (metaphor expression across scales) ◄── SUPPORT │
  │                                                          │
  │  L3 (Channels):                                          │
  │    PA-62 (transition variation = channel count) ◄── PRIM. │
  │    PA-16,17 (visual rhythm = channel deployment)         │
  │    PA-06,07,08 (typography = Typographic channel)        │
  │                                                          │
  │  L4 (Multi-Coherence):                                   │
  │    PA-61 (multi-voice composition)          ◄── PRIMARY   │
  │    PA-65 (music analogy = ensemble assessment)           │
  │    PA-60 (design moment density)            ◄── SUPPORT   │
  │                                                          │
  │  L5 (Anti-Scale):                                        │
  │    PA-64 (restraint as expression)          ◄── PRIMARY   │
  │    PA-67 (novelty beyond competence)        ◄── PRIMARY   │
  │    PA-05 (overall designed assessment)       ◄── GOVERNS  │
  │                                                          │
  │  WEAVER SYNTHESIS CHANGE:                   ◄── CHANGED   │
  │  The weaver produces a new section in _pa-report.md:    │
  │                                                          │
  │  "STACK LAYER ASSESSMENT"                                │
  │  For each layer L1-L5, aggregate PA answers from the    │
  │  annotated questions into a per-layer verdict:          │
  │  L1: [MET/FAILED] (perception thresholds)               │
  │  L2: [STRONG/MODERATE/WEAK] (scale coverage)            │
  │  L3: [STRONG/MODERATE/WEAK] (channel deployment)        │
  │  L4: [COHERENT/PARTIAL/ABSENT] (multi-coherence)        │
  │  L5: [DESIGNED/COMPOSED/FLAT] (anti-scale model)        │
  │                                                          │
  │  This gives the fix cycle ACTIONABLE stack-layer         │
  │  diagnostics: "L3 is WEAK -- channels shift but only    │
  │  Chromatic and Typographic are deployed" instead of      │
  │  generic "the page feels monotonous."                    │
  │                                                          │
  │  Intelligence present: PERCEPTUAL + STACK-ALIGNED         │
  │  Stack layers active:                                     │
  │    L1 ░░░░░░░░░░░░░░░░░░░ ABSENT (correct)              │
  │    L2 ████████████░░░░░░░ MODERATE-HIGH (PA-63 primary  │
  │       + annotated support questions)                     │
  │    L3 ████████████░░░░░░░ MODERATE-HIGH (PA-62 primary  │
  │       + annotated support questions)                     │
  │    L4 ████████████████░░░ HIGH (PA-61, PA-65 primary)   │
  │    L5 ████████████░░░░░░░ MODERATE-HIGH (PA-64, PA-67   │
  │       primary + PA-05 governing)                         │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 6: FIX CYCLE (CHANGED)                ◄── CHANGED │
  │  max 3 cycles                                            │
  │                                                          │
  │  WHAT CHANGES: Stack-layer-routed fix instructions       │
  │                                                          │
  │  Fix instructions now include STACK LAYER context:       │
  │                                                          │
  │  FIX INSTRUCTION FORMAT (enriched):                      │
  │  ┌───────────────────────────────────────────────┐       │
  │  │ ## LAYER DIAGNOSIS                            │       │
  │  │ L1: MET | L2: WEAK | L3: MODERATE |           │       │
  │  │ L4: PARTIAL | L5: FLAT                         │       │
  │  │                                                │       │
  │  │ ## PRIORITY ORDER (weakest layer first)       │       │
  │  │ 1. L2 (Scales): Only 2/5 scales perceptible.  │       │
  │  │    FIX: Component-scale pattern needs internal │       │
  │  │    padding that echoes page-level density arc. │       │
  │  │ 2. L4 (Multi-Coherence): Boundaries 2-3 have  │       │
  │  │    contradicting channel directions.           │       │
  │  │    FIX: Background darkens but spacing opens - │       │
  │  │    align spacing to compress at boundary 2-3.  │       │
  │  │ 3. [Gate failures with CSS recipes]            │       │
  │  │ 4. [PA top-5 issues]                          │       │
  │  └───────────────────────────────────────────────┘       │
  │                                                          │
  │  This prevents the common failure mode where the builder │
  │  fixes individual symptoms without addressing the        │
  │  underlying layer deficiency. "Fix the border" is less   │
  │  useful than "L3 Structural channel is absent -- borders │
  │  are the primary vehicle for this channel."              │
  │                                                          │
  │  Intelligence present: Stack-layer diagnostics            │
  │  Stack layers active:  All layers diagnosed               │
  └──────────────────────┬───────────────────────────────────┘
                         |
                         v
  ┌──────────────────────────────────────────────────────────┐
  │  STAGE 7: VERDICT (CHANGED)                  ◄── CHANGED │
  │                                                          │
  │  EXISTING criteria (UNCHANGED):                          │
  │  PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul           │
  │  violations AND zero void patterns AND metaphor          │
  │  STRUCTURAL AND multi-coherence verified AND             │
  │  scale coverage verified                                 │
  │                                                          │
  │  NEW: Stack-layer summary in verdict:       ◄── NEW      │
  │  The run manifest now includes:                          │
  │                                                          │
  │  STACK PROFILE:                                          │
  │  L1 (Perception):     PASS/FAIL + gate evidence          │
  │  L2 (Scales):         STRONG/MODERATE/WEAK + SC-18 data │
  │  L3 (Channels):       STRONG/MODERATE/WEAK + SC-17 data │
  │  L4 (Multi-Coherence):COHERENT/PARTIAL/ABSENT + SC-13C  │
  │  L5 (Anti-Scale):     DESIGNED/COMPOSED/FLAT + PA data  │
  │                                                          │
  │  This gives the user a DIAGNOSTIC FINGERPRINT:           │
  │  "Your page is L1:PASS L2:STRONG L3:MODERATE L4:PARTIAL │
  │  L5:COMPOSED" is more actionable than "PA-05 = 3.2"     │
  └──────────────────────────────────────────────────────────┘
```

---

## C. ANALYSIS: Four Questions Answered

### Q1: Would new STAGES appear? New FILES? Would existing stages CHANGE?

**New stages: 1**
- **Stage 2.5: Transition Table Validation** -- a fast (~30 sec) programmatic check of the builder's transition table YAML before the expensive gate run. This catches L3/L4 plan-vs-execution mismatches early.

**New files: 2 mandatory builder deliverables**
- `_transition-table.yaml` -- machine-parseable 6-channel boundary specification
- `_anti-scale-self-test.md` -- 3-question L5 self-assessment

**Changed stages: 4**
- **Stage 2 (Builder):** Two new mandatory deliverables. Same input files.
- **Stage 3 (Gate Runner):** 6 new gates (SC-17, SC-18, SC-13C, SC-14B, SC-19, SC-20). 15 blocking + 2 advisory becomes 18 blocking + 4 advisory.
- **Stage 5 (PA):** Stack-layer annotations on existing questions. Weaver produces per-layer assessment. No new questions.
- **Stage 6 (Fix Cycle):** Stack-layer-routed fix instructions. Weakest layer addressed first.
- **Stage 7 (Verdict):** Stack profile included in run manifest.

**Unchanged stages: 3**
- Stage 1 (Intake), Stage 4 (Screenshot), Stage 4.5 (Lock Sheet)

### Q2: Would the information flow change?

**Yes, in two ways:**

**A. New feedback loop: Transition Table Validation -> Builder**
```
  Builder                Gate Runner
    |                        |
    |-- _transition-table.yaml --->  Stage 2.5 (NEW)
    |                        |          |
    |<-- FAIL: re-work ------+          |  (fast, 30 sec)
    |                        |          |
    |-- output.html -------->+--------> Stage 3 (gates)
```

Currently, the builder produces output and gates check it. With enrichment, there is an intermediate checkpoint on the transition table artifact BEFORE the full gate run. This is cheaper than catching channel/coherence failures at the gate stage.

**B. Stack-layer routing in fix instructions**
```
  CURRENT:   PA top-5 issues → builder (symptom-level fixes)
  ENRICHED:  Layer diagnosis → priority-ordered layer fixes → builder
             (structural fixes addressing root layer deficiencies)
```

Instead of "fix the border at section 3," the builder gets "L3 Structural channel is absent -- borders are the primary vehicle."

### Q3: Would the 26%/74% gate/PA quality split change?

**Yes: approximately 40%/60% after enrichment.**

The current gate suite catches L1 reliably (~26% of compositional quality). The enriched gates add:

| New Gate | Layer | What It Catches | Quality% Gained |
|----------|-------|-----------------|-----------------|
| SC-17 | L3 | Channel deployment coverage | ~3% |
| SC-18 | L2 | Scale perceptibility verification | ~4% |
| SC-13C | L4 | Direction coherence (promoted from advisory) | ~5% |
| SC-14B | L1 | Padding micro-clustering | ~1% |
| SC-19 | L5 | Component density variance (advisory) | ~1% |
| SC-20 | L5 | Restraint signature (advisory) | ~1% |
| TV-1-6 | L3/L4 | Transition table structural validity | ~2% |

**Estimated new split: ~40% gate-detectable / ~60% PA-required.**

The remaining 60% is irreducibly perceptual:
- Semantic DIRECTION of coherence (gates count agreement but cannot judge "rightness")
- Content-form RESONANCE (does the visual treatment fit the content?)
- Proportional INTELLIGENCE (is the right AMOUNT of weight used?)
- Creative SURPRISE (the unexpected-yet-perfect quality)
- EMERGENT coherence (the whole exceeding its parts)

These are L5 properties that no programmatic gate can capture. The PA split will never go below approximately 50% -- that is the floor of human judgment in compositional assessment.

### Q4: What does pipeline evolution look like OVER TIME? Is there a complexity ceiling?

**Yes. The complexity ceiling is approximately 22-25 gates.**

```
PIPELINE EVOLUTION TRAJECTORY
═══════════════════════════════════════════════════════════════════════════

  Gate    Quality        Gate         Marginal
  Count   Caught (%)     Maint.       Value
  ──────  ───────────    ────────     ────────
   12     ~26%           LOW          HIGH          ← CURRENT
   15     ~33%           LOW          MODERATE
   18     ~38%           MODERATE     MODERATE      ← ENRICHED (blocking)
   22     ~42%           MODERATE     LOW           ← ENRICHED (all)
   25     ~44%           HIGH         DIMINISHING   ← CEILING
   30+    ~45%           VERY HIGH    NEAR-ZERO     ← OVER-ENGINEERING

  SHAPE: Logarithmic. Massive gains from 0->12 gates. Moderate from
  12->22. Diminishing from 22->25. Negative returns beyond 25.

  WHY THE CEILING:
  - Each new gate must be MAINTAINED (updated when conventions change)
  - Each new gate adds ~30 sec to gate run time
  - False positive rate compounds with gate count
  - Beyond 25, gates start testing for things that are better
    caught by PA (trying to programmatize judgment)
  - Gate interdependencies create fragile chains

  THE OPTIMAL OPERATING POINT: 18-22 gates
  - Catches L1 fully, L2/L3/L4 at moderate-high confidence
  - L5 remains PA-only (correct -- it's judgment)
  - Gate run time stays under 2 minutes
  - Maintenance cost is manageable
  - False positive rate is low


PIPELINE EVOLUTION OVER TIME (predicted trajectory)
═══════════════════════════════════════════════════════════════════════════

  PHASE 1 (current): FOUNDATION
    12 blocking gates, conventions brief as prose
    Quality floor: prevents FLAT (1.5/4)
    PA does ~74% of quality work
    Cost: ~$20-60/page

  PHASE 2 (enrichment): STRUCTURAL ENFORCEMENT
    18-22 gates, transition table as structured artifact
    Quality floor: prevents STYLED-ONLY (2.5/4)
    PA does ~60% of quality work
    Cost: ~$25-70/page (gate dev + maintenance)
    NET VALUE: Fewer fix cycles (gates catch more pre-PA)

  PHASE 3 (maturity): CALIBRATION
    After 10-20 pages, calibrate thresholds empirically
    Remove gates that never fire (waste)
    Tighten gates that fire too often (too loose)
    Gate count likely DECREASES to 15-18 (optimal set)
    Cost stabilizes at ~$20-50/page

  PHASE 4 (steady state): MINIMAL VIABLE GATES
    Empirically validated gate set (~15 gates)
    Known false positive rates per gate
    Per-content-type threshold adjustments
    Focus shifts from MORE gates to BETTER gates

  THE ANTI-PATTERN TO AVOID:
    Adding gates after every failure without retiring old ones.
    This is the "complexity ratchet" identified in prior research.
    Every gate added must justify its existence with data:
    - How often does it fire?
    - When it fires, does fixing it improve PA-05?
    - Could PA catch this equally well without the gate?
    If any answer is unfavorable, retire the gate.
```

---

## D. SUMMARY: What Changes and What Doesn't

```
CHANGE INVENTORY
═══════════════════════════════════════════════════════════════════════════

  CATEGORY        CURRENT              ENRICHED             DELTA
  ──────────────  ───────────────────  ───────────────────  ──────────

  Stages          7                    8                    +1 (TV)
  Builder files   3 deliverables       5 deliverables       +2
  Gates total     17 (15 block + 2 adv) 22 (18 block + 4 adv) +5
  PA questions    56                   56                   0
  PA annotations  0                    56 (layer tags)      +56 tags
  Weaver sections 6                    7                    +1 (stack)
  Fix format      Symptom-based        Layer-based          CHANGED
  Verdict         Score-based          Score + stack profile CHANGED
  Files changed   0                    3 (gate-runner.md,   +3
                                       SKILL.md, weaver
                                       prompt template)
  Files added     0                    0                    0
  Gate/PA split   26% / 74%           ~40% / 60%           +14% gate

  WHAT DOES NOT CHANGE:
  - Builder input files (same 6 files, same reading order)
  - Builder model (Opus, always)
  - PA auditor count (9 + 1 weaver)
  - PA question text (unchanged)
  - Screenshot capture process
  - Lock sheet process
  - Fix cycle limit (max 3)
  - Success bar (PA-05 >= 3.5, Tier 5 >= 6/8)
  - Conventions brief content (prose already has L1-L5)
  - Cost per page (~$20-60, marginal increase from extra gates)

  WHAT ABSOLUTELY SHOULD NOT CHANGE:
  - L5 should NEVER become a blocking gate (it's judgment)
  - PA auditors should NEVER receive stack-layer context
    (they must remain fresh-eyes, perceptual-language-only)
  - Gate count should NEVER exceed 25 (complexity ceiling)
  - The conventions brief should NOT grow (already 403 lines;
    the enrichment goes into GATES and DELIVERABLES, not
    into more prose for the builder to read)

  THE PRINCIPLE:
  Enrichment goes into VERIFICATION (more gates, better diagnostics)
  and STRUCTURED ARTIFACTS (transition table YAML),
  NOT into MORE TEXT FOR THE BUILDER.
  Builder input volume inversely correlates with quality.
  Add structure to outputs, not volume to inputs.
```

---

## E. BIRD'S EYE VIEW: Current vs Enriched

```
CURRENT                                 ENRICHED
═══════════════════                     ═══════════════════

  /build-page                             /build-page
       |                                       |
       v                                       v
  [INTAKE]                                [INTAKE]
       |                                       |
       v                                       v
  [BUILDER] ──> 3 files                   [BUILDER] ──> 5 files    ◄── +2
       |                                       |
       |                                       v
       |                                  [TV VALIDATION] ◄── NEW STAGE
       |                                       |
       v                                       v
  [GATES: 17]                             [GATES: 22]              ◄── +5
  L1████ L2░ L3█ L4██ L5░               L1████ L2███ L3████ L4████ L5█
       |                                       |
       v                                       v
  [SCREENSHOTS]                           [SCREENSHOTS]
       |                                       |
       v                                       v
  [LOCK SHEET]                            [LOCK SHEET]
       |                                       |
       v                                       v
  [PA: 56 Qs]                            [PA: 56 Qs + layer tags] ◄── CHANGED
       |                                       |
       v                                       v
  [FIX: symptom]                          [FIX: layer-routed]      ◄── CHANGED
       |                                       |
       v                                       v
  [VERDICT: score]                        [VERDICT: score + stack] ◄── CHANGED


STACK ENFORCEMENT COMPARISON
═══════════════════════════════════════════════════════════════════════════

           CURRENT PIPELINE              ENRICHED PIPELINE
           (12 blocking gates)            (18 blocking gates)

  L5 ░░░░░░░░░░░░░░░░░░░░    L5 ██░░░░░░░░░░░░░░░░░░  (+2 advisory)
  L4 ████████░░░░░░░░░░░░    L4 ████████████████░░░░  (+SC-13C dir.)
  L3 ████░░░░░░░░░░░░░░░░    L3 ████████████████░░░░  (+SC-17, TV)
  L2 ██░░░░░░░░░░░░░░░░░░    L2 ████████████░░░░░░░░  (+SC-18)
  L1 ████████████████████    L1 ████████████████████  (unchanged)

  Net gain: L2 +3 blocks, L3 +4 blocks, L4 +2 blocks, L5 +1 block
  L1 remains the only FULLY enforced layer (correct -- it's the floor)
  L5 remains MOSTLY PA-domain (correct -- it's judgment)
  L2/L3/L4 move from TEXT-DEPENDENT to STRUCTURALLY VERIFIED
```

---

## F. RECOMMENDATION

The enrichment is **high-value and low-risk** because it adds enforcement AROUND the builder (in gates, deliverables, and diagnostics) rather than adding material TO the builder (which would trigger the input-volume/quality inverse correlation). The builder reads the same conventions brief; the pipeline simply VERIFIES more of what the conventions brief describes.

**Priority order for implementation:**
1. **Transition table YAML as mandatory deliverable** (highest leverage -- makes L3/L4 cross the builder boundary in structured form)
2. **SC-18 scale perceptibility gate** (closes the DG-1 gap between "table exists" and "scales are perceptible")
3. **SC-13C direction coherence gate** (promotes direction checking from advisory to blocking)
4. **Stack-layer annotations on PA weaver synthesis** (zero-cost enrichment that improves fix cycle targeting)
5. **SC-17 channel deployment gate** (ensures channel breadth, not just channel count at boundaries)
6. **SC-19/SC-20 anti-scale proxies** (advisory only, low priority, best-effort L5 approximation)

**What NOT to do:**
- Do NOT add more text to the conventions brief
- Do NOT increase the builder's input file count
- Do NOT try to make L5 a blocking gate
- Do NOT add gates beyond 25 total
