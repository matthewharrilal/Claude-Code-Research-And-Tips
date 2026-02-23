# Pipeline v3: Visual Architecture
**Built incrementally from 28 completed research reports — ALL COMPLETE**
**Date:** 2026-02-22/23 (v4 FINAL: +A7 actionability, adversarial review, all status updated)

---

## DIAGRAM 1: PIPELINE v3 — COMPLETE ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           PIPELINE v3: THE ACTIVATION PIPELINE                          │
│                                                                                         │
│  Master Equation: Quality = Agent Capability × Content Affordance × Spec Fidelity       │
│  Zero in ANY factor = zero quality                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────┘

    ┌──────────────────────────┐
    │    CONTENT SOURCE        │  Raw markdown / article / research
    │    (Input)               │  The content to be designed
    └────────────┬─────────────┘
                 │
                 ▼
┌────────────────────────────────────────────────────────┐
│  PHASE 0: CONTENT ANALYSIS                             │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Agent 1: Content Analyst (Opus)                 │  │
│  │                                                  │  │
│  │  • Classify content type (prose/mixed/visual)    │  │
│  │  • Map structural heterogeneity                  │  │
│  │  • Assess metaphor viability                     │  │
│  │  • Per-section character (NARRATIVE/REF/CODE)    │  │
│  │  • Estimate density arc                          │  │
│  │  • Reader model classification                   │  │
│  └──────────────────────────────────────────────────┘  │
│  Output: CONTENT MAP (~30-50 lines)                    │
│  "What the content IS, not what the design SHOULD BE"  │
└────────────────────┬───────────────────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────────────────────────────────────────┐
│  PHASE 1: ACTIVATION BRIEF ASSEMBLY                                            │
│                                                                                │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │  Agent 2: Brief Assembler (Opus)                                       │   │
│  │                                                                        │   │
│  │  MERGES 73-line template + content map → ACTIVATION BRIEF              │   │
│  │                                                                        │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  ACTIVATION BRIEF (~93-113 lines)                              │   │   │
│  │  │                                                                │   │   │
│  │  │  ┌─ Tier 1: IDENTITY (15 lines) ──────────────────────────┐   │   │   │
│  │  │  │  10 soul constraints as WORLD-DESCRIPTION              │   │   │   │
│  │  │  │  "Every surface is sharp. Corners are cut, not curved" │   │   │   │
│  │  │  │  border-radius:0, box-shadow:none, container 940-960px │   │   │   │
│  │  │  │  warm palette (R≥G≥B), font trinity, no gradients      │   │   │   │
│  │  │  └────────────────────────────────────────────────────────┘   │   │   │
│  │  │                                                                │   │   │
│  │  │  ┌─ Tier 2: PERCEPTION PHYSICS (8 lines) ────────────────┐   │   │   │
│  │  │  │  4 empirically validated thresholds as NATURAL LAWS    │   │   │   │
│  │  │  │  ≥15 RGB bg delta │ ≥0.025em letter-spacing            │   │   │   │
│  │  │  │  ≤120px stacked gap │ ≤96px single margin              │   │   │   │
│  │  │  │  All CSS must be perceptible to human eye               │   │   │   │
│  │  │  └────────────────────────────────────────────────────────┘   │   │   │
│  │  │                                                                │   │   │
│  │  │  ┌─ Tier 3: COMPOSITIONAL FRAMEWORKS (50 lines) ─────────┐   │   │   │
│  │  │  │  A. Multi-Coherence (18 lines)                         │   │   │   │
│  │  │  │     6 channels, 4 directions, boundary-by-boundary     │   │   │   │
│  │  │  │  B. Structural Metaphor (8 lines)                      │   │   │   │
│  │  │  │     Derive from content, embody in CSS not labels       │   │   │   │
│  │  │  │  C. Density Arc (6 lines)                              │   │   │   │
│  │  │  │     OPENING → DEEPENING → RESOLVING                    │   │   │   │
│  │  │  │  D. Content-Form Coupling (4 lines)                    │   │   │   │
│  │  │  │     Per-section decisions driven by content meaning     │   │   │   │
│  │  │  │  E. Creative Authority + Components (8 lines)          │   │   │   │
│  │  │  │     80% creative / 20% constraint                      │   │   │   │
│  │  │  │  F. CSS Value Table (6 lines)                          │   │   │   │
│  │  │  └────────────────────────────────────────────────────────┘   │   │   │
│  │  │                                                                │   │   │
│  │  │  ┌─ Tier 4: DISPOSITION (8 instructions, ~40 lines) ─────┐   │   │   │
│  │  │  │  D-01: Content-Register Reading                        │   │   │   │
│  │  │  │  D-02: Room Perception at Boundaries                   │   │   │   │
│  │  │  │  D-03: The Signing Frame                               │   │   │   │
│  │  │  │  D-04: The Second-Half Moment                          │   │   │   │
│  │  │  │  D-05: The Reader's Scroll                             │   │   │   │
│  │  │  │  D-06: Negative Space as Shape        ← NEW           │   │   │   │
│  │  │  │  D-07: Edge Intentionality            ← NEW           │   │   │   │
│  │  │  │  D-08: The Skeleton Test              ← NEW           │   │   │   │
│  │  │  └────────────────────────────────────────────────────────┘   │   │   │
│  │  │                                                                │   │   │
│  │  │  ┌─ CONTENT MAP (from Phase 0, ~30-50 lines) ────────────┐   │   │   │
│  │  │  │  Per-section analysis, metaphor seeds, density arc     │   │   │   │
│  │  │  └────────────────────────────────────────────────────────┘   │   │   │
│  │  └────────────────────────────────────────────────────────────────┘   │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└────────────────────┬───────────────────────────────────────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────────────────────────────────────────┐
│  PHASE 2: BUILDING (The Core Creative Act)                                     │
│                                                                                │
│  ┌──────────────────────────────────────────────────────────────────────────┐  │
│  │  Agent 3: BUILDER (Opus — NON-NEGOTIABLE)                               │  │
│  │                                                                          │  │
│  │  Reads:                                                                  │  │
│  │    ① Activation brief (~100 lines)                                       │  │
│  │    ② Content source material                                             │  │
│  │    ③ tokens.css (direct Tier 1 vocabulary)                               │  │
│  │    ④ components.css (pre-built component library)                        │  │
│  │    ⑤ CD-006 reference (optional crown jewel)                             │  │
│  │                                                                          │  │
│  │  Does NOT receive:                                                       │  │
│  │    ✗ Gate thresholds (post-build only)                                   │  │
│  │    ✗ Prohibition list beyond soul (prevents S-02)                        │  │
│  │    ✗ Count-gates ("≥3 channels") (prevents S-18)                         │  │
│  │    ✗ Fix cycle instructions (self-evaluation replaces)                   │  │
│  │                                                                          │  │
│  │  ┌─── BUILD PROCESS ──────────────────────────────────────────────────┐  │  │
│  │  │                                                                    │  │  │
│  │  │  1. Write conviction statement                                     │  │  │
│  │  │     "This page is about X. Metaphor is Y. Arc: Z→W"               │  │  │
│  │  │                                                                    │  │  │
│  │  │  2. Build header + Zone 1 (OPENING)                                │  │  │
│  │  │         │                                                          │  │  │
│  │  │         ▼                                                          │  │  │
│  │  │  3. ┌──────────────────────────────────────┐                       │  │  │
│  │  │     │  SELF-EVALUATE (Playwright)          │ ◄── Builder SEES     │  │  │
│  │  │     │  Take screenshot, assess against     │     its own output   │  │  │
│  │  │     │  conviction. Does it feel like the   │     (Tier 4 info     │  │  │
│  │  │     │  metaphor? Backgrounds perceptible?  │      via EXPERIENCE) │  │  │
│  │  │     └──────────────┬───────────────────────┘                       │  │  │
│  │  │                    │                                               │  │  │
│  │  │  4. Adjust if needed                                               │  │  │
│  │  │                                                                    │  │  │
│  │  │  5. Build Zone 2-3 (DEEPENING)                                     │  │  │
│  │  │         │                                                          │  │  │
│  │  │         ▼                                                          │  │  │
│  │  │  6. ┌──────────────────────────────────────┐                       │  │  │
│  │  │     │  MIDPOINT SELF-EVALUATE              │ Full-page scroll     │  │  │
│  │  │     │  Density arc working? Mechanisms     │ screenshot           │  │  │
│  │  │     │  interacting or isolated?            │                      │  │  │
│  │  │     └──────────────┬───────────────────────┘                       │  │  │
│  │  │                    │                                               │  │  │
│  │  │  7. Build Zone 4 + footer (RESOLVING)                              │  │  │
│  │  │         │                                                          │  │  │
│  │  │         ▼                                                          │  │  │
│  │  │  8. ┌──────────────────────────────────────┐                       │  │  │
│  │  │     │  FINAL SELF-EVALUATE                 │ 1440px + 768px       │  │  │
│  │  │     │  Gestalt works? Would I sign this?   │                      │  │  │
│  │  │     └──────────────────────────────────────┘                       │  │  │
│  │  └────────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                          │  │
│  │  Output: Complete HTML page (800-1200 CSS lines)                         │  │
│  └──────────────────────────────────────────────────────────────────────────┘  │
└────────────────────┬──────────────────────────────────────────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────────────────────────────────────────┐
│  PHASE 3: PERCEPTUAL AUDIT (Verification Only)                                 │
│                                                                                │
│  ┌── Screenshot Capture ─────────────────────────────────────────────────────┐ │
│  │  Lead takes ALL screenshots at 1440px, 1024px, 768px                     │ │
│  │  (eliminates Playwright contention, enables parallel auditors)            │ │
│  └────────────┬──────────────────────────────────────────────────────────────┘ │
│               │                                                                │
│     ┌─────────┼─────────┬─────────┬─────────┬─────────┬─────────┐            │
│     ▼         ▼         ▼         ▼         ▼         ▼         ▼            │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐            │
│  │ PA-1 │ │ PA-2 │ │ PA-3 │ │ PA-4 │ │ PA-5 │ │ PA-6 │ │ PA-7 │            │
│  │ Q1-6 │ │ Q7-12│ │Q13-18│ │Q19-24│ │Q25-30│ │Q31-36│ │Q37-42│            │
│  └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘            │
│     │        │        │        │        │        │        │  ┌──────┐        │
│     │        │        │        │        │        │        │  │ PA-8 │        │
│     │        │        │        │        │        │        │  │Q43-48│        │
│     │        │        │        │        │        │        │  └──┬───┘        │
│     │        │        │        │        │        │        │     │ ┌────────┐ │
│     │        │        │        │        │        │        │     │ │PA-9    │ │
│     │        │        │        │        │        │        │     │ │Q49-54  │ │
│     │        │        │        │        │        │        │     │ └──┬─────┘ │
│     │        │        │        │        │        │        │     │    │       │
│     │        │        │        │        │        │        │     │    │       │
│     │   ┌────────────────────────────────────────────────────┐ │    │       │
│     │   │  Agent 14: INTEGRATIVE AUDITOR (Opus)              │ │    │       │
│     │   │  NO assigned questions. Pure gestalt.               │ │    │       │
│     │   │  "Does this page WORK? YES/NO + 200-word impression"│ │    │       │
│     │   └──────────────────────┬─────────────────────────────┘ │    │       │
│     │                          │                               │    │       │
│     └──────────────────────────┼───────────────────────────────┘    │       │
│                                │                                    │       │
│                                ▼                                    │       │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │  Agent 15: WEAVER (Opus)                                               │ │
│  │  Reads all 10 auditor reports → produces VERDICT                       │ │
│  └──────────────────────┬──────────────────────────────────────────────────┘ │
└─────────────────────────┼──────────────────────────────────────────────────┘
                          │
                          ▼
          ┌───────────────────────────────────┐
          │           V E R D I C T           │
          ├───────────────────────────────────┤
          │                                   │
          │  ┌──────────┐  PA-05 ≥ 3.5/4     │
          │  │   SHIP   │  Zero soul          │
          │  │          │  violations          │
          │  └──────────┘                     │
          │                                   │
          │  ┌──────────┐  PA-05 2.5-3.5/4   │
          │  │  REFINE  │  DIFFERENT Opus     │
          │  │          │  agent applies       │
          │  └────┬─────┘  targeted fixes     │
          │       │        (reads conviction)  │
          │       │                            │
          │  ┌──────────┐  PA-05 < 2.5/4     │
          │  │ REBUILD  │  FRESH builder      │
          │  │          │  in COMPOSING mode   │
          │  └────┬─────┘  (not REPAIR mode)  │
          │       │                            │
          └───────┼────────────────────────────┘
                  │
                  └──→ Returns to Phase 2 with PA verdict as CONTEXT
                       (not as fix list — generative language)
