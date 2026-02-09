<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/dark-matter-index-b.md
Tier: B | Generated: 2026-02-09

1. WHY THIS EXISTS
Dark matter catalog for _provenance-gap-analysis/ (15 files, 11,237 lines)
and _provenance-deep-dive/ (10 files, 2,636 lines). Wave 0 research package
for re-enrichment agents. Identifies unique data, finding IDs, and
re-enrichment value per file.

3. STATUS
COMPLETE -- CATALOG DELIVERED

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| _provenance-gap-analysis/ (15 files)    | Source files cataloged                 |
| _provenance-deep-dive/ (10 files)       | Source files cataloged                 |
| OD-REENRICHMENT-SPECIFICATION.md        | Task definition                        |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Wave 1-3 enrichment agents              | Source material identification         |
| Weaver agent                            | Cross-reference with other indexes     |
| Wave 6 verifiers                        | Completeness check                     |

END INLINE THREADING HEADER
-->

# Dark Matter Index B: _provenance-gap-analysis/ + _provenance-deep-dive/

## Summary

| Directory | Files | Total Lines | Finding ID Refs | Unique Data |
|-----------|-------|-------------|-----------------|-------------|
| `_provenance-gap-analysis/` | 15 | 11,237 | 948 | YES -- gap definitions, traversal traces, dark matter census, target topology, team/phase architecture, verification framework |
| `_provenance-deep-dive/` | 10 | 2,636 | 205 | YES -- synthesis reflections, plan revisions (94 total, 62 unique), consolidated revision priorities |
| **TOTAL** | **25** | **13,873** | **1,153** | |

**Inline Threading Headers:** NONE (0 of 25 files have headers)

**Key characteristic:** These two directories represent the DIAGNOSTIC and PLANNING layers of the provenance chain remediation. The gap analysis files (01-17) diagnosed the problem; the deep-dive files refined the remediation plan. Together they are the intellectual foundation that produced the 18-agent remediation (commit b0e5185). They are CONSUMED artifacts -- their value was realized in the remediation execution. Residual value: traversal methodology, gap taxonomy, verification framework design, and process lessons.

---

## PART 1: _provenance-gap-analysis/ (15 files, 11,237 lines)

### Phase 1: Diagnostic Reports (files 01-07, 3,927 lines)

| # | File | Lines | Purpose | Unique Data | Finding ID Refs | Re-Enrichment Value |
|---|------|-------|---------|-------------|-----------------|---------------------|
| 1 | `01-dd-vs-od-comparison.md` | 434 | Side-by-side comparison of DD vs OD provenance completeness | DD artifact inventory (6 files, 1,796 lines vs OD 3 files, 437 lines); per-artifact content depth analysis; 8 information categories in DD gold standard | 14 | MEDIUM -- establishes the gap magnitude; DD gold standard structure already consumed by remediation |
| 2 | `02-inline-identity-audit.md` | 572 | Per-OD-file inline header inventory; node-vs-edge analysis | Complete per-file finding ID census (all 6 ODs); EXT finding ID lists per OD; density pairing documentation per OD; R-finding cross-reference map | 71 | HIGH -- per-OD finding citation map is the most detailed cross-reference of which findings appear in which OD headers |
| 3 | `03-pipeline-infrastructure-map.md` | 606 | Maps intended vs actual pipeline state across all 5 stages | 5-stage model with transition semantics (ENABLED/CONSTRAINED/GENERATED); 7 enumerated divergences with file paths and status mismatches; accumulation model fragility analysis | 34 | MEDIUM -- pipeline semantics already in BACKBONE; divergence catalog consumed by remediation |
| 4 | `04-ad-readiness-assessment.md` | 373 | Measures OD-to-AD handoff completeness against DD-to-OD gold standard | 10 information categories from DD handoff; 7 specific mistakes AD agent would make without handoff; workaround vs proper-channel comparison; 90% quality verdict | 35 | LOW -- HANDOFF-OD-TO-AD.md now exists (created by remediation); the assessment's purpose was fulfilled |
| 5 | `05-traversal-chain-tests.md` | 553 | 3 hop-by-hop finding traversals through full provenance pipeline | R3-023/R3-036 split identity documentation (12-row disambiguation table); OD-F-005 ID collision evidence; 3 complete chain traces (DD-F-006 forward 8 hops, OD-F-005 backward 8 hops, R1-001 forward 10 hops) | 140 | HIGH -- the traversal methodology and split-identity evidence are reference material for future chain audits |
| 6 | `06-root-cause-analysis.md` | 377 | Why OD provenance gap occurred: timeline + 5 root causes | Git timeline reconstruction (DD provenance Feb 5, OD build Feb 7); 5 root causes with evidence; recurrence risk assessment for AD/CD; "illusion of completeness" concept | 1 | MEDIUM -- root causes consumed; recurrence prevention gates now in AD CLAUDE.md |
| 7 | `07-perfect-state-gap-audit.md` | 960 | Defines 13 perfection dimensions; identifies 33 specific gaps | 13-dimension perfection model (Forward/Backward/Cross Traversability, Accumulation Integrity, Finding Lifecycle, Score Justification, Decision Documentation, Negative Space, Emergence Tracking, Soul Evolution, Anti-Pattern Evolution, Audit Integration, Reproducibility); GAP-001 through GAP-033 with severity ratings (5 CRITICAL, 9 HIGH, 14 MEDIUM, 3 LOW) | 127 | HIGH -- the 13-dimension model and GAP taxonomy are reusable verification frameworks |

