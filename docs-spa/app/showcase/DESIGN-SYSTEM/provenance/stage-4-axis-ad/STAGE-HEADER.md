---
pipeline_stage: 4
stage_name: Axis Exploration (AD)
file_type: stage-header
predecessor: provenance/stage-3-organization-od/STAGE-HEADER.md
successor: provenance/stage-5-combination-cd/STAGE-HEADER.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: 2026-02-05
status: PENDING
---

<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/STAGE-HEADER.md
Tier: B | Batch: 6 | Generated: 2026-02-06

1. WHY THIS EXISTS
Stage header for the Axis Exploration (AD) pipeline stage. Defines what AD
will explore (spatial layout — how components are POSITIONED on the page),
lists the 6 planned explorations (AD-001 through AD-006), and specifies
inputs from all prior stages. Part of the predecessor/successor stage chain.

2. THE QUESTION THIS ANSWERS
What is Stage 4 (AD), what will it consume from prior stages, what will it
produce, and what spatial layout patterns will be explored?

3. STATUS
PENDING — AD work cannot begin until Stage 3 (OD) is complete. OD itself is
also PENDING, so AD is blocked on two levels. All planned AD outputs are
future work.

5. BUILT ON
| Dependency                                          | Relationship                              |
|-----------------------------------------------------|-------------------------------------------|
| stage-3-organization-od/STAGE-HEADER.md             | Predecessor in stage chain                 |
| Pattern-to-axis mappings                            | Planned: density patterns inform axis choice|
| patterns/combination-rules.md                       | Planned input for axis constraints          |
| original-research/R4-AXIS-INNOVATIONS.md            | Primary research (192 findings)            |
| OD-F-### findings (not yet created)                 | Planned input from Stage 3                 |
| DD-F-### findings                                   | Inherited from Stage 2                     |
| COMP-F-### findings                                 | Inherited from Stage 1                     |

6. MUST HONOR
- Predecessor/successor chain format must be maintained (frontmatter links)
- Cannot begin until Stage 3 (OD) is complete and HANDOFF-OD-TO-AD.md exists
- DD-F-012: Axis geometry must SERVE the density pattern
- All accumulated soul pieces must be verified
- Research grounding in R-4 (192 findings) is mandatory

8. CONSUMED BY
| Consumer                                            | How Used                                  |
|-----------------------------------------------------|-------------------------------------------|
| stage-5-combination-cd/STAGE-HEADER.md              | Successor in stage chain                   |
| All AD explorations (AD-001 through AD-006)         | Planning and constraint reference           |
| AD agents                                           | Stage execution guide                      |

10. DIAGNOSTIC QUESTIONS
- Does the frontmatter predecessor/successor chain remain intact with stage-3
  and stage-5 STAGE-HEADERs?
- Is the dependency on OD completion clearly stated as a blocking prerequisite?
- Are the 6 planned AD explorations (Z-Pattern, F-Pattern, Bento Grid, Spiral
  Reveal, Axis Choreography, Creative) still the correct set?

END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->

# STAGE 4: AXIS EXPLORATION (AD)
## ⏳ PENDING — Where Spatial Layout Will Be Discovered

═══════════════════════════════════════════════════════════════════════════════
## STATUS
═══════════════════════════════════════════════════════════════════════════════

**Stage 4 is PENDING.** It cannot begin until Stage 3 (OD) is complete.

AD will explore axis layouts — how components are positioned on the page:
- AD-001 Z-Pattern
- AD-002 F-Pattern
- AD-003 Bento Grid
- AD-004 Spiral Reveal
- AD-005 Axis Choreography
- AD-006 Creative

═══════════════════════════════════════════════════════════════════════════════
## WHAT AD WILL CONSUME
═══════════════════════════════════════════════════════════════════════════════

| Input | Source |
|-------|--------|
| OD-F-### findings | Stage 3 (OD) |
| DD-F-### findings | Stage 2 (DD) |
| COMP-F-### findings | Stage 1 |
| 5+ Soul Pieces | Accumulated |
| R-4 Axis Innovations | **PRIMARY RESEARCH** (192 findings) |

═══════════════════════════════════════════════════════════════════════════════
## WHAT AD WILL PRODUCE
═══════════════════════════════════════════════════════════════════════════════

| Output | Purpose |
|--------|---------|
| AD-F-### findings | For CD and Migration |
| HANDOFF-AD-TO-CD | Gate file for Stage 5 |
| 6 Axis Patterns | Validated layouts |
| 6 HTML Explorations | Artifacts |

═══════════════════════════════════════════════════════════════════════════════
## KEY CONSTRAINT FROM DD
═══════════════════════════════════════════════════════════════════════════════

DD-F-012: "Density patterns imply axis preferences."

| Density Pattern | Implied Axis |
|-----------------|--------------|
| CRESCENDO | Vertical flow (top→bottom) |
| ISLANDS | Grid positioning |
| RIVERS | Horizontal channels |

AD axis layouts must SERVE the density pattern, not fight it.

═══════════════════════════════════════════════════════════════════════════════
## FILES IN THIS FOLDER (Expected After Completion)
═══════════════════════════════════════════════════════════════════════════════

| File | Status |
|------|--------|
| `STAGE-HEADER.md` | ⏳ PLACEHOLDER (this file) |
| `AD-outbound-findings.md` | ⏳ PENDING |
| `HANDOFF-AD-TO-CD.md` | ⏳ PENDING |
| `AD-RESEARCH-GATE.md` | ⏳ PENDING |
| `AD-SYNTHESIS.md` | ⏳ PENDING |
| `CLAUDE.md` | ⏳ PENDING |

═══════════════════════════════════════════════════════════════════════════════
