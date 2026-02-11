---
pipeline_stage: ALL
stage_name: Pipeline Manifest
file_type: manifest
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
last_updated: 2026-02-08
---

<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
Tier: B | Batch: 6 | Generated: 2026-02-06

1. WHY THIS EXISTS
Master registry tracking every finding in the design system pipeline from
identification through application. Links all COMP-F, DD-F, Soul pieces,
and R1-R5 research findings to their lifecycle status and consumers.

2. THE QUESTION THIS ANSWERS
Where was a specific finding identified, what is its current status, and
where has it been applied across the pipeline stages?

3. STATUS
ACTIVE — updated as findings move through pipeline stages

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| COMP-F-001 through COMP-F-021          | Component foundation findings          |
| DD-F-001 through DD-F-018              | Density exploration findings           |
| Soul pieces #1-5                        | Perceptual soul discoveries            |
| R1-R5 research (337 findings)           | All original research with status      |
| Pattern-to-finding linkage              | Cross-reference mapping                |
| COMPREHENSIVE-AUDIT-SPECIFICATION.md    | Comprehensive hierarchical audit fix   |

6. MUST HONOR
- Every finding must trace to its original research source
- Status transitions must be documented (PENDING -> APPLIED -> VALIDATED)
- Finding IDs are immutable once assigned

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| DESIGN-SYSTEM/CLAUDE.md                 | Referenced as finding lookup           |
| BACKBONE.md                             | Master narrative references findings   |
| Multiple STAGE-HEADERs                  | Stage-specific finding subsets         |
| DD-outbound-findings.md                 | DD finding cross-reference             |
| density-patterns.md                     | Pattern-to-finding validation          |
| 10+ inbound references total            | Central finding registry               |

10. DIAGNOSTIC QUESTIONS
- Can every finding ID in the manifest be traced to its original R-file source?
- Are all status transitions (PENDING/APPLIED/VALIDATED) accurately reflected?
- Do consumer files reference finding IDs that actually exist in this manifest?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->

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

**R-1 Status:** ~71% applied in OD (20/28 in OD-006), PRIMARY source for OD ✅ CONSUMED

### R-2 Creative Layouts (27 findings)

| ID | Finding | Status | Applied In | Evidence |
|----|---------|--------|------------|----------|
| R2-014 | White Space as Content | APPLIED | DD (all) | Sparse sections as design |
| R2-021 | Dense but Breathable | APPLIED | DD (all) | PULSE pattern |
| R2-022 | 8px base unit | APPLIED | Components | spacing.md tokens |
| R2-023 | 14px base typography | APPLIED | Components | typography.md tokens |
| R2-024-027 | Additional findings | PENDING | AD/CD | — |

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
| DD-F-001 | PULSE for alternating | Pattern | OD-001 | APPLIED — Consumed by OD (Q&A creates PULSE) |
| DD-F-002 | CRESCENDO for progressive | Pattern | OD-002, OD-004 | APPLIED — Consumed by OD (narrative arc + confidence) |
| DD-F-003 | ISLANDS for task groups | Pattern | OD-003 | APPLIED — Consumed by OD (task clusters as archipelagos) |
| DD-F-004 | GEOLOGICAL for hierarchy | Pattern | OD-004 | APPLIED — Consumed by OD (certainty stratification) |
| DD-F-005 | TIDAL/RIVERS width signal | Pattern | OD-001 | APPLIED — Consumed by OD (Q 60%/A 100% width) |
| DD-F-006 | FRACTAL meta-pattern | META | ALL ODs, AD, CD | APPLIED — Consumed by OD (MANDATORY, all 6 verified) |
| DD-F-007-009 | Process learnings | Process | Methodology | ACTIVE |
| DD-F-010 | Org must serve density | Forward | OD (GATE), AD, CD | APPLIED — Consumed by OD, ELEVATED to identity by OD-F-005 |
| DD-F-011 | Cognitive soul may emerge | Forward | OD | APPLIED — OD-F-005/OD-F-MP-001 ARE the cognitive emergence |
| DD-F-012 | Density implies axis | Forward | AD, CD | ACTIVE — Extended by OD-F-FL-001 (transitive chain: org→density→axis) |
| DD-F-013 | Component tolerance | Forward | CD | ACTIVE — Carried forward |
| DD-F-014 | Callout stacking fatigue | Constraint | All stages | ACTIVE — Enforced across all 6 ODs |
| DD-F-015-018 | Anti-patterns | Constraint | All stages | ACTIVE — DD-F-016 initially VIOLATED (2px epidemic, fixed) |

**Total DD-F-###:** 18 findings

### Stage 3 (OD-F-###) — Organization ✅ COMPLETE