```

---

## DIAGRAM 2: OLD PIPELINE vs NEW PIPELINE (Side-by-Side)

```
┌─────────────────────────────────────┐    ┌─────────────────────────────────────┐
│     OLD PIPELINE (v1/v2)            │    │     NEW PIPELINE (v3)               │
│     PA-05: 1.5-3.5/4               │    │     Target PA-05: 3.5-4.0/4        │
├─────────────────────────────────────┤    ├─────────────────────────────────────┤
│                                     │    │                                     │
│  963 lines of specification         │    │  ~113 lines of activation brief     │
│  ────────────────────────           │    │  ─────────────────────────          │
│  7.9:1 guardrail-to-playbook       │    │  0.3:1 guardrail-to-playbook       │
│  55 prohibitions                    │    │  10 soul constraints               │
│  Checklist format                   │    │  Recipe + disposition format        │
│  "Verify/Fail if/Must be"          │    │  "This world IS / You ARE"          │
│                                     │    │                                     │
│  19-34 agents                       │    │  12-15 agents                       │
│  ─────────────                      │    │  ─────────────                      │
│  Hierarchical (lead→sub→worker)     │    │  Flat (each agent, direct I/O)      │
│  Multi-pass build (3-5 passes)      │    │  Single builder, self-evaluating    │
│  Sonnet builders                    │    │  Opus builder (non-negotiable)       │
│  Zero Playwright for builders       │    │  Builder HAS Playwright             │
│                                     │    │                                     │
│  83:1 compression through TC        │    │  10:1 regeneration (not compress)   │
│  ────────────────────────           │    │  ─────────────────────────          │
│  99-line TC brief with hex values   │    │  ~35-line TC brief: routing only    │
│  TC generates CSS values WITHOUT    │    │  Builder generates CSS values WITH  │
│  perception physics                 │    │  perception physics (direct access) │
│                                     │    │                                     │
│  Fix cycles (FIX → FIX → FIX)      │    │  REBUILD with fresh builder         │
│  ─────────────────────────          │    │  ─────────────────────────          │
│  Same builder in REPAIR mode        │    │  Fresh builder in COMPOSING mode    │
│  Diagnostic language                │    │  Generative/artistic language       │
│  S-11 + S-20 suppressors active     │    │  Zero repair-mode suppressors       │
│                                     │    │                                     │
│  20 quality suppressors active      │    │  0 suppressors active               │
│  ────────────────────────           │    │  ─────────────────────              │
│  Builder sees gates ("≥3 channels") │    │  Builder sees frameworks only       │
│  Gates in builder prompt            │    │  Gates in orchestrator only         │
│  Builder optimizes for gates        │    │  Builder optimizes for quality      │
│                                     │    │                                     │
│  RESULT:                            │    │  PREDICTED RESULT:                  │
│  "RIGHT vocabulary,                 │    │  Vocabulary + correct MODE          │
│   WRONG mode of composition"        │    │  COMPOSING not COMPLYING            │
│  Procedural, not intentional        │    │  Intentional, content-responsive    │
└─────────────────────────────────────┘    └─────────────────────────────────────┘
```

---

## DIAGRAM 3: THE FUNNEL STRUCTURE

```
                    ┌─────────────────────────────────┐
                    │        INPUT PRECONDITIONS       │
                    │     (All 3 must be TRUE)         │
                    └─────────────────────────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
              ▼                    ▼                    ▼
    ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
    │  PRECONDITION 1 │  │  PRECONDITION 2 │  │  PRECONDITION 3 │
    │                 │  │                 │  │                 │
    │  Model = OPUS   │  │  Content has    │  │  Suppressor     │
    │                 │  │  heterogeneity  │  │  count = 0      │
    │  (Agent         │  │  + metaphor     │  │                 │
    │   Capability)   │  │  viability      │  │  (Specification │
    │                 │  │                 │  │   Fidelity)     │
    │  Pipeline:      │  │  (Content       │  │                 │
    │  Phase 2 model  │  │   Affordance)   │  │  Pipeline:      │
    │  selection      │  │                 │  │  73-line brief  │
    │                 │  │  Pipeline:      │  │  format design  │
    └────────┬────────┘  │  Phase 0        │  └────────┬────────┘
             │           │  content        │           │
             │           │  analysis       │           │
             │           └────────┬────────┘           │
             │                    │                    │
             └────────────────────┼────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────────┐
                    │          GATEKEEPER              │
                    │                                  │
                    │  Builder enters COMPOSING mode   │
                    │  (not COMPLYING / PLANNING /     │
                    │   REPAIRING)                     │
                    │                                  │
                    │  Determined by:                  │
                    │  • Recipe format (not checklist)  │
                    │  • 8 dispositional instructions   │
                    │  • Creative authority (80/20)     │
                    │  • World-description voice        │
                    │  • Sub-200 line brief             │
                    └────────────┬────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
          ┌──────────────────┐     ┌──────────────────┐
          │   CAPABILITY 1   │     │   CAPABILITY 2   │
          │                  │     │                  │
          │  Compositional   │     │  Peak-Valley     │
          │  Fluency         │     │  Rhythm          │
          │                  │     │                  │
          │  Mechanisms      │     │  Designed moments│
          │  deployed        │     │  within a        │
          │  INTER-          │     │  competent       │
          │  dependently     │     │  baseline        │
          │                  │     │                  │
          │  Register 1→2→3  │     │  D-04 second-    │
          │  (CCS 0.15→0.80)│     │  half moment     │
          │                  │     │  instruction     │
          │  EMERGENT from   │     │                  │
          │  conditions      │     │  EMERGENT from   │
          │                  │     │  conditions      │
          └──────────────────┘     └──────────────────┘
                    │                         │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────────────┐
                    │         OUTPUT QUALITY           │
                    │                                  │
                    │  Floor (2.5-3.0): Preconditions  │
                    │  met, gatekeeper partial         │
                    │                                  │
                    │  Ceiling (3.0-3.5): All met,     │
                    │  capabilities at Register 2      │
                    │                                  │
                    │  Flagship (3.5-4.0): All met,    │
                    │  capabilities at Register 3      │
                    │  + unified metaphor throughout   │
                    └─────────────────────────────────┘
```

---

## DIAGRAM 4: INFORMATION FLOW (Dual-Channel + Direct Files)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     INFORMATION FLOW ARCHITECTURE                       │
│                                                                         │
│  Two channels + two direct-file routes + one feedback loop              │
└─────────────────────────────────────────────────────────────────────────┘

  ┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
  │  RESEARCH ARCHIVE │      │  DESIGN SYSTEM   │      │  CONTENT SOURCE  │
  │  (337 findings)  │      │  (6-layer)       │      │  (markdown)      │
  │  ~45,000 lines   │      │  ~3,500 lines    │      │  varies          │
  └────────┬─────────┘      └────────┬─────────┘      └────────┬─────────┘
           │                         │                          │
           │  ┌──────────────────────┘                          │
           │  │                                                 │
           ▼  ▼                                                 │
  ┌────────────────────┐                                        │
  │  73-LINE TEMPLATE  │ ◄── Created ONCE                      │
  │  (pre-compressed)  │     from research +                    │
  │                    │     design system.                     │
  │  Compression: ∞:1  │     NOT per-build.                     │
  │  (already done)    │                                        │
  └────────┬───────────┘                                        │
           │                                                    │
           │ CHANNEL 1                              CHANNEL 2   │
           │ UNIVERSAL                              CONTENT     │
           │ (lossless, 1:1)                        (regenerated│
           │                                         ~10:1)     │
           │                                                    │
           ▼                                                    ▼
  ┌────────────────────────────────────────────────────────────────────┐
  │                    BRIEF ASSEMBLER (Agent 2)                       │
  │                                                                    │
  │  Template (73 lines) ─────────┐                                    │
  │                               ├──→ ACTIVATION BRIEF (~113 lines)  │
  │  Content Map (~35 lines) ─────┘                                    │
  │  (from Phase 0)                                                    │
  └──────────────────────────┬─────────────────────────────────────────┘
                             │
                             │ 1:1 (brief → builder)
                             │
                             ▼
  ┌────────────────────────────────────────────────────────────────────┐
  │                         BUILDER (Agent 3)                          │
  │                                                                    │
  │  INPUTS:                                                           │
  │  ┌─────────────┐ ┌─────────────┐ ┌───────────┐ ┌──────────────┐  │
  │  │ Activation  │ │ Content     │ │tokens.css │ │components.css│  │
  │  │ Brief       │ │ Source      │ │           │ │              │  │
  │  │ ~113 lines  │ │ (original)  │ │ 183 lines │ │ 290 lines    │  │
  │  │             │ │             │ │           │ │              │  │
  │  │ Channel 1+2 │ │ Channel 2   │ │ DIRECT    │ │ DIRECT       │  │
  │  │ merged      │ │ direct      │ │ FILE      │ │ FILE         │  │
  │  └─────────────┘ └─────────────┘ └───────────┘ └──────────────┘  │
  │                                                                    │
  │  DOES NOT RECEIVE:                                                 │
  │  ✗ Research archive    ✗ Gate thresholds    ✗ Fix instructions     │
  │  ✗ 55 prohibitions     ✗ Count-gates        ✗ Process metadata     │
  └────────────────────────────────────────────────────────────────────┘

  COMPRESSION RATIOS (Research → Builder):
  ┌────────────────────────────────────────────────────────────────────┐
  │  OLD PIPELINE:  45,000 → 6,300 → 578 → 99 → builder             │
  │                 = 50:1 cascading = 99.6% Tier 3 loss              │
  │                                                                    │
  │  NEW PIPELINE:  45,000 → 73 (done ONCE) + content (regenerated)  │
  │                 = 1:1 universal + ~10:1 content-specific          │
  │                 = near-zero cascading loss                         │
  └────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 5: SUPPRESSOR REMOVAL CURVE

```
  Quality
  (PA-05)
    │
 4.0├─────────────────────────────────────────────── ★ FLAGSHIP TARGET
    │                                           ╱
    │                                         ╱   73 lines + disposition
    │                                       ╱     + value tables
 3.5├─────────────────────────────────────●─────── Gas Town (old pipeline,
    │                                  ╱           Opus builder, 610 lines)
    │                               ╱
    │                            ╱
 3.0├──────────────────────────●────────────────── Suppressors removed +
    │                       ╱                      soul + thresholds only
    │                    ╱
    │                 ╱
 2.5├───────────────●──────────────────────────── Middle (old pipeline,
    │            ╱                                 recipe format, 100 lines)
    │         ╱
    │      ╱
 2.0├────●─────────────────────────────────────── Current spec baseline
    │  ╱                                           (20 suppressors active)
    │╱
 1.5├●─────────────────────────────────────────── Flagship experiment
    │                                              (all 14 original suppressors)
    │
    └──┬──────┬──────┬──────┬──────┬──────┬──── Suppressors remaining
       20     16     12     8      4      0

       ▲              ▲              ▲
       │              │              │
  INFLECTION 1   INFLECTION 2   INFLECTION 3
  Recipe Switch  Perception     Architecture
  (+0.5-1.0)     Floor (+0.5)   Collapse (+0.3-0.5)
  Remove S-01    Remove S-08    Remove remaining
  checklist→     fix routing    8 suppressors
  recipe         S-03,S-09,S-13
