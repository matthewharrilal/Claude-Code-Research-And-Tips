<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/provenance/CLAUDE.md
Tier: C | Batch: 6 | Generated: 2026-02-06

1. WHY THIS EXISTS
Navigation file for agents entering the provenance/ directory. Maps the
research chain structure, provides quick navigation to finding traces,
and documents the R3-023 chain trace example.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| R3-023 full chain trace                 | Example provenance walkthrough         |
| PIPELINE-MANIFEST.md                    | Master registry referenced for nav     |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| HANDOFF-DD-TO-OD.md                     | References provenance directory nav    |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->

# CLAUDE.md — Provenance Directory

═══════════════════════════════════════════════════════════════════════════════
## 1. IDENTITY
═══════════════════════════════════════════════════════════════════════════════

**Name:** Provenance Directory
**Anatomical Role:** The research chain — where every finding is traced from
origin to application.

This is where the CONNECTION lives. The files exist elsewhere. The patterns
exist elsewhere. But the CHAIN that connects them lives here.

═══════════════════════════════════════════════════════════════════════════════
## 2. HOW TO READ
═══════════════════════════════════════════════════════════════════════════════

**Entry Point:** `PIPELINE-MANIFEST.md` — The master registry

**Quick Navigation:**
- Want to trace a finding? → `PIPELINE-MANIFEST.md` Section E
- Want OD-F findings? → `stage-3-organization-od/OD-outbound-findings.md`
- Want OD synthesis? → `stage-3-organization-od/OD-SYNTHESIS.md`
- Want EXT-* research? → `EXT-RESEARCH-REGISTRY.md`
- Want to start AD work? → `stage-3-organization-od/HANDOFF-OD-TO-AD.md`
- Want original research? → `original-research/`
- Want Stage 1 findings? → `stage-1-components/component-findings.md`
- Want Stage 2 findings? → `stage-2-density-dd/DD-outbound-findings.md`

═══════════════════════════════════════════════════════════════════════════════
## 3. WHAT'S HERE
═══════════════════════════════════════════════════════════════════════════════

| Folder/File | Status | Purpose |
|-------------|--------|---------|
| `PIPELINE-MANIFEST.md` | ✅ | Master finding registry |
| `SOUL-DISCOVERIES.md` | ✅ | 5 soul pieces (copy from checkpoints) |
| `RESEARCH-ACTIVE.md` | ✅ | Application tracking (copy from checkpoints) |
| `original-research/` | ✅ | R-1 to R-5 research files |
| `stage-1-components/` | ✅ | Component foundation chain |
| `stage-2-density-dd/` | ✅ | DD exploration chain |
| `stage-3-organization-od/` | ✅ COMPLETE (v3 re-enriched) | OD exploration chain (6 ODs, 17 OD-F findings, 89 audit findings, 94 EXT-* findings, convention spec, 43-agent re-enrichment) |
| `stage-4-axis-ad/` | ✅ COMPLETE | AD exploration chain (6 ADs, 28 AD-F findings, ~47 audit findings, 33 EXT-AXIS-* findings, convention spec, transition grammar, ATTENTION TOPOLOGY meta-equivalence) |
| `stage-5-combination-cd/` | ⏳ PENDING | CD exploration chain |

═══════════════════════════════════════════════════════════════════════════════
## 4. HOW THIS CONNECTS
═══════════════════════════════════════════════════════════════════════════════

### BACKBONE REFERENCE
Everything here connects to `../BACKBONE.md` — the master narrative.

### PATTERN REFERENCE
Patterns in `../patterns/` trace back to findings here.

### EXPLORATION REFERENCE
Explorations in `../../explorations/` are validated artifacts; their
provenance lives here.

═══════════════════════════════════════════════════════════════════════════════
## 5. MINDSET — ONE COMPLETE CHAIN WALKTHROUGH
═══════════════════════════════════════════════════════════════════════════════

Let me trace ONE finding through the entire chain to show how provenance works:

### R3-023: Fractal Self-Similarity

**Stage 0 (Research):**
- Location: `original-research/R3-DENSITY-DIMENSIONS.md`
- Finding: "Good density patterns are fractal (self-similar at scales)"
- Status: PENDING APPLICATION