### Phase 2: Census and Assessment (files 10-12, 1,401 lines)

| # | File | Lines | Purpose | Unique Data | Finding ID Refs | Re-Enrichment Value |
|---|------|-------|---------|-------------|-----------------|---------------------|
| 8 | `10-dark-matter-census.md` | 591 | Complete catalog of all 139 markdown files in showcase/ | 5-category taxonomy (A: Formal Provenance 33 files, B: Research-Bearing Dark Matter 51 files, C: Operational 30 files, D: Navigation 15 files, E: Infrastructure 10 files); per-file Cat/Lines/Research/Finding IDs/Unique/In Chain/Should Be table; 89 unique finding IDs in dark matter; 3:1 dark matter to formal chain ratio | 32 | HIGH -- the complete file census and dark matter taxonomy are the most comprehensive inventory of the showcase directory |
| 9 | `11-od-quality-assessment.md` | 361 | Evidence-based analysis of OD build quality vs potential | 12-file mandated read list from OD Execution Protocol; R-2 non-consumption gap (27 findings); 90% quality verdict with 3 specific gaps; "performative vs analytical" scoring critique | 29 | MEDIUM -- quality assessment consumed; R-2 gap now documented in OD-SYNTHESIS |
| 10 | `12-prior-stage-chain-audit.md` | 449 | Cross-stage provenance completeness: Stages 1, 2, and 3 | Stage 1 inventory (4 files, 791 lines, all COMPLETE); Stage 2 inventory (6 files, 1,796 lines, all COMPLETE); "KortAI Reference" has no file path (mental model gap); inverted gap pattern finding (most infrastructure = largest gaps) | 20 | LOW -- prior stage gaps assessed and corrected by remediation |

### Phase 3: Architecture and Design (files 13-17, 5,961 lines)

| # | File | Lines | Purpose | Unique Data | Finding ID Refs | Re-Enrichment Value |
|---|------|-------|---------|-------------|-----------------|---------------------|
| 11 | `13-target-topology.md` | 1,296 | Blueprint for structurally sound provenance chain: every file, finding flow, dark matter disposition | Complete target directory tree (OK/UPDATE/NEW annotations); 6-section per-file specification for each new document; dark matter disposition map (51 files triaged); finding registry architecture (89 IDs across 8 families); information flow diagram Research->Stage 1->DD->OD->AD->CD | 183 | MEDIUM -- target topology was consumed by remediation builders; the finding registry architecture is now in EXT-RESEARCH-REGISTRY |
| 12 | `14-triage-protocol.md` | 789 | Decision tree for classifying 51 dark matter files into 5 categories | 5-question decision cascade (ABSORB/CONSOLIDATE/ARCHIVE/KEEP-IN-PLACE/DELETE); per-file triage decisions for 80 files; ABSORB extraction protocol; ARCHIVE protocol; post-triage verification | 15 | LOW -- triage decisions executed; files stayed in place per REFERENCE decision |
| 13 | `15-phase-architecture.md` | 1,447 | 6-phase execution plan for provenance chain remediation | Phase dependency diagram; per-phase agent assignments and timelines; critical path analysis (90 min parallel vs 130 min serial); risk registry (8 risks with mitigations); cost estimate (~$15-25 API cost) | 90 | LOW -- architecture was consumed and executed; the remediation is complete |
| 14 | `16-agent-team-topology.md` | 1,558 | 17-agent team design: roles, waves, file ownership, communication, crash recovery | 12 design principles from MEMORY.md with implications; 7 team roles with binary responsibilities; 5-wave execution plan; file ownership matrix (zero contention); communication protocol; crash recovery protocol; 7 prompt templates | 83 | MEDIUM -- agent team patterns are reusable for future multi-agent phases; prompt template structure is a template for future team designs |
| 15 | `17-verification-framework.md` | 871 | 104-item, 18-dimension verification framework | 18 verification dimensions with PERFECT/PASS/FAIL definitions; 11-category master checklist (A: Document Universe 7 items, B: Finding IDs 10, C: Stage Completeness 21, D: Forward Traversability 10, E: Backward Traversability 6, F: Cross-Traversability 6, G: Accumulation Integrity 7, H: Infrastructure Consistency 16, I: Information Ratio 4, J: Reproducibility 5, K: Process Integrity 8); execution protocol | 74 | HIGH -- verification framework is a reusable template for any future provenance verification; 104-item checklist adaptable to AD/CD |