```

---

## DIAGRAM 6: 3-PASS ITERATION ARCHITECTURE (Flagship Mode)

```
┌──────────────────────────────────────────────────────────────────────────┐
│               3-PASS ITERATION ARCHITECTURE (Flagship)                   │
│                                                                          │
│  Middle = 1 pass │ Ceiling = 2 passes │ Flagship = 3 passes             │
└──────────────────────────────────────────────────────────────────────────┘

  ┌────────────────────────────────────────────────────────────────────┐
  │  PASS 1: STRUCTURAL SKELETON + PERVADING METAPHOR (20-35 min)    │
  │  Mode: GENERATIVE (composing, not complying)                      │
  │  Builder: Opus instance A                                         │
  │                                                                    │
  │  Input:  Activation brief + content + 73-line constraints         │
  │  Output: Complete HTML/CSS — complete but raw                      │
  │          Skeleton strong, metaphor established, details rough       │
  └─────────────────────────┬──────────────────────────────────────────┘
                            │
                            ▼
  ┌─────────────────────────────────────────────────────────────────────┐
  │  COMPOSITIONAL CRITIC (Opus — separate agent)                       │
  │                                                                     │
  │  Views SCREENSHOTS only (not CSS)                                   │
  │  Three Laws:                                                        │
  │    1. Never name a CSS property                                     │
  │    2. Never reference a threshold                                   │
  │    3. Always suggest a QUALITY, not an ACTION                       │
  │                                                                     │
  │  Example output:                                                    │
  │  "The middle sags — the energy that builds in the first third       │
  │   dissipates by section 5. The page needs a SECOND CRESCENDO.       │
  │   The footer wants to resolve but hasn't earned it yet."            │
  │                                                                     │
  │  NOT: "SC-09 FAILED: stacked gap 210px exceeds 120px threshold"    │
  └─────────────────────────┬───────────────────────────────────────────┘
                            │ Artistic feedback + conviction artifact
                            │ (~25 lines transferring compositional logic)
                            ▼
  ┌────────────────────────────────────────────────────────────────────┐
  │  PASS 2: ATMOSPHERIC ENRICHMENT + MECHANISM COUPLING (15-25 min) │
  │  Mode: COMPOSITIONAL (refining relationships, not fixing defects)│
  │  Builder: Opus instance B (FRESH — defeats continuation bias)     │
  │                                                                    │
  │  Input:  Pass 1 output + Critic feedback + value tables           │
  │  Output: Enriched page — mechanisms coupled, density arc embodied │
  │          Mechanisms now INTERACT, not just coexist                  │
  └─────────────────────────┬──────────────────────────────────────────┘
                            │
                            ▼
  ┌─────────────────────────────────────────────────────────────────────┐
  │  COMPOSITIONAL CRITIC (second review)                               │
  │  Final impressions only — no structural notes                       │
  └─────────────────────────┬───────────────────────────────────────────┘
                            │
                            ▼
  ┌────────────────────────────────────────────────────────────────────┐
  │  PASS 3: TERMINAL CRAFT + DESIGNED MOMENTS (10-20 min)           │
  │  Mode: POLISHING (detail attention, not structural change)        │
  │  Builder: Opus instance C (or Sonnet for cost efficiency)         │
  │                                                                    │
  │  Input:  Pass 2 output + Critic's final impressions               │
  │  Output: Finished page — terminal craft, responsive, accessible   │
  │          "Designed moments" — places where something surprises     │
  └─────────────────────────┬──────────────────────────────────────────┘
                            │
                            ▼
              ┌──────────────────────────────┐
              │  Standard Mode 4 PA Audit    │
              │  (9 auditors + 1 integrative │
              │   + 1 weaver)                │
              └──────────────────────────────┘

  EXPECTED QUALITY GAINS PER PASS:
  ┌─────────────────────────────────────────────────────────┐
  │  Pass 1 alone:    PA-05 ~2.5-3.5  (Register 1-2)      │
  │  + Pass 2:        PA-05 ~3.0-3.8  (Register 2-2.5)    │
  │  + Pass 3:        PA-05 ~3.2-4.0  (Register 2.5-3)    │
  │  Diminishing returns: Pass 4 adds <0.1 with S-20 risk  │
  └─────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 7: 13 IRREDUCIBLE CONCEPTS → PIPELINE MAPPING

```
┌──────────────────────────────────────────────────────────────────────────────┐
│          13 IRREDUCIBLE CONCEPTS: How the Pipeline Addresses Each           │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ══════════ 7 EXISTING (from 40-concept collapse) ═══════════                │
│                                                                              │
│  CONCEPT              │ TYPE      │ MECHANISM           │ PIPELINE PHASE    │
│  ─────────────────────┼───────────┼─────────────────────┼───────────────────│
│  Builder Cognitive    │ ACTIVATED │ Dispositional recipe│ Phase 1 (brief    │
│  Mode (11 concepts)   │           │ D-01 through D-08   │ format activates  │
│                       │           │ + recipe format      │ COMPOSING mode)   │
│                       │           │                      │                   │
│  Content-Form         │ SPECIFIED │ TC brief routing     │ Phase 0 (content  │
│  Coupling (9)         │ +ACTIVATED│ + D-01 content-      │ analysis) +       │
│                       │           │ register reading     │ Phase 1           │
│                       │           │                      │                   │
│  Compression          │ SPECIFIED │ 73-line brief cap    │ Phase 1 (brief    │
│  Physics (6)          │           │ + dual-channel       │ assembly format)  │
│                       │           │ architecture         │                   │
│                       │           │                      │                   │
│  Intentional          │ ACTIVATED │ Multi-coherence      │ Phase 2 (builder  │
│  Composition          │ +EMERGENT │ framework + metaphor │ applies multi-    │
│                       │           │ instruction          │ coherence recipe) │
│                       │           │                      │                   │
│  Peak-Valley          │ ACTIVATED │ D-04 second-half     │ Phase 2 (builder  │
│  Architecture         │           │ moment + density arc │ creates designed  │
│                       │           │                      │ moments)          │
│                       │           │                      │                   │
│  Specification        │ SPECIFIED │ Suppressor removal   │ Phase 1 (brief    │
│  Interference (8)     │           │ + ≤113 line cap      │ design avoids     │
│                       │           │ + gates hidden       │ all 20 suppress.) │
│                       │           │                      │                   │
│  Scale-Channel        │ SPECIFIED │ 6-channel framework  │ Phase 1 (brief    │
│  Independence         │           │ + value tables       │ encodes channels) │
│                       │           │                      │                   │
│  ══════════ 6 MISSING (newly identified) ════════════════                    │
│                                                                              │
│  Temporal             │ ACTIVATED │ Density arc recipe   │ Phase 1 (brief)   │
│  Composition          │           │ + D-06 neg space     │ + Phase 2 (build) │
│                       │           │                      │                   │
│  Reader Model         │ SPECIFIED │ Reader persona in    │ Phase 0 (content  │
│                       │           │ content analysis     │ analysis output)  │
│                       │           │                      │                   │
│  Emotional Arc        │ EMERGENT  │ D-04 + D-05 + arc   │ Phase 2 (builder  │
│                       │           │ dispositional framing│ produces, cannot  │
│                       │           │                      │ be specified)     │
│                       │           │                      │                   │
│  Compositional        │ SPECIFIED │ 6 binary anti-pattern│ Phase 3 (gate     │
│  Anti-Patterns        │           │ gates in gate runner │ runner detects)   │
│                       │           │                      │                   │
│  Cross-Page           │ SPECIFIED │ Soul constraints +   │ Phase 1 (shared   │
│  Coherence            │           │ shared tokens.css +  │ template ensures  │
│                       │           │ components.css       │ family DNA)       │
│                       │           │                      │                   │
│  Revision Quality     │ ACTIVATED │ REBUILD not FIX +    │ Phase 3 (verdict  │
│                       │           │ zone-aware editing   │ protocol)         │
│                       │           │ protocol             │                   │
└──────────────────────────────────────────────────────────────────────────────┘

  CLASSIFICATION SUMMARY:
  ┌────────────────────────────────────────────────────┐
  │  SPECIFIED (binary rules, measurable):   6 / 13   │
  │  ACTIVATED (dispositional, recipe):      5 / 13   │
  │  EMERGENT (conditions only):             2 / 13   │
  │                                                    │
  │  "Specify what can be encoded at Tier 1-2.         │
  │   Activate what requires COMPOSING mode.           │
  │   Create CONDITIONS for what must emerge."         │
  └────────────────────────────────────────────────────┘
```

---

## DIAGRAM 8: GAS TOWN QUALITY GAP VISUALIZATION

```
  Gas Town: 10-Dimension Flagship Gap
  ■ = Current score  □ = Gap to 4/5  ★ = Fixable by prompt  ▲ = Needs architecture

                                    1/5   2/5   3/5   4/5   5/5
  ──────────────────────────────── ──┬──── ──┬──── ──┬──── ──┬──── ──┬────
                                    │     │     │     │     │
  Pervading Metaphor          ▲    │  ■■■■■□□□□□□□□□□│     │     │
                              │    │     2.5          │     │     │
                              │    │                  │     │     │
  Multi-coherence             ▲    │■■■□□□□□□□□□□□□□□□│     │     │
                              │    1.5                │     │     │
                              │    │                  │     │     │
  Compositional Intelligence  ▲    │  ■■■■□□□□□□□□□□□□│     │     │
                              │    │  2.0             │     │     │
                              │    │                  │     │     │
  Material Authenticity       ★    │■■■□□□□□□□□□□□□□□□│     │     │
                              │    1.5                │     │     │
                              │    │                  │     │     │
  Detail Density              ★    │  ■■■■□□□□□□□□□□□□│     │     │
                              │    │  2.0             │     │     │
                              │    │                  │     │     │
  Typographic Craft           ★    │  ■■■■□□□□□□□□□□□□│     │     │
                              │    │  2.0             │     │     │
                              │    │                  │     │     │
  Scale Hierarchy            CSS   │     │  ■■■■■□□□□□│     │     │
                              │    │     │  3.0       │     │     │
                              │    │     │            │     │     │
  Channel Shifts             CSS   │     │  ■■■■■□□□□□│     │     │
                              │    │     │  3.0       │     │     │
                              │    │     │            │     │     │
  Emotional Arc              CSS   │     │     ■■■■■■■□□□□□│     │
                              │    │     │     3.5         │     │
                              │    │     │                 │     │
  Spatial Confidence         CSS   │     │     ■■■■■■■□□□□□│     │
                                   │     │     3.5         │     │
  ──────────────────────────────── ──┴──── ──┴──── ──┴──── ──┴──── ──┴────

  ┌───────────────────────────────────────────────────────────────┐
  │  FIX TYPE          │ DIMENSIONS           │ MOVES AVG TO     │
  │  ──────────────────┼──────────────────────┼─────────────────  │
  │  CSS-only (no      │ Channel Shifts,      │ 2.5 → 3.2/5     │
  │  prompt change)    │ Emotional Arc,       │                   │
  │                    │ Spatial Confidence   │                   │
  │  ──────────────────┼──────────────────────┼─────────────────  │
  │  Prompt enrichment │ Typographic Craft,   │ 3.2 → 3.5/5     │
  │  (add playbooks)   │ Material Authentic., │                   │
  │                    │ Detail Density       │                   │
  │  ──────────────────┼──────────────────────┼─────────────────  │
  │  Architecture      │ Pervading Metaphor,  │ 3.5 → 4.0+/5    │
  │  change (pipeline  │ Multi-coherence,     │                   │
  │  v3 required)      │ Comp. Intelligence,  │                   │
  │                    │ Scale Hierarchy      │                   │
  └───────────────────────────────────────────────────────────────┘
  │                                                               │
  │  DIAGNOSIS: "Right vocabulary, WRONG MODE of composition"     │
  │  The builder deploys mechanisms as CHECKLIST items             │
  │  not as RESPONSES to content meaning.                         │
  │  Pipeline v3 addresses this via dispositional recipe           │
  │  + activation architecture + COMPOSING mode gatekeeper.        │
  └───────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 9: EXPERIMENT PROTOCOL DECISION TREE

```
  ┌───────────────────────────────────────────────────────────────┐
  │                    EXPERIMENT PROTOCOL                         │
  │                    4 Stages, Progressive                       │
  └───────────────────────────────────────────────────────────────┘

  STAGE 0: SMOKE TEST (3 hours, 1 run)
  ┌─────────────────────────────────────────────┐
  │  Pipeline v3 on Gas Town content             │
  │  Opus builder, 73-line brief, single pass    │
  └──────────────────┬──────────────────────────┘
                     │
              ┌──────┴──────┐
              │  PA-05 ≥ 2.0? │
              └──────┬──────┘
              YES    │    NO
              │      │     │
              ▼      │     ▼
         Continue    │  ┌──────────────┐
         to Stage 1  │  │ STOP & DEBUG │
                     │  │ Brief broken │
                     │  └──────────────┘
                     ▼
  STAGE 1: Q20 SHORTCUT (6 hours, 2 runs)
  ┌─────────────────────────────────────────────┐
  │  OLD Flagship prompt + ONLY 25-line          │
  │  threshold appendix. Same content.           │
  │  Tests: Are thresholds the dominant cause?   │
  └──────────────────┬──────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │  Δ PA-05 ≥ +0.5?       │
        └────────────┬────────────┘
        YES          │         NO
        │            │          │
        ▼            │          ▼
   Thresholds are    │    Thresholds alone
   high-leverage     │    insufficient.
   Continue          │    Still continue.
                     │
                     ▼
  STAGE 2: HEAD-TO-HEAD (12 hours, 4 runs)
  ┌─────────────────────────────────────────────┐
  │  Old pipeline vs v3 on TWO content types     │
  │  (Gas Town + RESEARCH-SYNTHESIS)             │
  │  Opus builder both. Blind PA evaluation.     │
  └──────────────────┬──────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │  v3 > old on BOTH       │
        │  content types?         │
        └────────────┬────────────┘
        YES          │    MIXED       NO
        │            │      │          │
        ▼            │      ▼          ▼
   v3 validated.     │   Content-     v3 needs
   Stage 3 for       │   dependent.  rethinking.
   dose-response.    │   Stage 3.    Investigate.
                     │
                     ▼
  STAGE 3: VARIABLE ISOLATION (18 hours, 6 runs)
  ┌─────────────────────────────────────────────┐
  │  Dose-response curve:                        │
  │  old → +thresholds → +recipe → -suppress    │
  │  → 73-line → +multi-coherence → full v3     │
  │                                              │
  │  Identifies WHICH changes cause improvement  │
  └──────────────────┬──────────────────────────┘
                     │
                     ▼
  STAGE 4: FLAGSHIP EXISTENCE PROOF (5 hours, 1-2 runs)
  ┌─────────────────────────────────────────────┐
  │  Maximum investment: 3-pass + disposition    │
  │  + worked examples + compositional critic    │
  │  PA + Tier 5 questions                       │
  │                                              │
  │  Tests: Is 4/4 even achievable?              │
  └──────────────────┬──────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │  PA-05 ≥ 3.5 AND       │
        │  Tier 5 ≥ 6/8?         │
        └────────────┬────────────┘
        YES          │         NO
        │            │          │
        ▼            │          ▼
   Flagship is       │    Flagship 4/4 may
   ACHIEVABLE.       │    not be a discrete
   Pipeline v3       │    register. Accept
   works.            │    Ceiling as maximum.
                     │
   ┌─────────────────┴───────────────────────────┐
   │  TOTAL PROGRAM: 44 hours, 14 runs           │
   │  CHEAPEST USEFUL: Stage 0+1 = 9 hours       │
   │  HIGHEST ROI: Stage 0+1+2 = 21 hours        │
   └──────────────────────────────────────────────┘
