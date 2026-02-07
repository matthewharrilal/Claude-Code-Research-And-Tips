---
pipeline_stage: 3
stage_name: Organization Exploration (OD)
file_type: stage-header
predecessor: provenance/stage-2-density-dd/STAGE-HEADER.md
successor: provenance/stage-4-axis-ad/STAGE-HEADER.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: 2026-02-05
status: IN_PROGRESS
---

<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md
Tier: B | Batch: 6 | Generated: 2026-02-06

1. WHY THIS EXISTS
Stage header for the Organization Exploration (OD) pipeline stage. Defines
what OD will explore (cognitive rhythm — how information is ORGANIZED), lists
the 6 planned explorations (OD-001 through OD-006), specifies mandatory inputs
(HANDOFF-DD-TO-OD.md, DD-F-006 fractal self-similarity), and sets the scoring
threshold (>=32 for INCLUDE). Part of the predecessor/successor stage chain.

2. THE QUESTION THIS ANSWERS
What is Stage 3 (OD), what will it consume, what will it produce, and what
constraints must every OD exploration honor?

3. STATUS
PENDING — OD work has not begun. All 5 planned output files (OD-outbound-findings.md,
HANDOFF-OD-TO-AD.md, OD-RESEARCH-GATE.md, OD-SYNTHESIS.md, and 6 OD explorations)
are PENDING. The STAGE-HEADER itself exists as a planning document.

5. BUILT ON
| Dependency                                          | Relationship                              |
|-----------------------------------------------------|-------------------------------------------|
| stage-2-density-dd/STAGE-HEADER.md                  | Predecessor in stage chain                 |
| stage-2-density-dd/HANDOFF-DD-TO-OD.md              | Mandatory first-read for OD work           |
| stage-2-density-dd/DD-outbound-findings.md          | DD-F-### constraints consumed by OD        |
| stage-1-components/component-findings.md            | COMP-F-### constraints consumed by OD      |
| SOUL-DISCOVERIES.md                                 | 5 soul pieces — non-negotiable constraints |
| original-research/R1-DOCUMENTATION-PATTERNS.md      | Primary research (28 findings)             |
| original-research/R5-COMBINATION-THEORY.md          | Secondary research                         |
| 6 OD explorations mapped to density pairings        | Planned work structure                     |

6. MUST HONOR
- Predecessor/successor chain format must be maintained (frontmatter links)
- DD-F-006 (fractal self-similarity) is MANDATORY for all OD explorations
- 5 soul pieces must be verified in every exploration
- Scoring threshold: >=32 for INCLUDE
- HANDOFF-DD-TO-OD.md must be read FIRST before any OD work

8. CONSUMED BY
| Consumer                                            | How Used                                  |
|-----------------------------------------------------|-------------------------------------------|
| stage-4-axis-ad/STAGE-HEADER.md                     | Successor in stage chain                   |
| All OD explorations (OD-001 through OD-006)         | Planning and constraint reference           |
| OD agents                                           | Stage execution guide                      |

10. DIAGNOSTIC QUESTIONS
- Are all 6 OD explorations still mapped to their recommended density pairings
  from HANDOFF-DD-TO-OD.md?
- Does the frontmatter predecessor/successor chain remain intact with stage-2
  and stage-4 STAGE-HEADERs?
- Are the mandatory inputs (HANDOFF, DD-outbound, SOUL-DISCOVERIES, R1, R5)
  still correctly listed and accessible?

END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->

# STAGE 3: ORGANIZATION EXPLORATION (OD)
## ⏳ IN PROGRESS — Where Cognitive Rhythm Will Be Discovered

═══════════════════════════════════════════════════════════════════════════════
## THE STORY (Unfolding)
═══════════════════════════════════════════════════════════════════════════════

DD explored visual rhythm — how content BREATHES on a page.
OD explores cognitive rhythm — how information should be ORGANIZED.

Six explorations are planned:
- OD-001 Conversational: Q&A dialogue patterns
- OD-002 Narrative Arc: Setup → Conflict → Resolution
- OD-003 Task-Based: "I want to..." goal structures
- OD-004 Confidence-Based: Certain → Uncertain flow
- OD-005 Spatial/Map: Hub-and-spoke navigation
- OD-006 Creative: TBD

Each OD exploration must:
1. Read HANDOFF-DD-TO-OD.md FIRST
2. Pair with recommended density pattern
3. Apply DD-F-006 (fractal self-similarity) — MANDATORY
4. Verify 5 soul pieces
5. Score ≥32 for INCLUDE

