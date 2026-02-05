---
pipeline_stage: ALL
stage_name: Pipeline Manifest
file_type: manifest
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
last_updated: 2026-02-05
---

# PIPELINE MANIFEST
## Complete Finding Registry and Lifecycle Tracking

═══════════════════════════════════════════════════════════════════════════════
## HOW TO USE THIS FILE
═══════════════════════════════════════════════════════════════════════════════

This is the MASTER REGISTRY for all findings in the chain.

**To find where a finding was applied:** Search for the finding ID (e.g., R3-023)
and check the "Applied In" column.

**To see what research is pending:** Filter Section A for status PENDING.

**To understand the chain:** Each finding shows its lifecycle from identification
to application.

═══════════════════════════════════════════════════════════════════════════════
## SECTION A: ORIGINAL RESEARCH (R-1 to R-5)
═══════════════════════════════════════════════════════════════════════════════

### R-1 Documentation Patterns (28 findings)

| ID | Finding | Status | Applied In | Evidence |
|----|---------|--------|------------|----------|
| R1-001 | Density Rhythm Principle: HIGH→LOW→MEDIUM waves | APPLIED | DD (all) | PULSE, CRESCENDO patterns |
| R1-002 | 38% Retention Rule: Smart whitespace improves retention | APPLIED | DD (all) | 64-92px EXHALE sections |
| R1-003 | Viewport Principle: One major concept per viewport height | APPLIED | DD (most) | Section structure |
| R1-004-028 | Additional findings | PENDING | OD (primary research) | — |

**R-1 Status:** ~10% applied in DD, PRIMARY source for OD

### R-2 Creative Layouts (78 findings)

| ID | Finding | Status | Applied In | Evidence |
|----|---------|--------|------------|----------|
| R2-014 | White Space as Content | APPLIED | DD (all) | Sparse sections as design |
| R2-021 | Dense but Breathable | APPLIED | DD (all) | PULSE pattern |
| R2-022 | 8px base unit | APPLIED | Components | spacing.md tokens |
| R2-023 | 14px base typography | APPLIED | Components | typography.md tokens |
| R2-024-078 | Additional findings | PENDING | AD/CD | — |

**R-2 Status:** ~15% applied, Secondary source for multiple stages

### R-3 Density Dimensions (51 findings) — DD PRIMARY

| ID | Finding | Status | Applied In | Evidence |
|----|---------|--------|------------|----------|
| R3-001 | Scroll velocity mapping | APPLIED | DD-002 | CRESCENDO density change |
| R3-003 | PULSE, CRESCENDO, BOOKENDS, WAVE | APPLIED | DD-001,002,005 | Pattern implementations |
| R3-005 | Geological layers | EXEMPLARY | DD-004 | 5-layer stratification |
| R3-007 | Progressive disclosure | APPLIED | DD-002,004 | CRESCENDO, GEOLOGICAL |
| R3-023 | Fractal self-similarity | EXEMPLARY | DD-006 | █░░█░░█░░ at all scales |
| R3-024 | Atmosphere to bedrock | EXEMPLARY | DD-004 | Layer names match exactly |
| R3-029 | Density contrast | EXEMPLARY | DD-005 | Width = inverse density |
| R3-030 | Density debt | APPLIED | DD (all) | Recovery whitespace |
| R3-035 | PULSE definition | EXEMPLARY | DD-001 | Breathing pattern |
| R3-036 | CRESCENDO definition | EXEMPLARY | DD-002 | Progressive build |
| R3-040 | Breathe in at opening | APPLIED | DD (all) | Sparse intro sections |
| R3-043 | Density release at end | APPLIED | DD (all) | Sparse closing sections |
| R3-044-046 | Surface/Sediment/Bedrock | EXEMPLARY | DD-004 | Explicit layer names |

**R-3 Status:** ~76% applied (48/51 applicable findings), PRIMARY source for DD

### R-4 Axis Innovations (192 findings)

