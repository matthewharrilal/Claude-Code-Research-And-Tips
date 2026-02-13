---
pipeline_stage: 5
stage_name: Combination Exploration (CD)
file_type: stage-header
predecessor: provenance/stage-4-axis-ad/STAGE-HEADER.md
successor: Migration
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: 2026-02-11
status: UNBLOCKED
---

<!--
===============================================================================
INLINE THREADING HEADER -- Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-5-combination-cd/STAGE-HEADER.md
Tier: B | Batch: 6 | Generated: 2026-02-06

1. WHY THIS EXISTS
Stage header for the Combination Exploration (CD) pipeline stage -- the FINAL
exploration stage before Migration. Defines what CD will explore (component
chemistry -- how components WORK TOGETHER), lists the 6 planned explorations
(CD-001 through CD-006), and specifies inputs from all prior stages. Successor
is Migration, not another exploration stage.

2. THE QUESTION THIS ANSWERS
What is Stage 5 (CD), what will it consume from all prior stages, what will
it produce, and what component combination patterns will be explored?

3. STATUS
UNBLOCKED -- AD (Stage 4) is COMPLETE. CD now has full predecessor chain:
DD (Stage 2) COMPLETE, OD (Stage 3) COMPLETE, AD (Stage 4) COMPLETE. AD
delivered 6 explorations, 28 findings (AD-F-001 through AD-F-028), convention
spec (822 lines), audit synthesis (47 actionable items), and HANDOFF-AD-TO-CD.
CD can begin when ready.

5. BUILT ON
| Dependency                                          | Relationship                              |
|-----------------------------------------------------|-------------------------------------------|
| stage-4-axis-ad/STAGE-HEADER.md                     | Predecessor in stage chain                 |
| BACKBONE.md                                         | Master narrative backbone reference        |
| PIPELINE-MANIFEST.md                                | Master finding registry                    |
| patterns/combination-rules.md                       | Planned input for combination constraints  |
| original-research/R5-COMBINATION-THEORY.md          | Primary research (39 findings)             |
| AD-F-001 through AD-F-028                           | 28 axis findings from Stage 4              |
| OD-F-001 through OD-F-013 + meta/process/fwd/anti   | 17 org findings from Stage 3              |
| DD-F-001 through DD-F-018                           | 18 density findings from Stage 2           |
| COMP-F-001 through COMP-F-021                       | 21 component findings from Stage 1         |

6. MUST HONOR
- Predecessor/successor chain format must be maintained (frontmatter links)
- Successor is "Migration" (not another stage) -- this is the terminal exploration
- Must read HANDOFF-AD-TO-CD.md FIRST before any CD work begins
- DD-F-013: Must account for density tolerance in combinations
- AD-F-024: Compound is sequential (through scrolling), not simultaneous (within viewport)
- AD-F-025: Transition grammar between density zones is MANDATORY
- AD-F-023: All combinations must maintain ATTENTION TOPOLOGY meta-equivalence
- All accumulated soul pieces and findings from Stages 1-4 must be verified
- Research grounding in R-5 (39 findings) is mandatory

8. CONSUMED BY
| Consumer                                            | How Used                                  |
|-----------------------------------------------------|-------------------------------------------|
| Migration phase                                     | Successor -- consumes all CD outputs       |
| All CD explorations (CD-001 through CD-006)         | Planning and constraint reference           |
| CD agents                                           | Stage execution guide                      |

10. DIAGNOSTIC QUESTIONS
- Does the frontmatter correctly show successor as "Migration" (not a stage-6)?
- Is the full predecessor chain (DD COMPLETE -> OD COMPLETE -> AD COMPLETE -> CD) stated?
- Are the 6 planned CD explorations (Reasoning Inside Code, Task Containing
  Decision, File Tree with Callouts, Essence as Background, All Callouts as
  Conversation, Creative) still the correct set?
- Does the consumed section include all 28 AD-F findings and 33 EXT-AXIS-* findings?

END INLINE THREADING HEADER
===============================================================================
-->

# STAGE 5: COMBINATION EXPLORATION (CD)
## UNBLOCKED -- Where Component Chemistry Will Be Discovered

===============================================================================
## STATUS
===============================================================================

**Stage 5 is UNBLOCKED.** All predecessor stages are COMPLETE:
- Stage 2 (DD): COMPLETE -- 18 DD-F findings, 6 density patterns
- Stage 3 (OD): COMPLETE -- 17 OD-F findings, 6 org patterns, 94 EXT-* findings
- Stage 4 (AD): COMPLETE -- 28 AD-F findings, 6 axis patterns, 33 EXT-AXIS-* findings