```

---

## DIAGRAM 10: QUALITY TIER SYSTEM

```
  ┌─────────────────────────────────────────────────────────────────────┐
  │                        QUALITY TIER SYSTEM                          │
  │                                                                     │
  │  Each tier represents a discrete register of compositional quality  │
  └─────────────────────────────────────────────────────────────────────┘

       PA-05    CCS     Mechanisms  CSS Lines   Build Time
  ─────────────────────────────────────────────────────────────
   4.0 ┤                                                    │
       │  ┌─── FLAGSHIP ────────────────────────────────┐   │
       │  │  PA-05 ≥3.5, CCS 0.55-0.80                 │   │
       │  │  Register 3 (ATMOSPHERIC coupling)          │   │
       │  │  16-18 mechanisms, 1000-1500 CSS lines      │   │
   3.5 ┤  │  NEVER ACHIEVED — requires 3-pass + Opus   │   │
       │  │  Unified pervading metaphor throughout       │   │
       │  │  Content-form INDISTINGUISHABLE               │   │
       │  └─────────────────────────────────────────────┘   │
       │                                                     │
       │  ┌─── CEILING ────────────────────────────────┐    │
       │  │  PA-05 3.0-3.5, CCS 0.35-0.55              │    │
   3.0 ┤  │  Register 2 (STRUCTURAL coupling)           │    │
       │  │  12-15 mechanisms, 700-1000 CSS lines       │    │
       │  │  CD-006 (39/40), Gas Town (3.5/4)           │    │
       │  │  Multi-coherence LOCAL not GLOBAL            │    │
       │  └─────────────────────────────────────────────┘    │
       │                                                     │
       │  ┌─── MIDDLE (Default Floor) ─────────────────┐    │
   2.5 ┤  │  PA-05 2.5-3.0, CCS 0.15-0.35              │    │
       │  │  Register 1 (LOCAL coupling)                │    │
       │  │  8-10 mechanisms, 350-500 CSS lines         │    │
       │  │  Middle experiment (PA-05 4/4 DESIGNED)      │    │
       │  │  Highest ROI tier (3-4x richness for +45min)│    │
       │  └─────────────────────────────────────────────┘    │
       │                                                     │
       │  ┌─── FLOOR ─────────────────────────────────┐     │
   2.0 ┤  │  PA-05 <2.5, CCS <0.15                     │     │
       │  │  Register 0 (NO coupling)                   │     │
       │  │  5 mechanisms, 150-250 CSS lines            │     │
       │  │  Flagship experiment (PA-05 1.5/4 FAILED)   │     │
       │  └─────────────────────────────────────────────┘     │
  ─────────────────────────────────────────────────────────────
```

---

## DIAGRAM 11: WHAT PIPELINE v3 LOOKS LIKE IN PRACTICE

```
┌─────────────────────────────────────────────────────────────────────────┐
│              A SINGLE BUILD: Timeline & Agent Activity                   │
└─────────────────────────────────────────────────────────────────────────┘

  Time  0        15       30       45       60       75       90      105
  (min) ├────────┼────────┼────────┼────────┼────────┼────────┼────────┤

  Phase 0: Content Analysis
  Agent 1 ████████
  (Opus)  │ Read content, classify, map sections, assess metaphor      │
          │ Output: content map (~35 lines)                             │
          └──→

  Phase 1: Brief Assembly
  Agent 2          ████████
  (Opus)           │ Merge 73-line template + content map               │
                   │ Output: activation brief (~113 lines)              │
                   └──→

  Phase 2: Building
  Agent 3                   ████████████████████████████████
  (Opus)                    │ Build + self-evaluate + adjust            │
  Builder                   │ Zone1→screenshot→Zone2-3→screenshot→     │
                            │ Zone4+footer→final screenshot             │
                            │ Output: complete HTML (800-1200 CSS)      │
                            └──→

  Phase 3: Screenshot Capture
  Lead                                                      ██
                                                            │ 1440+1024+768 │
                                                            └──→

  Phase 3: PA Audit (parallel)
  PA-1 thru PA-9                                               ████████
  (9 Opus)                                                     │ Parallel │
  + Integrative                                                └──→

  Phase 3: Weaver
  Agent 15                                                              ████
  (Opus)                                                                │Verd│
                                                                        └──→

  ┌────────────────────────────────────────────────────────────────────────┐
  │  TOTAL: ~80-105 min  │  15 agents  │  ~113 lines specification       │
  │                                                                       │
  │  Compare old pipeline:                                                │
  │  ~240-400 min  │  19-34 agents  │  963 lines specification            │
  └────────────────────────────────────────────────────────────────────────┘
```

---

## STATUS: Files Produced by This Research Team

```
  ┌───────────────────────────────────────────────────────────────────────┐
  │  PIPELINE DESIGN REPORTS (11/11 complete)                ✅ ALL DONE │
  ├───────────────────────────────────────────────────────────────────────┤
  │  01  Architecture from first principles                  ✅  ~580 ln │
  │  02  Minimal constraint set (73 lines)                   ✅  ~450 ln │
  │  03  Dispositional recipe layer (8 instructions)         ✅  ~650 ln │
  │  04  Suppressor-free specification format                ✅  ~445 ln │
  │  05  Content-form routing mechanism                      ✅  ~550 ln │
  │  06  13 irreducible concepts → pipeline map              ✅  ~450 ln │
  │  07  Blind spot coverage mechanisms                      ✅  ~530 ln │
  │  08  Activation architecture (not transmission)          ✅  ~580 ln │
  │  09  Iteration architecture (3-pass)                     ✅  ~650 ln │
  │  10  Experiment protocol (4 stages)                      ✅  ~500 ln │
  │  11  CSS value tables and structural directives          ✅  ~750 ln │
  ├───────────────────────────────────────────────────────────────────────┤
  │  CROSS-REFERENCE AUDITS (7/7 complete)                  ✅ ALL DONE │
  ├───────────────────────────────────────────────────────────────────────┤
  │  A1  Contradiction matrix (12 contradictions found)      ✅  done    │
  │  A2  Evidence grounding (67 claims audited)              ✅  done    │
  │  A3  Quantitative verification (347 claims, 83.3%)       ✅  done    │
  │  A4  Knowledge flow cluster audit (42-46)                ✅  done    │
  │  A5  Provenance + gaps cluster audit (47-53)             ✅  done    │
  │  A6  Flagship + intervention cluster audit (54-59)       ✅  done    │
  │  A7  Actionability audit (25 items, 4 tiers)             ✅  done    │
  ├───────────────────────────────────────────────────────────────────────┤
  │  BLIND SPOT + GAS TOWN INVESTIGATIONS (8/8 complete)   ✅ ALL DONE │
  ├───────────────────────────────────────────────────────────────────────┤
  │  B1  Temporal composition                                ✅  done    │
  │  B2  Reader model                                        ✅  done    │
  │  B3  Emotional arc                                       ✅  done    │
  │  B4  Compositional anti-patterns                         ✅  done    │
  │  B5  Cross-page coherence                                ✅  done    │
  │  B6  Revision quality                                    ✅  done    │
  │  B7  Gas Town flagship gap (10-dimension remediation)    ✅  done    │
  │  B8  "Wrong mode" deep investigation                     ✅  done    │
  ├───────────────────────────────────────────────────────────────────────┤
  │  SYNTHESIS                                                           │
  │  12  Adversarial pre-review (4 CF, 7 SR, 5 DT)          ✅  done    │
  │  A8  Grand synthesis wireframe                           ⏳ pending  │
  │  THIS FILE (VISUAL-ARCHITECTURE.md)                      ✅  v4     │
  └───────────────────────────────────────────────────────────────────────┘

  TOTAL PRODUCED: 28 files, ~11,000+ lines of analysis
  TOTAL AGENTS: 38+ launched (11 design + 7 audit + 8 investigation + 6 wave 2 + 6 wave 3)
```

---

## DIAGRAM 12: THE PIPELINE'S PRECISE BOUNDARY (from A5)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  KEY INSIGHT: Value Propagation vs Relationship Propagation             │
│  "The pipeline prescribes WHAT to write. Not HOW things relate."       │
│  (A5: Provenance + Gaps Cluster Audit)                                 │
└─────────────────────────────────────────────────────────────────────────┘

  Research                Pipeline              Builder Output
  ─────────              ─────────             ──────────────
  45,000 lines    ───►   73-line brief   ───►   CSS output

  WHAT SURVIVES COMPRESSION:                    WHAT DOES NOT:
  ┌──────────────────────────────────┐         ┌──────────────────────────────────┐
  │  ✅ VALUES (80-95% prescribed)   │         │  ❌ RELATIONSHIPS (0% prescribed) │
  │                                  │         │                                  │
  │  • Hex colors (#E83025)          │         │  • Which values should CO-OCCUR  │
  │  • Pixel measurements (64px)     │         │  • Which values should CONTRAST  │
  │  • Border weights (4px/3px/1px)  │         │  • Which values should VARY      │
  │  • Font sizes (1rem, 0.875rem)   │         │    TOGETHER across zones         │
  │  • Spacing scale (4-96px)        │         │  • How channels interact at      │
  │  • Token names (--color-primary) │         │    zone boundaries               │
  │                                  │         │  • Why THIS value pairs with     │
  │  55.2:1 compression:             │         │    THAT value in THIS context    │
  │  2,374 CSS lines → 43 prose      │         │                                  │
  │  Individual values survive.      │         │  Combinations do NOT survive     │
  │                                  │         │  compression. They must be       │
  └──────────────────────────────────┘         │  REGENERATED by the builder.     │
                                               └──────────────────────────────────┘

  PIPELINE v3 FIX:
  ┌──────────────────────────────────────────────────────────────────────┐
  │  Don't compress relationships. ACTIVATE them.                       │
  │                                                                      │
  │  Old: "Use ≥15 RGB delta between zone backgrounds"  (VALUE rule)    │
  │  New: "Room perception at boundaries — each zone should feel like   │
  │        entering a different room in the same building"  (RELATION)  │
  │                                                                      │
  │  Disposition D-02 replaces threshold with perceptual instruction.    │
  │  Builder with Opus intelligence generates BOTH the values AND       │
  │  the relationships — the combination is NATIVE, not prescribed.     │
  └──────────────────────────────────────────────────────────────────────┘

  Also from A5: Builder-originated material (~20% of CSS) partially
  compensates for specification gaps. Gap count is ~20-24, not 28.
  The builder EXCEEDS its specification when in COMPOSING mode.
```

---