| ID | Finding | Status | Applied In | Evidence |
|----|---------|--------|------------|----------|
| R4-VR001-024 | Visual Rhythm findings | PARTIAL | DD-005 | River rhythm |
| R4-PD001-019 | Progressive Disclosure | APPLIED | DD-002,004 | CRESCENDO, GEOLOGICAL |
| R4-remaining | 150+ additional findings | PENDING | AD (primary research) | — |

**R-4 Status:** ~20% applied, PRIMARY source for AD

### R-5 Combination Theory (39 findings)

| ID | Finding | Status | Applied In | Evidence |
|----|---------|--------|------------|----------|
| R5-006 | Velocity Mismatch Rule | APPLIED | DD (all) | Alternating component types |
| R5-008 | 2-Callout Limit | APPLIED | DD (all) | Max 2 per viewport |
| R5-010 | Density Wave Sequencing | APPLIED | DD-002 | CRESCENDO flow |
| R5-014 | Semantic Proximity | APPLIED | DD-003 | Archipelago grouping |
| R5-027-033 | Anti-patterns | VERIFIED | DD (all) | Violations checked |

**R-5 Status:** ~30% applied, PRIMARY source for CD

═══════════════════════════════════════════════════════════════════════════════
## SECTION B: GENERATED FINDINGS
═══════════════════════════════════════════════════════════════════════════════

### Stage 1 (COMP-F-###) — Component Foundation

| ID | Finding | Type | Consumed By | Status |
|----|---------|------|-------------|--------|
| COMP-F-001 | Sharp edges = authority | Soul Piece | DD, OD, AD, CD | ACTIVE |
| COMP-F-002 | Serif italic = wisdom | Soul Piece | DD, OD, AD, CD | ACTIVE |
| COMP-F-003 | 2-zone callout DNA | Soul Piece | DD, OD, AD, CD | ACTIVE |
| COMP-F-004 | No shadows = honesty | Soul Piece | DD, OD, AD, CD | ACTIVE |
| COMP-F-005 | Squares = exactness | Soul Piece | DD, OD, AD, CD | ACTIVE |
| COMP-F-006 | globals.css border-radius fix | Remediation | DD | CONSUMED |
| COMP-F-007 | globals.css shadow fix | Remediation | DD | CONSUMED |
| COMP-F-008 | 54% too low to build on | Process | DD | CONSUMED |
| COMP-F-009-021 | Component specifics | Technical | All stages | ACTIVE |

**Total COMP-F-###:** 21 findings

### Stage 2 (DD-F-###) — Density Exploration

| ID | Finding | Type | Consumed By | Status |
|----|---------|------|-------------|--------|
| DD-F-001 | PULSE for alternating | Pattern | OD-001 | PENDING |
| DD-F-002 | CRESCENDO for progressive | Pattern | OD-002, OD-004 | PENDING |
| DD-F-003 | ISLANDS for task groups | Pattern | OD-003 | PENDING |
| DD-F-004 | GEOLOGICAL for hierarchy | Pattern | OD-004 | PENDING |
| DD-F-005 | TIDAL/RIVERS width signal | Pattern | OD-001 | PENDING |
| DD-F-006 | FRACTAL meta-pattern | META | ALL ODs, AD, CD | PENDING |
| DD-F-007-009 | Process learnings | Process | Methodology | ACTIVE |
| DD-F-010-014 | Forward-looking | Forward | OD, AD, CD | PENDING |
| DD-F-015-018 | Anti-patterns | Constraint | All stages | ACTIVE |

**Total DD-F-###:** 18 findings

### Stage 3 (OD-F-###) — Organization ⏳ PENDING

TBD — OD explorations not yet complete.

### Stage 4 (AD-F-###) — Axis ⏳ PENDING

TBD — AD explorations not yet started.

### Stage 5 (CD-F-###) — Combination ⏳ PENDING

TBD — CD explorations not yet started.

═══════════════════════════════════════════════════════════════════════════════
## SECTION C: SOUL PIECES
═══════════════════════════════════════════════════════════════════════════════

