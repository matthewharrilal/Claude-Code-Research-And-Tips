# DD vs OD Provenance Comparison
## Comprehensive Gap Analysis

**Date:** 2026-02-08
**Analyst:** Research Agent (provenance gap analysis)
**Scope:** All files in `provenance/stage-2-density-dd/` vs `provenance/stage-3-organization-od/`
**Additional context:** OD operational files in `checkpoints/`, `knowledge-architecture/`, and `_od-audit-scratchpad/`

---

## 1. ARTIFACT INVENTORY

### 1A. Two-Column Comparison Table

| Artifact Type | DD (`provenance/stage-2-density-dd/`) | OD (`provenance/stage-3-organization-od/`) |
|---------------|---------------------------------------|---------------------------------------------|
| **STAGE-HEADER.md** | EXISTS (244 lines, COMPLETE) | EXISTS (178 lines, IN PROGRESS -- labeled as planning document) |
| **CLAUDE.md** | EXISTS (128 lines, COMPLETE, 5-section standard) | EXISTS (114 lines, PLACEHOLDER -- labeled as placeholder in its own threading header) |
| **Outbound Findings** | EXISTS as `DD-outbound-findings.md` (220 lines) | MISSING -- `OD-outbound-findings.md` does not exist |
| **Handoff to Next Stage** | EXISTS as `HANDOFF-DD-TO-OD.md` (338 lines) | MISSING -- `HANDOFF-OD-TO-AD.md` does not exist |
| **Research Gate** | N/A (DD had no formal gate file; R-3 tracking was inline) | EXISTS as `OD-RESEARCH-GATE.md` (145 lines, PASSED status) |
| **Re-Audit Perceptual Synthesis** | EXISTS as `DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md` (646 lines) | MISSING -- no equivalent. Audit data exists in `_od-audit-scratchpad/` (29 files, 9,275 lines) and `OD-GRANULAR-AUDIT-RESULTS.md` (620 lines) but NOT in provenance directory |
| **Re-Audit Checkpoint** | EXISTS as `DD-REAUDIT-CHECKPOINT.md` (220 lines) | MISSING -- no equivalent. Closest is `checkpoints/OD-CHECKPOINT.md` (163 lines) but NOT in provenance directory |
| **Synthesis** | N/A (DD synthesis was embedded in Stage Header and Outbound Findings) | MISSING -- `OD-SYNTHESIS.md` does not exist (listed as PENDING in STAGE-HEADER) |

### 1B. Summary Counts

| Metric | DD | OD |
|--------|----|----|
| Files in provenance directory | 6 | 3 |
| Total lines in provenance directory | 1,796 | 437 |
| Files marked COMPLETE | 6/6 | 0/3 (all partial/placeholder/in-progress) |
| Files required by HANDOFF-DD-TO-OD checklist | N/A | 6 expected, 3 exist |
| Percentage of expected provenance artifacts | 100% | ~38% (3 of ~8 expected) |

---

## 2. CONTENT DEPTH ANALYSIS

### 2A. DD Artifacts -- Content Depth