| ID | Finding | Type | Consumed By | Status |
|----|---------|------|-------------|--------|
| OD-F-001 | Conversational width variation (60%/100%) creates natural TIDAL rhythm | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-002 | Fractal nesting via follow-ups satisfies DD-F-006 at section scale | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-003 | Q&A pairs are inherent PULSE generators (question=LOW, answer=HIGH) | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-004 | Chapter dividers as breathing zones for density debt recovery | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-005 | Organization IS Density — same phenomenon, two perspectives (CROWN JEWEL) | Pattern | AD (MANDATORY), CD, Migration | ACTIVE |
| OD-F-006 | Meta-documentation as purest density test | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-007 | Mode-transition breathing between organizational modes | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-008 | Compound creative techniques — layered EXT-CREATIVE effects exceed sum | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-009 | Narrative arc creates CRESCENDO — story complexity mirrors density | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-010 | Typography size reduction mirrors density increase (28px→20px) | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-011 | Tension meters as narrative wayfinding without consuming content space | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-012 | Code absence in setup acts creates anticipation (R1-017 as narrative device) | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-013 | Decision matrices are natural climax components at peak tension | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-MP-001 | Organization = Density Identity — meta-pattern of entire OD stage | Meta-Pattern | ALL (AD, CD, Migration) | ACTIVE |
| OD-F-PR-001 | External research enrichment elevates scores (+1.5, bespoke > broad) | Process | Methodology | ACTIVE |
| OD-F-FL-001 | Organizational patterns imply axis preferences (transitive chain) | Forward | AD (GATE) | ACTIVE |
| OD-F-AP-001 | 2px border epidemic — 108 CSS declarations, 1000+ instances | Anti-Pattern | AD, CD, Migration | ACTIVE |

**Total OD-F-###:** 17 findings (13 pattern + 1 meta-pattern + 1 process + 1 forward + 1 anti-pattern)

### Stage 4 (AD-F-###) — Axis COMPLETE

28 findings produced across 6 explorations (AD-001 Z-Pattern, AD-002 F-Pattern, AD-003 Bento Grid, AD-004 Spiral, AD-005 Choreography, AD-006 Compound). See `stage-4-axis-ad/AD-outbound-findings.md` for full registry.

| ID | Finding | Type | Consumed By | Status |
|----|---------|------|-------------|--------|
| AD-F-004 | 3-Way Unification Validated — axis, org, density are ONE structure | Primary Finding | CD, Migration | ACTIVE |
| AD-F-005 | Tension Meter as CRESCENDO Position Indicator in F-Pattern | Design Decision | CD, Migration | ACTIVE |
| AD-F-008 | Decision Matrix Validates CRESCENDO Peak in F-Pattern | Validation | CD, Migration | ACTIVE |
| AD-F-016 | Spiral Reading Order ENHANCES Geological Layering (stress-test answer) | Stress-test | CD, Migration | ACTIVE |
| AD-F-017 | Kinetic Equivalence — axis direction change IS density state change (4th mechanism) | Extension | CD, Migration | ACTIVE |
| AD-F-020 | Choreography is Reader Attention Movement, not CSS animation (identity clarification) | Identity | CD, Migration | ACTIVE |
| AD-F-021 | Triple Equivalence Holds at Compound Scale — zero manual density manipulation | Validation | CD, Migration | ACTIVE |
| AD-F-023 | Meta-Equivalence: ATTENTION TOPOLOGY unifies all 4 mechanisms (CROWN JEWEL) | Meta-Pattern | CD (MANDATORY), Migration | ACTIVE |
| AD-F-024 | Compound Is Sequential, Not Simultaneous — one axis per viewport | Constraint | CD (MANDATORY), Migration | ACTIVE |
| AD-F-025 | Transition Grammar Validated — 5x5 matrix (4 Smooth, 10 Bridge, 6 Breathing) | Constraint | CD (MANDATORY), Migration | ACTIVE |
| AD-F-027 | DD-F-006 Fractal at 5 Scales Confirmed (navigation, page, section, component, character) | Validation | CD, Migration | ACTIVE |
| AD-F-028 | No 6th Fractal Scale — 5-Scale Model Complete and bounded | Negative Finding | CD, Migration | ACTIVE |

**Total AD-F-###:** 28 findings (14 Class A confirming + 14 Class B extending, 0 Class C overwriting, 0 Class D breaking)

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
| — | None discovered in OD | — | — | OD-F-005 is META-PATTERN, not soul piece. Cognitive soul pieces remain theoretical. OD-F-MP-001 (Organization = Density Identity) governs all organizational work but does not qualify as a perceptual soul piece. | — |

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

### Organizational Patterns ✅ COMPLETE (v3 Re-Enriched)