═══════════════════════════════════════════════════════════════════════════════
## WHAT THIS STAGE WILL CONSUME
═══════════════════════════════════════════════════════════════════════════════

| Input | File Location | What Will Be Extracted |
|-------|---------------|------------------------|
| DD Outbound Findings | `provenance/stage-2-density-dd/DD-outbound-findings.md` | DD-F-### constraints |
| Handoff from DD | `provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` | **READ FIRST** |
| 5 Soul Pieces | `provenance/SOUL-DISCOVERIES.md` | Non-negotiable constraints |
| COMP-F-### | `provenance/stage-1-components/component-findings.md` | Component decisions |
| R-1 Documentation Patterns | `provenance/original-research/R1-DOCUMENTATION-PATTERNS.md` | **PRIMARY RESEARCH** (28 findings) |
| R-5 Combination Theory | `provenance/original-research/R5-COMBINATION-THEORY.md` | Secondary research |

═══════════════════════════════════════════════════════════════════════════════
## WHAT THIS STAGE WILL PRODUCE
═══════════════════════════════════════════════════════════════════════════════

| Output | File Location | Why It Matters |
|--------|---------------|----------------|
| 6 Organizational Patterns | `patterns/organizational-patterns.md` | Validated structures |
| OD Outbound Findings | `provenance/stage-3-organization-od/OD-outbound-findings.md` | OD-F-### for AD/CD |
| Handoff to AD | `provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` | Gate file for Stage 4 |
| OD Research Gate | `provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` | R-1 application tracking |
| OD Synthesis | `provenance/stage-3-organization-od/OD-SYNTHESIS.md` | Cross-OD insights |
| 6 HTML Explorations | `explorations/organizational/OD-001-006.html` | Validated artifacts |
| Potential cognitive soul pieces | `provenance/SOUL-DISCOVERIES.md` | New DNA if discovered |

═══════════════════════════════════════════════════════════════════════════════
## OD-TO-DENSITY PAIRING (From HANDOFF-DD-TO-OD)
═══════════════════════════════════════════════════════════════════════════════

| OD Exploration | Primary Density | Secondary | Rationale |
|----------------|-----------------|-----------|-----------|
| OD-001 Conversational | PULSE | TIDAL | Q&A alternates; width signals |
| OD-002 Narrative Arc | CRESCENDO | — | Story builds; density builds |
| OD-003 Task-Based | ISLANDS | — | Tasks are clusters |
| OD-004 Confidence-Based | GEOLOGICAL | CRESCENDO | Certainty = depth layers |
| OD-005 Spatial/Map | Custom | ISLANDS | Hub-and-spoke |
| OD-006 Creative | TBD | FRACTAL always | Must apply fractal |

**ALL ODs must apply DD-F-006 (FRACTAL) regardless of primary density.**

═══════════════════════════════════════════════════════════════════════════════
## QUALITY BAR (From DD)
═══════════════════════════════════════════════════════════════════════════════

| Metric | DD Achieved | OD Must Match |
|--------|-------------|---------------|
| Average score | 34.5/40 | ≥32/40 for INCLUDE |
| Soul compliance | 100% | 100% required |
| Anti-pattern violations | 0 | 0 tolerance |
| Research application | ~76% | ≥80% target |

═══════════════════════════════════════════════════════════════════════════════
## FILES IN THIS FOLDER (Expected After Completion)
═══════════════════════════════════════════════════════════════════════════════

| File | Status | Role |
|------|--------|------|
| `STAGE-HEADER.md` | ⏳ IN PROGRESS | This file |
| `OD-outbound-findings.md` | ⏳ PENDING | OD-F-### for AD/CD |
| `HANDOFF-OD-TO-AD.md` | ⏳ PENDING | Gate file for Stage 4 |
| `OD-RESEARCH-GATE.md` | ⏳ PENDING | R-1 application tracking |
| `OD-SYNTHESIS.md` | ⏳ PENDING | Cross-OD insights |
| `CLAUDE.md` | ⏳ PLACEHOLDER | Navigation |

═══════════════════════════════════════════════════════════════════════════════
## BEFORE STARTING OD WORK
═══════════════════════════════════════════════════════════════════════════════

```
□ Read provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md completely
□ Acknowledge all mandatory consumption items
□ Read provenance/original-research/R1-DOCUMENTATION-PATTERNS.md
□ Identify which R-1 findings apply to your OD exploration
□ Note your OD's recommended density pairing
□ Understand DD-F-006 (fractal) applies to ALL OD work
□ Plan how you will verify soul compliance
```

═══════════════════════════════════════════════════════════════════════════════