**AD delivered to CD:**
- 6 axis explorations (AD-001 through AD-006), all INCLUDE, avg 36.2/40
- 28 findings (AD-F-001 through AD-F-028)
- AD-CONVENTION-SPEC.md (822 lines)
- AD-AUDIT-SYNTHESIS.md (47 actionable items from 23 audit reports)
- AD-SYNTHESIS.md (12-section cross-exploration analysis)
- HANDOFF-AD-TO-CD.md (gate file -- **READ FIRST**)
- ACCUMULATED-IDENTITY-v2.md (~700 lines)
- Transition grammar (5x5 matrix, 20 directed transitions, 3 types)

CD will explore component combinations -- how components work together:
- CD-001 Reasoning Inside Code
- CD-002 Task Containing Decision
- CD-003 File Tree with Callouts
- CD-004 Essence as Background
- CD-005 All Callouts as Conversation
- CD-006 Creative

===============================================================================
## WHAT CD WILL CONSUME
===============================================================================

| Input | Source | Items |
|-------|--------|-------|
| HANDOFF-AD-TO-CD.md | Stage 4 (AD) | **READ FIRST** -- gate file |
| AD-F-001 through AD-F-028 | Stage 4 (AD) | 28 axis findings |
| OD-F-001 through OD-F-017 | Stage 3 (OD) | 17 org findings |
| DD-F-001 through DD-F-018 | Stage 2 (DD) | 18 density findings |
| COMP-F-001 through COMP-F-021 | Stage 1 | 21 component findings |
| EXT-AXIS-* | Bespoke research | 33 axis-specific external findings |
| EXT-* (OD) | Bespoke research | 94 OD external findings |
| 5 Soul Pieces | Accumulated | LOCKED -- zero tolerance |
| R-5 Combination Theory | **PRIMARY RESEARCH** | 39 findings |
| R-4 Axis Innovations | Secondary | 192 findings |
| AD-CONVENTION-SPEC.md | Convention | 822-line specification |
| ACCUMULATED-IDENTITY-v2.md | Identity | ~700 lines accumulated context |
| Transition Grammar | AD-006 | 5x5 matrix (smooth/bridge/breathing) |

===============================================================================
## WHAT CD WILL PRODUCE
===============================================================================

| Output | Purpose |
|--------|---------|
| CD-F-### findings | For Migration |
| Combination Rules | `patterns/combination-rules.md` |
| 6 Combination Patterns | Validated chemistries |
| 6 HTML Explorations | Artifacts |
| CD-CONVENTION-SPEC.md | Convention specification |
| CD-SYNTHESIS.md | Cross-CD synthesis |
| CD-AUDIT-SYNTHESIS.md | Audit record |
| HANDOFF-CD-TO-MIGRATION.md | Final gate file |
| ACCUMULATED-IDENTITY-v3.md | Final accumulated identity |

===============================================================================
## CRITICAL CONSTRAINTS FROM AD
===============================================================================

### AD-F-023: ATTENTION TOPOLOGY (Meta-Equivalence)
Axis IS Organization IS Density -- three names for one phenomenon. CD combinations
must maintain this 3-way equivalence. A combination that breaks the equivalence
is INVALID.

### AD-F-024: Compound Is Sequential, Not Simultaneous
Multiple axis patterns in one viewport creates cacophony. Compound emerges
through scrolling time, not simultaneous display. CD must honor this.

### AD-F-025: Transition Grammar Is Mandatory
Every pattern transition must be classified (smooth/bridge/breathing) and
implemented with appropriate spacing. Unclassified transitions are INVALID.

### DD-F-013: Density Tolerance
"Some components compress well at high density, others need breathing room."
Combination rules must account for density tolerance:
- Code blocks handle high density
- Essence callouts need space around them
- Don't pack low-tolerance components into high-density zones

===============================================================================
## KEY CONSTRAINT FROM DD
===============================================================================

DD-F-013: "Some components compress well at high density, others need breathing room."

Combination rules must account for density tolerance:
- Code blocks handle high density
- Essence callouts need space around them
- Don't pack low-tolerance components into high-density zones

===============================================================================
## FILES IN THIS FOLDER (Expected After Completion)
===============================================================================

| File | Status |
|------|--------|
| `STAGE-HEADER.md` | UNBLOCKED (this file) |
| `CLAUDE.md` | UPDATED (navigation for CD agents) |
| `CD-outbound-findings.md` | PENDING |
| `CD-RESEARCH-GATE.md` | PENDING |
| `CD-SYNTHESIS.md` | PENDING |
| `CD-AUDIT-SYNTHESIS.md` | PENDING |
| `CD-CONVENTION-SPEC.md` | PENDING |
| `HANDOFF-CD-TO-MIGRATION.md` | PENDING |

===============================================================================