| Pattern | Research | Generated Finding | Validated By | Score (v3) |
|---------|----------|-------------------|--------------|------------|
| CONVERSATIONAL | R1-001, R1-007, R1-008, EXT-CONV-006..011 | OD-F-001, OD-F-002, OD-F-003, OD-F-004 | OD-001 | 37/40 |
| NARRATIVE | R1-016, R1-017, R1-018, R1-019, EXT-NARR-001..011 | OD-F-009 | OD-002 | 35/40 |
| TASK-BASED | R1-001, R1-016, R1-019, EXT-TASK-013..019 | OD-F-010 | OD-003 | ~35/40 |
| CONFIDENCE | R1-016, R1-017, R1-018, EXT-CONF-013..018 | OD-F-011 | OD-004 | 34/40 |
| SPATIAL | R1-016, R1-018, R1-019, EXT-SPAT-013..018 | OD-F-012 | OD-005 | 35/40 |
| CREATIVE | R1-001 through R1-026, EXT-CREATIVE-010..015 | OD-F-005, OD-F-006, OD-F-007, OD-F-008, OD-F-013 | OD-006 | 37/40 (crown jewel) |

**Meta-pattern:** OD-F-MP-001 — Organization = Density Identity (governs all 6 patterns)
**Re-enrichment:** 42 EXT findings applied, 27 builder discoveries, convention spec unified 3 dialects
**Quality: ~35.5/40 average across 6 explorations (v3). Soul compliance: 100%. 20/20 SOUL FAILs = ANTI-PHYSICAL.**

═══════════════════════════════════════════════════════════════════════════════
## SECTION E: CROSS-REFERENCE INDEX
═══════════════════════════════════════════════════════════════════════════════

### "Where was R3-023 used?"

R3-023 (Fractal self-similarity):
- **DD-006:** EXEMPLARY application, █░░█░░█░░ at all scales
- **DD-F-006:** Generated finding for forward stages
- **HANDOFF-DD-TO-OD:** Mandatory for all OD explorations
- **ALL 6 ODs:** DD-F-006 enforced as MANDATORY constraint, verified in all explorations
- **OD-006:** MOST fractal — all 5 organizational modes cycling with zero density manipulation
- **BACKBONE.md Section 13:** Complete trace through all stages

**DISAMBIGUATION NOTE:** R3-023 is the canonical ID for fractal self-similarity in this manifest. R3-036 in RESEARCH-ACTIVE.md and OD HTML headers refers to the CRESCENDO definition — a DIFFERENT finding. The OD HTML headers consistently cite "R3-036 / DD-F-006 (FRACTAL)" following the RESEARCH-ACTIVE.md convention where R3-036 = "Fractal Self-Similar Density." This manifest uses R3-023 per its original entry. Both IDs point to the same underlying concept (fractal density) but from different R-3 source categorizations. See finding-registry.md Collision 2 for full analysis.

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
| PENDING | Identified but not yet applied | ~245 |
| APPLIED | Used in at least one stage | ~90 |
| EXEMPLARY | Deeply applied as core concept | 6 |
| ACTIVE | Constraint that applies to all work | ~70 (25 prior + 17 OD-F + 28 AD-F) |
| CONSUMED | Used and no longer needs tracking | ~3 |
| RESOLVED | Anti-pattern identified and fixed | 1 (OD-F-AP-001) |

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Total Original Research:** 337 findings (R-1 to R-5)
**Total Generated Findings:** 84 (COMP-F: 21 + DD-F: 18 + OD-F: 17 + AD-F: 28)
**Total EXT-* Findings:** 94 unique bespoke findings created during OD re-enrichment
**Total Soul Pieces:** 5 visual (no cognitive discovered in OD — OD-F-005 is meta-pattern, not soul piece)
**Total Patterns:** 6 density + 6 organizational + 6 axis (combination TBD)
**OD Re-Enrichment:** 43 agents, 3 waves, all 6 ODs upgraded to v3. Average score: ~35.5/40 (up from ~34.8/40). Convention spec unified 3 quality dialects. 20/20 SOUL FAILs confirmed ANTI-PHYSICAL identity.

**Comprehensive Hierarchical Audit (2026-02-09):** ~58 agents across 4 pillars (visual, structural, provenance, triage) + fresh-eyes adversarial + fix execution. 58 findings (5 Critical, 10 High, 17 Medium, 8 Low, 18 Notes) + 7 unique fresh-eyes findings. 10 Critical/High fixes applied across 18 files (6 OD, 6 DD, 4 provenance, 1 TSX, 1 CLAUDE.md). Soul compliance confirmed: 0 violations across ~13,000 elements (3 independent verification processes). DD files received DD-BACKPORT accessibility and palette alignment. PIPELINE-MANIFEST R-2 count corrected (78->27). rgba() opacity epidemic resolved across 4 OD files. All fixes verified via 187 programmatic DOM tests + 12 visual screenshots. Zero new soul violations introduced.

**Update Schedule:**
- After each stage completion: Add generated findings
- After each exploration: Update research application status
- After migration work: Update pattern usage counts

═══════════════════════════════════════════════════════════════════════════════
