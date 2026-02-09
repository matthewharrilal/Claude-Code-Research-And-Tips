<!-- ═══════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/BACKBONE.md
Tier: B | Batch: 5 | Generated: 2026-02-06

1. WHY THIS EXISTS
Master narrative document that tells the story of how scattered research
(337 findings across R1-R5) became a connected design system through a
5-stage pipeline. This is the "spine" — every other DESIGN-SYSTEM file
hangs off the structure and provenance chain documented here.

2. THE QUESTION THIS ANSWERS
"How did 337 research findings become 6 validated density patterns,
21 component findings, 18 DD findings, and a coherent design system —
and what is the exact chain of evidence?"

3. STATUS
COMPLETE — covers full pipeline from original research through Stage 3
(OD). Stage 4 (AD) and Stage 5 (CD) sections are placeholders awaiting future work.

5. BUILT ON
- COMP-F-001 to COMP-F-021 (component findings)
- DD-F-001 to DD-F-018 (density dimension findings)
- DD-F-006 FRACTAL meta-pattern
- R3-023 (density dimension research finding)
- SOUL-DISCOVERIES.md
- RESEARCH-ACTIVE.md
- PIPELINE-MANIFEST.md
- component-findings.md
- DD-outbound-findings.md

6. MUST HONOR
- Finding IDs must match PIPELINE-MANIFEST.md exactly
- Score values must match DD exploration audit scores
- Stage ordering (Components → DD → OD → CD) is immutable
- R3-023 full chain trace must remain intact

8. CONSUMED BY
- DESIGN-SYSTEM/CLAUDE.md (navigation table, "read BACKBONE" instruction)
- Multiple STAGE-HEADERs (provenance references)
- DD-outbound-findings.md (backlinks)
- density-patterns.md (provenance references)
- PATTERN-INDEX.md (chain requirement references)
- 12+ inbound references total

10. DIAGNOSTIC QUESTIONS
Q1: Does every finding ID cited here (COMP-F-XXX, DD-F-XXX) have a
    matching entry in PIPELINE-MANIFEST.md?
Q2: Does the R3-023 chain trace connect unbroken from original research
    through DD exploration to validated pattern?
Q3: Are the DD exploration scores (e.g., 33/40, 35/40) consistent with
    the values in density-patterns.md?

