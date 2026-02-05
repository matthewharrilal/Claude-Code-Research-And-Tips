# BACKBONE.md
## The Master Narrative of the KortAI Design System

═══════════════════════════════════════════════════════════════════════════════
## HOW TO READ THIS DOCUMENT
═══════════════════════════════════════════════════════════════════════════════

**If you want to understand the system:** Read sections 1-6 in order. This tells
the story of how scattered research became a connected design system.

**If you want to find something specific:** Use the Navigation Index (Section 11).

**If you want to trace a finding:** Use the Research Chain Table (Section 7).

**If you want to apply a pattern:** Start with PATTERN-INDEX.md in the patterns/
folder — it links back here for provenance.

═══════════════════════════════════════════════════════════════════════════════
## 1. THE PIPELINE AT A GLANCE
═══════════════════════════════════════════════════════════════════════════════

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        THE RESEARCH CHAIN                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ORIGINAL RESEARCH (337 findings)                                          │
│   └── R-1: Documentation Patterns (28)                                      │
│   └── R-2: Creative Layouts (78)                                            │
│   └── R-3: Density Dimensions (51) ★ Primary for DD                         │
│   └── R-4: Axis Innovations (192)                                           │
│   └── R-5: Combination Theory (39)                                          │
│                                                                             │
│         ▼                                                                   │
│                                                                             │
│   STAGE 1: COMPONENTS (54% → 92%)                                           │
│   └── 5 Soul Pieces discovered                                              │
│   └── COMP-F-001 to COMP-F-021 documented                                   │
│   └── 11 components remediated                                              │
│                                                                             │
│         │ ENABLED (soul-compliant foundation)                               │
│         ▼                                                                   │
│                                                                             │
│   STAGE 2: DENSITY (DD) — 34.5/40 avg                                       │
│   └── 6 patterns validated (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL,          │
│       TIDAL, FRACTAL)                                                       │
│   └── DD-F-001 to DD-F-018 documented                                       │
│   └── DD-F-006 FRACTAL = meta-pattern                                       │
│                                                                             │
│         │ CONSTRAINED (density vocabulary + quality bar)                    │
│         │ GENERATED (DD-F-### outbound findings)                            │
│         ▼                                                                   │
│                                                                             │
│   STAGE 3: ORGANIZATION (OD) — ⏳ IN PROGRESS                               │
│   └── 6 patterns to explore                                                 │
│   └── R-1 as primary research                                               │
│   └── Must apply DD-F-006 (fractal)                                         │
│                                                                             │
│         │ CONSTRAINED (org serves density)                                  │
│         │ GENERATED (OD-F-### outbound findings)                            │
│         ▼                                                                   │
│                                                                             │
│   STAGE 4: AXIS (AD) — ⏳ PENDING                                           │
│                                                                             │
│         ▼                                                                   │
│                                                                             │
│   STAGE 5: COMBINATION (CD) — ⏳ PENDING                                    │
│                                                                             │
│         ▼                                                                   │
│                                                                             │
│   MIGRATION                                                                 │
│   └── Every pattern traces to provenance                                    │
│   └── Every page cites applicable findings                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

═══════════════════════════════════════════════════════════════════════════════
## 2. STAGE 1: COMPONENT FOUNDATION
═══════════════════════════════════════════════════════════════════════════════

### The Story

Before there were density explorations, there was a gap. The audit revealed 54%
soul compliance — not broken, but not whole. The Foundation Remediation wasn't
just fixing CSS. It was listening.

As each component was examined, perceptual truths emerged. Sharp edges felt
authoritative (Soul Piece #1). Serif italic carried timeless wisdom (Soul Piece
#2). Callouts sharing 2-zone structure felt like family (Soul Piece #3). Flat
design felt honest (Soul Piece #4). Square shapes felt procedural (Soul Piece #5).

### What It Consumed

| Input | What Was Extracted |
|-------|-------------------|
| Component TSX files | Actual implementations to audit |
| globals.css | Violations requiring remediation |
| KortAI Reference | Target aesthetic for comparison |

### What It Produced

| Output | Why It Matters |
|--------|----------------|
| 5 Soul Pieces | DNA for all future work |
| COMP-F-001 to COMP-F-021 | Finding IDs for chain citation |
| 11 compliant components | Foundation DD could build on |
| 3 globals.css fixes | Hidden violations removed |

### Key Decisions

1. **Sharp edges everywhere** — border-radius: 0, no exceptions
2. **Serif italic for wisdom** — Instrument Serif for Essence/CoreAbstraction
3. **2-zone callout structure** — label + body + 4px left accent
4. **No shadows anywhere** — box-shadow: none, hierarchy through size/color
5. **Square step indicators** — procedures use squares, not circles

═══════════════════════════════════════════════════════════════════════════════
## 3. STAGE 2: DENSITY EXPLORATION (DD)
═══════════════════════════════════════════════════════════════════════════════

### The Story

With solid components, the question became: How do these breathe together on
a page? Six explorations tested six hypotheses about density rhythm.

DD-001 (PULSE) explored breathing — inhale/exhale alternation. DD-002 (CRESCENDO)
explored progressive build — sparse to dense. DD-003 (ISLANDS) explored clusters
floating in sparse ocean. DD-004 (GEOLOGICAL) explored stratification — five
layers from atmosphere to bedrock. DD-005 (RIVERS) explored width as inverse
density — narrow channels for code, wide rivers for context.

Then DD-006 (FRACTAL) discovered the meta-pattern: The same dense/sparse rhythm
should appear at page level, section level, component level, AND character level.
Self-similarity creates coherence that variety cannot. DD-006 scored highest
(36/40) by applying this principle everywhere.

### What It Consumed

| Input | What Was Extracted |
|-------|-------------------|
| 5 Soul Pieces | Non-negotiable constraints |
| COMP-F-### findings | Component decisions to enforce |
| R-3 Density Dimensions | 51 findings on density theory |
| 11 compliant components | Building blocks for explorations |

### What It Produced

| Output | Why It Matters |
|--------|----------------|
| 6 Density Patterns | Validated rhythms for documentation |
| DD-F-001 to DD-F-018 | First outbound findings in chain |
| HANDOFF-DD-TO-OD | Gate file OD must read first |
| Quality bar: 34.5/40 | Standard for future stages |

### Key Decisions

1. **FRACTAL is the meta-pattern** — DD-F-006 applies to ALL future work
2. **Traffic-light is critical anti-pattern** — Never green+red adjacent
3. **CRESCENDO for learning** — Progressive build for tutorials
4. **Width = inverse density** — Rivers concept from DD-005
5. **Layers for expert/novice paths** — Geological model from DD-004

═══════════════════════════════════════════════════════════════════════════════
## 4. STAGE 3: ORGANIZATION (OD) — IN PROGRESS
═══════════════════════════════════════════════════════════════════════════════

### The Story (Unfolding)

DD explored visual rhythm. OD explores cognitive rhythm — how information should
be ORGANIZED, not just spaced.

Six explorations planned:
- OD-001 Conversational: Q&A dialogue patterns
- OD-002 Narrative Arc: Setup → Conflict → Resolution
- OD-003 Task-Based: "I want to..." goal structures
- OD-004 Confidence-Based: Certain → Uncertain flow
- OD-005 Spatial/Map: Hub-and-spoke navigation
- OD-006 Creative: TBD

### What It Will Consume

| Input | What Will Be Extracted |
|-------|------------------------|
| DD-F-### findings | Density constraints |
| HANDOFF-DD-TO-OD | Mandatory gate file |
| R-1 Documentation Patterns | Primary research (28 findings) |
| 5 Soul Pieces | Non-negotiable constraints |

### What It Will Produce

| Output | Why It Will Matter |
|--------|-------------------|
| 6 Organizational Patterns | Validated structures |
| OD-F-### findings | Outbound findings for AD/CD |
| HANDOFF-OD-TO-AD | Gate file for next stage |
| Potential cognitive soul pieces | New DNA for the body |

═══════════════════════════════════════════════════════════════════════════════
## 5. STAGE 4: AXIS (AD) — PENDING
═══════════════════════════════════════════════════════════════════════════════

AD will explore axis layouts — how components are positioned on the page.
Z-pattern, F-pattern, Bento grid, spiral reveal, axis choreography.

AD consumes: OD-F-### findings + accumulated constraints
AD produces: AD-F-### findings + validated axis patterns

═══════════════════════════════════════════════════════════════════════════════
## 6. STAGE 5: COMBINATION (CD) — PENDING
═══════════════════════════════════════════════════════════════════════════════

CD will explore component combinations — how components work together.
Reasoning inside Code, Task containing Decision, File Tree with Callouts.

CD consumes: AD-F-### findings + accumulated constraints
CD produces: CD-F-### findings + combination rules

═══════════════════════════════════════════════════════════════════════════════
## 7. RESEARCH CHAIN TABLE
═══════════════════════════════════════════════════════════════════════════════

| Research | Stage 1 | Stage 2 (DD) | Stage 3 (OD) | Stage 4 (AD) | Stage 5 (CD) |
|----------|---------|--------------|--------------|--------------|--------------|
| R-1 (28) | — | Partial | ★★★ PRIMARY | Secondary | Secondary |
| R-2 (78) | — | Partial | Secondary | Secondary | Secondary |
| R-3 (51) | Informed | ★★★ PRIMARY (~76%) | Reference | Reference | Reference |
| R-4 (192) | — | Partial | Reference | ★★★ PRIMARY | Reference |
| R-5 (39) | — | Partial | Secondary | Secondary | ★★★ PRIMARY |

**Application Legend:** ★★★ PRIMARY = Main research source for this stage

═══════════════════════════════════════════════════════════════════════════════
## 8. GENERATED RESEARCH FLOW
═══════════════════════════════════════════════════════════════════════════════

| Stage | Generated | Count | Consumed By |
|-------|-----------|-------|-------------|
| Stage 1 | COMP-F-### | 21 | DD, OD, AD, CD, Migration |
| Stage 2 | DD-F-### | 18 | OD, AD, CD, Migration |
| Stage 3 | OD-F-### | TBD | AD, CD, Migration |
| Stage 4 | AD-F-### | TBD | CD, Migration |
| Stage 5 | CD-F-### | TBD | Migration |

═══════════════════════════════════════════════════════════════════════════════
## 9. SOUL PIECES CUMULATIVE MATRIX
═══════════════════════════════════════════════════════════════════════════════

| # | Soul Piece | Stage 1 | DD-001 | DD-002 | DD-003 | DD-004 | DD-005 | DD-006 |
|---|------------|---------|--------|--------|--------|--------|--------|--------|
| 1 | Sharp Edges | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 2 | Archivist Serif | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 3 | Family DNA | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 4 | No Shadows | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 5 | Squares Signal | ✅ | N/A | ✅ | N/A | N/A | N/A | N/A |

**Soul compliance: 100% across all completed work.**

═══════════════════════════════════════════════════════════════════════════════
## 10. THE CAUSAL CHAIN
═══════════════════════════════════════════════════════════════════════════════

```
Component remediation (54% → 92%, 5 soul pieces)
  │
  │ ENABLED (soul-compliant foundation)
  │
  ▼
DD density explorations (6 patterns, 34.5/40 avg)
  │
  │ CONSTRAINED (density vocabulary + quality bar + DD-F-006 fractal)
  │ GENERATED (DD-F-### outbound findings)
  │
  ▼
OD organizational explorations (⏳ in progress)
  │
  │ CONSTRAINED (org patterns must SERVE density)
  │ GENERATED (OD-F-### outbound findings)
  │
  ▼
AD axis explorations (⏳ pending)
  │
  ▼
CD combination explorations (⏳ pending)
  │
  ▼
Migration
  │
  └── Every pattern traces to provenance
  └── Every page cites applicable findings
```

**Reading the arrows:**
- ENABLED = This stage made the next stage possible
- CONSTRAINED = This stage limits what the next stage can do
- GENERATED = This stage produced findings the next stage must consume

═══════════════════════════════════════════════════════════════════════════════
## 11. NAVIGATION INDEX
═══════════════════════════════════════════════════════════════════════════════

| I want to... | Go to... |
|--------------|----------|
| Understand the whole system | Read this document top to bottom |
| Apply a pattern | `patterns/PATTERN-INDEX.md` |
| Find a COMP-F-### finding | `provenance/stage-1-components/component-findings.md` |
| Find a DD-F-### finding | `provenance/stage-2-density-dd/DD-outbound-findings.md` |
| Start OD work | `provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` |
| Read original research | `provenance/original-research/` |
| Verify soul compliance | `checkpoints/SOUL-DISCOVERIES.md` |
| See exploration artifacts | `explorations/density/`, `explorations/organizational/` |
| Track research application | `checkpoints/RESEARCH-ACTIVE.md` |

═══════════════════════════════════════════════════════════════════════════════
## 12. HOW TO USE THIS SYSTEM
═══════════════════════════════════════════════════════════════════════════════

**Building went forward:** Research → Components → DD → OD → AD → CD

**Using goes backward:** Pattern → Provenance → Research

When you select a pattern from PATTERN-INDEX.md, you're not just selecting a
layout technique. You're selecting the accumulated research behind it.

**Do not apply a pattern without reading its provenance.**

The provenance tells you:
- Why this pattern exists (what research justified it)
- What constraints it carries (what soul pieces it must honor)
- What it enables (what downstream patterns depend on it)

═══════════════════════════════════════════════════════════════════════════════
## 13. ONE THREAD THROUGH THE WHOLE BODY
═══════════════════════════════════════════════════════════════════════════════

Let's trace one finding through every stage: **R3-023 Fractal Self-Similarity**

**Stage 0 (Research):**
R3-023 stated: "Good density patterns are fractal (self-similar at scales)"
Status: PENDING APPLICATION

**Stage 1 (Components):**
Not directly consumed — BUT the soul pieces (sharp edges, no shadows) constrain
HOW fractal patterns will look visually.

**Stage 2 (DD):**
DD-006 tested R3-023 directly. Applied the same █░░█░░█░░ rhythm at:
- Page level (dense/sparse sections)
- Section level (dense/sparse paragraphs)
- Component level (dense/sparse zones)
- Character level (dense code/sparse comments)

Result: 36/40 — HIGHEST score. R3-023 validated as DD-F-006.
Status: APPLIED, EXEMPLARY

**Stage 3 (OD):**
DD-F-006 is MANDATORY for all OD explorations (per HANDOFF-DD-TO-OD.md).
OD patterns must apply fractal self-similarity regardless of org structure.
Status: PENDING (OD not started)

**Stage 4 (AD):**
Axis layouts must SERVE the fractal pattern.
Status: PENDING

**Stage 5 (CD):**
Component combinations must maintain fractal rhythm.
Status: PENDING

**Migration:**
Every migrated page should show fractal self-similarity.
PATTERN-INDEX → DD-F-006 provenance → All of the above

**This is how research becomes reality. One finding, accumulated through every stage.**

═══════════════════════════════════════════════════════════════════════════════