**Stage 1 (Components):**
- Not directly consumed
- BUT: Soul pieces (COMP-F-001 sharp edges, COMP-F-004 no shadows) constrain
  how fractal patterns will LOOK visually

**Stage 2 (DD):**
- Location: `stage-2-density-dd/DD-outbound-findings.md`
- Finding ID: DD-F-006
- Applied in: DD-006 Fractal exploration (36/40 — HIGHEST)
- Evidence: █░░█░░█░░ at page, section, component, character levels
- Status: APPLIED, EXEMPLARY

**Stage 3 (OD):**
- Location: `stage-3-organization-od/OD-outbound-findings.md`, `stage-3-organization-od/OD-SYNTHESIS.md`
- Constraint: DD-F-006 is MANDATORY for all OD explorations
- OD-001 through OD-006 applied fractal self-similarity
- Re-enrichment: 43 agents, 94/94 EXT-* findings applied, OD-006 demonstrates 5th fractal scale (navigation)
- Status: COMPLETE (v3) — applied in all 6 OD explorations, verified in 17-agent adversarial audit (89 findings, 0 soul violations), re-enriched via 3-wave gate-based process

**Stage 4 (AD):**
- Location: `stage-4-axis-ad/AD-outbound-findings.md`
- DD-F-006 verified at 5 scales across all 6 AD explorations (AD-F-027)
- No 6th scale found (AD-F-028 bounds the model)
- DD-F-012 ELEVATED: axis IS density, not "serves" density
- Status: APPLIED, VERIFIED, BOUNDED (5 scales final)

**Stage 5 (CD):**
- Will consume DD-F-006 through AD
- Combinations must maintain fractal rhythm at 5 scales
- Status: PENDING

**Migration:**
- Every migrated page should show fractal self-similarity
- Citation: DD-F-006
- Trace: `../patterns/PATTERN-INDEX.md` → here → `original-research/R3-*`

**THIS is how the chain works.** One finding, accumulated through every stage.
When you apply DD-F-006, you're not just applying a pattern — you're applying
the accumulated research behind it.

═══════════════════════════════════════════════════════════════════════════════
## 6. THE THREE LAYERS OF PROVENANCE
═══════════════════════════════════════════════════════════════════════════════

Provenance in this system operates at three distinct layers:

### Layer 1: Inline Threading Headers (490 files)
Per-file metadata embedded in comments at the top of every source file.
Sections: WHY THIS EXISTS, STATUS, BUILT ON (dependencies), CONSUMED BY (consumers).
Every source file is a node in a traversal graph. Created in Phase 2B.

### Layer 2: Light Provenance Sections (244 files)
Lighter metadata linking files to their parent phase and T1 synthesis.
Acts as a bridge between the distributed per-file graph and the formal chain.
Created in Phase 2D.

### Layer 3: Formal Chain Documents (this directory)
Curated narrative documents per pipeline stage:
- **STAGE-HEADER** — What the stage did
- **outbound-findings** — Formal finding declarations (e.g., OD-F-001 through OD-F-013)
- **SYNTHESIS** — Cross-exploration analysis
- **AUDIT-SYNTHESIS** — Quality gate results
- **HANDOFF** — Briefing for the next stage
- **RESEARCH-GATE** — Research filtering decisions

**How they relate:** Inline headers are the distributed dependency graph (who
depends on whom). Formal chain documents are the authoritative narrative (what
happened, why, what it means). Light sections are the bridge connecting
individual files to the larger story.

**Zoom levels:** Pipeline (BACKBONE.md) -> Stage (STAGE-HEADER) -> Finding
(outbound-findings) -> File (inline headers) -> Forward guidance (HANDOFF)

═══════════════════════════════════════════════════════════════════════════════
## 7. ACCUMULATED IDENTITY
═══════════════════════════════════════════════════════════════════════════════

Each pipeline stage inherits ALL prior soul pieces, findings, constraints, and
decisions from every preceding stage. This accumulated context is formalized in
`ACCUMULATED-IDENTITY-v1.md` (539 lines), which lives at the pipeline level.

- AD must consume ACCUMULATED-IDENTITY-v1.md and produce v2
- CD must consume v2 and produce v3
- The identity grows with each stage — it never shrinks

This ensures no stage works in isolation. Every decision carries the full
weight of prior research.

═══════════════════════════════════════════════════════════════════════════════