END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════ -->

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
│   STAGE 3: ORGANIZATION (OD) — ✅ COMPLETE (~34.8/40 avg)                    │
│   └── 6 patterns validated (CONVERSATIONAL, NARRATIVE, TASK-BASED,          │
│       CONFIDENCE, SPATIAL, CREATIVE)                                        │
│   └── OD-F-001 to OD-F-013 + OD-F-MP-001 documented                        │
│   └── OD-F-005 crown jewel: Organization IS Density                         │
│                                                                             │
│         │ CONSTRAINED (org IS density + quality bar + OD-F-MP-001)           │
│         │ GENERATED (OD-F-### 17 outbound findings)                         │
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
## 4. STAGE 3: ORGANIZATION (OD) — ✅ COMPLETE (~35.5/40 avg, v3 re-enriched)
═══════════════════════════════════════════════════════════════════════════════

### The Story

DD explored visual rhythm. OD explored cognitive rhythm — how information should
be ORGANIZED, not just spaced. Six explorations tested six hypotheses about
organizational patterns, and the crown jewel discovery was that organization and
density are not two layers but ONE phenomenon.

Six explorations completed and re-enriched (v3) via 43-agent gate-based team:
- OD-001 Conversational (37/40): Q&A dialogue creates natural PULSE rhythm. Zone tokens proved OD-F-005 at token level.
- OD-002 Narrative Arc (35/40): Five-beat Freytag structure creates CRESCENDO with falling action as cognitive decompression.
- OD-003 Task-Based (~35/40): Collapsible task clusters create dual-mode ISLANDS (static + interactive). Compound ISLANDS+CRESCENDO validated.
- OD-004 Confidence-Based (34/40): Border-weight gradient (4px/3px/2px/1px) makes GEOLOGICAL layering visible without physical depth.
- OD-005 Spatial/Map (35/40): Hub-and-spoke creates WAVE pattern. WAVE density self-documentation (scroll-driven indicator).
- OD-006 Creative (37/40, crown jewel): Meta-documentation proved organization IS density. 5th fractal scale (navigation) emerged from compound enrichment techniques.

### What It Consumed

| Input | What Was Extracted |
|-------|-------------------|
| HANDOFF-DD-TO-OD | Mandatory gate file — density-org pairings enforced |
| DD-F-001 through DD-F-018 | Density constraints (all consumed, DD-F-016 initially violated) |
| COMP-F-001 through COMP-F-021 | Component decisions enforced |
| R-1 Documentation Patterns (28) | Primary research — 71% application rate (20/28 applied in OD-006) |
| R-5 Combination Theory (39) | Secondary research — anti-patterns enforced |
| EXT-* bespoke research | 45+ external findings created during OD (EXT-TASK, EXT-CONF, EXT-SPAT, EXT-CREATIVE) |
| 5 Soul Pieces | Non-negotiable constraints — 100% compliance across all 6 ODs |

### What It Produced

| Output | Why It Matters |
|--------|----------------|
| 6 Organizational Patterns | Validated cognitive rhythms for documentation |
| OD-F-001 through OD-F-013 | 13 pattern findings for AD/CD |
| OD-F-MP-001 (Organization = Density) | Meta-pattern governing ALL organizational work |
| OD-F-AP-001 (2px border epidemic) | #1 systemic anti-pattern — 108 CSS declarations, fixed |
| OD-F-PR-001 (Bespoke research) | Process finding — external research is high-leverage |
| OD-F-FL-001 (Org implies axis) | Forward-looking — transitive chain: org→density→axis |
| EXT-RESEARCH-REGISTRY | Registry of all bespoke research created during OD |
| organizational-patterns.md | Pattern reference for AD/CD consumption |
| HANDOFF-OD-TO-AD | Gate file for next stage |

### Key Decisions

1. **OD-006 as emergent synthesis** — Meta-documentation page proved org=density identity
2. **2px→3px border fix** — 3-category system: structural borders upgraded, table/micro borders left
3. **No new soul piece** — OD-F-005 is META-PATTERN, not perceptual soul piece; cognitive soul remains theoretical
4. **Bespoke research approach** — EXT-* findings (85% consumption) outperformed pre-existing R-1 (71%) and R-2 (0%)
5. **R-2 deferred to AD** — 27 Creative Layout findings at 0% consumption; AD should explicitly evaluate

### Quality Metrics

- **Average score:** ~35.5/40 across 6 explorations (v3 re-enriched, up from ~34.8/40)
- **Soul compliance:** 100% (0 border-radius violations, 0 box-shadow violations across 3,479+ elements)
- **ANTI-PHYSICAL confirmation:** 20/20 SOUL FAILs across 3 waves — zero exceptions
- **Granular audit:** 89 findings (8 Critical, 6 High, 16 Medium, 8 Low, ~51 Notes) from 17-agent adversarial audit
- **Fixes applied:** 16/16 (2 additional findings were false positives from font-loading timing + scroll animation)
- **Re-enrichment:** 43 agents, 3 waves, 42 EXT findings applied, 27 builder discoveries, convention spec unified 3 quality dialects
- **3 quality dialects (unified):** Polished (OD-001/002), Functional (OD-003/004/005), Editorial (OD-006) — unified via OD-CONVENTION-SPEC.md

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
| Stage 3 | OD-F-### | 17 (OD-F-001 through OD-F-013 + OD-F-MP-001 + OD-F-PR-001 + OD-F-FL-001 + OD-F-AP-001) | AD, CD, Migration |
| Stage 4 | AD-F-### | TBD | CD, Migration |
| Stage 5 | CD-F-### | TBD | Migration |

═══════════════════════════════════════════════════════════════════════════════
## 9. SOUL PIECES CUMULATIVE MATRIX
═══════════════════════════════════════════════════════════════════════════════

| # | Soul Piece | Stage 1 | DD-001 | DD-002 | DD-003 | DD-004 | DD-005 | DD-006 | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|---|------------|---------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|
| 1 | Sharp Edges | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 2 | Archivist Serif | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 3 | Family DNA | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 4 | No Shadows | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 5 | Squares Signal | ✅ | N/A | ✅ | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

**Soul compliance: 100% across all completed work (Stage 1, DD-001 through DD-006, OD-001 through OD-006).**
**OD audit verified: 0 border-radius violations, 0 box-shadow violations across 3,479+ DOM elements.**

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
OD organizational explorations (✅ COMPLETE, 6 patterns, ~34.8/40 avg)
  │
  │ CONSTRAINED (org IS density + OD-F-MP-001 meta-pattern + quality bar)
  │ GENERATED (OD-F-### 17 outbound findings)
  │
  ▼
AD axis explorations (⏳ pending — consumes OD-F-### + DD-F-### + COMP-F-###)
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
| Find an OD-F-### finding | `provenance/stage-3-organization-od/OD-outbound-findings.md` |
| Start AD work | `provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` |
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
DD-F-006 was MANDATORY for all OD explorations (per HANDOFF-DD-TO-OD.md).
All 6 ODs verified fractal self-similarity at 4 scales. OD-006 was the MOST
fractal — cycling through all 5 organizational modes with zero density
manipulation, each section's density shifted automatically.
cross-od-consistency.md confirmed 4-scale fractal verified in every exploration.
Status: APPLIED, VERIFIED (100% compliance)

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