| # | Name | Finding ID | Type | Discovery Context | Connected Findings |
|---|------|------------|------|-------------------|-------------------|
| 1 | Sharp Edges Command Authority | COMP-F-001 | Visual | globals.css audit found 50% radius | R2-022, R3-* (geometry) |
| 2 | The Archivist Speaks in Serif | COMP-F-002 | Visual | EssenceBox audit — sans felt wrong | R1-*, R2-023 (typography) |
| 3 | Callouts Share Family DNA | COMP-F-003 | Visual | GotchaBox 6-zone broke family | R5-* (combination theory) |
| 4 | Shadows Lie About Depth | COMP-F-004 | Visual | DesignDecision shadow created false elevation | R2-* (flat design) |
| 5 | Squares Signal System | COMP-F-005 | Visual | PathOfTask circles felt casual | R1-* (procedure patterns) |
| ? | TBD | OD-F-??? | Cognitive | May emerge from OD | R1-* (organization) |

═══════════════════════════════════════════════════════════════════════════════
## SECTION D: PATTERN PROVENANCE
═══════════════════════════════════════════════════════════════════════════════

### Density Patterns

| Pattern | Research | Generated Finding | Validated By | Score |
|---------|----------|-------------------|--------------|-------|
| PULSE | R3-035, R1-001 | DD-F-001 | DD-001 | 33/40 |
| CRESCENDO | R3-036, R3-007 | DD-F-002 | DD-002 | 35/40 |
| ISLANDS | R3-005 (partial) | DD-F-003 | DD-003 | 32/40 |
| GEOLOGICAL | R3-005, R3-024, R3-044-046 | DD-F-004 | DD-004 | 35/40 |
| TIDAL/RIVERS | R3-029, R4-VR* | DD-F-005 | DD-005 | 36/40 |
| FRACTAL | R3-023 | DD-F-006 | DD-006 | 36/40 |

### Organizational Patterns ⏳ PENDING

TBD — OD explorations not yet complete.

═══════════════════════════════════════════════════════════════════════════════
## SECTION E: CROSS-REFERENCE INDEX
═══════════════════════════════════════════════════════════════════════════════

### "Where was R3-023 used?"

R3-023 (Fractal self-similarity):
- **DD-006:** EXEMPLARY application, █░░█░░█░░ at all scales
- **DD-F-006:** Generated finding for forward stages
- **HANDOFF-DD-TO-OD:** Mandatory for all OD explorations
- **BACKBONE.md Section 13:** Complete trace through all stages

### "Where was COMP-F-001 used?"

COMP-F-001 (Sharp edges):
- **DD-001 through DD-006:** All verified border-radius: 0
- **DD-REAUDIT-PERCEPTUAL-SYNTHESIS:** 6/6 DDs pass edge check
- **Soul Piece #1:** Documented in SOUL-DISCOVERIES.md

### "Where is traffic-light anti-pattern?"

Traffic-light (DD-F-015):
- **DD-001:** Initially violated (green+red adjacent)
- **DD-002+:** Avoided (purple used instead of red adjacent)
- **HANDOFF-DD-TO-OD:** Warning for OD to verify

═══════════════════════════════════════════════════════════════════════════════
## SECTION F: FINDING LIFECYCLE STATES
═══════════════════════════════════════════════════════════════════════════════

| State | Meaning | Count |
|-------|---------|-------|
| PENDING | Identified but not yet applied | ~260 |
| APPLIED | Used in at least one stage | ~75 |
| EXEMPLARY | Deeply applied as core concept | 6 |
| ACTIVE | Constraint that applies to all work | ~25 |
| CONSUMED | Used and no longer needs tracking | ~3 |

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Total Original Research:** 388 findings (R-1 to R-5)
**Total Generated Findings:** 39 (COMP-F + DD-F, more pending)
**Total Soul Pieces:** 5 visual (cognitive TBD)
**Total Patterns:** 6 density (organizational, axis, combination TBD)

**Update Schedule:**
- After each stage completion: Add generated findings
- After each exploration: Update research application status
- After migration work: Update pattern usage counts

═══════════════════════════════════════════════════════════════════════════════