---

## PART 2: _provenance-deep-dive/ (10 files, 2,636 lines)

### Synthesis Layer (files 01-05, 885 lines)

| # | File | Lines | Purpose | Unique Data | Finding ID Refs | Re-Enrichment Value |
|---|------|-------|---------|-------------|-----------------|---------------------|
| 16 | `01-core-gaps.md` | 129 | Reader synthesis of Reports 07, 10, 06 — gap model + dark matter taxonomy | "Illusion of completeness" conceptualization; GAP-017 middle-exploration bias finding; soul piece prediction as "unrecognized decision" (distinct from deferred decision); "performative vs analytical" scoring critique | 5 | MEDIUM -- insights consumed by synthesis-reflection; core concepts now in OD-SYNTHESIS |
| 17 | `02-evidence-chain.md` | 218 | Reader synthesis of Reports 05, 11, 12 — traversal evidence + chain bifurcation | "Cliff not slope" formulation of the OD provenance break; R3-023/R3-036 split identity summary with resolution; OD-F-005 ID collision resolution; "data imprisonment" concept; node-vs-edge distinction for inline headers vs provenance docs | 19 | MEDIUM -- traversal evidence consumed; split identity resolved in PIPELINE-MANIFEST |
| 18 | `03-architecture.md` | 174 | Reader synthesis of Reports 13, 15, 16, 17 — architecture design analysis | "Distillation not migration" principle; 10-14% extraction yield calculation; diagnostic-first execution rationale; critical path analysis (90 min parallel); finding flow quantification (24% -> 75% chain coverage) | 2 | LOW -- architectural decisions consumed and executed |
| 19 | `04-context-and-chain.md` | 161 | Reader synthesis of Reports 01-04, 14 + actual chain files | "Retroactive formalization" finding (DD provenance was also post-hoc); "operational excellence does not produce provenance" principle; node-vs-edge distinction elaboration; PIPELINE-MANIFEST TBD sections cataloged; BACKBONE stale sections cataloged | 9 | MEDIUM -- principles and chain file analysis consumed by remediation |
| 20 | `05-synthesis-reflection.md` | 203 | Master synthesis across all 4 reader agents — key tensions + unified model | 4 key tensions: structural vs architectural soundness, distillation vs migration, binary vs judgment enforcement, retroactive vs interrupted formalization; "untranslated knowledge" concept; metacognition-to-provenance connection | 9 | MEDIUM -- synthesis consumed by CONSOLIDATED-REVISIONS and remediation execution |

### Plan Revision Layer (5 files, 1,751 lines)

| # | File | Lines | Purpose | Unique Data | Finding ID Refs | Re-Enrichment Value |
|---|------|-------|---------|-------------|-----------------|---------------------|
| 21 | `CLAUDE-PLAN-FOR-REVISION.md` | 230 | Original remediation plan (from prior instance) — marked for revision | 7-agent, 4-wave architecture; 5 resolved binary decisions; per-agent file ownership; prompt templates; verification protocol (14 lines, later found to be 5% coverage) | 31 | LOW -- superseded by CONSOLIDATED-REVISIONS and actual execution |
| 22 | `revisions-diagnostic.md` | 240 | Plan revisions from diagnostic files 01-05 (26 revisions) | 6 revisions from file 01 (CRITICAL: two-file audit precedent, HIGH: backward consumption verification, HIGH: STAGE-HEADER 8-section spec); 5 revisions from file 02; 5 from file 03; 4 from file 04; 6 from file 05 | 40 | LOW -- revisions applied to execution plan |
| 23 | `revisions-foundation.md` | 366 | Plan revisions from foundation files 06-12 (30 revisions) | 5 revisions from file 06 (CRITICAL: enforcement gate covers only 1 of 5 root causes); 7 from file 07; 6 from file 10; 5 from file 11; 7 from file 12 | 50 | LOW -- revisions applied to execution plan |
| 24 | `revisions-architecture.md` | 392 | Plan revisions from architecture files 13-17 (38 revisions) | CRITICAL: census-b missing 2 of 6 sources for EXT-RESEARCH-REGISTRY; CRITICAL: OD-outbound-findings missing 3 of 6 sections; HIGH: PIPELINE-MANIFEST update needs 6 subsection checklist; HIGH: OD-SYNTHESIS needs 11 sections not 5-6 | 9 | LOW -- revisions applied to execution plan |
| 25 | `CONSOLIDATED-REVISIONS.md` | 523 | Master consolidation: 94 raw revisions -> 62 unique -> top 15 ranked | Top 15 most critical revisions ranked by impact; #1: verification at 5% coverage; #2: skipped diagnostic/triage phases; #3: 7 agents vs 17; #4: no fresh-eyes test; #5: R3-023/R3-036 unresolved; #6: OD-F-005 collision; #7-15: agent prompt underspecification, missing read sources, infrastructure update granularity | 31 | MEDIUM -- consolidation methodology is reusable; top-15 ranking pattern is a template for future plan audits |

