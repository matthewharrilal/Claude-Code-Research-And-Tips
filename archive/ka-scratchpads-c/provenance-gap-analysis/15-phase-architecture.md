# 15 -- Multi-Phase Execution Architecture
## Provenance Chain Remediation: Full BFS/DFS Diagnostic Through Verified Closure

**Date:** 2026-02-08
**Architect:** Research & Design Agent (Claude Opus 4.6)
**Scope:** Complete provenance chain remediation across all stages (1, 2, OD) plus dark matter triage
**Input Evidence:** Reports 01-07, 10-12; MEMORY.md agent team lessons; 139-file dark matter census; 33-gap severity table; prior-stage chain audit

---

## TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Phase Dependency Diagram](#phase-dependency-diagram)
3. [Phase 0: Pre-Flight](#phase-0-pre-flight)
4. [Phase 1: Complete Diagnostic](#phase-1-complete-diagnostic)
5. [Phase 2: Dark Matter Triage](#phase-2-dark-matter-triage)
6. [Phase 3: Formal Chain Construction](#phase-3-formal-chain-construction)
7. [Phase 4: Prior Stage Corrections](#phase-4-prior-stage-corrections)
8. [Phase 5: Verification](#phase-5-verification)
9. [Phase 6: Cleanup and Commit](#phase-6-cleanup-and-commit)
10. [Critical Path Analysis](#critical-path-analysis)
11. [Risk Registry](#risk-registry)
12. [Cost Estimate](#cost-estimate)

---

## EXECUTIVE SUMMARY

The provenance chain has 33 documented gaps (5 CRITICAL, 9 HIGH, 14 MEDIUM, 3 LOW), a dark matter corpus 3x larger than the formal chain (51 files / ~32,800 lines vs 33 files / ~10,600 lines), and hidden gaps in "complete" stages 1 and 2. The remediation requires 6 phases, approximately 10-15 agents, and an estimated 90-120 minutes wall time.

The architecture is designed around three proven principles from MEMORY.md:

1. **Binary rules achieve 100% compliance; judgment rules achieve ~0%.** Every agent instruction is a binary rule with a verifiable output file. No judgment-based requirements.
2. **Per-file ownership eliminates contention.** Every file has exactly one author. No two agents touch the same file.
3. **Lead THIN rule.** The lead orchestrates, commits, and verifies. The lead never builds. The lead never runs Playwright.

### Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| Phase 1 before Phase 2 | Cannot triage dark matter without knowing the complete reference graph |
| Phase 2 before Phase 3 | Formal chain construction needs extracted findings from dark matter |
| Phase 3 partially parallel with Phase 4 | OD chain and prior-stage fixes are independent file sets |
| Phase 5 is strictly sequential | Verification must see the complete, final state |
| No Playwright needed | This is a documentation remediation, not a visual audit |
| No HTTP server needed | No HTML files are being rendered or inspected |

---

## PHASE DEPENDENCY DIAGRAM

```
PHASE 0: PRE-FLIGHT (Lead only, ~5 min)
    |
    v
PHASE 1: COMPLETE DIAGNOSTIC (3 parallel agents, ~15 min)
    |
    |-- Agent-1A: Finding Registry Scanner
    |-- Agent-1B: Reference Graph Builder
    |-- Agent-1C: Traversal Chain Tester
    |
    v
PHASE 2: DARK MATTER TRIAGE (3 parallel agents, ~20 min)
    |
    |-- Agent-2A: Checkpoints + Dependency-Trace Triager (23 files)
    |-- Agent-2B: Knowledge-Architecture + Execution-Journal Triager (15 files)
    |-- Agent-2C: Audit-Scratchpad + Gap-Analysis + Remaining Triager (13 files)
    |
    +-------+-------+
    |               |
    v               v
PHASE 3:        PHASE 4:
OD CHAIN        PRIOR STAGE
CONSTRUCTION    CORRECTIONS
(2 agents,      (2 agents,
 ~25 min)        ~15 min)
    |               |
    |-- Agent-3A:   |-- Agent-4A:
    |   OD-outbound |   Stage 1 + DD
    |   + HANDOFF   |   fixes
    |               |
    |-- Agent-3B:   |-- Agent-4B:
    |   OD-SYNTHESIS|   Infrastructure
    |   + patterns  |   updates
    |   + STAGE-HDR |
    |               |
    +-------+-------+
            |
            v
PHASE 5: VERIFICATION (1 agent, sequential, ~15 min)
    |
    |-- Agent-5A: Full traversal re-test + coverage audit
    |
    v
PHASE 6: CLEANUP AND COMMIT (Lead only, ~10 min)
    |
    |-- Archive triaged files
    |-- Update CLAUDE.md navigation
    |-- Update MEMORY.md
    |-- Git commit (specific file names)
    |-- Final state report
    |
    v
DONE
```

### Dependency Edges (What Blocks What)

```
Phase 0 ──> Phase 1 (cannot scan without state files)
Phase 1 ──> Phase 2 (cannot triage without reference graph)
Phase 2 ──> Phase 3 (cannot build OD-outbound without extracted findings)
Phase 2 ──> Phase 4 (infrastructure updates need triage decisions)
Phase 3 ──> Phase 5 (cannot verify without formal chain)
Phase 4 ──> Phase 5 (cannot verify without prior-stage fixes)
Phase 5 ──> Phase 6 (cannot commit unverified state)

Phase 3 ||| Phase 4 (PARALLEL -- no shared files)
Agent-3A --> Agent-3B (HANDOFF depends on outbound-findings)
Agent-4A ||| Agent-4B (PARALLEL -- no shared files)
```

---

## PHASE 0: PRE-FLIGHT

**Owner:** Lead only (no agents spawned)
**Duration:** ~5 minutes
**Dependencies:** None
**Blocks:** Everything

### 0.1 State File Initialization

Create the master execution state file that all agents will read and the lead will update:

**File:** `_provenance-gap-analysis/REMEDIATION-STATE.md`

```markdown
# REMEDIATION-STATE.md
## Phase Status
| Phase | Status | Started | Completed | Agent(s) |
|-------|--------|---------|-----------|----------|
| 0 | IN PROGRESS | [timestamp] | | Lead |
| 1 | PENDING | | | |
| 2 | PENDING | | | |
| 3 | PENDING | | | |
| 4 | PENDING | | | |
| 5 | PENDING | | | |
| 6 | PENDING | | | |

## Phase 1 Outputs
- [ ] finding-registry.md written
- [ ] reference-graph.md written
- [ ] traversal-results.md written

## Phase 2 Outputs
- [ ] triage-2a.md written
- [ ] triage-2b.md written
- [ ] triage-2c.md written
- [ ] extraction-manifest.md written

## Phase 3 Outputs
- [ ] OD-outbound-findings.md written
- [ ] HANDOFF-OD-TO-AD.md written
- [ ] OD-SYNTHESIS.md written
- [ ] organizational-patterns.md written
- [ ] STAGE-HEADER.md updated
- [ ] CLAUDE.md updated

## Phase 4 Outputs
- [ ] Stage 1 fixes applied
- [ ] DD fixes applied
- [ ] PIPELINE-MANIFEST.md updated
- [ ] BACKBONE.md updated
- [ ] PATTERN-INDEX.md updated
- [ ] SOUL-DISCOVERIES.md updated
- [ ] Anti-pattern registry updated

## Phase 5 Outputs
- [ ] verification-report.md written
- [ ] All traversal tests PASS
```

### 0.2 Directory Structure

Verify these directories exist (create if not):

```
_provenance-gap-analysis/
  remediation/           <-- NEW: Phase 1-2 outputs
    finding-registry.md
    reference-graph.md
    traversal-results.md
    triage-2a.md
    triage-2b.md
    triage-2c.md
    extraction-manifest.md
    verification-report.md
```

### 0.3 Lead Pre-Read Checklist

The lead MUST read (not recall) these files before spawning any agents:

1. This architecture document (15-phase-architecture.md)
2. REMEDIATION-STATE.md (just created)
3. MEMORY.md agent team lessons (all three team sections)

### 0.4 Pre-Flight Verification

Before proceeding to Phase 1, verify:

- [ ] REMEDIATION-STATE.md exists and is writable
- [ ] `remediation/` directory exists
- [ ] No other agents are running (clean slate)
- [ ] Lead has read MEMORY.md team lessons

### What Blocks If Phase 0 Fails

Everything. Phase 0 failure means the state tracking infrastructure does not exist. No agents should be spawned without REMEDIATION-STATE.md.

---

## PHASE 1: COMPLETE DIAGNOSTIC

**Duration:** ~15 minutes
**Dependencies:** Phase 0 complete
**Blocks:** Phase 2 (cannot triage without reference graph)
**Agent Count:** 3 parallel agents
**Critical Path:** Yes -- all downstream phases depend on Phase 1 outputs

### Purpose

Build the complete picture of every document, every finding ID, every reference edge, and every traversal chain across the ENTIRE system (formal provenance + dark matter + operational files). This extends the existing gap analysis (reports 01-07, 10-12) into a machine-processable diagnostic.

### Agent-1A: Finding Registry Scanner

**What It Reads:**
- All 33 formal provenance files (Category A from report 10)
- All 51 dark matter files (Category B from report 10)
- All 6 OD HTML inline headers (grep for finding IDs)
- All 6 DD HTML inline headers (grep for finding IDs)

**What It Produces:**
- `remediation/finding-registry.md`

**Output Format:**

```markdown
# Complete Finding Registry

## Section 1: Finding Definitions (where each ID is FIRST DEFINED)
| Finding ID | Defined In (file) | Line(s) | Has Full Metadata? | In Formal Chain? |
|------------|-------------------|---------|-------------------|-----------------|
| R1-001 | R1-DOCUMENTATION-PATTERNS.md | 42-55 | YES | YES |
| OD-F-001 | OD-CHECKPOINT.md | 141 | NO (table entry only) | NO |
| EXT-CONV-001 | OD-001-conversational.html | header line 28 | PARTIAL | NO |

## Section 2: Finding Citations (where each ID is REFERENCED but not defined)
| Finding ID | Cited In (file) | Context |
|------------|-----------------|---------|
| R1-001 | OD-001-conversational.html | Applied Research section |
| DD-F-006 | HANDOFF-DD-TO-OD.md | Meta-pattern elevation |

## Section 3: Collisions (same ID, different definitions)
| Finding ID | Definition 1 (file:line) | Definition 2 (file:line) | Conflict? |
|------------|-------------------------|-------------------------|-----------|

## Section 4: Ghosts (IDs referenced but never defined)
| Finding ID | Referenced In | Expected Definition Location |
|------------|--------------|------------------------------|

## Section 5: Orphans (IDs defined but never referenced anywhere else)
| Finding ID | Defined In | Should Be Referenced By |
|------------|-----------|------------------------|

## Section 6: Statistics
| Category | Count |
|----------|-------|
| Total unique finding IDs | |
| IDs in formal chain | |
| IDs ONLY in dark matter | |
| Collisions | |
| Ghosts | |
| Orphans | |
```

**Binary success criteria:** File exists and contains all 6 sections with data.

### Agent-1B: Reference Graph Builder

**What It Reads:**
- All 139 markdown files (census from report 10)
- All 12 HTML exploration files (6 DD + 6 OD)
- YAML frontmatter `predecessor`/`successor` fields where present
- BUILT ON / CONSUMED BY tables in inline headers
- Explicit file path references

**What It Produces:**
- `remediation/reference-graph.md`

**Output Format:**

```markdown
# Complete Reference Graph

## Section 1: Document-to-Document Edges
| Source File | Target File | Edge Type | Evidence |
|------------|-------------|-----------|----------|
| DD-outbound-findings.md | OD-outbound-findings.md | YAML successor | frontmatter line 6 |
| HANDOFF-DD-TO-OD.md | OD-RESEARCH-GATE.md | Responsibility checklist | line 249 |

## Section 2: Broken Edges (target does not exist)
| Source File | Target File (missing) | Edge Type | Impact |
|------------|----------------------|-----------|--------|

## Section 3: Orphan Documents (zero inbound edges)
| File | Category | Should Have Inbound From |
|------|----------|-------------------------|

## Section 4: Sink Documents (zero outbound edges, but should have them)
| File | Category | Should Have Outbound To |
|------|----------|------------------------|

## Section 5: Clusters (groups of files with dense internal refs but sparse external refs)
| Cluster | Files | Internal Edges | External Edges |

## Section 6: Stage-to-Stage Chains
### Stage 1 -> Stage 2
| Chain Element | File | Exists? | Complete? |
|--------------|------|---------|-----------|

### Stage 2 -> Stage 3
| Chain Element | File | Exists? | Complete? |

### Stage 3 -> Stage 4 (planned)
| Chain Element | File | Exists? | Complete? |
```

**Binary success criteria:** File exists with all 6 sections. Broken edges list is complete (cross-reference with GAP-013 broken successor pointer).

### Agent-1C: Traversal Chain Tester

**What It Reads:**
- `remediation/finding-registry.md` (from Agent-1A -- WAIT for Agent-1A to finish if needed)
- `remediation/reference-graph.md` (from Agent-1B -- WAIT for Agent-1B to finish if needed)
- Report 05 (traversal-chain-tests.md) as reference for test methodology

**What It Produces:**
- `remediation/traversal-results.md`

**Output Format:**

```markdown
# Traversal Chain Test Results (Pre-Remediation Baseline)

## Test 1: Forward Traversal (Stage 1 -> Stage 2 -> Stage 3 -> Stage 4)
| Start | Hop 1 | Hop 2 | Hop 3 | Result |
|-------|-------|-------|-------|--------|
| COMP-F-001 | component-findings.md | DD-outbound-findings.md | ??? | FAIL at hop 3 (no OD-outbound-findings.md) |

## Test 2: Backward Traversal (OD-001 CSS line -> research)
| Start | Hop 1 | Hop 2 | Hop 3 | Result |
|-------|-------|-------|-------|--------|

## Test 3: Cross-Traversal (OD-003 <-> OD-005 relationship)
| Question | Answer Document | Exists? | Result |

## Test 4: Finding Lifecycle (OD-F-005 complete lifecycle)
| Stage | Evidence | Exists? | Result |

## Test 5: Accumulation (constraint count monotonically increasing)
| Stage | Constraint Count | Previous Stage | Monotonic? |

## Test 6: Dark Matter Coverage
| Dark Matter Finding ID Category | Total IDs | In Formal Chain | Coverage % |

## BASELINE SUMMARY
| Test | Result | Gaps Found |
|------|--------|-----------|
| Forward | FAIL | [count] gaps |
| Backward | PARTIAL | [count] gaps |
| Cross | FAIL | [count] gaps |
| Lifecycle | FAIL | [count] gaps |
| Accumulation | FAIL | [count] gaps |
| Dark Matter | FAIL | [coverage]% |
```

**Dependency note:** Agent-1C depends on outputs from Agent-1A and Agent-1B. Two options:
- **Option A (preferred):** Spawn Agent-1C ~5 minutes after 1A and 1B. By the time 1C needs registry/graph data, they should be written.
- **Option B (safe):** Spawn Agent-1C only after 1A and 1B complete. Adds ~5 min to wall time.

**Binary success criteria:** File exists with all 6 test results and baseline summary.

### Phase 1 Completion Gate

**Lead verifies (binary checks):**
- [ ] `remediation/finding-registry.md` exists and has all 6 sections
- [ ] `remediation/reference-graph.md` exists and has all 6 sections
- [ ] `remediation/traversal-results.md` exists and has baseline summary
- [ ] REMEDIATION-STATE.md Phase 1 outputs all checked

**What blocks if Phase 1 fails:** Phase 2 cannot begin. Dark matter triage requires the finding registry to know which IDs need extraction and the reference graph to know which files are orphaned.

---

## PHASE 2: DARK MATTER TRIAGE

**Duration:** ~20 minutes
**Dependencies:** Phase 1 complete (finding registry + reference graph available)
**Blocks:** Phase 3 (formal chain construction needs extracted findings)
**Agent Count:** 3 parallel agents
**Critical Path:** Yes -- Phase 3 depends on extraction manifest

### Purpose

Process the 51 Category B dark matter files according to a triage protocol. For each file, classify it and extract any findings that need to enter the formal chain.

### Triage Classification System

Every dark matter file receives one of these classifications:

| Classification | Definition | Action |
|---------------|------------|--------|
| **ABSORB** | Contains unique findings/data that MUST enter the formal chain | Extract finding IDs and data into formal chain staging |
| **REFERENCE** | Contains useful evidence that the formal chain should POINT TO (not duplicate) | Add a reference link from the relevant provenance document |
| **CONSOLIDATE** | Contains data that overlaps with another dark matter or formal file | Mark as redundant, note the authoritative source |
| **ARCHIVE** | Contains operational/process data that has historical value but no chain value | Mark for archive, no extraction needed |
| **KEEP-AS-IS** | Already serving its purpose, no action needed | Leave in place |

### File Assignment Strategy

Files are assigned to agents by subdirectory to minimize cross-agent dependencies. Each agent reads the finding registry and reference graph FIRST, then processes their assigned files.

### Agent-2A: Checkpoints + Dependency-Trace (23 files)

**Must Read First:**
- `remediation/finding-registry.md`
- `remediation/reference-graph.md`

**Assigned Files (checkpoints/ -- 10 Cat B files):**

| # | File | Expected Classification | Rationale |
|---|------|----------------------|-----------|
| 1 | COMPONENT-AUDIT-COMP-001-011.md (755 lines) | REFERENCE | Unique pre-remediation baseline; formal chain should point to it |
| 2 | COMPONENT-AUDIT-FOUNDATION.md (669 lines) | CONSOLIDATE | 337-finding inventory; redundant with R1-R5 + RESEARCH-ACTIVE.md |
| 3 | COMPONENTS-REGISTRY.md (629 lines) | ABSORB | 11 component identity definitions exist ONLY here |
| 4 | DISCOVERIES-LOG.md (844 lines) | REFERENCE | DD scoring history + curation decisions; formal chain should point |
| 5 | OD-CHECKPOINT.md (162 lines) | ABSORB | OD-F-001 through OD-F-008 ONLY defined here; critical extraction |
| 6 | PERCEPTUAL-AUDIT-LOG.md (476 lines) | ARCHIVE | Sub-agent observations; historical value only |
| 7 | PERCEPTUAL-DEEPENING-SUMMARY.md (249 lines) | ARCHIVE | /70 scale scores; superseded by re-audit |
| 8 | RESEARCH-ACTIVE.md (737 lines) | ABSORB | Live research tracking; needs backfill + sync to provenance copy |
| 9 | RETROACTIVE-AUDIT-DD-001-006.md (928 lines) | REFERENCE | Most thorough DD audit; should be linked from DD provenance |
| 10 | VISUAL-AUDIT-DD-001-006.md (430 lines) | REFERENCE | 7-agent visual assessment; should be linked from DD provenance |

**Assigned Files (dependency-trace/ -- 13 Cat B files):**

| # | File | Expected Classification | Rationale |
|---|------|----------------------|-----------|
| 11 | 01-reachability-report.md (264 lines) | REFERENCE | T1 reachability proof; BACKBONE should cite |
| 12 | 02-threading-data/design-extraction-threading.md (608 lines) | KEEP-AS-IS | Raw threading data; consumed by Phase 2B |
| 13 | 02-threading-data/design-system-threading.md (369 lines) | KEEP-AS-IS | Raw threading data |
| 14 | 02-threading-data/showcase-threading.md (718 lines) | KEEP-AS-IS | Raw threading data |
| 15 | 03-relationship-map.md (331 lines) | KEEP-AS-IS | Graph data; consumed by mega debrief |
| 16 | 04-cross-directory-analysis.md (247 lines) | KEEP-AS-IS | Cross-dir analysis |
| 17 | 06-threading-summary.md (192 lines) | KEEP-AS-IS | Summary statistics |
| 18 | 08-OBSERVATIONS-LOG.md (342 lines) | ARCHIVE | Historical observations |
| 19 | 09-INTEGRITY-REPORT.md (206 lines) | REFERENCE | Verification results; BACKBONE should cite |
| 20 | DD-SOURCE-OF-TRUTH-EXTRACTION.md (674 lines) | ABSORB | 4 CRITICAL token divergences; anti-pattern registry needs |
| 21 | DD-TYPOGRAPHY-VISUAL-AUDIT.md (244 lines) | REFERENCE | Ground-truth rendered values |
| 22 | PHASE-2A-CLASSIFICATION.md (708 lines) | KEEP-AS-IS | Master file classification |
| 23 | TRACE-SUMMARY.md (238 lines) | KEEP-AS-IS | Summary of all trace findings |

**What Agent-2A Produces:**
- `remediation/triage-2a.md`

**Output Format:**

```markdown
# Dark Matter Triage: Checkpoints + Dependency-Trace

## Classification Results
| File | Classification | Unique Data Extracted | Formal Chain Target | Notes |
|------|---------------|----------------------|--------------------|----|

## ABSORB Extractions
### From OD-CHECKPOINT.md
[Full extraction of OD-F-001 through OD-F-008 with all available metadata]
[Per-OD scores, density pairings, key insights, DD sources]

### From COMPONENTS-REGISTRY.md
[11 component identity definitions with character names]

### From RESEARCH-ACTIVE.md
[Current application status for all 337 findings]
[Discrepancy with PIPELINE-MANIFEST noted]

### From DD-SOURCE-OF-TRUTH-EXTRACTION.md
[4 CRITICAL token divergences]

## REFERENCE Links to Create
| Dark Matter File | Should Be Referenced From | Link Text |
|-----------------|-------------------------|-----------|
```

**Binary success criteria:** File exists with classification for all 23 assigned files. Every ABSORB file has an extraction section.

### Agent-2B: Knowledge-Architecture + Execution-Journal (15 files)

**Must Read First:**
- `remediation/finding-registry.md`
- `remediation/reference-graph.md`

**Assigned Files (knowledge-architecture/ top-level -- 11 Cat B files):**

| # | File | Expected Classification | Rationale |
|---|------|----------------------|-----------|
| 1 | ACCUMULATED-IDENTITY-v1.md (539 lines) | REFERENCE | Agent onboarding doc; OD stage header should point to it |
| 2 | KA-DECISIONS.md (382 lines) | KEEP-AS-IS | Tier classification framework; serves its purpose |
| 3 | KA-VERIFICATION.md (309 lines) | ARCHIVE | Verification checklists; historical |
| 4 | OD-004-EXTERNAL-RESEARCH.md (680 lines) | ABSORB | 24 EXT-CONF/EXT-TASK findings not in formal chain |
| 5 | OD-005-EXTERNAL-RESEARCH.md (1,725 lines) | ABSORB | 12 EXT-SPAT findings not in formal chain |
| 6 | OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md (536 lines) | REFERENCE | Process research; OD stage header should point |
| 7 | OD-GRANULAR-AUDIT-RESULTS.md (620 lines) | ABSORB | Authoritative OD audit; needs provenance chain integration |
| 8 | OD-RETROSPECTIVE-AND-PROTOCOL-v2.md (589 lines) | ARCHIVE | Superseded by v3 |
| 9 | PHASE-1B-MEGA-DEBRIEF.md (2,632 lines) | REFERENCE | Structural integrity proof; BACKBONE should cite |
| 10 | WORKFLOW-METACOGNITION-ANALYSIS.md (878 lines) | KEEP-AS-IS | Meta-analysis; serves its own purpose |
| 11 | OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md (4,411 lines) | ARCHIVE | Process architecture; historical value only |

**Assigned Files (_execution-journal/ -- 4 Cat B files):**

| # | File | Expected Classification | Rationale |
|---|------|----------------------|-----------|
| 12 | builder-log.md (148 lines) | REFERENCE | OD-001 build data; OD synthesis should point |
| 13 | decisions.md (36 lines) | ABSORB | DEC-001/002 with rationale; decisions section needs |
| 14 | lead-log.md (129 lines) | ARCHIVE | Session recovery data; historical |
| 15 | weaver-log.md (259 lines) | ARCHIVE | Threading verification; historical |

**What Agent-2B Produces:**
- `remediation/triage-2b.md`

Same output format as Agent-2A. Special attention to:
- Full extraction of OD-004-EXTERNAL-RESEARCH.md EXT-CONF/EXT-TASK findings
- Full extraction of OD-005-EXTERNAL-RESEARCH.md EXT-SPAT findings
- Full extraction of OD-GRANULAR-AUDIT-RESULTS.md summary data
- DEC-001/DEC-002 decision rationale extraction

**Binary success criteria:** File exists with classification for all 15 assigned files. Every ABSORB file has an extraction section.

### Agent-2C: Audit-Scratchpad + Gap-Analysis + Remaining (13 files)

**Must Read First:**
- `remediation/finding-registry.md`
- `remediation/reference-graph.md`

**Assigned Files (_od-audit-scratchpad/ -- 10 Cat B files that are NOT purely operational):**

| # | File | Expected Classification | Rationale |
|---|------|----------------------|-----------|
| 1 | comparative-reference.md (313 lines) | REFERENCE | DD->OD inheritance verification |
| 2 | content-authenticity.md (306 lines) | ARCHIVE | Content quality; operational |
| 3 | contrast-accessibility.md (361 lines) | ABSORB | CA-001 through CA-005 WCAG findings |
| 4 | cross-od-consistency.md (607 lines) | ABSORB | Token diff proof (12/12 PASS); OD synthesis needs |
| 5 | fresh-eyes.md (324 lines) | ABSORB | F-E-001 through F-E-005; 3 dialect classification |
| 6 | identity-brief.md (522 lines) | CONSOLIDATE | Overlaps with ACCUMULATED-IDENTITY-v1 |
| 7 | research-refinement.md (395 lines) | ABSORB | 55 EXT-* soul test results; 7 spirit violations |
| 8 | structural-integrity.md (403 lines) | REFERENCE | Accessibility structural findings |
| 9 | fix-report-fixer-c.md (257 lines) | ABSORB | False positive evidence (font-loading timing) |
| 10 | systematic-audit-001 through 006 (aggregated) | REFERENCE | Per-OD DOM audit evidence |

**Assigned Files (remaining Cat B):**

| # | File | Expected Classification | Rationale |
|---|------|----------------------|-----------|
| 11 | OD-006-CREATIVE-RESEARCH-FEED.md (975 lines) | ABSORB | EXT-CREATIVE-001 through 012; orphaned from provenance |
| 12 | FINDINGS-INDEX.md (516 lines) | CONSOLIDATE | Redundant with finding-registry.md (Phase 1 output) |
| 13 | _provenance-gap-analysis/01 through 07 (aggregated) | KEEP-AS-IS | This analysis work; meta-documentation |

**What Agent-2C Produces:**
- `remediation/triage-2c.md`

Same output format as Agent-2A. Special attention to:
- Full extraction of fresh-eyes.md F-E-001 through F-E-005
- Full extraction of contrast-accessibility.md CA-001 through CA-005
- Full extraction of cross-od-consistency.md token diff results
- Full extraction of OD-006-CREATIVE-RESEARCH-FEED.md EXT-CREATIVE findings
- Full extraction of research-refinement.md spirit violation data

**Binary success criteria:** File exists with classification for all 13 assigned files. Every ABSORB file has an extraction section.

### Phase 2 Completion Gate: Extraction Manifest

After all three triage agents complete, the lead (or a weaver, if warranted) consolidates their extractions into a single manifest:

**File:** `remediation/extraction-manifest.md`

```markdown
# Extraction Manifest: Findings Entering Formal Chain

## OD-F Findings (from OD-CHECKPOINT.md extraction)
| ID | Name | Description | Source OD | Score Basis | Target Stages |
|----|------|-------------|-----------|-------------|---------------|
| OD-F-001 | ... | ... | OD-001 | ... | AD, CD |

## EXT-* Findings (from external research extractions)
| ID | Name | Source File | Applied In | In Formal Chain After Remediation? |
|----|------|------------|-----------|-----------------------------------|

## Audit Findings (from OD-GRANULAR-AUDIT-RESULTS extraction)
| Summary Stat | Value |
|-------------|-------|
| Total findings | 89 |
| Fixes applied | 16 |
| False positives | 2 |
| Deferred | 1 |
| Soul violations | 0 |

## Prior Stage Fixes Needed
| Stage | File | Fix Description | Source |
|-------|------|-----------------|--------|
| 1 | STAGE-HEADER.md | Add "KortAI Reference = Mental model" acknowledgment | Report 12 |
| DD | RESEARCH-ACTIVE.md | Backfill DD application data (10 vs ~48 discrepancy) | Report 12 |

## Files to Reference (not absorb)
| Dark Matter File | Reference From | Link Type |
|-----------------|---------------|-----------|

## Files to Archive
| File | Reason |
|------|--------|
```

**Lead verifies (binary checks):**
- [ ] `remediation/triage-2a.md` exists with all 23 classifications
- [ ] `remediation/triage-2b.md` exists with all 15 classifications
- [ ] `remediation/triage-2c.md` exists with all 13 classifications
- [ ] `remediation/extraction-manifest.md` exists with all sections
- [ ] All ABSORB files have extraction data in triage outputs
- [ ] Total classified files = 51 (matches dark matter census)
- [ ] REMEDIATION-STATE.md Phase 2 outputs all checked

**What blocks if Phase 2 fails:** Phase 3 cannot construct OD-outbound-findings.md without the extracted OD-F finding data. Phase 4 cannot update infrastructure files without knowing what findings to register.

---

## PHASE 3: FORMAL CHAIN CONSTRUCTION

**Duration:** ~25 minutes
**Dependencies:** Phase 2 complete (extraction manifest available)
**Blocks:** Phase 5 (verification needs formal chain to test)
**Agent Count:** 2 sequential-then-parallel agents
**Critical Path:** Yes -- this is the longest phase

### Purpose

Create the 4 missing OD provenance documents and update the 2 stale OD provenance documents. This is the core remediation work.

### Internal Dependency Graph

```
Agent-3A: OD-outbound-findings.md
    |
    +--> HANDOFF-OD-TO-AD.md (depends on outbound findings)

Agent-3B: OD-SYNTHESIS.md (independent of Agent-3A)
    |
    +--> organizational-patterns.md (depends on synthesis)
    +--> STAGE-HEADER.md update (depends on synthesis)
    +--> CLAUDE.md update (depends on everything above)
```

**Execution strategy:** Start Agent-3A and Agent-3B in parallel. Agent-3A writes OD-outbound-findings.md first, then HANDOFF-OD-TO-AD.md. Agent-3B writes OD-SYNTHESIS.md first, then organizational-patterns.md, then updates STAGE-HEADER.md and CLAUDE.md. The only cross-agent dependency is that Agent-3B needs to read the outbound findings for the STAGE-HEADER update (it can proceed with synthesis and patterns first).

### Agent-3A: OD-outbound-findings.md + HANDOFF-OD-TO-AD.md

**Must Read:**
- `remediation/extraction-manifest.md` (Phase 2 output -- OD-F findings)
- `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` (template)
- `DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` (template)
- `checkpoints/OD-CHECKPOINT.md` (per-OD state data)
- `remediation/triage-2b.md` (OD-004/005 external research extractions)
- `remediation/triage-2c.md` (OD-006 creative research + audit extractions)

**File 1: `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md`**

This is GAP-001 (CRITICAL). Structure MUST match DD-outbound-findings.md:

1. **YAML frontmatter** with predecessor (DD-outbound-findings.md) and successor (AD-outbound-findings.md -- placeholder for Stage 4)
2. **All OD-F findings formally declared** (OD-F-001 through OD-F-008 minimum; potentially OD-F-009 through OD-F-011 if triage extracted additional findings from OD-002 through OD-005 key insights)
3. **Per-finding metadata:** ID, Finding text, Source exploration, Score basis, Target stage(s), Chain Impact narrative
4. **Meta-pattern section** for OD-F-005 "Organization IS Density" (equivalent to DD-F-006 FRACTAL elevation)
5. **Forward-looking findings** for AD, CD, Migration -- organized by target stage
6. **Anti-pattern findings** from OD (2px border epidemic, 3 quality dialects)
7. **Finding Consumption Matrix** (which AD/CD/Migration stage consumes which OD-F)
8. **Stage 2 Consumption Verification** (DD-F-001 through DD-F-018 status: which were consumed by OD, which pass through)
9. **EXT-* Finding Registry** (formal acknowledgment of the ~56 EXT-* findings with pointers to source files)
10. **Process Findings** (17-agent audit methodology, 4-fixer execution methodology -- as process findings, not design findings)
11. **Key Decisions section** (5-10 decisions with What/Why/Impact -- addressing GAP-022)
12. **Negative Space section** (paths not taken -- addressing GAP-023)

**Constraints on Agent-3A for File 1:**
- Every OD-F finding MUST have a formal lifecycle record (discovery date, source, validation evidence, status, consumers) -- addressing GAP-016
- OD-002 through OD-005 key insights MUST be evaluated for formal OD-F elevation -- addressing GAP-017
- EXT-* findings need not have full lifecycle records but MUST be registered with pointers -- addressing GAP-019
- The meta-pattern for OD-F-005 MUST include a reasoning chain (observation -> hypothesis -> evidence -> conclusion) -- addressing GAP-025
- The negative space section MUST document the 4 unmapped R-1 findings with reasons -- addressing GAP-023

**File 2: `DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md`**

This is GAP-002 (CRITICAL). Structure MUST match HANDOFF-DD-TO-OD.md (338 lines):

1. **Purpose + Acknowledgment protocol** (3-step: read findings, read quality bar, sign off)
2. **Organizational Pattern Table** with scores, descriptions, density pairings, AD usage instructions
3. **OD Outbound Findings Mandatory Consumption Table** (all OD-F findings with consumption instructions for AD)
4. **Soul Piece Transfer** (5 visual soul pieces + formal determination on OD-F-005 as potential soul piece #6 -- addressing GAP-026)
5. **Quality Bar Comparison** (OD achieved scores vs AD must match)
6. **Primary Research for AD** (R-4 as primary, 192 findings)
7. **OD Iteration Lessons** (what OD learned about the build process)
8. **AD Responsibilities Checklist** (files to create, files to update, verifications to pass)
9. **OD-to-Axis Pairing Table** (which OD patterns map to which axis explorations)
10. **Complete Constraint Inheritance** (5 soul pieces + 21 COMP-F + 18 DD-F + N OD-F = total constraint count -- addressing GAP-001/002 accumulation)
11. **Acknowledgment Checklist** for AD agents

**Constraints on Agent-3A for File 2:**
- Constraint count MUST be explicitly stated and MUST be larger than HANDOFF-DD-TO-OD -- addressing accumulation integrity
- Quality bar MUST include OD's actual average score -- addressing GAP-020/021 (use whatever breakdowns exist)
- AD research mapping MUST include ALL research streams (R-1 through R-5) with applicability notes -- addressing report 11 recommendation
- Soul piece determination MUST be formally made (yes/no for OD-F-005 as soul piece #6) -- addressing GAP-026

**Binary success criteria for Agent-3A:**
- OD-outbound-findings.md exists with all 12 sections
- HANDOFF-OD-TO-AD.md exists with all 11 sections
- Both files have YAML frontmatter with predecessor/successor links
- Every OD-F finding has a lifecycle record
- Constraint count is explicitly stated and monotonically increasing

### Agent-3B: OD-SYNTHESIS.md + organizational-patterns.md + STAGE-HEADER.md + CLAUDE.md

**Must Read:**
- `remediation/extraction-manifest.md` (Phase 2 output)
- `remediation/triage-2c.md` (cross-od-consistency extraction, 3-dialect data, fresh-eyes data)
- `remediation/triage-2b.md` (OD-GRANULAR-AUDIT-RESULTS extraction)
- `checkpoints/OD-CHECKPOINT.md` (per-OD state)
- `DESIGN-SYSTEM/patterns/density-patterns.md` (template for pattern document)
- DD's `STAGE-HEADER.md` (template for complete stage header)
- DD's `CLAUDE.md` (template for 5-section navigation)
- Agent-3A's `OD-outbound-findings.md` (read AFTER it is written -- wait if needed)

**File 1: `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-SYNTHESIS.md`**

This is GAP-003 (CRITICAL). This document does NOT exist anywhere; it must be synthesized from:
- OD-CHECKPOINT.md per-OD data
- OD-GRANULAR-AUDIT-RESULTS.md 3-dialect analysis
- cross-od-consistency.md token diff results
- 6 OD inline header summaries (from extraction manifest)

Required sections:

1. **Executive Summary** -- what OD produced, the meta-insight
2. **Per-OD Pattern Summary** -- each of the 6 OD patterns with key characteristics
3. **Cross-OD Pattern Comparison Matrix** -- shared/divergent features per pair
4. **3 Quality Dialects** -- Polished (OD-001/002), Functional (OD-003/004/005), Editorial (OD-006) with evidence
5. **Cumulative Identity Evolution** -- how the identity changed from OD-001 through OD-006
6. **OD-F-005 Meta-Insight Analysis** -- "Organization IS Density" with full reasoning chain
7. **OD-006 as Synthesis Document** -- does OD-006 actually demonstrate all 5 prior patterns?
8. **Token Consistency Proof** -- 12/12 PASS from cross-od-consistency
9. **Audit Finding Disposition** -- all 89 findings: 16 fixed, 2 false positive, 1 deferred, 70 notes/accepted -- addressing GAP-024
10. **Emergence Tracking** -- every emergent discovery with reasoning chain -- addressing GAP-025

**File 2: `DESIGN-SYSTEM/patterns/organizational-patterns.md`**

This is GAP-004 (CRITICAL). Structure MUST match density-patterns.md:

1. **Per-pattern sections** for all 6 OD organizational patterns:
   - Pattern name
   - Provenance (research finding IDs + OD exploration)
   - Validation evidence (score + audit result)
   - Usage guide (when to use this pattern)
   - Density pairing (which density pattern pairs with this org pattern)
   - Constraints (what must be true for this pattern to work)
   - CSS implementation notes (key structural decisions)
2. **Pattern Selection Flowchart** -- when to use which organizational pattern
3. **Pattern-Density Pairing Matrix** -- validated pairings from OD explorations

**File 3: `DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md` (UPDATE)**

This is GAP-006 (HIGH). The existing file must be REWRITTEN from planning document to completion record:

1. **Title:** Change from "IN PROGRESS" to "COMPLETE"
2. **The Story:** Rewrite from future tense to past tense narrative
3. **What This Stage Consumed:** Actual consumed inputs (not "will consume")
4. **What This Stage Produced:** Actual produced outputs with scores
5. **Quality Achieved Table:** Actual OD scores (matching DD's 7-metric format)
6. **Key Decisions:** 5-10 major decisions (from Agent-3A's outbound findings, or from extraction manifest if Agent-3A's file is not yet available)
7. **Files Table:** Updated to show COMPLETE status for all files
8. **Inline threading header:** Updated from "OD work has not begun" to "OD COMPLETE"
9. **Links to Dark Matter:** Formal REFERENCE links to key dark matter files (ACCUMULATED-IDENTITY, OD-GRANULAR-AUDIT-RESULTS, external research files) -- addressing GAP-005, GAP-031, GAP-032

**File 4: `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md` (UPDATE)**

This is GAP-007 (HIGH). The existing file must be REWRITTEN from placeholder to complete navigation:

1. **5-section standard** matching DD's CLAUDE.md format
2. **Identity:** What the OD stage is and what it achieved
3. **How To Read:** Reading order for all files in the directory
4. **What's Here:** Table with all files showing COMPLETE status
5. **How This Connects:** Predecessor (DD stage) and successor (AD stage) with links
6. **Mindset:** What an agent entering this directory should understand

**Constraints on Agent-3B:**
- OD-SYNTHESIS must cite specific evidence for every claim (file:line or finding ID)
- organizational-patterns.md must have the same structural rigor as density-patterns.md
- STAGE-HEADER must use past tense throughout (binary check: zero instances of "will" except in Key Decisions "impact" descriptions)
- CLAUDE.md must accurately reflect which files exist

**Binary success criteria for Agent-3B:**
- OD-SYNTHESIS.md exists with all 10 sections
- organizational-patterns.md exists with all 6 patterns + flowchart + matrix
- STAGE-HEADER.md has been rewritten (check: title says "COMPLETE", zero "IN PROGRESS" strings)
- CLAUDE.md has been rewritten (check: 5-section structure, zero "PENDING" entries for files that exist)

### Phase 3 Completion Gate

**Lead verifies (binary checks):**
- [ ] OD-outbound-findings.md exists with all 12 sections
- [ ] HANDOFF-OD-TO-AD.md exists with all 11 sections
- [ ] OD-SYNTHESIS.md exists with all 10 sections
- [ ] organizational-patterns.md exists with all 6 patterns
- [ ] STAGE-HEADER.md says "COMPLETE" (not "IN PROGRESS")
- [ ] CLAUDE.md has zero "PENDING" entries for existing files
- [ ] OD-outbound-findings.md YAML successor points to AD-outbound-findings.md
- [ ] DD-outbound-findings.md YAML successor now points to existing OD-outbound-findings.md (GAP-013 resolved)
- [ ] REMEDIATION-STATE.md Phase 3 outputs all checked

**What blocks if Phase 3 fails:** Phase 5 verification cannot test traversal chains that include OD provenance. The provenance chain would remain fundamentally broken.

---

## PHASE 4: PRIOR STAGE CORRECTIONS

**Duration:** ~15 minutes
**Dependencies:** Phase 2 complete (extraction manifest available for finding data)
**Blocks:** Phase 5 (verification needs all corrections in place)
**Agent Count:** 2 parallel agents
**Critical Path:** No (runs in parallel with Phase 3, but Phase 5 waits for both)

### Purpose

Fix the hidden gaps in "complete" stages 1 and 2, update pipeline infrastructure files (PIPELINE-MANIFEST, BACKBONE, PATTERN-INDEX, SOUL-DISCOVERIES, anti-pattern registry), and resolve finding ID collisions.

### Agent-4A: Stage 1 + DD Provenance Fixes

**Must Read:**
- `remediation/extraction-manifest.md`
- `remediation/triage-2a.md` (for RETROACTIVE-AUDIT reference link, RESEARCH-ACTIVE backfill data)
- Report 12 (prior-stage-chain-audit.md) for specific fix list

**Files to Modify:**

| File | Fix | GAP Addressed |
|------|-----|---------------|
| `provenance/stage-1-components/STAGE-HEADER.md` | Add note acknowledging "KortAI Reference = Mental model" as uncitable input | Report 12, 7A.1 |
| `provenance/stage-2-density-dd/STAGE-HEADER.md` | Add reference link to `checkpoints/RETROACTIVE-AUDIT-DD-001-006.md` and `checkpoints/VISUAL-AUDIT-DD-001-006.md` | Report 12, 7B.2-3 |
| `provenance/RESEARCH-ACTIVE.md` | Backfill DD application data: update from 10 APPLIED to actual ~48 APPLIED with evidence from RETROACTIVE-AUDIT. Update OD application data. | Report 12, GAP-018, 5C |
| `checkpoints/RESEARCH-ACTIVE.md` | Sync with provenance copy after backfill | Report 12, 5C |

**What Agent-4A Produces:**
- Modified versions of the 4 files listed above
- `remediation/prior-stage-fixes.md` -- brief report of what was changed and why

**Constraints:**
- Stage 1 STAGE-HEADER: Add a NOTE, not a rewrite. Append a "Known Limitations" section.
- Stage 2 STAGE-HEADER: Add a "Supporting Evidence" section with REFERENCE links, not embed full audit data
- RESEARCH-ACTIVE.md: Be conservative in backfill. Mark entries as "Backfilled from RETROACTIVE-AUDIT" so the provenance of the backfill itself is clear.

**Binary success criteria:**
- Stage 1 STAGE-HEADER contains "KortAI Reference" acknowledgment
- Stage 2 STAGE-HEADER contains links to RETROACTIVE-AUDIT and VISUAL-AUDIT
- RESEARCH-ACTIVE.md shows > 10 APPLIED entries (was 10 before backfill)
- Both copies of RESEARCH-ACTIVE.md are consistent
- `remediation/prior-stage-fixes.md` exists

### Agent-4B: Infrastructure Updates

**Must Read:**
- `remediation/extraction-manifest.md`
- Agent-3A's `OD-outbound-findings.md` (wait for it if not yet written)
- `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md` (to update)
- `DESIGN-SYSTEM/BACKBONE.md` (to update)
- `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md` (to update)
- `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md` (to update)
- `DESIGN-SYSTEM/anti-patterns/registry.md` (to update)

**Files to Modify:**

| File | Fix | GAP Addressed |
|------|-----|---------------|
| `PIPELINE-MANIFEST.md` Section B | Add OD-F-001 through OD-F-008+ formal entries | GAP-009 |
| `PIPELINE-MANIFEST.md` Section C | Resolve soul piece determination for OD (either add #6 or note "no new pieces") | GAP-009, GAP-026 |
| `PIPELINE-MANIFEST.md` Section D | Add Organizational Patterns provenance table | GAP-009 |
| `PIPELINE-MANIFEST.md` Section E | Add OD example traces | GAP-009 |
| `PIPELINE-MANIFEST.md` Section F | Update finding lifecycle state counts | GAP-009 |
| `PIPELINE-MANIFEST.md` DD-F consumption | Update DD-F-001 through DD-F-018 from PENDING to APPLIED/CONSUMED with evidence | GAP-015 |
| `BACKBONE.md` Section 4 | Rewrite OD from "IN PROGRESS" to "COMPLETE" with past-tense narrative | GAP-010 |
| `BACKBONE.md` Section 8 | Update Generated Research Flow from "OD-F-### TBD" to actual entries | GAP-010 |
| `BACKBONE.md` Section 9 | Add OD-001 through OD-006 soul compliance rows (0 violations per 3,479 elements) | GAP-028 |
| `BACKBONE.md` Section 10 | Update causal chain from "in progress" to actual state | GAP-010 |
| `PATTERN-INDEX.md` | Update all 6 OD patterns from "Pending" to "VALIDATED" with scores and density pairings | GAP-011 |
| `SOUL-DISCOVERIES.md` | Add OD determination: either new soul piece #6 or formal "no new pieces" note | GAP-026 |
| `anti-patterns/registry.md` | Add "2px Border Epidemic" anti-pattern (108 CSS declarations, empirically validated in OD audit) | GAP-027 |

**Constraints:**
- Agent-4B MUST wait for Agent-3A's OD-outbound-findings.md to exist before updating PIPELINE-MANIFEST and BACKBONE, because the formal finding IDs and lifecycle data come from that file.
- The SOUL-DISCOVERIES determination MUST be consistent with whatever Agent-3A wrote in HANDOFF-OD-TO-AD.md's soul piece section.
- BACKBONE Section 4 must use the same past-tense narrative style as Section 3 (DD).
- PATTERN-INDEX updates must use data from Agent-3B's organizational-patterns.md (wait if needed).

**What Agent-4B Produces:**
- Modified versions of the 5+ files listed above
- `remediation/infrastructure-updates.md` -- brief report of what was changed and why

**Binary success criteria:**
- PIPELINE-MANIFEST Section B has OD-F entries (not "TBD")
- PIPELINE-MANIFEST DD-F entries show APPLIED (not "PENDING")
- BACKBONE Section 4 says "COMPLETE" (not "IN PROGRESS")
- BACKBONE Section 9 has OD-001 through OD-006 rows
- PATTERN-INDEX has zero "Pending" entries for OD patterns
- SOUL-DISCOVERIES has an OD determination entry
- Anti-pattern registry has a "2px Border Epidemic" entry
- `remediation/infrastructure-updates.md` exists

### Phase 4 Completion Gate

**Lead verifies (binary checks):**
- [ ] All Agent-4A files modified with changes documented
- [ ] All Agent-4B files modified with changes documented
- [ ] PIPELINE-MANIFEST has zero "TBD" or "PENDING" entries for OD
- [ ] BACKBONE has zero "IN PROGRESS" references to OD
- [ ] PATTERN-INDEX has zero "Pending" OD entries
- [ ] SOUL-DISCOVERIES has OD determination
- [ ] Anti-pattern registry has OD entries
- [ ] RESEARCH-ACTIVE.md copies are consistent
- [ ] REMEDIATION-STATE.md Phase 4 outputs all checked

**What blocks if Phase 4 fails:** Phase 5 verification will find stale infrastructure files. The formal chain would have correct OD provenance documents but inconsistent pipeline infrastructure pointing to old state.

---

## PHASE 5: VERIFICATION

**Duration:** ~15 minutes
**Dependencies:** Phase 3 AND Phase 4 both complete
**Blocks:** Phase 6 (cannot commit unverified state)
**Agent Count:** 1 agent (strictly sequential)
**Critical Path:** Yes

### Purpose

Re-run all diagnostic tests from Phase 1 against the remediated state. Prove the chain is structurally sound. Identify any remaining gaps.

### Agent-5A: Full Verification

**Must Read:**
- `remediation/traversal-results.md` (Phase 1 baseline)
- `remediation/finding-registry.md` (Phase 1 baseline)
- `remediation/reference-graph.md` (Phase 1 baseline)
- All files created in Phase 3 (OD-outbound-findings, HANDOFF, SYNTHESIS, patterns)
- All files modified in Phase 4 (PIPELINE-MANIFEST, BACKBONE, etc.)
- `remediation/extraction-manifest.md` (for dark matter status)

**What It Produces:**
- `remediation/verification-report.md`

**Verification Tests:**

```markdown
# Verification Report: Post-Remediation

## Test 1: Forward Traversal (Re-run)
[Same tests as Phase 1 traversal-results.md Test 1, now against remediated state]
Expected: ALL PASS (OD-outbound-findings.md now exists, HANDOFF now exists)

## Test 2: Backward Traversal (Re-run)
[Same tests as Phase 1 Test 2]
Expected: ALL PASS (OD-SYNTHESIS provides cross-references)

## Test 3: Cross-Traversal (Re-run)
[Same tests as Phase 1 Test 3]
Expected: ALL PASS (OD-SYNTHESIS answers cross-OD questions)

## Test 4: Finding Lifecycle (Re-run)
[Same tests as Phase 1 Test 4]
Expected: ALL PASS (OD-F findings now have formal lifecycle records)

## Test 5: Accumulation (Re-run)
[Same tests as Phase 1 Test 5]
Expected: PASS (HANDOFF-OD-TO-AD explicitly states total constraint count)

## Test 6: Dark Matter Coverage (Re-run)
[Same tests as Phase 1 Test 6]
Expected: Coverage significantly improved (ABSORB + REFERENCE classifications)

## Test 7: NEW -- Broken Edge Resolution
| Pre-Remediation Broken Edge | Fixed? | Evidence |
|---------------------------|--------|----------|
| DD-outbound successor -> missing OD-outbound | YES/NO | |
| OD STAGE-HEADER "OD work has not begun" | YES/NO | |
| PIPELINE-MANIFEST "TBD" entries | YES/NO | |

## Test 8: NEW -- Gap Closure Verification
For each of the 33 gaps from report 07:
| GAP # | Severity | Status Post-Remediation | Evidence | Remaining Work |
|-------|----------|------------------------|----------|---------------|
| GAP-001 | CRITICAL | CLOSED/PARTIAL/OPEN | | |
| GAP-002 | CRITICAL | CLOSED/PARTIAL/OPEN | | |
...

## Test 9: NEW -- File Consistency
| File Pair | Consistent? | Discrepancy |
|-----------|-------------|-------------|
| RESEARCH-ACTIVE.md (checkpoints) vs (provenance) | YES/NO | |
| SOUL-DISCOVERIES.md (checkpoints) vs (provenance) | YES/NO | |

## Test 10: NEW -- Ratio Check
| Metric | Pre-Remediation | Post-Remediation |
|--------|----------------|-----------------|
| Formal chain files | 33 | |
| Formal chain lines | ~10,600 | |
| Dark matter files | 51 | |
| Dark matter lines | ~32,800 | |
| Formal:Dark ratio | 1:3.1 | |
| Provenance dir sufficiency | ~5% | |
| Finding IDs in formal chain | [count] | |
| Finding IDs ONLY in dark matter | ~89 | |

## VERIFICATION SUMMARY
| Test | Pre-Remediation | Post-Remediation | Delta |
|------|----------------|-----------------|-------|
| Forward Traversal | FAIL | | |
| Backward Traversal | PARTIAL | | |
| Cross Traversal | FAIL | | |
| Finding Lifecycle | FAIL | | |
| Accumulation | FAIL | | |
| Dark Matter Coverage | FAIL | | |
| Broken Edges | [count] | | |
| Gap Closure (CRITICAL) | 0/5 | | |
| Gap Closure (HIGH) | 0/9 | | |
| Gap Closure (MEDIUM) | 0/14 | | |
| Gap Closure (LOW) | 0/3 | | |

## REMAINING GAPS (if any)
[Document any gaps that could not be closed and why]
```

**Constraints:**
- Agent-5A MUST NOT modify any files. It is read-only. Any issues found go in the report for the lead to decide.
- Every gap from report 07 must appear in the Test 8 table with a status.
- The ratio check (Test 10) must show improvement.

**Binary success criteria:**
- verification-report.md exists with all 10 tests
- All CRITICAL gaps (GAP-001 through GAP-004, GAP-031) show CLOSED status
- Forward traversal passes (the minimum bar for AD readiness)
- Zero broken edges remain for critical chain documents

### Phase 5 Failure Handling

If verification reveals failures:

1. **Minor failures (individual fields missing, formatting issues):** Lead fixes directly in Phase 6 before commit.
2. **Moderate failures (a section is incomplete, a file reference is wrong):** Lead tasks the original agent (3A, 3B, 4A, or 4B) with a specific fix via SendMessage.
3. **Major failures (a file was not created, a fundamental misunderstanding):** Lead creates a targeted fix agent. Repeat Phase 5 after fix.
4. **Structural failures (the architecture was wrong):** Document in verification report. Proceed to Phase 6 with partial success. Plan a remediation-v2.

### Phase 5 Completion Gate

**Lead verifies (binary checks):**
- [ ] verification-report.md exists with all 10 test sections
- [ ] All 5 CRITICAL gaps show CLOSED or have documented reasons for PARTIAL
- [ ] Forward traversal test passes
- [ ] No CRITICAL broken edges remain
- [ ] REMEDIATION-STATE.md Phase 5 outputs all checked

**What blocks if Phase 5 fails:** Phase 6 cannot commit. The lead must address failures before proceeding.

---

## PHASE 6: CLEANUP AND COMMIT

**Owner:** Lead only (no agents)
**Duration:** ~10 minutes
**Dependencies:** Phase 5 complete with acceptable results
**Blocks:** Nothing (final phase)

### 6.1 Archive Triaged Files

Based on Phase 2 triage results, move ARCHIVE-classified files to a designated archive location. Options:

- **Option A:** Create `_provenance-gap-analysis/archive/` and move files there
- **Option B:** Add ARCHIVED header to files in place (less disruptive)
- **Option C:** Do not move; just document in extraction manifest (lowest risk)

**Recommendation:** Option C for this remediation. Moving files is risky and the classification is sufficient documentation. A future cleanup pass can do physical moves.

### 6.2 Update Navigation Files

Update any CLAUDE.md files that reference the OD stage with accurate status:

| File | Update |
|------|--------|
| `showcase/CLAUDE.md` | No change needed (does not reference OD stage status) |
| `knowledge-architecture/CLAUDE.md` | Add reference to `_provenance-gap-analysis/` work |
| `DESIGN-SYSTEM/CLAUDE.md` | Verify OD stage is shown as COMPLETE |
| `DESIGN-SYSTEM/provenance/CLAUDE.md` | Verify stage-3 is shown as COMPLETE |

### 6.3 Update MEMORY.md

Add a new phase entry:

```markdown
## Previous Phase: Provenance Chain Remediation -- COMPLETE

**Multi-phase remediation: [N] agents, 6 phases, ~[M] min wall time.**
- Architecture: `_provenance-gap-analysis/15-phase-architecture.md`
- State: `_provenance-gap-analysis/REMEDIATION-STATE.md`
- Verification: `_provenance-gap-analysis/remediation/verification-report.md`
- 33 gaps addressed: [X] CLOSED, [Y] PARTIAL, [Z] DEFERRED
- 51 dark matter files triaged: [a] ABSORB, [b] REFERENCE, [c] CONSOLIDATE, [d] ARCHIVE, [e] KEEP-AS-IS
- Created: OD-outbound-findings.md, HANDOFF-OD-TO-AD.md, OD-SYNTHESIS.md, organizational-patterns.md
- Updated: STAGE-HEADER.md, CLAUDE.md, PIPELINE-MANIFEST.md, BACKBONE.md, PATTERN-INDEX.md, SOUL-DISCOVERIES.md, anti-pattern registry, RESEARCH-ACTIVE.md

### Agent Team Lessons (Remediation Team)
- [Lessons learned during execution]
```

### 6.4 Git Commit

Stage specific files by name. NEVER use `git add .` or `git add -A`.

**Files to stage (created):**
```
docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md
docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md
docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-SYNTHESIS.md
docs-spa/app/showcase/DESIGN-SYSTEM/patterns/organizational-patterns.md
docs-spa/app/showcase/knowledge-architecture/_provenance-gap-analysis/REMEDIATION-STATE.md
docs-spa/app/showcase/knowledge-architecture/_provenance-gap-analysis/remediation/*.md
```

**Files to stage (modified):**
```
docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md
docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md
docs-spa/app/showcase/DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
docs-spa/app/showcase/DESIGN-SYSTEM/provenance/RESEARCH-ACTIVE.md
docs-spa/app/showcase/DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md
docs-spa/app/showcase/DESIGN-SYSTEM/BACKBONE.md
docs-spa/app/showcase/DESIGN-SYSTEM/patterns/PATTERN-INDEX.md
docs-spa/app/showcase/DESIGN-SYSTEM/anti-patterns/registry.md
docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-1-components/STAGE-HEADER.md
docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-2-density-dd/STAGE-HEADER.md
docs-spa/app/showcase/checkpoints/RESEARCH-ACTIVE.md
```

**Commit message:**
```
feat(provenance): Complete OD provenance chain remediation -- 33 gaps addressed

Create 4 missing OD provenance documents (OD-outbound-findings, HANDOFF-OD-TO-AD,
OD-SYNTHESIS, organizational-patterns). Update 11 infrastructure files. Triage 51
dark matter files. Backfill RESEARCH-ACTIVE.md. Resolve all 5 CRITICAL gaps.
```

### 6.5 Final State Report

The lead produces a brief summary for the human:

```markdown
# Remediation Complete

## Created
- OD-outbound-findings.md ([N] OD-F findings formalized)
- HANDOFF-OD-TO-AD.md ([N] lines, AD stage can now begin)
- OD-SYNTHESIS.md (cross-OD analysis, 3 dialects, meta-insights)
- organizational-patterns.md (6 validated patterns)

## Updated
- STAGE-HEADER.md (IN PROGRESS -> COMPLETE)
- CLAUDE.md (placeholder -> full navigation)
- PIPELINE-MANIFEST.md (4 stale sections updated)
- BACKBONE.md (Section 4 completed, Sections 8-10 updated)
- PATTERN-INDEX.md (6 OD patterns validated)
- SOUL-DISCOVERIES.md (OD determination added)
- Anti-pattern registry (2px border epidemic added)
- RESEARCH-ACTIVE.md (backfilled DD + OD data)
- Stage 1 STAGE-HEADER (KortAI reference acknowledged)
- Stage 2 STAGE-HEADER (audit evidence linked)

## Verification
- Forward traversal: PASS
- All 5 CRITICAL gaps: CLOSED
- Remaining gaps: [list any PARTIAL/DEFERRED]

## AD Readiness
- HANDOFF-OD-TO-AD.md exists and is complete
- All OD-F findings formally declared
- Constraint count: [N] (monotonically increasing from DD's [M])
- AD can begin work from provenance alone
```

---

## CRITICAL PATH ANALYSIS

The critical path through the architecture is:

```
Phase 0 (5 min) -> Phase 1 (15 min) -> Phase 2 (20 min) -> Phase 3 (25 min) -> Phase 5 (15 min) -> Phase 6 (10 min)
Total critical path: ~90 minutes
```

Phase 4 runs in parallel with Phase 3, so it does NOT add to the critical path (15 min < 25 min).

### Bottleneck Analysis

| Phase | Duration | Bottleneck | Mitigation |
|-------|----------|-----------|------------|
| Phase 1 | 15 min | Agent-1C waits for 1A and 1B | Spawn 1C 5 min after 1A/1B |
| Phase 2 | 20 min | Large files in Agent-2B (OD-005 EXTERNAL at 1,725 lines) | None needed; 20 min is acceptable |
| Phase 3 | 25 min | Agent-3A writes two large documents sequentially | Agent-3B starts immediately; 3A's 2nd doc can parallelize with 3B |
| Phase 4 | 15 min | Agent-4B waits for Agent-3A's outbound findings | Start 4B after 3A completes File 1 (~15 min in) |
| Phase 5 | 15 min | Single agent, sequential | Cannot parallelize (must see complete state) |

### Parallelization Opportunities

| Opportunity | Phases | Savings |
|------------|--------|---------|
| Phase 3 and Phase 4 run concurrently | 3 + 4 | ~15 min |
| Agent-1A and Agent-1B run concurrently | Within Phase 1 | ~10 min |
| Agent-2A, 2B, 2C run concurrently | Within Phase 2 | ~15 min |
| Agent-3A and Agent-3B start concurrently | Within Phase 3 | ~10 min |
| Agent-4A and Agent-4B run concurrently | Within Phase 4 | ~10 min |

Without parallelization: ~130 min
With parallelization: ~90 min
**Savings: ~40 min (31%)**

---

## RISK REGISTRY

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Agent-3A produces OD-outbound-findings.md that is structurally inconsistent with DD-outbound-findings.md | MEDIUM | HIGH | Agent-3A must read DD-outbound-findings.md as template. Phase 5 verification catches structural issues. |
| Agent-3B cannot wait long enough for Agent-3A (timeout) | LOW | MEDIUM | Agent-3B writes SYNTHESIS and patterns first (no 3A dependency). Only STAGE-HEADER needs 3A data; that is last. |
| Dark matter triage agents classify inconsistently | MEDIUM | LOW | Each agent has explicit expected classifications in this document. Lead reviews manifest for consistency. |
| RESEARCH-ACTIVE.md backfill introduces errors | MEDIUM | MEDIUM | Agent-4A marks all backfilled entries with provenance ("Backfilled from RETROACTIVE-AUDIT"). Phase 5 checks consistency. |
| Agent produces content the lead cannot verify quickly | LOW | MEDIUM | Phase 5 verification agent checks structural completeness. Lead spot-checks content quality. |
| OD-F-005 soul piece determination is controversial | HIGH | LOW | This is a documentation decision, not a design decision. Whatever determination is made (yes or no), it must be FORMALLY MADE. |
| Playwright contention | ZERO | N/A | No Playwright needed in any phase. This is a documentation remediation. |
| Context exhaustion for long-document agents | MEDIUM | HIGH | Agent-3A has the highest risk (2 large docs). If context runs out, the HANDOFF can be a separate follow-up task. |

### Risk-Specific Protocols

**If Agent-3A runs out of context before completing HANDOFF-OD-TO-AD.md:**
1. Lead verifies OD-outbound-findings.md is complete
2. Lead spawns a new Agent-3A-recovery with instructions: "Read OD-outbound-findings.md + HANDOFF-DD-TO-OD.md. Write HANDOFF-OD-TO-AD.md."
3. Phase 5 proceeds as normal

**If Phase 5 reveals structural failures:**
1. Lead identifies the specific failure
2. Lead spawns a targeted fix agent (not a full re-run of the failing phase)
3. Fix agent reads the verification report and the specific file needing correction
4. Lead re-runs Phase 5 Agent-5A after fix

---

## COST ESTIMATE

### Agent Count by Phase

| Phase | Agents | Agent Type | Context Load |
|-------|--------|-----------|-------------|
| Phase 0 | 0 | Lead only | LOW |
| Phase 1 | 3 | Scanner, Graph Builder, Traversal Tester | MEDIUM (reading 139+ files) |
| Phase 2 | 3 | Triagers | HIGH (reading + classifying + extracting) |
| Phase 3 | 2 | Document Writers | HIGH (creating 4 large documents) |
| Phase 4 | 2 | File Updaters | MEDIUM (modifying existing files) |
| Phase 5 | 1 | Verifier | MEDIUM (reading and testing) |
| Phase 6 | 0 | Lead only | LOW |
| **Total** | **11** | | |

### Estimated Wall Time

| Phase | Duration | Parallel? | Cumulative |
|-------|----------|-----------|------------|
| Phase 0 | 5 min | No | 5 min |
| Phase 1 | 15 min | Yes (3 agents) | 20 min |
| Phase 2 | 20 min | Yes (3 agents) | 40 min |
| Phase 3 + 4 | 25 min | Yes (3+4 parallel) | 65 min |
| Phase 5 | 15 min | No | 80 min |
| Phase 6 | 10 min | No | 90 min |
| **Total** | | | **~90 min** |

### Expected Output Volume

| Output | Estimated Lines | Files |
|--------|----------------|-------|
| Phase 1 diagnostics | ~2,000 | 3 |
| Phase 2 triage + manifest | ~3,000 | 4 |
| Phase 3 new documents | ~4,000 | 4 new + 2 rewritten |
| Phase 4 infrastructure updates | ~1,000 (net additions) | 7-9 modified |
| Phase 5 verification | ~500 | 1 |
| Phase 6 state + memory | ~200 | 2 |
| **Total** | **~10,700** | **~25 files touched** |

---

## APPENDIX A: GAP-TO-PHASE MAPPING

Every gap from report 07 mapped to the phase and agent that addresses it:

| GAP # | Severity | Phase | Agent | How Addressed |
|-------|----------|-------|-------|---------------|
| GAP-001 | CRITICAL | Phase 3 | Agent-3A | Create OD-outbound-findings.md |
| GAP-002 | CRITICAL | Phase 3 | Agent-3A | Create HANDOFF-OD-TO-AD.md |
| GAP-003 | CRITICAL | Phase 3 | Agent-3B | Create OD-SYNTHESIS.md |
| GAP-004 | CRITICAL | Phase 3 | Agent-3B | Create organizational-patterns.md |
| GAP-005 | HIGH | Phase 3 | Agent-3B | STAGE-HEADER links to audit evidence |
| GAP-006 | HIGH | Phase 3 | Agent-3B | Rewrite STAGE-HEADER.md |
| GAP-007 | HIGH | Phase 3 | Agent-3B | Rewrite CLAUDE.md |
| GAP-008 | HIGH | Phase 3 | Agent-3A | OD-outbound-findings includes post-build R-1 verification |
| GAP-009 | HIGH | Phase 4 | Agent-4B | Update PIPELINE-MANIFEST 4 sections |
| GAP-010 | HIGH | Phase 4 | Agent-4B | Update BACKBONE Section 4 + 8-10 |
| GAP-011 | HIGH | Phase 4 | Agent-4B | Update PATTERN-INDEX |
| GAP-012 | N/A | -- | -- | Already up to date |
| GAP-013 | MEDIUM | Phase 5 | Verification | Confirm DD-outbound successor points to existing file |
| GAP-014 | MEDIUM | Phase 3 | Agent-3B | STAGE-HEADER inline header updated |
| GAP-015 | MEDIUM | Phase 4 | Agent-4B | PIPELINE-MANIFEST DD-F consumption updated |
| GAP-016 | HIGH | Phase 3 | Agent-3A | OD-F findings get formal lifecycle records |
| GAP-017 | MEDIUM | Phase 3 | Agent-3A | OD-002-005 insights evaluated for elevation |
| GAP-018 | MEDIUM | Phase 4 | Agent-4A | RESEARCH-ACTIVE.md backfill |
| GAP-019 | MEDIUM | Phase 3 | Agent-3A | EXT-* findings registered in outbound findings |
| GAP-020 | MEDIUM | Phase 3 | Agent-3A | Scoring rubric documented in outbound findings |
| GAP-021 | MEDIUM | Phase 3 | Agent-3A | Score breakdowns included where available |
| GAP-022 | HIGH | Phase 3 | Agent-3A | Key Decisions section in outbound findings |
| GAP-023 | MEDIUM | Phase 3 | Agent-3A | Negative Space section in outbound findings |
| GAP-024 | MEDIUM | Phase 3 | Agent-3B | Audit finding disposition in OD-SYNTHESIS |
| GAP-025 | MEDIUM | Phase 3 | Agent-3B | Emergence reasoning chains in OD-SYNTHESIS |
| GAP-026 | HIGH | Phase 3+4 | Agent-3A + 4B | Soul determination in HANDOFF + SOUL-DISCOVERIES |
| GAP-027 | MEDIUM | Phase 4 | Agent-4B | Anti-pattern registry updated |
| GAP-028 | MEDIUM | Phase 4 | Agent-4B | BACKBONE soul compliance matrix extended |
| GAP-029 | LOW | Phase 3 | Agent-3A | Process finding in outbound findings |
| GAP-030 | LOW | Phase 3 | Agent-3A | Process finding in outbound findings |
| GAP-031 | CRITICAL | Phase 3 | Agent-3B | STAGE-HEADER + CLAUDE.md + SYNTHESIS make provenance dir sufficient |
| GAP-032 | MEDIUM | Phase 3 | Agent-3B | OD-SYNTHESIS references creative research feed |
| GAP-033 | LOW | Phase 3 | Agent-3A | Process innovations as formal process findings |

**Coverage:** 32 of 33 gaps addressed (GAP-012 is already up to date).

---

## APPENDIX B: AGENT PROMPT TEMPLATES

### Template: Phase 1 Agent Prompt (Finding Registry Scanner)

```
You are a Finding Registry Scanner agent. Your ONLY job is to produce
remediation/finding-registry.md.

READ FIRST (binary rule -- you MUST read these before producing output):
1. _provenance-gap-analysis/10-dark-matter-census.md (file inventory)
2. All formal provenance files listed in Category A of that census
3. All dark matter files listed in Category B of that census
4. All 12 HTML exploration inline headers (first 200 lines of each)

For every file, extract ALL finding IDs matching these patterns:
- R1-NNN through R5-NNN
- COMP-F-NNN
- DD-F-NNN
- OD-F-NNN
- EXT-*-NNN
- F-E-NNN
- CA-NNN
- DEC-NNN

PRODUCE: remediation/finding-registry.md with all 6 required sections.
WRITE the file. Do NOT just describe what you would write.
BINARY CHECK: File must exist with data in all 6 sections.
```

### Template: Phase 2 Agent Prompt (Triager)

```
You are a Dark Matter Triager agent. Your ONLY job is to classify
your assigned files and extract data from ABSORB files.

READ FIRST (binary rule):
1. remediation/finding-registry.md
2. remediation/reference-graph.md
3. Your assigned files (listed below)

For each file, classify as ABSORB/REFERENCE/CONSOLIDATE/ARCHIVE/KEEP-AS-IS.
For each ABSORB file, extract all finding IDs and unique data.

PRODUCE: remediation/triage-2[x].md with classification table + extraction sections.
WRITE the file. Do NOT just describe what you would write.
BINARY CHECK: Every assigned file has a classification. Every ABSORB file has extraction data.
```

### Template: Phase 3 Agent Prompt (Document Writer)

```
You are a Formal Chain Construction agent. Your ONLY job is to create
the assigned provenance documents.

READ FIRST (binary rule):
1. remediation/extraction-manifest.md
2. Template file(s) from DD stage (specified per assignment)
3. Source data files (specified per assignment)

PRODUCE: The specified document(s) with ALL required sections.
WRITE each file to its final location. Do NOT write to a staging area.
BINARY CHECK: Each file exists, has all required sections, and
passes its specific structural tests.
```

---

## APPENDIX C: WHAT CANNOT BE AUTOMATED

Some gap closures require human judgment. These are flagged for human review during or after Phase 6:

| Decision | Why It Needs Human | Phase Where It Arises |
|----------|-------------------|----------------------|
| Is OD-F-005 Soul Piece #6? | This is a design philosophy decision | Phase 3 (Agent-3A makes a recommendation) |
| Should OD-002-005 insights become formal OD-F findings? | Determines finding count and scope | Phase 3 (Agent-3A makes a recommendation) |
| Score breakdowns for OD-002 through OD-006 | Original builder context is lost; best-effort only | Phase 3 (Agent-3A uses available data) |
| Whether to physically move ARCHIVE files | Risk vs cleanup tradeoff | Phase 6 (Recommendation: defer) |
| Whether to generate ACCUMULATED-IDENTITY-v2 | Useful for AD but not strictly a gap closure | Post-remediation decision |

These decisions are flagged in the extraction manifest and in the verification report. The agents will make best-effort recommendations, but the human has final authority.

---

*End of Multi-Phase Execution Architecture*