## DIAGRAM 13: TEMPORAL COMPOSITION — SCROLL RHYTHM IN CSS (from B1)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  TEMPORAL COMPOSITION: How static CSS creates time-based experience     │
│  "Every reader experiences a page TEMPORALLY — they scroll."           │
│  (B1: Temporal Composition Investigation)                               │
└──────────────────────────────────────────────────────────────────────────┘

  THREE DIMENSIONS OF SCROLL RHYTHM:

  A. SECTION HEIGHT ("measure length")
  ────────────────────────────────────
  Gas Town arc:                     CD-006 arc:
  Z1: ████ (~600px)                 S1: ████████ (~900px)
  Z2: ████████████ (~1800px)        S2: █████████ (~1000px)
  Z3: ████████████████ (~2400px)    S3: █████████ (~1000px)
  Z4: ████████ (~1200px)            S4: ██████████ (~1100px)
                                    S5: █████████ (~1000px)
  Pattern: SHORT→LONG→LONGEST→MOD  S6: ████████ (~900px)
  (Deepening engagement + release)  S7: ████████ (~900px)
                                    S8: ██████ (~700px)
                                    Pattern: REGULAR 4/4 time

  B. VISUAL DENSITY ("dynamics" — loud/quiet)
  ────────────────────────────────────────────
  Gas Town:          CD-006:
  Z1: ░░░ SPARSE     S1: ██░ MEDIUM
  Z2: ██░ MODERATE   S2: ███ HIGH
  Z3: ███ DENSE      S3: ███ HIGH
  Z4: ██░ MODERATE   S4: ████ V.HIGH
                     S5: ███ HIGH
  CRESCENDO+RELEASE  S6: ██░ MEDIUM
                     S7: ██░ MEDIUM
                     S8: ░░░ LOW
                     PLATEAU+TAPER

  C. TRANSITION WEIGHT ("articulation" — staccato/legato)
  ────────────────────────────────────────────────────────
  Light (1px + 48px gap)  ═══ legato, smooth flow
  Medium (3px + 80px gap) ═══ breathing rest
  Heavy (colored bg + text) ═ narrative breath, full stop

  CD-006 uses 3 distinct transition types.
  Gas Town uses 1 (uniform dividers).      ← TEMPORAL MONOTONY

  ┌──────────────────────────────────────────────────────────────────┐
  │  PIPELINE v3 INTEGRATION:                                       │
  │                                                                  │
  │  Phase 0: Content Analyst maps section-by-section density arc    │
  │  Phase 1: Activation brief includes density arc description      │
  │  Phase 2: D-05 "Reader's Scroll" activates temporal awareness    │
  │           D-06 "Negative Space as Shape" prevents uniform gaps   │
  │  Phase 3: PA auditor checks transition variety + rhythm          │
  │                                                                  │
  │  KEY RULE: Scroll rhythm is NOT a single CSS property.           │
  │  It EMERGES from interaction of height × density × transitions.  │
  │  Pipeline v3 creates CONDITIONS, not specifications.             │
  └──────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 14: READER MODEL — 5-AXIS INPUT SPACE (from B2)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  READER MODEL: 5 axes that map directly to CSS parameter adjustments   │
│  "The single most consequential ABSENT dimension in the pipeline"       │
│  (B2: Reader Model Investigation)                                       │
└──────────────────────────────────────────────────────────────────────────┘

                    Expert                              General
                    (Yegge followers)                    (Google search)
    AXIS 1          ◄──────────────────────────────────►
    Info Density     line-height: 1.5                    line-height: 1.8
                     font-size: 15px                     font-size: 18px
                     max-width: 70ch                     max-width: 55ch

    AXIS 2          ◄──────────────────────────────────►
    Visual           3-4 components/viewport             2 components/viewport
    Complexity       Compound grids                      Simple stacks

    AXIS 3          ◄──────────────────────────────────►
    Progressive      None (show everything)              Collapsible sections
    Disclosure       Trust reader to scan                 Flag key points

    AXIS 4          ◄──────────────────────────────────►
    Navigation       Optional TOC                        Mandatory TOC + map
    Complexity       Expert scrolls linearly              Reader needs wayfinding

    AXIS 5          ◄──────────────────────────────────►
    Entry            Minimal header (skip to payload)    Expansive header
    Velocity         30-50% less header height           Full orientation context

  GAS TOWN PROBLEM:
  ┌──────────────────────────────────────────────────────────────┐
  │  Content says: "Stage 7+" (EXPERT reader)                    │
  │  CSS says:     line-height 1.7, padding 64px, no TOC         │
  │  = GENERAL reader treatment                                   │
  │                                                               │
  │  The pipeline had NO mechanism to translate the explicit      │
  │  "Stage 7+" audience signal into CSS parameter adjustments.   │
  │                                                               │
  │  Pipeline v3 fix: Phase 0 Content Analyst outputs reader      │
  │  profile (~15 lines). Brief Assembler merges into Tier 3.    │
  └──────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 15: 14 COMPOSITIONAL ANTI-PATTERNS (from B4)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  COMPOSITIONAL ANTI-PATTERNS: How Mechanisms Combine Badly              │