#### DD-outbound-findings.md (220 lines)
- **YAML frontmatter:** Pipeline stage, predecessor/successor chain, backbone/manifest refs
- **Inline Threading Header:** Tier A, Batch 6, 10 diagnostic sections, 12+ inbound references noted
- **Sections:**
  - Density Pattern Findings table (DD-F-001 through DD-F-005, with Source, Score, OD pairing, Chain Impact)
  - Meta-Pattern Finding (DD-F-006 FRACTAL, marked as "THE STRONGEST PRINCIPLE")
  - Process Findings table (DD-F-007 through DD-F-009)
  - Forward-Looking Findings for OD (DD-F-010, DD-F-011), AD (DD-F-012), CD (DD-F-013, DD-F-014)
  - Anti-Pattern Findings (DD-F-015 through DD-F-018)
  - Finding Consumption Matrix (cross-stage grid: OD/AD/CD/Migration)
  - Stage 1 consumption verification table (how COMP-F-### were consumed)
- **Finding IDs exported:** DD-F-001 through DD-F-018 (18 total)
- **OD equivalent:** Does not exist. OD-F-001 through OD-F-008 are documented only in `checkpoints/OD-CHECKPOINT.md` (lines 140-157), not in any provenance file.

#### HANDOFF-DD-TO-OD.md (338 lines)
- **YAML frontmatter:** Pipeline stage 2->3, predecessor/successor, backbone/manifest refs
- **Inline Threading Header:** Tier A, Batch 6, 10 diagnostic sections, 8+ inbound references
- **Sections:**
  - Purpose and 3-step acknowledgment protocol
  - Density Pattern table (6 patterns with scores, descriptions, OD usage instructions)
  - DD Outbound Findings mandatory consumption table (8 MUST consume, 4 SHOULD reference)
  - Soul Pieces transfer (5 visual, potential cognitive)
  - Quality Bar table (DD achieved vs OD must match)
  - Primary Research for OD table (R-1, R-5, R-3 with priorities)
  - DD Iteration Lessons (highest/lowest scores, re-audit improvements)
  - OD Responsibilities to the Chain (6 files OD must CREATE, 8 files OD must UPDATE, 10 verifications OD must PASS)
  - OD-to-Density Pairing table (6 ODs with primary/secondary density and rationale)
  - Acknowledgment checklist (7 items)
- **OD equivalent:** Does not exist. No HANDOFF-OD-TO-AD.md file.

#### STAGE-HEADER.md (244 lines)
- **YAML frontmatter:** Pipeline stage, predecessor/successor chain
- **Inline Threading Header:** Tier B, Batch 6
- **Sections:**
  - "The Story" narrative (6 DD explorations, scores, key insights for each)
  - What This Stage Consumed table (5 input categories with file locations)
  - What This Stage Produced table (6 output categories)
  - Quality Achieved table (7 metrics with values and evidence)
  - Key Decisions section (5 decisions, each with What/Why/Impact)
  - Causal Relationships (enabled by, constrains, breaks without)
  - Accumulated Research Weight table
  - Files In This Folder table
- **OD equivalent:** EXISTS but is IN PROGRESS (178 lines). The OD STAGE-HEADER is a planning document with "unfolding" story, "will consume/will produce" tables (future tense), and a "files expected after completion" table showing 5 of 6 items PENDING.

#### DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md (646 lines)
- **Sections per DD:** Audit Identification, Components Present, 8-Step Visual Inspection Protocol (8 steps), Soul Piece Verification matrix, Sub-Agent Deployment (A: Visual Comparator, D: Evaluator), Quality Score (4 dimensions), Decision Assessment
- **Per-exploration detail:** Each of the 6 DDs gets ~90-100 lines of individual audit
- **Summary sections:** Master Score Table, Soul Piece Verification Matrix, Screenshots Captured, CSS Token Verification, Audit Sign-Off
- **OD equivalent:** Does not exist in provenance. The equivalent data lives in `_od-audit-scratchpad/` (29 files, 9,275 lines) and `OD-GRANULAR-AUDIT-RESULTS.md` (620 lines, in knowledge-architecture/). Neither is in the provenance directory.

#### DD-REAUDIT-CHECKPOINT.md (220 lines)
- Progress tracking: Phase 0 (Setup), Phase 1 (Screenshots), Component Mapping, Phase 2 (Per-DD Audit with 20+ checkboxes per DD), Phase 3 (Synthesis), Phase 4 (Upward Flow), Phase 5 (Final)
- Original DD Scores reference table
- **OD equivalent:** Does not exist in provenance. The closest analog is `checkpoints/OD-CHECKPOINT.md` (163 lines), which IS updated with per-OD state snapshots but is NOT synced to provenance.

#### CLAUDE.md (128 lines)
- 5-section navigation standard (Identity, How to Read, What's Here, How This Connects, Mindset)
- Clearly marks DD-F-006 as "most important finding"
- File inventory with status and reading context
- Consumes/Produces/Feeds Into tables
- **OD equivalent:** EXISTS (114 lines) but labeled PLACEHOLDER. Still has "PENDING" for 4 of 6 files in the inventory.

### 2B. OD Artifacts -- Content Depth

#### OD STAGE-HEADER.md (178 lines, IN PROGRESS)
- YAML frontmatter present with predecessor/successor and status: IN_PROGRESS
- Inline Threading Header present, noting "OD work has not begun" (stale -- OD work HAS completed)
- "The Story (Unfolding)" -- describes 6 planned explorations (present tense/future tense)
- "What This Stage WILL Consume" / "What This Stage WILL Produce" -- future tense throughout
- Quality bar from DD
- "Files Expected After Completion" table -- 5 of 6 entries marked PENDING
- "Before Starting OD Work" checklist
- **Gap:** This file was never updated from planning document to completion document. DD's equivalent transitioned to past tense with full achievement metrics, key decisions, and causal relationships.

#### OD-RESEARCH-GATE.md (145 lines, PASSED)
- YAML frontmatter with status: PASSED
- Inline section verification table (9 files read and verified)
- R-1 Finding-by-Finding Mapping: 6 subsections (one per OD), each with a 5-column table mapping R-1 findings to implementation plans, expected evidence, and DD constraints
- R-5 secondary findings table
- DD Constraints Inherited table (13 constraints mapped)
- Summary table: 24/28 R-1 findings mapped (86%), 100% of DD-F findings mapped
- **This is the most complete OD provenance artifact.** It was created pre-build (as a gate) and updated with PASSED status post-gate.
- **Gap:** This file maps planned applications but was never updated with ACTUAL application status (APPLIED vs NOT APPLIED). DD's equivalent (inline in HANDOFF and RESEARCH-ACTIVE) tracks actual application rate (~76%).

#### OD CLAUDE.md (114 lines, PLACEHOLDER)
- Has 5-section structure but all output file references show PENDING status
- HOW TO READ section refers to future files that now exist elsewhere but not in provenance
- Still says "OD work itself is PENDING" in the threading header
- **Gap:** Never updated from placeholder to reflect that 6 OD explorations are complete, audited, and fixed.

---

## 3. PROCESS RECONSTRUCTION

### 3A. DD Provenance Timeline

By examining dates, status markers, and references, the DD provenance artifacts can be placed in this lifecycle:

| Phase | What Happened | Evidence |
|-------|---------------|----------|
| **Pre-build (Phase 0)** | STAGE-HEADER.md created as planning document | last_updated: 2026-02-05 in frontmatter |
| **During build** | DD-001 through DD-006 explorations created and scored | Score references in STAGE-HEADER and CHECKPOINT |
| **Post-build, Pre-audit** | DD-REAUDIT-CHECKPOINT.md created for tracking | "Date Started: 2026-02-04" at top |
| **During audit** | DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md populated with per-DD audit results | Full 8-step protocol results, screenshots dated 2026-02-04 |
| **Post-audit** | STAGE-HEADER.md updated to completion narrative (past tense, achievement metrics) | Quality Achieved table, Key Decisions, Causal Relationships |
| **Post-audit** | DD-outbound-findings.md created with all 18 DD-F findings | References re-audit scores (post-improvement values) |
| **Post-audit** | HANDOFF-DD-TO-OD.md created as gate file for OD | References final DD scores (34.5/40 average), complete responsibility list |
| **Post-audit** | CLAUDE.md updated from placeholder to complete 5-section standard | All 6 files marked COMPLETE |
| **Phase 2B (2026-02-06)** | Inline Threading Headers added to all 6 files | Tier A/B/C, Batch 6, "Generated: 2026-02-06" |

**Key finding:** DD's outbound findings and handoff were written AFTER the audit completed and scores were finalized. This is a post-completion synthesis activity. The STAGE-HEADER was initially a planning document and later updated to a completion document.

### 3B. OD Provenance Timeline

| Phase | What Happened | Evidence |
|-------|---------------|----------|
| **Pre-build (Phase 0)** | STAGE-HEADER.md created as planning document | last_updated: 2026-02-05, status: IN_PROGRESS |
| **Pre-build (Phase 0)** | CLAUDE.md created as placeholder | Labeled "PLACEHOLDER" |
| **Phase 2B (2026-02-06)** | Inline Threading Headers added to all 3 files | Batch 6, "Generated: 2026-02-06" |
| **Pre-build (Phase 0)** | OD-RESEARCH-GATE.md created and passed | last_updated: 2026-02-07, GATE STATUS: PASSED |
| **Build phase** | 6 OD explorations built (OD-001 through OD-006) | HTML files exist in `explorations/organizational/` |
| **Audit phase** | Granular adversarial audit executed (17 agents, 29 scratchpad files) | `_od-audit-scratchpad/` (9,275 lines), `OD-GRANULAR-AUDIT-RESULTS.md` (620 lines) |
| **Fix phase** | 16/16 fixes applied, verified (187 DOM tests + 12 visual screenshots) | 4 fixer reports + 2 verification reports in scratchpad |
| **Post-fix** | OD-CHECKPOINT updated to "VISUAL AUDIT COMPLETE" | `checkpoints/OD-CHECKPOINT.md` line 9 |
| **NEVER HAPPENED** | STAGE-HEADER.md update to completion document | Still says "unfolding", "will consume", all PENDING |
| **NEVER HAPPENED** | OD-outbound-findings.md creation | 8 OD-F findings exist only in OD-CHECKPOINT |
| **NEVER HAPPENED** | HANDOFF-OD-TO-AD.md creation | No file exists |
| **NEVER HAPPENED** | OD-SYNTHESIS.md creation | No file exists |
| **NEVER HAPPENED** | CLAUDE.md update from placeholder | Still says PENDING |
| **NEVER HAPPENED** | OD-RESEARCH-GATE.md update with APPLIED status | Still shows pre-build mapping only |
| **NEVER HAPPENED** | Audit synthesis synced to provenance | Remains in `_od-audit-scratchpad/` and `knowledge-architecture/` |
| **NEVER HAPPENED** | PIPELINE-MANIFEST.md update | Section B Stage 3 still says "TBD" |

**Key finding:** OD completed the build, audit, and fix phases -- all operational work is done. But the post-completion synthesis that converts operational data into provenance chain artifacts never occurred. The process that produced DD's completeness was a dedicated "provenance wrap-up" phase after the build+audit+fix cycle concluded. OD skipped this phase entirely.

---

## 4. THE DELTA: What DD Exports That OD Does Not

### 4A. Finding ID Export

| What DD Exports | Where | OD Status |
|-----------------|-------|-----------|
| DD-F-001 through DD-F-018 (18 formal finding IDs) | `DD-outbound-findings.md` | OD-F-001 through OD-F-008 exist only in `checkpoints/OD-CHECKPOINT.md` (lines 140-157). No formal outbound findings file. |
| Per-finding metadata (Source, Score, For Which OD, Chain Impact) | Outbound findings tables | OD findings have Name and Description but no Score, Chain Impact, or For-Which-AD columns |
| Finding Consumption Matrix (grid of which stages consume which findings) | Outbound findings Section F | Does not exist for OD |
| Stage 1 consumption verification (how COMP-F-### were consumed) | Outbound findings bottom section | Does not exist -- no record of how DD-F-### were consumed by OD |

### 4B. Handoff Export

| What DD Exports | Where | OD Status |
|-----------------|-------|-----------|
| Complete density pattern table with scores and "How OD Must Use It" | HANDOFF-DD-TO-OD.md | No HANDOFF-OD-TO-AD.md exists. AD has no gate file from OD. |
| Mandatory consumption list (MUST consume + SHOULD reference) | HANDOFF-DD-TO-OD.md | Does not exist |
| Soul Pieces transfer with OD verification requirements | HANDOFF-DD-TO-OD.md | Does not exist |
| Quality Bar comparison (achieved vs must match) | HANDOFF-DD-TO-OD.md | Does not exist |
| Primary research identification for next stage | HANDOFF-DD-TO-OD.md | Does not exist |
| Iteration lessons (what scored highest/lowest and why) | HANDOFF-DD-TO-OD.md | Does not exist |
| Files next stage must CREATE and UPDATE | HANDOFF-DD-TO-OD.md | Does not exist |
| Verifications next stage must PASS | HANDOFF-DD-TO-OD.md | Does not exist |
| OD-to-Density pairing (mandatory) | HANDOFF-DD-TO-OD.md | Does not exist. AD would need OD-to-organization pattern pairings. |
| Acknowledgment checklist | HANDOFF-DD-TO-OD.md | Does not exist |

### 4C. Completion Documentation

| What DD Exports | Where | OD Status |
|-----------------|-------|-----------|
| Past-tense narrative ("The Story") | STAGE-HEADER.md | OD STAGE-HEADER still future tense ("will consume", "will produce") |
| What This Stage Consumed table (actual, past tense) | STAGE-HEADER.md | Only "will consume" exists |
| What This Stage Produced table (actual, past tense) | STAGE-HEADER.md | Only "will produce" exists |
| Quality Achieved table (7 metrics with values) | STAGE-HEADER.md | Does not exist |
| Key Decisions with provenance (5 decisions: What/Why/Impact) | STAGE-HEADER.md | Does not exist |
| Causal Relationships (enabled by, constrains, breaks without) | STAGE-HEADER.md | Does not exist |
| Accumulated Research Weight table | STAGE-HEADER.md | Does not exist |
| Files In This Folder with COMPLETE status | STAGE-HEADER.md | Still shows 5 of 6 PENDING |

### 4D. Audit Synthesis in Provenance

| What DD Has in Provenance | Lines | OD Equivalent | Location |
|---------------------------|-------|---------------|----------|
| DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | 646 | OD-GRANULAR-AUDIT-RESULTS.md (620 lines) | `knowledge-architecture/` (NOT provenance) |
| DD-REAUDIT-CHECKPOINT.md | 220 | OD-CHECKPOINT.md (163 lines) | `checkpoints/` (NOT provenance) |
| N/A | N/A | 29 scratchpad files (9,275 lines) | `_od-audit-scratchpad/` (NOT provenance) |
| N/A | N/A | 4 fix reports + 2 verification reports | `_od-audit-scratchpad/` (NOT provenance) |

### 4E. Constraint Lists

| What DD Exports as Constraints | OD Status |
|--------------------------------|-----------|
| DD-F-006 FRACTAL as mandatory for all downstream stages | OD consumed this but never exported equivalent. OD-F-005 ("Organization IS Density") is arguably a meta-finding of equal weight but has no formal constraint export. |
| Anti-pattern findings DD-F-015 through DD-F-018 | No OD anti-pattern findings formalized. The audit found issues (108 thin-border declarations, traffic-light concerns) but these were fixed, not exported as anti-pattern findings for AD. |
| Quality bar (34.5/40 average, >=32 for INCLUDE) | OD scores exist in OD-CHECKPOINT but no quality bar is exported for AD. |

### 4F. Pairing Recommendations

| What DD Exports | OD Status |
|-----------------|-----------|
| DD paired each OD exploration with a recommended density pattern | OD has not paired each AD exploration with a recommended organizational pattern |
| 6-row pairing table with primary/secondary/rationale | Does not exist |

### 4G. Research Application Tracking

| What DD Exports | OD Status |
|-----------------|-----------|
| R-3 application rate (~76%, 48/51 applicable) | OD-RESEARCH-GATE.md shows 86% mapped, but never updated with actual APPLIED vs NOT status |
| Per-finding APPLIED evidence | Does not exist. R-1 findings were mapped pre-build but actual application was never verified in the gate file. |

### 4H. PIPELINE-MANIFEST.md Updates

| What DD Contributed to PIPELINE-MANIFEST | OD Status |
|------------------------------------------|-----------|
| Section B: Stage 2 (DD-F-###) -- 18 findings listed with Type, Consumed By, Status | Section B: Stage 3 still says "TBD -- OD explorations not yet complete" |
| Section D: Density Patterns -- 6 patterns with Research, Generated Finding, Validated By, Score | Section D: Organizational Patterns still says "TBD" |
| Section E: Cross-references for DD findings | No OD cross-references added |

---

## 5. QUALITY ASSESSMENT

### 5A. DD Provenance Completeness

DD's provenance chain is genuinely comprehensive. Strengths:

1. **Full lifecycle coverage:** Planning document (STAGE-HEADER) transitions cleanly to completion document. The story shifts from future tense to past tense with concrete achievement metrics.

2. **Formal finding export:** All 18 DD-F findings are formally defined with consistent metadata (Source, Score, Chain Impact, For Which Stage). The consumption matrix tracks downstream consumers.

3. **Gate file quality:** HANDOFF-DD-TO-OD.md is exceptional at 338 lines. It transfers knowledge, sets quality bars, assigns pairings, lists responsibilities, and includes an acknowledgment protocol. This is the gold standard for stage transitions.

4. **Audit integration:** Both the checkpoint (progress tracking) and synthesis (results) files are synced to provenance, providing a complete audit trail within the chain itself.

5. **Threading compliance:** All 6 files have Inline Threading Headers (Phase 2B) with proper tier assignments, diagnostic questions, and dependency tables.

6. **Self-documenting navigation:** CLAUDE.md provides clear reading order, connection maps, and mindset framing. An agent entering this directory cold can orient within 2 minutes.

### 5B. DD Provenance Gaps (Even in the "Complete" Chain)

Despite overall completeness, DD's provenance has observable gaps:

1. **RESEARCH-GATE absence:** DD had no formal Research Gate file. The R-3 application tracking was distributed across HANDOFF-DD-TO-OD.md and RESEARCH-ACTIVE.md. OD actually improved on DD by creating a dedicated OD-RESEARCH-GATE.md pre-build. However, OD then failed to update it post-build.

2. **Scores in REAUDIT-CHECKPOINT are incomplete:** The per-DD audit tracking (Phase 2 section) shows DD-001 with full detail (20+ checkboxes) but DD-002 through DD-006 have abbreviated tracking (5 checkboxes each). The checkpoint was not consistently maintained during the audit process.

3. **Score discrepancy:** DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md reports the average as 34.2/40 in the executive summary (line 71) but 34.5/40 in the master score table (line 534). STAGE-HEADER.md uses 34.5/40. This minor inconsistency was never reconciled.

4. **No formal OD-specific research gate:** DD consumed R-3 findings but never created a formal "DD-RESEARCH-GATE.md" tracking per-finding APPLIED status. The research tracking was ad hoc.

5. **Synced duplicates are fragile:** DD-REAUDIT-CHECKPOINT.md and DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md are declared as "SYNCED DUPLICATE of checkpoints/" in their threading headers. The sync mechanism is manual, with no verification that the provenance copies remain in sync with the operational originals.

### 5C. OD Provenance Assessment

OD's provenance is fundamentally incomplete. The paradox is stark:

- **Operational work:** COMPLETE and thorough. 6 explorations built, audited by 17 agents across 4 phases (~45 min), fixes applied and verified (187 DOM tests + 12 visual screenshots), all passing.
- **Provenance artifacts:** 3 of ~8 expected files exist. Zero are in COMPLETE status. The provenance directory contains only pre-build and planning artifacts.

The OD operational data is actually richer than DD's in some ways:
- 9,275 lines of audit scratchpad vs DD's 646-line synthesis (14x more raw data)
- 620-line granular audit results vs DD's 646-line perceptual synthesis (comparable)
- 17 agents vs DD's 5 sub-agents (3.4x more auditors)
- 89 findings vs DD's implicit findings (more granular)
- Fix verification: 187 programmatic DOM tests vs DD's visual-only verification

But none of this data has been converted into provenance chain artifacts. It exists in operational locations (`_od-audit-scratchpad/`, `knowledge-architecture/`, `checkpoints/`) that are not part of the formal provenance chain.

### 5D. What the PIPELINE-MANIFEST Expects

The PIPELINE-MANIFEST.md (280 lines) defines the expected artifact structure:
- Section B Stage 3 (OD-F-###): Currently "TBD"
- Section D Organizational Patterns: Currently "TBD"
- Finding Lifecycle States table: OD findings would need to transition from PENDING to APPLIED

The HANDOFF-DD-TO-OD.md (lines 232-305) explicitly lists what OD must create:
- 6 files OD must CREATE (of which 0 have been created in provenance)
- 8 files OD must UPDATE (of which 0 have been updated)
- 10 verifications OD must PASS (not documented as passed)

### 5E. Asymmetry Summary

| Dimension | DD | OD | Gap |
|-----------|----|----|-----|
| Provenance files | 6 | 3 | 3 files missing |
| Provenance lines | 1,796 | 437 | 1,359 lines deficit (76% less) |
| Files in COMPLETE status | 6/6 (100%) | 0/3 (0%) | 100% gap |
| Formal finding IDs in provenance | 18 (DD-F-001-018) | 0 | 18 findings unexported |
| Gate file for next stage | EXISTS (338 lines) | MISSING | Complete gap |
| Quality bar exported | YES | NO | Complete gap |
| Pairing recommendations exported | YES | NO | Complete gap |
| Audit synthesis in provenance | YES (646 + 220 lines) | NO (exists elsewhere) | Location gap |
| PIPELINE-MANIFEST updated | YES | NO | Complete gap |
| Research application verified | Partial (~76% reported) | NO (mapped only, not verified) | Verification gap |

---

## 6. RAW DATA REFERENCE

### DD Provenance Directory Inventory

```
provenance/stage-2-density-dd/
  CLAUDE.md                           128 lines  COMPLETE
  DD-outbound-findings.md             220 lines  COMPLETE  (Tier A)
  DD-REAUDIT-CHECKPOINT.md            220 lines  COMPLETE  (Tier B, synced)
  DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md  646 lines  COMPLETE  (Tier B, synced)
  HANDOFF-DD-TO-OD.md                 338 lines  COMPLETE  (Tier A)
  STAGE-HEADER.md                     244 lines  COMPLETE  (Tier B)
  ─────────────────────────────────────────────
  TOTAL                              1,796 lines  6 files
```

### OD Provenance Directory Inventory

```
provenance/stage-3-organization-od/
  CLAUDE.md                           114 lines  PLACEHOLDER
  OD-RESEARCH-GATE.md                 145 lines  PASSED (pre-build mapping only)
  STAGE-HEADER.md                     178 lines  IN PROGRESS (planning document)
  ─────────────────────────────────────────────
  TOTAL                               437 lines  3 files

  MISSING (expected by HANDOFF-DD-TO-OD checklist):
  OD-outbound-findings.md             ---        MISSING
  HANDOFF-OD-TO-AD.md                 ---        MISSING
  OD-SYNTHESIS.md                     ---        MISSING
```

### OD Operational Data (exists outside provenance)

```
checkpoints/OD-CHECKPOINT.md                              163 lines  (scores, findings, state)
knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md        620 lines  (audit synthesis)
knowledge-architecture/_od-audit-scratchpad/              9,275 lines  (29 files, raw audit data)
  - visual-audit-001 through 006                         1,845 lines
  - systematic-audit-001 through 006                     2,607 lines
  - identity-brief.md                                      522 lines
  - research-refinement.md                                 395 lines
  - fresh-eyes.md                                          324 lines
  - cross-od-consistency.md                                607 lines
  - structural-integrity.md                                403 lines
  - contrast-accessibility.md                              361 lines
  - content-authenticity.md                                306 lines
  - comparative-reference.md                               313 lines
  - weaver-tracker.md                                      179 lines
  - fix reports (4 fixers)                                 798 lines
  - fix verification (programmatic + visual)               522 lines
  - FIX-STATE.md                                            88 lines
  - AUDIT-STATE.md                                          25 lines
knowledge-architecture/OD-GRANULAR-AUDIT-PROMPT.md           -- lines  (audit methodology)
knowledge-architecture/OD-FIX-EXECUTION-PROMPT.md            -- lines  (fix methodology)
knowledge-architecture/OD-RETROSPECTIVE-AND-PROTOCOL-v2.md   -- lines  (process learnings)
knowledge-architecture/OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md -- lines (updated process)
knowledge-architecture/OD-EXECUTION-PROTOCOL.md              -- lines  (execution method)
knowledge-architecture/OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md -- lines (team structure)
knowledge-architecture/OD-004-EXTERNAL-RESEARCH.md           -- lines  (external research)
knowledge-architecture/OD-005-EXTERNAL-RESEARCH.md           -- lines  (external research)
```

---

## 7. KEY OBSERVATIONS

### 7A. The Missing Phase

DD's provenance completeness came from a dedicated post-completion synthesis phase. After DD's explorations were built and audited, someone sat down and:
1. Created the outbound findings file (formalizing DD-F findings)
2. Created the handoff file (packaging everything for OD)
3. Updated the STAGE-HEADER from planning to completion
4. Updated the CLAUDE.md from placeholder to navigation
5. Synced audit artifacts into provenance

OD completed the build phase, the audit phase (more thoroughly than DD), and the fix phase. But the synthesis/wrap-up phase never happened. The OD-CHECKPOINT.md (line 8-10) explicitly states the next action: "OD synthesis documents -> HANDOFF-OD-TO-AD -> ACCUMULATED-IDENTITY-v2 final -> HUMAN PAUSE." This was acknowledged as needed but never executed.

### 7B. Data Exists, Location is Wrong

OD's problem is not missing data. It is data in the wrong location. The OD-F findings (OD-F-001 through OD-F-008) exist in OD-CHECKPOINT.md. The audit results (620 lines) exist in OD-GRANULAR-AUDIT-RESULTS.md. The raw audit data (9,275 lines) exists in the scratchpad. The per-OD scores, key insights, and density pairings all exist in OD-CHECKPOINT.md.

The gap is a conversion/migration gap, not an information gap. The raw material for every missing provenance artifact exists somewhere in the operational files.

### 7C. The Research Gate Asymmetry

Ironically, OD improved on DD by creating a formal OD-RESEARCH-GATE.md that DD never had. But this improvement was then undermined by never updating the gate file with actual application results. The gate was passed pre-build (2026-02-07) with 86% of R-1 findings mapped, but the "APPLIED/NOT" status update that HANDOFF-DD-TO-OD.md mandates (line 242: "Finalized with APPLIED/NOT status for each R-1 finding") never happened.

### 7D. The OD-F Finding Discrepancy

DD produced 18 formal finding IDs (DD-F-001 through DD-F-018). OD produced only 8 finding IDs (OD-F-001 through OD-F-008), all from just two explorations (OD-001 and OD-006). OD-002 through OD-005 generated no formal OD-F findings despite each having documented key insights in OD-CHECKPOINT.md. This is either an incomplete enumeration or a deliberate decision to limit findings to the most significant ones -- but it is not documented either way.

### 7E. The PIPELINE-MANIFEST is Stale

The PIPELINE-MANIFEST.md (the master finding registry) has not been updated for OD. Section B Stage 3 says "TBD -- OD explorations not yet complete." Section D Organizational Patterns says "TBD." This means the central registry that DD fully populated remains empty for OD, even though OD work is functionally complete.

---

*End of analysis. This document catalogs the delta without proposing solutions.*