---

## PART 3: Cross-Cutting Analysis

### Finding ID Families Referenced

| Family | Gap Analysis Refs | Deep Dive Refs | Total | Notes |
|--------|-------------------|----------------|-------|-------|
| OD-F-### | ~200 | ~40 | ~240 | Heaviest in 07 (gap audit) and 05 (traversal tests) |
| DD-F-### | ~150 | ~30 | ~180 | DD gold standard comparisons throughout |
| R1-R5-### | ~250 | ~50 | ~300 | Research finding tracing in 02, 05, 10, 11 |
| COMP-F-### | ~50 | ~10 | ~60 | Stage 1 chain audit in 12 |
| EXT-*-### | ~100 | ~20 | ~120 | Dark matter census (10) and identity audit (02) |
| GAP-### | ~150 | ~30 | ~180 | Defined in 07, referenced throughout |
| Other (DEC, CA, F-E) | ~48 | ~25 | ~73 | Scattered across triage and census |

### Unique Concepts Originating in These Directories

| Concept | Source File | Definition | Consumed By |
|---------|------------|------------|-------------|
| 13 Perfection Dimensions | 07 | Forward/Backward/Cross Traversability + 10 more | 17 (verification framework), remediation |
| GAP-001 through GAP-033 | 07 | 33 specific provenance gaps with severity | All remediation agents |
| Node vs Edge distinction | 02, 04 | Inline headers = nodes, provenance docs = edges | 05 (synthesis-reflection) |
| Dark matter taxonomy (A-E) | 10 | 5-category file classification | 14 (triage protocol), remediation |
| Cliff not slope | 02 | The OD provenance break is abrupt, not gradual | 05 (synthesis-reflection) |
| Distillation not migration | 03, 04 | Extract findings; don't relocate files | Remediation execution |
| R3-023/R3-036 split identity | 05 | Same concept, two IDs in different files | Remediation (resolved in PIPELINE-MANIFEST) |
| OD-F-005 ID collision | 05 | Two definitions for same ID in different files | Remediation (resolved) |
| 5 Root Causes | 06 | Why OD provenance gap occurred | Remediation, AD enforcement gates |
| Illusion of completeness | 01, 06 | Stale files worse than missing files | Process learning |
| 104-item verification framework | 17 | 18-dimension, 11-category checklist | Remediation verification |
| Retroactive formalization | 04 | DD provenance was also post-hoc, not organic | Process learning |
| Binary vs judgment enforcement | 05 (synthesis) | Binary rules 100% compliance, judgment ~0% | Agent team design |

### Re-Enrichment Priority Summary

| Priority | Count | Files |
|----------|-------|-------|
| HIGH | 5 | 02, 05, 07, 10, 17 |
| MEDIUM | 10 | 01, 03, 06, 11, 13, 16, 01-core-gaps, 02-evidence-chain, 04-context-and-chain, CONSOLIDATED-REVISIONS |
| LOW | 10 | 04, 12, 14, 15, 03-architecture, CLAUDE-PLAN, revisions-diagnostic, revisions-foundation, revisions-architecture, 05-synthesis-reflection |

**HIGH-priority files** contain unique taxonomies, verification frameworks, and cross-reference data that no other file in the system replicates. They are the most valuable dark matter for future phase design.

**MEDIUM-priority files** contain consumed insights whose residual value is in their methodology or conceptual frameworks, not their specific findings.

**LOW-priority files** were fully consumed by the remediation execution. Their content lives in the formal provenance chain. They retain archival value only.