│  Current catalog covers 3/153 pairs = 2% coverage. 98% is a minefield. │
│  (B4: Anti-Pattern Investigation)                                        │
└──────────────────────────────────────────────────────────────────────────┘

  14 ANTI-PATTERNS IDENTIFIED:

  ┌─── DENSITY FAILURES (mechanisms compress each other) ───────────────┐
  │                                                                      │
  │  AP-01  DENSITY STACKING        Zone + component + disclosure ALL    │
  │         #2 + #5 + #12 + #4      say "compress." Triple-compressed   │
  │                                  content becomes illegible.           │
  │         RULE: min(all padding levels) >= 12px                        │
  │         DETECTABLE: ✅ (parse CSS cascade)                           │
  │                                                                      │
  │  AP-02  COLOR ZONE CONFLICT     Zone bg + confidence encoding +      │
  │         #7 + #9 + #1            border gradient create hierarchy      │
  │                                  DISAGREEMENT. 3 systems encode       │
  │                                  importance differently.              │
  └──────────────────────────────────────────────────────────────────────┘

  ┌─── RHYTHM FAILURES (mechanisms cancel each other's patterns) ───────┐
  │                                                                      │
  │  AP-03  TRANSITION MONOTONY     All zones use identical dividers.    │
  │  AP-04  SCALE COLLISION         2 mechanisms both claim the same     │
  │                                  typographic range.                   │
  │  AP-05  SPACING FLAT-LINE       Density arc compresses uniformly     │
  │                                  instead of progressively.            │
  └──────────────────────────────────────────────────────────────────────┘

  ┌─── COHERENCE FAILURES (mechanisms fight across boundaries) ─────────┐
  │                                                                      │
  │  AP-06  CHANNEL ISOLATION       6 channels shift but not at the      │
  │                                  same boundaries. No co-variation.    │
  │  AP-07  METAPHOR BLEED          Structural metaphor vocabulary       │
  │                                  leaks across zone boundaries.        │
  │  AP-08  COMPONENT ORPHAN        Component styled for one zone        │
  │                                  dropped into a different zone.       │
  └──────────────────────────────────────────────────────────────────────┘

  ┌─── PERCEPTION FAILURES (mechanisms produce sub-threshold output) ───┐
  │                                                                      │
  │  AP-09  GHOST MECHANISMS        Mechanism deployed but values below  │
  │                                  perception thresholds. Invisible.    │
  │  AP-10  THRESHOLD GAMING        Values set at exact threshold floor  │
  │                                  (16 RGB delta, 0.026em spacing).    │
  │                                  Technically passes, perceptually     │
  │                                  empty. THE Gas Town failure mode.    │
  └──────────────────────────────────────────────────────────────────────┘

  + 4 MORE (AP-11 through AP-14):
  AP-11 STRUCTURAL ECHO — same pattern repeated 3+ times kills surprise
  AP-12 RESTRAINT EROSION — adding mechanisms erodes deliberate absences
  AP-13 BOOKEND ASYMMETRY — header/footer echo breaks during revision
  AP-14 COGNITIVE OVERLOAD — >4 simultaneous visual channels per viewport

  PIPELINE v3 INTEGRATION:
  ┌──────────────────────────────────────────────────────────────────────┐
  │  6 anti-patterns are PROGRAMMATICALLY DETECTABLE (gate runner)      │
  │  4 require PERCEPTUAL AUDIT (PA-05 questions)                       │
  │  4 can only be caught by COMPOSITIONAL CRITIC (iteration arch)     │
  │                                                                      │
  │  Phase 3 gate runner adds 6 new binary gates for AP-01,09,10,11,14 │
  │  Phase 3 PA adds anti-pattern-aware questions                       │
  │  Phase 2 Compositional Critic catches AP-06,07,12,13               │
  └──────────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 16: REVISION QUALITY — WHY FIX CYCLES DEGRADE COMPOSITION (from B6)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  REVISION QUALITY: Edits are LOCAL, Composition is GLOBAL               │
│  "The 0.3-0.5 gap between all-fixes-applied and DESIGNED IS the        │
│   revision quality deficit."  (B6: Revision Quality Investigation)      │
└──────────────────────────────────────────────────────────────────────────┘

  THE MODE SHIFT:
  ┌────────────────────────┐          ┌────────────────────────┐
  │  GENERATIVE (build)    │          │  CORRECTIVE (fix)      │
  │                        │    ──►   │                        │
  │  Full composition in   │          │  Target specific       │
  │  working memory        │          │  defects               │
  │                        │          │                        │
  │  Each CSS decision     │          │  Each fix addresses    │
  │  considers ALL other   │          │  ONE problem           │
  │  decisions             │          │                        │
  │                        │          │  Does NOT re-hold      │
  │  CCS > 0.35            │          │  full composition      │
  │  (interdependent)      │          │  CCS unchanged/drops   │
  └────────────────────────┘          └────────────────────────┘

  EVIDENCE: Flagship Remediation
  ┌──────────────────────────────────────────────────────────────────┐
  │  Start:  PA-05 1.5/4                                             │
  │  After 9-phase remediation: PA-05 2.5/4  (+1.0)                 │
  │  After all blocking fixes: PA-05 ~3.0-3.2/4 (projected)        │
  │  Flagship target: PA-05 3.5-4.0/4                               │
  │                                                                  │
  │  THE GAP: 3.2 → 4.0 = 0.8 points                               │
  │  This gap IS revision quality deficit.                           │
  │  You cannot FIX your way to DESIGNED.                            │
  └──────────────────────────────────────────────────────────────────┘

  5 THINGS THAT BREAK DURING REVISION:
  ┌──────────────────────────────────────────────────────────────────┐
  │  1. Multi-channel encoding  — channels decouple when edited     │
  │     independently                                                │
  │  2. Density arcs — flatten when individual zones corrected to    │
  │     pass thresholds                                              │
  │  3. Bookending symmetry — header↔footer echo breaks when one     │
  │     end modified                                                 │
  │  4. Component-context coupling — zone-aware styling breaks when  │
  │     component OR zone CSS changes                                │
  │  5. Restraint coherence — deliberate absences become accidental  │
  │     when surrounding mechanisms change                           │
  └──────────────────────────────────────────────────────────────────┘

  PIPELINE v3 RESPONSE:
  ┌──────────────────────────────────────────────────────────────────┐
  │  VERDICT: REBUILD  (PA-05 < 2.5)                                │
  │  → Fresh Opus builder in COMPOSING mode                         │
  │  → Reads previous conviction artifact (not fix list)            │
  │  → Generative language, not diagnostic                          │
  │                                                                  │
  │  VERDICT: REFINE  (PA-05 2.5-3.5)                              │
  │  → DIFFERENT Opus agent (defeats continuation bias)             │
  │  → Reads conviction + PA artistic impressions                   │
  │  → Never sees gate scores or threshold numbers                  │
  │                                                                  │
  │  "You cannot fix your way to Flagship.                          │
  │   You can only compose your way there."                         │
  └──────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 17: CROSS-PAGE COHERENCE — FAMILY DNA (from B5)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  CROSS-PAGE COHERENCE: "Siblings or strangers?"                         │
│  ~30 CSS properties IDENTICAL between independently-built pages         │
│  (B5: Cross-Page Coherence Investigation)                               │
└──────────────────────────────────────────────────────────────────────────┘

  SHARED DNA (identical across Gas Town + CD-006):
  ┌──────────────────────────────────────────────────┐
  │  IDENTITY LAYER (always same):                    │
  │  • --color-primary: #E83025        (red)          │
  │  • --color-background: #FEF9F5     (warm cream)   │
  │  • --color-text: #1A1A1A           (near-black)   │
  │  • 5 accent colors                 (all match)    │
  │  • border-radius: 0               (soul)          │
  │  • box-shadow: none               (soul)          │
  │  • font trinity: Instrument Serif / Inter / JBM   │
  │  • body: 1rem / 1.7 line-height                   │
  │  • p: max-width 70ch                              │
  │  • header: dark bg + 3px red bottom border        │
  │  • callout: 4px left border DNA                   │
  │  • h3: italic                                     │
  │  • syntax highlighting: 6 colors match            │
  │  • selection: red background                      │
  │  • focus-visible: 3px solid primary               │
  │  • skip-link: present, red bg                     │
  └──────────────────────────────────────────────────┘
          │
          │  ~30 IDENTICAL PROPERTIES = FAMILY DNA
          │  This persists WITHOUT any cross-page spec.
          │  Source: tokens.css + soul constraints + components.css
          │
          ▼
  PAGE IDENTITY (different between pages):
  ┌──────────────────────────────────────────────────┐
  │  WHAT VARIES (per-page creative decisions):       │
  │  • Zone background strategy + colors              │
  │  • Type scale values + naming                     │
  │  • Structural metaphor vocabulary                 │
  │  • Callout variant semantics                      │
  │  • Component selection + layout                   │
  │  • Container width (960px vs 1100px)              │
  │  • Hover behavior patterns                        │
  │  • Transition type vocabulary                     │
  └──────────────────────────────────────────────────┘

  VERDICT: SIBLINGS, NOT STRANGERS.
  ┌──────────────────────────────────────────────────────────────────┐
  │  tokens.css + soul constraints already provide ~80% of          │
  │  cross-page coherence WITHOUT any explicit cross-page spec.     │
  │                                                                  │
  │  Pipeline v3 maintains this naturally:                          │
  │  • Builder reads tokens.css (183 lines) → shared vocabulary     │
  │  • Builder reads components.css (290 lines) → shared DNA        │
  │  • 73-line template embeds soul → shared identity               │
  │  • Per-page metaphor + zone strategy → page uniqueness          │
  │                                                                  │
  │  No additional cross-page gate needed. The DNA is INHERENT.     │
  └──────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 18: KNOWLEDGE SURVIVAL PREDICTION (from A4)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  THE PIPELINE PREDICTS ITS OWN FAILURE MODES                            │
│  Progressive incarnation (43) + Lost knowledge (44) = complete theory   │
│  (A4: Knowledge Flow Cluster Audit)                                      │
└──────────────────────────────────────────────────────────────────────────┘

  WHAT SURVIVES (Report 43):          WHAT DIES (Report 44):
  Things that can become              Things that exist only as
  MORE CONCRETE at each level         RELATIONSHIPS among values
  ┌─────────────────────────┐         ┌─────────────────────────┐
  │ border-radius: 0        │         │ Judgment calibration:    │
  │                         │         │ "15 RGB = subtle,        │
  │ observation → prohib    │         │  50 RGB = dramatic"      │
  │ → world-property        │         │                          │
  │ → CSS token → pixels    │         │ Cannot point to ONE      │
  │                         │         │ CSS value and say "this   │
  │ Each level: restated    │         │ IS judgment calibration"  │
  │ in the MEDIUM of the    │         │                          │
  │ next level              │         │ It's a PATTERN of        │
  │                         │         │ choices across the       │
  │ S(x) = 1/(1+C(x))      │         │ whole page               │
  │ C(x) = 0 → survives    │         │ C(x) > 0 → dies         │
  └────────────┬────────────┘         └────────────┬────────────┘
               │                                    │
               │  TOGETHER THEY PREDICT:            │
               └──────────┬─────────────────────────┘
                          │
                          ▼
  ┌──────────────────────────────────────────────────────────────────┐
  │  Pages that are TECHNICALLY CORRECT but CALIBRATIONALLY FLAT   │
  │                                                                  │
  │  = The Flagship experiment failure mode                         │
  │  All gates passed.  PA-05 1.5/4.                                │
  │                                                                  │
  │  Values survived compression.  Relationships did not.           │
  │  Builder used 15 RGB EVERYWHERE because 15 passes the gate.    │
  │  Without calibration, "subtle" and "dramatic" collapse to       │
  │  the same minimum-viable value.                                 │
  └──────────────────────────────────────────────────────────────────┘

  KEY TENSION (from A4):
  ┌──────────────────────────────────────────────────────────────────┐
  │  Report 42 says: "Synthesis, not compression" (SUCCESS story)   │
  │  Report 44 says: "83:1 compression loss" (LOSS story)           │
  │                                                                  │
  │  Both correct. Different scope.                                 │
  │  42 measures: assembly inputs → prompt  (10:1, reasonable)      │
  │  44 measures: total research → prompt   (83:1, brutal)          │
  │                                                                  │
  │  Most loss happened BEFORE assembly. 5 categories of dead       │
  │  knowledge never reached assembly inputs. Assembly ≠ culprit.   │
  │  Pre-assembly compression is the real bottleneck.               │
  │                                                                  │
  │  Pipeline v3 fix: 73-line template encoded ONCE from full       │
  │  research. No cascading compression. Template IS the research   │
  │  distillate, not a lossy summary of a lossy summary.            │
  └──────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 19: CCS ≠ PA-05 — TWO DIFFERENT QUALITY MEASURES (from A6)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  CCS (Compositional Coupling Score) ≠ PA-05 (Perceptual Audit Score)   │
│  They measure DIFFERENT properties. High in one ≠ high in other.       │
│  (A6: Flagship + Intervention Cluster Audit)                            │
└──────────────────────────────────────────────────────────────────────────┘

  PA-05 measures: PERCEIVED design quality
  ┌──────────────────────────────────────────────────┐
  │  • Does it look DESIGNED?                         │
  │  • Vocabulary, restraint, atmosphere              │
  │  • Content-form resonance                         │
  │  • Overall gestalt impression                     │
  │  • 1-4 scale (FLAT/ASSEMBLED/COMPOSED/DESIGNED)  │
  └──────────────────────────────────────────────────┘

  CCS measures: MECHANISM INTERDEPENDENCE
  ┌──────────────────────────────────────────────────┐
  │  • Do mechanisms INTERACT or just COEXIST?        │
  │  • Measured by removal test (remove mechanism,    │
  │    does overall quality drop disproportionately?) │
  │  • 0.00-1.00 scale (0=independent, 1=fully coupled)│
  └──────────────────────────────────────────────────┘

  THE PROOF THEY'RE DIFFERENT:
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  MIDDLE EXPERIMENT:   PA-05 = 4/4 (DESIGNED)                    │
  │                       CCS   ≈ 0.10-0.15 (Register 1)           │
  │                       → High quality through VOCABULARY alone    │
  │                       → Mechanisms independent, page still works │
  │                                                                  │
  │  GAS TOWN:           PA-05 = 3.5/4 (COMPOSED)                  │
  │                       CCS   ≈ 0.45-0.55 (Register 2.5)         │
  │                       → Higher coupling but lower perceived      │
  │                       → Calibration flat despite interaction     │
  │                                                                  │
  │  CD-006:              PA-05 = 3.5/4 (COMPOSED)                  │
  │                       CCS   ≈ 0.40 (Register 2)                │
  │                       → Same PA as Gas Town, lower CCS          │
  │                       → Both "CEILING" quality, different paths  │
  │                                                                  │
  │  FLAGSHIP (failed):   PA-05 = 1.5/4 (FLAT)                     │
  │                       CCS   = N/A (no coupling to measure)      │
  │                       → Values present but not composed          │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  IMPLICATION FOR PIPELINE v3:
  ┌──────────────────────────────────────────────────────────────────┐
  │  PA-05 is the PRIMARY success metric (user-facing quality)      │
  │  CCS is a DIAGNOSTIC metric (explains WHY PA-05 is what it is) │
  │                                                                  │
  │  Path to Flagship:                                              │
  │    PA-05 ≥ 3.5 AND CCS ≥ 0.55 AND unified metaphor             │
  │                                                                  │
  │  Middle can hit PA-05 4/4 at CCS 0.15 through vocabulary alone  │
  │  But Flagship requires BOTH high PA-05 AND high CCS             │
  │  → Vocabulary alone maxes out at Ceiling                         │
  │  → Beyond Ceiling requires compositional fluency (CCS ≥ 0.55)  │
  └──────────────────────────────────────────────────────────────────┘

  3 REGISTERS OF COMPOSITIONAL FLUENCY:
  ┌────────────────────────────────────────────────────────────────┐
  │  Register 1 (CCS 0.15-0.35): LOCAL coupling                   │
  │  → Adjacent mechanisms interact. Remove one, neighbors adjust. │
  │  → Middle tier. Achievable with recipe format.                 │
  │                                                                │
  │  Register 2 (CCS 0.35-0.55): STRUCTURAL coupling              │
  │  → Mechanism chains span sections. Remove one, structure shows.│
  │  → Ceiling tier. Requires multi-coherence awareness.           │
  │                                                                │
  │  Register 3 (CCS 0.55-0.80): ATMOSPHERIC coupling             │
  │  → Whole page is one composition. Remove anything, feel it.    │
  │  → Flagship tier. NEVER ACHIEVED. Requires 3-pass + metaphor. │
  └────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 20: APPLIED vs COMPOSED MODE — THE PRECISE CSS DISTINCTION (from B8)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  THE MODE DISTINCTION: Swiss Army Knife vs Orchestra                    │
│  "The content drives the mechanism choice. The metaphor does not."      │
│  (B8: Wrong Mode Analysis)                                               │
└──────────────────────────────────────────────────────────────────────────┘

  APPLIED MODE (Gas Town):              COMPOSED MODE (Flagship target):
  ┌─────────────────────────────┐       ┌─────────────────────────────┐
  │  Swiss Army Knife            │       │  Orchestra                   │
  │                              │       │                              │
  │  Each mechanism solves a     │       │  Each mechanism serves a     │
  │  LOCAL content problem       │       │  GOVERNING LOGIC             │
  │                              │       │                              │
  │  Q: "What does THIS          │       │  Q: "What does the page's    │
  │   section need?"             │       │   CONCEPT need here?"        │
  │                              │       │                              │
  │  Remove mechanism A:         │       │  Remove mechanism A:         │
  │  B is unchanged              │       │  B's meaning shifts          │
  └─────────────────────────────┘       └─────────────────────────────┘

  THE SMOKING GUN — CSS Custom Properties:
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  APPLIED (Gas Town):              COMPOSED (hypothetical):      │
  │                                                                  │
  │  --bg-z1: #FEF9F5;               --dispatch-open: #FEF9F5;     │
  │  --bg-z2: #F0EBE3;               --dispatch-tactical: #F0EBE3; │
  │  --bg-z3: #E8E0D4;               --dispatch-classified: #DDD4C4│
  │  --bg-z4: #F5F0E8;               --dispatch-field: #F5F0E8;    │
  │                                                                  │
  │  Named by POSITION.              Named by CONCEPT.              │
  │  Name tells builder NOTHING      Name PREDICTS other CSS:       │
  │  about border/spacing/type.      classified = heavier borders   │
  │                                   = tighter spacing = denser     │
  └──────────────────────────────────────────────────────────────────┘

  THE COMPONENT TEST:
  ┌──────────────────────────────────────────────────────────────────┐
  │  APPLIED: Callouts styled identically across all zones          │
  │  .callout { /* same everywhere */ }                             │
  │                                                                  │
  │  COMPOSED: Callouts adapt to their zone context                 │
  │  .zone-1 .callout { padding: 20px 24px; }  /* generous */      │
  │  .zone-3 .callout { padding: 12px 16px; }  /* compressed */    │
  │  .zone-3 .callout { border-left-width: 5px; }  /* heavier */   │
  └──────────────────────────────────────────────────────────────────┘

  THE REMOVAL TEST (Gas Town):
  ┌──────────────────────────────────────────────────────────────────┐
  │  Remove bento grid from Zone 2:                                  │
  │    → Zone 3 callouts unchanged                                   │
  │    → Zone 4 extension cards unchanged                            │
  │    → No other mechanism changes meaning                         │
  │    → CCS ≈ 0.25-0.35 (low coupling)                            │
  │                                                                  │
  │  Remove zone backgrounds entirely:                               │
  │    → Typography progression still works                          │
  │    → Spacing compression still works                             │
  │    → Solid offset still reads as emphatic                       │
  │    → Backgrounds provide atmosphere but DON'T CHANGE other      │
  │      mechanisms' perceived meaning                               │
  └──────────────────────────────────────────────────────────────────┘

  IS THE DISTINCTION REAL OR JUST "LESS SKILLED vs MORE SKILLED"?
  ┌──────────────────────────────────────────────────────────────────┐
  │  B8's VERDICT: REAL. The distinction is operationally definable │
  │  through 5 measurable CSS properties:                           │
  │                                                                  │
  │  1. Custom property naming: by POSITION vs by CONCEPT           │
  │  2. Component zone-modulation: absent vs present                │
  │  3. Layout choice driver: content-type vs metaphor              │
  │  4. Removal test CCS: <0.35 vs >0.45                           │
  │  5. Governing logic: absent vs articulable in 1 sentence        │
  │                                                                  │
  │  MODE IS SET AT BUILD START by the specification format:        │
  │  Checklist → APPLIED mode (inevitable)                          │
  │  Recipe + disposition → COMPOSED mode (possible, not guaranteed) │
  │                                                                  │
  │  Pipeline v3 creates conditions for COMPOSED mode via:          │
  │  D-01 content-register reading + D-02 room perception +        │
  │  Recipe format + 80% creative authority + Opus builder          │
  └──────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 21: EMOTIONAL ARC — SURPRISE, DELIGHT, AUTHORITY, CLOSURE (from B3)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  EMOTIONAL ARC: The 4 emotional registers of a designed page            │
│  Distinct from density arc, temporal composition, and narrative.         │
│  (B3: Emotional Arc Investigation)                                       │
└──────────────────────────────────────────────────────────────────────────┘

  THE 4 REGISTERS:

  1. SURPRISE ────────────────────────────────────────────────────────────
  │  "A moment where the page does something the reader didn't expect"
  │
  │  CSS TECHNIQUES:
  │  • Scale break: headline 2.5x body size (sudden visual weight)
  │  • Color inversion: dark zone (#3d3d3d bg, cream text) mid-page
  │  • Layout rupture: grid after 4+ viewports of single-column
  │  • Structural inversion: border-RIGHT in a border-LEFT page
  │
  │  GAS TOWN: ZERO surprise moments. Establishes vocabulary in Z1,
  │  then NEVER VIOLATES IT. Consistency as default = emotional flatline.
  │  Root cause: conventions brief says WHAT to do, not WHEN TO BREAK IT.
  │
  │  PIPELINE v3: D-04 "second-half moment" + D-06 "negative space
  │  as shape" create conditions for surprise. Builder must be in
  │  COMPOSING mode to deploy surprise (applied-mode builders don't
  │  break patterns they were told to follow).

  2. DELIGHT ─────────────────────────────────────────────────────────────
  │  "Small, unexpected refinements that reward close attention"
  │
  │  CSS TECHNIQUES:
  │  • Hover states revealing hidden content (table row tint, link border)
  │  • Typographic micro-refinement (tabular-nums, text-indent: -0.02em)
  │  • Zone-specific ::selection colors
  │  • Print-specific styling (@media print)
  │  • First/last child edge treatments
  │
  │  GAS TOWN DELIGHT SCORE: 2/10. Has global ::selection and hover
  │  color change. Missing: zone-aware selection, crafted hovers,
  │  tabular-nums, print styles, edge treatments, optical margin adj.

  3. AUTHORITY ───────────────────────────────────────────────────────────
  │  "The page knows what it is. Every element expresses certainty."
  │
  │  CSS SIGNATURES:
  │  • Consistent border-weight hierarchy (4px ALWAYS = primary)
  │  • Restraint (knowing what NOT to use)
  │  • Dense, purposeful header (dark bg, tight spacing)
  │  • Zero decorative elements
  │
  │  GAS TOWN: 7/10 authority. Strong header, consistent vocabulary,
  │  soul-compliant. Loses points for uniform component styling
  │  (authority implies mastery, but components ignore their context).

  4. EARNED CLOSURE ─────────────────────────────────────────────────────
  │  "The ending feels like it was earned by the journey"
  │
  │  CSS SIGNATURES:
  │  • Footer echoes header (bookending)
  │  • Density arc resolves (Z4 releases what Z3 compressed)
  │  • Final drop cap or typographic moment
  │  • Breathing space before footer (80-120px gap)
  │
  │  GAS TOWN: 5/10 closure. Has footer mirror + density release.
  │  Missing: Z4 is too similar to Z2, no final typographic moment,
  │  closing feels like "content ends" not "page resolves."

  THE EMOTIONAL ARC MAP:
  ┌──────────────────────────────────────────────────────────────────┐
  │  Viewport    1──2──3──4──5──6──7──8──9──10──11──12──13         │
  │                                                                  │
  │  Authority   ████████████████████████████████████████            │
  │  (constant)  Should be HIGH throughout (soul ensures this)       │
  │                                                                  │
  │  Surprise    ░░░░░░░░░░░░░░░░░░░░░█████████░░░░░░░░            │
  │  (rare peak) 1-2 moments only, in SECOND HALF (D-04)           │
  │                                                                  │
  │  Delight     ░░░██░░░██░░░██░░░██░░░██░░░██░░░                  │
  │  (steady)    Distributed throughout, more in high-density zones │
  │                                                                  │
  │  Closure     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████           │
  │  (earned)    Only in final 2-3 viewports, must be EARNED        │
  └──────────────────────────────────────────────────────────────────┘

  PIPELINE v3 INTEGRATION:
  ┌──────────────────────────────────────────────────────────────────┐
  │  Emotional arc is EMERGENT, not SPECIFIED.                      │
  │  Cannot be gate-checked. Can only be CREATED BY CONDITIONS.     │
  │                                                                  │
  │  D-03: "Would you sign this?" → AUTHORITY                      │
  │  D-04: "Second-half moment"   → SURPRISE                       │
  │  D-05: "Scroll as reader"     → CLOSURE                        │
  │  D-07: "Edge intentionality"  → DELIGHT                        │
  │                                                                  │
  │  PA auditor can assess emotional arc AFTER build.               │
  │  Compositional Critic (iteration arch) is the primary check.   │
  └──────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 22: QUANTITATIVE CONSISTENCY MAP (from A3)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  QUANTITATIVE VERIFICATION: 347 claims, 83.3% fully consistent         │
│  14 genuine contradictions (4.0%) — all resolvable                      │
│  (A3: Quantitative Claims Verification)                                  │
└──────────────────────────────────────────────────────────────────────────┘

  CORE THRESHOLDS — ZERO CONTRADICTIONS ACROSS 18 REPORTS:
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  THRESHOLD         │ VALUE      │ REPORTS CITING │ STATUS       │
  │  ──────────────────┼────────────┼────────────────┼──────────── │
  │  Background delta  │ ≥ 15 RGB   │ 12 reports     │ ✅ SOLID    │
  │  Stacked gap       │ ≤ 120px    │ 8 reports      │ ✅ SOLID    │
  │  Per-property gap  │ ≤ 96px     │ 6 reports      │ ✅ SOLID    │
  │  Letter-spacing    │ ≥ 0.025em  │ 7 reports      │ ✅ SOLID    │
  │  Container width   │ 940-960px  │ 5 reports      │ ✅ SOLID    │
  │  Border weights    │ 4/3/1px    │ 8 reports      │ ✅ SOLID    │
  │                                                                  │
  │  SAFE TO BUILD ON: All core thresholds are universally agreed.  │
  └──────────────────────────────────────────────────────────────────┘

  COMPOSITIONAL TARGETS (from A3's cross-verification):
  ┌──────────────────────────────────────────────────────────────────┐
  │  Background delta:  15 RGB = FLOOR,  25-50 RGB = COMPOSITIONAL │
  │  Letter-spacing:    0.025em = FLOOR, 0.03-0.05em = COMPOSITIONAL│
  │  Stacked gap:       120px = CEILING, 60-90px = COMPOSITIONAL   │
  │  Mechanisms:        8 = FLOOR (Middle), 14-16 = COMPOSITIONAL  │
  │  CSS lines:         350 = FLOOR (Middle), 800-1200 = TARGET    │
  │  CCS:               0.15 = FLOOR, 0.55+ = FLAGSHIP TARGET     │
  └──────────────────────────────────────────────────────────────────┘

  14 GENUINE CONTRADICTIONS (clustered in 3 areas):
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  CLUSTER 1: CCS Values (5 contradictions)                       │
  │  • CD-006 CCS: Report 54 says 0.15-0.20, Report 57 says 0.40  │
  │    RESOLUTION: Accept 57's methodology (removal test > counting)│
  │  • Gas Town CCS: varies from 0.25 to 0.55 depending on method  │
  │    RESOLUTION: ~0.35 is best estimate                           │
  │                                                                  │
  │  CLUSTER 2: Line Counts (5 contradictions)                      │
  │  • Conventions brief: 570 vs 609 vs 610 lines (versioning)     │
  │  • Execution prompt: 542 vs 578 vs 1004 (different versions)   │
  │    RESOLUTION: Accept most recent version number                │
  │                                                                  │
  │  CLUSTER 3: Compression Ratios (4 contradictions)               │
  │  • 44:1 vs 55:1 vs 83:1 (different denominators)               │
  │    RESOLUTION: Specify denominator. 83:1 = total research.     │
  │    44:1 = assembly-only. 10:1 = assembly inputs to prompt.     │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 23: ACTIONABILITY MATRIX — 25 RECOMMENDATIONS ACROSS 4 TIERS (from A7)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  ACTIONABILITY AUDIT: 47 recommendations → 25 after dedup → 4 tiers    │
│  Meta-recommendation: 70% SUBTRACTION, 30% ADDITION                     │
│  (A7: Actionability Audit)                                               │
└──────────────────────────────────────────────────────────────────────────┘

  THE PRIORITY GRID (Impact × Effort):
  ┌─────────────────────────────────────────────────────────────────────┐
  │                                                                     │
  │                 LOW EFFORT        MODERATE         HIGH EFFORT      │
  │             ┌───────────────┬───────────────┬───────────────┐      │
  │  HIGH       │ #1 Recipe fmt │ #10 Brief     │ #23 Live      │      │
  │  IMPACT     │ #2 Thresholds │     reorder   │     pipeline  │      │
  │             │ #3 Zone-count │ #11 D-01→D-05 │ #25 Flagship  │      │
  │             │ #4 Content-fit│ #12 Revision  │     4/4       │      │
  │             │ #5 Mech cap   │     cycle     │               │      │
  │             │ #6 3-Q test   │ #13 Value     │               │      │
  │             │ #9 Sel. logic │     tables    │               │      │
  │             ├───────────────┼───────────────┼───────────────┤      │
  │  MEDIUM     │ #7 PA fix     │ #15 Emotion   │ #24 Atmo      │      │
  │  IMPACT     │ #8 Char table │ #16 Callout   │     coupling  │      │
  │             │ #14 Gestalt   │ #17 Content   │               │      │
  │             │     auditor   │     type prop  │               │      │
  │             ├───────────────┼───────────────┼───────────────┤      │
  │  EXPERIMENT │ #22 Q20       │ #18 73-line   │ #21 Revision  │      │
  │  (VALIDATE) │ #20 Dispos.   │ #19 Opus-as-  │     cycle     │      │
  │             │    only       │     builder   │     test      │      │
  │             └───────────────┴───────────────┴───────────────┘      │
  │                                                                     │
  │  READ: Top-left first. Each cell = highest ROI in that quadrant.   │
  └─────────────────────────────────────────────────────────────────────┘

  TIER BREAKDOWN:
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  TIER 1: IMMEDIATELY ACTIONABLE (9 items, 2-4 hours)            │
  │  ════════════════════════════════════════════════════            │
  │  All are file edits. A single agent session could apply all 9.  │
  │                                                                  │
  │  #1  Recipe format ─── breaks Chain A + Chain D ─── +0.5-1.0   │
  │  #2  Perception thresholds ─── breaks Chain A + E ─── 8 lines  │
  │  #3  Content-volume → zone-count map ─── ROOT CAUSE ─── 6 ln   │
  │  #4  Content-form fit gate ─── ROOT CAUSE ─── 5 lines          │
  │  #5  Mechanism density cap per viewport ─── 2 lines            │
  │  #6  Semantic value 3-question test ─── #1 per Report 50       │
  │  #7  PA question count reconciliation ─── 4 find-replace       │
  │  #8  Component character table ─── 12 lines                    │
  │  #9  Mechanism selection logic distinction ─── 6 lines         │
  │                                                                  │
  │  TIER 2: ACTIONABLE WITH DESIGN (8 items, 4-8 hours)            │
  │  ════════════════════════════════════════════════════            │
  │  Require drafting new content or restructuring existing files.  │
  │                                                                  │
  │  #10 Restructure brief (disposition at BOTH ends)               │
  │  #11 Add D-01 through D-05 (dispositional instructions)        │
  │  #12 Design creative revision cycle                             │
  │  #13 Design zone-level CSS value tables                         │
  │  #14 Add integrative gestalt auditor                            │
  │  #15 Add emotional trajectory to TC + PA                        │
  │  #16 Add callout scarcity rule                                  │
  │  #17 Add content-type propagation to builder                    │
  │                                                                  │
  │  TIER 3: REQUIRES EXPERIMENTATION (5 items, 8-20 hrs each)     │
  │  ════════════════════════════════════════════════════            │
  │  Testable hypotheses. Strong theory, N=0 evidence.              │
  │                                                                  │
  │  #18 THE 73-line minimal constraint set experiment              │
  │  #19 Opus-as-sole-builder experiment                            │
  │  #20 Disposition-only experiment (cheapest after Q20)           │
  │  #21 Creative revision cycle experiment                         │
  │  #22 Q20 thresholds-only experiment (CHEAPEST of all)           │
  │                                                                  │
  │  TIER 4: THEORETICAL (3 items, weeks+)                          │
  │  ════════════════════════════════════════════════════            │
  │  Architectural changes. Only if experiments validate.           │
  │                                                                  │
  │  #23 Live pipeline (build-evaluate-revise loop)                 │
  │  #24 Atmospheric coupling (Register 3 CCS ≥0.55)               │
  │  #25 Flagship 4/4 achievement (the end goal)                    │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  4 CONVERGENCE FINDINGS:
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  C1: Suppressor REMOVAL > capability ADDITION                   │
  │      Items #1-#7 are ALL removals. 60-70% of quality gap.      │
  │                                                                  │
  │  C2: Recipe format = #1 LEVER                                   │
  │      3 independent reports agree. N=2 but effect size massive.  │
  │                                                                  │
  │  C3: Positive scaffolding = ~70 LINES                           │
  │      Multi-coherence (30) + metaphor (10) + density (10) +     │
  │      content-form (5) + creative authority (15) = ~70 lines.    │
  │                                                                  │
  │  C4: Iteration = the ARCHITECTURAL FRONTIER                     │
  │      #1 structural blind spot. Highest-leverage intervention.   │
  │      But requires experimental validation before commitment.    │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  IMPLEMENTATION SEQUENCE:
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  Phase 1 ───► Phase 2 ───► Phase 3 ───► Phase 4 ───► Phase 5   │
  │  FIXES        CHEAP         DESIGN       FULL          ARCH     │
  │  (2-4h)       TESTS         WORK         TESTS         (wks+)  │
  │  #1-#9        (4-8h)        (4-8h)       (8-20h)       #23-25  │
  │               #22,#20       #10-#14      #18,#19,#21            │
  │                                                                  │
  │  "Remove 900 lines. Keep 73. Test. Then invest."                │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 24: ADVERSARIAL REVIEW — RED TEAM ATTACK MAP (from Report 12)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  ADVERSARIAL VERDICT: PROCEED WITH CAUTION                               │
│  4 Critical Failures + 7 Significant Risks + 5 Design Tensions          │
│  (12: Pipeline v3 Adversarial Pre-Review)                                │
└──────────────────────────────────────────────────────────────────────────┘

  CF: CRITICAL FAILURES (MUST FIX)
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  CF-01: THE LINE COUNT SHELL GAME                               │
  │  ┌────────────────────────────────────────────────────────────┐ │
  │  │  CLAIM: "73-line minimal constraint set"                   │ │
  │  │  REALITY: Builder's actual input stack:                    │ │
  │  │                                                            │ │
  │  │  Constraint set           73  lines                       │ │
  │  │  Disposition layer       113  lines                       │ │
  │  │  TC brief                 42  lines                       │ │
  │  │  Value tables            550  lines                       │ │
  │  │  tokens.css              174  lines                       │ │
  │  │  components.css        1,196  lines                       │ │
  │  │  mechanism-catalog       300+ lines                       │ │
  │  │  CD-006 exemplar       1,200+ lines                       │ │
  │  │  Content source       variable                            │ │
  │  │  Conviction artifacts    ~50  lines                       │ │
  │  │  ──────────────────────────────                           │ │
  │  │  TOTAL:             ~3,600+ lines                         │ │
  │  │                                                            │ │
  │  │  v2 actual input:    ~2,800 lines                         │ │
  │  │  v3 actual input:    ~3,600 lines  ← LARGER, NOT SMALLER  │ │
  │  │                                                            │ │
  │  │  FIX: Honest accounting. Say "better organized" not       │ │
  │  │       "less input." The improvement is FORMAT not VOLUME.  │ │
  │  └────────────────────────────────────────────────────────────┘ │
  │                                                                  │
  │  CF-02: COMPOSITIONAL CRITIC = PURE FANTASY (zero evidence)     │
  │  CF-03: SUPPRESSOR REMOVAL NOT MONOTONICALLY POSITIVE           │
  │         (S-09 stacking gap, S-14 mechanism count, S-07 letter)  │
  │  CF-04: N=4 PROBLEM UNDERMINES EVERY PREDICTION                 │
  │         (7 confounded variables, 0 isolated)                    │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  COMPLEXITY AUDIT — Is v3 Actually Simpler?
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  METRIC                │  v2          │  v3          │  DELTA   │
  │  ──────────────────────┼──────────────┼──────────────┼───────── │
  │  Builder-facing lines  │  71-530      │  ~770        │  +45%+   │
  │  Total system lines    │  2,500-3,000 │  3,000-3,500 │  +17%    │
  │  Agent count           │  6-19        │  14          │  ~same   │
  │  OPUS agent count      │  1-3         │  14          │ +367%+   │
  │  Wall clock time       │  35-150 min  │  80-210 min  │  +40%+   │
  │  Untested components   │  0           │  3           │  +3 NEW  │
  │  Tokens per page       │  ~300K       │  ~600K       │  2×      │
  │                                                                  │
  │  VERDICT: NOT SIMPLER. DIFFERENTLY COMPLEX.                     │
  │  Constraint language is cleaner. Format is better.              │
  │  But total system is LARGER, more EXPENSIVE, has 3 UNTESTED    │
  │  components (Critic, conviction artifact, disposition layer).   │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  WHAT WOULD BREAK FIRST (probability-ordered):
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  P=0.40  Container width violation (historical: 3/5 = 60%)     │
  │  ████████████████████████████████████████░░░░░░░░░░░░░░░░░░░░  │
  │                                                                  │
  │  P=0.35  Whitespace voids (S-09 removed, D-06 is a hope)       │
  │  ███████████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░  │
  │                                                                  │
  │  P=0.30  Conviction artifact failure (20 ln ≠ 1000 ln intent)  │
  │  ██████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
  │                                                                  │
  │  P=0.25  Compositional Critic silence (too vague to act on)     │
  │  █████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
  │                                                                  │
  │  P=0.20  Micro-typography recurrence (letter-spacing <0.5px)    │
  │  ████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
  │                                                                  │
  │  P=0.15  Content-form mismatch (TC router misclassification)    │
  │  ███████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  7 RECOMMENDATIONS:
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  REC-01  Run smoke test BEFORE building anything (BLOCKING)     │
  │  REC-02  Start single-pass, add iteration only if needed        │
  │  REC-03  Keep programmatic gates for binary constraints         │
  │  REC-04  Phase suppressor removal (keep S-09, letter-spacing)   │
  │  REC-05  Honest complexity accounting (~3,600 lines not 73)     │
  │  REC-06  Design falsification test as MANDATORY                 │
  │  REC-07  Budget for failure recovery (25-40% builds fail)       │
  │                                                                  │
  │  The v3 direction is CORRECT — activation over transmission,    │
  │  recipe over checklist, compositional freedom over guardrails.  │
  │  But the implementation has gaps that MUST be addressed first.  │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  10 UNTESTED ASSUMPTIONS:
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  1. Opus in COMPOSING mode → PA-05 ≥3.5        N=0  UNTESTED   │
  │  2. Dispositional language activates diff mode  N=0  UNTESTED   │
  │  3. Critic feedback improves builder output     N=0  UNTESTED   │
  │  4. Conviction artifact preserves intent        N=0  UNTESTED   │
  │  5. Value tables = vocabulary not checklist     N=0  UNTESTED   │
  │  6. Content-form router classifies correctly    N=0  UNTESTED   │
  │  7. 80% creative authority → consistent pages   N=0  UNTESTED   │
  │  8. Fresh instances prevent bias w/o loss       N=0  UNTESTED   │
  │  9. 3 passes converge (not drift)              N=0  UNTESTED   │
  │ 10. Suppressor removal monotonically positive   N=4  PARTIAL    │
  │                                                                  │
  │  Score: 9/10 untested. 1/10 has partial confounded support.     │
  │  EVERY quantitative prediction is a HYPOTHESIS, not a FINDING.  │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  APPENDIX: INTER-REPORT CONTRADICTIONS FOUND BY RED TEAM:
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  Reports 01 vs 02: Builder input "93-108" vs "73" lines  [MED] │
  │  Reports 01 vs 09: "single pass" vs "3 passes"          [HIGH] │
  │  Reports 01 vs 09: "12-15 agents" vs "14 Opus alone"    [HIGH] │
  │  Reports 02 vs 08: "73 lines" vs "~550 lines"           [HIGH] │
  │  Reports 03 vs 11: "never specify CSS" vs 550 lines     [HIGH] │
  │  Reports 04 vs 01: "phased removal" vs "all removed"    [MED]  │
  │  Reports 08 vs 11: "activate" vs "transmit 550 lines"   [HIGH] │
  │  Report 09 vs 09:  Wall clock sub-estimates don't sum    [LOW]  │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘
```

---

## DIAGRAM 25: GRAND SYNTHESIS — THE FULL PICTURE (from all 28 reports)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                    PIPELINE v3: WHAT WE ACTUALLY KNOW                    │
│                    (28 reports, ~11,000 lines, 38+ agents)               │
└──────────────────────────────────────────────────────────────────────────┘

  WHAT IS PROVEN (N≥2, consistent across experiments):
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  ✅ Recipe format > checklist format (N=2, massive effect)      │
  │  ✅ Perception thresholds prevent invisible CSS (N=3)           │
  │  ✅ Container 940-960px is non-negotiable (N=5, 60% violated)   │
  │  ✅ "Sample 2-4 mechanisms" is the #1 suppressor (unanimous)    │
  │  ✅ Core thresholds: ≥15 RGB, ≤120px gap, ≥0.025em (N=12+)    │
  │  ✅ PA Mode 4 (9 auditors) >> Mode 2 for catching failures     │
  │  ✅ Applied ≠ Composed mode, set at BUILD START (B8)            │
  │  ✅ Value propagation survives compression; relationships don't │
  │  ✅ Revision improves locally but degrades composition globally │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  WHAT IS THEORIZED (strong reasoning, N≤1):
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  🔶 73-line constraint set → PA-05 ≥3.5 (N=0, TESTABLE)        │
  │  🔶 Opus builder > Sonnet builder (N=0 isolated, confounded)    │
  │  🔶 Dispositional instructions activate native capability       │
  │  🔶 Suppressor removal closes 60-70% of quality gap             │
  │  🔶 3 compositional registers (local/structural/atmospheric)    │
  │  🔶 Content-form coupling = pre-build content analysis helps    │
  │  🔶 Anti-patterns: only 2% of mechanism pairs are catalogued   │
  │  🔶 Emotional arc is emergent, not specifiable                  │
  │  🔶 Cross-page coherence is inherent from shared tokens/soul    │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  WHAT IS FANTASY (zero evidence, should test before building):
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  ❌ Compositional Critic produces useful artistic feedback       │
  │  ❌ 20-line conviction artifact preserves compositional intent   │
  │  ❌ 3-pass architecture converges (instead of drifts)            │
  │  ❌ "Activation not transmission" is falsifiable/measurable      │
  │  ❌ 80% creative authority produces design system consistency    │
  │  ❌ Register 3 (atmospheric coupling) is achievable by AI       │
  │  ❌ Flagship 4/4 exists as a discrete achievable register       │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  THE ONE-LINE SUMMARY:
  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  v3's DIRECTION is right (activation > transmission).            │
  │  v3's COMPLEXITY is understated (~3,600 lines, not 73).         │
  │  v3's PREDICTIONS are untested (9/10 assumptions at N=0).       │
  │                                                                  │
  │  NEXT STEP: Run the cheapest experiment first.                  │
  │  Q20 (thresholds-only, 4 hours) → validates suppressor thesis.  │
  │  Then #20 (disposition-only, 2-4 hours) → validates activation. │
  │  Only THEN commit to full architecture.                         │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘
```
